// https://www.redditstatic.com/desktop2x/GoldPurchasePaymentActions.ad59efef80013758d0ec.js
// Retrieved at 6/8/2023, 8:50:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GoldPurchasePaymentActions"], {
		"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js": function(e, t, r) {
			! function(e, t) {
				"use strict";
				t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
				var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

				function n() {}

				function o() {}
				o.resetWarningCache = n;
				var a = function(e, t) {
					return e(t = {
						exports: {}
					}, t.exports), t.exports
				}((function(e) {
					e.exports = function() {
						function e(e, t, n, o, a, c) {
							if (c !== r) {
								var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
								throw i.name = "Invariant Violation", i
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
							resetWarningCache: n
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
								o = !1,
								a = void 0;
							try {
								for (var c, i = e[Symbol.iterator](); !(n = (c = i.next()).done) && (r.push(c.value), !t || r.length !== t); n = !0);
							} catch (s) {
								o = !0, a = s
							} finally {
								try {
									n || null == i.return || i.return()
								} finally {
									if (o) throw a
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
						return f(e) ? Object.keys(e).reduce((function(n, o) {
							var a = !f(t) || ! function e(t, r) {
								if (!f(t) || !f(r)) return t === r;
								var n = Array.isArray(t);
								if (n !== Array.isArray(r)) return !1;
								var o = "[object Object]" === Object.prototype.toString.call(t);
								if (o !== ("[object Object]" === Object.prototype.toString.call(r))) return !1;
								if (!o && !n) return !1;
								var a = Object.keys(t),
									c = Object.keys(r);
								if (a.length !== c.length) return !1;
								for (var i = {}, s = 0; s < a.length; s += 1) i[a[s]] = !0;
								for (var d = 0; d < c.length; d += 1) i[c[d]] = !0;
								var u = Object.keys(i);
								if (u.length !== a.length) return !1;
								var l = t,
									p = r;
								return u.every((function(t) {
									return e(l[t], p[t])
								}))
							}(e[o], t[o]);
							return r.includes(o) ? (a && console.warn("Unsupported prop change: options.".concat(o, " is not a mutable property.")), n) : a ? d(d({}, n || {}), {}, i({}, o, e[o])) : n
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
						o = e.children,
						a = t.useRef(!1),
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
					null !== f && f !== r && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), a.current || ("sync" === i.tag && (a.current = !0, l({
						stripe: i.stripe,
						elements: i.stripe.elements(n)
					})), "async" === i.tag && (a.current = !0, i.stripePromise.then((function(e) {
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
					}, o)
				};
				g.propTypes = {
					stripe: a.any,
					options: a.object
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
					children: a.func.isRequired
				};
				var P = function(e) {
						var r = t.useRef(e);
						return t.useEffect((function() {
								r.current = e
							}), [e]),
							function() {
								r.current && r.current.apply(r, arguments)
							}
					},
					v = function() {},
					_ = function(e, r) {
						var n, o = "".concat((n = e).charAt(0).toUpperCase() + n.slice(1), "Element"),
							c = r ? function(e) {
								O("mounts <".concat(o, ">"));
								var r = e.id,
									n = e.className;
								return t.createElement("div", {
									id: r,
									className: n
								})
							} : function(r) {
								var n = r.id,
									a = r.className,
									c = r.options,
									i = void 0 === c ? {} : c,
									s = r.onBlur,
									d = void 0 === s ? v : s,
									u = r.onFocus,
									l = void 0 === u ? v : u,
									f = r.onReady,
									b = void 0 === f ? v : f,
									y = r.onChange,
									h = void 0 === y ? v : y,
									g = r.onEscape,
									j = void 0 === g ? v : g,
									_ = r.onClick,
									E = void 0 === _ ? v : _,
									C = O("mounts <".concat(o, ">")).elements,
									k = t.useRef(null),
									I = t.useRef(null),
									x = P(b),
									w = P(d),
									S = P(l),
									A = P(E),
									M = P(h),
									R = P(j);
								t.useLayoutEffect((function() {
									if (null == k.current && C && null != I.current) {
										var t = C.create(e, i);
										k.current = t, t.mount(I.current), t.on("ready", (function() {
											return x(t)
										})), t.on("change", M), t.on("blur", w), t.on("focus", S), t.on("escape", R), t.on("click", A)
									}
								}));
								var T = p(i);
								return t.useEffect((function() {
									if (k.current) {
										var e = m(i, T, ["paymentRequest"]);
										e && k.current.update(e)
									}
								}), [i, T]), t.useLayoutEffect((function() {
									return function() {
										k.current && k.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: a,
									ref: I
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
					E = "undefined" == typeof window,
					C = _("auBankAccount", E),
					k = _("card", E),
					I = _("cardNumber", E),
					x = _("cardExpiry", E),
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
				e.AfterpayClearpayMessageElement = $, e.AuBankAccountElement = C, e.CardCvcElement = w, e.CardElement = k, e.CardExpiryElement = x, e.CardNumberElement = I, e.Elements = g, e.ElementsConsumer = j, e.EpsBankElement = T, e.FpxBankElement = S, e.IbanElement = A, e.IdealBankElement = M, e.LinkAuthenticationElement = B, e.P24BankElement = R, e.PaymentElement = U, e.PaymentRequestButtonElement = N, e.ShippingAddressElement = L, e.useElements = function() {
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
				return s
			})), r.d(t, "paymentCompleted", (function() {
				return d
			})), r.d(t, "cardNameInput", (function() {
				return u
			})), r.d(t, "postalCodeInput", (function() {
				return l
			})), r.d(t, "cardNameEmpty", (function() {
				return p
			})), r.d(t, "postalCodeEmpty", (function() {
				return f
			})), r.d(t, "cardNumberChange", (function() {
				return m
			})), r.d(t, "cardExpiryChange", (function() {
				return b
			})), r.d(t, "cardCvcChange", (function() {
				return y
			})), r.d(t, "stripeTokenPending", (function() {
				return h
			})), r.d(t, "stripeTokenError", (function() {
				return g
			})), r.d(t, "stripeApiError", (function() {
				return O
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return j
			})), r.d(t, "paypalApiError", (function() {
				return P
			})), r.d(t, "toggleRememberCard", (function() {
				return v
			})), r.d(t, "selectSavedCard", (function() {
				return _
			})), r.d(t, "deleteSavedCard", (function() {
				return E
			})), r.d(t, "savedCardsPending", (function() {
				return C
			})), r.d(t, "savedCardsSuccess", (function() {
				return k
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const s = Object(a.a)(i.G),
				d = Object(a.a)(i.A),
				u = Object(a.a)(i.b),
				l = Object(a.a)(i.D),
				p = Object(a.a)(i.a),
				f = Object(a.a)(i.C),
				m = Object(a.a)(i.L),
				b = Object(a.a)(i.K),
				y = Object(a.a)(i.J),
				h = Object(a.a)(i.N),
				g = Object(a.a)(i.M),
				O = Object(a.a)(i.I),
				j = (e, t) => async (r, a) => {
					const i = a(),
						s = Object(c.h)(i),
						d = Object(c.l)(i),
						u = t.getElement(n.CardNumberElement);
					if (!u) return;
					const {
						token: l,
						error: m
					} = await e.createToken(u, {
						name: s,
						address_zip: d
					}), b = !d.trim();
					if (b) {
						const e = o.fbt._("Your ZIP code is incomplete", null, {
							hk: "4bttPr"
						});
						r(f({
							message: e
						}))
					}
					m && r(g(m));
					const y = !s.trim();
					if (y) {
						const e = o.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(p({
							message: e
						}))
					}
					return b || m || y ? void 0 : l
				}, P = Object(a.a)(i.B), v = Object(a.a)(i.O), _ = Object(a.a)(i.H), E = Object(a.a)(i.g), C = Object(a.a)(i.E), k = Object(a.a)(i.F)
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
				return P
			})), r.d(t, "paymentBlobCreated", (function() {
				return v
			})), r.d(t, "openWithBlob", (function() {
				return _
			}));
			var n = r("./src/config.ts"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
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
			const h = Object(a.a)(y.x),
				g = Object(a.a)(y.e),
				O = (e, t) => async r => {
					r(h(e)), r(Object(u.h)(l.a.ECON_PREMIUM_PURCHASE, t))
				}, j = () => async e => {
					e(Object(u.g)(l.a.ECON_PREMIUM_PURCHASE)), e(g())
				}, P = (e, t) => async (r, n, a) => {
					let {
						apiContext: c
					} = a;
					const u = Object(b.a)(n()),
						l = (null == u ? void 0 : u.pennies) || i.Eb,
						p = Object(m.c)(m.a.GoldPayment);
					r(Object(d.stripeTokenPending)());
					const y = await r(Object(d.validateAndCreateStripeToken)(e, t));
					if (y) try {
						const e = await Object(f.f)({
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
						const e = o.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						r(Object(d.stripeApiError)(e))
					}
				}, v = Object(a.a)(y.z), _ = (e, t) => {
					let {
						packageId: r,
						correlationId: o
					} = e;
					return async (e, a, i) => {
						let {
							apiContext: u
						} = i;
						e(O({
							packageId: r,
							correlationId: o
						}, t));
						const l = Object(b.a)(a()),
							f = (null == l ? void 0 : l.paypalButtonId) || n.a.paypal.buttons.premium;
						if (f) try {
							const t = await Object(p.f)({
								buttonId: f,
								context: u(),
								correlationId: o
							});
							if (t.error) {
								const r = Object(s.a)(t.error);
								e(Object(d.paypalApiError)(r))
							} else e(v(t))
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
				o = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/omitHeaders/index.ts"),
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
				return Object(o.a)(Object(a.a)(r, [c.a]), {
					method: n.ob.POST,
					endpoint: p,
					data: u
				}).then(s.a)
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
				return Object(o.a)(Object(a.a)(t, [c.a]), {
					method: n.ob.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: u
				}).then(s.a)
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
				return Object(o.a)(Object(a.a)(t, [c.a]), {
					method: n.ob.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(s.a)
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
				return Object(o.a)(Object(a.a)(t, [c.a]), {
					method: n.ob.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: p
				}).then(s.a)
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
				return Object(o.a)(Object(a.a)(r, [c.a]), {
					method: n.ob.POST,
					endpoint: `${r.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: y
				}).then(s.a)
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
				return Object(o.a)(Object(a.a)(r, [c.a]), {
					method: n.ob.POST,
					endpoint: `${r.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: f
				}).then(s.a)
			}
		},
		"./src/reddit/endpoints/gold/purchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "f", (function() {
				return y
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "g", (function() {
				return g
			}));
			var n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
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
						correlationId: a,
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
							correlation_id: a
						},
						y = `${r.apiUrl}/api/v2/gold/stripe/buy_coins`,
						h = Object(d.a)(y);
					return Object(o.a)(Object(c.a)(r, [s.a]), {
						method: n.ob.POST,
						endpoint: h,
						data: b
					}).then(p)
				}, m = async e => {
					let {
						coins: t,
						context: r,
						correlationId: a,
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
					} = i, P = {
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
						correlation_id: a
					}, v = `${r.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, _ = u ? v : Object(d.a)(v);
					return Object(o.a)(Object(c.a)(r, [s.a]), {
						method: n.ob.POST,
						endpoint: _,
						data: P
					}).then(p)
				}, b = async e => {
					let {
						context: t,
						correlationId: r,
						gildParams: a,
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
					} = a, O = {
						token: m ? m.id : void 0,
						thing_id: f,
						award_id: y,
						message: g ? g.trim() : "",
						is_anonymous: h,
						pennies: u,
						remember_card: l,
						card_id: b,
						correlation_id: r
					}, j = `${t.apiUrl}/api/v2/gold/stripe/buy_award`, P = i ? j : Object(d.a)(j);
					return Object(o.a)(Object(c.a)(t, [s.a]), {
						method: n.ob.POST,
						endpoint: P,
						data: O
					}).then(p)
				}, y = async e => {
					let {
						context: t,
						correlationId: r,
						pennies: a,
						token: i
					} = e;
					const u = {
							token: i.id,
							pennies: a,
							correlation_id: r
						},
						l = `${t.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						f = Object(d.a)(l);
					return Object(o.a)(Object(c.a)(t, [s.a]), {
						method: n.ob.POST,
						endpoint: f,
						data: u
					}).then(p)
				}, h = "paymentInfoUpdated", g = async e => {
					const {
						origin: t
					} = window.location, r = `${t}/settings/premium`, n = new URLSearchParams({
						[h]: "true"
					}), o = await Object(a.a)(e, {
						...i,
						variables: {
							successUrl: `${r}?${n}`,
							cancelUrl: `${r}`
						}
					});
					if (!o.ok) throw new Error("Unable to update payment information");
					return o.body.data.changeStripePaymentMethod.sessionId
				}
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/constants/index.ts");
			t.a = () => ({
				type: o.K.SERVER_ERROR,
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
			r.d(t, "r", (function() {
				return c
			})), r.d(t, "t", (function() {
				return i
			})), r.d(t, "s", (function() {
				return s
			})), r.d(t, "v", (function() {
				return d
			})), r.d(t, "u", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "q", (function() {
				return p
			})), r.d(t, "a", (function() {
				return f
			})), r.d(t, "o", (function() {
				return m
			})), r.d(t, "p", (function() {
				return b
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "l", (function() {
				return g
			})), r.d(t, "x", (function() {
				return O
			})), r.d(t, "y", (function() {
				return j
			})), r.d(t, "w", (function() {
				return P
			})), r.d(t, "z", (function() {
				return v
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "g", (function() {
				return E
			})), r.d(t, "i", (function() {
				return C
			})), r.d(t, "k", (function() {
				return k
			})), r.d(t, "m", (function() {
				return I
			})), r.d(t, "j", (function() {
				return x
			})), r.d(t, "n", (function() {
				return w
			})), r.d(t, "e", (function() {
				return S
			})), r.d(t, "d", (function() {
				return A
			}));
			var n = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(o.a)({
				features: {
					goldPurchase: a.a
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
					const t = Object(n.i)(e),
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
				P = e => e.features.goldPurchase.payment.rememberCard,
				v = e => e.features.goldPurchase.payment.useSavedCard,
				_ = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				E = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				C = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				k = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				I = e => e.features.goldPurchase.payment.cardValidation.postalCode,
				x = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				w = e => e.features.goldPurchase.payment.stripeToken.pending,
				S = e => e.features.goldPurchase.payment.paypal.passthrough,
				A = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/redditGQL/operations/ChangeStripePaymentMethod.json": function(e) {
			e.exports = JSON.parse('{"id":"ce700fb9b230"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GoldPurchasePaymentActions.ad59efef80013758d0ec.js.map