// https://www.redditstatic.com/desktop2x/InboxTooltip.eacd2f3ca1c9ee71e463.js
// Retrieved at 7/6/2021, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["InboxTooltip"], {
		"./src/reddit/components/InboxTooltip/index.tsx": function(e, t, i) {
			"use strict";
			i.r(t);
			var n = i("./node_modules/react/index.js"),
				o = i.n(n),
				s = i("./node_modules/react-redux/es/index.js"),
				a = i("./node_modules/reselect/es/index.js"),
				d = i("./src/reddit/actions/appBadgeIndicators/index.ts"),
				r = i("./src/reddit/actions/notificationsInbox/index.ts"),
				c = i("./src/reddit/components/InboxTooltip/Component.tsx"),
				b = i("./src/reddit/helpers/trackers/inbox.ts"),
				l = i("./src/reddit/hooks/useTracking.ts"),
				x = i("./src/reddit/selectors/appBadges.ts"),
				f = i("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				u = i("./src/reddit/selectors/notificationsInbox.tsx");
			const g = Object(a.c)({
					cursor: u.c,
					hasNextPage: u.d,
					inboxBadgeCount: x.g,
					isDNInboxPromptBannerFirstTimeEnabled: f.a,
					isDNInboxPromptBannerPersistEnabled: f.b,
					isInboxExposureBannerEnabled: f.d,
					isInboxInfiniteScrollEnabled: f.h,
					isInboxPostEmbedEnabled: f.f,
					isPending: u.e,
					messagesBadgeCount: x.h,
					notifications: e => Object(f.h)(e) ? Object(u.f)(e) : Object(u.g)(e)
				}),
				p = Object(s.b)(g, e => ({
					clearMessageTabBadgeCount: () => e(Object(d.b)()),
					disableNotificationUpdates: t => e(Object(r.c)(t)),
					fetchNotifications: t => e(Object(r.d)(t)),
					hideNotification: t => e(Object(r.b)(t)),
					hideSubredditNotifications: (t, i) => e(Object(r.f)(t, i)),
					markAllAsRead: () => e(Object(r.g)()),
					markNotificationAsRead: (t, i) => e(Object(r.h)(t, i)),
					updateInboxActivitySeenState: () => e(Object(r.i)()),
					blockAwarder: t => e(Object(r.a)(t))
				}));
			t.default = p(({
				clearMessageTabBadgeCount: e,
				cursor: t,
				disableNotificationUpdates: i,
				fetchNotifications: s,
				hasNextPage: a,
				hideNotification: d,
				hideSubredditNotifications: r,
				blockAwarder: x,
				inboxBadgeCount: f,
				isInboxInfiniteScrollEnabled: u,
				isDNInboxPromptBannerFirstTimeEnabled: g,
				isDNInboxPromptBannerPersistEnabled: p,
				isInboxExposureBannerEnabled: I,
				isInboxPostEmbedEnabled: m,
				isOpen: E,
				isPending: N,
				markAllAsRead: O,
				markNotificationAsRead: h,
				messagesBadgeCount: B,
				notifications: j,
				updateInboxActivitySeenState: A,
				hideTooltip: P,
				userId: _
			}) => {
				const C = Object(l.a)(),
					[S, k] = Object(n.useState)("");
				return Object(n.useEffect)(() => {
					if (E && !j.length) {
						s({
							first: 5
						})
					}
					E && (A(), C(Object(b.n)({
						badgeCount: f
					})))
				}, [E]), o.a.createElement(c.b, {
					activeOverflowMenuId: S,
					clearMessageTabBadgeCount: e,
					disableNotificationUpdates: i,
					hideNotification: d,
					hideSubredditNotifications: r,
					blockAwarder: x,
					inboxBadgeCount: f,
					isDNInboxPromptBannerFirstTimeEnabled: g,
					isDNInboxPromptBannerPersistEnabled: p,
					isInboxExposureBannerEnabled: I,
					isInboxPostEmbedEnabled: m,
					isPending: N,
					markAllAsRead: O,
					markNotificationAsRead: h,
					messagesBadgeCount: B,
					notifications: j,
					setActiveOverflowMenuId: k,
					hideTooltip: P,
					userId: _,
					isInboxInfiniteScrollEnabled: u,
					hasNextPage: a,
					cursor: t,
					fetchNotifications: s
				})
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InboxTooltip.eacd2f3ca1c9ee71e463.js.map