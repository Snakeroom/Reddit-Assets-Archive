// https://www.redditstatic.com/desktop2x/PowerupsPremiumUpsellModal.113eb6762dc7cf08a229.js
// Retrieved at 6/29/2022, 10:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PowerupsPremiumUpsellModal", "GoldPurchasePaymentActions"], {
		"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js": function(e, t, r) {
			! function(e, t) {
				"use strict";
				t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
				var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

				function n() {}

				function o() {}
				o.resetWarningCache = n;
				var s = function(e, t) {
					return e(t = {
						exports: {}
					}, t.exports), t.exports
				}((function(e) {
					e.exports = function() {
						function e(e, t, n, o, s, a) {
							if (a !== r) {
								var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
								throw c.name = "Invariant Violation", c
							}
						}

						function t() {
							return e
						}
						e.isRequired = e;
						var s = {
							array: e,
							bool: e,
							func: e,
							number: e,
							object: e,
							string: e,
							symbol: e,
							any: e,
							arrayOf: t,
							element: e,
							elementType: e,
							instanceOf: t,
							node: e,
							objectOf: t,
							oneOf: t,
							oneOfType: t,
							shape: t,
							exact: t,
							checkPropTypes: o,
							resetWarningCache: n
						};
						return s.PropTypes = s, s
					}()
				}));

				function a(e) {
					return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					})(e)
				}

				function c(e, t, r) {
					return t in e ? Object.defineProperty(e, t, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = r, e
				}

				function i(e, t) {
					var r = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var n = Object.getOwnPropertySymbols(e);
						t && (n = n.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), r.push.apply(r, n)
					}
					return r
				}

				function d(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = null != arguments[t] ? arguments[t] : {};
						t % 2 ? i(Object(r), !0).forEach((function(t) {
							c(e, t, r[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
						}))
					}
					return e
				}

				function u(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
							var r = [],
								n = !0,
								o = !1,
								s = void 0;
							try {
								for (var a, c = e[Symbol.iterator](); !(n = (a = c.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
							} catch (i) {
								o = !0, s = i
							} finally {
								try {
									n || null == c.return || c.return()
								} finally {
									if (o) throw s
								}
							}
							return r
						}
					}(e, t) || function(e, t) {
						if (e) {
							if ("string" == typeof e) return l(e, t);
							var r = Object.prototype.toString.call(e).slice(8, -1);
							return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? l(e, t) : void 0
						}
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function l(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
					return n
				}
				var p = function(e) {
						var r = t.useRef(e);
						return t.useEffect((function() {
							r.current = e
						}), [e]), r.current
					},
					m = function(e) {
						return null !== e && "object" === a(e)
					},
					f = function(e, t, r) {
						return m(e) ? Object.keys(e).reduce((function(n, o) {
							var s = !m(t) || ! function e(t, r) {
								if (!m(t) || !m(r)) return t === r;
								var n = Array.isArray(t);
								if (n !== Array.isArray(r)) return !1;
								var o = "[object Object]" === Object.prototype.toString.call(t);
								if (o !== ("[object Object]" === Object.prototype.toString.call(r))) return !1;
								if (!o && !n) return !1;
								var s = Object.keys(t),
									a = Object.keys(r);
								if (s.length !== a.length) return !1;
								for (var c = {}, i = 0; i < s.length; i += 1) c[s[i]] = !0;
								for (var d = 0; d < a.length; d += 1) c[a[d]] = !0;
								var u = Object.keys(c);
								if (u.length !== s.length) return !1;
								var l = t,
									p = r;
								return u.every((function(t) {
									return e(l[t], p[t])
								}))
							}(e[o], t[o]);
							return r.includes(o) ? (s && console.warn("Unsupported prop change: options.".concat(o, " is not a mutable property.")), n) : s ? d(d({}, n || {}), {}, c({}, o, e[o])) : n
						}), null) : null
					},
					b = function(e) {
						if (null === e || m(t = e) && "function" == typeof t.elements && "function" == typeof t.createToken && "function" == typeof t.createPaymentMethod && "function" == typeof t.confirmCardPayment) return e;
						var t;
						throw new Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
					},
					y = function(e) {
						if (function(e) {
								return m(e) && "function" == typeof e.then
							}(e)) return {
							tag: "async",
							stripePromise: Promise.resolve(e).then(b)
						};
						var t = b(e);
						return null === t ? {
							tag: "empty"
						} : {
							tag: "sync",
							stripe: t
						}
					},
					g = t.createContext(null);
				g.displayName = "ElementsContext";
				var h = function(e) {
					var r = e.stripe,
						n = e.options,
						o = e.children,
						s = t.useRef(!1),
						a = t.useRef(!0),
						c = t.useMemo((function() {
							return y(r)
						}), [r]),
						i = u(t.useState((function() {
							return {
								stripe: null,
								elements: null
							}
						})), 2),
						d = i[0],
						l = i[1],
						m = p(r);
					null !== m && m !== r && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), s.current || ("sync" === c.tag && (s.current = !0, l({
						stripe: c.stripe,
						elements: c.stripe.elements(n)
					})), "async" === c.tag && (s.current = !0, c.stripePromise.then((function(e) {
						e && a.current && l({
							stripe: e,
							elements: e.elements(n)
						})
					}))));
					var b = p(n);
					return t.useEffect((function() {
						if (d.elements) {
							var e = f(n, b, ["clientSecret", "fonts"]);
							e && d.elements.update(e)
						}
					}), [n, b, d.elements]), t.useEffect((function() {
						return function() {
							a.current = !1
						}
					}), []), t.useEffect((function() {
						var e = d.stripe;
						e && e._registerWrapper && e.registerAppInfo && (e._registerWrapper({
							name: "react-stripe-js",
							version: "1.6.0"
						}), e.registerAppInfo({
							name: "react-stripe-js",
							version: "1.6.0",
							url: "https://stripe.com/docs/stripe-js/react"
						}))
					}), [d.stripe]), t.createElement(g.Provider, {
						value: d
					}, o)
				};
				h.propTypes = {
					stripe: s.any,
					options: s.object
				};
				var O = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(g), e)
					},
					j = function(e) {
						return (0, e.children)(O("mounts <ElementsConsumer>"))
					};
				j.propTypes = {
					children: s.func.isRequired
				};
				var P = function(e) {
						var r = t.useRef(e);
						return t.useEffect((function() {
								r.current = e
							}), [e]),
							function() {
								r.current && r.current.apply(r, arguments)
							}
					},
					v = function() {},
					E = function(e, r) {
						var n, o = "".concat((n = e).charAt(0).toUpperCase() + n.slice(1), "Element"),
							a = r ? function(e) {
								O("mounts <".concat(o, ">"));
								var r = e.id,
									n = e.className;
								return t.createElement("div", {
									id: r,
									className: n
								})
							} : function(r) {
								var n = r.id,
									s = r.className,
									a = r.options,
									c = void 0 === a ? {} : a,
									i = r.onBlur,
									d = void 0 === i ? v : i,
									u = r.onFocus,
									l = void 0 === u ? v : u,
									m = r.onReady,
									b = void 0 === m ? v : m,
									y = r.onChange,
									g = void 0 === y ? v : y,
									h = r.onEscape,
									j = void 0 === h ? v : h,
									E = r.onClick,
									_ = void 0 === E ? v : E,
									w = O("mounts <".concat(o, ">")).elements,
									C = t.useRef(null),
									k = t.useRef(null),
									x = P(b),
									I = P(d),
									S = P(l),
									A = P(_),
									N = P(g),
									R = P(j);
								t.useLayoutEffect((function() {
									if (null == C.current && w && null != k.current) {
										var t = w.create(e, c);
										C.current = t, t.mount(k.current), t.on("ready", (function() {
											return x(t)
										})), t.on("change", N), t.on("blur", I), t.on("focus", S), t.on("escape", R), t.on("click", A)
									}
								}));
								var M = p(c);
								return t.useEffect((function() {
									if (C.current) {
										var e = f(c, M, ["paymentRequest"]);
										e && C.current.update(e)
									}
								}), [c, M]), t.useLayoutEffect((function() {
									return function() {
										C.current && C.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: s,
									ref: k
								})
							};
						return a.propTypes = {
							id: s.string,
							className: s.string,
							onChange: s.func,
							onBlur: s.func,
							onFocus: s.func,
							onReady: s.func,
							onClick: s.func,
							options: s.object
						}, a.displayName = o, a.__elementType = e, a
					},
					_ = "undefined" == typeof window,
					w = E("auBankAccount", _),
					C = E("card", _),
					k = E("cardNumber", _),
					x = E("cardExpiry", _),
					I = E("cardCvc", _),
					S = E("fpxBank", _),
					A = E("iban", _),
					N = E("idealBank", _),
					R = E("p24Bank", _),
					M = E("epsBank", _),
					T = E("payment", _),
					L = E("paymentRequestButton", _),
					U = E("linkAuthentication", _),
					B = E("shippingAddress", _),
					D = E("afterpayClearpayMessage", _);
				e.AfterpayClearpayMessageElement = D, e.AuBankAccountElement = w, e.CardCvcElement = I, e.CardElement = C, e.CardExpiryElement = x, e.CardNumberElement = k, e.Elements = h, e.ElementsConsumer = j, e.EpsBankElement = M, e.FpxBankElement = S, e.IbanElement = A, e.IdealBankElement = N, e.LinkAuthenticationElement = U, e.P24BankElement = R, e.PaymentElement = T, e.PaymentRequestButtonElement = L, e.ShippingAddressElement = B, e.useElements = function() {
					return O("calls useElements()").elements
				}, e.useStripe = function() {
					return O("calls useStripe()").stripe
				}, Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}(t, r("./node_modules/react/index.js"))
		},
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/lib/currency/cleanNumber/index.ts");

			function o(e, t) {
				const r = Object(n.a)(e),
					o = parseInt(r) / 100;
				return Math.floor(o) !== o || t ? o.toFixed(2) : String(o)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, r) {
			"use strict";

			function n(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/lib/currency/currencies.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "e", (function() {
				return u
			}));
			var n, o = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(n || (n = {}));
			const s = "USD",
				a = "ETH",
				c = "COINS",
				i = [a, "BTC"],
				d = [c, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				u = {
					COINS: () => o.fbt._("Coins", null, {
						hk: "1T2Y4p"
					}),
					SUBREDDIT_POINTS: () => o.fbt._("Subreddit points", null, {
						hk: "1ytOO3"
					}),
					GAME_TOKENS: () => o.fbt._("Game tokens", null, {
						hk: "16BUrU"
					})
				}
		},
		"./src/lib/localizeCurrency/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return u
			}));
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = r("./src/lib/currency/centsToDollars/index.ts"),
				s = r("./src/lib/currency/currencies.ts"),
				a = r("./src/lib/prettyPrintNumber/index.ts"),
				c = r("./src/reddit/helpers/governance/tokens.ts"),
				i = r("./src/reddit/constants/intlSupport.ts");
			const d = function(e) {
					let {
						locale: t = n.DEFAULT_LOCALE,
						pretty: r,
						formatOptions: o
					} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const s = Number(e);
					return Object(i.c)() ? r ? Object(a.b)(s) : new Intl.NumberFormat(t, o).format(s) : l(s, r, t)
				},
				u = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: a,
						formatOptions: d,
						displayConversion: u,
						forceDecimals: f,
						currency: b = t.currency || (t.type ? m(t.type) : s.c),
						type: y = t.type || (t.currency ? p(t.currency) : s.b.Real)
					} = t, g = Number(e), h = String(e);
					switch (y) {
						case s.b.Reddit: {
							const e = s.e[b],
								t = e ? e() : b;
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(g) + " " + t : l(g, a, r, t)
						}
						case s.b.Crypto: {
							if (a) {
								return Object(c.d)(h, u) + " " + b
							}
							const e = Number(Object(c.c)(h, u));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : l(e, a, r, b)
						}
						case s.b.Real:
						default: {
							const e = Number(Object(o.a)(h, f));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								notation: a ? "compact" : "standard",
								...d
							}).format(e) : l(e, a, r, b)
						}
					}
				},
				l = (e, t, r, n) => {
					return (t ? Object(a.b)(e) : e.toLocaleString(r)) + (n ? " " + n : "")
				},
				p = e => s.g.includes(e.toUpperCase()) ? s.b.Reddit : s.f.includes(e.toUpperCase()) ? s.b.Crypto : s.b.Real,
				m = e => {
					switch (e) {
						case s.b.Crypto:
							return s.d;
						case s.b.Reddit:
							return s.a;
						case s.b.Real:
						default:
							return s.c
					}
				}
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return _
			})), r.d(t, "d", (function() {
				return C
			})), r.d(t, "k", (function() {
				return k
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "g", (function() {
				return I
			})), r.d(t, "e", (function() {
				return S
			})), r.d(t, "c", (function() {
				return A
			})), r.d(t, "a", (function() {
				return L
			})), r.d(t, "i", (function() {
				return B
			})), r.d(t, "f", (function() {
				return G
			})), r.d(t, "j", (function() {
				return F
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/lodash/omit.js"),
				s = r.n(o),
				a = r("./node_modules/uuid/v4.js"),
				c = r.n(a),
				i = r("./src/config.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/lib/addQueryParams/index.ts"),
				p = r("./src/lib/makeActionCreator/index.ts"),
				m = r("./src/lib/sentry/index.ts"),
				f = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/actions/gold/constants.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				g = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/actions/gold/powerups.ts"),
				j = r("./src/reddit/actions/modal.ts"),
				P = r("./src/reddit/endpoints/gold/productOfferPurchase/index.ts");
			const v = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				E = e => e.map(e => e.message).join(" : "),
				_ = (e, t, r, o) => async (s, a, i) => {
					let {
						gqlContext: d
					} = i;
					const u = c()(),
						l = await Object(P.f)(d(), u, e, t, r, o);
					if (l.ok) {
						const e = l.body,
							{
								errors: t,
								order: r
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(E(t));
						if (r) return r.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, w = Object(y.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
					hk: "2LgB2E"
				})), C = e => !!e && e.hasOwnProperty("success"), k = e => {
					let {
						stripe: t,
						stripeElements: r,
						productOffer: n,
						pricePackage: o,
						productsCount: s,
						extraParams: a
					} = e;
					return async (e, i, d) => {
						let {
							gqlContext: u
						} = d;
						var l;
						const p = i();
						let f, b, h = "";
						try {
							h = await e(_(n, o, s, a))
						} catch (j) {
							return m.c.captureException(j), void(j.message && e(Object(y.stripeApiError)(j.message)))
						}
						e(Object(y.stripeTokenPending)());
						const O = Object(g.y)(p);
						if (O || (f = await e(Object(y.validateAndCreateStripeToken)(t, r)), b = Object(g.v)(p), f)) try {
							const r = c()(),
								n = O || b ? f && b ? Object(P.h)(u(), r, h, f.id) : O ? Object(P.j)(u(), r, h, O) : null : Object(P.i)(u(), r, h, f.id),
								o = await n;
							if (!(null == o ? void 0 : o.ok)) return void e(w);
							const s = o.body.data.createEconPayment;
							if (null === (l = null == s ? void 0 : s.errors) || void 0 === l ? void 0 : l.length) return void e(Object(y.stripeApiError)(E(s.errors)));
							const {
								ok: a,
								payment: i,
								providerExecution: {
									paymentIntentClientSecret: d
								}
							} = s;
							if (a && i.status === P.a.ActionRequired) {
								const r = await t.confirmCardPayment(d),
									{
										error: n
									} = r;
								if (n) return ((e, t) => {
									var r, n;
									(null === (n = null === (r = e.payment_intent) || void 0 === r ? void 0 : r.last_payment_error) || void 0 === n ? void 0 : n.message) ? t(Object(y.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(y.stripeApiError)(e.message)) : t(w)
								})(n, e);
								let o;
								if (!(o = O ? await Object(P.e)(u(), c()(), i.id, O) : await Object(P.d)(u(), c()(), i.id, f.id, b)).ok) return void e(w);
								const s = o.body;
								if (!s.data.confirmEconPayment.ok || s.data.confirmEconPayment.payment.status !== P.a.Paid) return void e(w)
							} else if (a && i.status !== P.a.Paid) return void e(w);
							return {
								success: !0
							}
						} catch (j) {
							m.c.captureException(j), e(w)
						}
					}
				}, x = e => {
					let {
						productOffer: t,
						pricePackage: r,
						productsCount: n,
						extraParams: o,
						overrideModalParams: s
					} = e;
					return async (e, a, d) => {
						let {
							gqlContext: u
						} = d;
						var p;
						let f = "";
						try {
							f = await e(_(t, r, n, o))
						} catch (O) {
							return m.c.captureException(O), O.message && e(Object(y.paypalApiError)(O.message)), null
						}
						const b = i.a.redditUrl,
							g = {
								_o: b,
								o: f,
								pt: t.type,
								...s
							};
						try {
							const t = Object(l.a)(`${b}/framedModal/paypal-finish`, {
									...g,
									s: !0
								}),
								r = Object(l.a)(`${b}/framedModal/paypal-finish`, g),
								n = c()(),
								o = await Object(P.g)(u(), n, f, t, r);
							if (o && o.ok) {
								const t = o.body.data.createEconPayment;
								if (null === (p = null == t ? void 0 : t.errors) || void 0 === p ? void 0 : p.length) return e(Object(y.paypalApiError)(E(t.errors))), null;
								const r = Object(h.k)(a());
								if (t.ok) {
									const {
										status: e
									} = t.payment;
									if (e === P.a.ActionRequired) {
										const e = t.providerExecution;
										if (e.orderApprovalUrl) return {
											paymentId: t.payment.id,
											url: e.orderApprovalUrl
										};
										if (e.billingAgreementToken && e.billingAgreementApprovalUrl) return {
											paymentId: t.payment.id,
											token: e.billingAgreementToken,
											url: e.billingAgreementApprovalUrl
										}
									}
									if ("PAID" === e && r) return {
										success: !0
									}
								}
							}
						} catch (O) {
							m.c.captureException(O)
						}
						return e(Object(y.paypalApiError)(v())), null
					}
				}, I = (e, t) => async (r, n, o) => {
					let {
						gqlContext: s
					} = o;
					var a;
					try {
						const n = c()(),
							o = await Object(P.c)(s(), n, e, t);
						if (o && o.ok) {
							const e = o.body.data.confirmEconPayment;
							if (null === (a = null == e ? void 0 : e.errors) || void 0 === a ? void 0 : a.length) return r(Object(y.paypalApiError)(E(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (i) {
						m.c.captureException(i)
					}
					return r(Object(y.paypalApiError)(v())), !1
				}, S = () => async (e, t, r) => {
					let {
						gqlContext: o
					} = r;
					var a;
					e(Object(y.savedCardsPending)());
					try {
						const t = await Object(P.l)(o());
						if (t.error) throw e(Object(y.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						}))), new Error(t.error.type);
						const r = t.body;
						(null === (a = r.errors) || void 0 === a ? void 0 : a.length) && e(Object(y.stripeApiError)(r.errors[0].message));
						const {
							savedStripeCards: c
						} = r.data.identity, i = c.map(e => s()({
							...e,
							cardId: e.id
						}, "id"));
						e(Object(y.savedCardsSuccess)(i)), i[0] && e(Object(y.selectSavedCard)(i[0].cardId))
					} catch (c) {
						m.c.captureException(c), e(Object(y.savedCardsSuccess)([]))
					}
				}, A = e => async (t, r, n) => {
					let {
						gqlContext: o
					} = n;
					t(Object(y.deleteSavedCard)(e));
					try {
						const t = await Object(P.k)(o(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: n
							} = r.data.deleteEconPaymentMethod;
						if (n && n.length) throw new Error(E(n))
					} catch (s) {
						m.c.captureException(s)
					}
				}, N = Object(p.a)(b.O), R = Object(p.a)(b.P), M = Object(p.a)(b.Q), T = e => async (t, r) => {
					await t(N(e)), t(Object(u.f)({
						kind: f.b.Error,
						duration: u.a,
						text: e
					}))
				}, L = (e, t, r) => async (o, s, a) => {
					let {
						gqlContext: c
					} = a;
					o(R({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const s = await Object(P.b)(c(), e);
						if (s.ok) {
							const e = s.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void o(T(n[0].message));
							o(M({
								subredditId: t,
								allocatedAt: r
							}))
						} else o(T(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						m.c.captureException(i), o(T(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, U = Object(p.a)(b.S), B = e => async (t, r) => {
					t(U(e)), t(Object(O.m)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(j.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(j.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, D = Object(p.a)(b.W), G = e => {
					let {
						user: t
					} = e;
					return async e => {
						await e(Object(O.o)(!0)), e(D({
							user: t
						}))
					}
				}, F = Object(p.a)(b.ab)
		},
		"./src/reddit/actions/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return I
			})), r.d(t, "c", (function() {
				return N
			})), r.d(t, "b", (function() {
				return R
			})), r.d(t, "a", (function() {
				return M
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/models/Gold/ProductOffer.ts"),
				i = r("./src/reddit/models/Toast/index.ts"),
				d = r("./src/reddit/endpoints/gold/productOfferPurchase/index.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/redditGQL/operations/GlobalProductOffers.json"),
				p = r("./src/redditGQL/operations/PremiumProductOfferSubscriptions.json"),
				m = r("./src/redditGQL/operations/ProductOffers.json");
			var f = r("./src/reddit/selectors/gold/productOffers.ts"),
				b = r("./src/reddit/actions/gold/constants.ts");
			const y = Object(o.a)(b.db),
				g = Object(o.a)(b.cb),
				h = Object(o.a)(b.bb),
				O = Object(o.a)(b.Z),
				j = Object(o.a)(b.Y),
				P = Object(o.a)(b.X),
				v = Object(o.a)(b.Db),
				E = Object(o.a)(b.Bb),
				_ = Object(o.a)(b.Cb),
				w = Object(o.a)(b.Gb),
				C = Object(o.a)(b.Fb),
				k = Object(o.a)(b.Eb),
				x = e => async t => {
					t(Object(a.f)({
						kind: i.b.Error,
						duration: a.a,
						text: e
					}))
				}, I = (e, t) => async r => {
					e === c.c.Premium ? r(A()) : t && r(S(e, t))
				}, S = (e, t) => async (r, o, s) => {
					let {
						gqlContext: a
					} = s;
					const c = o();
					if (!Object(f.k)(c, {
							subredditId: t,
							type: e
						})) {
						r(y());
						try {
							const n = await ((e, t, r, n) => Object(u.a)(e, {
								...m,
								variables: {
									subredditId: t,
									types: r,
									includeGlobal: n
								}
							}))(a(), t, [e], !0);
							if (n.ok) {
								const e = n.body;
								if (e.errors && e.errors.length) throw new Error(e.errors[0].message);
								const o = e.data.subredditInfoById.productOffers ? e.data.subredditInfoById.productOffers.offers : [];
								return void(await r(g({
									productOffers: o || [],
									subredditId: t
								})))
							}
						} catch (i) {
							const e = n.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							});
							r(h(e)), r(x(e))
						}
					}
				}, A = () => async (e, t, r) => {
					let {
						gqlContext: o
					} = r;
					var a, i;
					const d = c.c.Premium;
					e(O());
					try {
						const t = await ((e, t) => Object(u.a)(e, {
							...l,
							variables: {
								productTypes: t
							}
						}))(o(), [d]);
						if (t.ok) {
							const r = t.body;
							if (null === (a = r.errors) || void 0 === a ? void 0 : a.length) throw new Error(r.errors[0].message);
							return void e(j({
								productOffers: null !== (i = r.data.globalProductOffers.offers) && void 0 !== i ? i : []
							}))
						}
					} catch (p) {
						const t = p.message ? p.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						s.c.captureMessage(t), e(P(t)), e(x(t))
					}
				}, N = () => async (e, t, r) => {
					let {
						gqlContext: o
					} = r;
					var a, c, i;
					e(v());
					try {
						const t = await (e => Object(u.a)(e, p))(o());
						if (t.error) throw new Error(t.error.type);
						if (t.ok) {
							const r = t.body;
							if (null === (a = r.errors) || void 0 === a ? void 0 : a.length) throw new Error(r.errors[0].message);
							return void e(_({
								subscriptions: null !== (i = null === (c = r.data.identity) || void 0 === c ? void 0 : c.econSubscriptions) && void 0 !== i ? i : []
							}))
						}
					} catch (d) {
						s.c.captureException(d);
						const t = d.message ? d.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						e(E(t)), e(x(t))
					}
				}, R = e => async (t, r, o) => {
					let {
						gqlContext: s
					} = o;
					var a;
					t(w(e));
					try {
						const r = await Object(d.b)(s(), e);
						if (r.error) throw new Error(r.error.type);
						if (r.ok) {
							const n = r.body,
								{
									errors: o
								} = n.data.cancelEconRecurringPayment;
							if (null == o ? void 0 : o.length) throw new Error(o[0].message);
							t(k({
								orderId: e
							}))
						}
						return !0
					} catch (c) {
						const e = null !== (a = c.message) && void 0 !== a ? a : n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						});
						return t(C(e)), t(x(e)), !1
					}
				}, M = e => async t => {
					const r = await t(R(e));
					return r ? (t(Object(a.f)({
						duration: a.a,
						kind: i.b.SuccessCommunity,
						text: n.fbt._("Changes saved", null, {
							hk: "2GeuMT"
						})
					})), t(N())) : t(Object(a.f)({
						duration: a.a,
						kind: i.b.Error,
						text: n.fbt._("Something went wrong!", null, {
							hk: "1k6gx9"
						})
					})), r
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return i
			})), r.d(t, "paymentCompleted", (function() {
				return d
			})), r.d(t, "cardNameInput", (function() {
				return u
			})), r.d(t, "postalCodeInput", (function() {
				return l
			})), r.d(t, "cardNameEmpty", (function() {
				return p
			})), r.d(t, "cardNumberChange", (function() {
				return m
			})), r.d(t, "cardExpiryChange", (function() {
				return f
			})), r.d(t, "cardCvcChange", (function() {
				return b
			})), r.d(t, "stripeTokenPending", (function() {
				return y
			})), r.d(t, "stripeTokenError", (function() {
				return g
			})), r.d(t, "stripeApiError", (function() {
				return h
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return O
			})), r.d(t, "paypalApiError", (function() {
				return j
			})), r.d(t, "toggleRememberCard", (function() {
				return P
			})), r.d(t, "selectSavedCard", (function() {
				return v
			})), r.d(t, "deleteSavedCard", (function() {
				return E
			})), r.d(t, "savedCardsPending", (function() {
				return _
			})), r.d(t, "savedCardsSuccess", (function() {
				return w
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const i = Object(s.a)(c.F),
				d = Object(s.a)(c.A),
				u = Object(s.a)(c.b),
				l = Object(s.a)(c.C),
				p = Object(s.a)(c.a),
				m = Object(s.a)(c.K),
				f = Object(s.a)(c.J),
				b = Object(s.a)(c.I),
				y = Object(s.a)(c.M),
				g = Object(s.a)(c.L),
				h = Object(s.a)(c.H),
				O = (e, t) => async (r, s) => {
					const c = s(),
						i = Object(a.h)(c),
						d = Object(a.l)(c),
						u = t.getElement(n.CardNumberElement);
					if (!u) return;
					const {
						token: l,
						error: m
					} = await e.createToken(u, {
						name: i,
						address_zip: d
					});
					if (i.trim()) {
						if (!m && l) return l;
						r(g(m || void 0))
					} else {
						const e = o.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(p({
							message: e
						}))
					}
				}, j = Object(s.a)(c.B), P = Object(s.a)(c.N), v = Object(s.a)(c.G), E = Object(s.a)(c.g), _ = Object(s.a)(c.D), w = Object(s.a)(c.E)
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "setPremiumPurchaseModalInfo", (function() {
				return g
			})), r.d(t, "clearPremiumPurchaseModalInfo", (function() {
				return h
			})), r.d(t, "openPremiumPurchaseModal", (function() {
				return O
			})), r.d(t, "closePremiumPurchaseModal", (function() {
				return j
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return P
			})), r.d(t, "paymentBlobCreated", (function() {
				return v
			})), r.d(t, "openWithBlob", (function() {
				return E
			}));
			var n = r("./src/config.ts"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/sentry/index.ts"),
				c = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/formatApiError/index.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/constants/modals.ts"),
				p = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				m = r("./src/reddit/endpoints/gold/purchase.ts"),
				f = r("./src/reddit/helpers/correlationIdTracker.ts"),
				b = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const g = Object(s.a)(y.x),
				h = Object(s.a)(y.e),
				O = (e, t) => async r => {
					r(g(e)), r(Object(u.h)(l.a.ECON_PREMIUM_PURCHASE, t))
				}, j = () => async e => {
					e(Object(u.g)(l.a.ECON_PREMIUM_PURCHASE)), e(h())
				}, P = (e, t) => async (r, n, s) => {
					let {
						apiContext: a
					} = s;
					const u = Object(b.a)(n()),
						l = (null == u ? void 0 : u.pennies) || c.yb,
						p = Object(f.c)(f.a.GoldPayment);
					r(Object(d.stripeTokenPending)());
					const y = await r(Object(d.validateAndCreateStripeToken)(e, t));
					if (y) try {
						const e = await Object(m.f)({
							context: a(),
							correlationId: p,
							pennies: l,
							token: y
						});
						if (e.error) {
							const t = Object(i.a)(e.error);
							r(Object(d.stripeApiError)(t))
						} else r(Object(d.paymentCompleted)({
							confirmed: !1
						}))
					} catch (g) {
						const e = Object(i.a)(g);
						r(Object(d.stripeApiError)(e))
					} else {
						const e = o.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						r(Object(d.stripeApiError)(e))
					}
				}, v = Object(s.a)(y.z), E = (e, t) => {
					let {
						packageId: r,
						correlationId: o
					} = e;
					return async (e, s, c) => {
						let {
							apiContext: u
						} = c;
						e(O({
							packageId: r,
							correlationId: o
						}, t));
						const l = Object(b.a)(s()),
							m = (null == l ? void 0 : l.paypalButtonId) || n.a.paypal.buttons.premium;
						if (m) try {
							const t = await Object(p.f)({
								buttonId: m,
								context: u(),
								correlationId: o
							});
							if (t.error) {
								const r = Object(i.a)(t.error);
								e(Object(d.paypalApiError)(r))
							} else e(v(t))
						} catch (f) {
							const t = Object(i.a)(f);
							e(Object(d.paypalApiError)(t))
						} else a.c.captureMessage("No Premium packages available on Premium purchase modal")
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return j
			})), r.d(t, "c", (function() {
				return P
			})), r.d(t, "a", (function() {
				return E
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/env/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/actions/post.ts"),
				l = r("./src/lib/makeGqlRequest/index.ts"),
				p = r("./src/reddit/actions/economics/powerups/helpers.ts"),
				m = r("./src/redditGQL/operations/PurchaseCatalogProductOffers.json");
			var f = r("./src/reddit/selectors/gold/productOffers.ts"),
				b = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			Object(s.a)(b.m);
			const y = Object(s.a)(b.o),
				g = Object(s.a)(b.n),
				h = Object(s.a)(b.i),
				O = Object(s.a)(b.j),
				j = e => async (t, r, s) => {
					let {
						gqlContext: c
					} = s;
					const i = r(),
						d = Object(f.a)(i);
					if ((null == e ? void 0 : e.forceLoad) || !d) {
						t(y());
						try {
							const e = await (async e => {
								const t = await Object(l.a)(e, {
									...m
								});
								if (!t.ok) {
									const {
										errors: e
									} = t.body, r = Object(p.a)(e);
									throw new Error(r || "Unknown error in requestPurchaseCatalogProductOffers")
								}
								return t.body
							})(c());
							t(h(e.data.coinpacks.offers[0])), t(O(e.data.premium.offers[0]))
						} catch (u) {
							Object(o.b)() || console.error(u), a.c.captureException(u);
							const e = n.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(g(e))
						}
					}
				}, P = () => async e => e(j()), v = Object(s.a)(b.h), E = () => async (e, t, r) => {
					let {
						gqlContext: s
					} = r;
					var l, p;
					try {
						const t = await Object(c.a)(s());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (l = r.errors) || void 0 === l ? void 0 : l.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (p = r.awards) || void 0 === p ? void 0 : p.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(v({
								awards: r.awards
							})), e(Object(u.B)())
						}
					} catch (m) {
						Object(o.b)() || console.error(m), e(Object(i.f)({
							kind: d.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), a.c.captureException(m)
					}
				}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less": function(e, t, r) {
			e.exports = {
				closeButton: "zV6beQLWIuWX5Q9SvWfDR",
				highContrast: "_19iGSTvU7FOqhpDpMWKtDr",
				closeIcon: "_17EZNlAorafFssuT6Gw_Zg"
			}
		},
		"./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var n = r("./src/lib/classNames/index.ts"),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				a = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				i = r.n(c);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js"), u = e => {
				let {
					className: t,
					highContrast: r,
					onClick: o
				} = e;
				return s.a.createElement("button", {
					onClick: o,
					className: Object(n.a)(i.a.closeButton, {
						[i.a.highContrast]: r
					}, t),
					"aria-label": d._("Close", null, {
						hk: "3Qarlp"
					})
				}, s.a.createElement(a.b, {
					className: i.a.closeIcon
				}))
			}
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/checklist.m.less": function(e, t, r) {
			e.exports = {
				checklistItem: "_28J0Q9alOlPf6wQ0eAT47-",
				checklistItemRow: "_1gr7rVleJ6gB2KPuzmT-Xm",
				icon: "_1ZuetslcZ1EjZBs4aPm3j9",
				iconBackground: "_2pVyW8hm-BiFSsbeUtwRtU",
				checklistItemText: "_3lVxjVONYDJMBYgDkRtKW2"
			}
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PowerupsPremiumUpsellModal", (function() {
				return Z
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/higherOrderComponents/asModal/index.tsx"),
				c = r("./src/reddit/actions/modal.ts"),
				i = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				d = r("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"),
				u = r("./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx"),
				l = r("./src/reddit/components/PremiumPurchaseModal/Loader.tsx"),
				p = r("./src/reddit/constants/modals.ts"),
				m = r("./src/reddit/helpers/trackers/powerups.ts"),
				f = r("./src/reddit/hooks/usePreloadModal.ts"),
				b = r("./src/reddit/hooks/useTracking.ts"),
				y = r("./src/reddit/selectors/platform.ts"),
				g = r("./src/config.ts"),
				h = r("./src/lib/localizeCurrency/index.ts"),
				O = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				j = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				P = r("./src/reddit/controls/Button/index.tsx"),
				v = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				E = r("./src/reddit/hooks/useLocale.ts"),
				_ = r("./src/reddit/actions/gold/productOffers.ts"),
				w = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				C = r("./src/reddit/helpers/correlationIdTracker.ts"),
				k = r("./src/reddit/models/Gold/Premium/index.ts"),
				x = r("./src/reddit/models/Gold/ProductOffer.ts"),
				I = r("./src/reddit/selectors/gold/productOffers.ts"),
				S = r("./src/reddit/selectors/gold/purchaseCatalog.ts");
			var A = r("./src/reddit/pages/Premium/BenefitsSection/constants.ts"),
				N = r("./src/lib/classNames/index.ts"),
				R = r("./src/reddit/icons/fonts/index.tsx"),
				M = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/checklist.m.less"),
				T = r.n(M);
			const L = e => {
					let {
						className: t,
						items: r
					} = e;
					return o.a.createElement("div", {
						className: t
					}, r.map(e => o.a.createElement(U, {
						key: e,
						className: T.a.checklistItem,
						item: e
					})))
				},
				U = e => {
					let {
						className: t,
						item: r
					} = e;
					return o.a.createElement("div", {
						className: Object(N.a)(T.a.checklistItemRow, t)
					}, o.a.createElement("div", {
						className: T.a.iconBackground
					}, o.a.createElement(R.a, {
						className: T.a.icon,
						name: "checkmark_fill"
					})), o.a.createElement("span", {
						className: T.a.checklistItemText
					}, r))
				};
			var B = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/offerCard.m.less"),
				D = r.n(B);
			const G = e => {
				let {
					className: t,
					body: r,
					buttons: n,
					iconUrl: s,
					title: a
				} = e;
				return o.a.createElement("div", {
					className: Object(N.a)(t, D.a.container)
				}, o.a.createElement("div", {
					className: D.a.icon,
					style: {
						backgroundImage: `url('${s}')`
					}
				}), o.a.createElement("h3", {
					className: D.a.title
				}, a), r, o.a.createElement("div", {
					className: D.a.buttons
				}, n))
			};
			var F = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/offers.m.less"),
				q = r.n(F);
			const {
				fbt: Q
			} = r("./node_modules/fbt/lib/FbtPublic.js"), W = ["premium-powerups"], J = ["premium-powerups", "premium-ad-free", "premium-avatars", "premium-monthly-coins"], V = e => {
				let {
					subredditId: t
				} = e;
				const r = Object(s.d)(),
					a = Object(E.b)(),
					i = Object(b.a)(),
					d = function() {
						var e, t;
						const r = Object(s.d)(),
							o = Object(s.e)(S.l),
							a = Object(s.e)(I.g),
							c = Object(s.e)(S.o);
						Object(n.useEffect)(() => {
							o.length || c || r(Object(w.b)()), a || r(Object(_.d)(x.c.Premium))
						});
						const i = o.find(e => e.frequency === k.c.Monthly),
							d = o.find(e => e.frequency === k.c.Yearly);
						if (!i || !d) return null;
						const u = null === (e = Object(I.l)(a, x.b.Month)) || void 0 === e ? void 0 : e[0],
							l = null === (t = Object(I.l)(a, x.b.Year)) || void 0 === t ? void 0 : t[0];
						return u && l ? {
							correlationId: Object(C.d)(C.a.GoldPayment, !1),
							premiumMonthly: {
								price: u.price,
								packageId: i.mobileId
							},
							premiumAnnual: {
								price: l.price,
								packageId: d.mobileId,
								bonusPct: d.bonusPct
							}
						} : null
					}(),
					u = Object(s.e)(e => Object(I.c)(e, {
						subredditId: t
					})),
					l = Object(s.e)(S.j),
					f = W.map(e => A.d[e]());
				return o.a.createElement("div", {
					className: q.a.container
				}, d && u ? o.a.createElement(o.a.Fragment, null, o.a.createElement(G, {
					title: Q._("Powerups Subscription", null, {
						hk: "4zbTSR"
					}),
					iconUrl: `${g.a.assetPath}/img/gold/premium-marketing/benefits-icons/premium-powerups.png`,
					body: o.a.createElement(L, {
						items: f
					}),
					buttons: u && o.a.createElement(P.t, {
						className: q.a.powerupsButton,
						priority: P.c.Secondary,
						onClick: () => {
							i(Object(m.m)()), r(Object(c.h)(p.a.ECON_POWERUPS_PURCHASE, {
								subredditId: t
							}))
						},
						isFullWidth: !0
					}, Q._("{powerupPrice}/mo", [Q._param("powerupPrice", Object(h.b)(u, {
						locale: a
					}))], {
						hk: "1ApJir"
					}))
				}), o.a.createElement(G, {
					title: Q._("Reddit Premium", null, {
						hk: "S3DXw"
					}),
					iconUrl: `${g.a.assetPath}/img/gold/premium-marketing/benefits-icons/premium-crest.png`,
					body: o.a.createElement(H, {
						premiumMonthlyCoins: l
					}),
					buttons: d && o.a.createElement(Y, {
						premiumMonthly: d.premiumMonthly,
						premiumAnnual: d.premiumAnnual,
						onClickPrice: (e, n) => {
							i(Object(m.n)(n)), r(Object(j.openWithBlob)({
								correlationId: d.correlationId,
								packageId: e
							}, {
								isPowerupsPremiumPurchase: !0,
								subredditId: t
							})), r(Object(O.j)({
								renewInterval: n
							}))
						},
						locale: a
					})
				})) : o.a.createElement(v.a, {
					className: q.a.loadingIcon,
					sizePx: 40
				}))
			}, H = e => {
				let {
					premiumMonthlyCoins: t
				} = e;
				const r = J.map(e => A.d[e]({
					periodicalCoins: t
				}));
				return o.a.createElement("div", null, o.a.createElement(L, {
					items: r
				}), o.a.createElement("div", {
					className: q.a.andSoMuchMore
				}, Q._("And so much more!", null, {
					hk: "oMd"
				})))
			}, Y = e => {
				let {
					premiumMonthly: t,
					premiumAnnual: r,
					locale: n,
					onClickPrice: s
				} = e;
				return o.a.createElement("div", {
					className: q.a.premiumButtons
				}, o.a.createElement(P.t, {
					className: q.a.powerupsButton,
					priority: P.c.Secondary,
					onClick: () => s(t.packageId, x.b.Month),
					isFullWidth: !0
				}, Q._("{premiumMonthlyPrice}/mo", [Q._param("premiumMonthlyPrice", Object(h.b)(t.price, {
					locale: n
				}))], {
					hk: "4i6SO9"
				})), o.a.createElement(P.k, {
					className: q.a.powerupsButton,
					onClick: () => s(r.packageId, x.b.Year),
					isFullWidth: !0
				}, Q._("{premiumAnnualPrice}/yr", [Q._param("premiumAnnualPrice", Object(h.b)(r.price, {
					locale: n
				}))], {
					hk: "2YAbPf"
				})))
			};
			var $ = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.m.less"),
				z = r.n($);
			const {
				fbt: X
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Z = () => {
				const e = Object(s.e)(y.s),
					t = Object(s.d)(),
					r = Object(b.a)();
				Object(n.useEffect)(() => {
					e && r(Object(m.o)())
				}, [r, e]), Object(f.a)(l.a), Object(f.a)(d.a);
				const a = () => t(Object(c.g)(p.a.ECON_POWERUPS_PREMIUM_UPSELL));
				return e ? o.a.createElement(o.a.Fragment, null, o.a.createElement(i.a, {
					onClick: a,
					highContrast: !0
				}), o.a.createElement("div", {
					className: z.a.container
				}, o.a.createElement("h1", {
					className: z.a.title
				}, X._("Get more with Premium!", null, {
					hk: "YXIbY"
				})), o.a.createElement(V, {
					subredditId: e
				}), o.a.createElement("div", {
					className: z.a.footer
				}, X._("Subscriptions automatically renew.", null, {
					hk: "133vve"
				})), o.a.createElement(u.a, {
					space: u.b.MODAL
				}))) : (a(), null)
			};
			t.default = Object(a.a)(Z)
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/offerCard.m.less": function(e, t, r) {
			e.exports = {
				container: "wVUik45NC_6GZ2-YNl-4m",
				icon: "_23WcjD2f0yk7_mAauuHGyM",
				title: "_1rnwdL1d5VJf51jtrrFhtA",
				buttons: "_3Xxv2jtWdhLowDMNMy-dix"
			}
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/offers.m.less": function(e, t, r) {
			e.exports = {
				container: "tTwzUUjm2AZxFT6PW6zIn",
				loadingIcon: "RZ6sIZ-yYTsoZqX0sqJjV",
				powerupsButton: "_1sFaWX-iP2XZkZhfp1SwCj",
				active: "_1BUw0D9ZFurv1iOhxJvzun",
				andSoMuchMore: "_2GpOB8zl8aUSpbjYHqSiIa",
				premiumButtons: "nWzTbqIOtd6NF2PUlD9w-"
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less": function(e, t, r) {
			e.exports = {
				background: "XVwx9Y9K0HdxTdtF2BPW0",
				isModal: "UtfYccpr1yXmbqvp5V4xO",
				colorBlockCorner: "_3cb-_dMe8EWVymoglw4OyK",
				isNightmodeOn: "_2aTpeK-XP6gqT5wf5i532u",
				colorBlockThrough: "_1oWuVmyyrm-f2cYxR7EV9F",
				circle: "NsyhNpI3rn1O5dhzAooci",
				circleStriped: "_3wLmFEQT-lNFxQtTZSBM-A",
				circleDotted: "_2Y6YoeMfdGRReebFzEkb1a",
				circleOrangeHollow: "_2MNXM_uf6rOUZgaO42Wnl0",
				circleGreenHollow: "_1ThCjjX1kI9WTSqGhdfbEY",
				circleYellowHollow: "_2tVCe8UCeeIcsfKn_uIZKT"
			}
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return p
			}));
			var n, o = r("./src/config.ts"),
				s = r("./src/lib/classNames/index.ts"),
				a = r("./node_modules/react/index.js"),
				c = r.n(a),
				i = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/reddit/selectors/user.ts"),
				u = r("./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less"),
				l = r.n(u);
			! function(e) {
				e[e.SIDEBAR = 0] = "SIDEBAR", e[e.MODAL = 1] = "MODAL"
			}(n || (n = {}));
			const p = e => {
				let {
					space: t
				} = e;
				const r = Object(i.e)(d.db),
					a = t === n.MODAL;
				return c.a.createElement("div", {
					className: Object(s.a)(l.a.background, {
						[l.a.isNightmodeOn]: r,
						[l.a.isModal]: a
					})
				}, c.a.createElement("div", {
					className: l.a.colorBlockCorner
				}), c.a.createElement("div", {
					className: l.a.colorBlockThrough
				}), c.a.createElement("div", {
					className: l.a.circleStriped,
					style: {
						backgroundImage: r ? `url(${o.a.assetPath}/img/powerups/linecircle-lightblue.png)` : `url(${o.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), c.a.createElement("div", {
					className: l.a.circleOrangeHollow
				}), c.a.createElement("div", {
					className: l.a.circleDotted,
					style: {
						backgroundImage: `url(${o.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), c.a.createElement("div", {
					className: l.a.circleGreenHollow
				}), c.a.createElement("div", {
					className: l.a.circleYellowHollow
				}))
			}
		},
		"./src/reddit/components/PremiumPurchaseModal/Loader.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/higherOrderComponents/makeAsync.tsx"),
				a = r("./src/lib/loadWithRetries/index.ts"),
				c = r("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = r("./src/reddit/constants/modals.ts"),
				d = r("./src/reddit/helpers/loadThirdPartyScript.ts");
			const u = () => Object(a.a)(() => Promise.all([r.e("PremiumPurchaseModal").then(r.bind(null, "./src/reddit/components/PremiumPurchaseModal/index.tsx")), Object(d.d)().catch(() => {})])).then(e => e[0].default),
				l = Object(s.a)({
					getComponent: u,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			Object(c.b)(i.a.ECON_PREMIUM_PURCHASE, () => o.a.createElement(l, null))
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = r.n(a);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: n = 10
				} = e;
				return o.a.createElement("div", {
					className: Object(s.a)(c.a.loadingIcon, r, {
						[c.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${n}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return d
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "e", (function() {
				return f
			}));
			var n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				s = r("./src/lib/omitHeaders/index.ts"),
				a = r("./src/reddit/constants/headers.ts"),
				c = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				i = r("./src/reddit/endpoints/gold/purchase.ts");
			const d = async e => {
				let {
					buttonId: t,
					context: r,
					correlationId: d
				} = e;
				const u = {
						button_id: t,
						correlation_id: d
					},
					l = `${r.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					p = Object(c.a)(l);
				return Object(o.a)(Object(s.a)(r, [a.a]), {
					method: n.jb.POST,
					endpoint: p,
					data: u
				}).then(i.a)
			}, u = async e => {
				let {
					context: t,
					coins: r,
					pennies: c,
					correlationId: d
				} = e;
				const u = {
					coins: r,
					pennies: c,
					correlation_id: d
				};
				return Object(o.a)(Object(s.a)(t, [a.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: u
				}).then(i.a)
			}, l = async e => {
				let {
					context: t,
					awardId: r,
					pennies: c,
					thingId: d,
					correlationId: u
				} = e;
				const l = {
					award_id: r,
					correlation_id: u,
					pennies: c,
					thing_id: d
				};
				return Object(o.a)(Object(s.a)(t, [a.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(i.a)
			}, p = async e => {
				let {
					context: t,
					offerContext: r,
					orderId: c,
					coins: d,
					pennies: u,
					correlationId: l
				} = e;
				const p = {
					offer_context: r,
					order_id: c,
					coins: d,
					pennies: u,
					correlation_id: l
				};
				return Object(o.a)(Object(s.a)(t, [a.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: p
				}).then(i.a)
			}, m = async e => {
				let {
					awardId: t,
					context: r,
					coins: c,
					correlationId: d,
					isAnonymous: u,
					message: l,
					offerContext: p,
					orderId: m,
					pennies: f,
					thingId: b
				} = e;
				const y = {
					award_id: t,
					coins: c,
					correlation_id: d,
					is_anonymous: u,
					message: l,
					offer_context: p,
					order_id: m,
					pennies: f,
					thing_id: b
				};
				return Object(o.a)(Object(s.a)(r, [a.a]), {
					method: n.jb.POST,
					endpoint: `${r.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: y
				}).then(i.a)
			}, f = async e => {
				let {
					awardId: t,
					context: r,
					correlationId: c,
					isAnonymous: d,
					message: u,
					orderId: l,
					thingId: p
				} = e;
				const m = {
					award_id: t,
					correlation_id: c,
					is_anonymous: d,
					message: u,
					order_id: l,
					thing_id: p
				};
				return Object(o.a)(Object(s.a)(r, [a.a]), {
					method: n.jb.POST,
					endpoint: `${r.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: m
				}).then(i.a)
			}
		},
		"./src/reddit/endpoints/gold/productCatalog/old.index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			}));
			r("./src/lib/constants/index.ts"), r("./src/lib/makeApiRequest/index.ts");
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				o = (r("./src/lib/omitHeaders/index.ts"), r("./src/redditGQL/operations/ClaimAwardOffer.json")),
				s = r("./src/redditGQL/operations/FetchSpecialEvents.json");
			r("./src/reddit/constants/headers.ts"), r("./src/reddit/helpers/addRedesignIdentifier/index.ts"), r("./src/reddit/endpoints/gold/purchase.ts");
			const a = e => Object(n.a)(e, {
					...s
				}),
				c = e => Object(n.a)(e, {
					...o,
					variables: {
						input: {
							offerId: "free_awards"
						}
					}
				})
		},
		"./src/reddit/endpoints/gold/productOfferPurchase/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return g
			})), r.d(t, "a", (function() {
				return h
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "j", (function() {
				return P
			})), r.d(t, "g", (function() {
				return v
			})), r.d(t, "c", (function() {
				return E
			})), r.d(t, "e", (function() {
				return _
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "b", (function() {
				return C
			})), r.d(t, "l", (function() {
				return k
			})), r.d(t, "k", (function() {
				return x
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				o = r.n(n),
				s = r("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				a = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				c = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				i = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = r("./src/redditGQL/operations/CreateEconOrder.json"),
				u = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				l = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				p = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				m = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				f = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				b = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				y = r("./src/lib/makeGqlRequest/index.ts");
			const g = (e, t, r, n, s, a) => {
				const c = new o.a(n.price).multipliedBy(s).toFixed();
				return Object(y.a)(e, {
					...d,
					variables: {
						input: {
							nonce: t,
							productId: r.id,
							productVersion: r.version,
							pricePackageId: n.id,
							currency: n.currency,
							price: c,
							productsCount: s.toString(),
							...a
						}
					}
				})
			};
			var h;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(h || (h = {}));
			const O = (e, t, r, n) => Object(y.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				j = (e, t, r, n) => Object(y.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				P = (e, t, r, n) => Object(y.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: r,
						cardId: n
					}
				}),
				v = (e, t, r, n, o) => Object(y.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: r,
						successUrl: n,
						cancelUrl: o
					}
				}),
				E = (e, t, r, n) => Object(y.a)(e, {
					...a,
					variables: {
						nonce: t,
						paymentId: r,
						token: n
					}
				}),
				_ = (e, t, r, n) => Object(y.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: r,
						cardId: n
					}
				}),
				w = (e, t, r, n, o) => Object(y.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
						saveCard: o
					}
				}),
				C = (e, t) => Object(y.a)(e, {
					...s,
					variables: {
						orderId: t
					}
				}),
				k = e => Object(y.a)(e, {
					...b,
					variables: {}
				}),
				x = (e, t) => Object(y.a)(e, {
					...f,
					variables: {
						cardId: t
					}
				})
		},
		"./src/reddit/endpoints/gold/purchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "g", (function() {
				return h
			}));
			var n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				s = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/redditGQL/operations/ChangeStripePaymentMethod.json"),
				i = r("./src/reddit/constants/headers.ts"),
				d = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = r("./src/reddit/helpers/genericServerError/index.ts"),
				l = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const p = e => e.ok ? e.body.json && e.body.json.errors.length ? {
					...e,
					ok: !1,
					error: Object(l.a)(e)
				} : {
					...e
				} : {
					...e,
					error: e.error || Object(u.a)()
				},
				m = async e => {
					let {
						coins: t,
						context: r,
						correlationId: s,
						offerContext: c,
						pennies: u,
						rememberCard: l,
						token: m,
						savedCardId: f
					} = e;
					const b = {
							token: m ? m.id : void 0,
							coins: t,
							offer_context: c,
							pennies: u,
							remember_card: l,
							card_id: f,
							correlation_id: s
						},
						y = `${r.apiUrl}/api/v2/gold/stripe/buy_coins`,
						g = Object(d.a)(y);
					return Object(o.a)(Object(a.a)(r, [i.a]), {
						method: n.jb.POST,
						endpoint: g,
						data: b
					}).then(p)
				}, f = async e => {
					let {
						coins: t,
						context: r,
						correlationId: s,
						gildParams: c,
						isOldReddit: u,
						offerContext: l,
						pennies: m,
						rememberCard: f,
						thingId: b,
						token: y,
						savedCardId: g
					} = e;
					const {
						gildType: h,
						isAnonymous: O,
						message: j
					} = c, P = {
						token: y ? y.id : void 0,
						coins: t,
						offer_context: l,
						pennies: m,
						thing_id: b,
						gild_type: h,
						message: j ? j.trim() : "",
						is_anonymous: O,
						remember_card: f,
						card_id: g,
						correlation_id: s
					}, v = `${r.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, E = u ? v : Object(d.a)(v);
					return Object(o.a)(Object(a.a)(r, [i.a]), {
						method: n.jb.POST,
						endpoint: E,
						data: P
					}).then(p)
				}, b = async e => {
					let {
						context: t,
						correlationId: r,
						gildParams: s,
						isOldReddit: c,
						pennies: u,
						rememberCard: l,
						thingId: m,
						token: f,
						savedCardId: b
					} = e;
					const {
						gildType: y,
						isAnonymous: g,
						message: h
					} = s, O = {
						token: f ? f.id : void 0,
						thing_id: m,
						award_id: y,
						message: h ? h.trim() : "",
						is_anonymous: g,
						pennies: u,
						remember_card: l,
						card_id: b,
						correlation_id: r
					}, j = `${t.apiUrl}/api/v2/gold/stripe/buy_award`, P = c ? j : Object(d.a)(j);
					return Object(o.a)(Object(a.a)(t, [i.a]), {
						method: n.jb.POST,
						endpoint: P,
						data: O
					}).then(p)
				}, y = async e => {
					let {
						context: t,
						correlationId: r,
						pennies: s,
						token: c
					} = e;
					const u = {
							token: c.id,
							pennies: s,
							correlation_id: r
						},
						l = `${t.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						m = Object(d.a)(l);
					return Object(o.a)(Object(a.a)(t, [i.a]), {
						method: n.jb.POST,
						endpoint: m,
						data: u
					}).then(p)
				}, g = "paymentInfoUpdated", h = async e => {
					const {
						origin: t
					} = window.location, r = `${t}/settings/premium`, n = new URLSearchParams({
						[g]: "true"
					}), o = await Object(s.a)(e, {
						...c,
						variables: {
							successUrl: `${r}?${n}`,
							cancelUrl: `${r}`
						}
					});
					if (!o.ok) throw new Error("Unable to update payment information");
					return o.body.data.changeStripePaymentMethod.sessionId
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/constants/index.ts");
			t.a = () => ({
				type: o.I.SERVER_ERROR,
				fields: [{
					field: "",
					msg: n.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				o = r("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const r = new n.BigNumber(e),
					o = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(o).toString()
			}

			function a(e, t) {
				return Object(o.b)(parseInt(s(e, t), 10))
			}

			function c(e, t) {
				const r = new n.BigNumber(e),
					o = new n.BigNumber(t || 1);
				return r.multipliedBy(o).toFixed(0)
			}

			function i(e) {
				const t = new n.BigNumber(e),
					r = new n.BigNumber("1e18");
				return t.dividedBy(r).toString()
			}
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			}));
			var n = r("./src/lib/constants/index.ts");
			const o = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case n.I.NO_STRIPE_SUBSCRIPTION:
							case n.I.USER_DOESNT_EXIST:
							case n.I.USER_REQUIRED_ERROR:
							case n.I.VALIDATION_ERROR:
								return e;
							case n.I.NO_USER:
							case n.I.NO_TEXT:
							case n.I.NO_URL:
								return n.I.VALIDATION_ERROR;
							case n.I.CREDIT_CARD_FAILURE:
							case n.I.CREDIT_CARD_FAILURE_GENERIC:
								return n.I.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return n.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return n.I.VALIDATION_ERROR
				},
				s = e => {
					const t = e.body;
					return {
						type: o(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				a = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: s(e)
					} : e
				};
			t.a = s
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			}));
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				o = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/selectors/meta.ts");
			const c = "undefined" == typeof document ? function() {
				const e = Object(s.e)(a.i) || o.DEFAULT_LOCALE;
				return Object(n.isPseudoLocale)(e) ? o.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || o.DEFAULT_LOCALE;
				return Object(n.isPseudoLocale)(e) ? o.DEFAULT_LOCALE : e
			};
			t.a = c;
			const i = () => {
				const e = c(),
					t = Object(s.e)(a.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
		},
		"./src/reddit/hooks/usePreloadModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/react/index.js");

			function o(e) {
				Object(n.useEffect)(() => {
					e()
				}, [e])
			}
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, o, s, a;
			r.d(t, "b", (function() {
					return o
				})), r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(o || (o = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(s || (s = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(a || (a = {}))
		},
		"./src/reddit/pages/Premium/BenefitsSection/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return o
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "c", (function() {
				return i
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const o = [{
					key: "premium-ad-free",
					telemetryTag: "ad_free"
				}, {
					key: "premium-avatars",
					isNew: !0,
					telemetryTag: "avatar"
				}, {
					key: "premium-monthly-coins",
					telemetryTag: "monthly_coins"
				}, {
					key: "premium-lounge",
					telemetryTag: "premium_subreddits"
				}, {
					key: "premium-app-icons",
					isNew: !0,
					asterisk: !0,
					telemetryTag: "app_icons"
				}, {
					key: "premium-powerups",
					isNew: !0,
					asterisk: !0,
					telemetryTag: "powerups"
				}, {
					key: "premium-awards",
					telemetryTag: "premium_awards"
				}],
				s = {
					key: "premium-more",
					telemetryTag: "more_benefits"
				},
				a = {
					key: "premium-bonus",
					asterisk: !0,
					telemetryTag: "coin_bonus"
				},
				c = {
					"premium-avatars": () => n.fbt._("Exclusive Avatar Gear", null, {
						hk: "1f1QJb"
					}),
					"premium-powerups": () => n.fbt._("Powerups", null, {
						hk: "1yQyau"
					}),
					"premium-app-icons": () => n.fbt._("Custom App Icons", null, {
						hk: "2uGpiC"
					}),
					"premium-ad-free": () => n.fbt._("Ad-free Browsing", null, {
						hk: "2rgG59"
					}),
					"premium-monthly-coins": e => {
						let {
							periodicalCoins: t
						} = e;
						return n.fbt._("{amount}Monthly Coins", [n.fbt._param("amount", t ? t + " " : "")], {
							hk: "3rUDgA"
						})
					},
					"premium-lounge": () => n.fbt._("Members Lounge", null, {
						hk: "3iqx0z"
					}),
					"premium-awards": () => n.fbt._("Premium Awards", null, {
						hk: "3cn0Pf"
					}),
					"premium-more": () => n.fbt._("More to come...", null, {
						hk: "oz7E8"
					}),
					"premium-bonus": e => {
						let {
							bonusCoins: t
						} = e;
						return n.fbt._("{amount} Coin Bonus!", [n.fbt._param("amount", t)], {
							hk: "2W5D7B"
						})
					}
				},
				i = {
					"premium-avatars": () => n.fbt._("Outfit your avatar with the best gear and accessories", null, {
						hk: "2HjLMS"
					}),
					"premium-powerups": () => n.fbt._("Help select communities unlock perks", null, {
						hk: "3vbuX2"
					}),
					"premium-app-icons": () => n.fbt._("Change your app icon to something more your style", null, {
						hk: "1WobLA"
					}),
					"premium-ad-free": () => n.fbt._("Enjoy redditing without interruptions from ads", null, {
						hk: "2aDI9B"
					}),
					"premium-monthly-coins": e => {
						let {
							periodicalCoins: t
						} = e;
						return n.fbt._("Get {amount} coins a month and make it rain awards", [n.fbt._param("amount", t)], {
							hk: "228nfD"
						})
					},
					"premium-lounge": () => n.fbt._("Discover all the illuminati secrets in r/lounge", null, {
						hk: "nlK6D"
					}),
					"premium-awards": () => n.fbt._("Give exclusive awards that get more attention", null, {
						hk: "2Dzf3P"
					}),
					"premium-more": () => void 0,
					"premium-bonus": () => n.fbt._("Claim this one-time-only welcome gift", null, {
						hk: "1x9RYJ"
					})
				}
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "j", (function() {
				return i
			})), r.d(t, "k", (function() {
				return d
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "l", (function() {
				return b
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "h", (function() {
				return j
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/makeProductOfferKey/index.ts"),
				s = r("./src/reddit/models/Gold/ProductOffer.ts"),
				a = r("./src/reddit/models/Payments/index.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				d = (e, t) => {
					let {
						subredditId: r,
						type: n
					} = t;
					var s, a, c;
					return r ? e.subreddits.productOffers[Object(o.a)(n, r)] : null === (c = null === (a = null === (s = e.features) || void 0 === s ? void 0 : s.goldPurchase) || void 0 === a ? void 0 : a.productOffers) || void 0 === c ? void 0 : c[Object(o.a)(n)]
				},
				u = e => {
					const t = d(e, {
						type: s.c.Coinpack
					});
					return null == t ? void 0 : t[0]
				},
				l = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = d(e, {
						subredditId: r,
						type: s.c.Powerups
					});
					return null == n ? void 0 : n[0]
				},
				p = Object(n.a)(l, e => null == e ? void 0 : e.pricePackages[0]),
				m = Object(n.a)(p, e => null == e ? void 0 : e.price),
				f = e => {
					const t = d(e, {
						type: s.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				b = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === a.b.PayPal || e[0] === a.b.Stripe)(e.requiredPaymentProviders)) : null,
				y = Object(n.a)(f, c.p, (e, t) => b(e, t) || null),
				g = Object(n.a)(y, (e, t) => {
					let {
						provider: r
					} = t;
					return r
				}, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				h = Object(n.a)(y, e => (null == e ? void 0 : e[0].price) || null),
				O = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				j = Object(n.a)(O, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "q", (function() {
				return a
			})), r.d(t, "s", (function() {
				return c
			})), r.d(t, "r", (function() {
				return i
			})), r.d(t, "u", (function() {
				return d
			})), r.d(t, "t", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "p", (function() {
				return p
			})), r.d(t, "a", (function() {
				return m
			})), r.d(t, "n", (function() {
				return f
			})), r.d(t, "o", (function() {
				return b
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "l", (function() {
				return h
			})), r.d(t, "w", (function() {
				return O
			})), r.d(t, "x", (function() {
				return j
			})), r.d(t, "v", (function() {
				return P
			})), r.d(t, "y", (function() {
				return v
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "g", (function() {
				return _
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "k", (function() {
				return C
			})), r.d(t, "j", (function() {
				return k
			})), r.d(t, "m", (function() {
				return x
			})), r.d(t, "e", (function() {
				return I
			})), r.d(t, "d", (function() {
				return S
			}));
			var n = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(o.a)({
				features: {
					goldPurchase: s.a
				}
			});
			const a = e => e.features.goldPurchase.purchaseModal.activePage,
				c = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				i = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				u = e => e.features.goldPurchase.purchaseModal.packageId,
				l = e => e.features.goldPurchase.packageOfferModal.packageId,
				p = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				m = e => {
					const t = Object(n.l)(e),
						r = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && r && t.find(e => e.mobileId === r) || null
				},
				f = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				b = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				y = e => e.features.goldPurchase.payment.paymentMethod,
				g = e => e.features.goldPurchase.payment.cardName,
				h = e => e.features.goldPurchase.payment.postalCode,
				O = e => e.features.goldPurchase.payment.savedCardsPending,
				j = e => e.features.goldPurchase.payment.savedCards,
				P = e => e.features.goldPurchase.payment.rememberCard,
				v = e => e.features.goldPurchase.payment.useSavedCard,
				E = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				_ = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				w = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				C = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				k = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				x = e => e.features.goldPurchase.payment.stripeToken.pending,
				I = e => e.features.goldPurchase.payment.paypal.passthrough,
				S = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/redditGQL/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
		},
		"./src/redditGQL/operations/ChangeStripePaymentMethod.json": function(e) {
			e.exports = JSON.parse('{"id":"ce700fb9b230"}')
		},
		"./src/redditGQL/operations/ClaimAwardOffer.json": function(e) {
			e.exports = JSON.parse('{"id":"7264b2ee2ded"}')
		},
		"./src/redditGQL/operations/ConfirmPaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"4a9f7376235b"}')
		},
		"./src/redditGQL/operations/ConfirmStripePaymentNewCard.json": function(e) {
			e.exports = JSON.parse('{"id":"e4d2b27d6d30"}')
		},
		"./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"0095edf93db4"}')
		},
		"./src/redditGQL/operations/CreateEconOrder.json": function(e) {
			e.exports = JSON.parse('{"id":"1bf318d40021"}')
		},
		"./src/redditGQL/operations/CreatePaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"91f215ec5196"}')
		},
		"./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"179702814d8f"}')
		},
		"./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json": function(e) {
			e.exports = JSON.parse('{"id":"6d178a1662ba"}')
		},
		"./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"9fc54f6de447"}')
		},
		"./src/redditGQL/operations/DeleteSavedStripeCard.json": function(e) {
			e.exports = JSON.parse('{"id":"87230cb9dec2"}')
		},
		"./src/redditGQL/operations/FetchSpecialEvents.json": function(e) {
			e.exports = JSON.parse('{"id":"6c73f2f0b64f"}')
		},
		"./src/redditGQL/operations/GlobalProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"5b1dd85fe475"}')
		},
		"./src/redditGQL/operations/PremiumProductOfferSubscriptions.json": function(e) {
			e.exports = JSON.parse('{"id":"d0a53057e3e8"}')
		},
		"./src/redditGQL/operations/ProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"ddb1f9f5717c"}')
		},
		"./src/redditGQL/operations/PurchaseCatalogProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"098518521d5b"}')
		},
		"./src/redditGQL/operations/UserSavedStripeCards.json": function(e) {
			e.exports = JSON.parse('{"id":"d29c51cfbfe6"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PowerupsPremiumUpsellModal.113eb6762dc7cf08a229.js.map