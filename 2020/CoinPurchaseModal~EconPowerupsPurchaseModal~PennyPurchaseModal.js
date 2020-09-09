// https://www.redditstatic.com/desktop2x/CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal.1ce76ab13a82a1f60b4d.js
// Retrieved at 9/9/2020, 4:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal"], {
		"./src/graphql/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
		},
		"./src/graphql/operations/ConfirmPaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"6ad51fec38be"}')
		},
		"./src/graphql/operations/CreateEconOrder.json": function(e) {
			e.exports = JSON.parse('{"id":"1bf318d40021"}')
		},
		"./src/graphql/operations/CreatePaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"8bca171d6bb4"}')
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
			a.d(t, "g", (function() {
				return w
			})), a.d(t, "f", (function() {
				return R
			})), a.d(t, "e", (function() {
				return q
			})), a.d(t, "c", (function() {
				return A
			})), a.d(t, "b", (function() {
				return M
			})), a.d(t, "a", (function() {
				return J
			})), a.d(t, "d", (function() {
				return H
			}));
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/lodash/omit.js"),
				s = a.n(n),
				o = a("./node_modules/uuid/v4.js"),
				c = a.n(o),
				d = a("./src/config.ts"),
				i = a("./src/reddit/actions/toaster.ts"),
				l = a("./src/lib/addQueryParams/index.ts"),
				m = a("./src/lib/makeActionCreator/index.ts"),
				p = a("./src/lib/sentry/index.ts"),
				u = a("./src/reddit/models/Toast/index.ts"),
				h = a("./src/reddit/actions/gold/constants.ts"),
				g = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				b = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				C = a("./src/reddit/selectors/user.ts"),
				y = (a("./node_modules/core-js/modules/es6.regexp.to-string.js"), a("./src/graphql/operations/CancelEconRecurringPayment.json")),
				j = a("./src/graphql/operations/ConfirmPaypalPayment.json"),
				x = a("./src/graphql/operations/CreateEconOrder.json"),
				E = a("./src/graphql/operations/CreatePaypalPayment.json"),
				f = a("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				O = a("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				v = a("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				P = a("./src/graphql/operations/DeleteSavedStripeCard.json"),
				N = a("./src/graphql/operations/UserSavedStripeCards.json"),
				S = a("./src/lib/makeGqlRequest/index.ts");
			const _ = () => r.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				k = e => e.map(e => e.message).join(" : "),
				I = (e, t, a, n) => async (s, o, d) => {
					let {
						gqlContext: i
					} = d;
					const l = c()(),
						m = await ((e, t, a, r, n, s) => Object(S.a)(e, Object.assign(Object.assign({}, x), {
							variables: {
								input: {
									nonce: t,
									productId: a.id,
									productVersion: a.version,
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
						})))(i(), l, e, t, a, n);
					if (m.ok) {
						const e = m.body,
							{
								errors: t,
								order: a
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(k(t));
						if (a) return a.id
					}
					throw new Error((() => r.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, w = (e, t, a, n, s) => async (o, d, i) => {
					let {
						gqlContext: l
					} = i;
					const m = d(),
						u = () => o(Object(g.stripeApiError)(r.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						})));
					let h, y, j = "";
					try {
						j = await o(I(t, a, n, s))
					} catch (E) {
						return p.c.captureException(E), void(E.message && o(Object(g.stripeApiError)(E.message)))
					}
					o(Object(g.stripeTokenPending)());
					const x = Object(b.v)(m);
					if (x || (h = await o(Object(g.validateAndCreateStripeToken)(e)), y = Object(b.s)(m), h)) try {
						const e = c()(),
							t = x || y ? h && y ? ((e, t, a, r) => Object(S.a)(e, Object.assign(Object.assign({}, f), {
								variables: {
									nonce: t,
									orderId: a,
									token: r
								}
							})))(l(), e, j, h.id) : x ? ((e, t, a, r) => Object(S.a)(e, Object.assign(Object.assign({}, v), {
								variables: {
									nonce: t,
									orderId: a,
									cardId: r
								}
							})))(l(), e, j, x) : null : ((e, t, a, r) => Object(S.a)(e, Object.assign(Object.assign({}, O), {
								variables: {
									nonce: t,
									orderId: a,
									token: r
								}
							})))(l(), e, j, h.id),
							r = await t;
						if (!r || !r.ok) return void u(); {
							const e = r.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return void o(Object(g.stripeApiError)(k(e.errors)));
							if (e.ok && "PAID" !== e.payment.status) return void u();
							const t = Object(C.i)(d());
							t && o(H({
								subredditId: a,
								powerupsCount: s,
								user: t
							}))
						}
					} catch (E) {
						p.c.captureException(E), u()
					}
				}, R = (e, t, a, r) => async (n, s, o) => {
					let {
						gqlContext: i
					} = o, m = "";
					try {
						m = await n(I(e, t, a, r))
					} catch (h) {
						return p.c.captureException(h), h.message && n(Object(g.paypalApiError)(h.message)), null
					}
					const u = d.a.redditUrl;
					try {
						const e = Object(l.a)("".concat(u, "/framedModal/paypal-finish"), {
								_o: u,
								r: t,
								o: m,
								s: !0
							}),
							a = Object(l.a)("".concat(u, "/framedModal/paypal-finish"), {
								_o: u,
								r: t,
								o: m
							}),
							o = c()(),
							d = await ((e, t, a, r, n) => Object(S.a)(e, Object.assign(Object.assign({}, E), {
								variables: {
									nonce: t,
									orderId: a,
									successUrl: r,
									cancelUrl: n
								}
							})))(i(), o, m, e, a);
						if (d && d.ok) {
							const e = d.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return n(Object(g.paypalApiError)(k(e.errors))), null;
							const a = Object(C.i)(s());
							if (e.ok) {
								const {
									status: s
								} = e.payment;
								if ("ACTION_REQUIRED" === s) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === s && a) return n(H({
									subredditId: t,
									powerupsCount: r,
									user: a
								})), null
							}
						}
					} catch (h) {
						p.c.captureException(h)
					}
					return n(Object(g.paypalApiError)(_())), null
				}, q = (e, t) => async (a, r, n) => {
					let {
						gqlContext: s
					} = n;
					try {
						const r = c()(),
							n = await ((e, t, a, r) => Object(S.a)(e, Object.assign(Object.assign({}, j), {
								variables: {
									nonce: t,
									paymentId: a,
									token: r
								}
							})))(s(), r, e, t);
						if (n && n.ok) {
							const e = n.body.data.confirmEconPayment;
							if (e && e.errors && e.errors.length) return a(Object(g.paypalApiError)(k(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (o) {
						p.c.captureException(o)
					}
					return a(Object(g.paypalApiError)(_())), !1
				}, A = () => async (e, t, a) => {
					let {
						gqlContext: n
					} = a;
					e(Object(g.savedCardsPending)());
					try {
						const t = await (e => Object(S.a)(e, Object.assign(Object.assign({}, N), {
							variables: {}
						})))(n());
						if (t.ok) {
							const a = t.body;
							a.errors && a.errors.length && e(Object(g.stripeApiError)(a.errors[0].message));
							const {
								savedStripeCards: r
							} = a.data.identity, n = r.map(e => s()(Object.assign(Object.assign({}, e), {
								cardId: e.id
							}), "id"));
							e(Object(g.savedCardsSuccess)(n)), n[0] && e(Object(g.selectSavedCard)(n[0].cardId))
						} else e(Object(g.stripeApiError)(r.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (o) {
						p.c.captureException(o), e(Object(g.savedCardsSuccess)([]))
					}
				}, M = e => async (t, a, r) => {
					let {
						gqlContext: n
					} = r;
					t(Object(g._deleteSavedCard)(e));
					try {
						const t = await ((e, t) => Object(S.a)(e, Object.assign(Object.assign({}, P), {
							variables: {
								cardId: t
							}
						})))(n(), e);
						if (t.error) throw new Error(t.error.type);
						const a = t.body,
							{
								errors: r
							} = a.data.deleteEconPaymentMethod;
						if (r && r.length) throw new Error(k(r))
					} catch (s) {
						p.c.captureException(s)
					}
				}, V = Object(m.a)(h.P), T = Object(m.a)(h.Q), D = Object(m.a)(h.R), F = e => async (t, a) => {
					await t(V(e)), t(Object(i.e)({
						kind: u.b.Error,
						duration: i.a,
						text: e
					}))
				}, J = (e, t, a) => async (n, s, o) => {
					let {
						gqlContext: c
					} = o;
					n(T({
						subredditId: t,
						allocatedAt: a
					}));
					try {
						const s = await ((e, t) => Object(S.a)(e, Object.assign(Object.assign({}, y), {
							variables: {
								orderId: t
							}
						})))(c(), e);
						if (s.ok) {
							const e = s.body,
								{
									errors: r
								} = e.data.cancelEconRecurringPayment;
							if (r && r.length) return void n(F(r[0].message));
							n(D({
								subredditId: t,
								allocatedAt: a
							}))
						} else n(F(r.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (d) {
						p.c.captureException(d), n(F(r.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, H = Object(m.a)(h.T)
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
			const h = Object(c.c)({
					cardCvcValidation: m.d,
					cardExpiryValidation: m.e,
					cardName: m.f,
					cardNumberValidation: m.g,
					nameOnCardValidation: m.i,
					postalCodeValidation: m.j
				}),
				g = Object(o.b)(h, (e, t) => ({
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
					}), !h && s.a.createElement("div", {
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
					}), !g && s.a.createElement("div", {
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
			t.a = Object(i.injectStripe)(g(b))
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
			var h = e => {
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
				g = (a("./node_modules/core-js/modules/es6.regexp.to-string.js"), a("./src/reddit/icons/svgs/Trash2/index.tsx"));
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
					}, n.a.createElement(g.b, {
						className: u.a.icon
					})))
				}
			}
			var x = j,
				E = a("./src/reddit/actions/gold/productOfferPurchase.ts"),
				f = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				O = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				v = a("./src/reddit/selectors/goldPurchaseModals.ts");
			const P = Object(o.c)({
					rememberCard: v.s,
					savedCard: e => Object(v.u)(e)[0],
					stripeInfoLoading: v.t
				}),
				N = Object(s.b)(P, (e, t) => ({
					onClickDeleteCard: a => t.shouldDeleteCardWithGql ? e(Object(E.b)(a)) : e(Object(f.deleteSavedCard)(a)),
					onToggleRememberCard: () => e(Object(f.toggleRememberCard)())
				}));
			class S extends n.a.PureComponent {
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
					}, i && n.a.createElement(O.a, {
						className: u.a.loader,
						sizePx: 60
					}), l && o && n.a.createElement("form", null, n.a.createElement(x, {
						nightmode: t,
						onDelete: a,
						savedCard: o
					})), m && n.a.createElement(h, {
						onToggleRememberCard: r,
						rememberCard: s
					}))
				}
			}
			t.a = N(S)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal.1ce76ab13a82a1f60b4d.js.map