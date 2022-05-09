// https://www.redditstatic.com/desktop2x/UpdateCardModal.55df55a4adaf69dc07f5.js
// Retrieved at 5/9/2022, 3:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["UpdateCardModal"], {
		"./src/reddit/components/UpdateCardModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				s = r("./src/higherOrderComponents/asModal/index.tsx"),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				c = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				d = r("./src/lib/makeActionCreator/index.ts"),
				l = r("./src/lib/sentry/index.ts"),
				u = r("./src/reddit/actions/modal.ts"),
				p = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/components/Settings/PremiumForm.tsx"),
				f = r("./src/reddit/endpoints/gold/purchase.ts"),
				w = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/selectors/activeModalId.ts"),
				x = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const j = Object(d.a)(x.f),
				v = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					try {
						const t = await Object(f.g)(s()),
							{
								error: r
							} = await e.redirectToCheckout({
								sessionId: t
							});
						if (r) throw new Error(r.message)
					} catch (o) {
						l.c.captureException(o);
						const e = a.fbt._("Something went wrong", null, {
							hk: "ie9Ol"
						});
						t(Object(p.f)({
							kind: w.b.Error,
							duration: p.a,
							text: e
						})), t((() => async (e, t) => {
							Object(b.b)(m.a)(t()) && (e(Object(u.i)(m.a)), e(j()))
						})())
					}
				};
			var h = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				S = r("./src/reddit/hooks/useStripePromise.ts");
			const E = Object(s.a)(() => {
				const e = Object(c.d)(),
					t = Object(n.useStripe)();
				return Object(o.useEffect)(() => {
					t && e(v(t))
				}, [t, e]), i.a.createElement(h.a, {
					sizePx: 15
				})
			});
			t.default = e => {
				const t = Object(S.a)();
				return i.a.createElement(n.Elements, {
					stripe: t
				}, i.a.createElement(E, e))
			}
		},
		"./src/reddit/hooks/useStripePromise.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			}));
			var n = "https://js.stripe.com/v3",
				s = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
				o = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
				i = null,
				c = function(e) {
					return null !== i ? i : i = new Promise((function(t, r) {
						if ("undefined" != typeof window)
							if (window.Stripe && e && console.warn(o), window.Stripe) t(window.Stripe);
							else try {
								var i = function() {
									for (var e = document.querySelectorAll('script[src^="'.concat(n, '"]')), t = 0; t < e.length; t++) {
										var r = e[t];
										if (s.test(r.src)) return r
									}
									return null
								}();
								i && e ? console.warn(o) : i || (i = function(e) {
									var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
										r = document.createElement("script");
									r.src = "".concat(n).concat(t);
									var s = document.head || document.body;
									if (!s) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
									return s.appendChild(r), r
								}(e)), i.addEventListener("load", (function() {
									window.Stripe ? t(window.Stripe) : r(new Error("Stripe.js not available"))
								})), i.addEventListener("error", (function() {
									r(new Error("Failed to load Stripe.js"))
								}))
							} catch (c) {
								return void r(c)
							} else t(null)
					}))
				},
				a = function(e, t, r) {
					if (null === e) return null;
					var n = e.apply(void 0, t);
					return function(e, t) {
						e && e._registerWrapper && e._registerWrapper({
							name: "stripe-js",
							version: "1.21.1",
							startTime: t
						})
					}(n, r), n
				},
				d = Promise.resolve().then((function() {
					return c(null)
				})),
				l = !1;
			d.catch((function(e) {
				l || console.warn(e)
			}));
			var u = function() {
					for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
					l = !0;
					var n = Date.now();
					return d.then((function(e) {
						return a(e, t, n)
					}))
				},
				p = r("./src/config.ts"),
				m = r("./node_modules/react-redux/es/index.js"),
				f = r("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts");
			let w = null;

			function b() {
				const e = Object(m.e)(f.a);
				return w || (w = u(p.a.stripe.apiKey(e))), w
			}
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(s.a)(n.Tc)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/UpdateCardModal.55df55a4adaf69dc07f5.js.map