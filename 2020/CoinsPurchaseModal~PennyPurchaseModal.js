// https://www.redditstatic.com/desktop2x/CoinsPurchaseModal~PennyPurchaseModal.a432ec00254de06ab028.js
// Retrieved at 5/14/2020, 1:40:05 PM by Reddit Dataminer v1.0.0
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
			t("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				s = t("./node_modules/react/index.js"),
				r = t.n(s),
				c = t("./node_modules/react-redux/es/index.js"),
				o = t("./node_modules/reselect/es/index.js"),
				d = t("./src/lib/classNames/index.ts"),
				i = t("./node_modules/react-stripe-elements/es/index.js"),
				l = t("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				m = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				u = t("./src/reddit/components/CheckoutForm/index.m.less"),
				p = t.n(u);
			const h = Object(o.c)({
					cardCvcValidation: m.e,
					cardExpiryValidation: m.f,
					cardName: m.g,
					cardNumberValidation: m.h,
					nameOnCardValidation: m.j,
					postalCodeValidation: m.k
				}),
				g = Object(c.b)(h, (e, a) => ({
					onCardElementChange: a => e(Object(l.cardElementChange)(a)),
					onNameInput: a => e(Object(l.cardNameInput)({
						cardName: a
					}))
				}));
			class C extends r.a.Component {
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
						cardName: s,
						cardNumberValidation: c,
						onCardElementChange: o,
						nameOnCardValidation: l,
						postalCodeValidation: m
					} = this.props, {
						cardNumberReady: u,
						cardExpiryReady: h,
						cardCVCReady: g,
						postalCodeReady: C
					} = this.state, b = {
						base: {
							lineHeight: "40px",
							color: this.computedStyle.getPropertyValue("--newRedditTheme-bodyText"),
							"::placeholder": {
								color: this.computedStyle.getPropertyValue("--newRedditTheme-metaText")
							}
						}
					};
					return r.a.createElement("div", {
						className: Object(d.a)(p.a.checkoutForm, e)
					}, r.a.createElement("div", {
						className: p.a.formCellWide
					}, r.a.createElement("input", {
						className: Object(d.a)(p.a.cardInput, p.a.nameOnCard, {
							[p.a.cardInputError]: !!l
						}),
						type: "text",
						placeholder: n.fbt._("NAME ON CARD", null, {
							hk: "IgrlQ"
						}).toString(),
						onChange: this.onChange,
						value: s
					})), r.a.createElement("div", {
						className: p.a.formCell
					}, r.a.createElement(i.CardNumberElement, {
						className: Object(d.a)(p.a.cardInput, {
							[p.a.cardInputError]: !!c
						}),
						onChange: o,
						onReady: this.onCardNumberReady,
						placeholder: n.fbt._("CARD NUMBER", null, {
							hk: "3pqMxG"
						}).toString(),
						style: b
					}), !u && r.a.createElement("div", {
						className: p.a.elementPlaceholder
					}, n.fbt._("CARD NUMBER", null, {
						hk: "3pqMxG"
					}))), r.a.createElement("div", {
						className: p.a.formCell
					}, r.a.createElement(i.CardExpiryElement, {
						className: Object(d.a)(p.a.cardInput, {
							[p.a.cardInputError]: !!t
						}),
						onChange: o,
						onReady: this.onCardExpiryReady,
						placeholder: n.fbt._("MM/YY", null, {
							hk: "Hou17"
						}).toString(),
						style: b
					}), !h && r.a.createElement("div", {
						className: p.a.elementPlaceholder
					}, n.fbt._("MM/YY", null, {
						hk: "Hou17"
					}))), r.a.createElement("div", {
						className: p.a.formCell
					}, r.a.createElement(i.CardCVCElement, {
						className: Object(d.a)(p.a.cardInput, {
							[p.a.cardInputError]: !!a
						}),
						onChange: o,
						onReady: this.onCardCVCReady,
						placeholder: n.fbt._("CCV", null, {
							hk: "dZzZJ"
						}).toString(),
						style: b
					}), !g && r.a.createElement("div", {
						className: p.a.elementPlaceholder
					}, n.fbt._("CCV", null, {
						hk: "dZzZJ"
					}))), r.a.createElement("div", {
						className: p.a.formCell
					}, r.a.createElement(i.PostalCodeElement, {
						className: Object(d.a)(p.a.cardInput, {
							[p.a.cardInputError]: !!m
						}),
						onChange: o,
						onReady: this.onPostalCodeReady,
						placeholder: n.fbt._("ZIP CODE", null, {
							hk: "2lJZ4j"
						}).toString(),
						style: b
					}), !C && r.a.createElement("div", {
						className: p.a.elementPlaceholder
					}, n.fbt._("ZIP CODE", null, {
						hk: "2lJZ4j"
					}))))
				}
			}
			a.a = Object(i.injectStripe)(g(C))
		},
		"./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx": function(e, a, t) {
			"use strict";
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				s = t("./node_modules/react/index.js"),
				r = t.n(s),
				c = t("./src/config.ts"),
				o = t("./src/lib/loadRedditAdsPixel.ts"),
				d = t("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				i = t("./src/reddit/components/ModalStyledComponents/index.tsx"),
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
					a(Object(m.i)(e)), Object(o.b)()
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
							backgroundImage: 'url("'.concat(c.a.assetPath, '/img/gold/coins-hero.jpg")')
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
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				s = t("./node_modules/react/index.js"),
				r = t.n(s),
				c = t("./node_modules/react-stripe-elements/es/index.js"),
				o = t("./src/config.ts"),
				d = t("./src/lib/constants/index.ts"),
				i = t("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				l = t("./node_modules/react-redux/es/index.js"),
				m = t("./node_modules/reselect/es/index.js"),
				u = t("./src/lib/classNames/index.ts"),
				p = t("./src/reddit/components/CheckoutForm/index.tsx"),
				h = t("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				g = t("./src/reddit/components/StripePaymentForm/index.m.less"),
				C = t.n(g);
			var b = e => {
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
						text: n.fbt._("Remember this card", null, {
							hk: "2arVov"
						})
					}), r.a.createElement("a", {
						href: "https://stripe.com",
						target: "_blank"
					}, r.a.createElement("img", {
						className: C.a.poweredByStripeIcon,
						src: "".concat(o.a.assetPath, "/img/payment-icons/powered-by-stripe.png")
					})))
				},
				y = (t("./node_modules/core-js/modules/es6.regexp.to-string.js"), t("./src/reddit/icons/svgs/Trash2/index.tsx"));
			const {
				fbt: P
			} = t("./node_modules/fbt/lib/FbtPublic.js"), _ = e => 2 === e.length ? e : "0" + e, k = e => {
				switch (e.toLowerCase()) {
					case "visa":
						return "".concat(o.a.assetPath, "/img/payment-icons/visa.png");
					case "mastercard":
						return "".concat(o.a.assetPath, "/img/payment-icons/mastercard.png");
					case "discover":
						return "".concat(o.a.assetPath, "/img/payment-icons/discover.jpg");
					case "american express":
						return "".concat(o.a.assetPath, "/img/payment-icons/amex.png");
					default:
						return null
				}
			};
			class v extends r.a.PureComponent {
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
						savedCard: e
					} = this.props, a = k(e.brand);
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
					}, a ? r.a.createElement("img", {
						className: C.a.brandImage,
						src: a
					}) : r.a.createElement("span", {
						className: C.a.unknownCC
					}, "CC")), r.a.createElement("div", {
						className: C.a.cardDetails
					}, r.a.createElement("span", null, P._("Card ending in {Credit Card last four digits}", [P._param("Credit Card last four digits", e.last4)], {
						hk: "3dMxMn"
					})), r.a.createElement("span", {
						className: C.a.expiry
					}, P._("Expires {month} / {year}", [P._param("month", _(e.expirationMonth.toString())), P._param("year", e.expirationYear.toString())], {
						hk: "3iXzVI"
					}))), this.state.showConfirmText ? r.a.createElement("button", {
						className: C.a.confirmText,
						onClick: this.onConfirmClick
					}, P._("Confirm", null, {
						hk: "gFhpD"
					})) : r.a.createElement("button", {
						onClick: this.onTrashCanClick
					}, r.a.createElement(y.b, {
						className: C.a.icon
					})))
				}
			}
			var x = v,
				E = t("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				f = t("./src/reddit/controls/LoadingIcon/index.tsx"),
				N = t("./src/reddit/selectors/goldPurchaseModals.ts");
			const j = Object(m.c)({
				rememberCard: N.s,
				savedCard: e => Object(N.u)(e)[0],
				stripeInfoLoading: N.t
			});
			class w extends r.a.PureComponent {
				render() {
					const {
						className: e,
						nightmode: a,
						onClickDeleteCard: t,
						onToggleRememberCard: n,
						rememberCard: s,
						savedCard: c,
						stripeInfoLoading: o
					} = this.props, d = o, i = !d && c, l = !d && !i, m = d ? C.a.loadingState : i ? C.a.savedCardState : C.a.formState;
					return r.a.createElement("div", {
						className: Object(u.a)(C.a.stripePaymentForm, m, e)
					}, d && r.a.createElement(f.a, {
						className: C.a.loader,
						sizePx: 60
					}), i && c && r.a.createElement("form", null, r.a.createElement(x, {
						nightmode: a,
						onDelete: t,
						savedCard: c
					})), l && r.a.createElement(b, {
						onToggleRememberCard: n,
						rememberCard: s
					}))
				}
			}
			var O = Object(l.b)(j, (e, a) => ({
					onClickDeleteCard: a => e(Object(E.deleteSavedCard)(a)),
					onToggleRememberCard: () => e(Object(E.toggleRememberCard)())
				}))(w),
				I = t("./src/reddit/helpers/createEmojiText/index.tsx"),
				M = t("./src/reddit/components/CoinBalance/index.tsx"),
				S = t("./src/reddit/components/TrackingHelper/index.tsx"),
				T = t("./src/reddit/controls/Button/index.tsx"),
				R = t("./src/reddit/helpers/trackers/goldPayment.ts"),
				B = t("./node_modules/react-dom/index.js"),
				A = t.n(B),
				D = t("./src/higherOrderComponents/makeAsync.tsx"),
				F = t("./src/reddit/helpers/loadThirdPartyScript.ts"),
				V = t("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				H = t("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts");
			const G = Object(m.c)({
				isGild: e => !!Object(N.p)(e)
			});
			class L extends r.a.Component {
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
						ReactDOM: A.a
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
			const Z = Object(l.b)(G, (e, a) => ({
				createPayment: () => "coinPackage" in a ? e(Object(V.i)(a.coinPackage)) : "awardId" in a ? e(Object(H.g)(a.awardId, a.pennies, a.thingId)) : void 0,
				executePayment: (t, n) => {
					if ("coinPackage" in a) {
						if (t) return void e(Object(V.k)(n, a.coinPackage));
						e(Object(V.j)(n, a.coinPackage))
					} else "awardId" in a && e(Object(H.f)(n))
				}
			}))(L);
			var Q = Object(D.a)({
					getComponent: () => Object(F.b)().then(() => Z),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				q = t("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				J = t.n(q);
			const {
				fbt: W
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			class X extends r.a.Component {
				constructor() {
					super(...arguments), this.onCompletePurchaseClick = () => {
						const {
							gildThingId: e,
							onCompletePurchaseClick: a,
							purchasePackage: t,
							sendEvent: n,
							stripe: s
						} = this.props;
						s && (n(Object(R.c)(e)), a(s, t))
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
						className: J.a.purchaseSelectPaymentFooter
					}, r.a.createElement(M.a, {
						className: J.a.balance,
						coinBalance: a
					}), c === d.ub ? e && e.pennyPrice && t ? r.a.createElement(Q, {
						awardId: e.id,
						className: Object(u.a)(J.a.purchaseButton, J.a.paypalCheckoutButton),
						pennies: e.pennyPrice,
						thingId: t
					}) : n && r.a.createElement(Q, {
						className: Object(u.a)(J.a.purchaseButton, J.a.paypalCheckoutButton),
						coinPackage: n
					}) : null, c === d.tb && r.a.createElement(T.f, {
						className: J.a.purchaseButton,
						"data-redditstyle": !0,
						disabled: o || s,
						onClick: this.onCompletePurchaseClick
					}, W._("Complete purchase", null, {
						hk: "3d1QJR"
					})))
				}
			}
			var Y = Object(c.injectStripe)(Object(S.c)(X)),
				z = t("./src/reddit/components/ModalStyledComponents/index.tsx"),
				K = t("./src/reddit/icons/fonts/Coin/index.tsx");
			const {
				fbt: U
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var $ = e => r.a.createElement("div", {
				className: J.a.purchaseHeader,
				style: {
					backgroundImage: 'url("'.concat(o.a.assetPath, '/img/gold/coins-hero.jpg")')
				}
			}, r.a.createElement(K.a, {
				className: J.a.coinIcon
			}), r.a.createElement("div", {
				className: J.a.titleMain
			}, U._("Buy {amount} Coins!", [U._param("amount", e.purchasePackage.coins.toLocaleString())], {
				hk: "3E2DWq"
			})), r.a.createElement("div", {
				className: J.a.titleDescription
			}, U._("You're purchasing Coins for yourself, {userName}!", [U._param("userName", e.userName)], {
				hk: "ZGCBt"
			})), r.a.createElement("img", {
				className: J.a.goldPackage,
				src: e.purchasePackage.images.purchaseSuccess["3x"].url
			}), r.a.createElement("button", {
				className: J.a.closeButton,
				onClick: e.onCloseClick
			}, r.a.createElement(z.b, {
				className: J.a.closeIcon,
				"data-redditstyle": !0
			})));
			var ee = e => {
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
					className: J.a.purchaseGildHeader
				}, r.a.createElement("div", {
					className: J.a.awardTitle
				}, n.fbt._("Give the {awardName} Award", [n.fbt._param("awardName", e.award.name)], {
					hk: "28iR3j"
				})), r.a.createElement("div", {
					className: J.a.awardTitleDescription
				}, a.join(" ")), r.a.createElement("img", {
					className: J.a.awardIcon,
					src: e.award.icon.url
				}), r.a.createElement("button", {
					className: J.a.closeButton,
					onClick: e.onCloseClick
				}, r.a.createElement(z.b, {
					className: Object(u.a)(J.a.closeIcon, J.a.awardPurchase),
					"data-redditstyle": !0
				})))
			};
			a.a = e => r.a.createElement(c.StripeProvider, {
				apiKey: o.a.stripe.apiKey
			}, r.a.createElement(c.Elements, null, r.a.createElement(r.a.Fragment, null, e.gildThingId ? r.a.createElement(ee, {
				coinBalance: e.coinBalance,
				award: e.selectedAward,
				purchasePackage: e.purchasePackage,
				userName: e.userName,
				onCloseClick: e.onCloseModal
			}) : e.purchasePackage && r.a.createElement($, {
				coinBalance: e.coinBalance,
				purchasePackage: e.purchasePackage,
				userName: e.userName,
				onCloseClick: e.onCloseModal
			}), r.a.createElement("div", {
				className: J.a.purchaseBody
			}, r.a.createElement(i.a, {
				className: J.a.selectPayment,
				gildThingId: e.gildThingId,
				nightmode: e.nightmode,
				selectedPayment: e.selectedPayment,
				onPaymentSelected: e.onPaymentSelected
			}), e.selectedPayment === d.tb && r.a.createElement(O, {
				nightmode: e.nightmode
			}), r.a.createElement("div", {
				className: J.a.checkoutFooter
			}, r.a.createElement("div", {
				className: J.a.purchaseTotal
			}, n.fbt._("Total: {totalAmount}", [n.fbt._param("totalAmount", "$" + ((e.purchasePackage ? e.purchasePackage.pennies : e.selectedAward.pennyPrice || 0) / 100).toLocaleString())], {
				hk: "3dx6W8"
			}))), e.selectedPayment === d.ub && e.paypalErrorMessage && r.a.createElement("div", {
				className: J.a.errorMessage
			}, e.paypalErrorMessage), e.selectedPayment === d.tb && e.stripeErrorMessage && r.a.createElement("div", {
				className: J.a.errorMessage
			}, e.stripeErrorMessage), r.a.createElement("div", {
				className: J.a.agreementLink
			}, e.purchasePackage && (e => {
				if (!e.gildThingId || !e.purchasePackage) return null;
				return e.coinBalance + e.purchasePackage.coins - e.selectedAward.coinPrice > 0 ? r.a.createElement(r.a.Fragment, null, n.fbt._("The minimum Coins purchase is {coins} Coins.", [n.fbt._param("coins", e.purchasePackage.coins.toLocaleString())], {
					hk: "3J52WH"
				}), r.a.createElement("br", null)) : null
			})(e), Object(I.a)(n.fbt._("By purchasing Coins and Awards, you agree to the :agreement:.", null, {
				hk: "1eCqza"
			}), {
				":agreement:": r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank"
				}, n.fbt._("Reddit User Agreement", null, {
					hk: "11z9fY"
				}))
			}))), r.a.createElement(Y, {
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
				c = t("./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less"),
				o = t.n(c);
			const {
				fbt: d
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			a.a = e => s.a.createElement("div", {
				className: o.a.purchaseFooter
			}, s.a.createElement(r.f, {
				className: o.a.purchaseButton,
				"data-redditstyle": !0,
				onClick: e.onCloseClick
			}, d._("Done", null, {
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
				c = t("./src/lib/classNames/index.ts"),
				o = t("./src/reddit/components/TrackingHelper/index.tsx"),
				d = t("./src/reddit/helpers/trackers/goldPayment.ts"),
				i = t("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				l = t.n(i);
			const m = e => r.a.createElement("label", {
				className: Object(c.a)(e.className, l.a.paymentOption)
			}, r.a.createElement("input", {
				type: "radio",
				id: e.value,
				name: "payment-option",
				value: e.value,
				checked: e.selectedValue === e.value,
				onChange: e.onChange
			}), r.a.createElement("div", {
				className: Object(c.a)(l.a.paymentOptionContent, {
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
								s(Object(d.e)(t));
								break;
							case "paypal":
								s(Object(d.f)(t))
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
			a.a = Object(o.c)(u)
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
				cardDetails: "_34-t7dxtgTqGxiuyP72aPD",
				unknownCC: "_2tXz9uqxu-ZiBFsHmFWdV6",
				unknownCc: "_2tXz9uqxu-ZiBFsHmFWdV6",
				expiry: "_2Qg2CXB4yQiIH6KZrB9lRT",
				icon: "_1pvlE-J4rOcSVpJdWYQAm-",
				confirmText: "_3_csWXQHhia1pXrA9w9OLK"
			}
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, a, t) {
			"use strict";
			t.d(a, "b", (function() {
				return g
			})), t.d(a, "f", (function() {
				return C
			})), t.d(a, "d", (function() {
				return b
			})), t.d(a, "e", (function() {
				return y
			})), t.d(a, "c", (function() {
				return P
			})), t.d(a, "a", (function() {
				return _
			})), t.d(a, "g", (function() {
				return k
			})), t.d(a, "h", (function() {
				return v
			})), t.d(a, "i", (function() {
				return x
			}));
			var n = t("./src/lib/constants/index.ts"),
				s = t("./src/reddit/selectors/gold/giveAwards.ts"),
				r = t("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				c = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				o = t("./src/reddit/selectors/platform.ts"),
				d = t("./src/reddit/selectors/telemetry.ts"),
				i = t("./src/telemetry/models/GoldPurchase.ts"),
				l = t("./src/telemetry/models/Payment.ts"),
				m = t("./src/reddit/helpers/trackers/gild.ts"),
				u = t("./src/reddit/helpers/correlationIdTracker.ts"),
				p = t("./src/reddit/helpers/isComment.ts");
			const h = (e, a) => {
					const {
						thingId: t,
						packageId: o
					} = a, l = s.a(e), h = l ? Object(m.getAwardTypeFromAward)(l) : null, g = t ? h : c.n(e) ? i.Premium : i.Coins, C = t ? Object(p.a)(t) ? "comment" : "post" : void 0, b = o || c.q(e), y = [...Object(r.b)(e), ...Object(r.d)(e)].filter(e => e.mobileId === b)[0], P = y && y.dealInfo && y.dealInfo.type, _ = "low_coin_upsell" === P;
					let k;
					_ && (k = "low_coin_balance"), "new_purchaser" === P && (k = "new_user_targeted_offer"), "repeat_purchaser" === P && (k = "repeat_user_targeted_offer");
					const v = y ? Math.round(1e4 * (y.baselinePennies - y.pennies) / y.baselinePennies) / 100 : 0,
						x = y ? Math.round(1e4 * (y.coins - y.baselineCoins) / y.coins) / 100 : 0,
						E = y ? y.baselinePennies !== y.pennies ? "".concat(v, "_percent_price") : y.baselineCoins !== y.coins ? "".concat(x, "_percent_bonus") : void 0 : void 0;
					return Object.assign({}, d.defaults(e), {
						comment: t ? d.comment(e, t) : null,
						correlationId: Object(u.c)(u.a.GoldPayment),
						post: t ? d.post(e, t) : null,
						screen: d.screen(e),
						subreddit: t ? d.subreddit(e) : null,
						goldPurchase: Object.assign({}, l ? {
							awardId: l.id,
							awardName: l.name,
							numberCoinsToRecipient: l.coinReward
						} : null, {
							type: g,
							gildedContent: !!t,
							contentType: C,
							numberCoins: y ? y.coins : void 0,
							offerContext: k,
							offerType: _ ? y ? "".concat(y.bonusPct, "_percent_bonus") : void 0 : E
						}),
						payment: {
							currency: "USD",
							amountInSmallestDenom: g === i.Premium ? n.lb : y ? y.pennies : void 0
						}
					})
				},
				g = (e, a) => t => Object.assign({}, h(t, {
					packageId: a,
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				C = e => a => Object.assign({}, h(a, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				b = e => a => Object.assign({}, h(a, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				y = e => a => Object.assign({}, h(a, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				P = e => a => Object.assign({}, h(a, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				_ = e => a => Object.assign({}, h(a, {
					packageId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				k = e => a => Object.assign({}, h(a, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				v = (e, a) => a => {
					const t = h(a, {
						thingId: e
					});
					return Object.assign({}, t, {
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: Object.assign({}, t.payment, {
							defaultOption: l.PaymentMethod.Paypal
						}),
						goldPurchase: Object.assign({}, t.goldPurchase, {
							source: e ? i.GiveGold : c.n(a) ? i.PremiumMarketing : i.CoinsMarketing
						})
					})
				},
				x = e => a => {
					const t = h(a, {
						thingId: e
					});
					return Object.assign({}, t, {
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: Object.assign({}, t.payment, {
							method: Object(o.b)(a).queryParams.thanks ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
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
				return d
			}));
			var n = t("./node_modules/react/index.js"),
				s = t.n(n),
				r = t("./src/lib/classNames/index.ts"),
				c = t("./src/reddit/icons/svgs/Trash2/index.m.less"),
				o = t.n(c);
			const d = e => s.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), s.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			a.b = d
		}
	}
]);
//# sourceMappingURL=CoinsPurchaseModal~PennyPurchaseModal.a432ec00254de06ab028.js.map