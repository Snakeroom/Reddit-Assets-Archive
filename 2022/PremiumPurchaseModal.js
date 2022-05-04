// https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.09debb5dfe782cfb598d.js
// Retrieved at 5/4/2022, 10:10:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PremiumPurchaseModal"], {
		"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js": function(e, t, r) {
			! function(e, t) {
				"use strict";
				t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
				var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

				function n() {}

				function a() {}
				a.resetWarningCache = n;
				var o = function(e, t) {
					return e(t = {
						exports: {}
					}, t.exports), t.exports
				}((function(e) {
					e.exports = function() {
						function e(e, t, n, a, o, c) {
							if (c !== r) {
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
							checkPropTypes: a,
							resetWarningCache: n
						};
						return o.PropTypes = o, o
					}()
				}));

				function c(e) {
					return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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
								a = !1,
								o = void 0;
							try {
								for (var c, s = e[Symbol.iterator](); !(n = (c = s.next()).done) && (r.push(c.value), !t || r.length !== t); n = !0);
							} catch (i) {
								a = !0, o = i
							} finally {
								try {
									n || null == s.return || s.return()
								} finally {
									if (a) throw o
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
						return null !== e && "object" === c(e)
					},
					f = function(e, t, r) {
						return p(e) ? Object.keys(e).reduce((function(n, a) {
							var o = !p(t) || ! function e(t, r) {
								if (!p(t) || !p(r)) return t === r;
								var n = Array.isArray(t);
								if (n !== Array.isArray(r)) return !1;
								var a = "[object Object]" === Object.prototype.toString.call(t);
								if (a !== ("[object Object]" === Object.prototype.toString.call(r))) return !1;
								if (!a && !n) return !1;
								var o = Object.keys(t),
									c = Object.keys(r);
								if (o.length !== c.length) return !1;
								for (var s = {}, i = 0; i < o.length; i += 1) s[o[i]] = !0;
								for (var d = 0; d < c.length; d += 1) s[c[d]] = !0;
								var l = Object.keys(s);
								if (l.length !== o.length) return !1;
								var u = t,
									m = r;
								return l.every((function(t) {
									return e(u[t], m[t])
								}))
							}(e[a], t[a]);
							return r.includes(a) ? (o && console.warn("Unsupported prop change: options.".concat(a, " is not a mutable property.")), n) : o ? d(d({}, n || {}), {}, s({}, a, e[a])) : n
						}), null) : null
					},
					b = function(e) {
						if (null === e || p(t = e) && "function" == typeof t.elements && "function" == typeof t.createToken && "function" == typeof t.createPaymentMethod && "function" == typeof t.confirmCardPayment) return e;
						var t;
						throw new Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
					},
					y = function(e) {
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
				var g = function(e) {
					var r = e.stripe,
						n = e.options,
						a = e.children,
						o = t.useRef(!1),
						c = t.useRef(!0),
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
						p = m(r);
					null !== p && p !== r && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), o.current || ("sync" === s.tag && (o.current = !0, u({
						stripe: s.stripe,
						elements: s.stripe.elements(n)
					})), "async" === s.tag && (o.current = !0, s.stripePromise.then((function(e) {
						e && c.current && u({
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
					}), [d.stripe]), t.createElement(h.Provider, {
						value: d
					}, a)
				};
				g.propTypes = {
					stripe: o.any,
					options: o.object
				};
				var v = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(h), e)
					},
					P = function(e) {
						return (0, e.children)(v("mounts <ElementsConsumer>"))
					};
				P.propTypes = {
					children: o.func.isRequired
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
					O = function() {},
					j = function(e, r) {
						var n, a = "".concat((n = e).charAt(0).toUpperCase() + n.slice(1), "Element"),
							c = r ? function(e) {
								v("mounts <".concat(a, ">"));
								var r = e.id,
									n = e.className;
								return t.createElement("div", {
									id: r,
									className: n
								})
							} : function(r) {
								var n = r.id,
									o = r.className,
									c = r.options,
									s = void 0 === c ? {} : c,
									i = r.onBlur,
									d = void 0 === i ? O : i,
									l = r.onFocus,
									u = void 0 === l ? O : l,
									p = r.onReady,
									b = void 0 === p ? O : p,
									y = r.onChange,
									h = void 0 === y ? O : y,
									g = r.onEscape,
									P = void 0 === g ? O : g,
									j = r.onClick,
									E = void 0 === j ? O : j,
									x = v("mounts <".concat(a, ">")).elements,
									w = t.useRef(null),
									_ = t.useRef(null),
									k = C(b),
									S = C(d),
									N = C(u),
									I = C(E),
									T = C(h),
									A = C(P);
								t.useLayoutEffect((function() {
									if (null == w.current && x && null != _.current) {
										var t = x.create(e, s);
										w.current = t, t.mount(_.current), t.on("ready", (function() {
											return k(t)
										})), t.on("change", T), t.on("blur", S), t.on("focus", N), t.on("escape", A), t.on("click", I)
									}
								}));
								var M = m(s);
								return t.useEffect((function() {
									if (w.current) {
										var e = f(s, M, ["paymentRequest"]);
										e && w.current.update(e)
									}
								}), [s, M]), t.useLayoutEffect((function() {
									return function() {
										w.current && w.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: o,
									ref: _
								})
							};
						return c.propTypes = {
							id: o.string,
							className: o.string,
							onChange: o.func,
							onBlur: o.func,
							onFocus: o.func,
							onReady: o.func,
							onClick: o.func,
							options: o.object
						}, c.displayName = a, c.__elementType = e, c
					},
					E = "undefined" == typeof window,
					x = j("auBankAccount", E),
					w = j("card", E),
					_ = j("cardNumber", E),
					k = j("cardExpiry", E),
					S = j("cardCvc", E),
					N = j("fpxBank", E),
					I = j("iban", E),
					T = j("idealBank", E),
					A = j("p24Bank", E),
					M = j("epsBank", E),
					R = j("payment", E),
					F = j("paymentRequestButton", E),
					G = j("linkAuthentication", E),
					L = j("shippingAddress", E),
					B = j("afterpayClearpayMessage", E);
				e.AfterpayClearpayMessageElement = B, e.AuBankAccountElement = x, e.CardCvcElement = S, e.CardElement = w, e.CardExpiryElement = k, e.CardNumberElement = _, e.Elements = g, e.ElementsConsumer = P, e.EpsBankElement = M, e.FpxBankElement = N, e.IbanElement = I, e.IdealBankElement = T, e.LinkAuthenticationElement = G, e.P24BankElement = A, e.PaymentElement = R, e.PaymentRequestButtonElement = F, e.ShippingAddressElement = L, e.useElements = function() {
					return v("calls useElements()").elements
				}, e.useStripe = function() {
					return v("calls useStripe()").stripe
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
				return o
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "a", (function() {
				return s
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
			const o = "USD",
				c = "ETH",
				s = "COINS",
				i = [c, "BTC"],
				d = [s, "SUBREDDIT_POINTS", "GAME_TOKENS"],
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
		"./src/lib/loadRedditAdsPixel.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/lib/sentry/index.ts");

			function a() {
				! function(e, t) {
					if (!e.rdt) {
						var r = e.rdt = function() {
							r.sendEvent ? r.sendEvent.apply(r, arguments) : r.callQueue.push(arguments)
						};
						r.callQueue = [];
						var n = t.createElement("script");
						n.src = "https://www.redditstatic.com/ads/pixel.js", n.async = !0;
						var a = t.getElementsByTagName("script")[0];
						a.parentNode.insertBefore(n, a)
					}
				}(window, document), rdt("init", "t2_2q2gwo2t"), rdt("track", "PageVisit")
			}
			const o = () => {
				try {
					rdt("track", "Purchase")
				} catch (e) {
					n.c.captureMessage('Attempted to fire RedditAds "Purchase" pixel, but global "rdt" object was unavailable')
				}
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
				o = r("./src/lib/currency/currencies.ts"),
				c = r("./src/lib/prettyPrintNumber/index.ts"),
				s = r("./src/reddit/helpers/governance/tokens.ts"),
				i = r("./src/reddit/constants/intlSupport.ts");
			const d = function(e) {
					let {
						locale: t = n.DEFAULT_LOCALE,
						pretty: r,
						formatOptions: a
					} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const o = Number(e);
					return Object(i.c)() ? r ? Object(c.b)(o) : new Intl.NumberFormat(t, a).format(o) : u(o, r, t)
				},
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: c,
						formatOptions: d,
						displayConversion: l,
						forceDecimals: f,
						currency: b = t.currency || (t.type ? p(t.type) : o.c),
						type: y = t.type || (t.currency ? m(t.currency) : o.b.Real)
					} = t, h = Number(e), g = String(e);
					switch (y) {
						case o.b.Reddit: {
							const e = o.e[b],
								t = e ? e() : b;
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(h) + " " + t : u(h, c, r, t)
						}
						case o.b.Crypto: {
							if (c) {
								return Object(s.c)(g, l) + " " + b
							}
							const e = Number(Object(s.b)(g, l));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : u(e, c, r, b)
						}
						case o.b.Real:
						default: {
							const e = Number(Object(a.a)(g, f));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								notation: c ? "compact" : "standard",
								...d
							}).format(e) : u(e, c, r, b)
						}
					}
				},
				u = (e, t, r, n) => {
					return (t ? Object(c.b)(e) : e.toLocaleString(r)) + (n ? " " + n : "")
				},
				m = e => o.g.includes(e.toUpperCase()) ? o.b.Reddit : o.f.includes(e.toUpperCase()) ? o.b.Crypto : o.b.Real,
				p = e => {
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
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return E
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "k", (function() {
				return _
			})), r.d(t, "h", (function() {
				return k
			})), r.d(t, "g", (function() {
				return S
			})), r.d(t, "e", (function() {
				return N
			})), r.d(t, "c", (function() {
				return I
			})), r.d(t, "a", (function() {
				return F
			})), r.d(t, "i", (function() {
				return L
			})), r.d(t, "f", (function() {
				return D
			})), r.d(t, "j", (function() {
				return U
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/omit.js"),
				o = r.n(a),
				c = r("./node_modules/uuid/v4.js"),
				s = r.n(c),
				i = r("./src/config.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/lib/addQueryParams/index.ts"),
				m = r("./src/lib/makeActionCreator/index.ts"),
				p = r("./src/lib/sentry/index.ts"),
				f = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/actions/gold/constants.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				h = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				v = r("./src/reddit/actions/gold/powerups.ts"),
				P = r("./src/reddit/actions/modal.ts"),
				C = r("./src/reddit/endpoints/gold/productOfferPurchase/index.ts");
			const O = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				j = e => e.map(e => e.message).join(" : "),
				E = (e, t, r, a) => async (o, c, i) => {
					let {
						gqlContext: d
					} = i;
					const l = s()(),
						u = await Object(C.f)(d(), l, e, t, r, a);
					if (u.ok) {
						const e = u.body,
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
				}, x = Object(y.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
					hk: "2LgB2E"
				})), w = e => !!e && e.hasOwnProperty("success"), _ = e => {
					let {
						stripe: t,
						stripeElements: r,
						productOffer: n,
						pricePackage: a,
						productsCount: o,
						extraParams: c
					} = e;
					return async (e, i, d) => {
						let {
							gqlContext: l
						} = d;
						var u;
						const m = i();
						let f, b, g = "";
						try {
							g = await e(E(n, a, o, c))
						} catch (P) {
							return p.c.captureException(P), void(P.message && e(Object(y.stripeApiError)(P.message)))
						}
						e(Object(y.stripeTokenPending)());
						const v = Object(h.y)(m);
						if (v || (f = await e(Object(y.validateAndCreateStripeToken)(t, r)), b = Object(h.v)(m), f)) try {
							const r = s()(),
								n = v || b ? f && b ? Object(C.h)(l(), r, g, f.id) : v ? Object(C.j)(l(), r, g, v) : null : Object(C.i)(l(), r, g, f.id),
								a = await n;
							if (!(null == a ? void 0 : a.ok)) return void e(x);
							const o = a.body.data.createEconPayment;
							if (null === (u = null == o ? void 0 : o.errors) || void 0 === u ? void 0 : u.length) return void e(Object(y.stripeApiError)(j(o.errors)));
							const {
								ok: c,
								payment: i,
								providerExecution: {
									paymentIntentClientSecret: d
								}
							} = o;
							if (c && i.status === C.a.ActionRequired) {
								const r = await t.confirmCardPayment(d),
									{
										error: n
									} = r;
								if (n) return ((e, t) => {
									var r, n;
									(null === (n = null === (r = e.payment_intent) || void 0 === r ? void 0 : r.last_payment_error) || void 0 === n ? void 0 : n.message) ? t(Object(y.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(y.stripeApiError)(e.message)) : t(x)
								})(n, e);
								let a;
								if (!(a = v ? await Object(C.e)(l(), s()(), i.id, v) : await Object(C.d)(l(), s()(), i.id, f.id, b)).ok) return void e(x);
								const o = a.body;
								if (!o.data.confirmEconPayment.ok || o.data.confirmEconPayment.payment.status !== C.a.Paid) return void e(x)
							} else if (c && i.status !== C.a.Paid) return void e(x);
							return {
								success: !0
							}
						} catch (P) {
							p.c.captureException(P), e(x)
						}
					}
				}, k = e => {
					let {
						productOffer: t,
						pricePackage: r,
						productsCount: n,
						extraParams: a,
						overrideModalParams: o
					} = e;
					return async (e, c, d) => {
						let {
							gqlContext: l
						} = d;
						var m;
						let f = "";
						try {
							f = await e(E(t, r, n, a))
						} catch (v) {
							return p.c.captureException(v), v.message && e(Object(y.paypalApiError)(v.message)), null
						}
						const b = i.a.redditUrl,
							h = {
								_o: b,
								o: f,
								pt: t.type,
								...o
							};
						try {
							const t = Object(u.a)(`${b}/framedModal/paypal-finish`, {
									...h,
									s: !0
								}),
								r = Object(u.a)(`${b}/framedModal/paypal-finish`, h),
								n = s()(),
								a = await Object(C.g)(l(), n, f, t, r);
							if (a && a.ok) {
								const t = a.body.data.createEconPayment;
								if (null === (m = null == t ? void 0 : t.errors) || void 0 === m ? void 0 : m.length) return e(Object(y.paypalApiError)(j(t.errors))), null;
								const r = Object(g.l)(c());
								if (t.ok) {
									const {
										status: e
									} = t.payment;
									if (e === C.a.ActionRequired) {
										const e = t.providerExecution;
										if (e.orderApprovalUrl) return {
											paymentId: t.payment.id,
											url: e.orderApprovalUrl
										};
										if (e.billingAgreementToken && e.billingAgreementApprovalUrl) return {
											paymentId: t.payment.id,
											token: e.billingAgreementToken,
											url: e.billingAgreementApprovalUrl
										}
									}
									if ("PAID" === e && r) return {
										success: !0
									}
								}
							}
						} catch (v) {
							p.c.captureException(v)
						}
						return e(Object(y.paypalApiError)(O())), null
					}
				}, S = (e, t) => async (r, n, a) => {
					let {
						gqlContext: o
					} = a;
					var c;
					try {
						const n = s()(),
							a = await Object(C.c)(o(), n, e, t);
						if (a && a.ok) {
							const e = a.body.data.confirmEconPayment;
							if (null === (c = null == e ? void 0 : e.errors) || void 0 === c ? void 0 : c.length) return r(Object(y.paypalApiError)(j(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (i) {
						p.c.captureException(i)
					}
					return r(Object(y.paypalApiError)(O())), !1
				}, N = () => async (e, t, r) => {
					let {
						gqlContext: a
					} = r;
					e(Object(y.savedCardsPending)());
					try {
						const t = await Object(C.l)(a());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(y.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: n
							} = r.data.identity, a = n.map(e => o()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(y.savedCardsSuccess)(a)), a[0] && e(Object(y.selectSavedCard)(a[0].cardId))
						} else e(Object(y.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (c) {
						p.c.captureException(c), e(Object(y.savedCardsSuccess)([]))
					}
				}, I = e => async (t, r, n) => {
					let {
						gqlContext: a
					} = n;
					t(Object(y.deleteSavedCard)(e));
					try {
						const t = await Object(C.k)(a(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: n
							} = r.data.deleteEconPaymentMethod;
						if (n && n.length) throw new Error(j(n))
					} catch (o) {
						p.c.captureException(o)
					}
				}, T = Object(m.a)(b.O), A = Object(m.a)(b.P), M = Object(m.a)(b.Q), R = e => async (t, r) => {
					await t(T(e)), t(Object(l.f)({
						kind: f.b.Error,
						duration: l.a,
						text: e
					}))
				}, F = (e, t, r) => async (a, o, c) => {
					let {
						gqlContext: s
					} = c;
					a(A({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const o = await Object(C.b)(s(), e);
						if (o.ok) {
							const e = o.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void a(R(n[0].message));
							a(M({
								subredditId: t,
								allocatedAt: r
							}))
						} else a(R(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						p.c.captureException(i), a(R(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, G = Object(m.a)(b.S), L = e => async (t, r) => {
					t(G(e)), t(Object(v.m)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(P.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(P.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, B = Object(m.a)(b.W), D = e => {
					let {
						user: t
					} = e;
					return async e => {
						await e(Object(v.o)(!0)), e(B({
							user: t
						}))
					}
				}, U = Object(m.a)(b.ab)
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
				return m
			})), r.d(t, "cardNumberChange", (function() {
				return p
			})), r.d(t, "cardExpiryChange", (function() {
				return f
			})), r.d(t, "cardCvcChange", (function() {
				return b
			})), r.d(t, "stripeTokenPending", (function() {
				return y
			})), r.d(t, "stripeTokenError", (function() {
				return h
			})), r.d(t, "stripeApiError", (function() {
				return g
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return v
			})), r.d(t, "paypalApiError", (function() {
				return P
			})), r.d(t, "toggleRememberCard", (function() {
				return C
			})), r.d(t, "selectSavedCard", (function() {
				return O
			})), r.d(t, "deleteSavedCard", (function() {
				return j
			})), r.d(t, "savedCardsPending", (function() {
				return E
			})), r.d(t, "savedCardsSuccess", (function() {
				return x
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				s = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const i = Object(o.a)(s.F),
				d = Object(o.a)(s.A),
				l = Object(o.a)(s.b),
				u = Object(o.a)(s.C),
				m = Object(o.a)(s.a),
				p = Object(o.a)(s.K),
				f = Object(o.a)(s.J),
				b = Object(o.a)(s.I),
				y = Object(o.a)(s.M),
				h = Object(o.a)(s.L),
				g = Object(o.a)(s.H),
				v = (e, t) => async (r, o) => {
					const s = o(),
						i = Object(c.h)(s),
						d = Object(c.l)(s),
						l = t.getElement(n.CardNumberElement);
					if (!l) return;
					const {
						token: u,
						error: p
					} = await e.createToken(l, {
						name: i,
						address_zip: d
					});
					if (i.trim()) {
						if (!p && u) return u;
						r(h(p || void 0))
					} else {
						const e = a.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(m({
							message: e
						}))
					}
				}, P = Object(o.a)(s.B), C = Object(o.a)(s.N), O = Object(o.a)(s.G), j = Object(o.a)(s.g), E = Object(o.a)(s.D), x = Object(o.a)(s.E)
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "setPremiumPurchaseModalInfo", (function() {
				return h
			})), r.d(t, "clearPremiumPurchaseModalInfo", (function() {
				return g
			})), r.d(t, "openPremiumPurchaseModal", (function() {
				return v
			})), r.d(t, "closePremiumPurchaseModal", (function() {
				return P
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return C
			})), r.d(t, "paymentBlobCreated", (function() {
				return O
			})), r.d(t, "openWithBlob", (function() {
				return j
			}));
			var n = r("./src/config.ts"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				s = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/formatApiError/index.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/constants/modals.ts"),
				m = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = r("./src/reddit/endpoints/gold/purchase.ts"),
				f = r("./src/reddit/helpers/correlationIdTracker.ts"),
				b = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const h = Object(o.a)(y.x),
				g = Object(o.a)(y.e),
				v = (e, t) => async r => {
					r(h(e)), r(Object(l.h)(u.a.ECON_PREMIUM_PURCHASE, t))
				}, P = () => async e => {
					e(Object(l.g)(u.a.ECON_PREMIUM_PURCHASE)), e(g())
				}, C = (e, t) => async (r, n, o) => {
					let {
						apiContext: c
					} = o;
					const l = Object(b.a)(n()),
						u = (null == l ? void 0 : l.pennies) || s.zb,
						m = Object(f.c)(f.a.GoldPayment);
					r(Object(d.stripeTokenPending)());
					const y = await r(Object(d.validateAndCreateStripeToken)(e, t));
					if (y) try {
						const e = await Object(p.f)({
							context: c(),
							correlationId: m,
							pennies: u,
							token: y
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
						const e = a.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						r(Object(d.stripeApiError)(e))
					}
				}, O = Object(o.a)(y.z), j = (e, t) => {
					let {
						packageId: r,
						correlationId: a
					} = e;
					return async (e, o, s) => {
						let {
							apiContext: l
						} = s;
						e(v({
							packageId: r,
							correlationId: a
						}, t));
						const u = Object(b.a)(o()),
							p = (null == u ? void 0 : u.paypalButtonId) || n.a.paypal.buttons.premium;
						if (p) try {
							const t = await Object(m.f)({
								buttonId: p,
								context: l(),
								correlationId: a
							});
							if (t.error) {
								const r = Object(i.a)(t.error);
								e(Object(d.paypalApiError)(r))
							} else e(O(t))
						} catch (f) {
							const t = Object(i.a)(f);
							e(Object(d.paypalApiError)(t))
						} else c.c.captureMessage("No Premium packages available on Premium purchase modal")
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
		"./src/reddit/components/Econ/ProductOfferPurchaseButton/Paypal.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				c = r("./src/reddit/controls/Button/index.tsx");
			var s = e => {
					let {
						paypalUrl: t,
						finishPaymentCallback: r
					} = e, a = window;
					const o = Object(n.useCallback)(e => {
						const t = c(e);
						"paypal-finish.success.framedmodal" === (null == t ? void 0 : t.type) ? (r(), null == a || a.close()) : "paypal-finish.cancel.framedmodal" === (null == t ? void 0 : t.type) && (null == a || a.close())
					}, [r, a]);
					if (Object(n.useEffect)(() => (window.addEventListener("message", o, !1), () => window.removeEventListener("message", o)), [o]), t) {
						const e = 580,
							r = 740,
							n = Math.max(window.screenX + Math.round((window.outerWidth - e) / 2), 0),
							o = Math.max(window.screenY + Math.round((window.outerHeight - r) / 2), 0);
						a = window.open(`${t}&rnd=${Math.random()}`, "RedditPaypalPayment", `height=${r},width=${e},top=${o},left=${n},modal=yes,alwaysRaised=yes`)
					}
					const c = e => {
						try {
							return "string" == typeof e.data ? JSON.parse(e.data) : e.data
						} catch (t) {
							return
						}
					}
				},
				i = r("./src/reddit/hooks/useThunkDispatch.ts");
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js"), l = e => {
				let {
					className: t,
					productsCount: r,
					productOffer: l,
					pricePackage: u,
					extraParams: m,
					onPaymentSuccess: p,
					onButtonClick: f
				} = e;
				const b = Object(i.a)(),
					[y, h] = Object(n.useState)(!1),
					[g, v] = Object(n.useState)(""),
					P = Object(n.useCallback)(() => {
						p()
					}, [p]);
				s({
					paypalUrl: g,
					finishPaymentCallback: P
				});
				return a.a.createElement(c.t, {
					onClick: async () => {
						if (!l) return;
						null == f || f(), h(!0);
						const e = await b(Object(o.h)({
							productOffer: l,
							pricePackage: u,
							productsCount: r,
							extraParams: m || {}
						}));
						e && (Object(o.d)(e) ? e.success && p() : v(e.url)), h(!1)
					},
					className: t,
					disabled: y
				}, d._("Continue to PayPal", null, {
					hk: "1T4BEy"
				}))
			}
		},
		"./src/reddit/components/Econ/ProductOfferPurchaseButton/Stripe.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				c = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				i = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/hooks/useThunkDispatch.ts"),
				l = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const {
				fbt: u
			} = r("./node_modules/fbt/lib/FbtPublic.js"), m = e => {
				let {
					className: t,
					productOffer: r,
					pricePackage: a,
					productsCount: m,
					extraParams: p,
					onPaymentSuccess: f,
					onButtonClick: b
				} = e;
				const y = Object(d.a)(),
					h = Object(n.useStripe)(),
					g = Object(n.useElements)(),
					v = Object(c.e)(l.w),
					P = Object(c.e)(l.m) || v;
				return o.a.createElement(i.t, {
					onClick: async () => {
						if (!h || !g || !r) return;
						null == b || b();
						const e = await y(Object(s.k)({
							stripe: h,
							stripeElements: g,
							productOffer: r,
							pricePackage: a,
							productsCount: m,
							extraParams: p || {}
						}));
						Object(s.d)(e) && e.success && f()
					},
					className: t,
					disabled: P || !h
				}, u._("Complete purchase", null, {
					hk: "KaR26"
				}))
			}
		},
		"./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less": function(e, t, r) {
			e.exports = {
				purchaseFooter: "_2siiafYfV9NgkupSIDgaht",
				purchaseButton: "_18yTyMH2TYOdGSb9UumZq-"
			}
		},
		"./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./src/reddit/controls/Button/index.tsx"),
				c = r("./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less"),
				s = r.n(c);
			const {
				fbt: i
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					buttonText: t,
					onCloseClick: r
				} = e;
				return a.a.createElement("div", {
					className: s.a.purchaseFooter
				}, a.a.createElement(o.l, {
					className: s.a.purchaseButton,
					"data-redditstyle": !0,
					onClick: r
				}, t || i._("Done", null, {
					hk: "3s1bT9"
				})))
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
				o = r.n(a),
				c = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/components/TrackingHelper/index.tsx"),
				i = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				d = r("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				l = r.n(d);
			const u = e => o.a.createElement("label", {
				className: Object(c.a)(e.className, l.a.paymentOption)
			}, o.a.createElement("input", {
				type: "radio",
				id: e.value,
				name: "payment-option",
				value: e.value,
				checked: e.selectedValue === e.value,
				onChange: e.onChange
			}), o.a.createElement("div", {
				className: Object(c.a)(l.a.paymentOptionContent, {
					[l.a.isNightMode]: e.nightmode
				})
			}, e.children));
			class m extends o.a.Component {
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
								a(Object(i.e)(r));
								break;
							case "paypal":
								a(Object(i.f)(r))
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
					return o.a.createElement("form", {
						className: e
					}, o.a.createElement("fieldset", null, o.a.createElement(u, {
						nightmode: t,
						selectedValue: r,
						onChange: this.onPaymentSelected,
						value: "paypal"
					}, o.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/paypal.png)`
						}
					})), o.a.createElement(u, {
						nightmode: t,
						selectedValue: r,
						onChange: this.onPaymentSelected,
						value: "creditCard"
					}, o.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/visa.png)`
						}
					}), o.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/mastercard.png)`
						}
					}), o.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/amex.png)`
						}
					}), o.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/discover.jpg)`
						}
					}))))
				}
			}
			t.a = Object(s.c)(m)
		},
		"./src/reddit/components/PremiumPurchaseModal/index.m.less": function(e, t, r) {
			e.exports = {
				premiumPurchaseModal: "_23HrteRgGDZ91SGL5oYWAp",
				premiumPurchaseHeader: "_1vNPpspCrQ3W3_z4l8WXD2",
				premiumIcon: "_2IUxk7I3wGLF67ECxWJaKF",
				titleMain: "_23AsioP9LFdnWNWvf2JxuY",
				titleDescription: "UZLxEtKcYjKnAtMic2BtE",
				closeButton: "W3hCwevNo10JOueQq9XCa",
				closeIcon: "_2Y-ZxM1D66jXobSnwtF5zy",
				premiumPurchaseBody: "_1f5Hj-YmiFvUddjOo3BXUn",
				creditCard: "_1mWVaEygz0IbIgt4I7nhA6",
				selectPayment: "_1W5FK94KCTY0oE-NFNp155",
				checkoutFooter: "_1GdfJOpcU3r4Y3Bj3aURo9",
				premiumPurchaseTotal: "_2DF2iuoYj11YJxwHtRl6k2",
				membershipDescription: "_2bHvYuy1c3aeL3OpvcSrzV",
				premiumPurchaseSelectPaymentFooter: "BKDWqNtFTGRZSXrRVdDzB",
				coinBalance: "_3VRMoYSGnuSeMurnm9AnE",
				premiumPurchaseButton: "_1VvnA3djGhzHigTOUn58Dj",
				paymentCompleteHeader: "_1LcmOk7SUoKQdR-v7knn89",
				paymentCompleteTitleMain: "_1UtE2Rjc4QGWjNU3F7ObST",
				paymentCompleteTitleDescription: "Og7AfSzv9RffDd4Ck06B5",
				paymentCompleteTitleItem: "_3SMYmC6QG8OyE_fULA-V0R",
				paymentCompleteTitleItemLast: "_3idbK2oKeR-XNpK_Q-QgIh",
				poweredByStripeIcon: "_3t8d-2wwATteV4UXKFhSb1",
				errorMessage: "_1625HJ3ZMN4xwl3cV7g2E2",
				stripeForm: "Qe2dMlpz4gcQu7Pb44kZ"
			}
		},
		"./src/reddit/components/PremiumPurchaseModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				s = r("./src/config.ts"),
				i = r("./src/higherOrderComponents/asModal/index.tsx"),
				d = r("./src/lib/classNames/index.ts"),
				l = r("./src/lib/constants/index.ts"),
				u = r("./src/reddit/models/Gold/Premium/index.ts"),
				m = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				p = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				f = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				b = r("./src/reddit/components/TrackingHelper/index.tsx"),
				y = r("./src/reddit/helpers/correlationIdTracker.ts"),
				h = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				g = r("./src/reddit/models/User/index.ts"),
				v = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				P = r("./src/reddit/selectors/platform.ts"),
				C = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/models/Gold/ProductOffer.ts"),
				j = r("./src/reddit/selectors/gold/productOffers.ts"),
				E = r("./node_modules/fbt/lib/FbtPublic.js"),
				x = r("./src/lib/loadRedditAdsPixel.ts"),
				w = r("./src/reddit/actions/modal.ts"),
				_ = r("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				k = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				S = r("./src/reddit/constants/modals.ts"),
				N = r("./src/reddit/helpers/createEmojiText/index.tsx"),
				I = r("./src/reddit/hooks/useTracking.ts"),
				T = r("./src/reddit/icons/fonts/Premium/index.tsx"),
				A = r("./src/reddit/selectors/activeModal.ts"),
				M = r("./src/reddit/components/PremiumPurchaseModal/index.m.less"),
				R = r.n(M);
			var F = e => {
					let {
						onCloseClick: t
					} = e;
					const r = Object(I.a)(),
						c = Object(o.d)(),
						i = Object(o.e)(P.s),
						d = Object(o.e)(e => {
							var t, r;
							return null !== (r = null === (t = Object(A.a)(e)) || void 0 === t ? void 0 : t.isPowerupsPremiumPurchase) && void 0 !== r && r
						});
					Object(n.useEffect)(() => {
						r(Object(h.j)()), Object(x.b)()
					}, [r]);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: R.a.paymentCompleteHeader,
						style: {
							backgroundImage: `url("${s.a.assetPath}/img/gold/premium-hero-g.jpg")`
						}
					}, a.a.createElement(T.a, {
						className: R.a.premiumIcon,
						title: E.fbt._("Reddit Premium", null, {
							hk: "34acNx"
						})
					}), a.a.createElement("div", {
						className: R.a.paymentCompleteTitleMain
					}, E.fbt._("Thanks for purchasing Reddit Premium!", null, {
						hk: "27KGKp"
					})), a.a.createElement("div", {
						className: R.a.paymentCompleteTitleDescription
					}, a.a.createElement("div", {
						className: R.a.paymentCompleteTitleItem
					}, E.fbt._("You will receive a message in your inbox once your purchase is confirmed.", null, {
						hk: "27tvU4"
					})), a.a.createElement("div", {
						className: R.a.paymentCompleteTitleItem
					}, a.a.createElement("a", {
						href: "/settings/premium",
						target: "_blank"
					}, E.fbt._("Manage your ads-free experience.", null, {
						hk: "1RxPah"
					}))), a.a.createElement("div", {
						className: R.a.paymentCompleteTitleItemLast
					}, Object(N.a)(E.fbt._("Find more about {anchor text} on Reddit.", [E.fbt._param("anchor text", ":loungeLink:")], {
						hk: "2RGr1F"
					}), {
						":loungeLink:": a.a.createElement("a", {
							href: "/r/lounge",
							target: "_blank"
						}, "r/lounge")
					}))), a.a.createElement("button", {
						className: R.a.closeButton,
						onClick: t
					}, a.a.createElement(k.b, {
						className: R.a.closeIcon,
						"data-redditstyle": !0
					}))), a.a.createElement(_.a, {
						onCloseClick: () => {
							d ? c(Object(w.h)(S.a.ECON_POWERUPS_PURCHASE, {
								subredditId: i
							})) : t()
						},
						buttonText: d ? E.fbt._("Use Your Premium Powerup", null, {
							hk: "1r0NDt"
						}) : null
					}))
				},
				G = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				L = r("./src/lib/currency/currencies.ts"),
				B = r("./src/lib/localizeCurrency/index.ts"),
				D = r("./src/reddit/components/Econ/ProductOfferPurchaseButton/Paypal.tsx"),
				U = r("./src/reddit/components/Econ/ProductOfferPurchaseButton/Stripe.tsx"),
				q = r("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				Q = r("./src/reddit/components/StripePaymentForm/index.tsx"),
				H = r("./src/reddit/hooks/useLocale.ts"),
				W = r("./src/reddit/hooks/useStripePromise.ts"),
				V = r("./src/reddit/models/Payments/index.ts");
			var Y = e => a.a.createElement("div", {
				className: R.a.premiumPurchaseHeader,
				style: {
					backgroundImage: `url("${s.a.assetPath}/img/gold/premium-hero-g.jpg")`
				}
			}, a.a.createElement(T.a, {
				className: R.a.premiumIcon,
				title: E.fbt._("Reddit Premium", null, {
					hk: "34acNx"
				}),
				isFilled: !0
			}), a.a.createElement("div", {
				className: R.a.titleMain
			}, E.fbt._("Buy Reddit Premium!", null, {
				hk: "3XxwQZ"
			})), a.a.createElement("div", {
				className: R.a.titleDescription
			}, E.fbt._("You're purchasing Reddit Premium for yourself, {username}!", [E.fbt._param("username", e.userName)], {
				hk: "bCrwe"
			})), a.a.createElement("button", {
				className: R.a.closeButton,
				onClick: e.onCloseClick
			}, a.a.createElement(k.b, {
				className: R.a.closeIcon,
				"data-redditstyle": !0
			})));
			var J = e => {
				const t = Object(W.a)(),
					r = Object(H.b)(),
					n = Object(o.d)(),
					c = Object(o.e)(C.l),
					s = Object(B.b)(e.total, {
						locale: r,
						type: L.b.Real
					}),
					i = Object(o.e)(e => Object(j.f)(e, {
						provider: V.b.Stripe
					})),
					d = Object(o.e)(e => Object(j.f)(e, {
						provider: V.b.PayPal
					})),
					u = e.isAnnualPremium ? E.fbt._("yearly", null, {
						hk: "10Ao7X"
					}) : E.fbt._("monthly", null, {
						hk: "2X3LdO"
					}),
					p = e.isAnnualPremium ? E.fbt._("year", null, {
						hk: "4hYQdN"
					}) : E.fbt._("month", null, {
						hk: "1l20Gw"
					}),
					f = e.selectedPayment === l.Ib,
					b = e.selectedPayment === l.Hb,
					y = f ? D.a : U.a;
				return a.a.createElement(G.Elements, {
					stripe: t
				}, a.a.createElement(a.a.Fragment, null, a.a.createElement(Y, {
					onCloseClick: e.onCloseModal,
					userName: e.userName
				}), a.a.createElement("div", {
					className: R.a.premiumPurchaseBody
				}, a.a.createElement(q.a, {
					className: R.a.selectPayment,
					nightmode: e.nightmode,
					selectedPayment: e.selectedPayment,
					onPaymentSelected: e.onPaymentSelected
				}), b && a.a.createElement("div", {
					className: R.a.creditCard
				}, a.a.createElement(G.ElementsConsumer, null, t => {
					let {
						stripe: r
					} = t;
					return a.a.createElement(Q.a, {
						nightmode: e.nightmode,
						className: R.a.stripeForm,
						stripe: r
					})
				})), a.a.createElement("div", {
					className: R.a.checkoutFooter
				}, a.a.createElement("div", {
					className: R.a.premiumPurchaseTotal
				}, E.fbt._("Total: {Price}/{Membership Term}", [E.fbt._param("Price", s), E.fbt._param("Membership Term", u)], {
					hk: "1islUR"
				}))), f && e.paypalErrorMessage && a.a.createElement("div", {
					className: R.a.errorMessage
				}, e.paypalErrorMessage), b && e.stripeErrorMessage && a.a.createElement("div", {
					className: R.a.errorMessage
				}, e.stripeErrorMessage), a.a.createElement("div", {
					className: R.a.membershipDescription
				}, E.fbt._("By completing your purchase, you are agreeing to automatic payments for Reddit Premium and Reddit’s {=User Agreement} and {=Privacy Policy}. Your Premium subscription will auto-renew {Renewal Term} for {Price} (plus tax where applicable). Cancel anytime in User Settings. Cancel at least 24 hours before your subscription ends to avoid getting charged for the next {Length of term}. No partial refunds.", [E.fbt._param("=User Agreement", a.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, E.fbt._("User Agreement", null, {
					hk: "4qnrFW"
				}))), E.fbt._param("=Privacy Policy", a.a.createElement("a", {
					href: "https://www.redditinc.com/policies/privacy-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, E.fbt._("Privacy Policy", null, {
					hk: "2PtUaD"
				}))), E.fbt._param("Renewal Term", u), E.fbt._param("Price", s), E.fbt._param("Length of term", p)], {
					hk: "2gscIO"
				}))), a.a.createElement("div", {
					className: R.a.premiumPurchaseSelectPaymentFooter
				}, e.premiumProductOffer && a.a.createElement(y, {
					productsCount: 1,
					className: R.a.premiumPurchaseButton,
					productOffer: e.premiumProductOffer,
					pricePackage: f ? d : i,
					onPaymentSuccess: () => {
						c && n(Object(m.f)({
							user: c
						}))
					}
				}))))
			};

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const $ = Object(c.c)({
					activePremiumPackage: v.a,
					activePage: v.n,
					allowNavigationCallback: e => {
						const t = Object(P.a)(e);
						return null === t ? void 0 : t
					},
					nightmode: C.eb,
					passthrough: v.e,
					selectedPayment: v.c,
					stripeErrorMessage: v.j,
					stripeTokenPending: v.m,
					paypalErrorMessage: v.d,
					userName: e => {
						const t = Object(C.l)(e);
						return `u/${Object(g.e)(t)}`
					},
					renewInterval: v.p,
					premiumProductOffer: j.g,
					premiumPrice: j.e
				}),
				z = Object(o.b)($, (e, t) => ({
					closeModal: () => e(Object(f.closePremiumPurchaseModal)()),
					onCloseModalClick: () => e(Object(f.closePremiumPurchaseModal)()),
					onPaymentSelected: t => e(Object(p.selectPaymentMethod)(t)),
					onLoadSavedCards: () => e(Object(m.e)())
				})),
				X = Object(i.a)(e => {
					let {
						sendEvent: t,
						activePage: r,
						activePremiumPackage: o,
						className: c,
						nightmode: i,
						selectedPayment: d,
						onPaymentSelected: m,
						onTryCloseModal: p,
						passthrough: f,
						stripeErrorMessage: b,
						stripeTokenPending: g,
						paypalErrorMessage: v,
						userName: P,
						renewInterval: C,
						premiumProductOffer: j,
						premiumPrice: E,
						onLoadSavedCards: x
					} = e, w = l.zb, _ = !1;
					j && E ? (w = E, _ = C === O.b.Year) : o && (w = o ? o.pennies : l.zb, _ = !!o && o.frequency === u.c.Yearly);
					const k = Object(n.useCallback)(e => {
						if (27 === e.keyCode) return p()
					}, [p]);
					return Object(n.useEffect)(() => (document.addEventListener("keydown", k), Object(y.e)(y.a.GoldPayment, !1), t(Object(h.i)()), () => document.removeEventListener("keydown", k)), [k, t]), Object(n.useEffect)(() => {
						b && t(Object(h.g)())
					}, [t, b]), Object(n.useEffect)(() => {
						x()
					}, [x]), a.a.createElement("div", {
						className: c
					}, "selectPayment" === r && a.a.createElement(J, {
						nightmode: i,
						onCloseModal: p,
						onPaymentSelected: m,
						isAnnualPremium: _,
						passthrough: f,
						paypalButtonId: (null == o ? void 0 : o.paypalButtonId) || s.a.paypal.buttons.premium,
						selectedPayment: d,
						stripeErrorMessage: b,
						stripeTokenPending: g,
						paypalErrorMessage: v,
						premiumProductOffer: j,
						total: w,
						userName: P
					}), "paymentCompleted" === r && a.a.createElement(F, {
						onCloseClick: p
					}))
				});
			t.default = z(Object(b.c)(class extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(h.b)()), this.onCloseModal()
					}, this.onCloseModal = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}
				}
				render() {
					return a.a.createElement(X, K({}, this.props, {
						className: Object(d.a)(this.props.className, R.a.premiumPurchaseModal),
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						withOverlay: !0
					}))
				}
			}))
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
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				s = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				m = r("./src/reddit/controls/ErrorText/index.tsx");
			const {
				fbt: p
			} = r("./node_modules/fbt/lib/FbtPublic.js"), f = e => {
				let {
					className: t
				} = e;
				return a.a.createElement(m.b, {
					className: t
				}, p._("Error loading Stripe, please refresh the page and try again", null, {
					hk: "2O1NWp"
				}))
			};
			var b = r("./node_modules/fbt/lib/FbtPublic.js"),
				y = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				h = r("./src/config.ts"),
				g = r("./src/reddit/components/CheckoutForm/index.m.less"),
				v = r.n(g);
			const P = Object(c.c)({
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
						cardNumberValidation: o,
						onCardNumberChange: c,
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
						cardExpiryReady: h,
						cardCVCReady: g
					} = this.state, P = {
						base: {
							lineHeight: "40px",
							color: this.computedStyle.getPropertyValue("--newRedditTheme-bodyText"),
							"::placeholder": {
								color: this.computedStyle.getPropertyValue("--newRedditTheme-metaText")
							}
						}
					};
					return a.a.createElement("div", {
						className: Object(s.a)(v.a.checkoutForm, e)
					}, a.a.createElement("div", {
						className: v.a.formCellWide
					}, a.a.createElement("input", {
						className: Object(s.a)(v.a.cardInput, v.a.nameOnCard, {
							[v.a.cardInputError]: !!l
						}),
						type: "text",
						placeholder: b.fbt._("NAME ON CARD", null, {
							hk: "IgrlQ"
						}).toString(),
						onChange: this.onChangeCardName,
						value: n
					})), a.a.createElement("div", {
						className: v.a.formCell
					}, a.a.createElement(y.CardNumberElement, {
						className: Object(s.a)(v.a.cardInput, {
							[v.a.cardInputError]: !!o
						}),
						onChange: c,
						onReady: this.onCardNumberReady,
						options: {
							placeholder: b.fbt._("CARD NUMBER", null, {
								hk: "3pqMxG"
							}).toString(),
							style: P
						}
					}), !p && a.a.createElement("div", {
						className: v.a.elementPlaceholder
					}, b.fbt._("CARD NUMBER", null, {
						hk: "3pqMxG"
					}))), a.a.createElement("div", {
						className: v.a.formCell
					}, a.a.createElement(y.CardExpiryElement, {
						className: Object(s.a)(v.a.cardInput, {
							[v.a.cardInputError]: !!r
						}),
						onChange: i,
						onReady: this.onCardExpiryReady,
						options: {
							placeholder: b.fbt._("MM/YY", null, {
								hk: "Hou17"
							}).toString(),
							style: P
						}
					}), !h && a.a.createElement("div", {
						className: v.a.elementPlaceholder
					}, b.fbt._("MM/YY", null, {
						hk: "Hou17"
					}))), a.a.createElement("div", {
						className: v.a.formCell
					}, a.a.createElement(y.CardCvcElement, {
						className: Object(s.a)(v.a.cardInput, {
							[v.a.cardInputError]: !!t
						}),
						onChange: d,
						onReady: this.onCardCVCReady,
						options: {
							placeholder: b.fbt._("CCV", null, {
								hk: "dZzZJ"
							}).toString(),
							style: P
						}
					}), !g && a.a.createElement("div", {
						className: v.a.elementPlaceholder
					}, b.fbt._("CCV", null, {
						hk: "dZzZJ"
					}))), a.a.createElement("div", {
						className: v.a.formCell
					}, a.a.createElement("input", {
						className: Object(s.a)(v.a.cardInput, v.a.nameOnCard),
						type: "text",
						onChange: this.onChangePostalCode,
						placeholder: b.fbt._("ZIP CODE", null, {
							hk: "2lJZ4j"
						}).toString(),
						value: u
					})))
				}
			}
			var O = Object(o.b)(P, e => ({
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
				j = r("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				E = r("./src/reddit/components/StripePaymentForm/index.m.less"),
				x = r.n(E);
			var w = e => {
					const {
						onToggleRememberCard: t,
						rememberCard: r
					} = e, n = Object(y.useStripe)();
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(O, {
						className: x.a.creditCard,
						stripe: n
					}), a.a.createElement(j.a, {
						className: x.a.saveCardCheckbox,
						isSelected: r,
						onClick: t,
						text: b.fbt._("Remember this card", null, {
							hk: "2arVov"
						})
					}), a.a.createElement("a", {
						href: "https://stripe.com",
						target: "_blank",
						rel: "noopener noreferrer"
					}, a.a.createElement("img", {
						className: x.a.poweredByStripeIcon,
						src: `${h.a.assetPath}/img/payment-icons/powered-by-stripe.png`
					})))
				},
				_ = r("./src/reddit/icons/svgs/Trash2/index.tsx");
			const {
				fbt: k
			} = r("./node_modules/fbt/lib/FbtPublic.js"), S = e => 2 === e.length ? e : "0" + e, N = e => {
				switch (e.toLowerCase()) {
					case "visa":
						return `${h.a.assetPath}/img/payment-icons/visa.png`;
					case "mastercard":
						return `${h.a.assetPath}/img/payment-icons/mastercard.png`;
					case "discover":
						return `${h.a.assetPath}/img/payment-icons/discover.jpg`;
					case "american express":
						return `${h.a.assetPath}/img/payment-icons/amex.png`;
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
					} = this.props, t = N(e.brand);
					return a.a.createElement("label", {
						className: x.a.savedCardContainer
					}, a.a.createElement("input", {
						type: "radio",
						name: "use-saved-card",
						checked: !0,
						readOnly: !0
					}), a.a.createElement("div", {
						className: Object(s.a)(x.a.cardImageContainer, {
							[x.a.cardImageContainerNightmode]: this.props.nightmode
						})
					}, t ? a.a.createElement("img", {
						className: x.a.brandImage,
						src: t
					}) : a.a.createElement("span", {
						className: x.a.unknownCC
					}, "CC")), a.a.createElement("div", {
						className: x.a.cardDetails
					}, a.a.createElement("span", null, k._("Card ending in {Credit Card last four digits}", [k._param("Credit Card last four digits", e.last4)], {
						hk: "3dMxMn"
					})), a.a.createElement("span", {
						className: x.a.expiry
					}, k._("Expires {month} / {year}", [k._param("month", S(e.expirationMonth.toString())), k._param("year", e.expirationYear.toString())], {
						hk: "3iXzVI"
					}))), this.state.showConfirmText ? a.a.createElement("button", {
						className: x.a.confirmText,
						onClick: this.onConfirmClick
					}, k._("Confirm", null, {
						hk: "gFhpD"
					})) : a.a.createElement("button", {
						onClick: this.onTrashCanClick
					}, a.a.createElement(_.b, {
						className: x.a.icon
					})))
				}
			}
			var T = I;
			const A = Object(c.c)({
					rememberCard: u.v,
					savedCard: e => Object(u.x)(e)[0],
					stripeInfoLoading: u.w
				}),
				M = Object(o.b)(A, e => ({
					onClickDeleteCard: t => e(Object(i.c)(t)),
					onToggleRememberCard: () => e(Object(d.toggleRememberCard)())
				}));
			class R extends a.a.PureComponent {
				render() {
					const {
						className: e,
						nightmode: t,
						onClickDeleteCard: r,
						onToggleRememberCard: n,
						rememberCard: o,
						savedCard: c,
						stripe: i,
						stripeInfoLoading: d
					} = this.props;
					if (!i) return a.a.createElement(f, {
						className: Object(s.a)(x.a.stripePaymentForm, e)
					});
					const u = d,
						m = !u && c,
						p = !u && !m,
						b = u ? x.a.loadingState : m ? x.a.savedCardState : x.a.formState;
					return a.a.createElement("div", {
						className: Object(s.a)(x.a.stripePaymentForm, b, e)
					}, u && a.a.createElement(l.a, {
						className: x.a.loader,
						sizePx: 60
					}), m && c && a.a.createElement("form", null, a.a.createElement(T, {
						nightmode: t,
						onDelete: r,
						savedCard: c
					})), p && a.a.createElement(w, {
						onToggleRememberCard: n,
						rememberCard: o
					}))
				}
			}
			t.a = M(R)
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
				return P
			})), r.d(t, "c", (function() {
				return C
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/uniqueId.js"),
				o = r.n(a),
				c = r("./node_modules/raf/index.js"),
				s = r.n(c),
				i = r("./node_modules/react/index.js"),
				d = r.n(i),
				l = r("./src/lib/classNames/index.ts"),
				u = r("./src/higherOrderComponents/asModal/index.tsx"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				p = r("./src/reddit/layout/row/Inline/index.tsx"),
				f = r("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				b = r.n(f);
			var y = Object(u.a)(e => {
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
				h = r("./src/reddit/controls/ErrorText/index.m.less"),
				g = r.n(h);
			class v extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${o()()}`,
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
					s()(() => {
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
						moreText: o = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: c,
						isModalOpen: s
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(g.a.wrapper, t)
					}, d.a.createElement("span", {
						className: g.a.description,
						ref: this.spanRef
					}, e), c && d.a.createElement("span", {
						className: g.a.moreText,
						onClick: this.toggleModal
					}, o), s && d.a.createElement(y, {
						onConfirmed: this.toggleModal,
						title: a
					}, r || e))
				}
			}
			const P = e => {
					const {
						className: t,
						errorClassName: r,
						errorModalTitle: n,
						fallbackMessage: a,
						messages: o = []
					} = e, c = o.length ? o : a ? [a] : [];
					return c.length ? d.a.createElement("div", {
						className: t
					}, c.map((e, t) => d.a.createElement(v, {
						className: r,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				C = e => d.a.createElement(P, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = v
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
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				s = r.n(c);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: n = 10
				} = e;
				return a.a.createElement("div", {
					className: Object(o.a)(s.a.loadingIcon, r, {
						[s.a.mCentered]: t
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
				return m
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "e", (function() {
				return f
			}));
			var n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				s = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
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
					m = Object(s.a)(u);
				return Object(a.a)(Object(o.a)(r, [c.a]), {
					method: n.kb.POST,
					endpoint: m,
					data: l
				}).then(i.a)
			}, l = async e => {
				let {
					context: t,
					coins: r,
					pennies: s,
					correlationId: d
				} = e;
				const l = {
					coins: r,
					pennies: s,
					correlation_id: d
				};
				return Object(a.a)(Object(o.a)(t, [c.a]), {
					method: n.kb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: l
				}).then(i.a)
			}, u = async e => {
				let {
					context: t,
					awardId: r,
					pennies: s,
					thingId: d,
					correlationId: l
				} = e;
				const u = {
					award_id: r,
					correlation_id: l,
					pennies: s,
					thing_id: d
				};
				return Object(a.a)(Object(o.a)(t, [c.a]), {
					method: n.kb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: u
				}).then(i.a)
			}, m = async e => {
				let {
					context: t,
					offerContext: r,
					orderId: s,
					coins: d,
					pennies: l,
					correlationId: u
				} = e;
				const m = {
					offer_context: r,
					order_id: s,
					coins: d,
					pennies: l,
					correlation_id: u
				};
				return Object(a.a)(Object(o.a)(t, [c.a]), {
					method: n.kb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: m
				}).then(i.a)
			}, p = async e => {
				let {
					awardId: t,
					context: r,
					coins: s,
					correlationId: d,
					isAnonymous: l,
					message: u,
					offerContext: m,
					orderId: p,
					pennies: f,
					thingId: b
				} = e;
				const y = {
					award_id: t,
					coins: s,
					correlation_id: d,
					is_anonymous: l,
					message: u,
					offer_context: m,
					order_id: p,
					pennies: f,
					thing_id: b
				};
				return Object(a.a)(Object(o.a)(r, [c.a]), {
					method: n.kb.POST,
					endpoint: `${r.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: y
				}).then(i.a)
			}, f = async e => {
				let {
					awardId: t,
					context: r,
					correlationId: s,
					isAnonymous: d,
					message: l,
					orderId: u,
					thingId: m
				} = e;
				const p = {
					award_id: t,
					correlation_id: s,
					is_anonymous: d,
					message: l,
					order_id: u,
					thing_id: m
				};
				return Object(a.a)(Object(o.a)(r, [c.a]), {
					method: n.kb.POST,
					endpoint: `${r.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: p
				}).then(i.a)
			}
		},
		"./src/reddit/endpoints/gold/productOfferPurchase/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return h
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "i", (function() {
				return v
			})), r.d(t, "h", (function() {
				return P
			})), r.d(t, "j", (function() {
				return C
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "b", (function() {
				return w
			})), r.d(t, "l", (function() {
				return _
			})), r.d(t, "k", (function() {
				return k
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				a = r.n(n),
				o = r("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				c = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				s = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				i = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = r("./src/redditGQL/operations/CreateEconOrder.json"),
				l = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				u = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				m = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				p = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				f = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				b = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				y = r("./src/lib/makeGqlRequest/index.ts");
			const h = (e, t, r, n, o, c) => {
				const s = new a.a(n.price).multipliedBy(o).toFixed();
				return Object(y.a)(e, {
					...d,
					variables: {
						input: {
							nonce: t,
							productId: r.id,
							productVersion: r.version,
							pricePackageId: n.id,
							currency: n.currency,
							price: s,
							productsCount: o.toString(),
							...c
						}
					}
				})
			};
			var g;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(g || (g = {}));
			const v = (e, t, r, n) => Object(y.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				P = (e, t, r, n) => Object(y.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				C = (e, t, r, n) => Object(y.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: r,
						cardId: n
					}
				}),
				O = (e, t, r, n, a) => Object(y.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: r,
						successUrl: n,
						cancelUrl: a
					}
				}),
				j = (e, t, r, n) => Object(y.a)(e, {
					...c,
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
				x = (e, t, r, n, a) => Object(y.a)(e, {
					...s,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
						saveCard: a
					}
				}),
				w = (e, t) => Object(y.a)(e, {
					...o,
					variables: {
						orderId: t
					}
				}),
				_ = e => Object(y.a)(e, {
					...b,
					variables: {}
				}),
				k = (e, t) => Object(y.a)(e, {
					...f,
					variables: {
						cardId: t
					}
				})
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n);

			function o(e, t) {
				const r = e.toString().split(":");
				return r.length % 2 == 0 ? e : r.reduce((e, r, n) => (n % 2 == 0 ? e.push(r) : "" === r ? e.push(":") : `:${r}:` in t ? e.push(t[`:${r}:`]) : e.push(`:${r}:`), e), []).map((e, t) => a.a.createElement(a.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				a = r("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const r = new n.BigNumber(e),
					a = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(a).toString()
			}

			function c(e, t) {
				return Object(a.b)(parseInt(o(e, t), 10))
			}

			function s(e, t) {
				const r = new n.BigNumber(e),
					a = new n.BigNumber(t || 1);
				return r.multipliedBy(a).toFixed(0)
			}
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "h", (function() {
				return y
			})), r.d(t, "i", (function() {
				return h
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				a = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/reddit/helpers/correlationIdTracker.ts"),
				c = r("./src/reddit/helpers/trackers/gild.ts");
			const s = e => ({
					...a.n(e),
					screen: a.Y(e),
					subreddit: a.gb(e),
					userSubreddit: a.qb(e)
				}),
				i = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === n.f.Moderator,
					isTemporatyAward: !!e.endsAt,
					numberCoins: e.coinPrice,
					numberMonths: Math.floor((e.daysOfPremium || 0) / 30),
					numberCoinsToRecipient: e.coinReward || 0,
					numberCoinsToCommunity: e.subredditCoinReward || 0,
					type: Object(c.getAwardTypeFromAward)(e)
				}),
				d = () => e => ({
					...s(e),
					source: "awards",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...s(t),
					source: "awards",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? i(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, r) => n => ({
					...s(n),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r
				}),
				m = (e, t, r, n) => a => ({
					...s(a),
					source: "create_award",
					action: "upload",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "image",
					actionInfo: n ? {
						reason: n
					} : {
						success: !0
					},
					media: t ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						uploadDuration: r,
						url: e,
						width: t.width
					} : null
				}),
				p = (e, t, r) => n => ({
					...s(n),
					source: "create_award",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "create",
					media: t && e ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						url: e,
						width: t.width
					} : null,
					goldPurchase: r ? i(r) : null
				}),
				f = (e, t, r) => n => ({
					...s(n),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r ? i(r) : null
				}),
				b = (e, t, r) => n => ({
					...s(n),
					source: "awards",
					action: "click",
					noun: r,
					goldPurchase: i(e),
					profile: a.R(n, t),
					subreddit: a.hb(n, t)
				}),
				y = (e, t) => b(e, t, "disable_in_community"),
				h = (e, t) => b(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "getAwardTypeFromAward", (function() {
				return d
			})), r.d(t, "clickGildEvent", (function() {
				return m
			})), r.d(t, "clickRpanGiveAward", (function() {
				return p
			})), r.d(t, "clickAddAward", (function() {
				return f
			})), r.d(t, "clickHideAward", (function() {
				return b
			})), r.d(t, "clickConfirmHideAward", (function() {
				return y
			})), r.d(t, "clickCancelHideAward", (function() {
				return h
			})), r.d(t, "clickAwardReportFlow", (function() {
				return v
			})), r.d(t, "clickCancelAwardReportFlow", (function() {
				return P
			})), r.d(t, "clickFlagAwardUsage", (function() {
				return C
			})), r.d(t, "clickCancelFlagAwardUsage", (function() {
				return O
			})), r.d(t, "clickConfirmFlagAwardUsage", (function() {
				return j
			})), r.d(t, "clickReportAward", (function() {
				return E
			})), r.d(t, "clickCancelReportAward", (function() {
				return x
			})), r.d(t, "clickConfirmReportAward", (function() {
				return w
			})), r.d(t, "viewGildModalEvent", (function() {
				return _
			})), r.d(t, "clickSelectAwardEvent", (function() {
				return k
			})), r.d(t, "triggerAnonymousEvent", (function() {
				return S
			})), r.d(t, "clickMessageInputEvent", (function() {
				return N
			})), r.d(t, "typeMessageInputEvent", (function() {
				return I
			})), r.d(t, "clickLearnMoreLinkEvent", (function() {
				return T
			})), r.d(t, "clickQuestionMarkEvent", (function() {
				return A
			})), r.d(t, "clickConfirmAwardEvent", (function() {
				return M
			})), r.d(t, "clickGetPremiumEvent", (function() {
				return R
			})), r.d(t, "clickAddCoinsButtonEvent", (function() {
				return F
			})), r.d(t, "clickNextButtonEvent", (function() {
				return G
			})), r.d(t, "clickCloseGildModalEvent", (function() {
				return L
			})), r.d(t, "viewKarmaSuccessEvent", (function() {
				return B
			})), r.d(t, "clickFilterEvent", (function() {
				return D
			})), r.d(t, "clickNextFiltersEvent", (function() {
				return U
			})), r.d(t, "clickPreviousFiltersEvent", (function() {
				return q
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				a = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/telemetry/models/GoldPurchase.ts"),
				c = r("./src/reddit/helpers/correlationIdTracker.ts"),
				s = r("./src/reddit/helpers/isComment.ts"),
				i = r("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === n.f.Global && e.awardSubType === n.d.Appreciation ? o.GoldPurchaseType.GidAppreciation : e.awardType === n.f.Global && e.awardSubType === n.d.Premium ? o.GoldPurchaseType.GidPremium : e.awardSubType === n.d.Group ? o.GoldPurchaseType.GidGroup : e.awardType === n.f.Community ? o.GoldPurchaseType.GidCommunity : e.awardType === n.f.Moderator ? o.GoldPurchaseType.GidMod : e.awardType === n.f.Global && e.awardSubType === n.d.Global ? o.GoldPurchaseType.GidGlobal : o.GoldPurchaseType.GidUnknown,
				l = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: d(e),
					...t
				}),
				u = (e, t) => ({
					...a.n(e),
					comment: t ? a.h(e, t) : void 0,
					correlationId: Object(i.b)(e) || Object(c.e)(c.a.GildingFlow, !1),
					post: t ? a.H(e, t) : void 0,
					screen: a.Y(e),
					subreddit: a.gb(e),
					userSubreddit: a.qb(e)
				}),
				m = e => t => ({
					...u(t, e),
					source: Object(s.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold",
					feed: a.q(t)
				}),
				p = e => t => ({
					...u(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				f = e => t => ({
					...u(t, e),
					source: Object(s.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award",
					feed: a.q(t)
				}),
				b = (e, t) => r => ({
					...u(r, t),
					source: Object(s.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				y = (e, t) => r => ({
					...u(r, t),
					source: Object(s.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				h = (e, t) => r => ({
					...u(r, t),
					source: Object(s.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				g = e => (t, r) => n => ({
					...u(n, r),
					source: Object(s.a)(r) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				v = g("award_hovercard_report"),
				P = g("cancel_award_hovercard_report"),
				C = g("flag_award"),
				O = g("cancel_flag_award"),
				j = g("confirm_flag_award"),
				E = g("report_community_award"),
				x = g("cancel_report_community_award"),
				w = g("confirm_report_community_award"),
				_ = (e, t, r) => n => ({
					...u(n, r),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				k = (e, t, r) => n => ({
					...u(n, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, r)
				}),
				S = (e, t) => r => ({
					...u(r, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				N = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				I = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				T = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				A = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				M = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(s.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				R = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(s.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				F = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				G = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				L = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				B = e => {
					let {
						award: t,
						awardeeKarmaEarned: r,
						awarderKarmaEarned: n,
						numberCoins: a,
						thingId: o
					} = e;
					return e => ({
						...u(e, o),
						source: "give_gold",
						action: "view",
						noun: "karma_success",
						goldPurchase: {
							contentType: Object(s.a)(o) ? "comment" : "post",
							awardeeKarmaEarned: r,
							awarderKarmaEarned: n,
							numberCoins: a,
							...l(t)
						}
					})
				},
				D = e => t => ({
					...u(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				U = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				q = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return b
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "c", (function() {
				return P
			})), r.d(t, "a", (function() {
				return C
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "j", (function() {
				return E
			}));
			var n = r("./src/lib/constants/index.ts"),
				a = r("./src/reddit/models/Gold/ProductOffer.ts"),
				o = r("./src/reddit/selectors/gold/giveAwards.ts"),
				c = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				s = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				i = r("./src/reddit/selectors/telemetry.ts"),
				d = r("./src/telemetry/models/GoldPurchase.ts"),
				l = r("./src/telemetry/models/Payment.ts"),
				u = r("./src/reddit/helpers/trackers/gild.ts"),
				m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/helpers/isComment.ts"),
				f = r("./src/reddit/helpers/trackers/communityAwards.ts");
			const b = (e, t) => {
					const {
						thingId: r,
						packageId: l
					} = t, b = !!r, y = o.b(e), h = y ? Object(u.getAwardTypeFromAward)(y) : null, g = b ? h : s.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, v = r ? Object(p.a)(r) ? "comment" : "post" : void 0, P = l || s.t(e), C = [...Object(c.d)(e), ...Object(c.f)(e)].filter(e => e.mobileId === P)[0], O = t.offerContext || (y && 0 === y.coinPrice ? a.a.StorefrontFreeAward : Object(a.d)(C, b)), j = C ? Math.round(1e4 * (C.baselinePennies - C.pennies) / C.baselinePennies) / 100 : 0, E = C ? Math.round(1e4 * (C.coins - C.baselineCoins) / C.coins) / 100 : 0, x = C ? C.baselinePennies !== C.pennies ? `${j}_percent_price` : C.baselineCoins !== C.coins ? `${E}_percent_bonus` : void 0 : void 0, w = g === d.GoldPurchaseType.Premium ? n.zb : C ? C.pennies : void 0;
					return {
						...i.n(e),
						comment: r ? i.h(e, r) : null,
						correlationId: s.r(e) || Object(m.e)(m.a.GoldPayment, !1),
						post: r ? i.H(e, r) : null,
						screen: i.Y(e),
						subreddit: r ? i.gb(e) : null,
						goldPurchase: {
							...y ? Object(f.a)(y) : null,
							type: g,
							gildedContent: b,
							contentType: v,
							numberCoins: C ? C.coins : void 0,
							offerContext: O,
							offerType: x
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: w
						},
						purchase: {
							priceMicros: w
						}
					}
				},
				y = (e, t, r) => n => ({
					...b(n, {
						packageId: t,
						thingId: e,
						offerContext: r
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				h = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				g = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				v = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				P = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				C = (e, t) => r => ({
					...b(r, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				O = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				j = (e, t, r) => n => {
					const a = b(n, {
						packageId: t,
						thingId: e,
						offerContext: r
					});
					return {
						...a,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...a.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...a.goldPurchase,
							source: e ? d.GiveGold : s.o(n) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				E = e => t => {
					var r;
					const n = b(t, {
						thingId: e
					});
					return {
						...n,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...n.payment,
							method: (null === (r = t.platform.currentPage) || void 0 === r ? void 0 : r.queryParams.thanks) ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/hooks/useStripePromise.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return y
			}));
			var n = "https://js.stripe.com/v3",
				a = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
				o = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
				c = null,
				s = function(e) {
					return null !== c ? c : c = new Promise((function(t, r) {
						if ("undefined" != typeof window)
							if (window.Stripe && e && console.warn(o), window.Stripe) t(window.Stripe);
							else try {
								var c = function() {
									for (var e = document.querySelectorAll('script[src^="'.concat(n, '"]')), t = 0; t < e.length; t++) {
										var r = e[t];
										if (a.test(r.src)) return r
									}
									return null
								}();
								c && e ? console.warn(o) : c || (c = function(e) {
									var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
										r = document.createElement("script");
									r.src = "".concat(n).concat(t);
									var a = document.head || document.body;
									if (!a) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
									return a.appendChild(r), r
								}(e)), c.addEventListener("load", (function() {
									window.Stripe ? t(window.Stripe) : r(new Error("Stripe.js not available"))
								})), c.addEventListener("error", (function() {
									r(new Error("Failed to load Stripe.js"))
								}))
							} catch (s) {
								return void r(s)
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
					return s(null)
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
				f = r("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts");
			let b = null;

			function y() {
				const e = Object(p.e)(f.a);
				return b || (b = u(m.a.stripe.apiKey(e))), b
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
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, r) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./src/reddit/icons/fonts/helpers.tsx"),
				c = r("./src/reddit/icons/fonts/Premium/index.m.less"),
				s = r.n(c);
			const i = r("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				title: e.title,
				className: `${Object(o.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", s.a)
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
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/icons/svgs/Trash2/index.m.less"),
				s = r.n(c);
			const i = e => a.a.createElement("svg", {
				className: Object(o.a)(s.a.icon, e.className),
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
			var n, a, o, c;
			r.d(t, "b", (function() {
					return a
				})), r.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(a || (a = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(o || (o = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(c || (c = {}))
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				a = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(a.a)(n.Uc)
		},
		"./src/reddit/selectors/gild.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			}));
			const n = e => e.gild.gildModalThingId,
				a = e => e.gild.correlationId || void 0,
				o = e => e.gild.isAnonymous,
				c = e => e.gild.isIframed,
				s = e => e.gild.message,
				i = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return a
			}));
			const n = e => e.gild.selectedAward,
				a = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "j", (function() {
				return i
			})), r.d(t, "k", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "l", (function() {
				return b
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "i", (function() {
				return v
			})), r.d(t, "h", (function() {
				return P
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/makeProductOfferKey/index.ts"),
				o = r("./src/reddit/models/Gold/ProductOffer.ts"),
				c = r("./src/reddit/models/Payments/index.ts"),
				s = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				d = (e, t) => {
					let {
						subredditId: r,
						type: n
					} = t;
					var o, c, s;
					return r ? e.subreddits.productOffers[Object(a.a)(n, r)] : null === (s = null === (c = null === (o = e.features) || void 0 === o ? void 0 : o.goldPurchase) || void 0 === c ? void 0 : c.productOffers) || void 0 === s ? void 0 : s[Object(a.a)(n)]
				},
				l = e => {
					const t = d(e, {
						type: o.c.Coinpack
					});
					return null == t ? void 0 : t[0]
				},
				u = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = d(e, {
						subredditId: r,
						type: o.c.Powerups
					});
					return null == n ? void 0 : n[0]
				},
				m = Object(n.a)(u, e => null == e ? void 0 : e.pricePackages[0]),
				p = Object(n.a)(m, e => null == e ? void 0 : e.price),
				f = e => {
					const t = d(e, {
						type: o.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				b = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === c.b.PayPal || e[0] === c.b.Stripe)(e.requiredPaymentProviders)) : null,
				y = Object(n.a)(f, s.p, (e, t) => b(e, t) || null),
				h = Object(n.a)(y, (e, t) => {
					let {
						provider: r
					} = t;
					return r
				}, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				g = Object(n.a)(y, e => (null == e ? void 0 : e[0].price) || null),
				v = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				P = Object(n.a)(v, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/redditGQL/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
		},
		"./src/redditGQL/operations/ConfirmPaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"4a9f7376235b"}')
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
			e.exports = JSON.parse('{"id":"91f215ec5196"}')
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.09debb5dfe782cfb598d.js.map