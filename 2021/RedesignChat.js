// https://www.redditstatic.com/desktop2x/RedesignChat.ee45bbcea379b634e52a.js
// Retrieved at 7/15/2021, 10:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RedesignChat"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var c = n("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return c(e) + t
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
			var c = n("./node_modules/react/index.js"),
				s = n.n(c),
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
				p = n("./src/reddit/contexts/ApiContext.tsx"),
				x = n("./src/reduxMiddleware/apiContext.ts"),
				f = n("./src/reduxMiddleware/gqlContext.ts"),
				j = n("./src/chat/actions/apiRequestHeaders.ts"),
				O = n("./src/chat/actions/experiments/index.ts"),
				g = n("./src/chat/actions/notifications.ts"),
				C = n("./src/chat/actions/platform.ts"),
				E = n("./src/chat/actions/session.ts"),
				_ = n("./src/chat/actions/user.ts"),
				y = n("./node_modules/react-redux/es/index.js"),
				S = n("./src/lib/CSSVariableProvider/index.tsx"),
				v = n("./src/lib/lessComponent.tsx"),
				w = n("./src/chat/components/MinimizedPortalContainer/index.tsx"),
				N = n("./src/chat/components/Root/index.tsx"),
				T = n("./src/chat/constants/container.ts"),
				R = n("./src/chat/helpers/chatSelector.ts"),
				A = n("./src/chat/components/PortalContainer/index.m.less"),
				P = n.n(A);
			const {
				embed: D,
				hidden: M
			} = T.b;

			function B(e) {
				return void 0 !== e ? e : -1
			}
			const U = v.a.wrapped(e => s.a.createElement("div", {
					className: e.className
				}, e.children), "BasePortalContainer", P.a),
				I = v.a.wrapped(e => s.a.createElement("div", {
					className: e.className,
					style: {
						width: `${B(D.width)}px`,
						height: `${B(D.height)}px`
					}
				}, e.children), "EmbedPortalContainer", P.a),
				k = v.a.wrapped(e => s.a.createElement("div", {
					className: e.className,
					style: {
						width: `${B(M.width)}px`,
						height: `${B(M.height)}px`
					}
				}, e.children), "HiddenPortalContainer", P.a),
				q = v.a.wrapped(w.a, "MinimizedRedesignPortalContainer", P.a),
				L = U,
				z = Object(R.a)({
					container: e => e && e.container && e.container.size
				});

			function G(e) {
				switch (e.container) {
					case T.a.EMBED:
						return s.a.createElement(I, null, e.children);
					case T.a.HIDDEN:
						return s.a.createElement(k, null, e.children);
					case T.a.FULL:
						return s.a.createElement(L, null, e.children);
					case T.a.MINIMIZED:
						return s.a.createElement(q, null);
					default:
						return s.a.createElement(I, null, e.children)
				}
			}
			var F = n("./src/chat/customMiddleware/chatThemeKey.ts"),
				Q = n("./src/chat/customMiddleware/containerSize.ts"),
				H = n("./src/chat/customMiddleware/draftMessageText.ts"),
				$ = n("./src/chat/customMiddleware/iframeDispatcher.ts"),
				K = n("./src/chat/customMiddleware/lastSelectedChannel.ts"),
				Y = n("./src/chat/customMiddleware/loggedOutPreferencesSync.ts"),
				W = n("./src/chat/customMiddleware/sendbirdToken.ts"),
				V = n("./src/chat/customMiddleware/title.ts"),
				J = n("./src/chat/customMiddleware/tokenRefresher.ts"),
				X = n("./src/chat/customMiddleware/tracking.ts"),
				Z = n("./src/chat/customMiddleware/unreadMessageCount.ts"),
				ee = n("./node_modules/lodash/uniqueId.js"),
				te = n.n(ee),
				ne = n("./src/chat/constants/theme.ts"),
				ce = n("./src/chat/models/Theme/index.ts"),
				se = n("./src/chat/reducers/meta/index.ts"),
				re = n("./src/chat/reducers/platform/index.ts"),
				ae = n("./src/chat/reducers/promos/index.ts");
			const ie = (e, t) => (e.chat && e.chat.promos && (t.promos = {
					...ae.a,
					...e.chat.promos
				}), t),
				oe = (e, t) => {
					const {
						account: n,
						language: c,
						loid: s,
						prefs: r,
						reddaid: a,
						session: i,
						sessionTracker: o
					} = e.user;
					return t.user = {
						...t.user,
						account: n ? {
							commentKarma: n.commentKarma,
							created: n.created,
							inChat: n.inChat,
							id: n.id,
							isNSFW: n.isNSFW,
							linkKarma: n.postKarma,
							name: n.displayText || "",
							prefNightmode: e.user.prefs.nightmode,
							profileImg: n.accountIcon
						} : null,
						language: c,
						loid: s,
						prefs: r,
						reddaid: a,
						sessionTracker: o,
						session: i && i.unsafeLoggedOut ? null : i
					}, t
				},
				de = e => (e.meta = {
					...se.a,
					isRedesign: !0
				}, e),
				ue = e => {
					if (e.user && e.user.prefs && e.user.prefs.nightmode) {
						const {
							NIGHT: t,
							REDDIT: n
						} = ne.b, {
							nightmode: c
						} = e.user.prefs, s = c ? t : n;
						e.themes = {
							current: ce.e[s],
							chatTheme: null,
							cached: {}
						}, e.user.prefs.globalTheme = s
					}
					return e
				},
				le = (e, t, n) => {
					const c = te()(),
						s = Object(r.c)(t.location.pathname, void 0, c),
						a = Object(h.a)(Object(r.e)(s), n),
						i = Object(re.b)(re.a, Object(C.e)({
							location: s,
							action: "PUSH",
							routeMatch: a
						}));
					return e.platform = {
						...i
					}, e
				};
			var be = n("./src/chat/reducers/index.ts"),
				me = n("./src/chat/routes/index.ts");
			const he = Object(x.a)({
					actionDispatchers: {
						reddaidReceived: _.r,
						loidReceived: _.q,
						sessionTrackerReceived: _.u
					},
					cookies: i.a,
					receivedActions: {
						headersReceived: j.a,
						loidReceived: _.e,
						reddaidReceived: _.f,
						sessionTrackerReceived: _.g,
						userAuthenticated: E.a,
						userLoggedOut: E.b,
						userReauthenticated: E.c
					},
					statsAppName: l.l.Chat
				}),
				pe = Object(f.a)(he.apiContext);

			function xe(e, t, n = "/chat/minimize") {
				const c = document.getElementById("2x-container"),
					a = document.createElement("div");
				return c.appendChild(a), Object(m.a)({
					reducerMap: be.a,
					routes: me.a,
					apiContext: he.apiContext,
					gqlContext: pe.gqlContext,
					appFactory: (e, t) => s.a.createElement(p.a.Provider, {
						value: {
							apiContext: he.apiContext,
							gqlContext: pe.gqlContext
						}
					}, function(e, t) {
						const n = Object(y.b)(z)(G);
						return s.a.createElement("div", null, Object(S.d)(s.a.createElement(n, null, Object(N.a)(e, t)), document.body))
					}(e, t)),
					appName: l.l.Chat,
					history: Object(r.d)({
						initialEntries: [n],
						initialIndex: 0
					}),
					customMiddleware: [u.a.withExtraArgument({
						routes: me.a,
						apiContext: he.apiContext,
						gqlContext: pe.gqlContext
					}), he.middleware, J.a, W.a, $.a, Y.a, Object(X.a)(t), Q.a, F.a, H.a, Z.a, K.a, V.a],
					modifyInitialData: ({
						initialData: t,
						browserHistory: n
					}) => (t = oe(e, t), t = de(t), t = ue(t), t = ie(e, t), t = le(t, n, me.a)),
					preRender: ({
						browserHistory: e,
						routes: t,
						store: n
					}) => {
						const c = d()([...Object(b.a)(Object(r.e)(location))]);
						n.dispatch(Object(O.d)(c)).then(() => {
							Object(F.c)(n)
						});
						return n.dispatch(Object(_.l)()), e.listen((e, c) => {
							const s = Object(h.a)(Object(r.e)(e), t);
							n.dispatch(Object(C.d)(e, c, s)), n.dispatch(Object(_.l)())
						}), "undefined" != typeof window && window.addEventListener("load", async () => {
							n.dispatch(Object(g.a)(!1, !1))
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
				return c
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			}));
			const c = "APP_BADGES__PENDING",
				s = "APP_BADGES__LOADED",
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
				return p
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "b", (function() {
				return f
			}));
			var c = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				r = n("./src/reddit/actions/tabBadging.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/BadgeIndicators.json"),
				o = e => Object(a.a)(e, {
					...i
				}),
				d = n("./src/reddit/models/Badge/index.ts");
			const u = Object(c.a)(s.c),
				l = Object(c.a)(s.b),
				b = Object(c.a)(s.d),
				m = Object(c.a)(s.a),
				h = ({
					key: e,
					count: t
				}) => ({
					[e]: {
						count: t,
						style: d.b.Numbered
					}
				}),
				p = (e, t, n) => ({
					[d.c.DirectMessages]: {
						count: e,
						style: d.b.Numbered
					},
					[d.c.ChatRooms]: {
						count: t,
						style: d.b.Numbered
					},
					[d.c.ChatRoomMentions]: {
						count: n,
						style: d.b.Numbered
					}
				}),
				x = () => async (e, t, {
					gqlContext: n
				}) => {
					e(u());
					const c = await async function(e) {
						const t = await o(e());
						if (t.ok && t.body) {
							return function(e) {
								return e && e.data && e.data.badgeIndicators
							}(t.body)
						}
					}(n);
					c ? (e(l(c)), e(Object(r.d)())) : e(m())
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
			var c = n("./node_modules/lodash/isEqual.js"),
				s = n.n(c),
				r = n("./src/chat/actions/message/unreadCount.ts"),
				a = n("./src/chat/actions/promo/constants.ts"),
				i = n("./src/chat/actions/surveyTrigger/index.ts"),
				o = n("./src/chat/models/Promo/index.ts"),
				d = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				u = n("./src/lib/makeActionCreator/index.ts");
			Object(u.a)(a.a);
			const l = Object(u.a)(a.b);
			var b = n("./src/reddit/actions/chat/unreadCount.ts"),
				m = n("./src/reddit/actions/survey/index.ts"),
				h = n("./src/reddit/actions/tabBadging.ts"),
				p = n("./src/reddit/selectors/chat.ts"),
				x = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts");
			t.default = (e, t) => n => {
				const c = Object(x.a)(t());
				switch (n.type) {
					case r.a: {
						const r = n.payload,
							a = c ? Object(h.b)(t()) : Object(p.b)(t());
						if (!s()(r, a)) {
							const t = Object(d.d)(r.basicChannelCount, r.subredditChannelCount, r.subredditMentionCount);
							e(c ? Object(d.a)(t) : Object(b.c)(r)), e(Object(h.d)())
						}
					}
					break;
				case a.b:
					n.payload === o.a.SubredditChatFtux && e(l(o.a.SubredditChatFtux));
					break;
				case i.a:
					e(Object(m.e)())
				}
			}
		},
		"./src/reddit/actions/chat/unreadCount.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "d", (function() {
				return g
			}));
			var c, s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/chat/endpoints/sendbird/index.ts"),
				i = n("./src/reddit/actions/tabBadging.ts"),
				o = n("./src/reddit/selectors/chat.ts"),
				d = n("./src/reddit/selectors/user.ts");
			! function(e) {
				e.SYNC = "UNREAD_COUNT__SYNC", e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(c || (c = {}));
			const {
				SYNC: u,
				REQUEST_FAILED: l,
				REQUEST_PENDING: b,
				REQUEST_SUCCESS: m
			} = c, h = Object(r.a)(u), p = Object(r.a)(l), x = Object(r.a)(b), f = Object(r.a)(m);
			let j;
			const O = 5 * s.ib,
				g = () => async (e, t, {
					apiContext: n
				}) => {
					const c = t();
					if (!Object(d.J)(c) || !Object(o.d)(c)) return clearTimeout(j);
					j || e((() => async (e, t, {
						apiContext: n
					}) => {
						const c = t(),
							{
								session: s
							} = c.user;
						if (s && Object(d.J)(c) && Object(o.d)(c)) {
							e(x());
							const t = await Object(a.g)(n(), s);
							t && t.ok ? (e(f({
								basicChannelCount: t.body.unread_count || 0,
								subredditChannelCount: t.body.subreddit_unread_count || 0
							})), e(Object(i.d)())) : e(p({
								error: t.error
							}))
						}
					})()), j = setTimeout(() => {
						e(g())
					}, O)
				}
		},
		"./src/reddit/actions/inbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			var c = n("./src/lib/makeActionCreator/index.ts");
			const s = "INBOX__COUNT_UPDATE",
				r = Object(c.a)(s)
		},
		"./src/reddit/actions/tabBadging.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "f", (function() {
				return y
			}));
			var c = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/fastdom/index.ts"),
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
				p = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/actions/appBadgeIndicators/index.ts");
			const f = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				j = Object(r.a)(f),
				O = (e, t) => {
					e <= 0 ? s.a.write(() => {
						Object(d.b)(!1), window.document.title = t
					}) : s.a.write(() => {
						Object(d.b)(), window.document.title = `(${e}) ${t}`
					})
				},
				g = Object(c.c)({
					basicChannelCount: l.e,
					subredditChannelCount: l.d,
					subredditMentionCount: l.c
				}),
				C = e => {
					const t = Object(m.a)(e);
					return {
						inboxCount: t ? Object(l.h)(e) : Object(p.E)(e) || 0,
						basicChannelCount: t ? Object(l.e)(e) : Object(b.a)(e) || 0
					}
				},
				E = () => async (e, t) => {
					const n = t(),
						c = Object(o.e)(n, {}),
						s = Object(m.a)(n),
						r = Object(p.I)(n) || Object(p.J)(n),
						a = Object(h.g)(n);
					let i = 0;
					r && c && (i = s ? a ? Object(l.i)(n) : Object(l.j)(n) : (e => {
						const {
							inboxCount: t,
							basicChannelCount: n
						} = C(e);
						return t + n
					})(n), O(i, c), e(j({
						hasUnreadMessages: !!i
					})))
				}, _ = () => async (e, t) => {
					{
						e(E());
						const n = C(t());
						Object(d.c)(n)
					}
				}, y = e => async (t, n) => {
					const c = n();
					if (Object(m.a)(c)) {
						const n = Object(l.e)(c),
							s = Object(l.h)(c),
							{
								basicChannelCount: r,
								inboxCount: a
							} = e;
						if (n !== r) {
							const e = Object(x.e)({
								count: r,
								key: u.c.ChatTab
							});
							t(Object(x.a)(e))
						}
						if (a && a !== s) {
							const e = Object(x.e)({
								count: a,
								key: u.c.MessageTab
							});
							t(Object(x.a)(e))
						}(n !== r || a && a !== s) && t(E())
					} else {
						const n = Object(b.a)(c),
							s = Object(b.b)(c),
							r = Object(p.E)(c),
							{
								basicChannelCount: o,
								inboxCount: d
							} = e;
						n !== o && t(Object(a.b)({
							...s,
							basicChannelCount: o
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
			var c = n("./src/config.ts");
			const s = `${c.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				r = `${c.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				a = `${c.a.assetPath}/img/favicon/favicon-32x32.png`,
				i = `${c.a.assetPath}/img/favicon/favicon-16x16.png`,
				o = "badgeCountSync",
				d = e => window.document.querySelector(`link[href="${e}"]`),
				u = (e = !0) => {
					const t = d(e ? a : s),
						n = d(e ? i : r);
					t && n && (t.href = e ? s : a, n.href = e ? r : i)
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
				return c
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var c, s, r, a = n("./src/config.ts");

			function i(e) {
				return "userId" in e
			}

			function o(e) {
				return !(!e.extra || !e.extra.membership) && !!e.extra.membership.included
			}

			function d(e, t, n) {
				const c = n.media[0],
					s = Object.keys(c);
				if (c["0x0"]) return c["0x0"];
				let r = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (s.forEach(n => {
						const s = c[n],
							[a, i] = n.split("x").map(e => parseInt(e));
						(a < r.width && a >= e || i < r.height && i >= t) && (r = {
							height: i,
							width: a,
							url: s
						})
					}), !r.url && s.length) {
					const e = Object.keys(c)[0],
						t = c[e],
						[n, s] = e.split("x").map(e => parseInt(e));
					r = {
						height: s,
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
				const c = d(e, t, n),
					s = d(2 * e, 2 * t, n);
				return {
					url: u(c),
					url2x: u(s)
				}
			}! function(e) {
				e.First = "p1", e.Second = "p2"
			}(c || (c = {})),
			function(e) {
				e.ActivityTab = "activityTab", e.ChatTab = "chatTab", e.DirectMessages = "directMessages", e.MessageTab = "messageTab", e.ChatRooms = "chatRooms", e.ChatRoomMentions = "chatRoomMentions"
			}(s || (s = {})),
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
				return p
			}));
			var c = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/selectors/chat.ts"),
				r = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts");
			const a = e => e.appBadges.badges,
				i = Object(c.a)(r.a, a, s.a, (e, t, n) => e ? t && t.directMessages && t.directMessages.count || 0 : n),
				o = Object(c.a)(a, e => e && e.chatRooms && e.chatRooms.count || 0),
				d = Object(c.a)(a, e => e && e.chatRoomMentions && e.chatRoomMentions.count || 0),
				u = Object(c.a)(r.a, s.a, i, o, d, (e, t, n, c, s) => {
					if (e) {
						return n + c + s > 0
					}
					return t > 0
				}),
				l = Object(c.a)(a, e => e && e.activityTab && e.activityTab.count || 0),
				b = Object(c.a)(a, e => e && e.messageTab && e.messageTab.count || 0),
				m = Object(c.a)(l, b, (e, t) => e + t),
				h = Object(c.a)(i, b, (e, t) => e + t),
				p = Object(c.a)(i, m, (e, t) => e + t)
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
			var c = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				r = n("./src/reddit/selectors/moderatorPermissions.ts");
			const a = e => e.chat.unread.count,
				i = Object(c.a)(a, e => e.basicChannelCount),
				o = (Object(c.a)(a, e => e.subredditChannelCount), e => !(e.chat.isInited || e.chat.unread.api.pending)),
				d = (e, t) => {
					const {
						chatConfig: n
					} = s.c;
					return Object(r.b)(n)(e, t)
				}
		},
		"./src/reddit/selectors/experiments/inboxAppBadgingGql.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var c = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const o = Object(c.a)(e => Object(r.c)(e, {
					experimentName: s.rc,
					experimentEligibilitySelector: a.e
				}), i.a),
				d = Object(c.a)(o, e => e === s.uc.Enabled)
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "i", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "b", (function() {
				return E
			}));
			var c = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const o = Object(c.a)(e => Object(r.c)(e, {
					experimentName: s.cb,
					experimentEligibilitySelector: a.e
				}), i.a),
				d = Object(c.a)(o, e => e === s.zc.Enabled),
				u = Object(c.a)(e => Object(r.c)(e, {
					experimentName: s.tc,
					experimentEligibilitySelector: a.e
				}), i.a),
				l = Object(c.a)(d, u, (e, t) => e && t === s.yc.Enabled),
				b = Object(c.a)(e => Object(r.c)(e, {
					experimentName: s.fb,
					experimentEligibilitySelector: a.e
				}), i.a),
				m = Object(c.a)(d, b, (e, t) => e && t === s.qb.Enabled),
				h = Object(c.a)(e => Object(r.c)(e, {
					experimentName: s.ab,
					experimentEligibilitySelector: a.e
				}), i.a),
				p = Object(c.a)(h, e => e === s.wc.Banner_1st_time),
				x = Object(c.a)(h, e => e === s.wc.Tooltip_persist),
				f = Object(c.a)(h, e => e === s.wc.Tooltip_1st_time),
				j = Object(c.a)(e => Object(r.c)(e, {
					experimentName: s.bb,
					experimentEligibilitySelector: a.e
				}), i.a),
				O = Object(c.a)(j, e => e === s.xc.ContinuousScroll),
				g = Object(c.a)(e => Object(r.c)(e, {
					experimentName: s.U,
					experimentEligibilitySelector: a.e
				}), i.a),
				C = Object(c.a)(g, e => e === s.Ab.Banner1stTime),
				E = Object(c.a)(g, e => e === s.Ab.BannerPersist)
		},
		"./src/redditGQL/operations/BadgeIndicators.json": function(e) {
			e.exports = JSON.parse('{"id":"712476d48c90"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RedesignChat.ee45bbcea379b634e52a.js.map