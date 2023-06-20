// https://www.redditstatic.com/desktop2x/getFlairData.48d6d1cd758e3308679f.js
// Retrieved at 6/20/2023, 4:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["getFlairData"], {
		"./src/reddit/helpers/trackers/features/getFlairData.ts": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "getFlairData", (function() {
				return a
			}));
			var r = i("./src/reddit/helpers/flair.ts"),
				s = i("./src/reddit/selectors/gold/powerups/flairs.ts"),
				d = i("./src/reddit/selectors/telemetry.ts"),
				l = i("./src/reddit/selectors/user.ts"),
				c = i("./src/reddit/selectors/userFlair.ts");

			function a(e) {
				const t = d.mb(e),
					i = null == t ? void 0 : t.id;
				if (!i) return;
				const a = Object(c.d)(e, {
						subredditId: i
					}),
					n = Object(l.k)(e),
					u = n ? Object(s.f)(e, {
						subredditId: i,
						userId: n
					}) : void 0,
					o = {
						achievementFlairId: null == u ? void 0 : u.type,
						achievementFlairTitle: null == u ? void 0 : u.name
					};
				if (!(null == a ? void 0 : a.displaySettings.isUserEnabled) || !(null == a ? void 0 : a.applied)) return {
					isActive: !1,
					...o
				};
				const p = a.applied.templateId,
					v = Object(r.g)(a.applied);
				return v ? {
					id: p,
					title: v,
					isActive: !0,
					...o
				} : {
					isActive: !1,
					...o
				}
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/getFlairData.48d6d1cd758e3308679f.js.map