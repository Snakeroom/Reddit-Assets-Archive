// https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.9bf768773d92f28b54d6.js
// Retrieved at 3/3/2020, 6:36:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PremiumPurchaseModal"], {
		"./src/lib/loadRedditAdsPixel.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			})), a.d(t, "b", (function() {
				return r
			}));
			var n = a("./src/lib/sentry/index.ts");

			function s() {
				! function(e, t) {
					if (!e.rdt) {
						var a = e.rdt = function() {
							a.sendEvent ? a.sendEvent.apply(a, arguments) : a.callQueue.push(arguments)
						};
						a.callQueue = [];
						var n = t.createElement("script");
						n.src = "https://www.redditstatic.com/ads/pixel.js", n.async = !0;
						var s = t.getElementsByTagName("script")[0];
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
		"./src/reddit/components/CheckoutForm/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/CheckoutForm/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				c = a("./src/lib/classNames/index.ts"),
				i = a("./node_modules/react-stripe-elements/es/index.js"),
				l = a("./src/reddit/i18n/utils.ts"),
				d = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				m = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				u = a("./src/reddit/components/CheckoutForm/index.m.less"),
				p = a.n(u);
			const h = Object(o.c)({
					cardCvcValidation: m.h,
					cardExpiryValidation: m.i,
					cardName: m.j,
					cardNumberValidation: m.k,
					nameOnCardValidation: m.m,
					postalCodeValidation: m.n
				}),
				y = Object(r.b)(h, (e, t) => ({
					onCardElementChange: t => e(Object(d.cardElementChange)(t)),
					onNameInput: t => e(Object(d.cardNameInput)({
						cardName: t
					}))
				}));
			class g extends s.a.Component {
				constructor() {
					super(...arguments), this.computedStyle = getComputedStyle(document.body), this.state = {
						cardNumberReady: !1,
						cardExpiryReady: !1,
						cardCVCReady: !1,
						postalCodeReady: !1
					}, this.onChange = e => {
						const t = e.currentTarget.value;
						t !== this.props.cardName && this.props.onNameInput(t)
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
						cardCvcValidation: t,
						cardExpiryValidation: a,
						cardName: n,
						cardNumberValidation: r,
						onCardElementChange: o,
						nameOnCardValidation: d,
						postalCodeValidation: m
					} = this.props, {
						cardNumberReady: u,
						cardExpiryReady: h,
						cardCVCReady: y,
						postalCodeReady: g
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
							[p.a.cardInputError]: !!a
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
							[p.a.cardInputError]: !!t
						}),
						onChange: o,
						onReady: this.onCardCVCReady,
						placeholder: Object(l.c)("CCV"),
						style: b
					}), !y && s.a.createElement("div", {
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
					}), !g && s.a.createElement("div", {
						className: p.a.elementPlaceholder
					}, Object(l.c)("ZIP CODE"))))
				}
			}
			t.a = Object(i.injectStripe)(y(g))
		},
		"./src/reddit/components/PaymentMethodSelector/index.m.less": function(e, t, a) {
			e.exports = {
				paymentOption: "cc9iRBOTxZHHCpcEduRmM",
				paymentOptionContent: "_1EqrH-JzLp3XTA4g36WIrt",
				isNightmode: "_1j5SaVBaG6I__sQRpYS4-I",
				paymentMethodIcon: "_3h70jT0m-MFJMB5LtPpDF5"
			}
		},
		"./src/reddit/components/PaymentMethodSelector/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./src/config.ts"),
				s = a("./node_modules/react/index.js"),
				r = a.n(s),
				o = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/components/TrackingHelper/index.tsx"),
				i = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				l = a("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				d = a.n(l);
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
						const t = e.target.value,
							{
								gildThingId: a,
								onPaymentSelected: n,
								sendEvent: s
							} = this.props;
						switch (t) {
							case "creditCard":
								s(Object(i.d)(a));
								break;
							case "paypal":
								s(Object(i.e)(a))
						}
						return n(t)
					}
				}
				render() {
					const {
						className: e,
						nightmode: t,
						selectedPayment: a
					} = this.props;
					return r.a.createElement("form", {
						className: e
					}, r.a.createElement("fieldset", null, r.a.createElement(m, {
						nightmode: t,
						selectedValue: a,
						onChange: this.onPaymentSelected,
						value: "paypal"
					}, r.a.createElement("div", {
						className: d.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(n.a.assetPath, "/img/payment-icons/paypal.png)")
						}
					})), r.a.createElement(m, {
						nightmode: t,
						selectedValue: a,
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
			t.a = Object(c.b)(u)
		},
		"./src/reddit/components/PremiumPurchaseModal/index.m.less": function(e, t, a) {
			e.exports = {
				premiumPurchaseModal: "_23HrteRgGDZ91SGL5oYWAp",
				premiumPurchaseHeader: "_1vNPpspCrQ3W3_z4l8WXD2",
				premiumIcon: "_2IUxk7I3wGLF67ECxWJaKF",
				titleMain: "_23AsioP9LFdnWNWvf2JxuY",
				titleDescription: "UZLxEtKcYjKnAtMic2BtE",
				closeButton: "W3hCwevNo10JOueQq9XCa",
				closeIcon: "_2Y-ZxM1D66jXobSnwtF5zy",
				premiumPurchaseBody: "_1f5Hj-YmiFvUddjOo3BXUn",
				creditCard: "_1mWVaEygz0IbIgt4I7nhA6",
				selectPayment: "_1W5FK94KCTY0oE-NFNp155",
				checkoutFooter: "_1GdfJOpcU3r4Y3Bj3aURo9",
				premiumPurchaseTotal: "_2DF2iuoYj11YJxwHtRl6k2",
				membershipDescription: "_2bHvYuy1c3aeL3OpvcSrzV",
				agreementLink: "_1KrZPgrCnGRSLGPuZst5c3",
				premiumPurchaseFooter: "_3_jYykdQsLK4t0KfTcPHFT",
				premiumPurchaseSelectPaymentFooter: "BKDWqNtFTGRZSXrRVdDzB",
				coinBalance: "_3VRMoYSGnuSeMurnm9AnE",
				premiumPurchaseButton: "_1VvnA3djGhzHigTOUn58Dj",
				paymentCompleteHeader: "_1LcmOk7SUoKQdR-v7knn89",
				paymentCompleteTitleMain: "_1UtE2Rjc4QGWjNU3F7ObST",
				paymentCompleteTitleDescription: "Og7AfSzv9RffDd4Ck06B5",
				paymentCompleteTitleItem: "_3SMYmC6QG8OyE_fULA-V0R",
				paymentCompleteTitleItemLast: "_3idbK2oKeR-XNpK_Q-QgIh",
				poweredByStripeIcon: "_3t8d-2wwATteV4UXKFhSb1",
				errorMessage: "_1625HJ3ZMN4xwl3cV7g2E2"
			}
		},
		"./src/reddit/components/PremiumPurchaseModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				c = a("./src/config.ts"),
				i = a("./src/higherOrderComponents/asModal/index.tsx"),
				l = a("./src/lib/classNames/index.ts"),
				d = a("./src/lib/constants/index.ts"),
				m = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = a("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				p = a("./src/reddit/components/TrackingHelper/index.tsx"),
				h = a("./src/reddit/constants/colors.ts"),
				y = a("./src/reddit/helpers/correlationIdTracker.ts"),
				g = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				b = a("./src/reddit/models/User/index.ts"),
				C = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				E = a("./src/reddit/selectors/platform.ts"),
				P = a("./src/reddit/selectors/user.ts"),
				v = a("./src/app/strings/index.ts"),
				j = a("./src/lib/loadRedditAdsPixel.ts"),
				N = a("./src/reddit/i18n/components.tsx"),
				O = a("./src/reddit/i18n/utils.ts"),
				f = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				w = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				x = a("./src/reddit/icons/fonts/Premium/index.tsx"),
				k = a("./src/reddit/controls/Button/index.tsx"),
				M = a("./src/reddit/components/PremiumPurchaseModal/index.m.less"),
				_ = a.n(M);
			var I = e => s.a.createElement("div", {
				className: _.a.premiumPurchaseFooter
			}, s.a.createElement(k.f, {
				className: _.a.premiumPurchaseButton,
				"data-redditstyle": !0,
				onClick: e.onCloseClick
			}, s.a.createElement(N.c, null, "Done")));
			class R extends s.a.PureComponent {
				componentDidMount() {
					const {
						sendEvent: e
					} = this.props;
					e(Object(g.h)()), Object(j.b)()
				}
				render() {
					const e = this.props;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: _.a.paymentCompleteHeader,
						style: {
							backgroundImage: 'url("'.concat(c.a.assetPath, '/img/gold/premium-hero-g.jpg")')
						}
					}, s.a.createElement(x.a, {
						className: _.a.premiumIcon,
						title: Object(O.c)("Reddit Premium")
					}), s.a.createElement("div", {
						className: _.a.paymentCompleteTitleMain
					}, s.a.createElement(N.c, null, "Thanks for purchasing Reddit Premium!")), s.a.createElement("div", {
						className: _.a.paymentCompleteTitleDescription
					}, s.a.createElement("div", {
						className: _.a.paymentCompleteTitleItem
					}, s.a.createElement(N.c, null, "You will receive a message in your inbox once your purchase is confirmed.")), s.a.createElement("div", {
						className: _.a.paymentCompleteTitleItem
					}, s.a.createElement("a", {
						href: "/settings/premium",
						target: "_blank"
					}, s.a.createElement(N.c, null, "Manage your ads-free experience."))), s.a.createElement("div", {
						className: _.a.paymentCompleteTitleItemLast
					}, Object(w.a)(Object(v.a)(e.language, "gold.purchasePremiumModal.findMoreAboutLoungeOnReddit"), {
						":loungeLink:": s.a.createElement("a", {
							href: "/r/lounge",
							target: "_blank"
						}, "r/lounge")
					}))), s.a.createElement("button", {
						className: _.a.closeButton,
						onClick: e.onCloseClick
					}, s.a.createElement(f.b, {
						className: _.a.closeIcon,
						"data-redditstyle": !0
					}))), s.a.createElement(I, {
						onCloseClick: e.onCloseClick
					}))
				}
			}
			var S = Object(p.b)(R),
				T = a("./node_modules/react-stripe-elements/es/index.js"),
				A = a("./src/reddit/components/CheckoutForm/index.tsx"),
				F = a("./src/reddit/components/PaymentMethodSelector/index.tsx");
			var V = e => {
				const {
					buttonId: t,
					className: a,
					customField: n,
					"data-redditstyle": r = !1,
					disabled: o,
					onSubmit: c,
					openInNewWindow: i,
					title: l
				} = e, d = o || !t;
				return s.a.createElement("form", {
					className: a,
					action: "https://www.paypal.com/cgi-bin/webscr",
					method: "post",
					target: i ? "_blank" : "_top",
					onSubmit: c
				}, s.a.createElement("input", {
					type: "hidden",
					name: "cmd",
					value: "_s-xclick"
				}), s.a.createElement("input", {
					type: "hidden",
					name: "hosted_button_id",
					value: t
				}), n && s.a.createElement("input", {
					type: "hidden",
					name: "custom",
					value: n
				}), s.a.createElement(k.f, {
					type: "submit",
					"data-redditstyle": r,
					disabled: d
				}, l))
			};
			class D extends s.a.Component {
				constructor() {
					super(...arguments), this.onCompletePurchaseClick = () => {
						const {
							onCompletePurchaseClick: e,
							sendEvent: t,
							stripe: a
						} = this.props;
						a && (t(Object(g.b)()), e(a))
					}, this.onPaypalSubmit = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(g.c)())
					}
				}
				render() {
					const {
						passthrough: e,
						paypalButtonId: t,
						selectedPayment: a,
						stripeTokenPending: n
					} = this.props;
					return s.a.createElement("div", {
						className: _.a.premiumPurchaseSelectPaymentFooter
					}, a === d.vb && s.a.createElement(V, {
						buttonId: t,
						className: _.a.premiumPurchaseButton,
						customField: e,
						"data-redditstyle": !0,
						disabled: !e,
						onSubmit: this.onPaypalSubmit,
						title: Object(O.c)("Continue to paypal")
					}), a === d.ub && s.a.createElement(k.f, {
						className: _.a.premiumPurchaseButton,
						"data-redditstyle": !0,
						disabled: n,
						onClick: this.onCompletePurchaseClick
					}, s.a.createElement(N.c, null, "Complete purchase")))
				}
			}
			var B = Object(T.injectStripe)(Object(p.b)(D));
			var G = e => s.a.createElement("div", {
				className: _.a.premiumPurchaseHeader,
				style: {
					backgroundImage: 'url("'.concat(c.a.assetPath, '/img/gold/premium-hero-g.jpg")')
				}
			}, s.a.createElement(x.a, {
				className: _.a.premiumIcon,
				title: Object(O.c)("Reddit Premium")
			}), s.a.createElement("div", {
				className: _.a.titleMain
			}, s.a.createElement(N.c, null, "Buy Reddit Premium!")), s.a.createElement("div", {
				className: _.a.titleDescription
			}, Object(v.a)(e.language, "gold.purchasePremiumModal.youArePurchasingRedditPremiumForYourself", {
				userName: e.userName
			})), s.a.createElement("button", {
				className: _.a.closeButton,
				onClick: e.onCloseClick
			}, s.a.createElement(f.b, {
				className: _.a.closeIcon,
				"data-redditstyle": !0
			})));
			var Y = e => s.a.createElement(T.StripeProvider, {
				apiKey: c.a.stripe.apiKey
			}, s.a.createElement(T.Elements, null, s.a.createElement(s.a.Fragment, null, s.a.createElement(G, {
				language: e.language,
				onCloseClick: e.onCloseModal,
				userName: e.userName
			}), s.a.createElement("div", {
				className: _.a.premiumPurchaseBody
			}, s.a.createElement(F.a, {
				className: _.a.selectPayment,
				nightmode: e.nightmode,
				selectedPayment: e.selectedPayment,
				onPaymentSelected: e.onPaymentSelected
			}), e.selectedPayment === d.ub && s.a.createElement(A.a, {
				className: _.a.creditCard
			}), s.a.createElement("div", {
				className: _.a.checkoutFooter
			}, s.a.createElement("div", {
				className: _.a.premiumPurchaseTotal
			}, Object(v.a)(e.language, "gold.purchasePremiumModal.totalMonthlyAmount", {
				amount: e.total / 100
			})), e.selectedPayment === d.ub && s.a.createElement("a", {
				href: "https://stripe.com",
				target: "_blank"
			}, s.a.createElement("img", {
				className: _.a.poweredByStripeIcon,
				src: "".concat(c.a.assetPath, "/img/payment-icons/powered-by-stripe.png")
			}))), e.selectedPayment === d.vb && e.paypalErrorMessage && s.a.createElement("div", {
				className: _.a.errorMessage
			}, e.paypalErrorMessage), e.selectedPayment === d.ub && e.stripeErrorMessage && s.a.createElement("div", {
				className: _.a.errorMessage
			}, e.stripeErrorMessage), s.a.createElement("div", {
				className: _.a.membershipDescription
			}, s.a.createElement(N.c, null, "Your Reddit Premium membership automatically renews on a monthly basis. Cancel anytime. There are no refunds for partial months.")), s.a.createElement("div", {
				className: _.a.agreementLink
			}, Object(w.a)(Object(v.a)(e.language, "gold.purchasePremiumModal.byPurchasingRedditPremiumYouAgree"), {
				":agreement:": s.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank"
				}, s.a.createElement(N.c, null, "Reddit User Agreement"))
			}))), s.a.createElement(B, {
				onCompletePurchaseClick: e.onCompletePurchaseClick,
				passthrough: e.passthrough,
				paypalButtonId: e.paypalButtonId,
				selectedPayment: e.selectedPayment,
				stripeTokenPending: e.stripeTokenPending
			}))));

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const W = Object(o.c)({
					activePage: C.p,
					allowNavigationCallback: e => {
						const t = Object(E.a)(e);
						return null === t ? void 0 : t
					},
					language: P.P,
					nightmode: P.R,
					passthrough: C.g,
					selectedPayment: C.e,
					stripeErrorMessage: C.l,
					stripeTokenPending: C.o,
					paypalErrorMessage: C.f,
					userName: e => {
						const t = Object(P.i)(e);
						return "u/".concat(Object(b.f)(t))
					}
				}),
				H = Object(r.b)(W, (e, t) => ({
					closeModal: () => e(Object(u.d)()),
					onCloseModalClick: () => e(Object(u.d)()),
					onCompletePurchaseClick: t => e(Object(u.g)(t)),
					onPaymentSelected: t => e(Object(m.selectPaymentMethod)(t))
				}));
			class K extends s.a.Component {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						const {
							onTryCloseModal: t
						} = this.props;
						if (27 === e.keyCode) return t()
					}
				}
				componentWillUnmount() {
					Object(y.b)(y.a.GoldPayment), document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						sendEvent: e
					} = this.props;
					Object(y.d)(y.a.GoldPayment), e(Object(g.g)())
				}
				componentDidUpdate(e) {
					if (this.props.stripeErrorMessage && !e.stripeErrorMessage) {
						const {
							sendEvent: e
						} = this.props;
						e(Object(g.f)())
					}
				}
				render() {
					const {
						activePage: e,
						className: t,
						language: a,
						nightmode: n,
						selectedPayment: r,
						onCompletePurchaseClick: o,
						onPaymentSelected: i,
						onTryCloseModal: l,
						passthrough: m,
						stripeErrorMessage: u,
						stripeTokenPending: p,
						paypalErrorMessage: h,
						userName: y
					} = this.props;
					return s.a.createElement("div", {
						className: t
					}, "selectPayment" === e && s.a.createElement(Y, {
						language: a,
						nightmode: n,
						onCloseModal: l,
						onCompletePurchaseClick: o,
						onPaymentSelected: i,
						passthrough: m,
						paypalButtonId: c.a.paypal.buttons.premium,
						selectedPayment: r,
						stripeErrorMessage: u,
						stripeTokenPending: p,
						paypalErrorMessage: h,
						total: d.mb,
						userName: y
					}), "paymentCompleted" === e && s.a.createElement(S, {
						language: a,
						onCloseClick: l
					}))
				}
			}
			const U = Object(i.a)(K),
				Q = {
					backgroundColor: h.a.overlayReportFlow
				};
			t.default = H(Object(p.b)(class extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(g.a)()), this.onCloseModal()
					}, this.onCloseModal = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}
				}
				render() {
					return s.a.createElement(U, L({}, this.props, {
						className: Object(l.a)(this.props.className, _.a.premiumPurchaseModal),
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						overlayCustomStyles: Q,
						withOverlay: !0
					}))
				}
			}))
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			a("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);

			function r(e, t) {
				const a = e.split(":");
				return a.length % 2 == 0 ? e : a.reduce((e, a, n) => (n % 2 == 0 ? e.push(a) : "" === a ? e.push(":") : ":".concat(a, ":") in t ? e.push(t[":".concat(a, ":")]) : e.push(":".concat(a, ":")), e), []).map((e, t) => s.a.createElement(s.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return g
			})), a.d(t, "e", (function() {
				return b
			})), a.d(t, "c", (function() {
				return C
			})), a.d(t, "d", (function() {
				return E
			})), a.d(t, "b", (function() {
				return P
			})), a.d(t, "f", (function() {
				return v
			})), a.d(t, "g", (function() {
				return j
			})), a.d(t, "h", (function() {
				return N
			}));
			var n = a("./src/lib/constants/index.ts"),
				s = a("./src/reddit/models/Gold/Coins/index.ts"),
				r = a("./src/reddit/selectors/gold/giveAwards.ts"),
				o = a("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				c = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				i = a("./src/reddit/selectors/platform.ts"),
				l = a("./src/reddit/selectors/telemetry.ts"),
				d = a("./src/telemetry/models/GoldPurchase.ts"),
				m = a("./src/telemetry/models/Payment.ts"),
				u = a("./src/reddit/helpers/trackers/gild.ts"),
				p = a("./src/reddit/helpers/correlationIdTracker.ts"),
				h = a("./src/reddit/helpers/isComment.ts");
			const y = (e, t) => {
					const a = r.a(e),
						i = a ? Object(u.getAwardTypeFromAward)(a) : null,
						m = t ? i : c.q(e) ? d.Premium : d.Coins,
						y = t ? Object(h.a)(t) ? "comment" : "post" : void 0,
						g = c.d(e),
						b = Object(o.b)(e),
						C = Object(s.b)(g, b, !!t);
					return Object.assign({}, l.defaults(e), {
						comment: t ? l.comment(e, t) : null,
						correlationId: Object(p.c)(p.a.GoldPayment),
						post: t ? l.post(e, t) : null,
						screen: l.screen(e),
						subreddit: t ? l.subreddit(e) : null,
						goldPurchase: Object.assign({}, a ? {
							awardId: a.id,
							awardName: a.name,
							numberCoinsToRecipient: a.coinReward
						} : null, {
							type: m,
							gildedContent: !!t,
							contentType: y,
							numberCoins: C ? C.coins : void 0
						}),
						payment: {
							currency: "USD",
							amountInSmallestDenom: m === d.Premium ? n.mb : C ? C.pennies : void 0
						}
					})
				},
				g = e => t => Object.assign({}, y(t, e), {
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				b = e => t => Object.assign({}, y(t, e), {
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				C = e => t => Object.assign({}, y(t, e), {
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				E = e => t => Object.assign({}, y(t, e), {
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				P = e => t => Object.assign({}, y(t, e), {
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				v = e => t => Object.assign({}, y(t, e), {
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				j = e => t => {
					const a = y(t, e);
					return Object.assign({}, a, {
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: Object.assign({}, a.payment, {
							defaultOption: m.PaymentMethod.Paypal
						}),
						goldPurchase: Object.assign({}, a.goldPurchase, {
							source: e ? d.GiveGold : c.q(t) ? d.PremiumMarketing : d.CoinsMarketing
						})
					})
				},
				N = e => t => {
					const a = y(t, e);
					return Object.assign({}, a, {
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: Object.assign({}, a.payment, {
							method: Object(i.b)(t).queryParams.thanks ? m.PaymentMethod.Paypal : m.PaymentMethod.CreditCard
						})
					})
				}
		},
		"./src/reddit/models/Gold/Coins/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return n
			})), a.d(t, "a", (function() {
				return s
			}));
			const n = (e, t, a) => {
					let n = null;
					for (const s of t) {
						const t = n ? n.coins : 1 / 0,
							r = s.coins;
						if (r >= e && r < t) {
							if (a && s.coins < 1e3) continue;
							n = s
						}
					}
					return n
				},
				s = [{
					prompt: "What are Coins?",
					answer: ["Coins are our virtual good, and you can use them to award exceptional", "posts or comments, giving them Silver, Gold, or Platinum. We'll be adding cool", "new ways to spend your Coins in the future."].join(" ")
				}, {
					prompt: 'What is "Give Award"?',
					answer: 'Giving an Award, or "gilding", is a way to show appreciation for an exceptional contribution to Reddit. You can award someone by clicking on "Give Award" below their post or comment. This distinguishes it with an Award for all to see, and some even grant the honoree special bonus benefits.'
				}, {
					prompt: "What are these new Award types?",
					answer: ["There are now several ways to Give Awards. A Silver Award requires 100 Coins, ", "which simply marks a post or comment with a Silver Award icon. A classic Gold Award ", "requires 500 Coins and gives the recipient a week of Reddit Premium membership ", "and 100 Coins. Finally, the ultra rare Platinum Award costs 1800 Coins, ", "and gives the recipient with one month of Reddit Premium membership, which includes 700 ", "Coins for that month."].join(" ")
				}, {
					prompt: "I bought Coins, how can I tell how many I have?",
					answer: "If you buy Coins you will always have a balance associated with your Reddit account. You can view your balance on the top navigation bar by your username."
				}, {
					prompt: "Can I transfer Coins between Reddit accounts?",
					answer: "You cannot transfer your Reddit Coin balance across usernames, sorry. You can offer a Gold Award to other users which will grant them 100 Coins."
				}, {
					prompt: "Can I get Coins for free?",
					answer: "We may give away Coins on special occasions. Stay tuned!"
				}, {
					prompt: "What happened to Creddits? Do those still exist?",
					answer: "Yes, Creddits are simply called \"Coins\" now, and we've converted any existing balance at a generous exchange rate of one Creddit to 2000 Coins. That's double their original monetary value as a thank you for supporting us early. Use them to award exceptional posts and comments you come across. Thanks again for your contribution to the Reddit community."
				}, {
					prompt: "I thought Gold was the name of Reddit's subscription membership?",
					answer: 'You\'re correct, it used to also be the name of the subscription membership. However, many people confused the subscription "Reddit Gold" membership with a virtual good or coin. To make things easier to understand, we\'ve renamed the membership to "Reddit Premium", while our virtual good is called "Coins".'
				}]
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			const n = e => e.gild.selectedAward
		}
	}
]);
//# sourceMappingURL=PremiumPurchaseModal.9bf768773d92f28b54d6.js.map