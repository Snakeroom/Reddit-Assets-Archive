// https://www.redditstatic.com/desktop2x/GildModal.13eb74f5b4d07ffbf0b6.js
// Retrieved at 6/22/2020, 1:30:11 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GildModal"], {
		"./src/reddit/components/CoinPurchaseModal/Loader.tsx": function(e, s, o) {
			"use strict";
			o.d(s, "b", (function() {
				return d
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var t = o("./src/higherOrderComponents/makeAsync.tsx"),
				n = o("./src/lib/loadWithRetries/index.ts"),
				c = o("./src/reddit/helpers/loadThirdPartyScript.ts");
			const d = () => Object(n.a)(() => Promise.all([Promise.all([o.e("vendors~CoinsPurchaseModal~EconPowerupsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCo~264e7f7d"), o.e("CoinsPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal"), o.e("CoinsPurchaseModal")]).then(o.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(c.d)()])).then(e => e[0].default),
				a = Object(t.a)({
					getComponent: d,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			s.a = a
		},
		"./src/reddit/components/GildModal/index.m.less": function(e, s, o) {
			e.exports = {
				gildModal: "_1IyDH2lB_YliAPREBY8LQQ"
			}
		},
		"./src/reddit/components/GildModal/index.tsx": function(e, s, o) {
			"use strict";
			o.r(s);
			var t = o("./node_modules/react/index.js"),
				n = o.n(t),
				c = o("./node_modules/react-redux/es/index.js"),
				d = o("./node_modules/reselect/es/index.js"),
				a = o("./src/reddit/actions/gold/modals.ts"),
				r = o("./src/reddit/constants/colors.ts"),
				l = o("./src/reddit/selectors/gild.ts"),
				i = o("./src/reddit/selectors/goldPurchaseModals.ts"),
				u = o("./src/higherOrderComponents/asModal/index.tsx"),
				m = o("./src/reddit/components/GildModalContent/index.tsx"),
				x = o("./src/reddit/components/GildModal/index.m.less"),
				h = o.n(x);

			function b() {
				return (b = Object.assign || function(e) {
					for (var s = 1; s < arguments.length; s++) {
						var o = arguments[s];
						for (var t in o) Object.prototype.hasOwnProperty.call(o, t) && (e[t] = o[t])
					}
					return e
				}).apply(this, arguments)
			}
			const p = Object(d.c)({
					showPurchaseModal: i.s,
					thingId: l.e
				}),
				C = Object(u.a)(e => {
					const {
						thingId: s
					} = e;
					return s ? n.a.createElement(m.a, {
						thingId: s
					}) : null
				}),
				_ = {
					backgroundColor: r.a.overlayReportFlow
				},
				g = {
					backgroundColor: "transparent"
				},
				w = Object(c.b)(p, e => ({
					closeGildModal: () => e(Object(a.a)())
				}));
			s.default = w(e => n.a.createElement(C, b({}, e, {
				className: h.a.gildModal,
				withOverlay: !0,
				onOverlayClick: e.closeGildModal,
				overlayCustomStyles: e.showPurchaseModal ? g : _
			})))
		},
		"./src/reddit/controls/CheckboxWithLabel/index.m.less": function(e, s, o) {
			e.exports = {
				checkbox: "_21CrWSXdmd-ue61gDl6zRs",
				checkboxSelected: "_1xT_z2uw_7yX0esEUZVFwf",
				sharedIconStyles: "_1NVucoiiTLKJiKzRTPVKaW",
				checkboxLabel: "_1H6-wE3jxCdsIeXW5AMjj8",
				labelContent: "-kceiAQn0jpWOpu7qZRjD"
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.tsx": function(e, s, o) {
			"use strict";
			var t = o("./node_modules/react/index.js"),
				n = o.n(t),
				c = o("./src/lib/classNames/index.ts"),
				d = o("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = o("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				r = o("./src/reddit/controls/CheckboxWithLabel/index.m.less"),
				l = o.n(r);
			s.a = e => n.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(c.a)(l.a.checkboxLabel, e.className),
				disabled: e.disabled,
				onClick: e.onClick,
				type: "button",
				role: "checkbox"
			}, n.a.createElement("span", {
				tabIndex: -1,
				className: l.a.labelContent
			}, e.isSelected ? n.a.createElement(a.a, {
				className: l.a.checkboxSelected
			}) : n.a.createElement(d.a, {
				className: l.a.checkbox
			}), e.text))
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, s, o) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, s, o) {
			"use strict";
			var t = o("./node_modules/react/index.js"),
				n = o.n(t),
				c = o("./src/reddit/constants/colors.ts"),
				d = o("./src/reddit/icons/fonts/helpers.tsx"),
				a = o("./src/reddit/icons/fonts/Coin/index.m.less"),
				r = o.n(a);
			const l = o("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(d.b)("coin"), " ").concat(e.className),
				style: {
					color: e.fillColor || c.a.gold
				}
			}), "CoinIcon", r.a);
			s.a = l
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, s, o) {
			"use strict";
			var t = o("./node_modules/react/index.js"),
				n = o.n(t);
			s.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, s, o) {
			"use strict";
			o.d(s, "a", (function() {
				return t
			}));
			const t = e => e.gild.selectedAward
		}
	}
]);
//# sourceMappingURL=GildModal.13eb74f5b4d07ffbf0b6.js.map