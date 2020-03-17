// https://www.redditstatic.com/desktop2x/EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508.18ee2500a762230dc01f.js
// Retrieved at 3/17/2020, 2:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"], {
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/currency/cleanNumber/index.ts");

			function o(e, t) {
				const s = Object(n.a)(e),
					o = parseInt(s) / 100;
				return Math.floor(o) !== o || t ? o.toFixed(2) : String(o)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");

			function n(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
		},
		"./src/reddit/components/Economics/Stripe/FormElements/index.m.less": function(e, t, s) {
			e.exports = {
				cardElement: "_3gGvaIZD0Kr5LN6zgUftoJ",
				input: "_2Rll_RnILTYizwr3_d8_Yb",
				container: "_33xygKX3cESskPJUZFiGTl",
				focused: "_3EqT206y-zTlGOWYEX2fJs",
				labelText: "swpdWGo1Vi-zOLoYa4BDF",
				labelTextFocused: "_3OHwZqYkgBwAqR0zjk0PcM"
			}
		},
		"./src/reddit/components/Economics/Stripe/FormElements/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return x
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "b", (function() {
				return g
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "e", (function() {
				return E
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-stripe-elements/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/fonts.tsx"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/components/Economics/Stripe/FormElements/index.m.less"),
				u = s.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const h = e => ({
					color: Object(l.a)({
						theme: e
					}).bodyText,
					fontFamily: i.b,
					fontSize: "14px",
					fontSmoothing: "antialiased",
					fontWeight: "400",
					lineHeight: "20px"
				}),
				b = e => ({
					color: Object(l.a)({
						theme: e
					}).actionIcon,
					fontFamily: "IBMPlexSans, ".concat(i.a),
					fontSize: "10px",
					fontSmoothing: "antialiased",
					fontWeight: "700",
					letterSpacing: "0.5px",
					textTransform: "uppercase"
				});

			function f(e) {
				return Object(c.a)(class extends o.a.Component {
					constructor() {
						super(...arguments), this.el = void 0, this.state = {
							focused: !1,
							notEmpty: !1
						}, this.handleBlur = e => {
							this.setState({
								focused: !1
							}), this.props.onBlur && this.props.onBlur(e)
						}, this.handleChange = e => {
							this.setState({
								notEmpty: !e.empty
							}), this.props.onChange && this.props.onChange(e)
						}, this.handleFocus = e => {
							this.setState({
								focused: !0
							}), this.props.onFocus && this.props.onFocus(e)
						}
					}
					render() {
						const t = this.props,
							{
								labelClassName: s,
								labelText: n,
								theme: r
							} = t,
							c = p(t, ["labelClassName", "labelText", "theme"]),
							i = {
								base: h(r)
							};
						return o.a.createElement("label", {
							className: Object(a.a)(u.a.container, s)
						}, o.a.createElement(e, m({}, c, {
							className: Object(a.a)(u.a.input, c.className, {
								[u.a.focused]: this.state.focused
							}),
							placeholder: "",
							style: Object.assign({}, i, c.style || {}),
							onBlur: this.handleBlur,
							onChange: this.handleChange,
							onFocus: this.handleFocus
						})), o.a.createElement("div", {
							className: Object(a.a)(u.a.labelText, {
								[u.a.labelTextFocused]: this.state.focused || this.state.notEmpty
							})
						}, n))
					}
				})
			}
			const x = Object(c.a)(class extends o.a.Component {
					constructor() {
						super(...arguments), this.state = {
							focused: !1
						}, this.handleBlur = e => {
							this.setState({
								focused: !1
							}), this.props.onBlur && this.props.onBlur(e)
						}, this.handleFocus = e => {
							this.setState({
								focused: !0
							}), this.props.onFocus && this.props.onFocus(e)
						}
					}
					render() {
						const e = this.props,
							{
								theme: t
							} = e,
							s = p(e, ["theme"]),
							n = {
								base: Object.assign({}, h(t), {
									"::placeholder": b(t)
								})
							};
						return o.a.createElement(r.CardElement, m({}, s, {
							className: Object(a.a)(u.a.cardElement, s.className, {
								[u.a.focused]: this.state.focused
							}),
							style: Object.assign({}, n, s.style || {}),
							onBlur: this.handleBlur,
							onFocus: this.handleFocus
						}))
					}
				}),
				y = f(r.CardNumberElement),
				g = f(r.CardCVCElement),
				v = f(r.CardExpiryElement),
				E = f(r.PostalCodeElement)
		},
		"./src/reddit/components/Economics/Support/Common/Amounts/Custom/index.m.less": function(e, t, s) {
			e.exports = {
				container: "pGd2OcaUe-56mNbvrg9d",
				selected: "sTR4Kl_C3tsBqapdDiLm-",
				small: "_1HY0iV37vWDMJx76SoEwVW"
			}
		},
		"./src/reddit/components/Economics/Support/Common/Amounts/Fixed/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2EOEGwQGJyY1PfZ60eWMqu",
				largeFont: "_3w1N2whVq7iFKWacFzMFCD",
				selected: "_24VksgIXJ8JeM147sCoAre",
				smallFont: "_1QF-VvGwtrXAa1hNGP8y3T"
			}
		},
		"./src/reddit/components/Economics/Support/Common/Amounts/index.m.less": function(e, t, s) {
			e.exports = {
				button: "Rv60i-uNUbZ3IBESCN3A3",
				container: "_2d-xFs9JaWxLtduotCx_e7"
			}
		},
		"./src/reddit/components/Economics/Support/Common/Amounts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/currency/centsToDollars/index.ts"),
				c = s("./src/lib/currency/cleanNumber/index.ts");
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			var i = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/controls/FormFields/index.tsx"),
				d = s("./src/reddit/i18n/utils.ts"),
				u = s("./src/reddit/components/Economics/Support/Common/Amounts/Custom/index.m.less"),
				m = s.n(u);
			const p = e => t => o.a.createElement(l.c, {
					className: Object(r.a)(m.a.container, e, t.className, {
						[m.a.selected]: !!t.selected
					}),
					label: Object(d.c)("other"),
					placeholder: "0",
					type: "text",
					value: t.amount && t.selected ? "$".concat(Object(i.a)(Object(a.a)(t.amount))) : "",
					onChange: e => {
						const s = function(e) {
							const [t, s] = e.split(".").map(c.a).map(parseInt);
							let n = 100 * t;
							return String(n += s || 0)
						}(e.currentTarget.value);
						parseInt(s) <= 2e4 && t.onSelect(s)
					},
					onFocus: () => t.onSelect(t.amount ? Object(c.a)(t.amount) : "0")
				}),
				h = p(m.a.small);
			var b = p(void 0),
				f = s("./src/reddit/components/Economics/Support/Common/Amounts/Fixed/index.m.less"),
				x = s.n(f);
			const y = e => t => o.a.createElement("button", {
					className: Object(r.a)(t.className, x.a.container, e, {
						[x.a.selected]: !!t.selected
					}),
					style: t.style,
					onClick: () => t.onSelect(t.amount)
				}, "$".concat(Object(i.a)(Object(a.a)(t.amount)))),
				g = y(x.a.smallFont);
			var v = y(x.a.largeFont),
				E = s("./src/reddit/components/Economics/Support/Common/Amounts/index.m.less"),
				S = s.n(E);
			t.a = function(e) {
				const t = e.small ? h : b,
					s = e.small ? g : v,
					n = e.small ? 5 : 10;
				return o.a.createElement("div", {
					className: Object(r.a)(S.a.container, e.className)
				}, e.amounts.map((t, r) => o.a.createElement(s, {
					amount: t,
					className: S.a.button,
					key: "".concat(t, "-").concat(r),
					selected: t === e.currentlySelected.id,
					style: {
						marginRight: n
					},
					onSelect: s => e.onUpdateAmount({
						value: s,
						id: t
					})
				})), o.a.createElement(t, {
					amount: e.currentlySelected.value,
					className: S.a.button,
					selected: "custom" === e.currentlySelected.id,
					onSelect: t => e.onUpdateAmount({
						value: t,
						id: "custom"
					})
				}))
			}
		},
		"./src/reddit/components/Economics/Support/Common/LegalNotice/index.m.less": function(e, t, s) {
			e.exports = {
				smallText: "_137n8ZuMnPR2nBs5IR7avx",
				text: "_18n-42XXzGXc1cZs1BZ2wU",
				link: "_1y6oy2O52oaTrxf0IGlpA4"
			}
		},
		"./src/reddit/components/Economics/Support/Common/LegalNotice/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Translated/index.tsx"),
				c = s("./src/reddit/constants/disclaimers.ts"),
				i = s("./src/reddit/i18n/utils.ts"),
				l = s("./src/reddit/models/Payments/index.ts"),
				d = s("./src/reddit/components/Economics/Support/Common/LegalNotice/index.m.less"),
				u = s.n(d);
			const m = e => "economy.support.payment.footer.legal.".concat(e),
				p = e => t => o.a.createElement("div", {
					className: Object(r.a)(e, t.className)
				}, !t.anonymous && o.a.createElement("div", null, t.contentType === l.a.Subreddit ? Object(i.c)("Your username & support amount will be public.") : o.a.createElement(a.a, {
					msgId: m("notAnonymous")
				})), o.a.createElement("div", null, t.contentType === l.a.Subreddit ? Object(i.c)("By supporting, you agree to our") : o.a.createElement(a.a, {
					msgId: m("text")
				}), o.a.createElement("a", {
					className: u.a.link,
					href: c.a,
					target: "_blank"
				}, o.a.createElement(a.a, {
					msgId: m("link")
				})), o.a.createElement(a.a, {
					msgId: m("delimiter")
				}))),
				h = p(u.a.smallText);
			t.b = p(u.a.text)
		},
		"./src/reddit/components/Economics/Support/Common/SubmitButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/Translated/index.tsx"),
				a = s("./src/reddit/contexts/ApiContext.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/config.ts"),
				l = s("./src/reddit/models/Payments/index.ts"),
				d = s("./src/reddit/endpoints/governance/requester.ts");

			function u(e, t) {
				return Object(d.a)(e, {
					endpoint: "".concat(i.a.metaUrl, "/orders"),
					method: "post",
					data: {
						currency: "usd",
						orderTarget: "tips",
						products: [{
							productId: "currency_unit_usdr",
							quantity: t.amount
						}],
						price: t.amount,
						providerArgs: t.savedCardId ? {
							source: t.savedCardId
						} : void 0,
						providerName: l.c.Stripe,
						subredditId: t.subredditId,
						targetArgs: {
							anonymous: t.anonymous,
							contentId: t.content ? t.content.id : void 0,
							message: t.message ? t.message : void 0
						}
					}
				})
			}
			var m = s("./src/reddit/helpers/favoriteCreators/index.ts"),
				p = s("./src/reddit/i18n/utils.ts");

			function h(e) {
				return e === l.a.Comment || e === l.a.Post || e === l.a.Profile
			}
			class b extends o.a.Component {
				constructor() {
					super(...arguments), this.changeSubmitState = e => {
						this.props.onChangeSubmitState && this.props.onChangeSubmitState(e)
					}, this.getUsername = () => this.props.user && this.props.user.username ? this.props.user.username : this.props.fallbackTargetName, this.handleStripeResponse = e => {
						let {
							error: t
						} = e;
						t ? this.changeSubmitState({
							submitting: !1,
							success: !1,
							error: {
								code: 400,
								extra: t.message || "Payment rejected. Please try again later.",
								message: t.message || "",
								type: t.type
							}
						}) : (this.changeSubmitState({
							submitting: !1,
							success: !0
						}), this.props.user && Object(m.b)(this.props.subredditId, this.props.user.id))
					}, this.handleSubmit = async () => {
						if ((!h(this.props.content.type) || this.props.user) && this.props.selectedPayment) switch (this.props.selectedPayment.type) {
							case l.b.NewStripe: {
								if (!this.props.selectedPayment.element || !this.props.stripeInstance) return;
								this.changeSubmitState({
									submitting: !0,
									success: !1
								});
								const e = await u(this.props.apiContext(), {
									amount: this.props.amount.value,
									anonymous: this.props.anonymous,
									content: this.props.content,
									message: this.props.message,
									subredditId: this.props.subredditId
								});
								if (e.ok) {
									const {
										providerResult: {
											clientSecretKey: t
										}
									} = e.body, s = await this.props.stripeInstance.handleCardPayment(t, this.props.selectedPayment.element, this.props.selectedPayment.saveCard ? {
										save_payment_method: !0
									} : void 0);
									this.handleStripeResponse(s)
								} else this.changeSubmitState({
									submitting: !1,
									success: !1,
									error: e.error
								});
								return
							}
							case l.b.SavedStripe: {
								if (!this.props.stripeInstance) return;
								this.changeSubmitState({
									submitting: !0,
									success: !1
								});
								const e = await u(this.props.apiContext(), {
									amount: this.props.amount.value,
									anonymous: this.props.anonymous,
									content: this.props.content,
									message: this.props.message,
									savedCardId: this.props.selectedPayment.id,
									subredditId: this.props.subredditId
								});
								if (e.ok) {
									const {
										providerResult: {
											clientSecretKey: t
										}
									} = e.body, s = await this.props.stripeInstance.handleCardPayment(t, {
										source: this.props.selectedPayment.id
									});
									this.handleStripeResponse(s)
								} else this.changeSubmitState({
									submitting: !1,
									success: !1,
									error: e.error
								});
								return
							}
							default:
								alert("Payment option unsupported")
						}
					}
				}
				render() {
					return o.a.createElement(c.f, {
						"data-redditstyle": !0,
						className: this.props.className,
						disabled: (e = this.props, !(e.selectedPayment && (e.selectedPayment.type !== l.b.NewStripe || Object(l.e)(e.selectedPayment) && e.stripeInstance && e.selectedPayment.element) && (e.user || !h(e.content.type)) && !e.submitting)),
						onClick: this.handleSubmit
					}, h(this.props.content.type) ? o.a.createElement(r.a, {
						msgId: "economy.support.payment.footer.submit.buttonText",
						replacements: {
							username: this.getUsername()
						}
					}) : Object(p.c)("Support ".concat(Object(p.b)("communityName", this.props.fallbackTargetName))));
					var e
				}
			}
			t.a = Object(a.b)(b)
		},
		"./src/reddit/components/Economics/Support/Common/WrappedStripeProvider/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-stripe-elements/es/index.js"),
				c = s("./node_modules/reselect/es/index.js");
			const i = e => {
				let {
					woffUrl: t,
					woff2Url: s
				} = e;
				return ["url(https://www.redditstatic.com/desktop2x/".concat(s, ") format('woff2')"), "url(https://www.redditstatic.com/desktop2x/".concat(t, ") format('woff')")].join(", ")
			};
			const l = Object(c.c)({
				fonts: e => e.fontFiles
			});
			t.a = Object(r.b)(l)((function(e) {
				return e.stripeInstance ? o.a.createElement(a.StripeProvider, {
					stripe: e.stripeInstance
				}, o.a.createElement(a.Elements, {
					fonts: e.fonts.filter(e => !e.woffUrl.includes("el-")).map(e => ({
						family: e.family,
						src: i(e),
						style: e.style,
						weight: "".concat(e.weight)
					}))
				}, e.children)) : o.a.createElement(n.Fragment, null, e.children)
			}))
		},
		"./src/reddit/constants/disclaimers.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.ORIGINAL_CONTENT_DISCLAIMER = "original_content_disclaimer"
				}(n || (n = {}));
			const o = "https://www.redditinc.com/policies/beta-terms-of-service"
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, s) {
			e.exports = {
				input: "_3CWuMoFPzdbJCxYJVmEw00",
				label: "J4DegnzzIY1-C2PFzYkrA",
				mHasValue: "t09kxBqaSw0Is_F5sUdQ1",
				inputWrapper: "_3TCLGRXxb1PXK-_sziBD2q",
				mIsInvalid: "_1pMjk4nL9CObVggXCSuELu",
				inputMovingLabelWrapper: "_2-meAmTwsZSCNYrpbEy7BX",
				mIsRedditStyle: "_3ONm7CsU4BtjX9jO5WYv2X",
				trash: "_2YUtyje1Y5rUty_3zgPOGM",
				trashContainer: "_2wjFyjW1rwWs4WFcSc7xNl",
				plus: "_3o11DwChSYlSiDT6FYqOIE",
				addValueButton: "_1Dm7EZTfDne90O5xANs501",
				multiInputWrapper: "_3CjWcr8XyX0xN32ADxPngu",
				errorText: "_2JNX-DiHbrfxhFYgkcBNaK"
			}
		},
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "d", (function() {
				return v
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/controls/ErrorText/index.tsx"),
				i = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = s("./src/reddit/controls/FormFields/index.m.less"),
				u = s.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const h = a.a.input("input", u.a),
				b = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				f = e => {
					const {
						label: t,
						children: s,
						inputRef: n,
						className: a
					} = e, c = p(e, ["label", "children", "inputRef", "className"]), i = void 0 !== e.value && "" !== e.value;
					return o.a.createElement("div", {
						className: Object(r.a)(u.a.inputWrapper, a, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: b
					}, o.a.createElement(h, m({
						"aria-invalid": e.isInvalid,
						innerRef: n
					}, c)), e.label && o.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: i
						})
					}, e.label), e.children)
				},
				x = e => {
					const {
						label: t,
						children: s,
						inputRef: n,
						className: a,
						redditStyle: c
					} = e, i = p(e, ["label", "children", "inputRef", "className", "redditStyle"]), l = void 0 !== e.value && "" !== e.value;
					return o.a.createElement("div", {
						className: Object(r.a)(u.a.inputMovingLabelWrapper, a, {
							[u.a.mIsRedditStyle]: c
						}),
						onClick: b
					}, o.a.createElement(h, m({
						innerRef: n
					}, i)), e.label && o.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				y = e => o.a.createElement("div", {
					className: Object(r.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", o.a.createElement(i.a, {
					className: u.a.plus
				}));
			var g;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(g || (g = {}));
			class v extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: g.ADD
						})
					}, this.updateValue = (e, t) => {
						const s = this.props.values.slice();
						s[t] = e.target.value, this.props.onChange(s)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							s = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: g.REMOVE,
							value: s,
							index: e
						})
					}
				}
				componentWillReceiveProps(e) {
					e.values.length > this.props.values.length && this.setState({
						addingNewInputs: !0
					})
				}
				componentDidUpdate() {
					this.focusedInput && this.state.addingNewInputs && (this.focusedInput.focus(), this.setState({
						addingNewInputs: !1
					}))
				}
				setInputRef(e, t) {
					this.state.addingNewInputs && (!this.props.buttonOnTop || this.props.buttonOnTop && !t) && (this.focusedInput = e)
				}
				renderFields() {
					const {
						values: e,
						disabled: t,
						label: s,
						placeholder: n,
						errors: r = []
					} = this.props;
					return e.map((e, a) => o.a.createElement(f, {
						inputRef: e => this.setInputRef(e, a),
						isInvalid: !!r[a],
						disabled: t,
						type: "text",
						label: s,
						onChange: e => this.updateValue(e, a),
						placeholder: n,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, o.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(a)
					}, o.a.createElement(l.b, {
						className: u.a.trash
					})), !!r[a] && o.a.createElement(c.b, {
						className: u.a.errorText
					}, r[a])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: s,
						maxLength: n,
						addValueText: a,
						disabled: c
					} = this.props;
					this.focusedInput = null;
					const i = !(!!n && s.length >= n) && !c;
					return o.a.createElement("div", {
						className: Object(r.a)(u.a.multiInputWrapper, e)
					}, t && i && o.a.createElement(y, {
						onClick: this.addValue,
						text: a
					}), this.renderFields(), !t && i && o.a.createElement(y, {
						onClick: this.addValue,
						text: a
					}))
				}
			}
		},
		"./src/reddit/helpers/economics/getStripeInstance.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/config.ts"),
				o = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			async function r() {
				return await Object(o.c)(), (0, window.Stripe)(n.a.stripe.economyKey, {
					betas: ["payment_intent_beta_3"]
				})
			}
		},
		"./src/reddit/helpers/styles/mixins/fonts.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			}));
			const n = "Arial, sans-serif",
				o = "Noto Sans, ".concat(n),
				r = "Noto Mono, ".concat("Menlo, Monaco, Consolas, monospace");
			"\n  font-family: ".concat(o, ";\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 21px;\n")
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, o.a.createElement("g", null, o.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), o.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		}
	}
]);
//# sourceMappingURL=EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508.18ee2500a762230dc01f.js.map