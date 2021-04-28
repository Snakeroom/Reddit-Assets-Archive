// https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.61ced125d68f0733ff07.js
// Retrieved at 4/28/2021, 3:20:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsPurchaseModal"], {
		"./node_modules/react-stripe-elements/es/components/Element.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = c(r("./node_modules/react/index.js")),
				o = c(r("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
				a = c(r("./node_modules/react-stripe-elements/es/utils/shallowEqual.js")),
				s = r("./node_modules/react-stripe-elements/es/components/Elements.js");

			function c(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function i(e, t) {
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
				var t, r, c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return r = t = function(t) {
					function r(e, n) {
						i(this, r);
						var o = l(this, t.call(this, e, n));
						o.handleRef = function(e) {
							o._ref = e
						}, o._element = null;
						var a = p(o.props);
						return o._options = a, o
					}
					return d(r, t), r.prototype.componentDidMount = function() {
						var t = this;
						this.context.addElementsLoadListener((function(r) {
							var n = r.create(e, t._options);
							t._element = n, t._setupEventListeners(n), n.mount(t._ref), (c.impliedTokenType || c.impliedSourceType) && t.context.registerElement(n, c.impliedTokenType, c.impliedSourceType)
						}))
					}, r.prototype.componentWillReceiveProps = function(e) {
						var t = p(e);
						0 === Object.keys(t).length || (0, a.default)(t, this._options) || (this._options = t, this._element && this._element.update(t))
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
					id: o.default.string,
					className: o.default.string,
					onChange: o.default.func,
					onBlur: o.default.func,
					onFocus: o.default.func,
					onReady: o.default.func
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
				o = c(r("./node_modules/react/index.js")),
				a = c(r("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
				s = r("./node_modules/react-stripe-elements/es/components/Provider.js");

			function c(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function i(e) {
				if (Array.isArray(e)) {
					for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
					return r
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
				u = function(e) {
					function t(r, o) {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var a = function(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this, r, o));
						return a.handleRegisterElement = function(e, t, r) {
							a.setState((function(o) {
								return {
									registeredElements: [].concat(i(o.registeredElements), [n({
										element: e
									}, t ? {
										impliedTokenType: t
									} : {}, r ? {
										impliedSourceType: r
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
						return o.default.Children.only(this.props.children)
					}, t
				}(o.default.Component);
			u.childContextTypes = n({}, l, d), u.contextTypes = s.providerContextTypes, u.defaultProps = {
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
				o = i(r("./node_modules/react/index.js")),
				a = i(r("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
				s = i(r("./node_modules/react-stripe-elements/es/utils/shallowEqual.js")),
				c = r("./node_modules/react-stripe-elements/es/components/Elements.js");

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var l = function() {},
				d = function(e) {
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
						var o = function(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this, r, n));
						o.handleRef = function(e) {
							o._ref = e
						};
						var a = d(r);
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
			u.propTypes = {
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
			}, u.defaultProps = {
				id: void 0,
				className: void 0,
				onBlur: l,
				onClick: l,
				onFocus: l,
				onReady: l
			}, u.contextTypes = c.elementContextTypes, t.default = u
		},
		"./node_modules/react-stripe-elements/es/components/Provider.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.providerContextTypes = void 0;
			var n = a(r("./node_modules/react/index.js")),
				o = a(r("./node_modules/react-stripe-elements/node_modules/prop-types/index.js"));

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
				c = function(e, t) {
					window.Stripe.__cachedInstances = window.Stripe.__cachedInstances || {};
					var r = "key=" + e + " options=" + JSON.stringify(t),
						n = window.Stripe.__cachedInstances[r] || window.Stripe(e, t);
					return window.Stripe.__cachedInstances[r] = n, n
				},
				i = function(e) {
					if (e && e.elements && e.createSource && e.createToken) return e;
					throw new Error("Please pass a valid Stripe object to StripeProvider. You can obtain a Stripe object by calling 'Stripe(...)' with your publishable key.")
				},
				l = function(e) {
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
							var o = n.props,
								a = o.apiKey,
								s = (o.children, o.stripe, function(e, t) {
									var r = {};
									for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
									return r
								}(o, ["apiKey", "children", "stripe"]));
							n._meta = {
								tag: "sync",
								stripe: c(a, s)
							}
						} else if (n.props.stripe) n._meta = {
							tag: "sync",
							stripe: i(n.props.stripe)
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
							var n = i(e.stripe);
							this._meta.stripe = n, this._listeners.forEach((function(e) {
								e(n)
							}))
						}
					}, t.prototype.render = function() {
						return n.default.Children.only(this.props.children)
					}, t
				}(n.default.Component);
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
		"./node_modules/react-stripe-elements/es/components/inject.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n, o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				},
				a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				s = r("./node_modules/react/index.js"),
				c = (n = s) && n.__esModule ? n : {
					default: n
				},
				i = r("./node_modules/react-stripe-elements/es/components/Elements.js"),
				l = r("./node_modules/react-stripe-elements/es/components/Provider.js");

			function d(e, t) {
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
						var o = p(this, t.call(this, e, n));
						return o.findElement = function(e, t) {
							var r = o.context.getRegisteredElements().filter((function(t) {
									return t[e]
								})),
								n = "auto" === t ? r : r.filter((function(r) {
									return r[e] === t
								}));
							if (1 === n.length) return n[0].element;
							if (n.length > 1) throw new Error("You did not specify the type of Source or Token to create.\n        We could not infer which Element you want to use for this operation.");
							return null
						}, o.requireElement = function(e, t) {
							var r = o.findElement(e, t);
							if (r) return r;
							throw new Error("You did not specify the type of Source or Token to create.\n        We could not infer which Element you want to use for this operation.")
						}, o.wrappedCreateToken = function(e) {
							return function() {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
								if (t && "object" === (void 0 === t ? "undefined" : a(t))) {
									var n = t,
										s = n.type,
										c = d(n, ["type"]),
										i = "string" == typeof s ? s : "auto",
										l = o.requireElement("impliedTokenType", i);
									return e.createToken(l, c)
								}
								if ("string" == typeof t) {
									var u = t;
									return e.createToken(u, r)
								}
								throw new Error("Invalid options passed to createToken. Expected an object, got " + (void 0 === t ? "undefined" : a(t)) + ".")
							}
						}, o.wrappedCreateSource = function(e) {
							return function() {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
								if (t && "object" === (void 0 === t ? "undefined" : a(t))) {
									if ("string" != typeof t.type) throw new Error("Invalid Source type passed to createSource. Expected string, got " + a(t.type) + ".");
									var r = o.findElement("impliedSourceType", t.type);
									return r ? e.createSource(r, t) : e.createSource(t)
								}
								throw new Error("Invalid options passed to createSource. Expected an object, got " + (void 0 === t ? "undefined" : a(t)) + ".")
							}
						}, "sync" === o.context.tag ? o.state = {
							stripe: o.stripeProps(o.context.stripe)
						} : o.state = {
							stripe: null
						}, o
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
						return o({}, e, {
							createToken: this.wrappedCreateToken(e),
							createSource: this.wrappedCreateSource(e)
						})
					}, r.prototype.render = function() {
						var t = this;
						return c.default.createElement(e, o({}, this.props, {
							stripe: this.state.stripe,
							ref: f ? function(e) {
								t.wrappedInstance = e
							} : null
						}))
					}, r
				}(c.default.Component), t.contextTypes = o({}, l.providerContextTypes, i.injectContextTypes), t.displayName = "InjectStripe(" + (e.displayName || e.name || "Component") + ")", r
			}
		},
		"./node_modules/react-stripe-elements/es/index.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.IdealBankElement = t.IbanElement = t.PaymentRequestButtonElement = t.PostalCodeElement = t.CardCVCElement = t.CardExpiryElement = t.CardNumberElement = t.CardElement = t.Elements = t.injectStripe = t.StripeProvider = void 0;
			var n = i(r("./node_modules/react-stripe-elements/es/components/Provider.js")),
				o = i(r("./node_modules/react-stripe-elements/es/components/inject.js")),
				a = i(r("./node_modules/react-stripe-elements/es/components/Elements.js")),
				s = i(r("./node_modules/react-stripe-elements/es/components/Element.js")),
				c = i(r("./node_modules/react-stripe-elements/es/components/PaymentRequestButtonElement.js"));

			function i(e) {
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
			t.StripeProvider = n.default, t.injectStripe = o.default, t.Elements = a.default, t.CardElement = l, t.CardNumberElement = d, t.CardExpiryElement = u, t.CardCVCElement = p, t.PostalCodeElement = m, t.PaymentRequestButtonElement = c.default, t.IbanElement = f, t.IdealBankElement = h
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

			function o() {}

			function a() {}
			a.resetWarningCache = o, e.exports = function() {
				function e(e, t, r, o, a, s) {
					if (s !== n) {
						var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw c.name = "Invariant Violation", c
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
					checkPropTypes: a,
					resetWarningCache: o
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
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return q
			})), r.d(t, "i", (function() {
				return F
			})), r.d(t, "f", (function() {
				return B
			})), r.d(t, "e", (function() {
				return D
			})), r.d(t, "d", (function() {
				return V
			})), r.d(t, "c", (function() {
				return U
			})), r.d(t, "a", (function() {
				return K
			})), r.d(t, "g", (function() {
				return X
			})), r.d(t, "h", (function() {
				return G
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/lodash/omit.js"),
				a = r.n(o),
				s = r("./node_modules/uuid/v4.js"),
				c = r.n(s),
				i = r("./src/config.ts"),
				l = r("./src/reddit/constants/modals.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/lib/addQueryParams/index.ts"),
				p = r("./src/lib/makeActionCreator/index.ts"),
				m = r("./src/lib/sentry/index.ts"),
				f = r("./src/reddit/models/Toast/index.ts"),
				h = r("./src/reddit/actions/gold/constants.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				b = r("./src/reddit/selectors/gold/productOffers.ts"),
				g = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				w = r("./src/reddit/selectors/user.ts"),
				E = r("./src/reddit/models/Gold/ProductOffer.ts"),
				_ = r("./src/reddit/actions/gold/powerups.ts"),
				v = r("./src/reddit/actions/modal.ts"),
				P = r("./node_modules/bignumber.js/bignumber.js"),
				C = r.n(P),
				j = r("./src/graphql/operations/CancelEconRecurringPayment.json"),
				x = r("./src/graphql/operations/ConfirmPaypalPayment.json"),
				O = r("./src/graphql/operations/CreateEconOrder.json"),
				k = r("./src/graphql/operations/CreatePaypalPayment.json"),
				S = r("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				N = r("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				M = r("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				T = r("./src/graphql/operations/DeleteSavedStripeCard.json"),
				I = r("./src/graphql/operations/UserSavedStripeCards.json"),
				R = r("./src/lib/makeGqlRequest/index.ts");
			const L = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				A = e => e.map(e => e.message).join(" : "),
				q = (e, t, r) => async (o, a, {
					gqlContext: s
				}) => {
					const i = c()(),
						l = await ((e, t, r, n, o) => {
							const {
								premium: a,
								...s
							} = o, c = (null == a ? void 0 : a.pricePackage) || r.pricePackages[0], i = new C.a(c.price).multipliedBy(n).toFixed();
							return Object(R.a)(e, {
								...O,
								variables: {
									input: {
										nonce: t,
										productId: r.id,
										productVersion: r.version,
										pricePackageId: c.id,
										currency: c.currency,
										price: i,
										productsCount: n.toString(),
										...s
									}
								}
							})
						})(s(), i, e, t, r);
					if (l.ok) {
						const e = l.body,
							{
								errors: t,
								order: r
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(A(t));
						if (r) return r.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, F = (e, t, r, o, a, s) => async (i, l, {
					gqlContext: d
				}) => {
					const u = l(),
						p = () => i(Object(y.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						f = a === E.c.Premium,
						h = a === E.c.Powerups,
						_ = {};
					if (h && s) _.powerUps = {
						subredditId: s,
						isAnonymous: r
					};
					else if (f) {
						const e = Object(b.b)(u);
						_.premium = {
							pricePackage: e
						}
					}
					let v, P, C = "";
					try {
						C = await i(q(t, o, _))
					} catch (x) {
						return m.c.captureException(x), void(x.message && i(Object(y.stripeApiError)(x.message)))
					}
					i(Object(y.stripeTokenPending)());
					const j = Object(g.y)(u);
					if (j || (v = await i(Object(y.validateAndCreateStripeToken)(e)), P = Object(g.v)(u), v)) try {
						const e = c()(),
							t = j || P ? v && P ? ((e, t, r, n) => Object(R.a)(e, {
								...S,
								variables: {
									nonce: t,
									orderId: r,
									token: n
								}
							}))(d(), e, C, v.id) : j ? ((e, t, r, n) => Object(R.a)(e, {
								...M,
								variables: {
									nonce: t,
									orderId: r,
									cardId: n
								}
							}))(d(), e, C, j) : null : ((e, t, r, n) => Object(R.a)(e, {
								...N,
								variables: {
									nonce: t,
									orderId: r,
									token: n
								}
							}))(d(), e, C, v.id),
							n = await t;
						if (!n || !n.ok) return void p(); {
							const e = n.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return void i(Object(y.stripeApiError)(A(e.errors)));
							if (e.ok && "PAID" !== e.payment.status) return void p();
							const t = Object(w.i)(l());
							t && (h && s ? i(X({
								subredditId: s,
								powerupsCount: o,
								user: t,
								isAnonymous: r
							})) : f && i(Y({
								user: t
							})))
						}
					} catch (x) {
						m.c.captureException(x), p()
					}
				}, B = (e, t, r, n) => async (o, a, {
					gqlContext: s
				}) => {
					let l = "";
					try {
						l = await o(q(e, n, {
							powerUps: {
								subredditId: t,
								isAnonymous: r
							}
						}))
					} catch (p) {
						return m.c.captureException(p), p.message && o(Object(y.paypalApiError)(p.message)), null
					}
					const d = i.a.redditUrl;
					try {
						const e = Object(u.a)(`${d}/framedModal/paypal-finish`, {
								_o: d,
								r: t,
								o: l,
								s: !0
							}),
							i = Object(u.a)(`${d}/framedModal/paypal-finish`, {
								_o: d,
								r: t,
								o: l
							}),
							p = c()(),
							m = await ((e, t, r, n, o) => Object(R.a)(e, {
								...k,
								variables: {
									nonce: t,
									orderId: r,
									successUrl: n,
									cancelUrl: o
								}
							}))(s(), p, l, e, i);
						if (m && m.ok) {
							const e = m.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return o(Object(y.paypalApiError)(A(e.errors))), null;
							const s = Object(w.i)(a());
							if (e.ok) {
								const {
									status: a
								} = e.payment;
								if ("ACTION_REQUIRED" === a) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === a && s) return t && o(X({
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
					return o(Object(y.paypalApiError)(L())), null
				}, D = (e, t) => async (r, n, {
					gqlContext: o
				}) => {
					try {
						const n = c()(),
							a = await ((e, t, r, n) => Object(R.a)(e, {
								...x,
								variables: {
									nonce: t,
									paymentId: r,
									token: n
								}
							}))(o(), n, e, t);
						if (a && a.ok) {
							const e = a.body.data.confirmEconPayment;
							if (e && e.errors && e.errors.length) return r(Object(y.paypalApiError)(A(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (a) {
						m.c.captureException(a)
					}
					return r(Object(y.paypalApiError)(L())), !1
				}, V = () => async (e, t, {
					gqlContext: r
				}) => {
					e(Object(y.savedCardsPending)());
					try {
						const t = await (e => Object(R.a)(e, {
							...I,
							variables: {}
						}))(r());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(y.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: n
							} = r.data.identity, o = n.map(e => a()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(y.savedCardsSuccess)(o)), o[0] && e(Object(y.selectSavedCard)(o[0].cardId))
						} else e(Object(y.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (o) {
						m.c.captureException(o), e(Object(y.savedCardsSuccess)([]))
					}
				}, U = e => async (t, r, {
					gqlContext: n
				}) => {
					t(Object(y._deleteSavedCard)(e));
					try {
						const t = await ((e, t) => Object(R.a)(e, {
							...T,
							variables: {
								cardId: t
							}
						}))(n(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: o
							} = r.data.deleteEconPaymentMethod;
						if (o && o.length) throw new Error(A(o))
					} catch (o) {
						m.c.captureException(o)
					}
				}, W = Object(p.a)(h.N), z = Object(p.a)(h.O), H = Object(p.a)(h.P), Z = e => async (t, r) => {
					await t(W(e)), t(Object(d.f)({
						kind: f.b.Error,
						duration: d.a,
						text: e
					}))
				}, K = (e, t, r) => async (o, a, {
					gqlContext: s
				}) => {
					o(z({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const a = await ((e, t) => Object(R.a)(e, {
							...j,
							variables: {
								orderId: t
							}
						}))(s(), e);
						if (a.ok) {
							const e = a.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void o(Z(n[0].message));
							o(H({
								subredditId: t,
								allocatedAt: r
							}))
						} else o(Z(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (c) {
						m.c.captureException(c), o(Z(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, J = Object(p.a)(h.R), X = e => async (t, r) => {
					t(J(e)), t(Object(_.g)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(v.g)(l.a.ECON_POWERUPS_PURCHASE)), t(Object(v.h)(l.a.ECON_POWERUPS_SUCCESS))
				}, Y = Object(p.a)(h.V), G = Object(p.a)(h.Z)
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return l
			})), r.d(t, "paymentCompleted", (function() {
				return d
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
				return w
			})), r.d(t, "selectSavedCard", (function() {
				return E
			})), r.d(t, "_deleteSavedCard", (function() {
				return _
			})), r.d(t, "deleteSavedCard", (function() {
				return v
			})), r.d(t, "savedCardsPending", (function() {
				return P
			})), r.d(t, "savedCardsSuccess", (function() {
				return C
			})), r.d(t, "loadSavedCards", (function() {
				return j
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/sentry/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/endpoints/gold/purchase.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const l = Object(a.a)(c.A),
				d = Object(a.a)(c.w),
				u = Object(a.a)(c.b),
				p = Object(a.a)(c.a),
				m = Object(a.a)(c.D),
				f = Object(a.a)(c.F),
				h = Object(a.a)(c.E),
				y = Object(a.a)(c.C),
				b = e => async (t, r) => {
					const o = r(),
						a = Object(i.h)(o),
						{
							token: s,
							error: c
						} = await e.createToken({
							name: a
						});
					if (a.trim()) {
						if (!c && s) return s;
						t(h(c || void 0))
					} else {
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, g = Object(a.a)(c.x), w = Object(a.a)(c.G), E = Object(a.a)(c.B), _ = Object(a.a)(c.g), v = e => async (t, r, {
					apiContext: n
				}) => {
					t(_(e));
					try {
						const t = await Object(s.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (a) {
						o.c.captureException(a)
					}
				}, P = Object(a.a)(c.y), C = Object(a.a)(c.z), j = () => async (e, t, {
					apiContext: r
				}) => {
					e(P());
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
						e(C(n)), n[0] && e(E(n[0].cardId))
					} catch (n) {
						o.c.captureException(n), e(C([]))
					}
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
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				s = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				l = r("./node_modules/react-stripe-elements/es/index.js"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				p = r("./src/reddit/components/CheckoutForm/index.m.less"),
				m = r.n(p);
			const f = Object(c.c)({
					cardCvcValidation: u.f,
					cardExpiryValidation: u.g,
					cardName: u.h,
					cardNumberValidation: u.i,
					nameOnCardValidation: u.k,
					postalCodeValidation: u.l
				}),
				h = Object(s.b)(f, (e, t) => ({
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
						cardExpiryValidation: r,
						cardName: o,
						cardNumberValidation: s,
						onCardElementChange: c,
						nameOnCardValidation: d,
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
					return a.a.createElement("div", {
						className: Object(i.a)(m.a.checkoutForm, e)
					}, a.a.createElement("div", {
						className: m.a.formCellWide
					}, a.a.createElement("input", {
						className: Object(i.a)(m.a.cardInput, m.a.nameOnCard, {
							[m.a.cardInputError]: !!d
						}),
						type: "text",
						placeholder: n.fbt._("NAME ON CARD", null, {
							hk: "IgrlQ"
						}).toString(),
						onChange: this.onChange,
						value: o
					})), a.a.createElement("div", {
						className: m.a.formCell
					}, a.a.createElement(l.CardNumberElement, {
						className: Object(i.a)(m.a.cardInput, {
							[m.a.cardInputError]: !!s
						}),
						onChange: c,
						onReady: this.onCardNumberReady,
						placeholder: n.fbt._("CARD NUMBER", null, {
							hk: "3pqMxG"
						}).toString(),
						style: b
					}), !p && a.a.createElement("div", {
						className: m.a.elementPlaceholder
					}, n.fbt._("CARD NUMBER", null, {
						hk: "3pqMxG"
					}))), a.a.createElement("div", {
						className: m.a.formCell
					}, a.a.createElement(l.CardExpiryElement, {
						className: Object(i.a)(m.a.cardInput, {
							[m.a.cardInputError]: !!r
						}),
						onChange: c,
						onReady: this.onCardExpiryReady,
						placeholder: n.fbt._("MM/YY", null, {
							hk: "Hou17"
						}).toString(),
						style: b
					}), !f && a.a.createElement("div", {
						className: m.a.elementPlaceholder
					}, n.fbt._("MM/YY", null, {
						hk: "Hou17"
					}))), a.a.createElement("div", {
						className: m.a.formCell
					}, a.a.createElement(l.CardCVCElement, {
						className: Object(i.a)(m.a.cardInput, {
							[m.a.cardInputError]: !!t
						}),
						onChange: c,
						onReady: this.onCardCVCReady,
						placeholder: n.fbt._("CCV", null, {
							hk: "dZzZJ"
						}).toString(),
						style: b
					}), !h && a.a.createElement("div", {
						className: m.a.elementPlaceholder
					}, n.fbt._("CCV", null, {
						hk: "dZzZJ"
					}))), a.a.createElement("div", {
						className: m.a.formCell
					}, a.a.createElement(l.PostalCodeElement, {
						className: Object(i.a)(m.a.cardInput, {
							[m.a.cardInputError]: !!u
						}),
						onChange: c,
						onReady: this.onPostalCodeReady,
						placeholder: n.fbt._("ZIP CODE", null, {
							hk: "2lJZ4j"
						}).toString(),
						style: b
					}), !y && a.a.createElement("div", {
						className: m.a.elementPlaceholder
					}, n.fbt._("ZIP CODE", null, {
						hk: "2lJZ4j"
					}))))
				}
			}
			t.a = Object(l.injectStripe)(h(y))
		},
		"./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less": function(e, t, r) {
			e.exports = {
				image: "_2UM9VBeA7xU3ro_DBfudN2"
			}
		},
		"./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/config.ts"),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				s = r("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less"),
				c = r.n(s);
			const i = e => a.a.createElement("div", {
				className: e.className
			}, a.a.createElement("picture", null, a.a.createElement("source", {
				srcSet: `${n.a.assetPath}/img/powerups/rotating-bolt.webp`,
				type: "image/webp"
			}), a.a.createElement("source", {
				srcSet: `${n.a.assetPath}/img/powerups/powerup.png`,
				type: "image/png"
			}), a.a.createElement("img", {
				className: c.a.image,
				src: `${n.a.assetPath}/img/powerups/powerup.png`
			})))
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3-wzlsd2L9K9BE7yms9IhJ",
				imageContainer: "_2moFyXtJlZerLLuTvZ9TYQ",
				title: "_258n2TylpikH2fhZLhlAgr",
				subtitle: "_1AYSLhpiU1fIwgPPxu2Xuy"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/classNames/index.ts"),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				s = r("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx"),
				c = r("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less"),
				i = r.n(c);
			t.a = e => a.a.createElement("header", {
				className: Object(n.a)(i.a.container, e.className)
			}, a.a.createElement(s.a, {
				className: i.a.imageContainer
			}), a.a.createElement("div", null, a.a.createElement("h2", {
				className: i.a.title
			}, e.title), a.a.createElement("h3", {
				className: i.a.subtitle
			}, e.subtitle)))
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsPremiumButton/index.m.less": function(e, t, r) {
			e.exports = {
				button: "_1mc-IVNBsfKUugqkP3rda7",
				loadingIcon: "_15g-u6pLWEgyq-W1q8zSji"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/PowerupsCount/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_2BuBEDqT7lkg3pO2WKDev7",
				control: "_1favHXSOScXwn1RBgoTcQR",
				locked: "_1zr44sXfpGbr_0IvOKMhUe",
				button: "_3paafvflLXs20pV91RRAB0",
				buttonIconElement: "_1SxKXgyGKQ5q6hRVXs8exA",
				decrementButton: "_2ZZ4y8uLTNayuVN_S-2Nf5",
				incrementButton: "_190moU3v0ZouK_rrsulWXf",
				value: "_2kUt45BOMdEQHtdaCmdozL",
				icon: "_5d5MTurdJPq_vddOMX6pc"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/ProgressBar/index.m.less": function(e, t, r) {
			e.exports = {
				titleRow: "_1i5gFES8rHCUngNfydAuWr",
				barRow: "_2C7hWoSd6z9a-xV6Z3dnje",
				track: "No3J_0QnbZSfXaewR0dYK",
				progress: "_3oU4QH4ZKf2Ju86PxWmVvt",
				additionalProgress: "_31fdHeoPmiYpMGtd2vSSdL",
				opacityBlink: "_1eAQSptthEkyF-iGElcw0A"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_2iu3jX5bVR5jy7OP6neJ4W",
				count: "_2AMO2XnYhlJu67x263BGll"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/index.m.less": function(e, t, r) {
			e.exports = {
				progressControl: "_2SIcayqih-ki47E6ubsDLN",
				details: "_20wZ73zqa9DS0namcCJdoA",
				purchaseDetails: "SW6YZoTb2xUeU8o-3IQOF",
				anonymousCheckbox: "_2TwVYjhqi8rCciDTHrMPTc",
				paymentMethodTitle: "_3ZkB3JIS9oGV5ZNPEoYrOm",
				paymentMethodSelector: "_2zJhl9SVW67lTeXQgaeNiV",
				errorMessage: "_2Jj9FQM628kGz4Zsu-DATD",
				stripeForm: "_27fBu-SIMK3yPRcZeNUi-",
				button: "_2zABc383welm4OSB9jgeQG",
				Icon: "_20ZTInSCuk9gGcfQ6D7pel",
				icon: "_20ZTInSCuk9gGcfQ6D7pel",
				isLeft: "ivqRDi80dfqnzNnU7r1Bp",
				isRight: "_3l-suZErGWJnDlAcWKjk15",
				premiumDescription: "_1TlVluSbXOqttjoOmuZD2Q",
				premiumIconWrapper: "_3NK13DzzCxYXpEyi7Z1D-P",
				premiumIcon: "_13HsDRX-CPOf5B1mORjNbn",
				description: "_2kdlUzSaYOfKTKm4IaA-by"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/index.m.less": function(e, t, r) {
			e.exports = {
				modal: "_2f9jiTDa9UHMVSyfqhg9zd",
				closeButton: "xqo3g-oX5emMzx0ruxYkF",
				closeIcon: "_3FE6QbodV9pkVNpABuNryv",
				header: "_2lqkgMZi8MtfVB-gqhYqy8"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				c = r("./src/higherOrderComponents/asModal/index.tsx"),
				i = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/contexts/PageLayer/index.tsx"),
				d = r("./src/lib/classNames/index.ts"),
				u = r("./src/reddit/actions/modal.ts"),
				p = r("./src/reddit/icons/svgs/Close/index.tsx"),
				m = r("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx"),
				f = r("./src/config.ts"),
				h = r("./node_modules/react-stripe-elements/es/index.js"),
				y = r("./src/reddit/hooks/useTracking.ts"),
				b = r("./src/lib/constants/index.ts"),
				g = r("./src/reddit/helpers/trackers/powerups.ts"),
				w = r("./src/reddit/actions/gold/powerups.ts"),
				E = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				_ = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				v = r("./src/reddit/models/Gold/ProductOffer.ts"),
				P = r("./src/reddit/selectors/gold/powerups.ts"),
				C = r("./src/reddit/selectors/gold/productOffers.ts"),
				j = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				x = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				k = r("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				S = r("./src/reddit/components/StripePaymentForm/index.tsx"),
				N = r("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				M = r("./src/reddit/icons/svgs/Premium/index.tsx"),
				T = r("./src/reddit/hooks/useThunkDispatch.ts"),
				I = r("./src/reddit/controls/Button/index.tsx");
			const {
				fbt: R
			} = r("./node_modules/fbt/lib/FbtPublic.js"), L = Object(s.c)({
				currentUser: x.i,
				isAnonymous: P.d,
				powerupsCount: P.e,
				productOffer: C.a
			});
			var A = Object(a.b)(L)(o.a.memo((function(e) {
					const {
						className: t,
						currentUser: r,
						isAnonymous: a,
						powerupsCount: s,
						productOffer: c,
						subredditId: i
					} = e, l = Object(T.a)();
					Object(n.useEffect)(() => (window.addEventListener("message", m, !1), () => window.removeEventListener("message", m)), []);
					const [d, u] = Object(n.useState)(!1);
					let p = null;
					if (!r) return null;
					const m = e => {
							const t = (e => {
								try {
									return "string" == typeof e.data ? JSON.parse(e.data) : e.data
								} catch (t) {
									return
								}
							})(e);
							t && t.type && ("paypal-finish.success.framedmodal" === t.type ? (f(), p && p.close()) : "paypal-finish.cancel.framedmodal" === t.type && p && p.close())
						},
						f = () => {
							l(Object(E.g)({
								subredditId: i,
								powerupsCount: s,
								user: r,
								isAnonymous: a
							}))
						};
					return o.a.createElement(I.i, {
						onClick: async () => {
							if (!c) return;
							u(!0);
							const e = await l(Object(E.f)(c, i, a, s));
							if (e) {
								const {
									url: t
								} = e, r = 580, n = 740, o = Math.max(window.screenX + Math.round((window.outerWidth - r) / 2), 0), a = Math.max(window.screenY + Math.round((window.outerHeight - n) / 2), 0);
								p = window.open(`${t}&rnd=${Math.random()}`, "RedditPaypalPayment", `height=${n},width=${r},top=${a},left=${o},modal=yes,alwaysRaised=yes`)
							}
							u(!1)
						},
						className: t,
						disabled: d
					}, R._("Continue to PayPal", null, {
						hk: "1T4BEy"
					}))
				}))),
				q = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				F = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsPremiumButton/index.m.less"),
				B = r.n(F);
			const {
				fbt: D
			} = r("./node_modules/fbt/lib/FbtPublic.js"), V = Object(s.c)({
				isAnonymous: P.d,
				isPending: P.c
			}), U = Object(a.b)(V), W = 12;
			var z = U((function(e) {
					const {
						className: t,
						isAnonymous: r,
						isPending: n,
						subredditId: s
					} = e, c = Object(a.d)();
					return o.a.createElement(I.i, {
						onClick: () => {
							c(Object(w.d)(1)), c(Object(w.e)(s, 1, r))
						},
						className: Object(d.a)(t, B.a.button),
						disabled: n
					}, n ? o.a.createElement(q.a, {
						className: B.a.loadingIcon,
						sizePx: W
					}) : D._("Apply Your Powerup", null, {
						hk: "1PoAEc"
					}))
				})),
				H = r("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				Z = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/PowerupsCount/index.m.less"),
				K = r.n(Z);
			var J = function(e) {
					const {
						className: t,
						onChange: r,
						style: n,
						value: a,
						min: s,
						max: c
					} = e, i = e => r(Math.max(Math.min(a + e, c || Number.POSITIVE_INFINITY), s || 0)), l = c === s, u = Object(H.a)(a);
					return o.a.createElement("div", {
						className: Object(d.a)(t, K.a.container),
						style: n
					}, o.a.createElement("div", {
						className: Object(d.a)(K.a.control, {
							[K.a.locked]: l
						})
					}, !l && o.a.createElement("button", {
						className: Object(d.a)(K.a.button, K.a.decrementButton),
						onClick: () => i(-1)
					}), o.a.createElement("div", {
						className: K.a.value
					}, o.a.createElement(u, {
						className: K.a.icon
					}), o.a.createElement("span", null, a)), !l && o.a.createElement("button", {
						className: Object(d.a)(K.a.button, K.a.incrementButton),
						onClick: () => i(1)
					})))
				},
				X = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/ProgressBar/index.m.less"),
				Y = r.n(X);
			const {
				fbt: G
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var Q = e => {
					const {
						additionalCount: t,
						className: r,
						count: n,
						maxCount: a
					} = e;
					if (!a) return null;
					const s = Math.min(a, n) / a,
						c = Math.min(a, n + (t || 0)) / a;
					return o.a.createElement("div", {
						className: r
					}, o.a.createElement("div", {
						className: Y.a.titleRow
					}, o.a.createElement("span", null, G._("Powerups", null, {
						hk: "DrcXp"
					})), o.a.createElement("span", null, n < a ? `${n}/${a}` : n)), o.a.createElement("div", {
						className: Y.a.barRow
					}, o.a.createElement("div", {
						className: Y.a.track
					}), o.a.createElement("div", {
						className: Y.a.progress,
						style: {
							width: `${100*s}%`
						}
					}), t && o.a.createElement("div", {
						className: Y.a.additionalProgress,
						style: {
							width: `${100*(c-s)}%`,
							left: `${100*s}%`
						}
					})))
				},
				$ = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/index.m.less"),
				ee = r.n($);
			var te = function(e) {
				const {
					className: t,
					count: r,
					maxCount: n,
					onChange: a,
					powerups: s
				} = e, {
					tier: c,
					tiersInfo: i
				} = s, l = (i[c] || i[c - 1]).powerupsCost;
				if (!l) return null;
				const u = Math.min(l, l / 2 + s.count / 2, s.count + (r || 0) / 2) / l;
				return o.a.createElement("div", {
					className: Object(d.a)(t, ee.a.container)
				}, o.a.createElement(Q, {
					additionalCount: r,
					className: ee.a.bar,
					count: s.count,
					maxCount: l
				}), o.a.createElement(J, {
					className: ee.a.count,
					style: {
						left: `${100*u}%`
					},
					value: r,
					min: 1,
					max: n,
					onChange: a
				}))
			};
			const {
				fbt: re
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ne = Object(s.c)({
				isAnonymous: P.d,
				powerupsCount: P.e,
				productOffer: C.a,
				savedCardsPending: j.w,
				stripeTokenPending: j.m
			}), oe = Object(a.b)(ne);
			var ae = Object(h.injectStripe)(oe((function(e) {
					const {
						className: t,
						isAnonymous: r,
						powerupsCount: n,
						productOffer: s,
						savedCardsPending: c,
						stripe: i,
						stripeTokenPending: l,
						subredditId: d
					} = e, u = Object(a.d)(), p = l || c;
					return o.a.createElement(I.i, {
						onClick: () => {
							i && s && u(Object(E.i)(i, s, r, n, v.c.Powerups, d))
						},
						className: t,
						disabled: p || !i
					}, re._("Complete purchase", null, {
						hk: "KaR26"
					}))
				}))),
				se = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/index.m.less"),
				ce = r.n(se);
			const {
				fbt: ie
			} = r("./node_modules/fbt/lib/FbtPublic.js"), le = 100, de = Object(s.c)({
				isAnonymous: P.d,
				isNightMode: x.V,
				paypalErrorMessage: j.d,
				powerups: P.j,
				powerupsCount: P.e,
				productOffer: (e, {
					subredditId: t
				}) => {
					const r = Object(C.e)(e, {
						subredditId: t,
						type: v.c.Powerups
					});
					return r && r[0]
				},
				stripeErrorMessage: j.j,
				userPowerupsData: P.u
			});
			var ue = Object(a.b)(de)((function(e) {
					const {
						isAnonymous: t,
						isNightMode: r,
						onCloseModal: s,
						paypalErrorMessage: c,
						powerups: i,
						powerupsCount: l,
						productOffer: d,
						stripeErrorMessage: u,
						subredditId: p,
						userPowerupsData: m
					} = e, v = Object(a.d)(), [P, C] = Object(n.useState)(b.Bb);
					Object(n.useEffect)(() => {
						v(Object(E.d)()), v(Object(_.selectPaymentMethod)(P))
					}, []);
					const j = Object(y.a)();
					Object(n.useEffect)(() => {
						j(Object(g.e)())
					}, []);
					const x = d && d.pricePackages.length ? d.pricePackages[0].price : 0;
					if (!x || !i) return s(), null;
					const T = (l * x / 100).toFixed(2),
						I = !!(null == m ? void 0 : m.freeCount);
					return o.a.createElement(h.StripeProvider, {
						apiKey: f.a.stripe.apiKey
					}, o.a.createElement(h.Elements, null, o.a.createElement(o.a.Fragment, null, o.a.createElement(te, {
						className: ce.a.progressControl,
						count: l,
						maxCount: I ? 1 : le,
						onChange: e => v(Object(w.d)(e)),
						powerups: i
					}), o.a.createElement("div", {
						className: ce.a.details
					}, o.a.createElement(N.a, {
						className: ce.a.anonymousCheckbox,
						isSelected: t,
						onClick: () => (e => v(Object(w.b)(e)))(!t),
						text: ie._("Powerup anonymously", null, {
							hk: "YXX31"
						})
					}), !I && o.a.createElement("div", {
						className: ce.a.purchaseDetails
					}, ie._({
						"*": "{powerups} Powerups {powerup price} /mo",
						_1: "1 Powerup {powerup price} /mo"
					}, [ie._plural(l, "powerups"), ie._param("powerup price", `$${T.toLocaleString()}`)], {
						hk: "3cOqa5"
					}))), !I && o.a.createElement(o.a.Fragment, null, o.a.createElement("h3", {
						className: ce.a.paymentMethodTitle
					}, ie._("Payment Method", null, {
						hk: "3EbT3q"
					})), o.a.createElement(k.a, {
						className: ce.a.paymentMethodSelector,
						nightmode: r,
						selectedPayment: P,
						onPaymentSelected: e => {
							C(e), v(Object(_.selectPaymentMethod)(e))
						}
					}), P === b.Ab && u && o.a.createElement("div", {
						className: ce.a.errorMessage
					}, u), P === b.Bb && c && o.a.createElement("div", {
						className: ce.a.errorMessage
					}, c), P === b.Ab && o.a.createElement(S.a, {
						nightmode: r,
						className: ce.a.stripeForm,
						shouldDeleteCardWithGql: !0
					}), P === b.Bb && o.a.createElement(A, {
						className: ce.a.button,
						subredditId: p
					}), P === b.Ab && o.a.createElement(ae, {
						className: ce.a.button,
						subredditId: p
					}), o.a.createElement("p", {
						className: ce.a.description
					}, ie._("By completing your purchase, you are agreeing to automatic payments for Powerups and Reddit's {=User Agreement}, {=Privacy Policy}, and {previews terms of use}. Your Powerups subscription will auto-renew monthly for {powerup price} (plus tax where applicable). Cancel anytime in {=User Settings}. Cancel at least 24 hours before your subscription ends to avoid getting charged for the next month. No partial refunds.", [ie._param("=User Agreement", o.a.createElement("a", {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, ie._("User Agreement", null, {
						hk: "3U1KuA"
					}))), ie._param("=Privacy Policy", o.a.createElement("a", {
						href: "https://www.redditinc.com/policies/privacy-policy",
						target: "_blank",
						rel: "noopener noreferrer"
					}, ie._("Privacy Policy", null, {
						hk: "Z8otX"
					}))), ie._param("previews terms of use", o.a.createElement(O.a, null)), ie._param("powerup price", ` $${T.toLocaleString()} `), ie._param("=User Settings", o.a.createElement("a", {
						href: "/settings/premium",
						target: "_blank"
					}, ie._("User Settings", null, {
						hk: "3TNXSe"
					})))], {
						hk: "NLnVj"
					}))), I && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: ce.a.premiumDescription
					}, o.a.createElement("div", {
						className: ce.a.premiumIconWrapper
					}, o.a.createElement(M.a, {
						className: ce.a.premiumIcon
					})), o.a.createElement("span", null, ie._("Premium gives you one monthly Powerup", null, {
						hk: "2cKV1a"
					}))), o.a.createElement(z, {
						className: ce.a.button,
						subredditId: p
					})))))
				})),
				pe = r("./src/reddit/components/Econ/PowerupsPurchaseModal/index.m.less"),
				me = r.n(pe);

			function fe() {
				return (fe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: he
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ye = Object(l.t)(), be = Object(s.c)({
				currentSubreddit: l.q
			}), ge = Object(a.b)(be);
			const we = Object(c.a)(ye(ge((function(e) {
				const {
					currentSubreddit: t
				} = e, r = Object(a.d)(), n = () => r(Object(u.g)(i.a.ECON_POWERUPS_PURCHASE));
				return t ? o.a.createElement("div", {
					className: me.a.inner
				}, o.a.createElement(m.a, {
					className: me.a.header,
					title: he._("Powerup {r/community}", [he._param("r/community", t.displayText)], {
						hk: "2HkBNV"
					}),
					subtitle: he._("Unlock perks for the whole community", null, {
						hk: "faCTq"
					})
				}), o.a.createElement("button", {
					className: me.a.closeButton,
					onClick: n
				}, o.a.createElement(p.a, {
					className: me.a.closeIcon
				})), o.a.createElement(ue, {
					subredditId: t.id,
					onCloseModal: n
				})) : (n(), null)
			}))));
			t.default = e => o.a.createElement(we, fe({}, e, {
				className: Object(d.a)(e.className, me.a.modal)
			}))
		},
		"./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);
			const {
				fbt: a
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function s({
				className: e
			}) {
				return o.a.createElement("a", {
					href: "https://www.redditinc.com/policies/previews-terms",
					target: "_blank",
					rel: "noopener noreferrer",
					className: e
				}, a._("Previews Terms of Use", null, {
					hk: "2eTczn"
				}))
			}
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
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				s = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				i = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				l = r("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				d = r.n(l);
			const u = e => a.a.createElement("label", {
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
					[d.a.isNightMode]: e.nightmode
				})
			}, e.children));
			class p extends a.a.Component {
				constructor() {
					super(...arguments), this.onPaymentSelected = e => {
						const t = e.target.value,
							{
								gildThingId: r,
								onPaymentSelected: n,
								sendEvent: o
							} = this.props;
						switch (t) {
							case "creditCard":
								o(Object(i.e)(r));
								break;
							case "paypal":
								o(Object(i.f)(r))
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
					return a.a.createElement("form", {
						className: e
					}, a.a.createElement("fieldset", null, a.a.createElement(u, {
						nightmode: t,
						selectedValue: r,
						onChange: this.onPaymentSelected,
						value: "paypal"
					}, a.a.createElement("div", {
						className: d.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/paypal.png)`
						}
					})), a.a.createElement(u, {
						nightmode: t,
						selectedValue: r,
						onChange: this.onPaymentSelected,
						value: "creditCard"
					}, a.a.createElement("div", {
						className: d.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/visa.png)`
						}
					}), a.a.createElement("div", {
						className: d.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/mastercard.png)`
						}
					}), a.a.createElement("div", {
						className: d.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/amex.png)`
						}
					}), a.a.createElement("div", {
						className: d.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/discover.jpg)`
						}
					}))))
				}
			}
			t.a = Object(c.c)(p)
		},
		"./src/reddit/components/PowerupsSidebar/common/utils.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				o = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				a = r("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const s = 2,
				c = 5;

			function i(e) {
				return e >= c ? a.a : e >= s ? o.a : n.a
			}
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
				o = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				i = r("./node_modules/fbt/lib/FbtPublic.js"),
				l = r("./src/config.ts"),
				d = r("./src/reddit/components/CheckoutForm/index.tsx"),
				u = r("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				p = r("./src/reddit/components/StripePaymentForm/index.m.less"),
				m = r.n(p);
			var f = e => {
					const {
						onToggleRememberCard: t,
						rememberCard: r
					} = e;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(d.a, {
						className: m.a.creditCard
					}), o.a.createElement(u.a, {
						className: m.a.saveCardCheckbox,
						isSelected: r,
						onClick: t,
						text: i.fbt._("Remember this card", null, {
							hk: "2arVov"
						})
					}), o.a.createElement("a", {
						href: "https://stripe.com",
						target: "_blank"
					}, o.a.createElement("img", {
						className: m.a.poweredByStripeIcon,
						src: `${l.a.assetPath}/img/payment-icons/powered-by-stripe.png`
					})))
				},
				h = r("./src/reddit/icons/svgs/Trash2/index.tsx");
			const {
				fbt: y
			} = r("./node_modules/fbt/lib/FbtPublic.js"), b = e => 2 === e.length ? e : "0" + e, g = e => {
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
			class w extends o.a.PureComponent {
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
					return o.a.createElement("label", {
						className: m.a.savedCardContainer
					}, o.a.createElement("input", {
						type: "radio",
						name: "use-saved-card",
						checked: !0,
						readOnly: !0
					}), o.a.createElement("div", {
						className: Object(c.a)(m.a.cardImageContainer, {
							[m.a.cardImageContainerNightmode]: this.props.nightmode
						})
					}, t ? o.a.createElement("img", {
						className: m.a.brandImage,
						src: t
					}) : o.a.createElement("span", {
						className: m.a.unknownCC
					}, "CC")), o.a.createElement("div", {
						className: m.a.cardDetails
					}, o.a.createElement("span", null, y._("Card ending in {Credit Card last four digits}", [y._param("Credit Card last four digits", e.last4)], {
						hk: "3dMxMn"
					})), o.a.createElement("span", {
						className: m.a.expiry
					}, y._("Expires {month} / {year}", [y._param("month", b(e.expirationMonth.toString())), y._param("year", e.expirationYear.toString())], {
						hk: "3iXzVI"
					}))), this.state.showConfirmText ? o.a.createElement("button", {
						className: m.a.confirmText,
						onClick: this.onConfirmClick
					}, y._("Confirm", null, {
						hk: "gFhpD"
					})) : o.a.createElement("button", {
						onClick: this.onTrashCanClick
					}, o.a.createElement(h.b, {
						className: m.a.icon
					})))
				}
			}
			var E = w,
				_ = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				v = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				P = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				C = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const j = Object(s.c)({
					rememberCard: C.v,
					savedCard: e => Object(C.x)(e)[0],
					stripeInfoLoading: C.w
				}),
				x = Object(a.b)(j, (e, t) => ({
					onClickDeleteCard: r => t.shouldDeleteCardWithGql ? e(Object(_.c)(r)) : e(Object(v.deleteSavedCard)(r)),
					onToggleRememberCard: () => e(Object(v.toggleRememberCard)())
				}));
			class O extends o.a.PureComponent {
				render() {
					const {
						className: e,
						nightmode: t,
						onClickDeleteCard: r,
						onToggleRememberCard: n,
						rememberCard: a,
						savedCard: s,
						stripeInfoLoading: i
					} = this.props, l = i, d = !l && s, u = !l && !d, p = l ? m.a.loadingState : d ? m.a.savedCardState : m.a.formState;
					return o.a.createElement("div", {
						className: Object(c.a)(m.a.stripePaymentForm, p, e)
					}, l && o.a.createElement(P.a, {
						className: m.a.loader,
						sizePx: 60
					}), d && s && o.a.createElement("form", null, o.a.createElement(E, {
						nightmode: t,
						onDelete: r,
						savedCard: s
					})), u && o.a.createElement(f, {
						onToggleRememberCard: n,
						rememberCard: a
					}))
				}
			}
			t.a = x(O)
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
				o = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = r.n(s);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => o.a.createElement("div", {
				className: Object(a.a)(c.a.loadingIcon, t, {
					[c.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				}
			})
		},
		"./src/reddit/helpers/trackers/powerups.ts": function(e, t, r) {
			"use strict";
			r.d(t, "p", (function() {
				return s
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "k", (function() {
				return i
			})), r.d(t, "m", (function() {
				return l
			})), r.d(t, "q", (function() {
				return u
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "i", (function() {
				return f
			})), r.d(t, "n", (function() {
				return h
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "e", (function() {
				return b
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "o", (function() {
				return w
			})), r.d(t, "h", (function() {
				return E
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "l", (function() {
				return v
			})), r.d(t, "b", (function() {
				return P
			}));
			var n = r("./src/reddit/helpers/correlationIdTracker.ts"),
				o = r("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, r) => ({
					...o.defaults(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !1),
					profile: o.profile(e),
					subreddit: o.subreddit(e),
					powerups: {
						...o.subredditPowerups(e),
						freeCount: t,
						paidCount: r
					}
				}),
				s = e => t => ({
					source: e,
					action: "click",
					noun: "powerups_user_badge",
					...a(t),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				c = () => e => ({
					source: "postlist",
					action: "click",
					noun: "powerups_supporters_cta",
					...a(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				i = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powersup_become_hero",
					...a(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				l = () => e => ({
					source: "postlist_supporters_cta",
					action: "click",
					noun: "powersups_see_all_heroes",
					...a(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				d = e => (t, r) => n => ({
					source: e,
					action: "click",
					noun: "powerup_supporter",
					...a(n),
					profile: {
						id: t,
						name: r,
						type: "default"
					}
				}),
				u = d("postlist_supporters_cta"),
				p = d("comm_heroes_modal"),
				m = () => e => ({
					source: "powerups",
					action: "view",
					noun: "post_upsell",
					...a(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				f = () => e => ({
					source: "powerups",
					action: "click",
					noun: "post_upsell",
					...a(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				h = () => e => ({
					source: "powerups",
					action: "click",
					noun: "premium",
					...a(e)
				}),
				y = (e, t) => r => ({
					source: "powerups_modal",
					action: "click",
					noun: "benefit",
					...a(r, e, t)
				}),
				b = (e, t) => r => ({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step",
					...a(r, e, t)
				}),
				g = (e, t) => r => ({
					source: "global",
					action: "view",
					noun: "screen",
					...a(r, e, t),
					actionInfo: {
						pageType: "community_heroes_modal"
					}
				}),
				w = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_emojis",
					...a(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				E = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...a(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				_ = e => t => ({
					source: "powerups",
					action: "click",
					noun: "add_custom_emojis",
					...a(t),
					powerups: {
						...o.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				v = e => t => ({
					source: "powerups",
					action: "save",
					noun: "custom_emojis",
					...a(t),
					powerups: {
						...o.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				P = (e = 1) => t => ({
					source: "powerups",
					action: "delete",
					noun: "custom_emojis",
					...a(t),
					powerups: {
						...o.subredditPowerups(t),
						emojiCount: e
					},
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				})
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/react-redux/es/index.js");

			function o() {
				return Object(n.d)()
			}
		},
		"./src/reddit/icons/svgs/PowerupTier1/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && o.a.createElement("title", null, e.title), o.a.createElement("path", {
				d: "M28.36 73.65a3.47 3.47 0 01-2.55-1.15l-6.94-7.59a3.47 3.47 0 01-.7-3.63l4.5-10.73h-2.73a3.47 3.47 0 01-2.57-1.15l-6.96-7.57a3.47 3.47 0 01-.65-3.67L25.19 2.62A3.47 3.47 0 0128.35.54l26.28-.2a3.47 3.47 0 012.58 1.16l6.94 7.59a3.47 3.47 0 01.16 4.5l-7.48 9.54c.27.16.52.36.73.6l6.93 7.58a3.47 3.47 0 010 4.7L30.91 72.53a3.47 3.47 0 01-2.55 1.12zM25.44 61.9l2.92 3.17 28.9-31.45-3.77-4.11h-3.47a3.47 3.47 0 01-2.61-5.62l9.67-12.32-3.9-4.26-22.48.16L17.02 38.8l4.42 4.8h6.45a3.47 3.47 0 013.2 4.81L25.44 61.9z",
				fill: "#000"
			}), o.a.createElement("path", {
				d: "M34.43 11.6l19.3-7.78 6.98 7.58-17.57 22.21 10.94-7.58 6.98 7.58-33.62 36.57-6.99-7.58L29.1 47l-10.1.06L12 39.5l22.42-27.9z",
				fill: "#FFD635"
			}), o.a.createElement("path", {
				d: "M27.45 4.01l26.28-.2-17.57 22.22h17.92L20.45 62.6l9.68-23.1-18.12-.01L27.45 4z",
				fill: "#fff"
			}), o.a.createElement("path", {
				d: "M36.12 35.25H18.1l11.74-27 15.34-.13-17.53 22.16h16.28L30.39 48.03l5.73-12.78z",
				fill: "#fff"
			}), o.a.createElement("path", {
				d: "M51.17 26.03H33.62l20-3.03-2.45 3.03zM26.44 48.32l4.34-10.37-7.98 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && o.a.createElement("title", null, e.title), o.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), o.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), o.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), o.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), o.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier3/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && o.a.createElement("title", null, e.title), o.a.createElement("path", {
				d: "M27.75 73.66a3.4 3.4 0 01-1.78-.5l-8.53-5.14a3.47 3.47 0 01-1.16-4.7l3.56-6.18h-.1l-8.54-5.18a3.47 3.47 0 01-1.15-4.8l5.78-9.32-7.74-4.68a3.47 3.47 0 01-1.3-4.57L20.15 2.8A3.47 3.47 0 0123.23.94h34.12c.8 0 1.58.27 2.2.78L67.4 8.1a3.47 3.47 0 01.25 5.15L57.52 23.3l5.29 4.5a3.47 3.47 0 010 5.26l-11.15 9.72 4.29 3.66a3.47 3.47 0 010 5.33L29.98 72.84c-.62.53-1.41.82-2.23.82zm-3.82-9.82l3.47 2.12 20.81-16.95-4.18-3.56a3.47 3.47 0 01-1.16-2.67 3.47 3.47 0 011.16-2.63l11.17-9.7-3.33-2.84h-.17a3.47 3.47 0 01-2.44-5.92L60 11.03 56.1 7.86H25.33L14.41 28.91l4.94 2.98h2.1a3.47 3.47 0 012.83 5.33l-6.54 10.6 4.7 2.84h3.11a3.47 3.47 0 013 5.2l-4.62 7.98z",
				fill: "#000"
			}), o.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43-18.67 18.54 6.65-5.17 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#FF4500"
			}), o.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43L53.11 21.7l-1.09 2.5 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#D01427"
			}), o.a.createElement("path", {
				d: "M22.07 4.4h34.8L36.86 24.21l15.17-.03-20.4 18.6h13.55L18.11 65.04 27.36 49 11.84 49l11.4-18.47-14.57-.33 13.4-25.8z",
				fill: "#FF4500"
			}), o.a.createElement("path", {
				d: "M49.56 7.39l-25.65-.1L13.46 27.4l15 .34-11.87 18.88h15.33l-4.22 7.24 10.53-8.74H24.6L44.4 27.09l-14.72.04L49.56 7.39z",
				fill: "#FF8717"
			}), o.a.createElement("path", {
				d: "M30.62 30.06h6.08L22.82 42.71l7.8-12.65zM18.3 24.64l7.5-14.45 16.55.07-14.7 14.59-9.35-.21z",
				fill: "#FFD635"
			}), o.a.createElement("path", {
				d: "M53.18 24.19l-17.55.03 19.7-2.88-2.15 2.85zM47.48 42.82l-17.42-.04 20-3-2.58 3.04zM20.6 54.78l7.01-6.22-4.52 7.84-2.49-1.62zM16.46 36.11l7.1-6.1-4.8 7.75-2.3-1.65z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, r) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/icons/svgs/Trash2/index.m.less"),
				c = r.n(s);
			const i = e => o.a.createElement("svg", {
				className: Object(a.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = i
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return c
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "f", (function() {
				return u
			})), r.d(t, "b", (function() {
				return p
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/makeProductOfferKey/index.ts"),
				a = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = e => e.subreddits.api.productOffers.pending,
				i = (e, {
					subredditId: t,
					type: r
				}) => {
					var n, a, s;
					return t ? e.subreddits.productOffers[Object(o.a)(r, t)] : null === (s = null === (a = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === a ? void 0 : a.productOffers) || void 0 === s ? void 0 : s[Object(o.a)(r)]
				},
				l = (e, {
					subredditId: t
				}) => {
					const r = i(e, {
						subredditId: t,
						type: a.c.Powerups
					});
					return r && r[0]
				},
				d = e => {
					const t = i(e, {
						type: a.c.Premium
					});
					return null == t ? void 0 : t[0]
				},
				u = (e, t) => null == e ? void 0 : e.pricePackages.find(e => e.renewInterval === t),
				p = Object(n.a)(d, s.p, (e, t) => u(e, t))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.61ced125d68f0733ff07.js.map