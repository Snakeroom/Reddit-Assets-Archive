// https://www.redditstatic.com/desktop2x/Reddit~Subreddit.30fa5b9b6a8286b33b64.js
// Retrieved at 2/16/2022, 5:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit~Subreddit"], {
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var n = Math.floor,
				i = Math.random;
			e.exports = function(e, t) {
				return e + n(i() * (t - e + 1))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, n) {
			var i = n("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var n = -1,
					s = e.length,
					r = s - 1;
				for (t = void 0 === t ? s : t; ++n < t;) {
					var o = i(n, r),
						a = e[o];
					e[o] = e[n], e[n] = a
				}
				return e.length = t, e
			}
		},
		"./src/lib/hooks/useOnClickOutside.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var i = n("./node_modules/react/index.js");

			function s(e, t) {
				const n = Object(i.useCallback)(n => {
					if (!t) return;
					const i = document.getElementById(e);
					i && (i.contains(n.target) || t(n))
				}, [e, t]);
				Object(i.useEffect)(() => {
					if (t) return window.addEventListener("click", n), () => {
						window.removeEventListener("click", n)
					}
				}, [t, n])
			}
		},
		"./src/lib/notifications/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			var i = n("./src/lib/delay/index.ts"),
				s = n("./src/lib/getParsedUserAgent/index.ts"),
				r = n("./src/lib/localStorageAvailable/index.ts"),
				o = n("./src/lib/notifications/constants.ts"),
				a = n("./src/lib/notifications/featureFlags.ts");
			n("./src/lib/serviceWorker/index.ts");
			const c = () => {
					if (Object(a.a)() !== o.c.NotificationsSupported) return o.a.Unsupported;
					const e = Object(r.a)() && localStorage.getItem(o.f) === o.g;
					return "granted" === Notification.permission ? o.a.Granted : "denied" === Notification.permission ? o.a.Denied : e ? o.a.Closed : o.a.Default
				},
				d = () => !!Object(r.a)() && (localStorage.removeItem(o.f), !0),
				l = async (e, t, n, a, d, l) => {
					const u = c();
					if (u === o.a.Unsupported) return void l();
					if (Object(r.a)()) {
						const t = localStorage.getItem(o.h),
							n = (new Date).getTime();
						if (!e && t && parseInt(t) + o.i > n) return void l();
						localStorage.setItem(o.h, n.toString())
					}
					if (!t && u === o.a.Denied) return a(!1, !0), void l();
					if (!t && u === o.a.Granted) return d(!1), void l();
					if (!t && u === o.a.Closed) return void l();
					let b = o.a.Default;
					const p = navigator.userAgent;
					switch (Object(s.b)(p) || Object(s.f)(p) ? Object(i.a)(1800).then(() => {
						b === o.a.Default && n()
					}) : n(), b = await Notification.requestPermission()) {
						case "granted":
							d(!0);
							break;
						case "denied":
							a(!0, !0);
							break;
						case "default":
							l();
							break;
						default:
							a(!0, !1), localStorage.setItem(o.f, o.g)
					}
				}
		},
		"./src/lib/pubsub/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			class i {
				constructor() {
					this.listenerMap = {}
				}
				_resetListenerMap() {
					this.listenerMap = {}
				}
				_resetKey(e) {
					this.listenerMap[e] = []
				}
				reset(e) {
					e ? this._resetKey(e) : this._resetListenerMap()
				}
				addListeners(e, ...t) {
					this.listenerMap[e] || (this.listenerMap[e] = []), this.listenerMap[e].push(...t)
				}
				removeListeners(e, ...t) {
					if (!this.listenerMap[e] || !this.listenerMap[e].length) return !1;
					const n = t.length,
						i = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !t.includes(e)), this.listenerMap[e].length - i === n
				}
				publish(e) {
					return !(!this.listenerMap[e] || !this.listenerMap[e].length) && (this.listenerMap[e].forEach(e => e()), !0)
				}
			}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "b", (function() {
				return k
			}));
			var i, s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/performanceTimings/index.tsx"),
				o = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(i || (i = {}));
			var d, l = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var b = n("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = n("./src/reddit/selectors/platform.ts"),
				m = n("./src/reddit/selectors/user.ts");
			const f = Object(s.a)(o.g),
				h = Object(s.a)(o.e),
				g = Object(s.a)(o.h),
				x = Object(s.a)(o.c),
				y = Object(s.a)(o.f),
				C = Object(s.a)(o.j),
				S = Object(s.a)(o.i),
				O = () => async (e, t, {
					gqlContext: n
				}) => {
					const s = t(),
						r = Object(b.e)(s),
						o = Object(b.d)(s),
						d = Object(m.J)(s);
					if (r || !o) return;
					e(g());
					let p = !1;
					try {
						const t = d ? i.LoggedInGeo : i.LoggedOutGeo,
							s = await ((e, t, n) => Object(a.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(n(), t);
						if (s.ok && s.body) {
							const {
								data: t
							} = s.body;
							if (v(t)) {
								if (j(t)) {
									e(x({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), p = !0
								} else if (E(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: i,
											interactedSubreddit: s,
											category: r
										} = n.focusRecommendations[0],
										o = [i, s],
										a = Object(u.d)(o),
										c = Object(l.b)(o),
										d = Object(u.c)(i),
										b = {
											recommendedSubredditIds: [i.id],
											interactedSubredditIds: [s.id],
											subreddits: a,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: r,
											lastLoadedEnv: "client"
										};
									e(f(b)), p = !0
								}
							} else p = !1
						}
					} catch (y) {
						p = !1
					}
					p || e(h({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, v = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, j = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				}, E = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						i = t && t.type;
					return !!(n && !j(e) && i === d.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, k = () => async (e, t, n) => {
					var i, s;
					const o = t(),
						a = Object(b.g)(o);
					if (Object(b.f)(o) || null === a || "client" === a) {
						const n = null === (s = null === (i = Object(p.b)(t())) || void 0 === i ? void 0 : i.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
							a = Object(m.K)(o);
						return Object(r.i)(() => e(O()), {
							name: "getFocusedVerticalsRequested",
							page: n,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(y({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/notificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "b", (function() {
				return k
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/redditGQL/operations/UserSubredditsNotificationsLevel.json");
			var l = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const b = Object(s.a)(r.c),
				p = Object(s.a)(r.b),
				m = Object(s.a)(r.a),
				f = Object(s.a)(r.f),
				h = Object(s.a)(r.e),
				g = Object(s.a)(r.d),
				x = e => async (t, n, {
					gqlContext: i
				}) => {
					e === l.a.Push ? t(f()) : t(b()), await async function(e, t, n) {
						const i = await Object(a.a)(e(), {
							channel: t
						});
						if (i.ok && i.body) {
							const e = function(e) {
								const t = e && e.data,
									n = t && t.notificationSettingsLayoutByChannel,
									i = n && n.sections;
								if (i) return function(e) {
									const t = {},
										n = [];
									let i = {},
										s = [];
									const r = e => {
										const {
											rowIds: r,
											rowsCollection: o
										} = function(e) {
											const t = [],
												n = {};
											if (e.rows)
												for (let i = 0; i < e.rows.length; i++) {
													const s = e.rows[i],
														r = s.messageType;
													t.push(r), n[r] = s
												}
											return {
												rowsCollection: n,
												rowIds: t
											}
										}(e);
										i = {
											...i,
											...o
										}, s = [...s, ...r];
										const a = e.id;
										n.push(a), t[a] = {
											...e,
											rows: r
										}
									};
									for (let o = 0; o < e.length; o++) r(e[o]);
									return {
										sections: {
											byId: t,
											allIds: n
										},
										rows: {
											byId: i,
											allIds: s
										}
									}
								}(i)
							}(i.body);
							t === l.a.Push ? n(h(e)) : n(p(e))
						} else t === l.a.Push ? n(g({
							error: i.error
						})) : n(m({
							error: i.error
						}))
					}(i, e, t)
				};
			const y = Object(s.a)(r.g),
				C = e => async (t, n, {
					gqlContext: s
				}) => {
					(await Object(a.b)(s(), e)).ok ? (S(t, e), function(e) {
						e(Object(o.f)({
							kind: u.b.SuccessCommunity,
							text: i.fbt._("Changes saved", null, {
								hk: "UBoVR"
							})
						}))
					}(t)) : function(e) {
						e(Object(o.f)({
							kind: u.b.Error,
							text: i.fbt._("We had some issues saving your changes. Please try again.", null, {
								hk: "1OvQi6"
							})
						}))
					}(t)
				};

			function S(e, t) {
				e(y({
					isEnabled: t.isEnabled,
					messageType: t.messageType
				}))
			}
			const O = Object(s.a)(r.j),
				v = Object(s.a)(r.i),
				j = Object(s.a)(r.k),
				E = Object(s.a)(r.h),
				k = e => async (t, n, {
					gqlContext: i
				}) => {
					var s, r;
					t(O());
					const a = await ((e, t) => Object(c.a)(e, {
						...d,
						variables: t
					}))(i(), e);
					if (null === (r = null === (s = a.error) || void 0 === s ? void 0 : s.fields) || void 0 === r ? void 0 : r.length) return t(E({
						error: a.error
					})), void t(Object(o.d)());
					if (a.ok && a.body) {
						const e = a.body,
							n = e && e.data,
							i = n && n.identity && n.identity.subscribedSubreddits,
							s = i && i.pageInfo,
							r = (i && i.edges).map(e => e.node);
						t(v({
							nodes: r,
							pageInfo: s
						}))
					}
				}
		},
		"./src/reddit/actions/notifications/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var i = n("./src/lib/notifications/index.ts"),
				s = n("./src/lib/notifications/constants.ts"),
				r = n("./src/lib/notifications/featureFlags.ts"),
				o = n("./src/reddit/featureFlags/index.ts"),
				a = n("./src/reddit/helpers/localStorage/index.ts");
			const c = e => o.d.pushNotificationsBrowserSupported(e) ? Object(r.a)() : s.c.BrowserUnsupported,
				d = e => {
					switch (e) {
						case s.a.Denied:
							a.ob(!1), Object(i.c)();
							break;
						case s.a.Default:
						case s.a.Granted:
							a.ob(!0), Object(i.c)();
							break;
						case s.a.Closed:
							a.ob(!0)
					}
				}
		},
		"./src/reddit/actions/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return L
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "b", (function() {
				return D
			})), n.d(t, "i", (function() {
				return G
			})), n.d(t, "f", (function() {
				return U
			})), n.d(t, "c", (function() {
				return V
			})), n.d(t, "a", (function() {
				return W
			})), n.d(t, "h", (function() {
				return q
			})), n.d(t, "j", (function() {
				return K
			})), n.d(t, "g", (function() {
				return z
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				o = (n("./src/reddit/actions/notificationSettingsLayout/index.ts"), n("./src/reddit/actions/notificationsInbox/constants.ts")),
				a = n("./src/reddit/actions/tabBadging.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				l = n("./src/redditGQL/operations/BlockAwarder.json");
			var u = (e, t) => Object(d.a)(e, {
					...l,
					variables: t
				}),
				b = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				m = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/redditGQL/operations/NotificationInboxFeed.json"),
				h = n("./src/redditGQL/operations/NotificationInboxFeedSlimmed.json"),
				g = n("./src/reddit/constants/headers.ts"),
				x = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var y;
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(y || (y = {}));
			var C = n("./src/redditGQL/operations/DeleteInboxNotifications.json");
			n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts");
			var S = n("./src/redditGQL/operations/UpdateInboxActivitySeenState.json");
			var O = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				v = n("./src/reddit/helpers/trackers/inbox.ts"),
				j = n("./src/reddit/models/Badge/index.ts"),
				E = n("./src/reddit/models/NotificationInbox/index.ts"),
				k = n("./src/reddit/models/Toast/index.ts"),
				w = n("./src/reddit/selectors/appBadges.ts"),
				I = (n("./src/reddit/selectors/notificationPrefs.ts"), n("./src/reddit/selectors/notificationsInbox.tsx"));
			const _ = Object(s.a)(o.e),
				N = Object(s.a)(o.b),
				T = Object(s.a)(o.a),
				L = e => async (t, n, {
					gqlContext: i
				}) => {
					var s, r;
					const o = n(),
						a = Object(I.a)(o);
					t(_());
					const l = await ((e, t) => Object(d.a)(e, {
						...f,
						variables: t
					}))(i(), e);
					if (null === (r = null === (s = l.error) || void 0 === s ? void 0 : s.fields) || void 0 === r ? void 0 : r.length) return t(T({
						error: l.error
					})), void t(Object(c.d)());
					const u = l && l.body,
						b = M(u);
					if (null === a) {
						const e = Object(I.f)(o);
						t(F(b.nodes, e.length))
					}
					t(N(b))
				}, P = () => async (e, t, {
					gqlContext: n
				}) => {
					var i, s;
					const r = await (e => Object(d.a)(e, {
						...h
					}))(n());
					if (null === (s = null === (i = r.error) || void 0 === i ? void 0 : i.fields) || void 0 === s ? void 0 : s.length) return;
					const o = r && r.body,
						a = R(o).nodes.filter(e => !e.viewedAt);
					a.length && a.forEach(e => {
						var n;
						Object(v.p)({
							id: e.id,
							isClicked: !1,
							isViewed: Boolean(e.viewedAt),
							type: null === (n = e.context) || void 0 === n ? void 0 : n.messageType
						})(t())
					})
				}, M = e => {
					const t = e && e.data,
						n = t && t.notificationInbox,
						i = n && n.elements,
						s = i && i.pageInfo;
					return {
						nodes: (i && i.edges).map(e => e.node),
						pageInfo: s
					}
				}, R = e => {
					var t, n;
					return {
						nodes: null === (n = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.notificationInbox) || void 0 === n ? void 0 : n.elements.edges.map(e => e.node)
					}
				}, F = (e, t) => async (n, i) => {
					const s = i(),
						r = Object(I.a)(s),
						o = ((e, t) => {
							let n, i = 0;
							const s = new Date,
								r = s.getDate(),
								o = s.getMonth(),
								a = s.getFullYear();
							for (; i < e.length && !n;) {
								const s = e[i],
									c = new Date(s.sentAt),
									d = c.getDate(),
									l = c.getMonth(),
									u = c.getFullYear();
								if ((d !== r || l !== o || u !== a) && !n) {
									n = ((t || 0) + i).toString()
								} else i++
							}
							return n
						})(e, t);
					o && o !== r && n(B({
						index: o
					}))
				}, B = Object(s.a)(o.g), A = (Object(s.a)(o.h), Object(s.a)(o.f)), D = e => async (t, n, {
					gqlContext: s
				}) => {
					const r = [e];
					if ((await ((e, t) => Object(d.a)(e, {
							...C,
							variables: {
								input: t
							}
						}))(s(), {
							notificationIds: r
						})).ok) {
						t(A({
							id: e
						}));
						const s = Object(I.f)(n());
						t(F(s)), t(Object(c.f)(Object(c.e)(i.fbt._("Notification hidden", null, {
							hk: "1jfPqO"
						}), k.b.SuccessCommunityGreen)))
					} else t(Object(c.f)(Object(c.e)(i.fbt._("Failed to hide notification, please try again.", null, {
						hk: "fL7uB"
					}), k.b.Error)))
				}, G = (e, t) => async (n, s, {
					gqlContext: r
				}) => {
					if (!e) return;
					(await Object(O.b)(r(), e, {
						isSubredditUpdatesInterestingPostEnabled: !0,
						isUpdateFromSubredditEnabled: !0
					})).ok ? (t && t(), n(Object(c.f)(Object(c.e)(i.fbt._("Success! Undone hiding notifications from this community.", null, {
						hk: "1na0NP"
					}), k.b.SuccessCommunityGreen)))) : n(Object(c.f)(Object(c.e)(i.fbt._("Failed to undo hiding notifications, please try again.", null, {
						hk: "4jo7Pf"
					}), k.b.Error)))
				}, U = (e, t) => async (n, s, {
					gqlContext: r
				}) => {
					if (!e) return;
					(await Object(O.b)(r(), e, {
						isSubredditUpdatesInterestingPostEnabled: !1,
						isUpdateFromSubredditEnabled: !1
					})).ok ? n((() => {
						const n = i.fbt._("Success! You won't see notifications from this community in the future.", null, {
							hk: "2tkhbk"
						});
						return Object(c.f)(Object(c.e)(n, k.b.Undo, i.fbt._("Undo", null, {
							hk: "4zFGDk"
						}), G(e, t)))
					})()) : n(Object(c.f)(Object(c.e)(i.fbt._("Failed to hide notifications, please try again.", null, {
						hk: "KEGcB"
					}), k.b.Error)))
				}, V = e => async (t, n, {
					apiContext: s
				}) => {
					if (!e) return;
					(await ((e, t) => Object(p.a)(Object(m.a)(e, [g.a]), {
						endpoint: Object(x.a)(`${e.apiUrl}/api/sendreplies`),
						method: b.jb.POST,
						data: {
							id: t
						}
					}))(s(), e)).ok ? t(Object(c.f)(Object(c.e)(i.fbt._("Success! You won't see updates on this in the future", null, {
						hk: "wtDa4"
					}), k.b.SuccessCommunityGreen))) : t(Object(c.f)(Object(c.e)(i.fbt._("Failed to turn off updates on this, please try again", null, {
						hk: "1zhpEy"
					}), k.b.Error)))
				}, W = e => async (t, n, {
					gqlContext: s
				}) => {
					if (!e) return;
					(await u(s(), {
						awardingId: e
					})).ok ? t(Object(c.f)(Object(c.e)(i.fbt._("Success! Awarder has been blocked", null, {
						hk: "2D5PUk"
					}), k.b.SuccessCommunityGreen))) : t(Object(c.f)(Object(c.e)(i.fbt._("Failed to block awarder, please try again", null, {
						hk: "2dxeA8"
					}), k.b.Error)))
				}, H = Object(s.a)(o.d), q = (e, t) => async (n, i, {
					apiContext: s
				}) => {
					let o;
					if (t === E.a.CommentReply || t === E.a.PostReply || t === E.a.PrivateMessage || t === E.a.UsernameMention) {
						if ((o = await ((e, t) => Object(p.a)(Object(m.a)(e, [g.a]), {
								endpoint: Object(x.a)(`${e.apiUrl}/api/read_message`),
								method: b.jb.POST,
								data: {
									id: t
								}
							}))(s(), e)).ok) {
							let e = Object(w.a)(i());
							if (e > 0) {
								e--;
								const t = Object(r.e)({
									count: e,
									key: j.c.ActivityTab
								});
								n(Object(r.a)(t)), n(Object(a.e)())
							}
						}
					} else o = await ((e, t) => Object(p.a)(Object(m.a)(e, [g.a]), {
						endpoint: Object(x.a)(`${e.apiUrl}/api/read_notification`),
						method: b.jb.POST,
						data: {
							id: t
						}
					}))(s(), e);
					if (o.ok) {
						const t = (new Date).toISOString();
						n(H({
							id: e,
							now: t
						}))
					}
				}, K = () => async (e, t, {
					gqlContext: n
				}) => {
					const i = (new Date).toLocaleDateString(),
						s = await ((e, t) => Object(d.a)(e, {
							...S,
							variables: {
								input: t
							}
						}))(n(), {
							lastSentAt: i
						});
					if (s.ok) {
						const t = s.body,
							n = t && t.data && t.data.updateInboxActivitySeenState && t.data.updateInboxActivitySeenState.badgeIndicators;
						n && (e(Object(r.a)(n)), e(Object(a.d)()))
					}
				}, J = Object(s.a)(o.c), z = () => async (e, t, {
					apiContext: n
				}) => {
					const {
						notificationsInbox: {
							markAllAsReadTimestamp: s
						}
					} = t(), o = new Date;
					if (!s || o.getTime() - new Date(s).getTime() > 15e3) {
						if ((await ((e, t) => Object(p.a)(Object(m.a)(e, [g.a]), {
								endpoint: Object(x.a)(`${e.apiUrl}/api/read_all_messages`),
								method: b.jb.POST,
								data: {
									filter_types: null == t ? void 0 : t.join(",")
								}
							}))(n(), [y.Activity, y.Messages])).ok) {
							const t = Object(r.e)({
									count: 0,
									key: j.c.MessageTab
								}),
								n = Object(r.e)({
									count: 0,
									key: j.c.ActivityTab
								});
							e(Object(r.a)({
								...t,
								...n
							})), e(J({
								now: o.toISOString()
							}))
						} else e(Object(c.f)(Object(c.e)(i.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "VW7c3"
						}), k.b.Error)))
					}
				}
		},
		"./src/reddit/actions/pages/powerups.ts": function(e, t, n) {
			"use strict";
			var i = n("./src/lib/pageTitle.ts"),
				s = n("./src/reddit/actions/gold/powerups.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				o = n("./src/reddit/actions/subreddit.ts"),
				a = n("./src/reddit/actions/subscription/index.ts"),
				c = n("./src/reddit/actions/users.ts"),
				d = n("./src/reddit/selectors/gold/powerups/modSignup.ts"),
				l = n("./src/reddit/selectors/moderatorPermissions.ts"),
				u = n("./src/reddit/selectors/subscriptions.ts"),
				b = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				const n = t();
				if (e(Object(r.m)({
						title: Object(i.h)()
					})), await e(Object(c.t)()), !Object(b.K)(n)) return;
				await e(Object(o.q)());
				const p = Object(d.b)(n),
					m = Object(l.a)(n);
				if (p) return await e(Object(s.d)(m));
				await e(Object(a.e)()), await e(Object(s.o)());
				const f = Object(u.c)(n);
				if (f && f.length) {
					const t = f.map(e => e.id);
					await e(Object(s.d)(t))
				}
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/CommonTooltip/Hooked.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				s = n.n(i),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/CommonTooltip/index.m.less"),
				a = n.n(o);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = s.a.memo((function({
				visible: e,
				tooltipId: t,
				className: n,
				arrowClassName: o,
				...d
			}) {
				const [l, u] = Object(i.useState)(e);
				return Object(i.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, u(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), u(!1)
					}
				}, [e]), e ? s.a.createElement("div", c({
					id: t,
					className: Object(r.a)(a.a.tooltip, n, {
						[a.a.visible]: l
					})
				}, d.popperProps), l && s.a.createElement(s.a.Fragment, null, d.arrowProps && s.a.createElement("div", c({
					className: Object(r.a)(a.a.arrow, o)
				}, d.arrowProps)), d.children)) : null
			}))
		},
		"./src/reddit/components/CommonTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "_1sDiFFHKyPJghjPpVTW7vB",
				visible: "_288IzKhWMb7Dw403RofBU8",
				arrow: "J7dyd68w4oXhfat_ErBlK",
				carot: "_1cSDLuGjo4e7WXeW8lyx7K"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				g = n.n(h),
				x = n("./src/lib/lessComponent.tsx");
			const y = "create-community-button",
				C = x.a.wrapped(l.c, "StyledTooltip", g.a),
				S = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(f.ib)(e),
					userIsSuspended: f.R
				});
			t.a = Object(o.b)(S, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: n => {
					n(Object(m.c)(t)), e(Object(c.h)(b.a.SUBREDDIT_CREATION_MODAL_ID))
				},
				onShowTooltip: () => e(Object(d.f)({
					tooltipId: y
				})),
				onHideTooltip: () => e(Object(d.i)())
			}))(Object(u.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: n,
				onHideTooltip: s,
				openCommunityCreation: o,
				sendEvent: a,
				userDoesNotHaveEnoughExpToCreateCommunity: c,
				userIsSuspended: d,
				onClick: l
			}) => {
				return r.a.createElement(p.t, {
					className: e,
					disabled: d || c,
					onClick: e => {
						l && l(e), o(a)
					},
					onMouseEnter: n,
					onMouseLeave: s,
					priority: p.c.Secondary,
					id: y,
					isFullWidth: !0
				}, i.fbt._("Create Community", null, {
					hk: "28v7Qq"
				}), c ? r.a.createElement(C, {
					caretOnTop: !0,
					tooltipId: y,
					text: i.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
						hk: "2R1OXu"
					})
				}) : d ? r.a.createElement(C, {
					caretOnTop: !0,
					tooltipId: y,
					text: i.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
						hk: "2xBDEw"
					})
				}) : null)
			}))
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(i.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("IdCard").then(n.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "c", (function() {
				return h
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/config.ts"),
				r = n("./src/lib/pubsub/index.ts"),
				o = n("./src/reddit/constants/listings.ts"),
				a = n("./src/reddit/constants/page.ts");
			const c = e => e && e.toLowerCase() === o.b.Popular,
				d = e => e && e.toLowerCase() === o.b.All,
				l = e => e && e === a.c,
				u = (e, t = 40, n = 68) => ({
					height: n,
					image: e,
					width: t
				}),
				b = ({
					listingName: e,
					subreddit: t,
					idCardWidget: n
				}) => {
					let r, a, b, p, m;
					const f = n && n.subscribersText || i.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						h = n && n.currentlyViewingText || i.fbt._("Online", null, {
							hk: "36JX70"
						});
					let g, x;
					return l(e) ? (r = `${s.a.assetPath}/img/id-cards/home-banner@2x.png`, b = u(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), m = o.c[o.b.Home], a = i.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), p = i.fbt._("Home", null, {
						hk: "9xVXB"
					})) : d(e) ? (r = `${s.a.assetPath}/img/id-cards/banner@2x.png`, a = i.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), b = u(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/all", m = o.c[o.b.All]) : c(e) ? (r = `${s.a.assetPath}/img/id-cards/banner@2x.png`, a = i.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), b = u(`url('${s.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/popular", m = o.c[o.b.Popular]) : e && (a = n && n.description, b = u(""), p = t.displayText, m = t.url, x = n && n.subscribersCount, g = n && n.currentlyViewingCount), {
						snooBackground: b,
						description: a,
						titleText: p,
						url: m,
						subscribersCount: x,
						subscribersText: f,
						currentlyViewingText: h,
						currentlyViewingCount: g,
						...r ? {
							bannerBackgroundImage: r
						} : {}
					}
				},
				p = new r.a,
				m = "VISIBLE",
				f = "NOT_VISIBLE",
				h = e => p.publish(e ? m : f)
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				rightBorderExp: "d2l2sN1D4PNVkzMmwALA2",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S",
				wrapperExp: "_1C67uwkUf95iJOZ63vDJOZ"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return g
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/componentSizes.ts"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/components/JumpToContent/index.m.less"),
				u = n.n(l);
			const b = Object(s.createContext)(null),
				p = Object(s.createContext)(null);
			class m extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						handleRef: null
					}, this.setHandleRef = e => {
						this.state.handleRef !== e && this.setState({
							handleRef: e
						})
					}
				}
				render() {
					return r.a.createElement(b.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, r.a.createElement(p.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const f = a.f + 10,
				h = r.a.memo(() => {
					const [e, t] = Object(s.useState)("-500px"), n = Object(s.useContext)(c.a);
					return r.a.createElement(b.Consumer, null, s => s && r.a.createElement("div", {
						className: Object(o.a)(u.a.wrapper, {
							[u.a.wrapperExp]: n
						}),
						"data-testid": "jump-to-content"
					}, r.a.createElement(d.t, {
						kind: d.b.Button,
						priority: d.c.Plain,
						className: u.a.button,
						style: {
							marginLeft: e
						},
						onBlur: e => {
							const n = e.currentTarget.clientWidth + 55;
							t(`-${n}px`)
						},
						onFocus: () => {
							t("0")
						},
						onClick: () => {
							s.focus(), s.scrollIntoView(), window.scrollBy(0, -f)
						}
					}, i.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), r.a.createElement("div", {
						className: Object(o.a)(u.a.rightBorder, {
							[u.a.rightBorderExp]: n
						})
					})))
				}),
				g = r.a.memo(() => r.a.createElement(p.Consumer, null, e => r.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/SidebarContainer/index.m.less"),
				r = n.n(s);
			t.a = i.a.div("container", r.a)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, n) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				NoneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				noneCapitalizeLink: "_3GijmRx58E2GzbuzKVHDex",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				CountryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR",
				countryLinkContainer: "_2G12SFsZiv6I_UJCbuf7qR"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				s = n.n(i),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = n("./src/reddit/constants/location.ts"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/helpers/getReredditLinkWithYear/index.ts"),
				p = n("./src/reddit/helpers/trackers/navigation.ts"),
				m = n("./src/reddit/selectors/experiments/countrySites.ts"),
				f = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				h = n("./src/reddit/selectors/meta.ts"),
				g = n("./src/reddit/components/SidebarFooter/index.m.less"),
				x = n.n(g);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), C = a.a.a("Link", x.a), S = Object(o.c)({
				isCountrySitesEnabled: m.a,
				isNavbarLikeMwebEnabled: f.a,
				countryCode: h.b
			}), O = Object(r.b)(S), v = Object(u.u)({
				isFrontpage: u.A,
				isCountrySitePage: u.y
			});
			t.a = v(O(Object(c.c)(e => e.isNavbarLikeMwebEnabled ? e.isFrontpage ? s.a.createElement(d.a, {
				className: x.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, s.a.createElement("div", {
				className: x.a.LinkContainer
			}, s.a.createElement("div", {
				className: x.a.Column
			}, s.a.createElement(C, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, y._("User Agreement", null, {
				hk: "2RA6JL"
			})), s.a.createElement(C, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, y._("Privacy policy", null, {
				hk: "10K04G"
			}))), s.a.createElement("div", {
				className: x.a.Column
			}, s.a.createElement(C, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, y._("Content policy", null, {
				hk: "1DyxZS"
			})), s.a.createElement(C, {
				href: "https://www.redditinc.com/policies/moderator-guidelines"
			}, y._("Moderator Guidelines", null, {
				hk: "2O9otm"
			})))), s.a.createElement("div", {
				className: x.a.Copyright
			}, y._("© {year} Reddit, Inc. All rights reserved.", [y._param("year", (new Date).getFullYear().toString())], {
				hk: "sR7zP"
			}))) : null : s.a.createElement(d.a, {
				className: x.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, s.a.createElement("div", {
				className: x.a.LinkContainer
			}, s.a.createElement("div", {
				className: x.a.Column
			}, s.a.createElement(C, {
				href: "https://www.reddithelp.com"
			}, y._("help", null, {
				hk: "4lyYaD"
			})), s.a.createElement(C, {
				href: "https://www.reddit.com/coins"
			}, y._("Reddit coins", null, {
				hk: "32iMaN"
			})), s.a.createElement(C, {
				href: "https://www.reddit.com/premium"
			}, y._("Reddit premium", null, {
				hk: "RuO3A"
			})), e.isFrontpage && s.a.createElement(s.a.Fragment, null, s.a.createElement(C, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, y._("Communities", null, {
				hk: "3CJu37"
			})), s.a.createElement(C, {
				href: `https://www.reddit.com${Object(b.a)()}`
			}, y._("Rereddit", null, {
				hk: "1z3k7C"
			})), s.a.createElement(C, {
				href: "https://www.reddit.com/topics/a-1/"
			}, y._("Topics", null, {
				hk: "349RFt"
			}))), !!l.b[e.countryCode] && s.a.createElement(s.a.Fragment, null, s.a.createElement(C, {
				href: "https://www.redditinc.com/de/policies/user-agreement"
			}, y._("Impressum", null, {
				hk: "4cKXSI"
			})), s.a.createElement(C, {
				href: "https://reddit.zendesk.com/hc/de/articles/360045289772-Deutschland-Meldungen-nach-dem-Netzwerkdurchsetzungsgesetz-NetzDG-"
			}, y._("Transparency report", null, {
				hk: "3CgBdG"
			})), s.a.createElement(C, {
				href: "https://reddit.zendesk.com/hc/de/requests/new?ticket_form_id=360000152352",
				className: x.a.NoneCapitalizeLink
			}, y._("Report NetzDG Content", null, {
				hk: "1nszCF"
			})))), s.a.createElement("div", {
				className: x.a.Column
			}, s.a.createElement(C, {
				href: "https://about.reddit.com"
			}, y._("about", null, {
				hk: "1sqJKs"
			})), s.a.createElement(C, {
				href: "https://about.reddit.com/careers/"
			}, y._("careers", null, {
				hk: "26ABvc"
			})), s.a.createElement(C, {
				href: "https://about.reddit.com/press/"
			}, y._("press", null, {
				hk: "2Qmgdz"
			})), s.a.createElement(C, {
				href: "https://www.redditinc.com/advertising"
			}, y._("advertise", null, {
				hk: "Mt40U"
			})), s.a.createElement(C, {
				href: "http://www.redditblog.com/"
			}, y._("blog", null, {
				hk: "46IQJw"
			})), s.a.createElement(C, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, y._("Terms", null, {
				hk: "4qRzfE"
			})), s.a.createElement(C, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, y._("Content policy", null, {
				hk: "1DyxZS"
			})), s.a.createElement(C, {
				href: "https://www.redditinc.com/policies/privacy-policy"
			}, y._("Privacy policy", null, {
				hk: "10K04G"
			})), s.a.createElement(C, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, y._("Mod policy", null, {
				hk: "2gYc2T"
			})))), (e.isCountrySitePage || e.isFrontpage && e.isCountrySitesEnabled) && s.a.createElement("div", {
				className: x.a.CountryLinkContainer
			}, s.a.createElement("div", {
				className: x.a.Column
			}, s.a.createElement(C, {
				href: "/",
				onClick: () => e.sendEvent(Object(p.a)("en"))
			}, y._("USA/Global", null, {
				hk: "3nQepG"
			}))), s.a.createElement("div", {
				className: x.a.Column
			}, s.a.createElement(C, {
				href: "/de/",
				onClick: () => e.sendEvent(Object(p.a)("de"))
			}, y._("Deutsch", null, {
				hk: "31zojm"
			})))), s.a.createElement("div", {
				className: x.a.Copyright
			}, y._("Reddit Inc © {year}. All rights reserved", [y._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			}))))))
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./src/reddit/components/SidebarSpacer/index.m.less"),
				s = n.n(i),
				r = n("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", s.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				StickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				stickyStylesFakeOverlay: "_2s8GkMW_LrglF6lvNpBQgE",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/constants/elementIds.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/components/BackToTop/index.m.less"),
				b = n.n(u);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = e => {
				if (e) {
					const e = document.getElementById(d.d);
					e && e.scroll(0, 0)
				} else window.scroll(0, 0)
			};
			var f = ({
					className: e,
					isOverlay: t,
					style: n
				}) => a.a.createElement("div", {
					className: Object(i.a)(e, b.a.container),
					style: n
				}, a.a.createElement(l.l, {
					className: b.a.button,
					onClick: () => m(t)
				}, p._("Back to Top", null, {
					hk: "YjBtV"
				}))),
				h = n("./src/reddit/components/SidebarFooter/index.tsx"),
				g = n("./src/reddit/constants/componentSizes.ts"),
				x = n("./src/reddit/contexts/PageLayer/index.tsx"),
				y = n("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				C = n.n(y),
				S = n("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const v = c.e[1] + 24,
				j = g.f + 8,
				E = j + 152 + 16,
				k = E + v + 8,
				w = S.a.div("Container", C.a),
				I = S.a.wrapped(({
					className: e,
					isOverlay: t,
					...n
				}) => a.a.createElement(f, O({
					className: e,
					isOverlay: t,
					style: {
						top: `calc(100vh - ${t?j:8}px)`
					}
				}, n)), "BackToTop", C.a),
				_ = ({
					children: e,
					className: t,
					isFakeOverlay: n,
					isSticky: s
				}) => a.a.createElement("div", {
					className: Object(i.a)(t, {
						[C.a.StickyStyles]: s && !n,
						[C.a.StickyStylesFakeOverlay]: !!n
					})
				}, e);
			class N extends o.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > k,
						shouldFooterSticky: this.windowHeight > E
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = r()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.K), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					var e;
					const {
						props: {
							adComponent: t,
							adComponentOnFakeOverlay: n,
							children: i,
							className: s,
							hideFooter: r,
							pageLayer: o
						}
					} = this, c = this.state.isAdSticky && !(!t && !i);
					return a.a.createElement(w, {
						className: s,
						innerRef: this.setWrapperRef
					}, a.a.createElement(_, {
						isFakeOverlay: n,
						isSticky: c
					}, t, i, !r && a.a.createElement(h.a, null)), !this.props.hideBackToTop && a.a.createElement(I, {
						isOverlay: !!(null === (e = null == o ? void 0 : o.locationState) || void 0 === e ? void 0 : e.isOverlay)
					}))
				}
			}
			const T = Object(x.u)();
			t.a = T(N)
		},
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				s = n.n(i),
				r = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class o extends s.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return s.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var a = Object(r.a)(o);
			t.a = e => s.a.createElement(a, e)
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const b = (e, t, n) => null != n ? n : t ? e : o.c.Plain,
				p = ({
					border: e,
					priority: t,
					small: n,
					...i
				}) => r.a.createElement(o.t, u({}, i, {
					priority: b(o.c.Primary, e, t),
					className: Object(l.a)(i.className, d.a.BaseButton),
					size: n ? o.d.S : o.d.M
				})),
				m = e => r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? i.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : i.fbt._("Following", null, {
					hk: "1wQlVR"
				})), r.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? i.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : i.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				f = ({
					buttonType: e,
					border: t,
					priority: n,
					small: i,
					...s
				}) => r.a.createElement(o.t, u({}, s, {
					priority: b(o.c.Secondary, t, n),
					className: Object(l.a)(s.className, d.a.BaseButton),
					size: i ? o.d.S : o.d.M,
					text: m(e)
				}));
			class h extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: n,
						priority: i,
						small: s = !1,
						isFullWidth: o = !1,
						style: c
					} = this.props, d = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: i,
						small: s,
						isFullWidth: o,
						style: c
					};
					return this.props.userIsSubscriber ? r.a.createElement(f, u({}, d, {
						buttonType: this.props.identifier.type
					})) : r.a.createElement(p, u({}, d, {
						id: n
					}), this.props.children, Object(a.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				s = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				r = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(s.a)(Object(i.c)(r.a))
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, n) {
			e.exports = {
				WidgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				widgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				TertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				tertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				StyledFlair: "ij57zT3Rtmsew_4V8vYmY",
				styledFlair: "ij57zT3Rtmsew_4V8vYmY",
				cloudDisplay: "l8B49A4v1dhWGGEwM7vYA",
				flairFilter: "_1Dpo5nORF-CHLCeoDHpZuR",
				Flair: "_3b9QdopIknN9AuNvj2kI9X",
				flair: "_3b9QdopIknN9AuNvj2kI9X",
				"m-selected": "XUSGYTFEMdkVpqVqn1ZsC",
				mSelected: "XUSGYTFEMdkVpqVqn1ZsC",
				flairFilterContainer: "qHKWh5t-0ZHqZ00w567bU",
				flairFilterButton: "_1Uh_u9ypgpntBJ_2RC1Ge3"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/fastdom/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/Flair/index.tsx"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = n("./src/reddit/constants/parameters.ts"),
				f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/helpers/correlationIdTracker.ts"),
				x = n("./src/reddit/helpers/flair.ts"),
				y = n("./src/reddit/helpers/trackers/postFlair.ts"),
				C = n("./src/reddit/models/Widgets/index.ts"),
				S = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				v = n.n(O);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const E = 129,
				k = Object(f.u)({
					filterName: e => Object(f.W)(e)[m.g],
					url: e => Object(f.eb)(e)
				}),
				w = Object(a.c)({
					subredditId: (e, t) => Object(S.D)(e, t.subredditName)
				}),
				I = Object(o.b)(w),
				_ = l.a.div("WidgetContent", v.a),
				N = ({
					display: e,
					isFlairFilter: t,
					onMouseDown: n,
					onClick: i,
					...s
				}) => r.a.createElement("li", {
					className: Object(c.a)(v.a.StyledFlair, e === C.g.Cloud && v.a.cloudDisplay, {
						[v.a.flairFilter]: t,
						[v.a["m-selected"]]: s.isSelected
					}),
					onClick: () => null == i ? void 0 : i(Object(x.g)(s.flair)),
					onMouseDown: n
				}, r.a.createElement(u.b, j({}, s, {
					className: v.a.Flair,
					isFlairFilter: t,
					forceSmallEmojis: !0
				})));
			class T extends r.a.Component {
				constructor(e) {
					super(e), this.flairListRef = r.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(y.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(y.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(y.d)())
					}, this.onClickFlair = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(g.e)(g.a.SearchResults), this.props.sendEvent(Object(y.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(x.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(x.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					d.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > E && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return r.a.createElement(h.r, {
						className: v.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? i.fbt._("See more", null, {
						hk: "2fWFes"
					}) : i.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: n
					} = this.props;
					return r.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => r.a.createElement(N, {
						key: e.templateId,
						display: n.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onClick: this.onClickFlair,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(x.e)(this.props.url, Object(x.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, n = t ? E : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return r.a.createElement("div", {
						className: v.a.flairFilterContainer,
						style: {
							maxHeight: n
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: n
					} = this.props;
					return r.a.createElement("ul", null, r.a.createElement(N, {
						key: e.templateId,
						display: n.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(x.e)(this.props.url, Object(x.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: n
					} = this.state, i = t.order, s = this.getFlairsFromIds(i), o = e && this.getSelectedFlair(s) || void 0, a = t.order.length > i.length || n && !o;
					return r.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, r.a.createElement(_, null, o && this.renderSelectedFlairFilter(o), !o && this.renderFlairFilters(s), a && this.renderButton()))
				}
			}
			t.a = k(I(Object(b.c)(T)))
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, n) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				s = n.n(i),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/reddit/components/SEOTitle/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/helpers/trackers/widgets.ts"),
				m = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				f = n("./src/reddit/selectors/experiments/topPosts.ts"),
				h = n("./src/reddit/selectors/structuredStyles.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/models/Theme/index.ts"),
				y = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const C = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(y.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				S = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(y.a)(e).widgetColors.sidebarWidgetHeaderColor,
				O = e => {
					const t = C(e);
					return Object(x.f)(t)
				},
				v = e => {
					const t = S(e);
					return Object(x.f)(t)
				};
			var j = n("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				E = n.n(j);
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js"), w = Object(u.u)(), I = Object(r.b)(() => Object(o.c)({
				forceRedditStyle: (e, t) => {
					const n = Object(u.n)(e, t) || void 0,
						i = t.redditStyle || Object(h.l)(e, {
							subredditId: n
						}),
						s = Object(g.X)(e);
					return i || s
				},
				nigtmode: g.X,
				subredditId: u.n,
				topPostVariant: f.d
			}));
			class _ extends s.a.Component {
				constructor() {
					super(...arguments), this.contentRef = s.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(Object(p.b)(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = C(this.props), e.borderColor = Object(m.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = O(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = S(this.props), e.color = e.fill = v(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: n,
						forceRedditStyle: i,
						headerButton: r,
						id: o,
						onClick: c,
						onHeaderClick: l,
						title: u,
						titleClassName: p,
						truncateThreshold: m
					} = this.props, f = n ? E.a.widgetContentOnly : E.a.widgetContent, h = !i && this.props.styles, g = h ? this.getWidgetBackgroundStyles() : {}, x = h ? this.getWidgetHeaderStyles() : {};
					return s.a.createElement("div", {
						className: Object(a.a)(t, E.a.widgetBackground, {
							[E.a.redditStyle]: i,
							[E.a.clickable]: !!c,
							[E.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": i,
						onClick: c,
						style: g
					}, u && s.a.createElement("div", {
						className: Object(a.a)(E.a.widgetHeader, {
							[E.a.clickable]: !!l
						}),
						id: o,
						style: x,
						onClick: l
					}, s.a.createElement("div", {
						className: Object(a.a)(E.a.widgetTitle, p)
					}, s.a.createElement(d.b, {
						type: d.a.Widget
					}, u)), r), s.a.createElement("div", {
						className: Object(a.a)(f, {
							[E.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && s.a.createElement(b.r, {
						className: E.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, k._("See More", null, {
						hk: "4w47Qu"
					})))
				}
			}
			t.a = w(I(Object(c.a)(Object(l.c)(_))))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "b", (function() {
				return w
			}));
			var i = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/actions/ads/index.ts"),
				a = n("./src/reddit/actions/focusedVerticals/index.ts"),
				c = n("./src/reddit/actions/gold/tooltips.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/postList.ts"),
				u = n("./src/reddit/actions/survey/index.ts"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				f = n("./src/reddit/helpers/trackers/post.ts"),
				h = n("./src/reddit/components/PostList/Placeholder.tsx"),
				g = n("./src/reddit/featureFlags/index.ts"),
				x = n("./src/reddit/selectors/experiments/survey.ts"),
				y = n("./src/reddit/selectors/listings.ts"),
				C = n("./src/reddit/selectors/posts.ts"),
				S = n("./src/reddit/selectors/subreddit.ts"),
				O = n("./src/reddit/selectors/tracking.ts");

			function v() {
				return Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isFrontpage: p.A,
					isProfilePostListing: p.L,
					isTopicPage: p.Q,
					pageLayer: e => e
				})
			}
			const j = v(),
				E = {
					apiError: y.c,
					apiPending: y.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.R)(e, t),
					loadMore: y.g,
					postsById: C.S,
					postIds: Object(r.a)((e, {
						listingKey: t,
						listingName: n,
						inSubredditOrProfile: i
					}) => Object(C.D)(e, t, n, i)),
					subredditsById: S.Z,
					viewportDataLoaded: O.a,
					pageReferrer: p.U,
					postListPlaceholderComponent: () => h.a,
					isNpsScrollSurveyEnabled: x.e
				},
				k = Object(s.c)(E),
				w = e => ({
					onBottomViewed: (t, n) => e(l.c(t, n)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(o.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(d.L(t))
					},
					fireAdPixelsOfType: (t, n) => {
						e(d.z(t, n))
					},
					trackOnPostEnteredViewport: (t, n, i, s) => {
						e(d.O(t, i, s))
					},
					trackOnPostExitedViewport: (t, n, i, s, r) => {
						e(d.P(t, i, s, r))
					},
					showModalOnScroll: () => e(d.bb()),
					surveyTriggerScrollCounted: () => e(Object(u.k)())
				}),
				I = e => Object(m.b)({
					...e
				}),
				_ = (e, t, n, i) => {
					const {
						listingKey: s,
						hostPostData: r,
						listingBelowVariant: o
					} = i;
					return Object(f.h)(e, t, "post", s, r, o, void 0)
				},
				N = Object(i.b)(k, w, (e, t, n) => ({
					...e,
					...t,
					...n,
					postComponentForLayout: I,
					postClickEventFactory: _
				}));
			t.a = e => Object(b.c)(j(N(e)))
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/structuredStyles/index.ts"),
				o = n("./src/reddit/selectors/activeModalId.ts"),
				a = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const d = Object(s.c)({
				bladeHasUnsavedChanges: a.a,
				isEditing: a.i,
				isBladeEditorDirty: a.h,
				isModalOpen: Object(o.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(i.b)(d, (e, {
				subredditId: t
			}) => ({
				requestCloseBlade: () => t && e(Object(r.h)(t))
			}))
		},
		"./src/reddit/constants/location.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			var i = n("./src/redditGQL/types.ts");
			const s = {
					ZZ: "No country identified",
					XZ: "No country identified",
					AF: "Afghanistan",
					AX: "Aland Islands",
					AL: "Albania",
					DZ: "Algeria",
					AS: "American Samoa",
					AD: "Andorra",
					AO: "Angola",
					AI: "Anguilla",
					AQ: "Antarctica",
					AG: "Antigua and Barbuda",
					AR: "Argentina",
					AM: "Armenia",
					AW: "Aruba",
					AU: "Australia",
					AT: "Austria",
					AZ: "Azerbaijan",
					BS: "Bahamas",
					BH: "Bahrain",
					BD: "Bangladesh",
					BB: "Barbados",
					BY: "Belarus",
					BE: "Belgium",
					BZ: "Belize",
					BJ: "Benin",
					BM: "Bermuda",
					BT: "Bhutan",
					BO: "Bolivia",
					BQ: "Bonaire, Sint Eustatius and Saba",
					BA: "Bosnia and Herzegovina",
					BW: "Botswana",
					BV: "Bouvet Island",
					BR: "Brazil",
					IO: "British Indian Ocean Territory",
					BN: "Brunei Darussalam",
					BG: "Bulgaria",
					BF: "Burkina Faso",
					BI: "Burundi",
					KH: "Cambodia",
					CM: "Cameroon",
					CA: "Canada",
					CV: "Cape Verde",
					KY: "Cayman Islands",
					CF: "Central African Republic",
					TD: "Chad",
					CL: "Chile",
					CX: "Christmas Island",
					CC: "Cocos (Keeling) Islands",
					CO: "Colombia",
					KM: "Comoros",
					CG: "Congo, Republic of the",
					CD: "Congo, The Democratic Republic of the",
					CK: "Cook Islands",
					CR: "Costa Rica",
					CI: "Cote d'Ivoire",
					HR: "Croatia",
					CU: "Cuba",
					CW: "Curacao",
					CY: "Cyprus",
					CZ: "Czech Republic",
					DK: "Denmark",
					DJ: "Djibouti",
					DM: "Dominica",
					DO: "Dominican Republic",
					EC: "Ecuador",
					EG: "Egypt",
					SV: "El Salvador",
					GQ: "Equatorial Guinea",
					ER: "Eritrea",
					EE: "Estonia",
					SZ: "Eswatini",
					ET: "Ethiopia",
					FK: "Falkland Islands (Malvinas)",
					FO: "Faroe Islands",
					FJ: "Fiji",
					FI: "Finland",
					FR: "France",
					GF: "French Guiana",
					PF: "French Polynesia",
					TF: "French Southern Territories",
					GA: "Gabon",
					GM: "Gambia",
					GE: "Georgia",
					DE: "Germany",
					GH: "Ghana",
					GI: "Gibraltar",
					GR: "Greece",
					GL: "Greenland",
					GD: "Grenada",
					GP: "Guadeloupe",
					GU: "Guam",
					GT: "Guatemala",
					GG: "Guernsey",
					GN: "Guinea",
					GW: "Guinea-Bissau",
					GY: "Guyana",
					HT: "Haiti",
					HM: "Heard Island and McDonald Islands",
					HN: "Honduras",
					HK: "Hong Kong",
					HU: "Hungary",
					IS: "Iceland",
					IN: "India",
					ID: "Indonesia",
					IR: "Iran",
					IQ: "Iraq",
					IE: "Ireland",
					IM: "Isle of Man",
					IL: "Israel",
					IT: "Italy",
					JM: "Jamaica",
					JP: "Japan",
					JE: "Jersey",
					JO: "Jordan",
					KZ: "Kazakhstan",
					KE: "Kenya",
					KI: "Kiribati",
					XK: "Kosovo",
					KW: "Kuwait",
					KG: "Kyrgyzstan",
					LA: "Laos",
					LV: "Latvia",
					LB: "Lebanon",
					LS: "Lesotho",
					LR: "Liberia",
					LY: "Libya",
					LI: "Liechtenstein",
					LT: "Lithuania",
					LU: "Luxembourg",
					MO: "Macao",
					MK: "Macedonia",
					MG: "Madagascar",
					MW: "Malawi",
					MY: "Malaysia",
					MV: "Maldives",
					ML: "Mali",
					MT: "Malta",
					MH: "Marshall Islands",
					MQ: "Martinique",
					MR: "Mauritania",
					MU: "Mauritius",
					YT: "Mayotte",
					MX: "Mexico",
					FM: "Micronesia",
					MD: "Moldova",
					MC: "Monaco",
					MN: "Mongolia",
					ME: "Montenegro",
					MS: "Montserrat",
					MA: "Morocco",
					MZ: "Mozambique",
					MM: "Myanmar",
					NA: "Namibia",
					NR: "Nauru",
					NP: "Nepal",
					NL: "Netherlands",
					NC: "New Caledonia",
					NZ: "New Zealand",
					NI: "Nicaragua",
					NE: "Niger",
					NG: "Nigeria",
					NU: "Niue",
					NF: "Norfolk Island",
					MP: "Northern Mariana Islands",
					NO: "Norway",
					OM: "Oman",
					PK: "Pakistan",
					PW: "Palau",
					PS: "Palestinian Territory",
					PA: "Panama",
					PG: "Papua New Guinea",
					PY: "Paraguay",
					PE: "Peru",
					PH: "Philippines",
					PN: "Pitcairn",
					PL: "Poland",
					PT: "Portugal",
					PR: "Puerto Rico",
					QA: "Qatar",
					RE: "Reunion",
					RO: "Romania",
					RU: "Russia",
					RW: "Rwanda",
					BL: "Saint Barthelemey",
					SH: "Saint Helena",
					KN: "Saint Kitts and Nevis",
					LC: "Saint Lucia",
					MF: "Saint Martin",
					PM: "Saint Pierre and Miquelon",
					VC: "Saint Vincent and the Grenadines",
					WS: "Samoa",
					SM: "San Marino",
					ST: "Sao Tome and Principe",
					SA: "Saudi Arabia",
					SN: "Senegal",
					RS: "Serbia",
					SC: "Seychelles",
					SL: "Sierra Leone",
					SG: "Singapore",
					SX: "Sint Maarten",
					SK: "Slovakia",
					SI: "Slovenia",
					SB: "Solomon Islands",
					SO: "Somalia",
					ZA: "South Africa",
					GS: "South Georgia and the South Sandwich Islands",
					KR: "South Korea",
					SS: "South Sudan",
					ES: "Spain",
					LK: "Sri Lanka",
					SD: "Sudan",
					SR: "Suriname",
					SJ: "Svalbard and Jan Mayen",
					SE: "Sweden",
					CH: "Switzerland",
					SY: "Syria",
					TW: "Taiwan",
					TJ: "Tajikistan",
					TZ: "Tanzania",
					TH: "Thailand",
					TL: "Timor-Leste",
					TG: "Togo",
					TK: "Tokelau",
					TO: "Tonga",
					TT: "Trinidad and Tobago",
					TN: "Tunisia",
					TR: "Turkey",
					TM: "Turkmenistan",
					TC: "Turks and Caicos Islands",
					TV: "Tuvalu",
					UG: "Uganda",
					UA: "Ukraine",
					AE: "United Arab Emirates",
					GB: "United Kingdom",
					US: "United States",
					UM: "United States Minor Outlying Islands",
					UY: "Uruguay",
					UZ: "Uzbekistan",
					VU: "Vanuatu",
					VA: "Vatican City (Holy See)",
					VE: "Venezuela",
					VN: "Vietnam",
					VG: "Virgin Islands, British",
					VI: "Virgin Islands, U.S.",
					WF: "Wallis and Futuna",
					EH: "Western Sahara",
					YE: "Yemen",
					ZM: "Zambia",
					ZW: "Zimbabwe",
					XX: "Other country"
				},
				r = {
					[i.e.De]: s[i.e.De],
					[i.e.At]: s[i.e.At]
				}
		},
		"./src/reddit/constants/promo.ts": function(e, t, n) {
			"use strict";
			var i, s;
			n.d(t, "b", (function() {
					return i
				})), n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.SignupUpsellCell = "signupUpsellBottomCell", e.SignupUpsellCellDismissible = "signupUpsellBottomCellDismissible", e.SignupUpsellBottomSheet = "signupUpsellBottomSheet"
				}(i || (i = {})),
				function(e) {
					e.Shown = "shown", e.Dismissed = "dismissed", e.Completed = "completed"
				}(s || (s = {}))
		},
		"./src/reddit/contexts/Promo/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = n("./node_modules/lodash/noop.js"),
				s = n.n(i),
				r = n("./node_modules/react/index.js");
			const o = r.createContext({
				showPromo: s.a,
				dismissPromo: s.a,
				completePromo: s.a,
				promos: new Map
			});
			t.a = o
		},
		"./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var i = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json"),
				r = n("./src/redditGQL/operations/UpdateNotificationPreferences.json");
			const o = (e, t) => Object(i.a)(e, {
					...s,
					variables: t
				}),
				a = (e, t) => Object(i.a)(e, {
					...r,
					variables: {
						input: {
							preferences: [t]
						}
					}
				})
		},
		"./src/reddit/helpers/getReredditLinkWithYear/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			const i = (e = new Date) => {
				const t = e.getFullYear();
				return `/posts/${e.getMonth()>=6?t:t-1}/`
			}
		},
		"./src/reddit/helpers/getSubredditErrorProps/index.ts": function(e, t, n) {
			"use strict";
			var i = n("./src/reddit/models/ContentGate.ts");
			t.a = (e, t, n) => {
				let s, r, o, a, c, d, l, u, b, p, m;
				return e ? e.quarantinedSubreddit ? (r = i.a.QuarantinedSubreddit, a = e.quarantineMessage, c = e.quarantineMessageHtml, d = e.quarantineRequiresEmail) : e.privateSubreddit ? (r = i.a.PrivateSubreddit, o = e.subredditDescription, l = e.isContributorRequestsDisabled, u = e.isContributorRequestTimestamp) : e.goldSubreddit ? r = i.a.GoldSubreddit : e.subredditBanned ? (r = i.a.SubredditBanned, s = e.subredditBanMessage) : e.subredditDoesNotExist ? r = i.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason ? r = i.a.SubredditBlockedForLegalReason : e.interstitialWarningMessage && (r = i.a.GatedSubreddit, b = e.interstitialWarningMessage, p = e.interstitialWarningMessageHtml, m = e.interstitialWarningMessageRTJson) : t && (r = i.a.Nsfw), r && n ? {
					banMessage: s,
					contentGateType: r,
					isContributorRequestsDisabled: l,
					isContributorRequestTimestamp: u,
					subredditDescription: o,
					subredditName: n,
					quarantineMessage: a,
					quarantineMessageHtml: c,
					quarantineRequiresEmail: d,
					interstitialWarningMessage: b,
					interstitialWarningMessageHtml: p,
					interstitialWarningMessageRTJson: m
				} : void 0
			}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var i = n("./node_modules/brcast/dist/brcast.es.js");
			const s = Object(i.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/trackers/inbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return i
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "t", (function() {
				return b
			})), n.d(t, "p", (function() {
				return p
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "r", (function() {
				return f
			})), n.d(t, "s", (function() {
				return h
			})), n.d(t, "v", (function() {
				return g
			})), n.d(t, "k", (function() {
				return x
			})), n.d(t, "u", (function() {
				return y
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "l", (function() {
				return S
			})), n.d(t, "w", (function() {
				return O
			})), n.d(t, "o", (function() {
				return v
			})), n.d(t, "n", (function() {
				return j
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "i", (function() {
				return k
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "g", (function() {
				return I
			})), n.d(t, "q", (function() {
				return _
			}));
			var i, s, r, o, a, c, d = n("./src/reddit/constants/tracking.ts"),
				l = n("./src/reddit/selectors/telemetry.ts"),
				u = n("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(i || (i = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.HideUpdates = "hide_updates", e.BlockAwarder = "block_awarder", e.DecreaseSubredditUpdates = "disable_frequent"
			}(s || (s = {})),
			function(e) {
				e.MiniInbox = "mini_inbox", e.Inbox = "inbox"
			}(r || (r = {})),
			function(e) {
				e.Inbox = "inbox", e.Nav = "nav", e.Settings = "notification_app_settings"
			}(o || (o = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND"
			}(a || (a = {})),
			function(e) {
				e.Confirm = "confirm"
			}(c || (c = {}));
			const b = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: i
				}) => s => ({
					...l.o(s),
					action: d.c.VIEW,
					noun: "inbox_notification",
					source: o.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: i
					}
				}),
				p = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: i,
					awardId: s
				}) => r => {
					Object(u.a)({
						...l.o(r),
						action: "receive",
						noun: "inbox_notification",
						source: o.Inbox,
						inbox: {
							id: e,
							isClicked: t,
							isViewed: n
						},
						notification: {
							type: i
						},
						goldPurchase: {
							awardId: s
						}
					})
				},
				m = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: i,
					awardId: s,
					position: r,
					postId: a,
					subredditId: c
				}) => u => ({
					...l.o(u),
					action: d.c.CLICK,
					noun: "inbox_notification",
					source: o.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: i
					},
					goldPurchase: {
						awardId: s
					},
					actionInfo: {
						position: r
					},
					subreddit: c ? {
						id: c
					} : null,
					post: a ? {
						id: a
					} : null
				}),
				f = ({
					badgeCount: e,
					tab: t
				}) => n => ({
					...l.o(n),
					action: d.c.VIEW,
					noun: "inbox",
					source: o.Inbox,
					inbox: {
						badgeCount: e,
						tab: t
					}
				}),
				h = ({
					badgeCount: e,
					tab: t
				}) => t => ({
					...l.o(t),
					action: d.c.VIEW,
					noun: "mini_inbox",
					source: o.Inbox,
					inbox: {
						badgeCount: e,
						tab: i.Activity
					}
				}),
				g = ({
					badgeCount: e
				}) => t => ({
					...l.o(t),
					action: d.c.CLICK,
					noun: "inbox",
					source: o.Nav,
					inbox: {
						badgeCount: e
					}
				}),
				x = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: i,
					awardId: s
				}) => r => ({
					...l.o(r),
					action: d.c.CLICK,
					noun: "inbox_notification_overflow",
					source: o.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: i
					},
					goldPurchase: {
						awardId: s
					}
				}),
				y = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: i
				}) => s => ({
					...l.o(s),
					action: d.c.VIEW,
					noun: "inbox_notification_overflow",
					source: o.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: i
					}
				});
			var C;
			! function(e) {
				e.Cats = "cats", e.Memes = "memes", e.Karma = "karma_free_subs", e.PN_perms = "pn_perms", e.Email_perms = "email_perms"
			}(C || (C = {}));
			const S = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: i,
					type: s
				}) => r => ({
					...l.o(r),
					action: d.c.CLICK,
					noun: "overflow_option",
					source: o.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: i
					},
					notification: {
						type: s
					},
					actionInfo: {
						...l.d(r),
						type: e
					}
				}),
				O = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: i,
					type: s
				}) => r => ({
					...l.o(r),
					action: d.c.UNDO,
					noun: "overflow_option",
					source: o.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: i
					},
					notification: {
						type: s
					},
					actionInfo: {
						...l.d(r),
						type: e
					}
				}),
				v = ({
					actionInfoType: e
				}) => t => ({
					...l.o(t),
					action: d.c.CLICK,
					noun: "empty_state_cta",
					source: o.Inbox,
					actionInfo: {
						...l.d(t),
						type: e
					}
				}),
				j = e => t => ({
					...l.o(t),
					action: d.c.CLICK,
					noun: "notification_app_settings",
					source: o.Inbox,
					actionInfo: {
						...l.d(t),
						pageType: e
					}
				}),
				E = () => e => ({
					...l.o(e),
					action: d.c.CLICK,
					noun: "see_all",
					source: o.Inbox,
					actionInfo: {
						...l.d(e),
						pageType: r.MiniInbox
					}
				}),
				k = () => e => ({
					...l.o(e),
					action: d.c.CLICK,
					noun: "messages",
					source: o.Inbox
				}),
				w = ({
					isMiniInbox: e
				}) => t => ({
					...l.o(t),
					action: d.c.CLICK,
					noun: "mark_all_as_read",
					source: o.Inbox,
					actionInfo: e ? {
						...l.d(t),
						pageType: r.MiniInbox
					} : {}
				}),
				I = (e, t) => n => ({
					...l.o(n),
					action: d.c.CLICK,
					noun: "policy_banner",
					source: o.Inbox,
					actionInfo: {
						...l.d(n),
						pageType: e,
						type: t
					}
				}),
				_ = () => e => ({
					...l.o(e),
					action: d.c.CLICK,
					noun: "inbox_banner",
					source: o.Inbox,
					actionInfo: {
						...l.d(e),
						type: "2021Recap"
					}
				})
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			n("./src/reddit/constants/categories.tsx");
			var i = n("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					screen: i.bb(e),
					profile: i.S(e),
					subreddit: i.jb(e)
				}),
				r = e => t => ({
					action: "click",
					source: "nav",
					noun: e,
					...s(t)
				}),
				o = e => t => ({
					...s(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				a = e => t => ({
					...s(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				}),
				c = e => t => ({
					...s(t),
					source: "nav",
					action: "click",
					noun: `lang_${e}`
				})
		},
		"./src/reddit/helpers/trackers/widgets.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			}));
			var i, s, r = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.REREDDIT_PROMO = "rereddit_promo", e.SEE_MORE = "see_more", e.TOPIC = "topic", e.TOPICS_WIDGET = "topics_widget"
			}(i || (i = {})),
			function(e) {
				e.COMMUNITY_WIDGETS = "community_widgets", e.POST = "post", e.SIDEBAR = "sidebar", e.TOPICS_WIDGET = "topics_widget"
			}(s || (s = {}));
			const a = (e, t) => n => ({
					source: s.COMMUNITY_WIDGETS,
					action: r.c.CLICK,
					noun: i.SEE_MORE,
					widget: Object(o.xb)(n, {
						subredditId: e,
						widgetKind: t
					}),
					...o.o
				}),
				c = (e, t) => n => ({
					source: s.POST,
					action: r.c.CLICK,
					noun: i.REREDDIT_PROMO,
					post: o.J(n, e),
					subreddit: o.jb(n),
					...t && {
						banner: {
							buttonText: t,
							id: i.REREDDIT_PROMO
						}
					},
					...o.o(n)
				}),
				d = () => e => ({
					source: s.SIDEBAR,
					action: r.c.VIEW,
					noun: i.TOPICS_WIDGET,
					...o.o(e)
				}),
				l = e => t => ({
					source: s.TOPICS_WIDGET,
					action: r.c.CLICK,
					noun: i.TOPIC,
					...o.o(t),
					topicMetadata: {
						displayName: e
					}
				})
		},
		"./src/reddit/hooks/useWindowEvent.ts": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js");
			const s = (e, t) => {
				Object(i.useEffect)(() => (window.addEventListener(e, t), () => window.removeEventListener(e, t)), [e, t])
			};
			t.a = s
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, n) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				s = n.n(i),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/constants/colors.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				d = n.n(c);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				className: Object(r.a)(e.className, Object(a.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || o.a.gold
				}
			}), "CoinIcon", d.a);
			t.a = l
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.m.less": function(e, t, n) {
			e.exports = {
				backgroundContainer: "_2wxsLGNmMLx6sEMLJyn2o9"
			}
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var i = n("./node_modules/react/index.js"),
				s = n.n(i),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/layout/page/Listing/BackgroundContainer.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const b = Object(o.a)(e => {
				const {
					backgroundColor: t,
					className: n,
					redditStyle: i,
					theme: o,
					...d
				} = e, b = Object(c.a)(e), p = {
					"--pseudo-before-background": t || Object(a.g)(b.canvas, b.canvasImgUrl, b.canvasImgPosition)
				};
				return s.a.createElement("div", u({
					className: Object(r.a)(l.a.backgroundContainer, n),
					style: p
				}, d))
			})
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, n) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7",
				onlyChildMargin: "_2OVNlZuUd8L9v0yVECZ2iA"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				s = n.n(i),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/structuredStyles.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.m.less"),
				b = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(d.u)(),
				f = Object(o.c)({
					isEditing: l.i,
					layout: (e, t) => t.forcedLayout || Object(d.R)(e, t)
				}),
				h = Object(r.b)(f);
			t.a = m(h(({
				className: e,
				hideOnlyChildMargin: t,
				disableFullscreen: n,
				dispatch: i,
				fitPageToContent: r,
				forcedLayout: o,
				isCollectionLayout: l,
				isEditing: u,
				layout: m,
				pageLayer: f,
				...h
			}) => s.a.createElement("div", p({
				className: Object(a.a)(e, b.a.styledContent, {
					[b.a.mLargePostLayout]: m === c.g.Large || Object(d.O)(f),
					[b.a.mDisableFullScreen]: n && !l,
					[b.a.mClassicWidth]: l,
					[b.a.mIsEditing]: !!u,
					[b.a.mCanFlexFullWidth]: !r,
					[b.a.onlyChildMargin]: !t
				})
			}, h))))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, n) {
			e.exports = {
				body: "_31N0dvxfpsO6Ur5AKx4O5d",
				sidebar: "_3Kd8DQpBIbsr5E1JcrMFTY",
				defaultLayout: "_1tvThPWQpORoc2taKebHxs",
				"m-collectionLayout": "K1OCXipJxqOt01sOdQXEx",
				mCollectionLayout: "K1OCXipJxqOt01sOdQXEx",
				outerContainer: "qYj03fU5CXf5t2Fc5iSvg",
				outerContainerExp: "_35NDNOyTzBcywfeEavUt6p",
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				s = n.n(i),
				r = n("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				o = n("./src/reddit/layout/page/Listing/Content.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/componentSizes.ts"),
				d = n("./src/reddit/constants/elementClassNames.ts"),
				l = n("./src/reddit/constants/screenWidths.ts"),
				u = n("./src/reddit/contexts/NavbarExp.ts"),
				b = n("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				p = n("./src/reddit/layout/page/Listing/index.m.less"),
				m = n.n(p);
			t.a = e => {
				const {
					backgroundColor: t,
					className: n,
					containerRef: p,
					content: f,
					contentBanner: h,
					contentClassName: g,
					contentNavBar: x,
					disableFullscreen: y,
					fitPageToContent: C,
					forcedLayout: S,
					hideOnlyChildMargin: O,
					isCollectionLayout: v,
					isPageSwapped: j,
					maxWidth: E,
					navBar: k,
					redditStyle: w,
					sidebar: I,
					sidebars: _,
					trendingUnit: N,
					subredditId: T
				} = e, L = N ? "28px" : "0", P = j ? {
					marginRight: `${c.q}px`,
					marginTop: L
				} : {
					marginLeft: `${c.q}px`,
					marginTop: L
				}, M = I && s.a.createElement("div", {
					className: Object(a.a)(m.a.sidebar, v ? m.a["m-collectionLayout"] : m.a.defaultLayout),
					style: P
				}, I), R = s.a.createElement(o.a, {
					hideOnlyChildMargin: O,
					className: g,
					disableFullscreen: y,
					fitPageToContent: C,
					forcedLayout: S,
					isCollectionLayout: v
				}, h, f);
				let F;
				F = _ ? s.a.createElement(s.a.Fragment, null, _[0], R, _[1]) : j ? s.a.createElement(s.a.Fragment, null, M, R) : s.a.createElement(s.a.Fragment, null, R, M);
				const B = y ? `${E||l.a+2*c.m}px` : "100%",
					A = Object(i.useContext)(u.a);
				return s.a.createElement(b.a, {
					subredditId: T
				}, s.a.createElement("div", {
					className: Object(a.a)(m.a.outerContainer, d.i, n, {
						[m.a.outerContainerExp]: A
					}),
					ref: p
				}, s.a.createElement(r.a, {
					className: d.h,
					redditStyle: w,
					backgroundColor: t
				}), s.a.createElement("div", {
					className: m.a.innerContainer
				}, k, x, (e => e.hero ? s.a.createElement(s.a.Fragment, null, e.hero) : null)(e), s.a.createElement("div", {
					style: {
						maxWidth: B
					}
				}, N), s.a.createElement("div", {
					className: m.a.body,
					style: {
						maxWidth: B
					}
				}, F))))
			}
		},
		"./src/reddit/models/ContentGate.ts": function(e, t, n) {
			"use strict";
			var i;
			n.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.CustomFeedDoesNotExist = "CustomFeedDoesNotExist", e.GoldSubreddit = "GoldSubreddit", e.Nsfw = "Nsfw", e.NsfwCustomFeed = "NsfwCustomFeed", e.PrivateSubreddit = "PrivateSubreddit", e.ProfileDoesNotExist = "ProfileDoesNotExist", e.ProfileDeleted = "ProfileDeleted", e.ProfileSuspended = "ProfileSuspended", e.ProfileBlockedForLegalReason = "ProfileBlockedForLegalReason", e.QuarantinedSubreddit = "QuarantinedSubreddit", e.GatedSubreddit = "GatedSubreddit", e.SubredditBanned = "SubredditBanned", e.SubredditBlockedForLegalReason = "SubredditBlockedForLegalReason", e.SubredditDoesNotExist = "SubredditDoesNotExist", e.PostBlockedForLegalReason = "PostBlockedForLegalReason"
				}(i || (i = {}))
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(e, t, n) {
			"use strict";
			var i, s, r, o;
			n.d(t, "a", (function() {
					return i
				})), n.d(t, "b", (function() {
					return s
				})), n.d(t, "c", (function() {
					return r
				})),
				function(e) {
					e.AwardReceived = "AWARD_RECEIVED", e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.CommentFollow = "COMMENT_FOLLOW", e.CommentReply = "COMMENT_REPLY", e.HFNSubredditInterestingPost = "SUBREDDIT_UPDATES_INTERESTING_POST", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.PostFollow = "POST_FOLLOW", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.RedditLore = "REDDIT_LORE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER"
				}(i || (i = {})),
				function(e) {
					e.Award = "AWARD", e.Bell = "BELL", e.Chat = "CHAT", e.Comment = "COMMENT", e.Heart = "HEART", e.Live = "LIVE", e.Lore = "LORE", e.NotifyAll = "NOTIFY_ALL", e.Redditor = "REDDITOR", e.Reply = "REPLY", e.SortLive = "SORT_LIVE", e.SortRising = "SORT_RISING", e.SortTop = "SORT_TOP", e.Trophy = "TROPHY", e.Upvote = "UPVOTE"
				}(s || (s = {})),
				function(e) {
					e.CopyrightTakedown = "COPYRIGHT_TAKEDOWN", e.ContentTakedown = " CONTENT_TAKEDOWN", e.Author = "AUTHOR", e.Moderator = "MODERATOR", e.CommunityOps = "COMMUNITY_OPS", e.AntiEvilOps = "ANTI_EVIL_OPS", e.Reddit = "REDDIT", e.Deleted = "DELETED", e.AutomodFiltered = "AUTOMOD_FILTERED"
				}(r || (r = {})),
				function(e) {
					e.InboxNotification = "InboxNotification", e.InboxNotificationContext = "InboxNotificationContext", e.NotificationIcon = "NotificationIcon", e.AwardReceivedInboxNotificationContext = "AwardReceivedInboxNotificationContext", e.BasicInboxNotificationContext = "BasicInboxNotificationContext", e.CommentInboxNotificationContext = "CommentInboxNotificationContext", e.PostInboxNotificationContext = "PostInboxNotificationContext", e.PostSubredditInboxNotificationContext = "PostSubredditInboxNotificationContext", e.SubredditInboxNotificationContext = "SubredditInboxNotificationContext"
				}(o || (o = {}))
		},
		"./src/reddit/models/NotificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			var i;
			n.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.Email = "EMAIL", e.Push = "PUSH", e.CommunityAlerts = "COMMUNITY_ALERTS", e.ModCommunityAlerts = "MOD_COMMUNITY_ALERTS"
				}(i || (i = {}))
		},
		"./src/reddit/routes/powerups/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var i = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/powerups.ts");
			const o = "/powerups",
				a = {
					action: r.a,
					chunk: s.s.POWERUPS,
					component: Object(i.a)({
						resolved: {},
						chunkName: () => "Powerups",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Powerups").then(n.bind(null, "./src/reddit/pages/Powerups/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Powerups/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: s.Nb.POWERUPS,
						isResponsive: !0
					},
					path: o
				};
			t.b = a
		},
		"./src/reddit/selectors/experiments/joinOptimizations.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "e", (function() {
				return b
			}));
			var i = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts");
			const a = Object(i.a)(e => Object(r.c)(e, {
					experimentName: s.xb,
					experimentEligibilitySelector: o.e
				}), e => e === s.U.Enabled),
				c = Object(i.a)(e => Object(r.c)(e, {
					experimentName: s.yb,
					experimentEligibilitySelector: o.e
				}), e => e === s.V.Enabled),
				d = Object(i.a)(e => Object(r.c)(e, {
					experimentName: s.zb,
					experimentEligibilitySelector: o.e
				}), e => e === s.W.Enabled),
				l = Object(i.a)(e => Object(r.c)(e, {
					experimentName: s.Ab,
					experimentEligibilitySelector: o.e
				}), e => e === s.X.Enabled),
				u = Object(i.a)(e => Object(r.c)(e, {
					experimentName: s.Cb,
					experimentEligibilitySelector: o.e
				}), e => e === s.Z.Enabled),
				b = Object(i.a)(e => Object(r.c)(e, {
					experimentName: s.Bb,
					experimentEligibilitySelector: o.e
				}), e => e === s.Y.Enabled)
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			var i = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => Object(s.c)(e, {
					experimentName: i.Pd,
					experimentEligibilitySelector: s.a
				}) === i.Zd.Enabled,
				o = e => Object(s.c)(e, {
					experimentName: i.Qd,
					experimentEligibilitySelector: s.a,
					expEventOverride: !1
				}) === i.ae.Enabled
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "d", (function() {
				return S
			}));
			var i = n("./src/lib/objectSelector/index.ts"),
				s = n("./src/reddit/featureFlags/index.ts"),
				r = n("./src/reddit/selectors/posts.ts"),
				o = n("./src/reddit/selectors/subreddit.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const c = (e, t) => {
					const n = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (n) {
						const t = Object(o.S)(e, {
							subredditId: n
						});
						return t && t.displayText || ""
					}
					return ""
				},
				d = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				l = e => e.focusedVerticals.components.dismissed,
				u = [],
				b = Object(i.a)((e, t) => {
					const n = p(e, t);
					if (!n) return u;
					const i = Object(o.W)(e, {
						subredditName: n.name
					});
					return i && i.postIds && i.postIds.length ? i.postIds : u
				}),
				p = (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(o.S)(e, {
						subredditId: n
					}) : null
				},
				m = (e, t, n, i, s) => {
					const o = s.find(e => e <= t) || -1,
						a = s.find(e => e > t) || 1 / 0;
					return t !== a && t !== o && (!(o + n > t) && (!(t + n > a) && !((e, t, n) => {
						const i = n[t - 1],
							s = n[t],
							o = s && Object(r.G)(e, {
								postId: i
							}) || null,
							a = s && Object(r.G)(e, {
								postId: s
							}) || null;
						return o && o.isSponsored || a && a.isSponsored
					})(e, t, i)))
				},
				f = [3],
				h = Object(i.a)((e, {
					existingDUPositions: t,
					listingProps: n
				}) => {
					const i = t.slice().sort();
					let s = -1;
					const o = Object(r.z)(e, {
							listingKey: n.listingKey
						}),
						a = [];
					return f.forEach(t => {
						let n = s + t;
						if (!(n >= o.length)) {
							for (; n < o.length && !m(e, n, t, o, i);) n += 1;
							n < o.length && (a.push(n), s = n)
						}
					}), a
				}),
				g = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				x = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				y = e => e.focusedVerticals.category,
				C = e => e.focusedVerticals.lastLoadedEnv,
				S = e => {
					const t = Object(a.J)(e),
						n = s.d.geoSubredditRecommendationDULoggedIn(e),
						i = s.d.geoSubredditRecommendationDULoggedOut(e);
					return t && n || !t && i
				}
		},
		"./src/reddit/selectors/gold/powerups/modSignup.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			var i = n("./src/reddit/featureFlags/subredditPoints.ts"),
				s = n("./src/reddit/selectors/moderatorPermissions.ts"),
				r = n("./src/reddit/selectors/user.ts"),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/selectors/gold/powerups/index.ts");
			const c = e => {
					const t = Object(s.a)(e);
					if (!t) return null;
					const n = Object(r.H)(e),
						o = [];
					for (const s of t) {
						const t = e.subreddits.models[s];
						if (!t) return null;
						const r = Object(a.h)(e, {
							subredditId: s
						});
						i.b.has(t.name) || t.isNSFW || t.subscribers < 1e3 && !n || o.push({
							id: s,
							displayText: t.displayText,
							hasPowerups: r
						})
					}
					return o
				},
				d = Object(o.a)(c, e => !!(null == e ? void 0 : e.length))
		},
		"./src/reddit/selectors/notificationPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "g", (function() {
				return r
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			const i = e => e.user.notificationPrefs.api.getPreferences.loaded,
				s = e => e.user.notificationPrefs.api.getPreferences.pending,
				r = e => e.user.notificationPrefs.api.setPreferences.pending,
				o = e => e.user.notificationPrefs.preferences,
				a = e => e.user.notificationPrefs.isNotificationPromptVisible,
				c = (e, t) => {
					var n, i;
					const s = (e => e.user.notificationPrefs.pushSettingsLayout)(e),
						r = null === (n = null == s ? void 0 : s.rows) || void 0 === n ? void 0 : n.byId;
					return r && (null === (i = r[t]) || void 0 === i ? void 0 : i.isEnabled)
				},
				d = (e, t) => !t.some(t => c(e, t))
		},
		"./src/reddit/selectors/notificationsInbox.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "h", (function() {
				return f
			}));
			var i = n("./src/lib/notifications/constants.ts"),
				s = n("./src/reddit/actions/notifications/utils.ts"),
				r = n("./node_modules/reselect/es/index.js");
			const o = e => e.notificationsInbox && e.notificationsInbox.api && e.notificationsInbox.api.pending,
				a = e => e.notificationsInbox && e.notificationsInbox.pageInfo,
				c = Object(r.a)(a, e => !(!e || !e.hasNextPage)),
				d = Object(r.a)(a, e => e && e.endCursor),
				l = e => e.notificationsInbox && e.notificationsInbox.notifications,
				u = Object(r.a)(l, e => e.slice(0, 5)),
				b = e => e.notificationsInbox && e.notificationsInbox.earlierDividerIndex,
				p = Object(r.a)(l, b, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(0, n)
					}
					return e
				}),
				m = Object(r.a)(l, b, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(n)
					}
					return null
				}),
				f = Object(r.a)(s.a, e => e === i.c.NotificationsSupported)
		},
		"./src/reddit/selectors/searchQueryId.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			const i = e => e.searchQueryId
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			const i = (e, {
				listingKey: t
			}) => e.tracking.viewportDataLoaded[t]
		},
		"./src/redditGQL/operations/BlockAwarder.json": function(e) {
			e.exports = JSON.parse('{"id":"9769ffbb7031"}')
		},
		"./src/redditGQL/operations/DeleteInboxNotifications.json": function(e) {
			e.exports = JSON.parse('{"id":"ce2deb9deef7"}')
		},
		"./src/redditGQL/operations/NotificationInboxFeed.json": function(e) {
			e.exports = JSON.parse('{"id":"6bc40669baab"}')
		},
		"./src/redditGQL/operations/NotificationInboxFeedSlimmed.json": function(e) {
			e.exports = JSON.parse('{"id":"916e9e9be5e0"}')
		},
		"./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json": function(e) {
			e.exports = JSON.parse('{"id":"d03522f8a8d4"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"434c4bc6d67b"}')
		},
		"./src/redditGQL/operations/UpdateInboxActivitySeenState.json": function(e) {
			e.exports = JSON.parse('{"id":"85d656894a08"}')
		},
		"./src/redditGQL/operations/UpdateNotificationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"129085be0500"}')
		},
		"./src/redditGQL/operations/UserSubredditsNotificationsLevel.json": function(e) {
			e.exports = JSON.parse('{"id":"8404d1f9e84d"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit~Subreddit.30fa5b9b6a8286b33b64.js.map