// https://www.redditstatic.com/desktop2x/PowerupsPremiumUpsellModal.c9b0ee990269bddc7ddb.js
// Retrieved at 6/30/2022, 10:00:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PowerupsPremiumUpsellModal"], {
		"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js": function(e, t, r) {
			! function(e, t) {
				"use strict";
				t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
				var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

				function n() {}

				function o() {}
				o.resetWarningCache = n;
				var c = function(e, t) {
					return e(t = {
						exports: {}
					}, t.exports), t.exports
				}((function(e) {
					e.exports = function() {
						function e(e, t, n, o, c, a) {
							if (a !== r) {
								var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
								throw s.name = "Invariant Violation", s
							}
						}

						function t() {
							return e
						}
						e.isRequired = e;
						var c = {
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
						return c.PropTypes = c, c
					}()
				}));

				function a(e) {
					return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					})(e)
				}

				function s(e, t, r) {
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
							s(e, t, r[t])
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
								c = void 0;
							try {
								for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
							} catch (i) {
								o = !0, c = i
							} finally {
								try {
									n || null == s.return || s.return()
								} finally {
									if (o) throw c
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
							var c = !m(t) || ! function e(t, r) {
								if (!m(t) || !m(r)) return t === r;
								var n = Array.isArray(t);
								if (n !== Array.isArray(r)) return !1;
								var o = "[object Object]" === Object.prototype.toString.call(t);
								if (o !== ("[object Object]" === Object.prototype.toString.call(r))) return !1;
								if (!o && !n) return !1;
								var c = Object.keys(t),
									a = Object.keys(r);
								if (c.length !== a.length) return !1;
								for (var s = {}, i = 0; i < c.length; i += 1) s[c[i]] = !0;
								for (var d = 0; d < a.length; d += 1) s[a[d]] = !0;
								var u = Object.keys(s);
								if (u.length !== c.length) return !1;
								var l = t,
									p = r;
								return u.every((function(t) {
									return e(l[t], p[t])
								}))
							}(e[o], t[o]);
							return r.includes(o) ? (c && console.warn("Unsupported prop change: options.".concat(o, " is not a mutable property.")), n) : c ? d(d({}, n || {}), {}, s({}, o, e[o])) : n
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
				var O = function(e) {
					var r = e.stripe,
						n = e.options,
						o = e.children,
						c = t.useRef(!1),
						a = t.useRef(!0),
						s = t.useMemo((function() {
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
					null !== m && m !== r && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), c.current || ("sync" === s.tag && (c.current = !0, l({
						stripe: s.stripe,
						elements: s.stripe.elements(n)
					})), "async" === s.tag && (c.current = !0, s.stripePromise.then((function(e) {
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
				O.propTypes = {
					stripe: c.any,
					options: c.object
				};
				var h = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(g), e)
					},
					j = function(e) {
						return (0, e.children)(h("mounts <ElementsConsumer>"))
					};
				j.propTypes = {
					children: c.func.isRequired
				};
				var v = function(e) {
						var r = t.useRef(e);
						return t.useEffect((function() {
								r.current = e
							}), [e]),
							function() {
								r.current && r.current.apply(r, arguments)
							}
					},
					P = function() {},
					E = function(e, r) {
						var n, o = "".concat((n = e).charAt(0).toUpperCase() + n.slice(1), "Element"),
							a = r ? function(e) {
								h("mounts <".concat(o, ">"));
								var r = e.id,
									n = e.className;
								return t.createElement("div", {
									id: r,
									className: n
								})
							} : function(r) {
								var n = r.id,
									c = r.className,
									a = r.options,
									s = void 0 === a ? {} : a,
									i = r.onBlur,
									d = void 0 === i ? P : i,
									u = r.onFocus,
									l = void 0 === u ? P : u,
									m = r.onReady,
									b = void 0 === m ? P : m,
									y = r.onChange,
									g = void 0 === y ? P : y,
									O = r.onEscape,
									j = void 0 === O ? P : O,
									E = r.onClick,
									w = void 0 === E ? P : E,
									k = h("mounts <".concat(o, ">")).elements,
									C = t.useRef(null),
									_ = t.useRef(null),
									x = v(b),
									S = v(d),
									I = v(l),
									N = v(w),
									A = v(g),
									M = v(j);
								t.useLayoutEffect((function() {
									if (null == C.current && k && null != _.current) {
										var t = k.create(e, s);
										C.current = t, t.mount(_.current), t.on("ready", (function() {
											return x(t)
										})), t.on("change", A), t.on("blur", S), t.on("focus", I), t.on("escape", M), t.on("click", N)
									}
								}));
								var T = p(s);
								return t.useEffect((function() {
									if (C.current) {
										var e = f(s, T, ["paymentRequest"]);
										e && C.current.update(e)
									}
								}), [s, T]), t.useLayoutEffect((function() {
									return function() {
										C.current && C.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: c,
									ref: _
								})
							};
						return a.propTypes = {
							id: c.string,
							className: c.string,
							onChange: c.func,
							onBlur: c.func,
							onFocus: c.func,
							onReady: c.func,
							onClick: c.func,
							options: c.object
						}, a.displayName = o, a.__elementType = e, a
					},
					w = "undefined" == typeof window,
					k = E("auBankAccount", w),
					C = E("card", w),
					_ = E("cardNumber", w),
					x = E("cardExpiry", w),
					S = E("cardCvc", w),
					I = E("fpxBank", w),
					N = E("iban", w),
					A = E("idealBank", w),
					M = E("p24Bank", w),
					T = E("epsBank", w),
					B = E("payment", w),
					L = E("paymentRequestButton", w),
					U = E("linkAuthentication", w),
					R = E("shippingAddress", w),
					D = E("afterpayClearpayMessage", w);
				e.AfterpayClearpayMessageElement = D, e.AuBankAccountElement = k, e.CardCvcElement = S, e.CardElement = C, e.CardExpiryElement = x, e.CardNumberElement = _, e.Elements = O, e.ElementsConsumer = j, e.EpsBankElement = T, e.FpxBankElement = I, e.IbanElement = N, e.IdealBankElement = A, e.LinkAuthenticationElement = U, e.P24BankElement = M, e.PaymentElement = B, e.PaymentRequestButtonElement = L, e.ShippingAddressElement = R, e.useElements = function() {
					return h("calls useElements()").elements
				}, e.useStripe = function() {
					return h("calls useStripe()").stripe
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
				return c
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "a", (function() {
				return s
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
			const c = "USD",
				a = "ETH",
				s = "COINS",
				i = [a, "BTC"],
				d = [s, "SUBREDDIT_POINTS", "GAME_TOKENS"],
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
				c = r("./src/lib/currency/currencies.ts"),
				a = r("./src/lib/prettyPrintNumber/index.ts"),
				s = r("./src/reddit/helpers/governance/tokens.ts"),
				i = r("./src/reddit/constants/intlSupport.ts");
			const d = function(e) {
					let {
						locale: t = n.DEFAULT_LOCALE,
						pretty: r,
						formatOptions: o
					} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const c = Number(e);
					return Object(i.c)() ? r ? Object(a.b)(c) : new Intl.NumberFormat(t, o).format(c) : l(c, r, t)
				},
				u = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: a,
						formatOptions: d,
						displayConversion: u,
						forceDecimals: f,
						currency: b = t.currency || (t.type ? m(t.type) : c.c),
						type: y = t.type || (t.currency ? p(t.currency) : c.b.Real)
					} = t, g = Number(e), O = String(e);
					switch (y) {
						case c.b.Reddit: {
							const e = c.e[b],
								t = e ? e() : b;
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(g) + " " + t : l(g, a, r, t)
						}
						case c.b.Crypto: {
							if (a) {
								return Object(s.d)(O, u) + " " + b
							}
							const e = Number(Object(s.c)(O, u));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : l(e, a, r, b)
						}
						case c.b.Real:
						default: {
							const e = Number(Object(o.a)(O, f));
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
				p = e => c.g.includes(e.toUpperCase()) ? c.b.Reddit : c.f.includes(e.toUpperCase()) ? c.b.Crypto : c.b.Real,
				m = e => {
					switch (e) {
						case c.b.Crypto:
							return c.d;
						case c.b.Reddit:
							return c.a;
						case c.b.Real:
						default:
							return c.c
					}
				}
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return w
			})), r.d(t, "d", (function() {
				return C
			})), r.d(t, "k", (function() {
				return _
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "g", (function() {
				return S
			})), r.d(t, "e", (function() {
				return I
			})), r.d(t, "c", (function() {
				return N
			})), r.d(t, "a", (function() {
				return L
			})), r.d(t, "i", (function() {
				return R
			})), r.d(t, "f", (function() {
				return G
			})), r.d(t, "j", (function() {
				return F
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/lodash/omit.js"),
				c = r.n(o),
				a = r("./node_modules/uuid/v4.js"),
				s = r.n(a),
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
				O = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/actions/gold/powerups.ts"),
				j = r("./src/reddit/actions/modal.ts"),
				v = r("./src/reddit/endpoints/gold/productOfferPurchase/index.ts");
			const P = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				E = e => e.map(e => e.message).join(" : "),
				w = (e, t, r, o) => async (c, a, i) => {
					let {
						gqlContext: d
					} = i;
					const u = s()(),
						l = await Object(v.f)(d(), u, e, t, r, o);
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
				}, k = Object(y.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
					hk: "2LgB2E"
				})), C = e => !!e && e.hasOwnProperty("success"), _ = e => {
					let {
						stripe: t,
						stripeElements: r,
						productOffer: n,
						pricePackage: o,
						productsCount: c,
						extraParams: a
					} = e;
					return async (e, i, d) => {
						let {
							gqlContext: u
						} = d;
						var l;
						const p = i();
						let f, b, O = "";
						try {
							O = await e(w(n, o, c, a))
						} catch (j) {
							return m.c.captureException(j), void(j.message && e(Object(y.stripeApiError)(j.message)))
						}
						e(Object(y.stripeTokenPending)());
						const h = Object(g.y)(p);
						if (h || (f = await e(Object(y.validateAndCreateStripeToken)(t, r)), b = Object(g.v)(p), f)) try {
							const r = s()(),
								n = h || b ? f && b ? Object(v.h)(u(), r, O, f.id) : h ? Object(v.j)(u(), r, O, h) : null : Object(v.i)(u(), r, O, f.id),
								o = await n;
							if (!(null == o ? void 0 : o.ok)) return void e(k);
							const c = o.body.data.createEconPayment;
							if (null === (l = null == c ? void 0 : c.errors) || void 0 === l ? void 0 : l.length) return void e(Object(y.stripeApiError)(E(c.errors)));
							const {
								ok: a,
								payment: i,
								providerExecution: {
									paymentIntentClientSecret: d
								}
							} = c;
							if (a && i.status === v.a.ActionRequired) {
								const r = await t.confirmCardPayment(d),
									{
										error: n
									} = r;
								if (n) return ((e, t) => {
									var r, n;
									(null === (n = null === (r = e.payment_intent) || void 0 === r ? void 0 : r.last_payment_error) || void 0 === n ? void 0 : n.message) ? t(Object(y.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(y.stripeApiError)(e.message)) : t(k)
								})(n, e);
								let o;
								if (!(o = h ? await Object(v.e)(u(), s()(), i.id, h) : await Object(v.d)(u(), s()(), i.id, f.id, b)).ok) return void e(k);
								const c = o.body;
								if (!c.data.confirmEconPayment.ok || c.data.confirmEconPayment.payment.status !== v.a.Paid) return void e(k)
							} else if (a && i.status !== v.a.Paid) return void e(k);
							return {
								success: !0
							}
						} catch (j) {
							m.c.captureException(j), e(k)
						}
					}
				}, x = e => {
					let {
						productOffer: t,
						pricePackage: r,
						productsCount: n,
						extraParams: o,
						overrideModalParams: c
					} = e;
					return async (e, a, d) => {
						let {
							gqlContext: u
						} = d;
						var p;
						let f = "";
						try {
							f = await e(w(t, r, n, o))
						} catch (h) {
							return m.c.captureException(h), h.message && e(Object(y.paypalApiError)(h.message)), null
						}
						const b = i.a.redditUrl,
							g = {
								_o: b,
								o: f,
								pt: t.type,
								...c
							};
						try {
							const t = Object(l.a)(`${b}/framedModal/paypal-finish`, {
									...g,
									s: !0
								}),
								r = Object(l.a)(`${b}/framedModal/paypal-finish`, g),
								n = s()(),
								o = await Object(v.g)(u(), n, f, t, r);
							if (o && o.ok) {
								const t = o.body.data.createEconPayment;
								if (null === (p = null == t ? void 0 : t.errors) || void 0 === p ? void 0 : p.length) return e(Object(y.paypalApiError)(E(t.errors))), null;
								const r = Object(O.k)(a());
								if (t.ok) {
									const {
										status: e
									} = t.payment;
									if (e === v.a.ActionRequired) {
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
						} catch (h) {
							m.c.captureException(h)
						}
						return e(Object(y.paypalApiError)(P())), null
					}
				}, S = (e, t) => async (r, n, o) => {
					let {
						gqlContext: c
					} = o;
					var a;
					try {
						const n = s()(),
							o = await Object(v.c)(c(), n, e, t);
						if (o && o.ok) {
							const e = o.body.data.confirmEconPayment;
							if (null === (a = null == e ? void 0 : e.errors) || void 0 === a ? void 0 : a.length) return r(Object(y.paypalApiError)(E(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (i) {
						m.c.captureException(i)
					}
					return r(Object(y.paypalApiError)(P())), !1
				}, I = () => async (e, t, r) => {
					let {
						gqlContext: o
					} = r;
					var a;
					e(Object(y.savedCardsPending)());
					try {
						const t = await Object(v.l)(o());
						if (t.error) throw e(Object(y.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						}))), new Error(t.error.type);
						const r = t.body;
						(null === (a = r.errors) || void 0 === a ? void 0 : a.length) && e(Object(y.stripeApiError)(r.errors[0].message));
						const {
							savedStripeCards: s
						} = r.data.identity, i = s.map(e => c()({
							...e,
							cardId: e.id
						}, "id"));
						e(Object(y.savedCardsSuccess)(i)), i[0] && e(Object(y.selectSavedCard)(i[0].cardId))
					} catch (s) {
						m.c.captureException(s), e(Object(y.savedCardsSuccess)([]))
					}
				}, N = e => async (t, r, n) => {
					let {
						gqlContext: o
					} = n;
					t(Object(y.deleteSavedCard)(e));
					try {
						const t = await Object(v.k)(o(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: n
							} = r.data.deleteEconPaymentMethod;
						if (n && n.length) throw new Error(E(n))
					} catch (c) {
						m.c.captureException(c)
					}
				}, A = Object(p.a)(b.O), M = Object(p.a)(b.P), T = Object(p.a)(b.Q), B = e => async (t, r) => {
					await t(A(e)), t(Object(u.f)({
						kind: f.b.Error,
						duration: u.a,
						text: e
					}))
				}, L = (e, t, r) => async (o, c, a) => {
					let {
						gqlContext: s
					} = a;
					o(M({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const c = await Object(v.b)(s(), e);
						if (c.ok) {
							const e = c.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void o(B(n[0].message));
							o(T({
								subredditId: t,
								allocatedAt: r
							}))
						} else o(B(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						m.c.captureException(i), o(B(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, U = Object(p.a)(b.S), R = e => async (t, r) => {
					t(U(e)), t(Object(h.m)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(j.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(j.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, D = Object(p.a)(b.W), G = e => {
					let {
						user: t
					} = e;
					return async e => {
						await e(Object(h.o)(!0)), e(D({
							user: t
						}))
					}
				}, F = Object(p.a)(b.ab)
		},
		"./src/reddit/actions/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return S
			})), r.d(t, "c", (function() {
				return A
			})), r.d(t, "b", (function() {
				return M
			})), r.d(t, "a", (function() {
				return T
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				s = r("./src/reddit/models/Gold/ProductOffer.ts"),
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
				O = Object(o.a)(b.bb),
				h = Object(o.a)(b.Z),
				j = Object(o.a)(b.Y),
				v = Object(o.a)(b.X),
				P = Object(o.a)(b.Db),
				E = Object(o.a)(b.Bb),
				w = Object(o.a)(b.Cb),
				k = Object(o.a)(b.Gb),
				C = Object(o.a)(b.Fb),
				_ = Object(o.a)(b.Eb),
				x = e => async t => {
					t(Object(a.f)({
						kind: i.b.Error,
						duration: a.a,
						text: e
					}))
				}, S = (e, t) => async r => {
					e === s.c.Premium ? r(N()) : t && r(I(e, t))
				}, I = (e, t) => async (r, o, c) => {
					let {
						gqlContext: a
					} = c;
					const s = o();
					if (!Object(f.k)(s, {
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
							r(O(e)), r(x(e))
						}
					}
				}, N = () => async (e, t, r) => {
					let {
						gqlContext: o
					} = r;
					var a, i;
					const d = s.c.Premium;
					e(h());
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
						c.c.captureMessage(t), e(v(t)), e(x(t))
					}
				}, A = () => async (e, t, r) => {
					let {
						gqlContext: o
					} = r;
					var a, s, i;
					e(P());
					try {
						const t = await (e => Object(u.a)(e, p))(o());
						if (t.error) throw new Error(t.error.type);
						if (t.ok) {
							const r = t.body;
							if (null === (a = r.errors) || void 0 === a ? void 0 : a.length) throw new Error(r.errors[0].message);
							return void e(w({
								subscriptions: null !== (i = null === (s = r.data.identity) || void 0 === s ? void 0 : s.econSubscriptions) && void 0 !== i ? i : []
							}))
						}
					} catch (d) {
						c.c.captureException(d);
						const t = d.message ? d.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						e(E(t)), e(x(t))
					}
				}, M = e => async (t, r, o) => {
					let {
						gqlContext: c
					} = o;
					var a;
					t(k(e));
					try {
						const r = await Object(d.b)(c(), e);
						if (r.error) throw new Error(r.error.type);
						if (r.ok) {
							const n = r.body,
								{
									errors: o
								} = n.data.cancelEconRecurringPayment;
							if (null == o ? void 0 : o.length) throw new Error(o[0].message);
							t(_({
								orderId: e
							}))
						}
						return !0
					} catch (s) {
						const e = null !== (a = s.message) && void 0 !== a ? a : n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						});
						return t(C(e)), t(x(e)), !1
					}
				}, T = e => async t => {
					const r = await t(M(e));
					return r ? (t(Object(a.f)({
						duration: a.a,
						kind: i.b.SuccessCommunity,
						text: n.fbt._("Changes saved", null, {
							hk: "2GeuMT"
						})
					})), t(A())) : t(Object(a.f)({
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
				return O
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return h
			})), r.d(t, "paypalApiError", (function() {
				return j
			})), r.d(t, "toggleRememberCard", (function() {
				return v
			})), r.d(t, "selectSavedCard", (function() {
				return P
			})), r.d(t, "deleteSavedCard", (function() {
				return E
			})), r.d(t, "savedCardsPending", (function() {
				return w
			})), r.d(t, "savedCardsSuccess", (function() {
				return k
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				s = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const i = Object(c.a)(s.F),
				d = Object(c.a)(s.A),
				u = Object(c.a)(s.b),
				l = Object(c.a)(s.C),
				p = Object(c.a)(s.a),
				m = Object(c.a)(s.K),
				f = Object(c.a)(s.J),
				b = Object(c.a)(s.I),
				y = Object(c.a)(s.M),
				g = Object(c.a)(s.L),
				O = Object(c.a)(s.H),
				h = (e, t) => async (r, c) => {
					const s = c(),
						i = Object(a.h)(s),
						d = Object(a.l)(s),
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
				}, j = Object(c.a)(s.B), v = Object(c.a)(s.N), P = Object(c.a)(s.G), E = Object(c.a)(s.g), w = Object(c.a)(s.D), k = Object(c.a)(s.E)
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "setPremiumPurchaseModalInfo", (function() {
				return g
			})), r.d(t, "clearPremiumPurchaseModalInfo", (function() {
				return O
			})), r.d(t, "openPremiumPurchaseModal", (function() {
				return h
			})), r.d(t, "closePremiumPurchaseModal", (function() {
				return j
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return v
			})), r.d(t, "paymentBlobCreated", (function() {
				return P
			})), r.d(t, "openWithBlob", (function() {
				return E
			}));
			var n = r("./src/config.ts"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/sentry/index.ts"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/formatApiError/index.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/constants/modals.ts"),
				p = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				m = r("./src/reddit/endpoints/gold/purchase.ts"),
				f = r("./src/reddit/helpers/correlationIdTracker.ts"),
				b = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const g = Object(c.a)(y.x),
				O = Object(c.a)(y.e),
				h = (e, t) => async r => {
					r(g(e)), r(Object(u.h)(l.a.ECON_PREMIUM_PURCHASE, t))
				}, j = () => async e => {
					e(Object(u.g)(l.a.ECON_PREMIUM_PURCHASE)), e(O())
				}, v = (e, t) => async (r, n, c) => {
					let {
						apiContext: a
					} = c;
					const u = Object(b.a)(n()),
						l = (null == u ? void 0 : u.pennies) || s.yb,
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
				}, P = Object(c.a)(y.z), E = (e, t) => {
					let {
						packageId: r,
						correlationId: o
					} = e;
					return async (e, c, s) => {
						let {
							apiContext: u
						} = s;
						e(h({
							packageId: r,
							correlationId: o
						}, t));
						const l = Object(b.a)(c()),
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
							} else e(P(t))
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
				return v
			})), r.d(t, "a", (function() {
				return E
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/env/index.ts"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/sentry/index.ts"),
				s = r("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/actions/post.ts"),
				l = r("./src/lib/makeGqlRequest/index.ts"),
				p = r("./src/reddit/actions/economics/powerups/helpers.ts"),
				m = r("./src/redditGQL/operations/PurchaseCatalogProductOffers.json");
			var f = r("./src/reddit/selectors/gold/productOffers.ts"),
				b = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			Object(c.a)(b.m);
			const y = Object(c.a)(b.o),
				g = Object(c.a)(b.n),
				O = Object(c.a)(b.i),
				h = Object(c.a)(b.j),
				j = e => async (t, r, c) => {
					let {
						gqlContext: s
					} = c;
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
							})(s());
							t(O(e.data.coinpacks.offers[0])), t(h(e.data.premium.offers[0]))
						} catch (u) {
							Object(o.b)() || console.error(u), a.c.captureException(u);
							const e = n.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(g(e))
						}
					}
				}, v = () => async e => e(j()), P = Object(c.a)(b.h), E = () => async (e, t, r) => {
					let {
						gqlContext: c
					} = r;
					var l, p;
					try {
						const t = await Object(s.a)(c());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (l = r.errors) || void 0 === l ? void 0 : l.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (p = r.awards) || void 0 === p ? void 0 : p.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(P({
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
				c = r.n(o),
				a = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				s = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				i = r.n(s);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js"), u = e => {
				let {
					className: t,
					highContrast: r,
					onClick: o
				} = e;
				return c.a.createElement("button", {
					onClick: o,
					className: Object(n.a)(i.a.closeButton, {
						[i.a.highContrast]: r
					}, t),
					"aria-label": d._("Close", null, {
						hk: "3Qarlp"
					})
				}, c.a.createElement(a.b, {
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
				c = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/higherOrderComponents/asModal/index.tsx"),
				s = r("./src/reddit/actions/modal.ts"),
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
				O = r("./src/lib/localizeCurrency/index.ts"),
				h = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				j = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				v = r("./src/reddit/controls/Button/index.tsx"),
				P = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				E = r("./src/reddit/hooks/useLocale.ts"),
				w = r("./src/reddit/actions/gold/productOffers.ts"),
				k = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				C = r("./src/reddit/helpers/correlationIdTracker.ts"),
				_ = r("./src/reddit/models/Gold/Premium/index.ts"),
				x = r("./src/reddit/models/Gold/ProductOffer.ts"),
				S = r("./src/reddit/selectors/gold/productOffers.ts"),
				I = r("./src/reddit/selectors/gold/purchaseCatalog.ts");
			var N = r("./src/reddit/pages/Premium/BenefitsSection/constants.ts"),
				A = r("./src/lib/classNames/index.ts"),
				M = r("./src/reddit/icons/fonts/index.tsx"),
				T = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/checklist.m.less"),
				B = r.n(T);
			const L = e => {
					let {
						className: t,
						items: r
					} = e;
					return o.a.createElement("div", {
						className: t
					}, r.map(e => o.a.createElement(U, {
						key: e,
						className: B.a.checklistItem,
						item: e
					})))
				},
				U = e => {
					let {
						className: t,
						item: r
					} = e;
					return o.a.createElement("div", {
						className: Object(A.a)(B.a.checklistItemRow, t)
					}, o.a.createElement("div", {
						className: B.a.iconBackground
					}, o.a.createElement(M.a, {
						className: B.a.icon,
						name: "checkmark_fill"
					})), o.a.createElement("span", {
						className: B.a.checklistItemText
					}, r))
				};
			var R = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/offerCard.m.less"),
				D = r.n(R);
			const G = e => {
				let {
					className: t,
					body: r,
					buttons: n,
					iconUrl: c,
					title: a
				} = e;
				return o.a.createElement("div", {
					className: Object(A.a)(t, D.a.container)
				}, o.a.createElement("div", {
					className: D.a.icon,
					style: {
						backgroundImage: `url('${c}')`
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
				fbt: W
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Q = ["premium-ad-free", "premium-avatars", "premium-monthly-coins", "premium-lounge"], J = e => {
				let {
					subredditId: t
				} = e;
				const r = Object(c.d)(),
					a = Object(E.b)(),
					i = Object(b.a)(),
					d = function() {
						var e, t;
						const r = Object(c.d)(),
							o = Object(c.e)(I.l),
							a = Object(c.e)(S.g),
							s = Object(c.e)(I.o);
						Object(n.useEffect)(() => {
							o.length || s || r(Object(k.b)()), a || r(Object(w.d)(x.c.Premium))
						});
						const i = o.find(e => e.frequency === _.c.Monthly),
							d = o.find(e => e.frequency === _.c.Yearly);
						if (!i || !d) return null;
						const u = null === (e = Object(S.l)(a, x.b.Month)) || void 0 === e ? void 0 : e[0],
							l = null === (t = Object(S.l)(a, x.b.Year)) || void 0 === t ? void 0 : t[0];
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
					u = Object(c.e)(e => Object(S.c)(e, {
						subredditId: t
					})),
					l = Object(c.e)(I.j),
					f = [W._("Powerups", null, {
						hk: "hJx1f"
					})];
				return o.a.createElement("div", {
					className: q.a.container
				}, d && u ? o.a.createElement(o.a.Fragment, null, o.a.createElement(G, {
					title: W._("Powerups Subscription", null, {
						hk: "4zbTSR"
					}),
					iconUrl: `${g.a.assetPath}/img/gold/premium-marketing/benefits-icons/premium-powerups.png`,
					body: o.a.createElement(L, {
						items: f
					}),
					buttons: u && o.a.createElement(v.t, {
						className: q.a.powerupsButton,
						priority: v.c.Secondary,
						onClick: () => {
							i(Object(m.k)()), r(Object(s.h)(p.a.ECON_POWERUPS_PURCHASE, {
								subredditId: t
							}))
						},
						isFullWidth: !0
					}, W._("{powerupPrice}/mo", [W._param("powerupPrice", Object(O.b)(u, {
						locale: a
					}))], {
						hk: "1ApJir"
					}))
				}), o.a.createElement(G, {
					title: W._("Reddit Premium", null, {
						hk: "S3DXw"
					}),
					iconUrl: `${g.a.assetPath}/img/gold/premium-marketing/benefits-icons/premium-crest.png`,
					body: o.a.createElement(Y, {
						premiumMonthlyCoins: l
					}),
					buttons: d && o.a.createElement(H, {
						premiumMonthly: d.premiumMonthly,
						premiumAnnual: d.premiumAnnual,
						onClickPrice: (e, n) => {
							i(Object(m.l)(n)), r(Object(j.openWithBlob)({
								correlationId: d.correlationId,
								packageId: e
							}, {
								isPowerupsPremiumPurchase: !0,
								subredditId: t
							})), r(Object(h.j)({
								renewInterval: n
							}))
						},
						locale: a
					})
				})) : o.a.createElement(P.a, {
					className: q.a.loadingIcon,
					sizePx: 40
				}))
			}, Y = e => {
				let {
					premiumMonthlyCoins: t
				} = e;
				const r = Q.map(e => N.d[e]({
					periodicalCoins: t
				})).filter(Boolean);
				return o.a.createElement("div", null, o.a.createElement(L, {
					items: r
				}), o.a.createElement("div", {
					className: q.a.andSoMuchMore
				}, W._("And so much more!", null, {
					hk: "oMd"
				})))
			}, H = e => {
				let {
					premiumMonthly: t,
					premiumAnnual: r,
					locale: n,
					onClickPrice: c
				} = e;
				return o.a.createElement("div", {
					className: q.a.premiumButtons
				}, o.a.createElement(v.t, {
					className: q.a.powerupsButton,
					priority: v.c.Secondary,
					onClick: () => c(t.packageId, x.b.Month),
					isFullWidth: !0
				}, W._("{premiumMonthlyPrice}/mo", [W._param("premiumMonthlyPrice", Object(O.b)(t.price, {
					locale: n
				}))], {
					hk: "4i6SO9"
				})), o.a.createElement(v.k, {
					className: q.a.powerupsButton,
					onClick: () => c(r.packageId, x.b.Year),
					isFullWidth: !0
				}, W._("{premiumAnnualPrice}/yr", [W._param("premiumAnnualPrice", Object(O.b)(r.price, {
					locale: n
				}))], {
					hk: "2YAbPf"
				})))
			};
			var z = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.m.less"),
				V = r.n(z);
			const {
				fbt: K
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Z = () => {
				const e = Object(c.e)(y.s),
					t = Object(c.d)(),
					r = Object(b.a)();
				Object(n.useEffect)(() => {
					e && r(Object(m.m)())
				}, [r, e]), Object(f.a)(l.a), Object(f.a)(d.a);
				const a = () => t(Object(s.g)(p.a.ECON_POWERUPS_PREMIUM_UPSELL));
				return e ? o.a.createElement(o.a.Fragment, null, o.a.createElement(i.a, {
					onClick: a,
					highContrast: !0
				}), o.a.createElement("div", {
					className: V.a.container
				}, o.a.createElement("h1", {
					className: V.a.title
				}, K._("Get more with Premium!", null, {
					hk: "YXIbY"
				})), o.a.createElement(J, {
					subredditId: e
				}), o.a.createElement("div", {
					className: V.a.footer
				}, K._("Subscriptions automatically renew.", null, {
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
				c = r("./src/lib/classNames/index.ts"),
				a = r("./node_modules/react/index.js"),
				s = r.n(a),
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
				return s.a.createElement("div", {
					className: Object(c.a)(l.a.background, {
						[l.a.isNightmodeOn]: r,
						[l.a.isModal]: a
					})
				}, s.a.createElement("div", {
					className: l.a.colorBlockCorner
				}), s.a.createElement("div", {
					className: l.a.colorBlockThrough
				}), s.a.createElement("div", {
					className: l.a.circleStriped,
					style: {
						backgroundImage: r ? `url(${o.a.assetPath}/img/powerups/linecircle-lightblue.png)` : `url(${o.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), s.a.createElement("div", {
					className: l.a.circleOrangeHollow
				}), s.a.createElement("div", {
					className: l.a.circleDotted,
					style: {
						backgroundImage: `url(${o.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), s.a.createElement("div", {
					className: l.a.circleGreenHollow
				}), s.a.createElement("div", {
					className: l.a.circleYellowHollow
				}))
			}
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
				c = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				s = r.n(a);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: n = 10
				} = e;
				return o.a.createElement("div", {
					className: Object(c.a)(s.a.loadingIcon, r, {
						[s.a.mCentered]: t
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
				c = r("./src/lib/omitHeaders/index.ts"),
				a = r("./src/reddit/constants/headers.ts"),
				s = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
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
					p = Object(s.a)(l);
				return Object(o.a)(Object(c.a)(r, [a.a]), {
					method: n.jb.POST,
					endpoint: p,
					data: u
				}).then(i.a)
			}, u = async e => {
				let {
					context: t,
					coins: r,
					pennies: s,
					correlationId: d
				} = e;
				const u = {
					coins: r,
					pennies: s,
					correlation_id: d
				};
				return Object(o.a)(Object(c.a)(t, [a.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: u
				}).then(i.a)
			}, l = async e => {
				let {
					context: t,
					awardId: r,
					pennies: s,
					thingId: d,
					correlationId: u
				} = e;
				const l = {
					award_id: r,
					correlation_id: u,
					pennies: s,
					thing_id: d
				};
				return Object(o.a)(Object(c.a)(t, [a.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(i.a)
			}, p = async e => {
				let {
					context: t,
					offerContext: r,
					orderId: s,
					coins: d,
					pennies: u,
					correlationId: l
				} = e;
				const p = {
					offer_context: r,
					order_id: s,
					coins: d,
					pennies: u,
					correlation_id: l
				};
				return Object(o.a)(Object(c.a)(t, [a.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: p
				}).then(i.a)
			}, m = async e => {
				let {
					awardId: t,
					context: r,
					coins: s,
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
					coins: s,
					correlation_id: d,
					is_anonymous: u,
					message: l,
					offer_context: p,
					order_id: m,
					pennies: f,
					thing_id: b
				};
				return Object(o.a)(Object(c.a)(r, [a.a]), {
					method: n.jb.POST,
					endpoint: `${r.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: y
				}).then(i.a)
			}, f = async e => {
				let {
					awardId: t,
					context: r,
					correlationId: s,
					isAnonymous: d,
					message: u,
					orderId: l,
					thingId: p
				} = e;
				const m = {
					award_id: t,
					correlation_id: s,
					is_anonymous: d,
					message: u,
					order_id: l,
					thing_id: p
				};
				return Object(o.a)(Object(c.a)(r, [a.a]), {
					method: n.jb.POST,
					endpoint: `${r.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: m
				}).then(i.a)
			}
		},
		"./src/reddit/endpoints/gold/productOfferPurchase/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return g
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "j", (function() {
				return v
			})), r.d(t, "g", (function() {
				return P
			})), r.d(t, "c", (function() {
				return E
			})), r.d(t, "e", (function() {
				return w
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "b", (function() {
				return C
			})), r.d(t, "l", (function() {
				return _
			})), r.d(t, "k", (function() {
				return x
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				o = r.n(n),
				c = r("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				a = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				s = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				i = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = r("./src/redditGQL/operations/CreateEconOrder.json"),
				u = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				l = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				p = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				m = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				f = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				b = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				y = r("./src/lib/makeGqlRequest/index.ts");
			const g = (e, t, r, n, c, a) => {
				const s = new o.a(n.price).multipliedBy(c).toFixed();
				return Object(y.a)(e, {
					...d,
					variables: {
						input: {
							nonce: t,
							productId: r.id,
							productVersion: r.version,
							pricePackageId: n.id,
							currency: n.currency,
							price: s,
							productsCount: c.toString(),
							...a
						}
					}
				})
			};
			var O;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(O || (O = {}));
			const h = (e, t, r, n) => Object(y.a)(e, {
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
				v = (e, t, r, n) => Object(y.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: r,
						cardId: n
					}
				}),
				P = (e, t, r, n, o) => Object(y.a)(e, {
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
				w = (e, t, r, n) => Object(y.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: r,
						cardId: n
					}
				}),
				k = (e, t, r, n, o) => Object(y.a)(e, {
					...s,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
						saveCard: o
					}
				}),
				C = (e, t) => Object(y.a)(e, {
					...c,
					variables: {
						orderId: t
					}
				}),
				_ = e => Object(y.a)(e, {
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
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				o = r("./src/lib/prettyPrintNumber/index.ts");

			function c(e, t) {
				const r = new n.BigNumber(e),
					o = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(o).toString()
			}

			function a(e, t) {
				return Object(o.b)(parseInt(c(e, t), 10))
			}

			function s(e, t) {
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
			var n, o, c, a;
			r.d(t, "b", (function() {
					return o
				})), r.d(t, "a", (function() {
					return c
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(o || (o = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(c || (c = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(a || (a = {}))
		},
		"./src/reddit/pages/Premium/BenefitsSection/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "d", (function() {
				return s
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
					key: "premium-awards",
					telemetryTag: "premium_awards"
				}],
				c = {
					key: "premium-more",
					telemetryTag: "more_benefits"
				},
				a = {
					key: "premium-bonus",
					asterisk: !0,
					telemetryTag: "coin_bonus"
				},
				s = {
					"premium-avatars": () => n.fbt._("Exclusive Avatar Gear", null, {
						hk: "1f1QJb"
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
				return O
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "h", (function() {
				return j
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/makeProductOfferKey/index.ts"),
				c = r("./src/reddit/models/Gold/ProductOffer.ts"),
				a = r("./src/reddit/models/Payments/index.ts"),
				s = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				d = (e, t) => {
					let {
						subredditId: r,
						type: n
					} = t;
					var c, a, s;
					return r ? e.subreddits.productOffers[Object(o.a)(n, r)] : null === (s = null === (a = null === (c = e.features) || void 0 === c ? void 0 : c.goldPurchase) || void 0 === a ? void 0 : a.productOffers) || void 0 === s ? void 0 : s[Object(o.a)(n)]
				},
				u = e => {
					const t = d(e, {
						type: c.c.Coinpack
					});
					return null == t ? void 0 : t[0]
				},
				l = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = d(e, {
						subredditId: r,
						type: c.c.Powerups
					});
					return null == n ? void 0 : n[0]
				},
				p = Object(n.a)(l, e => null == e ? void 0 : e.pricePackages[0]),
				m = Object(n.a)(p, e => null == e ? void 0 : e.price),
				f = e => {
					const t = d(e, {
						type: c.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				b = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === a.b.PayPal || e[0] === a.b.Stripe)(e.requiredPaymentProviders)) : null,
				y = Object(n.a)(f, s.p, (e, t) => b(e, t) || null),
				g = Object(n.a)(y, (e, t) => {
					let {
						provider: r
					} = t;
					return r
				}, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				O = Object(n.a)(y, e => (null == e ? void 0 : e[0].price) || null),
				h = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				j = Object(n.a)(h, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/redditGQL/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PowerupsPremiumUpsellModal.c9b0ee990269bddc7ddb.js.map