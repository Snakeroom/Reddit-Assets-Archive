// https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit.20de87db84212cd9b20d.js
// Retrieved at 8/10/2022, 11:20:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~Subreddit"], {
		"./src/higherOrderComponents/withAdClickLocation/Locations.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.UNKNOWN = "unknown", e.TITLE = "title", e.TOP_BAR = "top_bar", e.MEDIA = "media", e.BACKGROUND = "background", e.CTA_URL = "cta_url", e.CTA_BUTTON = "cta_button", e.CTA_WHITESPACE = "cta_whitespace", e.CTA_CAPTION = "cta_caption"
				}(r || (r = {}))
		},
		"./src/lib/CSSVariableProvider/withTheme.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/CSSVariableProvider/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e) {
				const t = t => s.a.createElement(o.b.Consumer, null, n => s.a.createElement(e, i({
					theme: n
				}, t)));
				return t.displayName = `WithTheme(${e.displayName||e.name})`, t
			}
		},
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/constants/intlSupport.ts");

			function i(e) {
				let {
					showDay: t,
					useUtc: n,
					shortMonths: i,
					locale: c = r.DEFAULT_LOCALE
				} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				const a = new Date(e * s.Sb);
				return o.a ? new Intl.DateTimeFormat(c, {
					month: i ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: n ? "UTC" : void 0
				}).format(a) : a.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.DEFAULT_LOCALE;
				const n = e.toString().length > 10,
					s = new Date(e * (n ? 1 : 1e3));
				return s.toLocaleString(t, {
					weekday: "short",
					month: "short",
					year: "numeric",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					timeZoneName: "short",
					timeZone: "UTC"
				})
			}
		},
		"./src/realtime/GQLSubscription/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/lib/loadWithRetries/index.ts");
			const o = Object(r.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(s.a)(() => Promise.all([n.e(2), n.e("vendors~ChatPost~RealtimeGQLSubscriptionAsync"), n.e("RealtimeGQLSubscriptionAsync")]).then(n.bind(null, "./src/realtime/GQLSubscription/index.tsx"))).then(e => e.default)
			});
			t.a = o
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "EMBEDS__UNLOADABLE",
				o = "EMBEDS__LOADABLE",
				i = Object(r.a)(s),
				c = Object(r.a)(o)
		},
		"./src/reddit/actions/jsApi.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "JSAPI__CONSUMER_SUBSCRIBED",
				o = Object(r.a)(s)
		},
		"./src/reddit/actions/notificationSettingsLayout/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "k", (function() {
				return m
			}));
			const r = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__FAILED",
				s = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__LOADED",
				o = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__PENDING",
				i = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__FAILED",
				c = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__LOADED",
				a = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__PENDING",
				d = "NOTIFICATION_SETTINGS_LAYOUT_UPDATED",
				l = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_FAILED",
				u = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_LOADED",
				b = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_PENDING",
				m = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_UPDATED"
		},
		"./src/reddit/actions/notificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "b", (function() {
				return C
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/redditGQL/operations/UserSubredditsNotificationsLevel.json");
			var l = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts");
			const b = Object(s.a)(o.c),
				m = Object(s.a)(o.b),
				f = Object(s.a)(o.a),
				p = Object(s.a)(o.f),
				O = Object(s.a)(o.e),
				I = Object(s.a)(o.d),
				_ = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					e === l.a.Push ? t(p()) : t(b()), await async function(e, t, n) {
						const r = await Object(c.a)(e(), {
							channel: t
						});
						if (r.ok && r.body) {
							const e = function(e) {
								const t = e && e.data,
									n = t && t.notificationSettingsLayoutByChannel,
									r = n && n.sections;
								if (r) return function(e) {
									const t = {},
										n = [];
									let r = {},
										s = [];
									const o = e => {
										const {
											rowIds: o,
											rowsCollection: i
										} = function(e) {
											const t = [],
												n = {};
											if (e.rows)
												for (let r = 0; r < e.rows.length; r++) {
													const s = e.rows[r],
														o = s.messageType;
													t.push(o), n[o] = s
												}
											return {
												rowsCollection: n,
												rowIds: t
											}
										}(e);
										r = {
											...r,
											...i
										}, s = [...s, ...o];
										const c = e.id;
										n.push(c), t[c] = {
											...e,
											rows: o
										}
									};
									for (let i = 0; i < e.length; i++) o(e[i]);
									return {
										sections: {
											byId: t,
											allIds: n
										},
										rows: {
											byId: r,
											allIds: s
										}
									}
								}(r)
							}(r.body);
							t === l.a.Push ? n(O(e)) : n(m(e))
						} else t === l.a.Push ? n(I({
							error: r.error
						})) : n(f({
							error: r.error
						}))
					}(s, e, t)
				};
			const h = Object(s.a)(o.g),
				x = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					(await Object(c.b)(o(), e)).ok ? (j(t, e), function(e) {
						e(Object(i.f)({
							kind: u.b.SuccessCommunity,
							text: r.fbt._("Changes saved", null, {
								hk: "UBoVR"
							})
						}))
					}(t)) : function(e) {
						e(Object(i.f)({
							kind: u.b.Error,
							text: r.fbt._("We had some issues saving your changes. Please try again.", null, {
								hk: "1OvQi6"
							})
						}))
					}(t)
				};

			function j(e, t) {
				e(h({
					isEnabled: t.isEnabled,
					messageType: t.messageType
				}))
			}
			const E = Object(s.a)(o.j),
				S = Object(s.a)(o.i),
				g = Object(s.a)(o.k),
				T = Object(s.a)(o.h),
				C = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					var o, c;
					t(E());
					const l = await ((e, t) => Object(a.a)(e, {
						...d,
						variables: t
					}))(s(), e);
					if (null === (c = null === (o = l.error) || void 0 === o ? void 0 : o.fields) || void 0 === c ? void 0 : c.length) return t(T({
						error: l.error
					})), void t(Object(i.d)());
					if (l.ok && l.body) {
						const e = l.body,
							n = e && e.data,
							r = n && n.identity && n.identity.subscribedSubreddits,
							s = r && r.pageInfo,
							o = (r && r.edges).map(e => e.node);
						t(S({
							nodes: o,
							pageInfo: s
						}))
					}
				}
		},
		"./src/reddit/actions/notifications/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			}));
			var r = n("./src/lib/notifications/index.ts"),
				s = n("./src/lib/notifications/constants.ts"),
				o = n("./src/lib/notifications/featureFlags.ts"),
				i = n("./src/reddit/featureFlags/index.ts"),
				c = n("./src/reddit/helpers/localStorage/index.ts");
			const a = e => i.d.pushNotificationsBrowserSupported(e) ? Object(o.a)() : s.c.BrowserUnsupported,
				d = e => {
					switch (e) {
						case s.a.Denied:
							c.nb(!1), Object(r.c)();
							break;
						case s.a.Default:
						case s.a.Granted:
							c.nb(!0), Object(r.c)();
							break;
						case s.a.Closed:
							c.nb(!0)
					}
				}
		},
		"./src/reddit/actions/notificationsInbox/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			}));
			const r = "INBOX_NOTIFICATIONS__PENDING",
				s = "INBOX_NOTIFICATIONS__LOADED",
				o = "INBOX_NOTIFICATIONS__FAILED",
				i = "INBOX_NOTIFS_SET_OVERFLOW_MENU_ID",
				c = "INBOX_NOTIFICATIONS__REMOVE_NOTIFICATION",
				a = "INBOX_NOTIFS__MARK_AS_READ",
				d = "INBOX_NOTIFS__SET_EARLIER_DIVIDER_INDEX",
				l = "INBOX_NOTIFS_MARK_ALL_AS_READ"
		},
		"./src/reddit/actions/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return w
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "b", (function() {
				return M
			})), n.d(t, "i", (function() {
				return B
			})), n.d(t, "f", (function() {
				return G
			})), n.d(t, "c", (function() {
				return H
			})), n.d(t, "a", (function() {
				return V
			})), n.d(t, "h", (function() {
				return q
			})), n.d(t, "j", (function() {
				return K
			})), n.d(t, "g", (function() {
				return $
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				i = (n("./src/reddit/actions/notificationSettingsLayout/index.ts"), n("./src/reddit/actions/notificationsInbox/constants.ts")),
				c = n("./src/reddit/actions/tabBadging.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				l = n("./src/redditGQL/operations/BlockAwarder.json");
			var u = (e, t) => Object(d.a)(e, {
					...l,
					variables: t
				}),
				b = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				p = n("./src/redditGQL/operations/NotificationInboxFeed.json"),
				O = n("./src/redditGQL/operations/NotificationInboxFeedSlimmed.json"),
				I = n("./src/reddit/constants/headers.ts"),
				_ = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var h;
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(h || (h = {}));
			var x = n("./src/redditGQL/operations/DeleteInboxNotifications.json");
			n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts");
			var j = n("./src/redditGQL/operations/UpdateInboxActivitySeenState.json");
			var E = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				S = n("./src/reddit/helpers/trackers/inbox.ts"),
				g = n("./src/reddit/models/Badge/index.ts"),
				T = n("./src/reddit/models/NotificationInbox/index.ts"),
				C = n("./src/reddit/models/Toast/index.ts"),
				y = n("./src/reddit/selectors/appBadges.ts"),
				N = (n("./src/reddit/selectors/notificationPrefs.ts"), n("./src/reddit/selectors/notificationsInbox.tsx"));
			const v = Object(s.a)(i.e),
				k = Object(s.a)(i.b),
				L = Object(s.a)(i.a),
				w = e => async (t, n, r) => {
					let {
						gqlContext: s
					} = r;
					var o, i;
					const c = n(),
						l = Object(N.a)(c);
					t(v());
					const u = await ((e, t) => Object(d.a)(e, {
						...p,
						variables: t
					}))(s(), e);
					if (null === (i = null === (o = u.error) || void 0 === o ? void 0 : o.fields) || void 0 === i ? void 0 : i.length) return t(L({
						error: u.error
					})), void t(Object(a.d)());
					const b = u && u.body,
						m = D(b);
					if (null === l) {
						const e = Object(N.f)(c);
						t(R(m.nodes, e.length))
					}
					t(k(m))
				}, P = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					var s, o;
					const i = await (e => Object(d.a)(e, {
						...O
					}))(r());
					if (null === (o = null === (s = i.error) || void 0 === s ? void 0 : s.fields) || void 0 === o ? void 0 : o.length) return;
					const c = i && i.body,
						a = A(c).nodes.filter(e => !e.viewedAt);
					a.length && a.forEach(e => {
						var n;
						Object(S.s)({
							id: e.id,
							isClicked: !1,
							isViewed: Boolean(e.viewedAt),
							type: null === (n = e.context) || void 0 === n ? void 0 : n.messageType
						})(t())
					})
				}, D = e => {
					const t = e && e.data,
						n = t && t.notificationInbox,
						r = n && n.elements,
						s = r && r.pageInfo;
					return {
						nodes: (r && r.edges).map(e => e.node),
						pageInfo: s
					}
				}, A = e => {
					var t, n;
					return {
						nodes: null === (n = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.notificationInbox) || void 0 === n ? void 0 : n.elements.edges.map(e => e.node)
					}
				}, R = (e, t) => async (n, r) => {
					const s = r(),
						o = Object(N.a)(s),
						i = ((e, t) => {
							let n, r = 0;
							const s = new Date,
								o = s.getDate(),
								i = s.getMonth(),
								c = s.getFullYear();
							for (; r < e.length && !n;) {
								const s = e[r],
									a = new Date(s.sentAt),
									d = a.getDate(),
									l = a.getMonth(),
									u = a.getFullYear();
								if ((d !== o || l !== i || u !== c) && !n) {
									n = ((t || 0) + r).toString()
								} else r++
							}
							return n
						})(e, t);
					i && i !== o && n(U({
						index: i
					}))
				}, U = Object(s.a)(i.g), F = (Object(s.a)(i.h), Object(s.a)(i.f)), M = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const i = [e];
					if ((await ((e, t) => Object(d.a)(e, {
							...x,
							variables: {
								input: t
							}
						}))(o(), {
							notificationIds: i
						})).ok) {
						t(F({
							id: e
						}));
						const s = Object(N.f)(n());
						t(R(s)), t(Object(a.f)(Object(a.e)(r.fbt._("Notification hidden", null, {
							hk: "1jfPqO"
						}), C.b.SuccessCommunityGreen)))
					} else t(Object(a.f)(Object(a.e)(r.fbt._("Failed to hide notification, please try again.", null, {
						hk: "fL7uB"
					}), C.b.Error)))
				}, B = (e, t) => async (n, s, o) => {
					let {
						gqlContext: i
					} = o;
					if (!e) return;
					(await Object(E.b)(i(), e, {
						isSubredditUpdatesInterestingPostEnabled: !0,
						isUpdateFromSubredditEnabled: !0
					})).ok ? (t && t(), n(Object(a.f)(Object(a.e)(r.fbt._("Success! Undone hiding notifications from this community.", null, {
						hk: "1na0NP"
					}), C.b.SuccessCommunityGreen)))) : n(Object(a.f)(Object(a.e)(r.fbt._("Failed to undo hiding notifications, please try again.", null, {
						hk: "4jo7Pf"
					}), C.b.Error)))
				}, G = (e, t) => async (n, s, o) => {
					let {
						gqlContext: i
					} = o;
					if (!e) return;
					(await Object(E.b)(i(), e, {
						isSubredditUpdatesInterestingPostEnabled: !1,
						isUpdateFromSubredditEnabled: !1
					})).ok ? n((() => {
						const n = r.fbt._("Success! You won't see notifications from this community in the future.", null, {
							hk: "2tkhbk"
						});
						return Object(a.f)(Object(a.e)(n, C.b.Undo, r.fbt._("Undo", null, {
							hk: "4zFGDk"
						}), B(e, t)))
					})()) : n(Object(a.f)(Object(a.e)(r.fbt._("Failed to hide notifications, please try again.", null, {
						hk: "KEGcB"
					}), C.b.Error)))
				}, H = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					if (!e) return;
					(await ((e, t) => Object(m.a)(Object(f.a)(e, [I.a]), {
						endpoint: Object(_.a)(`${e.apiUrl}/api/sendreplies`),
						method: b.jb.POST,
						data: {
							id: t
						}
					}))(o(), e)).ok ? t(Object(a.f)(Object(a.e)(r.fbt._("Success! You won't see updates on this in the future", null, {
						hk: "wtDa4"
					}), C.b.SuccessCommunityGreen))) : t(Object(a.f)(Object(a.e)(r.fbt._("Failed to turn off updates on this, please try again", null, {
						hk: "1zhpEy"
					}), C.b.Error)))
				}, V = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					if (!e) return;
					(await u(o(), {
						awardingId: e
					})).ok ? t(Object(a.f)(Object(a.e)(r.fbt._("Success! Awarder has been blocked", null, {
						hk: "2D5PUk"
					}), C.b.SuccessCommunityGreen))) : t(Object(a.f)(Object(a.e)(r.fbt._("Failed to block awarder, please try again", null, {
						hk: "2dxeA8"
					}), C.b.Error)))
				}, W = Object(s.a)(i.d), q = (e, t) => async (n, r, s) => {
					let i, {
						apiContext: a
					} = s;
					if (t === T.a.CommentReply || t === T.a.PostReply || t === T.a.PrivateMessage || t === T.a.UsernameMention) {
						if ((i = await ((e, t) => Object(m.a)(Object(f.a)(e, [I.a]), {
								endpoint: Object(_.a)(`${e.apiUrl}/api/read_message`),
								method: b.jb.POST,
								data: {
									id: t
								}
							}))(a(), e)).ok) {
							let e = Object(y.a)(r());
							if (e > 0) {
								e--;
								const t = Object(o.e)({
									count: e,
									key: g.c.ActivityTab
								});
								n(Object(o.a)(t)), n(Object(c.e)())
							}
						}
					} else i = await ((e, t) => Object(m.a)(Object(f.a)(e, [I.a]), {
						endpoint: Object(_.a)(`${e.apiUrl}/api/read_notification`),
						method: b.jb.POST,
						data: {
							id: t
						}
					}))(a(), e);
					if (i.ok) {
						const t = (new Date).toISOString();
						n(W({
							id: e,
							now: t
						}))
					}
				}, K = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const s = (new Date).toLocaleDateString(),
						i = await ((e, t) => Object(d.a)(e, {
							...j,
							variables: {
								input: t
							}
						}))(r(), {
							lastSentAt: s
						});
					if (i.ok) {
						const t = i.body,
							n = t && t.data && t.data.updateInboxActivitySeenState && t.data.updateInboxActivitySeenState.badgeIndicators;
						n && (e(Object(o.a)(n)), e(Object(c.d)()))
					}
				}, Y = Object(s.a)(i.c), $ = () => async (e, t, n) => {
					let {
						apiContext: s
					} = n;
					const {
						notificationsInbox: {
							markAllAsReadTimestamp: i
						}
					} = t(), c = new Date;
					if (!i || c.getTime() - new Date(i).getTime() > 15e3) {
						if ((await ((e, t) => Object(m.a)(Object(f.a)(e, [I.a]), {
								endpoint: Object(_.a)(`${e.apiUrl}/api/read_all_messages`),
								method: b.jb.POST,
								data: {
									filter_types: null == t ? void 0 : t.join(",")
								}
							}))(s(), [h.Activity, h.Messages])).ok) {
							const t = Object(o.e)({
									count: 0,
									key: g.c.MessageTab
								}),
								n = Object(o.e)({
									count: 0,
									key: g.c.ActivityTab
								});
							e(Object(o.a)({
								...t,
								...n
							})), e(Y({
								now: c.toISOString()
							}))
						} else e(Object(a.f)(Object(a.e)(r.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "VW7c3"
						}), C.b.Error)))
					}
				}
		},
		"./src/reddit/actions/pages/modListing/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "j", (function() {
				return f
			}));
			const r = "PAGE__MOD_LISTING_PAGE_PENDING",
				s = "PAGE__MOD_LISTING_PAGE_LOADED",
				o = "PAGE__MOD_LISTING_PAGE_FAILED",
				i = "MOD_LISTING_MORE_POSTS_PENDING",
				c = "MOD_LISTING_MORE_POSTS_LOADED",
				a = "MOD_LISTING_MORE_POSTS_FAILED",
				d = "MOD_LISTING_HIDE_SUBREDDIT_SUCCESS",
				l = "MOD_LISTING_HIDE_SUBREDDIT_PENDING",
				u = "MOD_LISTING_HIDE_SUBREDDIT_FAILED",
				b = "MOD_LISTING_UNHIDE_SUBREDDIT_SUCCESS",
				m = "MOD_LISTING_UNHIDE_SUBREDDIT_PENDING",
				f = "MOD_LISTING_UNHIDE_SUBREDDIT_FAILED"
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return f
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "d", (function() {
				return L
			})), n.d(t, "l", (function() {
				return A
			})), n.d(t, "k", (function() {
				return R
			})), n.d(t, "j", (function() {
				return U
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "i", (function() {
				return M
			})), n.d(t, "h", (function() {
				return B
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/post.ts"),
				i = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/endpoints/flair/index.ts"),
				d = n("./src/reddit/helpers/flair.ts"),
				l = n("./src/reddit/models/Flair/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				b = n("./src/reddit/selectors/postFlair.ts"),
				m = n("./src/reddit/selectors/subreddit.ts");
			const f = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				p = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				O = Object(s.a)(f),
				I = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				_ = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				h = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				x = Object(s.a)(_),
				j = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				E = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				S = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				g = Object(s.a)(E),
				T = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				C = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				y = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				N = Object(s.a)(C),
				v = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				k = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				L = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				w = Object(s.a)(k),
				P = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				D = Object(s.a)(L),
				A = (e, t) => async (n, r, s) => {
					let {
						apiContext: o
					} = s;
					const i = r(),
						c = Object(m.V)(i, {
							subredditId: e
						}).name;
					n(p());
					const d = await Object(a.k)(o(), c, t);
					if (d.ok) {
						n(O({
							subredditId: e,
							isEnabled: t
						}))
					} else n(I());
					return d.ok
				}, R = (e, t) => async (n, r, s) => {
					let {
						apiContext: o
					} = s;
					const i = r(),
						c = Object(m.V)(i, {
							subredditId: e
						}).name;
					n(h());
					const d = await Object(a.j)(o(), t, l.d.LinkFlair, c);
					if (d.ok) {
						n(x({
							subredditId: e,
							canAssignOwn: t
						}))
					} else n(j());
					return d.ok
				}, U = (e, t) => async (n, s, o) => {
					let {
						apiContext: d
					} = o;
					const b = s(),
						f = Object(m.V)(b, {
							subredditId: t
						}).name;
					n(S());
					const p = await Object(a.f)(d(), e, f, l.d.LinkFlair);
					let O = p.ok && !(p.body && !1 === p.body.success);
					if (O) {
						const r = p.body;
						if (n(g({
								subredditId: t,
								template: r
							})), r.id) {
							const s = e.styleTemplate,
								o = b.structuredStyles.flairTemplate.models[r.id];
							s ? O = await n(Object(i.d)(t, r.id, s)) : o && (O = await n(Object(i.c)(t, r.id)))
						}
					}
					if (O) {
						const e = Object(c.e)(r.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), u.b.SuccessMod);
						n(Object(c.f)(e))
					} else {
						n(T());
						const s = Object(c.e)(r.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), U(e, t));
						n(Object(c.f)(s))
					}
					return O
				}, F = (e, t) => async (n, s, o) => {
					let {
						apiContext: i
					} = o;
					const d = s(),
						l = Object(m.V)(d, {
							subredditId: t
						}).name;
					if (n(y()), (await Object(a.b)(i(), e, l)).ok) {
						n(N({
							subredditId: t,
							templateId: e
						}));
						const s = Object(c.e)(r.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), u.b.SuccessMod);
						n(Object(c.f)(s))
					} else {
						n(v());
						const s = Object(c.e)(r.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), F(e, t));
						n(Object(c.f)(s))
					}
				}, M = (e, t) => async (n, s, o) => {
					let {
						apiContext: i
					} = o;
					const d = s(),
						f = Object(b.d)(d, {
							subredditId: t
						}).templateIds,
						p = Object(m.V)(d, {
							subredditId: t
						}).name;
					if (n(w({
							subredditId: t,
							templateIds: e
						})), (await Object(a.e)(i(), p, l.d.LinkFlair, e)).ok) {
						n(P());
						const e = Object(c.e)(r.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), u.b.SuccessMod);
						n(Object(c.f)(e))
					} else {
						n(D({
							subredditId: t,
							templateIds: f
						}));
						const s = Object(c.e)(r.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(e, t));
						n(Object(c.f)(s))
					}
				}, B = e => {
					let {
						post: t,
						previewFlair: n,
						selectedTemplateId: r
					} = e;
					return async (e, s, i) => {
						let {
							apiContext: c
						} = i;
						const l = t.flair.filter(e => !Object(d.q)(e.type));
						if (n && l.unshift(n), e(Object(o.S)({
								[t.id]: {
									flair: l
								}
							})), n) {
							const e = Object(d.g)(n);
							Object(a.h)(c(), t.id, r, e)
						} else Object(a.h)(c(), t.id, "", "")
					}
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "c", (function() {
				return C
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/forEach.js"),
				s = n.n(r),
				o = n("./node_modules/lodash/isEqual.js"),
				i = n.n(o),
				c = n("./node_modules/lodash/values.js"),
				a = n.n(c),
				d = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/imageUploads.ts"),
				u = n("./src/reddit/helpers/media/index.ts"),
				b = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				p = n("./src/reddit/constants/headers.ts");
			var O = n("./src/reddit/helpers/trackers/blade.ts"),
				I = n("./src/reddit/models/Image/index.tsx"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/telemetry/index.ts");
			const x = e => {
					let {
						subredditId: t,
						flairId: n,
						imageKey: r,
						imageData: s
					} = e;
					return async (e, o, i) => {
						const c = o(),
							a = Object(_.V)(c, {
								subredditId: t
							});
						if (!a) return !1;
						e(Object(l.k)(s));
						const d = await (async (e, t, n, r, s, o) => Object(m.a)(Object(f.a)(e, [p.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${n}`,
							method: b.jb.POST,
							data: {
								filepath: r,
								imagetype: s,
								mimetype: o
							}
						}))(i.apiContext(), a.name, n, s.file.name, r, await Object(u.h)(s.file));
						let O = !1;
						try {
							const t = await Object(l.g)(o(), d, s, I.a.FlairTemplates);
							t && e(Object(l.j)(t)), O = !0
						} catch (h) {
							if (h instanceof Error) throw h;
							e(Object(l.i)(h))
						}
						return O
					}
				},
				j = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS",
				E = Object(d.a)(j),
				S = (e, t, n) => async (r, o, c) => {
					const {
						apiContext: d
					} = c;
					let u = o();
					const {
						pendingImages: j,
						...S
					} = n;
					let g = S;
					const T = Object(_.V)(u, {
						subredditId: e
					});
					if (!T) return !1;
					const C = u.structuredStyles.flairTemplate.models[t];
					if (C && i()(C, g)) return !0;
					if (j) {
						const n = [];
						if (s()(j, (s, o) => {
								s && n.push(r(x({
									flairId: t,
									imageData: Object(I.m)(s),
									imageKey: o,
									subredditId: e
								})))
							}), !(await Promise.all(n)).every(e => e)) return !1;
						g = ((e, t, n) => {
							const r = {
								...e
							};
							return s()(t, (e, t) => {
								const s = e && n.imageUploads[e.id];
								s && s.kind === I.b.TempUploaded && (r[t] = s.url)
							}), r
						})(g, j, o())
					}
					u = o();
					let y = null,
						N = null;
					const v = [];
					try {
						(y = await Object(l.f)(u, I.a.FlairTemplates)) && (N = Object(l.m)(y)(r, o, c), v.push(...a()(y.imagesByKey)))
					} catch (P) {
						return !1
					}
					const k = await (async (e, t, n, r) => Object(m.a)(Object(f.a)(e, [p.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
							method: b.jb.PUT,
							data: r
						}))(d(), T.name, t, g),
						L = C ? "edit_post_flair_template" : "save_post_flair_template",
						w = Object(O.e)(u, L);
					if (k.ok) {
						let e;
						if (N) try {
							await N, e = ((e, t, n) => {
								const r = {
									...e
								};
								return t.forEach(e => {
									const t = n.imageUploads[e.id];
									t && t.kind === I.b.Uploaded && (e.url === r.postBackgroundImage ? r.postBackgroundImage = t.url : e.url === r.postPlaceholderImage && (r.postPlaceholderImage = t.url))
								}), r
							})(g, v, o())
						} catch (P) {
							e = null
						} else e = g;
						r(E({
							flairId: t,
							template: e || g
						}))
					} else y && y.websocket.close();
					return Object(h.a)({
						...w,
						actionInfo: {
							...w.actionInfo,
							success: k.ok
						}
					}), k.ok
				}, g = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", T = Object(d.a)(g), C = (e, t) => async (n, r, s) => {
					let {
						apiContext: o
					} = s;
					const i = r(),
						c = Object(_.V)(i, {
							subredditId: e
						});
					if (!c) return !1;
					const a = await (async (e, t, n) => Object(m.a)(Object(f.a)(e, [p.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
							method: b.jb.DELETE
						}))(o(), c.name, t),
						d = Object(O.e)(i, "delete_flair_template");
					return a.ok && n(T({
						flairId: t
					})), Object(h.a)({
						...d,
						actionInfo: {
							...d.actionInfo,
							success: a.ok
						}
					}), a.ok
				}
		},
		"./src/reddit/actions/postList.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = (n("./src/reddit/actions/embedAndImage.ts"), n("./src/reddit/actions/video.ts"), n("./src/reddit/helpers/trackers/postList.ts"));
			n("./src/reddit/constants/postLayout.ts"), n("./src/reddit/models/Media/index.ts"), n("./src/reddit/selectors/platform.ts"), n("./src/reddit/selectors/posts.ts");
			n("./src/reddit/selectors/video.ts");
			const o = "POSTLIST__MARKED_END",
				i = "POSTLIST__UNMARKED_END",
				c = Object(r.a)(o),
				a = Object(r.a)(i),
				d = (e, t) => async (n, r) => {
					const o = r();
					e in o.listings.postOrder.fetchedTokens ? e in o.listings.postOrder.ids ? n(a({
						listingKey: e
					})) : s.l(o, e) : n(c({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			}));
			const r = "SUBSCRIPTION__FETCH_DATA_PENDING",
				s = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				o = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				i = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				c = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				a = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return P
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "c", (function() {
				return U
			})), n.d(t, "a", (function() {
				return M
			})), n.d(t, "b", (function() {
				return G
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/linkMatchers/customLinks.ts"),
				i = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				a = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/subscription/constants.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/constants/posts.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				p = n("./src/reddit/constants/headers.ts");
			var O = n("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				I = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				_ = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				h = n("./src/reddit/models/GqlTopLevelField.ts"),
				x = n("./src/reddit/models/User/index.ts");

			function j(e) {
				const t = [],
					n = [],
					r = {},
					s = {},
					{
						followedRedditorsInfo: o
					} = e.identity;
				for (const c of o.edges) {
					if (c.node.__typename !== x.c.AvailableRedditor || !c.node.profile) continue;
					const e = Object(I.a)(c.node.profile);
					r[e.id] = e;
					const {
						isFavorite: n
					} = c.node.profile;
					n && t.push(e.id)
				}
				const {
					subscribedSubreddits: i
				} = e.identity;
				for (const c of i.edges) {
					if (c.node.__typename !== h.a.Subreddit) continue;
					const e = Object(_.a)(c.node);
					s[e.id] = e;
					const {
						isFavorite: t
					} = c.node;
					t && n.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: n,
					profiles: r,
					subreddits: s
				}
			}
			var E = n("./src/reddit/models/Toast/index.ts"),
				S = n("./src/reddit/selectors/experiments/emailEnablement.ts"),
				g = n("./src/reddit/selectors/profile.ts"),
				T = n("./src/reddit/selectors/subreddit.ts"),
				C = n("./src/reddit/selectors/subscriptions.ts"),
				y = n("./src/reddit/selectors/user.ts");
			const N = () => r.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				v = Object(i.a)(l.c),
				k = Object(i.a)(l.b),
				L = Object(i.a)(l.a),
				w = Object(i.a)(l.h),
				P = (Object(i.a)(l.i), Object(i.a)(l.g), () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const s = t();
					if (!s.user.account || s.subscriptions.api.fetched) return;
					e(k());
					const o = await Object(O.a)(r());
					if (o.ok) {
						const t = j(o.body.data);
						e(v(t))
					} else e(L({
						error: o.error
					}))
				}),
				D = (e, t) => t.type === b.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				A = (e, t, n) => async (i, l, m) => {
					let {
						apiContext: f
					} = m, p = e.map(e => e.type === b.a.SUBREDDIT ? {
						id: Object(T.G)(l(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(g.n)(l(), e.name),
						name: `${s.kc}${e.name}`,
						type: e.type
					});
					if (!Object(y.Q)(l())) return i(Object(d.k)({
						actionSource: d.a.Subscribe
					})), void i(Object(a.openRegisterModal)());
					const I = Object(y.k)(l());
					if (I) {
						const t = p.length,
							n = e.length;
						if (p = p.filter(e => !D(I, e)), (e = e.filter(e => !D(I, e))).length !== n || p.length !== t) {
							const e = r.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							i(Object(u.f)(Object(u.e)(e, E.b.Error)))
						}
						if (!e.length && !p.length) return
					}
					i(w({
						identifiers: p,
						nameIdentifiers: e,
						profileModels: l().profiles.models,
						subredditModels: l().subreddits.models,
						subscriptionsCount: Object(C.b)(l()),
						userIsSubscriber: t,
						widgetId: n
					}));
					const _ = await Object(O.c)(f(), {
						subredditNames: p.map(e => {
							let {
								name: t
							} = e;
							return t
						}),
						subscribe: t
					});
					if (_.ok) {
						const n = 1 === e.length ? `${"subreddit"===e[0].type?o.d.subreddit:o.d.profile}${e[0].name}` : r.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [r.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							s = r.fbt._("Successfully followed {communityname}", [r.fbt._param("communityname", n)], {
								hk: "23Snyg"
							}),
							c = r.fbt._("Successfully unfollowed {communityname}", [r.fbt._param("communityname", n)], {
								hk: "jfC0S"
							}),
							a = r.fbt._("Successfully joined {communityname}", [r.fbt._param("communityname", n)], {
								hk: "1W9UY3"
							}),
							d = r.fbt._("Successfully left {communityname}", [r.fbt._param("communityname", n)], {
								hk: "1saMW"
							});
						i(Object(u.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? s : c : t ? a : d
						}))
					} else {
						i(w({
							identifiers: p,
							nameIdentifiers: e,
							profileModels: l().profiles.models,
							subredditModels: l().subreddits.models,
							subscriptionsCount: Object(C.b)(l()),
							userIsSubscriber: !t,
							widgetId: n
						}));
						const s = r.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						i(Object(u.f)(Object(u.e)(s, E.b.Error)))
					}
					return t && Object(S.a)(l()) && (1 === e.length && "profile" === e[0].type ? i(Object(c.c)("user_follow")) : i(Object(c.c)("join"))), _.ok
				}, R = Object(i.a)(l.f), U = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const o = n(),
						i = Object(T.N)(o, {
							identifier: e
						});
					if (!i) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const c = e.type === b.a.SUBREDDIT ? i.name : `u_${i.name}`,
						a = o.subscriptions.favoriteSubredditOrder || [],
						d = o.subscriptions.favoriteProfileOrder || [],
						l = a.indexOf(e.id),
						m = d.indexOf(e.id),
						f = -1 === l && -1 === m,
						p = o.subreddits.models,
						I = o.profiles.models,
						_ = {
							type: e.type,
							name: i.name
						},
						h = () => Object(T.hb)(n(), {
							identifier: _
						});
					(h() || (await t(A([_], !0)), h())) && (t(R({
						makeFavorite: f,
						identifier: e,
						subredditModels: p,
						profileModels: I
					})), (await Object(O.b)(s(), c, f)).ok || (t(R({
						makeFavorite: !f,
						identifier: e,
						subredditModels: p,
						profileModels: I
					})), t(Object(u.f)({
						text: N(),
						kind: E.b.Error
					}))))
				}, F = Object(i.a)(l.d), M = e => async (t, n, r) => {
					let {
						apiContext: o
					} = r;
					const i = n().multireddits.models,
						c = () => {
							t(Object(u.f)({
								text: N(),
								kind: E.b.Error
							}))
						},
						a = i[e];
					if (!a) return void c();
					const d = !a.isFavorited;
					t(F({
						makeFavorite: d,
						multiredditPath: e,
						multiredditsModelsState: i
					})), (await ((e, t, n) => Object(m.a)(Object(f.a)(e, [p.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(o(), e, d)).ok || (t(F({
						makeFavorite: !d,
						multiredditPath: e,
						multiredditsModelsState: i
					})), c())
				}, B = Object(i.a)(l.e), G = e => async (t, n, o) => {
					let {
						apiContext: i
					} = o;
					const c = n(),
						a = c.multireddits.models;
					if (!Object(y.Q)(c)) return;
					const d = function() {
							let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
							t(Object(u.f)({
								text: r.fbt._("Sorry, failed to {followAction}", [r.fbt._param("followAction", e ? r.fbt._("follow", null, {
									hk: "3YMYJK"
								}) : r.fbt._("unfollow", null, {
									hk: "24IYxj"
								}))], {
									hk: "1ufRSl"
								}),
								kind: E.b.Error
							}))
						},
						l = a[e];
					if (!l) return void d();
					const b = !l.isFollowed;
					t(B({
						follow: b,
						multiredditPath: e,
						multiredditsModelsState: a
					})), (await ((e, t, n) => Object(m.a)(Object(f.a)(e, [p.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: n ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(i(), e, b)).ok || (t(B({
						follow: !b,
						multiredditPath: e,
						multiredditsModelsState: a
					})), d(b))
				}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/lib/matchRoute/index.ts"),
				s = n("./src/lib/opener/index.ts"),
				o = n("./node_modules/react-router-redux/es/index.js");
			const i = function(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return async (n, i, c) => {
					let {
						routes: a
					} = c;
					const d = i();
					Object(r.a)(e, a, d) ? n(Object(o.b)(e)) : t ? Object(s.e)(e, "_blank") : window.location.assign(e)
				}
			}
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "BlankPost", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/components/AdViewability/index.tsx"),
				i = n("./src/reddit/connectors/PostViewable/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/contexts/Post/index.tsx");
			const d = Object(i.a)(null),
				l = e => {
					let {
						className: t,
						post: n
					} = e;
					return n.isSponsored ? s.a.createElement(o.a, {
						post: n,
						trackDisplay: !0
					}, s.a.createElement("div", {
						className: Object(c.a)(t, `Blank ${n.id}`)
					})) : null
				};
			t.default = Object(a.b)(d(l))
		},
		"./src/reddit/components/Emoji/index.m.less": function(e, t, n) {
			e.exports = {
				EmojiDisplay: "_2Gt13AX94UlLxkluAMsZqP",
				emojiDisplay: "_2Gt13AX94UlLxkluAMsZqP"
			}
		},
		"./src/reddit/components/Flair/index.m.less": function(e, t, n) {
			e.exports = {
				FlairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				flairEmojiDisplay: "_1QwShihKKlyRXyQSlqYaWW",
				FlairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				flairWrapper: "_2X6EB3ZhEeXCh1eIVA64XM",
				TextFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				textFlair: "_1jNPl3YUk6zbpLWdjaJT1r",
				transparentBackgroundColor: "_39BEcWjOlYi1QGcJil6-yl",
				RichTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				richTextFlair: "_2hSecp_zkPm_s5ddV2htoj",
				MetaFlair: "_1wzhGvvafQFOWAyA157okr",
				metaFlair: "_1wzhGvvafQFOWAyA157okr",
				CloseButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				closeButton: "_3BPVpMSn5b1vb1yTQuqCRH",
				CloseIcon: "_2cvySYWkqJfynvXFOpNc5L",
				closeIcon: "_2cvySYWkqJfynvXFOpNc5L",
				small: "aJrgrewN9C8x1Fusdx4hh",
				large: "_1wj6zoMi6hRP5YhJ8nXWXE",
				flairVariant: "_2VqfzH0dZ9dIl3XWNxs42y"
			}
		},
		"./src/reddit/components/Flair/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return B
			})), n.d(t, "a", (function() {
				return G
			})), n.d(t, "b", (function() {
				return q
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/pick.js"),
				o = n.n(s),
				i = n("./node_modules/polished/dist/polished.es.js"),
				c = n("./node_modules/react/index.js"),
				a = n.n(c),
				d = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				l = n("./src/lib/addQueryParams/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				b = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/lib/lessComponent.tsx"),
				f = n("./src/reddit/components/Emoji/index.m.less"),
				p = n.n(f);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const I = m.a.wrapped(e => {
				let {
					backgroundImage: t,
					style: n,
					...r
				} = e;
				return a.a.createElement("div", O({
					style: {
						...n || {},
						backgroundImage: `url('${t}')`
					}
				}, r))
			}, "EmojiDisplay", p.a);
			var _ = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				h = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				x = n("./src/reddit/constants/colors.ts"),
				j = n("./src/reddit/constants/parameters.ts"),
				E = n("./src/reddit/controls/InternalLink/index.tsx"),
				S = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				g = n("./src/reddit/icons/svgs/Close/index.tsx"),
				T = n("./src/reddit/models/Flair/index.ts"),
				C = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				y = n("./src/reddit/components/Flair/index.m.less"),
				N = n.n(y);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const k = Object(h.a)(_.b),
				L = m.a.div("FlairWrapper", N.a),
				w = m.a.wrapped(d.a, "CloseButton", N.a),
				P = m.a.wrapped(Object(b.a)(e => {
					let {
						forceSmallEmojis: t,
						theme: n,
						...r
					} = e;
					const s = n;
					return a.a.createElement(I, v({
						style: {
							...D(!!t, s) || {}
						}
					}, r))
				}), "FlairEmojiDisplay", N.a),
				D = (e, t) => {
					if (!e && !!t.subredditContext.emojiHeight && !!t.subredditContext.emojiWidth) return {
						height: `${t.subredditContext.emojiHeight}px`,
						width: `${t.subredditContext.emojiWidth}px`
					}
				},
				A = (e, t) => {
					const n = t ? `/r/${t}/search` : "/search",
						r = `${t?"flair_name":"flair"}:"${e}"`;
					return Object(l.a)(n, {
						[j.p]: r,
						[j.s]: t ? "1" : ""
					})
				},
				R = e => e.isFlairFilter ? a.a.createElement(E.default, {
					onMouseDown: e.onMouseDown,
					to: e.to || ""
				}, e.flair) : e.onClick ? a.a.createElement(E.default, {
					onClick: () => e.onClick(e.searchableTerm),
					to: A(e.searchableTerm, e.subredditName)
				}, e.flair) : e.flair;
			class U extends a.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.state = {
						isTooltipOpen: !1
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							isTooltipOpen: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							isTooltipOpen: !1
						})
					}
				}
				render() {
					const e = a.a.createElement("span", {
						className: Object(u.a)(this.props.className, {
							[N.a.transparentBackgroundColor]: "transparent" === this.props.backgroundColor
						}),
						onMouseEnter: this.props.tooltip ? this.onShowTooltip : void 0,
						onMouseLeave: this.props.tooltip ? this.onHideTooltip : void 0,
						ref: this.setTooltipTargetRef,
						style: {
							backgroundColor: this.props.backgroundColor || Object(C.a)(this.props).flair,
							color: `${B(this.props)}`
						}
					}, this.props.text, this.props.isSelected && a.a.createElement(w, {
						to: "./",
						onClick: this.props.onCloseClick
					}, a.a.createElement(g.a, {
						className: N.a.CloseIcon,
						style: {
							fill: this.props.backgroundColor || Object(C.a)(this.props).flair
						}
					})), !!this.props.tooltip && a.a.createElement(k, {
						text: this.props.tooltip,
						isOpen: this.state.isTooltipOpen,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: ["center", "top"],
						tooltipPosition: ["center", "bottom"]
					}));
					return a.a.createElement(R, {
						flair: e,
						isFlairFilter: this.props.isFlairFilter,
						onClick: this.props.onClick,
						onMouseDown: this.props.onMouseDown,
						searchableTerm: this.props.text,
						subredditName: this.props.subredditName,
						to: this.props.to
					})
				}
			}
			const F = Object(b.a)(U),
				M = Object(b.a)(e => {
					let t = "",
						n = !1;
					const r = e.richtext.map((r, s) => {
						if (r.e === T.c.Emoji) {
							const o = r;
							return t += o.a, n = !0, a.a.createElement(P, {
								forceSmallEmojis: e.forceSmallEmojis,
								backgroundImage: o.u,
								key: s,
								title: o.a
							})
						} {
							const e = r;
							return t += e.t, a.a.createElement("span", {
								key: s
							}, e.t)
						}
					});
					let s;
					n && !e.forceSmallEmojis && e.theme && e.theme.subredditContext.emojiWidth && e.theme.subredditContext.emojiHeight && e.theme.subredditContext.emojiHeight > 16 && (s = {
						marginTop: `-${e.theme.subredditContext.emojiHeight-16}px`
					});
					const o = a.a.createElement(L, {
						className: Object(u.a)(e.className, {
							[N.a.transparentBackgroundColor]: "transparent" === e.backgroundColor
						}),
						style: {
							...s,
							backgroundColor: e.backgroundColor || Object(C.a)(e).flair,
							color: `${B(e)}`
						}
					}, r, e.isSelected && a.a.createElement(w, {
						to: "./",
						onClick: e.onCloseClick
					}, a.a.createElement(g.a, {
						className: N.a.CloseIcon,
						style: {
							fill: e.backgroundColor || Object(C.a)(e).flair
						}
					})));
					return a.a.createElement(R, {
						flair: o,
						isFlairFilter: e.isFlairFilter,
						onClick: e.onClick ? () => {
							e.onClick(t)
						} : void 0,
						onMouseDown: e.onMouseDown,
						searchableTerm: t,
						subredditName: e.subredditName,
						to: e.to
					})
				}),
				B = e => !e.textColor || e.textColor && !e.backgroundColor ? Object(C.a)(e).postFlairText : "transparent" === e.backgroundColor ? Object(S.a)(Object(C.a)(e).post, x.a.black, x.a.white) : e.textColor === T.e.Dark ? x.a.black : x.a.white,
				G = m.a.wrapped(F, "TextFlair", N.a),
				H = m.a.wrapped(M, "RichTextFlair", N.a),
				V = e => {
					switch (e.type) {
						case "spoiler":
							return "#A4A7A8";
						case "nsfw":
							return "#FF585B";
						default:
							return Object(i.i)(.1, Object(C.a)(o()(e, "theme", "redditStyle", "data-redditstyle")).button)
					}
				},
				W = m.a.wrapped(e => {
					const t = V(e),
						n = a.a.createElement("span", {
							className: e.className,
							style: {
								border: `1px solid ${t}`,
								color: t
							}
						}, e.text);
					return a.a.createElement(R, {
						flair: n,
						searchableTerm: e.text
					})
				}, "MetaFlair", N.a);

			function q(e) {
				const {
					className: t,
					disabled: n = !1,
					flair: s,
					isFlairFilter: o,
					isSelected: i,
					onClick: c,
					onCloseClick: d,
					onMouseDown: l,
					subredditName: b,
					usesCommunityStyles: m,
					forceSmallEmojis: f,
					to: p
				} = e, O = Object(u.a)({
					[N.a.flairVariant]: o,
					[N.a.small]: o && !e.large,
					[N.a.large]: o && e.large
				}, t);
				switch (s.type) {
					case T.f.Richtext:
						return n || !s.richtext ? null : a.a.createElement(H, {
							backgroundColor: s.backgroundColor,
							className: O,
							forceSmallEmojis: f,
							isFlairFilter: o,
							isSelected: i,
							onClick: c,
							onCloseClick: d,
							onMouseDown: l,
							redditStyle: !m,
							richtext: s.richtext,
							subredditName: b,
							textColor: s.textColor,
							to: p
						});
					case T.f.Text:
						return n || !s.text ? null : a.a.createElement(G, {
							backgroundColor: s.backgroundColor,
							className: O,
							isFlairFilter: o,
							isSelected: i,
							onClick: c,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: b,
							text: s.text,
							textColor: s.textColor,
							redditStyle: !m,
							to: p
						});
					case T.f.Meta:
						return a.a.createElement(G, {
							backgroundColor: s.backgroundColor,
							className: t,
							isFlairFilter: o,
							subredditName: b,
							text: s.text,
							textColor: s.textColor,
							redditStyle: !m,
							to: p
						});
					case T.f.Nsfw:
					case T.f.Spoiler:
						return a.a.createElement(W, {
							className: t,
							text: s.text,
							type: s.type
						});
					case T.f.Quarantined:
						return null;
					case T.f.Oc:
						return a.a.createElement(G, {
							backgroundColor: x.a.alienblue,
							text: s.text,
							textColor: T.e.Light,
							tooltip: r.fbt._("This post is marked as Original Content [OC]", null, {
								hk: "h7je6"
							})
						});
					default:
						return s.text ? a.a.createElement(G, {
							backgroundColor: s.backgroundColor,
							className: O,
							isFlairFilter: o,
							onClick: c,
							onCloseClick: d,
							onMouseDown: l,
							subredditName: b,
							text: s.text,
							redditStyle: !m,
							to: p
						}) : null
				}
			}
		},
		"./src/reddit/components/FlairList/index.m.less": function(e, t, n) {
			e.exports = {
				flairVariantInList: "_1Dl-kvSxyJMWO9nuoTof8N"
			}
		},
		"./src/reddit/components/FlairList/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lodash/noop.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/components/Flair/index.tsx"),
				l = n("./src/reddit/helpers/flair.ts"),
				u = n("./src/reddit/models/Flair/index.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				m = n("./src/reddit/components/FlairList/index.m.less"),
				f = n.n(m);
			const p = Object(a.c)({
					labelNSFW: b.ab
				}),
				O = Object(c.b)(p),
				I = e => {
					if (e.type === u.f.Richtext && e.richtext) {
						const t = e.richtext.map(e => e.e === u.c.Emoji ? e.u : e.t).join("-");
						return `${e.type}--${t}`
					}
					return `${e.type}--${e.text}`
				};
			t.a = O(e => {
				let {
					className: t,
					isFlairFilter: n,
					onClick: r,
					onMouseDown: o,
					disabled: c = !1,
					flair: a,
					labelNSFW: b,
					subredditName: m
				} = e;
				const p = !!a.find(e => e.type === u.f.Richtext),
					O = a.map(e => {
						if (e.type === u.f.Text && p) return null;
						if (!b && e.type === u.f.Nsfw) return null;
						const t = Object(l.j)(e),
							a = `/r/${m}/`,
							O = o ? () => o(e) : s.a,
							_ = n && (e.type === u.f.Richtext || e.type === u.f.Text);
						return i.a.createElement(d.b, {
							className: _ ? f.a.flairVariantInList : void 0,
							isFlairFilter: n,
							key: I(e),
							onClick: r,
							onMouseDown: O,
							disabled: c,
							flair: e,
							forceSmallEmojis: !0,
							subredditName: m,
							to: Object(l.e)(a, t)
						})
					});
				return i.a.createElement("div", {
					className: t
				}, O)
			})
		},
		"./src/reddit/components/FlairWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				flairList: "lrzZ8b0L6AzLkQj5Ww7H1",
				flairWrapper: "_2fiIRtMpITeCAzXc4cANKp",
				flairNoWrap: "_2xu1HuBz1Yx6SP10AGVx_I"
			}
		},
		"./src/reddit/components/FlairWrapper/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/FlairList/index.tsx"),
				l = n("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				u = n("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				f = n("./src/reddit/helpers/trackers/postFlair.ts"),
				p = n("./src/reddit/models/Flair/index.ts"),
				O = n("./src/reddit/selectors/postFlair.ts"),
				I = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/components/FlairWrapper/index.m.less"),
				h = n.n(_);
			const x = Object(i.b)(() => Object(c.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: n
						} = t;
						return Object(b.q)(e, {
							pageLayer: n
						})
					},
					isPostFlairEnabled: (e, t) => Object(O.c)(e, {
						subredditId: t.post.belongsTo.id
					}),
					subredditName: (e, t) => {
						let {
							post: n
						} = t;
						return Object(I.V)(e, {
							subredditId: n.belongsTo.id
						}).name
					}
				})),
				j = e => {
					const t = [];
					return e.isOriginalContent && t.push({
						text: r.fbt._("OC", null, {
							hk: "1i721p"
						}),
						type: p.f.Oc
					}), e.isMeta && t.push({
						text: r.fbt._("Poll", null, {
							hk: "1scdU1"
						}),
						type: p.f.Meta
					}), t.push(...e.flair), t
				};
			t.a = x(e => {
				let {
					className: t,
					disableFlair: n,
					flairPosition: r,
					isFlairFilter: s,
					isPostFlairEnabled: i,
					nowrap: c,
					post: b,
					sendEvent: O,
					subredditName: I,
					titleFlair: _
				} = e;
				const x = Object(u.a)(),
					E = r === p.b.Left,
					S = _ || j(b),
					{
						leftFlair: g,
						rightFlair: T
					} = Object(l.a)({
						flair: S,
						isFlairPositionedLeft: E
					}),
					C = c ? h.a.flairNoWrap : g.length > 0 || T.length > 0 ? h.a.flairWrapper : null,
					y = e => {
						const t = {
							id: b.belongsTo.id,
							eventType: b.belongsTo.type,
							originElement: "post_flair",
							postFlairName: e
						};
						Object(m.d)(m.a.SearchResults), O && O(Object(f.a)(b.id, t))
					},
					N = e => {
						Object(m.d)(m.a.SearchResults), O && O(Object(f.e)(e, b.id))
					},
					v = !(n || !S || !S.length);
				return v ? o.a.createElement("div", {
					className: Object(a.a)(C, t),
					"data-ignore-click": x
				}, v && g && o.a.createElement(d.a, {
					className: h.a.flairList,
					isFlairFilter: s,
					key: "leftFlair",
					onClick: y,
					onMouseDown: N,
					flair: g,
					disabled: !i,
					subredditName: I
				}), v && o.a.createElement(d.a, {
					className: h.a.flairList,
					isFlairFilter: s,
					key: "rightFlair",
					onClick: y,
					onMouseDown: N,
					flair: T,
					disabled: !i,
					subredditName: I
				})) : null
			})
		},
		"./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less": function(e, t, n) {
			e.exports = {
				item: "XEkFoehJNxIH9Wlr5Ilzd",
				mFocused: "_3Av66iQf7_N4Z-XZxsek76",
				itemWrapper: "_17q-ew4FcK6U0ZiybWkIGG",
				customFeedIcon: "ENGeNwSHzwN-SV2KTH2s7",
				icon: "_3HTtcITrR-crvsRovLrijl",
				text: "_2aqH0n-kSzFY7HZZ5GL-Jb",
				subText: "_2Efd4uMAp4YawdvL9Zhdhv",
				title: "_1JNAu7U5gWAkRoykwfUWhY",
				favorite: "t2A0mgkgGzc8cAahJsR7a",
				mFavorite: "_2cEhEGN_WTLlwspw_bpqTr",
				relatedSubredditMetaData: "_3P_WRCH8aFjwOFA7B1RlBL",
				promoted: "bpYVdL9hAnIqOnrKi8PVS"
			}
		},
		"./src/reddit/components/Hovercards/SubredditHovercard/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/lib/loadWithRetries/index.ts");
			const o = () => null;
			t.a = Object(r.a)({
				ErrorComponent: o,
				getComponent: () => Object(s.a)(() => n.e("SubredditHovercard").then(n.bind(null, "./src/reddit/components/Hovercards/SubredditHovercard/_SubredditHovercard.tsx"))).then(e => e.default),
				LoadingComponent: o
			})
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return I
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/timeAgo/index.ts"),
				i = n("./src/reddit/hooks/useLocale.ts");
			var c = function(e) {
					let {
						seconds: t,
						...n
					} = e;
					var r;
					const c = Object(i.a)(),
						a = {
							...n,
							locale: null !== (r = n.locale) && void 0 !== r ? r : c
						};
					return s.a.createElement(s.a.Fragment, null, Object(o.d)(t, a))
				},
				a = n("./src/lib/humanizeDate/index.ts");
			var d = function(e) {
					let {
						seconds: t,
						...n
					} = e;
					var r;
					const o = Object(i.a)(),
						c = {
							...n,
							locale: null !== (r = n.locale) && void 0 !== r ? r : o
						};
					return s.a.createElement(s.a.Fragment, null, Object(a.a)(t, c))
				},
				l = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				u = n("./src/lib/constants/index.ts");
			var b = function(e) {
					let {
						seconds: t,
						locale: n
					} = e;
					const r = Object(i.a)(),
						o = null != n ? n : r;
					return s.a.createElement(s.a.Fragment, null, function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.DEFAULT_LOCALE;
						const n = e * u.Sb;
						return new Date(n).toLocaleString(t, {
							weekday: "short",
							month: "short",
							year: "numeric",
							day: "2-digit",
							hour: "2-digit",
							minute: "2-digit",
							second: "2-digit",
							timeZoneName: "long"
						})
					}(t, o))
				},
				m = n("./node_modules/fbt/lib/FbtPublic.js"),
				f = n("./src/lib/eventTools/index.ts");

			function p(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.DEFAULT_LOCALE;
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function O(e, t) {
				let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.DEFAULT_LOCALE;
				const s = Object(f.e)(e, t),
					o = new Date(e * u.Sb);
				let i;
				if (s === f.a.Live || n) return m.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return s === f.a.Future ? i = Object(f.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(f.b)(e) >= 5 ? p(o, r) : function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.DEFAULT_LOCALE;
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(o, r) : s === f.a.Past && (i = Object(f.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : p(o, r)), `${i} @ ${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.DEFAULT_LOCALE;return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(o,r)}`
			}
			var I = function(e) {
				let {
					startTime: t,
					endTime: n,
					isLive: r,
					locale: o
				} = e;
				const c = Object(i.a)(),
					a = null != o ? o : c;
				return s.a.createElement(s.a.Fragment, null, O(t, n, r, a))
			};
			n("./src/lib/humanizeUTCDate/index.tsx")
		},
		"./src/reddit/components/ImageWithFallback/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/react/index.js");
			const r = e => new Promise((t, n) => {
				const r = new Image;
				r.onload = () => t(r), r.onerror = n, r.src = e
			})
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return O
			})), n.d(t, "a", (function() {
				return I
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				a = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = n("./src/reddit/selectors/tooltip.ts"),
				l = n("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = n.n(l),
				b = n("./src/lib/lessComponent.tsx");

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const f = b.a.div("Text", u.a),
				p = b.a.div("BottomText", u.a),
				O = e => s.a.createElement(f, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				I = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return s.a.createElement(p, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				_ = Object(i.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: n
						} = t;
						return Object(d.b)(n)(e)
					}
				}),
				h = Object(a.a)(I, [c.a.Click, c.a.Keydown]),
				x = Object(a.a)(O, [c.a.Click, c.a.Keydown]),
				j = Object(o.b)(_);
			t.c = j(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(h, m({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : s.a.createElement(x, m({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/LottieAnimation/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lottie-web/build/player/lottie.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./src/reddit/components/LottieAnimation/util.ts");
			const a = i.a.memo(e => {
				const t = i.a.createRef(),
					{
						assetData: n,
						assetUrl: r,
						className: a,
						hidden: d,
						loop: l,
						useCanvasRenderer: u,
						onClick: b,
						prefersReducedAnimation: m
					} = e,
					[f, p] = Object(o.useState)(n);
				Object(o.useEffect)(() => {
					r ? Object(c.a)(r).then(p) : n && p(n)
				}, [r, n]);
				const [O, I] = Object(o.useState)(null);
				Object(o.useEffect)(() => {
					const e = t.current;
					if (!e || 0 !== e.childElementCount || O || !f) return;
					const n = s.a.loadAnimation({
						autoplay: !1,
						renderer: u ? "canvas" : "svg",
						loop: l,
						container: e,
						animationData: f
					});
					I(n)
				}, [l, t, O, f]), Object(o.useEffect)(() => {
					if (O)
						if (d) O.stop();
						else if (m) {
						const e = O.getDuration(!0);
						O.goToAndPlay(e, !0)
					} else O.goToAndPlay(0)
				}, [d, m, O]);
				const _ = Object(o.useCallback)(() => {
					O && O.goToAndPlay(0)
				}, [O]);
				return i.a.createElement("div", {
					className: a,
					style: {
						display: d ? "none" : "block"
					},
					ref: t,
					onClick: b || _
				})
			});
			t.a = a
		},
		"./src/reddit/components/LottieAnimation/util.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./src/reddit/components/ImageWithFallback/index.tsx");
			const r = {};

			function s(e) {
				let t = r[e];
				return t || (t = r[e] = fetch(e, {
					mode: "cors",
					cache: "force-cache"
				}).then(t => (t.ok || function(e) {
					throw new Error(`Unable to download effect asset "${e}"`)
				}(e), t.json()))), t
			}
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/higherOrderComponents/asTooltip.tsx"),
				i = n("./src/reddit/constants/elementIds.ts"),
				c = n("./src/reddit/contexts/InsideOverlay.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const n = Object(o.a)(e, t);
				class r extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(i.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return s.a.createElement(n, a({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(c.b)(r)
			}
		},
		"./src/reddit/components/PostTitle/getLeftAndRightFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/helpers/flair.ts"),
				s = n("./src/reddit/models/Flair/index.ts");

			function o(e) {
				let {
					flair: t,
					isFlairPositionedLeft: n,
					showNSFWSpoilerFlairsOnly: o,
					hideNSFWSpoilerFlair: i
				} = e;
				const c = [],
					a = [],
					d = [];
				for (const b of t) b.type === s.f.Nsfw || b.type === s.f.Spoiler ? c.push(b) : Object(r.q)(b.type) ? a.push(b) : d.push(b);
				let l = [],
					u = [];
				return n ? o ? (l = c, u = []) : i ? (l = a, u = d) : (l = a, u = [...c, ...d]) : o ? (l = [], u = c) : i ? (l = [], u = [...a, ...d]) : (l = [], u = [...a, ...c, ...d]), {
					leftFlair: l,
					rightFlair: u
				}
			}
		},
		"./src/reddit/components/SEOTitle/index.m.less": function(e, t, n) {
			e.exports = {
				Title: "_eYtD2XCVieq6emjKBH3m",
				title: "_eYtD2XCVieq6emjKBH3m"
			}
		},
		"./src/reddit/components/SEOTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, s, o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js");
			! function(e) {
				e[e.Collection = 0] = "Collection", e[e.HeaderSelector = 1] = "HeaderSelector", e[e.PostComments = 2] = "PostComments", e[e.PostItem = 3] = "PostItem", e[e.TopicHeader = 4] = "TopicHeader", e[e.Widget = 5] = "Widget"
			}(r || (r = {})),
			function(e) {
				e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e[e.H6 = 6] = "H6"
			}(s || (s = {}));
			var d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/helpers/postCollection.ts");
			const u = [d.Nb.COMMENTS, d.Nb.COLLECTION_COMMENTS],
				b = (e, t) => {
					if (!e) return [];
					const n = u.includes(e),
						s = e === d.Nb.COLLECTION_COMMENTS || t && Object(l.a)(t),
						o = d.V.has(e),
						i = d.Cb.has(e),
						c = e === d.Nb.SUBREDDIT,
						a = e === d.Nb.TOPIC;
					let b, m, f;
					return o && !c || i ? b = r.HeaderSelector : s ? b = r.Collection : n ? b = r.PostComments : a && (b = r.TopicHeader), (o || i || s || n) && (m = r.Widget), (o || n) && (f = r.PostItem), [b, m, f]
				};
			var m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/selectors/platform.ts"),
				p = n("./src/reddit/components/SEOTitle/index.m.less"),
				O = n.n(p);
			const I = e => {
					let {
						level: t,
						children: n
					} = e;
					const r = `h${t}`;
					return i.a.createElement(r, {
						className: O.a.Title
					}, n)
				},
				_ = Object(m.u)(),
				h = Object(c.b)(() => Object(a.a)((e, t) => {
					let {
						pageLayer: n
					} = t;
					return n && Object(f.n)(e, {
						page: n
					})
				}, (e, t) => {
					let {
						pageLayer: n
					} = t;
					return n && n.meta && n.meta.name
				}, (e, t) => {
					let {
						type: n
					} = t;
					return n
				}, (e, t, n) => ({
					level: b(t, e).indexOf(n) + 1 || void 0
				})));
			class x extends i.a.Component {
				render() {
					const {
						children: e,
						level: t
					} = this.props;
					return t ? i.a.createElement(I, {
						level: t
					}, e) : i.a.createElement(i.a.Fragment, null, e)
				}
			}
			t.b = _(h(x))
		},
		"./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js");
			const s = Object(r.createContext)(!1);

			function o() {
				return Object(r.useContext)(s)
			}
		},
		"./src/reddit/components/SubredditIcon/index.m.less": function(e, t, n) {
			e.exports = {
				Image: "_34CfAAowTqdbNDYXz5tBTW",
				image: "_34CfAAowTqdbNDYXz5tBTW",
				UserIcon: "_3-8BEp7zk8HU_Tq2SjmosX",
				userIcon: "_3-8BEp7zk8HU_Tq2SjmosX",
				blur: "_2P3jpibqK9Q2k2UJYzBNIy",
				PlanetIcon: "_2WM2ef3imxyCFqHx0Nx5M4",
				planetIcon: "_2WM2ef3imxyCFqHx0Nx5M4",
				BackupImage: "RK004G8fbNOkGdNLEzm67",
				backupImage: "RK004G8fbNOkGdNLEzm67",
				iconContainer: "_7nyhK_sDI_8i22XNdcMzb",
				editableIcon: "_1AxWRIyg1lV9-r_CmqYj0o",
				flexContainer: "-Mpi2pdgifDBOdpUYX2vh",
				clickableUploadText: "_3H6u2CWhsluIPVF14GpEaA",
				inTopBar: "_1UpdjN7u66BU606z97t4HS",
				emptyUploadButton: "ndkYE2hc8Y-V3NHpSYvxA",
				transition: "_1iA7YdCRjbU9Rd_2VNGvsw",
				emptyEditableIcon: "_1h9JeZaSDxkh67Ns3QVUP2",
				emptyPlusButton: "Dh1qxsy_tIctL9f4LEzv9",
				imageUploader: "JBITiVY1zX1mMDq-sHkru",
				loadingIcon: "_3Dk8QRKhQImYqds2lSF6G4",
				loadingIconInTopBar: "_1U3KLnHX2TdXL5lNrrv4EW",
				emptyEditableIconInTopBar: "_3-i_fdY8zqHIo3CjuVzTYE",
				defaultCommunityIcon: "_1xvdfUtOPDANqHjxzxKX5b",
				mNightmode: "_1TI6C7sqGL9TRdsq1jRks",
				iconLink: "_35ahToY-XcU6llULyYdy2A"
			}
		},
		"./src/reddit/components/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/reddit/components/UserIcon/index.tsx"),
				u = n("./src/reddit/constants/colors.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				f = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/models/Subreddit/index.ts"),
				O = n("./src/reddit/selectors/user.ts"),
				I = n("./src/reddit/components/SubredditIcon/index.m.less"),
				_ = n.n(I);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const x = d.a.wrapped(l.a, "UserIcon", _.a),
				j = d.a.img("Image", _.a),
				E = e => {
					let {
						iconColor: t,
						...n
					} = e;
					return i.a.createElement(j, h({
						style: {
							backgroundColor: t || ""
						}
					}, n))
				},
				S = d.a.div("BackupImage", _.a),
				g = Object(b.u)();
			t.b = g(e => {
				var t;
				const n = Object(c.e)(O.db);
				let o, d, l;
				if (e.subredditOrProfile) {
					const {
						url: t,
						color: n
					} = Object(m.a)({
						shouldHideNsfwIcon: !!e.shouldHideNsfwIcon,
						subredditOrProfile: e.subredditOrProfile
					});
					Object(p.h)(e.subredditOrProfile) ? l = i.a.createElement(x, {
						className: e.className,
						iconUrl: t,
						isNSFW: e.subredditOrProfile.isNSFW,
						userName: e.subredditOrProfile.name
					}) : (o = t, d = n)
				} else o = e.shouldHideNsfwIcon ? `${r.a.assetPath}/img/avatar_over18.png` : e.iconUrl, d = e.primaryColor || u.a.alienblue;
				return o ? l = i.a.createElement(E, {
					alt: s.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: Object(a.a)(e.className, {
						[_.a.blur]: e.shouldBlurSubredditIcon
					}),
					iconColor: d,
					role: "presentation",
					src: o
				}) : l || (l = i.a.createElement(f.a, {
					name: "community",
					isFilled: !n,
					className: Object(a.a)(_.a.defaultCommunityIcon, e.className, {
						[_.a.mNightmode]: n,
						[_.a.blur]: e.shouldBlurSubredditIcon
					}),
					style: n ? {
						backgroundColor: e.redditStyle ? u.a.alienblue : d
					} : {
						color: e.redditStyle ? u.a.alienblue : d
					}
				})), e.linkTo ? i.a.createElement("a", h({}, null !== (t = e.linkProps) && void 0 !== t ? t : {}, {
					href: e.linkTo,
					className: _.a.iconLink
				}), l) : i.a.createElement(i.a.Fragment, null, l)
			})
		},
		"./src/reddit/components/Thumbnail/index.m.less": function(e, t, n) {
			e.exports = {
				blurredThumbnail: "GnWcY6GPzeZ5rzsiQ98fo",
				container: "_2MkcR85HDnYngvlVW2gMMa",
				contentType: "_2hIvPRO2xz4rn9LXAJXYDa",
				hasType: "_10qSZsDWnOBwx4bc7GJ1QF",
				hiddenImage: "_25ZOvQhQdAqwdxPd5z-KFB",
				imageThumbnail: "_33Pa96SGhFVpZeI6a7Y_Pl",
				verticallyCenterThumbnail: "Fq7oYOARH1VVCaLAuAh37",
				linkIcon: "m0n699kowSp8Wfa40lqpF",
				outboundLinkIcon: "_2rOixIHGmpfZB93ihJsw3V",
				placeholderThumbnail: "_2YO2O4rMRYYMeH_t2y8M5w",
				thumbnail: "_2c1ElNxHftd8W_nZtcG9zf",
				usePreview: "_78ohNtfA1urjgUhnN1jLi",
				LinkText: "_3HXDOeeCKnmgu_pIdoLofi",
				linkText: "_3HXDOeeCKnmgu_pIdoLofi"
			}
		},
		"./src/reddit/components/Thumbnail/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return L
			}));
			var r = n("./src/lib/isUrl/index.ts"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				l = n("./src/reddit/components/ImageWithFallback/index.tsx"),
				u = n("./src/reddit/controls/ContentType/index.tsx"),
				b = n("./src/reddit/controls/OutboundLink/index.tsx"),
				m = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				f = n("./src/reddit/models/Media/index.ts"),
				p = n("./src/reddit/models/Theme/index.ts"),
				O = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				I = n("./src/telemetry/models/Outbound.ts"),
				_ = n("./src/reddit/components/Thumbnail/index.m.less"),
				h = n.n(_);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => e.placeholderImage || Object(O.a)(e).placeholderImage,
				E = e => e.placeholderImage ? "cover" : Object(O.a)(e).placeholderImagePosition,
				S = a.a.span("LinkText", h.a),
				g = e => {
					let {
						className: t,
						onClick: n,
						children: r
					} = e;
					return o.a.createElement("div", {
						onClick: n,
						className: Object(i.a)(h.a.linkIcon, t)
					}, r)
				},
				T = e => o.a.createElement("img", {
					alt: e.alt,
					className: Object(i.a)(h.a.hiddenImage, e.className)
				}),
				C = e => {
					const t = o.a.createRef(),
						{
							src: n,
							errorSrc: r
						} = e;
					return n && r && Object(l.a)(n).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${r})`)
					}), o.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(i.a)(h.a.thumbnail, h.a.imageThumbnail, e.className),
						"data-click-id": "image",
						ref: t,
						role: "img",
						style: {
							backgroundImage: `url(${e.src})`,
							borderColor: e.isOutbound ? Object(O.a)(e).button : Object(O.a)(e).line
						}
					}, e.isOutbound && o.a.createElement(g, {
						className: e.linkIconClassName
					}, o.a.createElement(m.a, {
						className: Object(i.a)(h.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && o.a.createElement(S, {
						className: e.linkTextClassName
					}, e.text)), o.a.createElement(T, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				y = e => e.isOutbound ? Object(O.a)(e).button : e.placeholderImage ? "transparent" : Object(O.a)(e).line,
				N = e => {
					const t = j(e),
						n = t && {
							background: Object(p.g)(Object(O.a)(e).placeholder, t, E(e))
						};
					return o.a.createElement("div", {
						className: Object(i.a)(h.a.thumbnail, h.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...n,
							borderColor: y(e)
						}
					}, (!e.placeholderImage || e.showContentType) && o.a.createElement(u.a, {
						className: Object(i.a)(e.contentTypeClassName, h.a.contentType, {
							[h.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && o.a.createElement(g, {
						className: e.linkIconClassName
					}, o.a.createElement(m.a, {
						className: Object(i.a)(h.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && o.a.createElement(S, {
						className: e.linkTextClassName
					}, e.text)))
				},
				v = e => o.a.createElement(C, x({}, e, {
					className: Object(i.a)(h.a.blurredThumbnail, e.className)
				})),
				k = Object(c.a)(e => {
					const {
						className: t,
						containerClassName: n,
						contentTypeClassName: s,
						crosspost: c,
						forceShowNSFW: a,
						isCommentsPage: d,
						isMeta: l,
						linkIconClassName: u,
						linkTextClassName: m,
						outboundLinkIconClassName: p,
						post: O,
						redditStyle: _,
						removeLink: x,
						showContentType: E,
						templatePlaceholderImage: S,
						text: g,
						theme: T,
						usePreview: C
					} = e, y = !T.subredditContext.shouldShowNSFWContent && (O.isNSFW || !(!c || !c.isNSFW)) && !a, N = j({
						placeholderImage: S,
						redditStyle: _,
						theme: T
					}), v = L(e), k = d ? I.SourceElement.PostImage : I.SourceElement.ListingPostImage, w = P(O, t, N, y, g, T, v, l, E, x, _, u, m, p, s), D = Object(f.D)(O);
					return Object(r.a)(D) && !x && D.indexOf("redditmedia") < 0 ? o.a.createElement("div", {
						className: Object(i.a)(h.a.container, C ? h.a.usePreview : "", n)
					}, o.a.createElement(b.b, {
						href: Object(f.D)(O),
						isSponsored: O.isSponsored,
						postId: O.id,
						source: O.source,
						sourceElement: k
					}, w)) : o.a.createElement("div", {
						className: Object(i.a)(h.a.container, C ? h.a.usePreview : "", n)
					}, w)
				}),
				L = e => {
					let {
						crosspost: t,
						post: n,
						url: r,
						usePreview: s
					} = e;
					if (r) return r;
					const {
						preview: o,
						media: i,
						thumbnail: c
					} = t || n;
					return s && o ? o.url : n.isSponsored && o && "default" === c.url ? o.url : w(i) ? i.scrubberThumbSource : c.url
				},
				w = e => !!e && e.type === f.o.LIVEVIDEO,
				P = (e, t, n, s, c, a, l, u, b, m, f, p, O, I, _) => {
					const j = (e => e.source && !e.isSponsored || !1)(e);
					if (Object(r.a)(l)) {
						const n = w(e.media),
							r = n ? {
								errorSrc: d.U
							} : {},
							u = Object(i.a)(t, {
								[h.a.verticallyCenterThumbnail]: n
							});
						return s ? o.a.createElement(v, x({
							"data-click-id": "image",
							src: l
						}, r, {
							className: u,
							isOutbound: j && !m,
							linkIconClassName: p,
							linkTextClassName: O,
							outboundLinkIconClassName: I,
							redditStyle: f,
							text: c,
							theme: a
						})) : o.a.createElement(C, x({
							alt: e.title,
							className: u,
							src: l
						}, r, {
							isOutbound: j && !m,
							linkIconClassName: p,
							linkTextClassName: O,
							outboundLinkIconClassName: I,
							redditStyle: f,
							text: c,
							theme: a
						}))
					}
					return o.a.createElement(N, {
						className: t,
						contentTypeClassName: _,
						placeholderImage: n,
						isMeta: u,
						isOutbound: j && !m,
						linkIconClassName: p,
						linkTextClassName: O,
						outboundLinkIconClassName: I,
						redditStyle: f,
						showContentType: b,
						text: c,
						theme: a,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData
					})
				};
			t.a = k
		},
		"./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/components/AdViewability/index.tsx"),
				i = n("./src/reddit/components/BlankPost/index.tsx"),
				c = n("./src/reddit/connectors/PostViewable/index.ts");
			const a = Object(c.a)(null);
			class d extends s.a.Component {
				render() {
					const {
						children: e,
						post: t,
						onPostViewable: n
					} = this.props;
					if (t) return t.isBlank ? s.a.createElement(i.BlankPost, {
						post: t,
						postId: t.id,
						onPostViewable: n
					}) : s.a.createElement(o.a, {
						post: t,
						trackDisplay: !0
					}, e)
				}
			}
			t.a = a(d)
		},
		"./src/reddit/components/UserIcon/PresenceDot.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				c = n("./src/reddit/icons/svgs/PresenceCircle/index.tsx"),
				a = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				d = n.n(a);
			t.default = e => {
				const {
					showPresence: t,
					onceInViewport: n
				} = e, a = Object(r.useRef)(null), l = Object(r.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t
						} = e;
						t && n && n()
					})
				}, [n]);
				return Object(i.a)(a, l), s.a.createElement(c.a, {
					ref: a,
					className: Object(o.a)(d.a.presenceDot, {
						[d.a.isLit]: t
					}),
					isHighlighted: e.isHighlighted,
					outlineClassName: e.outlineClassName
				})
			}
		},
		"./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				a = n.n(c);
			t.a = function(e) {
				let {
					backgroundClassName: t,
					className: n,
					headshot: s,
					hasNftBorder: c
				} = e;
				return o.a.createElement("div", {
					className: Object(i.a)(a.a.snoovatarWrapper, n, {
						[a.a.hasNftBorder]: Boolean(c)
					})
				}, o.a.createElement("div", {
					className: Object(i.a)(a.a.snoovatarBackground, t)
				}), o.a.createElement("div", {
					className: a.a.snoovatarHeadshotContainer
				}, o.a.createElement("img", {
					alt: r.fbt._("User avatar", null, {
						hk: "12gjW8"
					}),
					className: a.a.snoovatarHeadshot,
					src: s
				})))
			}
		},
		"./src/reddit/components/UserIcon/UserIcon.m.less": function(e, t, n) {
			e.exports = {
				currentUserIconWrapper: "efdkOLo3oigH_95whTYCp",
				userIconWrapper: "_2p14AQvJBvTrEEa4csiW9v",
				isProfileIcon: "_1lxVpLf3223Gve3gRhbG-R",
				DefaultUserIcon: "_3utuhrSAkEkzgaswqglvpN",
				defaultUserIcon: "_3utuhrSAkEkzgaswqglvpN",
				UserIcon: "_2TN8dEgAQbSyKntWpSPYM7",
				userIcon: "_2TN8dEgAQbSyKntWpSPYM7",
				mNightmode: "_2aVSEFJsIE0M-4uRE-U24H",
				nftAnimation: "_3fhlcUDP9SJN47QMfuzW_j",
				nftBackground: "_3ppYbU2ZS369JSNSb8585I",
				nftBorder: "_1AX7t-EP7R4ZoVC41DG-Jx",
				snoovatarWrapper: "_1cyAeeYDGrx7MPL_jRwKZ",
				snoovatarBackground: "_2_QqG5dG916znjlVV8ZCbw",
				hasNftBorder: "_3Bn5QwbgKslkdt4UwkP9r9",
				snoovatarHeadshotContainer: "_1XJXnCAngvZLEeLpB3oa4L",
				snoovatarHeadshot: "ScrrUjzznpAqm92uwgnvO",
				presenceDot: "_2dn5Ncenn0BSD4tCSmxQhA",
				isLit: "GpWjjkZl5_kV4yZYWBaT2",
				hasHeadShotWrapper: "_1TENjLYSaj4L4uJMZa3DRe"
			}
		},
		"./src/reddit/components/UserIcon/UserIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "c", (function() {
				return b
			}));
			var r = n("./src/config.ts"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/SnooSilhouette/index.tsx"),
				d = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				l = n.n(d);
			const u = `${r.a.assetPath}/img/avatar_over18_square.png`,
				b = e => !e || e.includes("avatar_default_");
			t.b = e => {
				const {
					className: t,
					iconUrl: n,
					isCurrentUser: r,
					isNightMode: o,
					isNSFW: d,
					nsfwIconUrl: m,
					shouldHideNSFW: f
				} = e;
				if (r && b(n) || !r && !n) return i.a.createElement(a.a, {
					className: Object(c.a)(l.a.DefaultUserIcon, t, {
						[l.a.mNightmode]: o
					})
				});
				const p = !r && d && f ? m || u : n;
				return i.a.createElement("img", {
					alt: s.fbt._("User avatar", null, {
						hk: "X43nA"
					}),
					className: Object(c.a)(l.a.UserIcon, t),
					src: p
				})
			}
		},
		"./src/reddit/components/UserIcon/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/realtime/GQLSubscription/async.tsx"),
				d = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				u = n("./src/reddit/models/User/index.ts"),
				b = n("./src/config.ts"),
				m = n("./src/reddit/components/LottieAnimation/index.tsx");
			var f = e => {
					let {
						className: t
					} = e;
					return o.a.createElement("svg", {
						className: t,
						fill: "none",
						viewBox: "0 0 32 32",
						xmlns: "http://www.w3.org/2000/svg"
					}, o.a.createElement("radialGradient", {
						id: "a",
						cx: "0",
						cy: "0",
						gradientTransform: "matrix(20.06268 6.0999 -3097.55815 10187.91225 -3.1 11.6)",
						gradientUnits: "userSpaceOnUse",
						r: "1"
					}, o.a.createElement("stop", {
						offset: "0",
						stopColor: "#1185b5"
					}), o.a.createElement("stop", {
						offset: ".29",
						stopColor: "#d7f7ff"
					}), o.a.createElement("stop", {
						offset: ".53",
						stopColor: "#5ef6d8"
					}), o.a.createElement("stop", {
						offset: ".84",
						stopColor: "#5ef6d8"
					}), o.a.createElement("stop", {
						offset: ".87",
						stopColor: "#1990b9"
					}), o.a.createElement("stop", {
						offset: "1",
						stopColor: "#3f9fc6"
					})), o.a.createElement("path", {
						d: "M13.77 1.1c.76-.41 1.7-.41 2.46 0L28 7.58c.75.42 1.2 1.17 1.2 1.96v12.94c0 .79-.45 1.54-1.2 1.95L16.23 30.9c-.76.42-1.7.42-2.46 0L2 24.42a2.25 2.25 0 0 1-1.2-1.95V9.53C.8 8.74 1.24 8 2 7.57z",
						stroke: "url(#a)",
						strokeLinejoin: "round",
						strokeWidth: "1.59"
					}))
				},
				p = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				O = n.n(p);
			var I = e => {
					let {
						iconUrl: t
					} = e;
					return Object(d.c)(t) ? o.a.createElement(m.a, {
						className: O.a.nftAnimation,
						assetUrl: `${b.a.assetPath}/img/snoovatars/comment-animations/nft_comment_animation.json`,
						loop: !0
					}) : o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: O.a.nftBackground
					}), o.a.createElement(f, {
						className: O.a.nftBorder
					}))
				},
				_ = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				h = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				x = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				j = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const g = () => {},
				T = Object(c.c)({
					currentUser: j.k,
					isNightMode: j.db,
					shouldHideNSFW: j.F,
					user: j.Ab,
					isProfileAvatarChangeFixEnabled: E.a
				}),
				C = Object(i.b)(T);
			t.a = C(e => {
				const {
					authorId: t,
					collapsed: n,
					currentUser: i,
					iconUrl: c,
					isCommentAuthorBlocked: b,
					isHighlighted: m,
					isNft: f,
					isNSFW: p,
					shouldUseOnlineOverride: j,
					isOnlineOverrideValue: E,
					isOnlineStatusLoadTest: T,
					isProfileIcon: C,
					omitResponsivePresenceWrapper: y,
					onPresenceIndicatorInViewport: N,
					shouldShowPresenceIndicator: v,
					user: k,
					userName: L,
					isProfileAvatarChangeFixEnabled: w,
					...P
				} = e, D = !!i && Object(u.e)(i) === L, A = D ? i : k, R = A && A.accountIcon || c, U = k ? k.isNSFW : p, F = Object(d.a)(R) && !b, M = F ? o.a.createElement(h.a, {
					headshot: R,
					className: e.className,
					hasNftBorder: f && Object(d.d)(c)
				}) : o.a.createElement(x.b, S({}, P, {
					iconUrl: b && n ? "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png" : R,
					isCurrentUser: D,
					isNSFW: U
				})), [B, G] = Object(s.useState)(!1), H = Object(s.useMemo)(() => ({
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "ONLINE_STATUS_INDICATOR",
							userID: t
						}
					}
				}), [t]), V = Object(s.useCallback)(e => {
					const {
						isOnline: t
					} = e.subscribe.data;
					G(t)
				}, []), W = Object(s.useRef)(null), [q, K] = Object(s.useState)(!1), Y = Object(s.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: n
						} = e, r = 1 !== n;
						t ? K(!0) : r && K(!1)
					})
				}, []), $ = Object(s.useRef)({
					rootMargin: "750px 0px 1000px 0px"
				});
				return Object(l.a)(W, Y, $.current), y ? M : o.a.createElement("div", {
					className: Object(r.a)(O.a.userIconWrapper, {
						[O.a.hasHeadShotWrapper]: F,
						[O.a.isProfileIcon]: C && w
					}),
					ref: W
				}, f && o.a.createElement(I, {
					iconUrl: c
				}), M, v && (B || j && E) && o.a.createElement(_.default, {
					showPresence: !0,
					isHighlighted: m,
					onceInViewport: N
				}), (v || T) && !j && q && o.a.createElement(a.a, {
					variables: H,
					onData: v ? V : g,
					queryKey: "isUserOnline"
				}))
			})
		},
		"./src/reddit/constants/elementClassNames.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "k", (function() {
				return c
			})), n.d(t, "m", (function() {
				return a
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "n", (function() {
				return l
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "l", (function() {
				return f
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "i", (function() {
				return O
			}));
			const r = "DraftEditor-contentwrapper",
				s = "public-DraftStyleDefault-block",
				o = "data-offset-key",
				i = "hovered",
				c = "scrollerItem",
				a = "threadline",
				d = "header-user-dropdown",
				l = "voteButton",
				u = "RichTextJSON-root",
				b = "ImageBox-image",
				m = "content-type-link",
				f = "styled-outbound-link",
				p = "ListingLayout-backgroundContainer",
				O = "ListingLayout-outerContainer"
		},
		"./src/reddit/contexts/InsideOverlay.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const i = s.a.createContext(!1);

			function c(e) {
				function t(t) {
					return s.a.createElement(i.Consumer, null, n => s.a.createElement(e, o({}, t, {
						isOverlay: n
					})))
				}
				return t.displayName = `WithOverlay(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/controls/ContentType/index.m.less": function(e, t, n) {
			e.exports = {
				contentTypeIcon: "_3CquMWJ6RMh8E9D-_84AtZ"
			}
		},
		"./src/reddit/controls/ContentType/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/constants/icons.ts"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				a = n("./src/reddit/constants/elementClassNames.ts"),
				d = n("./src/reddit/controls/ContentType/index.m.less"),
				l = n.n(d);
			const u = e => Object(o.a)(l.a.contentTypeIcon, e.className),
				b = {
					embed: i.a.embed,
					gallery: i.a.media_gallery,
					gifvideo: i.a.gif_post,
					image: i.a.image_post,
					meta: i.a.poll_post,
					rpan: i.a.video_live,
					rtjson: i.a.text_post,
					text: i.a.text_post,
					video: i.a.video_post,
					liveaudio: i.a.audio
				};

			function m(e) {
				const t = u(e),
					n = e.type && b[e.type] || i.a.link_post;
				return s.a.createElement(c.a, {
					name: n,
					className: Object(o.a)({
						[a.a]: n === i.a.link_post
					}, t)
				})
			}
		},
		"./src/reddit/controls/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return N
			})), n.d(t, "c", (function() {
				return v
			}));
			var r = n("./node_modules/lodash/omit.js"),
				s = n.n(r),
				o = n("./node_modules/query-string/index.js"),
				i = n.n(o),
				c = n("./node_modules/react/index.js"),
				a = n.n(c),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				u = n("./src/lib/addQueryParams/index.ts");
			var b = (e, t) => t ? Object(u.a)(e, {
				user_id: t
			}) : e;
			var m = n("./src/lib/opener/index.ts"),
				f = n("./src/lib/redditId/index.ts"),
				p = n("./src/reddit/actions/post.ts"),
				O = n("./src/reddit/constants/adEvents.ts"),
				I = n("./src/reddit/helpers/getVendorMetadata.ts"),
				_ = n("./src/reddit/helpers/pixels.ts"),
				h = n("./src/reddit/helpers/trackers/ads.ts"),
				x = n("./src/reddit/hooks/useOutboundClickTracking.ts"),
				j = n("./src/reddit/selectors/posts.ts"),
				E = n("./src/reddit/selectors/telemetry.ts"),
				S = n("./src/reddit/selectors/user.ts");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const T = Object(l.a)(S.a, S.k, (e, t) => {
					let {
						isSponsored: n,
						postId: r
					} = t;
					return n && r ? Object(j.b)(e, r) : null
				}, j.G, E.d, (e, t, n, r, s) => ({
					allowClickTracking: e,
					basePixelMetadata: n,
					userId: t ? Object(f.a)(t.id) : null,
					post: r,
					pageType: s.pageType
				})),
				C = Object(d.b)(T, e => ({
					fireAdPixelsOfType: (t, n) => e(Object(p.z)(t, n)),
					recordClick: (t, n, r) => {
						const s = t.events.filter(e => {
							let {
								type: t,
								url: n
							} = e;
							return t === O.a.Click && Object(_.b)(n)
						});
						Object(_.c)(s), e(Object(p.p)(String(n), {
							postId: t.id,
							vendorMetadata: r
						}))
					}
				})),
				y = (e, t, n, r) => {
					const s = t.outboundUrlExpiration && t.outboundUrlExpiration > Date.now();
					r && t.outboundUrl && s && (e.href = b(t.outboundUrl, n), e.href = function(e) {
						return Object(u.a)(e, {
							web_redirect: "true"
						})
					}(e.href))
				},
				N = (e, t, n) => {
					let r, s = null;
					if (e && t && /^(http|https):\/\/([a-z]+\.)?reddit.com/.test(n)) {
						s = Object(I.a)(e, t, O.a.Click);
						const {
							url: o,
							query: c
						} = i.a.parseUrl(n);
						r = i.a.stringifyUrl({
							url: o,
							query: {
								...c,
								...s
							}
						})
					} else r = n;
					return {
						url: r,
						metadata: s
					}
				},
				v = (e, t, n) => {
					const r = N(t, n, e.href);
					return e.href = r.url, r.metadata
				},
				k = e => {
					let {
						isSponsored: t,
						source: n
					} = e;
					return !!(t && (null == n ? void 0 : n.outboundUrl))
				},
				L = C(e => {
					const t = Object(c.useRef)(null),
						n = Object(x.a)(),
						{
							allowClickTracking: r,
							basePixelMetadata: o,
							commentId: i,
							fireAdPixelsOfType: d,
							href: l,
							isSponsored: u,
							pageType: b,
							post: f,
							postId: p,
							recordClick: I,
							source: _,
							sourceElement: j,
							userId: E
						} = e;
					let S = s()(e, ["allowClickTracking", "basePixelMetadata", "fireAdPixelsOfType", "isSponsored", "postId", "post", "recordClick", "commentId", "source", "sourceElement", "userId", "pageType"]);
					const T = _ && _.outboundUrl && u ? _.outboundUrl : l;
					return S = {
						...S,
						href: T,
						rel: u ? m.b : m.a,
						target: m.d.BLANK
					}, !_ || (e => {
						const {
							outboundUrlCreated: t,
							outboundUrlReceived: n
						} = e;
						return !(!t || !n) && (t > n + 3e5 || t < n - 36e5)
					})(_) ? a.a.createElement("a", g({}, S, {
						onClick: () => n(l, j, i, p)
					})) : a.a.createElement("a", g({}, S, {
						onMouseDown: n => {
							if (!k(e)) return !(1 !== n.button && 2 !== n.button && !n.ctrlKey) || void y(n.currentTarget, _, E, r);
							t.current = v(n.currentTarget, p, o)
						},
						onClick: () => {
							f && (k(e) && (I(f, O.a.Click, t.current), Object(h.a)(f, b)), d(f, O.a.Click), n(l, j, i, p))
						},
						onMouseLeave: e => {
							u || ((e, t) => {
								e.href = t
							})(e.currentTarget, T)
						},
						onTouchStart: e => y(e.currentTarget, _, E, r),
						"data-testid": "outbound-link"
					}))
				});
			t.b = L
		},
		"./src/reddit/controls/OutboundLink/styled.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/constants/elementClassNames.ts"),
				o = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/styles.m.less"),
				c = n.n(i);
			t.a = r.a.wrapped(o.b, "styledOutboundLink", {
				styledOutboundLink: `${c.a.styledOutboundLink} ${s.l}`
			})
		},
		"./src/reddit/controls/OutboundLink/styles.m.less": function(e, t, n) {
			e.exports = {
				styledOutboundLink: "_13svhQIUZqD9PVzFcLwOKT"
			}
		},
		"./src/reddit/controls/Search/RelatedSubredditMetaData.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return O
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				m = n.n(b),
				f = n("./src/reddit/controls/Search/index.m.less"),
				p = n.n(f);
			const O = Object(o.b)(() => Object(i.c)({
				subredditsByName: Object(a.a)((e, t) => {
					const n = {};
					return t.subredditIcons && t.subredditIcons.map(t => {
						n[t.subredditName] = Object(u.A)(e, {
							subredditName: t.subredditName
						})
					}), n
				})
			}))(e => s.a.createElement("div", {
				className: Object(c.a)(m.a.subText, p.a.subText, e.className)
			}, e.subredditIcons ? e.subredditIcons.map(t => s.a.createElement(d.a, {
				key: `${t.subredditName}-hoverCard`,
				subredditName: t.subredditName
			}, s.a.createElement(l.b, {
				className: Object(c.a)(p.a.subredditIcon, p.a.isHeaderIcon, e.iconClassName),
				linkTo: `/r/${t.subredditName}/`,
				key: t.subredditName,
				iconUrl: t.url,
				subredditOrProfile: e.subredditsByName[t.subredditName]
			}))) : s.a.createElement(l.b, {
				className: Object(c.a)(p.a.subredditIcon, e.iconClassName),
				key: e.iconUrl,
				iconUrl: e.iconUrl
			}), e.suffix && s.a.createElement("span", null, e.suffix)))
		},
		"./src/reddit/controls/Search/index.m.less": function(e, t, n) {
			e.exports = {
				relativeWrapper: "_1blFGqU8stoZgWSZ8MQNpf",
				hasIcons: "_1M-azLenSs2UgxeZ2rJX20",
				subText: "_2-DL_E9cFo1xsqU3Q8BXnJ",
				subredditIcon: "_2me05I1oHEys1gUyyDWswt",
				isHeaderIcon: "_1biYoFBD4CLgOvrr_HinV4"
			}
		},
		"./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json"),
				o = n("./src/redditGQL/operations/UpdateNotificationPreferences.json");
			const i = (e, t) => Object(r.a)(e, {
					...s,
					variables: t
				}),
				c = (e, t) => Object(r.a)(e, {
					...o,
					variables: {
						input: {
							preferences: [t]
						}
					}
				})
		},
		"./src/reddit/endpoints/subreddit/subscriptions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var r = n("./src/redditGQL/operations/SubscribedSubreddits.json"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			t.a = e => Object(i.a)(e, r);
			const l = (e, t) => {
					let {
						subredditIds: n,
						subredditNames: r,
						subscribe: i
					} = t;
					return Object(o.a)(Object(c.a)(e, [a.a]), {
						method: s.jb.POST,
						endpoint: Object(d.a)(`${e.apiUrl}/api/subscribe`),
						data: {
							action: i ? "sub" : "unsub",
							sr: n && n.join(",") || void 0,
							sr_name: r && r.join(",") || void 0,
							api_type: "json"
						}
					})
				},
				u = (e, t, n) => Object(o.a)(Object(c.a)(e, [a.a]), {
					method: s.jb.POST,
					endpoint: `${e.apiUrl}/api/favorite`,
					data: {
						make_favorite: n ? "true" : "false",
						sr_name: t,
						api_type: "json"
					}
				})
		},
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/env/index.ts"),
				s = n("./src/reddit/helpers/parseUrl.ts");
			const o = ["old", "new", "en", "www", "np", "m"],
				i = ["reddit.com", "reddit.local", ..."undefined" != typeof window && Object(r.a)() ? [window.location.host] : []].concat("").concat(o.map((function(e) {
					return e + ".reddit.com"
				}))).concat(o.map((function(e) {
					return e + ".reddit.local"
				}))),
				c = ["mod.reddit.com"],
				a = {
					subreddit: {
						pathnameComponents: ["subredditName"],
						pathname: /^\/r\/(\w+)\/?$/
					},
					user: {
						pathnameComponents: ["username"],
						pathname: /^\/(?:user|u)\/(\w+)\/?$/
					},
					postShortlink: {
						hostnames: i.concat("redd.it"),
						pathnameComponents: ["postID36"],
						pathname: /^\/([A-Za-z0-9]+)\/?$/
					},
					postDetail: {
						pathnameComponents: ["postID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)(?:\/\w+)?\/?$/
					},
					comment: {
						pathnameComponents: ["postID36", "commentID36"],
						pathname: /^\/(?:(?:r|user|u)\/.+\)?\/)?comments\/(\w+)\/\w+\/(\w+)\/?$/
					},
					modmailConversation: {
						hostnames: c,
						pathnameComponents: ["modmailConversationId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/?$/
					},
					modmailMessage: {
						hostnames: c,
						pathnameComponents: ["modmailConversationId", "modmailMessageId"],
						pathname: /^\/mail\/[^/]+\/(\w+)\/(\w+)\/?$/
					}
				};

			function d(e, t) {
				const n = a[e];
				if (!a) throw new Error("Could not find reddit URL spec: " + e);
				const r = Object(s.a)(t);
				if (!r) return void console.error("Could not parse url", t);
				if (-1 === (n.hostnames || i).indexOf(r.hostname)) return;
				const o = r.pathname.match(n.pathname);
				if (o) {
					return {
						url: t,
						routeName: e,
						components: n.pathnameComponents.reduce((function(e, t, n) {
							return e[t] = o[n + 1], e
						}), {})
					}
				}
			}

			function l(e) {
				return (e.match(new RegExp(s.b, "g")) || []).map((function(e) {
					let t;
					return Object.keys(a).some((function(n) {
						return t = d(n, e)
					})), t
				})).filter((function(e) {
					return e
				}))
			}
		},
		"./src/reddit/helpers/styles/smartTextColor.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const o = e => Object(r.b)(e) < .6;

			function i(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.a.bodyText,
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.b.bodyText;
				return o(e) ? n : t
			}
		},
		"./src/reddit/helpers/trackers/ads.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/helpers/localStorage/index.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, n) => s => ({
					source: "post",
					action: "view",
					noun: "programmatic_ad",
					...o.n(s),
					subreddit: o.ib(s),
					programmatic: {
						adUnit: null !== e && null !== t ? `DESKTOP ${e}x${t} ${n}` : `DESKTOP ${n}`,
						count: 1,
						type: r.f.SWITCH_HOUSE_AD
					}
				}),
				c = (e, t) => {
					t && (Object(s.Ab)(e.postId), Object(s.Jb)(t)), e.impressionIdStr ? Object(s.Bb)(e.impressionIdStr) : e.impressionId && Object(s.Bb)(e.impressionId)
				}
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "u", (function() {
				return C
			})), n.d(t, "v", (function() {
				return y
			})), n.d(t, "A", (function() {
				return L
			})), n.d(t, "s", (function() {
				return w
			})), n.d(t, "t", (function() {
				return P
			})), n.d(t, "c", (function() {
				return D
			})), n.d(t, "p", (function() {
				return A
			})), n.d(t, "q", (function() {
				return R
			})), n.d(t, "z", (function() {
				return U
			})), n.d(t, "y", (function() {
				return F
			})), n.d(t, "x", (function() {
				return M
			})), n.d(t, "o", (function() {
				return B
			})), n.d(t, "r", (function() {
				return G
			})), n.d(t, "m", (function() {
				return q
			})), n.d(t, "g", (function() {
				return K
			})), n.d(t, "l", (function() {
				return Y
			})), n.d(t, "e", (function() {
				return $
			})), n.d(t, "f", (function() {
				return z
			})), n.d(t, "h", (function() {
				return Q
			})), n.d(t, "j", (function() {
				return J
			})), n.d(t, "k", (function() {
				return X
			})), n.d(t, "i", (function() {
				return Z
			})), n.d(t, "d", (function() {
				return ee
			})), n.d(t, "n", (function() {
				return te
			})), n.d(t, "w", (function() {
				return ne
			}));
			var r, s = n("./src/lib/stringInterpolate/index.ts"),
				o = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = (n("./src/reddit/constants/categories.tsx"), n("./src/reddit/constants/tracking.ts")),
				c = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				a = n("./src/reddit/helpers/trackers/searchResults.ts"),
				d = (n("./src/reddit/helpers/widgets/index.tsx"), n("./src/reddit/models/DiscoveryUnit/index.ts")),
				l = n("./src/reddit/models/Search/index.ts"),
				u = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/telemetry.ts"),
				m = n("./src/reddit/selectors/trending.ts"),
				f = n("./src/reddit/selectors/widgets.ts"),
				p = n("./src/telemetry/index.ts"),
				O = n("./src/reddit/helpers/search/searchImpressionId.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe", e.TRENDING = "trending"
			}(r || (r = {}));
			const I = "discovery_unit",
				_ = (e, t, n) => ({
					...b.n(e),
					source: I,
					screen: b.ab(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && n ? Object(s.a)(t.title, {
							subredditName: n.name
						}) : t.title,
						name: t.unitName
					}
				}),
				h = (e, t, n) => ({
					..._(e, t, n),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				x = (e, t) => {
					Object(p.a)(j(t)(e))
				},
				j = (e, t) => n => h(n, e, t),
				E = (e, t, n, r) => "unitName" in t ? _(e, t, r) : ((e, t, n) => ({
					...b.n(e),
					source: "search",
					screen: b.ab(e),
					search: n ? {
						...b.bb(e, n, c.a.SERP),
						structureType: b.c.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, n),
				S = (e, t, n, s, o) => ({
					...E(e, t, s, o),
					action: "view",
					noun: r.ITEM_POST,
					post: b.J(e, n)
				}),
				g = e => {
					let {
						post: t,
						rawQuery: n,
						searchQuery: r
					} = e;
					return {
						displayQuery: decodeURIComponent(r),
						rawQuery: n ? decodeURIComponent(n) : void 0,
						structureType: t && t.isSponsored ? b.c.PromotedTrend : b.c.Trending
					}
				};
			var T;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(T || (T = {}));
			const C = e => {
					Object(p.a)(k({
						...e,
						action: i.c.CLICK
					}))
				},
				y = e => {
					Object(p.a)(k({
						...e,
						action: i.c.VIEW
					}))
				},
				N = {
					[c.a.Popular]: T.POPULAR_CAROUSEL,
					[c.a.Typeahead]: T.SEARCH_DROPDOWN
				},
				v = {
					[c.a.Popular]: l.d.tile,
					[c.a.Typeahead]: l.d.dropdown
				},
				k = e => {
					let {
						action: t,
						offset: n = 0,
						state: s,
						telemetrySource: o,
						trendingSearch: i
					} = e;
					const c = N[o],
						a = v[o],
						l = Object(m.a)(s, a).filter(e => !e.post || !(e.post.isSponsored && e.post.isBlank)).findIndex(e => e.id === i.id) + n;
					return {
						...b.n(s),
						source: "search",
						action: t,
						noun: r.TRENDING,
						metaSearch: g(i),
						discoveryUnit: c === T.POPULAR_CAROUSEL ? {
							name: d.k,
							id: d.k,
							title: d.k,
							type: "query"
						} : void 0,
						actionInfo: b.d(s, {
							paneName: c,
							position: l
						}),
						search: {
							originElement: c === T.SEARCH_DROPDOWN ? "search_dropdown" : void 0,
							originPageType: s.platform.currentPage ? b.u(s.platform.currentPage) : void 0,
							query: i.rawQuery,
							structureType: b.c.Trending,
							impressionId: O.a.get(o),
							queryId: b.cb(s, o)
						}
					}
				},
				L = (e, t, n, r, s, o, c) => {
					Object(p.a)({
						...b.n(e),
						...Object(a.m)({
							state: e,
							postId: n,
							searchOptions: r,
							pageLayer: s,
							key: o,
							discoveryUnit: t
						}),
						action: i.c.VIEW,
						noun: c ? "ad" : "post"
					})
				},
				w = (e, t, n, r) => {
					Object(p.a)(S(e, t, n, r))
				},
				P = (e, t, n, r) => s => S(s, e, t, n, r),
				D = (e, t) => {
					Object(p.a)({
						..._(e, t),
						source: I,
						action: i.c.CLICK,
						noun: "show_less_often"
					})
				},
				A = (e, t, n, r) => {
					Object(p.a)(R(t, n, r)(e))
				},
				R = (e, t, n, s) => o => {
					return {
						...E(o, e, n, s),
						source: I,
						action: i.c.CLICK,
						noun: r.ITEM_POST,
						post: b.J(o, t)
					}
				},
				U = function() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					return e => Object(a.s)(e, ...t)
				},
				F = (e, t, n, r) => s => o => Object(a.k)({
					action: i.c.CLICK,
					state: o,
					searchOptions: e,
					pageLayer: t,
					subredditOrProfileIdentifier: void 0,
					key: n,
					postId: s,
					discoveryUnit: r
				}),
				M = function() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					return e => n => ({
						...U(...t)(e)(n),
						noun: "ad"
					})
				},
				B = (e, t) => n => s => ({
					...e ? _(s, e, t) : {},
					source: I,
					action: i.c.CLICK,
					noun: r.ITEM_POST,
					post: b.J(s, n)
				}),
				G = (e, t, n, r) => {
					Object(p.a)(H(t, n, r)(e))
				},
				H = (e, t, n, r) => s => {
					const o = Object(u.c)(s, {
							postId: t
						}),
						c = o ? Object(f.b)(s, o) : void 0;
					return {
						...E(s, e, n, r),
						...c,
						source: I,
						action: i.c.CLICK,
						noun: "item_post_subreddit",
						post: b.J(s, t)
					}
				},
				V = () => ({
					id: "xd_focus_verticals",
					unitType: d.e.Listing,
					experiment: "",
					title: o.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: d.c.Large,
					surface: d.d.Frontpage,
					url: "gql.reddit.com"
				}),
				W = (e, t, n) => b.d(e, {
					position: n
				}),
				q = (e, t, n) => {
					const r = V();
					return e => ({
						...h(e, r),
						actionInfo: W(e, 0, n),
						subreddit: b.jb(e, t)
					})
				},
				K = (e, t, n) => {
					const r = V();
					return e => ({
						...S(e, r, t),
						actionInfo: W(e, 0, n)
					})
				},
				Y = (e, t, n) => {
					const s = V();
					return e => ({
						..._(e, s),
						actionInfo: W(e, 0, n),
						subreddit: b.jb(e, t) || null,
						source: I,
						action: i.c.VIEW,
						noun: r.ITEM_SUBREDDIT
					})
				},
				$ = (e, t, n) => {
					const s = V();
					return e => ({
						..._(e, s),
						actionInfo: W(e, 0, n),
						post: b.J(e, t) || null,
						source: I,
						action: i.c.CLICK,
						noun: r.ITEM_POST
					})
				},
				z = (e, t, n, s) => {
					const o = V();
					return e => ({
						..._(e, o),
						actionInfo: W(e, 0, s),
						subreddit: b.jb(e, n) || null,
						post: b.J(e, t) || null,
						source: I,
						action: i.c.CLICK,
						noun: r.ITEM_POST_SUBREDDIT
					})
				},
				Q = (e, t, n) => {
					const s = V();
					return e => ({
						..._(e, s),
						actionInfo: W(e, 0, n),
						subreddit: b.jb(e, t) || null,
						source: I,
						action: i.c.CLICK,
						noun: r.ITEM_SUBREDDIT
					})
				},
				J = (e, t, n, s) => {
					const o = V();
					return e => ({
						..._(e, o),
						actionInfo: W(e, 0, n),
						subreddit: b.jb(e, t) || null,
						post: s ? b.J(e, s) : null,
						source: I,
						action: i.c.CLICK,
						noun: r.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				X = (e, t, n, s) => {
					const o = V();
					return e => ({
						..._(e, o),
						actionInfo: W(e, 0, n),
						subreddit: b.jb(e, t) || null,
						post: s ? b.J(e, s) : null,
						source: I,
						action: i.c.CLICK,
						noun: r.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				Z = (e, t, n) => {
					const s = V();
					return e => ({
						..._(e, s),
						actionInfo: W(e, 0, n),
						subreddit: b.jb(e, t) || null,
						source: I,
						action: i.c.CLICK,
						noun: r.ITEM_SUBREDDIT_HIDE
					})
				},
				ee = (e, t, n) => {
					const s = V();
					return e => ({
						..._(e, s),
						actionInfo: W(e, 0, n),
						subreddit: b.jb(e, t) || null,
						source: I,
						action: i.c.CLICK,
						noun: r.HEADER_SUBREDDIT
					})
				},
				te = (e, t) => n => ({
					..._(n, e),
					...t && Object(f.b)(n, t),
					source: I,
					action: i.c.CLICK,
					noun: "item"
				}),
				ne = e => t => ({
					..._(t, e),
					source: I,
					action: i.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/helpers/trackers/inbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "w", (function() {
				return b
			})), n.d(t, "t", (function() {
				return m
			})), n.d(t, "r", (function() {
				return f
			})), n.d(t, "s", (function() {
				return p
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "k", (function() {
				return I
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "u", (function() {
				return h
			})), n.d(t, "v", (function() {
				return x
			})), n.d(t, "y", (function() {
				return j
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "x", (function() {
				return S
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "m", (function() {
				return T
			})), n.d(t, "z", (function() {
				return C
			})), n.d(t, "q", (function() {
				return y
			})), n.d(t, "o", (function() {
				return N
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "i", (function() {
				return L
			})), n.d(t, "g", (function() {
				return w
			}));
			var r, s, o, i, c, a, d = n("./src/reddit/constants/tracking.ts"),
				l = n("./src/reddit/selectors/telemetry.ts"),
				u = n("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(r || (r = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.BlockAwarder = "block_awarder", e.DecreaseSubredditUpdates = "disable_frequent"
			}(s || (s = {})),
			function(e) {
				e.MiniInbox = "mini_inbox", e.Inbox = "inbox"
			}(o || (o = {})),
			function(e) {
				e.Inbox = "inbox", e.Nav = "nav", e.Settings = "notification_app_settings"
			}(i || (i = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND"
			}(c || (c = {})),
			function(e) {
				e.Confirm = "confirm"
			}(a || (a = {}));
			const b = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: s
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.VIEW,
						noun: "inbox_notification",
						source: "inbox",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: s
						}
					})
				},
				m = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: s
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.VIEW,
						noun: "notification",
						source: "in_app_notification",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: s
						}
					})
				},
				f = () => e => ({
					...l.n(e),
					action: d.c.RECEIVE,
					noun: "notification",
					source: "in_app_notification"
				}),
				p = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: s,
						awardId: o
					} = e;
					return e => {
						Object(u.a)({
							...l.n(e),
							action: "receive",
							noun: "inbox_notification",
							source: i.Inbox,
							inbox: {
								id: t,
								isClicked: n,
								isViewed: r
							},
							notification: {
								type: s
							},
							goldPurchase: {
								awardId: o
							}
						})
					}
				},
				O = e => {
					let {
						dnPromptAction: t
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "inbox_banner",
						source: "inbox",
						banner: {
							id: "inbox_dn_banner"
						},
						actionInfo: {
							pageType: "dn_prompt",
							type: t
						}
					})
				},
				I = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: s,
						awardId: o,
						position: i,
						postId: c,
						subredditId: a
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "inbox_notification",
						source: "inbox",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: s
						},
						goldPurchase: {
							awardId: o
						},
						actionInfo: {
							position: i
						},
						subreddit: a ? {
							id: a
						} : null,
						post: c ? {
							id: c
						} : null
					})
				},
				_ = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: s,
						awardId: o,
						position: i,
						postId: c,
						subredditId: a
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "notification",
						source: "in_app_notification",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: s
						},
						goldPurchase: {
							awardId: o
						},
						actionInfo: {
							position: i
						},
						subreddit: a ? {
							id: a
						} : null,
						post: c ? {
							id: c
						} : null
					})
				},
				h = e => {
					let {
						badgeCount: t,
						tab: n
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.VIEW,
						noun: "inbox",
						source: i.Inbox,
						inbox: {
							badgeCount: t,
							tab: n
						}
					})
				},
				x = e => {
					let {
						badgeCount: t,
						tab: n
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.VIEW,
						noun: "mini_inbox",
						source: i.Inbox,
						inbox: {
							badgeCount: t,
							tab: r.Activity
						}
					})
				},
				j = e => {
					let {
						badgeCount: t
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "inbox",
						source: i.Nav,
						inbox: {
							badgeCount: t
						}
					})
				},
				E = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: s,
						awardId: o
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "inbox_notification_overflow",
						source: i.Inbox,
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: s
						},
						goldPurchase: {
							awardId: o
						}
					})
				},
				S = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: s
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.VIEW,
						noun: "inbox_notification_overflow",
						source: i.Inbox,
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: s
						}
					})
				};
			var g;
			! function(e) {
				e.Cats = "cats", e.Memes = "memes", e.Karma = "karma_free_subs", e.PN_perms = "pn_perms", e.Email_perms = "email_perms"
			}(g || (g = {}));
			const T = e => {
					let {
						actionInfoType: t,
						id: n,
						isClicked: r,
						isViewed: s,
						type: o
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "overflow_option",
						source: i.Inbox,
						inbox: {
							id: n,
							isClicked: r,
							isViewed: s
						},
						notification: {
							type: o
						},
						actionInfo: {
							...l.d(e),
							type: t
						}
					})
				},
				C = e => {
					let {
						actionInfoType: t,
						id: n,
						isClicked: r,
						isViewed: s,
						type: o
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.UNDO,
						noun: "overflow_option",
						source: i.Inbox,
						inbox: {
							id: n,
							isClicked: r,
							isViewed: s
						},
						notification: {
							type: o
						},
						actionInfo: {
							...l.d(e),
							type: t
						}
					})
				},
				y = e => {
					let {
						actionInfoType: t
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "empty_state_cta",
						source: i.Inbox,
						actionInfo: {
							...l.d(e),
							type: t
						}
					})
				},
				N = e => t => ({
					...l.n(t),
					action: d.c.CLICK,
					noun: "notification_app_settings",
					source: i.Inbox,
					actionInfo: {
						...l.d(t),
						pageType: e
					}
				}),
				v = () => e => ({
					...l.n(e),
					action: d.c.CLICK,
					noun: "see_all",
					source: i.Inbox,
					actionInfo: {
						...l.d(e),
						pageType: o.MiniInbox
					}
				}),
				k = () => e => ({
					...l.n(e),
					action: d.c.CLICK,
					noun: "messages",
					source: i.Inbox
				}),
				L = e => {
					let {
						isMiniInbox: t
					} = e;
					return e => ({
						...l.n(e),
						action: d.c.CLICK,
						noun: "mark_all_as_read",
						source: i.Inbox,
						actionInfo: t ? {
							...l.d(e),
							pageType: o.MiniInbox
						} : {}
					})
				},
				w = (e, t) => n => ({
					...l.n(n),
					action: d.c.CLICK,
					noun: "policy_banner",
					source: i.Inbox,
					actionInfo: {
						...l.d(n),
						pageType: e,
						type: t
					}
				})
		},
		"./src/reddit/helpers/trackers/postFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "e", (function() {
				return m
			}));
			var r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/reddit/helpers/flair.ts"),
				c = n("./src/reddit/helpers/search/searchImpressionId.ts");
			const a = (e, t) => n => {
					const i = `flair_name:'${t.postFlairName}'`;
					return {
						source: "post",
						action: "click",
						noun: "post_flair",
						...o.n(n),
						actionInfo: o.d(n),
						correlationId: Object(r.c)(r.a.SearchResults),
						post: o.J(n, e),
						search: {
							...o.N(n, t),
							query: i,
							queryId: o.cb(n, s.a.SERP),
							impressionId: c.a.get(s.a.SERP)
						},
						subreddit: o.ib(n)
					}
				},
				d = e => t => ({
					source: "post_flair_widget",
					action: "click",
					noun: "post_flair_search",
					...o.n(t),
					actionInfo: o.d(t),
					correlationId: Object(r.c)(r.a.SearchResults),
					search: o.N(t, e),
					subreddit: o.ib(t)
				}),
				l = e => t => {
					const n = Object(i.g)(e);
					return {
						...o.n(t),
						action: "click",
						noun: "post_flair",
						source: "post_flair_widget",
						subreddit: o.ib(t),
						postFlair: {
							id: e.templateId,
							title: n
						}
					}
				},
				u = () => e => ({
					...o.n(e),
					action: "click",
					noun: "overflow",
					source: "post_flair_widget",
					subreddit: o.ib(e)
				}),
				b = e => t => {
					const n = Object(i.g)(e);
					return {
						...o.n(t),
						action: "click",
						noun: "clear",
						source: "post_flair_widget",
						subreddit: o.ib(t),
						postFlair: {
							id: e.templateId,
							title: n
						}
					}
				},
				m = (e, t) => n => {
					const r = Object(i.g)(e),
						a = o.J(n, t),
						d = `flair_name:'${r}'`;
					return {
						...o.n(n),
						action: "click",
						noun: "post_flair",
						source: "post",
						subreddit: o.ib(n),
						postFlair: {
							id: e.templateId,
							title: r
						},
						post: a,
						search: {
							query: d,
							subredditId: a ? a.subredditId : void 0,
							subredditName: a ? a.subredditName : void 0,
							postFlairName: r,
							originElement: "post_flair",
							queryId: o.cb(n, s.a.SERP),
							impressionId: c.a.get(s.a.SERP),
							originPageType: n.platform.currentPage ? o.u(n.platform.currentPage) : void 0
						},
						feed: o.q(n)
					}
				}
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return C
			})), n.d(t, "f", (function() {
				return N
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "r", (function() {
				return k
			})), n.d(t, "o", (function() {
				return L
			})), n.d(t, "s", (function() {
				return w
			})), n.d(t, "c", (function() {
				return P
			})), n.d(t, "l", (function() {
				return D
			})), n.d(t, "p", (function() {
				return A
			})), n.d(t, "i", (function() {
				return R
			})), n.d(t, "j", (function() {
				return U
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "b", (function() {
				return G
			})), n.d(t, "a", (function() {
				return H
			})), n.d(t, "n", (function() {
				return V
			})), n.d(t, "m", (function() {
				return W
			})), n.d(t, "t", (function() {
				return Y
			})), n.d(t, "x", (function() {
				return $
			})), n.d(t, "e", (function() {
				return z
			})), n.d(t, "d", (function() {
				return J
			})), n.d(t, "v", (function() {
				return ee
			})), n.d(t, "u", (function() {
				return te
			})), n.d(t, "w", (function() {
				return ne
			})), n.d(t, "h", (function() {
				return re
			}));
			var r = n("./node_modules/lodash/pick.js"),
				s = n.n(r),
				o = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makePostDraftPageKey/index.ts"),
				c = n("./src/reddit/constants/parameters.ts"),
				a = n("./src/reddit/constants/tracking.ts"),
				d = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				l = n("./src/reddit/helpers/routeKey/index.ts"),
				u = n("./src/reddit/helpers/trackers/postComposer.ts"),
				b = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				m = n("./src/reddit/models/Comment/index.ts"),
				f = n("./src/reddit/models/Post/index.ts"),
				p = n("./src/reddit/routes/subreddit/index.ts"),
				O = n("./src/reddit/selectors/profile.ts"),
				I = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/lib/makePostCreationPageKey/index.ts"),
				h = n("./src/lib/makeSearchKey/index.ts"),
				x = n("./src/reddit/helpers/correlationIdTracker.ts"),
				j = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				E = n("./src/reddit/helpers/trackers/searchResults.ts"),
				S = n("./src/reddit/selectors/postDraft.ts"),
				g = n("./src/reddit/selectors/telemetry.ts"),
				T = n("./src/telemetry/index.ts");
			const C = (e, t, n, r, a, u) => {
					const {
						route: O
					} = e, {
						name: I
					} = O.meta;
					if (!I) return;
					const x = t.platform.currentPage;
					switch (I) {
						case o.Nb.COMMENTS: {
							const {
								partialCommentId: s,
								partialPostId: o
							} = e.match.params, i = Object(f.w)(o), c = Object(l.a)(e, t, t.posts.models[i]);
							if (!c) return;
							const a = s && Object(m.h)(s),
								{
									sortToUse: u
								} = Object(d.a)(t, i);
							Object(T.a)(P(c, i, a, n, r, u)(t));
							break
						}
						case o.Nb.INDEX:
						case o.Nb.LISTING:
						case o.Nb.MULTIREDDIT:
						case o.Nb.SUBREDDIT: {
							const s = Object(l.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: i,
								queryParams: c,
								path: a
							} = e.match, {
								sort: d = (s.sort ? s.sort : o.W.HOT)
							} = i, u = c.t, b = a === p.a;
							Object(T.a)(N({
								key: s.listingKey,
								sort: d,
								timerType: n,
								timerMillis: r,
								timeSort: u,
								isPredictionsPage: b
							})(t));
							break
						}
						case o.Nb.TOPIC: {
							const s = Object(l.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: i
							} = e.match, c = s.sort ? s.sort : o.X, {
								sort: a = c
							} = i;
							Object(T.a)(N({
								key: s.listingKey,
								sort: a,
								timerType: n,
								timerMillis: r
							})(t));
							break
						}
						case o.Nb.PROFILE_OVERVIEW: {
							const s = Object(l.d)(e, t);
							if (!s) return;
							const {
								params: i,
								queryParams: c
							} = e.match, {
								sort: a = o.Eb
							} = i, d = c.t;
							Object(T.a)(v(s, a, n, r, d)(t));
							break
						}
						case o.Nb.PROFILE_POSTS: {
							const s = Object(l.d)(e, t);
							if (!s) return;
							const {
								queryParams: i
							} = e.match, {
								sort: c = o.Eb,
								t: a = o.Fb
							} = i;
							Object(T.a)(k(s, c, n, r, a)(t));
							break
						}
						case o.Nb.PROFILE_COMMENTS: {
							const s = Object(l.d)(e, t);
							if (!s) return;
							const {
								queryParams: i
							} = e.match, {
								sort: c = o.Eb,
								t: a = o.Fb
							} = i;
							Object(T.a)(L(s, c, n, r, a)(t));
							break
						}
						case o.Nb.PROFILE_PRIVATE: {
							const s = Object(l.d)(e, t);
							if (!s) return;
							Object(T.a)(w(s)(r, n)(t));
							break
						}
						case o.Nb.FOLLOWERS:
							M(t);
							break;
						case o.Nb.PROFILE_MODERATION:
							u && A(t, !0);
							break;
						case o.Nb.SETTINGS: {
							const s = e;
							Object(T.a)(K(n, r)(t)), s.match.params.page === o.dc.Profile && Object(b.l)(t);
							break
						}
						case o.Nb.POST_CREATION:
							if (u && a) {
								const e = Object(_.a)(a);
								Object(T.a)(D(e, n, r)(t))
							}
							break;
						case o.Nb.POST_DRAFT: {
							const {
								draftId: s
							} = e.match.params, o = Object(i.a)(e.match.params);
							if (!o) return;
							B(t, o, s, n, r);
							break
						}
						case o.Nb.SUBREDDIT_WIKI:
							Object(T.a)(Q(n, r)(t));
							break;
						case o.Nb.COINS:
							Object(T.a)(G(n, r)(t)), Object(T.a)(H()(t));
							break;
						case o.Nb.PREMIUM:
							Object(T.a)(V(n, r)(t)), Object(T.a)(W()(t));
							break;
						case o.Nb.APPEAL:
							Object(T.a)(q(n, r)(t));
							break;
						case o.Nb.INBOX_PAGES:
							u && F(t);
							break;
						case o.Nb.MODERATION_PAGES:
							u && R(t, !0, a ? a.subredditName : null, a ? a.profileName : null);
							break;
						case o.Nb.COLLECTION_COMMENTS:
							u && ne(t, !0);
							break;
						case o.Nb.MODQUEUE_PAGES:
							u && U(t, a ? a.subredditName : null, a ? a.profileName : null);
							break;
						case o.Nb.SUBREDDIT_LEADERBOARD:
							u && Object(T.a)(z()(t));
							break;
						case o.Nb.SEARCH_RESULTS:
							if (u) {
								const o = Object(l.e)(e);
								if (!o) return;
								Object(T.a)(ee(o, Object(h.e)(s()(x && x.queryParams || {}, c.t)), n, r, x)(t))
							}
							break;
						case o.Nb.PUBLIC_ACCESS_NETWORK:
							u && Object(T.a)(Y()(t));
							break;
						case o.Nb.GEOTAGGING:
							u && Object(T.a)(J()(t));
							break;
						case o.Nb.SUBREDDIT_CREATION:
							u && Object(T.a)($()(t));
							break;
						case o.Nb.MOD_LISTING:
							u && re(t, !0)
					}
				},
				y = e => ({
					...g.n(e),
					userPreferences: g.rb(e)
				}),
				N = e => {
					let {
						key: t,
						sort: n,
						timerType: r,
						timerMillis: s,
						timeSort: o,
						flairTitle: i,
						isPredictionsPage: c
					} = e;
					return e => {
						const {
							api: a
						} = e.listings.postOrder, d = !a.error[t] && !a.pending[t], l = c ? {
							paneName: "predictions",
							reason: "predictions_tournament"
						} : {};
						return {
							source: "global",
							action: "view",
							noun: "screen",
							...y(e),
							actionInfo: g.d(e, {
								success: d,
								...l
							}),
							customFeed: g.l(e),
							listing: g.y(e, t, {
								sort: n,
								sortTime: o
							}),
							subreddit: g.ib(e),
							timer: g.ob(r, s),
							userSubreddit: g.sb(e),
							adblock: g.e(e),
							postFlair: {
								title: i
							},
							predictions: c ? Object(g.Q)(e) : void 0
						}
					}
				},
				v = (e, t, n, r, s) => o => {
					const i = g.y(o, e);
					i && (i.sort = t, s && (i.sortTime = s));
					const {
						api: c
					} = o.listings.postOrder, a = !c.error[e] && !c.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						...y(o),
						actionInfo: g.d(o, {
							success: a
						}),
						profile: g.S(o),
						snoovatar: g.fb(o),
						subreddit: g.ib(o),
						timer: g.ob(n, r),
						userSubreddit: g.sb(o),
						adblock: g.e(o)
					}
				},
				k = (e, t, n, r, s) => o => {
					const i = g.y(o, e);
					i && (i.sort = t, s && (i.sortTime = s));
					const {
						api: c
					} = o.listings.postOrder, a = !c.error[e] && !c.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						...y(o),
						actionInfo: g.d(o, {
							success: a
						}),
						profile: g.S(o),
						subreddit: g.ib(o),
						timer: g.ob(n, r),
						userSubreddit: g.sb(o),
						adblock: g.e(o)
					}
				},
				L = (e, t, n, r, s) => o => {
					const i = g.V(o, e);
					i && (i.sort = t, s && (i.sortTime = s));
					const {
						api: c
					} = o.profileCommentsPage, a = !c.error[e] && !c.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						...y(o),
						actionInfo: g.d(o, {
							success: a
						}),
						profile: g.S(o),
						subreddit: g.ib(o),
						timer: g.ob(n, r),
						userSubreddit: g.sb(o),
						adblock: g.e(o)
					}
				},
				w = e => (t, n) => r => {
					const s = !r.profilePrivatePage.api.error[e] && !r.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...y(r),
						actionInfo: g.d(r, {
							success: s
						}),
						profile: g.S(r),
						subreddit: g.ib(r),
						timer: g.ob(n, t),
						userSubreddit: g.sb(r),
						adblock: g.e(r)
					}
				},
				P = (e, t, n, r, s, o) => i => {
					const {
						api: c
					} = i.pages.comments, a = !c.error[e] && !c.pending[e], d = {
						source: "global",
						action: "view",
						noun: "screen",
						...y(i),
						actionInfo: g.d(i, {
							success: a
						}),
						post: g.J(i, t),
						profile: g.S(i),
						subreddit: g.ib(i),
						timer: g.ob(r, s),
						userSubreddit: g.sb(i),
						adblock: g.e(i),
						postEvent: g.M(i, {
							postId: t
						}),
						postCollection: g.L(i, {
							postId: t
						}),
						listing: g.y(i, void 0, {
							sort: o
						})
					};
					return n && (d.comment = g.h(i, n)), d
				},
				D = (e, t, n) => r => {
					const s = r.creations.api.page.fetched[e],
						o = r.platform.currentPage ? r.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...y(r),
						actionInfo: g.d(r, {
							success: s
						}),
						post: o ? g.J(r, o) : void 0,
						subreddit: g.ib(r),
						timer: g.ob(t, n),
						userSubreddit: g.sb(r),
						adblock: g.e(r)
					}
				},
				A = (e, t) => {
					Object(T.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...y(e),
						actionInfo: g.d(e, {
							success: t
						})
					})
				},
				R = (e, t, n, r) => {
					Object(T.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...y(e),
						actionInfo: g.d(e, {
							success: t
						}),
						profile: g.T(e, Object(O.n)(e, r)),
						subreddit: g.jb(e, Object(I.G)(e, n)),
						userSubreddit: g.sb(e),
						adblock: g.e(e)
					})
				},
				U = (e, t, n) => {
					Object(T.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...y(e),
						profile: g.T(e, Object(O.n)(e, n)),
						subreddit: g.jb(e, Object(I.G)(e, t)),
						userSubreddit: g.sb(e),
						adblock: g.e(e)
					})
				},
				F = e => {
					Object(T.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...y(e),
						actionInfo: g.d(e)
					})
				},
				M = e => {
					Object(T.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...y(e),
						actionInfo: g.d(e)
					})
				},
				B = (e, t, n, r, s) => {
					const o = e.creations.api.page.pending[t],
						i = !e.creations.api.page.error[t] && !o && !!n,
						c = Object(S.h)(e, n);
					Object(T.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...y(e),
						actionInfo: g.d(e, {
							success: i
						}),
						subreddit: g.ib(e),
						timer: g.ob(r, s),
						userSubreddit: g.sb(e),
						adblock: g.e(e),
						...c ? Object(u.r)(e, c) : {}
					})
				},
				G = (e, t) => n => ({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(x.c)(x.a.GoldPayment),
					...y(n),
					timer: g.ob(e, t),
					adblock: g.e(n)
				}),
				H = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...y(e)
				}),
				V = (e, t) => n => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(x.c)(x.a.GoldPayment),
					...y(n),
					timer: g.ob(e, t),
					adblock: g.e(n)
				}),
				W = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...y(e)
				}),
				q = (e, t) => n => ({
					source: "appeal",
					action: "view",
					noun: "page",
					...y(n),
					timer: g.ob(e, t)
				}),
				K = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					...y(n),
					timer: g.ob(e, t)
				}),
				Y = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: g.ib(e),
					...y(e)
				}),
				$ = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...y(e)
				}),
				z = () => e => ({
					action: "view",
					source: "global",
					noun: "screen",
					...y(e)
				}),
				Q = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					...y(n),
					customFeed: g.l(n),
					subreddit: g.ib(n),
					timer: g.ob(e, t),
					userSubreddit: g.sb(n),
					adblock: g.e(n)
				}),
				J = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...y(e)
				}),
				X = {
					source: "global",
					action: a.c.VIEW,
					noun: "screen"
				},
				Z = e => !!e && {
					correlationId: Object(x.c)(x.a.SearchResults)
				},
				ee = (e, t, n, r, s, i) => c => {
					var a, d;
					let l = !0;
					if (t.type.indexOf(o.cc.Posts) > -1) {
						const {
							api: t
						} = c.listings.listingOrder;
						l = l && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(o.cc.Subreddits) > -1 || t.type.indexOf(o.cc.Users) > -1) {
						const {
							api: t
						} = c.listings.postOrder;
						l = l && !t.error[e] && !t.pending[e]
					}
					const u = g.G(c, s);
					return {
						...E.g(c, t),
						...X,
						...g.n(c),
						actionInfo: g.d(c, {
							success: l,
							paneName: u
						}),
						timer: g.ob(n, r),
						search: {
							...g.bb(c, t, j.a.SERP, !0, s || void 0),
							sort: null !== (a = t.sort) && void 0 !== a ? a : o.Qb,
							range: null !== (d = t.t) && void 0 !== d ? d : o.Rb
						},
						...Z(i),
						userPreferences: g.db(c)
					}
				},
				te = (e, t, n) => r => ({
					...g.n(r),
					...X,
					actionInfo: {
						...g.d(r),
						pageType: "search_dropdown"
					},
					search: {
						...g.bb(r, e, j.a.Typeahead, !0, t || void 0)
					},
					...Z(n),
					userPreferences: g.db(r)
				}),
				ne = (e, t) => {
					Object(T.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...y(e),
						actionInfo: g.d(e, {
							success: t
						})
					})
				},
				re = (e, t) => {
					Object(T.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...y(e),
						actionInfo: g.d(e, {
							success: t
						})
					})
				}
		},
		"./src/reddit/helpers/trackers/socialLinks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => {
					let {
						socialLinkType: t,
						outboundUrl: n,
						name: r,
						position: s,
						isNew: o,
						currentList: i
					} = e;
					return {
						socialLink: {
							type: t.toLowerCase(),
							url: n,
							name: r,
							position: s,
							isNew: o,
							currentList: i
						}
					}
				},
				i = e => t => ({
					...Object(s.n)(t),
					action: r.c.CLICK,
					noun: "add_social_link",
					source: e
				}),
				c = e => t => ({
					...Object(s.n)(t),
					action: r.c.CLICK,
					noun: "social_link",
					source: "add_social_link",
					...o({
						socialLinkType: e
					})
				}),
				a = e => t => ({
					...Object(s.n)(t),
					action: r.c.CLICK,
					noun: "save",
					source: "add_social_link",
					...o(e)
				}),
				d = e => t => ({
					...Object(s.n)(t),
					action: r.c.CLICK,
					noun: "edit_social_link",
					source: "profile_settings",
					...o(e)
				}),
				l = e => t => ({
					...Object(s.n)(t),
					action: r.c.CLICK,
					noun: "delete_social_link",
					source: "profile_settings",
					...o(e)
				}),
				u = e => t => ({
					...Object(s.n)(t),
					action: r.c.CLICK,
					noun: "social_link",
					source: "profile",
					profile: Object(s.S)(t),
					...o(e)
				})
		},
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return b
			}));
			var r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					source: e,
					noun: "create_community_button",
					action: "click",
					...s.n(t),
					actionInfo: s.d(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(r.d)(r.a.SubredditCreation, !0)
				}),
				i = (e, t, n) => o => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...s.n(o),
					actionInfo: s.d(o, {
						settingValue: e
					}),
					subreddit: {
						id: n,
						name: t.name,
						publicDescription: t.publicDescription,
						nsfw: t.over18,
						accessType: t.type,
						topicTagContents: t.allTags,
						topicTagPrimaryId: t.primaryTagId
					},
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				c = () => e => ({
					source: "community_form",
					noun: "cancel",
					action: "click",
					...s.n(e),
					actionInfo: s.d(e),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				a = (e, t) => n => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...s.n(n),
					actionInfo: s.d(n, {
						reason: e,
						settingValue: t
					}),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				d = () => e => ({
					source: "user_dropdown",
					noun: "create_community",
					action: "click",
					...s.n(e),
					actionInfo: s.d(e)
				}),
				l = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "view",
					...s.n(e),
					actionInfo: s.d(e)
				}),
				u = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "click",
					...s.n(e),
					actionInfo: s.d(e)
				}),
				b = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "dismiss",
					...s.n(e),
					actionInfo: s.d(e)
				})
		},
		"./src/reddit/hooks/useClickSourceData.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/helpers/clickSourceData/index.ts");

			function i() {
				const e = Object(s.e)(e => e.platform.currentPage),
					[t, n] = Object(r.useState)({});
				return Object(r.useEffect)(() => {
					n(Object(o.b)(e))
				}, [e]), t
			}
		},
		"./src/reddit/hooks/useIntersectionObserver.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js");
			t.a = function(e, t, n) {
				Object(r.useEffect)(() => {
					const r = e && e.current;
					if (!r || "undefined" == typeof IntersectionObserver) return;
					const s = new IntersectionObserver(t, n);
					return s.observe(r), () => {
						s.unobserve(r)
					}
				}, [e, t, n])
			}
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/meta.ts");
			const c = "undefined" == typeof document ? function() {
				const e = Object(o.e)(i.j) || s.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || s.DEFAULT_LOCALE;
				return Object(r.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			};
			t.a = c;
			const a = () => {
				const e = c(),
					t = Object(o.e)(i.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
		},
		"./src/reddit/hooks/useOutboundClickTracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var r = n("./src/reddit/components/TrackingHelper/index.tsx");
			const s = /^https?:\/\/([\w\.\-]+\.)?(reddit(media|static)?\.com|redd\.it)(\/|$)/;
			var o = n("./src/reddit/helpers/trackers/socialLinks.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const c = (e, t, n, r, s) => c => {
				const a = {
					noun: "outbound_link",
					action: "click",
					source: "link",
					...Object(i.n)(c),
					actionInfo: Object(i.d)(c),
					geo: Object(i.s)(c),
					screen: Object(i.ab)(c),
					subreddit: Object(i.ib)(c),
					outbound: Object(i.F)(c, e, t, r, n)
				};
				return n && (a.comment = Object(i.h)(c, n)), r && (a.post = Object(i.J)(c, r)), s && (a.socialLink = Object(o.g)({
					socialLinkType: s
				}).socialLink), a
			};
			var a = n("./src/lib/serviceWorker/index.ts"),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/telemetry/helpers/getSerializedThriftJSON.ts"),
				u = n("./src/telemetry/helpers/getSignatureHeader.ts"),
				b = n("./src/telemetry/models/Event.ts");
			const m = () => {
				const e = Object(d.f)();
				return t => {
					const n = t(e.getState()),
						r = b.g(n),
						s = Object(l.a)(r),
						o = Object(u.b)(s);
					Object(a.b)("sendV2EventsData", {
						data: s,
						headers: o
					})
				}
			};

			function f() {
				const e = Object(r.b)(),
					t = m();
				return (n, r, o, i, a) => {
					var d, l;
					if (r && function(e) {
							return !e.startsWith("/") && null == e.match(s)
						}(n)) {
						const s = c(n, r, o, i, a);
						(null === (l = null === (d = null === window || void 0 === window ? void 0 : window.navigator) || void 0 === d ? void 0 : d.serviceWorker) || void 0 === l ? void 0 : l.controller) ? t(s): e(s)
					}
				}
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = r.gb
		},
		"./src/reddit/hooks/usePostContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/lib/sentry/index.ts"),
				s = n("./node_modules/react/index.js"),
				o = n("./src/reddit/contexts/Post/index.tsx");

			function i() {
				const e = Object(s.useContext)(o.c);
				return e || r.c.captureMessage("No post context provided"), e
			}
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = r.b
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => s.a.createElement("i", {
				className: `${Object(o.b)("external_link",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const a = e => {
				let {
					className: t,
					isFilled: n,
					name: r,
					...a
				} = e;
				return s.a.createElement("i", c({
					className: Object(o.a)(t, Object(i.b)(r, n))
				}, a))
			};
			a.displayName = "Icon";
			const d = (e, t) => n => s.a.createElement(a, c({
				name: e
			}, t, n, {
				isFilled: (null == t ? void 0 : t.isFilled) || (null == n ? void 0 : n.isFilled),
				className: Object(o.a)(null == t ? void 0 : t.className, null == n ? void 0 : n.className)
			}));
			t.a = a
		},
		"./src/reddit/icons/svgs/PresenceCircle/index.m.less": function(e, t, n) {
			e.exports = {
				defaultInactiveState: "_1g3Xfh9mljLHWv24M9A3Rw",
				outline: "_3SlBAJb2MbUHwgBZFH8eL7",
				highlighted: "_1-JQy00VxG8hpTxxdxV32y"
			}
		},
		"./src/reddit/icons/svgs/PresenceCircle/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/PresenceCircle/index.m.less"),
				c = n.n(i);
			t.a = Object(r.forwardRef)((e, t) => {
				let {
					className: n,
					isHighlighted: r,
					outlineClassName: i
				} = e;
				return s.a.createElement("svg", {
					className: Object(o.a)(c.a.defaultInactiveState, n),
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg",
					width: "12",
					height: "12",
					ref: t
				}, s.a.createElement("circle", {
					cx: "6",
					cy: "6",
					r: "4"
				}), s.a.createElement("path", {
					className: Object(o.a)(c.a.outline, i, {
						[c.a.highlighted]: r
					}),
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM6 10C8.20914 10 10 8.20914 10 6C10 3.79086 8.20914 2 6 2C3.79086 2 2 3.79086 2 6C2 8.20914 3.79086 10 6 10Z"
				}))
			})
		},
		"./src/reddit/icons/svgs/SnooSilhouette/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 320 320",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "m124.91 237.79c-53.47 32.9-28.3 109.77-9.81 76.9"
			}), s.a.createElement("path", {
				d: "m115.13 314.7a9.86 9.86 0 0 1 -1.44 3l-.85 1.22c-.34.4-.68.85-1.09 1.28a11.46 11.46 0 0 1 -3 2.34 7.26 7.26 0 0 1 -4.16.82 8.13 8.13 0 0 1 -3.86-1.63 14 14 0 0 1 -2.64-2.62 26.58 26.58 0 0 1 -1.7-2.45c-3.11-5.09-4.59-11.37-5.16-17.65a66.18 66.18 0 0 1 6.12-33.55 69 69 0 0 1 3.7-6.66 68.22 68.22 0 0 1 4.3-5.93 62.51 62.51 0 0 1 9.65-9.4 61.54 61.54 0 0 1 9.62-6.13c-2.15 2.3-5.35 5.36-8.11 8.41s-5.19 6-6.61 7.42a56.91 56.91 0 0 0 -7.33 9.28 58.25 58.25 0 0 0 -5 10 60.67 60.67 0 0 0 -4 20 53 53 0 0 0 2.33 17.65 28.76 28.76 0 0 0 3.32 7.14c1.39 2 3.15 3.76 5.17 4.28a5.79 5.79 0 0 0 3.36-.19 11.09 11.09 0 0 0 3.45-2.14 29.87 29.87 0 0 0 3.93-4.49z"
			}), s.a.createElement("path", {
				d: "m194.69 240.89c45.74 25.85 23.37 107.54 4.1 73.8"
			}), s.a.createElement("path", {
				d: "m198.81 314.67a17 17 0 0 1 2 2.41 16.1 16.1 0 0 0 4.54 4.16 6.1 6.1 0 0 0 3.23.79 5.88 5.88 0 0 0 3-1.15 12.67 12.67 0 0 0 3.58-4.37c2.39-4.65 3.64-10.3 4.24-16a71.58 71.58 0 0 0 -.3-17 66.16 66.16 0 0 0 -9-25.89 54.68 54.68 0 0 0 -15.7-16.28 30.16 30.16 0 0 1 10.19 5 29.29 29.29 0 0 1 7.11 7.13 68.35 68.35 0 0 1 8.62 21.25 81.56 81.56 0 0 1 2 19.91 58.88 58.88 0 0 1 -2.83 17.4 27.36 27.36 0 0 1 -3.67 7.28 13.8 13.8 0 0 1 -2.85 2.86 7.81 7.81 0 0 1 -3.8 1.51 6.82 6.82 0 0 1 -4.21-1 11.92 11.92 0 0 1 -3.25-3 24.69 24.69 0 0 1 -2.9-5.01z"
			}), s.a.createElement("path", {
				d: "m125.46 236.86c32.07-45.32 77.78-13.73 79.92 56.7-.5 46.56-23 35.27-51.14 35.27s-42.05 9.17-44.66-24.83c-1.5-19.46-.66-20.87 3.28-33"
			}), s.a.createElement("path", {
				d: "m112.89 271a23.38 23.38 0 0 1 -.68 2.76c-.41 1.47-1 3.44-1.61 5.81a38.08 38.08 0 0 0 -1.14 8.22c-.12 3.08.07 6.43.29 9.9.51 6.92 1 14.41 3.16 20.71a16.43 16.43 0 0 0 4.9 7.54 13.56 13.56 0 0 0 6.7 2.65 56.37 56.37 0 0 0 11.6-.1c4-.32 8-.71 12.18-.92a124.9 124.9 0 0 1 12.55-.09c4.2.16 8.4.49 12.56.7 2.08.1 4.15.18 6.2.15a40.17 40.17 0 0 0 6.05-.44 22.51 22.51 0 0 0 5.6-1.55 14.89 14.89 0 0 0 4.6-3.17 17.38 17.38 0 0 0 3.27-4.6l.33-.64.29-.67.56-1.34c.3-.93.65-1.84.9-2.79a62.06 62.06 0 0 0 1.9-11.66 108.3 108.3 0 0 0 -.63-20.6 130.55 130.55 0 0 0 -3.86-20 94.18 94.18 0 0 0 -7.15-18.4 59.18 59.18 0 0 0 -11-15.23c-4.38-4.24-9.48-7.58-15-9a27.57 27.57 0 0 0 -16.33.49 39.21 39.21 0 0 0 -13.41 7.9 74.8 74.8 0 0 0 -9.76 10.58 61.55 61.55 0 0 1 8.78-11.74 39.25 39.25 0 0 1 14.45-9.6 31.64 31.64 0 0 1 8.59-1.83h2.12a13 13 0 0 1 2.08.09 28.29 28.29 0 0 1 3.93.63 31.93 31.93 0 0 1 11.28 5.06 50.46 50.46 0 0 1 12 12.46 74.93 74.93 0 0 1 7.89 14.59 117.86 117.86 0 0 1 7.81 30.35c.15 1.25.31 2.5.46 3.75s.22 2.49.32 3.73c.26 2.48.3 5 .43 7.41a34.56 34.56 0 0 1 0 3.67c0 1.22-.07 2.44-.16 3.64s-.14 2.41-.28 3.6-.23 2.38-.43 3.56-.34 2.36-.6 3.52-.51 2.32-.82 3.46a16.49 16.49 0 0 1 -.52 1.69c-.19.56-.36 1.12-.57 1.68a32.08 32.08 0 0 1 -1.48 3.21 19.92 19.92 0 0 1 -4.28 5.58 18.29 18.29 0 0 1 -6 3.5 37.52 37.52 0 0 1 -13.18 1.66c-4.33-.07-8.53-.42-12.65-.67s-8.17-.43-12.14-.36-7.88.29-11.73.58-7.66.61-11.47.63a34.51 34.51 0 0 1 -5.73-.4 17.16 17.16 0 0 1 -5.52-1.82 13.8 13.8 0 0 1 -4.34-3.84 19.11 19.11 0 0 1 -2.64-4.9 44.16 44.16 0 0 1 -2.39-10.24c-.44-3.22-.63-7-.81-11a93.65 93.65 0 0 1 .09-12 37.54 37.54 0 0 1 .92-5.5c.42-1.71.94-3.25 1.4-4.62.96-2.66 1.74-4.74 2.12-5.74z"
			}), s.a.createElement("path", {
				d: "m229 74.81c-1 .47-5.78-2.28-11.24-5.44s-11.7-6.6-15.42-7.94c-3.26-1.22-6.62-2.41-10-3.36a43 43 0 0 0 -4.93-1.07 13.89 13.89 0 0 0 -4.19-.08 3.6 3.6 0 0 0 -1.2.4c-.13.08-.17.17-.27.22s-.12.11-.14.24l-1 1.75c-.42.78-.91 1.53-1.29 2.34-.8 1.58-1.62 3.14-2.3 4.75s-1.34 3.2-2 4.78c-4.19 11.17-6.17 23.06-7.52 34.18s-2.05 21.46-3.05 29.85a36 36 0 0 1 -3.83-6.41 58 58 0 0 1 -2.89-7.72c-1.5-5.24-2.06-10.33-1.53-13a266.73 266.73 0 0 1 7.37-29.3 114.2 114.2 0 0 1 10.81-24.11l.39-.67.2-.33.09-.17.16-.2a8.58 8.58 0 0 1 1.33-1.56l.78-.69.86-.53a9.4 9.4 0 0 1 1.8-.83 15.64 15.64 0 0 1 6.86-.52 44.74 44.74 0 0 1 11.26 3.14 87 87 0 0 1 17.63 9.78c4.93 3.27 11.92 10.94 13.26 12.5z"
			}), s.a.createElement("path", {
				d: "m105.63 128c-43.28-20.15-74.18 36.54-30.75 61.74"
			}), s.a.createElement("path", {
				d: "m74.86 189.75c-.5 0-4.4-2-8.31-5.22-.94-.85-2-1.65-2.88-2.59s-1.82-1.86-2.61-2.82-1.51-1.9-2.15-2.77-1.13-1.7-1.57-2.38a32.77 32.77 0 0 1 -5-17.32 36.58 36.58 0 0 1 1.3-9.37c.22-.76.5-1.49.74-2.24l.39-1.1.47-1.07c.33-.7.62-1.42 1-2.11s.76-1.33 1.13-2a34 34 0 0 1 24.86-16.35 36.14 36.14 0 0 1 13.32.9 42.71 42.71 0 0 1 10.39 4.17c-3.08-.41-7.27-1.42-11.25-1.59a81.76 81.76 0 0 0 -9.48-.06 29.42 29.42 0 0 0 -11 2.08 30.48 30.48 0 0 0 -9.21 5.75 31.36 31.36 0 0 0 -8.27 34 38.69 38.69 0 0 0 7.82 12.76 66.35 66.35 0 0 0 5.7 5.64 36 36 0 0 0 2.84 2.34z"
			}), s.a.createElement("path", {
				d: "m254.61 176.52c30.45-26.89-2.76-71.55-39.71-54.67"
			}), s.a.createElement("path", {
				d: "m214.89 121.83a9.6 9.6 0 0 1 2.48-1.41 20.3 20.3 0 0 1 2.51-1l1.47-.51c.5-.18 1.05-.27 1.59-.42a28.32 28.32 0 0 1 3.37-.69 28.71 28.71 0 0 1 3.38-.39 46.61 46.61 0 0 1 5.63 0 34.21 34.21 0 0 1 15.32 4.6l1.79 1.09c.59.37 1.13.81 1.7 1.22a35.6 35.6 0 0 1 8.53 8.92 32.62 32.62 0 0 1 5.34 12.84 30.43 30.43 0 0 1 -.56 13.24 31.13 31.13 0 0 1 -5.33 10.68 36.88 36.88 0 0 1 -7.12 7c1.37-2.44 3.58-5.54 5.05-8.73.43-.76.7-1.59 1-2.31.16-.38.35-.73.49-1.09l.38-1c.24-.68.53-1.28.72-1.84a13.79 13.79 0 0 1 .52-1.42 26.43 26.43 0 0 0 .49-19 31.61 31.61 0 0 0 -4.13-8 35.33 35.33 0 0 0 -5.79-6.19c-.52-.45-1.08-.83-1.62-1.24a15 15 0 0 0 -1.64-1.14l-1.68-1-1.72-.88-.85-.44c-.28-.13-.58-.24-.87-.36l-1.73-.71c-.58-.21-1.17-.37-1.74-.56a17.9 17.9 0 0 0 -1.73-.5 40.08 40.08 0 0 0 -13.23-.93c-.49.06-1 .1-1.6.14l-1.76.27c-.6.09-1.23.15-1.84.26l-1.81.39c-.59.13-1.17.22-1.7.37l-1.46.41z"
			}), s.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z"
			}), s.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z",
				fill: "none"
			}), s.a.createElement("path", {
				d: "m159.25 111.2a100.82 100.82 0 0 1 14.86.32 130.39 130.39 0 0 1 30.18 6.06 97.07 97.07 0 0 1 16.43 7.17 78.93 78.93 0 0 1 14.49 10.25 63.78 63.78 0 0 1 16.79 23.82 67.61 67.61 0 0 1 4.45 19.57c.13 1.7.15 3.4.22 5.11v3.89l-.11 1.3-.22 2.61-.42 2.6a23.2 23.2 0 0 1 -.54 2.58c-.22.85-.37 1.72-.67 2.56a49.79 49.79 0 0 1 -4.15 9.79 56.7 56.7 0 0 1 -6.2 8.74 68 68 0 0 1 -7.75 7.43 78.42 78.42 0 0 1 -8.81 6.14c-12.32 7.38-26.19 11.74-40.07 14.24a168.29 168.29 0 0 1 -41.54 2.05 148 148 0 0 1 -34.89-6.69c-11.22-3.67-22-9-31-16.58a56.52 56.52 0 0 1 -11.6-13.16 48.93 48.93 0 0 1 -6.51-16.08 50.29 50.29 0 0 1 -.46-17 66.24 66.24 0 0 1 4.18-16 70.76 70.76 0 0 1 18.09-25.69 90.75 90.75 0 0 1 24.8-15.93 101.47 101.47 0 0 1 13.06-4.78 112.2 112.2 0 0 1 12.93-3c2.12-.41 4.24-.65 6.32-1s4.15-.47 6.2-.57c4.08-.33 8.06-.33 11.91-.29a142.44 142.44 0 0 0 -24.22 3.34 117.79 117.79 0 0 0 -26.52 9.42 92.75 92.75 0 0 0 -21.58 14.9 77.13 77.13 0 0 0 -12.25 14.6 62.07 62.07 0 0 0 -9.53 25.39 45.71 45.71 0 0 0 3.46 25.86 53.67 53.67 0 0 0 16.28 19.83 87.52 87.52 0 0 0 22.14 12.14 129.68 129.68 0 0 0 23.75 6.56 160.17 160.17 0 0 0 23.78 2.47 157.94 157.94 0 0 0 45.17-5.1 113.68 113.68 0 0 0 20.3-7.54 86.22 86.22 0 0 0 9.16-5.19 73.68 73.68 0 0 0 8.22-6.24 52.36 52.36 0 0 0 12.26-15.71l.56-1.09.48-1.13c.3-.76.64-1.5.92-2.26a44.84 44.84 0 0 0 1.41-4.63 46.94 46.94 0 0 0 1.37-9.46c0-1.59.08-3.16 0-4.75s-.07-3.17-.26-4.72l-.21-2.34c-.09-.77-.23-1.54-.34-2.3s-.22-1.54-.37-2.3l-.49-2.25a58.73 58.73 0 0 0 -6.56-16.8 63.59 63.59 0 0 0 -10.77-13.72 74.79 74.79 0 0 0 -13.46-10.24 100.84 100.84 0 0 0 -16.3-7.81 122.86 122.86 0 0 0 -19-5.41 160 160 0 0 0 -27.37-2.98z"
			}), s.a.createElement("circle", {
				cx: "238.47",
				cy: "80.13",
				r: "22.93"
			}), s.a.createElement("path", {
				d: "m261.37 80.13a5.12 5.12 0 0 1 -.27-1.29c-.06-.34-.08-.75-.17-1.2s-.19-1-.3-1.5a23.88 23.88 0 0 0 -3.12-7.61 22.56 22.56 0 0 0 -6.59-6.71 20 20 0 0 0 -7.06-2.93 22.12 22.12 0 0 0 -19.67 5.49 21.36 21.36 0 0 0 -5.7 9 20.88 20.88 0 0 0 -.7 10.29 21.16 21.16 0 0 0 9.47 14.18 21.55 21.55 0 0 0 16.06 2.92 21.77 21.77 0 0 0 12.8-8.08 23.8 23.8 0 0 0 3.39-6.16 26 26 0 0 0 1.32-6.35 19.06 19.06 0 0 1 .12 6.81 21.83 21.83 0 0 1 -8.21 13.51 18.67 18.67 0 0 1 -5.13 2.82 24.34 24.34 0 0 1 -8.2 1.31 24.84 24.84 0 0 1 -7.83-1.26 25.86 25.86 0 0 1 -6.77-3.5 25 25 0 0 1 -5.2-5.16 23.4 23.4 0 0 1 -3.35-6.21 25 25 0 0 1 -1-3.32c-.13-.56-.18-1.12-.28-1.68l-.12-.84c0-.28 0-.56-.05-.84 0-.56 0-1.12-.07-1.68s.05-1.11.08-1.66a11.26 11.26 0 0 1 .17-1.64c.09-.54.15-1.09.26-1.62a25.58 25.58 0 0 1 2.15-6 24.56 24.56 0 0 1 5.71-7.24c.37-.34.79-.62 1.18-.93a11.19 11.19 0 0 1 1.21-.87 23.57 23.57 0 0 1 21.4-2.45 23 23 0 0 1 8.39 5.48 22 22 0 0 1 6.08 14.14c.11 1.26 0 2.29 0 2.78z"
			})))
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			}));
			var r, s, o, i, c = n("./src/reddit/models/FeedElement/index.ts");

			function a(e) {
				return e.__typename === c.a.InboxNotificationCollection
			}! function(e) {
				e.AwardReceived = "AWARD_RECEIVED", e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.ChatRequest = "CHAT_REQUEST", e.ChatAcceptInvite = "CHAT_ACCEPT_INVITE", e.CommentFollow = "COMMENT_FOLLOW", e.CommentReply = "COMMENT_REPLY", e.HFNSubredditInterestingPost = "SUBREDDIT_UPDATES_INTERESTING_POST", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.ModeratedSrViralCommentPost = "MODERATED_SR_VIRAL_COMMENT_POST", e.OneOff = "ONE_OFF", e.PostFollow = "POST_FOLLOW", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.RedditLore = "REDDIT_LORE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.TalkLive = "TALK_LIVE", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER"
			}(r || (r = {})),
			function(e) {
				e.Award = "AWARD", e.Bell = "BELL", e.Chat = "CHAT", e.Comment = "COMMENT", e.Heart = "HEART", e.Live = "LIVE", e.Lore = "LORE", e.NotifyAll = "NOTIFY_ALL", e.Redditor = "REDDITOR", e.Reply = "REPLY", e.SortLive = "SORT_LIVE", e.SortRising = "SORT_RISING", e.SortTop = "SORT_TOP", e.Trophy = "TROPHY", e.Upvote = "UPVOTE"
			}(s || (s = {})),
			function(e) {
				e.CopyrightTakedown = "COPYRIGHT_TAKEDOWN", e.ContentTakedown = " CONTENT_TAKEDOWN", e.Author = "AUTHOR", e.Moderator = "MODERATOR", e.CommunityOps = "COMMUNITY_OPS", e.AntiEvilOps = "ANTI_EVIL_OPS", e.Reddit = "REDDIT", e.Deleted = "DELETED", e.AutomodFiltered = "AUTOMOD_FILTERED"
			}(o || (o = {})),
			function(e) {
				e.InboxNotification = "InboxNotification", e.InboxNotificationContext = "InboxNotificationContext", e.NotificationIcon = "NotificationIcon", e.AwardReceivedInboxNotificationContext = "AwardReceivedInboxNotificationContext", e.BasicInboxNotificationContext = "BasicInboxNotificationContext", e.CommentInboxNotificationContext = "CommentInboxNotificationContext", e.PostInboxNotificationContext = "PostInboxNotificationContext", e.PostSubredditInboxNotificationContext = "PostSubredditInboxNotificationContext", e.SubredditInboxNotificationContext = "SubredditInboxNotificationContext"
			}(i || (i = {}))
		},
		"./src/reddit/models/NotificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.Email = "EMAIL", e.Push = "PUSH", e.CommunityAlerts = "COMMUNITY_ALERTS", e.ModCommunityAlerts = "MOD_COMMUNITY_ALERTS"
				}(r || (r = {}))
		},
		"./src/reddit/selectors/experiments/hotPotato.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return f
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				c = n("./src/reddit/helpers/matchRedditUrls/index.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const l = () => !0,
				u = Object(r.a)(d.X, d.O, (e, t) => !(e || t)),
				b = e => {
					if (!u(e)) return;
					const t = Object(i.c)(e, {
						experimentEligibilitySelector: l,
						experimentName: o.ce,
						expEventOverride: !1
					});
					return null == t ? void 0 : t.toLocaleLowerCase()
				},
				m = e => {
					var t;
					const n = b(e);
					if (!n) return !1;
					let r = Object(a.r)(e),
						o = Object(a.d)(e);
					if ("undefined" != typeof window && !o) {
						const e = Object(c.a)("subreddit", window.location.href);
						(o = null === (t = null == e ? void 0 : e.components) || void 0 === t ? void 0 : t.subredditName) && (r = s.Nb.SUBREDDIT)
					}
					if (o && n) {
						const e = (null == o ? void 0 : o.toLocaleLowerCase()) === n;
						return r === s.Nb.SUBREDDIT && e
					}
					return !1
				},
				f = e => !!b(e) && Object(i.c)(e, {
					experimentEligibilitySelector: u,
					experimentName: o.de,
					expEventOverride: !1
				}) !== o.ee.Readonly
		},
		"./src/reddit/selectors/experiments/newCommunityProgressV3.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return f
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return O
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/constants/posts.ts"),
				c = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				d = n("./src/reddit/selectors/experiments/utils.ts"),
				l = n("./src/reddit/selectors/moderatorPermissions.ts"),
				u = n("./src/reddit/selectors/platform.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/selectors/user.ts");
			const f = e => e.subreddits.progressModule,
				p = e => {
					const t = Object(u.c)(e);
					if (!t) return;
					if (!Object(l.n)(e, {
							subredditId: t
						})) return;
					if (Object(m.N)(e)) return O(e);
					const n = Object(b.J)(e, {
						identifier: {
							id: t,
							type: i.a.SUBREDDIT
						}
					});
					if (!n || !n.created) return;
					const r = n.created;
					return r ? r * s.Sb < 1639443600180 ? void 0 : O(e) : void 0
				},
				O = Object(r.a)(e => Object(c.c)(e, {
					experimentName: o.Ce,
					experimentEligibilitySelector: a.e
				}), d.a)
		},
		"./src/reddit/selectors/experiments/profileAvatarChangeFix.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(s.a)(r.v)
		},
		"./src/reddit/selectors/notificationPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "g", (function() {
				return o
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			}));
			const r = e => e.user.notificationPrefs.api.getPreferences.loaded,
				s = e => e.user.notificationPrefs.api.getPreferences.pending,
				o = e => e.user.notificationPrefs.api.setPreferences.pending,
				i = e => e.user.notificationPrefs.preferences,
				c = e => e.user.notificationPrefs.isNotificationPromptVisible,
				a = (e, t) => {
					var n, r;
					const s = (e => e.user.notificationPrefs.pushSettingsLayout)(e),
						o = null === (n = null == s ? void 0 : s.rows) || void 0 === n ? void 0 : n.byId;
					return o && (null === (r = o[t]) || void 0 === r ? void 0 : r.isEnabled)
				},
				d = (e, t) => !t.some(t => a(e, t))
		},
		"./src/reddit/selectors/notificationsInbox.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "i", (function() {
				return m
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "h", (function() {
				return p
			}));
			var r = n("./src/lib/notifications/constants.ts"),
				s = n("./src/reddit/actions/notifications/utils.ts"),
				o = n("./node_modules/reselect/es/index.js");
			const i = e => e.notificationsInbox && e.notificationsInbox.api && e.notificationsInbox.api.pending,
				c = e => e.notificationsInbox && e.notificationsInbox.pageInfo,
				a = Object(o.a)(c, e => !(!e || !e.hasNextPage)),
				d = Object(o.a)(c, e => e && e.endCursor),
				l = e => e.notificationsInbox && e.notificationsInbox.notifications,
				u = Object(o.a)(l, e => e.slice(0, 5)),
				b = e => e.notificationsInbox && e.notificationsInbox.earlierDividerIndex,
				m = Object(o.a)(l, b, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(0, n)
					}
					return e
				}),
				f = Object(o.a)(l, b, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(n)
					}
					return null
				}),
				p = Object(o.a)(s.a, e => e === r.c.NotificationsSupported)
		},
		"./src/reddit/selectors/trending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const r = e => Object.keys(e.trending.models).reduce((t, n) => [...t, ...e.trending.models[n]], []),
				s = (e, t) => e.trending.models[t] || []
		},
		"./src/redditGQL/operations/BlockAwarder.json": function(e) {
			e.exports = JSON.parse('{"id":"9769ffbb7031"}')
		},
		"./src/redditGQL/operations/DeleteInboxNotifications.json": function(e) {
			e.exports = JSON.parse('{"id":"ce2deb9deef7"}')
		},
		"./src/redditGQL/operations/NotificationInboxFeed.json": function(e) {
			e.exports = JSON.parse('{"id":"36e10bfb5d5e"}')
		},
		"./src/redditGQL/operations/NotificationInboxFeedSlimmed.json": function(e) {
			e.exports = JSON.parse('{"id":"916e9e9be5e0"}')
		},
		"./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json": function(e) {
			e.exports = JSON.parse('{"id":"d03522f8a8d4"}')
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"13af47cf5fb3"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit.20de87db84212cd9b20d.js.map