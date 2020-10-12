// https://www.redditstatic.com/desktop2x/ModQueue.06adfb7f41b04d5f39f7.js
// Retrieved at 10/12/2020, 6:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueue"], {
		"./src/reddit/actions/pages/modQueue/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "modQueuePageRequested", (function() {
				return m
			}));
			var s = r("./node_modules/lodash/get.js"),
				d = r.n(s),
				i = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/pageTitle.ts"),
				n = r("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				c = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				u = r("./src/reddit/helpers/trackers/screenview.ts"),
				a = r("./src/reddit/actions/modQueue/index.ts"),
				p = r("./src/reddit/actions/platform.ts"),
				l = r("./src/reddit/selectors/platform.ts");
			const m = e => async (t, r, s) => {
				const {
					pageName: m
				} = e.params, O = e.queryParams, {
					page: _,
					profile: b,
					subreddit: f
				} = O, g = r();
				if (!m) return;
				const A = Object(n.a)({
						onlyOfType: O.only,
						profile: O.profile,
						subreddit: O.subreddit
					}),
					Q = g.modQueue[m].itemOrder[A],
					L = !!(Q && Q[_] && Q[_].length),
					h = g.modQueue[m].api.error;
				if (g.modQueue[m].api.pending || L && !h) return;
				Object(l.p)(g) || await Object(a.e)(A, m, O)(t, r, s);
				const j = r();
				if (d()(j.modQueue[m].api.error, "type") === i.E.AUTHENTICATION_ERROR) return Object(c.a)(t, j);
				Object(u.h)(j, m, f, b), t(p.l({
					title: Object(o.d)()
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueue.06adfb7f41b04d5f39f7.js.map