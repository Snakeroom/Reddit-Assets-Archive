// https://www.redditstatic.com/desktop2x/InboxTooltip.1e2c335e9f0b19abfd88.js
// Retrieved at 7/6/2021, 11:00:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["InboxTooltip"], {
		"./src/reddit/components/InboxTooltip/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var o = i("./node_modules/react/index.js"),
				n = i.n(o),
				s = i("./node_modules/react-redux/es/index.js"),
				a = i("./node_modules/reselect/es/index.js"),
				d = i("./src/reddit/actions/appBadgeIndicators/index.ts"),
				c = i("./src/reddit/actions/notificationsInbox/index.ts"),
				r = i("./src/reddit/components/InboxTooltip/Component.tsx"),
				b = i("./src/reddit/helpers/trackers/inbox.ts"),
				l = i("./src/reddit/hooks/useTracking.ts"),
				f = i("./src/reddit/selectors/appBadges.ts"),
				x = i("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				u = i("./src/reddit/selectors/notificationsInbox.tsx");
			const g = Object(a.c)({
					inboxBadgeCount: f.g,
					isInboxPostEmbedEnabled: x.d,
					isPending: u.e,
					messagesBadgeCount: f.h,
					notifications: e => Object(x.f)(e) ? Object(u.f)(e) : Object(u.g)(e),
					isInboxExposureBannerEnabled: x.b,
					isInboxInfiniteScrollEnabled: x.f,
					hasNextPage: u.d,
					cursor: u.c
				}),
				O = Object(s.b)(g, e => ({
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
			t.default = O(({
				clearMessageTabBadgeCount: e,
				cursor: t,
				disableNotificationUpdates: i,
				fetchNotifications: s,
				hasNextPage: a,
				hideNotification: d,
				hideSubredditNotifications: c,
				blockAwarder: f,
				inboxBadgeCount: x,
				isInboxExposureBannerEnabled: u,
				isInboxInfiniteScrollEnabled: g,
				isInboxPostEmbedEnabled: O,
				isOpen: p,
				isPending: I,
				markAllAsRead: j,
				markNotificationAsRead: A,
				messagesBadgeCount: E,
				notifications: h,
				updateInboxActivitySeenState: m,
				hideTooltip: N,
				userId: B
			}) => {
				const _ = Object(l.a)(),
					[C, S] = Object(o.useState)("");
				return Object(o.useEffect)(() => {
					if (p && !h.length) {
						s({
							first: 5
						})
					}
					p && (m(), _(Object(b.n)({
						badgeCount: x
					})))
				}, [p]), n.a.createElement(r.b, {
					activeOverflowMenuId: C,
					clearMessageTabBadgeCount: e,
					disableNotificationUpdates: i,
					hideNotification: d,
					hideSubredditNotifications: c,
					blockAwarder: f,
					inboxBadgeCount: x,
					isInboxPostEmbedEnabled: O,
					isPending: I,
					markAllAsRead: j,
					markNotificationAsRead: A,
					messagesBadgeCount: E,
					notifications: h,
					setActiveOverflowMenuId: S,
					hideTooltip: N,
					isInboxExposureBannerEnabled: u,
					userId: B,
					isInboxInfiniteScrollEnabled: g,
					hasNextPage: a,
					cursor: t,
					fetchNotifications: s
				})
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InboxTooltip.1e2c335e9f0b19abfd88.js.map