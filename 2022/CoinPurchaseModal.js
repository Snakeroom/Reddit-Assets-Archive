// https://www.redditstatic.com/desktop2x/CoinPurchaseModal.b972603c406204d1b649.js
// Retrieved at 8/3/2022, 12:40:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CoinPurchaseModal"], {
		"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js": function(e, t, n) {
			! function(e, t) {
				"use strict";
				t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
				var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

				function r() {}

				function o() {}
				o.resetWarningCache = r;
				var a = function(e, t) {
					return e(t = {
						exports: {}
					}, t.exports), t.exports
				}((function(e) {
					e.exports = function() {
						function e(e, t, r, o, a, c) {
							if (c !== n) {
								var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
								throw s.name = "Invariant Violation", s
							}
						}

						function t() {
							return e
						}
						e.isRequired = e;
						var a = {
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
							resetWarningCache: r
						};
						return a.PropTypes = a, a
					}()
				}));

				function c(e) {
					return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					})(e)
				}

				function s(e, t, n) {
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

				function d(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? i(Object(n), !0).forEach((function(t) {
							s(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function l(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
							var n = [],
								r = !0,
								o = !1,
								a = void 0;
							try {
								for (var c, s = e[Symbol.iterator](); !(r = (c = s.next()).done) && (n.push(c.value), !t || n.length !== t); r = !0);
							} catch (i) {
								o = !0, a = i
							} finally {
								try {
									r || null == s.return || s.return()
								} finally {
									if (o) throw a
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
				var p = function(e) {
						var n = t.useRef(e);
						return t.useEffect((function() {
							n.current = e
						}), [e]), n.current
					},
					f = function(e) {
						return null !== e && "object" === c(e)
					},
					m = function(e, t, n) {
						return f(e) ? Object.keys(e).reduce((function(r, o) {
							var a = !f(t) || ! function e(t, n) {
								if (!f(t) || !f(n)) return t === n;
								var r = Array.isArray(t);
								if (r !== Array.isArray(n)) return !1;
								var o = "[object Object]" === Object.prototype.toString.call(t);
								if (o !== ("[object Object]" === Object.prototype.toString.call(n))) return !1;
								if (!o && !r) return !1;
								var a = Object.keys(t),
									c = Object.keys(n);
								if (a.length !== c.length) return !1;
								for (var s = {}, i = 0; i < a.length; i += 1) s[a[i]] = !0;
								for (var d = 0; d < c.length; d += 1) s[c[d]] = !0;
								var l = Object.keys(s);
								if (l.length !== a.length) return !1;
								var u = t,
									p = n;
								return l.every((function(t) {
									return e(u[t], p[t])
								}))
							}(e[o], t[o]);
							return n.includes(o) ? (a && console.warn("Unsupported prop change: options.".concat(o, " is not a mutable property.")), r) : a ? d(d({}, r || {}), {}, s({}, o, e[o])) : r
						}), null) : null
					},
					b = function(e) {
						if (null === e || f(t = e) && "function" == typeof t.elements && "function" == typeof t.createToken && "function" == typeof t.createPaymentMethod && "function" == typeof t.confirmCardPayment) return e;
						var t;
						throw new Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
					},
					y = function(e) {
						if (function(e) {
								return f(e) && "function" == typeof e.then
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
				var O = function(e) {
					var n = e.stripe,
						r = e.options,
						o = e.children,
						a = t.useRef(!1),
						c = t.useRef(!0),
						s = t.useMemo((function() {
							return y(n)
						}), [n]),
						i = l(t.useState((function() {
							return {
								stripe: null,
								elements: null
							}
						})), 2),
						d = i[0],
						u = i[1],
						f = p(n);
					null !== f && f !== n && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), a.current || ("sync" === s.tag && (a.current = !0, u({
						stripe: s.stripe,
						elements: s.stripe.elements(r)
					})), "async" === s.tag && (a.current = !0, s.stripePromise.then((function(e) {
						e && c.current && u({
							stripe: e,
							elements: e.elements(r)
						})
					}))));
					var b = p(r);
					return t.useEffect((function() {
						if (d.elements) {
							var e = m(r, b, ["clientSecret", "fonts"]);
							e && d.elements.update(e)
						}
					}), [r, b, d.elements]), t.useEffect((function() {
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
					}, o)
				};
				O.propTypes = {
					stripe: a.any,
					options: a.object
				};
				var g = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(h), e)
					},
					j = function(e) {
						return (0, e.children)(g("mounts <ElementsConsumer>"))
					};
				j.propTypes = {
					children: a.func.isRequired
				};
				var v = function(e) {
						var n = t.useRef(e);
						return t.useEffect((function() {
								n.current = e
							}), [e]),
							function() {
								n.current && n.current.apply(n, arguments)
							}
					},
					_ = function() {},
					P = function(e, n) {
						var r, o = "".concat((r = e).charAt(0).toUpperCase() + r.slice(1), "Element"),
							c = n ? function(e) {
								g("mounts <".concat(o, ">"));
								var n = e.id,
									r = e.className;
								return t.createElement("div", {
									id: n,
									className: r
								})
							} : function(n) {
								var r = n.id,
									a = n.className,
									c = n.options,
									s = void 0 === c ? {} : c,
									i = n.onBlur,
									d = void 0 === i ? _ : i,
									l = n.onFocus,
									u = void 0 === l ? _ : l,
									f = n.onReady,
									b = void 0 === f ? _ : f,
									y = n.onChange,
									h = void 0 === y ? _ : y,
									O = n.onEscape,
									j = void 0 === O ? _ : O,
									P = n.onClick,
									C = void 0 === P ? _ : P,
									E = g("mounts <".concat(o, ">")).elements,
									w = t.useRef(null),
									x = t.useRef(null),
									k = v(b),
									I = v(d),
									A = v(u),
									S = v(C),
									M = v(h),
									T = v(j);
								t.useLayoutEffect((function() {
									if (null == w.current && E && null != x.current) {
										var t = E.create(e, s);
										w.current = t, t.mount(x.current), t.on("ready", (function() {
											return k(t)
										})), t.on("change", M), t.on("blur", I), t.on("focus", A), t.on("escape", T), t.on("click", S)
									}
								}));
								var N = p(s);
								return t.useEffect((function() {
									if (w.current) {
										var e = m(s, N, ["paymentRequest"]);
										e && w.current.update(e)
									}
								}), [s, N]), t.useLayoutEffect((function() {
									return function() {
										w.current && w.current.destroy()
									}
								}), []), t.createElement("div", {
									id: r,
									className: a,
									ref: x
								})
							};
						return c.propTypes = {
							id: a.string,
							className: a.string,
							onChange: a.func,
							onBlur: a.func,
							onFocus: a.func,
							onReady: a.func,
							onClick: a.func,
							options: a.object
						}, c.displayName = o, c.__elementType = e, c
					},
					C = "undefined" == typeof window,
					E = P("auBankAccount", C),
					w = P("card", C),
					x = P("cardNumber", C),
					k = P("cardExpiry", C),
					I = P("cardCvc", C),
					A = P("fpxBank", C),
					S = P("iban", C),
					M = P("idealBank", C),
					T = P("p24Bank", C),
					N = P("epsBank", C),
					R = P("payment", C),
					B = P("paymentRequestButton", C),
					L = P("linkAuthentication", C),
					U = P("shippingAddress", C),
					D = P("afterpayClearpayMessage", C);
				e.AfterpayClearpayMessageElement = D, e.AuBankAccountElement = E, e.CardCvcElement = I, e.CardElement = w, e.CardExpiryElement = k, e.CardNumberElement = x, e.Elements = O, e.ElementsConsumer = j, e.EpsBankElement = N, e.FpxBankElement = A, e.IbanElement = S, e.IdealBankElement = M, e.LinkAuthenticationElement = L, e.P24BankElement = T, e.PaymentElement = R, e.PaymentRequestButtonElement = B, e.ShippingAddressElement = U, e.useElements = function() {
					return g("calls useElements()").elements
				}, e.useStripe = function() {
					return g("calls useStripe()").stripe
				}, Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}(t, n("./node_modules/react/index.js"))
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
			n.d(t, "c", (function() {
				return P
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "f", (function() {
				return A
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "h", (function() {
				return M
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/formatApiError/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/sentry/index.ts"),
				s = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = n("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				f = (n("./src/reddit/endpoints/gold/purchase.ts"), n("./src/reddit/helpers/correlationIdTracker.ts")),
				m = n("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				b = n("./src/reddit/models/Gold/Award.ts"),
				y = n("./src/reddit/models/Gold/ProductOffer.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				g = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				j = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const v = Object(a.a)(j.u),
				_ = Object(a.a)(j.c),
				P = e => async (t, n) => {
					t(v(e)), t(Object(l.h)(s.a.ECON_COIN_PURCHASE))
				}, C = () => async (e, t) => {
					e(_()), e(Object(l.g)(s.a.ECON_COIN_PURCHASE))
				}, E = Object(a.a)(j.y), w = e => {
					let {
						correlationId: t,
						packageId: n
					} = e;
					return async (e, r) => {
						const o = r();
						Object(O.e)(o, n) ? (e(E({
							correlationId: t,
							packageId: n
						})), e(Object(l.i)(s.a.GOLD_TARGETED_OFFER_MODAL))) : c.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${n}`)
					}
				}, x = Object(a.a)(j.t), k = e => {
					let {
						correlationId: t,
						packageId: n
					} = e;
					return async (e, r) => {
						Object(O.c)(r(), n) ? (e(x({
							correlationId: t,
							packageId: n
						})), e(Object(l.i)(s.a.ECON_COIN_PACKAGE_OFFER))) : c.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${n}`)
					}
				}, I = (e, t, n) => async (o, a) => {
					await o(Object(d.c)());
					const c = a(),
						s = Object(O.p)(c, e);
					if (s) o(P({
						correlationId: n,
						packageId: s,
						thingId: t
					}));
					else {
						const e = Object(O.n)(c),
							t = r.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						o(Object(u.f)({
							kind: h.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, A = e => async (t, n, r) => {
					let {
						apiContext: a
					} = r;
					const s = Object(f.c)(f.a.GoldPayment),
						{
							coins: d,
							pennies: l
						} = e;
					try {
						const e = await Object(p.a)({
							context: a(),
							coins: d,
							pennies: l,
							correlationId: s
						});
						if (e.error) {
							const n = Object(o.a)(e.error);
							return void t(Object(i.paypalApiError)(n))
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
				}, S = (e, t) => async (n, r, a) => {
					let {
						apiContext: s
					} = a;
					const d = r(),
						l = Object(g.p)(d) || Object(f.d)(f.a.GoldPayment, !1),
						{
							coins: u,
							pennies: m
						} = t;
					try {
						const r = await Object(p.c)({
							context: s(),
							offerContext: Object(y.d)(t, !1),
							orderId: e,
							coins: u,
							pennies: m,
							correlationId: l
						});
						if (r.error) {
							const e = Object(o.a)(r.error);
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
					} catch (b) {
						c.c.captureException(b);
						const e = Object(o.a)(b);
						n(Object(i.paypalApiError)(e))
					}
				}, M = (e, t) => async (a, s, d) => {
					let {
						apiContext: l
					} = d;
					const u = s(),
						h = Object(g.p)(u) || Object(f.d)(f.a.GoldPayment, !1),
						{
							coins: O,
							pennies: j
						} = t;
					try {
						const {
							gildModalThingId: c,
							isAnonymous: s,
							message: d,
							selectedAward: g
						} = u.gild;
						if (!c || !g) return void a(Object(i.paypalApiError)(r.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const v = g.id,
							_ = await Object(p.d)({
								context: l(),
								offerContext: Object(y.d)(t, !0),
								orderId: e,
								coins: O,
								pennies: j,
								thingId: c,
								awardId: v,
								message: d || "",
								isAnonymous: s,
								correlationId: h
							});
						if (_.error) {
							const e = Object(o.a)(_.error);
							a(Object(i.paypalApiError)(e))
						} else {
							a(C());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: r,
								subreddit_coins: o,
								treatment_tags: s
							} = _.body;
							a(Object(i.paymentCompleted)({
								coins: r,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await n.e("gildActions").then(n.bind(null, "./src/reddit/actions/gold/gild.ts"));
							a(d({
								awardId: v,
								awardKarmaReceived: t || 0,
								awardings: Object(m.a)(e).map(e => ({
									award: Object(b.j)(e),
									total: e.count
								})),
								coins: r,
								id: c,
								subredditCoins: o,
								treatmentTags: s
							})), Object(f.b)(f.a.GoldPayment)
						}
					} catch (v) {
						c.c.captureException(v);
						const e = Object(o.a)(v);
						a(Object(i.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "selectPaymentMethod", (function() {
				return i
			})), n.d(t, "paymentCompleted", (function() {
				return d
			})), n.d(t, "cardNameInput", (function() {
				return l
			})), n.d(t, "postalCodeInput", (function() {
				return u
			})), n.d(t, "cardNameEmpty", (function() {
				return p
			})), n.d(t, "cardNumberChange", (function() {
				return f
			})), n.d(t, "cardExpiryChange", (function() {
				return m
			})), n.d(t, "cardCvcChange", (function() {
				return b
			})), n.d(t, "stripeTokenPending", (function() {
				return y
			})), n.d(t, "stripeTokenError", (function() {
				return h
			})), n.d(t, "stripeApiError", (function() {
				return O
			})), n.d(t, "validateAndCreateStripeToken", (function() {
				return g
			})), n.d(t, "paypalApiError", (function() {
				return j
			})), n.d(t, "toggleRememberCard", (function() {
				return v
			})), n.d(t, "selectSavedCard", (function() {
				return _
			})), n.d(t, "deleteSavedCard", (function() {
				return P
			})), n.d(t, "savedCardsPending", (function() {
				return C
			})), n.d(t, "savedCardsSuccess", (function() {
				return E
			}));
			var r = n("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				s = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const i = Object(a.a)(s.F),
				d = Object(a.a)(s.A),
				l = Object(a.a)(s.b),
				u = Object(a.a)(s.C),
				p = Object(a.a)(s.a),
				f = Object(a.a)(s.K),
				m = Object(a.a)(s.J),
				b = Object(a.a)(s.I),
				y = Object(a.a)(s.M),
				h = Object(a.a)(s.L),
				O = Object(a.a)(s.H),
				g = (e, t) => async (n, a) => {
					const s = a(),
						i = Object(c.g)(s),
						d = Object(c.k)(s),
						l = t.getElement(r.CardNumberElement);
					if (!l) return;
					const {
						token: u,
						error: f
					} = await e.createToken(l, {
						name: i,
						address_zip: d
					});
					if (i.trim()) {
						if (!f && u) return u;
						n(h(f || void 0))
					} else {
						const e = o.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						n(p({
							message: e
						}))
					}
				}, j = Object(a.a)(s.B), v = Object(a.a)(s.N), _ = Object(a.a)(s.G), P = Object(a.a)(s.g), C = Object(a.a)(s.D), E = Object(a.a)(s.E)
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "a", (function() {
				return P
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/env/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/sentry/index.ts"),
				s = n("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				p = n("./src/reddit/actions/economics/powerups/helpers.ts"),
				f = n("./src/redditGQL/operations/PurchaseCatalogProductOffers.json");
			var m = n("./src/reddit/selectors/gold/productOffers.ts"),
				b = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			Object(a.a)(b.m);
			const y = Object(a.a)(b.o),
				h = Object(a.a)(b.n),
				O = Object(a.a)(b.i),
				g = Object(a.a)(b.j),
				j = e => async (t, n, a) => {
					let {
						gqlContext: s
					} = a;
					const i = n(),
						d = Object(m.a)(i);
					if ((null == e ? void 0 : e.forceLoad) || !d) {
						t(y());
						try {
							const e = await (async e => {
								const t = await Object(u.a)(e, {
									...f
								});
								if (!t.ok) {
									const {
										errors: e
									} = t.body, n = Object(p.a)(e);
									throw new Error(n || "Unknown error in requestPurchaseCatalogProductOffers")
								}
								return t.body
							})(s());
							t(O(e.data.coinpacks.offers[0])), t(g(e.data.premium.offers[0]))
						} catch (l) {
							Object(o.b)() || console.error(l), c.c.captureException(l);
							const e = r.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(h(e))
						}
					}
				}, v = () => async e => e(j()), _ = Object(a.a)(b.h), P = () => async (e, t, n) => {
					let {
						gqlContext: a
					} = n;
					var u, p;
					try {
						const t = await Object(s.a)(a());
						if (t.ok) {
							const n = t.body.data.claimAwardOffer;
							if (null === (u = n.errors) || void 0 === u ? void 0 : u.length) throw new Error(n.errors.map(e => e.message).join(" | "));
							if (!(null === (p = n.awards) || void 0 === p ? void 0 : p.length)) throw new Error("Got empty award list on free award offer claim");
							if (!n.ok) throw new Error("Got not ok response on free award offer claim");
							await e(_({
								awards: n.awards
							})), e(Object(l.B)())
						}
					} catch (f) {
						Object(o.b)() || console.error(f), e(Object(i.f)({
							kind: d.b.Error,
							text: r.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), c.c.captureException(f)
					}
				}
		},
		"./src/reddit/components/CoinPurchaseModal/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CoinPurchaseModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				s = n("./src/reddit/actions/gold/modals.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				d = n("./src/reddit/components/EmergencyMaintenance/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				p = n.n(u);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(a.b)(null, (e, t) => ({
				closeModal: () => {
					e(Object(i.a)()), e(Object(s.a)())
				}
			}));
			class b extends o.a.Component {
				constructor(e) {
					super(e), this.handleEscapeKey = e => {
						const {
							onTryCloseModal: t
						} = this.props;
						if (27 === e.keyCode) return t()
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					return o.a.createElement("div", null, o.a.createElement(d.a, {
						onClose: this.props.onTryCloseModal
					}))
				}
			}
			const y = Object(c.a)(b);
			t.default = m(Object(l.c)(class extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						this.onCloseModal()
					}, this.onCloseModal = () => {
						this.props.closeModal()
					}
				}
				render() {
					return o.a.createElement(y, f({}, this.props, {
						className: p.a.coinPurchaseModal,
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						withOverlay: !0
					}))
				}
			}))
		},
		"./src/reddit/components/EmergencyMaintenance/index.m.less": function(e, t, n) {
			e.exports = {
				maintenanceWrapper: "_1R0kZs37KSCMRzKh77L6C_",
				maintenanceImage: "_2FCuZzRM7iWGcefoXbpxV3",
				close: "_3paF7PsKBoVXkSoC58U-OH"
			}
		},
		"./src/reddit/components/EmergencyMaintenance/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/config.ts"),
				c = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = n("./src/reddit/components/EmergencyMaintenance/index.m.less"),
				d = n.n(i);
			const l = e => {
				let {
					onClose: t
				} = e;
				return o.a.createElement("div", {
					className: d.a.maintenanceWrapper
				}, o.a.createElement("div", {
					className: d.a.close,
					onClick: t
				}, o.a.createElement(s.b, {
					className: d.a.closeIcon
				})), o.a.createElement("img", {
					src: `${a.a.assetPath}/img/trouble-afoot.jpg`,
					className: d.a.maintenanceImage
				}), o.a.createElement("h3", null, c.fbt._("Currently Undergoing Maintenance", null, {
					hk: "3qPQ53"
				})), o.a.createElement("p", null, c.fbt._("We're sorry for the inconvenience, but we're currently undergoing maintenance. We'll be back online shortly!", null, {
					hk: "dZcW0"
				})))
			}
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "e", (function() {
				return m
			}));
			var r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				s = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				i = n("./src/reddit/endpoints/gold/purchase.ts");
			const d = async e => {
				let {
					buttonId: t,
					context: n,
					correlationId: d
				} = e;
				const l = {
						button_id: t,
						correlation_id: d
					},
					u = `${n.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					p = Object(s.a)(u);
				return Object(o.a)(Object(a.a)(n, [c.a]), {
					method: r.jb.POST,
					endpoint: p,
					data: l
				}).then(i.a)
			}, l = async e => {
				let {
					context: t,
					coins: n,
					pennies: s,
					correlationId: d
				} = e;
				const l = {
					coins: n,
					pennies: s,
					correlation_id: d
				};
				return Object(o.a)(Object(a.a)(t, [c.a]), {
					method: r.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: l
				}).then(i.a)
			}, u = async e => {
				let {
					context: t,
					awardId: n,
					pennies: s,
					thingId: d,
					correlationId: l
				} = e;
				const u = {
					award_id: n,
					correlation_id: l,
					pennies: s,
					thing_id: d
				};
				return Object(o.a)(Object(a.a)(t, [c.a]), {
					method: r.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: u
				}).then(i.a)
			}, p = async e => {
				let {
					context: t,
					offerContext: n,
					orderId: s,
					coins: d,
					pennies: l,
					correlationId: u
				} = e;
				const p = {
					offer_context: n,
					order_id: s,
					coins: d,
					pennies: l,
					correlation_id: u
				};
				return Object(o.a)(Object(a.a)(t, [c.a]), {
					method: r.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: p
				}).then(i.a)
			}, f = async e => {
				let {
					awardId: t,
					context: n,
					coins: s,
					correlationId: d,
					isAnonymous: l,
					message: u,
					offerContext: p,
					orderId: f,
					pennies: m,
					thingId: b
				} = e;
				const y = {
					award_id: t,
					coins: s,
					correlation_id: d,
					is_anonymous: l,
					message: u,
					offer_context: p,
					order_id: f,
					pennies: m,
					thing_id: b
				};
				return Object(o.a)(Object(a.a)(n, [c.a]), {
					method: r.jb.POST,
					endpoint: `${n.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: y
				}).then(i.a)
			}, m = async e => {
				let {
					awardId: t,
					context: n,
					correlationId: s,
					isAnonymous: d,
					message: l,
					orderId: u,
					thingId: p
				} = e;
				const f = {
					award_id: t,
					correlation_id: s,
					is_anonymous: d,
					message: l,
					order_id: u,
					thing_id: p
				};
				return Object(o.a)(Object(a.a)(n, [c.a]), {
					method: r.jb.POST,
					endpoint: `${n.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: f
				}).then(i.a)
			}
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var r, o, a, c;
			n.d(t, "b", (function() {
					return o
				})), n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(o || (o = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(a || (a = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(c || (c = {}))
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "c", (function() {
				return b
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/makeProductOfferKey/index.ts"),
				a = n("./src/reddit/models/Gold/ProductOffer.ts"),
				c = n("./src/reddit/models/Payments/index.ts"),
				s = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				d = (e, t) => {
					let {
						subredditId: n,
						type: r
					} = t;
					var a, c, s;
					return n ? e.subreddits.productOffers[Object(o.a)(r, n)] : null === (s = null === (c = null === (a = e.features) || void 0 === a ? void 0 : a.goldPurchase) || void 0 === c ? void 0 : c.productOffers) || void 0 === s ? void 0 : s[Object(o.a)(r)]
				},
				l = e => {
					const t = d(e, {
						type: a.c.Coinpack
					});
					return null == t ? void 0 : t[0]
				},
				u = e => {
					const t = d(e, {
						type: a.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				p = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === c.b.PayPal || e[0] === c.b.Stripe)(e.requiredPaymentProviders)) : null,
				f = Object(r.a)(u, s.n, (e, t) => p(e, t) || null),
				m = (Object(r.a)(f, (e, t) => {
					let {
						provider: n
					} = t;
					return n
				}, (e, t) => null == e ? void 0 : e.find(e => {
					var n;
					return (null === (n = e.requiredPaymentProviders) || void 0 === n ? void 0 : n[0]) === t
				})), Object(r.a)(f, e => (null == e ? void 0 : e[0].price) || null), Object(r.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0])),
				b = Object(r.a)(m, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/redditGQL/operations/PurchaseCatalogProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"098518521d5b"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CoinPurchaseModal.b972603c406204d1b649.js.map