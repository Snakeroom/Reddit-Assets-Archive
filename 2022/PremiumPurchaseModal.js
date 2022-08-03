// https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.6d17187cd25a4f9f1d30.js
// Retrieved at 8/3/2022, 12:40:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PremiumPurchaseModal"], {
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

				function u(e) {
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

				function d(e, t) {
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
							if ("string" == typeof e) return l(e, t);
							var n = Object.prototype.toString.call(e).slice(8, -1);
							return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(e, t) : void 0
						}
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function l(e, t) {
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
					m = function(e) {
						return null !== e && "object" === c(e)
					},
					f = function(e, t, n) {
						return m(e) ? Object.keys(e).reduce((function(r, o) {
							var a = !m(t) || ! function e(t, n) {
								if (!m(t) || !m(n)) return t === n;
								var r = Array.isArray(t);
								if (r !== Array.isArray(n)) return !1;
								var o = "[object Object]" === Object.prototype.toString.call(t);
								if (o !== ("[object Object]" === Object.prototype.toString.call(n))) return !1;
								if (!o && !r) return !1;
								var a = Object.keys(t),
									c = Object.keys(n);
								if (a.length !== c.length) return !1;
								for (var s = {}, i = 0; i < a.length; i += 1) s[a[i]] = !0;
								for (var u = 0; u < c.length; u += 1) s[c[u]] = !0;
								var d = Object.keys(s);
								if (d.length !== a.length) return !1;
								var l = t,
									p = n;
								return d.every((function(t) {
									return e(l[t], p[t])
								}))
							}(e[o], t[o]);
							return n.includes(o) ? (a && console.warn("Unsupported prop change: options.".concat(o, " is not a mutable property.")), r) : a ? u(u({}, r || {}), {}, s({}, o, e[o])) : r
						}), null) : null
					},
					y = function(e) {
						if (null === e || m(t = e) && "function" == typeof t.elements && "function" == typeof t.createToken && "function" == typeof t.createPaymentMethod && "function" == typeof t.confirmCardPayment) return e;
						var t;
						throw new Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
					},
					b = function(e) {
						if (function(e) {
								return m(e) && "function" == typeof e.then
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
					h = t.createContext(null);
				h.displayName = "ElementsContext";
				var O = function(e) {
					var n = e.stripe,
						r = e.options,
						o = e.children,
						a = t.useRef(!1),
						c = t.useRef(!0),
						s = t.useMemo((function() {
							return b(n)
						}), [n]),
						i = d(t.useState((function() {
							return {
								stripe: null,
								elements: null
							}
						})), 2),
						u = i[0],
						l = i[1],
						m = p(n);
					null !== m && m !== n && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), a.current || ("sync" === s.tag && (a.current = !0, l({
						stripe: s.stripe,
						elements: s.stripe.elements(r)
					})), "async" === s.tag && (a.current = !0, s.stripePromise.then((function(e) {
						e && c.current && l({
							stripe: e,
							elements: e.elements(r)
						})
					}))));
					var y = p(r);
					return t.useEffect((function() {
						if (u.elements) {
							var e = f(r, y, ["clientSecret", "fonts"]);
							e && u.elements.update(e)
						}
					}), [r, y, u.elements]), t.useEffect((function() {
						return function() {
							c.current = !1
						}
					}), []), t.useEffect((function() {
						var e = u.stripe;
						e && e._registerWrapper && e.registerAppInfo && (e._registerWrapper({
							name: "react-stripe-js",
							version: "1.6.0"
						}), e.registerAppInfo({
							name: "react-stripe-js",
							version: "1.6.0",
							url: "https://stripe.com/docs/stripe-js/react"
						}))
					}), [u.stripe]), t.createElement(h.Provider, {
						value: u
					}, o)
				};
				O.propTypes = {
					stripe: a.any,
					options: a.object
				};
				var j = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(h), e)
					},
					g = function(e) {
						return (0, e.children)(j("mounts <ElementsConsumer>"))
					};
				g.propTypes = {
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
					E = function(e, n) {
						var r, o = "".concat((r = e).charAt(0).toUpperCase() + r.slice(1), "Element"),
							c = n ? function(e) {
								j("mounts <".concat(o, ">"));
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
									u = void 0 === i ? _ : i,
									d = n.onFocus,
									l = void 0 === d ? _ : d,
									m = n.onReady,
									y = void 0 === m ? _ : m,
									b = n.onChange,
									h = void 0 === b ? _ : b,
									O = n.onEscape,
									g = void 0 === O ? _ : O,
									E = n.onClick,
									P = void 0 === E ? _ : E,
									C = j("mounts <".concat(o, ">")).elements,
									x = t.useRef(null),
									M = t.useRef(null),
									k = v(y),
									I = v(u),
									S = v(l),
									w = v(P),
									A = v(h),
									T = v(g);
								t.useLayoutEffect((function() {
									if (null == x.current && C && null != M.current) {
										var t = C.create(e, s);
										x.current = t, t.mount(M.current), t.on("ready", (function() {
											return k(t)
										})), t.on("change", A), t.on("blur", I), t.on("focus", S), t.on("escape", T), t.on("click", w)
									}
								}));
								var R = p(s);
								return t.useEffect((function() {
									if (x.current) {
										var e = f(s, R, ["paymentRequest"]);
										e && x.current.update(e)
									}
								}), [s, R]), t.useLayoutEffect((function() {
									return function() {
										x.current && x.current.destroy()
									}
								}), []), t.createElement("div", {
									id: r,
									className: a,
									ref: M
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
					P = "undefined" == typeof window,
					C = E("auBankAccount", P),
					x = E("card", P),
					M = E("cardNumber", P),
					k = E("cardExpiry", P),
					I = E("cardCvc", P),
					S = E("fpxBank", P),
					w = E("iban", P),
					A = E("idealBank", P),
					T = E("p24Bank", P),
					R = E("epsBank", P),
					N = E("payment", P),
					B = E("paymentRequestButton", P),
					U = E("linkAuthentication", P),
					L = E("shippingAddress", P),
					D = E("afterpayClearpayMessage", P);
				e.AfterpayClearpayMessageElement = D, e.AuBankAccountElement = C, e.CardCvcElement = I, e.CardElement = x, e.CardExpiryElement = k, e.CardNumberElement = M, e.Elements = O, e.ElementsConsumer = g, e.EpsBankElement = R, e.FpxBankElement = S, e.IbanElement = w, e.IdealBankElement = A, e.LinkAuthenticationElement = U, e.P24BankElement = T, e.PaymentElement = N, e.PaymentRequestButtonElement = B, e.ShippingAddressElement = L, e.useElements = function() {
					return j("calls useElements()").elements
				}, e.useStripe = function() {
					return j("calls useStripe()").stripe
				}, Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}(t, n("./node_modules/react/index.js"))
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "selectPaymentMethod", (function() {
				return i
			})), n.d(t, "paymentCompleted", (function() {
				return u
			})), n.d(t, "cardNameInput", (function() {
				return d
			})), n.d(t, "postalCodeInput", (function() {
				return l
			})), n.d(t, "cardNameEmpty", (function() {
				return p
			})), n.d(t, "cardNumberChange", (function() {
				return m
			})), n.d(t, "cardExpiryChange", (function() {
				return f
			})), n.d(t, "cardCvcChange", (function() {
				return y
			})), n.d(t, "stripeTokenPending", (function() {
				return b
			})), n.d(t, "stripeTokenError", (function() {
				return h
			})), n.d(t, "stripeApiError", (function() {
				return O
			})), n.d(t, "validateAndCreateStripeToken", (function() {
				return j
			})), n.d(t, "paypalApiError", (function() {
				return g
			})), n.d(t, "toggleRememberCard", (function() {
				return v
			})), n.d(t, "selectSavedCard", (function() {
				return _
			})), n.d(t, "deleteSavedCard", (function() {
				return E
			})), n.d(t, "savedCardsPending", (function() {
				return P
			})), n.d(t, "savedCardsSuccess", (function() {
				return C
			}));
			var r = n("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				s = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const i = Object(a.a)(s.F),
				u = Object(a.a)(s.A),
				d = Object(a.a)(s.b),
				l = Object(a.a)(s.C),
				p = Object(a.a)(s.a),
				m = Object(a.a)(s.K),
				f = Object(a.a)(s.J),
				y = Object(a.a)(s.I),
				b = Object(a.a)(s.M),
				h = Object(a.a)(s.L),
				O = Object(a.a)(s.H),
				j = (e, t) => async (n, a) => {
					const s = a(),
						i = Object(c.g)(s),
						u = Object(c.k)(s),
						d = t.getElement(r.CardNumberElement);
					if (!d) return;
					const {
						token: l,
						error: m
					} = await e.createToken(d, {
						name: i,
						address_zip: u
					});
					if (i.trim()) {
						if (!m && l) return l;
						n(h(m || void 0))
					} else {
						const e = o.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						n(p({
							message: e
						}))
					}
				}, g = Object(a.a)(s.B), v = Object(a.a)(s.N), _ = Object(a.a)(s.G), E = Object(a.a)(s.g), P = Object(a.a)(s.D), C = Object(a.a)(s.E)
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "setPremiumPurchaseModalInfo", (function() {
				return h
			})), n.d(t, "clearPremiumPurchaseModalInfo", (function() {
				return O
			})), n.d(t, "openPremiumPurchaseModal", (function() {
				return j
			})), n.d(t, "closePremiumPurchaseModal", (function() {
				return g
			})), n.d(t, "stripePremiumPurchaseRequested", (function() {
				return v
			})), n.d(t, "paymentBlobCreated", (function() {
				return _
			})), n.d(t, "openWithBlob", (function() {
				return E
			}));
			var r = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/lib/sentry/index.ts"),
				s = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/formatApiError/index.ts"),
				u = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				m = n("./src/reddit/endpoints/gold/purchase.ts"),
				f = n("./src/reddit/helpers/correlationIdTracker.ts"),
				y = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				b = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const h = Object(a.a)(b.x),
				O = Object(a.a)(b.e),
				j = (e, t) => async n => {
					n(h(e)), n(Object(d.h)(l.a.ECON_PREMIUM_PURCHASE, t))
				}, g = () => async e => {
					e(Object(d.g)(l.a.ECON_PREMIUM_PURCHASE)), e(O())
				}, v = (e, t) => async (n, r, a) => {
					let {
						apiContext: c
					} = a;
					const d = Object(y.a)(r()),
						l = (null == d ? void 0 : d.pennies) || s.yb,
						p = Object(f.c)(f.a.GoldPayment);
					n(Object(u.stripeTokenPending)());
					const b = await n(Object(u.validateAndCreateStripeToken)(e, t));
					if (b) try {
						const e = await Object(m.f)({
							context: c(),
							correlationId: p,
							pennies: l,
							token: b
						});
						if (e.error) {
							const t = Object(i.a)(e.error);
							n(Object(u.stripeApiError)(t))
						} else n(Object(u.paymentCompleted)({
							confirmed: !1
						}))
					} catch (h) {
						const e = Object(i.a)(h);
						n(Object(u.stripeApiError)(e))
					} else {
						const e = o.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						n(Object(u.stripeApiError)(e))
					}
				}, _ = Object(a.a)(b.z), E = (e, t) => {
					let {
						packageId: n,
						correlationId: o
					} = e;
					return async (e, a, s) => {
						let {
							apiContext: d
						} = s;
						e(j({
							packageId: n,
							correlationId: o
						}, t));
						const l = Object(y.a)(a()),
							m = (null == l ? void 0 : l.paypalButtonId) || r.a.paypal.buttons.premium;
						if (m) try {
							const t = await Object(p.f)({
								buttonId: m,
								context: d(),
								correlationId: o
							});
							if (t.error) {
								const n = Object(i.a)(t.error);
								e(Object(u.paypalApiError)(n))
							} else e(_(t))
						} catch (f) {
							const t = Object(i.a)(f);
							e(Object(u.paypalApiError)(t))
						} else c.c.captureMessage("No Premium packages available on Premium purchase modal")
					}
				}
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
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/config.ts"),
				c = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				i = n("./src/reddit/components/EmergencyMaintenance/index.m.less"),
				u = n.n(i);
			const d = e => {
				let {
					onClose: t
				} = e;
				return o.a.createElement("div", {
					className: u.a.maintenanceWrapper
				}, o.a.createElement("div", {
					className: u.a.close,
					onClick: t
				}, o.a.createElement(s.b, {
					className: u.a.closeIcon
				})), o.a.createElement("img", {
					src: `${a.a.assetPath}/img/trouble-afoot.jpg`,
					className: u.a.maintenanceImage
				}), o.a.createElement("h3", null, c.fbt._("Currently Undergoing Maintenance", null, {
					hk: "3qPQ53"
				})), o.a.createElement("p", null, c.fbt._("We're sorry for the inconvenience, but we're currently undergoing maintenance. We'll be back online shortly!", null, {
					hk: "dZcW0"
				})))
			}
		},
		"./src/reddit/components/PremiumPurchaseModal/index.m.less": function(e, t, n) {
			e.exports = {
				premiumPurchaseModal: "_23HrteRgGDZ91SGL5oYWAp",
				premiumPurchaseHeader: "_1vNPpspCrQ3W3_z4l8WXD2",
				premiumIcon: "_2IUxk7I3wGLF67ECxWJaKF",
				titleMain: "_23AsioP9LFdnWNWvf2JxuY",
				titleDescription: "UZLxEtKcYjKnAtMic2BtE",
				closeButton: "W3hCwevNo10JOueQq9XCa",
				closeIcon: "_2Y-ZxM1D66jXobSnwtF5zy",
				premiumPurchaseBody: "_1f5Hj-YmiFvUddjOo3BXUn",
				creditCard: "_1mWVaEygz0IbIgt4I7nhA6",
				selectPayment: "_1W5FK94KCTY0oE-NFNp155",
				checkoutFooter: "_1GdfJOpcU3r4Y3Bj3aURo9",
				premiumPurchaseTotal: "_2DF2iuoYj11YJxwHtRl6k2",
				membershipDescription: "_2bHvYuy1c3aeL3OpvcSrzV",
				premiumPurchaseSelectPaymentFooter: "BKDWqNtFTGRZSXrRVdDzB",
				coinBalance: "_3VRMoYSGnuSeMurnm9AnE",
				premiumPurchaseButton: "_1VvnA3djGhzHigTOUn58Dj",
				paymentCompleteHeader: "_1LcmOk7SUoKQdR-v7knn89",
				paymentCompleteTitleMain: "_1UtE2Rjc4QGWjNU3F7ObST",
				paymentCompleteTitleDescription: "Og7AfSzv9RffDd4Ck06B5",
				paymentCompleteTitleItem: "_3SMYmC6QG8OyE_fULA-V0R",
				paymentCompleteTitleItemLast: "_3idbK2oKeR-XNpK_Q-QgIh",
				poweredByStripeIcon: "_3t8d-2wwATteV4UXKFhSb1",
				errorMessage: "_1625HJ3ZMN4xwl3cV7g2E2",
				stripeForm: "Qe2dMlpz4gcQu7Pb44kZ"
			}
		},
		"./src/reddit/components/PremiumPurchaseModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				u = n("./src/reddit/components/EmergencyMaintenance/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/components/PremiumPurchaseModal/index.m.less"),
				p = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const f = Object(a.b)(null, (e, t) => ({
					closeModal: () => e(Object(i.closePremiumPurchaseModal)()),
					onCloseModalClick: () => e(Object(i.closePremiumPurchaseModal)())
				})),
				y = Object(c.a)(e => {
					let {
						className: t,
						onTryCloseModal: n
					} = e;
					const a = Object(r.useCallback)(e => {
						if (27 === e.keyCode) return n()
					}, [n]);
					return Object(r.useEffect)(() => (document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a)), [a]), o.a.createElement("div", {
						className: t
					}, o.a.createElement(u.a, {
						onClose: n
					}))
				});
			t.default = f(Object(d.c)(class extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						this.onCloseModal()
					}, this.onCloseModal = () => {
						this.props.closeModal()
					}
				}
				render() {
					return o.a.createElement(y, m({}, this.props, {
						className: Object(s.a)(this.props.className, p.a.premiumPurchaseModal),
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						withOverlay: !0
					}))
				}
			}))
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return u
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "e", (function() {
				return f
			}));
			var r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				c = n("./src/reddit/constants/headers.ts"),
				s = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				i = n("./src/reddit/endpoints/gold/purchase.ts");
			const u = async e => {
				let {
					buttonId: t,
					context: n,
					correlationId: u
				} = e;
				const d = {
						button_id: t,
						correlation_id: u
					},
					l = `${n.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					p = Object(s.a)(l);
				return Object(o.a)(Object(a.a)(n, [c.a]), {
					method: r.jb.POST,
					endpoint: p,
					data: d
				}).then(i.a)
			}, d = async e => {
				let {
					context: t,
					coins: n,
					pennies: s,
					correlationId: u
				} = e;
				const d = {
					coins: n,
					pennies: s,
					correlation_id: u
				};
				return Object(o.a)(Object(a.a)(t, [c.a]), {
					method: r.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(i.a)
			}, l = async e => {
				let {
					context: t,
					awardId: n,
					pennies: s,
					thingId: u,
					correlationId: d
				} = e;
				const l = {
					award_id: n,
					correlation_id: d,
					pennies: s,
					thing_id: u
				};
				return Object(o.a)(Object(a.a)(t, [c.a]), {
					method: r.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(i.a)
			}, p = async e => {
				let {
					context: t,
					offerContext: n,
					orderId: s,
					coins: u,
					pennies: d,
					correlationId: l
				} = e;
				const p = {
					offer_context: n,
					order_id: s,
					coins: u,
					pennies: d,
					correlation_id: l
				};
				return Object(o.a)(Object(a.a)(t, [c.a]), {
					method: r.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: p
				}).then(i.a)
			}, m = async e => {
				let {
					awardId: t,
					context: n,
					coins: s,
					correlationId: u,
					isAnonymous: d,
					message: l,
					offerContext: p,
					orderId: m,
					pennies: f,
					thingId: y
				} = e;
				const b = {
					award_id: t,
					coins: s,
					correlation_id: u,
					is_anonymous: d,
					message: l,
					offer_context: p,
					order_id: m,
					pennies: f,
					thing_id: y
				};
				return Object(o.a)(Object(a.a)(n, [c.a]), {
					method: r.jb.POST,
					endpoint: `${n.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: b
				}).then(i.a)
			}, f = async e => {
				let {
					awardId: t,
					context: n,
					correlationId: s,
					isAnonymous: u,
					message: d,
					orderId: l,
					thingId: p
				} = e;
				const m = {
					award_id: t,
					correlation_id: s,
					is_anonymous: u,
					message: d,
					order_id: l,
					thing_id: p
				};
				return Object(o.a)(Object(a.a)(n, [c.a]), {
					method: r.jb.POST,
					endpoint: `${n.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: m
				}).then(i.a)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.6d17187cd25a4f9f1d30.js.map