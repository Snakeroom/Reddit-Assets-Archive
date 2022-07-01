// https://www.redditstatic.com/desktop2x/PostDetailStickyHeader.877d30e08b3772eaa012.js
// Retrieved at 7/1/2022, 5:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PostDetailStickyHeader"], {
		"./src/reddit/components/PostDetailStickyHeader/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_1mIZHouXowafuH_S8YMnxT",
				isVisible: "_2U4UhyrQvS_zVDbLXW-z5t"
			}
		},
		"./src/reddit/components/PostDetailStickyHeader/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var i = s("./node_modules/react/index.js"),
				d = s.n(i),
				n = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/LightboxHeader/index.tsx"),
				a = s("./src/reddit/components/PostContent/index.tsx"),
				o = s("./src/reddit/components/PostDetailStickyHeader/index.m.less"),
				c = s.n(o);
			t.default = e => {
				let {
					post: t,
					page: s
				} = e;
				const [o, l] = Object(i.useState)(!1);
				return Object(i.useEffect)(() => {
					if (!t) return;
					a.d.addListeners(a.b, () => l(!0)), a.d.addListeners(a.a, () => l(!1))
				}, [t]), t ? d.a.createElement("div", {
					className: Object(n.a)(c.a.wrapper, {
						[c.a.isVisible]: o
					})
				}, d.a.createElement(r.a, {
					post: t,
					page: s,
					hideCloseButton: !0,
					useAdaptiveStyles: !0,
					showSubreddit: !0
				})) : null
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostDetailStickyHeader.877d30e08b3772eaa012.js.map