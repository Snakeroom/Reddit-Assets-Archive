// https://www.redditstatic.com/desktop2x/InboxTooltip.7a62e60d40cf8d1644ad.js
// Retrieved at 3/18/2021, 3:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["InboxTooltip"], {
		"./src/reddit/components/InboxTooltip/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var s = i("./node_modules/react/index.js"),
				o = i.n(s),
				a = i("./node_modules/react-redux/es/index.js"),
				n = i("./node_modules/reselect/es/index.js"),
				d = i("./src/reddit/actions/appBadgeIndicators/index.ts"),
				c = i("./src/reddit/actions/notificationsInbox/index.ts"),
				b = i("./src/reddit/components/InboxTooltip/Component.tsx"),
				r = i("./src/reddit/helpers/trackers/inbox.ts"),
				l = i("./src/reddit/hooks/useTracking.ts"),
				f = i("./src/reddit/selectors/appBadges.ts"),
				g = i("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				u = i("./src/reddit/selectors/notificationsInbox.tsx");
			const x = Object(n.c)({
					inboxBadgeCount: f.h,
					isInboxMarkAllAsReadEnabled: g.b,
					isInboxPostEmbedEnabled: g.c,
					isPending: u.e,
					messagesBadgeCount: f.i,
					notifications: u.g
				}),
				p = Object(a.b)(x, e => ({
					clearMessageTabBadgeCount: () => e(Object(d.b)()),
					disableMessageTypeNotifications: (t, i) => e(Object(c.b)(t, i)),
					disableNotificationUpdates: t => e(Object(c.c)(t)),
					fetchNotifications: t => e(Object(c.d)(t)),
					hideNotification: t => e(Object(c.a)(t)),
					hideSubredditNotifications: (t, i) => e(Object(c.f)(t, i)),
					markAllAsRead: () => e(Object(c.g)()),
					markNotificationAsRead: (t, i) => e(Object(c.h)(t, i)),
					updateInboxActivitySeenState: () => e(Object(c.i)())
				}));
			t.default = p(({
				clearMessageTabBadgeCount: e,
				disableMessageTypeNotifications: t,
				disableNotificationUpdates: i,
				fetchNotifications: a,
				hideNotification: n,
				hideSubredditNotifications: d,
				inboxBadgeCount: c,
				isInboxMarkAllAsReadEnabled: f,
				isInboxPostEmbedEnabled: g,
				isOpen: u,
				isPending: x,
				markAllAsRead: p,
				markNotificationAsRead: A,
				messagesBadgeCount: O,
				notifications: m,
				updateInboxActivitySeenState: N,
				hideTooltip: j
			}) => {
				const h = Object(l.a)(),
					[I, E] = Object(s.useState)("");
				return Object(s.useEffect)(() => {
					if (u && !m.length) {
						a({
							first: 5
						})
					}
					u && (N(), h(Object(r.m)({
						badgeCount: c
					})))
				}, [u]), o.a.createElement(b.b, {
					activeOverflowMenuId: I,
					clearMessageTabBadgeCount: e,
					disableMessageTypeNotifications: t,
					disableNotificationUpdates: i,
					hideNotification: n,
					hideSubredditNotifications: d,
					inboxBadgeCount: c,
					isInboxMarkAllAsReadEnabled: f,
					isInboxPostEmbedEnabled: g,
					isPending: x,
					markAllAsRead: p,
					markNotificationAsRead: A,
					messagesBadgeCount: O,
					notifications: m,
					setActiveOverflowMenuId: E,
					hideTooltip: j
				})
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InboxTooltip.7a62e60d40cf8d1644ad.js.map