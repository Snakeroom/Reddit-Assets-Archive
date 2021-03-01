// https://www.redditstatic.com/desktop2x/GildModal.9283ff4fa1baccca55bb.js
// Retrieved at 2/28/2021, 9:18:37 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GildModal"], {
		"./src/reddit/components/GildModal/index.m.less": function(e, o, t) {
			e.exports = {
				gildModal: "_1IyDH2lB_YliAPREBY8LQQ"
			}
		},
		"./src/reddit/components/GildModal/index.tsx": function(e, o, t) {
			"use strict";
			t.r(o);
			var d = t("./node_modules/react/index.js"),
				s = t.n(d),
				r = t("./node_modules/react-redux/es/index.js"),
				l = t("./node_modules/reselect/es/index.js"),
				n = t("./src/reddit/actions/gold/modals.ts"),
				a = t("./src/reddit/constants/colors.ts"),
				c = t("./src/reddit/selectors/gild.ts"),
				i = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				u = t("./src/higherOrderComponents/asModal/index.tsx"),
				_ = t("./src/reddit/components/GildModalContent/index.tsx"),
				h = t("./src/reddit/components/GildModal/index.m.less"),
				m = t.n(h);

			function p() {
				return (p = Object.assign || function(e) {
					for (var o = 1; o < arguments.length; o++) {
						var t = arguments[o];
						for (var d in t) Object.prototype.hasOwnProperty.call(t, d) && (e[d] = t[d])
					}
					return e
				}).apply(this, arguments)
			}
			const O = Object(l.c)({
					showPurchaseModal: i.t,
					thingId: c.d
				}),
				g = Object(u.a)(e => {
					const {
						thingId: o
					} = e;
					return o ? s.a.createElement(_.a, {
						thingId: o
					}) : null
				}),
				x = {
					backgroundColor: a.b.overlayReportFlow
				},
				M = {
					backgroundColor: "transparent"
				},
				b = Object(r.b)(O, e => ({
					closeGildModal: () => e(Object(n.a)())
				}));
			o.default = b(e => s.a.createElement(g, p({}, e, {
				className: m.a.gildModal,
				withOverlay: !0,
				onOverlayClick: e.closeGildModal,
				overlayCustomStyles: e.showPurchaseModal ? M : x
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GildModal.9283ff4fa1baccca55bb.js.map