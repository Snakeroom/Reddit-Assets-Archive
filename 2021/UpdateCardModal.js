// https://www.redditstatic.com/desktop2x/UpdateCardModal.304dede91c579baf9994.js
// Retrieved at 4/20/2021, 7:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["UpdateCardModal"], {
		"./node_modules/react-stripe-elements/es/components/Element.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/react/index.js")),
				o = i(n("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
				s = i(n("./node_modules/react-stripe-elements/es/utils/shallowEqual.js")),
				a = n("./node_modules/react-stripe-elements/es/components/Elements.js");

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function l(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}

			function c(e, t) {
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
						l(this, n);
						var o = c(this, t.call(this, e, r));
						o.handleRef = function(e) {
							o._ref = e
						}, o._element = null;
						var s = u(o.props);
						return o._options = s, o
					}
					return d(n, t), n.prototype.componentDidMount = function() {
						var t = this;
						this.context.addElementsLoadListener((function(n) {
							var r = n.create(e, t._options);
							t._element = r, t._setupEventListeners(r), r.mount(t._ref), (i.impliedTokenType || i.impliedSourceType) && t.context.registerElement(r, i.impliedTokenType, i.impliedSourceType)
						}))
					}, n.prototype.componentWillReceiveProps = function(e) {
						var t = u(e);
						0 === Object.keys(t).length || (0, s.default)(t, this._options) || (this._options = t, this._element && this._element.update(t))
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
				}, t.contextTypes = a.elementContextTypes, t.displayName = m(e) + "Element", n
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
				s = i(n("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
				a = n("./node_modules/react-stripe-elements/es/components/Provider.js");

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function l(e) {
				if (Array.isArray(e)) {
					for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
					return n
				}
				return Array.from(e)
			}
			var c = t.injectContextTypes = {
					getRegisteredElements: s.default.func.isRequired
				},
				d = t.elementContextTypes = {
					addElementsLoadListener: s.default.func.isRequired,
					registerElement: s.default.func.isRequired,
					unregisterElement: s.default.func.isRequired
				},
				p = function(e) {
					function t(n, o) {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var s = function(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this, n, o));
						return s.handleRegisterElement = function(e, t, n) {
							s.setState((function(o) {
								return {
									registeredElements: [].concat(l(o.registeredElements), [r({
										element: e
									}, t ? {
										impliedTokenType: t
									} : {}, n ? {
										impliedSourceType: n
									} : {})])
								}
							}))
						}, s.handleUnregisterElement = function(e) {
							s.setState((function(t) {
								return {
									registeredElements: t.registeredElements.filter((function(t) {
										return t.element !== e
									}))
								}
							}))
						}, s.state = {
							registeredElements: []
						}, s
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
			p.childContextTypes = r({}, c, d), p.contextTypes = a.providerContextTypes, p.defaultProps = {
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
				o = l(n("./node_modules/react/index.js")),
				s = l(n("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
				a = l(n("./node_modules/react-stripe-elements/es/utils/shallowEqual.js")),
				i = n("./node_modules/react-stripe-elements/es/components/Elements.js");

			function l(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var c = function() {},
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
						var s = d(n);
						return o._options = s, o
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
						0 === Object.keys(t).length || (0, a.default)(t, this._options) || (this._options = t, this._element.update(t))
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
				id: s.default.string,
				className: s.default.string,
				onBlur: s.default.func,
				onClick: s.default.func,
				onFocus: s.default.func,
				onReady: s.default.func,
				paymentRequest: s.default.shape({
					canMakePayment: s.default.func.isRequired,
					on: s.default.func.isRequired,
					show: s.default.func.isRequired
				}).isRequired
			}, p.defaultProps = {
				id: void 0,
				className: void 0,
				onBlur: c,
				onClick: c,
				onFocus: c,
				onReady: c
			}, p.contextTypes = i.elementContextTypes, t.default = p
		},
		"./node_modules/react-stripe-elements/es/components/Provider.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.providerContextTypes = void 0;
			var r = s(n("./node_modules/react/index.js")),
				o = s(n("./node_modules/react-stripe-elements/node_modules/prop-types/index.js"));

			function s(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var a = t.providerContextTypes = {
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
				l = function(e) {
					if (e && e.elements && e.createSource && e.createToken) return e;
					throw new Error("Please pass a valid Stripe object to StripeProvider. You can obtain a Stripe object by calling 'Stripe(...)' with your publishable key.")
				},
				c = function(e) {
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
								s = o.apiKey,
								a = (o.children, o.stripe, function(e, t) {
									var n = {};
									for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
									return n
								}(o, ["apiKey", "children", "stripe"]));
							r._meta = {
								tag: "sync",
								stripe: i(s, a)
							}
						} else if (r.props.stripe) r._meta = {
							tag: "sync",
							stripe: l(r.props.stripe)
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
							var r = l(e.stripe);
							this._meta.stripe = r, this._listeners.forEach((function(e) {
								e(r)
							}))
						}
					}, t.prototype.render = function() {
						return r.default.Children.only(this.props.children)
					}, t
				}(r.default.Component);
			c.propTypes = {
				apiKey: o.default.string,
				stripe: o.default.object,
				children: o.default.node
			}, c.childContextTypes = a, c.defaultProps = {
				apiKey: void 0,
				stripe: void 0,
				children: null
			}, t.default = c
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
				s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				},
				a = n("./node_modules/react/index.js"),
				i = (r = a) && r.__esModule ? r : {
					default: r
				},
				l = n("./node_modules/react-stripe-elements/es/components/Elements.js"),
				c = n("./node_modules/react-stripe-elements/es/components/Provider.js");

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
					a = r.withRef,
					f = void 0 !== a && a;
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
								if (t && "object" === (void 0 === t ? "undefined" : s(t))) {
									var r = t,
										a = r.type,
										i = d(r, ["type"]),
										l = "string" == typeof a ? a : "auto",
										c = o.requireElement("impliedTokenType", l);
									return e.createToken(c, i)
								}
								if ("string" == typeof t) {
									var p = t;
									return e.createToken(p, n)
								}
								throw new Error("Invalid options passed to createToken. Expected an object, got " + (void 0 === t ? "undefined" : s(t)) + ".")
							}
						}, o.wrappedCreateSource = function(e) {
							return function() {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
								if (t && "object" === (void 0 === t ? "undefined" : s(t))) {
									if ("string" != typeof t.type) throw new Error("Invalid Source type passed to createSource. Expected string, got " + s(t.type) + ".");
									var n = o.findElement("impliedSourceType", t.type);
									return n ? e.createSource(n, t) : e.createSource(t)
								}
								throw new Error("Invalid options passed to createSource. Expected an object, got " + (void 0 === t ? "undefined" : s(t)) + ".")
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
						if (!f) throw new Error("To access the wrapped instance, the `{withRef: true}` option must be set when calling `injectStripe()`");
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
							ref: f ? function(e) {
								t.wrappedInstance = e
							} : null
						}))
					}, n
				}(i.default.Component), t.contextTypes = o({}, c.providerContextTypes, l.injectContextTypes), t.displayName = "InjectStripe(" + (e.displayName || e.name || "Component") + ")", n
			}
		},
		"./node_modules/react-stripe-elements/es/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.IdealBankElement = t.IbanElement = t.PaymentRequestButtonElement = t.PostalCodeElement = t.CardCVCElement = t.CardExpiryElement = t.CardNumberElement = t.CardElement = t.Elements = t.injectStripe = t.StripeProvider = void 0;
			var r = l(n("./node_modules/react-stripe-elements/es/components/Provider.js")),
				o = l(n("./node_modules/react-stripe-elements/es/components/inject.js")),
				s = l(n("./node_modules/react-stripe-elements/es/components/Elements.js")),
				a = l(n("./node_modules/react-stripe-elements/es/components/Element.js")),
				i = l(n("./node_modules/react-stripe-elements/es/components/PaymentRequestButtonElement.js"));

			function l(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var c = (0, a.default)("card", {
					impliedTokenType: "card",
					impliedSourceType: "card"
				}),
				d = (0, a.default)("cardNumber", {
					impliedTokenType: "card",
					impliedSourceType: "card"
				}),
				p = (0, a.default)("cardExpiry"),
				u = (0, a.default)("cardCvc"),
				m = (0, a.default)("postalCode"),
				f = (0, a.default)("iban", {
					impliedTokenType: "bank_account",
					impliedSourceType: "sepa_debit"
				}),
				y = (0, a.default)("idealBank", {
					impliedSourceType: "ideal"
				});
			t.StripeProvider = r.default, t.injectStripe = o.default, t.Elements = s.default, t.CardElement = c, t.CardNumberElement = d, t.CardExpiryElement = p, t.CardCVCElement = u, t.PostalCodeElement = m, t.PaymentRequestButtonElement = i.default, t.IbanElement = f, t.IdealBankElement = y
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

			function s() {}
			s.resetWarningCache = o, e.exports = function() {
				function e(e, t, n, o, s, a) {
					if (a !== r) {
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
					checkPropTypes: s,
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
				s = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./node_modules/react-stripe-elements/es/index.js"),
				d = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				p = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				u = n("./src/reddit/components/CheckoutForm/index.m.less"),
				m = n.n(u);
			const f = Object(i.c)({
					cardCvcValidation: p.f,
					cardExpiryValidation: p.g,
					cardName: p.h,
					cardNumberValidation: p.i,
					nameOnCardValidation: p.k,
					postalCodeValidation: p.l
				}),
				y = Object(a.b)(f, (e, t) => ({
					onCardElementChange: t => e(Object(d.cardElementChange)(t)),
					onNameInput: t => e(Object(d.cardNameInput)({
						cardName: t
					}))
				}));
			class h extends s.a.Component {
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
						cardNumberValidation: a,
						onCardElementChange: i,
						nameOnCardValidation: d,
						postalCodeValidation: p
					} = this.props, {
						cardNumberReady: u,
						cardExpiryReady: f,
						cardCVCReady: y,
						postalCodeReady: h
					} = this.state, _ = {
						base: {
							lineHeight: "40px",
							color: this.computedStyle.getPropertyValue("--newRedditTheme-bodyText"),
							"::placeholder": {
								color: this.computedStyle.getPropertyValue("--newRedditTheme-metaText")
							}
						}
					};
					return s.a.createElement("div", {
						className: Object(l.a)(m.a.checkoutForm, e)
					}, s.a.createElement("div", {
						className: m.a.formCellWide
					}, s.a.createElement("input", {
						className: Object(l.a)(m.a.cardInput, m.a.nameOnCard, {
							[m.a.cardInputError]: !!d
						}),
						type: "text",
						placeholder: r.fbt._("NAME ON CARD", null, {
							hk: "IgrlQ"
						}).toString(),
						onChange: this.onChange,
						value: o
					})), s.a.createElement("div", {
						className: m.a.formCell
					}, s.a.createElement(c.CardNumberElement, {
						className: Object(l.a)(m.a.cardInput, {
							[m.a.cardInputError]: !!a
						}),
						onChange: i,
						onReady: this.onCardNumberReady,
						placeholder: r.fbt._("CARD NUMBER", null, {
							hk: "3pqMxG"
						}).toString(),
						style: _
					}), !u && s.a.createElement("div", {
						className: m.a.elementPlaceholder
					}, r.fbt._("CARD NUMBER", null, {
						hk: "3pqMxG"
					}))), s.a.createElement("div", {
						className: m.a.formCell
					}, s.a.createElement(c.CardExpiryElement, {
						className: Object(l.a)(m.a.cardInput, {
							[m.a.cardInputError]: !!n
						}),
						onChange: i,
						onReady: this.onCardExpiryReady,
						placeholder: r.fbt._("MM/YY", null, {
							hk: "Hou17"
						}).toString(),
						style: _
					}), !f && s.a.createElement("div", {
						className: m.a.elementPlaceholder
					}, r.fbt._("MM/YY", null, {
						hk: "Hou17"
					}))), s.a.createElement("div", {
						className: m.a.formCell
					}, s.a.createElement(c.CardCVCElement, {
						className: Object(l.a)(m.a.cardInput, {
							[m.a.cardInputError]: !!t
						}),
						onChange: i,
						onReady: this.onCardCVCReady,
						placeholder: r.fbt._("CCV", null, {
							hk: "dZzZJ"
						}).toString(),
						style: _
					}), !y && s.a.createElement("div", {
						className: m.a.elementPlaceholder
					}, r.fbt._("CCV", null, {
						hk: "dZzZJ"
					}))), s.a.createElement("div", {
						className: m.a.formCell
					}, s.a.createElement(c.PostalCodeElement, {
						className: Object(l.a)(m.a.cardInput, {
							[m.a.cardInputError]: !!p
						}),
						onChange: i,
						onReady: this.onPostalCodeReady,
						placeholder: r.fbt._("ZIP CODE", null, {
							hk: "2lJZ4j"
						}).toString(),
						style: _
					}), !h && s.a.createElement("div", {
						className: m.a.elementPlaceholder
					}, r.fbt._("ZIP CODE", null, {
						hk: "2lJZ4j"
					}))))
				}
			}
			t.a = Object(c.injectStripe)(y(h))
		},
		"./src/reddit/components/UpdateCardModal/index.m.less": function(e, t, n) {
			e.exports = {
				updateCardModal: "os7Z68gjeVRl7RuPuGdC2",
				descriptionText: "YkayV3NPfGSSJNBYEMGfk",
				poweredByStripeIcon: "G3cUFBALhoZEboe63P47m",
				agreementLink: "_1a6aYfR0raBv5P0pBXS2JB",
				updateButton: "ysTohje3Abv2wK8ZJRYjg"
			}
		},
		"./src/reddit/components/UpdateCardModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				i = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/react-stripe-elements/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				p = n("./src/reddit/components/UpdateCardModal/index.m.less"),
				u = n.n(p),
				m = n("./src/higherOrderComponents/asModal/index.tsx"),
				f = n("./src/lib/constants/index.ts"),
				y = n("./src/lib/makeActionCreator/index.ts"),
				h = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				_ = n("./src/reddit/actions/modal.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				E = n("./src/reddit/components/Settings/PremiumForm.tsx"),
				v = n("./src/reddit/endpoints/gold/purchase.ts"),
				C = n("./src/reddit/models/Toast/index.ts"),
				g = n("./src/reddit/selectors/activeModalId.ts"),
				w = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				j = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const x = Object(y.a)(j.f),
				O = () => async (e, t) => {
					Object(g.b)(E.a)(t()) && (e(Object(_.i)(E.a)), e(x()))
				}, S = Object(y.a)(j.I), R = Object(y.a)(j.H), P = e => {
					switch (e && e.error && e.error.type) {
						case f.E.USER_DOESNT_EXIST:
						case f.E.VALIDATION_ERROR:
							return o.fbt._("Looks like you entered an invalid user.", null, {
								hk: "Cv0iO"
							});
						case f.E.NO_STRIPE_SUBSCRIPTION:
							return o.fbt._("Sorry, but there's no Stripe customer associated with this account.", null, {
								hk: "2hv2Ey"
							});
						case f.E.CREDIT_CARD_FAILURE:
							return e.error && e.error.fields && e.error.fields[0] && e.error.fields[0].msg || o.fbt._("Something went wrong", null, {
								hk: "ie9Ol"
							});
						case f.E.AUTHENTICATION_ERROR:
							return o.fbt._("There was an authentication error", null, {
								hk: "12YR0w"
							});
						default:
							return o.fbt._("Something went wrong", null, {
								hk: "ie9Ol"
							})
					}
				}, T = e => async t => {
					await t(R()), t(Object(b.f)({
						kind: C.b.Error,
						duration: b.a,
						text: e
					}))
				}, k = Object(y.a)(j.J), N = e => async (t, n) => {
					t(k(e)), t(O());
					const r = o.fbt._("You successfully updated your payment information!", null, {
						hk: "3m4P1N"
					});
					t(Object(b.f)({
						kind: C.b.SuccessCommunity,
						text: r
					}))
				};
			var I = n("./src/reddit/components/CheckoutForm/index.tsx"),
				M = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				L = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				q = n("./src/reddit/controls/TextButton/index.tsx"),
				B = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const A = Object(c.c)({
					isPending: w.y
				}),
				F = Object(i.b)(A, (e, t) => ({
					closeModal: () => e(O()),
					submitCard: t => e((e => async (t, n, {
						apiContext: r
					}) => {
						t(S()), t(Object(h.stripeTokenPending)());
						const s = await t(Object(h.validateAndCreateStripeToken)(e));
						if (!s) {
							const e = Object(w.j)(n()) || o.fbt._("Looks like something went wrong validating your credit card.", null, {
								hk: "4eGqpL"
							});
							return await t(T(e))
						}
						try {
							const e = await Object(v.h)(r(), s);
							if (e.ok) {
								const n = e.body,
									{
										brand: r,
										card_id: o,
										last4: s,
										exp_month: a,
										exp_year: i
									} = n;
								await t(N({
									brand: r,
									cardId: o,
									last4: s,
									expirationMonth: a,
									expirationYear: i
								}))
							} else {
								const n = P(e);
								await t(T(n))
							}
						} catch (a) {
							const e = o.fbt._("Something went wrong", null, {
								hk: "ie9Ol"
							});
							await t(T(e))
						}
					})(t))
				})),
				U = 15;
			class D extends a.a.Component {
				constructor() {
					super(...arguments), this.handleEscapeKey = e => {
						27 === e.keyCode && this.props.closeModal()
					}, this.handleSubmitCard = () => {
						const {
							stripe: e,
							submitCard: t
						} = this.props;
						e && t(e)
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey)
				}
				render() {
					const {
						className: e,
						closeModal: t,
						isPending: n
					} = this.props;
					return a.a.createElement(M.d, {
						className: Object(d.a)(e, u.a.updateCardModal)
					}, a.a.createElement(M.h, null, a.a.createElement(B.a, null, a.a.createElement(M.p, null, o.fbt._("Update Payment Information", null, {
						hk: "1PrvDp"
					})), a.a.createElement(q.a, {
						onClick: t
					}, a.a.createElement(M.b, null))), a.a.createElement(M.o, {
						className: u.a.descriptionText
					}, o.fbt._("Change the Credit Card associated with your Premium subscription. This will be reflected in your next billing cycle.", null, {
						hk: "1btBv6"
					}))), a.a.createElement(M.k, null, a.a.createElement(I.a, {
						className: u.a.creditCard
					}), a.a.createElement("a", {
						href: "https://stripe.com",
						target: "_blank"
					}, a.a.createElement("img", {
						className: u.a.poweredByStripeIcon,
						src: `${r.a.assetPath}/img/payment-icons/powered-by-stripe.png`
					})), a.a.createElement("div", {
						className: u.a.agreementLink
					}, o.fbt._("By purchasing Coins, you agree to the {agreement}", [o.fbt._param("agreement", a.a.createElement("a", {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, o.fbt._("Reddit User Agreement", null, {
						hk: "2oIYsO"
					})))], {
						hk: "3VFT3g"
					}))), a.a.createElement(M.f, null, a.a.createElement(M.q, {
						className: u.a.updateButton,
						"data-redditstyle": !0,
						disabled: n,
						onClick: this.handleSubmitCard
					}, n ? a.a.createElement(L.a, {
						sizePx: U
					}) : o.fbt._("update", null, {
						hk: "4FAt0s"
					}))))
				}
			}
			const W = Object(l.injectStripe)(Object(m.a)(D));
			t.default = F(e => a.a.createElement(l.StripeProvider, {
				apiKey: r.a.stripe.apiKey
			}, a.a.createElement(l.Elements, null, a.a.createElement(W, V({}, e, {
				withOverlay: !0,
				onOverlayClick: e.closeModal
			})))))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/UpdateCardModal.304dede91c579baf9994.js.map