// https://www.redditstatic.com/desktop2x/NsfwBlockingActions.2d3d172c912b62d812ef.js
// Retrieved at 12/6/2022, 11:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["NsfwBlockingActions"], {
		"./src/reddit/actions/nsfwBlocking/index.ts": function(s, t, c) {
			"use strict";
			c.r(t);
			var e = c("./src/reddit/actions/modal.ts"),
				i = c("./src/reddit/constants/modals.ts"),
				n = c("./src/reddit/selectors/activeModal.ts"),
				_ = c("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts");
			t.default = () => async (s, t) => {
				const c = t(),
					d = Object(_.c)(c),
					r = Object(n.c)(i.a.NSFW_BLOCKING_MODAL_V2)(c);
				d && !r && s(Object(e.h)(i.a.NSFW_BLOCKING_MODAL_V2))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/NsfwBlockingActions.2d3d172c912b62d812ef.js.map