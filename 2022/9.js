// https://www.redditstatic.com/desktop2x/9.e528f9e9d19fd6552936.js
// Retrieved at 1/24/2022, 3:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	[9], {
		"./src/reddit/helpers/trackers/profileIdCard.ts": function(o, t, r) {
			"use strict";
			r.r(t), r.d(t, "clickProfileFollowButton", (function() {
				return l
			})), r.d(t, "clickProfileUnfollowButton", (function() {
				return s
			}));
			var n, c = r("./src/reddit/constants/tracking.ts"),
				e = r("./src/reddit/selectors/telemetry.ts");
			! function(o) {
				o.FOLLOW = "follow", o.UNFOLLOW = "unfollow"
			}(n || (n = {}));
			const i = (o, t) => ({
					...Object(e.m)(t),
					profile: Object(e.j)(t),
					subreddit: {
						id: o
					}
				}),
				l = o => t => ({
					...i(o, t),
					source: "profile",
					action: c.c.CLICK,
					noun: n.FOLLOW
				}),
				s = o => t => ({
					...i(o, t),
					source: "profile",
					action: c.c.CLICK,
					noun: n.UNFOLLOW
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/9.e528f9e9d19fd6552936.js.map