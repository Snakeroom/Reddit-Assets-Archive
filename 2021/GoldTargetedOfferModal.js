// https://www.redditstatic.com/desktop2x/GoldTargetedOfferModal.2308352a226f43fcbfae.js
// Retrieved at 12/13/2021, 9:40:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GoldTargetedOfferModal"], {
		"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js": function(e, t, r) {
			! function(e, t) {
				"use strict";
				t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
				var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

				function n() {}

				function c() {}
				c.resetWarningCache = n;
				var o = function(e, t) {
					return e(t = {
						exports: {}
					}, t.exports), t.exports
				}((function(e) {
					e.exports = function() {
						function e(e, t, n, c, o, a) {
							if (a !== r) {
								var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
								throw s.name = "Invariant Violation", s
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
							checkPropTypes: c,
							resetWarningCache: n
						};
						return o.PropTypes = o, o
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

				function l(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
							var r = [],
								n = !0,
								c = !1,
								o = void 0;
							try {
								for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
							} catch (i) {
								c = !0, o = i
							} finally {
								try {
									n || null == s.return || s.return()
								} finally {
									if (c) throw o
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
						return b(e) ? Object.keys(e).reduce((function(n, c) {
							var o = !b(t) || ! function e(t, r) {
								if (!b(t) || !b(r)) return t === r;
								var n = Array.isArray(t);
								if (n !== Array.isArray(r)) return !1;
								var c = "[object Object]" === Object.prototype.toString.call(t);
								if (c !== ("[object Object]" === Object.prototype.toString.call(r))) return !1;
								if (!c && !n) return !1;
								var o = Object.keys(t),
									a = Object.keys(r);
								if (o.length !== a.length) return !1;
								for (var s = {}, i = 0; i < o.length; i += 1) s[o[i]] = !0;
								for (var d = 0; d < a.length; d += 1) s[a[d]] = !0;
								var l = Object.keys(s);
								if (l.length !== o.length) return !1;
								var u = t,
									p = r;
								return l.every((function(t) {
									return e(u[t], p[t])
								}))
							}(e[c], t[c]);
							return r.includes(c) ? (o && console.warn("Unsupported prop change: options.".concat(c, " is not a mutable property.")), n) : o ? d(d({}, n || {}), {}, s({}, c, e[c])) : n
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
				var g = function(e) {
					var r = e.stripe,
						n = e.options,
						c = e.children,
						o = t.useRef(!1),
						a = t.useRef(!0),
						s = t.useMemo((function() {
							return y(r)
						}), [r]),
						i = l(t.useState((function() {
							return {
								stripe: null,
								elements: null
							}
						})), 2),
						d = i[0],
						u = i[1],
						b = p(r);
					null !== b && b !== r && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), o.current || ("sync" === s.tag && (o.current = !0, u({
						stripe: s.stripe,
						elements: s.stripe.elements(n)
					})), "async" === s.tag && (o.current = !0, s.stripePromise.then((function(e) {
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
					}, c)
				};
				g.propTypes = {
					stripe: o.any,
					options: o.object
				};
				var j = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(O), e)
					},
					h = function(e) {
						return (0, e.children)(j("mounts <ElementsConsumer>"))
					};
				h.propTypes = {
					children: o.func.isRequired
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
					E = function() {},
					k = function(e, r) {
						var n, c = "".concat((n = e).charAt(0).toUpperCase() + n.slice(1), "Element"),
							a = r ? function(e) {
								j("mounts <".concat(c, ">"));
								var r = e.id,
									n = e.className;
								return t.createElement("div", {
									id: r,
									className: n
								})
							} : function(r) {
								var n = r.id,
									o = r.className,
									a = r.options,
									s = void 0 === a ? {} : a,
									i = r.onBlur,
									d = void 0 === i ? E : i,
									l = r.onFocus,
									u = void 0 === l ? E : l,
									b = r.onReady,
									m = void 0 === b ? E : b,
									y = r.onChange,
									O = void 0 === y ? E : y,
									g = r.onEscape,
									h = void 0 === g ? E : g,
									k = r.onClick,
									v = void 0 === k ? E : k,
									w = j("mounts <".concat(c, ">")).elements,
									C = t.useRef(null),
									x = t.useRef(null),
									P = _(m),
									I = _(d),
									A = _(u),
									S = _(v),
									T = _(O),
									N = _(h);
								t.useLayoutEffect((function() {
									if (null == C.current && w && null != x.current) {
										var t = w.create(e, s);
										C.current = t, t.mount(x.current), t.on("ready", (function() {
											return P(t)
										})), t.on("change", T), t.on("blur", I), t.on("focus", A), t.on("escape", N), t.on("click", S)
									}
								}));
								var R = p(s);
								return t.useEffect((function() {
									if (C.current) {
										var e = f(s, R, ["paymentRequest"]);
										e && C.current.update(e)
									}
								}), [s, R]), t.useLayoutEffect((function() {
									return function() {
										C.current && C.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: o,
									ref: x
								})
							};
						return a.propTypes = {
							id: o.string,
							className: o.string,
							onChange: o.func,
							onBlur: o.func,
							onFocus: o.func,
							onReady: o.func,
							onClick: o.func,
							options: o.object
						}, a.displayName = c, a.__elementType = e, a
					},
					v = "undefined" == typeof window,
					w = k("auBankAccount", v),
					C = k("card", v),
					x = k("cardNumber", v),
					P = k("cardExpiry", v),
					I = k("cardCvc", v),
					A = k("fpxBank", v),
					S = k("iban", v),
					T = k("idealBank", v),
					N = k("p24Bank", v),
					R = k("epsBank", v),
					M = k("payment", v),
					U = k("paymentRequestButton", v),
					B = k("linkAuthentication", v),
					D = k("shippingAddress", v),
					F = k("afterpayClearpayMessage", v);
				e.AfterpayClearpayMessageElement = F, e.AuBankAccountElement = w, e.CardCvcElement = I, e.CardElement = C, e.CardExpiryElement = P, e.CardNumberElement = x, e.Elements = g, e.ElementsConsumer = h, e.EpsBankElement = R, e.FpxBankElement = A, e.IbanElement = S, e.IdealBankElement = T, e.LinkAuthenticationElement = B, e.P24BankElement = N, e.PaymentElement = M, e.PaymentRequestButtonElement = U, e.ShippingAddressElement = D, e.useElements = function() {
					return j("calls useElements()").elements
				}, e.useStripe = function() {
					return j("calls useStripe()").stripe
				}, Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}(t, r("./node_modules/react/index.js"))
		},
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./src/lib/currency/cleanNumber/index.ts");

			function c(e, t) {
				const r = Object(n.a)(e),
					c = parseInt(r) / 100;
				return Math.floor(c) !== c || t ? c.toFixed(2) : String(c)
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
				return a
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "e", (function() {
				return l
			}));
			var n, c = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(n || (n = {}));
			const o = "USD",
				a = "ETH",
				s = "COINS",
				i = [a, "BTC"],
				d = [s, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				l = {
					COINS: () => c.fbt._("Coins", null, {
						hk: "1T2Y4p"
					}),
					SUBREDDIT_POINTS: () => c.fbt._("Subreddit points", null, {
						hk: "1ytOO3"
					}),
					GAME_TOKENS: () => c.fbt._("Game tokens", null, {
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
				c = r("./src/lib/currency/centsToDollars/index.ts"),
				o = r("./src/lib/currency/currencies.ts"),
				a = r("./src/lib/prettyPrintNumber/index.ts"),
				s = r("./src/reddit/helpers/governance/tokens.ts"),
				i = r("./src/reddit/constants/intlSupport.ts");
			const d = (e, {
					locale: t = n.DEFAULT_LOCALE,
					pretty: r,
					formatOptions: c
				} = {}) => {
					const o = Number(e);
					return Object(i.c)() ? r ? Object(a.b)(o) : new Intl.NumberFormat(t, c).format(o) : u(o, r, t)
				},
				l = (e, t = {}) => {
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: a,
						formatOptions: d,
						displayConversion: l,
						forceDecimals: f,
						currency: m = t.currency || (t.type ? b(t.type) : o.c),
						type: y = t.type || (t.currency ? p(t.currency) : o.b.Real)
					} = t, O = Number(e), g = String(e);
					switch (y) {
						case o.b.Reddit: {
							const e = o.e[m],
								t = e ? e() : m;
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(O) + " " + t : u(O, a, r, t)
						}
						case o.b.Crypto: {
							if (a) {
								return Object(s.c)(g, l) + " " + m
							}
							const e = Number(Object(s.b)(g, l));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: m,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : u(e, a, r, m)
						}
						case o.b.Real:
						default: {
							const e = Number(Object(c.a)(g, f));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
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
				p = e => o.g.includes(e.toUpperCase()) ? o.b.Reddit : o.f.includes(e.toUpperCase()) ? o.b.Crypto : o.b.Real,
				b = e => {
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
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return v
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "e", (function() {
				return x
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
				return R
			})), r.d(t, "h", (function() {
				return M
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				c = r("./src/lib/formatApiError/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/sentry/index.ts"),
				s = r("./src/reddit/constants/modals.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				p = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				b = r("./src/reddit/endpoints/gold/purchase.ts"),
				f = r("./src/reddit/helpers/correlationIdTracker.ts"),
				m = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				y = r("./src/reddit/models/Gold/Award.ts"),
				O = r("./src/reddit/models/Gold/ProductOffer.ts"),
				g = r("./src/reddit/models/Toast/index.ts"),
				j = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				h = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				_ = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const E = Object(o.a)(_.q),
				k = Object(o.a)(_.c),
				v = e => async (t, r) => {
					t(E(e)), t(Object(l.h)(s.a.ECON_COIN_PURCHASE))
				}, w = () => async (e, t) => {
					e(k()), e(Object(l.g)(s.a.ECON_COIN_PURCHASE))
				}, C = Object(o.a)(_.u), x = ({
					correlationId: e,
					packageId: t
				}) => async (r, n) => {
					const c = n();
					Object(j.e)(c, t) ? (r(C({
						correlationId: e,
						packageId: t
					})), r(Object(l.i)(s.a.GOLD_TARGETED_OFFER_MODAL))) : a.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${t}`)
				}, P = Object(o.a)(_.p), I = ({
					correlationId: e,
					packageId: t
				}) => async (r, n) => {
					Object(j.c)(n(), t) ? (r(P({
						correlationId: e,
						packageId: t
					})), r(Object(l.i)(s.a.ECON_COIN_PACKAGE_OFFER))) : a.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${t}`)
				}, A = (e, t, r) => async (c, o) => {
					await c(Object(d.c)(e, r));
					const a = o(),
						s = Object(j.q)(a);
					if (0 !== s.length) c(v({
						correlationId: r,
						packageId: s[0].mobileId,
						thingId: t
					}));
					else {
						const e = Object(j.n)(a),
							t = n.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						c(Object(u.f)({
							kind: g.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, S = (e, t, r) => async (o, a, {
					apiContext: s
				}) => {
					const d = a(),
						{
							coins: l,
							pennies: u
						} = r,
						p = Object(h.r)(d) || Object(f.e)(f.a.GoldPayment, !1);
					let m, y;
					o(Object(i.stripeTokenPending)());
					const g = Object(h.y)(d);
					if (g || (m = await o(Object(i.validateAndCreateStripeToken)(e, t)), y = Object(h.v)(d), m)) try {
						const e = await Object(b.f)({
							coins: l,
							context: s(),
							correlationId: p,
							offerContext: Object(O.d)(r, !1),
							pennies: u,
							rememberCard: y,
							savedCardId: g || void 0,
							token: m
						});
						if (e.error) {
							const t = Object(c.a)(e.error, e.status);
							return void o(Object(i.stripeApiError)(t))
						}
						return o(Object(i.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(f.b)(f.a.GoldPayment)
					} catch (j) {
						const e = Object(c.a)(j);
						o(Object(i.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						o(Object(i.stripeApiError)(e))
					}
				}, T = (e, t, o, a) => async (s, d, {
					apiContext: l
				}) => {
					const u = d(),
						{
							coins: p,
							pennies: g
						} = o,
						j = Object(h.r)(u) || Object(f.e)(f.a.GoldPayment, !1);
					let _, E;
					s(Object(i.stripeTokenPending)());
					const k = Object(h.y)(u);
					if (k || (_ = await s(Object(i.validateAndCreateStripeToken)(e, t)), E = Object(h.v)(u), _)) try {
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
							return void s(Object(i.stripeApiError)(e))
						}
						const v = h.id,
							C = {
								gildType: v,
								isAnonymous: t,
								message: d
							},
							x = await Object(b.e)({
								coins: p,
								context: l(),
								correlationId: j,
								gildParams: C,
								isOldReddit: a,
								offerContext: Object(O.d)(o, !0),
								pennies: g,
								rememberCard: E,
								savedCardId: k || void 0,
								thingId: e,
								token: _
							});
						if (x.error) {
							const e = Object(c.a)(x.error, x.status);
							return void s(Object(i.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							s(w()), s(Object(i.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: n,
								all_awardings: c,
								coins: o,
								treatment_tags: a
							} = x.body;
							return s(t({
								awardKarmaReceived: n || 0,
								awardId: v,
								awardings: c && c.length ? Object(m.a)(c).map(e => ({
									award: Object(y.h)(e),
									total: e.count
								})) : [],
								coins: o,
								id: e,
								treatmentTags: a
							})), void Object(f.b)(f.a.GoldPayment)
						}
					} catch (v) {
						const e = Object(c.a)(v);
						s(Object(i.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						s(Object(i.stripeApiError)(e))
					}
				}, N = e => async (t, r, {
					apiContext: n
				}) => {
					const o = Object(f.c)(f.a.GoldPayment),
						{
							coins: s,
							pennies: d
						} = e;
					try {
						const e = await Object(p.a)({
							context: n(),
							coins: s,
							pennies: d,
							correlationId: o
						});
						if (e.error) {
							const r = Object(c.a)(e.error);
							return void t(Object(i.paypalApiError)(r))
						} {
							const {
								order_id: t
							} = e.body;
							return t
						}
					} catch (l) {
						a.c.captureException(l);
						const e = Object(c.a)(l);
						t(Object(i.paypalApiError)(e))
					}
				}, R = (e, t) => async (r, n, {
					apiContext: o
				}) => {
					const s = n(),
						d = Object(h.r)(s) || Object(f.e)(f.a.GoldPayment, !1),
						{
							coins: l,
							pennies: u
						} = t;
					try {
						const n = await Object(p.c)({
							context: o(),
							offerContext: Object(O.d)(t, !1),
							orderId: e,
							coins: l,
							pennies: u,
							correlationId: d
						});
						if (n.error) {
							const e = Object(c.a)(n.error);
							return void r(Object(i.paypalApiError)(e))
						} {
							const {
								coins: e
							} = n.body;
							r(Object(i.paymentCompleted)({
								coins: e,
								confirmed: !0
							})), Object(f.b)(f.a.GoldPayment)
						}
					} catch (b) {
						a.c.captureException(b);
						const e = Object(c.a)(b);
						r(Object(i.paypalApiError)(e))
					}
				}, M = (e, t) => async (o, s, {
					apiContext: d
				}) => {
					const l = s(),
						u = Object(h.r)(l) || Object(f.e)(f.a.GoldPayment, !1),
						{
							coins: b,
							pennies: g
						} = t;
					try {
						const {
							gildModalThingId: a,
							isAnonymous: s,
							message: j,
							selectedAward: h
						} = l.gild;
						if (!a || !h) return void o(Object(i.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const _ = h.id,
							E = await Object(p.d)({
								context: d(),
								offerContext: Object(O.d)(t, !0),
								orderId: e,
								coins: b,
								pennies: g,
								thingId: a,
								awardId: _,
								message: j || "",
								isAnonymous: s,
								correlationId: u
							});
						if (E.error) {
							const e = Object(c.a)(E.error);
							o(Object(i.paypalApiError)(e))
						} else {
							o(w());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: n,
								subreddit_coins: c,
								treatment_tags: s
							} = E.body;
							o(Object(i.paymentCompleted)({
								coins: n,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							o(d({
								awardId: _,
								awardKarmaReceived: t || 0,
								awardings: Object(m.a)(e).map(e => ({
									award: Object(y.h)(e),
									total: e.count
								})),
								coins: n,
								id: a,
								subredditCoins: c,
								treatmentTags: s
							})), Object(f.b)(f.a.GoldPayment)
						}
					} catch (j) {
						a.c.captureException(j);
						const e = Object(c.a)(j);
						o(Object(i.paypalApiError)(e))
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
				return g
			})), r.d(t, "stripeTokenError", (function() {
				return j
			})), r.d(t, "stripeApiError", (function() {
				return h
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return _
			})), r.d(t, "paypalApiError", (function() {
				return E
			})), r.d(t, "toggleRememberCard", (function() {
				return k
			})), r.d(t, "selectSavedCard", (function() {
				return v
			})), r.d(t, "_deleteSavedCard", (function() {
				return w
			})), r.d(t, "deleteSavedCard", (function() {
				return C
			})), r.d(t, "savedCardsPending", (function() {
				return x
			})), r.d(t, "savedCardsSuccess", (function() {
				return P
			})), r.d(t, "loadSavedCards", (function() {
				return I
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				c = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/sentry/index.ts"),
				s = r("./src/reddit/endpoints/gold/purchase.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const l = Object(o.a)(d.B),
				u = Object(o.a)(d.w),
				p = Object(o.a)(d.b),
				b = Object(o.a)(d.y),
				f = Object(o.a)(d.a),
				m = Object(o.a)(d.G),
				y = Object(o.a)(d.F),
				O = Object(o.a)(d.E),
				g = Object(o.a)(d.I),
				j = Object(o.a)(d.H),
				h = Object(o.a)(d.D),
				_ = (e, t) => async (r, o) => {
					const a = o(),
						s = Object(i.h)(a),
						d = Object(i.l)(a),
						l = t.getElement(n.CardNumberElement);
					if (!l) return;
					const {
						token: u,
						error: p
					} = await e.createToken(l, {
						name: s,
						address_zip: d
					});
					if (s.trim()) {
						if (!p && u) return u;
						r(j(p || void 0))
					} else {
						const e = c.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(f({
							message: e
						}))
					}
				}, E = Object(o.a)(d.x), k = Object(o.a)(d.J), v = Object(o.a)(d.C), w = Object(o.a)(d.g), C = e => async (t, r, {
					apiContext: n
				}) => {
					t(w(e));
					try {
						const t = await Object(s.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (c) {
						a.c.captureException(c)
					}
				}, x = Object(o.a)(d.z), P = Object(o.a)(d.A), I = () => async (e, t, {
					apiContext: r
				}) => {
					e(x());
					try {
						const t = await Object(s.b)(r());
						if (t.error) throw new Error(t.error.type);
						const n = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(P(n)), n[0] && e(v(n[0].cardId))
					} catch (n) {
						a.c.captureException(n), e(P([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return y
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "a", (function() {
				return E
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				c = r("./src/lib/env/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/sentry/index.ts"),
				s = r("./src/reddit/endpoints/gold/productCatalog/index.ts"),
				i = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/actions/post.ts"),
				p = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const b = Object(o.a)(p.j),
				f = Object(o.a)(p.k),
				m = Object(o.a)(p.i),
				y = e => async (t, r, {
					apiContext: o
				}) => {
					t(b());
					const d = r(),
						l = Object(i.K)(d);
					try {
						const r = !l,
							n = await Object(s.b)({
								context: o(),
								correlationId: e,
								shouldUseCurrentOrigin: r
							});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const c = n.body;
						t(f(c))
					} catch (u) {
						Object(c.b)() || console.error(u), a.c.captureException(u);
						const e = n.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(m(e))
					}
				}, O = Object(o.a)(p.m), g = Object(o.a)(p.n), j = Object(o.a)(p.l), h = (e, t) => async (r, o, {
					apiContext: i
				}) => {
					r(O());
					try {
						const n = await Object(s.c)({
							awardId: e,
							context: i(),
							correlationId: t
						});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const c = n.body;
						if (!c.coinPackages || !c.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						r(g(c))
					} catch (d) {
						Object(c.b)() || console.error(d), a.c.captureException(d);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(j(e))
					}
				}, _ = Object(o.a)(p.h), E = () => async (e, t, {
					gqlContext: r
				}) => {
					var o, i;
					try {
						const t = await Object(s.a)(r());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (o = r.errors) || void 0 === o ? void 0 : o.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (i = r.awards) || void 0 === i ? void 0 : i.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(_({
								awards: r.awards
							})), e(Object(u.B)())
						}
					} catch (p) {
						Object(c.b)() || console.error(p), e(Object(d.f)({
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
				c = r.n(n),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				s = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/config.ts"),
				d = r("./src/higherOrderComponents/asModal/index.tsx"),
				l = r("./src/lib/currency/currencies.ts"),
				u = r("./src/lib/localizeCurrency/index.ts"),
				p = r("./src/reddit/helpers/correlationIdTracker.ts"),
				b = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				f = r("./src/reddit/hooks/useLocale.ts"),
				m = r("./src/reddit/hooks/useTracking.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				O = r("./src/reddit/actions/modal.ts"),
				g = r("./src/reddit/models/Gold/ProductOffer.ts"),
				j = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				h = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				_ = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				E = r("./src/reddit/components/Econ/CoinPackageOfferModal/index.m.less"),
				k = r.n(E);
			const {
				fbt: v
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var w;
			! function(e) {
				e.NEW_PURCHASER = "new_purchaser", e.REPEAT_PURCHASER = "repeat_purchaser"
			}(w || (w = {}));
			const C = [w.NEW_PURCHASER, w.REPEAT_PURCHASER];
			t.default = Object(d.a)((function() {
				const e = Object(f.a)(),
					t = Object(m.a)(),
					r = Object(s.d)(),
					n = Object(s.e)(e => Object(h.r)(e) || Object(p.e)(p.a.GoldPayment, !1)),
					d = Object(s.e)(h.b),
					E = Object(s.e)(e => d && Object(j.c)(e, d)),
					w = Object(s.e)(j.f),
					x = () => {
						r(Object(O.f)())
					};
				if (Object(o.useEffect)(() => {
						E && t(Object(b.h)(void 0, E.mobileId, g.a.StorefrontFreeAward))
					}, []), !E) return x(), null;
				const P = w.find(({
						dealInfo: {
							type: e
						}
					}) => C.includes(e)),
					I = w.length && !c()(P),
					{
						baselineCoins: A,
						baselinePennies: S,
						coins: T,
						pennies: N,
						mobileId: R
					} = I ? P : E,
					M = T - A,
					U = !I && M > 0,
					B = S - N,
					D = N !== S;
				return a.a.createElement(_.e, {
					className: k.a.body
				}, a.a.createElement("button", {
					onClick: () => {
						t(Object(b.b)(void 0, R, g.a.StorefrontFreeAward)), x()
					},
					className: k.a.closeButton
				}, a.a.createElement(_.b, {
					className: k.a.closeIcon
				})), a.a.createElement("div", {
					className: k.a.container
				}, a.a.createElement("div", {
					className: k.a.image,
					style: {
						backgroundImage: `url("${i.a.assetPath}/img/gold/coins-to-award-2x.png")`
					}
				}), a.a.createElement("h4", {
					className: k.a.title
				}, v._("Thanks kind stranger! To keep awarding, get some coins.", null, {
					hk: "2rIhaz"
				})), a.a.createElement("p", {
					className: k.a.description
				}, !D && v._("Buy {coin amount} for {price}", [v._param("coin amount", Object(u.b)(A, {
					locale: e,
					type: l.b.Reddit,
					currency: l.a
				})), v._param("price", Object(u.b)(N, {
					locale: e
				}))], {
					hk: "15hnfi"
				}), I && a.a.createElement("span", {
					className: k.a.leftSpace
				}, v._("and get {coin amount} BONUS coins", [v._param("coin amount", Object(u.a)(M, {
					locale: e
				}))], {
					hk: "26UFcD"
				})), !D && U && a.a.createElement("span", {
					className: k.a.leftSpace
				}, v._("and get {bonus coins} FREE", [v._param("bonus coins", Object(u.b)(A, {
					locale: e,
					type: l.b.Reddit,
					currency: l.a
				}))], {
					hk: "1E3ZU8"
				})), D && v._("Save {baseline price} off normal price!", [v._param("baseline price", Object(u.b)(B, {
					locale: e
				}))], {
					hk: "3DkBgK"
				})), a.a.createElement("p", {
					className: k.a.agreementLink
				}, v._("By purchasing coins, you agree to our {user agreement} and {privacy policy}", [v._param("user agreement", a.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, v._("User Agreement", null, {
					hk: "n6txc"
				}))), v._param("privacy policy", a.a.createElement("a", {
					href: "https://www.redditinc.com/policies/privacy-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, v._("Privacy Policy", null, {
					hk: "11oBec"
				})))], {
					hk: "jKCQS"
				}))), a.a.createElement("div", {
					className: k.a.buttonContainer
				}, a.a.createElement(_.r, {
					className: k.a.button,
					"data-redditstyle": !0,
					onClick: () => {
						t(Object(b.a)(R, g.a.StorefrontFreeAward)), ((e, t) => {
							r(Object(O.f)()), r(Object(y.c)({
								correlationId: t,
								packageId: e
							}))
						})(R, n)
					}
				}, v._("Purchase Coins", null, {
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
				c = r("./node_modules/react/index.js"),
				o = r.n(c),
				a = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/higherOrderComponents/asModal/index.tsx"),
				d = r("./src/lib/currency/currencies.ts"),
				l = r("./src/lib/localizeCurrency/index.ts"),
				u = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				b = r("./src/reddit/hooks/useLocale.ts"),
				f = r("./src/reddit/hooks/useTracking.ts"),
				m = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				y = r("./src/reddit/actions/modal.ts"),
				O = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				g = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				j = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				h = r("./src/reddit/components/Gold/TargetedOfferModal/index.m.less"),
				_ = r.n(h);
			const E = Object(s.c)({
				correlationId: e => Object(g.r)(e) || Object(u.e)(u.a.GoldPayment, !1),
				dealCoinPackages: O.f,
				purchasePackageId: g.b
			});
			const k = Object(a.b)(E, e => ({
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
			t.default = Object(i.a)(k((function(e) {
				const t = Object(b.a)(),
					r = Object(f.a)(),
					{
						correlationId: a,
						dealCoinPackages: s,
						onClose: i,
						onPurchaseClick: u,
						purchasePackageId: m
					} = e,
					y = s.filter(e => e.mobileId === m)[0];
				if (Object(c.useEffect)(() => {
						y && r(Object(p.h)(void 0, y.mobileId))
					}, []), !y) return i(), null;
				const {
					baselineCoins: O,
					baselinePennies: g,
					coins: h,
					dealInfo: E,
					pennies: k,
					mobileId: v
				} = y, w = h - O, C = w > 0, x = g - k, P = k !== g, {
					title: I,
					subtitle: A,
					type: S
				} = E, T = I || ("low_coin_upsell" === S ? n.fbt._("You’re low on coins", null, {
					hk: "2fHrPn"
				}) : n.fbt._("Special Offer!", null, {
					hk: "2wnTrq"
				})), N = A || n.fbt._("Stock up and save with this limited-time offer", null, {
					hk: "2eml5T"
				}), R = C ? n.fbt._("Buy {coin amount} for {price} and get {bonus coins} bonus coins", [n.fbt._param("coin amount", Object(l.b)(O, {
					locale: t,
					type: d.b.Reddit,
					currency: d.a
				})), n.fbt._param("price", Object(l.b)(y.pennies, {
					locale: t
				})), n.fbt._param("bonus coins", Object(l.a)(w, {
					locale: t
				}))], {
					hk: "2ZBhdF"
				}) : P ? n.fbt._("Save {baseline price} off normal price!", [n.fbt._param("baseline price", Object(l.b)(x, {
					locale: t
				}))], {
					hk: "CRTYf"
				}) : y.description;
				return o.a.createElement(j.e, {
					className: _.a.body
				}, o.a.createElement("button", {
					onClick: () => {
						r(Object(p.b)(void 0, v)), i()
					},
					className: _.a.closeButton
				}, o.a.createElement(j.b, null)), o.a.createElement("img", {
					className: _.a.image,
					src: y.images.marketing["2x"].url
				}), o.a.createElement("h4", {
					className: _.a.dealTitle
				}, T), o.a.createElement("p", {
					className: _.a.dealDescription
				}, N), o.a.createElement("h4", {
					className: _.a.deal
				}, R), o.a.createElement("p", {
					className: _.a.agreementLink
				}, n.fbt._("By purchasing coins, you agree to our {user agreement} and {privacy plicy}", [n.fbt._param("user agreement", o.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, n.fbt._("User Agreement", null, {
					hk: "n6txc"
				}))), n.fbt._param("privacy plicy", o.a.createElement("a", {
					href: "https://www.redditinc.com/policies/privacy-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, n.fbt._("Privacy Policy", null, {
					hk: "11oBec"
				})))], {
					hk: "1yjkQh"
				})), o.a.createElement(j.r, {
					className: _.a.button,
					"data-redditstyle": !0,
					onClick: () => {
						r(Object(p.a)(v)), u(y, a)
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
				c = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				a = r("./src/reddit/constants/headers.ts"),
				s = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
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
					u = Object(s.a)(l);
				return Object(c.a)(Object(o.a)(t, [a.a]), {
					method: n.jb.POST,
					endpoint: u,
					data: d
				}).then(i.c)
			}, l = async ({
				context: e,
				coins: t,
				pennies: r,
				correlationId: s
			}) => {
				const d = {
					coins: t,
					pennies: r,
					correlation_id: s
				};
				return Object(c.a)(Object(o.a)(e, [a.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(i.c)
			}, u = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: s,
				correlationId: d
			}) => {
				const l = {
					award_id: t,
					correlation_id: d,
					pennies: r,
					thing_id: s
				};
				return Object(c.a)(Object(o.a)(e, [a.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(i.c)
			}, p = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: s,
				pennies: d,
				correlationId: l
			}) => {
				const u = {
					offer_context: t,
					order_id: r,
					coins: s,
					pennies: d,
					correlation_id: l
				};
				return Object(c.a)(Object(o.a)(e, [a.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: u
				}).then(i.c)
			}, b = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: s,
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
					correlation_id: s,
					is_anonymous: d,
					message: l,
					offer_context: u,
					order_id: p,
					pennies: b,
					thing_id: f
				};
				return Object(c.a)(Object(o.a)(t, [a.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: m
				}).then(i.c)
			}, f = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: s,
				message: d,
				orderId: l,
				thingId: u
			}) => {
				const p = {
					award_id: e,
					correlation_id: r,
					is_anonymous: s,
					message: d,
					order_id: l,
					thing_id: u
				};
				return Object(c.a)(Object(o.a)(t, [a.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: p
				}).then(i.c)
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				c = r("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const r = new n.BigNumber(e),
					c = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(c).toString()
			}

			function a(e, t) {
				return Object(c.b)(parseInt(o(e, t), 10))
			}

			function s(e, t) {
				const r = new n.BigNumber(e),
					c = new n.BigNumber(t || 1);
				return r.multipliedBy(c).toFixed(0)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GoldTargetedOfferModal.2308352a226f43fcbfae.js.map