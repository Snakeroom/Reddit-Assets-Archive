// https://www.redditstatic.com/desktop2x/GildModal.3418442e94470e90bbb1.js
// Retrieved at 3/17/2020, 2:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GildModal"], {
		"./src/graphql/operations/FetchActiveCoinSale.json": function(e) {
			e.exports = JSON.parse('{"id":"2459112779ff"}')
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				c = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/sentry/index.ts"),
				a = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeApiRequest/index.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/graphql/operations/FetchActiveCoinSale.json"),
				u = s("./src/reddit/constants/headers.ts"),
				p = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				m = s("./src/reddit/endpoints/gold/purchase.ts");
			const b = e => e.map(e => ({
					baselineCoins: e.baseline_coins || e.coins,
					baselinePennies: e.baseline_pennies || e.pennies,
					bonusPct: e.bonus_pct,
					coins: e.coins,
					description: e.description,
					featured: e.featured,
					featuredLabel: e.featured_label,
					images: {
						marketing: e.images.marketing,
						purchaseSuccess: e.images.purchase_success
					},
					mobileId: e.mobile_id,
					pennies: e.pennies
				})),
				h = e => e.map(e => ({
					description: e.description,
					frequency: e.frequency,
					frequencyDays: e.frequency_days,
					images: {
						marketing: e.images.marketing,
						purchaseSuccess: e.images.purchase_success
					},
					mobileId: e.mobile_id,
					mobilePennies: e.mobile_pennies,
					pennies: e.pennies,
					periodicalCoins: e.periodical_coins,
					signupBonusCoins: e.signup_bonus_coins
				})),
				x = e => null;

			function g(e) {
				if (!e.ok) return e;
				const {
					active_coin_sale: t,
					coin_packages: s,
					premium_packages: n
				} = e.body, c = {
					activeSale: x(t),
					coinPackages: b(s),
					premiumPackages: h(n)
				};
				return Object.assign({}, e, {
					body: c
				})
			}
			var f = s("./src/reddit/actions/goldPurchaseModals/constants.ts");
			s.d(t, "a", (function() {
				return y
			})), s.d(t, "b", (function() {
				return k
			}));
			const C = Object(c.a)(f.f),
				y = () => async (e, t, s) => {
					let {
						gqlContext: n
					} = s;
					const c = await (e => Object(i.a)(e, Object.assign({}, l)))(n());
					if (c.ok) {
						const t = c.body.data.coinSale;
						await e(C(t))
					}
				}, _ = Object(c.a)(f.h), j = Object(c.a)(f.i), w = Object(c.a)(f.g), k = () => async (e, t, s) => {
					let {
						apiContext: c
					} = s;
					e(_());
					try {
						const t = await (async e => {
							const t = "".concat(e.apiUrl, "/api/v2/gold/purchase_package_details"),
								s = Object(p.a)(t);
							return Object(r.b)(Object(d.a)(e, [u.a]), {
								method: a.db.GET,
								endpoint: s
							}).then(m.c).then(g)
						})(c());
						if (!t.ok) throw new Error(t.error && t.error.type || "Unknown error");
						const s = t.body;
						e(j(s))
					} catch (i) {
						o.c.captureException(i);
						const t = n.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						e(w(t))
					}
				}
		},
		"./src/reddit/components/CoinPurchaseModal/Loader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/lib/loadWithRetries/index.ts"),
				o = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			const a = () => Object(c.a)(() => Promise.all([Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~e8822216"), s.e("CoinsPurchaseModal~PennyPurchaseModal"), s.e("CoinsPurchaseModal")]).then(s.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(o.c)()])).then(e => e[0].default),
				r = Object(n.a)({
					getComponent: a,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			t.a = r
		},
		"./src/reddit/components/GildModal/index.m.less": function(e, t, s) {
			e.exports = {
				gildModal: "_1IyDH2lB_YliAPREBY8LQQ"
			}
		},
		"./src/reddit/components/GildModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				c = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/gold/modals.ts"),
				i = s("./src/reddit/constants/colors.ts"),
				d = s("./src/reddit/selectors/gild.ts"),
				l = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				u = s("./src/higherOrderComponents/asModal/index.tsx"),
				p = s("./src/reddit/components/GildModalContent/index.tsx"),
				m = s("./src/reddit/components/GildModal/index.m.less"),
				b = s.n(m);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = Object(a.c)({
					showPurchaseModal: l.q,
					thingId: d.d
				}),
				g = Object(u.a)(e => {
					const {
						thingId: t
					} = e;
					return t ? c.a.createElement(p.a, {
						thingId: t
					}) : null
				}),
				f = {
					backgroundColor: i.a.overlayReportFlow
				},
				C = {
					backgroundColor: "transparent"
				},
				y = Object(o.b)(x, e => ({
					closeGildModal: () => e(Object(r.a)())
				}));
			t.default = y(e => c.a.createElement(g, h({}, e, {
				className: b.a.gildModal,
				withOverlay: !0,
				onOverlayClick: e.closeGildModal,
				overlayCustomStyles: e.showPurchaseModal ? C : f
			})))
		},
		"./src/reddit/controls/CheckboxWithLabel/index.m.less": function(e, t, s) {
			e.exports = {
				sharedIconStyles: "_1NVucoiiTLKJiKzRTPVKaW",
				checkbox: "_21CrWSXdmd-ue61gDl6zRs",
				checkboxSelected: "_1xT_z2uw_7yX0esEUZVFwf",
				checkboxLabel: "_1H6-wE3jxCdsIeXW5AMjj8",
				labelContent: "-kceiAQn0jpWOpu7qZRjD"
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				c = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				r = s("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				i = s("./src/reddit/controls/CheckboxWithLabel/index.m.less"),
				d = s.n(i);
			t.a = e => c.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(o.a)(d.a.checkboxLabel, e.className),
				disabled: e.disabled,
				onClick: e.onClick,
				type: "button",
				role: "checkbox"
			}, c.a.createElement("span", {
				tabIndex: -1,
				className: d.a.labelContent
			}, e.isSelected ? c.a.createElement(r.a, {
				className: d.a.checkboxSelected
			}) : c.a.createElement(a.a, {
				className: d.a.checkbox
			}), e.text))
		},
		"./src/reddit/helpers/loadThirdPartyScript.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/config.ts"),
				c = s("./src/lib/fastdom/index.ts");
			const o = "https://js.stripe.com/v3/",
				a = "https://www.paypalobjects.com/api/checkout.js",
				r = {
					checkout: "https://js.braintreegateway.com/web/3.44.2/js/paypal-checkout.min.js",
					client: "https://js.braintreegateway.com/web/3.44.2/js/client.min.js",
					paypal: "https://www.paypal.com/sdk/js?client-id=".concat(n.a.paypal.braintreeApiKey) + "&currency=USD&vault=true"
				};

			function i(e, t) {
				return t() ? Promise.resolve() : new Promise((s, n) => c.a.write(() => {
					t() && s();
					const n = document.head;
					let c = n.querySelector("script[src='".concat(e, "']"));
					c || ((c = document.createElement("script")).src = e, n.appendChild(c)), c.addEventListener("load", (function e() {
						this.removeEventListener("load", e), s()
					}))
				}))
			}

			function d() {
				return i(o, () => "undefined" != typeof Stripe)
			}

			function l() {
				return i(a, () => "undefined" != typeof paypalCheckout).then(() => {
					"undefined" == typeof paypalCheckout && "undefined" != typeof window && (window.paypalCheckout = paypal), paypal = void 0
				})
			}

			function u() {
				return Promise.all(Object.keys(r).map(e => {
					const t = "__" + e;
					return i(r[e], () => void 0 !== window[t]).then(() => {
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
			var n = s("./node_modules/react/index.js"),
				c = s.n(n),
				o = s("./src/reddit/constants/colors.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Coin/index.m.less"),
				i = s.n(r);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => c.a.createElement("i", {
				className: "".concat(Object(a.b)("coin"), " ").concat(e.className),
				style: {
					color: e.fillColor || o.a.gold
				}
			}), "CoinIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				c = s.n(n),
				o = s("./src/reddit/i18n/components.tsx");
			t.a = e => c.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, c.a.createElement("title", null, c.a.createElement(o.c, null, "Reddit Premium")), c.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/selectors/gold/purchaseCatalog.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "d", (function() {
				return r
			}));
			const n = e => e.goldPurchase.purchaseCatalog.activeCoinSale,
				c = e => e.goldPurchase.purchaseCatalog.coinPackages,
				o = e => e.goldPurchase.purchaseCatalog.premiumPackages,
				a = e => e.goldPurchase.purchaseCatalog.pending,
				r = e => e.goldPurchase.purchaseCatalog.errorMessage
		}
	}
]);
//# sourceMappingURL=GildModal.3418442e94470e90bbb1.js.map