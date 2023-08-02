// https://www.redditstatic.com/desktop2x/FramedGild.64ca153c6d548e3849c9.js
// Retrieved at 8/2/2023, 10:40:04 AM by Reddit Dataminer v1.0.0
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
				n = t("./node_modules/react-redux/es/index.js"),
				i = t("./src/lib/extractQueryParams/index.ts"),
				a = t("./node_modules/lodash/fromPairs.js"),
				o = t.n(a),
				c = t("./src/reddit/selectors/experiments/econ/index.ts"),
				l = t("./src/reddit/components/GildModalContent/index.tsx"),
				m = t("./src/reddit/pages/FramedGildPage/index.m.less"),
				u = t.n(m);
			d.default = e => {
				if (Object(n.e)(c.d)) return null;
				const {
					thingId: d
				} = e.match.params, t = o()([...Object(i.a)(e.location.search)]), {
					author: r,
					subredditId: a,
					subredditName: m,
					profileId: _
				} = t;
				return s.a.createElement(l.a, {
					className: u.a.communityGildedContent,
					thingId: d,
					author: r,
					subredditId: a,
					subredditName: m,
					profileId: _
				})
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FramedGild.64ca153c6d548e3849c9.js.map