// https://www.redditstatic.com/desktop2x/InboxTooltip.8c9944a153697b655bc4.js
// Retrieved at 7/28/2021, 3:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["InboxTooltip"], {
		"./src/reddit/components/InboxTooltip/index.tsx": function(e, i, t) {
			"use strict";
			t.r(i);
			var n = t("./node_modules/react/index.js"),
				o = t.n(n),
				s = t("./node_modules/react-redux/es/index.js"),
				a = t("./node_modules/reselect/es/index.js"),
				d = t("./src/reddit/actions/appBadgeIndicators/index.ts"),
				r = t("./src/reddit/actions/notificationsInbox/index.ts"),
				c = t("./src/reddit/components/InboxTooltip/Component.tsx"),
				b = t("./src/reddit/helpers/trackers/inbox.ts"),
				l = t("./src/reddit/hooks/useTracking.ts"),
				x = t("./src/reddit/selectors/appBadges.ts"),
				f = t("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				u = t("./src/reddit/selectors/notificationsInbox.tsx");
			const I = Object(a.c)({
					cursor: u.c,
					hasNextPage: u.d,
					inboxBadgeCount: x.g,
					isDNInboxPromptBannerFirstTimeEnabled: f.a,
					isDNInboxPromptBannerPersistEnabled: f.b,
					isInboxExposureBannerEnabled: f.d,
					isInboxInfiniteScrollEnabled: f.h,
					isInboxPolicyBannerEnabled: f.i,
					isInboxPostEmbedEnabled: f.f,
					isPending: u.e,
					messagesBadgeCount: x.h,
					notifications: e => Object(f.h)(e) ? Object(u.f)(e) : Object(u.g)(e)
				}),
				p = Object(s.b)(I, e => ({
					clearMessageTabBadgeCount: () => e(Object(d.b)()),
					disableNotificationUpdates: i => e(Object(r.c)(i)),
					fetchNotifications: i => e(Object(r.d)(i)),
					hideNotification: i => e(Object(r.b)(i)),
					hideSubredditNotifications: (i, t) => e(Object(r.f)(i, t)),
					markAllAsRead: () => e(Object(r.g)()),
					markNotificationAsRead: (i, t) => e(Object(r.h)(i, t)),
					updateInboxActivitySeenState: () => e(Object(r.i)()),
					blockAwarder: i => e(Object(r.a)(i))
				}));
			i.default = p(({
				clearMessageTabBadgeCount: e,
				cursor: i,
				disableNotificationUpdates: t,
				fetchNotifications: s,
				hasNextPage: a,
				hideNotification: d,
				hideSubredditNotifications: r,
				blockAwarder: x,
				inboxBadgeCount: f,
				isInboxInfiniteScrollEnabled: u,
				isDNInboxPromptBannerFirstTimeEnabled: I,
				isDNInboxPromptBannerPersistEnabled: p,
				isInboxExposureBannerEnabled: g,
				isInboxPolicyBannerEnabled: E,
				isInboxPostEmbedEnabled: m,
				isOpen: N,
				isPending: B,
				markAllAsRead: O,
				markNotificationAsRead: h,
				messagesBadgeCount: j,
				notifications: A,
				updateInboxActivitySeenState: P,
				hideTooltip: _,
				userId: C
			}) => {
				const S = Object(l.a)(),
					[k, D] = Object(n.useState)("");
				return Object(n.useEffect)(() => {
					if (N && !A.length) {
						s({
							first: 5
						})
					}
					N && (P(), S(Object(b.p)({
						badgeCount: f
					})))
				}, [N]), o.a.createElement(c.b, {
					activeOverflowMenuId: k,
					clearMessageTabBadgeCount: e,
					disableNotificationUpdates: t,
					hideNotification: d,
					hideSubredditNotifications: r,
					blockAwarder: x,
					inboxBadgeCount: f,
					isDNInboxPromptBannerFirstTimeEnabled: I,
					isDNInboxPromptBannerPersistEnabled: p,
					isInboxExposureBannerEnabled: g,
					isInboxPolicyBannerEnabled: E,
					isInboxPostEmbedEnabled: m,
					isPending: B,
					markAllAsRead: O,
					markNotificationAsRead: h,
					messagesBadgeCount: j,
					notifications: A,
					setActiveOverflowMenuId: D,
					hideTooltip: _,
					userId: C,
					isInboxInfiniteScrollEnabled: u,
					hasNextPage: a,
					cursor: i,
					fetchNotifications: s
				})
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InboxTooltip.8c9944a153697b655bc4.js.map