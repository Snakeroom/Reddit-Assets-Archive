// https://www.redditstatic.com/desktop2x/CoinPurchaseModal~PennyPurchaseModal.7727bdb9ffd6ea1e10fe.js
// Retrieved at 4/26/2021, 3:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CoinPurchaseModal~PennyPurchaseModal"], {
		"./node_modules/react-stripe-elements/es/components/Element.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/react/index.js")),
				a = i(n("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
				o = i(n("./node_modules/react-stripe-elements/es/utils/shallowEqual.js")),
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
						var a = l(this, t.call(this, e, r));
						a.handleRef = function(e) {
							a._ref = e
						}, a._element = null;
						var o = u(a.props);
						return a._options = o, a
					}
					return d(n, t), n.prototype.componentDidMount = function() {
						var t = this;
						this.context.addElementsLoadListener((function(n) {
							var r = n.create(e, t._options);
							t._element = r, t._setupEventListeners(r), r.mount(t._ref), (i.impliedTokenType || i.impliedSourceType) && t.context.registerElement(r, i.impliedTokenType, i.impliedSourceType)
						}))
					}, n.prototype.componentWillReceiveProps = function(e) {
						var t = u(e);
						0 === Object.keys(t).length || (0, o.default)(t, this._options) || (this._options = t, this._element && this._element.update(t))
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
					id: a.default.string,
					className: a.default.string,
					onChange: a.default.func,
					onBlur: a.default.func,
					onFocus: a.default.func,
					onReady: a.default.func
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
				a = i(n("./node_modules/react/index.js")),
				o = i(n("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
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
					getRegisteredElements: o.default.func.isRequired
				},
				d = t.elementContextTypes = {
					addElementsLoadListener: o.default.func.isRequired,
					registerElement: o.default.func.isRequired,
					unregisterElement: o.default.func.isRequired
				},
				p = function(e) {
					function t(n, a) {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this, n, a));
						return o.handleRegisterElement = function(e, t, n) {
							o.setState((function(a) {
								return {
									registeredElements: [].concat(c(a.registeredElements), [r({
										element: e
									}, t ? {
										impliedTokenType: t
									} : {}, n ? {
										impliedSourceType: n
									} : {})])
								}
							}))
						}, o.handleUnregisterElement = function(e) {
							o.setState((function(t) {
								return {
									registeredElements: t.registeredElements.filter((function(t) {
										return t.element !== e
									}))
								}
							}))
						}, o.state = {
							registeredElements: []
						}, o
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
						return a.default.Children.only(this.props.children)
					}, t
				}(a.default.Component);
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
				a = c(n("./node_modules/react/index.js")),
				o = c(n("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
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
						var a = function(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this, n, r));
						a.handleRef = function(e) {
							a._ref = e
						};
						var o = d(n);
						return a._options = o, a
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
						return a.default.createElement("div", {
							id: this.props.id,
							className: this.props.className,
							ref: this.handleRef
						})
					}, t
				}(a.default.Component);
			p.propTypes = {
				id: o.default.string,
				className: o.default.string,
				onBlur: o.default.func,
				onClick: o.default.func,
				onFocus: o.default.func,
				onReady: o.default.func,
				paymentRequest: o.default.shape({
					canMakePayment: o.default.func.isRequired,
					on: o.default.func.isRequired,
					show: o.default.func.isRequired
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
			var r = o(n("./node_modules/react/index.js")),
				a = o(n("./node_modules/react-stripe-elements/node_modules/prop-types/index.js"));

			function o(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var s = t.providerContextTypes = {
					tag: a.default.string.isRequired,
					stripe: a.default.object,
					addStripeLoadListener: a.default.func
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
							var a = r.props,
								o = a.apiKey,
								s = (a.children, a.stripe, function(e, t) {
									var n = {};
									for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
									return n
								}(a, ["apiKey", "children", "stripe"]));
							r._meta = {
								tag: "sync",
								stripe: i(o, s)
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
				apiKey: a.default.string,
				stripe: a.default.object,
				children: a.default.node
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
			var r, a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				},
				o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
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
						var a = u(this, t.call(this, e, r));
						return a.findElement = function(e, t) {
							var n = a.context.getRegisteredElements().filter((function(t) {
									return t[e]
								})),
								r = "auto" === t ? n : n.filter((function(n) {
									return n[e] === t
								}));
							if (1 === r.length) return r[0].element;
							if (r.length > 1) throw new Error("You did not specify the type of Source or Token to create.\n        We could not infer which Element you want to use for this operation.");
							return null
						}, a.requireElement = function(e, t) {
							var n = a.findElement(e, t);
							if (n) return n;
							throw new Error("You did not specify the type of Source or Token to create.\n        We could not infer which Element you want to use for this operation.")
						}, a.wrappedCreateToken = function(e) {
							return function() {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
								if (t && "object" === (void 0 === t ? "undefined" : o(t))) {
									var r = t,
										s = r.type,
										i = d(r, ["type"]),
										c = "string" == typeof s ? s : "auto",
										l = a.requireElement("impliedTokenType", c);
									return e.createToken(l, i)
								}
								if ("string" == typeof t) {
									var p = t;
									return e.createToken(p, n)
								}
								throw new Error("Invalid options passed to createToken. Expected an object, got " + (void 0 === t ? "undefined" : o(t)) + ".")
							}
						}, a.wrappedCreateSource = function(e) {
							return function() {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
								if (t && "object" === (void 0 === t ? "undefined" : o(t))) {
									if ("string" != typeof t.type) throw new Error("Invalid Source type passed to createSource. Expected string, got " + o(t.type) + ".");
									var n = a.findElement("impliedSourceType", t.type);
									return n ? e.createSource(n, t) : e.createSource(t)
								}
								throw new Error("Invalid options passed to createSource. Expected an object, got " + (void 0 === t ? "undefined" : o(t)) + ".")
							}
						}, "sync" === a.context.tag ? a.state = {
							stripe: a.stripeProps(a.context.stripe)
						} : a.state = {
							stripe: null
						}, a
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
						return a({}, e, {
							createToken: this.wrappedCreateToken(e),
							createSource: this.wrappedCreateSource(e)
						})
					}, n.prototype.render = function() {
						var t = this;
						return i.default.createElement(e, a({}, this.props, {
							stripe: this.state.stripe,
							ref: h ? function(e) {
								t.wrappedInstance = e
							} : null
						}))
					}, n
				}(i.default.Component), t.contextTypes = a({}, l.providerContextTypes, c.injectContextTypes), t.displayName = "InjectStripe(" + (e.displayName || e.name || "Component") + ")", n
			}
		},
		"./node_modules/react-stripe-elements/es/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.IdealBankElement = t.IbanElement = t.PaymentRequestButtonElement = t.PostalCodeElement = t.CardCVCElement = t.CardExpiryElement = t.CardNumberElement = t.CardElement = t.Elements = t.injectStripe = t.StripeProvider = void 0;
			var r = c(n("./node_modules/react-stripe-elements/es/components/Provider.js")),
				a = c(n("./node_modules/react-stripe-elements/es/components/inject.js")),
				o = c(n("./node_modules/react-stripe-elements/es/components/Elements.js")),
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
			t.StripeProvider = r.default, t.injectStripe = a.default, t.Elements = o.default, t.CardElement = l, t.CardNumberElement = d, t.CardExpiryElement = p, t.CardCVCElement = u, t.PostalCodeElement = m, t.PaymentRequestButtonElement = i.default, t.IbanElement = h, t.IdealBankElement = f
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

			function a() {}

			function o() {}
			o.resetWarningCache = a, e.exports = function() {
				function e(e, t, n, a, o, s) {
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
					checkPropTypes: o,
					resetWarningCache: a
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
		"./src/lib/loadRedditAdsPixel.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/lib/sentry/index.ts");

			function a() {
				! function(e, t) {
					if (!e.rdt) {
						var n = e.rdt = function() {
							n.sendEvent ? n.sendEvent.apply(n, arguments) : n.callQueue.push(arguments)
						};
						n.callQueue = [];
						var r = t.createElement("script");
						r.src = "https://www.redditstatic.com/ads/pixel.js", r.async = !0;
						var a = t.getElementsByTagName("script")[0];
						a.parentNode.insertBefore(r, a)
					}
				}(window, document), rdt("init", "t2_2q2gwo2t"), rdt("track", "PageVisit")
			}
			const o = () => {
				try {
					rdt("track", "Purchase")
				} catch (e) {
					r.c.captureMessage('Attempted to fire RedditAds "Purchase" pixel, but global "rdt" object was unavailable')
				}
			}
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return B
			})), n.d(t, "h", (function() {
				return q
			})), n.d(t, "g", (function() {
				return A
			})), n.d(t, "f", (function() {
				return F
			})), n.d(t, "d", (function() {
				return L
			})), n.d(t, "c", (function() {
				return D
			})), n.d(t, "a", (function() {
				return U
			})), n.d(t, "e", (function() {
				return Z
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/omit.js"),
				o = n.n(a),
				s = n("./node_modules/uuid/v4.js"),
				i = n.n(s),
				c = n("./src/config.ts"),
				l = n("./src/reddit/constants/modals.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/lib/addQueryParams/index.ts"),
				u = n("./src/lib/makeActionCreator/index.ts"),
				m = n("./src/lib/sentry/index.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/actions/gold/constants.ts"),
				y = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				g = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/actions/gold/powerups.ts"),
				_ = n("./src/reddit/actions/modal.ts"),
				v = n("./node_modules/bignumber.js/bignumber.js"),
				E = n.n(v),
				P = n("./src/graphql/operations/CancelEconRecurringPayment.json"),
				x = n("./src/graphql/operations/ConfirmPaypalPayment.json"),
				j = n("./src/graphql/operations/CreateEconOrder.json"),
				w = n("./src/graphql/operations/CreatePaypalPayment.json"),
				k = n("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				O = n("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				S = n("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				N = n("./src/graphql/operations/DeleteSavedStripeCard.json"),
				T = n("./src/graphql/operations/UserSavedStripeCards.json"),
				R = n("./src/lib/makeGqlRequest/index.ts");
			const I = () => r.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				M = e => e.map(e => e.message).join(" : "),
				B = (e, t, n) => async (a, o, {
					gqlContext: s
				}) => {
					const c = i()(),
						l = await ((e, t, n, r, a) => {
							const o = new E.a(n.pricePackages[0].price).multipliedBy(r).toFixed();
							return Object(R.a)(e, {
								...j,
								variables: {
									input: {
										nonce: t,
										productId: n.id,
										productVersion: n.version,
										pricePackageId: n.pricePackages[0].id,
										currency: n.pricePackages[0].currency,
										price: o,
										productsCount: r.toString(),
										...a
									}
								}
							})
						})(s(), c, e, t, n);
					if (l.ok) {
						const e = l.body,
							{
								errors: t,
								order: n
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(M(t));
						if (n) return n.id
					}
					throw new Error((() => r.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, q = (e, t, n, a, o) => async (s, c, {
					gqlContext: l
				}) => {
					const d = c(),
						p = () => s(Object(y.stripeApiError)(r.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						})));
					let u, h, f = "";
					try {
						f = await s(B(t, o, {
							powerUps: {
								subredditId: n,
								isAnonymous: a
							}
						}))
					} catch (_) {
						return m.c.captureException(_), void(_.message && s(Object(y.stripeApiError)(_.message)))
					}
					s(Object(y.stripeTokenPending)());
					const C = Object(g.x)(d);
					if (C || (u = await s(Object(y.validateAndCreateStripeToken)(e)), h = Object(g.u)(d), u)) try {
						const e = i()(),
							t = C || h ? u && h ? ((e, t, n, r) => Object(R.a)(e, {
								...k,
								variables: {
									nonce: t,
									orderId: n,
									token: r
								}
							}))(l(), e, f, u.id) : C ? ((e, t, n, r) => Object(R.a)(e, {
								...S,
								variables: {
									nonce: t,
									orderId: n,
									cardId: r
								}
							}))(l(), e, f, C) : null : ((e, t, n, r) => Object(R.a)(e, {
								...O,
								variables: {
									nonce: t,
									orderId: n,
									token: r
								}
							}))(l(), e, f, u.id),
							r = await t;
						if (!r || !r.ok) return void p(); {
							const e = r.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return void s(Object(y.stripeApiError)(M(e.errors)));
							if (e.ok && "PAID" !== e.payment.status) return void p();
							const t = Object(b.i)(c());
							t && s(Z({
								subredditId: n,
								powerupsCount: o,
								user: t,
								isAnonymous: a
							}))
						}
					} catch (_) {
						m.c.captureException(_), p()
					}
				}, A = (e, t, n, r) => async (a, o, {
					gqlContext: s
				}) => {
					let l = "";
					try {
						l = await a(B(e, r, {
							powerUps: {
								subredditId: t,
								isAnonymous: n
							}
						}))
					} catch (u) {
						return m.c.captureException(u), u.message && a(Object(y.paypalApiError)(u.message)), null
					}
					const d = c.a.redditUrl;
					try {
						const e = Object(p.a)(`${d}/framedModal/paypal-finish`, {
								_o: d,
								r: t,
								o: l,
								s: !0
							}),
							c = Object(p.a)(`${d}/framedModal/paypal-finish`, {
								_o: d,
								r: t,
								o: l
							}),
							u = i()(),
							m = await ((e, t, n, r, a) => Object(R.a)(e, {
								...w,
								variables: {
									nonce: t,
									orderId: n,
									successUrl: r,
									cancelUrl: a
								}
							}))(s(), u, l, e, c);
						if (m && m.ok) {
							const e = m.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return a(Object(y.paypalApiError)(M(e.errors))), null;
							const s = Object(b.i)(o());
							if (e.ok) {
								const {
									status: o
								} = e.payment;
								if ("ACTION_REQUIRED" === o) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === o && s) return a(Z({
									subredditId: t,
									powerupsCount: r,
									user: s,
									isAnonymous: n
								})), null
							}
						}
					} catch (u) {
						m.c.captureException(u)
					}
					return a(Object(y.paypalApiError)(I())), null
				}, F = (e, t) => async (n, r, {
					gqlContext: a
				}) => {
					try {
						const r = i()(),
							o = await ((e, t, n, r) => Object(R.a)(e, {
								...x,
								variables: {
									nonce: t,
									paymentId: n,
									token: r
								}
							}))(a(), r, e, t);
						if (o && o.ok) {
							const e = o.body.data.confirmEconPayment;
							if (e && e.errors && e.errors.length) return n(Object(y.paypalApiError)(M(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (o) {
						m.c.captureException(o)
					}
					return n(Object(y.paypalApiError)(I())), !1
				}, L = () => async (e, t, {
					gqlContext: n
				}) => {
					e(Object(y.savedCardsPending)());
					try {
						const t = await (e => Object(R.a)(e, {
							...T,
							variables: {}
						}))(n());
						if (t.ok) {
							const n = t.body;
							n.errors && n.errors.length && e(Object(y.stripeApiError)(n.errors[0].message));
							const {
								savedStripeCards: r
							} = n.data.identity, a = r.map(e => o()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(y.savedCardsSuccess)(a)), a[0] && e(Object(y.selectSavedCard)(a[0].cardId))
						} else e(Object(y.stripeApiError)(r.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (a) {
						m.c.captureException(a), e(Object(y.savedCardsSuccess)([]))
					}
				}, D = e => async (t, n, {
					gqlContext: r
				}) => {
					t(Object(y._deleteSavedCard)(e));
					try {
						const t = await ((e, t) => Object(R.a)(e, {
							...N,
							variables: {
								cardId: t
							}
						}))(r(), e);
						if (t.error) throw new Error(t.error.type);
						const n = t.body,
							{
								errors: a
							} = n.data.deleteEconPaymentMethod;
						if (a && a.length) throw new Error(M(a))
					} catch (a) {
						m.c.captureException(a)
					}
				}, W = Object(u.a)(f.N), V = Object(u.a)(f.O), H = Object(u.a)(f.P), J = e => async (t, n) => {
					await t(W(e)), t(Object(d.f)({
						kind: h.b.Error,
						duration: d.a,
						text: e
					}))
				}, U = (e, t, n) => async (a, o, {
					gqlContext: s
				}) => {
					a(V({
						subredditId: t,
						allocatedAt: n
					}));
					try {
						const o = await ((e, t) => Object(R.a)(e, {
							...P,
							variables: {
								orderId: t
							}
						}))(s(), e);
						if (o.ok) {
							const e = o.body,
								{
									errors: r
								} = e.data.cancelEconRecurringPayment;
							if (r && r.length) return void a(J(r[0].message));
							a(H({
								subredditId: t,
								allocatedAt: n
							}))
						} else a(J(r.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						m.c.captureException(i), a(J(r.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, G = Object(u.a)(f.R), Z = e => async (t, n) => {
					t(G(e)), t(Object(C.g)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(_.g)(l.a.ECON_POWERUPS_PURCHASE)), t(Object(_.h)(l.a.ECON_POWERUPS_SUCCESS))
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
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
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
			class y extends o.a.Component {
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
						cardName: a,
						cardNumberValidation: s,
						onCardElementChange: i,
						nameOnCardValidation: d,
						postalCodeValidation: p
					} = this.props, {
						cardNumberReady: u,
						cardExpiryReady: h,
						cardCVCReady: f,
						postalCodeReady: y
					} = this.state, g = {
						base: {
							lineHeight: "40px",
							color: this.computedStyle.getPropertyValue("--newRedditTheme-bodyText"),
							"::placeholder": {
								color: this.computedStyle.getPropertyValue("--newRedditTheme-metaText")
							}
						}
					};
					return o.a.createElement("div", {
						className: Object(c.a)(m.a.checkoutForm, e)
					}, o.a.createElement("div", {
						className: m.a.formCellWide
					}, o.a.createElement("input", {
						className: Object(c.a)(m.a.cardInput, m.a.nameOnCard, {
							[m.a.cardInputError]: !!d
						}),
						type: "text",
						placeholder: r.fbt._("NAME ON CARD", null, {
							hk: "IgrlQ"
						}).toString(),
						onChange: this.onChange,
						value: a
					})), o.a.createElement("div", {
						className: m.a.formCell
					}, o.a.createElement(l.CardNumberElement, {
						className: Object(c.a)(m.a.cardInput, {
							[m.a.cardInputError]: !!s
						}),
						onChange: i,
						onReady: this.onCardNumberReady,
						placeholder: r.fbt._("CARD NUMBER", null, {
							hk: "3pqMxG"
						}).toString(),
						style: g
					}), !u && o.a.createElement("div", {
						className: m.a.elementPlaceholder
					}, r.fbt._("CARD NUMBER", null, {
						hk: "3pqMxG"
					}))), o.a.createElement("div", {
						className: m.a.formCell
					}, o.a.createElement(l.CardExpiryElement, {
						className: Object(c.a)(m.a.cardInput, {
							[m.a.cardInputError]: !!n
						}),
						onChange: i,
						onReady: this.onCardExpiryReady,
						placeholder: r.fbt._("MM/YY", null, {
							hk: "Hou17"
						}).toString(),
						style: g
					}), !h && o.a.createElement("div", {
						className: m.a.elementPlaceholder
					}, r.fbt._("MM/YY", null, {
						hk: "Hou17"
					}))), o.a.createElement("div", {
						className: m.a.formCell
					}, o.a.createElement(l.CardCVCElement, {
						className: Object(c.a)(m.a.cardInput, {
							[m.a.cardInputError]: !!t
						}),
						onChange: i,
						onReady: this.onCardCVCReady,
						placeholder: r.fbt._("CCV", null, {
							hk: "dZzZJ"
						}).toString(),
						style: g
					}), !f && o.a.createElement("div", {
						className: m.a.elementPlaceholder
					}, r.fbt._("CCV", null, {
						hk: "dZzZJ"
					}))), o.a.createElement("div", {
						className: m.a.formCell
					}, o.a.createElement(l.PostalCodeElement, {
						className: Object(c.a)(m.a.cardInput, {
							[m.a.cardInputError]: !!p
						}),
						onChange: i,
						onReady: this.onPostalCodeReady,
						placeholder: r.fbt._("ZIP CODE", null, {
							hk: "2lJZ4j"
						}).toString(),
						style: g
					}), !y && o.a.createElement("div", {
						className: m.a.elementPlaceholder
					}, r.fbt._("ZIP CODE", null, {
						hk: "2lJZ4j"
					}))))
				}
			}
			t.a = Object(l.injectStripe)(f(y))
		},
		"./src/reddit/components/CoinBalance/index.m.less": function(e, t, n) {
			e.exports = {
				coinBalance: "_1B-dVN_8RcEpQbDNGHy3Ds"
			}
		},
		"./src/reddit/components/CoinBalance/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/helpers/createEmojiText/index.tsx"),
				c = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				l = n("./src/reddit/components/CoinBalance/index.m.less"),
				d = n.n(l);
			t.a = e => o.a.createElement("div", {
				className: Object(s.a)(d.a.coinBalance, e.className),
				"data-redditstyle": !0
			}, Object(i.a)(r.fbt._("Coin balance:: {Coin icon placeholder}{coinBalance}", [r.fbt._param("Coin icon placeholder", ":coin:"), r.fbt._param("coinBalance", e.coinBalance.toLocaleString())], {
				hk: "2x0upn"
			}), {
				":coin:": o.a.createElement(c.a, null)
			}), " ", o.a.createElement("a", {
				href: "/coins",
				onClick: e.onWhatAreCoinsLinkClick,
				target: "_blank"
			}, r.fbt._("What are Coins?", null, {
				hk: "3fC6PF"
			})))
		},
		"./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/config.ts"),
				i = n("./src/lib/loadRedditAdsPixel.ts"),
				c = n("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				l = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				u = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				m = n("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				h = n.n(m);
			class f extends o.a.PureComponent {
				componentDidMount() {
					const {
						gildThingId: e,
						sendEvent: t
					} = this.props;
					t(Object(p.j)(e)), Object(i.b)()
				}
				render() {
					const e = this.props,
						t = e.isGild && r.fbt._("The transaction is processing and we will let you know when it's done.", null, {
							hk: "JMSWS"
						});
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: h.a.paymentCompleteHeader,
						style: {
							backgroundImage: `url("${s.a.assetPath}/img/gold/coins-hero.jpg")`
						}
					}, o.a.createElement(u.a, {
						className: h.a.coinIcon
					}), o.a.createElement("div", {
						className: h.a.paymentCompleteTitleMain
					}, e.isGild ? r.fbt._("Thanks for purchasing an Award, {username}", [r.fbt._param("username", e.userName)], {
						hk: "1VcYkx"
					}) : r.fbt._("Thanks for purchasing Coins, {username}", [r.fbt._param("username", e.userName)], {
						hk: "3m40W1"
					})), o.a.createElement("div", {
						className: h.a.paymentCompleteTitleDescription
					}, t), o.a.createElement("button", {
						className: h.a.closeButton,
						onClick: e.onCloseClick
					}, o.a.createElement(l.b, {
						className: h.a.closeIcon,
						"data-redditstyle": !0
					}))), o.a.createElement(c.a, {
						onCloseClick: e.onCloseClick
					}))
				}
			}
			t.a = Object(d.c)(f)
		},
		"./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-stripe-elements/es/index.js"),
				i = n("./src/config.ts"),
				c = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				d = n("./src/reddit/components/StripePaymentForm/index.tsx"),
				p = n("./src/reddit/helpers/createEmojiText/index.tsx"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/reddit/components/CoinBalance/index.tsx"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				y = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				g = n("./node_modules/react-dom/index.js"),
				b = n.n(g),
				C = n("./node_modules/react-redux/es/index.js"),
				_ = n("./node_modules/reselect/es/index.js"),
				v = n("./src/higherOrderComponents/makeAsync.tsx"),
				E = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				P = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				x = n("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				j = n("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts");
			const w = Object(_.c)({
				isGild: e => !!Object(P.r)(e)
			});
			class k extends o.a.Component {
				constructor() {
					super(...arguments), this.onPayment = () => this.props.createPayment(), this.onAuthorize = e => {
						const {
							orderID: t
						} = e, {
							isGild: n
						} = this.props;
						return this.props.executePayment(n, t)
					}
				}
				render() {
					const {
						className: e
					} = this.props, t = paypalCheckout.Button.driver("react", {
						React: o.a,
						ReactDOM: b.a
					}), n = {
						sandbox: i.a.paypal.apiKey,
						production: i.a.paypal.apiKey
					};
					return o.a.createElement("div", {
						className: e
					}, o.a.createElement(t, {
						env: i.a.paypal.env,
						client: n,
						style: {
							size: "responsive",
							color: "blue",
							shape: "pill",
							label: "paypal",
							tagline: !1
						},
						payment: this.onPayment,
						commit: !0,
						onAuthorize: this.onAuthorize
					}))
				}
			}
			const O = Object(C.b)(w, (e, t) => ({
				createPayment: () => "coinPackage" in t ? e(Object(x.f)(t.coinPackage)) : "awardId" in t ? e(Object(j.d)(t.awardId, t.pennies, t.thingId)) : void 0,
				executePayment: (n, r) => {
					if ("coinPackage" in t) {
						if (n) return void e(Object(x.h)(r, t.coinPackage));
						e(Object(x.g)(r, t.coinPackage))
					} else "awardId" in t && e(Object(j.c)(r))
				}
			}))(k);
			var S = Object(v.a)({
					getComponent: () => Object(E.c)().then(() => O),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				N = n("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				T = n.n(N);
			const {
				fbt: R
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class I extends o.a.Component {
				constructor() {
					super(...arguments), this.onCompletePurchaseClick = () => {
						const {
							gildThingId: e,
							onCompletePurchaseClick: t,
							purchasePackage: n,
							sendEvent: r,
							stripe: a
						} = this.props;
						a && (r(Object(y.c)(e)), t(a, n))
					}
				}
				render() {
					const {
						award: e,
						coinBalance: t,
						gildThingId: n,
						purchasePackage: r,
						savedCardsPending: a,
						selectedPayment: s,
						stripeTokenPending: i
					} = this.props;
					return o.a.createElement("div", {
						className: T.a.purchaseSelectPaymentFooter
					}, o.a.createElement(m.a, {
						className: T.a.balance,
						coinBalance: t
					}), s === c.zb ? e && e.pennyPrice && n ? o.a.createElement(S, {
						awardId: e.id,
						className: Object(u.a)(T.a.purchaseButton, T.a.paypalCheckoutButton),
						pennies: e.pennyPrice,
						thingId: n
					}) : r && o.a.createElement(S, {
						className: Object(u.a)(T.a.purchaseButton, T.a.paypalCheckoutButton),
						coinPackage: r
					}) : null, s === c.yb && o.a.createElement(f.i, {
						className: T.a.purchaseButton,
						"data-redditstyle": !0,
						disabled: i || a,
						onClick: this.onCompletePurchaseClick
					}, R._("Complete purchase", null, {
						hk: "3d1QJR"
					})))
				}
			}
			var M = Object(s.injectStripe)(Object(h.c)(I)),
				B = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				q = n("./src/reddit/icons/fonts/Coin/index.tsx");
			const {
				fbt: A
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var F = e => o.a.createElement("div", {
				className: T.a.purchaseHeader,
				style: {
					backgroundImage: `url("${i.a.assetPath}/img/gold/coins-hero.jpg")`
				}
			}, o.a.createElement(q.a, {
				className: T.a.coinIcon
			}), o.a.createElement("div", {
				className: T.a.titleMain
			}, A._("Buy {amount} Coins!", [A._param("amount", e.purchasePackage.coins.toLocaleString())], {
				hk: "3E2DWq"
			})), o.a.createElement("div", {
				className: T.a.titleDescription
			}, A._("You're purchasing Coins for yourself, {userName}!", [A._param("userName", e.userName)], {
				hk: "ZGCBt"
			})), o.a.createElement("img", {
				className: T.a.goldPackage,
				src: e.purchasePackage.images.purchaseSuccess["3x"].url
			}), o.a.createElement("button", {
				className: T.a.closeButton,
				onClick: e.onCloseClick
			}, o.a.createElement(B.b, {
				className: T.a.closeIcon,
				"data-redditstyle": !0
			})));
			var L = e => {
				const t = [];
				if (e.purchasePackage && t.push(r.fbt._("{coinCount} Coins will automatically be spent on this {awardName} Award.", [r.fbt._param("coinCount", e.award.coinPrice.toLocaleString()), r.fbt._param("awardName", e.award.name)], {
						hk: "1JRQG2"
					})), e.award.pennyDonate && t.push(r.fbt._("${dollarsDonate} will be donated.", [r.fbt._param("dollarsDonate", (e.award.pennyDonate / 100).toLocaleString())], {
						hk: "QgGWi"
					})), e.award.giverCoinReward) {
					t.push(r.fbt._("As a thank you, you will receive {giverCoinReward} Coins.", [r.fbt._param("giverCoinReward", e.award.giverCoinReward.toLocaleString())], {
						hk: "1TsLW1"
					}));
					const n = e.coinBalance + (e.purchasePackage ? e.purchasePackage.coins : 0) + e.award.giverCoinReward - (e.award.pennyPrice ? 0 : e.award.coinPrice);
					n > 0 && n !== e.coinBalance && r.fbt._("You’ll have {remainingCoins} Coins remaining.", [r.fbt._param("remainingCoins", n.toLocaleString())], {
						hk: "4rGJC0"
					})
				}
				return o.a.createElement("div", {
					className: T.a.purchaseGildHeader
				}, o.a.createElement("div", {
					className: T.a.awardTitle
				}, r.fbt._("Give the {awardName} Award", [r.fbt._param("awardName", e.award.name)], {
					hk: "28iR3j"
				})), o.a.createElement("div", {
					className: T.a.awardTitleDescription
				}, t.join(" ")), o.a.createElement("img", {
					className: T.a.awardIcon,
					src: e.award.icon.url
				}), o.a.createElement("button", {
					className: T.a.closeButton,
					onClick: e.onCloseClick
				}, o.a.createElement(B.b, {
					className: Object(u.a)(T.a.closeIcon, T.a.awardPurchase),
					"data-redditstyle": !0
				})))
			};
			t.a = e => o.a.createElement(s.StripeProvider, {
				apiKey: i.a.stripe.apiKey
			}, o.a.createElement(s.Elements, null, o.a.createElement(o.a.Fragment, null, e.gildThingId ? o.a.createElement(L, {
				coinBalance: e.coinBalance,
				award: e.selectedAward,
				purchasePackage: e.purchasePackage,
				userName: e.userName,
				onCloseClick: e.onCloseModal
			}) : e.purchasePackage && o.a.createElement(F, {
				coinBalance: e.coinBalance,
				purchasePackage: e.purchasePackage,
				userName: e.userName,
				onCloseClick: e.onCloseModal
			}), o.a.createElement("div", {
				className: T.a.purchaseBody
			}, o.a.createElement(l.a, {
				className: T.a.selectPayment,
				gildThingId: e.gildThingId,
				nightmode: e.nightmode,
				selectedPayment: e.selectedPayment,
				onPaymentSelected: e.onPaymentSelected
			}), e.selectedPayment === c.yb && o.a.createElement(d.a, {
				nightmode: e.nightmode
			}), o.a.createElement("div", {
				className: T.a.checkoutFooter
			}, o.a.createElement("div", {
				className: T.a.purchaseTotal
			}, r.fbt._("Total: {totalAmount}", [r.fbt._param("totalAmount", "$" + ((e.purchasePackage ? e.purchasePackage.pennies : e.selectedAward.pennyPrice || 0) / 100).toLocaleString())], {
				hk: "3dx6W8"
			}))), e.selectedPayment === c.zb && e.paypalErrorMessage && o.a.createElement("div", {
				className: T.a.errorMessage
			}, e.paypalErrorMessage), e.selectedPayment === c.yb && e.stripeErrorMessage && o.a.createElement("div", {
				className: T.a.errorMessage
			}, e.stripeErrorMessage), o.a.createElement("div", {
				className: T.a.agreementLink
			}, e.purchasePackage && (e => {
				if (!e.gildThingId || !e.purchasePackage) return null;
				return e.coinBalance + e.purchasePackage.coins - e.selectedAward.coinPrice > 0 ? o.a.createElement(o.a.Fragment, null, r.fbt._("The minimum Coins purchase is {coins} Coins.", [r.fbt._param("coins", e.purchasePackage.coins.toLocaleString())], {
					hk: "3J52WH"
				}), o.a.createElement("br", null)) : null
			})(e), Object(p.a)(r.fbt._("By purchasing Coins and Awards, you agree to the :agreement:.", null, {
				hk: "1eCqza"
			}), {
				":agreement:": o.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, r.fbt._("Reddit User Agreement", null, {
					hk: "11z9fY"
				}))
			}))), o.a.createElement(M, {
				award: e.selectedAward,
				coinBalance: e.coinBalance,
				gildThingId: e.gildThingId,
				onCompletePurchaseClick: e.onCompletePurchaseClick,
				purchasePackage: e.purchasePackage,
				savedCardsPending: e.savedCardsPending,
				selectedPayment: e.selectedPayment,
				stripeTokenPending: e.stripeTokenPending
			}))))
		},
		"./src/reddit/components/CoinPurchaseModal/index.m.less": function(e, t, n) {
			e.exports = {
				coinPurchaseModal: "_3PdRn_CekW51ny0uOVaHCK",
				purchaseHeader: "g2a3Zv8q9QUPKkvmhD9dL",
				purchaseGildHeader: "QMHZeOFhvSdgNkN2CTp18",
				coinIcon: "_3alReP5WKjkboxwGTN8Lpb",
				titleMain: "_3jPcOJNUfeN7OdCWA1d5VZ",
				titleDescription: "_1Q6p4vuIwLOxdw0XbHUT8w",
				goldPackage: "_1Zs4anwKjSFfYdqzSlkAcM",
				awardTitle: "_1Xjj9WldJRB-1ed1DXvre4",
				awardTitleDescription: "_2vpRJS-JeaGdKGeNQ2Ol8V",
				awardIcon: "_2zDbtSCEwDNAL2vdRkM5a_",
				closeButton: "_19tq6XZNubN99tY6SeeVQS",
				closeIcon: "_39qPvGtn6v2srEyecX-Q4y",
				awardPurchase: "whOANGCvUvMZjOdtnV1bZ",
				purchaseBody: "_3EtBcIxrPxM_DvmbfXFyCX",
				loaderContainer: "_2uPzorlzh0nEEymC1BvQBX",
				selectPayment: "_1kvmUEmQHiHPMWKNupYHMc",
				checkoutFooter: "HJGClx25Yjtzsp_aYfn0t",
				purchaseTotal: "_1Wq99elhkrt-_gxygdKIRE",
				agreementLink: "_4bWCoUTra_tfj3pkGR8fX",
				purchaseSelectPaymentFooter: "PDhzgUep2V87LcZ5msw2j",
				balance: "_3Yby__H8ckQTVIBMfVRI9L",
				purchaseButton: "_1C6JQFckaXQ2JzWIgJKnwA",
				paypalCheckoutButton: "_1Kbe0XzWlb6SJwe3jCy1R3",
				paymentCompleteHeader: "_3Pz3ZE0Flyeud2EZ_rhxs",
				paymentCompleteTitleMain: "OTAmbKrqsrvoZxHWtSAXO",
				paymentCompleteTitleDescription: "_3vjo7IoOcQ9Hv1YmhvnodL",
				errorMessage: "_2ZSesrmixZQhOH6L7Yce5m"
			}
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
				a = n.n(r),
				o = n("./src/reddit/controls/Button/index.tsx"),
				s = n("./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less"),
				i = n.n(s);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => a.a.createElement("div", {
				className: i.a.purchaseFooter
			}, a.a.createElement(o.i, {
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
				isNightMode: "_1BbnbPaXpwTwmI3m0OOyzJ",
				paymentMethodIcon: "_3h70jT0m-MFJMB5LtPpDF5"
			}
		},
		"./src/reddit/components/PaymentMethodSelector/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/config.ts"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				l = n("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				d = n.n(l);
			const p = e => o.a.createElement("label", {
				className: Object(s.a)(e.className, d.a.paymentOption)
			}, o.a.createElement("input", {
				type: "radio",
				id: e.value,
				name: "payment-option",
				value: e.value,
				checked: e.selectedValue === e.value,
				onChange: e.onChange
			}), o.a.createElement("div", {
				className: Object(s.a)(d.a.paymentOptionContent, {
					[d.a.isNightMode]: e.nightmode
				})
			}, e.children));
			class u extends o.a.Component {
				constructor() {
					super(...arguments), this.onPaymentSelected = e => {
						const t = e.target.value,
							{
								gildThingId: n,
								onPaymentSelected: r,
								sendEvent: a
							} = this.props;
						switch (t) {
							case "creditCard":
								a(Object(c.e)(n));
								break;
							case "paypal":
								a(Object(c.f)(n))
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
					return o.a.createElement("form", {
						className: e
					}, o.a.createElement("fieldset", null, o.a.createElement(p, {
						nightmode: t,
						selectedValue: n,
						onChange: this.onPaymentSelected,
						value: "paypal"
					}, o.a.createElement("div", {
						className: d.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/paypal.png)`
						}
					})), o.a.createElement(p, {
						nightmode: t,
						selectedValue: n,
						onChange: this.onPaymentSelected,
						value: "creditCard"
					}, o.a.createElement("div", {
						className: d.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/visa.png)`
						}
					}), o.a.createElement("div", {
						className: d.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/mastercard.png)`
						}
					}), o.a.createElement("div", {
						className: d.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/amex.png)`
						}
					}), o.a.createElement("div", {
						className: d.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/discover.jpg)`
						}
					}))))
				}
			}
			t.a = Object(i.c)(u)
		},
		"./src/reddit/components/StripePaymentForm/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/StripePaymentForm/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./node_modules/fbt/lib/FbtPublic.js"),
				l = n("./src/config.ts"),
				d = n("./src/reddit/components/CheckoutForm/index.tsx"),
				p = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				u = n("./src/reddit/components/StripePaymentForm/index.m.less"),
				m = n.n(u);
			var h = e => {
					const {
						onToggleRememberCard: t,
						rememberCard: n
					} = e;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(d.a, {
						className: m.a.creditCard
					}), a.a.createElement(p.a, {
						className: m.a.saveCardCheckbox,
						isSelected: n,
						onClick: t,
						text: c.fbt._("Remember this card", null, {
							hk: "2arVov"
						})
					}), a.a.createElement("a", {
						href: "https://stripe.com",
						target: "_blank"
					}, a.a.createElement("img", {
						className: m.a.poweredByStripeIcon,
						src: `${l.a.assetPath}/img/payment-icons/powered-by-stripe.png`
					})))
				},
				f = n("./src/reddit/icons/svgs/Trash2/index.tsx");
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), g = e => 2 === e.length ? e : "0" + e, b = e => {
				switch (e.toLowerCase()) {
					case "visa":
						return `${l.a.assetPath}/img/payment-icons/visa.png`;
					case "mastercard":
						return `${l.a.assetPath}/img/payment-icons/mastercard.png`;
					case "discover":
						return `${l.a.assetPath}/img/payment-icons/discover.jpg`;
					case "american express":
						return `${l.a.assetPath}/img/payment-icons/amex.png`;
					default:
						return null
				}
			};
			class C extends a.a.PureComponent {
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
							savedCard: n
						} = this.props;
						t(n.cardId)
					}
				}
				render() {
					const {
						savedCard: e
					} = this.props, t = b(e.brand);
					return a.a.createElement("label", {
						className: m.a.savedCardContainer
					}, a.a.createElement("input", {
						type: "radio",
						name: "use-saved-card",
						checked: !0,
						readOnly: !0
					}), a.a.createElement("div", {
						className: Object(i.a)(m.a.cardImageContainer, {
							[m.a.cardImageContainerNightmode]: this.props.nightmode
						})
					}, t ? a.a.createElement("img", {
						className: m.a.brandImage,
						src: t
					}) : a.a.createElement("span", {
						className: m.a.unknownCC
					}, "CC")), a.a.createElement("div", {
						className: m.a.cardDetails
					}, a.a.createElement("span", null, y._("Card ending in {Credit Card last four digits}", [y._param("Credit Card last four digits", e.last4)], {
						hk: "3dMxMn"
					})), a.a.createElement("span", {
						className: m.a.expiry
					}, y._("Expires {month} / {year}", [y._param("month", g(e.expirationMonth.toString())), y._param("year", e.expirationYear.toString())], {
						hk: "3iXzVI"
					}))), this.state.showConfirmText ? a.a.createElement("button", {
						className: m.a.confirmText,
						onClick: this.onConfirmClick
					}, y._("Confirm", null, {
						hk: "gFhpD"
					})) : a.a.createElement("button", {
						onClick: this.onTrashCanClick
					}, a.a.createElement(f.b, {
						className: m.a.icon
					})))
				}
			}
			var _ = C,
				v = n("./src/reddit/actions/gold/productOfferPurchase.ts"),
				E = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				P = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const j = Object(s.c)({
					rememberCard: x.u,
					savedCard: e => Object(x.w)(e)[0],
					stripeInfoLoading: x.v
				}),
				w = Object(o.b)(j, (e, t) => ({
					onClickDeleteCard: n => t.shouldDeleteCardWithGql ? e(Object(v.c)(n)) : e(Object(E.deleteSavedCard)(n)),
					onToggleRememberCard: () => e(Object(E.toggleRememberCard)())
				}));
			class k extends a.a.PureComponent {
				render() {
					const {
						className: e,
						nightmode: t,
						onClickDeleteCard: n,
						onToggleRememberCard: r,
						rememberCard: o,
						savedCard: s,
						stripeInfoLoading: c
					} = this.props, l = c, d = !l && s, p = !l && !d, u = l ? m.a.loadingState : d ? m.a.savedCardState : m.a.formState;
					return a.a.createElement("div", {
						className: Object(i.a)(m.a.stripePaymentForm, u, e)
					}, l && a.a.createElement(P.a, {
						className: m.a.loader,
						sizePx: 60
					}), d && s && a.a.createElement("form", null, a.a.createElement(_, {
						nightmode: t,
						onDelete: n,
						savedCard: s
					})), p && a.a.createElement(h, {
						onToggleRememberCard: r,
						rememberCard: o
					}))
				}
			}
			t.a = w(k)
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);

			function o(e, t) {
				const n = e.toString().split(":");
				return n.length % 2 == 0 ? e : n.reduce((e, n, r) => (r % 2 == 0 ? e.push(n) : "" === n ? e.push(":") : `:${n}:` in t ? e.push(t[`:${n}:`]) : e.push(`:${n}:`), e), []).map((e, t) => a.a.createElement(a.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = n.n(s);
			const c = e => a.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), a.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CoinPurchaseModal~PennyPurchaseModal.7727bdb9ffd6ea1e10fe.js.map