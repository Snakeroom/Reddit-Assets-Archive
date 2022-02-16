// https://www.redditstatic.com/desktop2x/AuthorHovercard.686ac76298ebe40ea0cc.js
// Retrieved at 2/16/2022, 4:20:05 PM by Reddit Dataminer v1.0.0
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
				return r
			}));
			var a = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/constants/intlSupport.ts");

			function r(e, {
				showDay: t,
				useUtc: n,
				shortMonths: r,
				locale: o = a.D
			} = {}) {
				const i = new Date(e * a.Sb);
				return s.a ? new Intl.DateTimeFormat(o, {
					month: r ? "short" : "long",
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
				s = n("./src/lib/getParsedUserAgent/index.ts"),
				r = n("./src/lib/localStorageAvailable/index.ts"),
				o = n("./src/lib/notifications/constants.ts"),
				i = n("./src/lib/notifications/featureFlags.ts");
			n("./src/lib/serviceWorker/index.ts");
			const c = () => {
					if (Object(i.a)() !== o.c.NotificationsSupported) return o.a.Unsupported;
					const e = Object(r.a)() && localStorage.getItem(o.f) === o.g;
					return "granted" === Notification.permission ? o.a.Granted : "denied" === Notification.permission ? o.a.Denied : e ? o.a.Closed : o.a.Default
				},
				d = () => !!Object(r.a)() && (localStorage.removeItem(o.f), !0),
				l = async (e, t, n, i, d, l) => {
					const u = c();
					if (u === o.a.Unsupported) return void l();
					if (Object(r.a)()) {
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
					switch (Object(s.b)(b) || Object(s.f)(b) ? Object(a.a)(1800).then(() => {
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
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			}));
			var a = n("./src/lib/makeActionCreator/index.ts");
			const s = "INCONTEXT__BANNED",
				r = "INCONTEXT__MUTED",
				o = Object(a.a)(s),
				i = Object(a.a)(r)
		},
		"./src/reddit/actions/notificationSettingsLayout/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
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
				s = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__LOADED",
				r = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__PENDING",
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
				return C
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "b", (function() {
				return j
			}));
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/redditGQL/operations/UserSubredditsNotificationsLevel.json");
			var l = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const m = Object(s.a)(r.c),
				b = Object(s.a)(r.b),
				p = Object(s.a)(r.a),
				f = Object(s.a)(r.f),
				h = Object(s.a)(r.e),
				v = Object(s.a)(r.d),
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
										s = [];
									const r = e => {
										const {
											rowIds: r,
											rowsCollection: o
										} = function(e) {
											const t = [],
												n = {};
											if (e.rows)
												for (let a = 0; a < e.rows.length; a++) {
													const s = e.rows[a],
														r = s.messageType;
													t.push(r), n[r] = s
												}
											return {
												rowsCollection: n,
												rowIds: t
											}
										}(e);
										a = {
											...a,
											...o
										}, s = [...s, ...r];
										const i = e.id;
										n.push(i), t[i] = {
											...e,
											rows: r
										}
									};
									for (let o = 0; o < e.length; o++) r(e[o]);
									return {
										sections: {
											byId: t,
											allIds: n
										},
										rows: {
											byId: a,
											allIds: s
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
			const x = Object(s.a)(r.g),
				_ = e => async (t, n, {
					gqlContext: s
				}) => {
					(await Object(i.b)(s(), e)).ok ? (C(t, e), function(e) {
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

			function C(e, t) {
				e(x({
					isEnabled: t.isEnabled,
					messageType: t.messageType
				}))
			}
			const N = Object(s.a)(r.j),
				g = Object(s.a)(r.i),
				O = Object(s.a)(r.k),
				k = Object(s.a)(r.h),
				j = e => async (t, n, {
					gqlContext: a
				}) => {
					var s, r;
					t(N());
					const i = await ((e, t) => Object(c.a)(e, {
						...d,
						variables: t
					}))(a(), e);
					if (null === (r = null === (s = i.error) || void 0 === s ? void 0 : s.fields) || void 0 === r ? void 0 : r.length) return t(k({
						error: i.error
					})), void t(Object(o.d)());
					if (i.ok && i.body) {
						const e = i.body,
							n = e && e.data,
							a = n && n.identity && n.identity.subscribedSubreddits,
							s = a && a.pageInfo,
							r = (a && a.edges).map(e => e.node);
						t(g({
							nodes: r,
							pageInfo: s
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
				s = n("./src/lib/notifications/constants.ts"),
				r = n("./src/lib/notifications/featureFlags.ts"),
				o = n("./src/reddit/featureFlags/index.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts");
			const c = e => o.d.pushNotificationsBrowserSupported(e) ? Object(r.a)() : s.c.BrowserUnsupported,
				d = e => {
					switch (e) {
						case s.a.Denied:
							i.ob(!1), Object(a.c)();
							break;
						case s.a.Default:
						case s.a.Granted:
							i.ob(!0), Object(a.c)();
							break;
						case s.a.Closed:
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
				s = n("./node_modules/lodash/get.js"),
				r = n.n(s),
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
				C = n("./src/reddit/models/Toast/index.ts"),
				N = n("./src/reddit/selectors/activeModalId.ts"),
				g = n("./src/reddit/selectors/bannedUser.ts"),
				O = n("./src/reddit/selectors/subreddit.ts"),
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
							} = t.payload, s = Object(_.e)(n, a);
							return {
								...e,
								[s]: !0
							}
						}
						case j.n:
						case j.m: {
							const {
								subredditId: n,
								fetchedToken: a
							} = t.payload, s = Object(_.e)(n, a);
							return {
								...e,
								[s]: !1
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
			const M = {};
			var A = (e = M, t) => {
					switch (t.type) {
						case j.n: {
							const {
								fetchedToken: n,
								subredditId: a
							} = t.payload, s = Object(_.e)(a, n);
							return {
								...e,
								[s]: !0
							}
						}
						default:
							return e
					}
				},
				B = n("./src/reddit/actions/inContextModeration.ts");
			var T = (e = null, t) => {
				switch (t.type) {
					case B.a:
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
							} = t.payload, s = a[0];
							return s && e[n] && -1 === e[n].indexOf(s) ? {
								[n]: [s, ...e[n]]
							} : e
						}
						default:
							return e
					}
				},
				z = Object(y.c)({
					api: U,
					fetchedTokens: A,
					inContext: T,
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
					apiContext: s
				}) => {
					const r = a(),
						o = t.after || "",
						i = Object(_.e)(e, o),
						c = r.features.banned.fetchedTokens[i];
					if (r.features.banned.api.pending[i] || c) return;
					n(V({
						subredditId: e,
						fetchedToken: o
					}));
					const d = r.subreddits.models[e].name,
						l = await I(s(), d, t);
					l.ok ? n(X({
						...l.body,
						fetchedToken: o
					})) : n(Y({
						subredditId: e,
						fetchedToken: o
					}))
				}, ee = Object(o.a)(j.r), te = Object(o.a)(j.q), ne = Object(o.a)(j.p), ae = (e, t) => async (n, a, {
					apiContext: s
				}) => {
					const r = a().subreddits.models[e].name,
						o = {
							username: Object(x.a)(t)
						};
					n(ee());
					const i = await I(s(), r, o);
					i.ok ? n(te(i.body)) : n(ne(i.error))
				}, se = Object(o.a)(j.l), re = Object(o.a)(j.s), oe = (e, t, n) => async (s, o, {
					apiContext: c
				}) => {
					const d = o(),
						u = d.subreddits.models[e].url,
						h = d.subreddits.models[e].name;
					t.username = Object(x.a)(t.username), s(Object(i.h)(n));
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
						s(Object(i.e)(n));
						const e = {
							username: t.username
						};
						s(Object(l.f)({
							kind: C.b.SuccessMod,
							text: a.fbt._("Successfully banned a user", null, {
								hk: "1kORpS"
							})
						}));
						const r = await I(c(), h, e);
						r.ok && s(se(r.body))
					} else {
						s(Object(i.f)(n, v.error));
						const e = r()(v, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						s(Object(l.f)({
							kind: C.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ie = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const i = s().subreddits.models[e].url,
						c = await ((e, t, n) => Object(b.a)(Object(p.a)(e, [f.a]), {
							endpoint: `${e.apiUrl}${t}api/unfriend`,
							method: m.jb.POST,
							data: {
								api_type: "json",
								id: n,
								type: "banned"
							}
						}))(o(), i, t);
					if (c.ok) n(re({
						subredditId: e,
						userId: t
					})), n(Object(l.f)({
						kind: C.b.SuccessMod,
						text: a.fbt._("Successfully unbanned a user", null, {
							hk: "OgqK6"
						})
					}));
					else {
						const e = r()(c, "body.json.errors[0][1]", a.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						}));
						n(Object(l.f)({
							kind: C.b.Error,
							text: e,
							duration: 3e3
						}))
					}
				}, ce = (e, t) => async (n, a) => {
					const s = a();
					await Promise.all([(async () => {
						if (!Object(N.b)(u.a.BAN_USER)(s) && !Object(O.P)(s, {
								subredditId: e
							})) {
							const t = Object(O.S)(s, {
								subredditId: e
							});
							await n(Object(d.o)(t.name))
						}
					})(), (async () => {
						const a = Object(k.sb)(s, {
							userName: t
						});
						if (!a) return;
						const r = Object(g.h)(s, {
							subredditId: e
						});
						r && r[a.id] || await n($(e, {
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
			var a, s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
				sendEvent: s,
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
				return r.a.createElement(d.t, {
					onClick: t => {
						if (p && p(t), e(), b === a.awardNotification) return f();
						s(Object(l.b)(o))
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
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
						caretPosition: s,
						caretColor: o,
						onClick: i,
						hideCaret: d,
						...l
					} = e;
					return r.a.createElement("div", h({
						onClick: i,
						className: Object(c.a)(n, f.a.StyledTooltipContainer, {
							[f.a.caretOnTop]: "top" === s,
							[f.a.caretOnLeft]: "left" === s,
							[f.a.caretOnRight]: "right" === s,
							[f.a.caretOnBottom]: "bottom" === s,
							[f.a.hideCaret]: d
						}),
						style: {
							...a,
							"--contentTooltip-caretColor": o && o[s] ? o[s] : Object(m.a)(e).body
						}
					}, l), t)
				}),
				_ = Object(i.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(b.b)(t)(e)
				}),
				C = Object(u.a)(x, [a.a.Click, a.a.Keydown]),
				N = Object(o.b)(_);
			class g extends r.a.Component {
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
							let s = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									s = window.innerHeight - a.bottom > t.height;
									break;
								case "left":
									s = a.left > t.width;
									break;
								case "right":
									s = a.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									s = a.top > t.height
							}
							this.setState({
								position: s ? this.props.defaultTooltipPosition : I(this.props.defaultTooltipPosition)
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
					return r.a.createElement(C, h({}, this.props, {
						caretPosition: a,
						targetPosition: t,
						tooltipPosition: n
					}))
				}
			}
			t.a = N(g)
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
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
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
				const h = Object(r.e)(u.a);
				return s.a.createElement("div", {
					className: Object(o.a)(b.a.Container, n)
				}, s.a.createElement("label", {
					className: b.a.HitBox
				}, s.a.createElement("span", {
					className: b.a.ImageContainer,
					role: "presentation"
				}, p ? s.a.createElement("img", {
					alt: e,
					className: b.a.Image,
					src: p
				}) : t), s.a.createElement(i.a, {
					className: b.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(l.b)();
						f(e, t)
					},
					isPending: h ? m : void 0
				}), !m && s.a.createElement("div", {
					className: Object(o.a)(b.a.EditButton, {
						[b.a.profileCard]: a
					})
				}, s.a.createElement(d.a, {
					name: "add_media",
					className: b.a.EditIcon
				}))), m && s.a.createElement(c.a, {
					className: b.a.LoadingIcon,
					sizePx: 80
				}))
			}
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/HoverCard.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
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
				C = n("./src/reddit/selectors/subreddit.ts"),
				N = n("./src/reddit/selectors/tooltip.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/selectors/userFlair.ts"),
				k = n("./src/reddit/selectors/userPrefs.ts"),
				j = n("./src/reddit/components/Hovercards/AuthorHovercard/ModIdCard/async.tsx"),
				E = n("./node_modules/fbt/lib/FbtPublic.js"),
				y = n("./src/config.ts"),
				w = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				S = n("./src/lib/lessComponent.tsx"),
				P = n("./src/lib/prettyPrintNumber/index.ts"),
				U = n("./src/reddit/components/ChatButton/index.tsx"),
				M = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				A = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				B = n("./src/reddit/components/SubscribeButton/index.tsx"),
				T = n("./src/reddit/components/UserIcon/index.tsx"),
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
				user: (e, t) => Object(g.sb)(e, {
					userName: t.username
				})
			});
			class ne extends s.a.Component {
				componentDidMount() {
					this.props.requestUserBanInfo()
				}
				render() {
					const {
						className: e,
						contextId: t,
						hasModMailPermissions: n,
						isUserBanned: a,
						onUnbanUser: r,
						sendEvent: o,
						toggleBanModal: i,
						toggleMuteModal: c
					} = this.props;
					return s.a.createElement("div", {
						className: e
					}, a ? s.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							r(this.props.user.id), o(D.e(t))
						}
					}, s.a.createElement(V.a, {
						name: "ban",
						isFilled: !0,
						className: $.a.icon
					}), ee._("Unban User", null, {
						hk: "1aASyW"
					})) : s.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							i(), o(D.a(t))
						}
					}, s.a.createElement(V.a, {
						name: "ban",
						className: $.a.icon
					}), ee._("Ban User", null, {
						hk: "3OhuLx"
					})), n && s.a.createElement(z.a, {
						role: "button",
						onClick: () => {
							c(), o(D.d(t))
						}
					}, s.a.createElement(V.a, {
						name: "mod_mute",
						className: $.a.icon
					}), ee._("Mute User", null, {
						hk: "3MCujH"
					})))
				}
			}
			var ae = Object(r.b)(te, (e, {
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
				se = n("./src/reddit/actions/userFlair/index.ts");
			const {
				fbt: re
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var oe = Object(r.b)(null, (e, t) => ({
					onToggleUserFlairModal: () => e(Object(se.g)(t.subredditId, t.username))
				}))(e => s.a.createElement(z.a, {
					role: "button",
					onClick: () => {
						e.onToggleUserFlairModal(), e.sendEvent(D.c(e.contextId))
					}
				}, s.a.createElement(V.a, {
					name: "tag",
					className: $.a.icon
				}), re._("Edit user flair", null, {
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
			const le = S.a.wrapped(T.a, "UserIcon", ce.a),
				ue = S.a.wrapped(B.a, "SubscribeButton", ce.a),
				me = S.a.wrapped(U.b, "ChatButton", ce.a),
				be = S.a.wrapped(R.a, "PremiumIcon", ce.a),
				pe = S.a.wrapped(w.a, "UserNameLink", ce.a),
				fe = S.a.div("UserNameMetaData", ce.a),
				he = S.a.div("MetaDataItem", ce.a),
				ve = S.a.div("Bullet", ce.a),
				Ie = S.a.div("UserNameContainer", ce.a),
				xe = S.a.div("KarmaGrid", ce.a),
				_e = S.a.div("GenericKarma", ce.a),
				Ce = S.a.a("InfoLink", ce.a),
				Ne = S.a.div("KarmaCount", ce.a),
				ge = S.a.div("GenericKarmaLabel", ce.a),
				Oe = S.a.div("BannerImage", ce.a),
				ke = S.a.div("UserContainer", ce.a),
				je = S.a.div("BottomSpacer", ce.a),
				Ee = S.a.div("Container", ce.a),
				ye = e => s.a.createElement("div", null, s.a.createElement("div", null, s.a.createElement(pe, {
					to: `/user/${e.userName}/`
				}, e.title || e.userName), e.user.isEmployee && s.a.createElement(H.a, {
					className: ce.a.adminIcon,
					title: E.fbt._("Reddit admin", null, {
						hk: "15wBTE"
					})
				}), e.user.isGold && s.a.createElement(w.a, {
					to: "/premium"
				}, s.a.createElement(be, null))), s.a.createElement(fe, null, s.a.createElement(he, null, `u/${e.userName}`, s.a.createElement(ve, null, "•")), s.a.createElement(he, null, (e.user.createdUtc || e.user.created) && s.a.createElement(Z.d, {
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
					return s.a.createElement(xe, null, s.a.createElement(_e, null, s.a.createElement(Ne, null, Object(P.b)(n.fromPosts)), s.a.createElement(ge, null, E.fbt._({
						"*": "Post Karma",
						_1: " Post Karma"
					}, [E.fbt._plural(n.fromPosts)], {
						hk: "3K4oaH"
					}))), s.a.createElement(_e, null, s.a.createElement(Ne, null, Object(P.b)(n.fromComments)), s.a.createElement(ge, null, E.fbt._({
						"*": "Comment Karma",
						_1: " Comment Karma"
					}, [E.fbt._plural(n.fromComments)], {
						hk: "3gKRx9"
					}))), s.a.createElement(_e, null, s.a.createElement(Ne, null, Object(P.b)(n.fromAwardsReceived)), s.a.createElement(ge, null, E.fbt._({
						"*": "Awardee Karma",
						_1: " Awardee Karma"
					}, [E.fbt._plural(n.fromAwardsReceived)], {
						hk: "3nzm9q"
					}), s.a.createElement(Ce, {
						href: W.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(F.a, {
						className: ce.a.infoIcon
					})))), s.a.createElement(_e, null, s.a.createElement(Ne, null, Object(P.b)(n.fromAwardsGiven)), s.a.createElement(ge, null, E.fbt._({
						"*": "Awarder Karma",
						_1: " Awarder Karma"
					}, [E.fbt._plural(n.fromAwardsGiven)], {
						hk: "4zXN3B"
					}), s.a.createElement(Ce, {
						href: W.a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement(F.a, {
						className: ce.a.infoIcon
					})))))
				},
				Se = e => {
					var t, n;
					const {
						className: a,
						contextId: r,
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
						isCurrentUserBanned: C,
						userProfileStyles: N,
						acceptChats: g,
						isCommentAuthorBlocked: O
					} = e;
					if (!x) return s.a.createElement(Ee, {
						style: f
					});
					const k = !!o && Object(K.e)(o) === I,
						j = !!(null == o ? void 0 : o.snoovatarFullBodyAsset),
						w = x.accountIcon || `${y.a.assetPath}/img/snoo_user_placeholder.png`,
						S = null == u ? void 0 : u.flair,
						P = null == u ? void 0 : u.access,
						U = (null == _ ? void 0 : _.templateIds) && (null === (t = null == _ ? void 0 : _.templateIds) || void 0 === t ? void 0 : t.length) > 0,
						A = null === (n = null == _ ? void 0 : _.displaySettings) || void 0 === n ? void 0 : n.isEnabled,
						{
							awardedLastMonth: B
						} = x,
						T = !!x.snoovatarFullBodyAsset,
						L = x.isNSFW && i;
					let F;
					return F = T ? !L && N && N.bannerBackgroundImage || void 0 : L ? `${y.a.assetPath}/img/user-info-banner.png` : e.user.bannerImage, s.a.createElement(Ee, {
						className: a,
						id: c,
						style: f
					}, !T && F && s.a.createElement(Oe, {
						style: {
							backgroundImage: `url('${F}')`
						}
					}), s.a.createElement(ke, null, T ? s.a.createElement(q.a, {
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
					}) : s.a.createElement(Ie, null, s.a.createElement(le, {
						iconUrl: w,
						isNSFW: x.isNSFW,
						userName: I
					}), s.a.createElement(ye, {
						title: null == b ? void 0 : b.title,
						user: x,
						userName: I
					})), s.a.createElement(we, {
						user: x
					}), B && s.a.createElement(G.a, {
						recentAwardings: B,
						topAwardIcon: v,
						username: I
					}), d && !k && !C && g && !O && s.a.createElement(me, {
						contextId: r,
						userId: x.id,
						text: E.fbt._("Start Chat", null, {
							hk: "2mfqRE"
						}),
						isFullWidth: !0
					}), x.hasUserProfile && !C && !O && !k && x.enableFollowers && s.a.createElement(ue, {
						identifier: {
							name: e.user.username,
							type: "profile"
						},
						getEventFactory: e => Object(D.g)(e ? "unfollow" : "follow", r),
						isFullWidth: !0,
						small: !0
					})), P && r && !k && h && s.a.createElement(ae, {
						contextId: r,
						subredditId: h,
						sendEvent: p,
						username: I
					}), S && r && U && A && h && s.a.createElement(oe, {
						contextId: r,
						subredditId: h,
						sendEvent: p,
						username: I
					}), s.a.createElement(M.i, {
						contextId: r,
						subredditId: h,
						user: x
					}), !(P || d) && s.a.createElement(je, null))
				},
				Pe = Object(A.a)(Se),
				Ue = e => {
					const t = e.activeTooltipId === e.tooltipId && !e.collapsed;
					return s.a.createElement(Pe, de({
						isOpen: t
					}, e))
				};
			Ue.WrappedComponent = Se;
			var Me = Ue;
			const Ae = Object(o.c)({
					activeTooltipId: N.a,
					currentUser: g.k,
					isLoggedIn: g.K,
					hideNSFWPref: g.C,
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
					user: g.sb,
					userFlair: (e, {
						subredditId: t
					}) => t ? Object(O.d)(e, {
						subredditId: t
					}) : void 0,
					isCurrentUserBanned: (e, t) => !!Object(C.l)(t) && Object(C.db)(e, t),
					userProfileStyles: (e, t) => Object(_.m)(e, Object(x.m)(e, t.userName)),
					acceptChats: (e, t) => {
						const n = Object(x.h)(e, {
							profileName: t.userName
						});
						return !n || n.acceptChats
					},
					isInModNotesExperiment: (e, {
						subredditId: t
					}) => Object(p.b)(e, t),
					trophyCase: (e, t) => Object(x.r)(e, Object(x.m)(e, t.userName)),
					isNightMode: g.X,
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
					}) => Object(C.eb)(e, {
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
				Be = Object(r.b)(Ae, (e, t) => ({
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
			t.a = Be(e => s.a.createElement("div", {
				className: e.className,
				id: e.tooltipId,
				onMouseLeave: () => !e.isInModNotesExperiment && e.onHideTooltip && e.onHideTooltip()
			}, e.isInModNotesExperiment ? s.a.createElement(j.b, {
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
			}) : s.a.createElement(Me, {
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
				ModUserNotesContainer: "bNsrpygYt2oXqvwAFR5M6",
				modUserNotesContainer: "bNsrpygYt2oXqvwAFR5M6",
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
				notesText: "_1CCsLgRjrC6hGqzD3fyBbf",
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
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/selectors/tooltip.ts"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/helpers/isComment.ts"),
				d = n("./src/reddit/helpers/isPost.ts"),
				l = n("./src/reddit/helpers/trackers/modNote.ts"),
				u = n("./src/reddit/hooks/useTracking.ts"),
				m = n("./src/reddit/actions/subreddit.ts"),
				b = n("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				p = n("./node_modules/fbt/lib/FbtPublic.js"),
				f = n("./src/higherOrderComponents/asTooltip.tsx"),
				h = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				v = n("./src/reddit/constants/keycodes.ts"),
				I = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/controls/Checkbox/index.tsx"),
				_ = n("./src/reddit/controls/DropdownSelector/index.tsx"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				N = n("./src/reddit/models/ModUserNotes/index.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/components/CCM/ModUserNotesCreationForm/index.m.less"),
				k = n.n(O),
				j = n("./src/redditGQL/types.ts");
			const E = Object(f.a)(h.b),
				y = ["NONE", j.q.AbuseWarning, j.q.SpamWarning, j.q.SpamWatch, j.q.SolidContributor, j.q.HelpfulUser],
				w = {
					...N.f,
					NONE: () => p.fbt._("None", null, {
						hk: "2r9MPM"
					})
				};
			var S = e => {
					const {
						className: t,
						filter: n,
						subredditId: o,
						userId: c,
						thingId: l
					} = e, [u, m] = Object(a.useState)(), [f, h] = Object(a.useState)(!1), [O, j] = Object(a.useState)(""), [S, P] = Object(a.useState)(!1), U = Object(r.e)(g.X);
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
					const M = Object(r.d)(),
						A = Object(a.useCallback)(async e => {
							e.stopPropagation(), await M(Object(b.a)(o, c, O, n, u, f ? l : void 0)), m(void 0), h(!1), j("")
						}, [M, o, O, c, u, f, l, n]),
						B = Object(a.useCallback)(e => {
							e.stopPropagation(), e.keyCode !== v.a.Enter || e.shiftKey || (e.preventDefault(), A(e))
						}, [A]),
						T = u ? w[u]() : w.NONE(),
						L = u ? u && Object(C.b)(N.e[u], {
							isFilled: !0
						}) : void 0,
						D = u && N.d[u];
					return s.a.createElement("div", {
						className: Object(i.a)(t)
					}, s.a.createElement("div", {
						className: k.a.meta
					}, s.a.createElement("span", {
						className: k.a.labelContainer
					}, s.a.createElement("label", {
						className: k.a.labelText,
						htmlFor: "label"
					}, p.fbt._("Label", null, {
						hk: "39tjG1"
					})), s.a.createElement(_.b, {
						id: "labelSelector",
						className: k.a.dropdown,
						displayText: T,
						buttonIcon: L ? s.a.createElement(L, {
							className: k.a.labelIcon,
							style: {
								...D && {
									color: D
								},
								fontSize: "15px",
								lineHeight: "15px"
							}
						}) : void 0,
						options: y.map(e => {
							const t = w[e](),
								n = "NONE" === e ? void 0 : Object(C.b)(N.e[e], {
									isFilled: !0
								}),
								a = N.d[e];
							return {
								displayText: t,
								value: e,
								isSelected: "NONE" === e ? !u : u === e,
								...n && {
									icon: s.a.createElement(n, {
										className: k.a.labelIcon,
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
						buttonClassName: k.a.dropdownButton,
						menuItemsClassName: k.a.menuItems,
						isModNotesStyle: !0
					})), s.a.createElement("span", {
						className: k.a.checkboxContainer
					}, s.a.createElement(x.a, {
						className: k.a.checkbox,
						isCheckboxSelected: f,
						toggleCheckbox: () => h(!f)
					}), l && Object(d.a)(l) ? p.fbt._("Link to post", null, {
						hk: "4lmeXp"
					}) : p.fbt._("Link to comment", null, {
						hk: "4bFPHh"
					}))), s.a.createElement("span", {
						className: k.a.textareaContainer
					}, s.a.createElement("textarea", {
						id: "MOD_NOTE_TEXT_AREA",
						className: Object(i.a)(k.a.textarea, {
							[k.a.isNightMode]: U
						}),
						onChange: e => j(e.target.value),
						onKeyDown: B,
						onClick: e => e.stopPropagation(),
						placeholder: p.fbt._("Add a note", null, {
							hk: "3wCgqo"
						}),
						value: O,
						maxLength: 250
					}), s.a.createElement(E, {
						isOpen: S
					}, s.a.createElement("div", {
						className: k.a.infoTooltip
					}, p.fbt._("Create Note", null, {
						hk: "32wjFp"
					})), s.a.createElement("div", {
						className: k.a.tooltipDescription
					}, p.fbt._("Press Enter", null, {
						hk: "20FVA3"
					}))), s.a.createElement(I.t, {
						className: Object(i.a)(k.a.sendButton, {
							[k.a.isNightMode]: U,
							[k.a.isDisabled]: 0 === O.length
						}),
						disabled: 0 === O.length,
						Icon: () => s.a.createElement(C.a, {
							className: Object(i.a)(k.a.iconSend, {
								[k.a.isDisabled]: 0 === O.length
							}),
							name: "send",
							isFilled: !0
						}),
						size: I.d.XS,
						iconPosition: I.h.C,
						onClick: A,
						onMouseEnter: () => P(!0),
						onMouseLeave: () => P(!1),
						style: 0 === O.length ? {
							backgroundColor: "transparent"
						} : void 0
					})))
				},
				P = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				U = n("./src/reddit/selectors/subreddit.ts"),
				M = n("./src/reddit/components/SubredditIcon/index.tsx"),
				A = n("./src/reddit/components/CCM/ModUserNotesFilter/index.m.less"),
				B = n.n(A);
			const T = [j.k.All, j.k.Note, j.k.Invite, j.k.Ban, j.k.Mute, j.k.ContentChange, j.k.Removal, j.k.Approval, j.k.Spam, j.k.ModAction],
				L = {
					[j.k.All]: () => p.fbt._("All", null, {
						hk: "SUuCY"
					}),
					[j.k.Note]: () => p.fbt._("Notes", null, {
						hk: "zqvUY"
					}),
					[j.k.Invite]: () => p.fbt._("Invites", null, {
						hk: "3fze0T"
					}),
					[j.k.Ban]: () => p.fbt._("Bans/unbans", null, {
						hk: "1mU3jK"
					}),
					[j.k.Mute]: () => p.fbt._("Mutes/unmutes", null, {
						hk: "2BTD9E"
					}),
					[j.k.ContentChange]: () => p.fbt._("Content edits", null, {
						hk: "Hqlly"
					}),
					[j.k.Removal]: () => p.fbt._("Content removals", null, {
						hk: "2V0fLd"
					}),
					[j.k.Spam]: () => p.fbt._("Spam", null, {
						hk: "1qdhsm"
					}),
					[j.k.ModAction]: () => p.fbt._("Mod actions", null, {
						hk: "4eIb6E"
					}),
					[j.k.Approval]: () => p.fbt._("Approvals", null, {
						hk: "3rk4Jx"
					})
				},
				D = {
					[j.k.All]: () => p.fbt._("All", null, {
						hk: "SUuCY"
					}),
					[j.k.Note]: () => p.fbt._("Notes", null, {
						hk: "zqvUY"
					}),
					[j.k.Invite]: () => p.fbt._("Invites", null, {
						hk: "3fze0T"
					}),
					[j.k.Ban]: () => p.fbt._("Bans", null, {
						hk: "2mhBLK"
					}),
					[j.k.Mute]: () => p.fbt._("Mutes", null, {
						hk: "4FW14P"
					}),
					[j.k.ContentChange]: () => p.fbt._("Edits", null, {
						hk: "3Gd5ht"
					}),
					[j.k.Removal]: () => p.fbt._("Removals", null, {
						hk: "312qk9"
					}),
					[j.k.Spam]: () => p.fbt._("Spam", null, {
						hk: "1qdhsm"
					}),
					[j.k.ModAction]: () => p.fbt._("Actions", null, {
						hk: "3hqNUg"
					}),
					[j.k.Approval]: () => p.fbt._("Approvals", null, {
						hk: "3rk4Jx"
					})
				};
			var F = e => {
					const {
						className: t,
						subredditId: n,
						userId: o,
						onChangeSubredditId: c,
						filter: d,
						onChangeFilter: m,
						onChangeView: b
					} = e, f = Object(u.a)(), h = Object(r.e)(e => Object(U.o)(e, void 0)), v = h.find(e => e.id === n), I = D[d](), x = Object(C.b)("back_fill"), N = Object(a.useCallback)(() => f(Object(l.k)({
						userId: o,
						subredditId: n
					})), [o, n, f]), g = Object(a.useCallback)(e => {
						c(e.value), f(Object(l.s)({
							userId: o,
							subredditId: n,
							filteredSubredditId: e.value
						}))
					}, [o, n, f, c]), O = Object(a.useCallback)(() => f(Object(l.l)({
						userId: o,
						subredditId: n
					})), [o, n, f]), k = Object(a.useCallback)(e => {
						m(e.value), f(Object(l.t)({
							userId: o,
							subredditId: n,
							filteredType: e.value
						}))
					}, [o, n, f, m]), j = h.filter(e => P.a.includes(e.id));
					return s.a.createElement("div", {
						className: Object(i.a)(t, B.a.wrapper),
						role: "navigation"
					}, s.a.createElement("div", {
						className: B.a.backWrapper
					}, s.a.createElement("button", {
						"aria-label": p.fbt._("Back", null, {
							hk: "3ojpRo"
						}),
						className: B.a.backButton,
						onClick: b
					}, s.a.createElement(x, null))), v && j.length && s.a.createElement("div", {
						className: B.a.subredditsWrapper
					}, s.a.createElement(_.b, {
						id: "subredditFilter",
						className: B.a.subreddits,
						buttonClassName: B.a.dropdownButton,
						buttonIcon: s.a.createElement(M.b, {
							className: B.a.subredditIcon,
							subredditOrProfile: v
						}),
						disabled: 1 === j.length,
						menuItemsClassName: B.a.menuItems,
						menuOptionClassName: B.a.menuOption,
						displayText: `r/${v.name}`,
						options: j.map(e => ({
							displayText: `r/${e.name}`,
							value: e.id,
							isSelected: e.id === n,
							icon: s.a.createElement(M.b, {
								className: B.a.subredditIconInDropdown,
								subredditOrProfile: e
							})
						})),
						onOpen: N,
						onSelect: g,
						showSelectedCheckmark: !0
					})), s.a.createElement("div", {
						className: B.a.typesWrapper
					}, s.a.createElement(_.b, {
						id: "typeFilter",
						className: B.a.types,
						buttonClassName: B.a.dropdownButton,
						menuItemsClassName: B.a.menuItems,
						menuOptionClassName: B.a.menuOption,
						displayText: I,
						options: T.map(e => ({
							displayText: L[e](),
							value: e,
							isSelected: e === d
						})),
						onOpen: O,
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
					[j.j.AcceptModeratorInvite]: "mod",
					[j.j.AddContributor]: "user",
					[j.j.AddModerator]: "mod",
					[j.j.BanUser]: "ban",
					[j.j.InviteModerator]: "mod",
					[j.j.MuteUser]: "mod_mute",
					[j.j.RemoveComment]: "remove",
					[j.j.RemoveContributor]: "block",
					[j.j.RemoveLink]: "remove",
					[j.j.RemoveModerator]: "unmod",
					[j.j.RemoveWikiContributor]: "wiki_ban",
					[j.j.SpamComment]: "spam",
					[j.j.SpamLink]: "spam",
					[j.j.Spoiler]: "spoiler",
					[j.j.Sticky]: "pin",
					[j.j.UnbanUser]: "unban",
					[j.j.UninviteModerator]: "unmod",
					[j.j.UnmuteUser]: "mod_unmute",
					[j.j.Unspoiler]: "spoiler",
					[j.j.Unsticky]: "unpin",
					[j.j.WikiBanned]: "wiki_ban",
					[j.j.WikiContributor]: "wiki",
					[j.j.WikiUnbanned]: "wiki_unban"
				},
				J = {
					[j.q.Ban]: "ban",
					[j.q.BotBan]: "bot",
					[j.q.PermaBan]: "block"
				};
			var Q = e => {
					const {
						className: t,
						actionType: n,
						label: a
					} = e, r = n ? q[n] || "mod" : a && J[a] || "user_note";
					if (!r) return null;
					const o = Object(C.b)(r);
					return s.a.createElement(o, {
						className: Object(i.a)(t, G.a.icon)
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
					} = e, r = Object(V.a)(), o = new Intl.DateTimeFormat(r, {
						month: "short",
						day: "numeric",
						year: "numeric",
						hour: "numeric",
						minute: "numeric"
					}).format(new Date(n.createdAt));
					return s.a.createElement("div", {
						className: Object(i.a)(t, Y.a.metadata)
					}, n.operator && s.a.createElement(z.a, {
						className: Y.a.operator,
						to: `/user/${n.operator.displayName}/`,
						onClick: a
					}, "u/", n.operator.displayName), s.a.createElement("span", {
						className: Y.a.createdDate
					}, p.fbt._("on {createdDate}", [p.fbt._param("createdDate", o)], {
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
					const c = Object(r.e)(g.X),
						d = "label" in t && t.label || N.c,
						l = "note" in t ? t.note : void 0,
						u = Object(C.b)(N.e[d || "bot"], {
							isFilled: !0
						}),
						m = ![N.c, j.q.BotBan, j.q.PermaBan, j.q.Ban].includes(d),
						b = t.postInfo ? null === (a = t.postInfo) || void 0 === a ? void 0 : a.permalink : t.commentInfo ? null === (o = t.commentInfo) || void 0 === o ? void 0 : o.permalink : void 0,
						p = Object(C.b)("external_link_fill");
					return l ? s.a.createElement("div", {
						className: Object(i.a)(e, te.a.modNote),
						onClick: e => e.stopPropagation(),
						style: d ? {
							backgroundColor: c ? N.b[d] : N.a[d]
						} : {}
					}, m && s.a.createElement("div", {
						className: te.a.header
					}, s.a.createElement(u, {
						className: te.a.labelIcon,
						style: {
							color: N.d[d]
						}
					}), s.a.createElement("span", {
						className: te.a.label
					}, N.f[d]())), l && s.a.createElement("div", {
						className: te.a.note
					}, l), b && s.a.createElement("a", {
						className: te.a.link,
						href: b || "",
						target: "_blank",
						rel: "noopener noreferrer",
						onClick: n
					}, s.a.createElement(p, {
						className: te.a.linkIcon
					}))) : null
				},
				ae = n("./src/lib/constants/index.ts"),
				se = n("./src/lib/prettyPrintNumber/index.ts"),
				re = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Preview/index.m.less"),
				oe = n.n(re);
			var ie = ({
					className: e,
					postInfo: t,
					commentInfo: n,
					onClick: a
				}) => {
					var r, o, c, d;
					if (!t && !n) return null;
					if (n && "Comment" !== n.__typename) return s.a.createElement("div", {
						className: Object(i.a)(e, oe.a.preview)
					}, s.a.createElement("div", {
						className: oe.a.content
					}, s.a.createElement("h6", {
						className: oe.a.title
					}, ae.Lb)));
					const l = t ? t.permalink : n ? n.permalink : void 0,
						u = (null == t ? void 0 : t.title) || (null === (o = null === (r = n) || void 0 === r ? void 0 : r.content) || void 0 === o ? void 0 : o.html),
						m = t ? t.score || 0 : n && n.score || 0,
						b = (null == t ? void 0 : t.commentCount) || 0;
					return s.a.createElement("a", {
						className: Object(i.a)(e, oe.a.preview),
						href: l || "",
						onClick: a,
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.a.createElement("div", {
						className: oe.a.content
					}, s.a.createElement("h6", {
						className: oe.a.title,
						dangerouslySetInnerHTML: u ? {
							__html: u
						} : void 0
					}), s.a.createElement("div", {
						className: oe.a.meta
					}, s.a.createElement("span", null, p.fbt._({
						"*": "{upvotesCount} Upvotes",
						_1: "{upvotesCount} Upvote"
					}, [p.fbt._param("upvotesCount", Object(se.b)(m)), p.fbt._plural(m)], {
						hk: "125pIW"
					})), !!b && s.a.createElement(s.a.Fragment, null, " · ", s.a.createElement("span", null, p.fbt._({
						"*": "{Comment} Comments",
						_1: "1 Comment"
					}, [p.fbt._plural(b, "Comment")], {
						hk: "11Jphu"
					}))))), !!(null === (c = null == t ? void 0 : t.thumbnail) || void 0 === c ? void 0 : c.url) && s.a.createElement("div", {
						className: oe.a.thumbnail
					}, s.a.createElement("img", {
						className: oe.a.thumbnailImage,
						src: null === (d = t.thumbnail) || void 0 === d ? void 0 : d.url
					})))
				},
				ce = n("./src/reddit/components/CCM/ModUserNoteWithIcon/Title/index.m.less"),
				de = n.n(ce);
			const le = {
					[j.j.AcceptModeratorInvite]: () => p.fbt._("Mod invite accepted", null, {
						hk: "qf41j"
					}),
					[j.j.AddContributor]: () => p.fbt._("Added as contributor", null, {
						hk: "3dqHxz"
					}),
					[j.j.AddModerator]: () => p.fbt._("Added as moderator", null, {
						hk: "1dhUFs"
					}),
					[j.j.BanUser]: () => p.fbt._("Banned", null, {
						hk: "31QtLJ"
					}),
					[j.j.InviteModerator]: () => p.fbt._("Mod invite sent", null, {
						hk: "19xTmf"
					}),
					[j.j.MuteUser]: () => p.fbt._("Modmail muted", null, {
						hk: "4mxUPa"
					}),
					[j.j.RemoveComment]: () => p.fbt._("Comment removed", null, {
						hk: "41CO0h"
					}),
					[j.j.RemoveContributor]: () => p.fbt._("Removed as contributor", null, {
						hk: "33vYlk"
					}),
					[j.j.RemoveLink]: () => p.fbt._("Post removed", null, {
						hk: "1012sS"
					}),
					[j.j.RemoveModerator]: () => p.fbt._("Removed as moderator", null, {
						hk: "1PZWXB"
					}),
					[j.j.RemoveWikiContributor]: () => p.fbt._("Removed as a wiki contributor", null, {
						hk: "9iumD"
					}),
					[j.j.SpamComment]: () => p.fbt._("Comment marked as spam", null, {
						hk: "3Ya0oQ"
					}),
					[j.j.SpamLink]: () => p.fbt._("Post marked as spam", null, {
						hk: "1yjDb8"
					}),
					[j.j.Spoiler]: () => p.fbt._("Post marked as spoiler", null, {
						hk: "JECai"
					}),
					[j.j.Sticky]: () => p.fbt._("Post was stickied", null, {
						hk: "4vkdGE"
					}),
					[j.j.UnbanUser]: () => p.fbt._("Unbanned", null, {
						hk: "1P5luv"
					}),
					[j.j.UninviteModerator]: () => p.fbt._("Mod invite revoked", null, {
						hk: "zyjCA"
					}),
					[j.j.UnmuteUser]: () => p.fbt._("Modmail unmuted", null, {
						hk: "496Olb"
					}),
					[j.j.Unspoiler]: () => p.fbt._("Post marked as non-spoiler", null, {
						hk: "1nWZbp"
					}),
					[j.j.Unsticky]: () => p.fbt._("Post was un-stickied", null, {
						hk: "3b2nJe"
					}),
					[j.j.WikiBanned]: () => p.fbt._("Banned from the wiki", null, {
						hk: "29ttfV"
					}),
					[j.j.WikiContributor]: () => p.fbt._("Added as a wiki contributor", null, {
						hk: "2IuQMk"
					}),
					[j.j.WikiUnbanned]: () => p.fbt._("Unbanned from the wiki", null, {
						hk: "24xAIp"
					})
				},
				ue = {
					[j.q.Ban]: () => p.fbt._("Banned", null, {
						hk: "31QtLJ"
					}),
					[j.q.BotBan]: () => p.fbt._("Banned by bot", null, {
						hk: "gc7lV"
					}),
					[j.q.PermaBan]: () => p.fbt._("Permanently banned", null, {
						hk: "4oNAOs"
					})
				};
			var me = e => {
				const {
					className: t,
					actionType: n,
					label: a
				} = e, r = n ? le[n] ? le[n]() : null : a && ue[a] ? ue[a]() : null;
				return r ? s.a.createElement("h3", {
					className: Object(i.a)(t, de.a.title)
				}, r) : null
			};
			var be = e => {
					const {
						modNote: t,
						subredditId: n
					} = e, a = Object(r.e)(g.X), o = Object(u.a)(), c = !!t.__typename && ["ModActionNote", "ModActionNotePost", "ModActionNoteComment"].includes(t.__typename);
					return s.a.createElement("div", {
						className: Object(i.a)(K.a.wrapper, e.className)
					}, s.a.createElement("div", {
						key: "aa",
						className: K.a.iconWrapper,
						style: {
							background: a ? R.a.orca700 : R.a.narwhal100
						}
					}, s.a.createElement(Q, {
						className: K.a.icon,
						actionType: t.actionType,
						label: t.label
					})), s.a.createElement("div", {
						className: K.a.content,
						key: "ba"
					}, s.a.createElement(me, {
						actionType: t.actionType,
						label: t.label,
						className: K.a.title
					}), s.a.createElement(ne, {
						className: K.a.note,
						modNote: t,
						onClickLinked: () => o(Object(l.c)({
							subredditId: n,
							modNote: t
						}))
					}), s.a.createElement($, {
						className: K.a.metaData,
						subredditId: n,
						modNote: t,
						onClickUsername: () => o(Object(l.o)({
							subredditId: n,
							modNote: t
						}))
					}), c && s.a.createElement(ie, {
						className: K.a.preview,
						commentInfo: t.commentInfo,
						postInfo: t.postInfo,
						onClick: () => o(Object(l.g)({
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
							[j.k.Note]: p.fbt._("mod notes", null, {
								hk: "CN6SZ"
							}),
							[j.k.Approval]: p.fbt._("approvals", null, {
								hk: "AqrdS"
							}),
							[j.k.Removal]: p.fbt._("content removals", null, {
								hk: "kjICL"
							}),
							[j.k.Ban]: p.fbt._("bans or unbans", null, {
								hk: "4jKjdR"
							}),
							[j.k.Mute]: p.fbt._("mutes and unmutes", null, {
								hk: "1u2TZT"
							}),
							[j.k.Invite]: p.fbt._("invites", null, {
								hk: "r9dPh"
							}),
							[j.k.Spam]: p.fbt._("spam removals", null, {
								hk: "44iRtH"
							}),
							[j.k.ContentChange]: p.fbt._("content edits", null, {
								hk: "1zafY8"
							}),
							[j.k.ModAction]: p.fbt._("mod actions", null, {
								hk: "3yLNgz"
							}),
							[j.k.All]: p.fbt._("mod actions", null, {
								hk: "2sOss3"
							})
						},
						n = {
							[j.k.Note]: "user_note",
							[j.k.Approval]: "approve",
							[j.k.Removal]: "remove",
							[j.k.Ban]: "ban",
							[j.k.Mute]: "mod_mute",
							[j.k.Invite]: "user",
							[j.k.Spam]: "spam",
							[j.k.ContentChange]: "pin",
							[j.k.ModAction]: "mod",
							[j.k.All]: "mod"
						},
						{
							className: a,
							subredditId: o,
							userId: c,
							filter: d
						} = e,
						l = Object(r.e)(e => Object(g.rb)(e, {
							userId: c
						})),
						u = Object(r.e)(e => Object(U.S)(e, {
							subredditId: o
						})),
						m = t[d],
						b = p.fbt._("There are no {mod note type}", [p.fbt._param("mod note type", m)], {
							hk: "1NhVUh"
						}),
						f = u && l ? p.fbt._("for u/{user name} in r/{subreddit name}", [p.fbt._param("user name", l.username), p.fbt._param("subreddit name", u.name)], {
							hk: "4CA5zk"
						}) : "",
						h = Object(C.b)(n[d]);
					return s.a.createElement("div", {
						className: Object(i.a)(a, ve.a.container)
					}, s.a.createElement(h, {
						className: ve.a.icon
					}), s.a.createElement("p", {
						className: ve.a.mainLine
					}, `${b} ${f}`), d === j.k.Note && s.a.createElement("p", {
						className: ve.a.miscLine
					}, p.fbt._("Use the field below to create a note.", null, {
						hk: "1lrCZG"
					})))
				},
				xe = n("./src/reddit/components/PostList/SomethingWrong.tsx"),
				_e = n("./src/reddit/components/CCM/ModUserNotesList/Placeholder/index.m.less"),
				Ce = n.n(_e),
				Ne = n("./src/reddit/helpers/styles/mixins/loading.ts");
			var ge = e => s.a.createElement("div", {
					className: Object(i.a)(Ce.a.wrapper, e.className)
				}, s.a.createElement("div", {
					key: "d",
					className: Object(i.a)(Ce.a.icon, Object(Ne.a)(e))
				}), s.a.createElement("div", {
					key: "e",
					className: Ce.a.content
				}, s.a.createElement("div", {
					key: "ea",
					className: Object(i.a)(Ce.a.title, Object(Ne.b)(e))
				}), s.a.createElement("div", {
					key: "eb",
					className: Object(i.a)(Ce.a.body, Object(Ne.b)(e))
				}), s.a.createElement("div", {
					key: "ec",
					className: Object(i.a)(Ce.a.meta, Object(Ne.b)(e))
				}))),
				Oe = n("./src/reddit/components/CCM/ModUserNotesList/PlaceholderList/index.m.less"),
				ke = n.n(Oe);
			var je = e => {
					const {
						className: t,
						isLoading: n,
						apiError: a,
						onTryAgain: r
					} = e;
					return s.a.createElement("div", {
						className: Object(i.a)(t, ke.a.placeholder)
					}, s.a.createElement(ge, {
						className: ke.a.placeholderLine,
						isLoading: n
					}), s.a.createElement(ge, {
						className: ke.a.placeholderLine,
						isLoading: n
					}), s.a.createElement(ge, {
						className: ke.a.placeholderLine,
						isLoading: n
					}), !!a && s.a.createElement(xe.a, {
						apiError: a,
						onTryAgain: r
					}))
				},
				Ee = n("./src/reddit/components/CCM/ModUserNotesList/index.m.less"),
				ye = n.n(Ee);
			var we = e => {
					const {
						className: t,
						subredditId: n,
						userId: o,
						filter: c
					} = e, d = Object(r.d)(), l = Object(r.e)(g.X), [u, m] = Object(a.useState)(!0);
					Object(a.useEffect)(() => {
						setTimeout(() => m(!1), 0)
					}, []);
					const {
						container: p,
						isScrollGradientVisible: f,
						calculateGradientVisibility: h
					} = Object(pe.b)(!1, pe.a.Top), v = Object(r.e)(e => Object(fe.e)(e, {
						subredditId: n,
						userId: o,
						filter: c
					})), I = Object(r.e)(e => Object(fe.c)(e, {
						subredditId: n,
						userId: o,
						filter: c
					})), x = Object(r.e)(e => Object(fe.d)(e, {
						subredditId: n,
						userId: o,
						filter: c
					})), _ = Object(r.e)(fe.b), C = !!v.length, N = !!I && !x && !_, O = e => d(Object(b.e)({
						subredditId: n,
						userId: o,
						filter: c,
						before: e
					}));
					return s.a.createElement(s.a.Fragment, null, C && s.a.createElement("div", {
						className: Object(i.a)(t, ye.a.wrapper)
					}, s.a.createElement("div", {
						className: Object(i.a)(ye.a.scrollGradient, {
							[ye.a.visible]: N || x || f,
							[ye.a.isNightMode]: l
						})
					}), s.a.createElement("div", {
						className: ye.a.list,
						ref: p,
						onScroll: () => {
							H.a.read(() => {
								if (null == p ? void 0 : p.current) {
									h();
									const e = p.current,
										{
											scrollTop: t,
											offsetHeight: n,
											scrollHeight: a
										} = e;
									n - a >= t && N && !x && O(I)
								}
							})
						}
					}, v.map(e => s.a.createElement(be, {
						key: e.id,
						modNote: e,
						subredditId: n
					})), (x || _) && s.a.createElement(je, {
						isLoading: x,
						apiError: _,
						onTryAgain: () => {
							I && O(I)
						}
					}))), !C && !x && !u && s.a.createElement(Ie, {
						className: Object(i.a)(t, ye.a.wrapper, ye.a.noItems),
						subredditId: n,
						userId: o,
						filter: c
					}), !C && (x || u) && s.a.createElement("div", {
						className: Object(i.a)(t, ye.a.wrapper)
					}))
				},
				Se = n("./src/reddit/components/CCM/ModUserNotesWrapper/index.m.less"),
				Pe = n.n(Se);
			const {
				fbt: Ue
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Me = e => {
					const t = Object(r.d)(),
						{
							className: n,
							subredditId: o,
							userId: p,
							onChangeView: f,
							thingId: h
						} = e,
						[v, I] = Object(a.useState)(j.k.All),
						[x, _] = Object(a.useState)(o),
						C = Object(r.e)(g.X),
						N = Object(u.a)(),
						O = e => {
							t(Object(b.e)({
								subredditId: x,
								userId: p,
								filter: v,
								...e
							}))
						},
						k = v === j.k.All || v === j.k.Note;
					Object(a.useEffect)(() => {
						O(), t(Object(m.q)())
					}, []);
					const E = {
						subredditId: o,
						userId: p,
						...h && Object(c.a)(h) ? {
							commentId: h
						} : null,
						...h && Object(d.a)(h) ? {
							postId: h
						} : null
					};
					return Object(a.useEffect)(() => (N(Object(l.x)(E)), () => N(Object(l.r)(E))), []), s.a.createElement("div", {
						className: Object(i.a)(n, Pe.a.wrapper, {
							[Pe.a.isNightMode]: C
						}),
						onClick: e => e.stopPropagation()
					}, s.a.createElement(F, {
						className: Pe.a.filters,
						subredditId: x,
						userId: p,
						onChangeSubredditId: e => {
							_(e), O({
								subredditId: e
							})
						},
						filter: v,
						onChangeFilter: e => {
							I(e), O({
								filter: e
							})
						},
						onChangeView: f
					}), s.a.createElement(we, {
						className: Pe.a.list,
						subredditId: x,
						userId: p,
						filter: v
					}), k && s.a.createElement(S, {
						className: Pe.a.form,
						filter: v,
						subredditId: o,
						userId: p,
						thingId: h
					}))
				},
				Ae = n("./src/reddit/components/ContentTooltip/index.tsx"),
				Be = n("./src/config.ts"),
				Te = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				Le = n("./src/lib/opener/index.ts"),
				De = n("./src/reddit/components/AnonymousSnoovatar/index.m.less"),
				Fe = n.n(De);
			var He = e => s.a.createElement("img", {
					className: Object(i.a)(e.className, Fe.a.anonymousSnoovatar),
					src: `${Be.a.assetPath}/img/anonymous_snoo.png`
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
					var t;
					return s.a.createElement("div", {
						className: et.a.userDetails
					}, s.a.createElement("div", null, s.a.createElement(Te.a, {
						className: et.a.UserNameLink,
						to: `/user/${e.userName}/`
					}, e.userName), e.user.isEmployee && s.a.createElement(ze.a, {
						className: et.a.adminIcon,
						title: p.fbt._("Reddit admin", null, {
							hk: "15wBTE"
						})
					}), e.user.isGold && s.a.createElement(Te.a, {
						to: "/premium"
					}, s.a.createElement(Ve.a, {
						className: et.a.PremiumIcon
					}))), s.a.createElement("div", {
						className: et.a.UserNameMetaData
					}, s.a.createElement("div", {
						className: et.a.MetaDataItem
					}, `u/${e.user.username}`, s.a.createElement("div", {
						className: et.a.Bullet
					}, "•")), s.a.createElement("div", {
						className: et.a.MetaDataItem
					}, (e.user.createdUtc || e.user.created) && s.a.createElement(s.a.Fragment, null, s.a.createElement(We.d, {
						seconds: e.user.createdUtc || e.user.created
					}), s.a.createElement("div", {
						className: et.a.Bullet
					}, "•"))), s.a.createElement("div", {
						className: et.a.MetaDataItem
					}, p.fbt._("{totalKarma} total karma", [p.fbt._param("totalKarma", Object(se.b)((null === (t = e.user.karma) || void 0 === t ? void 0 : t.total) || 0))], {
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
						prefersReducedAnimations: r
					} = e, o = {
						...Je.a,
						...n
					}, i = null == t ? void 0 : t.topAward;
					return s.a.createElement("div", {
						className: et.a.userInfoGrid
					}, s.a.createElement("div", {
						className: et.a.col
					}, s.a.createElement("span", {
						className: et.a.count
					}, Object(se.b)(o.fromPosts)), s.a.createElement("span", {
						className: et.a.label
					}, p.fbt._("Post Karma", null, {
						hk: "32naEp"
					}))), s.a.createElement("div", {
						className: et.a.col
					}, s.a.createElement("span", {
						className: et.a.count
					}, Object(se.b)(o.fromComments)), s.a.createElement("span", {
						className: et.a.label
					}, p.fbt._("Comment Karma", null, {
						hk: "3kyHOE"
					}))), s.a.createElement("div", {
						className: et.a.col
					}, s.a.createElement("span", {
						className: et.a.count
					}, Object(se.b)(o.fromAwardsReceived)), s.a.createElement("span", {
						className: et.a.label
					}, p.fbt._("Awardee Karma", null, {
						hk: "4CR6i3"
					}))), s.a.createElement("div", {
						className: et.a.col
					}, s.a.createElement("span", {
						className: et.a.count
					}, Object(se.b)(o.fromAwardsGiven)), s.a.createElement("span", {
						className: et.a.label
					}, p.fbt._("Awarder Karma", null, {
						hk: "kuRXR"
					}))), a.length > 0 && (e => s.a.createElement("div", {
						className: et.a.col
					}, s.a.createElement("div", {
						className: et.a.recentAwardOrIconContainer
					}, e.map((e, t) => {
						if (t >= 3) return;
						const n = s.a.createElement("img", {
							className: et.a.recentAwardOrTropyIcon,
							src: e.icon,
							title: e.name
						});
						return s.a.createElement(s.a.Fragment, null, e.url ? s.a.createElement("a", {
							target: Le.d.BLANK,
							rel: Le.c,
							href: e.url
						}, n) : n)
					})), s.a.createElement("span", {
						className: et.a.label
					}, p.fbt._("Trophies", null, {
						hk: "302uHC"
					}))))(a), i && ((e, t) => s.a.createElement("div", {
						className: et.a.col
					}, s.a.createElement("div", {
						className: et.a.recentAwardOrIconContainer
					}, e && [e].map((e, n) => {
						var a, r;
						if (!(n >= 3)) return s.a.createElement("img", {
							alt: null !== (a = null == e ? void 0 : e.description) && void 0 !== a ? a : null == e ? void 0 : e.name,
							key: null !== (r = null == e ? void 0 : e.description) && void 0 !== r ? r : null == e ? void 0 : e.name,
							className: et.a.recentAwardOrTropyIcon,
							src: Object(Ye.c)({
								award: e,
								prefersReducedMotion: t
							})
						})
					})), s.a.createElement("span", {
						className: et.a.label
					}, p.fbt._("Recent Awards", null, {
						hk: "3DtwBC"
					}))))(i, r))
				};
			var at = e => {
				var t;
				const {
					contextId: n,
					currentUser: r,
					hideNSFWPref: o,
					hoverId: c,
					isLoggedIn: d,
					isNightMode: m,
					moderatorPermissions: b,
					style: f,
					userName: h,
					user: v,
					isCurrentUserBanned: x,
					userProfileStyles: _,
					acceptChats: C,
					isCommentAuthorBlocked: N,
					trophyCase: g,
					lastAuthorModNote: O,
					userIsSubscriber: k,
					onUnbanUser: j,
					subredditId: E,
					toggleBanModal: y,
					isUserBanned: w,
					prefersReducedAnimations: S,
					totalModNoteCount: P,
					onChangeView: U,
					onHideTooltip: M
				} = e, A = Object(u.a)();
				Object(a.useEffect)(() => {
					v && E && A(Object(l.w)({
						subredditId: E,
						userId: v.id
					}))
				}, [v, E]);
				const B = Object(a.useCallback)(() => E && A(Object(l.j)({
						subredditId: E,
						userId: v.id
					})), [E, v, A]),
					T = Object(a.useCallback)(() => {
						w ? j && j(v.id) : (M && M(), y && y()), E && A(Object(l.b)({
							subredditId: E,
							userId: v.id
						}))
					}, [E, v, w, A, M, j, y]),
					L = Object(a.useCallback)(e => {
						U(e), E && A(Object(l.i)({
							subredditId: E,
							userId: v.id
						}))
					}, [E, v, A, U]),
					D = Object(a.useCallback)(e => {
						U(e), E && A(Object(l.a)({
							subredditId: E,
							userId: v.id
						}))
					}, [E, v, A, U]),
					F = Object(a.useCallback)(e => {
						U(e), E && A(Object(l.p)({
							subredditId: E,
							userId: v.id
						}))
					}, [E, v, A, U]);
				if (!v) return s.a.createElement("div", {
					className: et.a.Container,
					style: f
				});
				const H = !!r && Object(Xe.e)(r) === h,
					R = d && !H && !x && C && !N,
					W = v.hasUserProfile && !x && !N && !H && v.enableFollowers,
					K = null == b ? void 0 : b.access,
					Z = null == b ? void 0 : b.mail,
					G = K && n && !H && E,
					q = v.isNSFW && o ? `${Be.a.assetPath}/img/user-info-banner.png` : (null == _ ? void 0 : _.bannerBackgroundImage) ? _.bannerBackgroundImage : v.bannerImage,
					J = m ? "##D7DADC" : "#0079D3",
					Q = m ? "#121212" : "#FFF",
					V = m ? "#1E1E1E" : "#EDEFF1",
					X = m ? "#D7DADC" : "#1A1A1B";
				return s.a.createElement("div", {
					className: et.a.Container,
					id: c,
					onClick: e => e.stopPropagation(),
					style: {
						backgroundColor: Q,
						...f
					}
				}, s.a.createElement("div", {
					className: et.a.UserContainer
				}, s.a.createElement("div", {
					className: et.a.BannerImage,
					style: q ? {
						backgroundImage: `url('${q}')`
					} : {}
				}), s.a.createElement("div", {
					className: et.a.snoovatarContainer
				}, v.snoovatarFullBodyAsset ? s.a.createElement("img", {
					className: et.a.snoovatar,
					src: v.snoovatarFullBodyAsset
				}) : (null === (t = v.accountIcon) || void 0 === t ? void 0 : t.includes("avatars/defaults/v2")) ? s.a.createElement("div", {
					className: et.a.anonymousSnoovatar
				}, s.a.createElement(He, null)) : s.a.createElement(qe.a, {
					className: et.a.UserIcon,
					iconUrl: v.accountIcon,
					isNSFW: v.isNSFW,
					userName: h
				}))), s.a.createElement(tt, {
					user: v,
					userName: h
				}), s.a.createElement(z.a, {
					className: et.a.profileLink,
					to: `/user/${h}/`
				}, p.fbt._("View full profile", null, {
					hk: "2s4Gmf"
				})), s.a.createElement("div", {
					className: et.a.profileButtonGroup
				}, R && s.a.createElement(Re.b, {
					className: Object(i.a)(et.a.ChatButton, et.a.profileButtonLeft, {
						[et.a.onlyButton]: !W
					}),
					contextId: n,
					userId: v.id,
					text: p.fbt._("Start Chat", null, {
						hk: "2mfqRE"
					}),
					isFullWidth: !0,
					style: {
						color: Q,
						backgroundColor: J
					}
				}), W && s.a.createElement(Ge.a, {
					className: Object(i.a)(et.a.SubscribeButton, et.a.profileButtonRight, {
						[et.a.onlyButton]: !R
					}),
					identifier: {
						name: e.user.username,
						type: "profile"
					},
					getEventFactory: e => Object(Qe.g)(e ? "unfollow" : "follow", n),
					isFullWidth: !0,
					small: !0,
					style: {
						color: k ? "#D7DADC" : Q,
						backgroundColor: J,
						width: 144
					}
				})), s.a.createElement(nt, {
					user: v,
					trophyCase: g || [],
					prefersReducedAnimations: !!S
				}), (Z || G) && s.a.createElement("div", {
					className: et.a.buttonRow
				}, Z && s.a.createElement(I.t, {
					className: Object(i.a)(et.a.modButtonLeft, {
						[et.a.onlyButton]: !G
					}),
					href: "https://mod.reddit.com/mail/create",
					target: "_blank",
					rel: "noopener noreferrer",
					kind: I.b.ExternalLink,
					priority: I.c.Plain,
					style: {
						backgroundColor: V,
						color: X
					},
					onClick: B
				}, p.fbt._("Send Modmail", null, {
					hk: "2KDZJi"
				})), G && s.a.createElement(I.t, {
					className: Object(i.a)(et.a.modButtonRight, {
						[et.a.onlyButton]: !Z
					}),
					onClick: T,
					priority: I.c.Plain,
					style: {
						backgroundColor: V,
						color: X
					}
				}, w ? p.fbt._("Unban", null, {
					hk: "2bKwSa"
				}) : p.fbt._("Ban", null, {
					hk: "1lIetx"
				}))), K && s.a.createElement("div", {
					className: et.a.buttonRow
				}, s.a.createElement(I.t, {
					className: et.a.modButtonLeft,
					onClick: L,
					priority: I.c.Plain,
					style: {
						backgroundColor: V,
						color: X
					}
				}, s.a.createElement("span", {
					className: et.a.notesText
				}, p.fbt._("User Mod Log", null, {
					hk: "2PiT0s"
				})), s.a.createElement("span", {
					className: et.a.notesNumber
				}, P || 0, " ")), s.a.createElement(I.t, {
					className: et.a.modButtonRight,
					onClick: D,
					priority: I.c.Plain,
					style: {
						backgroundColor: V,
						color: X
					}
				}, p.fbt._("Add Note", null, {
					hk: "34JqdA"
				}))), K && O && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: et.a.modNoteSection
				}, s.a.createElement("hr", null), s.a.createElement("div", {
					className: et.a.modNoteLabel
				}, s.a.createElement("span", {
					className: et.a.modNoteLabelText,
					style: {
						backgroundColor: Q
					}
				}, p.fbt._("Latest mod note", null, {
					hk: "3D5qr4"
				})), s.a.createElement(I.t, {
					className: et.a.modNoteButton,
					onClick: F,
					priority: I.c.PlainLink,
					style: {
						backgroundColor: Q
					}
				}, p.fbt._("View all", null, {
					hk: "2WT026"
				})))), s.a.createElement(Ze.b, {
					className: et.a.lastModNote,
					modNote: O,
					subredditId: E || "",
					onClick: e => U(e),
					context: Ze.a.ModIdCard
				})), s.a.createElement(Ke.i, {
					contextId: n,
					subredditId: E,
					user: v
				}), s.a.createElement("div", {
					className: et.a.BottomSpacer
				}))
			};

			function st() {
				return (st = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const rt = e => {
					var t, n;
					const i = Object(r.e)(o.c),
						c = !!(null == i ? void 0 : i.isModNotesView),
						[d, l] = Object(a.useState)(!c),
						u = Object(a.useCallback)(e => {
							e.stopPropagation(), l(!d)
						}, [d, l]);
					return !d && e.subredditId && (null === (t = e.user) || void 0 === t ? void 0 : t.id) ? s.a.createElement(Me, {
						className: et.a.ModUserNotesWrapper,
						subredditId: e.subredditId,
						userId: null === (n = null == e ? void 0 : e.user) || void 0 === n ? void 0 : n.id,
						onChangeView: u,
						thingId: e.contextId
					}) : s.a.createElement(at, st({}, e, {
						onChangeView: u
					}))
				},
				ot = e => s.a.createElement(Ae.a, {
					className: et.a.ModUserNotesTooltipContainer,
					tooltipId: e.tooltipId,
					defaultTooltipPosition: "bottom",
					hideCaret: !0
				}, s.a.createElement(rt, e));
			ot.WrappedComponent = rt;
			t.default = ot
		},
		"./src/reddit/components/Hovercards/AuthorHovercard/_AuthorHovercard.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./src/config.ts"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
				C = n("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx");
			t.default = ({
				author: e,
				children: t,
				className: n,
				collapsed: N,
				hoverDivClassName: g,
				isCommentAuthorBlocked: O,
				postOrComment: k,
				tooltipIdPrefix: j,
				tooltipType: E
			}) => {
				const y = Object(m.b)(),
					w = Object(s.useCallback)(() => y(Object(h.f)(k.id)), [k, y]),
					S = Object(v.a)(),
					P = e || k.author,
					U = Object(l.b)({
						author: P,
						itemId: k.id,
						tooltipIdPrefix: j || C.a,
						tooltipType: E
					}),
					M = (e => Object(f.a)(e.id) ? e.belongsTo.id : e.subredditId)(k),
					A = Object(o.d)(),
					B = Object(o.e)(e => Object(I.b)(e, M)),
					T = Object(o.e)(x.a),
					L = Object(s.useCallback)(() => B && A(Object(c.c)(M, k.authorId)), [A, k, M, B]),
					D = Object(s.useCallback)(async () => {
						B && (await A(Object(i.d)(P)), L(), A(U === T ? Object(d.i)() : Object(d.f)({
							tooltipId: U
						})))
					}, [A, L, T, U, B, P]);
				Object(s.useEffect)(() => {
					if (B && U === T && !S) {
						const e = document.getElementById(b.b);
						e && (e.style.pointerEvents = "none")
					}
				}, [B, U, T, S]);
				const F = Object(s.useCallback)(e => {
					T === U && A(Object(d.i)());
					const t = document.getElementById(b.b);
					t && (t.style.pointerEvents = "inherit")
				}, [A, T, U]);
				Object(s.useEffect)(() => {
					if (B) return window.addEventListener("click", F), () => {
						window.removeEventListener("click", F)
					}
				}, [B, F]);
				const H = Object(s.useCallback)(e => {
						e.stopPropagation(), Object(p.a)(e).hasNewTabModifier ? window.open(`${a.a.redditUrl}/u/${P}`, "_blank") : D()
					}, [P, D]),
					R = `${U}-hover-id`;
				return r.a.createElement(u.a, {
					authorOrSubredditName: P,
					className: g,
					hoverId: R,
					sendHoverEvent: w,
					tooltipId: U,
					onClick: B ? e => H(e) : void 0,
					onHover: L,
					onlyLeaveOnClick: !0
				}, t, r.a.createElement(_.a, {
					className: n,
					contextId: k.id,
					hoverId: R,
					sendEvent: y,
					subredditId: M,
					tooltipId: U,
					tooltipType: E,
					userName: P,
					isCommentAuthorBlocked: O,
					collapsed: N
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
				s = n.n(a),
				r = n("./src/lib/timeAgo/index.ts"),
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
					return s.a.createElement(s.a.Fragment, null, Object(r.d)(e, i))
				},
				c = n("./src/lib/humanizeDate/index.ts");
			var d = function({
					seconds: e,
					...t
				}) {
					var n;
					const a = Object(o.a)(),
						r = {
							...t,
							locale: null !== (n = t.locale) && void 0 !== n ? n : a
						};
					return s.a.createElement(s.a.Fragment, null, Object(c.a)(e, r))
				},
				l = n("./src/lib/constants/index.ts");
			var u = function({
					seconds: e,
					locale: t
				}) {
					const n = Object(o.a)(),
						a = null != t ? t : n;
					return s.a.createElement(s.a.Fragment, null, function(e, t = l.D) {
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
				const s = Object(b.e)(e, t),
					r = new Date(e * l.Sb);
				let o;
				if (s === b.a.Live || n) return m.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return s === b.a.Future ? o = Object(b.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(b.b)(e) >= 5 ? p(r, a) : function(e, t = l.D) {
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(r, a) : s === b.a.Past && (o = Object(b.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : p(r, a)), `${o} @ ${function(e,t=l.D){return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(r,a)}`
			}
			var h = function({
				startTime: e,
				endTime: t,
				isLive: n,
				locale: a
			}) {
				const r = Object(o.a)(),
					i = null != a ? a : r;
				return s.a.createElement(s.a.Fragment, null, f(e, t, n, i))
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
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
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
				h = e => s.a.createElement(p, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				v = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return s.a.createElement(f, {
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
				C = Object(r.b)(I);
			t.c = C(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(x, b({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : s.a.createElement(_, b({}, e, {
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
				s = n.n(a),
				r = n("./src/higherOrderComponents/asTooltip.tsx"),
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
				const n = Object(r.a)(e, t);
				class a extends s.a.PureComponent {
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
						return s.a.createElement(n, c({}, this.props, {
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
				s = n.n(a),
				r = n("./src/config.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/ProfileIdCard/index.m.less"),
				c = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class l extends s.a.PureComponent {
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
					return s.a.createElement("a", {
						className: c.a.AwardedLastMonth,
						href: `${r.a.oldRedditUrl}/user/${n}/gilded`
					}, s.a.createElement("div", {
						className: c.a.iconColumn
					}, s.a.createElement("img", {
						alt: l,
						className: c.a.icon,
						src: e
					}), i > 1 && s.a.createElement("span", {
						className: c.a.count
					}, `+${Object(o.b)(i-1)}`)), s.a.createElement("div", {
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
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/models/Image/index.tsx"),
				i = n("./src/reddit/components/EditableImage/index.tsx"),
				c = n("./src/reddit/models/User/index.ts"),
				d = n("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = n("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				u = n.n(l);
			class m extends r.a.Component {
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
						hideNSFWPref: s,
						isNSFW: o,
						userName: d
					} = this.props, {
						isUpdating: l
					} = this.state, m = e ? r.a.createElement("div", {
						className: u.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return n && Object(c.e)(n) === d ? r.a.createElement(i.a, {
						altText: a.fbt._("{userName} banner image", [a.fbt._param("userName", d)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, m) : o && s ? null : m
				}
			}
			t.a = Object(d.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/preferences.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = Object(s.c)({
					currentUser: o.k,
					hideNSFWPref: o.C
				}),
				c = Object(a.b)(i, e => ({
					imageUpdateRequested: (t, n) => e(Object(r.C)(t, n))
				}));
			t.a = c
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, n) {
			"use strict";
			var a = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
					C = i && i.voteState;
				let N = null;
				_ || (N = e ? "user_hovercard" : "profile_overview");
				const g = Object(s.useCallback)(() => I(Object(m.g)(e ? "user_hovercard" : "profile_overview", t)), [e, I, t]);
				return r.a.createElement(u.t, {
					onClick: () => {
						n ? (I(m.h), _ && C === p.a.notVoted && x(Object(c.jb)(_))) : g();
						const e = n ? "postify" : "copy";
						x(Object(d.b)({
							clickSource: N,
							share: f,
							source: e
						}))
					},
					className: Object(a.a)(h.a.snoovatarButton, h.a.snoovatarExtraPadding, h.a.compactButtonLayout, {
						[h.a.avatarPostifyButton]: n
					}),
					isFullWidth: !0
				}, r.a.createElement(b.a, {
					className: Object(a.a)({
						[h.a.shirtIcon]: !n,
						[h.a.avatarPostButtonShirtIcon]: n
					})
				}), v._("Try this Look", null, {
					hk: "dOuPb"
				}), r.a.createElement("div", {
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
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
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
				return s.a.createElement(o.t, {
					onClick: d,
					isFullWidth: !0,
					className: Object(r.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !t && a,
						[l.a.compactButtonLayout]: e
					}, n)
				}, t ? s.a.createElement(c.a, {
					className: l.a.shirtIcon
				}) : s.a.createElement("div", {
					className: l.a.shirtIcon
				}), t ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : a ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? s.a.createElement("div", {
					className: l.a.chevronIcon
				}) : s.a.createElement(i.a, {
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
				s = n.n(a),
				r = n("./src/reddit/controls/LoadingIcon/index.tsx"),
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
				return s.a.createElement("div", {
					className: d.a.bannerWrapper
				}, s.a.createElement(i.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: n
				}), a && e && (c ? s.a.createElement(r.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : s.a.createElement(o.a, {
					className: u.a.closeIcon,
					onClick: l
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/reddit/controls/InternalLink/index.tsx"),
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
				const l = t ? s.a.createElement(s.a.Fragment, null, "u/", c, " · ", s.a.createElement(o.d, {
					seconds: a,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${c}`;
				return n ? s.a.createElement(r.a, i({}, d, {
					className: e,
					to: n
				}), l) : s.a.createElement("span", i({}, d, {
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
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/reddit/icons/svgs/Admin/index.tsx"),
				c = n("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				d = n("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = n.n(l);
			t.a = ({
				title: e,
				username: t,
				isEmployee: n,
				isGold: r,
				isNSFW: l
			}) => o.a.createElement("h1", {
				className: u.a.snoovatarUserTitle
			}, e || t, n && o.a.createElement(i.a, {
				className: u.a.snoovatarAdminIcon,
				title: s.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), r && o.a.createElement("a", {
				title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", t)], {
					hk: "3Fylv"
				}),
				href: `${a.a.redditUrl}/premium`
			}, o.a.createElement(d.a, {
				className: u.a.snoovatarPremiumIcon
			})), l && o.a.createElement(c.a, {
				className: u.a.snoovatarNsfwIcon,
				title: s.fbt._("NSFW - Adult Content", null, {
					hk: "2Iw7mN"
				})
			}))
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, n) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
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
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/InternalLink/index.tsx"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/selectors/experiments/econ/index.ts"),
				l = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				u = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				m = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				b = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				p = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				f = n.n(p);
			const h = 25;

			function v(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function I(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const x = v("particleDelay", f.a),
				_ = v("particleX", f.a),
				C = v("particleFloat", f.a),
				N = () => {
					const e = I(_),
						t = I(C),
						n = I(x);
					return Object(o.a)(f.a.particle, e, t, n)
				};
			class g extends s.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < h; t++) e.push(this.createParticle(t));
					return s.a.createElement("div", {
						role: "presentation",
						className: f.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return s.a.createElement("div", {
						key: e,
						className: `${N()}`
					})
				}
			}
			var O = g,
				k = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				j = n.n(k),
				E = n("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: n,
				editMode: a,
				isDeletingBanner: p,
				isEmployee: h,
				isGold: v,
				isNSFW: I,
				isOwnProfile: x,
				onClickSnoovatar: _,
				onDeleteBanner: C,
				prefersReducedAnimations: N,
				snoovatarUrl: g,
				title: k,
				userCreated: y,
				username: w,
				url: S,
				isHovercard: P
			}) => {
				const U = Object(r.e)(e => !x && !!g && Object(d.g)(e));
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(m.a, {
					bannerBackgroundImage: e,
					editMode: !!a,
					isNSFW: I,
					username: w,
					isDeletingBanner: !!p,
					onDeleteBanner: C
				}), s.a.createElement("div", {
					className: f.a.snoovatarContainer
				}, v && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: f.a.topGlow
				}), s.a.createElement("div", {
					className: f.a.bottomGlow
				}), !N && s.a.createElement(O, null)), s.a.createElement("img", {
					className: Object(o.a)(f.a.snoovatar, {
						[f.a.premiumGlow]: v
					}),
					src: g || void 0
				})), !a && x && s.a.createElement(i.a, {
					to: "/settings/profile",
					className: f.a.snoovatarSettingsLink
				}, s.a.createElement(c.a, {
					name: "settings",
					className: j.a.settingsIcon
				})), s.a.createElement(E.a, {
					isEmployee: h,
					isGold: v,
					isNSFW: I,
					title: k,
					username: w
				}), s.a.createElement(b.a, {
					className: f.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: w,
					userCreated: y,
					url: S
				}), (x || !n && !!g) && s.a.createElement(l.a, {
					compact: t,
					currentUserHasSnoovatar: n,
					isOwnProfile: x,
					onClick: _
				}), U && s.a.createElement(u.a, {
					username: w,
					isHovercard: !!P,
					share: {
						username: w
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
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
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
				}) => r.a.createElement(o.t, u({}, a, {
					priority: m(o.c.Primary, e, t),
					className: Object(l.a)(a.className, d.a.BaseButton),
					size: n ? o.d.S : o.d.M
				})),
				p = e => r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? a.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : a.fbt._("Following", null, {
					hk: "1wQlVR"
				})), r.a.createElement("span", {
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
					...s
				}) => r.a.createElement(o.t, u({}, s, {
					priority: m(o.c.Secondary, t, n),
					className: Object(l.a)(s.className, d.a.BaseButton),
					size: a ? o.d.S : o.d.M,
					text: p(e)
				}));
			class h extends r.a.Component {
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
						small: s = !1,
						isFullWidth: o = !1,
						style: c
					} = this.props, d = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: a,
						small: s,
						isFullWidth: o,
						style: c
					};
					return this.props.userIsSubscriber ? r.a.createElement(f, u({}, d, {
						buttonType: this.props.identifier.type
					})) : r.a.createElement(b, u({}, d, {
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
				s = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				r = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(s.a)(Object(a.c)(r.a))
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
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.m.less"),
				c = n.n(i);
			t.a = e => s.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, s.a.createElement(o.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
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
				s = n.n(a),
				r = n("./src/reddit/controls/DropdownSelector/index.m.less"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/controls/Dropdown/Row.tsx"),
				d = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/icons/fonts/index.tsx");
			const u = e => {
				e.preventDefault()
			};
			class m extends s.a.Component {
				constructor() {
					super(...arguments), this.dropdownButton = s.a.createRef(), this.menuItems = s.a.createRef(), this.containerRef = s.a.createRef(), this.state = {
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
						isModNotesStyle: r
					} = this.props;
					return e.map((e, d) => s.a.createElement(c.b, {
						key: d + e.displayText,
						className: Object(i.a)(o.a.menuOption, a, {
							[o.a.topics]: n,
							[o.a.modNotes]: r
						}),
						noIcon: Boolean(e.icon),
						onKeydown: t => this.handleOptionKeyDown(t, e),
						onMouseDown: t => this.onOptionClick(t, e),
						onBlur: this.handleDropdownBlur,
						showSelectedCheckmark: t,
						isSelected: void 0 !== e.isSelected ? e.isSelected : void 0,
						isModNotesStyle: r,
						isTopicsStyle: n
					}, r ? s.a.createElement("span", {
						className: o.a.modNotes
					}, e.icon && e.icon, e.displayText) : s.a.createElement(s.a.Fragment, null, e.icon && e.icon, e.displayText)))
				}
				render() {
					const {
						buttonClassName: e,
						className: t,
						displayText: n,
						isCompactStyle: a,
						isModNotesStyle: r,
						isTopicsStyle: c,
						menuItemsClassName: m,
						name: b,
						isSaving: p,
						buttonIcon: f,
						disabled: h
					} = this.props, {
						isOpen: v
					} = this.state;
					return s.a.createElement("div", {
						ref: this.containerRef,
						id: this.props.id,
						className: Object(i.a)(o.a.dropdownMenu, t, {
							[o.a.topics]: c
						})
					}, s.a.createElement("button", {
						onClick: h ? void 0 : this.handleDropdownClick,
						className: Object(i.a)(e, o.a.selector, {
							[o.a.compact]: a
						}, {
							[o.a.topics]: c
						}, {
							[o.a.modNotes]: r
						}, {
							[o.a.disabled]: h
						}),
						name: b,
						role: "menu",
						ref: this.dropdownButton,
						onBlur: h ? void 0 : this.handleDropdownBlur,
						onKeyDown: h ? void 0 : this.handleDropdownKeyDown
					}, s.a.createElement("span", {
						className: o.a.selectorContent,
						tabIndex: -1
					}, f && s.a.createElement("span", {
						className: Object(i.a)(o.a.buttonIcon, {
							[o.a.isModNotesStyle]: r
						})
					}, f), n), h ? null : p ? s.a.createElement(d.a, {
						sizePx: 8,
						className: o.a.loadingIcon
					}) : s.a.createElement(l.a, {
						name: "caret_down"
					})), s.a.createElement("div", {
						className: Object(i.a)(o.a.menuItems, m, {
							[o.a.topics]: c,
							[o.a.isClosed]: !v && r,
							[o.a.isModNotesStyle]: r
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
				return r
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			class r extends s.a.Component {
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
					} = this, n = "string" == typeof t.value ? t.value : "", a = "object" == typeof t.value ? t.value : null, r = n || a;
					return s.a.createElement("div", {
						className: e.className
					}, n && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), (!r || e.multiple || void 0 !== e.isPending && !e.isPending) && s.a.createElement("input", {
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
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => s.a.createElement("div", {
				className: Object(r.a)(i.a.loadingIcon, t, {
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
				s = n("./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json"),
				r = n("./src/redditGQL/operations/UpdateNotificationPreferences.json");
			const o = (e, t) => Object(a.a)(e, {
					...s,
					variables: t
				}),
				i = (e, t) => Object(a.a)(e, {
					...r,
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
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "t", (function() {
				return m
			})), n.d(t, "p", (function() {
				return b
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "r", (function() {
				return f
			})), n.d(t, "s", (function() {
				return h
			})), n.d(t, "v", (function() {
				return v
			})), n.d(t, "k", (function() {
				return I
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "w", (function() {
				return N
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "m", (function() {
				return k
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "q", (function() {
				return w
			}));
			var a, s, r, o, i, c, d = n("./src/reddit/constants/tracking.ts"),
				l = n("./src/reddit/selectors/telemetry.ts"),
				u = n("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(a || (a = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.HideUpdates = "hide_updates", e.BlockAwarder = "block_awarder", e.DecreaseSubredditUpdates = "disable_frequent"
			}(s || (s = {})),
			function(e) {
				e.MiniInbox = "mini_inbox", e.Inbox = "inbox"
			}(r || (r = {})),
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
				}) => s => ({
					...l.o(s),
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
					awardId: s
				}) => r => {
					Object(u.a)({
						...l.o(r),
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
							awardId: s
						}
					})
				},
				p = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: a,
					awardId: s,
					position: r,
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
						awardId: s
					},
					actionInfo: {
						position: r
					},
					subreddit: c ? {
						id: c
					} : null,
					post: i ? {
						id: i
					} : null
				}),
				f = ({
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
				h = ({
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
				v = ({
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
				I = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: a,
					awardId: s
				}) => r => ({
					...l.o(r),
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
						awardId: s
					}
				}),
				x = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: a
				}) => s => ({
					...l.o(s),
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
			var _;
			! function(e) {
				e.Cats = "cats", e.Memes = "memes", e.Karma = "karma_free_subs", e.PN_perms = "pn_perms", e.Email_perms = "email_perms"
			}(_ || (_ = {}));
			const C = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: a,
					type: s
				}) => r => ({
					...l.o(r),
					action: d.c.CLICK,
					noun: "overflow_option",
					source: o.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: a
					},
					notification: {
						type: s
					},
					actionInfo: {
						...l.d(r),
						type: e
					}
				}),
				N = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: a,
					type: s
				}) => r => ({
					...l.o(r),
					action: d.c.UNDO,
					noun: "overflow_option",
					source: o.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: a
					},
					notification: {
						type: s
					},
					actionInfo: {
						...l.d(r),
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
				O = e => t => ({
					...l.o(t),
					action: d.c.CLICK,
					noun: "notification_app_settings",
					source: o.Inbox,
					actionInfo: {
						...l.d(t),
						pageType: e
					}
				}),
				k = () => e => ({
					...l.o(e),
					action: d.c.CLICK,
					noun: "see_all",
					source: o.Inbox,
					actionInfo: {
						...l.d(e),
						pageType: r.MiniInbox
					}
				}),
				j = () => e => ({
					...l.o(e),
					action: d.c.CLICK,
					noun: "messages",
					source: o.Inbox
				}),
				E = ({
					isMiniInbox: e
				}) => t => ({
					...l.o(t),
					action: d.c.CLICK,
					noun: "mark_all_as_read",
					source: o.Inbox,
					actionInfo: e ? {
						...l.d(t),
						pageType: r.MiniInbox
					} : {}
				}),
				y = (e, t) => n => ({
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
				w = () => e => ({
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
				s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/selectors/meta.ts");
			const i = "undefined" == typeof document ? function() {
				const e = Object(r.e)(o.i) || s.DEFAULT_LOCALE;
				return Object(a.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || s.DEFAULT_LOCALE;
				return Object(a.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			};
			t.a = i;
			const c = () => {
				const e = i(),
					t = Object(r.e)(o.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
		},
		"./src/reddit/hooks/useScrollGradient.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return r
			}));
			var a, s = n("./node_modules/react/index.js");

			function r(e, t = a.Bottom) {
				const [n, r] = Object(s.useState)(e), o = Object(s.useRef)(null);
				return {
					container: o,
					isScrollGradientVisible: n,
					calculateGradientVisibility: () => {
						const e = o.current;
						if (!e) return;
						const n = e.getBoundingClientRect().height,
							{
								scrollHeight: s,
								scrollTop: i
							} = e,
							c = Math.ceil(i + n) >= s,
							d = Math.ceil(n - i) >= s,
							l = t === a.Bottom ? c : d;
						r(!l)
					}
				}
			}! function(e) {
				e.Top = "top", e.Bottom = "bottom"
			}(a || (a = {}))
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(r.b)("info",e.isFilled)} ${e.className}`
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
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), s.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, s.a.createElement("stop", {
				stopColor: "#EC0623"
			}), s.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = function({
				className: e
			}) {
				return s.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("g", {
					fill: "inherit"
				}, s.a.createElement("path", {
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
				return s
			})), n.d(t, "g", (function() {
				return r
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
				s = e => e.user.notificationPrefs.api.getPreferences.pending,
				r = e => e.user.notificationPrefs.api.setPreferences.pending,
				o = e => e.user.notificationPrefs.preferences,
				i = e => e.user.notificationPrefs.isNotificationPromptVisible,
				c = (e, t) => {
					var n, a;
					const s = (e => e.user.notificationPrefs.pushSettingsLayout)(e),
						r = null === (n = null == s ? void 0 : s.rows) || void 0 === n ? void 0 : n.byId;
					return r && (null === (a = r[t]) || void 0 === a ? void 0 : a.isEnabled)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/AuthorHovercard.686ac76298ebe40ea0cc.js.map