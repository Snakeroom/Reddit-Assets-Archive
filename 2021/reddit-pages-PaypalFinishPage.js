// https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.847d7cb9a703b8f50ba1.js
// Retrieved at 3/23/2021, 9:10:05 AM by Reddit Dataminer v1.0.0
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
			t.d(r, "b", (function() {
				return L
			})), t.d(r, "h", (function() {
				return M
			})), t.d(r, "g", (function() {
				return R
			})), t.d(r, "f", (function() {
				return T
			})), t.d(r, "d", (function() {
				return U
			})), t.d(r, "c", (function() {
				return B
			})), t.d(r, "a", (function() {
				return G
			})), t.d(r, "e", (function() {
				return Q
			}));
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				a = t("./node_modules/lodash/omit.js"),
				s = t.n(a),
				o = t("./node_modules/uuid/v4.js"),
				c = t.n(o),
				i = t("./src/config.ts"),
				d = t("./src/reddit/constants/modals.ts"),
				l = t("./src/reddit/actions/toaster.ts"),
				u = t("./src/lib/addQueryParams/index.ts"),
				p = t("./src/lib/makeActionCreator/index.ts"),
				b = t("./src/lib/sentry/index.ts"),
				m = t("./src/reddit/models/Toast/index.ts"),
				g = t("./src/reddit/actions/gold/constants.ts"),
				f = t("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				h = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				y = t("./src/reddit/selectors/user.ts"),
				j = t("./src/reddit/actions/gold/powerups.ts"),
				O = t("./src/reddit/actions/modal.ts"),
				x = t("./node_modules/bignumber.js/bignumber.js"),
				E = t.n(x),
				P = t("./src/graphql/operations/CancelEconRecurringPayment.json"),
				w = t("./src/graphql/operations/ConfirmPaypalPayment.json"),
				C = t("./src/graphql/operations/CreateEconOrder.json"),
				v = t("./src/graphql/operations/CreatePaypalPayment.json"),
				S = t("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				_ = t("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				k = t("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				A = t("./src/graphql/operations/DeleteSavedStripeCard.json"),
				I = t("./src/graphql/operations/UserSavedStripeCards.json"),
				q = t("./src/lib/makeGqlRequest/index.ts");
			const N = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				D = e => e.map(e => e.message).join(" : "),
				L = (e, r, t) => async (a, s, {
					gqlContext: o
				}) => {
					const i = c()(),
						d = await ((e, r, t, n, a) => {
							const s = new E.a(t.pricePackages[0].price).multipliedBy(n).toFixed();
							return Object(q.a)(e, {
								...C,
								variables: {
									input: {
										nonce: r,
										productId: t.id,
										productVersion: t.version,
										pricePackageId: t.pricePackages[0].id,
										currency: t.pricePackages[0].currency,
										price: s,
										productsCount: n.toString(),
										...a
									}
								}
							})
						})(o(), i, e, r, t);
					if (d.ok) {
						const e = d.body,
							{
								errors: r,
								order: t
							} = e.data.createEconOrder;
						if (r && r.length) throw new Error(D(r));
						if (t) return t.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, M = (e, r, t, a, s) => async (o, i, {
					gqlContext: d
				}) => {
					const l = i(),
						u = () => o(Object(f.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						})));
					let p, m, g = "";
					try {
						g = await o(L(r, s, {
							powerUps: {
								subredditId: t,
								isAnonymous: a
							}
						}))
					} catch (O) {
						return b.c.captureException(O), void(O.message && o(Object(f.stripeApiError)(O.message)))
					}
					o(Object(f.stripeTokenPending)());
					const j = Object(h.x)(l);
					if (j || (p = await o(Object(f.validateAndCreateStripeToken)(e)), m = Object(h.u)(l), p)) try {
						const e = c()(),
							r = j || m ? p && m ? ((e, r, t, n) => Object(q.a)(e, {
								...S,
								variables: {
									nonce: r,
									orderId: t,
									token: n
								}
							}))(d(), e, g, p.id) : j ? ((e, r, t, n) => Object(q.a)(e, {
								...k,
								variables: {
									nonce: r,
									orderId: t,
									cardId: n
								}
							}))(d(), e, g, j) : null : ((e, r, t, n) => Object(q.a)(e, {
								..._,
								variables: {
									nonce: r,
									orderId: t,
									token: n
								}
							}))(d(), e, g, p.id),
							n = await r;
						if (!n || !n.ok) return void u(); {
							const e = n.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return void o(Object(f.stripeApiError)(D(e.errors)));
							if (e.ok && "PAID" !== e.payment.status) return void u();
							const r = Object(y.i)(i());
							r && o(Q({
								subredditId: t,
								powerupsCount: s,
								user: r,
								isAnonymous: a
							}))
						}
					} catch (O) {
						b.c.captureException(O), u()
					}
				}, R = (e, r, t, n) => async (a, s, {
					gqlContext: o
				}) => {
					let d = "";
					try {
						d = await a(L(e, n, {
							powerUps: {
								subredditId: r,
								isAnonymous: t
							}
						}))
					} catch (p) {
						return b.c.captureException(p), p.message && a(Object(f.paypalApiError)(p.message)), null
					}
					const l = i.a.redditUrl;
					try {
						const e = Object(u.a)(`${l}/framedModal/paypal-finish`, {
								_o: l,
								r,
								o: d,
								s: !0
							}),
							i = Object(u.a)(`${l}/framedModal/paypal-finish`, {
								_o: l,
								r,
								o: d
							}),
							p = c()(),
							b = await ((e, r, t, n, a) => Object(q.a)(e, {
								...v,
								variables: {
									nonce: r,
									orderId: t,
									successUrl: n,
									cancelUrl: a
								}
							}))(o(), p, d, e, i);
						if (b && b.ok) {
							const e = b.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return a(Object(f.paypalApiError)(D(e.errors))), null;
							const o = Object(y.i)(s());
							if (e.ok) {
								const {
									status: s
								} = e.payment;
								if ("ACTION_REQUIRED" === s) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === s && o) return a(Q({
									subredditId: r,
									powerupsCount: n,
									user: o,
									isAnonymous: t
								})), null
							}
						}
					} catch (p) {
						b.c.captureException(p)
					}
					return a(Object(f.paypalApiError)(N())), null
				}, T = (e, r) => async (t, n, {
					gqlContext: a
				}) => {
					try {
						const n = c()(),
							s = await ((e, r, t, n) => Object(q.a)(e, {
								...w,
								variables: {
									nonce: r,
									paymentId: t,
									token: n
								}
							}))(a(), n, e, r);
						if (s && s.ok) {
							const e = s.body.data.confirmEconPayment;
							if (e && e.errors && e.errors.length) return t(Object(f.paypalApiError)(D(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (s) {
						b.c.captureException(s)
					}
					return t(Object(f.paypalApiError)(N())), !1
				}, U = () => async (e, r, {
					gqlContext: t
				}) => {
					e(Object(f.savedCardsPending)());
					try {
						const r = await (e => Object(q.a)(e, {
							...I,
							variables: {}
						}))(t());
						if (r.ok) {
							const t = r.body;
							t.errors && t.errors.length && e(Object(f.stripeApiError)(t.errors[0].message));
							const {
								savedStripeCards: n
							} = t.data.identity, a = n.map(e => s()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(f.savedCardsSuccess)(a)), a[0] && e(Object(f.selectSavedCard)(a[0].cardId))
						} else e(Object(f.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (a) {
						b.c.captureException(a), e(Object(f.savedCardsSuccess)([]))
					}
				}, B = e => async (r, t, {
					gqlContext: n
				}) => {
					r(Object(f._deleteSavedCard)(e));
					try {
						const r = await ((e, r) => Object(q.a)(e, {
							...A,
							variables: {
								cardId: r
							}
						}))(n(), e);
						if (r.error) throw new Error(r.error.type);
						const t = r.body,
							{
								errors: a
							} = t.data.deleteEconPaymentMethod;
						if (a && a.length) throw new Error(D(a))
					} catch (a) {
						b.c.captureException(a)
					}
				}, J = Object(p.a)(g.N), F = Object(p.a)(g.O), W = Object(p.a)(g.P), z = e => async (r, t) => {
					await r(J(e)), r(Object(l.f)({
						kind: m.b.Error,
						duration: l.a,
						text: e
					}))
				}, G = (e, r, t) => async (a, s, {
					gqlContext: o
				}) => {
					a(F({
						subredditId: r,
						allocatedAt: t
					}));
					try {
						const s = await ((e, r) => Object(q.a)(e, {
							...P,
							variables: {
								orderId: r
							}
						}))(o(), e);
						if (s.ok) {
							const e = s.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void a(z(n[0].message));
							a(W({
								subredditId: r,
								allocatedAt: t
							}))
						} else a(z(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (c) {
						b.c.captureException(c), a(z(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, K = Object(p.a)(g.R), Q = e => async (r, t) => {
					r(K(e)), r(Object(j.f)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), r(Object(O.g)(d.a.ECON_POWERUPS_PURCHASE)), r(Object(l.f)({
						kind: m.b.SuccessCommunityGreen,
						duration: l.a,
						text: n.fbt._({
							"*": "Purchase of {number of Powerups} Powerups is complete.",
							_1: "Purchase of 1 Powerup is complete."
						}, [n.fbt._plural(e.powerupsCount, "number of Powerups")], {
							hk: "28cBuw"
						})
					}))
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "selectPaymentMethod", (function() {
				return d
			})), t.d(r, "paymentCompleted", (function() {
				return l
			})), t.d(r, "cardNameInput", (function() {
				return u
			})), t.d(r, "cardNameEmpty", (function() {
				return p
			})), t.d(r, "cardElementChange", (function() {
				return b
			})), t.d(r, "stripeTokenPending", (function() {
				return m
			})), t.d(r, "stripeTokenError", (function() {
				return g
			})), t.d(r, "stripeApiError", (function() {
				return f
			})), t.d(r, "validateAndCreateStripeToken", (function() {
				return h
			})), t.d(r, "paypalApiError", (function() {
				return y
			})), t.d(r, "toggleRememberCard", (function() {
				return j
			})), t.d(r, "selectSavedCard", (function() {
				return O
			})), t.d(r, "_deleteSavedCard", (function() {
				return x
			})), t.d(r, "deleteSavedCard", (function() {
				return E
			})), t.d(r, "savedCardsPending", (function() {
				return P
			})), t.d(r, "savedCardsSuccess", (function() {
				return w
			})), t.d(r, "loadSavedCards", (function() {
				return C
			}));
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				a = t("./src/lib/sentry/index.ts"),
				s = t("./src/lib/makeActionCreator/index.ts"),
				o = t("./src/reddit/endpoints/gold/purchase.ts"),
				c = t("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				i = t("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(s.a)(c.A),
				l = Object(s.a)(c.w),
				u = Object(s.a)(c.b),
				p = Object(s.a)(c.a),
				b = Object(s.a)(c.D),
				m = Object(s.a)(c.F),
				g = Object(s.a)(c.E),
				f = Object(s.a)(c.C),
				h = e => async (r, t) => {
					const a = t(),
						s = Object(i.h)(a),
						{
							token: o,
							error: c
						} = await e.createToken({
							name: s
						});
					if (s.trim()) {
						if (!c && o) return o;
						r(g(c || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(p({
							message: e
						}))
					}
				}, y = Object(s.a)(c.x), j = Object(s.a)(c.G), O = Object(s.a)(c.B), x = Object(s.a)(c.g), E = e => async (r, t, {
					apiContext: n
				}) => {
					r(x(e));
					try {
						const r = await Object(o.a)(n(), e);
						if (r.error) throw new Error(r.error.type)
					} catch (s) {
						a.c.captureException(s)
					}
				}, P = Object(s.a)(c.y), w = Object(s.a)(c.z), C = () => async (e, r, {
					apiContext: t
				}) => {
					e(P());
					try {
						const r = await Object(o.b)(t());
						if (r.error) throw new Error(r.error.type);
						const n = r.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(w(n)), n[0] && e(O(n[0].cardId))
					} catch (n) {
						a.c.captureException(n), e(w([]))
					}
				}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, r, t) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, r, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				a = t.n(n),
				s = t("./src/lib/classNames/index.ts"),
				o = t("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = t.n(o);
			r.a = ({
				center: e,
				className: r,
				sizePx: t = 10
			}) => a.a.createElement("div", {
				className: Object(s.a)(c.a.loadingIcon, r, {
					[c.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${t}px`
				}
			})
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return a
			}));
			var n = t("./node_modules/react-redux/es/index.js");

			function a() {
				return Object(n.d)()
			}
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, r, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				a = t.n(n);

			function s() {
				return (s = Object.assign || function(e) {
					for (var r = 1; r < arguments.length; r++) {
						var t = arguments[r];
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					}
					return e
				}).apply(this, arguments)
			}
			r.a = e => a.a.createElement("svg", s({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), a.a.createElement("g", null, a.a.createElement("path", {
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
			var n = t("./node_modules/react/index.js"),
				a = t.n(n),
				s = t("./node_modules/react-redux/es/index.js"),
				o = t("./node_modules/reselect/es/index.js"),
				c = t("./src/reddit/actions/gold/productOfferPurchase.ts"),
				i = t("./src/reddit/actions/platform.ts"),
				d = t("./src/reddit/hooks/useThunkDispatch.ts"),
				l = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				u = t("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = t("./src/reddit/icons/svgs/Replay/index.tsx"),
				b = t("./src/reddit/pages/PaypalFinishPage/index.m.less"),
				m = t.n(b);
			const {
				fbt: g
			} = t("./node_modules/fbt/lib/FbtPublic.js"), f = "r", h = "o", y = "p", j = "approval_token_id", O = "s", x = Object(o.c)({
				paypalErrorMessage: l.d
			}), E = Object(s.b)(x);
			var P;
			! function(e) {
				e.Loading = "loading", e.Error = "error", e.Success = "success", e.Cancel = "cancel"
			}(P || (P = {}));
			r.default = E(e => {
				const {
					params: r,
					paypalErrorMessage: t
				} = e, s = r[f], o = r[h], l = r[O], b = r[y], x = r[j], E = Object(d.a)(), w = async () => {
					v(P.Loading), await E(Object(c.f)(b, x)) ? ((() => e.postMessage({
						type: "paypal-finish.success",
						data: {
							subredditId: s,
							orderId: o
						}
					}))(), setTimeout(() => {
						window.close(), v(P.Success)
					}, 1500)) : v(P.Error)
				};
				Object(n.useEffect)(() => {
					E(Object(i.l)({
						title: g._("Reddit - Buy Powerups", null, {
							hk: "4sEI31"
						})
					})), l ? w() : ((() => e.postMessage({
						type: "paypal-finish.cancel"
					}))(), setTimeout(() => {
						window.close(), v(P.Cancel)
					}, 1500))
				}, []);
				const [C, v] = Object(n.useState)(P.Loading);
				return a.a.createElement(a.a.Fragment, null, C === P.Loading && a.a.createElement(u.a, {
					className: m.a.loader,
					sizePx: 60
				}), C === P.Error && a.a.createElement("div", {
					className: m.a.details
				}, t && a.a.createElement("div", {
					className: m.a.error
				}, t), a.a.createElement("button", {
					onClick: w,
					className: m.a.repeatButton
				}, a.a.createElement(p.a, {
					className: m.a.repeatIcon
				}))), C === P.Success && a.a.createElement("div", {
					className: m.a.details
				}, g._("Thanks for the purchase. It is safe to close this page now.", null, {
					hk: "1cdx2b"
				})), C === P.Cancel && a.a.createElement("div", {
					className: m.a.details
				}, g._("It is safe to close this page.", null, {
					hk: "Zh0mx"
				})))
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.847d7cb9a703b8f50ba1.js.map