// https://www.redditstatic.com/desktop2x/UpdateCardModal.d4a66801c6fdfc07756c.js
// Retrieved at 4/19/2022, 1:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["UpdateCardModal"], {
		"./src/reddit/components/UpdateCardModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				s = r("./src/higherOrderComponents/asModal/index.tsx"),
				i = r("./node_modules/react/index.js"),
				o = r.n(i),
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
				h = e => async (t, r, n) => {
					let {
						gqlContext: s
					} = n;
					try {
						const t = await Object(f.i)(s()),
							{
								error: r
							} = await e.redirectToCheckout({
								sessionId: t
							});
						if (r) throw new Error(r.message)
					} catch (i) {
						l.c.captureException(i);
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
			var v = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				E = r("./src/reddit/hooks/useStripePromise.ts");
			const S = Object(s.a)(() => {
				const e = Object(c.d)(),
					t = Object(n.useStripe)();
				return Object(i.useEffect)(() => {
					t && e(h(t))
				}, [t, e]), o.a.createElement(v.a, {
					sizePx: 15
				})
			});
			t.default = e => {
				const t = Object(E.a)();
				return o.a.createElement(n.Elements, {
					stripe: t
				}, o.a.createElement(S, e))
			}
		},
		"./src/reddit/hooks/useStripePromise.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return j
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
				f = r("./src/reddit/constants/experiments.ts"),
				w = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const b = Object(w.a)(f.Nc);
			let x = null;

			function j() {
				const e = Object(m.e)(b);
				return x || (x = u(p.a.stripe.apiKey(e))), x
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/UpdateCardModal.d4a66801c6fdfc07756c.js.map