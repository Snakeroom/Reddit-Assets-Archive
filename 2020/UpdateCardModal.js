// https://www.redditstatic.com/desktop2x/UpdateCardModal.6cdecb5fd7bc986c2a8b.js
// Retrieved at 4/6/2020, 12:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["UpdateCardModal"], {
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
			var r = a("./node_modules/react/index.js"),
				n = a.n(r),
				s = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/reselect/es/index.js"),
				d = a("./src/lib/classNames/index.ts"),
				o = a("./node_modules/react-stripe-elements/es/index.js"),
				l = a("./src/reddit/i18n/utils.ts"),
				i = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				m = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				p = a("./src/reddit/components/CheckoutForm/index.m.less"),
				u = a.n(p);
			const h = Object(c.c)({
					cardCvcValidation: m.f,
					cardExpiryValidation: m.g,
					cardName: m.h,
					cardNumberValidation: m.i,
					nameOnCardValidation: m.k,
					postalCodeValidation: m.l
				}),
				C = Object(s.b)(h, (e, t) => ({
					onCardElementChange: t => e(Object(i.cardElementChange)(t)),
					onNameInput: t => e(Object(i.cardNameInput)({
						cardName: t
					}))
				}));
			class b extends n.a.Component {
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
						cardName: r,
						cardNumberValidation: s,
						onCardElementChange: c,
						nameOnCardValidation: i,
						postalCodeValidation: m
					} = this.props, {
						cardNumberReady: p,
						cardExpiryReady: h,
						cardCVCReady: C,
						postalCodeReady: b
					} = this.state, y = {
						base: {
							lineHeight: "40px",
							color: this.computedStyle.getPropertyValue("--newRedditTheme-bodyText"),
							"::placeholder": {
								color: this.computedStyle.getPropertyValue("--newRedditTheme-metaText")
							}
						}
					};
					return n.a.createElement("div", {
						className: Object(d.a)(u.a.checkoutForm, e)
					}, n.a.createElement("div", {
						className: u.a.formCellWide
					}, n.a.createElement("input", {
						className: Object(d.a)(u.a.cardInput, u.a.nameOnCard, {
							[u.a.cardInputError]: !!i
						}),
						type: "text",
						placeholder: Object(l.c)("NAME ON CARD"),
						onChange: this.onChange,
						value: r
					})), n.a.createElement("div", {
						className: u.a.formCell
					}, n.a.createElement(o.CardNumberElement, {
						className: Object(d.a)(u.a.cardInput, {
							[u.a.cardInputError]: !!s
						}),
						onChange: c,
						onReady: this.onCardNumberReady,
						placeholder: Object(l.c)("CARD NUMBER"),
						style: y
					}), !p && n.a.createElement("div", {
						className: u.a.elementPlaceholder
					}, Object(l.c)("CARD NUMBER"))), n.a.createElement("div", {
						className: u.a.formCell
					}, n.a.createElement(o.CardExpiryElement, {
						className: Object(d.a)(u.a.cardInput, {
							[u.a.cardInputError]: !!a
						}),
						onChange: c,
						onReady: this.onCardExpiryReady,
						placeholder: Object(l.c)("MM/YY"),
						style: y
					}), !h && n.a.createElement("div", {
						className: u.a.elementPlaceholder
					}, Object(l.c)("MM/YY"))), n.a.createElement("div", {
						className: u.a.formCell
					}, n.a.createElement(o.CardCVCElement, {
						className: Object(d.a)(u.a.cardInput, {
							[u.a.cardInputError]: !!t
						}),
						onChange: c,
						onReady: this.onCardCVCReady,
						placeholder: Object(l.c)("CCV"),
						style: y
					}), !C && n.a.createElement("div", {
						className: u.a.elementPlaceholder
					}, Object(l.c)("CCV"))), n.a.createElement("div", {
						className: u.a.formCell
					}, n.a.createElement(o.PostalCodeElement, {
						className: Object(d.a)(u.a.cardInput, {
							[u.a.cardInputError]: !!m
						}),
						onChange: c,
						onReady: this.onPostalCodeReady,
						placeholder: Object(l.c)("ZIP CODE"),
						style: y
					}), !b && n.a.createElement("div", {
						className: u.a.elementPlaceholder
					}, Object(l.c)("ZIP CODE"))))
				}
			}
			t.a = Object(o.injectStripe)(C(b))
		},
		"./src/reddit/components/UpdateCardModal/index.m.less": function(e, t, a) {
			e.exports = {
				updateCardModal: "os7Z68gjeVRl7RuPuGdC2",
				descriptionText: "YkayV3NPfGSSJNBYEMGfk",
				poweredByStripeIcon: "G3cUFBALhoZEboe63P47m",
				agreementLink: "_1a6aYfR0raBv5P0pBXS2JB",
				updateButton: "ysTohje3Abv2wK8ZJRYjg"
			}
		},
		"./src/reddit/components/UpdateCardModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var r = a("./src/config.ts"),
				n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				c = a.n(s),
				d = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/react-stripe-elements/es/index.js"),
				l = a("./node_modules/reselect/es/index.js"),
				i = a("./src/lib/classNames/index.ts"),
				m = a("./src/reddit/components/UpdateCardModal/index.m.less"),
				p = a.n(m),
				u = a("./src/higherOrderComponents/asModal/index.tsx"),
				h = a("./src/app/strings/index.ts"),
				C = a("./src/lib/constants/index.ts"),
				b = a("./src/lib/makeActionCreator/index.ts"),
				y = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				E = a("./src/reddit/actions/modal.ts"),
				O = a("./src/reddit/actions/toaster.ts"),
				x = a("./src/reddit/components/Settings/PremiumForm.tsx"),
				j = a("./src/reddit/endpoints/gold/purchase.ts"),
				g = a("./src/reddit/models/Toast/index.ts"),
				N = a("./src/reddit/selectors/activeModalId.ts"),
				R = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				_ = a("./src/reddit/selectors/user.ts"),
				f = a("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const P = Object(b.a)(f.c),
				v = () => async (e, t) => {
					Object(N.b)(x.a)(t()) && (e(Object(E.i)(x.a)), e(P()))
				}, I = Object(b.a)(f.t), S = Object(b.a)(f.s), k = (e, t) => {
					switch (e && e.error && e.error.type) {
						case C.D.USER_DOESNT_EXIST:
						case C.D.VALIDATION_ERROR:
							return Object(h.a)(t, "error.type.invalidUser");
						case C.D.NO_STRIPE_SUBSCRIPTION:
							return Object(h.a)(t, "error.type.noStripeSubscription");
						case C.D.CREDIT_CARD_FAILURE:
							return e.error && e.error.fields && e.error.fields[0] && e.error.fields[0].msg || Object(h.a)(t, "error.generic");
						case C.D.AUTHENTICATION_ERROR:
							return Object(h.a)(t, "error.authentication");
						default:
							return Object(h.a)(t, "error.generic")
					}
				}, w = e => async t => {
					await t(S()), t(Object(O.e)({
						kind: g.b.Error,
						duration: O.a,
						text: e
					}))
				}, M = Object(b.a)(f.u), V = e => async (t, a) => {
					t(M(e)), t(v());
					const r = a(),
						n = Object(_.O)(r),
						s = Object(h.a)(n, "gold.checkoutForm.infoSuccessfullyUpdated");
					t(Object(O.e)({
						kind: g.b.SuccessCommunity,
						text: s
					}))
				};
			var T = a("./src/reddit/components/CheckoutForm/index.tsx"),
				A = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				D = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				B = a("./src/reddit/controls/TextButton/index.tsx"),
				L = a("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const F = Object(l.c)({
					isPending: R.w
				}),
				Y = Object(d.b)(F, (e, t) => ({
					closeModal: () => e(v()),
					submitCard: t => e((e => async (t, a, r) => {
						let {
							apiContext: n
						} = r;
						t(I()), t(Object(y.stripeTokenPending)());
						const s = a(),
							c = Object(_.O)(s),
							d = await t(Object(y.validateAndCreateStripeToken)(e));
						if (!d) {
							const e = Object(R.j)(a()) || Object(h.a)(c, "error.type.genericCardValidation");
							return await t(w(e))
						}
						try {
							const e = await Object(j.h)(n(), c, d);
							if (e.ok) {
								const a = e.body,
									{
										brand: r,
										card_id: n,
										last4: s,
										exp_month: c,
										exp_year: d
									} = a;
								await t(V({
									brand: r,
									cardId: n,
									last4: s,
									expirationMonth: c,
									expirationYear: d
								}))
							} else {
								const a = k(e, c);
								await t(w(a))
							}
						} catch (o) {
							const e = Object(h.a)(c, "error.generic");
							await t(w(e))
						}
					})(t))
				})),
				K = 15;
			class G extends c.a.Component {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						27 === e.keyCode && this.props.closeModal()
					}, this.handleSubmitCard = () => {
						const {
							stripe: e,
							submitCard: t
						} = this.props;
						e && t(e)
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					const {
						className: e,
						closeModal: t,
						isPending: a
					} = this.props;
					return c.a.createElement(A.c, {
						className: Object(i.a)(e, p.a.updateCardModal)
					}, c.a.createElement(A.g, null, c.a.createElement(L.a, null, c.a.createElement(A.n, null, n.fbt._("Update Payment Information", null, {
						hk: "1PrvDp"
					})), c.a.createElement(B.a, {
						onClick: t
					}, c.a.createElement(A.b, null))), c.a.createElement(A.m, {
						className: p.a.descriptionText
					}, n.fbt._("Change the Credit Card associated with your Premium subscription. This will be reflected in your next billing cycle.", null, {
						hk: "1btBv6"
					}))), c.a.createElement(A.j, null, c.a.createElement(T.a, {
						className: p.a.creditCard
					}), c.a.createElement("a", {
						href: "https://stripe.com",
						target: "_blank"
					}, c.a.createElement("img", {
						className: p.a.poweredByStripeIcon,
						src: "".concat(r.a.assetPath, "/img/payment-icons/powered-by-stripe.png")
					})), c.a.createElement("div", {
						className: p.a.agreementLink
					}, n.fbt._("By purchasing Coins, you agree to the {agreement}", [n.fbt._param("agreement", c.a.createElement("a", {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, n.fbt._("Reddit User Agreement", null, {
						hk: "2oIYsO"
					})))], {
						hk: "3VFT3g"
					}))), c.a.createElement(A.e, null, c.a.createElement(A.o, {
						className: p.a.updateButton,
						"data-redditstyle": !0,
						disabled: a,
						onClick: this.handleSubmitCard
					}, a ? c.a.createElement(D.a, {
						sizePx: K
					}) : n.fbt._("update", null, {
						hk: "4FAt0s"
					}))))
				}
			}
			const J = Object(o.injectStripe)(Object(u.a)(G));
			t.default = Y(e => c.a.createElement(o.StripeProvider, {
				apiKey: r.a.stripe.apiKey
			}, c.a.createElement(o.Elements, null, c.a.createElement(J, U({}, e, {
				withOverlay: !0,
				onOverlayClick: e.closeModal
			})))))
		}
	}
]);
//# sourceMappingURL=UpdateCardModal.6cdecb5fd7bc986c2a8b.js.map