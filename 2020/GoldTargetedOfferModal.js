// https://www.redditstatic.com/desktop2x/GoldTargetedOfferModal.864e6a3ee43ec7521312.js
// Retrieved at 4/28/2020, 1:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GoldTargetedOfferModal"], {
		"./src/reddit/components/Gold/TargetedOfferModal/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Gold/TargetedOfferModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/reddit/helpers/correlationIdTracker.ts"),
				l = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				u = n("./src/reddit/hooks/useTracking.ts"),
				m = n("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				p = n("./src/reddit/actions/modal.ts"),
				b = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				g = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				f = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				_ = n("./src/reddit/components/Gold/TargetedOfferModal/index.m.less"),
				h = n.n(_);
			const y = Object(c.c)({
				dealCoinPackages: b.d,
				purchasePackageId: g.w
			});
			const k = Object(o.b)(y, e => ({
				onClose: () => {
					e(Object(p.f)()), Object(d.b)(d.a.GoldPayment)
				},
				onPurchaseClick: t => {
					e(Object(p.f)()), e(Object(m.f)({
						packageId: t.mobileId
					}))
				}
			}));
			t.default = Object(i.a)(k((function(e) {
				const t = Object(u.a)(),
					{
						dealCoinPackages: n,
						onClose: o,
						onPurchaseClick: c,
						purchasePackageId: i
					} = e,
					m = n.filter(e => e.mobileId === i)[0];
				if (Object(r.useEffect)(() => {
						m && (Object(d.d)(d.a.GoldPayment), t(Object(l.h)(void 0, m.mobileId)))
					}, []), !m) return o(), null;
				const {
					baselineCoins: p,
					baselinePennies: b,
					coins: g,
					dealInfo: _,
					pennies: y,
					mobileId: k
				} = m, O = g - p, j = g !== p, P = b - y, I = y !== b, {
					title: C,
					subtitle: w,
					type: M
				} = _, T = C || ("low_coin_upsell" === M ? s.fbt._("You’re low on Coins", null, {
					hk: "2rWB40"
				}) : s.fbt._("Special Offer!", null, {
					hk: "2wnTrq"
				})), x = w || s.fbt._("Stock up and save with this limited-time offer", null, {
					hk: "2eml5T"
				}), v = j ? s.fbt._("Buy {coin amount} for {price} and get {bonus coins} Coins FREE", [s.fbt._param("coin amount", p.toLocaleString()), s.fbt._param("price", "$".concat(m.pennies / 100)), s.fbt._param("bonus coins", O.toLocaleString())], {
					hk: "47juf"
				}) : I ? s.fbt._("Save {baseline price} off normal price!", [s.fbt._param("baseline price", "$".concat(P / 100))], {
					hk: "CRTYf"
				}) : m.description;
				return a.a.createElement(f.c, {
					className: h.a.body
				}, a.a.createElement("button", {
					onClick: () => {
						t(Object(l.b)(void 0, k)), o()
					},
					className: h.a.closeButton
				}, a.a.createElement(f.b, null)), a.a.createElement("img", {
					className: h.a.image,
					src: m.images.marketing["2x"].url
				}), a.a.createElement("h4", {
					className: h.a.dealTitle
				}, T), a.a.createElement("p", {
					className: h.a.dealDescription
				}, x), a.a.createElement("h4", {
					className: h.a.deal
				}, v), a.a.createElement("p", {
					className: h.a.agreementLink
				}, s.fbt._("By purchasing Coins, you agree to the {agreement}", [s.fbt._param("agreement", a.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, s.fbt._("Reddit User Agreement", null, {
					hk: "2oIYsO"
				})))], {
					hk: "C2n6i"
				})), a.a.createElement(f.o, {
					className: h.a.button,
					"data-redditstyle": !0,
					onClick: () => {
						t(Object(l.a)(k)), c(m)
					}
				}, s.fbt._("Purchase", null, {
					hk: "l3q4W"
				})))
			})))
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return g
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "i", (function() {
				return P
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/selectors/gold/giveAwards.ts"),
				a = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = n("./src/reddit/selectors/platform.ts"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/models/GoldPurchase.ts"),
				l = n("./src/telemetry/models/Payment.ts"),
				u = n("./src/reddit/helpers/trackers/gild.ts"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/isComment.ts");
			const b = (e, t) => {
					const {
						thingId: n,
						packageId: c
					} = t, l = r.a(e), b = l ? Object(u.getAwardTypeFromAward)(l) : null, g = n ? b : o.n(e) ? d.Premium : d.Coins, f = n ? Object(p.a)(n) ? "comment" : "post" : void 0, _ = c || o.q(e), h = [...Object(a.b)(e), ...Object(a.d)(e)].filter(e => e.mobileId === _)[0], y = h && h.dealInfo && h.dealInfo.type, k = "low_coin_upsell" === y;
					let O;
					k && (O = "low_coin_balance"), "new_purchaser" === y && (O = "new_user_targeted_offer"), "repeat_purchaser" === y && (O = "repeat_user_targeted_offer");
					const j = h ? Math.round(1e4 * (h.baselinePennies - h.pennies) / h.baselinePennies) / 100 : 0,
						P = h ? Math.round(1e4 * (h.coins - h.baselineCoins) / h.coins) / 100 : 0,
						I = h ? h.baselinePennies !== h.pennies ? "".concat(j, "_percent_price") : h.baselineCoins !== h.coins ? "".concat(P, "_percent_bonus") : void 0 : void 0;
					return Object.assign({}, i.defaults(e), {
						comment: n ? i.comment(e, n) : null,
						correlationId: Object(m.c)(m.a.GoldPayment),
						post: n ? i.post(e, n) : null,
						screen: i.screen(e),
						subreddit: n ? i.subreddit(e) : null,
						goldPurchase: Object.assign({}, l ? {
							awardId: l.id,
							awardName: l.name,
							numberCoinsToRecipient: l.coinReward
						} : null, {
							type: g,
							gildedContent: !!n,
							contentType: f,
							numberCoins: h ? h.coins : void 0,
							offerContext: O,
							offerType: k ? h ? "".concat(h.bonusPct, "_percent_bonus") : void 0 : I
						}),
						payment: {
							currency: "USD",
							amountInSmallestDenom: g === d.Premium ? s.lb : h ? h.pennies : void 0
						}
					})
				},
				g = (e, t) => n => Object.assign({}, b(n, {
					packageId: t,
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				f = e => t => Object.assign({}, b(t, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				_ = e => t => Object.assign({}, b(t, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				h = e => t => Object.assign({}, b(t, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				y = e => t => Object.assign({}, b(t, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				k = e => t => Object.assign({}, b(t, {
					packageId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				O = e => t => Object.assign({}, b(t, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				j = (e, t) => t => {
					const n = b(t, {
						thingId: e
					});
					return Object.assign({}, n, {
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: Object.assign({}, n.payment, {
							defaultOption: l.PaymentMethod.Paypal
						}),
						goldPurchase: Object.assign({}, n.goldPurchase, {
							source: e ? d.GiveGold : o.n(t) ? d.PremiumMarketing : d.CoinsMarketing
						})
					})
				},
				P = e => t => {
					const n = b(t, {
						thingId: e
					});
					return Object.assign({}, n, {
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: Object.assign({}, n.payment, {
							method: Object(c.b)(t).queryParams.thanks ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						})
					})
				}
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = s.b
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = e => e.gild.selectedAward
		}
	}
]);
//# sourceMappingURL=GoldTargetedOfferModal.864e6a3ee43ec7521312.js.map