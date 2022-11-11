// https://www.redditstatic.com/desktop2x/RedesignChat.744bd1f5c7d97439b2d3.js
// Retrieved at 11/10/2022, 7:20:06 PM by Reddit Dataminer v1.0.0
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
		"./src/chat/actions/navigate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/lib/makeActionCreator/index.ts");
			const a = "NAVIGATE__HOST_APP_NAVIGATE",
				c = Object(s.a)(a)
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
				return Ee
			}));
			var s = n("./src/chat/contexts/ConnectFnsContext.tsx"),
				a = n("./node_modules/react/index.js"),
				c = n.n(a),
				r = n("./node_modules/history/esm/history.js"),
				i = n("./node_modules/js-cookie/dist/js.cookie.js"),
				o = n.n(i),
				d = n("./node_modules/redux-thunk/es/index.js"),
				u = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/initializeClient/index.tsx"),
				h = n("./src/lib/matchRoute/index.ts"),
				b = n("./src/reddit/contexts/ApiContext.tsx"),
				m = n("./src/reduxMiddleware/apiContext.ts"),
				g = n("./src/reduxMiddleware/gqlContext.ts"),
				f = n("./src/chat/actions/apiRequestHeaders.ts"),
				p = n("./src/chat/actions/notifications.ts"),
				x = n("./src/chat/actions/platform.ts"),
				v = n("./src/chat/actions/session.ts"),
				j = n("./src/chat/actions/user.ts"),
				O = n("./node_modules/react-redux/es/index.js"),
				C = n("./src/lib/CSSVariableProvider/index.tsx"),
				w = n("./src/lib/lessComponent.tsx"),
				y = n("./src/chat/components/MinimizedPortalContainer/index.tsx"),
				E = n("./src/chat/components/Root/index.tsx"),
				_ = n("./src/chat/constants/container.ts"),
				M = n("./src/chat/helpers/chatSelector.ts"),
				P = n("./src/chat/actions/container.ts"),
				N = n("./src/chat/components/PortalContainer/index.m.less"),
				A = n.n(N);
			const {
				embed: T,
				hidden: k
			} = _.b;

			function B(e) {
				return void 0 !== e ? e : -1
			}
			const S = w.a.wrapped(e => c.a.createElement("div", {
					className: e.className
				}, e.children), "BasePortalContainer", A.a),
				R = w.a.wrapped(e => {
					const t = Object(O.d)(),
						n = Object(a.useRef)(null),
						s = e => {
							var s;
							if (e.target instanceof Node && e.target) {
								const a = Boolean(null === (s = null == n ? void 0 : n.current) || void 0 === s ? void 0 : s.contains(e.target));
								t(Object(P.changeFocus)(a))
							}
						};
					return Object(a.useEffect)(() => (document.addEventListener("focusin", s), () => {
						document.removeEventListener("focusin", s)
					})), c.a.createElement("div", {
						ref: n,
						className: e.className,
						style: {
							width: `${B(T.width)}px`,
							height: `${B(T.height)}px`
						}
					}, e.children)
				}, "EmbedPortalContainer", A.a),
				D = w.a.wrapped(e => c.a.createElement("div", {
					className: e.className,
					style: {
						width: `${B(k.width)}px`,
						height: `${B(k.height)}px`
					}
				}, e.children), "HiddenPortalContainer", A.a),
				I = w.a.wrapped(y.a, "MinimizedRedesignPortalContainer", A.a),
				L = S,
				U = Object(M.a)({
					container: e => e && e.container && e.container.size
				});

			function q(e) {
				switch (e.container) {
					case _.a.EMBED:
						return c.a.createElement(R, null, e.children);
					case _.a.HIDDEN:
						return c.a.createElement(D, null, e.children);
					case _.a.FULL:
						return c.a.createElement(L, null, e.children);
					case _.a.MINIMIZED:
						return c.a.createElement(I, null);
					default:
						return c.a.createElement(R, null, e.children)
				}
			}
			var z = n("./src/chat/customMiddleware/channelsFilter.ts"),
				H = n("./src/chat/customMiddleware/chatThemeKey.ts"),
				F = n("./src/chat/customMiddleware/containerSize.ts"),
				G = n("./src/chat/customMiddleware/draftMessageText.ts"),
				$ = n("./src/chat/customMiddleware/iframeDispatcher.ts"),
				W = n("./src/chat/customMiddleware/inviteLinkSettings.ts"),
				V = n("./src/chat/customMiddleware/lastSelectedChannel.ts"),
				K = n("./src/chat/customMiddleware/loggedOutPreferencesSync.ts"),
				Q = n("./src/chat/customMiddleware/sendbirdToken.ts"),
				Y = n("./src/chat/customMiddleware/settings.ts"),
				J = n("./src/chat/customMiddleware/stateObserver/index.ts"),
				X = n("./src/chat/customMiddleware/title.ts"),
				Z = n("./src/chat/customMiddleware/tokenRefresher.ts"),
				ee = n("./src/chat/customMiddleware/tracking.ts"),
				te = n("./src/chat/customMiddleware/unreadMessageCount.ts"),
				ne = n("./src/chat/customMiddleware/uploadPrompt.ts"),
				se = n("./node_modules/lodash/uniqueId.js"),
				ae = n.n(se),
				ce = n("./src/chat/constants/theme.ts"),
				re = n("./src/chat/models/Theme/index.ts"),
				ie = n("./src/chat/reducers/experiments/helpers.ts"),
				oe = n("./src/chat/reducers/meta/index.ts"),
				de = n("./src/chat/reducers/platform/index.ts"),
				ue = n("./src/lib/env/index.ts"),
				le = n("./src/redditGQL/types.ts");
			const he = (e, t) => {
					var n;
					const {
						account: s,
						language: a,
						loid: c,
						prefs: r,
						session: i,
						sessionTracker: o
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
						sessionTracker: o,
						session: i && i.unsafeLoggedOut ? null : i
					}, t
				},
				be = e => (e.meta = {
					...oe.a,
					isRedesign: !0
				}, e),
				me = e => {
					if (e.user && e.user.prefs && e.user.prefs.nightmode) {
						const {
							NIGHT: t,
							REDDIT: n
						} = ce.b, {
							nightmode: s
						} = e.user.prefs, a = s ? t : n;
						e.themes = {
							current: re.e[a],
							chatTheme: null,
							cached: {}
						}, e.user.prefs.globalTheme = a
					}
					return e
				},
				ge = (e, t, n) => {
					const s = ae()(),
						a = Object(r.c)(t.location, void 0, s),
						c = Object(h.a)(Object(r.e)(a), n),
						i = Object(de.b)(de.a, Object(x.e)({
							location: a,
							action: "PUSH",
							routeMatch: c
						}));
					return e.platform = {
						...i
					}, e
				},
				fe = (e, t) => {
					var n, s, a, c, r;
					const i = {},
						o = null === (n = e.platform.currentPage) || void 0 === n ? void 0 : n.queryParams;
					for (const u in null === (a = null === (s = null == e ? void 0 : e.user) || void 0 === s ? void 0 : s.experiments) || void 0 === a ? void 0 : a.byName) i[u] = {
						...null === (r = null === (c = null == e ? void 0 : e.user) || void 0 === c ? void 0 : c.experiments) || void 0 === r ? void 0 : r.byName[u],
						isOverride: !1
					};
					const d = Object(ie.a)(i, o);
					return t.experiments = {
						models: {
							...i,
							...Object(ue.b)() ? {} : d
						},
						api: {
							isPending: !1,
							errors: []
						}
					}, t
				},
				pe = (e, t) => {
					var n;
					const s = null === (n = e.features) || void 0 === n ? void 0 : n.eligibleUXExperiences,
						a = [le.W.LiveChatVideoEdu].reduce((e, t) => {
							const n = null == s ? void 0 : s.experiences[t];
							return (null == n ? void 0 : n.fetched) ? {
								...e,
								[t]: {
									value: n.value,
									fetched: n.fetched
								}
							} : e
						}, {});
					return t.uxExperiences = {
						experiences: a
					}, t
				};
			var xe = n("./src/chat/reducers/index.ts"),
				ve = n("./src/chat/routes/index.ts"),
				je = n("./src/config.ts"),
				Oe = n("./src/chat/actions/liveChat/index.ts");
			const Ce = Object(m.a)({
					actionDispatchers: {
						loidReceived: j.p,
						sessionTrackerReceived: j.s
					},
					cookies: o.a,
					receivedActions: {
						headersReceived: f.a,
						loidReceived: j.e,
						sessionTrackerReceived: j.f,
						userAuthenticated: v.a,
						userLoggedOut: v.b,
						userReauthenticated: v.c
					},
					statsAppName: u.o.Chat
				}),
				we = Object(g.a)(Ce.apiContext),
				ye = Object(g.a)(Ce.apiContext, je.a.gqlRealtimeUrl);

			function Ee(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/chat/minimize",
					a = arguments.length > 3 ? arguments[3] : void 0;
				const i = document.getElementById("2x-container"),
					o = document.createElement("div");
				return i.appendChild(o), Object(l.a)({
					reducerMap: xe.a,
					routes: ve.a,
					apiContext: Ce.apiContext,
					gqlContext: we.gqlContext,
					appFactory: (e, t) => c.a.createElement(b.a.Provider, {
						value: {
							apiContext: Ce.apiContext,
							gqlContext: we.gqlContext
						}
					}, c.a.createElement(s.a.Provider, {
						value: a || {}
					}, function(e, t) {
						const n = Object(O.b)(U)(q);
						return c.a.createElement("div", null, Object(C.d)(c.a.createElement(n, null, Object(E.a)(e, t)), document.body))
					}(e, t))),
					appName: u.o.Chat,
					history: Object(r.d)({
						initialEntries: [n],
						initialIndex: 0
					}),
					customMiddleware: [d.a.withExtraArgument({
						routes: ve.a,
						apiContext: Ce.apiContext,
						gqlContext: we.gqlContext,
						gqlRealtimeContext: ye.gqlContext
					}), Ce.middleware, Z.a, Y.a, Q.a, $.a, K.a, Object(ee.a)(t), F.a, J.a, H.a, z.a, G.a, te.a, V.a, X.a, ne.a, W.a],
					modifyInitialData: t => {
						let {
							initialData: n,
							browserHistory: s
						} = t;
						return n = he(e, n), n = be(n), n = me(n), n = ge(n, s, ve.a), n = fe(e, n), n = pe(e, n)
					},
					preRender: e => {
						let {
							browserHistory: t,
							routes: n,
							store: s
						} = e;
						return s.dispatch(Object(j.k)()), t.listen((e, t) => {
							const a = Object(h.a)(Object(r.e)(e), n);
							s.dispatch(Object(x.d)(e, t, a)), s.dispatch(Object(j.k)())
						}), "undefined" != typeof window && window.addEventListener("load", async () => {
							s.dispatch(Object(p.a)(!1, !1))
						}), {}
					},
					postRender: e => {
						let {
							store: t
						} = e;
						t.dispatch(Oe.fetchActiveUsersInLiveChats)
					},
					target: o,
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
				return h
			})), n.d(t, "e", (function() {
				return m
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
				h = Object(s.a)(a.d),
				b = Object(s.a)(a.a),
				m = e => {
					let {
						key: t,
						count: n
					} = e;
					return {
						[t]: {
							count: n,
							style: d.b.Numbered
						}
					}
				},
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
				f = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					e(u());
					const a = await async function(e) {
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
					}(s);
					a ? (e(l(a)), e(Object(c.d)())) : e(b())
				};
			const p = () => async e => {
				const t = m({
					key: d.c.MessageTab,
					count: 0
				});
				e(h(t))
			}
		},
		"./src/reddit/actions/chat/proxy.ts": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/lodash/isEqual.js"),
				a = n.n(s),
				c = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/chat/actions/message/unreadCount.ts"),
				i = n("./src/chat/actions/navigate.ts"),
				o = n("./src/chat/actions/surveyTrigger/index.ts"),
				d = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				u = n("./src/reddit/actions/survey/index.ts"),
				l = n("./src/reddit/actions/tabBadging.ts");
			t.default = (e, t) => n => {
				switch (n.type) {
					case r.a: {
						const s = n.payload,
							c = Object(l.b)(t());
						if (!a()(s, c)) {
							const t = Object(d.d)(s.unreadMessages, s.hasNewMessages);
							e(Object(d.a)(t)), e(Object(l.d)())
						}
					}
					break;
				case o.a:
					e(Object(u.i)());
					break;
				case i.a: {
					const {
						path: t
					} = n.payload;
					e(Object(c.b)(t));
					break
				}
				}
			}
		},
		"./src/reddit/actions/tabBadging.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "f", (function() {
				return x
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/fastdom/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				i = n("./src/reddit/helpers/tabBadging/index.ts"),
				o = n("./src/reddit/models/Badge/index.ts"),
				d = n("./src/reddit/selectors/appBadges.ts"),
				u = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/actions/appBadgeIndicators/index.ts");
			const h = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				b = Object(c.a)(h),
				m = (e, t) => {
					e <= 0 ? a.a.write(() => {
						Object(i.b)(!1), window.document.title = t
					}) : a.a.write(() => {
						Object(i.b)(), window.document.title = `(${e}) ${t}`
					})
				},
				g = Object(s.c)({
					basicChannelCount: d.e,
					subredditChannelCount: d.d,
					subredditMentionCount: d.c
				}),
				f = () => async (e, t) => {
					const n = t(),
						s = Object(r.g)(n, {});
					if (!(Object(u.Q)(n) || Object(u.R)(n)) || !s) return;
					const a = Object(d.i)(n);
					m(a, s), e(b({
						hasUnreadMessages: !!a
					}))
				}, p = () => async (e, t) => {
					{
						e(f());
						const n = (e => ({
							inboxCount: Object(d.h)(e),
							basicChannelCount: Object(d.e)(e)
						}))(t());
						Object(i.c)(n)
					}
				}, x = e => async (t, n) => {
					const s = n(),
						a = Object(d.e)(s),
						c = Object(d.h)(s),
						{
							basicChannelCount: r,
							inboxCount: i
						} = e;
					if (a !== r) {
						const e = Object(l.e)({
							count: r,
							key: o.c.ChatTab
						});
						t(Object(l.a)(e))
					}
					if (i && i !== c) {
						const e = Object(l.e)({
							count: i,
							key: o.c.MessageTab
						});
						t(Object(l.a)(e))
					}(a !== r || i && i !== c) && t(f())
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
				u = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
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
			})), n.d(t, "i", (function() {
				return h
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
				h = Object(s.a)(c, l, (e, t) => e + t)
		},
		"./src/redditGQL/operations/BadgeIndicators.json": function(e) {
			e.exports = JSON.parse('{"id":"9d105ce5d71a"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/RedesignChat.744bd1f5c7d97439b2d3.js.map