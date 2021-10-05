// https://www.redditstatic.com/desktop2x/reddit-components-CommunitySettings-Notifications.c37a7eac01a6bef1ce49.js
// Retrieved at 10/5/2021, 7:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CommunitySettings-Notifications"], {
		"./src/reddit/components/CommunitySettings/Notifications/index.tsx": function(e, n, t) {
			"use strict";
			t.r(n), t.d(n, "default", (function() {
				return c
			}));
			var o = t("./node_modules/react/index.js"),
				i = t.n(o),
				s = t("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				a = t("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				d = t("./src/reddit/components/Settings/shared/Widgets.tsx"),
				l = t("./src/reddit/components/CommunitySettings/components.ts");
			const {
				fbt: r
			} = t("./node_modules/fbt/lib/FbtPublic.js");

			function c(e) {
				const {
					notificationSettings: n,
					updateNotificationSettings: t
				} = e, {
					isModeratedSrContentFoundationPnEnabled: o,
					isModeratedSrEngagementPnEnabled: c,
					isModeratedSrMilestonePnEnabled: m
				} = n;
				return i.a.createElement(s.a, null, i.a.createElement(l.a, null, i.a.createElement(s.b, null, r._("Notification settings", null, {
					hk: "1HImbB"
				})), i.a.createElement(a.a, null, r._("Mod Notifications", null, {
					hk: "14WQtl"
				})), i.a.createElement(d.o, {
					on: m,
					onClick: () => t(!m, "isModeratedSrMilestonePnEnabled"),
					label: r._("Milestones", null, {
						hk: "2KUQoI"
					}),
					subtext: r._("Be notified when your community has moments like gaining 100 members or turning a year old", null, {
						hk: "2EAadM"
					})
				}), i.a.createElement(d.o, {
					on: o,
					onClick: () => t(!o, "isModeratedSrContentFoundationPnEnabled"),
					label: r._("Moderation", null, {
						hk: "4mPPdS"
					}),
					subtext: r._("Be notified when posts and comments get reported or controversial vote ratios", null, {
						hk: "2i4ijA"
					})
				}), i.a.createElement(d.o, {
					on: c,
					onClick: () => t(!c, "isModeratedSrEngagementPnEnabled"),
					label: r._("Engagement", null, {
						hk: "1gIteK"
					}),
					last: !0,
					subtext: r._("Be notified when your community gets new posts and lots of comments", null, {
						hk: "3iUOkc"
					})
				})))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CommunitySettings-Notifications.c37a7eac01a6bef1ce49.js.map