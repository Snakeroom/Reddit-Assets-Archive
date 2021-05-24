// https://www.redditstatic.com/desktop2x/RedesignChat.76dd0fe09a7af2dc94b9.js
// Retrieved at 5/24/2021, 1:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RedesignChat"], {
		"./src/chat/components/PortalContainer/index.m.less": function(t, e, n) {
			t.exports = {
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
		"./src/chat/initializer.ts": function(t, e, n) {
			"use strict";
			n.r(e), n.d(e, "default", (function() {
				return tt
			}));
			var c = n("./node_modules/history/esm/history.js"),
				s = n("./node_modules/js-cookie/src/js.cookie.js"),
				r = n.n(s),
				a = n("./node_modules/redux-thunk/es/index.js"),
				i = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/initializeClient/index.tsx"),
				d = n("./src/lib/matchRoute/index.ts"),
				u = n("./src/reduxMiddleware/apiContext.ts"),
				l = n("./src/reduxMiddleware/gqlContext.ts"),
				b = n("./src/chat/actions/apiRequestHeaders.ts"),
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
				v = n("./src/chat/helpers/chatSelector.ts"),
				S = n("./src/chat/components/PortalContainer/index.m.less"),
				w = n.n(S);
			const {
				embed: R,
				hidden: N
			} = y.b;

			function A(t) {
				return void 0 !== t ? t : -1
			}
			const D = C.a.wrapped(t => x.a.createElement("div", {
					className: t.className
				}, t.children), "BasePortalContainer", w.a),
				M = C.a.wrapped(t => x.a.createElement("div", {
					className: t.className,
					style: {
						width: `${A(R.width)}px`,
						height: `${A(R.height)}px`
					}
				}, t.children), "EmbedPortalContainer", w.a),
				P = C.a.wrapped(t => x.a.createElement("div", {
					className: t.className,
					style: {
						width: `${A(N.width)}px`,
						height: `${A(N.height)}px`
					}
				}, t.children), "HiddenPortalContainer", w.a),
				T = C.a.wrapped(E.a, "MinimizedRedesignPortalContainer", w.a),
				B = D,
				U = Object(v.a)({
					container: t => t && t.container && t.container.size
				});

			function I(t) {
				switch (t.container) {
					case y.a.EMBED:
						return x.a.createElement(M, null, t.children);
					case y.a.HIDDEN:
						return x.a.createElement(P, null, t.children);
					case y.a.FULL:
						return x.a.createElement(B, null, t.children);
					case y.a.MINIMIZED:
						return x.a.createElement(T, null);
					default:
						return x.a.createElement(M, null, t.children)
				}
			}

			function k(t, e) {
				const n = Object(f.b)(U)(I);
				return x.a.createElement("div", null, Object(g.d)(x.a.createElement(n, null, Object(_.a)(t, e)), document.body))
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
						headersReceived: b.a,
						loidReceived: O.e,
						reddaidReceived: O.f,
						sessionTrackerReceived: O.g,
						userAuthenticated: j.a,
						userLoggedOut: j.b,
						userReauthenticated: j.c
					},
					statsAppName: i.l.Chat
				}),
				Z = Object(l.a)(X.apiContext);

			function tt(t, e, n = "/chat/minimize") {
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
					}), X.middleware, Q.a, $.a, z.a, F.a, Object(Y.a)(e), q.a, L.a, J.a, G.a, H.a],
					modifyInitialData: ({
						initialData: e,
						browserHistory: n
					}) => (e = Object(V.d)(t, e), e = Object(V.a)(e), e = Object(V.b)(e), e = Object(V.c)(t, e), e = Object(V.g)(e, n, K.a), e = Object(V.f)(e), e = Object(V.h)(t, e)),
					preRender: ({
						browserHistory: t,
						routes: e,
						store: n
					}) => {
						return n.dispatch(Object(O.l)()), t.listen((t, s) => {
							const r = Object(d.a)(Object(c.e)(t), e);
							n.dispatch(Object(m.d)(t, s, r)), n.dispatch(Object(O.l)())
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
		"./src/graphql/operations/BadgeIndicators.json": function(t) {
			t.exports = JSON.parse('{"id":"712476d48c90"}')
		},
		"./src/reddit/actions/appBadgeIndicators/constants.ts": function(t, e, n) {
			"use strict";
			n.d(e, "c", (function() {
				return c
			})), n.d(e, "b", (function() {
				return s
			})), n.d(e, "d", (function() {
				return r
			})), n.d(e, "a", (function() {
				return a
			}));
			const c = "APP_BADGES__PENDING",
				s = "APP_BADGES__LOADED",
				r = "APP_BADGES__UPDATED",
				a = "APP_BADGES__FAILED"
		},
		"./src/reddit/actions/appBadgeIndicators/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return b
			})), n.d(e, "e", (function() {
				return m
			})), n.d(e, "d", (function() {
				return j
			})), n.d(e, "c", (function() {
				return O
			})), n.d(e, "b", (function() {
				return p
			}));
			var c = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				r = n("./src/reddit/actions/tabBadging.ts"),
				a = n("./src/graphql/operations/BadgeIndicators.json"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				o = t => Object(i.a)(t, {
					...a
				}),
				d = n("./src/reddit/models/Badge/index.ts");
			const u = Object(c.a)(s.c),
				l = Object(c.a)(s.b),
				b = Object(c.a)(s.d),
				h = Object(c.a)(s.a),
				m = ({
					key: t,
					count: e
				}) => ({
					[t]: {
						count: e,
						style: d.b.Numbered
					}
				}),
				j = (t, e, n) => ({
					[d.c.DirectMessages]: {
						count: t,
						style: d.b.Numbered
					},
					[d.c.ChatRooms]: {
						count: e,
						style: d.b.Numbered
					},
					[d.c.ChatRoomMentions]: {
						count: n,
						style: d.b.Numbered
					}
				}),
				O = () => async (t, e, {
					gqlContext: n
				}) => {
					t(u());
					const c = await async function(t) {
						const e = await o(t());
						if (e.ok && e.body) {
							return function(t) {
								return t && t.data && t.data.badgeIndicators
							}(e.body)
						}
					}(n);
					c ? (t(l(c)), t(Object(r.d)())) : t(h())
				};
			const p = () => async t => {
				const e = m({
					key: d.c.MessageTab,
					count: 0
				});
				t(b(e))
			}
		},
		"./src/reddit/actions/chat/proxy.ts": function(t, e, n) {
			"use strict";
			n.r(e);
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
				h = n("./src/reddit/actions/survey/index.ts"),
				m = n("./src/reddit/actions/tabBadging.ts"),
				j = n("./src/reddit/selectors/chat.ts"),
				O = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts");
			e.default = (t, e) => n => {
				const c = Object(O.a)(e());
				switch (n.type) {
					case r.a: {
						const r = n.payload,
							a = c ? Object(m.b)(e()) : Object(j.b)(e());
						if (!s()(r, a)) {
							const e = Object(d.d)(r.basicChannelCount, r.subredditChannelCount, r.subredditMentionCount);
							t(c ? Object(d.a)(e) : Object(b.c)(r)), t(Object(m.d)())
						}
					}
					break;
				case a.b:
					n.payload === o.a.SubredditChatFtux && t(l(o.a.SubredditChatFtux));
					break;
				case i.a:
					t(Object(h.e)())
				}
			}
		},
		"./src/reddit/actions/chat/unreadCount.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return c
			})), n.d(e, "c", (function() {
				return m
			})), n.d(e, "b", (function() {
				return p
			})), n.d(e, "d", (function() {
				return g
			}));
			var c, s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/chat/endpoints/sendbird/index.ts"),
				i = n("./src/reddit/actions/tabBadging.ts"),
				o = n("./src/reddit/selectors/chat.ts"),
				d = n("./src/reddit/selectors/user.ts");
			! function(t) {
				t.SYNC = "UNREAD_COUNT__SYNC", t.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", t.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", t.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(c || (c = {}));
			const {
				SYNC: u,
				REQUEST_FAILED: l,
				REQUEST_PENDING: b,
				REQUEST_SUCCESS: h
			} = c, m = Object(r.a)(u), j = Object(r.a)(l), O = Object(r.a)(b), p = Object(r.a)(h);
			let x;
			const f = 5 * s.fb,
				g = () => async (t, e, {
					apiContext: n
				}) => {
					const c = e();
					if (!Object(d.J)(c) || !Object(o.d)(c)) return clearTimeout(x);
					x || t((() => async (t, e, {
						apiContext: n
					}) => {
						const c = e(),
							{
								session: s
							} = c.user;
						if (s && Object(d.J)(c) && Object(o.d)(c)) {
							t(O());
							const e = await Object(a.h)(n(), s);
							e && e.ok ? (t(p({
								basicChannelCount: e.body.unread_count || 0,
								subredditChannelCount: e.body.subreddit_unread_count || 0
							})), t(Object(i.d)())) : t(j({
								error: e.error
							}))
						}
					})()), x = setTimeout(() => {
						t(g())
					}, f)
				}
		},
		"./src/reddit/actions/inbox.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			})), n.d(e, "b", (function() {
				return r
			}));
			var c = n("./src/lib/makeActionCreator/index.ts");
			const s = "INBOX__COUNT_UPDATE",
				r = Object(c.a)(s)
		},
		"./src/reddit/actions/tabBadging.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return p
			})), n.d(e, "c", (function() {
				return f
			})), n.d(e, "b", (function() {
				return g
			})), n.d(e, "e", (function() {
				return E
			})), n.d(e, "d", (function() {
				return _
			})), n.d(e, "f", (function() {
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
				h = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				m = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/actions/appBadgeIndicators/index.ts");
			const p = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				x = Object(r.a)(p),
				f = (t, e) => {
					t <= 0 ? s.a.write(() => {
						Object(d.b)(!1), window.document.title = e
					}) : s.a.write(() => {
						Object(d.b)(), window.document.title = `(${t}) ${e}`
					})
				},
				g = Object(c.c)({
					basicChannelCount: l.e,
					subredditChannelCount: l.d,
					subredditMentionCount: l.c
				}),
				C = t => {
					const e = Object(h.a)(t);
					return {
						inboxCount: e ? Object(l.h)(t) : Object(j.E)(t) || 0,
						basicChannelCount: e ? Object(l.e)(t) : Object(b.a)(t) || 0
					}
				},
				E = () => async (t, e) => {
					const n = e(),
						c = Object(o.e)(n, {}),
						s = Object(h.a)(n),
						r = Object(j.I)(n) || Object(j.J)(n),
						a = Object(m.b)(n);
					let i = 0;
					r && c && (i = s ? a ? Object(l.i)(n) : Object(l.j)(n) : (t => {
						const {
							inboxCount: e,
							basicChannelCount: n
						} = C(t);
						return e + n
					})(n), f(i, c), t(x({
						hasUnreadMessages: !!i
					})))
				}, _ = () => async (t, e) => {
					{
						t(E());
						const n = C(e());
						Object(d.c)(n)
					}
				}, y = t => async (e, n) => {
					const c = n();
					if (Object(h.a)(c)) {
						const n = Object(l.e)(c),
							s = Object(l.h)(c),
							{
								basicChannelCount: r,
								inboxCount: a
							} = t;
						if (n !== r) {
							const t = Object(O.e)({
								count: r,
								key: u.c.ChatTab
							});
							e(Object(O.a)(t))
						}
						if (a && a !== s) {
							const t = Object(O.e)({
								count: a,
								key: u.c.MessageTab
							});
							e(Object(O.a)(t))
						}(n !== r || a && a !== s) && e(E())
					} else {
						const n = Object(b.a)(c),
							s = Object(b.b)(c),
							r = Object(j.E)(c),
							{
								basicChannelCount: o,
								inboxCount: d
							} = t;
						n !== o && e(Object(a.b)({
							...s,
							basicChannelCount: o
						})), d && d !== r && e(Object(i.b)({
							inboxCount: d
						})), (n !== o || d && d !== r) && e(E())
					}
				}
		},
		"./src/reddit/helpers/tabBadging/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return o
			})), n.d(e, "b", (function() {
				return u
			})), n.d(e, "c", (function() {
				return l
			}));
			var c = n("./src/config.ts");
			const s = `${c.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				r = `${c.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				a = `${c.a.assetPath}/img/favicon/favicon-32x32.png`,
				i = `${c.a.assetPath}/img/favicon/favicon-16x16.png`,
				o = "badgeCountSync",
				d = t => window.document.querySelector(`link[href="${t}"]`),
				u = (t = !0) => {
					const e = d(t ? a : s),
						n = d(t ? i : r);
					e && n && (e.href = t ? s : a, n.href = t ? r : i)
				},
				l = t => {
					navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: o,
						badgeCounts: t
					})
				}
		},
		"./src/reddit/models/Badge/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return c
			})), n.d(e, "e", (function() {
				return i
			})), n.d(e, "f", (function() {
				return o
			})), n.d(e, "d", (function() {
				return l
			})), n.d(e, "c", (function() {
				return s
			})), n.d(e, "b", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var c, s, r, a = n("./src/config.ts");

			function i(t) {
				return "userId" in t
			}

			function o(t) {
				return !(!t.extra || !t.extra.membership) && !!t.extra.membership.included
			}

			function d(t, e, n) {
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
							[a, i] = n.split("x").map(t => parseInt(t));
						(a < r.width && a >= t || i < r.height && i >= e) && (r = {
							height: i,
							width: a,
							url: s
						})
					}), !r.url && s.length) {
					const t = Object.keys(c)[0],
						e = c[t],
						[n, s] = t.split("x").map(t => parseInt(t));
					r = {
						height: s,
						width: n,
						url: e
					}
				}
				return r.url
			}

			function u(t) {
				return t.startsWith("https") ? t : `${a.a.assetPath}/${t}`
			}

			function l(t, e, n) {
				const c = d(t, e, n),
					s = d(2 * t, 2 * e, n);
				return {
					url: u(c),
					url2x: u(s)
				}
			}! function(t) {
				t.First = "p1", t.Second = "p2"
			}(c || (c = {})),
			function(t) {
				t.ActivityTab = "activityTab", t.ChatTab = "chatTab", t.DirectMessages = "directMessages", t.MessageTab = "messageTab", t.ChatRooms = "chatRooms", t.ChatRoomMentions = "chatRoomMentions"
			}(s || (s = {})),
			function(t) {
				t.Numbered = "NUMBERED", t.Filled = "FILLED"
			}(r || (r = {}))
		},
		"./src/reddit/selectors/appBadges.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return a
			})), n.d(e, "e", (function() {
				return i
			})), n.d(e, "d", (function() {
				return o
			})), n.d(e, "c", (function() {
				return d
			})), n.d(e, "f", (function() {
				return u
			})), n.d(e, "a", (function() {
				return l
			})), n.d(e, "h", (function() {
				return b
			})), n.d(e, "g", (function() {
				return h
			})), n.d(e, "j", (function() {
				return m
			})), n.d(e, "i", (function() {
				return j
			}));
			var c = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/selectors/chat.ts"),
				r = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts");
			const a = t => t.appBadges.badges,
				i = Object(c.a)(r.a, a, s.a, (t, e, n) => t ? e && e.directMessages && e.directMessages.count || 0 : n),
				o = Object(c.a)(a, t => t && t.chatRooms && t.chatRooms.count || 0),
				d = Object(c.a)(a, t => t && t.chatRoomMentions && t.chatRoomMentions.count || 0),
				u = Object(c.a)(r.a, s.a, i, o, d, (t, e, n, c, s) => {
					if (t) {
						return n + c + s > 0
					}
					return e > 0
				}),
				l = Object(c.a)(a, t => t && t.activityTab && t.activityTab.count || 0),
				b = Object(c.a)(a, t => t && t.messageTab && t.messageTab.count || 0),
				h = Object(c.a)(l, b, (t, e) => t + e),
				m = Object(c.a)(i, b, (t, e) => t + e),
				j = Object(c.a)(i, h, (t, e) => t + e)
		},
		"./src/reddit/selectors/chat.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return a
			})), n.d(e, "a", (function() {
				return i
			})), n.d(e, "d", (function() {
				return o
			})), n.d(e, "c", (function() {
				return d
			}));
			var c = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				r = n("./src/reddit/selectors/moderatorPermissions.ts");
			const a = t => t.chat.unread.count,
				i = Object(c.a)(a, t => t.basicChannelCount),
				o = (Object(c.a)(a, t => t.subredditChannelCount), t => !(t.chat.isInited || t.chat.unread.api.pending)),
				d = (t, e) => {
					const {
						chatConfig: n
					} = s.c;
					return Object(r.a)(n)(t, e)
				}
		},
		"./src/reddit/selectors/experiments/inboxAppBadgingGql.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return u
			}));
			var c = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const o = Object(c.a)(t => Object(r.c)(t, {
					experimentName: s.gc,
					experimentEligibilitySelector: d
				}), a.a),
				d = t => Object(i.I)(t) || Object(i.J)(t),
				u = Object(c.a)(o, t => t === s.kc.Enabled)
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return u
			})), n.d(e, "a", (function() {
				return b
			})), n.d(e, "c", (function() {
				return m
			}));
			var c = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const o = t => Object(i.I)(t) || Object(i.J)(t),
				d = Object(c.a)(t => Object(r.c)(t, {
					experimentName: s.W,
					experimentEligibilitySelector: o
				}), a.a),
				u = Object(c.a)(d, t => t === s.mc.Enabled),
				l = Object(c.a)(t => Object(r.c)(t, {
					experimentName: s.hc,
					experimentEligibilitySelector: o
				}), a.a),
				b = Object(c.a)(u, l, (t, e) => t && e === s.lc.Enabled),
				h = Object(c.a)(t => Object(r.c)(t, {
					experimentName: s.Z,
					experimentEligibilitySelector: o
				}), a.a),
				m = Object(c.a)(u, h, (t, e) => t && e === s.hb.Enabled)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RedesignChat.76dd0fe09a7af2dc94b9.js.map