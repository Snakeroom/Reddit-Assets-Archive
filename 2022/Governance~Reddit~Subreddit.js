// https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit.90b2392b126a47c44476.js
// Retrieved at 7/28/2022, 2:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~Reddit~Subreddit"], {
		"./src/lib/CSSVariableProvider/withTheme.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/CSSVariableProvider/index.tsx");

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
				const t = t => o.a.createElement(s.b.Consumer, null, n => o.a.createElement(e, i({
					theme: n
				}, t)));
				return t.displayName = `WithTheme(${e.displayName||e.name})`, t
			}
		},
		"./src/realtime/GQLSubscription/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const s = Object(r.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(o.a)(() => Promise.all([n.e(2), n.e("vendors~ChatPost~RealtimeGQLSubscriptionAsync"), n.e("RealtimeGQLSubscriptionAsync")]).then(n.bind(null, "./src/realtime/GQLSubscription/index.tsx"))).then(e => e.default)
			});
			t.a = s
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const o = "EMBEDS__UNLOADABLE",
				s = "EMBEDS__LOADABLE",
				i = Object(r.a)(o),
				c = Object(r.a)(s)
		},
		"./src/reddit/actions/notificationSettingsLayout/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "k", (function() {
				return f
			}));
			const r = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__FAILED",
				o = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__LOADED",
				s = "NOTIFICATION_EMAIL_SETTINGS_LAYOUT__PENDING",
				i = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__FAILED",
				c = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__LOADED",
				a = "NOTIFICATION_PUSH_SETTINGS_LAYOUT__PENDING",
				d = "NOTIFICATION_SETTINGS_LAYOUT_UPDATED",
				u = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_FAILED",
				l = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_LOADED",
				b = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_PENDING",
				f = "NOTIFICATION_SUBSCRIBED_SUBREDDITS_UPDATED"
		},
		"./src/reddit/actions/notificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "e", (function() {
				return E
			})), n.d(t, "c", (function() {
				return j
			})), n.d(t, "b", (function() {
				return C
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/redditGQL/operations/UserSubredditsNotificationsLevel.json");
			var u = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				l = n("./src/reddit/models/Toast/index.ts");
			const b = Object(o.a)(s.c),
				f = Object(o.a)(s.b),
				m = Object(o.a)(s.a),
				p = Object(o.a)(s.f),
				I = Object(o.a)(s.e),
				O = Object(o.a)(s.d),
				_ = e => async (t, n, r) => {
					let {
						gqlContext: o
					} = r;
					e === u.a.Push ? t(p()) : t(b()), await async function(e, t, n) {
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
										o = [];
									const s = e => {
										const {
											rowIds: s,
											rowsCollection: i
										} = function(e) {
											const t = [],
												n = {};
											if (e.rows)
												for (let r = 0; r < e.rows.length; r++) {
													const o = e.rows[r],
														s = o.messageType;
													t.push(s), n[s] = o
												}
											return {
												rowsCollection: n,
												rowIds: t
											}
										}(e);
										r = {
											...r,
											...i
										}, o = [...o, ...s];
										const c = e.id;
										n.push(c), t[c] = {
											...e,
											rows: s
										}
									};
									for (let i = 0; i < e.length; i++) s(e[i]);
									return {
										sections: {
											byId: t,
											allIds: n
										},
										rows: {
											byId: r,
											allIds: o
										}
									}
								}(r)
							}(r.body);
							t === u.a.Push ? n(I(e)) : n(f(e))
						} else t === u.a.Push ? n(O({
							error: r.error
						})) : n(m({
							error: r.error
						}))
					}(o, e, t)
				};
			const x = Object(o.a)(s.g),
				g = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					(await Object(c.b)(s(), e)).ok ? (E(t, e), function(e) {
						e(Object(i.f)({
							kind: l.b.SuccessCommunity,
							text: r.fbt._("Changes saved", null, {
								hk: "UBoVR"
							})
						}))
					}(t)) : function(e) {
						e(Object(i.f)({
							kind: l.b.Error,
							text: r.fbt._("We had some issues saving your changes. Please try again.", null, {
								hk: "1OvQi6"
							})
						}))
					}(t)
				};

			function E(e, t) {
				e(x({
					isEnabled: t.isEnabled,
					messageType: t.messageType
				}))
			}
			const h = Object(o.a)(s.j),
				S = Object(o.a)(s.i),
				j = Object(o.a)(s.k),
				N = Object(o.a)(s.h),
				C = e => async (t, n, r) => {
					let {
						gqlContext: o
					} = r;
					var s, c;
					t(h());
					const u = await ((e, t) => Object(a.a)(e, {
						...d,
						variables: t
					}))(o(), e);
					if (null === (c = null === (s = u.error) || void 0 === s ? void 0 : s.fields) || void 0 === c ? void 0 : c.length) return t(N({
						error: u.error
					})), void t(Object(i.d)());
					if (u.ok && u.body) {
						const e = u.body,
							n = e && e.data,
							r = n && n.identity && n.identity.subscribedSubreddits,
							o = r && r.pageInfo,
							s = (r && r.edges).map(e => e.node);
						t(S({
							nodes: s,
							pageInfo: o
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
				o = n("./src/lib/notifications/constants.ts"),
				s = n("./src/lib/notifications/featureFlags.ts"),
				i = n("./src/reddit/featureFlags/index.ts"),
				c = n("./src/reddit/helpers/localStorage/index.ts");
			const a = e => i.d.pushNotificationsBrowserSupported(e) ? Object(s.a)() : o.c.BrowserUnsupported,
				d = e => {
					switch (e) {
						case o.a.Denied:
							c.nb(!1), Object(r.c)();
							break;
						case o.a.Default:
						case o.a.Granted:
							c.nb(!0), Object(r.c)();
							break;
						case o.a.Closed:
							c.nb(!0)
					}
				}
		},
		"./src/reddit/actions/notificationsInbox/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return s
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			}));
			const r = "INBOX_NOTIFICATIONS__PENDING",
				o = "INBOX_NOTIFICATIONS__LOADED",
				s = "INBOX_NOTIFICATIONS__FAILED",
				i = "INBOX_NOTIFS_SET_OVERFLOW_MENU_ID",
				c = "INBOX_NOTIFICATIONS__REMOVE_NOTIFICATION",
				a = "INBOX_NOTIFS__MARK_AS_READ",
				d = "INBOX_NOTIFS__SET_EARLIER_DIVIDER_INDEX",
				u = "INBOX_NOTIFS_MARK_ALL_AS_READ"
		},
		"./src/reddit/actions/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return P
			})), n.d(t, "e", (function() {
				return D
			})), n.d(t, "b", (function() {
				return B
			})), n.d(t, "i", (function() {
				return F
			})), n.d(t, "f", (function() {
				return G
			})), n.d(t, "c", (function() {
				return H
			})), n.d(t, "a", (function() {
				return V
			})), n.d(t, "h", (function() {
				return K
			})), n.d(t, "j", (function() {
				return q
			})), n.d(t, "g", (function() {
				return Q
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				i = (n("./src/reddit/actions/notificationSettingsLayout/index.ts"), n("./src/reddit/actions/notificationsInbox/constants.ts")),
				c = n("./src/reddit/actions/tabBadging.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/lib/makeGqlRequest/index.ts"),
				u = n("./src/redditGQL/operations/BlockAwarder.json");
			var l = (e, t) => Object(d.a)(e, {
					...u,
					variables: t
				}),
				b = n("./src/lib/constants/index.ts"),
				f = n("./src/lib/makeApiRequest/index.ts"),
				m = n("./src/lib/omitHeaders/index.ts"),
				p = n("./src/redditGQL/operations/NotificationInboxFeed.json"),
				I = n("./src/redditGQL/operations/NotificationInboxFeedSlimmed.json"),
				O = n("./src/reddit/constants/headers.ts"),
				_ = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var x;
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(x || (x = {}));
			var g = n("./src/redditGQL/operations/DeleteInboxNotifications.json");
			n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts");
			var E = n("./src/redditGQL/operations/UpdateInboxActivitySeenState.json");
			var h = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				S = n("./src/reddit/helpers/trackers/inbox.ts"),
				j = n("./src/reddit/models/Badge/index.ts"),
				N = n("./src/reddit/models/NotificationInbox/index.ts"),
				C = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/selectors/appBadges.ts"),
				T = (n("./src/reddit/selectors/notificationPrefs.ts"), n("./src/reddit/selectors/notificationsInbox.tsx"));
			const y = Object(o.a)(i.e),
				k = Object(o.a)(i.b),
				w = Object(o.a)(i.a),
				P = e => async (t, n, r) => {
					let {
						gqlContext: o
					} = r;
					var s, i;
					const c = n(),
						u = Object(T.a)(c);
					t(y());
					const l = await ((e, t) => Object(d.a)(e, {
						...p,
						variables: t
					}))(o(), e);
					if (null === (i = null === (s = l.error) || void 0 === s ? void 0 : s.fields) || void 0 === i ? void 0 : i.length) return t(w({
						error: l.error
					})), void t(Object(a.d)());
					const b = l && l.body,
						f = L(b);
					if (null === u) {
						const e = Object(T.f)(c);
						t(U(f.nodes, e.length))
					}
					t(k(f))
				}, D = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					var o, s;
					const i = await (e => Object(d.a)(e, {
						...I
					}))(r());
					if (null === (s = null === (o = i.error) || void 0 === o ? void 0 : o.fields) || void 0 === s ? void 0 : s.length) return;
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
				}, L = e => {
					const t = e && e.data,
						n = t && t.notificationInbox,
						r = n && n.elements,
						o = r && r.pageInfo;
					return {
						nodes: (r && r.edges).map(e => e.node),
						pageInfo: o
					}
				}, A = e => {
					var t, n;
					return {
						nodes: null === (n = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.notificationInbox) || void 0 === n ? void 0 : n.elements.edges.map(e => e.node)
					}
				}, U = (e, t) => async (n, r) => {
					const o = r(),
						s = Object(T.a)(o),
						i = ((e, t) => {
							let n, r = 0;
							const o = new Date,
								s = o.getDate(),
								i = o.getMonth(),
								c = o.getFullYear();
							for (; r < e.length && !n;) {
								const o = e[r],
									a = new Date(o.sentAt),
									d = a.getDate(),
									u = a.getMonth(),
									l = a.getFullYear();
								if ((d !== s || u !== i || l !== c) && !n) {
									n = ((t || 0) + r).toString()
								} else r++
							}
							return n
						})(e, t);
					i && i !== s && n(R({
						index: i
					}))
				}, R = Object(o.a)(i.g), M = (Object(o.a)(i.h), Object(o.a)(i.f)), B = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					const i = [e];
					if ((await ((e, t) => Object(d.a)(e, {
							...g,
							variables: {
								input: t
							}
						}))(s(), {
							notificationIds: i
						})).ok) {
						t(M({
							id: e
						}));
						const o = Object(T.f)(n());
						t(U(o)), t(Object(a.f)(Object(a.e)(r.fbt._("Notification hidden", null, {
							hk: "1jfPqO"
						}), C.b.SuccessCommunityGreen)))
					} else t(Object(a.f)(Object(a.e)(r.fbt._("Failed to hide notification, please try again.", null, {
						hk: "fL7uB"
					}), C.b.Error)))
				}, F = (e, t) => async (n, o, s) => {
					let {
						gqlContext: i
					} = s;
					if (!e) return;
					(await Object(h.b)(i(), e, {
						isSubredditUpdatesInterestingPostEnabled: !0,
						isUpdateFromSubredditEnabled: !0
					})).ok ? (t && t(), n(Object(a.f)(Object(a.e)(r.fbt._("Success! Undone hiding notifications from this community.", null, {
						hk: "1na0NP"
					}), C.b.SuccessCommunityGreen)))) : n(Object(a.f)(Object(a.e)(r.fbt._("Failed to undo hiding notifications, please try again.", null, {
						hk: "4jo7Pf"
					}), C.b.Error)))
				}, G = (e, t) => async (n, o, s) => {
					let {
						gqlContext: i
					} = s;
					if (!e) return;
					(await Object(h.b)(i(), e, {
						isSubredditUpdatesInterestingPostEnabled: !1,
						isUpdateFromSubredditEnabled: !1
					})).ok ? n((() => {
						const n = r.fbt._("Success! You won't see notifications from this community in the future.", null, {
							hk: "2tkhbk"
						});
						return Object(a.f)(Object(a.e)(n, C.b.Undo, r.fbt._("Undo", null, {
							hk: "4zFGDk"
						}), F(e, t)))
					})()) : n(Object(a.f)(Object(a.e)(r.fbt._("Failed to hide notifications, please try again.", null, {
						hk: "KEGcB"
					}), C.b.Error)))
				}, H = e => async (t, n, o) => {
					let {
						apiContext: s
					} = o;
					if (!e) return;
					(await ((e, t) => Object(f.a)(Object(m.a)(e, [O.a]), {
						endpoint: Object(_.a)(`${e.apiUrl}/api/sendreplies`),
						method: b.jb.POST,
						data: {
							id: t
						}
					}))(s(), e)).ok ? t(Object(a.f)(Object(a.e)(r.fbt._("Success! You won't see updates on this in the future", null, {
						hk: "wtDa4"
					}), C.b.SuccessCommunityGreen))) : t(Object(a.f)(Object(a.e)(r.fbt._("Failed to turn off updates on this, please try again", null, {
						hk: "1zhpEy"
					}), C.b.Error)))
				}, V = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					if (!e) return;
					(await l(s(), {
						awardingId: e
					})).ok ? t(Object(a.f)(Object(a.e)(r.fbt._("Success! Awarder has been blocked", null, {
						hk: "2D5PUk"
					}), C.b.SuccessCommunityGreen))) : t(Object(a.f)(Object(a.e)(r.fbt._("Failed to block awarder, please try again", null, {
						hk: "2dxeA8"
					}), C.b.Error)))
				}, W = Object(o.a)(i.d), K = (e, t) => async (n, r, o) => {
					let i, {
						apiContext: a
					} = o;
					if (t === N.a.CommentReply || t === N.a.PostReply || t === N.a.PrivateMessage || t === N.a.UsernameMention) {
						if ((i = await ((e, t) => Object(f.a)(Object(m.a)(e, [O.a]), {
								endpoint: Object(_.a)(`${e.apiUrl}/api/read_message`),
								method: b.jb.POST,
								data: {
									id: t
								}
							}))(a(), e)).ok) {
							let e = Object(v.a)(r());
							if (e > 0) {
								e--;
								const t = Object(s.e)({
									count: e,
									key: j.c.ActivityTab
								});
								n(Object(s.a)(t)), n(Object(c.e)())
							}
						}
					} else i = await ((e, t) => Object(f.a)(Object(m.a)(e, [O.a]), {
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
				}, q = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const o = (new Date).toLocaleDateString(),
						i = await ((e, t) => Object(d.a)(e, {
							...E,
							variables: {
								input: t
							}
						}))(r(), {
							lastSentAt: o
						});
					if (i.ok) {
						const t = i.body,
							n = t && t.data && t.data.updateInboxActivitySeenState && t.data.updateInboxActivitySeenState.badgeIndicators;
						n && (e(Object(s.a)(n)), e(Object(c.d)()))
					}
				}, Y = Object(o.a)(i.c), Q = () => async (e, t, n) => {
					let {
						apiContext: o
					} = n;
					const {
						notificationsInbox: {
							markAllAsReadTimestamp: i
						}
					} = t(), c = new Date;
					if (!i || c.getTime() - new Date(i).getTime() > 15e3) {
						if ((await ((e, t) => Object(f.a)(Object(m.a)(e, [O.a]), {
								endpoint: Object(_.a)(`${e.apiUrl}/api/read_all_messages`),
								method: b.jb.POST,
								data: {
									filter_types: null == t ? void 0 : t.join(",")
								}
							}))(o(), [x.Activity, x.Messages])).ok) {
							const t = Object(s.e)({
									count: 0,
									key: j.c.MessageTab
								}),
								n = Object(s.e)({
									count: 0,
									key: j.c.ActivityTab
								});
							e(Object(s.a)({
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
				return o
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "j", (function() {
				return m
			}));
			const r = "PAGE__MOD_LISTING_PAGE_PENDING",
				o = "PAGE__MOD_LISTING_PAGE_LOADED",
				s = "PAGE__MOD_LISTING_PAGE_FAILED",
				i = "MOD_LISTING_MORE_POSTS_PENDING",
				c = "MOD_LISTING_MORE_POSTS_LOADED",
				a = "MOD_LISTING_MORE_POSTS_FAILED",
				d = "MOD_LISTING_HIDE_SUBREDDIT_SUCCESS",
				u = "MOD_LISTING_HIDE_SUBREDDIT_PENDING",
				l = "MOD_LISTING_HIDE_SUBREDDIT_FAILED",
				b = "MOD_LISTING_UNHIDE_SUBREDDIT_SUCCESS",
				f = "MOD_LISTING_UNHIDE_SUBREDDIT_PENDING",
				m = "MOD_LISTING_UNHIDE_SUBREDDIT_FAILED"
		},
		"./src/reddit/actions/postList.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				o = (n("./src/reddit/actions/embedAndImage.ts"), n("./src/reddit/actions/video.ts"), n("./src/reddit/helpers/trackers/postList.ts"));
			n("./src/reddit/constants/postLayout.ts"), n("./src/reddit/models/Media/index.ts"), n("./src/reddit/selectors/platform.ts"), n("./src/reddit/selectors/posts.ts");
			n("./src/reddit/selectors/video.ts");
			const s = "POSTLIST__MARKED_END",
				i = "POSTLIST__UNMARKED_END",
				c = Object(r.a)(s),
				a = Object(r.a)(i),
				d = (e, t) => async (n, r) => {
					const s = r();
					e in s.listings.postOrder.fetchedTokens ? e in s.listings.postOrder.ids ? n(a({
						listingKey: e
					})) : o.l(s, e) : n(c({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/lib/matchRoute/index.ts"),
				o = n("./src/lib/opener/index.ts"),
				s = n("./node_modules/react-router-redux/es/index.js");
			const i = function(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return async (n, i, c) => {
					let {
						routes: a
					} = c;
					const d = i();
					Object(r.a)(e, a, d) ? n(Object(s.b)(e)) : t ? Object(o.e)(e, "_blank") : window.location.assign(e)
				}
			}
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "BlankPost", (function() {
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/components/AdViewability/index.tsx"),
				i = n("./src/reddit/connectors/PostViewable/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/contexts/Post/index.tsx");
			const d = Object(i.a)(null),
				u = e => {
					let {
						className: t,
						post: n
					} = e;
					return n.isSponsored ? o.a.createElement(s.a, {
						post: n,
						trackDisplay: !0
					}, o.a.createElement("div", {
						className: Object(c.a)(t, `Blank ${n.id}`)
					})) : null
				};
			t.default = Object(a.b)(d(u))
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
		"./src/reddit/components/LottieAnimation/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lottie-web/build/player/lottie.js"),
				o = n.n(r),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				c = n("./src/reddit/components/LottieAnimation/util.ts");
			const a = i.a.memo(e => {
				const t = i.a.createRef(),
					{
						assetData: n,
						assetUrl: r,
						className: a,
						hidden: d,
						loop: u,
						useCanvasRenderer: l,
						onClick: b,
						prefersReducedAnimation: f
					} = e,
					[m, p] = Object(s.useState)(n);
				Object(s.useEffect)(() => {
					r ? Object(c.a)(r).then(p) : n && p(n)
				}, [r, n]);
				const [I, O] = Object(s.useState)(null);
				Object(s.useEffect)(() => {
					const e = t.current;
					if (!e || 0 !== e.childElementCount || I || !m) return;
					const n = o.a.loadAnimation({
						autoplay: !1,
						renderer: l ? "canvas" : "svg",
						loop: u,
						container: e,
						animationData: m
					});
					O(n)
				}, [u, t, I, m]), Object(s.useEffect)(() => {
					if (I)
						if (d) I.stop();
						else if (f) {
						const e = I.getDuration(!0);
						I.goToAndPlay(e, !0)
					} else I.goToAndPlay(0)
				}, [d, f, I]);
				const _ = Object(s.useCallback)(() => {
					I && I.goToAndPlay(0)
				}, [I]);
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
				return o
			}));
			n("./src/reddit/components/ImageWithFallback/index.tsx");
			const r = {};

			function o(e) {
				let t = r[e];
				return t || (t = r[e] = fetch(e, {
					mode: "cors",
					cache: "force-cache"
				}).then(t => (t.ok || function(e) {
					throw new Error(`Unable to download effect asset "${e}"`)
				}(e), t.json()))), t
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
			var r, o, s = n("./node_modules/react/index.js"),
				i = n.n(s),
				c = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js");
			! function(e) {
				e[e.Collection = 0] = "Collection", e[e.HeaderSelector = 1] = "HeaderSelector", e[e.PostComments = 2] = "PostComments", e[e.PostItem = 3] = "PostItem", e[e.TopicHeader = 4] = "TopicHeader", e[e.Widget = 5] = "Widget"
			}(r || (r = {})),
			function(e) {
				e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e[e.H6 = 6] = "H6"
			}(o || (o = {}));
			var d = n("./src/lib/constants/index.ts"),
				u = n("./src/reddit/helpers/postCollection.ts");
			const l = [d.Nb.COMMENTS, d.Nb.COLLECTION_COMMENTS],
				b = (e, t) => {
					if (!e) return [];
					const n = l.includes(e),
						o = e === d.Nb.COLLECTION_COMMENTS || t && Object(u.a)(t),
						s = d.V.has(e),
						i = d.Cb.has(e),
						c = e === d.Nb.SUBREDDIT,
						a = e === d.Nb.TOPIC;
					let b, f, m;
					return s && !c || i ? b = r.HeaderSelector : o ? b = r.Collection : n ? b = r.PostComments : a && (b = r.TopicHeader), (s || i || o || n) && (f = r.Widget), (s || n) && (m = r.PostItem), [b, f, m]
				};
			var f = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/selectors/platform.ts"),
				p = n("./src/reddit/components/SEOTitle/index.m.less"),
				I = n.n(p);
			const O = e => {
					let {
						level: t,
						children: n
					} = e;
					const r = `h${t}`;
					return i.a.createElement(r, {
						className: I.a.Title
					}, n)
				},
				_ = Object(f.u)(),
				x = Object(c.b)(() => Object(a.a)((e, t) => {
					let {
						pageLayer: n
					} = t;
					return n && Object(m.n)(e, {
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
			class g extends i.a.Component {
				render() {
					const {
						children: e,
						level: t
					} = this.props;
					return t ? i.a.createElement(O, {
						level: t
					}, e) : i.a.createElement(i.a.Fragment, null, e)
				}
			}
			t.b = _(x(g))
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
				mNightmode: "_1TI6C7sqGL9TRdsq1jRks"
			}
		},
		"./src/reddit/components/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			}));
			var r = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				c = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/components/UserIcon/index.tsx"),
				l = n("./src/reddit/constants/colors.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				m = n("./src/reddit/icons/fonts/index.tsx"),
				p = n("./src/reddit/models/Subreddit/index.ts"),
				I = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/components/SubredditIcon/index.m.less"),
				_ = n.n(O);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const g = d.a.wrapped(u.a, "UserIcon", _.a),
				E = d.a.img("Image", _.a),
				h = e => {
					let {
						iconColor: t,
						...n
					} = e;
					return i.a.createElement(E, x({
						style: {
							backgroundColor: t || ""
						}
					}, n))
				},
				S = d.a.div("BackupImage", _.a),
				j = Object(b.u)();
			t.b = j(e => {
				var t;
				const n = Object(c.e)(I.db);
				let s, d, u;
				if (e.subredditOrProfile) {
					const {
						url: t,
						color: n
					} = Object(f.a)({
						shouldHideNsfwIcon: !!e.shouldHideNsfwIcon,
						subredditOrProfile: e.subredditOrProfile
					});
					Object(p.h)(e.subredditOrProfile) ? u = i.a.createElement(g, {
						className: e.className,
						iconUrl: t,
						isNSFW: e.subredditOrProfile.isNSFW,
						userName: e.subredditOrProfile.name
					}) : (s = t, d = n)
				} else s = e.shouldHideNsfwIcon ? `${r.a.assetPath}/img/avatar_over18.png` : e.iconUrl, d = e.primaryColor || l.a.alienblue;
				return s ? u = i.a.createElement(h, {
					alt: o.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: Object(a.a)(e.className, {
						[_.a.blur]: e.shouldBlurSubredditIcon
					}),
					iconColor: d,
					role: "presentation",
					src: s
				}) : u || (u = i.a.createElement(m.a, {
					name: "community",
					isFilled: !n,
					className: Object(a.a)(_.a.defaultCommunityIcon, e.className, {
						[_.a.mNightmode]: n,
						[_.a.blur]: e.shouldBlurSubredditIcon
					}),
					style: n ? {
						backgroundColor: e.redditStyle ? l.a.alienblue : d
					} : {
						color: e.redditStyle ? l.a.alienblue : d
					}
				})), e.linkTo ? i.a.createElement("a", x({}, null !== (t = e.linkProps) && void 0 !== t ? t : {}, {
					href: e.linkTo
				}), u) : i.a.createElement(i.a.Fragment, null, u)
			})
		},
		"./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/reddit/components/AdViewability/index.tsx"),
				i = n("./src/reddit/components/BlankPost/index.tsx"),
				c = n("./src/reddit/connectors/PostViewable/index.ts");
			const a = Object(c.a)(null);
			class d extends o.a.Component {
				render() {
					const {
						children: e,
						post: t,
						onPostViewable: n
					} = this.props;
					if (t) return t.isBlank ? o.a.createElement(i.BlankPost, {
						post: t,
						postId: t.id,
						onPostViewable: n
					}) : o.a.createElement(s.a, {
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
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				c = n("./src/reddit/icons/svgs/PresenceCircle/index.tsx"),
				a = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				d = n.n(a);
			t.default = e => {
				const {
					showPresence: t,
					onceInViewport: n
				} = e, a = Object(r.useRef)(null), u = Object(r.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t
						} = e;
						t && n && n()
					})
				}, [n]);
				return Object(i.a)(a, u), o.a.createElement(c.a, {
					ref: a,
					className: Object(s.a)(d.a.presenceDot, {
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
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				a = n.n(c);
			t.a = function(e) {
				let {
					backgroundClassName: t,
					className: n,
					headshot: o,
					hasNftBorder: c
				} = e;
				return s.a.createElement("div", {
					className: Object(i.a)(a.a.snoovatarWrapper, n, {
						[a.a.hasNftBorder]: Boolean(c)
					})
				}, s.a.createElement("div", {
					className: Object(i.a)(a.a.snoovatarBackground, t)
				}), s.a.createElement("div", {
					className: a.a.snoovatarHeadshotContainer
				}, s.a.createElement("img", {
					alt: r.fbt._("User avatar", null, {
						hk: "12gjW8"
					}),
					className: a.a.snoovatarHeadshot,
					src: o
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
				return l
			})), n.d(t, "c", (function() {
				return b
			}));
			var r = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				i = n.n(s),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/SnooSilhouette/index.tsx"),
				d = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				u = n.n(d);
			const l = `${r.a.assetPath}/img/avatar_over18_square.png`,
				b = e => !e || e.includes("avatar_default_");
			t.b = e => {
				const {
					className: t,
					iconUrl: n,
					isCurrentUser: r,
					isNightMode: s,
					isNSFW: d,
					nsfwIconUrl: f,
					shouldHideNSFW: m
				} = e;
				if (r && b(n) || !r && !n) return i.a.createElement(a.a, {
					className: Object(c.a)(u.a.DefaultUserIcon, t, {
						[u.a.mNightmode]: s
					})
				});
				const p = !r && d && m ? f || l : n;
				return i.a.createElement("img", {
					alt: o.fbt._("User avatar", null, {
						hk: "X43nA"
					}),
					className: Object(c.a)(u.a.UserIcon, t),
					src: p
				})
			}
		},
		"./src/reddit/components/UserIcon/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				s = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				a = n("./src/realtime/GQLSubscription/async.tsx"),
				d = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				u = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/models/User/index.ts"),
				b = n("./src/config.ts"),
				f = n("./src/reddit/components/LottieAnimation/index.tsx");
			var m = e => {
					let {
						className: t
					} = e;
					return s.a.createElement("svg", {
						className: t,
						fill: "none",
						viewBox: "0 0 32 32",
						xmlns: "http://www.w3.org/2000/svg"
					}, s.a.createElement("radialGradient", {
						id: "a",
						cx: "0",
						cy: "0",
						gradientTransform: "matrix(20.06268 6.0999 -3097.55815 10187.91225 -3.1 11.6)",
						gradientUnits: "userSpaceOnUse",
						r: "1"
					}, s.a.createElement("stop", {
						offset: "0",
						stopColor: "#1185b5"
					}), s.a.createElement("stop", {
						offset: ".29",
						stopColor: "#d7f7ff"
					}), s.a.createElement("stop", {
						offset: ".53",
						stopColor: "#5ef6d8"
					}), s.a.createElement("stop", {
						offset: ".84",
						stopColor: "#5ef6d8"
					}), s.a.createElement("stop", {
						offset: ".87",
						stopColor: "#1990b9"
					}), s.a.createElement("stop", {
						offset: "1",
						stopColor: "#3f9fc6"
					})), s.a.createElement("path", {
						d: "M13.77 1.1c.76-.41 1.7-.41 2.46 0L28 7.58c.75.42 1.2 1.17 1.2 1.96v12.94c0 .79-.45 1.54-1.2 1.95L16.23 30.9c-.76.42-1.7.42-2.46 0L2 24.42a2.25 2.25 0 0 1-1.2-1.95V9.53C.8 8.74 1.24 8 2 7.57z",
						stroke: "url(#a)",
						strokeLinejoin: "round",
						strokeWidth: "1.59"
					}))
				},
				p = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				I = n.n(p);
			var O = e => {
					let {
						iconUrl: t
					} = e;
					return Object(d.c)(t) ? s.a.createElement(f.a, {
						className: I.a.nftAnimation,
						assetUrl: `${b.a.assetPath}/img/snoovatars/comment-animations/nft_comment_animation.json`,
						loop: !0
					}) : s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: I.a.nftBackground
					}), s.a.createElement(m, {
						className: I.a.nftBorder
					}))
				},
				_ = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				x = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				g = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				E = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const j = () => {},
				N = Object(c.c)({
					currentUser: E.k,
					isNightMode: E.db,
					shouldHideNSFW: E.F,
					user: E.Ab,
					isProfileAvatarChangeFixEnabled: h.a
				}),
				C = Object(i.b)(N);
			t.a = C(e => {
				const {
					authorId: t,
					collapsed: n,
					currentUser: i,
					iconUrl: c,
					isCommentAuthorBlocked: b,
					isHighlighted: f,
					isNft: m,
					isNSFW: p,
					shouldUseOnlineOverride: E,
					isOnlineOverrideValue: h,
					isOnlineStatusLoadTest: N,
					isProfileIcon: C,
					omitResponsivePresenceWrapper: v,
					onPresenceIndicatorInViewport: T,
					shouldShowPresenceIndicator: y,
					user: k,
					userName: w,
					isProfileAvatarChangeFixEnabled: P,
					...D
				} = e, L = !!i && Object(l.e)(i) === w, A = L ? i : k, U = A && A.accountIcon || c, R = k ? k.isNSFW : p, M = Object(d.a)(U) && !b, B = M ? s.a.createElement(x.a, {
					headshot: U,
					className: e.className,
					hasNftBorder: m && Object(d.d)(c)
				}) : s.a.createElement(g.b, S({}, D, {
					iconUrl: b && n ? "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png" : U,
					isCurrentUser: L,
					isNSFW: R
				})), [F, G] = Object(o.useState)(!1), H = Object(o.useMemo)(() => ({
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "ONLINE_STATUS_INDICATOR",
							userID: t
						}
					}
				}), [t]), V = Object(o.useCallback)(e => {
					const {
						isOnline: t
					} = e.subscribe.data;
					G(t)
				}, []), W = Object(o.useRef)(null), [K, q] = Object(o.useState)(!1), Y = Object(o.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: n
						} = e, r = 1 !== n;
						t ? q(!0) : r && q(!1)
					})
				}, []), Q = Object(o.useRef)({
					rootMargin: "750px 0px 1000px 0px"
				});
				return Object(u.a)(W, Y, Q.current), v ? B : s.a.createElement("div", {
					className: Object(r.a)(I.a.userIconWrapper, {
						[I.a.hasHeadShotWrapper]: M,
						[I.a.isProfileIcon]: C && P
					}),
					ref: W
				}, m && s.a.createElement(O, {
					iconUrl: c
				}), B, y && (F || E && h) && s.a.createElement(_.default, {
					showPresence: !0,
					isHighlighted: f,
					onceInViewport: T
				}), (y || N) && !E && K && s.a.createElement(a.a, {
					variables: H,
					onData: y ? V : j,
					queryKey: "isUserOnline"
				}))
			})
		},
		"./src/reddit/constants/elementClassNames.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "k", (function() {
				return c
			})), n.d(t, "m", (function() {
				return a
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "n", (function() {
				return u
			})), n.d(t, "j", (function() {
				return l
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "i", (function() {
				return I
			}));
			const r = "DraftEditor-contentwrapper",
				o = "public-DraftStyleDefault-block",
				s = "data-offset-key",
				i = "hovered",
				c = "scrollerItem",
				a = "threadline",
				d = "header-user-dropdown",
				u = "voteButton",
				l = "RichTextJSON-root",
				b = "ImageBox-image",
				f = "content-type-link",
				m = "styled-outbound-link",
				p = "ListingLayout-backgroundContainer",
				I = "ListingLayout-outerContainer"
		},
		"./src/reddit/contexts/InsideOverlay.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const i = o.a.createContext(!1);

			function c(e) {
				function t(t) {
					return o.a.createElement(i.Consumer, null, n => o.a.createElement(e, s({}, t, {
						isOverlay: n
					})))
				}
				return t.displayName = `WithOverlay(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/controls/OutboundLink/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return T
			})), n.d(t, "c", (function() {
				return y
			}));
			var r = n("./node_modules/lodash/omit.js"),
				o = n.n(r),
				s = n("./node_modules/query-string/index.js"),
				i = n.n(s),
				c = n("./node_modules/react/index.js"),
				a = n.n(c),
				d = n("./node_modules/react-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/addQueryParams/index.ts");
			var b = (e, t) => t ? Object(l.a)(e, {
				user_id: t
			}) : e;
			var f = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/redditId/index.ts"),
				p = n("./src/reddit/actions/post.ts"),
				I = n("./src/reddit/constants/adEvents.ts"),
				O = n("./src/reddit/helpers/getVendorMetadata.ts"),
				_ = n("./src/reddit/helpers/pixels.ts"),
				x = n("./src/reddit/helpers/trackers/ads.ts"),
				g = n("./src/reddit/hooks/useOutboundClickTracking.ts"),
				E = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/telemetry.ts"),
				S = n("./src/reddit/selectors/user.ts");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const N = Object(u.a)(S.a, S.k, (e, t) => {
					let {
						isSponsored: n,
						postId: r
					} = t;
					return n && r ? Object(E.b)(e, r) : null
				}, E.G, h.d, (e, t, n, r, o) => ({
					allowClickTracking: e,
					basePixelMetadata: n,
					userId: t ? Object(m.a)(t.id) : null,
					post: r,
					pageType: o.pageType
				})),
				C = Object(d.b)(N, e => ({
					fireAdPixelsOfType: (t, n) => e(Object(p.z)(t, n)),
					recordClick: (t, n, r) => {
						const o = t.events.filter(e => {
							let {
								type: t,
								url: n
							} = e;
							return t === I.a.Click && Object(_.b)(n)
						});
						Object(_.c)(o), e(Object(p.p)(String(n), {
							postId: t.id,
							vendorMetadata: r
						}))
					}
				})),
				v = (e, t, n, r) => {
					const o = t.outboundUrlExpiration && t.outboundUrlExpiration > Date.now();
					r && t.outboundUrl && o && (e.href = b(t.outboundUrl, n), e.href = function(e) {
						return Object(l.a)(e, {
							web_redirect: "true"
						})
					}(e.href))
				},
				T = (e, t, n) => {
					let r, o = null;
					if (e && t && /^(http|https):\/\/([a-z]+\.)?reddit.com/.test(n)) {
						o = Object(O.a)(e, t, I.a.Click);
						const {
							url: s,
							query: c
						} = i.a.parseUrl(n);
						r = i.a.stringifyUrl({
							url: s,
							query: {
								...c,
								...o
							}
						})
					} else r = n;
					return {
						url: r,
						metadata: o
					}
				},
				y = (e, t, n) => {
					const r = T(t, n, e.href);
					return e.href = r.url, r.metadata
				},
				k = e => {
					let {
						isSponsored: t,
						source: n
					} = e;
					return !!(t && (null == n ? void 0 : n.outboundUrl))
				},
				w = C(e => {
					const t = Object(c.useRef)(null),
						n = Object(g.a)(),
						{
							allowClickTracking: r,
							basePixelMetadata: s,
							commentId: i,
							fireAdPixelsOfType: d,
							href: u,
							isSponsored: l,
							pageType: b,
							post: m,
							postId: p,
							recordClick: O,
							source: _,
							sourceElement: E,
							userId: h
						} = e;
					let S = o()(e, ["allowClickTracking", "basePixelMetadata", "fireAdPixelsOfType", "isSponsored", "postId", "post", "recordClick", "commentId", "source", "sourceElement", "userId", "pageType"]);
					const N = _ && _.outboundUrl && l ? _.outboundUrl : u;
					return S = {
						...S,
						href: N,
						rel: l ? f.b : f.a,
						target: f.d.BLANK
					}, !_ || (e => {
						const {
							outboundUrlCreated: t,
							outboundUrlReceived: n
						} = e;
						return !(!t || !n) && (t > n + 3e5 || t < n - 36e5)
					})(_) ? a.a.createElement("a", j({}, S, {
						onClick: () => n(u, E, i, p)
					})) : a.a.createElement("a", j({}, S, {
						onMouseDown: n => {
							if (!k(e)) return !(1 !== n.button && 2 !== n.button && !n.ctrlKey) || void v(n.currentTarget, _, h, r);
							t.current = y(n.currentTarget, p, s)
						},
						onClick: () => {
							m && (k(e) && (O(m, I.a.Click, t.current), Object(x.a)(m, b)), d(m, I.a.Click), n(u, E, i, p))
						},
						onMouseLeave: e => {
							l || ((e, t) => {
								e.href = t
							})(e.currentTarget, N)
						},
						onTouchStart: e => v(e.currentTarget, _, h, r),
						"data-testid": "outbound-link"
					}))
				});
			t.b = w
		},
		"./src/reddit/controls/Search/RelatedSubredditMetaData.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return I
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				u = n("./src/reddit/components/SubredditIcon/index.tsx"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				f = n.n(b),
				m = n("./src/reddit/controls/Search/index.m.less"),
				p = n.n(m);
			const I = Object(s.b)(() => Object(i.c)({
				subredditsByName: Object(a.a)((e, t) => {
					const n = {};
					return t.subredditIcons && t.subredditIcons.map(t => {
						n[t.subredditName] = Object(l.A)(e, {
							subredditName: t.subredditName
						})
					}), n
				})
			}))(e => o.a.createElement("div", {
				className: Object(c.a)(f.a.subText, p.a.subText, e.className)
			}, e.subredditIcons ? e.subredditIcons.map(t => o.a.createElement(d.a, {
				key: `${t.subredditName}-hoverCard`,
				subredditName: t.subredditName
			}, o.a.createElement(u.b, {
				className: Object(c.a)(p.a.subredditIcon, p.a.isHeaderIcon, e.iconClassName),
				linkTo: `/r/${t.subredditName}/`,
				key: t.subredditName,
				iconUrl: t.url,
				subredditOrProfile: e.subredditsByName[t.subredditName]
			}))) : o.a.createElement(u.b, {
				className: Object(c.a)(p.a.subredditIcon, e.iconClassName),
				key: e.iconUrl,
				iconUrl: e.iconUrl
			}), e.suffix && o.a.createElement("span", null, e.suffix)))
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
				o = n("./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json"),
				s = n("./src/redditGQL/operations/UpdateNotificationPreferences.json");
			const i = (e, t) => Object(r.a)(e, {
					...o,
					variables: t
				}),
				c = (e, t) => Object(r.a)(e, {
					...s,
					variables: {
						input: {
							preferences: [t]
						}
					}
				})
		},
		"./src/reddit/helpers/matchRedditUrls/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/lib/env/index.ts"),
				o = n("./src/reddit/helpers/parseUrl.ts");
			const s = ["old", "new", "en", "www", "np", "m"],
				i = ["reddit.com", "reddit.local", ..."undefined" != typeof window && Object(r.a)() ? [window.location.host] : []].concat("").concat(s.map((function(e) {
					return e + ".reddit.com"
				}))).concat(s.map((function(e) {
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
				const r = Object(o.a)(t);
				if (!r) return void console.error("Could not parse url", t);
				if (-1 === (n.hostnames || i).indexOf(r.hostname)) return;
				const s = r.pathname.match(n.pathname);
				if (s) {
					return {
						url: t,
						routeName: e,
						components: n.pathnameComponents.reduce((function(e, t, n) {
							return e[t] = s[n + 1], e
						}), {})
					}
				}
			}

			function u(e) {
				return (e.match(new RegExp(o.b, "g")) || []).map((function(e) {
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
				return s
			})), n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const s = e => Object(r.b)(e) < .6;

			function i(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.a.bodyText,
					n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.b.bodyText;
				return s(e) ? n : t
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
				o = n("./src/reddit/helpers/localStorage/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, n) => o => ({
					source: "post",
					action: "view",
					noun: "programmatic_ad",
					...s.n(o),
					subreddit: s.hb(o),
					programmatic: {
						adUnit: null !== e && null !== t ? `DESKTOP ${e}x${t} ${n}` : `DESKTOP ${n}`,
						count: 1,
						type: r.f.SWITCH_HOUSE_AD
					}
				}),
				c = (e, t) => {
					t && (Object(o.Ab)(e.postId), Object(o.Jb)(t)), e.impressionIdStr ? Object(o.Bb)(e.impressionIdStr) : e.impressionId && Object(o.Bb)(e.impressionId)
				}
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "u", (function() {
				return C
			})), n.d(t, "v", (function() {
				return v
			})), n.d(t, "A", (function() {
				return w
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "t", (function() {
				return D
			})), n.d(t, "c", (function() {
				return L
			})), n.d(t, "p", (function() {
				return A
			})), n.d(t, "q", (function() {
				return U
			})), n.d(t, "z", (function() {
				return R
			})), n.d(t, "y", (function() {
				return M
			})), n.d(t, "x", (function() {
				return B
			})), n.d(t, "o", (function() {
				return F
			})), n.d(t, "r", (function() {
				return G
			})), n.d(t, "m", (function() {
				return K
			})), n.d(t, "g", (function() {
				return q
			})), n.d(t, "l", (function() {
				return Y
			})), n.d(t, "e", (function() {
				return Q
			})), n.d(t, "f", (function() {
				return z
			})), n.d(t, "h", (function() {
				return X
			})), n.d(t, "j", (function() {
				return J
			})), n.d(t, "k", (function() {
				return $
			})), n.d(t, "i", (function() {
				return Z
			})), n.d(t, "d", (function() {
				return ee
			})), n.d(t, "n", (function() {
				return te
			})), n.d(t, "w", (function() {
				return ne
			}));
			var r, o = n("./src/lib/stringInterpolate/index.ts"),
				s = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = (n("./src/reddit/constants/categories.tsx"), n("./src/reddit/constants/tracking.ts")),
				c = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				a = n("./src/reddit/helpers/trackers/searchResults.ts"),
				d = (n("./src/reddit/helpers/widgets/index.tsx"), n("./src/reddit/models/DiscoveryUnit/index.ts")),
				u = n("./src/reddit/models/Search/index.ts"),
				l = n("./src/reddit/selectors/posts.ts"),
				b = n("./src/reddit/selectors/telemetry.ts"),
				f = n("./src/reddit/selectors/trending.ts"),
				m = n("./src/reddit/selectors/widgets.ts"),
				p = n("./src/telemetry/index.ts"),
				I = n("./src/reddit/helpers/search/searchImpressionId.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe", e.TRENDING = "trending"
			}(r || (r = {}));
			const O = "discovery_unit",
				_ = (e, t, n) => ({
					...b.n(e),
					source: O,
					screen: b.Z(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && n ? Object(o.a)(t.title, {
							subredditName: n.name
						}) : t.title,
						name: t.unitName
					}
				}),
				x = (e, t, n) => ({
					..._(e, t, n),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				g = (e, t) => {
					Object(p.a)(E(t)(e))
				},
				E = (e, t) => n => x(n, e, t),
				h = (e, t, n, r) => "unitName" in t ? _(e, t, r) : ((e, t, n) => ({
					...b.n(e),
					source: "search",
					screen: b.Z(e),
					search: n ? {
						...b.ab(e, n, c.a.SERP),
						structureType: b.c.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, n),
				S = (e, t, n, o, s) => ({
					...h(e, t, o, s),
					action: "view",
					noun: r.ITEM_POST,
					post: b.I(e, n)
				}),
				j = e => {
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
			var N;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(N || (N = {}));
			const C = e => {
					Object(p.a)(k({
						...e,
						action: i.c.CLICK
					}))
				},
				v = e => {
					Object(p.a)(k({
						...e,
						action: i.c.VIEW
					}))
				},
				T = {
					[c.a.Popular]: N.POPULAR_CAROUSEL,
					[c.a.Typeahead]: N.SEARCH_DROPDOWN
				},
				y = {
					[c.a.Popular]: u.d.tile,
					[c.a.Typeahead]: u.d.dropdown
				},
				k = e => {
					let {
						action: t,
						offset: n = 0,
						state: o,
						telemetrySource: s,
						trendingSearch: i
					} = e;
					const c = T[s],
						a = y[s],
						u = Object(f.a)(o, a).filter(e => !e.post || !(e.post.isSponsored && e.post.isBlank)).findIndex(e => e.id === i.id) + n;
					return {
						...b.n(o),
						source: "search",
						action: t,
						noun: r.TRENDING,
						metaSearch: j(i),
						discoveryUnit: c === N.POPULAR_CAROUSEL ? {
							name: d.k,
							id: d.k,
							title: d.k,
							type: "query"
						} : void 0,
						actionInfo: b.d(o, {
							paneName: c,
							position: u
						}),
						search: {
							originElement: c === N.SEARCH_DROPDOWN ? "search_dropdown" : void 0,
							originPageType: o.platform.currentPage ? b.u(o.platform.currentPage) : void 0,
							query: i.rawQuery,
							structureType: b.c.Trending,
							impressionId: I.a.get(s),
							queryId: b.bb(o, s)
						}
					}
				},
				w = (e, t, n, r, o, s, c) => {
					Object(p.a)({
						...b.n(e),
						...Object(a.l)({
							state: e,
							postId: n,
							searchOptions: r,
							pageLayer: o,
							key: s,
							discoveryUnit: t
						}),
						action: i.c.VIEW,
						noun: c ? "ad" : "post"
					})
				},
				P = (e, t, n, r) => {
					Object(p.a)(S(e, t, n, r))
				},
				D = (e, t, n, r) => o => S(o, e, t, n, r),
				L = (e, t) => {
					Object(p.a)({
						..._(e, t),
						source: O,
						action: i.c.CLICK,
						noun: "show_less_often"
					})
				},
				A = (e, t, n, r) => {
					Object(p.a)(U(t, n, r)(e))
				},
				U = (e, t, n, o) => s => {
					return {
						...h(s, e, n, o),
						source: O,
						action: i.c.CLICK,
						noun: r.ITEM_POST,
						post: b.I(s, t)
					}
				},
				R = function() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					return e => Object(a.r)(e, ...t)
				},
				M = (e, t, n, r) => o => s => Object(a.j)({
					action: i.c.CLICK,
					state: s,
					searchOptions: e,
					pageLayer: t,
					subredditOrProfileIdentifier: void 0,
					key: n,
					postId: o,
					discoveryUnit: r
				}),
				B = function() {
					for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
					return e => n => ({
						...R(...t)(e)(n),
						noun: "ad"
					})
				},
				F = (e, t) => n => o => ({
					...e ? _(o, e, t) : {},
					source: O,
					action: i.c.CLICK,
					noun: r.ITEM_POST,
					post: b.I(o, n)
				}),
				G = (e, t, n, r) => {
					Object(p.a)(H(t, n, r)(e))
				},
				H = (e, t, n, r) => o => {
					const s = Object(l.c)(o, {
							postId: t
						}),
						c = s ? Object(m.b)(o, s) : void 0;
					return {
						...h(o, e, n, r),
						...c,
						source: O,
						action: i.c.CLICK,
						noun: "item_post_subreddit",
						post: b.I(o, t)
					}
				},
				V = () => ({
					id: "xd_focus_verticals",
					unitType: d.e.Listing,
					experiment: "",
					title: s.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: d.c.Large,
					surface: d.d.Frontpage,
					url: "gql.reddit.com"
				}),
				W = (e, t, n) => b.d(e, {
					position: n
				}),
				K = (e, t, n) => {
					const r = V();
					return e => ({
						...x(e, r),
						actionInfo: W(e, 0, n),
						subreddit: b.ib(e, t)
					})
				},
				q = (e, t, n) => {
					const r = V();
					return e => ({
						...S(e, r, t),
						actionInfo: W(e, 0, n)
					})
				},
				Y = (e, t, n) => {
					const o = V();
					return e => ({
						..._(e, o),
						actionInfo: W(e, 0, n),
						subreddit: b.ib(e, t) || null,
						source: O,
						action: i.c.VIEW,
						noun: r.ITEM_SUBREDDIT
					})
				},
				Q = (e, t, n) => {
					const o = V();
					return e => ({
						..._(e, o),
						actionInfo: W(e, 0, n),
						post: b.I(e, t) || null,
						source: O,
						action: i.c.CLICK,
						noun: r.ITEM_POST
					})
				},
				z = (e, t, n, o) => {
					const s = V();
					return e => ({
						..._(e, s),
						actionInfo: W(e, 0, o),
						subreddit: b.ib(e, n) || null,
						post: b.I(e, t) || null,
						source: O,
						action: i.c.CLICK,
						noun: r.ITEM_POST_SUBREDDIT
					})
				},
				X = (e, t, n) => {
					const o = V();
					return e => ({
						..._(e, o),
						actionInfo: W(e, 0, n),
						subreddit: b.ib(e, t) || null,
						source: O,
						action: i.c.CLICK,
						noun: r.ITEM_SUBREDDIT
					})
				},
				J = (e, t, n, o) => {
					const s = V();
					return e => ({
						..._(e, s),
						actionInfo: W(e, 0, n),
						subreddit: b.ib(e, t) || null,
						post: o ? b.I(e, o) : null,
						source: O,
						action: i.c.CLICK,
						noun: r.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				$ = (e, t, n, o) => {
					const s = V();
					return e => ({
						..._(e, s),
						actionInfo: W(e, 0, n),
						subreddit: b.ib(e, t) || null,
						post: o ? b.I(e, o) : null,
						source: O,
						action: i.c.CLICK,
						noun: r.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				Z = (e, t, n) => {
					const o = V();
					return e => ({
						..._(e, o),
						actionInfo: W(e, 0, n),
						subreddit: b.ib(e, t) || null,
						source: O,
						action: i.c.CLICK,
						noun: r.ITEM_SUBREDDIT_HIDE
					})
				},
				ee = (e, t, n) => {
					const o = V();
					return e => ({
						..._(e, o),
						actionInfo: W(e, 0, n),
						subreddit: b.ib(e, t) || null,
						source: O,
						action: i.c.CLICK,
						noun: r.HEADER_SUBREDDIT
					})
				},
				te = (e, t) => n => ({
					..._(n, e),
					...t && Object(m.b)(n, t),
					source: O,
					action: i.c.CLICK,
					noun: "item"
				}),
				ne = e => t => ({
					..._(t, e),
					source: O,
					action: i.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/helpers/trackers/inbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "w", (function() {
				return b
			})), n.d(t, "t", (function() {
				return f
			})), n.d(t, "r", (function() {
				return m
			})), n.d(t, "s", (function() {
				return p
			})), n.d(t, "p", (function() {
				return I
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "v", (function() {
				return g
			})), n.d(t, "y", (function() {
				return E
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "x", (function() {
				return S
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "m", (function() {
				return N
			})), n.d(t, "z", (function() {
				return C
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "o", (function() {
				return T
			})), n.d(t, "n", (function() {
				return y
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "i", (function() {
				return w
			})), n.d(t, "g", (function() {
				return P
			}));
			var r, o, s, i, c, a, d = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				l = n("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(r || (r = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.BlockAwarder = "block_awarder", e.DecreaseSubredditUpdates = "disable_frequent"
			}(o || (o = {})),
			function(e) {
				e.MiniInbox = "mini_inbox", e.Inbox = "inbox"
			}(s || (s = {})),
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
						type: o
					} = e;
					return e => ({
						...u.n(e),
						action: d.c.VIEW,
						noun: "inbox_notification",
						source: "inbox",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: o
						}
					})
				},
				f = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: o
					} = e;
					return e => ({
						...u.n(e),
						action: d.c.VIEW,
						noun: "notification",
						source: "in_app_notification",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: o
						}
					})
				},
				m = () => e => ({
					...u.n(e),
					action: d.c.RECEIVE,
					noun: "notification",
					source: "in_app_notification"
				}),
				p = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: o,
						awardId: s
					} = e;
					return e => {
						Object(l.a)({
							...u.n(e),
							action: "receive",
							noun: "inbox_notification",
							source: i.Inbox,
							inbox: {
								id: t,
								isClicked: n,
								isViewed: r
							},
							notification: {
								type: o
							},
							goldPurchase: {
								awardId: s
							}
						})
					}
				},
				I = e => {
					let {
						dnPromptAction: t
					} = e;
					return e => ({
						...u.n(e),
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
				O = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: o,
						awardId: s,
						position: i,
						postId: c,
						subredditId: a
					} = e;
					return e => ({
						...u.n(e),
						action: d.c.CLICK,
						noun: "inbox_notification",
						source: "inbox",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: o
						},
						goldPurchase: {
							awardId: s
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
						type: o,
						awardId: s,
						position: i,
						postId: c,
						subredditId: a
					} = e;
					return e => ({
						...u.n(e),
						action: d.c.CLICK,
						noun: "notification",
						source: "in_app_notification",
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: o
						},
						goldPurchase: {
							awardId: s
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
				x = e => {
					let {
						badgeCount: t,
						tab: n
					} = e;
					return e => ({
						...u.n(e),
						action: d.c.VIEW,
						noun: "inbox",
						source: i.Inbox,
						inbox: {
							badgeCount: t,
							tab: n
						}
					})
				},
				g = e => {
					let {
						badgeCount: t,
						tab: n
					} = e;
					return e => ({
						...u.n(e),
						action: d.c.VIEW,
						noun: "mini_inbox",
						source: i.Inbox,
						inbox: {
							badgeCount: t,
							tab: r.Activity
						}
					})
				},
				E = e => {
					let {
						badgeCount: t
					} = e;
					return e => ({
						...u.n(e),
						action: d.c.CLICK,
						noun: "inbox",
						source: i.Nav,
						inbox: {
							badgeCount: t
						}
					})
				},
				h = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: o,
						awardId: s
					} = e;
					return e => ({
						...u.n(e),
						action: d.c.CLICK,
						noun: "inbox_notification_overflow",
						source: i.Inbox,
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: o
						},
						goldPurchase: {
							awardId: s
						}
					})
				},
				S = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: o
					} = e;
					return e => ({
						...u.n(e),
						action: d.c.VIEW,
						noun: "inbox_notification_overflow",
						source: i.Inbox,
						inbox: {
							id: t,
							isClicked: n,
							isViewed: r
						},
						notification: {
							type: o
						}
					})
				};
			var j;
			! function(e) {
				e.Cats = "cats", e.Memes = "memes", e.Karma = "karma_free_subs", e.PN_perms = "pn_perms", e.Email_perms = "email_perms"
			}(j || (j = {}));
			const N = e => {
					let {
						actionInfoType: t,
						id: n,
						isClicked: r,
						isViewed: o,
						type: s
					} = e;
					return e => ({
						...u.n(e),
						action: d.c.CLICK,
						noun: "overflow_option",
						source: i.Inbox,
						inbox: {
							id: n,
							isClicked: r,
							isViewed: o
						},
						notification: {
							type: s
						},
						actionInfo: {
							...u.d(e),
							type: t
						}
					})
				},
				C = e => {
					let {
						actionInfoType: t,
						id: n,
						isClicked: r,
						isViewed: o,
						type: s
					} = e;
					return e => ({
						...u.n(e),
						action: d.c.UNDO,
						noun: "overflow_option",
						source: i.Inbox,
						inbox: {
							id: n,
							isClicked: r,
							isViewed: o
						},
						notification: {
							type: s
						},
						actionInfo: {
							...u.d(e),
							type: t
						}
					})
				},
				v = e => {
					let {
						actionInfoType: t
					} = e;
					return e => ({
						...u.n(e),
						action: d.c.CLICK,
						noun: "empty_state_cta",
						source: i.Inbox,
						actionInfo: {
							...u.d(e),
							type: t
						}
					})
				},
				T = e => t => ({
					...u.n(t),
					action: d.c.CLICK,
					noun: "notification_app_settings",
					source: i.Inbox,
					actionInfo: {
						...u.d(t),
						pageType: e
					}
				}),
				y = () => e => ({
					...u.n(e),
					action: d.c.CLICK,
					noun: "see_all",
					source: i.Inbox,
					actionInfo: {
						...u.d(e),
						pageType: s.MiniInbox
					}
				}),
				k = () => e => ({
					...u.n(e),
					action: d.c.CLICK,
					noun: "messages",
					source: i.Inbox
				}),
				w = e => {
					let {
						isMiniInbox: t
					} = e;
					return e => ({
						...u.n(e),
						action: d.c.CLICK,
						noun: "mark_all_as_read",
						source: i.Inbox,
						actionInfo: t ? {
							...u.d(e),
							pageType: s.MiniInbox
						} : {}
					})
				},
				P = (e, t) => n => ({
					...u.n(n),
					action: d.c.CLICK,
					noun: "policy_banner",
					source: i.Inbox,
					actionInfo: {
						...u.d(n),
						pageType: e,
						type: t
					}
				})
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return C
			})), n.d(t, "f", (function() {
				return T
			})), n.d(t, "q", (function() {
				return y
			})), n.d(t, "r", (function() {
				return k
			})), n.d(t, "o", (function() {
				return w
			})), n.d(t, "s", (function() {
				return P
			})), n.d(t, "c", (function() {
				return D
			})), n.d(t, "l", (function() {
				return L
			})), n.d(t, "p", (function() {
				return A
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "j", (function() {
				return R
			})), n.d(t, "g", (function() {
				return M
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
				return Q
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
				o = n.n(r),
				s = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makePostDraftPageKey/index.ts"),
				c = n("./src/reddit/constants/parameters.ts"),
				a = n("./src/reddit/constants/tracking.ts"),
				d = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				u = n("./src/reddit/helpers/routeKey/index.ts"),
				l = n("./src/reddit/helpers/trackers/postComposer.ts"),
				b = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				f = n("./src/reddit/models/Comment/index.ts"),
				m = n("./src/reddit/models/Post/index.ts"),
				p = n("./src/reddit/routes/subreddit/index.ts"),
				I = n("./src/reddit/selectors/profile.ts"),
				O = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/lib/makePostCreationPageKey/index.ts"),
				x = n("./src/lib/makeSearchKey/index.ts"),
				g = n("./src/reddit/helpers/correlationIdTracker.ts"),
				E = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				h = n("./src/reddit/helpers/trackers/searchResults.ts"),
				S = n("./src/reddit/selectors/postDraft.ts"),
				j = n("./src/reddit/selectors/telemetry.ts"),
				N = n("./src/telemetry/index.ts");
			const C = (e, t, n, r, a, l) => {
					const {
						route: I
					} = e, {
						name: O
					} = I.meta;
					if (!O) return;
					const g = t.platform.currentPage;
					switch (O) {
						case s.Nb.COMMENTS: {
							const {
								partialCommentId: o,
								partialPostId: s
							} = e.match.params, i = Object(m.w)(s), c = Object(u.a)(e, t, t.posts.models[i]);
							if (!c) return;
							const a = o && Object(f.h)(o),
								{
									sortToUse: l
								} = Object(d.a)(t, i);
							Object(N.a)(D(c, i, a, n, r, l)(t));
							break
						}
						case s.Nb.INDEX:
						case s.Nb.LISTING:
						case s.Nb.MULTIREDDIT:
						case s.Nb.SUBREDDIT: {
							const o = Object(u.c)(e, t);
							if (!o.listingKey) return;
							const {
								params: i,
								queryParams: c,
								path: a
							} = e.match, {
								sort: d = (o.sort ? o.sort : s.W.HOT)
							} = i, l = c.t, b = a === p.a;
							Object(N.a)(T({
								key: o.listingKey,
								sort: d,
								timerType: n,
								timerMillis: r,
								timeSort: l,
								isPredictionsPage: b
							})(t));
							break
						}
						case s.Nb.TOPIC: {
							const o = Object(u.c)(e, t);
							if (!o.listingKey) return;
							const {
								params: i
							} = e.match, c = o.sort ? o.sort : s.X, {
								sort: a = c
							} = i;
							Object(N.a)(T({
								key: o.listingKey,
								sort: a,
								timerType: n,
								timerMillis: r
							})(t));
							break
						}
						case s.Nb.PROFILE_OVERVIEW: {
							const o = Object(u.d)(e, t);
							if (!o) return;
							const {
								params: i,
								queryParams: c
							} = e.match, {
								sort: a = s.Eb
							} = i, d = c.t;
							Object(N.a)(y(o, a, n, r, d)(t));
							break
						}
						case s.Nb.PROFILE_POSTS: {
							const o = Object(u.d)(e, t);
							if (!o) return;
							const {
								queryParams: i
							} = e.match, {
								sort: c = s.Eb,
								t: a = s.Fb
							} = i;
							Object(N.a)(k(o, c, n, r, a)(t));
							break
						}
						case s.Nb.PROFILE_COMMENTS: {
							const o = Object(u.d)(e, t);
							if (!o) return;
							const {
								queryParams: i
							} = e.match, {
								sort: c = s.Eb,
								t: a = s.Fb
							} = i;
							Object(N.a)(w(o, c, n, r, a)(t));
							break
						}
						case s.Nb.PROFILE_PRIVATE: {
							const o = Object(u.d)(e, t);
							if (!o) return;
							Object(N.a)(P(o)(r, n)(t));
							break
						}
						case s.Nb.FOLLOWERS:
							B(t);
							break;
						case s.Nb.PROFILE_MODERATION:
							l && A(t, !0);
							break;
						case s.Nb.SETTINGS: {
							const o = e;
							Object(N.a)(q(n, r)(t)), o.match.params.page === s.dc.Profile && Object(b.l)(t);
							break
						}
						case s.Nb.POST_CREATION:
							if (l && a) {
								const e = Object(_.a)(a);
								Object(N.a)(L(e, n, r)(t))
							}
							break;
						case s.Nb.POST_DRAFT: {
							const {
								draftId: o
							} = e.match.params, s = Object(i.a)(e.match.params);
							if (!s) return;
							F(t, s, o, n, r);
							break
						}
						case s.Nb.SUBREDDIT_WIKI:
							Object(N.a)(X(n, r)(t));
							break;
						case s.Nb.COINS:
							Object(N.a)(G(n, r)(t)), Object(N.a)(H()(t));
							break;
						case s.Nb.PREMIUM:
							Object(N.a)(V(n, r)(t)), Object(N.a)(W()(t));
							break;
						case s.Nb.APPEAL:
							Object(N.a)(K(n, r)(t));
							break;
						case s.Nb.INBOX_PAGES:
							l && M(t);
							break;
						case s.Nb.MODERATION_PAGES:
							l && U(t, !0, a ? a.subredditName : null, a ? a.profileName : null);
							break;
						case s.Nb.COLLECTION_COMMENTS:
							l && ne(t, !0);
							break;
						case s.Nb.MODQUEUE_PAGES:
							l && R(t, a ? a.subredditName : null, a ? a.profileName : null);
							break;
						case s.Nb.SUBREDDIT_LEADERBOARD:
							l && Object(N.a)(z()(t));
							break;
						case s.Nb.SEARCH_RESULTS:
							if (l) {
								const s = Object(u.e)(e);
								if (!s) return;
								Object(N.a)(ee(s, Object(x.e)(o()(g && g.queryParams || {}, c.t)), n, r, g)(t))
							}
							break;
						case s.Nb.PUBLIC_ACCESS_NETWORK:
							l && Object(N.a)(Y()(t));
							break;
						case s.Nb.GEOTAGGING:
							l && Object(N.a)(J()(t));
							break;
						case s.Nb.SUBREDDIT_CREATION:
							l && Object(N.a)(Q()(t));
							break;
						case s.Nb.MOD_LISTING:
							l && re(t, !0)
					}
				},
				v = e => ({
					...j.n(e),
					userPreferences: j.qb(e)
				}),
				T = e => {
					let {
						key: t,
						sort: n,
						timerType: r,
						timerMillis: o,
						timeSort: s,
						flairTitle: i,
						isPredictionsPage: c
					} = e;
					return e => {
						const {
							api: a
						} = e.listings.postOrder, d = !a.error[t] && !a.pending[t], u = c ? {
							paneName: "predictions",
							reason: "predictions_tournament"
						} : {};
						return {
							source: "global",
							action: "view",
							noun: "screen",
							...v(e),
							actionInfo: j.d(e, {
								success: d,
								...u
							}),
							customFeed: j.l(e),
							listing: j.y(e, t, {
								sort: n,
								sortTime: s
							}),
							subreddit: j.hb(e),
							timer: j.nb(r, o),
							userSubreddit: j.rb(e),
							adblock: j.e(e),
							postFlair: {
								title: i
							},
							predictions: c ? Object(j.P)(e) : void 0
						}
					}
				},
				y = (e, t, n, r, o) => s => {
					const i = j.y(s, e);
					i && (i.sort = t, o && (i.sortTime = o));
					const {
						api: c
					} = s.listings.postOrder, a = !c.error[e] && !c.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						...v(s),
						actionInfo: j.d(s, {
							success: a
						}),
						profile: j.R(s),
						snoovatar: j.eb(s),
						subreddit: j.hb(s),
						timer: j.nb(n, r),
						userSubreddit: j.rb(s),
						adblock: j.e(s)
					}
				},
				k = (e, t, n, r, o) => s => {
					const i = j.y(s, e);
					i && (i.sort = t, o && (i.sortTime = o));
					const {
						api: c
					} = s.listings.postOrder, a = !c.error[e] && !c.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						...v(s),
						actionInfo: j.d(s, {
							success: a
						}),
						profile: j.R(s),
						subreddit: j.hb(s),
						timer: j.nb(n, r),
						userSubreddit: j.rb(s),
						adblock: j.e(s)
					}
				},
				w = (e, t, n, r, o) => s => {
					const i = j.U(s, e);
					i && (i.sort = t, o && (i.sortTime = o));
					const {
						api: c
					} = s.profileCommentsPage, a = !c.error[e] && !c.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						...v(s),
						actionInfo: j.d(s, {
							success: a
						}),
						profile: j.R(s),
						subreddit: j.hb(s),
						timer: j.nb(n, r),
						userSubreddit: j.rb(s),
						adblock: j.e(s)
					}
				},
				P = e => (t, n) => r => {
					const o = !r.profilePrivatePage.api.error[e] && !r.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...v(r),
						actionInfo: j.d(r, {
							success: o
						}),
						profile: j.R(r),
						subreddit: j.hb(r),
						timer: j.nb(n, t),
						userSubreddit: j.rb(r),
						adblock: j.e(r)
					}
				},
				D = (e, t, n, r, o, s) => i => {
					const {
						api: c
					} = i.pages.comments, a = !c.error[e] && !c.pending[e], d = {
						source: "global",
						action: "view",
						noun: "screen",
						...v(i),
						actionInfo: j.d(i, {
							success: a
						}),
						post: j.I(i, t),
						profile: j.R(i),
						subreddit: j.hb(i),
						timer: j.nb(r, o),
						userSubreddit: j.rb(i),
						adblock: j.e(i),
						postEvent: j.L(i, {
							postId: t
						}),
						postCollection: j.K(i, {
							postId: t
						}),
						listing: j.y(i, void 0, {
							sort: s
						})
					};
					return n && (d.comment = j.h(i, n)), d
				},
				L = (e, t, n) => r => {
					const o = r.creations.api.page.fetched[e],
						s = r.platform.currentPage ? r.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...v(r),
						actionInfo: j.d(r, {
							success: o
						}),
						post: s ? j.I(r, s) : void 0,
						subreddit: j.hb(r),
						timer: j.nb(t, n),
						userSubreddit: j.rb(r),
						adblock: j.e(r)
					}
				},
				A = (e, t) => {
					Object(N.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...v(e),
						actionInfo: j.d(e, {
							success: t
						})
					})
				},
				U = (e, t, n, r) => {
					Object(N.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...v(e),
						actionInfo: j.d(e, {
							success: t
						}),
						profile: j.S(e, Object(I.m)(e, r)),
						subreddit: j.ib(e, Object(O.G)(e, n)),
						userSubreddit: j.rb(e),
						adblock: j.e(e)
					})
				},
				R = (e, t, n) => {
					Object(N.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...v(e),
						profile: j.S(e, Object(I.m)(e, n)),
						subreddit: j.ib(e, Object(O.G)(e, t)),
						userSubreddit: j.rb(e),
						adblock: j.e(e)
					})
				},
				M = e => {
					Object(N.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...v(e),
						actionInfo: j.d(e)
					})
				},
				B = e => {
					Object(N.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...v(e),
						actionInfo: j.d(e)
					})
				},
				F = (e, t, n, r, o) => {
					const s = e.creations.api.page.pending[t],
						i = !e.creations.api.page.error[t] && !s && !!n,
						c = Object(S.h)(e, n);
					Object(N.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...v(e),
						actionInfo: j.d(e, {
							success: i
						}),
						subreddit: j.hb(e),
						timer: j.nb(r, o),
						userSubreddit: j.rb(e),
						adblock: j.e(e),
						...c ? Object(l.r)(e, c) : {}
					})
				},
				G = (e, t) => n => ({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(g.c)(g.a.GoldPayment),
					...v(n),
					timer: j.nb(e, t),
					adblock: j.e(n)
				}),
				H = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...v(e)
				}),
				V = (e, t) => n => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(g.c)(g.a.GoldPayment),
					...v(n),
					timer: j.nb(e, t),
					adblock: j.e(n)
				}),
				W = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...v(e)
				}),
				K = (e, t) => n => ({
					source: "appeal",
					action: "view",
					noun: "page",
					...v(n),
					timer: j.nb(e, t)
				}),
				q = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					...v(n),
					timer: j.nb(e, t)
				}),
				Y = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: j.hb(e),
					...v(e)
				}),
				Q = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...v(e)
				}),
				z = () => e => ({
					action: "view",
					source: "global",
					noun: "screen",
					...v(e)
				}),
				X = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					...v(n),
					customFeed: j.l(n),
					subreddit: j.hb(n),
					timer: j.nb(e, t),
					userSubreddit: j.rb(n),
					adblock: j.e(n)
				}),
				J = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...v(e)
				}),
				$ = {
					source: "global",
					action: a.c.VIEW,
					noun: "screen"
				},
				Z = e => !!e && {
					correlationId: Object(g.c)(g.a.SearchResults)
				},
				ee = (e, t, n, r, o, i) => c => {
					var a, d;
					let u = !0;
					if (t.type.indexOf(s.cc.Posts) > -1) {
						const {
							api: t
						} = c.listings.listingOrder;
						u = u && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(s.cc.Subreddits) > -1 || t.type.indexOf(s.cc.Users) > -1) {
						const {
							api: t
						} = c.listings.postOrder;
						u = u && !t.error[e] && !t.pending[e]
					}
					const l = j.G(c, o);
					return {
						...h.g(c, t),
						...$,
						...j.n(c),
						actionInfo: j.d(c, {
							success: u,
							paneName: l
						}),
						timer: j.nb(n, r),
						search: {
							...j.ab(c, t, E.a.SERP, !0, o || void 0),
							sort: null !== (a = t.sort) && void 0 !== a ? a : s.Qb,
							range: null !== (d = t.t) && void 0 !== d ? d : s.Rb
						},
						...Z(i),
						userPreferences: j.cb(c)
					}
				},
				te = (e, t, n) => r => ({
					...j.n(r),
					...$,
					actionInfo: {
						...j.d(r),
						pageType: "search_dropdown"
					},
					search: {
						...j.ab(r, e, E.a.Typeahead, !0, t || void 0)
					},
					...Z(n),
					userPreferences: j.cb(r)
				}),
				ne = (e, t) => {
					Object(N.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...v(e),
						actionInfo: j.d(e, {
							success: t
						})
					})
				},
				re = (e, t) => {
					Object(N.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...v(e),
						actionInfo: j.d(e, {
							success: t
						})
					})
				}
		},
		"./src/reddit/helpers/trackers/socialLinks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "f", (function() {
				return l
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const s = e => {
					let {
						socialLinkType: t,
						outboundUrl: n,
						name: r,
						position: o,
						isNew: s,
						currentList: i
					} = e;
					return {
						socialLink: {
							type: t.toLowerCase(),
							url: n,
							name: r,
							position: o,
							isNew: s,
							currentList: i
						}
					}
				},
				i = e => t => ({
					...Object(o.n)(t),
					action: r.c.CLICK,
					noun: "add_social_link",
					source: e
				}),
				c = e => t => ({
					...Object(o.n)(t),
					action: r.c.CLICK,
					noun: "social_link",
					source: "add_social_link",
					...s({
						socialLinkType: e
					})
				}),
				a = e => t => ({
					...Object(o.n)(t),
					action: r.c.CLICK,
					noun: "save",
					source: "add_social_link",
					...s(e)
				}),
				d = e => t => ({
					...Object(o.n)(t),
					action: r.c.CLICK,
					noun: "edit_social_link",
					source: "profile_settings",
					...s(e)
				}),
				u = e => t => ({
					...Object(o.n)(t),
					action: r.c.CLICK,
					noun: "delete_social_link",
					source: "profile_settings",
					...s(e)
				}),
				l = e => t => ({
					...Object(o.n)(t),
					action: r.c.CLICK,
					noun: "social_link",
					source: "profile",
					profile: Object(o.R)(t),
					...s(e)
				})
		},
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "f", (function() {
				return b
			}));
			var r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const s = e => t => ({
					source: e,
					noun: "create_community_button",
					action: "click",
					...o.n(t),
					actionInfo: o.d(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(r.d)(r.a.SubredditCreation, !0)
				}),
				i = (e, t, n) => s => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...o.n(s),
					actionInfo: o.d(s, {
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
					...o.n(e),
					actionInfo: o.d(e),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				a = (e, t) => n => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...o.n(n),
					actionInfo: o.d(n, {
						reason: e,
						settingValue: t
					}),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				d = () => e => ({
					source: "user_dropdown",
					noun: "create_community",
					action: "click",
					...o.n(e),
					actionInfo: o.d(e)
				}),
				u = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "view",
					...o.n(e),
					actionInfo: o.d(e)
				}),
				l = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "click",
					...o.n(e),
					actionInfo: o.d(e)
				}),
				b = () => e => ({
					source: "community_first_post",
					noun: "modal",
					action: "dismiss",
					...o.n(e),
					actionInfo: o.d(e)
				})
		},
		"./src/reddit/hooks/useIntersectionObserver.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js");
			t.a = function(e, t, n) {
				Object(r.useEffect)(() => {
					const r = e && e.current;
					if (!r || "undefined" == typeof IntersectionObserver) return;
					const o = new IntersectionObserver(t, n);
					return o.observe(r), () => {
						o.unobserve(r)
					}
				}, [e, t, n])
			}
		},
		"./src/reddit/hooks/useOutboundClickTracking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var r = n("./src/reddit/components/TrackingHelper/index.tsx");
			const o = /^https?:\/\/([\w\.\-]+\.)?(reddit(media|static)?\.com|redd\.it)(\/|$)/;
			var s = n("./src/reddit/helpers/trackers/socialLinks.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const c = (e, t, n, r, o) => c => {
				const a = {
					noun: "outbound_link",
					action: "click",
					source: "link",
					...Object(i.n)(c),
					actionInfo: Object(i.d)(c),
					geo: Object(i.s)(c),
					screen: Object(i.Z)(c),
					subreddit: Object(i.hb)(c),
					outbound: Object(i.F)(c, e, t, r, n)
				};
				return n && (a.comment = Object(i.h)(c, n)), r && (a.post = Object(i.I)(c, r)), o && (a.socialLink = Object(s.g)({
					socialLinkType: o
				}).socialLink), a
			};
			var a = n("./src/lib/serviceWorker/index.ts"),
				d = n("./node_modules/react-redux/es/index.js"),
				u = n("./src/telemetry/helpers/getSerializedThriftJSON.ts"),
				l = n("./src/telemetry/helpers/getSignatureHeader.ts"),
				b = n("./src/telemetry/models/Event.ts");
			const f = () => {
				const e = Object(d.f)();
				return t => {
					const n = t(e.getState()),
						r = b.g(n),
						o = Object(u.a)(r),
						s = Object(l.b)(o);
					Object(a.b)("sendV2EventsData", {
						data: o,
						headers: s
					})
				}
			};

			function m() {
				const e = Object(r.b)(),
					t = f();
				return (n, r, s, i, a) => {
					var d, u;
					if (r && function(e) {
							return !e.startsWith("/") && null == e.match(o)
						}(n)) {
						const o = c(n, r, s, i, a);
						(null === (u = null === (d = null === window || void 0 === window ? void 0 : window.navigator) || void 0 === d ? void 0 : d.serviceWorker) || void 0 === u ? void 0 : u.controller) ? t(o): e(o)
					}
				}
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = r.fb
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = r.b
		},
		"./src/reddit/icons/fonts/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
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
				return o.a.createElement("i", c({
					className: Object(s.a)(t, Object(i.b)(r, n))
				}, a))
			};
			a.displayName = "Icon";
			const d = (e, t) => n => o.a.createElement(a, c({
				name: e
			}, t, n, {
				isFilled: (null == t ? void 0 : t.isFilled) || (null == n ? void 0 : n.isFilled),
				className: Object(s.a)(null == t ? void 0 : t.className, null == n ? void 0 : n.className)
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
				o = n.n(r),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/PresenceCircle/index.m.less"),
				c = n.n(i);
			t.a = Object(r.forwardRef)((e, t) => {
				let {
					className: n,
					isHighlighted: r,
					outlineClassName: i
				} = e;
				return o.a.createElement("svg", {
					className: Object(s.a)(c.a.defaultInactiveState, n),
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg",
					width: "12",
					height: "12",
					ref: t
				}, o.a.createElement("circle", {
					cx: "6",
					cy: "6",
					r: "4"
				}), o.a.createElement("path", {
					className: Object(s.a)(c.a.outline, i, {
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
				o = n.n(r);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 320 320",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "m124.91 237.79c-53.47 32.9-28.3 109.77-9.81 76.9"
			}), o.a.createElement("path", {
				d: "m115.13 314.7a9.86 9.86 0 0 1 -1.44 3l-.85 1.22c-.34.4-.68.85-1.09 1.28a11.46 11.46 0 0 1 -3 2.34 7.26 7.26 0 0 1 -4.16.82 8.13 8.13 0 0 1 -3.86-1.63 14 14 0 0 1 -2.64-2.62 26.58 26.58 0 0 1 -1.7-2.45c-3.11-5.09-4.59-11.37-5.16-17.65a66.18 66.18 0 0 1 6.12-33.55 69 69 0 0 1 3.7-6.66 68.22 68.22 0 0 1 4.3-5.93 62.51 62.51 0 0 1 9.65-9.4 61.54 61.54 0 0 1 9.62-6.13c-2.15 2.3-5.35 5.36-8.11 8.41s-5.19 6-6.61 7.42a56.91 56.91 0 0 0 -7.33 9.28 58.25 58.25 0 0 0 -5 10 60.67 60.67 0 0 0 -4 20 53 53 0 0 0 2.33 17.65 28.76 28.76 0 0 0 3.32 7.14c1.39 2 3.15 3.76 5.17 4.28a5.79 5.79 0 0 0 3.36-.19 11.09 11.09 0 0 0 3.45-2.14 29.87 29.87 0 0 0 3.93-4.49z"
			}), o.a.createElement("path", {
				d: "m194.69 240.89c45.74 25.85 23.37 107.54 4.1 73.8"
			}), o.a.createElement("path", {
				d: "m198.81 314.67a17 17 0 0 1 2 2.41 16.1 16.1 0 0 0 4.54 4.16 6.1 6.1 0 0 0 3.23.79 5.88 5.88 0 0 0 3-1.15 12.67 12.67 0 0 0 3.58-4.37c2.39-4.65 3.64-10.3 4.24-16a71.58 71.58 0 0 0 -.3-17 66.16 66.16 0 0 0 -9-25.89 54.68 54.68 0 0 0 -15.7-16.28 30.16 30.16 0 0 1 10.19 5 29.29 29.29 0 0 1 7.11 7.13 68.35 68.35 0 0 1 8.62 21.25 81.56 81.56 0 0 1 2 19.91 58.88 58.88 0 0 1 -2.83 17.4 27.36 27.36 0 0 1 -3.67 7.28 13.8 13.8 0 0 1 -2.85 2.86 7.81 7.81 0 0 1 -3.8 1.51 6.82 6.82 0 0 1 -4.21-1 11.92 11.92 0 0 1 -3.25-3 24.69 24.69 0 0 1 -2.9-5.01z"
			}), o.a.createElement("path", {
				d: "m125.46 236.86c32.07-45.32 77.78-13.73 79.92 56.7-.5 46.56-23 35.27-51.14 35.27s-42.05 9.17-44.66-24.83c-1.5-19.46-.66-20.87 3.28-33"
			}), o.a.createElement("path", {
				d: "m112.89 271a23.38 23.38 0 0 1 -.68 2.76c-.41 1.47-1 3.44-1.61 5.81a38.08 38.08 0 0 0 -1.14 8.22c-.12 3.08.07 6.43.29 9.9.51 6.92 1 14.41 3.16 20.71a16.43 16.43 0 0 0 4.9 7.54 13.56 13.56 0 0 0 6.7 2.65 56.37 56.37 0 0 0 11.6-.1c4-.32 8-.71 12.18-.92a124.9 124.9 0 0 1 12.55-.09c4.2.16 8.4.49 12.56.7 2.08.1 4.15.18 6.2.15a40.17 40.17 0 0 0 6.05-.44 22.51 22.51 0 0 0 5.6-1.55 14.89 14.89 0 0 0 4.6-3.17 17.38 17.38 0 0 0 3.27-4.6l.33-.64.29-.67.56-1.34c.3-.93.65-1.84.9-2.79a62.06 62.06 0 0 0 1.9-11.66 108.3 108.3 0 0 0 -.63-20.6 130.55 130.55 0 0 0 -3.86-20 94.18 94.18 0 0 0 -7.15-18.4 59.18 59.18 0 0 0 -11-15.23c-4.38-4.24-9.48-7.58-15-9a27.57 27.57 0 0 0 -16.33.49 39.21 39.21 0 0 0 -13.41 7.9 74.8 74.8 0 0 0 -9.76 10.58 61.55 61.55 0 0 1 8.78-11.74 39.25 39.25 0 0 1 14.45-9.6 31.64 31.64 0 0 1 8.59-1.83h2.12a13 13 0 0 1 2.08.09 28.29 28.29 0 0 1 3.93.63 31.93 31.93 0 0 1 11.28 5.06 50.46 50.46 0 0 1 12 12.46 74.93 74.93 0 0 1 7.89 14.59 117.86 117.86 0 0 1 7.81 30.35c.15 1.25.31 2.5.46 3.75s.22 2.49.32 3.73c.26 2.48.3 5 .43 7.41a34.56 34.56 0 0 1 0 3.67c0 1.22-.07 2.44-.16 3.64s-.14 2.41-.28 3.6-.23 2.38-.43 3.56-.34 2.36-.6 3.52-.51 2.32-.82 3.46a16.49 16.49 0 0 1 -.52 1.69c-.19.56-.36 1.12-.57 1.68a32.08 32.08 0 0 1 -1.48 3.21 19.92 19.92 0 0 1 -4.28 5.58 18.29 18.29 0 0 1 -6 3.5 37.52 37.52 0 0 1 -13.18 1.66c-4.33-.07-8.53-.42-12.65-.67s-8.17-.43-12.14-.36-7.88.29-11.73.58-7.66.61-11.47.63a34.51 34.51 0 0 1 -5.73-.4 17.16 17.16 0 0 1 -5.52-1.82 13.8 13.8 0 0 1 -4.34-3.84 19.11 19.11 0 0 1 -2.64-4.9 44.16 44.16 0 0 1 -2.39-10.24c-.44-3.22-.63-7-.81-11a93.65 93.65 0 0 1 .09-12 37.54 37.54 0 0 1 .92-5.5c.42-1.71.94-3.25 1.4-4.62.96-2.66 1.74-4.74 2.12-5.74z"
			}), o.a.createElement("path", {
				d: "m229 74.81c-1 .47-5.78-2.28-11.24-5.44s-11.7-6.6-15.42-7.94c-3.26-1.22-6.62-2.41-10-3.36a43 43 0 0 0 -4.93-1.07 13.89 13.89 0 0 0 -4.19-.08 3.6 3.6 0 0 0 -1.2.4c-.13.08-.17.17-.27.22s-.12.11-.14.24l-1 1.75c-.42.78-.91 1.53-1.29 2.34-.8 1.58-1.62 3.14-2.3 4.75s-1.34 3.2-2 4.78c-4.19 11.17-6.17 23.06-7.52 34.18s-2.05 21.46-3.05 29.85a36 36 0 0 1 -3.83-6.41 58 58 0 0 1 -2.89-7.72c-1.5-5.24-2.06-10.33-1.53-13a266.73 266.73 0 0 1 7.37-29.3 114.2 114.2 0 0 1 10.81-24.11l.39-.67.2-.33.09-.17.16-.2a8.58 8.58 0 0 1 1.33-1.56l.78-.69.86-.53a9.4 9.4 0 0 1 1.8-.83 15.64 15.64 0 0 1 6.86-.52 44.74 44.74 0 0 1 11.26 3.14 87 87 0 0 1 17.63 9.78c4.93 3.27 11.92 10.94 13.26 12.5z"
			}), o.a.createElement("path", {
				d: "m105.63 128c-43.28-20.15-74.18 36.54-30.75 61.74"
			}), o.a.createElement("path", {
				d: "m74.86 189.75c-.5 0-4.4-2-8.31-5.22-.94-.85-2-1.65-2.88-2.59s-1.82-1.86-2.61-2.82-1.51-1.9-2.15-2.77-1.13-1.7-1.57-2.38a32.77 32.77 0 0 1 -5-17.32 36.58 36.58 0 0 1 1.3-9.37c.22-.76.5-1.49.74-2.24l.39-1.1.47-1.07c.33-.7.62-1.42 1-2.11s.76-1.33 1.13-2a34 34 0 0 1 24.86-16.35 36.14 36.14 0 0 1 13.32.9 42.71 42.71 0 0 1 10.39 4.17c-3.08-.41-7.27-1.42-11.25-1.59a81.76 81.76 0 0 0 -9.48-.06 29.42 29.42 0 0 0 -11 2.08 30.48 30.48 0 0 0 -9.21 5.75 31.36 31.36 0 0 0 -8.27 34 38.69 38.69 0 0 0 7.82 12.76 66.35 66.35 0 0 0 5.7 5.64 36 36 0 0 0 2.84 2.34z"
			}), o.a.createElement("path", {
				d: "m254.61 176.52c30.45-26.89-2.76-71.55-39.71-54.67"
			}), o.a.createElement("path", {
				d: "m214.89 121.83a9.6 9.6 0 0 1 2.48-1.41 20.3 20.3 0 0 1 2.51-1l1.47-.51c.5-.18 1.05-.27 1.59-.42a28.32 28.32 0 0 1 3.37-.69 28.71 28.71 0 0 1 3.38-.39 46.61 46.61 0 0 1 5.63 0 34.21 34.21 0 0 1 15.32 4.6l1.79 1.09c.59.37 1.13.81 1.7 1.22a35.6 35.6 0 0 1 8.53 8.92 32.62 32.62 0 0 1 5.34 12.84 30.43 30.43 0 0 1 -.56 13.24 31.13 31.13 0 0 1 -5.33 10.68 36.88 36.88 0 0 1 -7.12 7c1.37-2.44 3.58-5.54 5.05-8.73.43-.76.7-1.59 1-2.31.16-.38.35-.73.49-1.09l.38-1c.24-.68.53-1.28.72-1.84a13.79 13.79 0 0 1 .52-1.42 26.43 26.43 0 0 0 .49-19 31.61 31.61 0 0 0 -4.13-8 35.33 35.33 0 0 0 -5.79-6.19c-.52-.45-1.08-.83-1.62-1.24a15 15 0 0 0 -1.64-1.14l-1.68-1-1.72-.88-.85-.44c-.28-.13-.58-.24-.87-.36l-1.73-.71c-.58-.21-1.17-.37-1.74-.56a17.9 17.9 0 0 0 -1.73-.5 40.08 40.08 0 0 0 -13.23-.93c-.49.06-1 .1-1.6.14l-1.76.27c-.6.09-1.23.15-1.84.26l-1.81.39c-.59.13-1.17.22-1.7.37l-1.46.41z"
			}), o.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z"
			}), o.a.createElement("path", {
				d: "m159.25 111.23c-48.61-.37-93.95 27.23-96.18 72.22-1.87 83.41 194.24 83.41 192.37 0 0-48.33-44.72-72.22-96.19-72.22z",
				fill: "none"
			}), o.a.createElement("path", {
				d: "m159.25 111.2a100.82 100.82 0 0 1 14.86.32 130.39 130.39 0 0 1 30.18 6.06 97.07 97.07 0 0 1 16.43 7.17 78.93 78.93 0 0 1 14.49 10.25 63.78 63.78 0 0 1 16.79 23.82 67.61 67.61 0 0 1 4.45 19.57c.13 1.7.15 3.4.22 5.11v3.89l-.11 1.3-.22 2.61-.42 2.6a23.2 23.2 0 0 1 -.54 2.58c-.22.85-.37 1.72-.67 2.56a49.79 49.79 0 0 1 -4.15 9.79 56.7 56.7 0 0 1 -6.2 8.74 68 68 0 0 1 -7.75 7.43 78.42 78.42 0 0 1 -8.81 6.14c-12.32 7.38-26.19 11.74-40.07 14.24a168.29 168.29 0 0 1 -41.54 2.05 148 148 0 0 1 -34.89-6.69c-11.22-3.67-22-9-31-16.58a56.52 56.52 0 0 1 -11.6-13.16 48.93 48.93 0 0 1 -6.51-16.08 50.29 50.29 0 0 1 -.46-17 66.24 66.24 0 0 1 4.18-16 70.76 70.76 0 0 1 18.09-25.69 90.75 90.75 0 0 1 24.8-15.93 101.47 101.47 0 0 1 13.06-4.78 112.2 112.2 0 0 1 12.93-3c2.12-.41 4.24-.65 6.32-1s4.15-.47 6.2-.57c4.08-.33 8.06-.33 11.91-.29a142.44 142.44 0 0 0 -24.22 3.34 117.79 117.79 0 0 0 -26.52 9.42 92.75 92.75 0 0 0 -21.58 14.9 77.13 77.13 0 0 0 -12.25 14.6 62.07 62.07 0 0 0 -9.53 25.39 45.71 45.71 0 0 0 3.46 25.86 53.67 53.67 0 0 0 16.28 19.83 87.52 87.52 0 0 0 22.14 12.14 129.68 129.68 0 0 0 23.75 6.56 160.17 160.17 0 0 0 23.78 2.47 157.94 157.94 0 0 0 45.17-5.1 113.68 113.68 0 0 0 20.3-7.54 86.22 86.22 0 0 0 9.16-5.19 73.68 73.68 0 0 0 8.22-6.24 52.36 52.36 0 0 0 12.26-15.71l.56-1.09.48-1.13c.3-.76.64-1.5.92-2.26a44.84 44.84 0 0 0 1.41-4.63 46.94 46.94 0 0 0 1.37-9.46c0-1.59.08-3.16 0-4.75s-.07-3.17-.26-4.72l-.21-2.34c-.09-.77-.23-1.54-.34-2.3s-.22-1.54-.37-2.3l-.49-2.25a58.73 58.73 0 0 0 -6.56-16.8 63.59 63.59 0 0 0 -10.77-13.72 74.79 74.79 0 0 0 -13.46-10.24 100.84 100.84 0 0 0 -16.3-7.81 122.86 122.86 0 0 0 -19-5.41 160 160 0 0 0 -27.37-2.98z"
			}), o.a.createElement("circle", {
				cx: "238.47",
				cy: "80.13",
				r: "22.93"
			}), o.a.createElement("path", {
				d: "m261.37 80.13a5.12 5.12 0 0 1 -.27-1.29c-.06-.34-.08-.75-.17-1.2s-.19-1-.3-1.5a23.88 23.88 0 0 0 -3.12-7.61 22.56 22.56 0 0 0 -6.59-6.71 20 20 0 0 0 -7.06-2.93 22.12 22.12 0 0 0 -19.67 5.49 21.36 21.36 0 0 0 -5.7 9 20.88 20.88 0 0 0 -.7 10.29 21.16 21.16 0 0 0 9.47 14.18 21.55 21.55 0 0 0 16.06 2.92 21.77 21.77 0 0 0 12.8-8.08 23.8 23.8 0 0 0 3.39-6.16 26 26 0 0 0 1.32-6.35 19.06 19.06 0 0 1 .12 6.81 21.83 21.83 0 0 1 -8.21 13.51 18.67 18.67 0 0 1 -5.13 2.82 24.34 24.34 0 0 1 -8.2 1.31 24.84 24.84 0 0 1 -7.83-1.26 25.86 25.86 0 0 1 -6.77-3.5 25 25 0 0 1 -5.2-5.16 23.4 23.4 0 0 1 -3.35-6.21 25 25 0 0 1 -1-3.32c-.13-.56-.18-1.12-.28-1.68l-.12-.84c0-.28 0-.56-.05-.84 0-.56 0-1.12-.07-1.68s.05-1.11.08-1.66a11.26 11.26 0 0 1 .17-1.64c.09-.54.15-1.09.26-1.62a25.58 25.58 0 0 1 2.15-6 24.56 24.56 0 0 1 5.71-7.24c.37-.34.79-.62 1.18-.93a11.19 11.19 0 0 1 1.21-.87 23.57 23.57 0 0 1 21.4-2.45 23 23 0 0 1 8.39 5.48 22 22 0 0 1 6.08 14.14c.11 1.26 0 2.29 0 2.78z"
			})))
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return a
			}));
			var r, o, s, i, c = n("./src/reddit/models/FeedElement/index.ts");

			function a(e) {
				return e.__typename === c.a.InboxNotificationCollection
			}! function(e) {
				e.AwardReceived = "AWARD_RECEIVED", e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.ChatRequest = "CHAT_REQUEST", e.ChatAcceptInvite = "CHAT_ACCEPT_INVITE", e.CommentFollow = "COMMENT_FOLLOW", e.CommentReply = "COMMENT_REPLY", e.HFNSubredditInterestingPost = "SUBREDDIT_UPDATES_INTERESTING_POST", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.ModeratedSrViralCommentPost = "MODERATED_SR_VIRAL_COMMENT_POST", e.OneOff = "ONE_OFF", e.PostFollow = "POST_FOLLOW", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.RedditLore = "REDDIT_LORE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.TalkLive = "TALK_LIVE", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER"
			}(r || (r = {})),
			function(e) {
				e.Award = "AWARD", e.Bell = "BELL", e.Chat = "CHAT", e.Comment = "COMMENT", e.Heart = "HEART", e.Live = "LIVE", e.Lore = "LORE", e.NotifyAll = "NOTIFY_ALL", e.Redditor = "REDDITOR", e.Reply = "REPLY", e.SortLive = "SORT_LIVE", e.SortRising = "SORT_RISING", e.SortTop = "SORT_TOP", e.Trophy = "TROPHY", e.Upvote = "UPVOTE"
			}(o || (o = {})),
			function(e) {
				e.CopyrightTakedown = "COPYRIGHT_TAKEDOWN", e.ContentTakedown = " CONTENT_TAKEDOWN", e.Author = "AUTHOR", e.Moderator = "MODERATOR", e.CommunityOps = "COMMUNITY_OPS", e.AntiEvilOps = "ANTI_EVIL_OPS", e.Reddit = "REDDIT", e.Deleted = "DELETED", e.AutomodFiltered = "AUTOMOD_FILTERED"
			}(s || (s = {})),
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
				return f
			})), n.d(t, "a", (function() {
				return m
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				c = n("./src/reddit/helpers/matchRedditUrls/index.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				d = n("./src/reddit/selectors/user.ts");
			const u = () => !0,
				l = Object(r.a)(d.X, d.O, (e, t) => !(e || t)),
				b = e => {
					if (!l(e)) return;
					const t = Object(i.c)(e, {
						experimentEligibilitySelector: u,
						experimentName: s.Vd,
						expEventOverride: !1
					});
					return null == t ? void 0 : t.toLocaleLowerCase()
				},
				f = e => {
					var t;
					const n = b(e);
					if (!n) return !1;
					let r = Object(a.r)(e),
						s = Object(a.d)(e);
					if ("undefined" != typeof window && !s) {
						const e = Object(c.a)("subreddit", window.location.href);
						(s = null === (t = null == e ? void 0 : e.components) || void 0 === t ? void 0 : t.subredditName) && (r = o.Nb.SUBREDDIT)
					}
					if (s && n) {
						const e = (null == s ? void 0 : s.toLocaleLowerCase()) === n;
						return r === o.Nb.SUBREDDIT && e
					}
					return !1
				},
				m = e => !!b(e) && Object(i.c)(e, {
					experimentEligibilitySelector: l,
					experimentName: s.Wd,
					expEventOverride: !1
				}) !== s.Xd.Readonly
		},
		"./src/reddit/selectors/experiments/newCommunityProgressV3.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return I
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/constants/posts.ts"),
				c = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				d = n("./src/reddit/selectors/experiments/utils.ts"),
				u = n("./src/reddit/selectors/moderatorPermissions.ts"),
				l = n("./src/reddit/selectors/platform.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/reddit/selectors/user.ts");
			const m = e => e.subreddits.progressModule,
				p = e => {
					const t = Object(l.c)(e);
					if (!t) return;
					if (!Object(u.n)(e, {
							subredditId: t
						})) return;
					if (Object(f.N)(e)) return I(e);
					const n = Object(b.J)(e, {
						identifier: {
							id: t,
							type: i.a.SUBREDDIT
						}
					});
					if (!n || !n.created) return;
					const r = n.created;
					return r ? r * o.Sb < 1639443600180 ? void 0 : I(e) : void 0
				},
				I = Object(r.a)(e => Object(c.c)(e, {
					experimentName: s.ue,
					experimentEligibilitySelector: a.e
				}), d.a)
		},
		"./src/reddit/selectors/experiments/profileAvatarChangeFix.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const s = Object(o.a)(r.v)
		},
		"./src/reddit/selectors/notificationPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "g", (function() {
				return s
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
				o = e => e.user.notificationPrefs.api.getPreferences.pending,
				s = e => e.user.notificationPrefs.api.setPreferences.pending,
				i = e => e.user.notificationPrefs.preferences,
				c = e => e.user.notificationPrefs.isNotificationPromptVisible,
				a = (e, t) => {
					var n, r;
					const o = (e => e.user.notificationPrefs.pushSettingsLayout)(e),
						s = null === (n = null == o ? void 0 : o.rows) || void 0 === n ? void 0 : n.byId;
					return s && (null === (r = s[t]) || void 0 === r ? void 0 : r.isEnabled)
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
				return u
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			}));
			var r = n("./src/lib/notifications/constants.ts"),
				o = n("./src/reddit/actions/notifications/utils.ts"),
				s = n("./node_modules/reselect/es/index.js");
			const i = e => e.notificationsInbox && e.notificationsInbox.api && e.notificationsInbox.api.pending,
				c = e => e.notificationsInbox && e.notificationsInbox.pageInfo,
				a = Object(s.a)(c, e => !(!e || !e.hasNextPage)),
				d = Object(s.a)(c, e => e && e.endCursor),
				u = e => e.notificationsInbox && e.notificationsInbox.notifications,
				l = Object(s.a)(u, e => e.slice(0, 5)),
				b = e => e.notificationsInbox && e.notificationsInbox.earlierDividerIndex,
				f = Object(s.a)(u, b, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(0, n)
					}
					return e
				}),
				m = Object(s.a)(u, b, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(n)
					}
					return null
				}),
				p = Object(s.a)(o.a, e => e === r.c.NotificationsSupported)
		},
		"./src/reddit/selectors/trending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const r = e => Object.keys(e.trending.models).reduce((t, n) => [...t, ...e.trending.models[n]], []),
				o = (e, t) => e.trending.models[t] || []
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~Reddit~Subreddit.90b2392b126a47c44476.js.map