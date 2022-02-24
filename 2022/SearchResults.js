// https://www.redditstatic.com/desktop2x/SearchResults.9ea28628bbe2f99f1417.js
// Retrieved at 2/24/2022, 11:00:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SearchResults"], {
		"./src/reddit/actions/pages/search/searchResultsRequested.ts": function(e, s, t) {
			"use strict";
			t.r(s), t.d(s, "searchResultsRequested", (function() {
				return p
			}));
			var r = t("./node_modules/fbt/lib/FbtPublic.js"),
				i = t("./node_modules/lodash/pick.js"),
				d = t.n(i),
				c = t("./src/lib/constants/index.ts"),
				a = t("./src/lib/makeSearchKey/index.ts"),
				n = t("./src/lib/pageTitle/index.ts"),
				o = t("./src/reddit/actions/pages/search/index.ts"),
				u = t("./src/reddit/actions/platform.ts"),
				l = t("./src/reddit/constants/parameters.ts"),
				b = t("./src/reddit/models/Multireddit/index.ts"),
				m = t("./src/reddit/selectors/experiments/serpRedesignLayout.ts");
			const O = e => r.fbt._("reddit.com: search results - {query}", [r.fbt._param("query", e || "None")], {
					hk: "1XOKAg"
				}),
				p = e => async (s, t) => {
					const r = t(),
						i = Object(m.a)(r),
						p = Object(c.sc)(i),
						_ = Object(a.e)(d()(e.queryParams, l.u), p),
						{
							multiredditName: h,
							subredditName: f,
							username: j
						} = e.params;
					let x;
					j && h && (x = Object(b.h)(j, h));
					const g = Object(a.b)(f || h, j, _);
					await s(Object(o.d)(g, _, f, j, x));
					let y = !1;
					const {
						type: A = []
					} = _, L = A.indexOf(c.bc.Posts) > -1, q = A.indexOf(c.bc.Users) > -1, D = A.indexOf(c.bc.Subreddits) > -1;
					L && r.listings.postOrder.api.error[g] && (y = !0), q && r.listings.authorOrder.api.error[g] && (y = !0), D && r.listings.communityOrder.api.error[g] && (y = !0), s(y ? u.m({
						title: Object(n.e)()
					}) : u.m({
						title: O(_.q)
					}))
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SearchResults.9ea28628bbe2f99f1417.js.map