// https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.b3f36591a2f6d1a2375e.js
// Retrieved at 2/28/2021, 9:18:37 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PremiumPurchaseModal", "GoldPurchasePaymentActions"], {
		"./node_modules/react-stripe-elements/es/components/Element.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/react/index.js")),
				o = i(n("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
				a = i(n("./node_modules/react-stripe-elements/es/utils/shallowEqual.js")),
				s = n("./node_modules/react-stripe-elements/es/components/Elements.js");

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function c(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}

			function l(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}

			function d(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}
			var p = function() {},
				u = function(e) {
					e.id, e.className, e.onChange, e.onFocus, e.onBlur, e.onReady;
					return function(e, t) {
						var n = {};
						for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
						return n
					}(e, ["id", "className", "onChange", "onFocus", "onBlur", "onReady"])
				},
				m = function(e) {
					return e.charAt(0).toUpperCase() + e.slice(1)
				};
			t.default = function(e) {
				var t, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return n = t = function(t) {
					function n(e, r) {
						c(this, n);
						var o = l(this, t.call(this, e, r));
						o.handleRef = function(e) {
							o._ref = e
						}, o._element = null;
						var a = u(o.props);
						return o._options = a, o
					}
					return d(n, t), n.prototype.componentDidMount = function() {
						var t = this;
						this.context.addElementsLoadListener((function(n) {
							var r = n.create(e, t._options);
							t._element = r, t._setupEventListeners(r), r.mount(t._ref), (i.impliedTokenType || i.impliedSourceType) && t.context.registerElement(r, i.impliedTokenType, i.impliedSourceType)
						}))
					}, n.prototype.componentWillReceiveProps = function(e) {
						var t = u(e);
						0 === Object.keys(t).length || (0, a.default)(t, this._options) || (this._options = t, this._element && this._element.update(t))
					}, n.prototype.componentWillUnmount = function() {
						if (this._element) {
							var e = this._element;
							e.destroy(), this.context.unregisterElement(e)
						}
					}, n.prototype._setupEventListeners = function(e) {
						var t = this;
						e.on("ready", (function() {
							t.props.onReady(t._element)
						})), e.on("change", (function(e) {
							t.props.onChange(e)
						})), e.on("blur", (function() {
							var e;
							return (e = t.props).onBlur.apply(e, arguments)
						})), e.on("focus", (function() {
							var e;
							return (e = t.props).onFocus.apply(e, arguments)
						}))
					}, n.prototype.render = function() {
						return r.default.createElement("div", {
							id: this.props.id,
							className: this.props.className,
							ref: this.handleRef
						})
					}, n
				}(r.default.Component), t.propTypes = {
					id: o.default.string,
					className: o.default.string,
					onChange: o.default.func,
					onBlur: o.default.func,
					onFocus: o.default.func,
					onReady: o.default.func
				}, t.defaultProps = {
					id: void 0,
					className: void 0,
					onChange: p,
					onBlur: p,
					onFocus: p,
					onReady: p
				}, t.contextTypes = s.elementContextTypes, t.displayName = m(e) + "Element", n
			}
		},
		"./node_modules/react-stripe-elements/es/components/Elements.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.elementContextTypes = t.injectContextTypes = void 0;
			var r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				},
				o = i(n("./node_modules/react/index.js")),
				a = i(n("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
				s = n("./node_modules/react-stripe-elements/es/components/Provider.js");

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function c(e) {
				if (Array.isArray(e)) {
					for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
					return n
				}
				return Array.from(e)
			}
			var l = t.injectContextTypes = {
					getRegisteredElements: a.default.func.isRequired
				},
				d = t.elementContextTypes = {
					addElementsLoadListener: a.default.func.isRequired,
					registerElement: a.default.func.isRequired,
					unregisterElement: a.default.func.isRequired
				},
				p = function(e) {
					function t(n, o) {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var a = function(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this, n, o));
						return a.handleRegisterElement = function(e, t, n) {
							a.setState((function(o) {
								return {
									registeredElements: [].concat(c(o.registeredElements), [r({
										element: e
									}, t ? {
										impliedTokenType: t
									} : {}, n ? {
										impliedSourceType: n
									} : {})])
								}
							}))
						}, a.handleUnregisterElement = function(e) {
							a.setState((function(t) {
								return {
									registeredElements: t.registeredElements.filter((function(t) {
										return t.element !== e
									}))
								}
							}))
						}, a.state = {
							registeredElements: []
						}, a
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), t.prototype.getChildContext = function() {
						var e = this;
						return {
							addElementsLoadListener: function(t) {
								if (e._elements) t(e._elements);
								else {
									var n = e.props,
										r = (n.children, function(e, t) {
											var n = {};
											for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
											return n
										}(n, ["children"]));
									"sync" === e.context.tag ? (e._elements = e.context.stripe.elements(r), t(e._elements)) : e.context.addStripeLoadListener((function(n) {
										e._elements ? t(e._elements) : (e._elements = n.elements(r), t(e._elements))
									}))
								}
							},
							registerElement: this.handleRegisterElement,
							unregisterElement: this.handleUnregisterElement,
							getRegisteredElements: function() {
								return e.state.registeredElements
							}
						}
					}, t.prototype.render = function() {
						return o.default.Children.only(this.props.children)
					}, t
				}(o.default.Component);
			p.childContextTypes = r({}, l, d), p.contextTypes = s.providerContextTypes, p.defaultProps = {
				children: null
			}, t.default = p
		},
		"./node_modules/react-stripe-elements/es/components/PaymentRequestButtonElement.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				},
				o = c(n("./node_modules/react/index.js")),
				a = c(n("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
				s = c(n("./node_modules/react-stripe-elements/es/utils/shallowEqual.js")),
				i = n("./node_modules/react-stripe-elements/es/components/Elements.js");

			function c(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var l = function() {},
				d = function(e) {
					e.id, e.className, e.onBlur, e.onClick, e.onFocus, e.onReady, e.paymentRequest;
					return function(e, t) {
						var n = {};
						for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
						return n
					}(e, ["id", "className", "onBlur", "onClick", "onFocus", "onReady", "paymentRequest"])
				},
				p = function(e) {
					function t(n, r) {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this, n, r));
						o.handleRef = function(e) {
							o._ref = e
						};
						var a = d(n);
						return o._options = a, o
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), t.prototype.componentDidMount = function() {
						var e = this;
						this.context.addElementsLoadListener((function(t) {
							e._element = t.create("paymentRequestButton", r({
								paymentRequest: e.props.paymentRequest
							}, e._options)), e._element.on("ready", (function() {
								e.props.onReady(e._element)
							})), e._element.on("focus", (function() {
								var t;
								return (t = e.props).onFocus.apply(t, arguments)
							})), e._element.on("click", (function() {
								var t;
								return (t = e.props).onClick.apply(t, arguments)
							})), e._element.on("blur", (function() {
								var t;
								return (t = e.props).onBlur.apply(t, arguments)
							})), e._element.mount(e._ref)
						}))
					}, t.prototype.componentWillReceiveProps = function(e) {
						this.props.paymentRequest !== e.paymentRequest && console.warn("Unsupported prop change: paymentRequest is not a customizable property.");
						var t = d(e);
						0 === Object.keys(t).length || (0, s.default)(t, this._options) || (this._options = t, this._element.update(t))
					}, t.prototype.componentWillUnmount = function() {
						this._element.destroy()
					}, t.prototype.render = function() {
						return o.default.createElement("div", {
							id: this.props.id,
							className: this.props.className,
							ref: this.handleRef
						})
					}, t
				}(o.default.Component);
			p.propTypes = {
				id: a.default.string,
				className: a.default.string,
				onBlur: a.default.func,
				onClick: a.default.func,
				onFocus: a.default.func,
				onReady: a.default.func,
				paymentRequest: a.default.shape({
					canMakePayment: a.default.func.isRequired,
					on: a.default.func.isRequired,
					show: a.default.func.isRequired
				}).isRequired
			}, p.defaultProps = {
				id: void 0,
				className: void 0,
				onBlur: l,
				onClick: l,
				onFocus: l,
				onReady: l
			}, p.contextTypes = i.elementContextTypes, t.default = p
		},
		"./node_modules/react-stripe-elements/es/components/Provider.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.providerContextTypes = void 0;
			var r = a(n("./node_modules/react/index.js")),
				o = a(n("./node_modules/react-stripe-elements/node_modules/prop-types/index.js"));

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var s = t.providerContextTypes = {
					tag: o.default.string.isRequired,
					stripe: o.default.object,
					addStripeLoadListener: o.default.func
				},
				i = function(e, t) {
					window.Stripe.__cachedInstances = window.Stripe.__cachedInstances || {};
					var n = "key=" + e + " options=" + JSON.stringify(t),
						r = window.Stripe.__cachedInstances[n] || window.Stripe(e, t);
					return window.Stripe.__cachedInstances[n] = r, r
				},
				c = function(e) {
					if (e && e.elements && e.createSource && e.createToken) return e;
					throw new Error("Please pass a valid Stripe object to StripeProvider. You can obtain a Stripe object by calling 'Stripe(...)' with your publishable key.")
				},
				l = function(e) {
					function t(n) {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var r = function(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this, n));
						if (r.props.apiKey && r.props.stripe) throw new Error("Please pass either 'apiKey' or 'stripe' to StripeProvider, not both.");
						if (r.props.apiKey) {
							if (!window.Stripe) throw new Error("Please load Stripe.js (https://js.stripe.com/v3/) on this page to use react-stripe-elements. If Stripe.js isn't available yet (it's loading asynchronously, or you're using server-side rendering), see https://github.com/stripe/react-stripe-elements#advanced-integrations");
							var o = r.props,
								a = o.apiKey,
								s = (o.children, o.stripe, function(e, t) {
									var n = {};
									for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
									return n
								}(o, ["apiKey", "children", "stripe"]));
							r._meta = {
								tag: "sync",
								stripe: i(a, s)
							}
						} else if (r.props.stripe) r._meta = {
							tag: "sync",
							stripe: c(r.props.stripe)
						};
						else {
							if (null !== r.props.stripe) throw new Error("Please pass either 'apiKey' or 'stripe' to StripeProvider. If you're using 'stripe' but don't have a Stripe instance yet, pass 'null' explicitly.");
							r._meta = {
								tag: "async",
								stripe: null
							}
						}
						return r._didWarn = !1, r._didWakeUpListeners = !1, r._listeners = [], r
					}
					return function(e, t) {
						if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
						e.prototype = Object.create(t && t.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
					}(t, e), t.prototype.getChildContext = function() {
						var e = this;
						return "sync" === this._meta.tag ? {
							tag: "sync",
							stripe: this._meta.stripe
						} : {
							tag: "async",
							addStripeLoadListener: function(t) {
								e._meta.stripe ? t(e._meta.stripe) : e._listeners.push(t)
							}
						}
					}, t.prototype.componentWillReceiveProps = function(e) {
						var t = this.props.apiKey && e.apiKey && this.props.apiKey !== e.apiKey,
							n = this.props.stripe && e.stripe && this.props.stripe !== e.stripe;
						if (!this._didWarn && (t || n) && window.console && window.console.error) return this._didWarn = !0, void console.error("StripeProvider does not support changing the apiKey parameter.");
						if (!this._didWakeUpListeners && e.stripe) {
							this._didWakeUpListeners = !0;
							var r = c(e.stripe);
							this._meta.stripe = r, this._listeners.forEach((function(e) {
								e(r)
							}))
						}
					}, t.prototype.render = function() {
						return r.default.Children.only(this.props.children)
					}, t
				}(r.default.Component);
			l.propTypes = {
				apiKey: o.default.string,
				stripe: o.default.object,
				children: o.default.node
			}, l.childContextTypes = s, l.defaultProps = {
				apiKey: void 0,
				stripe: void 0,
				children: null
			}, t.default = l
		},
		"./node_modules/react-stripe-elements/es/components/inject.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r, o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				},
				a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				s = n("./node_modules/react/index.js"),
				i = (r = s) && r.__esModule ? r : {
					default: r
				},
				c = n("./node_modules/react-stripe-elements/es/components/Elements.js"),
				l = n("./node_modules/react-stripe-elements/es/components/Provider.js");

			function d(e, t) {
				var n = {};
				for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
				return n
			}

			function p(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}

			function u(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}

			function m(e, t) {
				if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
				e.prototype = Object.create(t && t.prototype, {
					constructor: {
						value: e,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
			}
			t.default = function(e) {
				var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					s = r.withRef,
					h = void 0 !== s && s;
				return n = t = function(t) {
					function n(e, r) {
						if (p(this, n), !r || !r.getRegisteredElements) throw new Error("It looks like you are trying to inject Stripe context outside of an Elements context.\nPlease be sure the component that calls createSource or createToken is within an <Elements> component.");
						var o = u(this, t.call(this, e, r));
						return o.findElement = function(e, t) {
							var n = o.context.getRegisteredElements().filter((function(t) {
									return t[e]
								})),
								r = "auto" === t ? n : n.filter((function(n) {
									return n[e] === t
								}));
							if (1 === r.length) return r[0].element;
							if (r.length > 1) throw new Error("You did not specify the type of Source or Token to create.\n        We could not infer which Element you want to use for this operation.");
							return null
						}, o.requireElement = function(e, t) {
							var n = o.findElement(e, t);
							if (n) return n;
							throw new Error("You did not specify the type of Source or Token to create.\n        We could not infer which Element you want to use for this operation.")
						}, o.wrappedCreateToken = function(e) {
							return function() {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
								if (t && "object" === (void 0 === t ? "undefined" : a(t))) {
									var r = t,
										s = r.type,
										i = d(r, ["type"]),
										c = "string" == typeof s ? s : "auto",
										l = o.requireElement("impliedTokenType", c);
									return e.createToken(l, i)
								}
								if ("string" == typeof t) {
									var p = t;
									return e.createToken(p, n)
								}
								throw new Error("Invalid options passed to createToken. Expected an object, got " + (void 0 === t ? "undefined" : a(t)) + ".")
							}
						}, o.wrappedCreateSource = function(e) {
							return function() {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
								if (t && "object" === (void 0 === t ? "undefined" : a(t))) {
									if ("string" != typeof t.type) throw new Error("Invalid Source type passed to createSource. Expected string, got " + a(t.type) + ".");
									var n = o.findElement("impliedSourceType", t.type);
									return n ? e.createSource(n, t) : e.createSource(t)
								}
								throw new Error("Invalid options passed to createSource. Expected an object, got " + (void 0 === t ? "undefined" : a(t)) + ".")
							}
						}, "sync" === o.context.tag ? o.state = {
							stripe: o.stripeProps(o.context.stripe)
						} : o.state = {
							stripe: null
						}, o
					}
					return m(n, t), n.prototype.componentDidMount = function() {
						var e = this;
						"async" === this.context.tag && this.context.addStripeLoadListener((function(t) {
							e.setState({
								stripe: e.stripeProps(t)
							})
						}))
					}, n.prototype.getWrappedInstance = function() {
						if (!h) throw new Error("To access the wrapped instance, the `{withRef: true}` option must be set when calling `injectStripe()`");
						return this.wrappedInstance
					}, n.prototype.stripeProps = function(e) {
						return o({}, e, {
							createToken: this.wrappedCreateToken(e),
							createSource: this.wrappedCreateSource(e)
						})
					}, n.prototype.render = function() {
						var t = this;
						return i.default.createElement(e, o({}, this.props, {
							stripe: this.state.stripe,
							ref: h ? function(e) {
								t.wrappedInstance = e
							} : null
						}))
					}, n
				}(i.default.Component), t.contextTypes = o({}, l.providerContextTypes, c.injectContextTypes), t.displayName = "InjectStripe(" + (e.displayName || e.name || "Component") + ")", n
			}
		},
		"./node_modules/react-stripe-elements/es/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.IdealBankElement = t.IbanElement = t.PaymentRequestButtonElement = t.PostalCodeElement = t.CardCVCElement = t.CardExpiryElement = t.CardNumberElement = t.CardElement = t.Elements = t.injectStripe = t.StripeProvider = void 0;
			var r = c(n("./node_modules/react-stripe-elements/es/components/Provider.js")),
				o = c(n("./node_modules/react-stripe-elements/es/components/inject.js")),
				a = c(n("./node_modules/react-stripe-elements/es/components/Elements.js")),
				s = c(n("./node_modules/react-stripe-elements/es/components/Element.js")),
				i = c(n("./node_modules/react-stripe-elements/es/components/PaymentRequestButtonElement.js"));

			function c(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var l = (0, s.default)("card", {
					impliedTokenType: "card",
					impliedSourceType: "card"
				}),
				d = (0, s.default)("cardNumber", {
					impliedTokenType: "card",
					impliedSourceType: "card"
				}),
				p = (0, s.default)("cardExpiry"),
				u = (0, s.default)("cardCvc"),
				m = (0, s.default)("postalCode"),
				h = (0, s.default)("iban", {
					impliedTokenType: "bank_account",
					impliedSourceType: "sepa_debit"
				}),
				f = (0, s.default)("idealBank", {
					impliedSourceType: "ideal"
				});
			t.StripeProvider = r.default, t.injectStripe = o.default, t.Elements = a.default, t.CardElement = l, t.CardNumberElement = d, t.CardExpiryElement = p, t.CardCVCElement = u, t.PostalCodeElement = m, t.PaymentRequestButtonElement = i.default, t.IbanElement = h, t.IdealBankElement = f
		},
		"./node_modules/react-stripe-elements/es/utils/shallowEqual.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function(e, t) {
				var n = Object.keys(e),
					r = Object.keys(t);
				return n.length === r.length && n.every((function(n) {
					return t.hasOwnProperty(n) && t[n] === e[n]
				}))
			}
		},
		"./node_modules/react-stripe-elements/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-stripe-elements/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function a() {}
			a.resetWarningCache = o, e.exports = function() {
				function e(e, t, n, o, a, s) {
					if (s !== r) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var n = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					elementType: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t,
					checkPropTypes: a,
					resetWarningCache: o
				};
				return n.PropTypes = n, n
			}
		},
		"./node_modules/react-stripe-elements/node_modules/prop-types/index.js": function(e, t, n) {
			e.exports = n("./node_modules/react-stripe-elements/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-stripe-elements/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, n) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./src/lib/loadRedditAdsPixel.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/lib/sentry/index.ts");

			function o() {
				! function(e, t) {
					if (!e.rdt) {
						var n = e.rdt = function() {
							n.sendEvent ? n.sendEvent.apply(n, arguments) : n.callQueue.push(arguments)
						};
						n.callQueue = [];
						var r = t.createElement("script");
						r.src = "https://www.redditstatic.com/ads/pixel.js", r.async = !0;
						var o = t.getElementsByTagName("script")[0];
						o.parentNode.insertBefore(r, o)
					}
				}(window, document), rdt("init", "t2_2q2gwo2t"), rdt("track", "PageVisit")
			}
			const a = () => {
				try {
					rdt("track", "Purchase")
				} catch (e) {
					r.c.captureMessage('Attempted to fire RedditAds "Purchase" pixel, but global "rdt" object was unavailable')
				}
			}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "selectPaymentMethod", (function() {
				return l
			})), n.d(t, "paymentCompleted", (function() {
				return d
			})), n.d(t, "cardNameInput", (function() {
				return p
			})), n.d(t, "cardNameEmpty", (function() {
				return u
			})), n.d(t, "cardElementChange", (function() {
				return m
			})), n.d(t, "stripeTokenPending", (function() {
				return h
			})), n.d(t, "stripeTokenError", (function() {
				return f
			})), n.d(t, "stripeApiError", (function() {
				return y
			})), n.d(t, "validateAndCreateStripeToken", (function() {
				return b
			})), n.d(t, "paypalApiError", (function() {
				return g
			})), n.d(t, "toggleRememberCard", (function() {
				return _
			})), n.d(t, "selectSavedCard", (function() {
				return v
			})), n.d(t, "_deleteSavedCard", (function() {
				return C
			})), n.d(t, "deleteSavedCard", (function() {
				return E
			})), n.d(t, "savedCardsPending", (function() {
				return P
			})), n.d(t, "savedCardsSuccess", (function() {
				return j
			})), n.d(t, "loadSavedCards", (function() {
				return x
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/sentry/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/gold/purchase.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const l = Object(a.a)(i.A),
				d = Object(a.a)(i.w),
				p = Object(a.a)(i.b),
				u = Object(a.a)(i.a),
				m = Object(a.a)(i.D),
				h = Object(a.a)(i.F),
				f = Object(a.a)(i.E),
				y = Object(a.a)(i.C),
				b = e => async (t, n) => {
					const o = n(),
						a = Object(c.h)(o),
						{
							token: s,
							error: i
						} = await e.createToken({
							name: a
						});
					if (a.trim()) {
						if (!i && s) return s;
						t(f(i || void 0))
					} else {
						const e = r.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(u({
							message: e
						}))
					}
				}, g = Object(a.a)(i.x), _ = Object(a.a)(i.G), v = Object(a.a)(i.B), C = Object(a.a)(i.g), E = e => async (t, n, {
					apiContext: r
				}) => {
					t(C(e));
					try {
						const t = await Object(s.a)(r(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (a) {
						o.c.captureException(a)
					}
				}, P = Object(a.a)(i.y), j = Object(a.a)(i.z), x = () => async (e, t, {
					apiContext: n
				}) => {
					e(P());
					try {
						const t = await Object(s.b)(n());
						if (t.error) throw new Error(t.error.type);
						const r = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(j(r)), r[0] && e(v(r[0].cardId))
					} catch (r) {
						o.c.captureException(r), e(j([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "openPremiumPurchaseModal", (function() {
				return f
			})), n.d(t, "closePremiumPurchaseModal", (function() {
				return y
			})), n.d(t, "stripePremiumPurchaseRequested", (function() {
				return b
			})), n.d(t, "paymentBlobCreated", (function() {
				return g
			})), n.d(t, "openWithBlob", (function() {
				return _
			}));
			var r = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/lib/sentry/index.ts"),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/formatApiError/index.ts"),
				l = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = n("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = n("./src/reddit/endpoints/gold/purchase.ts"),
				u = n("./src/reddit/helpers/correlationIdTracker.ts"),
				m = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				h = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const f = Object(a.a)(h.t),
				y = Object(a.a)(h.e),
				b = e => async (t, n, {
					apiContext: r
				}) => {
					const a = Object(m.a)(n()),
						s = (null == a ? void 0 : a.pennies) || i.pb,
						d = Object(u.c)(u.a.GoldPayment);
					t(Object(l.stripeTokenPending)());
					const h = await t(Object(l.validateAndCreateStripeToken)(e));
					if (h) try {
						const e = await Object(p.g)({
							context: r(),
							correlationId: d,
							pennies: s,
							token: h
						});
						if (e.error) {
							const n = Object(c.a)(e.error);
							t(Object(l.stripeApiError)(n))
						} else t(Object(l.paymentCompleted)({
							confirmed: !1
						}))
					} catch (f) {
						const e = Object(c.a)(f);
						t(Object(l.stripeApiError)(e))
					} else {
						const e = o.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						t(Object(l.stripeApiError)(e))
					}
				}, g = Object(a.a)(h.v), _ = ({
					packageId: e,
					correlationId: t
				}) => async (n, o, {
					apiContext: a
				}) => {
					n(f({
						packageId: e,
						correlationId: t
					}));
					const i = Object(m.a)(o()),
						p = (null == i ? void 0 : i.paypalButtonId) || r.a.paypal.buttons.premium;
					if (p) try {
						const e = await Object(d.f)({
							buttonId: p,
							context: a(),
							correlationId: t
						});
						if (e.error) {
							const t = Object(c.a)(e.error);
							n(Object(l.paypalApiError)(t))
						} else n(g(e))
					} catch (u) {
						const e = Object(c.a)(u);
						n(Object(l.paypalApiError)(e))
					} else s.c.captureMessage("No Premium packages available on Premium purchase modal")
				}
		},
		"./src/reddit/components/CheckoutForm/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CheckoutForm/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./node_modules/react-stripe-elements/es/index.js"),
				d = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				p = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				u = n("./src/reddit/components/CheckoutForm/index.m.less"),
				m = n.n(u);
			const h = Object(i.c)({
					cardCvcValidation: p.f,
					cardExpiryValidation: p.g,
					cardName: p.h,
					cardNumberValidation: p.i,
					nameOnCardValidation: p.k,
					postalCodeValidation: p.l
				}),
				f = Object(s.b)(h, (e, t) => ({
					onCardElementChange: t => e(Object(d.cardElementChange)(t)),
					onNameInput: t => e(Object(d.cardNameInput)({
						cardName: t
					}))
				}));
			class y extends a.a.Component {
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
						cardExpiryValidation: n,
						cardName: o,
						cardNumberValidation: s,
						onCardElementChange: i,
						nameOnCardValidation: d,
						postalCodeValidation: p
					} = this.props, {
						cardNumberReady: u,
						cardExpiryReady: h,
						cardCVCReady: f,
						postalCodeReady: y
					} = this.state, b = {
						base: {
							lineHeight: "40px",
							color: this.computedStyle.getPropertyValue("--newRedditTheme-bodyText"),
							"::placeholder": {
								color: this.computedStyle.getPropertyValue("--newRedditTheme-metaText")
							}
						}
					};
					return a.a.createElement("div", {
						className: Object(c.a)(m.a.checkoutForm, e)
					}, a.a.createElement("div", {
						className: m.a.formCellWide
					}, a.a.createElement("input", {
						className: Object(c.a)(m.a.cardInput, m.a.nameOnCard, {
							[m.a.cardInputError]: !!d
						}),
						type: "text",
						placeholder: r.fbt._("NAME ON CARD", null, {
							hk: "IgrlQ"
						}).toString(),
						onChange: this.onChange,
						value: o
					})), a.a.createElement("div", {
						className: m.a.formCell
					}, a.a.createElement(l.CardNumberElement, {
						className: Object(c.a)(m.a.cardInput, {
							[m.a.cardInputError]: !!s
						}),
						onChange: i,
						onReady: this.onCardNumberReady,
						placeholder: r.fbt._("CARD NUMBER", null, {
							hk: "3pqMxG"
						}).toString(),
						style: b
					}), !u && a.a.createElement("div", {
						className: m.a.elementPlaceholder
					}, r.fbt._("CARD NUMBER", null, {
						hk: "3pqMxG"
					}))), a.a.createElement("div", {
						className: m.a.formCell
					}, a.a.createElement(l.CardExpiryElement, {
						className: Object(c.a)(m.a.cardInput, {
							[m.a.cardInputError]: !!n
						}),
						onChange: i,
						onReady: this.onCardExpiryReady,
						placeholder: r.fbt._("MM/YY", null, {
							hk: "Hou17"
						}).toString(),
						style: b
					}), !h && a.a.createElement("div", {
						className: m.a.elementPlaceholder
					}, r.fbt._("MM/YY", null, {
						hk: "Hou17"
					}))), a.a.createElement("div", {
						className: m.a.formCell
					}, a.a.createElement(l.CardCVCElement, {
						className: Object(c.a)(m.a.cardInput, {
							[m.a.cardInputError]: !!t
						}),
						onChange: i,
						onReady: this.onCardCVCReady,
						placeholder: r.fbt._("CCV", null, {
							hk: "dZzZJ"
						}).toString(),
						style: b
					}), !f && a.a.createElement("div", {
						className: m.a.elementPlaceholder
					}, r.fbt._("CCV", null, {
						hk: "dZzZJ"
					}))), a.a.createElement("div", {
						className: m.a.formCell
					}, a.a.createElement(l.PostalCodeElement, {
						className: Object(c.a)(m.a.cardInput, {
							[m.a.cardInputError]: !!p
						}),
						onChange: i,
						onReady: this.onPostalCodeReady,
						placeholder: r.fbt._("ZIP CODE", null, {
							hk: "2lJZ4j"
						}).toString(),
						style: b
					}), !y && a.a.createElement("div", {
						className: m.a.elementPlaceholder
					}, r.fbt._("ZIP CODE", null, {
						hk: "2lJZ4j"
					}))))
				}
			}
			t.a = Object(l.injectStripe)(f(y))
		},
		"./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less": function(e, t, n) {
			e.exports = {
				purchaseFooter: "_2siiafYfV9NgkupSIDgaht",
				purchaseButton: "_18yTyMH2TYOdGSb9UumZq-"
			}
		},
		"./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/controls/Button/index.tsx"),
				s = n("./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less"),
				i = n.n(s);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => o.a.createElement("div", {
				className: i.a.purchaseFooter
			}, o.a.createElement(a.i, {
				className: i.a.purchaseButton,
				"data-redditstyle": !0,
				onClick: e.onCloseClick
			}, c._("Done", null, {
				hk: "3s1bT9"
			})))
		},
		"./src/reddit/components/PaymentMethodSelector/index.m.less": function(e, t, n) {
			e.exports = {
				paymentOption: "cc9iRBOTxZHHCpcEduRmM",
				paymentOptionContent: "_1EqrH-JzLp3XTA4g36WIrt",
				isNightmode: "_1j5SaVBaG6I__sQRpYS4-I",
				paymentMethodIcon: "_3h70jT0m-MFJMB5LtPpDF5"
			}
		},
		"./src/reddit/components/PaymentMethodSelector/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				l = n("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				d = n.n(l);
			const p = e => a.a.createElement("label", {
				className: Object(s.a)(e.className, d.a.paymentOption)
			}, a.a.createElement("input", {
				type: "radio",
				id: e.value,
				name: "payment-option",
				value: e.value,
				checked: e.selectedValue === e.value,
				onChange: e.onChange
			}), a.a.createElement("div", {
				className: Object(s.a)(d.a.paymentOptionContent, {
					[d.a.isNightmode]: e.nightmode
				})
			}, e.children));
			class u extends a.a.Component {
				constructor() {
					super(...arguments), this.onPaymentSelected = e => {
						const t = e.target.value,
							{
								gildThingId: n,
								onPaymentSelected: r,
								sendEvent: o
							} = this.props;
						switch (t) {
							case "creditCard":
								o(Object(c.e)(n));
								break;
							case "paypal":
								o(Object(c.f)(n))
						}
						return r(t)
					}
				}
				render() {
					const {
						className: e,
						nightmode: t,
						selectedPayment: n
					} = this.props;
					return a.a.createElement("form", {
						className: e
					}, a.a.createElement("fieldset", null, a.a.createElement(p, {
						nightmode: t,
						selectedValue: n,
						onChange: this.onPaymentSelected,
						value: "paypal"
					}, a.a.createElement("div", {
						className: d.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/paypal.png)`
						}
					})), a.a.createElement(p, {
						nightmode: t,
						selectedValue: n,
						onChange: this.onPaymentSelected,
						value: "creditCard"
					}, a.a.createElement("div", {
						className: d.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/visa.png)`
						}
					}), a.a.createElement("div", {
						className: d.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/mastercard.png)`
						}
					}), a.a.createElement("div", {
						className: d.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/amex.png)`
						}
					}), a.a.createElement("div", {
						className: d.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/discover.jpg)`
						}
					}))))
				}
			}
			t.a = Object(i.c)(u)
		},
		"./src/reddit/components/PremiumPurchaseModal/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/PremiumPurchaseModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/config.ts"),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				p = n("./src/reddit/models/Gold/Premium/index.ts"),
				u = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				m = n("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/constants/colors.ts"),
				y = n("./src/reddit/helpers/correlationIdTracker.ts"),
				b = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				g = n("./src/reddit/models/User/index.ts"),
				_ = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				v = n("./src/reddit/selectors/platform.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				E = n("./node_modules/fbt/lib/FbtPublic.js"),
				P = n("./src/lib/loadRedditAdsPixel.ts"),
				j = n("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				x = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				w = n("./src/reddit/helpers/createEmojiText/index.tsx"),
				O = n("./src/reddit/icons/fonts/Premium/index.tsx"),
				k = n("./src/reddit/components/PremiumPurchaseModal/index.m.less"),
				T = n.n(k);
			class S extends o.a.PureComponent {
				componentDidMount() {
					const {
						sendEvent: e
					} = this.props;
					e(Object(b.j)()), Object(P.b)()
				}
				render() {
					const e = this.props;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: T.a.paymentCompleteHeader,
						style: {
							backgroundImage: `url("${i.a.assetPath}/img/gold/premium-hero-g.jpg")`
						}
					}, o.a.createElement(O.a, {
						className: T.a.premiumIcon,
						title: E.fbt._("Reddit Premium", null, {
							hk: "34acNx"
						})
					}), o.a.createElement("div", {
						className: T.a.paymentCompleteTitleMain
					}, E.fbt._("Thanks for purchasing Reddit Premium!", null, {
						hk: "27KGKp"
					})), o.a.createElement("div", {
						className: T.a.paymentCompleteTitleDescription
					}, o.a.createElement("div", {
						className: T.a.paymentCompleteTitleItem
					}, E.fbt._("You will receive a message in your inbox once your purchase is confirmed.", null, {
						hk: "27tvU4"
					})), o.a.createElement("div", {
						className: T.a.paymentCompleteTitleItem
					}, o.a.createElement("a", {
						href: "/settings/premium",
						target: "_blank"
					}, E.fbt._("Manage your ads-free experience.", null, {
						hk: "1RxPah"
					}))), o.a.createElement("div", {
						className: T.a.paymentCompleteTitleItemLast
					}, Object(w.a)(E.fbt._("Find more about {anchor text} on Reddit.", [E.fbt._param("anchor text", ":loungeLink:")], {
						hk: "2RGr1F"
					}), {
						":loungeLink:": o.a.createElement("a", {
							href: "/r/lounge",
							target: "_blank"
						}, "r/lounge")
					}))), o.a.createElement("button", {
						className: T.a.closeButton,
						onClick: e.onCloseClick
					}, o.a.createElement(x.b, {
						className: T.a.closeIcon,
						"data-redditstyle": !0
					}))), o.a.createElement(j.a, {
						onCloseClick: e.onCloseClick
					}))
				}
			}
			var N = Object(h.c)(S),
				R = n("./node_modules/react-stripe-elements/es/index.js"),
				M = n("./src/reddit/components/CheckoutForm/index.tsx"),
				I = n("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				B = n("./src/reddit/controls/Button/index.tsx");
			var A = e => {
				const {
					buttonId: t,
					className: n,
					customField: r,
					"data-redditstyle": a = !1,
					disabled: s,
					onSubmit: i,
					openInNewWindow: c,
					title: l
				} = e, d = s || !t;
				return o.a.createElement("form", {
					className: n,
					action: "https://www.paypal.com/cgi-bin/webscr",
					method: "post",
					target: c ? "_blank" : "_top",
					onSubmit: i
				}, o.a.createElement("input", {
					type: "hidden",
					name: "cmd",
					value: "_s-xclick"
				}), o.a.createElement("input", {
					type: "hidden",
					name: "hosted_button_id",
					value: t
				}), r && o.a.createElement("input", {
					type: "hidden",
					name: "custom",
					value: r
				}), o.a.createElement(B.i, {
					type: "submit",
					"data-redditstyle": a,
					disabled: d
				}, l))
			};
			class F extends o.a.Component {
				constructor() {
					super(...arguments), this.onCompletePurchaseClick = () => {
						const {
							onCompletePurchaseClick: e,
							sendEvent: t,
							stripe: n
						} = this.props;
						n && (t(Object(b.c)()), e(n))
					}, this.onPaypalSubmit = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(b.d)())
					}
				}
				render() {
					const {
						passthrough: e,
						paypalButtonId: t,
						selectedPayment: n,
						stripeTokenPending: r
					} = this.props;
					return o.a.createElement("div", {
						className: T.a.premiumPurchaseSelectPaymentFooter
					}, n === d.yb && o.a.createElement(A, {
						buttonId: t,
						className: T.a.premiumPurchaseButton,
						customField: e,
						"data-redditstyle": !0,
						disabled: !e,
						onSubmit: this.onPaypalSubmit,
						title: E.fbt._("Continue to PayPal", null, {
							hk: "2TCl83"
						})
					}), n === d.xb && o.a.createElement(B.i, {
						className: T.a.premiumPurchaseButton,
						"data-redditstyle": !0,
						disabled: r,
						onClick: this.onCompletePurchaseClick
					}, E.fbt._("Complete purchase", null, {
						hk: "15ZI2y"
					})))
				}
			}
			var L = Object(R.injectStripe)(Object(h.c)(F));
			var U = e => o.a.createElement("div", {
				className: T.a.premiumPurchaseHeader,
				style: {
					backgroundImage: `url("${i.a.assetPath}/img/gold/premium-hero-g.jpg")`
				}
			}, o.a.createElement(O.a, {
				className: T.a.premiumIcon,
				title: E.fbt._("Reddit Premium", null, {
					hk: "34acNx"
				})
			}), o.a.createElement("div", {
				className: T.a.titleMain
			}, E.fbt._("Buy Reddit Premium!", null, {
				hk: "3XxwQZ"
			})), o.a.createElement("div", {
				className: T.a.titleDescription
			}, E.fbt._("You're purchasing Reddit Premium for yourself, {username}!", [E.fbt._param("username", e.userName)], {
				hk: "bCrwe"
			})), o.a.createElement("button", {
				className: T.a.closeButton,
				onClick: e.onCloseClick
			}, o.a.createElement(x.b, {
				className: T.a.closeIcon,
				"data-redditstyle": !0
			})));
			var q = e => {
				const t = (e.total / 100).toLocaleString(),
					n = e.isAnnualPremium ? E.fbt._("yearly", null, {
						hk: "10Ao7X"
					}) : E.fbt._("monthly", null, {
						hk: "2X3LdO"
					}),
					r = e.isAnnualPremium ? E.fbt._("year", null, {
						hk: "4hYQdN"
					}) : E.fbt._("month", null, {
						hk: "1l20Gw"
					});
				return o.a.createElement(R.StripeProvider, {
					apiKey: i.a.stripe.apiKey
				}, o.a.createElement(R.Elements, null, o.a.createElement(o.a.Fragment, null, o.a.createElement(U, {
					onCloseClick: e.onCloseModal,
					userName: e.userName
				}), o.a.createElement("div", {
					className: T.a.premiumPurchaseBody
				}, o.a.createElement(I.a, {
					className: T.a.selectPayment,
					nightmode: e.nightmode,
					selectedPayment: e.selectedPayment,
					onPaymentSelected: e.onPaymentSelected
				}), e.selectedPayment === d.xb && o.a.createElement(M.a, {
					className: T.a.creditCard
				}), o.a.createElement("div", {
					className: T.a.checkoutFooter
				}, o.a.createElement("div", {
					className: T.a.premiumPurchaseTotal
				}, E.fbt._("Total: {Price}/{Membership Term}", [E.fbt._param("Price", `$${t}`), E.fbt._param("Membership Term", n)], {
					hk: "1islUR"
				})), e.selectedPayment === d.xb && o.a.createElement("a", {
					href: "https://stripe.com",
					target: "_blank",
					rel: "noopener noreferrer"
				}, o.a.createElement("img", {
					className: T.a.poweredByStripeIcon,
					src: `${i.a.assetPath}/img/payment-icons/powered-by-stripe.png`
				}))), e.selectedPayment === d.yb && e.paypalErrorMessage && o.a.createElement("div", {
					className: T.a.errorMessage
				}, e.paypalErrorMessage), e.selectedPayment === d.xb && e.stripeErrorMessage && o.a.createElement("div", {
					className: T.a.errorMessage
				}, e.stripeErrorMessage), o.a.createElement("div", {
					className: T.a.membershipDescription
				}, E.fbt._("By completing your purchase, you are agreeing to automatic payments for Reddit Premium and Reddit’s {=User Agreement} and {=Privacy Policy}. Your Premium subscription will auto-renew {Renewal Term} for {Price} (plus tax where applicable). Cancel anytime in User Settings. Cancel at least 24 hours before your subscription ends to avoid getting charged for the next {Length of term}. No partial refunds.", [E.fbt._param("=User Agreement", o.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, E.fbt._("User Agreement", null, {
					hk: "4qnrFW"
				}))), E.fbt._param("=Privacy Policy", o.a.createElement("a", {
					href: "https://www.redditinc.com/policies/privacy-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, E.fbt._("Privacy Policy", null, {
					hk: "2PtUaD"
				}))), E.fbt._param("Renewal Term", n), E.fbt._param("Price", `$${t}`), E.fbt._param("Length of term", r)], {
					hk: "2gscIO"
				}))), o.a.createElement(L, {
					onCompletePurchaseClick: e.onCompletePurchaseClick,
					passthrough: e.passthrough,
					paypalButtonId: e.paypalButtonId,
					selectedPayment: e.selectedPayment,
					stripeTokenPending: e.stripeTokenPending
				}))))
			};

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const W = Object(s.c)({
					activePremiumPackage: _.a,
					activePage: _.n,
					allowNavigationCallback: e => {
						const t = Object(v.a)(e);
						return null === t ? void 0 : t
					},
					nightmode: C.U,
					passthrough: _.e,
					selectedPayment: _.c,
					stripeErrorMessage: _.j,
					stripeTokenPending: _.m,
					paypalErrorMessage: _.d,
					userName: e => {
						const t = Object(C.i)(e);
						return `u/${Object(g.e)(t)}`
					}
				}),
				D = Object(a.b)(W, (e, t) => ({
					closeModal: () => e(Object(m.closePremiumPurchaseModal)()),
					onCloseModalClick: () => e(Object(m.closePremiumPurchaseModal)()),
					onCompletePurchaseClick: t => e(Object(m.stripePremiumPurchaseRequested)(t)),
					onPaymentSelected: t => e(Object(u.selectPaymentMethod)(t))
				}));
			class G extends o.a.Component {
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
					Object(y.d)(y.a.GoldPayment, !1), e(Object(b.i)())
				}
				componentDidUpdate(e) {
					if (this.props.stripeErrorMessage && !e.stripeErrorMessage) {
						const {
							sendEvent: e
						} = this.props;
						e(Object(b.g)())
					}
				}
				render() {
					const {
						activePage: e,
						activePremiumPackage: t,
						className: n,
						nightmode: r,
						selectedPayment: a,
						onCompletePurchaseClick: s,
						onPaymentSelected: c,
						onTryCloseModal: l,
						passthrough: u,
						stripeErrorMessage: m,
						stripeTokenPending: h,
						paypalErrorMessage: f,
						userName: y
					} = this.props;
					return o.a.createElement("div", {
						className: n
					}, "selectPayment" === e && o.a.createElement(q, {
						nightmode: r,
						onCloseModal: l,
						onCompletePurchaseClick: s,
						onPaymentSelected: c,
						isAnnualPremium: !!t && t.frequency === p.d.Yearly,
						passthrough: u,
						paypalButtonId: (null == t ? void 0 : t.paypalButtonId) || i.a.paypal.buttons.premium,
						selectedPayment: a,
						stripeErrorMessage: m,
						stripeTokenPending: h,
						paypalErrorMessage: f,
						total: t ? t.pennies : d.pb,
						userName: y
					}), "paymentCompleted" === e && o.a.createElement(N, {
						onCloseClick: l
					}))
				}
			}
			const K = Object(c.a)(G),
				Y = {
					backgroundColor: f.b.overlayReportFlow
				};
			t.default = D(Object(h.c)(class extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							sendEvent: e
						} = this.props;
						e(Object(b.b)()), this.onCloseModal()
					}, this.onCloseModal = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}
				}
				render() {
					return o.a.createElement(K, V({}, this.props, {
						className: Object(l.a)(this.props.className, T.a.premiumPurchaseModal),
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						overlayCustomStyles: Y,
						withOverlay: !0
					}))
				}
			}))
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "e", (function() {
				return h
			}));
			var r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				s = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = n("./src/reddit/endpoints/gold/purchase.ts");
			const l = async ({
				buttonId: e,
				context: t,
				correlationId: n
			}) => {
				const l = {
						button_id: e,
						correlation_id: n
					},
					d = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					p = Object(i.a)(d);
				return Object(o.a)(Object(a.a)(t, [s.a]), {
					method: r.cb.POST,
					endpoint: p,
					data: l
				}).then(c.c)
			}, d = async ({
				context: e,
				coins: t,
				pennies: n,
				correlationId: i
			}) => {
				const l = {
					coins: t,
					pennies: n,
					correlation_id: i
				};
				return Object(o.a)(Object(a.a)(e, [s.a]), {
					method: r.cb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: l
				}).then(c.c)
			}, p = async ({
				context: e,
				awardId: t,
				pennies: n,
				thingId: i,
				correlationId: l
			}) => {
				const d = {
					award_id: t,
					correlation_id: l,
					pennies: n,
					thing_id: i
				};
				return Object(o.a)(Object(a.a)(e, [s.a]), {
					method: r.cb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: d
				}).then(c.c)
			}, u = async ({
				context: e,
				offerContext: t,
				orderId: n,
				coins: i,
				pennies: l,
				correlationId: d
			}) => {
				const p = {
					offer_context: t,
					order_id: n,
					coins: i,
					pennies: l,
					correlation_id: d
				};
				return Object(o.a)(Object(a.a)(e, [s.a]), {
					method: r.cb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: p
				}).then(c.c)
			}, m = async ({
				awardId: e,
				context: t,
				coins: n,
				correlationId: i,
				isAnonymous: l,
				message: d,
				offerContext: p,
				orderId: u,
				pennies: m,
				thingId: h
			}) => {
				const f = {
					award_id: e,
					coins: n,
					correlation_id: i,
					is_anonymous: l,
					message: d,
					offer_context: p,
					order_id: u,
					pennies: m,
					thing_id: h
				};
				return Object(o.a)(Object(a.a)(t, [s.a]), {
					method: r.cb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: f
				}).then(c.c)
			}, h = async ({
				awardId: e,
				context: t,
				correlationId: n,
				isAnonymous: i,
				message: l,
				orderId: d,
				thingId: p
			}) => {
				const u = {
					award_id: e,
					correlation_id: n,
					is_anonymous: i,
					message: l,
					order_id: d,
					thing_id: p
				};
				return Object(o.a)(Object(a.a)(t, [s.a]), {
					method: r.cb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: u
				}).then(c.c)
			}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				o = n.n(r);

			function a(e, t) {
				const n = e.toString().split(":");
				return n.length % 2 == 0 ? e : n.reduce((e, n, r) => (r % 2 == 0 ? e.push(n) : "" === n ? e.push(":") : `:${n}:` in t ? e.push(t[`:${n}:`]) : e.push(`:${n}:`), e), []).map((e, t) => o.a.createElement(o.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return s
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const o = {
					PREMIUM_1_MONTH: {
						priceInCoins: 1800,
						monthsOfPremium: 1
					},
					PREMIUM_3_MONTHS: {
						priceInCoins: 5400,
						monthsOfPremium: 3
					},
					PREMIUM_6_MONTHS: {
						priceInCoins: 10800,
						monthsOfPremium: 6
					},
					PREMIUM_12_MONTHS: {
						priceInCoins: 21600,
						monthsOfPremium: 12
					}
				},
				a = (e, t = !1) => {
					const n = [];
					for (const r in o) {
						const a = o[r];
						(a.priceInCoins <= e || t) && n.push(a)
					}
					return n
				},
				s = e => r.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [r.fbt._plural(e.monthsOfPremium, "number of months"), r.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				i = [{
					prompt: () => r.fbt._("What is a Reddit Premium Membership?", null, {
						hk: "3ibd7e"
					}),
					answer: () => r.fbt._("Reddit Premium is our subscription membership program, and it directly supports Reddit and the communities that it hosts. It offers an entirely ads-free Reddit experience as well as other benefits, including monthly Coins and access to the exclusive r/lounge community.", null, {
						hk: "22tBeJ"
					})
				}, {
					prompt: () => r.fbt._("Why change the name to Premium? What happened to calling it Gold?", null, {
						hk: "buZNC"
					}),
					answer: () => r.fbt._("The membership has a new name for a good reason. Many people confused the subscription Reddit Gold membership with a virtual good or coin. To make things easier to understand, we’ve renamed the membership to “Reddit Premium”, while the virtual good is called “Coins”. We have kept your favorite features and added more.", null, {
						hk: "2CCKCo"
					})
				}, {
					prompt: () => r.fbt._("What if I was subscribed to the old Gold Membership program?", null, {
						hk: "2Mv367"
					}),
					answer: () => r.fbt._("Fine people everywhere with a Gold Membership are now members of Reddit Premium. It still offers the same great ads-free browsing experience and access to r/lounge, but now you will also receive Coins monthly so you can award exceptional contributions.", null, {
						hk: "IQrwR"
					})
				}, {
					prompt: () => r.fbt._("The Premium membership gives me Coins, what are those for?", null, {
						hk: "4FMg0V"
					}),
					answer: () => r.fbt._("Coins are a virtual good, and you can use them to award exceptional posts or comments with a Silver, Gold, or Platinum Award. This is a way to show appreciation for an exceptional contribution to Reddit, and can also grant the recipient special bonus benefits. You can award someone by clicking on “Give Award” below a post or comment.", null, {
						hk: "46r7Aq"
					})
				}, {
					prompt: () => r.fbt._("Do I have to subscribe to Reddit Premium to get Coins?", null, {
						hk: "boE6i"
					}),
					answer: () => r.fbt._("Monthly Coins are a great benefit for being a Premium member, but if you wish you can also buy individual quantities of Coins. Additionally, you will receive Coins if you are awarded Gold or Platinum.", null, {
						hk: "36zEKr"
					})
				}],
				c = "com.reddit.premium_1";
			var l;
			! function(e) {
				e.Monthly = "monthly", e.Yearly = "yearly"
			}(l || (l = {}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.b3f36591a2f6d1a2375e.js.map