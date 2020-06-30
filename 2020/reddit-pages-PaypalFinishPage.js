// https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.7ed30bcabe1e74a0c90e.js
// Retrieved at 6/30/2020, 1:40:06 PM by Reddit Dataminer v1.0.0
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
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, r, t) {
			"use strict";
			t.d(r, "g", (function() {
				return I
			})), t.d(r, "f", (function() {
				return q
			})), t.d(r, "e", (function() {
				return N
			})), t.d(r, "c", (function() {
				return L
			})), t.d(r, "b", (function() {
				return M
			})), t.d(r, "a", (function() {
				return U
			})), t.d(r, "d", (function() {
				return B
			}));
			var a = t("./node_modules/fbt/lib/FbtPublic.js"),
				s = t("./node_modules/lodash/omit.js"),
				n = t.n(s),
				o = t("./node_modules/uuid/v4.js"),
				c = t.n(o),
				i = t("./src/config.ts"),
				d = t("./src/reddit/actions/toaster.ts"),
				l = t("./src/lib/addQueryParams/index.ts"),
				p = t("./src/lib/makeActionCreator/index.ts"),
				u = t("./src/lib/sentry/index.ts"),
				g = t("./src/reddit/models/Toast/index.ts"),
				b = t("./src/reddit/actions/gold/constants.ts"),
				m = t("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				h = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				y = t("./src/reddit/selectors/user.ts"),
				f = (t("./node_modules/core-js/modules/es6.regexp.to-string.js"), t("./src/graphql/operations/CancelEconRecurringPayment.json")),
				j = t("./src/graphql/operations/ConfirmPaypalPayment.json"),
				O = t("./src/graphql/operations/CreateEconOrder.json"),
				E = t("./src/graphql/operations/CreatePaypalPayment.json"),
				v = t("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				x = t("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				P = t("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				w = t("./src/graphql/operations/DeleteSavedStripeCard.json"),
				C = t("./src/graphql/operations/UserSavedStripeCards.json"),
				S = t("./src/lib/makeGqlRequest/index.ts");
			const _ = () => a.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				k = e => e.map(e => e.message).join(" : "),
				A = (e, r, t, s) => async (n, o, i) => {
					let {
						gqlContext: d
					} = i;
					const l = c()(),
						p = await ((e, r, t, a, s, n) => Object(S.a)(e, Object.assign({}, O, {
							variables: {
								input: {
									nonce: r,
									productId: t.id,
									productVersion: t.version,
									pricePackageId: t.pricePackages[0].id,
									currency: t.pricePackages[0].currency,
									price: (t.pricePackages[0].price * n).toString(),
									productsCount: n.toString(),
									powerUps: {
										subredditId: a,
										isAnonymous: s
									}
								}
							}
						})))(d(), l, e, r, t, s);
					if (p.ok) {
						const e = p.body,
							{
								errors: r,
								order: t
							} = e.data.createEconOrder;
						if (r && r.length) throw new Error(k(r));
						if (t) return t.id
					}
					throw new Error((() => a.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, I = (e, r, t, s, n) => async (o, i, d) => {
					let {
						gqlContext: l
					} = d;
					const p = i(),
						g = () => o(Object(m.stripeApiError)(a.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						})));
					let b, f, j = "";
					try {
						j = await o(A(r, t, s, n))
					} catch (E) {
						return u.c.captureException(E), void(E.message && o(Object(m.stripeApiError)(E.message)))
					}
					o(Object(m.stripeTokenPending)());
					const O = Object(h.v)(p);
					if (O || (b = await o(Object(m.validateAndCreateStripeToken)(e)), f = Object(h.s)(p), b)) try {
						const e = c()(),
							r = O || f ? b && f ? ((e, r, t, a) => Object(S.a)(e, Object.assign({}, v, {
								variables: {
									nonce: r,
									orderId: t,
									token: a
								}
							})))(l(), e, j, b.id) : O ? ((e, r, t, a) => Object(S.a)(e, Object.assign({}, P, {
								variables: {
									nonce: r,
									orderId: t,
									cardId: a
								}
							})))(l(), e, j, O) : null : ((e, r, t, a) => Object(S.a)(e, Object.assign({}, x, {
								variables: {
									nonce: r,
									orderId: t,
									token: a
								}
							})))(l(), e, j, b.id),
							a = await r;
						if (!a || !a.ok) return void g(); {
							const e = a.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return void o(Object(m.stripeApiError)(k(e.errors)));
							if (e.ok && "PAID" !== e.payment.status) return void g();
							const r = Object(y.i)(i());
							r && o(B({
								subredditId: t,
								powerupsCount: n,
								user: r
							}))
						}
					} catch (E) {
						u.c.captureException(E), g()
					}
				}, q = (e, r, t, a) => async (s, n, o) => {
					let {
						gqlContext: d
					} = o, p = "";
					try {
						p = await s(A(e, r, t, a))
					} catch (b) {
						return u.c.captureException(b), b.message && s(Object(m.paypalApiError)(b.message)), null
					}
					const g = i.a.redditUrl;
					try {
						const e = Object(l.a)("".concat(g, "/framedModal/paypal-finish"), {
								_o: g,
								r,
								o: p,
								s: !0
							}),
							t = Object(l.a)("".concat(g, "/framedModal/paypal-finish"), {
								_o: g,
								r,
								o: p
							}),
							o = c()(),
							i = await ((e, r, t, a, s) => Object(S.a)(e, Object.assign({}, E, {
								variables: {
									nonce: r,
									orderId: t,
									successUrl: a,
									cancelUrl: s
								}
							})))(d(), o, p, e, t);
						if (i && i.ok) {
							const e = i.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return s(Object(m.paypalApiError)(k(e.errors))), null;
							const t = Object(y.i)(n());
							if (e.ok) {
								const {
									status: n
								} = e.payment;
								if ("ACTION_REQUIRED" === n) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === n && t) return s(B({
									subredditId: r,
									powerupsCount: a,
									user: t
								})), null
							}
						}
					} catch (b) {
						u.c.captureException(b)
					}
					return s(Object(m.paypalApiError)(_())), null
				}, N = (e, r) => async (t, a, s) => {
					let {
						gqlContext: n
					} = s;
					try {
						const a = c()(),
							s = await ((e, r, t, a) => Object(S.a)(e, Object.assign({}, j, {
								variables: {
									nonce: r,
									paymentId: t,
									token: a
								}
							})))(n(), a, e, r);
						if (s && s.ok) {
							const e = s.body.data.confirmEconPayment;
							if (e && e.errors && e.errors.length) return t(Object(m.paypalApiError)(k(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (o) {
						u.c.captureException(o)
					}
					return t(Object(m.paypalApiError)(_())), !1
				}, L = () => async (e, r, t) => {
					let {
						gqlContext: s
					} = t;
					e(Object(m.savedCardsPending)());
					try {
						const r = await (e => Object(S.a)(e, Object.assign({}, C, {
							variables: {}
						})))(s());
						if (r.ok) {
							const t = r.body;
							t.errors && t.errors.length && e(Object(m.stripeApiError)(t.errors[0].message));
							const {
								savedStripeCards: a
							} = t.data.identity, s = a.map(e => n()(Object.assign({}, e, {
								cardId: e.id
							}), "id"));
							e(Object(m.savedCardsSuccess)(s)), s[0] && e(Object(m.selectSavedCard)(s[0].cardId))
						} else e(Object(m.stripeApiError)(a.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (o) {
						u.c.captureException(o), e(Object(m.savedCardsSuccess)([]))
					}
				}, M = e => async (r, t, a) => {
					let {
						gqlContext: s
					} = a;
					r(Object(m._deleteSavedCard)(e));
					try {
						const r = await ((e, r) => Object(S.a)(e, Object.assign({}, w, {
							variables: {
								cardId: r
							}
						})))(s(), e);
						if (r.error) throw new Error(r.error.type);
						const t = r.body,
							{
								errors: a
							} = t.data.deleteEconPaymentMethod;
						if (a && a.length) throw new Error(k(a))
					} catch (n) {
						u.c.captureException(n)
					}
				}, D = Object(p.a)(b.L), J = Object(p.a)(b.M), R = Object(p.a)(b.N), T = e => async (r, t) => {
					await r(D(e)), r(Object(d.e)({
						kind: g.b.Error,
						duration: d.a,
						text: e
					}))
				}, U = (e, r, t) => async (s, n, o) => {
					let {
						gqlContext: c
					} = o;
					s(J({
						subredditId: r,
						allocatedAt: t
					}));
					try {
						const n = await ((e, r) => Object(S.a)(e, Object.assign({}, f, {
							variables: {
								orderId: r
							}
						})))(c(), e);
						if (n.ok) {
							const e = n.body,
								{
									errors: a
								} = e.data.cancelEconRecurringPayment;
							if (a && a.length) return void s(T(a[0].message));
							s(R({
								subredditId: r,
								allocatedAt: t
							}))
						} else s(T(a.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						u.c.captureException(i), s(T(a.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, B = Object(p.a)(b.P)
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, r, t) {
			"use strict";
			var a = t("./node_modules/react/index.js"),
				s = t.n(a);

			function n() {
				return (n = Object.assign || function(e) {
					for (var r = 1; r < arguments.length; r++) {
						var t = arguments[r];
						for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a])
					}
					return e
				}).apply(this, arguments)
			}
			r.a = e => s.a.createElement("svg", n({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), s.a.createElement("g", null, s.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
		},
		"./src/reddit/pages/PaypalFinishPage/index.m.less": function(e, r, t) {
			e.exports = {
				loader: "_1ia9yqGevQ-g_70nwfxEm0",
				details: "_3dSBBqfRzgAPNfPqKwl8yR",
				error: "_1qAMyiuz3fo5Au5Cgu3W83",
				repeatButton: "_1hNJdrneOevh1kG25_vuXx",
				repeatIcon: "_39gyI00r3uS5ZeIndcJghA"
			}
		},
		"./src/reddit/pages/PaypalFinishPage/index.tsx": function(e, r, t) {
			"use strict";
			t.r(r);
			var a = t("./node_modules/react/index.js"),
				s = t.n(a),
				n = t("./node_modules/react-redux/es/index.js"),
				o = t("./node_modules/reselect/es/index.js"),
				c = t("./src/reddit/actions/gold/productOfferPurchase.ts"),
				i = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				d = t("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = t("./src/reddit/icons/svgs/Replay/index.tsx"),
				p = t("./src/reddit/pages/PaypalFinishPage/index.m.less"),
				u = t.n(p);
			const {
				fbt: g
			} = t("./node_modules/fbt/lib/FbtPublic.js"), b = "r", m = "o", h = "p", y = "approval_token_id", f = "s", j = Object(o.c)({
				paypalErrorMessage: i.b
			}), O = Object(n.b)(j);
			var E;
			! function(e) {
				e.Loading = "loading", e.Error = "error", e.Success = "success", e.Cancel = "cancel"
			}(E || (E = {}));
			r.default = O(e => {
				const {
					params: r,
					paypalErrorMessage: t
				} = e, o = r[b], i = r[m], p = r[f], j = r[h], O = r[y], v = (() => Object(n.c)())(), x = async () => {
					w(E.Loading), await v(Object(c.e)(j, O)) ? ((() => e.postMessage({
						type: "paypal-finish.success",
						data: {
							subredditId: o,
							orderId: i
						}
					}))(), setTimeout(() => {
						window.close(), w(E.Success)
					}, 1500)) : w(E.Error)
				};
				Object(a.useEffect)(() => {
					p ? x() : ((() => e.postMessage({
						type: "paypal-finish.cancel"
					}))(), setTimeout(() => {
						window.close(), w(E.Cancel)
					}, 1500))
				}, []);
				const [P, w] = Object(a.useState)(E.Loading);
				return s.a.createElement(s.a.Fragment, null, P === E.Loading && s.a.createElement(d.a, {
					className: u.a.loader,
					sizePx: 60
				}), P === E.Error && s.a.createElement("div", {
					className: u.a.details
				}, t && s.a.createElement("div", {
					className: u.a.error
				}, t), s.a.createElement("button", {
					onClick: x,
					className: u.a.repeatButton
				}, s.a.createElement(l.a, {
					className: u.a.repeatIcon
				}))), P === E.Success && s.a.createElement("div", {
					className: u.a.details
				}, g._("Thanks for the purchase. It is safe to close this page now.", null, {
					hk: "1cdx2b"
				})), P === E.Cancel && s.a.createElement("div", {
					className: u.a.details
				}, g._("It is safe to close this page.", null, {
					hk: "Zh0mx"
				})))
			})
		}
	}
]);
//# sourceMappingURL=reddit-pages-PaypalFinishPage.7ed30bcabe1e74a0c90e.js.map