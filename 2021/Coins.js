// https://www.redditstatic.com/desktop2x/Coins.b05c6031df295f3ac596.js
// Retrieved at 12/13/2021, 9:40:05 AM by Reddit Dataminer v1.0.0
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
				var s = function(e, t) {
					return e(t = {
						exports: {}
					}, t.exports), t.exports
				}((function(e) {
					e.exports = function() {
						function e(e, t, r, a, s, c) {
							if (c !== n) {
								var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
								throw o.name = "Invariant Violation", o
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
							resetWarningCache: r
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
								s = void 0;
							try {
								for (var c, o = e[Symbol.iterator](); !(r = (c = o.next()).done) && (n.push(c.value), !t || n.length !== t); r = !0);
							} catch (i) {
								a = !0, s = i
							} finally {
								try {
									r || null == o.return || o.return()
								} finally {
									if (a) throw s
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
						return null !== e && "object" === c(e)
					},
					b = function(e, t, n) {
						return p(e) ? Object.keys(e).reduce((function(r, a) {
							var s = !p(t) || ! function e(t, n) {
								if (!p(t) || !p(n)) return t === n;
								var r = Array.isArray(t);
								if (r !== Array.isArray(n)) return !1;
								var a = "[object Object]" === Object.prototype.toString.call(t);
								if (a !== ("[object Object]" === Object.prototype.toString.call(n))) return !1;
								if (!a && !r) return !1;
								var s = Object.keys(t),
									c = Object.keys(n);
								if (s.length !== c.length) return !1;
								for (var o = {}, i = 0; i < s.length; i += 1) o[s[i]] = !0;
								for (var l = 0; l < c.length; l += 1) o[c[l]] = !0;
								var d = Object.keys(o);
								if (d.length !== s.length) return !1;
								var u = t,
									m = n;
								return d.every((function(t) {
									return e(u[t], m[t])
								}))
							}(e[a], t[a]);
							return n.includes(a) ? (s && console.warn("Unsupported prop change: options.".concat(a, " is not a mutable property.")), r) : s ? l(l({}, r || {}), {}, o({}, a, e[a])) : r
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
					g = t.createContext(null);
				g.displayName = "ElementsContext";
				var y = function(e) {
					var n = e.stripe,
						r = e.options,
						a = e.children,
						s = t.useRef(!1),
						c = t.useRef(!0),
						o = t.useMemo((function() {
							return h(n)
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
					null !== p && p !== n && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), s.current || ("sync" === o.tag && (s.current = !0, u({
						stripe: o.stripe,
						elements: o.stripe.elements(r)
					})), "async" === o.tag && (s.current = !0, o.stripePromise.then((function(e) {
						e && c.current && u({
							stripe: e,
							elements: e.elements(r)
						})
					}))));
					var f = m(r);
					return t.useEffect((function() {
						if (l.elements) {
							var e = b(r, f, ["clientSecret", "fonts"]);
							e && l.elements.update(e)
						}
					}), [r, f, l.elements]), t.useEffect((function() {
						return function() {
							c.current = !1
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
					}), [l.stripe]), t.createElement(g.Provider, {
						value: l
					}, a)
				};
				y.propTypes = {
					stripe: s.any,
					options: s.object
				};
				var O = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(g), e)
					},
					k = function(e) {
						return (0, e.children)(O("mounts <ElementsConsumer>"))
					};
				k.propTypes = {
					children: s.func.isRequired
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
					_ = function() {},
					w = function(e, n) {
						var r, a = "".concat((r = e).charAt(0).toUpperCase() + r.slice(1), "Element"),
							c = n ? function(e) {
								O("mounts <".concat(a, ">"));
								var n = e.id,
									r = e.className;
								return t.createElement("div", {
									id: n,
									className: r
								})
							} : function(n) {
								var r = n.id,
									s = n.className,
									c = n.options,
									o = void 0 === c ? {} : c,
									i = n.onBlur,
									l = void 0 === i ? _ : i,
									d = n.onFocus,
									u = void 0 === d ? _ : d,
									p = n.onReady,
									f = void 0 === p ? _ : p,
									h = n.onChange,
									g = void 0 === h ? _ : h,
									y = n.onEscape,
									k = void 0 === y ? _ : y,
									w = n.onClick,
									E = void 0 === w ? _ : w,
									v = O("mounts <".concat(a, ">")).elements,
									C = t.useRef(null),
									x = t.useRef(null),
									P = j(f),
									N = j(l),
									I = j(u),
									T = j(E),
									A = j(g),
									S = j(k);
								t.useLayoutEffect((function() {
									if (null == C.current && v && null != x.current) {
										var t = v.create(e, o);
										C.current = t, t.mount(x.current), t.on("ready", (function() {
											return P(t)
										})), t.on("change", A), t.on("blur", N), t.on("focus", I), t.on("escape", S), t.on("click", T)
									}
								}));
								var R = m(o);
								return t.useEffect((function() {
									if (C.current) {
										var e = b(o, R, ["paymentRequest"]);
										e && C.current.update(e)
									}
								}), [o, R]), t.useLayoutEffect((function() {
									return function() {
										C.current && C.current.destroy()
									}
								}), []), t.createElement("div", {
									id: r,
									className: s,
									ref: x
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
						}, c.displayName = a, c.__elementType = e, c
					},
					E = "undefined" == typeof window,
					v = w("auBankAccount", E),
					C = w("card", E),
					x = w("cardNumber", E),
					P = w("cardExpiry", E),
					N = w("cardCvc", E),
					I = w("fpxBank", E),
					T = w("iban", E),
					A = w("idealBank", E),
					S = w("p24Bank", E),
					R = w("epsBank", E),
					M = w("payment", E),
					G = w("paymentRequestButton", E),
					L = w("linkAuthentication", E),
					D = w("shippingAddress", E),
					B = w("afterpayClearpayMessage", E);
				e.AfterpayClearpayMessageElement = B, e.AuBankAccountElement = v, e.CardCvcElement = N, e.CardElement = C, e.CardExpiryElement = P, e.CardNumberElement = x, e.Elements = y, e.ElementsConsumer = k, e.EpsBankElement = R, e.FpxBankElement = I, e.IbanElement = T, e.IdealBankElement = A, e.LinkAuthenticationElement = L, e.P24BankElement = S, e.PaymentElement = M, e.PaymentRequestButtonElement = G, e.ShippingAddressElement = D, e.useElements = function() {
					return O("calls useElements()").elements
				}, e.useStripe = function() {
					return O("calls useStripe()").stripe
				}, Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}(t, n("./node_modules/react/index.js"))
		},
		"./node_modules/lodash/times.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseTimes.js"),
				a = n("./node_modules/lodash/_castFunction.js"),
				s = n("./node_modules/lodash/toInteger.js"),
				c = 9007199254740991,
				o = 4294967295,
				i = Math.min;
			e.exports = function(e, t) {
				if ((e = s(e)) < 1 || e > c) return [];
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
				return s
			})), n.d(t, "d", (function() {
				return c
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
			const s = "USD",
				c = "ETH",
				o = "COINS",
				i = [c, "BTC"],
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
				return s
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
			const s = () => {
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
				s = n("./src/lib/currency/currencies.ts"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				o = n("./src/reddit/helpers/governance/tokens.ts"),
				i = n("./src/reddit/constants/intlSupport.ts");
			const l = (e, {
					locale: t = r.DEFAULT_LOCALE,
					pretty: n,
					formatOptions: a
				} = {}) => {
					const s = Number(e);
					return Object(i.c)() ? n ? Object(c.b)(s) : new Intl.NumberFormat(t, a).format(s) : u(s, n, t)
				},
				d = (e, t = {}) => {
					const {
						locale: n = r.DEFAULT_LOCALE,
						pretty: c,
						formatOptions: l,
						displayConversion: d,
						forceDecimals: b,
						currency: f = t.currency || (t.type ? p(t.type) : s.c),
						type: h = t.type || (t.currency ? m(t.currency) : s.b.Real)
					} = t, g = Number(e), y = String(e);
					switch (h) {
						case s.b.Reddit: {
							const e = s.e[f],
								t = e ? e() : f;
							return Object(i.c)() ? new Intl.NumberFormat(n, {
								currencyDisplay: "symbol",
								...l
							}).format(g) + " " + t : u(g, c, n, t)
						}
						case s.b.Crypto: {
							if (c) {
								return Object(o.c)(y, d) + " " + f
							}
							const e = Number(Object(o.b)(y, d));
							return Object(i.c)() ? new Intl.NumberFormat(n, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...l
							}).format(e) : u(e, c, n, f)
						}
						case s.b.Real:
						default: {
							const e = Number(Object(a.a)(y, b));
							return Object(i.c)() ? new Intl.NumberFormat(n, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								notation: c ? "compact" : "standard",
								...l
							}).format(e) : u(e, c, n, f)
						}
					}
				},
				u = (e, t, n, r) => {
					return (t ? Object(c.b)(e) : e.toLocaleString(n)) + (r ? " " + r : "")
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
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return E
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "e", (function() {
				return x
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
				return R
			})), n.d(t, "h", (function() {
				return M
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/formatApiError/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/sentry/index.ts"),
				o = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = n("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = n("./src/reddit/endpoints/gold/purchase.ts"),
				b = n("./src/reddit/helpers/correlationIdTracker.ts"),
				f = n("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				h = n("./src/reddit/models/Gold/Award.ts"),
				g = n("./src/reddit/models/Gold/ProductOffer.ts"),
				y = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				k = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				j = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const _ = Object(s.a)(j.q),
				w = Object(s.a)(j.c),
				E = e => async (t, n) => {
					t(_(e)), t(Object(d.h)(o.a.ECON_COIN_PURCHASE))
				}, v = () => async (e, t) => {
					e(w()), e(Object(d.g)(o.a.ECON_COIN_PURCHASE))
				}, C = Object(s.a)(j.u), x = ({
					correlationId: e,
					packageId: t
				}) => async (n, r) => {
					const a = r();
					Object(O.e)(a, t) ? (n(C({
						correlationId: e,
						packageId: t
					})), n(Object(d.i)(o.a.GOLD_TARGETED_OFFER_MODAL))) : c.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${t}`)
				}, P = Object(s.a)(j.p), N = ({
					correlationId: e,
					packageId: t
				}) => async (n, r) => {
					Object(O.c)(r(), t) ? (n(P({
						correlationId: e,
						packageId: t
					})), n(Object(d.i)(o.a.ECON_COIN_PACKAGE_OFFER))) : c.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${t}`)
				}, I = (e, t, n) => async (a, s) => {
					await a(Object(l.c)(e, n));
					const c = s(),
						o = Object(O.q)(c);
					if (0 !== o.length) a(E({
						correlationId: n,
						packageId: o[0].mobileId,
						thingId: t
					}));
					else {
						const e = Object(O.n)(c),
							t = r.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						a(Object(u.f)({
							kind: y.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, T = (e, t, n) => async (s, c, {
					apiContext: o
				}) => {
					const l = c(),
						{
							coins: d,
							pennies: u
						} = n,
						m = Object(k.r)(l) || Object(b.e)(b.a.GoldPayment, !1);
					let f, h;
					s(Object(i.stripeTokenPending)());
					const y = Object(k.y)(l);
					if (y || (f = await s(Object(i.validateAndCreateStripeToken)(e, t)), h = Object(k.v)(l), f)) try {
						const e = await Object(p.f)({
							coins: d,
							context: o(),
							correlationId: m,
							offerContext: Object(g.d)(n, !1),
							pennies: u,
							rememberCard: h,
							savedCardId: y || void 0,
							token: f
						});
						if (e.error) {
							const t = Object(a.a)(e.error, e.status);
							return void s(Object(i.stripeApiError)(t))
						}
						return s(Object(i.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(b.b)(b.a.GoldPayment)
					} catch (O) {
						const e = Object(a.a)(O);
						s(Object(i.stripeApiError)(e))
					} else {
						const e = r.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						s(Object(i.stripeApiError)(e))
					}
				}, A = (e, t, s, c) => async (o, l, {
					apiContext: d
				}) => {
					const u = l(),
						{
							coins: m,
							pennies: y
						} = s,
						O = Object(k.r)(u) || Object(b.e)(b.a.GoldPayment, !1);
					let j, _;
					o(Object(i.stripeTokenPending)());
					const w = Object(k.y)(u);
					if (w || (j = await o(Object(i.validateAndCreateStripeToken)(e, t)), _ = Object(k.v)(u), j)) try {
						const {
							gildModalThingId: e,
							isAnonymous: t,
							message: l,
							selectedAward: k
						} = u.gild;
						if (!e || !k.id) {
							const e = r.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void o(Object(i.stripeApiError)(e))
						}
						const E = k.id,
							C = {
								gildType: E,
								isAnonymous: t,
								message: l
							},
							x = await Object(p.e)({
								coins: m,
								context: d(),
								correlationId: O,
								gildParams: C,
								isOldReddit: c,
								offerContext: Object(g.d)(s, !0),
								pennies: y,
								rememberCard: _,
								savedCardId: w || void 0,
								thingId: e,
								token: j
							});
						if (x.error) {
							const e = Object(a.a)(x.error, x.status);
							return void o(Object(i.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await n.e("gildActions").then(n.bind(null, "./src/reddit/actions/gold/gild.ts"));
							o(v()), o(Object(i.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: r,
								all_awardings: a,
								coins: s,
								treatment_tags: c
							} = x.body;
							return o(t({
								awardKarmaReceived: r || 0,
								awardId: E,
								awardings: a && a.length ? Object(f.a)(a).map(e => ({
									award: Object(h.h)(e),
									total: e.count
								})) : [],
								coins: s,
								id: e,
								treatmentTags: c
							})), void Object(b.b)(b.a.GoldPayment)
						}
					} catch (E) {
						const e = Object(a.a)(E);
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
					const s = Object(b.c)(b.a.GoldPayment),
						{
							coins: o,
							pennies: l
						} = e;
					try {
						const e = await Object(m.a)({
							context: r(),
							coins: o,
							pennies: l,
							correlationId: s
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
						c.c.captureException(d);
						const e = Object(a.a)(d);
						t(Object(i.paypalApiError)(e))
					}
				}, R = (e, t) => async (n, r, {
					apiContext: s
				}) => {
					const o = r(),
						l = Object(k.r)(o) || Object(b.e)(b.a.GoldPayment, !1),
						{
							coins: d,
							pennies: u
						} = t;
					try {
						const r = await Object(m.c)({
							context: s(),
							offerContext: Object(g.d)(t, !1),
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
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (p) {
						c.c.captureException(p);
						const e = Object(a.a)(p);
						n(Object(i.paypalApiError)(e))
					}
				}, M = (e, t) => async (s, o, {
					apiContext: l
				}) => {
					const d = o(),
						u = Object(k.r)(d) || Object(b.e)(b.a.GoldPayment, !1),
						{
							coins: p,
							pennies: y
						} = t;
					try {
						const {
							gildModalThingId: c,
							isAnonymous: o,
							message: O,
							selectedAward: k
						} = d.gild;
						if (!c || !k) return void s(Object(i.paypalApiError)(r.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const j = k.id,
							_ = await Object(m.d)({
								context: l(),
								offerContext: Object(g.d)(t, !0),
								orderId: e,
								coins: p,
								pennies: y,
								thingId: c,
								awardId: j,
								message: O || "",
								isAnonymous: o,
								correlationId: u
							});
						if (_.error) {
							const e = Object(a.a)(_.error);
							s(Object(i.paypalApiError)(e))
						} else {
							s(v());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: r,
								subreddit_coins: a,
								treatment_tags: o
							} = _.body;
							s(Object(i.paymentCompleted)({
								coins: r,
								confirmed: !0
							}));
							const {
								gildSuccessful: l
							} = await n.e("gildActions").then(n.bind(null, "./src/reddit/actions/gold/gild.ts"));
							s(l({
								awardId: j,
								awardKarmaReceived: t || 0,
								awardings: Object(f.a)(e).map(e => ({
									award: Object(h.h)(e),
									total: e.count
								})),
								coins: r,
								id: c,
								subredditCoins: a,
								treatmentTags: o
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (O) {
						c.c.captureException(O);
						const e = Object(a.a)(O);
						s(Object(i.paypalApiError)(e))
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
				return b
			})), n.d(t, "cardNumberChange", (function() {
				return f
			})), n.d(t, "cardExpiryChange", (function() {
				return h
			})), n.d(t, "cardCvcChange", (function() {
				return g
			})), n.d(t, "stripeTokenPending", (function() {
				return y
			})), n.d(t, "stripeTokenError", (function() {
				return O
			})), n.d(t, "stripeApiError", (function() {
				return k
			})), n.d(t, "validateAndCreateStripeToken", (function() {
				return j
			})), n.d(t, "paypalApiError", (function() {
				return _
			})), n.d(t, "toggleRememberCard", (function() {
				return w
			})), n.d(t, "selectSavedCard", (function() {
				return E
			})), n.d(t, "_deleteSavedCard", (function() {
				return v
			})), n.d(t, "deleteSavedCard", (function() {
				return C
			})), n.d(t, "savedCardsPending", (function() {
				return x
			})), n.d(t, "savedCardsSuccess", (function() {
				return P
			})), n.d(t, "loadSavedCards", (function() {
				return N
			}));
			var r = n("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/sentry/index.ts"),
				o = n("./src/reddit/endpoints/gold/purchase.ts"),
				i = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				l = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const d = Object(s.a)(l.B),
				u = Object(s.a)(l.w),
				m = Object(s.a)(l.b),
				p = Object(s.a)(l.y),
				b = Object(s.a)(l.a),
				f = Object(s.a)(l.G),
				h = Object(s.a)(l.F),
				g = Object(s.a)(l.E),
				y = Object(s.a)(l.I),
				O = Object(s.a)(l.H),
				k = Object(s.a)(l.D),
				j = (e, t) => async (n, s) => {
					const c = s(),
						o = Object(i.h)(c),
						l = Object(i.l)(c),
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
						n(O(m || void 0))
					} else {
						const e = a.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						n(b({
							message: e
						}))
					}
				}, _ = Object(s.a)(l.x), w = Object(s.a)(l.J), E = Object(s.a)(l.C), v = Object(s.a)(l.g), C = e => async (t, n, {
					apiContext: r
				}) => {
					t(v(e));
					try {
						const t = await Object(o.a)(r(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (a) {
						c.c.captureException(a)
					}
				}, x = Object(s.a)(l.z), P = Object(s.a)(l.A), N = () => async (e, t, {
					apiContext: n
				}) => {
					e(x());
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
						e(P(r)), r[0] && e(E(r[0].cardId))
					} catch (r) {
						c.c.captureException(r), e(P([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return h
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "a", (function() {
				return _
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/env/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/sentry/index.ts"),
				o = n("./src/reddit/endpoints/gold/productCatalog/index.ts"),
				i = n("./src/reddit/selectors/user.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const p = Object(s.a)(m.j),
				b = Object(s.a)(m.k),
				f = Object(s.a)(m.i),
				h = e => async (t, n, {
					apiContext: s
				}) => {
					t(p());
					const l = n(),
						d = Object(i.K)(l);
					try {
						const n = !d,
							r = await Object(o.b)({
								context: s(),
								correlationId: e,
								shouldUseCurrentOrigin: n
							});
						if (!r.ok) throw new Error(r.error && r.error.type || "Unknown error");
						const a = r.body;
						t(b(a))
					} catch (u) {
						Object(a.b)() || console.error(u), c.c.captureException(u);
						const e = r.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(f(e))
					}
				}, g = Object(s.a)(m.m), y = Object(s.a)(m.n), O = Object(s.a)(m.l), k = (e, t) => async (n, s, {
					apiContext: i
				}) => {
					n(g());
					try {
						const r = await Object(o.c)({
							awardId: e,
							context: i(),
							correlationId: t
						});
						if (!r.ok) throw new Error(r.error && r.error.type || "Unknown error");
						const a = r.body;
						if (!a.coinPackages || !a.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						n(y(a))
					} catch (l) {
						Object(a.b)() || console.error(l), c.c.captureException(l);
						const e = r.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						n(O(e))
					}
				}, j = Object(s.a)(m.h), _ = () => async (e, t, {
					gqlContext: n
				}) => {
					var s, i;
					try {
						const t = await Object(o.a)(n());
						if (t.ok) {
							const n = t.body.data.claimAwardOffer;
							if (null === (s = n.errors) || void 0 === s ? void 0 : s.length) throw new Error(n.errors.map(e => e.message).join(" | "));
							if (!(null === (i = n.awards) || void 0 === i ? void 0 : i.length)) throw new Error("Got empty award list on free award offer claim");
							if (!n.ok) throw new Error("Got not ok response on free award offer claim");
							await e(j({
								awards: n.awards
							})), e(Object(u.B)())
						}
					} catch (m) {
						Object(a.b)() || console.error(m), e(Object(l.f)({
							kind: d.b.Error,
							text: r.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), c.c.captureException(m)
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
				price: "_3eYcjtmYoyVXxiONpaL-dl",
				priceCoinIcon: "_3Cwg9Vp-uedO-_VTBrJInh",
				priceValue: "_5vvqF-Ums1umqkRQRQgxc",
				priceCurrency: "GAlR-4atoPo_42Ies2wM4",
				crossout: "dIoLyZbXoDJefsplq4m_j",
				description: "_36_v0R5TTjmgVJ4q6NSB-6",
				ctaContainer: "_34OTQdJgV4WKGff3WUOMAj",
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
				s = n("./src/reddit/components/CollapsibleFAQ/index.m.less"),
				c = n.n(s),
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
					} = this.state, s = r ? c.a.isOpen : "";
					return a.a.createElement("div", {
						className: Object(o.a)(e, c.a.collapsibleFAQ)
					}, a.a.createElement("button", {
						className: c.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, a.a.createElement("span", {
						className: c.a.buttonContent,
						tabIndex: -1
					}, t, r ? a.a.createElement(l.a, {
						className: c.a.collapseIcon
					}) : a.a.createElement(i.a, {
						className: c.a.collapseIcon
					}))), a.a.createElement("div", {
						className: Object(o.a)(c.a.collapsibleAnswer, s)
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
				s = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/GildMarketingDescription/index.m.less"),
				o = n.n(c);
			t.a = e => {
				const {
					children: t,
					className: n,
					icon: r,
					isMobileStyled: c,
					title: i
				} = e;
				return a.a.createElement("div", {
					className: Object(s.a)(n, {
						[o.a.isMobileStyled]: c
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
				s = n("./src/reddit/components/MarketingPageFooter/index.m.less"),
				c = n.n(s),
				o = n("./src/lib/classNames/index.ts");
			const {
				fbt: i
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => a.a.createElement("div", {
				className: Object(o.a)(e.className, c.a.marketingPageFooter)
			}, a.a.createElement("div", {
				className: Object(o.a)(e.className, c.a.marketingPageFooterInner)
			}, a.a.createElement("div", {
				className: c.a.linkContainer
			}, a.a.createElement("div", {
				className: c.a.linkCol
			}, a.a.createElement("ul", {
				className: c.a.linkColInner
			}, a.a.createElement("li", {
				className: c.a.linkItem
			}, a.a.createElement("a", {
				className: c.a.link,
				href: "https://about.reddit.com"
			}, i._("about", null, {
				hk: "3IO4c7"
			}))), a.a.createElement("li", {
				className: c.a.linkItem
			}, a.a.createElement("a", {
				className: c.a.link,
				href: "https://about.reddit.com/careers/"
			}, i._("careers", null, {
				hk: "2GATRU"
			}))), a.a.createElement("li", {
				className: c.a.linkItem
			}, a.a.createElement("a", {
				className: c.a.link,
				href: "https://about.reddit.com/press/"
			}, i._("press", null, {
				hk: "iUiGg"
			}))))), a.a.createElement("div", {
				className: c.a.linkCol
			}, a.a.createElement("ul", {
				className: c.a.linkColInner
			}, a.a.createElement("li", {
				className: c.a.linkItem
			}, a.a.createElement("a", {
				className: c.a.link,
				href: "https://www.redditinc.com/advertising"
			}, i._("advertise", null, {
				hk: "RYuIn"
			}))), a.a.createElement("li", {
				className: c.a.linkItem
			}, a.a.createElement("a", {
				className: c.a.link,
				href: "http://www.redditblog.com/"
			}, i._("blog", null, {
				hk: "4xzWuA"
			}))), a.a.createElement("li", {
				className: c.a.linkItem
			}, a.a.createElement("a", {
				className: c.a.link,
				href: "https://www.reddithelp.com"
			}, i._("help", null, {
				hk: "36XyzA"
			}))))), a.a.createElement("div", {
				className: Object(o.a)(c.a.linkCol, c.a.linkBoldCol)
			}, a.a.createElement("ul", {
				className: c.a.linkColInner
			}, a.a.createElement("li", {
				className: c.a.linkItem
			}, a.a.createElement("a", {
				className: c.a.link,
				href: "https://www.reddit.com/coins"
			}, i._("reddit coins", null, {
				hk: "3Ts6tu"
			}))), a.a.createElement("li", {
				className: c.a.linkItem
			}, a.a.createElement("a", {
				className: c.a.link,
				href: "https://www.reddit.com/premium"
			}, i._("reddit premium", null, {
				hk: "3vPbLO"
			}))), a.a.createElement("li", {
				className: c.a.linkItem
			}, a.a.createElement("a", {
				className: c.a.link,
				href: "https://redditgifts.com/"
			}, i._("reddit gifts", null, {
				hk: "3WNNEy"
			}))))), a.a.createElement("div", {
				className: Object(o.a)(c.a.linkCol, c.a.linkBoldCol)
			}, a.a.createElement("ul", {
				className: c.a.linkColInner
			}, a.a.createElement("li", {
				className: c.a.linkItem
			}, a.a.createElement("a", {
				className: c.a.link,
				href: "https://www.facebook.com/reddit/"
			}, i._("Facebook", null, {
				hk: "47DT2F"
			}))), a.a.createElement("li", {
				className: c.a.linkItem
			}, a.a.createElement("a", {
				className: c.a.link,
				href: "https://twitter.com/reddit"
			}, i._("Twitter", null, {
				hk: "3aUv7u"
			}))), a.a.createElement("li", {
				className: c.a.linkItem
			}, a.a.createElement("a", {
				className: c.a.link,
				href: "https://www.instagram.com/reddit/"
			}, i._("Instagram", null, {
				hk: "dVIRX"
			})))))), a.a.createElement("ul", {
				className: c.a.legal
			}, a.a.createElement("li", {
				className: c.a.legalItem
			}, a.a.createElement("a", {
				className: c.a.legalLink,
				href: "https://www.redditinc.com/policies/content-policy"
			}, i._("content policy", null, {
				hk: "4ptiaZ"
			}))), a.a.createElement("li", {
				className: c.a.legalItem
			}, a.a.createElement("a", {
				className: c.a.legalLink,
				href: "https://www.reddit.com/help/privacypolicy"
			}, i._("privacy policy", null, {
				hk: "1ybjnz"
			}))), a.a.createElement("li", {
				className: c.a.legalItem
			}, a.a.createElement("a", {
				className: c.a.legalLink,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, i._("user agreement", null, {
				hk: "4puRxC"
			}))), a.a.createElement("li", {
				className: c.a.legalItem
			}, a.a.createElement("a", {
				className: c.a.legalLink,
				href: "https://www.reddit.com/help/healthycommunities/"
			}, i._("mod policy", null, {
				hk: "1VvAdM"
			}))), a.a.createElement("li", {
				className: c.a.legalItem
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
				s = n("./src/reddit/components/TimeLeft/index.m.less"),
				c = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/timeAgo/index.ts"),
				l = n("./src/reddit/icons/svgs/Clock/index.tsx");
			t.a = e => {
				const {
					className: t,
					expirationDate: n
				} = e, r = Math.floor(n.getTime() / 1e3), s = Object(i.b)(r);
				return a.a.createElement("div", {
					className: Object(o.a)(t)
				}, a.a.createElement(l.a, {
					className: c.a.clockIcon
				}), a.a.createElement("span", {
					className: c.a.timeLeft
				}, s))
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
				return b
			}));
			var r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				s = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
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
				return Object(a.a)(Object(s.a)(t, [c.a]), {
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
				return Object(a.a)(Object(s.a)(e, [c.a]), {
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
				return Object(a.a)(Object(s.a)(e, [c.a]), {
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
				return Object(a.a)(Object(s.a)(e, [c.a]), {
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
				thingId: b
			}) => {
				const f = {
					award_id: e,
					coins: n,
					correlation_id: o,
					is_anonymous: l,
					message: d,
					offer_context: u,
					order_id: m,
					pennies: p,
					thing_id: b
				};
				return Object(a.a)(Object(s.a)(t, [c.a]), {
					method: r.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: f
				}).then(i.c)
			}, b = async ({
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
				return Object(a.a)(Object(s.a)(t, [c.a]), {
					method: r.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: m
				}).then(i.c)
			}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);

			function s(e, t) {
				const n = e.toString().split(":");
				return n.length % 2 == 0 ? e : n.reduce((e, n, r) => (r % 2 == 0 ? e.push(n) : "" === n ? e.push(":") : `:${n}:` in t ? e.push(t[`:${n}:`]) : e.push(`:${n}:`), e), []).map((e, t) => a.a.createElement(a.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				a = n("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const n = new r.BigNumber(e),
					a = new r.BigNumber(t || 1);
				return n.dividedToIntegerBy(a).toString()
			}

			function c(e, t) {
				return Object(a.b)(parseInt(s(e, t), 10))
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
				return c
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				s = n.n(a);
			const c = ({
					isLoading: e
				}) => Object(r.a)(s.a.loadingBackground, {
					[s.a["m-loading"]]: e
				}),
				o = e => Object(r.a)(s.a.loadingBar, c(e))
		},
		"./src/reddit/models/Gold/Coins/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const a = new Set(["low_coin_upsell"]),
				s = new Set(["new_purchaser", "repeat_purchaser"]),
				c = [{
					prompt: () => r.fbt._("What are coins?", null, {
						hk: "bD2cQ"
					}),
					answer: () => r.fbt._("Coins are our virtual good, and you can use them to award exceptional posts or comments, giving them Silver, Gold, or Platinum. We'll be adding cool new ways to spend your coins in the future.", null, {
						hk: "2RS7Fb"
					})
				}, {
					prompt: () => r.fbt._('What is "Give Award"?', null, {
						hk: "Q08fJ"
					}),
					answer: () => r.fbt._('Giving an Award, or "gilding", is a way to show appreciation for an exceptional contribution to Reddit. You can award someone by clicking on "Give Award" below their post or comment. This distinguishes it with an Award for all to see, and some even grant the honoree special bonus benefits.', null, {
						hk: "4fZWQ3"
					})
				}, {
					prompt: () => r.fbt._("What are these new Award types?", null, {
						hk: "2ysK1l"
					}),
					answer: () => r.fbt._("There are now several ways to Give Awards. A Silver Award requires 100 coins, which simply marks a post or comment with a Silver Award icon. A classic Gold Award requires 500 coins and gives the recipient a week of Reddit Premium membership and 100 coins. Finally, the ultra rare Platinum Award costs 1800 coins, and gives the recipient with one month of Reddit Premium membership, which includes 700 coins for that month.", null, {
						hk: "Mvg07"
					})
				}, {
					prompt: () => r.fbt._("I bought coins, how can I tell how many I have?", null, {
						hk: "4a4pGf"
					}),
					answer: () => r.fbt._("If you buy coins you will always have a balance associated with your Reddit account. You can view your balance on the top navigation bar by your username.", null, {
						hk: "2VWZ2s"
					})
				}, {
					prompt: () => r.fbt._("Can I transfer coins between Reddit accounts?", null, {
						hk: "1jLVez"
					}),
					answer: () => r.fbt._("You cannot transfer your Reddit coin balance across usernames, sorry. You can offer a Gold Award to other users which will grant them 100 coins.", null, {
						hk: "435l4g"
					})
				}, {
					prompt: () => r.fbt._("Can I get coins for free?", null, {
						hk: "1fhxmd"
					}),
					answer: () => r.fbt._("We may give away coins on special occasions. Stay tuned!", null, {
						hk: "3qKa11"
					})
				}, {
					prompt: () => r.fbt._("What happened to Creddits? Do those still exist?", null, {
						hk: "qTu5W"
					}),
					answer: () => r.fbt._("Yes, Creddits are simply called \"coins\" now, and we've converted any existing balance at a generous exchange rate of one Creddit to 2000 coins. That's double their original monetary value as a thank you for supporting us early. Use them to award exceptional posts and comments you come across. Thanks again for your contribution to the Reddit community.", null, {
						hk: "3bz9Wy"
					})
				}, {
					prompt: () => r.fbt._("I thought Gold was the name of Reddit's subscription membership?", null, {
						hk: "26YDse"
					}),
					answer: () => r.fbt._('You\'re correct, it used to also be the name of the subscription membership. However, many people confused the subscription "Reddit Gold" membership with a virtual good or coin. To make things easier to understand, we\'ve renamed the membership to "Reddit Premium", while our virtual good is called "coins".', null, {
						hk: "aFpGc"
					})
				}]
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
				s = n("./node_modules/lodash/times.js"),
				c = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/react-router-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/loadRedditAdsPixel.ts"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/helpers/correlationIdTracker.ts"),
				h = n("./src/reddit/helpers/trackers/goldPayment.ts");
			const g = "coins_marketing",
				y = (e, t = {}) => ({
					...Object(h.g)(e, t),
					correlationId: Object(f.e)(f.a.GoldPayment, !1)
				}),
				O = () => e => ({
					...y(e),
					source: g,
					action: "click",
					noun: "get_coins"
				}),
				k = e => t => ({
					...y(t, {
						packageId: e
					}),
					source: g,
					action: "click",
					noun: "coins_package"
				}),
				j = () => e => ({
					...y(e),
					source: g,
					action: "click",
					noun: "get_premium"
				});
			var _ = n("./src/reddit/helpers/trackers/screenview.ts"),
				w = n("./src/telemetry/index.ts"),
				E = n("./src/telemetry/models/Timer.ts"),
				v = n("./src/reddit/pages/CoinsPage/index.m.less"),
				C = n.n(v),
				x = n("./src/reddit/helpers/createEmojiText/index.tsx"),
				P = n("./src/reddit/models/Gold/Award.ts"),
				N = n("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				I = n("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				T = n("./src/reddit/actions/login.ts"),
				A = n("./src/reddit/contexts/PageLayer/index.tsx"),
				S = n("./src/reddit/models/Gold/Coins/index.ts"),
				R = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				M = n("./src/reddit/selectors/user.ts"),
				G = n("./src/reddit/components/CoinPurchasePackage/index.m.less"),
				L = n.n(G),
				D = n("./src/lib/classNames/index.ts"),
				B = n("./src/lib/currency/currencies.ts"),
				F = n("./src/lib/localizeCurrency/index.ts"),
				U = n("./src/reddit/controls/Button/index.tsx"),
				q = n("./src/reddit/hooks/useLocale.ts"),
				V = n("./src/reddit/icons/svgs/Coin/index.tsx"),
				Y = n("./src/reddit/icons/svgs/Stamp/index.tsx");
			var H = e => {
					const {
						className: t,
						coinPackage: n,
						isLargeView: r,
						onClick: s
					} = e, c = Object(q.a)(), {
						baselineCoins: o,
						baselinePennies: l,
						bonusPct: d,
						coins: u,
						description: m,
						featuredLabel: p,
						images: b,
						pennies: f
					} = n, h = Object(F.b)(f, {
						locale: c
					}), g = Object(F.b)(u, {
						locale: c,
						type: B.b.Reddit,
						currency: B.a
					}), y = r ? b.marketing["4x"].url : b.marketing["2x"].url, O = d > 0 && `${Object(F.a)(d,{locale:c})}%`, k = a.fbt._("bonus", null, {
						hk: "L8mcp"
					}), j = r ? L.a.large : "", _ = o !== u, w = l !== f;
					return i.a.createElement("div", {
						className: Object(D.a)(t, L.a.coinPurchasePackage, j)
					}, i.a.createElement("div", {
						className: Object(D.a)(j, L.a.imageContainer)
					}, i.a.createElement("img", {
						src: y
					}), p && i.a.createElement("div", {
						className: L.a.badge
					}, p), O && i.a.createElement("div", {
						className: Object(D.a)(L.a.stamp, j)
					}, i.a.createElement(Y.a, {
						className: L.a.stampIcon
					}), i.a.createElement("div", {
						className: Object(D.a)(L.a.stampValue, j)
					}, O), i.a.createElement("div", {
						className: Object(D.a)(L.a.stampText, j)
					}, k))), i.a.createElement("div", {
						className: Object(D.a)(L.a.contentContainer, j)
					}, i.a.createElement("div", {
						className: Object(D.a)(L.a.price, j)
					}, i.a.createElement(V.a, {
						className: L.a.priceCoinIcon
					}), i.a.createElement("div", null, i.a.createElement("div", {
						className: L.a.priceValue
					}, g), _ && i.a.createElement("div", {
						className: Object(D.a)(L.a.priceCurrency, L.a.crossout)
					}, Object(F.b)(o, {
						locale: c,
						type: B.b.Reddit,
						currency: B.a
					})))), i.a.createElement("div", {
						className: Object(D.a)(L.a.description, j)
					}, m), i.a.createElement("div", {
						className: L.a.ctaContainer
					}, i.a.createElement(U.t, {
						kind: U.b.Button,
						priority: U.c.Primary,
						className: Object(D.a)(L.a.cta, j),
						onClick: s
					}, h), w && i.a.createElement("div", {
						className: L.a.priceCrossout
					}, Object(F.b)(l, {
						locale: c
					})))))
				},
				W = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				z = n("./src/reddit/components/CoinPurchasePackage/placeholder.m.less"),
				Q = n.n(z);
			var X = ({
					className: e,
					isLargeView: t,
					...n
				}) => {
					const r = t ? Q.a.large : "",
						a = Object(W.b)(n);
					return i.a.createElement("div", {
						className: Object(D.a)(a, Q.a.packagePlaceholder, r, e)
					})
				},
				J = n("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				K = n("./src/reddit/components/GildMarketingDescription/index.tsx"),
				$ = n("./src/reddit/components/MarketingPageFooter/index.tsx"),
				Z = n("./src/reddit/components/PremiumMarketingBanner/index.m.less"),
				ee = n.n(Z);
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ne = e => {
				const {
					className: t,
					isPremiumSubscriber: n,
					onGetPremium: a,
					onManagePremium: s,
					premiumPackage: c
				} = e, {
					periodicalCoins: o
				} = c, l = o.toLocaleString(), d = `${r.a.assetPath}/img/gold/coins-premium-g.png`;
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
					onClick: s
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
				se = n("./src/reddit/components/TimeLeft/TimeLeft.tsx"),
				ce = n("./src/reddit/pages/CoinsPage/HeroSection/index.m.less"),
				oe = n.n(ce);
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
					}, r), e && i.a.createElement(se.a, {
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
					activeSaleConfig: R.a,
					coinPackages: R.d,
					dealCoinPackages: R.f,
					isPremiumSubscriber: M.t,
					isLoggedIn: M.K,
					premiumPackages: R.l,
					purchaseCatalogPending: R.o
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
					requestPurchaseCatalog: t => e(Object(I.b)(t))
				}));
			class be extends i.a.Component {
				constructor() {
					super(...arguments), this.correlationId = Object(f.e)(f.a.GoldPayment, !1), this.purchaseSection = i.a.createRef(), this.perksSection = i.a.createRef(), this.onClickGetCoins = () => {
						this.props.sendEvent(O()), this.purchaseSection.current && window.scrollTo({
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
						t && a(k(e.mobileId)), t ? n(e, this.correlationId) : r(), this.targetedOfferTimerId && clearTimeout(this.targetedOfferTimerId)
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
					const r = m.Mb.COINS;
					w.c.has(r) && (this.props.sendEvent(Object(_.b)(E.TimerType.InApp, w.c.end(r))), this.props.sendEvent(Object(_.a)())), Object(p.a)(), this.setTargetedOfferTimeout()
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
					}), this.renderGildBreakdown(), this.renderPurchase(), this.renderFAQSection(), i.a.createElement($.a, null))
				}
				renderGildBreakdown() {
					return i.a.createElement("div", {
						className: C.a.detailGridSection,
						ref: this.perksSection
					}, i.a.createElement("h2", {
						className: C.a.detailTitle
					}, a.fbt._("Here’s what you can buy with coins", null, {
						hk: "4kIMr0"
					})), i.a.createElement("p", {
						className: C.a.detailDesription
					}, a.fbt._("Spend your coins on these Awards reserved exclusively for the finest Reddit contributors. Awarding a post or comment highlights it for all to see, and some Awards also grant the honoree special bonuses.", null, {
						hk: "3eScNB"
					})), i.a.createElement("div", {
						className: C.a.gridContainer
					}, i.a.createElement(K.a, {
						className: C.a.gridItem,
						icon: i.a.createElement("img", {
							src: `${r.a.assetPath}/img/gold/badges/award-silver-large.png`
						}),
						title: a.fbt._("Silver Award", null, {
							hk: "2h79np"
						})
					}, Object(x.a)(a.fbt._("Shows a Silver Award on the post or comment and ... that’s it. You’ll need {Coin price placeholder} Coins.", [a.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "zbXx9"
					}), {
						":coin_price:": i.a.createElement("span", {
							className: C.a.nowrap
						}, i.a.createElement(re.a, null), P.q.coinPrice)
					})), i.a.createElement(K.a, {
						className: C.a.gridItem,
						icon: i.a.createElement("img", {
							src: `${r.a.assetPath}/img/gold/badges/award-gold-large.png`
						}),
						title: a.fbt._("Gold Award", null, {
							hk: "1oYdz0"
						})
					}, Object(x.a)(a.fbt._("Gives {Coin benefit placeholder} Reddit Coins and a week of r/lounge access and ad-free browsing. You’ll need {Coin price placeholder} coins.", [a.fbt._param("Coin benefit placeholder", ":coin_benefit:"), a.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "rxGC9"
					}), {
						":coin_benefit:": i.a.createElement("span", {
							className: C.a.nowrap
						}, i.a.createElement(re.a, null), "100"),
						":coin_price:": i.a.createElement("span", {
							className: C.a.nowrap
						}, i.a.createElement(re.a, null), P.n.coinPrice)
					})), i.a.createElement(K.a, {
						className: C.a.gridItem,
						icon: i.a.createElement("img", {
							src: `${r.a.assetPath}/img/gold/badges/award-platinum-large.png`
						}),
						title: a.fbt._("Platinum Award", null, {
							hk: "3nCEqM"
						})
					}, Object(x.a)(a.fbt._("Gives a month of r/lounge access and ad-free browsing, and {Coin benefit placeholder} Reddit Coins for that month. You’ll need {Coin price placeholder} coins.", [a.fbt._param("Coin benefit placeholder", ":coin_benefit:"), a.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "375Nna"
					}), {
						":coin_benefit:": i.a.createElement("span", {
							className: C.a.nowrap
						}, i.a.createElement(re.a, null), "700"),
						":coin_price:": i.a.createElement("span", {
							className: C.a.nowrap
						}, i.a.createElement(re.a, null), P.p.coinPrice)
					}))))
				}
				renderPurchase() {
					const {
						coinPackages: e,
						isPremiumSubscriber: t,
						onRouteToManagePremium: n,
						premiumPackages: a,
						purchaseCatalogPending: s
					} = this.props, o = a.length ? a[0] : void 0;
					return i.a.createElement("div", {
						className: C.a.purchasePackagesSection,
						ref: this.purchaseSection,
						style: {
							backgroundImage: `url("${r.a.assetPath}/img/gold/coins-premium-bg.jpg")`
						}
					}, i.a.createElement("h2", {
						className: C.a.purchaseTitle
					}, i.a.createElement(ae.a, {
						className: C.a.purchaseLogo
					})), i.a.createElement("div", {
						className: C.a.purchasePackages
					}, s || !e.length ? c()(5, e => i.a.createElement(X, {
						className: C.a.purchasePackage,
						isLargeView: 0 === e,
						isLoading: !0,
						key: e
					})) : e.map(e => i.a.createElement(H, {
						className: C.a.purchasePackage,
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
						className: C.a.faqsSection
					}, i.a.createElement("h2", {
						className: C.a.faqsTitle
					}, a.fbt._("Coins FAQ", null, {
						hk: "21x0aE"
					})), i.a.createElement("div", {
						className: C.a.faqs
					}, S.b.map((e, t) => i.a.createElement(J.a, {
						defaultClosed: !0,
						question: e.prompt(),
						key: t
					}, e.answer()))))
				}
				componentWillUnmount() {
					Object(f.b)(f.a.GoldPayment), this.targetedOfferTimerId && clearTimeout(this.targetedOfferTimerId)
				}
			}
			t.default = ue(pe(Object(b.c)(be)))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Coins.b05c6031df295f3ac596.js.map