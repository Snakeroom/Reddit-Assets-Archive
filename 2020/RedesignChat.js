// https://www.redditstatic.com/desktop2x/RedesignChat.c8cefb8fae70cc1a5e18.js
// Retrieved at 9/14/2020, 11:40:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RedesignChat"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var a = s("./node_modules/lodash/toString.js"),
				c = 0;
			e.exports = function(e) {
				var t = ++c;
				return a(e) + t
			}
		},
		"./src/chat/initializer.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "default", (function() {
				return W
			}));
			var a = s("./node_modules/history/esm/history.js"),
				c = s("./node_modules/js-cookie/src/js.cookie.js"),
				r = s.n(c),
				i = s("./node_modules/redux-thunk/es/index.js"),
				n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/initializeClient/index.tsx"),
				d = s("./src/lib/matchRoute/index.ts"),
				u = s("./src/reduxMiddleware/apiContext.ts"),
				l = s("./src/reduxMiddleware/gqlContext.ts"),
				h = s("./src/chat/actions/apiRequestHeaders.ts"),
				m = s("./src/chat/actions/notifications.ts"),
				p = s("./src/chat/actions/platform.ts"),
				b = s("./src/chat/actions/session.ts"),
				g = s("./src/chat/actions/user.ts"),
				x = s("./src/chat/components/PortalContainer/index.tsx"),
				j = s("./src/chat/customMiddleware/containerSize.ts"),
				O = s("./src/chat/customMiddleware/heartbeat.ts"),
				f = s("./src/chat/customMiddleware/iframeDispatcher.ts"),
				C = s("./src/chat/customMiddleware/loggedOutPreferencesSync.ts"),
				w = s("./src/chat/customMiddleware/sendbirdToken.ts"),
				v = s("./src/chat/customMiddleware/title.ts"),
				_ = s("./src/chat/customMiddleware/tokenRefresher.ts"),
				y = s("./src/chat/customMiddleware/tracking.ts"),
				R = s("./src/chat/customMiddleware/unreadMessageCount.ts"),
				M = s("./node_modules/lodash/uniqueId.js"),
				k = s.n(M),
				S = s("./src/chat/constants/theme.ts"),
				D = s("./src/chat/models/Theme/index.ts"),
				T = s("./src/chat/reducers/meta/index.ts"),
				A = s("./src/chat/reducers/platform/index.ts"),
				E = s("./src/chat/reducers/promos/index.ts"),
				I = s("./src/chat/selectors/platform.ts");
			const q = (e, t) => (e.chat && e.chat.promos && (t.promos = Object.assign(Object.assign({}, E.a), e.chat.promos)), t),
				L = (e, t) => {
					const {
						account: s,
						language: a,
						loid: c,
						prefs: r,
						reddaid: i,
						session: n,
						sessionTracker: o
					} = e.user;
					return t.user = Object.assign(Object.assign({}, t.user), {
						account: s ? {
							commentKarma: s.commentKarma,
							created: s.created,
							inChat: s.inChat,
							id: s.id,
							isNSFW: s.isNSFW,
							linkKarma: s.postKarma,
							name: s.displayText || "",
							prefNightmode: e.user.prefs.nightmode,
							profileImg: s.accountIcon,
							seenSubredditChatFtux: s.seenSubredditChatFtux
						} : null,
						language: a,
						loid: c,
						prefs: r,
						reddaid: i,
						sessionTracker: o,
						session: n && n.unsafeLoggedOut ? null : n
					}), t
				},
				N = e => (e.meta = Object.assign(Object.assign({}, T.a), {
					isRedesign: !0
				}), e),
				F = e => {
					if (e.user && e.user.prefs && e.user.prefs.nightmode) {
						const {
							NIGHT: t,
							REDDIT: s
						} = S.b, {
							nightmode: a
						} = e.user.prefs, c = a ? t : s;
						e.themes = {
							current: D.a[c],
							cached: {}
						}, e.user.prefs.globalTheme = c
					}
					return e
				},
				H = (e, t, s) => {
					const c = k()(),
						r = Object(a.c)(t.location.pathname, void 0, c),
						i = Object(d.a)(Object(a.e)(r), s),
						n = Object(A.b)(A.a, Object(p.e)({
							location: r,
							action: "PUSH",
							routeMatch: i
						}));
					return e.platform = Object.assign({}, n), e
				},
				K = e => {
					const t = Object(I.f)(e);
					return e.sidebarTabs = {
						activeIndex: t,
						lastChannelIdPerTab: {}
					}, e
				};
			var P = s("./src/chat/reducers/index.ts"),
				z = s("./src/chat/routes/index.ts");
			const B = Object(u.a)({
					actionDispatchers: {
						reddaidReceived: g.r,
						loidReceived: g.q,
						sessionTrackerReceived: g.u
					},
					cookies: r.a,
					receivedActions: {
						headersReceived: h.a,
						loidReceived: g.e,
						reddaidReceived: g.f,
						sessionTrackerReceived: g.g,
						userAuthenticated: b.a,
						userLoggedOut: b.b,
						userReauthenticated: b.c
					},
					statsAppName: n.l.Chat
				}),
				U = Object(l.a)(B.apiContext);

			function W(e, t) {
				let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/chat/minimize";
				const c = document.getElementById("2x-container"),
					r = document.createElement("div");
				return c.appendChild(r), Object(o.a)({
					reducerMap: P.a,
					routes: z.a,
					apiContext: B.apiContext,
					appFactory: x.a,
					appName: n.l.Chat,
					history: Object(a.d)({
						initialEntries: [s],
						initialIndex: 0
					}),
					customMiddleware: [i.a.withExtraArgument({
						routes: z.a,
						apiContext: B.apiContext,
						gqlContext: U.gqlContext
					}), B.middleware, _.a, w.a, f.a, O.a, C.a, Object(y.a)(t), j.a, R.a, v.a],
					modifyInitialData: t => {
						let {
							initialData: s,
							browserHistory: a
						} = t;
						return s = L(e, s), s = N(s), s = F(s), s = q(e, s), s = H(s, a, z.a), s = K(s)
					},
					preRender: e => {
						let {
							browserHistory: t,
							routes: s,
							store: c
						} = e;
						return c.dispatch(Object(g.l)()), t.listen((e, t) => {
							const r = Object(d.a)(Object(a.e)(e), s);
							c.dispatch(Object(p.d)(e, t, r)), c.dispatch(Object(g.l)())
						}), "undefined" != typeof window && window.addEventListener("load", async () => {
							c.dispatch(Object(m.a)(!1, !1))
						}), {}
					},
					gqlContext: U.gqlContext,
					target: r,
					timingsSampleRate: 1
				})
			}
		},
		"./src/reddit/actions/chat/proxy.ts": function(e, t, s) {
			"use strict";
			s.r(t);
			var a = s("./node_modules/lodash/isEqual.js"),
				c = s.n(a),
				r = s("./src/chat/actions/message/unreadCount.ts"),
				i = s("./src/chat/actions/promo/constants.ts"),
				n = s("./src/chat/models/Promo/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts");
			Object(o.a)(i.a);
			const d = Object(o.a)(i.b);
			var u = s("./src/reddit/actions/chat/unreadCount.ts"),
				l = s("./src/reddit/actions/tabBadging.ts"),
				h = s("./src/reddit/selectors/chat.ts");
			t.default = (e, t) => s => {
				switch (s.type) {
					case r.a: {
						const a = s.payload,
							r = Object(h.d)(t());
						c()(a, r) || (e(Object(u.c)(a)), e(Object(l.c)()))
					}
					break;
				case i.b:
					s.payload === n.a.SubredditChatFtux && e(d(n.a.SubredditChatFtux))
				}
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RedesignChat.c8cefb8fae70cc1a5e18.js.map