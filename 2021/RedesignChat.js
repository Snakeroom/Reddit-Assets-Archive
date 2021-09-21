// https://www.redditstatic.com/desktop2x/RedesignChat.4b306129d23a82dbac98.js
// Retrieved at 9/21/2021, 7:30:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RedesignChat"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				c = 0;
			e.exports = function(e) {
				var t = ++c;
				return s(e) + t
			}
		},
		"./src/chat/components/PortalContainer/index.m.less": function(e, t, n) {
			e.exports = {
				BasePortalContainer: "yU9j1WJPhK5O625xcz254",
				basePortalContainer: "yU9j1WJPhK5O625xcz254",
				EmbedPortalContainer: "_1ScY1cHS-Vgv6eoU-LmjTi",
				embedPortalContainer: "_1ScY1cHS-Vgv6eoU-LmjTi",
				HiddenPortalContainer: "_3Txi0nOg7zVE4_CBYqUaRq",
				hiddenPortalContainer: "_3Txi0nOg7zVE4_CBYqUaRq",
				MinimizedRedesignPortalContainer: "_29tNelkz3zQzbXmYFOCncy",
				minimizedRedesignPortalContainer: "_29tNelkz3zQzbXmYFOCncy"
			}
		},
		"./src/chat/initializer.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return je
			}));
			var s = n("./node_modules/react/index.js"),
				c = n.n(s),
				r = n("./node_modules/history/esm/history.js"),
				a = n("./node_modules/js-cookie/src/js.cookie.js"),
				i = n.n(a),
				o = n("./node_modules/lodash/fromPairs.js"),
				d = n.n(o),
				u = n("./node_modules/redux-thunk/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				b = n("./src/lib/extractQueryParams/index.ts"),
				m = n("./src/lib/initializeClient/index.tsx"),
				h = n("./src/lib/matchRoute/index.ts"),
				f = n("./src/reddit/contexts/ApiContext.tsx"),
				g = n("./src/reduxMiddleware/apiContext.ts"),
				j = n("./src/reduxMiddleware/gqlContext.ts"),
				p = n("./src/chat/actions/apiRequestHeaders.ts"),
				x = n("./src/chat/actions/experiments/index.ts"),
				O = n("./src/chat/actions/notifications.ts"),
				C = n("./src/chat/actions/platform.ts"),
				E = n("./src/chat/actions/session.ts"),
				_ = n("./src/chat/actions/user.ts"),
				v = n("./node_modules/react-redux/es/index.js"),
				N = n("./src/lib/CSSVariableProvider/index.tsx"),
				y = n("./src/lib/lessComponent.tsx"),
				S = n("./src/chat/components/MinimizedPortalContainer/index.tsx"),
				w = n("./src/chat/components/Root/index.tsx"),
				T = n("./src/chat/constants/container.ts"),
				M = n("./src/chat/helpers/chatSelector.ts"),
				P = n("./src/chat/actions/container.ts"),
				R = n("./src/chat/components/PortalContainer/index.m.less"),
				A = n.n(R);
			const {
				embed: U,
				hidden: B
			} = T.b;

			function D(e) {
				return void 0 !== e ? e : -1
			}
			const I = y.a.wrapped(e => c.a.createElement("div", {
					className: e.className
				}, e.children), "BasePortalContainer", A.a),
				k = y.a.wrapped(e => {
					const t = Object(v.d)(),
						n = Object(s.useRef)(null),
						r = e => {
							var s;
							if (e.target instanceof Node && e.target) {
								const c = Boolean(null === (s = null == n ? void 0 : n.current) || void 0 === s ? void 0 : s.contains(e.target));
								t(Object(P.changeFocus)(c))
							}
						};
					return Object(s.useEffect)(() => (document.addEventListener("focusin", r), () => {
						document.removeEventListener("focusin", r)
					})), c.a.createElement("div", {
						ref: n,
						className: e.className,
						style: {
							width: `${D(U.width)}px`,
							height: `${D(U.height)}px`
						}
					}, e.children)
				}, "EmbedPortalContainer", A.a),
				q = y.a.wrapped(e => c.a.createElement("div", {
					className: e.className,
					style: {
						width: `${D(B.width)}px`,
						height: `${D(B.height)}px`
					}
				}, e.children), "HiddenPortalContainer", A.a),
				L = y.a.wrapped(S.a, "MinimizedRedesignPortalContainer", A.a),
				z = I,
				H = Object(M.a)({
					container: e => e && e.container && e.container.size
				});

			function F(e) {
				switch (e.container) {
					case T.a.EMBED:
						return c.a.createElement(k, null, e.children);
					case T.a.HIDDEN:
						return c.a.createElement(q, null, e.children);
					case T.a.FULL:
						return c.a.createElement(z, null, e.children);
					case T.a.MINIMIZED:
						return c.a.createElement(L, null);
					default:
						return c.a.createElement(k, null, e.children)
				}
			}
			var G = n("./src/chat/customMiddleware/channelsFilter.ts"),
				Q = n("./src/chat/customMiddleware/chatThemeKey.ts"),
				$ = n("./src/chat/customMiddleware/containerSize.ts"),
				K = n("./src/chat/customMiddleware/draftMessageText.ts"),
				Y = n("./src/chat/customMiddleware/iframeDispatcher.ts"),
				W = n("./src/chat/customMiddleware/lastSelectedChannel.ts"),
				V = n("./src/chat/customMiddleware/loggedOutPreferencesSync.ts"),
				J = n("./src/chat/customMiddleware/sendbirdToken.ts"),
				X = n("./src/chat/customMiddleware/title.ts"),
				Z = n("./src/chat/customMiddleware/tokenRefresher.ts"),
				ee = n("./src/chat/customMiddleware/tracking.ts"),
				te = n("./src/chat/customMiddleware/unreadMessageCount.ts"),
				ne = n("./src/chat/customMiddleware/uploadPrompt.ts"),
				se = n("./node_modules/lodash/uniqueId.js"),
				ce = n.n(se),
				re = n("./src/chat/constants/theme.ts"),
				ae = n("./src/chat/models/Theme/index.ts"),
				ie = n("./src/chat/reducers/meta/index.ts"),
				oe = n("./src/chat/reducers/platform/index.ts");
			const de = (e, t) => {
					var n;
					const {
						account: s,
						language: c,
						loid: r,
						prefs: a,
						reddaid: i,
						session: o,
						sessionTracker: d
					} = e.user;
					return t.user = {
						...t.user,
						account: s ? {
							created: s.created,
							inChat: s.inChat,
							id: s.id,
							isNSFW: s.isNSFW,
							name: s.displayText || "",
							prefNightmode: e.user.prefs.nightmode,
							profileImg: s.accountIcon,
							totalKarma: null === (n = s.karma) || void 0 === n ? void 0 : n.total
						} : null,
						language: c,
						loid: r,
						prefs: a,
						reddaid: i,
						sessionTracker: d,
						session: o && o.unsafeLoggedOut ? null : o
					}, t
				},
				ue = e => (e.meta = {
					...ie.a,
					isRedesign: !0
				}, e),
				le = e => {
					if (e.user && e.user.prefs && e.user.prefs.nightmode) {
						const {
							NIGHT: t,
							REDDIT: n
						} = re.b, {
							nightmode: s
						} = e.user.prefs, c = s ? t : n;
						e.themes = {
							current: ae.e[c],
							chatTheme: null,
							cached: {}
						}, e.user.prefs.globalTheme = c
					}
					return e
				},
				be = (e, t, n) => {
					const s = ce()(),
						c = Object(r.c)(t.location.pathname, void 0, s),
						a = Object(h.a)(Object(r.e)(c), n),
						i = Object(oe.b)(oe.a, Object(C.e)({
							location: c,
							action: "PUSH",
							routeMatch: a
						}));
					return e.platform = {
						...i
					}, e
				};
			var me = n("./src/chat/reducers/index.ts"),
				he = n("./src/chat/routes/index.ts");
			const fe = Object(g.a)({
					actionDispatchers: {
						reddaidReceived: _.r,
						loidReceived: _.q,
						sessionTrackerReceived: _.u
					},
					cookies: i.a,
					receivedActions: {
						headersReceived: p.a,
						loidReceived: _.e,
						reddaidReceived: _.f,
						sessionTrackerReceived: _.g,
						userAuthenticated: E.a,
						userLoggedOut: E.b,
						userReauthenticated: E.c
					},
					statsAppName: l.m.Chat
				}),
				ge = Object(j.a)(fe.apiContext);

			function je(e, t, n = "/chat/minimize") {
				const s = document.getElementById("2x-container"),
					a = document.createElement("div");
				return s.appendChild(a), Object(m.a)({
					reducerMap: me.a,
					routes: he.a,
					apiContext: fe.apiContext,
					gqlContext: ge.gqlContext,
					appFactory: (e, t) => c.a.createElement(f.a.Provider, {
						value: {
							apiContext: fe.apiContext,
							gqlContext: ge.gqlContext
						}
					}, function(e, t) {
						const n = Object(v.b)(H)(F);
						return c.a.createElement("div", null, Object(N.d)(c.a.createElement(n, null, Object(w.a)(e, t)), document.body))
					}(e, t)),
					appName: l.m.Chat,
					history: Object(r.d)({
						initialEntries: [n],
						initialIndex: 0
					}),
					customMiddleware: [u.a.withExtraArgument({
						routes: he.a,
						apiContext: fe.apiContext,
						gqlContext: ge.gqlContext
					}), fe.middleware, Z.a, J.a, Y.a, V.a, Object(ee.a)(t), $.a, Q.a, G.a, K.a, te.a, W.a, X.a, ne.a],
					modifyInitialData: ({
						initialData: t,
						browserHistory: n
					}) => (t = de(e, t), t = ue(t), t = le(t), t = be(t, n, he.a)),
					preRender: ({
						browserHistory: e,
						routes: t,
						store: n
					}) => {
						const s = d()([...Object(b.a)(Object(r.e)(location))]);
						n.dispatch(Object(x.d)(s)).then(() => {
							Object(Q.c)(n), Object(ne.b)(n)
						});
						return n.dispatch(Object(_.l)()), e.listen((e, s) => {
							const c = Object(h.a)(Object(r.e)(e), t);
							n.dispatch(Object(C.d)(e, s, c)), n.dispatch(Object(_.l)())
						}), "undefined" != typeof window && window.addEventListener("load", async () => {
							n.dispatch(Object(O.a)(!1, !1))
						}), {}
					},
					target: a,
					timingsSampleRate: 1
				})
			}
		},
		"./src/reddit/actions/appBadgeIndicators/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			}));
			const s = "APP_BADGES__PENDING",
				c = "APP_BADGES__LOADED",
				r = "APP_BADGES__UPDATED",
				a = "APP_BADGES__FAILED"
		},
		"./src/reddit/actions/appBadgeIndicators/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "b", (function() {
				return j
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				r = n("./src/reddit/actions/tabBadging.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/BadgeIndicators.json"),
				o = e => Object(a.a)(e, {
					...i
				}),
				d = n("./src/reddit/models/Badge/index.ts");
			const u = Object(s.a)(c.c),
				l = Object(s.a)(c.b),
				b = Object(s.a)(c.d),
				m = Object(s.a)(c.a),
				h = ({
					key: e,
					count: t
				}) => ({
					[e]: {
						count: t,
						style: d.b.Numbered
					}
				}),
				f = (e, t) => ({
					[d.c.ChatUnreadMessages]: {
						count: e,
						style: d.b.Numbered
					},
					[d.c.ChatHasNewMessages]: {
						isShowing: t,
						style: d.b.Filled
					}
				}),
				g = () => async (e, t, {
					gqlContext: n
				}) => {
					e(u());
					const s = await async function(e) {
						const t = await o(e());
						if (t.ok && t.body) {
							return function(e) {
								var t;
								const n = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.badgeIndicators;
								if (n) return {
									...n,
									chatUnreadMessages: {
										count: (Number(n.chatUnreadMessages.count) || 0) + (Number(n.chatUnacceptedInvites.count) || 0) + (Number(n.chatUnreadMentions.count) || 0)
									}
								}
							}(t.body)
						}
					}(n);
					s ? (e(l(s)), e(Object(r.d)())) : e(m())
				};
			const j = () => async e => {
				const t = h({
					key: d.c.MessageTab,
					count: 0
				});
				e(b(t))
			}
		},
		"./src/reddit/actions/chat/proxy.ts": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/lodash/isEqual.js"),
				c = n.n(s),
				r = n("./src/chat/actions/message/unreadCount.ts"),
				a = n("./src/chat/actions/surveyTrigger/index.ts"),
				i = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				o = n("./src/reddit/actions/chat/unreadCount.ts"),
				d = n("./src/reddit/actions/survey/index.ts"),
				u = n("./src/reddit/actions/tabBadging.ts"),
				l = n("./src/reddit/selectors/chat.ts"),
				b = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts");
			t.default = (e, t) => n => {
				const s = Object(b.a)(t());
				switch (n.type) {
					case r.a: {
						const r = n.payload,
							a = s ? Object(u.b)(t()) : Object(l.b)(t());
						if (!c()(r, a)) {
							const t = Object(i.d)(r.unreadMessages, r.hasNewMessages);
							e(s ? Object(i.a)(t) : Object(o.c)(r)), e(Object(u.d)())
						}
					}
					break;
				case a.a:
					e(Object(d.e)())
				}
			}
		},
		"./src/reddit/actions/chat/unreadCount.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return C
			}));
			var s, c = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/chat/actions/message/unreadCount.ts"),
				i = n("./src/chat/endpoints/sendbird/index.ts"),
				o = n("./src/reddit/actions/tabBadging.ts"),
				d = n("./src/reddit/selectors/chat.ts"),
				u = n("./src/reddit/selectors/user.ts");
			! function(e) {
				e.SYNC = "UNREAD_COUNT__SYNC", e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(s || (s = {}));
			const {
				SYNC: l,
				REQUEST_FAILED: b,
				REQUEST_PENDING: m,
				REQUEST_SUCCESS: h
			} = s, f = Object(r.a)(l), g = Object(r.a)(b), j = Object(r.a)(m), p = Object(r.a)(h);
			let x;
			const O = 5 * c.jb,
				C = () => async (e, t, {
					apiContext: n
				}) => {
					const s = t();
					if (!Object(u.K)(s) || !Object(d.d)(s)) return clearTimeout(x);
					x || e((() => async (e, t, {
						gqlContext: n
					}) => {
						const s = t(),
							{
								session: c
							} = s.user;
						if (c && Object(u.K)(s) && Object(d.d)(s)) {
							e(j());
							const t = await Object(i.g)(n());
							t && t.ok && Object(i.j)(t.body) ? (e(p({
								...Object(a.b)(t.body.data)
							})), e(Object(o.d)())) : e(g({
								error: t.error
							}))
						}
					})()), x = setTimeout(() => {
						e(C())
					}, O)
				}
		},
		"./src/reddit/actions/inbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const c = "INBOX__COUNT_UPDATE",
				r = Object(s.a)(c)
		},
		"./src/reddit/actions/tabBadging.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "f", (function() {
				return v
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/fastdom/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/chat/unreadCount.ts"),
				i = n("./src/reddit/actions/inbox.ts"),
				o = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				d = n("./src/reddit/helpers/tabBadging/index.ts"),
				u = n("./src/reddit/models/Badge/index.ts"),
				l = n("./src/reddit/selectors/appBadges.ts"),
				b = n("./src/reddit/selectors/chat.ts"),
				m = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				h = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/actions/appBadgeIndicators/index.ts");
			const j = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				p = Object(r.a)(j),
				x = (e, t) => {
					e <= 0 ? c.a.write(() => {
						Object(d.b)(!1), window.document.title = t
					}) : c.a.write(() => {
						Object(d.b)(), window.document.title = `(${e}) ${t}`
					})
				},
				O = Object(s.c)({
					basicChannelCount: l.e,
					subredditChannelCount: l.d,
					subredditMentionCount: l.c
				}),
				C = e => {
					const t = Object(m.a)(e);
					return {
						inboxCount: t ? Object(l.h)(e) : Object(f.F)(e) || 0,
						basicChannelCount: t ? Object(l.e)(e) : Object(b.a)(e) || 0
					}
				},
				E = () => async (e, t) => {
					const n = t(),
						s = Object(o.f)(n, {}),
						c = Object(m.a)(n),
						r = Object(f.J)(n) || Object(f.K)(n),
						a = Object(h.g)(n);
					let i = 0;
					r && s && (i = c ? a ? Object(l.i)(n) : Object(l.j)(n) : (e => {
						const {
							inboxCount: t,
							basicChannelCount: n
						} = C(e);
						return t + n
					})(n), x(i, s), e(p({
						hasUnreadMessages: !!i
					})))
				}, _ = () => async (e, t) => {
					{
						e(E());
						const n = C(t());
						Object(d.c)(n)
					}
				}, v = e => async (t, n) => {
					const s = n();
					if (Object(m.a)(s)) {
						const n = Object(l.e)(s),
							c = Object(l.h)(s),
							{
								basicChannelCount: r,
								inboxCount: a
							} = e;
						if (n !== r) {
							const e = Object(g.e)({
								count: r,
								key: u.c.ChatTab
							});
							t(Object(g.a)(e))
						}
						if (a && a !== c) {
							const e = Object(g.e)({
								count: a,
								key: u.c.MessageTab
							});
							t(Object(g.a)(e))
						}(n !== r || a && a !== c) && t(E())
					} else {
						const n = Object(b.a)(s),
							c = Object(b.b)(s),
							r = Object(f.F)(s),
							{
								basicChannelCount: o,
								inboxCount: d
							} = e;
						n !== o && t(Object(a.b)({
							...c
						})), d && d !== r && t(Object(i.b)({
							inboxCount: d
						})), (n !== o || d && d !== r) && t(E())
					}
				}
		},
		"./src/reddit/helpers/tabBadging/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return l
			}));
			var s = n("./src/config.ts");
			const c = `${s.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				r = `${s.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				a = `${s.a.assetPath}/img/favicon/favicon-32x32.png`,
				i = `${s.a.assetPath}/img/favicon/favicon-16x16.png`,
				o = "badgeCountSync",
				d = e => window.document.querySelector(`link[href="${e}"]`),
				u = (e = !0) => {
					const t = d(e ? a : c),
						n = d(e ? i : r);
					t && n && (t.href = e ? c : a, n.href = e ? r : i)
				},
				l = e => {
					navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: o,
						badgeCounts: e
					})
				}
		},
		"./src/reddit/models/Badge/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, c, r, a = n("./src/config.ts");

			function i(e) {
				return "userId" in e
			}

			function o(e) {
				return !(!e.extra || !e.extra.membership) && !!e.extra.membership.included
			}

			function d(e, t, n) {
				const s = n.media[0],
					c = Object.keys(s);
				if (s["0x0"]) return s["0x0"];
				let r = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (c.forEach(n => {
						const c = s[n],
							[a, i] = n.split("x").map(e => parseInt(e));
						(a < r.width && a >= e || i < r.height && i >= t) && (r = {
							height: i,
							width: a,
							url: c
						})
					}), !r.url && c.length) {
					const e = Object.keys(s)[0],
						t = s[e],
						[n, c] = e.split("x").map(e => parseInt(e));
					r = {
						height: c,
						width: n,
						url: t
					}
				}
				return r.url
			}

			function u(e) {
				return e.startsWith("https") ? e : `${a.a.assetPath}/${e}`
			}

			function l(e, t, n) {
				const s = d(e, t, n),
					c = d(2 * e, 2 * t, n);
				return {
					url: u(s),
					url2x: u(c)
				}
			}! function(e) {
				e.First = "p1", e.Second = "p2"
			}(s || (s = {})),
			function(e) {
				e.ActivityTab = "activityTab", e.ChatTab = "chatTab", e.MessageTab = "messageTab", e.ChatHasNewMessages = "chatHasNewMessages", e.ChatUnreadMessages = "chatUnreadMessages"
			}(c || (c = {})),
			function(e) {
				e.Numbered = "NUMBERED", e.Filled = "FILLED"
			}(r || (r = {}))
		},
		"./src/reddit/selectors/appBadges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "i", (function() {
				return f
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/selectors/chat.ts"),
				r = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts");
			const a = e => e.appBadges.badges,
				i = Object(s.a)(r.a, a, c.a, (e, t, n) => {
					var s;
					return e ? (null === (s = t.chatUnreadMessages) || void 0 === s ? void 0 : s.count) || 0 : n
				}),
				o = Object(s.a)(a, e => e && e.chatRooms && e.chatRooms.count || 0),
				d = Object(s.a)(a, e => e && e.chatRoomMentions && e.chatRoomMentions.count || 0),
				u = Object(s.a)(r.a, i, a, c.b, (e, t, n, s) => {
					var c;
					if (0 === t) {
						if (e && (null === (c = n.chatHasNewMessages) || void 0 === c ? void 0 : c.isShowing)) return !0;
						if (!e && s.hasNewMessages) return !0
					}
					return !1
				}),
				l = Object(s.a)(a, e => e && e.activityTab && e.activityTab.count || 0),
				b = Object(s.a)(a, e => e && e.messageTab && e.messageTab.count || 0),
				m = Object(s.a)(l, b, (e, t) => e + t),
				h = Object(s.a)(i, b, (e, t) => e + t),
				f = Object(s.a)(i, m, (e, t) => e + t)
		},
		"./src/reddit/selectors/chat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "c", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				r = n("./src/reddit/selectors/moderatorPermissions.ts");
			const a = e => e.chat.unread.count,
				i = Object(s.a)(a, e => e.unreadMessages),
				o = e => !(e.chat.isInited || e.chat.unread.api.pending),
				d = (e, t) => {
					const {
						chatConfig: n
					} = c.c;
					return Object(r.b)(n)(e, t)
				}
		},
		"./src/reddit/selectors/experiments/inboxAppBadgingGql.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const o = Object(s.a)(e => Object(r.c)(e, {
					experimentName: c.Kc,
					experimentEligibilitySelector: a.e
				}), i.a),
				d = Object(s.a)(o, e => e === c.Nc.Enabled)
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "i", (function() {
				return v
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const o = Object(s.a)(e => Object(r.c)(e, {
					experimentName: c.ib,
					experimentEligibilitySelector: a.e
				}), i.a),
				d = Object(s.a)(o, e => e === c.Tc.Enabled),
				u = Object(s.a)(e => Object(r.c)(e, {
					experimentName: c.Mc,
					experimentEligibilitySelector: a.e
				}), i.a),
				l = Object(s.a)(d, u, (e, t) => e && t === c.Sc.Enabled),
				b = Object(s.a)(e => Object(r.c)(e, {
					experimentName: c.lb,
					experimentEligibilitySelector: a.e
				}), i.a),
				m = Object(s.a)(d, b, (e, t) => e && t === c.yb.Enabled),
				h = Object(s.a)(e => Object(r.c)(e, {
					experimentName: c.fb,
					experimentEligibilitySelector: a.e
				}), i.a),
				f = Object(s.a)(h, e => e === c.Pc.Banner_1st_time),
				g = Object(s.a)(h, e => e === c.Pc.Tooltip_persist),
				j = Object(s.a)(h, e => e === c.Pc.Tooltip_1st_time),
				p = Object(s.a)(e => Object(r.c)(e, {
					experimentName: c.gb,
					experimentEligibilitySelector: a.e
				}), i.a),
				x = Object(s.a)(p, e => e === c.Qc.ContinuousScroll),
				O = Object(s.a)(e => Object(r.c)(e, {
					experimentName: c.Y,
					experimentEligibilitySelector: a.e
				}), i.a),
				C = Object(s.a)(O, e => e === c.Hb.Banner1stTime),
				E = Object(s.a)(O, e => e === c.Hb.BannerPersist),
				_ = Object(s.a)(e => Object(r.c)(e, {
					experimentName: c.hb,
					experimentEligibilitySelector: a.e
				}), i.a),
				v = Object(s.a)(_, e => e === c.Rc.Enabled)
		},
		"./src/redditGQL/operations/BadgeIndicators.json": function(e) {
			e.exports = JSON.parse('{"id":"9d105ce5d71a"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RedesignChat.4b306129d23a82dbac98.js.map