// https://www.redditstatic.com/desktop2x/RedesignChat.9614efe4ae908c7c0258.js
// Retrieved at 3/18/2021, 3:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["RedesignChat"], {
		"./node_modules/lodash/uniqueId.js": function(t, e, n) {
			var s = n("./node_modules/lodash/toString.js"),
				c = 0;
			t.exports = function(t) {
				var e = ++c;
				return s(t) + e
			}
		},
		"./src/chat/initializer.ts": function(t, e, n) {
			"use strict";
			n.r(e), n.d(e, "default", (function() {
				return $
			}));
			var s = n("./node_modules/history/esm/history.js"),
				c = n("./node_modules/js-cookie/src/js.cookie.js"),
				r = n.n(c),
				a = n("./node_modules/redux-thunk/es/index.js"),
				i = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/initializeClient/index.tsx"),
				d = n("./src/lib/matchRoute/index.ts"),
				u = n("./src/reduxMiddleware/apiContext.ts"),
				b = n("./src/reduxMiddleware/gqlContext.ts"),
				l = n("./src/chat/actions/apiRequestHeaders.ts"),
				h = n("./src/chat/actions/notifications.ts"),
				m = n("./src/chat/actions/platform.ts"),
				f = n("./src/chat/actions/session.ts"),
				p = n("./src/chat/actions/user.ts"),
				j = n("./src/chat/components/PortalContainer/index.tsx"),
				g = n("./src/chat/customMiddleware/containerSize.ts"),
				O = n("./src/chat/customMiddleware/draftMessageText.ts"),
				x = n("./src/chat/customMiddleware/iframeDispatcher.ts"),
				C = n("./src/chat/customMiddleware/lastSelectedChannel.ts"),
				E = n("./src/chat/customMiddleware/loggedOutPreferencesSync.ts"),
				_ = n("./src/chat/customMiddleware/sendbirdToken.ts"),
				y = n("./src/chat/customMiddleware/title.ts"),
				S = n("./src/chat/customMiddleware/tokenRefresher.ts"),
				v = n("./src/chat/customMiddleware/tracking.ts"),
				T = n("./src/chat/customMiddleware/unreadMessageCount.ts"),
				R = n("./node_modules/lodash/uniqueId.js"),
				A = n.n(R),
				N = n("./src/chat/constants/theme.ts"),
				D = n("./src/chat/models/Theme/index.ts"),
				w = n("./src/chat/reducers/meta/index.ts"),
				M = n("./src/chat/reducers/platform/index.ts"),
				k = n("./src/chat/reducers/promos/index.ts"),
				B = n("./src/chat/selectors/platform.ts");
			const I = (t, e) => (t.chat && t.chat.promos && (e.promos = {
					...k.a,
					...t.chat.promos
				}), e),
				U = (t, e) => {
					const {
						account: n,
						language: s,
						loid: c,
						prefs: r,
						reddaid: a,
						session: i,
						sessionTracker: o
					} = t.user;
					return e.user = {
						...e.user,
						account: n ? {
							commentKarma: n.commentKarma,
							created: n.created,
							inChat: n.inChat,
							id: n.id,
							isNSFW: n.isNSFW,
							linkKarma: n.postKarma,
							name: n.displayText || "",
							prefNightmode: t.user.prefs.nightmode,
							profileImg: n.accountIcon
						} : null,
						language: s,
						loid: c,
						prefs: r,
						reddaid: a,
						sessionTracker: o,
						session: i && i.unsafeLoggedOut ? null : i
					}, e
				},
				P = t => (t.meta = {
					...w.a,
					isRedesign: !0
				}, t),
				q = t => {
					if (t.user && t.user.prefs && t.user.prefs.nightmode) {
						const {
							NIGHT: e,
							REDDIT: n
						} = N.b, {
							nightmode: s
						} = t.user.prefs, c = s ? e : n;
						t.themes = {
							current: D.a[c],
							cached: {}
						}, t.user.prefs.globalTheme = c
					}
					return t
				},
				G = (t, e, n) => {
					const c = A()(),
						r = Object(s.c)(e.location.pathname, void 0, c),
						a = Object(d.a)(Object(s.e)(r), n),
						i = Object(M.b)(M.a, Object(m.e)({
							location: r,
							action: "PUSH",
							routeMatch: a
						}));
					return t.platform = {
						...i
					}, t
				},
				L = t => {
					const e = Object(B.e)(t);
					return t.sidebarTabs = {
						activeIndex: e,
						lastChannelIdPerTab: {}
					}, t
				};
			var F = n("./src/chat/reducers/index.ts"),
				K = n("./src/chat/routes/index.ts");
			const Q = Object(u.a)({
					actionDispatchers: {
						reddaidReceived: p.r,
						loidReceived: p.q,
						sessionTrackerReceived: p.u
					},
					cookies: r.a,
					receivedActions: {
						headersReceived: l.a,
						loidReceived: p.e,
						reddaidReceived: p.f,
						sessionTrackerReceived: p.g,
						userAuthenticated: f.a,
						userLoggedOut: f.b,
						userReauthenticated: f.c
					},
					statsAppName: i.l.Chat
				}),
				H = Object(b.a)(Q.apiContext);

			function $(t, e, n = "/chat/minimize") {
				const c = document.getElementById("2x-container"),
					r = document.createElement("div");
				return c.appendChild(r), Object(o.a)({
					reducerMap: F.a,
					routes: K.a,
					apiContext: Q.apiContext,
					appFactory: j.a,
					appName: i.l.Chat,
					history: Object(s.d)({
						initialEntries: [n],
						initialIndex: 0
					}),
					customMiddleware: [a.a.withExtraArgument({
						routes: K.a,
						apiContext: Q.apiContext,
						gqlContext: H.gqlContext
					}), Q.middleware, S.a, _.a, x.a, E.a, Object(v.a)(e), g.a, O.a, T.a, C.a, y.a],
					modifyInitialData: ({
						initialData: e,
						browserHistory: n
					}) => (e = U(t, e), e = P(e), e = q(e), e = I(t, e), e = G(e, n, K.a), e = L(e)),
					preRender: ({
						browserHistory: t,
						routes: e,
						store: n
					}) => {
						return n.dispatch(Object(p.l)()), t.listen((t, c) => {
							const r = Object(d.a)(Object(s.e)(t), e);
							n.dispatch(Object(m.d)(t, c, r)), n.dispatch(Object(p.l)())
						}), "undefined" != typeof window && window.addEventListener("load", async () => {
							n.dispatch(Object(h.a)(!1, !1))
						}), {}
					},
					gqlContext: H.gqlContext,
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
				return s
			})), n.d(e, "b", (function() {
				return c
			})), n.d(e, "d", (function() {
				return r
			})), n.d(e, "a", (function() {
				return a
			}));
			const s = "APP_BADGES__PENDING",
				c = "APP_BADGES__LOADED",
				r = "APP_BADGES__UPDATED",
				a = "APP_BADGES__FAILED"
		},
		"./src/reddit/actions/appBadgeIndicators/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return l
			})), n.d(e, "e", (function() {
				return m
			})), n.d(e, "d", (function() {
				return f
			})), n.d(e, "c", (function() {
				return p
			})), n.d(e, "b", (function() {
				return j
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				r = n("./src/reddit/actions/tabBadging.ts"),
				a = n("./src/graphql/operations/BadgeIndicators.json"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				o = t => Object(i.a)(t, {
					...a
				}),
				d = n("./src/reddit/models/Badge/index.ts");
			const u = Object(s.a)(c.c),
				b = Object(s.a)(c.b),
				l = Object(s.a)(c.d),
				h = Object(s.a)(c.a),
				m = ({
					key: t,
					count: e
				}) => ({
					[t]: {
						count: e,
						style: d.b.Numbered
					}
				}),
				f = (t, e, n) => ({
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
				p = () => async (t, e, {
					gqlContext: n
				}) => {
					t(u());
					const s = await async function(t) {
						const e = await o(t());
						if (e.ok && e.body) {
							return function(t) {
								return t && t.data && t.data.badgeIndicators
							}(e.body)
						}
					}(n);
					s ? (t(b(s)), t(Object(r.d)())) : t(h())
				};
			const j = () => async t => {
				const e = m({
					key: d.c.MessageTab,
					count: 0
				});
				t(l(e))
			}
		},
		"./src/reddit/actions/chat/proxy.ts": function(t, e, n) {
			"use strict";
			n.r(e);
			var s = n("./node_modules/lodash/isEqual.js"),
				c = n.n(s),
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
				f = n("./src/reddit/selectors/chat.ts"),
				p = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts");
			e.default = (t, e) => n => {
				const s = Object(p.a)(e());
				switch (n.type) {
					case r.a: {
						const r = n.payload,
							a = s ? Object(m.b)(e()) : Object(f.b)(e());
						if (!c()(r, a)) {
							const e = Object(d.d)(r.basicChannelCount, r.subredditChannelCount, r.subredditMentionCount);
							t(s ? Object(d.a)(e) : Object(l.c)(r)), t(Object(m.d)())
						}
					}
					break;
				case a.b:
					n.payload === o.a.SubredditChatFtux && t(b(o.a.SubredditChatFtux));
					break;
				case i.a:
					t(Object(h.e)())
				}
			}
		},
		"./src/reddit/actions/chat/unreadCount.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			})), n.d(e, "c", (function() {
				return m
			})), n.d(e, "b", (function() {
				return j
			})), n.d(e, "d", (function() {
				return x
			}));
			var s, c = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/chat/endpoints/sendbird/index.ts"),
				i = n("./src/reddit/actions/tabBadging.ts"),
				o = n("./src/reddit/selectors/chat.ts"),
				d = n("./src/reddit/selectors/user.ts");
			! function(t) {
				t.SYNC = "UNREAD_COUNT__SYNC", t.REQUEST_FAILED = "UNREAD_COUNT__REQUEST_FAILED", t.REQUEST_PENDING = "UNREAD_COUNT__REQUEST_PENDING", t.REQUEST_SUCCESS = "UNREAD_COUNT__REQUEST_SUCCESS"
			}(s || (s = {}));
			const {
				SYNC: u,
				REQUEST_FAILED: b,
				REQUEST_PENDING: l,
				REQUEST_SUCCESS: h
			} = s, m = Object(r.a)(u), f = Object(r.a)(b), p = Object(r.a)(l), j = Object(r.a)(h);
			let g;
			const O = 5 * c.db,
				x = () => async (t, e, {
					apiContext: n
				}) => {
					const s = e();
					if (!Object(d.K)(s) || !Object(o.d)(s)) return clearTimeout(g);
					g || t((() => async (t, e, {
						apiContext: n
					}) => {
						const s = e(),
							{
								session: c
							} = s.user;
						if (c && Object(d.K)(s) && Object(o.d)(s)) {
							t(p());
							const e = await Object(a.f)(n(), c);
							e && e.ok ? (t(j({
								basicChannelCount: e.body.unread_count || 0,
								subredditChannelCount: e.body.subreddit_unread_count || 0
							})), t(Object(i.d)())) : t(f({
								error: e.error
							}))
						}
					})()), g = setTimeout(() => {
						t(x())
					}, O)
				}
		},
		"./src/reddit/actions/inbox.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return c
			})), n.d(e, "b", (function() {
				return r
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const c = "INBOX__COUNT_UPDATE",
				r = Object(s.a)(c)
		},
		"./src/reddit/actions/tabBadging.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return f
			})), n.d(e, "c", (function() {
				return j
			})), n.d(e, "b", (function() {
				return g
			})), n.d(e, "e", (function() {
				return x
			})), n.d(e, "d", (function() {
				return C
			})), n.d(e, "f", (function() {
				return E
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/chat/unreadCount.ts"),
				a = n("./src/reddit/actions/inbox.ts"),
				i = n("./src/reddit/helpers/tabBadging/index.ts"),
				o = n("./src/reddit/models/Badge/index.ts"),
				d = n("./src/reddit/selectors/appBadges.ts"),
				u = n("./src/reddit/selectors/chat.ts"),
				b = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				l = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				m = n("./src/reddit/actions/appBadgeIndicators/index.ts");
			const f = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				p = Object(c.a)(f),
				j = t => {},
				g = Object(s.c)({
					basicChannelCount: d.f,
					subredditChannelCount: d.e,
					subredditMentionCount: d.d
				}),
				O = t => {
					const e = Object(b.a)(t);
					return {
						inboxCount: e ? Object(d.i)(t) : Object(h.F)(t) || 0,
						basicChannelCount: e ? Object(d.f)(t) : Object(u.a)(t) || 0
					}
				},
				x = () => async (t, e) => {
					const n = e(),
						s = Object(b.a)(n),
						c = Object(h.J)(n) || Object(h.K)(n),
						r = Object(l.d)(n);
					let a = 0;
					c && (a = s ? r ? Object(d.j)(n) : Object(d.k)(n) : (t => {
						const {
							inboxCount: e,
							basicChannelCount: n
						} = O(t);
						return e + n
					})(n), j(a), t(p({
						hasUnreadMessages: !!a
					})))
				}, C = () => async (t, e) => {
					{
						t(x());
						const n = O(e());
						Object(i.c)(n)
					}
				}, E = t => async (e, n) => {
					const s = n();
					if (Object(b.a)(s)) {
						const n = Object(d.f)(s),
							c = Object(d.i)(s),
							{
								basicChannelCount: r,
								inboxCount: a
							} = t;
						if (n !== r) {
							const t = Object(m.e)({
								count: r,
								key: o.c.ChatTab
							});
							e(Object(m.a)(t))
						}
						if (a && a !== c) {
							const t = Object(m.e)({
								count: a,
								key: o.c.MessageTab
							});
							e(Object(m.a)(t))
						}(n !== r || a && a !== c) && e(x())
					} else {
						const n = Object(u.a)(s),
							c = Object(u.b)(s),
							i = Object(h.F)(s),
							{
								basicChannelCount: o,
								inboxCount: d
							} = t;
						n !== o && e(Object(r.b)({
							...c,
							basicChannelCount: o
						})), d && d !== i && e(Object(a.b)({
							inboxCount: d
						})), (n !== o || d && d !== i) && e(x())
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
				return b
			}));
			var s = n("./src/config.ts");
			const c = `${s.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				r = `${s.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				a = `${s.a.assetPath}/img/favicon/favicon-32x32.png`,
				i = `${s.a.assetPath}/img/favicon/favicon-16x16.png`,
				o = "badgeCountSync",
				d = t => window.document.querySelector(`link[href="${t}"]`),
				u = (t = !0) => {
					const e = d(t ? a : c),
						n = d(t ? i : r);
					e && n && (e.href = t ? c : a, n.href = t ? r : i)
				},
				b = t => {
					navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: o,
						badgeCounts: t
					})
				}
		},
		"./src/reddit/models/Badge/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return s
			})), n.d(e, "e", (function() {
				return i
			})), n.d(e, "f", (function() {
				return o
			})), n.d(e, "d", (function() {
				return b
			})), n.d(e, "c", (function() {
				return c
			})), n.d(e, "b", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, c, r, a = n("./src/config.ts");

			function i(t) {
				return "userId" in t
			}

			function o(t) {
				return !(!t.extra || !t.extra.membership) && !!t.extra.membership.included
			}

			function d(t, e, n) {
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
							[a, i] = n.split("x").map(t => parseInt(t));
						(a < r.width && a >= t || i < r.height && i >= e) && (r = {
							height: i,
							width: a,
							url: c
						})
					}), !r.url && c.length) {
					const t = Object.keys(s)[0],
						e = s[t],
						[n, c] = t.split("x").map(t => parseInt(t));
					r = {
						height: c,
						width: n,
						url: e
					}
				}
				return r.url
			}

			function u(t) {
				return t.startsWith("https") ? t : `${a.a.assetPath}/${t}`
			}

			function b(t, e, n) {
				const s = d(t, e, n),
					c = d(2 * t, 2 * e, n);
				return {
					url: u(s),
					url2x: u(c)
				}
			}! function(t) {
				t.First = "p1", t.Second = "p2"
			}(s || (s = {})),
			function(t) {
				t.ActivityTab = "activityTab", t.ChatTab = "chatTab", t.DirectMessages = "directMessages", t.MessageTab = "messageTab", t.ChatRooms = "chatRooms", t.ChatRoomMentions = "chatRoomMentions"
			}(c || (c = {})),
			function(t) {
				t.Numbered = "NUMBERED", t.Filled = "FILLED"
			}(r || (r = {}))
		},
		"./src/reddit/selectors/appBadges.ts": function(t, e, n) {
			"use strict";
			n.d(e, "b", (function() {
				return o
			})), n.d(e, "f", (function() {
				return d
			})), n.d(e, "e", (function() {
				return u
			})), n.d(e, "d", (function() {
				return b
			})), n.d(e, "g", (function() {
				return l
			})), n.d(e, "a", (function() {
				return h
			})), n.d(e, "i", (function() {
				return m
			})), n.d(e, "h", (function() {
				return f
			})), n.d(e, "k", (function() {
				return p
			})), n.d(e, "j", (function() {
				return j
			})), n.d(e, "c", (function() {
				return g
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/selectors/chat.ts"),
				r = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				a = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const o = t => t.appBadges.badges,
				d = Object(s.a)(r.a, o, c.a, (t, e, n) => t ? e && e.directMessages && e.directMessages.count || 0 : n),
				u = Object(s.a)(o, t => t && t.chatRooms && t.chatRooms.count || 0),
				b = Object(s.a)(o, t => t && t.chatRoomMentions && t.chatRoomMentions.count || 0),
				l = Object(s.a)(r.a, c.a, d, u, b, (t, e, n, s, c) => {
					if (t) {
						return n + s + c > 0
					}
					return e > 0
				}),
				h = Object(s.a)(o, t => t && t.activityTab && t.activityTab.count || 0),
				m = Object(s.a)(o, t => t && t.messageTab && t.messageTab.count || 0),
				f = Object(s.a)(h, m, (t, e) => t + e),
				p = Object(s.a)(d, m, (t, e) => t + e),
				j = Object(s.a)(d, f, (t, e) => t + e),
				g = Object(s.a)(i.K, r.a, j, p, m, i.F, d, c.a, a.d, (t, e, n, s, c, r, a, i, o) => {
					if (!t) return 0;
					const d = () => {
						return {
							inboxCount: e ? c : r || 0,
							basicChannelCount: e ? a : i || 0
						}
					};
					let u = 0;
					return u = e ? o ? n : s : (() => {
						const {
							inboxCount: t,
							basicChannelCount: e
						} = d();
						return t + e
					})()
				})
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
			var s = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				r = n("./src/reddit/selectors/moderatorPermissions.ts");
			const a = t => t.chat.unread.count,
				i = Object(s.a)(a, t => t.basicChannelCount),
				o = (Object(s.a)(a, t => t.subredditChannelCount), t => !(t.chat.isInited || t.chat.unread.api.pending)),
				d = (t, e) => {
					const {
						chatConfig: n
					} = c.c;
					return Object(r.a)(n)(t, e)
				}
		},
		"./src/reddit/selectors/experiments/inboxAppBadgingGql.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const o = Object(s.a)(t => Object(r.c)(t, {
					experimentName: c.cc,
					experimentEligibilitySelector: d
				}), a.a),
				d = t => Object(i.J)(t) || Object(i.K)(t),
				u = Object(s.a)(o, t => t === c.ic.Enabled)
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(t, e, n) {
			"use strict";
			n.d(e, "d", (function() {
				return u
			})), n.d(e, "c", (function() {
				return l
			})), n.d(e, "b", (function() {
				return m
			})), n.d(e, "a", (function() {
				return p
			})), n.d(e, "f", (function() {
				return j
			})), n.d(e, "e", (function() {
				return O
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const o = Object(s.a)(t => Object(r.c)(t, {
					experimentName: c.fc,
					experimentEligibilitySelector: d
				}), a.a),
				d = t => Object(i.J)(t) || Object(i.K)(t),
				u = Object(s.a)(o, t => t === c.lc.Redesign),
				b = Object(s.a)(t => Object(r.c)(t, {
					experimentName: c.ec,
					experimentEligibilitySelector: d
				}), a.a),
				l = Object(s.a)(b, t => t === c.kc.Enabled),
				h = Object(s.a)(t => Object(r.c)(t, {
					experimentName: c.dc,
					experimentEligibilitySelector: d
				}), a.a),
				m = Object(s.a)(h, t => t === c.jc.Enabled),
				f = Object(s.a)(t => Object(r.c)(t, {
					experimentName: c.R,
					experimentEligibilitySelector: d
				}), a.a),
				p = Object(s.a)(f, t => t === c.eb.NoOverflow),
				j = Object(s.a)(f, t => t === c.eb.UndoBar),
				g = Object(s.a)(t => Object(r.c)(t, {
					experimentName: c.T,
					experimentEligibilitySelector: d
				}), a.a),
				O = Object(s.a)(u, g, (t, e) => t && e === c.gb.Enabled)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RedesignChat.9614efe4ae908c7c0258.js.map