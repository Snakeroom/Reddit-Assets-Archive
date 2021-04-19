// https://www.redditstatic.com/desktop2x/InboxTooltip.874b6fafb857b2c42a54.js
// Retrieved at 4/19/2021, 3:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["InboxTooltip"], {
		"./src/reddit/components/InboxTooltip/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var s = i("./node_modules/react/index.js"),
				o = i.n(s),
				n = i("./node_modules/react-redux/es/index.js"),
				a = i("./node_modules/reselect/es/index.js"),
				d = i("./src/reddit/actions/appBadgeIndicators/index.ts"),
				c = i("./src/reddit/actions/notificationsInbox/index.ts"),
				b = i("./src/reddit/components/InboxTooltip/Component.tsx"),
				r = i("./src/reddit/helpers/trackers/inbox.ts"),
				l = i("./src/reddit/hooks/useTracking.ts"),
				f = i("./src/reddit/selectors/appBadges.ts"),
				u = i("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				x = i("./src/reddit/selectors/notificationsInbox.tsx");
			const g = Object(a.c)({
					inboxBadgeCount: f.g,
					isInboxMarkAllAsReadEnabled: u.a,
					isInboxPostEmbedEnabled: u.b,
					isPending: x.e,
					messagesBadgeCount: f.h,
					notifications: x.g
				}),
				A = Object(n.b)(g, e => ({
					clearMessageTabBadgeCount: () => e(Object(d.b)()),
					disableNotificationUpdates: t => e(Object(c.b)(t)),
					fetchNotifications: t => e(Object(c.c)(t)),
					hideNotification: t => e(Object(c.a)(t)),
					hideSubredditNotifications: (t, i) => e(Object(c.e)(t, i)),
					markAllAsRead: () => e(Object(c.f)()),
					markNotificationAsRead: (t, i) => e(Object(c.g)(t, i)),
					updateInboxActivitySeenState: () => e(Object(c.h)())
				}));
			t.default = A(({
				clearMessageTabBadgeCount: e,
				disableNotificationUpdates: t,
				fetchNotifications: i,
				hideNotification: n,
				hideSubredditNotifications: a,
				inboxBadgeCount: d,
				isInboxMarkAllAsReadEnabled: c,
				isInboxPostEmbedEnabled: f,
				isOpen: u,
				isPending: x,
				markAllAsRead: g,
				markNotificationAsRead: A,
				messagesBadgeCount: m,
				notifications: p,
				updateInboxActivitySeenState: O,
				hideTooltip: j
			}) => {
				const h = Object(l.a)(),
					[I, N] = Object(s.useState)("");
				return Object(s.useEffect)(() => {
					if (u && !p.length) {
						i({
							first: 5
						})
					}
					u && (O(), h(Object(r.m)({
						badgeCount: d
					})))
				}, [u]), o.a.createElement(b.b, {
					activeOverflowMenuId: I,
					clearMessageTabBadgeCount: e,
					disableNotificationUpdates: t,
					hideNotification: n,
					hideSubredditNotifications: a,
					inboxBadgeCount: d,
					isInboxMarkAllAsReadEnabled: c,
					isInboxPostEmbedEnabled: f,
					isPending: x,
					markAllAsRead: g,
					markNotificationAsRead: A,
					messagesBadgeCount: m,
					notifications: p,
					setActiveOverflowMenuId: N,
					hideTooltip: j
				})
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InboxTooltip.874b6fafb857b2c42a54.js.map