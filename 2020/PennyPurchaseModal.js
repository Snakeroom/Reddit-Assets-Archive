// https://www.redditstatic.com/desktop2x/PennyPurchaseModal.3cba6b821d7b04534be3.js
// Retrieved at 6/24/2020, 4:40:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PennyPurchaseModal"], {
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
		"./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx": function(e, a, t) {
			"use strict";
			var s = t("./node_modules/fbt/lib/FbtPublic.js"),
				n = t("./node_modules/react/index.js"),
				r = t.n(n),
				o = t("./src/config.ts"),
				c = t("./src/lib/loadRedditAdsPixel.ts"),
				d = t("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				i = t("./src/reddit/components/ModalStyledComponents/index.tsx"),
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
					a(Object(m.i)(e)), Object(c.b)()
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
							backgroundImage: 'url("'.concat(o.a.assetPath, '/img/gold/coins-hero.jpg")')
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
					}, r.a.createElement(i.b, {
						className: h.a.closeIcon,
						"data-redditstyle": !0
					}))), r.a.createElement(d.a, {
						onCloseClick: e.onCloseClick
					}))
				}
			}
			a.a = Object(l.c)(g)
		},
		"./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx": function(e, a, t) {
			"use strict";
			var s = t("./node_modules/fbt/lib/FbtPublic.js"),
				n = t("./node_modules/react/index.js"),
				r = t.n(n),
				o = t("./node_modules/react-stripe-elements/es/index.js"),
				c = t("./src/config.ts"),
				d = t("./src/lib/constants/index.ts"),
				i = t("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				l = t("./src/reddit/components/StripePaymentForm/index.tsx"),
				m = t("./src/reddit/helpers/createEmojiText/index.tsx"),
				p = t("./src/lib/classNames/index.ts"),
				u = t("./src/reddit/components/CoinBalance/index.tsx"),
				h = t("./src/reddit/components/TrackingHelper/index.tsx"),
				g = t("./src/reddit/controls/Button/index.tsx"),
				P = t("./src/reddit/helpers/trackers/goldPayment.ts"),
				C = t("./node_modules/react-dom/index.js"),
				b = t.n(C),
				y = t("./node_modules/react-redux/es/index.js"),
				k = t("./node_modules/reselect/es/index.js"),
				v = t("./src/higherOrderComponents/makeAsync.tsx"),
				E = t("./src/reddit/helpers/loadThirdPartyScript.ts"),
				x = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				w = t("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				_ = t("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts");
			const f = Object(k.c)({
				isGild: e => !!Object(x.q)(e)
			});
			class N extends r.a.Component {
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
						sandbox: c.a.paypal.apiKey,
						production: c.a.paypal.apiKey
					};
					return r.a.createElement("div", {
						className: e
					}, r.a.createElement(a, {
						env: c.a.paypal.env,
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
			const M = Object(y.b)(f, (e, a) => ({
				createPayment: () => "coinPackage" in a ? e(Object(w.e)(a.coinPackage)) : "awardId" in a ? e(Object(_.d)(a.awardId, a.pennies, a.thingId)) : void 0,
				executePayment: (t, s) => {
					if ("coinPackage" in a) {
						if (t) return void e(Object(w.g)(s, a.coinPackage));
						e(Object(w.f)(s, a.coinPackage))
					} else "awardId" in a && e(Object(_.c)(s))
				}
			}))(N);
			var j = Object(v.a)({
					getComponent: () => Object(E.c)().then(() => M),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				O = t("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				T = t.n(O);
			const {
				fbt: I
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			class B extends r.a.Component {
				constructor() {
					super(...arguments), this.onCompletePurchaseClick = () => {
						const {
							gildThingId: e,
							onCompletePurchaseClick: a,
							purchasePackage: t,
							sendEvent: s,
							stripe: n
						} = this.props;
						n && (s(Object(P.c)(e)), a(n, t))
					}
				}
				render() {
					const {
						award: e,
						coinBalance: a,
						gildThingId: t,
						purchasePackage: s,
						savedCardsPending: n,
						selectedPayment: o,
						stripeTokenPending: c
					} = this.props;
					return r.a.createElement("div", {
						className: T.a.purchaseSelectPaymentFooter
					}, r.a.createElement(u.a, {
						className: T.a.balance,
						coinBalance: a
					}), o === d.wb ? e && e.pennyPrice && t ? r.a.createElement(j, {
						awardId: e.id,
						className: Object(p.a)(T.a.purchaseButton, T.a.paypalCheckoutButton),
						pennies: e.pennyPrice,
						thingId: t
					}) : s && r.a.createElement(j, {
						className: Object(p.a)(T.a.purchaseButton, T.a.paypalCheckoutButton),
						coinPackage: s
					}) : null, o === d.vb && r.a.createElement(g.f, {
						className: T.a.purchaseButton,
						"data-redditstyle": !0,
						disabled: c || n,
						onClick: this.onCompletePurchaseClick
					}, I._("Complete purchase", null, {
						hk: "3d1QJR"
					})))
				}
			}
			var S = Object(o.injectStripe)(Object(h.c)(B)),
				A = t("./src/reddit/components/ModalStyledComponents/index.tsx"),
				D = t("./src/reddit/icons/fonts/Coin/index.tsx");
			const {
				fbt: L
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var F = e => r.a.createElement("div", {
				className: T.a.purchaseHeader,
				style: {
					backgroundImage: 'url("'.concat(c.a.assetPath, '/img/gold/coins-hero.jpg")')
				}
			}, r.a.createElement(D.a, {
				className: T.a.coinIcon
			}), r.a.createElement("div", {
				className: T.a.titleMain
			}, L._("Buy {amount} Coins!", [L._param("amount", e.purchasePackage.coins.toLocaleString())], {
				hk: "3E2DWq"
			})), r.a.createElement("div", {
				className: T.a.titleDescription
			}, L._("You're purchasing Coins for yourself, {userName}!", [L._param("userName", e.userName)], {
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
			a.a = e => r.a.createElement(o.StripeProvider, {
				apiKey: c.a.stripe.apiKey
			}, r.a.createElement(o.Elements, null, r.a.createElement(r.a.Fragment, null, e.gildThingId ? r.a.createElement(G, {
				coinBalance: e.coinBalance,
				award: e.selectedAward,
				purchasePackage: e.purchasePackage,
				userName: e.userName,
				onCloseClick: e.onCloseModal
			}) : e.purchasePackage && r.a.createElement(F, {
				coinBalance: e.coinBalance,
				purchasePackage: e.purchasePackage,
				userName: e.userName,
				onCloseClick: e.onCloseModal
			}), r.a.createElement("div", {
				className: T.a.purchaseBody
			}, r.a.createElement(i.a, {
				className: T.a.selectPayment,
				gildThingId: e.gildThingId,
				nightmode: e.nightmode,
				selectedPayment: e.selectedPayment,
				onPaymentSelected: e.onPaymentSelected
			}), e.selectedPayment === d.vb && r.a.createElement(l.a, {
				nightmode: e.nightmode
			}), r.a.createElement("div", {
				className: T.a.checkoutFooter
			}, r.a.createElement("div", {
				className: T.a.purchaseTotal
			}, s.fbt._("Total: {totalAmount}", [s.fbt._param("totalAmount", "$" + ((e.purchasePackage ? e.purchasePackage.pennies : e.selectedAward.pennyPrice || 0) / 100).toLocaleString())], {
				hk: "3dx6W8"
			}))), e.selectedPayment === d.wb && e.paypalErrorMessage && r.a.createElement("div", {
				className: T.a.errorMessage
			}, e.paypalErrorMessage), e.selectedPayment === d.vb && e.stripeErrorMessage && r.a.createElement("div", {
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
				o = t("./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less"),
				c = t.n(o);
			const {
				fbt: d
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.a = e => n.a.createElement("div", {
				className: c.a.purchaseFooter
			}, n.a.createElement(r.f, {
				className: c.a.purchaseButton,
				"data-redditstyle": !0,
				onClick: e.onCloseClick
			}, d._("Done", null, {
				hk: "3s1bT9"
			})))
		},
		"./src/reddit/components/PennyPurchaseModal/index.m.less": function(e, a, t) {
			e.exports = {
				pennyPurchaseModal: "k-X8UWFEwYv7W3xznPKIr"
			}
		},
		"./src/reddit/components/PennyPurchaseModal/index.tsx": function(e, a, t) {
			"use strict";
			t.r(a);
			var s = t("./node_modules/react/index.js"),
				n = t.n(s),
				r = t("./node_modules/react-redux/es/index.js"),
				o = t("./node_modules/reselect/es/index.js"),
				c = t("./src/higherOrderComponents/asModal/index.tsx"),
				d = t("./src/reddit/constants/zIndex.ts"),
				i = t("./src/lib/classNames/index.ts"),
				l = t("./src/reddit/actions/gold/modals.ts"),
				m = t("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				p = t("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts"),
				u = t("./src/reddit/components/TrackingHelper/index.tsx"),
				h = t("./src/reddit/constants/colors.ts"),
				g = t("./src/reddit/helpers/correlationIdTracker.ts"),
				P = t("./src/reddit/helpers/trackers/goldPayment.ts"),
				C = t("./src/reddit/models/User/index.ts"),
				b = t("./src/reddit/selectors/gild.ts"),
				y = t("./src/reddit/selectors/gold/giveAwards.ts"),
				k = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				v = t("./src/reddit/selectors/platform.ts"),
				E = t("./src/reddit/selectors/user.ts"),
				x = t("./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx"),
				w = t("./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx"),
				_ = t("./src/reddit/components/PennyPurchaseModal/index.m.less"),
				f = t.n(_);

			function N() {
				return (N = Object.assign || function(e) {
					for (var a = 1; a < arguments.length; a++) {
						var t = arguments[a];
						for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s])
					}
					return e
				}).apply(this, arguments)
			}
			const M = Object(o.c)({
					activePage: k.o,
					allowNavigationCallback: e => {
						const a = Object(v.a)(e);
						return null === a ? void 0 : a
					},
					coinBalance: E.d,
					gildThingId: k.q,
					isIframed: b.i,
					nightmode: E.S,
					savedCardsPending: k.u,
					selectedAward: y.a,
					selectedPayment: k.b,
					stripeErrorMessage: k.i,
					stripeTokenPending: k.l,
					paypalErrorMessage: k.c,
					userName: e => {
						const a = Object(E.i)(e);
						return "u/".concat(Object(C.e)(a))
					}
				}),
				j = Object(r.b)(M, (e, a) => ({
					closeModal: () => {
						e(Object(p.a)()), e(Object(l.a)())
					},
					loadSavedCards: () => e(Object(m.loadSavedCards)()),
					onPaymentSelected: a => e(Object(m.selectPaymentMethod)(a)),
					dispatchCompletePurchase: (a, t) => {
						e(Object(p.e)(a, t))
					}
				}), (e, a, t) => Object.assign({}, e, a, t, {
					onCompletePurchaseClick: t => a.dispatchCompletePurchase(t, e.isIframed)
				}));
			class O extends n.a.Component {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						const {
							onTryCloseModal: a
						} = this.props;
						if (27 === e.keyCode) return a()
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						gildThingId: e,
						loadSavedCards: a,
						sendEvent: t
					} = this.props;
					a(), Object(g.d)(g.a.GoldPayment, !1), t(Object(P.h)(e))
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
						className: a,
						coinBalance: t,
						gildThingId: s,
						isCompletePaypal: r,
						nightmode: o,
						selectedPayment: c,
						onCompletePurchaseClick: d,
						onPaymentSelected: i,
						onTryCloseModal: l,
						savedCardsPending: m,
						selectedAward: p,
						stripeErrorMessage: u,
						stripeTokenPending: h,
						paypalErrorMessage: g,
						userName: P
					} = this.props;
					return n.a.createElement("div", {
						className: a
					}, "selectPayment" === e && n.a.createElement(w.a, {
						coinBalance: t,
						gildThingId: s,
						nightmode: o,
						onCloseModal: l,
						onCompletePurchaseClick: d,
						onPaymentSelected: i,
						paypalErrorMessage: g,
						savedCardsPending: m,
						selectedAward: p,
						selectedPayment: c,
						stripeErrorMessage: u,
						stripeTokenPending: h,
						userName: P
					}), "paymentCompleted" === e && n.a.createElement(x.a, {
						gildThingId: s,
						isGild: !0,
						isCompletePaypal: r,
						onCloseClick: l,
						userName: P
					}))
				}
			}
			const T = Object(c.a)(O);
			a.default = j(Object(u.c)(class extends n.a.PureComponent {
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
						backgroundColor: h.a.overlayReportFlow
					}, this.props.isIframed ? {
						zIndex: d.a,
						paddingTop: 12,
						paddingBottom: 12
					} : {});
					return n.a.createElement(T, N({}, this.props, {
						className: Object(i.a)(this.props.className, f.a.pennyPurchaseModal),
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						overlayCustomStyles: e,
						withOverlay: !0
					}))
				}
			}))
		}
	}
]);
//# sourceMappingURL=PennyPurchaseModal.3cba6b821d7b04534be3.js.map