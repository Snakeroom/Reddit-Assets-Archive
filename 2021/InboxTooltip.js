// https://www.redditstatic.com/desktop2x/InboxTooltip.b6fbc231433f18a7afc0.js
// Retrieved at 6/1/2021, 6:00:05 PM by Reddit Dataminer v1.0.0
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
				u = i("./src/reddit/selectors/appBadges.ts"),
				x = i("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				f = i("./src/reddit/selectors/notificationsInbox.tsx");
			const g = Object(d.c)({
					inboxBadgeCount: u.g,
					isInboxPostEmbedEnabled: x.d,
					isPending: f.e,
					messagesBadgeCount: u.h,
					notifications: f.g,
					isInboxExposureBannerEnabled: x.b
				}),
				p = Object(n.b)(g, e => ({
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
			t.default = p(({
				clearMessageTabBadgeCount: e,
				disableNotificationUpdates: t,
				fetchNotifications: i,
				hideNotification: n,
				hideSubredditNotifications: d,
				blockAwarder: a,
				inboxBadgeCount: c,
				isInboxPostEmbedEnabled: u,
				isOpen: x,
				isPending: f,
				markAllAsRead: g,
				markNotificationAsRead: p,
				messagesBadgeCount: O,
				notifications: A,
				updateInboxActivitySeenState: m,
				hideTooltip: j,
				isInboxExposureBannerEnabled: E,
				userId: I
			}) => {
				const h = Object(l.a)(),
					[B, N] = Object(o.useState)("");
				return Object(o.useEffect)(() => {
					if (x && !A.length) {
						i({
							first: 5
						})
					}
					x && (m(), h(Object(b.n)({
						badgeCount: c
					})))
				}, [x]), s.a.createElement(r.b, {
					activeOverflowMenuId: B,
					clearMessageTabBadgeCount: e,
					disableNotificationUpdates: t,
					hideNotification: n,
					hideSubredditNotifications: d,
					blockAwarder: a,
					inboxBadgeCount: c,
					isInboxPostEmbedEnabled: u,
					isPending: f,
					markAllAsRead: g,
					markNotificationAsRead: p,
					messagesBadgeCount: O,
					notifications: A,
					setActiveOverflowMenuId: N,
					hideTooltip: j,
					isInboxExposureBannerEnabled: E,
					userId: I
				})
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InboxTooltip.b6fbc231433f18a7afc0.js.map