// https://www.redditstatic.com/desktop2x/InboxTooltip.4e4729cd534f9520084a.js
// Retrieved at 3/28/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["InboxTooltip"], {
		"./src/reddit/actions/subreddit/notifications.ts": function(t, e, i) {
			"use strict";
			i.d(e, "a", (function() {
				return u
			})), i.d(e, "b", (function() {
				return x
			}));
			var o = i("./node_modules/fbt/lib/FbtPublic.js"),
				s = i("./src/lib/makeActionCreator/index.ts"),
				n = i("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				d = i("./src/reddit/actions/notificationsInbox/index.ts"),
				a = i("./src/reddit/actions/subreddit/constants.ts"),
				r = i("./src/reddit/actions/toaster.ts"),
				c = i("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				b = i("./src/reddit/models/Subreddit/index.ts"),
				l = i("./src/reddit/models/Toast/index.ts");
			const u = Object(s.a)(a.u),
				f = Object(s.a)(a.t),
				g = Object(s.a)(a.s),
				p = t => {
					switch (t) {
						case b.b.OFF:
							return o.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case b.b.FREQUENT:
							return o.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case b.b.LOW:
							return o.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const x = t => {
				let {
					subredditId: e,
					notificationLevel: i,
					successCallback: s,
					undoCallback: a
				} = t;
				return async (t, x, O) => {
					let {
						gqlContext: m
					} = O;
					var h, S, j;
					t(f());
					const N = (t => {
							switch (t) {
								case b.b.FREQUENT:
									return {
										isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
									};
								case b.b.LOW:
									return {
										isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
									};
								case b.b.OFF:
								default:
									return {
										isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
									}
							}
						})(i),
						E = await Object(c.b)(m(), e, N);
					if ((null === (S = null === (h = E.error) || void 0 === h ? void 0 : h.fields) || void 0 === S ? void 0 : S.length) || function(t) {
							return Boolean(t && t.data && t.data.updateSubredditNotificationSettings)
						}(E.body) && (null === (j = E.body.data.updateSubredditNotificationSettings.errors) || void 0 === j ? void 0 : j.length)) return t(g()), t(Object(r.f)({
						kind: l.b.Error,
						text: o.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					E.ok && (t(Object(n.c)({
						subredditId: e,
						notificationLevel: i
					})), t(u({
						subredditAboutInfo: {
							[e]: {
								notificationLevel: i
							}
						}
					})), s && s(), t(a ? Object(r.f)(Object(r.e)(p(i), l.b.Undo, o.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(d.i)(e, a))) : Object(r.f)(Object(r.e)(p(i), l.b.SuccessCommunityGreen))))
				}
			}
		},
		"./src/reddit/components/InboxTooltip/index.tsx": function(t, e, i) {
			"use strict";
			i.r(e);
			var o = i("./node_modules/react/index.js"),
				s = i.n(o),
				n = i("./node_modules/react-redux/es/index.js"),
				d = i("./node_modules/reselect/es/index.js"),
				a = i("./src/reddit/actions/appBadgeIndicators/index.ts"),
				r = i("./src/reddit/actions/notifications/index.ts"),
				c = i("./src/reddit/actions/notificationsInbox/index.ts"),
				b = i("./src/reddit/actions/subreddit/notifications.ts"),
				l = i("./src/reddit/components/InboxTooltip/Component.tsx"),
				u = i("./src/reddit/helpers/trackers/inbox.ts"),
				f = i("./src/reddit/hooks/useTracking.ts"),
				g = i("./src/reddit/models/Subreddit/index.ts"),
				p = i("./src/reddit/selectors/appBadges.ts"),
				x = i("./src/reddit/selectors/experiments/hotPotato.ts"),
				O = i("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				m = i("./src/reddit/selectors/experiments/wrappedReddit.ts"),
				h = i("./src/reddit/selectors/notificationsInbox.tsx");
			const S = Object(d.c)({
					isPushNotificationsSupported: h.h,
					cursor: h.c,
					hasNextPage: h.d,
					isHotPotatoEnabled: t => Boolean(Object(x.a)(t)),
					inboxBadgeCount: p.g,
					isWrappedRedditBannerEnabled: m.a,
					isInboxInfiniteScrollEnabled: O.c,
					isInboxPolicyBannerEnabled: O.e,
					isInboxPostEmbedEnabled: O.a,
					isPending: h.e,
					messagesBadgeCount: p.h,
					notifications: t => Object(O.c)(t) ? Object(h.f)(t) : Object(h.g)(t)
				}),
				j = Object(n.b)(S, (t, e) => {
					let {
						desktopNotificationsModalId: i
					} = e;
					return {
						blockAwarder: e => t(Object(c.a)(e)),
						clearMessageTabBadgeCount: () => t(Object(a.b)()),
						decreaseSubredditNotifications: (e, i) => t(Object(b.b)({
							subredditId: e,
							notificationLevel: g.b.LOW,
							undoCallback: i
						})),
						disableNotificationUpdates: e => t(Object(c.c)(e)),
						fetchNotifications: e => t(Object(c.d)(e)),
						hideNotification: e => t(Object(c.b)(e)),
						hideSubredditNotifications: (e, i) => t(Object(c.f)(e, i)),
						markAllAsRead: () => t(Object(c.g)()),
						markNotificationAsRead: (e, i) => t(Object(c.h)(e, i)),
						showBrowserNotificationsPermissionSettings: () => t(Object(r.requestBrowserNotificationPermissionPromptByUser)(i)),
						updateInboxActivitySeenState: () => t(Object(c.j)())
					}
				});
			e.default = j(t => {
				let {
					clearMessageTabBadgeCount: e,
					cursor: i,
					decreaseSubredditNotifications: n,
					disableNotificationUpdates: d,
					fetchNotifications: a,
					hasNextPage: r,
					hideNotification: c,
					hideSubredditNotifications: b,
					hideTooltip: g,
					isHotPotatoEnabled: p,
					blockAwarder: x,
					inboxBadgeCount: O,
					isInboxPolicyBannerEnabled: m,
					isInboxInfiniteScrollEnabled: h,
					isInboxPostEmbedEnabled: S,
					isWrappedRedditBannerEnabled: j,
					isLoggedIn: N,
					isOpen: E,
					isPending: I,
					isPushNotificationsSupported: w,
					markAllAsRead: P,
					markNotificationAsRead: B,
					messagesBadgeCount: k,
					notifications: A,
					showBrowserNotificationsPermissionSettings: v,
					updateInboxActivitySeenState: _,
					userId: C
				} = t;
				const y = Object(f.a)(),
					[L, U] = Object(o.useState)("");
				return Object(o.useEffect)(() => {
					if (E && !A.length && N) {
						a({
							first: 5
						})
					}
					E && N && (_(), y(Object(u.w)({
						badgeCount: O
					})))
				}, [E]), s.a.createElement(l.b, {
					activeOverflowMenuId: L,
					clearMessageTabBadgeCount: e,
					cursor: i,
					decreaseSubredditNotifications: n,
					disableNotificationUpdates: d,
					fetchNotifications: a,
					hasNextPage: r,
					hideNotification: c,
					hideSubredditNotifications: b,
					hideTooltip: g,
					blockAwarder: x,
					inboxBadgeCount: O,
					isPushNotificationsSupported: w,
					isHotPotatoEnabled: p,
					isInboxPolicyBannerEnabled: m,
					isInboxInfiniteScrollEnabled: h,
					isInboxPostEmbedEnabled: S,
					isWrappedRedditBannerEnabled: j,
					isLoggedIn: N,
					isPending: I,
					markAllAsRead: P,
					markNotificationAsRead: B,
					messagesBadgeCount: k,
					notifications: A,
					setActiveOverflowMenuId: U,
					showBrowserNotificationsPermissionSettings: v,
					userId: C
				})
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InboxTooltip.4e4729cd534f9520084a.js.map