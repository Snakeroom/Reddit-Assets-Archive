// https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.77369aab2990c5c54446.js
// Retrieved at 1/10/2022, 3:50:04 PM by Reddit Dataminer v1.0.0
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
						function e(e, t, n, o, a, s) {
							if (s !== r) {
								var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
								throw c.name = "Invariant Violation", c
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
								for (var s, c = e[Symbol.iterator](); !(n = (s = c.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
							} catch (i) {
								o = !0, a = i
							} finally {
								try {
									n || null == c.return || c.return()
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
						return null !== e && "object" === s(e)
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
									s = Object.keys(r);
								if (a.length !== s.length) return !1;
								for (var c = {}, i = 0; i < a.length; i += 1) c[a[i]] = !0;
								for (var d = 0; d < s.length; d += 1) c[s[d]] = !0;
								var u = Object.keys(c);
								if (u.length !== a.length) return !1;
								var l = t,
									p = r;
								return u.every((function(t) {
									return e(l[t], p[t])
								}))
							}(e[o], t[o]);
							return r.includes(o) ? (a && console.warn("Unsupported prop change: options.".concat(o, " is not a mutable property.")), n) : a ? d(d({}, n || {}), {}, c({}, o, e[o])) : n
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
					v = t.createContext(null);
				v.displayName = "ElementsContext";
				var g = function(e) {
					var r = e.stripe,
						n = e.options,
						o = e.children,
						a = t.useRef(!1),
						s = t.useRef(!0),
						c = t.useMemo((function() {
							return y(r)
						}), [r]),
						i = u(t.useState((function() {
							return {
								stripe: null,
								elements: null
							}
						})), 2),
						d = i[0],
						l = i[1],
						f = p(r);
					null !== f && f !== r && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), a.current || ("sync" === c.tag && (a.current = !0, l({
						stripe: c.stripe,
						elements: c.stripe.elements(n)
					})), "async" === c.tag && (a.current = !0, c.stripePromise.then((function(e) {
						e && s.current && l({
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
					}), [d.stripe]), t.createElement(v.Provider, {
						value: d
					}, o)
				};
				g.propTypes = {
					stripe: a.any,
					options: a.object
				};
				var j = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(v), e)
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
							s = r ? function(e) {
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
									s = r.options,
									c = void 0 === s ? {} : s,
									i = r.onBlur,
									d = void 0 === i ? E : i,
									u = r.onFocus,
									l = void 0 === u ? E : u,
									f = r.onReady,
									b = void 0 === f ? E : f,
									y = r.onChange,
									v = void 0 === y ? E : y,
									g = r.onEscape,
									O = void 0 === g ? E : g,
									P = r.onClick,
									C = void 0 === P ? E : P,
									x = j("mounts <".concat(o, ">")).elements,
									S = t.useRef(null),
									w = t.useRef(null),
									k = h(b),
									_ = h(d),
									A = h(l),
									I = h(C),
									N = h(v),
									L = h(O);
								t.useLayoutEffect((function() {
									if (null == S.current && x && null != w.current) {
										var t = x.create(e, c);
										S.current = t, t.mount(w.current), t.on("ready", (function() {
											return k(t)
										})), t.on("change", N), t.on("blur", _), t.on("focus", A), t.on("escape", L), t.on("click", I)
									}
								}));
								var R = p(c);
								return t.useEffect((function() {
									if (S.current) {
										var e = m(c, R, ["paymentRequest"]);
										e && S.current.update(e)
									}
								}), [c, R]), t.useLayoutEffect((function() {
									return function() {
										S.current && S.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: a,
									ref: w
								})
							};
						return s.propTypes = {
							id: a.string,
							className: a.string,
							onChange: a.func,
							onBlur: a.func,
							onFocus: a.func,
							onReady: a.func,
							onClick: a.func,
							options: a.object
						}, s.displayName = o, s.__elementType = e, s
					},
					C = "undefined" == typeof window,
					x = P("auBankAccount", C),
					S = P("card", C),
					w = P("cardNumber", C),
					k = P("cardExpiry", C),
					_ = P("cardCvc", C),
					A = P("fpxBank", C),
					I = P("iban", C),
					N = P("idealBank", C),
					L = P("p24Bank", C),
					R = P("epsBank", C),
					T = P("payment", C),
					G = P("paymentRequestButton", C),
					D = P("linkAuthentication", C),
					B = P("shippingAddress", C),
					q = P("afterpayClearpayMessage", C);
				e.AfterpayClearpayMessageElement = q, e.AuBankAccountElement = x, e.CardCvcElement = _, e.CardElement = S, e.CardExpiryElement = k, e.CardNumberElement = w, e.Elements = g, e.ElementsConsumer = O, e.EpsBankElement = R, e.FpxBankElement = A, e.IbanElement = I, e.IdealBankElement = N, e.LinkAuthenticationElement = D, e.P24BankElement = L, e.PaymentElement = T, e.PaymentRequestButtonElement = G, e.ShippingAddressElement = B, e.useElements = function() {
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
			r.d(t, "b", (function() {
				return w
			})), r.d(t, "j", (function() {
				return _
			})), r.d(t, "g", (function() {
				return A
			})), r.d(t, "f", (function() {
				return I
			})), r.d(t, "d", (function() {
				return N
			})), r.d(t, "c", (function() {
				return L
			})), r.d(t, "a", (function() {
				return B
			})), r.d(t, "h", (function() {
				return Q
			})), r.d(t, "e", (function() {
				return U
			})), r.d(t, "i", (function() {
				return W
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/lodash/omit.js"),
				a = r.n(o),
				s = r("./node_modules/uuid/v4.js"),
				c = r.n(s),
				i = r("./src/config.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/lib/addQueryParams/index.ts"),
				p = r("./src/lib/makeActionCreator/index.ts"),
				f = r("./src/lib/sentry/index.ts"),
				m = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/actions/gold/constants.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				v = r("./src/reddit/selectors/gold/productOffers.ts"),
				g = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				j = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/models/Gold/ProductOffer.ts"),
				h = r("./src/reddit/actions/gold/powerups.ts"),
				E = r("./src/reddit/actions/modal.ts"),
				P = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				C = r("./src/reddit/models/Payments/index.ts");
			const x = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				S = e => e.map(e => e.message).join(" : "),
				w = (e, t, r) => async (o, a, {
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
						if (t && t.length) throw new Error(S(t));
						if (r) return r.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, k = Object(y.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
					hk: "2LgB2E"
				})), _ = (e, t, r, n, o, a, s) => async (i, d, {
					gqlContext: u
				}) => {
					var l;
					const p = d(),
						m = a === O.c.Premium,
						b = a === O.c.Powerups,
						h = {};
					if (b && s) h.powerUps = {
						subredditId: s,
						isAnonymous: n
					};
					else if (m) {
						const e = Object(v.d)(p, {
							provider: C.b.Stripe
						});
						if (!e) return;
						h.premium = {
							pricePackage: e
						}
					}
					let E, x, _ = "";
					try {
						_ = await i(w(r, o, h))
					} catch (I) {
						return f.c.captureException(I), void(I.message && i(Object(y.stripeApiError)(I.message)))
					}
					i(Object(y.stripeTokenPending)());
					const A = Object(g.y)(p);
					if (A || (E = await i(Object(y.validateAndCreateStripeToken)(e, t)), x = Object(g.v)(p), E)) try {
						const t = c()(),
							r = A || x ? E && x ? Object(P.h)(u(), t, _, E.id) : A ? Object(P.j)(u(), t, _, A) : null : Object(P.i)(u(), t, _, E.id),
							a = await r;
						if (!(null == a ? void 0 : a.ok)) return void i(k);
						const p = a.body.data.createEconPayment;
						if (null === (l = null == p ? void 0 : p.errors) || void 0 === l ? void 0 : l.length) return void i(Object(y.stripeApiError)(S(p.errors)));
						const {
							ok: f,
							payment: v,
							providerExecution: {
								paymentIntentClientSecret: g
							}
						} = p;
						if (f && v.status === P.a.ActionRequired) {
							const t = await e.confirmCardPayment(g),
								{
									error: r
								} = t;
							if (r) return ((e, t) => {
								var r, n;
								(null === (n = null === (r = e.payment_intent) || void 0 === r ? void 0 : r.last_payment_error) || void 0 === n ? void 0 : n.message) ? t(Object(y.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(y.stripeApiError)(e.message)) : t(k)
							})(r, i);
							let n;
							if (!(n = A ? await Object(P.e)(u(), c()(), v.id, A) : await Object(P.d)(u(), c()(), v.id, E.id, x)).ok) return void i(k);
							const o = n.body;
							if (!o.data.confirmEconPayment.ok || o.data.confirmEconPayment.payment.status !== P.a.Paid) return void i(k)
						} else if (f && v.status !== P.a.Paid) return void i(k);
						const O = Object(j.k)(d());
						O && (b && s ? i(Q({
							subredditId: s,
							powerupsCount: o,
							user: O,
							isAnonymous: n
						})) : m && i(U({
							user: O
						})))
					} catch (I) {
						f.c.captureException(I), i(k)
					}
				}, A = (e, t, r, n, o) => async (a, s, {
					gqlContext: d
				}) => {
					var u;
					const p = s(),
						m = n === O.c.Premium,
						b = n === O.c.Powerups,
						g = {};
					if (b && o) g.powerUps = {
						subredditId: o,
						isAnonymous: t
					};
					else if (m) {
						const e = Object(v.d)(p, {
							provider: C.b.PayPal
						});
						if (!e) return null;
						g.premium = {
							pricePackage: e
						}
					}
					let h = "";
					try {
						h = await a(w(e, r, g))
					} catch (_) {
						return f.c.captureException(_), _.message && a(Object(y.paypalApiError)(_.message)), null
					}
					const E = i.a.redditUrl;
					let k = {
						_o: E,
						o: h,
						pt: n
					};
					b && o && (k = {
						...k,
						r: o
					});
					try {
						const e = Object(l.a)(`${E}/framedModal/paypal-finish`, {
								...k,
								s: !0
							}),
							n = Object(l.a)(`${E}/framedModal/paypal-finish`, k),
							i = c()(),
							p = await Object(P.g)(d(), i, h, e, n);
						if (p && p.ok) {
							const e = p.body.data.createEconPayment;
							if (null === (u = null == e ? void 0 : e.errors) || void 0 === u ? void 0 : u.length) return a(Object(y.paypalApiError)(S(e.errors))), null;
							const n = Object(j.k)(s());
							if (e.ok) {
								const {
									status: s
								} = e.payment;
								if (s === P.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === s && n) return o ? a(Q({
									subredditId: o,
									powerupsCount: r,
									user: n,
									isAnonymous: t
								})) : m && a(U({
									user: n
								})), null
							}
						}
					} catch (_) {
						f.c.captureException(_)
					}
					return a(Object(y.paypalApiError)(x())), null
				}, I = (e, t) => async (r, n, {
					gqlContext: o
				}) => {
					var a;
					try {
						const n = c()(),
							s = await Object(P.c)(o(), n, e, t);
						if (s && s.ok) {
							const e = s.body.data.confirmEconPayment;
							if (null === (a = null == e ? void 0 : e.errors) || void 0 === a ? void 0 : a.length) return r(Object(y.paypalApiError)(S(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (s) {
						f.c.captureException(s)
					}
					return r(Object(y.paypalApiError)(x())), !1
				}, N = () => async (e, t, {
					gqlContext: r
				}) => {
					e(Object(y.savedCardsPending)());
					try {
						const t = await Object(P.l)(r());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(y.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: n
							} = r.data.identity, o = n.map(e => a()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(y.savedCardsSuccess)(o)), o[0] && e(Object(y.selectSavedCard)(o[0].cardId))
						} else e(Object(y.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (o) {
						f.c.captureException(o), e(Object(y.savedCardsSuccess)([]))
					}
				}, L = e => async (t, r, {
					gqlContext: n
				}) => {
					t(Object(y._deleteSavedCard)(e));
					try {
						const t = await Object(P.k)(n(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: o
							} = r.data.deleteEconPaymentMethod;
						if (o && o.length) throw new Error(S(o))
					} catch (o) {
						f.c.captureException(o)
					}
				}, R = Object(p.a)(b.O), T = Object(p.a)(b.P), G = Object(p.a)(b.Q), D = e => async (t, r) => {
					await t(R(e)), t(Object(u.f)({
						kind: m.b.Error,
						duration: u.a,
						text: e
					}))
				}, B = (e, t, r) => async (o, a, {
					gqlContext: s
				}) => {
					o(T({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const a = await Object(P.b)(s(), e);
						if (a.ok) {
							const e = a.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void o(D(n[0].message));
							o(G({
								subredditId: t,
								allocatedAt: r
							}))
						} else o(D(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (c) {
						f.c.captureException(c), o(D(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, q = Object(p.a)(b.S), Q = e => async (t, r) => {
					t(q(e)), t(Object(h.m)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(E.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(E.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, M = Object(p.a)(b.W), U = ({
					user: e
				}) => async t => {
					await t(Object(h.o)(!0)), t(M({
						user: e
					}))
				}, W = Object(p.a)(b.ab)
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
				return v
			})), r.d(t, "stripeTokenPending", (function() {
				return g
			})), r.d(t, "stripeTokenError", (function() {
				return j
			})), r.d(t, "stripeApiError", (function() {
				return O
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return h
			})), r.d(t, "paypalApiError", (function() {
				return E
			})), r.d(t, "toggleRememberCard", (function() {
				return P
			})), r.d(t, "selectSavedCard", (function() {
				return C
			})), r.d(t, "_deleteSavedCard", (function() {
				return x
			})), r.d(t, "deleteSavedCard", (function() {
				return S
			})), r.d(t, "savedCardsPending", (function() {
				return w
			})), r.d(t, "savedCardsSuccess", (function() {
				return k
			})), r.d(t, "loadSavedCards", (function() {
				return _
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/endpoints/gold/purchase.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const u = Object(a.a)(d.B),
				l = Object(a.a)(d.w),
				p = Object(a.a)(d.b),
				f = Object(a.a)(d.y),
				m = Object(a.a)(d.a),
				b = Object(a.a)(d.G),
				y = Object(a.a)(d.F),
				v = Object(a.a)(d.E),
				g = Object(a.a)(d.I),
				j = Object(a.a)(d.H),
				O = Object(a.a)(d.D),
				h = (e, t) => async (r, a) => {
					const s = a(),
						c = Object(i.h)(s),
						d = Object(i.l)(s),
						u = t.getElement(n.CardNumberElement);
					if (!u) return;
					const {
						token: l,
						error: p
					} = await e.createToken(u, {
						name: c,
						address_zip: d
					});
					if (c.trim()) {
						if (!p && l) return l;
						r(j(p || void 0))
					} else {
						const e = o.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(m({
							message: e
						}))
					}
				}, E = Object(a.a)(d.x), P = Object(a.a)(d.J), C = Object(a.a)(d.C), x = Object(a.a)(d.g), S = e => async (t, r, {
					apiContext: n
				}) => {
					t(x(e));
					try {
						const t = await Object(c.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						s.c.captureException(o)
					}
				}, w = Object(a.a)(d.z), k = Object(a.a)(d.A), _ = () => async (e, t, {
					apiContext: r
				}) => {
					e(w());
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
						e(k(n)), n[0] && e(C(n[0].cardId))
					} catch (n) {
						s.c.captureException(n), e(k([]))
					}
				}
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
				s = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = r.n(s);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => o.a.createElement("div", {
				className: Object(a.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/endpoints/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return v
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "h", (function() {
				return O
			})), r.d(t, "j", (function() {
				return h
			})), r.d(t, "g", (function() {
				return E
			})), r.d(t, "c", (function() {
				return P
			})), r.d(t, "e", (function() {
				return C
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "b", (function() {
				return S
			})), r.d(t, "l", (function() {
				return w
			})), r.d(t, "k", (function() {
				return k
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				o = r.n(n),
				a = r("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				s = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				c = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				i = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = r("./src/redditGQL/operations/CreateEconOrder.json"),
				u = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				l = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				p = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				f = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				m = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				b = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				y = r("./src/lib/makeGqlRequest/index.ts");
			const v = (e, t, r, n, a) => {
				const {
					premium: s,
					...c
				} = a, i = (null == s ? void 0 : s.pricePackage) || r.pricePackages[0], u = new o.a(i.price).multipliedBy(n).toFixed();
				return Object(y.a)(e, {
					...d,
					variables: {
						input: {
							nonce: t,
							productId: r.id,
							productVersion: r.version,
							pricePackageId: i.id,
							currency: i.currency,
							price: u,
							productsCount: n.toString(),
							...c
						}
					}
				})
			};
			var g;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(g || (g = {}));
			const j = (e, t, r, n) => Object(y.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				O = (e, t, r, n) => Object(y.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				h = (e, t, r, n) => Object(y.a)(e, {
					...f,
					variables: {
						nonce: t,
						orderId: r,
						cardId: n
					}
				}),
				E = (e, t, r, n, o) => Object(y.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: r,
						successUrl: n,
						cancelUrl: o
					}
				}),
				P = (e, t, r, n) => Object(y.a)(e, {
					...s,
					variables: {
						nonce: t,
						paymentId: r,
						token: n
					}
				}),
				C = (e, t, r, n) => Object(y.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: r,
						cardId: n
					}
				}),
				x = (e, t, r, n, o) => Object(y.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
						saveCard: o
					}
				}),
				S = (e, t) => Object(y.a)(e, {
					...a,
					variables: {
						orderId: t
					}
				}),
				w = e => Object(y.a)(e, {
					...b,
					variables: {}
				}),
				k = (e, t) => Object(y.a)(e, {
					...m,
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
				s = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				i = r("./src/reddit/actions/platform.ts"),
				d = r("./src/reddit/models/Gold/ProductOffer.ts"),
				u = r("./src/reddit/hooks/useThunkDispatch.ts"),
				l = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				p = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = r("./src/reddit/icons/svgs/Replay/index.tsx"),
				m = r("./src/reddit/pages/PaypalFinishPage/index.m.less"),
				b = r.n(m);
			const y = "r",
				v = "o",
				g = "p",
				j = "approval_token_id",
				O = "s",
				h = "pt",
				E = Object(s.c)({
					paypalErrorMessage: l.d
				}),
				P = Object(a.b)(E);
			var C;
			! function(e) {
				e.Loading = "loading", e.Error = "error", e.Success = "success", e.Cancel = "cancel"
			}(C || (C = {}));
			t.default = P(e => {
				const {
					params: t,
					paypalErrorMessage: r
				} = e, a = t[y], s = t[v], l = t[O], m = t[g], E = t[j], P = t[h], x = Object(u.a)(), S = async () => {
					k(C.Loading), await x(Object(c.f)(m, E)) ? ((() => e.postMessage({
						type: "paypal-finish.success",
						data: {
							subredditId: a,
							orderId: s
						}
					}))(), setTimeout(() => {
						window.close(), k(C.Success)
					}, 1500)) : k(C.Error)
				};
				Object(n.useEffect)(() => {
					x(Object(i.m)({
						title: d.e[P]()
					})), l ? S() : ((() => e.postMessage({
						type: "paypal-finish.cancel"
					}))(), setTimeout(() => {
						window.close(), k(C.Cancel)
					}, 1500))
				}, []);
				const [w, k] = Object(n.useState)(C.Loading);
				return o.a.createElement(o.a.Fragment, null, w === C.Loading && o.a.createElement(p.a, {
					className: b.a.loader,
					sizePx: 60
				}), w === C.Error && o.a.createElement("div", {
					className: b.a.details
				}, r && o.a.createElement("div", {
					className: b.a.error
				}, r), o.a.createElement("button", {
					onClick: S,
					className: b.a.repeatButton
				}, o.a.createElement(f.a, {
					className: b.a.repeatIcon
				}))), w === C.Success && o.a.createElement("div", {
					className: b.a.details
				}, fbt._("Thanks for the purchase. It is safe to close this page now.", null, {
					hk: "1cdx2b"
				})), w === C.Cancel && o.a.createElement("div", {
					className: b.a.details
				}, fbt._("It is safe to close this page.", null, {
					hk: "Zh0mx"
				})))
			})
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return i
			})), r.d(t, "i", (function() {
				return d
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "j", (function() {
				return f
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "g", (function() {
				return v
			})), r.d(t, "f", (function() {
				return g
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/makeProductOfferKey/index.ts"),
				a = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/models/Payments/index.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				d = (e, {
					subredditId: t,
					type: r
				}) => {
					var n, a, s;
					return t ? e.subreddits.productOffers[Object(o.a)(r, t)] : null === (s = null === (a = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === a ? void 0 : a.productOffers) || void 0 === s ? void 0 : s[Object(o.a)(r)]
				},
				u = (e, {
					subredditId: t
				}) => {
					const r = d(e, {
						subredditId: t,
						type: a.c.Powerups
					});
					return r && r[0]
				},
				l = (e, t) => {
					var r;
					const n = u(e, t);
					return null === (r = null == n ? void 0 : n.pricePackages) || void 0 === r ? void 0 : r[0].price
				},
				p = e => {
					const t = d(e, {
						type: a.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				f = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === s.b.PayPal || e[0] === s.b.Stripe)(e.requiredPaymentProviders)) : null,
				m = Object(n.a)(p, c.p, (e, t) => f(e, t) || null),
				b = Object(n.a)(m, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				y = Object(n.a)(m, e => (null == e ? void 0 : e[0].price) || null),
				v = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				g = Object(n.a)(v, e => Boolean(null == e ? void 0 : e.isCanceled))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.77369aab2990c5c54446.js.map