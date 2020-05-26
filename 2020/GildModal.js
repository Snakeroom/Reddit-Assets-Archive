// https://www.redditstatic.com/desktop2x/GildModal.4b1cbfa4038fa0dcc506.js
// Retrieved at 5/26/2020, 5:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GildModal"], {
		"./src/reddit/components/CoinPurchaseModal/Loader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts"),
				c = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			const r = () => Object(n.a)(() => Promise.all([Promise.all([s.e("vendors~CoinsPurchaseModal~EconPowerupsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCo~264e7f7d"), s.e("CoinsPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal"), s.e("CoinsPurchaseModal")]).then(s.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(c.c)()])).then(e => e[0].default),
				a = Object(o.a)({
					getComponent: r,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			t.a = a
		},
		"./src/reddit/components/GildModal/index.m.less": function(e, t, s) {
			e.exports = {
				gildModal: "_1IyDH2lB_YliAPREBY8LQQ"
			}
		},
		"./src/reddit/components/GildModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				c = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/gold/modals.ts"),
				d = s("./src/reddit/constants/colors.ts"),
				i = s("./src/reddit/selectors/gild.ts"),
				l = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				u = s("./src/higherOrderComponents/asModal/index.tsx"),
				m = s("./src/reddit/components/GildModalContent/index.tsx"),
				p = s("./src/reddit/components/GildModal/index.m.less"),
				h = s.n(p);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const b = Object(r.c)({
					showPurchaseModal: l.r,
					thingId: i.d
				}),
				w = Object(u.a)(e => {
					const {
						thingId: t
					} = e;
					return t ? n.a.createElement(m.a, {
						thingId: t
					}) : null
				}),
				f = {
					backgroundColor: d.a.overlayReportFlow
				},
				C = {
					backgroundColor: "transparent"
				},
				y = Object(c.b)(b, e => ({
					closeGildModal: () => e(Object(a.a)())
				}));
			t.default = y(e => n.a.createElement(w, x({}, e, {
				className: h.a.gildModal,
				withOverlay: !0,
				onOverlayClick: e.closeGildModal,
				overlayCustomStyles: e.showPurchaseModal ? C : f
			})))
		},
		"./src/reddit/controls/CheckboxWithLabel/index.m.less": function(e, t, s) {
			e.exports = {
				checkbox: "_21CrWSXdmd-ue61gDl6zRs",
				checkboxSelected: "_1xT_z2uw_7yX0esEUZVFwf",
				sharedIconStyles: "_1NVucoiiTLKJiKzRTPVKaW",
				checkboxLabel: "_1H6-wE3jxCdsIeXW5AMjj8",
				labelContent: "-kceiAQn0jpWOpu7qZRjD"
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				c = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				a = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				d = s("./src/reddit/controls/CheckboxWithLabel/index.m.less"),
				i = s.n(d);
			t.a = e => n.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(c.a)(i.a.checkboxLabel, e.className),
				disabled: e.disabled,
				onClick: e.onClick,
				type: "button",
				role: "checkbox"
			}, n.a.createElement("span", {
				tabIndex: -1,
				className: i.a.labelContent
			}, e.isSelected ? n.a.createElement(a.a, {
				className: i.a.checkboxSelected
			}) : n.a.createElement(r.a, {
				className: i.a.checkbox
			}), e.text))
		},
		"./src/reddit/helpers/loadThirdPartyScript.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return i
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/config.ts"),
				n = s("./src/lib/fastdom/index.ts");
			const c = "https://js.stripe.com/v3/",
				r = "https://www.paypalobjects.com/api/checkout.js",
				a = {
					checkout: "https://js.braintreegateway.com/web/3.44.2/js/paypal-checkout.min.js",
					client: "https://js.braintreegateway.com/web/3.44.2/js/client.min.js",
					paypal: "https://www.paypal.com/sdk/js?client-id=".concat(o.a.paypal.braintreeApiKey) + "&currency=USD&vault=true"
				};

			function d(e, t) {
				return t() ? Promise.resolve() : new Promise((s, o) => n.a.write(() => {
					t() && s();
					const o = document.head;
					let n = o.querySelector("script[src='".concat(e, "']"));
					n || ((n = document.createElement("script")).src = e, o.appendChild(n)), n.addEventListener("load", (function e() {
						this.removeEventListener("load", e), s()
					}))
				}))
			}

			function i() {
				return d(c, () => "undefined" != typeof Stripe)
			}

			function l() {
				return d(r, () => "undefined" != typeof paypalCheckout).then(() => {
					"undefined" == typeof paypalCheckout && "undefined" != typeof window && (window.paypalCheckout = paypal), paypal = void 0
				})
			}

			function u() {
				return Promise.all(Object.keys(a).map(e => {
					const t = "__" + e;
					return d(a[e], () => void 0 !== window[t]).then(() => {
						window[t] = !0
					})
				}))
			}
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, s) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				c = s("./src/reddit/constants/colors.ts"),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Coin/index.m.less"),
				d = s.n(a);
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(r.b)("coin"), " ").concat(e.className),
				style: {
					color: e.fillColor || c.a.gold
				}
			}), "CoinIcon", d.a);
			t.a = i
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			const o = e => e.gild.selectedAward
		}
	}
]);
//# sourceMappingURL=GildModal.4b1cbfa4038fa0dcc506.js.map