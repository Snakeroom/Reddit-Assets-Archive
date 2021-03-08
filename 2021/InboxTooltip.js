// https://www.redditstatic.com/desktop2x/InboxTooltip.4f7cfa07a9abada178df.js
// Retrieved at 3/8/2021, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["InboxTooltip"], {
		"./src/graphql/operations/DeleteInboxNotifications.json": function(t) {
			t.exports = JSON.parse('{"id":"ce2deb9deef7"}')
		},
		"./src/graphql/operations/NotificationInboxFeed.json": function(t) {
			t.exports = JSON.parse('{"id":"94f052872d00"}')
		},
		"./src/graphql/operations/NotificationSettingsLayoutByChannel.json": function(t) {
			t.exports = JSON.parse('{"id":"d03522f8a8d4"}')
		},
		"./src/graphql/operations/UpdateInboxActivitySeenState.json": function(t) {
			t.exports = JSON.parse('{"id":"85d656894a08"}')
		},
		"./src/graphql/operations/UpdateNotificationPreferences.json": function(t) {
			t.exports = JSON.parse('{"id":"129085be0500"}')
		},
		"./src/reddit/actions/notificationSettingsLayout/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return j
			})), n.d(e, "b", (function() {
				return x
			})), n.d(e, "c", (function() {
				return h
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/notificationSettingsLayoutByChannelEndpoint.ts"),
				r = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				d = n("./src/reddit/models/Toast/index.ts");
			const b = Object(o.a)(s.c),
				l = Object(o.a)(s.b),
				u = Object(o.a)(s.a),
				f = Object(o.a)(s.f),
				O = Object(o.a)(s.e),
				p = Object(o.a)(s.d),
				j = t => async (e, n, {
					gqlContext: i
				}) => {
					t === r.a.Push ? e(f()) : e(b()), await async function(t, e, n) {
						const i = await Object(c.a)(t(), {
							channel: e
						});
						if (i.ok && i.body) {
							const t = function(t) {
								const e = t && t.data,
									n = e && e.notificationSettingsLayoutByChannel,
									i = n && n.sections;
								if (i) return function(t) {
									const e = {},
										n = [];
									let i = {},
										o = [];
									const s = t => {
										const {
											rowIds: s,
											rowsCollection: a
										} = function(t) {
											const e = [],
												n = {};
											if (t.rows)
												for (let i = 0; i < t.rows.length; i++) {
													const o = t.rows[i],
														s = o.messageType;
													e.push(s), n[s] = o
												}
											return {
												rowsCollection: n,
												rowIds: e
											}
										}(t);
										i = {
											...i,
											...a
										}, o = [...o, ...s];
										const c = t.id;
										n.push(c), e[c] = {
											...t,
											rows: s
										}
									};
									for (let a = 0; a < t.length; a++) s(t[a]);
									return {
										sections: {
											byId: e,
											allIds: n
										},
										rows: {
											byId: i,
											allIds: o
										}
									}
								}(i)
							}(i.body);
							e === r.a.Push ? n(O(t)) : n(l(t))
						} else e === r.a.Push ? n(p({
							error: i.error
						})) : n(u({
							error: i.error
						}))
					}(i, t, e)
				};
			const g = Object(o.a)(s.g),
				x = t => async (e, n, {
					gqlContext: o
				}) => {
					(await Object(c.b)(o(), t)).ok ? (h(e, t), function(t) {
						t(Object(a.e)({
							kind: d.b.SuccessCommunity,
							text: i.fbt._("Changes saved", null, {
								hk: "UBoVR"
							})
						}))
					}(e)) : function(t) {
						t(Object(a.e)({
							kind: d.b.Error,
							text: i.fbt._("We had some issues saving your changes. Please try again.", null, {
								hk: "1OvQi6"
							})
						}))
					}(e)
				};

			function h(t, e) {
				t(g({
					isEnabled: e.isEnabled,
					messageType: e.messageType
				}))
			}
		},
		"./src/reddit/actions/notificationsInbox/index.ts": function(t, e, n) {
			"use strict";
			n.d(e, "d", (function() {
				return R
			})), n.d(e, "a", (function() {
				return M
			})), n.d(e, "e", (function() {
				return B
			})), n.d(e, "b", (function() {
				return D
			})), n.d(e, "c", (function() {
				return q
			})), n.d(e, "g", (function() {
				return G
			})), n.d(e, "h", (function() {
				return Y
			})), n.d(e, "f", (function() {
				return H
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				a = n("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				c = n("./src/reddit/actions/notificationsInbox/constants.ts"),
				r = n("./src/reddit/actions/tabBadging.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/graphql/operations/DeleteInboxNotifications.json"),
				l = n("./src/lib/makeGqlRequest/index.ts");
			var u = n("./src/reddit/endpoints/notificationSettingsLayoutByChannelEndpoint.ts"),
				f = n("./src/graphql/operations/NotificationInboxFeed.json"),
				O = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				j = n("./src/lib/omitHeaders/index.ts"),
				g = n("./src/reddit/constants/headers.ts"),
				x = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var h;
			! function(t) {
				t.Activity = "activity", t.Messages = "messages"
			}(h || (h = {}));
			var m = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				y = n("./src/graphql/operations/UpdateInboxActivitySeenState.json");
			var S = n("./src/reddit/models/Badge/index.ts"),
				E = n("./src/reddit/models/NotificationInbox/index.ts"),
				I = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/selectors/appBadges.ts"),
				k = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				_ = n("./src/reddit/selectors/notificationPrefs.ts"),
				T = n("./src/reddit/selectors/notificationsInbox.tsx");
			const N = Object(o.a)(c.d),
				A = Object(o.a)(c.b),
				P = Object(o.a)(c.a),
				R = t => async (e, n, {
					gqlContext: i
				}) => {
					const o = n(),
						s = Object(T.a)(o);
					e(N());
					const a = await ((t, e) => Object(l.a)(t, {
						...f,
						variables: e
					}))(i(), t);
					if (!a.ok) return void P({
						error: a.error
					});
					const c = a && a.body,
						r = v(c);
					if (null === s) {
						const t = Object(T.f)(o);
						e(w(r.nodes, t.length))
					}
					e(A(r))
				}, v = t => {
					const e = t && t.data,
						n = e && e.notificationInbox,
						i = n && n.elements,
						o = i && i.pageInfo;
					return {
						nodes: (i && i.edges).map(t => t.node),
						pageInfo: o
					}
				}, w = (t, e) => async (n, i) => {
					const o = i(),
						s = Object(T.a)(o),
						a = ((t, e) => {
							let n, i = 0;
							const o = new Date,
								s = o.getDate(),
								a = o.getMonth(),
								c = o.getFullYear();
							for (; i < t.length && !n;) {
								const o = t[i],
									r = new Date(o.sentAt),
									d = r.getDate(),
									b = r.getMonth(),
									l = r.getFullYear();
								if ((d !== s || b !== a || l !== c) && !n) {
									n = ((e || 0) + i).toString()
								} else i++
							}
							return n
						})(t, e);
					a && a !== s && n(L({
						index: a
					}))
				}, L = Object(o.a)(c.f), U = (Object(o.a)(c.g), Object(o.a)(c.e)), M = t => async (e, n, {
					gqlContext: o
				}) => {
					const s = [t];
					if ((await ((t, e) => Object(l.a)(t, {
							...b,
							variables: {
								input: e
							}
						}))(o(), {
							notificationIds: s
						})).ok) {
						e(U({
							id: t
						}));
						const o = Object(T.f)(n());
						e(w(o)), e(Object(d.e)(Object(d.d)(i.fbt._("Notification hidden", null, {
							hk: "1jfPqO"
						}), I.b.SuccessCommunityGreen)))
					} else e(Object(d.e)(Object(d.d)(i.fbt._("Failed to hide notification, please try again.", null, {
						hk: "fL7uB"
					}), I.b.Error)))
				}, B = (t, e) => async (n, o, {
					gqlContext: s
				}) => {
					if (!t) return;
					const a = o(),
						c = () => {
							const n = Object(k.e)(a),
								o = i.fbt._("Success! You won't see notifications from this community in the future.", null, {
									hk: "2tkhbk"
								});
							return n ? Object(d.e)(Object(d.d)(o, I.b.Undo, i.fbt._("Undo", null, {
								hk: "4zFGDk"
							}), ((t, e) => async (n, o, {
								gqlContext: s
							}) => {
								if (!t) return;
								(await Object(m.b)(s(), t, {
									isSubredditUpdatesInterestingPostEnabled: !0,
									isUpdateFromSubredditEnabled: !0
								})).ok ? (e && e(), n(Object(d.e)(Object(d.d)(i.fbt._("Success! Undone hiding notifications from this community.", null, {
									hk: "1na0NP"
								}), I.b.SuccessCommunityGreen)))) : n(Object(d.e)(Object(d.d)(i.fbt._("Failed to undo hiding notifications, please try again.", null, {
									hk: "4jo7Pf"
								}), I.b.Error)))
							})(t, e))) : Object(d.e)(Object(d.d)(o, I.b.SuccessCommunityGreen))
						};
					(await Object(m.b)(s(), t, {
						isSubredditUpdatesInterestingPostEnabled: !1,
						isUpdateFromSubredditEnabled: !1
					})).ok ? n(c()) : n(Object(d.e)(Object(d.d)(i.fbt._("Failed to hide notifications, please try again.", null, {
						hk: "KEGcB"
					}), I.b.Error)))
				}, D = (t, e) => async (n, o, {
					gqlContext: s
				}) => {
					if (!t) return;
					const c = o(),
						r = () => {
							const n = Object(k.e)(c),
								o = i.fbt._("Success! You won't see notifications like this in the future.", null, {
									hk: "1ijcqU"
								});
							return n ? Object(d.e)(Object(d.d)(o, I.b.Undo, i.fbt._("Undo", null, {
								hk: "4zFGDk"
							}), ((t, e) => async (n, o, {
								gqlContext: s
							}) => {
								(await Object(u.b)(s(), {
									isEnabled: !0,
									messageType: t
								})).ok ? (Object(_.c)(o(), t) && Object(a.c)(n, {
									isEnabled: !1,
									messageType: t
								}), e && e(), n(Object(d.e)(Object(d.d)(i.fbt._("Success! Notifications like this were turned on.", null, {
									hk: "2krVMd"
								}), I.b.SuccessCommunityGreen)))) : n(Object(d.e)(Object(d.d)(i.fbt._("Failed to turn on these types of notifications.", null, {
									hk: "1dBLEQ"
								}), I.b.Error)))
							})(t, e))) : Object(d.e)(Object(d.d)(o, I.b.SuccessCommunityGreen))
						};
					(await Object(u.b)(s(), {
						isEnabled: !1,
						messageType: t
					})).ok ? (Object(_.c)(c, t) && Object(a.c)(n, {
						isEnabled: !1,
						messageType: t
					}), n(r())) : n(Object(d.e)(Object(d.d)(i.fbt._("Failed to turn off these types of notifications, please try again.", null, {
						hk: "2pNRDO"
					}), I.b.Error)))
				}, q = t => async (e, n, {
					apiContext: o
				}) => {
					if (!t) return;
					(await ((t, e) => Object(p.a)(Object(j.a)(t, [g.a]), {
						endpoint: Object(x.a)(`${t.apiUrl}/api/sendreplies`),
						method: O.cb.POST,
						data: {
							id: e
						}
					}))(o(), t)).ok ? e(Object(d.e)(Object(d.d)(i.fbt._("Success! You won't see updates on this in the future", null, {
						hk: "wtDa4"
					}), I.b.SuccessCommunityGreen))) : e(Object(d.e)(Object(d.d)(i.fbt._("Failed to turn off updates on this, please try again", null, {
						hk: "1zhpEy"
					}), I.b.Error)))
				}, F = Object(o.a)(c.c), G = (t, e) => async (n, i, {
					apiContext: o
				}) => {
					let a;
					if (e === E.a.CommentReply || e === E.a.PostReply || e === E.a.PrivateMessage || e === E.a.UsernameMention) {
						if ((a = await ((t, e) => Object(p.a)(Object(j.a)(t, [g.a]), {
								endpoint: Object(x.a)(`${t.apiUrl}/api/read_message`),
								method: O.cb.POST,
								data: {
									id: e
								}
							}))(o(), t)).ok) {
							let t = Object(C.a)(i());
							if (t > 0) {
								t--;
								const e = Object(s.e)({
									count: t,
									key: S.c.ActivityTab
								});
								n(Object(s.a)(e)), n(Object(r.e)())
							}
						}
					} else a = await ((t, e) => Object(p.a)(Object(j.a)(t, [g.a]), {
						endpoint: Object(x.a)(`${t.apiUrl}/api/read_notification`),
						method: O.cb.POST,
						data: {
							id: e
						}
					}))(o(), t);
					if (a.ok) {
						const e = (new Date).toISOString();
						n(F({
							id: t,
							now: e
						}))
					}
				}, Y = () => async (t, e, {
					gqlContext: n
				}) => {
					const i = (new Date).toLocaleDateString(),
						o = await ((t, e) => Object(l.a)(t, {
							...y,
							variables: {
								input: e
							}
						}))(n(), {
							lastSentAt: i
						});
					if (o.ok) {
						const e = o.body,
							n = e && e.data && e.data.updateInboxActivitySeenState && e.data.updateInboxActivitySeenState.badgeIndicators;
						n && (t(Object(s.a)(n)), t(Object(r.d)()))
					}
				}, H = () => async (t, e, {
					apiContext: n
				}) => {
					if ((await ((t, e) => Object(p.a)(Object(j.a)(t, [g.a]), {
							endpoint: Object(x.a)(`${t.apiUrl}/api/read_all_messages`),
							method: O.cb.POST,
							data: {
								filter_type: e
							}
						}))(n())).ok) {
						const e = Object(s.e)({
								count: 0,
								key: S.c.MessageTab
							}),
							n = Object(s.e)({
								count: 0,
								key: S.c.ActivityTab
							});
						t(Object(s.a)({
							...e,
							...n
						}))
					} else t(Object(d.e)(Object(d.d)(i.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
						hk: "VW7c3"
					}), I.b.Error)))
				}
		},
		"./src/reddit/components/InboxTooltip/index.tsx": function(t, e, n) {
			"use strict";
			n.r(e);
			var i = n("./node_modules/react/index.js"),
				o = n.n(i),
				s = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				r = n("./src/reddit/actions/notificationsInbox/index.ts"),
				d = n("./src/reddit/components/InboxTooltip/Component.tsx"),
				b = n("./src/reddit/helpers/trackers/inbox.ts"),
				l = n("./src/reddit/hooks/useTracking.ts"),
				u = n("./src/reddit/selectors/appBadges.ts"),
				f = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				O = n("./src/reddit/selectors/notificationsInbox.tsx");
			const p = Object(a.c)({
					inboxBadgeCount: u.g,
					isInboxMarkAllAsReadEnabled: f.b,
					isInboxPostEmbedEnabled: f.c,
					isPending: O.e,
					messagesBadgeCount: u.h,
					notifications: O.g
				}),
				j = Object(s.b)(p, t => ({
					clearMessageTabBadgeCount: () => t(Object(c.b)()),
					disableMessageTypeNotifications: (e, n) => t(Object(r.b)(e, n)),
					disableNotificationUpdates: e => t(Object(r.c)(e)),
					fetchNotifications: e => t(Object(r.d)(e)),
					hideNotification: e => t(Object(r.a)(e)),
					hideSubredditNotifications: (e, n) => t(Object(r.e)(e, n)),
					markAllAsRead: () => t(Object(r.f)()),
					markNotificationAsRead: (e, n) => t(Object(r.g)(e, n)),
					updateInboxActivitySeenState: () => t(Object(r.h)())
				}));
			e.default = j(({
				clearMessageTabBadgeCount: t,
				disableMessageTypeNotifications: e,
				disableNotificationUpdates: n,
				fetchNotifications: s,
				hideNotification: a,
				hideSubredditNotifications: c,
				inboxBadgeCount: r,
				isInboxMarkAllAsReadEnabled: u,
				isInboxPostEmbedEnabled: f,
				isOpen: O,
				isPending: p,
				markAllAsRead: j,
				markNotificationAsRead: g,
				messagesBadgeCount: x,
				notifications: h,
				updateInboxActivitySeenState: m
			}) => {
				const y = Object(l.a)(),
					[S, E] = Object(i.useState)("");
				return Object(i.useEffect)(() => {
					if (O && !h.length) {
						s({
							first: 5
						})
					}
					O && (m(), y(Object(b.l)({
						badgeCount: r
					})))
				}, [O]), o.a.createElement(d.b, {
					activeOverflowMenuId: S,
					clearMessageTabBadgeCount: t,
					disableMessageTypeNotifications: e,
					disableNotificationUpdates: n,
					hideNotification: a,
					hideSubredditNotifications: c,
					inboxBadgeCount: r,
					isInboxMarkAllAsReadEnabled: u,
					isInboxPostEmbedEnabled: f,
					isPending: p,
					markAllAsRead: j,
					markNotificationAsRead: g,
					messagesBadgeCount: x,
					notifications: h,
					setActiveOverflowMenuId: E
				})
			})
		},
		"./src/reddit/endpoints/notificationSettingsLayoutByChannelEndpoint.ts": function(t, e, n) {
			"use strict";
			n.d(e, "a", (function() {
				return a
			})), n.d(e, "b", (function() {
				return c
			}));
			var i = n("./src/graphql/operations/NotificationSettingsLayoutByChannel.json"),
				o = n("./src/graphql/operations/UpdateNotificationPreferences.json"),
				s = n("./src/lib/makeGqlRequest/index.ts");
			const a = (t, e) => Object(s.a)(t, {
					...i,
					variables: e
				}),
				c = (t, e) => Object(s.a)(t, {
					...o,
					variables: {
						input: {
							preferences: [e]
						}
					}
				})
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(t, e, n) {
			"use strict";
			var i, o;
			n.d(e, "a", (function() {
					return i
				})), n.d(e, "b", (function() {
					return o
				})),
				function(t) {
					t.CakeDay = "CAKE_DAY", t.ChatMessage = "CHAT_MESSAGE", t.CommentReply = "COMMENT_REPLY", t.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", t.PostReply = "POST_REPLY", t.PrivateMessage = "PRIVATE_MESSAGE", t.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", t.ThreadReplies = "THREAD_REPLIES", t.TopLevelComment = "TOP_LEVEL_COMMENT", t.UpvoteComment = "UPVOTE_COMMENT", t.UpvotePost = "UPVOTE_POST", t.UsernameMention = "USERNAME_MENTION", t.UserNewFollower = "USER_NEW_FOLLOWER"
				}(i || (i = {})),
				function(t) {
					t.Bell = "BELL", t.Chat = "CHAT", t.Comment = "COMMENT", t.Heart = "HEART", t.Trophy = "TROPHY", t.Reply = "REPLY", t.SortRising = "SORT_RISING", t.SortLive = "SORT_LIVE", t.SortTop = "SORT_TOP", t.Live = "LIVE", t.Redditor = "REDDITOR", t.Upvote = "UPVOTE"
				}(o || (o = {}))
		},
		"./src/reddit/models/NotificationSettingsLayout/index.ts": function(t, e, n) {
			"use strict";
			var i;
			n.d(e, "a", (function() {
					return i
				})),
				function(t) {
					t.Email = "EMAIL", t.Push = "PUSH"
				}(i || (i = {}))
		},
		"./src/reddit/selectors/notificationsInbox.tsx": function(t, e, n) {
			"use strict";
			n.d(e, "e", (function() {
				return o
			})), n.d(e, "d", (function() {
				return a
			})), n.d(e, "c", (function() {
				return c
			})), n.d(e, "f", (function() {
				return r
			})), n.d(e, "g", (function() {
				return d
			})), n.d(e, "a", (function() {
				return b
			})), n.d(e, "h", (function() {
				return l
			})), n.d(e, "b", (function() {
				return u
			}));
			var i = n("./node_modules/reselect/es/index.js");
			const o = t => t.notificationsInbox && t.notificationsInbox.api && t.notificationsInbox.api.pending,
				s = t => t.notificationsInbox && t.notificationsInbox.pageInfo,
				a = Object(i.a)(s, t => !(!t || !t.hasNextPage)),
				c = Object(i.a)(s, t => t && t.endCursor),
				r = t => t.notificationsInbox && t.notificationsInbox.notifications,
				d = Object(i.a)(r, t => t.slice(0, 5)),
				b = t => t.notificationsInbox && t.notificationsInbox.earlierDividerIndex,
				l = Object(i.a)(r, b, (t, e) => {
					if (e) {
						const n = parseInt(e);
						return t.slice(0, n)
					}
					return t
				}),
				u = Object(i.a)(r, b, (t, e) => {
					if (e) {
						const n = parseInt(e);
						return t.slice(n)
					}
					return null
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InboxTooltip.4f7cfa07a9abada178df.js.map