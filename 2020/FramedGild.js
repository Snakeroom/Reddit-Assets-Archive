// https://www.redditstatic.com/desktop2x/FramedGild.5670cbdb141707cfc3c8.js
// Retrieved at 10/27/2020, 12:20:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FramedGild"], {
		"./src/reddit/pages/FramedGildPage/index.m.less": function(e, d, s) {
			e.exports = {
				communityGildedContent: "_2s0lkCZGZKebUrqQ6cPnFg"
			}
		},
		"./src/reddit/pages/FramedGildPage/index.tsx": function(e, d, s) {
			"use strict";
			s.r(d);
			s("./node_modules/core-js/modules/es6.regexp.search.js"), s("./node_modules/core-js/modules/es6.regexp.match.js");
			var r = s("./node_modules/react/index.js"),
				t = s.n(r),
				a = s("./src/lib/extractQueryParams/index.ts"),
				n = s("./node_modules/lodash/fromPairs.js"),
				i = s.n(n),
				o = s("./src/reddit/components/GildModalContent/index.tsx"),
				m = s("./src/reddit/pages/FramedGildPage/index.m.less"),
				c = s.n(m);
			d.default = e => {
				const {
					thingId: d
				} = e.match.params, s = i()([...Object(a.a)(e.location.search)]), {
					author: r,
					subredditId: n,
					subredditName: m,
					profileId: l
				} = s;
				return t.a.createElement(o.a, {
					className: c.a.communityGildedContent,
					thingId: d,
					author: r,
					subredditId: n,
					subredditName: m,
					profileId: l
				})
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FramedGild.5670cbdb141707cfc3c8.js.map