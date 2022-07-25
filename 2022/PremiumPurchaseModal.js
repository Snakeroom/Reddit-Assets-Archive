// https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.5c73c0b8228e50c38167.js
// Retrieved at 7/25/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
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
						s = t.useRef(!1),
						o = t.useRef(!0),
						c = t.useMemo((function() {
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
					}), [d.stripe]), t.createElement(h.Provider, {
						value: d
					}, a)
				};
				g.propTypes = {
					stripe: s.any,
					options: s.object
				};
				var v = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(h), e)
					},
					C = function(e) {
						return (0, e.children)(v("mounts <ElementsConsumer>"))
					};
				C.propTypes = {
					children: s.func.isRequired
				};
				var O = function(e) {
						var r = t.useRef(e);
						return t.useEffect((function() {
								r.current = e
							}), [e]),
							function() {
								r.current && r.current.apply(r, arguments)
							}
					},
					P = function() {},
					j = function(e, r) {
						var n, a = "".concat((n = e).charAt(0).toUpperCase() + n.slice(1), "Element"),
							o = r ? function(e) {
								v("mounts <".concat(a, ">"));
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
									y = r.onChange,
									h = void 0 === y ? P : y,
									g = r.onEscape,
									C = void 0 === g ? P : g,
									j = r.onClick,
									E = void 0 === j ? P : j,
									x = v("mounts <".concat(a, ">")).elements,
									_ = t.useRef(null),
									k = t.useRef(null),
									w = O(b),
									N = O(d),
									S = O(u),
									I = O(E),
									M = O(h),
									T = O(C);
								t.useLayoutEffect((function() {
									if (null == _.current && x && null != k.current) {
										var t = x.create(e, c);
										_.current = t, t.mount(k.current), t.on("ready", (function() {
											return w(t)
										})), t.on("change", M), t.on("blur", N), t.on("focus", S), t.on("escape", T), t.on("click", I)
									}
								}));
								var A = m(c);
								return t.useEffect((function() {
									if (_.current) {
										var e = f(c, A, ["paymentRequest"]);
										e && _.current.update(e)
									}
								}), [c, A]), t.useLayoutEffect((function() {
									return function() {
										_.current && _.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: s,
									ref: k
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
					E = "undefined" == typeof window,
					x = j("auBankAccount", E),
					_ = j("card", E),
					k = j("cardNumber", E),
					w = j("cardExpiry", E),
					N = j("cardCvc", E),
					S = j("fpxBank", E),
					I = j("iban", E),
					M = j("idealBank", E),
					T = j("p24Bank", E),
					A = j("epsBank", E),
					R = j("payment", E),
					B = j("paymentRequestButton", E),
					F = j("linkAuthentication", E),
					L = j("shippingAddress", E),
					D = j("afterpayClearpayMessage", E);
				e.AfterpayClearpayMessageElement = D, e.AuBankAccountElement = x, e.CardCvcElement = N, e.CardElement = _, e.CardExpiryElement = w, e.CardNumberElement = k, e.Elements = g, e.ElementsConsumer = C, e.EpsBankElement = A, e.FpxBankElement = S, e.IbanElement = I, e.IdealBankElement = M, e.LinkAuthenticationElement = F, e.P24BankElement = T, e.PaymentElement = R, e.PaymentRequestButtonElement = B, e.ShippingAddressElement = L, e.useElements = function() {
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
		"./src/lib/loadRedditAdsPixel.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return s
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
			const s = () => {
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
				s = r("./src/lib/currency/currencies.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				c = r("./src/reddit/helpers/governance/tokens.ts"),
				i = r("./src/reddit/constants/intlSupport.ts");
			const d = function(e) {
					let {
						locale: t = n.DEFAULT_LOCALE,
						pretty: r,
						formatOptions: a
					} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const s = Number(e);
					return Object(i.c)() ? r ? Object(o.b)(s) : new Intl.NumberFormat(t, a).format(s) : u(s, r, t)
				},
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: o,
						formatOptions: d,
						displayConversion: l,
						forceDecimals: f,
						currency: b = t.currency || (t.type ? p(t.type) : s.c),
						type: y = t.type || (t.currency ? m(t.currency) : s.b.Real)
					} = t, h = Number(e), g = String(e);
					switch (y) {
						case s.b.Reddit: {
							const e = s.e[b],
								t = e ? e() : b;
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(h) + " " + t : u(h, o, r, t)
						}
						case s.b.Crypto: {
							if (o) {
								return Object(c.d)(g, l) + " " + b
							}
							const e = Number(Object(c.c)(g, l));
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
				return P
			})), r.d(t, "d", (function() {
				return E
			})), r.d(t, "j", (function() {
				return x
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "g", (function() {
				return k
			})), r.d(t, "e", (function() {
				return w
			})), r.d(t, "c", (function() {
				return N
			})), r.d(t, "a", (function() {
				return A
			})), r.d(t, "f", (function() {
				return B
			})), r.d(t, "i", (function() {
				return F
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/omit.js"),
				s = r.n(a),
				o = r("./node_modules/uuid/v4.js"),
				c = r.n(o),
				i = r("./src/config.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/lib/addQueryParams/index.ts"),
				u = r("./src/lib/makeActionCreator/index.ts"),
				m = r("./src/lib/sentry/index.ts"),
				p = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/actions/gold/constants.ts"),
				b = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				y = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				g = r("./src/reddit/actions/gold/powerups.ts"),
				v = r("./src/reddit/endpoints/gold/productOfferPurchase/index.ts");
			const C = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				O = e => e.map(e => e.message).join(" : "),
				P = (e, t, r, a) => async (s, o, i) => {
					let {
						gqlContext: d
					} = i;
					const l = c()(),
						u = await Object(v.f)(d(), l, e, t, r, a);
					if (u.ok) {
						const e = u.body,
							{
								errors: t,
								order: r
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(O(t));
						if (r) return r.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, j = Object(b.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
					hk: "2LgB2E"
				})), E = e => !!e && e.hasOwnProperty("success"), x = e => {
					let {
						stripe: t,
						stripeElements: r,
						productOffer: n,
						pricePackage: a,
						productsCount: s,
						extraParams: o
					} = e;
					return async (e, i, d) => {
						let {
							gqlContext: l
						} = d;
						var u;
						const p = i();
						let f, h, g = "";
						try {
							g = await e(P(n, a, s, o))
						} catch (E) {
							return m.c.captureException(E), void(E.message && e(Object(b.stripeApiError)(E.message)))
						}
						e(Object(b.stripeTokenPending)());
						const C = Object(y.y)(p);
						if (C || (f = await e(Object(b.validateAndCreateStripeToken)(t, r)), h = Object(y.v)(p), f)) try {
							const r = c()(),
								n = C || h ? f && h ? Object(v.h)(l(), r, g, f.id) : C ? Object(v.j)(l(), r, g, C) : null : Object(v.i)(l(), r, g, f.id),
								a = await n;
							if (!(null == a ? void 0 : a.ok)) return void e(j);
							const s = a.body.data.createEconPayment;
							if (null === (u = null == s ? void 0 : s.errors) || void 0 === u ? void 0 : u.length) return void e(Object(b.stripeApiError)(O(s.errors)));
							const {
								ok: o,
								payment: i,
								providerExecution: {
									paymentIntentClientSecret: d
								}
							} = s;
							if (o && i.status === v.a.ActionRequired) {
								const r = await t.confirmCardPayment(d),
									{
										error: n
									} = r;
								if (n) return ((e, t) => {
									var r, n;
									(null === (n = null === (r = e.payment_intent) || void 0 === r ? void 0 : r.last_payment_error) || void 0 === n ? void 0 : n.message) ? t(Object(b.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(b.stripeApiError)(e.message)) : t(j)
								})(n, e);
								let a;
								if (!(a = C ? await Object(v.e)(l(), c()(), i.id, C) : await Object(v.d)(l(), c()(), i.id, f.id, h)).ok) return void e(j);
								const s = a.body;
								if (!s.data.confirmEconPayment.ok || s.data.confirmEconPayment.payment.status !== v.a.Paid) return void e(j)
							} else if (o && i.status !== v.a.Paid) return void e(j);
							return {
								success: !0
							}
						} catch (E) {
							m.c.captureException(E), e(j)
						}
					}
				}, _ = e => {
					let {
						productOffer: t,
						pricePackage: r,
						productsCount: n,
						extraParams: a,
						overrideModalParams: s
					} = e;
					return async (e, o, d) => {
						let {
							gqlContext: u
						} = d;
						var p;
						let f = "";
						try {
							f = await e(P(t, r, n, a))
						} catch (j) {
							return m.c.captureException(j), j.message && e(Object(b.paypalApiError)(j.message)), null
						}
						const y = i.a.redditUrl,
							g = {
								_o: y,
								o: f,
								pt: t.type,
								...s
							};
						try {
							const t = Object(l.a)(`${y}/framedModal/paypal-finish`, {
									...g,
									s: !0
								}),
								r = Object(l.a)(`${y}/framedModal/paypal-finish`, g),
								n = c()(),
								a = await Object(v.g)(u(), n, f, t, r);
							if (a && a.ok) {
								const t = a.body.data.createEconPayment;
								if (null === (p = null == t ? void 0 : t.errors) || void 0 === p ? void 0 : p.length) return e(Object(b.paypalApiError)(O(t.errors))), null;
								const r = Object(h.k)(o());
								if (t.ok) {
									const {
										status: e
									} = t.payment;
									if (e === v.a.ActionRequired) {
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
						} catch (j) {
							m.c.captureException(j)
						}
						return e(Object(b.paypalApiError)(C())), null
					}
				}, k = (e, t) => async (r, n, a) => {
					let {
						gqlContext: s
					} = a;
					var o;
					try {
						const n = c()(),
							a = await Object(v.c)(s(), n, e, t);
						if (a && a.ok) {
							const e = a.body.data.confirmEconPayment;
							if (null === (o = null == e ? void 0 : e.errors) || void 0 === o ? void 0 : o.length) return r(Object(b.paypalApiError)(O(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (i) {
						m.c.captureException(i)
					}
					return r(Object(b.paypalApiError)(C())), !1
				}, w = () => async (e, t, r) => {
					let {
						gqlContext: a
					} = r;
					var o;
					e(Object(b.savedCardsPending)());
					try {
						const t = await Object(v.l)(a());
						if (t.error) throw e(Object(b.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						}))), new Error(t.error.type);
						const r = t.body;
						(null === (o = r.errors) || void 0 === o ? void 0 : o.length) && e(Object(b.stripeApiError)(r.errors[0].message));
						const {
							savedStripeCards: c
						} = r.data.identity, i = c.map(e => s()({
							...e,
							cardId: e.id
						}, "id"));
						e(Object(b.savedCardsSuccess)(i)), i[0] && e(Object(b.selectSavedCard)(i[0].cardId))
					} catch (c) {
						m.c.captureException(c), e(Object(b.savedCardsSuccess)([]))
					}
				}, N = e => async (t, r, n) => {
					let {
						gqlContext: a
					} = n;
					t(Object(b.deleteSavedCard)(e));
					try {
						const t = await Object(v.k)(a(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: n
							} = r.data.deleteEconPaymentMethod;
						if (n && n.length) throw new Error(O(n))
					} catch (s) {
						m.c.captureException(s)
					}
				}, S = Object(u.a)(f.N), I = Object(u.a)(f.O), M = Object(u.a)(f.P), T = e => async (t, r) => {
					await t(S(e)), t(Object(d.f)({
						kind: p.b.Error,
						duration: d.a,
						text: e
					}))
				}, A = (e, t, r) => async (a, s, o) => {
					let {
						gqlContext: c
					} = o;
					a(I({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const s = await Object(v.b)(c(), e);
						if (s.ok) {
							const e = s.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void a(T(n[0].message));
							a(M({
								subredditId: t,
								allocatedAt: r
							}))
						} else a(T(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						m.c.captureException(i), a(T(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, R = Object(u.a)(f.U), B = e => {
					let {
						user: t
					} = e;
					return async e => {
						await e(Object(g.l)(!0)), e(R({
							user: t
						}))
					}
				}, F = Object(u.a)(f.Y)
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
				return C
			})), r.d(t, "toggleRememberCard", (function() {
				return O
			})), r.d(t, "selectSavedCard", (function() {
				return P
			})), r.d(t, "deleteSavedCard", (function() {
				return j
			})), r.d(t, "savedCardsPending", (function() {
				return E
			})), r.d(t, "savedCardsSuccess", (function() {
				return x
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const i = Object(s.a)(c.F),
				d = Object(s.a)(c.A),
				l = Object(s.a)(c.b),
				u = Object(s.a)(c.C),
				m = Object(s.a)(c.a),
				p = Object(s.a)(c.K),
				f = Object(s.a)(c.J),
				b = Object(s.a)(c.I),
				y = Object(s.a)(c.M),
				h = Object(s.a)(c.L),
				g = Object(s.a)(c.H),
				v = (e, t) => async (r, s) => {
					const c = s(),
						i = Object(o.h)(c),
						d = Object(o.l)(c),
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
				}, C = Object(s.a)(c.B), O = Object(s.a)(c.N), P = Object(s.a)(c.G), j = Object(s.a)(c.g), E = Object(s.a)(c.D), x = Object(s.a)(c.E)
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
				return C
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return O
			})), r.d(t, "paymentBlobCreated", (function() {
				return P
			})), r.d(t, "openWithBlob", (function() {
				return j
			}));
			var n = r("./src/config.ts"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				c = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/formatApiError/index.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/constants/modals.ts"),
				m = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = r("./src/reddit/endpoints/gold/purchase.ts"),
				f = r("./src/reddit/helpers/correlationIdTracker.ts"),
				b = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const h = Object(s.a)(y.x),
				g = Object(s.a)(y.e),
				v = (e, t) => async r => {
					r(h(e)), r(Object(l.h)(u.a.ECON_PREMIUM_PURCHASE, t))
				}, C = () => async e => {
					e(Object(l.g)(u.a.ECON_PREMIUM_PURCHASE)), e(g())
				}, O = (e, t) => async (r, n, s) => {
					let {
						apiContext: o
					} = s;
					const l = Object(b.a)(n()),
						u = (null == l ? void 0 : l.pennies) || c.yb,
						m = Object(f.c)(f.a.GoldPayment);
					r(Object(d.stripeTokenPending)());
					const y = await r(Object(d.validateAndCreateStripeToken)(e, t));
					if (y) try {
						const e = await Object(p.f)({
							context: o(),
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
				}, P = Object(s.a)(y.z), j = (e, t) => {
					let {
						packageId: r,
						correlationId: a
					} = e;
					return async (e, s, c) => {
						let {
							apiContext: l
						} = c;
						e(v({
							packageId: r,
							correlationId: a
						}, t));
						const u = Object(b.a)(s()),
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
							} else e(P(t))
						} catch (f) {
							const t = Object(i.a)(f);
							e(Object(d.paypalApiError)(t))
						} else o.c.captureMessage("No Premium packages available on Premium purchase modal")
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
				s = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				o = r("./src/reddit/controls/Button/index.tsx");
			var c = e => {
					let {
						paypalUrl: t,
						finishPaymentCallback: r
					} = e, a = window;
					const s = Object(n.useCallback)(e => {
						const t = o(e);
						"paypal-finish.success.framedmodal" === (null == t ? void 0 : t.type) ? (r(), null == a || a.close()) : "paypal-finish.cancel.framedmodal" === (null == t ? void 0 : t.type) && (null == a || a.close())
					}, [r, a]);
					if (Object(n.useEffect)(() => (window.addEventListener("message", s, !1), () => window.removeEventListener("message", s)), [s]), t) {
						const e = 580,
							r = 740,
							n = Math.max(window.screenX + Math.round((window.outerWidth - e) / 2), 0),
							s = Math.max(window.screenY + Math.round((window.outerHeight - r) / 2), 0);
						a = window.open(`${t}&rnd=${Math.random()}`, "RedditPaypalPayment", `height=${r},width=${e},top=${s},left=${n},modal=yes,alwaysRaised=yes`)
					}
					const o = e => {
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
					C = Object(n.useCallback)(() => {
						p()
					}, [p]);
				c({
					paypalUrl: g,
					finishPaymentCallback: C
				});
				return a.a.createElement(o.t, {
					onClick: async () => {
						if (!l) return;
						null == f || f(), h(!0);
						const e = await b(Object(s.h)({
							productOffer: l,
							pricePackage: u,
							productsCount: r,
							extraParams: m || {}
						}));
						e && (Object(s.d)(e) ? e.success && p() : v(e.url)), h(!1)
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
				s = r.n(a),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
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
					v = Object(o.e)(l.w),
					C = Object(o.e)(l.m) || v;
				return s.a.createElement(i.t, {
					onClick: async () => {
						if (!h || !g || !r) return;
						null == b || b();
						const e = await y(Object(c.j)({
							stripe: h,
							stripeElements: g,
							productOffer: r,
							pricePackage: a,
							productsCount: m,
							extraParams: p || {}
						}));
						Object(c.d)(e) && e.success && f()
					},
					className: t,
					disabled: C || !h
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
				s = r("./src/reddit/controls/Button/index.tsx"),
				o = r("./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less"),
				c = r.n(o);
			const {
				fbt: i
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					buttonText: t,
					onCloseClick: r
				} = e;
				return a.a.createElement("div", {
					className: c.a.purchaseFooter
				}, a.a.createElement(s.l, {
					className: c.a.purchaseButton,
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
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/config.ts"),
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
				C = r("./src/reddit/selectors/platform.ts"),
				O = r("./src/reddit/selectors/user.ts"),
				P = r("./src/reddit/models/Gold/ProductOffer.ts"),
				j = r("./src/reddit/selectors/gold/productOffers.ts"),
				E = r("./node_modules/fbt/lib/FbtPublic.js"),
				x = r("./src/lib/loadRedditAdsPixel.ts"),
				_ = r("./src/reddit/actions/modal.ts"),
				k = r("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				w = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				N = r("./src/reddit/constants/modals.ts"),
				S = r("./src/reddit/helpers/createEmojiText/index.tsx"),
				I = r("./src/reddit/hooks/useTracking.ts"),
				M = r("./src/reddit/icons/fonts/Premium/index.tsx"),
				T = r("./src/reddit/selectors/activeModal.ts"),
				A = r("./src/reddit/components/PremiumPurchaseModal/index.m.less"),
				R = r.n(A);
			var B = e => {
					let {
						onCloseClick: t
					} = e;
					const r = Object(I.a)(),
						o = Object(s.d)(),
						i = Object(s.e)(C.s),
						d = Object(s.e)(e => {
							var t, r;
							return null !== (r = null === (t = Object(T.a)(e)) || void 0 === t ? void 0 : t.isPowerupsPremiumPurchase) && void 0 !== r && r
						});
					Object(n.useEffect)(() => {
						r(Object(h.j)()), Object(x.b)()
					}, [r]);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: R.a.paymentCompleteHeader,
						style: {
							backgroundImage: `url("${c.a.assetPath}/img/gold/premium-hero-g.jpg")`
						}
					}, a.a.createElement(M.a, {
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
					}, Object(S.a)(E.fbt._("Find more about {anchor text} on Reddit.", [E.fbt._param("anchor text", ":loungeLink:")], {
						hk: "2RGr1F"
					}), {
						":loungeLink:": a.a.createElement("a", {
							href: "/r/lounge",
							target: "_blank"
						}, "r/lounge")
					}))), a.a.createElement("button", {
						className: R.a.closeButton,
						onClick: t
					}, a.a.createElement(w.b, {
						className: R.a.closeIcon,
						"data-redditstyle": !0
					}))), a.a.createElement(k.a, {
						onCloseClick: () => {
							d ? o(Object(_.h)(N.a.ECON_POWERUPS_PURCHASE, {
								subredditId: i
							})) : t()
						},
						buttonText: d ? E.fbt._("Use Your Premium Powerup", null, {
							hk: "1r0NDt"
						}) : null
					}))
				},
				F = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				L = r("./src/lib/currency/currencies.ts"),
				D = r("./src/lib/localizeCurrency/index.ts"),
				U = r("./src/reddit/components/Econ/ProductOfferPurchaseButton/Paypal.tsx"),
				G = r("./src/reddit/components/Econ/ProductOfferPurchaseButton/Stripe.tsx"),
				q = r("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				Q = r("./src/reddit/components/StripePaymentForm/index.tsx"),
				V = r("./src/reddit/hooks/useLocale.ts"),
				W = r("./src/reddit/hooks/useStripePromise.ts"),
				H = r("./src/reddit/models/Payments/index.ts");
			var Y = e => a.a.createElement("div", {
				className: R.a.premiumPurchaseHeader,
				style: {
					backgroundImage: `url("${c.a.assetPath}/img/gold/premium-hero-g.jpg")`
				}
			}, a.a.createElement(M.a, {
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
			}, a.a.createElement(w.b, {
				className: R.a.closeIcon,
				"data-redditstyle": !0
			})));
			var J = e => {
				const t = Object(W.a)(),
					r = Object(V.b)(),
					n = Object(s.d)(),
					o = Object(s.e)(O.k),
					c = Object(D.b)(e.total, {
						locale: r,
						type: L.b.Real
					}),
					i = Object(s.e)(e => Object(j.c)(e, {
						provider: H.b.Stripe
					})),
					d = Object(s.e)(e => Object(j.c)(e, {
						provider: H.b.PayPal
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
					f = e.selectedPayment === l.Hb,
					b = e.selectedPayment === l.Gb,
					y = f ? U.a : G.a;
				return a.a.createElement(F.Elements, {
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
				}, a.a.createElement(F.ElementsConsumer, null, t => {
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
				}, E.fbt._("Total: {Price}/{Membership Term}", [E.fbt._param("Price", c), E.fbt._param("Membership Term", u)], {
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
				}))), E.fbt._param("Renewal Term", u), E.fbt._param("Price", c), E.fbt._param("Length of term", p)], {
					hk: "2gscIO"
				}))), a.a.createElement("div", {
					className: R.a.premiumPurchaseSelectPaymentFooter
				}, e.premiumProductOffer && a.a.createElement(y, {
					productsCount: 1,
					className: R.a.premiumPurchaseButton,
					productOffer: e.premiumProductOffer,
					pricePackage: f ? d : i,
					onPaymentSuccess: () => {
						o && n(Object(m.f)({
							user: o
						}))
					}
				}))))
			};

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const K = Object(o.c)({
					activePremiumPackage: v.a,
					activePage: v.n,
					allowNavigationCallback: e => {
						const t = Object(C.a)(e);
						return null === t ? void 0 : t
					},
					nightmode: O.db,
					passthrough: v.e,
					selectedPayment: v.c,
					stripeErrorMessage: v.j,
					stripeTokenPending: v.m,
					paypalErrorMessage: v.d,
					userName: e => {
						const t = Object(O.k)(e);
						return `u/${Object(g.e)(t)}`
					},
					renewInterval: v.p,
					premiumProductOffer: j.d,
					premiumPrice: j.b
				}),
				X = Object(s.b)(K, (e, t) => ({
					closeModal: () => e(Object(f.closePremiumPurchaseModal)()),
					onCloseModalClick: () => e(Object(f.closePremiumPurchaseModal)()),
					onPaymentSelected: t => e(Object(p.selectPaymentMethod)(t)),
					onLoadSavedCards: () => e(Object(m.e)())
				})),
				z = Object(i.a)(e => {
					let {
						sendEvent: t,
						activePage: r,
						activePremiumPackage: s,
						className: o,
						nightmode: i,
						selectedPayment: d,
						onPaymentSelected: m,
						onTryCloseModal: p,
						passthrough: f,
						stripeErrorMessage: b,
						stripeTokenPending: g,
						paypalErrorMessage: v,
						userName: C,
						renewInterval: O,
						premiumProductOffer: j,
						premiumPrice: E,
						onLoadSavedCards: x
					} = e, _ = l.yb, k = !1;
					j && E ? (_ = E, k = O === P.b.Year) : s && (_ = s ? s.pennies : l.yb, k = !!s && s.frequency === u.c.Yearly);
					const w = Object(n.useCallback)(e => {
						if (27 === e.keyCode) return p()
					}, [p]);
					return Object(n.useEffect)(() => (document.addEventListener("keydown", w), Object(y.d)(y.a.GoldPayment, !1), t(Object(h.i)()), () => document.removeEventListener("keydown", w)), [w, t]), Object(n.useEffect)(() => {
						b && t(Object(h.g)())
					}, [t, b]), Object(n.useEffect)(() => {
						x()
					}, [x]), a.a.createElement("div", {
						className: o
					}, "selectPayment" === r && a.a.createElement(J, {
						nightmode: i,
						onCloseModal: p,
						onPaymentSelected: m,
						isAnnualPremium: k,
						passthrough: f,
						paypalButtonId: (null == s ? void 0 : s.paypalButtonId) || c.a.paypal.buttons.premium,
						selectedPayment: d,
						stripeErrorMessage: b,
						stripeTokenPending: g,
						paypalErrorMessage: v,
						premiumProductOffer: j,
						total: _,
						userName: C
					}), "paymentCompleted" === r && a.a.createElement(B, {
						onCloseClick: p
					}))
				});
			t.default = X(Object(b.c)(class extends a.a.PureComponent {
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
					return a.a.createElement(z, $({}, this.props, {
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
			const C = Object(o.c)({
				cardCvcValidation: u.f,
				cardExpiryValidation: u.g,
				cardName: u.h,
				cardNumberValidation: u.i,
				nameOnCardValidation: u.k,
				postalCode: u.l
			});
			class O extends a.a.Component {
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
						cardExpiryReady: h,
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
						className: Object(c.a)(v.a.checkoutForm, e)
					}, a.a.createElement("div", {
						className: v.a.formCellWide
					}, a.a.createElement("input", {
						className: Object(c.a)(v.a.cardInput, v.a.nameOnCard, {
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
						className: Object(c.a)(v.a.cardInput, {
							[v.a.cardInputError]: !!s
						}),
						onChange: o,
						onReady: this.onCardNumberReady,
						options: {
							placeholder: b.fbt._("CARD NUMBER", null, {
								hk: "3pqMxG"
							}).toString(),
							style: C
						}
					}), !p && a.a.createElement("div", {
						className: v.a.elementPlaceholder
					}, b.fbt._("CARD NUMBER", null, {
						hk: "3pqMxG"
					}))), a.a.createElement("div", {
						className: v.a.formCell
					}, a.a.createElement(y.CardExpiryElement, {
						className: Object(c.a)(v.a.cardInput, {
							[v.a.cardInputError]: !!r
						}),
						onChange: i,
						onReady: this.onCardExpiryReady,
						options: {
							placeholder: b.fbt._("MM/YY", null, {
								hk: "Hou17"
							}).toString(),
							style: C
						}
					}), !h && a.a.createElement("div", {
						className: v.a.elementPlaceholder
					}, b.fbt._("MM/YY", null, {
						hk: "Hou17"
					}))), a.a.createElement("div", {
						className: v.a.formCell
					}, a.a.createElement(y.CardCvcElement, {
						className: Object(c.a)(v.a.cardInput, {
							[v.a.cardInputError]: !!t
						}),
						onChange: d,
						onReady: this.onCardCVCReady,
						options: {
							placeholder: b.fbt._("CCV", null, {
								hk: "dZzZJ"
							}).toString(),
							style: C
						}
					}), !g && a.a.createElement("div", {
						className: v.a.elementPlaceholder
					}, b.fbt._("CCV", null, {
						hk: "dZzZJ"
					}))), a.a.createElement("div", {
						className: v.a.formCell
					}, a.a.createElement("input", {
						className: Object(c.a)(v.a.cardInput, v.a.nameOnCard),
						type: "text",
						onChange: this.onChangePostalCode,
						placeholder: b.fbt._("ZIP CODE", null, {
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
				}))(O),
				j = r("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				E = r("./src/reddit/components/StripePaymentForm/index.m.less"),
				x = r.n(E);
			var _ = e => {
					const {
						onToggleRememberCard: t,
						rememberCard: r
					} = e, n = Object(y.useStripe)();
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(P, {
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
				k = r("./src/reddit/icons/svgs/Trash2/index.tsx");
			const {
				fbt: w
			} = r("./node_modules/fbt/lib/FbtPublic.js"), N = e => 2 === e.length ? e : "0" + e, S = e => {
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
					} = this.props, t = S(e.brand);
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
					}, a.a.createElement("span", null, w._("Card ending in {Credit Card last four digits}", [w._param("Credit Card last four digits", e.last4)], {
						hk: "3dMxMn"
					})), a.a.createElement("span", {
						className: x.a.expiry
					}, w._("Expires {month} / {year}", [w._param("month", N(e.expirationMonth.toString())), w._param("year", e.expirationYear.toString())], {
						hk: "3iXzVI"
					}))), this.state.showConfirmText ? a.a.createElement("button", {
						className: x.a.confirmText,
						onClick: this.onConfirmClick
					}, w._("Confirm", null, {
						hk: "gFhpD"
					})) : a.a.createElement("button", {
						onClick: this.onTrashCanClick
					}, a.a.createElement(k.b, {
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
				A = Object(s.b)(T, e => ({
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
						rememberCard: s,
						savedCard: o,
						stripe: i,
						stripeInfoLoading: d
					} = this.props;
					if (!i) return a.a.createElement(f, {
						className: Object(c.a)(x.a.stripePaymentForm, e)
					});
					const u = d,
						m = !u && o,
						p = !u && !m,
						b = u ? x.a.loadingState : m ? x.a.savedCardState : x.a.formState;
					return a.a.createElement("div", {
						className: Object(c.a)(x.a.stripePaymentForm, b, e)
					}, u && a.a.createElement(l.a, {
						className: x.a.loader,
						sizePx: 60
					}), m && o && a.a.createElement("form", null, a.a.createElement(M, {
						nightmode: t,
						onDelete: r,
						savedCard: o
					})), p && a.a.createElement(_, {
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
				return O
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
					}, s), c && d.a.createElement(y, {
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
					}, o.map((e, t) => d.a.createElement(v, {
						className: r,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				O = e => d.a.createElement(C, {
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
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = r.n(o);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: n = 10
				} = e;
				return a.a.createElement("div", {
					className: Object(s.a)(c.a.loadingIcon, r, {
						[c.a.mCentered]: t
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
				s = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts"),
				c = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
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
					m = Object(c.a)(u);
				return Object(a.a)(Object(s.a)(r, [o.a]), {
					method: n.jb.POST,
					endpoint: m,
					data: l
				}).then(i.a)
			}, l = async e => {
				let {
					context: t,
					coins: r,
					pennies: c,
					correlationId: d
				} = e;
				const l = {
					coins: r,
					pennies: c,
					correlation_id: d
				};
				return Object(a.a)(Object(s.a)(t, [o.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: l
				}).then(i.a)
			}, u = async e => {
				let {
					context: t,
					awardId: r,
					pennies: c,
					thingId: d,
					correlationId: l
				} = e;
				const u = {
					award_id: r,
					correlation_id: l,
					pennies: c,
					thing_id: d
				};
				return Object(a.a)(Object(s.a)(t, [o.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: u
				}).then(i.a)
			}, m = async e => {
				let {
					context: t,
					offerContext: r,
					orderId: c,
					coins: d,
					pennies: l,
					correlationId: u
				} = e;
				const m = {
					offer_context: r,
					order_id: c,
					coins: d,
					pennies: l,
					correlation_id: u
				};
				return Object(a.a)(Object(s.a)(t, [o.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: m
				}).then(i.a)
			}, p = async e => {
				let {
					awardId: t,
					context: r,
					coins: c,
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
					coins: c,
					correlation_id: d,
					is_anonymous: l,
					message: u,
					offer_context: m,
					order_id: p,
					pennies: f,
					thing_id: b
				};
				return Object(a.a)(Object(s.a)(r, [o.a]), {
					method: n.jb.POST,
					endpoint: `${r.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: y
				}).then(i.a)
			}, f = async e => {
				let {
					awardId: t,
					context: r,
					correlationId: c,
					isAnonymous: d,
					message: l,
					orderId: u,
					thingId: m
				} = e;
				const p = {
					award_id: t,
					correlation_id: c,
					is_anonymous: d,
					message: l,
					order_id: u,
					thing_id: m
				};
				return Object(a.a)(Object(s.a)(r, [o.a]), {
					method: n.jb.POST,
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
				return C
			})), r.d(t, "j", (function() {
				return O
			})), r.d(t, "g", (function() {
				return P
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "l", (function() {
				return k
			})), r.d(t, "k", (function() {
				return w
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
				y = r("./src/lib/makeGqlRequest/index.ts");
			const h = (e, t, r, n, s, o) => {
				const c = new a.a(n.price).multipliedBy(s).toFixed();
				return Object(y.a)(e, {
					...d,
					variables: {
						input: {
							nonce: t,
							productId: r.id,
							productVersion: r.version,
							pricePackageId: n.id,
							currency: n.currency,
							price: c,
							productsCount: s.toString(),
							...o
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
				C = (e, t, r, n) => Object(y.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				O = (e, t, r, n) => Object(y.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: r,
						cardId: n
					}
				}),
				P = (e, t, r, n, a) => Object(y.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: r,
						successUrl: n,
						cancelUrl: a
					}
				}),
				j = (e, t, r, n) => Object(y.a)(e, {
					...o,
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
					...c,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
						saveCard: a
					}
				}),
				_ = (e, t) => Object(y.a)(e, {
					...s,
					variables: {
						orderId: t
					}
				}),
				k = e => Object(y.a)(e, {
					...b,
					variables: {}
				}),
				w = (e, t) => Object(y.a)(e, {
					...f,
					variables: {
						cardId: t
					}
				})
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n);

			function s(e, t) {
				const r = e.toString().split(":");
				return r.length % 2 == 0 ? e : r.reduce((e, r, n) => (n % 2 == 0 ? e.push(r) : "" === r ? e.push(":") : `:${r}:` in t ? e.push(t[`:${r}:`]) : e.push(`:${r}:`), e), []).map((e, t) => a.a.createElement(a.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return i
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

			function i(e) {
				const t = new n.BigNumber(e),
					r = new n.BigNumber("1e18");
				return t.dividedBy(r).toString()
			}
		},
		"./src/reddit/hooks/useStripePromise.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return y
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
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				a = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const s = Object(a.a)(n.dd)
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
				return m
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "e", (function() {
				return h
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/makeProductOfferKey/index.ts"),
				s = r("./src/reddit/models/Gold/ProductOffer.ts"),
				o = r("./src/reddit/models/Payments/index.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				d = (e, t) => {
					let {
						subredditId: r,
						type: n
					} = t;
					var s, o, c;
					return r ? e.subreddits.productOffers[Object(a.a)(n, r)] : null === (c = null === (o = null === (s = e.features) || void 0 === s ? void 0 : s.goldPurchase) || void 0 === o ? void 0 : o.productOffers) || void 0 === c ? void 0 : c[Object(a.a)(n)]
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
				m = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === o.b.PayPal || e[0] === o.b.Stripe)(e.requiredPaymentProviders)) : null,
				p = Object(n.a)(u, c.p, (e, t) => m(e, t) || null),
				f = Object(n.a)(p, (e, t) => {
					let {
						provider: r
					} = t;
					return r
				}, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				b = Object(n.a)(p, e => (null == e ? void 0 : e[0].price) || null),
				y = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				h = Object(n.a)(y, e => Boolean(null == e ? void 0 : e.isCanceled))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.5c73c0b8228e50c38167.js.map