// https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.27a90f17cbe10fc15c7b.js
// Retrieved at 1/6/2022, 12:50:04 PM by Reddit Dataminer v1.0.0
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
						function e(e, t, n, o, a, i) {
							if (i !== r) {
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
							resetWarningCache: n
						};
						return a.PropTypes = a, a
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
								for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !t || r.length !== t); n = !0);
							} catch (c) {
								o = !0, a = c
							} finally {
								try {
									n || null == s.return || s.return()
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
						return null !== e && "object" === i(e)
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
									i = Object.keys(r);
								if (a.length !== i.length) return !1;
								for (var s = {}, c = 0; c < a.length; c += 1) s[a[c]] = !0;
								for (var d = 0; d < i.length; d += 1) s[i[d]] = !0;
								var u = Object.keys(s);
								if (u.length !== a.length) return !1;
								var l = t,
									p = r;
								return u.every((function(t) {
									return e(l[t], p[t])
								}))
							}(e[o], t[o]);
							return r.includes(o) ? (a && console.warn("Unsupported prop change: options.".concat(o, " is not a mutable property.")), n) : a ? d(d({}, n || {}), {}, s({}, o, e[o])) : n
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
					v = t.createContext(null);
				v.displayName = "ElementsContext";
				var g = function(e) {
					var r = e.stripe,
						n = e.options,
						o = e.children,
						a = t.useRef(!1),
						i = t.useRef(!0),
						s = t.useMemo((function() {
							return b(r)
						}), [r]),
						c = u(t.useState((function() {
							return {
								stripe: null,
								elements: null
							}
						})), 2),
						d = c[0],
						l = c[1],
						f = p(r);
					null !== f && f !== r && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), a.current || ("sync" === s.tag && (a.current = !0, l({
						stripe: s.stripe,
						elements: s.stripe.elements(n)
					})), "async" === s.tag && (a.current = !0, s.stripePromise.then((function(e) {
						e && i.current && l({
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
					P = function() {},
					E = function(e, r) {
						var n, o = "".concat((n = e).charAt(0).toUpperCase() + n.slice(1), "Element"),
							i = r ? function(e) {
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
									i = r.options,
									s = void 0 === i ? {} : i,
									c = r.onBlur,
									d = void 0 === c ? P : c,
									u = r.onFocus,
									l = void 0 === u ? P : u,
									f = r.onReady,
									y = void 0 === f ? P : f,
									b = r.onChange,
									v = void 0 === b ? P : b,
									g = r.onEscape,
									O = void 0 === g ? P : g,
									E = r.onClick,
									C = void 0 === E ? P : E,
									S = j("mounts <".concat(o, ">")).elements,
									w = t.useRef(null),
									x = t.useRef(null),
									k = h(y),
									_ = h(d),
									A = h(l),
									I = h(C),
									N = h(v),
									L = h(O);
								t.useLayoutEffect((function() {
									if (null == w.current && S && null != x.current) {
										var t = S.create(e, s);
										w.current = t, t.mount(x.current), t.on("ready", (function() {
											return k(t)
										})), t.on("change", N), t.on("blur", _), t.on("focus", A), t.on("escape", L), t.on("click", I)
									}
								}));
								var R = p(s);
								return t.useEffect((function() {
									if (w.current) {
										var e = m(s, R, ["paymentRequest"]);
										e && w.current.update(e)
									}
								}), [s, R]), t.useLayoutEffect((function() {
									return function() {
										w.current && w.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: a,
									ref: x
								})
							};
						return i.propTypes = {
							id: a.string,
							className: a.string,
							onChange: a.func,
							onBlur: a.func,
							onFocus: a.func,
							onReady: a.func,
							onClick: a.func,
							options: a.object
						}, i.displayName = o, i.__elementType = e, i
					},
					C = "undefined" == typeof window,
					S = E("auBankAccount", C),
					w = E("card", C),
					x = E("cardNumber", C),
					k = E("cardExpiry", C),
					_ = E("cardCvc", C),
					A = E("fpxBank", C),
					I = E("iban", C),
					N = E("idealBank", C),
					L = E("p24Bank", C),
					R = E("epsBank", C),
					T = E("payment", C),
					G = E("paymentRequestButton", C),
					D = E("linkAuthentication", C),
					B = E("shippingAddress", C),
					q = E("afterpayClearpayMessage", C);
				e.AfterpayClearpayMessageElement = q, e.AuBankAccountElement = S, e.CardCvcElement = _, e.CardElement = w, e.CardExpiryElement = k, e.CardNumberElement = x, e.Elements = g, e.ElementsConsumer = O, e.EpsBankElement = R, e.FpxBankElement = A, e.IbanElement = I, e.IdealBankElement = N, e.LinkAuthenticationElement = D, e.P24BankElement = L, e.PaymentElement = T, e.PaymentRequestButtonElement = G, e.ShippingAddressElement = B, e.useElements = function() {
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
				return x
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
				i = r("./node_modules/uuid/v4.js"),
				s = r.n(i),
				c = r("./src/config.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/lib/addQueryParams/index.ts"),
				p = r("./src/lib/makeActionCreator/index.ts"),
				f = r("./src/lib/sentry/index.ts"),
				m = r("./src/reddit/models/Toast/index.ts"),
				y = r("./src/reddit/actions/gold/constants.ts"),
				b = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				v = r("./src/reddit/selectors/gold/productOffers.ts"),
				g = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				j = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/models/Gold/ProductOffer.ts"),
				h = r("./src/reddit/actions/gold/powerups.ts"),
				P = r("./src/reddit/actions/modal.ts"),
				E = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				C = r("./src/reddit/models/Payments/index.ts");
			const S = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				w = e => e.map(e => e.message).join(" : "),
				x = (e, t, r) => async (o, a, {
					gqlContext: i
				}) => {
					const c = s()(),
						d = await Object(E.f)(i(), c, e, t, r);
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
				}, k = Object(b.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
					hk: "2LgB2E"
				})), _ = (e, t, r, n, o, a, i) => async (c, d, {
					gqlContext: u
				}) => {
					var l;
					const p = d(),
						m = a === O.c.Premium,
						y = a === O.c.Powerups,
						h = {};
					if (y && i) h.powerUps = {
						subredditId: i,
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
					let P, S, _ = "";
					try {
						_ = await c(x(r, o, h))
					} catch (I) {
						return f.c.captureException(I), void(I.message && c(Object(b.stripeApiError)(I.message)))
					}
					c(Object(b.stripeTokenPending)());
					const A = Object(g.y)(p);
					if (A || (P = await c(Object(b.validateAndCreateStripeToken)(e, t)), S = Object(g.v)(p), P)) try {
						const t = s()(),
							r = A || S ? P && S ? Object(E.h)(u(), t, _, P.id) : A ? Object(E.j)(u(), t, _, A) : null : Object(E.i)(u(), t, _, P.id),
							a = await r;
						if (!(null == a ? void 0 : a.ok)) return void c(k);
						const p = a.body.data.createEconPayment;
						if (null === (l = null == p ? void 0 : p.errors) || void 0 === l ? void 0 : l.length) return void c(Object(b.stripeApiError)(w(p.errors)));
						const {
							ok: f,
							payment: v,
							providerExecution: {
								paymentIntentClientSecret: g
							}
						} = p;
						if (f && v.status === E.a.ActionRequired) {
							const t = await e.confirmCardPayment(g),
								{
									error: r
								} = t;
							if (r) return ((e, t) => {
								var r, n;
								(null === (n = null === (r = e.payment_intent) || void 0 === r ? void 0 : r.last_payment_error) || void 0 === n ? void 0 : n.message) ? t(Object(b.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(b.stripeApiError)(e.message)) : t(k)
							})(r, c);
							let n;
							if (!(n = A ? await Object(E.e)(u(), s()(), v.id, A) : await Object(E.d)(u(), s()(), v.id, P.id, S)).ok) return void c(k);
							const o = n.body;
							if (!o.data.confirmEconPayment.ok || o.data.confirmEconPayment.payment.status !== E.a.Paid) return void c(k)
						} else if (f && v.status !== E.a.Paid) return void c(k);
						const O = Object(j.k)(d());
						O && (y && i ? c(Q({
							subredditId: i,
							powerupsCount: o,
							user: O,
							isAnonymous: n
						})) : m && c(U({
							user: O
						})))
					} catch (I) {
						f.c.captureException(I), c(k)
					}
				}, A = (e, t, r, n, o) => async (a, i, {
					gqlContext: d
				}) => {
					var u;
					const p = i(),
						m = n === O.c.Premium,
						y = n === O.c.Powerups,
						g = {};
					if (y && o) g.powerUps = {
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
						h = await a(x(e, r, g))
					} catch (_) {
						return f.c.captureException(_), _.message && a(Object(b.paypalApiError)(_.message)), null
					}
					const P = c.a.redditUrl;
					let k = {
						_o: P,
						o: h,
						pt: n
					};
					y && o && (k = {
						...k,
						r: o
					});
					try {
						const e = Object(l.a)(`${P}/framedModal/paypal-finish`, {
								...k,
								s: !0
							}),
							n = Object(l.a)(`${P}/framedModal/paypal-finish`, k),
							c = s()(),
							p = await Object(E.g)(d(), c, h, e, n);
						if (p && p.ok) {
							const e = p.body.data.createEconPayment;
							if (null === (u = null == e ? void 0 : e.errors) || void 0 === u ? void 0 : u.length) return a(Object(b.paypalApiError)(w(e.errors))), null;
							const n = Object(j.k)(i());
							if (e.ok) {
								const {
									status: i
								} = e.payment;
								if (i === E.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === i && n) return o ? a(Q({
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
					return a(Object(b.paypalApiError)(S())), null
				}, I = (e, t) => async (r, n, {
					gqlContext: o
				}) => {
					var a;
					try {
						const n = s()(),
							i = await Object(E.c)(o(), n, e, t);
						if (i && i.ok) {
							const e = i.body.data.confirmEconPayment;
							if (null === (a = null == e ? void 0 : e.errors) || void 0 === a ? void 0 : a.length) return r(Object(b.paypalApiError)(w(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (i) {
						f.c.captureException(i)
					}
					return r(Object(b.paypalApiError)(S())), !1
				}, N = () => async (e, t, {
					gqlContext: r
				}) => {
					e(Object(b.savedCardsPending)());
					try {
						const t = await Object(E.l)(r());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(b.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: n
							} = r.data.identity, o = n.map(e => a()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(b.savedCardsSuccess)(o)), o[0] && e(Object(b.selectSavedCard)(o[0].cardId))
						} else e(Object(b.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (o) {
						f.c.captureException(o), e(Object(b.savedCardsSuccess)([]))
					}
				}, L = e => async (t, r, {
					gqlContext: n
				}) => {
					t(Object(b._deleteSavedCard)(e));
					try {
						const t = await Object(E.k)(n(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: o
							} = r.data.deleteEconPaymentMethod;
						if (o && o.length) throw new Error(w(o))
					} catch (o) {
						f.c.captureException(o)
					}
				}, R = Object(p.a)(y.O), T = Object(p.a)(y.P), G = Object(p.a)(y.Q), D = e => async (t, r) => {
					await t(R(e)), t(Object(u.f)({
						kind: m.b.Error,
						duration: u.a,
						text: e
					}))
				}, B = (e, t, r) => async (o, a, {
					gqlContext: i
				}) => {
					o(T({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const a = await Object(E.b)(i(), e);
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
					} catch (s) {
						f.c.captureException(s), o(D(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, q = Object(p.a)(y.S), Q = e => async (t, r) => {
					t(q(e)), t(Object(h.m)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(P.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(P.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, M = Object(p.a)(y.W), U = ({
					user: e
				}) => async t => {
					await t(Object(h.o)(!0)), t(M({
						user: e
					}))
				}, W = Object(p.a)(y.ab)
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
				return y
			})), r.d(t, "cardExpiryChange", (function() {
				return b
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
				return P
			})), r.d(t, "toggleRememberCard", (function() {
				return E
			})), r.d(t, "selectSavedCard", (function() {
				return C
			})), r.d(t, "_deleteSavedCard", (function() {
				return S
			})), r.d(t, "deleteSavedCard", (function() {
				return w
			})), r.d(t, "savedCardsPending", (function() {
				return x
			})), r.d(t, "savedCardsSuccess", (function() {
				return k
			})), r.d(t, "loadSavedCards", (function() {
				return _
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/lib/sentry/index.ts"),
				s = r("./src/reddit/endpoints/gold/purchase.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const u = Object(a.a)(d.B),
				l = Object(a.a)(d.w),
				p = Object(a.a)(d.b),
				f = Object(a.a)(d.y),
				m = Object(a.a)(d.a),
				y = Object(a.a)(d.G),
				b = Object(a.a)(d.F),
				v = Object(a.a)(d.E),
				g = Object(a.a)(d.I),
				j = Object(a.a)(d.H),
				O = Object(a.a)(d.D),
				h = (e, t) => async (r, a) => {
					const i = a(),
						s = Object(c.h)(i),
						d = Object(c.l)(i),
						u = t.getElement(n.CardNumberElement);
					if (!u) return;
					const {
						token: l,
						error: p
					} = await e.createToken(u, {
						name: s,
						address_zip: d
					});
					if (s.trim()) {
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
				}, P = Object(a.a)(d.x), E = Object(a.a)(d.J), C = Object(a.a)(d.C), S = Object(a.a)(d.g), w = e => async (t, r, {
					apiContext: n
				}) => {
					t(S(e));
					try {
						const t = await Object(s.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						i.c.captureException(o)
					}
				}, x = Object(a.a)(d.z), k = Object(a.a)(d.A), _ = () => async (e, t, {
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
						e(k(n)), n[0] && e(C(n[0].cardId))
					} catch (n) {
						i.c.captureException(n), e(k([]))
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
				i = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				s = r.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => o.a.createElement("div", {
				className: Object(a.a)(s.a.loadingIcon, t, {
					[s.a.mCentered]: e
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
				return P
			})), r.d(t, "c", (function() {
				return E
			})), r.d(t, "e", (function() {
				return C
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "b", (function() {
				return w
			})), r.d(t, "l", (function() {
				return x
			})), r.d(t, "k", (function() {
				return k
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				o = r.n(n),
				a = r("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				i = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				s = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				c = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = r("./src/redditGQL/operations/CreateEconOrder.json"),
				u = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				l = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				p = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				f = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				m = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				y = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				b = r("./src/lib/makeGqlRequest/index.ts");
			const v = (e, t, r, n, a) => {
				const {
					premium: i,
					...s
				} = a, c = (null == i ? void 0 : i.pricePackage) || r.pricePackages[0], u = new o.a(c.price).multipliedBy(n).toFixed();
				return Object(b.a)(e, {
					...d,
					variables: {
						input: {
							nonce: t,
							productId: r.id,
							productVersion: r.version,
							pricePackageId: c.id,
							currency: c.currency,
							price: u,
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
			const j = (e, t, r, n) => Object(b.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				O = (e, t, r, n) => Object(b.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				h = (e, t, r, n) => Object(b.a)(e, {
					...f,
					variables: {
						nonce: t,
						orderId: r,
						cardId: n
					}
				}),
				P = (e, t, r, n, o) => Object(b.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: r,
						successUrl: n,
						cancelUrl: o
					}
				}),
				E = (e, t, r, n) => Object(b.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: r,
						token: n
					}
				}),
				C = (e, t, r, n) => Object(b.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: r,
						cardId: n
					}
				}),
				S = (e, t, r, n, o) => Object(b.a)(e, {
					...s,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
						saveCard: o
					}
				}),
				w = (e, t) => Object(b.a)(e, {
					...a,
					variables: {
						orderId: t
					}
				}),
				x = e => Object(b.a)(e, {
					...y,
					variables: {}
				}),
				k = (e, t) => Object(b.a)(e, {
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
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, o, a, i;
			r.d(t, "b", (function() {
					return o
				})), r.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(o || (o = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(a || (a = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(i || (i = {}))
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
				i = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				c = r("./src/reddit/actions/platform.ts"),
				d = r("./src/reddit/models/Gold/ProductOffer.ts"),
				u = r("./src/reddit/hooks/useThunkDispatch.ts"),
				l = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				p = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = r("./src/reddit/icons/svgs/Replay/index.tsx"),
				m = r("./src/reddit/pages/PaypalFinishPage/index.m.less"),
				y = r.n(m);
			const b = "r",
				v = "o",
				g = "p",
				j = "approval_token_id",
				O = "s",
				h = "pt",
				P = Object(i.c)({
					paypalErrorMessage: l.d
				}),
				E = Object(a.b)(P);
			var C;
			! function(e) {
				e.Loading = "loading", e.Error = "error", e.Success = "success", e.Cancel = "cancel"
			}(C || (C = {}));
			t.default = E(e => {
				const {
					params: t,
					paypalErrorMessage: r
				} = e, a = t[b], i = t[v], l = t[O], m = t[g], P = t[j], E = t[h], S = Object(u.a)(), w = async () => {
					k(C.Loading), await S(Object(s.f)(m, P)) ? ((() => e.postMessage({
						type: "paypal-finish.success",
						data: {
							subredditId: a,
							orderId: i
						}
					}))(), setTimeout(() => {
						window.close(), k(C.Success)
					}, 1500)) : k(C.Error)
				};
				Object(n.useEffect)(() => {
					S(Object(c.m)({
						title: d.e[E]()
					})), l ? w() : ((() => e.postMessage({
						type: "paypal-finish.cancel"
					}))(), setTimeout(() => {
						window.close(), k(C.Cancel)
					}, 1500))
				}, []);
				const [x, k] = Object(n.useState)(C.Loading);
				return o.a.createElement(o.a.Fragment, null, x === C.Loading && o.a.createElement(p.a, {
					className: y.a.loader,
					sizePx: 60
				}), x === C.Error && o.a.createElement("div", {
					className: y.a.details
				}, r && o.a.createElement("div", {
					className: y.a.error
				}, r), o.a.createElement("button", {
					onClick: w,
					className: y.a.repeatButton
				}, o.a.createElement(f.a, {
					className: y.a.repeatIcon
				}))), x === C.Success && o.a.createElement("div", {
					className: y.a.details
				}, fbt._("Thanks for the purchase. It is safe to close this page now.", null, {
					hk: "1cdx2b"
				})), x === C.Cancel && o.a.createElement("div", {
					className: y.a.details
				}, fbt._("It is safe to close this page.", null, {
					hk: "Zh0mx"
				})))
			})
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return c
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
				return y
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "g", (function() {
				return v
			})), r.d(t, "f", (function() {
				return g
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/makeProductOfferKey/index.ts"),
				a = r("./src/reddit/models/Gold/ProductOffer.ts"),
				i = r("./src/reddit/models/Payments/index.ts"),
				s = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = e => e.subreddits.api.productOffers.pending,
				d = (e, {
					subredditId: t,
					type: r
				}) => {
					var n, a, i;
					return t ? e.subreddits.productOffers[Object(o.a)(r, t)] : null === (i = null === (a = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === a ? void 0 : a.productOffers) || void 0 === i ? void 0 : i[Object(o.a)(r)]
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
				f = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === i.b.PayPal || e[0] === i.b.Stripe)(e.requiredPaymentProviders)) : null,
				m = Object(n.a)(p, s.p, (e, t) => f(e, t) || null),
				y = Object(n.a)(m, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				b = Object(n.a)(m, e => (null == e ? void 0 : e[0].price) || null),
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.27a90f17cbe10fc15c7b.js.map