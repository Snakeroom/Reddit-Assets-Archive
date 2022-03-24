// https://www.redditstatic.com/desktop2x/Coins.6e09174720aa81efb811.js
// Retrieved at 3/24/2022, 2:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Coins"], {
		"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js": function(e, t, n) {
			! function(e, t) {
				"use strict";
				t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
				var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

				function r() {}

				function a() {}
				a.resetWarningCache = r;
				var c = function(e, t) {
					return e(t = {
						exports: {}
					}, t.exports), t.exports
				}((function(e) {
					e.exports = function() {
						function e(e, t, r, a, c, s) {
							if (s !== n) {
								var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
								throw o.name = "Invariant Violation", o
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
							checkPropTypes: a,
							resetWarningCache: r
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

				function o(e, t, n) {
					return t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function i(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function l(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? i(Object(n), !0).forEach((function(t) {
							o(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function d(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
							var n = [],
								r = !0,
								a = !1,
								c = void 0;
							try {
								for (var s, o = e[Symbol.iterator](); !(r = (s = o.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
							} catch (i) {
								a = !0, c = i
							} finally {
								try {
									r || null == o.return || o.return()
								} finally {
									if (a) throw c
								}
							}
							return n
						}
					}(e, t) || function(e, t) {
						if (e) {
							if ("string" == typeof e) return u(e, t);
							var n = Object.prototype.toString.call(e).slice(8, -1);
							return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0
						}
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function u(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				var m = function(e) {
						var n = t.useRef(e);
						return t.useEffect((function() {
							n.current = e
						}), [e]), n.current
					},
					p = function(e) {
						return null !== e && "object" === s(e)
					},
					f = function(e, t, n) {
						return p(e) ? Object.keys(e).reduce((function(r, a) {
							var c = !p(t) || ! function e(t, n) {
								if (!p(t) || !p(n)) return t === n;
								var r = Array.isArray(t);
								if (r !== Array.isArray(n)) return !1;
								var a = "[object Object]" === Object.prototype.toString.call(t);
								if (a !== ("[object Object]" === Object.prototype.toString.call(n))) return !1;
								if (!a && !r) return !1;
								var c = Object.keys(t),
									s = Object.keys(n);
								if (c.length !== s.length) return !1;
								for (var o = {}, i = 0; i < c.length; i += 1) o[c[i]] = !0;
								for (var l = 0; l < s.length; l += 1) o[s[l]] = !0;
								var d = Object.keys(o);
								if (d.length !== c.length) return !1;
								var u = t,
									m = n;
								return d.every((function(t) {
									return e(u[t], m[t])
								}))
							}(e[a], t[a]);
							return n.includes(a) ? (c && console.warn("Unsupported prop change: options.".concat(a, " is not a mutable property.")), r) : c ? l(l({}, r || {}), {}, o({}, a, e[a])) : r
						}), null) : null
					},
					b = function(e) {
						if (null === e || p(t = e) && "function" == typeof t.elements && "function" == typeof t.createToken && "function" == typeof t.createPaymentMethod && "function" == typeof t.confirmCardPayment) return e;
						var t;
						throw new Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
					},
					g = function(e) {
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
					h = t.createContext(null);
				h.displayName = "ElementsContext";
				var y = function(e) {
					var n = e.stripe,
						r = e.options,
						a = e.children,
						c = t.useRef(!1),
						s = t.useRef(!0),
						o = t.useMemo((function() {
							return g(n)
						}), [n]),
						i = d(t.useState((function() {
							return {
								stripe: null,
								elements: null
							}
						})), 2),
						l = i[0],
						u = i[1],
						p = m(n);
					null !== p && p !== n && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), c.current || ("sync" === o.tag && (c.current = !0, u({
						stripe: o.stripe,
						elements: o.stripe.elements(r)
					})), "async" === o.tag && (c.current = !0, o.stripePromise.then((function(e) {
						e && s.current && u({
							stripe: e,
							elements: e.elements(r)
						})
					}))));
					var b = m(r);
					return t.useEffect((function() {
						if (l.elements) {
							var e = f(r, b, ["clientSecret", "fonts"]);
							e && l.elements.update(e)
						}
					}), [r, b, l.elements]), t.useEffect((function() {
						return function() {
							s.current = !1
						}
					}), []), t.useEffect((function() {
						var e = l.stripe;
						e && e._registerWrapper && e.registerAppInfo && (e._registerWrapper({
							name: "react-stripe-js",
							version: "1.6.0"
						}), e.registerAppInfo({
							name: "react-stripe-js",
							version: "1.6.0",
							url: "https://stripe.com/docs/stripe-js/react"
						}))
					}), [l.stripe]), t.createElement(h.Provider, {
						value: l
					}, a)
				};
				y.propTypes = {
					stripe: c.any,
					options: c.object
				};
				var v = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(h), e)
					},
					O = function(e) {
						return (0, e.children)(v("mounts <ElementsConsumer>"))
					};
				O.propTypes = {
					children: c.func.isRequired
				};
				var j = function(e) {
						var n = t.useRef(e);
						return t.useEffect((function() {
								n.current = e
							}), [e]),
							function() {
								n.current && n.current.apply(n, arguments)
							}
					},
					k = function() {},
					E = function(e, n) {
						var r, a = "".concat((r = e).charAt(0).toUpperCase() + r.slice(1), "Element"),
							s = n ? function(e) {
								v("mounts <".concat(a, ">"));
								var n = e.id,
									r = e.className;
								return t.createElement("div", {
									id: n,
									className: r
								})
							} : function(n) {
								var r = n.id,
									c = n.className,
									s = n.options,
									o = void 0 === s ? {} : s,
									i = n.onBlur,
									l = void 0 === i ? k : i,
									d = n.onFocus,
									u = void 0 === d ? k : d,
									p = n.onReady,
									b = void 0 === p ? k : p,
									g = n.onChange,
									h = void 0 === g ? k : g,
									y = n.onEscape,
									O = void 0 === y ? k : y,
									E = n.onClick,
									C = void 0 === E ? k : E,
									x = v("mounts <".concat(a, ">")).elements,
									w = t.useRef(null),
									_ = t.useRef(null),
									P = j(b),
									N = j(l),
									I = j(u),
									T = j(C),
									A = j(h),
									S = j(O);
								t.useLayoutEffect((function() {
									if (null == w.current && x && null != _.current) {
										var t = x.create(e, o);
										w.current = t, t.mount(_.current), t.on("ready", (function() {
											return P(t)
										})), t.on("change", A), t.on("blur", N), t.on("focus", I), t.on("escape", S), t.on("click", T)
									}
								}));
								var M = m(o);
								return t.useEffect((function() {
									if (w.current) {
										var e = f(o, M, ["paymentRequest"]);
										e && w.current.update(e)
									}
								}), [o, M]), t.useLayoutEffect((function() {
									return function() {
										w.current && w.current.destroy()
									}
								}), []), t.createElement("div", {
									id: r,
									className: c,
									ref: _
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
						}, s.displayName = a, s.__elementType = e, s
					},
					C = "undefined" == typeof window,
					x = E("auBankAccount", C),
					w = E("card", C),
					_ = E("cardNumber", C),
					P = E("cardExpiry", C),
					N = E("cardCvc", C),
					I = E("fpxBank", C),
					T = E("iban", C),
					A = E("idealBank", C),
					S = E("p24Bank", C),
					M = E("epsBank", C),
					L = E("payment", C),
					R = E("paymentRequestButton", C),
					B = E("linkAuthentication", C),
					D = E("shippingAddress", C),
					G = E("afterpayClearpayMessage", C);
				e.AfterpayClearpayMessageElement = G, e.AuBankAccountElement = x, e.CardCvcElement = N, e.CardElement = w, e.CardExpiryElement = P, e.CardNumberElement = _, e.Elements = y, e.ElementsConsumer = O, e.EpsBankElement = M, e.FpxBankElement = I, e.IbanElement = T, e.IdealBankElement = A, e.LinkAuthenticationElement = B, e.P24BankElement = S, e.PaymentElement = L, e.PaymentRequestButtonElement = R, e.ShippingAddressElement = D, e.useElements = function() {
					return v("calls useElements()").elements
				}, e.useStripe = function() {
					return v("calls useStripe()").stripe
				}, Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}(t, n("./node_modules/react/index.js"))
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseTimes.js"),
				a = n("./node_modules/lodash/_castFunction.js"),
				c = n("./node_modules/lodash/toInteger.js"),
				s = 9007199254740991,
				o = 4294967295,
				i = Math.min;
			e.exports = function(e, t) {
				if ((e = c(e)) < 1 || e > s) return [];
				var n = o,
					l = i(e, o);
				t = a(t), e -= o;
				for (var d = r(l, t); ++n < e;) t(n);
				return d
			}
		},
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/lib/currency/cleanNumber/index.ts");

			function a(e, t) {
				const n = Object(r.a)(e),
					a = parseInt(n) / 100;
				return Math.floor(a) !== a || t ? a.toFixed(2) : String(a)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, n) {
			"use strict";

			function r(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/lib/currency/currencies.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return d
			}));
			var r, a = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(r || (r = {}));
			const c = "USD",
				s = "ETH",
				o = "COINS",
				i = [s, "BTC"],
				l = [o, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				d = {
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
		"./src/lib/loadRedditAdsPixel.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./src/lib/sentry/index.ts");

			function a() {
				! function(e, t) {
					if (!e.rdt) {
						var n = e.rdt = function() {
							n.sendEvent ? n.sendEvent.apply(n, arguments) : n.callQueue.push(arguments)
						};
						n.callQueue = [];
						var r = t.createElement("script");
						r.src = "https://www.redditstatic.com/ads/pixel.js", r.async = !0;
						var a = t.getElementsByTagName("script")[0];
						a.parentNode.insertBefore(r, a)
					}
				}(window, document), rdt("init", "t2_2q2gwo2t"), rdt("track", "PageVisit")
			}
			const c = () => {
				try {
					rdt("track", "Purchase")
				} catch (e) {
					r.c.captureMessage('Attempted to fire RedditAds "Purchase" pixel, but global "rdt" object was unavailable')
				}
			}
		},
		"./src/lib/localizeCurrency/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			}));
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				a = n("./src/lib/currency/centsToDollars/index.ts"),
				c = n("./src/lib/currency/currencies.ts"),
				s = n("./src/lib/prettyPrintNumber/index.ts"),
				o = n("./src/reddit/helpers/governance/tokens.ts"),
				i = n("./src/reddit/constants/intlSupport.ts");
			const l = (e, {
					locale: t = r.DEFAULT_LOCALE,
					pretty: n,
					formatOptions: a
				} = {}) => {
					const c = Number(e);
					return Object(i.c)() ? n ? Object(s.b)(c) : new Intl.NumberFormat(t, a).format(c) : u(c, n, t)
				},
				d = (e, t = {}) => {
					const {
						locale: n = r.DEFAULT_LOCALE,
						pretty: s,
						formatOptions: l,
						displayConversion: d,
						forceDecimals: f,
						currency: b = t.currency || (t.type ? p(t.type) : c.c),
						type: g = t.type || (t.currency ? m(t.currency) : c.b.Real)
					} = t, h = Number(e), y = String(e);
					switch (g) {
						case c.b.Reddit: {
							const e = c.e[b],
								t = e ? e() : b;
							return Object(i.c)() ? new Intl.NumberFormat(n, {
								currencyDisplay: "symbol",
								...l
							}).format(h) + " " + t : u(h, s, n, t)
						}
						case c.b.Crypto: {
							if (s) {
								return Object(o.c)(y, d) + " " + b
							}
							const e = Number(Object(o.b)(y, d));
							return Object(i.c)() ? new Intl.NumberFormat(n, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...l
							}).format(e) : u(e, s, n, b)
						}
						case c.b.Real:
						default: {
							const e = Number(Object(a.a)(y, f));
							return Object(i.c)() ? new Intl.NumberFormat(n, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								notation: s ? "compact" : "standard",
								...l
							}).format(e) : u(e, s, n, b)
						}
					}
				},
				u = (e, t, n, r) => {
					return (t ? Object(s.b)(e) : e.toLocaleString(n)) + (r ? " " + r : "")
				},
				m = e => c.g.includes(e.toUpperCase()) ? c.b.Reddit : c.f.includes(e.toUpperCase()) ? c.b.Crypto : c.b.Real,
				p = e => {
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
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return C
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "j", (function() {
				return T
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "h", (function() {
				return L
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/formatApiError/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/sentry/index.ts"),
				o = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = n("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = n("./src/reddit/endpoints/gold/purchase.ts"),
				f = n("./src/reddit/helpers/correlationIdTracker.ts"),
				b = n("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				g = n("./src/reddit/models/Gold/Award.ts"),
				h = n("./src/reddit/models/Gold/ProductOffer.ts"),
				y = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				O = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				j = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const k = Object(c.a)(j.u),
				E = Object(c.a)(j.c),
				C = e => async (t, n) => {
					t(k(e)), t(Object(d.h)(o.a.ECON_COIN_PURCHASE))
				}, x = () => async (e, t) => {
					e(E()), e(Object(d.g)(o.a.ECON_COIN_PURCHASE))
				}, w = Object(c.a)(j.y), _ = ({
					correlationId: e,
					packageId: t
				}) => async (n, r) => {
					const a = r();
					Object(v.e)(a, t) ? (n(w({
						correlationId: e,
						packageId: t
					})), n(Object(d.i)(o.a.GOLD_TARGETED_OFFER_MODAL))) : s.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${t}`)
				}, P = Object(c.a)(j.t), N = ({
					correlationId: e,
					packageId: t
				}) => async (n, r) => {
					Object(v.c)(r(), t) ? (n(P({
						correlationId: e,
						packageId: t
					})), n(Object(d.i)(o.a.ECON_COIN_PACKAGE_OFFER))) : s.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${t}`)
				}, I = (e, t, n) => async (a, c) => {
					await a(Object(l.c)(e, n));
					const s = c(),
						o = Object(v.p)(s, e);
					if (o) a(C({
						correlationId: n,
						packageId: o,
						thingId: t
					}));
					else {
						const e = Object(v.n)(s),
							t = r.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						a(Object(u.f)({
							kind: y.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, T = (e, t, n) => async (c, s, {
					apiContext: o
				}) => {
					const l = s(),
						{
							coins: d,
							pennies: u
						} = n,
						m = Object(O.r)(l) || Object(f.e)(f.a.GoldPayment, !1);
					let b, g;
					c(Object(i.stripeTokenPending)());
					const y = Object(O.y)(l);
					if (y || (b = await c(Object(i.validateAndCreateStripeToken)(e, t)), g = Object(O.v)(l), b)) try {
						const e = await Object(p.f)({
							coins: d,
							context: o(),
							correlationId: m,
							offerContext: Object(h.d)(n, !1),
							pennies: u,
							rememberCard: g,
							savedCardId: y || void 0,
							token: b
						});
						if (e.error) {
							const t = Object(a.a)(e.error, e.status);
							return void c(Object(i.stripeApiError)(t))
						}
						return c(Object(i.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(f.b)(f.a.GoldPayment)
					} catch (v) {
						const e = Object(a.a)(v);
						c(Object(i.stripeApiError)(e))
					} else {
						const e = r.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						c(Object(i.stripeApiError)(e))
					}
				}, A = (e, t, c, s) => async (o, l, {
					apiContext: d
				}) => {
					const u = l(),
						{
							coins: m,
							pennies: y
						} = c,
						v = Object(O.r)(u) || Object(f.e)(f.a.GoldPayment, !1);
					let j, k;
					o(Object(i.stripeTokenPending)());
					const E = Object(O.y)(u);
					if (E || (j = await o(Object(i.validateAndCreateStripeToken)(e, t)), k = Object(O.v)(u), j)) try {
						const {
							gildModalThingId: e,
							isAnonymous: t,
							message: l,
							selectedAward: O
						} = u.gild;
						if (!e || !O.id) {
							const e = r.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void o(Object(i.stripeApiError)(e))
						}
						const C = O.id,
							w = {
								gildType: C,
								isAnonymous: t,
								message: l
							},
							_ = await Object(p.e)({
								coins: m,
								context: d(),
								correlationId: v,
								gildParams: w,
								isOldReddit: s,
								offerContext: Object(h.d)(c, !0),
								pennies: y,
								rememberCard: k,
								savedCardId: E || void 0,
								thingId: e,
								token: j
							});
						if (_.error) {
							const e = Object(a.a)(_.error, _.status);
							return void o(Object(i.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await n.e("gildActions").then(n.bind(null, "./src/reddit/actions/gold/gild.ts"));
							o(x()), o(Object(i.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: r,
								all_awardings: a,
								coins: c,
								treatment_tags: s
							} = _.body;
							return o(t({
								awardKarmaReceived: r || 0,
								awardId: C,
								awardings: a && a.length ? Object(b.a)(a).map(e => ({
									award: Object(g.h)(e),
									total: e.count
								})) : [],
								coins: c,
								id: e,
								treatmentTags: s
							})), void Object(f.b)(f.a.GoldPayment)
						}
					} catch (C) {
						const e = Object(a.a)(C);
						o(Object(i.stripeApiError)(e))
					} else {
						const e = r.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						o(Object(i.stripeApiError)(e))
					}
				}, S = e => async (t, n, {
					apiContext: r
				}) => {
					const c = Object(f.c)(f.a.GoldPayment),
						{
							coins: o,
							pennies: l
						} = e;
					try {
						const e = await Object(m.a)({
							context: r(),
							coins: o,
							pennies: l,
							correlationId: c
						});
						if (e.error) {
							const n = Object(a.a)(e.error);
							return void t(Object(i.paypalApiError)(n))
						} {
							const {
								order_id: t
							} = e.body;
							return t
						}
					} catch (d) {
						s.c.captureException(d);
						const e = Object(a.a)(d);
						t(Object(i.paypalApiError)(e))
					}
				}, M = (e, t) => async (n, r, {
					apiContext: c
				}) => {
					const o = r(),
						l = Object(O.r)(o) || Object(f.e)(f.a.GoldPayment, !1),
						{
							coins: d,
							pennies: u
						} = t;
					try {
						const r = await Object(m.c)({
							context: c(),
							offerContext: Object(h.d)(t, !1),
							orderId: e,
							coins: d,
							pennies: u,
							correlationId: l
						});
						if (r.error) {
							const e = Object(a.a)(r.error);
							return void n(Object(i.paypalApiError)(e))
						} {
							const {
								coins: e
							} = r.body;
							n(Object(i.paymentCompleted)({
								coins: e,
								confirmed: !0
							})), Object(f.b)(f.a.GoldPayment)
						}
					} catch (p) {
						s.c.captureException(p);
						const e = Object(a.a)(p);
						n(Object(i.paypalApiError)(e))
					}
				}, L = (e, t) => async (c, o, {
					apiContext: l
				}) => {
					const d = o(),
						u = Object(O.r)(d) || Object(f.e)(f.a.GoldPayment, !1),
						{
							coins: p,
							pennies: y
						} = t;
					try {
						const {
							gildModalThingId: s,
							isAnonymous: o,
							message: v,
							selectedAward: O
						} = d.gild;
						if (!s || !O) return void c(Object(i.paypalApiError)(r.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const j = O.id,
							k = await Object(m.d)({
								context: l(),
								offerContext: Object(h.d)(t, !0),
								orderId: e,
								coins: p,
								pennies: y,
								thingId: s,
								awardId: j,
								message: v || "",
								isAnonymous: o,
								correlationId: u
							});
						if (k.error) {
							const e = Object(a.a)(k.error);
							c(Object(i.paypalApiError)(e))
						} else {
							c(x());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: r,
								subreddit_coins: a,
								treatment_tags: o
							} = k.body;
							c(Object(i.paymentCompleted)({
								coins: r,
								confirmed: !0
							}));
							const {
								gildSuccessful: l
							} = await n.e("gildActions").then(n.bind(null, "./src/reddit/actions/gold/gild.ts"));
							c(l({
								awardId: j,
								awardKarmaReceived: t || 0,
								awardings: Object(b.a)(e).map(e => ({
									award: Object(g.h)(e),
									total: e.count
								})),
								coins: r,
								id: s,
								subredditCoins: a,
								treatmentTags: o
							})), Object(f.b)(f.a.GoldPayment)
						}
					} catch (v) {
						s.c.captureException(v);
						const e = Object(a.a)(v);
						c(Object(i.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "selectPaymentMethod", (function() {
				return d
			})), n.d(t, "paymentCompleted", (function() {
				return u
			})), n.d(t, "cardNameInput", (function() {
				return m
			})), n.d(t, "postalCodeInput", (function() {
				return p
			})), n.d(t, "cardNameEmpty", (function() {
				return f
			})), n.d(t, "cardNumberChange", (function() {
				return b
			})), n.d(t, "cardExpiryChange", (function() {
				return g
			})), n.d(t, "cardCvcChange", (function() {
				return h
			})), n.d(t, "stripeTokenPending", (function() {
				return y
			})), n.d(t, "stripeTokenError", (function() {
				return v
			})), n.d(t, "stripeApiError", (function() {
				return O
			})), n.d(t, "validateAndCreateStripeToken", (function() {
				return j
			})), n.d(t, "paypalApiError", (function() {
				return k
			})), n.d(t, "toggleRememberCard", (function() {
				return E
			})), n.d(t, "selectSavedCard", (function() {
				return C
			})), n.d(t, "_deleteSavedCard", (function() {
				return x
			})), n.d(t, "deleteSavedCard", (function() {
				return w
			})), n.d(t, "savedCardsPending", (function() {
				return _
			})), n.d(t, "savedCardsSuccess", (function() {
				return P
			})), n.d(t, "loadSavedCards", (function() {
				return N
			}));
			var r = n("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/sentry/index.ts"),
				o = n("./src/reddit/endpoints/gold/purchase.ts"),
				i = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				l = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const d = Object(c.a)(l.F),
				u = Object(c.a)(l.A),
				m = Object(c.a)(l.b),
				p = Object(c.a)(l.C),
				f = Object(c.a)(l.a),
				b = Object(c.a)(l.K),
				g = Object(c.a)(l.J),
				h = Object(c.a)(l.I),
				y = Object(c.a)(l.M),
				v = Object(c.a)(l.L),
				O = Object(c.a)(l.H),
				j = (e, t) => async (n, c) => {
					const s = c(),
						o = Object(i.h)(s),
						l = Object(i.l)(s),
						d = t.getElement(r.CardNumberElement);
					if (!d) return;
					const {
						token: u,
						error: m
					} = await e.createToken(d, {
						name: o,
						address_zip: l
					});
					if (o.trim()) {
						if (!m && u) return u;
						n(v(m || void 0))
					} else {
						const e = a.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						n(f({
							message: e
						}))
					}
				}, k = Object(c.a)(l.B), E = Object(c.a)(l.N), C = Object(c.a)(l.G), x = Object(c.a)(l.g), w = e => async (t, n, {
					apiContext: r
				}) => {
					t(x(e));
					try {
						const t = await Object(o.a)(r(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (a) {
						s.c.captureException(a)
					}
				}, _ = Object(c.a)(l.D), P = Object(c.a)(l.E), N = () => async (e, t, {
					apiContext: n
				}) => {
					e(_());
					try {
						const t = await Object(o.b)(n());
						if (t.error) throw new Error(t.error.type);
						const r = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(P(r)), r[0] && e(C(r[0].cardId))
					} catch (r) {
						s.c.captureException(r), e(P([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return N
			})), n.d(t, "a", (function() {
				return T
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/env/index.ts"),
				c = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/sentry/index.ts"),
				o = n("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				i = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/reddit/actions/post.ts"),
				m = n("./src/lib/makeGqlRequest/index.ts"),
				p = n("./src/reddit/actions/economics/powerups/helpers.ts"),
				f = n("./src/redditGQL/operations/PurchaseCatalogProductOffers.json");
			var b = n("./src/reddit/selectors/experiments/econ/index.ts"),
				g = n("./src/reddit/selectors/gold/productOffers.ts"),
				h = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const y = Object(c.a)(h.l),
				v = Object(c.a)(h.m),
				O = Object(c.a)(h.k),
				j = Object(c.a)(h.o),
				k = Object(c.a)(h.n),
				E = Object(c.a)(h.i),
				C = Object(c.a)(h.j),
				x = e => async (t, n, {
					gqlContext: c
				}) => {
					const l = n();
					if (!Object(b.i)(l)) return t((e => async (t, n, {
						apiContext: c
					}) => {
						t(y());
						const l = n(),
							d = Object(i.P)(l);
						try {
							const n = !d,
								r = await Object(o.b)({
									context: c(),
									correlationId: e,
									shouldUseCurrentOrigin: n
								});
							if (!r.ok) throw new Error(r.error && r.error.type || "Unknown error");
							const a = r.body;
							t(v(a))
						} catch (u) {
							Object(a.b)() || console.error(u), s.c.captureException(u);
							const e = r.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(O(e))
						}
					})(null == e ? void 0 : e.correlationId));
					const d = Object(g.a)(l);
					if ((null == e ? void 0 : e.forceLoad) || !d) {
						t(j());
						try {
							const e = await (async e => {
								const t = await Object(m.a)(e, {
									...f
								});
								if (!t.ok) {
									const {
										errors: e
									} = t.body, n = Object(p.a)(e);
									throw new Error(n || "Unknown error in requestPurchaseCatalogProductOffers")
								}
								return t.body
							})(c());
							t(E(e.data.coinpacks.offers[0])), t(C(e.data.premium.offers[0]))
						} catch (u) {
							Object(a.b)() || console.error(u), s.c.captureException(u);
							const e = r.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(k(e))
						}
					}
				}, w = Object(c.a)(h.q), _ = Object(c.a)(h.r), P = Object(c.a)(h.p), N = (e, t) => async (n, c, {
					apiContext: i
				}) => {
					const l = c();
					if (Object(b.i)(l)) return await n(x());
					n(w());
					try {
						const r = await Object(o.c)({
							awardId: e,
							context: i(),
							correlationId: t
						});
						if (!r.ok) throw new Error(r.error && r.error.type || "Unknown error");
						const a = r.body;
						if (!a.coinPackages || !a.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						n(_(a))
					} catch (d) {
						Object(a.b)() || console.error(d), s.c.captureException(d);
						const e = r.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						n(P(e))
					}
				}, I = Object(c.a)(h.h), T = () => async (e, t, {
					gqlContext: n
				}) => {
					var c, i;
					try {
						const t = await Object(o.a)(n());
						if (t.ok) {
							const n = t.body.data.claimAwardOffer;
							if (null === (c = n.errors) || void 0 === c ? void 0 : c.length) throw new Error(n.errors.map(e => e.message).join(" | "));
							if (!(null === (i = n.awards) || void 0 === i ? void 0 : i.length)) throw new Error("Got empty award list on free award offer claim");
							if (!n.ok) throw new Error("Got not ok response on free award offer claim");
							await e(I({
								awards: n.awards
							})), e(Object(u.B)())
						}
					} catch (m) {
						Object(a.b)() || console.error(m), e(Object(l.f)({
							kind: d.b.Error,
							text: r.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), s.c.captureException(m)
					}
				}
		},
		"./src/reddit/components/CoinPurchasePackage/index.m.less": function(e, t, n) {
			e.exports = {
				coinPurchasePackage: "_2EIXBaqbDzjEAL7-FJSYrP",
				large: "_2bLqgYtdh1iwHZvymepMHY",
				imageContainer: "_3UcT0NNsA2y6trB2G7Qk3T",
				badge: "_2q1pllb_vmiNtpjLMUbL3E",
				stamp: "dh-QO7AdDu0vFy7aoCaVt",
				stampIcon: "ei1DxPM2zy9FNW2ulDBOn",
				stampValue: "lVRFLCbqG6b523UFMdEj3",
				stampText: "_3UmM4fIFVtu49_z-3UMgZL",
				contentContainer: "_3YFnrc2p9Tl-6EMp1fAqpG",
				contentText: "_2rZvl2zlNBzOQXl-oKZ9cu",
				price: "_3eYcjtmYoyVXxiONpaL-dl",
				priceCoinIcon: "_3Cwg9Vp-uedO-_VTBrJInh",
				priceValue: "_5vvqF-Ums1umqkRQRQgxc",
				priceCurrency: "GAlR-4atoPo_42Ies2wM4",
				crossout: "dIoLyZbXoDJefsplq4m_j",
				description: "_36_v0R5TTjmgVJ4q6NSB-6",
				cta: "_2VikcGTdLgHpqRMo203jak",
				priceCrossout: "_1ZviI-xoPLg6gwP7AQrMUb"
			}
		},
		"./src/reddit/components/CoinPurchasePackage/placeholder.m.less": function(e, t, n) {
			e.exports = {
				packagePlaceholder: "_2qznWNxYQ2Sp1T5Gx9Ya2r",
				large: "_21Ve23nfMGEg24nP4w5bKj"
			}
		},
		"./src/reddit/components/CollapsibleFAQ/index.m.less": function(e, t, n) {
			e.exports = {
				collapsibleFAQ: "PGMuR8fr8VizHP4fajECO",
				collapsibleFaq: "PGMuR8fr8VizHP4fajECO",
				questionButton: "AE_-OfcuQcVv1sMNAnYez",
				buttonContent: "_3GpGGAjkKUtSIydzuhDgjk",
				collapseIcon: "GcBEian3rJp0dqdStxeaG",
				collapsibleAnswer: "_2aCJykcYH0l0L0J29lNN6X",
				isOpen: "_1epMyDuMGgpwMk-QoPqYMi"
			}
		},
		"./src/reddit/components/CollapsibleFAQ/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				c = n("./src/reddit/components/CollapsibleFAQ/index.m.less"),
				s = n.n(c),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				l = n("./src/reddit/icons/svgs/ChevronUp/index.tsx");
			class d extends a.a.Component {
				constructor(e) {
					super(e), this.toggleOpen = () => {
						this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.state = {
						isOpen: !e.defaultClosed
					}
				}
				render() {
					const {
						className: e,
						question: t,
						children: n
					} = this.props, {
						isOpen: r
					} = this.state, c = r ? s.a.isOpen : "";
					return a.a.createElement("div", {
						className: Object(o.a)(e, s.a.collapsibleFAQ)
					}, a.a.createElement("button", {
						className: s.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, a.a.createElement("span", {
						className: s.a.buttonContent,
						tabIndex: -1
					}, t, r ? a.a.createElement(l.a, {
						className: s.a.collapseIcon
					}) : a.a.createElement(i.a, {
						className: s.a.collapseIcon
					}))), a.a.createElement("div", {
						className: Object(o.a)(s.a.collapsibleAnswer, c)
					}, n))
				}
			}
			t.a = d
		},
		"./src/reddit/components/GildMarketingDescription/index.m.less": function(e, t, n) {
			e.exports = {
				iconContainer: "_3aLGwXXgtLTRBL_s4zGzpA",
				textContainer: "L1uF-uIVgiGprHTgSe6Pa",
				title: "_1RHFAL2gq_LNUOW3yaREdJ",
				content: "_3iKxdZxO2uDcDfP0M_uXXu",
				isMobileStyled: "hhQ0bLehrQAD95bHHfIHL"
			}
		},
		"./src/reddit/components/GildMarketingDescription/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				c = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/components/GildMarketingDescription/index.m.less"),
				o = n.n(s);
			t.a = e => {
				const {
					children: t,
					className: n,
					icon: r,
					isMobileStyled: s,
					title: i
				} = e;
				return a.a.createElement("div", {
					className: Object(c.a)(n, {
						[o.a.isMobileStyled]: s
					})
				}, a.a.createElement("div", {
					className: o.a.iconContainer
				}, r), a.a.createElement("div", {
					className: o.a.textContainer
				}, a.a.createElement("h3", {
					className: o.a.title
				}, i), a.a.createElement("p", {
					className: o.a.content
				}, t)))
			}
		},
		"./src/reddit/components/MarketingPageFooter/index.m.less": function(e, t, n) {
			e.exports = {
				marketingPageFooter: "_3BwBOzWryMj3__GUbbUsfT",
				marketingPageFooterInner: "_30YqpAvDOv6bhMsdX4RBmh",
				linkContainer: "_3k49tjCFDJWYNMxa7F_Vcz",
				linkCol: "Kc3eh30cKiJsqGyYdTomf",
				linkBoldCol: "NdUUYBbykS5XarNMBnwW8",
				link: "_2__-I0A5TrnEaHBIKzBzWG",
				linkColInner: "Qeqi5He8ogV_wEJHq4JuY",
				linkItem: "_2faDmx1pVndPEOOWcvmbzy",
				legal: "_37R5bPLs9vyWkel2akHN9v",
				legalItem: "_3sfkqPfhkeoURTGRzBv1TP",
				legalLink: "_38avtjw3edhexhYWmJx1Rw"
			}
		},
		"./src/reddit/components/MarketingPageFooter/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				c = n("./src/reddit/components/MarketingPageFooter/index.m.less"),
				s = n.n(c),
				o = n("./src/lib/classNames/index.ts");
			const {
				fbt: i
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => a.a.createElement("div", {
				className: Object(o.a)(e.className, s.a.marketingPageFooter)
			}, a.a.createElement("div", {
				className: Object(o.a)(e.className, s.a.marketingPageFooterInner)
			}, a.a.createElement("div", {
				className: s.a.linkContainer
			}, a.a.createElement("div", {
				className: s.a.linkCol
			}, a.a.createElement("ul", {
				className: s.a.linkColInner
			}, a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://www.redditinc.com/"
			}, i._("about", null, {
				hk: "3IO4c7"
			}))), a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://www.redditinc.com/careers"
			}, i._("careers", null, {
				hk: "2GATRU"
			}))), a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://www.redditinc.com/press"
			}, i._("press", null, {
				hk: "iUiGg"
			}))))), a.a.createElement("div", {
				className: s.a.linkCol
			}, a.a.createElement("ul", {
				className: s.a.linkColInner
			}, a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://www.redditinc.com/advertising"
			}, i._("advertise", null, {
				hk: "RYuIn"
			}))), a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "http://www.redditblog.com/"
			}, i._("blog", null, {
				hk: "4xzWuA"
			}))), a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://www.reddithelp.com"
			}, i._("help", null, {
				hk: "36XyzA"
			}))))), a.a.createElement("div", {
				className: Object(o.a)(s.a.linkCol, s.a.linkBoldCol)
			}, a.a.createElement("ul", {
				className: s.a.linkColInner
			}, a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://www.reddit.com/coins"
			}, i._("reddit coins", null, {
				hk: "3Ts6tu"
			}))), a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://www.reddit.com/premium"
			}, i._("reddit premium", null, {
				hk: "3vPbLO"
			}))))), a.a.createElement("div", {
				className: Object(o.a)(s.a.linkCol, s.a.linkBoldCol)
			}, a.a.createElement("ul", {
				className: s.a.linkColInner
			}, a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://www.facebook.com/reddit/"
			}, i._("Facebook", null, {
				hk: "47DT2F"
			}))), a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://twitter.com/reddit"
			}, i._("Twitter", null, {
				hk: "3aUv7u"
			}))), a.a.createElement("li", {
				className: s.a.linkItem
			}, a.a.createElement("a", {
				className: s.a.link,
				href: "https://www.instagram.com/reddit/"
			}, i._("Instagram", null, {
				hk: "dVIRX"
			})))))), a.a.createElement("ul", {
				className: s.a.legal
			}, a.a.createElement("li", {
				className: s.a.legalItem
			}, a.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.redditinc.com/policies/content-policy"
			}, i._("content policy", null, {
				hk: "4ptiaZ"
			}))), a.a.createElement("li", {
				className: s.a.legalItem
			}, a.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.reddit.com/help/privacypolicy"
			}, i._("privacy policy", null, {
				hk: "1ybjnz"
			}))), a.a.createElement("li", {
				className: s.a.legalItem
			}, a.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, i._("user agreement", null, {
				hk: "4puRxC"
			}))), a.a.createElement("li", {
				className: s.a.legalItem
			}, a.a.createElement("a", {
				className: s.a.legalLink,
				href: "https://www.reddit.com/help/healthycommunities/"
			}, i._("mod policy", null, {
				hk: "1VvAdM"
			}))), a.a.createElement("li", {
				className: s.a.legalItem
			}, i._("© {year} Reddit, Inc. All rights reserved", [i._param("year", (new Date).getFullYear().toString())], {
				hk: "23FUx6"
			})))))
		},
		"./src/reddit/components/PremiumMarketingBanner/index.m.less": function(e, t, n) {
			e.exports = {
				premiumBanner: "_2tsT1sLHLYXqHUGNYQsm6-",
				premiumCrest: "_1ExqjoNTE2nif0e3QVdLwy",
				premiumDescription: "S8jGzZVfR9ZPB9DIOUB7f",
				premiumCTA: "svs_XC_fBjFtyJDODBqnd",
				premiumCta: "svs_XC_fBjFtyJDODBqnd"
			}
		},
		"./src/reddit/components/TimeLeft/TimeLeft.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				c = n("./src/reddit/components/TimeLeft/index.m.less"),
				s = n.n(c),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/timeAgo/index.ts"),
				l = n("./src/reddit/icons/svgs/Clock/index.tsx");
			t.a = e => {
				const {
					className: t,
					expirationDate: n
				} = e, r = Math.floor(n.getTime() / 1e3), c = Object(i.b)(r);
				return a.a.createElement("div", {
					className: Object(o.a)(t)
				}, a.a.createElement(l.a, {
					className: s.a.clockIcon
				}), a.a.createElement("span", {
					className: s.a.timeLeft
				}, c))
			}
		},
		"./src/reddit/components/TimeLeft/index.m.less": function(e, t, n) {
			e.exports = {
				clockIcon: "_1DDlcC1o7n-afkLICCzCK9",
				timeLeft: "UN0qnXla79aOGiH-PaULH"
			}
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "e", (function() {
				return f
			}));
			var r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				c = n("./src/lib/omitHeaders/index.ts"),
				s = n("./src/reddit/constants/headers.ts"),
				o = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				i = n("./src/reddit/endpoints/gold/purchase.ts");
			const l = async ({
				buttonId: e,
				context: t,
				correlationId: n
			}) => {
				const l = {
						button_id: e,
						correlation_id: n
					},
					d = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					u = Object(o.a)(d);
				return Object(a.a)(Object(c.a)(t, [s.a]), {
					method: r.jb.POST,
					endpoint: u,
					data: l
				}).then(i.c)
			}, d = async ({
				context: e,
				coins: t,
				pennies: n,
				correlationId: o
			}) => {
				const l = {
					coins: t,
					pennies: n,
					correlation_id: o
				};
				return Object(a.a)(Object(c.a)(e, [s.a]), {
					method: r.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: l
				}).then(i.c)
			}, u = async ({
				context: e,
				awardId: t,
				pennies: n,
				thingId: o,
				correlationId: l
			}) => {
				const d = {
					award_id: t,
					correlation_id: l,
					pennies: n,
					thing_id: o
				};
				return Object(a.a)(Object(c.a)(e, [s.a]), {
					method: r.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: d
				}).then(i.c)
			}, m = async ({
				context: e,
				offerContext: t,
				orderId: n,
				coins: o,
				pennies: l,
				correlationId: d
			}) => {
				const u = {
					offer_context: t,
					order_id: n,
					coins: o,
					pennies: l,
					correlation_id: d
				};
				return Object(a.a)(Object(c.a)(e, [s.a]), {
					method: r.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: u
				}).then(i.c)
			}, p = async ({
				awardId: e,
				context: t,
				coins: n,
				correlationId: o,
				isAnonymous: l,
				message: d,
				offerContext: u,
				orderId: m,
				pennies: p,
				thingId: f
			}) => {
				const b = {
					award_id: e,
					coins: n,
					correlation_id: o,
					is_anonymous: l,
					message: d,
					offer_context: u,
					order_id: m,
					pennies: p,
					thing_id: f
				};
				return Object(a.a)(Object(c.a)(t, [s.a]), {
					method: r.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: b
				}).then(i.c)
			}, f = async ({
				awardId: e,
				context: t,
				correlationId: n,
				isAnonymous: o,
				message: l,
				orderId: d,
				thingId: u
			}) => {
				const m = {
					award_id: e,
					correlation_id: n,
					is_anonymous: o,
					message: l,
					order_id: d,
					thing_id: u
				};
				return Object(a.a)(Object(c.a)(t, [s.a]), {
					method: r.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: m
				}).then(i.c)
			}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);

			function c(e, t) {
				const n = e.toString().split(":");
				return n.length % 2 == 0 ? e : n.reduce((e, n, r) => (r % 2 == 0 ? e.push(n) : "" === n ? e.push(":") : `:${n}:` in t ? e.push(t[`:${n}:`]) : e.push(`:${n}:`), e), []).map((e, t) => a.a.createElement(a.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				a = n("./src/lib/prettyPrintNumber/index.ts");

			function c(e, t) {
				const n = new r.BigNumber(e),
					a = new r.BigNumber(t || 1);
				return n.dividedToIntegerBy(a).toString()
			}

			function s(e, t) {
				return Object(a.b)(parseInt(c(e, t), 10))
			}

			function o(e, t) {
				const n = new r.BigNumber(e),
					a = new r.BigNumber(t || 1);
				return n.multipliedBy(a).toFixed(0)
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, n) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				c = n.n(a);
			const s = ({
					isLoading: e
				}) => Object(r.a)(c.a.loadingBackground, {
					[c.a["m-loading"]]: e
				}),
				o = e => Object(r.a)(c.a.loadingBar, s(e))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, n) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				c = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/icons/svgs/Clock/index.m.less"),
				o = n.n(s);
			t.a = e => a.a.createElement("svg", {
				className: Object(c.a)(o.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), a.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M10,1.5 C14.687,1.5 18.5,5.313 18.5,10 C18.5,14.687 14.687,18.5 10,18.5 C5.314,18.5 1.5,14.687 1.5,10 C1.5,5.313 5.314,1.5 10,1.5 Z M7.879,12.122 C6.709,10.952 6.709,9.049 7.879,7.879 C9.012,6.746 10.988,6.746 12.121,7.879 C12.512,8.269 13.145,8.269 13.535,7.879 C13.926,7.489 13.926,6.855 13.535,6.465 C12.591,5.52 11.336,5 10,5 C8.664,5 7.409,5.52 6.465,6.465 C4.516,8.414 4.516,11.586 6.465,13.536 C7.409,14.48 8.664,15 10,15 C11.336,15 12.591,14.48 13.535,13.536 C13.926,13.145 13.926,12.512 13.535,12.122 C13.145,11.731 12.512,11.731 12.121,12.122 C10.988,13.255 9.012,13.255 7.879,12.122 Z"
			}))
		},
		"./src/reddit/icons/svgs/RedditCoinsLogo/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 446 96",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M257.65 32.844a6.096 6.096 0 1 1-12.19.22 6.096 6.096 0 0 1 12.19-.22",
				fill: "#DDBD37"
			}), a.a.createElement("path", {
				d: "M153.263 45.035c4.146 0 7.673 3.181 8.98 7.62h-17.96c1.307-4.439 4.834-7.62 8.98-7.62zm11.604 13.715c2.968 0 4.697-2.219 4.567-4.402-.068-1.154-.17-1.872-.306-2.458-1.819-7.885-8.232-13.712-15.865-13.712-9.048 0-16.382 8.187-16.382 18.287s7.334 18.286 16.382 18.286c5.667 0 9.715-2.064 12.661-5.299 1.436-1.576 1.172-4.053-.58-5.27-1.422-.989-3.223-.655-4.547.462-1.263 1.067-3.677 3.25-7.534 3.25-4.607 0-8.451-3.927-9.334-9.144h20.938zm-27.605-17.028a3.427 3.427 0 0 0-2.864-3.378c-4.993-.753-9.66 1.11-12.375 4.485v-.461c0-2.094-1.714-3.428-3.429-3.428a3.429 3.429 0 0 0-3.429 3.428v28.059c0 1.836 1.385 3.446 3.217 3.557a3.43 3.43 0 0 0 3.641-3.423V56.087c0-6.405 4.817-11.665 11.426-10.95.239.025.463.023.677-.001a3.427 3.427 0 0 0 3.136-3.414zm117.722 3.694a3.429 3.429 0 1 0-6.857 0v25.145a3.429 3.429 0 0 0 6.857 0V45.416zm-66.671 22.478c-5.261 0-9.524-5.117-9.524-11.43 0-6.311 4.263-11.428 9.524-11.428 5.26 0 9.524 5.117 9.524 11.429s-4.264 11.429-9.524 11.429zm15.62-41.526a3.429 3.429 0 1 0-6.857 0v15.31c-2.323-2.321-5.284-3.5-8.763-3.5-9.048 0-16.382 8.188-16.382 18.287 0 10.1 7.334 18.286 16.382 18.286 3.51 0 6.452-1.208 8.825-3.544a3.43 3.43 0 0 0 6.795-.646V26.368zm20.191 41.526c-5.26 0-9.524-5.117-9.524-11.43 0-6.311 4.264-11.428 9.524-11.428 5.26 0 9.524 5.117 9.524 11.429s-4.264 11.429-9.524 11.429zm15.62-41.526a3.429 3.429 0 1 0-6.857 0v15.31c-2.323-2.321-5.284-3.5-8.763-3.5-9.048 0-16.382 8.188-16.382 18.287 0 10.1 7.334 18.286 16.382 18.286 3.511 0 6.453-1.208 8.825-3.544a3.43 3.43 0 0 0 6.795-.646V26.368zm32.66 44.192V45.037h3.048c1.624 0 3.04-1.225 3.145-2.845a3.047 3.047 0 0 0-3.041-3.251h-3.152v-4.835c0-1.826-1.378-3.421-3.2-3.54a3.43 3.43 0 0 0-3.657 3.423v4.952h-2.84c-1.622 0-3.04 1.225-3.145 2.845a3.048 3.048 0 0 0 3.04 3.25h2.945v25.526a3.429 3.429 0 1 0 6.857 0v-.002z",
				fill: "#FFF"
			}), a.a.createElement("path", {
				d: "M307.89 75.071c-5.073 0-9.042-1.572-11.91-4.716-2.869-3.142-4.301-7.36-4.301-12.65 0-2.302.385-4.455 1.154-6.458a17.553 17.553 0 0 1 3.36-5.462c1.398-1.57 3.153-2.839 5.262-3.802 2.108-.962 4.407-1.444 6.897-1.444 3.435 0 6.23.77 8.389 2.307 2.155 1.538 3.233 3.636 3.233 6.292 0 1.107-.283 2.086-.852 2.94-.568.852-1.505 1.277-2.808 1.277-1.4 0-2.484-.33-3.255-.992-.769-.662-1.153-1.4-1.153-2.218 0-.992.143-2.013.426-3.062.285-1.048.45-1.815.498-2.3-.426-.684-1.058-1.142-1.898-1.373a10.132 10.132 0 0 0-2.712-.348 7.942 7.942 0 0 0-3.244.681c-1.029.455-2.028 1.29-2.998 2.508-.872 1.105-1.584 2.6-2.125 4.481-.544 1.883-.816 4.129-.816 6.74 0 4.119.975 7.478 2.928 10.078 1.953 2.6 4.515 3.901 7.685 3.901 2.294 0 4.217-.523 5.767-1.569 1.55-1.045 2.987-2.614 4.312-4.706l2.273 1.394c-1.564 2.612-3.626 4.683-6.186 6.21-2.559 1.526-5.203 2.29-7.927 2.29v.001zm42.051-18.022c0-1.66-.186-3.414-.555-5.264-.368-1.848-.923-3.413-1.66-4.698-.786-1.372-1.823-2.474-3.1-3.303-1.279-.83-2.841-1.245-4.688-1.245-1.894 0-3.513.42-4.852 1.261-1.342.841-2.43 1.992-3.266 3.453-.787 1.352-1.341 2.89-1.662 4.616a27.447 27.447 0 0 0-.479 5.014c0 2.124.19 4.09.573 5.893.381 1.803.99 3.415 1.826 4.831.836 1.417 1.888 2.53 3.155 3.337 1.268.808 2.837 1.212 4.705 1.212 3.075 0 5.514-1.338 7.307-4.017 1.797-2.68 2.696-6.376 2.696-11.09zm6.746.457a20.474 20.474 0 0 1-1.167 6.79c-.775 2.224-1.88 4.11-3.318 5.66-1.624 1.77-3.508 3.088-5.65 3.951-2.144.863-4.544 1.295-7.204 1.295-2.213 0-4.322-.393-6.321-1.178a16.016 16.016 0 0 1-5.334-3.436c-1.53-1.484-2.75-3.294-3.654-5.43-.907-2.135-1.36-4.531-1.36-7.188 0-5.114 1.583-9.297 4.75-12.55 3.164-3.255 7.316-4.881 12.447-4.881 4.875 0 8.894 1.544 12.06 4.632 3.168 3.087 4.751 7.198 4.751 12.334v.001zm9.087-18.776c3.919 0 7.096-2.729 7.096-6.095 0-3.367-3.177-6.096-7.096-6.096-3.918 0-7.095 2.729-7.095 6.095 0 3.366 3.177 6.095 7.095 6.095v.001zm9.004 32.505c-.54-.13-1.07-.29-1.587-.481-.712-.244-1.234-.621-1.566-1.13-.332-.508-.499-1.151-.499-1.925V43.004l-.521-.465-12.926.73v2.192c.742.044 1.56.16 2.45.348.893.188 1.571.414 2.044.68.625.379 1.14.884 1.504 1.475.358.586.54 1.233.54 1.94v18.197c0 .796-.169 1.443-.503 1.94-.336.498-.847.846-1.54 1.045a7.515 7.515 0 0 1-1.58.265c-.608.044-1.197.089-1.765.133v2.19h17.683v-2.19a10.794 10.794 0 0 1-1.734-.25v.001zm41.423 2.938h-16.88v-2.19c.536-.045 1.125-.09 1.768-.134.644-.044 1.174-.133 1.595-.266.654-.199 1.137-.548 1.453-1.046.314-.498.474-1.145.474-1.942V51.761c0-2.324-.582-4.117-1.74-5.379-1.157-1.262-2.568-1.893-4.229-1.893-1.24 0-2.375.183-3.405.548a12.31 12.31 0 0 0-2.739 1.345c-.772.51-1.386 1.057-1.843 1.644-.454.586-.79 1.056-1 1.411v18.826c0 .753.163 1.372.491 1.86.325.487.816.862 1.47 1.128.491.222 1.02.388 1.593.498.573.111 1.163.19 1.77.233v2.191h-16.915v-2.19c.536-.045 1.09-.09 1.662-.134a6.656 6.656 0 0 0 1.49-.266c.654-.198 1.137-.547 1.452-1.044.316-.498.475-1.144.475-1.94V48.402c0-.75-.172-1.443-.51-2.073a4.202 4.202 0 0 0-1.417-1.542 4.96 4.96 0 0 0-1.576-.58 14.623 14.623 0 0 0-1.961-.249v-2.19l11.486-.732.49.465v4.615h.176a80.132 80.132 0 0 1 2.101-1.909c.84-.74 1.635-1.345 2.382-1.809.862-.532 1.89-.974 3.082-1.329 1.192-.354 2.531-.53 4.027-.53 3.315 0 5.772.98 7.372 2.938 1.597 1.96 2.399 4.565 2.399 7.82v17.032c0 .775.14 1.401.42 1.876.28.476.76.847 1.436 1.113.56.221 1.045.376 1.453.464.407.09.974.156 1.699.2v2.191h-.001zm25.829-15.97a8.51 8.51 0 0 1 2.263 2.756c.526 1.04.79 2.313.79 3.818 0 3.032-1.228 5.512-3.683 7.438-2.456 1.926-5.634 2.888-9.536 2.888-2.061 0-3.96-.343-5.696-1.029-1.737-.686-2.975-1.317-3.717-1.892l-.719 2.158h-2.694l-.359-11.389h2.479c.19.866.598 1.877 1.222 3.032a14.422 14.422 0 0 0 2.263 3.132A12.387 12.387 0 0 0 428 71.581c1.306.666 2.773 1 4.404 1 2.298 0 4.068-.485 5.315-1.454 1.244-.969 1.868-2.355 1.868-4.158 0-.93-.198-1.733-.594-2.408-.395-.674-.976-1.267-1.741-1.776-.79-.509-1.76-.969-2.91-1.378a61.473 61.473 0 0 0-3.844-1.212 37.522 37.522 0 0 1-3.754-1.278c-1.379-.542-2.558-1.179-3.538-1.909a9.558 9.558 0 0 1-2.586-2.856c-.673-1.129-1.006-2.457-1.006-3.984 0-2.679 1.076-4.947 3.233-6.807 2.155-1.859 5.04-2.789 8.656-2.789 1.39 0 2.807.166 4.257.498 1.45.332 2.629.731 3.54 1.195l.825-1.726h2.587l.54 10.525h-2.478c-.505-2.356-1.589-4.273-3.254-5.752-1.665-1.477-3.694-2.216-6.088-2.216-1.965 0-3.51.457-4.634 1.371-1.125.914-1.688 2.017-1.688 3.31 0 .996.184 1.826.555 2.49.372.665.927 1.23 1.672 1.694.718.442 1.62.857 2.711 1.245a92.24 92.24 0 0 0 4.042 1.311c1.53.446 3.024.99 4.472 1.627 1.401.621 2.557 1.306 3.468 2.06v-.001zM96 48c0 26.51-21.49 48-48 48S0 74.51 0 48 21.49 0 48 0s48 21.49 48 48",
				fill: "#DDBD37"
			}), a.a.createElement("path", {
				d: "M59 58.001c-2.757 0-5-2.243-5-5a5.006 5.006 0 0 1 5-5c2.757 0 5 2.242 5 5 0 2.757-2.243 5-5 5m.88 8.211c-3.412 3.408-9.95 3.673-11.874 3.673-1.924 0-8.463-.265-11.872-3.673a1.296 1.296 0 1 1 1.833-1.833c2.151 2.151 6.752 2.915 10.04 2.915 3.285 0 7.888-.764 10.042-2.915a1.296 1.296 0 0 1 1.831 1.833M32 53c0-2.757 2.244-5 5.002-5A5.005 5.005 0 0 1 42 53a5.004 5.004 0 0 1-4.998 5A5.006 5.006 0 0 1 32 53m47.992-5a7 7 0 0 0-7-7 6.97 6.97 0 0 0-4.855 1.964c-4.784-3.453-11.377-5.683-18.72-5.94l3.188-15.002 10.418 2.215C63.15 26.887 65.32 29 68 29a5 5 0 0 0 0-10c-1.965 0-3.646 1.143-4.465 2.79l-11.633-2.473a1.251 1.251 0 0 0-1.482.963l-3.56 16.741c-7.452.207-14.149 2.44-18.996 5.93a6.972 6.972 0 0 0-4.84-1.95 7 7 0 0 0-7 7 7 7 0 0 0 4.135 6.382c-.11.7-.166 1.408-.167 2.117 0 10.77 12.536 19.5 28 19.5s28-8.73 28-19.5c0-.71-.058-1.412-.165-2.103A7 7 0 0 0 79.992 48",
				fill: "#FFF"
			}))
		},
		"./src/reddit/icons/svgs/Stamp/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 96 96",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M45.31.614c1.411.984 3.72.984 5.13 0 1.412-.984 3.527-.761 4.703.494 1.175 1.256 3.434 1.736 5.018 1.067 1.584-.67 3.608-.012 4.495 1.461.89 1.472 2.998 2.412 4.687 2.087 1.69-.326 3.532.738 4.096 2.363.562 1.627 2.43 2.982 4.15 3.017 1.72.032 3.3 1.455 3.513 3.162.213 1.707 1.758 3.423 3.432 3.813 1.676.39 2.926 2.11 2.78 3.824-.147 1.715 1.007 3.714 2.565 4.444 1.558.729 2.423 2.672 1.923 4.319-.5 1.646.214 3.841 1.585 4.879 1.372 1.037 1.815 3.118.983 4.625-.83 1.506-.59 3.802.536 5.101 1.126 1.3 1.126 3.428 0 4.729-1.126 1.3-1.367 3.596-.536 5.102.832 1.506.39 3.586-.983 4.624-1.371 1.037-2.086 3.233-1.585 4.878.5 1.646-.365 3.591-1.923 4.32-1.558.73-2.712 2.729-2.565 4.443.146 1.714-1.104 3.435-2.78 3.825-1.674.39-3.22 2.106-3.432 3.812-.212 1.707-1.794 3.13-3.513 3.164-1.72.032-3.588 1.39-4.15 3.015-.564 1.626-2.406 2.69-4.096 2.365-1.689-.326-3.797.614-4.687 2.086-.887 1.473-2.911 2.13-4.495 1.461-1.584-.67-3.843-.19-5.018 1.066-1.176 1.257-3.291 1.48-4.703.495-1.41-.984-3.719-.984-5.13 0-1.41.985-3.526.762-4.702-.495-1.175-1.256-3.434-1.736-5.018-1.066-1.584.669-3.608.012-4.496-1.461-.889-1.472-2.997-2.412-4.687-2.086-1.689.325-3.531-.739-4.095-2.365-.562-1.625-2.43-2.983-4.15-3.015-1.72-.033-3.3-1.457-3.513-3.164-.213-1.706-1.758-3.422-3.432-3.812-1.676-.39-2.926-2.111-2.78-3.825.147-1.714-1.007-3.713-2.565-4.443-1.558-.729-2.423-2.674-1.923-4.32.5-1.645-.213-3.84-1.585-4.878-1.372-1.038-1.815-3.118-.983-4.624.83-1.506.59-3.802-.537-5.102-1.125-1.301-1.125-3.43 0-4.729 1.127-1.3 1.368-3.595.537-5.1-.832-1.508-.39-3.589.983-4.626 1.372-1.038 2.086-3.233 1.585-4.88-.5-1.646.365-3.59 1.923-4.318 1.558-.73 2.712-2.73 2.566-4.444-.147-1.714 1.103-3.434 2.779-3.824 1.674-.39 3.22-2.106 3.432-3.813.212-1.707 1.794-3.13 3.513-3.162 1.72-.035 3.588-1.39 4.15-3.017.564-1.625 2.406-2.69 4.095-2.363 1.69.325 3.798-.615 4.687-2.087.888-1.473 2.912-2.131 4.496-1.46 1.584.668 3.843.188 5.018-1.068C41.784-.147 43.9-.37 45.31.614"
			}))
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var r, a, c, s;
			n.d(t, "b", (function() {
					return a
				})), n.d(t, "a", (function() {
					return c
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(a || (a = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(c || (c = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(s || (s = {}))
		},
		"./src/reddit/pages/CoinsPage/HeroSection/index.m.less": function(e, t, n) {
			e.exports = {
				hero: "_2vhTQIsosoVQbr9wMiHNrq",
				heroInner: "_3f0XAmNuHoBs42vtlADhEZ",
				heroTitle: "_38WAbDkPGmF05b2rqHBXXE",
				heroLogo: "_3BOSpM8sVMfSVkrXVDpy8U",
				heroDescription: "_2MJQ9yBdNmkVOto9wlBcPt",
				activeSale: "_30mt9pkecX8JHD1wCMZBlX",
				heroCTA: "P6EaaWWVjL1ioBEprcj2k",
				heroCta: "P6EaaWWVjL1ioBEprcj2k",
				expiresText: "_2-NkszuRneQ6RCssOZlbWn"
			}
		},
		"./src/reddit/pages/CoinsPage/index.m.less": function(e, t, n) {
			e.exports = {
				detailGridSection: "_2pjmwu1Qey7ysALWYQIebR",
				detailTitle: "_1elsw4Hvj-wf_HngDYpCuU",
				detailDesription: "_2_Cebwoi5iZt1xC8t8Y87s",
				gridContainer: "_2VbuOyshVldGz4mZms1Qx8",
				gridItem: "_15wx7-Dy6OaPRg2oX97-cs",
				nowrap: "_1zlKaIoI_cWBNJLQYlCy4I",
				purchasePackagesSection: "_3O_T0NX7IDWLLIgZLWxJwk",
				purchaseTitle: "_3DeyHQ9gje-pf93nH48lKk",
				purchaseLogo: "_1Sj2-jzRwDnOmmzci0pMR5",
				purchasePackages: "_2m0gSo1z8uMcoEWC1T3pqG",
				purchasePackage: "_1l-HVUi8gitTQc_tDQWwgj",
				packageText: "_2HIbtTkiH8vmpbPEV2ATpJ",
				faqsSection: "_10UXwtZ8SpUvVCXzOVk2q0",
				faqsTitle: "_2DJp3NAVskfI_0YVI0RBFY",
				faqs: "KNbwqvczVayMcPxh6VdZc"
			}
		},
		"./src/reddit/pages/CoinsPage/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./src/config.ts"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				c = n("./node_modules/lodash/times.js"),
				s = n.n(c),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/react-router-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/loadRedditAdsPixel.ts"),
				f = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/helpers/correlationIdTracker.ts"),
				g = n("./src/reddit/helpers/trackers/goldPayment.ts");
			const h = "coins_marketing",
				y = (e, t = {}) => ({
					...Object(g.h)(e, t),
					correlationId: Object(b.e)(b.a.GoldPayment, !1)
				}),
				v = () => e => ({
					...y(e),
					source: h,
					action: "click",
					noun: "get_coins"
				}),
				O = e => t => ({
					...y(t, {
						packageId: e
					}),
					source: h,
					action: "click",
					noun: "coins_package"
				}),
				j = () => e => ({
					...y(e),
					source: h,
					action: "click",
					noun: "get_premium"
				});
			var k = n("./src/reddit/helpers/trackers/screenview.ts"),
				E = n("./src/telemetry/index.ts"),
				C = n("./src/telemetry/models/Timer.ts"),
				x = n("./src/reddit/pages/CoinsPage/index.m.less"),
				w = n.n(x),
				_ = n("./src/reddit/helpers/createEmojiText/index.tsx"),
				P = n("./src/reddit/models/Gold/Award.ts"),
				N = n("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				I = n("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				T = n("./src/reddit/actions/login.ts"),
				A = n("./src/reddit/contexts/PageLayer/index.tsx"),
				S = n("./src/reddit/models/Gold/Coins/index.ts"),
				M = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				L = n("./src/reddit/selectors/user.ts"),
				R = n("./src/reddit/components/CoinPurchasePackage/index.m.less"),
				B = n.n(R),
				D = n("./src/lib/classNames/index.ts"),
				G = n("./src/lib/currency/currencies.ts"),
				F = n("./src/lib/localizeCurrency/index.ts"),
				U = n("./src/reddit/controls/Button/index.tsx"),
				q = n("./src/reddit/hooks/useLocale.ts"),
				V = n("./src/reddit/icons/svgs/Coin/index.tsx"),
				z = n("./src/reddit/icons/svgs/Stamp/index.tsx");
			var H = e => {
					var t, n;
					const {
						className: r,
						coinPackage: c,
						isLargeView: s,
						onClick: o
					} = e, l = Object(q.a)(), {
						baselineCoins: d,
						baselinePennies: u,
						bonusPct: m,
						coins: p,
						description: f,
						featuredLabel: b,
						images: g,
						pennies: h
					} = c, y = Object(F.b)(h, {
						locale: l
					}), v = Object(F.b)(p, {
						locale: l,
						type: G.b.Reddit,
						currency: G.a
					}), O = s ? null === (t = g.marketing["4x"]) || void 0 === t ? void 0 : t.url : null === (n = g.marketing["2x"]) || void 0 === n ? void 0 : n.url, j = m > 0 && `${Object(F.a)(m,{locale:l})}%`, k = a.fbt._("bonus", null, {
						hk: "L8mcp"
					}), E = s ? B.a.large : "", C = d !== p, x = u !== h;
					return i.a.createElement("div", {
						className: Object(D.a)(r, B.a.coinPurchasePackage, E)
					}, i.a.createElement("div", {
						className: B.a.imageContainer
					}, i.a.createElement("img", {
						src: O
					}), b && i.a.createElement("div", {
						className: B.a.badge
					}, b), j && i.a.createElement("div", {
						className: B.a.stamp
					}, i.a.createElement(z.a, {
						className: B.a.stampIcon
					}), i.a.createElement("div", {
						className: B.a.stampValue
					}, j), i.a.createElement("div", {
						className: B.a.stampText
					}, k))), i.a.createElement("div", {
						className: B.a.contentContainer
					}, i.a.createElement("div", {
						className: B.a.contentText
					}, i.a.createElement("div", {
						className: B.a.price
					}, i.a.createElement(V.a, {
						className: B.a.priceCoinIcon
					}), i.a.createElement("div", null, i.a.createElement("div", {
						className: B.a.priceValue
					}, v), C && i.a.createElement("div", {
						className: Object(D.a)(B.a.priceCurrency, B.a.crossout)
					}, Object(F.b)(d, {
						locale: l,
						type: G.b.Reddit,
						currency: G.a
					})))), i.a.createElement("div", {
						className: B.a.description
					}, f)), i.a.createElement("div", null, i.a.createElement(U.t, {
						kind: U.b.Button,
						priority: U.c.Primary,
						className: B.a.cta,
						onClick: o
					}, y), x && i.a.createElement("div", {
						className: B.a.priceCrossout
					}, Object(F.b)(u, {
						locale: l
					})))))
				},
				Y = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				Q = n("./src/reddit/components/CoinPurchasePackage/placeholder.m.less"),
				X = n.n(Q);
			var W = ({
					className: e,
					isLargeView: t,
					...n
				}) => {
					const r = t ? X.a.large : "",
						a = Object(Y.b)(n);
					return i.a.createElement("div", {
						className: Object(D.a)(a, X.a.packagePlaceholder, r, e)
					})
				},
				J = n("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				Z = n("./src/reddit/components/GildMarketingDescription/index.tsx"),
				K = n("./src/reddit/components/MarketingPageFooter/index.tsx"),
				$ = n("./src/reddit/components/PremiumMarketingBanner/index.m.less"),
				ee = n.n($);
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ne = e => {
				const {
					className: t,
					isPremiumSubscriber: n,
					onGetPremium: a,
					onManagePremium: c,
					premiumPackage: s
				} = e, {
					periodicalCoins: o
				} = s, l = o.toLocaleString(), d = `${r.a.assetPath}/img/gold/coins-premium-g.png`;
				return i.a.createElement("div", {
					className: Object(D.a)(ee.a.premiumBanner, t)
				}, i.a.createElement("img", {
					className: ee.a.premiumCrest,
					src: d
				}), i.a.createElement("h2", {
					className: ee.a.premiumDescription
				}, te._("Get {Number of monthly coins} coins every month with Reddit Premium and browse ads-free", [te._param("Number of monthly coins", l)], {
					hk: "42dB3q"
				})), n ? i.a.createElement(U.l, {
					className: ee.a.premiumCTA,
					onClick: c
				}, te._("Manage", null, {
					hk: "4BQsAp"
				})) : i.a.createElement(U.l, {
					className: ee.a.premiumCTA,
					onClick: a
				}, te._("Upgrade", null, {
					hk: "1Zf2Sh"
				})))
			};
			var re = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				ae = n("./src/reddit/icons/svgs/RedditCoinsLogo/index.tsx"),
				ce = n("./src/reddit/components/TimeLeft/TimeLeft.tsx"),
				se = n("./src/reddit/pages/CoinsPage/HeroSection/index.m.less"),
				oe = n.n(se);
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var le = i.a.memo(e => {
				Object(o.useEffect)(() => {
					(new Image).src = `${r.a.assetPath}/img/gold/coins-hero.jpg`
				}, []);
				const {
					activeSaleConfig: t,
					isLoading: n,
					onClickGetCoins: a
				} = e;
				if (n) return i.a.createElement("div", {
					className: oe.a.hero
				});
				if (t) {
					const {
						endsAt: e,
						heroImageUrl: n,
						heroSubtext: r,
						heroText: a
					} = t;
					return i.a.createElement("div", {
						className: oe.a.hero,
						style: {
							backgroundImage: `url("${n}")`
						}
					}, i.a.createElement("div", {
						className: oe.a.heroInner
					}, i.a.createElement("h1", {
						className: Object(D.a)(oe.a.heroTitle, oe.a.activeSale)
					}, a), i.a.createElement("p", {
						className: Object(D.a)(oe.a.heroDescription, oe.a.activeSale)
					}, r), e && i.a.createElement(ce.a, {
						className: oe.a.expiresText,
						expirationDate: new Date(1e3 * e)
					})))
				}
				return i.a.createElement("div", {
					className: oe.a.hero,
					style: {
						backgroundImage: `url("${r.a.assetPath}/img/gold/coins-hero.jpg")`
					}
				}, i.a.createElement("div", {
					className: oe.a.heroInner
				}, i.a.createElement("h1", {
					className: oe.a.heroTitle
				}, i.a.createElement(ae.a, {
					className: oe.a.heroLogo
				})), i.a.createElement("p", {
					className: oe.a.heroDescription
				}, ie._("Coins are a virtual good you can use to award exemplary posts or comments. Support Reddit and encourage your favorite contributors to keep making Reddit better.", null, {
					hk: "3rPVMo"
				})), i.a.createElement(U.g, {
					className: oe.a.heroCTA,
					onClick: a
				}, ie._("Get Coins", null, {
					hk: "2YmtPc"
				}))))
			});
			const de = 3e3,
				ue = Object(A.u)(),
				me = Object(u.c)({
					activeSaleConfig: M.a,
					coinPackages: M.d,
					dealCoinPackages: M.f,
					isPremiumSubscriber: L.w,
					isLoggedIn: L.P,
					premiumPackages: M.l,
					purchaseCatalogPending: M.o
				}),
				pe = Object(l.b)(me, (e, t) => ({
					onRouteToManagePremium: () => e(Object(d.b)("/settings/gold")),
					onRouteToPremium: () => e(Object(d.b)("/premium")),
					onOpenLoginModal: () => e(Object(T.i)()),
					onOpenTargetedOfferModal: (t, n) => e(Object(N.e)({
						correlationId: n,
						packageId: t.mobileId
					})),
					onPurchasePackage: (t, n) => e(Object(N.c)({
						correlationId: n,
						packageId: t.mobileId
					})),
					requestPurchaseCatalog: t => e(Object(I.b)({
						correlationId: t
					}))
				}));
			class fe extends i.a.Component {
				constructor() {
					super(...arguments), this.correlationId = Object(b.e)(b.a.GoldPayment, !1), this.purchaseSection = i.a.createRef(), this.perksSection = i.a.createRef(), this.onClickGetCoins = () => {
						this.props.sendEvent(v()), this.purchaseSection.current && window.scrollTo({
							behavior: "smooth",
							top: this.purchaseSection.current.offsetTop - 50
						})
					}, this.onClickPurchase = e => {
						const {
							isLoggedIn: t,
							onPurchasePackage: n,
							onOpenLoginModal: r,
							sendEvent: a
						} = this.props;
						t && a(O(e.mobileId)), t ? n(e, this.correlationId) : r(), this.targetedOfferTimerId && clearTimeout(this.targetedOfferTimerId)
					}, this.onClickGetPremium = () => {
						const {
							onRouteToPremium: e,
							sendEvent: t
						} = this.props;
						t(j()), e()
					}
				}
				componentDidMount() {
					const {
						coinPackages: e,
						purchaseCatalogPending: t,
						requestPurchaseCatalog: n
					} = this.props;
					e.length || t || n(this.correlationId), document.documentElement.scrollTop = document.body.scrollTop = 0;
					const r = m.Nb.COINS;
					E.c.has(r) && (this.props.sendEvent(Object(k.b)(C.TimerType.InApp, E.c.end(r))), this.props.sendEvent(Object(k.a)())), Object(p.a)(), this.setTargetedOfferTimeout()
				}
				componentDidUpdate() {
					!this.targetedOfferTimerId && this.props.dealCoinPackages.length && this.setTargetedOfferTimeout()
				}
				setTargetedOfferTimeout() {
					if (this.targetedOfferTimerId) return;
					const {
						dealCoinPackages: e,
						onOpenTargetedOfferModal: t
					} = this.props, n = e.filter(e => S.c.has(e.dealInfo.type))[0];
					n && (this.targetedOfferTimerId = setTimeout(() => {
						t(n, this.correlationId)
					}, n.dealInfo.displayDelay || de))
				}
				render() {
					const {
						activeSaleConfig: e,
						className: t,
						coinPackages: n,
						purchaseCatalogPending: r
					} = this.props;
					return i.a.createElement("div", {
						className: t
					}, i.a.createElement(le, {
						activeSaleConfig: e,
						isLoading: r || !n.length,
						onClickGetCoins: this.onClickGetCoins
					}), this.renderGildBreakdown(), this.renderPurchase(), this.renderFAQSection(), i.a.createElement(K.a, null))
				}
				renderGildBreakdown() {
					return i.a.createElement("div", {
						className: w.a.detailGridSection,
						ref: this.perksSection
					}, i.a.createElement("h2", {
						className: w.a.detailTitle
					}, a.fbt._("Here’s what you can buy with coins", null, {
						hk: "4kIMr0"
					})), i.a.createElement("p", {
						className: w.a.detailDesription
					}, a.fbt._("Spend your coins on these Awards reserved exclusively for the finest Reddit contributors. Awarding a post or comment highlights it for all to see, and some Awards also grant the honoree special bonuses.", null, {
						hk: "3eScNB"
					})), i.a.createElement("div", {
						className: w.a.gridContainer
					}, i.a.createElement(Z.a, {
						className: w.a.gridItem,
						icon: i.a.createElement("img", {
							src: `${r.a.assetPath}/img/gold/badges/award-silver-large.png`
						}),
						title: a.fbt._("Silver Award", null, {
							hk: "2h79np"
						})
					}, Object(_.a)(a.fbt._("Shows a Silver Award on the post or comment and ... that’s it. You’ll need {Coin price placeholder} Coins.", [a.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "zbXx9"
					}), {
						":coin_price:": i.a.createElement("span", {
							className: w.a.nowrap
						}, i.a.createElement(re.a, null), P.q.coinPrice)
					})), i.a.createElement(Z.a, {
						className: w.a.gridItem,
						icon: i.a.createElement("img", {
							src: `${r.a.assetPath}/img/gold/badges/award-gold-large.png`
						}),
						title: a.fbt._("Gold Award", null, {
							hk: "1oYdz0"
						})
					}, Object(_.a)(a.fbt._("Gives {Coin benefit placeholder} Reddit Coins and a week of r/lounge access and ad-free browsing. You’ll need {Coin price placeholder} coins.", [a.fbt._param("Coin benefit placeholder", ":coin_benefit:"), a.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "rxGC9"
					}), {
						":coin_benefit:": i.a.createElement("span", {
							className: w.a.nowrap
						}, i.a.createElement(re.a, null), "100"),
						":coin_price:": i.a.createElement("span", {
							className: w.a.nowrap
						}, i.a.createElement(re.a, null), P.n.coinPrice)
					})), i.a.createElement(Z.a, {
						className: w.a.gridItem,
						icon: i.a.createElement("img", {
							src: `${r.a.assetPath}/img/gold/badges/award-platinum-large.png`
						}),
						title: a.fbt._("Platinum Award", null, {
							hk: "3nCEqM"
						})
					}, Object(_.a)(a.fbt._("Gives a month of r/lounge access and ad-free browsing, and {Coin benefit placeholder} Reddit Coins for that month. You’ll need {Coin price placeholder} coins.", [a.fbt._param("Coin benefit placeholder", ":coin_benefit:"), a.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "375Nna"
					}), {
						":coin_benefit:": i.a.createElement("span", {
							className: w.a.nowrap
						}, i.a.createElement(re.a, null), "700"),
						":coin_price:": i.a.createElement("span", {
							className: w.a.nowrap
						}, i.a.createElement(re.a, null), P.p.coinPrice)
					}))))
				}
				renderPurchase() {
					const {
						coinPackages: e,
						isPremiumSubscriber: t,
						onRouteToManagePremium: n,
						premiumPackages: a,
						purchaseCatalogPending: c
					} = this.props, o = a.length ? a[0] : void 0;
					return i.a.createElement("div", {
						className: w.a.purchasePackagesSection,
						ref: this.purchaseSection,
						style: {
							backgroundImage: `url("${r.a.assetPath}/img/gold/coins-premium-bg.jpg")`
						}
					}, i.a.createElement("h2", {
						className: w.a.purchaseTitle
					}, i.a.createElement(ae.a, {
						className: w.a.purchaseLogo
					})), i.a.createElement("div", {
						className: w.a.purchasePackages
					}, c || !e.length ? s()(5, e => i.a.createElement(W, {
						className: w.a.purchasePackage,
						isLargeView: 0 === e,
						isLoading: !0,
						key: e
					})) : e.map(e => i.a.createElement(H, {
						className: w.a.purchasePackage,
						coinPackage: e,
						isLargeView: e.featured,
						key: e.mobileId,
						onClick: () => this.onClickPurchase(e)
					})), o && i.a.createElement(ne, {
						isPremiumSubscriber: t,
						onGetPremium: this.onClickGetPremium,
						onManagePremium: n,
						premiumPackage: o
					})))
				}
				renderFAQSection() {
					return i.a.createElement("div", {
						className: w.a.faqsSection
					}, i.a.createElement("h2", {
						className: w.a.faqsTitle
					}, a.fbt._("Coins FAQ", null, {
						hk: "21x0aE"
					})), i.a.createElement("div", {
						className: w.a.faqs
					}, S.b.map((e, t) => i.a.createElement(J.a, {
						defaultClosed: !0,
						question: e.prompt(),
						key: t
					}, e.answer()))))
				}
				componentWillUnmount() {
					Object(b.b)(b.a.GoldPayment), this.targetedOfferTimerId && clearTimeout(this.targetedOfferTimerId)
				}
			}
			t.default = ue(pe(Object(f.c)(fe)))
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "j", (function() {
				return i
			})), n.d(t, "k", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "h", (function() {
				return O
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/makeProductOfferKey/index.ts"),
				c = n("./src/reddit/models/Gold/ProductOffer.ts"),
				s = n("./src/reddit/models/Payments/index.ts"),
				o = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				l = (e, {
					subredditId: t,
					type: n
				}) => {
					var r, c, s;
					return t ? e.subreddits.productOffers[Object(a.a)(n, t)] : null === (s = null === (c = null === (r = e.features) || void 0 === r ? void 0 : r.goldPurchase) || void 0 === c ? void 0 : c.productOffers) || void 0 === s ? void 0 : s[Object(a.a)(n)]
				},
				d = e => {
					const t = l(e, {
						type: c.c.Coinpack
					});
					return null == t ? void 0 : t[0]
				},
				u = (e, {
					subredditId: t
				}) => {
					const n = l(e, {
						subredditId: t,
						type: c.c.Powerups
					});
					return null == n ? void 0 : n[0]
				},
				m = Object(r.a)(u, e => null == e ? void 0 : e.pricePackages[0]),
				p = Object(r.a)(m, e => null == e ? void 0 : e.price),
				f = e => {
					const t = l(e, {
						type: c.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				b = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === s.b.PayPal || e[0] === s.b.Stripe)(e.requiredPaymentProviders)) : null,
				g = Object(r.a)(f, o.p, (e, t) => b(e, t) || null),
				h = Object(r.a)(g, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var n;
					return (null === (n = e.requiredPaymentProviders) || void 0 === n ? void 0 : n[0]) === t
				})),
				y = Object(r.a)(g, e => (null == e ? void 0 : e[0].price) || null),
				v = Object(r.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				O = Object(r.a)(v, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/redditGQL/operations/PurchaseCatalogProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"098518521d5b"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Coins.6e09174720aa81efb811.js.map