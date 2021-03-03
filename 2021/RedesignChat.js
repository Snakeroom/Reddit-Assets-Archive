// https://www.redditstatic.com/desktop2x/RedesignChat.62177d8c0aa8650f8778.js
// Retrieved at 3/3/2021, 4:50:06 PM by Reddit Dataminer v1.0.0
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
		"./src/chat/initializer.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "default", (function() {
				return me
			}));
			var s = n("./node_modules/history/esm/history.js"),
				c = n("./node_modules/js-cookie/src/js.cookie.js"),
				r = n.n(c),
				a = n("./node_modules/redux-thunk/es/index.js"),
				i = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/initializeClient/index.tsx"),
				d = n("./src/lib/matchRoute/index.ts"),
				u = n("./src/reduxMiddleware/apiContext.ts"),
				l = n("./src/reduxMiddleware/gqlContext.ts"),
				b = n("./src/chat/actions/apiRequestHeaders.ts"),
				h = n("./src/chat/actions/notifications.ts"),
				m = n("./src/chat/actions/platform.ts"),
				p = n("./src/chat/actions/session.ts"),
				f = n("./src/chat/actions/user.ts"),
				x = n("./node_modules/react/index.js"),
				j = n.n(x),
				g = n("./node_modules/react-redux/es/index.js"),
				O = n("./src/lib/CSSVariableProvider/index.tsx"),
				C = n("./src/lib/lessComponent.tsx"),
				E = n("./src/chat/components/MinimizedPortalContainer/index.tsx"),
				_ = n("./src/chat/components/Root/index.tsx"),
				v = n("./src/chat/constants/container.ts"),
				y = n("./src/chat/constants/zIndex.ts"),
				S = n("./src/chat/helpers/chatSelector.ts"),
				N = n("./src/chat/components/PortalContainer/index.m.less"),
				T = n.n(N);
			const {
				embed: w,
				hidden: R
			} = v.b;

			function I(e) {
				return void 0 !== e ? e : -1
			}
			const A = C.a.wrapped(e => j.a.createElement("div", {
					className: e.className,
					style: {
						zIndex: y.a
					}
				}, e.children), "BasePortalContainer", T.a),
				D = C.a.wrapped(e => j.a.createElement("div", {
					className: e.className,
					style: {
						zIndex: y.a,
						width: `${I(w.width)}px`,
						height: `${I(w.height)}px`
					}
				}, e.children), "EmbedPortalContainer", T.a),
				M = C.a.wrapped(e => j.a.createElement("div", {
					className: e.className,
					style: {
						zIndex: y.a,
						width: `${I(R.width)}px`,
						height: `${I(R.height)}px`
					}
				}, e.children), "HiddenPortalContainer", T.a),
				P = C.a.wrapped(E.a, "MinimizedRedesignPortalContainer", T.a),
				B = A,
				U = Object(S.a)({
					container: e => e && e.container && e.container.size
				});

			function k(e) {
				switch (e.container) {
					case v.a.EMBED:
						return j.a.createElement(D, null, e.children);
					case v.a.HIDDEN:
						return j.a.createElement(M, null, e.children);
					case v.a.FULL:
						return j.a.createElement(B, null, e.children);
					case v.a.MINIMIZED:
						return j.a.createElement(P, null);
					default:
						return j.a.createElement(D, null, e.children)
				}
			}

			function q(e, t) {
				const n = Object(g.b)(U)(k);
				return j.a.createElement("div", null, Object(O.d)(j.a.createElement(n, null, Object(_.a)(e, t)), document.body))
			}
			var z = n("./src/chat/customMiddleware/containerSize.ts"),
				L = n("./src/chat/customMiddleware/draftMessageText.ts"),
				G = n("./src/chat/customMiddleware/iframeDispatcher.ts"),
				F = n("./src/chat/customMiddleware/lastSelectedChannel.ts"),
				H = n("./src/chat/customMiddleware/loggedOutPreferencesSync.ts"),
				$ = n("./src/chat/customMiddleware/sendbirdToken.ts"),
				Q = n("./src/chat/customMiddleware/title.ts"),
				W = n("./src/chat/customMiddleware/tokenRefresher.ts"),
				Y = n("./src/chat/customMiddleware/tracking.ts"),
				J = n("./src/chat/customMiddleware/unreadMessageCount.ts"),
				K = n("./node_modules/lodash/uniqueId.js"),
				V = n.n(K),
				X = n("./src/chat/constants/theme.ts"),
				Z = n("./src/chat/models/Theme/index.ts"),
				ee = n("./src/chat/reducers/meta/index.ts"),
				te = n("./src/chat/reducers/platform/index.ts"),
				ne = n("./src/chat/reducers/promos/index.ts"),
				se = n("./src/chat/selectors/platform.ts");
			const ce = (e, t) => (e.chat && e.chat.promos && (t.promos = {
					...ne.a,
					...e.chat.promos
				}), t),
				re = (e, t) => {
					const {
						account: n,
						language: s,
						loid: c,
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
						language: s,
						loid: c,
						prefs: r,
						reddaid: a,
						sessionTracker: o,
						session: i && i.unsafeLoggedOut ? null : i
					}, t
				},
				ae = e => (e.meta = {
					...ee.a,
					isRedesign: !0
				}, e),
				ie = e => {
					if (e.user && e.user.prefs && e.user.prefs.nightmode) {
						const {
							NIGHT: t,
							REDDIT: n
						} = X.b, {
							nightmode: s
						} = e.user.prefs, c = s ? t : n;
						e.themes = {
							current: Z.a[c],
							cached: {}
						}, e.user.prefs.globalTheme = c
					}
					return e
				},
				oe = (e, t, n) => {
					const c = V()(),
						r = Object(s.c)(t.location.pathname, void 0, c),
						a = Object(d.a)(Object(s.e)(r), n),
						i = Object(te.b)(te.a, Object(m.e)({
							location: r,
							action: "PUSH",
							routeMatch: a
						}));
					return e.platform = {
						...i
					}, e
				},
				de = e => {
					const t = Object(se.e)(e);
					return e.sidebarTabs = {
						activeIndex: t,
						lastChannelIdPerTab: {}
					}, e
				};
			var ue = n("./src/chat/reducers/index.ts"),
				le = n("./src/chat/routes/index.ts");
			const be = Object(u.a)({
					actionDispatchers: {
						reddaidReceived: f.r,
						loidReceived: f.q,
						sessionTrackerReceived: f.u
					},
					cookies: r.a,
					receivedActions: {
						headersReceived: b.a,
						loidReceived: f.e,
						reddaidReceived: f.f,
						sessionTrackerReceived: f.g,
						userAuthenticated: p.a,
						userLoggedOut: p.b,
						userReauthenticated: p.c
					},
					statsAppName: i.l.Chat
				}),
				he = Object(l.a)(be.apiContext);

			function me(e, t, n = "/chat") {
				var c, r;
				const u = document.getElementById("2x-container"),
					l = document.createElement("div");
				u.appendChild(l);
				let b = n;
				return Object(z.b)(null === (r = null === (c = e.user) || void 0 === c ? void 0 : c.account) || void 0 === r ? void 0 : r.id) === v.a.MINIMIZED && (b = "/chat/minimize"), Object(o.a)({
					reducerMap: ue.a,
					routes: le.a,
					apiContext: be.apiContext,
					appFactory: q,
					appName: i.l.Chat,
					history: Object(s.d)({
						initialEntries: [b],
						initialIndex: 0
					}),
					customMiddleware: [a.a.withExtraArgument({
						routes: le.a,
						apiContext: be.apiContext,
						gqlContext: he.gqlContext
					}), be.middleware, W.a, $.a, G.a, H.a, Object(Y.a)(t), z.a, L.a, J.a, F.a, Q.a],
					modifyInitialData: ({
						initialData: t,
						browserHistory: n
					}) => (t = re(e, t), t = ae(t), t = ie(t), t = ce(e, t), t = oe(t, n, le.a), t = de(t)),
					preRender: ({
						browserHistory: e,
						routes: t,
						store: n
					}) => {
						return n.dispatch(Object(f.l)()), e.listen((e, c) => {
							const r = Object(d.a)(Object(s.e)(e), t);
							n.dispatch(Object(m.d)(e, c, r)), n.dispatch(Object(f.l)())
						}), "undefined" != typeof window && window.addEventListener("load", async () => {
							n.dispatch(Object(h.a)(!1, !1))
						}), {}
					},
					gqlContext: he.gqlContext,
					target: l,
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
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "b", (function() {
				return x
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				r = n("./src/reddit/actions/tabBadging.ts"),
				a = n("./src/graphql/operations/BadgeIndicators.json"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				o = e => Object(i.a)(e, {
					...a
				}),
				d = n("./src/reddit/models/Badge/index.ts");
			const u = Object(s.a)(c.c),
				l = Object(s.a)(c.b),
				b = Object(s.a)(c.d),
				h = Object(s.a)(c.a),
				m = ({
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
				f = () => async (e, t, {
					gqlContext: n
				}) => {
					e(u());
					const s = await async function(e) {
						const t = await o(e());
						if (t.ok && t.body) {
							return function(e) {
								return e && e.data && e.data.badgeIndicators
							}(t.body)
						}
					}(n);
					s ? (e(l(s)), e(Object(r.d)())) : e(h())
				};
			const x = () => async e => {
				const t = m({
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
				p = n("./src/reddit/selectors/chat.ts"),
				f = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts");
			t.default = (e, t) => n => {
				const s = Object(f.a)(t());
				switch (n.type) {
					case r.a: {
						const r = n.payload,
							a = s ? Object(m.b)(t()) : Object(p.b)(t());
						if (!c()(r, a)) {
							const t = Object(d.d)(r.basicChannelCount, r.subredditChannelCount, r.subredditMentionCount);
							e(s ? Object(d.a)(t) : Object(b.c)(r)), e(Object(m.d)())
						}
					}
					break;
				case a.b:
					n.payload === o.a.SubredditChatFtux && e(l(o.a.SubredditChatFtux));
					break;
				case i.a:
					e(Object(h.a)())
				}
			}
		},
		"./src/reddit/actions/chat/unreadCount.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "d", (function() {
				return O
			}));
			var s, c = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/chat/endpoints/sendbird/index.ts"),
				i = n("./src/reddit/actions/tabBadging.ts"),
				o = n("./src/reddit/selectors/chat.ts"),
				d = n("./src/reddit/selectors/user.ts");
			! function(e) {
				e.SYNC = "UNREAD_COUNT__SYNC", e.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", e.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", e.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(s || (s = {}));
			const {
				SYNC: u,
				REQUEST_FAILED: l,
				REQUEST_PENDING: b,
				REQUEST_SUCCESS: h
			} = s, m = Object(r.a)(u), p = Object(r.a)(l), f = Object(r.a)(b), x = Object(r.a)(h);
			let j;
			const g = 5 * c.db,
				O = () => async (e, t, {
					apiContext: n
				}) => {
					const s = t();
					if (!Object(d.J)(s) || !Object(o.d)(s)) return clearTimeout(j);
					j || e((() => async (e, t, {
						apiContext: n
					}) => {
						const s = t(),
							{
								session: c
							} = s.user;
						if (c && Object(d.J)(s) && Object(o.d)(s)) {
							e(f());
							const t = await Object(a.f)(n(), c);
							t && t.ok ? (e(x({
								basicChannelCount: t.body.unread_count || 0,
								subredditChannelCount: t.body.subreddit_unread_count || 0
							})), e(Object(i.d)())) : e(p({
								error: t.error
							}))
						}
					})()), j = setTimeout(() => {
						e(O())
					}, g)
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
				return x
			})), n.d(t, "c", (function() {
				return g
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
				h = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				m = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				f = n("./src/reddit/actions/appBadgeIndicators/index.ts");
			const x = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				j = Object(r.a)(x),
				g = (e, t) => {
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
					const t = Object(h.a)(e);
					return {
						inboxCount: t ? Object(l.h)(e) : Object(p.E)(e) || 0,
						basicChannelCount: t ? Object(l.e)(e) : Object(b.a)(e) || 0
					}
				},
				E = () => async (e, t) => {
					const n = t(),
						s = Object(o.e)(n, {}),
						c = Object(h.a)(n),
						r = Object(p.I)(n) || Object(p.J)(n),
						a = Object(m.c)(n);
					let i = 0;
					r && s && (i = c ? a ? Object(l.i)(n) : Object(l.j)(n) : (e => {
						const {
							inboxCount: t,
							basicChannelCount: n
						} = C(e);
						return t + n
					})(n), g(i, s), e(j({
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
					if (Object(h.a)(s)) {
						const n = Object(l.e)(s),
							c = Object(l.h)(s),
							{
								basicChannelCount: r,
								inboxCount: a
							} = e;
						if (n !== r) {
							const e = Object(f.e)({
								count: r,
								key: u.c.ChatTab
							});
							t(Object(f.a)(e))
						}
						if (a && a !== c) {
							const e = Object(f.e)({
								count: a,
								key: u.c.MessageTab
							});
							t(Object(f.a)(e))
						}(n !== r || a && a !== c) && t(E())
					} else {
						const n = Object(b.a)(s),
							c = Object(b.b)(s),
							r = Object(p.E)(s),
							{
								basicChannelCount: o,
								inboxCount: d
							} = e;
						n !== o && t(Object(a.b)({
							...c,
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
				e.ActivityTab = "activityTab", e.ChatTab = "chatTab", e.DirectMessages = "directMessages", e.MessageTab = "messageTab", e.ChatRooms = "chatRooms", e.ChatRoomMentions = "chatRoomMentions"
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
				return h
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/selectors/chat.ts"),
				r = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts");
			const a = e => e.appBadges.badges,
				i = Object(s.a)(r.a, a, c.a, (e, t, n) => e ? t && t.directMessages && t.directMessages.count || 0 : n),
				o = Object(s.a)(a, e => e && e.chatRooms && e.chatRooms.count || 0),
				d = Object(s.a)(a, e => e && e.chatRoomMentions && e.chatRoomMentions.count || 0),
				u = Object(s.a)(r.a, c.a, i, o, d, (e, t, n, s, c) => {
					if (e) {
						return n + s + c > 0
					}
					return t > 0
				}),
				l = Object(s.a)(a, e => e && e.activityTab && e.activityTab.count || 0),
				b = Object(s.a)(a, e => e && e.messageTab && e.messageTab.count || 0),
				h = Object(s.a)(l, b, (e, t) => e + t),
				m = Object(s.a)(i, b, (e, t) => e + t),
				p = Object(s.a)(i, h, (e, t) => e + t)
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
				i = Object(s.a)(a, e => e.basicChannelCount),
				o = (Object(s.a)(a, e => e.subredditChannelCount), e => !(e.chat.isInited || e.chat.unread.api.pending)),
				d = (e, t) => {
					const {
						chatConfig: n
					} = c.c;
					return Object(r.a)(n)(e, t)
				}
		},
		"./src/reddit/selectors/experiments/inboxAppBadgingGql.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const o = Object(s.a)(e => Object(r.c)(e, {
					experimentName: c.Tb,
					experimentEligibilitySelector: d
				}), a.a),
				d = e => Object(i.I)(e) || Object(i.J)(e),
				u = Object(s.a)(o, e => e === c.Zb.Enabled)
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const o = Object(s.a)(e => Object(r.c)(e, {
					experimentName: c.Wb,
					experimentEligibilitySelector: d
				}), a.a),
				d = e => Object(i.I)(e) || Object(i.J)(e),
				u = Object(s.a)(o, e => e === c.cc.Redesign),
				l = Object(s.a)(e => Object(r.c)(e, {
					experimentName: c.Vb,
					experimentEligibilitySelector: d
				}), a.a),
				b = Object(s.a)(l, e => e === c.bc.Enabled),
				h = Object(s.a)(e => Object(r.c)(e, {
					experimentName: c.Ub,
					experimentEligibilitySelector: d
				}), a.a),
				m = Object(s.a)(h, e => e === c.ac.Enabled)
		}
	},
	0, ["ChatEmpty", "ChatPage"]
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RedesignChat.62177d8c0aa8650f8778.js.map