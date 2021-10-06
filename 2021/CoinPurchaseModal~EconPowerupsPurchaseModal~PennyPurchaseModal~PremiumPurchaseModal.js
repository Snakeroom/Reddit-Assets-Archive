// https://www.redditstatic.com/desktop2x/CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal.b940107dac15ac3fb7c4.js
// Retrieved at 10/6/2021, 1:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var r = n("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return r(e) + t
			}
		},
		"./node_modules/react-stripe-elements/es/components/Element.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/react/index.js")),
				o = i(n("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
				a = i(n("./node_modules/react-stripe-elements/es/utils/isEqual.js")),
				s = n("./node_modules/react-stripe-elements/es/components/Elements.js");

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
						var o = d(this, t.call(this, e, r));
						o.handleRef = function(e) {
							o._ref = e
						}, o._element = null;
						var a = p(o.props);
						return o._options = a, o
					}
					return l(n, t), n.prototype.componentDidMount = function() {
						var t = this;
						this.context.addElementsLoadListener((function(n) {
							if (t._ref) {
								var r = n.create(e, t._options);
								t._element = r, t._setupEventListeners(r), r.mount(t._ref), t.context.registerElement(r, i.impliedTokenType, i.impliedSourceType, i.impliedPaymentMethodType)
							}
						}))
					}, n.prototype.componentDidUpdate = function() {
						var e = p(this.props);
						0 === Object.keys(e).length || (0, a.default)(e, this._options) || (this._options = e, this._element && this._element.update(e))
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
					onChange: u,
					onBlur: u,
					onFocus: u,
					onReady: u
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

			function c(e, t) {
				var n = {};
				for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
				return n
			}

			function d(e) {
				if (Array.isArray(e)) {
					for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
					return n
				}
				return Array.from(e)
			}
			var l = t.injectContextTypes = {
					getRegisteredElements: a.default.func.isRequired,
					elements: a.default.object
				},
				u = t.elementContextTypes = {
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
						a._elements = null, a.handleRegisterElement = function(e, t, n, o) {
							a.setState((function(a) {
								return {
									registeredElements: [].concat(d(a.registeredElements), [r({
										element: e
									}, t ? {
										impliedTokenType: t
									} : {}, n ? {
										impliedSourceType: n
									} : {}, o ? {
										impliedPaymentMethodType: o
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
						};
						var s = a.props,
							i = (s.children, c(s, ["children"]));
						return "sync" === a.context.tag && (a._elements = a.context.stripe.elements(i)), a.state = {
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
								if ("sync" === e.context.tag) {
									if (!e._elements) throw new Error("Expected elements to be instantiated but it was not.");
									t(e._elements)
								} else e.context.addStripeLoadListener((function(n) {
									if (e._elements) t(e._elements);
									else {
										var r = e.props,
											o = (r.children, c(r, ["children"]));
										e._elements = n.elements(o), t(e._elements)
									}
								}))
							},
							registerElement: this.handleRegisterElement,
							unregisterElement: this.handleUnregisterElement,
							getRegisteredElements: function() {
								return e.state.registeredElements
							},
							elements: this._elements
						}
					}, t.prototype.render = function() {
						return o.default.Children.only(this.props.children)
					}, t
				}(o.default.Component);
			p.childContextTypes = r({}, l, u), p.contextTypes = s.providerContextTypes, p.defaultProps = {
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
			var d = function() {},
				l = function(e) {
					e.id, e.className, e.onBlur, e.onClick, e.onFocus, e.onReady, e.paymentRequest;
					return function(e, t) {
						var n = {};
						for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
						return n
					}(e, ["id", "className", "onBlur", "onClick", "onFocus", "onReady", "paymentRequest"])
				},
				u = function(e) {
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
						var a = l(n);
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
					}, t.prototype.componentDidUpdate = function(e) {
						this.props.paymentRequest !== e.paymentRequest && console.warn("Unsupported prop change: paymentRequest is not a customizable property.");
						var t = l(this.props);
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
				onBlur: d,
				onClick: d,
				onFocus: d,
				onReady: d
			}, u.contextTypes = i.elementContextTypes, t.default = u
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
					if (e && e.elements && e.createSource && e.createToken && e.createPaymentMethod && e.handleCardPayment) return e;
					throw new Error("Please pass a valid Stripe object to StripeProvider. You can obtain a Stripe object by calling 'Stripe(...)' with your publishable key.")
				},
				d = function(e) {
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
								s = (o.children, function(e, t) {
									var n = {};
									for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
									return n
								}(o, ["apiKey", "children"])),
								d = i(a, s);
							r._meta = {
								tag: "sync",
								stripe: d
							}, r._register()
						} else if (r.props.stripe) {
							var l = c(r.props.stripe);
							r._meta = {
								tag: "sync",
								stripe: l
							}, r._register()
						} else {
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
					}, t.prototype.componentDidUpdate = function(e) {
						var t = this.props.apiKey && e.apiKey && this.props.apiKey !== e.apiKey,
							n = this.props.stripe && e.stripe && this.props.stripe !== e.stripe;
						if (!this._didWarn && (t || n) && window.console && window.console.error) return this._didWarn = !0, void console.error("StripeProvider does not support changing the apiKey parameter.");
						if (!this._didWakeUpListeners && this.props.stripe) {
							this._didWakeUpListeners = !0;
							var r = c(this.props.stripe);
							this._meta.stripe = r, this._register(), this._listeners.forEach((function(e) {
								e(r)
							}))
						}
					}, t.prototype._register = function() {
						var e = this._meta.stripe;
						e && e._registerWrapper && e._registerWrapper({
							name: "react-stripe-elements",
							version: "6.1.2"
						})
					}, t.prototype.render = function() {
						return r.default.Children.only(this.props.children)
					}, t
				}(r.default.Component);
			d.propTypes = {
				apiKey: o.default.string,
				stripe: o.default.object,
				children: o.default.node
			}, d.childContextTypes = s, d.defaultProps = {
				apiKey: void 0,
				stripe: void 0,
				children: null
			}, t.default = d
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
				d = n("./node_modules/react-stripe-elements/es/components/Provider.js");

			function l(e, t) {
				var n = {};
				for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
				return n
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
				var t, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					s = r.withRef,
					f = void 0 !== s && s;
				return n = t = function(t) {
					function n(e, r) {
						if (u(this, n), !r || !r.getRegisteredElements) throw new Error("It looks like you are trying to inject Stripe context outside of an Elements context.\nPlease be sure the component that calls createSource or createToken is within an <Elements> component.");
						var o = p(this, t.call(this, e, r));
						return o.parseElementOrData = function(e) {
							return e && "object" === (void 0 === e ? "undefined" : a(e)) && e._frame && "object" === a(e._frame) && e._frame.id && "string" == typeof e._frame.id && "string" == typeof e._componentName ? {
								type: "element",
								element: e
							} : {
								type: "data",
								data: e
							}
						}, o.findElement = function(e, t) {
							var n = o.context.getRegisteredElements().filter((function(t) {
									return t[e]
								})),
								r = "auto" === t ? n : n.filter((function(n) {
									return n[e] === t
								}));
							if (1 === r.length) return r[0].element;
							if (r.length > 1) throw new Error("You did not specify the type of Source, Token, or PaymentMethod to create.\n        We could not infer which Element you want to use for this operation.");
							return null
						}, o.requireElement = function(e, t) {
							var n = o.findElement(e, t);
							if (n) return n;
							throw new Error("You did not specify the type of Source, Token, or PaymentMethod to create.\n        We could not infer which Element you want to use for this operation.")
						}, o.wrappedCreateToken = function(e) {
							return function() {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
								if (t && "object" === (void 0 === t ? "undefined" : a(t))) {
									var r = t,
										s = r.type,
										i = l(r, ["type"]),
										c = "string" == typeof s ? s : "auto",
										d = o.requireElement("impliedTokenType", c);
									return e.createToken(d, i)
								}
								if ("string" == typeof t) {
									var u = t;
									return e.createToken(u, n)
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
						}, o.wrappedCreatePaymentMethod = function(e) {
							return function(t, n, r) {
								if (t && "object" === (void 0 === t ? "undefined" : a(t))) return e.createPaymentMethod(t);
								if (!t || "string" != typeof t) throw new Error("Invalid PaymentMethod type passed to createPaymentMethod. Expected a string, got " + (void 0 === t ? "undefined" : a(t)) + ".");
								var s = o.parseElementOrData(n);
								if ("element" === s.type) {
									var i = s.element;
									return r ? e.createPaymentMethod(t, i, r) : e.createPaymentMethod(t, i)
								}
								var c = s.data,
									d = o.findElement("impliedPaymentMethodType", t);
								if (d) return c ? e.createPaymentMethod(t, d, c) : e.createPaymentMethod(t, d);
								if (c && "object" === (void 0 === c ? "undefined" : a(c))) return e.createPaymentMethod(t, c);
								throw c ? new Error("Invalid data passed to createPaymentMethod. Expected an object, got " + (void 0 === c ? "undefined" : a(c)) + ".") : new Error("Could not find an Element that can be used to create a PaymentMethod of type: " + t + ".")
							}
						}, o.wrappedHandleCardX = function(e, t) {
							return function(n, r, s) {
								if (!n || "string" != typeof n) throw new Error("Invalid PaymentIntent client secret passed to handleCardPayment. Expected string, got " + (void 0 === n ? "undefined" : a(n)) + ".");
								var i = o.parseElementOrData(r);
								if ("element" === i.type) {
									var c = i.element;
									return s ? e[t](n, c, s) : e[t](n, c)
								}
								var d = i.data,
									l = o.findElement("impliedPaymentMethodType", "card");
								return l ? d ? e[t](n, l, d) : e[t](n, l) : d ? e[t](n, d) : e[t](n)
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
							createSource: this.wrappedCreateSource(e),
							createPaymentMethod: this.wrappedCreatePaymentMethod(e),
							handleCardPayment: this.wrappedHandleCardX(e, "handleCardPayment"),
							handleCardSetup: this.wrappedHandleCardX(e, "handleCardSetup")
						})
					}, n.prototype.render = function() {
						var t = this;
						return i.default.createElement(e, o({}, this.props, {
							stripe: this.state.stripe,
							elements: this.context.elements,
							ref: f ? function(e) {
								t.wrappedInstance = e
							} : null
						}))
					}, n
				}(i.default.Component), t.contextTypes = o({}, d.providerContextTypes, c.injectContextTypes), t.displayName = "InjectStripe(" + (e.displayName || e.name || "Component") + ")", n
			}
		},
		"./node_modules/react-stripe-elements/es/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.AuBankAccountElement = t.FpxBankElement = t.IdealBankElement = t.IbanElement = t.PaymentRequestButtonElement = t.CardCVCElement = t.CardCvcElement = t.CardExpiryElement = t.CardNumberElement = t.CardElement = t.Elements = t.injectStripe = t.StripeProvider = void 0;
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
			var d = (0, s.default)("card", {
					impliedTokenType: "card",
					impliedSourceType: "card",
					impliedPaymentMethodType: "card"
				}),
				l = (0, s.default)("cardNumber", {
					impliedTokenType: "card",
					impliedSourceType: "card",
					impliedPaymentMethodType: "card"
				}),
				u = (0, s.default)("cardExpiry"),
				p = (0, s.default)("cardCvc"),
				m = p,
				f = (0, s.default)("iban", {
					impliedTokenType: "bank_account",
					impliedSourceType: "sepa_debit"
				}),
				y = (0, s.default)("idealBank", {
					impliedSourceType: "ideal"
				}),
				h = (0, s.default)("fpxBank"),
				b = (0, s.default)("auBankAccount");
			t.StripeProvider = r.default, t.injectStripe = o.default, t.Elements = a.default, t.CardElement = d, t.CardNumberElement = l, t.CardExpiryElement = u, t.CardCvcElement = p, t.CardCVCElement = m, t.PaymentRequestButtonElement = i.default, t.IbanElement = f, t.IdealBankElement = y, t.FpxBankElement = h, t.AuBankAccountElement = b
		},
		"./node_modules/react-stripe-elements/es/utils/isEqual.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			};
			t.default = function e(t, n) {
				if ("object" !== (void 0 === t ? "undefined" : r(t)) || "object" !== (void 0 === n ? "undefined" : r(n))) return t === n;
				if (null === t || null === n) return t === n;
				var o = Array.isArray(t);
				if (o !== Array.isArray(n)) return !1;
				var a = "[object Object]" === Object.prototype.toString.call(t);
				if (a !== ("[object Object]" === Object.prototype.toString.call(n))) return !1;
				if (!a && !o) return !1;
				var s = Object.keys(t),
					i = Object.keys(n);
				if (s.length !== i.length) return !1;
				for (var c = {}, d = 0; d < s.length; d += 1) c[s[d]] = !0;
				for (var l = 0; l < i.length; l += 1) c[i[l]] = !0;
				var u = Object.keys(c);
				if (u.length !== s.length) return !1;
				var p = t,
					m = n;
				return u.every((function(t) {
					return e(p[t], m[t])
				}))
			}
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
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return w
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "f", (function() {
				return N
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "c", (function() {
				return R
			})), n.d(t, "a", (function() {
				return q
			})), n.d(t, "h", (function() {
				return B
			})), n.d(t, "e", (function() {
				return W
			})), n.d(t, "i", (function() {
				return G
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/omit.js"),
				a = n.n(o),
				s = n("./node_modules/uuid/v4.js"),
				i = n.n(s),
				c = n("./src/config.ts"),
				d = n("./src/reddit/constants/modals.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/lib/addQueryParams/index.ts"),
				p = n("./src/lib/makeActionCreator/index.ts"),
				m = n("./src/lib/sentry/index.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				y = n("./src/reddit/actions/gold/constants.ts"),
				h = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				b = n("./src/reddit/selectors/gold/productOffers.ts"),
				v = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/models/Gold/ProductOffer.ts"),
				E = n("./src/reddit/actions/gold/powerups.ts"),
				j = n("./src/reddit/actions/modal.ts"),
				_ = n("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				P = n("./src/reddit/models/Payments/index.ts");
			const O = () => r.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				x = e => e.map(e => e.message).join(" : "),
				w = (e, t, n) => async (o, a, {
					gqlContext: s
				}) => {
					const c = i()(),
						d = await Object(_.f)(s(), c, e, t, n);
					if (d.ok) {
						const e = d.body,
							{
								errors: t,
								order: n
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(x(t));
						if (n) return n.id
					}
					throw new Error((() => r.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, S = (e, t, n, o, a, s) => async (c, d, {
					gqlContext: l
				}) => {
					var u;
					const p = d(),
						f = () => c(Object(h.stripeApiError)(r.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						y = a === C.c.Premium,
						E = a === C.c.Powerups,
						j = {};
					if (E && s) j.powerUps = {
						subredditId: s,
						isAnonymous: n
					};
					else if (y) {
						const e = Object(b.d)(p, {
							provider: P.b.Stripe
						});
						if (!e) return;
						j.premium = {
							pricePackage: e
						}
					}
					let O, S, k = "";
					try {
						k = await c(w(t, o, j))
					} catch (T) {
						return m.c.captureException(T), void(T.message && c(Object(h.stripeApiError)(T.message)))
					}
					c(Object(h.stripeTokenPending)());
					const N = Object(v.y)(p);
					if (N || (O = await c(Object(h.validateAndCreateStripeToken)(e)), S = Object(v.v)(p), O)) try {
						const t = i()(),
							r = N || S ? O && S ? Object(_.h)(l(), t, k, O.id) : N ? Object(_.j)(l(), t, k, N) : null : Object(_.i)(l(), t, k, O.id),
							a = await r;
						if (!(null == a ? void 0 : a.ok)) return void f();
						const p = a.body.data.createEconPayment;
						if (null === (u = null == p ? void 0 : p.errors) || void 0 === u ? void 0 : u.length) return void c(Object(h.stripeApiError)(x(p.errors)));
						const {
							ok: m,
							payment: b,
							providerExecution: {
								paymentIntentClientSecret: v
							}
						} = p;
						if (m && b.status === _.a.ActionRequired) {
							const t = await e.confirmCardPayment(v),
								{
									error: n
								} = t;
							if (n) return void(n.message ? c(Object(h.stripeApiError)(n.message)) : f());
							let r;
							if (!(r = N ? await Object(_.e)(l(), i()(), b.id, N) : await Object(_.d)(l(), i()(), b.id, O.id, S)).ok) return void f();
							const o = r.body;
							if (!o.data.confirmEconPayment.ok || o.data.confirmEconPayment.payment.status !== _.a.Paid) return void f()
						} else if (m && b.status !== _.a.Paid) return void f();
						const C = Object(g.k)(d());
						C && (E && s ? c(B({
							subredditId: s,
							powerupsCount: o,
							user: C,
							isAnonymous: n
						})) : y && c(W({
							user: C
						})))
					} catch (T) {
						m.c.captureException(T), f()
					}
				}, k = (e, t, n, r, o) => async (a, s, {
					gqlContext: d
				}) => {
					var l;
					const p = s(),
						f = r === C.c.Premium,
						y = r === C.c.Powerups,
						v = {};
					if (y && o) v.powerUps = {
						subredditId: o,
						isAnonymous: t
					};
					else if (f) {
						const e = Object(b.d)(p, {
							provider: P.b.PayPal
						});
						if (!e) return null;
						v.premium = {
							pricePackage: e
						}
					}
					let E = "";
					try {
						E = await a(w(e, n, v))
					} catch (k) {
						return m.c.captureException(k), k.message && a(Object(h.paypalApiError)(k.message)), null
					}
					const j = c.a.redditUrl;
					let S = {
						_o: j,
						o: E,
						pt: r
					};
					y && o && (S = {
						...S,
						r: o
					});
					try {
						const e = Object(u.a)(`${j}/framedModal/paypal-finish`, {
								...S,
								s: !0
							}),
							r = Object(u.a)(`${j}/framedModal/paypal-finish`, S),
							c = i()(),
							p = await Object(_.g)(d(), c, E, e, r);
						if (p && p.ok) {
							const e = p.body.data.createEconPayment;
							if (null === (l = null == e ? void 0 : e.errors) || void 0 === l ? void 0 : l.length) return a(Object(h.paypalApiError)(x(e.errors))), null;
							const r = Object(g.k)(s());
							if (e.ok) {
								const {
									status: s
								} = e.payment;
								if (s === _.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === s && r) return o ? a(B({
									subredditId: o,
									powerupsCount: n,
									user: r,
									isAnonymous: t
								})) : f && a(W({
									user: r
								})), null
							}
						}
					} catch (k) {
						m.c.captureException(k)
					}
					return a(Object(h.paypalApiError)(O())), null
				}, N = (e, t) => async (n, r, {
					gqlContext: o
				}) => {
					var a;
					try {
						const r = i()(),
							s = await Object(_.c)(o(), r, e, t);
						if (s && s.ok) {
							const e = s.body.data.confirmEconPayment;
							if (null === (a = null == e ? void 0 : e.errors) || void 0 === a ? void 0 : a.length) return n(Object(h.paypalApiError)(x(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (s) {
						m.c.captureException(s)
					}
					return n(Object(h.paypalApiError)(O())), !1
				}, T = () => async (e, t, {
					gqlContext: n
				}) => {
					e(Object(h.savedCardsPending)());
					try {
						const t = await Object(_.l)(n());
						if (t.ok) {
							const n = t.body;
							n.errors && n.errors.length && e(Object(h.stripeApiError)(n.errors[0].message));
							const {
								savedStripeCards: r
							} = n.data.identity, o = r.map(e => a()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(h.savedCardsSuccess)(o)), o[0] && e(Object(h.selectSavedCard)(o[0].cardId))
						} else e(Object(h.stripeApiError)(r.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (o) {
						m.c.captureException(o), e(Object(h.savedCardsSuccess)([]))
					}
				}, R = e => async (t, n, {
					gqlContext: r
				}) => {
					t(Object(h._deleteSavedCard)(e));
					try {
						const t = await Object(_.k)(r(), e);
						if (t.error) throw new Error(t.error.type);
						const n = t.body,
							{
								errors: o
							} = n.data.deleteEconPaymentMethod;
						if (o && o.length) throw new Error(x(o))
					} catch (o) {
						m.c.captureException(o)
					}
				}, I = Object(p.a)(y.O), M = Object(p.a)(y.P), A = Object(p.a)(y.Q), L = e => async (t, n) => {
					await t(I(e)), t(Object(l.f)({
						kind: f.b.Error,
						duration: l.a,
						text: e
					}))
				}, q = (e, t, n) => async (o, a, {
					gqlContext: s
				}) => {
					o(M({
						subredditId: t,
						allocatedAt: n
					}));
					try {
						const a = await Object(_.b)(s(), e);
						if (a.ok) {
							const e = a.body,
								{
									errors: r
								} = e.data.cancelEconRecurringPayment;
							if (r && r.length) return void o(L(r[0].message));
							o(A({
								subredditId: t,
								allocatedAt: n
							}))
						} else o(L(r.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						m.c.captureException(i), o(L(r.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, D = Object(p.a)(y.S), B = e => async (t, n) => {
					t(D(e)), t(Object(E.l)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(j.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(j.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, F = Object(p.a)(y.W), W = ({
					user: e
				}) => async t => {
					await t(Object(E.n)(!0)), t(F({
						user: e
					}))
				}, G = Object(p.a)(y.ab)
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
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				d = n("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				l = n.n(d);
			const u = e => a.a.createElement("label", {
				className: Object(s.a)(e.className, l.a.paymentOption)
			}, a.a.createElement("input", {
				type: "radio",
				id: e.value,
				name: "payment-option",
				value: e.value,
				checked: e.selectedValue === e.value,
				onChange: e.onChange
			}), a.a.createElement("div", {
				className: Object(s.a)(l.a.paymentOptionContent, {
					[l.a.isNightMode]: e.nightmode
				})
			}, e.children));
			class p extends a.a.Component {
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
								o(Object(c.d)(n));
								break;
							case "paypal":
								o(Object(c.e)(n))
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
					}, a.a.createElement("fieldset", null, a.a.createElement(u, {
						nightmode: t,
						selectedValue: n,
						onChange: this.onPaymentSelected,
						value: "paypal"
					}, a.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/paypal.png)`
						}
					})), a.a.createElement(u, {
						nightmode: t,
						selectedValue: n,
						onChange: this.onPaymentSelected,
						value: "creditCard"
					}, a.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/visa.png)`
						}
					}), a.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/mastercard.png)`
						}
					}), a.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/amex.png)`
						}
					}), a.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/discover.jpg)`
						}
					}))))
				}
			}
			t.a = Object(i.c)(p)
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
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/react-stripe-elements/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/gold/productOfferPurchase.ts"),
				l = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				m = n("./src/reddit/controls/ErrorText/index.tsx");
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js"), y = ({
				className: e
			}) => o.a.createElement(m.b, {
				className: e
			}, f._("Error loading Stripe, please refresh the page and try again", null, {
				hk: "2O1NWp"
			}));
			var h = n("./node_modules/fbt/lib/FbtPublic.js"),
				b = n("./src/config.ts"),
				v = n("./src/reddit/components/CheckoutForm/index.m.less"),
				g = n.n(v);
			const C = Object(i.c)({
					cardCvcValidation: p.f,
					cardExpiryValidation: p.g,
					cardName: p.h,
					cardNumberValidation: p.i,
					nameOnCardValidation: p.k,
					postalCode: p.l
				}),
				E = Object(a.b)(C, (e, t) => ({
					onCardElementChange: t => e(Object(l.cardElementChange)(t)),
					onNameInput: t => e(Object(l.cardNameInput)({
						cardName: t
					})),
					onPostalCodeInput: t => e(Object(l.postalCodeInput)({
						postalCode: t
					}))
				}));
			class j extends o.a.Component {
				constructor() {
					super(...arguments), this.computedStyle = getComputedStyle(document.body), this.state = {
						cardNumberReady: !1,
						cardExpiryReady: !1,
						cardCVCReady: !1
					}, this.onChangeCardName = e => {
						const t = e.currentTarget.value;
						t !== this.props.cardName && this.props.onNameInput(t)
					}, this.onChangePostalCode = e => {
						const t = e.currentTarget.value;
						t !== this.props.postalCode && this.props.onPostalCodeInput(t)
					}, this.onCardNumberReady = () => this.setState({
						cardNumberReady: !0
					}), this.onCardExpiryReady = () => this.setState({
						cardExpiryReady: !0
					}), this.onCardCVCReady = () => this.setState({
						cardCVCReady: !0
					})
				}
				render() {
					const {
						className: e,
						cardCvcValidation: t,
						cardExpiryValidation: n,
						cardName: r,
						cardNumberValidation: a,
						onCardElementChange: i,
						nameOnCardValidation: d,
						postalCode: l,
						stripe: u
					} = this.props;
					if (!u) return o.a.createElement(y, {
						className: e
					});
					const {
						cardNumberReady: p,
						cardExpiryReady: m,
						cardCVCReady: f
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
						className: Object(c.a)(g.a.checkoutForm, e)
					}, o.a.createElement("div", {
						className: g.a.formCellWide
					}, o.a.createElement("input", {
						className: Object(c.a)(g.a.cardInput, g.a.nameOnCard, {
							[g.a.cardInputError]: !!d
						}),
						type: "text",
						placeholder: h.fbt._("NAME ON CARD", null, {
							hk: "IgrlQ"
						}).toString(),
						onChange: this.onChangeCardName,
						value: r
					})), o.a.createElement("div", {
						className: g.a.formCell
					}, o.a.createElement(s.CardNumberElement, {
						className: Object(c.a)(g.a.cardInput, {
							[g.a.cardInputError]: !!a
						}),
						onChange: i,
						onReady: this.onCardNumberReady,
						placeholder: h.fbt._("CARD NUMBER", null, {
							hk: "3pqMxG"
						}).toString(),
						style: b
					}), !p && o.a.createElement("div", {
						className: g.a.elementPlaceholder
					}, h.fbt._("CARD NUMBER", null, {
						hk: "3pqMxG"
					}))), o.a.createElement("div", {
						className: g.a.formCell
					}, o.a.createElement(s.CardExpiryElement, {
						className: Object(c.a)(g.a.cardInput, {
							[g.a.cardInputError]: !!n
						}),
						onChange: i,
						onReady: this.onCardExpiryReady,
						placeholder: h.fbt._("MM/YY", null, {
							hk: "Hou17"
						}).toString(),
						style: b
					}), !m && o.a.createElement("div", {
						className: g.a.elementPlaceholder
					}, h.fbt._("MM/YY", null, {
						hk: "Hou17"
					}))), o.a.createElement("div", {
						className: g.a.formCell
					}, o.a.createElement(s.CardCVCElement, {
						className: Object(c.a)(g.a.cardInput, {
							[g.a.cardInputError]: !!t
						}),
						onChange: i,
						onReady: this.onCardCVCReady,
						placeholder: h.fbt._("CCV", null, {
							hk: "dZzZJ"
						}).toString(),
						style: b
					}), !f && o.a.createElement("div", {
						className: g.a.elementPlaceholder
					}, h.fbt._("CCV", null, {
						hk: "dZzZJ"
					}))), o.a.createElement("div", {
						className: g.a.formCell
					}, o.a.createElement("input", {
						className: Object(c.a)(g.a.cardInput, g.a.nameOnCard),
						type: "text",
						onChange: this.onChangePostalCode,
						placeholder: h.fbt._("ZIP CODE", null, {
							hk: "2lJZ4j"
						}).toString(),
						value: l
					})))
				}
			}
			var _ = Object(s.injectStripe)(E(j)),
				P = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				O = n("./src/reddit/components/StripePaymentForm/index.m.less"),
				x = n.n(O);
			var w = e => {
					const {
						onToggleRememberCard: t,
						rememberCard: n
					} = e;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(_, {
						className: x.a.creditCard
					}), o.a.createElement(P.a, {
						className: x.a.saveCardCheckbox,
						isSelected: n,
						onClick: t,
						text: h.fbt._("Remember this card", null, {
							hk: "2arVov"
						})
					}), o.a.createElement("a", {
						href: "https://stripe.com",
						target: "_blank"
					}, o.a.createElement("img", {
						className: x.a.poweredByStripeIcon,
						src: `${b.a.assetPath}/img/payment-icons/powered-by-stripe.png`
					})))
				},
				S = n("./src/reddit/icons/svgs/Trash2/index.tsx");
			const {
				fbt: k
			} = n("./node_modules/fbt/lib/FbtPublic.js"), N = e => 2 === e.length ? e : "0" + e, T = e => {
				switch (e.toLowerCase()) {
					case "visa":
						return `${b.a.assetPath}/img/payment-icons/visa.png`;
					case "mastercard":
						return `${b.a.assetPath}/img/payment-icons/mastercard.png`;
					case "discover":
						return `${b.a.assetPath}/img/payment-icons/discover.jpg`;
					case "american express":
						return `${b.a.assetPath}/img/payment-icons/amex.png`;
					default:
						return null
				}
			};
			class R extends o.a.PureComponent {
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
					} = this.props, t = T(e.brand);
					return o.a.createElement("label", {
						className: x.a.savedCardContainer
					}, o.a.createElement("input", {
						type: "radio",
						name: "use-saved-card",
						checked: !0,
						readOnly: !0
					}), o.a.createElement("div", {
						className: Object(c.a)(x.a.cardImageContainer, {
							[x.a.cardImageContainerNightmode]: this.props.nightmode
						})
					}, t ? o.a.createElement("img", {
						className: x.a.brandImage,
						src: t
					}) : o.a.createElement("span", {
						className: x.a.unknownCC
					}, "CC")), o.a.createElement("div", {
						className: x.a.cardDetails
					}, o.a.createElement("span", null, k._("Card ending in {Credit Card last four digits}", [k._param("Credit Card last four digits", e.last4)], {
						hk: "3dMxMn"
					})), o.a.createElement("span", {
						className: x.a.expiry
					}, k._("Expires {month} / {year}", [k._param("month", N(e.expirationMonth.toString())), k._param("year", e.expirationYear.toString())], {
						hk: "3iXzVI"
					}))), this.state.showConfirmText ? o.a.createElement("button", {
						className: x.a.confirmText,
						onClick: this.onConfirmClick
					}, k._("Confirm", null, {
						hk: "gFhpD"
					})) : o.a.createElement("button", {
						onClick: this.onTrashCanClick
					}, o.a.createElement(S.b, {
						className: x.a.icon
					})))
				}
			}
			var I = R;
			const M = Object(i.c)({
					rememberCard: p.v,
					savedCard: e => Object(p.x)(e)[0],
					stripeInfoLoading: p.w
				}),
				A = Object(a.b)(M, (e, t) => ({
					onClickDeleteCard: n => t.shouldDeleteCardWithGql ? e(Object(d.c)(n)) : e(Object(l.deleteSavedCard)(n)),
					onToggleRememberCard: () => e(Object(l.toggleRememberCard)())
				}));
			class L extends o.a.PureComponent {
				render() {
					const {
						className: e,
						nightmode: t,
						onClickDeleteCard: n,
						onToggleRememberCard: r,
						rememberCard: a,
						savedCard: s,
						stripe: i,
						stripeInfoLoading: d
					} = this.props;
					if (!i) return o.a.createElement(y, {
						className: Object(c.a)(x.a.stripePaymentForm, e)
					});
					const l = d,
						p = !l && s,
						m = !l && !p,
						f = l ? x.a.loadingState : p ? x.a.savedCardState : x.a.formState;
					return o.a.createElement("div", {
						className: Object(c.a)(x.a.stripePaymentForm, f, e)
					}, l && o.a.createElement(u.a, {
						className: x.a.loader,
						sizePx: 60
					}), p && s && o.a.createElement("form", null, o.a.createElement(I, {
						nightmode: t,
						onDelete: n,
						savedCard: s
					})), m && o.a.createElement(w, {
						onToggleRememberCard: r,
						rememberCard: a
					}))
				}
			}
			t.a = Object(s.injectStripe)(A(L))
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			})), n.d(t, "c", (function() {
				return E
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/uniqueId.js"),
				a = n.n(o),
				s = n("./node_modules/raf/index.js"),
				i = n.n(s),
				c = n("./node_modules/react/index.js"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/layout/row/Inline/index.tsx"),
				f = n("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				y = n.n(f);
			var h = Object(u.a)(e => {
					const {
						children: t,
						title: n
					} = e;
					return d.a.createElement("div", {
						className: y.a.wrapper
					}, d.a.createElement(m.a, {
						className: y.a.titleRow
					}, n), d.a.createElement("div", {
						className: y.a.detailsContainer
					}, t), d.a.createElement(m.a, {
						className: y.a.buttonRow
					}, d.a.createElement(p.k, {
						className: y.a.confirmButton,
						onClick: e.onConfirmed
					}, r.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				b = n("./src/reddit/controls/ErrorText/index.m.less"),
				v = n.n(b);
			class g extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${a()()}`,
						isModalOpen: !1
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
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
						className: t,
						errorModalBody: n,
						errorModalTitle: o = r.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: a = r.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: s,
						isModalOpen: i
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(v.a.wrapper, t)
					}, d.a.createElement("span", {
						className: v.a.description,
						ref: this.spanRef
					}, e), s && d.a.createElement("span", {
						className: v.a.moreText,
						onClick: this.toggleModal
					}, a), i && d.a.createElement(h, {
						onConfirmed: this.toggleModal,
						title: o
					}, n || e))
				}
			}
			const C = e => {
					const {
						className: t,
						errorClassName: n,
						errorModalTitle: r,
						fallbackMessage: o,
						messages: a = []
					} = e, s = a.length ? a : o ? [o] : [];
					return s.length ? d.a.createElement("div", {
						className: t
					}, s.map((e, t) => d.a.createElement(g, {
						className: n,
						errorModalTitle: r,
						key: t
					}, e))) : null
				},
				E = e => d.a.createElement(C, {
					fallbackMessage: r.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = g
		},
		"./src/reddit/endpoints/gold/productOfferPurchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return b
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "h", (function() {
				return C
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "l", (function() {
				return w
			})), n.d(t, "k", (function() {
				return S
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				o = n.n(r),
				a = n("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				s = n("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				i = n("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				c = n("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = n("./src/redditGQL/operations/CreateEconOrder.json"),
				l = n("./src/redditGQL/operations/CreatePaypalPayment.json"),
				u = n("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				p = n("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				m = n("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				f = n("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				y = n("./src/redditGQL/operations/UserSavedStripeCards.json"),
				h = n("./src/lib/makeGqlRequest/index.ts");
			const b = (e, t, n, r, a) => {
				const {
					premium: s,
					...i
				} = a, c = (null == s ? void 0 : s.pricePackage) || n.pricePackages[0], l = new o.a(c.price).multipliedBy(r).toFixed();
				return Object(h.a)(e, {
					...d,
					variables: {
						input: {
							nonce: t,
							productId: n.id,
							productVersion: n.version,
							pricePackageId: c.id,
							currency: c.currency,
							price: l,
							productsCount: r.toString(),
							...i
						}
					}
				})
			};
			var v;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(v || (v = {}));
			const g = (e, t, n, r) => Object(h.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: n,
						token: r
					}
				}),
				C = (e, t, n, r) => Object(h.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: n,
						token: r
					}
				}),
				E = (e, t, n, r) => Object(h.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: n,
						cardId: r
					}
				}),
				j = (e, t, n, r, o) => Object(h.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: n,
						successUrl: r,
						cancelUrl: o
					}
				}),
				_ = (e, t, n, r) => Object(h.a)(e, {
					...s,
					variables: {
						nonce: t,
						paymentId: n,
						token: r
					}
				}),
				P = (e, t, n, r) => Object(h.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: n,
						cardId: r
					}
				}),
				O = (e, t, n, r, o) => Object(h.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: n,
						token: r,
						saveCard: o
					}
				}),
				x = (e, t) => Object(h.a)(e, {
					...a,
					variables: {
						orderId: t
					}
				}),
				w = e => Object(h.a)(e, {
					...y,
					variables: {}
				}),
				S = (e, t) => Object(h.a)(e, {
					...f,
					variables: {
						cardId: t
					}
				})
		},
		"./src/reddit/hooks/useStripe.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				a = n("./node_modules/react-redux/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const c = Object(i.a)(s.hc);

			function d() {
				const [e, t] = Object(o.useState)(null), n = Object(a.e)(c);
				return Object(o.useEffect)(() => {
					window.Stripe && t(window.Stripe(r.a.stripe.apiKey(n)))
				}, [n]), e
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
				o = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = n.n(s);
			const c = e => o.a.createElement("svg", {
				className: Object(a.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var r, o, a, s;
			n.d(t, "b", (function() {
					return o
				})), n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(o || (o = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(a || (a = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return c
			})), n.d(t, "i", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "f", (function() {
				return v
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/makeProductOfferKey/index.ts"),
				a = n("./src/reddit/models/Gold/ProductOffer.ts"),
				s = n("./src/reddit/models/Payments/index.ts"),
				i = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = e => e.subreddits.api.productOffers.pending,
				d = (e, {
					subredditId: t,
					type: n
				}) => {
					var r, a, s;
					return t ? e.subreddits.productOffers[Object(o.a)(n, t)] : null === (s = null === (a = null === (r = e.features) || void 0 === r ? void 0 : r.goldPurchase) || void 0 === a ? void 0 : a.productOffers) || void 0 === s ? void 0 : s[Object(o.a)(n)]
				},
				l = (e, {
					subredditId: t
				}) => {
					const n = d(e, {
						subredditId: t,
						type: a.c.Powerups
					});
					return n && n[0]
				},
				u = (e, t) => {
					var n;
					const r = l(e, t);
					return null === (n = null == r ? void 0 : r.pricePackages) || void 0 === n ? void 0 : n[0].price
				},
				p = e => {
					const t = d(e, {
						type: a.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				m = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === s.b.PayPal || e[0] === s.b.Stripe)(e.requiredPaymentProviders)) : null,
				f = Object(r.a)(p, i.p, (e, t) => m(e, t) || null),
				y = Object(r.a)(f, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var n;
					return (null === (n = e.requiredPaymentProviders) || void 0 === n ? void 0 : n[0]) === t
				})),
				h = Object(r.a)(f, e => (null == e ? void 0 : e[0].price) || null),
				b = Object(r.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				v = Object(r.a)(b, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/redditGQL/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
		},
		"./src/redditGQL/operations/ConfirmPaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"6ad51fec38be"}')
		},
		"./src/redditGQL/operations/ConfirmStripePaymentNewCard.json": function(e) {
			e.exports = JSON.parse('{"id":"e4d2b27d6d30"}')
		},
		"./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"0095edf93db4"}')
		},
		"./src/redditGQL/operations/CreateEconOrder.json": function(e) {
			e.exports = JSON.parse('{"id":"1bf318d40021"}')
		},
		"./src/redditGQL/operations/CreatePaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"8bca171d6bb4"}')
		},
		"./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"179702814d8f"}')
		},
		"./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json": function(e) {
			e.exports = JSON.parse('{"id":"6d178a1662ba"}')
		},
		"./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"9fc54f6de447"}')
		},
		"./src/redditGQL/operations/DeleteSavedStripeCard.json": function(e) {
			e.exports = JSON.parse('{"id":"87230cb9dec2"}')
		},
		"./src/redditGQL/operations/UserSavedStripeCards.json": function(e) {
			e.exports = JSON.parse('{"id":"d29c51cfbfe6"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal.b940107dac15ac3fb7c4.js.map