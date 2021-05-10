// https://www.redditstatic.com/desktop2x/RedesignChat.daaf2e84b80b9bbbb131.js
// Retrieved at 5/10/2021, 4:20:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RedesignChat"], {
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
		"./src/chat/initializer.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return ee
			}));
			var c = n("./node_modules/history/esm/history.js"),
				s = n("./node_modules/js-cookie/src/js.cookie.js"),
				r = n.n(s),
				a = n("./node_modules/redux-thunk/es/index.js"),
				i = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/initializeClient/index.tsx"),
				d = n("./src/lib/matchRoute/index.ts"),
				u = n("./src/reduxMiddleware/apiContext.ts"),
				b = n("./src/reduxMiddleware/gqlContext.ts"),
				l = n("./src/chat/actions/apiRequestHeaders.ts"),
				h = n("./src/chat/actions/notifications.ts"),
				m = n("./src/chat/actions/platform.ts"),
				j = n("./src/chat/actions/session.ts"),
				O = n("./src/chat/actions/user.ts"),
				p = n("./node_modules/react/index.js"),
				x = n.n(p),
				f = n("./node_modules/react-redux/es/index.js"),
				g = n("./src/lib/CSSVariableProvider/index.tsx"),
				C = n("./src/lib/lessComponent.tsx"),
				E = n("./src/chat/components/MinimizedPortalContainer/index.tsx"),
				_ = n("./src/chat/components/Root/index.tsx"),
				y = n("./src/chat/constants/container.ts"),
				S = n("./src/chat/helpers/chatSelector.ts"),
				v = n("./src/chat/components/PortalContainer/index.m.less"),
				w = n.n(v);
			const {
				embed: N,
				hidden: R
			} = y.b;

			function A(e) {
				return void 0 !== e ? e : -1
			}
			const D = C.a.wrapped(e => x.a.createElement("div", {
					className: e.className
				}, e.children), "BasePortalContainer", w.a),
				M = C.a.wrapped(e => x.a.createElement("div", {
					className: e.className,
					style: {
						width: `${A(N.width)}px`,
						height: `${A(N.height)}px`
					}
				}, e.children), "EmbedPortalContainer", w.a),
				P = C.a.wrapped(e => x.a.createElement("div", {
					className: e.className,
					style: {
						width: `${A(R.width)}px`,
						height: `${A(R.height)}px`
					}
				}, e.children), "HiddenPortalContainer", w.a),
				T = C.a.wrapped(E.a, "MinimizedRedesignPortalContainer", w.a),
				B = D,
				U = Object(S.a)({
					container: e => e && e.container && e.container.size
				});

			function I(e) {
				switch (e.container) {
					case y.a.EMBED:
						return x.a.createElement(M, null, e.children);
					case y.a.HIDDEN:
						return x.a.createElement(P, null, e.children);
					case y.a.FULL:
						return x.a.createElement(B, null, e.children);
					case y.a.MINIMIZED:
						return x.a.createElement(T, null);
					default:
						return x.a.createElement(M, null, e.children)
				}
			}

			function k(e, t) {
				const n = Object(f.b)(U)(I);
				return x.a.createElement("div", null, Object(g.d)(x.a.createElement(n, null, Object(_.a)(e, t)), document.body))
			}
			var q = n("./src/chat/customMiddleware/containerSize.ts"),
				L = n("./src/chat/customMiddleware/draftMessageText.ts"),
				z = n("./src/chat/customMiddleware/iframeDispatcher.ts"),
				G = n("./src/chat/customMiddleware/lastSelectedChannel.ts"),
				F = n("./src/chat/customMiddleware/loggedOutPreferencesSync.ts"),
				$ = n("./src/chat/customMiddleware/sendbirdToken.ts"),
				H = n("./src/chat/customMiddleware/title.ts"),
				Q = n("./src/chat/customMiddleware/tokenRefresher.ts"),
				Y = n("./src/chat/customMiddleware/tracking.ts"),
				J = n("./src/chat/customMiddleware/unreadMessageCount.ts"),
				V = n("./src/chat/helpers/modifyInitialData.ts"),
				W = n("./src/chat/reducers/index.ts"),
				K = n("./src/chat/routes/index.ts");
			const X = Object(u.a)({
					actionDispatchers: {
						reddaidReceived: O.r,
						loidReceived: O.q,
						sessionTrackerReceived: O.u
					},
					cookies: r.a,
					receivedActions: {
						headersReceived: l.a,
						loidReceived: O.e,
						reddaidReceived: O.f,
						sessionTrackerReceived: O.g,
						userAuthenticated: j.a,
						userLoggedOut: j.b,
						userReauthenticated: j.c
					},
					statsAppName: i.l.Chat
				}),
				Z = Object(b.a)(X.apiContext);

			function ee(e, t, n = "/chat/minimize") {
				const s = document.getElementById("2x-container"),
					r = document.createElement("div");
				return s.appendChild(r), Object(o.a)({
					reducerMap: W.a,
					routes: K.a,
					apiContext: X.apiContext,
					appFactory: k,
					appName: i.l.Chat,
					history: Object(c.d)({
						initialEntries: [n],
						initialIndex: 0
					}),
					customMiddleware: [a.a.withExtraArgument({
						routes: K.a,
						apiContext: X.apiContext,
						gqlContext: Z.gqlContext
					}), X.middleware, Q.a, $.a, z.a, F.a, Object(Y.a)(t), q.a, L.a, J.a, G.a, H.a],
					modifyInitialData: ({
						initialData: t,
						browserHistory: n
					}) => (t = Object(V.d)(e, t), t = Object(V.a)(t), t = Object(V.b)(t), t = Object(V.c)(e, t), t = Object(V.g)(t, n, K.a), t = Object(V.f)(t), t = Object(V.h)(e, t)),
					preRender: ({
						browserHistory: e,
						routes: t,
						store: n
					}) => {
						return n.dispatch(Object(O.l)()), e.listen((e, s) => {
							const r = Object(d.a)(Object(c.e)(e), t);
							n.dispatch(Object(m.d)(e, s, r)), n.dispatch(Object(O.l)())
						}), "undefined" != typeof window && window.addEventListener("load", async () => {
							n.dispatch(Object(h.a)(!1, !1))
						}), {}
					},
					gqlContext: Z.gqlContext,
					target: r,
					timingsSampleRate: 1
				})
			}
		},
		"./src/graphql/operations/BadgeIndicators.json": function(e) {
			e.exports = JSON.parse('{"id":"712476d48c90"}')
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
				return l
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "b", (function() {
				return p
			}));
			var c = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				r = n("./src/reddit/actions/tabBadging.ts"),
				a = n("./src/graphql/operations/BadgeIndicators.json"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				o = e => Object(i.a)(e, {
					...a
				}),
				d = n("./src/reddit/models/Badge/index.ts");
			const u = Object(c.a)(s.c),
				b = Object(c.a)(s.b),
				l = Object(c.a)(s.d),
				h = Object(c.a)(s.a),
				m = ({
					key: e,
					count: t
				}) => ({
					[e]: {
						count: t,
						style: d.b.Numbered
					}
				}),
				j = (e, t, n) => ({
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
				O = () => async (e, t, {
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
					c ? (e(b(c)), e(Object(r.d)())) : e(h())
				};
			const p = () => async e => {
				const t = m({
					key: d.c.MessageTab,
					count: 0
				});
				e(l(t))
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
			const b = Object(u.a)(a.b);
			var l = n("./src/reddit/actions/chat/unreadCount.ts"),
				h = n("./src/reddit/actions/survey/index.ts"),
				m = n("./src/reddit/actions/tabBadging.ts"),
				j = n("./src/reddit/selectors/chat.ts"),
				O = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts");
			t.default = (e, t) => n => {
				const c = Object(O.a)(t());
				switch (n.type) {
					case r.a: {
						const r = n.payload,
							a = c ? Object(m.b)(t()) : Object(j.b)(t());
						if (!s()(r, a)) {
							const t = Object(d.d)(r.basicChannelCount, r.subredditChannelCount, r.subredditMentionCount);
							e(c ? Object(d.a)(t) : Object(l.c)(r)), e(Object(m.d)())
						}
					}
					break;
				case a.b:
					n.payload === o.a.SubredditChatFtux && e(b(o.a.SubredditChatFtux));
					break;
				case i.a:
					e(Object(h.e)())
				}
			}
		},
		"./src/reddit/actions/chat/unreadCount.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
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
				REQUEST_FAILED: b,
				REQUEST_PENDING: l,
				REQUEST_SUCCESS: h
			} = c, m = Object(r.a)(u), j = Object(r.a)(b), O = Object(r.a)(l), p = Object(r.a)(h);
			let x;
			const f = 5 * s.fb,
				g = () => async (e, t, {
					apiContext: n
				}) => {
					const c = t();
					if (!Object(d.J)(c) || !Object(o.d)(c)) return clearTimeout(x);
					x || e((() => async (e, t, {
						apiContext: n
					}) => {
						const c = t(),
							{
								session: s
							} = c.user;
						if (s && Object(d.J)(c) && Object(o.d)(c)) {
							e(O());
							const t = await Object(a.h)(n(), s);
							t && t.ok ? (e(p({
								basicChannelCount: t.body.unread_count || 0,
								subredditChannelCount: t.body.subreddit_unread_count || 0
							})), e(Object(i.d)())) : e(j({
								error: t.error
							}))
						}
					})()), x = setTimeout(() => {
						e(g())
					}, f)
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
				return p
			})), n.d(t, "c", (function() {
				return f
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
				b = n("./src/reddit/selectors/appBadges.ts"),
				l = n("./src/reddit/selectors/chat.ts"),
				h = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				m = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/actions/appBadgeIndicators/index.ts");
			const p = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				x = Object(r.a)(p),
				f = (e, t) => {
					e <= 0 ? s.a.write(() => {
						Object(d.b)(!1), window.document.title = t
					}) : s.a.write(() => {
						Object(d.b)(), window.document.title = `(${e}) ${t}`
					})
				},
				g = Object(c.c)({
					basicChannelCount: b.e,
					subredditChannelCount: b.d,
					subredditMentionCount: b.c
				}),
				C = e => {
					const t = Object(h.a)(e);
					return {
						inboxCount: t ? Object(b.h)(e) : Object(j.E)(e) || 0,
						basicChannelCount: t ? Object(b.e)(e) : Object(l.a)(e) || 0
					}
				},
				E = () => async (e, t) => {
					const n = t(),
						c = Object(o.e)(n, {}),
						s = Object(h.a)(n),
						r = Object(j.I)(n) || Object(j.J)(n),
						a = Object(m.c)(n);
					let i = 0;
					r && c && (i = s ? a ? Object(b.i)(n) : Object(b.j)(n) : (e => {
						const {
							inboxCount: t,
							basicChannelCount: n
						} = C(e);
						return t + n
					})(n), f(i, c), e(x({
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
					if (Object(h.a)(c)) {
						const n = Object(b.e)(c),
							s = Object(b.h)(c),
							{
								basicChannelCount: r,
								inboxCount: a
							} = e;
						if (n !== r) {
							const e = Object(O.e)({
								count: r,
								key: u.c.ChatTab
							});
							t(Object(O.a)(e))
						}
						if (a && a !== s) {
							const e = Object(O.e)({
								count: a,
								key: u.c.MessageTab
							});
							t(Object(O.a)(e))
						}(n !== r || a && a !== s) && t(E())
					} else {
						const n = Object(l.a)(c),
							s = Object(l.b)(c),
							r = Object(j.E)(c),
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
				return b
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
				b = e => {
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
				return b
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

			function b(e, t, n) {
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
				return b
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "i", (function() {
				return j
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
				b = Object(c.a)(a, e => e && e.activityTab && e.activityTab.count || 0),
				l = Object(c.a)(a, e => e && e.messageTab && e.messageTab.count || 0),
				h = Object(c.a)(b, l, (e, t) => e + t),
				m = Object(c.a)(i, l, (e, t) => e + t),
				j = Object(c.a)(i, h, (e, t) => e + t)
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
					return Object(r.a)(n)(e, t)
				}
		},
		"./src/reddit/selectors/experiments/inboxAppBadgingGql.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var c = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const o = Object(c.a)(e => Object(r.c)(e, {
					experimentName: s.gc,
					experimentEligibilitySelector: d
				}), a.a),
				d = e => Object(i.I)(e) || Object(i.J)(e),
				u = Object(c.a)(o, e => e === s.lc.Enabled)
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "d", (function() {
				return O
			}));
			var c = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const o = e => Object(i.I)(e) || Object(i.J)(e),
				d = Object(c.a)(e => Object(r.c)(e, {
					experimentName: s.Y,
					experimentEligibilitySelector: o
				}), a.a),
				u = Object(c.a)(d, e => e === s.oc.Enabled),
				b = Object(c.a)(e => Object(r.c)(e, {
					experimentName: s.ic,
					experimentEligibilitySelector: o
				}), a.a),
				l = Object(c.a)(u, b, (e, t) => e && t === s.nc.Enabled),
				h = Object(c.a)(e => Object(r.c)(e, {
					experimentName: s.hc,
					experimentEligibilitySelector: o
				}), a.a),
				m = Object(c.a)(h, e => e === s.mc.Enabled),
				j = Object(c.a)(e => Object(r.c)(e, {
					experimentName: s.bb,
					experimentEligibilitySelector: o
				}), a.a),
				O = Object(c.a)(u, j, (e, t) => e && t === s.jb.Enabled)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RedesignChat.daaf2e84b80b9bbbb131.js.map