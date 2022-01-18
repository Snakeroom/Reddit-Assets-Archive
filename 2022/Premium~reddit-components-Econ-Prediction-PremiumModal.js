// https://www.redditstatic.com/desktop2x/Premium~reddit-components-Econ-Prediction-PremiumModal.06d9f223499a00cb1688.js
// Retrieved at 1/18/2022, 11:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Premium~reddit-components-Econ-Prediction-PremiumModal"], {
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
						function e(e, t, n, a, o, i) {
							if (i !== r) {
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

				function i(e) {
					return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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

				function c(e, t) {
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
						t % 2 ? c(Object(r), !0).forEach((function(t) {
							s(e, t, r[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
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
								for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
							} catch (c) {
								a = !0, o = c
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
						return null !== e && "object" === i(e)
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
									i = Object.keys(r);
								if (o.length !== i.length) return !1;
								for (var s = {}, c = 0; c < o.length; c += 1) s[o[c]] = !0;
								for (var d = 0; d < i.length; d += 1) s[i[d]] = !0;
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
						o = t.useRef(!1),
						i = t.useRef(!0),
						s = t.useMemo((function() {
							return h(r)
						}), [r]),
						c = l(t.useState((function() {
							return {
								stripe: null,
								elements: null
							}
						})), 2),
						d = c[0],
						u = c[1],
						p = m(r);
					null !== p && p !== r && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), o.current || ("sync" === s.tag && (o.current = !0, u({
						stripe: s.stripe,
						elements: s.stripe.elements(n)
					})), "async" === s.tag && (o.current = !0, s.stripePromise.then((function(e) {
						e && i.current && u({
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
							i.current = !1
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
					stripe: o.any,
					options: o.object
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
					children: o.func.isRequired
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
					k = function() {},
					P = function(e, r) {
						var n, a = "".concat((n = e).charAt(0).toUpperCase() + n.slice(1), "Element"),
							i = r ? function(e) {
								O("mounts <".concat(a, ">"));
								var r = e.id,
									n = e.className;
								return t.createElement("div", {
									id: r,
									className: n
								})
							} : function(r) {
								var n = r.id,
									o = r.className,
									i = r.options,
									s = void 0 === i ? {} : i,
									c = r.onBlur,
									d = void 0 === c ? k : c,
									l = r.onFocus,
									u = void 0 === l ? k : l,
									p = r.onReady,
									b = void 0 === p ? k : p,
									h = r.onChange,
									y = void 0 === h ? k : h,
									g = r.onEscape,
									j = void 0 === g ? k : g,
									P = r.onClick,
									E = void 0 === P ? k : P,
									_ = O("mounts <".concat(a, ">")).elements,
									w = t.useRef(null),
									x = t.useRef(null),
									C = v(b),
									I = v(d),
									N = v(u),
									S = v(E),
									A = v(y),
									M = v(j);
								t.useLayoutEffect((function() {
									if (null == w.current && _ && null != x.current) {
										var t = _.create(e, s);
										w.current = t, t.mount(x.current), t.on("ready", (function() {
											return C(t)
										})), t.on("change", A), t.on("blur", I), t.on("focus", N), t.on("escape", M), t.on("click", S)
									}
								}));
								var T = m(s);
								return t.useEffect((function() {
									if (w.current) {
										var e = f(s, T, ["paymentRequest"]);
										e && w.current.update(e)
									}
								}), [s, T]), t.useLayoutEffect((function() {
									return function() {
										w.current && w.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: o,
									ref: x
								})
							};
						return i.propTypes = {
							id: o.string,
							className: o.string,
							onChange: o.func,
							onBlur: o.func,
							onFocus: o.func,
							onReady: o.func,
							onClick: o.func,
							options: o.object
						}, i.displayName = a, i.__elementType = e, i
					},
					E = "undefined" == typeof window,
					_ = P("auBankAccount", E),
					w = P("card", E),
					x = P("cardNumber", E),
					C = P("cardExpiry", E),
					I = P("cardCvc", E),
					N = P("fpxBank", E),
					S = P("iban", E),
					A = P("idealBank", E),
					M = P("p24Bank", E),
					T = P("epsBank", E),
					B = P("payment", E),
					L = P("paymentRequestButton", E),
					R = P("linkAuthentication", E),
					U = P("shippingAddress", E),
					G = P("afterpayClearpayMessage", E);
				e.AfterpayClearpayMessageElement = G, e.AuBankAccountElement = _, e.CardCvcElement = I, e.CardElement = w, e.CardExpiryElement = C, e.CardNumberElement = x, e.Elements = g, e.ElementsConsumer = j, e.EpsBankElement = T, e.FpxBankElement = N, e.IbanElement = S, e.IdealBankElement = A, e.LinkAuthenticationElement = R, e.P24BankElement = M, e.PaymentElement = B, e.PaymentRequestButtonElement = L, e.ShippingAddressElement = U, e.useElements = function() {
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
				return i
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "f", (function() {
				return c
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
				i = "ETH",
				s = "COINS",
				c = [i, "BTC"],
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
				i = r("./src/lib/prettyPrintNumber/index.ts"),
				s = r("./src/reddit/helpers/governance/tokens.ts"),
				c = r("./src/reddit/constants/intlSupport.ts");
			const d = (e, {
					locale: t = n.DEFAULT_LOCALE,
					pretty: r,
					formatOptions: a
				} = {}) => {
					const o = Number(e);
					return Object(c.c)() ? r ? Object(i.b)(o) : new Intl.NumberFormat(t, a).format(o) : u(o, r, t)
				},
				l = (e, t = {}) => {
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: i,
						formatOptions: d,
						displayConversion: l,
						forceDecimals: f,
						currency: b = t.currency || (t.type ? p(t.type) : o.c),
						type: h = t.type || (t.currency ? m(t.currency) : o.b.Real)
					} = t, y = Number(e), g = String(e);
					switch (h) {
						case o.b.Reddit: {
							const e = o.e[b],
								t = e ? e() : b;
							return Object(c.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(y) + " " + t : u(y, i, r, t)
						}
						case o.b.Crypto: {
							if (i) {
								return Object(s.c)(g, l) + " " + b
							}
							const e = Number(Object(s.b)(g, l));
							return Object(c.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : u(e, i, r, b)
						}
						case o.b.Real:
						default: {
							const e = Number(Object(a.a)(g, f));
							return Object(c.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								notation: i ? "compact" : "standard",
								...d
							}).format(e) : u(e, i, r, b)
						}
					}
				},
				u = (e, t, r, n) => {
					return (t ? Object(i.b)(e) : e.toLocaleString(r)) + (n ? " " + n : "")
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
				return x
			})), r.d(t, "j", (function() {
				return I
			})), r.d(t, "g", (function() {
				return N
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "c", (function() {
				return M
			})), r.d(t, "a", (function() {
				return U
			})), r.d(t, "h", (function() {
				return D
			})), r.d(t, "e", (function() {
				return q
			})), r.d(t, "i", (function() {
				return F
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/omit.js"),
				o = r.n(a),
				i = r("./node_modules/uuid/v4.js"),
				s = r.n(i),
				c = r("./src/config.ts"),
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
				O = r("./src/reddit/selectors/user.ts"),
				j = r("./src/reddit/models/Gold/ProductOffer.ts"),
				v = r("./src/reddit/actions/gold/powerups.ts"),
				k = r("./src/reddit/actions/modal.ts"),
				P = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				E = r("./src/reddit/models/Payments/index.ts");
			const _ = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				w = e => e.map(e => e.message).join(" : "),
				x = (e, t, r) => async (a, o, {
					gqlContext: i
				}) => {
					const c = s()(),
						d = await Object(P.f)(i(), c, e, t, r);
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
				}, C = Object(h.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
					hk: "2LgB2E"
				})), I = (e, t, r, n, a, o, i) => async (c, d, {
					gqlContext: l
				}) => {
					var u;
					const m = d(),
						f = o === j.c.Premium,
						b = o === j.c.Powerups,
						v = {};
					if (b && i) v.powerUps = {
						subredditId: i,
						isAnonymous: n
					};
					else if (f) {
						const e = Object(y.d)(m, {
							provider: E.b.Stripe
						});
						if (!e) return;
						v.premium = {
							pricePackage: e
						}
					}
					let k, _, I = "";
					try {
						I = await c(x(r, a, v))
					} catch (S) {
						return p.c.captureException(S), void(S.message && c(Object(h.stripeApiError)(S.message)))
					}
					c(Object(h.stripeTokenPending)());
					const N = Object(g.y)(m);
					if (N || (k = await c(Object(h.validateAndCreateStripeToken)(e, t)), _ = Object(g.v)(m), k)) try {
						const t = s()(),
							r = N || _ ? k && _ ? Object(P.h)(l(), t, I, k.id) : N ? Object(P.j)(l(), t, I, N) : null : Object(P.i)(l(), t, I, k.id),
							o = await r;
						if (!(null == o ? void 0 : o.ok)) return void c(C);
						const m = o.body.data.createEconPayment;
						if (null === (u = null == m ? void 0 : m.errors) || void 0 === u ? void 0 : u.length) return void c(Object(h.stripeApiError)(w(m.errors)));
						const {
							ok: p,
							payment: y,
							providerExecution: {
								paymentIntentClientSecret: g
							}
						} = m;
						if (p && y.status === P.a.ActionRequired) {
							const t = await e.confirmCardPayment(g),
								{
									error: r
								} = t;
							if (r) return ((e, t) => {
								var r, n;
								(null === (n = null === (r = e.payment_intent) || void 0 === r ? void 0 : r.last_payment_error) || void 0 === n ? void 0 : n.message) ? t(Object(h.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(h.stripeApiError)(e.message)) : t(C)
							})(r, c);
							let n;
							if (!(n = N ? await Object(P.e)(l(), s()(), y.id, N) : await Object(P.d)(l(), s()(), y.id, k.id, _)).ok) return void c(C);
							const a = n.body;
							if (!a.data.confirmEconPayment.ok || a.data.confirmEconPayment.payment.status !== P.a.Paid) return void c(C)
						} else if (p && y.status !== P.a.Paid) return void c(C);
						const j = Object(O.k)(d());
						j && (b && i ? c(D({
							subredditId: i,
							powerupsCount: a,
							user: j,
							isAnonymous: n
						})) : f && c(q({
							user: j
						})))
					} catch (S) {
						p.c.captureException(S), c(C)
					}
				}, N = (e, t, r, n, a) => async (o, i, {
					gqlContext: d
				}) => {
					var l;
					const m = i(),
						f = n === j.c.Premium,
						b = n === j.c.Powerups,
						g = {};
					if (b && a) g.powerUps = {
						subredditId: a,
						isAnonymous: t
					};
					else if (f) {
						const e = Object(y.d)(m, {
							provider: E.b.PayPal
						});
						if (!e) return null;
						g.premium = {
							pricePackage: e
						}
					}
					let v = "";
					try {
						v = await o(x(e, r, g))
					} catch (I) {
						return p.c.captureException(I), I.message && o(Object(h.paypalApiError)(I.message)), null
					}
					const k = c.a.redditUrl;
					let C = {
						_o: k,
						o: v,
						pt: n
					};
					b && a && (C = {
						...C,
						r: a
					});
					try {
						const e = Object(u.a)(`${k}/framedModal/paypal-finish`, {
								...C,
								s: !0
							}),
							n = Object(u.a)(`${k}/framedModal/paypal-finish`, C),
							c = s()(),
							m = await Object(P.g)(d(), c, v, e, n);
						if (m && m.ok) {
							const e = m.body.data.createEconPayment;
							if (null === (l = null == e ? void 0 : e.errors) || void 0 === l ? void 0 : l.length) return o(Object(h.paypalApiError)(w(e.errors))), null;
							const n = Object(O.k)(i());
							if (e.ok) {
								const {
									status: i
								} = e.payment;
								if (i === P.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === i && n) return a ? o(D({
									subredditId: a,
									powerupsCount: r,
									user: n,
									isAnonymous: t
								})) : f && o(q({
									user: n
								})), null
							}
						}
					} catch (I) {
						p.c.captureException(I)
					}
					return o(Object(h.paypalApiError)(_())), null
				}, S = (e, t) => async (r, n, {
					gqlContext: a
				}) => {
					var o;
					try {
						const n = s()(),
							i = await Object(P.c)(a(), n, e, t);
						if (i && i.ok) {
							const e = i.body.data.confirmEconPayment;
							if (null === (o = null == e ? void 0 : e.errors) || void 0 === o ? void 0 : o.length) return r(Object(h.paypalApiError)(w(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (i) {
						p.c.captureException(i)
					}
					return r(Object(h.paypalApiError)(_())), !1
				}, A = () => async (e, t, {
					gqlContext: r
				}) => {
					e(Object(h.savedCardsPending)());
					try {
						const t = await Object(P.l)(r());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(h.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: n
							} = r.data.identity, a = n.map(e => o()({
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
				}, M = e => async (t, r, {
					gqlContext: n
				}) => {
					t(Object(h._deleteSavedCard)(e));
					try {
						const t = await Object(P.k)(n(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: a
							} = r.data.deleteEconPaymentMethod;
						if (a && a.length) throw new Error(w(a))
					} catch (a) {
						p.c.captureException(a)
					}
				}, T = Object(m.a)(b.O), B = Object(m.a)(b.P), L = Object(m.a)(b.Q), R = e => async (t, r) => {
					await t(T(e)), t(Object(l.f)({
						kind: f.b.Error,
						duration: l.a,
						text: e
					}))
				}, U = (e, t, r) => async (a, o, {
					gqlContext: i
				}) => {
					a(B({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const o = await Object(P.b)(i(), e);
						if (o.ok) {
							const e = o.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void a(R(n[0].message));
							a(L({
								subredditId: t,
								allocatedAt: r
							}))
						} else a(R(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (s) {
						p.c.captureException(s), a(R(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, G = Object(m.a)(b.S), D = e => async (t, r) => {
					t(G(e)), t(Object(v.m)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(k.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(k.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, H = Object(m.a)(b.W), q = ({
					user: e
				}) => async t => {
					await t(Object(v.o)(!0)), t(H({
						user: e
					}))
				}, F = Object(m.a)(b.ab)
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
				a = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				s = r("./src/reddit/models/Gold/ProductOffer.ts"),
				c = r("./src/reddit/models/Toast/index.ts"),
				d = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				l = r("./src/lib/makeGqlRequest/index.ts"),
				u = r("./src/redditGQL/operations/GlobalProductOffers.json"),
				m = r("./src/redditGQL/operations/PremiumProductOfferSubscriptions.json"),
				p = r("./src/redditGQL/operations/ProductOffers.json");
			var f = r("./src/reddit/selectors/gold/productOffers.ts"),
				b = r("./src/reddit/actions/gold/constants.ts");
			const h = Object(a.a)(b.db),
				y = Object(a.a)(b.cb),
				g = Object(a.a)(b.bb),
				O = Object(a.a)(b.Z),
				j = Object(a.a)(b.Y),
				v = Object(a.a)(b.X),
				k = Object(a.a)(b.Eb),
				P = Object(a.a)(b.Cb),
				E = Object(a.a)(b.Db),
				_ = Object(a.a)(b.Hb),
				w = Object(a.a)(b.Gb),
				x = Object(a.a)(b.Fb),
				C = e => async t => {
					t(Object(i.f)({
						kind: c.b.Error,
						duration: i.a,
						text: e
					}))
				}, I = (e, t) => async r => {
					e === s.c.Premium ? r(S()) : t && r(N(e, t))
				}, N = (e, t) => async (r, a, {
					gqlContext: o
				}) => {
					const i = a();
					if (!Object(f.i)(i, {
							subredditId: t,
							type: e
						})) {
						r(h());
						try {
							const n = await ((e, t, r, n) => Object(l.a)(e, {
								...p,
								variables: {
									subredditId: t,
									types: r,
									includeGlobal: n
								}
							}))(o(), t, [e], !0);
							if (n.ok) {
								const e = n.body;
								if (e.errors && e.errors.length) throw new Error(e.errors[0].message);
								const a = e.data.subredditInfoById.productOffers ? e.data.subredditInfoById.productOffers.offers : [];
								return void(await r(y({
									productOffers: a || [],
									subredditId: t
								})))
							}
						} catch (s) {
							const e = n.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							});
							r(g(e)), r(C(e))
						}
					}
				}, S = () => async (e, t, {
					gqlContext: r
				}) => {
					var a, i;
					const c = s.c.Premium;
					e(O());
					try {
						const t = await ((e, t) => Object(l.a)(e, {
							...u,
							variables: {
								productTypes: t
							}
						}))(r(), [c]);
						if (t.ok) {
							const r = t.body;
							if (null === (a = r.errors) || void 0 === a ? void 0 : a.length) throw new Error(r.errors[0].message);
							return void e(j({
								productOffers: null !== (i = r.data.globalProductOffers.offers) && void 0 !== i ? i : []
							}))
						}
					} catch (d) {
						const t = d.message ? d.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						o.c.captureMessage(t), e(v(t)), e(C(t))
					}
				}, A = () => async (e, t, {
					gqlContext: r
				}) => {
					var a, i, s;
					e(k());
					try {
						const t = await (e => Object(l.a)(e, m))(r());
						if (t.error) throw new Error(t.error.type);
						if (t.ok) {
							const r = t.body;
							if (null === (a = r.errors) || void 0 === a ? void 0 : a.length) throw new Error(r.errors[0].message);
							return void e(E({
								subscriptions: null !== (s = null === (i = r.data.identity) || void 0 === i ? void 0 : i.econSubscriptions) && void 0 !== s ? s : []
							}))
						}
					} catch (c) {
						o.c.captureException(c);
						const t = c.message ? c.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						e(P(t)), e(C(t))
					}
				}, M = e => async (t, r, {
					gqlContext: a
				}) => {
					var o;
					t(_(e));
					try {
						const r = await Object(d.b)(a(), e);
						if (r.error) throw new Error(r.error.type);
						if (r.ok) {
							const n = r.body,
								{
									errors: a
								} = n.data.cancelEconRecurringPayment;
							if (null == a ? void 0 : a.length) throw new Error(a[0].message);
							t(x({
								orderId: e
							}))
						}
						return !0
					} catch (i) {
						const e = null !== (o = i.message) && void 0 !== o ? o : n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						});
						return t(w(e)), t(C(e)), !1
					}
				}, T = e => async t => {
					const r = await t(M(e));
					return r ? (t(Object(i.f)({
						duration: i.a,
						kind: c.b.SuccessCommunity,
						text: n.fbt._("Changes saved", null, {
							hk: "2GeuMT"
						})
					})), t(A())) : t(Object(i.f)({
						duration: i.a,
						kind: c.b.Error,
						text: n.fbt._("Something went wrong!", null, {
							hk: "1k6gx9"
						})
					})), r
				}
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
				return O
			})), r.d(t, "stripeApiError", (function() {
				return j
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return v
			})), r.d(t, "paypalApiError", (function() {
				return k
			})), r.d(t, "toggleRememberCard", (function() {
				return P
			})), r.d(t, "selectSavedCard", (function() {
				return E
			})), r.d(t, "_deleteSavedCard", (function() {
				return _
			})), r.d(t, "deleteSavedCard", (function() {
				return w
			})), r.d(t, "savedCardsPending", (function() {
				return x
			})), r.d(t, "savedCardsSuccess", (function() {
				return C
			})), r.d(t, "loadSavedCards", (function() {
				return I
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				s = r("./src/reddit/endpoints/gold/purchase.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const l = Object(o.a)(d.B),
				u = Object(o.a)(d.w),
				m = Object(o.a)(d.b),
				p = Object(o.a)(d.y),
				f = Object(o.a)(d.a),
				b = Object(o.a)(d.G),
				h = Object(o.a)(d.F),
				y = Object(o.a)(d.E),
				g = Object(o.a)(d.I),
				O = Object(o.a)(d.H),
				j = Object(o.a)(d.D),
				v = (e, t) => async (r, o) => {
					const i = o(),
						s = Object(c.h)(i),
						d = Object(c.l)(i),
						l = t.getElement(n.CardNumberElement);
					if (!l) return;
					const {
						token: u,
						error: m
					} = await e.createToken(l, {
						name: s,
						address_zip: d
					});
					if (s.trim()) {
						if (!m && u) return u;
						r(O(m || void 0))
					} else {
						const e = a.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(f({
							message: e
						}))
					}
				}, k = Object(o.a)(d.x), P = Object(o.a)(d.J), E = Object(o.a)(d.C), _ = Object(o.a)(d.g), w = e => async (t, r, {
					apiContext: n
				}) => {
					t(_(e));
					try {
						const t = await Object(s.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (a) {
						i.c.captureException(a)
					}
				}, x = Object(o.a)(d.z), C = Object(o.a)(d.A), I = () => async (e, t, {
					apiContext: r
				}) => {
					e(x());
					try {
						const t = await Object(s.b)(r());
						if (t.error) throw new Error(t.error.type);
						const n = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(C(n)), n[0] && e(E(n[0].cardId))
					} catch (n) {
						i.c.captureException(n), e(C([]))
					}
				}
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
				return v
			})), r.d(t, "paymentBlobCreated", (function() {
				return k
			})), r.d(t, "openWithBlob", (function() {
				return P
			}));
			var n = r("./src/config.ts"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				s = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/formatApiError/index.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/constants/modals.ts"),
				m = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = r("./src/reddit/endpoints/gold/purchase.ts"),
				f = r("./src/reddit/helpers/correlationIdTracker.ts"),
				b = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const y = Object(o.a)(h.t),
				g = Object(o.a)(h.e),
				O = (e, t) => async r => {
					r(y(e)), r(Object(l.h)(u.a.ECON_PREMIUM_PURCHASE, t))
				}, j = () => async e => {
					e(Object(l.g)(u.a.ECON_PREMIUM_PURCHASE)), e(g())
				}, v = (e, t) => async (r, n, {
					apiContext: o
				}) => {
					const i = Object(b.a)(n()),
						l = (null == i ? void 0 : i.pennies) || s.yb,
						u = Object(f.c)(f.a.GoldPayment);
					r(Object(d.stripeTokenPending)());
					const m = await r(Object(d.validateAndCreateStripeToken)(e, t));
					if (m) try {
						const e = await Object(p.h)({
							context: o(),
							correlationId: u,
							pennies: l,
							token: m
						});
						if (e.error) {
							const t = Object(c.a)(e.error);
							r(Object(d.stripeApiError)(t))
						} else r(Object(d.paymentCompleted)({
							confirmed: !1
						}))
					} catch (h) {
						const e = Object(c.a)(h);
						r(Object(d.stripeApiError)(e))
					} else {
						const e = a.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						r(Object(d.stripeApiError)(e))
					}
				}, k = Object(o.a)(h.v), P = ({
					packageId: e,
					correlationId: t
				}, r) => async (a, o, {
					apiContext: s
				}) => {
					a(O({
						packageId: e,
						correlationId: t
					}, r));
					const l = Object(b.a)(o()),
						u = (null == l ? void 0 : l.paypalButtonId) || n.a.paypal.buttons.premium;
					if (u) try {
						const e = await Object(m.f)({
							buttonId: u,
							context: s(),
							correlationId: t
						});
						if (e.error) {
							const t = Object(c.a)(e.error);
							a(Object(d.paypalApiError)(t))
						} else a(k(e))
					} catch (p) {
						const e = Object(c.a)(p);
						a(Object(d.paypalApiError)(e))
					} else i.c.captureMessage("No Premium packages available on Premium purchase modal")
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return h
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "a", (function() {
				return k
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/env/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				s = r("./src/reddit/endpoints/gold/productCatalog/index.ts"),
				c = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/actions/post.ts"),
				m = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const p = Object(o.a)(m.j),
				f = Object(o.a)(m.k),
				b = Object(o.a)(m.i),
				h = e => async (t, r, {
					apiContext: o
				}) => {
					t(p());
					const d = r(),
						l = Object(c.J)(d);
					try {
						const r = !l,
							n = await Object(s.b)({
								context: o(),
								correlationId: e,
								shouldUseCurrentOrigin: r
							});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const a = n.body;
						t(f(a))
					} catch (u) {
						Object(a.b)() || console.error(u), i.c.captureException(u);
						const e = n.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(b(e))
					}
				}, y = Object(o.a)(m.m), g = Object(o.a)(m.n), O = Object(o.a)(m.l), j = (e, t) => async (r, o, {
					apiContext: c
				}) => {
					r(y());
					try {
						const n = await Object(s.c)({
							awardId: e,
							context: c(),
							correlationId: t
						});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const a = n.body;
						if (!a.coinPackages || !a.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						r(g(a))
					} catch (d) {
						Object(a.b)() || console.error(d), i.c.captureException(d);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(O(e))
					}
				}, v = Object(o.a)(m.h), k = () => async (e, t, {
					gqlContext: r
				}) => {
					var o, c;
					try {
						const t = await Object(s.a)(r());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (o = r.errors) || void 0 === o ? void 0 : o.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (c = r.awards) || void 0 === c ? void 0 : c.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(v({
								awards: r.awards
							})), e(Object(u.B)())
						}
					} catch (m) {
						Object(a.b)() || console.error(m), e(Object(d.f)({
							kind: l.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), i.c.captureException(m)
					}
				}
		},
		"./src/reddit/components/Econ/Common/BenefitBanner/index.m.less": function(e, t, r) {
			e.exports = {
				container: "vtH7lR6K1AFXnG_A-CgbZ",
				icon: "_33jJS2Cnk-KLHu2d5hhHIK",
				title: "_3XAeK0OG7-kkjL1PCftkZ_",
				description: "Xjm8hXBdnZqL7TYfhTXSp"
			}
		},
		"./src/reddit/components/Econ/Common/BenefitTile/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3WUWb7Sw86xRHJJhjUgdZ9",
				icon: "_4UcAT87VyI5VbP6S7bhhK",
				title: "_7IEgYd0otS-qkC7jLZMRc",
				description: "_1Lmps3yUL3wlUeYBq8e1NW",
				new: "_2xYObLxCbdZPVZMoClN8r0"
			}
		},
		"./src/reddit/components/Econ/Common/BenefitTile/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/lib/classNames/index.ts"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				i = r("./src/reddit/components/Econ/Common/NewIcon/index.tsx"),
				s = r("./src/reddit/components/Econ/Common/BenefitTile/index.m.less"),
				c = r.n(s);
			const d = ({
				className: e,
				onClick: t,
				benefit: r
			}) => o.a.createElement("div", {
				className: Object(n.a)(e, c.a.container),
				onClick: () => null == t ? void 0 : t(r),
				"data-testid": "benefit-tile"
			}, r.isNew && o.a.createElement(i.a, {
				className: c.a.new
			}), o.a.createElement("div", {
				className: c.a.icon,
				style: {
					backgroundImage: `url('${r.iconUrl}')`
				}
			}), r.title && o.a.createElement("h3", {
				className: c.a.title,
				"data-testid": "benefit-title"
			}, r.title), r.description && o.a.createElement("p", {
				className: c.a.description
			}, r.description))
		},
		"./src/reddit/components/Econ/Common/NewIcon/index.m.less": function(e, t, r) {
			e.exports = {
				new: "_2u3fkh0zbVoixCjyXrW0_e"
			}
		},
		"./src/reddit/components/Econ/Common/NewIcon/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/components/Econ/Common/NewIcon/index.m.less"),
				s = r.n(i);
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js"), d = ({
				className: e
			}) => a.a.createElement("span", {
				className: Object(o.a)(s.a.new, e)
			}, c._("NEW", null, {
				hk: "2P5bsM"
			}))
		},
		"./src/reddit/components/MarketingPageFooter/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/MarketingPageFooter/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./src/reddit/components/MarketingPageFooter/index.m.less"),
				i = r.n(o),
				s = r("./src/lib/classNames/index.ts");
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => a.a.createElement("div", {
				className: Object(s.a)(e.className, i.a.marketingPageFooter)
			}, a.a.createElement("div", {
				className: Object(s.a)(e.className, i.a.marketingPageFooterInner)
			}, a.a.createElement("div", {
				className: i.a.linkContainer
			}, a.a.createElement("div", {
				className: i.a.linkCol
			}, a.a.createElement("ul", {
				className: i.a.linkColInner
			}, a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://about.reddit.com"
			}, c._("about", null, {
				hk: "3IO4c7"
			}))), a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://about.reddit.com/careers/"
			}, c._("careers", null, {
				hk: "2GATRU"
			}))), a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://about.reddit.com/press/"
			}, c._("press", null, {
				hk: "iUiGg"
			}))))), a.a.createElement("div", {
				className: i.a.linkCol
			}, a.a.createElement("ul", {
				className: i.a.linkColInner
			}, a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://www.redditinc.com/advertising"
			}, c._("advertise", null, {
				hk: "RYuIn"
			}))), a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "http://www.redditblog.com/"
			}, c._("blog", null, {
				hk: "4xzWuA"
			}))), a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://www.reddithelp.com"
			}, c._("help", null, {
				hk: "36XyzA"
			}))))), a.a.createElement("div", {
				className: Object(s.a)(i.a.linkCol, i.a.linkBoldCol)
			}, a.a.createElement("ul", {
				className: i.a.linkColInner
			}, a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://www.reddit.com/coins"
			}, c._("reddit coins", null, {
				hk: "3Ts6tu"
			}))), a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://www.reddit.com/premium"
			}, c._("reddit premium", null, {
				hk: "3vPbLO"
			}))), a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://redditgifts.com/"
			}, c._("reddit gifts", null, {
				hk: "3WNNEy"
			}))))), a.a.createElement("div", {
				className: Object(s.a)(i.a.linkCol, i.a.linkBoldCol)
			}, a.a.createElement("ul", {
				className: i.a.linkColInner
			}, a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://www.facebook.com/reddit/"
			}, c._("Facebook", null, {
				hk: "47DT2F"
			}))), a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://twitter.com/reddit"
			}, c._("Twitter", null, {
				hk: "3aUv7u"
			}))), a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://www.instagram.com/reddit/"
			}, c._("Instagram", null, {
				hk: "dVIRX"
			})))))), a.a.createElement("ul", {
				className: i.a.legal
			}, a.a.createElement("li", {
				className: i.a.legalItem
			}, a.a.createElement("a", {
				className: i.a.legalLink,
				href: "https://www.redditinc.com/policies/content-policy"
			}, c._("content policy", null, {
				hk: "4ptiaZ"
			}))), a.a.createElement("li", {
				className: i.a.legalItem
			}, a.a.createElement("a", {
				className: i.a.legalLink,
				href: "https://www.reddit.com/help/privacypolicy"
			}, c._("privacy policy", null, {
				hk: "1ybjnz"
			}))), a.a.createElement("li", {
				className: i.a.legalItem
			}, a.a.createElement("a", {
				className: i.a.legalLink,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, c._("user agreement", null, {
				hk: "4puRxC"
			}))), a.a.createElement("li", {
				className: i.a.legalItem
			}, a.a.createElement("a", {
				className: i.a.legalLink,
				href: "https://www.reddit.com/help/healthycommunities/"
			}, c._("mod policy", null, {
				hk: "1VvAdM"
			}))), a.a.createElement("li", {
				className: i.a.legalItem
			}, c._("© {year} Reddit, Inc. All rights reserved", [c._param("year", (new Date).getFullYear().toString())], {
				hk: "23FUx6"
			})))))
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
				i = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				s = r.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => a.a.createElement("div", {
				className: Object(o.a)(s.a.loadingIcon, t, {
					[s.a.mCentered]: e
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
				i = r("./src/reddit/constants/headers.ts"),
				s = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = r("./src/reddit/endpoints/gold/purchase.ts");
			const d = async ({
				buttonId: e,
				context: t,
				correlationId: r
			}) => {
				const d = {
						button_id: e,
						correlation_id: r
					},
					l = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					u = Object(s.a)(l);
				return Object(a.a)(Object(o.a)(t, [i.a]), {
					method: n.jb.POST,
					endpoint: u,
					data: d
				}).then(c.c)
			}, l = async ({
				context: e,
				coins: t,
				pennies: r,
				correlationId: s
			}) => {
				const d = {
					coins: t,
					pennies: r,
					correlation_id: s
				};
				return Object(a.a)(Object(o.a)(e, [i.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(c.c)
			}, u = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: s,
				correlationId: d
			}) => {
				const l = {
					award_id: t,
					correlation_id: d,
					pennies: r,
					thing_id: s
				};
				return Object(a.a)(Object(o.a)(e, [i.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(c.c)
			}, m = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: s,
				pennies: d,
				correlationId: l
			}) => {
				const u = {
					offer_context: t,
					order_id: r,
					coins: s,
					pennies: d,
					correlation_id: l
				};
				return Object(a.a)(Object(o.a)(e, [i.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: u
				}).then(c.c)
			}, p = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: s,
				isAnonymous: d,
				message: l,
				offerContext: u,
				orderId: m,
				pennies: p,
				thingId: f
			}) => {
				const b = {
					award_id: e,
					coins: r,
					correlation_id: s,
					is_anonymous: d,
					message: l,
					offer_context: u,
					order_id: m,
					pennies: p,
					thing_id: f
				};
				return Object(a.a)(Object(o.a)(t, [i.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: b
				}).then(c.c)
			}, f = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: s,
				message: d,
				orderId: l,
				thingId: u
			}) => {
				const m = {
					award_id: e,
					correlation_id: r,
					is_anonymous: s,
					message: d,
					order_id: l,
					thing_id: u
				};
				return Object(a.a)(Object(o.a)(t, [i.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: m
				}).then(c.c)
			}
		},
		"./src/reddit/endpoints/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return y
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "j", (function() {
				return v
			})), r.d(t, "g", (function() {
				return k
			})), r.d(t, "c", (function() {
				return P
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "d", (function() {
				return _
			})), r.d(t, "b", (function() {
				return w
			})), r.d(t, "l", (function() {
				return x
			})), r.d(t, "k", (function() {
				return C
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				a = r.n(n),
				o = r("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				i = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				s = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				c = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = r("./src/redditGQL/operations/CreateEconOrder.json"),
				l = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				u = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				m = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				p = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				f = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				b = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				h = r("./src/lib/makeGqlRequest/index.ts");
			const y = (e, t, r, n, o) => {
				const {
					premium: i,
					...s
				} = o, c = (null == i ? void 0 : i.pricePackage) || r.pricePackages[0], l = new a.a(c.price).multipliedBy(n).toFixed();
				return Object(h.a)(e, {
					...d,
					variables: {
						input: {
							nonce: t,
							productId: r.id,
							productVersion: r.version,
							pricePackageId: c.id,
							currency: c.currency,
							price: l,
							productsCount: n.toString(),
							...s
						}
					}
				})
			};
			var g;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(g || (g = {}));
			const O = (e, t, r, n) => Object(h.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				j = (e, t, r, n) => Object(h.a)(e, {
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
				k = (e, t, r, n, a) => Object(h.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: r,
						successUrl: n,
						cancelUrl: a
					}
				}),
				P = (e, t, r, n) => Object(h.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: r,
						token: n
					}
				}),
				E = (e, t, r, n) => Object(h.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: r,
						cardId: n
					}
				}),
				_ = (e, t, r, n, a) => Object(h.a)(e, {
					...s,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
						saveCard: a
					}
				}),
				w = (e, t) => Object(h.a)(e, {
					...o,
					variables: {
						orderId: t
					}
				}),
				x = e => Object(h.a)(e, {
					...b,
					variables: {}
				}),
				C = (e, t) => Object(h.a)(e, {
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
				return i
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

			function i(e, t) {
				return Object(a.b)(parseInt(o(e, t), 10))
			}

			function s(e, t) {
				const r = new n.BigNumber(e),
					a = new n.BigNumber(t || 1);
				return r.multipliedBy(a).toFixed(0)
			}
		},
		"./src/reddit/helpers/trackers/premium.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			}));
			var n = r("./src/reddit/helpers/correlationIdTracker.ts"),
				a = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = r("./src/reddit/selectors/telemetry.ts");
			const i = (e, t) => {
					const {
						packageId: r,
						renewInterval: n
					} = t;
					let o = "";
					if (r) {
						const t = Object(a.k)(e, r);
						if (!t) return null;
						o = t.frequency
					} else n && (o = n);
					return o ? {
						goldPurchase: {
							subscriptionType: o
						}
					} : null
				},
				s = "premium_marketing",
				c = e => t => ({
					source: s,
					action: "click",
					noun: "price",
					correlationId: Object(n.c)(n.a.GoldPayment),
					...o.o(t),
					...i(t, e)
				}),
				d = () => e => ({
					source: s,
					action: "click",
					noun: "manage",
					correlationId: Object(n.c)(n.a.GoldPayment),
					...o.o(e)
				}),
				l = e => t => ({
					source: "premium_marketing",
					action: "click",
					noun: "premium_benefit",
					...o.o(t),
					goldPurchase: {
						premiumMarketingBenefit: e
					}
				})
		},
		"./src/reddit/icons/svgs/PremiumLogo/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 630 96",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				fill: "#ff4500",
				d: "M95.349,6.185a3.136,3.136,0,0,0-2.458-1.2H88.517A164.2,164.2,0,0,1,48.761.1a2.962,2.962,0,0,0-1.5,0A164.2,164.2,0,0,1,7.509,4.988H3.125A3.111,3.111,0,0,0,.1,8.858,164.1,164.1,0,0,1,5,48.614V67.819A20.392,20.392,0,0,0,25.362,88.186a33.738,33.738,0,0,1,20.721,7.151,3.126,3.126,0,0,0,3.85,0,33.734,33.734,0,0,1,20.721-7.151A20.391,20.391,0,0,0,91.02,67.819V48.614A164.147,164.147,0,0,1,95.913,8.858,3.119,3.119,0,0,0,95.349,6.185Z"
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
				d: "M264.848,23.569h10.646V75.454H265.353V71.107h-.168A14.246,14.246,0,0,1,254.2,75.993a16.227,16.227,0,0,1-14.453-8.676,20.341,20.341,0,0,1-2.325-9.956,20.057,20.057,0,0,1,2.409-10.09,16.523,16.523,0,0,1,6.317-6.418,16.886,16.886,0,0,1,8.389-2.19,14.771,14.771,0,0,1,5.576,1.027,13.657,13.657,0,0,1,4.5,2.949h.236Zm-3.892,42.08a8.728,8.728,0,0,0,3.184-3.385,10.183,10.183,0,0,0,1.179-4.936,10.374,10.374,0,0,0-1.129-4.886,8.412,8.412,0,0,0-3.132-3.369,8.591,8.591,0,0,0-4.532-1.213,8.679,8.679,0,0,0-4.532,1.2,8.422,8.422,0,0,0-3.15,3.336,10.152,10.152,0,0,0-1.145,4.868,10.585,10.585,0,0,0,1.128,4.919,8.55,8.55,0,0,0,3.151,3.436,8.81,8.81,0,0,0,8.978.033Z"
			}), a.a.createElement("path", {
				fill: "#ff4500",
				d: "M284.456,34.148a6.617,6.617,0,0,1-2.342-8.928,6.192,6.192,0,0,1,2.342-2.324,6.561,6.561,0,0,1,3.3-.843,6.493,6.493,0,0,1,3.268,12.1,6.6,6.6,0,0,1-6.57,0Zm8.591,41.306H282.4V39.2h10.646Z"
			}), a.a.createElement("path", {
				fill: "#ff4500",
				d: "M315.418,39.2H323.2v9.063h-7.783V75.454H304.772V48.265h-7.749V39.2h7.749V28.825h10.646Z"
			}), a.a.createElement("path", {
				fill: "#ff4500",
				d: "M367.428,27.8a14.469,14.469,0,0,1,6.317,5.71,16.7,16.7,0,0,1,2.19,8.659A17.514,17.514,0,0,1,373.7,51.1a15.51,15.51,0,0,1-6.318,6.031,19.809,19.809,0,0,1-9.4,2.156h-6.166V75.454H340.761V25.793h16.913A22.1,22.1,0,0,1,367.428,27.8ZM357.405,49.545a8.728,8.728,0,0,0,4.076-.909,6.562,6.562,0,0,0,2.7-2.51,7.005,7.005,0,0,0,.943-3.622,6.126,6.126,0,0,0-2.173-5.021A8.958,8.958,0,0,0,357,35.631h-5.188V49.545Z"
			}), a.a.createElement("path", {
				fill: "#ff4500",
				d: "M404.775,38.882a5.377,5.377,0,0,1,1.651.522l-4.279,10.175a5.732,5.732,0,0,0-1.263-.388,8.251,8.251,0,0,0-1.736-.185,8.08,8.08,0,0,0-3.622.876,7.359,7.359,0,0,0-2.914,2.628,7.721,7.721,0,0,0-1.145,4.312V75.454H380.82V39.2h10.344v5.087h.2a15.107,15.107,0,0,1,4.582-4.025,12.458,12.458,0,0,1,6.367-1.6A13.1,13.1,0,0,1,404.775,38.882Z"
			}), a.a.createElement("path", {
				fill: "#ff4500",
				d: "M440.151,60.765H415.758a9.367,9.367,0,0,0,3.453,4.969,9.776,9.776,0,0,0,5.914,1.8,16.431,16.431,0,0,0,4.885-.774,12.255,12.255,0,0,0,3.841-1.82l3.3,7.952a17.234,17.234,0,0,1-5.222,2.256,25.447,25.447,0,0,1-6.637.843,20.941,20.941,0,0,1-10.141-2.358,16.562,16.562,0,0,1-6.7-6.571,19.379,19.379,0,0,1-2.358-9.635,19.5,19.5,0,0,1,2.426-9.821,17.172,17.172,0,0,1,6.519-6.587,17.812,17.812,0,0,1,8.945-2.325,17.062,17.062,0,0,1,8.474,2.14,15.613,15.613,0,0,1,6.03,6.014,17.519,17.519,0,0,1,2.207,8.827A24.352,24.352,0,0,1,440.151,60.765Zm-9.265-6.671a6.819,6.819,0,0,0-1.937-5.121,7.006,7.006,0,0,0-5.105-1.887,7.869,7.869,0,0,0-5.374,1.9,9.213,9.213,0,0,0-2.88,5.105Z"
			}), a.a.createElement("path", {
				fill: "#ff4500",
				d: "M493.282,40.7a10.863,10.863,0,0,1,3.74,5.121,19.607,19.607,0,0,1,1.078,6.52V75.454H487.386v-21.8a7.294,7.294,0,0,0-1.246-4.564,4.257,4.257,0,0,0-3.572-1.6,4.976,4.976,0,0,0-3.857,1.6,6.515,6.515,0,0,0-1.466,4.564v21.8H466.6v-21.8a7.288,7.288,0,0,0-1.247-4.564,4.294,4.294,0,0,0-3.6-1.6,4.955,4.955,0,0,0-3.857,1.617,6.637,6.637,0,0,0-1.466,4.616V75.454H445.777V39.2h10.141v4.615h.169a12.481,12.481,0,0,1,4.312-3.84,11.742,11.742,0,0,1,5.559-1.314,10.357,10.357,0,0,1,5.256,1.28,9.366,9.366,0,0,1,3.572,3.774h.2a12.728,12.728,0,0,1,4.868-3.757,15.291,15.291,0,0,1,6.284-1.3A11.461,11.461,0,0,1,493.282,40.7Z"
			}), a.a.createElement("path", {
				fill: "#ff4500",
				d: "M506.826,34.148a6.617,6.617,0,0,1-2.342-8.928,6.2,6.2,0,0,1,2.342-2.324,6.561,6.561,0,0,1,3.3-.843,6.493,6.493,0,0,1,3.268,12.1,6.6,6.6,0,0,1-6.57,0Zm8.591,41.306H504.771V39.2h10.646Z"
			}), a.a.createElement("path", {
				fill: "#ff4500",
				d: "M544.763,39.2h10.646V75.487H545.133V70.7h-.269a11.143,11.143,0,0,1-4.549,3.892,14.315,14.315,0,0,1-6.367,1.431,11.771,11.771,0,0,1-6.351-1.667,10.928,10.928,0,0,1-4.111-4.632,15.394,15.394,0,0,1-1.431-6.773V39.2H532.7V60.6a7.073,7.073,0,0,0,1.516,4.885,5.337,5.337,0,0,0,4.178,1.685,6.3,6.3,0,0,0,4.582-1.735,6.524,6.524,0,0,0,1.786-4.9Z"
			}), a.a.createElement("path", {
				fill: "#ff4500",
				d: "M609.652,40.7a10.863,10.863,0,0,1,3.74,5.121,19.607,19.607,0,0,1,1.078,6.52V75.454H603.756v-21.8a7.294,7.294,0,0,0-1.246-4.564,4.257,4.257,0,0,0-3.572-1.6,4.978,4.978,0,0,0-3.857,1.6,6.52,6.52,0,0,0-1.466,4.564v21.8H582.969v-21.8a7.288,7.288,0,0,0-1.247-4.564,4.294,4.294,0,0,0-3.605-1.6,4.955,4.955,0,0,0-3.857,1.617,6.637,6.637,0,0,0-1.466,4.616V75.454H562.147V39.2h10.142v4.615h.168a12.475,12.475,0,0,1,4.313-3.84,11.737,11.737,0,0,1,5.559-1.314,10.356,10.356,0,0,1,5.255,1.28,9.366,9.366,0,0,1,3.572,3.774h.2a12.723,12.723,0,0,1,4.869-3.757,15.283,15.283,0,0,1,6.283-1.3A11.459,11.459,0,0,1,609.652,40.7Z"
			}))
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return c
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const a = {
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
				o = (e, t = !1) => {
					const r = [];
					for (const n in a) {
						const o = a[n];
						(o.priceInCoins <= e || t) && r.push(o)
					}
					return r
				},
				i = e => n.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [n.fbt._plural(e.monthsOfPremium, "number of months"), n.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				s = "com.reddit.premium_1";
			var c;
			! function(e) {
				e.Monthly = "monthly", e.Yearly = "yearly"
			}(c || (c = {}))
		},
		"./src/reddit/pages/Premium/BenefitsSection/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return a
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "c", (function() {
				return c
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const a = [{
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
				o = {
					key: "premium-more",
					telemetryTag: "more_benefits"
				},
				i = {
					key: "premium-bonus",
					asterisk: !0,
					telemetryTag: "coin_bonus"
				},
				s = {
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
				c = {
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
		"./src/reddit/pages/Premium/BenefitsSection/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_21g0kYfKRCqWnHX6Hs4EVJ",
				signupBonusBanner: "_19jXhv_oNEbM4YkFLajvJi",
				isNightMode: "_1wuH3ONzjSSsfNfnhfaPWF",
				benefitsContainer: "LpDOx_HYwL2maHntPrY3k",
				benefit: "_2ZtkpgcwK6dFNvjfEHZZT4"
			}
		},
		"./src/reddit/pages/Premium/BenefitsSection/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return k
			}));
			var n = r("./src/lib/classNames/index.ts"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				i = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/reddit/components/Econ/Common/BenefitBanner/index.m.less"),
				c = r.n(s);
			const d = ({
				className: e,
				onClick: t,
				benefit: r
			}) => o.a.createElement("div", {
				className: Object(n.a)(e, c.a.container),
				onClick: () => null == t ? void 0 : t(r),
				"data-testid": "benefit-banner"
			}, o.a.createElement("div", {
				className: c.a.icon,
				style: {
					backgroundImage: `url('${r.iconUrl}')`
				}
			}), o.a.createElement("div", null, r.title && o.a.createElement("h3", {
				className: c.a.title,
				"data-testid": "benefit-banner-title"
			}, r.title), r.description && o.a.createElement("p", {
				className: c.a.description
			}, r.description)));
			var l = r("./src/reddit/components/Econ/Common/BenefitTile/index.tsx"),
				u = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = r("./src/reddit/helpers/trackers/premium.ts"),
				p = r("./src/reddit/hooks/useTracking.ts"),
				f = r("./src/reddit/pages/Premium/BenefitsSection/constants.ts"),
				b = r("./src/config.ts");
			const h = ({
				key: e,
				asterisk: t,
				isNew: r,
				telemetryTag: n
			}, a) => ({
				telemetryTag: n,
				isNew: r,
				key: e,
				description: f.c[e](a),
				iconUrl: `${b.a.assetPath}/img/gold/premium-marketing/benefits-icons/${e}.png`,
				title: `${f.d[e](a)}${t?"*":""}`
			});
			var y = r("./src/reddit/selectors/experiments/econ/index.ts"),
				g = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				O = r("./src/reddit/selectors/user.ts"),
				j = r("./src/reddit/pages/Premium/BenefitsSection/index.m.less"),
				v = r.n(j);
			const k = ({
				className: e,
				isCompactMode: t = !1
			}) => {
				const r = Object(i.e)(O.W),
					a = Object(p.a)(),
					s = Object(i.e)(g.m),
					c = !!s,
					b = Object(i.e)(e => !t && c && Object(y.w)(e)),
					j = Object(i.e)(g.j),
					k = Object(i.e)(g.l);
				if (!(null == k ? void 0 : k.length)) return o.a.createElement("div", null, o.a.createElement(u.a, {
					sizePx: 80
				}));
				const P = {
						periodicalCoins: j,
						bonusCoins: s
					},
					E = ((e, t) => t ? [...e, f.b] : [...e, f.a])(f.e, c && !b).map(e => h(e, P)),
					_ = h(f.b, P),
					w = e => {
						a(Object(m.b)(e.telemetryTag))
					};
				return o.a.createElement("div", {
					className: Object(n.a)(v.a.container, e, {
						[v.a.isNightMode]: r
					})
				}, b && o.a.createElement(d, {
					className: v.a.signupBonusBanner,
					benefit: _,
					onClick: w
				}), o.a.createElement("div", {
					className: v.a.benefitsContainer
				}, E.map(e => o.a.createElement(l.a, {
					className: v.a.benefit,
					benefit: e,
					key: e.key,
					onClick: w
				}))))
			}
		},
		"./src/reddit/pages/Premium/PremiumButtons/index.m.less": function(e, t, r) {
			e.exports = {
				button: "_2WCbLB03wJFwv7fN2Dk2qt",
				premiumAnnualButton: "_2570j5dKW6IeBhxlQzl5WL",
				premiumMonthlyButton: "_7__SJMdC4NiDvJ9BVKQrm",
				premiumDiscountBadge: "_1AJGAPTnSSY4HwOKw5300M",
				renewalSubtext: "mNwLF2M-GWWkKuxa83xBQ",
				hero: "_47LcjeuJicuk5sAs6MQM5"
			}
		},
		"./src/reddit/pages/Premium/PremiumButtons/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				i = r("./src/lib/classNames/index.ts"),
				s = r("./src/lib/currency/currencies.ts"),
				c = r("./src/lib/localizeCurrency/index.ts"),
				d = r("./node_modules/react-redux/es/index.js"),
				l = r("./src/reddit/controls/Button/index.tsx"),
				u = r("./src/reddit/hooks/useLocale.ts"),
				m = r("./src/reddit/models/Gold/Premium/index.ts"),
				p = r("./src/reddit/models/Gold/ProductOffer.ts"),
				f = r("./src/reddit/selectors/gold/productOffers.ts"),
				b = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/pages/Premium/PremiumButtons/index.m.less"),
				g = r.n(y);
			t.a = ({
				className: e,
				isHeroStyles: t,
				onClickPackage: r,
				onClickManagePremium: a
			}) => {
				var y, O;
				const j = Object(u.b)(),
					v = Object(d.e)(b.l),
					k = Object(d.e)(f.e);
				if (Object(d.e)(h.t)) return o.a.createElement("div", {
					className: Object(i.a)(g.a.buttons, e, {
						[g.a.hero]: !!t
					})
				}, o.a.createElement(l.k, {
					className: g.a.button,
					onClick: a
				}, n.fbt._("Manage Premium", null, {
					hk: "13LAq1"
				})));
				const P = v.find(e => e.frequency === m.c.Monthly),
					E = v.find(e => e.frequency === m.c.Yearly);
				if (!P || !E) return null;
				const _ = null === (y = Object(f.j)(k, p.b.Month)) || void 0 === y ? void 0 : y[0],
					w = null === (O = Object(f.j)(k, p.b.Year)) || void 0 === O ? void 0 : O[0];
				if (!_ || !w) return null;
				const x = {
						price: _.price,
						packageId: P.mobileId,
						currency: _.currency
					},
					C = {
						price: w.price,
						packageId: E.mobileId,
						bonusPct: E.bonusPct,
						currency: w.currency
					},
					I = Object(c.b)(x.price, {
						type: s.b.Real,
						currency: x.currency,
						locale: j
					}),
					N = Object(c.b)(C.price, {
						type: s.b.Real,
						currency: C.currency,
						locale: j
					});
				return o.a.createElement("div", {
					className: Object(i.a)(g.a.buttons, e, {
						[g.a.hero]: !!t
					})
				}, o.a.createElement(l.t, {
					className: g.a.premiumMonthlyButton,
					onClick: () => {
						r(x.packageId, p.b.Month)
					},
					priority: l.c.Secondary
				}, x && n.fbt._("{monthly price}/Month", [n.fbt._param("monthly price", I)], {
					hk: "3xMnhy"
				})), o.a.createElement(l.k, {
					className: g.a.premiumAnnualButton,
					onClick: () => r(C.packageId, p.b.Year)
				}, !!C && n.fbt._("{annual price}/Year", [n.fbt._param("annual price", N)], {
					hk: "4ohAoM"
				}), !!C.bonusPct && o.a.createElement("span", {
					className: g.a.premiumDiscountBadge
				}, n.fbt._("Save {annual-month-discount}", [n.fbt._param("annual-month-discount", `${C.bonusPct}%`)], {
					hk: "TgjzN"
				}))), o.a.createElement("div", {
					className: g.a.renewalSubtext
				}, n.fbt._("Subscriptions automatically renew", null, {
					hk: "v8BCD"
				})))
			}
		},
		"./src/reddit/pages/Premium/index.m.less": function(e, t, r) {
			e.exports = {
				body: "_1H1BEIdB-vMmFIhl__GcP-",
				benefits: "_2F-2JuCnBDGUkhnXOrig5y",
				hero: "_3KzmnADgrpURkhkiSnEL8O",
				heroInner: "_2oUlTJc4IuiAjkfQeGQ6j7",
				heroTitle: "GZKGDIHeqtU51PlPpyUL_",
				heroLogo: "_2QdbMXAwLpWVLJfDJ275mD",
				heroDescription: "hUEA0jAwHPAvz7Q_ME6CQ",
				heroButtons: "_267SU8HUh3akX44wSBowkV",
				heroPremiumExpiration: "_3mePsES_o4kEB7LYhNam7d",
				title: "_3xymUbUvqvfnMM2w1bDVpo",
				paidPremiumSubtext: "_2Of3GWhg1qZ5DUuQVMX80C",
				faqButton: "_3GTrbRyT1wOPfZZhY4r1Qg",
				footer: "_27BspvKVY7nh2AfDk1xv0S"
			}
		},
		"./src/reddit/pages/Premium/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PAID_PREMIUM_SUBTEXT", (function() {
				return B
			}));
			var n = r("./src/config.ts"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				s = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/react-router-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				l = r("./src/lib/constants/index.ts"),
				u = r("./src/lib/humanizeDate/index.ts"),
				m = r("./src/lib/loadRedditAdsPixel.ts"),
				p = r("./src/reddit/components/TrackingHelper/index.tsx"),
				f = r("./src/reddit/helpers/correlationIdTracker.ts"),
				b = r("./src/reddit/helpers/createEmojiText/index.tsx"),
				h = r("./src/reddit/helpers/trackers/premium.ts"),
				y = r("./src/reddit/helpers/trackers/screenview.ts"),
				g = r("./src/telemetry/index.ts"),
				O = r("./src/telemetry/models/Timer.ts"),
				j = r("./src/reddit/pages/Premium/index.m.less"),
				v = r.n(j),
				k = r("./src/reddit/actions/login.ts"),
				P = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				E = r("./src/reddit/actions/gold/productOffers.ts"),
				_ = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				w = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				x = r("./src/reddit/components/MarketingPageFooter/index.tsx"),
				C = r("./src/reddit/models/Gold/ProductOffer.ts"),
				I = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				N = r("./src/reddit/selectors/user.ts"),
				S = r("./src/reddit/icons/svgs/PremiumLogo/index.tsx"),
				A = r("./src/reddit/controls/Button/index.tsx"),
				M = r("./src/reddit/pages/Premium/BenefitsSection/index.tsx"),
				T = r("./src/reddit/pages/Premium/PremiumButtons/index.tsx");
			const B = a.fbt._("* Powerups, custom app icons, and welcome gifts are only available through a paid Reddit Premium subscription.", null, {
					hk: "3CHkPX"
				}),
				L = Object(d.c)({
					goldExpiration: e => e.user.account && e.user.account.goldExpiration || 0,
					isGold: N.s,
					isPremiumSubscriber: N.t,
					isLoggedIn: N.J,
					premiumPackages: I.l,
					purchaseCatalogPending: I.o
				}),
				R = Object(s.b)(L, (e, t) => ({
					onManagePremium: () => e(Object(c.b)("/settings/premium")),
					onOpenLoginModal: () => e(Object(k.i)()),
					onPurchasePremium: (t, r) => e(Object(_.openWithBlob)({
						correlationId: r,
						packageId: t
					})),
					onSetPremiumRenewalInterval: t => e(Object(P.i)({
						renewInterval: t
					})),
					requestPurchaseCatalog: t => e(Object(w.b)(t)),
					premiumProductOffersRequested: () => e(Object(E.d)(C.c.Premium))
				}));
			class U extends i.a.Component {
				constructor() {
					super(...arguments), this.correlationId = Object(f.e)(f.a.GoldPayment, !1), this.onClickPrice = (e, t) => {
						this.onPurchase(e, h.c, t)
					}, this.onClickManagePremium = () => {
						const {
							onManagePremium: e,
							sendEvent: t
						} = this.props;
						t(h.a()), e()
					}
				}
				componentDidMount() {
					const {
						premiumPackages: e,
						purchaseCatalogPending: t,
						requestPurchaseCatalog: r,
						premiumProductOffersRequested: n,
						sendEvent: a
					} = this.props;
					e.length || t || r(this.correlationId), n(), document.documentElement.scrollTop = document.body.scrollTop = 0;
					const o = l.Mb.PREMIUM;
					g.c.has(o) && (a(Object(y.n)(O.TimerType.InApp, g.c.end(o))), a(Object(y.m)())), Object(m.a)()
				}
				render() {
					const {
						className: e
					} = this.props;
					return i.a.createElement("div", {
						className: e
					}, this.renderHero(), i.a.createElement("div", {
						className: v.a.body
					}, i.a.createElement("h2", {
						className: v.a.title
					}, a.fbt._("Join Reddit Premium Today", null, {
						hk: "2sm8Pz"
					})), i.a.createElement(M.a, {
						className: v.a.benefits
					}), i.a.createElement(T.a, {
						onClickPackage: this.onClickPrice,
						onClickManagePremium: this.onClickManagePremium
					}), i.a.createElement("div", {
						className: v.a.paidPremiumSubtext
					}, B), this.renderFAQSection()), i.a.createElement(x.a, {
						className: v.a.footer
					}))
				}
				renderHero() {
					const {
						goldExpiration: e,
						isGold: t,
						isPremiumSubscriber: r
					} = this.props;
					return i.a.createElement("div", {
						className: v.a.hero,
						style: {
							backgroundImage: `linear-gradient(\n          to right,\n          rgba(0, 0, 0, 0.6) 0%,\n          rgba(0, 0, 0, 0) 50%\n        ), url("${n.a.assetPath}/img/gold/premium-marketing/premiumHero.jpg")`
						}
					}, i.a.createElement("div", {
						className: v.a.heroInner
					}, i.a.createElement("h1", {
						className: v.a.heroTitle
					}, i.a.createElement(S.a, {
						className: v.a.heroLogo
					})), i.a.createElement("p", {
						className: v.a.heroDescription
					}, a.fbt._("Help support Reddit and get VIP treatment, exclusive access, and monthly coins.", null, {
						hk: "19iqSJ"
					})), i.a.createElement(T.a, {
						className: v.a.heroButtons,
						isHeroStyles: !0,
						onClickPackage: this.onClickPrice,
						onClickManagePremium: this.onClickManagePremium
					}), !r && t && i.a.createElement("div", {
						className: v.a.heroPremiumExpiration
					}, Object(b.a)(a.fbt._("Your Premium membership is valid until {Premium expiration date}. Manage it :here:.", [a.fbt._param("Premium expiration date", Object(u.a)(e, {
						showDay: !0
					}))], {
						hk: "yMI3j"
					}).toString(), {
						":here:": i.a.createElement("a", {
							href: "/settings/premium",
							target: "_blank"
						}, a.fbt._("here", null, {
							hk: "d7Mhm"
						}))
					}))))
				}
				onPurchase(e, t, r) {
					const {
						isPremiumSubscriber: n,
						isLoggedIn: a,
						onOpenLoginModal: o,
						onPurchasePremium: i,
						onSetPremiumRenewalInterval: s,
						sendEvent: c
					} = this.props;
					n ? this.onClickManagePremium() : a ? (i(e, this.correlationId), s(r), c(t({
						renewInterval: r
					}))) : o()
				}
				renderFAQSection() {
					return i.a.createElement(A.t, {
						className: v.a.faqButton,
						href: "https://reddit.zendesk.com/hc/en-us/articles/360043034412-What-is-a-Reddit-premium-membership-",
						kind: A.b.ExternalLink,
						priority: A.c.Plain,
						target: "_blank"
					}, a.fbt._("Visit the Reddit Premium FAQs", null, {
						hk: "22gM46"
					}))
				}
				componentWillUnmount() {
					Object(f.b)(f.a.GoldPayment)
				}
			}
			t.default = R(Object(p.c)(U))
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return c
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
				o = r("./src/reddit/models/Gold/ProductOffer.ts"),
				i = r("./src/reddit/models/Payments/index.ts"),
				s = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = e => e.subreddits.api.productOffers.pending,
				d = (e, {
					subredditId: t,
					type: r
				}) => {
					var n, o, i;
					return t ? e.subreddits.productOffers[Object(a.a)(r, t)] : null === (i = null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === o ? void 0 : o.productOffers) || void 0 === i ? void 0 : i[Object(a.a)(r)]
				},
				l = (e, {
					subredditId: t
				}) => {
					const r = d(e, {
						subredditId: t,
						type: o.c.Powerups
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
						type: o.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				p = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === i.b.PayPal || e[0] === i.b.Stripe)(e.requiredPaymentProviders)) : null,
				f = Object(n.a)(m, s.p, (e, t) => p(e, t) || null),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Premium~reddit-components-Econ-Prediction-PremiumModal.06d9f223499a00cb1688.js.map