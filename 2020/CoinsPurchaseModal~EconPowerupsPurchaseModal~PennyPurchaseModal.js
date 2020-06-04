// https://www.redditstatic.com/desktop2x/CoinsPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal.210751050be121228cb8.js
// Retrieved at 6/4/2020, 7:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CoinsPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal"], {
		"./src/graphql/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
		},
		"./src/graphql/operations/CreateEconOrder.json": function(e) {
			e.exports = JSON.parse('{"id":"f59b6735a0b0"}')
		},
		"./src/graphql/operations/CreateStripePaymentWithProvidedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"179702814d8f"}')
		},
		"./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json": function(e) {
			e.exports = JSON.parse('{"id":"6d178a1662ba"}')
		},
		"./src/graphql/operations/CreateStripePaymentWithSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"9fc54f6de447"}')
		},
		"./src/graphql/operations/DeleteSavedStripeCard.json": function(e) {
			e.exports = JSON.parse('{"id":"87230cb9dec2"}')
		},
		"./src/graphql/operations/UserSavedStripeCards.json": function(e) {
			e.exports = JSON.parse('{"id":"d29c51cfbfe6"}')
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, a) {
			"use strict";
			a.d(t, "d", (function() {
				return O
			})), a.d(t, "c", (function() {
				return P
			})), a.d(t, "b", (function() {
				return _
			})), a.d(t, "a", (function() {
				return w
			}));
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/lodash/omit.js"),
				s = a.n(n),
				o = a("./node_modules/uuid/v4.js"),
				c = a.n(o),
				d = a("./src/reddit/actions/toaster.ts"),
				i = a("./src/lib/makeActionCreator/index.ts"),
				l = a("./src/lib/sentry/index.ts"),
				m = a("./src/reddit/models/Toast/index.ts"),
				p = a("./src/reddit/actions/gold/constants.ts"),
				u = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				g = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = a("./src/reddit/selectors/user.ts"),
				b = (a("./node_modules/core-js/modules/es6.regexp.to-string.js"), a("./src/graphql/operations/CancelEconRecurringPayment.json")),
				C = a("./src/graphql/operations/CreateEconOrder.json"),
				y = a("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				j = a("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				f = a("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				v = a("./src/graphql/operations/DeleteSavedStripeCard.json"),
				x = a("./src/graphql/operations/UserSavedStripeCards.json"),
				E = a("./src/lib/makeGqlRequest/index.ts");
			const O = (e, t, a, n, s) => async (o, d, i) => {
				let {
					gqlContext: m
				} = i;
				const p = c()(),
					b = d(),
					v = () => o(Object(u.stripeApiError)(r.fbt._("Something went wrong during order creation", null, {
						hk: "3QFzcV"
					}))),
					x = () => o(Object(u.stripeApiError)(r.fbt._("Something went wrong during payment creation", null, {
						hk: "iorHj"
					})));
				let O, P, _ = "";
				try {
					const e = await ((e, t, a, r, n, s) => Object(E.a)(e, Object.assign({}, C, {
						variables: {
							input: {
								nonce: t,
								productId: a.id,
								productVersion: 0,
								pricePackageId: a.pricePackages[0].id,
								currency: a.pricePackages[0].currency,
								price: (a.pricePackages[0].price * s).toString(),
								productsCount: s.toString(),
								powerUps: {
									subredditId: r,
									isAnonymous: n
								}
							}
						}
					})))(m(), p, t, a, n, s);
					if (!e.ok) return void v(); {
						const t = e.body,
							{
								errors: a,
								order: r
							} = t.data.createEconOrder;
						if (a && a.length) return void o(Object(u.stripeApiError)(a[0].message));
						_ = r.id
					}
				} catch (N) {
					return l.c.captureException(N), void v()
				}
				o(Object(u.stripeTokenPending)());
				const k = Object(g.v)(b);
				if (k || (O = await o(Object(u.validateAndCreateStripeToken)(e)), P = Object(g.s)(b), O)) try {
					const e = k || P ? O && P ? ((e, t, a, r) => Object(E.a)(e, Object.assign({}, y, {
							variables: {
								nonce: t,
								orderId: a,
								token: r
							}
						})))(m(), p, _, O.id) : k ? ((e, t, a, r) => Object(E.a)(e, Object.assign({}, f, {
							variables: {
								nonce: t,
								orderId: a,
								cardId: r
							}
						})))(m(), p, _, k) : null : ((e, t, a, r) => Object(E.a)(e, Object.assign({}, j, {
							variables: {
								nonce: t,
								orderId: a,
								token: r
							}
						})))(m(), p, _, O.id),
						t = await e;
					if (!t || !t.ok) return void x(); {
						const e = t.body;
						if (e.data && e.data.createEconPayment && e.data.createEconPayment.errors && e.data.createEconPayment.errors.length) return void o(Object(u.stripeApiError)(e.data.createEconPayment.errors[0].message));
						if (e.data.createEconPayment.ok && "PAID" !== e.data.createEconPayment.payment.status) return void x();
						const r = Object(h.i)(d());
						r && o(M({
							subredditId: a,
							powerupsCount: s,
							user: r
						}))
					}
				} catch (N) {
					l.c.captureException(N), x()
				}
			}, P = () => async (e, t, a) => {
				let {
					gqlContext: n
				} = a;
				e(Object(u.savedCardsPending)());
				try {
					const t = await (e => Object(E.a)(e, Object.assign({}, x, {
						variables: {}
					})))(n());
					if (t.ok) {
						const a = t.body;
						a.errors && a.errors.length && e(Object(u.stripeApiError)(a.errors[0].message));
						const {
							savedStripeCards: r
						} = a.data.identity, n = r.map(e => s()(Object.assign({}, e, {
							cardId: e.id
						}), "id"));
						e(Object(u.savedCardsSuccess)(n)), n[0] && e(Object(u.selectSavedCard)(n[0].cardId))
					} else e(Object(u.stripeApiError)(r.fbt._("Something went wrong getting saved cards", null, {
						hk: "4jSVgl"
					})))
				} catch (o) {
					l.c.captureException(o), e(Object(u.savedCardsSuccess)([]))
				}
			}, _ = e => async (t, a, r) => {
				let {
					gqlContext: n
				} = r;
				t(Object(u._deleteSavedCard)(e));
				try {
					const t = await ((e, t) => Object(E.a)(e, Object.assign({}, v, {
						variables: {
							cardId: t
						}
					})))(n(), e);
					if (t.error) throw new Error(t.error.type);
					const a = t.body,
						{
							errors: r
						} = a.data.deleteEconPaymentMethod;
					if (r && r.length) throw new Error(r[0].message)
				} catch (s) {
					l.c.captureException(s)
				}
			}, k = Object(i.a)(p.L), N = Object(i.a)(p.M), S = Object(i.a)(p.N), I = e => async (t, a) => {
				await t(k(e)), t(Object(d.e)({
					kind: m.b.Error,
					duration: d.a,
					text: e
				}))
			}, w = (e, t, a) => async (n, s, o) => {
				let {
					gqlContext: c
				} = o;
				n(N({
					subredditId: t,
					allocatedAt: a
				}));
				try {
					const s = await ((e, t) => Object(E.a)(e, Object.assign({}, b, {
						variables: {
							orderId: t
						}
					})))(c(), e);
					if (s.ok) {
						const e = s.body,
							{
								errors: r
							} = e.data.cancelEconRecurringPayment;
						if (r && r.length) return void n(I(r[0].message));
						n(S({
							subredditId: t,
							allocatedAt: a
						}))
					} else n(I(r.fbt._("Something went wrong", null, {
						hk: "2o7PI4"
					})))
				} catch (d) {
					l.c.captureException(d), n(I(r.fbt._("Something went wrong", null, {
						hk: "2o7PI4"
					})))
				}
			}, M = Object(i.a)(p.P)
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
			a("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/reselect/es/index.js"),
				d = a("./src/lib/classNames/index.ts"),
				i = a("./node_modules/react-stripe-elements/es/index.js"),
				l = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				m = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				p = a("./src/reddit/components/CheckoutForm/index.m.less"),
				u = a.n(p);
			const g = Object(c.c)({
					cardCvcValidation: m.e,
					cardExpiryValidation: m.f,
					cardName: m.g,
					cardNumberValidation: m.h,
					nameOnCardValidation: m.j,
					postalCodeValidation: m.k
				}),
				h = Object(o.b)(g, (e, t) => ({
					onCardElementChange: t => e(Object(l.cardElementChange)(t)),
					onNameInput: t => e(Object(l.cardNameInput)({
						cardName: t
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
						cardNumberValidation: o,
						onCardElementChange: c,
						nameOnCardValidation: l,
						postalCodeValidation: m
					} = this.props, {
						cardNumberReady: p,
						cardExpiryReady: g,
						cardCVCReady: h,
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
						className: Object(d.a)(u.a.checkoutForm, e)
					}, s.a.createElement("div", {
						className: u.a.formCellWide
					}, s.a.createElement("input", {
						className: Object(d.a)(u.a.cardInput, u.a.nameOnCard, {
							[u.a.cardInputError]: !!l
						}),
						type: "text",
						placeholder: r.fbt._("NAME ON CARD", null, {
							hk: "IgrlQ"
						}).toString(),
						onChange: this.onChange,
						value: n
					})), s.a.createElement("div", {
						className: u.a.formCell
					}, s.a.createElement(i.CardNumberElement, {
						className: Object(d.a)(u.a.cardInput, {
							[u.a.cardInputError]: !!o
						}),
						onChange: c,
						onReady: this.onCardNumberReady,
						placeholder: r.fbt._("CARD NUMBER", null, {
							hk: "3pqMxG"
						}).toString(),
						style: C
					}), !p && s.a.createElement("div", {
						className: u.a.elementPlaceholder
					}, r.fbt._("CARD NUMBER", null, {
						hk: "3pqMxG"
					}))), s.a.createElement("div", {
						className: u.a.formCell
					}, s.a.createElement(i.CardExpiryElement, {
						className: Object(d.a)(u.a.cardInput, {
							[u.a.cardInputError]: !!a
						}),
						onChange: c,
						onReady: this.onCardExpiryReady,
						placeholder: r.fbt._("MM/YY", null, {
							hk: "Hou17"
						}).toString(),
						style: C
					}), !g && s.a.createElement("div", {
						className: u.a.elementPlaceholder
					}, r.fbt._("MM/YY", null, {
						hk: "Hou17"
					}))), s.a.createElement("div", {
						className: u.a.formCell
					}, s.a.createElement(i.CardCVCElement, {
						className: Object(d.a)(u.a.cardInput, {
							[u.a.cardInputError]: !!t
						}),
						onChange: c,
						onReady: this.onCardCVCReady,
						placeholder: r.fbt._("CCV", null, {
							hk: "dZzZJ"
						}).toString(),
						style: C
					}), !h && s.a.createElement("div", {
						className: u.a.elementPlaceholder
					}, r.fbt._("CCV", null, {
						hk: "dZzZJ"
					}))), s.a.createElement("div", {
						className: u.a.formCell
					}, s.a.createElement(i.PostalCodeElement, {
						className: Object(d.a)(u.a.cardInput, {
							[u.a.cardInputError]: !!m
						}),
						onChange: c,
						onReady: this.onPostalCodeReady,
						placeholder: r.fbt._("ZIP CODE", null, {
							hk: "2lJZ4j"
						}).toString(),
						style: C
					}), !b && s.a.createElement("div", {
						className: u.a.elementPlaceholder
					}, r.fbt._("ZIP CODE", null, {
						hk: "2lJZ4j"
					}))))
				}
			}
			t.a = Object(i.injectStripe)(h(b))
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
			var r = a("./src/config.ts"),
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
				o = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/components/TrackingHelper/index.tsx"),
				d = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				i = a("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				l = a.n(i);
			const m = e => s.a.createElement("label", {
				className: Object(o.a)(e.className, l.a.paymentOption)
			}, s.a.createElement("input", {
				type: "radio",
				id: e.value,
				name: "payment-option",
				value: e.value,
				checked: e.selectedValue === e.value,
				onChange: e.onChange
			}), s.a.createElement("div", {
				className: Object(o.a)(l.a.paymentOptionContent, {
					[l.a.isNightmode]: e.nightmode
				})
			}, e.children));
			class p extends s.a.Component {
				constructor() {
					super(...arguments), this.onPaymentSelected = e => {
						const t = e.target.value,
							{
								gildThingId: a,
								onPaymentSelected: r,
								sendEvent: n
							} = this.props;
						switch (t) {
							case "creditCard":
								n(Object(d.e)(a));
								break;
							case "paypal":
								n(Object(d.f)(a))
						}
						return r(t)
					}
				}
				render() {
					const {
						className: e,
						nightmode: t,
						selectedPayment: a
					} = this.props;
					return s.a.createElement("form", {
						className: e
					}, s.a.createElement("fieldset", null, s.a.createElement(m, {
						nightmode: t,
						selectedValue: a,
						onChange: this.onPaymentSelected,
						value: "paypal"
					}, s.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(r.a.assetPath, "/img/payment-icons/paypal.png)")
						}
					})), s.a.createElement(m, {
						nightmode: t,
						selectedValue: a,
						onChange: this.onPaymentSelected,
						value: "creditCard"
					}, s.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(r.a.assetPath, "/img/payment-icons/visa.png)")
						}
					}), s.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(r.a.assetPath, "/img/payment-icons/mastercard.png)")
						}
					}), s.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(r.a.assetPath, "/img/payment-icons/amex.png)")
						}
					}), s.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(r.a.assetPath, "/img/payment-icons/discover.jpg)")
						}
					}))))
				}
			}
			t.a = Object(c.c)(p)
		},
		"./src/reddit/components/StripePaymentForm/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/StripePaymentForm/index.tsx": function(e, t, a) {
			"use strict";
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				c = a("./src/lib/classNames/index.ts"),
				d = a("./node_modules/fbt/lib/FbtPublic.js"),
				i = a("./src/config.ts"),
				l = a("./src/reddit/components/CheckoutForm/index.tsx"),
				m = a("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				p = a("./src/reddit/components/StripePaymentForm/index.m.less"),
				u = a.n(p);
			var g = e => {
					const {
						onToggleRememberCard: t,
						rememberCard: a
					} = e;
					return n.a.createElement(n.a.Fragment, null, n.a.createElement(l.a, {
						className: u.a.creditCard
					}), n.a.createElement(m.a, {
						className: u.a.saveCardCheckbox,
						isSelected: a,
						onClick: t,
						text: d.fbt._("Remember this card", null, {
							hk: "2arVov"
						})
					}), n.a.createElement("a", {
						href: "https://stripe.com",
						target: "_blank"
					}, n.a.createElement("img", {
						className: u.a.poweredByStripeIcon,
						src: "".concat(i.a.assetPath, "/img/payment-icons/powered-by-stripe.png")
					})))
				},
				h = (a("./node_modules/core-js/modules/es6.regexp.to-string.js"), a("./src/reddit/icons/svgs/Trash2/index.tsx"));
			const {
				fbt: b
			} = a("./node_modules/fbt/lib/FbtPublic.js"), C = e => 2 === e.length ? e : "0" + e, y = e => {
				switch (e.toLowerCase()) {
					case "visa":
						return "".concat(i.a.assetPath, "/img/payment-icons/visa.png");
					case "mastercard":
						return "".concat(i.a.assetPath, "/img/payment-icons/mastercard.png");
					case "discover":
						return "".concat(i.a.assetPath, "/img/payment-icons/discover.jpg");
					case "american express":
						return "".concat(i.a.assetPath, "/img/payment-icons/amex.png");
					default:
						return null
				}
			};
			class j extends n.a.PureComponent {
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
							onDelete: t,
							savedCard: a
						} = this.props;
						t(a.cardId)
					}
				}
				render() {
					const {
						savedCard: e
					} = this.props, t = y(e.brand);
					return n.a.createElement("label", {
						className: u.a.savedCardContainer
					}, n.a.createElement("input", {
						type: "radio",
						name: "use-saved-card",
						checked: !0,
						readOnly: !0
					}), n.a.createElement("div", {
						className: Object(c.a)(u.a.cardImageContainer, {
							[u.a.cardImageContainerNightmode]: this.props.nightmode
						})
					}, t ? n.a.createElement("img", {
						className: u.a.brandImage,
						src: t
					}) : n.a.createElement("span", {
						className: u.a.unknownCC
					}, "CC")), n.a.createElement("div", {
						className: u.a.cardDetails
					}, n.a.createElement("span", null, b._("Card ending in {Credit Card last four digits}", [b._param("Credit Card last four digits", e.last4)], {
						hk: "3dMxMn"
					})), n.a.createElement("span", {
						className: u.a.expiry
					}, b._("Expires {month} / {year}", [b._param("month", C(e.expirationMonth.toString())), b._param("year", e.expirationYear.toString())], {
						hk: "3iXzVI"
					}))), this.state.showConfirmText ? n.a.createElement("button", {
						className: u.a.confirmText,
						onClick: this.onConfirmClick
					}, b._("Confirm", null, {
						hk: "gFhpD"
					})) : n.a.createElement("button", {
						onClick: this.onTrashCanClick
					}, n.a.createElement(h.b, {
						className: u.a.icon
					})))
				}
			}
			var f = j,
				v = a("./src/reddit/actions/gold/productOfferPurchase.ts"),
				x = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				E = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				O = a("./src/reddit/selectors/goldPurchaseModals.ts");
			const P = Object(o.c)({
					rememberCard: O.s,
					savedCard: e => Object(O.u)(e)[0],
					stripeInfoLoading: O.t
				}),
				_ = Object(s.b)(P, (e, t) => ({
					onClickDeleteCard: a => t.shouldDeleteCardWithGql ? e(Object(v.b)(a)) : e(Object(x.deleteSavedCard)(a)),
					onToggleRememberCard: () => e(Object(x.toggleRememberCard)())
				}));
			class k extends n.a.PureComponent {
				render() {
					const {
						className: e,
						nightmode: t,
						onClickDeleteCard: a,
						onToggleRememberCard: r,
						rememberCard: s,
						savedCard: o,
						stripeInfoLoading: d
					} = this.props, i = d, l = !i && o, m = !i && !l, p = i ? u.a.loadingState : l ? u.a.savedCardState : u.a.formState;
					return n.a.createElement("div", {
						className: Object(c.a)(u.a.stripePaymentForm, p, e)
					}, i && n.a.createElement(E.a, {
						className: u.a.loader,
						sizePx: 60
					}), l && o && n.a.createElement("form", null, n.a.createElement(f, {
						nightmode: t,
						onDelete: a,
						savedCard: o
					})), m && n.a.createElement(g, {
						onToggleRememberCard: r,
						rememberCard: s
					}))
				}
			}
			t.a = _(k)
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return h
			})), a.d(t, "f", (function() {
				return b
			})), a.d(t, "d", (function() {
				return C
			})), a.d(t, "e", (function() {
				return y
			})), a.d(t, "c", (function() {
				return j
			})), a.d(t, "a", (function() {
				return f
			})), a.d(t, "g", (function() {
				return v
			})), a.d(t, "h", (function() {
				return x
			})), a.d(t, "i", (function() {
				return E
			}));
			var r = a("./src/lib/constants/index.ts"),
				n = a("./src/reddit/selectors/gold/giveAwards.ts"),
				s = a("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = a("./src/reddit/selectors/platform.ts"),
				d = a("./src/reddit/selectors/telemetry.ts"),
				i = a("./src/telemetry/models/GoldPurchase.ts"),
				l = a("./src/telemetry/models/Payment.ts"),
				m = a("./src/reddit/helpers/trackers/gild.ts"),
				p = a("./src/reddit/helpers/correlationIdTracker.ts"),
				u = a("./src/reddit/helpers/isComment.ts");
			const g = (e, t) => {
					const {
						thingId: a,
						packageId: c
					} = t, l = n.a(e), g = l ? Object(m.getAwardTypeFromAward)(l) : null, h = a ? g : o.n(e) ? i.Premium : i.Coins, b = a ? Object(u.a)(a) ? "comment" : "post" : void 0, C = c || o.q(e), y = [...Object(s.b)(e), ...Object(s.d)(e)].filter(e => e.mobileId === C)[0], j = y && y.dealInfo && y.dealInfo.type, f = "low_coin_upsell" === j;
					let v;
					f && (v = "low_coin_balance"), "new_purchaser" === j && (v = "new_user_targeted_offer"), "repeat_purchaser" === j && (v = "repeat_user_targeted_offer");
					const x = y ? Math.round(1e4 * (y.baselinePennies - y.pennies) / y.baselinePennies) / 100 : 0,
						E = y ? Math.round(1e4 * (y.coins - y.baselineCoins) / y.coins) / 100 : 0,
						O = y ? y.baselinePennies !== y.pennies ? "".concat(x, "_percent_price") : y.baselineCoins !== y.coins ? "".concat(E, "_percent_bonus") : void 0 : void 0;
					return Object.assign({}, d.defaults(e), {
						comment: a ? d.comment(e, a) : null,
						correlationId: Object(p.c)(p.a.GoldPayment),
						post: a ? d.post(e, a) : null,
						screen: d.screen(e),
						subreddit: a ? d.subreddit(e) : null,
						goldPurchase: Object.assign({}, l ? {
							awardId: l.id,
							awardName: l.name,
							numberCoinsToRecipient: l.coinReward
						} : null, {
							type: h,
							gildedContent: !!a,
							contentType: b,
							numberCoins: y ? y.coins : void 0,
							offerContext: v,
							offerType: f ? y ? "".concat(y.bonusPct, "_percent_bonus") : void 0 : O
						}),
						payment: {
							currency: "USD",
							amountInSmallestDenom: h === i.Premium ? r.mb : y ? y.pennies : void 0
						}
					})
				},
				h = (e, t) => a => Object.assign({}, g(a, {
					packageId: t,
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				b = e => t => Object.assign({}, g(t, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				C = e => t => Object.assign({}, g(t, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				y = e => t => Object.assign({}, g(t, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				j = e => t => Object.assign({}, g(t, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				f = e => t => Object.assign({}, g(t, {
					packageId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				v = e => t => Object.assign({}, g(t, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				x = (e, t) => t => {
					const a = g(t, {
						thingId: e
					});
					return Object.assign({}, a, {
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: Object.assign({}, a.payment, {
							defaultOption: l.PaymentMethod.Paypal
						}),
						goldPurchase: Object.assign({}, a.goldPurchase, {
							source: e ? i.GiveGold : o.n(t) ? i.PremiumMarketing : i.CoinsMarketing
						})
					})
				},
				E = e => t => {
					const a = g(t, {
						thingId: e
					});
					return Object.assign({}, a, {
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: Object.assign({}, a.payment, {
							method: Object(c.b)(t).queryParams.thanks ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						})
					})
				}
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, a) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return d
			}));
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/Trash2/index.m.less"),
				c = a.n(o);
			const d = e => n.a.createElement("svg", {
				className: Object(s.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), n.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = d
		}
	}
]);
//# sourceMappingURL=CoinsPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal.210751050be121228cb8.js.map