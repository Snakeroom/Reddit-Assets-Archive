// https://www.redditstatic.com/desktop2x/reddit-components-CommunitySettings-Notifications.80699e8dceaba15da5ce.js
// Retrieved at 8/6/2020, 3:50:09 PM by Reddit Dataminer v1.0.0
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
				l = t("./src/reddit/components/Settings/shared/SectionHeading.tsx"),
				a = t("./src/reddit/components/Settings/shared/Widgets.tsx"),
				d = t("./src/reddit/components/CommunitySettings/components.ts");
			const {
				fbt: r
			} = t("./node_modules/fbt/lib/FbtPublic.js");

			function c(e) {
				const {
					notificationSettings: n,
					settings: t,
					update: o,
					updateNotificationSettings: c
				} = e, {
					newPinnedPostPNsEnabled: m
				} = t, {
					isModeratedSrContentFoundationPnEnabled: u,
					isModeratedSrEngagementPnEnabled: b,
					isModeratedSrMilestonePnEnabled: E
				} = n;
				return i.a.createElement(s.a, null, i.a.createElement(d.a, null, i.a.createElement(s.b, null, r._("Notification settings", null, {
					hk: "1HImbB"
				})), i.a.createElement(l.a, null, r._("Community Notifications", null, {
					hk: "27tOhv"
				})), i.a.createElement(a.o, {
					on: m,
					onClick: () => o(!m, "newPinnedPostPNsEnabled"),
					label: r._("Pinned posts", null, {
						hk: "goF21"
					}),
					last: !0,
					subtext: r._("Notify community members when you pin a post", null, {
						hk: "1T4bVV"
					})
				}), i.a.createElement(l.a, null, r._("Mod Notifications", null, {
					hk: "14WQtl"
				})), i.a.createElement(a.o, {
					on: E,
					onClick: () => c(!E, "isModeratedSrMilestonePnEnabled"),
					label: r._("Milestones", null, {
						hk: "2KUQoI"
					}),
					subtext: r._("Be notified when your community has moments like gaining 100 members or turning a year old", null, {
						hk: "2EAadM"
					})
				}), i.a.createElement(a.o, {
					on: u,
					onClick: () => c(!u, "isModeratedSrContentFoundationPnEnabled"),
					label: r._("Moderation", null, {
						hk: "4mPPdS"
					}),
					subtext: r._("Be notified when posts and comments get reported or controversial vote ratios", null, {
						hk: "2i4ijA"
					})
				}), i.a.createElement(a.o, {
					on: b,
					onClick: () => c(!b, "isModeratedSrEngagementPnEnabled"),
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
//# sourceMappingURL=reddit-components-CommunitySettings-Notifications.80699e8dceaba15da5ce.js.map