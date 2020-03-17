// https://www.redditstatic.com/desktop2x/EconomicsSupportPaymentModal.14255d32068a80a29f09.js
// Retrieved at 3/17/2020, 2:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconomicsSupportPaymentModal"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, a) {
			var s = a("./node_modules/lodash/toString.js"),
				n = 0;
			e.exports = function(e) {
				var t = ++n;
				return s(e) + t
			}
		},
		"./src/reddit/components/Economics/Support/PaymentModal/CardSelector/NewPayment/Form/index.m.less": function(e, t, a) {
			e.exports = {
				half: "_3b9n0ddg9yRWjsmCdSKyPi",
				full: "_2AS_1Dtj66Vj08QUL9CEA4",
				name: "_3ft5H5jTyhDPrTqm91jI_B",
				twoColumn: "_3PeZdJtZBCKG9QZhesuYHJ"
			}
		},
		"./src/reddit/components/Economics/Support/PaymentModal/CardSelector/NewPayment/FormLoading/index.m.less": function(e, t, a) {
			e.exports = {
				box: "_3e5jkxe6d-c01Yqbilae3_",
				fullBox: "_5zyQgUVKcN_wdszthuD2r",
				halfBox: "_2Ns4OdZYZ3Fm-ok5_YZhEk",
				twoColumn: "_28VAYwho6bIiXGGf5W7lXz"
			}
		},
		"./src/reddit/components/Economics/Support/PaymentModal/CardSelector/NewPayment/Type/index.m.less": function(e, t, a) {
			e.exports = {
				flexRow: "_2RG45iqa8ULlLmOztlvGBU",
				card: "_1uGusjj-VvgYatFqBUl1vA",
				cardLogos: "lRR5E927GAjFSujtSrnyx",
				container: "Rb3mFh2e8gJ4mBrj8gq4",
				input: "_2lL8rNr3lYRHkf8mUK2xsV",
				logo: "_19-WbhliZ09uhb72XeqxYE",
				logoWrapper: "_1c2V0kllG713lylrZFaZCv",
				paypal: "pDTSNkbRk49cOMO5uFPXd",
				stripeImg: "_3KhzDhUcLARunK2YJNVXkP"
			}
		},
		"./src/reddit/components/Economics/Support/PaymentModal/CardSelector/NewPayment/index.m.less": function(e, t, a) {
			e.exports = {
				form: "W7p9hwuSbDPjL0l24r5YK"
			}
		},
		"./src/reddit/components/Economics/Support/PaymentModal/CardSelector/index.m.less": function(e, t, a) {
			e.exports = {
				flexRow: "_1czwN0j-0zygxvThUuAnK",
				cardProvider: "_1X745pKnCwsTaxa7P_Oayt",
				cardType: "bOYuJvNDe5hDGAV0XUtq4",
				dropdownCaret: "_1q2Pi8amnJxvqAw_qJ5fif",
				label: "_98gyhMPozTShYezJc3vM7",
				lockIcon: "_1jMH8-0fKjz1CZbE5NAn3-",
				newPayment: "_3FFcXVPdYvIWyKZsnpCv7c",
				selected: "_1y26P8mR5BO5aHIZ1E0ayZ"
			}
		},
		"./src/reddit/components/Economics/Support/PaymentModal/Footer/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_3JZt9v3UIl5-9sDJctbVGC",
				submit: "_3F2SRTuT2SWSxI5TgtGF4V"
			}
		},
		"./src/reddit/components/Economics/Support/PaymentModal/Header/index.m.less": function(e, t, a) {
			e.exports = {
				closeIcon: "_3jp50eo-Ej7OrTJZ_Mjpbq",
				container: "_1g7xefaAUOWUXFea4a6BTa",
				subtext: "_1iK08sf-rKPG0klrbxv8uc",
				title: "_1lcNW6IEUKRC8Akje4fw7h"
			}
		},
		"./src/reddit/components/Economics/Support/PaymentModal/Message/index.m.less": function(e, t, a) {
			e.exports = {
				input: "_2AjmqmzNwTqJCN8vVE6aPB"
			}
		},
		"./src/reddit/components/Economics/Support/PaymentModal/UserDisplay/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_13vnLpQwSON7lJJz14oyKR",
				picture: "AG51kkc8DB6pl6gtPAGZz",
				username: "_16Vlc2o1fNxEgBs-yrcjn8"
			}
		},
		"./src/reddit/components/Economics/Support/PaymentModal/index.m.less": function(e, t, a) {
			e.exports = {
				amount: "aRzk-kcurCCm2ZlIcW5OQ",
				body: "_3EW1onuYe5875i9ARuUrRc",
				cardSelector: "_1SK-rOPclt74JhV6CCEOPI",
				container: "_1MhK0_Pu6uFB7MaUxEeByw",
				footer: "_3Fw5Z9SKKfP3Sdb9TTp0dN",
				message: "_34TfOrxpi6tUNDiL7Qjmyh",
				userDisplay: "_1fB6BgKN_-k2nF8L0SMxMg"
			}
		},
		"./src/reddit/components/Economics/Support/PaymentModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				o = a("./node_modules/react-redux/es/index.js"),
				r = a("./node_modules/reselect/es/index.js"),
				c = a("./src/higherOrderComponents/asModal/index.tsx"),
				l = a("./src/reddit/actions/modal.ts"),
				d = a("./src/reddit/actions/users.ts"),
				i = a("./src/reddit/components/Economics/Support/Common/Amounts/index.tsx"),
				m = a("./src/reddit/components/Economics/Support/Common/WrappedStripeProvider/index.tsx"),
				p = a("./src/reddit/helpers/economics/getStripeInstance.ts"),
				u = a("./src/reddit/models/Payments/index.ts"),
				h = a("./src/reddit/selectors/economics.ts"),
				y = a("./src/reddit/selectors/user.ts"),
				x = a("./src/app/strings/index.ts"),
				g = a("./src/higherOrderComponents/asTooltip.tsx"),
				b = a("./src/lib/classNames/index.ts"),
				N = a("./src/reddit/actions/tooltip.ts"),
				E = a("./src/reddit/components/Translated/index.tsx"),
				w = a("./src/reddit/controls/Dropdown/index.tsx"),
				C = a("./src/reddit/controls/Dropdown/Row.tsx"),
				v = a("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				f = a("./src/reddit/icons/svgs/Lock/index.tsx"),
				P = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./src/reddit/components/Economics/Stripe/FormElements/index.tsx")),
				S = a("./src/reddit/controls/FormFields/index.tsx"),
				j = a("./src/reddit/components/Economics/Support/PaymentModal/CardSelector/NewPayment/Form/index.m.less"),
				_ = a.n(j);
			const O = (e, t) => Object(x.a)(e, "economy.support.payment.card.new.".concat(t));
			const M = Object(r.c)({
				language: e => e.user.language
			});
			var T = Object(o.b)(M)((function(e) {
					return n.a.createElement("div", {
						className: Object(b.a)(_.a.container, e.className)
					}, n.a.createElement(S.c, {
						className: _.a.name,
						label: O(e.language, "name"),
						type: "text",
						value: e.card.name,
						onChange: t => e.onChange(Object.assign({}, e.card, {
							name: t.currentTarget.value
						}))
					}), n.a.createElement("div", {
						className: _.a.twoColumn
					}, n.a.createElement(P.d, {
						labelClassName: _.a.half,
						labelText: O(e.language, "number"),
						onChange: t => e.onChange(Object.assign({}, e.card, {
							cardNumberComplete: t.complete
						})),
						onReady: t => e.onChange(Object.assign({}, e.card, {
							element: t
						}))
					}), n.a.createElement(P.c, {
						labelClassName: _.a.half,
						labelText: O(e.language, "exp"),
						onChange: t => e.onChange(Object.assign({}, e.card, {
							cardExpiryComplete: t.complete
						}))
					})), n.a.createElement("div", {
						className: _.a.twoColumn
					}, n.a.createElement(P.b, {
						labelClassName: _.a.half,
						labelText: O(e.language, "ccv"),
						onChange: t => e.onChange(Object.assign({}, e.card, {
							cardCVCComplete: t.complete
						}))
					}), n.a.createElement(P.e, {
						labelClassName: _.a.half,
						labelText: O(e.language, "zip"),
						onChange: t => e.onChange(Object.assign({}, e.card, {
							postalCodeComplete: t.complete
						}))
					})))
				})),
				I = a("./src/reddit/components/Economics/Support/PaymentModal/CardSelector/NewPayment/FormLoading/index.m.less"),
				k = a.n(I);

			function D(e) {
				return n.a.createElement("div", {
					className: e.className
				}, n.a.createElement("div", {
					className: k.a.fullBox
				}), n.a.createElement("div", {
					className: k.a.twoColumn
				}, n.a.createElement("div", {
					className: k.a.halfBox
				}), n.a.createElement("div", {
					className: k.a.halfBox
				})), n.a.createElement("div", {
					className: k.a.twoColumn
				}, n.a.createElement("div", {
					className: k.a.halfBox
				}), n.a.createElement("div", {
					className: k.a.halfBox
				})))
			}
			var L = a("./src/config.ts"),
				B = a("./src/reddit/components/Economics/Support/PaymentModal/CardSelector/NewPayment/Type/index.m.less"),
				A = a.n(B);
			const R = "https://stripe.com";

			function K(e) {
				const t = e.allowedPaymentTypes || new Set([u.b.NewStripe, u.b.NewPayPal]),
					a = t.size > 1;
				return n.a.createElement("div", {
					className: Object(b.a)(A.a.container, e.className)
				}, t.has(u.b.NewPayPal) && n.a.createElement("label", {
					className: A.a.paypal
				}, a && n.a.createElement("input", {
					className: A.a.input,
					defaultChecked: e.selectedPayment.type === u.b.NewPayPal,
					name: "paymentType",
					onClick: () => {
						e.selectedPayment.type !== u.b.NewPayPal && e.onChangePayment({
							type: u.b.NewPayPal
						})
					},
					type: "radio"
				}), n.a.createElement("div", {
					className: A.a.logoWrapper
				}, n.a.createElement("img", {
					className: A.a.logo,
					src: "".concat(L.a.assetPath, "/img/payment-icons/paypal.png")
				}))), t.has(u.b.NewStripe) && n.a.createElement("label", {
					className: A.a.card
				}, n.a.createElement("div", {
					className: A.a.cardLogos
				}, a && n.a.createElement("input", {
					className: A.a.input,
					defaultChecked: e.selectedPayment.type === u.b.NewStripe,
					name: "paymentType",
					onClick: () => {
						e.selectedPayment.type !== u.b.NewStripe && e.onChangePayment(Object(u.d)())
					},
					type: "radio"
				}), n.a.createElement("div", {
					className: A.a.logoWrapper
				}, ["visa.png", "mastercard.png", "amex.png", "discover.jpg"].map((e, t) => n.a.createElement("img", {
					className: A.a.logo,
					key: t,
					src: "".concat(L.a.assetPath, "/img/payment-icons/").concat(e)
				})))), e.selectedPayment.type === u.b.NewStripe && n.a.createElement("a", {
					href: R,
					target: "_blank"
				}, n.a.createElement("img", {
					className: A.a.stripeImg,
					src: "".concat(L.a.assetPath, "/img/payment-icons/powered-by-stripe.png")
				}))))
			}
			var U = a("./src/reddit/components/Economics/Support/PaymentModal/CardSelector/NewPayment/index.m.less"),
				F = a.n(U);
			const Z = new Set([u.b.NewStripe]);
			const W = Object(r.c)({
				language: e => e.user.language
			});
			var z = Object(o.b)(W)((function(e) {
					return n.a.createElement("div", {
						className: Object(b.a)(F.a.container, e.className)
					}, n.a.createElement(K, {
						allowedPaymentTypes: Z,
						selectedPayment: e.selectedPayment,
						onChangePayment: e.onChangePayment
					}), e.selectedPayment.type === u.b.NewStripe && (e.stripeClientLoaded ? n.a.createElement(T, {
						card: e.selectedPayment,
						className: F.a.form,
						onChange: e.onChangePayment
					}) : n.a.createElement(D, {
						className: F.a.form
					})))
				})),
				G = a("./src/reddit/components/Economics/Support/PaymentModal/CardSelector/index.m.less"),
				Y = a.n(G);
			const q = Object(g.a)(w.a),
				H = "economy-support-paymentmodal-card-dropdown",
				J = e => "economy.support.payment.card.selector.".concat(e);
			const V = Object(r.c)({
				savedPayments: h.r,
				dropdownIsOpen: e => e.tooltipId === H,
				language: e => e.user.language
			});
			var X = Object(o.b)(V, e => ({
					onToggleDropdown: () => e(Object(N.h)({
						tooltipId: H
					}))
				}))((function(e) {
					return n.a.createElement("div", {
						className: Object(b.a)(Y.a.container, e.className)
					}, n.a.createElement("div", {
						className: Y.a.selected
					}, n.a.createElement(f.a, {
						className: Y.a.lockIcon
					}), n.a.createElement("div", {
						className: Y.a.label
					}, n.a.createElement(E.a, {
						msgId: J("title")
					})), n.a.createElement("div", {
						className: Y.a.cardType,
						id: H,
						onClick: e.onToggleDropdown
					}, e.selectedPayment.type === u.b.NewStripe || e.selectedPayment.type === u.b.NewPayPal ? n.a.createElement(E.a, {
						msgId: J("other")
					}) : e.selectedPayment.display, n.a.createElement(v.a, {
						className: Y.a.dropdownCaret
					}))), (e.selectedPayment.type === u.b.NewStripe || e.selectedPayment.type === u.b.NewPayPal) && n.a.createElement(z, {
						className: Y.a.newPayment,
						selectedPayment: e.selectedPayment,
						stripeClientLoaded: e.stripeClientLoaded,
						onChangePayment: e.onSelectPayment
					}), n.a.createElement(q, {
						isOverlay: !0,
						isOpen: e.dropdownIsOpen,
						tooltipId: H
					}, e.savedPayments.map((t, a) => n.a.createElement(C.b, {
						"data-redditstyle": !0,
						displayText: t.display,
						index: a,
						isSelected: e.selectedPayment.type === u.b.SavedStripe && e.selectedPayment.id === t.id,
						key: a,
						onClick: () => e.onSelectPayment(t)
					})), n.a.createElement(C.b, {
						"data-redditstyle": !0,
						displayText: Object(x.a)(e.language, J("other")),
						index: e.savedPayments.length,
						isSelected: e.selectedPayment.type === u.b.NewStripe,
						key: "new-payment",
						onClick: () => e.onSelectPayment(Object(u.d)())
					})))
				})),
				Q = a("./src/reddit/components/Economics/Support/Common/LegalNotice/index.tsx"),
				$ = a("./src/reddit/components/Economics/Support/Common/SubmitButton/index.tsx"),
				ee = a("./src/reddit/components/Economics/Support/PaymentModal/Footer/index.m.less"),
				te = a.n(ee);

			function ae(e) {
				return n.a.createElement("div", {
					className: Object(b.a)(te.a.container, e.className)
				}, n.a.createElement(Q.b, {
					anonymous: e.anonymous,
					className: te.a.legal,
					contentType: e.content.type
				}), n.a.createElement($.a, {
					amount: e.amount,
					anonymous: e.anonymous,
					className: te.a.submit,
					content: e.content,
					fallbackTargetName: e.fallbackUsername,
					message: e.message,
					selectedPayment: e.selectedPayment,
					stripeInstance: e.stripeInstance,
					submitting: e.submitting,
					subredditId: e.subredditId,
					user: e.user,
					onChangeSubmitState: e.onChangeSubmitState
				}))
			}
			var se = a("./src/reddit/icons/svgs/Close/index.tsx"),
				ne = a("./src/reddit/components/Economics/Support/PaymentModal/Header/index.m.less"),
				oe = a.n(ne);
			var re = function(e) {
					return n.a.createElement("div", {
						className: Object(b.a)(oe.a.container, e.className)
					}, n.a.createElement("div", {
						className: oe.a.title
					}, n.a.createElement(E.a, {
						msgId: "economy.support.payment.header.title"
					})), n.a.createElement("div", {
						className: oe.a.subtext
					}, n.a.createElement(E.a, {
						msgId: "economy.support.payment.header.subtext1"
					})), n.a.createElement("div", {
						className: oe.a.subtext
					}, n.a.createElement(E.a, {
						msgId: "economy.support.payment.header.subtext2"
					})), n.a.createElement(se.a, {
						className: oe.a.closeIcon,
						onClick: () => e.onClose()
					}))
				},
				ce = a("./node_modules/lodash/debounce.js"),
				le = a.n(ce),
				de = a("./src/reddit/i18n/utils.ts"),
				ie = a("./src/reddit/components/Economics/Support/PaymentModal/Message/index.m.less"),
				me = a.n(ie);
			var pe = function(e) {
					return n.a.createElement("input", {
						className: Object(b.a)(me.a.input, e.className),
						placeholder: Object(de.c)("Private Message (optional)"),
						onChange: le()(t => e.onMessageChange(t.currentTarget.value), 250)
					})
				},
				ue = a("./src/reddit/components/Economics/Support/PaymentModal/UserDisplay/index.m.less"),
				he = a.n(ue);

			function ye(e) {
				return n.a.createElement("div", {
					className: Object(b.a)(e.className, he.a.container)
				}, n.a.createElement("div", {
					className: he.a.username
				}, e.user ? e.user.displayName : e.fallbackUsername), n.a.createElement("img", {
					className: he.a.picture,
					src: e.user && e.user.accountIcon ? e.user.accountIcon : void 0
				}))
			}
			var xe = a("./src/reddit/components/Economics/Support/PaymentModal/index.m.less"),
				ge = a.n(xe);
			const be = ["300", "500", "1000"];
			class Ne extends n.a.Component {
				constructor(e) {
					super(e), this.handleChangePayment = e => this.setState({
						selectedPayment: e
					}), this.handleChangeTipAmount = e => this.setState({
						amount: e
					}), this.handleMessageChange = e => this.setState({
						message: e
					}), this.handleSubmitStateChange = e => {
						e.success ? this.close(this.state.amount.value) : this.setState({
							submitting: e.submitting,
							submissionError: e.error
						})
					}, this.close = e => {
						this.props.onClose ? this.props.onClose(e) : this.props.onCloseAllModals()
					}, this.state = {
						amount: {
							value: be[0],
							id: be[0]
						},
						anonymous: !0,
						selectedPayment: e.savedPayments[0] || Object(u.d)(),
						stripeInstance: void 0,
						submitting: !1,
						submissionError: void 0
					}
				}
				componentDidMount() {
					Object(p.a)().then(e => this.setState({
						stripeInstance: e
					})), this.props.user || this.props.onFetchUser()
				}
				render() {
					return n.a.createElement(m.a, {
						stripeInstance: this.state.stripeInstance
					}, n.a.createElement("div", {
						className: ge.a.container
					}, n.a.createElement(re, {
						onClose: this.close
					}), n.a.createElement("div", {
						className: ge.a.body
					}, n.a.createElement(ye, {
						className: ge.a.userDisplay,
						fallbackUsername: this.props.userName,
						user: this.props.user
					}), n.a.createElement(i.a, {
						amounts: be,
						className: ge.a.amount,
						currentlySelected: this.state.amount,
						onUpdateAmount: this.handleChangeTipAmount
					}), n.a.createElement(pe, {
						className: ge.a.message,
						onMessageChange: this.handleMessageChange
					}), n.a.createElement(X, {
						className: ge.a.cardSelector,
						selectedPayment: this.state.selectedPayment,
						stripeClientLoaded: !!this.state.stripeInstance,
						onSelectPayment: this.handleChangePayment
					})), n.a.createElement(ae, {
						amount: this.state.amount,
						anonymous: this.state.anonymous,
						className: ge.a.footer,
						content: this.props.content,
						fallbackUsername: this.props.userName,
						message: this.state.message,
						selectedPayment: this.state.selectedPayment,
						stripeInstance: this.state.stripeInstance,
						submitting: this.state.submitting,
						subredditId: this.props.subredditId,
						user: this.props.user,
						onChangeSubmitState: this.handleSubmitStateChange
					})))
				}
			}
			const Ee = Object(r.c)({
					savedPayments: h.r,
					user: y.cb
				}),
				we = Object(o.b)(Ee, (e, t) => {
					let {
						userName: a
					} = t;
					return {
						onFetchUser: () => e(Object(d.B)(a)),
						onCloseAllModals: () => e(Object(l.f)())
					}
				}),
				Ce = Object(c.a)(we(Ne));
			t.default = Ce
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return b
			}));
			a("./node_modules/core-js/modules/es6.symbol.js");
			var s = a("./node_modules/lodash/throttle.js"),
				n = a.n(s),
				o = a("./node_modules/react/index.js"),
				r = a.n(o),
				c = a("./src/lib/classNames/index.ts"),
				l = a("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = a("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				i = a("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = a("./src/reddit/layout/row/InlineButton/index.tsx"),
				p = a("./src/reddit/controls/Dropdown/index.m.less"),
				u = a.n(p),
				h = a("./src/reddit/controls/Dropdown/row.m.less"),
				y = a.n(h);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var a = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (a[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (a[s[n]] = e[s[n]])
				}
				return a
			};
			class b extends r.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = n()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, a = Object(c.a)(y.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? r.a.createElement(l.a, x({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && r.a.createElement("span", {
						className: a
					}, e.children), r.a.createElement("span", {
						className: Object(c.a)(y.a.text, e.textClassName)
					}, e.displayText)) : r.a.createElement(m.a, x({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: n()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? r.a.createElement("div", null, e.children) : r.a.createElement("span", {
						className: a
					}, e.children)), e.displayText && r.a.createElement("span", {
						className: Object(c.a)(y.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && r.a.createElement(i.a, {
						className: y.a.checkmark
					}), e.showDropdownTriangle && r.a.createElement(d.a, {
						className: u.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, a = g(e, ["className"]);
				const s = Object(c.a)(y.a.row, t, {
					[y.a.mIsInteractive]: !a.noHover,
					[y.a.mIsSelected]: a.isSelected,
					[y.a.topics]: a.isTopicsStyle
				});
				return r.a.createElement(b, x({
					className: s
				}, a))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, a) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, a) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, a) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				n = a("./node_modules/lodash/uniqueId.js"),
				o = a.n(n),
				r = a("./node_modules/raf/index.js"),
				c = a.n(r),
				l = a("./node_modules/react/index.js"),
				d = a.n(l),
				i = a("./node_modules/react-redux/es/index.js"),
				m = a("./node_modules/reselect/es/index.js"),
				p = a("./src/lib/classNames/index.ts"),
				u = a("./src/reddit/actions/modal.ts"),
				h = a("./src/reddit/selectors/activeModalId.ts"),
				y = a("./src/higherOrderComponents/asModal/index.tsx"),
				x = a("./src/reddit/controls/Button/index.tsx"),
				g = a("./src/reddit/layout/row/Inline/index.tsx"),
				b = a("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				N = a.n(b);
			var E = Object(y.a)(e => {
					const {
						children: t,
						title: a
					} = e;
					return d.a.createElement("div", {
						className: N.a.wrapper
					}, d.a.createElement(g.a, {
						className: N.a.titleRow
					}, a), d.a.createElement("div", {
						className: N.a.detailsContainer
					}, t), d.a.createElement(g.a, {
						className: N.a.buttonRow
					}, d.a.createElement(x.f, {
						className: N.a.confirmButton,
						onClick: e.onConfirmed
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				w = a("./src/reddit/controls/ErrorText/index.m.less"),
				C = a.n(w);
			a.d(t, "a", (function() {
				return S
			})), a.d(t, "c", (function() {
				return j
			}));
			const v = Object(m.c)({
				activeModalId: h.a
			});
			class f extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(o()())
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					c()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						activeModalId: t,
						className: a,
						errorModalBody: n,
						errorModalTitle: o = s.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: r = s.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: c,
						textHasOverflowed: l
					} = this.state;
					return d.a.createElement("div", {
						className: Object(p.a)(C.a.wrapper, a)
					}, d.a.createElement("span", {
						className: C.a.description,
						ref: this.spanRef
					}, e), l && d.a.createElement("span", {
						className: C.a.moreText,
						onClick: this.toggleModal
					}, r), t === c && d.a.createElement(E, {
						onConfirmed: this.toggleModal,
						title: o
					}, n || e))
				}
			}
			const P = Object(i.b)(v, e => ({
					toggleErrorTextModal: t => e(Object(u.i)(t))
				}))(f),
				S = e => {
					const {
						className: t,
						errorClassName: a,
						errorModalTitle: s,
						fallbackMessage: n,
						messages: o = []
					} = e, r = o.length ? o : n ? [n] : [];
					return r.length ? d.a.createElement("div", {
						className: t
					}, r.map((e, t) => d.a.createElement(P, {
						className: a,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				j = e => d.a.createElement(S, {
					fallbackMessage: s.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = P
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, a) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./src/lib/lessComponent.tsx"),
				n = a("./src/reddit/controls/InternalLink/index.tsx"),
				o = a("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				r = a.n(o);
			t.a = s.a.wrapped(n.a, "unstyledInternalLink", r.a)
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, a) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				o = a("./src/reddit/icons/fonts/helpers.tsx"),
				r = a("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				c = a.n(r);
			const l = a("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(o.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", c.a);
			t.a = l
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				n = a.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, a) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return l
			}));
			var s = a("./node_modules/react/index.js"),
				n = a.n(s),
				o = a("./src/lib/classNames/index.ts"),
				r = a("./src/reddit/icons/svgs/Trash2/index.m.less"),
				c = a.n(r);
			const l = e => n.a.createElement("svg", {
				className: Object(o.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), n.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = l
		}
	}
]);
//# sourceMappingURL=EconomicsSupportPaymentModal.14255d32068a80a29f09.js.map