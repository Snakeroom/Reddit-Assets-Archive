// https://www.redditstatic.com/desktop2x/PowerupsPremiumUpsellModal.498fa93db4a5cf355cf7.js
// Retrieved at 1/6/2022, 12:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PowerupsPremiumUpsellModal", "GoldPurchasePaymentActions", "Premium"], {
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
					h = t.createContext(null);
				h.displayName = "ElementsContext";
				var g = function(e) {
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
					}), [d.stripe]), t.createElement(h.Provider, {
						value: d
					}, o)
				};
				g.propTypes = {
					stripe: s.any,
					options: s.object
				};
				var O = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(h), e)
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
					_ = function() {},
					v = function(e, r) {
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
									d = void 0 === i ? _ : i,
									u = r.onFocus,
									l = void 0 === u ? _ : u,
									m = r.onReady,
									b = void 0 === m ? _ : m,
									y = r.onChange,
									h = void 0 === y ? _ : y,
									g = r.onEscape,
									j = void 0 === g ? _ : g,
									v = r.onClick,
									E = void 0 === v ? _ : v,
									w = O("mounts <".concat(o, ">")).elements,
									k = t.useRef(null),
									C = t.useRef(null),
									x = P(b),
									I = P(d),
									S = P(l),
									A = P(E),
									N = P(h),
									M = P(j);
								t.useLayoutEffect((function() {
									if (null == k.current && w && null != C.current) {
										var t = w.create(e, c);
										k.current = t, t.mount(C.current), t.on("ready", (function() {
											return x(t)
										})), t.on("change", N), t.on("blur", I), t.on("focus", S), t.on("escape", M), t.on("click", A)
									}
								}));
								var T = p(c);
								return t.useEffect((function() {
									if (k.current) {
										var e = f(c, T, ["paymentRequest"]);
										e && k.current.update(e)
									}
								}), [c, T]), t.useLayoutEffect((function() {
									return function() {
										k.current && k.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: s,
									ref: C
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
					E = "undefined" == typeof window,
					w = v("auBankAccount", E),
					k = v("card", E),
					C = v("cardNumber", E),
					x = v("cardExpiry", E),
					I = v("cardCvc", E),
					S = v("fpxBank", E),
					A = v("iban", E),
					N = v("idealBank", E),
					M = v("p24Bank", E),
					T = v("epsBank", E),
					R = v("payment", E),
					U = v("paymentRequestButton", E),
					L = v("linkAuthentication", E),
					B = v("shippingAddress", E),
					D = v("afterpayClearpayMessage", E);
				e.AfterpayClearpayMessageElement = D, e.AuBankAccountElement = w, e.CardCvcElement = I, e.CardElement = k, e.CardExpiryElement = x, e.CardNumberElement = C, e.Elements = g, e.ElementsConsumer = j, e.EpsBankElement = T, e.FpxBankElement = S, e.IbanElement = A, e.IdealBankElement = N, e.LinkAuthenticationElement = L, e.P24BankElement = M, e.PaymentElement = R, e.PaymentRequestButtonElement = U, e.ShippingAddressElement = B, e.useElements = function() {
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
			const d = (e, {
					locale: t = n.DEFAULT_LOCALE,
					pretty: r,
					formatOptions: o
				} = {}) => {
					const s = Number(e);
					return Object(i.c)() ? r ? Object(a.b)(s) : new Intl.NumberFormat(t, o).format(s) : l(s, r, t)
				},
				u = (e, t = {}) => {
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: a,
						formatOptions: d,
						displayConversion: u,
						forceDecimals: f,
						currency: b = t.currency || (t.type ? m(t.type) : s.c),
						type: y = t.type || (t.currency ? p(t.currency) : s.b.Real)
					} = t, h = Number(e), g = String(e);
					switch (y) {
						case s.b.Reddit: {
							const e = s.e[b],
								t = e ? e() : b;
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(h) + " " + t : l(h, a, r, t)
						}
						case s.b.Crypto: {
							if (a) {
								return Object(c.c)(g, u) + " " + b
							}
							const e = Number(Object(c.b)(g, u));
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
							const e = Number(Object(o.a)(g, f));
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
				return C
			})), r.d(t, "j", (function() {
				return I
			})), r.d(t, "g", (function() {
				return S
			})), r.d(t, "f", (function() {
				return A
			})), r.d(t, "d", (function() {
				return N
			})), r.d(t, "c", (function() {
				return M
			})), r.d(t, "a", (function() {
				return B
			})), r.d(t, "h", (function() {
				return G
			})), r.d(t, "e", (function() {
				return q
			})), r.d(t, "i", (function() {
				return Q
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
				h = r("./src/reddit/selectors/gold/productOffers.ts"),
				g = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				O = r("./src/reddit/selectors/user.ts"),
				j = r("./src/reddit/models/Gold/ProductOffer.ts"),
				P = r("./src/reddit/actions/gold/powerups.ts"),
				_ = r("./src/reddit/actions/modal.ts"),
				v = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				E = r("./src/reddit/models/Payments/index.ts");
			const w = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				k = e => e.map(e => e.message).join(" : "),
				C = (e, t, r) => async (o, s, {
					gqlContext: a
				}) => {
					const i = c()(),
						d = await Object(v.f)(a(), i, e, t, r);
					if (d.ok) {
						const e = d.body,
							{
								errors: t,
								order: r
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(k(t));
						if (r) return r.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, x = Object(y.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
					hk: "2LgB2E"
				})), I = (e, t, r, n, o, s, a) => async (i, d, {
					gqlContext: u
				}) => {
					var l;
					const p = d(),
						f = s === j.c.Premium,
						b = s === j.c.Powerups,
						P = {};
					if (b && a) P.powerUps = {
						subredditId: a,
						isAnonymous: n
					};
					else if (f) {
						const e = Object(h.d)(p, {
							provider: E.b.Stripe
						});
						if (!e) return;
						P.premium = {
							pricePackage: e
						}
					}
					let _, w, I = "";
					try {
						I = await i(C(r, o, P))
					} catch (A) {
						return m.c.captureException(A), void(A.message && i(Object(y.stripeApiError)(A.message)))
					}
					i(Object(y.stripeTokenPending)());
					const S = Object(g.y)(p);
					if (S || (_ = await i(Object(y.validateAndCreateStripeToken)(e, t)), w = Object(g.v)(p), _)) try {
						const t = c()(),
							r = S || w ? _ && w ? Object(v.h)(u(), t, I, _.id) : S ? Object(v.j)(u(), t, I, S) : null : Object(v.i)(u(), t, I, _.id),
							s = await r;
						if (!(null == s ? void 0 : s.ok)) return void i(x);
						const p = s.body.data.createEconPayment;
						if (null === (l = null == p ? void 0 : p.errors) || void 0 === l ? void 0 : l.length) return void i(Object(y.stripeApiError)(k(p.errors)));
						const {
							ok: m,
							payment: h,
							providerExecution: {
								paymentIntentClientSecret: g
							}
						} = p;
						if (m && h.status === v.a.ActionRequired) {
							const t = await e.confirmCardPayment(g),
								{
									error: r
								} = t;
							if (r) return ((e, t) => {
								var r, n;
								(null === (n = null === (r = e.payment_intent) || void 0 === r ? void 0 : r.last_payment_error) || void 0 === n ? void 0 : n.message) ? t(Object(y.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(y.stripeApiError)(e.message)) : t(x)
							})(r, i);
							let n;
							if (!(n = S ? await Object(v.e)(u(), c()(), h.id, S) : await Object(v.d)(u(), c()(), h.id, _.id, w)).ok) return void i(x);
							const o = n.body;
							if (!o.data.confirmEconPayment.ok || o.data.confirmEconPayment.payment.status !== v.a.Paid) return void i(x)
						} else if (m && h.status !== v.a.Paid) return void i(x);
						const j = Object(O.k)(d());
						j && (b && a ? i(G({
							subredditId: a,
							powerupsCount: o,
							user: j,
							isAnonymous: n
						})) : f && i(q({
							user: j
						})))
					} catch (A) {
						m.c.captureException(A), i(x)
					}
				}, S = (e, t, r, n, o) => async (s, a, {
					gqlContext: d
				}) => {
					var u;
					const p = a(),
						f = n === j.c.Premium,
						b = n === j.c.Powerups,
						g = {};
					if (b && o) g.powerUps = {
						subredditId: o,
						isAnonymous: t
					};
					else if (f) {
						const e = Object(h.d)(p, {
							provider: E.b.PayPal
						});
						if (!e) return null;
						g.premium = {
							pricePackage: e
						}
					}
					let P = "";
					try {
						P = await s(C(e, r, g))
					} catch (I) {
						return m.c.captureException(I), I.message && s(Object(y.paypalApiError)(I.message)), null
					}
					const _ = i.a.redditUrl;
					let x = {
						_o: _,
						o: P,
						pt: n
					};
					b && o && (x = {
						...x,
						r: o
					});
					try {
						const e = Object(l.a)(`${_}/framedModal/paypal-finish`, {
								...x,
								s: !0
							}),
							n = Object(l.a)(`${_}/framedModal/paypal-finish`, x),
							i = c()(),
							p = await Object(v.g)(d(), i, P, e, n);
						if (p && p.ok) {
							const e = p.body.data.createEconPayment;
							if (null === (u = null == e ? void 0 : e.errors) || void 0 === u ? void 0 : u.length) return s(Object(y.paypalApiError)(k(e.errors))), null;
							const n = Object(O.k)(a());
							if (e.ok) {
								const {
									status: a
								} = e.payment;
								if (a === v.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === a && n) return o ? s(G({
									subredditId: o,
									powerupsCount: r,
									user: n,
									isAnonymous: t
								})) : f && s(q({
									user: n
								})), null
							}
						}
					} catch (I) {
						m.c.captureException(I)
					}
					return s(Object(y.paypalApiError)(w())), null
				}, A = (e, t) => async (r, n, {
					gqlContext: o
				}) => {
					var s;
					try {
						const n = c()(),
							a = await Object(v.c)(o(), n, e, t);
						if (a && a.ok) {
							const e = a.body.data.confirmEconPayment;
							if (null === (s = null == e ? void 0 : e.errors) || void 0 === s ? void 0 : s.length) return r(Object(y.paypalApiError)(k(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (a) {
						m.c.captureException(a)
					}
					return r(Object(y.paypalApiError)(w())), !1
				}, N = () => async (e, t, {
					gqlContext: r
				}) => {
					e(Object(y.savedCardsPending)());
					try {
						const t = await Object(v.l)(r());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(y.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: n
							} = r.data.identity, o = n.map(e => s()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(y.savedCardsSuccess)(o)), o[0] && e(Object(y.selectSavedCard)(o[0].cardId))
						} else e(Object(y.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (o) {
						m.c.captureException(o), e(Object(y.savedCardsSuccess)([]))
					}
				}, M = e => async (t, r, {
					gqlContext: n
				}) => {
					t(Object(y._deleteSavedCard)(e));
					try {
						const t = await Object(v.k)(n(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: o
							} = r.data.deleteEconPaymentMethod;
						if (o && o.length) throw new Error(k(o))
					} catch (o) {
						m.c.captureException(o)
					}
				}, T = Object(p.a)(b.O), R = Object(p.a)(b.P), U = Object(p.a)(b.Q), L = e => async (t, r) => {
					await t(T(e)), t(Object(u.f)({
						kind: f.b.Error,
						duration: u.a,
						text: e
					}))
				}, B = (e, t, r) => async (o, s, {
					gqlContext: a
				}) => {
					o(R({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const s = await Object(v.b)(a(), e);
						if (s.ok) {
							const e = s.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void o(L(n[0].message));
							o(U({
								subredditId: t,
								allocatedAt: r
							}))
						} else o(L(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (c) {
						m.c.captureException(c), o(L(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, D = Object(p.a)(b.S), G = e => async (t, r) => {
					t(D(e)), t(Object(P.m)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(_.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(_.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, F = Object(p.a)(b.W), q = ({
					user: e
				}) => async t => {
					await t(Object(P.o)(!0)), t(F({
						user: e
					}))
				}, Q = Object(p.a)(b.ab)
		},
		"./src/reddit/actions/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return I
			})), r.d(t, "c", (function() {
				return N
			})), r.d(t, "b", (function() {
				return M
			})), r.d(t, "a", (function() {
				return T
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				c = r("./src/reddit/models/Gold/ProductOffer.ts"),
				i = r("./src/reddit/models/Toast/index.ts"),
				d = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				l = r("./src/redditGQL/operations/GlobalProductOffers.json"),
				p = r("./src/redditGQL/operations/PremiumProductOfferSubscriptions.json"),
				m = r("./src/redditGQL/operations/ProductOffers.json");
			var f = r("./src/reddit/selectors/gold/productOffers.ts"),
				b = r("./src/reddit/actions/gold/constants.ts");
			const y = Object(o.a)(b.db),
				h = Object(o.a)(b.cb),
				g = Object(o.a)(b.bb),
				O = Object(o.a)(b.Z),
				j = Object(o.a)(b.Y),
				P = Object(o.a)(b.X),
				_ = Object(o.a)(b.Eb),
				v = Object(o.a)(b.Cb),
				E = Object(o.a)(b.Db),
				w = Object(o.a)(b.Hb),
				k = Object(o.a)(b.Gb),
				C = Object(o.a)(b.Fb),
				x = e => async t => {
					t(Object(a.f)({
						kind: i.b.Error,
						duration: a.a,
						text: e
					}))
				}, I = (e, t) => async r => {
					e === c.c.Premium ? r(A()) : t && r(S(e, t))
				}, S = (e, t) => async (r, o, {
					gqlContext: s
				}) => {
					const a = o();
					if (!Object(f.i)(a, {
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
							}))(s(), t, [e], !0);
							if (n.ok) {
								const e = n.body;
								if (e.errors && e.errors.length) throw new Error(e.errors[0].message);
								const o = e.data.subredditInfoById.productOffers ? e.data.subredditInfoById.productOffers.offers : [];
								return void(await r(h({
									productOffers: o || [],
									subredditId: t
								})))
							}
						} catch (c) {
							const e = n.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							});
							r(g(e)), r(x(e))
						}
					}
				}, A = () => async (e, t, {
					gqlContext: r
				}) => {
					var o, a;
					const i = c.c.Premium;
					e(O());
					try {
						const t = await ((e, t) => Object(u.a)(e, {
							...l,
							variables: {
								productTypes: t
							}
						}))(r(), [i]);
						if (t.ok) {
							const r = t.body;
							if (null === (o = r.errors) || void 0 === o ? void 0 : o.length) throw new Error(r.errors[0].message);
							return void e(j({
								productOffers: null !== (a = r.data.globalProductOffers.offers) && void 0 !== a ? a : []
							}))
						}
					} catch (d) {
						const t = d.message ? d.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						s.c.captureMessage(t), e(P(t)), e(x(t))
					}
				}, N = () => async (e, t, {
					gqlContext: r
				}) => {
					var o, a, c;
					e(_());
					try {
						const t = await (e => Object(u.a)(e, p))(r());
						if (t.error) throw new Error(t.error.type);
						if (t.ok) {
							const r = t.body;
							if (null === (o = r.errors) || void 0 === o ? void 0 : o.length) throw new Error(r.errors[0].message);
							return void e(E({
								subscriptions: null !== (c = null === (a = r.data.identity) || void 0 === a ? void 0 : a.econSubscriptions) && void 0 !== c ? c : []
							}))
						}
					} catch (i) {
						s.c.captureException(i);
						const t = i.message ? i.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						e(v(t)), e(x(t))
					}
				}, M = e => async (t, r, {
					gqlContext: o
				}) => {
					var s;
					t(w(e));
					try {
						const r = await Object(d.b)(o(), e);
						if (r.error) throw new Error(r.error.type);
						if (r.ok) {
							const n = r.body,
								{
									errors: o
								} = n.data.cancelEconRecurringPayment;
							if (null == o ? void 0 : o.length) throw new Error(o[0].message);
							t(C({
								orderId: e
							}))
						}
						return !0
					} catch (a) {
						const e = null !== (s = a.message) && void 0 !== s ? s : n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						});
						return t(k(e)), t(x(e)), !1
					}
				}, T = e => async t => {
					const r = await t(M(e));
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
				return u
			})), r.d(t, "paymentCompleted", (function() {
				return l
			})), r.d(t, "cardNameInput", (function() {
				return p
			})), r.d(t, "postalCodeInput", (function() {
				return m
			})), r.d(t, "cardNameEmpty", (function() {
				return f
			})), r.d(t, "cardNumberChange", (function() {
				return b
			})), r.d(t, "cardExpiryChange", (function() {
				return y
			})), r.d(t, "cardCvcChange", (function() {
				return h
			})), r.d(t, "stripeTokenPending", (function() {
				return g
			})), r.d(t, "stripeTokenError", (function() {
				return O
			})), r.d(t, "stripeApiError", (function() {
				return j
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return P
			})), r.d(t, "paypalApiError", (function() {
				return _
			})), r.d(t, "toggleRememberCard", (function() {
				return v
			})), r.d(t, "selectSavedCard", (function() {
				return E
			})), r.d(t, "_deleteSavedCard", (function() {
				return w
			})), r.d(t, "deleteSavedCard", (function() {
				return k
			})), r.d(t, "savedCardsPending", (function() {
				return C
			})), r.d(t, "savedCardsSuccess", (function() {
				return x
			})), r.d(t, "loadSavedCards", (function() {
				return I
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/endpoints/gold/purchase.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const u = Object(s.a)(d.B),
				l = Object(s.a)(d.w),
				p = Object(s.a)(d.b),
				m = Object(s.a)(d.y),
				f = Object(s.a)(d.a),
				b = Object(s.a)(d.G),
				y = Object(s.a)(d.F),
				h = Object(s.a)(d.E),
				g = Object(s.a)(d.I),
				O = Object(s.a)(d.H),
				j = Object(s.a)(d.D),
				P = (e, t) => async (r, s) => {
					const a = s(),
						c = Object(i.h)(a),
						d = Object(i.l)(a),
						u = t.getElement(n.CardNumberElement);
					if (!u) return;
					const {
						token: l,
						error: p
					} = await e.createToken(u, {
						name: c,
						address_zip: d
					});
					if (c.trim()) {
						if (!p && l) return l;
						r(O(p || void 0))
					} else {
						const e = o.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(f({
							message: e
						}))
					}
				}, _ = Object(s.a)(d.x), v = Object(s.a)(d.J), E = Object(s.a)(d.C), w = Object(s.a)(d.g), k = e => async (t, r, {
					apiContext: n
				}) => {
					t(w(e));
					try {
						const t = await Object(c.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						a.c.captureException(o)
					}
				}, C = Object(s.a)(d.z), x = Object(s.a)(d.A), I = () => async (e, t, {
					apiContext: r
				}) => {
					e(C());
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
						e(x(n)), n[0] && e(E(n[0].cardId))
					} catch (n) {
						a.c.captureException(n), e(x([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "setPremiumPurchaseModalInfo", (function() {
				return h
			})), r.d(t, "clearPremiumPurchaseModalInfo", (function() {
				return g
			})), r.d(t, "openPremiumPurchaseModal", (function() {
				return O
			})), r.d(t, "closePremiumPurchaseModal", (function() {
				return j
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return P
			})), r.d(t, "paymentBlobCreated", (function() {
				return _
			})), r.d(t, "openWithBlob", (function() {
				return v
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
			const h = Object(s.a)(y.t),
				g = Object(s.a)(y.e),
				O = (e, t) => async r => {
					r(h(e)), r(Object(u.h)(l.a.ECON_PREMIUM_PURCHASE, t))
				}, j = () => async e => {
					e(Object(u.g)(l.a.ECON_PREMIUM_PURCHASE)), e(g())
				}, P = (e, t) => async (r, n, {
					apiContext: s
				}) => {
					const a = Object(b.a)(n()),
						u = (null == a ? void 0 : a.pennies) || c.yb,
						l = Object(f.c)(f.a.GoldPayment);
					r(Object(d.stripeTokenPending)());
					const p = await r(Object(d.validateAndCreateStripeToken)(e, t));
					if (p) try {
						const e = await Object(m.h)({
							context: s(),
							correlationId: l,
							pennies: u,
							token: p
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
				}, _ = Object(s.a)(y.v), v = ({
					packageId: e,
					correlationId: t
				}, r) => async (o, s, {
					apiContext: c
				}) => {
					o(O({
						packageId: e,
						correlationId: t
					}, r));
					const u = Object(b.a)(s()),
						l = (null == u ? void 0 : u.paypalButtonId) || n.a.paypal.buttons.premium;
					if (l) try {
						const e = await Object(p.f)({
							buttonId: l,
							context: c(),
							correlationId: t
						});
						if (e.error) {
							const t = Object(i.a)(e.error);
							o(Object(d.paypalApiError)(t))
						} else o(_(e))
					} catch (m) {
						const e = Object(i.a)(m);
						o(Object(d.paypalApiError)(e))
					} else a.c.captureMessage("No Premium packages available on Premium purchase modal")
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return y
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "a", (function() {
				return _
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/env/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/endpoints/gold/productCatalog/index.ts"),
				i = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/models/Toast/index.ts"),
				l = r("./src/reddit/actions/post.ts"),
				p = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const m = Object(s.a)(p.j),
				f = Object(s.a)(p.k),
				b = Object(s.a)(p.i),
				y = e => async (t, r, {
					apiContext: s
				}) => {
					t(m());
					const d = r(),
						u = Object(i.J)(d);
					try {
						const r = !u,
							n = await Object(c.b)({
								context: s(),
								correlationId: e,
								shouldUseCurrentOrigin: r
							});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const o = n.body;
						t(f(o))
					} catch (l) {
						Object(o.b)() || console.error(l), a.c.captureException(l);
						const e = n.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(b(e))
					}
				}, h = Object(s.a)(p.m), g = Object(s.a)(p.n), O = Object(s.a)(p.l), j = (e, t) => async (r, s, {
					apiContext: i
				}) => {
					r(h());
					try {
						const n = await Object(c.c)({
							awardId: e,
							context: i(),
							correlationId: t
						});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const o = n.body;
						if (!o.coinPackages || !o.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						r(g(o))
					} catch (d) {
						Object(o.b)() || console.error(d), a.c.captureException(d);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(O(e))
					}
				}, P = Object(s.a)(p.h), _ = () => async (e, t, {
					gqlContext: r
				}) => {
					var s, i;
					try {
						const t = await Object(c.a)(r());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (s = r.errors) || void 0 === s ? void 0 : s.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (i = r.awards) || void 0 === i ? void 0 : i.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(P({
								awards: r.awards
							})), e(Object(l.B)())
						}
					} catch (p) {
						Object(o.b)() || console.error(p), e(Object(d.f)({
							kind: u.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), a.c.captureException(p)
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
			} = r("./node_modules/fbt/lib/FbtPublic.js"), u = ({
				className: e,
				highContrast: t,
				onClick: r
			}) => s.a.createElement("button", {
				onClick: r,
				className: Object(n.a)(i.a.closeButton, {
					[i.a.highContrast]: t
				}, e),
				"aria-label": d._("Close", null, {
					hk: "3Qarlp"
				})
			}, s.a.createElement(a.b, {
				className: i.a.closeIcon
			}))
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
				return X
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
				h = r("./src/config.ts"),
				g = r("./src/lib/localizeCurrency/index.ts"),
				O = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				j = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				P = r("./src/reddit/controls/Button/index.tsx"),
				_ = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = r("./src/reddit/hooks/useLocale.ts"),
				E = r("./src/reddit/actions/gold/productOffers.ts"),
				w = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				k = r("./src/reddit/helpers/correlationIdTracker.ts"),
				C = r("./src/reddit/models/Gold/Premium/index.ts"),
				x = r("./src/reddit/models/Gold/ProductOffer.ts"),
				I = r("./src/reddit/selectors/gold/productOffers.ts"),
				S = r("./src/reddit/selectors/gold/purchaseCatalog.ts");
			var A = r("./src/reddit/pages/Premium/BenefitsSection/constants.ts"),
				N = r("./src/lib/classNames/index.ts"),
				M = r("./src/reddit/icons/fonts/index.tsx"),
				T = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/checklist.m.less"),
				R = r.n(T);
			const U = ({
					className: e,
					items: t
				}) => o.a.createElement("div", {
					className: e
				}, t.map(e => o.a.createElement(L, {
					key: e,
					className: R.a.checklistItem,
					item: e
				}))),
				L = ({
					className: e,
					item: t
				}) => o.a.createElement("div", {
					className: Object(N.a)(R.a.checklistItemRow, e)
				}, o.a.createElement("div", {
					className: R.a.iconBackground
				}, o.a.createElement(M.a, {
					className: R.a.icon,
					name: "checkmark_fill"
				})), o.a.createElement("span", {
					className: R.a.checklistItemText
				}, t));
			var B = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/offerCard.m.less"),
				D = r.n(B);
			const G = ({
				className: e,
				body: t,
				buttons: r,
				iconUrl: n,
				title: s
			}) => o.a.createElement("div", {
				className: Object(N.a)(e, D.a.container)
			}, o.a.createElement("div", {
				className: D.a.icon,
				style: {
					backgroundImage: `url('${n}')`
				}
			}), o.a.createElement("h3", {
				className: D.a.title
			}, s), t, o.a.createElement("div", {
				className: D.a.buttons
			}, r));
			var F = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/offers.m.less"),
				q = r.n(F);
			const {
				fbt: Q
			} = r("./node_modules/fbt/lib/FbtPublic.js"), W = ["premium-powerups"], H = ["premium-powerups", "premium-ad-free", "premium-avatars", "premium-monthly-coins"], $ = ({
				subredditId: e
			}) => {
				const t = Object(s.d)(),
					r = Object(v.b)(),
					a = Object(b.a)(),
					i = function() {
						var e, t;
						const r = Object(s.d)(),
							o = Object(s.e)(S.l),
							a = Object(s.e)(I.e),
							c = Object(s.e)(S.o);
						Object(n.useEffect)(() => {
							o.length || c || r(Object(w.b)()), a || r(Object(E.d)(x.c.Premium))
						});
						const i = o.find(e => e.frequency === C.c.Monthly),
							d = o.find(e => e.frequency === C.c.Yearly);
						if (!i || !d) return null;
						const u = null === (e = Object(I.j)(a, x.b.Month)) || void 0 === e ? void 0 : e[0],
							l = null === (t = Object(I.j)(a, x.b.Year)) || void 0 === t ? void 0 : t[0];
						return u && l ? {
							correlationId: Object(k.e)(k.a.GoldPayment, !1),
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
					d = Object(s.e)(t => Object(I.a)(t, {
						subredditId: e
					})),
					u = Object(s.e)(S.j),
					l = W.map(e => A.d[e]());
				return o.a.createElement("div", {
					className: q.a.container
				}, i && d ? o.a.createElement(o.a.Fragment, null, o.a.createElement(G, {
					title: Q._("Powerups Subscription", null, {
						hk: "4zbTSR"
					}),
					iconUrl: `${h.a.assetPath}/img/gold/premium-marketing/benefits-icons/premium-powerups.png`,
					body: o.a.createElement(U, {
						items: l
					}),
					buttons: d && o.a.createElement(P.t, {
						className: q.a.powerupsButton,
						priority: P.c.Secondary,
						onClick: () => {
							a(Object(m.w)()), t(Object(c.h)(p.a.ECON_POWERUPS_PURCHASE, {
								subredditId: e
							}))
						},
						isFullWidth: !0
					}, Q._("{powerupPrice}/mo", [Q._param("powerupPrice", Object(g.b)(d, {
						locale: r
					}))], {
						hk: "1ApJir"
					}))
				}), o.a.createElement(G, {
					title: Q._("Reddit Premium", null, {
						hk: "S3DXw"
					}),
					iconUrl: `${h.a.assetPath}/img/gold/premium-marketing/benefits-icons/premium-crest.png`,
					body: o.a.createElement(J, {
						premiumMonthlyCoins: u
					}),
					buttons: i && o.a.createElement(Y, {
						premiumMonthly: i.premiumMonthly,
						premiumAnnual: i.premiumAnnual,
						onClickPrice: (r, n) => {
							a(Object(m.x)(n)), t(Object(j.openWithBlob)({
								correlationId: i.correlationId,
								packageId: r
							}, {
								isPowerupsPremiumPurchase: !0,
								subredditId: e
							})), t(Object(O.i)({
								renewInterval: n
							}))
						},
						locale: r
					})
				})) : o.a.createElement(_.a, {
					className: q.a.loadingIcon,
					sizePx: 40
				}))
			}, J = ({
				premiumMonthlyCoins: e
			}) => {
				const t = H.map(t => A.d[t]({
					periodicalCoins: e
				}));
				return o.a.createElement("div", null, o.a.createElement(U, {
					items: t
				}), o.a.createElement("div", {
					className: q.a.andSoMuchMore
				}, Q._("And so much more!", null, {
					hk: "oMd"
				})))
			}, Y = ({
				premiumMonthly: e,
				premiumAnnual: t,
				locale: r,
				onClickPrice: n
			}) => o.a.createElement("div", {
				className: q.a.premiumButtons
			}, o.a.createElement(P.t, {
				className: q.a.powerupsButton,
				priority: P.c.Secondary,
				onClick: () => n(e.packageId, x.b.Month),
				isFullWidth: !0
			}, Q._("{premiumMonthlyPrice}/mo", [Q._param("premiumMonthlyPrice", Object(g.b)(e.price, {
				locale: r
			}))], {
				hk: "4i6SO9"
			})), o.a.createElement(P.k, {
				className: q.a.powerupsButton,
				onClick: () => n(t.packageId, x.b.Year),
				isFullWidth: !0
			}, Q._("{premiumAnnualPrice}/yr", [Q._param("premiumAnnualPrice", Object(g.b)(t.price, {
				locale: r
			}))], {
				hk: "2YAbPf"
			})));
			var V = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.m.less"),
				z = r.n(V);
			const {
				fbt: Z
			} = r("./node_modules/fbt/lib/FbtPublic.js"), X = () => {
				const e = Object(s.e)(y.s),
					t = Object(s.d)(),
					r = Object(b.a)();
				Object(n.useEffect)(() => {
					e && r(Object(m.y)())
				}, [r, e]), Object(f.a)(l.a), Object(f.a)(d.a);
				const a = () => t(Object(c.g)(p.a.ECON_POWERUPS_PREMIUM_UPSELL));
				return e ? o.a.createElement(o.a.Fragment, null, o.a.createElement(i.a, {
					onClick: a,
					highContrast: !0
				}), o.a.createElement("div", {
					className: z.a.container
				}, o.a.createElement("h1", {
					className: z.a.title
				}, Z._("Get more with Premium!", null, {
					hk: "YXIbY"
				})), o.a.createElement($, {
					subredditId: e
				}), o.a.createElement("div", {
					className: z.a.footer
				}, Z._("Subscriptions automatically renew.", null, {
					hk: "133vve"
				})), o.a.createElement(u.a, {
					space: u.b.MODAL
				}))) : (a(), null)
			};
			t.default = Object(a.a)(X)
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
				e[e.SIDEBAR = 0] = "SIDEBAR", e[e.MODAL = 1] = "MODAL", e[e.INFEED_UNIT = 2] = "INFEED_UNIT"
			}(n || (n = {}));
			const p = ({
				space: e
			}) => {
				const t = Object(i.e)(d.W),
					r = e === n.MODAL,
					a = e === n.INFEED_UNIT;
				return c.a.createElement("div", {
					className: Object(s.a)(l.a.background, {
						[l.a.isNightmodeOn]: t,
						[l.a.isModal]: r,
						[l.a.isInFeedUnit]: a
					})
				}, c.a.createElement("div", {
					className: l.a.colorBlockCorner
				}), c.a.createElement("div", {
					className: l.a.colorBlockThrough
				}), c.a.createElement("div", {
					className: l.a.circleStriped,
					style: {
						backgroundImage: t ? `url(${o.a.assetPath}/img/powerups/linecircle-lightblue.png)` : `url(${o.a.assetPath}/img/powerups/linecircle-blue.png)`
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
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => o.a.createElement("div", {
				className: Object(s.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
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
			const d = async ({
				buttonId: e,
				context: t,
				correlationId: r
			}) => {
				const d = {
						button_id: e,
						correlation_id: r
					},
					u = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					l = Object(c.a)(u);
				return Object(o.a)(Object(s.a)(t, [a.a]), {
					method: n.jb.POST,
					endpoint: l,
					data: d
				}).then(i.c)
			}, u = async ({
				context: e,
				coins: t,
				pennies: r,
				correlationId: c
			}) => {
				const d = {
					coins: t,
					pennies: r,
					correlation_id: c
				};
				return Object(o.a)(Object(s.a)(e, [a.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(i.c)
			}, l = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: c,
				correlationId: d
			}) => {
				const u = {
					award_id: t,
					correlation_id: d,
					pennies: r,
					thing_id: c
				};
				return Object(o.a)(Object(s.a)(e, [a.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: u
				}).then(i.c)
			}, p = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: c,
				pennies: d,
				correlationId: u
			}) => {
				const l = {
					offer_context: t,
					order_id: r,
					coins: c,
					pennies: d,
					correlation_id: u
				};
				return Object(o.a)(Object(s.a)(e, [a.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: l
				}).then(i.c)
			}, m = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: c,
				isAnonymous: d,
				message: u,
				offerContext: l,
				orderId: p,
				pennies: m,
				thingId: f
			}) => {
				const b = {
					award_id: e,
					coins: r,
					correlation_id: c,
					is_anonymous: d,
					message: u,
					offer_context: l,
					order_id: p,
					pennies: m,
					thing_id: f
				};
				return Object(o.a)(Object(s.a)(t, [a.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: b
				}).then(i.c)
			}, f = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: c,
				message: d,
				orderId: u,
				thingId: l
			}) => {
				const p = {
					award_id: e,
					correlation_id: r,
					is_anonymous: c,
					message: d,
					order_id: u,
					thing_id: l
				};
				return Object(o.a)(Object(s.a)(t, [a.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: p
				}).then(i.c)
			}
		},
		"./src/reddit/endpoints/gold/productCatalog/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return h
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "d", (function() {
				return P
			})), r.d(t, "a", (function() {
				return _
			}));
			var n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				s = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/redditGQL/operations/ClaimAwardOffer.json"),
				i = r("./src/redditGQL/operations/FetchSpecialEvents.json"),
				d = r("./src/reddit/constants/headers.ts"),
				u = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				l = r("./src/reddit/endpoints/gold/purchase.ts");
			const p = e => ({
					baselineCoins: e.baseline_coins || e.coins,
					baselinePennies: e.baseline_pennies || e.pennies,
					bonusPct: e.bonus_pct,
					coins: e.coins,
					description: e.description,
					featured: e.featured,
					featuredLabel: e.featured_label,
					images: {
						marketing: e.images.marketing,
						purchaseSuccess: e.images.purchase_success
					},
					mobileId: e.mobile_id,
					pennies: e.pennies
				}),
				m = e => e.map(p),
				f = e => e.map(e => {
					return {
						...p(e),
						dealInfo: {
							type: e.deal_info.type,
							title: e.deal_info.title,
							subtitle: e.deal_info.subtitle,
							displayDelay: e.deal_info.display_delay
						}
					}
				}),
				b = e => e.map(e => ({
					defaultSignupBonusCoins: e.default_signup_bonus_coins,
					bonusPct: e.bonus_pct,
					description: e.description,
					frequency: e.frequency,
					frequencyDays: e.frequency_days,
					images: {
						marketing: e.images.marketing,
						purchaseSuccess: e.images.purchase_success
					},
					mobileId: e.mobile_id,
					mobilePennies: e.mobile_pennies,
					paypalButtonId: e.paypal_button_id,
					pennies: e.pennies,
					periodicalCoins: e.periodical_coins,
					signupBonusCoins: e.signup_bonus_coins
				})),
				y = e => e ? {
					ctaText: e.cta_text,
					dropdownHeaderText: e.dropdown_banner_text,
					dropdownHeaderBackgroundAsset: e.dropdown_banner_image_url,
					endsAt: e.ends_at,
					heroImageUrl: e.hero_image_url,
					heroSubtext: e.hero_subtext,
					heroText: e.hero_text
				} : null,
				h = async ({
					context: e,
					correlationId: t,
					shouldUseCurrentOrigin: r
				}) => {
					const s = "/api/v2/gold/purchase_package_details",
						c = r && "undefined" != typeof window ? `${window.location.origin}${s}` : `${e.apiUrl}${s}`,
						i = Object(u.a)(c);
					return Object(o.a)(Object(a.a)(e, [d.a]), {
						method: n.jb.GET,
						endpoint: i,
						data: {
							correlation_id: t
						}
					}).then(l.c).then(g)
				};

			function g(e) {
				if (!e.ok) return e;
				const {
					active_sale: t,
					coin_packages: r,
					deals: n,
					premium_packages: o
				} = e.body, s = {
					activeSaleConfig: y(t),
					coinPackages: m(r),
					dealCoinPackages: f(n),
					premiumPackages: b(o)
				};
				return {
					...e,
					body: s
				}
			}
			const O = async ({
				context: e,
				awardId: t,
				correlationId: r
			}) => {
				const s = `${e.apiUrl}/api/v2/gold/recommended_coin_package_details`,
					c = Object(u.a)(s);
				return Object(o.a)(Object(a.a)(e, [d.a]), {
					method: n.jb.GET,
					endpoint: c,
					data: {
						correlation_id: r,
						intended_award: t
					}
				}).then(l.c).then(j)
			};

			function j(e) {
				if (!e.ok) return e;
				const t = e.body,
					r = {
						coinPackages: m([t])
					};
				return {
					...e,
					body: r
				}
			}
			const P = e => Object(s.a)(e, {
					...i
				}),
				_ = e => Object(s.a)(e, {
					...c,
					variables: {
						input: {
							offerId: "free_awards"
						}
					}
				})
		},
		"./src/reddit/endpoints/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return h
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "j", (function() {
				return P
			})), r.d(t, "g", (function() {
				return _
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "b", (function() {
				return k
			})), r.d(t, "l", (function() {
				return C
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
			const h = (e, t, r, n, s) => {
				const {
					premium: a,
					...c
				} = s, i = (null == a ? void 0 : a.pricePackage) || r.pricePackages[0], u = new o.a(i.price).multipliedBy(n).toFixed();
				return Object(y.a)(e, {
					...d,
					variables: {
						input: {
							nonce: t,
							productId: r.id,
							productVersion: r.version,
							pricePackageId: i.id,
							currency: i.currency,
							price: u,
							productsCount: n.toString(),
							...c
						}
					}
				})
			};
			var g;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(g || (g = {}));
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
				_ = (e, t, r, n, o) => Object(y.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: r,
						successUrl: n,
						cancelUrl: o
					}
				}),
				v = (e, t, r, n) => Object(y.a)(e, {
					...a,
					variables: {
						nonce: t,
						paymentId: r,
						token: n
					}
				}),
				E = (e, t, r, n) => Object(y.a)(e, {
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
				k = (e, t) => Object(y.a)(e, {
					...s,
					variables: {
						orderId: t
					}
				}),
				C = e => Object(y.a)(e, {
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
			r.d(t, "c", (function() {
				return p
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "h", (function() {
				return y
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "i", (function() {
				return g
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "b", (function() {
				return j
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
				m = async ({
					coins: e,
					context: t,
					correlationId: r,
					offerContext: s,
					pennies: c,
					rememberCard: u,
					token: l,
					savedCardId: m
				}) => {
					const f = {
							token: l ? l.id : void 0,
							coins: e,
							offer_context: s,
							pennies: c,
							remember_card: u,
							card_id: m,
							correlation_id: r
						},
						b = `${t.apiUrl}/api/v2/gold/stripe/buy_coins`,
						y = Object(d.a)(b);
					return Object(o.a)(Object(a.a)(t, [i.a]), {
						method: n.jb.POST,
						endpoint: y,
						data: f
					}).then(p)
				}, f = async ({
					coins: e,
					context: t,
					correlationId: r,
					gildParams: s,
					isOldReddit: c,
					offerContext: u,
					pennies: l,
					rememberCard: m,
					thingId: f,
					token: b,
					savedCardId: y
				}) => {
					const {
						gildType: h,
						isAnonymous: g,
						message: O
					} = s, j = {
						token: b ? b.id : void 0,
						coins: e,
						offer_context: u,
						pennies: l,
						thing_id: f,
						gild_type: h,
						message: O ? O.trim() : "",
						is_anonymous: g,
						remember_card: m,
						card_id: y,
						correlation_id: r
					}, P = `${t.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, _ = c ? P : Object(d.a)(P);
					return Object(o.a)(Object(a.a)(t, [i.a]), {
						method: n.jb.POST,
						endpoint: _,
						data: j
					}).then(p)
				}, b = async ({
					context: e,
					correlationId: t,
					gildParams: r,
					isOldReddit: s,
					pennies: c,
					rememberCard: u,
					thingId: l,
					token: m,
					savedCardId: f
				}) => {
					const {
						gildType: b,
						isAnonymous: y,
						message: h
					} = r, g = {
						token: m ? m.id : void 0,
						thing_id: l,
						award_id: b,
						message: h ? h.trim() : "",
						is_anonymous: y,
						pennies: c,
						remember_card: u,
						card_id: f,
						correlation_id: t
					}, O = `${e.apiUrl}/api/v2/gold/stripe/buy_award`, j = s ? O : Object(d.a)(O);
					return Object(o.a)(Object(a.a)(e, [i.a]), {
						method: n.jb.POST,
						endpoint: j,
						data: g
					}).then(p)
				}, y = async ({
					context: e,
					correlationId: t,
					pennies: r,
					token: s
				}) => {
					const c = {
							token: s.id,
							pennies: r,
							correlation_id: t
						},
						u = `${e.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						l = Object(d.a)(u);
					return Object(o.a)(Object(a.a)(e, [i.a]), {
						method: n.jb.POST,
						endpoint: l,
						data: c
					}).then(p)
				}, h = "paymentInfoUpdated", g = async e => {
					const {
						origin: t
					} = window.location, r = `${t}/settings/premium`, n = new URLSearchParams({
						[h]: "true"
					}), o = await Object(s.a)(e, {
						...c,
						variables: {
							successUrl: `${r}?${n}`,
							cancelUrl: `${r}`
						}
					});
					if (!o.ok) throw new Error("Unable to update payment information");
					return o.body.data.changeStripePaymentMethod.sessionId
				}, O = async (e, t) => {
					const r = {
						card_id: t
					};
					return Object(o.a)(Object(a.a)(e, [i.a]), {
						method: n.jb.POST,
						endpoint: `${e.apiUrl}/api/v2/gold/stripe/delete_creditcard`,
						data: r
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(l.a)(e)
					})
				}, j = async e => Object(o.a)(Object(a.a)(e, [i.a]), {
					method: n.jb.GET,
					endpoint: `${e.apiUrl}/api/v2/gold/stripe/creditcards`
				}).then(e => e.ok ? {
					...e
				} : {
					...e,
					error: Object(l.a)(e)
				})
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
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
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
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "b", (function() {
				return c
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
				s = (e, t = !1) => {
					const r = [];
					for (const n in o) {
						const s = o[n];
						(s.priceInCoins <= e || t) && r.push(s)
					}
					return r
				},
				a = e => n.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [n.fbt._plural(e.monthsOfPremium, "number of months"), n.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				c = "com.reddit.premium_1";
			var i;
			! function(e) {
				e.Monthly = "monthly", e.Yearly = "yearly"
			}(i || (i = {}))
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "e", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "d", (function() {
				return i
			}));
			var n, o = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
			}(n || (n = {}));
			const s = {
				[n.Powerups]: () => o.fbt._("Reddit - Buy Powerups", null, {
					hk: "4sEI31"
				}),
				[n.Premium]: () => o.fbt._("Reddit - Buy Premium", null, {
					hk: "19EtMU"
				})
			};
			var a, c;
			! function(e) {
				e.Month = "MONTH", e.Year = "YEAR"
			}(a || (a = {})),
			function(e) {
				e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
			}(c || (c = {}));
			const i = (e, t) => {
				const r = e && e.dealInfo && e.dealInfo.type,
					n = "low_coin_upsell" === r,
					o = "new_purchaser" === r,
					s = "repeat_purchaser" === r;
				return t ? c.GildFlow : n ? c.LowCoinBalance : o ? c.NewUserTargetedOffer : s ? c.RepeatUserTargetedOffer : void 0
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
					"premium-monthly-coins": ({
						periodicalCoins: e
					}) => n.fbt._("{amount}Monthly Coins", [n.fbt._param("amount", e ? e + " " : "")], {
						hk: "3rUDgA"
					}),
					"premium-lounge": () => n.fbt._("Members Lounge", null, {
						hk: "3iqx0z"
					}),
					"premium-awards": () => n.fbt._("Premium Awards", null, {
						hk: "3cn0Pf"
					}),
					"premium-more": () => n.fbt._("More to come...", null, {
						hk: "oz7E8"
					}),
					"premium-bonus": ({
						bonusCoins: e
					}) => n.fbt._("{amount} Coin Bonus!", [n.fbt._param("amount", e)], {
						hk: "2W5D7B"
					})
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
					"premium-monthly-coins": ({
						periodicalCoins: e
					}) => n.fbt._("Get {amount} coins a month and make it rain awards", [n.fbt._param("amount", e)], {
						hk: "228nfD"
					}),
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
			r.d(t, "h", (function() {
				return i
			})), r.d(t, "i", (function() {
				return d
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "g", (function() {
				return h
			})), r.d(t, "f", (function() {
				return g
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/makeProductOfferKey/index.ts"),
				s = r("./src/reddit/models/Gold/ProductOffer.ts"),
				a = r("./src/reddit/models/Payments/index.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				d = (e, {
					subredditId: t,
					type: r
				}) => {
					var n, s, a;
					return t ? e.subreddits.productOffers[Object(o.a)(r, t)] : null === (a = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === s ? void 0 : s.productOffers) || void 0 === a ? void 0 : a[Object(o.a)(r)]
				},
				u = (e, {
					subredditId: t
				}) => {
					const r = d(e, {
						subredditId: t,
						type: s.c.Powerups
					});
					return r && r[0]
				},
				l = (e, t) => {
					var r;
					const n = u(e, t);
					return null === (r = null == n ? void 0 : n.pricePackages) || void 0 === r ? void 0 : r[0].price
				},
				p = e => {
					const t = d(e, {
						type: s.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				m = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === a.b.PayPal || e[0] === a.b.Stripe)(e.requiredPaymentProviders)) : null,
				f = Object(n.a)(p, c.p, (e, t) => m(e, t) || null),
				b = Object(n.a)(f, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				y = Object(n.a)(f, e => (null == e ? void 0 : e[0].price) || null),
				h = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				g = Object(n.a)(h, e => Boolean(null == e ? void 0 : e.isCanceled))
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
				return h
			})), r.d(t, "l", (function() {
				return g
			})), r.d(t, "w", (function() {
				return O
			})), r.d(t, "x", (function() {
				return j
			})), r.d(t, "v", (function() {
				return P
			})), r.d(t, "y", (function() {
				return _
			})), r.d(t, "f", (function() {
				return v
			})), r.d(t, "g", (function() {
				return E
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "k", (function() {
				return k
			})), r.d(t, "j", (function() {
				return C
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
				h = e => e.features.goldPurchase.payment.cardName,
				g = e => e.features.goldPurchase.payment.postalCode,
				O = e => e.features.goldPurchase.payment.savedCardsPending,
				j = e => e.features.goldPurchase.payment.savedCards,
				P = e => e.features.goldPurchase.payment.rememberCard,
				_ = e => e.features.goldPurchase.payment.useSavedCard,
				v = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				E = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				w = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				k = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				C = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
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
			e.exports = JSON.parse('{"id":"6ad51fec38be"}')
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
			e.exports = JSON.parse('{"id":"8bca171d6bb4"}')
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
		"./src/redditGQL/operations/UserSavedStripeCards.json": function(e) {
			e.exports = JSON.parse('{"id":"d29c51cfbfe6"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PowerupsPremiumUpsellModal.498fa93db4a5cf355cf7.js.map