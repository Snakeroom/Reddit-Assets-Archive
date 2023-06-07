// https://www.redditstatic.com/desktop2x/Premium~reddit-components-Econ-Prediction-PremiumModal.730813fa3b502f901416.js
// Retrieved at 6/7/2023, 12:00:04 AM by Reddit Dataminer v1.0.0
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
					g = t.createContext(null);
				g.displayName = "ElementsContext";
				var y = function(e) {
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
					}), [d.stripe]), t.createElement(g.Provider, {
						value: d
					}, a)
				};
				y.propTypes = {
					stripe: o.any,
					options: o.object
				};
				var v = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(g), e)
					},
					O = function(e) {
						return (0, e.children)(v("mounts <ElementsConsumer>"))
					};
				O.propTypes = {
					children: o.func.isRequired
				};
				var j = function(e) {
						var r = t.useRef(e);
						return t.useEffect((function() {
								r.current = e
							}), [e]),
							function() {
								r.current && r.current.apply(r, arguments)
							}
					},
					P = function() {},
					k = function(e, r) {
						var n, a = "".concat((n = e).charAt(0).toUpperCase() + n.slice(1), "Element"),
							i = r ? function(e) {
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
									i = r.options,
									s = void 0 === i ? {} : i,
									c = r.onBlur,
									d = void 0 === c ? P : c,
									l = r.onFocus,
									u = void 0 === l ? P : l,
									p = r.onReady,
									b = void 0 === p ? P : p,
									h = r.onChange,
									g = void 0 === h ? P : h,
									y = r.onEscape,
									O = void 0 === y ? P : y,
									k = r.onClick,
									E = void 0 === k ? P : k,
									w = v("mounts <".concat(a, ">")).elements,
									x = t.useRef(null),
									_ = t.useRef(null),
									C = j(b),
									N = j(d),
									I = j(u),
									S = j(E),
									A = j(g),
									M = j(O);
								t.useLayoutEffect((function() {
									if (null == x.current && w && null != _.current) {
										var t = w.create(e, s);
										x.current = t, t.mount(_.current), t.on("ready", (function() {
											return C(t)
										})), t.on("change", A), t.on("blur", N), t.on("focus", I), t.on("escape", M), t.on("click", S)
									}
								}));
								var L = m(s);
								return t.useEffect((function() {
									if (x.current) {
										var e = f(s, L, ["paymentRequest"]);
										e && x.current.update(e)
									}
								}), [s, L]), t.useLayoutEffect((function() {
									return function() {
										x.current && x.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: o,
									ref: _
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
					w = k("auBankAccount", E),
					x = k("card", E),
					_ = k("cardNumber", E),
					C = k("cardExpiry", E),
					N = k("cardCvc", E),
					I = k("fpxBank", E),
					S = k("iban", E),
					A = k("idealBank", E),
					M = k("p24Bank", E),
					L = k("epsBank", E),
					T = k("payment", E),
					B = k("paymentRequestButton", E),
					R = k("linkAuthentication", E),
					G = k("shippingAddress", E),
					U = k("afterpayClearpayMessage", E);
				e.AfterpayClearpayMessageElement = U, e.AuBankAccountElement = w, e.CardCvcElement = N, e.CardElement = x, e.CardExpiryElement = C, e.CardNumberElement = _, e.Elements = y, e.ElementsConsumer = O, e.EpsBankElement = L, e.FpxBankElement = I, e.IbanElement = S, e.IdealBankElement = A, e.LinkAuthenticationElement = R, e.P24BankElement = M, e.PaymentElement = T, e.PaymentRequestButtonElement = B, e.ShippingAddressElement = G, e.useElements = function() {
					return v("calls useElements()").elements
				}, e.useStripe = function() {
					return v("calls useStripe()").stripe
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
			const d = function(e) {
					let {
						locale: t = n.DEFAULT_LOCALE,
						pretty: r,
						formatOptions: a
					} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const o = Number(e);
					return Object(c.c)() ? r ? Object(i.b)(o) : new Intl.NumberFormat(t, a).format(o) : u(o, r, t)
				},
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: i,
						formatOptions: d,
						displayConversion: l,
						forceDecimals: f,
						currency: b = t.currency || (t.type ? p(t.type) : o.c),
						type: h = t.type || (t.currency ? m(t.currency) : o.b.Real)
					} = t, g = Number(e), y = String(e);
					switch (h) {
						case o.b.Reddit: {
							const e = o.e[b],
								t = e ? e() : b;
							return Object(c.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(g) + " " + t : u(g, i, r, t)
						}
						case o.b.Crypto: {
							if (i) {
								return Object(s.d)(y, l) + " " + b
							}
							const e = Number(Object(s.c)(y, l));
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
							const e = Number(Object(a.a)(y, f));
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
		"./src/reddit/actions/economics/powerups/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = e => (null == e ? void 0 : e.map(e => e.message).join(", ")) || ""
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return k
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "i", (function() {
				return C
			})), r.d(t, "g", (function() {
				return N
			})), r.d(t, "f", (function() {
				return I
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "b", (function() {
				return A
			})), r.d(t, "e", (function() {
				return L
			})), r.d(t, "h", (function() {
				return T
			}));
			var n, a = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/lodash/omit.js"),
				i = r.n(o),
				s = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				c = r("./src/config.ts"),
				d = (r("./src/reddit/actions/toaster.ts"), r("./src/lib/addQueryParams/index.ts")),
				l = r("./src/lib/makeActionCreator/index.ts"),
				u = r("./src/lib/sentry/index.ts"),
				m = r("./src/reddit/models/Gold/ProductOffer.ts"),
				p = (r("./src/reddit/models/Toast/index.ts"), r("./src/reddit/actions/gold/constants.ts")),
				f = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				b = r("./src/reddit/selectors/experiments/econ/index.ts"),
				h = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/endpoints/gold/productOfferPurchase/index.ts"),
				v = r("./src/redditGQL/types.ts");
			! function(e) {
				e.GenericError = "GenericPurchaseError", e.AccountAgeRestriction = "AccountAgeRestrictionError", e.RateLimiting = "RateLimitingCheckError"
			}(n || (n = {}));
			const O = () => a.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				j = (e, t) => !!(null == e ? void 0 : e.find(e => e.code === t)),
				P = e => e.map(e => e.message).join(" : "),
				k = (e, t, r, n, o) => async (i, c, d) => {
					let {
						gqlContext: l
					} = d;
					const u = Object(s.a)(),
						m = await Object(y.f)(l(), u, e, t, r, n, o),
						p = m.body,
						{
							errors: f,
							order: b
						} = p.data.createEconOrder;
					if (f && f.length && E(f), m.ok && b) return b.id;
					throw new Error(a.fbt._("Sorry, unable to complete purchase. Your account was not charged.", null, {
						hk: "32LzSN"
					}))
				}, E = e => {
					if (j(e, n.GenericError)) throw new Error(a.fbt._("Sorry, unable to complete purchase. Your account was not charged.", null, {
						hk: "1uV3pC"
					}));
					if (j(e, n.AccountAgeRestriction)) throw new Error(a.fbt._("Your account isn’t old enough to complete this type of purchase yet.", null, {
						hk: "3TMbsU"
					}));
					if (j(e, n.RateLimiting)) throw new Error(a.fbt._("You’ve reached your purchase limit. Try again later", null, {
						hk: "1TwpTd"
					}));
					throw new Error(a.fbt._("Sorry, unable to complete purchase. Your account was not charged.", null, {
						hk: "32LzSN"
					}))
				}, w = (e, t) => {
					var r, n;
					(null === (n = null === (r = e.payment_intent) || void 0 === r ? void 0 : r.last_payment_error) || void 0 === n ? void 0 : n.message) ? t(Object(f.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(f.stripeApiError)(e.message)) : t(x)
				}, x = Object(f.stripeApiError)(a.fbt._("Something went wrong during payment creation", null, {
					hk: "2LgB2E"
				})), _ = e => !!e && e.hasOwnProperty("success"), C = e => {
					let {
						stripe: t,
						stripeElements: r,
						productOffer: n,
						pricePackage: a,
						productsCount: o,
						extraParams: i
					} = e;
					return async (e, c, d) => {
						let {
							gqlContext: l
						} = d;
						var p, g;
						const O = c();
						let j, E, _ = "";
						try {
							_ = await e(k(n, a, o, i, v.I.Stripe))
						} catch (N) {
							return u.c.captureException(N), void(N.message && e(Object(f.stripeApiError)(N.message)))
						}
						e(Object(f.stripeTokenPending)());
						const C = Object(h.z)(O);
						if (C || (j = await e(Object(f.validateAndCreateStripeToken)(t, r)), E = Object(h.w)(O), j))
							if (n.type === m.c.Coinpack && Object(b.p)(O)) try {
								const r = await Object(y.g)(l(), {
									orderId: _,
									provider: v.I.Stripe
								});
								if (!(null == r ? void 0 : r.ok)) return void e(x);
								const {
									body: n
								} = r;
								if (!("data" in n)) return void e(x);
								const {
									errors: a,
									ok: o,
									paymentIntent: i
								} = null !== (p = n.data.createPaymentIntent) && void 0 !== p ? p : {};
								if (null == a ? void 0 : a.length) return void e(Object(f.stripeApiError)(P(a)));
								if (!o || !i) return void e(x);
								const {
									error: s
								} = await t.confirmCardPayment(i.id, {
									payment_method: {
										card: {
											token: j.id
										}
									}
								});
								return s ? w(s, e) : {
									success: !0
								}
							} catch (N) {
								u.c.captureException(N), e(x)
							} else try {
								const r = Object(s.a)(),
									n = C || E ? j && E ? Object(y.i)(l(), r, _, j.id) : C ? Object(y.k)(l(), r, _, C) : null : Object(y.j)(l(), r, _, j.id),
									a = await n;
								if (!(null == a ? void 0 : a.ok)) return void e(x);
								const o = a.body.data.createEconPayment;
								if (null === (g = null == o ? void 0 : o.errors) || void 0 === g ? void 0 : g.length) return void e(Object(f.stripeApiError)(P(o.errors)));
								const {
									ok: i,
									payment: c,
									providerExecution: {
										paymentIntentClientSecret: d
									}
								} = o;
								if (i && c.status === y.a.ActionRequired) {
									const r = await t.confirmCardPayment(d),
										{
											error: n
										} = r;
									if (n) return w(n, e);
									let a;
									if (!(a = C ? await Object(y.e)(l(), Object(s.a)(), c.id, C) : await Object(y.d)(l(), Object(s.a)(), c.id, j.id, E)).ok) return void e(x);
									const o = a.body;
									if (!o.data.confirmEconPayment.ok || o.data.confirmEconPayment.payment.status !== y.a.Paid) return void e(x)
								} else if (i && c.status !== y.a.Paid) return void e(x);
								return {
									success: !0
								}
							} catch (N) {
								u.c.captureException(N), e(x)
							}
					}
				}, N = e => {
					let {
						productOffer: t,
						pricePackage: r,
						productsCount: n,
						extraParams: a,
						overrideModalParams: o
					} = e;
					return async (e, i, l) => {
						let {
							gqlContext: m
						} = l;
						var p;
						let b = "";
						try {
							b = await e(k(t, r, n, a, v.I.Paypal))
						} catch (E) {
							return u.c.captureException(E), E.message && e(Object(f.paypalApiError)(E.message)), null
						}
						const h = c.a.redditUrl,
							j = {
								_o: h,
								o: b,
								pt: t.type,
								...o
							};
						try {
							const t = Object(d.a)(`${h}/framedModal/paypal-finish`, {
									...j,
									s: !0
								}),
								r = Object(d.a)(`${h}/framedModal/paypal-finish`, j),
								n = Object(s.a)(),
								a = await Object(y.h)(m(), n, b, t, r);
							if (a && a.ok) {
								const t = a.body.data.createEconPayment;
								if (null === (p = null == t ? void 0 : t.errors) || void 0 === p ? void 0 : p.length) return e(Object(f.paypalApiError)(P(t.errors))), null;
								const r = Object(g.m)(i());
								if (t.ok) {
									const {
										status: e
									} = t.payment;
									if (e === y.a.ActionRequired) {
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
						} catch (E) {
							u.c.captureException(E)
						}
						return e(Object(f.paypalApiError)(O())), null
					}
				}, I = (e, t) => async (r, n, a) => {
					let {
						gqlContext: o
					} = a;
					var i;
					try {
						const n = Object(s.a)(),
							a = await Object(y.c)(o(), n, e, t);
						if (a && a.ok) {
							const e = a.body.data.confirmEconPayment;
							if (null === (i = null == e ? void 0 : e.errors) || void 0 === i ? void 0 : i.length) return r(Object(f.paypalApiError)(P(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (c) {
						u.c.captureException(c)
					}
					return r(Object(f.paypalApiError)(O())), !1
				}, S = () => async (e, t, r) => {
					let {
						gqlContext: n
					} = r;
					var o;
					if (e(Object(f.savedCardsPending)()), Object(b.p)(t())) e(Object(f.savedCardsSuccess)([]));
					else try {
						const t = await Object(y.m)(n());
						if (t.error) throw e(Object(f.stripeApiError)(a.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						}))), new Error(t.error.type);
						const r = t.body;
						(null === (o = r.errors) || void 0 === o ? void 0 : o.length) && e(Object(f.stripeApiError)(r.errors[0].message));
						const {
							savedStripeCards: s
						} = r.data.identity, c = s.map(e => i()({
							...e,
							cardId: e.id
						}, "id"));
						e(Object(f.savedCardsSuccess)(c)), c[0] && e(Object(f.selectSavedCard)(c[0].cardId))
					} catch (s) {
						u.c.captureException(s), e(Object(f.savedCardsSuccess)([]))
					}
				}, A = e => async (t, r, n) => {
					let {
						gqlContext: a
					} = n;
					t(Object(f.deleteSavedCard)(e));
					try {
						const t = await Object(y.l)(a(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: n
							} = r.data.deleteEconPaymentMethod;
						if (n && n.length) throw new Error(P(n))
					} catch (o) {
						u.c.captureException(o)
					}
				}, M = (Object(l.a)(p.M), Object(l.a)(p.N), Object(l.a)(p.O), Object(l.a)(p.P)), L = e => {
					let {
						user: t
					} = e;
					return async e => {
						e(M({
							user: t
						}))
					}
				}, T = Object(l.a)(p.T)
		},
		"./src/reddit/actions/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return N
			})), r.d(t, "c", (function() {
				return A
			})), r.d(t, "b", (function() {
				return M
			})), r.d(t, "a", (function() {
				return L
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				s = r("./src/reddit/models/Gold/ProductOffer.ts"),
				c = r("./src/reddit/models/Toast/index.ts"),
				d = r("./src/reddit/endpoints/gold/productOfferPurchase/index.ts"),
				l = r("./src/lib/makeGqlRequest/index.ts"),
				u = r("./src/redditGQL/operations/GlobalProductOffers.json"),
				m = r("./src/redditGQL/operations/PremiumProductOfferSubscriptions.json"),
				p = r("./src/redditGQL/operations/ProductOffers.json");
			var f = r("./src/reddit/selectors/gold/productOffers.ts"),
				b = r("./src/reddit/actions/gold/constants.ts");
			const h = Object(a.a)(b.W),
				g = Object(a.a)(b.V),
				y = Object(a.a)(b.U),
				v = Object(a.a)(b.S),
				O = Object(a.a)(b.R),
				j = Object(a.a)(b.Q),
				P = Object(a.a)(b.Ab),
				k = Object(a.a)(b.yb),
				E = Object(a.a)(b.zb),
				w = Object(a.a)(b.Db),
				x = Object(a.a)(b.Cb),
				_ = Object(a.a)(b.Bb),
				C = e => async t => {
					t(Object(i.f)({
						kind: c.b.Error,
						duration: i.a,
						text: e
					}))
				}, N = (e, t) => async r => {
					e === s.c.Premium ? r(S()) : t && r(I(e, t))
				}, I = (e, t) => async (r, a, o) => {
					let {
						gqlContext: i
					} = o;
					const s = a();
					if (!Object(f.h)(s, {
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
							}))(i(), t, [e], !0);
							if (n.ok) {
								const e = n.body;
								if (e.errors && e.errors.length) throw new Error(e.errors[0].message);
								const a = e.data.subredditInfoById.productOffers ? e.data.subredditInfoById.productOffers.offers : [];
								return void(await r(g({
									productOffers: a || [],
									subredditId: t
								})))
							}
						} catch (c) {
							const e = n.fbt._("Something went wrong", null, {
								hk: "1IJNeH"
							});
							r(y(e)), r(C(e))
						}
					}
				}, S = () => async (e, t, r) => {
					let {
						gqlContext: a
					} = r;
					var i, c;
					const d = s.c.Premium;
					e(v());
					try {
						const t = await ((e, t) => Object(l.a)(e, {
							...u,
							variables: {
								productTypes: t
							}
						}))(a(), [d]);
						if (t.ok) {
							const r = t.body;
							if (null === (i = r.errors) || void 0 === i ? void 0 : i.length) throw new Error(r.errors[0].message);
							return void e(O({
								productOffers: null !== (c = r.data.globalProductOffers.offers) && void 0 !== c ? c : []
							}))
						}
					} catch (m) {
						const t = m.message ? m.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						o.c.captureMessage(t), e(j(t)), e(C(t))
					}
				}, A = () => async (e, t, r) => {
					let {
						gqlContext: a
					} = r;
					var i, s, c;
					e(P());
					try {
						const t = await (e => Object(l.a)(e, m))(a());
						if (t.error) throw new Error(t.error.type);
						if (t.ok) {
							const r = t.body;
							if (null === (i = r.errors) || void 0 === i ? void 0 : i.length) throw new Error(r.errors[0].message);
							return void e(E({
								subscriptions: null !== (c = null === (s = r.data.identity) || void 0 === s ? void 0 : s.econSubscriptions) && void 0 !== c ? c : []
							}))
						}
					} catch (d) {
						o.c.captureException(d);
						const t = d.message ? d.message : n.fbt._("Something went wrong", null, {
							hk: "1IJNeH"
						});
						e(k(t)), e(C(t))
					}
				}, M = e => async (t, r, a) => {
					let {
						gqlContext: o
					} = a;
					var i;
					t(w(e));
					try {
						const r = await Object(d.b)(o(), e);
						if (r.error) throw new Error(r.error.type);
						if (r.ok) {
							const n = r.body,
								{
									errors: a
								} = n.data.cancelEconRecurringPayment;
							if (null == a ? void 0 : a.length) throw new Error(a[0].message);
							t(_({
								orderId: e
							}))
						}
						return !0
					} catch (s) {
						const e = null !== (i = s.message) && void 0 !== i ? i : n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						});
						return t(x(e)), t(C(e)), !1
					}
				}, L = e => async t => {
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
				return c
			})), r.d(t, "paymentCompleted", (function() {
				return d
			})), r.d(t, "cardNameInput", (function() {
				return l
			})), r.d(t, "postalCodeInput", (function() {
				return u
			})), r.d(t, "cardNameEmpty", (function() {
				return m
			})), r.d(t, "postalCodeEmpty", (function() {
				return p
			})), r.d(t, "cardNumberChange", (function() {
				return f
			})), r.d(t, "cardExpiryChange", (function() {
				return b
			})), r.d(t, "cardCvcChange", (function() {
				return h
			})), r.d(t, "stripeTokenPending", (function() {
				return g
			})), r.d(t, "stripeTokenError", (function() {
				return y
			})), r.d(t, "stripeApiError", (function() {
				return v
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return O
			})), r.d(t, "paypalApiError", (function() {
				return j
			})), r.d(t, "toggleRememberCard", (function() {
				return P
			})), r.d(t, "selectSavedCard", (function() {
				return k
			})), r.d(t, "deleteSavedCard", (function() {
				return E
			})), r.d(t, "savedCardsPending", (function() {
				return w
			})), r.d(t, "savedCardsSuccess", (function() {
				return x
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				s = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const c = Object(o.a)(s.G),
				d = Object(o.a)(s.A),
				l = Object(o.a)(s.b),
				u = Object(o.a)(s.D),
				m = Object(o.a)(s.a),
				p = Object(o.a)(s.C),
				f = Object(o.a)(s.L),
				b = Object(o.a)(s.K),
				h = Object(o.a)(s.J),
				g = Object(o.a)(s.N),
				y = Object(o.a)(s.M),
				v = Object(o.a)(s.I),
				O = (e, t) => async (r, o) => {
					const s = o(),
						c = Object(i.h)(s),
						d = Object(i.l)(s),
						l = t.getElement(n.CardNumberElement);
					if (!l) return;
					const {
						token: u,
						error: f
					} = await e.createToken(l, {
						name: c,
						address_zip: d
					}), b = !d.trim();
					if (b) {
						const e = a.fbt._("Your ZIP code is incomplete", null, {
							hk: "4bttPr"
						});
						r(p({
							message: e
						}))
					}
					f && r(y(f));
					const h = !c.trim();
					if (h) {
						const e = a.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(m({
							message: e
						}))
					}
					return b || f || h ? void 0 : u
				}, j = Object(o.a)(s.B), P = Object(o.a)(s.O), k = Object(o.a)(s.H), E = Object(o.a)(s.g), w = Object(o.a)(s.E), x = Object(o.a)(s.F)
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "setPremiumPurchaseModalInfo", (function() {
				return g
			})), r.d(t, "clearPremiumPurchaseModalInfo", (function() {
				return y
			})), r.d(t, "openPremiumPurchaseModal", (function() {
				return v
			})), r.d(t, "closePremiumPurchaseModal", (function() {
				return O
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return j
			})), r.d(t, "paymentBlobCreated", (function() {
				return P
			})), r.d(t, "openWithBlob", (function() {
				return k
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
			const g = Object(o.a)(h.x),
				y = Object(o.a)(h.e),
				v = (e, t) => async r => {
					r(g(e)), r(Object(l.h)(u.a.ECON_PREMIUM_PURCHASE, t))
				}, O = () => async e => {
					e(Object(l.g)(u.a.ECON_PREMIUM_PURCHASE)), e(y())
				}, j = (e, t) => async (r, n, o) => {
					let {
						apiContext: i
					} = o;
					const l = Object(b.a)(n()),
						u = (null == l ? void 0 : l.pennies) || s.Eb,
						m = Object(f.c)(f.a.GoldPayment);
					r(Object(d.stripeTokenPending)());
					const h = await r(Object(d.validateAndCreateStripeToken)(e, t));
					if (h) try {
						const e = await Object(p.f)({
							context: i(),
							correlationId: m,
							pennies: u,
							token: h
						});
						if (e.error) {
							const t = Object(c.a)(e.error);
							r(Object(d.stripeApiError)(t))
						} else r(Object(d.paymentCompleted)({
							confirmed: !1
						}))
					} catch (g) {
						const e = Object(c.a)(g);
						r(Object(d.stripeApiError)(e))
					} else {
						const e = a.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						r(Object(d.stripeApiError)(e))
					}
				}, P = Object(o.a)(h.z), k = (e, t) => {
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
								const r = Object(c.a)(t.error);
								e(Object(d.paypalApiError)(r))
							} else e(P(t))
						} catch (f) {
							const t = Object(c.a)(f);
							e(Object(d.paypalApiError)(t))
						} else i.c.captureMessage("No Premium packages available on Premium purchase modal")
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return O
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "a", (function() {
				return k
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/env/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				s = r("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/models/Toast/index.ts"),
				l = r("./src/reddit/actions/post.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				m = r("./src/reddit/actions/economics/powerups/helpers.ts"),
				p = r("./src/redditGQL/operations/PurchaseCatalogProductOffers.json");
			var f = r("./src/reddit/selectors/gold/productOffers.ts"),
				b = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			Object(o.a)(b.m);
			const h = Object(o.a)(b.o),
				g = Object(o.a)(b.n),
				y = Object(o.a)(b.i),
				v = Object(o.a)(b.j),
				O = e => async (t, r, o) => {
					let {
						gqlContext: s
					} = o;
					const c = r(),
						d = Object(f.a)(c);
					if ((null == e ? void 0 : e.forceLoad) || !d) {
						t(h());
						try {
							const e = await (async e => {
								const t = await Object(u.a)(e, {
									...p
								});
								if (!t.ok) {
									const {
										errors: e
									} = t.body, r = Object(m.a)(e);
									throw new Error(r || "Unknown error in requestPurchaseCatalogProductOffers")
								}
								return t.body
							})(s());
							t(y(e.data.coinpacks.offers[0])), t(v(e.data.premium.offers[0]))
						} catch (l) {
							Object(a.b)() || console.error(l), i.c.captureException(l);
							const e = n.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(g(e))
						}
					}
				}, j = () => async e => e(O()), P = Object(o.a)(b.h), k = () => async (e, t, r) => {
					let {
						gqlContext: o
					} = r;
					var u, m;
					try {
						const t = await Object(s.a)(o());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (u = r.errors) || void 0 === u ? void 0 : u.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (m = r.awards) || void 0 === m ? void 0 : m.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(P({
								awards: r.awards
							})), e(Object(l.A)())
						}
					} catch (p) {
						Object(a.b)() || console.error(p), e(Object(c.f)({
							kind: d.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), i.c.captureException(p)
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
		"./src/reddit/components/Econ/Common/NewIcon/index.m.less": function(e, t, r) {
			e.exports = {
				new: "_2u3fkh0zbVoixCjyXrW0_e"
			}
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
				href: "https://www.redditinc.com/"
			}, c._("about", null, {
				hk: "3IO4c7"
			}))), a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://www.redditinc.com/careers"
			}, c._("careers", null, {
				hk: "2GATRU"
			}))), a.a.createElement("li", {
				className: i.a.linkItem
			}, a.a.createElement("a", {
				className: i.a.link,
				href: "https://www.redditinc.com/press"
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
				href: "https://www.reddit.com/premium"
			}, c._("reddit premium", null, {
				hk: "3vPbLO"
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
			}, c._("Reddit, Inc. © {year}. All rights reserved.", [c._param("year", (new Date).getFullYear().toString())], {
				hk: "4fplqp"
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
				i = r("./src/reddit/constants/headers.ts"),
				s = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = r("./src/reddit/endpoints/gold/purchase.ts");
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
				return Object(a.a)(Object(o.a)(r, [i.a]), {
					method: n.pb.POST,
					endpoint: m,
					data: l
				}).then(c.a)
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
				return Object(a.a)(Object(o.a)(t, [i.a]), {
					method: n.pb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: l
				}).then(c.a)
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
				return Object(a.a)(Object(o.a)(t, [i.a]), {
					method: n.pb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: u
				}).then(c.a)
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
				return Object(a.a)(Object(o.a)(t, [i.a]), {
					method: n.pb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: m
				}).then(c.a)
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
				const h = {
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
				return Object(a.a)(Object(o.a)(r, [i.a]), {
					method: n.pb.POST,
					endpoint: `${r.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: h
				}).then(c.a)
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
				return Object(a.a)(Object(o.a)(r, [i.a]), {
					method: n.pb.POST,
					endpoint: `${r.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: p
				}).then(c.a)
			}
		},
		"./src/reddit/endpoints/gold/productOfferPurchase/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return y
			})), r.d(t, "g", (function() {
				return v
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "j", (function() {
				return j
			})), r.d(t, "i", (function() {
				return P
			})), r.d(t, "k", (function() {
				return k
			})), r.d(t, "h", (function() {
				return E
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "e", (function() {
				return x
			})), r.d(t, "d", (function() {
				return _
			})), r.d(t, "b", (function() {
				return C
			})), r.d(t, "m", (function() {
				return N
			})), r.d(t, "l", (function() {
				return I
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				a = r.n(n),
				o = r("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				i = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				s = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				c = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = r("./src/redditGQL/operations/CreateEconOrder.json"),
				l = r("./src/redditGQL/operations/CreatePaymentIntent.json"),
				u = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				m = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				p = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				f = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				b = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				h = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				g = r("./src/lib/makeGqlRequest/index.ts");
			const y = (e, t, r, n, o, i, s) => {
					const c = new a.a(n.price).multipliedBy(o).toFixed();
					return Object(g.a)(e, {
						...d,
						variables: {
							input: {
								nonce: t,
								productId: r.id,
								productVersion: r.version,
								pricePackageId: n.id,
								currency: n.currency,
								price: c,
								productsCount: o.toString(),
								...i,
								paymentProvider: s
							}
						}
					})
				},
				v = (e, t) => Object(g.a)(e, {
					...l,
					variables: {
						input: t
					}
				});
			var O;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(O || (O = {}));
			const j = (e, t, r, n) => Object(g.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				P = (e, t, r, n) => Object(g.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				k = (e, t, r, n) => Object(g.a)(e, {
					...f,
					variables: {
						nonce: t,
						orderId: r,
						cardId: n
					}
				}),
				E = (e, t, r, n, a) => Object(g.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: r,
						successUrl: n,
						cancelUrl: a
					}
				}),
				w = (e, t, r, n) => Object(g.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: r,
						token: n
					}
				}),
				x = (e, t, r, n) => Object(g.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: r,
						cardId: n
					}
				}),
				_ = (e, t, r, n, a) => Object(g.a)(e, {
					...s,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
						saveCard: a
					}
				}),
				C = (e, t) => Object(g.a)(e, {
					...o,
					variables: {
						orderId: t
					}
				}),
				N = e => Object(g.a)(e, {
					...h,
					variables: {}
				}),
				I = (e, t) => Object(g.a)(e, {
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
			r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return c
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

			function c(e) {
				const t = new n.BigNumber(e),
					r = new n.BigNumber("1e18");
				return t.dividedBy(r).toString()
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
						const t = Object(a.h)(e, r);
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
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, a, o, i;
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
				}(i || (i = {}))
		},
		"./src/reddit/pages/Premium/BenefitsSection/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return a
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
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
					key: "premium-lounge",
					telemetryTag: "premium_subreddits"
				}, {
					key: "premium-app-icons",
					isNew: !0,
					asterisk: !0,
					telemetryTag: "app_icons"
				}],
				o = {
					key: "premium-awards",
					telemetryTag: "premium_awards"
				},
				i = {
					key: "premium-monthly-coins",
					telemetryTag: "monthly_coins"
				},
				s = {
					key: "premium-more",
					telemetryTag: "more_benefits"
				},
				c = {
					key: "premium-bonus",
					asterisk: !0,
					telemetryTag: "coin_bonus"
				},
				d = (e, t, r) => {
					const n = [...e];
					return r || (n.push(i, o), t && n.push(c)), n.length % 2 == 1 && n.push(s), n
				},
				l = {
					"premium-avatars": () => n.fbt._("Exclusive Avatar Gear", null, {
						hk: "1f1QJb"
					}),
					"premium-app-icons": () => n.fbt._("Custom App Icons", null, {
						hk: "2uGpiC"
					}),
					"premium-ad-free": () => n.fbt._("Ad-free Browsing", null, {
						hk: "2rgG59"
					}),
					"premium-monthly-coins": e => {
						let {
							periodicalCoins: t
						} = e;
						return n.fbt._("{amount}Monthly Coins", [n.fbt._param("amount", t ? t + " " : "")], {
							hk: "3rUDgA"
						})
					},
					"premium-lounge": () => n.fbt._("Members Lounge", null, {
						hk: "3iqx0z"
					}),
					"premium-awards": () => n.fbt._("Premium Awards", null, {
						hk: "3cn0Pf"
					}),
					"premium-more": () => n.fbt._("More to come...", null, {
						hk: "oz7E8"
					}),
					"premium-bonus": e => {
						let {
							bonusCoins: t
						} = e;
						return n.fbt._("{amount} Coin Bonus!", [n.fbt._param("amount", t)], {
							hk: "2W5D7B"
						})
					}
				},
				u = {
					"premium-avatars": () => n.fbt._("Outfit your avatar with the best gear and accessories", null, {
						hk: "2HjLMS"
					}),
					"premium-app-icons": () => n.fbt._("Change your app icon to something more your style", null, {
						hk: "1WobLA"
					}),
					"premium-ad-free": () => n.fbt._("Enjoy redditing without interruptions from ads", null, {
						hk: "2aDI9B"
					}),
					"premium-monthly-coins": e => {
						let {
							periodicalCoins: t
						} = e;
						return n.fbt._("Get {amount} coins a month and make it rain awards", [n.fbt._param("amount", t)], {
							hk: "228nfD"
						})
					},
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
				return C
			}));
			var n = r("./src/lib/classNames/index.ts"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				i = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/reddit/components/Econ/Common/BenefitBanner/index.m.less"),
				c = r.n(s);
			const d = e => {
				let {
					className: t,
					onClick: r,
					benefit: a
				} = e;
				return o.a.createElement("div", {
					className: Object(n.a)(t, c.a.container),
					onClick: () => null == r ? void 0 : r(a),
					"data-testid": "benefit-banner"
				}, o.a.createElement("div", {
					className: c.a.icon,
					style: {
						backgroundImage: `url('${a.iconUrl}')`
					}
				}), o.a.createElement("div", null, a.title && o.a.createElement("h3", {
					className: c.a.title,
					"data-testid": "benefit-banner-title"
				}, a.title), a.description && o.a.createElement("p", {
					className: c.a.description
				}, a.description)))
			};
			var l = r("./src/reddit/components/Econ/Common/NewIcon/index.m.less"),
				u = r.n(l);
			const {
				fbt: m
			} = r("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				let {
					className: t
				} = e;
				return o.a.createElement("span", {
					className: Object(n.a)(u.a.new, t)
				}, m._("NEW", null, {
					hk: "2P5bsM"
				}))
			};
			var f = r("./src/reddit/components/Econ/Common/BenefitTile/index.m.less"),
				b = r.n(f);
			const h = e => {
				let {
					className: t,
					onClick: r,
					benefit: a
				} = e;
				return o.a.createElement("div", {
					className: Object(n.a)(t, b.a.container),
					onClick: () => null == r ? void 0 : r(a),
					"data-testid": "benefit-tile"
				}, a.isNew && o.a.createElement(p, {
					className: b.a.new
				}), o.a.createElement("div", {
					className: b.a.icon,
					style: {
						backgroundImage: `url('${a.iconUrl}')`
					}
				}), a.title && o.a.createElement("h3", {
					className: b.a.title,
					"data-testid": "benefit-title"
				}, a.title), a.description && o.a.createElement("p", {
					className: b.a.description
				}, a.description))
			};
			var g = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				y = r("./src/reddit/helpers/trackers/premium.ts"),
				v = r("./src/reddit/hooks/useTracking.ts"),
				O = r("./src/reddit/pages/Premium/BenefitsSection/constants.ts"),
				j = r("./src/config.ts");
			const P = (e, t) => {
				let {
					key: r,
					asterisk: n,
					isNew: a,
					telemetryTag: o
				} = e;
				return {
					telemetryTag: o,
					isNew: a,
					key: r,
					description: O.c[r](t),
					iconUrl: `${j.a.assetPath}/img/gold/premium-marketing/benefits-icons/${r}.png`,
					title: `${O.d[r](t)}${n?"*":""}`
				}
			};
			var k = r("./src/reddit/selectors/experiments/econ/index.ts"),
				E = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				w = r("./src/reddit/selectors/user.ts"),
				x = r("./src/reddit/pages/Premium/BenefitsSection/index.m.less"),
				_ = r.n(x);
			const C = e => {
				let {
					className: t,
					isCompactMode: r = !1
				} = e;
				const a = Object(i.e)(w.fb),
					s = Object(v.a)(),
					c = Object(i.e)(E.j),
					l = !!c,
					u = Object(i.e)(e => !r && l && Object(k.l)(e)),
					m = Object(i.e)(E.g),
					p = Object(i.e)(E.i),
					f = Object(i.e)(k.d);
				if (!(null == p ? void 0 : p.length)) return o.a.createElement("div", null, o.a.createElement(g.a, {
					sizePx: 80
				}));
				const b = {
						periodicalCoins: m,
						bonusCoins: c
					},
					j = Object(O.b)(O.e, l && !u, f).map(e => P(e, b)),
					x = P(O.a, b),
					C = e => {
						s(Object(y.b)(e.telemetryTag))
					};
				return o.a.createElement("div", {
					className: Object(n.a)(_.a.container, t, {
						[_.a.isNightMode]: a
					})
				}, u && o.a.createElement(d, {
					className: _.a.signupBonusBanner,
					benefit: x,
					onClick: C
				}), o.a.createElement("div", {
					className: _.a.benefitsContainer
				}, j.map(e => o.a.createElement(h, {
					className: _.a.benefit,
					benefit: e,
					key: e.key,
					onClick: C
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
				g = r("./src/reddit/pages/Premium/PremiumButtons/index.m.less"),
				y = r.n(g);
			t.a = e => {
				let {
					className: t,
					isHeroStyles: r,
					onClickPackage: a,
					onClickManagePremium: g
				} = e;
				var v, O;
				const j = Object(u.b)(),
					P = Object(d.e)(b.i),
					k = Object(d.e)(f.d);
				if (Object(d.e)(h.y)) return g ? o.a.createElement("div", {
					className: Object(i.a)(y.a.buttons, t, {
						[y.a.hero]: !!r
					})
				}, o.a.createElement(l.k, {
					className: y.a.button,
					onClick: g
				}, n.fbt._("Manage Premium", null, {
					hk: "13LAq1"
				}))) : null;
				const E = P.find(e => e.frequency === m.c.Monthly),
					w = P.find(e => e.frequency === m.c.Yearly);
				if (!E || !w) return null;
				const x = null === (v = Object(f.i)(k, p.b.Month)) || void 0 === v ? void 0 : v[0],
					_ = null === (O = Object(f.i)(k, p.b.Year)) || void 0 === O ? void 0 : O[0];
				if (!x || !_) return null;
				const C = {
						price: x.price,
						packageId: E.mobileId,
						currency: x.currency
					},
					N = {
						price: _.price,
						packageId: w.mobileId,
						bonusPct: w.bonusPct,
						currency: _.currency
					},
					I = Object(c.b)(C.price, {
						type: s.b.Real,
						currency: C.currency,
						locale: j
					}),
					S = Object(c.b)(N.price, {
						type: s.b.Real,
						currency: N.currency,
						locale: j
					});
				return o.a.createElement("div", {
					className: Object(i.a)(y.a.buttons, t, {
						[y.a.hero]: !!r
					})
				}, o.a.createElement(l.t, {
					className: y.a.premiumMonthlyButton,
					onClick: () => {
						a(C.packageId, p.b.Month)
					},
					priority: l.c.Secondary
				}, C && n.fbt._("{monthly price}/Month", [n.fbt._param("monthly price", I)], {
					hk: "3xMnhy"
				})), o.a.createElement(l.k, {
					className: y.a.premiumAnnualButton,
					onClick: () => a(N.packageId, p.b.Year)
				}, !!N && n.fbt._("{annual price}/Year", [n.fbt._param("annual price", S)], {
					hk: "4ohAoM"
				}), !!N.bonusPct && o.a.createElement("span", {
					className: y.a.premiumDiscountBadge
				}, n.fbt._("Save {annual-month-discount}", [n.fbt._param("annual-month-discount", `${N.bonusPct}%`)], {
					hk: "TgjzN"
				}))), o.a.createElement("div", {
					className: y.a.renewalSubtext
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
			r.r(t), r.d(t, "getPaidPremiumSubtext", (function() {
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
				g = r("./src/reddit/helpers/trackers/screenview.ts"),
				y = r("./src/telemetry/index.ts"),
				v = r("./src/telemetry/models/Timer.ts"),
				O = r("./src/reddit/pages/Premium/index.m.less"),
				j = r.n(O),
				P = r("./src/reddit/actions/login.ts"),
				k = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				E = r("./src/reddit/actions/gold/productOffers.ts"),
				w = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				x = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				_ = r("./src/reddit/components/MarketingPageFooter/index.tsx"),
				C = r("./src/reddit/models/Gold/ProductOffer.ts"),
				N = r("./src/reddit/selectors/experiments/econ/index.ts"),
				I = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				S = r("./src/reddit/selectors/user.ts"),
				A = r("./src/reddit/icons/svgs/PremiumLogo/index.tsx"),
				M = r("./src/reddit/controls/Button/index.tsx"),
				L = r("./src/reddit/pages/Premium/BenefitsSection/index.tsx"),
				T = r("./src/reddit/pages/Premium/PremiumButtons/index.tsx");
			const B = e => e ? a.fbt._("* Custom app icons are only available through a paid Reddit Premium subscription.", null, {
					hk: "3vnFbg"
				}) : a.fbt._("* Custom app icons and welcome gifts are only available through a paid Reddit Premium subscription.", null, {
					hk: "22nSh4"
				}),
				R = Object(d.c)({
					goldExpiration: e => e.user.account && e.user.account.goldExpiration || 0,
					isCoinsSunsetEnabled: N.d,
					isGold: S.x,
					isPremiumSubscriber: S.y,
					isLoggedIn: S.S,
					premiumPackages: I.i,
					purchaseCatalogPending: I.l
				}),
				G = Object(s.b)(R, (e, t) => ({
					onManagePremium: () => e(Object(c.b)("/settings/premium")),
					onOpenLoginModal: () => e(Object(P.openLoginModal)()),
					onPurchasePremium: (t, r) => e(Object(w.openWithBlob)({
						correlationId: r,
						packageId: t
					})),
					onSetPremiumRenewalInterval: t => e(Object(k.h)({
						renewInterval: t
					})),
					requestPurchaseCatalog: t => e(Object(x.b)({
						correlationId: t
					})),
					premiumProductOffersRequested: () => e(Object(E.d)(C.c.Premium))
				}));
			class U extends i.a.Component {
				constructor() {
					super(...arguments), this.correlationId = Object(f.d)(f.a.GoldPayment, !1), this.onClickPrice = (e, t) => {
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
					const o = l.Tb.PREMIUM;
					y.c.has(o) && (a(Object(g.m)(v.TimerType.InApp, y.c.end(o))), a(Object(g.l)())), Object(m.a)()
				}
				render() {
					const {
						className: e,
						isCoinsSunsetEnabled: t
					} = this.props;
					return i.a.createElement("div", {
						className: e
					}, this.renderHero(), i.a.createElement("div", {
						className: j.a.body
					}, i.a.createElement("h2", {
						className: j.a.title
					}, a.fbt._("Join Reddit Premium Today", null, {
						hk: "2sm8Pz"
					})), i.a.createElement(L.a, {
						className: j.a.benefits
					}), i.a.createElement(T.a, {
						onClickPackage: this.onClickPrice,
						onClickManagePremium: this.onClickManagePremium
					}), i.a.createElement("div", {
						className: j.a.paidPremiumSubtext
					}, B(t)), this.renderFAQSection()), i.a.createElement(_.a, {
						className: j.a.footer
					}))
				}
				renderHero() {
					const {
						goldExpiration: e,
						isCoinsSunsetEnabled: t,
						isGold: r,
						isPremiumSubscriber: o
					} = this.props;
					return i.a.createElement("div", {
						className: j.a.hero,
						style: {
							backgroundImage: `linear-gradient(\n          to right,\n          rgba(0, 0, 0, 0.6) 0%,\n          rgba(0, 0, 0, 0) 50%\n        ), url("${n.a.assetPath}/img/gold/premium-marketing/premiumHero.jpg")`
						}
					}, i.a.createElement("div", {
						className: j.a.heroInner
					}, i.a.createElement("h1", {
						className: j.a.heroTitle
					}, i.a.createElement(A.a, {
						className: j.a.heroLogo
					})), i.a.createElement("p", {
						className: j.a.heroDescription
					}, t ? a.fbt._("Help support Reddit and get VIP treatment and exclusive access.", null, {
						hk: "4FY0No"
					}) : a.fbt._("Help support Reddit and get VIP treatment, exclusive access, and monthly coins.", null, {
						hk: "19iqSJ"
					})), i.a.createElement(T.a, {
						className: j.a.heroButtons,
						isHeroStyles: !0,
						onClickPackage: this.onClickPrice,
						onClickManagePremium: this.onClickManagePremium
					}), !o && r && i.a.createElement("div", {
						className: j.a.heroPremiumExpiration
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
					return i.a.createElement(M.t, {
						className: j.a.faqButton,
						href: "https://reddit.zendesk.com/hc/en-us/articles/360043034412-What-is-a-Reddit-premium-membership-",
						kind: M.b.ExternalLink,
						priority: M.c.Plain,
						target: "_blank"
					}, a.fbt._("Visit the Reddit Premium FAQs", null, {
						hk: "22gM46"
					}))
				}
				componentWillUnmount() {
					Object(f.b)(f.a.GoldPayment)
				}
			}
			t.default = G(Object(p.c)(U))
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return c
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
				return h
			})), r.d(t, "e", (function() {
				return g
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/makeProductOfferKey/index.ts"),
				o = r("./src/reddit/models/Gold/ProductOffer.ts"),
				i = r("./src/reddit/models/Payments/index.ts"),
				s = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = e => e.subreddits.api.productOffers.pending,
				d = (e, t) => {
					let {
						subredditId: r,
						type: n
					} = t;
					var o, i, s;
					return r ? e.subreddits.productOffers[Object(a.a)(n, r)] : null === (s = null === (i = null === (o = e.features) || void 0 === o ? void 0 : o.goldPurchase) || void 0 === i ? void 0 : i.productOffers) || void 0 === s ? void 0 : s[Object(a.a)(n)]
				},
				l = e => {
					const t = d(e, {
						type: o.c.Coinpack
					});
					return null == t ? void 0 : t[0]
				},
				u = e => {
					const t = d(e, {
						type: o.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				m = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === i.b.PayPal || e[0] === i.b.Stripe)(e.requiredPaymentProviders)) : null,
				p = Object(n.a)(u, s.q, (e, t) => m(e, t) || null),
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
				h = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				g = Object(n.a)(h, e => Boolean(null == e ? void 0 : e.isCanceled))
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
			e.exports = JSON.parse('{"id":"b1f066bd7137"}')
		},
		"./src/redditGQL/operations/CreatePaymentIntent.json": function(e) {
			e.exports = JSON.parse('{"id":"e7836733c043"}')
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
		"./src/redditGQL/operations/GlobalProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"5b1dd85fe475"}')
		},
		"./src/redditGQL/operations/PremiumProductOfferSubscriptions.json": function(e) {
			e.exports = JSON.parse('{"id":"d0a53057e3e8"}')
		},
		"./src/redditGQL/operations/ProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"ddb1f9f5717c"}')
		},
		"./src/redditGQL/operations/PurchaseCatalogProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"098518521d5b"}')
		},
		"./src/redditGQL/operations/UserSavedStripeCards.json": function(e) {
			e.exports = JSON.parse('{"id":"d29c51cfbfe6"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Premium~reddit-components-Econ-Prediction-PremiumModal.730813fa3b502f901416.js.map