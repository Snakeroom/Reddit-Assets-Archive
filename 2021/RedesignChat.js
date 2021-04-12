// https://www.redditstatic.com/desktop2x/RedesignChat.8066a078b5d6a0269954.js
// Retrieved at 4/12/2021, 1:30:06 PM by Reddit Dataminer v1.0.0
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
				return W
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
				j = n("./src/chat/actions/user.ts"),
				p = n("./src/chat/components/PortalContainer/index.tsx"),
				O = n("./src/chat/customMiddleware/containerSize.ts"),
				g = n("./src/chat/customMiddleware/draftMessageText.ts"),
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
				w = n("./src/chat/models/Theme/index.ts"),
				D = n("./src/chat/reducers/meta/index.ts"),
				M = n("./src/chat/reducers/platform/index.ts"),
				I = n("./src/chat/reducers/promos/index.ts"),
				B = n("./src/chat/selectors/platform.ts");
			const k = (t, e) => (t.chat && t.chat.promos && (e.promos = {
					...I.a,
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
					...D.a,
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
							current: w.a[c],
							cached: {}
						}, t.user.prefs.globalTheme = c
					}
					return t
				},
				L = (t, e, n) => {
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
				G = t => {
					const e = Object(B.e)(t);
					return t.sidebarTabs = {
						activeIndex: e,
						lastChannelIdPerTab: {}
					}, t
				};
			var F = n("./src/chat/reducers/index.ts"),
				Q = n("./src/chat/routes/index.ts");
			const $ = Object(u.a)({
					actionDispatchers: {
						reddaidReceived: j.r,
						loidReceived: j.q,
						sessionTrackerReceived: j.u
					},
					cookies: r.a,
					receivedActions: {
						headersReceived: l.a,
						loidReceived: j.e,
						reddaidReceived: j.f,
						sessionTrackerReceived: j.g,
						userAuthenticated: f.a,
						userLoggedOut: f.b,
						userReauthenticated: f.c
					},
					statsAppName: i.l.Chat
				}),
				H = Object(b.a)($.apiContext);

			function W(t, e, n = "/chat/minimize") {
				const c = document.getElementById("2x-container"),
					r = document.createElement("div");
				return c.appendChild(r), Object(o.a)({
					reducerMap: F.a,
					routes: Q.a,
					apiContext: $.apiContext,
					appFactory: p.a,
					appName: i.l.Chat,
					history: Object(s.d)({
						initialEntries: [n],
						initialIndex: 0
					}),
					customMiddleware: [a.a.withExtraArgument({
						routes: Q.a,
						apiContext: $.apiContext,
						gqlContext: H.gqlContext
					}), $.middleware, S.a, _.a, x.a, E.a, Object(v.a)(e), O.a, g.a, T.a, C.a, y.a],
					modifyInitialData: ({
						initialData: e,
						browserHistory: n
					}) => (e = U(t, e), e = P(e), e = q(e), e = k(t, e), e = L(e, n, Q.a), e = G(e)),
					preRender: ({
						browserHistory: t,
						routes: e,
						store: n
					}) => {
						return n.dispatch(Object(j.l)()), t.listen((t, c) => {
							const r = Object(d.a)(Object(s.e)(t), e);
							n.dispatch(Object(m.d)(t, c, r)), n.dispatch(Object(j.l)())
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
				return j
			})), n.d(e, "b", (function() {
				return p
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
				j = () => async (t, e, {
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
			const p = () => async t => {
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
				j = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts");
			e.default = (t, e) => n => {
				const s = Object(j.a)(e());
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
				return p
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
			} = s, m = Object(r.a)(u), f = Object(r.a)(b), j = Object(r.a)(l), p = Object(r.a)(h);
			let O;
			const g = 5 * c.db,
				x = () => async (t, e, {
					apiContext: n
				}) => {
					const s = e();
					if (!Object(d.J)(s) || !Object(o.d)(s)) return clearTimeout(O);
					O || t((() => async (t, e, {
						apiContext: n
					}) => {
						const s = e(),
							{
								session: c
							} = s.user;
						if (c && Object(d.J)(s) && Object(o.d)(s)) {
							t(j());
							const e = await Object(a.f)(n(), c);
							e && e.ok ? (t(p({
								basicChannelCount: e.body.unread_count || 0,
								subredditChannelCount: e.body.subreddit_unread_count || 0
							})), t(Object(i.d)())) : t(f({
								error: e.error
							}))
						}
					})()), O = setTimeout(() => {
						t(x())
					}, g)
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
				return p
			})), n.d(e, "c", (function() {
				return g
			})), n.d(e, "b", (function() {
				return x
			})), n.d(e, "e", (function() {
				return E
			})), n.d(e, "d", (function() {
				return _
			})), n.d(e, "f", (function() {
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
				b = n("./src/reddit/selectors/appBadges.ts"),
				l = n("./src/reddit/selectors/chat.ts"),
				h = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				m = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				j = n("./src/reddit/actions/appBadgeIndicators/index.ts");
			const p = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				O = Object(r.a)(p),
				g = (t, e) => {
					t <= 0 ? c.a.write(() => {
						Object(d.b)(!1), window.document.title = e
					}) : c.a.write(() => {
						Object(d.b)(), window.document.title = `(${t}) ${e}`
					})
				},
				x = Object(s.c)({
					basicChannelCount: b.e,
					subredditChannelCount: b.d,
					subredditMentionCount: b.c
				}),
				C = t => {
					const e = Object(h.a)(t);
					return {
						inboxCount: e ? Object(b.h)(t) : Object(f.E)(t) || 0,
						basicChannelCount: e ? Object(b.e)(t) : Object(l.a)(t) || 0
					}
				},
				E = () => async (t, e) => {
					const n = e(),
						s = Object(o.e)(n, {}),
						c = Object(h.a)(n),
						r = Object(f.I)(n) || Object(f.J)(n),
						a = Object(m.d)(n);
					let i = 0;
					r && s && (i = c ? a ? Object(b.i)(n) : Object(b.j)(n) : (t => {
						const {
							inboxCount: e,
							basicChannelCount: n
						} = C(t);
						return e + n
					})(n), g(i, s), t(O({
						hasUnreadMessages: !!i
					})))
				}, _ = () => async (t, e) => {
					{
						t(E());
						const n = C(e());
						Object(d.c)(n)
					}
				}, y = t => async (e, n) => {
					const s = n();
					if (Object(h.a)(s)) {
						const n = Object(b.e)(s),
							c = Object(b.h)(s),
							{
								basicChannelCount: r,
								inboxCount: a
							} = t;
						if (n !== r) {
							const t = Object(j.e)({
								count: r,
								key: u.c.ChatTab
							});
							e(Object(j.a)(t))
						}
						if (a && a !== c) {
							const t = Object(j.e)({
								count: a,
								key: u.c.MessageTab
							});
							e(Object(j.a)(t))
						}(n !== r || a && a !== c) && e(E())
					} else {
						const n = Object(l.a)(s),
							c = Object(l.b)(s),
							r = Object(f.E)(s),
							{
								basicChannelCount: o,
								inboxCount: d
							} = t;
						n !== o && e(Object(a.b)({
							...c,
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
				return b
			})), n.d(e, "h", (function() {
				return l
			})), n.d(e, "g", (function() {
				return h
			})), n.d(e, "j", (function() {
				return m
			})), n.d(e, "i", (function() {
				return f
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/selectors/chat.ts"),
				r = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts");
			const a = t => t.appBadges.badges,
				i = Object(s.a)(r.a, a, c.a, (t, e, n) => t ? e && e.directMessages && e.directMessages.count || 0 : n),
				o = Object(s.a)(a, t => t && t.chatRooms && t.chatRooms.count || 0),
				d = Object(s.a)(a, t => t && t.chatRoomMentions && t.chatRoomMentions.count || 0),
				u = Object(s.a)(r.a, c.a, i, o, d, (t, e, n, s, c) => {
					if (t) {
						return n + s + c > 0
					}
					return e > 0
				}),
				b = Object(s.a)(a, t => t && t.activityTab && t.activityTab.count || 0),
				l = Object(s.a)(a, t => t && t.messageTab && t.messageTab.count || 0),
				h = Object(s.a)(b, l, (t, e) => t + e),
				m = Object(s.a)(i, l, (t, e) => t + e),
				f = Object(s.a)(i, h, (t, e) => t + e)
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
					experimentName: c.Vb,
					experimentEligibilitySelector: d
				}), a.a),
				d = t => Object(i.I)(t) || Object(i.J)(t),
				u = Object(s.a)(o, t => t === c.bc.Enabled)
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
				return j
			})), n.d(e, "f", (function() {
				return p
			})), n.d(e, "e", (function() {
				return g
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const o = Object(s.a)(t => Object(r.c)(t, {
					experimentName: c.Yb,
					experimentEligibilitySelector: d
				}), a.a),
				d = t => Object(i.I)(t) || Object(i.J)(t),
				u = Object(s.a)(o, t => t === c.ec.Redesign),
				b = Object(s.a)(t => Object(r.c)(t, {
					experimentName: c.Xb,
					experimentEligibilitySelector: d
				}), a.a),
				l = Object(s.a)(b, t => t === c.dc.Enabled),
				h = Object(s.a)(t => Object(r.c)(t, {
					experimentName: c.Wb,
					experimentEligibilitySelector: d
				}), a.a),
				m = Object(s.a)(h, t => t === c.cc.Enabled),
				f = Object(s.a)(t => Object(r.c)(t, {
					experimentName: c.R,
					experimentEligibilitySelector: d
				}), a.a),
				j = Object(s.a)(f, t => t === c.bb.NoOverflow),
				p = Object(s.a)(f, t => t === c.bb.UndoBar),
				O = Object(s.a)(t => Object(r.c)(t, {
					experimentName: c.T,
					experimentEligibilitySelector: d
				}), a.a),
				g = Object(s.a)(u, O, (t, e) => t && e === c.db.Enabled)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RedesignChat.8066a078b5d6a0269954.js.map