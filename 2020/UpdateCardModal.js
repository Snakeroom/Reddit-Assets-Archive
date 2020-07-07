// https://www.redditstatic.com/desktop2x/UpdateCardModal.c77900a70351c1fe8497.js
// Retrieved at 7/7/2020, 10:50:06 AM by Reddit Dataminer v1.0.0
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
			a("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var r = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/react/index.js"),
				s = a.n(n),
				d = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				l = a("./src/lib/classNames/index.ts"),
				c = a("./node_modules/react-stripe-elements/es/index.js"),
				i = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				m = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				u = a("./src/reddit/components/CheckoutForm/index.m.less"),
				p = a.n(u);
			const h = Object(o.c)({
					cardCvcValidation: m.d,
					cardExpiryValidation: m.e,
					cardName: m.f,
					cardNumberValidation: m.g,
					nameOnCardValidation: m.i,
					postalCodeValidation: m.j
				}),
				b = Object(d.b)(h, (e, t) => ({
					onCardElementChange: t => e(Object(i.cardElementChange)(t)),
					onNameInput: t => e(Object(i.cardNameInput)({
						cardName: t
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
						cardNumberValidation: d,
						onCardElementChange: o,
						nameOnCardValidation: i,
						postalCodeValidation: m
					} = this.props, {
						cardNumberReady: u,
						cardExpiryReady: h,
						cardCVCReady: b,
						postalCodeReady: C
					} = this.state, y = {
						base: {
							lineHeight: "40px",
							color: this.computedStyle.getPropertyValue("--newRedditTheme-bodyText"),
							"::placeholder": {
								color: this.computedStyle.getPropertyValue("--newRedditTheme-metaText")
							}
						}
					};
					return s.a.createElement("div", {
						className: Object(l.a)(p.a.checkoutForm, e)
					}, s.a.createElement("div", {
						className: p.a.formCellWide
					}, s.a.createElement("input", {
						className: Object(l.a)(p.a.cardInput, p.a.nameOnCard, {
							[p.a.cardInputError]: !!i
						}),
						type: "text",
						placeholder: r.fbt._("NAME ON CARD", null, {
							hk: "IgrlQ"
						}).toString(),
						onChange: this.onChange,
						value: n
					})), s.a.createElement("div", {
						className: p.a.formCell
					}, s.a.createElement(c.CardNumberElement, {
						className: Object(l.a)(p.a.cardInput, {
							[p.a.cardInputError]: !!d
						}),
						onChange: o,
						onReady: this.onCardNumberReady,
						placeholder: r.fbt._("CARD NUMBER", null, {
							hk: "3pqMxG"
						}).toString(),
						style: y
					}), !u && s.a.createElement("div", {
						className: p.a.elementPlaceholder
					}, r.fbt._("CARD NUMBER", null, {
						hk: "3pqMxG"
					}))), s.a.createElement("div", {
						className: p.a.formCell
					}, s.a.createElement(c.CardExpiryElement, {
						className: Object(l.a)(p.a.cardInput, {
							[p.a.cardInputError]: !!a
						}),
						onChange: o,
						onReady: this.onCardExpiryReady,
						placeholder: r.fbt._("MM/YY", null, {
							hk: "Hou17"
						}).toString(),
						style: y
					}), !h && s.a.createElement("div", {
						className: p.a.elementPlaceholder
					}, r.fbt._("MM/YY", null, {
						hk: "Hou17"
					}))), s.a.createElement("div", {
						className: p.a.formCell
					}, s.a.createElement(c.CardCVCElement, {
						className: Object(l.a)(p.a.cardInput, {
							[p.a.cardInputError]: !!t
						}),
						onChange: o,
						onReady: this.onCardCVCReady,
						placeholder: r.fbt._("CCV", null, {
							hk: "dZzZJ"
						}).toString(),
						style: y
					}), !b && s.a.createElement("div", {
						className: p.a.elementPlaceholder
					}, r.fbt._("CCV", null, {
						hk: "dZzZJ"
					}))), s.a.createElement("div", {
						className: p.a.formCell
					}, s.a.createElement(c.PostalCodeElement, {
						className: Object(l.a)(p.a.cardInput, {
							[p.a.cardInputError]: !!m
						}),
						onChange: o,
						onReady: this.onPostalCodeReady,
						placeholder: r.fbt._("ZIP CODE", null, {
							hk: "2lJZ4j"
						}).toString(),
						style: y
					}), !C && s.a.createElement("div", {
						className: p.a.elementPlaceholder
					}, r.fbt._("ZIP CODE", null, {
						hk: "2lJZ4j"
					}))))
				}
			}
			t.a = Object(c.injectStripe)(b(C))
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
				d = a.n(s),
				o = a("./node_modules/react-redux/es/index.js"),
				l = a("./node_modules/react-stripe-elements/es/index.js"),
				c = a("./node_modules/reselect/es/index.js"),
				i = a("./src/lib/classNames/index.ts"),
				m = a("./src/reddit/components/UpdateCardModal/index.m.less"),
				u = a.n(m),
				p = a("./src/higherOrderComponents/asModal/index.tsx"),
				h = a("./src/lib/constants/index.ts"),
				b = a("./src/lib/makeActionCreator/index.ts"),
				C = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				y = a("./src/reddit/actions/modal.ts"),
				E = a("./src/reddit/actions/toaster.ts"),
				x = a("./src/reddit/components/Settings/PremiumForm.tsx"),
				g = a("./src/reddit/endpoints/gold/purchase.ts"),
				f = a("./src/reddit/models/Toast/index.ts"),
				_ = a("./src/reddit/selectors/activeModalId.ts"),
				O = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				N = a("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const k = Object(b.a)(N.f),
				j = () => async (e, t) => {
					Object(_.b)(x.a)(t()) && (e(Object(y.i)(x.a)), e(k()))
				}, R = Object(b.a)(N.F), S = Object(b.a)(N.E), w = e => {
					switch (e && e.error && e.error.type) {
						case h.E.USER_DOESNT_EXIST:
						case h.E.VALIDATION_ERROR:
							return n.fbt._("Looks like you entered an invalid user.", null, {
								hk: "Cv0iO"
							});
						case h.E.NO_STRIPE_SUBSCRIPTION:
							return n.fbt._("Sorry, but there's no Stripe customer associated with this account.", null, {
								hk: "2hv2Ey"
							});
						case h.E.CREDIT_CARD_FAILURE:
							return e.error && e.error.fields && e.error.fields[0] && e.error.fields[0].msg || n.fbt._("Something went wrong", null, {
								hk: "ie9Ol"
							});
						case h.E.AUTHENTICATION_ERROR:
							return n.fbt._("There was an authentication error", null, {
								hk: "12YR0w"
							});
						default:
							return n.fbt._("Something went wrong", null, {
								hk: "ie9Ol"
							})
					}
				}, P = e => async t => {
					await t(S()), t(Object(E.e)({
						kind: f.b.Error,
						duration: E.a,
						text: e
					}))
				}, v = Object(b.a)(N.G), I = e => async (t, a) => {
					t(v(e)), t(j());
					const r = n.fbt._("You successfully updated your payment information!", null, {
						hk: "3m4P1N"
					});
					t(Object(E.e)({
						kind: f.b.SuccessCommunity,
						text: r
					}))
				};
			var M = a("./src/reddit/components/CheckoutForm/index.tsx"),
				V = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				T = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				A = a("./src/reddit/controls/TextButton/index.tsx"),
				L = a("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r])
					}
					return e
				}).apply(this, arguments)
			}
			const B = Object(c.c)({
					isPending: O.x
				}),
				F = Object(o.b)(B, (e, t) => ({
					closeModal: () => e(j()),
					submitCard: t => e((e => async (t, a, r) => {
						let {
							apiContext: s
						} = r;
						t(R()), t(Object(C.stripeTokenPending)());
						const d = await t(Object(C.validateAndCreateStripeToken)(e));
						if (!d) {
							const e = Object(O.h)(a()) || n.fbt._("Looks like something went wrong validating your credit card.", null, {
								hk: "4eGqpL"
							});
							return await t(P(e))
						}
						try {
							const e = await Object(g.h)(s(), d);
							if (e.ok) {
								const a = e.body,
									{
										brand: r,
										card_id: n,
										last4: s,
										exp_month: d,
										exp_year: o
									} = a;
								await t(I({
									brand: r,
									cardId: n,
									last4: s,
									expirationMonth: d,
									expirationYear: o
								}))
							} else {
								const a = w(e);
								await t(P(a))
							}
						} catch (o) {
							const e = n.fbt._("Something went wrong", null, {
								hk: "ie9Ol"
							});
							await t(P(e))
						}
					})(t))
				})),
				U = 15;
			class Y extends d.a.Component {
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
					return d.a.createElement(V.d, {
						className: Object(i.a)(e, u.a.updateCardModal)
					}, d.a.createElement(V.h, null, d.a.createElement(L.a, null, d.a.createElement(V.p, null, n.fbt._("Update Payment Information", null, {
						hk: "1PrvDp"
					})), d.a.createElement(A.a, {
						onClick: t
					}, d.a.createElement(V.b, null))), d.a.createElement(V.o, {
						className: u.a.descriptionText
					}, n.fbt._("Change the Credit Card associated with your Premium subscription. This will be reflected in your next billing cycle.", null, {
						hk: "1btBv6"
					}))), d.a.createElement(V.k, null, d.a.createElement(M.a, {
						className: u.a.creditCard
					}), d.a.createElement("a", {
						href: "https://stripe.com",
						target: "_blank"
					}, d.a.createElement("img", {
						className: u.a.poweredByStripeIcon,
						src: "".concat(r.a.assetPath, "/img/payment-icons/powered-by-stripe.png")
					})), d.a.createElement("div", {
						className: u.a.agreementLink
					}, n.fbt._("By purchasing Coins, you agree to the {agreement}", [n.fbt._param("agreement", d.a.createElement("a", {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, n.fbt._("Reddit User Agreement", null, {
						hk: "2oIYsO"
					})))], {
						hk: "3VFT3g"
					}))), d.a.createElement(V.f, null, d.a.createElement(V.q, {
						className: u.a.updateButton,
						"data-redditstyle": !0,
						disabled: a,
						onClick: this.handleSubmitCard
					}, a ? d.a.createElement(T.a, {
						sizePx: U
					}) : n.fbt._("update", null, {
						hk: "4FAt0s"
					}))))
				}
			}
			const G = Object(l.injectStripe)(Object(p.a)(Y));
			t.default = F(e => d.a.createElement(l.StripeProvider, {
				apiKey: r.a.stripe.apiKey
			}, d.a.createElement(l.Elements, null, d.a.createElement(G, D({}, e, {
				withOverlay: !0,
				onOverlayClick: e.closeModal
			})))))
		}
	}
]);
//# sourceMappingURL=UpdateCardModal.c77900a70351c1fe8497.js.map