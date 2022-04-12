// https://www.redditstatic.com/desktop2x/reddit-components-CoinPurchaseDropdown.a79d27141830bcbb5d36.js
// Retrieved at 4/12/2022, 11:50:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CoinPurchaseDropdown"], {
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
						function e(e, t, n, o, c, s) {
							if (s !== r) {
								var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
								throw a.name = "Invariant Violation", a
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

				function s(e) {
					return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					})(e)
				}

				function a(e, t, r) {
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
							a(e, t, r[t])
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
								o = !1,
								c = void 0;
							try {
								for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
							} catch (i) {
								o = !0, c = i
							} finally {
								try {
									n || null == a.return || a.return()
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
					m = function(e) {
						return null !== e && "object" === s(e)
					},
					b = function(e, t, r) {
						return m(e) ? Object.keys(e).reduce((function(n, o) {
							var c = !m(t) || ! function e(t, r) {
								if (!m(t) || !m(r)) return t === r;
								var n = Array.isArray(t);
								if (n !== Array.isArray(r)) return !1;
								var o = "[object Object]" === Object.prototype.toString.call(t);
								if (o !== ("[object Object]" === Object.prototype.toString.call(r))) return !1;
								if (!o && !n) return !1;
								var c = Object.keys(t),
									s = Object.keys(r);
								if (c.length !== s.length) return !1;
								for (var a = {}, i = 0; i < c.length; i += 1) a[c[i]] = !0;
								for (var d = 0; d < s.length; d += 1) a[s[d]] = !0;
								var l = Object.keys(a);
								if (l.length !== c.length) return !1;
								var u = t,
									p = r;
								return l.every((function(t) {
									return e(u[t], p[t])
								}))
							}(e[o], t[o]);
							return r.includes(o) ? (c && console.warn("Unsupported prop change: options.".concat(o, " is not a mutable property.")), n) : c ? d(d({}, n || {}), {}, a({}, o, e[o])) : n
						}), null) : null
					},
					f = function(e) {
						if (null === e || m(t = e) && "function" == typeof t.elements && "function" == typeof t.createToken && "function" == typeof t.createPaymentMethod && "function" == typeof t.confirmCardPayment) return e;
						var t;
						throw new Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
					},
					h = function(e) {
						if (function(e) {
								return m(e) && "function" == typeof e.then
							}(e)) return {
							tag: "async",
							stripePromise: Promise.resolve(e).then(f)
						};
						var t = f(e);
						return null === t ? {
							tag: "empty"
						} : {
							tag: "sync",
							stripe: t
						}
					},
					y = t.createContext(null);
				y.displayName = "ElementsContext";
				var O = function(e) {
					var r = e.stripe,
						n = e.options,
						o = e.children,
						c = t.useRef(!1),
						s = t.useRef(!0),
						a = t.useMemo((function() {
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
						m = p(r);
					null !== m && m !== r && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), c.current || ("sync" === a.tag && (c.current = !0, u({
						stripe: a.stripe,
						elements: a.stripe.elements(n)
					})), "async" === a.tag && (c.current = !0, a.stripePromise.then((function(e) {
						e && s.current && u({
							stripe: e,
							elements: e.elements(n)
						})
					}))));
					var f = p(n);
					return t.useEffect((function() {
						if (d.elements) {
							var e = b(n, f, ["clientSecret", "fonts"]);
							e && d.elements.update(e)
						}
					}), [n, f, d.elements]), t.useEffect((function() {
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
					}), [d.stripe]), t.createElement(y.Provider, {
						value: d
					}, o)
				};
				O.propTypes = {
					stripe: c.any,
					options: c.object
				};
				var g = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(y), e)
					},
					j = function(e) {
						return (0, e.children)(g("mounts <ElementsConsumer>"))
					};
				j.propTypes = {
					children: c.func.isRequired
				};
				var C = function(e) {
						var r = t.useRef(e);
						return t.useEffect((function() {
								r.current = e
							}), [e]),
							function() {
								r.current && r.current.apply(r, arguments)
							}
					},
					v = function() {},
					P = function(e, r) {
						var n, o = "".concat((n = e).charAt(0).toUpperCase() + n.slice(1), "Element"),
							s = r ? function(e) {
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
									s = r.options,
									a = void 0 === s ? {} : s,
									i = r.onBlur,
									d = void 0 === i ? v : i,
									l = r.onFocus,
									u = void 0 === l ? v : l,
									m = r.onReady,
									f = void 0 === m ? v : m,
									h = r.onChange,
									y = void 0 === h ? v : h,
									O = r.onEscape,
									j = void 0 === O ? v : O,
									P = r.onClick,
									x = void 0 === P ? v : P,
									E = g("mounts <".concat(o, ">")).elements,
									_ = t.useRef(null),
									w = t.useRef(null),
									k = C(f),
									I = C(d),
									A = C(u),
									S = C(x),
									T = C(y),
									N = C(j);
								t.useLayoutEffect((function() {
									if (null == _.current && E && null != w.current) {
										var t = E.create(e, a);
										_.current = t, t.mount(w.current), t.on("ready", (function() {
											return k(t)
										})), t.on("change", T), t.on("blur", I), t.on("focus", A), t.on("escape", N), t.on("click", S)
									}
								}));
								var L = p(a);
								return t.useEffect((function() {
									if (_.current) {
										var e = b(a, L, ["paymentRequest"]);
										e && _.current.update(e)
									}
								}), [a, L]), t.useLayoutEffect((function() {
									return function() {
										_.current && _.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: c,
									ref: w
								})
							};
						return s.propTypes = {
							id: c.string,
							className: c.string,
							onChange: c.func,
							onBlur: c.func,
							onFocus: c.func,
							onReady: c.func,
							onClick: c.func,
							options: c.object
						}, s.displayName = o, s.__elementType = e, s
					},
					x = "undefined" == typeof window,
					E = P("auBankAccount", x),
					_ = P("card", x),
					w = P("cardNumber", x),
					k = P("cardExpiry", x),
					I = P("cardCvc", x),
					A = P("fpxBank", x),
					S = P("iban", x),
					T = P("idealBank", x),
					N = P("p24Bank", x),
					L = P("epsBank", x),
					D = P("payment", x),
					M = P("paymentRequestButton", x),
					R = P("linkAuthentication", x),
					B = P("shippingAddress", x),
					F = P("afterpayClearpayMessage", x);
				e.AfterpayClearpayMessageElement = F, e.AuBankAccountElement = E, e.CardCvcElement = I, e.CardElement = _, e.CardExpiryElement = k, e.CardNumberElement = w, e.Elements = O, e.ElementsConsumer = j, e.EpsBankElement = L, e.FpxBankElement = A, e.IbanElement = S, e.IdealBankElement = T, e.LinkAuthenticationElement = R, e.P24BankElement = N, e.PaymentElement = D, e.PaymentRequestButtonElement = M, e.ShippingAddressElement = B, e.useElements = function() {
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
				return s
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "f", (function() {
				return i
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
				s = "ETH",
				a = "COINS",
				i = [s, "BTC"],
				d = [a, "SUBREDDIT_POINTS", "GAME_TOKENS"],
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
				s = r("./src/lib/prettyPrintNumber/index.ts"),
				a = r("./src/reddit/helpers/governance/tokens.ts"),
				i = r("./src/reddit/constants/intlSupport.ts");
			const d = function(e) {
					let {
						locale: t = n.DEFAULT_LOCALE,
						pretty: r,
						formatOptions: o
					} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const c = Number(e);
					return Object(i.c)() ? r ? Object(s.b)(c) : new Intl.NumberFormat(t, o).format(c) : u(c, r, t)
				},
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: s,
						formatOptions: d,
						displayConversion: l,
						forceDecimals: b,
						currency: f = t.currency || (t.type ? m(t.type) : c.c),
						type: h = t.type || (t.currency ? p(t.currency) : c.b.Real)
					} = t, y = Number(e), O = String(e);
					switch (h) {
						case c.b.Reddit: {
							const e = c.e[f],
								t = e ? e() : f;
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(y) + " " + t : u(y, s, r, t)
						}
						case c.b.Crypto: {
							if (s) {
								return Object(a.c)(O, l) + " " + f
							}
							const e = Number(Object(a.b)(O, l));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : u(e, s, r, f)
						}
						case c.b.Real:
						default: {
							const e = Number(Object(o.a)(O, b));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								notation: s ? "compact" : "standard",
								...d
							}).format(e) : u(e, s, r, f)
						}
					}
				},
				u = (e, t, r, n) => {
					return (t ? Object(s.b)(e) : e.toLocaleString(r)) + (n ? " " + n : "")
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
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return x
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "e", (function() {
				return w
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "j", (function() {
				return S
			})), r.d(t, "i", (function() {
				return T
			})), r.d(t, "f", (function() {
				return N
			})), r.d(t, "g", (function() {
				return L
			})), r.d(t, "h", (function() {
				return D
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/formatApiError/index.ts"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				p = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				m = r("./src/reddit/endpoints/gold/purchase.ts"),
				b = r("./src/reddit/helpers/correlationIdTracker.ts"),
				f = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				h = r("./src/reddit/models/Gold/Award.ts"),
				y = r("./src/reddit/models/Gold/ProductOffer.ts"),
				O = r("./src/reddit/models/Toast/index.ts"),
				g = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				j = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				C = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const v = Object(c.a)(C.u),
				P = Object(c.a)(C.c),
				x = e => async (t, r) => {
					t(v(e)), t(Object(l.h)(a.a.ECON_COIN_PURCHASE))
				}, E = () => async (e, t) => {
					e(P()), e(Object(l.g)(a.a.ECON_COIN_PURCHASE))
				}, _ = Object(c.a)(C.y), w = e => {
					let {
						correlationId: t,
						packageId: r
					} = e;
					return async (e, n) => {
						const o = n();
						Object(g.e)(o, r) ? (e(_({
							correlationId: t,
							packageId: r
						})), e(Object(l.i)(a.a.GOLD_TARGETED_OFFER_MODAL))) : s.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${r}`)
					}
				}, k = Object(c.a)(C.t), I = e => {
					let {
						correlationId: t,
						packageId: r
					} = e;
					return async (e, n) => {
						Object(g.c)(n(), r) ? (e(k({
							correlationId: t,
							packageId: r
						})), e(Object(l.i)(a.a.ECON_COIN_PACKAGE_OFFER))) : s.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${r}`)
					}
				}, A = (e, t, r) => async (o, c) => {
					await o(Object(d.c)(e, r));
					const s = c(),
						a = Object(g.p)(s, e);
					if (a) o(x({
						correlationId: r,
						packageId: a,
						thingId: t
					}));
					else {
						const e = Object(g.n)(s),
							t = n.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						o(Object(u.f)({
							kind: O.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, S = (e, t, r) => async (c, s, a) => {
					let {
						apiContext: d
					} = a;
					const l = s(),
						{
							coins: u,
							pennies: p
						} = r,
						f = Object(j.r)(l) || Object(b.e)(b.a.GoldPayment, !1);
					let h, O;
					c(Object(i.stripeTokenPending)());
					const g = Object(j.y)(l);
					if (g || (h = await c(Object(i.validateAndCreateStripeToken)(e, t)), O = Object(j.v)(l), h)) try {
						const e = await Object(m.f)({
							coins: u,
							context: d(),
							correlationId: f,
							offerContext: Object(y.d)(r, !1),
							pennies: p,
							rememberCard: O,
							savedCardId: g || void 0,
							token: h
						});
						if (e.error) {
							const t = Object(o.a)(e.error, e.status);
							return void c(Object(i.stripeApiError)(t))
						}
						return c(Object(i.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(b.b)(b.a.GoldPayment)
					} catch (C) {
						const e = Object(o.a)(C);
						c(Object(i.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						c(Object(i.stripeApiError)(e))
					}
				}, T = (e, t, c, s) => async (a, d, l) => {
					let {
						apiContext: u
					} = l;
					const p = d(),
						{
							coins: O,
							pennies: g
						} = c,
						C = Object(j.r)(p) || Object(b.e)(b.a.GoldPayment, !1);
					let v, P;
					a(Object(i.stripeTokenPending)());
					const x = Object(j.y)(p);
					if (x || (v = await a(Object(i.validateAndCreateStripeToken)(e, t)), P = Object(j.v)(p), v)) try {
						const {
							gildModalThingId: e,
							isAnonymous: t,
							message: d,
							selectedAward: l
						} = p.gild;
						if (!e || !l.id) {
							const e = n.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void a(Object(i.stripeApiError)(e))
						}
						const j = l.id,
							_ = {
								gildType: j,
								isAnonymous: t,
								message: d
							},
							w = await Object(m.e)({
								coins: O,
								context: u(),
								correlationId: C,
								gildParams: _,
								isOldReddit: s,
								offerContext: Object(y.d)(c, !0),
								pennies: g,
								rememberCard: P,
								savedCardId: x || void 0,
								thingId: e,
								token: v
							});
						if (w.error) {
							const e = Object(o.a)(w.error, w.status);
							return void a(Object(i.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							a(E()), a(Object(i.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: n,
								all_awardings: o,
								coins: c,
								treatment_tags: s
							} = w.body;
							return a(t({
								awardKarmaReceived: n || 0,
								awardId: j,
								awardings: o && o.length ? Object(f.a)(o).map(e => ({
									award: Object(h.h)(e),
									total: e.count
								})) : [],
								coins: c,
								id: e,
								treatmentTags: s
							})), void Object(b.b)(b.a.GoldPayment)
						}
					} catch (_) {
						const e = Object(o.a)(_);
						a(Object(i.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						a(Object(i.stripeApiError)(e))
					}
				}, N = e => async (t, r, n) => {
					let {
						apiContext: c
					} = n;
					const a = Object(b.c)(b.a.GoldPayment),
						{
							coins: d,
							pennies: l
						} = e;
					try {
						const e = await Object(p.a)({
							context: c(),
							coins: d,
							pennies: l,
							correlationId: a
						});
						if (e.error) {
							const r = Object(o.a)(e.error);
							return void t(Object(i.paypalApiError)(r))
						} {
							const {
								order_id: t
							} = e.body;
							return t
						}
					} catch (u) {
						s.c.captureException(u);
						const e = Object(o.a)(u);
						t(Object(i.paypalApiError)(e))
					}
				}, L = (e, t) => async (r, n, c) => {
					let {
						apiContext: a
					} = c;
					const d = n(),
						l = Object(j.r)(d) || Object(b.e)(b.a.GoldPayment, !1),
						{
							coins: u,
							pennies: m
						} = t;
					try {
						const n = await Object(p.c)({
							context: a(),
							offerContext: Object(y.d)(t, !1),
							orderId: e,
							coins: u,
							pennies: m,
							correlationId: l
						});
						if (n.error) {
							const e = Object(o.a)(n.error);
							return void r(Object(i.paypalApiError)(e))
						} {
							const {
								coins: e
							} = n.body;
							r(Object(i.paymentCompleted)({
								coins: e,
								confirmed: !0
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (f) {
						s.c.captureException(f);
						const e = Object(o.a)(f);
						r(Object(i.paypalApiError)(e))
					}
				}, D = (e, t) => async (c, a, d) => {
					let {
						apiContext: l
					} = d;
					const u = a(),
						m = Object(j.r)(u) || Object(b.e)(b.a.GoldPayment, !1),
						{
							coins: O,
							pennies: g
						} = t;
					try {
						const {
							gildModalThingId: s,
							isAnonymous: a,
							message: d,
							selectedAward: j
						} = u.gild;
						if (!s || !j) return void c(Object(i.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const C = j.id,
							v = await Object(p.d)({
								context: l(),
								offerContext: Object(y.d)(t, !0),
								orderId: e,
								coins: O,
								pennies: g,
								thingId: s,
								awardId: C,
								message: d || "",
								isAnonymous: a,
								correlationId: m
							});
						if (v.error) {
							const e = Object(o.a)(v.error);
							c(Object(i.paypalApiError)(e))
						} else {
							c(E());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: n,
								subreddit_coins: o,
								treatment_tags: a
							} = v.body;
							c(Object(i.paymentCompleted)({
								coins: n,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							c(d({
								awardId: C,
								awardKarmaReceived: t || 0,
								awardings: Object(f.a)(e).map(e => ({
									award: Object(h.h)(e),
									total: e.count
								})),
								coins: n,
								id: s,
								subredditCoins: o,
								treatmentTags: a
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (C) {
						s.c.captureException(C);
						const e = Object(o.a)(C);
						c(Object(i.paypalApiError)(e))
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
				return m
			})), r.d(t, "cardNameEmpty", (function() {
				return b
			})), r.d(t, "cardNumberChange", (function() {
				return f
			})), r.d(t, "cardExpiryChange", (function() {
				return h
			})), r.d(t, "cardCvcChange", (function() {
				return y
			})), r.d(t, "stripeTokenPending", (function() {
				return O
			})), r.d(t, "stripeTokenError", (function() {
				return g
			})), r.d(t, "stripeApiError", (function() {
				return j
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return C
			})), r.d(t, "paypalApiError", (function() {
				return v
			})), r.d(t, "toggleRememberCard", (function() {
				return P
			})), r.d(t, "selectSavedCard", (function() {
				return x
			})), r.d(t, "_deleteSavedCard", (function() {
				return E
			})), r.d(t, "deleteSavedCard", (function() {
				return _
			})), r.d(t, "savedCardsPending", (function() {
				return w
			})), r.d(t, "savedCardsSuccess", (function() {
				return k
			})), r.d(t, "loadSavedCards", (function() {
				return I
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				a = r("./src/reddit/endpoints/gold/purchase.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const l = Object(c.a)(d.F),
				u = Object(c.a)(d.A),
				p = Object(c.a)(d.b),
				m = Object(c.a)(d.C),
				b = Object(c.a)(d.a),
				f = Object(c.a)(d.K),
				h = Object(c.a)(d.J),
				y = Object(c.a)(d.I),
				O = Object(c.a)(d.M),
				g = Object(c.a)(d.L),
				j = Object(c.a)(d.H),
				C = (e, t) => async (r, c) => {
					const s = c(),
						a = Object(i.h)(s),
						d = Object(i.l)(s),
						l = t.getElement(n.CardNumberElement);
					if (!l) return;
					const {
						token: u,
						error: p
					} = await e.createToken(l, {
						name: a,
						address_zip: d
					});
					if (a.trim()) {
						if (!p && u) return u;
						r(g(p || void 0))
					} else {
						const e = o.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(b({
							message: e
						}))
					}
				}, v = Object(c.a)(d.B), P = Object(c.a)(d.N), x = Object(c.a)(d.G), E = Object(c.a)(d.g), _ = e => async (t, r, n) => {
					let {
						apiContext: o
					} = n;
					t(E(e));
					try {
						const t = await Object(a.a)(o(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (c) {
						s.c.captureException(c)
					}
				}, w = Object(c.a)(d.D), k = Object(c.a)(d.E), I = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					e(w());
					try {
						const t = await Object(a.b)(n());
						if (t.error) throw new Error(t.error.type);
						const r = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(k(r)), r[0] && e(x(r[0].cardId))
					} catch (o) {
						s.c.captureException(o), e(k([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "setPremiumPurchaseModalInfo", (function() {
				return y
			})), r.d(t, "clearPremiumPurchaseModalInfo", (function() {
				return O
			})), r.d(t, "openPremiumPurchaseModal", (function() {
				return g
			})), r.d(t, "closePremiumPurchaseModal", (function() {
				return j
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return C
			})), r.d(t, "paymentBlobCreated", (function() {
				return v
			})), r.d(t, "openWithBlob", (function() {
				return P
			}));
			var n = r("./src/config.ts"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				a = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/formatApiError/index.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/constants/modals.ts"),
				p = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				m = r("./src/reddit/endpoints/gold/purchase.ts"),
				b = r("./src/reddit/helpers/correlationIdTracker.ts"),
				f = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const y = Object(c.a)(h.x),
				O = Object(c.a)(h.e),
				g = (e, t) => async r => {
					r(y(e)), r(Object(l.h)(u.a.ECON_PREMIUM_PURCHASE, t))
				}, j = () => async e => {
					e(Object(l.g)(u.a.ECON_PREMIUM_PURCHASE)), e(O())
				}, C = (e, t) => async (r, n, c) => {
					let {
						apiContext: s
					} = c;
					const l = Object(f.a)(n()),
						u = (null == l ? void 0 : l.pennies) || a.yb,
						p = Object(b.c)(b.a.GoldPayment);
					r(Object(d.stripeTokenPending)());
					const h = await r(Object(d.validateAndCreateStripeToken)(e, t));
					if (h) try {
						const e = await Object(m.h)({
							context: s(),
							correlationId: p,
							pennies: u,
							token: h
						});
						if (e.error) {
							const t = Object(i.a)(e.error);
							r(Object(d.stripeApiError)(t))
						} else r(Object(d.paymentCompleted)({
							confirmed: !1
						}))
					} catch (y) {
						const e = Object(i.a)(y);
						r(Object(d.stripeApiError)(e))
					} else {
						const e = o.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						r(Object(d.stripeApiError)(e))
					}
				}, v = Object(c.a)(h.z), P = (e, t) => {
					let {
						packageId: r,
						correlationId: o
					} = e;
					return async (e, c, a) => {
						let {
							apiContext: l
						} = a;
						e(g({
							packageId: r,
							correlationId: o
						}, t));
						const u = Object(f.a)(c()),
							m = (null == u ? void 0 : u.paypalButtonId) || n.a.paypal.buttons.premium;
						if (m) try {
							const t = await Object(p.f)({
								buttonId: m,
								context: l(),
								correlationId: o
							});
							if (t.error) {
								const r = Object(i.a)(t.error);
								e(Object(d.paypalApiError)(r))
							} else e(v(t))
						} catch (b) {
							const t = Object(i.a)(b);
							e(Object(d.paypalApiError)(t))
						} else s.c.captureMessage("No Premium packages available on Premium purchase modal")
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return E
			})), r.d(t, "c", (function() {
				return I
			})), r.d(t, "a", (function() {
				return S
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/env/index.ts"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				a = r("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				i = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/actions/post.ts"),
				p = r("./src/lib/makeGqlRequest/index.ts"),
				m = r("./src/reddit/actions/economics/powerups/helpers.ts"),
				b = r("./src/redditGQL/operations/PurchaseCatalogProductOffers.json");
			var f = r("./src/reddit/selectors/experiments/econ/index.ts"),
				h = r("./src/reddit/selectors/gold/productOffers.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const O = Object(c.a)(y.l),
				g = Object(c.a)(y.m),
				j = Object(c.a)(y.k),
				C = Object(c.a)(y.o),
				v = Object(c.a)(y.n),
				P = Object(c.a)(y.i),
				x = Object(c.a)(y.j),
				E = e => async (t, r, c) => {
					let {
						gqlContext: d
					} = c;
					const l = r();
					if (!Object(f.h)(l)) return t((e => async (t, r, c) => {
						let {
							apiContext: d
						} = c;
						t(O());
						const l = r(),
							u = Object(i.Q)(l);
						try {
							const r = !u,
								n = await Object(a.b)({
									context: d(),
									correlationId: e,
									shouldUseCurrentOrigin: r
								});
							if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
							const o = n.body;
							t(g(o))
						} catch (p) {
							Object(o.b)() || console.error(p), s.c.captureException(p);
							const e = n.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(j(e))
						}
					})(null == e ? void 0 : e.correlationId));
					const u = Object(h.a)(l);
					if ((null == e ? void 0 : e.forceLoad) || !u) {
						t(C());
						try {
							const e = await (async e => {
								const t = await Object(p.a)(e, {
									...b
								});
								if (!t.ok) {
									const {
										errors: e
									} = t.body, r = Object(m.a)(e);
									throw new Error(r || "Unknown error in requestPurchaseCatalogProductOffers")
								}
								return t.body
							})(d());
							t(P(e.data.coinpacks.offers[0])), t(x(e.data.premium.offers[0]))
						} catch (y) {
							Object(o.b)() || console.error(y), s.c.captureException(y);
							const e = n.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(v(e))
						}
					}
				}, _ = Object(c.a)(y.q), w = Object(c.a)(y.r), k = Object(c.a)(y.p), I = (e, t) => async (r, c, i) => {
					let {
						apiContext: d
					} = i;
					const l = c();
					if (Object(f.h)(l)) return await r(E());
					r(_());
					try {
						const n = await Object(a.c)({
							awardId: e,
							context: d(),
							correlationId: t
						});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const o = n.body;
						if (!o.coinPackages || !o.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						r(w(o))
					} catch (u) {
						Object(o.b)() || console.error(u), s.c.captureException(u);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(k(e))
					}
				}, A = Object(c.a)(y.h), S = () => async (e, t, r) => {
					let {
						gqlContext: c
					} = r;
					var i, p;
					try {
						const t = await Object(a.a)(c());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (i = r.errors) || void 0 === i ? void 0 : i.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (p = r.awards) || void 0 === p ? void 0 : p.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(A({
								awards: r.awards
							})), e(Object(u.B)())
						}
					} catch (m) {
						Object(o.b)() || console.error(m), e(Object(d.f)({
							kind: l.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), s.c.captureException(m)
					}
				}
		},
		"./src/reddit/components/CoinPurchaseDropdown/index.m.less": function(e, t, r) {
			e.exports = {
				CoinPurchaseDropdown: "_3MLZbmCsSK5yh_UYD3717s",
				coinPurchaseDropdown: "_3MLZbmCsSK5yh_UYD3717s",
				activeSale: "_2MCszvETQ_Z6kv8AZ0mhCe",
				purchaseList: "_310fLrnWkOCPEaTfEufxkJ"
			}
		},
		"./src/reddit/components/CoinPurchaseDropdown/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "CoinPurchaseDropdown", (function() {
				return ae
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				c = r("./src/higherOrderComponents/asTooltip.tsx"),
				s = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/models/Gold/ProductOffer.ts"),
				i = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/controls/Dropdown/index.tsx"),
				l = r("./src/reddit/helpers/trackers/goldTopNav.ts"),
				u = r("./src/reddit/components/CoinPurchaseDropdownHeader/index.m.less"),
				p = r.n(u),
				m = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				b = r("./src/reddit/components/CoinPurchaseDropdownHeader/DefaultHeader/index.m.less"),
				f = r.n(b);
			const {
				fbt: h
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var y = e => {
					const {
						className: t
					} = e;
					return o.a.createElement("div", {
						className: Object(s.a)(t, f.a.header)
					}, o.a.createElement("span", {
						className: f.a.headerText
					}, h._("Give Gold, Silver, Platinum, and more with Coins", null, {
						hk: "3MfKV4"
					})), o.a.createElement(m.a, {
						className: f.a.headerLink,
						to: "/coins"
					}, h._("What are Coins?", null, {
						hk: "DNBPx"
					})))
				},
				O = r("./src/reddit/components/CoinPurchaseDropdownHeader/SalesHeader/index.m.less"),
				g = r.n(O);
			var j = e => {
				const {
					className: t,
					salesConfig: r
				} = e, {
					dropdownHeaderText: n,
					dropdownHeaderBackgroundAsset: c
				} = r;
				return o.a.createElement("div", {
					className: Object(s.a)(t, g.a.header)
				}, c && o.a.createElement("img", {
					className: g.a.saleHeaderImage,
					src: c
				}), o.a.createElement("span", {
					className: g.a.headerText
				}, n))
			};
			const {
				fbt: C
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var v = e => {
					const {
						activeSaleConfig: t
					} = e;
					return t ? o.a.createElement(j, {
						className: p.a.header,
						salesConfig: t
					}) : o.a.createElement(y, {
						className: p.a.header
					})
				},
				P = r("./node_modules/fbt/lib/FbtPublic.js"),
				x = r("./node_modules/react-redux/es/index.js"),
				E = r("./src/reddit/selectors/experiments/econ/index.ts"),
				_ = r("./node_modules/reselect/es/index.js"),
				w = r("./src/lib/constants/index.ts"),
				k = r("./src/lib/currency/currencies.ts"),
				I = r("./src/lib/localizeCurrency/index.ts"),
				A = r("./src/lib/opener/index.ts"),
				S = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				T = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				N = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				L = r("./src/reddit/actions/modal.ts"),
				D = r("./src/reddit/constants/modals.ts"),
				M = r("./src/reddit/contexts/PageLayer/index.tsx"),
				R = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				B = r("./src/reddit/featureFlags/index.ts"),
				F = r("./src/reddit/helpers/correlationIdTracker.ts"),
				U = r("./src/reddit/hooks/useLocale.ts"),
				H = r("./src/reddit/models/Gold/Premium/index.ts"),
				G = r("./src/reddit/selectors/crypto/points.ts"),
				q = r("./src/reddit/selectors/experiments/econStorefrontClaim.ts"),
				K = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				z = r("./src/reddit/selectors/user.ts"),
				W = r("./src/reddit/components/LottieAnimation/index.tsx"),
				V = r("./src/reddit/controls/Button/index.tsx"),
				Y = r("./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less"),
				Z = r.n(Y);
			var Q = e => {
					const {
						className: t,
						buttonClass: r,
						buttonSubtext: n,
						buttonSubtextCrossout: c,
						buttonText: a,
						icon: i,
						onClick: d,
						primaryText: l,
						subtext: u,
						subtextCrossout: p
					} = e, m = r ? V.g : V.l;
					return o.a.createElement("div", {
						className: Object(s.a)(t, Z.a.CompactCoinPurchaseListItem)
					}, o.a.createElement("div", {
						className: Z.a.productSection
					}, i, o.a.createElement("div", null, o.a.createElement("span", {
						className: Z.a.primaryText
					}, l), u && o.a.createElement("span", {
						className: Object(s.a)(Z.a.subtext, {
							[Z.a.crossout]: p
						})
					}, Array.isArray(u) ? u.map((e, t) => o.a.createElement("p", {
						key: t
					}, e)) : u))), o.a.createElement("div", {
						className: Z.a.priceSection
					}, o.a.createElement(m, {
						className: Object(s.a)(Z.a.button, r),
						redditStyle: !0,
						onClick: d
					}, a), o.a.createElement("span", {
						className: Object(s.a)(Z.a.buttonSubtext, {
							[Z.a.crossout]: c
						})
					}, n)))
				},
				$ = r("./src/reddit/components/CompactCoinPurchaseList/index.m.less"),
				J = r.n($);
			const X = Object(_.c)({
					coinPackages: K.d,
					communityPointsConversionEnabled: B.d.spPointsCoinConversion,
					communityPointsName: (e, t) => {
						var r;
						const n = Object(M.r)(e, t);
						return null === (r = Object(G.b)(e, null == n ? void 0 : n.id)) || void 0 === r ? void 0 : r.name
					},
					isFreeAwardEventEnabled: e => Object(q.a)(e) && Object(K.g)(e),
					isPremiumCoinStoreUpsellEnabled: E.u,
					isPremiumSubscriber: z.w,
					premiumPackages: K.l,
					purchaseCatalogError: K.n,
					purchaseCatalogPending: K.o
				}),
				ee = Object(x.b)(X, e => ({
					onClickClaimFreeAward: () => e(Object(L.h)(D.a.ECON_CLAIM_FREE_AWARD_MODAL)),
					onClickCoinPackage: (t, r) => e(Object(S.c)({
						correlationId: r,
						packageId: t.mobileId
					})),
					onClickConvert: () => e(Object(L.h)(D.a.CONVERT_TO_COINS)),
					onClickPremiumPackage: (t, r) => r ? e(Object(T.openWithBlob)({
						packageId: H.b,
						correlationId: t
					})) : Object(A.e)("/premium", A.d.BLANK),
					requestPurchaseCatalog: t => e(Object(N.b)({
						correlationId: t
					}))
				}));
			class te extends o.a.Component {
				constructor(e) {
					super(e), this.getPremiumListItem = () => {
						const {
							isPremiumSubscriber: e,
							premiumPackages: t
						} = this.props, r = Object(U.a)(), n = t.length ? t[0] : void 0;
						if (e || !n) return null;
						const {
							periodicalCoins: o,
							signupBonusCoins: c
						} = n, s = c ? Object(I.a)(c) : void 0, a = Object(I.b)(o, {
							locale: r,
							type: k.b.Reddit,
							currency: k.a
						}), i = {
							buttonClass: J.a.premiumButtonStyle,
							buttonSubtext: s ? P.fbt._("{number of bonus coins} bonus coins", [P.fbt._param("number of bonus coins", s)], {
								hk: "YgHAT"
							}) : void 0,
							buttonText: P.fbt._("Upgrade", null, {
								hk: "1tsWOd"
							}),
							primaryText: P.fbt._("Premium", null, {
								hk: "45A9gK"
							}),
							subtext: [P.fbt._("{monthly coins}/mo", [P.fbt._param("monthly coins", a)], {
								hk: "Ki7xN"
							}), P.fbt._("Ads free & more", null, {
								hk: "wO4Wc"
							})]
						};
						return this.packageDetailsAsListItem(i)
					}, this.getCoinPackageListItems = () => {
						const {
							coinPackages: e,
							sorted: t
						} = this.props, r = Object(U.a)(), n = e.map(e => {
							const {
								baselineCoins: t,
								baselinePennies: n,
								coins: o,
								pennies: c,
								bonusPct: s
							} = e, a = Object(I.b)(o, {
								locale: r,
								type: k.b.Reddit,
								currency: k.a
							}), i = Object(I.b)(c, {
								locale: r
							});
							let d, l;
							return o !== t && (d = Object(I.b)(t, {
								locale: r,
								type: k.b.Reddit,
								currency: k.a
							})), {
								buttonSubtext: l = c !== n ? Object(I.b)(n, {
									locale: r
								}) : s ? P.fbt._("{percent bonus}% Bonus", [P.fbt._param("percent bonus", Object(I.a)(s, {
									locale: r
								}))], {
									hk: "2zgjZ1"
								}) : void 0,
								buttonText: i,
								coinPackage: e,
								primaryText: a,
								subtext: d
							}
						});
						return t && n.sort((e, t) => {
							return (e.coinPackage ? e.coinPackage.coins : 0) - (t.coinPackage ? t.coinPackage.coins : 0)
						}), n.map(e => this.packageDetailsAsListItem(e))
					}, this.handleClickBuyCoins = e => {
						const {
							onClick: t,
							onClickCoinPackage: r,
							sendEvent: n
						} = this.props;
						t && t(), n(l.a(e.mobileId)), r(e, this.correlationId)
					}, this.handleClickBuyPremium = () => {
						var e;
						const {
							onClick: t,
							onClickPremiumPackage: r,
							pageLayer: n,
							sendEvent: o
						} = this.props;
						t && t(), o(l.c());
						const c = (null === (e = null == n ? void 0 : n.meta) || void 0 === e ? void 0 : e.name) === w.Nb.PREMIUM;
						r(this.correlationId, c)
					}, this.handleClickFreeAward = () => {
						const {
							onClickClaimFreeAward: e,
							sendEvent: t
						} = this.props;
						t(l.b()), e()
					}, this.getAwardListItem = () => {
						const {
							isFreeAwardEventEnabled: e
						} = this.props;
						return e ? o.a.createElement(Q, {
							buttonClass: J.a.freeAwardButton,
							buttonText: P.fbt._("Claim", null, {
								hk: "OUYUl"
							}),
							icon: o.a.createElement(W.a, {
								assetUrl: "https://www.redditstatic.com/gold/awards/animations/free_award/flying.json",
								className: J.a.presentAnimation,
								loop: !0,
								onClick: this.handleClickFreeAward
							}),
							onClick: this.handleClickFreeAward,
							primaryText: P.fbt._("Free Award to give out", null, {
								hk: "2NBLhF"
							})
						}) : null
					}, this.getCommunityPointsListItem = () => {
						const {
							communityPointsConversionEnabled: e,
							communityPointsName: t,
							onClickConvert: r
						} = this.props;
						return e && t ? o.a.createElement(Q, {
							buttonText: P.fbt._("Convert", null, {
								hk: "zVTTU"
							}),
							onClick: r,
							primaryText: P.fbt._("Convert {community points name}", [P.fbt._param("community points name", t)], {
								hk: "e7BeU"
							}),
							subtext: P.fbt._("into Coins", null, {
								hk: "1XFIa6"
							})
						}) : null
					}, this.correlationId = Object(F.e)(F.a.GoldPayment, !1), e.coinPackages.length || e.purchaseCatalogPending || e.requestPurchaseCatalog(this.correlationId)
				}
				packageDetailsAsListItem(e) {
					const {
						buttonClass: t,
						buttonSubtext: r,
						buttonText: n,
						coinPackage: c,
						primaryText: s,
						subtext: a
					} = e, i = c && c.coins !== c.baselineCoins, d = c && c.pennies !== c.baselinePennies;
					return o.a.createElement(Q, {
						buttonClass: t,
						buttonSubtext: r,
						buttonSubtextCrossout: d,
						buttonText: n,
						key: s,
						onClick: c ? () => this.handleClickBuyCoins(c) : this.handleClickBuyPremium,
						primaryText: s,
						subtext: a,
						subtextCrossout: i
					})
				}
				getListItems() {
					const {
						isPremiumCoinStoreUpsellEnabled: e
					} = this.props;
					return e ? o.a.createElement(o.a.Fragment, null, this.getPremiumListItem(), this.getAwardListItem(), this.getCoinPackageListItems(), this.getCommunityPointsListItem()) : o.a.createElement(o.a.Fragment, null, this.getAwardListItem(), this.getCoinPackageListItems(), this.getPremiumListItem(), this.getCommunityPointsListItem())
				}
				render() {
					const {
						className: e,
						coinPackages: t,
						purchaseCatalogError: r,
						purchaseCatalogPending: n
					} = this.props;
					return n ? o.a.createElement("div", {
						className: e
					}, o.a.createElement("div", {
						className: J.a.loaderContainer
					}, o.a.createElement(R.a, {
						sizePx: 80
					}))) : r || !t.length ? o.a.createElement("div", {
						className: e
					}, o.a.createElement("div", {
						className: J.a.errorContainer
					}, P.fbt._("Oops, something went wrong", null, {
						hk: "4EQRS8"
					}))) : o.a.createElement("div", {
						className: e
					}, this.getListItems())
				}
			}
			var re = Object(M.u)()(ee(Object(i.c)(te))),
				ne = r("./src/reddit/components/CoinPurchaseDropdown/index.m.less"),
				oe = r.n(ne);
			const {
				fbt: ce
			} = r("./node_modules/fbt/lib/FbtPublic.js"), se = Object(c.a)(d.a);
			class ae extends o.a.Component {
				constructor() {
					super(...arguments), this.timer = void 0, this.getOfferContext = () => this.props.activeSaleConfig ? a.a.CoinSale : this.props.isFreeAwardEventEnabled ? a.a.StorefrontFreeAward : void 0, this.handleMouseEnter = () => {
						this.timer && clearTimeout(this.timer)
					}, this.handleMouseLeave = () => {
						const {
							onCloseTooltip: e
						} = this.props;
						this.timer = setTimeout(e, 700)
					}
				}
				componentDidMount() {
					const {
						isOpen: e,
						sendEvent: t
					} = this.props;
					e && t(l.e(this.getOfferContext()))
				}
				componentDidUpdate(e) {
					!e.isOpen && this.props.isOpen && this.props.sendEvent(l.e(this.getOfferContext()))
				}
				render() {
					const {
						activeSaleConfig: e,
						className: t,
						isOpen: r,
						onCloseTooltip: n,
						tooltipId: c
					} = this.props;
					return o.a.createElement(se, {
						className: Object(s.a)(t, oe.a.CoinPurchaseDropdown, {
							[oe.a.activeSale]: !!e
						}),
						isFixed: !0,
						isOpen: r,
						targetPosition: ["center", "bottom"],
						tooltipPosition: ["right", "top"],
						tooltipId: c
					}, o.a.createElement(v, {
						activeSaleConfig: e
					}), o.a.createElement(re, {
						className: oe.a.purchaseList,
						onClick: n,
						sorted: !0
					}))
				}
			}
			t.default = Object(i.c)(ae)
		},
		"./src/reddit/components/CoinPurchaseDropdownHeader/DefaultHeader/index.m.less": function(e, t, r) {
			e.exports = {
				header: "_2lgyQv1Xe7SzrqkbUeaEFL",
				headerText: "_1CH25li1ODdO2KEOCMjWEj",
				headerLink: "_1lmsw-IaCDAsy3RT_4s5s9"
			}
		},
		"./src/reddit/components/CoinPurchaseDropdownHeader/SalesHeader/index.m.less": function(e, t, r) {
			e.exports = {
				header: "_1mxOXTqB-MrirvDiecjz4Z",
				headerText: "_1eNKe31O3AOBXQgWsPIL4P",
				saleHeaderImage: "_1Vf1tHvNme79A6GR8te6F-"
			}
		},
		"./src/reddit/components/CoinPurchaseDropdownHeader/index.m.less": function(e, t, r) {
			e.exports = {
				header: "_2HB5cXf0bpHe1piH74nOIQ"
			}
		},
		"./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less": function(e, t, r) {
			e.exports = {
				CompactCoinPurchaseListItem: "_3lHAZGc0ML7wczmPcwezOF",
				compactCoinPurchaseListItem: "_3lHAZGc0ML7wczmPcwezOF",
				productSection: "_2VkRnsOobI-4VlOs4ID5Vy",
				primaryText: "_4cdfLigUWzeeVcPzzbe78",
				buttonSubtext: "_2Mm_ve0iAKMLDXgbbvVmSD",
				subtext: "_1K7tfdKlu_H-Eljz3TrNc8",
				priceSection: "_49wuP84YuCbFBmZg2KI5s",
				button: "_2s6F0RDk744nqzZtEK_6Og",
				crossout: "_3LPal_LVAaPThYFSl8Vav3"
			}
		},
		"./src/reddit/components/CompactCoinPurchaseList/index.m.less": function(e, t, r) {
			e.exports = {
				errorContainer: "_3dCfx1TJ9381ixSTRcnyT-",
				loaderContainer: "xqaZPpbD8_8ATMQOxTIB_",
				premiumButtonStyle: "_3271lFh79mcpLNBH_vvl7r",
				freeAwardButton: "_3HU8lJbd8VJ3ixX_QvZ6jF",
				presentAnimation: "_2pcjA77qS9COMCWrQ4OK9c"
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
				s = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = r.n(s);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: n = 10
				} = e;
				return o.a.createElement("div", {
					className: Object(c.a)(a.a.loadingIcon, r, {
						[a.a.mCentered]: t
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
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "e", (function() {
				return b
			}));
			var n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				c = r("./src/lib/omitHeaders/index.ts"),
				s = r("./src/reddit/constants/headers.ts"),
				a = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				i = r("./src/reddit/endpoints/gold/purchase.ts");
			const d = async e => {
				let {
					buttonId: t,
					context: r,
					correlationId: d
				} = e;
				const l = {
						button_id: t,
						correlation_id: d
					},
					u = `${r.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					p = Object(a.a)(u);
				return Object(o.a)(Object(c.a)(r, [s.a]), {
					method: n.jb.POST,
					endpoint: p,
					data: l
				}).then(i.c)
			}, l = async e => {
				let {
					context: t,
					coins: r,
					pennies: a,
					correlationId: d
				} = e;
				const l = {
					coins: r,
					pennies: a,
					correlation_id: d
				};
				return Object(o.a)(Object(c.a)(t, [s.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: l
				}).then(i.c)
			}, u = async e => {
				let {
					context: t,
					awardId: r,
					pennies: a,
					thingId: d,
					correlationId: l
				} = e;
				const u = {
					award_id: r,
					correlation_id: l,
					pennies: a,
					thing_id: d
				};
				return Object(o.a)(Object(c.a)(t, [s.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: u
				}).then(i.c)
			}, p = async e => {
				let {
					context: t,
					offerContext: r,
					orderId: a,
					coins: d,
					pennies: l,
					correlationId: u
				} = e;
				const p = {
					offer_context: r,
					order_id: a,
					coins: d,
					pennies: l,
					correlation_id: u
				};
				return Object(o.a)(Object(c.a)(t, [s.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: p
				}).then(i.c)
			}, m = async e => {
				let {
					awardId: t,
					context: r,
					coins: a,
					correlationId: d,
					isAnonymous: l,
					message: u,
					offerContext: p,
					orderId: m,
					pennies: b,
					thingId: f
				} = e;
				const h = {
					award_id: t,
					coins: a,
					correlation_id: d,
					is_anonymous: l,
					message: u,
					offer_context: p,
					order_id: m,
					pennies: b,
					thing_id: f
				};
				return Object(o.a)(Object(c.a)(r, [s.a]), {
					method: n.jb.POST,
					endpoint: `${r.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: h
				}).then(i.c)
			}, b = async e => {
				let {
					awardId: t,
					context: r,
					correlationId: a,
					isAnonymous: d,
					message: l,
					orderId: u,
					thingId: p
				} = e;
				const m = {
					award_id: t,
					correlation_id: a,
					is_anonymous: d,
					message: l,
					order_id: u,
					thing_id: p
				};
				return Object(o.a)(Object(c.a)(r, [s.a]), {
					method: n.jb.POST,
					endpoint: `${r.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: m
				}).then(i.c)
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				o = r("./src/lib/prettyPrintNumber/index.ts");

			function c(e, t) {
				const r = new n.BigNumber(e),
					o = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(o).toString()
			}

			function s(e, t) {
				return Object(o.b)(parseInt(c(e, t), 10))
			}

			function a(e, t) {
				const r = new n.BigNumber(e),
					o = new n.BigNumber(t || 1);
				return r.multipliedBy(o).toFixed(0)
			}
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, o, c, s;
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
				}(s || (s = {}))
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
				return p
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "l", (function() {
				return f
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "e", (function() {
				return O
			})), r.d(t, "i", (function() {
				return g
			})), r.d(t, "h", (function() {
				return j
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/makeProductOfferKey/index.ts"),
				c = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/models/Payments/index.ts"),
				a = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				d = (e, t) => {
					let {
						subredditId: r,
						type: n
					} = t;
					var c, s, a;
					return r ? e.subreddits.productOffers[Object(o.a)(n, r)] : null === (a = null === (s = null === (c = e.features) || void 0 === c ? void 0 : c.goldPurchase) || void 0 === s ? void 0 : s.productOffers) || void 0 === a ? void 0 : a[Object(o.a)(n)]
				},
				l = e => {
					const t = d(e, {
						type: c.c.Coinpack
					});
					return null == t ? void 0 : t[0]
				},
				u = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = d(e, {
						subredditId: r,
						type: c.c.Powerups
					});
					return null == n ? void 0 : n[0]
				},
				p = Object(n.a)(u, e => null == e ? void 0 : e.pricePackages[0]),
				m = Object(n.a)(p, e => null == e ? void 0 : e.price),
				b = e => {
					const t = d(e, {
						type: c.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				f = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === s.b.PayPal || e[0] === s.b.Stripe)(e.requiredPaymentProviders)) : null,
				h = Object(n.a)(b, a.p, (e, t) => f(e, t) || null),
				y = Object(n.a)(h, (e, t) => {
					let {
						provider: r
					} = t;
					return r
				}, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				O = Object(n.a)(h, e => (null == e ? void 0 : e[0].price) || null),
				g = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				j = Object(n.a)(g, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/redditGQL/operations/PurchaseCatalogProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"098518521d5b"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CoinPurchaseDropdown.a79d27141830bcbb5d36.js.map