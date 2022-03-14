// https://www.redditstatic.com/desktop2x/GoldTargetedOfferModal.4c1c432b6283708ace78.js
// Retrieved at 3/14/2022, 7:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GoldTargetedOfferModal"], {
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
								var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
								throw i.name = "Invariant Violation", i
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

				function i(e, t, r) {
					return t in e ? Object.defineProperty(e, t, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = r, e
				}

				function s(e, t) {
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
						t % 2 ? s(Object(r), !0).forEach((function(t) {
							i(e, t, r[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
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
								o = !1,
								c = void 0;
							try {
								for (var a, i = e[Symbol.iterator](); !(n = (a = i.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
							} catch (s) {
								o = !0, c = s
							} finally {
								try {
									n || null == i.return || i.return()
								} finally {
									if (o) throw c
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
				var p = function(e) {
						var r = t.useRef(e);
						return t.useEffect((function() {
							r.current = e
						}), [e]), r.current
					},
					b = function(e) {
						return null !== e && "object" === a(e)
					},
					f = function(e, t, r) {
						return b(e) ? Object.keys(e).reduce((function(n, o) {
							var c = !b(t) || ! function e(t, r) {
								if (!b(t) || !b(r)) return t === r;
								var n = Array.isArray(t);
								if (n !== Array.isArray(r)) return !1;
								var o = "[object Object]" === Object.prototype.toString.call(t);
								if (o !== ("[object Object]" === Object.prototype.toString.call(r))) return !1;
								if (!o && !n) return !1;
								var c = Object.keys(t),
									a = Object.keys(r);
								if (c.length !== a.length) return !1;
								for (var i = {}, s = 0; s < c.length; s += 1) i[c[s]] = !0;
								for (var d = 0; d < a.length; d += 1) i[a[d]] = !0;
								var l = Object.keys(i);
								if (l.length !== c.length) return !1;
								var u = t,
									p = r;
								return l.every((function(t) {
									return e(u[t], p[t])
								}))
							}(e[o], t[o]);
							return r.includes(o) ? (c && console.warn("Unsupported prop change: options.".concat(o, " is not a mutable property.")), n) : c ? d(d({}, n || {}), {}, i({}, o, e[o])) : n
						}), null) : null
					},
					m = function(e) {
						if (null === e || b(t = e) && "function" == typeof t.elements && "function" == typeof t.createToken && "function" == typeof t.createPaymentMethod && "function" == typeof t.confirmCardPayment) return e;
						var t;
						throw new Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
					},
					y = function(e) {
						if (function(e) {
								return b(e) && "function" == typeof e.then
							}(e)) return {
							tag: "async",
							stripePromise: Promise.resolve(e).then(m)
						};
						var t = m(e);
						return null === t ? {
							tag: "empty"
						} : {
							tag: "sync",
							stripe: t
						}
					},
					O = t.createContext(null);
				O.displayName = "ElementsContext";
				var j = function(e) {
					var r = e.stripe,
						n = e.options,
						o = e.children,
						c = t.useRef(!1),
						a = t.useRef(!0),
						i = t.useMemo((function() {
							return y(r)
						}), [r]),
						s = l(t.useState((function() {
							return {
								stripe: null,
								elements: null
							}
						})), 2),
						d = s[0],
						u = s[1],
						b = p(r);
					null !== b && b !== r && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), c.current || ("sync" === i.tag && (c.current = !0, u({
						stripe: i.stripe,
						elements: i.stripe.elements(n)
					})), "async" === i.tag && (c.current = !0, i.stripePromise.then((function(e) {
						e && a.current && u({
							stripe: e,
							elements: e.elements(n)
						})
					}))));
					var m = p(n);
					return t.useEffect((function() {
						if (d.elements) {
							var e = f(n, m, ["clientSecret", "fonts"]);
							e && d.elements.update(e)
						}
					}), [n, m, d.elements]), t.useEffect((function() {
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
					}), [d.stripe]), t.createElement(O.Provider, {
						value: d
					}, o)
				};
				j.propTypes = {
					stripe: c.any,
					options: c.object
				};
				var g = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(O), e)
					},
					h = function(e) {
						return (0, e.children)(g("mounts <ElementsConsumer>"))
					};
				h.propTypes = {
					children: c.func.isRequired
				};
				var _ = function(e) {
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
								g("mounts <".concat(o, ">"));
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
									i = void 0 === a ? {} : a,
									s = r.onBlur,
									d = void 0 === s ? v : s,
									l = r.onFocus,
									u = void 0 === l ? v : l,
									b = r.onReady,
									m = void 0 === b ? v : b,
									y = r.onChange,
									O = void 0 === y ? v : y,
									j = r.onEscape,
									h = void 0 === j ? v : j,
									E = r.onClick,
									k = void 0 === E ? v : E,
									w = g("mounts <".concat(o, ">")).elements,
									P = t.useRef(null),
									C = t.useRef(null),
									x = _(m),
									I = _(d),
									S = _(u),
									A = _(k),
									T = _(O),
									N = _(h);
								t.useLayoutEffect((function() {
									if (null == P.current && w && null != C.current) {
										var t = w.create(e, i);
										P.current = t, t.mount(C.current), t.on("ready", (function() {
											return x(t)
										})), t.on("change", T), t.on("blur", I), t.on("focus", S), t.on("escape", N), t.on("click", A)
									}
								}));
								var R = p(i);
								return t.useEffect((function() {
									if (P.current) {
										var e = f(i, R, ["paymentRequest"]);
										e && P.current.update(e)
									}
								}), [i, R]), t.useLayoutEffect((function() {
									return function() {
										P.current && P.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: c,
									ref: C
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
					k = "undefined" == typeof window,
					w = E("auBankAccount", k),
					P = E("card", k),
					C = E("cardNumber", k),
					x = E("cardExpiry", k),
					I = E("cardCvc", k),
					S = E("fpxBank", k),
					A = E("iban", k),
					T = E("idealBank", k),
					N = E("p24Bank", k),
					R = E("epsBank", k),
					M = E("payment", k),
					U = E("paymentRequestButton", k),
					B = E("linkAuthentication", k),
					D = E("shippingAddress", k),
					F = E("afterpayClearpayMessage", k);
				e.AfterpayClearpayMessageElement = F, e.AuBankAccountElement = w, e.CardCvcElement = I, e.CardElement = P, e.CardExpiryElement = x, e.CardNumberElement = C, e.Elements = j, e.ElementsConsumer = h, e.EpsBankElement = R, e.FpxBankElement = S, e.IbanElement = A, e.IdealBankElement = T, e.LinkAuthenticationElement = B, e.P24BankElement = N, e.PaymentElement = M, e.PaymentRequestButtonElement = U, e.ShippingAddressElement = D, e.useElements = function() {
					return g("calls useElements()").elements
				}, e.useStripe = function() {
					return g("calls useStripe()").stripe
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
				return i
			})), r.d(t, "f", (function() {
				return s
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "e", (function() {
				return l
			}));
			var n, o = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(n || (n = {}));
			const c = "USD",
				a = "ETH",
				i = "COINS",
				s = [a, "BTC"],
				d = [i, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				l = {
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
				return l
			}));
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = r("./src/lib/currency/centsToDollars/index.ts"),
				c = r("./src/lib/currency/currencies.ts"),
				a = r("./src/lib/prettyPrintNumber/index.ts"),
				i = r("./src/reddit/helpers/governance/tokens.ts"),
				s = r("./src/reddit/constants/intlSupport.ts");
			const d = (e, {
					locale: t = n.DEFAULT_LOCALE,
					pretty: r,
					formatOptions: o
				} = {}) => {
					const c = Number(e);
					return Object(s.c)() ? r ? Object(a.b)(c) : new Intl.NumberFormat(t, o).format(c) : u(c, r, t)
				},
				l = (e, t = {}) => {
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: a,
						formatOptions: d,
						displayConversion: l,
						forceDecimals: f,
						currency: m = t.currency || (t.type ? b(t.type) : c.c),
						type: y = t.type || (t.currency ? p(t.currency) : c.b.Real)
					} = t, O = Number(e), j = String(e);
					switch (y) {
						case c.b.Reddit: {
							const e = c.e[m],
								t = e ? e() : m;
							return Object(s.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(O) + " " + t : u(O, a, r, t)
						}
						case c.b.Crypto: {
							if (a) {
								return Object(i.c)(j, l) + " " + m
							}
							const e = Number(Object(i.b)(j, l));
							return Object(s.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: m,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : u(e, a, r, m)
						}
						case c.b.Real:
						default: {
							const e = Number(Object(o.a)(j, f));
							return Object(s.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: m,
								currencyDisplay: "symbol",
								notation: a ? "compact" : "standard",
								...d
							}).format(e) : u(e, a, r, m)
						}
					}
				},
				u = (e, t, r, n) => {
					return (t ? Object(a.b)(e) : e.toLocaleString(r)) + (n ? " " + n : "")
				},
				p = e => c.g.includes(e.toUpperCase()) ? c.b.Reddit : c.f.includes(e.toUpperCase()) ? c.b.Crypto : c.b.Real,
				b = e => {
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
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return k
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "e", (function() {
				return C
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "j", (function() {
				return A
			})), r.d(t, "i", (function() {
				return T
			})), r.d(t, "f", (function() {
				return N
			})), r.d(t, "g", (function() {
				return R
			})), r.d(t, "h", (function() {
				return M
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/formatApiError/index.ts"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/constants/modals.ts"),
				s = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				p = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				b = r("./src/reddit/endpoints/gold/purchase.ts"),
				f = r("./src/reddit/helpers/correlationIdTracker.ts"),
				m = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				y = r("./src/reddit/models/Gold/Award.ts"),
				O = r("./src/reddit/models/Gold/ProductOffer.ts"),
				j = r("./src/reddit/models/Toast/index.ts"),
				g = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				h = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				_ = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const v = Object(c.a)(_.u),
				E = Object(c.a)(_.c),
				k = e => async (t, r) => {
					t(v(e)), t(Object(l.h)(i.a.ECON_COIN_PURCHASE))
				}, w = () => async (e, t) => {
					e(E()), e(Object(l.g)(i.a.ECON_COIN_PURCHASE))
				}, P = Object(c.a)(_.y), C = ({
					correlationId: e,
					packageId: t
				}) => async (r, n) => {
					const o = n();
					Object(g.e)(o, t) ? (r(P({
						correlationId: e,
						packageId: t
					})), r(Object(l.i)(i.a.GOLD_TARGETED_OFFER_MODAL))) : a.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${t}`)
				}, x = Object(c.a)(_.t), I = ({
					correlationId: e,
					packageId: t
				}) => async (r, n) => {
					Object(g.c)(n(), t) ? (r(x({
						correlationId: e,
						packageId: t
					})), r(Object(l.i)(i.a.ECON_COIN_PACKAGE_OFFER))) : a.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${t}`)
				}, S = (e, t, r) => async (o, c) => {
					await o(Object(d.c)(e, r));
					const a = c(),
						i = Object(g.p)(a, e);
					if (i) o(k({
						correlationId: r,
						packageId: i,
						thingId: t
					}));
					else {
						const e = Object(g.n)(a),
							t = n.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						o(Object(u.f)({
							kind: j.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, A = (e, t, r) => async (c, a, {
					apiContext: i
				}) => {
					const d = a(),
						{
							coins: l,
							pennies: u
						} = r,
						p = Object(h.r)(d) || Object(f.e)(f.a.GoldPayment, !1);
					let m, y;
					c(Object(s.stripeTokenPending)());
					const j = Object(h.y)(d);
					if (j || (m = await c(Object(s.validateAndCreateStripeToken)(e, t)), y = Object(h.v)(d), m)) try {
						const e = await Object(b.f)({
							coins: l,
							context: i(),
							correlationId: p,
							offerContext: Object(O.d)(r, !1),
							pennies: u,
							rememberCard: y,
							savedCardId: j || void 0,
							token: m
						});
						if (e.error) {
							const t = Object(o.a)(e.error, e.status);
							return void c(Object(s.stripeApiError)(t))
						}
						return c(Object(s.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(f.b)(f.a.GoldPayment)
					} catch (g) {
						const e = Object(o.a)(g);
						c(Object(s.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						c(Object(s.stripeApiError)(e))
					}
				}, T = (e, t, c, a) => async (i, d, {
					apiContext: l
				}) => {
					const u = d(),
						{
							coins: p,
							pennies: j
						} = c,
						g = Object(h.r)(u) || Object(f.e)(f.a.GoldPayment, !1);
					let _, v;
					i(Object(s.stripeTokenPending)());
					const E = Object(h.y)(u);
					if (E || (_ = await i(Object(s.validateAndCreateStripeToken)(e, t)), v = Object(h.v)(u), _)) try {
						const {
							gildModalThingId: e,
							isAnonymous: t,
							message: d,
							selectedAward: h
						} = u.gild;
						if (!e || !h.id) {
							const e = n.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void i(Object(s.stripeApiError)(e))
						}
						const k = h.id,
							P = {
								gildType: k,
								isAnonymous: t,
								message: d
							},
							C = await Object(b.e)({
								coins: p,
								context: l(),
								correlationId: g,
								gildParams: P,
								isOldReddit: a,
								offerContext: Object(O.d)(c, !0),
								pennies: j,
								rememberCard: v,
								savedCardId: E || void 0,
								thingId: e,
								token: _
							});
						if (C.error) {
							const e = Object(o.a)(C.error, C.status);
							return void i(Object(s.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							i(w()), i(Object(s.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: n,
								all_awardings: o,
								coins: c,
								treatment_tags: a
							} = C.body;
							return i(t({
								awardKarmaReceived: n || 0,
								awardId: k,
								awardings: o && o.length ? Object(m.a)(o).map(e => ({
									award: Object(y.h)(e),
									total: e.count
								})) : [],
								coins: c,
								id: e,
								treatmentTags: a
							})), void Object(f.b)(f.a.GoldPayment)
						}
					} catch (k) {
						const e = Object(o.a)(k);
						i(Object(s.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						i(Object(s.stripeApiError)(e))
					}
				}, N = e => async (t, r, {
					apiContext: n
				}) => {
					const c = Object(f.c)(f.a.GoldPayment),
						{
							coins: i,
							pennies: d
						} = e;
					try {
						const e = await Object(p.a)({
							context: n(),
							coins: i,
							pennies: d,
							correlationId: c
						});
						if (e.error) {
							const r = Object(o.a)(e.error);
							return void t(Object(s.paypalApiError)(r))
						} {
							const {
								order_id: t
							} = e.body;
							return t
						}
					} catch (l) {
						a.c.captureException(l);
						const e = Object(o.a)(l);
						t(Object(s.paypalApiError)(e))
					}
				}, R = (e, t) => async (r, n, {
					apiContext: c
				}) => {
					const i = n(),
						d = Object(h.r)(i) || Object(f.e)(f.a.GoldPayment, !1),
						{
							coins: l,
							pennies: u
						} = t;
					try {
						const n = await Object(p.c)({
							context: c(),
							offerContext: Object(O.d)(t, !1),
							orderId: e,
							coins: l,
							pennies: u,
							correlationId: d
						});
						if (n.error) {
							const e = Object(o.a)(n.error);
							return void r(Object(s.paypalApiError)(e))
						} {
							const {
								coins: e
							} = n.body;
							r(Object(s.paymentCompleted)({
								coins: e,
								confirmed: !0
							})), Object(f.b)(f.a.GoldPayment)
						}
					} catch (b) {
						a.c.captureException(b);
						const e = Object(o.a)(b);
						r(Object(s.paypalApiError)(e))
					}
				}, M = (e, t) => async (c, i, {
					apiContext: d
				}) => {
					const l = i(),
						u = Object(h.r)(l) || Object(f.e)(f.a.GoldPayment, !1),
						{
							coins: b,
							pennies: j
						} = t;
					try {
						const {
							gildModalThingId: a,
							isAnonymous: i,
							message: g,
							selectedAward: h
						} = l.gild;
						if (!a || !h) return void c(Object(s.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const _ = h.id,
							v = await Object(p.d)({
								context: d(),
								offerContext: Object(O.d)(t, !0),
								orderId: e,
								coins: b,
								pennies: j,
								thingId: a,
								awardId: _,
								message: g || "",
								isAnonymous: i,
								correlationId: u
							});
						if (v.error) {
							const e = Object(o.a)(v.error);
							c(Object(s.paypalApiError)(e))
						} else {
							c(w());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: n,
								subreddit_coins: o,
								treatment_tags: i
							} = v.body;
							c(Object(s.paymentCompleted)({
								coins: n,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							c(d({
								awardId: _,
								awardKarmaReceived: t || 0,
								awardings: Object(m.a)(e).map(e => ({
									award: Object(y.h)(e),
									total: e.count
								})),
								coins: n,
								id: a,
								subredditCoins: o,
								treatmentTags: i
							})), Object(f.b)(f.a.GoldPayment)
						}
					} catch (g) {
						a.c.captureException(g);
						const e = Object(o.a)(g);
						c(Object(s.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return l
			})), r.d(t, "paymentCompleted", (function() {
				return u
			})), r.d(t, "cardNameInput", (function() {
				return p
			})), r.d(t, "postalCodeInput", (function() {
				return b
			})), r.d(t, "cardNameEmpty", (function() {
				return f
			})), r.d(t, "cardNumberChange", (function() {
				return m
			})), r.d(t, "cardExpiryChange", (function() {
				return y
			})), r.d(t, "cardCvcChange", (function() {
				return O
			})), r.d(t, "stripeTokenPending", (function() {
				return j
			})), r.d(t, "stripeTokenError", (function() {
				return g
			})), r.d(t, "stripeApiError", (function() {
				return h
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return _
			})), r.d(t, "paypalApiError", (function() {
				return v
			})), r.d(t, "toggleRememberCard", (function() {
				return E
			})), r.d(t, "selectSavedCard", (function() {
				return k
			})), r.d(t, "_deleteSavedCard", (function() {
				return w
			})), r.d(t, "deleteSavedCard", (function() {
				return P
			})), r.d(t, "savedCardsPending", (function() {
				return C
			})), r.d(t, "savedCardsSuccess", (function() {
				return x
			})), r.d(t, "loadSavedCards", (function() {
				return I
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/endpoints/gold/purchase.ts"),
				s = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const l = Object(c.a)(d.F),
				u = Object(c.a)(d.A),
				p = Object(c.a)(d.b),
				b = Object(c.a)(d.C),
				f = Object(c.a)(d.a),
				m = Object(c.a)(d.K),
				y = Object(c.a)(d.J),
				O = Object(c.a)(d.I),
				j = Object(c.a)(d.M),
				g = Object(c.a)(d.L),
				h = Object(c.a)(d.H),
				_ = (e, t) => async (r, c) => {
					const a = c(),
						i = Object(s.h)(a),
						d = Object(s.l)(a),
						l = t.getElement(n.CardNumberElement);
					if (!l) return;
					const {
						token: u,
						error: p
					} = await e.createToken(l, {
						name: i,
						address_zip: d
					});
					if (i.trim()) {
						if (!p && u) return u;
						r(g(p || void 0))
					} else {
						const e = o.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(f({
							message: e
						}))
					}
				}, v = Object(c.a)(d.B), E = Object(c.a)(d.N), k = Object(c.a)(d.G), w = Object(c.a)(d.g), P = e => async (t, r, {
					apiContext: n
				}) => {
					t(w(e));
					try {
						const t = await Object(i.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						a.c.captureException(o)
					}
				}, C = Object(c.a)(d.D), x = Object(c.a)(d.E), I = () => async (e, t, {
					apiContext: r
				}) => {
					e(C());
					try {
						const t = await Object(i.b)(r());
						if (t.error) throw new Error(t.error.type);
						const n = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(x(n)), n[0] && e(k(n[0].cardId))
					} catch (n) {
						a.c.captureException(n), e(x([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return w
			})), r.d(t, "c", (function() {
				return I
			})), r.d(t, "a", (function() {
				return A
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/env/index.ts"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				s = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/actions/post.ts"),
				p = r("./src/lib/makeGqlRequest/index.ts"),
				b = r("./src/reddit/actions/economics/powerups/helpers.ts"),
				f = r("./src/redditGQL/operations/PurchaseCatalogProductOffers.json");
			var m = r("./src/reddit/selectors/experiments/econ/index.ts"),
				y = r("./src/reddit/selectors/gold/productOffers.ts"),
				O = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const j = Object(c.a)(O.l),
				g = Object(c.a)(O.m),
				h = Object(c.a)(O.k),
				_ = Object(c.a)(O.o),
				v = Object(c.a)(O.n),
				E = Object(c.a)(O.i),
				k = Object(c.a)(O.j),
				w = e => async (t, r, {
					gqlContext: c
				}) => {
					const d = r();
					if (!Object(m.i)(d)) return t((e => async (t, r, {
						apiContext: c
					}) => {
						t(j());
						const d = r(),
							l = Object(s.O)(d);
						try {
							const r = !l,
								n = await Object(i.b)({
									context: c(),
									correlationId: e,
									shouldUseCurrentOrigin: r
								});
							if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
							const o = n.body;
							t(g(o))
						} catch (u) {
							Object(o.b)() || console.error(u), a.c.captureException(u);
							const e = n.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(h(e))
						}
					})(null == e ? void 0 : e.correlationId));
					const l = Object(y.a)(d);
					if ((null == e ? void 0 : e.forceLoad) || !l) {
						t(_());
						try {
							const e = await (async e => {
								const t = await Object(p.a)(e, {
									...f
								});
								if (!t.ok) {
									const {
										errors: e
									} = t.body, r = Object(b.a)(e);
									throw new Error(r || "Unknown error in requestPurchaseCatalogProductOffers")
								}
								return t.body
							})(c());
							t(E(e.data.coinpacks.offers[0])), t(k(e.data.premium.offers[0]))
						} catch (u) {
							Object(o.b)() || console.error(u), a.c.captureException(u);
							const e = n.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(v(e))
						}
					}
				}, P = Object(c.a)(O.q), C = Object(c.a)(O.r), x = Object(c.a)(O.p), I = (e, t) => async (r, c, {
					apiContext: s
				}) => {
					const d = c();
					if (Object(m.i)(d)) return await r(w());
					r(P());
					try {
						const n = await Object(i.c)({
							awardId: e,
							context: s(),
							correlationId: t
						});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const o = n.body;
						if (!o.coinPackages || !o.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						r(C(o))
					} catch (l) {
						Object(o.b)() || console.error(l), a.c.captureException(l);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(x(e))
					}
				}, S = Object(c.a)(O.h), A = () => async (e, t, {
					gqlContext: r
				}) => {
					var c, s;
					try {
						const t = await Object(i.a)(r());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (c = r.errors) || void 0 === c ? void 0 : c.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (s = r.awards) || void 0 === s ? void 0 : s.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(S({
								awards: r.awards
							})), e(Object(u.B)())
						}
					} catch (p) {
						Object(o.b)() || console.error(p), e(Object(d.f)({
							kind: l.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), a.c.captureException(p)
					}
				}
		},
		"./src/reddit/components/Econ/CoinPackageOfferModal/index.m.less": function(e, t, r) {
			e.exports = {
				body: "_2lEPMg5N0x__b_D4ji0QJU",
				closeButton: "_2Zp6M5zjdSaSF4ZXB19uKv",
				closeIcon: "ZJOEoVpmjNhmNnSnoekp9",
				container: "_3Uo22aCgT6VvU3nOe-yYYj",
				image: "_3zxOPuyt8RD3yfvfjSexwG",
				title: "GmqwvnWH-4Scmcg_LAAq9",
				description: "_3lGo2G9LVVWU_7lEkZKy5s",
				leftSpace: "_1htMHTBYSkl_raAM925lka",
				agreementLink: "_1fs_kLGowvWWEDLJi84Kue",
				buttonContainer: "_1bzBUturR9rsKSEL3VGNfW",
				button: "_3Pnw83HApEfLFKPqFSeYis"
			}
		},
		"./src/reddit/components/Econ/CoinPackageOfferModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/lodash/isNil.js"),
				o = r.n(n),
				c = r("./node_modules/react/index.js"),
				a = r.n(c),
				i = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/config.ts"),
				d = r("./src/higherOrderComponents/asModal/index.tsx"),
				l = r("./src/lib/currency/currencies.ts"),
				u = r("./src/lib/localizeCurrency/index.ts"),
				p = r("./src/reddit/helpers/correlationIdTracker.ts"),
				b = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				f = r("./src/reddit/hooks/useLocale.ts"),
				m = r("./src/reddit/hooks/useTracking.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				O = r("./src/reddit/actions/modal.ts"),
				j = r("./src/reddit/models/Gold/ProductOffer.ts"),
				g = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				h = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				_ = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				v = r("./src/reddit/components/Econ/CoinPackageOfferModal/index.m.less"),
				E = r.n(v);
			const {
				fbt: k
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var w;
			! function(e) {
				e.NEW_PURCHASER = "new_purchaser", e.REPEAT_PURCHASER = "repeat_purchaser"
			}(w || (w = {}));
			const P = [w.NEW_PURCHASER, w.REPEAT_PURCHASER];
			t.default = Object(d.a)((function() {
				const e = Object(f.a)(),
					t = Object(m.a)(),
					r = Object(i.d)(),
					n = Object(i.e)(e => Object(h.r)(e) || Object(p.e)(p.a.GoldPayment, !1)),
					d = Object(i.e)(h.b),
					v = Object(i.e)(e => d && Object(g.c)(e, d)),
					w = Object(i.e)(g.f),
					C = () => {
						r(Object(O.f)())
					};
				if (Object(c.useEffect)(() => {
						v && t(Object(b.i)(void 0, v.mobileId, j.a.StorefrontFreeAward))
					}, []), !v) return C(), null;
				const x = w.find(({
						dealInfo: {
							type: e
						}
					}) => P.includes(e)),
					I = w.length && !o()(x),
					{
						baselineCoins: S,
						baselinePennies: A,
						coins: T,
						pennies: N,
						mobileId: R
					} = I ? x : v,
					M = T - S,
					U = !I && M > 0,
					B = A - N,
					D = N !== A;
				return a.a.createElement(_.e, {
					className: E.a.body
				}, a.a.createElement("button", {
					onClick: () => {
						t(Object(b.b)(void 0, R, j.a.StorefrontFreeAward)), C()
					},
					className: E.a.closeButton
				}, a.a.createElement(_.b, {
					className: E.a.closeIcon
				})), a.a.createElement("div", {
					className: E.a.container
				}, a.a.createElement("div", {
					className: E.a.image,
					style: {
						backgroundImage: `url("${s.a.assetPath}/img/gold/coins-to-award-2x.png")`
					}
				}), a.a.createElement("h4", {
					className: E.a.title
				}, k._("Thanks kind stranger! To keep awarding, get some coins.", null, {
					hk: "2rIhaz"
				})), a.a.createElement("p", {
					className: E.a.description
				}, !D && k._("Buy {coin amount} for {price}", [k._param("coin amount", Object(u.b)(S, {
					locale: e,
					type: l.b.Reddit,
					currency: l.a
				})), k._param("price", Object(u.b)(N, {
					locale: e
				}))], {
					hk: "15hnfi"
				}), I && a.a.createElement("span", {
					className: E.a.leftSpace
				}, k._("and get {coin amount} BONUS coins", [k._param("coin amount", Object(u.a)(M, {
					locale: e
				}))], {
					hk: "26UFcD"
				})), !D && U && a.a.createElement("span", {
					className: E.a.leftSpace
				}, k._("and get {bonus coins} FREE", [k._param("bonus coins", Object(u.b)(S, {
					locale: e,
					type: l.b.Reddit,
					currency: l.a
				}))], {
					hk: "1E3ZU8"
				})), D && k._("Save {baseline price} off normal price!", [k._param("baseline price", Object(u.b)(B, {
					locale: e
				}))], {
					hk: "3DkBgK"
				})), a.a.createElement("p", {
					className: E.a.agreementLink
				}, k._("By purchasing coins, you agree to our {user agreement} and {privacy policy}", [k._param("user agreement", a.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, k._("User Agreement", null, {
					hk: "n6txc"
				}))), k._param("privacy policy", a.a.createElement("a", {
					href: "https://www.redditinc.com/policies/privacy-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, k._("Privacy Policy", null, {
					hk: "11oBec"
				})))], {
					hk: "jKCQS"
				}))), a.a.createElement("div", {
					className: E.a.buttonContainer
				}, a.a.createElement(_.r, {
					className: E.a.button,
					"data-redditstyle": !0,
					onClick: () => {
						t(Object(b.a)(R, j.a.StorefrontFreeAward)), ((e, t) => {
							r(Object(O.f)()), r(Object(y.c)({
								correlationId: t,
								packageId: e
							}))
						})(R, n)
					}
				}, k._("Purchase Coins", null, {
					hk: "3ODyrr"
				}))))
			}))
		},
		"./src/reddit/components/Gold/TargetedOfferModal/index.m.less": function(e, t, r) {
			e.exports = {
				body: "_1UQtkWFUPZx3cvg89p_QO-",
				closeButton: "_2PHvXDbMSTznZwRDUomrbs",
				image: "_2kZDQ62kUfGTcHIrRuMfQI",
				dealTitle: "_3UuGw0seEAMRVnenFXhF5",
				dealDescription: "_2iIqESuZUyMyVKAfMHKOMn",
				deal: "_2FRbR5saJqIMTktiX1pmBx",
				agreementLink: "_1fN_jRgyxLT_P3uWQ3CKY",
				button: "_1hhH7WyB7ddA4S4ouD2FbK"
			}
		},
		"./src/reddit/components/Gold/TargetedOfferModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				c = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				s = r("./src/higherOrderComponents/asModal/index.tsx"),
				d = r("./src/lib/currency/currencies.ts"),
				l = r("./src/lib/localizeCurrency/index.ts"),
				u = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				b = r("./src/reddit/hooks/useLocale.ts"),
				f = r("./src/reddit/hooks/useTracking.ts"),
				m = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				y = r("./src/reddit/actions/modal.ts"),
				O = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				j = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				g = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				h = r("./src/reddit/components/Gold/TargetedOfferModal/index.m.less"),
				_ = r.n(h);
			const v = Object(i.c)({
				correlationId: e => Object(j.r)(e) || Object(u.e)(u.a.GoldPayment, !1),
				dealCoinPackages: O.f,
				purchasePackageId: j.b
			});
			const E = Object(a.b)(v, e => ({
				onClose: () => {
					e(Object(y.f)())
				},
				onPurchaseClick: (t, r) => {
					e(Object(y.f)()), e(Object(m.c)({
						correlationId: r,
						packageId: t.mobileId
					}))
				}
			}));
			t.default = Object(s.a)(E((function(e) {
				const t = Object(b.a)(),
					r = Object(f.a)(),
					{
						correlationId: a,
						dealCoinPackages: i,
						onClose: s,
						onPurchaseClick: u,
						purchasePackageId: m
					} = e,
					y = i.filter(e => e.mobileId === m)[0];
				if (Object(o.useEffect)(() => {
						y && r(Object(p.i)(void 0, y.mobileId))
					}, []), !y) return s(), null;
				const {
					baselineCoins: O,
					baselinePennies: j,
					coins: h,
					dealInfo: v,
					pennies: E,
					mobileId: k
				} = y, w = h - O, P = w > 0, C = j - E, x = E !== j, {
					title: I,
					subtitle: S,
					type: A
				} = v, T = I || ("low_coin_upsell" === A ? n.fbt._("You’re low on coins", null, {
					hk: "2fHrPn"
				}) : n.fbt._("Special Offer!", null, {
					hk: "2wnTrq"
				})), N = S || n.fbt._("Stock up and save with this limited-time offer", null, {
					hk: "2eml5T"
				}), R = P ? n.fbt._("Buy {coin amount} for {price} and get {bonus coins} bonus coins", [n.fbt._param("coin amount", Object(l.b)(O, {
					locale: t,
					type: d.b.Reddit,
					currency: d.a
				})), n.fbt._param("price", Object(l.b)(y.pennies, {
					locale: t
				})), n.fbt._param("bonus coins", Object(l.a)(w, {
					locale: t
				}))], {
					hk: "2ZBhdF"
				}) : x ? n.fbt._("Save {baseline price} off normal price!", [n.fbt._param("baseline price", Object(l.b)(C, {
					locale: t
				}))], {
					hk: "CRTYf"
				}) : y.description;
				return c.a.createElement(g.e, {
					className: _.a.body
				}, c.a.createElement("button", {
					onClick: () => {
						r(Object(p.b)(void 0, k)), s()
					},
					className: _.a.closeButton
				}, c.a.createElement(g.b, null)), c.a.createElement("img", {
					className: _.a.image,
					src: y.images.marketing["2x"].url
				}), c.a.createElement("h4", {
					className: _.a.dealTitle
				}, T), c.a.createElement("p", {
					className: _.a.dealDescription
				}, N), c.a.createElement("h4", {
					className: _.a.deal
				}, R), c.a.createElement("p", {
					className: _.a.agreementLink
				}, n.fbt._("By purchasing coins, you agree to our {user agreement} and {privacy plicy}", [n.fbt._param("user agreement", c.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, n.fbt._("User Agreement", null, {
					hk: "n6txc"
				}))), n.fbt._param("privacy plicy", c.a.createElement("a", {
					href: "https://www.redditinc.com/policies/privacy-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, n.fbt._("Privacy Policy", null, {
					hk: "11oBec"
				})))], {
					hk: "1yjkQh"
				})), c.a.createElement(g.r, {
					className: _.a.button,
					"data-redditstyle": !0,
					onClick: () => {
						r(Object(p.a)(k)), u(y, a)
					}
				}, n.fbt._("Purchase", null, {
					hk: "l3q4W"
				})))
			})))
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "e", (function() {
				return f
			}));
			var n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/omitHeaders/index.ts"),
				a = r("./src/reddit/constants/headers.ts"),
				i = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				s = r("./src/reddit/endpoints/gold/purchase.ts");
			const d = async ({
				buttonId: e,
				context: t,
				correlationId: r
			}) => {
				const d = {
						button_id: e,
						correlation_id: r
					},
					l = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					u = Object(i.a)(l);
				return Object(o.a)(Object(c.a)(t, [a.a]), {
					method: n.jb.POST,
					endpoint: u,
					data: d
				}).then(s.c)
			}, l = async ({
				context: e,
				coins: t,
				pennies: r,
				correlationId: i
			}) => {
				const d = {
					coins: t,
					pennies: r,
					correlation_id: i
				};
				return Object(o.a)(Object(c.a)(e, [a.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(s.c)
			}, u = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: i,
				correlationId: d
			}) => {
				const l = {
					award_id: t,
					correlation_id: d,
					pennies: r,
					thing_id: i
				};
				return Object(o.a)(Object(c.a)(e, [a.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(s.c)
			}, p = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: i,
				pennies: d,
				correlationId: l
			}) => {
				const u = {
					offer_context: t,
					order_id: r,
					coins: i,
					pennies: d,
					correlation_id: l
				};
				return Object(o.a)(Object(c.a)(e, [a.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: u
				}).then(s.c)
			}, b = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: i,
				isAnonymous: d,
				message: l,
				offerContext: u,
				orderId: p,
				pennies: b,
				thingId: f
			}) => {
				const m = {
					award_id: e,
					coins: r,
					correlation_id: i,
					is_anonymous: d,
					message: l,
					offer_context: u,
					order_id: p,
					pennies: b,
					thing_id: f
				};
				return Object(o.a)(Object(c.a)(t, [a.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: m
				}).then(s.c)
			}, f = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: i,
				message: d,
				orderId: l,
				thingId: u
			}) => {
				const p = {
					award_id: e,
					correlation_id: r,
					is_anonymous: i,
					message: d,
					order_id: l,
					thing_id: u
				};
				return Object(o.a)(Object(c.a)(t, [a.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: p
				}).then(s.c)
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "a", (function() {
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

			function i(e, t) {
				const r = new n.BigNumber(e),
					o = new n.BigNumber(t || 1);
				return r.multipliedBy(o).toFixed(0)
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
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "j", (function() {
				return s
			})), r.d(t, "k", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "l", (function() {
				return m
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "i", (function() {
				return g
			})), r.d(t, "h", (function() {
				return h
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/makeProductOfferKey/index.ts"),
				c = r("./src/reddit/models/Gold/ProductOffer.ts"),
				a = r("./src/reddit/models/Payments/index.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const s = e => e.subreddits.api.productOffers.pending,
				d = (e, {
					subredditId: t,
					type: r
				}) => {
					var n, c, a;
					return t ? e.subreddits.productOffers[Object(o.a)(r, t)] : null === (a = null === (c = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === c ? void 0 : c.productOffers) || void 0 === a ? void 0 : a[Object(o.a)(r)]
				},
				l = e => {
					const t = d(e, {
						type: c.c.Coinpack
					});
					return null == t ? void 0 : t[0]
				},
				u = (e, {
					subredditId: t
				}) => {
					const r = d(e, {
						subredditId: t,
						type: c.c.Powerups
					});
					return null == r ? void 0 : r[0]
				},
				p = Object(n.a)(u, e => null == e ? void 0 : e.pricePackages[0]),
				b = Object(n.a)(p, e => null == e ? void 0 : e.price),
				f = e => {
					const t = d(e, {
						type: c.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				m = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === a.b.PayPal || e[0] === a.b.Stripe)(e.requiredPaymentProviders)) : null,
				y = Object(n.a)(f, i.p, (e, t) => m(e, t) || null),
				O = Object(n.a)(y, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				j = Object(n.a)(y, e => (null == e ? void 0 : e[0].price) || null),
				g = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				h = Object(n.a)(g, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/redditGQL/operations/PurchaseCatalogProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"098518521d5b"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GoldTargetedOfferModal.4c1c432b6283708ace78.js.map