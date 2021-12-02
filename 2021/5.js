// https://www.redditstatic.com/desktop2x/5.058871f91275dc8d7383.js
// Retrieved at 12/2/2021, 2:30:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[5], {
		"./src/reddit/helpers/trackers/profileIdCard.ts": function(o, t, r) {
			"use strict";
			r.r(t), r.d(t, "clickProfileFollowButton", (function() {
				return l
			})), r.d(t, "clickProfileUnfollowButton", (function() {
				return s
			}));
			var e, c = r("./src/reddit/constants/tracking.ts"),
				n = r("./src/reddit/selectors/telemetry.ts");
			! function(o) {
				o.FOLLOW = "follow", o.UNFOLLOW = "unfollow"
			}(e || (e = {}));
			const i = (o, t) => ({
					...Object(n.defaults)(t),
					profile: Object(n.currentProfileModelSelector)(t),
					subreddit: {
						id: o
					}
				}),
				l = o => t => ({
					...i(o, t),
					source: "profile",
					action: c.c.CLICK,
					noun: e.FOLLOW
				}),
				s = o => t => ({
					...i(o, t),
					source: "profile",
					action: c.c.CLICK,
					noun: e.UNFOLLOW
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/5.058871f91275dc8d7383.js.map