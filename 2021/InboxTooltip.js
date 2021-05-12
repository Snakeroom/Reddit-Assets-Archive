// https://www.redditstatic.com/desktop2x/InboxTooltip.8f6a4dcca86ecf8441a4.js
// Retrieved at 5/12/2021, 5:50:32 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["InboxTooltip"], {
		"./src/reddit/components/InboxTooltip/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var o = i("./node_modules/react/index.js"),
				s = i.n(o),
				n = i("./node_modules/react-redux/es/index.js"),
				d = i("./node_modules/reselect/es/index.js"),
				a = i("./src/reddit/actions/appBadgeIndicators/index.ts"),
				c = i("./src/reddit/actions/notificationsInbox/index.ts"),
				r = i("./src/reddit/components/InboxTooltip/Component.tsx"),
				b = i("./src/reddit/helpers/trackers/inbox.ts"),
				l = i("./src/reddit/hooks/useTracking.ts"),
				f = i("./src/reddit/selectors/appBadges.ts"),
				u = i("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				g = i("./src/reddit/selectors/notificationsInbox.tsx");
			const x = Object(d.c)({
					inboxBadgeCount: f.g,
					isInboxPostEmbedEnabled: u.a,
					isPending: g.e,
					messagesBadgeCount: f.h,
					notifications: g.g
				}),
				O = Object(n.b)(x, e => ({
					clearMessageTabBadgeCount: () => e(Object(a.b)()),
					disableNotificationUpdates: t => e(Object(c.c)(t)),
					fetchNotifications: t => e(Object(c.d)(t)),
					hideNotification: t => e(Object(c.b)(t)),
					hideSubredditNotifications: (t, i) => e(Object(c.f)(t, i)),
					markAllAsRead: () => e(Object(c.g)()),
					markNotificationAsRead: (t, i) => e(Object(c.h)(t, i)),
					updateInboxActivitySeenState: () => e(Object(c.i)()),
					blockAwarder: t => e(Object(c.a)(t))
				}));
			t.default = O(({
				clearMessageTabBadgeCount: e,
				disableNotificationUpdates: t,
				fetchNotifications: i,
				hideNotification: n,
				hideSubredditNotifications: d,
				blockAwarder: a,
				inboxBadgeCount: c,
				isInboxPostEmbedEnabled: f,
				isOpen: u,
				isPending: g,
				markAllAsRead: x,
				markNotificationAsRead: O,
				messagesBadgeCount: p,
				notifications: A,
				updateInboxActivitySeenState: m,
				hideTooltip: j
			}) => {
				const h = Object(l.a)(),
					[N, _] = Object(o.useState)("");
				return Object(o.useEffect)(() => {
					if (u && !A.length) {
						i({
							first: 5
						})
					}
					u && (m(), h(Object(b.n)({
						badgeCount: c
					})))
				}, [u]), s.a.createElement(r.b, {
					activeOverflowMenuId: N,
					clearMessageTabBadgeCount: e,
					disableNotificationUpdates: t,
					hideNotification: n,
					hideSubredditNotifications: d,
					blockAwarder: a,
					inboxBadgeCount: c,
					isInboxPostEmbedEnabled: f,
					isPending: g,
					markAllAsRead: x,
					markNotificationAsRead: O,
					messagesBadgeCount: p,
					notifications: A,
					setActiveOverflowMenuId: _,
					hideTooltip: j
				})
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InboxTooltip.8f6a4dcca86ecf8441a4.js.map