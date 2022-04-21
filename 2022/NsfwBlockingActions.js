// https://www.redditstatic.com/desktop2x/NsfwBlockingActions.007452adb6d18b784cb4.js
// Retrieved at 4/21/2022, 6:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NsfwBlockingActions"], {
		"./src/reddit/actions/nsfwBlocking/index.ts": function(s, t, c) {
			"use strict";
			c.r(t);
			var n = c("./src/reddit/actions/modal.ts"),
				i = c("./src/reddit/constants/modals.ts"),
				e = c("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");
			t.default = () => async (s, t) => {
				const c = t();
				Object(e.c)(c) && s(Object(n.h)(i.a.NSFW_BLOCKING_MODAL_V2))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NsfwBlockingActions.007452adb6d18b784cb4.js.map