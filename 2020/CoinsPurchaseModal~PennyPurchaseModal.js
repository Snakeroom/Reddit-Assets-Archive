// https://www.redditstatic.com/desktop2x/CoinsPurchaseModal~PennyPurchaseModal.c3cb63386778c619dc7b.js
// Retrieved at 4/2/2020, 2:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CoinsPurchaseModal~PennyPurchaseModal"], {
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
		"./src/reddit/components/CheckoutForm/index.m.less": function(e, a, t) {
			e.exports = {
				formCellWide: "_3WoE3ObhsRzGd3NqoVTQ6D",
				formCell: "_1JGAet5jPDcpg7Tru23HMo",
				cardInput: "_1anVEbF9dn-ObJGVmmlFwL",
				cardInputError: "cNiLkxu8bhSFHcvFVbfAM",
				nameOnCard: "yS2Q83Vi28PL7t1XJExTA",
				errorMessage: "oGQBXeEv9yu4mXmkfKI4Y",
				elementPlaceholder: "_1wqbqqyQ0kPt-0QYCJqWdf"
			}
		},
		"./src/reddit/components/CheckoutForm/index.tsx": function(e, a, t) {
			"use strict";
			var n = t("./node_modules/react/index.js"),
				s = t.n(n),
				r = t("./node_modules/react-redux/es/index.js"),
				o = t("./node_modules/reselect/es/index.js"),
				c = t("./src/lib/classNames/index.ts"),
				i = t("./node_modules/react-stripe-elements/es/index.js"),
				d = t("./src/reddit/i18n/utils.ts"),
				l = t("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				m = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				u = t("./src/reddit/components/CheckoutForm/index.m.less"),
				p = t.n(u);
			const h = Object(o.c)({
					cardCvcValidation: m.f,
					cardExpiryValidation: m.g,
					cardName: m.h,
					cardNumberValidation: m.i,
					nameOnCardValidation: m.k,
					postalCodeValidation: m.l
				}),
				g = Object(r.b)(h, (e, a) => ({
					onCardElementChange: a => e(Object(l.cardElementChange)(a)),
					onNameInput: a => e(Object(l.cardNameInput)({
						cardName: a
					}))
				}));
			class b extends s.a.Component {
				constructor() {
					super(...arguments), this.computedStyle = getComputedStyle(document.body), this.state = {
						cardNumberReady: !1,
						cardExpiryReady: !1,
						cardCVCReady: !1,
						postalCodeReady: !1
					}, this.onChange = e => {
						const a = e.currentTarget.value;
						a !== this.props.cardName && this.props.onNameInput(a)
					}, this.onCardNumberReady = () => this.setState({
						cardNumberReady: !0
					}), this.onCardExpiryReady = () => this.setState({
						cardExpiryReady: !0
					}), this.onCardCVCReady = () => this.setState({
						cardCVCReady: !0
					}), this.onPostalCodeReady = () => this.setState({
						postalCodeReady: !0
					})
				}
				render() {
					const {
						className: e,
						cardCvcValidation: a,
						cardExpiryValidation: t,
						cardName: n,
						cardNumberValidation: r,
						onCardElementChange: o,
						nameOnCardValidation: l,
						postalCodeValidation: m
					} = this.props, {
						cardNumberReady: u,
						cardExpiryReady: h,
						cardCVCReady: g,
						postalCodeReady: b
					} = this.state, C = {
						base: {
							lineHeight: "40px",
							color: this.computedStyle.getPropertyValue("--newRedditTheme-bodyText"),
							"::placeholder": {
								color: this.computedStyle.getPropertyValue("--newRedditTheme-metaText")
							}
						}
					};
					return s.a.createElement("div", {
						className: Object(c.a)(p.a.checkoutForm, e)
					}, s.a.createElement("div", {
						className: p.a.formCellWide
					}, s.a.createElement("input", {
						className: Object(c.a)(p.a.cardInput, p.a.nameOnCard, {
							[p.a.cardInputError]: !!l
						}),
						type: "text",
						placeholder: Object(d.c)("NAME ON CARD"),
						onChange: this.onChange,
						value: n
					})), s.a.createElement("div", {
						className: p.a.formCell
					}, s.a.createElement(i.CardNumberElement, {
						className: Object(c.a)(p.a.cardInput, {
							[p.a.cardInputError]: !!r
						}),
						onChange: o,
						onReady: this.onCardNumberReady,
						placeholder: Object(d.c)("CARD NUMBER"),
						style: C
					}), !u && s.a.createElement("div", {
						className: p.a.elementPlaceholder
					}, Object(d.c)("CARD NUMBER"))), s.a.createElement("div", {
						className: p.a.formCell
					}, s.a.createElement(i.CardExpiryElement, {
						className: Object(c.a)(p.a.cardInput, {
							[p.a.cardInputError]: !!t
						}),
						onChange: o,
						onReady: this.onCardExpiryReady,
						placeholder: Object(d.c)("MM/YY"),
						style: C
					}), !h && s.a.createElement("div", {
						className: p.a.elementPlaceholder
					}, Object(d.c)("MM/YY"))), s.a.createElement("div", {
						className: p.a.formCell
					}, s.a.createElement(i.CardCVCElement, {
						className: Object(c.a)(p.a.cardInput, {
							[p.a.cardInputError]: !!a
						}),
						onChange: o,
						onReady: this.onCardCVCReady,
						placeholder: Object(d.c)("CCV"),
						style: C
					}), !g && s.a.createElement("div", {
						className: p.a.elementPlaceholder
					}, Object(d.c)("CCV"))), s.a.createElement("div", {
						className: p.a.formCell
					}, s.a.createElement(i.PostalCodeElement, {
						className: Object(c.a)(p.a.cardInput, {
							[p.a.cardInputError]: !!m
						}),
						onChange: o,
						onReady: this.onPostalCodeReady,
						placeholder: Object(d.c)("ZIP CODE"),
						style: C
					}), !b && s.a.createElement("div", {
						className: p.a.elementPlaceholder
					}, Object(d.c)("ZIP CODE"))))
				}
			}
			a.a = Object(i.injectStripe)(g(b))
		},
		"./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx": function(e, a, t) {
			"use strict";
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				s = t("./node_modules/react/index.js"),
				r = t.n(s),
				o = t("./src/config.ts"),
				c = t("./src/lib/loadRedditAdsPixel.ts"),
				i = t("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				d = t("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = t("./src/reddit/components/TrackingHelper/index.tsx"),
				m = t("./src/reddit/helpers/trackers/goldPayment.ts"),
				u = t("./src/reddit/icons/fonts/Coin/index.tsx"),
				p = t("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				h = t.n(p);
			class g extends r.a.PureComponent {
				componentDidMount() {
					const {
						gildThingId: e,
						sendEvent: a
					} = this.props;
					a(Object(m.h)(e)), Object(c.b)()
				}
				render() {
					const e = this.props,
						a = e.isGild && e.isCompletePaypal ? n.fbt._("Your transaction has been completed and details have been emailed to you. Navigate to the post or comment and refresh to see the Award.", null, {
							hk: "1o3HIE"
						}) : n.fbt._("The transaction is processing and we will let you know when it's done.", null, {
							hk: "JMSWS"
						});
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: h.a.paymentCompleteHeader,
						style: {
							backgroundImage: 'url("'.concat(o.a.assetPath, '/img/gold/coins-hero.jpg")')
						}
					}, r.a.createElement(u.a, {
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
				o = t("./node_modules/react-stripe-elements/es/index.js"),
				c = t("./src/config.ts"),
				i = t("./src/lib/constants/index.ts"),
				d = t("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				l = t("./node_modules/react-redux/es/index.js"),
				m = t("./node_modules/reselect/es/index.js"),
				u = t("./src/lib/classNames/index.ts"),
				p = t("./src/reddit/components/CheckoutForm/index.tsx"),
				h = t("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				g = t("./src/reddit/i18n/utils.ts"),
				b = t("./src/reddit/components/StripePaymentForm/index.m.less"),
				C = t.n(b);
			var y = e => {
					const {
						onToggleRememberCard: a,
						rememberCard: t
					} = e;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(p.a, {
						className: C.a.creditCard
					}), r.a.createElement(h.a, {
						className: C.a.saveCardCheckbox,
						isSelected: t,
						onClick: a,
						text: Object(g.c)("Remember this card")
					}), r.a.createElement("a", {
						href: "https://stripe.com",
						target: "_blank"
					}, r.a.createElement("img", {
						className: C.a.poweredByStripeIcon,
						src: "".concat(c.a.assetPath, "/img/payment-icons/powered-by-stripe.png")
					})))
				},
				P = (t("./node_modules/core-js/modules/es6.regexp.to-string.js"), t("./src/app/strings/index.ts")),
				v = t("./src/reddit/i18n/components.tsx"),
				k = t("./src/reddit/icons/svgs/Trash2/index.tsx");
			const f = e => 2 === e.length ? e : "0" + e,
				w = e => {
					switch (e.toLowerCase()) {
						case "visa":
							return "".concat(c.a.assetPath, "/img/payment-icons/visa.png");
						case "mastercard":
							return "".concat(c.a.assetPath, "/img/payment-icons/mastercard.png");
						case "discover":
							return "".concat(c.a.assetPath, "/img/payment-icons/discover.jpg");
						case "american express":
							return "".concat(c.a.assetPath, "/img/payment-icons/amex.png");
						default:
							return null
					}
				};
			class x extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						showConfirmText: !1
					}, this.onTrashCanClick = e => {
						e.preventDefault(), this.setState({
							showConfirmText: !0
						})
					}, this.onConfirmClick = e => {
						e.preventDefault();
						const {
							onDelete: a,
							savedCard: t
						} = this.props;
						a(t.cardId)
					}
				}
				render() {
					const {
						language: e,
						savedCard: a
					} = this.props, t = w(a.brand);
					return r.a.createElement("label", {
						className: C.a.savedCardContainer
					}, r.a.createElement("input", {
						type: "radio",
						name: "use-saved-card",
						checked: !0,
						readOnly: !0
					}), r.a.createElement("div", {
						className: Object(u.a)(C.a.cardImageContainer, {
							[C.a.cardImageContainerNightmode]: this.props.nightmode
						})
					}, t ? r.a.createElement("img", {
						className: C.a.brandImage,
						src: t
					}) : r.a.createElement("span", {
						className: C.a.unknownCC
					}, "CC")), r.a.createElement("div", {
						className: C.a.cardDetails
					}, r.a.createElement("span", null, Object(P.a)(e, "gold.checkoutForm.cardEndingIn", {
						last4: a.last4
					})), r.a.createElement("span", {
						className: C.a.expiry
					}, Object(P.a)(e, "gold.checkoutForm.cardExpiry", {
						month: f(a.expirationMonth.toString()),
						year: a.expirationYear.toString()
					}))), this.state.showConfirmText ? r.a.createElement("button", {
						className: C.a.confirmText,
						onClick: this.onConfirmClick
					}, r.a.createElement(v.c, null, "Confirm")) : r.a.createElement("button", {
						onClick: this.onTrashCanClick
					}, r.a.createElement(k.b, {
						className: C.a.icon
					})))
				}
			}
			var E = x,
				_ = t("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				N = t("./src/reddit/controls/LoadingIcon/index.tsx"),
				j = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				O = t("./src/reddit/selectors/user.ts");
			const I = Object(m.c)({
				language: O.O,
				rememberCard: j.s,
				savedCard: e => Object(j.u)(e)[0],
				stripeInfoLoading: j.t
			});
			class M extends r.a.PureComponent {
				render() {
					const {
						className: e,
						language: a,
						nightmode: t,
						onClickDeleteCard: n,
						onToggleRememberCard: s,
						rememberCard: o,
						savedCard: c,
						stripeInfoLoading: i
					} = this.props, d = i, l = !d && c, m = !d && !l, p = d ? C.a.loadingState : l ? C.a.savedCardState : C.a.formState;
					return r.a.createElement("div", {
						className: Object(u.a)(C.a.stripePaymentForm, p, e)
					}, d && r.a.createElement(N.a, {
						className: C.a.loader,
						sizePx: 60
					}), l && c && r.a.createElement("form", null, r.a.createElement(E, {
						language: a,
						nightmode: t,
						onDelete: n,
						savedCard: c
					})), m && r.a.createElement(y, {
						onToggleRememberCard: s,
						rememberCard: o
					}))
				}
			}
			var S = Object(l.b)(I, (e, a) => ({
					onClickDeleteCard: a => e(Object(_.deleteSavedCard)(a)),
					onToggleRememberCard: () => e(Object(_.toggleRememberCard)())
				}))(M),
				T = t("./src/reddit/helpers/createEmojiText/index.tsx"),
				R = t("./src/reddit/components/CoinBalance/index.tsx"),
				A = t("./src/reddit/components/TrackingHelper/index.tsx"),
				B = t("./src/reddit/controls/Button/index.tsx"),
				D = t("./src/reddit/helpers/trackers/goldPayment.ts"),
				G = t("./node_modules/react-dom/index.js"),
				F = t.n(G),
				V = t("./src/higherOrderComponents/makeAsync.tsx"),
				H = t("./src/reddit/helpers/loadThirdPartyScript.ts"),
				L = t("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				W = t("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts");
			const Y = Object(m.c)({
				isGild: e => !!Object(j.q)(e)
			});
			class Q extends r.a.Component {
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
						ReactDOM: F.a
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
			const q = Object(l.b)(Y, (e, a) => ({
				createPayment: () => "coinPackage" in a ? e(Object(L.h)(a.coinPackage)) : "awardId" in a ? e(Object(W.g)(a.awardId, a.pennies, a.thingId)) : void 0,
				executePayment: (t, n) => {
					if ("coinPackage" in a) {
						if (t) return void e(Object(L.j)(n, a.coinPackage));
						e(Object(L.i)(n, a.coinPackage))
					} else "awardId" in a && e(Object(W.f)(n))
				}
			}))(Q);
			var Z = Object(V.a)({
					getComponent: () => Object(H.b)().then(() => q),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				J = t("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				X = t.n(J);
			const {
				fbt: z
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			class K extends r.a.Component {
				constructor() {
					super(...arguments), this.onCompletePurchaseClick = () => {
						const {
							gildThingId: e,
							onCompletePurchaseClick: a,
							purchasePackage: t,
							sendEvent: n,
							stripe: s
						} = this.props;
						s && (n(Object(D.b)(e)), a(s, t))
					}
				}
				render() {
					const {
						award: e,
						coinBalance: a,
						gildThingId: t,
						purchasePackage: n,
						savedCardsPending: s,
						selectedPayment: o,
						stripeTokenPending: c
					} = this.props;
					return r.a.createElement("div", {
						className: X.a.purchaseSelectPaymentFooter
					}, r.a.createElement(R.a, {
						className: X.a.balance,
						coinBalance: a
					}), o === i.wb ? e && e.pennyPrice && t ? r.a.createElement(Z, {
						awardId: e.id,
						className: Object(u.a)(X.a.purchaseButton, X.a.paypalCheckoutButton),
						pennies: e.pennyPrice,
						thingId: t
					}) : n && r.a.createElement(Z, {
						className: Object(u.a)(X.a.purchaseButton, X.a.paypalCheckoutButton),
						coinPackage: n
					}) : null, o === i.vb && r.a.createElement(B.f, {
						className: X.a.purchaseButton,
						"data-redditstyle": !0,
						disabled: c || s,
						onClick: this.onCompletePurchaseClick
					}, z._("Complete purchase", null, {
						hk: "3d1QJR"
					})))
				}
			}
			var U = Object(o.injectStripe)(Object(A.c)(K)),
				$ = t("./src/reddit/components/ModalStyledComponents/index.tsx"),
				ee = t("./src/reddit/icons/fonts/Coin/index.tsx");
			const {
				fbt: ae
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var te = e => r.a.createElement("div", {
				className: X.a.purchaseHeader,
				style: {
					backgroundImage: 'url("'.concat(c.a.assetPath, '/img/gold/coins-hero.jpg")')
				}
			}, r.a.createElement(ee.a, {
				className: X.a.coinIcon
			}), r.a.createElement("div", {
				className: X.a.titleMain
			}, ae._("Buy {amount} Coins!", [ae._param("amount", e.purchasePackage.coins.toLocaleString())], {
				hk: "3E2DWq"
			})), r.a.createElement("div", {
				className: X.a.titleDescription
			}, ae._("You're purchasing Coins for yourself, {userName}!", [ae._param("userName", e.userName)], {
				hk: "ZGCBt"
			})), r.a.createElement("img", {
				className: X.a.goldPackage,
				src: e.purchasePackage.images.purchaseSuccess["3x"].url,
				style: {
					backgroundImage: 'url("'.concat(c.a.assetPath, '/img/gold/coins-package-bg.jpg")')
				}
			}), r.a.createElement("button", {
				className: X.a.closeButton,
				onClick: e.onCloseClick
			}, r.a.createElement($.b, {
				className: X.a.closeIcon,
				"data-redditstyle": !0
			})));
			var ne = e => {
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
					className: X.a.purchaseGildHeader
				}, r.a.createElement("div", {
					className: X.a.awardTitle
				}, n.fbt._("Give the {awardName} Award", [n.fbt._param("awardName", e.award.name)], {
					hk: "28iR3j"
				})), r.a.createElement("div", {
					className: X.a.awardTitleDescription
				}, a.join(" ")), r.a.createElement("img", {
					className: X.a.awardIcon,
					src: e.award.icon.url
				}), r.a.createElement("button", {
					className: X.a.closeButton,
					onClick: e.onCloseClick
				}, r.a.createElement($.b, {
					className: Object(u.a)(X.a.closeIcon, X.a.awardPurchase),
					"data-redditstyle": !0
				})))
			};
			a.a = e => r.a.createElement(o.StripeProvider, {
				apiKey: c.a.stripe.apiKey
			}, r.a.createElement(o.Elements, null, r.a.createElement(r.a.Fragment, null, e.gildThingId ? r.a.createElement(ne, {
				coinBalance: e.coinBalance,
				award: e.selectedAward,
				purchasePackage: e.purchasePackage,
				userName: e.userName,
				onCloseClick: e.onCloseModal
			}) : e.purchasePackage && r.a.createElement(te, {
				coinBalance: e.coinBalance,
				purchasePackage: e.purchasePackage,
				userName: e.userName,
				onCloseClick: e.onCloseModal
			}), r.a.createElement("div", {
				className: X.a.purchaseBody
			}, r.a.createElement(d.a, {
				className: X.a.selectPayment,
				gildThingId: e.gildThingId,
				nightmode: e.nightmode,
				selectedPayment: e.selectedPayment,
				onPaymentSelected: e.onPaymentSelected
			}), e.selectedPayment === i.vb && r.a.createElement(S, {
				nightmode: e.nightmode
			}), r.a.createElement("div", {
				className: X.a.checkoutFooter
			}, r.a.createElement("div", {
				className: X.a.purchaseTotal
			}, n.fbt._("Total: {totalAmount}", [n.fbt._param("totalAmount", "$" + ((e.purchasePackage ? e.purchasePackage.pennies : e.selectedAward.pennyPrice || 0) / 100).toLocaleString())], {
				hk: "3dx6W8"
			}))), e.selectedPayment === i.wb && e.paypalErrorMessage && r.a.createElement("div", {
				className: X.a.errorMessage
			}, e.paypalErrorMessage), e.selectedPayment === i.vb && e.stripeErrorMessage && r.a.createElement("div", {
				className: X.a.errorMessage
			}, e.stripeErrorMessage), r.a.createElement("div", {
				className: X.a.agreementLink
			}, e.purchasePackage && (e => {
				if (!e.gildThingId || !e.purchasePackage) return null;
				return e.coinBalance + e.purchasePackage.coins - e.selectedAward.coinPrice > 0 ? r.a.createElement(r.a.Fragment, null, n.fbt._("The minimum Coins purchase is {coins} Coins.", [n.fbt._param("coins", e.purchasePackage.coins.toLocaleString())], {
					hk: "3J52WH"
				}), r.a.createElement("br", null)) : null
			})(e), Object(T.a)(n.fbt._("By purchasing Coins and Awards, you agree to the :agreement:.", null, {
				hk: "1eCqza"
			}), {
				":agreement:": r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank"
				}, n.fbt._("Reddit User Agreement", null, {
					hk: "11z9fY"
				}))
			}))), r.a.createElement(U, {
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
			var n = t("./node_modules/react/index.js"),
				s = t.n(n),
				r = t("./src/reddit/controls/Button/index.tsx"),
				o = t("./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less"),
				c = t.n(o);
			const {
				fbt: i
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.a = e => s.a.createElement("div", {
				className: c.a.purchaseFooter
			}, s.a.createElement(r.f, {
				className: c.a.purchaseButton,
				"data-redditstyle": !0,
				onClick: e.onCloseClick
			}, i._("Done", null, {
				hk: "3s1bT9"
			})))
		},
		"./src/reddit/components/PaymentMethodSelector/index.m.less": function(e, a, t) {
			e.exports = {
				paymentOption: "cc9iRBOTxZHHCpcEduRmM",
				paymentOptionContent: "_1EqrH-JzLp3XTA4g36WIrt",
				isNightmode: "_1j5SaVBaG6I__sQRpYS4-I",
				paymentMethodIcon: "_3h70jT0m-MFJMB5LtPpDF5"
			}
		},
		"./src/reddit/components/PaymentMethodSelector/index.tsx": function(e, a, t) {
			"use strict";
			var n = t("./src/config.ts"),
				s = t("./node_modules/react/index.js"),
				r = t.n(s),
				o = t("./src/lib/classNames/index.ts"),
				c = t("./src/reddit/components/TrackingHelper/index.tsx"),
				i = t("./src/reddit/helpers/trackers/goldPayment.ts"),
				d = t("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				l = t.n(d);
			const m = e => r.a.createElement("label", {
				className: Object(o.a)(e.className, l.a.paymentOption)
			}, r.a.createElement("input", {
				type: "radio",
				id: e.value,
				name: "payment-option",
				value: e.value,
				checked: e.selectedValue === e.value,
				onChange: e.onChange
			}), r.a.createElement("div", {
				className: Object(o.a)(l.a.paymentOptionContent, {
					[l.a.isNightmode]: e.nightmode
				})
			}, e.children));
			class u extends r.a.Component {
				constructor() {
					super(...arguments), this.onPaymentSelected = e => {
						const a = e.target.value,
							{
								gildThingId: t,
								onPaymentSelected: n,
								sendEvent: s
							} = this.props;
						switch (a) {
							case "creditCard":
								s(Object(i.d)(t));
								break;
							case "paypal":
								s(Object(i.e)(t))
						}
						return n(a)
					}
				}
				render() {
					const {
						className: e,
						nightmode: a,
						selectedPayment: t
					} = this.props;
					return r.a.createElement("form", {
						className: e
					}, r.a.createElement("fieldset", null, r.a.createElement(m, {
						nightmode: a,
						selectedValue: t,
						onChange: this.onPaymentSelected,
						value: "paypal"
					}, r.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(n.a.assetPath, "/img/payment-icons/paypal.png)")
						}
					})), r.a.createElement(m, {
						nightmode: a,
						selectedValue: t,
						onChange: this.onPaymentSelected,
						value: "creditCard"
					}, r.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(n.a.assetPath, "/img/payment-icons/visa.png)")
						}
					}), r.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(n.a.assetPath, "/img/payment-icons/mastercard.png)")
						}
					}), r.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(n.a.assetPath, "/img/payment-icons/amex.png)")
						}
					}), r.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(n.a.assetPath, "/img/payment-icons/discover.jpg)")
						}
					}))))
				}
			}
			a.a = Object(c.c)(u)
		},
		"./src/reddit/components/StripePaymentForm/index.m.less": function(e, a, t) {
			e.exports = {
				stripePaymentForm: "_3C3Y0w8uwHP67Nd1zwnetc",
				loadingState: "_1s3l8V8wj-crcjY0qsjkQU",
				savedCardState: "_2G3lMKSaxL8NOzpScQZBXf",
				formState: "_3J9W7a4Xz1X7U1aHZnU68_",
				loader: "_22vTMYASXxqNDPunA2LpXa",
				creditCard: "oqvB7OMBlijvKe8ysqodq",
				saveCardCheckbox: "_2uwrJlaChG36r0DkfvHnki",
				poweredByStripeIcon: "_3uwtIFjWV8xl7_GvDbFCMJ",
				savedCardContainer: "_2MPjzw57JoobRxPmlu8OCb",
				cardImageContainer: "_2UfEtRBZKGHh61YQvN-wG5",
				cardImageContainerNightmode: "_28ZdrJfYvnuJaXkQVMVOGq",
				brandImage: "_2mqcWSE8aspsp1q2xC8qBu",
				unknownCC: "_2tXz9uqxu-ZiBFsHmFWdV6",
				unknownCc: "_2tXz9uqxu-ZiBFsHmFWdV6",
				cardDetails: "_34-t7dxtgTqGxiuyP72aPD",
				expiry: "_2Qg2CXB4yQiIH6KZrB9lRT",
				icon: "_1pvlE-J4rOcSVpJdWYQAm-",
				confirmText: "_3_csWXQHhia1pXrA9w9OLK"
			}
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return b
			})), t.d(a, "e", (function() {
				return C
			})), t.d(a, "c", (function() {
				return y
			})), t.d(a, "d", (function() {
				return P
			})), t.d(a, "b", (function() {
				return v
			})), t.d(a, "f", (function() {
				return k
			})), t.d(a, "g", (function() {
				return f
			})), t.d(a, "h", (function() {
				return w
			}));
			var n = t("./src/lib/constants/index.ts"),
				s = t("./src/reddit/models/Gold/Coins/index.ts"),
				r = t("./src/reddit/selectors/gold/giveAwards.ts"),
				o = t("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				c = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				i = t("./src/reddit/selectors/platform.ts"),
				d = t("./src/reddit/selectors/telemetry.ts"),
				l = t("./src/telemetry/models/GoldPurchase.ts"),
				m = t("./src/telemetry/models/Payment.ts"),
				u = t("./src/reddit/helpers/trackers/gild.ts"),
				p = t("./src/reddit/helpers/correlationIdTracker.ts"),
				h = t("./src/reddit/helpers/isComment.ts");
			const g = (e, a) => {
					const t = r.a(e),
						i = t ? Object(u.getAwardTypeFromAward)(t) : null,
						m = a ? i : c.o(e) ? l.Premium : l.Coins,
						g = a ? Object(h.a)(a) ? "comment" : "post" : void 0,
						b = c.b(e),
						C = Object(o.b)(e),
						y = Object(s.b)(b, C, !!a);
					return Object.assign({}, d.defaults(e), {
						comment: a ? d.comment(e, a) : null,
						correlationId: Object(p.c)(p.a.GoldPayment),
						post: a ? d.post(e, a) : null,
						screen: d.screen(e),
						subreddit: a ? d.subreddit(e) : null,
						goldPurchase: Object.assign({}, t ? {
							awardId: t.id,
							awardName: t.name,
							numberCoinsToRecipient: t.coinReward
						} : null, {
							type: m,
							gildedContent: !!a,
							contentType: g,
							numberCoins: y ? y.coins : void 0
						}),
						payment: {
							currency: "USD",
							amountInSmallestDenom: m === l.Premium ? n.nb : y ? y.pennies : void 0
						}
					})
				},
				b = e => a => Object.assign({}, g(a, e), {
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				C = e => a => Object.assign({}, g(a, e), {
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				y = e => a => Object.assign({}, g(a, e), {
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				P = e => a => Object.assign({}, g(a, e), {
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				v = e => a => Object.assign({}, g(a, e), {
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				k = e => a => Object.assign({}, g(a, e), {
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				f = e => a => {
					const t = g(a, e);
					return Object.assign({}, t, {
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: Object.assign({}, t.payment, {
							defaultOption: m.PaymentMethod.Paypal
						}),
						goldPurchase: Object.assign({}, t.goldPurchase, {
							source: e ? l.GiveGold : c.o(a) ? l.PremiumMarketing : l.CoinsMarketing
						})
					})
				},
				w = e => a => {
					const t = g(a, e);
					return Object.assign({}, t, {
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: Object.assign({}, t.payment, {
							method: Object(i.b)(a).queryParams.thanks ? m.PaymentMethod.Paypal : m.PaymentMethod.CreditCard
						})
					})
				}
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, a, t) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return i
			}));
			var n = t("./node_modules/react/index.js"),
				s = t.n(n),
				r = t("./src/lib/classNames/index.ts"),
				o = t("./src/reddit/icons/svgs/Trash2/index.m.less"),
				c = t.n(o);
			const i = e => s.a.createElement("svg", {
				className: Object(r.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), s.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			a.b = i
		},
		"./src/reddit/models/Gold/Coins/index.ts": function(e, a, t) {
			"use strict";
			t.d(a, "b", (function() {
				return s
			})), t.d(a, "a", (function() {
				return r
			}));
			var n = t("./node_modules/fbt/lib/FbtPublic.js");
			const s = (e, a, t) => {
					let n = null;
					for (const s of a) {
						const a = n ? n.coins : 1 / 0,
							r = s.coins;
						if (r >= e && r < a) {
							if (t && s.coins < 1e3) continue;
							n = s
						}
					}
					return n
				},
				r = [{
					prompt: () => n.fbt._("What are Coins?", null, {
						hk: "1wU35D"
					}),
					answer: () => n.fbt._("Coins are our virtual good, and you can use them to award exceptional posts or comments, giving them Silver, Gold, or Platinum. We'll be adding cool new ways to spend your Coins in the future.", null, {
						hk: "4Wf9n"
					})
				}, {
					prompt: () => n.fbt._('What is "Give Award"?', null, {
						hk: "Q08fJ"
					}),
					answer: () => n.fbt._('Giving an Award, or "gilding", is a way to show appreciation for an exceptional contribution to Reddit. You can award someone by clicking on "Give Award" below their post or comment. This distinguishes it with an Award for all to see, and some even grant the honoree special bonus benefits.', null, {
						hk: "4fZWQ3"
					})
				}, {
					prompt: () => n.fbt._("What are these new Award types?", null, {
						hk: "2ysK1l"
					}),
					answer: () => n.fbt._("There are now several ways to Give Awards. A Silver Award requires 100 Coins, which simply marks a post or comment with a Silver Award icon. A classic Gold Award requires 500 Coins and gives the recipient a week of Reddit Premium membership and 100 Coins. Finally, the ultra rare Platinum Award costs 1800 Coins, and gives the recipient with one month of Reddit Premium membership, which includes 700 Coins for that month.", null, {
						hk: "sPegC"
					})
				}, {
					prompt: () => n.fbt._("I bought Coins, how can I tell how many I have?", null, {
						hk: "VVChk"
					}),
					answer: () => n.fbt._("If you buy Coins you will always have a balance associated with your Reddit account. You can view your balance on the top navigation bar by your username.", null, {
						hk: "1ZHMGy"
					})
				}, {
					prompt: () => n.fbt._("Can I transfer Coins between Reddit accounts?", null, {
						hk: "1VS4Gc"
					}),
					answer: () => n.fbt._("You cannot transfer your Reddit Coin balance across usernames, sorry. You can offer a Gold Award to other users which will grant them 100 Coins.", null, {
						hk: "46q9mb"
					})
				}, {
					prompt: () => n.fbt._("Can I get Coins for free?", null, {
						hk: "2Qzs1G"
					}),
					answer: () => n.fbt._("We may give away Coins on special occasions. Stay tuned!", null, {
						hk: "30yIpE"
					})
				}, {
					prompt: () => n.fbt._("What happened to Creddits? Do those still exist?", null, {
						hk: "qTu5W"
					}),
					answer: () => n.fbt._("Yes, Creddits are simply called \"Coins\" now, and we've converted any existing balance at a generous exchange rate of one Creddit to 2000 Coins. That's double their original monetary value as a thank you for supporting us early. Use them to award exceptional posts and comments you come across. Thanks again for your contribution to the Reddit community.", null, {
						hk: "3ZI3ct"
					})
				}, {
					prompt: () => n.fbt._("I thought Gold was the name of Reddit's subscription membership?", null, {
						hk: "26YDse"
					}),
					answer: () => n.fbt._('You\'re correct, it used to also be the name of the subscription membership. However, many people confused the subscription "Reddit Gold" membership with a virtual good or coin. To make things easier to understand, we\'ve renamed the membership to "Reddit Premium", while our virtual good is called "Coins".', null, {
						hk: "FjaSU"
					})
				}]
		}
	}
]);
//# sourceMappingURL=CoinsPurchaseModal~PennyPurchaseModal.c3cb63386778c619dc7b.js.map