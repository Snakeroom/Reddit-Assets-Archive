// https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.be340e7ef14615a2116a.js
// Retrieved at 4/15/2020, 3:30:06 PM by Reddit Dataminer v1.0.0
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
				i = a("./node_modules/react-stripe-elements/es/index.js"),
				d = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				m = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				u = a("./src/reddit/components/CheckoutForm/index.m.less"),
				p = a.n(u);
			const h = Object(c.c)({
					cardCvcValidation: m.f,
					cardExpiryValidation: m.g,
					cardName: m.h,
					cardNumberValidation: m.i,
					nameOnCardValidation: m.k,
					postalCodeValidation: m.l
				}),
				y = Object(o.b)(h, (e, t) => ({
					onCardElementChange: t => e(Object(d.cardElementChange)(t)),
					onNameInput: t => e(Object(d.cardNameInput)({
						cardName: t
					}))
				}));
			class b extends r.a.Component {
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
						nameOnCardValidation: d,
						postalCodeValidation: m
					} = this.props, {
						cardNumberReady: u,
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
					return r.a.createElement("div", {
						className: Object(l.a)(p.a.checkoutForm, e)
					}, r.a.createElement("div", {
						className: p.a.formCellWide
					}, r.a.createElement("input", {
						className: Object(l.a)(p.a.cardInput, p.a.nameOnCard, {
							[p.a.cardInputError]: !!d
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
						className: Object(l.a)(p.a.cardInput, {
							[p.a.cardInputError]: !!o
						}),
						onChange: c,
						onReady: this.onCardNumberReady,
						placeholder: n.fbt._("CARD NUMBER", null, {
							hk: "3pqMxG"
						}).toString(),
						style: g
					}), !u && r.a.createElement("div", {
						className: p.a.elementPlaceholder
					}, n.fbt._("CARD NUMBER", null, {
						hk: "3pqMxG"
					}))), r.a.createElement("div", {
						className: p.a.formCell
					}, r.a.createElement(i.CardExpiryElement, {
						className: Object(l.a)(p.a.cardInput, {
							[p.a.cardInputError]: !!a
						}),
						onChange: c,
						onReady: this.onCardExpiryReady,
						placeholder: n.fbt._("MM/YY", null, {
							hk: "Hou17"
						}).toString(),
						style: g
					}), !h && r.a.createElement("div", {
						className: p.a.elementPlaceholder
					}, n.fbt._("MM/YY", null, {
						hk: "Hou17"
					}))), r.a.createElement("div", {
						className: p.a.formCell
					}, r.a.createElement(i.CardCVCElement, {
						className: Object(l.a)(p.a.cardInput, {
							[p.a.cardInputError]: !!t
						}),
						onChange: c,
						onReady: this.onCardCVCReady,
						placeholder: n.fbt._("CCV", null, {
							hk: "dZzZJ"
						}).toString(),
						style: g
					}), !y && r.a.createElement("div", {
						className: p.a.elementPlaceholder
					}, n.fbt._("CCV", null, {
						hk: "dZzZJ"
					}))), r.a.createElement("div", {
						className: p.a.formCell
					}, r.a.createElement(i.PostalCodeElement, {
						className: Object(l.a)(p.a.cardInput, {
							[p.a.cardInputError]: !!m
						}),
						onChange: c,
						onReady: this.onPostalCodeReady,
						placeholder: n.fbt._("ZIP CODE", null, {
							hk: "2lJZ4j"
						}).toString(),
						style: g
					}), !b && r.a.createElement("div", {
						className: p.a.elementPlaceholder
					}, n.fbt._("ZIP CODE", null, {
						hk: "2lJZ4j"
					}))))
				}
			}
			t.a = Object(i.injectStripe)(y(b))
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
				i = a("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				d = a.n(i);
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
								s(Object(l.d)(a));
								break;
							case "paypal":
								s(Object(l.e)(a))
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
			t.a = Object(c.c)(u)
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
				i = a("./src/lib/classNames/index.ts"),
				d = a("./src/lib/constants/index.ts"),
				m = a("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = a("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				p = a("./src/reddit/components/TrackingHelper/index.tsx"),
				h = a("./src/reddit/constants/colors.ts"),
				y = a("./src/reddit/helpers/correlationIdTracker.ts"),
				b = a("./src/reddit/helpers/trackers/goldPayment.ts"),
				g = a("./src/reddit/models/User/index.ts"),
				C = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				P = a("./src/reddit/selectors/platform.ts"),
				f = a("./src/reddit/selectors/user.ts"),
				E = a("./node_modules/fbt/lib/FbtPublic.js"),
				v = a("./src/lib/loadRedditAdsPixel.ts"),
				_ = a("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				k = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				x = a("./src/reddit/helpers/createEmojiText/index.tsx"),
				N = a("./src/reddit/icons/fonts/Premium/index.tsx"),
				w = a("./src/reddit/components/PremiumPurchaseModal/index.m.less"),
				j = a.n(w);
			class O extends s.a.PureComponent {
				componentDidMount() {
					const {
						sendEvent: e
					} = this.props;
					e(Object(b.h)()), Object(v.b)()
				}
				render() {
					const e = this.props;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: j.a.paymentCompleteHeader,
						style: {
							backgroundImage: 'url("'.concat(c.a.assetPath, '/img/gold/premium-hero-g.jpg")')
						}
					}, s.a.createElement(N.a, {
						className: j.a.premiumIcon,
						title: E.fbt._("Reddit Premium", null, {
							hk: "34acNx"
						})
					}), s.a.createElement("div", {
						className: j.a.paymentCompleteTitleMain
					}, E.fbt._("Thanks for purchasing Reddit Premium!", null, {
						hk: "27KGKp"
					})), s.a.createElement("div", {
						className: j.a.paymentCompleteTitleDescription
					}, s.a.createElement("div", {
						className: j.a.paymentCompleteTitleItem
					}, E.fbt._("You will receive a message in your inbox once your purchase is confirmed.", null, {
						hk: "27tvU4"
					})), s.a.createElement("div", {
						className: j.a.paymentCompleteTitleItem
					}, s.a.createElement("a", {
						href: "/settings/premium",
						target: "_blank"
					}, E.fbt._("Manage your ads-free experience.", null, {
						hk: "1RxPah"
					}))), s.a.createElement("div", {
						className: j.a.paymentCompleteTitleItemLast
					}, Object(x.a)(E.fbt._("Find more about {anchor text} on Reddit.", [E.fbt._param("anchor text", ":loungeLink:")], {
						hk: "2RGr1F"
					}), {
						":loungeLink:": s.a.createElement("a", {
							href: "/r/lounge",
							target: "_blank"
						}, "r/lounge")
					}))), s.a.createElement("button", {
						className: j.a.closeButton,
						onClick: e.onCloseClick
					}, s.a.createElement(k.b, {
						className: j.a.closeIcon,
						"data-redditstyle": !0
					}))), s.a.createElement(_.a, {
						onCloseClick: e.onCloseClick
					}))
				}
			}
			var M = Object(p.c)(O),
				I = a("./node_modules/react-stripe-elements/es/index.js"),
				R = a("./src/reddit/i18n/components.tsx"),
				S = a("./src/reddit/components/CheckoutForm/index.tsx"),
				T = a("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				F = a("./src/reddit/controls/Button/index.tsx");
			var A = e => {
				const {
					buttonId: t,
					className: a,
					customField: n,
					"data-redditstyle": r = !1,
					disabled: o,
					onSubmit: c,
					openInNewWindow: l,
					title: i
				} = e, d = o || !t;
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
				}), s.a.createElement(F.f, {
					type: "submit",
					"data-redditstyle": r,
					disabled: d
				}, i))
			};
			class G extends s.a.Component {
				constructor() {
					super(...arguments), this.onCompletePurchaseClick = () => {
						const {
							onCompletePurchaseClick: e,
							sendEvent: t,
							stripe: a
						} = this.props;
						a && (t(Object(b.b)()), e(a))
					}, this.onPaypalSubmit = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(b.c)())
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
						className: j.a.premiumPurchaseSelectPaymentFooter
					}, a === d.vb && s.a.createElement(A, {
						buttonId: t,
						className: j.a.premiumPurchaseButton,
						customField: e,
						"data-redditstyle": !0,
						disabled: !e,
						onSubmit: this.onPaypalSubmit,
						title: E.fbt._("Continue to paypal", null, {
							hk: "1iCLet"
						})
					}), a === d.ub && s.a.createElement(F.f, {
						className: j.a.premiumPurchaseButton,
						"data-redditstyle": !0,
						disabled: n,
						onClick: this.onCompletePurchaseClick
					}, E.fbt._("Complete purchase", null, {
						hk: "15ZI2y"
					})))
				}
			}
			var V = Object(I.injectStripe)(Object(p.c)(G));
			var D = e => s.a.createElement("div", {
				className: j.a.premiumPurchaseHeader,
				style: {
					backgroundImage: 'url("'.concat(c.a.assetPath, '/img/gold/premium-hero-g.jpg")')
				}
			}, s.a.createElement(N.a, {
				className: j.a.premiumIcon,
				title: E.fbt._("Reddit Premium", null, {
					hk: "34acNx"
				})
			}), s.a.createElement("div", {
				className: j.a.titleMain
			}, E.fbt._("Buy Reddit Premium!", null, {
				hk: "3XxwQZ"
			})), s.a.createElement("div", {
				className: j.a.titleDescription
			}, E.fbt._("You're purchasing Reddit Premium for yourself, {username}!", [E.fbt._param("username", e.userName)], {
				hk: "bCrwe"
			})), s.a.createElement("button", {
				className: j.a.closeButton,
				onClick: e.onCloseClick
			}, s.a.createElement(k.b, {
				className: j.a.closeIcon,
				"data-redditstyle": !0
			})));
			var B = e => s.a.createElement(I.StripeProvider, {
				apiKey: c.a.stripe.apiKey
			}, s.a.createElement(I.Elements, null, s.a.createElement(s.a.Fragment, null, s.a.createElement(D, {
				onCloseClick: e.onCloseModal,
				userName: e.userName
			}), s.a.createElement("div", {
				className: j.a.premiumPurchaseBody
			}, s.a.createElement(T.a, {
				className: j.a.selectPayment,
				nightmode: e.nightmode,
				selectedPayment: e.selectedPayment,
				onPaymentSelected: e.onPaymentSelected
			}), e.selectedPayment === d.ub && s.a.createElement(S.a, {
				className: j.a.creditCard
			}), s.a.createElement("div", {
				className: j.a.checkoutFooter
			}, s.a.createElement("div", {
				className: j.a.premiumPurchaseTotal
			}, E.fbt._("Total: {Price}/monthly", [E.fbt._param("Price", "$".concat(e.total / 100))], {
				hk: "1KYlb8"
			})), e.selectedPayment === d.ub && s.a.createElement("a", {
				href: "https://stripe.com",
				target: "_blank"
			}, s.a.createElement("img", {
				className: j.a.poweredByStripeIcon,
				src: "".concat(c.a.assetPath, "/img/payment-icons/powered-by-stripe.png")
			}))), e.selectedPayment === d.vb && e.paypalErrorMessage && s.a.createElement("div", {
				className: j.a.errorMessage
			}, e.paypalErrorMessage), e.selectedPayment === d.ub && e.stripeErrorMessage && s.a.createElement("div", {
				className: j.a.errorMessage
			}, e.stripeErrorMessage), s.a.createElement("div", {
				className: j.a.membershipDescription
			}, s.a.createElement(R.c, null, "Your Reddit Premium membership automatically renews on a monthly basis. Cancel anytime. There are no refunds for partial months.")), s.a.createElement("div", {
				className: j.a.agreementLink
			}, Object(x.a)(E.fbt._("By purchasing Reddit Premium, you agree to the {Link text}.", [E.fbt._param("Link text", ":agreement:")], {
				hk: "fXr9v"
			}), {
				":agreement:": s.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank"
				}, s.a.createElement(R.c, null, "Reddit User Agreement"))
			}))), s.a.createElement(V, {
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
			const L = Object(o.c)({
					activePage: C.n,
					allowNavigationCallback: e => {
						const t = Object(P.a)(e);
						return null === t ? void 0 : t
					},
					nightmode: f.Q,
					passthrough: C.e,
					selectedPayment: C.c,
					stripeErrorMessage: C.j,
					stripeTokenPending: C.m,
					paypalErrorMessage: C.d,
					userName: e => {
						const t = Object(f.i)(e);
						return "u/".concat(Object(g.f)(t))
					}
				}),
				W = Object(r.b)(L, (e, t) => ({
					closeModal: () => e(Object(u.d)()),
					onCloseModalClick: () => e(Object(u.d)()),
					onCompletePurchaseClick: t => e(Object(u.g)(t)),
					onPaymentSelected: t => e(Object(m.selectPaymentMethod)(t))
				}));
			class U extends s.a.Component {
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
					Object(y.d)(y.a.GoldPayment), e(Object(b.g)())
				}
				componentDidUpdate(e) {
					if (this.props.stripeErrorMessage && !e.stripeErrorMessage) {
						const {
							sendEvent: e
						} = this.props;
						e(Object(b.f)())
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
						passthrough: i,
						stripeErrorMessage: m,
						stripeTokenPending: u,
						paypalErrorMessage: p,
						userName: h
					} = this.props;
					return s.a.createElement("div", {
						className: t
					}, "selectPayment" === e && s.a.createElement(B, {
						nightmode: a,
						onCloseModal: l,
						onCompletePurchaseClick: r,
						onPaymentSelected: o,
						passthrough: i,
						paypalButtonId: c.a.paypal.buttons.premium,
						selectedPayment: n,
						stripeErrorMessage: m,
						stripeTokenPending: u,
						paypalErrorMessage: p,
						total: d.mb,
						userName: h
					}), "paymentCompleted" === e && s.a.createElement(M, {
						onCloseClick: l
					}))
				}
			}
			const H = Object(l.a)(U),
				K = {
					backgroundColor: h.a.overlayReportFlow
				};
			t.default = W(Object(p.c)(class extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(b.a)()), this.onCloseModal()
					}, this.onCloseModal = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}
				}
				render() {
					return s.a.createElement(H, Y({}, this.props, {
						className: Object(i.a)(this.props.className, j.a.premiumPurchaseModal),
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						overlayCustomStyles: K,
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
			a.d(t, "a", (function() {
				return b
			})), a.d(t, "e", (function() {
				return g
			})), a.d(t, "c", (function() {
				return C
			})), a.d(t, "d", (function() {
				return P
			})), a.d(t, "b", (function() {
				return f
			})), a.d(t, "f", (function() {
				return E
			})), a.d(t, "g", (function() {
				return v
			})), a.d(t, "h", (function() {
				return _
			}));
			var n = a("./src/lib/constants/index.ts"),
				s = a("./src/reddit/models/Gold/Coins/index.ts"),
				r = a("./src/reddit/selectors/gold/giveAwards.ts"),
				o = a("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				c = a("./src/reddit/selectors/goldPurchaseModals.ts"),
				l = a("./src/reddit/selectors/platform.ts"),
				i = a("./src/reddit/selectors/telemetry.ts"),
				d = a("./src/telemetry/models/GoldPurchase.ts"),
				m = a("./src/telemetry/models/Payment.ts"),
				u = a("./src/reddit/helpers/trackers/gild.ts"),
				p = a("./src/reddit/helpers/correlationIdTracker.ts"),
				h = a("./src/reddit/helpers/isComment.ts");
			const y = (e, t) => {
					const a = r.a(e),
						l = a ? Object(u.getAwardTypeFromAward)(a) : null,
						m = t ? l : c.o(e) ? d.Premium : d.Coins,
						y = t ? Object(h.a)(t) ? "comment" : "post" : void 0,
						b = c.b(e),
						g = Object(o.b)(e),
						C = Object(o.c)(e),
						P = Object(s.b)(b, [...g, ...C], !!t),
						f = P && "com.reddit.coins_deal_1" === P.mobileId,
						E = f ? "low_coin_balance" : void 0,
						v = P ? Math.round(1e4 * (P.baselinePennies - P.pennies) / P.baselinePennies) / 100 : 0,
						_ = P ? Math.round(1e4 * (P.coins - P.baselineCoins) / P.coins) / 100 : 0,
						k = P ? P.baselinePennies !== P.pennies ? "".concat(v, "_percent_price") : P.baselineCoins !== P.coins ? "".concat(_, "_percent_bonus") : void 0 : void 0;
					return Object.assign({}, i.defaults(e), {
						comment: t ? i.comment(e, t) : null,
						correlationId: Object(p.c)(p.a.GoldPayment),
						post: t ? i.post(e, t) : null,
						screen: i.screen(e),
						subreddit: t ? i.subreddit(e) : null,
						goldPurchase: Object.assign({}, a ? {
							awardId: a.id,
							awardName: a.name,
							numberCoinsToRecipient: a.coinReward
						} : null, {
							type: m,
							gildedContent: !!t,
							contentType: y,
							numberCoins: P ? P.coins : void 0,
							offerContext: E,
							offerType: f ? P ? "".concat(P.bonusPct, "_percent_bonus") : void 0 : k
						}),
						payment: {
							currency: "USD",
							amountInSmallestDenom: m === d.Premium ? n.mb : P ? P.pennies : void 0
						}
					})
				},
				b = e => t => Object.assign({}, y(t, e), {
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				g = e => t => Object.assign({}, y(t, e), {
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				C = e => t => Object.assign({}, y(t, e), {
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				P = e => t => Object.assign({}, y(t, e), {
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				f = e => t => Object.assign({}, y(t, e), {
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				E = e => t => Object.assign({}, y(t, e), {
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				v = e => t => {
					const a = y(t, e);
					return Object.assign({}, a, {
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: Object.assign({}, a.payment, {
							defaultOption: m.PaymentMethod.Paypal
						}),
						goldPurchase: Object.assign({}, a.goldPurchase, {
							source: e ? d.GiveGold : c.o(t) ? d.PremiumMarketing : d.CoinsMarketing
						})
					})
				},
				_ = e => t => {
					const a = y(t, e);
					return Object.assign({}, a, {
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: Object.assign({}, a.payment, {
							method: Object(l.b)(t).queryParams.thanks ? m.PaymentMethod.Paypal : m.PaymentMethod.CreditCard
						})
					})
				}
		},
		"./src/reddit/models/Gold/Coins/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return s
			})), a.d(t, "a", (function() {
				return r
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js");
			const s = (e, t, a) => {
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
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			const n = e => e.gild.selectedAward
		}
	}
]);
//# sourceMappingURL=PremiumPurchaseModal.be340e7ef14615a2116a.js.map