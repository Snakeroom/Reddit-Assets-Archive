// https://www.redditstatic.com/desktop2x/GoldDealAfterGildModal.caecdbc9294be9f3242b.js
// Retrieved at 4/15/2020, 3:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["GoldDealAfterGildModal"], {
		"./src/reddit/components/Gold/DealAfterGildModal/index.m.less": function(e, t, n) {
			e.exports = {
				body: "_1c631x6dLnfSpvhEQraV_5",
				closeButton: "_3y2dk83FD5AsI6nOLZrIEB",
				image: "wFTYdkuUdEQWSn4GgiA9J",
				dealTitle: "_1bbKRSZCXn_QyL4Ls45m",
				dealDescription: "_3YL28q-IN7NfLEQx9kurnB",
				deal: "_2gNyIpy-2cn72pfP64xyj4",
				agreementLink: "_1tM44bgJ0pIFSUecx1ztEC",
				button: "_3jHBzaIwXcef2i7P7utoZm"
			}
		},
		"./src/reddit/components/Gold/DealAfterGildModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n("./node_modules/react/index.js"),
				s = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/helpers/correlationIdTracker.ts"),
				l = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				d = n("./src/reddit/hooks/useTracking.ts"),
				u = n("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				h = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				p = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				b = n("./src/reddit/components/Gold/DealAfterGildModal/index.m.less"),
				g = n.n(b);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js"), y = Object(r.c)({
				dealCoinPackages: h.c
			});
			const w = Object(a.b)(y, e => ({
				onOpen: t => {
					e(Object(u.n)({
						coinsToPurchase: t.coins
					}))
				},
				onClose: () => {
					e(Object(m.f)()), Object(c.b)(c.a.GoldPayment)
				},
				onPurchaseClick: t => {
					e(Object(m.f)()), e(Object(u.g)({
						coinsToPurchase: t.coins
					}))
				}
			}));
			t.default = Object(i.a)(w((function(e) {
				const t = Object(d.a)(),
					{
						dealCoinPackages: n,
						onClose: a,
						onOpen: r,
						onPurchaseClick: i
					} = e,
					u = n.length;
				if (Object(o.useEffect)(() => {
						u && (Object(c.d)(c.a.GoldPayment), r(n[0]), t(Object(l.g)()))
					}, []), !u) return null;
				const m = n[0],
					{
						baselineCoins: h,
						coins: b
					} = m,
					y = b - h,
					w = b !== h;
				return s.a.createElement(p.c, {
					className: g.a.body
				}, s.a.createElement("button", {
					onClick: () => {
						t(Object(l.a)()), a()
					},
					className: g.a.closeButton
				}, s.a.createElement(p.b, null)), s.a.createElement("img", {
					className: g.a.image,
					src: m.images.marketing["2x"].url
				}), s.a.createElement("h4", {
					className: g.a.dealTitle
				}, f._("You’re low on Coins", null, {
					hk: "2rWB40"
				})), s.a.createElement("p", {
					className: g.a.dealDescription
				}, f._("Stock up and save with this limited-time offer", null, {
					hk: "2eml5T"
				})), s.a.createElement("h4", {
					className: g.a.deal
				}, w ? s.a.createElement(s.a.Fragment, null, f._("Buy {coinAmount} for {price}", [f._param("coinAmount", h.toLocaleString()), f._param("price", m.pennies / 100)], {
					hk: "2WjUdt"
				}), " ", y && f._("and get {bonusCoins} Coins FREE", [f._param("bonusCoins", y.toLocaleString())], {
					hk: "44FIOM"
				})) : m.description), s.a.createElement("p", {
					className: g.a.agreementLink
				}, f._("By purchasing Coins, you agree to the {agreement}", [f._param("agreement", s.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, f._("Reddit User Agreement", null, {
					hk: "2oIYsO"
				})))], {
					hk: "C2n6i"
				})), s.a.createElement(p.o, {
					className: g.a.button,
					"data-redditstyle": !0,
					onClick: () => i(m)
				}, f._("Purchase", null, {
					hk: "l3q4W"
				})))
			})))
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "f", (function() {
				return k
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "h", (function() {
				return O
			}));
			var o = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/models/Gold/Coins/index.ts"),
				a = n("./src/reddit/selectors/gold/giveAwards.ts"),
				r = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				i = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/models/GoldPurchase.ts"),
				u = n("./src/telemetry/models/Payment.ts"),
				m = n("./src/reddit/helpers/trackers/gild.ts"),
				h = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/isComment.ts");
			const b = (e, t) => {
					const n = a.a(e),
						c = n ? Object(m.getAwardTypeFromAward)(n) : null,
						u = t ? c : i.o(e) ? d.Premium : d.Coins,
						b = t ? Object(p.a)(t) ? "comment" : "post" : void 0,
						g = i.b(e),
						f = Object(r.b)(e),
						y = Object(r.c)(e),
						w = Object(s.b)(g, [...f, ...y], !!t),
						_ = w && "com.reddit.coins_deal_1" === w.mobileId,
						k = _ ? "low_coin_balance" : void 0,
						C = w ? Math.round(1e4 * (w.baselinePennies - w.pennies) / w.baselinePennies) / 100 : 0,
						O = w ? Math.round(1e4 * (w.coins - w.baselineCoins) / w.coins) / 100 : 0,
						v = w ? w.baselinePennies !== w.pennies ? "".concat(C, "_percent_price") : w.baselineCoins !== w.coins ? "".concat(O, "_percent_bonus") : void 0 : void 0;
					return Object.assign({}, l.defaults(e), {
						comment: t ? l.comment(e, t) : null,
						correlationId: Object(h.c)(h.a.GoldPayment),
						post: t ? l.post(e, t) : null,
						screen: l.screen(e),
						subreddit: t ? l.subreddit(e) : null,
						goldPurchase: Object.assign({}, n ? {
							awardId: n.id,
							awardName: n.name,
							numberCoinsToRecipient: n.coinReward
						} : null, {
							type: u,
							gildedContent: !!t,
							contentType: b,
							numberCoins: w ? w.coins : void 0,
							offerContext: k,
							offerType: _ ? w ? "".concat(w.bonusPct, "_percent_bonus") : void 0 : v
						}),
						payment: {
							currency: "USD",
							amountInSmallestDenom: u === d.Premium ? o.mb : w ? w.pennies : void 0
						}
					})
				},
				g = e => t => Object.assign({}, b(t, e), {
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				f = e => t => Object.assign({}, b(t, e), {
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				y = e => t => Object.assign({}, b(t, e), {
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				w = e => t => Object.assign({}, b(t, e), {
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				_ = e => t => Object.assign({}, b(t, e), {
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				k = e => t => Object.assign({}, b(t, e), {
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				C = e => t => {
					const n = b(t, e);
					return Object.assign({}, n, {
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: Object.assign({}, n.payment, {
							defaultOption: u.PaymentMethod.Paypal
						}),
						goldPurchase: Object.assign({}, n.goldPurchase, {
							source: e ? d.GiveGold : i.o(t) ? d.PremiumMarketing : d.CoinsMarketing
						})
					})
				},
				O = e => t => {
					const n = b(t, e);
					return Object.assign({}, n, {
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: Object.assign({}, n.payment, {
							method: Object(c.b)(t).queryParams.thanks ? u.PaymentMethod.Paypal : u.PaymentMethod.CreditCard
						})
					})
				}
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, n) {
			"use strict";
			var o = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = o.b
		},
		"./src/reddit/models/Gold/Coins/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return a
			}));
			var o = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = (e, t, n) => {
					let o = null;
					for (const s of t) {
						const t = o ? o.coins : 1 / 0,
							a = s.coins;
						if (a >= e && a < t) {
							if (n && s.coins < 1e3) continue;
							o = s
						}
					}
					return o
				},
				a = [{
					prompt: () => o.fbt._("What are Coins?", null, {
						hk: "1wU35D"
					}),
					answer: () => o.fbt._("Coins are our virtual good, and you can use them to award exceptional posts or comments, giving them Silver, Gold, or Platinum. We'll be adding cool new ways to spend your Coins in the future.", null, {
						hk: "4Wf9n"
					})
				}, {
					prompt: () => o.fbt._('What is "Give Award"?', null, {
						hk: "Q08fJ"
					}),
					answer: () => o.fbt._('Giving an Award, or "gilding", is a way to show appreciation for an exceptional contribution to Reddit. You can award someone by clicking on "Give Award" below their post or comment. This distinguishes it with an Award for all to see, and some even grant the honoree special bonus benefits.', null, {
						hk: "4fZWQ3"
					})
				}, {
					prompt: () => o.fbt._("What are these new Award types?", null, {
						hk: "2ysK1l"
					}),
					answer: () => o.fbt._("There are now several ways to Give Awards. A Silver Award requires 100 Coins, which simply marks a post or comment with a Silver Award icon. A classic Gold Award requires 500 Coins and gives the recipient a week of Reddit Premium membership and 100 Coins. Finally, the ultra rare Platinum Award costs 1800 Coins, and gives the recipient with one month of Reddit Premium membership, which includes 700 Coins for that month.", null, {
						hk: "sPegC"
					})
				}, {
					prompt: () => o.fbt._("I bought Coins, how can I tell how many I have?", null, {
						hk: "VVChk"
					}),
					answer: () => o.fbt._("If you buy Coins you will always have a balance associated with your Reddit account. You can view your balance on the top navigation bar by your username.", null, {
						hk: "1ZHMGy"
					})
				}, {
					prompt: () => o.fbt._("Can I transfer Coins between Reddit accounts?", null, {
						hk: "1VS4Gc"
					}),
					answer: () => o.fbt._("You cannot transfer your Reddit Coin balance across usernames, sorry. You can offer a Gold Award to other users which will grant them 100 Coins.", null, {
						hk: "46q9mb"
					})
				}, {
					prompt: () => o.fbt._("Can I get Coins for free?", null, {
						hk: "2Qzs1G"
					}),
					answer: () => o.fbt._("We may give away Coins on special occasions. Stay tuned!", null, {
						hk: "30yIpE"
					})
				}, {
					prompt: () => o.fbt._("What happened to Creddits? Do those still exist?", null, {
						hk: "qTu5W"
					}),
					answer: () => o.fbt._("Yes, Creddits are simply called \"Coins\" now, and we've converted any existing balance at a generous exchange rate of one Creddit to 2000 Coins. That's double their original monetary value as a thank you for supporting us early. Use them to award exceptional posts and comments you come across. Thanks again for your contribution to the Reddit community.", null, {
						hk: "3ZI3ct"
					})
				}, {
					prompt: () => o.fbt._("I thought Gold was the name of Reddit's subscription membership?", null, {
						hk: "26YDse"
					}),
					answer: () => o.fbt._('You\'re correct, it used to also be the name of the subscription membership. However, many people confused the subscription "Reddit Gold" membership with a virtual good or coin. To make things easier to understand, we\'ve renamed the membership to "Reddit Premium", while our virtual good is called "Coins".', null, {
						hk: "FjaSU"
					})
				}]
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			const o = e => e.gild.selectedAward
		}
	}
]);
//# sourceMappingURL=GoldDealAfterGildModal.caecdbc9294be9f3242b.js.map