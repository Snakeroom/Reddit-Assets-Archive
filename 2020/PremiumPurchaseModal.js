// https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.0d23243dd144ad1a09b8.js
// Retrieved at 6/17/2020, 8:50:06 PM by Reddit Dataminer v1.0.0
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
			a("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/react/index.js"),
				r = a.n(s),
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
			class g extends r.a.Component {
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
						cardName: s,
						cardNumberValidation: o,
						onCardElementChange: c,
						nameOnCardValidation: i,
						postalCodeValidation: m
					} = this.props, {
						cardNumberReady: p,
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
					return r.a.createElement("div", {
						className: Object(l.a)(u.a.checkoutForm, e)
					}, r.a.createElement("div", {
						className: u.a.formCellWide
					}, r.a.createElement("input", {
						className: Object(l.a)(u.a.cardInput, u.a.nameOnCard, {
							[u.a.cardInputError]: !!i
						}),
						type: "text",
						placeholder: n.fbt._("NAME ON CARD", null, {
							hk: "IgrlQ"
						}).toString(),
						onChange: this.onChange,
						value: s
					})), r.a.createElement("div", {
						className: u.a.formCell
					}, r.a.createElement(d.CardNumberElement, {
						className: Object(l.a)(u.a.cardInput, {
							[u.a.cardInputError]: !!o
						}),
						onChange: c,
						onReady: this.onCardNumberReady,
						placeholder: n.fbt._("CARD NUMBER", null, {
							hk: "3pqMxG"
						}).toString(),
						style: b
					}), !p && r.a.createElement("div", {
						className: u.a.elementPlaceholder
					}, n.fbt._("CARD NUMBER", null, {
						hk: "3pqMxG"
					}))), r.a.createElement("div", {
						className: u.a.formCell
					}, r.a.createElement(d.CardExpiryElement, {
						className: Object(l.a)(u.a.cardInput, {
							[u.a.cardInputError]: !!a
						}),
						onChange: c,
						onReady: this.onCardExpiryReady,
						placeholder: n.fbt._("MM/YY", null, {
							hk: "Hou17"
						}).toString(),
						style: b
					}), !h && r.a.createElement("div", {
						className: u.a.elementPlaceholder
					}, n.fbt._("MM/YY", null, {
						hk: "Hou17"
					}))), r.a.createElement("div", {
						className: u.a.formCell
					}, r.a.createElement(d.CardCVCElement, {
						className: Object(l.a)(u.a.cardInput, {
							[u.a.cardInputError]: !!t
						}),
						onChange: c,
						onReady: this.onCardCVCReady,
						placeholder: n.fbt._("CCV", null, {
							hk: "dZzZJ"
						}).toString(),
						style: b
					}), !y && r.a.createElement("div", {
						className: u.a.elementPlaceholder
					}, n.fbt._("CCV", null, {
						hk: "dZzZJ"
					}))), r.a.createElement("div", {
						className: u.a.formCell
					}, r.a.createElement(d.PostalCodeElement, {
						className: Object(l.a)(u.a.cardInput, {
							[u.a.cardInputError]: !!m
						}),
						onChange: c,
						onReady: this.onPostalCodeReady,
						placeholder: n.fbt._("ZIP CODE", null, {
							hk: "2lJZ4j"
						}).toString(),
						style: b
					}), !g && r.a.createElement("div", {
						className: u.a.elementPlaceholder
					}, n.fbt._("ZIP CODE", null, {
						hk: "2lJZ4j"
					}))))
				}
			}
			t.a = Object(d.injectStripe)(y(g))
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
				s = a.n(n),
				r = a("./src/reddit/controls/Button/index.tsx"),
				o = a("./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less"),
				c = a.n(o);
			const {
				fbt: l
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement("div", {
				className: c.a.purchaseFooter
			}, s.a.createElement(r.f, {
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
				s = a("./node_modules/react/index.js"),
				r = a.n(s),
				o = a("./src/lib/classNames/index.ts"),
				c = a("./src/reddit/components/TrackingHelper/index.tsx"),
				l = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				d = a("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				i = a.n(d);
			const m = e => r.a.createElement("label", {
				className: Object(o.a)(e.className, i.a.paymentOption)
			}, r.a.createElement("input", {
				type: "radio",
				id: e.value,
				name: "payment-option",
				value: e.value,
				checked: e.selectedValue === e.value,
				onChange: e.onChange
			}), r.a.createElement("div", {
				className: Object(o.a)(i.a.paymentOptionContent, {
					[i.a.isNightmode]: e.nightmode
				})
			}, e.children));
			class p extends r.a.Component {
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
								s(Object(l.e)(a));
								break;
							case "paypal":
								s(Object(l.f)(a))
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
						className: i.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(n.a.assetPath, "/img/payment-icons/paypal.png)")
						}
					})), r.a.createElement(m, {
						nightmode: t,
						selectedValue: a,
						onChange: this.onPaymentSelected,
						value: "creditCard"
					}, r.a.createElement("div", {
						className: i.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(n.a.assetPath, "/img/payment-icons/visa.png)")
						}
					}), r.a.createElement("div", {
						className: i.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(n.a.assetPath, "/img/payment-icons/mastercard.png)")
						}
					}), r.a.createElement("div", {
						className: i.a.paymentMethodIcon,
						style: {
							backgroundImage: "url(".concat(n.a.assetPath, "/img/payment-icons/amex.png)")
						}
					}), r.a.createElement("div", {
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
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				c = a("./src/config.ts"),
				l = a("./src/higherOrderComponents/asModal/index.tsx"),
				d = a("./src/lib/classNames/index.ts"),
				i = a("./src/lib/constants/index.ts"),
				m = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				p = a("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				u = a("./src/reddit/components/TrackingHelper/index.tsx"),
				h = a("./src/reddit/constants/colors.ts"),
				y = a("./src/reddit/helpers/correlationIdTracker.ts"),
				g = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				b = a("./src/reddit/models/User/index.ts"),
				C = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				P = a("./src/reddit/selectors/platform.ts"),
				E = a("./src/reddit/selectors/user.ts"),
				_ = a("./node_modules/fbt/lib/FbtPublic.js"),
				f = a("./src/lib/loadRedditAdsPixel.ts"),
				v = a("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				k = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				N = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				x = a("./src/reddit/icons/fonts/Premium/index.tsx"),
				j = a("./src/reddit/components/PremiumPurchaseModal/index.m.less"),
				O = a.n(j);
			class M extends s.a.PureComponent {
				componentDidMount() {
					const {
						sendEvent: e
					} = this.props;
					e(Object(g.i)()), Object(f.b)()
				}
				render() {
					const e = this.props;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: O.a.paymentCompleteHeader,
						style: {
							backgroundImage: 'url("'.concat(c.a.assetPath, '/img/gold/premium-hero-g.jpg")')
						}
					}, s.a.createElement(x.a, {
						className: O.a.premiumIcon,
						title: _.fbt._("Reddit Premium", null, {
							hk: "34acNx"
						})
					}), s.a.createElement("div", {
						className: O.a.paymentCompleteTitleMain
					}, _.fbt._("Thanks for purchasing Reddit Premium!", null, {
						hk: "27KGKp"
					})), s.a.createElement("div", {
						className: O.a.paymentCompleteTitleDescription
					}, s.a.createElement("div", {
						className: O.a.paymentCompleteTitleItem
					}, _.fbt._("You will receive a message in your inbox once your purchase is confirmed.", null, {
						hk: "27tvU4"
					})), s.a.createElement("div", {
						className: O.a.paymentCompleteTitleItem
					}, s.a.createElement("a", {
						href: "/settings/premium",
						target: "_blank"
					}, _.fbt._("Manage your ads-free experience.", null, {
						hk: "1RxPah"
					}))), s.a.createElement("div", {
						className: O.a.paymentCompleteTitleItemLast
					}, Object(N.a)(_.fbt._("Find more about {anchor text} on Reddit.", [_.fbt._param("anchor text", ":loungeLink:")], {
						hk: "2RGr1F"
					}), {
						":loungeLink:": s.a.createElement("a", {
							href: "/r/lounge",
							target: "_blank"
						}, "r/lounge")
					}))), s.a.createElement("button", {
						className: O.a.closeButton,
						onClick: e.onCloseClick
					}, s.a.createElement(k.b, {
						className: O.a.closeIcon,
						"data-redditstyle": !0
					}))), s.a.createElement(v.a, {
						onCloseClick: e.onCloseClick
					}))
				}
			}
			var I = Object(u.c)(M),
				R = a("./node_modules/react-stripe-elements/es/index.js"),
				S = a("./src/reddit/components/CheckoutForm/index.tsx"),
				w = a("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				T = a("./src/reddit/controls/Button/index.tsx");
			var F = e => {
				const {
					buttonId: t,
					className: a,
					customField: n,
					"data-redditstyle": r = !1,
					disabled: o,
					onSubmit: c,
					openInNewWindow: l,
					title: d
				} = e, i = o || !t;
				return s.a.createElement("form", {
					className: a,
					action: "https://www.paypal.com/cgi-bin/webscr",
					method: "post",
					target: l ? "_blank" : "_top",
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
				}), s.a.createElement(T.f, {
					type: "submit",
					"data-redditstyle": r,
					disabled: i
				}, d))
			};
			class V extends s.a.Component {
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
					return s.a.createElement("div", {
						className: O.a.premiumPurchaseSelectPaymentFooter
					}, a === i.wb && s.a.createElement(F, {
						buttonId: t,
						className: O.a.premiumPurchaseButton,
						customField: e,
						"data-redditstyle": !0,
						disabled: !e,
						onSubmit: this.onPaypalSubmit,
						title: _.fbt._("Continue to PayPal", null, {
							hk: "2TCl83"
						})
					}), a === i.vb && s.a.createElement(T.f, {
						className: O.a.premiumPurchaseButton,
						"data-redditstyle": !0,
						disabled: n,
						onClick: this.onCompletePurchaseClick
					}, _.fbt._("Complete purchase", null, {
						hk: "15ZI2y"
					})))
				}
			}
			var B = Object(R.injectStripe)(Object(u.c)(V));
			var D = e => s.a.createElement("div", {
				className: O.a.premiumPurchaseHeader,
				style: {
					backgroundImage: 'url("'.concat(c.a.assetPath, '/img/gold/premium-hero-g.jpg")')
				}
			}, s.a.createElement(x.a, {
				className: O.a.premiumIcon,
				title: _.fbt._("Reddit Premium", null, {
					hk: "34acNx"
				})
			}), s.a.createElement("div", {
				className: O.a.titleMain
			}, _.fbt._("Buy Reddit Premium!", null, {
				hk: "3XxwQZ"
			})), s.a.createElement("div", {
				className: O.a.titleDescription
			}, _.fbt._("You're purchasing Reddit Premium for yourself, {username}!", [_.fbt._param("username", e.userName)], {
				hk: "bCrwe"
			})), s.a.createElement("button", {
				className: O.a.closeButton,
				onClick: e.onCloseClick
			}, s.a.createElement(k.b, {
				className: O.a.closeIcon,
				"data-redditstyle": !0
			})));
			var A = e => s.a.createElement(R.StripeProvider, {
				apiKey: c.a.stripe.apiKey
			}, s.a.createElement(R.Elements, null, s.a.createElement(s.a.Fragment, null, s.a.createElement(D, {
				onCloseClick: e.onCloseModal,
				userName: e.userName
			}), s.a.createElement("div", {
				className: O.a.premiumPurchaseBody
			}, s.a.createElement(w.a, {
				className: O.a.selectPayment,
				nightmode: e.nightmode,
				selectedPayment: e.selectedPayment,
				onPaymentSelected: e.onPaymentSelected
			}), e.selectedPayment === i.vb && s.a.createElement(S.a, {
				className: O.a.creditCard
			}), s.a.createElement("div", {
				className: O.a.checkoutFooter
			}, s.a.createElement("div", {
				className: O.a.premiumPurchaseTotal
			}, _.fbt._("Total: {Price}/monthly", [_.fbt._param("Price", "$".concat(e.total / 100))], {
				hk: "1KYlb8"
			})), e.selectedPayment === i.vb && s.a.createElement("a", {
				href: "https://stripe.com",
				target: "_blank"
			}, s.a.createElement("img", {
				className: O.a.poweredByStripeIcon,
				src: "".concat(c.a.assetPath, "/img/payment-icons/powered-by-stripe.png")
			}))), e.selectedPayment === i.wb && e.paypalErrorMessage && s.a.createElement("div", {
				className: O.a.errorMessage
			}, e.paypalErrorMessage), e.selectedPayment === i.vb && e.stripeErrorMessage && s.a.createElement("div", {
				className: O.a.errorMessage
			}, e.stripeErrorMessage), s.a.createElement("div", {
				className: O.a.membershipDescription
			}, _.fbt._("Your Reddit Premium membership automatically renews on a monthly basis. Cancel anytime. There are no refunds for partial months.", null, {
				hk: "2yMRNq"
			})), s.a.createElement("div", {
				className: O.a.agreementLink
			}, Object(N.a)(_.fbt._("By purchasing Reddit Premium, you agree to the {Link text}.", [_.fbt._param("Link text", ":agreement:")], {
				hk: "fXr9v"
			}), {
				":agreement:": s.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank"
				}, _.fbt._("Reddit User Agreement", null, {
					hk: "43YI6N"
				}))
			}))), s.a.createElement(B, {
				onCompletePurchaseClick: e.onCompletePurchaseClick,
				passthrough: e.passthrough,
				paypalButtonId: e.paypalButtonId,
				selectedPayment: e.selectedPayment,
				stripeTokenPending: e.stripeTokenPending
			}))));

			function G() {
				return (G = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			const L = Object(o.c)({
					activePage: C.m,
					allowNavigationCallback: e => {
						const t = Object(P.a)(e);
						return null === t ? void 0 : t
					},
					nightmode: E.S,
					passthrough: C.d,
					selectedPayment: C.b,
					stripeErrorMessage: C.i,
					stripeTokenPending: C.l,
					paypalErrorMessage: C.c,
					userName: e => {
						const t = Object(E.i)(e);
						return "u/".concat(Object(b.e)(t))
					}
				}),
				Y = Object(r.b)(L, (e, t) => ({
					closeModal: () => e(Object(p.d)()),
					onCloseModalClick: () => e(Object(p.d)()),
					onCompletePurchaseClick: t => e(Object(p.g)(t)),
					onPaymentSelected: t => e(Object(m.selectPaymentMethod)(t))
				}));
			class H extends s.a.Component {
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
					Object(y.d)(y.a.GoldPayment), e(Object(g.h)())
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
						className: t,
						nightmode: a,
						selectedPayment: n,
						onCompletePurchaseClick: r,
						onPaymentSelected: o,
						onTryCloseModal: l,
						passthrough: d,
						stripeErrorMessage: m,
						stripeTokenPending: p,
						paypalErrorMessage: u,
						userName: h
					} = this.props;
					return s.a.createElement("div", {
						className: t
					}, "selectPayment" === e && s.a.createElement(A, {
						nightmode: a,
						onCloseModal: l,
						onCompletePurchaseClick: r,
						onPaymentSelected: o,
						passthrough: d,
						paypalButtonId: c.a.paypal.buttons.premium,
						selectedPayment: n,
						stripeErrorMessage: m,
						stripeTokenPending: p,
						paypalErrorMessage: u,
						total: i.nb,
						userName: h
					}), "paymentCompleted" === e && s.a.createElement(I, {
						onCloseClick: l
					}))
				}
			}
			const K = Object(l.a)(H),
				U = {
					backgroundColor: h.a.overlayReportFlow
				};
			t.default = Y(Object(u.c)(class extends s.a.PureComponent {
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
					return s.a.createElement(K, G({}, this.props, {
						className: Object(d.a)(this.props.className, O.a.premiumPurchaseModal),
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						overlayCustomStyles: U,
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
			a("./node_modules/core-js/modules/es6.regexp.to-string.js"), a("./node_modules/core-js/modules/es6.regexp.split.js");
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);

			function r(e, t) {
				const a = e.toString().split(":");
				return a.length % 2 == 0 ? e : a.reduce((e, a, n) => (n % 2 == 0 ? e.push(a) : "" === a ? e.push(":") : ":".concat(a, ":") in t ? e.push(t[":".concat(a, ":")]) : e.push(":".concat(a, ":")), e), []).map((e, t) => s.a.createElement(s.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return y
			})), a.d(t, "f", (function() {
				return g
			})), a.d(t, "d", (function() {
				return b
			})), a.d(t, "e", (function() {
				return C
			})), a.d(t, "c", (function() {
				return P
			})), a.d(t, "a", (function() {
				return E
			})), a.d(t, "g", (function() {
				return _
			})), a.d(t, "h", (function() {
				return f
			})), a.d(t, "i", (function() {
				return v
			}));
			var n = a("./src/lib/constants/index.ts"),
				s = a("./src/reddit/selectors/gold/giveAwards.ts"),
				r = a("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = a("./src/reddit/selectors/platform.ts"),
				l = a("./src/reddit/selectors/telemetry.ts"),
				d = a("./src/telemetry/models/GoldPurchase.ts"),
				i = a("./src/telemetry/models/Payment.ts"),
				m = a("./src/reddit/helpers/trackers/gild.ts"),
				p = a("./src/reddit/helpers/correlationIdTracker.ts"),
				u = a("./src/reddit/helpers/isComment.ts");
			const h = (e, t) => {
					const {
						thingId: a,
						packageId: c
					} = t, i = s.a(e), h = i ? Object(m.getAwardTypeFromAward)(i) : null, y = a ? h : o.n(e) ? d.Premium : d.Coins, g = a ? Object(u.a)(a) ? "comment" : "post" : void 0, b = c || o.q(e), C = [...Object(r.b)(e), ...Object(r.d)(e)].filter(e => e.mobileId === b)[0], P = C && C.dealInfo && C.dealInfo.type, E = "low_coin_upsell" === P;
					let _;
					E && (_ = "low_coin_balance"), "new_purchaser" === P && (_ = "new_user_targeted_offer"), "repeat_purchaser" === P && (_ = "repeat_user_targeted_offer");
					const f = C ? Math.round(1e4 * (C.baselinePennies - C.pennies) / C.baselinePennies) / 100 : 0,
						v = C ? Math.round(1e4 * (C.coins - C.baselineCoins) / C.coins) / 100 : 0,
						k = C ? C.baselinePennies !== C.pennies ? "".concat(f, "_percent_price") : C.baselineCoins !== C.coins ? "".concat(v, "_percent_bonus") : void 0 : void 0;
					return Object.assign({}, l.defaults(e), {
						comment: a ? l.comment(e, a) : null,
						correlationId: Object(p.c)(p.a.GoldPayment),
						post: a ? l.post(e, a) : null,
						screen: l.screen(e),
						subreddit: a ? l.subreddit(e) : null,
						goldPurchase: Object.assign({}, i ? {
							awardId: i.id,
							awardName: i.name,
							numberCoinsToRecipient: i.coinReward
						} : null, {
							type: y,
							gildedContent: !!a,
							contentType: g,
							numberCoins: C ? C.coins : void 0,
							offerContext: _,
							offerType: E ? C ? "".concat(C.bonusPct, "_percent_bonus") : void 0 : k
						}),
						payment: {
							currency: "USD",
							amountInSmallestDenom: y === d.Premium ? n.nb : C ? C.pennies : void 0
						}
					})
				},
				y = (e, t) => a => Object.assign({}, h(a, {
					packageId: t,
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				g = e => t => Object.assign({}, h(t, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				b = e => t => Object.assign({}, h(t, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				C = e => t => Object.assign({}, h(t, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				P = e => t => Object.assign({}, h(t, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				E = e => t => Object.assign({}, h(t, {
					packageId: e
				}), {
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				_ = e => t => Object.assign({}, h(t, {
					thingId: e
				}), {
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				f = (e, t) => t => {
					const a = h(t, {
						thingId: e
					});
					return Object.assign({}, a, {
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: Object.assign({}, a.payment, {
							defaultOption: i.PaymentMethod.Paypal
						}),
						goldPurchase: Object.assign({}, a.goldPurchase, {
							source: e ? d.GiveGold : o.n(t) ? d.PremiumMarketing : d.CoinsMarketing
						})
					})
				},
				v = e => t => {
					const a = h(t, {
						thingId: e
					});
					return Object.assign({}, a, {
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: Object.assign({}, a.payment, {
							method: Object(c.b)(t).queryParams.thanks ? i.PaymentMethod.Paypal : i.PaymentMethod.CreditCard
						})
					})
				}
		}
	}
]);
//# sourceMappingURL=PremiumPurchaseModal.0d23243dd144ad1a09b8.js.map