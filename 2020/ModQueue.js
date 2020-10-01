// https://www.redditstatic.com/desktop2x/ModQueue.59596df648af50293d3e.js
// Retrieved at 10/1/2020, 7:10:05 PM by Reddit Dataminer v1.0.0
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
					profile: g,
					subreddit: b
				} = O, f = r();
				if (!m) return;
				const A = Object(n.a)({
						onlyOfType: O.only,
						profile: O.profile,
						subreddit: O.subreddit
					}),
					Q = f.modQueue[m].itemOrder[A],
					L = !!(Q && Q[_] && Q[_].length),
					j = f.modQueue[m].api.error;
				if (f.modQueue[m].api.pending || L && !j) return;
				Object(l.p)(f) || await Object(a.e)(A, m, O)(t, r, s);
				const y = r();
				if (d()(y.modQueue[m].api.error, "type") === i.E.AUTHENTICATION_ERROR) return Object(c.a)(t, y);
				Object(u.g)(y, m, b, g), t(p.l({
					title: Object(o.d)()
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueue.59596df648af50293d3e.js.map