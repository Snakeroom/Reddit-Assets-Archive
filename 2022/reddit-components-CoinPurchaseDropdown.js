// https://www.redditstatic.com/desktop2x/reddit-components-CoinPurchaseDropdown.514d618623362cb500a7.js
// Retrieved at 1/10/2022, 2:40:06 PM by Reddit Dataminer v1.0.0
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
					x = function() {},
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
									d = void 0 === i ? x : i,
									l = r.onFocus,
									u = void 0 === l ? x : l,
									m = r.onReady,
									f = void 0 === m ? x : m,
									h = r.onChange,
									y = void 0 === h ? x : h,
									O = r.onEscape,
									j = void 0 === O ? x : O,
									P = r.onClick,
									_ = void 0 === P ? x : P,
									v = g("mounts <".concat(o, ">")).elements,
									E = t.useRef(null),
									k = t.useRef(null),
									w = C(f),
									I = C(d),
									A = C(u),
									S = C(_),
									T = C(y),
									N = C(j);
								t.useLayoutEffect((function() {
									if (null == E.current && v && null != k.current) {
										var t = v.create(e, a);
										E.current = t, t.mount(k.current), t.on("ready", (function() {
											return w(t)
										})), t.on("change", T), t.on("blur", I), t.on("focus", A), t.on("escape", N), t.on("click", S)
									}
								}));
								var L = p(a);
								return t.useEffect((function() {
									if (E.current) {
										var e = b(a, L, ["paymentRequest"]);
										e && E.current.update(e)
									}
								}), [a, L]), t.useLayoutEffect((function() {
									return function() {
										E.current && E.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: c,
									ref: k
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
					_ = "undefined" == typeof window,
					v = P("auBankAccount", _),
					E = P("card", _),
					k = P("cardNumber", _),
					w = P("cardExpiry", _),
					I = P("cardCvc", _),
					A = P("fpxBank", _),
					S = P("iban", _),
					T = P("idealBank", _),
					N = P("p24Bank", _),
					L = P("epsBank", _),
					M = P("payment", _),
					D = P("paymentRequestButton", _),
					R = P("linkAuthentication", _),
					F = P("shippingAddress", _),
					B = P("afterpayClearpayMessage", _);
				e.AfterpayClearpayMessageElement = B, e.AuBankAccountElement = v, e.CardCvcElement = I, e.CardElement = E, e.CardExpiryElement = w, e.CardNumberElement = k, e.Elements = O, e.ElementsConsumer = j, e.EpsBankElement = L, e.FpxBankElement = A, e.IbanElement = S, e.IdealBankElement = T, e.LinkAuthenticationElement = R, e.P24BankElement = N, e.PaymentElement = M, e.PaymentRequestButtonElement = D, e.ShippingAddressElement = F, e.useElements = function() {
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
			const d = (e, {
					locale: t = n.DEFAULT_LOCALE,
					pretty: r,
					formatOptions: o
				} = {}) => {
					const c = Number(e);
					return Object(i.c)() ? r ? Object(s.b)(c) : new Intl.NumberFormat(t, o).format(c) : u(c, r, t)
				},
				l = (e, t = {}) => {
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
				return _
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "e", (function() {
				return k
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
				return M
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
			const x = Object(c.a)(C.q),
				P = Object(c.a)(C.c),
				_ = e => async (t, r) => {
					t(x(e)), t(Object(l.h)(a.a.ECON_COIN_PURCHASE))
				}, v = () => async (e, t) => {
					e(P()), e(Object(l.g)(a.a.ECON_COIN_PURCHASE))
				}, E = Object(c.a)(C.u), k = ({
					correlationId: e,
					packageId: t
				}) => async (r, n) => {
					const o = n();
					Object(g.e)(o, t) ? (r(E({
						correlationId: e,
						packageId: t
					})), r(Object(l.i)(a.a.GOLD_TARGETED_OFFER_MODAL))) : s.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${t}`)
				}, w = Object(c.a)(C.p), I = ({
					correlationId: e,
					packageId: t
				}) => async (r, n) => {
					Object(g.c)(n(), t) ? (r(w({
						correlationId: e,
						packageId: t
					})), r(Object(l.i)(a.a.ECON_COIN_PACKAGE_OFFER))) : s.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${t}`)
				}, A = (e, t, r) => async (o, c) => {
					await o(Object(d.c)(e, r));
					const s = c(),
						a = Object(g.q)(s);
					if (0 !== a.length) o(_({
						correlationId: r,
						packageId: a[0].mobileId,
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
				}, S = (e, t, r) => async (c, s, {
					apiContext: a
				}) => {
					const d = s(),
						{
							coins: l,
							pennies: u
						} = r,
						p = Object(j.r)(d) || Object(b.e)(b.a.GoldPayment, !1);
					let f, h;
					c(Object(i.stripeTokenPending)());
					const O = Object(j.y)(d);
					if (O || (f = await c(Object(i.validateAndCreateStripeToken)(e, t)), h = Object(j.v)(d), f)) try {
						const e = await Object(m.f)({
							coins: l,
							context: a(),
							correlationId: p,
							offerContext: Object(y.d)(r, !1),
							pennies: u,
							rememberCard: h,
							savedCardId: O || void 0,
							token: f
						});
						if (e.error) {
							const t = Object(o.a)(e.error, e.status);
							return void c(Object(i.stripeApiError)(t))
						}
						return c(Object(i.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(b.b)(b.a.GoldPayment)
					} catch (g) {
						const e = Object(o.a)(g);
						c(Object(i.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						c(Object(i.stripeApiError)(e))
					}
				}, T = (e, t, c, s) => async (a, d, {
					apiContext: l
				}) => {
					const u = d(),
						{
							coins: p,
							pennies: O
						} = c,
						g = Object(j.r)(u) || Object(b.e)(b.a.GoldPayment, !1);
					let C, x;
					a(Object(i.stripeTokenPending)());
					const P = Object(j.y)(u);
					if (P || (C = await a(Object(i.validateAndCreateStripeToken)(e, t)), x = Object(j.v)(u), C)) try {
						const {
							gildModalThingId: e,
							isAnonymous: t,
							message: d,
							selectedAward: j
						} = u.gild;
						if (!e || !j.id) {
							const e = n.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void a(Object(i.stripeApiError)(e))
						}
						const _ = j.id,
							E = {
								gildType: _,
								isAnonymous: t,
								message: d
							},
							k = await Object(m.e)({
								coins: p,
								context: l(),
								correlationId: g,
								gildParams: E,
								isOldReddit: s,
								offerContext: Object(y.d)(c, !0),
								pennies: O,
								rememberCard: x,
								savedCardId: P || void 0,
								thingId: e,
								token: C
							});
						if (k.error) {
							const e = Object(o.a)(k.error, k.status);
							return void a(Object(i.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							a(v()), a(Object(i.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: n,
								all_awardings: o,
								coins: c,
								treatment_tags: s
							} = k.body;
							return a(t({
								awardKarmaReceived: n || 0,
								awardId: _,
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
				}, N = e => async (t, r, {
					apiContext: n
				}) => {
					const c = Object(b.c)(b.a.GoldPayment),
						{
							coins: a,
							pennies: d
						} = e;
					try {
						const e = await Object(p.a)({
							context: n(),
							coins: a,
							pennies: d,
							correlationId: c
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
					} catch (l) {
						s.c.captureException(l);
						const e = Object(o.a)(l);
						t(Object(i.paypalApiError)(e))
					}
				}, L = (e, t) => async (r, n, {
					apiContext: c
				}) => {
					const a = n(),
						d = Object(j.r)(a) || Object(b.e)(b.a.GoldPayment, !1),
						{
							coins: l,
							pennies: u
						} = t;
					try {
						const n = await Object(p.c)({
							context: c(),
							offerContext: Object(y.d)(t, !1),
							orderId: e,
							coins: l,
							pennies: u,
							correlationId: d
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
					} catch (m) {
						s.c.captureException(m);
						const e = Object(o.a)(m);
						r(Object(i.paypalApiError)(e))
					}
				}, M = (e, t) => async (c, a, {
					apiContext: d
				}) => {
					const l = a(),
						u = Object(j.r)(l) || Object(b.e)(b.a.GoldPayment, !1),
						{
							coins: m,
							pennies: O
						} = t;
					try {
						const {
							gildModalThingId: s,
							isAnonymous: a,
							message: g,
							selectedAward: j
						} = l.gild;
						if (!s || !j) return void c(Object(i.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const C = j.id,
							x = await Object(p.d)({
								context: d(),
								offerContext: Object(y.d)(t, !0),
								orderId: e,
								coins: m,
								pennies: O,
								thingId: s,
								awardId: C,
								message: g || "",
								isAnonymous: a,
								correlationId: u
							});
						if (x.error) {
							const e = Object(o.a)(x.error);
							c(Object(i.paypalApiError)(e))
						} else {
							c(v());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: n,
								subreddit_coins: o,
								treatment_tags: a
							} = x.body;
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
					} catch (g) {
						s.c.captureException(g);
						const e = Object(o.a)(g);
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
				return x
			})), r.d(t, "toggleRememberCard", (function() {
				return P
			})), r.d(t, "selectSavedCard", (function() {
				return _
			})), r.d(t, "_deleteSavedCard", (function() {
				return v
			})), r.d(t, "deleteSavedCard", (function() {
				return E
			})), r.d(t, "savedCardsPending", (function() {
				return k
			})), r.d(t, "savedCardsSuccess", (function() {
				return w
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
			const l = Object(c.a)(d.B),
				u = Object(c.a)(d.w),
				p = Object(c.a)(d.b),
				m = Object(c.a)(d.y),
				b = Object(c.a)(d.a),
				f = Object(c.a)(d.G),
				h = Object(c.a)(d.F),
				y = Object(c.a)(d.E),
				O = Object(c.a)(d.I),
				g = Object(c.a)(d.H),
				j = Object(c.a)(d.D),
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
				}, x = Object(c.a)(d.x), P = Object(c.a)(d.J), _ = Object(c.a)(d.C), v = Object(c.a)(d.g), E = e => async (t, r, {
					apiContext: n
				}) => {
					t(v(e));
					try {
						const t = await Object(a.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						s.c.captureException(o)
					}
				}, k = Object(c.a)(d.z), w = Object(c.a)(d.A), I = () => async (e, t, {
					apiContext: r
				}) => {
					e(k());
					try {
						const t = await Object(a.b)(r());
						if (t.error) throw new Error(t.error.type);
						const n = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(w(n)), n[0] && e(_(n[0].cardId))
					} catch (n) {
						s.c.captureException(n), e(w([]))
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
				return x
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
			const y = Object(c.a)(h.t),
				O = Object(c.a)(h.e),
				g = (e, t) => async r => {
					r(y(e)), r(Object(l.h)(u.a.ECON_PREMIUM_PURCHASE, t))
				}, j = () => async e => {
					e(Object(l.g)(u.a.ECON_PREMIUM_PURCHASE)), e(O())
				}, C = (e, t) => async (r, n, {
					apiContext: c
				}) => {
					const s = Object(f.a)(n()),
						l = (null == s ? void 0 : s.pennies) || a.yb,
						u = Object(b.c)(b.a.GoldPayment);
					r(Object(d.stripeTokenPending)());
					const p = await r(Object(d.validateAndCreateStripeToken)(e, t));
					if (p) try {
						const e = await Object(m.h)({
							context: c(),
							correlationId: u,
							pennies: l,
							token: p
						});
						if (e.error) {
							const t = Object(i.a)(e.error);
							r(Object(d.stripeApiError)(t))
						} else r(Object(d.paymentCompleted)({
							confirmed: !1
						}))
					} catch (h) {
						const e = Object(i.a)(h);
						r(Object(d.stripeApiError)(e))
					} else {
						const e = o.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						r(Object(d.stripeApiError)(e))
					}
				}, x = Object(c.a)(h.v), P = ({
					packageId: e,
					correlationId: t
				}, r) => async (o, c, {
					apiContext: a
				}) => {
					o(g({
						packageId: e,
						correlationId: t
					}, r));
					const l = Object(f.a)(c()),
						u = (null == l ? void 0 : l.paypalButtonId) || n.a.paypal.buttons.premium;
					if (u) try {
						const e = await Object(p.f)({
							buttonId: u,
							context: a(),
							correlationId: t
						});
						if (e.error) {
							const t = Object(i.a)(e.error);
							o(Object(d.paypalApiError)(t))
						} else o(x(e))
					} catch (m) {
						const e = Object(i.a)(m);
						o(Object(d.paypalApiError)(e))
					} else s.c.captureMessage("No Premium packages available on Premium purchase modal")
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return h
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "a", (function() {
				return x
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/env/index.ts"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				a = r("./src/reddit/endpoints/gold/productCatalog/index.ts"),
				i = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/actions/post.ts"),
				p = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const m = Object(c.a)(p.j),
				b = Object(c.a)(p.k),
				f = Object(c.a)(p.i),
				h = e => async (t, r, {
					apiContext: c
				}) => {
					t(m());
					const d = r(),
						l = Object(i.J)(d);
					try {
						const r = !l,
							n = await Object(a.b)({
								context: c(),
								correlationId: e,
								shouldUseCurrentOrigin: r
							});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const o = n.body;
						t(b(o))
					} catch (u) {
						Object(o.b)() || console.error(u), s.c.captureException(u);
						const e = n.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(f(e))
					}
				}, y = Object(c.a)(p.m), O = Object(c.a)(p.n), g = Object(c.a)(p.l), j = (e, t) => async (r, c, {
					apiContext: i
				}) => {
					r(y());
					try {
						const n = await Object(a.c)({
							awardId: e,
							context: i(),
							correlationId: t
						});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const o = n.body;
						if (!o.coinPackages || !o.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						r(O(o))
					} catch (d) {
						Object(o.b)() || console.error(d), s.c.captureException(d);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(g(e))
					}
				}, C = Object(c.a)(p.h), x = () => async (e, t, {
					gqlContext: r
				}) => {
					var c, i;
					try {
						const t = await Object(a.a)(r());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (c = r.errors) || void 0 === c ? void 0 : c.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (i = r.awards) || void 0 === i ? void 0 : i.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(C({
								awards: r.awards
							})), e(Object(u.B)())
						}
					} catch (p) {
						Object(o.b)() || console.error(p), e(Object(d.f)({
							kind: l.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), s.c.captureException(p)
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
			var x = e => {
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
				_ = r("./node_modules/react-redux/es/index.js"),
				v = r("./src/reddit/selectors/experiments/econ/index.ts"),
				E = r("./node_modules/reselect/es/index.js"),
				k = r("./src/lib/constants/index.ts"),
				w = r("./src/lib/currency/currencies.ts"),
				I = r("./src/lib/localizeCurrency/index.ts"),
				A = r("./src/lib/opener/index.ts"),
				S = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				T = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				N = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				L = r("./src/reddit/actions/modal.ts"),
				M = r("./src/reddit/constants/modals.ts"),
				D = r("./src/reddit/contexts/PageLayer/index.tsx"),
				R = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				F = r("./src/reddit/featureFlags/index.ts"),
				B = r("./src/reddit/helpers/correlationIdTracker.ts"),
				U = r("./src/reddit/hooks/useLocale.ts"),
				H = r("./src/reddit/models/Gold/Premium/index.ts"),
				G = r("./src/reddit/selectors/crypto/points.ts"),
				z = r("./src/reddit/selectors/experiments/econStorefrontClaim.ts"),
				K = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				q = r("./src/reddit/selectors/user.ts"),
				W = r("./src/reddit/components/LottieAnimation/index.tsx"),
				V = r("./src/reddit/controls/Button/index.tsx"),
				Y = r("./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less"),
				Z = r.n(Y);
			var $ = e => {
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
				J = r("./src/reddit/components/CompactCoinPurchaseList/index.m.less"),
				Q = r.n(J);
			const X = Object(E.c)({
					coinPackages: K.d,
					communityPointsConversionEnabled: F.d.spPointsCoinConversion,
					communityPointsName: (e, t) => {
						var r;
						const n = Object(D.r)(e, t);
						return null === (r = Object(G.b)(e, null == n ? void 0 : n.id)) || void 0 === r ? void 0 : r.name
					},
					isFreeAwardEventEnabled: e => Object(z.a)(e) && Object(K.g)(e),
					isPremiumCoinStoreUpsellEnabled: v.w,
					isPremiumSubscriber: q.t,
					premiumPackages: K.l,
					purchaseCatalogError: K.n,
					purchaseCatalogPending: K.o
				}),
				ee = Object(_.b)(X, e => ({
					onClickClaimFreeAward: () => e(Object(L.h)(M.a.ECON_CLAIM_FREE_AWARD_MODAL)),
					onClickCoinPackage: (t, r) => e(Object(S.c)({
						correlationId: r,
						packageId: t.mobileId
					})),
					onClickConvert: () => e(Object(L.h)(M.a.CONVERT_TO_COINS)),
					onClickPremiumPackage: (t, r) => r ? e(Object(T.openWithBlob)({
						packageId: H.b,
						correlationId: t
					})) : Object(A.e)("/premium", A.d.BLANK),
					requestPurchaseCatalog: t => e(Object(N.b)(t))
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
							type: w.b.Reddit,
							currency: w.a
						}), i = {
							buttonClass: Q.a.premiumButtonStyle,
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
								type: w.b.Reddit,
								currency: w.a
							}), i = Object(I.b)(c, {
								locale: r
							});
							let d, l;
							return o !== t && (d = Object(I.b)(t, {
								locale: r,
								type: w.b.Reddit,
								currency: w.a
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
						const c = (null === (e = null == n ? void 0 : n.meta) || void 0 === e ? void 0 : e.name) === k.Mb.PREMIUM;
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
						return e ? o.a.createElement($, {
							buttonClass: Q.a.freeAwardButton,
							buttonText: P.fbt._("Claim", null, {
								hk: "OUYUl"
							}),
							icon: o.a.createElement(W.a, {
								assetUrl: "https://www.redditstatic.com/gold/awards/animations/free_award/flying.json",
								className: Q.a.presentAnimation,
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
						return e && t ? o.a.createElement($, {
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
					}, this.correlationId = Object(B.e)(B.a.GoldPayment, !1), e.coinPackages.length || e.purchaseCatalogPending || e.requestPurchaseCatalog(this.correlationId)
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
					return o.a.createElement($, {
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
						className: Q.a.loaderContainer
					}, o.a.createElement(R.a, {
						sizePx: 80
					}))) : r || !t.length ? o.a.createElement("div", {
						className: e
					}, o.a.createElement("div", {
						className: Q.a.errorContainer
					}, P.fbt._("Oops, something went wrong", null, {
						hk: "4EQRS8"
					}))) : o.a.createElement("div", {
						className: e
					}, this.getListItems())
				}
			}
			var re = Object(D.u)()(ee(Object(i.c)(te))),
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
					}, o.a.createElement(x, {
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
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => o.a.createElement("div", {
				className: Object(c.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				},
				"data-testid": "LoadingIcon"
			})
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
					u = Object(a.a)(l);
				return Object(o.a)(Object(c.a)(t, [s.a]), {
					method: n.jb.POST,
					endpoint: u,
					data: d
				}).then(i.c)
			}, l = async ({
				context: e,
				coins: t,
				pennies: r,
				correlationId: a
			}) => {
				const d = {
					coins: t,
					pennies: r,
					correlation_id: a
				};
				return Object(o.a)(Object(c.a)(e, [s.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(i.c)
			}, u = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: a,
				correlationId: d
			}) => {
				const l = {
					award_id: t,
					correlation_id: d,
					pennies: r,
					thing_id: a
				};
				return Object(o.a)(Object(c.a)(e, [s.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(i.c)
			}, p = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: a,
				pennies: d,
				correlationId: l
			}) => {
				const u = {
					offer_context: t,
					order_id: r,
					coins: a,
					pennies: d,
					correlation_id: l
				};
				return Object(o.a)(Object(c.a)(e, [s.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: u
				}).then(i.c)
			}, m = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: a,
				isAnonymous: d,
				message: l,
				offerContext: u,
				orderId: p,
				pennies: m,
				thingId: b
			}) => {
				const f = {
					award_id: e,
					coins: r,
					correlation_id: a,
					is_anonymous: d,
					message: l,
					offer_context: u,
					order_id: p,
					pennies: m,
					thing_id: b
				};
				return Object(o.a)(Object(c.a)(t, [s.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: f
				}).then(i.c)
			}, b = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: a,
				message: d,
				orderId: l,
				thingId: u
			}) => {
				const p = {
					award_id: e,
					correlation_id: r,
					is_anonymous: a,
					message: d,
					order_id: l,
					thing_id: u
				};
				return Object(o.a)(Object(c.a)(t, [s.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: p
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
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "e", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return i
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const o = {
					PREMIUM_1_MONTH: {
						priceInCoins: 1800,
						monthsOfPremium: 1
					},
					PREMIUM_3_MONTHS: {
						priceInCoins: 5400,
						monthsOfPremium: 3
					},
					PREMIUM_6_MONTHS: {
						priceInCoins: 10800,
						monthsOfPremium: 6
					},
					PREMIUM_12_MONTHS: {
						priceInCoins: 21600,
						monthsOfPremium: 12
					}
				},
				c = (e, t = !1) => {
					const r = [];
					for (const n in o) {
						const c = o[n];
						(c.priceInCoins <= e || t) && r.push(c)
					}
					return r
				},
				s = e => n.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [n.fbt._plural(e.monthsOfPremium, "number of months"), n.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				a = "com.reddit.premium_1";
			var i;
			! function(e) {
				e.Monthly = "monthly", e.Yearly = "yearly"
			}(i || (i = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CoinPurchaseDropdown.514d618623362cb500a7.js.map