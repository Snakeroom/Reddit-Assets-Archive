// https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.a9724660cd0ce4c52f6f.js
// Retrieved at 3/10/2022, 5:50:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsPurchaseModal"], {
		"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js": function(e, t, r) {
			! function(e, t) {
				"use strict";
				t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
				var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

				function n() {}

				function a() {}
				a.resetWarningCache = n;
				var o = function(e, t) {
					return e(t = {
						exports: {}
					}, t.exports), t.exports
				}((function(e) {
					e.exports = function() {
						function e(e, t, n, a, o, s) {
							if (s !== r) {
								var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
								throw c.name = "Invariant Violation", c
							}
						}

						function t() {
							return e
						}
						e.isRequired = e;
						var o = {
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
							checkPropTypes: a,
							resetWarningCache: n
						};
						return o.PropTypes = o, o
					}()
				}));

				function s(e) {
					return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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

				function l(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
							var r = [],
								n = !0,
								a = !1,
								o = void 0;
							try {
								for (var s, c = e[Symbol.iterator](); !(n = (s = c.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
							} catch (i) {
								a = !0, o = i
							} finally {
								try {
									n || null == c.return || c.return()
								} finally {
									if (a) throw o
								}
							}
							return r
						}
					}(e, t) || function(e, t) {
						if (e) {
							if ("string" == typeof e) return u(e, t);
							var r = Object.prototype.toString.call(e).slice(8, -1);
							return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? u(e, t) : void 0
						}
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function u(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
					return n
				}
				var m = function(e) {
						var r = t.useRef(e);
						return t.useEffect((function() {
							r.current = e
						}), [e]), r.current
					},
					p = function(e) {
						return null !== e && "object" === s(e)
					},
					f = function(e, t, r) {
						return p(e) ? Object.keys(e).reduce((function(n, a) {
							var o = !p(t) || ! function e(t, r) {
								if (!p(t) || !p(r)) return t === r;
								var n = Array.isArray(t);
								if (n !== Array.isArray(r)) return !1;
								var a = "[object Object]" === Object.prototype.toString.call(t);
								if (a !== ("[object Object]" === Object.prototype.toString.call(r))) return !1;
								if (!a && !n) return !1;
								var o = Object.keys(t),
									s = Object.keys(r);
								if (o.length !== s.length) return !1;
								for (var c = {}, i = 0; i < o.length; i += 1) c[o[i]] = !0;
								for (var d = 0; d < s.length; d += 1) c[s[d]] = !0;
								var l = Object.keys(c);
								if (l.length !== o.length) return !1;
								var u = t,
									m = r;
								return l.every((function(t) {
									return e(u[t], m[t])
								}))
							}(e[a], t[a]);
							return r.includes(a) ? (o && console.warn("Unsupported prop change: options.".concat(a, " is not a mutable property.")), n) : o ? d(d({}, n || {}), {}, c({}, a, e[a])) : n
						}), null) : null
					},
					b = function(e) {
						if (null === e || p(t = e) && "function" == typeof t.elements && "function" == typeof t.createToken && "function" == typeof t.createPaymentMethod && "function" == typeof t.confirmCardPayment) return e;
						var t;
						throw new Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
					},
					h = function(e) {
						if (function(e) {
								return p(e) && "function" == typeof e.then
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
				var y = function(e) {
					var r = e.stripe,
						n = e.options,
						a = e.children,
						o = t.useRef(!1),
						s = t.useRef(!0),
						c = t.useMemo((function() {
							return h(r)
						}), [r]),
						i = l(t.useState((function() {
							return {
								stripe: null,
								elements: null
							}
						})), 2),
						d = i[0],
						u = i[1],
						p = m(r);
					null !== p && p !== r && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), o.current || ("sync" === c.tag && (o.current = !0, u({
						stripe: c.stripe,
						elements: c.stripe.elements(n)
					})), "async" === c.tag && (o.current = !0, c.stripePromise.then((function(e) {
						e && s.current && u({
							stripe: e,
							elements: e.elements(n)
						})
					}))));
					var b = m(n);
					return t.useEffect((function() {
						if (d.elements) {
							var e = f(n, b, ["clientSecret", "fonts"]);
							e && d.elements.update(e)
						}
					}), [n, b, d.elements]), t.useEffect((function() {
						return function() {
							s.current = !1
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
					}, a)
				};
				y.propTypes = {
					stripe: o.any,
					options: o.object
				};
				var v = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(g), e)
					},
					E = function(e) {
						return (0, e.children)(v("mounts <ElementsConsumer>"))
					};
				E.propTypes = {
					children: o.func.isRequired
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
					C = function() {},
					w = function(e, r) {
						var n, a = "".concat((n = e).charAt(0).toUpperCase() + n.slice(1), "Element"),
							s = r ? function(e) {
								v("mounts <".concat(a, ">"));
								var r = e.id,
									n = e.className;
								return t.createElement("div", {
									id: r,
									className: n
								})
							} : function(r) {
								var n = r.id,
									o = r.className,
									s = r.options,
									c = void 0 === s ? {} : s,
									i = r.onBlur,
									d = void 0 === i ? C : i,
									l = r.onFocus,
									u = void 0 === l ? C : l,
									p = r.onReady,
									b = void 0 === p ? C : p,
									h = r.onChange,
									g = void 0 === h ? C : h,
									y = r.onEscape,
									E = void 0 === y ? C : y,
									w = r.onClick,
									O = void 0 === w ? C : w,
									j = v("mounts <".concat(a, ">")).elements,
									x = t.useRef(null),
									_ = t.useRef(null),
									k = P(b),
									N = P(d),
									S = P(u),
									I = P(O),
									M = P(g),
									A = P(E);
								t.useLayoutEffect((function() {
									if (null == x.current && j && null != _.current) {
										var t = j.create(e, c);
										x.current = t, t.mount(_.current), t.on("ready", (function() {
											return k(t)
										})), t.on("change", M), t.on("blur", N), t.on("focus", S), t.on("escape", A), t.on("click", I)
									}
								}));
								var T = m(c);
								return t.useEffect((function() {
									if (x.current) {
										var e = f(c, T, ["paymentRequest"]);
										e && x.current.update(e)
									}
								}), [c, T]), t.useLayoutEffect((function() {
									return function() {
										x.current && x.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: o,
									ref: _
								})
							};
						return s.propTypes = {
							id: o.string,
							className: o.string,
							onChange: o.func,
							onBlur: o.func,
							onFocus: o.func,
							onReady: o.func,
							onClick: o.func,
							options: o.object
						}, s.displayName = a, s.__elementType = e, s
					},
					O = "undefined" == typeof window,
					j = w("auBankAccount", O),
					x = w("card", O),
					_ = w("cardNumber", O),
					k = w("cardExpiry", O),
					N = w("cardCvc", O),
					S = w("fpxBank", O),
					I = w("iban", O),
					M = w("idealBank", O),
					A = w("p24Bank", O),
					T = w("epsBank", O),
					R = w("payment", O),
					L = w("paymentRequestButton", O),
					D = w("linkAuthentication", O),
					F = w("shippingAddress", O),
					B = w("afterpayClearpayMessage", O);
				e.AfterpayClearpayMessageElement = B, e.AuBankAccountElement = j, e.CardCvcElement = N, e.CardElement = x, e.CardExpiryElement = k, e.CardNumberElement = _, e.Elements = y, e.ElementsConsumer = E, e.EpsBankElement = T, e.FpxBankElement = S, e.IbanElement = I, e.IdealBankElement = M, e.LinkAuthenticationElement = D, e.P24BankElement = A, e.PaymentElement = R, e.PaymentRequestButtonElement = L, e.ShippingAddressElement = F, e.useElements = function() {
					return v("calls useElements()").elements
				}, e.useStripe = function() {
					return v("calls useStripe()").stripe
				}, Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}(t, r("./node_modules/react/index.js"))
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, r) {
			var n = r("./node_modules/lodash/toString.js"),
				a = 0;
			e.exports = function(e) {
				var t = ++a;
				return n(e) + t
			}
		},
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./src/lib/currency/cleanNumber/index.ts");

			function a(e, t) {
				const r = Object(n.a)(e),
					a = parseInt(r) / 100;
				return Math.floor(a) !== a || t ? a.toFixed(2) : String(a)
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
				return o
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "e", (function() {
				return l
			}));
			var n, a = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(n || (n = {}));
			const o = "USD",
				s = "ETH",
				c = "COINS",
				i = [s, "BTC"],
				d = [c, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				l = {
					COINS: () => a.fbt._("Coins", null, {
						hk: "1T2Y4p"
					}),
					SUBREDDIT_POINTS: () => a.fbt._("Subreddit points", null, {
						hk: "1ytOO3"
					}),
					GAME_TOKENS: () => a.fbt._("Game tokens", null, {
						hk: "16BUrU"
					})
				}
		},
		"./src/lib/localizeCurrency/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			}));
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				a = r("./src/lib/currency/centsToDollars/index.ts"),
				o = r("./src/lib/currency/currencies.ts"),
				s = r("./src/lib/prettyPrintNumber/index.ts"),
				c = r("./src/reddit/helpers/governance/tokens.ts"),
				i = r("./src/reddit/constants/intlSupport.ts");
			const d = (e, {
					locale: t = n.DEFAULT_LOCALE,
					pretty: r,
					formatOptions: a
				} = {}) => {
					const o = Number(e);
					return Object(i.c)() ? r ? Object(s.b)(o) : new Intl.NumberFormat(t, a).format(o) : u(o, r, t)
				},
				l = (e, t = {}) => {
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: s,
						formatOptions: d,
						displayConversion: l,
						forceDecimals: f,
						currency: b = t.currency || (t.type ? p(t.type) : o.c),
						type: h = t.type || (t.currency ? m(t.currency) : o.b.Real)
					} = t, g = Number(e), y = String(e);
					switch (h) {
						case o.b.Reddit: {
							const e = o.e[b],
								t = e ? e() : b;
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(g) + " " + t : u(g, s, r, t)
						}
						case o.b.Crypto: {
							if (s) {
								return Object(c.c)(y, l) + " " + b
							}
							const e = Number(Object(c.b)(y, l));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : u(e, s, r, b)
						}
						case o.b.Real:
						default: {
							const e = Number(Object(a.a)(y, f));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								notation: s ? "compact" : "standard",
								...d
							}).format(e) : u(e, s, r, b)
						}
					}
				},
				u = (e, t, r, n) => {
					return (t ? Object(s.b)(e) : e.toLocaleString(r)) + (n ? " " + n : "")
				},
				m = e => o.g.includes(e.toUpperCase()) ? o.b.Reddit : o.f.includes(e.toUpperCase()) ? o.b.Crypto : o.b.Real,
				p = e => {
					switch (e) {
						case o.b.Crypto:
							return o.d;
						case o.b.Reddit:
							return o.a;
						case o.b.Real:
						default:
							return o.c
					}
				}
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return O
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "k", (function() {
				return _
			})), r.d(t, "h", (function() {
				return k
			})), r.d(t, "g", (function() {
				return N
			})), r.d(t, "e", (function() {
				return S
			})), r.d(t, "c", (function() {
				return I
			})), r.d(t, "a", (function() {
				return L
			})), r.d(t, "i", (function() {
				return F
			})), r.d(t, "f", (function() {
				return U
			})), r.d(t, "j", (function() {
				return G
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/omit.js"),
				o = r.n(a),
				s = r("./node_modules/uuid/v4.js"),
				c = r.n(s),
				i = r("./src/config.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/lib/addQueryParams/index.ts"),
				m = r("./src/lib/makeActionCreator/index.ts"),
				p = r("./src/lib/sentry/index.ts"),
				f = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/actions/gold/constants.ts"),
				h = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				g = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				y = r("./src/reddit/selectors/user.ts"),
				v = r("./src/reddit/actions/gold/powerups.ts"),
				E = r("./src/reddit/actions/modal.ts"),
				P = r("./src/reddit/endpoints/gold/productOfferPurchase.ts");
			const C = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				w = e => e.map(e => e.message).join(" : "),
				O = (e, t, r, a) => async (o, s, {
					gqlContext: i
				}) => {
					const d = c()(),
						l = await Object(P.f)(i(), d, e, t, r, a);
					if (l.ok) {
						const e = l.body,
							{
								errors: t,
								order: r
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(w(t));
						if (r) return r.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, j = Object(h.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
					hk: "2LgB2E"
				})), x = e => !!e && e.hasOwnProperty("success"), _ = ({
					stripe: e,
					stripeElements: t,
					productOffer: r,
					pricePackage: n,
					productsCount: a,
					extraParams: o
				}) => async (s, i, {
					gqlContext: d
				}) => {
					var l;
					const u = i();
					let m, f, b = "";
					try {
						b = await s(O(r, n, a, o))
					} catch (v) {
						return p.c.captureException(v), void(v.message && s(Object(h.stripeApiError)(v.message)))
					}
					s(Object(h.stripeTokenPending)());
					const y = Object(g.y)(u);
					if (y || (m = await s(Object(h.validateAndCreateStripeToken)(e, t)), f = Object(g.v)(u), m)) try {
						const t = c()(),
							r = y || f ? m && f ? Object(P.h)(d(), t, b, m.id) : y ? Object(P.j)(d(), t, b, y) : null : Object(P.i)(d(), t, b, m.id),
							n = await r;
						if (!(null == n ? void 0 : n.ok)) return void s(j);
						const a = n.body.data.createEconPayment;
						if (null === (l = null == a ? void 0 : a.errors) || void 0 === l ? void 0 : l.length) return void s(Object(h.stripeApiError)(w(a.errors)));
						const {
							ok: o,
							payment: i,
							providerExecution: {
								paymentIntentClientSecret: u
							}
						} = a;
						if (o && i.status === P.a.ActionRequired) {
							const t = await e.confirmCardPayment(u),
								{
									error: r
								} = t;
							if (r) return ((e, t) => {
								var r, n;
								(null === (n = null === (r = e.payment_intent) || void 0 === r ? void 0 : r.last_payment_error) || void 0 === n ? void 0 : n.message) ? t(Object(h.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(h.stripeApiError)(e.message)) : t(j)
							})(r, s);
							let n;
							if (!(n = y ? await Object(P.e)(d(), c()(), i.id, y) : await Object(P.d)(d(), c()(), i.id, m.id, f)).ok) return void s(j);
							const a = n.body;
							if (!a.data.confirmEconPayment.ok || a.data.confirmEconPayment.payment.status !== P.a.Paid) return void s(j)
						} else if (o && i.status !== P.a.Paid) return void s(j);
						return {
							success: !0
						}
					} catch (v) {
						p.c.captureException(v), s(j)
					}
				}, k = ({
					productOffer: e,
					pricePackage: t,
					productsCount: r,
					extraParams: n,
					overrideModalParams: a
				}) => async (o, s, {
					gqlContext: d
				}) => {
					var l;
					let m = "";
					try {
						m = await o(O(e, t, r, n))
					} catch (g) {
						return p.c.captureException(g), g.message && o(Object(h.paypalApiError)(g.message)), null
					}
					const f = i.a.redditUrl,
						b = {
							_o: f,
							o: m,
							pt: e.type,
							...a
						};
					try {
						const e = Object(u.a)(`${f}/framedModal/paypal-finish`, {
								...b,
								s: !0
							}),
							t = Object(u.a)(`${f}/framedModal/paypal-finish`, b),
							r = c()(),
							n = await Object(P.g)(d(), r, m, e, t);
						if (n && n.ok) {
							const e = n.body.data.createEconPayment;
							if (null === (l = null == e ? void 0 : e.errors) || void 0 === l ? void 0 : l.length) return o(Object(h.paypalApiError)(w(e.errors))), null;
							const t = Object(y.k)(s());
							if (e.ok) {
								const {
									status: r
								} = e.payment;
								if (r === P.a.ActionRequired) {
									const t = e.providerExecution;
									if (t.orderApprovalUrl) return {
										paymentId: e.payment.id,
										url: t.orderApprovalUrl
									};
									if (t.billingAgreementToken && t.billingAgreementApprovalUrl) return {
										paymentId: e.payment.id,
										token: t.billingAgreementToken,
										url: t.billingAgreementApprovalUrl
									}
								}
								if ("PAID" === r && t) return {
									success: !0
								}
							}
						}
					} catch (g) {
						p.c.captureException(g)
					}
					return o(Object(h.paypalApiError)(C())), null
				}, N = (e, t) => async (r, n, {
					gqlContext: a
				}) => {
					var o;
					try {
						const n = c()(),
							s = await Object(P.c)(a(), n, e, t);
						if (s && s.ok) {
							const e = s.body.data.confirmEconPayment;
							if (null === (o = null == e ? void 0 : e.errors) || void 0 === o ? void 0 : o.length) return r(Object(h.paypalApiError)(w(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (s) {
						p.c.captureException(s)
					}
					return r(Object(h.paypalApiError)(C())), !1
				}, S = () => async (e, t, {
					gqlContext: r
				}) => {
					e(Object(h.savedCardsPending)());
					try {
						const t = await Object(P.l)(r());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(h.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: n
							} = r.data.identity, a = n.map(e => o()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(h.savedCardsSuccess)(a)), a[0] && e(Object(h.selectSavedCard)(a[0].cardId))
						} else e(Object(h.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (a) {
						p.c.captureException(a), e(Object(h.savedCardsSuccess)([]))
					}
				}, I = e => async (t, r, {
					gqlContext: n
				}) => {
					t(Object(h._deleteSavedCard)(e));
					try {
						const t = await Object(P.k)(n(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: a
							} = r.data.deleteEconPaymentMethod;
						if (a && a.length) throw new Error(w(a))
					} catch (a) {
						p.c.captureException(a)
					}
				}, M = Object(m.a)(b.O), A = Object(m.a)(b.P), T = Object(m.a)(b.Q), R = e => async (t, r) => {
					await t(M(e)), t(Object(l.f)({
						kind: f.b.Error,
						duration: l.a,
						text: e
					}))
				}, L = (e, t, r) => async (a, o, {
					gqlContext: s
				}) => {
					a(A({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const o = await Object(P.b)(s(), e);
						if (o.ok) {
							const e = o.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void a(R(n[0].message));
							a(T({
								subredditId: t,
								allocatedAt: r
							}))
						} else a(R(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (c) {
						p.c.captureException(c), a(R(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, D = Object(m.a)(b.S), F = e => async (t, r) => {
					t(D(e)), t(Object(v.m)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(E.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(E.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, B = Object(m.a)(b.W), U = ({
					user: e
				}) => async t => {
					await t(Object(v.o)(!0)), t(B({
						user: e
					}))
				}, G = Object(m.a)(b.ab)
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return l
			})), r.d(t, "paymentCompleted", (function() {
				return u
			})), r.d(t, "cardNameInput", (function() {
				return m
			})), r.d(t, "postalCodeInput", (function() {
				return p
			})), r.d(t, "cardNameEmpty", (function() {
				return f
			})), r.d(t, "cardNumberChange", (function() {
				return b
			})), r.d(t, "cardExpiryChange", (function() {
				return h
			})), r.d(t, "cardCvcChange", (function() {
				return g
			})), r.d(t, "stripeTokenPending", (function() {
				return y
			})), r.d(t, "stripeTokenError", (function() {
				return v
			})), r.d(t, "stripeApiError", (function() {
				return E
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return P
			})), r.d(t, "paypalApiError", (function() {
				return C
			})), r.d(t, "toggleRememberCard", (function() {
				return w
			})), r.d(t, "selectSavedCard", (function() {
				return O
			})), r.d(t, "_deleteSavedCard", (function() {
				return j
			})), r.d(t, "deleteSavedCard", (function() {
				return x
			})), r.d(t, "savedCardsPending", (function() {
				return _
			})), r.d(t, "savedCardsSuccess", (function() {
				return k
			})), r.d(t, "loadSavedCards", (function() {
				return N
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/endpoints/gold/purchase.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const l = Object(o.a)(d.F),
				u = Object(o.a)(d.A),
				m = Object(o.a)(d.b),
				p = Object(o.a)(d.C),
				f = Object(o.a)(d.a),
				b = Object(o.a)(d.K),
				h = Object(o.a)(d.J),
				g = Object(o.a)(d.I),
				y = Object(o.a)(d.M),
				v = Object(o.a)(d.L),
				E = Object(o.a)(d.H),
				P = (e, t) => async (r, o) => {
					const s = o(),
						c = Object(i.h)(s),
						d = Object(i.l)(s),
						l = t.getElement(n.CardNumberElement);
					if (!l) return;
					const {
						token: u,
						error: m
					} = await e.createToken(l, {
						name: c,
						address_zip: d
					});
					if (c.trim()) {
						if (!m && u) return u;
						r(v(m || void 0))
					} else {
						const e = a.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(f({
							message: e
						}))
					}
				}, C = Object(o.a)(d.B), w = Object(o.a)(d.N), O = Object(o.a)(d.G), j = Object(o.a)(d.g), x = e => async (t, r, {
					apiContext: n
				}) => {
					t(j(e));
					try {
						const t = await Object(c.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (a) {
						s.c.captureException(a)
					}
				}, _ = Object(o.a)(d.D), k = Object(o.a)(d.E), N = () => async (e, t, {
					apiContext: r
				}) => {
					e(_());
					try {
						const t = await Object(c.b)(r());
						if (t.error) throw new Error(t.error.type);
						const n = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(k(n)), n[0] && e(O(n[0].cardId))
					} catch (n) {
						s.c.captureException(n), e(k([]))
					}
				}
		},
		"./src/reddit/components/CheckoutForm/index.m.less": function(e, t, r) {
			e.exports = {
				formCellWide: "_3WoE3ObhsRzGd3NqoVTQ6D",
				formCell: "_1JGAet5jPDcpg7Tru23HMo",
				cardInput: "_1anVEbF9dn-ObJGVmmlFwL",
				cardInputError: "cNiLkxu8bhSFHcvFVbfAM",
				nameOnCard: "yS2Q83Vi28PL7t1XJExTA",
				errorMessage: "oGQBXeEv9yu4mXmkfKI4Y",
				elementPlaceholder: "_1wqbqqyQ0kPt-0QYCJqWdf"
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
				return l
			}));
			var n = r("./src/lib/classNames/index.ts"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				s = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				i = r.n(c);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js"), l = ({
				className: e,
				highContrast: t,
				onClick: r
			}) => o.a.createElement("button", {
				onClick: r,
				className: Object(n.a)(i.a.closeButton, {
					[i.a.highContrast]: t
				}, e),
				"aria-label": d._("Close", null, {
					hk: "3Qarlp"
				})
			}, o.a.createElement(s.b, {
				className: i.a.closeIcon
			}))
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3-wzlsd2L9K9BE7yms9IhJ",
				title: "_258n2TylpikH2fhZLhlAgr",
				subtitle: "_1AYSLhpiU1fIwgPPxu2Xuy"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/classNames/index.ts"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				s = r("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less"),
				c = r.n(s);
			t.a = e => o.a.createElement("header", {
				className: Object(n.a)(c.a.container, e.className)
			}, o.a.createElement("h2", {
				className: c.a.title
			}, e.title), o.a.createElement("h3", {
				className: c.a.subtitle
			}, e.subtitle))
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsPremiumButton/index.m.less": function(e, t, r) {
			e.exports = {
				button: "_1mc-IVNBsfKUugqkP3rda7",
				loadingIcon: "_15g-u6pLWEgyq-W1q8zSji"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/PowerupsCount/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_2BuBEDqT7lkg3pO2WKDev7",
				control: "_1favHXSOScXwn1RBgoTcQR",
				locked: "_1zr44sXfpGbr_0IvOKMhUe",
				button: "_3paafvflLXs20pV91RRAB0",
				buttonIconElement: "_1SxKXgyGKQ5q6hRVXs8exA",
				decrementButton: "_2ZZ4y8uLTNayuVN_S-2Nf5",
				incrementButton: "_190moU3v0ZouK_rrsulWXf",
				value: "_2kUt45BOMdEQHtdaCmdozL",
				icon: "_5d5MTurdJPq_vddOMX6pc"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/ProgressBar/index.m.less": function(e, t, r) {
			e.exports = {
				titleRow: "_1i5gFES8rHCUngNfydAuWr",
				barRow: "_2C7hWoSd6z9a-xV6Z3dnje",
				track: "No3J_0QnbZSfXaewR0dYK",
				progress: "_3oU4QH4ZKf2Ju86PxWmVvt",
				additionalProgress: "_31fdHeoPmiYpMGtd2vSSdL",
				opacityBlink: "_1eAQSptthEkyF-iGElcw0A"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_2iu3jX5bVR5jy7OP6neJ4W",
				count: "_2AMO2XnYhlJu67x263BGll"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/index.m.less": function(e, t, r) {
			e.exports = {
				progressControl: "_2SIcayqih-ki47E6ubsDLN",
				details: "_20wZ73zqa9DS0namcCJdoA",
				purchaseDetails: "SW6YZoTb2xUeU8o-3IQOF",
				anonymousCheckbox: "_2TwVYjhqi8rCciDTHrMPTc",
				paymentMethodTitle: "_3ZkB3JIS9oGV5ZNPEoYrOm",
				paymentMethodSelector: "_2zJhl9SVW67lTeXQgaeNiV",
				errorMessage: "_2Jj9FQM628kGz4Zsu-DATD",
				stripeForm: "_27fBu-SIMK3yPRcZeNUi-",
				button: "_2zABc383welm4OSB9jgeQG",
				Icon: "_20ZTInSCuk9gGcfQ6D7pel",
				icon: "_20ZTInSCuk9gGcfQ6D7pel",
				isLeft: "ivqRDi80dfqnzNnU7r1Bp",
				isRight: "_3l-suZErGWJnDlAcWKjk15",
				premiumDescription: "_1TlVluSbXOqttjoOmuZD2Q",
				premiumIconWrapper: "_3NK13DzzCxYXpEyi7Z1D-P",
				premiumIcon: "_13HsDRX-CPOf5B1mORjNbn",
				description: "_2kdlUzSaYOfKTKm4IaA-by"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/index.m.less": function(e, t, r) {
			e.exports = {
				modal: "_2f9jiTDa9UHMVSyfqhg9zd"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx"),
				c = r("./src/reddit/selectors/platform.ts"),
				i = r("./node_modules/reselect/es/index.js"),
				d = r("./src/higherOrderComponents/asModal/index.tsx"),
				l = r("./src/lib/classNames/index.ts"),
				u = r("./src/reddit/actions/modal.ts"),
				m = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				p = r("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx"),
				f = r("./src/reddit/constants/modals.ts"),
				b = r("./src/reddit/contexts/PageLayer/index.tsx"),
				h = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				g = r("./src/reddit/hooks/useLocale.ts"),
				y = r("./src/reddit/hooks/useTracking.ts"),
				v = r("./src/lib/constants/index.ts"),
				E = r("./src/lib/localizeCurrency/index.ts"),
				P = r("./src/reddit/helpers/trackers/powerups.ts"),
				C = r("./src/reddit/actions/gold/powerups.ts"),
				w = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				O = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				j = r("./src/reddit/selectors/gold/powerups/index.ts"),
				x = r("./src/reddit/selectors/gold/productOffers.ts"),
				_ = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				k = r("./src/reddit/selectors/user.ts"),
				N = r("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				S = r("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				I = r("./src/reddit/components/StripePaymentForm/index.tsx"),
				M = r("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				A = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				T = r("./src/reddit/hooks/useStripePromise.ts"),
				R = r("./src/reddit/hooks/useThunkDispatch.ts"),
				L = r("./src/reddit/controls/Button/index.tsx"),
				D = r("./src/reddit/controls/LoadingIcon/index.tsx");
			const {
				fbt: F
			} = r("./node_modules/fbt/lib/FbtPublic.js"), B = Object(i.c)({
				currentUser: k.k,
				isAnonymous: j.d,
				powerupsCount: j.e,
				productOffer: x.d,
				pricePackage: x.b
			});
			var U = Object(o.b)(B)(a.a.memo((function(e) {
					const {
						className: t,
						currentUser: r,
						isAnonymous: o,
						powerupsCount: s,
						productOffer: c,
						pricePackage: i,
						subredditId: d
					} = e, l = Object(R.a)();
					Object(n.useEffect)(() => (window.addEventListener("message", f, !1), () => window.removeEventListener("message", f)), []);
					const [u, m] = Object(n.useState)(!1);
					let p = null;
					if (!r) return null;
					const f = e => {
							const t = (e => {
								try {
									return "string" == typeof e.data ? JSON.parse(e.data) : e.data
								} catch (t) {
									return
								}
							})(e);
							t && t.type && ("paypal-finish.success.framedmodal" === t.type ? (b(), p && p.close()) : "paypal-finish.cancel.framedmodal" === t.type && p && p.close())
						},
						b = () => {
							l(Object(w.i)({
								subredditId: d,
								powerupsCount: s,
								user: r,
								isAnonymous: o
							}))
						};
					return a.a.createElement(L.l, {
						onClick: async () => {
							if (!c || !i) return;
							m(!0);
							const e = await l(Object(w.h)({
								productOffer: c,
								pricePackage: i,
								productsCount: s,
								extraParams: {
									powerUps: {
										subredditId: d,
										isAnonymous: o
									}
								},
								overrideModalParams: {
									r: d
								}
							}));
							if (e)
								if (Object(w.d)(e)) e.success && b();
								else {
									const {
										url: t
									} = e, r = 580, n = 740, a = Math.max(window.screenX + Math.round((window.outerWidth - r) / 2), 0), o = Math.max(window.screenY + Math.round((window.outerHeight - n) / 2), 0);
									p = window.open(`${t}&rnd=${Math.random()}`, "RedditPaypalPayment", `height=${n},width=${r},top=${o},left=${a},modal=yes,alwaysRaised=yes`)
								} m(!1)
						},
						className: t,
						disabled: u
					}, u ? a.a.createElement(D.a, {
						sizePx: 12,
						center: !0
					}) : F._("Continue to PayPal", null, {
						hk: "1T4BEy"
					}))
				}))),
				G = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsPremiumButton/index.m.less"),
				q = r.n(G);
			const {
				fbt: z
			} = r("./node_modules/fbt/lib/FbtPublic.js"), H = ({
				className: e,
				subredditId: t
			}) => {
				const r = Object(o.e)(j.d),
					n = Object(o.e)(j.c),
					s = Object(o.e)(j.e),
					c = Object(o.d)();
				return a.a.createElement(L.t, {
					priority: L.c.Primary,
					onClick: () => {
						c(Object(C.k)(t, s, r))
					},
					className: Object(l.a)(e, q.a.button),
					disabled: n
				}, n ? a.a.createElement(D.a, {
					className: q.a.loadingIcon,
					sizePx: 12
				}) : z._({
					"*": "Apply Your Powerups",
					_1: "Apply Your Powerup"
				}, [z._plural(s)], {
					hk: "4zdKUc"
				}))
			};
			var V = r("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				W = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/PowerupsCount/index.m.less"),
				Q = r.n(W);
			var X = function(e) {
					const {
						className: t,
						onChange: r,
						style: n,
						value: o,
						min: s,
						max: c
					} = e, i = e => r(Math.max(Math.min(o + e, c || Number.POSITIVE_INFINITY), s || 0)), d = c === s, u = Object(V.a)(o);
					return a.a.createElement("div", {
						className: Object(l.a)(t, Q.a.container),
						style: n
					}, a.a.createElement("div", {
						className: Object(l.a)(Q.a.control, {
							[Q.a.locked]: d
						})
					}, !d && a.a.createElement("button", {
						className: Object(l.a)(Q.a.button, Q.a.decrementButton),
						onClick: () => i(-1)
					}), a.a.createElement("div", {
						className: Q.a.value
					}, a.a.createElement(u, {
						className: Q.a.icon
					}), a.a.createElement("span", null, o)), !d && a.a.createElement("button", {
						className: Object(l.a)(Q.a.button, Q.a.incrementButton),
						onClick: () => i(1)
					})))
				},
				Y = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/ProgressBar/index.m.less"),
				J = r.n(Y);
			const {
				fbt: K
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var $ = e => {
					const {
						additionalCount: t,
						className: r,
						count: n,
						maxCount: o
					} = e;
					if (!o) return null;
					const s = Math.min(o, n) / o,
						c = Math.min(o, n + (t || 0)) / o;
					return a.a.createElement("div", {
						className: r
					}, a.a.createElement("div", {
						className: J.a.titleRow
					}, a.a.createElement("span", null, K._("Powerups", null, {
						hk: "DrcXp"
					})), a.a.createElement("span", null, n < o ? `${n}/${o}` : n)), a.a.createElement("div", {
						className: J.a.barRow
					}, a.a.createElement("div", {
						className: J.a.track
					}), a.a.createElement("div", {
						className: J.a.progress,
						style: {
							width: `${100*s}%`
						}
					}), t && a.a.createElement("div", {
						className: J.a.additionalProgress,
						style: {
							width: `${100*(c-s)}%`,
							left: `${100*s}%`
						}
					})))
				},
				Z = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/index.m.less"),
				ee = r.n(Z);
			var te = function(e) {
				const {
					className: t,
					count: r,
					maxCount: n,
					onChange: o,
					powerups: s
				} = e, {
					tier: c,
					tiersInfo: i
				} = s, d = (i[c] || i[c - 1]).powerupsCost;
				if (!d) return null;
				const u = Math.min(d, d / 2 + s.count / 2, s.count + (r || 0) / 2) / d;
				return a.a.createElement("div", {
					className: Object(l.a)(t, ee.a.container)
				}, a.a.createElement($, {
					additionalCount: r,
					className: ee.a.bar,
					count: s.count,
					maxCount: d
				}), a.a.createElement(X, {
					className: ee.a.count,
					style: {
						left: `${100*u}%`
					},
					value: r,
					min: 1,
					max: n,
					onChange: o
				}))
			};
			const {
				fbt: re
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var ne = function(e) {
					const {
						className: t,
						subredditId: r
					} = e, s = Object(h.useStripe)(), c = Object(h.useElements)(), i = Object(R.a)(), d = Object(o.e)(j.d), l = Object(o.e)(j.e), u = Object(o.e)(e => Object(x.d)(e, {
						subredditId: r
					})), m = Object(o.e)(e => Object(x.b)(e, {
						subredditId: r
					})), p = Object(o.e)(_.w), f = Object(o.e)(_.m), b = Object(o.e)(k.k), [g, y] = Object(n.useState)(!1), v = f || p;
					return a.a.createElement(L.l, {
						onClick: async () => {
							if (!(s && c && u && m)) return;
							y(!0);
							const e = await i(Object(w.k)({
								stripe: s,
								stripeElements: c,
								productOffer: u,
								pricePackage: m,
								productsCount: l,
								extraParams: {
									powerUps: {
										subredditId: r,
										isAnonymous: d
									}
								}
							}));
							Object(w.d)(e) && e.success && b && await i(Object(w.i)({
								subredditId: r,
								powerupsCount: l,
								user: b,
								isAnonymous: d
							})), y(!1)
						},
						className: t,
						disabled: v || !s || g
					}, g ? a.a.createElement(D.a, {
						sizePx: 12,
						center: !0
					}) : re._("Complete purchase", null, {
						hk: "KaR26"
					}))
				},
				ae = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/index.m.less"),
				oe = r.n(ae);
			const {
				fbt: se
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ce = 100, ie = Object(i.c)({
				isAnonymous: j.d,
				isNightMode: k.bb,
				paypalErrorMessage: _.d,
				powerups: j.k,
				powerupsCount: j.e,
				powerupPrice: x.c,
				stripeErrorMessage: _.j,
				userPowerupsData: j.z
			});
			var de = Object(o.b)(ie)((function(e) {
					const {
						isAnonymous: t,
						isNightMode: r,
						onCloseModal: s,
						paypalErrorMessage: c,
						powerups: i,
						powerupsCount: d,
						powerupPrice: l,
						stripeErrorMessage: u,
						subredditId: m,
						userPowerupsData: p
					} = e, f = Object(o.d)(), [b, j] = Object(n.useState)(v.Hb);
					Object(n.useEffect)(() => {
						f(Object(w.e)()), f(Object(O.selectPaymentMethod)(b))
					}, []);
					const x = Object(g.b)(),
						_ = Object(y.a)();
					Object(n.useEffect)(() => {
						_(Object(P.i)())
					}, []);
					const k = Object(T.a)();
					if (!l || !i) return s(), null;
					const R = Object(E.b)(d * l, {
							locale: x
						}),
						L = !!(null == p ? void 0 : p.freeCount);
					return a.a.createElement(h.Elements, {
						stripe: k
					}, a.a.createElement(a.a.Fragment, null, a.a.createElement(te, {
						className: oe.a.progressControl,
						count: d,
						maxCount: L && p ? p.freeCount : ce,
						onChange: e => f(Object(C.j)(e)),
						powerups: i
					}), a.a.createElement("div", {
						className: oe.a.details
					}, a.a.createElement(M.a, {
						className: oe.a.anonymousCheckbox,
						isSelected: t,
						onClick: () => (e => f(Object(C.c)(e)))(!t),
						text: se._("Powerup anonymously", null, {
							hk: "YXX31"
						})
					}), !L && a.a.createElement("div", {
						className: oe.a.purchaseDetails
					}, se._({
						"*": "{powerups} Powerups {powerup price} /mo",
						_1: "1 Powerup {powerup price} /mo"
					}, [se._plural(d, "powerups"), se._param("powerup price", R)], {
						hk: "3cOqa5"
					}))), !L && a.a.createElement(a.a.Fragment, null, a.a.createElement("h3", {
						className: oe.a.paymentMethodTitle
					}, se._("Payment Method", null, {
						hk: "3EbT3q"
					})), a.a.createElement(S.a, {
						className: oe.a.paymentMethodSelector,
						nightmode: r,
						selectedPayment: b,
						onPaymentSelected: e => {
							j(e), f(Object(O.selectPaymentMethod)(e))
						}
					}), b === v.Gb && u && a.a.createElement("div", {
						className: oe.a.errorMessage
					}, u), b === v.Hb && c && a.a.createElement("div", {
						className: oe.a.errorMessage
					}, c), b === v.Gb && a.a.createElement(h.ElementsConsumer, null, ({
						stripe: e
					}) => a.a.createElement(I.a, {
						nightmode: r,
						className: oe.a.stripeForm,
						shouldDeleteCardWithGql: !0,
						stripe: e
					})), b === v.Hb && a.a.createElement(U, {
						className: oe.a.button,
						subredditId: m
					}), b === v.Gb && a.a.createElement(ne, {
						className: oe.a.button,
						subredditId: m
					}), a.a.createElement("p", {
						className: oe.a.description
					}, se._("By completing your purchase, you are agreeing to automatic payments for Powerups and Reddit's {=User Agreement}, {=Privacy Policy}, and {previews terms of use}. Your Powerups subscription will auto-renew monthly for {powerup price} (plus tax where applicable). Cancel anytime in {=User Settings}. Cancel at least 24 hours before your subscription ends to avoid getting charged for the next month. No partial refunds.", [se._param("=User Agreement", a.a.createElement("a", {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, se._("User Agreement", null, {
						hk: "xEA2W"
					}))), se._param("=Privacy Policy", a.a.createElement("a", {
						href: "https://www.redditinc.com/policies/privacy-policy",
						target: "_blank",
						rel: "noopener noreferrer"
					}, se._("Privacy Policy", null, {
						hk: "48zcty"
					}))), se._param("previews terms of use", a.a.createElement(N.a, null)), se._param("powerup price", R), se._param("=User Settings", a.a.createElement("a", {
						href: "/settings/premium",
						target: "_blank"
					}, se._("User Settings", null, {
						hk: "1u8CTh"
					})))], {
						hk: "NLnVj"
					}))), L && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: oe.a.premiumDescription
					}, a.a.createElement("div", {
						className: oe.a.premiumIconWrapper
					}, a.a.createElement(A.a, {
						className: oe.a.premiumIcon
					})), a.a.createElement("span", null, se._("Premium gives you one monthly Powerup", null, {
						hk: "2cKV1a"
					}))), a.a.createElement(H, {
						className: oe.a.button,
						subredditId: m
					}))))
				})),
				le = r("./src/reddit/components/Econ/PowerupsPurchaseModal/index.m.less"),
				ue = r.n(le);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: pe
			} = r("./node_modules/fbt/lib/FbtPublic.js"), fe = Object(b.u)(), be = Object(i.c)({
				currentSubreddit: c.t
			}), he = Object(o.b)(be);
			const ge = Object(d.a)(fe(he((function(e) {
				const {
					currentSubreddit: t
				} = e, r = Object(o.d)(), n = () => r(Object(u.g)(f.a.ECON_POWERUPS_PURCHASE));
				return t ? a.a.createElement(a.a.Fragment, null, a.a.createElement(p.a, {
					className: ue.a.header,
					title: pe._("Powerup {r/community}", [pe._param("r/community", t.displayText)], {
						hk: "2HkBNV"
					}),
					subtitle: pe._("Unlock perks for the whole community", null, {
						hk: "faCTq"
					})
				}), a.a.createElement(de, {
					subredditId: t.id,
					onCloseModal: n
				}), a.a.createElement(m.a, {
					onClick: n,
					highContrast: !0
				}), a.a.createElement(s.a, {
					space: s.b.MODAL
				})) : (n(), null)
			}))));
			t.default = e => a.a.createElement(ge, me({}, e, {
				className: Object(l.a)(e.className, ue.a.modal)
			}))
		},
		"./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n);
			const {
				fbt: o
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function s({
				className: e
			}) {
				return a.a.createElement("a", {
					href: "https://www.redditinc.com/policies/previews-terms",
					target: "_blank",
					rel: "noopener noreferrer",
					className: e
				}, o._("Previews Terms of Use", null, {
					hk: "2eTczn"
				}))
			}
		},
		"./src/reddit/components/PaymentMethodSelector/index.m.less": function(e, t, r) {
			e.exports = {
				paymentOption: "cc9iRBOTxZHHCpcEduRmM",
				paymentOptionContent: "_1EqrH-JzLp3XTA4g36WIrt",
				isNightMode: "_1BbnbPaXpwTwmI3m0OOyzJ",
				paymentMethodIcon: "_3h70jT0m-MFJMB5LtPpDF5"
			}
		},
		"./src/reddit/components/PaymentMethodSelector/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				s = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				i = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				d = r("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				l = r.n(d);
			const u = e => o.a.createElement("label", {
				className: Object(s.a)(e.className, l.a.paymentOption)
			}, o.a.createElement("input", {
				type: "radio",
				id: e.value,
				name: "payment-option",
				value: e.value,
				checked: e.selectedValue === e.value,
				onChange: e.onChange
			}), o.a.createElement("div", {
				className: Object(s.a)(l.a.paymentOptionContent, {
					[l.a.isNightMode]: e.nightmode
				})
			}, e.children));
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.onPaymentSelected = e => {
						const t = e.target.value,
							{
								gildThingId: r,
								onPaymentSelected: n,
								sendEvent: a
							} = this.props;
						switch (t) {
							case "creditCard":
								a(Object(i.e)(r));
								break;
							case "paypal":
								a(Object(i.f)(r))
						}
						return n(t)
					}
				}
				render() {
					const {
						className: e,
						nightmode: t,
						selectedPayment: r
					} = this.props;
					return o.a.createElement("form", {
						className: e
					}, o.a.createElement("fieldset", null, o.a.createElement(u, {
						nightmode: t,
						selectedValue: r,
						onChange: this.onPaymentSelected,
						value: "paypal"
					}, o.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/paypal.png)`
						}
					})), o.a.createElement(u, {
						nightmode: t,
						selectedValue: r,
						onChange: this.onPaymentSelected,
						value: "creditCard"
					}, o.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/visa.png)`
						}
					}), o.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/mastercard.png)`
						}
					}), o.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/amex.png)`
						}
					}), o.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/discover.jpg)`
						}
					}))))
				}
			}
			t.a = Object(c.c)(m)
		},
		"./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less": function(e, t, r) {
			e.exports = {
				background: "XVwx9Y9K0HdxTdtF2BPW0",
				isModal: "UtfYccpr1yXmbqvp5V4xO",
				isInFeedUnit: "_2hif8-1kZa1knghBW2qHUl",
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
				return m
			}));
			var n, a = r("./src/config.ts"),
				o = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				c = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				d = r("./src/reddit/selectors/user.ts"),
				l = r("./src/reddit/components/PowerupsSidebar/PowerupsBackground.m.less"),
				u = r.n(l);
			! function(e) {
				e[e.SIDEBAR = 0] = "SIDEBAR", e[e.MODAL = 1] = "MODAL", e[e.INFEED_UNIT = 2] = "INFEED_UNIT"
			}(n || (n = {}));
			const m = ({
				space: e
			}) => {
				const t = Object(i.e)(d.bb),
					r = e === n.MODAL,
					s = e === n.INFEED_UNIT;
				return c.a.createElement("div", {
					className: Object(o.a)(u.a.background, {
						[u.a.isNightmodeOn]: t,
						[u.a.isModal]: r,
						[u.a.isInFeedUnit]: s
					})
				}, c.a.createElement("div", {
					className: u.a.colorBlockCorner
				}), c.a.createElement("div", {
					className: u.a.colorBlockThrough
				}), c.a.createElement("div", {
					className: u.a.circleStriped,
					style: {
						backgroundImage: t ? `url(${a.a.assetPath}/img/powerups/linecircle-lightblue.png)` : `url(${a.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), c.a.createElement("div", {
					className: u.a.circleOrangeHollow
				}), c.a.createElement("div", {
					className: u.a.circleDotted,
					style: {
						backgroundImage: `url(${a.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), c.a.createElement("div", {
					className: u.a.circleGreenHollow
				}), c.a.createElement("div", {
					className: u.a.circleYellowHollow
				}))
			}
		},
		"./src/reddit/components/PowerupsSidebar/common/utils.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			}));
			var n = r("./src/config.ts"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				s = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				c = r("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const i = 2,
				d = 3;

			function l(e) {
				return e >= d ? c.a : e >= i ? s.a : o.a
			}

			function u(e) {
				var t;
				const r = !e,
					a = `${n.a.assetPath}/img/powerups/snoovatar_anonymous.svg`;
				return r ? a : null === (t = null == e ? void 0 : e.icon) || void 0 === t ? void 0 : t.url
			}
			const m = ({
				displayName: e,
				score: t
			}) => e || a.fbt._({
				"*": "Anonymous Heroes",
				_1: "Anonymous Hero"
			}, [a.fbt._plural(t)], {
				hk: "8kyEI"
			}).toString()
		},
		"./src/reddit/components/StripePaymentForm/index.m.less": function(e, t, r) {
			e.exports = {
				stripePaymentForm: "_3C3Y0w8uwHP67Nd1zwnetc",
				loadingState: "_1s3l8V8wj-crcjY0qsjkQU",
				savedCardState: "_2G3lMKSaxL8NOzpScQZBXf",
				formState: "_3J9W7a4Xz1X7U1aHZnU68_",
				loader: "_22vTMYASXxqNDPunA2LpXa",
				creditCard: "oqvB7OMBlijvKe8ysqodq",
				saveCardCheckbox: "_2uwrJlaChG36r0DkfvHnki",
				poweredByStripeIcon: "_3uwtIFjWV8xl7_GvDbFCMJ",
				savedCardContainer: "_2MPjzw57JoobRxPmlu8OCb",
				cardImageContainer: "_2UfEtRBZKGHh61YQvN-wG5",
				cardImageContainerNightmode: "_28ZdrJfYvnuJaXkQVMVOGq",
				brandImage: "_2mqcWSE8aspsp1q2xC8qBu",
				cardDetails: "_34-t7dxtgTqGxiuyP72aPD",
				unknownCC: "_2tXz9uqxu-ZiBFsHmFWdV6",
				unknownCc: "_2tXz9uqxu-ZiBFsHmFWdV6",
				expiry: "_2Qg2CXB4yQiIH6KZrB9lRT",
				icon: "_1pvlE-J4rOcSVpJdWYQAm-",
				confirmText: "_3_csWXQHhia1pXrA9w9OLK"
			}
		},
		"./src/reddit/components/StripePaymentForm/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				m = r("./src/reddit/controls/ErrorText/index.tsx");
			const {
				fbt: p
			} = r("./node_modules/fbt/lib/FbtPublic.js"), f = ({
				className: e
			}) => a.a.createElement(m.b, {
				className: e
			}, p._("Error loading Stripe, please refresh the page and try again", null, {
				hk: "2O1NWp"
			}));
			var b = r("./node_modules/fbt/lib/FbtPublic.js"),
				h = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				g = r("./src/config.ts"),
				y = r("./src/reddit/components/CheckoutForm/index.m.less"),
				v = r.n(y);
			const E = Object(s.c)({
				cardCvcValidation: u.f,
				cardExpiryValidation: u.g,
				cardName: u.h,
				cardNumberValidation: u.i,
				nameOnCardValidation: u.k,
				postalCode: u.l
			});
			class P extends a.a.Component {
				constructor() {
					super(...arguments), this.computedStyle = getComputedStyle(document.body), this.state = {
						cardNumberReady: !1,
						cardExpiryReady: !1,
						cardCVCReady: !1
					}, this.onChangeCardName = e => {
						const t = e.currentTarget.value;
						t !== this.props.cardName && this.props.onNameInput(t)
					}, this.onChangePostalCode = e => {
						const t = e.currentTarget.value;
						t !== this.props.postalCode && this.props.onPostalCodeInput(t)
					}, this.onCardNumberReady = () => this.setState({
						cardNumberReady: !0
					}), this.onCardExpiryReady = () => this.setState({
						cardExpiryReady: !0
					}), this.onCardCVCReady = () => this.setState({
						cardCVCReady: !0
					})
				}
				render() {
					const {
						className: e,
						cardCvcValidation: t,
						cardExpiryValidation: r,
						cardName: n,
						cardNumberValidation: o,
						onCardNumberChange: s,
						onCardExpiryChange: i,
						onCardCvcChange: d,
						nameOnCardValidation: l,
						postalCode: u,
						stripe: m
					} = this.props;
					if (!m) return a.a.createElement(f, {
						className: e
					});
					const {
						cardNumberReady: p,
						cardExpiryReady: g,
						cardCVCReady: y
					} = this.state, E = {
						base: {
							lineHeight: "40px",
							color: this.computedStyle.getPropertyValue("--newRedditTheme-bodyText"),
							"::placeholder": {
								color: this.computedStyle.getPropertyValue("--newRedditTheme-metaText")
							}
						}
					};
					return a.a.createElement("div", {
						className: Object(c.a)(v.a.checkoutForm, e)
					}, a.a.createElement("div", {
						className: v.a.formCellWide
					}, a.a.createElement("input", {
						className: Object(c.a)(v.a.cardInput, v.a.nameOnCard, {
							[v.a.cardInputError]: !!l
						}),
						type: "text",
						placeholder: b.fbt._("NAME ON CARD", null, {
							hk: "IgrlQ"
						}).toString(),
						onChange: this.onChangeCardName,
						value: n
					})), a.a.createElement("div", {
						className: v.a.formCell
					}, a.a.createElement(h.CardNumberElement, {
						className: Object(c.a)(v.a.cardInput, {
							[v.a.cardInputError]: !!o
						}),
						onChange: s,
						onReady: this.onCardNumberReady,
						options: {
							placeholder: b.fbt._("CARD NUMBER", null, {
								hk: "3pqMxG"
							}).toString(),
							style: E
						}
					}), !p && a.a.createElement("div", {
						className: v.a.elementPlaceholder
					}, b.fbt._("CARD NUMBER", null, {
						hk: "3pqMxG"
					}))), a.a.createElement("div", {
						className: v.a.formCell
					}, a.a.createElement(h.CardExpiryElement, {
						className: Object(c.a)(v.a.cardInput, {
							[v.a.cardInputError]: !!r
						}),
						onChange: i,
						onReady: this.onCardExpiryReady,
						options: {
							placeholder: b.fbt._("MM/YY", null, {
								hk: "Hou17"
							}).toString(),
							style: E
						}
					}), !g && a.a.createElement("div", {
						className: v.a.elementPlaceholder
					}, b.fbt._("MM/YY", null, {
						hk: "Hou17"
					}))), a.a.createElement("div", {
						className: v.a.formCell
					}, a.a.createElement(h.CardCvcElement, {
						className: Object(c.a)(v.a.cardInput, {
							[v.a.cardInputError]: !!t
						}),
						onChange: d,
						onReady: this.onCardCVCReady,
						options: {
							placeholder: b.fbt._("CCV", null, {
								hk: "dZzZJ"
							}).toString(),
							style: E
						}
					}), !y && a.a.createElement("div", {
						className: v.a.elementPlaceholder
					}, b.fbt._("CCV", null, {
						hk: "dZzZJ"
					}))), a.a.createElement("div", {
						className: v.a.formCell
					}, a.a.createElement("input", {
						className: Object(c.a)(v.a.cardInput, v.a.nameOnCard),
						type: "text",
						onChange: this.onChangePostalCode,
						placeholder: b.fbt._("ZIP CODE", null, {
							hk: "2lJZ4j"
						}).toString(),
						value: u
					})))
				}
			}
			var C = Object(o.b)(E, e => ({
					onCardNumberChange: t => e(Object(d.cardNumberChange)(t)),
					onCardExpiryChange: t => e(Object(d.cardExpiryChange)(t)),
					onCardCvcChange: t => e(Object(d.cardCvcChange)(t)),
					onNameInput: t => e(Object(d.cardNameInput)({
						cardName: t
					})),
					onPostalCodeInput: t => e(Object(d.postalCodeInput)({
						postalCode: t
					}))
				}))(P),
				w = r("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				O = r("./src/reddit/components/StripePaymentForm/index.m.less"),
				j = r.n(O);
			var x = e => {
					const {
						onToggleRememberCard: t,
						rememberCard: r
					} = e, n = Object(h.useStripe)();
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(C, {
						className: j.a.creditCard,
						stripe: n
					}), a.a.createElement(w.a, {
						className: j.a.saveCardCheckbox,
						isSelected: r,
						onClick: t,
						text: b.fbt._("Remember this card", null, {
							hk: "2arVov"
						})
					}), a.a.createElement("a", {
						href: "https://stripe.com",
						target: "_blank"
					}, a.a.createElement("img", {
						className: j.a.poweredByStripeIcon,
						src: `${g.a.assetPath}/img/payment-icons/powered-by-stripe.png`
					})))
				},
				_ = r("./src/reddit/icons/svgs/Trash2/index.tsx");
			const {
				fbt: k
			} = r("./node_modules/fbt/lib/FbtPublic.js"), N = e => 2 === e.length ? e : "0" + e, S = e => {
				switch (e.toLowerCase()) {
					case "visa":
						return `${g.a.assetPath}/img/payment-icons/visa.png`;
					case "mastercard":
						return `${g.a.assetPath}/img/payment-icons/mastercard.png`;
					case "discover":
						return `${g.a.assetPath}/img/payment-icons/discover.jpg`;
					case "american express":
						return `${g.a.assetPath}/img/payment-icons/amex.png`;
					default:
						return null
				}
			};
			class I extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						showConfirmText: !1
					}, this.onTrashCanClick = e => {
						e.preventDefault(), this.setState({
							showConfirmText: !0
						})
					}, this.onConfirmClick = e => {
						e.preventDefault();
						const {
							onDelete: t,
							savedCard: r
						} = this.props;
						t(r.cardId)
					}
				}
				render() {
					const {
						savedCard: e
					} = this.props, t = S(e.brand);
					return a.a.createElement("label", {
						className: j.a.savedCardContainer
					}, a.a.createElement("input", {
						type: "radio",
						name: "use-saved-card",
						checked: !0,
						readOnly: !0
					}), a.a.createElement("div", {
						className: Object(c.a)(j.a.cardImageContainer, {
							[j.a.cardImageContainerNightmode]: this.props.nightmode
						})
					}, t ? a.a.createElement("img", {
						className: j.a.brandImage,
						src: t
					}) : a.a.createElement("span", {
						className: j.a.unknownCC
					}, "CC")), a.a.createElement("div", {
						className: j.a.cardDetails
					}, a.a.createElement("span", null, k._("Card ending in {Credit Card last four digits}", [k._param("Credit Card last four digits", e.last4)], {
						hk: "3dMxMn"
					})), a.a.createElement("span", {
						className: j.a.expiry
					}, k._("Expires {month} / {year}", [k._param("month", N(e.expirationMonth.toString())), k._param("year", e.expirationYear.toString())], {
						hk: "3iXzVI"
					}))), this.state.showConfirmText ? a.a.createElement("button", {
						className: j.a.confirmText,
						onClick: this.onConfirmClick
					}, k._("Confirm", null, {
						hk: "gFhpD"
					})) : a.a.createElement("button", {
						onClick: this.onTrashCanClick
					}, a.a.createElement(_.b, {
						className: j.a.icon
					})))
				}
			}
			var M = I;
			const A = Object(s.c)({
					rememberCard: u.v,
					savedCard: e => Object(u.x)(e)[0],
					stripeInfoLoading: u.w
				}),
				T = Object(o.b)(A, (e, t) => ({
					onClickDeleteCard: r => t.shouldDeleteCardWithGql ? e(Object(i.c)(r)) : e(Object(d.deleteSavedCard)(r)),
					onToggleRememberCard: () => e(Object(d.toggleRememberCard)())
				}));
			class R extends a.a.PureComponent {
				render() {
					const {
						className: e,
						nightmode: t,
						onClickDeleteCard: r,
						onToggleRememberCard: n,
						rememberCard: o,
						savedCard: s,
						stripe: i,
						stripeInfoLoading: d
					} = this.props;
					if (!i) return a.a.createElement(f, {
						className: Object(c.a)(j.a.stripePaymentForm, e)
					});
					const u = d,
						m = !u && s,
						p = !u && !m,
						b = u ? j.a.loadingState : m ? j.a.savedCardState : j.a.formState;
					return a.a.createElement("div", {
						className: Object(c.a)(j.a.stripePaymentForm, b, e)
					}, u && a.a.createElement(l.a, {
						className: j.a.loader,
						sizePx: 60
					}), m && s && a.a.createElement("form", null, a.a.createElement(M, {
						nightmode: t,
						onDelete: r,
						savedCard: s
					})), p && a.a.createElement(x, {
						onToggleRememberCard: n,
						rememberCard: o
					}))
				}
			}
			t.a = T(R)
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, r) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, r) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return E
			})), r.d(t, "c", (function() {
				return P
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/uniqueId.js"),
				o = r.n(a),
				s = r("./node_modules/raf/index.js"),
				c = r.n(s),
				i = r("./node_modules/react/index.js"),
				d = r.n(i),
				l = r("./src/lib/classNames/index.ts"),
				u = r("./src/higherOrderComponents/asModal/index.tsx"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				p = r("./src/reddit/layout/row/Inline/index.tsx"),
				f = r("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				b = r.n(f);
			var h = Object(u.a)(e => {
					const {
						children: t,
						title: r
					} = e;
					return d.a.createElement("div", {
						className: b.a.wrapper
					}, d.a.createElement(p.a, {
						className: b.a.titleRow
					}, r), d.a.createElement("div", {
						className: b.a.detailsContainer
					}, t), d.a.createElement(p.a, {
						className: b.a.buttonRow
					}, d.a.createElement(m.l, {
						className: b.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				g = r("./src/reddit/controls/ErrorText/index.m.less"),
				y = r.n(g);
			class v extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${o()()}`,
						isModalOpen: !1
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					c()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						className: t,
						errorModalBody: r,
						errorModalTitle: a = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: s,
						isModalOpen: c
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(y.a.wrapper, t)
					}, d.a.createElement("span", {
						className: y.a.description,
						ref: this.spanRef
					}, e), s && d.a.createElement("span", {
						className: y.a.moreText,
						onClick: this.toggleModal
					}, o), c && d.a.createElement(h, {
						onConfirmed: this.toggleModal,
						title: a
					}, r || e))
				}
			}
			const E = e => {
					const {
						className: t,
						errorClassName: r,
						errorModalTitle: n,
						fallbackMessage: a,
						messages: o = []
					} = e, s = o.length ? o : a ? [a] : [];
					return s.length ? d.a.createElement("div", {
						className: t
					}, s.map((e, t) => d.a.createElement(v, {
						className: r,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				P = e => d.a.createElement(E, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = v
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
				a = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = r.n(s);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => a.a.createElement("div", {
				className: Object(o.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/endpoints/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return g
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "i", (function() {
				return v
			})), r.d(t, "h", (function() {
				return E
			})), r.d(t, "j", (function() {
				return P
			})), r.d(t, "g", (function() {
				return C
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "e", (function() {
				return O
			})), r.d(t, "d", (function() {
				return j
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "l", (function() {
				return _
			})), r.d(t, "k", (function() {
				return k
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				a = r.n(n),
				o = r("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				s = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				c = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				i = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = r("./src/redditGQL/operations/CreateEconOrder.json"),
				l = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				u = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				m = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				p = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				f = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				b = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				h = r("./src/lib/makeGqlRequest/index.ts");
			const g = (e, t, r, n, o, s) => {
				const c = new a.a(n.price).multipliedBy(o).toFixed();
				return Object(h.a)(e, {
					...d,
					variables: {
						input: {
							nonce: t,
							productId: r.id,
							productVersion: r.version,
							pricePackageId: n.id,
							currency: n.currency,
							price: c,
							productsCount: o.toString(),
							...s
						}
					}
				})
			};
			var y;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(y || (y = {}));
			const v = (e, t, r, n) => Object(h.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				E = (e, t, r, n) => Object(h.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				P = (e, t, r, n) => Object(h.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: r,
						cardId: n
					}
				}),
				C = (e, t, r, n, a) => Object(h.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: r,
						successUrl: n,
						cancelUrl: a
					}
				}),
				w = (e, t, r, n) => Object(h.a)(e, {
					...s,
					variables: {
						nonce: t,
						paymentId: r,
						token: n
					}
				}),
				O = (e, t, r, n) => Object(h.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: r,
						cardId: n
					}
				}),
				j = (e, t, r, n, a) => Object(h.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
						saveCard: a
					}
				}),
				x = (e, t) => Object(h.a)(e, {
					...o,
					variables: {
						orderId: t
					}
				}),
				_ = e => Object(h.a)(e, {
					...b,
					variables: {}
				}),
				k = (e, t) => Object(h.a)(e, {
					...f,
					variables: {
						cardId: t
					}
				})
		},
		"./src/reddit/endpoints/gold/purchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return m
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "i", (function() {
				return y
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "b", (function() {
				return E
			}));
			var n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				s = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/redditGQL/operations/ChangeStripePaymentMethod.json"),
				i = r("./src/reddit/constants/headers.ts"),
				d = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				l = r("./src/reddit/helpers/genericServerError/index.ts"),
				u = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const m = e => e.ok ? e.body.json && e.body.json.errors.length ? {
					...e,
					ok: !1,
					error: Object(u.a)(e)
				} : {
					...e
				} : {
					...e,
					error: e.error || Object(l.a)()
				},
				p = async ({
					coins: e,
					context: t,
					correlationId: r,
					offerContext: o,
					pennies: c,
					rememberCard: l,
					token: u,
					savedCardId: p
				}) => {
					const f = {
							token: u ? u.id : void 0,
							coins: e,
							offer_context: o,
							pennies: c,
							remember_card: l,
							card_id: p,
							correlation_id: r
						},
						b = `${t.apiUrl}/api/v2/gold/stripe/buy_coins`,
						h = Object(d.a)(b);
					return Object(a.a)(Object(s.a)(t, [i.a]), {
						method: n.jb.POST,
						endpoint: h,
						data: f
					}).then(m)
				}, f = async ({
					coins: e,
					context: t,
					correlationId: r,
					gildParams: o,
					isOldReddit: c,
					offerContext: l,
					pennies: u,
					rememberCard: p,
					thingId: f,
					token: b,
					savedCardId: h
				}) => {
					const {
						gildType: g,
						isAnonymous: y,
						message: v
					} = o, E = {
						token: b ? b.id : void 0,
						coins: e,
						offer_context: l,
						pennies: u,
						thing_id: f,
						gild_type: g,
						message: v ? v.trim() : "",
						is_anonymous: y,
						remember_card: p,
						card_id: h,
						correlation_id: r
					}, P = `${t.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, C = c ? P : Object(d.a)(P);
					return Object(a.a)(Object(s.a)(t, [i.a]), {
						method: n.jb.POST,
						endpoint: C,
						data: E
					}).then(m)
				}, b = async ({
					context: e,
					correlationId: t,
					gildParams: r,
					isOldReddit: o,
					pennies: c,
					rememberCard: l,
					thingId: u,
					token: p,
					savedCardId: f
				}) => {
					const {
						gildType: b,
						isAnonymous: h,
						message: g
					} = r, y = {
						token: p ? p.id : void 0,
						thing_id: u,
						award_id: b,
						message: g ? g.trim() : "",
						is_anonymous: h,
						pennies: c,
						remember_card: l,
						card_id: f,
						correlation_id: t
					}, v = `${e.apiUrl}/api/v2/gold/stripe/buy_award`, E = o ? v : Object(d.a)(v);
					return Object(a.a)(Object(s.a)(e, [i.a]), {
						method: n.jb.POST,
						endpoint: E,
						data: y
					}).then(m)
				}, h = async ({
					context: e,
					correlationId: t,
					pennies: r,
					token: o
				}) => {
					const c = {
							token: o.id,
							pennies: r,
							correlation_id: t
						},
						l = `${e.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						u = Object(d.a)(l);
					return Object(a.a)(Object(s.a)(e, [i.a]), {
						method: n.jb.POST,
						endpoint: u,
						data: c
					}).then(m)
				}, g = "paymentInfoUpdated", y = async e => {
					const {
						origin: t
					} = window.location, r = `${t}/settings/premium`, n = new URLSearchParams({
						[g]: "true"
					}), a = await Object(o.a)(e, {
						...c,
						variables: {
							successUrl: `${r}?${n}`,
							cancelUrl: `${r}`
						}
					});
					if (!a.ok) throw new Error("Unable to update payment information");
					return a.body.data.changeStripePaymentMethod.sessionId
				}, v = async (e, t) => {
					const r = {
						card_id: t
					};
					return Object(a.a)(Object(s.a)(e, [i.a]), {
						method: n.jb.POST,
						endpoint: `${e.apiUrl}/api/v2/gold/stripe/delete_creditcard`,
						data: r
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(u.a)(e)
					})
				}, E = async e => Object(a.a)(Object(s.a)(e, [i.a]), {
					method: n.jb.GET,
					endpoint: `${e.apiUrl}/api/v2/gold/stripe/creditcards`
				}).then(e => e.ok ? {
					...e
				} : {
					...e,
					error: Object(u.a)(e)
				})
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/constants/index.ts");
			t.a = () => ({
				type: a.I.SERVER_ERROR,
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
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				a = r("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const r = new n.BigNumber(e),
					a = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(a).toString()
			}

			function s(e, t) {
				return Object(a.b)(parseInt(o(e, t), 10))
			}

			function c(e, t) {
				const r = new n.BigNumber(e),
					a = new n.BigNumber(t || 1);
				return r.multipliedBy(a).toFixed(0)
			}
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			}));
			var n = r("./src/lib/constants/index.ts");
			const a = e => {
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
				o = e => {
					const t = e.body;
					return {
						type: a(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				s = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: o(e)
					} : e
				};
			t.a = o
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "i", (function() {
				return g
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				a = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/reddit/helpers/correlationIdTracker.ts"),
				s = r("./src/reddit/helpers/trackers/gild.ts");
			const c = e => ({
					...a.o(e),
					screen: a.ab(e),
					subreddit: a.ib(e),
					userSubreddit: a.sb(e)
				}),
				i = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === n.f.Moderator,
					isTemporatyAward: !!e.endsAt,
					numberCoins: e.coinPrice,
					numberMonths: Math.floor((e.daysOfPremium || 0) / 30),
					numberCoinsToRecipient: e.coinReward || 0,
					numberCoinsToCommunity: e.subredditCoinReward || 0,
					type: Object(s.getAwardTypeFromAward)(e)
				}),
				d = () => e => ({
					...c(e),
					source: "awards",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...c(t),
					source: "awards",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? i(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, r) => n => ({
					...c(n),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r
				}),
				m = (e, t, r, n) => a => ({
					...c(a),
					source: "create_award",
					action: "upload",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "image",
					actionInfo: n ? {
						reason: n
					} : {
						success: !0
					},
					media: t ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						uploadDuration: r,
						url: e,
						width: t.width
					} : null
				}),
				p = (e, t, r) => n => ({
					...c(n),
					source: "create_award",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "create",
					media: t && e ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						url: e,
						width: t.width
					} : null,
					goldPurchase: r ? i(r) : null
				}),
				f = (e, t, r) => n => ({
					...c(n),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r ? i(r) : null
				}),
				b = (e, t, r) => n => ({
					...c(n),
					source: "awards",
					action: "click",
					noun: r,
					goldPurchase: i(e),
					profile: a.S(n, t),
					subreddit: a.jb(n, t)
				}),
				h = (e, t) => b(e, t, "disable_in_community"),
				g = (e, t) => b(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "getAwardTypeFromAward", (function() {
				return d
			})), r.d(t, "clickGildEvent", (function() {
				return m
			})), r.d(t, "clickRpanGiveAward", (function() {
				return p
			})), r.d(t, "clickAddAward", (function() {
				return f
			})), r.d(t, "clickHideAward", (function() {
				return b
			})), r.d(t, "clickConfirmHideAward", (function() {
				return h
			})), r.d(t, "clickCancelHideAward", (function() {
				return g
			})), r.d(t, "clickAwardReportFlow", (function() {
				return v
			})), r.d(t, "clickCancelAwardReportFlow", (function() {
				return E
			})), r.d(t, "clickFlagAwardUsage", (function() {
				return P
			})), r.d(t, "clickCancelFlagAwardUsage", (function() {
				return C
			})), r.d(t, "clickConfirmFlagAwardUsage", (function() {
				return w
			})), r.d(t, "clickReportAward", (function() {
				return O
			})), r.d(t, "clickCancelReportAward", (function() {
				return j
			})), r.d(t, "clickConfirmReportAward", (function() {
				return x
			})), r.d(t, "viewGildModalEvent", (function() {
				return _
			})), r.d(t, "clickSelectAwardEvent", (function() {
				return k
			})), r.d(t, "triggerAnonymousEvent", (function() {
				return N
			})), r.d(t, "clickMessageInputEvent", (function() {
				return S
			})), r.d(t, "typeMessageInputEvent", (function() {
				return I
			})), r.d(t, "clickLearnMoreLinkEvent", (function() {
				return M
			})), r.d(t, "clickQuestionMarkEvent", (function() {
				return A
			})), r.d(t, "clickConfirmAwardEvent", (function() {
				return T
			})), r.d(t, "clickGetPremiumEvent", (function() {
				return R
			})), r.d(t, "clickAddCoinsButtonEvent", (function() {
				return L
			})), r.d(t, "clickNextButtonEvent", (function() {
				return D
			})), r.d(t, "clickCloseGildModalEvent", (function() {
				return F
			})), r.d(t, "viewKarmaSuccessEvent", (function() {
				return B
			})), r.d(t, "clickFilterEvent", (function() {
				return U
			})), r.d(t, "clickNextFiltersEvent", (function() {
				return G
			})), r.d(t, "clickPreviousFiltersEvent", (function() {
				return q
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				a = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/telemetry/models/GoldPurchase.ts"),
				s = r("./src/reddit/helpers/correlationIdTracker.ts"),
				c = r("./src/reddit/helpers/isComment.ts"),
				i = r("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === n.f.Global && e.awardSubType === n.d.Appreciation ? o.GoldPurchaseType.GidAppreciation : e.awardType === n.f.Global && e.awardSubType === n.d.Premium ? o.GoldPurchaseType.GidPremium : e.awardSubType === n.d.Group ? o.GoldPurchaseType.GidGroup : e.awardType === n.f.Community ? o.GoldPurchaseType.GidCommunity : e.awardType === n.f.Moderator ? o.GoldPurchaseType.GidMod : e.awardType === n.f.Global && e.awardSubType === n.d.Global ? o.GoldPurchaseType.GidGlobal : o.GoldPurchaseType.GidUnknown,
				l = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: d(e),
					...t
				}),
				u = (e, t) => ({
					...a.o(e),
					comment: t ? a.i(e, t) : void 0,
					correlationId: Object(i.b)(e) || Object(s.e)(s.a.GildingFlow, !1),
					post: t ? a.I(e, t) : void 0,
					screen: a.ab(e),
					subreddit: a.ib(e),
					userSubreddit: a.sb(e)
				}),
				m = e => t => ({
					...u(t, e),
					source: Object(c.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold",
					feed: a.r(t)
				}),
				p = e => t => ({
					...u(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				f = e => t => ({
					...u(t, e),
					source: Object(c.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award",
					feed: a.r(t)
				}),
				b = (e, t) => r => ({
					...u(r, t),
					source: Object(c.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				h = (e, t) => r => ({
					...u(r, t),
					source: Object(c.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				g = (e, t) => r => ({
					...u(r, t),
					source: Object(c.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				y = e => (t, r) => n => ({
					...u(n, r),
					source: Object(c.a)(r) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				v = y("award_hovercard_report"),
				E = y("cancel_award_hovercard_report"),
				P = y("flag_award"),
				C = y("cancel_flag_award"),
				w = y("confirm_flag_award"),
				O = y("report_community_award"),
				j = y("cancel_report_community_award"),
				x = y("confirm_report_community_award"),
				_ = (e, t, r) => n => ({
					...u(n, r),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				k = (e, t, r) => n => ({
					...u(n, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, r)
				}),
				N = (e, t) => r => ({
					...u(r, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				S = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				I = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				M = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				A = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				T = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(c.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				R = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(c.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				L = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				D = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				F = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				B = ({
					award: e,
					awardeeKarmaEarned: t,
					awarderKarmaEarned: r,
					numberCoins: n,
					thingId: a
				}) => o => ({
					...u(o, a),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(c.a)(a) ? "comment" : "post",
						awardeeKarmaEarned: t,
						awarderKarmaEarned: r,
						numberCoins: n,
						...l(e)
					}
				}),
				U = e => t => ({
					...u(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				G = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				q = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return b
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "c", (function() {
				return E
			})), r.d(t, "a", (function() {
				return P
			})), r.d(t, "g", (function() {
				return C
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "j", (function() {
				return O
			}));
			var n = r("./src/lib/constants/index.ts"),
				a = r("./src/reddit/models/Gold/ProductOffer.ts"),
				o = r("./src/reddit/selectors/gold/giveAwards.ts"),
				s = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				i = r("./src/reddit/selectors/telemetry.ts"),
				d = r("./src/telemetry/models/GoldPurchase.ts"),
				l = r("./src/telemetry/models/Payment.ts"),
				u = r("./src/reddit/helpers/trackers/gild.ts"),
				m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/helpers/isComment.ts"),
				f = r("./src/reddit/helpers/trackers/communityAwards.ts");
			const b = (e, t) => {
					const {
						thingId: r,
						packageId: l
					} = t, b = !!r, h = o.b(e), g = h ? Object(u.getAwardTypeFromAward)(h) : null, y = b ? g : c.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, v = r ? Object(p.a)(r) ? "comment" : "post" : void 0, E = l || c.t(e), P = [...Object(s.d)(e), ...Object(s.f)(e)].filter(e => e.mobileId === E)[0], C = t.offerContext || (h && 0 === h.coinPrice ? a.a.StorefrontFreeAward : Object(a.d)(P, b)), w = P ? Math.round(1e4 * (P.baselinePennies - P.pennies) / P.baselinePennies) / 100 : 0, O = P ? Math.round(1e4 * (P.coins - P.baselineCoins) / P.coins) / 100 : 0, j = P ? P.baselinePennies !== P.pennies ? `${w}_percent_price` : P.baselineCoins !== P.coins ? `${O}_percent_bonus` : void 0 : void 0, x = y === d.GoldPurchaseType.Premium ? n.yb : P ? P.pennies : void 0;
					return {
						...i.o(e),
						comment: r ? i.i(e, r) : null,
						correlationId: c.r(e) || Object(m.e)(m.a.GoldPayment, !1),
						post: r ? i.I(e, r) : null,
						screen: i.ab(e),
						subreddit: r ? i.ib(e) : null,
						goldPurchase: {
							...h ? Object(f.a)(h) : null,
							type: y,
							gildedContent: b,
							contentType: v,
							numberCoins: P ? P.coins : void 0,
							offerContext: C,
							offerType: j
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: x
						},
						purchase: {
							priceMicros: x
						}
					}
				},
				h = (e, t, r) => n => ({
					...b(n, {
						packageId: t,
						thingId: e,
						offerContext: r
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				g = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				y = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				v = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				E = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				P = (e, t) => r => ({
					...b(r, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				C = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				w = (e, t, r) => n => {
					const a = b(n, {
						packageId: t,
						thingId: e,
						offerContext: r
					});
					return {
						...a,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...a.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...a.goldPurchase,
							source: e ? d.GiveGold : c.o(n) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				O = e => t => {
					var r;
					const n = b(t, {
						thingId: e
					});
					return {
						...n,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...n.payment,
							method: (null === (r = t.platform.currentPage) || void 0 === r ? void 0 : r.queryParams.thanks) ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			}));
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				a = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/reddit/selectors/meta.ts");
			const c = "undefined" == typeof document ? function() {
				const e = Object(o.e)(s.i) || a.DEFAULT_LOCALE;
				return Object(n.isPseudoLocale)(e) ? a.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || a.DEFAULT_LOCALE;
				return Object(n.isPseudoLocale)(e) ? a.DEFAULT_LOCALE : e
			};
			t.a = c;
			const i = () => {
				const e = c(),
					t = Object(o.e)(s.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
		},
		"./src/reddit/hooks/useStripePromise.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return y
			}));
			var n = "https://js.stripe.com/v3",
				a = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
				o = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
				s = null,
				c = function(e) {
					return null !== s ? s : s = new Promise((function(t, r) {
						if ("undefined" != typeof window)
							if (window.Stripe && e && console.warn(o), window.Stripe) t(window.Stripe);
							else try {
								var s = function() {
									for (var e = document.querySelectorAll('script[src^="'.concat(n, '"]')), t = 0; t < e.length; t++) {
										var r = e[t];
										if (a.test(r.src)) return r
									}
									return null
								}();
								s && e ? console.warn(o) : s || (s = function(e) {
									var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
										r = document.createElement("script");
									r.src = "".concat(n).concat(t);
									var a = document.head || document.body;
									if (!a) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
									return a.appendChild(r), r
								}(e)), s.addEventListener("load", (function() {
									window.Stripe ? t(window.Stripe) : r(new Error("Stripe.js not available"))
								})), s.addEventListener("error", (function() {
									r(new Error("Failed to load Stripe.js"))
								}))
							} catch (c) {
								return void r(c)
							} else t(null)
					}))
				},
				i = function(e, t, r) {
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
						return i(e, t, n)
					}))
				},
				m = r("./src/config.ts"),
				p = r("./node_modules/react-redux/es/index.js"),
				f = r("./src/reddit/constants/experiments.ts"),
				b = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const h = Object(b.a)(f.Cc);
			let g = null;

			function y() {
				const e = Object(p.e)(h);
				return g || (g = u(m.a.stripe.apiKey(e))), g
			}
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react-redux/es/index.js");

			function a() {
				return Object(n.d)()
			}
		},
		"./src/reddit/icons/svgs/PowerupTier1/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && a.a.createElement("title", null, e.title), a.a.createElement("path", {
				d: "M28.36 73.65a3.47 3.47 0 01-2.55-1.15l-6.94-7.59a3.47 3.47 0 01-.7-3.63l4.5-10.73h-2.73a3.47 3.47 0 01-2.57-1.15l-6.96-7.57a3.47 3.47 0 01-.65-3.67L25.19 2.62A3.47 3.47 0 0128.35.54l26.28-.2a3.47 3.47 0 012.58 1.16l6.94 7.59a3.47 3.47 0 01.16 4.5l-7.48 9.54c.27.16.52.36.73.6l6.93 7.58a3.47 3.47 0 010 4.7L30.91 72.53a3.47 3.47 0 01-2.55 1.12zM25.44 61.9l2.92 3.17 28.9-31.45-3.77-4.11h-3.47a3.47 3.47 0 01-2.61-5.62l9.67-12.32-3.9-4.26-22.48.16L17.02 38.8l4.42 4.8h6.45a3.47 3.47 0 013.2 4.81L25.44 61.9z",
				fill: "#000"
			}), a.a.createElement("path", {
				d: "M34.43 11.6l19.3-7.78 6.98 7.58-17.57 22.21 10.94-7.58 6.98 7.58-33.62 36.57-6.99-7.58L29.1 47l-10.1.06L12 39.5l22.42-27.9z",
				fill: "#FFD635"
			}), a.a.createElement("path", {
				d: "M27.45 4.01l26.28-.2-17.57 22.22h17.92L20.45 62.6l9.68-23.1-18.12-.01L27.45 4z",
				fill: "#fff"
			}), a.a.createElement("path", {
				d: "M36.12 35.25H18.1l11.74-27 15.34-.13-17.53 22.16h16.28L30.39 48.03l5.73-12.78z",
				fill: "#fff"
			}), a.a.createElement("path", {
				d: "M51.17 26.03H33.62l20-3.03-2.45 3.03zM26.44 48.32l4.34-10.37-7.98 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id,
				"data-testid": "bolt-tier2"
			}, e.title && a.a.createElement("title", null, e.title), a.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), a.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), a.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), a.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), a.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier3/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && a.a.createElement("title", null, e.title), a.a.createElement("path", {
				d: "M27.75 73.66a3.4 3.4 0 01-1.78-.5l-8.53-5.14a3.47 3.47 0 01-1.16-4.7l3.56-6.18h-.1l-8.54-5.18a3.47 3.47 0 01-1.15-4.8l5.78-9.32-7.74-4.68a3.47 3.47 0 01-1.3-4.57L20.15 2.8A3.47 3.47 0 0123.23.94h34.12c.8 0 1.58.27 2.2.78L67.4 8.1a3.47 3.47 0 01.25 5.15L57.52 23.3l5.29 4.5a3.47 3.47 0 010 5.26l-11.15 9.72 4.29 3.66a3.47 3.47 0 010 5.33L29.98 72.84c-.62.53-1.41.82-2.23.82zm-3.82-9.82l3.47 2.12 20.81-16.95-4.18-3.56a3.47 3.47 0 01-1.16-2.67 3.47 3.47 0 011.16-2.63l11.17-9.7-3.33-2.84h-.17a3.47 3.47 0 01-2.44-5.92L60 11.03 56.1 7.86H25.33L14.41 28.91l4.94 2.98h2.1a3.47 3.47 0 012.83 5.33l-6.54 10.6 4.7 2.84h3.11a3.47 3.47 0 013 5.2l-4.62 7.98z",
				fill: "#000"
			}), a.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43-18.67 18.54 6.65-5.17 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#FF4500"
			}), a.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43L53.11 21.7l-1.09 2.5 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#D01427"
			}), a.a.createElement("path", {
				d: "M22.07 4.4h34.8L36.86 24.21l15.17-.03-20.4 18.6h13.55L18.11 65.04 27.36 49 11.84 49l11.4-18.47-14.57-.33 13.4-25.8z",
				fill: "#FF4500"
			}), a.a.createElement("path", {
				d: "M49.56 7.39l-25.65-.1L13.46 27.4l15 .34-11.87 18.88h15.33l-4.22 7.24 10.53-8.74H24.6L44.4 27.09l-14.72.04L49.56 7.39z",
				fill: "#FF8717"
			}), a.a.createElement("path", {
				d: "M30.62 30.06h6.08L22.82 42.71l7.8-12.65zM18.3 24.64l7.5-14.45 16.55.07-14.7 14.59-9.35-.21z",
				fill: "#FFD635"
			}), a.a.createElement("path", {
				d: "M53.18 24.19l-17.55.03 19.7-2.88-2.15 2.85zM47.48 42.82l-17.42-.04 20-3-2.58 3.04zM20.6 54.78l7.01-6.22-4.52 7.84-2.49-1.62zM16.46 36.11l7.1-6.1-4.8 7.75-2.3-1.65z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, r) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/icons/svgs/Trash2/index.m.less"),
				c = r.n(s);
			const i = e => a.a.createElement("svg", {
				className: Object(o.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), a.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = i
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, a, o, s;
			r.d(t, "b", (function() {
					return a
				})), r.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(a || (a = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(o || (o = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/gild.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "g", (function() {
				return s
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			}));
			const n = e => e.gild.gildModalThingId,
				a = e => e.gild.correlationId || void 0,
				o = e => e.gild.isAnonymous,
				s = e => e.gild.isIframed,
				c = e => e.gild.message,
				i = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			}));
			const n = e => e.gild.selectedAward,
				a = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "j", (function() {
				return i
			})), r.d(t, "k", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "l", (function() {
				return b
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "e", (function() {
				return y
			})), r.d(t, "i", (function() {
				return v
			})), r.d(t, "h", (function() {
				return E
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/makeProductOfferKey/index.ts"),
				o = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/models/Payments/index.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				d = (e, {
					subredditId: t,
					type: r
				}) => {
					var n, o, s;
					return t ? e.subreddits.productOffers[Object(a.a)(r, t)] : null === (s = null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === o ? void 0 : o.productOffers) || void 0 === s ? void 0 : s[Object(a.a)(r)]
				},
				l = e => {
					const t = d(e, {
						type: o.c.Coinpack
					});
					return null == t ? void 0 : t[0]
				},
				u = (e, {
					subredditId: t
				}) => {
					const r = d(e, {
						subredditId: t,
						type: o.c.Powerups
					});
					return null == r ? void 0 : r[0]
				},
				m = Object(n.a)(u, e => null == e ? void 0 : e.pricePackages[0]),
				p = Object(n.a)(m, e => null == e ? void 0 : e.price),
				f = e => {
					const t = d(e, {
						type: o.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				b = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === s.b.PayPal || e[0] === s.b.Stripe)(e.requiredPaymentProviders)) : null,
				h = Object(n.a)(f, c.p, (e, t) => b(e, t) || null),
				g = Object(n.a)(h, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				y = Object(n.a)(h, e => (null == e ? void 0 : e[0].price) || null),
				v = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				E = Object(n.a)(v, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "q", (function() {
				return s
			})), r.d(t, "s", (function() {
				return c
			})), r.d(t, "r", (function() {
				return i
			})), r.d(t, "u", (function() {
				return d
			})), r.d(t, "t", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "p", (function() {
				return m
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "n", (function() {
				return f
			})), r.d(t, "o", (function() {
				return b
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "l", (function() {
				return y
			})), r.d(t, "w", (function() {
				return v
			})), r.d(t, "x", (function() {
				return E
			})), r.d(t, "v", (function() {
				return P
			})), r.d(t, "y", (function() {
				return C
			})), r.d(t, "f", (function() {
				return w
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "k", (function() {
				return x
			})), r.d(t, "j", (function() {
				return _
			})), r.d(t, "m", (function() {
				return k
			})), r.d(t, "e", (function() {
				return N
			})), r.d(t, "d", (function() {
				return S
			}));
			var n = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				a = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(a.a)({
				features: {
					goldPurchase: o.a
				}
			});
			const s = e => e.features.goldPurchase.purchaseModal.activePage,
				c = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				i = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				p = e => {
					const t = Object(n.l)(e),
						r = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && r && t.find(e => e.mobileId === r) || null
				},
				f = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				b = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				h = e => e.features.goldPurchase.payment.paymentMethod,
				g = e => e.features.goldPurchase.payment.cardName,
				y = e => e.features.goldPurchase.payment.postalCode,
				v = e => e.features.goldPurchase.payment.savedCardsPending,
				E = e => e.features.goldPurchase.payment.savedCards,
				P = e => e.features.goldPurchase.payment.rememberCard,
				C = e => e.features.goldPurchase.payment.useSavedCard,
				w = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				O = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				j = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				x = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				_ = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				k = e => e.features.goldPurchase.payment.stripeToken.pending,
				N = e => e.features.goldPurchase.payment.paypal.passthrough,
				S = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/redditGQL/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
		},
		"./src/redditGQL/operations/ChangeStripePaymentMethod.json": function(e) {
			e.exports = JSON.parse('{"id":"ce700fb9b230"}')
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
		"./src/redditGQL/operations/UserSavedStripeCards.json": function(e) {
			e.exports = JSON.parse('{"id":"d29c51cfbfe6"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.a9724660cd0ce4c52f6f.js.map