// https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.9b376eaaeccfbcea2399.js
// Retrieved at 7/5/2023, 1:50:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-pages-PaypalFinishPage"], {
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
					y = function(e) {
						if (null === e || f(t = e) && "function" == typeof t.elements && "function" == typeof t.createToken && "function" == typeof t.createPaymentMethod && "function" == typeof t.confirmCardPayment) return e;
						var t;
						throw new Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
					},
					b = function(e) {
						if (function(e) {
								return f(e) && "function" == typeof e.then
							}(e)) return {
							tag: "async",
							stripePromise: Promise.resolve(e).then(y)
						};
						var t = y(e);
						return null === t ? {
							tag: "empty"
						} : {
							tag: "sync",
							stripe: t
						}
					},
					g = t.createContext(null);
				g.displayName = "ElementsContext";
				var v = function(e) {
					var r = e.stripe,
						n = e.options,
						o = e.children,
						a = t.useRef(!1),
						c = t.useRef(!0),
						i = t.useMemo((function() {
							return b(r)
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
					var y = p(n);
					return t.useEffect((function() {
						if (d.elements) {
							var e = m(n, y, ["clientSecret", "fonts"]);
							e && d.elements.update(e)
						}
					}), [n, y, d.elements]), t.useEffect((function() {
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
					}), [d.stripe]), t.createElement(g.Provider, {
						value: d
					}, o)
				};
				v.propTypes = {
					stripe: a.any,
					options: a.object
				};
				var j = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(g), e)
					},
					O = function(e) {
						return (0, e.children)(j("mounts <ElementsConsumer>"))
					};
				O.propTypes = {
					children: a.func.isRequired
				};
				var h = function(e) {
						var r = t.useRef(e);
						return t.useEffect((function() {
								r.current = e
							}), [e]),
							function() {
								r.current && r.current.apply(r, arguments)
							}
					},
					E = function() {},
					P = function(e, r) {
						var n, o = "".concat((n = e).charAt(0).toUpperCase() + n.slice(1), "Element"),
							c = r ? function(e) {
								j("mounts <".concat(o, ">"));
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
									d = void 0 === s ? E : s,
									u = r.onFocus,
									l = void 0 === u ? E : u,
									f = r.onReady,
									y = void 0 === f ? E : f,
									b = r.onChange,
									g = void 0 === b ? E : b,
									v = r.onEscape,
									O = void 0 === v ? E : v,
									P = r.onClick,
									C = void 0 === P ? E : P,
									S = j("mounts <".concat(o, ">")).elements,
									x = t.useRef(null),
									w = t.useRef(null),
									k = h(y),
									A = h(d),
									_ = h(l),
									I = h(C),
									N = h(g),
									L = h(O);
								t.useLayoutEffect((function() {
									if (null == x.current && S && null != w.current) {
										var t = S.create(e, i);
										x.current = t, t.mount(w.current), t.on("ready", (function() {
											return k(t)
										})), t.on("change", N), t.on("blur", A), t.on("focus", _), t.on("escape", L), t.on("click", I)
									}
								}));
								var R = p(i);
								return t.useEffect((function() {
									if (x.current) {
										var e = m(i, R, ["paymentRequest"]);
										e && x.current.update(e)
									}
								}), [i, R]), t.useLayoutEffect((function() {
									return function() {
										x.current && x.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: a,
									ref: w
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
					S = P("auBankAccount", C),
					x = P("card", C),
					w = P("cardNumber", C),
					k = P("cardExpiry", C),
					A = P("cardCvc", C),
					_ = P("fpxBank", C),
					I = P("iban", C),
					N = P("idealBank", C),
					L = P("p24Bank", C),
					R = P("epsBank", C),
					T = P("payment", C),
					G = P("paymentRequestButton", C),
					Q = P("linkAuthentication", C),
					D = P("shippingAddress", C),
					B = P("afterpayClearpayMessage", C);
				e.AfterpayClearpayMessageElement = B, e.AuBankAccountElement = S, e.CardCvcElement = A, e.CardElement = x, e.CardExpiryElement = k, e.CardNumberElement = w, e.Elements = v, e.ElementsConsumer = O, e.EpsBankElement = R, e.FpxBankElement = _, e.IbanElement = I, e.IdealBankElement = N, e.LinkAuthenticationElement = Q, e.P24BankElement = L, e.PaymentElement = T, e.PaymentRequestButtonElement = G, e.ShippingAddressElement = D, e.useElements = function() {
					return j("calls useElements()").elements
				}, e.useStripe = function() {
					return j("calls useStripe()").stripe
				}, Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}(t, r("./node_modules/react/index.js"))
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return P
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "i", (function() {
				return k
			})), r.d(t, "g", (function() {
				return A
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "d", (function() {
				return I
			})), r.d(t, "b", (function() {
				return N
			})), r.d(t, "e", (function() {
				return R
			})), r.d(t, "h", (function() {
				return T
			}));
			var n, o = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/omit.js"),
				c = r.n(a),
				i = r("./node_modules/uuid/dist/esm-browser/v4.js"),
				s = r("./src/config.ts"),
				d = (r("./src/reddit/actions/toaster.ts"), r("./src/lib/addQueryParams/index.ts")),
				u = r("./src/lib/makeActionCreator/index.ts"),
				l = r("./src/lib/sentry/index.ts"),
				p = r("./src/reddit/models/Gold/ProductOffer.ts"),
				f = (r("./src/reddit/models/Toast/index.ts"), r("./src/reddit/actions/gold/constants.ts")),
				m = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				y = r("./src/reddit/selectors/experiments/econ/index.ts"),
				b = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				v = r("./src/reddit/endpoints/gold/productOfferPurchase/index.ts"),
				j = r("./src/redditGQL/types.ts");
			! function(e) {
				e.GenericError = "GenericPurchaseError", e.AccountAgeRestriction = "AccountAgeRestrictionError", e.RateLimiting = "RateLimitingCheckError"
			}(n || (n = {}));
			const O = () => o.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				h = (e, t) => !!(null == e ? void 0 : e.find(e => e.code === t)),
				E = e => e.map(e => e.message).join(" : "),
				P = (e, t, r, n, a) => async (c, s, d) => {
					let {
						gqlContext: u
					} = d;
					const l = Object(i.a)(),
						p = await Object(v.f)(u(), l, e, t, r, n, a),
						f = p.body,
						{
							errors: m,
							order: y
						} = f.data.createEconOrder;
					if (m && m.length && C(m), p.ok && y) return y.id;
					throw new Error(o.fbt._("Sorry, unable to complete purchase. Your account was not charged.", null, {
						hk: "32LzSN"
					}))
				}, C = e => {
					if (h(e, n.GenericError)) throw new Error(o.fbt._("Sorry, unable to complete purchase. Your account was not charged.", null, {
						hk: "1uV3pC"
					}));
					if (h(e, n.AccountAgeRestriction)) throw new Error(o.fbt._("Your account isn’t old enough to complete this type of purchase yet.", null, {
						hk: "3TMbsU"
					}));
					if (h(e, n.RateLimiting)) throw new Error(o.fbt._("You’ve reached your purchase limit. Try again later", null, {
						hk: "1TwpTd"
					}));
					throw new Error(o.fbt._("Sorry, unable to complete purchase. Your account was not charged.", null, {
						hk: "32LzSN"
					}))
				}, S = (e, t) => {
					var r, n;
					(null === (n = null === (r = e.payment_intent) || void 0 === r ? void 0 : r.last_payment_error) || void 0 === n ? void 0 : n.message) ? t(Object(m.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(m.stripeApiError)(e.message)) : t(x)
				}, x = Object(m.stripeApiError)(o.fbt._("Something went wrong during payment creation", null, {
					hk: "2LgB2E"
				})), w = e => !!e && e.hasOwnProperty("success"), k = e => {
					let {
						stripe: t,
						stripeElements: r,
						productOffer: n,
						pricePackage: o,
						productsCount: a,
						extraParams: c
					} = e;
					return async (e, s, d) => {
						let {
							gqlContext: u
						} = d;
						var f, g;
						const O = s();
						let h, C, w = "";
						try {
							w = await e(P(n, o, a, c, j.K.Stripe))
						} catch (A) {
							return l.c.captureException(A), void(A.message && e(Object(m.stripeApiError)(A.message)))
						}
						e(Object(m.stripeTokenPending)());
						const k = Object(b.z)(O);
						if (k || (h = await e(Object(m.validateAndCreateStripeToken)(t, r)), C = Object(b.w)(O), h))
							if (n.type === p.c.Coinpack && Object(y.p)(O)) try {
								const r = await Object(v.g)(u(), {
									orderId: w,
									provider: j.K.Stripe
								});
								if (!(null == r ? void 0 : r.ok)) return void e(x);
								const {
									body: n
								} = r;
								if (!("data" in n)) return void e(x);
								const {
									errors: o,
									ok: a,
									paymentIntent: c
								} = null !== (f = n.data.createPaymentIntent) && void 0 !== f ? f : {};
								if (null == o ? void 0 : o.length) return void e(Object(m.stripeApiError)(E(o)));
								if (!a || !c) return void e(x);
								const {
									error: i
								} = await t.confirmCardPayment(c.id, {
									payment_method: {
										card: {
											token: h.id
										}
									}
								});
								return i ? S(i, e) : {
									success: !0
								}
							} catch (A) {
								l.c.captureException(A), e(x)
							} else try {
								const r = Object(i.a)(),
									n = k || C ? h && C ? Object(v.i)(u(), r, w, h.id) : k ? Object(v.k)(u(), r, w, k) : null : Object(v.j)(u(), r, w, h.id),
									o = await n;
								if (!(null == o ? void 0 : o.ok)) return void e(x);
								const a = o.body.data.createEconPayment;
								if (null === (g = null == a ? void 0 : a.errors) || void 0 === g ? void 0 : g.length) return void e(Object(m.stripeApiError)(E(a.errors)));
								const {
									ok: c,
									payment: s,
									providerExecution: {
										paymentIntentClientSecret: d
									}
								} = a;
								if (c && s.status === v.a.ActionRequired) {
									const r = await t.confirmCardPayment(d),
										{
											error: n
										} = r;
									if (n) return S(n, e);
									let o;
									if (!(o = k ? await Object(v.e)(u(), Object(i.a)(), s.id, k) : await Object(v.d)(u(), Object(i.a)(), s.id, h.id, C)).ok) return void e(x);
									const a = o.body;
									if (!a.data.confirmEconPayment.ok || a.data.confirmEconPayment.payment.status !== v.a.Paid) return void e(x)
								} else if (c && s.status !== v.a.Paid) return void e(x);
								return {
									success: !0
								}
							} catch (A) {
								l.c.captureException(A), e(x)
							}
					}
				}, A = e => {
					let {
						productOffer: t,
						pricePackage: r,
						productsCount: n,
						extraParams: o,
						overrideModalParams: a
					} = e;
					return async (e, c, u) => {
						let {
							gqlContext: p
						} = u;
						var f;
						let y = "";
						try {
							y = await e(P(t, r, n, o, j.K.Paypal))
						} catch (C) {
							return l.c.captureException(C), C.message && e(Object(m.paypalApiError)(C.message)), null
						}
						const b = s.a.redditUrl,
							h = {
								_o: b,
								o: y,
								pt: t.type,
								...a
							};
						try {
							const t = Object(d.a)(`${b}/framedModal/paypal-finish`, {
									...h,
									s: !0
								}),
								r = Object(d.a)(`${b}/framedModal/paypal-finish`, h),
								n = Object(i.a)(),
								o = await Object(v.h)(p(), n, y, t, r);
							if (o && o.ok) {
								const t = o.body.data.createEconPayment;
								if (null === (f = null == t ? void 0 : t.errors) || void 0 === f ? void 0 : f.length) return e(Object(m.paypalApiError)(E(t.errors))), null;
								const r = Object(g.m)(c());
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
						} catch (C) {
							l.c.captureException(C)
						}
						return e(Object(m.paypalApiError)(O())), null
					}
				}, _ = (e, t) => async (r, n, o) => {
					let {
						gqlContext: a
					} = o;
					var c;
					try {
						const n = Object(i.a)(),
							o = await Object(v.c)(a(), n, e, t);
						if (o && o.ok) {
							const e = o.body.data.confirmEconPayment;
							if (null === (c = null == e ? void 0 : e.errors) || void 0 === c ? void 0 : c.length) return r(Object(m.paypalApiError)(E(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (s) {
						l.c.captureException(s)
					}
					return r(Object(m.paypalApiError)(O())), !1
				}, I = () => async (e, t, r) => {
					let {
						gqlContext: n
					} = r;
					var a;
					if (e(Object(m.savedCardsPending)()), Object(y.p)(t())) e(Object(m.savedCardsSuccess)([]));
					else try {
						const t = await Object(v.m)(n());
						if (t.error) throw e(Object(m.stripeApiError)(o.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						}))), new Error(t.error.type);
						const r = t.body;
						(null === (a = r.errors) || void 0 === a ? void 0 : a.length) && e(Object(m.stripeApiError)(r.errors[0].message));
						const {
							savedStripeCards: i
						} = r.data.identity, s = i.map(e => c()({
							...e,
							cardId: e.id
						}, "id"));
						e(Object(m.savedCardsSuccess)(s)), s[0] && e(Object(m.selectSavedCard)(s[0].cardId))
					} catch (i) {
						l.c.captureException(i), e(Object(m.savedCardsSuccess)([]))
					}
				}, N = e => async (t, r, n) => {
					let {
						gqlContext: o
					} = n;
					t(Object(m.deleteSavedCard)(e));
					try {
						const t = await Object(v.l)(o(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: n
							} = r.data.deleteEconPaymentMethod;
						if (n && n.length) throw new Error(E(n))
					} catch (a) {
						l.c.captureException(a)
					}
				}, L = (Object(u.a)(f.M), Object(u.a)(f.N), Object(u.a)(f.O), Object(u.a)(f.P)), R = e => {
					let {
						user: t
					} = e;
					return async e => {
						e(L({
							user: t
						}))
					}
				}, T = Object(u.a)(f.T)
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
				return y
			})), r.d(t, "cardCvcChange", (function() {
				return b
			})), r.d(t, "stripeTokenPending", (function() {
				return g
			})), r.d(t, "stripeTokenError", (function() {
				return v
			})), r.d(t, "stripeApiError", (function() {
				return j
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return O
			})), r.d(t, "paypalApiError", (function() {
				return h
			})), r.d(t, "toggleRememberCard", (function() {
				return E
			})), r.d(t, "selectSavedCard", (function() {
				return P
			})), r.d(t, "deleteSavedCard", (function() {
				return C
			})), r.d(t, "savedCardsPending", (function() {
				return S
			})), r.d(t, "savedCardsSuccess", (function() {
				return x
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
				y = Object(a.a)(i.K),
				b = Object(a.a)(i.J),
				g = Object(a.a)(i.N),
				v = Object(a.a)(i.M),
				j = Object(a.a)(i.I),
				O = (e, t) => async (r, a) => {
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
					}), y = !d.trim();
					if (y) {
						const e = o.fbt._("Your ZIP code is incomplete", null, {
							hk: "4bttPr"
						});
						r(f({
							message: e
						}))
					}
					m && r(v(m));
					const b = !s.trim();
					if (b) {
						const e = o.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(p({
							message: e
						}))
					}
					return y || m || b ? void 0 : l
				}, h = Object(a.a)(i.B), E = Object(a.a)(i.O), P = Object(a.a)(i.H), C = Object(a.a)(i.g), S = Object(a.a)(i.E), x = Object(a.a)(i.F)
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
				o = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = r.n(c);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: n = 10
				} = e;
				return o.a.createElement("div", {
					className: Object(a.a)(i.a.loadingIcon, r, {
						[i.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${n}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/endpoints/gold/productOfferPurchase/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return v
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "a", (function() {
				return O
			})), r.d(t, "j", (function() {
				return h
			})), r.d(t, "i", (function() {
				return E
			})), r.d(t, "k", (function() {
				return P
			})), r.d(t, "h", (function() {
				return C
			})), r.d(t, "c", (function() {
				return S
			})), r.d(t, "e", (function() {
				return x
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "b", (function() {
				return k
			})), r.d(t, "m", (function() {
				return A
			})), r.d(t, "l", (function() {
				return _
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				o = r.n(n),
				a = r("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				c = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				i = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				s = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = r("./src/redditGQL/operations/CreateEconOrder.json"),
				u = r("./src/redditGQL/operations/CreatePaymentIntent.json"),
				l = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				p = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				f = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				m = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				y = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				b = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				g = r("./src/lib/makeGqlRequest/index.ts");
			const v = (e, t, r, n, a, c, i) => {
					const s = new o.a(n.price).multipliedBy(a).toFixed();
					return Object(g.a)(e, {
						...d,
						variables: {
							input: {
								nonce: t,
								productId: r.id,
								productVersion: r.version,
								pricePackageId: n.id,
								currency: n.currency,
								price: s,
								productsCount: a.toString(),
								...c,
								paymentProvider: i
							}
						}
					})
				},
				j = (e, t) => Object(g.a)(e, {
					...u,
					variables: {
						input: t
					}
				});
			var O;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(O || (O = {}));
			const h = (e, t, r, n) => Object(g.a)(e, {
					...f,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				E = (e, t, r, n) => Object(g.a)(e, {
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
						cardId: n
					}
				}),
				C = (e, t, r, n, o) => Object(g.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: r,
						successUrl: n,
						cancelUrl: o
					}
				}),
				S = (e, t, r, n) => Object(g.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: r,
						token: n
					}
				}),
				x = (e, t, r, n) => Object(g.a)(e, {
					...s,
					variables: {
						nonce: t,
						paymentId: r,
						cardId: n
					}
				}),
				w = (e, t, r, n, o) => Object(g.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
						saveCard: o
					}
				}),
				k = (e, t) => Object(g.a)(e, {
					...a,
					variables: {
						orderId: t
					}
				}),
				A = e => Object(g.a)(e, {
					...b,
					variables: {}
				}),
				_ = (e, t) => Object(g.a)(e, {
					...y,
					variables: {
						cardId: t
					}
				})
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/react-redux/es/index.js");

			function o() {
				return Object(n.d)()
			}
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", a({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), o.a.createElement("g", null, o.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
		},
		"./src/reddit/pages/PaypalFinishPage/index.m.less": function(e, t, r) {
			e.exports = {
				loader: "_1ia9yqGevQ-g_70nwfxEm0",
				details: "_3dSBBqfRzgAPNfPqKwl8yR",
				error: "_1qAMyiuz3fo5Au5Cgu3W83",
				repeatButton: "_1hNJdrneOevh1kG25_vuXx",
				repeatIcon: "_39gyI00r3uS5ZeIndcJghA"
			}
		},
		"./src/reddit/pages/PaypalFinishPage/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				s = r("./src/reddit/actions/platform.ts"),
				d = r("./src/reddit/models/Gold/ProductOffer.ts"),
				u = r("./src/reddit/hooks/useThunkDispatch.ts"),
				l = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				p = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = r("./src/reddit/icons/svgs/Replay/index.tsx"),
				m = r("./src/reddit/pages/PaypalFinishPage/index.m.less"),
				y = r.n(m);
			const {
				fbt: b
			} = r("./node_modules/fbt/lib/FbtPublic.js"), g = "r", v = "o", j = "p", O = "approval_token_id", h = "s", E = "pt", P = Object(c.c)({
				paypalErrorMessage: l.d
			}), C = Object(a.b)(P);
			var S;
			! function(e) {
				e.Loading = "loading", e.Error = "error", e.Success = "success", e.Cancel = "cancel"
			}(S || (S = {}));
			t.default = C(e => {
				const {
					params: t,
					paypalErrorMessage: r
				} = e, a = t[g], c = t[v], l = t[h], m = t[j], P = t[O], C = t[E], x = Object(u.a)(), w = async () => {
					A(S.Loading), await x(Object(i.f)(m, P)) ? ((() => e.postMessage({
						type: "paypal-finish.success",
						data: {
							subredditId: a,
							orderId: c
						}
					}))(), setTimeout(() => {
						window.close(), A(S.Success)
					}, 1500)) : A(S.Error)
				};
				Object(n.useEffect)(() => {
					x(Object(s.n)({
						title: d.e[C]()
					})), l ? w() : ((() => e.postMessage({
						type: "paypal-finish.cancel"
					}))(), setTimeout(() => {
						window.close(), A(S.Cancel)
					}, 1500))
				}, []);
				const [k, A] = Object(n.useState)(S.Loading);
				return o.a.createElement(o.a.Fragment, null, k === S.Loading && o.a.createElement(p.a, {
					className: y.a.loader,
					sizePx: 60
				}), k === S.Error && o.a.createElement("div", {
					className: y.a.details
				}, r && o.a.createElement("div", {
					className: y.a.error
				}, r), o.a.createElement("button", {
					onClick: w,
					className: y.a.repeatButton
				}, o.a.createElement(f.a, {
					className: y.a.repeatIcon
				}))), k === S.Success && o.a.createElement("div", {
					className: y.a.details
				}, b._("Thanks for the purchase. It is safe to close this page now.", null, {
					hk: "1cdx2b"
				})), k === S.Cancel && o.a.createElement("div", {
					className: y.a.details
				}, b._("It is safe to close this page.", null, {
					hk: "Zh0mx"
				})))
			})
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.9b376eaaeccfbcea2399.js.map