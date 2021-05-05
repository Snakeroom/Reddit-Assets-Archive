// https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.977ffa936c9d2ae495f4.js
// Retrieved at 5/5/2021, 12:30:04 PM by Reddit Dataminer v1.0.0
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
				return w
			})), t.d(r, "i", (function() {
				return S
			})), t.d(r, "f", (function() {
				return _
			})), t.d(r, "e", (function() {
				return k
			})), t.d(r, "d", (function() {
				return I
			})), t.d(r, "c", (function() {
				return A
			})), t.d(r, "a", (function() {
				return D
			})), t.d(r, "g", (function() {
				return T
			})), t.d(r, "h", (function() {
				return B
			}));
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				a = t("./node_modules/lodash/omit.js"),
				s = t.n(a),
				o = t("./node_modules/uuid/v4.js"),
				c = t.n(o),
				d = t("./src/config.ts"),
				i = t("./src/reddit/constants/modals.ts"),
				u = t("./src/reddit/actions/toaster.ts"),
				l = t("./src/lib/addQueryParams/index.ts"),
				p = t("./src/lib/makeActionCreator/index.ts"),
				b = t("./src/lib/sentry/index.ts"),
				f = t("./src/reddit/models/Toast/index.ts"),
				g = t("./src/reddit/actions/gold/constants.ts"),
				m = t("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				O = t("./src/reddit/selectors/gold/productOffers.ts"),
				h = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				j = t("./src/reddit/selectors/user.ts"),
				y = t("./src/reddit/models/Gold/ProductOffer.ts"),
				v = t("./src/reddit/actions/gold/powerups.ts"),
				P = t("./src/reddit/actions/modal.ts"),
				x = t("./src/reddit/endpoints/gold/productOfferPurchase.ts");
			const E = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				C = e => e.map(e => e.message).join(" : "),
				w = (e, r, t) => async (a, s, {
					gqlContext: o
				}) => {
					const d = c()(),
						i = await Object(x.c)(o(), d, e, r, t);
					if (i.ok) {
						const e = i.body,
							{
								errors: r,
								order: t
							} = e.data.createEconOrder;
						if (r && r.length) throw new Error(C(r));
						if (t) return t.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, S = (e, r, t, a, s, o) => async (d, i, {
					gqlContext: u
				}) => {
					const l = i(),
						p = () => d(Object(m.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						f = s === y.c.Premium,
						g = s === y.c.Powerups,
						v = {};
					if (g && o) v.powerUps = {
						subredditId: o,
						isAnonymous: t
					};
					else if (f) {
						const e = Object(O.b)(l);
						v.premium = {
							pricePackage: e
						}
					}
					let P, E, S = "";
					try {
						S = await d(w(r, a, v))
					} catch (k) {
						return b.c.captureException(k), void(k.message && d(Object(m.stripeApiError)(k.message)))
					}
					d(Object(m.stripeTokenPending)());
					const _ = Object(h.y)(l);
					if (_ || (P = await d(Object(m.validateAndCreateStripeToken)(e)), E = Object(h.v)(l), P)) try {
						const e = c()(),
							r = _ || E ? P && E ? Object(x.e)(u(), e, S, P.id) : _ ? Object(x.g)(u(), e, S, _) : null : Object(x.f)(u(), e, S, P.id),
							n = await r;
						if (!n || !n.ok) return void p(); {
							const e = n.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return void d(Object(m.stripeApiError)(C(e.errors)));
							if (e.ok && "PAID" !== e.payment.status) return void p();
							const r = Object(j.i)(i());
							r && (g && o ? d(T({
								subredditId: o,
								powerupsCount: a,
								user: r,
								isAnonymous: t
							})) : f && d(U({
								user: r
							})))
						}
					} catch (k) {
						b.c.captureException(k), p()
					}
				}, _ = (e, r, t, n) => async (a, s, {
					gqlContext: o
				}) => {
					let i = "";
					try {
						i = await a(w(e, n, {
							powerUps: {
								subredditId: r,
								isAnonymous: t
							}
						}))
					} catch (p) {
						return b.c.captureException(p), p.message && a(Object(m.paypalApiError)(p.message)), null
					}
					const u = d.a.redditUrl;
					try {
						const e = Object(l.a)(`${u}/framedModal/paypal-finish`, {
								_o: u,
								r,
								o: i,
								s: !0
							}),
							d = Object(l.a)(`${u}/framedModal/paypal-finish`, {
								_o: u,
								r,
								o: i
							}),
							p = c()(),
							b = await Object(x.d)(o(), p, i, e, d);
						if (b && b.ok) {
							const e = b.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return a(Object(m.paypalApiError)(C(e.errors))), null;
							const o = Object(j.i)(s());
							if (e.ok) {
								const {
									status: s
								} = e.payment;
								if ("ACTION_REQUIRED" === s) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === s && o) return r && a(T({
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
					return a(Object(m.paypalApiError)(E())), null
				}, k = (e, r) => async (t, n, {
					gqlContext: a
				}) => {
					try {
						const n = c()(),
							s = await Object(x.b)(a(), n, e, r);
						if (s && s.ok) {
							const e = s.body.data.confirmEconPayment;
							if (e && e.errors && e.errors.length) return t(Object(m.paypalApiError)(C(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (s) {
						b.c.captureException(s)
					}
					return t(Object(m.paypalApiError)(E())), !1
				}, I = () => async (e, r, {
					gqlContext: t
				}) => {
					e(Object(m.savedCardsPending)());
					try {
						const r = await Object(x.i)(t());
						if (r.ok) {
							const t = r.body;
							t.errors && t.errors.length && e(Object(m.stripeApiError)(t.errors[0].message));
							const {
								savedStripeCards: n
							} = t.data.identity, a = n.map(e => s()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(m.savedCardsSuccess)(a)), a[0] && e(Object(m.selectSavedCard)(a[0].cardId))
						} else e(Object(m.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (a) {
						b.c.captureException(a), e(Object(m.savedCardsSuccess)([]))
					}
				}, A = e => async (r, t, {
					gqlContext: n
				}) => {
					r(Object(m._deleteSavedCard)(e));
					try {
						const r = await Object(x.h)(n(), e);
						if (r.error) throw new Error(r.error.type);
						const t = r.body,
							{
								errors: a
							} = t.data.deleteEconPaymentMethod;
						if (a && a.length) throw new Error(C(a))
					} catch (a) {
						b.c.captureException(a)
					}
				}, q = Object(p.a)(g.N), N = Object(p.a)(g.O), M = Object(p.a)(g.P), R = e => async (r, t) => {
					await r(q(e)), r(Object(u.f)({
						kind: f.b.Error,
						duration: u.a,
						text: e
					}))
				}, D = (e, r, t) => async (a, s, {
					gqlContext: o
				}) => {
					a(N({
						subredditId: r,
						allocatedAt: t
					}));
					try {
						const s = await Object(x.a)(o(), e);
						if (s.ok) {
							const e = s.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void a(R(n[0].message));
							a(M({
								subredditId: r,
								allocatedAt: t
							}))
						} else a(R(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (c) {
						b.c.captureException(c), a(R(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, L = Object(p.a)(g.R), T = e => async (r, t) => {
					r(L(e)), r(Object(v.h)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), r(Object(P.g)(i.a.ECON_POWERUPS_PURCHASE)), r(Object(P.h)(i.a.ECON_POWERUPS_SUCCESS))
				}, U = Object(p.a)(g.V), B = Object(p.a)(g.Z)
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, r, t) {
			"use strict";
			t.r(r), t.d(r, "selectPaymentMethod", (function() {
				return i
			})), t.d(r, "paymentCompleted", (function() {
				return u
			})), t.d(r, "cardNameInput", (function() {
				return l
			})), t.d(r, "postalCodeInput", (function() {
				return p
			})), t.d(r, "cardNameEmpty", (function() {
				return b
			})), t.d(r, "cardElementChange", (function() {
				return f
			})), t.d(r, "stripeTokenPending", (function() {
				return g
			})), t.d(r, "stripeTokenError", (function() {
				return m
			})), t.d(r, "stripeApiError", (function() {
				return O
			})), t.d(r, "validateAndCreateStripeToken", (function() {
				return h
			})), t.d(r, "paypalApiError", (function() {
				return j
			})), t.d(r, "toggleRememberCard", (function() {
				return y
			})), t.d(r, "selectSavedCard", (function() {
				return v
			})), t.d(r, "_deleteSavedCard", (function() {
				return P
			})), t.d(r, "deleteSavedCard", (function() {
				return x
			})), t.d(r, "savedCardsPending", (function() {
				return E
			})), t.d(r, "savedCardsSuccess", (function() {
				return C
			})), t.d(r, "loadSavedCards", (function() {
				return w
			}));
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				a = t("./src/lib/sentry/index.ts"),
				s = t("./src/lib/makeActionCreator/index.ts"),
				o = t("./src/reddit/endpoints/gold/purchase.ts"),
				c = t("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				d = t("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = Object(s.a)(c.B),
				u = Object(s.a)(c.w),
				l = Object(s.a)(c.b),
				p = Object(s.a)(c.y),
				b = Object(s.a)(c.a),
				f = Object(s.a)(c.E),
				g = Object(s.a)(c.G),
				m = Object(s.a)(c.F),
				O = Object(s.a)(c.D),
				h = e => async (r, t) => {
					const a = t(),
						s = Object(d.h)(a),
						o = Object(d.l)(a),
						{
							token: c,
							error: i
						} = await e.createToken({
							name: s,
							address_zip: o
						});
					if (s.trim()) {
						if (!i && c) return c;
						r(m(i || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(b({
							message: e
						}))
					}
				}, j = Object(s.a)(c.x), y = Object(s.a)(c.H), v = Object(s.a)(c.C), P = Object(s.a)(c.g), x = e => async (r, t, {
					apiContext: n
				}) => {
					r(P(e));
					try {
						const r = await Object(o.a)(n(), e);
						if (r.error) throw new Error(r.error.type)
					} catch (s) {
						a.c.captureException(s)
					}
				}, E = Object(s.a)(c.z), C = Object(s.a)(c.A), w = () => async (e, r, {
					apiContext: t
				}) => {
					e(E());
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
						e(C(n)), n[0] && e(v(n[0].cardId))
					} catch (n) {
						a.c.captureException(n), e(C([]))
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
		"./src/reddit/endpoints/gold/productOfferPurchase.ts": function(e, r, t) {
			"use strict";
			t.d(r, "c", (function() {
				return g
			})), t.d(r, "f", (function() {
				return m
			})), t.d(r, "e", (function() {
				return O
			})), t.d(r, "g", (function() {
				return h
			})), t.d(r, "d", (function() {
				return j
			})), t.d(r, "b", (function() {
				return y
			})), t.d(r, "a", (function() {
				return v
			})), t.d(r, "i", (function() {
				return P
			})), t.d(r, "h", (function() {
				return x
			}));
			var n = t("./node_modules/bignumber.js/bignumber.js"),
				a = t.n(n),
				s = t("./src/graphql/operations/CancelEconRecurringPayment.json"),
				o = t("./src/graphql/operations/ConfirmPaypalPayment.json"),
				c = t("./src/graphql/operations/CreateEconOrder.json"),
				d = t("./src/graphql/operations/CreatePaypalPayment.json"),
				i = t("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				u = t("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				l = t("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				p = t("./src/graphql/operations/DeleteSavedStripeCard.json"),
				b = t("./src/graphql/operations/UserSavedStripeCards.json"),
				f = t("./src/lib/makeGqlRequest/index.ts");
			const g = (e, r, t, n, s) => {
					const {
						premium: o,
						...d
					} = s, i = (null == o ? void 0 : o.pricePackage) || t.pricePackages[0], u = new a.a(i.price).multipliedBy(n).toFixed();
					return Object(f.a)(e, {
						...c,
						variables: {
							input: {
								nonce: r,
								productId: t.id,
								productVersion: t.version,
								pricePackageId: i.id,
								currency: i.currency,
								price: u,
								productsCount: n.toString(),
								...d
							}
						}
					})
				},
				m = (e, r, t, n) => Object(f.a)(e, {
					...u,
					variables: {
						nonce: r,
						orderId: t,
						token: n
					}
				}),
				O = (e, r, t, n) => Object(f.a)(e, {
					...i,
					variables: {
						nonce: r,
						orderId: t,
						token: n
					}
				}),
				h = (e, r, t, n) => Object(f.a)(e, {
					...l,
					variables: {
						nonce: r,
						orderId: t,
						cardId: n
					}
				}),
				j = (e, r, t, n, a) => Object(f.a)(e, {
					...d,
					variables: {
						nonce: r,
						orderId: t,
						successUrl: n,
						cancelUrl: a
					}
				}),
				y = (e, r, t, n) => Object(f.a)(e, {
					...o,
					variables: {
						nonce: r,
						paymentId: t,
						token: n
					}
				}),
				v = (e, r) => Object(f.a)(e, {
					...s,
					variables: {
						orderId: r
					}
				}),
				P = e => Object(f.a)(e, {
					...b,
					variables: {}
				}),
				x = (e, r) => Object(f.a)(e, {
					...p,
					variables: {
						cardId: r
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
				d = t("./src/reddit/actions/platform.ts"),
				i = t("./src/reddit/hooks/useThunkDispatch.ts"),
				u = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				l = t("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = t("./src/reddit/icons/svgs/Replay/index.tsx"),
				b = t("./src/reddit/pages/PaypalFinishPage/index.m.less"),
				f = t.n(b);
			const {
				fbt: g
			} = t("./node_modules/fbt/lib/FbtPublic.js"), m = "r", O = "o", h = "p", j = "approval_token_id", y = "s", v = Object(o.c)({
				paypalErrorMessage: u.d
			}), P = Object(s.b)(v);
			var x;
			! function(e) {
				e.Loading = "loading", e.Error = "error", e.Success = "success", e.Cancel = "cancel"
			}(x || (x = {}));
			r.default = P(e => {
				const {
					params: r,
					paypalErrorMessage: t
				} = e, s = r[m], o = r[O], u = r[y], b = r[h], v = r[j], P = Object(i.a)(), E = async () => {
					w(x.Loading), await P(Object(c.e)(b, v)) ? ((() => e.postMessage({
						type: "paypal-finish.success",
						data: {
							subredditId: s,
							orderId: o
						}
					}))(), setTimeout(() => {
						window.close(), w(x.Success)
					}, 1500)) : w(x.Error)
				};
				Object(n.useEffect)(() => {
					P(Object(d.l)({
						title: g._("Reddit - Buy Powerups", null, {
							hk: "4sEI31"
						})
					})), u ? E() : ((() => e.postMessage({
						type: "paypal-finish.cancel"
					}))(), setTimeout(() => {
						window.close(), w(x.Cancel)
					}, 1500))
				}, []);
				const [C, w] = Object(n.useState)(x.Loading);
				return a.a.createElement(a.a.Fragment, null, C === x.Loading && a.a.createElement(l.a, {
					className: f.a.loader,
					sizePx: 60
				}), C === x.Error && a.a.createElement("div", {
					className: f.a.details
				}, t && a.a.createElement("div", {
					className: f.a.error
				}, t), a.a.createElement("button", {
					onClick: E,
					className: f.a.repeatButton
				}, a.a.createElement(p.a, {
					className: f.a.repeatIcon
				}))), C === x.Success && a.a.createElement("div", {
					className: f.a.details
				}, g._("Thanks for the purchase. It is safe to close this page now.", null, {
					hk: "1cdx2b"
				})), C === x.Cancel && a.a.createElement("div", {
					className: f.a.details
				}, g._("It is safe to close this page.", null, {
					hk: "Zh0mx"
				})))
			})
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, r, t) {
			"use strict";
			t.d(r, "f", (function() {
				return c
			})), t.d(r, "g", (function() {
				return d
			})), t.d(r, "a", (function() {
				return i
			})), t.d(r, "c", (function() {
				return u
			})), t.d(r, "h", (function() {
				return l
			})), t.d(r, "b", (function() {
				return p
			})), t.d(r, "e", (function() {
				return b
			})), t.d(r, "d", (function() {
				return f
			}));
			var n = t("./node_modules/reselect/es/index.js"),
				a = t("./src/lib/makeProductOfferKey/index.ts"),
				s = t("./src/reddit/models/Gold/ProductOffer.ts"),
				o = t("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = e => e.subreddits.api.productOffers.pending,
				d = (e, {
					subredditId: r,
					type: t
				}) => {
					var n, s, o;
					return r ? e.subreddits.productOffers[Object(a.a)(t, r)] : null === (o = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === s ? void 0 : s.productOffers) || void 0 === o ? void 0 : o[Object(a.a)(t)]
				},
				i = (e, {
					subredditId: r
				}) => {
					const t = d(e, {
						subredditId: r,
						type: s.c.Powerups
					});
					return t && t[0]
				},
				u = e => {
					const r = d(e, {
						type: s.c.Premium
					});
					return null == r ? void 0 : r[0]
				},
				l = (e, r) => null == e ? void 0 : e.pricePackages.find(e => e.renewInterval === r),
				p = Object(n.a)(u, o.p, (e, r) => l(e, r)),
				b = Object(n.a)(e => {
					var r;
					return null === (r = e.user.productOfferSubscriptions) || void 0 === r ? void 0 : r.subscriptions
				}, e => null == e ? void 0 : e[0]),
				f = Object(n.a)(b, e => Boolean(null == e ? void 0 : e.isCanceled))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.977ffa936c9d2ae495f4.js.map