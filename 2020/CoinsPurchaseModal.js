// https://www.redditstatic.com/desktop2x/CoinsPurchaseModal.d9a6368afa22f09cb5f5.js
// Retrieved at 5/29/2020, 11:10:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CoinsPurchaseModal"], {
		"./src/lib/loadRedditAdsPixel.ts": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return n
			})), t.d(a, "b", (function() {
				return r
			}));
			var s = t("./src/lib/sentry/index.ts");

			function n() {
				! function(e, a) {
					if (!e.rdt) {
						var t = e.rdt = function() {
							t.sendEvent ? t.sendEvent.apply(t, arguments) : t.callQueue.push(arguments)
						};
						t.callQueue = [];
						var s = a.createElement("script");
						s.src = "https://www.redditstatic.com/ads/pixel.js", s.async = !0;
						var n = a.getElementsByTagName("script")[0];
						n.parentNode.insertBefore(s, n)
					}
				}(window, document), rdt("init", "t2_2q2gwo2t"), rdt("track", "PageVisit")
			}
			const r = () => {
				try {
					rdt("track", "Purchase")
				} catch (e) {
					s.c.captureMessage('Attempted to fire RedditAds "Purchase" pixel, but global "rdt" object was unavailable')
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
			var s = t("./node_modules/fbt/lib/FbtPublic.js"),
				n = t("./node_modules/react/index.js"),
				r = t.n(n),
				c = t("./src/lib/classNames/index.ts"),
				o = t("./src/reddit/helpers/createEmojiText/index.tsx"),
				i = t("./src/reddit/icons/fonts/Coin/index.tsx"),
				l = t("./src/reddit/components/CoinBalance/index.m.less"),
				d = t.n(l);
			a.a = e => r.a.createElement("div", {
				className: Object(c.a)(d.a.coinBalance, e.className),
				"data-redditstyle": !0
			}, Object(o.a)(s.fbt._("Coin balance:: {Coin icon placeholder}{coinBalance}", [s.fbt._param("Coin icon placeholder", ":coin:"), s.fbt._param("coinBalance", e.coinBalance.toLocaleString())], {
				hk: "2x0upn"
			}), {
				":coin:": r.a.createElement(i.a, null)
			}), " ", r.a.createElement("a", {
				href: "/coins",
				onClick: e.onWhatAreCoinsLinkClick,
				target: "_blank"
			}, s.fbt._("What are Coins?", null, {
				hk: "3fC6PF"
			})))
		},
		"./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx": function(e, a, t) {
			"use strict";
			var s = t("./node_modules/fbt/lib/FbtPublic.js"),
				n = t("./node_modules/react/index.js"),
				r = t.n(n),
				c = t("./src/config.ts"),
				o = t("./src/lib/loadRedditAdsPixel.ts"),
				i = t("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				l = t("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = t("./src/reddit/components/TrackingHelper/index.tsx"),
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
					a(Object(m.i)(e)), Object(o.b)()
				}
				render() {
					const e = this.props,
						a = e.isGild && e.isCompletePaypal ? s.fbt._("Your transaction has been completed and details have been emailed to you. Navigate to the post or comment and refresh to see the Award.", null, {
							hk: "1o3HIE"
						}) : s.fbt._("The transaction is processing and we will let you know when it's done.", null, {
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
					}, e.isGild ? s.fbt._("Thanks for purchasing an Award, {username}", [s.fbt._param("username", e.userName)], {
						hk: "1VcYkx"
					}) : s.fbt._("Thanks for purchasing Coins, {username}", [s.fbt._param("username", e.userName)], {
						hk: "3m40W1"
					})), r.a.createElement("div", {
						className: h.a.paymentCompleteTitleDescription
					}, a), r.a.createElement("button", {
						className: h.a.closeButton,
						onClick: e.onCloseClick
					}, r.a.createElement(l.b, {
						className: h.a.closeIcon,
						"data-redditstyle": !0
					}))), r.a.createElement(i.a, {
						onCloseClick: e.onCloseClick
					}))
				}
			}
			a.a = Object(d.c)(g)
		},
		"./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx": function(e, a, t) {
			"use strict";
			var s = t("./node_modules/fbt/lib/FbtPublic.js"),
				n = t("./node_modules/react/index.js"),
				r = t.n(n),
				c = t("./node_modules/react-stripe-elements/es/index.js"),
				o = t("./src/config.ts"),
				i = t("./src/lib/constants/index.ts"),
				l = t("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				d = t("./src/reddit/components/StripePaymentForm/index.tsx"),
				m = t("./src/reddit/helpers/createEmojiText/index.tsx"),
				p = t("./src/lib/classNames/index.ts"),
				u = t("./src/reddit/components/CoinBalance/index.tsx"),
				h = t("./src/reddit/components/TrackingHelper/index.tsx"),
				g = t("./src/reddit/controls/Button/index.tsx"),
				C = t("./src/reddit/helpers/trackers/goldPayment.ts"),
				P = t("./node_modules/react-dom/index.js"),
				b = t.n(P),
				y = t("./node_modules/react-redux/es/index.js"),
				k = t("./node_modules/reselect/es/index.js"),
				x = t("./src/higherOrderComponents/makeAsync.tsx"),
				E = t("./src/reddit/helpers/loadThirdPartyScript.ts"),
				v = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				_ = t("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				f = t("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts");
			const w = Object(k.c)({
				isGild: e => !!Object(v.p)(e)
			});
			class j extends r.a.Component {
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
						ReactDOM: b.a
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
			const N = Object(y.b)(w, (e, a) => ({
				createPayment: () => "coinPackage" in a ? e(Object(_.i)(a.coinPackage)) : "awardId" in a ? e(Object(f.g)(a.awardId, a.pennies, a.thingId)) : void 0,
				executePayment: (t, s) => {
					if ("coinPackage" in a) {
						if (t) return void e(Object(_.k)(s, a.coinPackage));
						e(Object(_.j)(s, a.coinPackage))
					} else "awardId" in a && e(Object(f.f)(s))
				}
			}))(j);
			var M = Object(x.a)({
					getComponent: () => Object(E.c)().then(() => N),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				O = t("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				T = t.n(O);
			const {
				fbt: B
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			class I extends r.a.Component {
				constructor() {
					super(...arguments), this.onCompletePurchaseClick = () => {
						const {
							gildThingId: e,
							onCompletePurchaseClick: a,
							purchasePackage: t,
							sendEvent: s,
							stripe: n
						} = this.props;
						n && (s(Object(C.c)(e)), a(n, t))
					}
				}
				render() {
					const {
						award: e,
						coinBalance: a,
						gildThingId: t,
						purchasePackage: s,
						savedCardsPending: n,
						selectedPayment: c,
						stripeTokenPending: o
					} = this.props;
					return r.a.createElement("div", {
						className: T.a.purchaseSelectPaymentFooter
					}, r.a.createElement(u.a, {
						className: T.a.balance,
						coinBalance: a
					}), c === i.ub ? e && e.pennyPrice && t ? r.a.createElement(M, {
						awardId: e.id,
						className: Object(p.a)(T.a.purchaseButton, T.a.paypalCheckoutButton),
						pennies: e.pennyPrice,
						thingId: t
					}) : s && r.a.createElement(M, {
						className: Object(p.a)(T.a.purchaseButton, T.a.paypalCheckoutButton),
						coinPackage: s
					}) : null, c === i.tb && r.a.createElement(g.f, {
						className: T.a.purchaseButton,
						"data-redditstyle": !0,
						disabled: o || n,
						onClick: this.onCompletePurchaseClick
					}, B._("Complete purchase", null, {
						hk: "3d1QJR"
					})))
				}
			}
			var S = Object(c.injectStripe)(Object(h.c)(I)),
				A = t("./src/reddit/components/ModalStyledComponents/index.tsx"),
				D = t("./src/reddit/icons/fonts/Coin/index.tsx");
			const {
				fbt: F
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var L = e => r.a.createElement("div", {
				className: T.a.purchaseHeader,
				style: {
					backgroundImage: 'url("'.concat(o.a.assetPath, '/img/gold/coins-hero.jpg")')
				}
			}, r.a.createElement(D.a, {
				className: T.a.coinIcon
			}), r.a.createElement("div", {
				className: T.a.titleMain
			}, F._("Buy {amount} Coins!", [F._param("amount", e.purchasePackage.coins.toLocaleString())], {
				hk: "3E2DWq"
			})), r.a.createElement("div", {
				className: T.a.titleDescription
			}, F._("You're purchasing Coins for yourself, {userName}!", [F._param("userName", e.userName)], {
				hk: "ZGCBt"
			})), r.a.createElement("img", {
				className: T.a.goldPackage,
				src: e.purchasePackage.images.purchaseSuccess["3x"].url
			}), r.a.createElement("button", {
				className: T.a.closeButton,
				onClick: e.onCloseClick
			}, r.a.createElement(A.b, {
				className: T.a.closeIcon,
				"data-redditstyle": !0
			})));
			var G = e => {
				const a = [];
				if (e.purchasePackage && a.push(s.fbt._("{coinCount} Coins will automatically be spent on this {awardName} Award.", [s.fbt._param("coinCount", e.award.coinPrice.toLocaleString()), s.fbt._param("awardName", e.award.name)], {
						hk: "1JRQG2"
					})), e.award.pennyDonate && a.push(s.fbt._("${dollarsDonate} will be donated.", [s.fbt._param("dollarsDonate", (e.award.pennyDonate / 100).toLocaleString())], {
						hk: "QgGWi"
					})), e.award.giverCoinReward) {
					a.push(s.fbt._("As a thank you, you will receive {giverCoinReward} Coins.", [s.fbt._param("giverCoinReward", e.award.giverCoinReward.toLocaleString())], {
						hk: "1TsLW1"
					}));
					const t = e.coinBalance + (e.purchasePackage ? e.purchasePackage.coins : 0) + e.award.giverCoinReward - (e.award.pennyPrice ? 0 : e.award.coinPrice);
					t > 0 && t !== e.coinBalance && s.fbt._("You’ll have {remainingCoins} Coins remaining.", [s.fbt._param("remainingCoins", t.toLocaleString())], {
						hk: "4rGJC0"
					})
				}
				return r.a.createElement("div", {
					className: T.a.purchaseGildHeader
				}, r.a.createElement("div", {
					className: T.a.awardTitle
				}, s.fbt._("Give the {awardName} Award", [s.fbt._param("awardName", e.award.name)], {
					hk: "28iR3j"
				})), r.a.createElement("div", {
					className: T.a.awardTitleDescription
				}, a.join(" ")), r.a.createElement("img", {
					className: T.a.awardIcon,
					src: e.award.icon.url
				}), r.a.createElement("button", {
					className: T.a.closeButton,
					onClick: e.onCloseClick
				}, r.a.createElement(A.b, {
					className: Object(p.a)(T.a.closeIcon, T.a.awardPurchase),
					"data-redditstyle": !0
				})))
			};
			a.a = e => r.a.createElement(c.StripeProvider, {
				apiKey: o.a.stripe.apiKey
			}, r.a.createElement(c.Elements, null, r.a.createElement(r.a.Fragment, null, e.gildThingId ? r.a.createElement(G, {
				coinBalance: e.coinBalance,
				award: e.selectedAward,
				purchasePackage: e.purchasePackage,
				userName: e.userName,
				onCloseClick: e.onCloseModal
			}) : e.purchasePackage && r.a.createElement(L, {
				coinBalance: e.coinBalance,
				purchasePackage: e.purchasePackage,
				userName: e.userName,
				onCloseClick: e.onCloseModal
			}), r.a.createElement("div", {
				className: T.a.purchaseBody
			}, r.a.createElement(l.a, {
				className: T.a.selectPayment,
				gildThingId: e.gildThingId,
				nightmode: e.nightmode,
				selectedPayment: e.selectedPayment,
				onPaymentSelected: e.onPaymentSelected
			}), e.selectedPayment === i.tb && r.a.createElement(d.a, {
				nightmode: e.nightmode
			}), r.a.createElement("div", {
				className: T.a.checkoutFooter
			}, r.a.createElement("div", {
				className: T.a.purchaseTotal
			}, s.fbt._("Total: {totalAmount}", [s.fbt._param("totalAmount", "$" + ((e.purchasePackage ? e.purchasePackage.pennies : e.selectedAward.pennyPrice || 0) / 100).toLocaleString())], {
				hk: "3dx6W8"
			}))), e.selectedPayment === i.ub && e.paypalErrorMessage && r.a.createElement("div", {
				className: T.a.errorMessage
			}, e.paypalErrorMessage), e.selectedPayment === i.tb && e.stripeErrorMessage && r.a.createElement("div", {
				className: T.a.errorMessage
			}, e.stripeErrorMessage), r.a.createElement("div", {
				className: T.a.agreementLink
			}, e.purchasePackage && (e => {
				if (!e.gildThingId || !e.purchasePackage) return null;
				return e.coinBalance + e.purchasePackage.coins - e.selectedAward.coinPrice > 0 ? r.a.createElement(r.a.Fragment, null, s.fbt._("The minimum Coins purchase is {coins} Coins.", [s.fbt._param("coins", e.purchasePackage.coins.toLocaleString())], {
					hk: "3J52WH"
				}), r.a.createElement("br", null)) : null
			})(e), Object(m.a)(s.fbt._("By purchasing Coins and Awards, you agree to the :agreement:.", null, {
				hk: "1eCqza"
			}), {
				":agreement:": r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank"
				}, s.fbt._("Reddit User Agreement", null, {
					hk: "11z9fY"
				}))
			}))), r.a.createElement(S, {
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
			var s = t("./node_modules/react/index.js"),
				n = t.n(s),
				r = t("./node_modules/react-redux/es/index.js"),
				c = t("./node_modules/reselect/es/index.js"),
				o = t("./src/higherOrderComponents/asModal/index.tsx"),
				i = t("./src/reddit/constants/zIndex.ts"),
				l = t("./src/lib/classNames/index.ts"),
				d = t("./src/reddit/actions/gold/modals.ts"),
				m = t("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				p = t("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = t("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				h = t("./src/reddit/actions/toaster.ts"),
				g = t("./src/reddit/components/TrackingHelper/index.tsx"),
				C = t("./src/reddit/constants/colors.ts"),
				P = t("./src/reddit/helpers/correlationIdTracker.ts"),
				b = t("./src/reddit/helpers/trackers/goldPayment.ts"),
				y = t("./src/reddit/models/Toast/index.ts"),
				k = t("./src/reddit/models/User/index.ts"),
				x = t("./src/reddit/selectors/gild.ts"),
				E = t("./src/reddit/selectors/gold/giveAwards.ts"),
				v = t("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				_ = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				f = t("./src/reddit/selectors/platform.ts"),
				w = t("./src/reddit/selectors/user.ts"),
				j = t("./src/reddit/components/ModalStyledComponents/index.tsx"),
				N = t("./src/reddit/controls/LoadingIcon/index.tsx"),
				M = t("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				O = t.n(M);
			const {
				fbt: T
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var B = e => {
					const {
						award: a,
						onClickClose: t
					} = e;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: O.a.coinPurchaseGildHeader
					}, n.a.createElement("div", {
						className: O.a.awardTitle
					}, T._("Give the {award name} Award", [T._param("award name", a.name)], {
						hk: "1nWqWe"
					})), n.a.createElement("img", {
						className: O.a.awardIcon,
						src: a.icon.url
					}), n.a.createElement("button", {
						className: O.a.closeButton,
						onClick: t
					}, n.a.createElement(j.b, {
						className: Object(l.a)(O.a.closeIcon, O.a.awardPurchase),
						"data-redditstyle": !0
					}))), n.a.createElement("div", {
						className: Object(l.a)(O.a.coinPurchaseBody, O.a.loaderContainer)
					}, n.a.createElement(N.a, {
						sizePx: 100
					})))
				},
				I = t("./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx"),
				S = t("./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx");

			function A() {
				return (A = Object.assign || function(e) {
					for (var a = 1; a < arguments.length; a++) {
						var t = arguments[a];
						for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
					}
					return e
				}).apply(this, arguments)
			}
			const D = Object(c.c)({
					activePage: _.o,
					allowNavigationCallback: e => {
						const a = Object(f.a)(e);
						return null === a ? void 0 : a
					},
					coinBalance: w.d,
					coinPackages: v.b,
					dealCoinPackages: v.d,
					gildThingId: _.p,
					isIframed: x.h,
					nightmode: w.S,
					savedCardsPending: _.t,
					selectedAward: E.a,
					selectedPayment: _.b,
					stripeErrorMessage: _.i,
					stripeTokenPending: _.l,
					paypalErrorMessage: _.c,
					purchaseCatalogError: v.f,
					purchaseCatalogPending: v.g,
					purchasePackageId: _.q,
					userName: e => {
						const a = Object(w.i)(e);
						return "u/".concat(Object(k.e)(a))
					}
				}),
				F = Object(r.b)(D, (e, a) => ({
					closeModal: () => {
						e(Object(m.e)()), e(Object(d.a)())
					},
					loadSavedCards: () => e(Object(p.loadSavedCards)()),
					onFailedToLoadCatalog: a => {
						const t = {
							kind: y.b.Error,
							text: a
						};
						return e(Object(h.e)(t))
					},
					onPaymentSelected: a => e(Object(p.selectPaymentMethod)(a)),
					requestPurchaseCatalog: () => e(Object(u.a)()),
					dispatchCompletePurchase: (a, t, s, n) => {
						e(s ? Object(m.l)(a, t, n) : Object(m.m)(a, t))
					}
				}), (e, a, t) => Object.assign({}, e, a, t, {
					onCompletePurchaseClick: (t, s) => a.dispatchCompletePurchase(t, s, !!e.gildThingId, e.isIframed)
				}));
			class L extends n.a.Component {
				constructor(e) {
					super(e), this.handleEscapeKey = e => {
						const {
							onTryCloseModal: a
						} = this.props;
						if (27 === e.keyCode) return a()
					};
					const {
						coinPackages: a,
						loadSavedCards: t,
						purchaseCatalogPending: s,
						requestPurchaseCatalog: n
					} = this.props;
					a.length || s || n(), t()
				}
				componentWillUnmount() {
					Object(P.b)(P.a.GoldPayment), document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						gildThingId: e,
						sendEvent: a
					} = this.props;
					Object(P.d)(P.a.GoldPayment), a(Object(b.h)(e))
				}
				componentDidUpdate(e) {
					if (this.props.stripeErrorMessage && !e.stripeErrorMessage) {
						const {
							gildThingId: e,
							sendEvent: a
						} = this.props;
						a(Object(b.g)(e))
					}
				}
				render() {
					const {
						activePage: e,
						className: a,
						coinBalance: t,
						coinPackages: s,
						dealCoinPackages: r,
						gildThingId: c,
						isCompletePaypal: o,
						nightmode: i,
						onCompletePurchaseClick: l,
						onFailedToLoadCatalog: d,
						onPaymentSelected: m,
						onTryCloseModal: p,
						paypalErrorMessage: u,
						purchaseCatalogError: h,
						purchaseCatalogPending: g,
						purchasePackageId: C,
						savedCardsPending: P,
						selectedAward: b,
						selectedPayment: y,
						stripeErrorMessage: k,
						stripeTokenPending: x,
						userName: E
					} = this.props;
					if (h) return d(h), p(), null;
					const v = !!c,
						_ = [...s, ...r].filter(e => e.mobileId === C)[0];
					return "paymentCompleted" === e ? n.a.createElement("div", {
						className: a
					}, n.a.createElement(I.a, {
						isCompletePaypal: o,
						isGild: v,
						onCloseClick: p,
						userName: E
					})) : g || !_ ? n.a.createElement("div", {
						className: a
					}, n.a.createElement(B, {
						award: b,
						onClickClose: p
					})) : n.a.createElement("div", {
						className: a
					}, "selectPayment" === e && n.a.createElement(S.a, {
						coinBalance: t,
						gildThingId: c,
						nightmode: i,
						onCloseModal: p,
						onCompletePurchaseClick: l,
						onPaymentSelected: m,
						paypalErrorMessage: u,
						purchasePackage: _,
						savedCardsPending: P,
						selectedAward: b,
						selectedPayment: y,
						stripeErrorMessage: k,
						stripeTokenPending: x,
						userName: E
					}))
				}
			}
			const G = Object(o.a)(L);
			a.default = F(Object(g.c)(class extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							gildThingId: e,
							sendEvent: a
						} = this.props;
						a(Object(b.b)(e)), this.onCloseModal()
					}, this.onCloseModal = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}
				}
				render() {
					const e = Object.assign({
						backgroundColor: C.a.overlayReportFlow
					}, this.props.isIframed ? {
						zIndex: i.a,
						paddingTop: 12,
						paddingBottom: 12
					} : {});
					return n.a.createElement(G, A({}, this.props, {
						className: Object(l.a)(this.props.className, O.a.coinPurchaseModal),
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
			var s = t("./node_modules/react/index.js"),
				n = t.n(s),
				r = t("./src/reddit/controls/Button/index.tsx"),
				c = t("./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less"),
				o = t.n(c);
			const {
				fbt: i
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.a = e => n.a.createElement("div", {
				className: o.a.purchaseFooter
			}, n.a.createElement(r.f, {
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
			var s = t("./node_modules/react/index.js"),
				n = t.n(s);

			function r(e, a) {
				const t = e.toString().split(":");
				return t.length % 2 == 0 ? e : t.reduce((e, t, s) => (s % 2 == 0 ? e.push(t) : "" === t ? e.push(":") : ":".concat(t, ":") in a ? e.push(a[":".concat(t, ":")]) : e.push(":".concat(t, ":")), e), []).map((e, a) => n.a.createElement(n.a.Fragment, {
					key: a
				}, e))
			}
		}
	}
]);
//# sourceMappingURL=CoinsPurchaseModal.d9a6368afa22f09cb5f5.js.map