// https://www.redditstatic.com/desktop2x/UpdateCardModal.0e215ef3281087ab5ea0.js
// Retrieved at 6/7/2023, 1:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["UpdateCardModal"], {
		"./node_modules/@stripe/stripe-js/dist/stripe.esm.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var n = "https://js.stripe.com/v3",
				s = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
				i = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
				o = null,
				c = function(e) {
					return null !== o ? o : o = new Promise((function(t, r) {
						if ("undefined" != typeof window)
							if (window.Stripe && e && console.warn(i), window.Stripe) t(window.Stripe);
							else try {
								var o = function() {
									for (var e = document.querySelectorAll('script[src^="'.concat(n, '"]')), t = 0; t < e.length; t++) {
										var r = e[t];
										if (s.test(r.src)) return r
									}
									return null
								}();
								o && e ? console.warn(i) : o || (o = function(e) {
									var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
										r = document.createElement("script");
									r.src = "".concat(n).concat(t);
									var s = document.head || document.body;
									if (!s) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
									return s.appendChild(r), r
								}(e)), o.addEventListener("load", (function() {
									window.Stripe ? t(window.Stripe) : r(new Error("Stripe.js not available"))
								})), o.addEventListener("error", (function() {
									r(new Error("Failed to load Stripe.js"))
								}))
							} catch (c) {
								return void r(c)
							} else t(null)
					}))
				},
				d = function(e, t, r) {
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
				a = Promise.resolve().then((function() {
					return c(null)
				})),
				u = !1;
			a.catch((function(e) {
				u || console.warn(e)
			}));
			var l = function() {
				for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
				u = !0;
				var n = Date.now();
				return a.then((function(e) {
					return d(e, t, n)
				}))
			}
		},
		"./src/reddit/components/UpdateCardModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				s = r("./src/higherOrderComponents/asModal/index.tsx"),
				i = r("./node_modules/react/index.js"),
				o = r.n(i),
				c = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				u = r("./src/lib/sentry/index.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				p = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/components/Settings/PremiumForm.tsx"),
				f = r("./src/reddit/endpoints/gold/purchase.ts"),
				w = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/selectors/activeModalId.ts"),
				x = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const j = Object(a.a)(x.f),
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
					} catch (i) {
						u.c.captureException(i);
						const e = d.fbt._("Something went wrong", null, {
							hk: "ie9Ol"
						});
						t(Object(p.f)({
							kind: w.b.Error,
							duration: p.a,
							text: e
						})), t((() => async (e, t) => {
							Object(b.b)(m.a)(t()) && (e(Object(l.i)(m.a)), e(j()))
						})())
					}
				};
			var h = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				S = r("./src/reddit/hooks/useStripePromise.ts");
			const _ = Object(s.a)(() => {
				const e = Object(c.d)(),
					t = Object(n.useStripe)();
				return Object(i.useEffect)(() => {
					t && e(v(t))
				}, [t, e]), o.a.createElement(h.a, {
					sizePx: 15
				})
			});
			t.default = e => {
				const t = Object(S.a)();
				return o.a.createElement(n.Elements, {
					stripe: t
				}, o.a.createElement(_, e))
			}
		},
		"./src/reddit/hooks/useStripePromise.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/@stripe/stripe-js/dist/stripe.esm.js"),
				s = r("./src/config.ts"),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/selectors/experiments/econ/index.ts"),
				c = r("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts");
			let d = null;

			function a() {
				const e = Object(i.e)(c.a),
					t = Object(i.e)(o.p);
				return d || (d = Object(n.a)(s.a.stripe.apiKey(e), {
					apiVersion: s.a.stripe.apiVersion(t)
				})), d
			}
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const i = Object(s.a)(n.Dd)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/UpdateCardModal.0e215ef3281087ab5ea0.js.map