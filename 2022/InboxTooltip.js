// https://www.redditstatic.com/desktop2x/InboxTooltip.6ab79059bfa692247165.js
// Retrieved at 3/15/2022, 2:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["InboxTooltip"], {
		"./src/reddit/actions/subreddit/notifications.ts": function(t, e, i) {
			"use strict";
			i.d(e, "a", (function() {
				return u
			})), i.d(e, "b", (function() {
				return x
			}));
			var s = i("./node_modules/fbt/lib/FbtPublic.js"),
				n = i("./src/lib/makeActionCreator/index.ts"),
				o = i("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				d = i("./src/reddit/actions/notificationsInbox/index.ts"),
				a = i("./src/reddit/actions/subreddit/constants.ts"),
				r = i("./src/reddit/actions/toaster.ts"),
				c = i("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				b = i("./src/reddit/models/Subreddit/index.ts"),
				l = i("./src/reddit/models/Toast/index.ts");
			const u = Object(n.a)(a.u),
				f = Object(n.a)(a.t),
				g = Object(n.a)(a.s),
				p = t => {
					switch (t) {
						case b.b.OFF:
							return s.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case b.b.FREQUENT:
							return s.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case b.b.LOW:
							return s.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const x = ({
				subredditId: t,
				notificationLevel: e,
				successCallback: i,
				undoCallback: n
			}) => async (a, x, {
				gqlContext: O
			}) => {
				var m, h, S;
				a(f());
				const j = (t => {
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
					})(e),
					N = await Object(c.b)(O(), t, j);
				if ((null === (h = null === (m = N.error) || void 0 === m ? void 0 : m.fields) || void 0 === h ? void 0 : h.length) || function(t) {
						return Boolean(t && t.data && t.data.updateSubredditNotificationSettings)
					}(N.body) && (null === (S = N.body.data.updateSubredditNotificationSettings.errors) || void 0 === S ? void 0 : S.length)) return a(g()), a(Object(r.f)({
					kind: l.b.Error,
					text: s.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
						hk: "4avFFV"
					})
				}));
				N.ok && (a(Object(o.c)({
					subredditId: t,
					notificationLevel: e
				})), a(u({
					subredditAboutInfo: {
						[t]: {
							notificationLevel: e
						}
					}
				})), i && i(), a(n ? Object(r.f)(Object(r.e)(p(e), l.b.Undo, s.fbt._("Undo", null, {
					hk: "46OwLP"
				}), Object(d.i)(t, n))) : Object(r.f)(Object(r.e)(p(e), l.b.SuccessCommunityGreen))))
			}
		},
		"./src/reddit/components/InboxTooltip/index.tsx": function(t, e, i) {
			"use strict";
			i.r(e);
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				o = i("./node_modules/react-redux/es/index.js"),
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
				x = i("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				O = i("./src/reddit/selectors/experiments/wrappedReddit.ts"),
				m = i("./src/reddit/selectors/notificationsInbox.tsx");
			const h = Object(d.c)({
					isPushNotificationsSupported: m.h,
					cursor: m.c,
					hasNextPage: m.d,
					inboxBadgeCount: p.g,
					isWrappedRedditBannerEnabled: O.a,
					isInboxInfiniteScrollEnabled: x.c,
					isInboxPolicyBannerEnabled: x.e,
					isInboxPostEmbedEnabled: x.a,
					isPending: m.e,
					messagesBadgeCount: p.h,
					notifications: t => Object(x.c)(t) ? Object(m.f)(t) : Object(m.g)(t)
				}),
				S = Object(o.b)(h, (t, {
					desktopNotificationsModalId: e
				}) => ({
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
					showBrowserNotificationsPermissionSettings: () => t(Object(r.requestBrowserNotificationPermissionPromptByUser)(e)),
					updateInboxActivitySeenState: () => t(Object(c.j)())
				}));
			e.default = S(({
				clearMessageTabBadgeCount: t,
				cursor: e,
				decreaseSubredditNotifications: i,
				disableNotificationUpdates: o,
				fetchNotifications: d,
				hasNextPage: a,
				hideNotification: r,
				hideSubredditNotifications: c,
				hideTooltip: b,
				blockAwarder: g,
				inboxBadgeCount: p,
				isInboxPolicyBannerEnabled: x,
				isInboxInfiniteScrollEnabled: O,
				isInboxPostEmbedEnabled: m,
				isWrappedRedditBannerEnabled: h,
				isLoggedIn: S,
				isOpen: j,
				isPending: N,
				isPushNotificationsSupported: I,
				markAllAsRead: E,
				markNotificationAsRead: w,
				messagesBadgeCount: B,
				notifications: P,
				showBrowserNotificationsPermissionSettings: k,
				updateInboxActivitySeenState: A,
				userId: v
			}) => {
				const _ = Object(f.a)(),
					[C, y] = Object(s.useState)("");
				return Object(s.useEffect)(() => {
					if (j && !P.length && S) {
						d({
							first: 5
						})
					}
					j && S && (A(), _(Object(u.t)({
						badgeCount: p
					})))
				}, [j]), n.a.createElement(l.b, {
					activeOverflowMenuId: C,
					clearMessageTabBadgeCount: t,
					cursor: e,
					decreaseSubredditNotifications: i,
					disableNotificationUpdates: o,
					fetchNotifications: d,
					hasNextPage: a,
					hideNotification: r,
					hideSubredditNotifications: c,
					hideTooltip: b,
					blockAwarder: g,
					inboxBadgeCount: p,
					isPushNotificationsSupported: I,
					isInboxPolicyBannerEnabled: x,
					isInboxInfiniteScrollEnabled: O,
					isInboxPostEmbedEnabled: m,
					isWrappedRedditBannerEnabled: h,
					isLoggedIn: S,
					isPending: N,
					markAllAsRead: E,
					markNotificationAsRead: w,
					messagesBadgeCount: B,
					notifications: P,
					setActiveOverflowMenuId: y,
					showBrowserNotificationsPermissionSettings: k,
					userId: v
				})
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InboxTooltip.6ab79059bfa692247165.js.map