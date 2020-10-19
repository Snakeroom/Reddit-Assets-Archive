// https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.6989ce0c9d4b0b6183a0.js
// Retrieved at 10/19/2020, 2:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PremiumPurchaseModal"], {
		"./src/lib/loadRedditAdsPixel.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			})), a.d(t, "b", (function() {
				return s
			}));
			var n = a("./src/lib/sentry/index.ts");

			function r() {
				! function(e, t) {
					if (!e.rdt) {
						var a = e.rdt = function() {
							a.sendEvent ? a.sendEvent.apply(a, arguments) : a.callQueue.push(arguments)
						};
						a.callQueue = [];
						var n = t.createElement("script");
						n.src = "https://www.redditstatic.com/ads/pixel.js", n.async = !0;
						var r = t.getElementsByTagName("script")[0];
						r.parentNode.insertBefore(n, r)
					}
				}(window, document), rdt("init", "t2_2q2gwo2t"), rdt("track", "PageVisit")
			}
			const s = () => {
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
			a("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./node_modules/react/index.js"),
				s = a.n(r),
				o = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/reselect/es/index.js"),
				l = a("./src/lib/classNames/index.ts"),
				d = a("./node_modules/react-stripe-elements/es/index.js"),
				i = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				m = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				p = a("./src/reddit/components/CheckoutForm/index.m.less"),
				u = a.n(p);
			const h = Object(c.c)({
					cardCvcValidation: m.e,
					cardExpiryValidation: m.f,
					cardName: m.g,
					cardNumberValidation: m.h,
					nameOnCardValidation: m.j,
					postalCodeValidation: m.k
				}),
				y = Object(o.b)(h, (e, t) => ({
					onCardElementChange: t => e(Object(i.cardElementChange)(t)),
					onNameInput: t => e(Object(i.cardNameInput)({
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
						cardName: r,
						cardNumberValidation: o,
						onCardElementChange: c,
						nameOnCardValidation: i,
						postalCodeValidation: m
					} = this.props, {
						cardNumberReady: p,
						cardExpiryReady: h,
						cardCVCReady: y,
						postalCodeReady: b
					} = this.state, g = {
						base: {
							lineHeight: "40px",
							color: this.computedStyle.getPropertyValue("--newRedditTheme-bodyText"),
							"::placeholder": {
								color: this.computedStyle.getPropertyValue("--newRedditTheme-metaText")
							}
						}
					};
					return s.a.createElement("div", {
						className: Object(l.a)(u.a.checkoutForm, e)
					}, s.a.createElement("div", {
						className: u.a.formCellWide
					}, s.a.createElement("input", {
						className: Object(l.a)(u.a.cardInput, u.a.nameOnCard, {
							[u.a.cardInputError]: !!i
						}),
						type: "text",
						placeholder: n.fbt._("NAME ON CARD", null, {
							hk: "IgrlQ"
						}).toString(),
						onChange: this.onChange,
						value: r
					})), s.a.createElement("div", {
						className: u.a.formCell
					}, s.a.createElement(d.CardNumberElement, {
						className: Object(l.a)(u.a.cardInput, {
							[u.a.cardInputError]: !!o
						}),
						onChange: c,
						onReady: this.onCardNumberReady,
						placeholder: n.fbt._("CARD NUMBER", null, {
							hk: "3pqMxG"
						}).toString(),
						style: g
					}), !p && s.a.createElement("div", {
						className: u.a.elementPlaceholder
					}, n.fbt._("CARD NUMBER", null, {
						hk: "3pqMxG"
					}))), s.a.createElement("div", {
						className: u.a.formCell
					}, s.a.createElement(d.CardExpiryElement, {
						className: Object(l.a)(u.a.cardInput, {
							[u.a.cardInputError]: !!a
						}),
						onChange: c,
						onReady: this.onCardExpiryReady,
						placeholder: n.fbt._("MM/YY", null, {
							hk: "Hou17"
						}).toString(),
						style: g
					}), !h && s.a.createElement("div", {
						className: u.a.elementPlaceholder
					}, n.fbt._("MM/YY", null, {
						hk: "Hou17"
					}))), s.a.createElement("div", {
						className: u.a.formCell
					}, s.a.createElement(d.CardCVCElement, {
						className: Object(l.a)(u.a.cardInput, {
							[u.a.cardInputError]: !!t
						}),
						onChange: c,
						onReady: this.onCardCVCReady,
						placeholder: n.fbt._("CCV", null, {
							hk: "dZzZJ"
						}).toString(),
						style: g
					}), !y && s.a.createElement("div", {
						className: u.a.elementPlaceholder
					}, n.fbt._("CCV", null, {
						hk: "dZzZJ"
					}))), s.a.createElement("div", {
						className: u.a.formCell
					}, s.a.createElement(d.PostalCodeElement, {
						className: Object(l.a)(u.a.cardInput, {
							[u.a.cardInputError]: !!m
						}),
						onChange: c,
						onReady: this.onPostalCodeReady,
						placeholder: n.fbt._("ZIP CODE", null, {
							hk: "2lJZ4j"
						}).toString(),
						style: g
					}), !b && s.a.createElement("div", {
						className: u.a.elementPlaceholder
					}, n.fbt._("ZIP CODE", null, {
						hk: "2lJZ4j"
					}))))
				}
			}
			t.a = Object(d.injectStripe)(y(b))
		},
		"./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less": function(e, t, a) {
			e.exports = {
				purchaseFooter: "_2siiafYfV9NgkupSIDgaht",
				purchaseButton: "_18yTyMH2TYOdGSb9UumZq-"
			}
		},
		"./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				r = a.n(n),
				s = a("./src/reddit/controls/Button/index.tsx"),
				o = a("./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less"),
				c = a.n(o);
			const {
				fbt: l
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement("div", {
				className: c.a.purchaseFooter
			}, r.a.createElement(s.i, {
				className: c.a.purchaseButton,
				"data-redditstyle": !0,
				onClick: e.onCloseClick
			}, l._("Done", null, {
				hk: "3s1bT9"
			})))
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
				r = a("./node_modules/react/index.js"),
				s = a.n(r),
				o = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/components/TrackingHelper/index.tsx"),
				l = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				d = a("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				i = a.n(d);
			const m = e => s.a.createElement("label", {
				className: Object(o.a)(e.className, i.a.paymentOption)
			}, s.a.createElement("input", {
				type: "radio",
				id: e.value,
				name: "payment-option",
				value: e.value,
				checked: e.selectedValue === e.value,
				onChange: e.onChange
			}), s.a.createElement("div", {
				className: Object(o.a)(i.a.paymentOptionContent, {
					[i.a.isNightmode]: e.nightmode
				})
			}, e.children));
			class p extends s.a.Component {
				constructor() {
					super(...arguments), this.onPaymentSelected = e => {
						const t = e.target.value,
							{
								gildThingId: a,
								onPaymentSelected: n,
								sendEvent: r
							} = this.props;
						switch (t) {
							case "creditCard":
								r(Object(l.e)(a));
								break;
							case "paypal":
								r(Object(l.f)(a))
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
					return s.a.createElement("form", {
						className: e
					}, s.a.createElement("fieldset", null, s.a.createElement(m, {
						nightmode: t,
						selectedValue: a,
						onChange: this.onPaymentSelected,
						value: "paypal"
					}, s.a.createElement("div", {
						className: i.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(n.a.assetPath, "/img/payment-icons/paypal.png)")
						}
					})), s.a.createElement(m, {
						nightmode: t,
						selectedValue: a,
						onChange: this.onPaymentSelected,
						value: "creditCard"
					}, s.a.createElement("div", {
						className: i.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(n.a.assetPath, "/img/payment-icons/visa.png)")
						}
					}), s.a.createElement("div", {
						className: i.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(n.a.assetPath, "/img/payment-icons/mastercard.png)")
						}
					}), s.a.createElement("div", {
						className: i.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(n.a.assetPath, "/img/payment-icons/amex.png)")
						}
					}), s.a.createElement("div", {
						className: i.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(n.a.assetPath, "/img/payment-icons/discover.jpg)")
						}
					}))))
				}
			}
			t.a = Object(c.c)(p)
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
				r = a.n(n),
				s = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				c = a("./src/config.ts"),
				l = a("./src/higherOrderComponents/asModal/index.tsx"),
				d = a("./src/lib/classNames/index.ts"),
				i = a("./src/lib/constants/index.ts"),
				m = a("./src/reddit/models/Gold/Premium/index.ts"),
				p = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = a("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				h = a("./src/reddit/components/TrackingHelper/index.tsx"),
				y = a("./src/reddit/constants/colors.ts"),
				b = a("./src/reddit/helpers/correlationIdTracker.ts"),
				g = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				C = a("./src/reddit/models/User/index.ts"),
				E = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				P = a("./src/reddit/selectors/platform.ts"),
				x = a("./src/reddit/selectors/user.ts"),
				N = a("./node_modules/fbt/lib/FbtPublic.js"),
				k = a("./src/lib/loadRedditAdsPixel.ts"),
				v = a("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				f = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				_ = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				j = a("./src/reddit/icons/fonts/Premium/index.tsx"),
				M = a("./src/reddit/components/PremiumPurchaseModal/index.m.less"),
				O = a.n(M);
			class I extends r.a.PureComponent {
				componentDidMount() {
					const {
						sendEvent: e
					} = this.props;
					e(Object(g.j)()), Object(k.b)()
				}
				render() {
					const e = this.props;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: O.a.paymentCompleteHeader,
						style: {
							backgroundImage: 'url("'.concat(c.a.assetPath, '/img/gold/premium-hero-g.jpg")')
						}
					}, r.a.createElement(j.a, {
						className: O.a.premiumIcon,
						title: N.fbt._("Reddit Premium", null, {
							hk: "34acNx"
						})
					}), r.a.createElement("div", {
						className: O.a.paymentCompleteTitleMain
					}, N.fbt._("Thanks for purchasing Reddit Premium!", null, {
						hk: "27KGKp"
					})), r.a.createElement("div", {
						className: O.a.paymentCompleteTitleDescription
					}, r.a.createElement("div", {
						className: O.a.paymentCompleteTitleItem
					}, N.fbt._("You will receive a message in your inbox once your purchase is confirmed.", null, {
						hk: "27tvU4"
					})), r.a.createElement("div", {
						className: O.a.paymentCompleteTitleItem
					}, r.a.createElement("a", {
						href: "/settings/premium",
						target: "_blank"
					}, N.fbt._("Manage your ads-free experience.", null, {
						hk: "1RxPah"
					}))), r.a.createElement("div", {
						className: O.a.paymentCompleteTitleItemLast
					}, Object(_.a)(N.fbt._("Find more about {anchor text} on Reddit.", [N.fbt._param("anchor text", ":loungeLink:")], {
						hk: "2RGr1F"
					}), {
						":loungeLink:": r.a.createElement("a", {
							href: "/r/lounge",
							target: "_blank"
						}, "r/lounge")
					}))), r.a.createElement("button", {
						className: O.a.closeButton,
						onClick: e.onCloseClick
					}, r.a.createElement(f.b, {
						className: O.a.closeIcon,
						"data-redditstyle": !0
					}))), r.a.createElement(v.a, {
						onCloseClick: e.onCloseClick
					}))
				}
			}
			var R = Object(h.c)(I),
				S = a("./node_modules/react-stripe-elements/es/index.js"),
				T = a("./src/reddit/components/CheckoutForm/index.tsx"),
				w = a("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				F = a("./src/reddit/controls/Button/index.tsx");
			var V = e => {
				const {
					buttonId: t,
					className: a,
					customField: n,
					"data-redditstyle": s = !1,
					disabled: o,
					onSubmit: c,
					openInNewWindow: l,
					title: d
				} = e, i = o || !t;
				return r.a.createElement("form", {
					className: a,
					action: "https://www.paypal.com/cgi-bin/webscr",
					method: "post",
					target: l ? "_blank" : "_top",
					onSubmit: c
				}, r.a.createElement("input", {
					type: "hidden",
					name: "cmd",
					value: "_s-xclick"
				}), r.a.createElement("input", {
					type: "hidden",
					name: "hosted_button_id",
					value: t
				}), n && r.a.createElement("input", {
					type: "hidden",
					name: "custom",
					value: n
				}), r.a.createElement(F.i, {
					type: "submit",
					"data-redditstyle": s,
					disabled: i
				}, d))
			};
			class B extends r.a.Component {
				constructor() {
					super(...arguments), this.onCompletePurchaseClick = () => {
						const {
							onCompletePurchaseClick: e,
							sendEvent: t,
							stripe: a
						} = this.props;
						a && (t(Object(g.c)()), e(a))
					}, this.onPaypalSubmit = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(g.d)())
					}
				}
				render() {
					const {
						passthrough: e,
						paypalButtonId: t,
						selectedPayment: a,
						stripeTokenPending: n
					} = this.props;
					return r.a.createElement("div", {
						className: O.a.premiumPurchaseSelectPaymentFooter
					}, a === i.xb && r.a.createElement(V, {
						buttonId: t,
						className: O.a.premiumPurchaseButton,
						customField: e,
						"data-redditstyle": !0,
						disabled: !e,
						onSubmit: this.onPaypalSubmit,
						title: N.fbt._("Continue to PayPal", null, {
							hk: "2TCl83"
						})
					}), a === i.wb && r.a.createElement(F.i, {
						className: O.a.premiumPurchaseButton,
						"data-redditstyle": !0,
						disabled: n,
						onClick: this.onCompletePurchaseClick
					}, N.fbt._("Complete purchase", null, {
						hk: "15ZI2y"
					})))
				}
			}
			var D = Object(S.injectStripe)(Object(h.c)(B));
			var A = e => r.a.createElement("div", {
				className: O.a.premiumPurchaseHeader,
				style: {
					backgroundImage: 'url("'.concat(c.a.assetPath, '/img/gold/premium-hero-g.jpg")')
				}
			}, r.a.createElement(j.a, {
				className: O.a.premiumIcon,
				title: N.fbt._("Reddit Premium", null, {
					hk: "34acNx"
				})
			}), r.a.createElement("div", {
				className: O.a.titleMain
			}, N.fbt._("Buy Reddit Premium!", null, {
				hk: "3XxwQZ"
			})), r.a.createElement("div", {
				className: O.a.titleDescription
			}, N.fbt._("You're purchasing Reddit Premium for yourself, {username}!", [N.fbt._param("username", e.userName)], {
				hk: "bCrwe"
			})), r.a.createElement("button", {
				className: O.a.closeButton,
				onClick: e.onCloseClick
			}, r.a.createElement(f.b, {
				className: O.a.closeIcon,
				"data-redditstyle": !0
			})));
			var L = e => r.a.createElement(S.StripeProvider, {
				apiKey: c.a.stripe.apiKey
			}, r.a.createElement(S.Elements, null, r.a.createElement(r.a.Fragment, null, r.a.createElement(A, {
				onCloseClick: e.onCloseModal,
				userName: e.userName
			}), r.a.createElement("div", {
				className: O.a.premiumPurchaseBody
			}, r.a.createElement(w.a, {
				className: O.a.selectPayment,
				nightmode: e.nightmode,
				selectedPayment: e.selectedPayment,
				onPaymentSelected: e.onPaymentSelected
			}), e.selectedPayment === i.wb && r.a.createElement(T.a, {
				className: O.a.creditCard
			}), r.a.createElement("div", {
				className: O.a.checkoutFooter
			}, r.a.createElement("div", {
				className: O.a.premiumPurchaseTotal
			}, e.isAnnualPremium ? N.fbt._("Total: {Price}/annually", [N.fbt._param("Price", "$".concat((e.total / 100).toLocaleString()))], {
				hk: "4eKRFq"
			}) : N.fbt._("Total: {Price}/monthly", [N.fbt._param("Price", "$".concat((e.total / 100).toLocaleString()))], {
				hk: "1KYlb8"
			})), e.selectedPayment === i.wb && r.a.createElement("a", {
				href: "https://stripe.com",
				target: "_blank",
				rel: "noopener noreferrer"
			}, r.a.createElement("img", {
				className: O.a.poweredByStripeIcon,
				src: "".concat(c.a.assetPath, "/img/payment-icons/powered-by-stripe.png")
			}))), e.selectedPayment === i.xb && e.paypalErrorMessage && r.a.createElement("div", {
				className: O.a.errorMessage
			}, e.paypalErrorMessage), e.selectedPayment === i.wb && e.stripeErrorMessage && r.a.createElement("div", {
				className: O.a.errorMessage
			}, e.stripeErrorMessage), r.a.createElement("div", {
				className: O.a.membershipDescription
			}, e.isAnnualPremium ? N.fbt._("Your Reddit Premium membership automatically renews on an annual basis. Cancel anytime. There are no refunds for a partial year.", null, {
				hk: "2PiMj0"
			}) : N.fbt._("Your Reddit Premium membership automatically renews on a monthly basis. Cancel anytime. There are no refunds for partial months.", null, {
				hk: "38sUjf"
			})), r.a.createElement("div", {
				className: O.a.agreementLink
			}, Object(_.a)(N.fbt._("By purchasing Reddit Premium, you agree to the {Link text}.", [N.fbt._param("Link text", ":agreement:")], {
				hk: "fXr9v"
			}), {
				":agreement:": r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, N.fbt._("Reddit User Agreement", null, {
					hk: "43YI6N"
				}))
			}))), r.a.createElement(D, {
				onCompletePurchaseClick: e.onCompletePurchaseClick,
				passthrough: e.passthrough,
				paypalButtonId: e.paypalButtonId,
				selectedPayment: e.selectedPayment,
				stripeTokenPending: e.stripeTokenPending
			}))));

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const G = Object(o.c)({
					activePremiumPackage: E.a,
					activePage: E.m,
					allowNavigationCallback: e => {
						const t = Object(P.a)(e);
						return null === t ? void 0 : t
					},
					nightmode: x.T,
					passthrough: E.d,
					selectedPayment: E.b,
					stripeErrorMessage: E.i,
					stripeTokenPending: E.l,
					paypalErrorMessage: E.c,
					userName: e => {
						const t = Object(x.i)(e);
						return "u/".concat(Object(C.e)(t))
					}
				}),
				K = Object(s.b)(G, (e, t) => ({
					closeModal: () => e(Object(u.b)()),
					onCloseModalClick: () => e(Object(u.b)()),
					onCompletePurchaseClick: t => e(Object(u.e)(t)),
					onPaymentSelected: t => e(Object(p.selectPaymentMethod)(t))
				}));
			class H extends r.a.Component {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						const {
							onTryCloseModal: t
						} = this.props;
						if (27 === e.keyCode) return t()
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						sendEvent: e
					} = this.props;
					Object(b.d)(b.a.GoldPayment, !1), e(Object(g.i)())
				}
				componentDidUpdate(e) {
					if (this.props.stripeErrorMessage && !e.stripeErrorMessage) {
						const {
							sendEvent: e
						} = this.props;
						e(Object(g.g)())
					}
				}
				render() {
					const {
						activePage: e,
						activePremiumPackage: t,
						className: a,
						nightmode: n,
						selectedPayment: s,
						onCompletePurchaseClick: o,
						onPaymentSelected: l,
						onTryCloseModal: d,
						passthrough: p,
						stripeErrorMessage: u,
						stripeTokenPending: h,
						paypalErrorMessage: y,
						userName: b
					} = this.props;
					return r.a.createElement("div", {
						className: a
					}, "selectPayment" === e && r.a.createElement(L, {
						nightmode: n,
						onCloseModal: d,
						onCompletePurchaseClick: o,
						onPaymentSelected: l,
						isAnnualPremium: !!t && t.frequency === m.d.Yearly,
						passthrough: p,
						paypalButtonId: (null == t ? void 0 : t.paypalButtonId) || c.a.paypal.buttons.premium,
						selectedPayment: s,
						stripeErrorMessage: u,
						stripeTokenPending: h,
						paypalErrorMessage: y,
						total: t ? t.pennies : i.ob,
						userName: b
					}), "paymentCompleted" === e && r.a.createElement(R, {
						onCloseClick: d
					}))
				}
			}
			const U = Object(l.a)(H),
				Z = {
					backgroundColor: y.a.overlayReportFlow
				};
			t.default = K(Object(h.c)(class extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(g.b)()), this.onCloseModal()
					}, this.onCloseModal = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}
				}
				render() {
					return r.a.createElement(U, Y({}, this.props, {
						className: Object(d.a)(this.props.className, O.a.premiumPurchaseModal),
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						overlayCustomStyles: Z,
						withOverlay: !0
					}))
				}
			}))
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			a("./node_modules/core-js/modules/es6.regexp.to-string.js"), a("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = a("./node_modules/react/index.js"),
				r = a.n(n);

			function s(e, t) {
				const a = e.toString().split(":");
				return a.length % 2 == 0 ? e : a.reduce((e, a, n) => (n % 2 == 0 ? e.push(a) : "" === a ? e.push(":") : ":".concat(a, ":") in t ? e.push(t[":".concat(a, ":")]) : e.push(":".concat(a, ":")), e), []).map((e, t) => r.a.createElement(r.a.Fragment, {
					key: t
				}, e))
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.6989ce0c9d4b0b6183a0.js.map