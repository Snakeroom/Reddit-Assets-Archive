// https://www.redditstatic.com/desktop2x/RedesignChat.2441c0c14e0bb575725a.js
// Retrieved at 12/15/2021, 4:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RedesignChat"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
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
				r = n.n(s),
				c = n("./node_modules/history/esm/history.js"),
				a = n("./node_modules/js-cookie/src/js.cookie.js"),
				i = n.n(a),
				o = n("./node_modules/redux-thunk/es/index.js"),
				d = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/initializeClient/index.tsx"),
				l = n("./src/lib/matchRoute/index.ts"),
				b = n("./src/reddit/contexts/ApiContext.tsx"),
				m = n("./src/reduxMiddleware/apiContext.ts"),
				h = n("./src/reduxMiddleware/gqlContext.ts"),
				g = n("./src/chat/actions/apiRequestHeaders.ts"),
				p = n("./src/chat/actions/notifications.ts"),
				f = n("./src/chat/actions/platform.ts"),
				x = n("./src/chat/actions/session.ts"),
				j = n("./src/chat/actions/user.ts"),
				O = n("./node_modules/react-redux/es/index.js"),
				C = n("./src/lib/CSSVariableProvider/index.tsx"),
				v = n("./src/lib/lessComponent.tsx"),
				E = n("./src/chat/components/MinimizedPortalContainer/index.tsx"),
				_ = n("./src/chat/components/Root/index.tsx"),
				w = n("./src/chat/constants/container.ts"),
				N = n("./src/chat/helpers/chatSelector.ts"),
				y = n("./src/chat/actions/container.ts"),
				S = n("./src/chat/components/PortalContainer/index.m.less"),
				M = n.n(S);
			const {
				embed: T,
				hidden: P
			} = w.b;

			function A(e) {
				return void 0 !== e ? e : -1
			}
			const R = v.a.wrapped(e => r.a.createElement("div", {
					className: e.className
				}, e.children), "BasePortalContainer", M.a),
				U = v.a.wrapped(e => {
					const t = Object(O.d)(),
						n = Object(s.useRef)(null),
						c = e => {
							var s;
							if (e.target instanceof Node && e.target) {
								const r = Boolean(null === (s = null == n ? void 0 : n.current) || void 0 === s ? void 0 : s.contains(e.target));
								t(Object(y.changeFocus)(r))
							}
						};
					return Object(s.useEffect)(() => (document.addEventListener("focusin", c), () => {
						document.removeEventListener("focusin", c)
					})), r.a.createElement("div", {
						ref: n,
						className: e.className,
						style: {
							width: `${A(T.width)}px`,
							height: `${A(T.height)}px`
						}
					}, e.children)
				}, "EmbedPortalContainer", M.a),
				D = v.a.wrapped(e => r.a.createElement("div", {
					className: e.className,
					style: {
						width: `${A(P.width)}px`,
						height: `${A(P.height)}px`
					}
				}, e.children), "HiddenPortalContainer", M.a),
				B = v.a.wrapped(E.a, "MinimizedRedesignPortalContainer", M.a),
				I = R,
				k = Object(N.a)({
					container: e => e && e.container && e.container.size
				});

			function q(e) {
				switch (e.container) {
					case w.a.EMBED:
						return r.a.createElement(U, null, e.children);
					case w.a.HIDDEN:
						return r.a.createElement(D, null, e.children);
					case w.a.FULL:
						return r.a.createElement(I, null, e.children);
					case w.a.MINIMIZED:
						return r.a.createElement(B, null);
					default:
						return r.a.createElement(U, null, e.children)
				}
			}
			var L = n("./src/chat/customMiddleware/channelsFilter.ts"),
				z = n("./src/chat/customMiddleware/chatThemeKey.ts"),
				F = n("./src/chat/customMiddleware/containerSize.ts"),
				G = n("./src/chat/customMiddleware/draftMessageText.ts"),
				H = n("./src/chat/customMiddleware/iframeDispatcher.ts"),
				Q = n("./src/chat/customMiddleware/inviteLinkSettings.ts"),
				$ = n("./src/chat/customMiddleware/lastSelectedChannel.ts"),
				Y = n("./src/chat/customMiddleware/loggedOutPreferencesSync.ts"),
				K = n("./src/chat/customMiddleware/sendbirdToken.ts"),
				W = n("./src/chat/customMiddleware/settingsDropdown.ts"),
				V = n("./src/chat/customMiddleware/title.ts"),
				J = n("./src/chat/customMiddleware/tokenRefresher.ts"),
				X = n("./src/chat/customMiddleware/tracking.ts"),
				Z = n("./src/chat/customMiddleware/unreadMessageCount.ts"),
				ee = n("./src/chat/customMiddleware/uploadPrompt.ts"),
				te = n("./node_modules/lodash/uniqueId.js"),
				ne = n.n(te),
				se = n("./src/chat/constants/theme.ts"),
				re = n("./src/chat/models/Theme/index.ts"),
				ce = n("./src/chat/reducers/experiments/helpers.ts"),
				ae = n("./src/chat/reducers/meta/index.ts"),
				ie = n("./src/chat/reducers/platform/index.ts"),
				oe = n("./src/lib/env/index.ts");
			const de = (e, t) => {
					var n;
					const {
						account: s,
						language: r,
						loid: c,
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
						language: r,
						loid: c,
						prefs: a,
						reddaid: i,
						sessionTracker: d,
						session: o && o.unsafeLoggedOut ? null : o
					}, t
				},
				ue = e => (e.meta = {
					...ae.a,
					isRedesign: !0
				}, e),
				le = e => {
					if (e.user && e.user.prefs && e.user.prefs.nightmode) {
						const {
							NIGHT: t,
							REDDIT: n
						} = se.b, {
							nightmode: s
						} = e.user.prefs, r = s ? t : n;
						e.themes = {
							current: re.e[r],
							chatTheme: null,
							cached: {}
						}, e.user.prefs.globalTheme = r
					}
					return e
				},
				be = (e, t, n) => {
					const s = ne()(),
						r = Object(c.c)(t.location, void 0, s),
						a = Object(l.a)(Object(c.e)(r), n),
						i = Object(ie.b)(ie.a, Object(f.e)({
							location: r,
							action: "PUSH",
							routeMatch: a
						}));
					return e.platform = {
						...i
					}, e
				},
				me = (e, t) => {
					var n, s, r, c, a;
					const i = {},
						o = null === (n = e.platform.currentPage) || void 0 === n ? void 0 : n.queryParams;
					for (const u in null === (r = null === (s = null == e ? void 0 : e.user) || void 0 === s ? void 0 : s.experiments) || void 0 === r ? void 0 : r.byName) i[u] = {
						...null === (a = null === (c = null == e ? void 0 : e.user) || void 0 === c ? void 0 : c.experiments) || void 0 === a ? void 0 : a.byName[u],
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
			const pe = Object(m.a)({
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
				fe = Object(h.a)(pe.apiContext);

			function xe(e, t, n = "/chat/minimize") {
				const s = document.getElementById("2x-container"),
					a = document.createElement("div");
				return s.appendChild(a), Object(u.a)({
					reducerMap: he.a,
					routes: ge.a,
					apiContext: pe.apiContext,
					gqlContext: fe.gqlContext,
					appFactory: (e, t) => r.a.createElement(b.a.Provider, {
						value: {
							apiContext: pe.apiContext,
							gqlContext: fe.gqlContext
						}
					}, function(e, t) {
						const n = Object(O.b)(k)(q);
						return r.a.createElement("div", null, Object(C.d)(r.a.createElement(n, null, Object(_.a)(e, t)), document.body))
					}(e, t)),
					appName: d.n.Chat,
					history: Object(c.d)({
						initialEntries: [n],
						initialIndex: 0
					}),
					customMiddleware: [o.a.withExtraArgument({
						routes: ge.a,
						apiContext: pe.apiContext,
						gqlContext: fe.gqlContext
					}), pe.middleware, J.a, W.a, K.a, H.a, Y.a, Object(X.a)(t), F.a, z.a, L.a, G.a, Z.a, $.a, V.a, ee.a, Q.a],
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
							const r = Object(l.a)(Object(c.e)(e), t);
							n.dispatch(Object(f.d)(e, s, r)), n.dispatch(Object(j.l)())
						}), "undefined" != typeof window && window.addEventListener("load", async () => {
							n.dispatch(Object(p.a)(!1, !1))
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
				return r
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			}));
			const s = "APP_BADGES__PENDING",
				r = "APP_BADGES__LOADED",
				c = "APP_BADGES__UPDATED",
				a = "APP_BADGES__FAILED"
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
				return p
			})), n.d(t, "b", (function() {
				return f
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				c = n("./src/reddit/actions/tabBadging.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/BadgeIndicators.json"),
				o = e => Object(a.a)(e, {
					...i
				}),
				d = n("./src/reddit/models/Badge/index.ts");
			const u = Object(s.a)(r.c),
				l = Object(s.a)(r.b),
				b = Object(s.a)(r.d),
				m = Object(s.a)(r.a),
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
				p = () => async (e, t, {
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
			const f = () => async e => {
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
				r = n.n(s),
				c = n("./src/chat/actions/message/unreadCount.ts"),
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
					case c.a: {
						const c = n.payload,
							a = s ? Object(u.b)(t()) : Object(l.b)(t());
						if (!r()(c, a)) {
							const t = Object(i.d)(c.unreadMessages, c.hasNewMessages);
							e(s ? Object(i.a)(t) : Object(o.c)(c)), e(Object(u.d)())
						}
					}
					break;
				case a.a:
					e(Object(d.g)())
				}
			}
		},
		"./src/reddit/actions/chat/unreadCount.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "d", (function() {
				return C
			}));
			var s, r = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
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
			} = s, g = Object(c.a)(l), p = Object(c.a)(b), f = Object(c.a)(m), x = Object(c.a)(h);
			let j;
			const O = 5 * r.kb,
				C = () => async (e, t, {
					apiContext: n
				}) => {
					const s = t();
					if (!Object(u.K)(s) || !Object(d.d)(s)) return clearTimeout(j);
					j || e((() => async (e, t, {
						gqlContext: n
					}) => {
						const s = t(),
							{
								session: r
							} = s.user;
						if (r && Object(u.K)(s) && Object(d.d)(s)) {
							e(f());
							const t = await Object(i.g)(n());
							t && t.ok && Object(i.j)(t.body) ? (e(x({
								...Object(a.b)(t.body.data)
							})), e(Object(o.d)())) : e(p({
								error: t.error
							}))
						}
					})()), j = setTimeout(() => {
						e(C())
					}, O)
				}
		},
		"./src/reddit/actions/inbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const r = "INBOX__COUNT_UPDATE",
				c = Object(s.a)(r)
		},
		"./src/reddit/actions/tabBadging.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "f", (function() {
				return _
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/fastdom/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/reddit/actions/chat/unreadCount.ts"),
				i = n("./src/reddit/actions/inbox.ts"),
				o = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				d = n("./src/reddit/helpers/tabBadging/index.ts"),
				u = n("./src/reddit/models/Badge/index.ts"),
				l = n("./src/reddit/selectors/appBadges.ts"),
				b = n("./src/reddit/selectors/chat.ts"),
				m = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				h = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/actions/appBadgeIndicators/index.ts");
			const f = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				x = Object(c.a)(f),
				j = (e, t) => {
					e <= 0 ? r.a.write(() => {
						Object(d.b)(!1), window.document.title = t
					}) : r.a.write(() => {
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
						inboxCount: t ? Object(l.h)(e) : Object(g.F)(e) || 0,
						basicChannelCount: t ? Object(l.e)(e) : Object(b.a)(e) || 0
					}
				},
				v = () => async (e, t) => {
					const n = t(),
						s = Object(o.f)(n, {}),
						r = Object(m.a)(n),
						c = Object(g.J)(n) || Object(g.K)(n),
						a = Object(h.b)(n);
					let i = 0;
					c && s && (i = r ? a ? Object(l.i)(n) : Object(l.j)(n) : (e => {
						const {
							inboxCount: t,
							basicChannelCount: n
						} = C(e);
						return t + n
					})(n), j(i, s), e(x({
						hasUnreadMessages: !!i
					})))
				}, E = () => async (e, t) => {
					{
						e(v());
						const n = C(t());
						Object(d.c)(n)
					}
				}, _ = e => async (t, n) => {
					const s = n();
					if (Object(m.a)(s)) {
						const n = Object(l.e)(s),
							r = Object(l.h)(s),
							{
								basicChannelCount: c,
								inboxCount: a
							} = e;
						if (n !== c) {
							const e = Object(p.e)({
								count: c,
								key: u.c.ChatTab
							});
							t(Object(p.a)(e))
						}
						if (a && a !== r) {
							const e = Object(p.e)({
								count: a,
								key: u.c.MessageTab
							});
							t(Object(p.a)(e))
						}(n !== c || a && a !== r) && t(v())
					} else {
						const n = Object(b.a)(s),
							r = Object(b.b)(s),
							c = Object(g.F)(s),
							{
								basicChannelCount: o,
								inboxCount: d
							} = e;
						n !== o && t(Object(a.b)({
							...r
						})), d && d !== c && t(Object(i.b)({
							inboxCount: d
						})), (n !== o || d && d !== c) && t(v())
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
			const r = `${s.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				c = `${s.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				a = `${s.a.assetPath}/img/favicon/favicon-32x32.png`,
				i = `${s.a.assetPath}/img/favicon/favicon-16x16.png`,
				o = "badgeCountSync",
				d = e => window.document.querySelector(`link[href="${e}"]`),
				u = (e = !0) => {
					const t = d(e ? a : r),
						n = d(e ? i : c);
					t && n && (t.href = e ? r : a, n.href = e ? c : i)
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
				return r
			})), n.d(t, "b", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, r, c, a = n("./src/config.ts");

			function i(e) {
				return "userId" in e
			}

			function o(e) {
				return !(!e.extra || !e.extra.membership) && !!e.extra.membership.included
			}

			function d(e, t, n) {
				const s = n.media[0],
					r = Object.keys(s);
				if (s["0x0"]) return s["0x0"];
				let c = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (r.forEach(n => {
						const r = s[n],
							[a, i] = n.split("x").map(e => parseInt(e));
						(a < c.width && a >= e || i < c.height && i >= t) && (c = {
							height: i,
							width: a,
							url: r
						})
					}), !c.url && r.length) {
					const e = Object.keys(s)[0],
						t = s[e],
						[n, r] = e.split("x").map(e => parseInt(e));
					c = {
						height: r,
						width: n,
						url: t
					}
				}
				return c.url
			}

			function u(e) {
				return e.startsWith("https") ? e : `${a.a.assetPath}/${e}`
			}

			function l(e, t, n) {
				const s = d(e, t, n),
					r = d(2 * e, 2 * t, n);
				return {
					url: u(s),
					url2x: u(r)
				}
			}! function(e) {
				e.First = "p1", e.Second = "p2"
			}(s || (s = {})),
			function(e) {
				e.ActivityTab = "activityTab", e.ChatTab = "chatTab", e.MessageTab = "messageTab", e.ChatHasNewMessages = "chatHasNewMessages", e.ChatUnreadMessages = "chatUnreadMessages"
			}(r || (r = {})),
			function(e) {
				e.Numbered = "NUMBERED", e.Filled = "FILLED"
			}(c || (c = {}))
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
				return g
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/selectors/chat.ts"),
				c = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts");
			const a = e => e.appBadges.badges,
				i = Object(s.a)(c.a, a, r.a, (e, t, n) => {
					var s;
					return e ? (null === (s = t.chatUnreadMessages) || void 0 === s ? void 0 : s.count) || 0 : n
				}),
				o = Object(s.a)(a, e => e && e.chatRooms && e.chatRooms.count || 0),
				d = Object(s.a)(a, e => e && e.chatRoomMentions && e.chatRoomMentions.count || 0),
				u = Object(s.a)(c.a, i, a, r.b, (e, t, n, s) => {
					var r;
					if (0 === t) {
						if (e && (null === (r = n.chatHasNewMessages) || void 0 === r ? void 0 : r.isShowing)) return !0;
						if (!e && s.hasNewMessages) return !0
					}
					return !1
				}),
				l = Object(s.a)(a, e => e && e.activityTab && e.activityTab.count || 0),
				b = Object(s.a)(a, e => e && e.messageTab && e.messageTab.count || 0),
				m = Object(s.a)(l, b, (e, t) => e + t),
				h = Object(s.a)(i, b, (e, t) => e + t),
				g = Object(s.a)(i, m, (e, t) => e + t)
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
				r = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				c = n("./src/reddit/selectors/moderatorPermissions.ts");
			const a = e => e.chat.unread.count,
				i = Object(s.a)(a, e => e.unreadMessages),
				o = e => !(e.chat.isInited || e.chat.unread.api.pending),
				d = (e, t) => {
					const {
						chatConfig: n
					} = r.c;
					return Object(c.b)(n)(e, t)
				}
		},
		"./src/reddit/selectors/experiments/inboxAppBadgingGql.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				c = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const o = Object(s.a)(e => Object(c.c)(e, {
					experimentName: r.pd,
					experimentEligibilitySelector: a.e
				}), i.a),
				d = Object(s.a)(o, e => e === r.sd.Enabled)
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
				return f
			})), n.d(t, "d", (function() {
				return j
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				c = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const o = Object(s.a)(e => Object(c.c)(e, {
					experimentName: r.wb,
					experimentEligibilitySelector: a.e
				}), i.a),
				d = Object(s.a)(o, e => e === r.xd.Enabled),
				u = Object(s.a)(e => Object(c.c)(e, {
					experimentName: r.rd,
					experimentEligibilitySelector: a.e
				}), i.a),
				l = Object(s.a)(d, u, (e, t) => e && t === r.wd.Enabled),
				b = Object(s.a)(e => Object(c.c)(e, {
					experimentName: r.Ib,
					experimentEligibilitySelector: a.e
				}), i.a),
				m = Object(s.a)(d, b, (e, t) => e && t === r.Yb.Enabled),
				h = Object(s.a)(e => Object(c.c)(e, {
					experimentName: r.ub,
					experimentEligibilitySelector: a.e
				}), i.a),
				g = Object(s.a)(h, e => e === r.ud.ContinuousScroll),
				p = Object(s.a)(e => Object(c.c)(e, {
					experimentName: r.vb,
					experimentEligibilitySelector: a.e
				}), i.a),
				f = Object(s.a)(p, e => e === r.vd.Enabled),
				x = Object(s.a)(e => Object(c.c)(e, {
					experimentName: r.Db,
					experimentEligibilitySelector: () => !0
				}), i.a),
				j = Object(s.a)(x, e => e === r.eb.Enabled)
		},
		"./src/redditGQL/operations/BadgeIndicators.json": function(e) {
			e.exports = JSON.parse('{"id":"9d105ce5d71a"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RedesignChat.2441c0c14e0bb575725a.js.map