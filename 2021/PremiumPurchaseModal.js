// https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.4431954450269516853b.js
// Retrieved at 4/29/2021, 10:50:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PremiumPurchaseModal", "GoldPurchasePaymentActions"], {
		"./node_modules/react-stripe-elements/es/components/Element.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = i(r("./node_modules/react/index.js")),
				a = i(r("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
				o = i(r("./node_modules/react-stripe-elements/es/utils/shallowEqual.js")),
				s = r("./node_modules/react-stripe-elements/es/components/Elements.js");

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function c(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}

			function d(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}

			function l(e, t) {
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
			var u = function() {},
				p = function(e) {
					e.id, e.className, e.onChange, e.onFocus, e.onBlur, e.onReady;
					return function(e, t) {
						var r = {};
						for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
						return r
					}(e, ["id", "className", "onChange", "onFocus", "onBlur", "onReady"])
				},
				m = function(e) {
					return e.charAt(0).toUpperCase() + e.slice(1)
				};
			t.default = function(e) {
				var t, r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return r = t = function(t) {
					function r(e, n) {
						c(this, r);
						var a = d(this, t.call(this, e, n));
						a.handleRef = function(e) {
							a._ref = e
						}, a._element = null;
						var o = p(a.props);
						return a._options = o, a
					}
					return l(r, t), r.prototype.componentDidMount = function() {
						var t = this;
						this.context.addElementsLoadListener((function(r) {
							var n = r.create(e, t._options);
							t._element = n, t._setupEventListeners(n), n.mount(t._ref), (i.impliedTokenType || i.impliedSourceType) && t.context.registerElement(n, i.impliedTokenType, i.impliedSourceType)
						}))
					}, r.prototype.componentWillReceiveProps = function(e) {
						var t = p(e);
						0 === Object.keys(t).length || (0, o.default)(t, this._options) || (this._options = t, this._element && this._element.update(t))
					}, r.prototype.componentWillUnmount = function() {
						if (this._element) {
							var e = this._element;
							e.destroy(), this.context.unregisterElement(e)
						}
					}, r.prototype._setupEventListeners = function(e) {
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
					}, r.prototype.render = function() {
						return n.default.createElement("div", {
							id: this.props.id,
							className: this.props.className,
							ref: this.handleRef
						})
					}, r
				}(n.default.Component), t.propTypes = {
					id: a.default.string,
					className: a.default.string,
					onChange: a.default.func,
					onBlur: a.default.func,
					onFocus: a.default.func,
					onReady: a.default.func
				}, t.defaultProps = {
					id: void 0,
					className: void 0,
					onChange: u,
					onBlur: u,
					onFocus: u,
					onReady: u
				}, t.contextTypes = s.elementContextTypes, t.displayName = m(e) + "Element", r
			}
		},
		"./node_modules/react-stripe-elements/es/components/Elements.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.elementContextTypes = t.injectContextTypes = void 0;
			var n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				},
				a = i(r("./node_modules/react/index.js")),
				o = i(r("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
				s = r("./node_modules/react-stripe-elements/es/components/Provider.js");

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function c(e) {
				if (Array.isArray(e)) {
					for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
					return r
				}
				return Array.from(e)
			}
			var d = t.injectContextTypes = {
					getRegisteredElements: o.default.func.isRequired
				},
				l = t.elementContextTypes = {
					addElementsLoadListener: o.default.func.isRequired,
					registerElement: o.default.func.isRequired,
					unregisterElement: o.default.func.isRequired
				},
				u = function(e) {
					function t(r, a) {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var o = function(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this, r, a));
						return o.handleRegisterElement = function(e, t, r) {
							o.setState((function(a) {
								return {
									registeredElements: [].concat(c(a.registeredElements), [n({
										element: e
									}, t ? {
										impliedTokenType: t
									} : {}, r ? {
										impliedSourceType: r
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
									var r = e.props,
										n = (r.children, function(e, t) {
											var r = {};
											for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
											return r
										}(r, ["children"]));
									"sync" === e.context.tag ? (e._elements = e.context.stripe.elements(n), t(e._elements)) : e.context.addStripeLoadListener((function(r) {
										e._elements ? t(e._elements) : (e._elements = r.elements(n), t(e._elements))
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
			u.childContextTypes = n({}, d, l), u.contextTypes = s.providerContextTypes, u.defaultProps = {
				children: null
			}, t.default = u
		},
		"./node_modules/react-stripe-elements/es/components/PaymentRequestButtonElement.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				},
				a = c(r("./node_modules/react/index.js")),
				o = c(r("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
				s = c(r("./node_modules/react-stripe-elements/es/utils/shallowEqual.js")),
				i = r("./node_modules/react-stripe-elements/es/components/Elements.js");

			function c(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var d = function() {},
				l = function(e) {
					e.id, e.className, e.onBlur, e.onClick, e.onFocus, e.onReady, e.paymentRequest;
					return function(e, t) {
						var r = {};
						for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
						return r
					}(e, ["id", "className", "onBlur", "onClick", "onFocus", "onReady", "paymentRequest"])
				},
				u = function(e) {
					function t(r, n) {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var a = function(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this, r, n));
						a.handleRef = function(e) {
							a._ref = e
						};
						var o = l(r);
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
							e._element = t.create("paymentRequestButton", n({
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
						var t = l(e);
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
			u.propTypes = {
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
			}, u.defaultProps = {
				id: void 0,
				className: void 0,
				onBlur: d,
				onClick: d,
				onFocus: d,
				onReady: d
			}, u.contextTypes = i.elementContextTypes, t.default = u
		},
		"./node_modules/react-stripe-elements/es/components/Provider.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.providerContextTypes = void 0;
			var n = o(r("./node_modules/react/index.js")),
				a = o(r("./node_modules/react-stripe-elements/node_modules/prop-types/index.js"));

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
					var r = "key=" + e + " options=" + JSON.stringify(t),
						n = window.Stripe.__cachedInstances[r] || window.Stripe(e, t);
					return window.Stripe.__cachedInstances[r] = n, n
				},
				c = function(e) {
					if (e && e.elements && e.createSource && e.createToken) return e;
					throw new Error("Please pass a valid Stripe object to StripeProvider. You can obtain a Stripe object by calling 'Stripe(...)' with your publishable key.")
				},
				d = function(e) {
					function t(r) {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var n = function(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this, r));
						if (n.props.apiKey && n.props.stripe) throw new Error("Please pass either 'apiKey' or 'stripe' to StripeProvider, not both.");
						if (n.props.apiKey) {
							if (!window.Stripe) throw new Error("Please load Stripe.js (https://js.stripe.com/v3/) on this page to use react-stripe-elements. If Stripe.js isn't available yet (it's loading asynchronously, or you're using server-side rendering), see https://github.com/stripe/react-stripe-elements#advanced-integrations");
							var a = n.props,
								o = a.apiKey,
								s = (a.children, a.stripe, function(e, t) {
									var r = {};
									for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
									return r
								}(a, ["apiKey", "children", "stripe"]));
							n._meta = {
								tag: "sync",
								stripe: i(o, s)
							}
						} else if (n.props.stripe) n._meta = {
							tag: "sync",
							stripe: c(n.props.stripe)
						};
						else {
							if (null !== n.props.stripe) throw new Error("Please pass either 'apiKey' or 'stripe' to StripeProvider. If you're using 'stripe' but don't have a Stripe instance yet, pass 'null' explicitly.");
							n._meta = {
								tag: "async",
								stripe: null
							}
						}
						return n._didWarn = !1, n._didWakeUpListeners = !1, n._listeners = [], n
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
							r = this.props.stripe && e.stripe && this.props.stripe !== e.stripe;
						if (!this._didWarn && (t || r) && window.console && window.console.error) return this._didWarn = !0, void console.error("StripeProvider does not support changing the apiKey parameter.");
						if (!this._didWakeUpListeners && e.stripe) {
							this._didWakeUpListeners = !0;
							var n = c(e.stripe);
							this._meta.stripe = n, this._listeners.forEach((function(e) {
								e(n)
							}))
						}
					}, t.prototype.render = function() {
						return n.default.Children.only(this.props.children)
					}, t
				}(n.default.Component);
			d.propTypes = {
				apiKey: a.default.string,
				stripe: a.default.object,
				children: a.default.node
			}, d.childContextTypes = s, d.defaultProps = {
				apiKey: void 0,
				stripe: void 0,
				children: null
			}, t.default = d
		},
		"./node_modules/react-stripe-elements/es/components/inject.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				},
				o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				s = r("./node_modules/react/index.js"),
				i = (n = s) && n.__esModule ? n : {
					default: n
				},
				c = r("./node_modules/react-stripe-elements/es/components/Elements.js"),
				d = r("./node_modules/react-stripe-elements/es/components/Provider.js");

			function l(e, t) {
				var r = {};
				for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
				return r
			}

			function u(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}

			function p(e, t) {
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
				var t, r, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					s = n.withRef,
					f = void 0 !== s && s;
				return r = t = function(t) {
					function r(e, n) {
						if (u(this, r), !n || !n.getRegisteredElements) throw new Error("It looks like you are trying to inject Stripe context outside of an Elements context.\nPlease be sure the component that calls createSource or createToken is within an <Elements> component.");
						var a = p(this, t.call(this, e, n));
						return a.findElement = function(e, t) {
							var r = a.context.getRegisteredElements().filter((function(t) {
									return t[e]
								})),
								n = "auto" === t ? r : r.filter((function(r) {
									return r[e] === t
								}));
							if (1 === n.length) return n[0].element;
							if (n.length > 1) throw new Error("You did not specify the type of Source or Token to create.\n        We could not infer which Element you want to use for this operation.");
							return null
						}, a.requireElement = function(e, t) {
							var r = a.findElement(e, t);
							if (r) return r;
							throw new Error("You did not specify the type of Source or Token to create.\n        We could not infer which Element you want to use for this operation.")
						}, a.wrappedCreateToken = function(e) {
							return function() {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
								if (t && "object" === (void 0 === t ? "undefined" : o(t))) {
									var n = t,
										s = n.type,
										i = l(n, ["type"]),
										c = "string" == typeof s ? s : "auto",
										d = a.requireElement("impliedTokenType", c);
									return e.createToken(d, i)
								}
								if ("string" == typeof t) {
									var u = t;
									return e.createToken(u, r)
								}
								throw new Error("Invalid options passed to createToken. Expected an object, got " + (void 0 === t ? "undefined" : o(t)) + ".")
							}
						}, a.wrappedCreateSource = function(e) {
							return function() {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
								if (t && "object" === (void 0 === t ? "undefined" : o(t))) {
									if ("string" != typeof t.type) throw new Error("Invalid Source type passed to createSource. Expected string, got " + o(t.type) + ".");
									var r = a.findElement("impliedSourceType", t.type);
									return r ? e.createSource(r, t) : e.createSource(t)
								}
								throw new Error("Invalid options passed to createSource. Expected an object, got " + (void 0 === t ? "undefined" : o(t)) + ".")
							}
						}, "sync" === a.context.tag ? a.state = {
							stripe: a.stripeProps(a.context.stripe)
						} : a.state = {
							stripe: null
						}, a
					}
					return m(r, t), r.prototype.componentDidMount = function() {
						var e = this;
						"async" === this.context.tag && this.context.addStripeLoadListener((function(t) {
							e.setState({
								stripe: e.stripeProps(t)
							})
						}))
					}, r.prototype.getWrappedInstance = function() {
						if (!f) throw new Error("To access the wrapped instance, the `{withRef: true}` option must be set when calling `injectStripe()`");
						return this.wrappedInstance
					}, r.prototype.stripeProps = function(e) {
						return a({}, e, {
							createToken: this.wrappedCreateToken(e),
							createSource: this.wrappedCreateSource(e)
						})
					}, r.prototype.render = function() {
						var t = this;
						return i.default.createElement(e, a({}, this.props, {
							stripe: this.state.stripe,
							ref: f ? function(e) {
								t.wrappedInstance = e
							} : null
						}))
					}, r
				}(i.default.Component), t.contextTypes = a({}, d.providerContextTypes, c.injectContextTypes), t.displayName = "InjectStripe(" + (e.displayName || e.name || "Component") + ")", r
			}
		},
		"./node_modules/react-stripe-elements/es/index.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.IdealBankElement = t.IbanElement = t.PaymentRequestButtonElement = t.PostalCodeElement = t.CardCVCElement = t.CardExpiryElement = t.CardNumberElement = t.CardElement = t.Elements = t.injectStripe = t.StripeProvider = void 0;
			var n = c(r("./node_modules/react-stripe-elements/es/components/Provider.js")),
				a = c(r("./node_modules/react-stripe-elements/es/components/inject.js")),
				o = c(r("./node_modules/react-stripe-elements/es/components/Elements.js")),
				s = c(r("./node_modules/react-stripe-elements/es/components/Element.js")),
				i = c(r("./node_modules/react-stripe-elements/es/components/PaymentRequestButtonElement.js"));

			function c(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var d = (0, s.default)("card", {
					impliedTokenType: "card",
					impliedSourceType: "card"
				}),
				l = (0, s.default)("cardNumber", {
					impliedTokenType: "card",
					impliedSourceType: "card"
				}),
				u = (0, s.default)("cardExpiry"),
				p = (0, s.default)("cardCvc"),
				m = (0, s.default)("postalCode"),
				f = (0, s.default)("iban", {
					impliedTokenType: "bank_account",
					impliedSourceType: "sepa_debit"
				}),
				h = (0, s.default)("idealBank", {
					impliedSourceType: "ideal"
				});
			t.StripeProvider = n.default, t.injectStripe = a.default, t.Elements = o.default, t.CardElement = d, t.CardNumberElement = l, t.CardExpiryElement = u, t.CardCVCElement = p, t.PostalCodeElement = m, t.PaymentRequestButtonElement = i.default, t.IbanElement = f, t.IdealBankElement = h
		},
		"./node_modules/react-stripe-elements/es/utils/shallowEqual.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			t.default = function(e, t) {
				var r = Object.keys(e),
					n = Object.keys(t);
				return r.length === n.length && r.every((function(r) {
					return t.hasOwnProperty(r) && t[r] === e[r]
				}))
			}
		},
		"./node_modules/react-stripe-elements/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-stripe-elements/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function a() {}

			function o() {}
			o.resetWarningCache = a, e.exports = function() {
				function e(e, t, r, a, o, s) {
					if (s !== n) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var r = {
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
				return r.PropTypes = r, r
			}
		},
		"./node_modules/react-stripe-elements/node_modules/prop-types/index.js": function(e, t, r) {
			e.exports = r("./node_modules/react-stripe-elements/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-stripe-elements/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, r) {
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
		"./src/lib/loadRedditAdsPixel.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./src/lib/sentry/index.ts");

			function a() {
				! function(e, t) {
					if (!e.rdt) {
						var r = e.rdt = function() {
							r.sendEvent ? r.sendEvent.apply(r, arguments) : r.callQueue.push(arguments)
						};
						r.callQueue = [];
						var n = t.createElement("script");
						n.src = "https://www.redditstatic.com/ads/pixel.js", n.async = !0;
						var a = t.getElementsByTagName("script")[0];
						a.parentNode.insertBefore(n, a)
					}
				}(window, document), rdt("init", "t2_2q2gwo2t"), rdt("track", "PageVisit")
			}
			const o = () => {
				try {
					rdt("track", "Purchase")
				} catch (e) {
					n.c.captureMessage('Attempted to fire RedditAds "Purchase" pixel, but global "rdt" object was unavailable')
				}
			}
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return F
			})), r.d(t, "i", (function() {
				return B
			})), r.d(t, "f", (function() {
				return L
			})), r.d(t, "e", (function() {
				return U
			})), r.d(t, "d", (function() {
				return D
			})), r.d(t, "c", (function() {
				return W
			})), r.d(t, "a", (function() {
				return Y
			})), r.d(t, "g", (function() {
				return Z
			})), r.d(t, "h", (function() {
				return $
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/omit.js"),
				o = r.n(a),
				s = r("./node_modules/uuid/v4.js"),
				i = r.n(s),
				c = r("./src/config.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/lib/addQueryParams/index.ts"),
				p = r("./src/lib/makeActionCreator/index.ts"),
				m = r("./src/lib/sentry/index.ts"),
				f = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/actions/gold/constants.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				b = r("./src/reddit/selectors/gold/productOffers.ts"),
				g = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				C = r("./src/reddit/selectors/user.ts"),
				v = r("./src/reddit/models/Gold/ProductOffer.ts"),
				P = r("./src/reddit/actions/gold/powerups.ts"),
				_ = r("./src/reddit/actions/modal.ts"),
				E = r("./node_modules/bignumber.js/bignumber.js"),
				j = r.n(E),
				O = r("./src/graphql/operations/CancelEconRecurringPayment.json"),
				x = r("./src/graphql/operations/ConfirmPaypalPayment.json"),
				w = r("./src/graphql/operations/CreateEconOrder.json"),
				k = r("./src/graphql/operations/CreatePaypalPayment.json"),
				S = r("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				N = r("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				T = r("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				I = r("./src/graphql/operations/DeleteSavedStripeCard.json"),
				M = r("./src/graphql/operations/UserSavedStripeCards.json"),
				R = r("./src/lib/makeGqlRequest/index.ts");
			const A = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				q = e => e.map(e => e.message).join(" : "),
				F = (e, t, r) => async (a, o, {
					gqlContext: s
				}) => {
					const c = i()(),
						d = await ((e, t, r, n, a) => {
							const {
								premium: o,
								...s
							} = a, i = (null == o ? void 0 : o.pricePackage) || r.pricePackages[0], c = new j.a(i.price).multipliedBy(n).toFixed();
							return Object(R.a)(e, {
								...w,
								variables: {
									input: {
										nonce: t,
										productId: r.id,
										productVersion: r.version,
										pricePackageId: i.id,
										currency: i.currency,
										price: c,
										productsCount: n.toString(),
										...s
									}
								}
							})
						})(s(), c, e, t, r);
					if (d.ok) {
						const e = d.body,
							{
								errors: t,
								order: r
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(q(t));
						if (r) return r.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, B = (e, t, r, a, o, s) => async (c, d, {
					gqlContext: l
				}) => {
					const u = d(),
						p = () => c(Object(y.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						f = o === v.c.Premium,
						h = o === v.c.Powerups,
						P = {};
					if (h && s) P.powerUps = {
						subredditId: s,
						isAnonymous: r
					};
					else if (f) {
						const e = Object(b.b)(u);
						P.premium = {
							pricePackage: e
						}
					}
					let _, E, j = "";
					try {
						j = await c(F(t, a, P))
					} catch (x) {
						return m.c.captureException(x), void(x.message && c(Object(y.stripeApiError)(x.message)))
					}
					c(Object(y.stripeTokenPending)());
					const O = Object(g.y)(u);
					if (O || (_ = await c(Object(y.validateAndCreateStripeToken)(e)), E = Object(g.v)(u), _)) try {
						const e = i()(),
							t = O || E ? _ && E ? ((e, t, r, n) => Object(R.a)(e, {
								...S,
								variables: {
									nonce: t,
									orderId: r,
									token: n
								}
							}))(l(), e, j, _.id) : O ? ((e, t, r, n) => Object(R.a)(e, {
								...T,
								variables: {
									nonce: t,
									orderId: r,
									cardId: n
								}
							}))(l(), e, j, O) : null : ((e, t, r, n) => Object(R.a)(e, {
								...N,
								variables: {
									nonce: t,
									orderId: r,
									token: n
								}
							}))(l(), e, j, _.id),
							n = await t;
						if (!n || !n.ok) return void p(); {
							const e = n.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return void c(Object(y.stripeApiError)(q(e.errors)));
							if (e.ok && "PAID" !== e.payment.status) return void p();
							const t = Object(C.i)(d());
							t && (h && s ? c(Z({
								subredditId: s,
								powerupsCount: a,
								user: t,
								isAnonymous: r
							})) : f && c(Q({
								user: t
							})))
						}
					} catch (x) {
						m.c.captureException(x), p()
					}
				}, L = (e, t, r, n) => async (a, o, {
					gqlContext: s
				}) => {
					let d = "";
					try {
						d = await a(F(e, n, {
							powerUps: {
								subredditId: t,
								isAnonymous: r
							}
						}))
					} catch (p) {
						return m.c.captureException(p), p.message && a(Object(y.paypalApiError)(p.message)), null
					}
					const l = c.a.redditUrl;
					try {
						const e = Object(u.a)(`${l}/framedModal/paypal-finish`, {
								_o: l,
								r: t,
								o: d,
								s: !0
							}),
							c = Object(u.a)(`${l}/framedModal/paypal-finish`, {
								_o: l,
								r: t,
								o: d
							}),
							p = i()(),
							m = await ((e, t, r, n, a) => Object(R.a)(e, {
								...k,
								variables: {
									nonce: t,
									orderId: r,
									successUrl: n,
									cancelUrl: a
								}
							}))(s(), p, d, e, c);
						if (m && m.ok) {
							const e = m.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return a(Object(y.paypalApiError)(q(e.errors))), null;
							const s = Object(C.i)(o());
							if (e.ok) {
								const {
									status: o
								} = e.payment;
								if ("ACTION_REQUIRED" === o) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === o && s) return t && a(Z({
									subredditId: t,
									powerupsCount: n,
									user: s,
									isAnonymous: r
								})), null
							}
						}
					} catch (p) {
						m.c.captureException(p)
					}
					return a(Object(y.paypalApiError)(A())), null
				}, U = (e, t) => async (r, n, {
					gqlContext: a
				}) => {
					try {
						const n = i()(),
							o = await ((e, t, r, n) => Object(R.a)(e, {
								...x,
								variables: {
									nonce: t,
									paymentId: r,
									token: n
								}
							}))(a(), n, e, t);
						if (o && o.ok) {
							const e = o.body.data.confirmEconPayment;
							if (e && e.errors && e.errors.length) return r(Object(y.paypalApiError)(q(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (o) {
						m.c.captureException(o)
					}
					return r(Object(y.paypalApiError)(A())), !1
				}, D = () => async (e, t, {
					gqlContext: r
				}) => {
					e(Object(y.savedCardsPending)());
					try {
						const t = await (e => Object(R.a)(e, {
							...M,
							variables: {}
						}))(r());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(y.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: n
							} = r.data.identity, a = n.map(e => o()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(y.savedCardsSuccess)(a)), a[0] && e(Object(y.selectSavedCard)(a[0].cardId))
						} else e(Object(y.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (a) {
						m.c.captureException(a), e(Object(y.savedCardsSuccess)([]))
					}
				}, W = e => async (t, r, {
					gqlContext: n
				}) => {
					t(Object(y._deleteSavedCard)(e));
					try {
						const t = await ((e, t) => Object(R.a)(e, {
							...I,
							variables: {
								cardId: t
							}
						}))(n(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: a
							} = r.data.deleteEconPaymentMethod;
						if (a && a.length) throw new Error(q(a))
					} catch (a) {
						m.c.captureException(a)
					}
				}, V = Object(p.a)(h.N), G = Object(p.a)(h.O), H = Object(p.a)(h.P), K = e => async (t, r) => {
					await t(V(e)), t(Object(l.f)({
						kind: f.b.Error,
						duration: l.a,
						text: e
					}))
				}, Y = (e, t, r) => async (a, o, {
					gqlContext: s
				}) => {
					a(G({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const o = await ((e, t) => Object(R.a)(e, {
							...O,
							variables: {
								orderId: t
							}
						}))(s(), e);
						if (o.ok) {
							const e = o.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void a(K(n[0].message));
							a(H({
								subredditId: t,
								allocatedAt: r
							}))
						} else a(K(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						m.c.captureException(i), a(K(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, J = Object(p.a)(h.R), Z = e => async (t, r) => {
					t(J(e)), t(Object(P.g)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(_.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(_.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, Q = Object(p.a)(h.V), $ = Object(p.a)(h.Z)
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return d
			})), r.d(t, "paymentCompleted", (function() {
				return l
			})), r.d(t, "cardNameInput", (function() {
				return u
			})), r.d(t, "cardNameEmpty", (function() {
				return p
			})), r.d(t, "cardElementChange", (function() {
				return m
			})), r.d(t, "stripeTokenPending", (function() {
				return f
			})), r.d(t, "stripeTokenError", (function() {
				return h
			})), r.d(t, "stripeApiError", (function() {
				return y
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return b
			})), r.d(t, "paypalApiError", (function() {
				return g
			})), r.d(t, "toggleRememberCard", (function() {
				return C
			})), r.d(t, "selectSavedCard", (function() {
				return v
			})), r.d(t, "_deleteSavedCard", (function() {
				return P
			})), r.d(t, "deleteSavedCard", (function() {
				return _
			})), r.d(t, "savedCardsPending", (function() {
				return E
			})), r.d(t, "savedCardsSuccess", (function() {
				return j
			})), r.d(t, "loadSavedCards", (function() {
				return O
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/sentry/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/endpoints/gold/purchase.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(o.a)(i.A),
				l = Object(o.a)(i.w),
				u = Object(o.a)(i.b),
				p = Object(o.a)(i.a),
				m = Object(o.a)(i.D),
				f = Object(o.a)(i.F),
				h = Object(o.a)(i.E),
				y = Object(o.a)(i.C),
				b = e => async (t, r) => {
					const a = r(),
						o = Object(c.h)(a),
						{
							token: s,
							error: i
						} = await e.createToken({
							name: o
						});
					if (o.trim()) {
						if (!i && s) return s;
						t(h(i || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, g = Object(o.a)(i.x), C = Object(o.a)(i.G), v = Object(o.a)(i.B), P = Object(o.a)(i.g), _ = e => async (t, r, {
					apiContext: n
				}) => {
					t(P(e));
					try {
						const t = await Object(s.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						a.c.captureException(o)
					}
				}, E = Object(o.a)(i.y), j = Object(o.a)(i.z), O = () => async (e, t, {
					apiContext: r
				}) => {
					e(E());
					try {
						const t = await Object(s.b)(r());
						if (t.error) throw new Error(t.error.type);
						const n = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(j(n)), n[0] && e(v(n[0].cardId))
					} catch (n) {
						a.c.captureException(n), e(j([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "openPremiumPurchaseModal", (function() {
				return h
			})), r.d(t, "closePremiumPurchaseModal", (function() {
				return y
			})), r.d(t, "stripePremiumPurchaseRequested", (function() {
				return b
			})), r.d(t, "paymentBlobCreated", (function() {
				return g
			})), r.d(t, "openWithBlob", (function() {
				return C
			}));
			var n = r("./src/config.ts"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				i = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/formatApiError/index.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				u = r("./src/reddit/endpoints/gold/purchase.ts"),
				p = r("./src/reddit/helpers/correlationIdTracker.ts"),
				m = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				f = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const h = Object(o.a)(f.t),
				y = Object(o.a)(f.e),
				b = e => async (t, r, {
					apiContext: n
				}) => {
					const o = Object(m.a)(r()),
						s = (null == o ? void 0 : o.pennies) || i.sb,
						l = Object(p.c)(p.a.GoldPayment);
					t(Object(d.stripeTokenPending)());
					const f = await t(Object(d.validateAndCreateStripeToken)(e));
					if (f) try {
						const e = await Object(u.g)({
							context: n(),
							correlationId: l,
							pennies: s,
							token: f
						});
						if (e.error) {
							const r = Object(c.a)(e.error);
							t(Object(d.stripeApiError)(r))
						} else t(Object(d.paymentCompleted)({
							confirmed: !1
						}))
					} catch (h) {
						const e = Object(c.a)(h);
						t(Object(d.stripeApiError)(e))
					} else {
						const e = a.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "4eGqpL"
						});
						t(Object(d.stripeApiError)(e))
					}
				}, g = Object(o.a)(f.v), C = ({
					packageId: e,
					correlationId: t
				}) => async (r, a, {
					apiContext: o
				}) => {
					r(h({
						packageId: e,
						correlationId: t
					}));
					const i = Object(m.a)(a()),
						u = (null == i ? void 0 : i.paypalButtonId) || n.a.paypal.buttons.premium;
					if (u) try {
						const e = await Object(l.f)({
							buttonId: u,
							context: o(),
							correlationId: t
						});
						if (e.error) {
							const t = Object(c.a)(e.error);
							r(Object(d.paypalApiError)(t))
						} else r(g(e))
					} catch (p) {
						const e = Object(c.a)(p);
						r(Object(d.paypalApiError)(e))
					} else s.c.captureMessage("No Premium packages available on Premium purchase modal")
				}
		},
		"./src/reddit/components/CheckoutForm/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/CheckoutForm/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				s = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./node_modules/react-stripe-elements/es/index.js"),
				l = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				p = r("./src/reddit/components/CheckoutForm/index.m.less"),
				m = r.n(p);
			const f = Object(i.c)({
					cardCvcValidation: u.f,
					cardExpiryValidation: u.g,
					cardName: u.h,
					cardNumberValidation: u.i,
					nameOnCardValidation: u.k,
					postalCodeValidation: u.l
				}),
				h = Object(s.b)(f, (e, t) => ({
					onCardElementChange: t => e(Object(l.cardElementChange)(t)),
					onNameInput: t => e(Object(l.cardNameInput)({
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
						cardExpiryValidation: r,
						cardName: a,
						cardNumberValidation: s,
						onCardElementChange: i,
						nameOnCardValidation: l,
						postalCodeValidation: u
					} = this.props, {
						cardNumberReady: p,
						cardExpiryReady: f,
						cardCVCReady: h,
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
					return o.a.createElement("div", {
						className: Object(c.a)(m.a.checkoutForm, e)
					}, o.a.createElement("div", {
						className: m.a.formCellWide
					}, o.a.createElement("input", {
						className: Object(c.a)(m.a.cardInput, m.a.nameOnCard, {
							[m.a.cardInputError]: !!l
						}),
						type: "text",
						placeholder: n.fbt._("NAME ON CARD", null, {
							hk: "IgrlQ"
						}).toString(),
						onChange: this.onChange,
						value: a
					})), o.a.createElement("div", {
						className: m.a.formCell
					}, o.a.createElement(d.CardNumberElement, {
						className: Object(c.a)(m.a.cardInput, {
							[m.a.cardInputError]: !!s
						}),
						onChange: i,
						onReady: this.onCardNumberReady,
						placeholder: n.fbt._("CARD NUMBER", null, {
							hk: "3pqMxG"
						}).toString(),
						style: b
					}), !p && o.a.createElement("div", {
						className: m.a.elementPlaceholder
					}, n.fbt._("CARD NUMBER", null, {
						hk: "3pqMxG"
					}))), o.a.createElement("div", {
						className: m.a.formCell
					}, o.a.createElement(d.CardExpiryElement, {
						className: Object(c.a)(m.a.cardInput, {
							[m.a.cardInputError]: !!r
						}),
						onChange: i,
						onReady: this.onCardExpiryReady,
						placeholder: n.fbt._("MM/YY", null, {
							hk: "Hou17"
						}).toString(),
						style: b
					}), !f && o.a.createElement("div", {
						className: m.a.elementPlaceholder
					}, n.fbt._("MM/YY", null, {
						hk: "Hou17"
					}))), o.a.createElement("div", {
						className: m.a.formCell
					}, o.a.createElement(d.CardCVCElement, {
						className: Object(c.a)(m.a.cardInput, {
							[m.a.cardInputError]: !!t
						}),
						onChange: i,
						onReady: this.onCardCVCReady,
						placeholder: n.fbt._("CCV", null, {
							hk: "dZzZJ"
						}).toString(),
						style: b
					}), !h && o.a.createElement("div", {
						className: m.a.elementPlaceholder
					}, n.fbt._("CCV", null, {
						hk: "dZzZJ"
					}))), o.a.createElement("div", {
						className: m.a.formCell
					}, o.a.createElement(d.PostalCodeElement, {
						className: Object(c.a)(m.a.cardInput, {
							[m.a.cardInputError]: !!u
						}),
						onChange: i,
						onReady: this.onPostalCodeReady,
						placeholder: n.fbt._("ZIP CODE", null, {
							hk: "2lJZ4j"
						}).toString(),
						style: b
					}), !y && o.a.createElement("div", {
						className: m.a.elementPlaceholder
					}, n.fbt._("ZIP CODE", null, {
						hk: "2lJZ4j"
					}))))
				}
			}
			t.a = Object(d.injectStripe)(h(y))
		},
		"./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less": function(e, t, r) {
			e.exports = {
				purchaseFooter: "_2siiafYfV9NgkupSIDgaht",
				purchaseButton: "_18yTyMH2TYOdGSb9UumZq-"
			}
		},
		"./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./src/reddit/controls/Button/index.tsx"),
				s = r("./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less"),
				i = r.n(s);
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js");
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
		"./src/reddit/components/PaymentMethodSelector/index.m.less": function(e, t, r) {
			e.exports = {
				paymentOption: "cc9iRBOTxZHHCpcEduRmM",
				paymentOptionContent: "_1EqrH-JzLp3XTA4g36WIrt",
				isNightMode: "_1BbnbPaXpwTwmI3m0OOyzJ",
				paymentMethodIcon: "_3h70jT0m-MFJMB5LtPpDF5"
			}
		},
		"./src/reddit/components/PaymentMethodSelector/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				s = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/components/TrackingHelper/index.tsx"),
				c = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				d = r("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				l = r.n(d);
			const u = e => o.a.createElement("label", {
				className: Object(s.a)(e.className, l.a.paymentOption)
			}, o.a.createElement("input", {
				type: "radio",
				id: e.value,
				name: "payment-option",
				value: e.value,
				checked: e.selectedValue === e.value,
				onChange: e.onChange
			}), o.a.createElement("div", {
				className: Object(s.a)(l.a.paymentOptionContent, {
					[l.a.isNightMode]: e.nightmode
				})
			}, e.children));
			class p extends o.a.Component {
				constructor() {
					super(...arguments), this.onPaymentSelected = e => {
						const t = e.target.value,
							{
								gildThingId: r,
								onPaymentSelected: n,
								sendEvent: a
							} = this.props;
						switch (t) {
							case "creditCard":
								a(Object(c.e)(r));
								break;
							case "paypal":
								a(Object(c.f)(r))
						}
						return n(t)
					}
				}
				render() {
					const {
						className: e,
						nightmode: t,
						selectedPayment: r
					} = this.props;
					return o.a.createElement("form", {
						className: e
					}, o.a.createElement("fieldset", null, o.a.createElement(u, {
						nightmode: t,
						selectedValue: r,
						onChange: this.onPaymentSelected,
						value: "paypal"
					}, o.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/paypal.png)`
						}
					})), o.a.createElement(u, {
						nightmode: t,
						selectedValue: r,
						onChange: this.onPaymentSelected,
						value: "creditCard"
					}, o.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/visa.png)`
						}
					}), o.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/mastercard.png)`
						}
					}), o.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/amex.png)`
						}
					}), o.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/discover.jpg)`
						}
					}))))
				}
			}
			t.a = Object(i.c)(p)
		},
		"./src/reddit/components/PremiumPurchaseModal/index.m.less": function(e, t, r) {
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
				errorMessage: "_1625HJ3ZMN4xwl3cV7g2E2",
				stripeForm: "Qe2dMlpz4gcQu7Pb44kZ"
			}
		},
		"./src/reddit/components/PremiumPurchaseModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/config.ts"),
				c = r("./src/higherOrderComponents/asModal/index.tsx"),
				d = r("./src/lib/classNames/index.ts"),
				l = r("./src/lib/constants/index.ts"),
				u = r("./src/reddit/models/Gold/Premium/index.ts"),
				p = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				m = r("./src/reddit/actions/goldPurchaseModals/premiumPurchaseModal.ts"),
				f = r("./src/reddit/components/TrackingHelper/index.tsx"),
				h = r("./src/reddit/constants/colors.ts"),
				y = r("./src/reddit/helpers/correlationIdTracker.ts"),
				b = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				g = r("./src/reddit/models/User/index.ts"),
				C = r("./src/reddit/selectors/experiments/econ/premiumMigration.ts"),
				v = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				P = r("./src/reddit/selectors/platform.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				E = r("./src/reddit/models/Gold/ProductOffer.ts"),
				j = r("./src/reddit/selectors/gold/productOffers.ts"),
				O = r("./node_modules/fbt/lib/FbtPublic.js"),
				x = r("./src/lib/loadRedditAdsPixel.ts"),
				w = r("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				k = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				S = r("./src/reddit/helpers/createEmojiText/index.tsx"),
				N = r("./src/reddit/icons/fonts/Premium/index.tsx"),
				T = r("./src/reddit/components/PremiumPurchaseModal/index.m.less"),
				I = r.n(T);
			class M extends a.a.PureComponent {
				componentDidMount() {
					const {
						sendEvent: e
					} = this.props;
					e(Object(b.j)()), Object(x.b)()
				}
				render() {
					const e = this.props;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: I.a.paymentCompleteHeader,
						style: {
							backgroundImage: `url("${i.a.assetPath}/img/gold/premium-hero-g.jpg")`
						}
					}, a.a.createElement(N.a, {
						className: I.a.premiumIcon,
						title: O.fbt._("Reddit Premium", null, {
							hk: "34acNx"
						})
					}), a.a.createElement("div", {
						className: I.a.paymentCompleteTitleMain
					}, O.fbt._("Thanks for purchasing Reddit Premium!", null, {
						hk: "27KGKp"
					})), a.a.createElement("div", {
						className: I.a.paymentCompleteTitleDescription
					}, a.a.createElement("div", {
						className: I.a.paymentCompleteTitleItem
					}, O.fbt._("You will receive a message in your inbox once your purchase is confirmed.", null, {
						hk: "27tvU4"
					})), a.a.createElement("div", {
						className: I.a.paymentCompleteTitleItem
					}, a.a.createElement("a", {
						href: "/settings/premium",
						target: "_blank"
					}, O.fbt._("Manage your ads-free experience.", null, {
						hk: "1RxPah"
					}))), a.a.createElement("div", {
						className: I.a.paymentCompleteTitleItemLast
					}, Object(S.a)(O.fbt._("Find more about {anchor text} on Reddit.", [O.fbt._param("anchor text", ":loungeLink:")], {
						hk: "2RGr1F"
					}), {
						":loungeLink:": a.a.createElement("a", {
							href: "/r/lounge",
							target: "_blank"
						}, "r/lounge")
					}))), a.a.createElement("button", {
						className: I.a.closeButton,
						onClick: e.onCloseClick
					}, a.a.createElement(k.b, {
						className: I.a.closeIcon,
						"data-redditstyle": !0
					}))), a.a.createElement(w.a, {
						onCloseClick: e.onCloseClick
					}))
				}
			}
			var R = Object(f.c)(M),
				A = r("./node_modules/react-stripe-elements/es/index.js"),
				q = r("./src/reddit/components/CheckoutForm/index.tsx"),
				F = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				B = r("./src/reddit/selectors/gold/powerups.ts"),
				L = r("./src/reddit/controls/Button/index.tsx");
			const {
				fbt: U
			} = r("./node_modules/fbt/lib/FbtPublic.js"), D = Object(s.c)({
				isAnonymous: B.d,
				savedCardsPending: v.w,
				stripeTokenPending: v.m
			}), W = Object(o.b)(D);
			var V = Object(A.injectStripe)(W(({
					className: e,
					isAnonymous: t,
					productOffer: r,
					savedCardsPending: n,
					stripe: s,
					stripeTokenPending: i,
					productOfferType: c
				}) => {
					const d = Object(o.d)(),
						l = i || n;
					return a.a.createElement(L.q, {
						onClick: () => {
							if (s && r) {
								const e = c === E.c.Premium ? 1 : 0;
								d(Object(F.i)(s, r, t, e, c))
							}
						},
						className: e,
						disabled: l || !s
					}, U._("Complete purchase", null, {
						hk: "KaR26"
					}))
				})),
				G = r("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				H = r("./src/reddit/components/StripePaymentForm/index.tsx");
			var K = e => {
				const {
					buttonId: t,
					className: r,
					customField: n,
					"data-redditstyle": o = !1,
					disabled: s,
					onSubmit: i,
					openInNewWindow: c,
					title: d
				} = e, l = s || !t;
				return a.a.createElement("form", {
					className: r,
					action: "https://www.paypal.com/cgi-bin/webscr",
					method: "post",
					target: c ? "_blank" : "_top",
					onSubmit: i
				}, a.a.createElement("input", {
					type: "hidden",
					name: "cmd",
					value: "_s-xclick"
				}), a.a.createElement("input", {
					type: "hidden",
					name: "hosted_button_id",
					value: t
				}), n && a.a.createElement("input", {
					type: "hidden",
					name: "custom",
					value: n
				}), a.a.createElement(L.i, {
					type: "submit",
					"data-redditstyle": o,
					disabled: l
				}, d))
			};
			class Y extends a.a.Component {
				constructor() {
					super(...arguments), this.onCompletePurchaseClick = () => {
						const {
							onCompletePurchaseClick: e,
							sendEvent: t,
							stripe: r
						} = this.props;
						r && (t(Object(b.c)()), e(r))
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
						selectedPayment: r,
						stripeTokenPending: n
					} = this.props;
					return a.a.createElement("div", {
						className: I.a.premiumPurchaseSelectPaymentFooter
					}, r === l.Bb && a.a.createElement(K, {
						buttonId: t,
						className: I.a.premiumPurchaseButton,
						customField: e,
						"data-redditstyle": !0,
						disabled: !e,
						onSubmit: this.onPaypalSubmit,
						title: O.fbt._("Continue to PayPal", null, {
							hk: "2TCl83"
						})
					}), r === l.Ab && a.a.createElement(L.i, {
						className: I.a.premiumPurchaseButton,
						"data-redditstyle": !0,
						disabled: n,
						onClick: this.onCompletePurchaseClick
					}, O.fbt._("Complete purchase", null, {
						hk: "15ZI2y"
					})))
				}
			}
			var J = Object(A.injectStripe)(Object(f.c)(Y));
			var Z = e => a.a.createElement("div", {
				className: I.a.premiumPurchaseHeader,
				style: {
					backgroundImage: `url("${i.a.assetPath}/img/gold/premium-hero-g.jpg")`
				}
			}, a.a.createElement(N.a, {
				className: I.a.premiumIcon,
				title: O.fbt._("Reddit Premium", null, {
					hk: "34acNx"
				})
			}), a.a.createElement("div", {
				className: I.a.titleMain
			}, O.fbt._("Buy Reddit Premium!", null, {
				hk: "3XxwQZ"
			})), a.a.createElement("div", {
				className: I.a.titleDescription
			}, O.fbt._("You're purchasing Reddit Premium for yourself, {username}!", [O.fbt._param("username", e.userName)], {
				hk: "bCrwe"
			})), a.a.createElement("button", {
				className: I.a.closeButton,
				onClick: e.onCloseClick
			}, a.a.createElement(k.b, {
				className: I.a.closeIcon,
				"data-redditstyle": !0
			})));
			var Q = e => {
				const t = (e.total / 100).toLocaleString(),
					r = e.isAnnualPremium ? O.fbt._("yearly", null, {
						hk: "10Ao7X"
					}) : O.fbt._("monthly", null, {
						hk: "2X3LdO"
					}),
					n = e.isAnnualPremium ? O.fbt._("year", null, {
						hk: "4hYQdN"
					}) : O.fbt._("month", null, {
						hk: "1l20Gw"
					}),
					o = e.isPremiumMigrationEnabled ? a.a.createElement("div", {
						className: I.a.creditCard
					}, a.a.createElement(H.a, {
						nightmode: e.nightmode,
						className: I.a.stripeForm,
						shouldDeleteCardWithGql: !0
					})) : a.a.createElement(a.a.Fragment, null, a.a.createElement(q.a, {
						className: I.a.creditCard
					}), a.a.createElement("a", {
						href: "https://stripe.com",
						target: "_blank",
						rel: "noopener noreferrer"
					}, a.a.createElement("img", {
						className: I.a.poweredByStripeIcon,
						src: `${i.a.assetPath}/img/payment-icons/powered-by-stripe.png`
					})));
				return a.a.createElement(A.StripeProvider, {
					apiKey: i.a.stripe.apiKey
				}, a.a.createElement(A.Elements, null, a.a.createElement(a.a.Fragment, null, a.a.createElement(Z, {
					onCloseClick: e.onCloseModal,
					userName: e.userName
				}), a.a.createElement("div", {
					className: I.a.premiumPurchaseBody
				}, a.a.createElement(G.a, {
					className: I.a.selectPayment,
					nightmode: e.nightmode,
					selectedPayment: e.selectedPayment,
					onPaymentSelected: e.onPaymentSelected
				}), e.selectedPayment === l.Ab && o, a.a.createElement("div", {
					className: I.a.checkoutFooter
				}, a.a.createElement("div", {
					className: I.a.premiumPurchaseTotal
				}, O.fbt._("Total: {Price}/{Membership Term}", [O.fbt._param("Price", `$${t}`), O.fbt._param("Membership Term", r)], {
					hk: "1islUR"
				}))), e.selectedPayment === l.Bb && e.paypalErrorMessage && a.a.createElement("div", {
					className: I.a.errorMessage
				}, e.paypalErrorMessage), e.selectedPayment === l.Ab && e.stripeErrorMessage && a.a.createElement("div", {
					className: I.a.errorMessage
				}, e.stripeErrorMessage), a.a.createElement("div", {
					className: I.a.membershipDescription
				}, O.fbt._("By completing your purchase, you are agreeing to automatic payments for Reddit Premium and Reddit’s {=User Agreement} and {=Privacy Policy}. Your Premium subscription will auto-renew {Renewal Term} for {Price} (plus tax where applicable). Cancel anytime in User Settings. Cancel at least 24 hours before your subscription ends to avoid getting charged for the next {Length of term}. No partial refunds.", [O.fbt._param("=User Agreement", a.a.createElement("a", {
					href: "https://www.redditinc.com/policies/user-agreement",
					target: "_blank",
					rel: "noopener noreferrer"
				}, O.fbt._("User Agreement", null, {
					hk: "4qnrFW"
				}))), O.fbt._param("=Privacy Policy", a.a.createElement("a", {
					href: "https://www.redditinc.com/policies/privacy-policy",
					target: "_blank",
					rel: "noopener noreferrer"
				}, O.fbt._("Privacy Policy", null, {
					hk: "2PtUaD"
				}))), O.fbt._param("Renewal Term", r), O.fbt._param("Price", `$${t}`), O.fbt._param("Length of term", n)], {
					hk: "2gscIO"
				}))), e.isPremiumMigrationEnabled && e.premiumProductOffer ? a.a.createElement("div", {
					className: I.a.premiumPurchaseSelectPaymentFooter
				}, a.a.createElement(V, {
					className: I.a.premiumPurchaseButton,
					productOffer: e.premiumProductOffer,
					productOfferType: E.c.Premium
				})) : a.a.createElement(J, {
					onCompletePurchaseClick: e.onCompletePurchaseClick,
					passthrough: e.passthrough,
					paypalButtonId: e.paypalButtonId,
					selectedPayment: e.selectedPayment,
					stripeTokenPending: e.stripeTokenPending
				}))))
			};

			function $() {
				return ($ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const X = Object(s.c)({
					activePremiumPackage: v.a,
					activePage: v.n,
					allowNavigationCallback: e => {
						const t = Object(P.a)(e);
						return null === t ? void 0 : t
					},
					nightmode: _.V,
					passthrough: v.e,
					selectedPayment: v.c,
					stripeErrorMessage: v.j,
					stripeTokenPending: v.m,
					paypalErrorMessage: v.d,
					userName: e => {
						const t = Object(_.i)(e);
						return `u/${Object(g.e)(t)}`
					},
					isPremiumMigrationEnabled: C.a,
					renewInterval: v.p,
					premiumProductOffer: j.c,
					premiumPricePackage: j.b
				}),
				z = Object(o.b)(X, (e, t) => ({
					closeModal: () => e(Object(m.closePremiumPurchaseModal)()),
					onCloseModalClick: () => e(Object(m.closePremiumPurchaseModal)()),
					onCompletePurchaseClick: t => e(Object(m.stripePremiumPurchaseRequested)(t)),
					onPaymentSelected: t => e(Object(p.selectPaymentMethod)(t))
				})),
				ee = Object(c.a)(({
					sendEvent: e,
					activePage: t,
					activePremiumPackage: r,
					className: o,
					nightmode: s,
					selectedPayment: c,
					onCompletePurchaseClick: d,
					onPaymentSelected: p,
					onTryCloseModal: m,
					passthrough: f,
					stripeErrorMessage: h,
					stripeTokenPending: g,
					paypalErrorMessage: C,
					userName: v,
					renewInterval: P,
					premiumProductOffer: _,
					premiumPricePackage: j,
					isPremiumMigrationEnabled: O
				}) => {
					let x = l.sb,
						w = !1;
					O && _ && j ? (x = j.price, w = P === E.b.Year) : r && (x = r ? r.pennies : l.sb, w = !!r && r.frequency === u.c.Yearly);
					const k = Object(n.useCallback)(e => {
						if (27 === e.keyCode) return m()
					}, [m]);
					return Object(n.useEffect)(() => (document.addEventListener("keydown", k), Object(y.d)(y.a.GoldPayment, !1), e(Object(b.i)()), () => document.removeEventListener("keydown", k)), [k, e]), Object(n.useEffect)(() => {
						h && e(Object(b.g)())
					}, [e, h]), a.a.createElement("div", {
						className: o
					}, "selectPayment" === t && a.a.createElement(Q, {
						nightmode: s,
						onCloseModal: m,
						onCompletePurchaseClick: d,
						onPaymentSelected: p,
						isAnnualPremium: w,
						passthrough: f,
						paypalButtonId: (null == r ? void 0 : r.paypalButtonId) || i.a.paypal.buttons.premium,
						selectedPayment: c,
						stripeErrorMessage: h,
						stripeTokenPending: g,
						paypalErrorMessage: C,
						premiumProductOffer: _,
						total: x,
						userName: v,
						isPremiumMigrationEnabled: O
					}), "paymentCompleted" === t && a.a.createElement(R, {
						onCloseClick: m
					}))
				}),
				te = {
					backgroundColor: h.b.overlayReportFlow
				};
			t.default = z(Object(f.c)(class extends a.a.PureComponent {
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
					return a.a.createElement(ee, $({}, this.props, {
						className: Object(d.a)(this.props.className, I.a.premiumPurchaseModal),
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						overlayCustomStyles: te,
						withOverlay: !0
					}))
				}
			}))
		},
		"./src/reddit/components/StripePaymentForm/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/StripePaymentForm/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				c = r("./node_modules/fbt/lib/FbtPublic.js"),
				d = r("./src/config.ts"),
				l = r("./src/reddit/components/CheckoutForm/index.tsx"),
				u = r("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				p = r("./src/reddit/components/StripePaymentForm/index.m.less"),
				m = r.n(p);
			var f = e => {
					const {
						onToggleRememberCard: t,
						rememberCard: r
					} = e;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(l.a, {
						className: m.a.creditCard
					}), a.a.createElement(u.a, {
						className: m.a.saveCardCheckbox,
						isSelected: r,
						onClick: t,
						text: c.fbt._("Remember this card", null, {
							hk: "2arVov"
						})
					}), a.a.createElement("a", {
						href: "https://stripe.com",
						target: "_blank"
					}, a.a.createElement("img", {
						className: m.a.poweredByStripeIcon,
						src: `${d.a.assetPath}/img/payment-icons/powered-by-stripe.png`
					})))
				},
				h = r("./src/reddit/icons/svgs/Trash2/index.tsx");
			const {
				fbt: y
			} = r("./node_modules/fbt/lib/FbtPublic.js"), b = e => 2 === e.length ? e : "0" + e, g = e => {
				switch (e.toLowerCase()) {
					case "visa":
						return `${d.a.assetPath}/img/payment-icons/visa.png`;
					case "mastercard":
						return `${d.a.assetPath}/img/payment-icons/mastercard.png`;
					case "discover":
						return `${d.a.assetPath}/img/payment-icons/discover.jpg`;
					case "american express":
						return `${d.a.assetPath}/img/payment-icons/amex.png`;
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
							savedCard: r
						} = this.props;
						t(r.cardId)
					}
				}
				render() {
					const {
						savedCard: e
					} = this.props, t = g(e.brand);
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
					}, y._("Expires {month} / {year}", [y._param("month", b(e.expirationMonth.toString())), y._param("year", e.expirationYear.toString())], {
						hk: "3iXzVI"
					}))), this.state.showConfirmText ? a.a.createElement("button", {
						className: m.a.confirmText,
						onClick: this.onConfirmClick
					}, y._("Confirm", null, {
						hk: "gFhpD"
					})) : a.a.createElement("button", {
						onClick: this.onTrashCanClick
					}, a.a.createElement(h.b, {
						className: m.a.icon
					})))
				}
			}
			var v = C,
				P = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				_ = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				E = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				j = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const O = Object(s.c)({
					rememberCard: j.v,
					savedCard: e => Object(j.x)(e)[0],
					stripeInfoLoading: j.w
				}),
				x = Object(o.b)(O, (e, t) => ({
					onClickDeleteCard: r => t.shouldDeleteCardWithGql ? e(Object(P.c)(r)) : e(Object(_.deleteSavedCard)(r)),
					onToggleRememberCard: () => e(Object(_.toggleRememberCard)())
				}));
			class w extends a.a.PureComponent {
				render() {
					const {
						className: e,
						nightmode: t,
						onClickDeleteCard: r,
						onToggleRememberCard: n,
						rememberCard: o,
						savedCard: s,
						stripeInfoLoading: c
					} = this.props, d = c, l = !d && s, u = !d && !l, p = d ? m.a.loadingState : l ? m.a.savedCardState : m.a.formState;
					return a.a.createElement("div", {
						className: Object(i.a)(m.a.stripePaymentForm, p, e)
					}, d && a.a.createElement(E.a, {
						className: m.a.loader,
						sizePx: 60
					}), l && s && a.a.createElement("form", null, a.a.createElement(v, {
						nightmode: t,
						onDelete: r,
						savedCard: s
					})), u && a.a.createElement(f, {
						onToggleRememberCard: n,
						rememberCard: o
					}))
				}
			}
			t.a = x(w)
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = r.n(s);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => a.a.createElement("div", {
				className: Object(o.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				}
			})
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "e", (function() {
				return f
			}));
			var n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				s = r("./src/reddit/constants/headers.ts"),
				i = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = r("./src/reddit/endpoints/gold/purchase.ts");
			const d = async ({
				buttonId: e,
				context: t,
				correlationId: r
			}) => {
				const d = {
						button_id: e,
						correlation_id: r
					},
					l = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					u = Object(i.a)(l);
				return Object(a.a)(Object(o.a)(t, [s.a]), {
					method: n.eb.POST,
					endpoint: u,
					data: d
				}).then(c.c)
			}, l = async ({
				context: e,
				coins: t,
				pennies: r,
				correlationId: i
			}) => {
				const d = {
					coins: t,
					pennies: r,
					correlation_id: i
				};
				return Object(a.a)(Object(o.a)(e, [s.a]), {
					method: n.eb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(c.c)
			}, u = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: i,
				correlationId: d
			}) => {
				const l = {
					award_id: t,
					correlation_id: d,
					pennies: r,
					thing_id: i
				};
				return Object(a.a)(Object(o.a)(e, [s.a]), {
					method: n.eb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(c.c)
			}, p = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: i,
				pennies: d,
				correlationId: l
			}) => {
				const u = {
					offer_context: t,
					order_id: r,
					coins: i,
					pennies: d,
					correlation_id: l
				};
				return Object(a.a)(Object(o.a)(e, [s.a]), {
					method: n.eb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: u
				}).then(c.c)
			}, m = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: i,
				isAnonymous: d,
				message: l,
				offerContext: u,
				orderId: p,
				pennies: m,
				thingId: f
			}) => {
				const h = {
					award_id: e,
					coins: r,
					correlation_id: i,
					is_anonymous: d,
					message: l,
					offer_context: u,
					order_id: p,
					pennies: m,
					thing_id: f
				};
				return Object(a.a)(Object(o.a)(t, [s.a]), {
					method: n.eb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: h
				}).then(c.c)
			}, f = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: i,
				message: d,
				orderId: l,
				thingId: u
			}) => {
				const p = {
					award_id: e,
					correlation_id: r,
					is_anonymous: i,
					message: d,
					order_id: l,
					thing_id: u
				};
				return Object(a.a)(Object(o.a)(t, [s.a]), {
					method: n.eb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: p
				}).then(c.c)
			}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n);

			function o(e, t) {
				const r = e.toString().split(":");
				return r.length % 2 == 0 ? e : r.reduce((e, r, n) => (n % 2 == 0 ? e.push(r) : "" === r ? e.push(":") : `:${r}:` in t ? e.push(t[`:${r}:`]) : e.push(`:${r}:`), e), []).map((e, t) => a.a.createElement(a.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, r) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = r.n(s);
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
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "e", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return c
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const a = {
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
				o = (e, t = !1) => {
					const r = [];
					for (const n in a) {
						const o = a[n];
						(o.priceInCoins <= e || t) && r.push(o)
					}
					return r
				},
				s = e => n.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [n.fbt._plural(e.monthsOfPremium, "number of months"), n.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				i = "com.reddit.premium_1";
			var c;
			! function(e) {
				e.Monthly = "monthly", e.Yearly = "yearly"
			}(c || (c = {}))
		},
		"./src/reddit/selectors/experiments/econ/premiumMigration.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				a = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const o = Object(a.a)(n.Kb)
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return i
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "f", (function() {
				return u
			})), r.d(t, "b", (function() {
				return p
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/makeProductOfferKey/index.ts"),
				o = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				c = (e, {
					subredditId: t,
					type: r
				}) => {
					var n, o, s;
					return t ? e.subreddits.productOffers[Object(a.a)(r, t)] : null === (s = null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === o ? void 0 : o.productOffers) || void 0 === s ? void 0 : s[Object(a.a)(r)]
				},
				d = (e, {
					subredditId: t
				}) => {
					const r = c(e, {
						subredditId: t,
						type: o.c.Powerups
					});
					return r && r[0]
				},
				l = e => {
					const t = c(e, {
						type: o.c.Premium
					});
					return null == t ? void 0 : t[0]
				},
				u = (e, t) => null == e ? void 0 : e.pricePackages.find(e => e.renewInterval === t),
				p = Object(n.a)(l, s.p, (e, t) => u(e, t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PremiumPurchaseModal.4431954450269516853b.js.map