// https://www.redditstatic.com/desktop2x/GoldTargetedOfferModal.eee75598e8d3b7493231.js
// Retrieved at 6/22/2020, 1:30:11 PM by Reddit Dataminer v1.0.0
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
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				c = n.n(a),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
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
			const y = Object(s.c)({
				correlationId: e => Object(g.p)(e) || Object(d.d)(d.a.GoldPayment, !1),
				dealCoinPackages: b.d,
				purchasePackageId: g.x
			});
			const k = Object(o.b)(y, e => ({
				onClose: () => {
					e(Object(p.f)())
				},
				onPurchaseClick: (t, n) => {
					e(Object(p.f)()), e(Object(m.b)({
						correlationId: n,
						packageId: t.mobileId
					}))
				}
			}));
			t.default = Object(i.a)(k((function(e) {
				const t = Object(u.a)(),
					{
						correlationId: n,
						dealCoinPackages: o,
						onClose: s,
						onPurchaseClick: i,
						purchasePackageId: d
					} = e,
					m = o.filter(e => e.mobileId === d)[0];
				if (Object(a.useEffect)(() => {
						m && t(Object(l.h)(void 0, m.mobileId))
					}, []), !m) return s(), null;
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
				} = _, v = w || ("low_coin_upsell" === M ? r.fbt._("You’re low on coins", null, {
					hk: "2fHrPn"
				}) : r.fbt._("Special Offer!", null, {
					hk: "2wnTrq"
				})), x = C || r.fbt._("Stock up and save with this limited-time offer", null, {
					hk: "2eml5T"
				}), T = P ? r.fbt._("Buy {coin amount} for {price} and get {bonus coins} bonus coins", [r.fbt._param("coin amount", p.toLocaleString()), r.fbt._param("price", "$".concat(m.pennies / 100)), r.fbt._param("bonus coins", O.toLocaleString())], {
					hk: "2ZBhdF"
				}) : I ? r.fbt._("Save {baseline price} off normal price!", [r.fbt._param("baseline price", "$".concat(j / 100))], {
					hk: "CRTYf"
				}) : m.description;
				return c.a.createElement(f.d, {
					className: h.a.body
				}, c.a.createElement("button", {
					onClick: () => {
						t(Object(l.b)(void 0, k)), s()
					},
					className: h.a.closeButton
				}, c.a.createElement(f.b, null)), c.a.createElement("img", {
					className: h.a.image,
					src: m.images.marketing["2x"].url
				}), c.a.createElement("h4", {
					className: h.a.dealTitle
				}, v), c.a.createElement("p", {
					className: h.a.dealDescription
				}, x), c.a.createElement("h4", {
					className: h.a.deal
				}, T), c.a.createElement("p", {
					className: h.a.agreementLink
				}, r.fbt._("By purchasing coins, you agree to our {user agreement} and {privacy plicy}", [r.fbt._param("user agreement", c.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, r.fbt._("User Agreement", null, {
					hk: "n6txc"
				}))), r.fbt._param("privacy plicy", c.a.createElement("a", {
					href: "https://www.redditinc.com/policies/privacy-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, r.fbt._("Privacy Policy", null, {
					hk: "11oBec"
				})))], {
					hk: "1yjkQh"
				})), c.a.createElement(f.q, {
					className: h.a.button,
					"data-redditstyle": !0,
					onClick: () => {
						t(Object(l.a)(k)), i(m, n)
					}
				}, r.fbt._("Purchase", null, {
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
			var r = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/selectors/gold/giveAwards.ts"),
				c = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				s = n("./src/reddit/selectors/platform.ts"),
				i = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/models/GoldPurchase.ts"),
				l = n("./src/telemetry/models/Payment.ts"),
				u = n("./src/reddit/helpers/trackers/gild.ts"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/isComment.ts");
			const b = (e, t) => {
					const {
						thingId: n,
						packageId: s
					} = t, l = a.a(e), b = l ? Object(u.getAwardTypeFromAward)(l) : null, g = n ? b : o.n(e) ? d.Premium : d.Coins, f = n ? Object(p.a)(n) ? "comment" : "post" : void 0, _ = s || o.r(e), h = [...Object(c.b)(e), ...Object(c.d)(e)].filter(e => e.mobileId === _)[0], y = h && h.dealInfo && h.dealInfo.type, k = "low_coin_upsell" === y;
					let O;
					k && (O = "low_coin_balance"), "new_purchaser" === y && (O = "new_user_targeted_offer"), "repeat_purchaser" === y && (O = "repeat_user_targeted_offer");
					const P = h ? Math.round(1e4 * (h.baselinePennies - h.pennies) / h.baselinePennies) / 100 : 0,
						j = h ? Math.round(1e4 * (h.coins - h.baselineCoins) / h.coins) / 100 : 0,
						I = h ? h.baselinePennies !== h.pennies ? "".concat(P, "_percent_price") : h.baselineCoins !== h.coins ? "".concat(j, "_percent_bonus") : void 0 : void 0;
					return Object.assign({}, i.defaults(e), {
						comment: n ? i.comment(e, n) : null,
						correlationId: o.p(e) || Object(m.d)(m.a.GoldPayment, !1),
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
							amountInSmallestDenom: g === d.Premium ? r.nb : h ? h.pennies : void 0
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
							source: e ? d.GiveGold : o.n(t) ? d.PremiumMarketing : d.CoinsMarketing
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
							method: Object(s.b)(t).queryParams.thanks ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						})
					})
				}
		}
	}
]);
//# sourceMappingURL=GoldTargetedOfferModal.eee75598e8d3b7493231.js.map