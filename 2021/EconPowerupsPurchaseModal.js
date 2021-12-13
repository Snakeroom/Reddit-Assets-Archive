// https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.fd2266fadcf8a2e16ada.js
// Retrieved at 12/13/2021, 2:50:06 PM by Reddit Dataminer v1.0.0
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
					f = function(e, t, r) {
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
					var b = m(n);
					return t.useEffect((function() {
						if (d.elements) {
							var e = f(n, b, ["clientSecret", "fonts"]);
							e && d.elements.update(e)
						}
					}), [n, b, d.elements]), t.useEffect((function() {
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
					v = function(e) {
						return (0, e.children)(E("mounts <ElementsConsumer>"))
					};
				v.propTypes = {
					children: s.func.isRequired
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
					P = function() {},
					x = function(e, r) {
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
									b = void 0 === p ? P : p,
									h = r.onChange,
									y = void 0 === h ? P : h,
									g = r.onEscape,
									v = void 0 === g ? P : g,
									x = r.onClick,
									O = void 0 === x ? P : x,
									w = E("mounts <".concat(a, ">")).elements,
									j = t.useRef(null),
									N = t.useRef(null),
									_ = C(b),
									S = C(d),
									k = C(u),
									M = C(O),
									I = C(y),
									T = C(v);
								t.useLayoutEffect((function() {
									if (null == j.current && w && null != N.current) {
										var t = w.create(e, c);
										j.current = t, t.mount(N.current), t.on("ready", (function() {
											return _(t)
										})), t.on("change", I), t.on("blur", S), t.on("focus", k), t.on("escape", T), t.on("click", M)
									}
								}));
								var A = m(c);
								return t.useEffect((function() {
									if (j.current) {
										var e = f(c, A, ["paymentRequest"]);
										e && j.current.update(e)
									}
								}), [c, A]), t.useLayoutEffect((function() {
									return function() {
										j.current && j.current.destroy()
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
					O = "undefined" == typeof window,
					w = x("auBankAccount", O),
					j = x("card", O),
					N = x("cardNumber", O),
					_ = x("cardExpiry", O),
					S = x("cardCvc", O),
					k = x("fpxBank", O),
					M = x("iban", O),
					I = x("idealBank", O),
					T = x("p24Bank", O),
					A = x("epsBank", O),
					L = x("payment", O),
					R = x("paymentRequestButton", O),
					D = x("linkAuthentication", O),
					B = x("shippingAddress", O),
					F = x("afterpayClearpayMessage", O);
				e.AfterpayClearpayMessageElement = F, e.AuBankAccountElement = w, e.CardCvcElement = S, e.CardElement = j, e.CardExpiryElement = _, e.CardNumberElement = N, e.Elements = g, e.ElementsConsumer = v, e.EpsBankElement = A, e.FpxBankElement = k, e.IbanElement = M, e.IdealBankElement = I, e.LinkAuthenticationElement = D, e.P24BankElement = T, e.PaymentElement = L, e.PaymentRequestButtonElement = R, e.ShippingAddressElement = B, e.useElements = function() {
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
						forceDecimals: f,
						currency: b = t.currency || (t.type ? p(t.type) : s.c),
						type: h = t.type || (t.currency ? m(t.currency) : s.b.Real)
					} = t, y = Number(e), g = String(e);
					switch (h) {
						case s.b.Reddit: {
							const e = s.e[b],
								t = e ? e() : b;
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(y) + " " + t : u(y, o, r, t)
						}
						case s.b.Crypto: {
							if (o) {
								return Object(c.c)(g, l) + " " + b
							}
							const e = Number(Object(c.b)(g, l));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : u(e, o, r, b)
						}
						case s.b.Real:
						default: {
							const e = Number(Object(a.a)(g, f));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								notation: o ? "compact" : "standard",
								...d
							}).format(e) : u(e, o, r, b)
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
				return M
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "c", (function() {
				return T
			})), r.d(t, "a", (function() {
				return B
			})), r.d(t, "h", (function() {
				return U
			})), r.d(t, "e", (function() {
				return H
			})), r.d(t, "i", (function() {
				return G
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
				f = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/actions/gold/constants.ts"),
				h = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				y = r("./src/reddit/selectors/gold/productOffers.ts"),
				g = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				E = r("./src/reddit/selectors/user.ts"),
				v = r("./src/reddit/models/Gold/ProductOffer.ts"),
				C = r("./src/reddit/actions/gold/powerups.ts"),
				P = r("./src/reddit/actions/modal.ts"),
				x = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				O = r("./src/reddit/models/Payments/index.ts");
			const w = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				j = e => e.map(e => e.message).join(" : "),
				N = (e, t, r) => async (a, s, {
					gqlContext: o
				}) => {
					const i = c()(),
						d = await Object(x.f)(o(), i, e, t, r);
					if (d.ok) {
						const e = d.body,
							{
								errors: t,
								order: r
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(j(t));
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
						f = s === v.c.Premium,
						b = s === v.c.Powerups,
						C = {};
					if (b && o) C.powerUps = {
						subredditId: o,
						isAnonymous: n
					};
					else if (f) {
						const e = Object(y.d)(m, {
							provider: O.b.Stripe
						});
						if (!e) return;
						C.premium = {
							pricePackage: e
						}
					}
					let P, w, S = "";
					try {
						S = await i(N(r, a, C))
					} catch (M) {
						return p.c.captureException(M), void(M.message && i(Object(h.stripeApiError)(M.message)))
					}
					i(Object(h.stripeTokenPending)());
					const k = Object(g.y)(m);
					if (k || (P = await i(Object(h.validateAndCreateStripeToken)(e, t)), w = Object(g.v)(m), P)) try {
						const t = c()(),
							r = k || w ? P && w ? Object(x.h)(l(), t, S, P.id) : k ? Object(x.j)(l(), t, S, k) : null : Object(x.i)(l(), t, S, P.id),
							s = await r;
						if (!(null == s ? void 0 : s.ok)) return void i(_);
						const m = s.body.data.createEconPayment;
						if (null === (u = null == m ? void 0 : m.errors) || void 0 === u ? void 0 : u.length) return void i(Object(h.stripeApiError)(j(m.errors)));
						const {
							ok: p,
							payment: y,
							providerExecution: {
								paymentIntentClientSecret: g
							}
						} = m;
						if (p && y.status === x.a.ActionRequired) {
							const t = await e.confirmCardPayment(g),
								{
									error: r
								} = t;
							if (r) return ((e, t) => {
								var r, n;
								(null === (n = null === (r = e.payment_intent) || void 0 === r ? void 0 : r.last_payment_error) || void 0 === n ? void 0 : n.message) ? t(Object(h.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(h.stripeApiError)(e.message)) : t(_)
							})(r, i);
							let n;
							if (!(n = k ? await Object(x.e)(l(), c()(), y.id, k) : await Object(x.d)(l(), c()(), y.id, P.id, w)).ok) return void i(_);
							const a = n.body;
							if (!a.data.confirmEconPayment.ok || a.data.confirmEconPayment.payment.status !== x.a.Paid) return void i(_)
						} else if (p && y.status !== x.a.Paid) return void i(_);
						const v = Object(E.k)(d());
						v && (b && o ? i(U({
							subredditId: o,
							powerupsCount: a,
							user: v,
							isAnonymous: n
						})) : f && i(H({
							user: v
						})))
					} catch (M) {
						p.c.captureException(M), i(_)
					}
				}, k = (e, t, r, n, a) => async (s, o, {
					gqlContext: d
				}) => {
					var l;
					const m = o(),
						f = n === v.c.Premium,
						b = n === v.c.Powerups,
						g = {};
					if (b && a) g.powerUps = {
						subredditId: a,
						isAnonymous: t
					};
					else if (f) {
						const e = Object(y.d)(m, {
							provider: O.b.PayPal
						});
						if (!e) return null;
						g.premium = {
							pricePackage: e
						}
					}
					let C = "";
					try {
						C = await s(N(e, r, g))
					} catch (S) {
						return p.c.captureException(S), S.message && s(Object(h.paypalApiError)(S.message)), null
					}
					const P = i.a.redditUrl;
					let _ = {
						_o: P,
						o: C,
						pt: n
					};
					b && a && (_ = {
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
							m = await Object(x.g)(d(), i, C, e, n);
						if (m && m.ok) {
							const e = m.body.data.createEconPayment;
							if (null === (l = null == e ? void 0 : e.errors) || void 0 === l ? void 0 : l.length) return s(Object(h.paypalApiError)(j(e.errors))), null;
							const n = Object(E.k)(o());
							if (e.ok) {
								const {
									status: o
								} = e.payment;
								if (o === x.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === o && n) return a ? s(U({
									subredditId: a,
									powerupsCount: r,
									user: n,
									isAnonymous: t
								})) : f && s(H({
									user: n
								})), null
							}
						}
					} catch (S) {
						p.c.captureException(S)
					}
					return s(Object(h.paypalApiError)(w())), null
				}, M = (e, t) => async (r, n, {
					gqlContext: a
				}) => {
					var s;
					try {
						const n = c()(),
							o = await Object(x.c)(a(), n, e, t);
						if (o && o.ok) {
							const e = o.body.data.confirmEconPayment;
							if (null === (s = null == e ? void 0 : e.errors) || void 0 === s ? void 0 : s.length) return r(Object(h.paypalApiError)(j(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (o) {
						p.c.captureException(o)
					}
					return r(Object(h.paypalApiError)(w())), !1
				}, I = () => async (e, t, {
					gqlContext: r
				}) => {
					e(Object(h.savedCardsPending)());
					try {
						const t = await Object(x.l)(r());
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
						const t = await Object(x.k)(n(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: a
							} = r.data.deleteEconPaymentMethod;
						if (a && a.length) throw new Error(j(a))
					} catch (a) {
						p.c.captureException(a)
					}
				}, A = Object(m.a)(b.O), L = Object(m.a)(b.P), R = Object(m.a)(b.Q), D = e => async (t, r) => {
					await t(A(e)), t(Object(l.f)({
						kind: f.b.Error,
						duration: l.a,
						text: e
					}))
				}, B = (e, t, r) => async (a, s, {
					gqlContext: o
				}) => {
					a(L({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const s = await Object(x.b)(o(), e);
						if (s.ok) {
							const e = s.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void a(D(n[0].message));
							a(R({
								subredditId: t,
								allocatedAt: r
							}))
						} else a(D(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (c) {
						p.c.captureException(c), a(D(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, F = Object(m.a)(b.S), U = e => async (t, r) => {
					t(F(e)), t(Object(C.m)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(P.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(P.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, q = Object(m.a)(b.W), H = ({
					user: e
				}) => async t => {
					await t(Object(C.o)(!0)), t(q({
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
				return y
			})), r.d(t, "stripeTokenPending", (function() {
				return g
			})), r.d(t, "stripeTokenError", (function() {
				return E
			})), r.d(t, "stripeApiError", (function() {
				return v
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return C
			})), r.d(t, "paypalApiError", (function() {
				return P
			})), r.d(t, "toggleRememberCard", (function() {
				return x
			})), r.d(t, "selectSavedCard", (function() {
				return O
			})), r.d(t, "_deleteSavedCard", (function() {
				return w
			})), r.d(t, "deleteSavedCard", (function() {
				return j
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
				f = Object(s.a)(d.a),
				b = Object(s.a)(d.G),
				h = Object(s.a)(d.F),
				y = Object(s.a)(d.E),
				g = Object(s.a)(d.I),
				E = Object(s.a)(d.H),
				v = Object(s.a)(d.D),
				C = (e, t) => async (r, s) => {
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
						r(f({
							message: e
						}))
					}
				}, P = Object(s.a)(d.x), x = Object(s.a)(d.J), O = Object(s.a)(d.C), w = Object(s.a)(d.g), j = e => async (t, r, {
					apiContext: n
				}) => {
					t(w(e));
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
						e(_(n)), n[0] && e(O(n[0].cardId))
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
				f = r("./src/reddit/contexts/PageLayer/index.tsx"),
				b = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				h = r("./src/reddit/hooks/useLocale.ts"),
				y = r("./src/reddit/hooks/useTracking.ts"),
				g = r("./src/lib/constants/index.ts"),
				E = r("./src/lib/localizeCurrency/index.ts"),
				v = r("./src/reddit/helpers/trackers/powerups.ts"),
				C = r("./src/reddit/actions/gold/powerups.ts"),
				P = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				x = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				O = r("./src/reddit/selectors/gold/powerups/index.ts"),
				w = r("./src/reddit/selectors/gold/productOffers.ts"),
				j = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				N = r("./src/reddit/selectors/user.ts"),
				_ = r("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				S = r("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				k = r("./src/reddit/components/StripePaymentForm/index.tsx"),
				M = r("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				I = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				T = r("./src/reddit/hooks/useStripePromise.ts"),
				A = r("./src/reddit/hooks/useThunkDispatch.ts"),
				L = r("./src/reddit/models/Gold/ProductOffer.ts"),
				R = r("./src/reddit/controls/Button/index.tsx"),
				D = r("./src/reddit/controls/LoadingIcon/index.tsx");
			const {
				fbt: B
			} = r("./node_modules/fbt/lib/FbtPublic.js"), F = Object(c.c)({
				currentUser: N.k,
				isAnonymous: O.d,
				powerupsCount: O.e,
				productOffer: w.b
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
							t && t.type && ("paypal-finish.success.framedmodal" === t.type ? (f(), m && m.close()) : "paypal-finish.cancel.framedmodal" === t.type && m && m.close())
						},
						f = () => {
							d(Object(P.h)({
								subredditId: i,
								powerupsCount: o,
								user: r,
								isAnonymous: s
							}))
						};
					return a.a.createElement(R.l, {
						onClick: async () => {
							if (!c) return;
							u(!0);
							const e = await d(Object(P.g)(c, s, o, L.c.Powerups, i));
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
					}, l ? a.a.createElement(D.a, {
						sizePx: 12,
						center: !0
					}) : B._("Continue to PayPal", null, {
						hk: "1T4BEy"
					}))
				}))),
				q = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsPremiumButton/index.m.less"),
				H = r.n(q);
			const {
				fbt: G
			} = r("./node_modules/fbt/lib/FbtPublic.js"), z = ({
				className: e,
				subredditId: t
			}) => {
				const r = Object(s.e)(O.d),
					n = Object(s.e)(O.c),
					o = Object(s.e)(O.e),
					c = Object(s.d)();
				return a.a.createElement(R.t, {
					priority: R.c.Primary,
					onClick: () => {
						c(Object(C.k)(t, o, r))
					},
					className: Object(d.a)(e, H.a.button),
					disabled: n
				}, n ? a.a.createElement(D.a, {
					className: H.a.loadingIcon,
					sizePx: 12
				}) : G._({
					"*": "Apply Your Powerups",
					_1: "Apply Your Powerup"
				}, [G._plural(o)], {
					hk: "4zdKUc"
				}))
			};
			var W = r("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				V = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/PowerupsCount/index.m.less"),
				Q = r.n(V);
			var X = function(e) {
					const {
						className: t,
						onChange: r,
						style: n,
						value: s,
						min: o,
						max: c
					} = e, i = e => r(Math.max(Math.min(s + e, c || Number.POSITIVE_INFINITY), o || 0)), l = c === o, u = Object(W.a)(s);
					return a.a.createElement("div", {
						className: Object(d.a)(t, Q.a.container),
						style: n
					}, a.a.createElement("div", {
						className: Object(d.a)(Q.a.control, {
							[Q.a.locked]: l
						})
					}, !l && a.a.createElement("button", {
						className: Object(d.a)(Q.a.button, Q.a.decrementButton),
						onClick: () => i(-1)
					}), a.a.createElement("div", {
						className: Q.a.value
					}, a.a.createElement(u, {
						className: Q.a.icon
					}), a.a.createElement("span", null, s)), !l && a.a.createElement("button", {
						className: Object(d.a)(Q.a.button, Q.a.incrementButton),
						onClick: () => i(1)
					})))
				},
				Y = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/ProgressBar/index.m.less"),
				J = r.n(Y);
			const {
				fbt: Z
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var K = e => {
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
						className: J.a.titleRow
					}, a.a.createElement("span", null, Z._("Powerups", null, {
						hk: "DrcXp"
					})), a.a.createElement("span", null, n < s ? `${n}/${s}` : n)), a.a.createElement("div", {
						className: J.a.barRow
					}, a.a.createElement("div", {
						className: J.a.track
					}), a.a.createElement("div", {
						className: J.a.progress,
						style: {
							width: `${100*o}%`
						}
					}), t && a.a.createElement("div", {
						className: J.a.additionalProgress,
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
				}, a.a.createElement(K, {
					additionalCount: r,
					className: ee.a.bar,
					count: o.count,
					maxCount: l
				}), a.a.createElement(X, {
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
					} = e, o = Object(b.useStripe)(), c = Object(b.useElements)(), i = Object(s.d)(), d = Object(s.e)(O.d), l = Object(s.e)(O.e), u = Object(s.e)(e => Object(w.b)(e, {
						subredditId: r
					})), m = Object(s.e)(j.w), p = Object(s.e)(j.m), [f, h] = Object(n.useState)(!1), y = p || m;
					return a.a.createElement(R.l, {
						onClick: async () => {
							o && c && u && (h(!0), await i(Object(P.j)(o, c, u, d, l, L.c.Powerups, r)), h(!1))
						},
						className: t,
						disabled: y || !o || f
					}, f ? a.a.createElement(D.a, {
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
				isAnonymous: O.d,
				isNightMode: N.X,
				paypalErrorMessage: j.d,
				powerups: O.k,
				powerupsCount: O.e,
				powerupPrice: w.a,
				stripeErrorMessage: j.j,
				userPowerupsData: O.y
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
					} = e, f = Object(s.d)(), [O, w] = Object(n.useState)(g.Hb);
					Object(n.useEffect)(() => {
						f(Object(P.d)()), f(Object(x.selectPaymentMethod)(O))
					}, []);
					const j = Object(h.b)(),
						N = Object(y.a)();
					Object(n.useEffect)(() => {
						N(Object(v.i)())
					}, []);
					const A = Object(T.a)();
					if (!l || !i) return o(), null;
					const L = Object(E.b)(d * l, {
							locale: j
						}),
						R = !!(null == p ? void 0 : p.freeCount);
					return a.a.createElement(b.Elements, {
						stripe: A
					}, a.a.createElement(a.a.Fragment, null, a.a.createElement(te, {
						className: se.a.progressControl,
						count: d,
						maxCount: R && p ? p.freeCount : ce,
						onChange: e => f(Object(C.j)(e)),
						powerups: i
					}), a.a.createElement("div", {
						className: se.a.details
					}, a.a.createElement(M.a, {
						className: se.a.anonymousCheckbox,
						isSelected: t,
						onClick: () => (e => f(Object(C.c)(e)))(!t),
						text: oe._("Powerup anonymously", null, {
							hk: "YXX31"
						})
					}), !R && a.a.createElement("div", {
						className: se.a.purchaseDetails
					}, oe._({
						"*": "{powerups} Powerups {powerup price} /mo",
						_1: "1 Powerup {powerup price} /mo"
					}, [oe._plural(d, "powerups"), oe._param("powerup price", L)], {
						hk: "3cOqa5"
					}))), !R && a.a.createElement(a.a.Fragment, null, a.a.createElement("h3", {
						className: se.a.paymentMethodTitle
					}, oe._("Payment Method", null, {
						hk: "3EbT3q"
					})), a.a.createElement(S.a, {
						className: se.a.paymentMethodSelector,
						nightmode: r,
						selectedPayment: O,
						onPaymentSelected: e => {
							w(e), f(Object(x.selectPaymentMethod)(e))
						}
					}), O === g.Gb && u && a.a.createElement("div", {
						className: se.a.errorMessage
					}, u), O === g.Hb && c && a.a.createElement("div", {
						className: se.a.errorMessage
					}, c), O === g.Gb && a.a.createElement(b.ElementsConsumer, null, ({
						stripe: e
					}) => a.a.createElement(k.a, {
						nightmode: r,
						className: se.a.stripeForm,
						shouldDeleteCardWithGql: !0,
						stripe: e
					})), O === g.Hb && a.a.createElement(U, {
						className: se.a.button,
						subredditId: m
					}), O === g.Gb && a.a.createElement(ne, {
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
					}))), oe._param("previews terms of use", a.a.createElement(_.a, null)), oe._param("powerup price", L), oe._param("=User Settings", a.a.createElement("a", {
						href: "/settings/premium",
						target: "_blank"
					}, oe._("User Settings", null, {
						hk: "1u8CTh"
					})))], {
						hk: "NLnVj"
					}))), R && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: se.a.premiumDescription
					}, a.a.createElement("div", {
						className: se.a.premiumIconWrapper
					}, a.a.createElement(I.a, {
						className: se.a.premiumIcon
					})), a.a.createElement("span", null, oe._("Premium gives you one monthly Powerup", null, {
						hk: "2cKV1a"
					}))), a.a.createElement(z, {
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
			} = r("./node_modules/fbt/lib/FbtPublic.js"), fe = Object(f.u)(), be = Object(c.c)({
				currentSubreddit: f.r
			}), he = Object(s.b)(be);
			const ye = Object(i.a)(fe(he((function(e) {
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
			} = r("./node_modules/fbt/lib/FbtPublic.js"), f = ({
				className: e
			}) => a.a.createElement(m.b, {
				className: e
			}, p._("Error loading Stripe, please refresh the page and try again", null, {
				hk: "2O1NWp"
			}));
			var b = r("./node_modules/fbt/lib/FbtPublic.js"),
				h = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				y = r("./src/config.ts"),
				g = r("./src/reddit/components/CheckoutForm/index.m.less"),
				E = r.n(g);
			const v = Object(o.c)({
				cardCvcValidation: u.f,
				cardExpiryValidation: u.g,
				cardName: u.h,
				cardNumberValidation: u.i,
				nameOnCardValidation: u.k,
				postalCode: u.l
			});
			class C extends a.a.Component {
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
					if (!m) return a.a.createElement(f, {
						className: e
					});
					const {
						cardNumberReady: p,
						cardExpiryReady: y,
						cardCVCReady: g
					} = this.state, v = {
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
						placeholder: b.fbt._("NAME ON CARD", null, {
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
							placeholder: b.fbt._("CARD NUMBER", null, {
								hk: "3pqMxG"
							}).toString(),
							style: v
						}
					}), !p && a.a.createElement("div", {
						className: E.a.elementPlaceholder
					}, b.fbt._("CARD NUMBER", null, {
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
							placeholder: b.fbt._("MM/YY", null, {
								hk: "Hou17"
							}).toString(),
							style: v
						}
					}), !y && a.a.createElement("div", {
						className: E.a.elementPlaceholder
					}, b.fbt._("MM/YY", null, {
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
							placeholder: b.fbt._("CCV", null, {
								hk: "dZzZJ"
							}).toString(),
							style: v
						}
					}), !g && a.a.createElement("div", {
						className: E.a.elementPlaceholder
					}, b.fbt._("CCV", null, {
						hk: "dZzZJ"
					}))), a.a.createElement("div", {
						className: E.a.formCell
					}, a.a.createElement("input", {
						className: Object(c.a)(E.a.cardInput, E.a.nameOnCard),
						type: "text",
						onChange: this.onChangePostalCode,
						placeholder: b.fbt._("ZIP CODE", null, {
							hk: "2lJZ4j"
						}).toString(),
						value: u
					})))
				}
			}
			var P = Object(s.b)(v, e => ({
					onCardNumberChange: t => e(Object(d.cardNumberChange)(t)),
					onCardExpiryChange: t => e(Object(d.cardExpiryChange)(t)),
					onCardCvcChange: t => e(Object(d.cardCvcChange)(t)),
					onNameInput: t => e(Object(d.cardNameInput)({
						cardName: t
					})),
					onPostalCodeInput: t => e(Object(d.postalCodeInput)({
						postalCode: t
					}))
				}))(C),
				x = r("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				O = r("./src/reddit/components/StripePaymentForm/index.m.less"),
				w = r.n(O);
			var j = e => {
					const {
						onToggleRememberCard: t,
						rememberCard: r
					} = e, n = Object(h.useStripe)();
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(P, {
						className: w.a.creditCard,
						stripe: n
					}), a.a.createElement(x.a, {
						className: w.a.saveCardCheckbox,
						isSelected: r,
						onClick: t,
						text: b.fbt._("Remember this card", null, {
							hk: "2arVov"
						})
					}), a.a.createElement("a", {
						href: "https://stripe.com",
						target: "_blank"
					}, a.a.createElement("img", {
						className: w.a.poweredByStripeIcon,
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
			class M extends a.a.PureComponent {
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
						className: w.a.savedCardContainer
					}, a.a.createElement("input", {
						type: "radio",
						name: "use-saved-card",
						checked: !0,
						readOnly: !0
					}), a.a.createElement("div", {
						className: Object(c.a)(w.a.cardImageContainer, {
							[w.a.cardImageContainerNightmode]: this.props.nightmode
						})
					}, t ? a.a.createElement("img", {
						className: w.a.brandImage,
						src: t
					}) : a.a.createElement("span", {
						className: w.a.unknownCC
					}, "CC")), a.a.createElement("div", {
						className: w.a.cardDetails
					}, a.a.createElement("span", null, _._("Card ending in {Credit Card last four digits}", [_._param("Credit Card last four digits", e.last4)], {
						hk: "3dMxMn"
					})), a.a.createElement("span", {
						className: w.a.expiry
					}, _._("Expires {month} / {year}", [_._param("month", S(e.expirationMonth.toString())), _._param("year", e.expirationYear.toString())], {
						hk: "3iXzVI"
					}))), this.state.showConfirmText ? a.a.createElement("button", {
						className: w.a.confirmText,
						onClick: this.onConfirmClick
					}, _._("Confirm", null, {
						hk: "gFhpD"
					})) : a.a.createElement("button", {
						onClick: this.onTrashCanClick
					}, a.a.createElement(N.b, {
						className: w.a.icon
					})))
				}
			}
			var I = M;
			const T = Object(o.c)({
					rememberCard: u.v,
					savedCard: e => Object(u.x)(e)[0],
					stripeInfoLoading: u.w
				}),
				A = Object(s.b)(T, (e, t) => ({
					onClickDeleteCard: r => t.shouldDeleteCardWithGql ? e(Object(i.c)(r)) : e(Object(d.deleteSavedCard)(r)),
					onToggleRememberCard: () => e(Object(d.toggleRememberCard)())
				}));
			class L extends a.a.PureComponent {
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
					if (!i) return a.a.createElement(f, {
						className: Object(c.a)(w.a.stripePaymentForm, e)
					});
					const u = d,
						m = !u && o,
						p = !u && !m,
						b = u ? w.a.loadingState : m ? w.a.savedCardState : w.a.formState;
					return a.a.createElement("div", {
						className: Object(c.a)(w.a.stripePaymentForm, b, e)
					}, u && a.a.createElement(l.a, {
						className: w.a.loader,
						sizePx: 60
					}), m && o && a.a.createElement("form", null, a.a.createElement(I, {
						nightmode: t,
						onDelete: r,
						savedCard: o
					})), p && a.a.createElement(j, {
						onToggleRememberCard: n,
						rememberCard: s
					}))
				}
			}
			t.a = A(L)
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
				return v
			})), r.d(t, "c", (function() {
				return C
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
			const v = e => {
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
				C = e => d.a.createElement(v, {
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
				return v
			})), r.d(t, "j", (function() {
				return C
			})), r.d(t, "g", (function() {
				return P
			})), r.d(t, "c", (function() {
				return x
			})), r.d(t, "e", (function() {
				return O
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "b", (function() {
				return j
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
				f = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				b = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
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
				v = (e, t, r, n) => Object(h.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				C = (e, t, r, n) => Object(h.a)(e, {
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
				x = (e, t, r, n) => Object(h.a)(e, {
					...o,
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
				w = (e, t, r, n, a) => Object(h.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
						saveCard: a
					}
				}),
				j = (e, t) => Object(h.a)(e, {
					...s,
					variables: {
						orderId: t
					}
				}),
				N = e => Object(h.a)(e, {
					...b,
					variables: {}
				}),
				_ = (e, t) => Object(h.a)(e, {
					...f,
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
				f = r("./src/reddit/constants/experiments.ts"),
				b = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const h = Object(b.a)(f.Kc);
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
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/Trash2/index.m.less"),
				c = r.n(o);
			const i = e => a.a.createElement("svg", {
				className: Object(s.a)(c.a.icon, e.className),
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
				return b
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
				f = Object(n.a)(m, c.p, (e, t) => p(e, t) || null),
				b = Object(n.a)(f, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				h = Object(n.a)(f, e => (null == e ? void 0 : e[0].price) || null),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.fd2266fadcf8a2e16ada.js.map