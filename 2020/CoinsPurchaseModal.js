// https://www.redditstatic.com/desktop2x/CoinsPurchaseModal.593cffa08ae31780afcd.js
// Retrieved at 3/10/2020, 5:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CoinsPurchaseModal"], {
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
				l = t("./src/reddit/i18n/utils.ts"),
				d = t("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				m = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				u = t("./src/reddit/components/CheckoutForm/index.m.less"),
				p = t.n(u);
			const h = Object(o.c)({
					cardCvcValidation: m.h,
					cardExpiryValidation: m.i,
					cardName: m.j,
					cardNumberValidation: m.k,
					nameOnCardValidation: m.m,
					postalCodeValidation: m.n
				}),
				g = Object(r.b)(h, (e, a) => ({
					onCardElementChange: a => e(Object(d.cardElementChange)(a)),
					onNameInput: a => e(Object(d.cardNameInput)({
						cardName: a
					}))
				}));
			class C extends s.a.Component {
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
						nameOnCardValidation: d,
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
					return s.a.createElement("div", {
						className: Object(c.a)(p.a.checkoutForm, e)
					}, s.a.createElement("div", {
						className: p.a.formCellWide
					}, s.a.createElement("input", {
						className: Object(c.a)(p.a.cardInput, p.a.nameOnCard, {
							[p.a.cardInputError]: !!d
						}),
						type: "text",
						placeholder: Object(l.c)("NAME ON CARD"),
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
						placeholder: Object(l.c)("CARD NUMBER"),
						style: b
					}), !u && s.a.createElement("div", {
						className: p.a.elementPlaceholder
					}, Object(l.c)("CARD NUMBER"))), s.a.createElement("div", {
						className: p.a.formCell
					}, s.a.createElement(i.CardExpiryElement, {
						className: Object(c.a)(p.a.cardInput, {
							[p.a.cardInputError]: !!t
						}),
						onChange: o,
						onReady: this.onCardExpiryReady,
						placeholder: Object(l.c)("MM/YY"),
						style: b
					}), !h && s.a.createElement("div", {
						className: p.a.elementPlaceholder
					}, Object(l.c)("MM/YY"))), s.a.createElement("div", {
						className: p.a.formCell
					}, s.a.createElement(i.CardCVCElement, {
						className: Object(c.a)(p.a.cardInput, {
							[p.a.cardInputError]: !!a
						}),
						onChange: o,
						onReady: this.onCardCVCReady,
						placeholder: Object(l.c)("CCV"),
						style: b
					}), !g && s.a.createElement("div", {
						className: p.a.elementPlaceholder
					}, Object(l.c)("CCV"))), s.a.createElement("div", {
						className: p.a.formCell
					}, s.a.createElement(i.PostalCodeElement, {
						className: Object(c.a)(p.a.cardInput, {
							[p.a.cardInputError]: !!m
						}),
						onChange: o,
						onReady: this.onPostalCodeReady,
						placeholder: Object(l.c)("ZIP CODE"),
						style: b
					}), !C && s.a.createElement("div", {
						className: p.a.elementPlaceholder
					}, Object(l.c)("ZIP CODE"))))
				}
			}
			a.a = Object(i.injectStripe)(g(C))
		},
		"./src/reddit/components/CoinBalance/index.m.less": function(e, a, t) {
			e.exports = {
				coinBalance: "_1B-dVN_8RcEpQbDNGHy3Ds"
			}
		},
		"./src/reddit/components/CoinBalance/index.tsx": function(e, a, t) {
			"use strict";
			t("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = t("./node_modules/fbt/lib/FbtPublic.js"),
				s = t("./node_modules/react/index.js"),
				r = t.n(s),
				o = t("./src/lib/classNames/index.ts"),
				c = t("./src/reddit/helpers/createEmojiText/index.tsx"),
				i = t("./src/reddit/i18n/components.tsx"),
				l = t("./src/reddit/icons/fonts/Coin/index.tsx"),
				d = t("./src/reddit/components/CoinBalance/index.m.less"),
				m = t.n(d);
			a.a = e => r.a.createElement("div", {
				className: Object(o.a)(m.a.coinBalance, e.className),
				"data-redditstyle": !0
			}, Object(c.a)(n.fbt._("Coin balance:: {Coin balance}", [n.fbt._param("Coin balance", ":coin:".concat(e.coinBalance.toLocaleString()))], {
				hk: "4zRCac"
			}).toString(), {
				":coin:": r.a.createElement(l.a, null)
			}), " ", r.a.createElement("a", {
				href: "/coins",
				onClick: e.onWhatAreCoinsLinkClick,
				target: "_blank"
			}, r.a.createElement(i.c, null, "What are Coins?")))
		},
		"./src/reddit/components/CoinPurchaseModal/index.m.less": function(e, a, t) {
			e.exports = {
				coinPurchaseModal: "_3PdRn_CekW51ny0uOVaHCK",
				coinPurchaseHeader: "_1xjJa14iSiY7glYwJfLL95",
				coinPurchaseGildHeader: "_10UiEFbnh41WSUvgaPZvYB",
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
				coinPurchaseBody: "_3CPZD5vVhMPgbcFIJwcM_i",
				loaderContainer: "_2uPzorlzh0nEEymC1BvQBX",
				selectPayment: "_1kvmUEmQHiHPMWKNupYHMc",
				checkoutFooter: "HJGClx25Yjtzsp_aYfn0t",
				coinPurchaseTotal: "_15IG8atp5K2awSUjMrS5eI",
				agreementLink: "_4bWCoUTra_tfj3pkGR8fX",
				coinPurchaseFooter: "lURI8ZQBzocdwuiGJWfwl",
				coinPurchaseSelectPaymentFooter: "_2UT4NH2KB1dRWtLjAB1clv",
				coinBalance: "Rf3qDgeCISxQL8ZHHBKWU",
				coinPurchaseButton: "_2ZPoUwlRhGtsVQEgJhZJiB",
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
				o = t("./node_modules/reselect/es/index.js"),
				c = t("./src/higherOrderComponents/asModal/index.tsx"),
				i = t("./src/reddit/constants/zIndex.ts"),
				l = t("./src/lib/classNames/index.ts"),
				d = t("./src/reddit/actions/gold/modals.ts"),
				m = t("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				u = t("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				p = t("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				h = t("./src/reddit/actions/toaster.ts"),
				g = t("./src/reddit/components/TrackingHelper/index.tsx"),
				C = t("./src/reddit/constants/colors.ts"),
				b = t("./src/reddit/helpers/correlationIdTracker.ts"),
				y = t("./src/reddit/helpers/trackers/goldPayment.ts"),
				P = t("./src/reddit/models/Gold/Coins/index.ts"),
				v = t("./src/reddit/models/Toast/index.ts"),
				E = t("./src/reddit/models/User/index.ts"),
				j = t("./src/reddit/selectors/gild.ts"),
				x = t("./src/reddit/selectors/gold/giveAwards.ts"),
				k = t("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				w = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				O = t("./src/reddit/selectors/platform.ts"),
				N = t("./src/reddit/selectors/user.ts"),
				f = t("./src/reddit/components/ModalStyledComponents/index.tsx"),
				_ = t("./src/reddit/controls/LoadingIcon/index.tsx"),
				M = t("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				I = t.n(M);
			const {
				fbt: T
			} = t("./node_modules/fbt/lib/FbtPublic.js");
			var S = e => {
					const {
						award: a,
						onClickClose: t
					} = e;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: I.a.coinPurchaseGildHeader
					}, s.a.createElement("div", {
						className: I.a.awardTitle
					}, T._("Give the {award name} Award", [T._param("award name", a.name)], {
						hk: "1nWqWe"
					})), s.a.createElement("img", {
						className: I.a.awardIcon,
						src: a.icon.url
					}), s.a.createElement("button", {
						className: I.a.closeButton,
						onClick: t
					}, s.a.createElement(f.b, {
						className: Object(l.a)(I.a.closeIcon, I.a.awardPurchase),
						"data-redditstyle": !0
					}))), s.a.createElement("div", {
						className: Object(l.a)(I.a.coinPurchaseBody, I.a.loaderContainer)
					}, s.a.createElement(_.a, {
						sizePx: 100
					})))
				},
				R = t("./src/app/strings/index.ts"),
				A = t("./src/config.ts"),
				B = t("./src/lib/loadRedditAdsPixel.ts"),
				G = t("./src/reddit/icons/fonts/Coin/index.tsx"),
				F = t("./src/reddit/controls/Button/index.tsx"),
				D = t("./src/reddit/i18n/components.tsx");
			var V = e => s.a.createElement("div", {
				className: I.a.coinPurchaseFooter
			}, s.a.createElement(F.f, {
				className: I.a.coinPurchaseButton,
				"data-redditstyle": !0,
				onClick: e.onCloseClick
			}, s.a.createElement(D.c, null, "Done")));
			class H extends s.a.PureComponent {
				componentDidMount() {
					const {
						gildThingId: e,
						sendEvent: a
					} = this.props;
					a(Object(y.h)(e)), Object(B.b)()
				}
				render() {
					const e = this.props,
						a = e.isGild && e.isCompletePaypal ? Object(R.a)(e.language, "gold.purchaseCoinsModal.yourTransactionCompletedAndDetailsEmailed") : Object(R.a)(e.language, "gold.purchaseCoinsModal.yourPurchaseIsPending");
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: I.a.paymentCompleteHeader,
						style: {
							backgroundImage: 'url("'.concat(A.a.assetPath, '/img/gold/coins-hero.jpg")')
						}
					}, s.a.createElement(G.a, {
						className: I.a.coinIcon
					}), s.a.createElement("div", {
						className: I.a.paymentCompleteTitleMain
					}, e.isGild ? Object(R.a)(e.language, "gold.purchaseCoinsModal.thanksForPurchasingCoinsAndGild", {
						userName: e.userName
					}) : Object(R.a)(e.language, "gold.purchaseCoinsModal.thanksForPurchasingCoins", {
						userName: e.userName
					})), s.a.createElement("div", {
						className: I.a.paymentCompleteTitleDescription
					}, a), s.a.createElement("button", {
						className: I.a.closeButton,
						onClick: e.onCloseClick
					}, s.a.createElement(f.b, {
						className: I.a.closeIcon,
						"data-redditstyle": !0
					}))), s.a.createElement(V, {
						language: e.language,
						onCloseClick: e.onCloseClick
					}))
				}
			}
			var L = Object(g.b)(H),
				W = t("./node_modules/react-stripe-elements/es/index.js"),
				Z = t("./src/lib/constants/index.ts"),
				q = t("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				Q = t("./src/reddit/components/CheckoutForm/index.tsx"),
				Y = t("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				U = t("./src/reddit/i18n/utils.ts"),
				J = t("./src/reddit/components/StripePaymentForm/index.m.less"),
				K = t.n(J);
			var z = e => {
					const {
						onToggleRememberCard: a,
						rememberCard: t
					} = e;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(Q.a, {
						className: K.a.creditCard
					}), s.a.createElement(Y.a, {
						className: K.a.saveCardCheckbox,
						isSelected: t,
						onClick: a,
						text: Object(U.c)("Remember this card")
					}), s.a.createElement("a", {
						href: "https://stripe.com",
						target: "_blank"
					}, s.a.createElement("img", {
						className: K.a.poweredByStripeIcon,
						src: "".concat(A.a.assetPath, "/img/payment-icons/powered-by-stripe.png")
					})))
				},
				X = (t("./node_modules/core-js/modules/es6.regexp.to-string.js"), t("./src/reddit/icons/svgs/Trash2/index.tsx"));
			const $ = e => 2 === e.length ? e : "0" + e,
				ee = e => {
					switch (e.toLowerCase()) {
						case "visa":
							return "".concat(A.a.assetPath, "/img/payment-icons/visa.png");
						case "mastercard":
							return "".concat(A.a.assetPath, "/img/payment-icons/mastercard.png");
						case "discover":
							return "".concat(A.a.assetPath, "/img/payment-icons/discover.jpg");
						case "american express":
							return "".concat(A.a.assetPath, "/img/payment-icons/amex.png");
						default:
							return null
					}
				};
			class ae extends s.a.PureComponent {
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
					} = this.props, t = ee(a.brand);
					return s.a.createElement("label", {
						className: K.a.savedCardContainer
					}, s.a.createElement("input", {
						type: "radio",
						name: "use-saved-card",
						checked: !0,
						readOnly: !0
					}), s.a.createElement("div", {
						className: Object(l.a)(K.a.cardImageContainer, {
							[K.a.cardImageContainerNightmode]: this.props.nightmode
						})
					}, t ? s.a.createElement("img", {
						className: K.a.brandImage,
						src: t
					}) : s.a.createElement("span", {
						className: K.a.unknownCC
					}, "CC")), s.a.createElement("div", {
						className: K.a.cardDetails
					}, s.a.createElement("span", null, Object(R.a)(e, "gold.checkoutForm.cardEndingIn", {
						last4: a.last4
					})), s.a.createElement("span", {
						className: K.a.expiry
					}, Object(R.a)(e, "gold.checkoutForm.cardExpiry", {
						month: $(a.expirationMonth.toString()),
						year: a.expirationYear.toString()
					}))), this.state.showConfirmText ? s.a.createElement("button", {
						className: K.a.confirmText,
						onClick: this.onConfirmClick
					}, s.a.createElement(D.c, null, "Confirm")) : s.a.createElement("button", {
						onClick: this.onTrashCanClick
					}, s.a.createElement(X.b, {
						className: K.a.icon
					})))
				}
			}
			var te = ae;
			const ne = Object(o.c)({
				language: N.O,
				rememberCard: w.r,
				savedCard: e => Object(w.t)(e)[0],
				stripeInfoLoading: w.s
			});
			class se extends s.a.PureComponent {
				render() {
					const {
						className: e,
						language: a,
						nightmode: t,
						onClickDeleteCard: n,
						onToggleRememberCard: r,
						rememberCard: o,
						savedCard: c,
						stripeInfoLoading: i
					} = this.props, d = i, m = !d && c, u = !d && !m, p = d ? K.a.loadingState : m ? K.a.savedCardState : K.a.formState;
					return s.a.createElement("div", {
						className: Object(l.a)(K.a.stripePaymentForm, p, e)
					}, d && s.a.createElement(_.a, {
						className: K.a.loader,
						sizePx: 60
					}), m && c && s.a.createElement("form", null, s.a.createElement(te, {
						language: a,
						nightmode: t,
						onDelete: n,
						savedCard: c
					})), u && s.a.createElement(z, {
						onToggleRememberCard: r,
						rememberCard: o
					}))
				}
			}
			var re = Object(r.b)(ne, (e, a) => ({
					onClickDeleteCard: a => e(Object(u.deleteSavedCard)(a)),
					onToggleRememberCard: () => e(Object(u.toggleRememberCard)())
				}))(se),
				oe = t("./src/reddit/helpers/createEmojiText/index.tsx"),
				ce = t("./node_modules/fbt/lib/FbtPublic.js"),
				ie = t("./src/reddit/components/CoinBalance/index.tsx"),
				le = t("./node_modules/react-dom/index.js"),
				de = t.n(le),
				me = t("./src/higherOrderComponents/makeAsync.tsx"),
				ue = t("./src/reddit/helpers/loadThirdPartyScript.ts");
			const pe = Object(o.c)({
				isGild: e => !!Object(w.b)(e)
			});
			class he extends s.a.Component {
				constructor() {
					super(...arguments), this.onPayment = () => this.props.createPayment(this.props.coinPackage), this.onAuthorize = e => {
						const {
							orderID: a
						} = e, {
							coinPackage: t,
							isGild: n
						} = this.props;
						return this.props.executePayment(n, a, t)
					}
				}
				render() {
					const {
						className: e
					} = this.props, a = paypalCheckout.Button.driver("react", {
						React: s.a,
						ReactDOM: de.a
					}), t = {
						sandbox: A.a.paypal.apiKey,
						production: A.a.paypal.apiKey
					};
					return s.a.createElement("div", {
						className: e
					}, s.a.createElement(a, {
						env: A.a.paypal.env,
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
			const ge = Object(r.b)(pe, e => ({
				createPayment: a => e(Object(m.h)(a)),
				executePayment: (a, t, n) => {
					e(a ? Object(m.j)(t, n) : Object(m.i)(t, n))
				}
			}))(he);
			var Ce = Object(me.a)({
				getComponent: () => Object(ue.b)().then(() => ge),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			class be extends s.a.Component {
				constructor() {
					super(...arguments), this.onCompletePurchaseClick = () => {
						const {
							gildThingId: e,
							onCompletePurchaseClick: a,
							purchasePackage: t,
							sendEvent: n,
							stripe: s
						} = this.props;
						s && (n(Object(y.b)(e)), a(s, t))
					}
				}
				render() {
					const {
						coinBalance: e,
						purchasePackage: a,
						savedCardsPending: t,
						selectedPayment: n,
						stripeTokenPending: r
					} = this.props;
					return s.a.createElement("div", {
						className: I.a.coinPurchaseSelectPaymentFooter
					}, s.a.createElement(ie.a, {
						className: I.a.coinBalance,
						coinBalance: e
					}), n === Z.vb && s.a.createElement(Ce, {
						className: Object(l.a)(I.a.coinPurchaseButton, I.a.paypalCheckoutButton),
						coinPackage: a
					}), n === Z.ub && s.a.createElement(F.f, {
						className: I.a.coinPurchaseButton,
						"data-redditstyle": !0,
						disabled: r || t,
						onClick: this.onCompletePurchaseClick
					}, ce.fbt._("Complete purchase", null, {
						hk: "3d1QJR"
					})))
				}
			}
			var ye = Object(W.injectStripe)(Object(g.b)(be));
			var Pe = e => s.a.createElement("div", {
				className: I.a.coinPurchaseHeader,
				style: {
					backgroundImage: 'url("'.concat(A.a.assetPath, '/img/gold/coins-hero.jpg")')
				}
			}, s.a.createElement(G.a, {
				className: I.a.coinIcon
			}), s.a.createElement("div", {
				className: I.a.titleMain
			}, Object(R.a)(e.language, "gold.purchaseCoinsModal.buyCoins", {
				amount: e.purchasePackage.coins.toLocaleString()
			})), s.a.createElement("div", {
				className: I.a.titleDescription
			}, Object(R.a)(e.language, "gold.purchaseCoinsModal.youArePurchasingCoinsForYourself", {
				userName: e.userName
			})), s.a.createElement("img", {
				className: I.a.goldPackage,
				src: e.purchasePackage.images.purchaseSuccess["3x"].url,
				style: {
					backgroundImage: 'url("'.concat(A.a.assetPath, '/img/gold/coins-package-bg.jpg")')
				}
			}), s.a.createElement("button", {
				className: I.a.closeButton,
				onClick: e.onCloseClick
			}, s.a.createElement(f.b, {
				className: I.a.closeIcon,
				"data-redditstyle": !0
			})));
			var ve = e => {
				const a = [];
				a.push(Object(R.a)(e.language, "gold.purchaseCoinsModal.youArePurchasingCoinsForGild", {
					awardName: Object(R.a)(e.language, e.award.name),
					coinCount: e.award.coinPrice.toLocaleString()
				}));
				const t = e.coinBalance + e.purchasePackage.coins - e.award.coinPrice;
				return t > 0 && a.push(Object(R.a)(e.language, "gold.purchaseCoinsModal.youWillHaveCoinsRemaining", {
					remainingCoins: t.toLocaleString()
				})), s.a.createElement("div", {
					className: I.a.coinPurchaseGildHeader
				}, s.a.createElement("div", {
					className: I.a.awardTitle
				}, Object(R.a)(e.language, "gold.purchaseCoinsModal.giveAward", {
					awardName: e.award.name
				})), s.a.createElement("div", {
					className: I.a.awardTitleDescription
				}, a.join(" ")), s.a.createElement("img", {
					className: I.a.awardIcon,
					src: e.award.icon.url
				}), s.a.createElement("button", {
					className: I.a.closeButton,
					onClick: e.onCloseClick
				}, s.a.createElement(f.b, {
					className: Object(l.a)(I.a.closeIcon, I.a.awardPurchase),
					"data-redditstyle": !0
				})))
			};
			var Ee = e => s.a.createElement(W.StripeProvider, {
				apiKey: A.a.stripe.apiKey
			}, s.a.createElement(W.Elements, null, s.a.createElement(s.a.Fragment, null, e.gildThingId ? s.a.createElement(ve, {
				coinBalance: e.coinBalance,
				award: e.selectedAward,
				language: e.language,
				purchasePackage: e.purchasePackage,
				userName: e.userName,
				onCloseClick: e.onCloseModal
			}) : s.a.createElement(Pe, {
				coinBalance: e.coinBalance,
				language: e.language,
				purchasePackage: e.purchasePackage,
				userName: e.userName,
				onCloseClick: e.onCloseModal
			}), s.a.createElement("div", {
				className: I.a.coinPurchaseBody
			}, s.a.createElement(q.a, {
				className: I.a.selectPayment,
				gildThingId: e.gildThingId,
				nightmode: e.nightmode,
				selectedPayment: e.selectedPayment,
				onPaymentSelected: e.onPaymentSelected
			}), e.selectedPayment === Z.ub && s.a.createElement(re, {
				nightmode: e.nightmode
			}), s.a.createElement("div", {
				className: I.a.checkoutFooter
			}, s.a.createElement("div", {
				className: I.a.coinPurchaseTotal
			}, Object(R.a)(e.language, "gold.purchaseCoinsModal.totalAmount", {
				amount: e.purchasePackage.pennies / 100
			}))), e.selectedPayment === Z.vb && e.paypalErrorMessage && s.a.createElement("div", {
				className: I.a.errorMessage
			}, e.paypalErrorMessage), e.selectedPayment === Z.ub && e.stripeErrorMessage && s.a.createElement("div", {
				className: I.a.errorMessage
			}, e.stripeErrorMessage), s.a.createElement("div", {
				className: I.a.agreementLink
			}, (e => {
				if (!e.gildThingId) return null;
				return e.coinBalance + e.purchasePackage.coins - e.selectedAward.coinPrice > 0 ? s.a.createElement(s.a.Fragment, null, Object(R.a)(e.language, "gold.purchaseCoinsModal.minimumCoinsPurchaseIs", {
					coins: e.purchasePackage.coins
				}), s.a.createElement("br", null)) : null
			})(e), Object(oe.a)(Object(R.a)(e.language, "gold.purchaseCoinsModal.byPurchasingCoinsYouAgree"), {
				":agreement:": s.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank"
				}, s.a.createElement(D.c, null, "Reddit User Agreement"))
			}))), s.a.createElement(ye, {
				gildThingId: e.gildThingId,
				purchasePackage: e.purchasePackage,
				coinBalance: e.coinBalance,
				onCompletePurchaseClick: e.onCompletePurchaseClick,
				savedCardsPending: e.savedCardsPending,
				selectedPayment: e.selectedPayment,
				stripeTokenPending: e.stripeTokenPending
			}))));

			function je() {
				return (je = Object.assign || function(e) {
					for (var a = 1; a < arguments.length; a++) {
						var t = arguments[a];
						for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
					}
					return e
				}).apply(this, arguments)
			}
			const xe = Object(o.c)({
					activePage: w.a,
					allowNavigationCallback: e => {
						const a = Object(O.a)(e);
						return null === a ? void 0 : a
					},
					coinBalance: N.d,
					coinPackages: k.b,
					coinsToPurchase: w.d,
					gildThingId: w.b,
					isIframed: j.h,
					language: N.O,
					nightmode: N.Q,
					savedCardsPending: w.s,
					selectedAward: x.a,
					selectedPayment: w.e,
					stripeErrorMessage: w.l,
					stripeTokenPending: w.o,
					paypalErrorMessage: w.f,
					purchaseCatalogError: k.d,
					purchaseCatalogPending: k.e,
					userName: e => {
						const a = Object(N.i)(e);
						return "u/".concat(Object(E.f)(a))
					}
				}),
				ke = Object(r.b)(xe, (e, a) => ({
					closeModal: () => {
						e(Object(m.e)()), e(Object(d.a)())
					},
					loadSavedCards: () => e(Object(u.loadSavedCards)()),
					onFailedToLoadCatalog: a => {
						const t = {
							kind: v.b.Error,
							text: a
						};
						return e(Object(h.e)(t))
					},
					onPaymentSelected: a => e(Object(u.selectPaymentMethod)(a)),
					onPaypalOpenInNewWindow: () => {
						setTimeout(() => {
							e(Object(m.e)()), e(Object(d.a)())
						}, 0)
					},
					requestPurchaseCatalog: () => e(Object(p.b)()),
					dispatchCompletePurchase: (a, t, n, s) => {
						e(n ? Object(m.k)(a, t, s) : Object(m.l)(a, t))
					}
				}), (e, a, t) => Object.assign({}, e, a, t, {
					onCompletePurchaseClick: (t, n) => a.dispatchCompletePurchase(t, n, !!e.gildThingId, e.isIframed)
				}));
			class we extends s.a.Component {
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
						purchaseCatalogPending: n,
						requestPurchaseCatalog: s
					} = this.props;
					a.length || n || s(), t()
				}
				componentWillUnmount() {
					Object(b.b)(b.a.GoldPayment), document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						gildThingId: e,
						sendEvent: a
					} = this.props;
					Object(b.d)(b.a.GoldPayment), a(Object(y.g)(e))
				}
				componentDidUpdate(e) {
					if (this.props.stripeErrorMessage && !e.stripeErrorMessage) {
						const {
							gildThingId: e,
							sendEvent: a
						} = this.props;
						a(Object(y.f)(e))
					}
				}
				render() {
					const {
						activePage: e,
						className: a,
						coinBalance: t,
						coinPackages: n,
						coinsToPurchase: r,
						gildThingId: o,
						isCompletePaypal: c,
						language: i,
						nightmode: l,
						onCompletePurchaseClick: d,
						onFailedToLoadCatalog: m,
						onPaymentSelected: u,
						onTryCloseModal: p,
						paypalErrorMessage: h,
						purchaseCatalogError: g,
						purchaseCatalogPending: C,
						savedCardsPending: b,
						selectedAward: y,
						selectedPayment: v,
						stripeErrorMessage: E,
						stripeTokenPending: j,
						userName: x
					} = this.props;
					if (g) return m(g), p(), null;
					const k = !!o,
						w = Object(P.b)(r, n, k);
					return C || !w ? s.a.createElement("div", {
						className: a
					}, s.a.createElement(S, {
						award: y,
						onClickClose: p
					})) : s.a.createElement("div", {
						className: a
					}, "selectPayment" === e && w && s.a.createElement(Ee, {
						coinBalance: t,
						gildThingId: o,
						language: i,
						nightmode: l,
						onCloseModal: p,
						onCompletePurchaseClick: d,
						onPaymentSelected: u,
						paypalErrorMessage: h,
						purchasePackage: w,
						savedCardsPending: b,
						selectedAward: y,
						selectedPayment: v,
						stripeErrorMessage: E,
						stripeTokenPending: j,
						userName: x
					}), "paymentCompleted" === e && s.a.createElement(L, {
						isCompletePaypal: c,
						isGild: k,
						language: i,
						onCloseClick: p,
						userName: x
					}))
				}
			}
			const Oe = Object(c.a)(we);
			a.default = ke(Object(g.b)(class extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							gildThingId: e,
							sendEvent: a
						} = this.props;
						a(Object(y.a)(e)), this.onCloseModal()
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
					return s.a.createElement(Oe, je({}, this.props, {
						className: Object(l.a)(this.props.className, I.a.coinPurchaseModal),
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						overlayCustomStyles: e,
						withOverlay: !0
					}))
				}
			}))
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
				l = t("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				d = t.n(l);
			const m = e => r.a.createElement("label", {
				className: Object(o.a)(e.className, d.a.paymentOption)
			}, r.a.createElement("input", {
				type: "radio",
				id: e.value,
				name: "payment-option",
				value: e.value,
				checked: e.selectedValue === e.value,
				onChange: e.onChange
			}), r.a.createElement("div", {
				className: Object(o.a)(d.a.paymentOptionContent, {
					[d.a.isNightmode]: e.nightmode
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
						className: d.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(n.a.assetPath, "/img/payment-icons/paypal.png)")
						}
					})), r.a.createElement(m, {
						nightmode: a,
						selectedValue: t,
						onChange: this.onPaymentSelected,
						value: "creditCard"
					}, r.a.createElement("div", {
						className: d.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(n.a.assetPath, "/img/payment-icons/visa.png)")
						}
					}), r.a.createElement("div", {
						className: d.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(n.a.assetPath, "/img/payment-icons/mastercard.png)")
						}
					}), r.a.createElement("div", {
						className: d.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(n.a.assetPath, "/img/payment-icons/amex.png)")
						}
					}), r.a.createElement("div", {
						className: d.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(n.a.assetPath, "/img/payment-icons/discover.jpg)")
						}
					}))))
				}
			}
			a.a = Object(c.b)(u)
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
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return r
			}));
			t("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = t("./node_modules/react/index.js"),
				s = t.n(n);

			function r(e, a) {
				const t = e.split(":");
				return t.length % 2 == 0 ? e : t.reduce((e, t, n) => (n % 2 == 0 ? e.push(t) : "" === t ? e.push(":") : ":".concat(t, ":") in a ? e.push(a[":".concat(t, ":")]) : e.push(":".concat(t, ":")), e), []).map((e, a) => s.a.createElement(s.a.Fragment, {
					key: a
				}, e))
			}
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return C
			})), t.d(a, "e", (function() {
				return b
			})), t.d(a, "c", (function() {
				return y
			})), t.d(a, "d", (function() {
				return P
			})), t.d(a, "b", (function() {
				return v
			})), t.d(a, "f", (function() {
				return E
			})), t.d(a, "g", (function() {
				return j
			})), t.d(a, "h", (function() {
				return x
			}));
			var n = t("./src/lib/constants/index.ts"),
				s = t("./src/reddit/models/Gold/Coins/index.ts"),
				r = t("./src/reddit/selectors/gold/giveAwards.ts"),
				o = t("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				c = t("./src/reddit/selectors/goldPurchaseModals.ts"),
				i = t("./src/reddit/selectors/platform.ts"),
				l = t("./src/reddit/selectors/telemetry.ts"),
				d = t("./src/telemetry/models/GoldPurchase.ts"),
				m = t("./src/telemetry/models/Payment.ts"),
				u = t("./src/reddit/helpers/trackers/gild.ts"),
				p = t("./src/reddit/helpers/correlationIdTracker.ts"),
				h = t("./src/reddit/helpers/isComment.ts");
			const g = (e, a) => {
					const t = r.a(e),
						i = t ? Object(u.getAwardTypeFromAward)(t) : null,
						m = a ? i : c.q(e) ? d.Premium : d.Coins,
						g = a ? Object(h.a)(a) ? "comment" : "post" : void 0,
						C = c.d(e),
						b = Object(o.b)(e),
						y = Object(s.b)(C, b, !!a);
					return Object.assign({}, l.defaults(e), {
						comment: a ? l.comment(e, a) : null,
						correlationId: Object(p.c)(p.a.GoldPayment),
						post: a ? l.post(e, a) : null,
						screen: l.screen(e),
						subreddit: a ? l.subreddit(e) : null,
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
							amountInSmallestDenom: m === d.Premium ? n.mb : y ? y.pennies : void 0
						}
					})
				},
				C = e => a => Object.assign({}, g(a, e), {
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				b = e => a => Object.assign({}, g(a, e), {
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
				E = e => a => Object.assign({}, g(a, e), {
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				j = e => a => {
					const t = g(a, e);
					return Object.assign({}, t, {
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: Object.assign({}, t.payment, {
							defaultOption: m.PaymentMethod.Paypal
						}),
						goldPurchase: Object.assign({}, t.goldPurchase, {
							source: e ? d.GiveGold : c.q(a) ? d.PremiumMarketing : d.CoinsMarketing
						})
					})
				},
				x = e => a => {
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
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, a, t) {
			"use strict";
			t.d(a, "a", (function() {
				return n
			}));
			const n = e => e.gild.selectedAward
		}
	}
]);
//# sourceMappingURL=CoinsPurchaseModal.593cffa08ae31780afcd.js.map