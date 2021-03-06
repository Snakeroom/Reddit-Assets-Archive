// https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.f996dcdfb96e2329406c.js
// Retrieved at 10/29/2020, 4:20:08 PM by Reddit Dataminer v1.0.0
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
			r.d(t, "b", (function() {
				return R
			})), r.d(t, "h", (function() {
				return L
			})), r.d(t, "g", (function() {
				return T
			})), r.d(t, "f", (function() {
				return U
			})), r.d(t, "d", (function() {
				return M
			})), r.d(t, "c", (function() {
				return B
			})), r.d(t, "a", (function() {
				return G
			})), r.d(t, "e", (function() {
				return H
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/omit.js"),
				n = r.n(a),
				o = r("./node_modules/uuid/v4.js"),
				c = r.n(o),
				i = r("./src/config.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				p = r("./src/lib/addQueryParams/index.ts"),
				u = r("./src/lib/makeActionCreator/index.ts"),
				g = r("./src/lib/sentry/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				m = r("./src/reddit/actions/gold/constants.ts"),
				f = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				j = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/actions/gold/powerups.ts"),
				O = r("./src/reddit/actions/modal.ts"),
				P = (r("./node_modules/core-js/modules/es6.regexp.to-string.js"), r("./node_modules/bignumber.js/bignumber.js")),
				E = r.n(P),
				w = r("./src/graphql/operations/CancelEconRecurringPayment.json"),
				x = r("./src/graphql/operations/ConfirmPaypalPayment.json"),
				v = r("./src/graphql/operations/CreateEconOrder.json"),
				C = r("./src/graphql/operations/CreatePaypalPayment.json"),
				S = r("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				_ = r("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				k = r("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				A = r("./src/graphql/operations/DeleteSavedStripeCard.json"),
				I = r("./src/graphql/operations/UserSavedStripeCards.json"),
				q = r("./src/lib/makeGqlRequest/index.ts");
			const N = () => s.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				D = e => e.map(e => e.message).join(" : "),
				R = (e, t, r) => async (a, n, o) => {
					let {
						gqlContext: i
					} = o;
					const d = c()(),
						l = await ((e, t, r, s, a) => {
							const n = new E.a(r.pricePackages[0].price).multipliedBy(s).toFixed();
							return Object(q.a)(e, Object.assign(Object.assign({}, v), {
								variables: {
									input: Object.assign({
										nonce: t,
										productId: r.id,
										productVersion: r.version,
										pricePackageId: r.pricePackages[0].id,
										currency: r.pricePackages[0].currency,
										price: n,
										productsCount: s.toString()
									}, a)
								}
							}))
						})(i(), d, e, t, r);
					if (l.ok) {
						const e = l.body,
							{
								errors: t,
								order: r
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(D(t));
						if (r) return r.id
					}
					throw new Error((() => s.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, L = (e, t, r, a, n) => async (o, i, d) => {
					let {
						gqlContext: l
					} = d;
					const p = i(),
						u = () => o(Object(f.stripeApiError)(s.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						})));
					let b, m, y = "";
					try {
						y = await o(R(t, n, {
							powerUps: {
								subredditId: r,
								isAnonymous: a
							}
						}))
					} catch (P) {
						return g.c.captureException(P), void(P.message && o(Object(f.stripeApiError)(P.message)))
					}
					o(Object(f.stripeTokenPending)());
					const O = Object(j.w)(p);
					if (O || (b = await o(Object(f.validateAndCreateStripeToken)(e)), m = Object(j.t)(p), b)) try {
						const e = c()(),
							t = O || m ? b && m ? ((e, t, r, s) => Object(q.a)(e, Object.assign(Object.assign({}, S), {
								variables: {
									nonce: t,
									orderId: r,
									token: s
								}
							})))(l(), e, y, b.id) : O ? ((e, t, r, s) => Object(q.a)(e, Object.assign(Object.assign({}, k), {
								variables: {
									nonce: t,
									orderId: r,
									cardId: s
								}
							})))(l(), e, y, O) : null : ((e, t, r, s) => Object(q.a)(e, Object.assign(Object.assign({}, _), {
								variables: {
									nonce: t,
									orderId: r,
									token: s
								}
							})))(l(), e, y, b.id),
							s = await t;
						if (!s || !s.ok) return void u(); {
							const e = s.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return void o(Object(f.stripeApiError)(D(e.errors)));
							if (e.ok && "PAID" !== e.payment.status) return void u();
							const t = Object(h.i)(i());
							t && o(H({
								subredditId: r,
								powerupsCount: n,
								user: t,
								isAnonymous: a
							}))
						}
					} catch (P) {
						g.c.captureException(P), u()
					}
				}, T = (e, t, r, s) => async (a, n, o) => {
					let {
						gqlContext: d
					} = o, l = "";
					try {
						l = await a(R(e, s, {
							powerUps: {
								subredditId: t,
								isAnonymous: r
							}
						}))
					} catch (b) {
						return g.c.captureException(b), b.message && a(Object(f.paypalApiError)(b.message)), null
					}
					const u = i.a.redditUrl;
					try {
						const e = Object(p.a)("".concat(u, "/framedModal/paypal-finish"), {
								_o: u,
								r: t,
								o: l,
								s: !0
							}),
							o = Object(p.a)("".concat(u, "/framedModal/paypal-finish"), {
								_o: u,
								r: t,
								o: l
							}),
							i = c()(),
							g = await ((e, t, r, s, a) => Object(q.a)(e, Object.assign(Object.assign({}, C), {
								variables: {
									nonce: t,
									orderId: r,
									successUrl: s,
									cancelUrl: a
								}
							})))(d(), i, l, e, o);
						if (g && g.ok) {
							const e = g.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return a(Object(f.paypalApiError)(D(e.errors))), null;
							const o = Object(h.i)(n());
							if (e.ok) {
								const {
									status: n
								} = e.payment;
								if ("ACTION_REQUIRED" === n) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === n && o) return a(H({
									subredditId: t,
									powerupsCount: s,
									user: o,
									isAnonymous: r
								})), null
							}
						}
					} catch (b) {
						g.c.captureException(b)
					}
					return a(Object(f.paypalApiError)(N())), null
				}, U = (e, t) => async (r, s, a) => {
					let {
						gqlContext: n
					} = a;
					try {
						const s = c()(),
							a = await ((e, t, r, s) => Object(q.a)(e, Object.assign(Object.assign({}, x), {
								variables: {
									nonce: t,
									paymentId: r,
									token: s
								}
							})))(n(), s, e, t);
						if (a && a.ok) {
							const e = a.body.data.confirmEconPayment;
							if (e && e.errors && e.errors.length) return r(Object(f.paypalApiError)(D(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (o) {
						g.c.captureException(o)
					}
					return r(Object(f.paypalApiError)(N())), !1
				}, M = () => async (e, t, r) => {
					let {
						gqlContext: a
					} = r;
					e(Object(f.savedCardsPending)());
					try {
						const t = await (e => Object(q.a)(e, Object.assign(Object.assign({}, I), {
							variables: {}
						})))(a());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(f.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: s
							} = r.data.identity, a = s.map(e => n()(Object.assign(Object.assign({}, e), {
								cardId: e.id
							}), "id"));
							e(Object(f.savedCardsSuccess)(a)), a[0] && e(Object(f.selectSavedCard)(a[0].cardId))
						} else e(Object(f.stripeApiError)(s.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (o) {
						g.c.captureException(o), e(Object(f.savedCardsSuccess)([]))
					}
				}, B = e => async (t, r, s) => {
					let {
						gqlContext: a
					} = s;
					t(Object(f._deleteSavedCard)(e));
					try {
						const t = await ((e, t) => Object(q.a)(e, Object.assign(Object.assign({}, A), {
							variables: {
								cardId: t
							}
						})))(a(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: s
							} = r.data.deleteEconPaymentMethod;
						if (s && s.length) throw new Error(D(s))
					} catch (n) {
						g.c.captureException(n)
					}
				}, J = Object(u.a)(m.P), F = Object(u.a)(m.Q), W = Object(u.a)(m.R), Q = e => async (t, r) => {
					await t(J(e)), t(Object(l.e)({
						kind: b.b.Error,
						duration: l.a,
						text: e
					}))
				}, G = (e, t, r) => async (a, n, o) => {
					let {
						gqlContext: c
					} = o;
					a(F({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const n = await ((e, t) => Object(q.a)(e, Object.assign(Object.assign({}, w), {
							variables: {
								orderId: t
							}
						})))(c(), e);
						if (n.ok) {
							const e = n.body,
								{
									errors: s
								} = e.data.cancelEconRecurringPayment;
							if (s && s.length) return void a(Q(s[0].message));
							a(W({
								subredditId: t,
								allocatedAt: r
							}))
						} else a(Q(s.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						g.c.captureException(i), a(Q(s.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, z = Object(u.a)(m.T), H = e => async (t, r) => {
					t(z(e)), t(Object(y.f)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(O.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(l.e)({
						kind: b.b.SuccessCommunityGreen,
						duration: l.a,
						text: s.fbt._({
							"*": "Purchase of {number of Powerups} Powerups is complete.",
							_1: "Purchase of 1 Powerup is complete."
						}, [s.fbt._plural(e.powerupsCount, "number of Powerups")], {
							hk: "28cBuw"
						})
					}))
				}
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var s = r("./node_modules/react-redux/es/index.js");

			function a() {
				return Object(s.c)()
			}
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/react/index.js"),
				a = r.n(s);

			function n() {
				return (n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", n({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), a.a.createElement("g", null, a.a.createElement("path", {
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
			var s = r("./node_modules/react/index.js"),
				a = r.n(s),
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
				fbt: m
			} = r("./node_modules/fbt/lib/FbtPublic.js"), f = "r", j = "o", h = "p", y = "approval_token_id", O = "s", P = Object(o.c)({
				paypalErrorMessage: l.c
			}), E = Object(n.b)(P);
			var w;
			! function(e) {
				e.Loading = "loading", e.Error = "error", e.Success = "success", e.Cancel = "cancel"
			}(w || (w = {}));
			t.default = E(e => {
				const {
					params: t,
					paypalErrorMessage: r
				} = e, n = t[f], o = t[j], l = t[O], g = t[h], P = t[y], E = Object(d.a)(), x = async () => {
					C(w.Loading), await E(Object(c.f)(g, P)) ? ((() => e.postMessage({
						type: "paypal-finish.success",
						data: {
							subredditId: n,
							orderId: o
						}
					}))(), setTimeout(() => {
						window.close(), C(w.Success)
					}, 1500)) : C(w.Error)
				};
				Object(s.useEffect)(() => {
					E(Object(i.l)({
						title: m._("Reddit - Buy Powerups", null, {
							hk: "4sEI31"
						})
					})), l ? x() : ((() => e.postMessage({
						type: "paypal-finish.cancel"
					}))(), setTimeout(() => {
						window.close(), C(w.Cancel)
					}, 1500))
				}, []);
				const [v, C] = Object(s.useState)(w.Loading);
				return a.a.createElement(a.a.Fragment, null, v === w.Loading && a.a.createElement(p.a, {
					className: b.a.loader,
					sizePx: 60
				}), v === w.Error && a.a.createElement("div", {
					className: b.a.details
				}, r && a.a.createElement("div", {
					className: b.a.error
				}, r), a.a.createElement("button", {
					onClick: x,
					className: b.a.repeatButton
				}, a.a.createElement(u.a, {
					className: b.a.repeatIcon
				}))), v === w.Success && a.a.createElement("div", {
					className: b.a.details
				}, m._("Thanks for the purchase. It is safe to close this page now.", null, {
					hk: "1cdx2b"
				})), v === w.Cancel && a.a.createElement("div", {
					className: b.a.details
				}, m._("It is safe to close this page.", null, {
					hk: "Zh0mx"
				})))
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.f996dcdfb96e2329406c.js.map