// https://www.redditstatic.com/desktop2x/reddit-components-CoinPurchaseDropdown.6937ace2febe2968e091.js
// Retrieved at 6/6/2023, 5:40:04 PM by Reddit Dataminer v1.0.0
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
				var s = function(e, t) {
					return e(t = {
						exports: {}
					}, t.exports), t.exports
				}((function(e) {
					e.exports = function() {
						function e(e, t, n, o, s, c) {
							if (c !== r) {
								var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
								throw a.name = "Invariant Violation", a
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

				function c(e) {
					return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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
								s = void 0;
							try {
								for (var c, a = e[Symbol.iterator](); !(n = (c = a.next()).done) && (r.push(c.value), !t || r.length !== t); n = !0);
							} catch (i) {
								o = !0, s = i
							} finally {
								try {
									n || null == a.return || a.return()
								} finally {
									if (o) throw s
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
						return null !== e && "object" === c(e)
					},
					b = function(e, t, r) {
						return m(e) ? Object.keys(e).reduce((function(n, o) {
							var s = !m(t) || ! function e(t, r) {
								if (!m(t) || !m(r)) return t === r;
								var n = Array.isArray(t);
								if (n !== Array.isArray(r)) return !1;
								var o = "[object Object]" === Object.prototype.toString.call(t);
								if (o !== ("[object Object]" === Object.prototype.toString.call(r))) return !1;
								if (!o && !n) return !1;
								var s = Object.keys(t),
									c = Object.keys(r);
								if (s.length !== c.length) return !1;
								for (var a = {}, i = 0; i < s.length; i += 1) a[s[i]] = !0;
								for (var d = 0; d < c.length; d += 1) a[c[d]] = !0;
								var l = Object.keys(a);
								if (l.length !== s.length) return !1;
								var u = t,
									p = r;
								return l.every((function(t) {
									return e(u[t], p[t])
								}))
							}(e[o], t[o]);
							return r.includes(o) ? (s && console.warn("Unsupported prop change: options.".concat(o, " is not a mutable property.")), n) : s ? d(d({}, n || {}), {}, a({}, o, e[o])) : n
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
				var g = function(e) {
					var r = e.stripe,
						n = e.options,
						o = e.children,
						s = t.useRef(!1),
						c = t.useRef(!0),
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
					null !== m && m !== r && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), s.current || ("sync" === a.tag && (s.current = !0, u({
						stripe: a.stripe,
						elements: a.stripe.elements(n)
					})), "async" === a.tag && (s.current = !0, a.stripePromise.then((function(e) {
						e && c.current && u({
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
							c.current = !1
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
				g.propTypes = {
					stripe: s.any,
					options: s.object
				};
				var O = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(y), e)
					},
					j = function(e) {
						return (0, e.children)(O("mounts <ElementsConsumer>"))
					};
				j.propTypes = {
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
					v = function() {},
					P = function(e, r) {
						var n, o = "".concat((n = e).charAt(0).toUpperCase() + n.slice(1), "Element"),
							c = r ? function(e) {
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
									c = r.options,
									a = void 0 === c ? {} : c,
									i = r.onBlur,
									d = void 0 === i ? v : i,
									l = r.onFocus,
									u = void 0 === l ? v : l,
									m = r.onReady,
									f = void 0 === m ? v : m,
									h = r.onChange,
									y = void 0 === h ? v : h,
									g = r.onEscape,
									j = void 0 === g ? v : g,
									P = r.onClick,
									x = void 0 === P ? v : P,
									_ = O("mounts <".concat(o, ">")).elements,
									E = t.useRef(null),
									k = t.useRef(null),
									w = C(f),
									I = C(d),
									A = C(u),
									S = C(x),
									T = C(y),
									N = C(j);
								t.useLayoutEffect((function() {
									if (null == E.current && _ && null != k.current) {
										var t = _.create(e, a);
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
									className: s,
									ref: k
								})
							};
						return c.propTypes = {
							id: s.string,
							className: s.string,
							onChange: s.func,
							onBlur: s.func,
							onFocus: s.func,
							onReady: s.func,
							onClick: s.func,
							options: s.object
						}, c.displayName = o, c.__elementType = e, c
					},
					x = "undefined" == typeof window,
					_ = P("auBankAccount", x),
					E = P("card", x),
					k = P("cardNumber", x),
					w = P("cardExpiry", x),
					I = P("cardCvc", x),
					A = P("fpxBank", x),
					S = P("iban", x),
					T = P("idealBank", x),
					N = P("p24Bank", x),
					L = P("epsBank", x),
					D = P("payment", x),
					M = P("paymentRequestButton", x),
					B = P("linkAuthentication", x),
					R = P("shippingAddress", x),
					F = P("afterpayClearpayMessage", x);
				e.AfterpayClearpayMessageElement = F, e.AuBankAccountElement = _, e.CardCvcElement = I, e.CardElement = E, e.CardExpiryElement = w, e.CardNumberElement = k, e.Elements = g, e.ElementsConsumer = j, e.EpsBankElement = L, e.FpxBankElement = A, e.IbanElement = S, e.IdealBankElement = T, e.LinkAuthenticationElement = B, e.P24BankElement = N, e.PaymentElement = D, e.PaymentRequestButtonElement = M, e.ShippingAddressElement = R, e.useElements = function() {
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
				return c
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
			const s = "USD",
				c = "ETH",
				a = "COINS",
				i = [c, "BTC"],
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
				s = r("./src/lib/currency/currencies.ts"),
				c = r("./src/lib/prettyPrintNumber/index.ts"),
				a = r("./src/reddit/helpers/governance/tokens.ts"),
				i = r("./src/reddit/constants/intlSupport.ts");
			const d = function(e) {
					let {
						locale: t = n.DEFAULT_LOCALE,
						pretty: r,
						formatOptions: o
					} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const s = Number(e);
					return Object(i.c)() ? r ? Object(c.b)(s) : new Intl.NumberFormat(t, o).format(s) : u(s, r, t)
				},
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: c,
						formatOptions: d,
						displayConversion: l,
						forceDecimals: b,
						currency: f = t.currency || (t.type ? m(t.type) : s.c),
						type: h = t.type || (t.currency ? p(t.currency) : s.b.Real)
					} = t, y = Number(e), g = String(e);
					switch (h) {
						case s.b.Reddit: {
							const e = s.e[f],
								t = e ? e() : f;
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(y) + " " + t : u(y, c, r, t)
						}
						case s.b.Crypto: {
							if (c) {
								return Object(a.d)(g, l) + " " + f
							}
							const e = Number(Object(a.c)(g, l));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : u(e, c, r, f)
						}
						case s.b.Real:
						default: {
							const e = Number(Object(o.a)(g, b));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								notation: c ? "compact" : "standard",
								...d
							}).format(e) : u(e, c, r, f)
						}
					}
				},
				u = (e, t, r, n) => {
					return (t ? Object(c.b)(e) : e.toLocaleString(r)) + (n ? " " + n : "")
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
		"./src/reddit/actions/economics/powerups/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = e => (null == e ? void 0 : e.map(e => e.message).join(", ")) || ""
		},
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return _
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "c", (function() {
				return k
			})), r.d(t, "h", (function() {
				return w
			})), r.d(t, "g", (function() {
				return I
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "e", (function() {
				return S
			})), r.d(t, "f", (function() {
				return T
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/formatApiError/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
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
				g = r("./src/reddit/models/Toast/index.ts"),
				O = r("./src/reddit/selectors/experiments/econ/index.ts"),
				j = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				C = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				v = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const P = Object(s.a)(v.u),
				x = Object(s.a)(v.c),
				_ = e => async (t, r) => {
					const n = r();
					Object(O.d)(n) || (t(P(e)), t(Object(l.h)(a.a.ECON_COIN_PURCHASE)))
				}, E = () => async (e, t) => {
					e(x()), e(Object(l.g)(a.a.ECON_COIN_PURCHASE))
				}, k = (e, t, r) => async (o, s) => {
					await o(Object(d.c)());
					const c = s(),
						a = Object(j.m)(c, e);
					if (a) o(_({
						correlationId: r,
						packageId: a,
						thingId: t
					}));
					else {
						const e = Object(j.k)(c),
							t = n.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						o(Object(u.f)({
							kind: g.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, w = (e, t, r) => async (s, c, a) => {
					let {
						apiContext: d
					} = a;
					const l = c(),
						{
							coins: u,
							pennies: p
						} = r,
						f = Object(C.s)(l) || Object(b.d)(b.a.GoldPayment, !1);
					let h, g;
					s(Object(i.stripeTokenPending)());
					const O = Object(C.z)(l);
					if (O || (h = await s(Object(i.validateAndCreateStripeToken)(e, t)), g = Object(C.w)(l), h)) try {
						const e = await Object(m.d)({
							coins: u,
							context: d(),
							correlationId: f,
							offerContext: Object(y.d)(r, !1),
							pennies: p,
							rememberCard: g,
							savedCardId: O || void 0,
							token: h
						});
						if (e.error) {
							const t = Object(o.a)(e.error, e.status);
							return void s(Object(i.stripeApiError)(t))
						}
						return s(Object(i.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(b.b)(b.a.GoldPayment)
					} catch (j) {
						const e = Object(o.a)(j);
						s(Object(i.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						s(Object(i.stripeApiError)(e))
					}
				}, I = (e, t, s, c) => async (a, d, l) => {
					let {
						apiContext: u
					} = l;
					const p = d(),
						{
							coins: g,
							pennies: O
						} = s,
						j = Object(C.s)(p) || Object(b.d)(b.a.GoldPayment, !1);
					let v, P;
					a(Object(i.stripeTokenPending)());
					const x = Object(C.z)(p);
					if (x || (v = await a(Object(i.validateAndCreateStripeToken)(e, t)), P = Object(C.w)(p), v)) try {
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
						const C = l.id,
							_ = {
								gildType: C,
								isAnonymous: t,
								message: d
							},
							k = await Object(m.c)({
								coins: g,
								context: u(),
								correlationId: j,
								gildParams: _,
								isOldReddit: c,
								offerContext: Object(y.d)(s, !0),
								pennies: O,
								rememberCard: P,
								savedCardId: x || void 0,
								thingId: e,
								token: v
							});
						if (k.error) {
							const e = Object(o.a)(k.error, k.status);
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
								coins: s,
								treatment_tags: c
							} = k.body;
							return a(t({
								awardKarmaReceived: n || 0,
								awardId: C,
								awardings: o && o.length ? Object(f.a)(o).map(e => ({
									award: Object(h.i)(e),
									total: e.count
								})) : [],
								coins: s,
								id: e,
								treatmentTags: c
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
				}, A = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					const a = Object(b.c)(b.a.GoldPayment),
						{
							coins: d,
							pennies: l
						} = e;
					try {
						const e = await Object(p.a)({
							context: s(),
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
						c.c.captureException(u);
						const e = Object(o.a)(u);
						t(Object(i.paypalApiError)(e))
					}
				}, S = (e, t) => async (r, n, s) => {
					let {
						apiContext: a
					} = s;
					const d = n(),
						l = Object(C.s)(d) || Object(b.d)(b.a.GoldPayment, !1),
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
						c.c.captureException(f);
						const e = Object(o.a)(f);
						r(Object(i.paypalApiError)(e))
					}
				}, T = (e, t) => async (s, a, d) => {
					let {
						apiContext: l
					} = d;
					const u = a(),
						m = Object(C.s)(u) || Object(b.d)(b.a.GoldPayment, !1),
						{
							coins: g,
							pennies: O
						} = t;
					try {
						const {
							gildModalThingId: c,
							isAnonymous: a,
							message: d,
							selectedAward: j
						} = u.gild;
						if (!c || !j) return void s(Object(i.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const C = j.id,
							v = await Object(p.d)({
								context: l(),
								offerContext: Object(y.d)(t, !0),
								orderId: e,
								coins: g,
								pennies: O,
								thingId: c,
								awardId: C,
								message: d || "",
								isAnonymous: a,
								correlationId: m
							});
						if (v.error) {
							const e = Object(o.a)(v.error);
							s(Object(i.paypalApiError)(e))
						} else {
							s(E());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: n,
								subreddit_coins: o,
								treatment_tags: a
							} = v.body;
							s(Object(i.paymentCompleted)({
								coins: n,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							s(d({
								awardId: C,
								awardKarmaReceived: t || 0,
								awardings: Object(f.a)(e).map(e => ({
									award: Object(h.i)(e),
									total: e.count
								})),
								coins: n,
								id: c,
								subredditCoins: o,
								treatmentTags: a
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (j) {
						c.c.captureException(j);
						const e = Object(o.a)(j);
						s(Object(i.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return i
			})), r.d(t, "paymentCompleted", (function() {
				return d
			})), r.d(t, "cardNameInput", (function() {
				return l
			})), r.d(t, "postalCodeInput", (function() {
				return u
			})), r.d(t, "cardNameEmpty", (function() {
				return p
			})), r.d(t, "postalCodeEmpty", (function() {
				return m
			})), r.d(t, "cardNumberChange", (function() {
				return b
			})), r.d(t, "cardExpiryChange", (function() {
				return f
			})), r.d(t, "cardCvcChange", (function() {
				return h
			})), r.d(t, "stripeTokenPending", (function() {
				return y
			})), r.d(t, "stripeTokenError", (function() {
				return g
			})), r.d(t, "stripeApiError", (function() {
				return O
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return j
			})), r.d(t, "paypalApiError", (function() {
				return C
			})), r.d(t, "toggleRememberCard", (function() {
				return v
			})), r.d(t, "selectSavedCard", (function() {
				return P
			})), r.d(t, "deleteSavedCard", (function() {
				return x
			})), r.d(t, "savedCardsPending", (function() {
				return _
			})), r.d(t, "savedCardsSuccess", (function() {
				return E
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				a = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const i = Object(s.a)(a.G),
				d = Object(s.a)(a.A),
				l = Object(s.a)(a.b),
				u = Object(s.a)(a.D),
				p = Object(s.a)(a.a),
				m = Object(s.a)(a.C),
				b = Object(s.a)(a.L),
				f = Object(s.a)(a.K),
				h = Object(s.a)(a.J),
				y = Object(s.a)(a.N),
				g = Object(s.a)(a.M),
				O = Object(s.a)(a.I),
				j = (e, t) => async (r, s) => {
					const a = s(),
						i = Object(c.h)(a),
						d = Object(c.l)(a),
						l = t.getElement(n.CardNumberElement);
					if (!l) return;
					const {
						token: u,
						error: b
					} = await e.createToken(l, {
						name: i,
						address_zip: d
					}), f = !d.trim();
					if (f) {
						const e = o.fbt._("Your ZIP code is incomplete", null, {
							hk: "4bttPr"
						});
						r(m({
							message: e
						}))
					}
					b && r(g(b));
					const h = !i.trim();
					if (h) {
						const e = o.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(p({
							message: e
						}))
					}
					return f || b || h ? void 0 : u
				}, C = Object(s.a)(a.B), v = Object(s.a)(a.O), P = Object(s.a)(a.H), x = Object(s.a)(a.g), _ = Object(s.a)(a.E), E = Object(s.a)(a.F)
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "setPremiumPurchaseModalInfo", (function() {
				return y
			})), r.d(t, "clearPremiumPurchaseModalInfo", (function() {
				return g
			})), r.d(t, "openPremiumPurchaseModal", (function() {
				return O
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
				s = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
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
			const y = Object(s.a)(h.x),
				g = Object(s.a)(h.e),
				O = (e, t) => async r => {
					r(y(e)), r(Object(l.h)(u.a.ECON_PREMIUM_PURCHASE, t))
				}, j = () => async e => {
					e(Object(l.g)(u.a.ECON_PREMIUM_PURCHASE)), e(g())
				}, C = (e, t) => async (r, n, s) => {
					let {
						apiContext: c
					} = s;
					const l = Object(f.a)(n()),
						u = (null == l ? void 0 : l.pennies) || a.Db,
						p = Object(b.c)(b.a.GoldPayment);
					r(Object(d.stripeTokenPending)());
					const h = await r(Object(d.validateAndCreateStripeToken)(e, t));
					if (h) try {
						const e = await Object(m.f)({
							context: c(),
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
				}, v = Object(s.a)(h.z), P = (e, t) => {
					let {
						packageId: r,
						correlationId: o
					} = e;
					return async (e, s, a) => {
						let {
							apiContext: l
						} = a;
						e(O({
							packageId: r,
							correlationId: o
						}, t));
						const u = Object(f.a)(s()),
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
						} else c.c.captureMessage("No Premium packages available on Premium purchase modal")
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return j
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "a", (function() {
				return P
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/env/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				a = r("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/models/Toast/index.ts"),
				l = r("./src/reddit/actions/post.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				p = r("./src/reddit/actions/economics/powerups/helpers.ts"),
				m = r("./src/redditGQL/operations/PurchaseCatalogProductOffers.json");
			var b = r("./src/reddit/selectors/gold/productOffers.ts"),
				f = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			Object(s.a)(f.m);
			const h = Object(s.a)(f.o),
				y = Object(s.a)(f.n),
				g = Object(s.a)(f.i),
				O = Object(s.a)(f.j),
				j = e => async (t, r, s) => {
					let {
						gqlContext: a
					} = s;
					const i = r(),
						d = Object(b.a)(i);
					if ((null == e ? void 0 : e.forceLoad) || !d) {
						t(h());
						try {
							const e = await (async e => {
								const t = await Object(u.a)(e, {
									...m
								});
								if (!t.ok) {
									const {
										errors: e
									} = t.body, r = Object(p.a)(e);
									throw new Error(r || "Unknown error in requestPurchaseCatalogProductOffers")
								}
								return t.body
							})(a());
							t(g(e.data.coinpacks.offers[0])), t(O(e.data.premium.offers[0]))
						} catch (l) {
							Object(o.b)() || console.error(l), c.c.captureException(l);
							const e = n.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(y(e))
						}
					}
				}, C = () => async e => e(j()), v = Object(s.a)(f.h), P = () => async (e, t, r) => {
					let {
						gqlContext: s
					} = r;
					var u, p;
					try {
						const t = await Object(a.a)(s());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (u = r.errors) || void 0 === u ? void 0 : u.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (p = r.awards) || void 0 === p ? void 0 : p.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(v({
								awards: r.awards
							})), e(Object(l.A)())
						}
					} catch (m) {
						Object(o.b)() || console.error(m), e(Object(i.f)({
							kind: d.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), c.c.captureException(m)
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
				return ce
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/higherOrderComponents/asTooltip.tsx"),
				c = r("./src/lib/classNames/index.ts"),
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
						className: Object(c.a)(t, f.a.header)
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
				g = r("./src/reddit/components/CoinPurchaseDropdownHeader/SalesHeader/index.m.less"),
				O = r.n(g);
			var j = e => {
				const {
					className: t,
					salesConfig: r
				} = e, {
					dropdownHeaderText: n,
					dropdownHeaderBackgroundAsset: s
				} = r;
				return o.a.createElement("div", {
					className: Object(c.a)(t, O.a.header)
				}, s && o.a.createElement("img", {
					className: O.a.saleHeaderImage,
					src: s
				}), o.a.createElement("span", {
					className: O.a.headerText
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
				_ = r("./node_modules/reselect/es/index.js"),
				E = r("./src/lib/constants/index.ts"),
				k = r("./src/lib/currency/currencies.ts"),
				w = r("./src/lib/localizeCurrency/index.ts"),
				I = r("./src/lib/opener/index.ts"),
				A = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				S = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				T = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				N = r("./src/reddit/actions/modal.ts"),
				L = r("./src/reddit/constants/modals.ts"),
				D = r("./src/reddit/contexts/PageLayer/index.tsx"),
				M = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				B = r("./src/reddit/featureFlags/index.ts"),
				R = r("./src/reddit/helpers/correlationIdTracker.ts"),
				F = r("./src/reddit/hooks/useLocale.ts"),
				U = r("./src/reddit/models/Gold/Premium/index.ts"),
				H = r("./src/reddit/selectors/crypto/points.ts"),
				G = r("./src/reddit/selectors/experiments/econ/index.ts"),
				q = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				z = r("./src/reddit/selectors/user.ts"),
				K = r("./src/reddit/components/LottieAnimation/index.tsx"),
				W = r("./src/reddit/controls/Button/index.tsx"),
				V = r("./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less"),
				Y = r.n(V);
			var Z = e => {
					const {
						className: t,
						buttonClass: r,
						buttonSubtext: n,
						buttonSubtextCrossout: s,
						buttonText: a,
						icon: i,
						onClick: d,
						primaryText: l,
						subtext: u,
						subtextCrossout: p
					} = e, m = r ? W.g : W.l;
					return o.a.createElement("div", {
						className: Object(c.a)(t, Y.a.CompactCoinPurchaseListItem)
					}, o.a.createElement("div", {
						className: Y.a.productSection
					}, i, o.a.createElement("div", null, o.a.createElement("span", {
						className: Y.a.primaryText
					}, l), u && o.a.createElement("span", {
						className: Object(c.a)(Y.a.subtext, {
							[Y.a.crossout]: p
						})
					}, Array.isArray(u) ? u.map((e, t) => o.a.createElement("p", {
						key: t
					}, e)) : u))), o.a.createElement("div", {
						className: Y.a.priceSection
					}, o.a.createElement(m, {
						className: Object(c.a)(Y.a.button, r),
						redditStyle: !0,
						onClick: d
					}, a), o.a.createElement("span", {
						className: Object(c.a)(Y.a.buttonSubtext, {
							[Y.a.crossout]: s
						})
					}, n)))
				},
				Q = r("./src/reddit/components/CompactCoinPurchaseList/index.m.less"),
				J = r.n(Q);
			const $ = Object(_.c)({
					coinPackages: q.d,
					communityPointsConversionEnabled: B.d.spPointsCoinConversion,
					communityPointsName: (e, t) => {
						var r;
						const n = Object(D.s)(e, t);
						return null === (r = Object(H.b)(e, null == n ? void 0 : n.id)) || void 0 === r ? void 0 : r.name
					},
					isFreeAwardEventEnabled: q.f,
					isPremiumCoinStoreUpsellEnabled: G.k,
					isPremiumSubscriber: z.y,
					premiumPackages: q.i,
					purchaseCatalogError: q.k,
					purchaseCatalogPending: q.l
				}),
				X = Object(x.b)($, e => ({
					onClickClaimFreeAward: () => e(Object(N.h)(L.a.ECON_CLAIM_FREE_AWARD_MODAL)),
					onClickCoinPackage: (t, r) => e(Object(A.b)({
						correlationId: r,
						packageId: t.mobileId
					})),
					onClickConvert: () => e(Object(N.h)(L.a.CONVERT_TO_COINS)),
					onClickPremiumPackage: (t, r) => r ? e(Object(S.openWithBlob)({
						packageId: U.b,
						correlationId: t
					})) : Object(I.e)("/premium", I.d.BLANK),
					requestPurchaseCatalog: t => e(Object(T.b)({
						correlationId: t
					}))
				}));
			class ee extends o.a.Component {
				constructor(e) {
					super(e), this.getPremiumListItem = () => {
						const {
							isPremiumSubscriber: e,
							premiumPackages: t
						} = this.props, r = Object(F.a)(), n = t.length ? t[0] : void 0;
						if (e || !n) return null;
						const {
							periodicalCoins: o,
							signupBonusCoins: s
						} = n, c = s ? Object(w.a)(s) : void 0, a = Object(w.b)(o, {
							locale: r,
							type: k.b.Reddit,
							currency: k.a
						}), i = {
							buttonClass: J.a.premiumButtonStyle,
							buttonSubtext: c ? P.fbt._("{number of bonus coins} bonus coins", [P.fbt._param("number of bonus coins", c)], {
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
						} = this.props, r = Object(F.a)(), n = e.map(e => {
							const {
								baselineCoins: t,
								baselinePennies: n,
								coins: o,
								pennies: s,
								bonusPct: c
							} = e, a = Object(w.b)(o, {
								locale: r,
								type: k.b.Reddit,
								currency: k.a
							}), i = Object(w.b)(s, {
								locale: r
							});
							let d, l;
							return o !== t && (d = Object(w.b)(t, {
								locale: r,
								type: k.b.Reddit,
								currency: k.a
							})), {
								buttonSubtext: l = s !== n ? Object(w.b)(n, {
									locale: r
								}) : c ? P.fbt._("{percent bonus}% Bonus", [P.fbt._param("percent bonus", Object(w.a)(c, {
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
						const s = (null === (e = null == n ? void 0 : n.meta) || void 0 === e ? void 0 : e.name) === E.Sb.PREMIUM;
						r(this.correlationId, s)
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
						return e ? o.a.createElement(Z, {
							buttonClass: J.a.freeAwardButton,
							buttonText: P.fbt._("Claim", null, {
								hk: "OUYUl"
							}),
							icon: o.a.createElement(K.a, {
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
						return e && t ? o.a.createElement(Z, {
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
					}, this.correlationId = Object(R.d)(R.a.GoldPayment, !1), e.coinPackages.length || e.purchaseCatalogPending || e.requestPurchaseCatalog(this.correlationId)
				}
				packageDetailsAsListItem(e) {
					const {
						buttonClass: t,
						buttonSubtext: r,
						buttonText: n,
						coinPackage: s,
						primaryText: c,
						subtext: a
					} = e, i = s && s.coins !== s.baselineCoins, d = s && s.pennies !== s.baselinePennies;
					return o.a.createElement(Z, {
						buttonClass: t,
						buttonSubtext: r,
						buttonSubtextCrossout: d,
						buttonText: n,
						key: c,
						onClick: s ? () => this.handleClickBuyCoins(s) : this.handleClickBuyPremium,
						primaryText: c,
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
					}, o.a.createElement(M.a, {
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
			var te = Object(D.v)()(X(Object(i.c)(ee))),
				re = r("./src/reddit/components/CoinPurchaseDropdown/index.m.less"),
				ne = r.n(re);
			const {
				fbt: oe
			} = r("./node_modules/fbt/lib/FbtPublic.js"), se = Object(s.a)(d.a);
			class ce extends o.a.Component {
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
						tooltipId: s
					} = this.props;
					return o.a.createElement(se, {
						className: Object(c.a)(t, ne.a.CoinPurchaseDropdown, {
							[ne.a.activeSale]: !!e
						}),
						isFixed: !0,
						isOpen: r,
						targetPosition: ["center", "bottom"],
						tooltipPosition: ["right", "top"],
						tooltipId: s
					}, o.a.createElement(v, {
						activeSaleConfig: e
					}), o.a.createElement(te, {
						className: ne.a.purchaseList,
						onClick: n,
						sorted: !0
					}))
				}
			}
			t.default = Object(i.c)(ce)
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
				s = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = r.n(c);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: n = 10
				} = e;
				return o.a.createElement("div", {
					className: Object(s.a)(a.a.loadingIcon, r, {
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
				s = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
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
				return Object(o.a)(Object(s.a)(r, [c.a]), {
					method: n.ob.POST,
					endpoint: p,
					data: l
				}).then(i.a)
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
				return Object(o.a)(Object(s.a)(t, [c.a]), {
					method: n.ob.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: l
				}).then(i.a)
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
				return Object(o.a)(Object(s.a)(t, [c.a]), {
					method: n.ob.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: u
				}).then(i.a)
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
				return Object(o.a)(Object(s.a)(t, [c.a]), {
					method: n.ob.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: p
				}).then(i.a)
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
				return Object(o.a)(Object(s.a)(r, [c.a]), {
					method: n.ob.POST,
					endpoint: `${r.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: h
				}).then(i.a)
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
				return Object(o.a)(Object(s.a)(r, [c.a]), {
					method: n.ob.POST,
					endpoint: `${r.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: m
				}).then(i.a)
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				o = r("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const r = new n.BigNumber(e),
					o = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(o).toString()
			}

			function c(e, t) {
				return Object(o.b)(parseInt(s(e, t), 10))
			}

			function a(e, t) {
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
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, o, s, c;
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
				}(c || (c = {}))
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return i
			})), r.d(t, "h", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "i", (function() {
				return p
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "e", (function() {
				return y
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/makeProductOfferKey/index.ts"),
				s = r("./src/reddit/models/Gold/ProductOffer.ts"),
				c = r("./src/reddit/models/Payments/index.ts"),
				a = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				d = (e, t) => {
					let {
						subredditId: r,
						type: n
					} = t;
					var s, c, a;
					return r ? e.subreddits.productOffers[Object(o.a)(n, r)] : null === (a = null === (c = null === (s = e.features) || void 0 === s ? void 0 : s.goldPurchase) || void 0 === c ? void 0 : c.productOffers) || void 0 === a ? void 0 : a[Object(o.a)(n)]
				},
				l = e => {
					const t = d(e, {
						type: s.c.Coinpack
					});
					return null == t ? void 0 : t[0]
				},
				u = e => {
					const t = d(e, {
						type: s.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				p = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === c.b.PayPal || e[0] === c.b.Stripe)(e.requiredPaymentProviders)) : null,
				m = Object(n.a)(u, a.q, (e, t) => p(e, t) || null),
				b = Object(n.a)(m, (e, t) => {
					let {
						provider: r
					} = t;
					return r
				}, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				f = Object(n.a)(m, e => (null == e ? void 0 : e[0].price) || null),
				h = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				y = Object(n.a)(h, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/redditGQL/operations/PurchaseCatalogProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"098518521d5b"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CoinPurchaseDropdown.6937ace2febe2968e091.js.map