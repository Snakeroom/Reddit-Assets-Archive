// https://www.redditstatic.com/desktop2x/PostDetailStickyHeader.1c90c56fbea2aa0f5b28.js
// Retrieved at 2/3/2022, 2:30:04 PM by Reddit Dataminer v1.0.0
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
			t.default = ({
				post: e,
				page: t
			}) => {
				const [s, o] = Object(i.useState)(!1);
				return Object(i.useEffect)(() => {
					if (!e) return;
					a.d.addListeners(a.b, () => o(!0)), a.d.addListeners(a.a, () => o(!1))
				}, [e]), e ? d.a.createElement("div", {
					className: Object(n.a)(c.a.wrapper, {
						[c.a.isVisible]: s
					})
				}, d.a.createElement(r.a, {
					post: e,
					page: t,
					hideCloseButton: !0,
					useAdaptiveStyles: !0,
					showSubreddit: !0
				})) : null
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PostDetailStickyHeader.1c90c56fbea2aa0f5b28.js.map