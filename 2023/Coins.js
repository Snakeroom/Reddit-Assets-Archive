// https://www.redditstatic.com/desktop2x/Coins.9a7e831d0e26e2bd113a.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
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
								var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
								throw i.name = "Invariant Violation", i
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

				function i(e, t, n) {
					return t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function o(e, t) {
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
						t % 2 ? o(Object(n), !0).forEach((function(t) {
							i(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
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
								for (var c, i = e[Symbol.iterator](); !(r = (c = i.next()).done) && (n.push(c.value), !t || n.length !== t); r = !0);
							} catch (o) {
								a = !0, s = o
							} finally {
								try {
									r || null == i.return || i.return()
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
					f = function(e, t, n) {
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
								for (var i = {}, o = 0; o < s.length; o += 1) i[s[o]] = !0;
								for (var l = 0; l < c.length; l += 1) i[c[l]] = !0;
								var d = Object.keys(i);
								if (d.length !== s.length) return !1;
								var u = t,
									m = n;
								return d.every((function(t) {
									return e(u[t], m[t])
								}))
							}(e[a], t[a]);
							return n.includes(a) ? (s && console.warn("Unsupported prop change: options.".concat(a, " is not a mutable property.")), r) : s ? l(l({}, r || {}), {}, i({}, a, e[a])) : r
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
						s = t.useRef(!1),
						c = t.useRef(!0),
						i = t.useMemo((function() {
							return g(n)
						}), [n]),
						o = d(t.useState((function() {
							return {
								stripe: null,
								elements: null
							}
						})), 2),
						l = o[0],
						u = o[1],
						p = m(n);
					null !== p && p !== n && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), s.current || ("sync" === i.tag && (s.current = !0, u({
						stripe: i.stripe,
						elements: i.stripe.elements(r)
					})), "async" === i.tag && (s.current = !0, i.stripePromise.then((function(e) {
						e && c.current && u({
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
					}), [l.stripe]), t.createElement(h.Provider, {
						value: l
					}, a)
				};
				y.propTypes = {
					stripe: s.any,
					options: s.object
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
					E = function() {},
					C = function(e, n) {
						var r, a = "".concat((r = e).charAt(0).toUpperCase() + r.slice(1), "Element"),
							c = n ? function(e) {
								v("mounts <".concat(a, ">"));
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
									i = void 0 === c ? {} : c,
									o = n.onBlur,
									l = void 0 === o ? E : o,
									d = n.onFocus,
									u = void 0 === d ? E : d,
									p = n.onReady,
									b = void 0 === p ? E : p,
									g = n.onChange,
									h = void 0 === g ? E : g,
									y = n.onEscape,
									O = void 0 === y ? E : y,
									C = n.onClick,
									k = void 0 === C ? E : C,
									_ = v("mounts <".concat(a, ">")).elements,
									x = t.useRef(null),
									w = t.useRef(null),
									P = j(b),
									N = j(l),
									I = j(u),
									A = j(k),
									S = j(h),
									T = j(O);
								t.useLayoutEffect((function() {
									if (null == x.current && _ && null != w.current) {
										var t = _.create(e, i);
										x.current = t, t.mount(w.current), t.on("ready", (function() {
											return P(t)
										})), t.on("change", S), t.on("blur", N), t.on("focus", I), t.on("escape", T), t.on("click", A)
									}
								}));
								var M = m(i);
								return t.useEffect((function() {
									if (x.current) {
										var e = f(i, M, ["paymentRequest"]);
										e && x.current.update(e)
									}
								}), [i, M]), t.useLayoutEffect((function() {
									return function() {
										x.current && x.current.destroy()
									}
								}), []), t.createElement("div", {
									id: r,
									className: s,
									ref: w
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
					k = "undefined" == typeof window,
					_ = C("auBankAccount", k),
					x = C("card", k),
					w = C("cardNumber", k),
					P = C("cardExpiry", k),
					N = C("cardCvc", k),
					I = C("fpxBank", k),
					A = C("iban", k),
					S = C("idealBank", k),
					T = C("p24Bank", k),
					M = C("epsBank", k),
					L = C("payment", k),
					B = C("paymentRequestButton", k),
					R = C("linkAuthentication", k),
					G = C("shippingAddress", k),
					D = C("afterpayClearpayMessage", k);
				e.AfterpayClearpayMessageElement = D, e.AuBankAccountElement = _, e.CardCvcElement = N, e.CardElement = x, e.CardExpiryElement = P, e.CardNumberElement = w, e.Elements = y, e.ElementsConsumer = O, e.EpsBankElement = M, e.FpxBankElement = I, e.IbanElement = A, e.IdealBankElement = S, e.LinkAuthenticationElement = R, e.P24BankElement = T, e.PaymentElement = L, e.PaymentRequestButtonElement = B, e.ShippingAddressElement = G, e.useElements = function() {
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
				s = n("./node_modules/lodash/toInteger.js"),
				c = 9007199254740991,
				i = 4294967295,
				o = Math.min;
			e.exports = function(e, t) {
				if ((e = s(e)) < 1 || e > c) return [];
				var n = i,
					l = o(e, i);
				t = a(t), e -= i;
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
				return i
			})), n.d(t, "f", (function() {
				return o
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
				i = "COINS",
				o = [c, "BTC"],
				l = [i, "SUBREDDIT_POINTS", "GAME_TOKENS"],
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
				i = n("./src/reddit/helpers/governance/tokens.ts"),
				o = n("./src/reddit/constants/intlSupport.ts");
			const l = function(e) {
					let {
						locale: t = r.DEFAULT_LOCALE,
						pretty: n,
						formatOptions: a
					} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const s = Number(e);
					return Object(o.c)() ? n ? Object(c.b)(s) : new Intl.NumberFormat(t, a).format(s) : u(s, n, t)
				},
				d = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const {
						locale: n = r.DEFAULT_LOCALE,
						pretty: c,
						formatOptions: l,
						displayConversion: d,
						forceDecimals: f,
						currency: b = t.currency || (t.type ? p(t.type) : s.c),
						type: g = t.type || (t.currency ? m(t.currency) : s.b.Real)
					} = t, h = Number(e), y = String(e);
					switch (g) {
						case s.b.Reddit: {
							const e = s.e[b],
								t = e ? e() : b;
							return Object(o.c)() ? new Intl.NumberFormat(n, {
								currencyDisplay: "symbol",
								...l
							}).format(h) + " " + t : u(h, c, n, t)
						}
						case s.b.Crypto: {
							if (c) {
								return Object(i.d)(y, d) + " " + b
							}
							const e = Number(Object(i.c)(y, d));
							return Object(o.c)() ? new Intl.NumberFormat(n, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...l
							}).format(e) : u(e, c, n, b)
						}
						case s.b.Real:
						default: {
							const e = Number(Object(a.a)(y, f));
							return Object(o.c)() ? new Intl.NumberFormat(n, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								notation: c ? "compact" : "standard",
								...l
							}).format(e) : u(e, c, n, b)
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
		"./src/reddit/actions/economics/powerups/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = e => (null == e ? void 0 : e.map(e => e.message).join(", ")) || ""
		},
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return _
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "c", (function() {
				return w
			})), n.d(t, "h", (function() {
				return P
			})), n.d(t, "g", (function() {
				return N
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "e", (function() {
				return A
			})), n.d(t, "f", (function() {
				return S
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/formatApiError/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/sentry/index.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				o = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
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
				v = n("./src/reddit/selectors/experiments/econ/index.ts"),
				O = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				j = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				E = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const C = Object(s.a)(E.u),
				k = Object(s.a)(E.c),
				_ = e => async (t, n) => {
					const r = n();
					Object(v.d)(r) || (t(C(e)), t(Object(d.h)(i.a.ECON_COIN_PURCHASE)))
				}, x = () => async (e, t) => {
					e(k()), e(Object(d.g)(i.a.ECON_COIN_PURCHASE))
				}, w = (e, t, n) => async (a, s) => {
					await a(Object(l.c)());
					const c = s(),
						i = Object(O.m)(c, e);
					if (i) a(_({
						correlationId: n,
						packageId: i,
						thingId: t
					}));
					else {
						const e = Object(O.k)(c),
							t = r.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						a(Object(u.f)({
							kind: y.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, P = (e, t, n) => async (s, c, i) => {
					let {
						apiContext: l
					} = i;
					const d = c(),
						{
							coins: u,
							pennies: m
						} = n,
						b = Object(j.s)(d) || Object(f.d)(f.a.GoldPayment, !1);
					let g, y;
					s(Object(o.stripeTokenPending)());
					const v = Object(j.z)(d);
					if (v || (g = await s(Object(o.validateAndCreateStripeToken)(e, t)), y = Object(j.w)(d), g)) try {
						const e = await Object(p.d)({
							coins: u,
							context: l(),
							correlationId: b,
							offerContext: Object(h.d)(n, !1),
							pennies: m,
							rememberCard: y,
							savedCardId: v || void 0,
							token: g
						});
						if (e.error) {
							const t = Object(a.a)(e.error, e.status);
							return void s(Object(o.stripeApiError)(t))
						}
						return s(Object(o.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(f.b)(f.a.GoldPayment)
					} catch (O) {
						const e = Object(a.a)(O);
						s(Object(o.stripeApiError)(e))
					} else {
						const e = r.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						s(Object(o.stripeApiError)(e))
					}
				}, N = (e, t, s, c) => async (i, l, d) => {
					let {
						apiContext: u
					} = d;
					const m = l(),
						{
							coins: y,
							pennies: v
						} = s,
						O = Object(j.s)(m) || Object(f.d)(f.a.GoldPayment, !1);
					let E, C;
					i(Object(o.stripeTokenPending)());
					const k = Object(j.z)(m);
					if (k || (E = await i(Object(o.validateAndCreateStripeToken)(e, t)), C = Object(j.w)(m), E)) try {
						const {
							gildModalThingId: e,
							isAnonymous: t,
							message: l,
							selectedAward: d
						} = m.gild;
						if (!e || !d.id) {
							const e = r.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void i(Object(o.stripeApiError)(e))
						}
						const j = d.id,
							_ = {
								gildType: j,
								isAnonymous: t,
								message: l
							},
							w = await Object(p.c)({
								coins: y,
								context: u(),
								correlationId: O,
								gildParams: _,
								isOldReddit: c,
								offerContext: Object(h.d)(s, !0),
								pennies: v,
								rememberCard: C,
								savedCardId: k || void 0,
								thingId: e,
								token: E
							});
						if (w.error) {
							const e = Object(a.a)(w.error, w.status);
							return void i(Object(o.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await n.e("gildActions").then(n.bind(null, "./src/reddit/actions/gold/gild.ts"));
							i(x()), i(Object(o.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: r,
								all_awardings: a,
								coins: s,
								treatment_tags: c
							} = w.body;
							return i(t({
								awardKarmaReceived: r || 0,
								awardId: j,
								awardings: a && a.length ? Object(b.a)(a).map(e => ({
									award: Object(g.i)(e),
									total: e.count
								})) : [],
								coins: s,
								id: e,
								treatmentTags: c
							})), void Object(f.b)(f.a.GoldPayment)
						}
					} catch (_) {
						const e = Object(a.a)(_);
						i(Object(o.stripeApiError)(e))
					} else {
						const e = r.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						i(Object(o.stripeApiError)(e))
					}
				}, I = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const i = Object(f.c)(f.a.GoldPayment),
						{
							coins: l,
							pennies: d
						} = e;
					try {
						const e = await Object(m.a)({
							context: s(),
							coins: l,
							pennies: d,
							correlationId: i
						});
						if (e.error) {
							const n = Object(a.a)(e.error);
							return void t(Object(o.paypalApiError)(n))
						} {
							const {
								order_id: t
							} = e.body;
							return t
						}
					} catch (u) {
						c.c.captureException(u);
						const e = Object(a.a)(u);
						t(Object(o.paypalApiError)(e))
					}
				}, A = (e, t) => async (n, r, s) => {
					let {
						apiContext: i
					} = s;
					const l = r(),
						d = Object(j.s)(l) || Object(f.d)(f.a.GoldPayment, !1),
						{
							coins: u,
							pennies: p
						} = t;
					try {
						const r = await Object(m.c)({
							context: i(),
							offerContext: Object(h.d)(t, !1),
							orderId: e,
							coins: u,
							pennies: p,
							correlationId: d
						});
						if (r.error) {
							const e = Object(a.a)(r.error);
							return void n(Object(o.paypalApiError)(e))
						} {
							const {
								coins: e
							} = r.body;
							n(Object(o.paymentCompleted)({
								coins: e,
								confirmed: !0
							})), Object(f.b)(f.a.GoldPayment)
						}
					} catch (b) {
						c.c.captureException(b);
						const e = Object(a.a)(b);
						n(Object(o.paypalApiError)(e))
					}
				}, S = (e, t) => async (s, i, l) => {
					let {
						apiContext: d
					} = l;
					const u = i(),
						p = Object(j.s)(u) || Object(f.d)(f.a.GoldPayment, !1),
						{
							coins: y,
							pennies: v
						} = t;
					try {
						const {
							gildModalThingId: c,
							isAnonymous: i,
							message: l,
							selectedAward: O
						} = u.gild;
						if (!c || !O) return void s(Object(o.paypalApiError)(r.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const j = O.id,
							E = await Object(m.d)({
								context: d(),
								offerContext: Object(h.d)(t, !0),
								orderId: e,
								coins: y,
								pennies: v,
								thingId: c,
								awardId: j,
								message: l || "",
								isAnonymous: i,
								correlationId: p
							});
						if (E.error) {
							const e = Object(a.a)(E.error);
							s(Object(o.paypalApiError)(e))
						} else {
							s(x());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: r,
								subreddit_coins: a,
								treatment_tags: i
							} = E.body;
							s(Object(o.paymentCompleted)({
								coins: r,
								confirmed: !0
							}));
							const {
								gildSuccessful: l
							} = await n.e("gildActions").then(n.bind(null, "./src/reddit/actions/gold/gild.ts"));
							s(l({
								awardId: j,
								awardKarmaReceived: t || 0,
								awardings: Object(b.a)(e).map(e => ({
									award: Object(g.i)(e),
									total: e.count
								})),
								coins: r,
								id: c,
								subredditCoins: a,
								treatmentTags: i
							})), Object(f.b)(f.a.GoldPayment)
						}
					} catch (O) {
						c.c.captureException(O);
						const e = Object(a.a)(O);
						s(Object(o.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "selectPaymentMethod", (function() {
				return o
			})), n.d(t, "paymentCompleted", (function() {
				return l
			})), n.d(t, "cardNameInput", (function() {
				return d
			})), n.d(t, "postalCodeInput", (function() {
				return u
			})), n.d(t, "cardNameEmpty", (function() {
				return m
			})), n.d(t, "postalCodeEmpty", (function() {
				return p
			})), n.d(t, "cardNumberChange", (function() {
				return f
			})), n.d(t, "cardExpiryChange", (function() {
				return b
			})), n.d(t, "cardCvcChange", (function() {
				return g
			})), n.d(t, "stripeTokenPending", (function() {
				return h
			})), n.d(t, "stripeTokenError", (function() {
				return y
			})), n.d(t, "stripeApiError", (function() {
				return v
			})), n.d(t, "validateAndCreateStripeToken", (function() {
				return O
			})), n.d(t, "paypalApiError", (function() {
				return j
			})), n.d(t, "toggleRememberCard", (function() {
				return E
			})), n.d(t, "selectSavedCard", (function() {
				return C
			})), n.d(t, "deleteSavedCard", (function() {
				return k
			})), n.d(t, "savedCardsPending", (function() {
				return _
			})), n.d(t, "savedCardsSuccess", (function() {
				return x
			}));
			var r = n("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				a = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const o = Object(s.a)(i.G),
				l = Object(s.a)(i.A),
				d = Object(s.a)(i.b),
				u = Object(s.a)(i.D),
				m = Object(s.a)(i.a),
				p = Object(s.a)(i.C),
				f = Object(s.a)(i.L),
				b = Object(s.a)(i.K),
				g = Object(s.a)(i.J),
				h = Object(s.a)(i.N),
				y = Object(s.a)(i.M),
				v = Object(s.a)(i.I),
				O = (e, t) => async (n, s) => {
					const i = s(),
						o = Object(c.h)(i),
						l = Object(c.l)(i),
						d = t.getElement(r.CardNumberElement);
					if (!d) return;
					const {
						token: u,
						error: f
					} = await e.createToken(d, {
						name: o,
						address_zip: l
					}), b = !l.trim();
					if (b) {
						const e = a.fbt._("Your ZIP code is incomplete", null, {
							hk: "4bttPr"
						});
						n(p({
							message: e
						}))
					}
					f && n(y(f));
					const g = !o.trim();
					if (g) {
						const e = a.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						n(m({
							message: e
						}))
					}
					return b || f || g ? void 0 : u
				}, j = Object(s.a)(i.B), E = Object(s.a)(i.O), C = Object(s.a)(i.H), k = Object(s.a)(i.g), _ = Object(s.a)(i.E), x = Object(s.a)(i.F)
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "a", (function() {
				return k
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/env/index.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/sentry/index.ts"),
				i = n("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				o = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/actions/post.ts"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				m = n("./src/reddit/actions/economics/powerups/helpers.ts"),
				p = n("./src/redditGQL/operations/PurchaseCatalogProductOffers.json");
			var f = n("./src/reddit/selectors/gold/productOffers.ts"),
				b = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				g = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			Object(s.a)(g.m);
			const h = Object(s.a)(g.o),
				y = Object(s.a)(g.n),
				v = Object(s.a)(g.i),
				O = Object(s.a)(g.j),
				j = e => async (t, n, s) => {
					let {
						gqlContext: i
					} = s;
					const o = n(),
						l = !(!Object(f.a)(o) && !Object(b.i)(o)[0]);
					if ((null == e ? void 0 : e.forceLoad) || !l) {
						t(h());
						try {
							const e = await (async e => {
								const t = await Object(u.a)(e, {
									...p
								});
								if (!t.ok) {
									const {
										errors: e
									} = t.body, n = Object(m.a)(e);
									throw new Error(n || "Unknown error in requestPurchaseCatalogProductOffers")
								}
								return t.body
							})(i());
							t(v(e.data.coinpacks.offers[0])), t(O(e.data.premium.offers[0]))
						} catch (d) {
							Object(a.b)() || console.error(d), c.c.captureException(d);
							const e = r.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(y(e))
						}
					}
				}, E = () => async e => e(j()), C = Object(s.a)(g.h), k = () => async (e, t, n) => {
					let {
						gqlContext: s
					} = n;
					var u, m;
					try {
						const t = await Object(i.a)(s());
						if (t.ok) {
							const n = t.body.data.claimAwardOffer;
							if (null === (u = n.errors) || void 0 === u ? void 0 : u.length) throw new Error(n.errors.map(e => e.message).join(" | "));
							if (!(null === (m = n.awards) || void 0 === m ? void 0 : m.length)) throw new Error("Got empty award list on free award offer claim");
							if (!n.ok) throw new Error("Got not ok response on free award offer claim");
							await e(C({
								awards: n.awards
							})), e(Object(d.A)())
						}
					} catch (p) {
						Object(a.b)() || console.error(p), e(Object(o.f)({
							kind: l.b.Error,
							text: r.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), c.c.captureException(p)
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
				s = n("./src/reddit/components/CollapsibleFAQ/index.m.less"),
				c = n.n(s),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
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
						buttonContentClassName: t,
						question: n,
						children: r
					} = this.props, {
						isOpen: s
					} = this.state, d = s ? c.a.isOpen : "";
					return a.a.createElement("div", {
						className: Object(i.a)(e, c.a.collapsibleFAQ)
					}, a.a.createElement("button", {
						className: c.a.questionButton,
						type: "button",
						onClick: this.toggleOpen
					}, a.a.createElement("span", {
						className: Object(i.a)(c.a.buttonContent, t),
						tabIndex: -1
					}, n, s ? a.a.createElement(l.a, {
						className: c.a.collapseIcon
					}) : a.a.createElement(o.a, {
						className: c.a.collapseIcon
					}))), a.a.createElement("div", {
						className: Object(i.a)(c.a.collapsibleAnswer, d)
					}, r))
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
				i = n.n(c);
			t.a = e => {
				const {
					children: t,
					className: n,
					icon: r,
					isMobileStyled: c,
					title: o
				} = e;
				return a.a.createElement("div", {
					className: Object(s.a)(n, {
						[i.a.isMobileStyled]: c
					})
				}, a.a.createElement("div", {
					className: i.a.iconContainer
				}, r), a.a.createElement("div", {
					className: i.a.textContainer
				}, a.a.createElement("h3", {
					className: i.a.title
				}, o), a.a.createElement("p", {
					className: i.a.content
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
				i = n("./src/lib/classNames/index.ts");
			const {
				fbt: o
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => a.a.createElement("div", {
				className: Object(i.a)(e.className, c.a.marketingPageFooter)
			}, a.a.createElement("div", {
				className: Object(i.a)(e.className, c.a.marketingPageFooterInner)
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
				href: "https://www.redditinc.com/"
			}, o._("about", null, {
				hk: "3IO4c7"
			}))), a.a.createElement("li", {
				className: c.a.linkItem
			}, a.a.createElement("a", {
				className: c.a.link,
				href: "https://www.redditinc.com/careers"
			}, o._("careers", null, {
				hk: "2GATRU"
			}))), a.a.createElement("li", {
				className: c.a.linkItem
			}, a.a.createElement("a", {
				className: c.a.link,
				href: "https://www.redditinc.com/press"
			}, o._("press", null, {
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
			}, o._("advertise", null, {
				hk: "RYuIn"
			}))), a.a.createElement("li", {
				className: c.a.linkItem
			}, a.a.createElement("a", {
				className: c.a.link,
				href: "http://www.redditblog.com/"
			}, o._("blog", null, {
				hk: "4xzWuA"
			}))), a.a.createElement("li", {
				className: c.a.linkItem
			}, a.a.createElement("a", {
				className: c.a.link,
				href: "https://www.reddithelp.com"
			}, o._("help", null, {
				hk: "36XyzA"
			}))))), a.a.createElement("div", {
				className: Object(i.a)(c.a.linkCol, c.a.linkBoldCol)
			}, a.a.createElement("ul", {
				className: c.a.linkColInner
			}, a.a.createElement("li", {
				className: c.a.linkItem
			}, a.a.createElement("a", {
				className: c.a.link,
				href: "https://www.reddit.com/premium"
			}, o._("reddit premium", null, {
				hk: "3vPbLO"
			}))))), a.a.createElement("div", {
				className: Object(i.a)(c.a.linkCol, c.a.linkBoldCol)
			}, a.a.createElement("ul", {
				className: c.a.linkColInner
			}, a.a.createElement("li", {
				className: c.a.linkItem
			}, a.a.createElement("a", {
				className: c.a.link,
				href: "https://www.facebook.com/reddit/"
			}, o._("Facebook", null, {
				hk: "47DT2F"
			}))), a.a.createElement("li", {
				className: c.a.linkItem
			}, a.a.createElement("a", {
				className: c.a.link,
				href: "https://twitter.com/reddit"
			}, o._("Twitter", null, {
				hk: "3aUv7u"
			}))), a.a.createElement("li", {
				className: c.a.linkItem
			}, a.a.createElement("a", {
				className: c.a.link,
				href: "https://www.instagram.com/reddit/"
			}, o._("Instagram", null, {
				hk: "dVIRX"
			})))))), a.a.createElement("ul", {
				className: c.a.legal
			}, a.a.createElement("li", {
				className: c.a.legalItem
			}, a.a.createElement("a", {
				className: c.a.legalLink,
				href: "https://www.redditinc.com/policies/content-policy"
			}, o._("content policy", null, {
				hk: "4ptiaZ"
			}))), a.a.createElement("li", {
				className: c.a.legalItem
			}, a.a.createElement("a", {
				className: c.a.legalLink,
				href: "https://www.reddit.com/help/privacypolicy"
			}, o._("privacy policy", null, {
				hk: "1ybjnz"
			}))), a.a.createElement("li", {
				className: c.a.legalItem
			}, a.a.createElement("a", {
				className: c.a.legalLink,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, o._("user agreement", null, {
				hk: "4puRxC"
			}))), a.a.createElement("li", {
				className: c.a.legalItem
			}, a.a.createElement("a", {
				className: c.a.legalLink,
				href: "https://www.reddit.com/help/healthycommunities/"
			}, o._("mod policy", null, {
				hk: "1VvAdM"
			}))), a.a.createElement("li", {
				className: c.a.legalItem
			}, o._("Reddit, Inc. © {year}. All rights reserved.", [o._param("year", (new Date).getFullYear().toString())], {
				hk: "4fplqp"
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
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/timeAgo/index.ts"),
				l = n("./src/reddit/icons/svgs/Clock/index.tsx");
			t.a = e => {
				const {
					className: t,
					expirationDate: n
				} = e, r = Math.floor(n.getTime() / 1e3), s = Object(o.b)(r);
				return a.a.createElement("div", {
					className: Object(i.a)(t)
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
				return f
			}));
			var r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				s = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				o = n("./src/reddit/endpoints/gold/purchase.ts");
			const l = async e => {
				let {
					buttonId: t,
					context: n,
					correlationId: l
				} = e;
				const d = {
						button_id: t,
						correlation_id: l
					},
					u = `${n.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					m = Object(i.a)(u);
				return Object(a.a)(Object(s.a)(n, [c.a]), {
					method: r.nb.POST,
					endpoint: m,
					data: d
				}).then(o.a)
			}, d = async e => {
				let {
					context: t,
					coins: n,
					pennies: i,
					correlationId: l
				} = e;
				const d = {
					coins: n,
					pennies: i,
					correlation_id: l
				};
				return Object(a.a)(Object(s.a)(t, [c.a]), {
					method: r.nb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(o.a)
			}, u = async e => {
				let {
					context: t,
					awardId: n,
					pennies: i,
					thingId: l,
					correlationId: d
				} = e;
				const u = {
					award_id: n,
					correlation_id: d,
					pennies: i,
					thing_id: l
				};
				return Object(a.a)(Object(s.a)(t, [c.a]), {
					method: r.nb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: u
				}).then(o.a)
			}, m = async e => {
				let {
					context: t,
					offerContext: n,
					orderId: i,
					coins: l,
					pennies: d,
					correlationId: u
				} = e;
				const m = {
					offer_context: n,
					order_id: i,
					coins: l,
					pennies: d,
					correlation_id: u
				};
				return Object(a.a)(Object(s.a)(t, [c.a]), {
					method: r.nb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: m
				}).then(o.a)
			}, p = async e => {
				let {
					awardId: t,
					context: n,
					coins: i,
					correlationId: l,
					isAnonymous: d,
					message: u,
					offerContext: m,
					orderId: p,
					pennies: f,
					thingId: b
				} = e;
				const g = {
					award_id: t,
					coins: i,
					correlation_id: l,
					is_anonymous: d,
					message: u,
					offer_context: m,
					order_id: p,
					pennies: f,
					thing_id: b
				};
				return Object(a.a)(Object(s.a)(n, [c.a]), {
					method: r.nb.POST,
					endpoint: `${n.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: g
				}).then(o.a)
			}, f = async e => {
				let {
					awardId: t,
					context: n,
					correlationId: i,
					isAnonymous: l,
					message: d,
					orderId: u,
					thingId: m
				} = e;
				const p = {
					award_id: t,
					correlation_id: i,
					is_anonymous: l,
					message: d,
					order_id: u,
					thing_id: m
				};
				return Object(a.a)(Object(s.a)(n, [c.a]), {
					method: r.nb.POST,
					endpoint: `${n.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: p
				}).then(o.a)
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
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
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

			function i(e, t) {
				const n = new r.BigNumber(e),
					a = new r.BigNumber(t || 1);
				return n.multipliedBy(a).toFixed(0)
			}

			function o(e) {
				const t = new r.BigNumber(e),
					n = new r.BigNumber("1e18");
				return t.dividedBy(n).toString()
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
				return i
			}));
			var r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/helpers/styles/mixins/loading.m.less"),
				s = n.n(a);
			const c = e => {
					let {
						isLoading: t
					} = e;
					return Object(r.a)(s.a.loadingBackground, {
						[s.a["m-loading"]]: t
					})
				},
				i = e => Object(r.a)(s.a.loadingBar, c(e))
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
				s = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/svgs/Clock/index.m.less"),
				i = n.n(c);
			t.a = e => a.a.createElement("svg", {
				className: Object(s.a)(i.a.clock, e.className),
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
				viewBox: "0 0 516 96",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("circle", {
				fill: "#ff4500",
				cx: "48",
				cy: "48",
				r: "48"
			}), a.a.createElement("path", {
				fill: "#fff",
				d: "M79.992,48a7,7,0,0,0-11.855-5.036,34.261,34.261,0,0,0-18.72-5.939l3.189-15,10.418,2.215a5.008,5.008,0,1,0,.512-2.447L51.9,19.318a1.25,1.25,0,0,0-1.483.963l-3.561,16.74a34.368,34.368,0,0,0-18.994,5.93,7,7,0,1,0-7.706,11.432,13.771,13.771,0,0,0-.167,2.117c0,10.77,12.536,19.5,28,19.5s28-8.73,28-19.5a13.851,13.851,0,0,0-.164-2.1A7,7,0,0,0,79.992,48ZM32,53a5,5,0,1,1,5,5A5.007,5.007,0,0,1,32,53ZM59.88,66.212c-3.412,3.408-9.951,3.673-11.874,3.673s-8.463-.265-11.872-3.673a1.3,1.3,0,1,1,1.833-1.832c2.151,2.151,6.752,2.914,10.039,2.914s7.889-.764,10.043-2.915a1.3,1.3,0,1,1,1.831,1.833ZM59,58a5,5,0,1,1,5-5A5.006,5.006,0,0,1,59,58Z"
			}), a.a.createElement("path", {
				fill: "#ff4500",
				d: "M157.1,75.454H144.637l-9.8-17.217q-1.416.069-2.157.068h-4.11V75.454H117.515V25.793h17.924a20.921,20.921,0,0,1,8.861,1.8,14.209,14.209,0,0,1,6.132,5.238,14.742,14.742,0,0,1,2.223,8.187,16.721,16.721,0,0,1-1.971,8.07,15.976,15.976,0,0,1-5.643,5.979ZM128.566,49.31h5.559a9.153,9.153,0,0,0,4.009-.843,6.444,6.444,0,0,0,2.729-2.392,6.61,6.61,0,0,0,.977-3.605,6.53,6.53,0,0,0-.994-3.6,6.46,6.46,0,0,0-2.83-2.392,10.222,10.222,0,0,0-4.295-.842h-5.155Z"
			}), a.a.createElement("path", {
				fill: "#ff4500",
				d: "M190.659,60.765H166.267a9.356,9.356,0,0,0,3.453,4.969,9.772,9.772,0,0,0,5.913,1.8,16.426,16.426,0,0,0,4.885-.774,12.255,12.255,0,0,0,3.841-1.82l3.3,7.952a17.24,17.24,0,0,1-5.223,2.256,25.442,25.442,0,0,1-6.637.843,20.944,20.944,0,0,1-10.141-2.358,16.56,16.56,0,0,1-6.7-6.571,19.369,19.369,0,0,1-2.359-9.635,19.506,19.506,0,0,1,2.426-9.821,17.172,17.172,0,0,1,6.519-6.587,17.812,17.812,0,0,1,8.945-2.325,17.062,17.062,0,0,1,8.474,2.14,15.607,15.607,0,0,1,6.03,6.014,17.519,17.519,0,0,1,2.207,8.827A24.352,24.352,0,0,1,190.659,60.765Zm-9.265-6.671a6.819,6.819,0,0,0-1.937-5.121,7.005,7.005,0,0,0-5.1-1.887,7.868,7.868,0,0,0-5.374,1.9,9.209,9.209,0,0,0-2.881,5.105Z"
			}), a.a.createElement("path", {
				fill: "#ff4500",
				d: "M222.464,23.569H233.11V75.454H222.969V71.107H222.8a14.246,14.246,0,0,1-10.984,4.886,16.227,16.227,0,0,1-14.453-8.676,20.341,20.341,0,0,1-2.325-9.956,20.057,20.057,0,0,1,2.409-10.09,16.53,16.53,0,0,1,6.317-6.418,16.889,16.889,0,0,1,8.389-2.19,14.771,14.771,0,0,1,5.576,1.027,13.657,13.657,0,0,1,4.5,2.949h.236Zm-3.892,42.08a8.72,8.72,0,0,0,3.184-3.385,10.184,10.184,0,0,0,1.18-4.936,10.386,10.386,0,0,0-1.129-4.886,8.422,8.422,0,0,0-3.133-3.369,8.588,8.588,0,0,0-4.532-1.213,8.682,8.682,0,0,0-4.532,1.2,8.429,8.429,0,0,0-3.15,3.336,10.152,10.152,0,0,0-1.145,4.868,10.585,10.585,0,0,0,1.128,4.919,8.55,8.55,0,0,0,3.151,3.436,8.81,8.81,0,0,0,8.978.033Z"
			}), a.a.createElement("path", {
				fill: "#ff4500",
				d: "M264.848,23.569h10.646V75.454H265.353V71.107h-.168A14.246,14.246,0,0,1,254.2,75.993a16.227,16.227,0,0,1-14.453-8.676,20.341,20.341,0,0,1-2.325-9.956,20.057,20.057,0,0,1,2.409-10.09,16.53,16.53,0,0,1,6.317-6.418,16.886,16.886,0,0,1,8.389-2.19,14.771,14.771,0,0,1,5.576,1.027,13.657,13.657,0,0,1,4.5,2.949h.236Zm-3.892,42.08a8.728,8.728,0,0,0,3.184-3.385,10.183,10.183,0,0,0,1.179-4.936,10.374,10.374,0,0,0-1.129-4.886,8.412,8.412,0,0,0-3.132-3.369,8.591,8.591,0,0,0-4.532-1.213,8.679,8.679,0,0,0-4.532,1.2,8.422,8.422,0,0,0-3.15,3.336,10.152,10.152,0,0,0-1.145,4.868,10.585,10.585,0,0,0,1.128,4.919,8.55,8.55,0,0,0,3.151,3.436,8.81,8.81,0,0,0,8.978.033Z"
			}), a.a.createElement("path", {
				fill: "#ff4500",
				d: "M284.456,34.148a6.617,6.617,0,0,1-2.342-8.928,6.2,6.2,0,0,1,2.342-2.324,6.561,6.561,0,0,1,3.3-.843,6.493,6.493,0,0,1,3.268,12.1,6.6,6.6,0,0,1-6.57,0Zm8.591,41.306H282.4V39.2h10.646Z"
			}), a.a.createElement("path", {
				fill: "#ff4500",
				d: "M315.418,39.2H323.2v9.063h-7.783V75.454H304.772V48.265h-7.749V39.2h7.749V28.825h10.646Z"
			}), a.a.createElement("path", {
				fill: "#ff4500",
				d: "M351.222,72.675a25.68,25.68,0,0,1-9.821-9.148,24.062,24.062,0,0,1-3.638-13.005,24.013,24.013,0,0,1,3.588-12.9,25.257,25.257,0,0,1,9.7-9.079,27.778,27.778,0,0,1,13.359-3.285,30.8,30.8,0,0,1,7.85,1.027,26.177,26.177,0,0,1,7.21,3.083L375.3,39.2a13.325,13.325,0,0,0-4.683-2.813,17.129,17.129,0,0,0-6-1.062,16.452,16.452,0,0,0-7.85,1.938,15.13,15.13,0,0,0-5.812,5.407,14.481,14.481,0,0,0-2.173,7.85,14.83,14.83,0,0,0,2.156,7.9,15.152,15.152,0,0,0,5.846,5.509,16.74,16.74,0,0,0,8.069,1.987,18.909,18.909,0,0,0,5.929-.96,10.93,10.93,0,0,0,4.65-2.779l4.177,9.8a25.391,25.391,0,0,1-7.108,3,31.1,31.1,0,0,1-7.817,1.011A28.019,28.019,0,0,1,351.222,72.675Z"
			}), a.a.createElement("path", {
				fill: "#ff4500",
				d: "M390.978,73.5a18.732,18.732,0,0,1-6.957-6.772,18.463,18.463,0,0,1-.067-18.648,18.717,18.717,0,0,1,6.873-6.856,18.932,18.932,0,0,1,9.736-2.561,19.255,19.255,0,0,1,9.619,2.477A18.585,18.585,0,0,1,417.14,47.9a18.6,18.6,0,0,1,0,18.833,18.727,18.727,0,0,1-6.958,6.772,19.738,19.738,0,0,1-19.2,0Zm14.15-7.9a9.237,9.237,0,0,0,3.269-3.522,10.013,10.013,0,0,0,1.2-4.817,9.687,9.687,0,0,0-1.213-4.8,9.2,9.2,0,0,0-3.285-3.437,8.761,8.761,0,0,0-9.063,0,9.067,9.067,0,0,0-3.268,3.437,9.712,9.712,0,0,0-1.2,4.767,10.069,10.069,0,0,0,1.2,4.851,9.235,9.235,0,0,0,3.268,3.522,8.628,8.628,0,0,0,9.1,0Z"
			}), a.a.createElement("path", {
				fill: "#ff4500",
				d: "M426.438,34.148A6.463,6.463,0,0,1,424.1,31.79a6.4,6.4,0,0,1-.859-3.269,6.463,6.463,0,0,1,.859-3.3,6.2,6.2,0,0,1,2.341-2.324,6.563,6.563,0,0,1,3.3-.843,6.493,6.493,0,0,1,3.268,12.1,6.3,6.3,0,0,1-3.268.876A6.371,6.371,0,0,1,426.438,34.148Zm8.592,41.306H424.383V39.2H435.03Z"
			}), a.a.createElement("path", {
				fill: "#ff4500",
				d: "M469.749,40.3a10.923,10.923,0,0,1,4.11,4.633,15.386,15.386,0,0,1,1.432,6.771V75.454H464.678V54.06a7.023,7.023,0,0,0-1.532-4.885,5.391,5.391,0,0,0-4.195-1.685,6.3,6.3,0,0,0-4.582,1.736,6.517,6.517,0,0,0-1.786,4.9V75.454H441.937V39.168h10.275v4.784h.27a11.15,11.15,0,0,1,4.548-3.89,14.294,14.294,0,0,1,6.368-1.433A11.78,11.78,0,0,1,469.749,40.3Z"
			}), a.a.createElement("path", {
				fill: "#ff4500",
				d: "M488.161,74.848a16.611,16.611,0,0,1-5.272-3.2,13.576,13.576,0,0,1-3.42-4.682l8.557-3.571a8.694,8.694,0,0,0,2.662,2.981,6.466,6.466,0,0,0,3.874,1.264,5.111,5.111,0,0,0,2.157-.421,3.225,3.225,0,0,0,1.364-1.1,2.434,2.434,0,0,0,.455-1.381q0-1.516-1.971-2.426a29.107,29.107,0,0,0-5.1-1.684q-.776-.236-.943-.27a15.971,15.971,0,0,1-7.109-3.891,9.115,9.115,0,0,1-2.662-6.755,10.085,10.085,0,0,1,1.685-5.728,11.186,11.186,0,0,1,4.632-3.924,15.246,15.246,0,0,1,6.621-1.4,16.8,16.8,0,0,1,5.946,1.044,14.949,14.949,0,0,1,4.8,2.864,11.088,11.088,0,0,1,2.931,4.043l-8.153,3.437a8.4,8.4,0,0,0-1.954-2.14,4.9,4.9,0,0,0-3.167-1.027,4.178,4.178,0,0,0-2.645.825,2.493,2.493,0,0,0-1.061,2.038,2.332,2.332,0,0,0,.977,1.887,8.261,8.261,0,0,0,2.409,1.28q1.431.505,3.958,1.18a28.275,28.275,0,0,1,4.515,1.617,11.518,11.518,0,0,1,3.959,3.167,8.512,8.512,0,0,1,1.836,5.66,10.081,10.081,0,0,1-1.836,5.946,12.178,12.178,0,0,1-4.953,4.06,15.983,15.983,0,0,1-6.822,1.449A17.448,17.448,0,0,1,488.161,74.848Z"
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
			var r, a, s, c;
			n.d(t, "b", (function() {
					return a
				})), n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(a || (a = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(s || (s = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(c || (c = {}))
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
				i = n("./node_modules/react/index.js"),
				o = n.n(i),
				l = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/react-router-redux/es/index.js"),
				u = n("./node_modules/reselect/es/index.js"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/loadRedditAdsPixel.ts"),
				f = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/helpers/correlationIdTracker.ts"),
				g = n("./src/reddit/helpers/trackers/goldPayment.ts");
			const h = "coins_marketing",
				y = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					return {
						...Object(g.h)(e, t),
						correlationId: Object(b.d)(b.a.GoldPayment, !1)
					}
				},
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
			var E = n("./src/reddit/helpers/trackers/screenview.ts"),
				C = n("./src/telemetry/index.ts"),
				k = n("./src/telemetry/models/Timer.ts"),
				_ = n("./src/reddit/pages/CoinsPage/index.m.less"),
				x = n.n(_),
				w = n("./src/reddit/helpers/createEmojiText/index.tsx"),
				P = n("./src/reddit/models/Gold/Award.ts"),
				N = n("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				I = n("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				A = n("./src/reddit/actions/login.ts"),
				S = n("./src/reddit/contexts/PageLayer/index.tsx"),
				T = n("./src/reddit/models/Gold/Coins/index.ts"),
				M = n("./src/reddit/selectors/experiments/econ/index.ts"),
				L = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				B = n("./src/reddit/selectors/user.ts"),
				R = n("./src/reddit/components/CoinPurchasePackage/index.m.less"),
				G = n.n(R),
				D = n("./src/lib/classNames/index.ts"),
				q = n("./src/lib/currency/currencies.ts"),
				V = n("./src/lib/localizeCurrency/index.ts"),
				F = n("./src/reddit/controls/Button/index.tsx"),
				U = n("./src/reddit/hooks/useLocale.ts"),
				H = n("./src/reddit/icons/svgs/Coin/index.tsx"),
				Z = n("./src/reddit/icons/svgs/Stamp/index.tsx");
			var z = e => {
					var t, n;
					const {
						className: r,
						coinPackage: s,
						isLargeView: c,
						onClick: i
					} = e, l = Object(U.a)(), {
						baselineCoins: d,
						baselinePennies: u,
						bonusPct: m,
						coins: p,
						description: f,
						featuredLabel: b,
						images: g,
						pennies: h
					} = s, y = Object(V.b)(h, {
						locale: l
					}), v = Object(V.b)(p, {
						locale: l,
						type: q.b.Reddit,
						currency: q.a
					}), O = c ? null === (t = g.marketing["4x"]) || void 0 === t ? void 0 : t.url : null === (n = g.marketing["2x"]) || void 0 === n ? void 0 : n.url, j = m > 0 && `${Object(V.a)(m,{locale:l})}%`, E = a.fbt._("bonus", null, {
						hk: "L8mcp"
					}), C = c ? G.a.large : "", k = d !== p, _ = u !== h;
					return o.a.createElement("div", {
						className: Object(D.a)(r, G.a.coinPurchasePackage, C)
					}, o.a.createElement("div", {
						className: G.a.imageContainer
					}, o.a.createElement("img", {
						src: O
					}), b && o.a.createElement("div", {
						className: G.a.badge
					}, b), j && o.a.createElement("div", {
						className: G.a.stamp
					}, o.a.createElement(Z.a, {
						className: G.a.stampIcon
					}), o.a.createElement("div", {
						className: G.a.stampValue
					}, j), o.a.createElement("div", {
						className: G.a.stampText
					}, E))), o.a.createElement("div", {
						className: G.a.contentContainer
					}, o.a.createElement("div", {
						className: G.a.contentText
					}, o.a.createElement("div", {
						className: G.a.price
					}, o.a.createElement(H.a, {
						className: G.a.priceCoinIcon
					}), o.a.createElement("div", null, o.a.createElement("div", {
						className: G.a.priceValue
					}, v), k && o.a.createElement("div", {
						className: Object(D.a)(G.a.priceCurrency, G.a.crossout)
					}, Object(V.b)(d, {
						locale: l,
						type: q.b.Reddit,
						currency: q.a
					})))), o.a.createElement("div", {
						className: G.a.description
					}, f)), o.a.createElement("div", null, o.a.createElement(F.t, {
						kind: F.b.Button,
						priority: F.c.Primary,
						className: G.a.cta,
						onClick: i
					}, y), _ && o.a.createElement("div", {
						className: G.a.priceCrossout
					}, Object(V.b)(u, {
						locale: l
					})))))
				},
				Y = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				Q = n("./src/reddit/components/CoinPurchasePackage/placeholder.m.less"),
				X = n.n(Q);
			var W = e => {
					let {
						className: t,
						isLargeView: n,
						...r
					} = e;
					const a = n ? X.a.large : "",
						s = Object(Y.b)(r);
					return o.a.createElement("div", {
						className: Object(D.a)(s, X.a.packagePlaceholder, a, t)
					})
				},
				J = n("./src/reddit/components/CollapsibleFAQ/index.tsx"),
				K = n("./src/reddit/components/GildMarketingDescription/index.tsx"),
				$ = n("./src/reddit/components/MarketingPageFooter/index.tsx"),
				ee = n("./src/reddit/components/PremiumMarketingBanner/index.m.less"),
				te = n.n(ee);
			const {
				fbt: ne
			} = n("./node_modules/fbt/lib/FbtPublic.js"), re = e => {
				const {
					className: t,
					isPremiumSubscriber: n,
					onGetPremium: a,
					onManagePremium: s,
					premiumPackage: c
				} = e, {
					periodicalCoins: i
				} = c, l = i.toLocaleString(), d = `${r.a.assetPath}/img/gold/coins-premium-g.png`;
				return o.a.createElement("div", {
					className: Object(D.a)(te.a.premiumBanner, t)
				}, o.a.createElement("img", {
					className: te.a.premiumCrest,
					src: d
				}), o.a.createElement("h2", {
					className: te.a.premiumDescription
				}, ne._("Get {Number of monthly coins} coins every month with Reddit Premium and browse ads-free", [ne._param("Number of monthly coins", l)], {
					hk: "42dB3q"
				})), n ? o.a.createElement(F.l, {
					className: te.a.premiumCTA,
					onClick: s
				}, ne._("Manage", null, {
					hk: "4BQsAp"
				})) : o.a.createElement(F.l, {
					className: te.a.premiumCTA,
					onClick: a
				}, ne._("Upgrade", null, {
					hk: "1Zf2Sh"
				})))
			};
			var ae = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				se = n("./src/reddit/icons/svgs/RedditCoinsLogo/index.tsx"),
				ce = n("./src/reddit/components/TimeLeft/TimeLeft.tsx"),
				ie = n("./src/reddit/pages/CoinsPage/HeroSection/index.m.less"),
				oe = n.n(ie);
			const {
				fbt: le
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var de = o.a.memo(e => {
				Object(i.useEffect)(() => {
					(new Image).src = `${r.a.assetPath}/img/gold/coins-hero.jpg`
				}, []);
				const {
					activeSaleConfig: t,
					isLoading: n,
					onClickGetCoins: a
				} = e;
				if (n) return o.a.createElement("div", {
					className: oe.a.hero
				});
				if (t) {
					const {
						endsAt: e,
						heroImageUrl: n,
						heroSubtext: r,
						heroText: a
					} = t;
					return o.a.createElement("div", {
						className: oe.a.hero,
						style: {
							backgroundImage: `url("${n}")`
						}
					}, o.a.createElement("div", {
						className: oe.a.heroInner
					}, o.a.createElement("h1", {
						className: Object(D.a)(oe.a.heroTitle, oe.a.activeSale)
					}, a), o.a.createElement("p", {
						className: Object(D.a)(oe.a.heroDescription, oe.a.activeSale)
					}, r), e && o.a.createElement(ce.a, {
						className: oe.a.expiresText,
						expirationDate: new Date(1e3 * e)
					})))
				}
				return o.a.createElement("div", {
					className: oe.a.hero,
					style: {
						backgroundImage: `url("${r.a.assetPath}/img/gold/coins-hero.jpg")`
					}
				}, o.a.createElement("div", {
					className: oe.a.heroInner
				}, o.a.createElement("h1", {
					className: oe.a.heroTitle
				}, o.a.createElement(se.a, {
					className: oe.a.heroLogo
				})), o.a.createElement("p", {
					className: oe.a.heroDescription
				}, le._("Coins are a virtual good you can use to award exemplary posts or comments. Support Reddit and encourage your favorite contributors to keep making Reddit better.", null, {
					hk: "3rPVMo"
				})), o.a.createElement(F.g, {
					className: oe.a.heroCTA,
					onClick: a
				}, le._("Get Coins", null, {
					hk: "2YmtPc"
				}))))
			});
			const ue = Object(S.v)(),
				me = Object(u.c)({
					activeSaleConfig: L.a,
					coinPackages: L.d,
					isCoinsSunset: M.d,
					isPremiumSubscriber: B.y,
					isLoggedIn: B.S,
					premiumPackages: L.i,
					purchaseCatalogPending: L.l
				}),
				pe = Object(l.b)(me, (e, t) => ({
					onRouteToManagePremium: () => e(Object(d.b)("/settings/gold")),
					onRouteToPremium: () => e(Object(d.b)("/premium")),
					onOpenLoginModal: () => e(Object(A.openLoginModal)()),
					onPurchasePackage: (t, n) => e(Object(N.b)({
						correlationId: n,
						packageId: t.mobileId
					})),
					requestPurchaseCatalog: t => e(Object(I.b)({
						correlationId: t
					}))
				}));
			class fe extends o.a.Component {
				constructor() {
					super(...arguments), this.correlationId = Object(b.d)(b.a.GoldPayment, !1), this.purchaseSection = o.a.createRef(), this.perksSection = o.a.createRef(), this.onClickGetCoins = () => {
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
					const r = m.Sb.COINS;
					C.c.has(r) && (this.props.sendEvent(Object(E.b)(k.TimerType.InApp, C.c.end(r))), this.props.sendEvent(Object(E.a)())), Object(p.a)()
				}
				render() {
					const {
						activeSaleConfig: e,
						className: t,
						isCoinsSunset: n,
						purchaseCatalogPending: r
					} = this.props;
					return n ? null : o.a.createElement("div", {
						className: t
					}, o.a.createElement(de, {
						activeSaleConfig: e,
						isLoading: r,
						onClickGetCoins: this.onClickGetCoins
					}), this.renderGildBreakdown(), this.renderPurchase(), this.renderFAQSection(), o.a.createElement($.a, null))
				}
				renderGildBreakdown() {
					return o.a.createElement("div", {
						className: x.a.detailGridSection,
						ref: this.perksSection
					}, o.a.createElement("h2", {
						className: x.a.detailTitle
					}, a.fbt._("Here’s what you can buy with coins", null, {
						hk: "4kIMr0"
					})), o.a.createElement("p", {
						className: x.a.detailDesription
					}, a.fbt._("Spend your coins on these Awards reserved exclusively for the finest Reddit contributors. Awarding a post or comment highlights it for all to see, and some Awards also grant the honoree special bonuses.", null, {
						hk: "3eScNB"
					})), o.a.createElement("div", {
						className: x.a.gridContainer
					}, o.a.createElement(K.a, {
						className: x.a.gridItem,
						icon: o.a.createElement("img", {
							src: `${r.a.assetPath}/img/gold/badges/award-silver-large.png`
						}),
						title: a.fbt._("Silver Award", null, {
							hk: "2h79np"
						})
					}, Object(w.a)(a.fbt._("Shows a Silver Award on the post or comment and ... that’s it. You’ll need {Coin price placeholder} Coins.", [a.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "zbXx9"
					}), {
						":coin_price:": o.a.createElement("span", {
							className: x.a.nowrap
						}, o.a.createElement(ae.a, null), P.r.coinPrice)
					})), o.a.createElement(K.a, {
						className: x.a.gridItem,
						icon: o.a.createElement("img", {
							src: `${r.a.assetPath}/img/gold/badges/award-gold-large.png`
						}),
						title: a.fbt._("Gold Award", null, {
							hk: "1oYdz0"
						})
					}, Object(w.a)(a.fbt._("Gives {Coin benefit placeholder} Reddit Coins and a week of r/lounge access and ad-free browsing. You’ll need {Coin price placeholder} coins.", [a.fbt._param("Coin benefit placeholder", ":coin_benefit:"), a.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "rxGC9"
					}), {
						":coin_benefit:": o.a.createElement("span", {
							className: x.a.nowrap
						}, o.a.createElement(ae.a, null), "100"),
						":coin_price:": o.a.createElement("span", {
							className: x.a.nowrap
						}, o.a.createElement(ae.a, null), P.o.coinPrice)
					})), o.a.createElement(K.a, {
						className: x.a.gridItem,
						icon: o.a.createElement("img", {
							src: `${r.a.assetPath}/img/gold/badges/award-platinum-large.png`
						}),
						title: a.fbt._("Platinum Award", null, {
							hk: "3nCEqM"
						})
					}, Object(w.a)(a.fbt._("Gives a month of r/lounge access and ad-free browsing, and {Coin benefit placeholder} Reddit Coins for that month. You’ll need {Coin price placeholder} coins.", [a.fbt._param("Coin benefit placeholder", ":coin_benefit:"), a.fbt._param("Coin price placeholder", ":coin_price:")], {
						hk: "375Nna"
					}), {
						":coin_benefit:": o.a.createElement("span", {
							className: x.a.nowrap
						}, o.a.createElement(ae.a, null), "700"),
						":coin_price:": o.a.createElement("span", {
							className: x.a.nowrap
						}, o.a.createElement(ae.a, null), P.q.coinPrice)
					}))))
				}
				renderPurchase() {
					const {
						coinPackages: e,
						isCoinsSunset: t,
						isPremiumSubscriber: n,
						onRouteToManagePremium: a,
						premiumPackages: s,
						purchaseCatalogPending: i
					} = this.props, l = s.length ? s[0] : void 0;
					return o.a.createElement("div", {
						className: x.a.purchasePackagesSection,
						ref: this.purchaseSection,
						style: {
							backgroundImage: `url("${r.a.assetPath}/img/gold/coins-premium-bg.jpg")`
						}
					}, o.a.createElement("h2", {
						className: x.a.purchaseTitle
					}, o.a.createElement(se.a, {
						className: x.a.purchaseLogo
					})), o.a.createElement("div", {
						className: x.a.purchasePackages
					}, i ? c()(5, e => o.a.createElement(W, {
						className: x.a.purchasePackage,
						isLargeView: 0 === e,
						isLoading: !0,
						key: e
					})) : e.map(e => o.a.createElement(z, {
						className: x.a.purchasePackage,
						coinPackage: e,
						isLargeView: e.featured,
						key: e.mobileId,
						onClick: () => this.onClickPurchase(e)
					})), !t && l && o.a.createElement(re, {
						isPremiumSubscriber: n,
						onGetPremium: this.onClickGetPremium,
						onManagePremium: a,
						premiumPackage: l
					})))
				}
				renderFAQSection() {
					return o.a.createElement("div", {
						className: x.a.faqsSection
					}, o.a.createElement("h2", {
						className: x.a.faqsTitle
					}, a.fbt._("Coins FAQ", null, {
						hk: "21x0aE"
					})), o.a.createElement("div", {
						className: x.a.faqs
					}, T.a.map((e, t) => o.a.createElement(J.a, {
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
			n.d(t, "g", (function() {
				return o
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "i", (function() {
				return m
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "e", (function() {
				return h
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/makeProductOfferKey/index.ts"),
				s = n("./src/reddit/models/Gold/ProductOffer.ts"),
				c = n("./src/reddit/models/Payments/index.ts"),
				i = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const o = e => e.subreddits.api.productOffers.pending,
				l = (e, t) => {
					let {
						subredditId: n,
						type: r
					} = t;
					var s, c, i;
					return n ? e.subreddits.productOffers[Object(a.a)(r, n)] : null === (i = null === (c = null === (s = e.features) || void 0 === s ? void 0 : s.goldPurchase) || void 0 === c ? void 0 : c.productOffers) || void 0 === i ? void 0 : i[Object(a.a)(r)]
				},
				d = e => {
					const t = l(e, {
						type: s.c.Coinpack
					});
					return null == t ? void 0 : t[0]
				},
				u = e => {
					const t = l(e, {
						type: s.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				m = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === c.b.PayPal || e[0] === c.b.Stripe)(e.requiredPaymentProviders)) : null,
				p = Object(r.a)(u, i.q, (e, t) => m(e, t) || null),
				f = Object(r.a)(p, (e, t) => {
					let {
						provider: n
					} = t;
					return n
				}, (e, t) => null == e ? void 0 : e.find(e => {
					var n;
					return (null === (n = e.requiredPaymentProviders) || void 0 === n ? void 0 : n[0]) === t
				})),
				b = Object(r.a)(p, e => (null == e ? void 0 : e[0].price) || null),
				g = Object(r.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				h = Object(r.a)(g, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/redditGQL/operations/PurchaseCatalogProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"098518521d5b"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Coins.9a7e831d0e26e2bd113a.js.map