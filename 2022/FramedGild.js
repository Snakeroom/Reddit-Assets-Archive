// https://www.redditstatic.com/desktop2x/FramedGild.9feec334a0d8dd9e5201.js
// Retrieved at 8/30/2022, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FramedGild"], {
		"./src/reddit/pages/FramedGildPage/index.m.less": function(e, d, t) {
			e.exports = {
				communityGildedContent: "_2s0lkCZGZKebUrqQ6cPnFg"
			}
		},
		"./src/reddit/pages/FramedGildPage/index.tsx": function(e, d, t) {
			"use strict";
			t.r(d);
			var r = t("./node_modules/react/index.js"),
				s = t.n(r),
				a = t("./src/lib/extractQueryParams/index.ts"),
				i = t("./node_modules/lodash/fromPairs.js"),
				n = t.n(i),
				o = t("./src/reddit/components/GildModalContent/index.tsx"),
				c = t("./src/reddit/pages/FramedGildPage/index.m.less"),
				l = t.n(c);
			d.default = e => {
				const {
					thingId: d
				} = e.match.params, t = n()([...Object(a.a)(e.location.search)]), {
					author: r,
					subredditId: i,
					subredditName: c,
					profileId: m
				} = t;
				return s.a.createElement(o.a, {
					className: l.a.communityGildedContent,
					thingId: d,
					author: r,
					subredditId: i,
					subredditName: c,
					profileId: m
				})
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FramedGild.9feec334a0d8dd9e5201.js.map