// https://www.redditstatic.com/desktop2x/CoinPurchaseModal.d2195d21dac7caff9228.js
// Retrieved at 7/9/2020, 4:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CoinPurchaseModal"], {
		"./src/lib/loadRedditAdsPixel.ts": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return s
			})), t.d(a, "b", (function() {
				return r
			}));
			var n = t("./src/lib/sentry/index.ts");

			function s() {
				! function(e, a) {
					if (!e.rdt) {
						var t = e.rdt = function() {
							t.sendEvent ? t.sendEvent.apply(t, arguments) : t.callQueue.push(arguments)
						};
						t.callQueue = [];
						var n = a.createElement("script");
						n.src = "https://www.redditstatic.com/ads/pixel.js", n.async = !0;
						var s = a.getElementsByTagName("script")[0];
						s.parentNode.insertBefore(n, s)
					}
				}(window, document), rdt("init", "t2_2q2gwo2t"), rdt("track", "PageVisit")
			}
			const r = () => {
				try {
					rdt("track", "Purchase")
				} catch (e) {
					n.c.captureMessage('Attempted to fire RedditAds "Purchase" pixel, but global "rdt" object was unavailable')
				}
			}
		},
		"./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return b
			})), t.d(a, "b", (function() {
				return C
			})), t.d(a, "e", (function() {
				return y
			})), t.d(a, "d", (function() {
				return k
			})), t.d(a, "c", (function() {
				return j
			}));
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				s = t("./src/lib/formatApiError/index.ts"),
				r = t("./src/lib/makeActionCreator/index.ts"),
				c = t("./src/lib/sentry/index.ts"),
				o = t("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				i = t("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				d = t("./src/reddit/endpoints/gold/purchase.ts"),
				l = t("./src/reddit/helpers/correlationIdTracker.ts"),
				m = t("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				p = t("./src/reddit/models/Gold/Award.ts"),
				u = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = t("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const g = Object(r.a)(h.p),
				b = Object(r.a)(h.d),
				P = Object(r.a)(h.q),
				C = (e, a, t) => async e => {
					e(P({
						thingId: a
					})), e(g({
						correlationId: t
					}))
				}, y = (e, a) => async (r, c, i) => {
					let {
						apiContext: h
					} = i;
					const g = c(),
						P = Object(l.c)(l.a.GoldPayment);
					let C, y;
					r(Object(o.stripeTokenPending)());
					const k = Object(u.v)(g);
					if (k || (C = await r(Object(o.validateAndCreateStripeToken)(e)), y = Object(u.s)(g), C)) try {
						const {
							gildModalThingId: e,
							isAnonymous: c,
							message: i,
							selectedAward: l
						} = g.gild;
						if (!e || !l.id) return void r(Object(o.stripeApiError)(n.fbt._("Gilding unknown thing", null, {
							hk: "Qd6mo"
						})));
						const u = l.id,
							j = l.pennyPrice;
						if (!j) return void r(Object(o.stripeApiError)(n.fbt._("Trying to purchase award with zero price", null, {
							hk: "3FhAjz"
						})));
						const x = {
								gildType: u,
								includeMessage: !!i,
								isAnonymous: c,
								message: i
							},
							E = await Object(d.f)({
								context: h(),
								correlationId: P,
								gildParams: x,
								isOldReddit: a,
								pennies: j,
								rememberCard: y,
								savedCardId: k || void 0,
								thingId: e,
								token: C
							});
						if (E.error) {
							const e = Object(s.a)(E.error, E.status);
							return void r(Object(o.stripeApiError)(e))
						} {
							const {
								gildSuccessful: a
							} = await Promise.resolve().then(t.bind(null, "./src/reddit/actions/gold/gild.ts"));
							r(b()), r(Object(o.paymentCompleted)({
								confirmed: !1
							}));
							const {
								all_awardings: n,
								awarder_karma_received: s,
								coins: c,
								treatment_tags: i
							} = E.body;
							return void r(a({
								awardKarmaReceived: s || 0,
								awardId: u,
								awardings: n && n.length ? Object(m.a)(n).map(e => ({
									award: Object(p.h)(e),
									total: e.count
								})) : [],
								coins: c,
								id: e,
								treatmentTags: i
							}))
						}
					} catch (j) {
						const e = Object(s.a)(j);
						r(Object(o.stripeApiError)(e))
					} else r(Object(o.stripeApiError)(n.fbt._("Looks like something went wrong validating your credit card.", null, {
						hk: "20FruV"
					})))
				}, k = (e, a, t) => async (n, r, d) => {
					let {
						apiContext: m
					} = d;
					const p = Object(l.c)(l.a.GoldPayment);
					try {
						const r = await Object(i.b)({
							context: m(),
							awardId: e,
							pennies: a,
							thingId: t,
							correlationId: p
						});
						if (r.error) {
							const e = Object(s.a)(r.error);
							return void n(Object(o.paypalApiError)(e))
						} {
							const {
								order_id: e
							} = r.body;
							return e
						}
					} catch (u) {
						c.c.captureException(u);
						const e = Object(s.a)(u);
						n(Object(o.paypalApiError)(e))
					}
				}, j = e => async (a, r, d) => {
					let {
						apiContext: u
					} = d;
					const h = r(),
						g = Object(l.c)(l.a.GoldPayment);
					try {
						const {
							gildModalThingId: r,
							isAnonymous: c,
							message: d,
							selectedAward: l
						} = h.gild;
						if (!r || !l) return void a(Object(o.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const P = l.id,
							C = await Object(i.e)({
								awardId: P,
								context: u(),
								orderId: e,
								thingId: r,
								message: d || "",
								isAnonymous: c,
								correlationId: g
							});
						if (C.error) {
							const e = Object(s.a)(C.error);
							a(Object(o.paypalApiError)(e))
						} else {
							a(b());
							const {
								all_awardings: e,
								awarder_karma_received: n,
								coins: s,
								subreddit_coins: c,
								treatment_tags: i
							} = C.body;
							a(Object(o.paymentCompleted)({
								coins: s,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await Promise.resolve().then(t.bind(null, "./src/reddit/actions/gold/gild.ts"));
							a(d({
								awardKarmaReceived: n || 0,
								awardId: P,
								awardings: Object(m.a)(e).map(e => ({
									award: Object(p.h)(e),
									total: e.count
								})),
								coins: s,
								id: r,
								subredditCoins: c,
								treatmentTags: i
							}))
						}
					} catch (P) {
						c.c.captureException(P);
						const e = Object(s.a)(P);
						a(Object(o.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/components/CoinBalance/index.m.less": function(e, a, t) {
			e.exports = {
				coinBalance: "_1B-dVN_8RcEpQbDNGHy3Ds"
			}
		},
		"./src/reddit/components/CoinBalance/index.tsx": function(e, a, t) {
			"use strict";
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				s = t("./node_modules/react/index.js"),
				r = t.n(s),
				c = t("./src/lib/classNames/index.ts"),
				o = t("./src/reddit/helpers/createEmojiText/index.tsx"),
				i = t("./src/reddit/icons/fonts/Coin/index.tsx"),
				d = t("./src/reddit/components/CoinBalance/index.m.less"),
				l = t.n(d);
			a.a = e => r.a.createElement("div", {
				className: Object(c.a)(l.a.coinBalance, e.className),
				"data-redditstyle": !0
			}, Object(o.a)(n.fbt._("Coin balance:: {Coin icon placeholder}{coinBalance}", [n.fbt._param("Coin icon placeholder", ":coin:"), n.fbt._param("coinBalance", e.coinBalance.toLocaleString())], {
				hk: "2x0upn"
			}), {
				":coin:": r.a.createElement(i.a, null)
			}), " ", r.a.createElement("a", {
				href: "/coins",
				onClick: e.onWhatAreCoinsLinkClick,
				target: "_blank"
			}, n.fbt._("What are Coins?", null, {
				hk: "3fC6PF"
			})))
		},
		"./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx": function(e, a, t) {
			"use strict";
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				s = t("./node_modules/react/index.js"),
				r = t.n(s),
				c = t("./src/config.ts"),
				o = t("./src/lib/loadRedditAdsPixel.ts"),
				i = t("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				d = t("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = t("./src/reddit/components/TrackingHelper/index.tsx"),
				m = t("./src/reddit/helpers/trackers/goldPayment.ts"),
				p = t("./src/reddit/icons/fonts/Coin/index.tsx"),
				u = t("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				h = t.n(u);
			class g extends r.a.PureComponent {
				componentDidMount() {
					const {
						gildThingId: e,
						sendEvent: a
					} = this.props;
					a(Object(m.j)(e)), Object(o.b)()
				}
				render() {
					const e = this.props,
						a = e.isGild && n.fbt._("The transaction is processing and we will let you know when it's done.", null, {
							hk: "JMSWS"
						});
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: h.a.paymentCompleteHeader,
						style: {
							backgroundImage: 'url("'.concat(c.a.assetPath, '/img/gold/coins-hero.jpg")')
						}
					}, r.a.createElement(p.a, {
						className: h.a.coinIcon
					}), r.a.createElement("div", {
						className: h.a.paymentCompleteTitleMain
					}, e.isGild ? n.fbt._("Thanks for purchasing an Award, {username}", [n.fbt._param("username", e.userName)], {
						hk: "1VcYkx"
					}) : n.fbt._("Thanks for purchasing Coins, {username}", [n.fbt._param("username", e.userName)], {
						hk: "3m40W1"
					})), r.a.createElement("div", {
						className: h.a.paymentCompleteTitleDescription
					}, a), r.a.createElement("button", {
						className: h.a.closeButton,
						onClick: e.onCloseClick
					}, r.a.createElement(d.b, {
						className: h.a.closeIcon,
						"data-redditstyle": !0
					}))), r.a.createElement(i.a, {
						onCloseClick: e.onCloseClick
					}))
				}
			}
			a.a = Object(l.c)(g)
		},
		"./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx": function(e, a, t) {
			"use strict";
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				s = t("./node_modules/react/index.js"),
				r = t.n(s),
				c = t("./node_modules/react-stripe-elements/es/index.js"),
				o = t("./src/config.ts"),
				i = t("./src/lib/constants/index.ts"),
				d = t("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				l = t("./src/reddit/components/StripePaymentForm/index.tsx"),
				m = t("./src/reddit/helpers/createEmojiText/index.tsx"),
				p = t("./src/lib/classNames/index.ts"),
				u = t("./src/reddit/components/CoinBalance/index.tsx"),
				h = t("./src/reddit/components/TrackingHelper/index.tsx"),
				g = t("./src/reddit/controls/Button/index.tsx"),
				b = t("./src/reddit/helpers/trackers/goldPayment.ts"),
				P = t("./node_modules/react-dom/index.js"),
				C = t.n(P),
				y = t("./node_modules/react-redux/es/index.js"),
				k = t("./node_modules/reselect/es/index.js"),
				j = t("./src/higherOrderComponents/makeAsync.tsx"),
				x = t("./src/reddit/helpers/loadThirdPartyScript.ts"),
				E = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				w = t("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				v = t("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts");
			const f = Object(k.c)({
				isGild: e => !!Object(E.p)(e)
			});
			class _ extends r.a.Component {
				constructor() {
					super(...arguments), this.onPayment = () => this.props.createPayment(), this.onAuthorize = e => {
						const {
							orderID: a
						} = e, {
							isGild: t
						} = this.props;
						return this.props.executePayment(t, a)
					}
				}
				render() {
					const {
						className: e
					} = this.props, a = paypalCheckout.Button.driver("react", {
						React: r.a,
						ReactDOM: C.a
					}), t = {
						sandbox: o.a.paypal.apiKey,
						production: o.a.paypal.apiKey
					};
					return r.a.createElement("div", {
						className: e
					}, r.a.createElement(a, {
						env: o.a.paypal.env,
						client: t,
						style: {
							size: "responsive",
							color: "blue",
							shape: "rect",
							label: "paypal",
							tagline: !1
						},
						payment: this.onPayment,
						commit: !0,
						onAuthorize: this.onAuthorize
					}))
				}
			}
			const O = Object(y.b)(f, (e, a) => ({
				createPayment: () => "coinPackage" in a ? e(Object(w.e)(a.coinPackage)) : "awardId" in a ? e(Object(v.d)(a.awardId, a.pennies, a.thingId)) : void 0,
				executePayment: (t, n) => {
					if ("coinPackage" in a) {
						if (t) return void e(Object(w.g)(n, a.coinPackage));
						e(Object(w.f)(n, a.coinPackage))
					} else "awardId" in a && e(Object(v.c)(n))
				}
			}))(_);
			var N = Object(j.a)({
					getComponent: () => Object(x.c)().then(() => O),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				M = t("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				T = t.n(M);
			const {
				fbt: I
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			class A extends r.a.Component {
				constructor() {
					super(...arguments), this.onCompletePurchaseClick = () => {
						const {
							gildThingId: e,
							onCompletePurchaseClick: a,
							purchasePackage: t,
							sendEvent: n,
							stripe: s
						} = this.props;
						s && (n(Object(b.c)(e)), a(s, t))
					}
				}
				render() {
					const {
						award: e,
						coinBalance: a,
						gildThingId: t,
						purchasePackage: n,
						savedCardsPending: s,
						selectedPayment: c,
						stripeTokenPending: o
					} = this.props;
					return r.a.createElement("div", {
						className: T.a.purchaseSelectPaymentFooter
					}, r.a.createElement(u.a, {
						className: T.a.balance,
						coinBalance: a
					}), c === i.xb ? e && e.pennyPrice && t ? r.a.createElement(N, {
						awardId: e.id,
						className: Object(p.a)(T.a.purchaseButton, T.a.paypalCheckoutButton),
						pennies: e.pennyPrice,
						thingId: t
					}) : n && r.a.createElement(N, {
						className: Object(p.a)(T.a.purchaseButton, T.a.paypalCheckoutButton),
						coinPackage: n
					}) : null, c === i.wb && r.a.createElement(g.f, {
						className: T.a.purchaseButton,
						"data-redditstyle": !0,
						disabled: o || s,
						onClick: this.onCompletePurchaseClick
					}, I._("Complete purchase", null, {
						hk: "3d1QJR"
					})))
				}
			}
			var B = Object(c.injectStripe)(Object(h.c)(A)),
				S = t("./src/reddit/components/ModalStyledComponents/index.tsx"),
				F = t("./src/reddit/icons/fonts/Coin/index.tsx");
			const {
				fbt: G
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var D = e => r.a.createElement("div", {
				className: T.a.purchaseHeader,
				style: {
					backgroundImage: 'url("'.concat(o.a.assetPath, '/img/gold/coins-hero.jpg")')
				}
			}, r.a.createElement(F.a, {
				className: T.a.coinIcon
			}), r.a.createElement("div", {
				className: T.a.titleMain
			}, G._("Buy {amount} Coins!", [G._param("amount", e.purchasePackage.coins.toLocaleString())], {
				hk: "3E2DWq"
			})), r.a.createElement("div", {
				className: T.a.titleDescription
			}, G._("You're purchasing Coins for yourself, {userName}!", [G._param("userName", e.userName)], {
				hk: "ZGCBt"
			})), r.a.createElement("img", {
				className: T.a.goldPackage,
				src: e.purchasePackage.images.purchaseSuccess["3x"].url
			}), r.a.createElement("button", {
				className: T.a.closeButton,
				onClick: e.onCloseClick
			}, r.a.createElement(S.b, {
				className: T.a.closeIcon,
				"data-redditstyle": !0
			})));
			var L = e => {
				const a = [];
				if (e.purchasePackage && a.push(n.fbt._("{coinCount} Coins will automatically be spent on this {awardName} Award.", [n.fbt._param("coinCount", e.award.coinPrice.toLocaleString()), n.fbt._param("awardName", e.award.name)], {
						hk: "1JRQG2"
					})), e.award.pennyDonate && a.push(n.fbt._("${dollarsDonate} will be donated.", [n.fbt._param("dollarsDonate", (e.award.pennyDonate / 100).toLocaleString())], {
						hk: "QgGWi"
					})), e.award.giverCoinReward) {
					a.push(n.fbt._("As a thank you, you will receive {giverCoinReward} Coins.", [n.fbt._param("giverCoinReward", e.award.giverCoinReward.toLocaleString())], {
						hk: "1TsLW1"
					}));
					const t = e.coinBalance + (e.purchasePackage ? e.purchasePackage.coins : 0) + e.award.giverCoinReward - (e.award.pennyPrice ? 0 : e.award.coinPrice);
					t > 0 && t !== e.coinBalance && n.fbt._("You’ll have {remainingCoins} Coins remaining.", [n.fbt._param("remainingCoins", t.toLocaleString())], {
						hk: "4rGJC0"
					})
				}
				return r.a.createElement("div", {
					className: T.a.purchaseGildHeader
				}, r.a.createElement("div", {
					className: T.a.awardTitle
				}, n.fbt._("Give the {awardName} Award", [n.fbt._param("awardName", e.award.name)], {
					hk: "28iR3j"
				})), r.a.createElement("div", {
					className: T.a.awardTitleDescription
				}, a.join(" ")), r.a.createElement("img", {
					className: T.a.awardIcon,
					src: e.award.icon.url
				}), r.a.createElement("button", {
					className: T.a.closeButton,
					onClick: e.onCloseClick
				}, r.a.createElement(S.b, {
					className: Object(p.a)(T.a.closeIcon, T.a.awardPurchase),
					"data-redditstyle": !0
				})))
			};
			a.a = e => r.a.createElement(c.StripeProvider, {
				apiKey: o.a.stripe.apiKey
			}, r.a.createElement(c.Elements, null, r.a.createElement(r.a.Fragment, null, e.gildThingId ? r.a.createElement(L, {
				coinBalance: e.coinBalance,
				award: e.selectedAward,
				purchasePackage: e.purchasePackage,
				userName: e.userName,
				onCloseClick: e.onCloseModal
			}) : e.purchasePackage && r.a.createElement(D, {
				coinBalance: e.coinBalance,
				purchasePackage: e.purchasePackage,
				userName: e.userName,
				onCloseClick: e.onCloseModal
			}), r.a.createElement("div", {
				className: T.a.purchaseBody
			}, r.a.createElement(d.a, {
				className: T.a.selectPayment,
				gildThingId: e.gildThingId,
				nightmode: e.nightmode,
				selectedPayment: e.selectedPayment,
				onPaymentSelected: e.onPaymentSelected
			}), e.selectedPayment === i.wb && r.a.createElement(l.a, {
				nightmode: e.nightmode
			}), r.a.createElement("div", {
				className: T.a.checkoutFooter
			}, r.a.createElement("div", {
				className: T.a.purchaseTotal
			}, n.fbt._("Total: {totalAmount}", [n.fbt._param("totalAmount", "$" + ((e.purchasePackage ? e.purchasePackage.pennies : e.selectedAward.pennyPrice || 0) / 100).toLocaleString())], {
				hk: "3dx6W8"
			}))), e.selectedPayment === i.xb && e.paypalErrorMessage && r.a.createElement("div", {
				className: T.a.errorMessage
			}, e.paypalErrorMessage), e.selectedPayment === i.wb && e.stripeErrorMessage && r.a.createElement("div", {
				className: T.a.errorMessage
			}, e.stripeErrorMessage), r.a.createElement("div", {
				className: T.a.agreementLink
			}, e.purchasePackage && (e => {
				if (!e.gildThingId || !e.purchasePackage) return null;
				return e.coinBalance + e.purchasePackage.coins - e.selectedAward.coinPrice > 0 ? r.a.createElement(r.a.Fragment, null, n.fbt._("The minimum Coins purchase is {coins} Coins.", [n.fbt._param("coins", e.purchasePackage.coins.toLocaleString())], {
					hk: "3J52WH"
				}), r.a.createElement("br", null)) : null
			})(e), Object(m.a)(n.fbt._("By purchasing Coins and Awards, you agree to the :agreement:.", null, {
				hk: "1eCqza"
			}), {
				":agreement:": r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank"
				}, n.fbt._("Reddit User Agreement", null, {
					hk: "11z9fY"
				}))
			}))), r.a.createElement(B, {
				award: e.selectedAward,
				coinBalance: e.coinBalance,
				gildThingId: e.gildThingId,
				onCompletePurchaseClick: e.onCompletePurchaseClick,
				purchasePackage: e.purchasePackage,
				savedCardsPending: e.savedCardsPending,
				selectedPayment: e.selectedPayment,
				stripeTokenPending: e.stripeTokenPending
			}))))
		},
		"./src/reddit/components/CoinPurchaseModal/index.m.less": function(e, a, t) {
			e.exports = {
				coinPurchaseModal: "_3PdRn_CekW51ny0uOVaHCK",
				purchaseHeader: "g2a3Zv8q9QUPKkvmhD9dL",
				purchaseGildHeader: "QMHZeOFhvSdgNkN2CTp18",
				coinIcon: "_3alReP5WKjkboxwGTN8Lpb",
				titleMain: "_3jPcOJNUfeN7OdCWA1d5VZ",
				titleDescription: "_1Q6p4vuIwLOxdw0XbHUT8w",
				goldPackage: "_1Zs4anwKjSFfYdqzSlkAcM",
				awardTitle: "_1Xjj9WldJRB-1ed1DXvre4",
				awardTitleDescription: "_2vpRJS-JeaGdKGeNQ2Ol8V",
				awardIcon: "_2zDbtSCEwDNAL2vdRkM5a_",
				closeButton: "_19tq6XZNubN99tY6SeeVQS",
				closeIcon: "_39qPvGtn6v2srEyecX-Q4y",
				awardPurchase: "whOANGCvUvMZjOdtnV1bZ",
				purchaseBody: "_3EtBcIxrPxM_DvmbfXFyCX",
				loaderContainer: "_2uPzorlzh0nEEymC1BvQBX",
				selectPayment: "_1kvmUEmQHiHPMWKNupYHMc",
				checkoutFooter: "HJGClx25Yjtzsp_aYfn0t",
				purchaseTotal: "_1Wq99elhkrt-_gxygdKIRE",
				agreementLink: "_4bWCoUTra_tfj3pkGR8fX",
				purchaseSelectPaymentFooter: "PDhzgUep2V87LcZ5msw2j",
				balance: "_3Yby__H8ckQTVIBMfVRI9L",
				purchaseButton: "_1C6JQFckaXQ2JzWIgJKnwA",
				paypalCheckoutButton: "_1Kbe0XzWlb6SJwe3jCy1R3",
				paymentCompleteHeader: "_3Pz3ZE0Flyeud2EZ_rhxs",
				paymentCompleteTitleMain: "OTAmbKrqsrvoZxHWtSAXO",
				paymentCompleteTitleDescription: "_3vjo7IoOcQ9Hv1YmhvnodL",
				errorMessage: "_2ZSesrmixZQhOH6L7Yce5m"
			}
		},
		"./src/reddit/components/CoinPurchaseModal/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var n = t("./node_modules/react/index.js"),
				s = t.n(n),
				r = t("./node_modules/react-redux/es/index.js"),
				c = t("./node_modules/reselect/es/index.js"),
				o = t("./src/higherOrderComponents/asModal/index.tsx"),
				i = t("./src/reddit/constants/zIndex.ts"),
				d = t("./src/reddit/actions/gold/modals.ts"),
				l = t("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				m = t("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				p = t("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				u = t("./src/reddit/actions/toaster.ts"),
				h = t("./src/reddit/components/TrackingHelper/index.tsx"),
				g = t("./src/reddit/constants/colors.ts"),
				b = t("./src/reddit/helpers/correlationIdTracker.ts"),
				P = t("./src/reddit/helpers/trackers/goldPayment.ts"),
				C = t("./src/reddit/models/Toast/index.ts"),
				y = t("./src/reddit/models/User/index.ts"),
				k = t("./src/reddit/selectors/gild.ts"),
				j = t("./src/reddit/selectors/gold/giveAwards.ts"),
				x = t("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				E = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				w = t("./src/reddit/selectors/platform.ts"),
				v = t("./src/reddit/selectors/user.ts"),
				f = t("./src/lib/classNames/index.ts"),
				_ = t("./src/reddit/components/ModalStyledComponents/index.tsx"),
				O = t("./src/reddit/controls/LoadingIcon/index.tsx"),
				N = t("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				M = t.n(N);
			const {
				fbt: T
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var I = e => {
					const {
						award: a,
						onClickClose: t
					} = e;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: M.a.coinPurchaseGildHeader
					}, s.a.createElement("div", {
						className: M.a.awardTitle
					}, T._("Give the {award name} Award", [T._param("award name", a.name)], {
						hk: "1nWqWe"
					})), s.a.createElement("img", {
						className: M.a.awardIcon,
						src: a.icon.url
					}), s.a.createElement("button", {
						className: M.a.closeButton,
						onClick: t
					}, s.a.createElement(_.b, {
						className: Object(f.a)(M.a.closeIcon, M.a.awardPurchase),
						"data-redditstyle": !0
					}))), s.a.createElement("div", {
						className: Object(f.a)(M.a.coinPurchaseBody, M.a.loaderContainer)
					}, s.a.createElement(O.a, {
						sizePx: 100
					})))
				},
				A = t("./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx"),
				B = t("./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx");

			function S() {
				return (S = Object.assign || function(e) {
					for (var a = 1; a < arguments.length; a++) {
						var t = arguments[a];
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					}
					return e
				}).apply(this, arguments)
			}
			const F = Object(c.c)({
					activePage: E.n,
					allowNavigationCallback: e => {
						const a = Object(w.a)(e);
						return null === a ? void 0 : a
					},
					coinBalance: v.d,
					coinPackages: x.b,
					correlationId: e => Object(E.o)(e) || Object(b.d)(b.a.GoldPayment, !1),
					dealCoinPackages: x.d,
					gildThingId: E.p,
					isIframed: k.h,
					nightmode: v.S,
					savedCardsPending: E.t,
					selectedAward: j.a,
					selectedPayment: E.a,
					stripeErrorMessage: E.h,
					stripeTokenPending: E.k,
					paypalErrorMessage: E.b,
					purchaseCatalogError: x.f,
					purchaseCatalogPending: x.g,
					purchasePackageId: E.q,
					userName: e => {
						const a = Object(v.i)(e);
						return "u/".concat(Object(y.e)(a))
					}
				}),
				G = Object(r.b)(F, (e, a) => ({
					closeModal: () => {
						e(Object(l.a)()), e(Object(d.a)())
					},
					loadSavedCards: () => e(Object(m.loadSavedCards)()),
					onFailedToLoadCatalog: a => {
						const t = {
							kind: C.b.Error,
							text: a
						};
						return e(Object(u.e)(t))
					},
					onPaymentSelected: a => e(Object(m.selectPaymentMethod)(a)),
					requestPurchaseCatalog: a => e(Object(p.b)(a)),
					dispatchCompletePurchase: (a, t, n, s) => {
						e(n ? Object(l.h)(a, t, s) : Object(l.i)(a, t))
					}
				}), (e, a, t) => Object.assign({}, e, a, t, {
					onCompletePurchaseClick: (t, n) => a.dispatchCompletePurchase(t, n, !!e.gildThingId, e.isIframed)
				}));
			class D extends s.a.Component {
				constructor(e) {
					super(e), this.handleEscapeKey = e => {
						const {
							onTryCloseModal: a
						} = this.props;
						if (27 === e.keyCode) return a()
					};
					const {
						coinPackages: a,
						correlationId: t,
						loadSavedCards: n,
						purchaseCatalogPending: s,
						requestPurchaseCatalog: r
					} = this.props;
					a.length || s || r(t), n()
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						gildThingId: e,
						sendEvent: a
					} = this.props;
					Object(b.d)(b.a.GoldPayment, !1), a(Object(P.i)(e))
				}
				componentDidUpdate(e) {
					if (this.props.stripeErrorMessage && !e.stripeErrorMessage) {
						const {
							gildThingId: e,
							sendEvent: a
						} = this.props;
						a(Object(P.g)(e))
					}
				}
				render() {
					const {
						activePage: e,
						coinBalance: a,
						coinPackages: t,
						dealCoinPackages: n,
						gildThingId: r,
						nightmode: c,
						onCompletePurchaseClick: o,
						onFailedToLoadCatalog: i,
						onPaymentSelected: d,
						onTryCloseModal: l,
						paypalErrorMessage: m,
						purchaseCatalogError: p,
						purchaseCatalogPending: u,
						purchasePackageId: h,
						savedCardsPending: g,
						selectedAward: b,
						selectedPayment: P,
						stripeErrorMessage: C,
						stripeTokenPending: y,
						userName: k
					} = this.props;
					if (p) return i(p), l(), null;
					const j = !!r,
						x = [...t, ...n].filter(e => e.mobileId === h)[0];
					return "paymentCompleted" === e ? s.a.createElement("div", null, s.a.createElement(A.a, {
						isGild: j,
						onCloseClick: l,
						userName: k
					})) : u || !x ? s.a.createElement("div", null, s.a.createElement(I, {
						award: b,
						onClickClose: l
					})) : s.a.createElement("div", null, "selectPayment" === e && s.a.createElement(B.a, {
						coinBalance: a,
						gildThingId: r,
						nightmode: c,
						onCloseModal: l,
						onCompletePurchaseClick: o,
						onPaymentSelected: d,
						paypalErrorMessage: m,
						purchasePackage: x,
						savedCardsPending: g,
						selectedAward: b,
						selectedPayment: P,
						stripeErrorMessage: C,
						stripeTokenPending: y,
						userName: k
					}))
				}
			}
			const L = Object(o.a)(D);
			a.default = G(Object(h.c)(class extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							gildThingId: e,
							sendEvent: a
						} = this.props;
						a(Object(P.b)(e)), this.onCloseModal()
					}, this.onCloseModal = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}
				}
				render() {
					const e = Object.assign({
						backgroundColor: g.a.overlayReportFlow
					}, this.props.isIframed ? {
						zIndex: i.a,
						paddingTop: 12,
						paddingBottom: 12
					} : {});
					return s.a.createElement(L, S({}, this.props, {
						className: M.a.coinPurchaseModal,
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						overlayCustomStyles: e,
						withOverlay: !0
					}))
				}
			}))
		},
		"./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less": function(e, a, t) {
			e.exports = {
				purchaseFooter: "_2siiafYfV9NgkupSIDgaht",
				purchaseButton: "_18yTyMH2TYOdGSb9UumZq-"
			}
		},
		"./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx": function(e, a, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				s = t.n(n),
				r = t("./src/reddit/controls/Button/index.tsx"),
				c = t("./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less"),
				o = t.n(c);
			const {
				fbt: i
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.a = e => s.a.createElement("div", {
				className: o.a.purchaseFooter
			}, s.a.createElement(r.f, {
				className: o.a.purchaseButton,
				"data-redditstyle": !0,
				onClick: e.onCloseClick
			}, i._("Done", null, {
				hk: "3s1bT9"
			})))
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return r
			}));
			t("./node_modules/core-js/modules/es6.regexp.to-string.js"), t("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = t("./node_modules/react/index.js"),
				s = t.n(n);

			function r(e, a) {
				const t = e.toString().split(":");
				return t.length % 2 == 0 ? e : t.reduce((e, t, n) => (n % 2 == 0 ? e.push(t) : "" === t ? e.push(":") : ":".concat(t, ":") in a ? e.push(a[":".concat(t, ":")]) : e.push(":".concat(t, ":")), e), []).map((e, a) => s.a.createElement(s.a.Fragment, {
					key: a
				}, e))
			}
		}
	}
]);
//# sourceMappingURL=CoinPurchaseModal.d2195d21dac7caff9228.js.map