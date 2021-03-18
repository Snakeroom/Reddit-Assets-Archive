// https://www.redditstatic.com/desktop2x/reddit-components-CoinPurchaseDropdown.bde4bb2bc5df63064cad.js
// Retrieved at 3/18/2021, 4:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CoinPurchaseDropdown", "GoldPurchasePaymentActions"], {
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return _
			})), r.d(t, "a", (function() {
				return k
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "j", (function() {
				return T
			})), r.d(t, "i", (function() {
				return S
			})), r.d(t, "f", (function() {
				return N
			})), r.d(t, "g", (function() {
				return M
			})), r.d(t, "h", (function() {
				return L
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/formatApiError/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/constants/modals.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				b = r("./src/reddit/endpoints/gold/purchase.ts"),
				p = r("./src/reddit/helpers/correlationIdTracker.ts"),
				h = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				f = r("./src/reddit/models/Gold/Award.ts"),
				g = r("./src/reddit/models/Gold/ProductOffer.ts"),
				O = r("./src/reddit/models/Toast/index.ts"),
				y = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				C = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				x = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const j = Object(a.a)(x.q),
				w = Object(a.a)(x.c),
				_ = e => async (t, r) => {
					t(j(e)), t(Object(l.h)(i.a.ECON_COIN_PURCHASE))
				}, k = () => async (e, t) => {
					e(w()), e(Object(l.g)(i.a.ECON_COIN_PURCHASE))
				}, P = Object(a.a)(x.u), v = ({
					correlationId: e,
					packageId: t
				}) => async (r, n) => {
					const o = n();
					Object(y.e)(o, t) ? (r(P({
						correlationId: e,
						packageId: t
					})), r(Object(l.i)(i.a.GOLD_TARGETED_OFFER_MODAL))) : s.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${t}`)
				}, E = Object(a.a)(x.p), I = ({
					correlationId: e,
					packageId: t
				}) => async (r, n) => {
					Object(y.c)(n(), t) ? (r(E({
						correlationId: e,
						packageId: t
					})), r(Object(l.i)(i.a.ECON_COIN_PACKAGE_OFFER))) : s.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${t}`)
				}, A = (e, t, r) => async (o, a) => {
					await o(Object(d.c)(e, r));
					const s = a(),
						i = Object(y.m)(s);
					if (0 !== i.length) o(_({
						correlationId: r,
						packageId: i[0].mobileId,
						thingId: t
					}));
					else {
						const e = Object(y.j)(s),
							t = n.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						o(Object(u.f)({
							kind: O.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, T = (e, t) => async (r, a, {
					apiContext: s
				}) => {
					const i = a(),
						{
							coins: d,
							pennies: l
						} = t,
						u = Object(C.q)(i) || Object(p.d)(p.a.GoldPayment, !1);
					let m, h;
					r(Object(c.stripeTokenPending)());
					const f = Object(C.x)(i);
					if (f || (m = await r(Object(c.validateAndCreateStripeToken)(e)), h = Object(C.u)(i), m)) try {
						const e = await Object(b.e)({
							coins: d,
							context: s(),
							correlationId: u,
							offerContext: Object(g.c)(t, !1),
							pennies: l,
							rememberCard: h,
							savedCardId: f || void 0,
							token: m
						});
						if (e.error) {
							const t = Object(o.a)(e.error, e.status);
							return void r(Object(c.stripeApiError)(t))
						}
						return r(Object(c.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(p.b)(p.a.GoldPayment)
					} catch (O) {
						const e = Object(o.a)(O);
						r(Object(c.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						r(Object(c.stripeApiError)(e))
					}
				}, S = (e, t, a) => async (s, i, {
					apiContext: d
				}) => {
					const l = i(),
						{
							coins: u,
							pennies: m
						} = t,
						O = Object(C.q)(l) || Object(p.d)(p.a.GoldPayment, !1);
					let y, x;
					s(Object(c.stripeTokenPending)());
					const j = Object(C.x)(l);
					if (j || (y = await s(Object(c.validateAndCreateStripeToken)(e)), x = Object(C.u)(l), y)) try {
						const {
							gildModalThingId: e,
							isAnonymous: i,
							message: C,
							selectedAward: w
						} = l.gild;
						if (!e || !w.id) {
							const e = n.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void s(Object(c.stripeApiError)(e))
						}
						const _ = w.id,
							P = {
								gildType: _,
								isAnonymous: i,
								message: C
							},
							v = await Object(b.d)({
								coins: u,
								context: d(),
								correlationId: O,
								gildParams: P,
								isOldReddit: a,
								offerContext: Object(g.c)(t, !0),
								pennies: m,
								rememberCard: x,
								savedCardId: j || void 0,
								thingId: e,
								token: y
							});
						if (v.error) {
							const e = Object(o.a)(v.error, v.status);
							return void s(Object(c.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							s(k()), s(Object(c.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: n,
								all_awardings: o,
								coins: a,
								treatment_tags: i
							} = v.body;
							return s(t({
								awardKarmaReceived: n || 0,
								awardId: _,
								awardings: o && o.length ? Object(h.a)(o).map(e => ({
									award: Object(f.h)(e),
									total: e.count
								})) : [],
								coins: a,
								id: e,
								treatmentTags: i
							})), void Object(p.b)(p.a.GoldPayment)
						}
					} catch (w) {
						const e = Object(o.a)(w);
						s(Object(c.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						s(Object(c.stripeApiError)(e))
					}
				}, N = e => async (t, r, {
					apiContext: n
				}) => {
					const a = Object(p.c)(p.a.GoldPayment),
						{
							coins: i,
							pennies: d
						} = e;
					try {
						const e = await Object(m.a)({
							context: n(),
							coins: i,
							pennies: d,
							correlationId: a
						});
						if (e.error) {
							const r = Object(o.a)(e.error);
							return void t(Object(c.paypalApiError)(r))
						} {
							const {
								order_id: t
							} = e.body;
							return t
						}
					} catch (l) {
						s.c.captureException(l);
						const e = Object(o.a)(l);
						t(Object(c.paypalApiError)(e))
					}
				}, M = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const i = n(),
						d = Object(C.q)(i) || Object(p.d)(p.a.GoldPayment, !1),
						{
							coins: l,
							pennies: u
						} = t;
					try {
						const n = await Object(m.c)({
							context: a(),
							offerContext: Object(g.c)(t, !1),
							orderId: e,
							coins: l,
							pennies: u,
							correlationId: d
						});
						if (n.error) {
							const e = Object(o.a)(n.error);
							return void r(Object(c.paypalApiError)(e))
						} {
							const {
								coins: e
							} = n.body;
							r(Object(c.paymentCompleted)({
								coins: e,
								confirmed: !0
							})), Object(p.b)(p.a.GoldPayment)
						}
					} catch (b) {
						s.c.captureException(b);
						const e = Object(o.a)(b);
						r(Object(c.paypalApiError)(e))
					}
				}, L = (e, t) => async (a, i, {
					apiContext: d
				}) => {
					const l = i(),
						u = Object(C.q)(l) || Object(p.d)(p.a.GoldPayment, !1),
						{
							coins: b,
							pennies: O
						} = t;
					try {
						const {
							gildModalThingId: s,
							isAnonymous: i,
							message: y,
							selectedAward: C
						} = l.gild;
						if (!s || !C) return void a(Object(c.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const x = C.id,
							j = await Object(m.d)({
								context: d(),
								offerContext: Object(g.c)(t, !0),
								orderId: e,
								coins: b,
								pennies: O,
								thingId: s,
								awardId: x,
								message: y || "",
								isAnonymous: i,
								correlationId: u
							});
						if (j.error) {
							const e = Object(o.a)(j.error);
							a(Object(c.paypalApiError)(e))
						} else {
							a(k());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: n,
								subreddit_coins: o,
								treatment_tags: i
							} = j.body;
							a(Object(c.paymentCompleted)({
								coins: n,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							a(d({
								awardId: x,
								awardKarmaReceived: t || 0,
								awardings: Object(h.a)(e).map(e => ({
									award: Object(f.h)(e),
									total: e.count
								})),
								coins: n,
								id: s,
								subredditCoins: o,
								treatmentTags: i
							})), Object(p.b)(p.a.GoldPayment)
						}
					} catch (y) {
						s.c.captureException(y);
						const e = Object(o.a)(y);
						a(Object(c.paypalApiError)(e))
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
			})), r.d(t, "cardNameEmpty", (function() {
				return m
			})), r.d(t, "cardElementChange", (function() {
				return b
			})), r.d(t, "stripeTokenPending", (function() {
				return p
			})), r.d(t, "stripeTokenError", (function() {
				return h
			})), r.d(t, "stripeApiError", (function() {
				return f
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return g
			})), r.d(t, "paypalApiError", (function() {
				return O
			})), r.d(t, "toggleRememberCard", (function() {
				return y
			})), r.d(t, "selectSavedCard", (function() {
				return C
			})), r.d(t, "_deleteSavedCard", (function() {
				return x
			})), r.d(t, "deleteSavedCard", (function() {
				return j
			})), r.d(t, "savedCardsPending", (function() {
				return w
			})), r.d(t, "savedCardsSuccess", (function() {
				return _
			})), r.d(t, "loadSavedCards", (function() {
				return k
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/sentry/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/endpoints/gold/purchase.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(a.a)(i.A),
				l = Object(a.a)(i.w),
				u = Object(a.a)(i.b),
				m = Object(a.a)(i.a),
				b = Object(a.a)(i.D),
				p = Object(a.a)(i.F),
				h = Object(a.a)(i.E),
				f = Object(a.a)(i.C),
				g = e => async (t, r) => {
					const o = r(),
						a = Object(c.h)(o),
						{
							token: s,
							error: i
						} = await e.createToken({
							name: a
						});
					if (a.trim()) {
						if (!i && s) return s;
						t(h(i || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(m({
							message: e
						}))
					}
				}, O = Object(a.a)(i.x), y = Object(a.a)(i.G), C = Object(a.a)(i.B), x = Object(a.a)(i.g), j = e => async (t, r, {
					apiContext: n
				}) => {
					t(x(e));
					try {
						const t = await Object(s.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (a) {
						o.c.captureException(a)
					}
				}, w = Object(a.a)(i.y), _ = Object(a.a)(i.z), k = () => async (e, t, {
					apiContext: r
				}) => {
					e(w());
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
						e(_(n)), n[0] && e(C(n[0].cardId))
					} catch (n) {
						o.c.captureException(n), e(_([]))
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
				return g
			})), r.d(t, "paymentBlobCreated", (function() {
				return O
			})), r.d(t, "openWithBlob", (function() {
				return y
			}));
			var n = r("./src/config.ts"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				i = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/formatApiError/index.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				u = r("./src/reddit/endpoints/gold/purchase.ts"),
				m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				b = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				p = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const h = Object(a.a)(p.t),
				f = Object(a.a)(p.e),
				g = e => async (t, r, {
					apiContext: n
				}) => {
					const a = Object(b.a)(r()),
						s = (null == a ? void 0 : a.pennies) || i.pb,
						l = Object(m.c)(m.a.GoldPayment);
					t(Object(d.stripeTokenPending)());
					const p = await t(Object(d.validateAndCreateStripeToken)(e));
					if (p) try {
						const e = await Object(u.g)({
							context: n(),
							correlationId: l,
							pennies: s,
							token: p
						});
						if (e.error) {
							const r = Object(c.a)(e.error);
							t(Object(d.stripeApiError)(r))
						} else t(Object(d.paymentCompleted)({
							confirmed: !1
						}))
					} catch (h) {
						const e = Object(c.a)(h);
						t(Object(d.stripeApiError)(e))
					} else {
						const e = o.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						t(Object(d.stripeApiError)(e))
					}
				}, O = Object(a.a)(p.v), y = ({
					packageId: e,
					correlationId: t
				}) => async (r, o, {
					apiContext: a
				}) => {
					r(h({
						packageId: e,
						correlationId: t
					}));
					const i = Object(b.a)(o()),
						u = (null == i ? void 0 : i.paypalButtonId) || n.a.paypal.buttons.premium;
					if (u) try {
						const e = await Object(l.f)({
							buttonId: u,
							context: a(),
							correlationId: t
						});
						if (e.error) {
							const t = Object(c.a)(e.error);
							r(Object(d.paypalApiError)(t))
						} else r(O(e))
					} catch (m) {
						const e = Object(c.a)(m);
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
				return j
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/env/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/endpoints/gold/productCatalog.ts"),
				c = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/actions/post.ts"),
				m = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const b = Object(a.a)(m.j),
				p = Object(a.a)(m.k),
				h = Object(a.a)(m.i),
				f = e => async (t, r, {
					apiContext: a
				}) => {
					t(b());
					const d = r(),
						l = Object(c.J)(d);
					try {
						const r = !l,
							n = await Object(i.b)({
								context: a(),
								correlationId: e,
								shouldUseCurrentOrigin: r
							});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const o = n.body;
						t(p(o))
					} catch (u) {
						Object(o.b)() || console.error(u), s.c.captureException(u);
						const e = n.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(h(e))
					}
				}, g = Object(a.a)(m.m), O = Object(a.a)(m.n), y = Object(a.a)(m.l), C = (e, t) => async (r, a, {
					apiContext: c
				}) => {
					r(g());
					try {
						const n = await Object(i.c)({
							awardId: e,
							context: c(),
							correlationId: t
						});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const o = n.body;
						if (!o.coinPackages || !o.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						r(O(o))
					} catch (d) {
						Object(o.b)() || console.error(d), s.c.captureException(d);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(y(e))
					}
				}, x = Object(a.a)(m.h), j = () => async (e, t, {
					gqlContext: r
				}) => {
					var a, c;
					try {
						const t = await Object(i.a)(r());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (a = r.errors) || void 0 === a ? void 0 : a.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (c = r.awards) || void 0 === c ? void 0 : c.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(x({
								awards: r.awards
							})), e(Object(u.w)())
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
				i = r("./src/reddit/models/Gold/ProductOffer.ts"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/controls/Dropdown/index.tsx"),
				l = r("./src/reddit/helpers/trackers/goldTopNav.ts"),
				u = r("./src/reddit/components/CoinPurchaseDropdownHeader/index.m.less"),
				m = r.n(u),
				b = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				p = r("./src/reddit/components/CoinPurchaseDropdownHeader/DefaultHeader/index.m.less"),
				h = r.n(p);
			const {
				fbt: f
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var g = e => {
					const {
						className: t
					} = e;
					return o.a.createElement("div", {
						className: Object(s.a)(t, h.a.header)
					}, o.a.createElement("span", {
						className: h.a.headerText
					}, f._("Give Gold, Silver, Platinum, and more with Coins", null, {
						hk: "3MfKV4"
					})), o.a.createElement(b.a, {
						className: h.a.headerLink,
						to: "/coins"
					}, f._("What are Coins?", null, {
						hk: "DNBPx"
					})))
				},
				O = r("./src/reddit/components/CoinPurchaseDropdownHeader/SalesHeader/index.m.less"),
				y = r.n(O);
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
				fbt: x
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var j = e => {
					const {
						activeSaleConfig: t
					} = e;
					return t ? o.a.createElement(C, {
						className: m.a.header,
						salesConfig: t
					}) : o.a.createElement(g, {
						className: m.a.header
					})
				},
				w = r("./node_modules/fbt/lib/FbtPublic.js"),
				_ = r("./node_modules/react-redux/es/index.js"),
				k = r("./node_modules/reselect/es/index.js"),
				P = r("./src/lib/constants/index.ts"),
				v = r("./src/lib/opener/index.ts"),
				E = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				I = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				A = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				T = r("./src/reddit/actions/modal.ts"),
				S = r("./src/reddit/constants/modals.ts"),
				N = r("./src/reddit/contexts/PageLayer/index.tsx"),
				M = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				L = r("./src/reddit/featureFlags/index.ts"),
				R = r("./src/reddit/helpers/correlationIdTracker.ts"),
				D = r("./src/reddit/models/Gold/Premium/index.ts"),
				F = r("./src/reddit/selectors/experiments/econStorefrontClaim.ts"),
				H = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				U = r("./src/reddit/selectors/gov.ts"),
				G = r("./src/reddit/selectors/user.ts"),
				B = r("./src/reddit/components/LottieAnimation/index.tsx"),
				q = r("./src/reddit/controls/Button/index.tsx"),
				$ = r("./src/reddit/components/CompactCoinPurchaseList/ListItem/index.m.less"),
				z = r.n($);
			var K = e => {
					const {
						className: t,
						buttonClass: r,
						buttonSubtext: n,
						buttonSubtextCrossout: a,
						buttonText: i,
						icon: c,
						onClick: d,
						primaryText: l,
						subtext: u,
						subtextCrossout: m
					} = e, b = r ? q.f : q.i;
					return o.a.createElement("div", {
						className: Object(s.a)(t, z.a.CompactCoinPurchaseListItem)
					}, o.a.createElement("div", {
						className: z.a.productSection
					}, c, o.a.createElement("div", null, o.a.createElement("span", {
						className: z.a.primaryText
					}, l), u && o.a.createElement("span", {
						className: Object(s.a)(z.a.subtext, {
							[z.a.crossout]: m
						})
					}, Array.isArray(u) ? u.map((e, t) => o.a.createElement("p", {
						key: t
					}, e)) : u))), o.a.createElement("div", {
						className: z.a.priceSection
					}, o.a.createElement(b, {
						className: Object(s.a)(z.a.button, r),
						redditStyle: !0,
						onClick: d
					}, i), o.a.createElement("span", {
						className: Object(s.a)(z.a.buttonSubtext, {
							[z.a.crossout]: a
						})
					}, n)))
				},
				W = r("./src/reddit/components/CompactCoinPurchaseList/index.m.less"),
				V = r.n(W);
			const Z = Object(k.c)({
					coinPackages: H.d,
					communityPointsConversionEnabled: L.d.spPointsCoinConversion,
					communityPointsName: (e, t) => {
						const r = Object(N.q)(e, t);
						return Object(U.n)(e, {
							subredditId: null == r ? void 0 : r.id
						})
					},
					isFreeAwardEventEnabled: e => Object(F.a)(e) && Object(H.g)(e),
					isPremiumSubscriber: G.s,
					premiumPackages: H.i,
					purchaseCatalogError: H.j,
					purchaseCatalogPending: H.k
				}),
				Y = Object(_.b)(Z, e => ({
					onClickClaimFreeAward: () => e(Object(T.h)(S.a.ECON_CLAIM_FREE_AWARD_MODAL)),
					onClickCoinPackage: (t, r) => e(Object(E.c)({
						correlationId: r,
						packageId: t.mobileId
					})),
					onClickConvert: () => e(Object(T.h)(S.a.CONVERT_TO_COINS)),
					onClickPremiumPackage: (t, r) => r ? e(Object(I.openWithBlob)({
						packageId: D.b,
						correlationId: t
					})) : Object(v.d)("/premium", v.c.BLANK),
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
						const a = (null === (e = null == n ? void 0 : n.meta) || void 0 === e ? void 0 : e.name) === P.Db.PREMIUM;
						r(this.correlationId, a)
					}, this.handleClickFreeAward = () => {
						const {
							onClickClaimFreeAward: e,
							sendEvent: t
						} = this.props;
						t(l.b()), e()
					}, this.correlationId = Object(R.d)(R.a.GoldPayment, !1), e.coinPackages.length || e.purchaseCatalogPending || e.requestPurchaseCatalog(this.correlationId)
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
						} = e, s = n.toLocaleString(), i = w.fbt._("{number of coins} Coins", [w.fbt._param("number of coins", s)], {
							hk: "1bO7gz"
						}), c = `$${o/100}`;
						let d, l;
						if (n !== t) {
							const e = t.toLocaleString();
							d = w.fbt._("{number of coins of non-sale package} coins", [w.fbt._param("number of coins of non-sale package", e)], {
								hk: "afkY9"
							})
						}
						return {
							buttonSubtext: l = o !== r ? `$${r/100}` : a ? w.fbt._("{percent bonus}% Bonus", [w.fbt._param("percent bonus", a.toLocaleString())], {
								hk: "2zgjZ1"
							}) : void 0,
							buttonText: c,
							coinPackage: e,
							primaryText: i,
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
						signupBonusCoins: i
					} = a, c = i ? i.toLocaleString() : void 0, d = s.toLocaleString(), l = {
						buttonClass: V.a.premiumButtonStyle,
						buttonSubtext: c ? w.fbt._("{number of bonus coins} bonus coins", [w.fbt._param("number of bonus coins", c)], {
							hk: "YgHAT"
						}) : void 0,
						buttonText: w.fbt._("Upgrade", null, {
							hk: "1tsWOd"
						}),
						primaryText: w.fbt._("Premium", null, {
							hk: "45A9gK"
						}),
						subtext: [w.fbt._("{monthly coins} coins/mo", [w.fbt._param("monthly coins", d)], {
							hk: "2hVTon"
						}), w.fbt._("Ads free & more", null, {
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
						purchaseCatalogError: i,
						purchaseCatalogPending: c
					} = this.props;
					return c ? o.a.createElement("div", {
						className: e
					}, o.a.createElement("div", {
						className: V.a.loaderContainer
					}, o.a.createElement(M.a, {
						sizePx: 80
					}))) : i || !t.length ? o.a.createElement("div", {
						className: e
					}, o.a.createElement("div", {
						className: V.a.errorContainer
					}, w.fbt._("Oops, something went wrong", null, {
						hk: "4EQRS8"
					}))) : o.a.createElement("div", {
						className: e
					}, a && o.a.createElement(K, {
						buttonClass: V.a.freeAwardButton,
						buttonText: w.fbt._("Claim", null, {
							hk: "OUYUl"
						}),
						icon: o.a.createElement(B.a, {
							assetUrl: "https://www.redditstatic.com/gold/awards/animations/free_award/flying.json",
							className: V.a.presentAnimation,
							loop: !0,
							onClick: this.handleClickFreeAward
						}),
						onClick: this.handleClickFreeAward,
						primaryText: w.fbt._("Free Award to give out", null, {
							hk: "2NBLhF"
						})
					}), this.getListItemData().map(e => {
						const {
							buttonClass: t,
							buttonSubtext: r,
							buttonText: n,
							coinPackage: a,
							primaryText: s,
							subtext: i
						} = e, c = a && a.coins !== a.baselineCoins, d = a && a.pennies !== a.baselinePennies;
						return o.a.createElement(K, {
							buttonClass: t,
							buttonSubtext: r,
							buttonSubtextCrossout: d,
							buttonText: n,
							key: s,
							onClick: a ? () => this.handleClickBuyCoins(a) : this.handleClickBuyPremium,
							primaryText: s,
							subtext: i,
							subtextCrossout: c
						})
					}), r && o.a.createElement(K, {
						buttonText: w.fbt._("Convert", null, {
							hk: "zVTTU"
						}),
						onClick: s,
						primaryText: w.fbt._("Convert {community points name}", [w.fbt._param("community points name", n)], {
							hk: "e7BeU"
						}),
						subtext: w.fbt._("into Coins", null, {
							hk: "1XFIa6"
						})
					}))
				}
			}
			var Q = Object(N.t)()(Y(Object(c.c)(J))),
				X = r("./src/reddit/components/CoinPurchaseDropdown/index.m.less"),
				ee = r.n(X);
			const {
				fbt: te
			} = r("./node_modules/fbt/lib/FbtPublic.js"), re = Object(a.a)(d.a);
			class ne extends o.a.Component {
				constructor() {
					super(...arguments), this.timer = void 0, this.getOfferContext = () => this.props.activeSaleConfig ? i.a.CoinSale : this.props.isFreeAwardEventEnabled ? i.a.StorefrontFreeAward : void 0, this.handleMouseEnter = () => {
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
					}, o.a.createElement(j, {
						activeSaleConfig: e
					}), o.a.createElement(Q, {
						className: ee.a.purchaseList,
						onClick: n,
						sorted: !0
					}))
				}
			}
			t.default = Object(c.c)(ne)
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
		"./src/reddit/components/LottieAnimation/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/lottie-web/build/player/lottie.js"),
				o = r.n(n),
				a = r("./node_modules/react/index.js"),
				s = r.n(a),
				i = r("./src/reddit/components/LottieAnimation/util.ts");
			const c = s.a.memo(e => {
				const t = s.a.createRef(),
					{
						assetData: r,
						assetUrl: n,
						className: c,
						hidden: d,
						loop: l,
						onClick: u,
						prefersReducedAnimation: m
					} = e,
					[b, p] = Object(a.useState)(r);
				Object(a.useEffect)(() => {
					n ? Object(i.a)(n).then(p) : r && p(r)
				}, [n, r]);
				const [h, f] = Object(a.useState)(null);
				Object(a.useEffect)(() => {
					const e = t.current;
					if (!e || 0 !== e.childElementCount || h || !b) return;
					const r = o.a.loadAnimation({
						autoplay: !1,
						loop: l,
						container: e,
						animationData: b
					});
					f(r)
				}, [l, t, h, b]), Object(a.useEffect)(() => {
					if (h)
						if (d) h.stop();
						else if (m) {
						const e = h.getDuration(!0);
						h.goToAndPlay(e, !0)
					} else h.goToAndPlay(0)
				}, [d, m, h]);
				const g = Object(a.useCallback)(() => {
					h && h.goToAndPlay(0)
				}, [h]);
				return s.a.createElement("div", {
					className: c,
					style: {
						display: d ? "none" : "block"
					},
					ref: t,
					onClick: u || g
				})
			});
			t.a = c
		},
		"./src/reddit/components/LottieAnimation/util.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			r("./src/reddit/components/ImageWithFallback/index.tsx");
			const n = {};

			function o(e) {
				let t = n[e];
				return t || (t = n[e] = fetch(e, {
					mode: "cors",
					cache: "force-cache"
				}).then(t => (t.ok || function(e) {
					throw new Error(`Unable to download effect asset "${e}"`)
				}(e), t.json()))), t
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
				i = r.n(s);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => o.a.createElement("div", {
				className: Object(a.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
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
				return b
			})), r.d(t, "e", (function() {
				return p
			}));
			var n = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/omitHeaders/index.ts"),
				s = r("./src/reddit/constants/headers.ts"),
				i = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = r("./src/reddit/endpoints/gold/purchase.ts");
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
					u = Object(i.a)(l);
				return Object(o.a)(Object(a.a)(t, [s.a]), {
					method: n.cb.POST,
					endpoint: u,
					data: d
				}).then(c.c)
			}, l = async ({
				context: e,
				coins: t,
				pennies: r,
				correlationId: i
			}) => {
				const d = {
					coins: t,
					pennies: r,
					correlation_id: i
				};
				return Object(o.a)(Object(a.a)(e, [s.a]), {
					method: n.cb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(c.c)
			}, u = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: i,
				correlationId: d
			}) => {
				const l = {
					award_id: t,
					correlation_id: d,
					pennies: r,
					thing_id: i
				};
				return Object(o.a)(Object(a.a)(e, [s.a]), {
					method: n.cb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(c.c)
			}, m = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: i,
				pennies: d,
				correlationId: l
			}) => {
				const u = {
					offer_context: t,
					order_id: r,
					coins: i,
					pennies: d,
					correlation_id: l
				};
				return Object(o.a)(Object(a.a)(e, [s.a]), {
					method: n.cb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: u
				}).then(c.c)
			}, b = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: i,
				isAnonymous: d,
				message: l,
				offerContext: u,
				orderId: m,
				pennies: b,
				thingId: p
			}) => {
				const h = {
					award_id: e,
					coins: r,
					correlation_id: i,
					is_anonymous: d,
					message: l,
					offer_context: u,
					order_id: m,
					pennies: b,
					thing_id: p
				};
				return Object(o.a)(Object(a.a)(t, [s.a]), {
					method: n.cb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: h
				}).then(c.c)
			}, p = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: i,
				message: d,
				orderId: l,
				thingId: u
			}) => {
				const m = {
					award_id: e,
					correlation_id: r,
					is_anonymous: i,
					message: d,
					order_id: l,
					thing_id: u
				};
				return Object(o.a)(Object(a.a)(t, [s.a]), {
					method: n.cb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: m
				}).then(c.c)
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "j", (function() {
				return s
			})), r.d(t, "i", (function() {
				return i
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "k", (function() {
				return d
			})), r.d(t, "l", (function() {
				return l
			})), r.d(t, "g", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "m", (function() {
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

			function i(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "https://meta-api.reddit.com/ethereum/ethereum";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "https://meta-api.reddit.com/ethereum/rinkeby"
				}
				throw new Error(`No JSON RPC url for provider: ${e}`)
			}

			function c(e) {
				switch (e) {
					case n.Ethereum:
					case n.EthTraderEthereum:
						return "homestead";
					case n.Rinkeby:
					case n.EthTraderRinkeby:
						return "rinkeby"
				}
				throw new Error(`No ethereum network for provider: ${e}`)
			}
			async function d(e, t, r) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/crypto/${t}/challenges`,
					data: {
						challengeType: "registration-challenge-EIP712",
						address: r
					}
				})
			}
			async function l(e, t, r) {
				return await Object(a.a)(e, {
					method: "post",
					endpoint: `${o.a.metaUrl}/crypto/${t}/registrations`,
					data: r
				})
			}
			async function u(e, t, r) {
				return await Object(a.a)(e, {
					method: "delete",
					endpoint: `${o.a.metaUrl}/crypto/${t}/registrations/${r}`
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.EthTraderEthereum = "ethereum:1:ethtrader", e.EthTraderRinkeby = "ethereum:4:ethtrader", e.Stellar = "stellar"
			}(n || (n = {}));
			const m = (e, t, r) => ({
					type: "burn-link",
					subredditId: e,
					amount: t,
					burnMemo: r
				}),
				b = e => ({
					type: "convert-to-coins",
					subredditId: e
				}),
				p = e => ({
					type: "claim",
					subredditId: e
				}),
				h = e => ({
					type: "subscribe",
					subredditId: e
				}),
				f = (e, t, r, n) => ({
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
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "f", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "d", (function() {
				return d
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
				i = [{
					prompt: () => n.fbt._("What is a Reddit Premium Membership?", null, {
						hk: "3ibd7e"
					}),
					answer: () => n.fbt._("Reddit Premium is our subscription membership program, and it directly supports Reddit and the communities that it hosts. It offers an entirely ads-free Reddit experience as well as other benefits, including monthly Coins and access to the exclusive r/lounge community.", null, {
						hk: "22tBeJ"
					})
				}, {
					prompt: () => n.fbt._("Why change the name to Premium? What happened to calling it Gold?", null, {
						hk: "buZNC"
					}),
					answer: () => n.fbt._("The membership has a new name for a good reason. Many people confused the subscription Reddit Gold membership with a virtual good or coin. To make things easier to understand, we’ve renamed the membership to “Reddit Premium”, while the virtual good is called “Coins”. We have kept your favorite features and added more.", null, {
						hk: "2CCKCo"
					})
				}, {
					prompt: () => n.fbt._("What if I was subscribed to the old Gold Membership program?", null, {
						hk: "2Mv367"
					}),
					answer: () => n.fbt._("Fine people everywhere with a Gold Membership are now members of Reddit Premium. It still offers the same great ads-free browsing experience and access to r/lounge, but now you will also receive Coins monthly so you can award exceptional contributions.", null, {
						hk: "IQrwR"
					})
				}, {
					prompt: () => n.fbt._("The Premium membership gives me Coins, what are those for?", null, {
						hk: "4FMg0V"
					}),
					answer: () => n.fbt._("Coins are a virtual good, and you can use them to award exceptional posts or comments with a Silver, Gold, or Platinum Award. This is a way to show appreciation for an exceptional contribution to Reddit, and can also grant the recipient special bonus benefits. You can award someone by clicking on “Give Award” below a post or comment.", null, {
						hk: "46r7Aq"
					})
				}, {
					prompt: () => n.fbt._("Do I have to subscribe to Reddit Premium to get Coins?", null, {
						hk: "boE6i"
					}),
					answer: () => n.fbt._("Monthly Coins are a great benefit for being a Premium member, but if you wish you can also buy individual quantities of Coins. Additionally, you will receive Coins if you are awarded Gold or Platinum.", null, {
						hk: "36zEKr"
					})
				}],
				c = "com.reddit.premium_1";
			var d;
			! function(e) {
				e.Monthly = "monthly", e.Yearly = "yearly"
			}(d || (d = {}))
		},
		"./src/reddit/selectors/gov.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "q", (function() {
				return b
			})), r.d(t, "h", (function() {
				return p
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "n", (function() {
				return f
			})), r.d(t, "o", (function() {
				return g
			})), r.d(t, "m", (function() {
				return O
			})), r.d(t, "k", (function() {
				return C
			})), r.d(t, "r", (function() {
				return x
			})), r.d(t, "a", (function() {
				return j
			})), r.d(t, "f", (function() {
				return w
			})), r.d(t, "p", (function() {
				return _
			})), r.d(t, "l", (function() {
				return k
			})), r.d(t, "j", (function() {
				return P
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				o = r("./src/reddit/endpoints/governance/crypto.ts");
			const a = [],
				s = {},
				i = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				c = (e, {
					subredditId: t
				}) => {
					const r = x(e, {
						subredditId: t
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.harberger ? r.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				d = (e, t) => {
					const r = y(e, t);
					if (r) return r.mainHeader
				},
				l = (e, t) => {
					const r = y(e, t);
					return r && r.mainHeader ? r.mainHeader.price : "0"
				},
				u = (e, t) => {
					const r = y(e, t);
					return r && r.mainHeader ? {
						owner: r.mainHeader.owner,
						ownerId: r.mainHeader.ownerId
					} : s
				},
				m = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				b = (e, t) => {
					const r = m(e, t),
						n = r && r.publicAddress;
					if (!n) throw new Error("No wallet address found");
					return n
				},
				p = (e, t) => {
					const r = m(e, t);
					return r && r.amount || "0"
				},
				h = (e, t) => {
					const r = Object(n.m)(e, t);
					return r && e.subreddits.gov.releaseNotes[r] || a
				},
				f = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				g = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || i,
				O = (e, t) => {
					const r = _(e, t);
					return r && r.decimals ? "1" + "0".repeat(r.decimals) : "1"
				},
				y = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				C = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				x = (e, t) => {
					const r = C(e, t);
					return r && r.walletProvider
				},
				j = (e, t) => {
					const r = x(e, t),
						n = C(e, t);
					return r && r.provider || n && n.provider
				},
				w = (e, t) => {
					const r = j(e, t);
					return r === o.a.Ethereum || r === o.a.Rinkeby || r === o.a.EthTraderEthereum || r === o.a.EthTraderRinkeby
				},
				_ = (e, t) => {
					const r = x(e, t),
						n = j(e, t);
					if (r && !r.inTransition && n === o.a.Stellar) return {
						address: r.extra && r.extra.issuerAddress || "",
						decimals: r.extra && r.extra.decimals || 7,
						symbol: r.extra && r.extra.token || "PHOTON"
					};
					const a = r && r.extra && r.extra.contracts,
						s = a && a.unlocked;
					return s && {
						address: s.address,
						symbol: s.token || "",
						decimals: s.decimals || 18,
						image: s.image
					}
				},
				k = (e, {
					subredditId: t
				}) => {
					const r = x(e, {
						subredditId: t
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				P = (e, t) => {
					const r = C(e, t);
					return !!r && !!r.walletProvider && !r.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CoinPurchaseDropdown.bde4bb2bc5df63064cad.js.map