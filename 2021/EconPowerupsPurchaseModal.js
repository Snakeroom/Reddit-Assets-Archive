// https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.5d56e903df792e48f716.js
// Retrieved at 12/8/2021, 1:40:03 PM by Reddit Dataminer v1.0.0
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
				var s = function(e, t) {
					return e(t = {
						exports: {}
					}, t.exports), t.exports
				}((function(e) {
					e.exports = function() {
						function e(e, t, n, a, s, o) {
							if (o !== r) {
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
							checkPropTypes: a,
							resetWarningCache: n
						};
						return s.PropTypes = s, s
					}()
				}));

				function o(e) {
					return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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
								s = void 0;
							try {
								for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
							} catch (i) {
								a = !0, s = i
							} finally {
								try {
									n || null == c.return || c.return()
								} finally {
									if (a) throw s
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
						return null !== e && "object" === o(e)
					},
					b = function(e, t, r) {
						return p(e) ? Object.keys(e).reduce((function(n, a) {
							var s = !p(t) || ! function e(t, r) {
								if (!p(t) || !p(r)) return t === r;
								var n = Array.isArray(t);
								if (n !== Array.isArray(r)) return !1;
								var a = "[object Object]" === Object.prototype.toString.call(t);
								if (a !== ("[object Object]" === Object.prototype.toString.call(r))) return !1;
								if (!a && !n) return !1;
								var s = Object.keys(t),
									o = Object.keys(r);
								if (s.length !== o.length) return !1;
								for (var c = {}, i = 0; i < s.length; i += 1) c[s[i]] = !0;
								for (var d = 0; d < o.length; d += 1) c[o[d]] = !0;
								var l = Object.keys(c);
								if (l.length !== s.length) return !1;
								var u = t,
									m = r;
								return l.every((function(t) {
									return e(u[t], m[t])
								}))
							}(e[a], t[a]);
							return r.includes(a) ? (s && console.warn("Unsupported prop change: options.".concat(a, " is not a mutable property.")), n) : s ? d(d({}, n || {}), {}, c({}, a, e[a])) : n
						}), null) : null
					},
					f = function(e) {
						if (null === e || p(t = e) && "function" == typeof t.elements && "function" == typeof t.createToken && "function" == typeof t.createPaymentMethod && "function" == typeof t.confirmCardPayment) return e;
						var t;
						throw new Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
					},
					h = function(e) {
						if (function(e) {
								return p(e) && "function" == typeof e.then
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
				var g = function(e) {
					var r = e.stripe,
						n = e.options,
						a = e.children,
						s = t.useRef(!1),
						o = t.useRef(!0),
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
					null !== p && p !== r && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), s.current || ("sync" === c.tag && (s.current = !0, u({
						stripe: c.stripe,
						elements: c.stripe.elements(n)
					})), "async" === c.tag && (s.current = !0, c.stripePromise.then((function(e) {
						e && o.current && u({
							stripe: e,
							elements: e.elements(n)
						})
					}))));
					var f = m(n);
					return t.useEffect((function() {
						if (d.elements) {
							var e = b(n, f, ["clientSecret", "fonts"]);
							e && d.elements.update(e)
						}
					}), [n, f, d.elements]), t.useEffect((function() {
						return function() {
							o.current = !1
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
					}, a)
				};
				g.propTypes = {
					stripe: s.any,
					options: s.object
				};
				var E = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(y), e)
					},
					C = function(e) {
						return (0, e.children)(E("mounts <ElementsConsumer>"))
					};
				C.propTypes = {
					children: s.func.isRequired
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
					O = function(e, r) {
						var n, a = "".concat((n = e).charAt(0).toUpperCase() + n.slice(1), "Element"),
							o = r ? function(e) {
								E("mounts <".concat(a, ">"));
								var r = e.id,
									n = e.className;
								return t.createElement("div", {
									id: r,
									className: n
								})
							} : function(r) {
								var n = r.id,
									s = r.className,
									o = r.options,
									c = void 0 === o ? {} : o,
									i = r.onBlur,
									d = void 0 === i ? P : i,
									l = r.onFocus,
									u = void 0 === l ? P : l,
									p = r.onReady,
									f = void 0 === p ? P : p,
									h = r.onChange,
									y = void 0 === h ? P : h,
									g = r.onEscape,
									C = void 0 === g ? P : g,
									O = r.onClick,
									j = void 0 === O ? P : O,
									x = E("mounts <".concat(a, ">")).elements,
									w = t.useRef(null),
									N = t.useRef(null),
									_ = v(f),
									S = v(d),
									k = v(u),
									I = v(j),
									M = v(y),
									T = v(C);
								t.useLayoutEffect((function() {
									if (null == w.current && x && null != N.current) {
										var t = x.create(e, c);
										w.current = t, t.mount(N.current), t.on("ready", (function() {
											return _(t)
										})), t.on("change", M), t.on("blur", S), t.on("focus", k), t.on("escape", T), t.on("click", I)
									}
								}));
								var A = m(c);
								return t.useEffect((function() {
									if (w.current) {
										var e = b(c, A, ["paymentRequest"]);
										e && w.current.update(e)
									}
								}), [c, A]), t.useLayoutEffect((function() {
									return function() {
										w.current && w.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: s,
									ref: N
								})
							};
						return o.propTypes = {
							id: s.string,
							className: s.string,
							onChange: s.func,
							onBlur: s.func,
							onFocus: s.func,
							onReady: s.func,
							onClick: s.func,
							options: s.object
						}, o.displayName = a, o.__elementType = e, o
					},
					j = "undefined" == typeof window,
					x = O("auBankAccount", j),
					w = O("card", j),
					N = O("cardNumber", j),
					_ = O("cardExpiry", j),
					S = O("cardCvc", j),
					k = O("fpxBank", j),
					I = O("iban", j),
					M = O("idealBank", j),
					T = O("p24Bank", j),
					A = O("epsBank", j),
					R = O("payment", j),
					D = O("paymentRequestButton", j),
					B = O("linkAuthentication", j),
					L = O("shippingAddress", j),
					F = O("afterpayClearpayMessage", j);
				e.AfterpayClearpayMessageElement = F, e.AuBankAccountElement = x, e.CardCvcElement = S, e.CardElement = w, e.CardExpiryElement = _, e.CardNumberElement = N, e.Elements = g, e.ElementsConsumer = C, e.EpsBankElement = A, e.FpxBankElement = k, e.IbanElement = I, e.IdealBankElement = M, e.LinkAuthenticationElement = B, e.P24BankElement = T, e.PaymentElement = R, e.PaymentRequestButtonElement = D, e.ShippingAddressElement = L, e.useElements = function() {
					return E("calls useElements()").elements
				}, e.useStripe = function() {
					return E("calls useStripe()").stripe
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
				return s
			})), r.d(t, "d", (function() {
				return o
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
			const s = "USD",
				o = "ETH",
				c = "COINS",
				i = [o, "BTC"],
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
				s = r("./src/lib/currency/currencies.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				c = r("./src/reddit/helpers/governance/tokens.ts"),
				i = r("./src/reddit/constants/intlSupport.ts");
			const d = (e, {
					locale: t = n.DEFAULT_LOCALE,
					pretty: r,
					formatOptions: a
				} = {}) => {
					const s = Number(e);
					return Object(i.c)() ? r ? Object(o.b)(s) : new Intl.NumberFormat(t, a).format(s) : u(s, r, t)
				},
				l = (e, t = {}) => {
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: o,
						formatOptions: d,
						displayConversion: l,
						forceDecimals: b,
						currency: f = t.currency || (t.type ? p(t.type) : s.c),
						type: h = t.type || (t.currency ? m(t.currency) : s.b.Real)
					} = t, y = Number(e), g = String(e);
					switch (h) {
						case s.b.Reddit: {
							const e = s.e[f],
								t = e ? e() : f;
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(y) + " " + t : u(y, o, r, t)
						}
						case s.b.Crypto: {
							if (o) {
								return Object(c.c)(g, l) + " " + f
							}
							const e = Number(Object(c.b)(g, l));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : u(e, o, r, f)
						}
						case s.b.Real:
						default: {
							const e = Number(Object(a.a)(g, b));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								notation: o ? "compact" : "standard",
								...d
							}).format(e) : u(e, o, r, f)
						}
					}
				},
				u = (e, t, r, n) => {
					return (t ? Object(o.b)(e) : e.toLocaleString(r)) + (n ? " " + n : "")
				},
				m = e => s.g.includes(e.toUpperCase()) ? s.b.Reddit : s.f.includes(e.toUpperCase()) ? s.b.Crypto : s.b.Real,
				p = e => {
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
				return N
			})), r.d(t, "j", (function() {
				return S
			})), r.d(t, "g", (function() {
				return k
			})), r.d(t, "f", (function() {
				return I
			})), r.d(t, "d", (function() {
				return M
			})), r.d(t, "c", (function() {
				return T
			})), r.d(t, "a", (function() {
				return L
			})), r.d(t, "h", (function() {
				return U
			})), r.d(t, "e", (function() {
				return G
			})), r.d(t, "i", (function() {
				return W
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/omit.js"),
				s = r.n(a),
				o = r("./node_modules/uuid/v4.js"),
				c = r.n(o),
				i = r("./src/config.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/lib/addQueryParams/index.ts"),
				m = r("./src/lib/makeActionCreator/index.ts"),
				p = r("./src/lib/sentry/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/actions/gold/constants.ts"),
				h = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				y = r("./src/reddit/selectors/gold/productOffers.ts"),
				g = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				E = r("./src/reddit/selectors/user.ts"),
				C = r("./src/reddit/models/Gold/ProductOffer.ts"),
				v = r("./src/reddit/actions/gold/powerups.ts"),
				P = r("./src/reddit/actions/modal.ts"),
				O = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				j = r("./src/reddit/models/Payments/index.ts");
			const x = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				w = e => e.map(e => e.message).join(" : "),
				N = (e, t, r) => async (a, s, {
					gqlContext: o
				}) => {
					const i = c()(),
						d = await Object(O.f)(o(), i, e, t, r);
					if (d.ok) {
						const e = d.body,
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
				}, _ = Object(h.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
					hk: "2LgB2E"
				})), S = (e, t, r, n, a, s, o) => async (i, d, {
					gqlContext: l
				}) => {
					var u;
					const m = d(),
						b = s === C.c.Premium,
						f = s === C.c.Powerups,
						v = {};
					if (f && o) v.powerUps = {
						subredditId: o,
						isAnonymous: n
					};
					else if (b) {
						const e = Object(y.d)(m, {
							provider: j.b.Stripe
						});
						if (!e) return;
						v.premium = {
							pricePackage: e
						}
					}
					let P, x, S = "";
					try {
						S = await i(N(r, a, v))
					} catch (I) {
						return p.c.captureException(I), void(I.message && i(Object(h.stripeApiError)(I.message)))
					}
					i(Object(h.stripeTokenPending)());
					const k = Object(g.y)(m);
					if (k || (P = await i(Object(h.validateAndCreateStripeToken)(e, t)), x = Object(g.v)(m), P)) try {
						const t = c()(),
							r = k || x ? P && x ? Object(O.h)(l(), t, S, P.id) : k ? Object(O.j)(l(), t, S, k) : null : Object(O.i)(l(), t, S, P.id),
							s = await r;
						if (!(null == s ? void 0 : s.ok)) return void i(_);
						const m = s.body.data.createEconPayment;
						if (null === (u = null == m ? void 0 : m.errors) || void 0 === u ? void 0 : u.length) return void i(Object(h.stripeApiError)(w(m.errors)));
						const {
							ok: p,
							payment: y,
							providerExecution: {
								paymentIntentClientSecret: g
							}
						} = m;
						if (p && y.status === O.a.ActionRequired) {
							const t = await e.confirmCardPayment(g),
								{
									error: r
								} = t;
							if (r) return ((e, t) => {
								var r, n;
								(null === (n = null === (r = e.payment_intent) || void 0 === r ? void 0 : r.last_payment_error) || void 0 === n ? void 0 : n.message) ? t(Object(h.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(h.stripeApiError)(e.message)) : t(_)
							})(r, i);
							let n;
							if (!(n = k ? await Object(O.e)(l(), c()(), y.id, k) : await Object(O.d)(l(), c()(), y.id, P.id, x)).ok) return void i(_);
							const a = n.body;
							if (!a.data.confirmEconPayment.ok || a.data.confirmEconPayment.payment.status !== O.a.Paid) return void i(_)
						} else if (p && y.status !== O.a.Paid) return void i(_);
						const C = Object(E.k)(d());
						C && (f && o ? i(U({
							subredditId: o,
							powerupsCount: a,
							user: C,
							isAnonymous: n
						})) : b && i(G({
							user: C
						})))
					} catch (I) {
						p.c.captureException(I), i(_)
					}
				}, k = (e, t, r, n, a) => async (s, o, {
					gqlContext: d
				}) => {
					var l;
					const m = o(),
						b = n === C.c.Premium,
						f = n === C.c.Powerups,
						g = {};
					if (f && a) g.powerUps = {
						subredditId: a,
						isAnonymous: t
					};
					else if (b) {
						const e = Object(y.d)(m, {
							provider: j.b.PayPal
						});
						if (!e) return null;
						g.premium = {
							pricePackage: e
						}
					}
					let v = "";
					try {
						v = await s(N(e, r, g))
					} catch (S) {
						return p.c.captureException(S), S.message && s(Object(h.paypalApiError)(S.message)), null
					}
					const P = i.a.redditUrl;
					let _ = {
						_o: P,
						o: v,
						pt: n
					};
					f && a && (_ = {
						..._,
						r: a
					});
					try {
						const e = Object(u.a)(`${P}/framedModal/paypal-finish`, {
								..._,
								s: !0
							}),
							n = Object(u.a)(`${P}/framedModal/paypal-finish`, _),
							i = c()(),
							m = await Object(O.g)(d(), i, v, e, n);
						if (m && m.ok) {
							const e = m.body.data.createEconPayment;
							if (null === (l = null == e ? void 0 : e.errors) || void 0 === l ? void 0 : l.length) return s(Object(h.paypalApiError)(w(e.errors))), null;
							const n = Object(E.k)(o());
							if (e.ok) {
								const {
									status: o
								} = e.payment;
								if (o === O.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === o && n) return a ? s(U({
									subredditId: a,
									powerupsCount: r,
									user: n,
									isAnonymous: t
								})) : b && s(G({
									user: n
								})), null
							}
						}
					} catch (S) {
						p.c.captureException(S)
					}
					return s(Object(h.paypalApiError)(x())), null
				}, I = (e, t) => async (r, n, {
					gqlContext: a
				}) => {
					var s;
					try {
						const n = c()(),
							o = await Object(O.c)(a(), n, e, t);
						if (o && o.ok) {
							const e = o.body.data.confirmEconPayment;
							if (null === (s = null == e ? void 0 : e.errors) || void 0 === s ? void 0 : s.length) return r(Object(h.paypalApiError)(w(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (o) {
						p.c.captureException(o)
					}
					return r(Object(h.paypalApiError)(x())), !1
				}, M = () => async (e, t, {
					gqlContext: r
				}) => {
					e(Object(h.savedCardsPending)());
					try {
						const t = await Object(O.l)(r());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(h.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: n
							} = r.data.identity, a = n.map(e => s()({
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
				}, T = e => async (t, r, {
					gqlContext: n
				}) => {
					t(Object(h._deleteSavedCard)(e));
					try {
						const t = await Object(O.k)(n(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: a
							} = r.data.deleteEconPaymentMethod;
						if (a && a.length) throw new Error(w(a))
					} catch (a) {
						p.c.captureException(a)
					}
				}, A = Object(m.a)(f.O), R = Object(m.a)(f.P), D = Object(m.a)(f.Q), B = e => async (t, r) => {
					await t(A(e)), t(Object(l.f)({
						kind: b.b.Error,
						duration: l.a,
						text: e
					}))
				}, L = (e, t, r) => async (a, s, {
					gqlContext: o
				}) => {
					a(R({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const s = await Object(O.b)(o(), e);
						if (s.ok) {
							const e = s.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void a(B(n[0].message));
							a(D({
								subredditId: t,
								allocatedAt: r
							}))
						} else a(B(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (c) {
						p.c.captureException(c), a(B(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, F = Object(m.a)(f.S), U = e => async (t, r) => {
					t(F(e)), t(Object(v.m)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(P.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(P.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, q = Object(m.a)(f.W), G = ({
					user: e
				}) => async t => {
					await t(Object(v.o)(!0)), t(q({
						user: e
					}))
				}, W = Object(m.a)(f.ab)
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
				return b
			})), r.d(t, "cardNumberChange", (function() {
				return f
			})), r.d(t, "cardExpiryChange", (function() {
				return h
			})), r.d(t, "cardCvcChange", (function() {
				return y
			})), r.d(t, "stripeTokenPending", (function() {
				return g
			})), r.d(t, "stripeTokenError", (function() {
				return E
			})), r.d(t, "stripeApiError", (function() {
				return C
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return v
			})), r.d(t, "paypalApiError", (function() {
				return P
			})), r.d(t, "toggleRememberCard", (function() {
				return O
			})), r.d(t, "selectSavedCard", (function() {
				return j
			})), r.d(t, "_deleteSavedCard", (function() {
				return x
			})), r.d(t, "deleteSavedCard", (function() {
				return w
			})), r.d(t, "savedCardsPending", (function() {
				return N
			})), r.d(t, "savedCardsSuccess", (function() {
				return _
			})), r.d(t, "loadSavedCards", (function() {
				return S
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/endpoints/gold/purchase.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const l = Object(s.a)(d.B),
				u = Object(s.a)(d.w),
				m = Object(s.a)(d.b),
				p = Object(s.a)(d.y),
				b = Object(s.a)(d.a),
				f = Object(s.a)(d.G),
				h = Object(s.a)(d.F),
				y = Object(s.a)(d.E),
				g = Object(s.a)(d.I),
				E = Object(s.a)(d.H),
				C = Object(s.a)(d.D),
				v = (e, t) => async (r, s) => {
					const o = s(),
						c = Object(i.h)(o),
						d = Object(i.l)(o),
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
						r(E(m || void 0))
					} else {
						const e = a.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(b({
							message: e
						}))
					}
				}, P = Object(s.a)(d.x), O = Object(s.a)(d.J), j = Object(s.a)(d.C), x = Object(s.a)(d.g), w = e => async (t, r, {
					apiContext: n
				}) => {
					t(x(e));
					try {
						const t = await Object(c.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (a) {
						o.c.captureException(a)
					}
				}, N = Object(s.a)(d.z), _ = Object(s.a)(d.A), S = () => async (e, t, {
					apiContext: r
				}) => {
					e(N());
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
						e(_(n)), n[0] && e(j(n[0].cardId))
					} catch (n) {
						o.c.captureException(n), e(_([]))
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
				s = r.n(a),
				o = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.m.less"),
				i = r.n(c);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js"), l = ({
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
			}, s.a.createElement(o.b, {
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
				s = r.n(a),
				o = r("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less"),
				c = r.n(o);
			t.a = e => s.a.createElement("header", {
				className: Object(n.a)(c.a.container, e.className)
			}, s.a.createElement("h2", {
				className: c.a.title
			}, e.title), s.a.createElement("h3", {
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
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/components/PowerupsSidebar/PowerupsBackground.tsx"),
				c = r("./node_modules/reselect/es/index.js"),
				i = r("./src/higherOrderComponents/asModal/index.tsx"),
				d = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/components/Econ/Common/ModalCloseButton/index.tsx"),
				m = r("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx"),
				p = r("./src/reddit/constants/modals.ts"),
				b = r("./src/reddit/contexts/PageLayer/index.tsx"),
				f = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				h = r("./src/reddit/hooks/useLocale.ts"),
				y = r("./src/reddit/hooks/useTracking.ts"),
				g = r("./src/lib/constants/index.ts"),
				E = r("./src/lib/localizeCurrency/index.ts"),
				C = r("./src/reddit/helpers/trackers/powerups.ts"),
				v = r("./src/reddit/actions/gold/powerups.ts"),
				P = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				O = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				j = r("./src/reddit/selectors/gold/powerups/index.ts"),
				x = r("./src/reddit/selectors/gold/productOffers.ts"),
				w = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				N = r("./src/reddit/selectors/user.ts"),
				_ = r("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				S = r("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				k = r("./src/reddit/components/StripePaymentForm/index.tsx"),
				I = r("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				M = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				T = r("./src/reddit/hooks/useStripePromise.ts"),
				A = r("./src/reddit/hooks/useThunkDispatch.ts"),
				R = r("./src/reddit/models/Gold/ProductOffer.ts"),
				D = r("./src/reddit/controls/Button/index.tsx"),
				B = r("./src/reddit/controls/LoadingIcon/index.tsx");
			const {
				fbt: L
			} = r("./node_modules/fbt/lib/FbtPublic.js"), F = Object(c.c)({
				currentUser: N.k,
				isAnonymous: j.d,
				powerupsCount: j.e,
				productOffer: x.b
			});
			var U = Object(s.b)(F)(a.a.memo((function(e) {
					const {
						className: t,
						currentUser: r,
						isAnonymous: s,
						powerupsCount: o,
						productOffer: c,
						subredditId: i
					} = e, d = Object(A.a)();
					Object(n.useEffect)(() => (window.addEventListener("message", p, !1), () => window.removeEventListener("message", p)), []);
					const [l, u] = Object(n.useState)(!1);
					let m = null;
					if (!r) return null;
					const p = e => {
							const t = (e => {
								try {
									return "string" == typeof e.data ? JSON.parse(e.data) : e.data
								} catch (t) {
									return
								}
							})(e);
							t && t.type && ("paypal-finish.success.framedmodal" === t.type ? (b(), m && m.close()) : "paypal-finish.cancel.framedmodal" === t.type && m && m.close())
						},
						b = () => {
							d(Object(P.h)({
								subredditId: i,
								powerupsCount: o,
								user: r,
								isAnonymous: s
							}))
						};
					return a.a.createElement(D.l, {
						onClick: async () => {
							if (!c) return;
							u(!0);
							const e = await d(Object(P.g)(c, s, o, R.c.Powerups, i));
							if (e) {
								const {
									url: t
								} = e, r = 580, n = 740, a = Math.max(window.screenX + Math.round((window.outerWidth - r) / 2), 0), s = Math.max(window.screenY + Math.round((window.outerHeight - n) / 2), 0);
								m = window.open(`${t}&rnd=${Math.random()}`, "RedditPaypalPayment", `height=${n},width=${r},top=${s},left=${a},modal=yes,alwaysRaised=yes`)
							}
							u(!1)
						},
						className: t,
						disabled: l
					}, l ? a.a.createElement(B.a, {
						sizePx: 12,
						center: !0
					}) : L._("Continue to PayPal", null, {
						hk: "1T4BEy"
					}))
				}))),
				q = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsPremiumButton/index.m.less"),
				G = r.n(q);
			const {
				fbt: W
			} = r("./node_modules/fbt/lib/FbtPublic.js"), V = ({
				className: e,
				subredditId: t
			}) => {
				const r = Object(s.e)(j.d),
					n = Object(s.e)(j.c),
					o = Object(s.e)(j.e),
					c = Object(s.d)();
				return a.a.createElement(D.t, {
					priority: D.c.Primary,
					onClick: () => {
						c(Object(v.k)(t, o, r))
					},
					className: Object(d.a)(e, G.a.button),
					disabled: n
				}, n ? a.a.createElement(B.a, {
					className: G.a.loadingIcon,
					sizePx: 12
				}) : W._({
					"*": "Apply Your Powerups",
					_1: "Apply Your Powerup"
				}, [W._plural(o)], {
					hk: "4zdKUc"
				}))
			};
			var Q = r("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				H = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/PowerupsCount/index.m.less"),
				Y = r.n(H);
			var J = function(e) {
					const {
						className: t,
						onChange: r,
						style: n,
						value: s,
						min: o,
						max: c
					} = e, i = e => r(Math.max(Math.min(s + e, c || Number.POSITIVE_INFINITY), o || 0)), l = c === o, u = Object(Q.a)(s);
					return a.a.createElement("div", {
						className: Object(d.a)(t, Y.a.container),
						style: n
					}, a.a.createElement("div", {
						className: Object(d.a)(Y.a.control, {
							[Y.a.locked]: l
						})
					}, !l && a.a.createElement("button", {
						className: Object(d.a)(Y.a.button, Y.a.decrementButton),
						onClick: () => i(-1)
					}), a.a.createElement("div", {
						className: Y.a.value
					}, a.a.createElement(u, {
						className: Y.a.icon
					}), a.a.createElement("span", null, s)), !l && a.a.createElement("button", {
						className: Object(d.a)(Y.a.button, Y.a.incrementButton),
						onClick: () => i(1)
					})))
				},
				X = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/ProgressBar/index.m.less"),
				z = r.n(X);
			const {
				fbt: K
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var Z = e => {
					const {
						additionalCount: t,
						className: r,
						count: n,
						maxCount: s
					} = e;
					if (!s) return null;
					const o = Math.min(s, n) / s,
						c = Math.min(s, n + (t || 0)) / s;
					return a.a.createElement("div", {
						className: r
					}, a.a.createElement("div", {
						className: z.a.titleRow
					}, a.a.createElement("span", null, K._("Powerups", null, {
						hk: "DrcXp"
					})), a.a.createElement("span", null, n < s ? `${n}/${s}` : n)), a.a.createElement("div", {
						className: z.a.barRow
					}, a.a.createElement("div", {
						className: z.a.track
					}), a.a.createElement("div", {
						className: z.a.progress,
						style: {
							width: `${100*o}%`
						}
					}), t && a.a.createElement("div", {
						className: z.a.additionalProgress,
						style: {
							width: `${100*(c-o)}%`,
							left: `${100*o}%`
						}
					})))
				},
				$ = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/index.m.less"),
				ee = r.n($);
			var te = function(e) {
				const {
					className: t,
					count: r,
					maxCount: n,
					onChange: s,
					powerups: o
				} = e, {
					tier: c,
					tiersInfo: i
				} = o, l = (i[c] || i[c - 1]).powerupsCost;
				if (!l) return null;
				const u = Math.min(l, l / 2 + o.count / 2, o.count + (r || 0) / 2) / l;
				return a.a.createElement("div", {
					className: Object(d.a)(t, ee.a.container)
				}, a.a.createElement(Z, {
					additionalCount: r,
					className: ee.a.bar,
					count: o.count,
					maxCount: l
				}), a.a.createElement(J, {
					className: ee.a.count,
					style: {
						left: `${100*u}%`
					},
					value: r,
					min: 1,
					max: n,
					onChange: s
				}))
			};
			const {
				fbt: re
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var ne = function(e) {
					const {
						className: t,
						subredditId: r
					} = e, o = Object(f.useStripe)(), c = Object(f.useElements)(), i = Object(s.d)(), d = Object(s.e)(j.d), l = Object(s.e)(j.e), u = Object(s.e)(e => Object(x.b)(e, {
						subredditId: r
					})), m = Object(s.e)(w.w), p = Object(s.e)(w.m), [b, h] = Object(n.useState)(!1), y = p || m;
					return a.a.createElement(D.l, {
						onClick: async () => {
							o && c && u && (h(!0), await i(Object(P.j)(o, c, u, d, l, R.c.Powerups, r)), h(!1))
						},
						className: t,
						disabled: y || !o || b
					}, b ? a.a.createElement(B.a, {
						sizePx: 12,
						center: !0
					}) : re._("Complete purchase", null, {
						hk: "KaR26"
					}))
				},
				ae = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/index.m.less"),
				se = r.n(ae);
			const {
				fbt: oe
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ce = 100, ie = Object(c.c)({
				isAnonymous: j.d,
				isNightMode: N.X,
				paypalErrorMessage: w.d,
				powerups: j.k,
				powerupsCount: j.e,
				powerupPrice: x.a,
				stripeErrorMessage: w.j,
				userPowerupsData: j.y
			});
			var de = Object(s.b)(ie)((function(e) {
					const {
						isAnonymous: t,
						isNightMode: r,
						onCloseModal: o,
						paypalErrorMessage: c,
						powerups: i,
						powerupsCount: d,
						powerupPrice: l,
						stripeErrorMessage: u,
						subredditId: m,
						userPowerupsData: p
					} = e, b = Object(s.d)(), [j, x] = Object(n.useState)(g.Hb);
					Object(n.useEffect)(() => {
						b(Object(P.d)()), b(Object(O.selectPaymentMethod)(j))
					}, []);
					const w = Object(h.b)(),
						N = Object(y.a)();
					Object(n.useEffect)(() => {
						N(Object(C.i)())
					}, []);
					const A = Object(T.a)();
					if (!l || !i) return o(), null;
					const R = Object(E.b)(d * l, {
							locale: w
						}),
						D = !!(null == p ? void 0 : p.freeCount);
					return a.a.createElement(f.Elements, {
						stripe: A
					}, a.a.createElement(a.a.Fragment, null, a.a.createElement(te, {
						className: se.a.progressControl,
						count: d,
						maxCount: D && p ? p.freeCount : ce,
						onChange: e => b(Object(v.j)(e)),
						powerups: i
					}), a.a.createElement("div", {
						className: se.a.details
					}, a.a.createElement(I.a, {
						className: se.a.anonymousCheckbox,
						isSelected: t,
						onClick: () => (e => b(Object(v.c)(e)))(!t),
						text: oe._("Powerup anonymously", null, {
							hk: "YXX31"
						})
					}), !D && a.a.createElement("div", {
						className: se.a.purchaseDetails
					}, oe._({
						"*": "{powerups} Powerups {powerup price} /mo",
						_1: "1 Powerup {powerup price} /mo"
					}, [oe._plural(d, "powerups"), oe._param("powerup price", R)], {
						hk: "3cOqa5"
					}))), !D && a.a.createElement(a.a.Fragment, null, a.a.createElement("h3", {
						className: se.a.paymentMethodTitle
					}, oe._("Payment Method", null, {
						hk: "3EbT3q"
					})), a.a.createElement(S.a, {
						className: se.a.paymentMethodSelector,
						nightmode: r,
						selectedPayment: j,
						onPaymentSelected: e => {
							x(e), b(Object(O.selectPaymentMethod)(e))
						}
					}), j === g.Gb && u && a.a.createElement("div", {
						className: se.a.errorMessage
					}, u), j === g.Hb && c && a.a.createElement("div", {
						className: se.a.errorMessage
					}, c), j === g.Gb && a.a.createElement(f.ElementsConsumer, null, ({
						stripe: e
					}) => a.a.createElement(k.a, {
						nightmode: r,
						className: se.a.stripeForm,
						shouldDeleteCardWithGql: !0,
						stripe: e
					})), j === g.Hb && a.a.createElement(U, {
						className: se.a.button,
						subredditId: m
					}), j === g.Gb && a.a.createElement(ne, {
						className: se.a.button,
						subredditId: m
					}), a.a.createElement("p", {
						className: se.a.description
					}, oe._("By completing your purchase, you are agreeing to automatic payments for Powerups and Reddit's {=User Agreement}, {=Privacy Policy}, and {previews terms of use}. Your Powerups subscription will auto-renew monthly for {powerup price} (plus tax where applicable). Cancel anytime in {=User Settings}. Cancel at least 24 hours before your subscription ends to avoid getting charged for the next month. No partial refunds.", [oe._param("=User Agreement", a.a.createElement("a", {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, oe._("User Agreement", null, {
						hk: "xEA2W"
					}))), oe._param("=Privacy Policy", a.a.createElement("a", {
						href: "https://www.redditinc.com/policies/privacy-policy",
						target: "_blank",
						rel: "noopener noreferrer"
					}, oe._("Privacy Policy", null, {
						hk: "48zcty"
					}))), oe._param("previews terms of use", a.a.createElement(_.a, null)), oe._param("powerup price", R), oe._param("=User Settings", a.a.createElement("a", {
						href: "/settings/premium",
						target: "_blank"
					}, oe._("User Settings", null, {
						hk: "1u8CTh"
					})))], {
						hk: "NLnVj"
					}))), D && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: se.a.premiumDescription
					}, a.a.createElement("div", {
						className: se.a.premiumIconWrapper
					}, a.a.createElement(M.a, {
						className: se.a.premiumIcon
					})), a.a.createElement("span", null, oe._("Premium gives you one monthly Powerup", null, {
						hk: "2cKV1a"
					}))), a.a.createElement(V, {
						className: se.a.button,
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
			} = r("./node_modules/fbt/lib/FbtPublic.js"), be = Object(b.u)(), fe = Object(c.c)({
				currentSubreddit: b.r
			}), he = Object(s.b)(fe);
			const ye = Object(i.a)(be(he((function(e) {
				const {
					currentSubreddit: t
				} = e, r = Object(s.d)(), n = () => r(Object(l.g)(p.a.ECON_POWERUPS_PURCHASE));
				return t ? a.a.createElement(a.a.Fragment, null, a.a.createElement(m.a, {
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
				}), a.a.createElement(u.a, {
					onClick: n,
					highContrast: !0
				}), a.a.createElement(o.a, {
					space: o.b.MODAL
				})) : (n(), null)
			}))));
			t.default = e => a.a.createElement(ye, me({}, e, {
				className: Object(d.a)(e.className, ue.a.modal)
			}))
		},
		"./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n);
			const {
				fbt: s
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function o({
				className: e
			}) {
				return a.a.createElement("a", {
					href: "https://www.redditinc.com/policies/previews-terms",
					target: "_blank",
					rel: "noopener noreferrer",
					className: e
				}, s._("Previews Terms of Use", null, {
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
				s = r.n(a),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				i = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				d = r("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				l = r.n(d);
			const u = e => s.a.createElement("label", {
				className: Object(o.a)(e.className, l.a.paymentOption)
			}, s.a.createElement("input", {
				type: "radio",
				id: e.value,
				name: "payment-option",
				value: e.value,
				checked: e.selectedValue === e.value,
				onChange: e.onChange
			}), s.a.createElement("div", {
				className: Object(o.a)(l.a.paymentOptionContent, {
					[l.a.isNightMode]: e.nightmode
				})
			}, e.children));
			class m extends s.a.Component {
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
								a(Object(i.d)(r));
								break;
							case "paypal":
								a(Object(i.e)(r))
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
					return s.a.createElement("form", {
						className: e
					}, s.a.createElement("fieldset", null, s.a.createElement(u, {
						nightmode: t,
						selectedValue: r,
						onChange: this.onPaymentSelected,
						value: "paypal"
					}, s.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/paypal.png)`
						}
					})), s.a.createElement(u, {
						nightmode: t,
						selectedValue: r,
						onChange: this.onPaymentSelected,
						value: "creditCard"
					}, s.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/visa.png)`
						}
					}), s.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/mastercard.png)`
						}
					}), s.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/amex.png)`
						}
					}), s.a.createElement("div", {
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
				s = r("./src/lib/classNames/index.ts"),
				o = r("./node_modules/react/index.js"),
				c = r.n(o),
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
				const t = Object(i.e)(d.X),
					r = e === n.MODAL,
					o = e === n.INFEED_UNIT;
				return c.a.createElement("div", {
					className: Object(s.a)(u.a.background, {
						[u.a.isNightmodeOn]: t,
						[u.a.isModal]: r,
						[u.a.isInFeedUnit]: o
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
				s = r("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				o = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				c = r("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const i = 2,
				d = 3;

			function l(e) {
				return e >= d ? c.a : e >= i ? o.a : s.a
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
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				m = r("./src/reddit/controls/ErrorText/index.tsx");
			const {
				fbt: p
			} = r("./node_modules/fbt/lib/FbtPublic.js"), b = ({
				className: e
			}) => a.a.createElement(m.b, {
				className: e
			}, p._("Error loading Stripe, please refresh the page and try again", null, {
				hk: "2O1NWp"
			}));
			var f = r("./node_modules/fbt/lib/FbtPublic.js"),
				h = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				y = r("./src/config.ts"),
				g = r("./src/reddit/components/CheckoutForm/index.m.less"),
				E = r.n(g);
			const C = Object(o.c)({
				cardCvcValidation: u.f,
				cardExpiryValidation: u.g,
				cardName: u.h,
				cardNumberValidation: u.i,
				nameOnCardValidation: u.k,
				postalCode: u.l
			});
			class v extends a.a.Component {
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
						cardNumberValidation: s,
						onCardNumberChange: o,
						onCardExpiryChange: i,
						onCardCvcChange: d,
						nameOnCardValidation: l,
						postalCode: u,
						stripe: m
					} = this.props;
					if (!m) return a.a.createElement(b, {
						className: e
					});
					const {
						cardNumberReady: p,
						cardExpiryReady: y,
						cardCVCReady: g
					} = this.state, C = {
						base: {
							lineHeight: "40px",
							color: this.computedStyle.getPropertyValue("--newRedditTheme-bodyText"),
							"::placeholder": {
								color: this.computedStyle.getPropertyValue("--newRedditTheme-metaText")
							}
						}
					};
					return a.a.createElement("div", {
						className: Object(c.a)(E.a.checkoutForm, e)
					}, a.a.createElement("div", {
						className: E.a.formCellWide
					}, a.a.createElement("input", {
						className: Object(c.a)(E.a.cardInput, E.a.nameOnCard, {
							[E.a.cardInputError]: !!l
						}),
						type: "text",
						placeholder: f.fbt._("NAME ON CARD", null, {
							hk: "IgrlQ"
						}).toString(),
						onChange: this.onChangeCardName,
						value: n
					})), a.a.createElement("div", {
						className: E.a.formCell
					}, a.a.createElement(h.CardNumberElement, {
						className: Object(c.a)(E.a.cardInput, {
							[E.a.cardInputError]: !!s
						}),
						onChange: o,
						onReady: this.onCardNumberReady,
						options: {
							placeholder: f.fbt._("CARD NUMBER", null, {
								hk: "3pqMxG"
							}).toString(),
							style: C
						}
					}), !p && a.a.createElement("div", {
						className: E.a.elementPlaceholder
					}, f.fbt._("CARD NUMBER", null, {
						hk: "3pqMxG"
					}))), a.a.createElement("div", {
						className: E.a.formCell
					}, a.a.createElement(h.CardExpiryElement, {
						className: Object(c.a)(E.a.cardInput, {
							[E.a.cardInputError]: !!r
						}),
						onChange: i,
						onReady: this.onCardExpiryReady,
						options: {
							placeholder: f.fbt._("MM/YY", null, {
								hk: "Hou17"
							}).toString(),
							style: C
						}
					}), !y && a.a.createElement("div", {
						className: E.a.elementPlaceholder
					}, f.fbt._("MM/YY", null, {
						hk: "Hou17"
					}))), a.a.createElement("div", {
						className: E.a.formCell
					}, a.a.createElement(h.CardCvcElement, {
						className: Object(c.a)(E.a.cardInput, {
							[E.a.cardInputError]: !!t
						}),
						onChange: d,
						onReady: this.onCardCVCReady,
						options: {
							placeholder: f.fbt._("CCV", null, {
								hk: "dZzZJ"
							}).toString(),
							style: C
						}
					}), !g && a.a.createElement("div", {
						className: E.a.elementPlaceholder
					}, f.fbt._("CCV", null, {
						hk: "dZzZJ"
					}))), a.a.createElement("div", {
						className: E.a.formCell
					}, a.a.createElement("input", {
						className: Object(c.a)(E.a.cardInput, E.a.nameOnCard),
						type: "text",
						onChange: this.onChangePostalCode,
						placeholder: f.fbt._("ZIP CODE", null, {
							hk: "2lJZ4j"
						}).toString(),
						value: u
					})))
				}
			}
			var P = Object(s.b)(C, e => ({
					onCardNumberChange: t => e(Object(d.cardNumberChange)(t)),
					onCardExpiryChange: t => e(Object(d.cardExpiryChange)(t)),
					onCardCvcChange: t => e(Object(d.cardCvcChange)(t)),
					onNameInput: t => e(Object(d.cardNameInput)({
						cardName: t
					})),
					onPostalCodeInput: t => e(Object(d.postalCodeInput)({
						postalCode: t
					}))
				}))(v),
				O = r("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				j = r("./src/reddit/components/StripePaymentForm/index.m.less"),
				x = r.n(j);
			var w = e => {
					const {
						onToggleRememberCard: t,
						rememberCard: r
					} = e, n = Object(h.useStripe)();
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(P, {
						className: x.a.creditCard,
						stripe: n
					}), a.a.createElement(O.a, {
						className: x.a.saveCardCheckbox,
						isSelected: r,
						onClick: t,
						text: f.fbt._("Remember this card", null, {
							hk: "2arVov"
						})
					}), a.a.createElement("a", {
						href: "https://stripe.com",
						target: "_blank"
					}, a.a.createElement("img", {
						className: x.a.poweredByStripeIcon,
						src: `${y.a.assetPath}/img/payment-icons/powered-by-stripe.png`
					})))
				},
				N = r("./src/reddit/icons/svgs/Trash2/index.tsx");
			const {
				fbt: _
			} = r("./node_modules/fbt/lib/FbtPublic.js"), S = e => 2 === e.length ? e : "0" + e, k = e => {
				switch (e.toLowerCase()) {
					case "visa":
						return `${y.a.assetPath}/img/payment-icons/visa.png`;
					case "mastercard":
						return `${y.a.assetPath}/img/payment-icons/mastercard.png`;
					case "discover":
						return `${y.a.assetPath}/img/payment-icons/discover.jpg`;
					case "american express":
						return `${y.a.assetPath}/img/payment-icons/amex.png`;
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
					} = this.props, t = k(e.brand);
					return a.a.createElement("label", {
						className: x.a.savedCardContainer
					}, a.a.createElement("input", {
						type: "radio",
						name: "use-saved-card",
						checked: !0,
						readOnly: !0
					}), a.a.createElement("div", {
						className: Object(c.a)(x.a.cardImageContainer, {
							[x.a.cardImageContainerNightmode]: this.props.nightmode
						})
					}, t ? a.a.createElement("img", {
						className: x.a.brandImage,
						src: t
					}) : a.a.createElement("span", {
						className: x.a.unknownCC
					}, "CC")), a.a.createElement("div", {
						className: x.a.cardDetails
					}, a.a.createElement("span", null, _._("Card ending in {Credit Card last four digits}", [_._param("Credit Card last four digits", e.last4)], {
						hk: "3dMxMn"
					})), a.a.createElement("span", {
						className: x.a.expiry
					}, _._("Expires {month} / {year}", [_._param("month", S(e.expirationMonth.toString())), _._param("year", e.expirationYear.toString())], {
						hk: "3iXzVI"
					}))), this.state.showConfirmText ? a.a.createElement("button", {
						className: x.a.confirmText,
						onClick: this.onConfirmClick
					}, _._("Confirm", null, {
						hk: "gFhpD"
					})) : a.a.createElement("button", {
						onClick: this.onTrashCanClick
					}, a.a.createElement(N.b, {
						className: x.a.icon
					})))
				}
			}
			var M = I;
			const T = Object(o.c)({
					rememberCard: u.v,
					savedCard: e => Object(u.x)(e)[0],
					stripeInfoLoading: u.w
				}),
				A = Object(s.b)(T, (e, t) => ({
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
						rememberCard: s,
						savedCard: o,
						stripe: i,
						stripeInfoLoading: d
					} = this.props;
					if (!i) return a.a.createElement(b, {
						className: Object(c.a)(x.a.stripePaymentForm, e)
					});
					const u = d,
						m = !u && o,
						p = !u && !m,
						f = u ? x.a.loadingState : m ? x.a.savedCardState : x.a.formState;
					return a.a.createElement("div", {
						className: Object(c.a)(x.a.stripePaymentForm, f, e)
					}, u && a.a.createElement(l.a, {
						className: x.a.loader,
						sizePx: 60
					}), m && o && a.a.createElement("form", null, a.a.createElement(M, {
						nightmode: t,
						onDelete: r,
						savedCard: o
					})), p && a.a.createElement(w, {
						onToggleRememberCard: n,
						rememberCard: s
					}))
				}
			}
			t.a = A(R)
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
				return C
			})), r.d(t, "c", (function() {
				return v
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/uniqueId.js"),
				s = r.n(a),
				o = r("./node_modules/raf/index.js"),
				c = r.n(o),
				i = r("./node_modules/react/index.js"),
				d = r.n(i),
				l = r("./src/lib/classNames/index.ts"),
				u = r("./src/higherOrderComponents/asModal/index.tsx"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				p = r("./src/reddit/layout/row/Inline/index.tsx"),
				b = r("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				f = r.n(b);
			var h = Object(u.a)(e => {
					const {
						children: t,
						title: r
					} = e;
					return d.a.createElement("div", {
						className: f.a.wrapper
					}, d.a.createElement(p.a, {
						className: f.a.titleRow
					}, r), d.a.createElement("div", {
						className: f.a.detailsContainer
					}, t), d.a.createElement(p.a, {
						className: f.a.buttonRow
					}, d.a.createElement(m.l, {
						className: f.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				y = r("./src/reddit/controls/ErrorText/index.m.less"),
				g = r.n(y);
			class E extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${s()()}`,
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
						moreText: s = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: o,
						isModalOpen: c
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(g.a.wrapper, t)
					}, d.a.createElement("span", {
						className: g.a.description,
						ref: this.spanRef
					}, e), o && d.a.createElement("span", {
						className: g.a.moreText,
						onClick: this.toggleModal
					}, s), c && d.a.createElement(h, {
						onConfirmed: this.toggleModal,
						title: a
					}, r || e))
				}
			}
			const C = e => {
					const {
						className: t,
						errorClassName: r,
						errorModalTitle: n,
						fallbackMessage: a,
						messages: s = []
					} = e, o = s.length ? s : a ? [a] : [];
					return o.length ? d.a.createElement("div", {
						className: t
					}, o.map((e, t) => d.a.createElement(E, {
						className: r,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				v = e => d.a.createElement(C, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = E
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
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = r.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => a.a.createElement("div", {
				className: Object(s.a)(c.a.loadingIcon, t, {
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
				return y
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "i", (function() {
				return E
			})), r.d(t, "h", (function() {
				return C
			})), r.d(t, "j", (function() {
				return v
			})), r.d(t, "g", (function() {
				return P
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "b", (function() {
				return w
			})), r.d(t, "l", (function() {
				return N
			})), r.d(t, "k", (function() {
				return _
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				a = r.n(n),
				s = r("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				o = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				c = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				i = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = r("./src/redditGQL/operations/CreateEconOrder.json"),
				l = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				u = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				m = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				p = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				b = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				f = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				h = r("./src/lib/makeGqlRequest/index.ts");
			const y = (e, t, r, n, s) => {
				const {
					premium: o,
					...c
				} = s, i = (null == o ? void 0 : o.pricePackage) || r.pricePackages[0], l = new a.a(i.price).multipliedBy(n).toFixed();
				return Object(h.a)(e, {
					...d,
					variables: {
						input: {
							nonce: t,
							productId: r.id,
							productVersion: r.version,
							pricePackageId: i.id,
							currency: i.currency,
							price: l,
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
			const E = (e, t, r, n) => Object(h.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				C = (e, t, r, n) => Object(h.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				v = (e, t, r, n) => Object(h.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: r,
						cardId: n
					}
				}),
				P = (e, t, r, n, a) => Object(h.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: r,
						successUrl: n,
						cancelUrl: a
					}
				}),
				O = (e, t, r, n) => Object(h.a)(e, {
					...o,
					variables: {
						nonce: t,
						paymentId: r,
						token: n
					}
				}),
				j = (e, t, r, n) => Object(h.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: r,
						cardId: n
					}
				}),
				x = (e, t, r, n, a) => Object(h.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
						saveCard: a
					}
				}),
				w = (e, t) => Object(h.a)(e, {
					...s,
					variables: {
						orderId: t
					}
				}),
				N = e => Object(h.a)(e, {
					...f,
					variables: {}
				}),
				_ = (e, t) => Object(h.a)(e, {
					...b,
					variables: {
						cardId: t
					}
				})
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				a = r("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const r = new n.BigNumber(e),
					a = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(a).toString()
			}

			function o(e, t) {
				return Object(a.b)(parseInt(s(e, t), 10))
			}

			function c(e, t) {
				const r = new n.BigNumber(e),
					a = new n.BigNumber(t || 1);
				return r.multipliedBy(a).toFixed(0)
			}
		},
		"./src/reddit/hooks/useStripePromise.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return g
			}));
			var n = "https://js.stripe.com/v3",
				a = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
				s = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
				o = null,
				c = function(e) {
					return null !== o ? o : o = new Promise((function(t, r) {
						if ("undefined" != typeof window)
							if (window.Stripe && e && console.warn(s), window.Stripe) t(window.Stripe);
							else try {
								var o = function() {
									for (var e = document.querySelectorAll('script[src^="'.concat(n, '"]')), t = 0; t < e.length; t++) {
										var r = e[t];
										if (a.test(r.src)) return r
									}
									return null
								}();
								o && e ? console.warn(s) : o || (o = function(e) {
									var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
										r = document.createElement("script");
									r.src = "".concat(n).concat(t);
									var a = document.head || document.body;
									if (!a) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
									return a.appendChild(r), r
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
				b = r("./src/reddit/constants/experiments.ts"),
				f = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const h = Object(f.a)(b.Jc);
			let y = null;

			function g() {
				const e = Object(p.e)(h);
				return y || (y = u(m.a.stripe.apiKey(e))), y
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
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, a, s, o;
			r.d(t, "b", (function() {
					return a
				})), r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(a || (a = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(s || (s = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(o || (o = {}))
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return i
			})), r.d(t, "i", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "j", (function() {
				return p
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "g", (function() {
				return y
			})), r.d(t, "f", (function() {
				return g
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/makeProductOfferKey/index.ts"),
				s = r("./src/reddit/models/Gold/ProductOffer.ts"),
				o = r("./src/reddit/models/Payments/index.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				d = (e, {
					subredditId: t,
					type: r
				}) => {
					var n, s, o;
					return t ? e.subreddits.productOffers[Object(a.a)(r, t)] : null === (o = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === s ? void 0 : s.productOffers) || void 0 === o ? void 0 : o[Object(a.a)(r)]
				},
				l = (e, {
					subredditId: t
				}) => {
					const r = d(e, {
						subredditId: t,
						type: s.c.Powerups
					});
					return r && r[0]
				},
				u = (e, t) => {
					var r;
					const n = l(e, t);
					return null === (r = null == n ? void 0 : n.pricePackages) || void 0 === r ? void 0 : r[0].price
				},
				m = e => {
					const t = d(e, {
						type: s.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				p = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === o.b.PayPal || e[0] === o.b.Stripe)(e.requiredPaymentProviders)) : null,
				b = Object(n.a)(m, c.p, (e, t) => p(e, t) || null),
				f = Object(n.a)(b, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				h = Object(n.a)(b, e => (null == e ? void 0 : e[0].price) || null),
				y = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				g = Object(n.a)(y, e => Boolean(null == e ? void 0 : e.isCanceled))
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
		"./src/redditGQL/operations/UserSavedStripeCards.json": function(e) {
			e.exports = JSON.parse('{"id":"d29c51cfbfe6"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.5d56e903df792e48f716.js.map