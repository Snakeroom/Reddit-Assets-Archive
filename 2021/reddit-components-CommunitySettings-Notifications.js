// https://www.redditstatic.com/desktop2x/reddit-components-CommunitySettings-Notifications.b6f4fe44f391685a0070.js
// Retrieved at 2/28/2021, 9:18:37 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CommunitySettings-Notifications"], {
		"./src/reddit/components/CommunitySettings/Notifications/index.tsx": function(e, n, t) {
			"use strict";
			t.r(n), t.d(n, "default", (function() {
				return u
			}));
			var o = t("./node_modules/react/index.js"),
				i = t.n(o),
				l = t("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				s = t("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				a = t("./src/reddit/components/Settings/shared/Widgets.tsx"),
				d = t("./src/reddit/components/CommunitySettings/components.ts");
			const {
				fbt: r
			} = t("./node_modules/fbt/lib/FbtPublic.js");

			function u(e) {
				const {
					notificationSettings: n,
					settings: t,
					update: o,
					updateNotificationSettings: u
				} = e, {
					newPinnedPostPNsEnabled: m,
					userFlairPNsEnabled: c
				} = t, {
					isModeratedSrContentFoundationPnEnabled: b,
					isModeratedSrEngagementPnEnabled: E,
					isModeratedSrMilestonePnEnabled: _
				} = n;
				return i.a.createElement(l.a, null, i.a.createElement(d.a, null, i.a.createElement(l.b, null, r._("Notification settings", null, {
					hk: "1HImbB"
				})), i.a.createElement(s.a, null, r._("Community Notifications", null, {
					hk: "27tOhv"
				})), i.a.createElement(a.o, {
					on: m,
					onClick: () => o(!m, "newPinnedPostPNsEnabled"),
					label: r._("Pinned posts", null, {
						hk: "goF21"
					}),
					subtext: r._("Notify community members when you pin a post", null, {
						hk: "1T4bVV"
					})
				}), i.a.createElement(a.o, {
					on: c,
					onClick: () => o(!c, "userFlairPNsEnabled"),
					label: r._("New user flair", null, {
						hk: "3PkO8m"
					}),
					last: !0,
					subtext: r._("Notify community members when you give them user flair", null, {
						hk: "1eHzLz"
					})
				}), i.a.createElement(s.a, null, r._("Mod Notifications", null, {
					hk: "14WQtl"
				})), i.a.createElement(a.o, {
					on: _,
					onClick: () => u(!_, "isModeratedSrMilestonePnEnabled"),
					label: r._("Milestones", null, {
						hk: "2KUQoI"
					}),
					subtext: r._("Be notified when your community has moments like gaining 100 members or turning a year old", null, {
						hk: "2EAadM"
					})
				}), i.a.createElement(a.o, {
					on: b,
					onClick: () => u(!b, "isModeratedSrContentFoundationPnEnabled"),
					label: r._("Moderation", null, {
						hk: "4mPPdS"
					}),
					subtext: r._("Be notified when posts and comments get reported or controversial vote ratios", null, {
						hk: "2i4ijA"
					})
				}), i.a.createElement(a.o, {
					on: E,
					onClick: () => u(!E, "isModeratedSrEngagementPnEnabled"),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CommunitySettings-Notifications.b6f4fe44f391685a0070.js.map