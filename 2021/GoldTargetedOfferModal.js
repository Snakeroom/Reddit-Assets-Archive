// https://www.redditstatic.com/desktop2x/GoldTargetedOfferModal.203808cba43d791384dd.js
// Retrieved at 8/10/2021, 1:20:09 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GoldTargetedOfferModal"], {
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return x
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "e", (function() {
				return I
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "j", (function() {
				return T
			})), r.d(t, "i", (function() {
				return S
			})), r.d(t, "f", (function() {
				return M
			})), r.d(t, "g", (function() {
				return G
			})), r.d(t, "h", (function() {
				return N
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/formatApiError/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				s = r("./src/reddit/constants/modals.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				b = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = r("./src/reddit/endpoints/gold/purchase.ts"),
				m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				f = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				g = r("./src/reddit/models/Gold/Award.ts"),
				O = r("./src/reddit/models/Gold/ProductOffer.ts"),
				h = r("./src/reddit/models/Toast/index.ts"),
				j = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				_ = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const k = Object(o.a)(y.q),
				w = Object(o.a)(y.c),
				x = e => async (t, r) => {
					t(k(e)), t(Object(l.h)(s.a.ECON_COIN_PURCHASE))
				}, E = () => async (e, t) => {
					e(w()), e(Object(l.g)(s.a.ECON_COIN_PURCHASE))
				}, C = Object(o.a)(y.u), I = ({
					correlationId: e,
					packageId: t
				}) => async (r, n) => {
					const a = n();
					Object(j.e)(a, t) ? (r(C({
						correlationId: e,
						packageId: t
					})), r(Object(l.i)(s.a.GOLD_TARGETED_OFFER_MODAL))) : c.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${t}`)
				}, P = Object(o.a)(y.p), v = ({
					correlationId: e,
					packageId: t
				}) => async (r, n) => {
					Object(j.c)(n(), t) ? (r(P({
						correlationId: e,
						packageId: t
					})), r(Object(l.i)(s.a.ECON_COIN_PACKAGE_OFFER))) : c.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${t}`)
				}, A = (e, t, r) => async (a, o) => {
					await a(Object(d.c)(e, r));
					const c = o(),
						s = Object(j.n)(c);
					if (0 !== s.length) a(x({
						correlationId: r,
						packageId: s[0].mobileId,
						thingId: t
					}));
					else {
						const e = Object(j.k)(c),
							t = n.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						a(Object(u.f)({
							kind: h.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, T = (e, t) => async (r, o, {
					apiContext: c
				}) => {
					const s = o(),
						{
							coins: d,
							pennies: l
						} = t,
						u = Object(_.r)(s) || Object(m.d)(m.a.GoldPayment, !1);
					let b, f;
					r(Object(i.stripeTokenPending)());
					const g = Object(_.y)(s);
					if (g || (b = await r(Object(i.validateAndCreateStripeToken)(e)), f = Object(_.v)(s), b)) try {
						const e = await Object(p.f)({
							coins: d,
							context: c(),
							correlationId: u,
							offerContext: Object(O.d)(t, !1),
							pennies: l,
							rememberCard: f,
							savedCardId: g || void 0,
							token: b
						});
						if (e.error) {
							const t = Object(a.a)(e.error, e.status);
							return void r(Object(i.stripeApiError)(t))
						}
						return r(Object(i.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(m.b)(m.a.GoldPayment)
					} catch (h) {
						const e = Object(a.a)(h);
						r(Object(i.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						r(Object(i.stripeApiError)(e))
					}
				}, S = (e, t, o) => async (c, s, {
					apiContext: d
				}) => {
					const l = s(),
						{
							coins: u,
							pennies: b
						} = t,
						h = Object(_.r)(l) || Object(m.d)(m.a.GoldPayment, !1);
					let j, y;
					c(Object(i.stripeTokenPending)());
					const k = Object(_.y)(l);
					if (k || (j = await c(Object(i.validateAndCreateStripeToken)(e)), y = Object(_.v)(l), j)) try {
						const {
							gildModalThingId: e,
							isAnonymous: s,
							message: _,
							selectedAward: w
						} = l.gild;
						if (!e || !w.id) {
							const e = n.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void c(Object(i.stripeApiError)(e))
						}
						const x = w.id,
							C = {
								gildType: x,
								isAnonymous: s,
								message: _
							},
							I = await Object(p.e)({
								coins: u,
								context: d(),
								correlationId: h,
								gildParams: C,
								isOldReddit: o,
								offerContext: Object(O.d)(t, !0),
								pennies: b,
								rememberCard: y,
								savedCardId: k || void 0,
								thingId: e,
								token: j
							});
						if (I.error) {
							const e = Object(a.a)(I.error, I.status);
							return void c(Object(i.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							c(E()), c(Object(i.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: n,
								all_awardings: a,
								coins: o,
								treatment_tags: s
							} = I.body;
							return c(t({
								awardKarmaReceived: n || 0,
								awardId: x,
								awardings: a && a.length ? Object(f.a)(a).map(e => ({
									award: Object(g.h)(e),
									total: e.count
								})) : [],
								coins: o,
								id: e,
								treatmentTags: s
							})), void Object(m.b)(m.a.GoldPayment)
						}
					} catch (w) {
						const e = Object(a.a)(w);
						c(Object(i.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						c(Object(i.stripeApiError)(e))
					}
				}, M = e => async (t, r, {
					apiContext: n
				}) => {
					const o = Object(m.c)(m.a.GoldPayment),
						{
							coins: s,
							pennies: d
						} = e;
					try {
						const e = await Object(b.a)({
							context: n(),
							coins: s,
							pennies: d,
							correlationId: o
						});
						if (e.error) {
							const r = Object(a.a)(e.error);
							return void t(Object(i.paypalApiError)(r))
						} {
							const {
								order_id: t
							} = e.body;
							return t
						}
					} catch (l) {
						c.c.captureException(l);
						const e = Object(a.a)(l);
						t(Object(i.paypalApiError)(e))
					}
				}, G = (e, t) => async (r, n, {
					apiContext: o
				}) => {
					const s = n(),
						d = Object(_.r)(s) || Object(m.d)(m.a.GoldPayment, !1),
						{
							coins: l,
							pennies: u
						} = t;
					try {
						const n = await Object(b.c)({
							context: o(),
							offerContext: Object(O.d)(t, !1),
							orderId: e,
							coins: l,
							pennies: u,
							correlationId: d
						});
						if (n.error) {
							const e = Object(a.a)(n.error);
							return void r(Object(i.paypalApiError)(e))
						} {
							const {
								coins: e
							} = n.body;
							r(Object(i.paymentCompleted)({
								coins: e,
								confirmed: !0
							})), Object(m.b)(m.a.GoldPayment)
						}
					} catch (p) {
						c.c.captureException(p);
						const e = Object(a.a)(p);
						r(Object(i.paypalApiError)(e))
					}
				}, N = (e, t) => async (o, s, {
					apiContext: d
				}) => {
					const l = s(),
						u = Object(_.r)(l) || Object(m.d)(m.a.GoldPayment, !1),
						{
							coins: p,
							pennies: h
						} = t;
					try {
						const {
							gildModalThingId: c,
							isAnonymous: s,
							message: j,
							selectedAward: _
						} = l.gild;
						if (!c || !_) return void o(Object(i.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const y = _.id,
							k = await Object(b.d)({
								context: d(),
								offerContext: Object(O.d)(t, !0),
								orderId: e,
								coins: p,
								pennies: h,
								thingId: c,
								awardId: y,
								message: j || "",
								isAnonymous: s,
								correlationId: u
							});
						if (k.error) {
							const e = Object(a.a)(k.error);
							o(Object(i.paypalApiError)(e))
						} else {
							o(E());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: n,
								subreddit_coins: a,
								treatment_tags: s
							} = k.body;
							o(Object(i.paymentCompleted)({
								coins: n,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							o(d({
								awardId: y,
								awardKarmaReceived: t || 0,
								awardings: Object(f.a)(e).map(e => ({
									award: Object(g.h)(e),
									total: e.count
								})),
								coins: n,
								id: c,
								subredditCoins: a,
								treatmentTags: s
							})), Object(m.b)(m.a.GoldPayment)
						}
					} catch (j) {
						c.c.captureException(j);
						const e = Object(a.a)(j);
						o(Object(i.paypalApiError)(e))
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
				return b
			})), r.d(t, "cardNameEmpty", (function() {
				return p
			})), r.d(t, "cardElementChange", (function() {
				return m
			})), r.d(t, "stripeTokenPending", (function() {
				return f
			})), r.d(t, "stripeTokenError", (function() {
				return g
			})), r.d(t, "stripeApiError", (function() {
				return O
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return h
			})), r.d(t, "paypalApiError", (function() {
				return j
			})), r.d(t, "toggleRememberCard", (function() {
				return _
			})), r.d(t, "selectSavedCard", (function() {
				return y
			})), r.d(t, "_deleteSavedCard", (function() {
				return k
			})), r.d(t, "deleteSavedCard", (function() {
				return w
			})), r.d(t, "savedCardsPending", (function() {
				return x
			})), r.d(t, "savedCardsSuccess", (function() {
				return E
			})), r.d(t, "loadSavedCards", (function() {
				return C
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/sentry/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/reddit/endpoints/gold/purchase.ts"),
				s = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(o.a)(s.B),
				l = Object(o.a)(s.w),
				u = Object(o.a)(s.b),
				b = Object(o.a)(s.y),
				p = Object(o.a)(s.a),
				m = Object(o.a)(s.E),
				f = Object(o.a)(s.G),
				g = Object(o.a)(s.F),
				O = Object(o.a)(s.D),
				h = e => async (t, r) => {
					const a = r(),
						o = Object(i.h)(a),
						c = Object(i.l)(a),
						{
							token: s,
							error: d
						} = await e.createToken({
							name: o,
							address_zip: c
						});
					if (o.trim()) {
						if (!d && s) return s;
						t(g(d || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, j = Object(o.a)(s.x), _ = Object(o.a)(s.H), y = Object(o.a)(s.C), k = Object(o.a)(s.g), w = e => async (t, r, {
					apiContext: n
				}) => {
					t(k(e));
					try {
						const t = await Object(c.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						a.c.captureException(o)
					}
				}, x = Object(o.a)(s.z), E = Object(o.a)(s.A), C = () => async (e, t, {
					apiContext: r
				}) => {
					e(x());
					try {
						const t = await Object(c.b)(r());
						if (t.error) throw new Error(t.error.type);
						const n = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(E(n)), n[0] && e(y(n[0].cardId))
					} catch (n) {
						a.c.captureException(n), e(E([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return g
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "a", (function() {
				return k
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/env/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				s = r("./src/reddit/endpoints/gold/productCatalog.ts"),
				i = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/actions/post.ts"),
				b = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const p = Object(o.a)(b.j),
				m = Object(o.a)(b.k),
				f = Object(o.a)(b.i),
				g = e => async (t, r, {
					apiContext: o
				}) => {
					t(p());
					const d = r(),
						l = Object(i.J)(d);
					try {
						const r = !l,
							n = await Object(s.b)({
								context: o(),
								correlationId: e,
								shouldUseCurrentOrigin: r
							});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const a = n.body;
						t(m(a))
					} catch (u) {
						Object(a.b)() || console.error(u), c.c.captureException(u);
						const e = n.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(f(e))
					}
				}, O = Object(o.a)(b.m), h = Object(o.a)(b.n), j = Object(o.a)(b.l), _ = (e, t) => async (r, o, {
					apiContext: i
				}) => {
					r(O());
					try {
						const n = await Object(s.c)({
							awardId: e,
							context: i(),
							correlationId: t
						});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const a = n.body;
						if (!a.coinPackages || !a.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						r(h(a))
					} catch (d) {
						Object(a.b)() || console.error(d), c.c.captureException(d);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(j(e))
					}
				}, y = Object(o.a)(b.h), k = () => async (e, t, {
					gqlContext: r
				}) => {
					var o, i;
					try {
						const t = await Object(s.a)(r());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (o = r.errors) || void 0 === o ? void 0 : o.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (i = r.awards) || void 0 === i ? void 0 : i.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(y({
								awards: r.awards
							})), e(Object(u.B)())
						}
					} catch (b) {
						Object(a.b)() || console.error(b), e(Object(d.f)({
							kind: l.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), c.c.captureException(b)
					}
				}
		},
		"./src/reddit/components/Econ/CoinPackageOfferModal/index.m.less": function(e, t, r) {
			e.exports = {
				body: "_2lEPMg5N0x__b_D4ji0QJU",
				closeButton: "_2Zp6M5zjdSaSF4ZXB19uKv",
				closeIcon: "ZJOEoVpmjNhmNnSnoekp9",
				container: "_3Uo22aCgT6VvU3nOe-yYYj",
				image: "_3zxOPuyt8RD3yfvfjSexwG",
				title: "GmqwvnWH-4Scmcg_LAAq9",
				description: "_3lGo2G9LVVWU_7lEkZKy5s",
				agreementLink: "_1fs_kLGowvWWEDLJi84Kue",
				buttonContainer: "_1bzBUturR9rsKSEL3VGNfW",
				button: "_3Pnw83HApEfLFKPqFSeYis"
			}
		},
		"./src/reddit/components/Econ/CoinPackageOfferModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/config.ts"),
				s = r("./src/higherOrderComponents/asModal/index.tsx"),
				i = r("./src/reddit/helpers/correlationIdTracker.ts"),
				d = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				l = r("./src/reddit/hooks/useTracking.ts"),
				u = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				b = r("./src/reddit/actions/modal.ts"),
				p = r("./src/reddit/models/Gold/ProductOffer.ts"),
				m = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				f = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				g = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				O = r("./src/reddit/components/Econ/CoinPackageOfferModal/index.m.less"),
				h = r.n(O);
			const {
				fbt: j
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.default = Object(s.a)((function() {
				const e = Object(l.a)(),
					t = Object(o.d)(),
					r = Object(o.e)(e => Object(f.r)(e) || Object(i.d)(i.a.GoldPayment, !1)),
					s = Object(o.e)(f.b),
					O = Object(o.e)(e => s && Object(m.c)(e, s)),
					_ = () => {
						t(Object(b.f)())
					};
				if (Object(n.useEffect)(() => {
						O && e(Object(d.h)(void 0, O.mobileId, p.a.StorefrontFreeAward))
					}, []), !O) return _(), null;
				const {
					baselineCoins: y,
					baselinePennies: k,
					coins: w,
					pennies: x,
					mobileId: E
				} = O, C = w - y > 0, I = k - x, P = x !== k;
				return a.a.createElement(g.e, {
					className: h.a.body
				}, a.a.createElement("button", {
					onClick: () => {
						e(Object(d.b)(void 0, E, p.a.StorefrontFreeAward)), _()
					},
					className: h.a.closeButton
				}, a.a.createElement(g.b, {
					className: h.a.closeIcon
				})), a.a.createElement("div", {
					className: h.a.container
				}, a.a.createElement("div", {
					className: h.a.image,
					style: {
						backgroundImage: `url("${c.a.assetPath}/img/gold/coins-to-award-2x.png")`
					}
				}), a.a.createElement("h4", {
					className: h.a.title
				}, j._("Thanks kind stranger! To keep awarding, get some coins.", null, {
					hk: "2rIhaz"
				})), a.a.createElement("p", {
					className: h.a.description
				}, !P && j._("Buy {coin amount} for {price}", [j._param("coin amount", y.toLocaleString()), j._param("price", `$${x/100}`)], {
					hk: "15hnfi"
				}), !P && C && j._("and get {bonus coins} coins FREE", [j._param("bonus coins", y.toLocaleString())], {
					hk: "2CRGBn"
				}), P && j._("Save {baseline price} off normal price!", [j._param("baseline price", `$${I/100}`)], {
					hk: "3DkBgK"
				})), a.a.createElement("p", {
					className: h.a.agreementLink
				}, j._("By purchasing coins, you agree to our {user agreement} and {privacy policy}", [j._param("user agreement", a.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, j._("User Agreement", null, {
					hk: "n6txc"
				}))), j._param("privacy policy", a.a.createElement("a", {
					href: "https://www.redditinc.com/policies/privacy-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, j._("Privacy Policy", null, {
					hk: "11oBec"
				})))], {
					hk: "jKCQS"
				}))), a.a.createElement("div", {
					className: h.a.buttonContainer
				}, a.a.createElement(g.r, {
					className: h.a.button,
					"data-redditstyle": !0,
					onClick: () => {
						e(Object(d.a)(E, p.a.StorefrontFreeAward)), ((e, r) => {
							t(Object(b.f)()), t(Object(u.c)({
								correlationId: r,
								packageId: e.mobileId
							}))
						})(O, r)
					}
				}, j._("Purchase Coins", null, {
					hk: "3ODyrr"
				}))))
			}))
		},
		"./src/reddit/components/Gold/TargetedOfferModal/index.m.less": function(e, t, r) {
			e.exports = {
				body: "_1UQtkWFUPZx3cvg89p_QO-",
				closeButton: "_2PHvXDbMSTznZwRDUomrbs",
				image: "_2kZDQ62kUfGTcHIrRuMfQI",
				dealTitle: "_3UuGw0seEAMRVnenFXhF5",
				dealDescription: "_2iIqESuZUyMyVKAfMHKOMn",
				deal: "_2FRbR5saJqIMTktiX1pmBx",
				agreementLink: "_1fN_jRgyxLT_P3uWQ3CKY",
				button: "_1hhH7WyB7ddA4S4ouD2FbK"
			}
		},
		"./src/reddit/components/Gold/TargetedOfferModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				c = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/higherOrderComponents/asModal/index.tsx"),
				d = r("./src/reddit/helpers/correlationIdTracker.ts"),
				l = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				u = r("./src/reddit/hooks/useTracking.ts"),
				b = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				p = r("./src/reddit/actions/modal.ts"),
				m = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				f = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				g = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				O = r("./src/reddit/components/Gold/TargetedOfferModal/index.m.less"),
				h = r.n(O);
			const j = Object(s.c)({
				correlationId: e => Object(f.r)(e) || Object(d.d)(d.a.GoldPayment, !1),
				dealCoinPackages: m.f,
				purchasePackageId: f.b
			});
			const _ = Object(c.b)(j, e => ({
				onClose: () => {
					e(Object(p.f)())
				},
				onPurchaseClick: (t, r) => {
					e(Object(p.f)()), e(Object(b.c)({
						correlationId: r,
						packageId: t.mobileId
					}))
				}
			}));
			t.default = Object(i.a)(_((function(e) {
				const t = Object(u.a)(),
					{
						correlationId: r,
						dealCoinPackages: c,
						onClose: s,
						onPurchaseClick: i,
						purchasePackageId: d
					} = e,
					b = c.filter(e => e.mobileId === d)[0];
				if (Object(a.useEffect)(() => {
						b && t(Object(l.h)(void 0, b.mobileId))
					}, []), !b) return s(), null;
				const {
					baselineCoins: p,
					baselinePennies: m,
					coins: f,
					dealInfo: O,
					pennies: j,
					mobileId: _
				} = b, y = f - p, k = y > 0, w = m - j, x = j !== m, {
					title: E,
					subtitle: C,
					type: I
				} = O, P = E || ("low_coin_upsell" === I ? n.fbt._("You’re low on coins", null, {
					hk: "2fHrPn"
				}) : n.fbt._("Special Offer!", null, {
					hk: "2wnTrq"
				})), v = C || n.fbt._("Stock up and save with this limited-time offer", null, {
					hk: "2eml5T"
				}), A = k ? n.fbt._("Buy {coin amount} for {price} and get {bonus coins} bonus coins", [n.fbt._param("coin amount", p.toLocaleString()), n.fbt._param("price", `$${b.pennies/100}`), n.fbt._param("bonus coins", y.toLocaleString())], {
					hk: "2ZBhdF"
				}) : x ? n.fbt._("Save {baseline price} off normal price!", [n.fbt._param("baseline price", `$${w/100}`)], {
					hk: "CRTYf"
				}) : b.description;
				return o.a.createElement(g.e, {
					className: h.a.body
				}, o.a.createElement("button", {
					onClick: () => {
						t(Object(l.b)(void 0, _)), s()
					},
					className: h.a.closeButton
				}, o.a.createElement(g.b, null)), o.a.createElement("img", {
					className: h.a.image,
					src: b.images.marketing["2x"].url
				}), o.a.createElement("h4", {
					className: h.a.dealTitle
				}, P), o.a.createElement("p", {
					className: h.a.dealDescription
				}, v), o.a.createElement("h4", {
					className: h.a.deal
				}, A), o.a.createElement("p", {
					className: h.a.agreementLink
				}, n.fbt._("By purchasing coins, you agree to our {user agreement} and {privacy plicy}", [n.fbt._param("user agreement", o.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, n.fbt._("User Agreement", null, {
					hk: "n6txc"
				}))), n.fbt._param("privacy plicy", o.a.createElement("a", {
					href: "https://www.redditinc.com/policies/privacy-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, n.fbt._("Privacy Policy", null, {
					hk: "11oBec"
				})))], {
					hk: "1yjkQh"
				})), o.a.createElement(g.r, {
					className: h.a.button,
					"data-redditstyle": !0,
					onClick: () => {
						t(Object(l.a)(_)), i(b, r)
					}
				}, n.fbt._("Purchase", null, {
					hk: "l3q4W"
				})))
			})))
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
				return b
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "e", (function() {
				return m
			}));
			var n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				s = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
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
					u = Object(s.a)(l);
				return Object(a.a)(Object(o.a)(t, [c.a]), {
					method: n.hb.POST,
					endpoint: u,
					data: d
				}).then(i.c)
			}, l = async ({
				context: e,
				coins: t,
				pennies: r,
				correlationId: s
			}) => {
				const d = {
					coins: t,
					pennies: r,
					correlation_id: s
				};
				return Object(a.a)(Object(o.a)(e, [c.a]), {
					method: n.hb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(i.c)
			}, u = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: s,
				correlationId: d
			}) => {
				const l = {
					award_id: t,
					correlation_id: d,
					pennies: r,
					thing_id: s
				};
				return Object(a.a)(Object(o.a)(e, [c.a]), {
					method: n.hb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(i.c)
			}, b = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: s,
				pennies: d,
				correlationId: l
			}) => {
				const u = {
					offer_context: t,
					order_id: r,
					coins: s,
					pennies: d,
					correlation_id: l
				};
				return Object(a.a)(Object(o.a)(e, [c.a]), {
					method: n.hb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: u
				}).then(i.c)
			}, p = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: s,
				isAnonymous: d,
				message: l,
				offerContext: u,
				orderId: b,
				pennies: p,
				thingId: m
			}) => {
				const f = {
					award_id: e,
					coins: r,
					correlation_id: s,
					is_anonymous: d,
					message: l,
					offer_context: u,
					order_id: b,
					pennies: p,
					thing_id: m
				};
				return Object(a.a)(Object(o.a)(t, [c.a]), {
					method: n.hb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: f
				}).then(i.c)
			}, m = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: s,
				message: d,
				orderId: l,
				thingId: u
			}) => {
				const b = {
					award_id: e,
					correlation_id: r,
					is_anonymous: s,
					message: d,
					order_id: l,
					thing_id: u
				};
				return Object(a.a)(Object(o.a)(t, [c.a]), {
					method: n.hb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: b
				}).then(i.c)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/GoldTargetedOfferModal.203808cba43d791384dd.js.map