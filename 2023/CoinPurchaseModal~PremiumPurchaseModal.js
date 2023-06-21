// https://www.redditstatic.com/desktop2x/CoinPurchaseModal~PremiumPurchaseModal.f50c2aa89f8d57201f24.js
// Retrieved at 6/21/2023, 3:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CoinPurchaseModal~PremiumPurchaseModal"], {
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
					f = function(e, t, r) {
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
					b = function(e) {
						if (null === e || m(t = e) && "function" == typeof t.elements && "function" == typeof t.createToken && "function" == typeof t.createPaymentMethod && "function" == typeof t.confirmCardPayment) return e;
						var t;
						throw new Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
					},
					y = function(e) {
						if (function(e) {
								return m(e) && "function" == typeof e.then
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
						s = t.useRef(!0),
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
					var b = p(n);
					return t.useEffect((function() {
						if (d.elements) {
							var e = f(n, b, ["clientSecret", "fonts"]);
							e && d.elements.update(e)
						}
					}), [n, b, d.elements]), t.useEffect((function() {
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
					C = function(e) {
						return (0, e.children)(v("mounts <ElementsConsumer>"))
					};
				C.propTypes = {
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
					j = function() {},
					x = function(e, r) {
						var n, a = "".concat((n = e).charAt(0).toUpperCase() + n.slice(1), "Element"),
							s = r ? function(e) {
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
									s = r.options,
									c = void 0 === s ? {} : s,
									i = r.onBlur,
									d = void 0 === i ? j : i,
									l = r.onFocus,
									u = void 0 === l ? j : l,
									m = r.onReady,
									b = void 0 === m ? j : m,
									y = r.onChange,
									h = void 0 === y ? j : y,
									g = r.onEscape,
									C = void 0 === g ? j : g,
									x = r.onClick,
									E = void 0 === x ? j : x,
									P = v("mounts <".concat(a, ">")).elements,
									_ = t.useRef(null),
									w = t.useRef(null),
									S = O(b),
									N = O(d),
									k = O(u),
									I = O(E),
									T = O(h),
									A = O(C);
								t.useLayoutEffect((function() {
									if (null == _.current && P && null != w.current) {
										var t = P.create(e, c);
										_.current = t, t.mount(w.current), t.on("ready", (function() {
											return S(t)
										})), t.on("change", T), t.on("blur", N), t.on("focus", k), t.on("escape", A), t.on("click", I)
									}
								}));
								var R = p(c);
								return t.useEffect((function() {
									if (_.current) {
										var e = f(c, R, ["paymentRequest"]);
										e && _.current.update(e)
									}
								}), [c, R]), t.useLayoutEffect((function() {
									return function() {
										_.current && _.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: o,
									ref: w
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
					P = x("auBankAccount", E),
					_ = x("card", E),
					w = x("cardNumber", E),
					S = x("cardExpiry", E),
					N = x("cardCvc", E),
					k = x("fpxBank", E),
					I = x("iban", E),
					T = x("idealBank", E),
					A = x("p24Bank", E),
					R = x("epsBank", E),
					M = x("payment", E),
					L = x("paymentRequestButton", E),
					B = x("linkAuthentication", E),
					D = x("shippingAddress", E),
					F = x("afterpayClearpayMessage", E);
				e.AfterpayClearpayMessageElement = F, e.AuBankAccountElement = P, e.CardCvcElement = N, e.CardElement = _, e.CardExpiryElement = S, e.CardNumberElement = w, e.Elements = g, e.ElementsConsumer = C, e.EpsBankElement = R, e.FpxBankElement = k, e.IbanElement = I, e.IdealBankElement = T, e.LinkAuthenticationElement = B, e.P24BankElement = A, e.PaymentElement = M, e.PaymentRequestButtonElement = L, e.ShippingAddressElement = D, e.useElements = function() {
					return v("calls useElements()").elements
				}, e.useStripe = function() {
					return v("calls useStripe()").stripe
				}, Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}(t, r("./node_modules/react/index.js"))
		},
		"./node_modules/@stripe/stripe-js/dist/stripe.esm.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
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
			}
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
			const d = function(e) {
					let {
						locale: t = n.DEFAULT_LOCALE,
						pretty: r,
						formatOptions: a
					} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const o = Number(e);
					return Object(i.c)() ? r ? Object(s.b)(o) : new Intl.NumberFormat(t, a).format(o) : u(o, r, t)
				},
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: s,
						formatOptions: d,
						displayConversion: l,
						forceDecimals: f,
						currency: b = t.currency || (t.type ? m(t.type) : o.c),
						type: y = t.type || (t.currency ? p(t.currency) : o.b.Real)
					} = t, h = Number(e), g = String(e);
					switch (y) {
						case o.b.Reddit: {
							const e = o.e[b],
								t = e ? e() : b;
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(h) + " " + t : u(h, s, r, t)
						}
						case o.b.Crypto: {
							if (s) {
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
							}).format(e) : u(e, s, r, b)
						}
						case o.b.Real:
						default: {
							const e = Number(Object(a.a)(g, f));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								notation: s ? "compact" : "standard",
								...d
							}).format(e) : u(e, s, r, b)
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
			r.d(t, "a", (function() {
				return x
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "i", (function() {
				return S
			})), r.d(t, "g", (function() {
				return N
			})), r.d(t, "f", (function() {
				return k
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "b", (function() {
				return T
			})), r.d(t, "e", (function() {
				return R
			})), r.d(t, "h", (function() {
				return M
			}));
			var n, a = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/lodash/omit.js"),
				s = r.n(o),
				c = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				i = r("./src/config.ts"),
				d = (r("./src/reddit/actions/toaster.ts"), r("./src/lib/addQueryParams/index.ts")),
				l = r("./src/lib/makeActionCreator/index.ts"),
				u = r("./src/lib/sentry/index.ts"),
				p = r("./src/reddit/models/Gold/ProductOffer.ts"),
				m = (r("./src/reddit/models/Toast/index.ts"), r("./src/reddit/actions/gold/constants.ts")),
				f = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				b = r("./src/reddit/selectors/experiments/econ/index.ts"),
				y = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				g = r("./src/reddit/endpoints/gold/productOfferPurchase/index.ts"),
				v = r("./src/redditGQL/types.ts");
			! function(e) {
				e.GenericError = "GenericPurchaseError", e.AccountAgeRestriction = "AccountAgeRestrictionError", e.RateLimiting = "RateLimitingCheckError"
			}(n || (n = {}));
			const C = () => a.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				O = (e, t) => !!(null == e ? void 0 : e.find(e => e.code === t)),
				j = e => e.map(e => e.message).join(" : "),
				x = (e, t, r, n, o) => async (s, i, d) => {
					let {
						gqlContext: l
					} = d;
					const u = Object(c.a)(),
						p = await Object(g.f)(l(), u, e, t, r, n, o),
						m = p.body,
						{
							errors: f,
							order: b
						} = m.data.createEconOrder;
					if (f && f.length && E(f), p.ok && b) return b.id;
					throw new Error(a.fbt._("Sorry, unable to complete purchase. Your account was not charged.", null, {
						hk: "32LzSN"
					}))
				}, E = e => {
					if (O(e, n.GenericError)) throw new Error(a.fbt._("Sorry, unable to complete purchase. Your account was not charged.", null, {
						hk: "1uV3pC"
					}));
					if (O(e, n.AccountAgeRestriction)) throw new Error(a.fbt._("Your account isn’t old enough to complete this type of purchase yet.", null, {
						hk: "3TMbsU"
					}));
					if (O(e, n.RateLimiting)) throw new Error(a.fbt._("You’ve reached your purchase limit. Try again later", null, {
						hk: "1TwpTd"
					}));
					throw new Error(a.fbt._("Sorry, unable to complete purchase. Your account was not charged.", null, {
						hk: "32LzSN"
					}))
				}, P = (e, t) => {
					var r, n;
					(null === (n = null === (r = e.payment_intent) || void 0 === r ? void 0 : r.last_payment_error) || void 0 === n ? void 0 : n.message) ? t(Object(f.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(f.stripeApiError)(e.message)) : t(_)
				}, _ = Object(f.stripeApiError)(a.fbt._("Something went wrong during payment creation", null, {
					hk: "2LgB2E"
				})), w = e => !!e && e.hasOwnProperty("success"), S = e => {
					let {
						stripe: t,
						stripeElements: r,
						productOffer: n,
						pricePackage: a,
						productsCount: o,
						extraParams: s
					} = e;
					return async (e, i, d) => {
						let {
							gqlContext: l
						} = d;
						var m, h;
						const C = i();
						let O, E, w = "";
						try {
							w = await e(x(n, a, o, s, v.J.Stripe))
						} catch (N) {
							return u.c.captureException(N), void(N.message && e(Object(f.stripeApiError)(N.message)))
						}
						e(Object(f.stripeTokenPending)());
						const S = Object(y.z)(C);
						if (S || (O = await e(Object(f.validateAndCreateStripeToken)(t, r)), E = Object(y.w)(C), O))
							if (n.type === p.c.Coinpack && Object(b.p)(C)) try {
								const r = await Object(g.g)(l(), {
									orderId: w,
									provider: v.J.Stripe
								});
								if (!(null == r ? void 0 : r.ok)) return void e(_);
								const {
									body: n
								} = r;
								if (!("data" in n)) return void e(_);
								const {
									errors: a,
									ok: o,
									paymentIntent: s
								} = null !== (m = n.data.createPaymentIntent) && void 0 !== m ? m : {};
								if (null == a ? void 0 : a.length) return void e(Object(f.stripeApiError)(j(a)));
								if (!o || !s) return void e(_);
								const {
									error: c
								} = await t.confirmCardPayment(s.id, {
									payment_method: {
										card: {
											token: O.id
										}
									}
								});
								return c ? P(c, e) : {
									success: !0
								}
							} catch (N) {
								u.c.captureException(N), e(_)
							} else try {
								const r = Object(c.a)(),
									n = S || E ? O && E ? Object(g.i)(l(), r, w, O.id) : S ? Object(g.k)(l(), r, w, S) : null : Object(g.j)(l(), r, w, O.id),
									a = await n;
								if (!(null == a ? void 0 : a.ok)) return void e(_);
								const o = a.body.data.createEconPayment;
								if (null === (h = null == o ? void 0 : o.errors) || void 0 === h ? void 0 : h.length) return void e(Object(f.stripeApiError)(j(o.errors)));
								const {
									ok: s,
									payment: i,
									providerExecution: {
										paymentIntentClientSecret: d
									}
								} = o;
								if (s && i.status === g.a.ActionRequired) {
									const r = await t.confirmCardPayment(d),
										{
											error: n
										} = r;
									if (n) return P(n, e);
									let a;
									if (!(a = S ? await Object(g.e)(l(), Object(c.a)(), i.id, S) : await Object(g.d)(l(), Object(c.a)(), i.id, O.id, E)).ok) return void e(_);
									const o = a.body;
									if (!o.data.confirmEconPayment.ok || o.data.confirmEconPayment.payment.status !== g.a.Paid) return void e(_)
								} else if (s && i.status !== g.a.Paid) return void e(_);
								return {
									success: !0
								}
							} catch (N) {
								u.c.captureException(N), e(_)
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
					return async (e, s, l) => {
						let {
							gqlContext: p
						} = l;
						var m;
						let b = "";
						try {
							b = await e(x(t, r, n, a, v.J.Paypal))
						} catch (E) {
							return u.c.captureException(E), E.message && e(Object(f.paypalApiError)(E.message)), null
						}
						const y = i.a.redditUrl,
							O = {
								_o: y,
								o: b,
								pt: t.type,
								...o
							};
						try {
							const t = Object(d.a)(`${y}/framedModal/paypal-finish`, {
									...O,
									s: !0
								}),
								r = Object(d.a)(`${y}/framedModal/paypal-finish`, O),
								n = Object(c.a)(),
								a = await Object(g.h)(p(), n, b, t, r);
							if (a && a.ok) {
								const t = a.body.data.createEconPayment;
								if (null === (m = null == t ? void 0 : t.errors) || void 0 === m ? void 0 : m.length) return e(Object(f.paypalApiError)(j(t.errors))), null;
								const r = Object(h.m)(s());
								if (t.ok) {
									const {
										status: e
									} = t.payment;
									if (e === g.a.ActionRequired) {
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
						return e(Object(f.paypalApiError)(C())), null
					}
				}, k = (e, t) => async (r, n, a) => {
					let {
						gqlContext: o
					} = a;
					var s;
					try {
						const n = Object(c.a)(),
							a = await Object(g.c)(o(), n, e, t);
						if (a && a.ok) {
							const e = a.body.data.confirmEconPayment;
							if (null === (s = null == e ? void 0 : e.errors) || void 0 === s ? void 0 : s.length) return r(Object(f.paypalApiError)(j(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (i) {
						u.c.captureException(i)
					}
					return r(Object(f.paypalApiError)(C())), !1
				}, I = () => async (e, t, r) => {
					let {
						gqlContext: n
					} = r;
					var o;
					if (e(Object(f.savedCardsPending)()), Object(b.p)(t())) e(Object(f.savedCardsSuccess)([]));
					else try {
						const t = await Object(g.m)(n());
						if (t.error) throw e(Object(f.stripeApiError)(a.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						}))), new Error(t.error.type);
						const r = t.body;
						(null === (o = r.errors) || void 0 === o ? void 0 : o.length) && e(Object(f.stripeApiError)(r.errors[0].message));
						const {
							savedStripeCards: c
						} = r.data.identity, i = c.map(e => s()({
							...e,
							cardId: e.id
						}, "id"));
						e(Object(f.savedCardsSuccess)(i)), i[0] && e(Object(f.selectSavedCard)(i[0].cardId))
					} catch (c) {
						u.c.captureException(c), e(Object(f.savedCardsSuccess)([]))
					}
				}, T = e => async (t, r, n) => {
					let {
						gqlContext: a
					} = n;
					t(Object(f.deleteSavedCard)(e));
					try {
						const t = await Object(g.l)(a(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: n
							} = r.data.deleteEconPaymentMethod;
						if (n && n.length) throw new Error(j(n))
					} catch (o) {
						u.c.captureException(o)
					}
				}, A = (Object(l.a)(m.M), Object(l.a)(m.N), Object(l.a)(m.O), Object(l.a)(m.P)), R = e => {
					let {
						user: t
					} = e;
					return async e => {
						e(A({
							user: t
						}))
					}
				}, M = Object(l.a)(m.T)
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
				return f
			})), r.d(t, "cardExpiryChange", (function() {
				return b
			})), r.d(t, "cardCvcChange", (function() {
				return y
			})), r.d(t, "stripeTokenPending", (function() {
				return h
			})), r.d(t, "stripeTokenError", (function() {
				return g
			})), r.d(t, "stripeApiError", (function() {
				return v
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return C
			})), r.d(t, "paypalApiError", (function() {
				return O
			})), r.d(t, "toggleRememberCard", (function() {
				return j
			})), r.d(t, "selectSavedCard", (function() {
				return x
			})), r.d(t, "deleteSavedCard", (function() {
				return E
			})), r.d(t, "savedCardsPending", (function() {
				return P
			})), r.d(t, "savedCardsSuccess", (function() {
				return _
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const i = Object(o.a)(c.G),
				d = Object(o.a)(c.A),
				l = Object(o.a)(c.b),
				u = Object(o.a)(c.D),
				p = Object(o.a)(c.a),
				m = Object(o.a)(c.C),
				f = Object(o.a)(c.L),
				b = Object(o.a)(c.K),
				y = Object(o.a)(c.J),
				h = Object(o.a)(c.N),
				g = Object(o.a)(c.M),
				v = Object(o.a)(c.I),
				C = (e, t) => async (r, o) => {
					const c = o(),
						i = Object(s.h)(c),
						d = Object(s.l)(c),
						l = t.getElement(n.CardNumberElement);
					if (!l) return;
					const {
						token: u,
						error: f
					} = await e.createToken(l, {
						name: i,
						address_zip: d
					}), b = !d.trim();
					if (b) {
						const e = a.fbt._("Your ZIP code is incomplete", null, {
							hk: "4bttPr"
						});
						r(m({
							message: e
						}))
					}
					f && r(g(f));
					const y = !i.trim();
					if (y) {
						const e = a.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(p({
							message: e
						}))
					}
					return b || f || y ? void 0 : u
				}, O = Object(o.a)(c.B), j = Object(o.a)(c.O), x = Object(o.a)(c.H), E = Object(o.a)(c.g), P = Object(o.a)(c.E), _ = Object(o.a)(c.F)
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
				s = r("./src/reddit/controls/Button/index.tsx");
			var c = e => {
					let {
						paypalUrl: t,
						finishPaymentCallback: r
					} = e, a = window;
					const o = Object(n.useCallback)(e => {
						const t = s(e);
						"paypal-finish.success.framedmodal" === (null == t ? void 0 : t.type) ? (r(), null == a || a.close()) : "paypal-finish.cancel.framedmodal" === (null == t ? void 0 : t.type) && (null == a || a.close())
					}, [r, a]);
					if (Object(n.useEffect)(() => (window.addEventListener("message", o, !1), () => window.removeEventListener("message", o)), [o]), t) {
						const e = 580,
							r = 740,
							n = Math.max(window.screenX + Math.round((window.outerWidth - e) / 2), 0),
							o = Math.max(window.screenY + Math.round((window.outerHeight - r) / 2), 0);
						a = window.open(`${t}&rnd=${Math.random()}`, "RedditPaypalPayment", `height=${r},width=${e},top=${o},left=${n},modal=yes,alwaysRaised=yes`)
					}
					const s = e => {
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
					extraParams: p,
					onPaymentSuccess: m,
					onButtonClick: f
				} = e;
				const b = Object(i.a)(),
					[y, h] = Object(n.useState)(!1),
					[g, v] = Object(n.useState)(""),
					C = Object(n.useCallback)(() => {
						m()
					}, [m]);
				c({
					paypalUrl: g,
					finishPaymentCallback: C
				});
				return a.a.createElement(s.t, {
					onClick: async () => {
						if (!l) return;
						null == f || f(), h(!0);
						const e = await b(Object(o.g)({
							productOffer: l,
							pricePackage: u,
							productsCount: r,
							extraParams: p || {}
						}));
						e && (Object(o.c)(e) ? e.success && m() : v(e.url)), h(!1)
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
				return p
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				s = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				i = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/hooks/useThunkDispatch.ts"),
				l = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const {
				fbt: u
			} = r("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				let {
					className: t,
					productOffer: r,
					pricePackage: p,
					productsCount: m,
					extraParams: f,
					onPaymentSuccess: b,
					onButtonClick: y
				} = e;
				const h = Object(d.a)(),
					g = Object(n.useStripe)(),
					v = Object(n.useElements)(),
					[C, O] = Object(a.useState)(!1),
					j = Object(s.e)(l.x),
					x = Object(s.e)(l.n);
				return o.a.createElement(i.t, {
					onClick: async () => {
						if (!g || !v || !r) return;
						null == y || y(), O(!0);
						const e = await h(Object(c.i)({
							stripe: g,
							stripeElements: v,
							productOffer: r,
							pricePackage: p,
							productsCount: m,
							extraParams: f || {}
						}));
						Object(c.c)(e) && e.success && b(), O(!1)
					},
					className: t,
					disabled: C || x || j || !g
				}, u._("Complete purchase", null, {
					hk: "KaR26"
				}))
			}
		},
		"./src/reddit/components/EmergencyMaintenance/index.m.less": function(e, t, r) {
			e.exports = {
				maintenanceWrapper: "_1R0kZs37KSCMRzKh77L6C_",
				maintenanceImage: "_2FCuZzRM7iWGcefoXbpxV3",
				close: "_3paF7PsKBoVXkSoC58U-OH"
			}
		},
		"./src/reddit/components/EmergencyMaintenance/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				c = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = r("./src/reddit/components/EmergencyMaintenance/index.m.less"),
				d = r.n(i);
			const l = e => {
				let {
					onClose: t
				} = e;
				return a.a.createElement("div", {
					className: d.a.maintenanceWrapper
				}, a.a.createElement("div", {
					className: d.a.close,
					onClick: t
				}, a.a.createElement(c.b, {
					className: d.a.closeIcon
				})), a.a.createElement("img", {
					src: `${o.a.assetPath}/img/trouble-afoot.jpg`,
					className: d.a.maintenanceImage
				}), a.a.createElement("h3", null, s.fbt._("Currently Undergoing Maintenance", null, {
					hk: "3qPQ53"
				})), a.a.createElement("p", null, s.fbt._("We're sorry for the inconvenience, but we're currently undergoing maintenance. We'll be back online shortly!", null, {
					hk: "dZcW0"
				})))
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
				s = r("./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less"),
				c = r.n(s);
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
				}, a.a.createElement(o.l, {
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
				disabled: "_2hrD3Tw9OVOohb3Ep0HV0C",
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
				c = r("./src/lib/constants/index.ts"),
				i = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				l = r("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				u = r.n(l);
			const p = {
					[c.Mb]: ["visa.png", "mastercard.png", "amex.png", "discover.jpg"],
					[c.Nb]: ["paypal.png"]
				},
				m = e => o.a.createElement("label", {
					className: Object(s.a)(e.className, u.a.paymentOption, {
						[u.a.disabled]: e.disabled
					})
				}, !e.disabled && o.a.createElement("input", {
					type: "radio",
					id: e.value,
					name: "payment-option",
					value: e.value,
					checked: e.selectedValue === e.value,
					onChange: e.onChange
				}), o.a.createElement("div", {
					className: Object(s.a)(u.a.paymentOptionContent, {
						[u.a.isNightMode]: e.nightmode
					})
				}, e.children));
			class f extends o.a.Component {
				constructor() {
					super(...arguments), this.onPaymentSelected = e => {
						const t = e.target.value,
							{
								gildThingId: r,
								onPaymentSelected: n,
								sendEvent: a
							} = this.props;
						switch (t) {
							case c.Mb:
								a(Object(d.e)(r));
								break;
							case c.Nb:
								a(Object(d.f)(r))
						}
						return n(t)
					}
				}
				componentDidMount() {
					const {
						onPaymentSelected: e,
						paymentMethods: t,
						selectedPayment: r
					} = this.props;
					if (r ? !t.has(r) : t.size > 0) {
						const [r] = t;
						e(r)
					}
				}
				render() {
					const {
						className: e,
						nightmode: t,
						paymentMethods: r,
						selectedPayment: a
					} = this.props, s = r.size > 1;
					return o.a.createElement("form", {
						className: e
					}, o.a.createElement("fieldset", null, [...r].map(e => o.a.createElement(m, {
						key: e,
						disabled: !s,
						nightmode: t,
						selectedValue: a,
						onChange: this.onPaymentSelected,
						value: e
					}, p[e].map(e => o.a.createElement("div", {
						key: e,
						className: u.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/${e})`
						}
					}))))))
				}
			}
			t.a = Object(i.c)(f)
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
			} = r("./node_modules/fbt/lib/FbtPublic.js"), f = e => {
				let {
					className: t
				} = e;
				return a.a.createElement(p.b, {
					className: t
				}, m._("Error loading Stripe, please refresh the page and try again", null, {
					hk: "2O1NWp"
				}))
			};
			var b = r("./node_modules/fbt/lib/FbtPublic.js"),
				y = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				h = r("./src/config.ts"),
				g = r("./src/reddit/components/CheckoutForm/index.m.less"),
				v = r.n(g);
			const C = Object(s.c)({
				cardCvcValidation: u.f,
				cardExpiryValidation: u.g,
				cardName: u.h,
				cardNumberValidation: u.i,
				nameOnCardValidation: u.k,
				postalCodeValidation: u.m,
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
						postalCodeValidation: p,
						stripe: m
					} = this.props;
					if (!m) return a.a.createElement(f, {
						className: e
					});
					const {
						cardNumberReady: h,
						cardExpiryReady: g,
						cardCVCReady: C
					} = this.state, O = {
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
						"aria-label": b.fbt._("Name on credit or debit card", null, {
							hk: "9i5GO"
						}),
						autoComplete: "cc-name",
						autoCorrect: "off",
						spellCheck: "false",
						className: Object(c.a)(v.a.cardInput, v.a.nameOnCard, {
							[v.a.cardInputError]: !!l
						}),
						name: "name",
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
							[v.a.cardInputError]: !!o
						}),
						onChange: s,
						onReady: this.onCardNumberReady,
						options: {
							placeholder: b.fbt._("CARD NUMBER", null, {
								hk: "3pqMxG"
							}).toString(),
							style: O
						}
					}), !h && a.a.createElement("div", {
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
							style: O
						}
					}), !g && a.a.createElement("div", {
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
							placeholder: b.fbt._("CVC", null, {
								hk: "1huK7V"
							}).toString(),
							style: O
						}
					}), !C && a.a.createElement("div", {
						className: v.a.elementPlaceholder
					}, b.fbt._("CVC", null, {
						hk: "1huK7V"
					}))), a.a.createElement("div", {
						className: v.a.formCell
					}, a.a.createElement("input", {
						"aria-label": b.fbt._("Credit or debit card ZIP/postal code", null, {
							hk: "hzbzK"
						}),
						autoComplete: "postal-code",
						autoCorrect: "off",
						spellCheck: "false",
						className: Object(c.a)(v.a.cardInput, v.a.nameOnCard, {
							[v.a.cardInputError]: !!p
						}),
						name: "zip-code",
						type: "text",
						onChange: this.onChangePostalCode,
						placeholder: b.fbt._("ZIP CODE", null, {
							hk: "2lJZ4j"
						}).toString(),
						value: u
					})))
				}
			}
			var j = Object(o.b)(C, e => ({
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
				x = r("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				E = r("./src/reddit/selectors/experiments/econ/index.ts"),
				P = r("./src/reddit/components/StripePaymentForm/index.m.less"),
				_ = r.n(P);
			var w = e => {
					const {
						onToggleRememberCard: t,
						rememberCard: r
					} = e, n = Object(y.useStripe)(), s = Object(o.e)(E.p);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(j, {
						className: _.a.creditCard,
						stripe: n
					}), !s && a.a.createElement(x.a, {
						className: _.a.saveCardCheckbox,
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
						className: _.a.poweredByStripeIcon,
						src: `${h.a.assetPath}/img/payment-icons/powered-by-stripe.png`
					})))
				},
				S = r("./src/reddit/icons/svgs/Trash2/index.tsx");
			const {
				fbt: N
			} = r("./node_modules/fbt/lib/FbtPublic.js"), k = e => 2 === e.length ? e : "0" + e, I = e => {
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
			class T extends a.a.PureComponent {
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
						className: _.a.savedCardContainer
					}, a.a.createElement("input", {
						type: "radio",
						name: "use-saved-card",
						checked: !0,
						readOnly: !0
					}), a.a.createElement("div", {
						className: Object(c.a)(_.a.cardImageContainer, {
							[_.a.cardImageContainerNightmode]: this.props.nightmode
						})
					}, t ? a.a.createElement("img", {
						className: _.a.brandImage,
						src: t
					}) : a.a.createElement("span", {
						className: _.a.unknownCC
					}, "CC")), a.a.createElement("div", {
						className: _.a.cardDetails
					}, a.a.createElement("span", null, N._("Card ending in {Credit Card last four digits}", [N._param("Credit Card last four digits", e.last4)], {
						hk: "3dMxMn"
					})), a.a.createElement("span", {
						className: _.a.expiry
					}, N._("Expires {month} / {year}", [N._param("month", k(e.expirationMonth.toString())), N._param("year", e.expirationYear.toString())], {
						hk: "3iXzVI"
					}))), this.state.showConfirmText ? a.a.createElement("button", {
						className: _.a.confirmText,
						onClick: this.onConfirmClick
					}, N._("Confirm", null, {
						hk: "gFhpD"
					})) : a.a.createElement("button", {
						onClick: this.onTrashCanClick
					}, a.a.createElement(S.b, {
						className: _.a.icon
					})))
				}
			}
			var A = T;
			const R = Object(s.c)({
					rememberCard: u.w,
					savedCard: e => Object(u.y)(e)[0],
					stripeInfoLoading: u.x
				}),
				M = Object(o.b)(R, e => ({
					onClickDeleteCard: t => e(Object(i.b)(t)),
					onToggleRememberCard: () => e(Object(d.toggleRememberCard)())
				}));
			class L extends a.a.PureComponent {
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
					if (!i) return a.a.createElement(f, {
						className: Object(c.a)(_.a.stripePaymentForm, e)
					});
					const u = d,
						p = !u && s,
						m = !u && !p,
						b = u ? _.a.loadingState : p ? _.a.savedCardState : _.a.formState;
					return a.a.createElement("div", {
						className: Object(c.a)(_.a.stripePaymentForm, b, e)
					}, u && a.a.createElement(l.a, {
						className: _.a.loader,
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
			t.a = M(L)
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
				o = r.n(a),
				s = r("./node_modules/raf/index.js"),
				c = r.n(s),
				i = r("./node_modules/react/index.js"),
				d = r.n(i),
				l = r("./src/lib/classNames/index.ts"),
				u = r("./src/higherOrderComponents/asModal/index.tsx"),
				p = r("./src/reddit/controls/Button/index.tsx"),
				m = r("./src/reddit/layout/row/Inline/index.tsx"),
				f = r("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				b = r.n(f);
			var y = Object(u.a)(e => {
					const {
						children: t,
						title: r
					} = e;
					return d.a.createElement("div", {
						className: b.a.wrapper
					}, d.a.createElement(m.a, {
						className: b.a.titleRow
					}, r), d.a.createElement("div", {
						className: b.a.detailsContainer
					}, t), d.a.createElement(m.a, {
						className: b.a.buttonRow
					}, d.a.createElement(p.l, {
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
						className: Object(l.a)(g.a.wrapper, t)
					}, d.a.createElement("span", {
						className: g.a.description,
						ref: this.spanRef
					}, e), s && d.a.createElement("span", {
						className: g.a.moreText,
						onClick: this.toggleModal
					}, o), c && d.a.createElement(y, {
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
						messages: o = []
					} = e, s = o.length ? o : a ? [a] : [];
					return s.length ? d.a.createElement("div", {
						className: t
					}, s.map((e, t) => d.a.createElement(v, {
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
				o = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = r.n(s);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: n = 10
				} = e;
				return a.a.createElement("div", {
					className: Object(o.a)(c.a.loadingIcon, r, {
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
				return p
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "e", (function() {
				return f
			}));
			var n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				s = r("./src/reddit/constants/headers.ts"),
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
					p = Object(c.a)(u);
				return Object(a.a)(Object(o.a)(r, [s.a]), {
					method: n.ob.POST,
					endpoint: p,
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
				return Object(a.a)(Object(o.a)(t, [s.a]), {
					method: n.ob.POST,
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
				return Object(a.a)(Object(o.a)(t, [s.a]), {
					method: n.ob.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: u
				}).then(i.a)
			}, p = async e => {
				let {
					context: t,
					offerContext: r,
					orderId: c,
					coins: d,
					pennies: l,
					correlationId: u
				} = e;
				const p = {
					offer_context: r,
					order_id: c,
					coins: d,
					pennies: l,
					correlation_id: u
				};
				return Object(a.a)(Object(o.a)(t, [s.a]), {
					method: n.ob.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: p
				}).then(i.a)
			}, m = async e => {
				let {
					awardId: t,
					context: r,
					coins: c,
					correlationId: d,
					isAnonymous: l,
					message: u,
					offerContext: p,
					orderId: m,
					pennies: f,
					thingId: b
				} = e;
				const y = {
					award_id: t,
					coins: c,
					correlation_id: d,
					is_anonymous: l,
					message: u,
					offer_context: p,
					order_id: m,
					pennies: f,
					thing_id: b
				};
				return Object(a.a)(Object(o.a)(r, [s.a]), {
					method: n.ob.POST,
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
					thingId: p
				} = e;
				const m = {
					award_id: t,
					correlation_id: c,
					is_anonymous: d,
					message: l,
					order_id: u,
					thing_id: p
				};
				return Object(a.a)(Object(o.a)(r, [s.a]), {
					method: n.ob.POST,
					endpoint: `${r.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: m
				}).then(i.a)
			}
		},
		"./src/reddit/endpoints/gold/productOfferPurchase/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return g
			})), r.d(t, "g", (function() {
				return v
			})), r.d(t, "a", (function() {
				return C
			})), r.d(t, "j", (function() {
				return O
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "k", (function() {
				return x
			})), r.d(t, "h", (function() {
				return E
			})), r.d(t, "c", (function() {
				return P
			})), r.d(t, "e", (function() {
				return _
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "b", (function() {
				return S
			})), r.d(t, "m", (function() {
				return N
			})), r.d(t, "l", (function() {
				return k
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				a = r.n(n),
				o = r("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				s = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				c = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				i = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = r("./src/redditGQL/operations/CreateEconOrder.json"),
				l = r("./src/redditGQL/operations/CreatePaymentIntent.json"),
				u = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				p = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				m = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				f = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				b = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				y = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				h = r("./src/lib/makeGqlRequest/index.ts");
			const g = (e, t, r, n, o, s, c) => {
					const i = new a.a(n.price).multipliedBy(o).toFixed();
					return Object(h.a)(e, {
						...d,
						variables: {
							input: {
								nonce: t,
								productId: r.id,
								productVersion: r.version,
								pricePackageId: n.id,
								currency: n.currency,
								price: i,
								productsCount: o.toString(),
								...s,
								paymentProvider: c
							}
						}
					})
				},
				v = (e, t) => Object(h.a)(e, {
					...l,
					variables: {
						input: t
					}
				});
			var C;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(C || (C = {}));
			const O = (e, t, r, n) => Object(h.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				j = (e, t, r, n) => Object(h.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				x = (e, t, r, n) => Object(h.a)(e, {
					...f,
					variables: {
						nonce: t,
						orderId: r,
						cardId: n
					}
				}),
				E = (e, t, r, n, a) => Object(h.a)(e, {
					...u,
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
				_ = (e, t, r, n) => Object(h.a)(e, {
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
				S = (e, t) => Object(h.a)(e, {
					...o,
					variables: {
						orderId: t
					}
				}),
				N = e => Object(h.a)(e, {
					...y,
					variables: {}
				}),
				k = (e, t) => Object(h.a)(e, {
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
				return s
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return i
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

			function i(e) {
				const t = new n.BigNumber(e),
					r = new n.BigNumber("1e18");
				return t.dividedBy(r).toString()
			}
		},
		"./src/reddit/hooks/useStripePromise.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/@stripe/stripe-js/dist/stripe.esm.js"),
				a = r("./src/config.ts"),
				o = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/reddit/selectors/experiments/econ/index.ts"),
				c = r("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts");
			let i = null;

			function d() {
				const e = Object(o.e)(c.a),
					t = Object(o.e)(s.p);
				return i || (i = Object(n.a)(a.a.stripe.apiKey(e), {
					apiVersion: a.a.stripe.apiVersion(t)
				})), i
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
		"./src/reddit/selectors/experiments/econ/paymentMethods.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/constants/index.ts"),
				o = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const c = Object(s.a)(o.if),
				i = Object(s.a)(o.jf),
				d = Object(n.a)([c, i], (e, t) => new Set([e && a.Nb, t && a.Mb].filter(e => !!e)))
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				a = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(a.a)(n.Id)
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
				o = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/models/Payments/index.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				d = (e, t) => {
					let {
						subredditId: r,
						type: n
					} = t;
					var o, s, c;
					return r ? e.subreddits.productOffers[Object(a.a)(n, r)] : null === (c = null === (s = null === (o = e.features) || void 0 === o ? void 0 : o.goldPurchase) || void 0 === s ? void 0 : s.productOffers) || void 0 === c ? void 0 : c[Object(a.a)(n)]
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
				p = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === s.b.PayPal || e[0] === s.b.Stripe)(e.requiredPaymentProviders)) : null,
				m = Object(n.a)(u, c.q, (e, t) => p(e, t) || null),
				f = Object(n.a)(m, (e, t) => {
					let {
						provider: r
					} = t;
					return r
				}, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				b = Object(n.a)(m, e => (null == e ? void 0 : e[0].price) || null),
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
		"./src/redditGQL/operations/UserSavedStripeCards.json": function(e) {
			e.exports = JSON.parse('{"id":"d29c51cfbfe6"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CoinPurchaseModal~PremiumPurchaseModal.f50c2aa89f8d57201f24.js.map