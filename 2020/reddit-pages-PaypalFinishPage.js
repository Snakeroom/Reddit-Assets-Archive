// https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.14acb1b7f51fc0b87155.js
// Retrieved at 7/28/2020, 10:42:45 PM by Reddit Dataminer v1.0.0
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
				return L
			})), r.d(t, "b", (function() {
				return M
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
				j = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				m = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				y = (r("./node_modules/core-js/modules/es6.regexp.to-string.js"), r("./src/graphql/operations/CancelEconRecurringPayment.json")),
				f = r("./src/graphql/operations/ConfirmPaypalPayment.json"),
				O = r("./src/graphql/operations/CreateEconOrder.json"),
				E = r("./src/graphql/operations/CreatePaypalPayment.json"),
				v = r("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
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
						g = () => o(Object(j.stripeApiError)(a.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						})));
					let b, y, f = "";
					try {
						f = await o(A(t, r, s, n))
					} catch (E) {
						return u.c.captureException(E), void(E.message && o(Object(j.stripeApiError)(E.message)))
					}
					o(Object(j.stripeTokenPending)());
					const O = Object(m.v)(p);
					if (O || (b = await o(Object(j.validateAndCreateStripeToken)(e)), y = Object(m.s)(p), b)) try {
						const e = c()(),
							t = O || y ? b && y ? ((e, t, r, a) => Object(S.a)(e, Object.assign(Object.assign({}, v), {
								variables: {
									nonce: t,
									orderId: r,
									token: a
								}
							})))(l(), e, f, b.id) : O ? ((e, t, r, a) => Object(S.a)(e, Object.assign(Object.assign({}, P), {
								variables: {
									nonce: t,
									orderId: r,
									cardId: a
								}
							})))(l(), e, f, O) : null : ((e, t, r, a) => Object(S.a)(e, Object.assign(Object.assign({}, x), {
								variables: {
									nonce: t,
									orderId: r,
									token: a
								}
							})))(l(), e, f, b.id),
							a = await t;
						if (!a || !a.ok) return void g(); {
							const e = a.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return void o(Object(j.stripeApiError)(k(e.errors)));
							if (e.ok && "PAID" !== e.payment.status) return void g();
							const t = Object(h.i)(i());
							t && o(B({
								subredditId: r,
								powerupsCount: n,
								user: t
							}))
						}
					} catch (E) {
						u.c.captureException(E), g()
					}
				}, q = (e, t, r, a) => async (s, n, o) => {
					let {
						gqlContext: d
					} = o, p = "";
					try {
						p = await s(A(e, t, r, a))
					} catch (b) {
						return u.c.captureException(b), b.message && s(Object(j.paypalApiError)(b.message)), null
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
							i = await ((e, t, r, a, s) => Object(S.a)(e, Object.assign(Object.assign({}, E), {
								variables: {
									nonce: t,
									orderId: r,
									successUrl: a,
									cancelUrl: s
								}
							})))(d(), o, p, e, r);
						if (i && i.ok) {
							const e = i.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return s(Object(j.paypalApiError)(k(e.errors))), null;
							const r = Object(h.i)(n());
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
					return s(Object(j.paypalApiError)(_())), null
				}, N = (e, t) => async (r, a, s) => {
					let {
						gqlContext: n
					} = s;
					try {
						const a = c()(),
							s = await ((e, t, r, a) => Object(S.a)(e, Object.assign(Object.assign({}, f), {
								variables: {
									nonce: t,
									paymentId: r,
									token: a
								}
							})))(n(), a, e, t);
						if (s && s.ok) {
							const e = s.body.data.confirmEconPayment;
							if (e && e.errors && e.errors.length) return r(Object(j.paypalApiError)(k(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (o) {
						u.c.captureException(o)
					}
					return r(Object(j.paypalApiError)(_())), !1
				}, L = () => async (e, t, r) => {
					let {
						gqlContext: s
					} = r;
					e(Object(j.savedCardsPending)());
					try {
						const t = await (e => Object(S.a)(e, Object.assign(Object.assign({}, C), {
							variables: {}
						})))(s());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(j.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: a
							} = r.data.identity, s = a.map(e => n()(Object.assign(Object.assign({}, e), {
								cardId: e.id
							}), "id"));
							e(Object(j.savedCardsSuccess)(s)), s[0] && e(Object(j.selectSavedCard)(s[0].cardId))
						} else e(Object(j.stripeApiError)(a.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (o) {
						u.c.captureException(o), e(Object(j.savedCardsSuccess)([]))
					}
				}, M = e => async (t, r, a) => {
					let {
						gqlContext: s
					} = a;
					t(Object(j._deleteSavedCard)(e));
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
				}, D = Object(p.a)(b.L), J = Object(p.a)(b.M), R = Object(p.a)(b.N), T = e => async (t, r) => {
					await t(D(e)), t(Object(d.e)({
						kind: g.b.Error,
						duration: d.a,
						text: e
					}))
				}, U = (e, t, r) => async (s, n, o) => {
					let {
						gqlContext: c
					} = o;
					s(J({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const n = await ((e, t) => Object(S.a)(e, Object.assign(Object.assign({}, y), {
							variables: {
								orderId: t
							}
						})))(c(), e);
						if (n.ok) {
							const e = n.body,
								{
									errors: a
								} = e.data.cancelEconRecurringPayment;
							if (a && a.length) return void s(T(a[0].message));
							s(R({
								subredditId: t,
								allocatedAt: r
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
				i = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				d = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = r("./src/reddit/icons/svgs/Replay/index.tsx"),
				p = r("./src/reddit/pages/PaypalFinishPage/index.m.less"),
				u = r.n(p);
			const {
				fbt: g
			} = r("./node_modules/fbt/lib/FbtPublic.js"), b = "r", j = "o", m = "p", h = "approval_token_id", y = "s", f = Object(o.c)({
				paypalErrorMessage: i.b
			}), O = Object(n.b)(f);
			var E;
			! function(e) {
				e.Loading = "loading", e.Error = "error", e.Success = "success", e.Cancel = "cancel"
			}(E || (E = {}));
			t.default = O(e => {
				const {
					params: t,
					paypalErrorMessage: r
				} = e, o = t[b], i = t[j], p = t[y], f = t[m], O = t[h], v = (() => Object(n.c)())(), x = async () => {
					w(E.Loading), await v(Object(c.e)(f, O)) ? ((() => e.postMessage({
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
				}, r && s.a.createElement("div", {
					className: u.a.error
				}, r), s.a.createElement("button", {
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
//# sourceMappingURL=reddit-pages-PaypalFinishPage.14acb1b7f51fc0b87155.js.map