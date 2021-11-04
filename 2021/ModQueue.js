// https://www.redditstatic.com/desktop2x/ModQueue.62e0ed0beb691d6d0e28.js
// Retrieved at 11/4/2021, 4:00:08 PM by Reddit Dataminer v1.0.0
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
				u = r("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				n = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				a = r("./src/reddit/helpers/trackers/screenview.ts"),
				c = r("./src/reddit/actions/modQueue/index.ts"),
				p = r("./src/reddit/actions/platform.ts"),
				l = r("./src/reddit/selectors/platform.ts"),
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
				} = g, H = r();
				if (!b) return;
				const j = Object(u.a)({
						onlyOfType: g.only,
						profile: g.profile,
						subreddit: g.subreddit
					}),
					A = H.pages.modHub.modQueue[b].itemOrder[j],
					Q = !!(null === (m = null == A ? void 0 : A[O]) || void 0 === m ? void 0 : m.length),
					L = H.pages.modHub.modQueue[b].api.error;
				if (H.pages.modHub.modQueue[b].api.pending || Q && !L) return;
				Object(l.p)(H) || await Object(c.e)(j, b, g)(t, r, s);
				const y = r();
				if (d()(y.pages.modHub.modQueue[b].api.error, "type") === i.H.AUTHENTICATION_ERROR) return Object(n.a)(t, y);
				Object(a.j)(y, f, _), t(p.m({
					title: Object(o.e)()
				}))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModQueue.62e0ed0beb691d6d0e28.js.map