// https://www.redditstatic.com/desktop2x/EconomicsSupportPaymentModal.dc05ea0b0d8f0b885f20.js
// Retrieved at 5/18/2020, 11:20:08 AM by Reddit Dataminer v1.0.0
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
				card: "_1uGusjj-VvgYatFqBUl1vA",
				flexRow: "_2RG45iqa8ULlLmOztlvGBU",
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
				x = a("./node_modules/fbt/lib/FbtPublic.js"),
				b = a("./src/higherOrderComponents/asTooltip.tsx"),
				g = a("./src/lib/classNames/index.ts"),
				N = a("./src/reddit/actions/tooltip.ts"),
				E = a("./src/reddit/controls/Dropdown/index.tsx"),
				f = a("./src/reddit/controls/Dropdown/Row.tsx"),
				w = a("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				C = a("./src/reddit/icons/svgs/Lock/index.tsx"),
				v = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./src/reddit/components/Economics/Stripe/FormElements/index.tsx")),
				P = a("./src/reddit/controls/FormFields/index.tsx"),
				S = a("./src/reddit/components/Economics/Support/PaymentModal/CardSelector/NewPayment/Form/index.m.less"),
				_ = a.n(S);
			const j = Object(r.c)({
				language: e => e.user.language
			});
			var O = Object(o.b)(j)((function(e) {
					return n.a.createElement("div", {
						className: Object(g.a)(_.a.container, e.className)
					}, n.a.createElement(P.c, {
						className: _.a.name,
						label: x.fbt._("name on card", null, {
							hk: "1zwfs9"
						}),
						type: "text",
						value: e.card.name,
						onChange: t => e.onChange(Object.assign({}, e.card, {
							name: t.currentTarget.value
						}))
					}), n.a.createElement("div", {
						className: _.a.twoColumn
					}, n.a.createElement(v.d, {
						labelClassName: _.a.half,
						labelText: x.fbt._("card number", null, {
							hk: "4xtq9o"
						}),
						onChange: t => e.onChange(Object.assign({}, e.card, {
							cardNumberComplete: t.complete
						})),
						onReady: t => e.onChange(Object.assign({}, e.card, {
							element: t
						}))
					}), n.a.createElement(v.c, {
						labelClassName: _.a.half,
						labelText: x.fbt._("mm/yy", null, {
							hk: "141YoD"
						}),
						onChange: t => e.onChange(Object.assign({}, e.card, {
							cardExpiryComplete: t.complete
						}))
					})), n.a.createElement("div", {
						className: _.a.twoColumn
					}, n.a.createElement(v.b, {
						labelClassName: _.a.half,
						labelText: x.fbt._("ccv", null, {
							hk: "1B7gnp"
						}),
						onChange: t => e.onChange(Object.assign({}, e.card, {
							cardCVCComplete: t.complete
						}))
					}), n.a.createElement(v.e, {
						labelClassName: _.a.half,
						labelText: x.fbt._("zip code", null, {
							hk: "EfqN4"
						}),
						onChange: t => e.onChange(Object.assign({}, e.card, {
							postalCodeComplete: t.complete
						}))
					})))
				})),
				M = a("./src/reddit/components/Economics/Support/PaymentModal/CardSelector/NewPayment/FormLoading/index.m.less"),
				k = a.n(M);

			function T(e) {
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
			var I = a("./src/config.ts"),
				D = a("./src/reddit/components/Economics/Support/PaymentModal/CardSelector/NewPayment/Type/index.m.less"),
				L = a.n(D);
			const B = "https://stripe.com";

			function A(e) {
				const t = e.allowedPaymentTypes || new Set([u.b.NewStripe, u.b.NewPayPal]),
					a = t.size > 1;
				return n.a.createElement("div", {
					className: Object(g.a)(L.a.container, e.className)
				}, t.has(u.b.NewPayPal) && n.a.createElement("label", {
					className: L.a.paypal
				}, a && n.a.createElement("input", {
					className: L.a.input,
					defaultChecked: e.selectedPayment.type === u.b.NewPayPal,
					name: "paymentType",
					onClick: () => {
						e.selectedPayment.type !== u.b.NewPayPal && e.onChangePayment({
							type: u.b.NewPayPal
						})
					},
					type: "radio"
				}), n.a.createElement("div", {
					className: L.a.logoWrapper
				}, n.a.createElement("img", {
					className: L.a.logo,
					src: "".concat(I.a.assetPath, "/img/payment-icons/paypal.png")
				}))), t.has(u.b.NewStripe) && n.a.createElement("label", {
					className: L.a.card
				}, n.a.createElement("div", {
					className: L.a.cardLogos
				}, a && n.a.createElement("input", {
					className: L.a.input,
					defaultChecked: e.selectedPayment.type === u.b.NewStripe,
					name: "paymentType",
					onClick: () => {
						e.selectedPayment.type !== u.b.NewStripe && e.onChangePayment(Object(u.d)())
					},
					type: "radio"
				}), n.a.createElement("div", {
					className: L.a.logoWrapper
				}, ["visa.png", "mastercard.png", "amex.png", "discover.jpg"].map((e, t) => n.a.createElement("img", {
					className: L.a.logo,
					key: t,
					src: "".concat(I.a.assetPath, "/img/payment-icons/").concat(e)
				})))), e.selectedPayment.type === u.b.NewStripe && n.a.createElement("a", {
					href: B,
					target: "_blank"
				}, n.a.createElement("img", {
					className: L.a.stripeImg,
					src: "".concat(I.a.assetPath, "/img/payment-icons/powered-by-stripe.png")
				}))))
			}
			var R = a("./src/reddit/components/Economics/Support/PaymentModal/CardSelector/NewPayment/index.m.less"),
				K = a.n(R);
			const U = new Set([u.b.NewStripe]);
			const F = Object(r.c)({
				language: e => e.user.language
			});
			var Z = Object(o.b)(F)((function(e) {
					return n.a.createElement("div", {
						className: Object(g.a)(K.a.container, e.className)
					}, n.a.createElement(A, {
						allowedPaymentTypes: U,
						selectedPayment: e.selectedPayment,
						onChangePayment: e.onChangePayment
					}), e.selectedPayment.type === u.b.NewStripe && (e.stripeClientLoaded ? n.a.createElement(O, {
						card: e.selectedPayment,
						className: K.a.form,
						onChange: e.onChangePayment
					}) : n.a.createElement(T, {
						className: K.a.form
					})))
				})),
				z = a("./src/reddit/components/Economics/Support/PaymentModal/CardSelector/index.m.less"),
				W = a.n(z);
			const Y = Object(b.a)(E.a),
				q = "economy-support-paymentmodal-card-dropdown";
			const G = Object(r.c)({
				savedPayments: h.u,
				dropdownIsOpen: e => e.tooltipId === q,
				language: e => e.user.language
			});
			var H = Object(o.b)(G, e => ({
					onToggleDropdown: () => e(Object(N.h)({
						tooltipId: q
					}))
				}))((function(e) {
					return n.a.createElement("div", {
						className: Object(g.a)(W.a.container, e.className)
					}, n.a.createElement("div", {
						className: W.a.selected
					}, n.a.createElement(C.a, {
						className: W.a.lockIcon
					}), n.a.createElement("div", {
						className: W.a.label
					}, x.fbt._("Payment Method", null, {
						hk: "laYn7"
					})), n.a.createElement("div", {
						className: W.a.cardType,
						id: q,
						onClick: e.onToggleDropdown
					}, e.selectedPayment.type === u.b.NewStripe || e.selectedPayment.type === u.b.NewPayPal ? x.fbt._("Add New Card", null, {
						hk: "wnQx5"
					}) : e.selectedPayment.display, n.a.createElement(w.a, {
						className: W.a.dropdownCaret
					}))), (e.selectedPayment.type === u.b.NewStripe || e.selectedPayment.type === u.b.NewPayPal) && n.a.createElement(Z, {
						className: W.a.newPayment,
						selectedPayment: e.selectedPayment,
						stripeClientLoaded: e.stripeClientLoaded,
						onChangePayment: e.onSelectPayment
					}), n.a.createElement(Y, {
						isOverlay: !0,
						isOpen: e.dropdownIsOpen,
						tooltipId: q
					}, e.savedPayments.map((t, a) => n.a.createElement(f.b, {
						"data-redditstyle": !0,
						displayText: t.display,
						index: a,
						isSelected: e.selectedPayment.type === u.b.SavedStripe && e.selectedPayment.id === t.id,
						key: a,
						onClick: () => e.onSelectPayment(t)
					})), n.a.createElement(f.b, {
						"data-redditstyle": !0,
						displayText: x.fbt._("Add New Card", null, {
							hk: "wnQx5"
						}),
						index: e.savedPayments.length,
						isSelected: e.selectedPayment.type === u.b.NewStripe,
						key: "new-payment",
						onClick: () => e.onSelectPayment(Object(u.d)())
					})))
				})),
				J = a("./src/reddit/components/Economics/Support/Common/LegalNotice/index.tsx"),
				V = a("./src/reddit/components/Economics/Support/Common/SubmitButton/index.tsx"),
				X = a("./src/reddit/components/Economics/Support/PaymentModal/Footer/index.m.less"),
				Q = a.n(X);

			function $(e) {
				return n.a.createElement("div", {
					className: Object(g.a)(Q.a.container, e.className)
				}, n.a.createElement(J.b, {
					anonymous: e.anonymous,
					className: Q.a.legal,
					contentType: e.content.type
				}), n.a.createElement(V.a, {
					amount: e.amount,
					anonymous: e.anonymous,
					className: Q.a.submit,
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
			var ee = a("./src/reddit/components/Translated/index.tsx"),
				te = a("./src/reddit/icons/svgs/Close/index.tsx"),
				ae = a("./src/reddit/components/Economics/Support/PaymentModal/Header/index.m.less"),
				se = a.n(ae);
			var ne = function(e) {
					return n.a.createElement("div", {
						className: Object(g.a)(se.a.container, e.className)
					}, n.a.createElement("div", {
						className: se.a.title
					}, n.a.createElement(ee.a, {
						msgId: "economy.support.payment.header.title"
					})), n.a.createElement("div", {
						className: se.a.subtext
					}, n.a.createElement(ee.a, {
						msgId: "economy.support.payment.header.subtext1"
					})), n.a.createElement("div", {
						className: se.a.subtext
					}, n.a.createElement(ee.a, {
						msgId: "economy.support.payment.header.subtext2"
					})), n.a.createElement(te.a, {
						className: se.a.closeIcon,
						onClick: () => e.onClose()
					}))
				},
				oe = a("./node_modules/lodash/debounce.js"),
				re = a.n(oe),
				ce = a("./src/reddit/components/Economics/Support/PaymentModal/Message/index.m.less"),
				le = a.n(ce);
			var de = function(e) {
					return n.a.createElement("input", {
						className: Object(g.a)(le.a.input, e.className),
						placeholder: x.fbt._("Private Message (optional)", null, {
							hk: "4t7gCK"
						}),
						onChange: re()(t => e.onMessageChange(t.currentTarget.value), 250)
					})
				},
				ie = a("./src/reddit/components/Economics/Support/PaymentModal/UserDisplay/index.m.less"),
				me = a.n(ie);

			function pe(e) {
				return n.a.createElement("div", {
					className: Object(g.a)(e.className, me.a.container)
				}, n.a.createElement("div", {
					className: me.a.username
				}, e.user ? e.user.displayName : e.fallbackUsername), n.a.createElement("img", {
					className: me.a.picture,
					src: e.user && e.user.accountIcon ? e.user.accountIcon : void 0
				}))
			}
			var ue = a("./src/reddit/components/Economics/Support/PaymentModal/index.m.less"),
				he = a.n(ue);
			const ye = ["300", "500", "1000"];
			class xe extends n.a.Component {
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
							value: ye[0],
							id: ye[0]
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
						className: he.a.container
					}, n.a.createElement(ne, {
						onClose: this.close
					}), n.a.createElement("div", {
						className: he.a.body
					}, n.a.createElement(pe, {
						className: he.a.userDisplay,
						fallbackUsername: this.props.userName,
						user: this.props.user
					}), n.a.createElement(i.a, {
						amounts: ye,
						className: he.a.amount,
						currentlySelected: this.state.amount,
						onUpdateAmount: this.handleChangeTipAmount
					}), n.a.createElement(de, {
						className: he.a.message,
						onMessageChange: this.handleMessageChange
					}), n.a.createElement(H, {
						className: he.a.cardSelector,
						selectedPayment: this.state.selectedPayment,
						stripeClientLoaded: !!this.state.stripeInstance,
						onSelectPayment: this.handleChangePayment
					})), n.a.createElement($, {
						amount: this.state.amount,
						anonymous: this.state.anonymous,
						className: he.a.footer,
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
			const be = Object(r.c)({
					savedPayments: h.u,
					user: y.fb
				}),
				ge = Object(o.b)(be, (e, t) => {
					let {
						userName: a
					} = t;
					return {
						onFetchUser: () => e(Object(d.B)(a)),
						onCloseAllModals: () => e(Object(l.f)())
					}
				}),
				Ne = Object(c.a)(ge(xe));
			t.default = Ne
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return g
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
			var b = function(e, t) {
				var a = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (a[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (a[s[n]] = e[s[n]])
				}
				return a
			};
			class g extends r.a.Component {
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
				} = e, a = b(e, ["className"]);
				const s = Object(c.a)(y.a.row, t, {
					[y.a.mIsInteractive]: !a.noHover,
					[y.a.mIsSelected]: a.isSelected,
					[y.a.topics]: a.isTopicsStyle
				});
				return r.a.createElement(g, x({
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
			a.d(t, "a", (function() {
				return S
			})), a.d(t, "c", (function() {
				return _
			}));
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
				b = a("./src/reddit/layout/row/Inline/index.tsx"),
				g = a("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				N = a.n(g);
			var E = Object(y.a)(e => {
					const {
						children: t,
						title: a
					} = e;
					return d.a.createElement("div", {
						className: N.a.wrapper
					}, d.a.createElement(b.a, {
						className: N.a.titleRow
					}, a), d.a.createElement("div", {
						className: N.a.detailsContainer
					}, t), d.a.createElement(b.a, {
						className: N.a.buttonRow
					}, d.a.createElement(x.f, {
						className: N.a.confirmButton,
						onClick: e.onConfirmed
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				f = a("./src/reddit/controls/ErrorText/index.m.less"),
				w = a.n(f);
			const C = Object(m.c)({
				activeModalId: h.a
			});
			class v extends d.a.Component {
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
						className: Object(p.a)(w.a.wrapper, a)
					}, d.a.createElement("span", {
						className: w.a.description,
						ref: this.spanRef
					}, e), l && d.a.createElement("span", {
						className: w.a.moreText,
						onClick: this.toggleModal
					}, r), t === c && d.a.createElement(E, {
						onConfirmed: this.toggleModal,
						title: o
					}, n || e))
				}
			}
			const P = Object(i.b)(C, e => ({
					toggleErrorTextModal: t => e(Object(u.i)(t))
				}))(v),
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
				_ = e => d.a.createElement(S, {
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
//# sourceMappingURL=EconomicsSupportPaymentModal.dc05ea0b0d8f0b885f20.js.map