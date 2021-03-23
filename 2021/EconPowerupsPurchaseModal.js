// https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.47550b0a74dacad89039.js
// Retrieved at 3/23/2021, 9:10:05 AM by Reddit Dataminer v1.0.0
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
				return L
			})), r.d(t, "h", (function() {
				return q
			})), r.d(t, "g", (function() {
				return A
			})), r.d(t, "f", (function() {
				return F
			})), r.d(t, "d", (function() {
				return B
			})), r.d(t, "c", (function() {
				return D
			})), r.d(t, "a", (function() {
				return H
			})), r.d(t, "e", (function() {
				return J
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
				b = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				E = r("./src/reddit/actions/gold/powerups.ts"),
				w = r("./src/reddit/actions/modal.ts"),
				v = r("./node_modules/bignumber.js/bignumber.js"),
				_ = r.n(v),
				C = r("./src/graphql/operations/CancelEconRecurringPayment.json"),
				P = r("./src/graphql/operations/ConfirmPaypalPayment.json"),
				x = r("./src/graphql/operations/CreateEconOrder.json"),
				j = r("./src/graphql/operations/CreatePaypalPayment.json"),
				O = r("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				k = r("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				S = r("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				N = r("./src/graphql/operations/DeleteSavedStripeCard.json"),
				M = r("./src/graphql/operations/UserSavedStripeCards.json"),
				T = r("./src/lib/makeGqlRequest/index.ts");
			const I = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				R = e => e.map(e => e.message).join(" : "),
				L = (e, t, r) => async (o, a, {
					gqlContext: s
				}) => {
					const i = c()(),
						l = await ((e, t, r, n, o) => {
							const a = new _.a(r.pricePackages[0].price).multipliedBy(n).toFixed();
							return Object(T.a)(e, {
								...x,
								variables: {
									input: {
										nonce: t,
										productId: r.id,
										productVersion: r.version,
										pricePackageId: r.pricePackages[0].id,
										currency: r.pricePackages[0].currency,
										price: a,
										productsCount: n.toString(),
										...o
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
						if (t && t.length) throw new Error(R(t));
						if (r) return r.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, q = (e, t, r, o, a) => async (s, i, {
					gqlContext: l
				}) => {
					const d = i(),
						u = () => s(Object(y.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						})));
					let p, f, h = "";
					try {
						h = await s(L(t, a, {
							powerUps: {
								subredditId: r,
								isAnonymous: o
							}
						}))
					} catch (w) {
						return m.c.captureException(w), void(w.message && s(Object(y.stripeApiError)(w.message)))
					}
					s(Object(y.stripeTokenPending)());
					const E = Object(b.x)(d);
					if (E || (p = await s(Object(y.validateAndCreateStripeToken)(e)), f = Object(b.u)(d), p)) try {
						const e = c()(),
							t = E || f ? p && f ? ((e, t, r, n) => Object(T.a)(e, {
								...O,
								variables: {
									nonce: t,
									orderId: r,
									token: n
								}
							}))(l(), e, h, p.id) : E ? ((e, t, r, n) => Object(T.a)(e, {
								...S,
								variables: {
									nonce: t,
									orderId: r,
									cardId: n
								}
							}))(l(), e, h, E) : null : ((e, t, r, n) => Object(T.a)(e, {
								...k,
								variables: {
									nonce: t,
									orderId: r,
									token: n
								}
							}))(l(), e, h, p.id),
							n = await t;
						if (!n || !n.ok) return void u(); {
							const e = n.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return void s(Object(y.stripeApiError)(R(e.errors)));
							if (e.ok && "PAID" !== e.payment.status) return void u();
							const t = Object(g.i)(i());
							t && s(J({
								subredditId: r,
								powerupsCount: a,
								user: t,
								isAnonymous: o
							}))
						}
					} catch (w) {
						m.c.captureException(w), u()
					}
				}, A = (e, t, r, n) => async (o, a, {
					gqlContext: s
				}) => {
					let l = "";
					try {
						l = await o(L(e, n, {
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
							m = await ((e, t, r, n, o) => Object(T.a)(e, {
								...j,
								variables: {
									nonce: t,
									orderId: r,
									successUrl: n,
									cancelUrl: o
								}
							}))(s(), p, l, e, i);
						if (m && m.ok) {
							const e = m.body.data.createEconPayment;
							if (e && e.errors && e.errors.length) return o(Object(y.paypalApiError)(R(e.errors))), null;
							const s = Object(g.i)(a());
							if (e.ok) {
								const {
									status: a
								} = e.payment;
								if ("ACTION_REQUIRED" === a) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === a && s) return o(J({
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
					return o(Object(y.paypalApiError)(I())), null
				}, F = (e, t) => async (r, n, {
					gqlContext: o
				}) => {
					try {
						const n = c()(),
							a = await ((e, t, r, n) => Object(T.a)(e, {
								...P,
								variables: {
									nonce: t,
									paymentId: r,
									token: n
								}
							}))(o(), n, e, t);
						if (a && a.ok) {
							const e = a.body.data.confirmEconPayment;
							if (e && e.errors && e.errors.length) return r(Object(y.paypalApiError)(R(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (a) {
						m.c.captureException(a)
					}
					return r(Object(y.paypalApiError)(I())), !1
				}, B = () => async (e, t, {
					gqlContext: r
				}) => {
					e(Object(y.savedCardsPending)());
					try {
						const t = await (e => Object(T.a)(e, {
							...M,
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
				}, D = e => async (t, r, {
					gqlContext: n
				}) => {
					t(Object(y._deleteSavedCard)(e));
					try {
						const t = await ((e, t) => Object(T.a)(e, {
							...N,
							variables: {
								cardId: t
							}
						}))(n(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: o
							} = r.data.deleteEconPaymentMethod;
						if (o && o.length) throw new Error(R(o))
					} catch (o) {
						m.c.captureException(o)
					}
				}, V = Object(p.a)(h.N), U = Object(p.a)(h.O), z = Object(p.a)(h.P), W = e => async (t, r) => {
					await t(V(e)), t(Object(d.f)({
						kind: f.b.Error,
						duration: d.a,
						text: e
					}))
				}, H = (e, t, r) => async (o, a, {
					gqlContext: s
				}) => {
					o(U({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const a = await ((e, t) => Object(T.a)(e, {
							...C,
							variables: {
								orderId: t
							}
						}))(s(), e);
						if (a.ok) {
							const e = a.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void o(W(n[0].message));
							o(z({
								subredditId: t,
								allocatedAt: r
							}))
						} else o(W(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (c) {
						m.c.captureException(c), o(W(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, Z = Object(p.a)(h.R), J = e => async (t, r) => {
					t(Z(e)), t(Object(E.f)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(w.g)(l.a.ECON_POWERUPS_PURCHASE)), t(Object(d.f)({
						kind: f.b.SuccessCommunityGreen,
						duration: d.a,
						text: n.fbt._({
							"*": "Purchase of {number of Powerups} Powerups is complete.",
							_1: "Purchase of 1 Powerup is complete."
						}, [n.fbt._plural(e.powerupsCount, "number of Powerups")], {
							hk: "28cBuw"
						})
					}))
				}
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
				return E
			})), r.d(t, "selectSavedCard", (function() {
				return w
			})), r.d(t, "_deleteSavedCard", (function() {
				return v
			})), r.d(t, "deleteSavedCard", (function() {
				return _
			})), r.d(t, "savedCardsPending", (function() {
				return C
			})), r.d(t, "savedCardsSuccess", (function() {
				return P
			})), r.d(t, "loadSavedCards", (function() {
				return x
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
				}, g = Object(a.a)(c.x), E = Object(a.a)(c.G), w = Object(a.a)(c.B), v = Object(a.a)(c.g), _ = e => async (t, r, {
					apiContext: n
				}) => {
					t(v(e));
					try {
						const t = await Object(s.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (a) {
						o.c.captureException(a)
					}
				}, C = Object(a.a)(c.y), P = Object(a.a)(c.z), x = () => async (e, t, {
					apiContext: r
				}) => {
					e(C());
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
						e(P(n)), n[0] && e(w(n[0].cardId))
					} catch (n) {
						o.c.captureException(n), e(P([]))
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
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3-wzlsd2L9K9BE7yms9IhJ",
				imageContainer: "_2moFyXtJlZerLLuTvZ9TYQ",
				image: "_1TAPJ7kkx6z02TSzVnhVLW",
				title: "_258n2TylpikH2fhZLhlAgr",
				subtitle: "_1AYSLhpiU1fIwgPPxu2Xuy"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./src/config.ts"),
				s = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less"),
				i = r.n(c);
			t.a = e => o.a.createElement("header", {
				className: Object(s.a)(i.a.container, e.className)
			}, o.a.createElement("div", {
				className: i.a.imageContainer
			}, o.a.createElement("picture", null, o.a.createElement("source", {
				srcSet: `${a.a.assetPath}/img/powerups/rotating-bolt.webp`,
				type: "image/webp"
			}), o.a.createElement("source", {
				srcSet: `${a.a.assetPath}/img/powerups/powerup.png`,
				type: "image/png"
			}), o.a.createElement("img", {
				className: i.a.image,
				src: `${a.a.assetPath}/img/powerups/powerup.png`
			}))), o.a.createElement("div", null, o.a.createElement("h2", {
				className: i.a.title
			}, e.title), o.a.createElement("h3", {
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
				E = r("./src/reddit/actions/gold/powerups.ts"),
				w = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				v = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				_ = r("./src/reddit/models/Gold/ProductOffer.ts"),
				C = r("./src/reddit/selectors/gold/powerups.ts"),
				P = r("./src/reddit/selectors/gold/productOffers.ts"),
				x = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				j = r("./src/reddit/selectors/user.ts"),
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
				currentUser: j.i,
				isAnonymous: C.c,
				powerupsCount: C.d,
				productOffer: P.a
			});
			var q = Object(a.b)(L)(o.a.memo((function(e) {
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
							l(Object(w.e)({
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
							const e = await l(Object(w.g)(c, i, a, s));
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
				A = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				F = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsPremiumButton/index.m.less"),
				B = r.n(F);
			const {
				fbt: D
			} = r("./node_modules/fbt/lib/FbtPublic.js"), V = Object(s.c)({
				isAnonymous: C.c,
				isPending: C.b
			}), U = Object(a.b)(V), z = 12;
			var W = U((function(e) {
					const {
						className: t,
						isAnonymous: r,
						isPending: n,
						subredditId: s
					} = e, c = Object(a.d)();
					return o.a.createElement(I.i, {
						onClick: () => {
							c(Object(E.c)(1)), c(Object(E.d)(s, 1, r))
						},
						className: Object(d.a)(t, B.a.button),
						disabled: n
					}, n ? o.a.createElement(A.a, {
						className: B.a.loadingIcon,
						sizePx: z
					}) : D._("Apply Your Free Powerup", null, {
						hk: "fwfCU"
					}))
				})),
				H = r("./src/reddit/models/Gold/Powerups/index.ts"),
				Z = r("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				J = r("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				K = r("./src/reddit/icons/svgs/PowerupTier3/index.tsx"),
				X = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/PowerupsCount/index.m.less"),
				Y = r.n(X);
			var G = function(e) {
					const {
						className: t,
						onChange: r,
						style: n,
						value: a,
						min: s,
						max: c
					} = e, i = e => r(Math.max(Math.min(a + e, c || Number.POSITIVE_INFINITY), s || 0)), l = c === s, u = a === H.b ? Z.a : a < H.c ? J.a : K.a;
					return o.a.createElement("div", {
						className: Object(d.a)(t, Y.a.container),
						style: n
					}, o.a.createElement("div", {
						className: Object(d.a)(Y.a.control, {
							[Y.a.locked]: l
						})
					}, !l && o.a.createElement("button", {
						className: Object(d.a)(Y.a.button, Y.a.decrementButton),
						onClick: () => i(-1)
					}), o.a.createElement("div", {
						className: Y.a.value
					}, o.a.createElement(u, {
						className: Y.a.icon
					}), o.a.createElement("span", null, a)), !l && o.a.createElement("button", {
						className: Object(d.a)(Y.a.button, Y.a.incrementButton),
						onClick: () => i(1)
					})))
				},
				Q = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/ProgressBar/index.m.less"),
				$ = r.n(Q);
			const {
				fbt: ee
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var te = e => {
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
						className: $.a.titleRow
					}, o.a.createElement("span", null, ee._("Powerups", null, {
						hk: "DrcXp"
					})), o.a.createElement("span", null, n < a ? `${n}/${a}` : n)), o.a.createElement("div", {
						className: $.a.barRow
					}, o.a.createElement("div", {
						className: $.a.track
					}), o.a.createElement("div", {
						className: $.a.progress,
						style: {
							width: `${100*s}%`
						}
					}), t && o.a.createElement("div", {
						className: $.a.additionalProgress,
						style: {
							width: `${100*(c-s)}%`,
							left: `${100*s}%`
						}
					})))
				},
				re = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/index.m.less"),
				ne = r.n(re);
			var oe = function(e) {
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
					className: Object(d.a)(t, ne.a.container)
				}, o.a.createElement(te, {
					additionalCount: r,
					className: ne.a.bar,
					count: s.count,
					maxCount: l
				}), o.a.createElement(G, {
					className: ne.a.count,
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
				fbt: ae
			} = r("./node_modules/fbt/lib/FbtPublic.js"), se = Object(s.c)({
				isAnonymous: C.c,
				powerupsCount: C.d,
				productOffer: P.a,
				savedCardsPending: x.v,
				stripeTokenPending: x.m
			}), ce = Object(a.b)(se);
			var ie = Object(h.injectStripe)(ce((function(e) {
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
							i && s && u(Object(w.h)(i, s, d, r, n))
						},
						className: t,
						disabled: p || !i
					}, ae._("Complete purchase", null, {
						hk: "KaR26"
					}))
				}))),
				le = r("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/index.m.less"),
				de = r.n(le);
			const {
				fbt: ue
			} = r("./node_modules/fbt/lib/FbtPublic.js"), pe = 100, me = Object(s.c)({
				isAnonymous: C.c,
				isNightmode: j.V,
				paypalErrorMessage: x.d,
				powerups: C.i,
				powerupsCount: C.d,
				productOffer: (e, {
					subredditId: t
				}) => {
					const r = Object(P.c)(e, {
						subredditId: t,
						type: _.b.Powerups
					});
					return r && r[0]
				},
				stripeErrorMessage: x.j,
				userPowerupsData: C.s
			});
			var fe = Object(a.b)(me)((function(e) {
					const {
						isAnonymous: t,
						isNightmode: r,
						onCloseModal: s,
						paypalErrorMessage: c,
						powerups: i,
						powerupsCount: l,
						productOffer: d,
						stripeErrorMessage: u,
						subredditId: p,
						userPowerupsData: m
					} = e, _ = Object(a.d)(), [C, P] = Object(n.useState)(b.yb);
					Object(n.useEffect)(() => {
						_(Object(w.d)()), _(Object(v.selectPaymentMethod)(C))
					}, []);
					const x = Object(y.a)();
					Object(n.useEffect)(() => {
						x(Object(g.d)())
					}, []);
					const j = d && d.pricePackages.length ? d.pricePackages[0].price : 0;
					if (!j || !i) return s(), null;
					const T = (l * j / 100).toFixed(2),
						I = !!(null == m ? void 0 : m.freeCount);
					return o.a.createElement(h.StripeProvider, {
						apiKey: f.a.stripe.apiKey
					}, o.a.createElement(h.Elements, null, o.a.createElement(o.a.Fragment, null, o.a.createElement(oe, {
						className: de.a.progressControl,
						count: l,
						maxCount: I ? 1 : pe,
						onChange: e => _(Object(E.c)(e)),
						powerups: i
					}), o.a.createElement("div", {
						className: de.a.details
					}, o.a.createElement(N.a, {
						className: de.a.anonymousCheckbox,
						isSelected: t,
						onClick: () => (e => _(Object(E.a)(e)))(!t),
						text: ue._("Powerup anonymously", null, {
							hk: "YXX31"
						})
					}), !I && o.a.createElement("div", {
						className: de.a.purchaseDetails
					}, ue._({
						"*": "{powerups} Powerups {powerup price} /mo",
						_1: "1 Powerup {powerup price} /mo"
					}, [ue._plural(l, "powerups"), ue._param("powerup price", `$${T.toLocaleString()}`)], {
						hk: "3cOqa5"
					}))), !I && o.a.createElement(o.a.Fragment, null, o.a.createElement("h3", {
						className: de.a.paymentMethodTitle
					}, ue._("Payment Method", null, {
						hk: "3EbT3q"
					})), o.a.createElement(k.a, {
						className: de.a.paymentMethodSelector,
						nightmode: r,
						selectedPayment: C,
						onPaymentSelected: e => {
							P(e), _(Object(v.selectPaymentMethod)(e))
						}
					}), C === b.xb && u && o.a.createElement("div", {
						className: de.a.errorMessage
					}, u), C === b.yb && c && o.a.createElement("div", {
						className: de.a.errorMessage
					}, c), C === b.xb && o.a.createElement(S.a, {
						nightmode: r,
						className: de.a.stripeForm,
						shouldDeleteCardWithGql: !0
					}), C === b.yb && o.a.createElement(q, {
						className: de.a.button,
						subredditId: p
					}), C === b.xb && o.a.createElement(ie, {
						className: de.a.button,
						subredditId: p
					})), I && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: de.a.premiumDescription
					}, o.a.createElement("div", {
						className: de.a.premiumIconWrapper
					}, o.a.createElement(M.a, {
						className: de.a.premiumIcon
					})), o.a.createElement("span", null, ue._("Premium gives you one free Powerup", null, {
						hk: "1Rlk9N"
					}))), o.a.createElement(W, {
						className: de.a.button,
						subredditId: p
					})), o.a.createElement("p", {
						className: de.a.description
					}, ue._("By completing your purchase, you are agreeing to automatic payments for Powerups and Reddit's {=User Agreement}, {=Privacy Policy}, and {previews terms of use}. Your Powerups subscription will auto-renew monthly for {powerup price} (plus tax where applicable). Cancel anytime in {=User Settings}. Cancel at least 24 hours before your subscription ends to avoid getting charged for the next month. No partial refunds.", [ue._param("=User Agreement", o.a.createElement("a", {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, ue._("User Agreement", null, {
						hk: "3U1KuA"
					}))), ue._param("=Privacy Policy", o.a.createElement("a", {
						href: "https://www.redditinc.com/policies/privacy-policy",
						target: "_blank",
						rel: "noopener noreferrer"
					}, ue._("Privacy Policy", null, {
						hk: "Z8otX"
					}))), ue._param("previews terms of use", o.a.createElement(O.a, null)), ue._param("powerup price", ` $${T.toLocaleString()} `), ue._param("=User Settings", o.a.createElement("a", {
						href: "/settings/premium",
						target: "_blank"
					}, ue._("User Settings", null, {
						hk: "3TNXSe"
					})))], {
						hk: "NLnVj"
					})))))
				})),
				he = r("./src/reddit/components/Econ/PowerupsPurchaseModal/index.m.less"),
				ye = r.n(he);

			function be() {
				return (be = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: ge
			} = r("./node_modules/fbt/lib/FbtPublic.js"), Ee = Object(l.t)(), we = Object(s.c)({
				currentSubreddit: l.q
			}), ve = Object(a.b)(we);
			const _e = Object(c.a)(Ee(ve((function(e) {
				const {
					currentSubreddit: t
				} = e, r = Object(a.d)(), n = () => r(Object(u.g)(i.a.ECON_POWERUPS_PURCHASE));
				return t ? o.a.createElement("div", {
					className: ye.a.inner
				}, o.a.createElement(m.a, {
					className: ye.a.header,
					title: ge._("Powerup {r/community}", [ge._param("r/community", t.displayText)], {
						hk: "2HkBNV"
					}),
					subtitle: ge._("Unlock perks for the whole community", null, {
						hk: "faCTq"
					})
				}), o.a.createElement("button", {
					className: ye.a.closeButton,
					onClick: n
				}, o.a.createElement(p.a, {
					className: ye.a.closeIcon
				})), o.a.createElement(fe, {
					subredditId: t.id,
					onCloseModal: n
				})) : (n(), null)
			}))));
			t.default = e => o.a.createElement(_e, be({}, e, {
				className: Object(d.a)(e.className, ye.a.modal)
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
				isNightmode: "_1j5SaVBaG6I__sQRpYS4-I",
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
					[d.a.isNightmode]: e.nightmode
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
			class E extends o.a.PureComponent {
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
			var w = E,
				v = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				_ = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				C = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				P = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const x = Object(s.c)({
					rememberCard: P.u,
					savedCard: e => Object(P.w)(e)[0],
					stripeInfoLoading: P.v
				}),
				j = Object(a.b)(x, (e, t) => ({
					onClickDeleteCard: r => t.shouldDeleteCardWithGql ? e(Object(v.c)(r)) : e(Object(_.deleteSavedCard)(r)),
					onToggleRememberCard: () => e(Object(_.toggleRememberCard)())
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
					}, l && o.a.createElement(C.a, {
						className: m.a.loader,
						sizePx: 60
					}), d && s && o.a.createElement("form", null, o.a.createElement(w, {
						nightmode: t,
						onDelete: r,
						savedCard: s
					})), u && o.a.createElement(f, {
						onToggleRememberCard: n,
						rememberCard: a
					}))
				}
			}
			t.a = j(O)
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
			r.d(t, "k", (function() {
				return s
			})), r.d(t, "i", (function() {
				return c
			})), r.d(t, "g", (function() {
				return i
			})), r.d(t, "f", (function() {
				return l
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "j", (function() {
				return p
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "a", (function() {
				return f
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "b", (function() {
				return y
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
					source: "powerups",
					action: "view",
					noun: "post_upsell",
					...a(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				l = () => e => ({
					source: "powerups",
					action: "click",
					noun: "post_upsell",
					...a(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				d = (e, t) => r => ({
					source: "powerups_modal",
					action: "click",
					noun: "benefit",
					...a(r, e, t)
				}),
				u = (e, t) => r => ({
					source: "powerups_modal",
					action: "view",
					noun: "purchase_step",
					...a(r, e, t)
				}),
				p = () => e => ({
					source: "powerups",
					action: "click",
					noun: "unlock_emojis",
					...a(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				m = () => e => ({
					source: "meta",
					action: "open",
					noun: "emote_picker",
					...a(e),
					correlationId: Object(n.d)(n.a.PowerupsFlow, !0)
				}),
				f = e => t => ({
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
				h = e => t => ({
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
				y = (e = 1) => t => ({
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
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "a", (function() {
				return c
			}));
			var n = r("./src/lib/makeProductOfferKey/index.ts"),
				o = r("./src/reddit/models/Gold/ProductOffer.ts");
			const a = e => e.subreddits.api.productOffers.pending,
				s = (e, {
					subredditId: t,
					type: r
				}) => e.subreddits.productOffers[Object(n.a)(t, r)],
				c = (e, {
					subredditId: t
				}) => {
					const r = s(e, {
						subredditId: t,
						type: o.b.Powerups
					});
					return r && r[0]
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.47550b0a74dacad89039.js.map