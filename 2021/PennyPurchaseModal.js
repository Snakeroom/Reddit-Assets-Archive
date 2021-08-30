// https://www.redditstatic.com/desktop2x/PennyPurchaseModal.4e14b02daa974043045d.js
// Retrieved at 8/30/2021, 12:20:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PennyPurchaseModal"], {
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
					a(Object(m.i)(e)), Object(o.b)()
				}
				render() {
					const e = this.props,
						a = e.isGild && n.fbt._("The transaction is processing and we will let you know when it's done.", null, {
							hk: "JMSWS"
						});
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: h.a.paymentCompleteHeader,
						style: {
							backgroundImage: `url("${c.a.assetPath}/img/gold/coins-hero.jpg")`
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
				o = t("./src/lib/constants/index.ts"),
				i = t("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				d = t("./src/reddit/components/StripePaymentForm/index.tsx"),
				l = t("./src/reddit/helpers/createEmojiText/index.tsx"),
				m = t("./src/lib/classNames/index.ts"),
				p = t("./src/reddit/components/CoinBalance/index.tsx"),
				u = t("./src/reddit/components/TrackingHelper/index.tsx"),
				h = t("./src/reddit/controls/Button/index.tsx"),
				g = t("./src/reddit/helpers/trackers/goldPayment.ts"),
				P = t("./src/config.ts"),
				b = t("./node_modules/react-dom/index.js"),
				C = t.n(b),
				y = t("./node_modules/react-redux/es/index.js"),
				k = t("./node_modules/reselect/es/index.js"),
				x = t("./src/higherOrderComponents/makeAsync.tsx"),
				E = t("./src/reddit/helpers/loadThirdPartyScript.ts"),
				v = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				_ = t("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				f = t("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts");
			const w = Object(k.c)({
				isGild: e => !!Object(v.s)(e)
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
						ReactDOM: C.a
					}), t = {
						sandbox: P.a.paypal.apiKey,
						production: P.a.paypal.apiKey
					};
					return r.a.createElement("div", {
						className: e
					}, r.a.createElement(a, {
						env: P.a.paypal.env,
						client: t,
						style: {
							size: "responsive",
							color: "blue",
							shape: "pill",
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
				createPayment: () => "coinPackage" in a ? e(Object(_.f)(a.coinPackage)) : "awardId" in a ? e(Object(f.d)(a.awardId, a.pennies, a.thingId)) : void 0,
				executePayment: (t, n) => {
					if ("coinPackage" in a) {
						if (t) return void e(Object(_.h)(n, a.coinPackage));
						e(Object(_.g)(n, a.coinPackage))
					} else "awardId" in a && e(Object(f.c)(n))
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
							sendEvent: n,
							stripe: s
						} = this.props;
						s && (n(Object(g.c)(e)), a(s, t))
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
						stripeTokenPending: i
					} = this.props;
					return r.a.createElement("div", {
						className: T.a.purchaseSelectPaymentFooter
					}, r.a.createElement(p.a, {
						className: T.a.balance,
						coinBalance: a
					}), c === o.Fb ? e && e.pennyPrice && t ? r.a.createElement(M, {
						awardId: e.id,
						className: Object(m.a)(T.a.purchaseButton, T.a.paypalCheckoutButton),
						pennies: e.pennyPrice,
						thingId: t
					}) : n && r.a.createElement(M, {
						className: Object(m.a)(T.a.purchaseButton, T.a.paypalCheckoutButton),
						coinPackage: n
					}) : null, c === o.Eb && r.a.createElement(h.i, {
						className: T.a.purchaseButton,
						"data-redditstyle": !0,
						disabled: i || s,
						onClick: this.onCompletePurchaseClick
					}, B._("Complete purchase", null, {
						hk: "3d1QJR"
					})))
				}
			}
			var S = Object(c.injectStripe)(Object(u.c)(I)),
				A = t("./src/reddit/components/ModalStyledComponents/index.tsx"),
				D = t("./src/reddit/icons/fonts/Coin/index.tsx");
			const {
				fbt: F
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var L = e => r.a.createElement("div", {
				className: T.a.purchaseHeader,
				style: {
					backgroundImage: `url("${P.a.assetPath}/img/gold/coins-hero.jpg")`
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
					}, r.a.createElement(A.b, {
						className: Object(m.a)(T.a.closeIcon, T.a.awardPurchase),
						"data-redditstyle": !0
					})))
				},
				H = t("./src/reddit/hooks/useStripe.ts");
			a.a = e => {
				const a = Object(H.a)();
				return r.a.createElement(c.StripeProvider, {
					stripe: a
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
				}, r.a.createElement(i.a, {
					className: T.a.selectPayment,
					gildThingId: e.gildThingId,
					nightmode: e.nightmode,
					selectedPayment: e.selectedPayment,
					onPaymentSelected: e.onPaymentSelected
				}), e.selectedPayment === o.Eb && r.a.createElement(d.a, {
					nightmode: e.nightmode
				}), r.a.createElement("div", {
					className: T.a.checkoutFooter
				}, r.a.createElement("div", {
					className: T.a.purchaseTotal
				}, n.fbt._("Total: {totalAmount}", [n.fbt._param("totalAmount", "$" + ((e.purchasePackage ? e.purchasePackage.pennies : e.selectedAward.pennyPrice || 0) / 100).toLocaleString())], {
					hk: "3dx6W8"
				}))), e.selectedPayment === o.Fb && e.paypalErrorMessage && r.a.createElement("div", {
					className: T.a.errorMessage
				}, e.paypalErrorMessage), e.selectedPayment === o.Eb && e.stripeErrorMessage && r.a.createElement("div", {
					className: T.a.errorMessage
				}, e.stripeErrorMessage), r.a.createElement("div", {
					className: T.a.agreementLink
				}, e.purchasePackage && (e => {
					if (!e.gildThingId || !e.purchasePackage) return null;
					return e.coinBalance + e.purchasePackage.coins - e.selectedAward.coinPrice > 0 ? r.a.createElement(r.a.Fragment, null, n.fbt._("The minimum Coins purchase is {coins} Coins.", [n.fbt._param("coins", e.purchasePackage.coins.toLocaleString())], {
						hk: "3J52WH"
					}), r.a.createElement("br", null)) : null
				})(e), Object(l.a)(n.fbt._("By purchasing Coins and Awards, you agree to the :agreement:.", null, {
					hk: "1eCqza"
				}), {
					":agreement:": r.a.createElement("a", {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.fbt._("Reddit User Agreement", null, {
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
			}
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
			var n = t("./node_modules/react/index.js"),
				s = t.n(n),
				r = t("./src/reddit/controls/Button/index.tsx"),
				c = t("./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less"),
				o = t.n(c);
			const {
				fbt: i
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.a = ({
				buttonText: e,
				onCloseClick: a
			}) => s.a.createElement("div", {
				className: o.a.purchaseFooter
			}, s.a.createElement(r.i, {
				className: o.a.purchaseButton,
				"data-redditstyle": !0,
				onClick: a
			}, e || i._("Done", null, {
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
			var n = t("./node_modules/react/index.js"),
				s = t.n(n),
				r = t("./node_modules/react-redux/es/index.js"),
				c = t("./node_modules/reselect/es/index.js"),
				o = t("./src/higherOrderComponents/asModal/index.tsx"),
				i = t("./src/reddit/constants/zIndex.ts"),
				d = t("./src/lib/classNames/index.ts"),
				l = t("./src/reddit/actions/gold/modals.ts"),
				m = t("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				p = t("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts"),
				u = t("./src/reddit/components/TrackingHelper/index.tsx"),
				h = t("./src/reddit/constants/colors.ts"),
				g = t("./src/reddit/helpers/correlationIdTracker.ts"),
				P = t("./src/reddit/helpers/trackers/goldPayment.ts"),
				b = t("./src/reddit/models/User/index.ts"),
				C = t("./src/reddit/selectors/gild.ts"),
				y = t("./src/reddit/selectors/gold/giveAwards.ts"),
				k = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				x = t("./src/reddit/selectors/platform.ts"),
				E = t("./src/reddit/selectors/user.ts"),
				v = t("./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx"),
				_ = t("./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx"),
				f = t("./src/reddit/components/PennyPurchaseModal/index.m.less"),
				w = t.n(f);

			function j() {
				return (j = Object.assign || function(e) {
					for (var a = 1; a < arguments.length; a++) {
						var t = arguments[a];
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					}
					return e
				}).apply(this, arguments)
			}
			const N = Object(c.c)({
					activePage: k.q,
					allowNavigationCallback: e => {
						const a = Object(x.a)(e);
						return null === a ? void 0 : a
					},
					coinBalance: E.e,
					gildThingId: k.s,
					isIframed: C.g,
					nightmode: E.X,
					savedCardsPending: k.w,
					selectedAward: y.b,
					selectedPayment: k.c,
					stripeErrorMessage: k.j,
					stripeTokenPending: k.m,
					paypalErrorMessage: k.d,
					userName: e => {
						const a = Object(E.k)(e);
						return `u/${Object(b.e)(a)}`
					}
				}),
				M = Object(r.b)(N, (e, a) => ({
					closeModal: () => {
						e(Object(p.a)()), e(Object(l.a)())
					},
					loadSavedCards: () => e(Object(m.loadSavedCards)()),
					onPaymentSelected: a => e(Object(m.selectPaymentMethod)(a)),
					dispatchCompletePurchase: (a, t) => {
						e(Object(p.e)(a, t))
					}
				}), (e, a, t) => ({
					...e,
					...a,
					...t,
					onCompletePurchaseClick: t => a.dispatchCompletePurchase(t, e.isIframed)
				}));
			class O extends s.a.Component {
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
						a(Object(P.f)(e))
					}
				}
				render() {
					const {
						activePage: e,
						className: a,
						coinBalance: t,
						gildThingId: n,
						nightmode: r,
						selectedPayment: c,
						onCompletePurchaseClick: o,
						onPaymentSelected: i,
						onTryCloseModal: d,
						savedCardsPending: l,
						selectedAward: m,
						stripeErrorMessage: p,
						stripeTokenPending: u,
						paypalErrorMessage: h,
						userName: g
					} = this.props;
					return s.a.createElement("div", {
						className: a
					}, "selectPayment" === e && s.a.createElement(_.a, {
						coinBalance: t,
						gildThingId: n,
						nightmode: r,
						onCloseModal: d,
						onCompletePurchaseClick: o,
						onPaymentSelected: i,
						paypalErrorMessage: h,
						savedCardsPending: l,
						selectedAward: m,
						selectedPayment: c,
						stripeErrorMessage: p,
						stripeTokenPending: u,
						userName: g
					}), "paymentCompleted" === e && s.a.createElement(v.a, {
						gildThingId: n,
						isGild: !0,
						onCloseClick: d,
						userName: g
					}))
				}
			}
			const T = Object(o.a)(O);
			a.default = M(Object(u.c)(class extends s.a.PureComponent {
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
					const e = {
						backgroundColor: h.b.overlayReportFlow,
						...this.props.isIframed ? {
							zIndex: i.a,
							paddingTop: 12,
							paddingBottom: 12
						} : {}
					};
					return s.a.createElement(T, j({}, this.props, {
						className: Object(d.a)(this.props.className, w.a.pennyPurchaseModal),
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						overlayCustomStyles: e,
						withOverlay: !0
					}))
				}
			}))
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return r
			}));
			var n = t("./node_modules/react/index.js"),
				s = t.n(n);

			function r(e, a) {
				const t = e.toString().split(":");
				return t.length % 2 == 0 ? e : t.reduce((e, t, n) => (n % 2 == 0 ? e.push(t) : "" === t ? e.push(":") : `:${t}:` in a ? e.push(a[`:${t}:`]) : e.push(`:${t}:`), e), []).map((e, a) => s.a.createElement(s.a.Fragment, {
					key: a
				}, e))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PennyPurchaseModal.4e14b02daa974043045d.js.map