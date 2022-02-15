// https://www.redditstatic.com/desktop2x/SearchResults.4bf1deab2fd0684a6ffa.js
// Retrieved at 2/15/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SearchResults"], {
		"./src/reddit/actions/pages/search/searchResultsRequested.ts": function(e, s, t) {
			"use strict";
			t.r(s), t.d(s, "searchResultsRequested", (function() {
				return p
			}));
			var r = t("./node_modules/fbt/lib/FbtPublic.js"),
				i = t("./node_modules/lodash/pick.js"),
				c = t.n(i),
				d = t("./src/lib/constants/index.ts"),
				a = t("./src/lib/makeSearchKey/index.ts"),
				n = t("./src/lib/pageTitle.ts"),
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
						p = Object(d.sc)(i),
						_ = Object(a.e)(c()(e.queryParams, l.u), p),
						{
							multiredditName: h,
							subredditName: f,
							username: j
						} = e.params;
					let g;
					j && h && (g = Object(b.h)(j, h));
					const x = Object(a.b)(f || h, j, _);
					await s(Object(o.d)(x, _, f, j, g));
					let y = !1;
					const {
						type: A = []
					} = _, L = A.indexOf(d.bc.Posts) > -1, q = A.indexOf(d.bc.Users) > -1, D = A.indexOf(d.bc.Subreddits) > -1;
					L && r.listings.postOrder.api.error[x] && (y = !0), q && r.listings.authorOrder.api.error[x] && (y = !0), D && r.listings.communityOrder.api.error[x] && (y = !0), s(y ? u.m({
						title: Object(n.e)()
					}) : u.m({
						title: O(_.q)
					}))
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SearchResults.4bf1deab2fd0684a6ffa.js.map