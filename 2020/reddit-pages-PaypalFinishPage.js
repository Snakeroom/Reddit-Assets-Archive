// https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.dff76b51ad898a83af22.js
// Retrieved at 9/9/2020, 4:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-pages-PaypalFinishPage"], {
		"./src/graphql/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
		},
		"./src/graphql/operations/ConfirmPaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"6ad51fec38be"}')
		},
		"./src/graphql/operations/CreateEconOrder.json": function(e) {
			e.exports = JSON.parse('{"id":"1bf318d40021"}')
		},
		"./src/graphql/operations/CreatePaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"8bca171d6bb4"}')
		},
		"./src/graphql/operations/CreateStripePaymentWithProvidedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"179702814d8f"}')
		},
		"./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json": function(e) {
			e.exports = JSON.parse('{"id":"6d178a1662ba"}')
		},
		"./src/graphql/operations/CreateStripePaymentWithSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"9fc54f6de447"}')
		},
		"./src/graphql/operations/DeleteSavedStripeCard.json": function(e) {
			e.exports = JSON.parse('{"id":"87230cb9dec2"}')
		},
		"./src/graphql/operations/UserSavedStripeCards.json": function(e) {
			e.exports = JSON.parse('{"id":"d29c51cfbfe6"}')
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return I
			})), r.d(t, "f", (function() {
				return q
			})), r.d(t, "e", (function() {
				return N
			})), r.d(t, "c", (function() {
				return D
			})), r.d(t, "b", (function() {
				return T
			})), r.d(t, "a", (function() {
				return U
			})), r.d(t, "d", (function() {
				return B
			}));
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/omit.js"),
				n = r.n(s),
				o = r("./node_modules/uuid/v4.js"),
				c = r.n(o),
				i = r("./src/config.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/lib/addQueryParams/index.ts"),
				p = r("./src/lib/makeActionCreator/index.ts"),
				u = r("./src/lib/sentry/index.ts"),
				g = r("./src/reddit/models/Toast/index.ts"),
				b = r("./src/reddit/actions/gold/constants.ts"),
				h = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				j = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				f = (r("./node_modules/core-js/modules/es6.regexp.to-string.js"), r("./src/graphql/operations/CancelEconRecurringPayment.json")),
				y = r("./src/graphql/operations/ConfirmPaypalPayment.json"),
				O = r("./src/graphql/operations/CreateEconOrder.json"),
				v = r("./src/graphql/operations/CreatePaypalPayment.json"),
				E = r("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				x = r("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				P = r("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				w = r("./src/graphql/operations/DeleteSavedStripeCard.json"),
				C = r("./src/graphql/operations/UserSavedStripeCards.json"),
				S = r("./src/lib/makeGqlRequest/index.ts");
			const _ = () => a.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				k = e => e.map(e => e.message).join(" : "),
				A = (e, t, r, s) => async (n, o, i) => {
					let {
						gqlContext: d
					} = i;
					const l = c()(),
						p = await ((e, t, r, a, s, n) => Object(S.a)(e, Object.assign(Object.assign({}, O), {
							variables: {
								input: {
									nonce: t,
									productId: r.id,
									productVersion: r.version,
									pricePackageId: r.pricePackages[0].id,
									currency: r.pricePackages[0].currency,
									price: (r.pricePackages[0].price * n).toString(),
									productsCount: n.toString(),
									powerUps: {
										subredditId: a,
										isAnonymous: s
									}
								}
							}
						})))(d(), l, e, t, r, s);
					if (p.ok) {
						const e = p.body,
							{
								errors: t,
								order: r
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(k(t));
						if (r) return r.id
					}
					throw new Error((() => a.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, I = (e, t, r, s, n) => async (o, i, d) => {
					let {
						gqlContext: l
					} = d;
					const p = i(),
						g = () => o(Object(h.stripeApiError)(a.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						})));
					let b, f, y = "";
					try {
						y = await o(A(t, r, s, n))
					} catch (v) {
						return u.c.captureException(v), void(v.message && o(Object(h.stripeApiError)(v.message)))
					}
					o(Object(h.stripeTokenPending)());
					const O = Object(j.v)(p);
					if (O || (b = await o(Object(h.validateAndCreateStripeToken)(e)), f = Object(j.s)(p), b)) try {
						const e = c()(),
							t = O || f ? b && f ? ((e, t, r, a) => Object(S.a)(e, Object.assign(Object.assign({}, E), {
								variables: {
									nonce: t,
									orderId: r,
									token: a
								}
							})))(l(), e, y, b.id) : O ? ((e, t, r, a) => Object(S.a)(e, Object.assign(Object.assign({}, P), {
								variables: {
									nonce: t,
									orderId: r,
									cardId: a
								}
							})))(l(), e, y, O) : null : ((e, t, r, a) => Object(S.a)(e, Object.assign(Object.assign({}, x), {
								variables: {
									nonce: t,
									orderId: r,
									token: a
								}
							})))(l(), e, y, b.id),
							a = await t;
						if (!a || !a.ok) return void g(); {
							const e = a.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return void o(Object(h.stripeApiError)(k(e.errors)));
							if (e.ok && "PAID" !== e.payment.status) return void g();
							const t = Object(m.i)(i());
							t && o(B({
								subredditId: r,
								powerupsCount: n,
								user: t
							}))
						}
					} catch (v) {
						u.c.captureException(v), g()
					}
				}, q = (e, t, r, a) => async (s, n, o) => {
					let {
						gqlContext: d
					} = o, p = "";
					try {
						p = await s(A(e, t, r, a))
					} catch (b) {
						return u.c.captureException(b), b.message && s(Object(h.paypalApiError)(b.message)), null
					}
					const g = i.a.redditUrl;
					try {
						const e = Object(l.a)("".concat(g, "/framedModal/paypal-finish"), {
								_o: g,
								r: t,
								o: p,
								s: !0
							}),
							r = Object(l.a)("".concat(g, "/framedModal/paypal-finish"), {
								_o: g,
								r: t,
								o: p
							}),
							o = c()(),
							i = await ((e, t, r, a, s) => Object(S.a)(e, Object.assign(Object.assign({}, v), {
								variables: {
									nonce: t,
									orderId: r,
									successUrl: a,
									cancelUrl: s
								}
							})))(d(), o, p, e, r);
						if (i && i.ok) {
							const e = i.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return s(Object(h.paypalApiError)(k(e.errors))), null;
							const r = Object(m.i)(n());
							if (e.ok) {
								const {
									status: n
								} = e.payment;
								if ("ACTION_REQUIRED" === n) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === n && r) return s(B({
									subredditId: t,
									powerupsCount: a,
									user: r
								})), null
							}
						}
					} catch (b) {
						u.c.captureException(b)
					}
					return s(Object(h.paypalApiError)(_())), null
				}, N = (e, t) => async (r, a, s) => {
					let {
						gqlContext: n
					} = s;
					try {
						const a = c()(),
							s = await ((e, t, r, a) => Object(S.a)(e, Object.assign(Object.assign({}, y), {
								variables: {
									nonce: t,
									paymentId: r,
									token: a
								}
							})))(n(), a, e, t);
						if (s && s.ok) {
							const e = s.body.data.confirmEconPayment;
							if (e && e.errors && e.errors.length) return r(Object(h.paypalApiError)(k(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (o) {
						u.c.captureException(o)
					}
					return r(Object(h.paypalApiError)(_())), !1
				}, D = () => async (e, t, r) => {
					let {
						gqlContext: s
					} = r;
					e(Object(h.savedCardsPending)());
					try {
						const t = await (e => Object(S.a)(e, Object.assign(Object.assign({}, C), {
							variables: {}
						})))(s());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(h.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: a
							} = r.data.identity, s = a.map(e => n()(Object.assign(Object.assign({}, e), {
								cardId: e.id
							}), "id"));
							e(Object(h.savedCardsSuccess)(s)), s[0] && e(Object(h.selectSavedCard)(s[0].cardId))
						} else e(Object(h.stripeApiError)(a.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (o) {
						u.c.captureException(o), e(Object(h.savedCardsSuccess)([]))
					}
				}, T = e => async (t, r, a) => {
					let {
						gqlContext: s
					} = a;
					t(Object(h._deleteSavedCard)(e));
					try {
						const t = await ((e, t) => Object(S.a)(e, Object.assign(Object.assign({}, w), {
							variables: {
								cardId: t
							}
						})))(s(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: a
							} = r.data.deleteEconPaymentMethod;
						if (a && a.length) throw new Error(k(a))
					} catch (n) {
						u.c.captureException(n)
					}
				}, L = Object(p.a)(b.P), M = Object(p.a)(b.Q), J = Object(p.a)(b.R), R = e => async (t, r) => {
					await t(L(e)), t(Object(d.e)({
						kind: g.b.Error,
						duration: d.a,
						text: e
					}))
				}, U = (e, t, r) => async (s, n, o) => {
					let {
						gqlContext: c
					} = o;
					s(M({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const n = await ((e, t) => Object(S.a)(e, Object.assign(Object.assign({}, f), {
							variables: {
								orderId: t
							}
						})))(c(), e);
						if (n.ok) {
							const e = n.body,
								{
									errors: a
								} = e.data.cancelEconRecurringPayment;
							if (a && a.length) return void s(R(a[0].message));
							s(J({
								subredditId: t,
								allocatedAt: r
							}))
						} else s(R(a.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						u.c.captureException(i), s(R(a.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, B = Object(p.a)(b.T)
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var a = r("./node_modules/react-redux/es/index.js");

			function s() {
				return Object(a.c)()
			}
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				s = r.n(a);

			function n() {
				return (n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", n({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), s.a.createElement("g", null, s.a.createElement("path", {
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
			var a = r("./node_modules/react/index.js"),
				s = r.n(a),
				n = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				i = r("./src/reddit/hooks/useThunkDispatch.ts"),
				d = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				l = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = r("./src/reddit/icons/svgs/Replay/index.tsx"),
				u = r("./src/reddit/pages/PaypalFinishPage/index.m.less"),
				g = r.n(u);
			const {
				fbt: b
			} = r("./node_modules/fbt/lib/FbtPublic.js"), h = "r", j = "o", m = "p", f = "approval_token_id", y = "s", O = Object(o.c)({
				paypalErrorMessage: d.b
			}), v = Object(n.b)(O);
			var E;
			! function(e) {
				e.Loading = "loading", e.Error = "error", e.Success = "success", e.Cancel = "cancel"
			}(E || (E = {}));
			t.default = v(e => {
				const {
					params: t,
					paypalErrorMessage: r
				} = e, n = t[h], o = t[j], d = t[y], u = t[m], O = t[f], v = Object(i.a)(), x = async () => {
					w(E.Loading), await v(Object(c.e)(u, O)) ? ((() => e.postMessage({
						type: "paypal-finish.success",
						data: {
							subredditId: n,
							orderId: o
						}
					}))(), setTimeout(() => {
						window.close(), w(E.Success)
					}, 1500)) : w(E.Error)
				};
				Object(a.useEffect)(() => {
					d ? x() : ((() => e.postMessage({
						type: "paypal-finish.cancel"
					}))(), setTimeout(() => {
						window.close(), w(E.Cancel)
					}, 1500))
				}, []);
				const [P, w] = Object(a.useState)(E.Loading);
				return s.a.createElement(s.a.Fragment, null, P === E.Loading && s.a.createElement(l.a, {
					className: g.a.loader,
					sizePx: 60
				}), P === E.Error && s.a.createElement("div", {
					className: g.a.details
				}, r && s.a.createElement("div", {
					className: g.a.error
				}, r), s.a.createElement("button", {
					onClick: x,
					className: g.a.repeatButton
				}, s.a.createElement(p.a, {
					className: g.a.repeatIcon
				}))), P === E.Success && s.a.createElement("div", {
					className: g.a.details
				}, b._("Thanks for the purchase. It is safe to close this page now.", null, {
					hk: "1cdx2b"
				})), P === E.Cancel && s.a.createElement("div", {
					className: g.a.details
				}, b._("It is safe to close this page.", null, {
					hk: "Zh0mx"
				})))
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.dff76b51ad898a83af22.js.map