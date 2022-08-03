// https://www.redditstatic.com/desktop2x/GildModal.c583500f257ba94cb7d4.js
// Retrieved at 8/3/2022, 12:40:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GildModal"], {
		"./src/reddit/components/GildModal/index.m.less": function(e, o, s) {
			e.exports = {
				gildModal: "_1IyDH2lB_YliAPREBY8LQQ"
			}
		},
		"./src/reddit/components/GildModal/index.tsx": function(e, o, s) {
			"use strict";
			s.r(o);
			var d = s("./node_modules/react/index.js"),
				t = s.n(d),
				r = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/gold/modals.ts"),
				a = s("./src/reddit/constants/colors.ts"),
				c = s("./src/reddit/selectors/gild.ts"),
				i = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				u = s("./src/higherOrderComponents/asModal/index.tsx"),
				_ = s("./src/reddit/components/GildModalContent/index.tsx"),
				h = s("./src/reddit/components/GildModal/index.m.less"),
				m = s.n(h);

			function p() {
				return (p = Object.assign || function(e) {
					for (var o = 1; o < arguments.length; o++) {
						var s = arguments[o];
						for (var d in s) Object.prototype.hasOwnProperty.call(s, d) && (e[d] = s[d])
					}
					return e
				}).apply(this, arguments)
			}
			const O = Object(l.c)({
					showPurchaseModal: i.s,
					thingId: c.d
				}),
				g = Object(u.a)(e => {
					const {
						thingId: o
					} = e;
					return o ? t.a.createElement(_.a, {
						thingId: o
					}) : null
				}),
				x = {
					backgroundColor: a.a.overlayReportFlow
				},
				M = {
					backgroundColor: "transparent"
				},
				b = Object(r.b)(O, e => ({
					closeGildModal: () => e(Object(n.a)())
				}));
			o.default = b(e => t.a.createElement(g, p({}, e, {
				className: m.a.gildModal,
				withOverlay: !0,
				onOverlayClick: e.closeGildModal,
				overlayCustomStyles: e.showPurchaseModal ? M : x
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GildModal.c583500f257ba94cb7d4.js.map