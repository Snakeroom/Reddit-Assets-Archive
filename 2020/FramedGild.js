// https://www.redditstatic.com/desktop2x/FramedGild.e72a4d523f744f6f55e3.js
// Retrieved at 3/3/2020, 4:40:08 PM by Reddit Dataminer v1.0.0
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
			var t = s("./node_modules/react/index.js"),
				r = s.n(t),
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
					author: t,
					subredditId: n,
					subredditName: m
				} = s;
				return r.a.createElement(o.a, {
					className: c.a.communityGildedContent,
					thingId: d,
					author: t,
					subredditId: n,
					subredditName: m
				})
			}
		}
	}
]);
//# sourceMappingURL=FramedGild.e72a4d523f744f6f55e3.js.map