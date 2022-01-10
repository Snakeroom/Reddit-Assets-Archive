// https://www.redditstatic.com/desktop2x/SearchResults.7ba196a74fcb16a1f782.js
// Retrieved at 1/10/2022, 3:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SearchResults"], {
		"./src/reddit/actions/pages/search/searchResultsRequested.ts": function(e, s, t) {
			"use strict";
			t.r(s), t.d(s, "searchResultsRequested", (function() {
				return O
			}));
			var r = t("./node_modules/fbt/lib/FbtPublic.js"),
				i = t("./node_modules/lodash/pick.js"),
				d = t.n(i),
				a = t("./src/lib/constants/index.ts"),
				c = t("./src/lib/makeSearchKey/index.ts"),
				n = t("./src/lib/pageTitle.ts"),
				o = t("./src/reddit/actions/pages/search/index.ts"),
				u = t("./src/reddit/actions/platform.ts"),
				l = t("./src/reddit/constants/parameters.ts"),
				m = t("./src/reddit/models/Multireddit/index.ts");
			const b = e => r.fbt._("reddit.com: search results - {query}", [r.fbt._param("query", e || "None")], {
					hk: "1XOKAg"
				}),
				O = e => async (s, t) => {
					const r = t(),
						i = Object(c.e)(d()(e.queryParams, l.u)),
						{
							multiredditName: O,
							subredditName: _,
							username: p
						} = e.params;
					let h;
					p && O && (h = Object(m.h)(p, O));
					const f = Object(c.b)(_ || O, p, i);
					await s(Object(o.d)(f, i, _, p, h));
					let g = !1;
					const {
						type: j = []
					} = i, x = j.indexOf(a.ac.Posts) > -1, y = j.indexOf(a.ac.Users) > -1, A = j.indexOf(a.ac.Subreddits) > -1;
					x && r.listings.postOrder.api.error[f] && (g = !0), y && r.listings.authorOrder.api.error[f] && (g = !0), A && r.listings.communityOrder.api.error[f] && (g = !0), s(g ? u.m({
						title: Object(n.e)()
					}) : u.m({
						title: b(i.q)
					}))
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SearchResults.7ba196a74fcb16a1f782.js.map