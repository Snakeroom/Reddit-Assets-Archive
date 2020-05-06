// https://www.redditstatic.com/desktop2x/RedesignChat.21c2668f9649ac6d7ccc.js
// Retrieved at 5/6/2020, 2:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RedesignChat"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var a = s("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return a(e) + t
			}
		},
		"./src/chat/initializer.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "default", (function() {
				return z
			}));
			var a = s("./node_modules/history/esm/history.js"),
				r = s("./node_modules/js-cookie/src/js.cookie.js"),
				c = s.n(r),
				i = s("./node_modules/redux-thunk/es/index.js"),
				n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/initializeClient/index.tsx"),
				d = s("./src/lib/matchRoute/index.ts"),
				u = s("./src/reduxMiddleware/apiContext.ts"),
				l = s("./src/chat/actions/apiRequestHeaders.ts"),
				h = s("./src/chat/actions/platform.ts"),
				m = s("./src/chat/actions/session.ts"),
				p = s("./src/chat/actions/user.ts"),
				b = s("./src/chat/components/PortalContainer/index.tsx"),
				x = s("./src/chat/customMiddleware/containerSize.ts"),
				g = s("./src/chat/customMiddleware/heartbeat.ts"),
				j = s("./src/chat/customMiddleware/iframeDispatcher.ts"),
				O = s("./src/chat/customMiddleware/loggedOutPreferencesSync.ts"),
				f = s("./src/chat/customMiddleware/sendbirdToken.ts"),
				C = s("./src/chat/customMiddleware/title.ts"),
				w = s("./src/chat/customMiddleware/tokenRefresher.ts"),
				_ = s("./src/chat/customMiddleware/tracking.ts"),
				v = s("./src/chat/customMiddleware/unreadMessageCount.ts"),
				k = s("./node_modules/lodash/uniqueId.js"),
				R = s.n(k),
				y = s("./src/chat/constants/theme.ts"),
				M = s("./src/chat/models/Theme/index.ts"),
				S = s("./src/chat/reducers/meta/index.ts"),
				D = s("./src/chat/reducers/platform/index.ts"),
				T = s("./src/chat/reducers/promos/index.ts"),
				A = s("./src/chat/selectors/platform.ts");
			const I = (e, t) => (e.chat && e.chat.promos && (t.promos = Object.assign({}, T.a, e.chat.promos)), t),
				E = (e, t) => {
					const {
						account: s,
						language: a,
						loid: r,
						prefs: c,
						reddaid: i,
						session: n,
						sessionTracker: o
					} = e.user;
					return t.user = Object.assign({
						experiments: {}
					}, t.user, {
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
						loid: r,
						prefs: c,
						reddaid: i,
						sessionTracker: o,
						session: n && n.unsafeLoggedOut ? null : n
					}), t
				},
				L = e => (e.meta = Object.assign({}, S.a, {
					isRedesign: !0
				}), e),
				N = e => {
					if (e.user && e.user.prefs && e.user.prefs.nightmode) {
						const {
							NIGHT: t,
							REDDIT: s
						} = y.b, {
							nightmode: a
						} = e.user.prefs, r = a ? t : s;
						e.themes = {
							current: M.a[r],
							cached: {}
						}, e.user.prefs.globalTheme = r
					}
					return e
				},
				F = (e, t, s) => {
					const r = R()(),
						c = Object(a.c)(t.location.pathname, void 0, r),
						i = Object(d.a)(Object(a.e)(c), s),
						n = Object(D.b)(D.a, Object(h.e)({
							location: c,
							action: "PUSH",
							routeMatch: i
						}));
					return e.platform = Object.assign({}, n), e
				},
				H = e => {
					const t = Object(A.f)(e);
					return e.sidebarTabs = {
						activeIndex: t,
						lastChannelIdPerTab: {}
					}, e
				};
			var K = s("./src/chat/reducers/index.ts"),
				q = s("./src/chat/routes/index.ts");
			const P = Object(u.a)({
				actionDispatchers: {
					reddaidReceived: p.r,
					loidReceived: p.q,
					sessionTrackerReceived: p.u
				},
				cookies: c.a,
				receivedActions: {
					headersReceived: l.a,
					loidReceived: p.e,
					reddaidReceived: p.f,
					sessionTrackerReceived: p.g,
					userAuthenticated: m.a,
					userLoggedOut: m.b,
					userReauthenticated: m.c
				},
				statsAppName: n.k.Chat
			});

			function z(e, t) {
				let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/chat/minimize";
				const r = document.getElementById("2x-container"),
					c = document.createElement("div");
				return r.appendChild(c), Object(o.a)({
					reducers: K.a,
					routes: q.a,
					apiContext: P.apiContext,
					appFactory: b.a,
					appName: n.k.Chat,
					history: Object(a.d)({
						initialEntries: [s],
						initialIndex: 0
					}),
					customMiddleware: [i.a.withExtraArgument({
						routes: q.a,
						apiContext: P.apiContext
					}), P.middleware, w.a, f.a, j.a, g.a, O.a, Object(_.a)(t), x.a, v.a, C.a],
					modifyInitialData: t => {
						let {
							initialData: s,
							browserHistory: a
						} = t;
						return s = E(e, s), s = L(s), s = N(s), s = I(e, s), s = F(s, a, q.a), s = H(s)
					},
					preRender: e => {
						let {
							browserHistory: t,
							routes: s,
							store: r
						} = e;
						return r.dispatch(Object(p.l)()), t.listen((e, t) => {
							const c = Object(d.a)(Object(a.e)(e), s);
							r.dispatch(Object(h.d)(e, t, c)), r.dispatch(Object(p.l)())
						}), {}
					},
					target: c,
					timingsSampleRate: 1
				})
			}
		},
		"./src/reddit/actions/chat/proxy.ts": function(e, t, s) {
			"use strict";
			s.r(t);
			var a = s("./node_modules/lodash/isEqual.js"),
				r = s.n(a),
				c = s("./src/chat/actions/message/unreadCount.ts"),
				i = s("./src/chat/actions/promo/constants.ts"),
				n = s("./src/chat/models/Promo/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts");
			Object(o.a)(i.a);
			const d = Object(o.a)(i.b);
			var u = s("./src/reddit/actions/chat/unreadCount.ts"),
				l = s("./src/reddit/selectors/chat.ts");
			t.default = (e, t) => s => {
				switch (s.type) {
					case c.a: {
						const a = s.payload,
							c = Object(l.d)(t());
						r()(a, c) || e(Object(u.c)(a))
					}
					break;
				case i.b:
					s.payload === n.a.SubredditChatFtux && e(d(n.a.SubredditChatFtux))
				}
			}
		}
	}
]);
//# sourceMappingURL=RedesignChat.21c2668f9649ac6d7ccc.js.map