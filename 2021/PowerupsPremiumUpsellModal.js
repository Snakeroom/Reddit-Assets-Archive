// https://www.redditstatic.com/desktop2x/PowerupsPremiumUpsellModal.5438880719fa49aa03f4.js
// Retrieved at 12/13/2021, 12:10:04 PM by Reddit Dataminer v1.0.0
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
						return null !== e && "object" === s(e)
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
									s = Object.keys(r);
								if (c.length !== s.length) return !1;
								for (var a = {}, i = 0; i < c.length; i += 1) a[c[i]] = !0;
								for (var d = 0; d < s.length; d += 1) a[s[d]] = !0;
								var u = Object.keys(a);
								if (u.length !== c.length) return !1;
								var l = t,
									p = r;
								return u.every((function(t) {
									return e(l[t], p[t])
								}))
							}(e[o], t[o]);
							return r.includes(o) ? (c && console.warn("Unsupported prop change: options.".concat(o, " is not a mutable property.")), n) : c ? d(d({}, n || {}), {}, a({}, o, e[o])) : n
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
				var O = function(e) {
					var r = e.stripe,
						n = e.options,
						o = e.children,
						c = t.useRef(!1),
						s = t.useRef(!0),
						a = t.useMemo((function() {
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
					null !== m && m !== r && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), c.current || ("sync" === a.tag && (c.current = !0, l({
						stripe: a.stripe,
						elements: a.stripe.elements(n)
					})), "async" === a.tag && (c.current = !0, a.stripePromise.then((function(e) {
						e && s.current && l({
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
					}), [d.stripe]), t.createElement(h.Provider, {
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
						}(t.useContext(h), e)
					},
					j = function(e) {
						return (0, e.children)(g("mounts <ElementsConsumer>"))
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
									d = void 0 === i ? P : i,
									u = r.onFocus,
									l = void 0 === u ? P : u,
									m = r.onReady,
									b = void 0 === m ? P : m,
									y = r.onChange,
									h = void 0 === y ? P : y,
									O = r.onEscape,
									j = void 0 === O ? P : O,
									E = r.onClick,
									w = void 0 === E ? P : E,
									_ = g("mounts <".concat(o, ">")).elements,
									k = t.useRef(null),
									C = t.useRef(null),
									x = v(b),
									I = v(d),
									S = v(l),
									N = v(w),
									A = v(h),
									M = v(j);
								t.useLayoutEffect((function() {
									if (null == k.current && _ && null != C.current) {
										var t = _.create(e, a);
										k.current = t, t.mount(C.current), t.on("ready", (function() {
											return x(t)
										})), t.on("change", A), t.on("blur", I), t.on("focus", S), t.on("escape", M), t.on("click", N)
									}
								}));
								var T = p(a);
								return t.useEffect((function() {
									if (k.current) {
										var e = f(a, T, ["paymentRequest"]);
										e && k.current.update(e)
									}
								}), [a, T]), t.useLayoutEffect((function() {
									return function() {
										k.current && k.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: c,
									ref: C
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
					w = "undefined" == typeof window,
					_ = E("auBankAccount", w),
					k = E("card", w),
					C = E("cardNumber", w),
					x = E("cardExpiry", w),
					I = E("cardCvc", w),
					S = E("fpxBank", w),
					N = E("iban", w),
					A = E("idealBank", w),
					M = E("p24Bank", w),
					T = E("epsBank", w),
					U = E("payment", w),
					B = E("paymentRequestButton", w),
					R = E("linkAuthentication", w),
					L = E("shippingAddress", w),
					D = E("afterpayClearpayMessage", w);
				e.AfterpayClearpayMessageElement = D, e.AuBankAccountElement = _, e.CardCvcElement = I, e.CardElement = k, e.CardExpiryElement = x, e.CardNumberElement = C, e.Elements = O, e.ElementsConsumer = j, e.EpsBankElement = T, e.FpxBankElement = S, e.IbanElement = N, e.IdealBankElement = A, e.LinkAuthenticationElement = R, e.P24BankElement = M, e.PaymentElement = U, e.PaymentRequestButtonElement = B, e.ShippingAddressElement = L, e.useElements = function() {
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
				return u
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
				s = r("./src/lib/prettyPrintNumber/index.ts"),
				a = r("./src/reddit/helpers/governance/tokens.ts"),
				i = r("./src/reddit/constants/intlSupport.ts");
			const d = (e, {
					locale: t = n.DEFAULT_LOCALE,
					pretty: r,
					formatOptions: o
				} = {}) => {
					const c = Number(e);
					return Object(i.c)() ? r ? Object(s.b)(c) : new Intl.NumberFormat(t, o).format(c) : l(c, r, t)
				},
				u = (e, t = {}) => {
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: s,
						formatOptions: d,
						displayConversion: u,
						forceDecimals: f,
						currency: b = t.currency || (t.type ? m(t.type) : c.c),
						type: y = t.type || (t.currency ? p(t.currency) : c.b.Real)
					} = t, h = Number(e), O = String(e);
					switch (y) {
						case c.b.Reddit: {
							const e = c.e[b],
								t = e ? e() : b;
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(h) + " " + t : l(h, s, r, t)
						}
						case c.b.Crypto: {
							if (s) {
								return Object(a.c)(O, u) + " " + b
							}
							const e = Number(Object(a.b)(O, u));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : l(e, s, r, b)
						}
						case c.b.Real:
						default: {
							const e = Number(Object(o.a)(O, f));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								notation: s ? "compact" : "standard",
								...d
							}).format(e) : l(e, s, r, b)
						}
					}
				},
				l = (e, t, r, n) => {
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
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return C
			})), r.d(t, "j", (function() {
				return I
			})), r.d(t, "g", (function() {
				return S
			})), r.d(t, "f", (function() {
				return N
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "c", (function() {
				return M
			})), r.d(t, "a", (function() {
				return L
			})), r.d(t, "h", (function() {
				return G
			})), r.d(t, "e", (function() {
				return q
			})), r.d(t, "i", (function() {
				return W
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/lodash/omit.js"),
				c = r.n(o),
				s = r("./node_modules/uuid/v4.js"),
				a = r.n(s),
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
				O = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				j = r("./src/reddit/models/Gold/ProductOffer.ts"),
				v = r("./src/reddit/actions/gold/powerups.ts"),
				P = r("./src/reddit/actions/modal.ts"),
				E = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				w = r("./src/reddit/models/Payments/index.ts");
			const _ = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				k = e => e.map(e => e.message).join(" : "),
				C = (e, t, r) => async (o, c, {
					gqlContext: s
				}) => {
					const i = a()(),
						d = await Object(E.f)(s(), i, e, t, r);
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
				})), I = (e, t, r, n, o, c, s) => async (i, d, {
					gqlContext: u
				}) => {
					var l;
					const p = d(),
						f = c === j.c.Premium,
						b = c === j.c.Powerups,
						v = {};
					if (b && s) v.powerUps = {
						subredditId: s,
						isAnonymous: n
					};
					else if (f) {
						const e = Object(h.d)(p, {
							provider: w.b.Stripe
						});
						if (!e) return;
						v.premium = {
							pricePackage: e
						}
					}
					let P, _, I = "";
					try {
						I = await i(C(r, o, v))
					} catch (N) {
						return m.c.captureException(N), void(N.message && i(Object(y.stripeApiError)(N.message)))
					}
					i(Object(y.stripeTokenPending)());
					const S = Object(O.y)(p);
					if (S || (P = await i(Object(y.validateAndCreateStripeToken)(e, t)), _ = Object(O.v)(p), P)) try {
						const t = a()(),
							r = S || _ ? P && _ ? Object(E.h)(u(), t, I, P.id) : S ? Object(E.j)(u(), t, I, S) : null : Object(E.i)(u(), t, I, P.id),
							c = await r;
						if (!(null == c ? void 0 : c.ok)) return void i(x);
						const p = c.body.data.createEconPayment;
						if (null === (l = null == p ? void 0 : p.errors) || void 0 === l ? void 0 : l.length) return void i(Object(y.stripeApiError)(k(p.errors)));
						const {
							ok: m,
							payment: h,
							providerExecution: {
								paymentIntentClientSecret: O
							}
						} = p;
						if (m && h.status === E.a.ActionRequired) {
							const t = await e.confirmCardPayment(O),
								{
									error: r
								} = t;
							if (r) return ((e, t) => {
								var r, n;
								(null === (n = null === (r = e.payment_intent) || void 0 === r ? void 0 : r.last_payment_error) || void 0 === n ? void 0 : n.message) ? t(Object(y.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(y.stripeApiError)(e.message)) : t(x)
							})(r, i);
							let n;
							if (!(n = S ? await Object(E.e)(u(), a()(), h.id, S) : await Object(E.d)(u(), a()(), h.id, P.id, _)).ok) return void i(x);
							const o = n.body;
							if (!o.data.confirmEconPayment.ok || o.data.confirmEconPayment.payment.status !== E.a.Paid) return void i(x)
						} else if (m && h.status !== E.a.Paid) return void i(x);
						const j = Object(g.k)(d());
						j && (b && s ? i(G({
							subredditId: s,
							powerupsCount: o,
							user: j,
							isAnonymous: n
						})) : f && i(q({
							user: j
						})))
					} catch (N) {
						m.c.captureException(N), i(x)
					}
				}, S = (e, t, r, n, o) => async (c, s, {
					gqlContext: d
				}) => {
					var u;
					const p = s(),
						f = n === j.c.Premium,
						b = n === j.c.Powerups,
						O = {};
					if (b && o) O.powerUps = {
						subredditId: o,
						isAnonymous: t
					};
					else if (f) {
						const e = Object(h.d)(p, {
							provider: w.b.PayPal
						});
						if (!e) return null;
						O.premium = {
							pricePackage: e
						}
					}
					let v = "";
					try {
						v = await c(C(e, r, O))
					} catch (I) {
						return m.c.captureException(I), I.message && c(Object(y.paypalApiError)(I.message)), null
					}
					const P = i.a.redditUrl;
					let x = {
						_o: P,
						o: v,
						pt: n
					};
					b && o && (x = {
						...x,
						r: o
					});
					try {
						const e = Object(l.a)(`${P}/framedModal/paypal-finish`, {
								...x,
								s: !0
							}),
							n = Object(l.a)(`${P}/framedModal/paypal-finish`, x),
							i = a()(),
							p = await Object(E.g)(d(), i, v, e, n);
						if (p && p.ok) {
							const e = p.body.data.createEconPayment;
							if (null === (u = null == e ? void 0 : e.errors) || void 0 === u ? void 0 : u.length) return c(Object(y.paypalApiError)(k(e.errors))), null;
							const n = Object(g.k)(s());
							if (e.ok) {
								const {
									status: s
								} = e.payment;
								if (s === E.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === s && n) return o ? c(G({
									subredditId: o,
									powerupsCount: r,
									user: n,
									isAnonymous: t
								})) : f && c(q({
									user: n
								})), null
							}
						}
					} catch (I) {
						m.c.captureException(I)
					}
					return c(Object(y.paypalApiError)(_())), null
				}, N = (e, t) => async (r, n, {
					gqlContext: o
				}) => {
					var c;
					try {
						const n = a()(),
							s = await Object(E.c)(o(), n, e, t);
						if (s && s.ok) {
							const e = s.body.data.confirmEconPayment;
							if (null === (c = null == e ? void 0 : e.errors) || void 0 === c ? void 0 : c.length) return r(Object(y.paypalApiError)(k(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (s) {
						m.c.captureException(s)
					}
					return r(Object(y.paypalApiError)(_())), !1
				}, A = () => async (e, t, {
					gqlContext: r
				}) => {
					e(Object(y.savedCardsPending)());
					try {
						const t = await Object(E.l)(r());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(y.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: n
							} = r.data.identity, o = n.map(e => c()({
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
						const t = await Object(E.k)(n(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: o
							} = r.data.deleteEconPaymentMethod;
						if (o && o.length) throw new Error(k(o))
					} catch (o) {
						m.c.captureException(o)
					}
				}, T = Object(p.a)(b.O), U = Object(p.a)(b.P), B = Object(p.a)(b.Q), R = e => async (t, r) => {
					await t(T(e)), t(Object(u.f)({
						kind: f.b.Error,
						duration: u.a,
						text: e
					}))
				}, L = (e, t, r) => async (o, c, {
					gqlContext: s
				}) => {
					o(U({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const c = await Object(E.b)(s(), e);
						if (c.ok) {
							const e = c.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void o(R(n[0].message));
							o(B({
								subredditId: t,
								allocatedAt: r
							}))
						} else o(R(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (a) {
						m.c.captureException(a), o(R(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, D = Object(p.a)(b.S), G = e => async (t, r) => {
					t(D(e)), t(Object(v.m)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(P.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(P.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, F = Object(p.a)(b.W), q = ({
					user: e
				}) => async t => {
					await t(Object(v.o)(!0)), t(F({
						user: e
					}))
				}, W = Object(p.a)(b.ab)
		},
		"./src/reddit/actions/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return I
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
				s = r("./src/reddit/actions/toaster.ts"),
				a = r("./src/reddit/models/Gold/ProductOffer.ts"),
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
				O = Object(o.a)(b.bb),
				g = Object(o.a)(b.Z),
				j = Object(o.a)(b.Y),
				v = Object(o.a)(b.X),
				P = Object(o.a)(b.Eb),
				E = Object(o.a)(b.Cb),
				w = Object(o.a)(b.Db),
				_ = Object(o.a)(b.Hb),
				k = Object(o.a)(b.Gb),
				C = Object(o.a)(b.Fb),
				x = e => async t => {
					t(Object(s.f)({
						kind: i.b.Error,
						duration: s.a,
						text: e
					}))
				}, I = (e, t) => async r => {
					e === a.c.Premium ? r(N()) : t && r(S(e, t))
				}, S = (e, t) => async (r, o, {
					gqlContext: c
				}) => {
					const s = o();
					if (!Object(f.i)(s, {
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
							}))(c(), t, [e], !0);
							if (n.ok) {
								const e = n.body;
								if (e.errors && e.errors.length) throw new Error(e.errors[0].message);
								const o = e.data.subredditInfoById.productOffers ? e.data.subredditInfoById.productOffers.offers : [];
								return void(await r(h({
									productOffers: o || [],
									subredditId: t
								})))
							}
						} catch (a) {
							const e = n.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							});
							r(O(e)), r(x(e))
						}
					}
				}, N = () => async (e, t, {
					gqlContext: r
				}) => {
					var o, s;
					const i = a.c.Premium;
					e(g());
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
								productOffers: null !== (s = r.data.globalProductOffers.offers) && void 0 !== s ? s : []
							}))
						}
					} catch (d) {
						const t = d.message ? d.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						c.c.captureMessage(t), e(v(t)), e(x(t))
					}
				}, A = () => async (e, t, {
					gqlContext: r
				}) => {
					var o, s, a;
					e(P());
					try {
						const t = await (e => Object(u.a)(e, p))(r());
						if (t.error) throw new Error(t.error.type);
						if (t.ok) {
							const r = t.body;
							if (null === (o = r.errors) || void 0 === o ? void 0 : o.length) throw new Error(r.errors[0].message);
							return void e(w({
								subscriptions: null !== (a = null === (s = r.data.identity) || void 0 === s ? void 0 : s.econSubscriptions) && void 0 !== a ? a : []
							}))
						}
					} catch (i) {
						c.c.captureException(i);
						const t = i.message ? i.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						e(E(t)), e(x(t))
					}
				}, M = e => async (t, r, {
					gqlContext: o
				}) => {
					var c;
					t(_(e));
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
					} catch (s) {
						const e = null !== (c = s.message) && void 0 !== c ? c : n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						});
						return t(k(e)), t(x(e)), !1
					}
				}, T = e => async t => {
					const r = await t(M(e));
					return r ? (t(Object(s.f)({
						duration: s.a,
						kind: i.b.SuccessCommunity,
						text: n.fbt._("Changes saved", null, {
							hk: "2GeuMT"
						})
					})), t(A())) : t(Object(s.f)({
						duration: s.a,
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
				return O
			})), r.d(t, "stripeTokenError", (function() {
				return g
			})), r.d(t, "stripeApiError", (function() {
				return j
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return v
			})), r.d(t, "paypalApiError", (function() {
				return P
			})), r.d(t, "toggleRememberCard", (function() {
				return E
			})), r.d(t, "selectSavedCard", (function() {
				return w
			})), r.d(t, "_deleteSavedCard", (function() {
				return _
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
				c = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				a = r("./src/reddit/endpoints/gold/purchase.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const u = Object(c.a)(d.B),
				l = Object(c.a)(d.w),
				p = Object(c.a)(d.b),
				m = Object(c.a)(d.y),
				f = Object(c.a)(d.a),
				b = Object(c.a)(d.G),
				y = Object(c.a)(d.F),
				h = Object(c.a)(d.E),
				O = Object(c.a)(d.I),
				g = Object(c.a)(d.H),
				j = Object(c.a)(d.D),
				v = (e, t) => async (r, c) => {
					const s = c(),
						a = Object(i.h)(s),
						d = Object(i.l)(s),
						u = t.getElement(n.CardNumberElement);
					if (!u) return;
					const {
						token: l,
						error: p
					} = await e.createToken(u, {
						name: a,
						address_zip: d
					});
					if (a.trim()) {
						if (!p && l) return l;
						r(g(p || void 0))
					} else {
						const e = o.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(f({
							message: e
						}))
					}
				}, P = Object(c.a)(d.x), E = Object(c.a)(d.J), w = Object(c.a)(d.C), _ = Object(c.a)(d.g), k = e => async (t, r, {
					apiContext: n
				}) => {
					t(_(e));
					try {
						const t = await Object(a.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						s.c.captureException(o)
					}
				}, C = Object(c.a)(d.z), x = Object(c.a)(d.A), I = () => async (e, t, {
					apiContext: r
				}) => {
					e(C());
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
						e(x(n)), n[0] && e(w(n[0].cardId))
					} catch (n) {
						s.c.captureException(n), e(x([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "setPremiumPurchaseModalInfo", (function() {
				return h
			})), r.d(t, "clearPremiumPurchaseModalInfo", (function() {
				return O
			})), r.d(t, "openPremiumPurchaseModal", (function() {
				return g
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
				s = r("./src/lib/sentry/index.ts"),
				a = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/formatApiError/index.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/constants/modals.ts"),
				p = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				m = r("./src/reddit/endpoints/gold/purchase.ts"),
				f = r("./src/reddit/helpers/correlationIdTracker.ts"),
				b = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const h = Object(c.a)(y.t),
				O = Object(c.a)(y.e),
				g = (e, t) => async r => {
					r(h(e)), r(Object(u.h)(l.a.ECON_PREMIUM_PURCHASE, t))
				}, j = () => async e => {
					e(Object(u.g)(l.a.ECON_PREMIUM_PURCHASE)), e(O())
				}, v = (e, t) => async (r, n, {
					apiContext: c
				}) => {
					const s = Object(b.a)(n()),
						u = (null == s ? void 0 : s.pennies) || a.yb,
						l = Object(f.c)(f.a.GoldPayment);
					r(Object(d.stripeTokenPending)());
					const p = await r(Object(d.validateAndCreateStripeToken)(e, t));
					if (p) try {
						const e = await Object(m.h)({
							context: c(),
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
				}, P = Object(c.a)(y.v), E = ({
					packageId: e,
					correlationId: t
				}, r) => async (o, c, {
					apiContext: a
				}) => {
					o(g({
						packageId: e,
						correlationId: t
					}, r));
					const u = Object(b.a)(c()),
						l = (null == u ? void 0 : u.paypalButtonId) || n.a.paypal.buttons.premium;
					if (l) try {
						const e = await Object(p.f)({
							buttonId: l,
							context: a(),
							correlationId: t
						});
						if (e.error) {
							const t = Object(i.a)(e.error);
							o(Object(d.paypalApiError)(t))
						} else o(P(e))
					} catch (m) {
						const e = Object(i.a)(m);
						o(Object(d.paypalApiError)(e))
					} else s.c.captureMessage("No Premium packages available on Premium purchase modal")
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return y
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "a", (function() {
				return P
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/env/index.ts"),
				c = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				a = r("./src/reddit/endpoints/gold/productCatalog/index.ts"),
				i = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/models/Toast/index.ts"),
				l = r("./src/reddit/actions/post.ts"),
				p = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const m = Object(c.a)(p.j),
				f = Object(c.a)(p.k),
				b = Object(c.a)(p.i),
				y = e => async (t, r, {
					apiContext: c
				}) => {
					t(m());
					const d = r(),
						u = Object(i.K)(d);
					try {
						const r = !u,
							n = await Object(a.b)({
								context: c(),
								correlationId: e,
								shouldUseCurrentOrigin: r
							});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const o = n.body;
						t(f(o))
					} catch (l) {
						Object(o.b)() || console.error(l), s.c.captureException(l);
						const e = n.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(b(e))
					}
				}, h = Object(c.a)(p.m), O = Object(c.a)(p.n), g = Object(c.a)(p.l), j = (e, t) => async (r, c, {
					apiContext: i
				}) => {
					r(h());
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
				}, v = Object(c.a)(p.h), P = () => async (e, t, {
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
							await e(v({
								awards: r.awards
							})), e(Object(l.B)())
						}
					} catch (p) {
						Object(o.b)() || console.error(p), e(Object(d.f)({
							kind: u.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), s.c.captureException(p)
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
				s = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				a = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				i = r.n(a);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js"), u = ({
				className: e,
				highContrast: t,
				onClick: r
			}) => c.a.createElement("button", {
				onClick: r,
				className: Object(n.a)(i.a.closeButton, {
					[i.a.highContrast]: t
				}, e),
				"aria-label": d._("Close", null, {
					hk: "3Qarlp"
				})
			}, c.a.createElement(s.b, {
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
				return $
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				c = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/higherOrderComponents/asModal/index.tsx"),
				a = r("./src/reddit/actions/modal.ts"),
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
				O = r("./src/lib/localizeCurrency/index.ts"),
				g = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				j = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				v = r("./src/reddit/controls/Button/index.tsx"),
				P = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				E = r("./src/reddit/hooks/useLocale.ts"),
				w = r("./src/reddit/actions/gold/productOffers.ts"),
				_ = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				k = r("./src/reddit/helpers/correlationIdTracker.ts"),
				C = r("./src/reddit/models/Gold/Premium/index.ts"),
				x = r("./src/reddit/models/Gold/ProductOffer.ts"),
				I = r("./src/reddit/selectors/gold/productOffers.ts"),
				S = r("./src/reddit/selectors/gold/purchaseCatalog.ts");
			var N = r("./src/reddit/pages/Premium/BenefitsSection/constants.ts"),
				A = r("./src/lib/classNames/index.ts"),
				M = r("./src/reddit/icons/fonts/index.tsx"),
				T = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/checklist.m.less"),
				U = r.n(T);
			const B = ({
					className: e,
					items: t
				}) => o.a.createElement("div", {
					className: e
				}, t.map(e => o.a.createElement(R, {
					key: e,
					className: U.a.checklistItem,
					item: e
				}))),
				R = ({
					className: e,
					item: t
				}) => o.a.createElement("div", {
					className: Object(A.a)(U.a.checklistItemRow, e)
				}, o.a.createElement("div", {
					className: U.a.iconBackground
				}, o.a.createElement(M.a, {
					className: U.a.icon,
					name: "checkmark_fill"
				})), o.a.createElement("span", {
					className: U.a.checklistItemText
				}, t));
			var L = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/offerCard.m.less"),
				D = r.n(L);
			const G = ({
				className: e,
				body: t,
				buttons: r,
				iconUrl: n,
				title: c
			}) => o.a.createElement("div", {
				className: Object(A.a)(e, D.a.container)
			}, o.a.createElement("div", {
				className: D.a.icon,
				style: {
					backgroundImage: `url('${n}')`
				}
			}), o.a.createElement("h3", {
				className: D.a.title
			}, c), t, o.a.createElement("div", {
				className: D.a.buttons
			}, r));
			var F = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/offers.m.less"),
				q = r.n(F);
			const {
				fbt: W
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Q = ["premium-powerups"], H = ["premium-powerups", "premium-ad-free", "premium-avatars", "premium-monthly-coins"], J = ({
				subredditId: e
			}) => {
				const t = Object(c.d)(),
					r = Object(E.b)(),
					s = Object(b.a)(),
					i = function() {
						var e, t;
						const r = Object(c.d)(),
							o = Object(c.e)(S.l),
							s = Object(c.e)(I.e),
							a = Object(c.e)(S.o);
						Object(n.useEffect)(() => {
							o.length || a || r(Object(_.b)()), s || r(Object(w.d)(x.c.Premium))
						});
						const i = o.find(e => e.frequency === C.c.Monthly),
							d = o.find(e => e.frequency === C.c.Yearly);
						if (!i || !d) return null;
						const u = null === (e = Object(I.j)(s, x.b.Month)) || void 0 === e ? void 0 : e[0],
							l = null === (t = Object(I.j)(s, x.b.Year)) || void 0 === t ? void 0 : t[0];
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
					d = Object(c.e)(t => Object(I.a)(t, {
						subredditId: e
					})),
					u = Object(c.e)(S.j),
					l = Q.map(e => N.d[e]());
				return o.a.createElement("div", {
					className: q.a.container
				}, i && d ? o.a.createElement(o.a.Fragment, null, o.a.createElement(G, {
					title: W._("Powerups Subscription", null, {
						hk: "4zbTSR"
					}),
					iconUrl: `${h.a.assetPath}/img/gold/premium-marketing/benefits-icons/premium-powerups.png`,
					body: o.a.createElement(B, {
						items: l
					}),
					buttons: d && o.a.createElement(v.t, {
						className: q.a.powerupsButton,
						priority: v.c.Secondary,
						onClick: () => {
							s(Object(m.w)()), t(Object(a.h)(p.a.ECON_POWERUPS_PURCHASE))
						},
						isFullWidth: !0
					}, W._("{powerupPrice}/mo", [W._param("powerupPrice", Object(O.b)(d, {
						locale: r
					}))], {
						hk: "1ApJir"
					}))
				}), o.a.createElement(G, {
					title: W._("Reddit Premium", null, {
						hk: "S3DXw"
					}),
					iconUrl: `${h.a.assetPath}/img/gold/premium-marketing/benefits-icons/premium-crest.png`,
					body: o.a.createElement(Y, {
						premiumMonthlyCoins: u
					}),
					buttons: i && o.a.createElement(z, {
						premiumMonthly: i.premiumMonthly,
						premiumAnnual: i.premiumAnnual,
						onClickPrice: (e, r) => {
							s(Object(m.x)(r)), t(Object(j.openWithBlob)({
								correlationId: i.correlationId,
								packageId: e
							}, {
								isPowerupsPremiumPurchase: !0
							})), t(Object(g.i)({
								renewInterval: r
							}))
						},
						locale: r
					})
				})) : o.a.createElement(P.a, {
					className: q.a.loadingIcon,
					sizePx: 40
				}))
			}, Y = ({
				premiumMonthlyCoins: e
			}) => {
				const t = H.map(t => N.d[t]({
					periodicalCoins: e
				}));
				return o.a.createElement("div", null, o.a.createElement(B, {
					items: t
				}), o.a.createElement("div", {
					className: q.a.andSoMuchMore
				}, W._("And so much more!", null, {
					hk: "oMd"
				})))
			}, z = ({
				premiumMonthly: e,
				premiumAnnual: t,
				locale: r,
				onClickPrice: n
			}) => o.a.createElement("div", {
				className: q.a.premiumButtons
			}, o.a.createElement(v.t, {
				className: q.a.powerupsButton,
				priority: v.c.Secondary,
				onClick: () => n(e.packageId, x.b.Month),
				isFullWidth: !0
			}, W._("{premiumMonthlyPrice}/mo", [W._param("premiumMonthlyPrice", Object(O.b)(e.price, {
				locale: r
			}))], {
				hk: "4i6SO9"
			})), o.a.createElement(v.k, {
				className: q.a.powerupsButton,
				onClick: () => n(t.packageId, x.b.Year),
				isFullWidth: !0
			}, W._("{premiumAnnualPrice}/yr", [W._param("premiumAnnualPrice", Object(O.b)(t.price, {
				locale: r
			}))], {
				hk: "2YAbPf"
			})));
			var V = r("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.m.less"),
				Z = r.n(V);
			const {
				fbt: K
			} = r("./node_modules/fbt/lib/FbtPublic.js"), $ = () => {
				const e = Object(c.e)(y.s),
					t = Object(c.d)(),
					r = Object(b.a)();
				Object(n.useEffect)(() => {
					e && r(Object(m.y)())
				}, [r, e]), Object(f.a)(l.a), Object(f.a)(d.a);
				const s = () => t(Object(a.g)(p.a.ECON_POWERUPS_PREMIUM_UPSELL));
				return e ? o.a.createElement(o.a.Fragment, null, o.a.createElement(i.a, {
					onClick: s,
					highContrast: !0
				}), o.a.createElement("div", {
					className: Z.a.container
				}, o.a.createElement("h1", {
					className: Z.a.title
				}, K._("Get more with Premium!", null, {
					hk: "YXIbY"
				})), o.a.createElement(J, {
					subredditId: e
				}), o.a.createElement("div", {
					className: Z.a.footer
				}, K._("Subscriptions automatically renew.", null, {
					hk: "133vve"
				})), o.a.createElement(u.a, {
					space: u.b.MODAL
				}))) : (s(), null)
			};
			t.default = Object(s.a)($)
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
				c = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
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
				const t = Object(i.e)(d.X),
					r = e === n.MODAL,
					s = e === n.INFEED_UNIT;
				return a.a.createElement("div", {
					className: Object(c.a)(l.a.background, {
						[l.a.isNightmodeOn]: t,
						[l.a.isModal]: r,
						[l.a.isInFeedUnit]: s
					})
				}, a.a.createElement("div", {
					className: l.a.colorBlockCorner
				}), a.a.createElement("div", {
					className: l.a.colorBlockThrough
				}), a.a.createElement("div", {
					className: l.a.circleStriped,
					style: {
						backgroundImage: t ? `url(${o.a.assetPath}/img/powerups/linecircle-lightblue.png)` : `url(${o.a.assetPath}/img/powerups/linecircle-blue.png)`
					}
				}), a.a.createElement("div", {
					className: l.a.circleOrangeHollow
				}), a.a.createElement("div", {
					className: l.a.circleDotted,
					style: {
						backgroundImage: `url(${o.a.assetPath}/img/powerups/dotcircle.png)`
					}
				}), a.a.createElement("div", {
					className: l.a.circleGreenHollow
				}), a.a.createElement("div", {
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
					u = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					l = Object(a.a)(u);
				return Object(o.a)(Object(c.a)(t, [s.a]), {
					method: n.jb.POST,
					endpoint: l,
					data: d
				}).then(i.c)
			}, u = async ({
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
			}, l = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: a,
				correlationId: d
			}) => {
				const u = {
					award_id: t,
					correlation_id: d,
					pennies: r,
					thing_id: a
				};
				return Object(o.a)(Object(c.a)(e, [s.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: u
				}).then(i.c)
			}, p = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: a,
				pennies: d,
				correlationId: u
			}) => {
				const l = {
					offer_context: t,
					order_id: r,
					coins: a,
					pennies: d,
					correlation_id: u
				};
				return Object(o.a)(Object(c.a)(e, [s.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: l
				}).then(i.c)
			}, m = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: a,
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
					correlation_id: a,
					is_anonymous: d,
					message: u,
					offer_context: l,
					order_id: p,
					pennies: m,
					thing_id: f
				};
				return Object(o.a)(Object(c.a)(t, [s.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: b
				}).then(i.c)
			}, f = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: a,
				message: d,
				orderId: u,
				thingId: l
			}) => {
				const p = {
					award_id: e,
					correlation_id: r,
					is_anonymous: a,
					message: d,
					order_id: u,
					thing_id: l
				};
				return Object(o.a)(Object(c.a)(t, [s.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: p
				}).then(i.c)
			}
		},
		"./src/reddit/endpoints/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return h
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "i", (function() {
				return g
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
				return _
			})), r.d(t, "b", (function() {
				return k
			})), r.d(t, "l", (function() {
				return C
			})), r.d(t, "k", (function() {
				return x
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				o = r.n(n),
				c = r("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				s = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				a = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				i = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = r("./src/redditGQL/operations/CreateEconOrder.json"),
				u = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				l = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				p = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				m = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				f = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				b = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				y = r("./src/lib/makeGqlRequest/index.ts");
			const h = (e, t, r, n, c) => {
				const {
					premium: s,
					...a
				} = c, i = (null == s ? void 0 : s.pricePackage) || r.pricePackages[0], u = new o.a(i.price).multipliedBy(n).toFixed();
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
							...a
						}
					}
				})
			};
			var O;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(O || (O = {}));
			const g = (e, t, r, n) => Object(y.a)(e, {
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
					...s,
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
				_ = (e, t, r, n, o) => Object(y.a)(e, {
					...a,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
						saveCard: o
					}
				}),
				k = (e, t) => Object(y.a)(e, {
					...c,
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
		"./src/reddit/pages/Premium/BenefitsSection/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "d", (function() {
				return a
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
				c = {
					key: "premium-more",
					telemetryTag: "more_benefits"
				},
				s = {
					key: "premium-bonus",
					asterisk: !0,
					telemetryTag: "coin_bonus"
				},
				a = {
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
				return O
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/makeProductOfferKey/index.ts"),
				c = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/models/Payments/index.ts"),
				a = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				d = (e, {
					subredditId: t,
					type: r
				}) => {
					var n, c, s;
					return t ? e.subreddits.productOffers[Object(o.a)(r, t)] : null === (s = null === (c = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === c ? void 0 : c.productOffers) || void 0 === s ? void 0 : s[Object(o.a)(r)]
				},
				u = (e, {
					subredditId: t
				}) => {
					const r = d(e, {
						subredditId: t,
						type: c.c.Powerups
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
						type: c.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				m = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === s.b.PayPal || e[0] === s.b.Stripe)(e.requiredPaymentProviders)) : null,
				f = Object(n.a)(p, a.p, (e, t) => m(e, t) || null),
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
				O = Object(n.a)(h, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/redditGQL/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PowerupsPremiumUpsellModal.5438880719fa49aa03f4.js.map