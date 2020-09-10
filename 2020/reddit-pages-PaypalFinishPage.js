// https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.49e5fd2fd3093ee9270e.js
// Retrieved at 9/10/2020, 2:00:09 PM by Reddit Dataminer v1.0.0
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
				return N
			})), r.d(t, "f", (function() {
				return D
			})), r.d(t, "e", (function() {
				return R
			})), r.d(t, "c", (function() {
				return T
			})), r.d(t, "b", (function() {
				return L
			})), r.d(t, "a", (function() {
				return W
			})), r.d(t, "d", (function() {
				return Q
			}));
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/omit.js"),
				n = r.n(s),
				o = r("./node_modules/uuid/v4.js"),
				c = r.n(o),
				i = r("./src/config.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				p = r("./src/lib/addQueryParams/index.ts"),
				u = r("./src/lib/makeActionCreator/index.ts"),
				g = r("./src/lib/sentry/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				j = r("./src/reddit/actions/gold/constants.ts"),
				m = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				h = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				f = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/actions/modal.ts"),
				O = (r("./node_modules/core-js/modules/es6.regexp.to-string.js"), r("./src/graphql/operations/CancelEconRecurringPayment.json")),
				E = r("./src/graphql/operations/ConfirmPaypalPayment.json"),
				v = r("./src/graphql/operations/CreateEconOrder.json"),
				P = r("./src/graphql/operations/CreatePaypalPayment.json"),
				x = r("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				w = r("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				C = r("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				S = r("./src/graphql/operations/DeleteSavedStripeCard.json"),
				_ = r("./src/graphql/operations/UserSavedStripeCards.json"),
				k = r("./src/lib/makeGqlRequest/index.ts");
			const A = () => a.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				I = e => e.map(e => e.message).join(" : "),
				q = (e, t, r, s) => async (n, o, i) => {
					let {
						gqlContext: d
					} = i;
					const l = c()(),
						p = await ((e, t, r, a, s, n) => Object(k.a)(e, Object.assign(Object.assign({}, v), {
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
						if (t && t.length) throw new Error(I(t));
						if (r) return r.id
					}
					throw new Error((() => a.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, N = (e, t, r, s, n) => async (o, i, d) => {
					let {
						gqlContext: l
					} = d;
					const p = i(),
						u = () => o(Object(m.stripeApiError)(a.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						})));
					let b, j, y = "";
					try {
						y = await o(q(t, r, s, n))
					} catch (E) {
						return g.c.captureException(E), void(E.message && o(Object(m.stripeApiError)(E.message)))
					}
					o(Object(m.stripeTokenPending)());
					const O = Object(h.v)(p);
					if (O || (b = await o(Object(m.validateAndCreateStripeToken)(e)), j = Object(h.s)(p), b)) try {
						const e = c()(),
							t = O || j ? b && j ? ((e, t, r, a) => Object(k.a)(e, Object.assign(Object.assign({}, x), {
								variables: {
									nonce: t,
									orderId: r,
									token: a
								}
							})))(l(), e, y, b.id) : O ? ((e, t, r, a) => Object(k.a)(e, Object.assign(Object.assign({}, C), {
								variables: {
									nonce: t,
									orderId: r,
									cardId: a
								}
							})))(l(), e, y, O) : null : ((e, t, r, a) => Object(k.a)(e, Object.assign(Object.assign({}, w), {
								variables: {
									nonce: t,
									orderId: r,
									token: a
								}
							})))(l(), e, y, b.id),
							a = await t;
						if (!a || !a.ok) return void u(); {
							const e = a.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return void o(Object(m.stripeApiError)(I(e.errors)));
							if (e.ok && "PAID" !== e.payment.status) return void u();
							const t = Object(f.i)(i());
							t && o(Q({
								subredditId: r,
								powerupsCount: n,
								user: t
							}))
						}
					} catch (E) {
						g.c.captureException(E), u()
					}
				}, D = (e, t, r, a) => async (s, n, o) => {
					let {
						gqlContext: d
					} = o, l = "";
					try {
						l = await s(q(e, t, r, a))
					} catch (b) {
						return g.c.captureException(b), b.message && s(Object(m.paypalApiError)(b.message)), null
					}
					const u = i.a.redditUrl;
					try {
						const e = Object(p.a)("".concat(u, "/framedModal/paypal-finish"), {
								_o: u,
								r: t,
								o: l,
								s: !0
							}),
							r = Object(p.a)("".concat(u, "/framedModal/paypal-finish"), {
								_o: u,
								r: t,
								o: l
							}),
							o = c()(),
							i = await ((e, t, r, a, s) => Object(k.a)(e, Object.assign(Object.assign({}, P), {
								variables: {
									nonce: t,
									orderId: r,
									successUrl: a,
									cancelUrl: s
								}
							})))(d(), o, l, e, r);
						if (i && i.ok) {
							const e = i.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return s(Object(m.paypalApiError)(I(e.errors))), null;
							const r = Object(f.i)(n());
							if (e.ok) {
								const {
									status: n
								} = e.payment;
								if ("ACTION_REQUIRED" === n) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === n && r) return s(Q({
									subredditId: t,
									powerupsCount: a,
									user: r
								})), null
							}
						}
					} catch (b) {
						g.c.captureException(b)
					}
					return s(Object(m.paypalApiError)(A())), null
				}, R = (e, t) => async (r, a, s) => {
					let {
						gqlContext: n
					} = s;
					try {
						const a = c()(),
							s = await ((e, t, r, a) => Object(k.a)(e, Object.assign(Object.assign({}, E), {
								variables: {
									nonce: t,
									paymentId: r,
									token: a
								}
							})))(n(), a, e, t);
						if (s && s.ok) {
							const e = s.body.data.confirmEconPayment;
							if (e && e.errors && e.errors.length) return r(Object(m.paypalApiError)(I(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (o) {
						g.c.captureException(o)
					}
					return r(Object(m.paypalApiError)(A())), !1
				}, T = () => async (e, t, r) => {
					let {
						gqlContext: s
					} = r;
					e(Object(m.savedCardsPending)());
					try {
						const t = await (e => Object(k.a)(e, Object.assign(Object.assign({}, _), {
							variables: {}
						})))(s());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(m.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: a
							} = r.data.identity, s = a.map(e => n()(Object.assign(Object.assign({}, e), {
								cardId: e.id
							}), "id"));
							e(Object(m.savedCardsSuccess)(s)), s[0] && e(Object(m.selectSavedCard)(s[0].cardId))
						} else e(Object(m.stripeApiError)(a.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (o) {
						g.c.captureException(o), e(Object(m.savedCardsSuccess)([]))
					}
				}, L = e => async (t, r, a) => {
					let {
						gqlContext: s
					} = a;
					t(Object(m._deleteSavedCard)(e));
					try {
						const t = await ((e, t) => Object(k.a)(e, Object.assign(Object.assign({}, S), {
							variables: {
								cardId: t
							}
						})))(s(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: a
							} = r.data.deleteEconPaymentMethod;
						if (a && a.length) throw new Error(I(a))
					} catch (n) {
						g.c.captureException(n)
					}
				}, M = Object(u.a)(j.P), U = Object(u.a)(j.Q), J = Object(u.a)(j.R), B = e => async (t, r) => {
					await t(M(e)), t(Object(l.e)({
						kind: b.b.Error,
						duration: l.a,
						text: e
					}))
				}, W = (e, t, r) => async (s, n, o) => {
					let {
						gqlContext: c
					} = o;
					s(U({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const n = await ((e, t) => Object(k.a)(e, Object.assign(Object.assign({}, O), {
							variables: {
								orderId: t
							}
						})))(c(), e);
						if (n.ok) {
							const e = n.body,
								{
									errors: a
								} = e.data.cancelEconRecurringPayment;
							if (a && a.length) return void s(B(a[0].message));
							s(J({
								subredditId: t,
								allocatedAt: r
							}))
						} else s(B(a.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						g.c.captureException(i), s(B(a.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, F = Object(u.a)(j.T), Q = e => async (t, r) => {
					t(F(e)), t(Object(y.g)(d.a.ECON_POWERUPS_PURCHASE))
				}
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
				i = r("./src/reddit/actions/platform.ts"),
				d = r("./src/reddit/hooks/useThunkDispatch.ts"),
				l = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				p = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = r("./src/reddit/icons/svgs/Replay/index.tsx"),
				g = r("./src/reddit/pages/PaypalFinishPage/index.m.less"),
				b = r.n(g);
			const {
				fbt: j
			} = r("./node_modules/fbt/lib/FbtPublic.js"), m = "r", h = "o", f = "p", y = "approval_token_id", O = "s", E = Object(o.c)({
				paypalErrorMessage: l.b
			}), v = Object(n.b)(E);
			var P;
			! function(e) {
				e.Loading = "loading", e.Error = "error", e.Success = "success", e.Cancel = "cancel"
			}(P || (P = {}));
			t.default = v(e => {
				const {
					params: t,
					paypalErrorMessage: r
				} = e, n = t[m], o = t[h], l = t[O], g = t[f], E = t[y], v = Object(d.a)(), x = async () => {
					C(P.Loading), await v(Object(c.e)(g, E)) ? ((() => e.postMessage({
						type: "paypal-finish.success",
						data: {
							subredditId: n,
							orderId: o
						}
					}))(), setTimeout(() => {
						window.close(), C(P.Success)
					}, 1500)) : C(P.Error)
				};
				Object(a.useEffect)(() => {
					v(Object(i.l)({
						title: j._("Reddit - Buy Powerups", null, {
							hk: "4sEI31"
						})
					})), l ? x() : ((() => e.postMessage({
						type: "paypal-finish.cancel"
					}))(), setTimeout(() => {
						window.close(), C(P.Cancel)
					}, 1500))
				}, []);
				const [w, C] = Object(a.useState)(P.Loading);
				return s.a.createElement(s.a.Fragment, null, w === P.Loading && s.a.createElement(p.a, {
					className: b.a.loader,
					sizePx: 60
				}), w === P.Error && s.a.createElement("div", {
					className: b.a.details
				}, r && s.a.createElement("div", {
					className: b.a.error
				}, r), s.a.createElement("button", {
					onClick: x,
					className: b.a.repeatButton
				}, s.a.createElement(u.a, {
					className: b.a.repeatIcon
				}))), w === P.Success && s.a.createElement("div", {
					className: b.a.details
				}, j._("Thanks for the purchase. It is safe to close this page now.", null, {
					hk: "1cdx2b"
				})), w === P.Cancel && s.a.createElement("div", {
					className: b.a.details
				}, j._("It is safe to close this page.", null, {
					hk: "Zh0mx"
				})))
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.49e5fd2fd3093ee9270e.js.map