// https://www.redditstatic.com/desktop2x/GildModal.b4873aec71978fde53b3.js
// Retrieved at 9/29/2022, 4:30:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GildModal"], {
		"./src/reddit/components/GildModal/index.m.less": function(e, o, d) {
			e.exports = {
				gildModal: "_1IyDH2lB_YliAPREBY8LQQ"
			}
		},
		"./src/reddit/components/GildModal/index.tsx": function(e, o, d) {
			"use strict";
			d.r(o);
			var s = d("./node_modules/react/index.js"),
				t = d.n(s),
				r = d("./node_modules/react-redux/es/index.js"),
				l = d("./node_modules/reselect/es/index.js"),
				n = d("./src/reddit/actions/gold/modals.ts"),
				a = d("./src/reddit/constants/colors.ts"),
				c = d("./src/reddit/selectors/gild.ts"),
				i = d("./src/reddit/selectors/goldPurchaseModals.ts"),
				u = d("./src/higherOrderComponents/asModal/index.tsx"),
				_ = d("./src/reddit/components/GildModalContent/index.tsx"),
				h = d("./src/reddit/components/GildModal/index.m.less"),
				m = d.n(h);

			function p() {
				return (p = Object.assign || function(e) {
					for (var o = 1; o < arguments.length; o++) {
						var d = arguments[o];
						for (var s in d) Object.prototype.hasOwnProperty.call(d, s) && (e[s] = d[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = Object(l.c)({
					showPurchaseModal: i.u,
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GildModal.b4873aec71978fde53b3.js.map