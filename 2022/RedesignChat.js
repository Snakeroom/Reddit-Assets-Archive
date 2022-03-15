// https://www.redditstatic.com/desktop2x/RedesignChat.fe3b9db61231f112e4d8.js
// Retrieved at 3/15/2022, 4:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RedesignChat"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				a = 0;
			e.exports = function(e) {
				var t = ++a;
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
				return xe
			}));
			var s = n("./node_modules/react/index.js"),
				a = n.n(s),
				c = n("./node_modules/history/esm/history.js"),
				r = n("./node_modules/js-cookie/src/js.cookie.js"),
				i = n.n(r),
				o = n("./node_modules/redux-thunk/es/index.js"),
				d = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/initializeClient/index.tsx"),
				l = n("./src/lib/matchRoute/index.ts"),
				b = n("./src/reddit/contexts/ApiContext.tsx"),
				m = n("./src/reduxMiddleware/apiContext.ts"),
				h = n("./src/reduxMiddleware/gqlContext.ts"),
				g = n("./src/chat/actions/apiRequestHeaders.ts"),
				f = n("./src/chat/actions/notifications.ts"),
				p = n("./src/chat/actions/platform.ts"),
				x = n("./src/chat/actions/session.ts"),
				j = n("./src/chat/actions/user.ts"),
				O = n("./node_modules/react-redux/es/index.js"),
				v = n("./src/lib/CSSVariableProvider/index.tsx"),
				C = n("./src/lib/lessComponent.tsx"),
				w = n("./src/chat/components/MinimizedPortalContainer/index.tsx"),
				E = n("./src/chat/components/Root/index.tsx"),
				y = n("./src/chat/constants/container.ts"),
				M = n("./src/chat/helpers/chatSelector.ts"),
				_ = n("./src/chat/actions/container.ts"),
				N = n("./src/chat/components/PortalContainer/index.m.less"),
				P = n.n(N);
			const {
				embed: S,
				hidden: B
			} = y.b;

			function T(e) {
				return void 0 !== e ? e : -1
			}
			const A = C.a.wrapped(e => a.a.createElement("div", {
					className: e.className
				}, e.children), "BasePortalContainer", P.a),
				R = C.a.wrapped(e => {
					const t = Object(O.d)(),
						n = Object(s.useRef)(null),
						c = e => {
							var s;
							if (e.target instanceof Node && e.target) {
								const a = Boolean(null === (s = null == n ? void 0 : n.current) || void 0 === s ? void 0 : s.contains(e.target));
								t(Object(_.changeFocus)(a))
							}
						};
					return Object(s.useEffect)(() => (document.addEventListener("focusin", c), () => {
						document.removeEventListener("focusin", c)
					})), a.a.createElement("div", {
						ref: n,
						className: e.className,
						style: {
							width: `${T(S.width)}px`,
							height: `${T(S.height)}px`
						}
					}, e.children)
				}, "EmbedPortalContainer", P.a),
				D = C.a.wrapped(e => a.a.createElement("div", {
					className: e.className,
					style: {
						width: `${T(B.width)}px`,
						height: `${T(B.height)}px`
					}
				}, e.children), "HiddenPortalContainer", P.a),
				k = C.a.wrapped(w.a, "MinimizedRedesignPortalContainer", P.a),
				I = A,
				L = Object(M.a)({
					container: e => e && e.container && e.container.size
				});

			function U(e) {
				switch (e.container) {
					case y.a.EMBED:
						return a.a.createElement(R, null, e.children);
					case y.a.HIDDEN:
						return a.a.createElement(D, null, e.children);
					case y.a.FULL:
						return a.a.createElement(I, null, e.children);
					case y.a.MINIMIZED:
						return a.a.createElement(k, null);
					default:
						return a.a.createElement(R, null, e.children)
				}
			}
			var q = n("./src/chat/customMiddleware/channelsFilter.ts"),
				z = n("./src/chat/customMiddleware/chatThemeKey.ts"),
				H = n("./src/chat/customMiddleware/containerSize.ts"),
				F = n("./src/chat/customMiddleware/draftMessageText.ts"),
				$ = n("./src/chat/customMiddleware/iframeDispatcher.ts"),
				G = n("./src/chat/customMiddleware/inviteLinkSettings.ts"),
				W = n("./src/chat/customMiddleware/lastSelectedChannel.ts"),
				K = n("./src/chat/customMiddleware/loggedOutPreferencesSync.ts"),
				V = n("./src/chat/customMiddleware/sendbirdToken.ts"),
				Y = n("./src/chat/customMiddleware/settings.ts"),
				Q = n("./src/chat/customMiddleware/title.ts"),
				J = n("./src/chat/customMiddleware/tokenRefresher.ts"),
				X = n("./src/chat/customMiddleware/tracking.ts"),
				Z = n("./src/chat/customMiddleware/unreadMessageCount.ts"),
				ee = n("./src/chat/customMiddleware/uploadPrompt.ts"),
				te = n("./node_modules/lodash/uniqueId.js"),
				ne = n.n(te),
				se = n("./src/chat/constants/theme.ts"),
				ae = n("./src/chat/models/Theme/index.ts"),
				ce = n("./src/chat/reducers/experiments/helpers.ts"),
				re = n("./src/chat/reducers/meta/index.ts"),
				ie = n("./src/chat/reducers/platform/index.ts"),
				oe = n("./src/lib/env/index.ts");
			const de = (e, t) => {
					var n;
					const {
						account: s,
						language: a,
						loid: c,
						prefs: r,
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
						language: a,
						loid: c,
						prefs: {
							...r,
							invitePolicy: e.user.chatSettings.invitePolicy
						},
						reddaid: i,
						sessionTracker: d,
						session: o && o.unsafeLoggedOut ? null : o
					}, t
				},
				ue = e => (e.meta = {
					...re.a,
					isRedesign: !0
				}, e),
				le = e => {
					if (e.user && e.user.prefs && e.user.prefs.nightmode) {
						const {
							NIGHT: t,
							REDDIT: n
						} = se.b, {
							nightmode: s
						} = e.user.prefs, a = s ? t : n;
						e.themes = {
							current: ae.e[a],
							chatTheme: null,
							cached: {}
						}, e.user.prefs.globalTheme = a
					}
					return e
				},
				be = (e, t, n) => {
					const s = ne()(),
						a = Object(c.c)(t.location, void 0, s),
						r = Object(l.a)(Object(c.e)(a), n),
						i = Object(ie.b)(ie.a, Object(p.e)({
							location: a,
							action: "PUSH",
							routeMatch: r
						}));
					return e.platform = {
						...i
					}, e
				},
				me = (e, t) => {
					var n, s, a, c, r;
					const i = {},
						o = null === (n = e.platform.currentPage) || void 0 === n ? void 0 : n.queryParams;
					for (const u in null === (a = null === (s = null == e ? void 0 : e.user) || void 0 === s ? void 0 : s.experiments) || void 0 === a ? void 0 : a.byName) i[u] = {
						...null === (r = null === (c = null == e ? void 0 : e.user) || void 0 === c ? void 0 : c.experiments) || void 0 === r ? void 0 : r.byName[u],
						isOverride: !1
					};
					const d = Object(ce.a)(i, o);
					return t.experiments = {
						models: {
							...i,
							...Object(oe.b)() ? {} : d
						},
						api: {
							isPending: !1,
							errors: []
						}
					}, t
				};
			var he = n("./src/chat/reducers/index.ts"),
				ge = n("./src/chat/routes/index.ts");
			const fe = Object(m.a)({
					actionDispatchers: {
						reddaidReceived: j.r,
						loidReceived: j.q,
						sessionTrackerReceived: j.u
					},
					cookies: i.a,
					receivedActions: {
						headersReceived: g.a,
						loidReceived: j.e,
						reddaidReceived: j.f,
						sessionTrackerReceived: j.g,
						userAuthenticated: x.a,
						userLoggedOut: x.b,
						userReauthenticated: x.c
					},
					statsAppName: d.n.Chat
				}),
				pe = Object(h.a)(fe.apiContext);

			function xe(e, t, n = "/chat/minimize") {
				const s = document.getElementById("2x-container"),
					r = document.createElement("div");
				return s.appendChild(r), Object(u.a)({
					reducerMap: he.a,
					routes: ge.a,
					apiContext: fe.apiContext,
					gqlContext: pe.gqlContext,
					appFactory: (e, t) => a.a.createElement(b.a.Provider, {
						value: {
							apiContext: fe.apiContext,
							gqlContext: pe.gqlContext
						}
					}, function(e, t) {
						const n = Object(O.b)(L)(U);
						return a.a.createElement("div", null, Object(v.d)(a.a.createElement(n, null, Object(E.a)(e, t)), document.body))
					}(e, t)),
					appName: d.n.Chat,
					history: Object(c.d)({
						initialEntries: [n],
						initialIndex: 0
					}),
					customMiddleware: [o.a.withExtraArgument({
						routes: ge.a,
						apiContext: fe.apiContext,
						gqlContext: pe.gqlContext
					}), fe.middleware, J.a, Y.a, V.a, $.a, K.a, Object(X.a)(t), H.a, z.a, q.a, F.a, Z.a, W.a, Q.a, ee.a, G.a],
					modifyInitialData: ({
						initialData: t,
						browserHistory: n
					}) => (t = de(e, t), t = ue(t), t = le(t), t = be(t, n, ge.a), t = me(e, t)),
					preRender: ({
						browserHistory: e,
						routes: t,
						store: n
					}) => {
						return n.dispatch(Object(j.l)()), e.listen((e, s) => {
							const a = Object(l.a)(Object(c.e)(e), t);
							n.dispatch(Object(p.d)(e, s, a)), n.dispatch(Object(j.l)())
						}), "undefined" != typeof window && window.addEventListener("load", async () => {
							n.dispatch(Object(f.a)(!1, !1))
						}), {}
					},
					target: r,
					timingsSampleRate: 1
				})
			}
		},
		"./src/reddit/actions/appBadgeIndicators/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = "APP_BADGES__PENDING",
				a = "APP_BADGES__LOADED",
				c = "APP_BADGES__UPDATED",
				r = "APP_BADGES__FAILED"
		},
		"./src/reddit/actions/appBadgeIndicators/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "b", (function() {
				return p
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				c = n("./src/reddit/actions/tabBadging.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/BadgeIndicators.json"),
				o = e => Object(r.a)(e, {
					...i
				}),
				d = n("./src/reddit/models/Badge/index.ts");
			const u = Object(s.a)(a.c),
				l = Object(s.a)(a.b),
				b = Object(s.a)(a.d),
				m = Object(s.a)(a.a),
				h = ({
					key: e,
					count: t
				}) => ({
					[e]: {
						count: t,
						style: d.b.Numbered
					}
				}),
				g = (e, t) => ({
					[d.c.ChatUnreadMessages]: {
						count: e,
						style: d.b.Numbered
					},
					[d.c.ChatHasNewMessages]: {
						isShowing: t,
						style: d.b.Filled
					}
				}),
				f = () => async (e, t, {
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
					s ? (e(l(s)), e(Object(c.d)())) : e(m())
				};
			const p = () => async e => {
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
				a = n.n(s),
				c = n("./src/chat/actions/message/unreadCount.ts"),
				r = n("./src/chat/actions/surveyTrigger/index.ts"),
				i = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				o = n("./src/reddit/actions/survey/index.ts"),
				d = n("./src/reddit/actions/tabBadging.ts");
			t.default = (e, t) => n => {
				switch (n.type) {
					case c.a: {
						const s = n.payload,
							c = Object(d.b)(t());
						if (!a()(s, c)) {
							const t = Object(i.d)(s.unreadMessages, s.hasNewMessages);
							e(Object(i.a)(t)), e(Object(d.d)())
						}
					}
					break;
				case r.a:
					e(Object(o.h)())
				}
			}
		},
		"./src/reddit/actions/tabBadging.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "f", (function() {
				return j
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/fastdom/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				i = n("./src/reddit/helpers/tabBadging/index.ts"),
				o = n("./src/reddit/models/Badge/index.ts"),
				d = n("./src/reddit/selectors/appBadges.ts"),
				u = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				l = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/actions/appBadgeIndicators/index.ts");
			const m = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				h = Object(c.a)(m),
				g = (e, t) => {
					e <= 0 ? a.a.write(() => {
						Object(i.b)(!1), window.document.title = t
					}) : a.a.write(() => {
						Object(i.b)(), window.document.title = `(${e}) ${t}`
					})
				},
				f = Object(s.c)({
					basicChannelCount: d.e,
					subredditChannelCount: d.d,
					subredditMentionCount: d.c
				}),
				p = () => async (e, t) => {
					const n = t(),
						s = Object(r.f)(n, {}),
						a = Object(l.N)(n) || Object(l.O)(n),
						c = Object(u.b)(n);
					if (!a || !s) return;
					const i = c ? Object(d.i)(n) : Object(d.j)(n);
					g(i, s), e(h({
						hasUnreadMessages: !!i
					}))
				}, x = () => async (e, t) => {
					{
						e(p());
						const n = (e => ({
							inboxCount: Object(d.h)(e),
							basicChannelCount: Object(d.e)(e)
						}))(t());
						Object(i.c)(n)
					}
				}, j = e => async (t, n) => {
					const s = n(),
						a = Object(d.e)(s),
						c = Object(d.h)(s),
						{
							basicChannelCount: r,
							inboxCount: i
						} = e;
					if (a !== r) {
						const e = Object(b.e)({
							count: r,
							key: o.c.ChatTab
						});
						t(Object(b.a)(e))
					}
					if (i && i !== c) {
						const e = Object(b.e)({
							count: i,
							key: o.c.MessageTab
						});
						t(Object(b.a)(e))
					}(a !== r || i && i !== c) && t(p())
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
			const a = `${s.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				c = `${s.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				r = `${s.a.assetPath}/img/favicon/favicon-32x32.png`,
				i = `${s.a.assetPath}/img/favicon/favicon-16x16.png`,
				o = "badgeCountSync",
				d = e => window.document.querySelector(`link[href="${e}"]`),
				u = (e = !0) => {
					const t = d(e ? r : a),
						n = d(e ? i : c);
					t && n && (t.href = e ? a : r, n.href = e ? c : i)
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
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, a, c, r = n("./src/config.ts");

			function i(e) {
				return "userId" in e
			}

			function o(e) {
				return !(!e.extra || !e.extra.membership) && !!e.extra.membership.included
			}

			function d(e, t, n) {
				const s = n.media[0],
					a = Object.keys(s);
				if (s["0x0"]) return s["0x0"];
				let c = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (a.forEach(n => {
						const a = s[n],
							[r, i] = n.split("x").map(e => parseInt(e));
						(r < c.width && r >= e || i < c.height && i >= t) && (c = {
							height: i,
							width: r,
							url: a
						})
					}), !c.url && a.length) {
					const e = Object.keys(s)[0],
						t = s[e],
						[n, a] = e.split("x").map(e => parseInt(e));
					c = {
						height: a,
						width: n,
						url: t
					}
				}
				return c.url
			}

			function u(e) {
				return e.startsWith("https") ? e : `${r.a.assetPath}/${e}`
			}

			function l(e, t, n) {
				const s = d(e, t, n),
					a = d(2 * e, 2 * t, n);
				return {
					url: u(s),
					url2x: u(a)
				}
			}! function(e) {
				e.First = "p1", e.Second = "p2"
			}(s || (s = {})),
			function(e) {
				e.ActivityTab = "activityTab", e.ChatTab = "chatTab", e.MessageTab = "messageTab", e.ChatHasNewMessages = "chatHasNewMessages", e.ChatUnreadMessages = "chatUnreadMessages"
			}(a || (a = {})),
			function(e) {
				e.Numbered = "NUMBERED", e.Filled = "FILLED"
			}(c || (c = {}))
		},
		"./src/reddit/selectors/appBadges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "i", (function() {
				return m
			}));
			var s = n("./node_modules/reselect/es/index.js");
			const a = e => e.appBadges.badges,
				c = Object(s.a)(a, e => {
					var t;
					return (null === (t = e.chatUnreadMessages) || void 0 === t ? void 0 : t.count) || 0
				}),
				r = Object(s.a)(a, e => e && e.chatRooms && e.chatRooms.count || 0),
				i = Object(s.a)(a, e => e && e.chatRoomMentions && e.chatRoomMentions.count || 0),
				o = Object(s.a)(c, a, (e, t) => {
					var n;
					return 0 === e && !!(null === (n = t.chatHasNewMessages) || void 0 === n ? void 0 : n.isShowing)
				}),
				d = Object(s.a)(a, e => e && e.activityTab && e.activityTab.count || 0),
				u = Object(s.a)(a, e => e && e.messageTab && e.messageTab.count || 0),
				l = Object(s.a)(d, u, (e, t) => e + t),
				b = Object(s.a)(c, u, (e, t) => e + t),
				m = Object(s.a)(c, l, (e, t) => e + t)
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return j
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/constants/experiments.ts"),
				c = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const o = Object(s.a)(e => Object(c.c)(e, {
					experimentName: a.xb,
					experimentEligibilitySelector: r.e
				}), i.a),
				d = Object(s.a)(o, e => e === a.Bd.Enabled),
				u = Object(s.a)(e => Object(c.c)(e, {
					experimentName: a.wd,
					experimentEligibilitySelector: r.e
				}), i.a),
				l = Object(s.a)(d, u, (e, t) => e && t === a.Ad.Enabled),
				b = Object(s.a)(e => Object(c.c)(e, {
					experimentName: a.Kb,
					experimentEligibilitySelector: r.e
				}), i.a),
				m = Object(s.a)(d, b, (e, t) => e && t === a.dc.Enabled),
				h = Object(s.a)(e => Object(c.c)(e, {
					experimentName: a.vb,
					experimentEligibilitySelector: r.e
				}), i.a),
				g = Object(s.a)(h, e => e === a.yd.ContinuousScroll),
				f = Object(s.a)(e => Object(c.c)(e, {
					experimentName: a.wb,
					experimentEligibilitySelector: r.e
				}), i.a),
				p = Object(s.a)(f, e => e === a.zd.Enabled),
				x = Object(s.a)(e => Object(c.c)(e, {
					experimentName: a.Eb,
					experimentEligibilitySelector: () => !0
				}), i.a),
				j = Object(s.a)(x, e => e === a.db.Enabled)
		},
		"./src/redditGQL/operations/BadgeIndicators.json": function(e) {
			e.exports = JSON.parse('{"id":"9d105ce5d71a"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RedesignChat.fe3b9db61231f112e4d8.js.map