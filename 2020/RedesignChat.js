// https://www.redditstatic.com/desktop2x/RedesignChat.f914059b246ab68c0700.js
// Retrieved at 3/4/2020, 10:00:07 PM by Reddit Dataminer v1.0.0
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
			s.r(t);
			var a = s("./node_modules/history/esm/history.js"),
				r = s("./node_modules/js-cookie/src/js.cookie.js"),
				c = s.n(r),
				i = s("./node_modules/redux-thunk/lib/index.js"),
				n = s.n(i),
				o = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/initializeClient/index.tsx"),
				u = s("./src/lib/matchRoute/index.ts"),
				l = s("./src/reduxMiddleware/apiContext.ts"),
				h = s("./src/chat/actions/apiRequestHeaders.ts"),
				m = s("./src/chat/actions/platform.ts"),
				p = s("./src/chat/actions/session.ts"),
				b = s("./src/chat/actions/user.ts"),
				x = s("./src/chat/components/PortalContainer/index.tsx"),
				g = s("./src/chat/customMiddleware/containerSize.ts"),
				j = s("./src/chat/customMiddleware/heartbeat.ts"),
				O = s("./src/chat/customMiddleware/iframeDispatcher.ts"),
				f = s("./src/chat/customMiddleware/loggedOutPreferencesSync.ts"),
				C = s("./src/chat/customMiddleware/sendbirdToken.ts"),
				w = s("./src/chat/customMiddleware/title.ts"),
				_ = s("./src/chat/customMiddleware/tokenRefresher.ts"),
				v = s("./src/chat/customMiddleware/tracking.ts"),
				R = s("./src/chat/customMiddleware/unreadMessageCount.ts"),
				k = s("./node_modules/lodash/uniqueId.js"),
				y = s.n(k),
				M = s("./src/chat/constants/theme.ts"),
				S = s("./src/chat/models/Theme/index.ts"),
				D = s("./src/chat/reducers/meta/index.ts"),
				A = s("./src/chat/reducers/platform/index.ts"),
				E = s("./src/chat/reducers/promos/index.ts");
			const T = (e, t) => (e.chat && e.chat.promos && (t.promos = Object.assign({}, E.a, e.chat.promos)), t),
				I = (e, t) => {
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
				L = e => (e.meta = Object.assign({}, D.a, {
					isRedesign: !0
				}), e),
				N = e => {
					if (e.user && e.user.prefs && e.user.prefs.nightmode) {
						const {
							NIGHT: t,
							REDDIT: s
						} = M.b, {
							nightmode: a
						} = e.user.prefs, r = a ? t : s;
						e.themes = {
							current: S.a[r],
							cached: {}
						}, e.user.prefs.globalTheme = r
					}
					return e
				},
				F = (e, t, s) => {
					const r = y()(),
						c = Object(a.c)(t.location.pathname, void 0, r),
						i = Object(u.a)(Object(a.e)(c), s),
						n = Object(A.b)(A.a, Object(m.e)({
							location: c,
							action: "PUSH",
							routeMatch: i
						}));
					return e.platform = Object.assign({}, n), e
				};
			var H = s("./src/chat/reducers/index.ts"),
				K = s("./src/chat/routes/index.ts");
			s.d(t, "default", (function() {
				return z
			}));
			const q = Object(l.a)({
				actionDispatchers: {
					reddaidReceived: b.r,
					loidReceived: b.q,
					sessionTrackerReceived: b.u
				},
				cookies: c.a,
				receivedActions: {
					headersReceived: h.a,
					loidReceived: b.e,
					reddaidReceived: b.f,
					sessionTrackerReceived: b.g,
					userAuthenticated: p.a,
					userLoggedOut: p.b,
					userReauthenticated: p.c
				},
				statsAppName: o.l.Chat
			});

			function z(e, t) {
				let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/chat/minimize";
				const r = document.getElementById("2x-container"),
					c = document.createElement("div");
				return r.appendChild(c), Object(d.a)({
					reducers: H.a,
					routes: K.a,
					apiContext: q.apiContext,
					appFactory: x.a,
					appName: o.l.Chat,
					history: Object(a.d)({
						initialEntries: [s],
						initialIndex: 0
					}),
					customMiddleware: [n.a.withExtraArgument({
						routes: K.a,
						apiContext: q.apiContext
					}), q.middleware, _.a, C.a, O.a, j.a, f.a, Object(v.a)(t), g.a, R.a, w.a],
					modifyInitialData: t => {
						let {
							initialData: s,
							browserHistory: a
						} = t;
						return s = I(e, s), s = L(s), s = N(s), s = T(e, s), s = F(s, a, K.a)
					},
					preRender: e => {
						let {
							browserHistory: t,
							routes: s,
							store: r
						} = e;
						return t.listen((e, t) => {
							const c = Object(u.a)(Object(a.e)(e), s);
							r.dispatch(Object(m.d)(e, t, c)), r.dispatch(Object(b.l)())
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
//# sourceMappingURL=RedesignChat.f914059b246ab68c0700.js.map