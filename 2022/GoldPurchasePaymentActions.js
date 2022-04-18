// https://www.redditstatic.com/desktop2x/GoldPurchasePaymentActions.d45ce5b8555eab512742.js
// Retrieved at 4/18/2022, 11:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GoldPurchasePaymentActions"], {
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
								var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
								throw i.name = "Invariant Violation", i
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

				function i(e, t, r) {
					return t in e ? Object.defineProperty(e, t, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = r, e
				}

				function s(e, t) {
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
						t % 2 ? s(Object(r), !0).forEach((function(t) {
							i(e, t, r[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
						}))
					}
					return e
				}

				function u(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
							var r = [],
								n = !0,
								a = !1,
								o = void 0;
							try {
								for (var c, i = e[Symbol.iterator](); !(n = (c = i.next()).done) && (r.push(c.value), !t || r.length !== t); n = !0);
							} catch (s) {
								a = !0, o = s
							} finally {
								try {
									n || null == i.return || i.return()
								} finally {
									if (a) throw o
								}
							}
							return r
						}
					}(e, t) || function(e, t) {
						if (e) {
							if ("string" == typeof e) return l(e, t);
							var r = Object.prototype.toString.call(e).slice(8, -1);
							return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? l(e, t) : void 0
						}
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function l(e, t) {
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
					f = function(e) {
						return null !== e && "object" === c(e)
					},
					m = function(e, t, r) {
						return f(e) ? Object.keys(e).reduce((function(n, a) {
							var o = !f(t) || ! function e(t, r) {
								if (!f(t) || !f(r)) return t === r;
								var n = Array.isArray(t);
								if (n !== Array.isArray(r)) return !1;
								var a = "[object Object]" === Object.prototype.toString.call(t);
								if (a !== ("[object Object]" === Object.prototype.toString.call(r))) return !1;
								if (!a && !n) return !1;
								var o = Object.keys(t),
									c = Object.keys(r);
								if (o.length !== c.length) return !1;
								for (var i = {}, s = 0; s < o.length; s += 1) i[o[s]] = !0;
								for (var d = 0; d < c.length; d += 1) i[c[d]] = !0;
								var u = Object.keys(i);
								if (u.length !== o.length) return !1;
								var l = t,
									p = r;
								return u.every((function(t) {
									return e(l[t], p[t])
								}))
							}(e[a], t[a]);
							return r.includes(a) ? (o && console.warn("Unsupported prop change: options.".concat(a, " is not a mutable property.")), n) : o ? d(d({}, n || {}), {}, i({}, a, e[a])) : n
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
				var g = function(e) {
					var r = e.stripe,
						n = e.options,
						a = e.children,
						o = t.useRef(!1),
						c = t.useRef(!0),
						i = t.useMemo((function() {
							return y(r)
						}), [r]),
						s = u(t.useState((function() {
							return {
								stripe: null,
								elements: null
							}
						})), 2),
						d = s[0],
						l = s[1],
						f = p(r);
					null !== f && f !== r && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), o.current || ("sync" === i.tag && (o.current = !0, l({
						stripe: i.stripe,
						elements: i.stripe.elements(n)
					})), "async" === i.tag && (o.current = !0, i.stripePromise.then((function(e) {
						e && c.current && l({
							stripe: e,
							elements: e.elements(n)
						})
					}))));
					var b = p(n);
					return t.useEffect((function() {
						if (d.elements) {
							var e = m(n, b, ["clientSecret", "fonts"]);
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
				var O = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(h), e)
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
					P = function() {},
					_ = function(e, r) {
						var n, a = "".concat((n = e).charAt(0).toUpperCase() + n.slice(1), "Element"),
							c = r ? function(e) {
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
									c = r.options,
									i = void 0 === c ? {} : c,
									s = r.onBlur,
									d = void 0 === s ? P : s,
									u = r.onFocus,
									l = void 0 === u ? P : u,
									f = r.onReady,
									b = void 0 === f ? P : f,
									y = r.onChange,
									h = void 0 === y ? P : y,
									g = r.onEscape,
									j = void 0 === g ? P : g,
									_ = r.onClick,
									E = void 0 === _ ? P : _,
									k = O("mounts <".concat(a, ">")).elements,
									C = t.useRef(null),
									x = t.useRef(null),
									I = v(b),
									w = v(d),
									S = v(l),
									A = v(E),
									M = v(h),
									R = v(j);
								t.useLayoutEffect((function() {
									if (null == C.current && k && null != x.current) {
										var t = k.create(e, i);
										C.current = t, t.mount(x.current), t.on("ready", (function() {
											return I(t)
										})), t.on("change", M), t.on("blur", w), t.on("focus", S), t.on("escape", R), t.on("click", A)
									}
								}));
								var T = p(i);
								return t.useEffect((function() {
									if (C.current) {
										var e = m(i, T, ["paymentRequest"]);
										e && C.current.update(e)
									}
								}), [i, T]), t.useLayoutEffect((function() {
									return function() {
										C.current && C.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: o,
									ref: x
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
					k = _("auBankAccount", E),
					C = _("card", E),
					x = _("cardNumber", E),
					I = _("cardExpiry", E),
					w = _("cardCvc", E),
					S = _("fpxBank", E),
					A = _("iban", E),
					M = _("idealBank", E),
					R = _("p24Bank", E),
					T = _("epsBank", E),
					U = _("payment", E),
					N = _("paymentRequestButton", E),
					B = _("linkAuthentication", E),
					L = _("shippingAddress", E),
					$ = _("afterpayClearpayMessage", E);
				e.AfterpayClearpayMessageElement = $, e.AuBankAccountElement = k, e.CardCvcElement = w, e.CardElement = C, e.CardExpiryElement = I, e.CardNumberElement = x, e.Elements = g, e.ElementsConsumer = j, e.EpsBankElement = T, e.FpxBankElement = S, e.IbanElement = A, e.IdealBankElement = M, e.LinkAuthenticationElement = B, e.P24BankElement = R, e.PaymentElement = U, e.PaymentRequestButtonElement = N, e.ShippingAddressElement = L, e.useElements = function() {
					return O("calls useElements()").elements
				}, e.useStripe = function() {
					return O("calls useStripe()").stripe
				}, Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}(t, r("./node_modules/react/index.js"))
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return u
			})), r.d(t, "paymentCompleted", (function() {
				return l
			})), r.d(t, "cardNameInput", (function() {
				return p
			})), r.d(t, "postalCodeInput", (function() {
				return f
			})), r.d(t, "cardNameEmpty", (function() {
				return m
			})), r.d(t, "cardNumberChange", (function() {
				return b
			})), r.d(t, "cardExpiryChange", (function() {
				return y
			})), r.d(t, "cardCvcChange", (function() {
				return h
			})), r.d(t, "stripeTokenPending", (function() {
				return g
			})), r.d(t, "stripeTokenError", (function() {
				return O
			})), r.d(t, "stripeApiError", (function() {
				return j
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return v
			})), r.d(t, "paypalApiError", (function() {
				return P
			})), r.d(t, "toggleRememberCard", (function() {
				return _
			})), r.d(t, "selectSavedCard", (function() {
				return E
			})), r.d(t, "_deleteSavedCard", (function() {
				return k
			})), r.d(t, "deleteSavedCard", (function() {
				return C
			})), r.d(t, "savedCardsPending", (function() {
				return x
			})), r.d(t, "savedCardsSuccess", (function() {
				return I
			})), r.d(t, "loadSavedCards", (function() {
				return w
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/endpoints/gold/purchase.ts"),
				s = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const u = Object(o.a)(d.F),
				l = Object(o.a)(d.A),
				p = Object(o.a)(d.b),
				f = Object(o.a)(d.C),
				m = Object(o.a)(d.a),
				b = Object(o.a)(d.K),
				y = Object(o.a)(d.J),
				h = Object(o.a)(d.I),
				g = Object(o.a)(d.M),
				O = Object(o.a)(d.L),
				j = Object(o.a)(d.H),
				v = (e, t) => async (r, o) => {
					const c = o(),
						i = Object(s.h)(c),
						d = Object(s.l)(c),
						u = t.getElement(n.CardNumberElement);
					if (!u) return;
					const {
						token: l,
						error: p
					} = await e.createToken(u, {
						name: i,
						address_zip: d
					});
					if (i.trim()) {
						if (!p && l) return l;
						r(O(p || void 0))
					} else {
						const e = a.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(m({
							message: e
						}))
					}
				}, P = Object(o.a)(d.B), _ = Object(o.a)(d.N), E = Object(o.a)(d.G), k = Object(o.a)(d.g), C = e => async (t, r, n) => {
					let {
						apiContext: a
					} = n;
					t(k(e));
					try {
						const t = await Object(i.a)(a(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						c.c.captureException(o)
					}
				}, x = Object(o.a)(d.D), I = Object(o.a)(d.E), w = () => async (e, t, r) => {
					let {
						apiContext: n
					} = r;
					e(x());
					try {
						const t = await Object(i.b)(n());
						if (t.error) throw new Error(t.error.type);
						const r = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(I(r)), r[0] && e(E(r[0].cardId))
					} catch (a) {
						c.c.captureException(a), e(I([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "setPremiumPurchaseModalInfo", (function() {
				return h
			})), r.d(t, "clearPremiumPurchaseModalInfo", (function() {
				return g
			})), r.d(t, "openPremiumPurchaseModal", (function() {
				return O
			})), r.d(t, "closePremiumPurchaseModal", (function() {
				return j
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return v
			})), r.d(t, "paymentBlobCreated", (function() {
				return P
			})), r.d(t, "openWithBlob", (function() {
				return _
			}));
			var n = r("./src/config.ts"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				i = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/formatApiError/index.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/constants/modals.ts"),
				p = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				f = r("./src/reddit/endpoints/gold/purchase.ts"),
				m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				b = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const h = Object(o.a)(y.x),
				g = Object(o.a)(y.e),
				O = (e, t) => async r => {
					r(h(e)), r(Object(u.h)(l.a.ECON_PREMIUM_PURCHASE, t))
				}, j = () => async e => {
					e(Object(u.g)(l.a.ECON_PREMIUM_PURCHASE)), e(g())
				}, v = (e, t) => async (r, n, o) => {
					let {
						apiContext: c
					} = o;
					const u = Object(b.a)(n()),
						l = (null == u ? void 0 : u.pennies) || i.zb,
						p = Object(m.c)(m.a.GoldPayment);
					r(Object(d.stripeTokenPending)());
					const y = await r(Object(d.validateAndCreateStripeToken)(e, t));
					if (y) try {
						const e = await Object(f.h)({
							context: c(),
							correlationId: p,
							pennies: l,
							token: y
						});
						if (e.error) {
							const t = Object(s.a)(e.error);
							r(Object(d.stripeApiError)(t))
						} else r(Object(d.paymentCompleted)({
							confirmed: !1
						}))
					} catch (h) {
						const e = Object(s.a)(h);
						r(Object(d.stripeApiError)(e))
					} else {
						const e = a.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						r(Object(d.stripeApiError)(e))
					}
				}, P = Object(o.a)(y.z), _ = (e, t) => {
					let {
						packageId: r,
						correlationId: a
					} = e;
					return async (e, o, i) => {
						let {
							apiContext: u
						} = i;
						e(O({
							packageId: r,
							correlationId: a
						}, t));
						const l = Object(b.a)(o()),
							f = (null == l ? void 0 : l.paypalButtonId) || n.a.paypal.buttons.premium;
						if (f) try {
							const t = await Object(p.f)({
								buttonId: f,
								context: u(),
								correlationId: a
							});
							if (t.error) {
								const r = Object(s.a)(t.error);
								e(Object(d.paypalApiError)(r))
							} else e(P(t))
						} catch (m) {
							const t = Object(s.a)(m);
							e(Object(d.paypalApiError)(t))
						} else c.c.captureMessage("No Premium packages available on Premium purchase modal")
					}
				}
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return d
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "e", (function() {
				return m
			}));
			var n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				i = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				s = r("./src/reddit/endpoints/gold/purchase.ts");
			const d = async e => {
				let {
					buttonId: t,
					context: r,
					correlationId: d
				} = e;
				const u = {
						button_id: t,
						correlation_id: d
					},
					l = `${r.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					p = Object(i.a)(l);
				return Object(a.a)(Object(o.a)(r, [c.a]), {
					method: n.kb.POST,
					endpoint: p,
					data: u
				}).then(s.c)
			}, u = async e => {
				let {
					context: t,
					coins: r,
					pennies: i,
					correlationId: d
				} = e;
				const u = {
					coins: r,
					pennies: i,
					correlation_id: d
				};
				return Object(a.a)(Object(o.a)(t, [c.a]), {
					method: n.kb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: u
				}).then(s.c)
			}, l = async e => {
				let {
					context: t,
					awardId: r,
					pennies: i,
					thingId: d,
					correlationId: u
				} = e;
				const l = {
					award_id: r,
					correlation_id: u,
					pennies: i,
					thing_id: d
				};
				return Object(a.a)(Object(o.a)(t, [c.a]), {
					method: n.kb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(s.c)
			}, p = async e => {
				let {
					context: t,
					offerContext: r,
					orderId: i,
					coins: d,
					pennies: u,
					correlationId: l
				} = e;
				const p = {
					offer_context: r,
					order_id: i,
					coins: d,
					pennies: u,
					correlation_id: l
				};
				return Object(a.a)(Object(o.a)(t, [c.a]), {
					method: n.kb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: p
				}).then(s.c)
			}, f = async e => {
				let {
					awardId: t,
					context: r,
					coins: i,
					correlationId: d,
					isAnonymous: u,
					message: l,
					offerContext: p,
					orderId: f,
					pennies: m,
					thingId: b
				} = e;
				const y = {
					award_id: t,
					coins: i,
					correlation_id: d,
					is_anonymous: u,
					message: l,
					offer_context: p,
					order_id: f,
					pennies: m,
					thing_id: b
				};
				return Object(a.a)(Object(o.a)(r, [c.a]), {
					method: n.kb.POST,
					endpoint: `${r.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: y
				}).then(s.c)
			}, m = async e => {
				let {
					awardId: t,
					context: r,
					correlationId: i,
					isAnonymous: d,
					message: u,
					orderId: l,
					thingId: p
				} = e;
				const f = {
					award_id: t,
					correlation_id: i,
					is_anonymous: d,
					message: u,
					order_id: l,
					thing_id: p
				};
				return Object(a.a)(Object(o.a)(r, [c.a]), {
					method: n.kb.POST,
					endpoint: `${r.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: f
				}).then(s.c)
			}
		},
		"./src/reddit/endpoints/gold/purchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return p
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "h", (function() {
				return y
			})), r.d(t, "d", (function() {
				return h
			})), r.d(t, "i", (function() {
				return g
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "b", (function() {
				return j
			}));
			var n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/lib/omitHeaders/index.ts"),
				i = r("./src/redditGQL/operations/ChangeStripePaymentMethod.json"),
				s = r("./src/reddit/constants/headers.ts"),
				d = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = r("./src/reddit/helpers/genericServerError/index.ts"),
				l = r("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const p = e => e.ok ? e.body.json && e.body.json.errors.length ? {
					...e,
					ok: !1,
					error: Object(l.a)(e)
				} : {
					...e
				} : {
					...e,
					error: e.error || Object(u.a)()
				},
				f = async e => {
					let {
						coins: t,
						context: r,
						correlationId: o,
						offerContext: i,
						pennies: u,
						rememberCard: l,
						token: f,
						savedCardId: m
					} = e;
					const b = {
							token: f ? f.id : void 0,
							coins: t,
							offer_context: i,
							pennies: u,
							remember_card: l,
							card_id: m,
							correlation_id: o
						},
						y = `${r.apiUrl}/api/v2/gold/stripe/buy_coins`,
						h = Object(d.a)(y);
					return Object(a.a)(Object(c.a)(r, [s.a]), {
						method: n.kb.POST,
						endpoint: h,
						data: b
					}).then(p)
				}, m = async e => {
					let {
						coins: t,
						context: r,
						correlationId: o,
						gildParams: i,
						isOldReddit: u,
						offerContext: l,
						pennies: f,
						rememberCard: m,
						thingId: b,
						token: y,
						savedCardId: h
					} = e;
					const {
						gildType: g,
						isAnonymous: O,
						message: j
					} = i, v = {
						token: y ? y.id : void 0,
						coins: t,
						offer_context: l,
						pennies: f,
						thing_id: b,
						gild_type: g,
						message: j ? j.trim() : "",
						is_anonymous: O,
						remember_card: m,
						card_id: h,
						correlation_id: o
					}, P = `${r.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, _ = u ? P : Object(d.a)(P);
					return Object(a.a)(Object(c.a)(r, [s.a]), {
						method: n.kb.POST,
						endpoint: _,
						data: v
					}).then(p)
				}, b = async e => {
					let {
						context: t,
						correlationId: r,
						gildParams: o,
						isOldReddit: i,
						pennies: u,
						rememberCard: l,
						thingId: f,
						token: m,
						savedCardId: b
					} = e;
					const {
						gildType: y,
						isAnonymous: h,
						message: g
					} = o, O = {
						token: m ? m.id : void 0,
						thing_id: f,
						award_id: y,
						message: g ? g.trim() : "",
						is_anonymous: h,
						pennies: u,
						remember_card: l,
						card_id: b,
						correlation_id: r
					}, j = `${t.apiUrl}/api/v2/gold/stripe/buy_award`, v = i ? j : Object(d.a)(j);
					return Object(a.a)(Object(c.a)(t, [s.a]), {
						method: n.kb.POST,
						endpoint: v,
						data: O
					}).then(p)
				}, y = async e => {
					let {
						context: t,
						correlationId: r,
						pennies: o,
						token: i
					} = e;
					const u = {
							token: i.id,
							pennies: o,
							correlation_id: r
						},
						l = `${t.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						f = Object(d.a)(l);
					return Object(a.a)(Object(c.a)(t, [s.a]), {
						method: n.kb.POST,
						endpoint: f,
						data: u
					}).then(p)
				}, h = "paymentInfoUpdated", g = async e => {
					const {
						origin: t
					} = window.location, r = `${t}/settings/premium`, n = new URLSearchParams({
						[h]: "true"
					}), a = await Object(o.a)(e, {
						...i,
						variables: {
							successUrl: `${r}?${n}`,
							cancelUrl: `${r}`
						}
					});
					if (!a.ok) throw new Error("Unable to update payment information");
					return a.body.data.changeStripePaymentMethod.sessionId
				}, O = async (e, t) => {
					const r = {
						card_id: t
					};
					return Object(a.a)(Object(c.a)(e, [s.a]), {
						method: n.kb.POST,
						endpoint: `${e.apiUrl}/api/v2/gold/stripe/delete_creditcard`,
						data: r
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(l.a)(e)
					})
				}, j = async e => Object(a.a)(Object(c.a)(e, [s.a]), {
					method: n.kb.GET,
					endpoint: `${e.apiUrl}/api/v2/gold/stripe/creditcards`
				}).then(e => e.ok ? {
					...e
				} : {
					...e,
					error: Object(l.a)(e)
				})
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/constants/index.ts");
			t.a = () => ({
				type: a.J.SERVER_ERROR,
				fields: [{
					field: "",
					msg: n.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "q", (function() {
				return c
			})), r.d(t, "s", (function() {
				return i
			})), r.d(t, "r", (function() {
				return s
			})), r.d(t, "u", (function() {
				return d
			})), r.d(t, "t", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "p", (function() {
				return p
			})), r.d(t, "a", (function() {
				return f
			})), r.d(t, "n", (function() {
				return m
			})), r.d(t, "o", (function() {
				return b
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "l", (function() {
				return g
			})), r.d(t, "w", (function() {
				return O
			})), r.d(t, "x", (function() {
				return j
			})), r.d(t, "v", (function() {
				return v
			})), r.d(t, "y", (function() {
				return P
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "g", (function() {
				return E
			})), r.d(t, "i", (function() {
				return k
			})), r.d(t, "k", (function() {
				return C
			})), r.d(t, "j", (function() {
				return x
			})), r.d(t, "m", (function() {
				return I
			})), r.d(t, "e", (function() {
				return w
			})), r.d(t, "d", (function() {
				return S
			}));
			var n = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				a = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(a.a)({
				features: {
					goldPurchase: o.a
				}
			});
			const c = e => e.features.goldPurchase.purchaseModal.activePage,
				i = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				s = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				u = e => e.features.goldPurchase.purchaseModal.packageId,
				l = e => e.features.goldPurchase.packageOfferModal.packageId,
				p = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				f = e => {
					const t = Object(n.l)(e),
						r = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && r && t.find(e => e.mobileId === r) || null
				},
				m = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				b = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				y = e => e.features.goldPurchase.payment.paymentMethod,
				h = e => e.features.goldPurchase.payment.cardName,
				g = e => e.features.goldPurchase.payment.postalCode,
				O = e => e.features.goldPurchase.payment.savedCardsPending,
				j = e => e.features.goldPurchase.payment.savedCards,
				v = e => e.features.goldPurchase.payment.rememberCard,
				P = e => e.features.goldPurchase.payment.useSavedCard,
				_ = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				E = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				k = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				C = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				x = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				I = e => e.features.goldPurchase.payment.stripeToken.pending,
				w = e => e.features.goldPurchase.payment.paypal.passthrough,
				S = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/redditGQL/operations/ChangeStripePaymentMethod.json": function(e) {
			e.exports = JSON.parse('{"id":"ce700fb9b230"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GoldPurchasePaymentActions.d45ce5b8555eab512742.js.map