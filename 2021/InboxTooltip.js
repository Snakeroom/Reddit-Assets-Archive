// https://www.redditstatic.com/desktop2x/InboxTooltip.aaeeef7a6d8ef96fbffc.js
// Retrieved at 4/20/2021, 1:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["InboxTooltip"], {
		"./src/reddit/components/InboxTooltip/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var o = i("./node_modules/react/index.js"),
				s = i.n(o),
				n = i("./node_modules/react-redux/es/index.js"),
				a = i("./node_modules/reselect/es/index.js"),
				d = i("./src/reddit/actions/appBadgeIndicators/index.ts"),
				c = i("./src/reddit/actions/notificationsInbox/index.ts"),
				r = i("./src/reddit/components/InboxTooltip/Component.tsx"),
				b = i("./src/reddit/helpers/trackers/inbox.ts"),
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
					disableNotificationUpdates: t => e(Object(c.c)(t)),
					fetchNotifications: t => e(Object(c.d)(t)),
					hideNotification: t => e(Object(c.b)(t)),
					hideSubredditNotifications: (t, i) => e(Object(c.f)(t, i)),
					markAllAsRead: () => e(Object(c.g)()),
					markNotificationAsRead: (t, i) => e(Object(c.h)(t, i)),
					updateInboxActivitySeenState: () => e(Object(c.i)()),
					blockAwarder: t => e(Object(c.a)(t))
				}));
			t.default = A(({
				clearMessageTabBadgeCount: e,
				disableNotificationUpdates: t,
				fetchNotifications: i,
				hideNotification: n,
				hideSubredditNotifications: a,
				blockAwarder: d,
				inboxBadgeCount: c,
				isInboxMarkAllAsReadEnabled: f,
				isInboxPostEmbedEnabled: u,
				isOpen: x,
				isPending: g,
				markAllAsRead: A,
				markNotificationAsRead: O,
				messagesBadgeCount: p,
				notifications: m,
				updateInboxActivitySeenState: j,
				hideTooltip: h
			}) => {
				const I = Object(l.a)(),
					[N, k] = Object(o.useState)("");
				return Object(o.useEffect)(() => {
					if (x && !m.length) {
						i({
							first: 5
						})
					}
					x && (j(), I(Object(b.n)({
						badgeCount: c
					})))
				}, [x]), s.a.createElement(r.b, {
					activeOverflowMenuId: N,
					clearMessageTabBadgeCount: e,
					disableNotificationUpdates: t,
					hideNotification: n,
					hideSubredditNotifications: a,
					blockAwarder: d,
					inboxBadgeCount: c,
					isInboxMarkAllAsReadEnabled: f,
					isInboxPostEmbedEnabled: u,
					isPending: g,
					markAllAsRead: A,
					markNotificationAsRead: O,
					messagesBadgeCount: p,
					notifications: m,
					setActiveOverflowMenuId: k,
					hideTooltip: h
				})
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InboxTooltip.aaeeef7a6d8ef96fbffc.js.map