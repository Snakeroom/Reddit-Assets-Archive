// https://www.redditstatic.com/desktop2x/CoinPurchaseModal.83f09c82a25b410d3ace.js
// Retrieved at 12/16/2021, 5:30:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CoinPurchaseModal"], {
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
						function e(e, t, n, a, o, s) {
							if (s !== r) {
								var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
								throw c.name = "Invariant Violation", c
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

				function s(e) {
					return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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
								o = void 0;
							try {
								for (var s, c = e[Symbol.iterator](); !(n = (s = c.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
							} catch (i) {
								a = !0, o = i
							} finally {
								try {
									n || null == c.return || c.return()
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
				var p = function(e) {
						var r = t.useRef(e);
						return t.useEffect((function() {
							r.current = e
						}), [e]), r.current
					},
					m = function(e) {
						return null !== e && "object" === s(e)
					},
					b = function(e, t, r) {
						return m(e) ? Object.keys(e).reduce((function(n, a) {
							var o = !m(t) || ! function e(t, r) {
								if (!m(t) || !m(r)) return t === r;
								var n = Array.isArray(t);
								if (n !== Array.isArray(r)) return !1;
								var a = "[object Object]" === Object.prototype.toString.call(t);
								if (a !== ("[object Object]" === Object.prototype.toString.call(r))) return !1;
								if (!a && !n) return !1;
								var o = Object.keys(t),
									s = Object.keys(r);
								if (o.length !== s.length) return !1;
								for (var c = {}, i = 0; i < o.length; i += 1) c[o[i]] = !0;
								for (var d = 0; d < s.length; d += 1) c[s[d]] = !0;
								var l = Object.keys(c);
								if (l.length !== o.length) return !1;
								var u = t,
									p = r;
								return l.every((function(t) {
									return e(u[t], p[t])
								}))
							}(e[a], t[a]);
							return r.includes(a) ? (o && console.warn("Unsupported prop change: options.".concat(a, " is not a mutable property.")), n) : o ? d(d({}, n || {}), {}, c({}, a, e[a])) : n
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
					g = t.createContext(null);
				g.displayName = "ElementsContext";
				var y = function(e) {
					var r = e.stripe,
						n = e.options,
						a = e.children,
						o = t.useRef(!1),
						s = t.useRef(!0),
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
						m = p(r);
					null !== m && m !== r && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), o.current || ("sync" === c.tag && (o.current = !0, u({
						stripe: c.stripe,
						elements: c.stripe.elements(n)
					})), "async" === c.tag && (o.current = !0, c.stripePromise.then((function(e) {
						e && s.current && u({
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
					}), [d.stripe]), t.createElement(g.Provider, {
						value: d
					}, a)
				};
				y.propTypes = {
					stripe: o.any,
					options: o.object
				};
				var C = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(g), e)
					},
					j = function(e) {
						return (0, e.children)(C("mounts <ElementsConsumer>"))
					};
				j.propTypes = {
					children: o.func.isRequired
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
					v = function() {},
					P = function(e, r) {
						var n, a = "".concat((n = e).charAt(0).toUpperCase() + n.slice(1), "Element"),
							s = r ? function(e) {
								C("mounts <".concat(a, ">"));
								var r = e.id,
									n = e.className;
								return t.createElement("div", {
									id: r,
									className: n
								})
							} : function(r) {
								var n = r.id,
									o = r.className,
									s = r.options,
									c = void 0 === s ? {} : s,
									i = r.onBlur,
									d = void 0 === i ? v : i,
									l = r.onFocus,
									u = void 0 === l ? v : l,
									m = r.onReady,
									f = void 0 === m ? v : m,
									h = r.onChange,
									g = void 0 === h ? v : h,
									y = r.onEscape,
									j = void 0 === y ? v : y,
									P = r.onClick,
									E = void 0 === P ? v : P,
									x = C("mounts <".concat(a, ">")).elements,
									w = t.useRef(null),
									k = t.useRef(null),
									_ = O(f),
									N = O(d),
									I = O(u),
									S = O(E),
									A = O(g),
									T = O(j);
								t.useLayoutEffect((function() {
									if (null == w.current && x && null != k.current) {
										var t = x.create(e, c);
										w.current = t, t.mount(k.current), t.on("ready", (function() {
											return _(t)
										})), t.on("change", A), t.on("blur", N), t.on("focus", I), t.on("escape", T), t.on("click", S)
									}
								}));
								var M = p(c);
								return t.useEffect((function() {
									if (w.current) {
										var e = b(c, M, ["paymentRequest"]);
										e && w.current.update(e)
									}
								}), [c, M]), t.useLayoutEffect((function() {
									return function() {
										w.current && w.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: o,
									ref: k
								})
							};
						return s.propTypes = {
							id: o.string,
							className: o.string,
							onChange: o.func,
							onBlur: o.func,
							onFocus: o.func,
							onReady: o.func,
							onClick: o.func,
							options: o.object
						}, s.displayName = a, s.__elementType = e, s
					},
					E = "undefined" == typeof window,
					x = P("auBankAccount", E),
					w = P("card", E),
					k = P("cardNumber", E),
					_ = P("cardExpiry", E),
					N = P("cardCvc", E),
					I = P("fpxBank", E),
					S = P("iban", E),
					A = P("idealBank", E),
					T = P("p24Bank", E),
					M = P("epsBank", E),
					R = P("payment", E),
					B = P("paymentRequestButton", E),
					D = P("linkAuthentication", E),
					G = P("shippingAddress", E),
					F = P("afterpayClearpayMessage", E);
				e.AfterpayClearpayMessageElement = F, e.AuBankAccountElement = x, e.CardCvcElement = N, e.CardElement = w, e.CardExpiryElement = _, e.CardNumberElement = k, e.Elements = y, e.ElementsConsumer = j, e.EpsBankElement = M, e.FpxBankElement = I, e.IbanElement = S, e.IdealBankElement = A, e.LinkAuthenticationElement = D, e.P24BankElement = T, e.PaymentElement = R, e.PaymentRequestButtonElement = B, e.ShippingAddressElement = G, e.useElements = function() {
					return C("calls useElements()").elements
				}, e.useStripe = function() {
					return C("calls useStripe()").stripe
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
				return s
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
			const o = "USD",
				s = "ETH",
				c = "COINS",
				i = [s, "BTC"],
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
				s = r("./src/lib/prettyPrintNumber/index.ts"),
				c = r("./src/reddit/helpers/governance/tokens.ts"),
				i = r("./src/reddit/constants/intlSupport.ts");
			const d = (e, {
					locale: t = n.DEFAULT_LOCALE,
					pretty: r,
					formatOptions: a
				} = {}) => {
					const o = Number(e);
					return Object(i.c)() ? r ? Object(s.b)(o) : new Intl.NumberFormat(t, a).format(o) : u(o, r, t)
				},
				l = (e, t = {}) => {
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: s,
						formatOptions: d,
						displayConversion: l,
						forceDecimals: b,
						currency: f = t.currency || (t.type ? m(t.type) : o.c),
						type: h = t.type || (t.currency ? p(t.currency) : o.b.Real)
					} = t, g = Number(e), y = String(e);
					switch (h) {
						case o.b.Reddit: {
							const e = o.e[f],
								t = e ? e() : f;
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(g) + " " + t : u(g, s, r, t)
						}
						case o.b.Crypto: {
							if (s) {
								return Object(c.c)(y, l) + " " + f
							}
							const e = Number(Object(c.b)(y, l));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : u(e, s, r, f)
						}
						case o.b.Real:
						default: {
							const e = Number(Object(a.a)(y, b));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								notation: s ? "compact" : "standard",
								...d
							}).format(e) : u(e, s, r, f)
						}
					}
				},
				u = (e, t, r, n) => {
					return (t ? Object(s.b)(e) : e.toLocaleString(r)) + (n ? " " + n : "")
				},
				p = e => o.g.includes(e.toUpperCase()) ? o.b.Reddit : o.f.includes(e.toUpperCase()) ? o.b.Crypto : o.b.Real,
				m = e => {
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
				return k
			})), r.d(t, "j", (function() {
				return N
			})), r.d(t, "g", (function() {
				return I
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "c", (function() {
				return T
			})), r.d(t, "a", (function() {
				return G
			})), r.d(t, "h", (function() {
				return L
			})), r.d(t, "e", (function() {
				return U
			})), r.d(t, "i", (function() {
				return H
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/omit.js"),
				o = r.n(a),
				s = r("./node_modules/uuid/v4.js"),
				c = r.n(s),
				i = r("./src/config.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/lib/addQueryParams/index.ts"),
				p = r("./src/lib/makeActionCreator/index.ts"),
				m = r("./src/lib/sentry/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/actions/gold/constants.ts"),
				h = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				g = r("./src/reddit/selectors/gold/productOffers.ts"),
				y = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				C = r("./src/reddit/selectors/user.ts"),
				j = r("./src/reddit/models/Gold/ProductOffer.ts"),
				O = r("./src/reddit/actions/gold/powerups.ts"),
				v = r("./src/reddit/actions/modal.ts"),
				P = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				E = r("./src/reddit/models/Payments/index.ts");
			const x = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				w = e => e.map(e => e.message).join(" : "),
				k = (e, t, r) => async (a, o, {
					gqlContext: s
				}) => {
					const i = c()(),
						d = await Object(P.f)(s(), i, e, t, r);
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
				})), N = (e, t, r, n, a, o, s) => async (i, d, {
					gqlContext: l
				}) => {
					var u;
					const p = d(),
						b = o === j.c.Premium,
						f = o === j.c.Powerups,
						O = {};
					if (f && s) O.powerUps = {
						subredditId: s,
						isAnonymous: n
					};
					else if (b) {
						const e = Object(g.d)(p, {
							provider: E.b.Stripe
						});
						if (!e) return;
						O.premium = {
							pricePackage: e
						}
					}
					let v, x, N = "";
					try {
						N = await i(k(r, a, O))
					} catch (S) {
						return m.c.captureException(S), void(S.message && i(Object(h.stripeApiError)(S.message)))
					}
					i(Object(h.stripeTokenPending)());
					const I = Object(y.y)(p);
					if (I || (v = await i(Object(h.validateAndCreateStripeToken)(e, t)), x = Object(y.v)(p), v)) try {
						const t = c()(),
							r = I || x ? v && x ? Object(P.h)(l(), t, N, v.id) : I ? Object(P.j)(l(), t, N, I) : null : Object(P.i)(l(), t, N, v.id),
							o = await r;
						if (!(null == o ? void 0 : o.ok)) return void i(_);
						const p = o.body.data.createEconPayment;
						if (null === (u = null == p ? void 0 : p.errors) || void 0 === u ? void 0 : u.length) return void i(Object(h.stripeApiError)(w(p.errors)));
						const {
							ok: m,
							payment: g,
							providerExecution: {
								paymentIntentClientSecret: y
							}
						} = p;
						if (m && g.status === P.a.ActionRequired) {
							const t = await e.confirmCardPayment(y),
								{
									error: r
								} = t;
							if (r) return ((e, t) => {
								var r, n;
								(null === (n = null === (r = e.payment_intent) || void 0 === r ? void 0 : r.last_payment_error) || void 0 === n ? void 0 : n.message) ? t(Object(h.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(h.stripeApiError)(e.message)) : t(_)
							})(r, i);
							let n;
							if (!(n = I ? await Object(P.e)(l(), c()(), g.id, I) : await Object(P.d)(l(), c()(), g.id, v.id, x)).ok) return void i(_);
							const a = n.body;
							if (!a.data.confirmEconPayment.ok || a.data.confirmEconPayment.payment.status !== P.a.Paid) return void i(_)
						} else if (m && g.status !== P.a.Paid) return void i(_);
						const j = Object(C.k)(d());
						j && (f && s ? i(L({
							subredditId: s,
							powerupsCount: a,
							user: j,
							isAnonymous: n
						})) : b && i(U({
							user: j
						})))
					} catch (S) {
						m.c.captureException(S), i(_)
					}
				}, I = (e, t, r, n, a) => async (o, s, {
					gqlContext: d
				}) => {
					var l;
					const p = s(),
						b = n === j.c.Premium,
						f = n === j.c.Powerups,
						y = {};
					if (f && a) y.powerUps = {
						subredditId: a,
						isAnonymous: t
					};
					else if (b) {
						const e = Object(g.d)(p, {
							provider: E.b.PayPal
						});
						if (!e) return null;
						y.premium = {
							pricePackage: e
						}
					}
					let O = "";
					try {
						O = await o(k(e, r, y))
					} catch (N) {
						return m.c.captureException(N), N.message && o(Object(h.paypalApiError)(N.message)), null
					}
					const v = i.a.redditUrl;
					let _ = {
						_o: v,
						o: O,
						pt: n
					};
					f && a && (_ = {
						..._,
						r: a
					});
					try {
						const e = Object(u.a)(`${v}/framedModal/paypal-finish`, {
								..._,
								s: !0
							}),
							n = Object(u.a)(`${v}/framedModal/paypal-finish`, _),
							i = c()(),
							p = await Object(P.g)(d(), i, O, e, n);
						if (p && p.ok) {
							const e = p.body.data.createEconPayment;
							if (null === (l = null == e ? void 0 : e.errors) || void 0 === l ? void 0 : l.length) return o(Object(h.paypalApiError)(w(e.errors))), null;
							const n = Object(C.k)(s());
							if (e.ok) {
								const {
									status: s
								} = e.payment;
								if (s === P.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === s && n) return a ? o(L({
									subredditId: a,
									powerupsCount: r,
									user: n,
									isAnonymous: t
								})) : b && o(U({
									user: n
								})), null
							}
						}
					} catch (N) {
						m.c.captureException(N)
					}
					return o(Object(h.paypalApiError)(x())), null
				}, S = (e, t) => async (r, n, {
					gqlContext: a
				}) => {
					var o;
					try {
						const n = c()(),
							s = await Object(P.c)(a(), n, e, t);
						if (s && s.ok) {
							const e = s.body.data.confirmEconPayment;
							if (null === (o = null == e ? void 0 : e.errors) || void 0 === o ? void 0 : o.length) return r(Object(h.paypalApiError)(w(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (s) {
						m.c.captureException(s)
					}
					return r(Object(h.paypalApiError)(x())), !1
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
						m.c.captureException(a), e(Object(h.savedCardsSuccess)([]))
					}
				}, T = e => async (t, r, {
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
						m.c.captureException(a)
					}
				}, M = Object(p.a)(f.O), R = Object(p.a)(f.P), B = Object(p.a)(f.Q), D = e => async (t, r) => {
					await t(M(e)), t(Object(l.f)({
						kind: b.b.Error,
						duration: l.a,
						text: e
					}))
				}, G = (e, t, r) => async (a, o, {
					gqlContext: s
				}) => {
					a(R({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const o = await Object(P.b)(s(), e);
						if (o.ok) {
							const e = o.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void a(D(n[0].message));
							a(B({
								subredditId: t,
								allocatedAt: r
							}))
						} else a(D(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (c) {
						m.c.captureException(c), a(D(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, F = Object(p.a)(f.S), L = e => async (t, r) => {
					t(F(e)), t(Object(O.m)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(v.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(v.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, q = Object(p.a)(f.W), U = ({
					user: e
				}) => async t => {
					await t(Object(O.o)(!0)), t(q({
						user: e
					}))
				}, H = Object(p.a)(f.ab)
		},
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return E
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "e", (function() {
				return k
			})), r.d(t, "b", (function() {
				return N
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "j", (function() {
				return S
			})), r.d(t, "i", (function() {
				return A
			})), r.d(t, "f", (function() {
				return T
			})), r.d(t, "g", (function() {
				return M
			})), r.d(t, "h", (function() {
				return R
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/formatApiError/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/constants/modals.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				p = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				m = r("./src/reddit/endpoints/gold/purchase.ts"),
				b = r("./src/reddit/helpers/correlationIdTracker.ts"),
				f = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				h = r("./src/reddit/models/Gold/Award.ts"),
				g = r("./src/reddit/models/Gold/ProductOffer.ts"),
				y = r("./src/reddit/models/Toast/index.ts"),
				C = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				j = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				O = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const v = Object(o.a)(O.q),
				P = Object(o.a)(O.c),
				E = e => async (t, r) => {
					t(v(e)), t(Object(l.h)(c.a.ECON_COIN_PURCHASE))
				}, x = () => async (e, t) => {
					e(P()), e(Object(l.g)(c.a.ECON_COIN_PURCHASE))
				}, w = Object(o.a)(O.u), k = ({
					correlationId: e,
					packageId: t
				}) => async (r, n) => {
					const a = n();
					Object(C.e)(a, t) ? (r(w({
						correlationId: e,
						packageId: t
					})), r(Object(l.i)(c.a.GOLD_TARGETED_OFFER_MODAL))) : s.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${t}`)
				}, _ = Object(o.a)(O.p), N = ({
					correlationId: e,
					packageId: t
				}) => async (r, n) => {
					Object(C.c)(n(), t) ? (r(_({
						correlationId: e,
						packageId: t
					})), r(Object(l.i)(c.a.ECON_COIN_PACKAGE_OFFER))) : s.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${t}`)
				}, I = (e, t, r) => async (a, o) => {
					await a(Object(d.c)(e, r));
					const s = o(),
						c = Object(C.q)(s);
					if (0 !== c.length) a(E({
						correlationId: r,
						packageId: c[0].mobileId,
						thingId: t
					}));
					else {
						const e = Object(C.n)(s),
							t = n.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						a(Object(u.f)({
							kind: y.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, S = (e, t, r) => async (o, s, {
					apiContext: c
				}) => {
					const d = s(),
						{
							coins: l,
							pennies: u
						} = r,
						p = Object(j.r)(d) || Object(b.e)(b.a.GoldPayment, !1);
					let f, h;
					o(Object(i.stripeTokenPending)());
					const y = Object(j.y)(d);
					if (y || (f = await o(Object(i.validateAndCreateStripeToken)(e, t)), h = Object(j.v)(d), f)) try {
						const e = await Object(m.f)({
							coins: l,
							context: c(),
							correlationId: p,
							offerContext: Object(g.d)(r, !1),
							pennies: u,
							rememberCard: h,
							savedCardId: y || void 0,
							token: f
						});
						if (e.error) {
							const t = Object(a.a)(e.error, e.status);
							return void o(Object(i.stripeApiError)(t))
						}
						return o(Object(i.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(b.b)(b.a.GoldPayment)
					} catch (C) {
						const e = Object(a.a)(C);
						o(Object(i.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						o(Object(i.stripeApiError)(e))
					}
				}, A = (e, t, o, s) => async (c, d, {
					apiContext: l
				}) => {
					const u = d(),
						{
							coins: p,
							pennies: y
						} = o,
						C = Object(j.r)(u) || Object(b.e)(b.a.GoldPayment, !1);
					let O, v;
					c(Object(i.stripeTokenPending)());
					const P = Object(j.y)(u);
					if (P || (O = await c(Object(i.validateAndCreateStripeToken)(e, t)), v = Object(j.v)(u), O)) try {
						const {
							gildModalThingId: e,
							isAnonymous: t,
							message: d,
							selectedAward: j
						} = u.gild;
						if (!e || !j.id) {
							const e = n.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void c(Object(i.stripeApiError)(e))
						}
						const E = j.id,
							w = {
								gildType: E,
								isAnonymous: t,
								message: d
							},
							k = await Object(m.e)({
								coins: p,
								context: l(),
								correlationId: C,
								gildParams: w,
								isOldReddit: s,
								offerContext: Object(g.d)(o, !0),
								pennies: y,
								rememberCard: v,
								savedCardId: P || void 0,
								thingId: e,
								token: O
							});
						if (k.error) {
							const e = Object(a.a)(k.error, k.status);
							return void c(Object(i.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							c(x()), c(Object(i.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: n,
								all_awardings: a,
								coins: o,
								treatment_tags: s
							} = k.body;
							return c(t({
								awardKarmaReceived: n || 0,
								awardId: E,
								awardings: a && a.length ? Object(f.a)(a).map(e => ({
									award: Object(h.h)(e),
									total: e.count
								})) : [],
								coins: o,
								id: e,
								treatmentTags: s
							})), void Object(b.b)(b.a.GoldPayment)
						}
					} catch (E) {
						const e = Object(a.a)(E);
						c(Object(i.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						c(Object(i.stripeApiError)(e))
					}
				}, T = e => async (t, r, {
					apiContext: n
				}) => {
					const o = Object(b.c)(b.a.GoldPayment),
						{
							coins: c,
							pennies: d
						} = e;
					try {
						const e = await Object(p.a)({
							context: n(),
							coins: c,
							pennies: d,
							correlationId: o
						});
						if (e.error) {
							const r = Object(a.a)(e.error);
							return void t(Object(i.paypalApiError)(r))
						} {
							const {
								order_id: t
							} = e.body;
							return t
						}
					} catch (l) {
						s.c.captureException(l);
						const e = Object(a.a)(l);
						t(Object(i.paypalApiError)(e))
					}
				}, M = (e, t) => async (r, n, {
					apiContext: o
				}) => {
					const c = n(),
						d = Object(j.r)(c) || Object(b.e)(b.a.GoldPayment, !1),
						{
							coins: l,
							pennies: u
						} = t;
					try {
						const n = await Object(p.c)({
							context: o(),
							offerContext: Object(g.d)(t, !1),
							orderId: e,
							coins: l,
							pennies: u,
							correlationId: d
						});
						if (n.error) {
							const e = Object(a.a)(n.error);
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
					} catch (m) {
						s.c.captureException(m);
						const e = Object(a.a)(m);
						r(Object(i.paypalApiError)(e))
					}
				}, R = (e, t) => async (o, c, {
					apiContext: d
				}) => {
					const l = c(),
						u = Object(j.r)(l) || Object(b.e)(b.a.GoldPayment, !1),
						{
							coins: m,
							pennies: y
						} = t;
					try {
						const {
							gildModalThingId: s,
							isAnonymous: c,
							message: C,
							selectedAward: j
						} = l.gild;
						if (!s || !j) return void o(Object(i.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const O = j.id,
							v = await Object(p.d)({
								context: d(),
								offerContext: Object(g.d)(t, !0),
								orderId: e,
								coins: m,
								pennies: y,
								thingId: s,
								awardId: O,
								message: C || "",
								isAnonymous: c,
								correlationId: u
							});
						if (v.error) {
							const e = Object(a.a)(v.error);
							o(Object(i.paypalApiError)(e))
						} else {
							o(x());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: n,
								subreddit_coins: a,
								treatment_tags: c
							} = v.body;
							o(Object(i.paymentCompleted)({
								coins: n,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							o(d({
								awardId: O,
								awardKarmaReceived: t || 0,
								awardings: Object(f.a)(e).map(e => ({
									award: Object(h.h)(e),
									total: e.count
								})),
								coins: n,
								id: s,
								subredditCoins: a,
								treatmentTags: c
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (C) {
						s.c.captureException(C);
						const e = Object(a.a)(C);
						o(Object(i.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return l
			})), r.d(t, "paymentCompleted", (function() {
				return u
			})), r.d(t, "cardNameInput", (function() {
				return p
			})), r.d(t, "postalCodeInput", (function() {
				return m
			})), r.d(t, "cardNameEmpty", (function() {
				return b
			})), r.d(t, "cardNumberChange", (function() {
				return f
			})), r.d(t, "cardExpiryChange", (function() {
				return h
			})), r.d(t, "cardCvcChange", (function() {
				return g
			})), r.d(t, "stripeTokenPending", (function() {
				return y
			})), r.d(t, "stripeTokenError", (function() {
				return C
			})), r.d(t, "stripeApiError", (function() {
				return j
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return O
			})), r.d(t, "paypalApiError", (function() {
				return v
			})), r.d(t, "toggleRememberCard", (function() {
				return P
			})), r.d(t, "selectSavedCard", (function() {
				return E
			})), r.d(t, "_deleteSavedCard", (function() {
				return x
			})), r.d(t, "deleteSavedCard", (function() {
				return w
			})), r.d(t, "savedCardsPending", (function() {
				return k
			})), r.d(t, "savedCardsSuccess", (function() {
				return _
			})), r.d(t, "loadSavedCards", (function() {
				return N
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/endpoints/gold/purchase.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const l = Object(o.a)(d.B),
				u = Object(o.a)(d.w),
				p = Object(o.a)(d.b),
				m = Object(o.a)(d.y),
				b = Object(o.a)(d.a),
				f = Object(o.a)(d.G),
				h = Object(o.a)(d.F),
				g = Object(o.a)(d.E),
				y = Object(o.a)(d.I),
				C = Object(o.a)(d.H),
				j = Object(o.a)(d.D),
				O = (e, t) => async (r, o) => {
					const s = o(),
						c = Object(i.h)(s),
						d = Object(i.l)(s),
						l = t.getElement(n.CardNumberElement);
					if (!l) return;
					const {
						token: u,
						error: p
					} = await e.createToken(l, {
						name: c,
						address_zip: d
					});
					if (c.trim()) {
						if (!p && u) return u;
						r(C(p || void 0))
					} else {
						const e = a.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(b({
							message: e
						}))
					}
				}, v = Object(o.a)(d.x), P = Object(o.a)(d.J), E = Object(o.a)(d.C), x = Object(o.a)(d.g), w = e => async (t, r, {
					apiContext: n
				}) => {
					t(x(e));
					try {
						const t = await Object(c.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (a) {
						s.c.captureException(a)
					}
				}, k = Object(o.a)(d.z), _ = Object(o.a)(d.A), N = () => async (e, t, {
					apiContext: r
				}) => {
					e(k());
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
						e(_(n)), n[0] && e(E(n[0].cardId))
					} catch (n) {
						s.c.captureException(n), e(_([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return h
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "e", (function() {
				return C
			})), r.d(t, "d", (function() {
				return j
			})), r.d(t, "c", (function() {
				return O
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/formatApiError/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				i = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				d = r("./src/reddit/endpoints/gold/purchase.ts"),
				l = r("./src/reddit/helpers/correlationIdTracker.ts"),
				u = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				p = r("./src/reddit/models/Gold/Award.ts"),
				m = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				b = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const f = Object(o.a)(b.r),
				h = Object(o.a)(b.d),
				g = Object(o.a)(b.s),
				y = (e, t, r) => async e => {
					e(g({
						thingId: t
					})), e(f({
						correlationId: r
					}))
				}, C = (e, t, o) => async (s, i, {
					apiContext: b
				}) => {
					const f = i(),
						g = Object(l.c)(l.a.GoldPayment);
					let y, C;
					s(Object(c.stripeTokenPending)());
					const j = Object(m.y)(f);
					if (j || (y = await s(Object(c.validateAndCreateStripeToken)(e, t)), C = Object(m.v)(f), y)) try {
						const {
							gildModalThingId: e,
							isAnonymous: t,
							message: i,
							selectedAward: l
						} = f.gild;
						if (!e || !l.id) return void s(Object(c.stripeApiError)(n.fbt._("Gilding unknown thing", null, {
							hk: "Qd6mo"
						})));
						const m = l.id,
							O = l.pennyPrice;
						if (!O) return void s(Object(c.stripeApiError)(n.fbt._("Trying to purchase award with zero price", null, {
							hk: "3FhAjz"
						})));
						const v = {
								gildType: m,
								isAnonymous: t,
								message: i
							},
							P = await Object(d.g)({
								context: b(),
								correlationId: g,
								gildParams: v,
								isOldReddit: o,
								pennies: O,
								rememberCard: C,
								savedCardId: j || void 0,
								thingId: e,
								token: y
							});
						if (P.error) {
							const e = Object(a.a)(P.error, P.status);
							return void s(Object(c.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							s(h()), s(Object(c.paymentCompleted)({
								confirmed: !1
							}));
							const {
								all_awardings: n,
								awarder_karma_received: a,
								coins: o,
								treatment_tags: i
							} = P.body;
							return void s(t({
								awardKarmaReceived: a || 0,
								awardId: m,
								awardings: n && n.length ? Object(u.a)(n).map(e => ({
									award: Object(p.h)(e),
									total: e.count
								})) : [],
								coins: o,
								id: e,
								treatmentTags: i
							}))
						}
					} catch (O) {
						const e = Object(a.a)(O);
						s(Object(c.stripeApiError)(e))
					} else s(Object(c.stripeApiError)(n.fbt._("Looks like something went wrong validating your credit card.", null, {
						hk: "20FruV"
					})))
				}, j = (e, t, r) => async (n, o, {
					apiContext: d
				}) => {
					const u = Object(l.c)(l.a.GoldPayment);
					try {
						const o = await Object(i.b)({
							context: d(),
							awardId: e,
							pennies: t,
							thingId: r,
							correlationId: u
						});
						if (o.error) {
							const e = Object(a.a)(o.error);
							return void n(Object(c.paypalApiError)(e))
						} {
							const {
								order_id: e
							} = o.body;
							return e
						}
					} catch (p) {
						s.c.captureException(p);
						const e = Object(a.a)(p);
						n(Object(c.paypalApiError)(e))
					}
				}, O = e => async (t, o, {
					apiContext: d
				}) => {
					const m = o(),
						b = Object(l.c)(l.a.GoldPayment);
					try {
						const {
							gildModalThingId: o,
							isAnonymous: s,
							message: l,
							selectedAward: f
						} = m.gild;
						if (!o || !f) return void t(Object(c.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const g = f.id,
							y = await Object(i.e)({
								awardId: g,
								context: d(),
								orderId: e,
								thingId: o,
								message: l || "",
								isAnonymous: s,
								correlationId: b
							});
						if (y.error) {
							const e = Object(a.a)(y.error);
							t(Object(c.paypalApiError)(e))
						} else {
							t(h());
							const {
								all_awardings: e,
								awarder_karma_received: n,
								coins: a,
								subreddit_coins: s,
								treatment_tags: i
							} = y.body;
							t(Object(c.paymentCompleted)({
								coins: a,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							t(d({
								awardKarmaReceived: n || 0,
								awardId: g,
								awardings: Object(u.a)(e).map(e => ({
									award: Object(p.h)(e),
									total: e.count
								})),
								coins: a,
								id: o,
								subredditCoins: s,
								treatmentTags: i
							}))
						}
					} catch (f) {
						s.c.captureException(f);
						const e = Object(a.a)(f);
						t(Object(c.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return h
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "a", (function() {
				return v
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/env/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/endpoints/gold/productCatalog/index.ts"),
				i = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/actions/post.ts"),
				p = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const m = Object(o.a)(p.j),
				b = Object(o.a)(p.k),
				f = Object(o.a)(p.i),
				h = e => async (t, r, {
					apiContext: o
				}) => {
					t(m());
					const d = r(),
						l = Object(i.K)(d);
					try {
						const r = !l,
							n = await Object(c.b)({
								context: o(),
								correlationId: e,
								shouldUseCurrentOrigin: r
							});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const a = n.body;
						t(b(a))
					} catch (u) {
						Object(a.b)() || console.error(u), s.c.captureException(u);
						const e = n.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(f(e))
					}
				}, g = Object(o.a)(p.m), y = Object(o.a)(p.n), C = Object(o.a)(p.l), j = (e, t) => async (r, o, {
					apiContext: i
				}) => {
					r(g());
					try {
						const n = await Object(c.c)({
							awardId: e,
							context: i(),
							correlationId: t
						});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const a = n.body;
						if (!a.coinPackages || !a.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						r(y(a))
					} catch (d) {
						Object(a.b)() || console.error(d), s.c.captureException(d);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(C(e))
					}
				}, O = Object(o.a)(p.h), v = () => async (e, t, {
					gqlContext: r
				}) => {
					var o, i;
					try {
						const t = await Object(c.a)(r());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (o = r.errors) || void 0 === o ? void 0 : o.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (i = r.awards) || void 0 === i ? void 0 : i.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(O({
								awards: r.awards
							})), e(Object(u.B)())
						}
					} catch (p) {
						Object(a.b)() || console.error(p), e(Object(d.f)({
							kind: l.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), s.c.captureException(p)
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
		"./src/reddit/components/CoinBalance/index.m.less": function(e, t, r) {
			e.exports = {
				coinBalance: "_1B-dVN_8RcEpQbDNGHy3Ds"
			}
		},
		"./src/reddit/components/CoinBalance/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				s = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/helpers/createEmojiText/index.tsx"),
				i = r("./src/reddit/icons/fonts/Coin/index.tsx"),
				d = r("./src/reddit/components/CoinBalance/index.m.less"),
				l = r.n(d);
			t.a = e => o.a.createElement("div", {
				className: Object(s.a)(l.a.coinBalance, e.className),
				"data-redditstyle": !0
			}, Object(c.a)(n.fbt._("Coin balance:: {Coin icon placeholder}{coinBalance}", [n.fbt._param("Coin icon placeholder", ":coin:"), n.fbt._param("coinBalance", e.coinBalance.toLocaleString())], {
				hk: "2x0upn"
			}), {
				":coin:": o.a.createElement(i.a, null)
			}), " ", o.a.createElement("a", {
				href: "/coins",
				onClick: e.onWhatAreCoinsLinkClick,
				target: "_blank"
			}, n.fbt._("What are Coins?", null, {
				hk: "3fC6PF"
			})))
		},
		"./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				s = r("./src/config.ts"),
				c = r("./src/lib/loadRedditAdsPixel.ts"),
				i = r("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				d = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				u = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				p = r("./src/reddit/icons/fonts/Coin/index.tsx"),
				m = r("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				b = r.n(m);
			class f extends o.a.PureComponent {
				componentDidMount() {
					const {
						gildThingId: e,
						sendEvent: t
					} = this.props;
					t(Object(u.i)(e)), Object(c.b)()
				}
				render() {
					const e = this.props,
						t = e.isGild && n.fbt._("The transaction is processing and we will let you know when it's done.", null, {
							hk: "JMSWS"
						});
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: b.a.paymentCompleteHeader,
						style: {
							backgroundImage: `url("${s.a.assetPath}/img/gold/coins-hero.jpg")`
						}
					}, o.a.createElement(p.a, {
						className: b.a.coinIcon
					}), o.a.createElement("div", {
						className: b.a.paymentCompleteTitleMain
					}, e.isGild ? n.fbt._("Thanks for purchasing an Award, {username}", [n.fbt._param("username", e.userName)], {
						hk: "1VcYkx"
					}) : n.fbt._("Thanks for purchasing Coins, {username}", [n.fbt._param("username", e.userName)], {
						hk: "3m40W1"
					})), o.a.createElement("div", {
						className: b.a.paymentCompleteTitleDescription
					}, t), o.a.createElement("button", {
						className: b.a.closeButton,
						onClick: e.onCloseClick
					}, o.a.createElement(d.b, {
						className: b.a.closeIcon,
						"data-redditstyle": !0
					}))), o.a.createElement(i.a, {
						onCloseClick: e.onCloseClick
					}))
				}
			}
			t.a = Object(l.c)(f)
		},
		"./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return Q
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				c = r("./src/reddit/hooks/useStripePromise.ts"),
				i = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/currency/currencies.ts"),
				l = r("./src/lib/localizeCurrency/index.ts"),
				u = r("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				p = r("./src/reddit/components/StripePaymentForm/index.tsx"),
				m = r("./src/reddit/helpers/createEmojiText/index.tsx"),
				b = r("./src/reddit/hooks/useLocale.ts"),
				f = r("./src/lib/classNames/index.ts"),
				h = r("./src/reddit/components/CoinBalance/index.tsx"),
				g = r("./src/reddit/components/TrackingHelper/index.tsx"),
				y = r("./src/reddit/controls/Button/index.tsx"),
				C = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				j = r("./src/config.ts"),
				O = r("./node_modules/react-dom/index.js"),
				v = r.n(O),
				P = r("./node_modules/react-redux/es/index.js"),
				E = r("./node_modules/reselect/es/index.js"),
				x = r("./src/higherOrderComponents/makeAsync.tsx"),
				w = r("./src/reddit/helpers/loadThirdPartyScript.ts"),
				k = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				_ = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				N = r("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts");
			const I = Object(E.c)({
				isGild: e => !!Object(k.s)(e)
			});
			class S extends s.a.Component {
				constructor() {
					super(...arguments), this.onPayment = () => this.props.createPayment(), this.onAuthorize = e => {
						const {
							orderID: t
						} = e, {
							isGild: r
						} = this.props;
						return this.props.executePayment(r, t)
					}
				}
				render() {
					const {
						className: e
					} = this.props, t = paypalCheckout.Button.driver("react", {
						React: s.a,
						ReactDOM: v.a
					}), r = {
						sandbox: j.a.paypal.apiKey,
						production: j.a.paypal.apiKey
					};
					return s.a.createElement("div", {
						className: e
					}, s.a.createElement(t, {
						env: j.a.paypal.env,
						client: r,
						style: {
							size: "responsive",
							color: "blue",
							shape: "pill",
							label: "paypal",
							tagline: !1
						},
						payment: this.onPayment,
						commit: !0,
						onAuthorize: this.onAuthorize
					}))
				}
			}
			const A = Object(P.b)(I, (e, t) => ({
				createPayment: () => "coinPackage" in t ? e(Object(_.f)(t.coinPackage)) : "awardId" in t ? e(Object(N.d)(t.awardId, t.pennies, t.thingId)) : void 0,
				executePayment: (r, n) => {
					if ("coinPackage" in t) {
						if (r) return void e(Object(_.h)(n, t.coinPackage));
						e(Object(_.g)(n, t.coinPackage))
					} else "awardId" in t && e(Object(N.c)(n))
				}
			}))(S);
			var T = Object(x.a)({
					getComponent: () => Object(w.c)().then(() => A),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				M = r("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				R = r.n(M);
			const {
				fbt: B
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class D extends s.a.Component {
				constructor() {
					super(...arguments), this.onCompletePurchaseClick = () => {
						const {
							gildThingId: e,
							onCompletePurchaseClick: t,
							purchasePackage: r,
							sendEvent: n,
							stripe: a,
							stripeElements: o
						} = this.props;
						a && o && (n(Object(C.c)(e)), t(a, o, r))
					}
				}
				render() {
					const {
						award: e,
						coinBalance: t,
						gildThingId: r,
						purchasePackage: n,
						savedCardsPending: a,
						selectedPayment: o,
						stripeTokenPending: c
					} = this.props;
					return s.a.createElement("div", {
						className: R.a.purchaseSelectPaymentFooter
					}, s.a.createElement(h.a, {
						className: R.a.balance,
						coinBalance: t
					}), o === i.Hb ? e && e.pennyPrice && r ? s.a.createElement(T, {
						awardId: e.id,
						className: Object(f.a)(R.a.purchaseButton, R.a.paypalCheckoutButton),
						pennies: e.pennyPrice,
						thingId: r
					}) : n && s.a.createElement(T, {
						className: Object(f.a)(R.a.purchaseButton, R.a.paypalCheckoutButton),
						coinPackage: n
					}) : null, o === i.Gb && s.a.createElement(y.l, {
						className: R.a.purchaseButton,
						"data-redditstyle": !0,
						disabled: c || a,
						onClick: this.onCompletePurchaseClick
					}, B._("Complete purchase", null, {
						hk: "3d1QJR"
					})))
				}
			}
			var G = Object(g.c)(D),
				F = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				L = r("./src/reddit/icons/fonts/Coin/index.tsx");
			const {
				fbt: q
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var U = e => {
				const t = Object(b.a)();
				return s.a.createElement("div", {
					className: R.a.purchaseHeader,
					style: {
						backgroundImage: `url("${j.a.assetPath}/img/gold/coins-hero.jpg")`
					}
				}, s.a.createElement(L.a, {
					className: R.a.coinIcon
				}), s.a.createElement("div", {
					className: R.a.titleMain
				}, q._("Buy {amount}!", [q._param("amount", Object(l.b)(e.purchasePackage.coins, {
					locale: t,
					type: d.b.Reddit,
					currency: d.a
				}))], {
					hk: "3VNw69"
				})), s.a.createElement("div", {
					className: R.a.titleDescription
				}, q._("You're purchasing Coins for yourself, {userName}!", [q._param("userName", e.userName)], {
					hk: "ZGCBt"
				})), s.a.createElement("img", {
					className: R.a.goldPackage,
					src: e.purchasePackage.images.purchaseSuccess["3x"].url
				}), s.a.createElement("button", {
					className: R.a.closeButton,
					onClick: e.onCloseClick
				}, s.a.createElement(F.b, {
					className: R.a.closeIcon,
					"data-redditstyle": !0
				})))
			};
			var H = e => {
				const t = Object(b.a)(),
					r = [];
				if (e.purchasePackage && r.push(a.fbt._("{coinCount} will automatically be spent on this {awardName} Award.", [a.fbt._param("coinCount", Object(l.b)(e.award.coinPrice, {
						locale: t,
						type: d.b.Reddit,
						currency: d.a
					})), a.fbt._param("awardName", e.award.name)], {
						hk: "2ImQA8"
					})), e.award.pennyDonate && r.push(a.fbt._("{dollarsDonate} will be donated.", [a.fbt._param("dollarsDonate", Object(l.b)(e.award.pennyDonate, {
						locale: t
					}))], {
						hk: "3jOvCI"
					})), e.award.giverCoinReward) {
					r.push(a.fbt._("As a thank you, you will receive {giverCoinReward}.", [a.fbt._param("giverCoinReward", Object(l.b)(e.award.giverCoinReward, {
						locale: t,
						type: d.b.Reddit,
						currency: d.a
					}))], {
						hk: "20S8v2"
					}));
					const n = e.coinBalance + (e.purchasePackage ? e.purchasePackage.coins : 0) + e.award.giverCoinReward - (e.award.pennyPrice ? 0 : e.award.coinPrice);
					n > 0 && n !== e.coinBalance && a.fbt._("You’ll have {remainingCoins} remaining.", [a.fbt._param("remainingCoins", Object(l.b)(n, {
						locale: t,
						type: d.b.Reddit,
						currency: d.a
					}))], {
						hk: "DrEWG"
					})
				}
				return s.a.createElement("div", {
					className: R.a.purchaseGildHeader
				}, s.a.createElement("div", {
					className: R.a.awardTitle
				}, a.fbt._("Give the {awardName} Award", [a.fbt._param("awardName", e.award.name)], {
					hk: "28iR3j"
				})), s.a.createElement("div", {
					className: R.a.awardTitleDescription
				}, r.join(" ")), s.a.createElement("img", {
					className: R.a.awardIcon,
					src: e.award.icon.url
				}), s.a.createElement("button", {
					className: R.a.closeButton,
					onClick: e.onCloseClick
				}, s.a.createElement(F.b, {
					className: Object(f.a)(R.a.closeIcon, R.a.awardPurchase),
					"data-redditstyle": !0
				})))
			};
			const Q = e => {
				const t = Object(b.a)(),
					r = Object(c.a)(),
					o = e.purchasePackage ? e.purchasePackage.pennies : e.selectedAward.pennyPrice || 0;
				return s.a.createElement(n.Elements, {
					stripe: r
				}, s.a.createElement(s.a.Fragment, null, e.gildThingId ? s.a.createElement(H, {
					coinBalance: e.coinBalance,
					award: e.selectedAward,
					purchasePackage: e.purchasePackage,
					userName: e.userName,
					onCloseClick: e.onCloseModal
				}) : e.purchasePackage && s.a.createElement(U, {
					coinBalance: e.coinBalance,
					purchasePackage: e.purchasePackage,
					userName: e.userName,
					onCloseClick: e.onCloseModal
				}), s.a.createElement("div", {
					className: R.a.purchaseBody
				}, s.a.createElement(u.a, {
					className: R.a.selectPayment,
					gildThingId: e.gildThingId,
					nightmode: e.nightmode,
					selectedPayment: e.selectedPayment,
					onPaymentSelected: e.onPaymentSelected
				}), e.selectedPayment === i.Gb && s.a.createElement(n.ElementsConsumer, null, ({
					stripe: t
				}) => s.a.createElement(p.a, {
					nightmode: e.nightmode,
					stripe: t
				})), s.a.createElement("div", {
					className: R.a.checkoutFooter
				}, s.a.createElement("div", {
					className: R.a.purchaseTotal
				}, a.fbt._("Total: {totalAmount}", [a.fbt._param("totalAmount", Object(l.b)(o, {
					locale: t
				}))], {
					hk: "3dx6W8"
				}))), e.selectedPayment === i.Hb && e.paypalErrorMessage && s.a.createElement("div", {
					className: R.a.errorMessage
				}, e.paypalErrorMessage), e.selectedPayment === i.Gb && e.stripeErrorMessage && s.a.createElement("div", {
					className: R.a.errorMessage
				}, e.stripeErrorMessage), s.a.createElement("div", {
					className: R.a.agreementLink
				}, e.purchasePackage && (e => {
					if (!e.gildThingId || !e.purchasePackage) return null;
					return e.coinBalance + e.purchasePackage.coins - e.selectedAward.coinPrice > 0 ? s.a.createElement(s.a.Fragment, null, a.fbt._("The minimum Coins purchase is {coins}.", [a.fbt._param("coins", Object(l.b)(e.purchasePackage.coins, {
						locale: e.locale,
						type: d.b.Reddit,
						currency: d.a
					}))], {
						hk: "1y9FMB"
					}), s.a.createElement("br", null)) : null
				})({
					...e,
					locale: t
				}), Object(m.a)(a.fbt._("By purchasing Coins and Awards, you agree to the :agreement:.", null, {
					hk: "1eCqza"
				}), {
					":agreement:": s.a.createElement("a", {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, a.fbt._("Reddit User Agreement", null, {
						hk: "11z9fY"
					}))
				}))), s.a.createElement(n.ElementsConsumer, null, ({
					stripe: t,
					elements: r
				}) => s.a.createElement(G, {
					award: e.selectedAward,
					coinBalance: e.coinBalance,
					gildThingId: e.gildThingId,
					onCompletePurchaseClick: e.onCompletePurchaseClick,
					purchasePackage: e.purchasePackage,
					savedCardsPending: e.savedCardsPending,
					selectedPayment: e.selectedPayment,
					stripeTokenPending: e.stripeTokenPending,
					stripe: t,
					stripeElements: r
				}))))
			}
		},
		"./src/reddit/components/CoinPurchaseModal/index.m.less": function(e, t, r) {
			e.exports = {
				coinPurchaseModal: "_3PdRn_CekW51ny0uOVaHCK",
				purchaseHeader: "g2a3Zv8q9QUPKkvmhD9dL",
				purchaseGildHeader: "QMHZeOFhvSdgNkN2CTp18",
				coinIcon: "_3alReP5WKjkboxwGTN8Lpb",
				titleMain: "_3jPcOJNUfeN7OdCWA1d5VZ",
				titleDescription: "_1Q6p4vuIwLOxdw0XbHUT8w",
				goldPackage: "_1Zs4anwKjSFfYdqzSlkAcM",
				awardTitle: "_1Xjj9WldJRB-1ed1DXvre4",
				awardTitleDescription: "_2vpRJS-JeaGdKGeNQ2Ol8V",
				awardIcon: "_2zDbtSCEwDNAL2vdRkM5a_",
				closeButton: "_19tq6XZNubN99tY6SeeVQS",
				closeIcon: "_39qPvGtn6v2srEyecX-Q4y",
				awardPurchase: "whOANGCvUvMZjOdtnV1bZ",
				purchaseBody: "_3EtBcIxrPxM_DvmbfXFyCX",
				loaderContainer: "_2uPzorlzh0nEEymC1BvQBX",
				selectPayment: "_1kvmUEmQHiHPMWKNupYHMc",
				checkoutFooter: "HJGClx25Yjtzsp_aYfn0t",
				purchaseTotal: "_1Wq99elhkrt-_gxygdKIRE",
				agreementLink: "_4bWCoUTra_tfj3pkGR8fX",
				purchaseSelectPaymentFooter: "PDhzgUep2V87LcZ5msw2j",
				balance: "_3Yby__H8ckQTVIBMfVRI9L",
				purchaseButton: "_1C6JQFckaXQ2JzWIgJKnwA",
				paypalCheckoutButton: "_1Kbe0XzWlb6SJwe3jCy1R3",
				paymentCompleteHeader: "_3Pz3ZE0Flyeud2EZ_rhxs",
				paymentCompleteTitleMain: "OTAmbKrqsrvoZxHWtSAXO",
				paymentCompleteTitleDescription: "_3vjo7IoOcQ9Hv1YmhvnodL",
				errorMessage: "_2ZSesrmixZQhOH6L7Yce5m"
			}
		},
		"./src/reddit/components/CoinPurchaseModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				c = r("./src/higherOrderComponents/asModal/index.tsx"),
				i = r("./src/reddit/actions/gold/modals.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				l = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				p = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/components/TrackingHelper/index.tsx"),
				b = r("./src/reddit/constants/colors.ts"),
				f = r("./src/reddit/constants/zIndex.ts"),
				h = r("./src/reddit/helpers/correlationIdTracker.ts"),
				g = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				y = r("./src/reddit/models/Toast/index.ts"),
				C = r("./src/reddit/models/User/index.ts"),
				j = r("./src/reddit/selectors/gild.ts"),
				O = r("./src/reddit/selectors/gold/giveAwards.ts"),
				v = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				P = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				E = r("./src/reddit/selectors/platform.ts"),
				x = r("./src/reddit/selectors/user.ts"),
				w = r("./src/lib/classNames/index.ts"),
				k = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				_ = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				N = r("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				I = r.n(N);
			const {
				fbt: S
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var A = e => {
					const {
						award: t,
						onClickClose: r
					} = e;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: I.a.purchaseGildHeader
					}, a.a.createElement("div", {
						className: I.a.awardTitle
					}, S._("Give the {award name} Award", [S._param("award name", t.name)], {
						hk: "1nWqWe"
					})), a.a.createElement("img", {
						className: I.a.awardIcon,
						src: t.icon.url
					}), a.a.createElement("button", {
						className: I.a.closeButton,
						onClick: r
					}, a.a.createElement(k.b, {
						className: Object(w.a)(I.a.closeIcon, I.a.awardPurchase),
						"data-redditstyle": !0
					}))), a.a.createElement("div", {
						className: Object(w.a)(I.a.purchaseBody, I.a.loaderContainer)
					}, a.a.createElement(_.a, {
						sizePx: 100
					})))
				},
				T = r("./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx"),
				M = r("./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx");

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const B = Object(s.c)({
					activePage: P.q,
					allowNavigationCallback: e => {
						const t = Object(E.a)(e);
						return null === t ? void 0 : t
					},
					coinBalance: x.e,
					coinPackages: v.d,
					correlationId: e => Object(P.r)(e) || Object(h.e)(h.a.GoldPayment, !1),
					dealCoinPackages: v.f,
					gildThingId: P.s,
					isIframed: j.g,
					nightmode: x.X,
					savedCardsPending: P.w,
					selectedAward: O.b,
					selectedPayment: P.c,
					stripeErrorMessage: P.j,
					stripeTokenPending: P.m,
					paypalErrorMessage: P.d,
					purchaseCatalogError: v.n,
					purchaseCatalogPending: v.o,
					purchasePackageId: P.t,
					recommendedPackages: v.q,
					userName: e => {
						const t = Object(x.k)(e);
						return `u/${Object(C.e)(t)}`
					}
				}),
				D = Object(o.b)(B, (e, t) => ({
					closeModal: () => {
						e(Object(d.a)()), e(Object(i.a)())
					},
					loadSavedCards: () => e(Object(l.loadSavedCards)()),
					onFailedToLoadCatalog: t => {
						const r = {
							kind: y.b.Error,
							text: t
						};
						return e(Object(p.f)(r))
					},
					onPaymentSelected: t => e(Object(l.selectPaymentMethod)(t)),
					requestPurchaseCatalog: t => e(Object(u.b)(t)),
					dispatchCompletePurchase: (t, r, n, a, o) => {
						e(a ? Object(d.i)(t, r, n, o) : Object(d.j)(t, r, n))
					}
				}), (e, t, r) => ({
					...e,
					...t,
					...r,
					onCompletePurchaseClick: (r, n, a) => t.dispatchCompletePurchase(r, n, a, !!e.gildThingId, e.isIframed)
				}));
			class G extends a.a.Component {
				constructor(e) {
					super(e), this.handleEscapeKey = e => {
						const {
							onTryCloseModal: t
						} = this.props;
						if (27 === e.keyCode) return t()
					};
					const {
						coinPackages: t,
						correlationId: r,
						loadSavedCards: n,
						purchaseCatalogPending: a,
						requestPurchaseCatalog: o
					} = this.props;
					t.length || a || o(r), n()
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						gildThingId: e,
						sendEvent: t
					} = this.props;
					Object(h.e)(h.a.GoldPayment, !1), t(Object(g.h)(e))
				}
				componentDidUpdate(e) {
					if (this.props.stripeErrorMessage && !e.stripeErrorMessage) {
						const {
							gildThingId: e,
							sendEvent: t
						} = this.props;
						t(Object(g.f)(e))
					}
				}
				render() {
					const {
						activePage: e,
						coinBalance: t,
						coinPackages: r,
						dealCoinPackages: n,
						gildThingId: o,
						nightmode: s,
						onCompletePurchaseClick: c,
						onFailedToLoadCatalog: i,
						onPaymentSelected: d,
						onTryCloseModal: l,
						paypalErrorMessage: u,
						purchaseCatalogError: p,
						purchaseCatalogPending: m,
						purchasePackageId: b,
						recommendedPackages: f,
						savedCardsPending: h,
						selectedAward: g,
						selectedPayment: y,
						stripeErrorMessage: C,
						stripeTokenPending: j,
						userName: O
					} = this.props;
					if (p) return i(p), l(), null;
					const v = !!o,
						P = [...r, ...n, ...f].filter(e => e.mobileId === b)[0];
					return "paymentCompleted" === e ? a.a.createElement("div", null, a.a.createElement(T.a, {
						isGild: v,
						onCloseClick: l,
						userName: O
					})) : m || !P ? a.a.createElement("div", null, a.a.createElement(A, {
						award: g,
						onClickClose: l
					})) : a.a.createElement("div", null, "selectPayment" === e && a.a.createElement(M.a, {
						coinBalance: t,
						gildThingId: o,
						nightmode: s,
						onCloseModal: l,
						onCompletePurchaseClick: c,
						onPaymentSelected: d,
						paypalErrorMessage: u,
						purchasePackage: P,
						savedCardsPending: h,
						selectedAward: g,
						selectedPayment: y,
						stripeErrorMessage: C,
						stripeTokenPending: j,
						userName: O
					}))
				}
			}
			const F = Object(c.a)(G);
			t.default = D(Object(m.c)(class extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							gildThingId: e,
							sendEvent: t
						} = this.props;
						t(Object(g.b)(e)), this.onCloseModal()
					}, this.onCloseModal = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}
				}
				render() {
					const e = {
						backgroundColor: b.a.overlayReportFlow,
						...this.props.isIframed ? {
							zIndex: f.a,
							paddingTop: 12,
							paddingBottom: 12
						} : {}
					};
					return a.a.createElement(F, R({}, this.props, {
						className: I.a.coinPurchaseModal,
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						overlayCustomStyles: e,
						withOverlay: !0
					}))
				}
			}))
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
				s = r("./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less"),
				c = r.n(s);
			const {
				fbt: i
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = ({
				buttonText: e,
				onCloseClick: t
			}) => a.a.createElement("div", {
				className: c.a.purchaseFooter
			}, a.a.createElement(o.l, {
				className: c.a.purchaseButton,
				"data-redditstyle": !0,
				onClick: t
			}, e || i._("Done", null, {
				hk: "3s1bT9"
			})))
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
				s = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				i = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				d = r("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				l = r.n(d);
			const u = e => o.a.createElement("label", {
				className: Object(s.a)(e.className, l.a.paymentOption)
			}, o.a.createElement("input", {
				type: "radio",
				id: e.value,
				name: "payment-option",
				value: e.value,
				checked: e.selectedValue === e.value,
				onChange: e.onChange
			}), o.a.createElement("div", {
				className: Object(s.a)(l.a.paymentOptionContent, {
					[l.a.isNightMode]: e.nightmode
				})
			}, e.children));
			class p extends o.a.Component {
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
			t.a = Object(c.c)(p)
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
				s = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				p = r("./src/reddit/controls/ErrorText/index.tsx");
			const {
				fbt: m
			} = r("./node_modules/fbt/lib/FbtPublic.js"), b = ({
				className: e
			}) => a.a.createElement(p.b, {
				className: e
			}, m._("Error loading Stripe, please refresh the page and try again", null, {
				hk: "2O1NWp"
			}));
			var f = r("./node_modules/fbt/lib/FbtPublic.js"),
				h = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				g = r("./src/config.ts"),
				y = r("./src/reddit/components/CheckoutForm/index.m.less"),
				C = r.n(y);
			const j = Object(s.c)({
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
						cardNumberValidation: o,
						onCardNumberChange: s,
						onCardExpiryChange: i,
						onCardCvcChange: d,
						nameOnCardValidation: l,
						postalCode: u,
						stripe: p
					} = this.props;
					if (!p) return a.a.createElement(b, {
						className: e
					});
					const {
						cardNumberReady: m,
						cardExpiryReady: g,
						cardCVCReady: y
					} = this.state, j = {
						base: {
							lineHeight: "40px",
							color: this.computedStyle.getPropertyValue("--newRedditTheme-bodyText"),
							"::placeholder": {
								color: this.computedStyle.getPropertyValue("--newRedditTheme-metaText")
							}
						}
					};
					return a.a.createElement("div", {
						className: Object(c.a)(C.a.checkoutForm, e)
					}, a.a.createElement("div", {
						className: C.a.formCellWide
					}, a.a.createElement("input", {
						className: Object(c.a)(C.a.cardInput, C.a.nameOnCard, {
							[C.a.cardInputError]: !!l
						}),
						type: "text",
						placeholder: f.fbt._("NAME ON CARD", null, {
							hk: "IgrlQ"
						}).toString(),
						onChange: this.onChangeCardName,
						value: n
					})), a.a.createElement("div", {
						className: C.a.formCell
					}, a.a.createElement(h.CardNumberElement, {
						className: Object(c.a)(C.a.cardInput, {
							[C.a.cardInputError]: !!o
						}),
						onChange: s,
						onReady: this.onCardNumberReady,
						options: {
							placeholder: f.fbt._("CARD NUMBER", null, {
								hk: "3pqMxG"
							}).toString(),
							style: j
						}
					}), !m && a.a.createElement("div", {
						className: C.a.elementPlaceholder
					}, f.fbt._("CARD NUMBER", null, {
						hk: "3pqMxG"
					}))), a.a.createElement("div", {
						className: C.a.formCell
					}, a.a.createElement(h.CardExpiryElement, {
						className: Object(c.a)(C.a.cardInput, {
							[C.a.cardInputError]: !!r
						}),
						onChange: i,
						onReady: this.onCardExpiryReady,
						options: {
							placeholder: f.fbt._("MM/YY", null, {
								hk: "Hou17"
							}).toString(),
							style: j
						}
					}), !g && a.a.createElement("div", {
						className: C.a.elementPlaceholder
					}, f.fbt._("MM/YY", null, {
						hk: "Hou17"
					}))), a.a.createElement("div", {
						className: C.a.formCell
					}, a.a.createElement(h.CardCvcElement, {
						className: Object(c.a)(C.a.cardInput, {
							[C.a.cardInputError]: !!t
						}),
						onChange: d,
						onReady: this.onCardCVCReady,
						options: {
							placeholder: f.fbt._("CCV", null, {
								hk: "dZzZJ"
							}).toString(),
							style: j
						}
					}), !y && a.a.createElement("div", {
						className: C.a.elementPlaceholder
					}, f.fbt._("CCV", null, {
						hk: "dZzZJ"
					}))), a.a.createElement("div", {
						className: C.a.formCell
					}, a.a.createElement("input", {
						className: Object(c.a)(C.a.cardInput, C.a.nameOnCard),
						type: "text",
						onChange: this.onChangePostalCode,
						placeholder: f.fbt._("ZIP CODE", null, {
							hk: "2lJZ4j"
						}).toString(),
						value: u
					})))
				}
			}
			var v = Object(o.b)(j, e => ({
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
				P = r("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				E = r("./src/reddit/components/StripePaymentForm/index.m.less"),
				x = r.n(E);
			var w = e => {
					const {
						onToggleRememberCard: t,
						rememberCard: r
					} = e, n = Object(h.useStripe)();
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(v, {
						className: x.a.creditCard,
						stripe: n
					}), a.a.createElement(P.a, {
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
						src: `${g.a.assetPath}/img/payment-icons/powered-by-stripe.png`
					})))
				},
				k = r("./src/reddit/icons/svgs/Trash2/index.tsx");
			const {
				fbt: _
			} = r("./node_modules/fbt/lib/FbtPublic.js"), N = e => 2 === e.length ? e : "0" + e, I = e => {
				switch (e.toLowerCase()) {
					case "visa":
						return `${g.a.assetPath}/img/payment-icons/visa.png`;
					case "mastercard":
						return `${g.a.assetPath}/img/payment-icons/mastercard.png`;
					case "discover":
						return `${g.a.assetPath}/img/payment-icons/discover.jpg`;
					case "american express":
						return `${g.a.assetPath}/img/payment-icons/amex.png`;
					default:
						return null
				}
			};
			class S extends a.a.PureComponent {
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
					} = this.props, t = I(e.brand);
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
					}, _._("Expires {month} / {year}", [_._param("month", N(e.expirationMonth.toString())), _._param("year", e.expirationYear.toString())], {
						hk: "3iXzVI"
					}))), this.state.showConfirmText ? a.a.createElement("button", {
						className: x.a.confirmText,
						onClick: this.onConfirmClick
					}, _._("Confirm", null, {
						hk: "gFhpD"
					})) : a.a.createElement("button", {
						onClick: this.onTrashCanClick
					}, a.a.createElement(k.b, {
						className: x.a.icon
					})))
				}
			}
			var A = S;
			const T = Object(s.c)({
					rememberCard: u.v,
					savedCard: e => Object(u.x)(e)[0],
					stripeInfoLoading: u.w
				}),
				M = Object(o.b)(T, (e, t) => ({
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
						rememberCard: o,
						savedCard: s,
						stripe: i,
						stripeInfoLoading: d
					} = this.props;
					if (!i) return a.a.createElement(b, {
						className: Object(c.a)(x.a.stripePaymentForm, e)
					});
					const u = d,
						p = !u && s,
						m = !u && !p,
						f = u ? x.a.loadingState : p ? x.a.savedCardState : x.a.formState;
					return a.a.createElement("div", {
						className: Object(c.a)(x.a.stripePaymentForm, f, e)
					}, u && a.a.createElement(l.a, {
						className: x.a.loader,
						sizePx: 60
					}), p && s && a.a.createElement("form", null, a.a.createElement(A, {
						nightmode: t,
						onDelete: r,
						savedCard: s
					})), m && a.a.createElement(w, {
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
				return j
			})), r.d(t, "c", (function() {
				return O
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/uniqueId.js"),
				o = r.n(a),
				s = r("./node_modules/raf/index.js"),
				c = r.n(s),
				i = r("./node_modules/react/index.js"),
				d = r.n(i),
				l = r("./src/lib/classNames/index.ts"),
				u = r("./src/higherOrderComponents/asModal/index.tsx"),
				p = r("./src/reddit/controls/Button/index.tsx"),
				m = r("./src/reddit/layout/row/Inline/index.tsx"),
				b = r("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				f = r.n(b);
			var h = Object(u.a)(e => {
					const {
						children: t,
						title: r
					} = e;
					return d.a.createElement("div", {
						className: f.a.wrapper
					}, d.a.createElement(m.a, {
						className: f.a.titleRow
					}, r), d.a.createElement("div", {
						className: f.a.detailsContainer
					}, t), d.a.createElement(m.a, {
						className: f.a.buttonRow
					}, d.a.createElement(p.l, {
						className: f.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				g = r("./src/reddit/controls/ErrorText/index.m.less"),
				y = r.n(g);
			class C extends d.a.Component {
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
						moreText: o = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: s,
						isModalOpen: c
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(y.a.wrapper, t)
					}, d.a.createElement("span", {
						className: y.a.description,
						ref: this.spanRef
					}, e), s && d.a.createElement("span", {
						className: y.a.moreText,
						onClick: this.toggleModal
					}, o), c && d.a.createElement(h, {
						onConfirmed: this.toggleModal,
						title: a
					}, r || e))
				}
			}
			const j = e => {
					const {
						className: t,
						errorClassName: r,
						errorModalTitle: n,
						fallbackMessage: a,
						messages: o = []
					} = e, s = o.length ? o : a ? [a] : [];
					return s.length ? d.a.createElement("div", {
						className: t
					}, s.map((e, t) => d.a.createElement(C, {
						className: r,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				O = e => d.a.createElement(j, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = C
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
				s = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = r.n(s);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => a.a.createElement("div", {
				className: Object(o.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
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
				return p
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "e", (function() {
				return b
			}));
			var n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				s = r("./src/reddit/constants/headers.ts"),
				c = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
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
					l = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					u = Object(c.a)(l);
				return Object(a.a)(Object(o.a)(t, [s.a]), {
					method: n.jb.POST,
					endpoint: u,
					data: d
				}).then(i.c)
			}, l = async ({
				context: e,
				coins: t,
				pennies: r,
				correlationId: c
			}) => {
				const d = {
					coins: t,
					pennies: r,
					correlation_id: c
				};
				return Object(a.a)(Object(o.a)(e, [s.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(i.c)
			}, u = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: c,
				correlationId: d
			}) => {
				const l = {
					award_id: t,
					correlation_id: d,
					pennies: r,
					thing_id: c
				};
				return Object(a.a)(Object(o.a)(e, [s.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(i.c)
			}, p = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: c,
				pennies: d,
				correlationId: l
			}) => {
				const u = {
					offer_context: t,
					order_id: r,
					coins: c,
					pennies: d,
					correlation_id: l
				};
				return Object(a.a)(Object(o.a)(e, [s.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: u
				}).then(i.c)
			}, m = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: c,
				isAnonymous: d,
				message: l,
				offerContext: u,
				orderId: p,
				pennies: m,
				thingId: b
			}) => {
				const f = {
					award_id: e,
					coins: r,
					correlation_id: c,
					is_anonymous: d,
					message: l,
					offer_context: u,
					order_id: p,
					pennies: m,
					thing_id: b
				};
				return Object(a.a)(Object(o.a)(t, [s.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: f
				}).then(i.c)
			}, b = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: c,
				message: d,
				orderId: l,
				thingId: u
			}) => {
				const p = {
					award_id: e,
					correlation_id: r,
					is_anonymous: c,
					message: d,
					order_id: l,
					thing_id: u
				};
				return Object(a.a)(Object(o.a)(t, [s.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: p
				}).then(i.c)
			}
		},
		"./src/reddit/endpoints/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return g
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "i", (function() {
				return C
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "j", (function() {
				return O
			})), r.d(t, "g", (function() {
				return v
			})), r.d(t, "c", (function() {
				return P
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "b", (function() {
				return w
			})), r.d(t, "l", (function() {
				return k
			})), r.d(t, "k", (function() {
				return _
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				a = r.n(n),
				o = r("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				s = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				c = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				i = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = r("./src/redditGQL/operations/CreateEconOrder.json"),
				l = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				u = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				p = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				m = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				b = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				f = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				h = r("./src/lib/makeGqlRequest/index.ts");
			const g = (e, t, r, n, o) => {
				const {
					premium: s,
					...c
				} = o, i = (null == s ? void 0 : s.pricePackage) || r.pricePackages[0], l = new a.a(i.price).multipliedBy(n).toFixed();
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
			var y;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(y || (y = {}));
			const C = (e, t, r, n) => Object(h.a)(e, {
					...p,
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
				O = (e, t, r, n) => Object(h.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: r,
						cardId: n
					}
				}),
				v = (e, t, r, n, a) => Object(h.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: r,
						successUrl: n,
						cancelUrl: a
					}
				}),
				P = (e, t, r, n) => Object(h.a)(e, {
					...s,
					variables: {
						nonce: t,
						paymentId: r,
						token: n
					}
				}),
				E = (e, t, r, n) => Object(h.a)(e, {
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
					...o,
					variables: {
						orderId: t
					}
				}),
				k = e => Object(h.a)(e, {
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
				return s
			})), r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				a = r("./src/lib/prettyPrintNumber/index.ts");

			function o(e, t) {
				const r = new n.BigNumber(e),
					a = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(a).toString()
			}

			function s(e, t) {
				return Object(a.b)(parseInt(o(e, t), 10))
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
				return y
			}));
			var n = "https://js.stripe.com/v3",
				a = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
				o = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
				s = null,
				c = function(e) {
					return null !== s ? s : s = new Promise((function(t, r) {
						if ("undefined" != typeof window)
							if (window.Stripe && e && console.warn(o), window.Stripe) t(window.Stripe);
							else try {
								var s = function() {
									for (var e = document.querySelectorAll('script[src^="'.concat(n, '"]')), t = 0; t < e.length; t++) {
										var r = e[t];
										if (a.test(r.src)) return r
									}
									return null
								}();
								s && e ? console.warn(o) : s || (s = function(e) {
									var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
										r = document.createElement("script");
									r.src = "".concat(n).concat(t);
									var a = document.head || document.body;
									if (!a) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
									return a.appendChild(r), r
								}(e)), s.addEventListener("load", (function() {
									window.Stripe ? t(window.Stripe) : r(new Error("Stripe.js not available"))
								})), s.addEventListener("error", (function() {
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
				p = r("./src/config.ts"),
				m = r("./node_modules/react-redux/es/index.js"),
				b = r("./src/reddit/constants/experiments.ts"),
				f = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const h = Object(f.a)(b.wc);
			let g = null;

			function y() {
				const e = Object(m.e)(h);
				return g || (g = u(p.a.stripe.apiKey(e))), g
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
				o = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/icons/svgs/Trash2/index.m.less"),
				c = r.n(s);
			const i = e => a.a.createElement("svg", {
				className: Object(o.a)(c.a.icon, e.className),
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
			var n, a, o, s;
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
				}(s || (s = {}))
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
				return p
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "g", (function() {
				return g
			})), r.d(t, "f", (function() {
				return y
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/makeProductOfferKey/index.ts"),
				o = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/models/Payments/index.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				d = (e, {
					subredditId: t,
					type: r
				}) => {
					var n, o, s;
					return t ? e.subreddits.productOffers[Object(a.a)(r, t)] : null === (s = null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === o ? void 0 : o.productOffers) || void 0 === s ? void 0 : s[Object(a.a)(r)]
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
				p = e => {
					const t = d(e, {
						type: o.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				m = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === s.b.PayPal || e[0] === s.b.Stripe)(e.requiredPaymentProviders)) : null,
				b = Object(n.a)(p, c.p, (e, t) => m(e, t) || null),
				f = Object(n.a)(b, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				h = Object(n.a)(b, e => (null == e ? void 0 : e[0].price) || null),
				g = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				y = Object(n.a)(g, e => Boolean(null == e ? void 0 : e.isCanceled))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CoinPurchaseModal.83f09c82a25b410d3ace.js.map