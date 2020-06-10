// https://www.redditstatic.com/desktop2x/GoldTargetedOfferModal.1acb3041493a295dc763.js
// Retrieved at 6/10/2020, 7:30:07 PM by Reddit Dataminer v1.0.0
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
			var a = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				s = n.n(r),
				c = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
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
			const y = Object(o.c)({
				dealCoinPackages: b.d,
				purchasePackageId: g.w
			});
			const k = Object(c.b)(y, e => ({
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
						onClose: c,
						onPurchaseClick: o,
						purchasePackageId: i
					} = e,
					m = n.filter(e => e.mobileId === i)[0];
				if (Object(r.useEffect)(() => {
						m && (Object(d.d)(d.a.GoldPayment), t(Object(l.h)(void 0, m.mobileId)))
					}, []), !m) return c(), null;
				const {
					baselineCoins: p,
					baselinePennies: b,
					coins: g,
					dealInfo: _,
					pennies: y,
					mobileId: k
				} = m, O = g - p, P = O > 0, j = b - y, I = y !== b, {
					title: w,
					subtitle: C,
					type: M
				} = _, v = w || ("low_coin_upsell" === M ? a.fbt._("You’re low on coins", null, {
					hk: "2fHrPn"
				}) : a.fbt._("Special Offer!", null, {
					hk: "2wnTrq"
				})), x = C || a.fbt._("Stock up and save with this limited-time offer", null, {
					hk: "2eml5T"
				}), T = P ? a.fbt._("Buy {coin amount} for {price} and get {bonus coins} bonus coins", [a.fbt._param("coin amount", p.toLocaleString()), a.fbt._param("price", "$".concat(m.pennies / 100)), a.fbt._param("bonus coins", O.toLocaleString())], {
					hk: "2ZBhdF"
				}) : I ? a.fbt._("Save {baseline price} off normal price!", [a.fbt._param("baseline price", "$".concat(j / 100))], {
					hk: "CRTYf"
				}) : m.description;
				return s.a.createElement(f.d, {
					className: h.a.body
				}, s.a.createElement("button", {
					onClick: () => {
						t(Object(l.b)(void 0, k)), c()
					},
					className: h.a.closeButton
				}, s.a.createElement(f.b, null)), s.a.createElement("img", {
					className: h.a.image,
					src: m.images.marketing["2x"].url
				}), s.a.createElement("h4", {
					className: h.a.dealTitle
				}, v), s.a.createElement("p", {
					className: h.a.dealDescription
				}, x), s.a.createElement("h4", {
					className: h.a.deal
				}, T), s.a.createElement("p", {
					className: h.a.agreementLink
				}, a.fbt._("By purchasing coins, you agree to our {user agreement} and {privacy plicy}", [a.fbt._param("user agreement", s.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, a.fbt._("User Agreement", null, {
					hk: "n6txc"
				}))), a.fbt._param("privacy plicy", s.a.createElement("a", {
					href: "https://www.redditinc.com/policies/privacy-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, a.fbt._("Privacy Policy", null, {
					hk: "11oBec"
				})))], {
					hk: "1yjkQh"
				})), s.a.createElement(f.q, {
					className: h.a.button,
					"data-redditstyle": !0,
					onClick: () => {
						t(Object(l.a)(k)), o(m)
					}
				}, a.fbt._("Purchase", null, {
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
				return P
			})), n.d(t, "i", (function() {
				return j
			}));
			var a = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/selectors/gold/giveAwards.ts"),
				s = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				c = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				o = n("./src/reddit/selectors/platform.ts"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/models/GoldPurchase.ts"),
				l = n("./src/telemetry/models/Payment.ts"),
				u = n("./src/reddit/helpers/trackers/gild.ts"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/isComment.ts");
			const b = (e, t) => {
					const {
						thingId: n,
						packageId: o
					} = t, l = r.a(e), b = l ? Object(u.getAwardTypeFromAward)(l) : null, g = n ? b : c.n(e) ? d.Premium : d.Coins, f = n ? Object(p.a)(n) ? "comment" : "post" : void 0, _ = o || c.q(e), h = [...Object(s.b)(e), ...Object(s.d)(e)].filter(e => e.mobileId === _)[0], y = h && h.dealInfo && h.dealInfo.type, k = "low_coin_upsell" === y;
					let O;
					k && (O = "low_coin_balance"), "new_purchaser" === y && (O = "new_user_targeted_offer"), "repeat_purchaser" === y && (O = "repeat_user_targeted_offer");
					const P = h ? Math.round(1e4 * (h.baselinePennies - h.pennies) / h.baselinePennies) / 100 : 0,
						j = h ? Math.round(1e4 * (h.coins - h.baselineCoins) / h.coins) / 100 : 0,
						I = h ? h.baselinePennies !== h.pennies ? "".concat(P, "_percent_price") : h.baselineCoins !== h.coins ? "".concat(j, "_percent_bonus") : void 0 : void 0;
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
							amountInSmallestDenom: g === d.Premium ? a.mb : h ? h.pennies : void 0
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
				P = (e, t) => t => {
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
							source: e ? d.GiveGold : c.n(t) ? d.PremiumMarketing : d.CoinsMarketing
						})
					})
				},
				j = e => t => {
					const n = b(t, {
						thingId: e
					});
					return Object.assign({}, n, {
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: Object.assign({}, n.payment, {
							method: Object(o.b)(t).queryParams.thanks ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						})
					})
				}
		}
	}
]);
//# sourceMappingURL=GoldTargetedOfferModal.1acb3041493a295dc763.js.map