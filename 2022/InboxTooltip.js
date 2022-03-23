// https://www.redditstatic.com/desktop2x/InboxTooltip.b77122be9d0642c64b64.js
// Retrieved at 3/23/2022, 10:50:05 AM by Reddit Dataminer v1.0.0
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
			const x = ({
				subredditId: t,
				notificationLevel: e,
				successCallback: i,
				undoCallback: s
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
					text: o.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
						hk: "4avFFV"
					})
				}));
				N.ok && (a(Object(n.c)({
					subredditId: t,
					notificationLevel: e
				})), a(u({
					subredditAboutInfo: {
						[t]: {
							notificationLevel: e
						}
					}
				})), i && i(), a(s ? Object(r.f)(Object(r.e)(p(e), l.b.Undo, o.fbt._("Undo", null, {
					hk: "46OwLP"
				}), Object(d.i)(t, s))) : Object(r.f)(Object(r.e)(p(e), l.b.SuccessCommunityGreen))))
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
				j = Object(n.b)(S, (t, {
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
			e.default = j(({
				clearMessageTabBadgeCount: t,
				cursor: e,
				decreaseSubredditNotifications: i,
				disableNotificationUpdates: n,
				fetchNotifications: d,
				hasNextPage: a,
				hideNotification: r,
				hideSubredditNotifications: c,
				hideTooltip: b,
				isHotPotatoEnabled: g,
				blockAwarder: p,
				inboxBadgeCount: x,
				isInboxPolicyBannerEnabled: O,
				isInboxInfiniteScrollEnabled: m,
				isInboxPostEmbedEnabled: h,
				isWrappedRedditBannerEnabled: S,
				isLoggedIn: j,
				isOpen: N,
				isPending: E,
				isPushNotificationsSupported: I,
				markAllAsRead: w,
				markNotificationAsRead: P,
				messagesBadgeCount: B,
				notifications: k,
				showBrowserNotificationsPermissionSettings: A,
				updateInboxActivitySeenState: v,
				userId: _
			}) => {
				const C = Object(f.a)(),
					[y, L] = Object(o.useState)("");
				return Object(o.useEffect)(() => {
					if (N && !k.length && j) {
						d({
							first: 5
						})
					}
					N && j && (v(), C(Object(u.w)({
						badgeCount: x
					})))
				}, [N]), s.a.createElement(l.b, {
					activeOverflowMenuId: y,
					clearMessageTabBadgeCount: t,
					cursor: e,
					decreaseSubredditNotifications: i,
					disableNotificationUpdates: n,
					fetchNotifications: d,
					hasNextPage: a,
					hideNotification: r,
					hideSubredditNotifications: c,
					hideTooltip: b,
					blockAwarder: p,
					inboxBadgeCount: x,
					isPushNotificationsSupported: I,
					isHotPotatoEnabled: g,
					isInboxPolicyBannerEnabled: O,
					isInboxInfiniteScrollEnabled: m,
					isInboxPostEmbedEnabled: h,
					isWrappedRedditBannerEnabled: S,
					isLoggedIn: j,
					isPending: E,
					markAllAsRead: w,
					markNotificationAsRead: P,
					messagesBadgeCount: B,
					notifications: k,
					setActiveOverflowMenuId: L,
					showBrowserNotificationsPermissionSettings: A,
					userId: _
				})
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/InboxTooltip.b77122be9d0642c64b64.js.map