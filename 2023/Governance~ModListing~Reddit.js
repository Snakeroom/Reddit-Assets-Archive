// https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit.c288481628d941111e9c.js
// Retrieved at 6/13/2023, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Governance~ModListing~Reddit"], {
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
		"./src/reddit/actions/appBadgeIndicators/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "a", (function() {
				return i
			}));
			const r = "APP_BADGES__PENDING",
				o = "APP_BADGES__LOADED",
				s = "APP_BADGES__UPDATED",
				i = "APP_BADGES__FAILED"
		},
		"./src/reddit/actions/appBadgeIndicators/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "c", (function() {
				return I
			})), n.d(t, "b", (function() {
				return g
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/makeRequest/index.ts"),
				s = n("./src/reddit/actions/appBadgeIndicators/constants.ts"),
				i = n("./src/reddit/actions/tabBadging.ts"),
				c = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/redditGQL/operations/BadgeIndicators.json"),
				d = e => Object(c.a)(e, {
					...a
				}),
				u = n("./src/reddit/models/Badge/index.ts");
			const l = Object(r.a)(s.c),
				b = Object(r.a)(s.b),
				f = Object(r.a)(s.d),
				m = Object(r.a)(s.a),
				p = e => {
					let {
						key: t,
						count: n
					} = e;
					return {
						[t]: {
							count: n,
							style: u.b.Numbered
						}
					}
				},
				O = (e, t, n) => ({
					[u.c.ChatUnreadMessages]: {
						count: e,
						style: u.b.Numbered
					},
					[u.c.ChatV2UnreadMessages]: {
						count: n,
						style: u.b.Numbered
					},
					[u.c.ChatHasNewMessages]: {
						isShowing: t,
						style: u.b.Filled
					}
				}),
				I = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					e(l());
					const s = await async function(e) {
						var t, n, r, s;
						const i = await d(e());
						if (Object(o.c)(i) && (null === (n = null === (t = i.body) || void 0 === t ? void 0 : t.data) || void 0 === n ? void 0 : n.badgeIndicators)) {
							const e = null === (s = null === (r = i.body) || void 0 === r ? void 0 : r.data) || void 0 === s ? void 0 : s.badgeIndicators;
							return {
								...e,
								chatUnreadMessages: {
									count: (Number(e.chatUnreadMessages.count) || 0) + (Number(e.chatUnacceptedInvites.count) || 0) + (Number(e.chatUnreadMentions.count) || 0)
								}
							}
						}
					}(r);
					s ? (e(b(s)), e(Object(i.d)())) : e(m())
				};
			const g = () => async e => {
				const t = p({
					key: u.c.MessageTab,
					count: 0
				});
				e(f(t))
			}
		},
		"./src/reddit/actions/inboxBanner/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			}));
			const r = "INBOX_NOTIFICATIONS__BANNER_DISMISS",
				o = "INBOX_NOTIFICATIONS__BANNER_RECEIVED"
		},
		"./src/reddit/actions/inboxBanner/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return i
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/inboxBanner/constants.ts");
			const s = Object(r.a)(o.a),
				i = Object(r.a)(o.b)
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
				return g
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "b", (function() {
				return S
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
				O = Object(o.a)(s.e),
				I = Object(o.a)(s.d),
				g = e => async (t, n, r) => {
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
							t === u.a.Push ? n(O(e)) : n(f(e))
						} else t === u.a.Push ? n(I({
							error: r.error
						})) : n(m({
							error: r.error
						}))
					}(o, e, t)
				};
			const _ = Object(o.a)(s.g),
				x = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					(await Object(c.b)(s(), e)).ok ? (h(t, e), function(e) {
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

			function h(e, t) {
				e(_({
					isEnabled: t.isEnabled,
					messageType: t.messageType
				}))
			}
			const j = Object(o.a)(s.j),
				E = Object(o.a)(s.i),
				v = Object(o.a)(s.k),
				T = Object(o.a)(s.h),
				S = e => async (t, n, r) => {
					let {
						gqlContext: o
					} = r;
					var s, c;
					t(j());
					const u = await ((e, t) => Object(a.a)(e, {
						...d,
						variables: t
					}))(o(), e);
					if (null === (c = null === (s = u.error) || void 0 === s ? void 0 : s.fields) || void 0 === c ? void 0 : c.length) return t(T({
						error: u.error
					})), void t(Object(i.d)());
					if (u.ok && u.body) {
						const e = u.body,
							n = e && e.data,
							r = n && n.identity && n.identity.subscribedSubreddits,
							o = r && r.pageInfo,
							s = (r && r.edges).map(e => e.node);
						t(E({
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
			const a = e => i.d.pushNotificationsBrowserSupported(e) ? Object(s.a)() : o.d.BrowserUnsupported,
				d = e => {
					switch (e) {
						case o.a.Denied:
							c.sb(!1), Object(r.c)();
							break;
						case o.a.Default:
						case o.a.Granted:
							c.sb(!0), Object(r.c)();
							break;
						case o.a.Closed:
							c.sb(!0)
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
				return L
			})), n.d(t, "e", (function() {
				return A
			})), n.d(t, "b", (function() {
				return F
			})), n.d(t, "i", (function() {
				return G
			})), n.d(t, "f", (function() {
				return H
			})), n.d(t, "c", (function() {
				return V
			})), n.d(t, "a", (function() {
				return W
			})), n.d(t, "h", (function() {
				return q
			})), n.d(t, "j", (function() {
				return Y
			})), n.d(t, "g", (function() {
				return Q
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				i = n("./src/reddit/actions/inboxBanner/index.ts"),
				c = (n("./src/reddit/actions/notificationSettingsLayout/index.ts"), n("./src/reddit/actions/notificationsInbox/constants.ts")),
				a = n("./src/reddit/actions/tabBadging.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				l = n("./src/redditGQL/operations/BlockAwarder.json");
			var b = (e, t) => Object(u.a)(e, {
					...l,
					variables: t
				}),
				f = n("./src/lib/constants/index.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				O = n("./src/redditGQL/operations/NotificationInboxFeed.json"),
				I = n("./src/redditGQL/operations/NotificationInboxFeedSlimmed.json"),
				g = n("./src/reddit/constants/headers.ts"),
				_ = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var x;
			! function(e) {
				e.Activity = "activity", e.Messages = "messages", e.CommentReply = "comment_reply", e.PostReply = "post_reply", e.UsernameMention = "username_mention"
			}(x || (x = {}));
			var h = n("./src/redditGQL/operations/DeleteInboxNotifications.json");
			n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts");
			var j = n("./src/redditGQL/operations/UpdateInboxActivitySeenState.json");
			var E = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				v = n("./src/reddit/helpers/trackers/inbox.ts"),
				T = n("./src/reddit/models/Badge/index.ts"),
				S = n("./src/reddit/models/NotificationInbox/index.ts"),
				N = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/selectors/appBadges.ts"),
				y = (n("./src/reddit/selectors/notificationPrefs.ts"), n("./src/reddit/selectors/notificationsInbox.tsx"));
			const k = Object(o.a)(c.e),
				P = Object(o.a)(c.b),
				w = Object(o.a)(c.a),
				L = e => async (t, n, r) => {
					let {
						gqlContext: o
					} = r;
					var s, c;
					const a = n(),
						l = Object(y.a)(a);
					t(k());
					const b = await ((e, t) => Object(u.a)(e, {
						...O,
						variables: t
					}))(o(), e);
					if (null === (c = null === (s = b.error) || void 0 === s ? void 0 : s.fields) || void 0 === c ? void 0 : c.length) return t(w({
						error: b.error
					})), void t(Object(d.d)());
					const f = b && b.body,
						m = D(f);
					if (null === l) {
						const e = Object(y.f)(a);
						t(R(m.notifications, e.length))
					}
					t(P(m)), t(Object(i.b)(m.banners))
				}, A = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					var o, s;
					const i = await (e => Object(u.a)(e, {
						...I
					}))(r());
					if (null === (s = null === (o = i.error) || void 0 === o ? void 0 : o.fields) || void 0 === s ? void 0 : s.length) return;
					const c = i && i.body,
						a = U(c).nodes.filter(e => !e.viewedAt);
					a.length && a.forEach(e => {
						var n;
						Object(v.s)({
							id: e.id,
							isClicked: !1,
							isViewed: Boolean(e.viewedAt),
							type: null === (n = e.context) || void 0 === n ? void 0 : n.messageType
						})(t())
					})
				}, D = e => {
					const t = [],
						n = [],
						r = e && e.data,
						o = r && r.notificationInbox,
						s = o && o.elements,
						i = s && s.pageInfo,
						c = s && s.edges;
					if (c)
						for (const a of c) Object.keys(a.node).length && (a.node.hasOwnProperty("notificationName") ? n.push(a.node) : t.push(a.node));
					return {
						notifications: t,
						banners: n,
						pageInfo: i
					}
				}, U = e => {
					var t, n;
					return {
						nodes: null === (n = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.notificationInbox) || void 0 === n ? void 0 : n.elements.edges.map(e => e.node)
					}
				}, R = (e, t) => async (n, r) => {
					const o = r(),
						s = Object(y.a)(o),
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
					i && i !== s && n(M({
						index: i
					}))
				}, M = Object(o.a)(c.g), B = (Object(o.a)(c.h), Object(o.a)(c.f)), F = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					const i = [e];
					if ((await ((e, t) => Object(u.a)(e, {
							...h,
							variables: {
								input: t
							}
						}))(s(), {
							notificationIds: i
						})).ok) {
						t(B({
							id: e
						}));
						const o = Object(y.f)(n());
						t(R(o)), t(Object(d.f)(Object(d.e)(r.fbt._("Notification hidden", null, {
							hk: "1jfPqO"
						}), N.b.SuccessCommunityGreen)))
					} else t(Object(d.f)(Object(d.e)(r.fbt._("Failed to hide notification, please try again.", null, {
						hk: "fL7uB"
					}), N.b.Error)))
				}, G = (e, t) => async (n, o, s) => {
					let {
						gqlContext: i
					} = s;
					if (!e) return;
					(await Object(E.b)(i(), e, {
						isSubredditUpdatesInterestingPostEnabled: !0,
						isUpdateFromSubredditEnabled: !0
					})).ok ? (t && t(), n(Object(d.f)(Object(d.e)(r.fbt._("Success! Undone hiding notifications from this community.", null, {
						hk: "1na0NP"
					}), N.b.SuccessCommunityGreen)))) : n(Object(d.f)(Object(d.e)(r.fbt._("Failed to undo hiding notifications, please try again.", null, {
						hk: "4jo7Pf"
					}), N.b.Error)))
				}, H = (e, t) => async (n, o, s) => {
					let {
						gqlContext: i
					} = s;
					if (!e) return;
					(await Object(E.b)(i(), e, {
						isSubredditUpdatesInterestingPostEnabled: !1,
						isUpdateFromSubredditEnabled: !1
					})).ok ? n((() => {
						const n = r.fbt._("Success! You won't see notifications from this community in the future.", null, {
							hk: "2tkhbk"
						});
						return Object(d.f)(Object(d.e)(n, N.b.Undo, r.fbt._("Undo", null, {
							hk: "4zFGDk"
						}), G(e, t)))
					})()) : n(Object(d.f)(Object(d.e)(r.fbt._("Failed to hide notifications, please try again.", null, {
						hk: "KEGcB"
					}), N.b.Error)))
				}, V = e => async (t, n, o) => {
					let {
						apiContext: s
					} = o;
					if (!e) return;
					(await ((e, t) => Object(m.a)(Object(p.a)(e, [g.a]), {
						endpoint: Object(_.a)(`${e.apiUrl}/api/sendreplies`),
						method: f.ob.POST,
						data: {
							id: t
						}
					}))(s(), e)).ok ? t(Object(d.f)(Object(d.e)(r.fbt._("Success! You won't see updates on this in the future", null, {
						hk: "wtDa4"
					}), N.b.SuccessCommunityGreen))) : t(Object(d.f)(Object(d.e)(r.fbt._("Failed to turn off updates on this, please try again", null, {
						hk: "1zhpEy"
					}), N.b.Error)))
				}, W = e => async (t, n, o) => {
					let {
						gqlContext: s
					} = o;
					if (!e) return;
					(await b(s(), {
						awardingId: e
					})).ok ? t(Object(d.f)(Object(d.e)(r.fbt._("Success! Awarder has been blocked", null, {
						hk: "2D5PUk"
					}), N.b.SuccessCommunityGreen))) : t(Object(d.f)(Object(d.e)(r.fbt._("Failed to block awarder, please try again", null, {
						hk: "2dxeA8"
					}), N.b.Error)))
				}, K = Object(o.a)(c.d), q = (e, t) => async (n, r, o) => {
					let i, {
						apiContext: c
					} = o;
					if (t === S.a.CommentReply || t === S.a.PostReply || t === S.a.PrivateMessage || t === S.a.UsernameMention) {
						if ((i = await ((e, t) => Object(m.a)(Object(p.a)(e, [g.a]), {
								endpoint: Object(_.a)(`${e.apiUrl}/api/read_message`),
								method: f.ob.POST,
								data: {
									id: t
								}
							}))(c(), e)).ok) {
							let e = Object(C.a)(r());
							if (e > 0) {
								e--;
								const t = Object(s.e)({
									count: e,
									key: T.c.ActivityTab
								});
								n(Object(s.a)(t)), n(Object(a.e)())
							}
						}
					} else i = await ((e, t) => Object(m.a)(Object(p.a)(e, [g.a]), {
						endpoint: Object(_.a)(`${e.apiUrl}/api/read_notification`),
						method: f.ob.POST,
						data: {
							id: t
						}
					}))(c(), e);
					if (i.ok) {
						const t = (new Date).toISOString();
						n(K({
							id: e,
							now: t
						}))
					}
				}, Y = () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const o = (new Date).toLocaleDateString(),
						i = await ((e, t) => Object(u.a)(e, {
							...j,
							variables: {
								input: t
							}
						}))(r(), {
							lastSentAt: o
						});
					if (i.ok) {
						const t = i.body,
							n = t && t.data && t.data.updateInboxActivitySeenState && t.data.updateInboxActivitySeenState.badgeIndicators;
						n && (e(Object(s.a)(n)), e(Object(a.d)()))
					}
				}, z = Object(o.a)(c.c), Q = () => async (e, t, n) => {
					let {
						apiContext: o
					} = n;
					const {
						notificationsInbox: {
							markAllAsReadTimestamp: i
						}
					} = t(), c = new Date;
					if (!i || c.getTime() - new Date(i).getTime() > 15e3) {
						if ((await ((e, t) => Object(m.a)(Object(p.a)(e, [g.a]), {
								endpoint: Object(_.a)(`${e.apiUrl}/api/read_all_messages`),
								method: f.ob.POST,
								data: {
									filter_types: null == t ? void 0 : t.join(",")
								}
							}))(o(), [x.Activity, x.Messages, x.CommentReply, x.PostReply, x.UsernameMention])).ok) {
							const t = Object(s.e)({
									count: 0,
									key: T.c.MessageTab
								}),
								n = Object(s.e)({
									count: 0,
									key: T.c.ActivityTab
								});
							e(Object(s.a)({
								...t,
								...n
							})), e(z({
								now: c.toISOString()
							}))
						} else e(Object(d.f)(Object(d.e)(r.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "VW7c3"
						}), N.b.Error)))
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
		"./src/reddit/actions/tabBadging.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "f", (function() {
				return g
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/fastdom/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				c = n("./src/reddit/helpers/tabBadging/index.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
				d = n("./src/reddit/selectors/appBadges.ts"),
				u = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/actions/appBadgeIndicators/index.ts");
			const b = "TAB__UPDATE_HAS_UNREAD_MESSAGES_BADGE",
				f = Object(s.a)(b),
				m = (e, t) => {
					e <= 0 ? o.a.write(() => {
						Object(c.b)(!1), window.document.title = t
					}) : o.a.write(() => {
						Object(c.b)(), window.document.title = `(${e}) ${t}`
					})
				},
				p = Object(r.c)({
					basicChannelCount: d.f,
					subredditChannelCount: d.d,
					subredditMentionCount: d.c
				}),
				O = () => async (e, t) => {
					const n = t(),
						r = Object(i.g)(n, {});
					if (!(Object(u.R)(n) || Object(u.S)(n)) || !r) return;
					const o = Object(d.j)(n);
					m(o, r), e(f({
						hasUnreadMessages: !!o
					}))
				}, I = () => async (e, t) => {
					{
						e(O());
						const n = (e => ({
							inboxCount: Object(d.i)(e),
							basicChannelCount: Object(d.f)(e)
						}))(t());
						Object(c.c)(n)
					}
				}, g = e => async (t, n) => {
					const r = n(),
						o = Object(d.f)(r),
						s = Object(d.i)(r),
						{
							basicChannelCount: i,
							inboxCount: c
						} = e;
					if (o !== i) {
						const e = Object(l.e)({
							count: i,
							key: a.c.ChatTab
						});
						t(Object(l.a)(e))
					}
					if (c && c !== s) {
						const e = Object(l.e)({
							count: c,
							key: a.c.MessageTab
						});
						t(Object(l.a)(e))
					}(o !== i || c && c !== s) && t(O())
				}
		},
		"./src/reddit/components/ImageWithFallback/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
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
			const i = e => new Promise((t, n) => {
				const r = new Image;
				r.onload = () => t(r), r.onerror = n, r.src = e
			});
			t.a = e => {
				let {
					src: t,
					lowSrc: n = t,
					errorSrc: c = n,
					...a
				} = e;
				const d = Object(r.createRef)();
				return i(t).then(() => {
					d.current && (d.current.src = t)
				}).catch(() => {
					d.current && (d.current.src = c)
				}), o.a.createElement("img", s({
					ref: d,
					src: n
				}, a))
			}
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
				const [O, I] = Object(s.useState)(null);
				Object(s.useEffect)(() => {
					const e = t.current;
					if (!e || 0 !== e.childElementCount || O || !m) return;
					const n = o.a.loadAnimation({
						autoplay: !1,
						renderer: l ? "canvas" : "svg",
						loop: u,
						container: e,
						animationData: m
					});
					I(n)
				}, [u, t, O, m]), Object(s.useEffect)(() => {
					if (O)
						if (d) O.stop();
						else if (f) {
						const e = O.getDuration(!0);
						O.goToAndPlay(e, !0)
					} else O.goToAndPlay(0)
				}, [d, f, O]);
				const g = Object(s.useCallback)(() => {
					O && O.goToAndPlay(0)
				}, [O]);
				return i.a.createElement("div", {
					className: a,
					style: {
						display: d ? "none" : "block"
					},
					ref: t,
					onClick: b || g
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
		"./src/reddit/components/SEOTitle/constants.ts": function(e, t, n) {
			"use strict";
			var r, o;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e[e.Collection = 0] = "Collection", e[e.HeaderSelector = 1] = "HeaderSelector", e[e.PostComments = 2] = "PostComments", e[e.PostItem = 3] = "PostItem", e[e.TopicHeader = 4] = "TopicHeader", e[e.Widget = 5] = "Widget"
				}(r || (r = {})),
				function(e) {
					e[e.H1 = 1] = "H1", e[e.H2 = 2] = "H2", e[e.H3 = 3] = "H3", e[e.H4 = 4] = "H4", e[e.H5 = 5] = "H5", e[e.H6 = 6] = "H6"
				}(o || (o = {}))
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
				return c.a
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/SEOTitle/constants.ts"),
				a = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/helpers/postCollection.ts");
			const u = [a.Tb.COMMENTS, a.Tb.COLLECTION_COMMENTS],
				l = (e, t) => {
					if (!e) return [];
					const n = u.includes(e),
						r = e === a.Tb.COLLECTION_COMMENTS || t && Object(d.a)(t),
						o = a.ab.has(e),
						s = a.Ib.has(e),
						i = e === a.Tb.SUBREDDIT,
						l = e === a.Tb.TOPIC;
					let b, f, m;
					return o && !i || s ? b = c.a.HeaderSelector : r ? b = c.a.Collection : n ? b = c.a.PostComments : l && (b = c.a.TopicHeader), (o || s || r || n) && (f = c.a.Widget), (o || n) && (m = c.a.PostItem), [b, f, m]
				};
			var b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/selectors/platform.ts"),
				m = n("./src/reddit/components/SEOTitle/index.m.less"),
				p = n.n(m);
			const O = e => {
					let {
						level: t,
						children: n
					} = e;
					const r = `h${t}`;
					return o.a.createElement(r, {
						className: p.a.Title
					}, n)
				},
				I = Object(b.v)(),
				g = Object(s.b)(() => Object(i.a)((e, t) => {
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
					level: l(t, e).indexOf(n) + 1 || void 0
				})));
			class _ extends o.a.Component {
				render() {
					const {
						children: e,
						level: t
					} = this.props;
					return t ? o.a.createElement(O, {
						level: t
					}, e) : o.a.createElement(o.a.Fragment, null, e)
				}
			}
			t.b = I(g(_))
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
				return E
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
				O = n("./src/reddit/selectors/user.ts"),
				I = n("./src/reddit/components/SubredditIcon/index.m.less"),
				g = n.n(I);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const x = d.a.wrapped(u.a, "UserIcon", g.a),
				h = d.a.img("Image", g.a),
				j = e => {
					let {
						iconColor: t,
						...n
					} = e;
					return i.a.createElement(h, _({
						style: {
							backgroundColor: t || ""
						}
					}, n))
				},
				E = d.a.div("BackupImage", g.a),
				v = Object(b.v)();
			t.b = v(e => {
				var t;
				const n = Object(c.e)(O.fb);
				let s, d, u;
				if (e.subredditOrProfile) {
					const {
						url: t,
						color: n
					} = Object(f.a)({
						shouldHideNsfwIcon: !!e.shouldHideNsfwIcon,
						subredditOrProfile: e.subredditOrProfile
					});
					Object(p.i)(e.subredditOrProfile) ? u = i.a.createElement(x, {
						className: e.className,
						iconUrl: t,
						isNSFW: e.subredditOrProfile.isNSFW,
						userName: e.subredditOrProfile.name
					}) : (s = t, d = n)
				} else s = e.shouldHideNsfwIcon ? `${r.a.assetPath}/img/avatar_over18.png` : e.iconUrl, d = e.primaryColor || l.a.alienblue;
				return s ? u = i.a.createElement(j, {
					alt: o.fbt._("Subreddit Icon", null, {
						hk: "134aM1"
					}),
					className: Object(a.a)(e.className, {
						[g.a.blur]: e.shouldBlurSubredditIcon
					}),
					iconColor: d,
					role: "presentation",
					src: s
				}) : u || (u = i.a.createElement(m.a, {
					name: "community",
					isFilled: !n,
					className: Object(a.a)(g.a.defaultCommunityIcon, e.className, {
						[g.a.mNightmode]: n,
						[g.a.blur]: e.shouldBlurSubredditIcon
					}),
					style: n ? {
						backgroundColor: e.redditStyle ? l.a.alienblue : d
					} : {
						color: e.redditStyle ? l.a.alienblue : d
					}
				})), e.linkTo ? i.a.createElement("a", _({}, null !== (t = e.linkProps) && void 0 !== t ? t : {}, {
					href: e.linkTo,
					className: g.a.iconLink
				}), u) : i.a.createElement(i.a.Fragment, null, u)
			})
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
					hasNftBorder: c,
					style: d
				} = e;
				return s.a.createElement("div", {
					className: Object(i.a)(a.a.snoovatarWrapper, n, {
						[a.a.hasNftBorder]: Boolean(c)
					}),
					style: d
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
					shouldHideNSFW: m,
					style: p
				} = e;
				if (r && b(n) || !r && !n) return i.a.createElement(a.a, {
					className: Object(c.a)(u.a.DefaultUserIcon, t, {
						[u.a.mNightmode]: s
					}),
					style: p
				});
				const O = !r && d && m ? f || l : n;
				return i.a.createElement("img", {
					alt: o.fbt._("User avatar", null, {
						hk: "X43nA"
					}),
					className: Object(c.a)(u.a.UserIcon, t),
					src: O,
					style: p
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
				O = n.n(p);
			var I = e => {
					let {
						iconUrl: t
					} = e;
					return Object(d.c)(t) ? s.a.createElement(f.a, {
						className: O.a.nftAnimation,
						assetUrl: `${b.a.assetPath}/img/snoovatars/comment-animations/nft_comment_animation.json`,
						loop: !0
					}) : s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: O.a.nftBackground
					}), s.a.createElement(m, {
						className: O.a.nftBorder
					}))
				},
				g = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				_ = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				x = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				h = n("./src/reddit/selectors/user.ts");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const E = () => {},
				v = Object(c.c)({
					currentUser: h.m,
					isNightMode: h.fb,
					shouldHideNSFW: h.H,
					user: h.Db
				}),
				T = Object(i.b)(v);
			t.a = T(e => {
				const {
					authorId: t,
					collapsed: n,
					currentUser: i,
					iconUrl: c,
					isCommentAuthorBlocked: b,
					isHighlighted: f,
					isNft: m,
					isNSFW: p,
					shouldUseOnlineOverride: h,
					isOnlineOverrideValue: v,
					isOnlineStatusLoadTest: T,
					isProfileIcon: S,
					omitResponsivePresenceWrapper: N,
					onPresenceIndicatorInViewport: C,
					shouldShowPresenceIndicator: y,
					user: k,
					userName: P,
					wrapperClassName: w,
					style: L,
					...A
				} = e, D = !!i && Object(l.e)(i) === P, U = D ? i : k, R = U && U.accountIcon || c, M = k ? k.isNSFW : p, B = Object(d.a)(R) && !b, F = B ? s.a.createElement(_.a, {
					headshot: R,
					className: e.className,
					hasNftBorder: m && Object(d.d)(c),
					style: L
				}) : s.a.createElement(x.b, j({}, A, {
					iconUrl: b && n ? "https://www.redditstatic.com/avatars/defaults/v2/avatar_default_3.png" : R,
					isCurrentUser: D,
					isNSFW: M,
					style: L
				})), [G, H] = Object(o.useState)(!1), V = Object(o.useMemo)(() => ({
					input: {
						channel: {
							teamOwner: "CONTENT_AND_COMMUNITIES",
							category: "ONLINE_STATUS_INDICATOR",
							userID: t
						}
					}
				}), [t]), W = Object(o.useCallback)(e => {
					const {
						isOnline: t
					} = e.subscribe.data;
					H(t)
				}, []), K = Object(o.useRef)(null), [q, Y] = Object(o.useState)(!1), z = Object(o.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: n
						} = e, r = 1 !== n;
						t ? Y(!0) : r && Y(!1)
					})
				}, []), Q = Object(o.useRef)({
					rootMargin: "750px 0px 1000px 0px"
				});
				return Object(u.a)(K, z, Q.current), N ? F : s.a.createElement("div", {
					className: Object(r.a)(O.a.userIconWrapper, {
						[O.a.hasHeadShotWrapper]: B,
						[O.a.isProfileIcon]: S
					}, w),
					ref: K
				}, m && s.a.createElement(I, {
					iconUrl: c
				}), F, y && (G || h && v) && s.a.createElement(g.default, {
					showPresence: !0,
					isHighlighted: f,
					onceInViewport: C
				}), (y || T) && !h && q && s.a.createElement(a.a, {
					variables: V,
					onData: y ? W : E,
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
				return O
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
				O = "ListingLayout-outerContainer"
		},
		"./src/reddit/constants/livebar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "live_bar_nav"
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
				return N
			})), n.d(t, "c", (function() {
				return C
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
				O = n("./src/reddit/constants/adEvents.ts"),
				I = n("./src/reddit/helpers/getVendorMetadata.ts"),
				g = n("./src/reddit/helpers/trackers/ads.ts"),
				_ = n("./src/reddit/hooks/useOutboundClickTracking.ts"),
				x = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/telemetry.ts"),
				j = n("./src/reddit/selectors/user.ts");

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const v = Object(u.a)(j.c, j.m, (e, t) => {
					let {
						isSponsored: n,
						postId: r
					} = t;
					return n && r ? Object(x.b)(e, r) : null
				}, x.F, h.d, (e, t, n, r, o) => ({
					allowClickTracking: e,
					basePixelMetadata: n,
					userId: t ? Object(m.a)(t.id) : null,
					post: r,
					pageType: o.pageType
				})),
				T = Object(d.b)(v, e => ({
					fireAdPixelsOfType: (t, n) => e(Object(p.y)(t, n))
				})),
				S = (e, t, n, r) => {
					const o = t.outboundUrlExpiration && t.outboundUrlExpiration > Date.now();
					r && t.outboundUrl && o && (e.href = b(t.outboundUrl, n), e.href = function(e) {
						return Object(l.a)(e, {
							web_redirect: "true"
						})
					}(e.href))
				},
				N = (e, t, n) => {
					let r, o = null;
					if (e && t && /^(http|https):\/\/([a-z]+\.)?reddit.com/.test(n)) {
						o = Object(I.a)(e, t, O.a.Click);
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
				C = (e, t, n) => {
					const r = N(t, n, e.href);
					return e.href = r.url, r.metadata
				},
				y = e => {
					let {
						isSponsored: t,
						source: n
					} = e;
					return !!(t && (null == n ? void 0 : n.outboundUrl))
				},
				k = T(e => {
					const t = Object(c.useRef)(null),
						n = Object(_.a)(),
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
							source: I,
							sourceElement: x,
							userId: h
						} = e;
					let j = o()(e, ["allowClickTracking", "basePixelMetadata", "fireAdPixelsOfType", "isSponsored", "postId", "post", "commentId", "source", "sourceElement", "userId", "pageType"]);
					const v = I && I.outboundUrl && l ? I.outboundUrl : u;
					return j = {
						...j,
						href: v,
						rel: l ? f.b : f.a,
						target: f.d.BLANK
					}, !I || (e => {
						const {
							outboundUrlCreated: t,
							outboundUrlReceived: n
						} = e;
						return !(!t || !n) && (t > n + 3e5 || t < n - 36e5)
					})(I) ? a.a.createElement("a", E({}, j, {
						onClick: () => n(u, x, i, p)
					})) : a.a.createElement("a", E({}, j, {
						onMouseDown: n => {
							if (!y(e)) return !(1 !== n.button && 2 !== n.button && !n.ctrlKey) || void S(n.currentTarget, I, h, r);
							t.current = C(n.currentTarget, p, s)
						},
						onClick: () => {
							m && (y(e) && Object(g.a)(m, b), d(m, O.a.Click), n(u, x, i, p))
						},
						onMouseLeave: e => {
							l || ((e, t) => {
								e.href = t
							})(e.currentTarget, v)
						},
						onTouchStart: e => S(e.currentTarget, I, h, r),
						"data-testid": "outbound-link"
					}))
				});
			t.b = k
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
		"./src/reddit/helpers/tabBadging/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return l
			}));
			var r = n("./src/config.ts");
			const o = `${r.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				s = `${r.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				i = `${r.a.assetPath}/img/favicon/favicon-32x32.png`,
				c = `${r.a.assetPath}/img/favicon/favicon-16x16.png`,
				a = "badgeCountSync",
				d = e => window.document.querySelector(`link[href="${e}"]`),
				u = function() {
					let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
					const t = d(e ? i : o),
						n = d(e ? c : s);
					t && n && (t.href = e ? o : i, n.href = e ? s : c)
				},
				l = e => {
					navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: a,
						badgeCounts: e
					})
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
					...s.o(o),
					subreddit: s.lb(o),
					programmatic: {
						adUnit: null !== e && null !== t ? `DESKTOP ${e}x${t} ${n}` : `DESKTOP ${n}`,
						count: 1,
						type: r.h.SWITCH_HOUSE_AD
					}
				}),
				c = (e, t) => {
					t && (Object(o.Hb)(e.postId), Object(o.Rb)(t)), e.impressionIdStr ? Object(o.Ib)(e.impressionIdStr) : e.impressionId && Object(o.Ib)(e.impressionId)
				}
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
			})), n.d(t, "v", (function() {
				return b
			})), n.d(t, "s", (function() {
				return f
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "t", (function() {
				return O
			})), n.d(t, "u", (function() {
				return I
			})), n.d(t, "A", (function() {
				return g
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "w", (function() {
				return x
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "k", (function() {
				return j
			})), n.d(t, "B", (function() {
				return E
			})), n.d(t, "r", (function() {
				return v
			})), n.d(t, "m", (function() {
				return T
			})), n.d(t, "l", (function() {
				return S
			})), n.d(t, "h", (function() {
				return N
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "n", (function() {
				return k
			})), n.d(t, "x", (function() {
				return P
			})), n.d(t, "o", (function() {
				return w
			})), n.d(t, "y", (function() {
				return L
			})), n.d(t, "z", (function() {
				return A
			})), n.d(t, "p", (function() {
				return D
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
						...u.o(e),
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
						type: o,
						awardId: s
					} = e;
					return e => {
						Object(l.a)({
							...u.o(e),
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
				m = e => {
					let {
						dnPromptAction: t
					} = e;
					return e => ({
						...u.o(e),
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
				p = e => {
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
						...u.o(e),
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
				O = e => {
					let {
						badgeCount: t,
						tab: n
					} = e;
					return e => ({
						...u.o(e),
						action: d.c.VIEW,
						noun: "inbox",
						source: i.Inbox,
						inbox: {
							badgeCount: t,
							tab: n
						}
					})
				},
				I = e => {
					let {
						badgeCount: t,
						tab: n
					} = e;
					return e => ({
						...u.o(e),
						action: d.c.VIEW,
						noun: "mini-inbox",
						source: i.Inbox,
						inbox: {
							badgeCount: t,
							tab: r.Activity
						}
					})
				},
				g = e => {
					let {
						badgeCount: t
					} = e;
					return e => ({
						...u.o(e),
						action: d.c.CLICK,
						noun: "inbox",
						source: i.Nav,
						inbox: {
							badgeCount: t
						}
					})
				},
				_ = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: o,
						awardId: s
					} = e;
					return e => ({
						...u.o(e),
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
				x = e => {
					let {
						id: t,
						isClicked: n,
						isViewed: r,
						type: o
					} = e;
					return e => ({
						...u.o(e),
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
			var h;
			! function(e) {
				e.Cats = "cats", e.Memes = "memes", e.Karma = "karma_free_subs", e.PN_perms = "pn_perms", e.Email_perms = "email_perms"
			}(h || (h = {}));
			const j = e => {
					let {
						actionInfoType: t,
						id: n,
						isClicked: r,
						isViewed: o,
						type: s
					} = e;
					return e => ({
						...u.o(e),
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
				E = e => {
					let {
						actionInfoType: t,
						id: n,
						isClicked: r,
						isViewed: o,
						type: s
					} = e;
					return e => ({
						...u.o(e),
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
						...u.o(e),
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
					...u.o(t),
					action: d.c.CLICK,
					noun: "notification_app_settings",
					source: i.Inbox,
					actionInfo: {
						...u.d(t),
						pageType: e
					}
				}),
				S = () => e => ({
					...u.o(e),
					action: d.c.CLICK,
					noun: "see_all",
					source: i.Inbox,
					actionInfo: {
						...u.d(e),
						pageType: s.MiniInbox
					}
				}),
				N = () => e => ({
					...u.o(e),
					action: d.c.CLICK,
					noun: "messages",
					source: i.Inbox
				}),
				C = e => {
					let {
						isMiniInbox: t
					} = e;
					return e => ({
						...u.o(e),
						action: d.c.CLICK,
						noun: "mark_all_as_read",
						source: i.Inbox,
						actionInfo: t ? {
							...u.d(e),
							pageType: s.MiniInbox
						} : {}
					})
				};
			var y;
			! function(e) {
				e.DISMISS = "dismiss", e.BANNER = "banner", e.CTA_1 = "cta1", e.CTA_2 = "cta2"
			}(y || (y = {}));
			const k = (e, t) => n => ({
					...u.o(n),
					action: d.c.CLICK,
					noun: "inbox_banner",
					source: "inbox",
					actionInfo: {
						...u.d(n),
						type: t
					},
					banner: {
						id: e
					}
				}),
				P = (e, t) => n => ({
					...u.o(n),
					action: d.c.CLICK,
					noun: "inbox_banner",
					source: "mini_inbox",
					actionInfo: {
						...u.d(n),
						type: t
					},
					banner: {
						id: e
					}
				}),
				w = e => t => ({
					...u.o(t),
					action: d.c.RECEIVE,
					noun: "inbox_banner",
					source: "inbox",
					actionInfo: {
						...u.d(t)
					},
					banner: {
						id: e
					}
				}),
				L = e => t => ({
					...u.o(t),
					action: d.c.RECEIVE,
					noun: "inbox_banner",
					source: "mini_inbox",
					actionInfo: {
						...u.d(t)
					},
					banner: {
						id: e
					}
				}),
				A = e => t => ({
					...u.o(t),
					action: d.c.VIEW,
					noun: "inbox_banner",
					source: "mini_inbox",
					actionInfo: {
						...u.d(t)
					},
					banner: {
						id: e
					}
				}),
				D = e => t => ({
					...u.o(t),
					action: d.c.VIEW,
					noun: "inbox_banner",
					source: "inbox",
					actionInfo: {
						...u.d(t)
					},
					banner: {
						id: e
					}
				})
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, n) {
			"use strict";
			n.d(t, "j", (function() {
				return k
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "p", (function() {
				return L
			})), n.d(t, "q", (function() {
				return A
			})), n.d(t, "n", (function() {
				return D
			})), n.d(t, "r", (function() {
				return U
			})), n.d(t, "c", (function() {
				return R
			})), n.d(t, "k", (function() {
				return M
			})), n.d(t, "o", (function() {
				return B
			})), n.d(t, "h", (function() {
				return F
			})), n.d(t, "i", (function() {
				return G
			})), n.d(t, "f", (function() {
				return H
			})), n.d(t, "b", (function() {
				return K
			})), n.d(t, "a", (function() {
				return q
			})), n.d(t, "m", (function() {
				return Y
			})), n.d(t, "l", (function() {
				return z
			})), n.d(t, "v", (function() {
				return $
			})), n.d(t, "d", (function() {
				return Z
			})), n.d(t, "t", (function() {
				return ne
			})), n.d(t, "s", (function() {
				return re
			})), n.d(t, "u", (function() {
				return oe
			})), n.d(t, "g", (function() {
				return se
			}));
			var r = n("./node_modules/lodash/pick.js"),
				o = n.n(r),
				s = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/makePostDraftPageKey/index.ts"),
				c = n("./src/reddit/components/SearchResultsContent/helpers/isCommentSearchRoute.ts"),
				a = n("./src/reddit/constants/parameters.ts"),
				d = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				l = n("./src/reddit/helpers/routeKey/index.ts"),
				b = n("./src/reddit/helpers/trackers/postComposer.ts"),
				f = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				m = n("./src/reddit/models/Comment/index.ts"),
				p = n("./src/reddit/models/Post/index.ts"),
				O = n("./src/reddit/routes/subreddit/index.ts"),
				I = n("./src/reddit/selectors/profile.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/lib/makePostCreationPageKey/index.ts"),
				x = n("./src/lib/makeSearchKey/index.ts"),
				h = n("./src/reddit/constants/livebar.ts"),
				j = n("./src/reddit/helpers/correlationIdTracker.ts"),
				E = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				v = n("./src/reddit/helpers/trackers/searchResults.ts"),
				T = n("./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts"),
				S = n("./src/reddit/selectors/postDraft.ts"),
				N = n("./src/reddit/selectors/telemetry.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				y = n("./src/telemetry/index.ts");
			const k = (e, t, n, r, d, b) => {
					const {
						route: I
					} = e, {
						name: g
					} = I.meta;
					if (!g) return;
					const h = t.platform.currentPage;
					switch (g) {
						case s.Tb.COMMENTS: {
							const {
								partialCommentId: o,
								partialPostId: s
							} = e.match.params, i = Object(p.y)(s), a = Object(l.a)(e, t, t.posts.models[i]), d = Object(c.a)(t.platform.currentPage);
							if (!a || d) return;
							const b = o && Object(m.h)(o),
								{
									sortToUse: f
								} = Object(u.a)(t, i);
							Object(y.a)(R(a, i, b, n, r, f)(t));
							break
						}
						case s.Tb.INDEX:
						case s.Tb.LISTING:
						case s.Tb.MULTIREDDIT:
						case s.Tb.SUBREDDIT: {
							const o = Object(l.c)(e, t);
							if (!o.listingKey) return;
							const {
								params: i,
								queryParams: c,
								path: a
							} = e.match, {
								sort: d = (o.sort ? o.sort : s.bb.HOT)
							} = i, u = c.t, b = a === O.a;
							Object(y.a)(w({
								key: o.listingKey,
								sort: d,
								timerType: n,
								timerMillis: r,
								timeSort: u,
								isPredictionsPage: b
							})(t));
							break
						}
						case s.Tb.TOPIC: {
							const o = Object(l.c)(e, t);
							if (!o.listingKey) return;
							const {
								params: i
							} = e.match, c = o.sort ? o.sort : s.cb, {
								sort: a = c
							} = i;
							Object(y.a)(w({
								key: o.listingKey,
								sort: a,
								timerType: n,
								timerMillis: r
							})(t));
							break
						}
						case s.Tb.PROFILE_OVERVIEW: {
							const o = Object(l.d)(e, t);
							if (!o) return;
							const {
								params: i,
								queryParams: c
							} = e.match, {
								sort: a = s.Kb
							} = i, d = c.t;
							Object(y.a)(L(o, a, n, r, d)(t));
							break
						}
						case s.Tb.PROFILE_POSTS: {
							const o = Object(l.d)(e, t);
							if (!o) return;
							const {
								queryParams: i
							} = e.match, {
								sort: c = s.Kb,
								t: a = s.Lb
							} = i;
							Object(y.a)(A(o, c, n, r, a)(t));
							break
						}
						case s.Tb.PROFILE_COMMENTS: {
							const o = Object(l.d)(e, t);
							if (!o) return;
							const {
								queryParams: i
							} = e.match, {
								sort: c = s.Kb,
								t: a = s.Lb
							} = i;
							Object(y.a)(D(o, c, n, r, a)(t));
							break
						}
						case s.Tb.PROFILE_PRIVATE: {
							const o = Object(l.d)(e, t);
							if (!o) return;
							Object(y.a)(U(o)(r, n)(t));
							break
						}
						case s.Tb.FOLLOWERS:
							V(t);
							break;
						case s.Tb.PROFILE_MODERATION:
							b && B(t, !0);
							break;
						case s.Tb.SETTINGS: {
							const o = e;
							Object(y.a)(X(n, r)(t)), o.match.params.page === s.jc.Profile && Object(f.l)(t);
							break
						}
						case s.Tb.POST_CREATION:
							if (b && d) {
								const e = Object(_.a)(d);
								Object(y.a)(M(e, n, r)(t))
							}
							break;
						case s.Tb.POST_DRAFT: {
							const {
								draftId: o
							} = e.match.params, s = Object(i.a)(e.match.params);
							if (!s) return;
							W(t, s, o, n, r);
							break
						}
						case s.Tb.SUBREDDIT_WIKI:
							Object(y.a)(J(n, r)(t));
							break;
						case s.Tb.COINS:
							Object(y.a)(K(n, r)(t)), Object(y.a)(q()(t));
							break;
						case s.Tb.PREMIUM:
							Object(y.a)(Y(n, r)(t)), Object(y.a)(z()(t));
							break;
						case s.Tb.APPEAL:
							Object(y.a)(Q(n, r)(t));
							break;
						case s.Tb.INBOX_PAGES:
							b && H(t);
							break;
						case s.Tb.MODERATION_PAGES:
							b && F(t, !0, d ? d.subredditName : null, d ? d.profileName : null);
							break;
						case s.Tb.COLLECTION_COMMENTS:
							b && oe(t, !0);
							break;
						case s.Tb.MODQUEUE_PAGES:
							b && G(t, d ? d.subredditName : null, d ? d.profileName : null);
							break;
						case s.Tb.SEARCH_RESULTS:
							if (b) {
								const s = Object(C.mb)(t),
									i = Object(C.rb)(t),
									c = Object(l.e)(e, s && i);
								if (!c) return;
								Object(y.a)(ne(c, Object(x.e)(o()(h && h.queryParams || {}, a.y)), n, r, h)(t))
							}
							break;
						case s.Tb.GEOTAGGING:
							b && Object(y.a)(Z()(t));
							break;
						case s.Tb.SUBREDDIT_CREATION:
							b && Object(y.a)($()(t));
							break;
						case s.Tb.MOD_LISTING:
							b && se(t, !0)
					}
				},
				P = e => ({
					...N.o(e),
					userPreferences: N.tb(e)
				}),
				w = e => {
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
						} : {}, l = Object(T.b)(e);
						return {
							source: "global",
							action: "view",
							noun: "screen",
							...P(e),
							actionInfo: N.d(e, {
								success: d,
								...u
							}),
							customFeed: N.m(e),
							listing: N.z(e, t, {
								sort: n,
								sortTime: s
							}),
							subreddit: N.lb(e),
							timer: N.rb(r, o),
							userSubreddit: N.ub(e),
							adblock: N.e(e),
							postFlair: {
								title: i
							},
							predictions: c ? Object(N.R)(e) : void 0,
							...(null == l ? void 0 : l.internalLinkUrl) ? {
								seo: l
							} : void 0
						}
					}
				},
				L = (e, t, n, r, o) => s => {
					const i = N.z(s, e);
					i && (i.sort = t, o && (i.sortTime = o));
					const {
						api: c
					} = s.listings.postOrder, a = !c.error[e] && !c.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						...P(s),
						actionInfo: N.d(s, {
							success: a
						}),
						profile: N.T(s),
						snoovatar: N.ib(s),
						subreddit: N.lb(s),
						timer: N.rb(n, r),
						userSubreddit: N.ub(s),
						adblock: N.e(s)
					}
				},
				A = (e, t, n, r, o) => s => {
					const i = N.z(s, e);
					i && (i.sort = t, o && (i.sortTime = o));
					const {
						api: c
					} = s.listings.postOrder, a = !c.error[e] && !c.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						...P(s),
						actionInfo: N.d(s, {
							success: a
						}),
						profile: N.T(s),
						subreddit: N.lb(s),
						timer: N.rb(n, r),
						userSubreddit: N.ub(s),
						adblock: N.e(s)
					}
				},
				D = (e, t, n, r, o) => s => {
					const i = N.W(s, e);
					i && (i.sort = t, o && (i.sortTime = o));
					const {
						api: c
					} = s.profileCommentsPage, a = !c.error[e] && !c.pending[e];
					return {
						listing: i,
						source: "global",
						action: "view",
						noun: "screen",
						...P(s),
						actionInfo: N.d(s, {
							success: a
						}),
						profile: N.T(s),
						subreddit: N.lb(s),
						timer: N.rb(n, r),
						userSubreddit: N.ub(s),
						adblock: N.e(s)
					}
				},
				U = e => (t, n) => r => {
					const o = !r.profilePrivatePage.api.error[e] && !r.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...P(r),
						actionInfo: N.d(r, {
							success: o
						}),
						profile: N.T(r),
						subreddit: N.lb(r),
						timer: N.rb(n, t),
						userSubreddit: N.ub(r),
						adblock: N.e(r)
					}
				},
				R = (e, t, n, r, o, s) => i => {
					const {
						api: c
					} = i.pages.comments, a = !c.error[e] && !c.pending[e], d = new URLSearchParams(window.location.search).has(h.a), u = Object(T.b)(i), l = {
						source: "global",
						action: "view",
						noun: "screen",
						...P(i),
						actionInfo: N.d(i, {
							success: a,
							...d ? {
								reason: "live_bar"
							} : {}
						}),
						post: N.K(i, t),
						profile: N.T(i),
						subreddit: N.lb(i),
						timer: N.rb(r, o),
						userSubreddit: N.ub(i),
						adblock: N.e(i),
						postEvent: N.N(i, {
							postId: t
						}),
						postCollection: N.M(i, {
							postId: t
						}),
						listing: N.z(i, void 0, {
							sort: s
						})
					};
					return n && (l.comment = N.h({
						state: i,
						commentId: n
					})), (null == u ? void 0 : u.internalLinkUrl) && (l.seo = u), l
				},
				M = (e, t, n) => r => {
					const o = r.creations.api.page.fetched[e],
						s = r.platform.currentPage ? r.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...P(r),
						actionInfo: N.d(r, {
							success: o
						}),
						post: s ? N.K(r, s) : void 0,
						subreddit: N.lb(r),
						timer: N.rb(t, n),
						userSubreddit: N.ub(r),
						adblock: N.e(r)
					}
				},
				B = (e, t) => {
					Object(y.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...P(e),
						actionInfo: N.d(e, {
							success: t
						})
					})
				},
				F = (e, t, n, r) => {
					Object(y.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...P(e),
						actionInfo: N.d(e, {
							success: t
						}),
						profile: N.U(e, Object(I.o)(e, r)),
						subreddit: N.mb(e, Object(g.I)(e, n)),
						userSubreddit: N.ub(e),
						adblock: N.e(e)
					})
				},
				G = (e, t, n) => {
					Object(y.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...P(e),
						profile: N.U(e, Object(I.o)(e, n)),
						subreddit: N.mb(e, Object(g.I)(e, t)),
						userSubreddit: N.ub(e),
						adblock: N.e(e)
					})
				},
				H = e => {
					Object(y.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...P(e),
						actionInfo: N.d(e)
					})
				},
				V = e => {
					Object(y.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...P(e),
						actionInfo: N.d(e)
					})
				},
				W = (e, t, n, r, o) => {
					const s = e.creations.api.page.pending[t],
						i = !e.creations.api.page.error[t] && !s && !!n,
						c = Object(S.h)(e, n);
					Object(y.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...P(e),
						actionInfo: N.d(e, {
							success: i
						}),
						subreddit: N.lb(e),
						timer: N.rb(r, o),
						userSubreddit: N.ub(e),
						adblock: N.e(e),
						...c ? Object(b.r)(e, c) : {}
					})
				},
				K = (e, t) => n => ({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(j.c)(j.a.GoldPayment),
					...P(n),
					timer: N.rb(e, t),
					adblock: N.e(n)
				}),
				q = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...P(e)
				}),
				Y = (e, t) => n => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(j.c)(j.a.GoldPayment),
					...P(n),
					timer: N.rb(e, t),
					adblock: N.e(n)
				}),
				z = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...P(e)
				}),
				Q = (e, t) => n => ({
					source: "appeal",
					action: "view",
					noun: "page",
					...P(n),
					timer: N.rb(e, t)
				}),
				X = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					...P(n),
					timer: N.rb(e, t)
				}),
				$ = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...P(e)
				}),
				J = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					...P(n),
					customFeed: N.m(n),
					subreddit: N.lb(n),
					timer: N.rb(e, t),
					userSubreddit: N.ub(n),
					adblock: N.e(n)
				}),
				Z = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...P(e)
				}),
				ee = {
					source: "global",
					action: d.c.VIEW,
					noun: "screen"
				},
				te = e => !!e && {
					correlationId: Object(j.c)(j.a.SearchResults)
				},
				ne = (e, t, n, r, o, i) => c => {
					var a, d;
					let u = !0;
					if (t.type.indexOf(s.ic.Posts) > -1) {
						const {
							api: t
						} = c.listings.listingOrder;
						u = u && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(s.ic.Subreddits) > -1 || t.type.indexOf(s.ic.Users) > -1) {
						const {
							api: t
						} = c.listings.postOrder;
						u = u && !t.error[e] && !t.pending[e]
					}
					const l = N.H(c, o);
					return {
						...v.f(c, t),
						...ee,
						...N.o(c),
						actionInfo: N.d(c, {
							success: u,
							paneName: l
						}),
						timer: N.rb(n, r),
						search: {
							...N.db(c, t, E.a.SERP, o || void 0),
							sort: null !== (a = t.sort) && void 0 !== a ? a : s.Vb,
							range: null !== (d = t.t) && void 0 !== d ? d : s.Wb
						},
						...te(i),
						userPreferences: N.gb(c)
					}
				},
				re = (e, t, n) => r => ({
					...N.o(r),
					...ee,
					actionInfo: {
						...N.d(r),
						pageType: "search_dropdown"
					},
					search: N.db(r, e, E.a.Typeahead, t || void 0),
					...te(n),
					userPreferences: N.gb(r)
				}),
				oe = (e, t) => {
					Object(y.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...P(e),
						actionInfo: N.d(e, {
							success: t
						})
					})
				},
				se = (e, t) => {
					Object(y.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...P(e),
						actionInfo: N.d(e, {
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
							type: t,
							url: n,
							name: r,
							position: o,
							isNew: s,
							currentList: i
						}
					}
				},
				i = e => t => ({
					...Object(o.o)(t),
					action: r.c.CLICK,
					noun: "add_social_link",
					source: e
				}),
				c = e => t => ({
					...Object(o.o)(t),
					action: r.c.CLICK,
					noun: "social_link",
					source: "add_social_link",
					...s({
						socialLinkType: e
					})
				}),
				a = e => t => ({
					...Object(o.o)(t),
					action: r.c.CLICK,
					noun: "save",
					source: "add_social_link",
					...s(e)
				}),
				d = e => t => ({
					...Object(o.o)(t),
					action: r.c.CLICK,
					noun: "edit_social_link",
					source: "profile_settings",
					...s(e)
				}),
				u = e => t => ({
					...Object(o.o)(t),
					action: r.c.CLICK,
					noun: "delete_social_link",
					source: "profile_settings",
					...s(e)
				}),
				l = e => t => ({
					...Object(o.o)(t),
					action: r.c.CLICK,
					noun: "social_link",
					source: "profile",
					profile: Object(o.T)(t),
					...s(e)
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
					...Object(i.o)(c),
					actionInfo: Object(i.d)(c),
					geo: Object(i.t)(c),
					screen: Object(i.cb)(c),
					subreddit: Object(i.lb)(c),
					outbound: Object(i.G)(c, e, t, r, n)
				};
				return n && (a.comment = Object(i.h)({
					state: c,
					commentId: n
				})), r && (a.post = Object(i.K)(c, r)), o && (a.socialLink = Object(s.g)({
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
			t.a = r.ib
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
				xmlns: "http://www.w3.org/2000/svg",
				style: e.style
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
		"./src/reddit/models/Badge/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, o, s, i = n("./src/config.ts");

			function c(e) {
				return "userId" in e
			}

			function a(e) {
				return !(!e.extra || !e.extra.membership) && !!e.extra.membership.included
			}

			function d(e, t, n) {
				const r = n.media[0],
					o = Object.keys(r);
				if (r["0x0"]) return r["0x0"];
				let s = {
					width: 1 / 0,
					height: 1 / 0,
					url: ""
				};
				if (o.forEach(n => {
						const o = r[n],
							[i, c] = n.split("x").map(e => parseInt(e));
						(i < s.width && i >= e || c < s.height && c >= t) && (s = {
							height: c,
							width: i,
							url: o
						})
					}), !s.url && o.length) {
					const e = Object.keys(r)[0],
						t = r[e],
						[n, o] = e.split("x").map(e => parseInt(e));
					s = {
						height: o,
						width: n,
						url: t
					}
				}
				return s.url
			}

			function u(e) {
				return e.startsWith("https") ? e : `${i.a.assetPath}/${e}`
			}

			function l(e, t, n) {
				const r = d(e, t, n),
					o = d(2 * e, 2 * t, n);
				return {
					url: u(r),
					url2x: u(o)
				}
			}! function(e) {
				e.First = "p1", e.Second = "p2"
			}(r || (r = {})),
			function(e) {
				e.ActivityTab = "activityTab", e.ChatTab = "chatTab", e.MessageTab = "messageTab", e.ChatHasNewMessages = "chatHasNewMessages", e.ChatUnreadMessages = "chatUnreadMessages", e.ChatV2UnreadMessages = "chatV2UnreadMessages"
			}(o || (o = {})),
			function(e) {
				e.Numbered = "NUMBERED", e.Filled = "FILLED"
			}(s || (s = {}))
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
		"./src/reddit/selectors/appBadges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "f", (function() {
				return s
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "j", (function() {
				return f
			}));
			var r = n("./node_modules/reselect/es/index.js");
			const o = e => e.appBadges.badges,
				s = Object(r.a)(o, e => {
					var t;
					return (null === (t = e.chatUnreadMessages) || void 0 === t ? void 0 : t.count) || 0
				}),
				i = e => {
					var t;
					return (null === (t = e.appBadges.badges.chatV2UnreadMessages) || void 0 === t ? void 0 : t.count) || 0
				},
				c = Object(r.a)(o, e => e && e.chatRooms && e.chatRooms.count || 0),
				a = Object(r.a)(o, e => e && e.chatRoomMentions && e.chatRoomMentions.count || 0),
				d = Object(r.a)(s, o, (e, t) => {
					var n;
					return 0 === e && !!(null === (n = t.chatHasNewMessages) || void 0 === n ? void 0 : n.isShowing)
				}),
				u = Object(r.a)(o, e => e && e.activityTab && e.activityTab.count || 0),
				l = Object(r.a)(o, e => e && e.messageTab && e.messageTab.count || 0),
				b = Object(r.a)(u, l, (e, t) => e + t),
				f = Object(r.a)(s, b, (e, t) => e + t)
		},
		"./src/reddit/selectors/experiments/newCommunityProgressV3.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return O
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
					if (Object(f.P)(e)) return O(e);
					const n = Object(b.M)(e, {
						identifier: {
							id: t,
							type: i.a.SUBREDDIT
						}
					});
					if (!n || !n.created) return;
					const r = n.created;
					return r ? r * o.Xb < 1639443600180 ? void 0 : O(e) : void 0
				},
				O = Object(r.a)(e => Object(c.c)(e, {
					experimentName: s.Re,
					experimentEligibilitySelector: a.e
				}), d.a)
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
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return d
			}));
			const r = e => e.user.notificationPrefs.api.getPreferences.loaded,
				o = e => e.user.notificationPrefs.api.getPreferences.pending,
				s = e => e.user.notificationPrefs.api.setPreferences.pending,
				i = e => e.user.notificationPrefs.preferences,
				c = e => e.user.notificationPrefs.isNotificationPromptVisible,
				a = e => e.user.notificationPrefs.isAskNotificationPromptVisible,
				d = (e, t) => {
					var n, r;
					const o = (e => e.user.notificationPrefs.pushSettingsLayout)(e),
						s = null === (n = null == o ? void 0 : o.rows) || void 0 === n ? void 0 : n.byId;
					return s && (null === (r = s[t]) || void 0 === r ? void 0 : r.isEnabled)
				}
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
				p = Object(s.a)(o.a, e => e === r.d.NotificationsSupported)
		},
		"./src/redditGQL/operations/BadgeIndicators.json": function(e) {
			e.exports = JSON.parse('{"id":"fbbc7389e1ff"}')
		},
		"./src/redditGQL/operations/BlockAwarder.json": function(e) {
			e.exports = JSON.parse('{"id":"9769ffbb7031"}')
		},
		"./src/redditGQL/operations/DeleteInboxNotifications.json": function(e) {
			e.exports = JSON.parse('{"id":"ce2deb9deef7"}')
		},
		"./src/redditGQL/operations/NotificationInboxFeed.json": function(e) {
			e.exports = JSON.parse('{"id":"be3e43b15ada"}')
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
			e.exports = JSON.parse('{"id":"775bcf2e4ca3"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Governance~ModListing~Reddit.c288481628d941111e9c.js.map