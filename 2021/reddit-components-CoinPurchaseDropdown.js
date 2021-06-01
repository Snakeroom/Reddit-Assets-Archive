// https://www.redditstatic.com/desktop2x/reddit-components-CoinPurchaseDropdown.524e477a9f55788dfe6d.js
// Retrieved at 6/1/2021, 3:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CoinPurchaseDropdown", "GoldPurchasePaymentActions"], {
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			const r = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				o = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return v
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "j", (function() {
				return T
			})), n.d(t, "i", (function() {
				return S
			})), n.d(t, "f", (function() {
				return N
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "h", (function() {
				return L
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/formatApiError/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/sentry/index.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = n("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = n("./src/reddit/endpoints/gold/purchase.ts"),
				b = n("./src/reddit/helpers/correlationIdTracker.ts"),
				h = n("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				f = n("./src/reddit/models/Gold/Award.ts"),
				O = n("./src/reddit/models/Gold/ProductOffer.ts"),
				g = n("./src/reddit/models/Toast/index.ts"),
				j = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				y = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				C = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const x = Object(a.a)(C.q),
				_ = Object(a.a)(C.c),
				v = e => async (t, n) => {
					t(x(e)), t(Object(l.h)(c.a.ECON_COIN_PURCHASE))
				}, P = () => async (e, t) => {
					e(_()), e(Object(l.g)(c.a.ECON_COIN_PURCHASE))
				}, k = Object(a.a)(C.u), w = ({
					correlationId: e,
					packageId: t
				}) => async (n, r) => {
					const o = r();
					Object(j.e)(o, t) ? (n(k({
						correlationId: e,
						packageId: t
					})), n(Object(l.i)(c.a.GOLD_TARGETED_OFFER_MODAL))) : s.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${t}`)
				}, E = Object(a.a)(C.p), I = ({
					correlationId: e,
					packageId: t
				}) => async (n, r) => {
					Object(j.c)(r(), t) ? (n(E({
						correlationId: e,
						packageId: t
					})), n(Object(l.i)(c.a.ECON_COIN_PACKAGE_OFFER))) : s.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${t}`)
				}, A = (e, t, n) => async (o, a) => {
					await o(Object(d.c)(e, n));
					const s = a(),
						c = Object(j.m)(s);
					if (0 !== c.length) o(v({
						correlationId: n,
						packageId: c[0].mobileId,
						thingId: t
					}));
					else {
						const e = Object(j.j)(s),
							t = r.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						o(Object(u.f)({
							kind: g.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, T = (e, t) => async (n, a, {
					apiContext: s
				}) => {
					const c = a(),
						{
							coins: d,
							pennies: l
						} = t,
						u = Object(y.r)(c) || Object(b.d)(b.a.GoldPayment, !1);
					let m, h;
					n(Object(i.stripeTokenPending)());
					const f = Object(y.y)(c);
					if (f || (m = await n(Object(i.validateAndCreateStripeToken)(e)), h = Object(y.v)(c), m)) try {
						const e = await Object(p.e)({
							coins: d,
							context: s(),
							correlationId: u,
							offerContext: Object(O.d)(t, !1),
							pennies: l,
							rememberCard: h,
							savedCardId: f || void 0,
							token: m
						});
						if (e.error) {
							const t = Object(o.a)(e.error, e.status);
							return void n(Object(i.stripeApiError)(t))
						}
						return n(Object(i.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(b.b)(b.a.GoldPayment)
					} catch (g) {
						const e = Object(o.a)(g);
						n(Object(i.stripeApiError)(e))
					} else {
						const e = r.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						n(Object(i.stripeApiError)(e))
					}
				}, S = (e, t, a) => async (s, c, {
					apiContext: d
				}) => {
					const l = c(),
						{
							coins: u,
							pennies: m
						} = t,
						g = Object(y.r)(l) || Object(b.d)(b.a.GoldPayment, !1);
					let j, C;
					s(Object(i.stripeTokenPending)());
					const x = Object(y.y)(l);
					if (x || (j = await s(Object(i.validateAndCreateStripeToken)(e)), C = Object(y.v)(l), j)) try {
						const {
							gildModalThingId: e,
							isAnonymous: c,
							message: y,
							selectedAward: _
						} = l.gild;
						if (!e || !_.id) {
							const e = r.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void s(Object(i.stripeApiError)(e))
						}
						const v = _.id,
							k = {
								gildType: v,
								isAnonymous: c,
								message: y
							},
							w = await Object(p.d)({
								coins: u,
								context: d(),
								correlationId: g,
								gildParams: k,
								isOldReddit: a,
								offerContext: Object(O.d)(t, !0),
								pennies: m,
								rememberCard: C,
								savedCardId: x || void 0,
								thingId: e,
								token: j
							});
						if (w.error) {
							const e = Object(o.a)(w.error, w.status);
							return void s(Object(i.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await n.e("gildActions").then(n.bind(null, "./src/reddit/actions/gold/gild.ts"));
							s(P()), s(Object(i.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: r,
								all_awardings: o,
								coins: a,
								treatment_tags: c
							} = w.body;
							return s(t({
								awardKarmaReceived: r || 0,
								awardId: v,
								awardings: o && o.length ? Object(h.a)(o).map(e => ({
									award: Object(f.h)(e),
									total: e.count
								})) : [],
								coins: a,
								id: e,
								treatmentTags: c
							})), void Object(b.b)(b.a.GoldPayment)
						}
					} catch (_) {
						const e = Object(o.a)(_);
						s(Object(i.stripeApiError)(e))
					} else {
						const e = r.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						s(Object(i.stripeApiError)(e))
					}
				}, N = e => async (t, n, {
					apiContext: r
				}) => {
					const a = Object(b.c)(b.a.GoldPayment),
						{
							coins: c,
							pennies: d
						} = e;
					try {
						const e = await Object(m.a)({
							context: r(),
							coins: c,
							pennies: d,
							correlationId: a
						});
						if (e.error) {
							const n = Object(o.a)(e.error);
							return void t(Object(i.paypalApiError)(n))
						} {
							const {
								order_id: t
							} = e.body;
							return t
						}
					} catch (l) {
						s.c.captureException(l);
						const e = Object(o.a)(l);
						t(Object(i.paypalApiError)(e))
					}
				}, M = (e, t) => async (n, r, {
					apiContext: a
				}) => {
					const c = r(),
						d = Object(y.r)(c) || Object(b.d)(b.a.GoldPayment, !1),
						{
							coins: l,
							pennies: u
						} = t;
					try {
						const r = await Object(m.c)({
							context: a(),
							offerContext: Object(O.d)(t, !1),
							orderId: e,
							coins: l,
							pennies: u,
							correlationId: d
						});
						if (r.error) {
							const e = Object(o.a)(r.error);
							return void n(Object(i.paypalApiError)(e))
						} {
							const {
								coins: e
							} = r.body;
							n(Object(i.paymentCompleted)({
								coins: e,
								confirmed: !0
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (p) {
						s.c.captureException(p);
						const e = Object(o.a)(p);
						n(Object(i.paypalApiError)(e))
					}
				}, L = (e, t) => async (a, c, {
					apiContext: d
				}) => {
					const l = c(),
						u = Object(y.r)(l) || Object(b.d)(b.a.GoldPayment, !1),
						{
							coins: p,
							pennies: g
						} = t;
					try {
						const {
							gildModalThingId: s,
							isAnonymous: c,
							message: j,
							selectedAward: y
						} = l.gild;
						if (!s || !y) return void a(Object(i.paypalApiError)(r.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const C = y.id,
							x = await Object(m.d)({
								context: d(),
								offerContext: Object(O.d)(t, !0),
								orderId: e,
								coins: p,
								pennies: g,
								thingId: s,
								awardId: C,
								message: j || "",
								isAnonymous: c,
								correlationId: u
							});
						if (x.error) {
							const e = Object(o.a)(x.error);
							a(Object(i.paypalApiError)(e))
						} else {
							a(P());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: r,
								subreddit_coins: o,
								treatment_tags: c
							} = x.body;
							a(Object(i.paymentCompleted)({
								coins: r,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await n.e("gildActions").then(n.bind(null, "./src/reddit/actions/gold/gild.ts"));
							a(d({
								awardId: C,
								awardKarmaReceived: t || 0,
								awardings: Object(h.a)(e).map(e => ({
									award: Object(f.h)(e),
									total: e.count
								})),
								coins: r,
								id: s,
								subredditCoins: o,
								treatmentTags: c
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (j) {
						s.c.captureException(j);
						const e = Object(o.a)(j);
						a(Object(i.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "selectPaymentMethod", (function() {
				return d
			})), n.d(t, "paymentCompleted", (function() {
				return l
			})), n.d(t, "cardNameInput", (function() {
				return u
			})), n.d(t, "postalCodeInput", (function() {
				return m
			})), n.d(t, "cardNameEmpty", (function() {
				return p
			})), n.d(t, "cardElementChange", (function() {
				return b
			})), n.d(t, "stripeTokenPending", (function() {
				return h
			})), n.d(t, "stripeTokenError", (function() {
				return f
			})), n.d(t, "stripeApiError", (function() {
				return O
			})), n.d(t, "validateAndCreateStripeToken", (function() {
				return g
			})), n.d(t, "paypalApiError", (function() {
				return j
			})), n.d(t, "toggleRememberCard", (function() {
				return y
			})), n.d(t, "selectSavedCard", (function() {
				return C
			})), n.d(t, "_deleteSavedCard", (function() {
				return x
			})), n.d(t, "deleteSavedCard", (function() {
				return _
			})), n.d(t, "savedCardsPending", (function() {
				return v
			})), n.d(t, "savedCardsSuccess", (function() {
				return P
			})), n.d(t, "loadSavedCards", (function() {
				return k
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/sentry/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/gold/purchase.ts"),
				c = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				i = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(a.a)(c.B),
				l = Object(a.a)(c.w),
				u = Object(a.a)(c.b),
				m = Object(a.a)(c.y),
				p = Object(a.a)(c.a),
				b = Object(a.a)(c.E),
				h = Object(a.a)(c.G),
				f = Object(a.a)(c.F),
				O = Object(a.a)(c.D),
				g = e => async (t, n) => {
					const o = n(),
						a = Object(i.h)(o),
						s = Object(i.l)(o),
						{
							token: c,
							error: d
						} = await e.createToken({
							name: a,
							address_zip: s
						});
					if (a.trim()) {
						if (!d && c) return c;
						t(f(d || void 0))
					} else {
						const e = r.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, j = Object(a.a)(c.x), y = Object(a.a)(c.H), C = Object(a.a)(c.C), x = Object(a.a)(c.g), _ = e => async (t, n, {
					apiContext: r
				}) => {
					t(x(e));
					try {
						const t = await Object(s.a)(r(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (a) {
						o.c.captureException(a)
					}
				}, v = Object(a.a)(c.z), P = Object(a.a)(c.A), k = () => async (e, t, {
					apiContext: n
				}) => {
					e(v());
					try {
						const t = await Object(s.b)(n());
						if (t.error) throw new Error(t.error.type);
						const r = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(P(r)), r[0] && e(C(r[0].cardId))
					} catch (r) {
						o.c.captureException(r), e(P([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "openPremiumPurchaseModal", (function() {
				return h
			})), n.d(t, "closePremiumPurchaseModal", (function() {
				return f
			})), n.d(t, "stripePremiumPurchaseRequested", (function() {
				return O
			})), n.d(t, "paymentBlobCreated", (function() {
				return g
			})), n.d(t, "openWithBlob", (function() {
				return j
			}));
			var r = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/sentry/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/formatApiError/index.ts"),
				d = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = n("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				u = n("./src/reddit/endpoints/gold/purchase.ts"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				b = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const h = Object(a.a)(b.t),
				f = Object(a.a)(b.e),
				O = e => async (t, n, {
					apiContext: r
				}) => {
					const a = Object(p.a)(n()),
						s = (null == a ? void 0 : a.pennies) || c.tb,
						l = Object(m.c)(m.a.GoldPayment);
					t(Object(d.stripeTokenPending)());
					const b = await t(Object(d.validateAndCreateStripeToken)(e));
					if (b) try {
						const e = await Object(u.g)({
							context: r(),
							correlationId: l,
							pennies: s,
							token: b
						});
						if (e.error) {
							const n = Object(i.a)(e.error);
							t(Object(d.stripeApiError)(n))
						} else t(Object(d.paymentCompleted)({
							confirmed: !1
						}))
					} catch (h) {
						const e = Object(i.a)(h);
						t(Object(d.stripeApiError)(e))
					} else {
						const e = o.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						t(Object(d.stripeApiError)(e))
					}
				}, g = Object(a.a)(b.v), j = ({
					packageId: e,
					correlationId: t
				}) => async (n, o, {
					apiContext: a
				}) => {
					n(h({
						packageId: e,
						correlationId: t
					}));
					const c = Object(p.a)(o()),
						u = (null == c ? void 0 : c.paypalButtonId) || r.a.paypal.buttons.premium;
					if (u) try {
						const e = await Object(l.f)({
							buttonId: u,
							context: a(),
							correlationId: t
						});
						if (e.error) {
							const t = Object(i.a)(e.error);
							n(Object(d.paypalApiError)(t))
						} else n(g(e))
					} catch (m) {
						const e = Object(i.a)(m);
						n(Object(d.paypalApiError)(e))
					} else s.c.captureMessage("No Premium packages available on Premium purchase modal")
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "a", (function() {
				return x
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/env/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/sentry/index.ts"),
				c = n("./src/reddit/endpoints/gold/productCatalog.ts"),
				i = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const p = Object(a.a)(m.j),
				b = Object(a.a)(m.k),
				h = Object(a.a)(m.i),
				f = e => async (t, n, {
					apiContext: a
				}) => {
					t(p());
					const d = n(),
						l = Object(i.K)(d);
					try {
						const n = !l,
							r = await Object(c.b)({
								context: a(),
								correlationId: e,
								shouldUseCurrentOrigin: n
							});
						if (!r.ok) throw new Error(r.error && r.error.type || "Unknown error");
						const o = r.body;
						t(b(o))
					} catch (u) {
						Object(o.b)() || console.error(u), s.c.captureException(u);
						const e = r.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(h(e))
					}
				}, O = Object(a.a)(m.m), g = Object(a.a)(m.n), j = Object(a.a)(m.l), y = (e, t) => async (n, a, {
					apiContext: i
				}) => {
					n(O());
					try {
						const r = await Object(c.c)({
							awardId: e,
							context: i(),
							correlationId: t
						});
						if (!r.ok) throw new Error(r.error && r.error.type || "Unknown error");
						const o = r.body;
						if (!o.coinPackages || !o.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						n(g(o))
					} catch (d) {
						Object(o.b)() || console.error(d), s.c.captureException(d);
						const e = r.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						n(j(e))
					}
				}, C = Object(a.a)(m.h), x = () => async (e, t, {
					gqlContext: n
				}) => {
					var a, i;
					try {
						const t = await Object(c.a)(n());
						if (t.ok) {
							const n = t.body.data.claimAwardOffer;
							if (null === (a = n.errors) || void 0 === a ? void 0 : a.length) throw new Error(n.errors.map(e => e.message).join(" | "));
							if (!(null === (i = n.awards) || void 0 === i ? void 0 : i.length)) throw new Error("Got empty award list on free award offer claim");
							if (!n.ok) throw new Error("Got not ok response on free award offer claim");
							await e(C({
								awards: n.awards
							})), e(Object(u.z)())
						}
					} catch (m) {
						Object(o.b)() || console.error(m), e(Object(d.f)({
							kind: l.b.Error,
							text: r.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), s.c.captureException(m)
					}
				}
		},
		"./src/reddit/components/CoinPurchaseDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				CoinPurchaseDropdown: "_3MLZbmCsSK5yh_UYD3717s",
				coinPurchaseDropdown: "_3MLZbmCsSK5yh_UYD3717s",
				activeSale: "_2MCszvETQ_Z6kv8AZ0mhCe",
				purchaseList: "_310fLrnWkOCPEaTfEufxkJ"
			}
		},
		"./src/reddit/components/CoinPurchaseDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "CoinPurchaseDropdown", (function() {
				return re
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/higherOrderComponents/asTooltip.tsx"),
				s = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/models/Gold/ProductOffer.ts"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/controls/Dropdown/index.tsx"),
				l = n("./src/reddit/helpers/trackers/goldTopNav.ts"),
				u = n("./src/reddit/components/CoinPurchaseDropdownHeader/index.m.less"),
				m = n.n(u),
				p = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				b = n("./src/reddit/components/CoinPurchaseDropdownHeader/DefaultHeader/index.m.less"),
				h = n.n(b);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var O = e => {
					const {
						className: t
					} = e;
					return o.a.createElement("div", {
						className: Object(s.a)(t, h.a.header)
					}, o.a.createElement("span", {
						className: h.a.headerText
					}, f._("Give Gold, Silver, Platinum, and more with Coins", null, {
						hk: "3MfKV4"
					})), o.a.createElement(p.a, {
						className: h.a.headerLink,
						to: "/coins"
					}, f._("What are Coins?", null, {
						hk: "DNBPx"
					})))
				},
				g = n("./src/reddit/components/CoinPurchaseDropdownHeader/SalesHeader/index.m.less"),
				j = n.n(g);
			var y = e => {
				const {
					className: t,
					salesConfig: n
				} = e, {
					dropdownHeaderText: r,
					dropdownHeaderBackgroundAsset: a
				} = n;
				return o.a.createElement("div", {
					className: Object(s.a)(t, j.a.header)
				}, a && o.a.createElement("img", {
					className: j.a.saleHeaderImage,
					src: a
				}), o.a.createElement("span", {
					className: j.a.headerText
				}, r))
			};
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var x = e => {
					const {
						activeSaleConfig: t
					} = e;
					return t ? o.a.createElement(y, {
						className: m.a.header,
						salesConfig: t
					}) : o.a.createElement(O, {
						className: m.a.header
					})
				},
				_ = n("./node_modules/fbt/lib/FbtPublic.js"),
				v = n("./node_modules/react-redux/es/index.js"),
				P = n("./node_modules/reselect/es/index.js"),
				k = n("./src/lib/constants/index.ts"),
				w = n("./src/lib/opener/index.ts"),
				E = n("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				I = n("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				A = n("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				T = n("./src/reddit/actions/modal.ts"),
				S = n("./src/reddit/constants/modals.ts"),
				N = n("./src/reddit/contexts/PageLayer/index.tsx"),
				M = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				L = n("./src/reddit/featureFlags/index.ts"),
				D = n("./src/reddit/helpers/correlationIdTracker.ts"),
				R = n("./src/reddit/models/Gold/Premium/index.ts"),
				F = n("./src/reddit/selectors/crypto/points.ts"),
				H = n("./src/reddit/selectors/experiments/econStorefrontClaim.ts"),
				U = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				G = n("./src/reddit/selectors/user.ts"),
				B = n("./src/reddit/components/LottieAnimation/index.tsx"),
				$ = n("./src/reddit/controls/Button/index.tsx"),
				z = n("./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less"),
				K = n.n(z);
			var q = e => {
					const {
						className: t,
						buttonClass: n,
						buttonSubtext: r,
						buttonSubtextCrossout: a,
						buttonText: c,
						icon: i,
						onClick: d,
						primaryText: l,
						subtext: u,
						subtextCrossout: m
					} = e, p = n ? $.f : $.i;
					return o.a.createElement("div", {
						className: Object(s.a)(t, K.a.CompactCoinPurchaseListItem)
					}, o.a.createElement("div", {
						className: K.a.productSection
					}, i, o.a.createElement("div", null, o.a.createElement("span", {
						className: K.a.primaryText
					}, l), u && o.a.createElement("span", {
						className: Object(s.a)(K.a.subtext, {
							[K.a.crossout]: m
						})
					}, Array.isArray(u) ? u.map((e, t) => o.a.createElement("p", {
						key: t
					}, e)) : u))), o.a.createElement("div", {
						className: K.a.priceSection
					}, o.a.createElement(p, {
						className: Object(s.a)(K.a.button, n),
						redditStyle: !0,
						onClick: d
					}, c), o.a.createElement("span", {
						className: Object(s.a)(K.a.buttonSubtext, {
							[K.a.crossout]: a
						})
					}, r)))
				},
				V = n("./src/reddit/components/CompactCoinPurchaseList/index.m.less"),
				W = n.n(V);
			const Z = Object(P.c)({
					coinPackages: U.d,
					communityPointsConversionEnabled: L.d.spPointsCoinConversion,
					communityPointsName: (e, t) => {
						var n;
						const r = Object(N.q)(e, t);
						return null === (n = Object(F.b)(e, null == r ? void 0 : r.id)) || void 0 === n ? void 0 : n.name
					},
					isFreeAwardEventEnabled: e => Object(H.a)(e) && Object(U.g)(e),
					isPremiumSubscriber: G.t,
					premiumPackages: U.i,
					purchaseCatalogError: U.j,
					purchaseCatalogPending: U.k
				}),
				Y = Object(v.b)(Z, e => ({
					onClickClaimFreeAward: () => e(Object(T.h)(S.a.ECON_CLAIM_FREE_AWARD_MODAL)),
					onClickCoinPackage: (t, n) => e(Object(E.c)({
						correlationId: n,
						packageId: t.mobileId
					})),
					onClickConvert: () => e(Object(T.h)(S.a.CONVERT_TO_COINS)),
					onClickPremiumPackage: (t, n) => n ? e(Object(I.openWithBlob)({
						packageId: R.b,
						correlationId: t
					})) : Object(w.d)("/premium", w.c.BLANK),
					requestPurchaseCatalog: t => e(Object(A.b)(t))
				}));
			class Q extends o.a.Component {
				constructor(e) {
					super(e), this.handleClickBuyCoins = e => {
						const {
							onClick: t,
							onClickCoinPackage: n,
							sendEvent: r
						} = this.props;
						t && t(), r(l.a(e.mobileId)), n(e, this.correlationId)
					}, this.handleClickBuyPremium = () => {
						var e;
						const {
							onClick: t,
							onClickPremiumPackage: n,
							pageLayer: r,
							sendEvent: o
						} = this.props;
						t && t(), o(l.c());
						const a = (null === (e = null == r ? void 0 : r.meta) || void 0 === e ? void 0 : e.name) === k.Hb.PREMIUM;
						n(this.correlationId, a)
					}, this.handleClickFreeAward = () => {
						const {
							onClickClaimFreeAward: e,
							sendEvent: t
						} = this.props;
						t(l.b()), e()
					}, this.correlationId = Object(D.d)(D.a.GoldPayment, !1), e.coinPackages.length || e.purchaseCatalogPending || e.requestPurchaseCatalog(this.correlationId)
				}
				getListItemData() {
					const {
						coinPackages: e,
						isPremiumSubscriber: t,
						premiumPackages: n,
						sorted: r
					} = this.props, o = e.map(e => {
						const {
							baselineCoins: t,
							baselinePennies: n,
							coins: r,
							pennies: o,
							bonusPct: a
						} = e, s = r.toLocaleString(), c = _.fbt._("{number of coins} Coins", [_.fbt._param("number of coins", s)], {
							hk: "1bO7gz"
						}), i = `$${o/100}`;
						let d, l;
						if (r !== t) {
							const e = t.toLocaleString();
							d = _.fbt._("{number of coins of non-sale package} coins", [_.fbt._param("number of coins of non-sale package", e)], {
								hk: "afkY9"
							})
						}
						return {
							buttonSubtext: l = o !== n ? `$${n/100}` : a ? _.fbt._("{percent bonus}% Bonus", [_.fbt._param("percent bonus", a.toLocaleString())], {
								hk: "2zgjZ1"
							}) : void 0,
							buttonText: i,
							coinPackage: e,
							primaryText: c,
							subtext: d
						}
					});
					r && o.sort((e, t) => {
						return (e.coinPackage ? e.coinPackage.coins : 0) - (t.coinPackage ? t.coinPackage.coins : 0)
					});
					const a = n.length ? n[0] : void 0;
					if (t || !a) return o;
					const {
						periodicalCoins: s,
						signupBonusCoins: c
					} = a, i = c ? c.toLocaleString() : void 0, d = s.toLocaleString(), l = {
						buttonClass: W.a.premiumButtonStyle,
						buttonSubtext: i ? _.fbt._("{number of bonus coins} bonus coins", [_.fbt._param("number of bonus coins", i)], {
							hk: "YgHAT"
						}) : void 0,
						buttonText: _.fbt._("Upgrade", null, {
							hk: "1tsWOd"
						}),
						primaryText: _.fbt._("Premium", null, {
							hk: "45A9gK"
						}),
						subtext: [_.fbt._("{monthly coins} coins/mo", [_.fbt._param("monthly coins", d)], {
							hk: "2hVTon"
						}), _.fbt._("Ads free & more", null, {
							hk: "wO4Wc"
						})]
					};
					return o.concat(l)
				}
				render() {
					const {
						className: e,
						coinPackages: t,
						communityPointsConversionEnabled: n,
						communityPointsName: r,
						isFreeAwardEventEnabled: a,
						onClickConvert: s,
						purchaseCatalogError: c,
						purchaseCatalogPending: i
					} = this.props;
					return i ? o.a.createElement("div", {
						className: e
					}, o.a.createElement("div", {
						className: W.a.loaderContainer
					}, o.a.createElement(M.a, {
						sizePx: 80
					}))) : c || !t.length ? o.a.createElement("div", {
						className: e
					}, o.a.createElement("div", {
						className: W.a.errorContainer
					}, _.fbt._("Oops, something went wrong", null, {
						hk: "4EQRS8"
					}))) : o.a.createElement("div", {
						className: e
					}, a && o.a.createElement(q, {
						buttonClass: W.a.freeAwardButton,
						buttonText: _.fbt._("Claim", null, {
							hk: "OUYUl"
						}),
						icon: o.a.createElement(B.a, {
							assetUrl: "https://www.redditstatic.com/gold/awards/animations/free_award/flying.json",
							className: W.a.presentAnimation,
							loop: !0,
							onClick: this.handleClickFreeAward
						}),
						onClick: this.handleClickFreeAward,
						primaryText: _.fbt._("Free Award to give out", null, {
							hk: "2NBLhF"
						})
					}), this.getListItemData().map(e => {
						const {
							buttonClass: t,
							buttonSubtext: n,
							buttonText: r,
							coinPackage: a,
							primaryText: s,
							subtext: c
						} = e, i = a && a.coins !== a.baselineCoins, d = a && a.pennies !== a.baselinePennies;
						return o.a.createElement(q, {
							buttonClass: t,
							buttonSubtext: n,
							buttonSubtextCrossout: d,
							buttonText: r,
							key: s,
							onClick: a ? () => this.handleClickBuyCoins(a) : this.handleClickBuyPremium,
							primaryText: s,
							subtext: c,
							subtextCrossout: i
						})
					}), n && r && o.a.createElement(q, {
						buttonText: _.fbt._("Convert", null, {
							hk: "zVTTU"
						}),
						onClick: s,
						primaryText: _.fbt._("Convert {community points name}", [_.fbt._param("community points name", r)], {
							hk: "e7BeU"
						}),
						subtext: _.fbt._("into Coins", null, {
							hk: "1XFIa6"
						})
					}))
				}
			}
			var J = Object(N.t)()(Y(Object(i.c)(Q))),
				X = n("./src/reddit/components/CoinPurchaseDropdown/index.m.less"),
				ee = n.n(X);
			const {
				fbt: te
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ne = Object(a.a)(d.a);
			class re extends o.a.Component {
				constructor() {
					super(...arguments), this.timer = void 0, this.getOfferContext = () => this.props.activeSaleConfig ? c.a.CoinSale : this.props.isFreeAwardEventEnabled ? c.a.StorefrontFreeAward : void 0, this.handleMouseEnter = () => {
						this.timer && clearTimeout(this.timer)
					}, this.handleMouseLeave = () => {
						const {
							onCloseTooltip: e
						} = this.props;
						this.timer = setTimeout(e, 700)
					}
				}
				componentDidMount() {
					const {
						isOpen: e,
						sendEvent: t
					} = this.props;
					e && t(l.e(this.getOfferContext()))
				}
				componentDidUpdate(e) {
					!e.isOpen && this.props.isOpen && this.props.sendEvent(l.e(this.getOfferContext()))
				}
				render() {
					const {
						activeSaleConfig: e,
						className: t,
						isOpen: n,
						onCloseTooltip: r,
						tooltipId: a
					} = this.props;
					return o.a.createElement(ne, {
						className: Object(s.a)(t, ee.a.CoinPurchaseDropdown, {
							[ee.a.activeSale]: !!e
						}),
						isFixed: !0,
						isOpen: n,
						targetPosition: ["center", "bottom"],
						tooltipPosition: ["right", "top"],
						tooltipId: a
					}, o.a.createElement(x, {
						activeSaleConfig: e
					}), o.a.createElement(J, {
						className: ee.a.purchaseList,
						onClick: r,
						sorted: !0
					}))
				}
			}
			t.default = Object(i.c)(re)
		},
		"./src/reddit/components/CoinPurchaseDropdownHeader/DefaultHeader/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_2lgyQv1Xe7SzrqkbUeaEFL",
				headerText: "_1CH25li1ODdO2KEOCMjWEj",
				headerLink: "_1lmsw-IaCDAsy3RT_4s5s9"
			}
		},
		"./src/reddit/components/CoinPurchaseDropdownHeader/SalesHeader/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_1mxOXTqB-MrirvDiecjz4Z",
				headerText: "_1eNKe31O3AOBXQgWsPIL4P",
				saleHeaderImage: "_1Vf1tHvNme79A6GR8te6F-"
			}
		},
		"./src/reddit/components/CoinPurchaseDropdownHeader/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_2HB5cXf0bpHe1piH74nOIQ"
			}
		},
		"./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less": function(e, t, n) {
			e.exports = {
				CompactCoinPurchaseListItem: "_3lHAZGc0ML7wczmPcwezOF",
				compactCoinPurchaseListItem: "_3lHAZGc0ML7wczmPcwezOF",
				productSection: "_2VkRnsOobI-4VlOs4ID5Vy",
				primaryText: "_4cdfLigUWzeeVcPzzbe78",
				buttonSubtext: "_2Mm_ve0iAKMLDXgbbvVmSD",
				subtext: "_1K7tfdKlu_H-Eljz3TrNc8",
				priceSection: "_49wuP84YuCbFBmZg2KI5s",
				button: "_2s6F0RDk744nqzZtEK_6Og",
				crossout: "_3LPal_LVAaPThYFSl8Vav3"
			}
		},
		"./src/reddit/components/CompactCoinPurchaseList/index.m.less": function(e, t, n) {
			e.exports = {
				errorContainer: "_3dCfx1TJ9381ixSTRcnyT-",
				loaderContainer: "xqaZPpbD8_8ATMQOxTIB_",
				premiumButtonStyle: "_3271lFh79mcpLNBH_vvl7r",
				freeAwardButton: "_3HU8lJbd8VJ3ixX_QvZ6jF",
				presentAnimation: "_2pcjA77qS9COMCWrQ4OK9c"
			}
		},
		"./src/reddit/components/LottieAnimation/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lottie-web/build/player/lottie.js"),
				o = n.n(r),
				a = n("./node_modules/react/index.js"),
				s = n.n(a),
				c = n("./src/reddit/components/LottieAnimation/util.ts");
			const i = s.a.memo(e => {
				const t = s.a.createRef(),
					{
						assetData: n,
						assetUrl: r,
						className: i,
						hidden: d,
						loop: l,
						onClick: u,
						prefersReducedAnimation: m
					} = e,
					[p, b] = Object(a.useState)(n);
				Object(a.useEffect)(() => {
					r ? Object(c.a)(r).then(b) : n && b(n)
				}, [r, n]);
				const [h, f] = Object(a.useState)(null);
				Object(a.useEffect)(() => {
					const e = t.current;
					if (!e || 0 !== e.childElementCount || h || !p) return;
					const n = o.a.loadAnimation({
						autoplay: !1,
						loop: l,
						container: e,
						animationData: p
					});
					f(n)
				}, [l, t, h, p]), Object(a.useEffect)(() => {
					if (h)
						if (d) h.stop();
						else if (m) {
						const e = h.getDuration(!0);
						h.goToAndPlay(e, !0)
					} else h.goToAndPlay(0)
				}, [d, m, h]);
				const O = Object(a.useCallback)(() => {
					h && h.goToAndPlay(0)
				}, [h]);
				return s.a.createElement("div", {
					className: i,
					style: {
						display: d ? "none" : "block"
					},
					ref: t,
					onClick: u || O
				})
			});
			t.a = i
		},
		"./src/reddit/components/LottieAnimation/util.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			n("./src/reddit/components/ImageWithFallback/index.tsx");
			const r = {};

			function o(e) {
				let t = r[e];
				return t || (t = r[e] = fetch(e, {
					mode: "cors",
					cache: "force-cache"
				}).then(t => (t.ok || function(e) {
					throw new Error(`Unable to download effect asset "${e}"`)
				}(e), t.json()))), t
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = n.n(s);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => o.a.createElement("div", {
				className: Object(a.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			}));
			var r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				s = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				i = n("./src/reddit/endpoints/gold/purchase.ts");
			const d = async ({
				buttonId: e,
				context: t,
				correlationId: n
			}) => {
				const d = {
						button_id: e,
						correlation_id: n
					},
					l = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					u = Object(c.a)(l);
				return Object(o.a)(Object(a.a)(t, [s.a]), {
					method: r.fb.POST,
					endpoint: u,
					data: d
				}).then(i.c)
			}, l = async ({
				context: e,
				coins: t,
				pennies: n,
				correlationId: c
			}) => {
				const d = {
					coins: t,
					pennies: n,
					correlation_id: c
				};
				return Object(o.a)(Object(a.a)(e, [s.a]), {
					method: r.fb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(i.c)
			}, u = async ({
				context: e,
				awardId: t,
				pennies: n,
				thingId: c,
				correlationId: d
			}) => {
				const l = {
					award_id: t,
					correlation_id: d,
					pennies: n,
					thing_id: c
				};
				return Object(o.a)(Object(a.a)(e, [s.a]), {
					method: r.fb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(i.c)
			}, m = async ({
				context: e,
				offerContext: t,
				orderId: n,
				coins: c,
				pennies: d,
				correlationId: l
			}) => {
				const u = {
					offer_context: t,
					order_id: n,
					coins: c,
					pennies: d,
					correlation_id: l
				};
				return Object(o.a)(Object(a.a)(e, [s.a]), {
					method: r.fb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: u
				}).then(i.c)
			}, p = async ({
				awardId: e,
				context: t,
				coins: n,
				correlationId: c,
				isAnonymous: d,
				message: l,
				offerContext: u,
				orderId: m,
				pennies: p,
				thingId: b
			}) => {
				const h = {
					award_id: e,
					coins: n,
					correlation_id: c,
					is_anonymous: d,
					message: l,
					offer_context: u,
					order_id: m,
					pennies: p,
					thing_id: b
				};
				return Object(o.a)(Object(a.a)(t, [s.a]), {
					method: r.fb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: h
				}).then(i.c)
			}, b = async ({
				awardId: e,
				context: t,
				correlationId: n,
				isAnonymous: c,
				message: d,
				orderId: l,
				thingId: u
			}) => {
				const m = {
					award_id: e,
					correlation_id: n,
					is_anonymous: c,
					message: d,
					order_id: l,
					thing_id: u
				};
				return Object(o.a)(Object(a.a)(t, [s.a]), {
					method: r.fb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: m
				}).then(i.c)
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "j", (function() {
				return s
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "k", (function() {
				return d
			})), n.d(t, "l", (function() {
				return l
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "m", (function() {
				return O
			}));
			var r, o = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");

			function s(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "Ethereum Main Network";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function c(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function i(e) {
				switch (e) {
					case r.Ethereum:
					case r.EthTraderEthereum:
						return "homestead";
					case r.Rinkeby:
					case r.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}
			async function d(e, t, n) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function l(e, t, n) {
				return await Object(a.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/crypto/${t}/registrations`,
					data: n
				})
			}
			async function u(e, t, n) {
				return await Object(a.a)(e, {
					method: "delete",
					endpoint: `${o.a.metaUrl}/crypto/${t}/registrations/${n}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(r || (r = {}));
			const m = (e, t, n) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: n
				}),
				p = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				b = e => ({
					type: "claim",
					subredditId: e
				}),
				h = e => ({
					type: "subscribe",
					subredditId: e
				}),
				f = (e, t, n, r) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: n,
					amount: r
				});
			async function O(e, t) {
				return await Object(a.a)(e, {
					method: "put",
					endpoint: `${o.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return i
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const o = {
					PREMIUM_1_MONTH: {
						priceInCoins: 1800,
						monthsOfPremium: 1
					},
					PREMIUM_3_MONTHS: {
						priceInCoins: 5400,
						monthsOfPremium: 3
					},
					PREMIUM_6_MONTHS: {
						priceInCoins: 10800,
						monthsOfPremium: 6
					},
					PREMIUM_12_MONTHS: {
						priceInCoins: 21600,
						monthsOfPremium: 12
					}
				},
				a = (e, t = !1) => {
					const n = [];
					for (const r in o) {
						const a = o[r];
						(a.priceInCoins <= e || t) && n.push(a)
					}
					return n
				},
				s = e => r.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [r.fbt._plural(e.monthsOfPremium, "number of months"), r.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				c = "com.reddit.premium_1";
			var i;
			! function(e) {
				e.Monthly = "monthly", e.Yearly = "yearly"
			}(i || (i = {}))
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				o = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/economics/claims/constants.ts")),
				a = n("./src/reddit/actions/economics/me/constants.ts");
			const s = {};
			var c = (e = s, t) => {
					switch (t.type) {
						case a.a: {
							const n = t.payload.claimPoints || {},
								r = Object.keys(n).reduce((t, r) => (t[r] = {
									...e[r],
									availableClaims: n[r]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var n;
								(null === (n = e[t]) || void 0 === n ? void 0 : n.isClaiming) && (r[t] = r[t] || {
									availableClaims: []
								}, r[t].isClaiming = !0)
							}), r
						}
						case o.b:
						case o.a:
							const {
								subredditId: n
							} = t.payload;
							return {
								...e, [n]: {
									...e[n],
									isClaiming: t.type === o.b
								}
							};
						default:
							return e
					}
				},
				i = n("./src/reddit/actions/governance/constants.ts"),
				d = n("./src/reddit/endpoints/governance/crypto.ts");
			const l = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function m(e) {
				var t, n, r, o, a;
				const s = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					c = null == s ? void 0 : s.contracts,
					i = null == c ? void 0 : c.unlocked,
					l = null !== (r = null === (n = e.walletProvider) || void 0 === n ? void 0 : n.provider) && void 0 !== r ? r : e.provider,
					m = !!(null === (o = e.walletProvider) || void 0 === o ? void 0 : o.inTransition),
					p = !m && l === d.a.Stellar,
					b = p ? null == s ? void 0 : s.issuerAddress : null == i ? void 0 : i.address,
					h = p ? (null == s ? void 0 : s.decimals) || 7 : (null == i ? void 0 : i.decimals) || 0;
				return {
					blockchainProvider: l,
					contractAddress: b || "",
					contracts: c,
					decimals: h,
					displayConversion: "1" + "0".repeat(h),
					images: e.images || u,
					inTransition: m,
					name: e.name,
					nomenclature: null === (a = e.extra) || void 0 === a ? void 0 : a.nomenclature,
					polls: e.polls,
					symbol: p ? (null == s ? void 0 : s.token) || "PHOTON" : (null == i ? void 0 : i.token) || ""
				}
			}
			var p = (e = l, t) => {
				switch (t.type) {
					case i.a: {
						const {
							subredditId: n,
							meta: r
						} = t.payload;
						return {
							...e,
							[n]: m(r)
						}
					}
					default:
						return e
				}
			};
			const b = {};
			var h = (e = b, t) => {
				switch (t.type) {
					case i.n: {
						const {
							subredditId: n,
							wallets: r
						} = t.payload, o = Object.keys(r).reduce((t, o) => {
							return {
								...t,
								[o]: {
									...e[o] || {},
									[n]: r[o]
								}
							}
						}, {});
						return {
							...e,
							...o
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				claims: c,
				points: p,
				publicWallets: h
			})
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/endpoints/governance/crypto.ts"),
				s = n("./src/lib/initializeClient/installReducer.ts"),
				c = n("./src/reddit/reducers/features/crypto/index.ts");
			Object(s.a)({
				features: {
					crypto: c.a
				}
			});
			const i = (e, t) => {
				var n, r, o;
				return t ? null === (o = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.points) || void 0 === o ? void 0 : o[t] : void 0
			};

			function d() {
				const e = Object(o.Z)(),
					t = Object(r.e)(t => Object(o.q)(t, {
						pageLayer: e
					})),
					n = Object(r.e)(e => i(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: n
				}
			}
			const l = (e, t) => {
				var n;
				const r = null === (n = i(e, t)) || void 0 === n ? void 0 : n.blockchainProvider;
				return r === a.a.Ethereum || r === a.a.Rinkeby || r === a.a.EthTraderEthereum || r === a.a.EthTraderRinkeby
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CoinPurchaseDropdown.524e477a9f55788dfe6d.js.map