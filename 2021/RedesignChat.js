// https://www.redditstatic.com/desktop2x/RedesignChat.29901523a3dc1f6f5abd.js
// Retrieved at 6/22/2021, 7:10:05 PM by Reddit Dataminer v1.0.0
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
				return ge
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
				v = n("./src/lib/CSSVariableProvider/index.tsx"),
				S = n("./src/lib/lessComponent.tsx"),
				N = n("./src/chat/components/MinimizedPortalContainer/index.tsx"),
				T = n("./src/chat/components/Root/index.tsx"),
				w = n("./src/chat/constants/container.ts"),
				R = n("./src/chat/helpers/chatSelector.ts"),
				A = n("./src/chat/components/PortalContainer/index.m.less"),
				P = n.n(A);
			const {
				embed: M,
				hidden: D
			} = w.b;

			function B(e) {
				return void 0 !== e ? e : -1
			}
			const I = S.a.wrapped(e => c.a.createElement("div", {
					className: e.className
				}, e.children), "BasePortalContainer", P.a),
				U = S.a.wrapped(e => c.a.createElement("div", {
					className: e.className,
					style: {
						width: `${B(M.width)}px`,
						height: `${B(M.height)}px`
					}
				}, e.children), "EmbedPortalContainer", P.a),
				k = S.a.wrapped(e => c.a.createElement("div", {
					className: e.className,
					style: {
						width: `${B(D.width)}px`,
						height: `${B(D.height)}px`
					}
				}, e.children), "HiddenPortalContainer", P.a),
				q = S.a.wrapped(N.a, "MinimizedRedesignPortalContainer", P.a),
				L = I,
				z = Object(R.a)({
					container: e => e && e.container && e.container.size
				});

			function G(e) {
				switch (e.container) {
					case w.a.EMBED:
						return c.a.createElement(U, null, e.children);
					case w.a.HIDDEN:
						return c.a.createElement(k, null, e.children);
					case w.a.FULL:
						return c.a.createElement(L, null, e.children);
					case w.a.MINIMIZED:
						return c.a.createElement(q, null);
					default:
						return c.a.createElement(U, null, e.children)
				}
			}
			var F = n("./src/chat/customMiddleware/chatThemeKey.ts"),
				H = n("./src/chat/customMiddleware/containerSize.ts"),
				K = n("./src/chat/customMiddleware/draftMessageText.ts"),
				Q = n("./src/chat/customMiddleware/iframeDispatcher.ts"),
				$ = n("./src/chat/customMiddleware/lastSelectedChannel.ts"),
				Y = n("./src/chat/customMiddleware/loggedOutPreferencesSync.ts"),
				V = n("./src/chat/customMiddleware/sendbirdToken.ts"),
				W = n("./src/chat/customMiddleware/title.ts"),
				J = n("./src/chat/customMiddleware/tokenRefresher.ts"),
				X = n("./src/chat/customMiddleware/tracking.ts"),
				Z = n("./src/chat/customMiddleware/unreadMessageCount.ts"),
				ee = n("./node_modules/lodash/uniqueId.js"),
				te = n.n(ee),
				ne = n("./src/chat/constants/theme.ts"),
				se = n("./src/chat/models/Theme/index.ts"),
				ce = n("./src/chat/reducers/meta/index.ts"),
				re = n("./src/chat/reducers/platform/index.ts"),
				ae = n("./src/chat/reducers/promos/index.ts"),
				ie = n("./src/chat/reducers/sidebar/sideBarAppearance/index.ts"),
				oe = n("./src/chat/selectors/platform.ts");
			const de = (e, t) => (e.chat && e.chat.promos && (t.promos = {
					...ae.a,
					...e.chat.promos
				}), t),
				ue = (e, t) => {
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
				le = e => (e.meta = {
					...ce.a,
					isRedesign: !0
				}, e),
				be = e => {
					if (e.user && e.user.prefs && e.user.prefs.nightmode) {
						const {
							NIGHT: t,
							REDDIT: n
						} = ne.b, {
							nightmode: s
						} = e.user.prefs, c = s ? t : n;
						e.themes = {
							current: se.e[c],
							chatTheme: null,
							cached: {}
						}, e.user.prefs.globalTheme = c
					}
					return e
				},
				me = (e, t, n) => {
					const s = te()(),
						c = Object(r.c)(t.location.pathname, void 0, s),
						a = Object(h.a)(Object(r.e)(c), n),
						i = Object(re.b)(re.a, Object(C.e)({
							location: c,
							action: "PUSH",
							routeMatch: a
						}));
					return e.platform = {
						...i
					}, e
				},
				he = e => {
					const t = Object(oe.e)(e);
					return e.sidebar = {
						activeIndex: t,
						lastChannelIdPerTab: {},
						sideBarAppearance: {
							isSidebarVisible: !1,
							sideBarComponentType: ie.a.CHANNELS
						}
					}, e
				};
			var pe = n("./src/chat/reducers/index.ts"),
				xe = n("./src/chat/routes/index.ts"),
				fe = n("./src/chat/customMiddleware/editNickname.ts");
			const je = Object(x.a)({
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
				Oe = Object(f.a)(je.apiContext);

			function ge(e, t, n = "/chat/minimize") {
				const s = document.getElementById("2x-container"),
					a = document.createElement("div");
				return s.appendChild(a), Object(m.a)({
					reducerMap: pe.a,
					routes: xe.a,
					apiContext: je.apiContext,
					gqlContext: Oe.gqlContext,
					appFactory: (e, t) => c.a.createElement(p.a.Provider, {
						value: {
							apiContext: je.apiContext,
							gqlContext: Oe.gqlContext
						}
					}, function(e, t) {
						const n = Object(y.b)(z)(G);
						return c.a.createElement("div", null, Object(v.d)(c.a.createElement(n, null, Object(T.a)(e, t)), document.body))
					}(e, t)),
					appName: l.l.Chat,
					history: Object(r.d)({
						initialEntries: [n],
						initialIndex: 0
					}),
					customMiddleware: [u.a.withExtraArgument({
						routes: xe.a,
						apiContext: je.apiContext,
						gqlContext: Oe.gqlContext
					}), je.middleware, J.a, V.a, Q.a, Y.a, Object(X.a)(t), H.a, F.a, K.a, fe.a, Z.a, $.a, W.a],
					postRender: ({
						store: e
					}) => {
						const t = d()([...Object(b.a)(Object(r.e)(location))]);
						e.dispatch(Object(O.d)(t))
					},
					modifyInitialData: ({
						initialData: t,
						browserHistory: n
					}) => (t = ue(e, t), t = le(t), t = be(t), t = de(e, t), t = me(t, n, xe.a), t = he(t)),
					preRender: ({
						browserHistory: e,
						routes: t,
						store: n
					}) => {
						return n.dispatch(Object(_.l)()), e.listen((e, s) => {
							const c = Object(h.a)(Object(r.e)(e), t);
							n.dispatch(Object(C.d)(e, s, c)), n.dispatch(Object(_.l)())
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
				return p
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "b", (function() {
				return f
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
					const s = await async function(e) {
						const t = await o(e());
						if (t.ok && t.body) {
							return function(e) {
								return e && e.data && e.data.badgeIndicators
							}(t.body)
						}
					}(n);
					s ? (e(l(s)), e(Object(r.d)())) : e(m())
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
				m = n("./src/reddit/actions/survey/index.ts"),
				h = n("./src/reddit/actions/tabBadging.ts"),
				p = n("./src/reddit/selectors/chat.ts"),
				x = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts");
			t.default = (e, t) => n => {
				const s = Object(x.a)(t());
				switch (n.type) {
					case r.a: {
						const r = n.payload,
							a = s ? Object(h.b)(t()) : Object(p.b)(t());
						if (!c()(r, a)) {
							const t = Object(d.d)(r.basicChannelCount, r.subredditChannelCount, r.subredditMentionCount);
							e(s ? Object(d.a)(t) : Object(b.c)(r)), e(Object(h.d)())
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
				return s
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "d", (function() {
				return g
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
				REQUEST_SUCCESS: m
			} = s, h = Object(r.a)(u), p = Object(r.a)(l), x = Object(r.a)(b), f = Object(r.a)(m);
			let j;
			const O = 5 * c.ib,
				g = () => async (e, t, {
					apiContext: n
				}) => {
					const s = t();
					if (!Object(d.K)(s) || !Object(o.d)(s)) return clearTimeout(j);
					j || e((() => async (e, t, {
						apiContext: n
					}) => {
						const s = t(),
							{
								session: c
							} = s.user;
						if (c && Object(d.K)(s) && Object(o.d)(s)) {
							e(x());
							const t = await Object(a.h)(n(), c);
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
				p = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/actions/appBadgeIndicators/index.ts");
			const f = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				j = Object(r.a)(f),
				O = (e, t) => {
					e <= 0 ? c.a.write(() => {
						Object(d.b)(!1), window.document.title = t
					}) : c.a.write(() => {
						Object(d.b)(), window.document.title = `(${e}) ${t}`
					})
				},
				g = Object(s.c)({
					basicChannelCount: l.e,
					subredditChannelCount: l.d,
					subredditMentionCount: l.c
				}),
				C = e => {
					const t = Object(m.a)(e);
					return {
						inboxCount: t ? Object(l.h)(e) : Object(p.F)(e) || 0,
						basicChannelCount: t ? Object(l.e)(e) : Object(b.a)(e) || 0
					}
				},
				E = () => async (e, t) => {
					const n = t(),
						s = Object(o.e)(n, {}),
						c = Object(m.a)(n),
						r = Object(p.J)(n) || Object(p.K)(n),
						a = Object(h.e)(n);
					let i = 0;
					r && s && (i = c ? a ? Object(l.i)(n) : Object(l.j)(n) : (e => {
						const {
							inboxCount: t,
							basicChannelCount: n
						} = C(e);
						return t + n
					})(n), O(i, s), e(j({
						hasUnreadMessages: !!i
					})))
				}, _ = () => async (e, t) => {
					{
						e(E());
						const n = C(t());
						Object(d.c)(n)
					}
				}, y = e => async (t, n) => {
					const s = n();
					if (Object(m.a)(s)) {
						const n = Object(l.e)(s),
							c = Object(l.h)(s),
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
						if (a && a !== c) {
							const e = Object(x.e)({
								count: a,
								key: u.c.MessageTab
							});
							t(Object(x.a)(e))
						}(n !== r || a && a !== c) && t(E())
					} else {
						const n = Object(b.a)(s),
							c = Object(b.b)(s),
							r = Object(p.F)(s),
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
				return m
			})), n.d(t, "j", (function() {
				return h
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
				m = Object(s.a)(l, b, (e, t) => e + t),
				h = Object(s.a)(i, b, (e, t) => e + t),
				p = Object(s.a)(i, m, (e, t) => e + t)
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
					experimentName: c.mc,
					experimentEligibilitySelector: d
				}), a.a),
				d = e => Object(i.J)(e) || Object(i.K)(e),
				u = Object(s.a)(o, e => e === c.pc.Enabled)
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return u
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "a", (function() {
				return j
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const o = e => Object(i.J)(e) || Object(i.K)(e),
				d = Object(s.a)(e => Object(r.c)(e, {
					experimentName: c.ab,
					experimentEligibilitySelector: o
				}), a.a),
				u = Object(s.a)(d, e => e === c.sc.Enabled),
				l = Object(s.a)(e => Object(r.c)(e, {
					experimentName: c.nc,
					experimentEligibilitySelector: o
				}), a.a),
				b = Object(s.a)(u, l, (e, t) => e && t === c.rc.Enabled),
				m = Object(s.a)(e => Object(r.c)(e, {
					experimentName: c.db,
					experimentEligibilitySelector: o
				}), a.a),
				h = Object(s.a)(u, m, (e, t) => e && t === c.mb.Enabled),
				p = Object(s.a)(e => Object(r.c)(e, {
					experimentName: c.Z,
					experimentEligibilitySelector: o
				}), a.a),
				x = Object(s.a)(p, e => e === c.qc.Banner_1st_time),
				f = Object(s.a)(p, e => e === c.qc.Tooltip_persist),
				j = Object(s.a)(p, e => e === c.qc.Tooltip_1st_time)
		},
		"./src/redditGQL/operations/BadgeIndicators.json": function(e) {
			e.exports = JSON.parse('{"id":"712476d48c90"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RedesignChat.29901523a3dc1f6f5abd.js.map