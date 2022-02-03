// https://www.redditstatic.com/desktop2x/SearchResults.c4d6c02a3befe335bd6d.js
// Retrieved at 2/3/2022, 4:50:13 PM by Reddit Dataminer v1.0.0
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
				c = t("./src/lib/constants/index.ts"),
				a = t("./src/lib/makeSearchKey/index.ts"),
				n = t("./src/lib/pageTitle.ts"),
				o = t("./src/reddit/actions/pages/search/index.ts"),
				u = t("./src/reddit/actions/platform.ts"),
				l = t("./src/reddit/constants/parameters.ts"),
				b = t("./src/reddit/models/Multireddit/index.ts");
			const m = e => r.fbt._("reddit.com: search results - {query}", [r.fbt._param("query", e || "None")], {
					hk: "1XOKAg"
				}),
				O = e => async (s, t) => {
					const r = t(),
						i = Object(a.e)(d()(e.queryParams, l.u)),
						{
							multiredditName: O,
							subredditName: _,
							username: p
						} = e.params;
					let h;
					p && O && (h = Object(b.h)(p, O));
					const f = Object(a.b)(_ || O, p, i);
					await s(Object(o.d)(f, i, _, p, h));
					let g = !1;
					const {
						type: j = []
					} = i, x = j.indexOf(c.bc.Posts) > -1, y = j.indexOf(c.bc.Users) > -1, A = j.indexOf(c.bc.Subreddits) > -1;
					x && r.listings.postOrder.api.error[f] && (g = !0), y && r.listings.authorOrder.api.error[f] && (g = !0), A && r.listings.communityOrder.api.error[f] && (g = !0), s(g ? u.m({
						title: Object(n.e)()
					}) : u.m({
						title: m(i.q)
					}))
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SearchResults.c4d6c02a3befe335bd6d.js.map