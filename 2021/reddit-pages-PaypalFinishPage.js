// https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.0272699b878258934c33.js
// Retrieved at 3/18/2021, 3:20:06 PM by Reddit Dataminer v1.0.0
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
				return M
			})), r.d(t, "h", (function() {
				return D
			})), r.d(t, "g", (function() {
				return L
			})), r.d(t, "f", (function() {
				return R
			})), r.d(t, "d", (function() {
				return B
			})), r.d(t, "c", (function() {
				return U
			})), r.d(t, "a", (function() {
				return G
			})), r.d(t, "e", (function() {
				return $
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/omit.js"),
				s = r.n(a),
				o = r("./node_modules/uuid/v4.js"),
				c = r.n(o),
				i = r("./src/config.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/lib/addQueryParams/index.ts"),
				p = r("./src/lib/makeActionCreator/index.ts"),
				b = r("./src/lib/sentry/index.ts"),
				g = r("./src/reddit/models/Toast/index.ts"),
				m = r("./src/reddit/actions/gold/constants.ts"),
				f = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				h = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				y = r("./src/reddit/selectors/user.ts"),
				j = r("./src/reddit/actions/gold/powerups.ts"),
				O = r("./src/reddit/actions/modal.ts"),
				x = r("./node_modules/bignumber.js/bignumber.js"),
				C = r.n(x),
				E = r("./src/graphql/operations/CancelEconRecurringPayment.json"),
				P = r("./src/graphql/operations/ConfirmPaypalPayment.json"),
				v = r("./src/graphql/operations/CreateEconOrder.json"),
				w = r("./src/graphql/operations/CreatePaypalPayment.json"),
				_ = r("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				S = r("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				k = r("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				A = r("./src/graphql/operations/DeleteSavedStripeCard.json"),
				I = r("./src/graphql/operations/UserSavedStripeCards.json"),
				q = r("./src/lib/makeGqlRequest/index.ts");
			const N = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				T = e => e.map(e => e.message).join(" : "),
				M = (e, t, r) => async (a, s, {
					gqlContext: o
				}) => {
					const i = c()(),
						d = await ((e, t, r, n, a) => {
							const s = new C.a(r.pricePackages[0].price).multipliedBy(n).toFixed();
							return Object(q.a)(e, {
								...v,
								variables: {
									input: {
										nonce: t,
										productId: r.id,
										productVersion: r.version,
										pricePackageId: r.pricePackages[0].id,
										currency: r.pricePackages[0].currency,
										price: s,
										productsCount: n.toString(),
										...a
									}
								}
							})
						})(o(), i, e, t, r);
					if (d.ok) {
						const e = d.body,
							{
								errors: t,
								order: r
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(T(t));
						if (r) return r.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, D = (e, t, r, a, s) => async (o, i, {
					gqlContext: d
				}) => {
					const l = i(),
						u = () => o(Object(f.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						})));
					let p, g, m = "";
					try {
						m = await o(M(t, s, {
							powerUps: {
								subredditId: r,
								isAnonymous: a
							}
						}))
					} catch (O) {
						return b.c.captureException(O), void(O.message && o(Object(f.stripeApiError)(O.message)))
					}
					o(Object(f.stripeTokenPending)());
					const j = Object(h.x)(l);
					if (j || (p = await o(Object(f.validateAndCreateStripeToken)(e)), g = Object(h.u)(l), p)) try {
						const e = c()(),
							t = j || g ? p && g ? ((e, t, r, n) => Object(q.a)(e, {
								..._,
								variables: {
									nonce: t,
									orderId: r,
									token: n
								}
							}))(d(), e, m, p.id) : j ? ((e, t, r, n) => Object(q.a)(e, {
								...k,
								variables: {
									nonce: t,
									orderId: r,
									cardId: n
								}
							}))(d(), e, m, j) : null : ((e, t, r, n) => Object(q.a)(e, {
								...S,
								variables: {
									nonce: t,
									orderId: r,
									token: n
								}
							}))(d(), e, m, p.id),
							n = await t;
						if (!n || !n.ok) return void u(); {
							const e = n.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return void o(Object(f.stripeApiError)(T(e.errors)));
							if (e.ok && "PAID" !== e.payment.status) return void u();
							const t = Object(y.j)(i());
							t && o($({
								subredditId: r,
								powerupsCount: s,
								user: t,
								isAnonymous: a
							}))
						}
					} catch (O) {
						b.c.captureException(O), u()
					}
				}, L = (e, t, r, n) => async (a, s, {
					gqlContext: o
				}) => {
					let d = "";
					try {
						d = await a(M(e, n, {
							powerUps: {
								subredditId: t,
								isAnonymous: r
							}
						}))
					} catch (p) {
						return b.c.captureException(p), p.message && a(Object(f.paypalApiError)(p.message)), null
					}
					const l = i.a.redditUrl;
					try {
						const e = Object(u.a)(`${l}/framedModal/paypal-finish`, {
								_o: l,
								r: t,
								o: d,
								s: !0
							}),
							i = Object(u.a)(`${l}/framedModal/paypal-finish`, {
								_o: l,
								r: t,
								o: d
							}),
							p = c()(),
							b = await ((e, t, r, n, a) => Object(q.a)(e, {
								...w,
								variables: {
									nonce: t,
									orderId: r,
									successUrl: n,
									cancelUrl: a
								}
							}))(o(), p, d, e, i);
						if (b && b.ok) {
							const e = b.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return a(Object(f.paypalApiError)(T(e.errors))), null;
							const o = Object(y.j)(s());
							if (e.ok) {
								const {
									status: s
								} = e.payment;
								if ("ACTION_REQUIRED" === s) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === s && o) return a($({
									subredditId: t,
									powerupsCount: n,
									user: o,
									isAnonymous: r
								})), null
							}
						}
					} catch (p) {
						b.c.captureException(p)
					}
					return a(Object(f.paypalApiError)(N())), null
				}, R = (e, t) => async (r, n, {
					gqlContext: a
				}) => {
					try {
						const n = c()(),
							s = await ((e, t, r, n) => Object(q.a)(e, {
								...P,
								variables: {
									nonce: t,
									paymentId: r,
									token: n
								}
							}))(a(), n, e, t);
						if (s && s.ok) {
							const e = s.body.data.confirmEconPayment;
							if (e && e.errors && e.errors.length) return r(Object(f.paypalApiError)(T(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (s) {
						b.c.captureException(s)
					}
					return r(Object(f.paypalApiError)(N())), !1
				}, B = () => async (e, t, {
					gqlContext: r
				}) => {
					e(Object(f.savedCardsPending)());
					try {
						const t = await (e => Object(q.a)(e, {
							...I,
							variables: {}
						}))(r());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(f.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: n
							} = r.data.identity, a = n.map(e => s()({
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
				}, U = e => async (t, r, {
					gqlContext: n
				}) => {
					t(Object(f._deleteSavedCard)(e));
					try {
						const t = await ((e, t) => Object(q.a)(e, {
							...A,
							variables: {
								cardId: t
							}
						}))(n(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: a
							} = r.data.deleteEconPaymentMethod;
						if (a && a.length) throw new Error(T(a))
					} catch (a) {
						b.c.captureException(a)
					}
				}, J = Object(p.a)(m.N), F = Object(p.a)(m.O), W = Object(p.a)(m.P), z = e => async (t, r) => {
					await t(J(e)), t(Object(l.f)({
						kind: g.b.Error,
						duration: l.a,
						text: e
					}))
				}, G = (e, t, r) => async (a, s, {
					gqlContext: o
				}) => {
					a(F({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const s = await ((e, t) => Object(q.a)(e, {
							...E,
							variables: {
								orderId: t
							}
						}))(o(), e);
						if (s.ok) {
							const e = s.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void a(z(n[0].message));
							a(W({
								subredditId: t,
								allocatedAt: r
							}))
						} else a(z(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (c) {
						b.c.captureException(c), a(z(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, K = Object(p.a)(m.R), $ = e => async (t, r) => {
					t(K(e)), t(Object(j.f)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(O.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(l.f)({
						kind: g.b.SuccessCommunityGreen,
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
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return d
			})), r.d(t, "paymentCompleted", (function() {
				return l
			})), r.d(t, "cardNameInput", (function() {
				return u
			})), r.d(t, "cardNameEmpty", (function() {
				return p
			})), r.d(t, "cardElementChange", (function() {
				return b
			})), r.d(t, "stripeTokenPending", (function() {
				return g
			})), r.d(t, "stripeTokenError", (function() {
				return m
			})), r.d(t, "stripeApiError", (function() {
				return f
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return h
			})), r.d(t, "paypalApiError", (function() {
				return y
			})), r.d(t, "toggleRememberCard", (function() {
				return j
			})), r.d(t, "selectSavedCard", (function() {
				return O
			})), r.d(t, "_deleteSavedCard", (function() {
				return x
			})), r.d(t, "deleteSavedCard", (function() {
				return C
			})), r.d(t, "savedCardsPending", (function() {
				return E
			})), r.d(t, "savedCardsSuccess", (function() {
				return P
			})), r.d(t, "loadSavedCards", (function() {
				return v
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/sentry/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/endpoints/gold/purchase.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(s.a)(c.A),
				l = Object(s.a)(c.w),
				u = Object(s.a)(c.b),
				p = Object(s.a)(c.a),
				b = Object(s.a)(c.D),
				g = Object(s.a)(c.F),
				m = Object(s.a)(c.E),
				f = Object(s.a)(c.C),
				h = e => async (t, r) => {
					const a = r(),
						s = Object(i.h)(a),
						{
							token: o,
							error: c
						} = await e.createToken({
							name: s
						});
					if (s.trim()) {
						if (!c && o) return o;
						t(m(c || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, y = Object(s.a)(c.x), j = Object(s.a)(c.G), O = Object(s.a)(c.B), x = Object(s.a)(c.g), C = e => async (t, r, {
					apiContext: n
				}) => {
					t(x(e));
					try {
						const t = await Object(o.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (s) {
						a.c.captureException(s)
					}
				}, E = Object(s.a)(c.y), P = Object(s.a)(c.z), v = () => async (e, t, {
					apiContext: r
				}) => {
					e(E());
					try {
						const t = await Object(o.b)(r());
						if (t.error) throw new Error(t.error.type);
						const n = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(P(n)), n[0] && e(O(n[0].cardId))
					} catch (n) {
						a.c.captureException(n), e(P([]))
					}
				}
		},
		"./src/reddit/components/TitleTagManager/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./node_modules/react-helmet/es/Helmet.js"),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/pageTitle.ts"),
				d = r("./src/reddit/helpers/tabBadging/index.ts"),
				l = r("./src/reddit/selectors/appBadges.ts");
			const u = Object(c.a)(l.c, e => ({
				badgeCount: e
			}));
			class p extends n.Component {
				constructor() {
					super(...arguments), this.title = Object(i.c)().toString(), this.state = {
						badgeCount: 0
					}
				}
				getTitle() {
					const e = this.props.title.length > 0 ? this.props.title : Object(i.c)().toString(),
						t = this.props.badgeCount >= 100 ? "99+" : this.props.badgeCount;
					return this.props.badgeCount > 0 ? `(${t}) ${this.props.title}` : e
				}
				render() {
					return Object(d.b)(this.props.badgeCount > 0), a.a.createElement(s.b, null, a.a.createElement("title", null, this.getTitle()))
				}
			}
			t.a = Object(o.b)(u)(p)
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
				a = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = r.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => a.a.createElement("div", {
				className: Object(s.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				}
			})
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react-redux/es/index.js");

			function a() {
				return Object(n.d)()
			}
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => a.a.createElement("svg", s({}, e, {
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
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				i = r("./src/reddit/hooks/useThunkDispatch.ts"),
				d = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				l = r("./src/reddit/components/TitleTagManager/index.tsx"),
				u = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = r("./src/reddit/icons/svgs/Replay/index.tsx"),
				b = r("./src/reddit/pages/PaypalFinishPage/index.m.less"),
				g = r.n(b);
			const {
				fbt: m
			} = r("./node_modules/fbt/lib/FbtPublic.js"), f = "r", h = "o", y = "p", j = "approval_token_id", O = "s", x = Object(o.c)({
				paypalErrorMessage: d.d
			}), C = Object(s.b)(x);
			var E;
			! function(e) {
				e.Loading = "loading", e.Error = "error", e.Success = "success", e.Cancel = "cancel"
			}(E || (E = {}));
			t.default = C(e => {
				const {
					params: t,
					paypalErrorMessage: r
				} = e, s = t[f], o = t[h], d = t[O], b = t[y], x = t[j], C = Object(i.a)(), P = async () => {
					w(E.Loading), await C(Object(c.f)(b, x)) ? ((() => e.postMessage({
						type: "paypal-finish.success",
						data: {
							subredditId: s,
							orderId: o
						}
					}))(), setTimeout(() => {
						window.close(), w(E.Success)
					}, 1500)) : w(E.Error)
				};
				Object(n.useEffect)(() => {
					d ? P() : ((() => e.postMessage({
						type: "paypal-finish.cancel"
					}))(), setTimeout(() => {
						window.close(), w(E.Cancel)
					}, 1500))
				}, []);
				const [v, w] = Object(n.useState)(E.Loading);
				return a.a.createElement(a.a.Fragment, null, a.a.createElement(l.a, {
					title: m._("Reddit - Buy Powerups", null, {
						hk: "4sEI31"
					}).toString()
				}), v === E.Loading && a.a.createElement(u.a, {
					className: g.a.loader,
					sizePx: 60
				}), v === E.Error && a.a.createElement("div", {
					className: g.a.details
				}, r && a.a.createElement("div", {
					className: g.a.error
				}, r), a.a.createElement("button", {
					onClick: P,
					className: g.a.repeatButton
				}, a.a.createElement(p.a, {
					className: g.a.repeatIcon
				}))), v === E.Success && a.a.createElement("div", {
					className: g.a.details
				}, m._("Thanks for the purchase. It is safe to close this page now.", null, {
					hk: "1cdx2b"
				})), v === E.Cancel && a.a.createElement("div", {
					className: g.a.details
				}, m._("It is safe to close this page.", null, {
					hk: "Zh0mx"
				})))
			})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-pages-PaypalFinishPage.0272699b878258934c33.js.map