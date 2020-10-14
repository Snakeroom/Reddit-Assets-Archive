// https://www.redditstatic.com/desktop2x/RedesignChat.7f3efa42fc97bb132030.js
// Retrieved at 10/14/2020, 1:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RedesignChat"], {
		"./node_modules/lodash/uniqueId.js": function(t, e, s) {
			var n = s("./node_modules/lodash/toString.js"),
				c = 0;
			t.exports = function(t) {
				var e = ++c;
				return n(t) + e
			}
		},
		"./src/chat/initializer.ts": function(t, e, s) {
			"use strict";
			s.r(e), s.d(e, "default", (function() {
				return K
			}));
			var n = s("./node_modules/history/esm/history.js"),
				c = s("./node_modules/js-cookie/src/js.cookie.js"),
				r = s.n(c),
				a = s("./node_modules/redux-thunk/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/initializeClient/index.tsx"),
				d = s("./src/lib/matchRoute/index.ts"),
				u = s("./src/reduxMiddleware/apiContext.ts"),
				l = s("./src/reduxMiddleware/gqlContext.ts"),
				b = s("./src/chat/actions/apiRequestHeaders.ts"),
				h = s("./src/chat/actions/notifications.ts"),
				m = s("./src/chat/actions/platform.ts"),
				f = s("./src/chat/actions/session.ts"),
				g = s("./src/chat/actions/user.ts"),
				C = s("./src/chat/components/PortalContainer/index.tsx"),
				O = s("./src/chat/customMiddleware/containerSize.ts"),
				j = s("./src/chat/customMiddleware/heartbeat.ts"),
				p = s("./src/chat/customMiddleware/iframeDispatcher.ts"),
				x = s("./src/chat/customMiddleware/loggedOutPreferencesSync.ts"),
				_ = s("./src/chat/customMiddleware/sendbirdToken.ts"),
				E = s("./src/chat/customMiddleware/title.ts"),
				S = s("./src/chat/customMiddleware/tokenRefresher.ts"),
				v = s("./src/chat/customMiddleware/tracking.ts"),
				w = s("./src/chat/customMiddleware/unreadMessageCount.ts"),
				T = s("./node_modules/lodash/uniqueId.js"),
				R = s.n(T),
				A = s("./src/chat/constants/theme.ts"),
				D = s("./src/chat/models/Theme/index.ts"),
				N = s("./src/chat/reducers/meta/index.ts"),
				U = s("./src/chat/reducers/platform/index.ts"),
				y = s("./src/chat/reducers/promos/index.ts"),
				I = s("./src/chat/selectors/platform.ts");
			const k = (t, e) => (t.chat && t.chat.promos && (e.promos = Object.assign(Object.assign({}, y.a), t.chat.promos)), e),
				M = (t, e) => {
					const {
						account: s,
						language: n,
						loid: c,
						prefs: r,
						reddaid: a,
						session: i,
						sessionTracker: o
					} = t.user;
					return e.user = Object.assign(Object.assign({}, e.user), {
						account: s ? {
							commentKarma: s.commentKarma,
							created: s.created,
							inChat: s.inChat,
							id: s.id,
							isNSFW: s.isNSFW,
							linkKarma: s.postKarma,
							name: s.displayText || "",
							prefNightmode: t.user.prefs.nightmode,
							profileImg: s.accountIcon,
							seenSubredditChatFtux: s.seenSubredditChatFtux
						} : null,
						language: n,
						loid: c,
						prefs: r,
						reddaid: a,
						sessionTracker: o,
						session: i && i.unsafeLoggedOut ? null : i
					}), e
				},
				P = t => (t.meta = Object.assign(Object.assign({}, N.a), {
					isRedesign: !0
				}), t),
				L = t => {
					if (t.user && t.user.prefs && t.user.prefs.nightmode) {
						const {
							NIGHT: e,
							REDDIT: s
						} = A.b, {
							nightmode: n
						} = t.user.prefs, c = n ? e : s;
						t.themes = {
							current: D.a[c],
							cached: {}
						}, t.user.prefs.globalTheme = c
					}
					return t
				},
				B = (t, e, s) => {
					const c = R()(),
						r = Object(n.c)(e.location.pathname, void 0, c),
						a = Object(d.a)(Object(n.e)(r), s),
						i = Object(U.b)(U.a, Object(m.e)({
							location: r,
							action: "PUSH",
							routeMatch: a
						}));
					return t.platform = Object.assign({}, i), t
				},
				q = t => {
					const e = Object(I.f)(t);
					return t.sidebarTabs = {
						activeIndex: e,
						lastChannelIdPerTab: {}
					}, t
				};
			var F = s("./src/chat/reducers/index.ts"),
				H = s("./src/chat/routes/index.ts");
			const Q = Object(u.a)({
					actionDispatchers: {
						reddaidReceived: g.s,
						loidReceived: g.r,
						sessionTrackerReceived: g.v
					},
					cookies: r.a,
					receivedActions: {
						headersReceived: b.a,
						loidReceived: g.e,
						reddaidReceived: g.f,
						sessionTrackerReceived: g.g,
						userAuthenticated: f.a,
						userLoggedOut: f.b,
						userReauthenticated: f.c
					},
					statsAppName: i.l.Chat
				}),
				G = Object(l.a)(Q.apiContext);

			function K(t, e) {
				let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/chat/minimize";
				const c = document.getElementById("2x-container"),
					r = document.createElement("div");
				return c.appendChild(r), Object(o.a)({
					reducerMap: F.a,
					routes: H.a,
					apiContext: Q.apiContext,
					appFactory: C.a,
					appName: i.l.Chat,
					history: Object(n.d)({
						initialEntries: [s],
						initialIndex: 0
					}),
					customMiddleware: [a.a.withExtraArgument({
						routes: H.a,
						apiContext: Q.apiContext,
						gqlContext: G.gqlContext
					}), Q.middleware, S.a, _.a, p.a, j.a, x.a, Object(v.a)(e), O.a, w.a, E.a],
					modifyInitialData: e => {
						let {
							initialData: s,
							browserHistory: n
						} = e;
						return s = M(t, s), s = P(s), s = L(s), s = k(t, s), s = B(s, n, H.a), s = q(s)
					},
					preRender: t => {
						let {
							browserHistory: e,
							routes: s,
							store: c
						} = t;
						return c.dispatch(Object(g.l)()), e.listen((t, e) => {
							const r = Object(d.a)(Object(n.e)(t), s);
							c.dispatch(Object(m.d)(t, e, r)), c.dispatch(Object(g.l)())
						}), "undefined" != typeof window && window.addEventListener("load", async () => {
							c.dispatch(Object(h.a)(!1, !1))
						}), {}
					},
					gqlContext: G.gqlContext,
					target: r,
					timingsSampleRate: 1
				})
			}
		},
		"./src/reddit/actions/chat/proxy.ts": function(t, e, s) {
			"use strict";
			s.r(e);
			var n = s("./node_modules/lodash/isEqual.js"),
				c = s.n(n),
				r = s("./src/chat/actions/message/unreadCount.ts"),
				a = s("./src/chat/actions/promo/constants.ts"),
				i = s("./src/chat/models/Promo/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts");
			Object(o.a)(a.a);
			const d = Object(o.a)(a.b);
			var u = s("./src/reddit/actions/chat/unreadCount.ts"),
				l = s("./src/reddit/actions/tabBadging.ts"),
				b = s("./src/reddit/selectors/chat.ts");
			e.default = (t, e) => s => {
				switch (s.type) {
					case r.a: {
						const n = s.payload,
							r = Object(b.d)(e());
						c()(n, r) || (t(Object(u.c)(n)), t(Object(l.c)()))
					}
					break;
				case a.b:
					s.payload === i.a.SubredditChatFtux && t(d(i.a.SubredditChatFtux))
				}
			}
		},
		"./src/reddit/actions/chat/unreadCount.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return n
			})), s.d(e, "c", (function() {
				return m
			})), s.d(e, "b", (function() {
				return C
			})), s.d(e, "d", (function() {
				return p
			}));
			var n, c = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/chat/endpoints/sendbird/index.ts"),
				i = s("./src/reddit/actions/tabBadging.ts"),
				o = s("./src/reddit/selectors/chat.ts"),
				d = s("./src/reddit/selectors/user.ts");
			! function(t) {
				t.SYNC = "UNREAD_COUNT__SYNC", t.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", t.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", t.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(n || (n = {}));
			const {
				SYNC: u,
				REQUEST_FAILED: l,
				REQUEST_PENDING: b,
				REQUEST_SUCCESS: h
			} = n, m = Object(r.a)(u), f = Object(r.a)(l), g = Object(r.a)(b), C = Object(r.a)(h);
			let O;
			const j = 5 * c.eb,
				p = () => async (t, e, s) => {
					let {
						apiContext: n
					} = s;
					const c = e();
					if (!Object(d.I)(c) || !Object(o.f)(c)) return clearTimeout(O);
					O || t((() => async (t, e, s) => {
						let {
							apiContext: n
						} = s;
						const c = e(),
							{
								session: r
							} = c.user;
						if (r && Object(d.I)(c) && Object(o.f)(c)) {
							t(g());
							const e = await Object(a.i)(n(), r);
							e && e.ok ? (t(C({
								basicChannelCount: e.body.unread_count || 0,
								subredditChannelCount: e.body.subreddit_unread_count || 0
							})), t(Object(i.c)())) : t(f({
								error: e.error
							}))
						}
					})()), O = setTimeout(() => {
						t(p())
					}, j)
				}
		},
		"./src/reddit/actions/inbox.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return c
			})), s.d(e, "b", (function() {
				return r
			}));
			var n = s("./src/lib/makeActionCreator/index.ts");
			const c = "INBOX__COUNT_UPDATE",
				r = Object(n.a)(c)
		},
		"./src/reddit/actions/tabBadging.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return l
			})), s.d(e, "d", (function() {
				return h
			})), s.d(e, "b", (function() {
				return m
			})), s.d(e, "c", (function() {
				return C
			}));
			var n = s("./src/lib/fastdom/index.ts"),
				c = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/chat/unreadCount.ts"),
				a = s("./src/reddit/actions/inbox.ts"),
				i = s("./src/reddit/contexts/PageLayer/selectors.ts"),
				o = s("./src/reddit/helpers/tabBadging/index.ts"),
				d = s("./src/reddit/selectors/chat.ts"),
				u = s("./src/reddit/selectors/user.ts");
			const l = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				b = Object(c.a)(l),
				h = t => async (e, s) => {
					const n = s(),
						c = Object(d.a)(n),
						i = Object(d.d)(n),
						o = Object(u.D)(n),
						{
							basicChannelCount: l,
							inboxCount: b
						} = t;
					c !== l && e(Object(r.b)(Object.assign(Object.assign({}, i), {
						basicChannelCount: l
					}))), b && b !== o && e(Object(a.b)({
						inboxCount: b
					})), (c !== l || b && b !== o) && e(g())
				}, m = (t, e) => {
					t <= 0 ? n.a.write(() => {
						Object(o.b)(!1), window.document.title = e
					}) : n.a.write(() => {
						Object(o.b)(), window.document.title = "(".concat(t, ") ").concat(e)
					})
				}, f = t => {
					return {
						inboxCount: Object(u.D)(t) || 0,
						basicChannelCount: Object(d.a)(t) || 0
					}
				}, g = () => async (t, e) => {
					const s = e(),
						n = Object(i.e)(s, {});
					if (!(Object(u.H)(s) || Object(u.I)(s)) || !n) return;
					const c = (t => {
						const {
							inboxCount: e,
							basicChannelCount: s
						} = f(t);
						return e + s
					})(s);
					m(c, n), t(b({
						hasUnreadMessages: !!c
					}))
				}, C = () => async (t, e) => {
					{
						t(g());
						const s = f(e());
						Object(o.c)(s)
					}
				}
		},
		"./src/reddit/helpers/tabBadging/index.ts": function(t, e, s) {
			"use strict";
			s.d(e, "a", (function() {
				return o
			})), s.d(e, "b", (function() {
				return u
			})), s.d(e, "c", (function() {
				return l
			}));
			var n = s("./src/config.ts");
			const c = "".concat(n.a.assetPath, "/img/favicon/badged-favicon-32x32.png"),
				r = "".concat(n.a.assetPath, "/img/favicon/badged-favicon-16x16.png"),
				a = "".concat(n.a.assetPath, "/img/favicon/favicon-32x32.png"),
				i = "".concat(n.a.assetPath, "/img/favicon/favicon-16x16.png"),
				o = "badgeCountSync",
				d = t => window.document.querySelector('link[href="'.concat(t, '"]')),
				u = function() {
					let t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
					const e = d(t ? a : c),
						s = d(t ? i : r);
					e && s && (e.href = t ? c : a, s.href = t ? r : i)
				},
				l = t => {
					navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: o,
						badgeCounts: t
					})
				}
		},
		"./src/reddit/selectors/chat.ts": function(t, e, s) {
			"use strict";
			s.d(e, "d", (function() {
				return a
			})), s.d(e, "a", (function() {
				return i
			})), s.d(e, "b", (function() {
				return o
			})), s.d(e, "f", (function() {
				return d
			})), s.d(e, "e", (function() {
				return u
			})), s.d(e, "c", (function() {
				return l
			}));
			var n = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				c = s("./src/reddit/selectors/moderatorPermissions.ts"),
				r = s("./src/reddit/selectors/platform.ts");
			const a = t => t.chat.unread.count,
				i = t => {
					return a(t).basicChannelCount
				},
				o = t => t.chat.promos,
				d = t => !(t.chat.isInited || t.chat.unread.api.pending),
				u = (t, e) => {
					const {
						chatConfig: s
					} = n.c;
					return Object(c.a)(s)(t, e)
				},
				l = t => {
					const e = Object(r.d)(t);
					if (t.chat.subredditSettings.subredditId === e) return t.chat.subredditSettings
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RedesignChat.7f3efa42fc97bb132030.js.map