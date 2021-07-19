// https://www.redditstatic.com/desktop2x/reddit-components-CoinPurchaseDropdown.28f03c914fb2661a092f.js
// Retrieved at 7/19/2021, 12:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CoinPurchaseDropdown"], {
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return o
			}));
			const n = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				o = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return v
			})), r.d(t, "a", (function() {
				return k
			})), r.d(t, "e", (function() {
				return w
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "j", (function() {
				return T
			})), r.d(t, "i", (function() {
				return S
			})), r.d(t, "f", (function() {
				return M
			})), r.d(t, "g", (function() {
				return N
			})), r.d(t, "h", (function() {
				return L
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/formatApiError/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/constants/modals.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = r("./src/reddit/endpoints/gold/purchase.ts"),
				b = r("./src/reddit/helpers/correlationIdTracker.ts"),
				h = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				f = r("./src/reddit/models/Gold/Award.ts"),
				O = r("./src/reddit/models/Gold/ProductOffer.ts"),
				g = r("./src/reddit/models/Toast/index.ts"),
				y = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				C = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				j = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const x = Object(a.a)(j.q),
				_ = Object(a.a)(j.c),
				v = e => async (t, r) => {
					t(x(e)), t(Object(l.h)(c.a.ECON_COIN_PURCHASE))
				}, k = () => async (e, t) => {
					e(_()), e(Object(l.g)(c.a.ECON_COIN_PURCHASE))
				}, P = Object(a.a)(j.u), w = ({
					correlationId: e,
					packageId: t
				}) => async (r, n) => {
					const o = n();
					Object(y.e)(o, t) ? (r(P({
						correlationId: e,
						packageId: t
					})), r(Object(l.i)(c.a.GOLD_TARGETED_OFFER_MODAL))) : s.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${t}`)
				}, E = Object(a.a)(j.p), I = ({
					correlationId: e,
					packageId: t
				}) => async (r, n) => {
					Object(y.c)(n(), t) ? (r(E({
						correlationId: e,
						packageId: t
					})), r(Object(l.i)(c.a.ECON_COIN_PACKAGE_OFFER))) : s.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${t}`)
				}, A = (e, t, r) => async (o, a) => {
					await o(Object(d.c)(e, r));
					const s = a(),
						c = Object(y.m)(s);
					if (0 !== c.length) o(v({
						correlationId: r,
						packageId: c[0].mobileId,
						thingId: t
					}));
					else {
						const e = Object(y.j)(s),
							t = n.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						o(Object(u.f)({
							kind: g.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, T = (e, t) => async (r, a, {
					apiContext: s
				}) => {
					const c = a(),
						{
							coins: d,
							pennies: l
						} = t,
						u = Object(C.r)(c) || Object(b.d)(b.a.GoldPayment, !1);
					let m, h;
					r(Object(i.stripeTokenPending)());
					const f = Object(C.y)(c);
					if (f || (m = await r(Object(i.validateAndCreateStripeToken)(e)), h = Object(C.v)(c), m)) try {
						const e = await Object(p.f)({
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
							return void r(Object(i.stripeApiError)(t))
						}
						return r(Object(i.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(b.b)(b.a.GoldPayment)
					} catch (g) {
						const e = Object(o.a)(g);
						r(Object(i.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						r(Object(i.stripeApiError)(e))
					}
				}, S = (e, t, a) => async (s, c, {
					apiContext: d
				}) => {
					const l = c(),
						{
							coins: u,
							pennies: m
						} = t,
						g = Object(C.r)(l) || Object(b.d)(b.a.GoldPayment, !1);
					let y, j;
					s(Object(i.stripeTokenPending)());
					const x = Object(C.y)(l);
					if (x || (y = await s(Object(i.validateAndCreateStripeToken)(e)), j = Object(C.v)(l), y)) try {
						const {
							gildModalThingId: e,
							isAnonymous: c,
							message: C,
							selectedAward: _
						} = l.gild;
						if (!e || !_.id) {
							const e = n.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void s(Object(i.stripeApiError)(e))
						}
						const v = _.id,
							P = {
								gildType: v,
								isAnonymous: c,
								message: C
							},
							w = await Object(p.e)({
								coins: u,
								context: d(),
								correlationId: g,
								gildParams: P,
								isOldReddit: a,
								offerContext: Object(O.d)(t, !0),
								pennies: m,
								rememberCard: j,
								savedCardId: x || void 0,
								thingId: e,
								token: y
							});
						if (w.error) {
							const e = Object(o.a)(w.error, w.status);
							return void s(Object(i.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							s(k()), s(Object(i.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: n,
								all_awardings: o,
								coins: a,
								treatment_tags: c
							} = w.body;
							return s(t({
								awardKarmaReceived: n || 0,
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
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						s(Object(i.stripeApiError)(e))
					}
				}, M = e => async (t, r, {
					apiContext: n
				}) => {
					const a = Object(b.c)(b.a.GoldPayment),
						{
							coins: c,
							pennies: d
						} = e;
					try {
						const e = await Object(m.a)({
							context: n(),
							coins: c,
							pennies: d,
							correlationId: a
						});
						if (e.error) {
							const r = Object(o.a)(e.error);
							return void t(Object(i.paypalApiError)(r))
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
				}, N = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const c = n(),
						d = Object(C.r)(c) || Object(b.d)(b.a.GoldPayment, !1),
						{
							coins: l,
							pennies: u
						} = t;
					try {
						const n = await Object(m.c)({
							context: a(),
							offerContext: Object(O.d)(t, !1),
							orderId: e,
							coins: l,
							pennies: u,
							correlationId: d
						});
						if (n.error) {
							const e = Object(o.a)(n.error);
							return void r(Object(i.paypalApiError)(e))
						} {
							const {
								coins: e
							} = n.body;
							r(Object(i.paymentCompleted)({
								coins: e,
								confirmed: !0
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (p) {
						s.c.captureException(p);
						const e = Object(o.a)(p);
						r(Object(i.paypalApiError)(e))
					}
				}, L = (e, t) => async (a, c, {
					apiContext: d
				}) => {
					const l = c(),
						u = Object(C.r)(l) || Object(b.d)(b.a.GoldPayment, !1),
						{
							coins: p,
							pennies: g
						} = t;
					try {
						const {
							gildModalThingId: s,
							isAnonymous: c,
							message: y,
							selectedAward: C
						} = l.gild;
						if (!s || !C) return void a(Object(i.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const j = C.id,
							x = await Object(m.d)({
								context: d(),
								offerContext: Object(O.d)(t, !0),
								orderId: e,
								coins: p,
								pennies: g,
								thingId: s,
								awardId: j,
								message: y || "",
								isAnonymous: c,
								correlationId: u
							});
						if (x.error) {
							const e = Object(o.a)(x.error);
							a(Object(i.paypalApiError)(e))
						} else {
							a(k());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: n,
								subreddit_coins: o,
								treatment_tags: c
							} = x.body;
							a(Object(i.paymentCompleted)({
								coins: n,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							a(d({
								awardId: j,
								awardKarmaReceived: t || 0,
								awardings: Object(h.a)(e).map(e => ({
									award: Object(f.h)(e),
									total: e.count
								})),
								coins: n,
								id: s,
								subredditCoins: o,
								treatmentTags: c
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (y) {
						s.c.captureException(y);
						const e = Object(o.a)(y);
						a(Object(i.paypalApiError)(e))
					}
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
			})), r.d(t, "postalCodeInput", (function() {
				return m
			})), r.d(t, "cardNameEmpty", (function() {
				return p
			})), r.d(t, "cardElementChange", (function() {
				return b
			})), r.d(t, "stripeTokenPending", (function() {
				return h
			})), r.d(t, "stripeTokenError", (function() {
				return f
			})), r.d(t, "stripeApiError", (function() {
				return O
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return g
			})), r.d(t, "paypalApiError", (function() {
				return y
			})), r.d(t, "toggleRememberCard", (function() {
				return C
			})), r.d(t, "selectSavedCard", (function() {
				return j
			})), r.d(t, "_deleteSavedCard", (function() {
				return x
			})), r.d(t, "deleteSavedCard", (function() {
				return _
			})), r.d(t, "savedCardsPending", (function() {
				return v
			})), r.d(t, "savedCardsSuccess", (function() {
				return k
			})), r.d(t, "loadSavedCards", (function() {
				return P
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/sentry/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/endpoints/gold/purchase.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(a.a)(c.B),
				l = Object(a.a)(c.w),
				u = Object(a.a)(c.b),
				m = Object(a.a)(c.y),
				p = Object(a.a)(c.a),
				b = Object(a.a)(c.E),
				h = Object(a.a)(c.G),
				f = Object(a.a)(c.F),
				O = Object(a.a)(c.D),
				g = e => async (t, r) => {
					const o = r(),
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
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, y = Object(a.a)(c.x), C = Object(a.a)(c.H), j = Object(a.a)(c.C), x = Object(a.a)(c.g), _ = e => async (t, r, {
					apiContext: n
				}) => {
					t(x(e));
					try {
						const t = await Object(s.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (a) {
						o.c.captureException(a)
					}
				}, v = Object(a.a)(c.z), k = Object(a.a)(c.A), P = () => async (e, t, {
					apiContext: r
				}) => {
					e(v());
					try {
						const t = await Object(s.b)(r());
						if (t.error) throw new Error(t.error.type);
						const n = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(k(n)), n[0] && e(j(n[0].cardId))
					} catch (n) {
						o.c.captureException(n), e(k([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "openPremiumPurchaseModal", (function() {
				return h
			})), r.d(t, "closePremiumPurchaseModal", (function() {
				return f
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return O
			})), r.d(t, "paymentBlobCreated", (function() {
				return g
			})), r.d(t, "openWithBlob", (function() {
				return y
			}));
			var n = r("./src/config.ts"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				c = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/formatApiError/index.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				u = r("./src/reddit/endpoints/gold/purchase.ts"),
				m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				b = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const h = Object(a.a)(b.t),
				f = Object(a.a)(b.e),
				O = e => async (t, r, {
					apiContext: n
				}) => {
					const a = Object(p.a)(r()),
						s = (null == a ? void 0 : a.pennies) || c.vb,
						l = Object(m.c)(m.a.GoldPayment);
					t(Object(d.stripeTokenPending)());
					const b = await t(Object(d.validateAndCreateStripeToken)(e));
					if (b) try {
						const e = await Object(u.h)({
							context: n(),
							correlationId: l,
							pennies: s,
							token: b
						});
						if (e.error) {
							const r = Object(i.a)(e.error);
							t(Object(d.stripeApiError)(r))
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
				}, g = Object(a.a)(b.v), y = ({
					packageId: e,
					correlationId: t
				}) => async (r, o, {
					apiContext: a
				}) => {
					r(h({
						packageId: e,
						correlationId: t
					}));
					const c = Object(p.a)(o()),
						u = (null == c ? void 0 : c.paypalButtonId) || n.a.paypal.buttons.premium;
					if (u) try {
						const e = await Object(l.f)({
							buttonId: u,
							context: a(),
							correlationId: t
						});
						if (e.error) {
							const t = Object(i.a)(e.error);
							r(Object(d.paypalApiError)(t))
						} else r(g(e))
					} catch (m) {
						const e = Object(i.a)(m);
						r(Object(d.paypalApiError)(e))
					} else s.c.captureMessage("No Premium packages available on Premium purchase modal")
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return f
			})), r.d(t, "c", (function() {
				return C
			})), r.d(t, "a", (function() {
				return x
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/env/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/endpoints/gold/productCatalog.ts"),
				i = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/actions/post.ts"),
				m = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const p = Object(a.a)(m.j),
				b = Object(a.a)(m.k),
				h = Object(a.a)(m.i),
				f = e => async (t, r, {
					apiContext: a
				}) => {
					t(p());
					const d = r(),
						l = Object(i.J)(d);
					try {
						const r = !l,
							n = await Object(c.b)({
								context: a(),
								correlationId: e,
								shouldUseCurrentOrigin: r
							});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const o = n.body;
						t(b(o))
					} catch (u) {
						Object(o.b)() || console.error(u), s.c.captureException(u);
						const e = n.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(h(e))
					}
				}, O = Object(a.a)(m.m), g = Object(a.a)(m.n), y = Object(a.a)(m.l), C = (e, t) => async (r, a, {
					apiContext: i
				}) => {
					r(O());
					try {
						const n = await Object(c.c)({
							awardId: e,
							context: i(),
							correlationId: t
						});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const o = n.body;
						if (!o.coinPackages || !o.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						r(g(o))
					} catch (d) {
						Object(o.b)() || console.error(d), s.c.captureException(d);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(y(e))
					}
				}, j = Object(a.a)(m.h), x = () => async (e, t, {
					gqlContext: r
				}) => {
					var a, i;
					try {
						const t = await Object(c.a)(r());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (a = r.errors) || void 0 === a ? void 0 : a.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (i = r.awards) || void 0 === i ? void 0 : i.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(j({
								awards: r.awards
							})), e(Object(u.B)())
						}
					} catch (m) {
						Object(o.b)() || console.error(m), e(Object(d.f)({
							kind: l.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), s.c.captureException(m)
					}
				}
		},
		"./src/reddit/components/CoinPurchaseDropdown/index.m.less": function(e, t, r) {
			e.exports = {
				CoinPurchaseDropdown: "_3MLZbmCsSK5yh_UYD3717s",
				coinPurchaseDropdown: "_3MLZbmCsSK5yh_UYD3717s",
				activeSale: "_2MCszvETQ_Z6kv8AZ0mhCe",
				purchaseList: "_310fLrnWkOCPEaTfEufxkJ"
			}
		},
		"./src/reddit/components/CoinPurchaseDropdown/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "CoinPurchaseDropdown", (function() {
				return ne
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/higherOrderComponents/asTooltip.tsx"),
				s = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/models/Gold/ProductOffer.ts"),
				i = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/controls/Dropdown/index.tsx"),
				l = r("./src/reddit/helpers/trackers/goldTopNav.ts"),
				u = r("./src/reddit/components/CoinPurchaseDropdownHeader/index.m.less"),
				m = r.n(u),
				p = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				b = r("./src/reddit/components/CoinPurchaseDropdownHeader/DefaultHeader/index.m.less"),
				h = r.n(b);
			const {
				fbt: f
			} = r("./node_modules/fbt/lib/FbtPublic.js");
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
				g = r("./src/reddit/components/CoinPurchaseDropdownHeader/SalesHeader/index.m.less"),
				y = r.n(g);
			var C = e => {
				const {
					className: t,
					salesConfig: r
				} = e, {
					dropdownHeaderText: n,
					dropdownHeaderBackgroundAsset: a
				} = r;
				return o.a.createElement("div", {
					className: Object(s.a)(t, y.a.header)
				}, a && o.a.createElement("img", {
					className: y.a.saleHeaderImage,
					src: a
				}), o.a.createElement("span", {
					className: y.a.headerText
				}, n))
			};
			const {
				fbt: j
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var x = e => {
					const {
						activeSaleConfig: t
					} = e;
					return t ? o.a.createElement(C, {
						className: m.a.header,
						salesConfig: t
					}) : o.a.createElement(O, {
						className: m.a.header
					})
				},
				_ = r("./node_modules/fbt/lib/FbtPublic.js"),
				v = r("./node_modules/react-redux/es/index.js"),
				k = r("./node_modules/reselect/es/index.js"),
				P = r("./src/lib/constants/index.ts"),
				w = r("./src/lib/opener/index.ts"),
				E = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				I = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				A = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				T = r("./src/reddit/actions/modal.ts"),
				S = r("./src/reddit/constants/modals.ts"),
				M = r("./src/reddit/contexts/PageLayer/index.tsx"),
				N = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				L = r("./src/reddit/featureFlags/index.ts"),
				D = r("./src/reddit/helpers/correlationIdTracker.ts"),
				R = r("./src/reddit/models/Gold/Premium/index.ts"),
				F = r("./src/reddit/selectors/crypto/points.ts"),
				H = r("./src/reddit/selectors/experiments/econStorefrontClaim.ts"),
				U = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				B = r("./src/reddit/selectors/user.ts"),
				G = r("./src/reddit/components/LottieAnimation/index.tsx"),
				$ = r("./src/reddit/controls/Button/index.tsx"),
				z = r("./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less"),
				K = r.n(z);
			var q = e => {
					const {
						className: t,
						buttonClass: r,
						buttonSubtext: n,
						buttonSubtextCrossout: a,
						buttonText: c,
						icon: i,
						onClick: d,
						primaryText: l,
						subtext: u,
						subtextCrossout: m
					} = e, p = r ? $.f : $.i;
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
						className: Object(s.a)(K.a.button, r),
						redditStyle: !0,
						onClick: d
					}, c), o.a.createElement("span", {
						className: Object(s.a)(K.a.buttonSubtext, {
							[K.a.crossout]: a
						})
					}, n)))
				},
				V = r("./src/reddit/components/CompactCoinPurchaseList/index.m.less"),
				W = r.n(V);
			const Z = Object(k.c)({
					coinPackages: U.d,
					communityPointsConversionEnabled: L.d.spPointsCoinConversion,
					communityPointsName: (e, t) => {
						var r;
						const n = Object(M.q)(e, t);
						return null === (r = Object(F.b)(e, null == n ? void 0 : n.id)) || void 0 === r ? void 0 : r.name
					},
					isFreeAwardEventEnabled: e => Object(H.a)(e) && Object(U.g)(e),
					isPremiumSubscriber: B.s,
					premiumPackages: U.i,
					purchaseCatalogError: U.j,
					purchaseCatalogPending: U.k
				}),
				Y = Object(v.b)(Z, e => ({
					onClickClaimFreeAward: () => e(Object(T.h)(S.a.ECON_CLAIM_FREE_AWARD_MODAL)),
					onClickCoinPackage: (t, r) => e(Object(E.c)({
						correlationId: r,
						packageId: t.mobileId
					})),
					onClickConvert: () => e(Object(T.h)(S.a.CONVERT_TO_COINS)),
					onClickPremiumPackage: (t, r) => r ? e(Object(I.openWithBlob)({
						packageId: R.b,
						correlationId: t
					})) : Object(w.d)("/premium", w.c.BLANK),
					requestPurchaseCatalog: t => e(Object(A.b)(t))
				}));
			class J extends o.a.Component {
				constructor(e) {
					super(e), this.handleClickBuyCoins = e => {
						const {
							onClick: t,
							onClickCoinPackage: r,
							sendEvent: n
						} = this.props;
						t && t(), n(l.a(e.mobileId)), r(e, this.correlationId)
					}, this.handleClickBuyPremium = () => {
						var e;
						const {
							onClick: t,
							onClickPremiumPackage: r,
							pageLayer: n,
							sendEvent: o
						} = this.props;
						t && t(), o(l.c());
						const a = (null === (e = null == n ? void 0 : n.meta) || void 0 === e ? void 0 : e.name) === P.Jb.PREMIUM;
						r(this.correlationId, a)
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
						premiumPackages: r,
						sorted: n
					} = this.props, o = e.map(e => {
						const {
							baselineCoins: t,
							baselinePennies: r,
							coins: n,
							pennies: o,
							bonusPct: a
						} = e, s = n.toLocaleString(), c = _.fbt._("{number of coins} Coins", [_.fbt._param("number of coins", s)], {
							hk: "1bO7gz"
						}), i = `$${o/100}`;
						let d, l;
						if (n !== t) {
							const e = t.toLocaleString();
							d = _.fbt._("{number of coins of non-sale package} coins", [_.fbt._param("number of coins of non-sale package", e)], {
								hk: "afkY9"
							})
						}
						return {
							buttonSubtext: l = o !== r ? `$${r/100}` : a ? _.fbt._("{percent bonus}% Bonus", [_.fbt._param("percent bonus", a.toLocaleString())], {
								hk: "2zgjZ1"
							}) : void 0,
							buttonText: i,
							coinPackage: e,
							primaryText: c,
							subtext: d
						}
					});
					n && o.sort((e, t) => {
						return (e.coinPackage ? e.coinPackage.coins : 0) - (t.coinPackage ? t.coinPackage.coins : 0)
					});
					const a = r.length ? r[0] : void 0;
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
						communityPointsConversionEnabled: r,
						communityPointsName: n,
						isFreeAwardEventEnabled: a,
						onClickConvert: s,
						purchaseCatalogError: c,
						purchaseCatalogPending: i
					} = this.props;
					return i ? o.a.createElement("div", {
						className: e
					}, o.a.createElement("div", {
						className: W.a.loaderContainer
					}, o.a.createElement(N.a, {
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
						icon: o.a.createElement(G.a, {
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
							buttonSubtext: r,
							buttonText: n,
							coinPackage: a,
							primaryText: s,
							subtext: c
						} = e, i = a && a.coins !== a.baselineCoins, d = a && a.pennies !== a.baselinePennies;
						return o.a.createElement(q, {
							buttonClass: t,
							buttonSubtext: r,
							buttonSubtextCrossout: d,
							buttonText: n,
							key: s,
							onClick: a ? () => this.handleClickBuyCoins(a) : this.handleClickBuyPremium,
							primaryText: s,
							subtext: c,
							subtextCrossout: i
						})
					}), r && n && o.a.createElement(q, {
						buttonText: _.fbt._("Convert", null, {
							hk: "zVTTU"
						}),
						onClick: s,
						primaryText: _.fbt._("Convert {community points name}", [_.fbt._param("community points name", n)], {
							hk: "e7BeU"
						}),
						subtext: _.fbt._("into Coins", null, {
							hk: "1XFIa6"
						})
					}))
				}
			}
			var Q = Object(M.t)()(Y(Object(i.c)(J))),
				X = r("./src/reddit/components/CoinPurchaseDropdown/index.m.less"),
				ee = r.n(X);
			const {
				fbt: te
			} = r("./node_modules/fbt/lib/FbtPublic.js"), re = Object(a.a)(d.a);
			class ne extends o.a.Component {
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
						isOpen: r,
						onCloseTooltip: n,
						tooltipId: a
					} = this.props;
					return o.a.createElement(re, {
						className: Object(s.a)(t, ee.a.CoinPurchaseDropdown, {
							[ee.a.activeSale]: !!e
						}),
						isFixed: !0,
						isOpen: r,
						targetPosition: ["center", "bottom"],
						tooltipPosition: ["right", "top"],
						tooltipId: a
					}, o.a.createElement(x, {
						activeSaleConfig: e
					}), o.a.createElement(Q, {
						className: ee.a.purchaseList,
						onClick: n,
						sorted: !0
					}))
				}
			}
			t.default = Object(i.c)(ne)
		},
		"./src/reddit/components/CoinPurchaseDropdownHeader/DefaultHeader/index.m.less": function(e, t, r) {
			e.exports = {
				header: "_2lgyQv1Xe7SzrqkbUeaEFL",
				headerText: "_1CH25li1ODdO2KEOCMjWEj",
				headerLink: "_1lmsw-IaCDAsy3RT_4s5s9"
			}
		},
		"./src/reddit/components/CoinPurchaseDropdownHeader/SalesHeader/index.m.less": function(e, t, r) {
			e.exports = {
				header: "_1mxOXTqB-MrirvDiecjz4Z",
				headerText: "_1eNKe31O3AOBXQgWsPIL4P",
				saleHeaderImage: "_1Vf1tHvNme79A6GR8te6F-"
			}
		},
		"./src/reddit/components/CoinPurchaseDropdownHeader/index.m.less": function(e, t, r) {
			e.exports = {
				header: "_2HB5cXf0bpHe1piH74nOIQ"
			}
		},
		"./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/CompactCoinPurchaseList/index.m.less": function(e, t, r) {
			e.exports = {
				errorContainer: "_3dCfx1TJ9381ixSTRcnyT-",
				loaderContainer: "xqaZPpbD8_8ATMQOxTIB_",
				premiumButtonStyle: "_3271lFh79mcpLNBH_vvl7r",
				freeAwardButton: "_3HU8lJbd8VJ3ixX_QvZ6jF",
				presentAnimation: "_2pcjA77qS9COMCWrQ4OK9c"
			}
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
				o = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = r.n(s);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => o.a.createElement("div", {
				className: Object(a.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				}
			})
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			}));
			var n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/omitHeaders/index.ts"),
				s = r("./src/reddit/constants/headers.ts"),
				c = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				i = r("./src/reddit/endpoints/gold/purchase.ts");
			const d = async ({
				buttonId: e,
				context: t,
				correlationId: r
			}) => {
				const d = {
						button_id: e,
						correlation_id: r
					},
					l = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					u = Object(c.a)(l);
				return Object(o.a)(Object(a.a)(t, [s.a]), {
					method: n.hb.POST,
					endpoint: u,
					data: d
				}).then(i.c)
			}, l = async ({
				context: e,
				coins: t,
				pennies: r,
				correlationId: c
			}) => {
				const d = {
					coins: t,
					pennies: r,
					correlation_id: c
				};
				return Object(o.a)(Object(a.a)(e, [s.a]), {
					method: n.hb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(i.c)
			}, u = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: c,
				correlationId: d
			}) => {
				const l = {
					award_id: t,
					correlation_id: d,
					pennies: r,
					thing_id: c
				};
				return Object(o.a)(Object(a.a)(e, [s.a]), {
					method: n.hb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(i.c)
			}, m = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: c,
				pennies: d,
				correlationId: l
			}) => {
				const u = {
					offer_context: t,
					order_id: r,
					coins: c,
					pennies: d,
					correlation_id: l
				};
				return Object(o.a)(Object(a.a)(e, [s.a]), {
					method: n.hb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: u
				}).then(i.c)
			}, p = async ({
				awardId: e,
				context: t,
				coins: r,
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
					coins: r,
					correlation_id: c,
					is_anonymous: d,
					message: l,
					offer_context: u,
					order_id: m,
					pennies: p,
					thing_id: b
				};
				return Object(o.a)(Object(a.a)(t, [s.a]), {
					method: n.hb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: h
				}).then(i.c)
			}, b = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: c,
				message: d,
				orderId: l,
				thingId: u
			}) => {
				const m = {
					award_id: e,
					correlation_id: r,
					is_anonymous: c,
					message: d,
					order_id: l,
					thing_id: u
				};
				return Object(o.a)(Object(a.a)(t, [s.a]), {
					method: n.hb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: m
				}).then(i.c)
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "j", (function() {
				return s
			})), r.d(t, "i", (function() {
				return c
			})), r.d(t, "h", (function() {
				return i
			})), r.d(t, "l", (function() {
				return d
			})), r.d(t, "k", (function() {
				return l
			})), r.d(t, "m", (function() {
				return u
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "n", (function() {
				return g
			}));
			var n, o = r("./src/config.ts"),
				a = r("./src/reddit/endpoints/governance/requester.ts");

			function s(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "Ethereum Main Network";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}

			function c(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby";
					case n.ArbitrumRinkeby:
						return "https://meta-api.reddit.com/ethereum/ethereum:29199749760514"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function i(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "homestead";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "rinkeby";
					case n.ArbitrumRinkeby:
						return 42161
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}

			function d(e) {
				return e === n.ArbitrumRinkeby ? 5e3 : 3e4
			}
			async function l(e, t, r) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function u(e, t, r) {
				return await Object(a.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function m(e, t, r) {
				return await Object(a.a)(e, {
					method: "delete",
					endpoint: `${o.a.metaUrl}/crypto/${t}/registrations/${r}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.ArbitrumRinkeby = "ethereum:29199749760514", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader"
			}(n || (n = {}));
			const p = (e, t, r) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: r
				}),
				b = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				h = e => ({
					type: "claim",
					subredditId: e
				}),
				f = e => ({
					type: "subscribe",
					subredditId: e
				}),
				O = (e, t, r, n) => ({
					type: "transfer",
					subredditId: e,
					recipient: t,
					recipientAddress: r,
					amount: n
				});
			async function g(e, t) {
				return await Object(a.a)(e, {
					method: "put",
					endpoint: `${o.a.metaUrl}/crypto/ethereum/transaction-intent`,
					data: t
				})
			}
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "e", (function() {
				return s
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return i
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
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
					const r = [];
					for (const n in o) {
						const a = o[n];
						(a.priceInCoins <= e || t) && r.push(a)
					}
					return r
				},
				s = e => n.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [n.fbt._plural(e.monthsOfPremium, "number of months"), n.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				c = "com.reddit.premium_1";
			var i;
			! function(e) {
				e.Monthly = "monthly", e.Yearly = "yearly"
			}(i || (i = {}))
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				o = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/economics/claims/constants.ts")),
				a = r("./src/reddit/actions/economics/me/constants.ts");
			const s = {};
			var c = (e = s, t) => {
					switch (t.type) {
						case a.a: {
							const r = t.payload.claimPoints || {},
								n = Object.keys(r).reduce((t, n) => (t[n] = {
									...e[n],
									availableClaims: r[n]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var r;
								(null === (r = e[t]) || void 0 === r ? void 0 : r.isClaiming) && (n[t] = n[t] || {
									availableClaims: []
								}, n[t].isClaiming = !0)
							}), n
						}
						case o.b:
						case o.a:
							const {
								subredditId: r
							} = t.payload;
							return {
								...e, [r]: {
									...e[r],
									isClaiming: t.type === o.b
								}
							};
						default:
							return e
					}
				},
				i = r("./src/reddit/actions/governance/constants.ts");
			const d = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function u(e) {
				var t, r, n, o, a;
				const s = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					c = null == s ? void 0 : s.contracts,
					i = null == c ? void 0 : c.unlocked,
					d = null !== (n = null === (r = e.walletProvider) || void 0 === r ? void 0 : r.provider) && void 0 !== n ? n : e.provider,
					u = !!(null === (o = e.walletProvider) || void 0 === o ? void 0 : o.inTransition),
					m = (null == i ? void 0 : i.decimals) || 0,
					p = "1" + "0".repeat(m);
				return {
					blockchainProvider: d,
					contractAddress: (null == i ? void 0 : i.address) || "",
					contracts: c,
					decimals: m,
					displayConversion: p,
					images: e.images || l,
					inTransition: u,
					name: e.name,
					nomenclature: null === (a = e.extra) || void 0 === a ? void 0 : a.nomenclature,
					polls: e.polls,
					symbol: (null == i ? void 0 : i.token) || ""
				}
			}
			var m = (e = d, t) => {
				switch (t.type) {
					case i.a: {
						const {
							subredditId: r,
							meta: n
						} = t.payload;
						return {
							...e,
							[r]: u(n)
						}
					}
					default:
						return e
				}
			};
			const p = {};
			var b = (e = p, t) => {
				switch (t.type) {
					case i.n: {
						const {
							subredditId: r,
							wallets: n
						} = t.payload, o = Object.keys(n).reduce((t, o) => {
							return {
								...t,
								[o]: {
									...e[o] || {},
									[r]: n[o]
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
			t.a = Object(n.c)({
				claims: c,
				points: m,
				publicWallets: b
			})
		},
		"./src/reddit/selectors/crypto/points.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			}));
			var n = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/reddit/contexts/PageLayer/index.tsx"),
				a = r("./src/reddit/endpoints/governance/crypto.ts"),
				s = r("./src/lib/initializeClient/installReducer.ts"),
				c = r("./src/reddit/reducers/features/crypto/index.ts");
			Object(s.a)({
				features: {
					crypto: c.a
				}
			});
			const i = (e, t) => {
				var r, n, o;
				return t ? null === (o = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === n ? void 0 : n.points) || void 0 === o ? void 0 : o[t] : void 0
			};

			function d() {
				const e = Object(o.bb)(),
					t = Object(n.e)(t => Object(o.q)(t, {
						pageLayer: e
					})),
					r = Object(n.e)(e => i(e, null == t ? void 0 : t.id));
				return {
					subreddit: t,
					pointsDetails: r
				}
			}
			const l = (e, t) => {
				var r;
				const n = null === (r = i(e, t)) || void 0 === r ? void 0 : r.blockchainProvider;
				return n === a.a.Ethereum || n === a.a.Rinkeby || n === a.a.EthTraderEthereum || n === a.a.EthTraderRinkeby || n === a.a.ArbitrumRinkeby
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CoinPurchaseDropdown.28f03c914fb2661a092f.js.map