// https://www.redditstatic.com/desktop2x/ModQueue.c46d935f8ebe3e4c8ccc.js
// Retrieved at 8/11/2021, 2:30:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModQueue"], {
		"./src/reddit/actions/pages/modQueue/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "modQueuePageRequested", (function() {
				return g
			}));
			var s = r("./node_modules/lodash/get.js"),
				d = r.n(s),
				i = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/pageTitle.ts"),
				n = r("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				u = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				a = r("./src/reddit/helpers/trackers/screenview.ts"),
				c = r("./src/reddit/actions/modQueue/index.ts"),
				l = r("./src/reddit/actions/platform.ts"),
				p = r("./src/reddit/selectors/platform.ts"),
				m = r("./src/lib/initializeClient/installReducer.ts"),
				b = r("./src/reddit/reducers/pages/modHub/index.ts");
			Object(m.a)({
				pages: {
					modHub: b.a
				}
			});
			const g = e => async (t, r, s) => {
				var m;
				const {
					pageName: b
				} = e.params, g = e.queryParams, {
					page: O,
					profile: _,
					subreddit: f
				} = g, j = r();
				if (!b) return;
				const A = Object(n.a)({
						onlyOfType: g.only,
						profile: g.profile,
						subreddit: g.subreddit
					}),
					H = j.pages.modHub.modQueue[b].itemOrder[A],
					Q = !!(null === (m = null == H ? void 0 : H[O]) || void 0 === m ? void 0 : m.length),
					L = j.pages.modHub.modQueue[b].api.error;
				if (j.pages.modHub.modQueue[b].api.pending || Q && !L) return;
				Object(p.n)(j) || await Object(c.e)(A, b, g)(t, r, s);
				const y = r();
				if (d()(y.pages.modHub.modQueue[b].api.error, "type") === i.G.AUTHENTICATION_ERROR) return Object(u.a)(t, y);
				Object(a.j)(y, f, _), t(l.l({
					title: Object(o.d)()
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueue.c46d935f8ebe3e4c8ccc.js.map