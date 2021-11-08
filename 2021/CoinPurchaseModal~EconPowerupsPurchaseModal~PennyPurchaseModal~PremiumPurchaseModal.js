// https://www.redditstatic.com/desktop2x/CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal.eefcb8e5fe20aae5e4ce.js
// Retrieved at 11/8/2021, 10:50:15 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, r) {
			var n = r("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return n(e) + t
			}
		},
		"./node_modules/react-stripe-elements/es/components/Element.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = i(r("./node_modules/react/index.js")),
				o = i(r("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
				a = i(r("./node_modules/react-stripe-elements/es/utils/isEqual.js")),
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
						var o = d(this, t.call(this, e, n));
						o.handleRef = function(e) {
							o._ref = e
						}, o._element = null;
						var a = p(o.props);
						return o._options = a, o
					}
					return l(r, t), r.prototype.componentDidMount = function() {
						var t = this;
						this.context.addElementsLoadListener((function(r) {
							if (t._ref) {
								var n = r.create(e, t._options);
								t._element = n, t._setupEventListeners(n), n.mount(t._ref), t.context.registerElement(n, i.impliedTokenType, i.impliedSourceType, i.impliedPaymentMethodType)
							}
						}))
					}, r.prototype.componentDidUpdate = function() {
						var e = p(this.props);
						0 === Object.keys(e).length || (0, a.default)(e, this._options) || (this._options = e, this._element && this._element.update(e))
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
				o = i(r("./node_modules/react/index.js")),
				a = i(r("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
				s = r("./node_modules/react-stripe-elements/es/components/Provider.js");

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function c(e, t) {
				var r = {};
				for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
				return r
			}

			function d(e) {
				if (Array.isArray(e)) {
					for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
					return r
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
					function t(r, o) {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var a = function(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this, r, o));
						a._elements = null, a.handleRegisterElement = function(e, t, r, o) {
							a.setState((function(a) {
								return {
									registeredElements: [].concat(d(a.registeredElements), [n({
										element: e
									}, t ? {
										impliedTokenType: t
									} : {}, r ? {
										impliedSourceType: r
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
								} else e.context.addStripeLoadListener((function(r) {
									if (e._elements) t(e._elements);
									else {
										var n = e.props,
											o = (n.children, c(n, ["children"]));
										e._elements = r.elements(o), t(e._elements)
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
			p.childContextTypes = n({}, l, u), p.contextTypes = s.providerContextTypes, p.defaultProps = {
				children: null
			}, t.default = p
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
				o = c(r("./node_modules/react/index.js")),
				a = c(r("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
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
						var o = function(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this, r, n));
						o.handleRef = function(e) {
							o._ref = e
						};
						var a = l(r);
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
				i = function(e, t) {
					window.Stripe.__cachedInstances = window.Stripe.__cachedInstances || {};
					var r = "key=" + e + " options=" + JSON.stringify(t),
						n = window.Stripe.__cachedInstances[r] || window.Stripe(e, t);
					return window.Stripe.__cachedInstances[r] = n, n
				},
				c = function(e) {
					if (e && e.elements && e.createSource && e.createToken && e.createPaymentMethod && e.handleCardPayment) return e;
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
							var o = n.props,
								a = o.apiKey,
								s = (o.children, function(e, t) {
									var r = {};
									for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
									return r
								}(o, ["apiKey", "children"])),
								d = i(a, s);
							n._meta = {
								tag: "sync",
								stripe: d
							}, n._register()
						} else if (n.props.stripe) {
							var l = c(n.props.stripe);
							n._meta = {
								tag: "sync",
								stripe: l
							}, n._register()
						} else {
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
					}, t.prototype.componentDidUpdate = function(e) {
						var t = this.props.apiKey && e.apiKey && this.props.apiKey !== e.apiKey,
							r = this.props.stripe && e.stripe && this.props.stripe !== e.stripe;
						if (!this._didWarn && (t || r) && window.console && window.console.error) return this._didWarn = !0, void console.error("StripeProvider does not support changing the apiKey parameter.");
						if (!this._didWakeUpListeners && this.props.stripe) {
							this._didWakeUpListeners = !0;
							var n = c(this.props.stripe);
							this._meta.stripe = n, this._register(), this._listeners.forEach((function(e) {
								e(n)
							}))
						}
					}, t.prototype._register = function() {
						var e = this._meta.stripe;
						e && e._registerWrapper && e._registerWrapper({
							name: "react-stripe-elements",
							version: "6.1.2"
						})
					}, t.prototype.render = function() {
						return n.default.Children.only(this.props.children)
					}, t
				}(n.default.Component);
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
						var o = p(this, t.call(this, e, n));
						return o.parseElementOrData = function(e) {
							return e && "object" === (void 0 === e ? "undefined" : a(e)) && e._frame && "object" === a(e._frame) && e._frame.id && "string" == typeof e._frame.id && "string" == typeof e._componentName ? {
								type: "element",
								element: e
							} : {
								type: "data",
								data: e
							}
						}, o.findElement = function(e, t) {
							var r = o.context.getRegisteredElements().filter((function(t) {
									return t[e]
								})),
								n = "auto" === t ? r : r.filter((function(r) {
									return r[e] === t
								}));
							if (1 === n.length) return n[0].element;
							if (n.length > 1) throw new Error("You did not specify the type of Source, Token, or PaymentMethod to create.\n        We could not infer which Element you want to use for this operation.");
							return null
						}, o.requireElement = function(e, t) {
							var r = o.findElement(e, t);
							if (r) return r;
							throw new Error("You did not specify the type of Source, Token, or PaymentMethod to create.\n        We could not infer which Element you want to use for this operation.")
						}, o.wrappedCreateToken = function(e) {
							return function() {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
								if (t && "object" === (void 0 === t ? "undefined" : a(t))) {
									var n = t,
										s = n.type,
										i = l(n, ["type"]),
										c = "string" == typeof s ? s : "auto",
										d = o.requireElement("impliedTokenType", c);
									return e.createToken(d, i)
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
						}, o.wrappedCreatePaymentMethod = function(e) {
							return function(t, r, n) {
								if (t && "object" === (void 0 === t ? "undefined" : a(t))) return e.createPaymentMethod(t);
								if (!t || "string" != typeof t) throw new Error("Invalid PaymentMethod type passed to createPaymentMethod. Expected a string, got " + (void 0 === t ? "undefined" : a(t)) + ".");
								var s = o.parseElementOrData(r);
								if ("element" === s.type) {
									var i = s.element;
									return n ? e.createPaymentMethod(t, i, n) : e.createPaymentMethod(t, i)
								}
								var c = s.data,
									d = o.findElement("impliedPaymentMethodType", t);
								if (d) return c ? e.createPaymentMethod(t, d, c) : e.createPaymentMethod(t, d);
								if (c && "object" === (void 0 === c ? "undefined" : a(c))) return e.createPaymentMethod(t, c);
								throw c ? new Error("Invalid data passed to createPaymentMethod. Expected an object, got " + (void 0 === c ? "undefined" : a(c)) + ".") : new Error("Could not find an Element that can be used to create a PaymentMethod of type: " + t + ".")
							}
						}, o.wrappedHandleCardX = function(e, t) {
							return function(r, n, s) {
								if (!r || "string" != typeof r) throw new Error("Invalid PaymentIntent client secret passed to handleCardPayment. Expected string, got " + (void 0 === r ? "undefined" : a(r)) + ".");
								var i = o.parseElementOrData(n);
								if ("element" === i.type) {
									var c = i.element;
									return s ? e[t](r, c, s) : e[t](r, c)
								}
								var d = i.data,
									l = o.findElement("impliedPaymentMethodType", "card");
								return l ? d ? e[t](r, l, d) : e[t](r, l) : d ? e[t](r, d) : e[t](r)
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
							createSource: this.wrappedCreateSource(e),
							createPaymentMethod: this.wrappedCreatePaymentMethod(e),
							handleCardPayment: this.wrappedHandleCardX(e, "handleCardPayment"),
							handleCardSetup: this.wrappedHandleCardX(e, "handleCardSetup")
						})
					}, r.prototype.render = function() {
						var t = this;
						return i.default.createElement(e, o({}, this.props, {
							stripe: this.state.stripe,
							elements: this.context.elements,
							ref: f ? function(e) {
								t.wrappedInstance = e
							} : null
						}))
					}, r
				}(i.default.Component), t.contextTypes = o({}, d.providerContextTypes, c.injectContextTypes), t.displayName = "InjectStripe(" + (e.displayName || e.name || "Component") + ")", r
			}
		},
		"./node_modules/react-stripe-elements/es/index.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.AuBankAccountElement = t.FpxBankElement = t.IdealBankElement = t.IbanElement = t.PaymentRequestButtonElement = t.CardCVCElement = t.CardCvcElement = t.CardExpiryElement = t.CardNumberElement = t.CardElement = t.Elements = t.injectStripe = t.StripeProvider = void 0;
			var n = c(r("./node_modules/react-stripe-elements/es/components/Provider.js")),
				o = c(r("./node_modules/react-stripe-elements/es/components/inject.js")),
				a = c(r("./node_modules/react-stripe-elements/es/components/Elements.js")),
				s = c(r("./node_modules/react-stripe-elements/es/components/Element.js")),
				i = c(r("./node_modules/react-stripe-elements/es/components/PaymentRequestButtonElement.js"));

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
			t.StripeProvider = n.default, t.injectStripe = o.default, t.Elements = a.default, t.CardElement = d, t.CardNumberElement = l, t.CardExpiryElement = u, t.CardCvcElement = p, t.CardCVCElement = m, t.PaymentRequestButtonElement = i.default, t.IbanElement = f, t.IdealBankElement = y, t.FpxBankElement = h, t.AuBankAccountElement = b
		},
		"./node_modules/react-stripe-elements/es/utils/isEqual.js": function(e, t, r) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			};
			t.default = function e(t, r) {
				if ("object" !== (void 0 === t ? "undefined" : n(t)) || "object" !== (void 0 === r ? "undefined" : n(r))) return t === r;
				if (null === t || null === r) return t === r;
				var o = Array.isArray(t);
				if (o !== Array.isArray(r)) return !1;
				var a = "[object Object]" === Object.prototype.toString.call(t);
				if (a !== ("[object Object]" === Object.prototype.toString.call(r))) return !1;
				if (!a && !o) return !1;
				var s = Object.keys(t),
					i = Object.keys(r);
				if (s.length !== i.length) return !1;
				for (var c = {}, d = 0; d < s.length; d += 1) c[s[d]] = !0;
				for (var l = 0; l < i.length; l += 1) c[i[l]] = !0;
				var u = Object.keys(c);
				if (u.length !== s.length) return !1;
				var p = t,
					m = r;
				return u.every((function(t) {
					return e(p[t], m[t])
				}))
			}
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
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return w
			})), r.d(t, "j", (function() {
				return S
			})), r.d(t, "g", (function() {
				return k
			})), r.d(t, "f", (function() {
				return N
			})), r.d(t, "d", (function() {
				return T
			})), r.d(t, "c", (function() {
				return R
			})), r.d(t, "a", (function() {
				return q
			})), r.d(t, "h", (function() {
				return B
			})), r.d(t, "e", (function() {
				return W
			})), r.d(t, "i", (function() {
				return G
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/lodash/omit.js"),
				a = r.n(o),
				s = r("./node_modules/uuid/v4.js"),
				i = r.n(s),
				c = r("./src/config.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/lib/addQueryParams/index.ts"),
				p = r("./src/lib/makeActionCreator/index.ts"),
				m = r("./src/lib/sentry/index.ts"),
				f = r("./src/reddit/models/Toast/index.ts"),
				y = r("./src/reddit/actions/gold/constants.ts"),
				h = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				b = r("./src/reddit/selectors/gold/productOffers.ts"),
				v = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				g = r("./src/reddit/selectors/user.ts"),
				C = r("./src/reddit/models/Gold/ProductOffer.ts"),
				E = r("./src/reddit/actions/gold/powerups.ts"),
				j = r("./src/reddit/actions/modal.ts"),
				_ = r("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				P = r("./src/reddit/models/Payments/index.ts");
			const O = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				x = e => e.map(e => e.message).join(" : "),
				w = (e, t, r) => async (o, a, {
					gqlContext: s
				}) => {
					const c = i()(),
						d = await Object(_.f)(s(), c, e, t, r);
					if (d.ok) {
						const e = d.body,
							{
								errors: t,
								order: r
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(x(t));
						if (r) return r.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, S = (e, t, r, o, a, s) => async (c, d, {
					gqlContext: l
				}) => {
					var u;
					const p = d(),
						f = () => c(Object(h.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						y = a === C.c.Premium,
						E = a === C.c.Powerups,
						j = {};
					if (E && s) j.powerUps = {
						subredditId: s,
						isAnonymous: r
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
							n = N || S ? O && S ? Object(_.h)(l(), t, k, O.id) : N ? Object(_.j)(l(), t, k, N) : null : Object(_.i)(l(), t, k, O.id),
							a = await n;
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
									error: r
								} = t;
							if (r) return void(r.message ? c(Object(h.stripeApiError)(r.message)) : f());
							let n;
							if (!(n = N ? await Object(_.e)(l(), i()(), b.id, N) : await Object(_.d)(l(), i()(), b.id, O.id, S)).ok) return void f();
							const o = n.body;
							if (!o.data.confirmEconPayment.ok || o.data.confirmEconPayment.payment.status !== _.a.Paid) return void f()
						} else if (m && b.status !== _.a.Paid) return void f();
						const C = Object(g.k)(d());
						C && (E && s ? c(B({
							subredditId: s,
							powerupsCount: o,
							user: C,
							isAnonymous: r
						})) : y && c(W({
							user: C
						})))
					} catch (T) {
						m.c.captureException(T), f()
					}
				}, k = (e, t, r, n, o) => async (a, s, {
					gqlContext: d
				}) => {
					var l;
					const p = s(),
						f = n === C.c.Premium,
						y = n === C.c.Powerups,
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
						E = await a(w(e, r, v))
					} catch (k) {
						return m.c.captureException(k), k.message && a(Object(h.paypalApiError)(k.message)), null
					}
					const j = c.a.redditUrl;
					let S = {
						_o: j,
						o: E,
						pt: n
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
							n = Object(u.a)(`${j}/framedModal/paypal-finish`, S),
							c = i()(),
							p = await Object(_.g)(d(), c, E, e, n);
						if (p && p.ok) {
							const e = p.body.data.createEconPayment;
							if (null === (l = null == e ? void 0 : e.errors) || void 0 === l ? void 0 : l.length) return a(Object(h.paypalApiError)(x(e.errors))), null;
							const n = Object(g.k)(s());
							if (e.ok) {
								const {
									status: s
								} = e.payment;
								if (s === _.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === s && n) return o ? a(B({
									subredditId: o,
									powerupsCount: r,
									user: n,
									isAnonymous: t
								})) : f && a(W({
									user: n
								})), null
							}
						}
					} catch (k) {
						m.c.captureException(k)
					}
					return a(Object(h.paypalApiError)(O())), null
				}, N = (e, t) => async (r, n, {
					gqlContext: o
				}) => {
					var a;
					try {
						const n = i()(),
							s = await Object(_.c)(o(), n, e, t);
						if (s && s.ok) {
							const e = s.body.data.confirmEconPayment;
							if (null === (a = null == e ? void 0 : e.errors) || void 0 === a ? void 0 : a.length) return r(Object(h.paypalApiError)(x(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (s) {
						m.c.captureException(s)
					}
					return r(Object(h.paypalApiError)(O())), !1
				}, T = () => async (e, t, {
					gqlContext: r
				}) => {
					e(Object(h.savedCardsPending)());
					try {
						const t = await Object(_.l)(r());
						if (t.ok) {
							const r = t.body;
							r.errors && r.errors.length && e(Object(h.stripeApiError)(r.errors[0].message));
							const {
								savedStripeCards: n
							} = r.data.identity, o = n.map(e => a()({
								...e,
								cardId: e.id
							}, "id"));
							e(Object(h.savedCardsSuccess)(o)), o[0] && e(Object(h.selectSavedCard)(o[0].cardId))
						} else e(Object(h.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						})))
					} catch (o) {
						m.c.captureException(o), e(Object(h.savedCardsSuccess)([]))
					}
				}, R = e => async (t, r, {
					gqlContext: n
				}) => {
					t(Object(h._deleteSavedCard)(e));
					try {
						const t = await Object(_.k)(n(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: o
							} = r.data.deleteEconPaymentMethod;
						if (o && o.length) throw new Error(x(o))
					} catch (o) {
						m.c.captureException(o)
					}
				}, I = Object(p.a)(y.O), M = Object(p.a)(y.P), A = Object(p.a)(y.Q), L = e => async (t, r) => {
					await t(I(e)), t(Object(l.f)({
						kind: f.b.Error,
						duration: l.a,
						text: e
					}))
				}, q = (e, t, r) => async (o, a, {
					gqlContext: s
				}) => {
					o(M({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const a = await Object(_.b)(s(), e);
						if (a.ok) {
							const e = a.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void o(L(n[0].message));
							o(A({
								subredditId: t,
								allocatedAt: r
							}))
						} else o(L(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						m.c.captureException(i), o(L(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, D = Object(p.a)(y.S), B = e => async (t, r) => {
					t(D(e)), t(Object(E.m)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(j.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(j.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, F = Object(p.a)(y.W), W = ({
					user: e
				}) => async t => {
					await t(Object(E.o)(!0)), t(F({
						user: e
					}))
				}, G = Object(p.a)(y.ab)
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
				i = r("./src/reddit/components/TrackingHelper/index.tsx"),
				c = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				d = r("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				l = r.n(d);
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
								gildThingId: r,
								onPaymentSelected: n,
								sendEvent: o
							} = this.props;
						switch (t) {
							case "creditCard":
								o(Object(c.d)(r));
								break;
							case "paypal":
								o(Object(c.e)(r))
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
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/paypal.png)`
						}
					})), a.a.createElement(u, {
						nightmode: t,
						selectedValue: r,
						onChange: this.onPaymentSelected,
						value: "creditCard"
					}, a.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/visa.png)`
						}
					}), a.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/mastercard.png)`
						}
					}), a.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/amex.png)`
						}
					}), a.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/discover.jpg)`
						}
					}))))
				}
			}
			t.a = Object(i.c)(p)
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
				s = r("./node_modules/react-stripe-elements/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				l = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				m = r("./src/reddit/controls/ErrorText/index.tsx");
			const {
				fbt: f
			} = r("./node_modules/fbt/lib/FbtPublic.js"), y = ({
				className: e
			}) => o.a.createElement(m.b, {
				className: e
			}, f._("Error loading Stripe, please refresh the page and try again", null, {
				hk: "2O1NWp"
			}));
			var h = r("./node_modules/fbt/lib/FbtPublic.js"),
				b = r("./src/config.ts"),
				v = r("./src/reddit/components/CheckoutForm/index.m.less"),
				g = r.n(v);
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
						cardExpiryValidation: r,
						cardName: n,
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
						value: n
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
							[g.a.cardInputError]: !!r
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
				P = r("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				O = r("./src/reddit/components/StripePaymentForm/index.m.less"),
				x = r.n(O);
			var w = e => {
					const {
						onToggleRememberCard: t,
						rememberCard: r
					} = e;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(_, {
						className: x.a.creditCard
					}), o.a.createElement(P.a, {
						className: x.a.saveCardCheckbox,
						isSelected: r,
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
				S = r("./src/reddit/icons/svgs/Trash2/index.tsx");
			const {
				fbt: k
			} = r("./node_modules/fbt/lib/FbtPublic.js"), N = e => 2 === e.length ? e : "0" + e, T = e => {
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
							savedCard: r
						} = this.props;
						t(r.cardId)
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
					onClickDeleteCard: r => t.shouldDeleteCardWithGql ? e(Object(d.c)(r)) : e(Object(l.deleteSavedCard)(r)),
					onToggleRememberCard: () => e(Object(l.toggleRememberCard)())
				}));
			class L extends o.a.PureComponent {
				render() {
					const {
						className: e,
						nightmode: t,
						onClickDeleteCard: r,
						onToggleRememberCard: n,
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
						onDelete: r,
						savedCard: s
					})), m && o.a.createElement(w, {
						onToggleRememberCard: n,
						rememberCard: a
					}))
				}
			}
			t.a = Object(s.injectStripe)(A(L))
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, r) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, r) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return C
			})), r.d(t, "c", (function() {
				return E
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/lodash/uniqueId.js"),
				a = r.n(o),
				s = r("./node_modules/raf/index.js"),
				i = r.n(s),
				c = r("./node_modules/react/index.js"),
				d = r.n(c),
				l = r("./src/lib/classNames/index.ts"),
				u = r("./src/higherOrderComponents/asModal/index.tsx"),
				p = r("./src/reddit/controls/Button/index.tsx"),
				m = r("./src/reddit/layout/row/Inline/index.tsx"),
				f = r("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				y = r.n(f);
			var h = Object(u.a)(e => {
					const {
						children: t,
						title: r
					} = e;
					return d.a.createElement("div", {
						className: y.a.wrapper
					}, d.a.createElement(m.a, {
						className: y.a.titleRow
					}, r), d.a.createElement("div", {
						className: y.a.detailsContainer
					}, t), d.a.createElement(m.a, {
						className: y.a.buttonRow
					}, d.a.createElement(p.l, {
						className: y.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				b = r("./src/reddit/controls/ErrorText/index.m.less"),
				v = r.n(b);
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
						errorModalBody: r,
						errorModalTitle: o = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: a = n.fbt._("More", null, {
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
					}, r || e))
				}
			}
			const C = e => {
					const {
						className: t,
						errorClassName: r,
						errorModalTitle: n,
						fallbackMessage: o,
						messages: a = []
					} = e, s = a.length ? a : o ? [o] : [];
					return s.length ? d.a.createElement("div", {
						className: t
					}, s.map((e, t) => d.a.createElement(g, {
						className: r,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				E = e => d.a.createElement(C, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = g
		},
		"./src/reddit/endpoints/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return b
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "i", (function() {
				return g
			})), r.d(t, "h", (function() {
				return C
			})), r.d(t, "j", (function() {
				return E
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "e", (function() {
				return P
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "l", (function() {
				return w
			})), r.d(t, "k", (function() {
				return S
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				o = r.n(n),
				a = r("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				s = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				i = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				c = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = r("./src/redditGQL/operations/CreateEconOrder.json"),
				l = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				u = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				p = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				m = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				f = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				y = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				h = r("./src/lib/makeGqlRequest/index.ts");
			const b = (e, t, r, n, a) => {
				const {
					premium: s,
					...i
				} = a, c = (null == s ? void 0 : s.pricePackage) || r.pricePackages[0], l = new o.a(c.price).multipliedBy(n).toFixed();
				return Object(h.a)(e, {
					...d,
					variables: {
						input: {
							nonce: t,
							productId: r.id,
							productVersion: r.version,
							pricePackageId: c.id,
							currency: c.currency,
							price: l,
							productsCount: n.toString(),
							...i
						}
					}
				})
			};
			var v;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(v || (v = {}));
			const g = (e, t, r, n) => Object(h.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				C = (e, t, r, n) => Object(h.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				E = (e, t, r, n) => Object(h.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: r,
						cardId: n
					}
				}),
				j = (e, t, r, n, o) => Object(h.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: r,
						successUrl: n,
						cancelUrl: o
					}
				}),
				_ = (e, t, r, n) => Object(h.a)(e, {
					...s,
					variables: {
						nonce: t,
						paymentId: r,
						token: n
					}
				}),
				P = (e, t, r, n) => Object(h.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: r,
						cardId: n
					}
				}),
				O = (e, t, r, n, o) => Object(h.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
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
		"./src/reddit/hooks/useStripe.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./src/config.ts"),
				o = r("./node_modules/react/index.js"),
				a = r("./node_modules/react-redux/es/index.js"),
				s = r("./src/reddit/constants/experiments.ts"),
				i = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const c = Object(i.a)(s.nc);

			function d() {
				const [e, t] = Object(o.useState)(null), r = Object(a.e)(c);
				return Object(o.useEffect)(() => {
					window.Stripe && t(window.Stripe(n.a.stripe.apiKey(r)))
				}, [r]), e
			}
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, o, a, s;
			r.d(t, "b", (function() {
					return o
				})), r.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
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
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return c
			})), r.d(t, "i", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "e", (function() {
				return p
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "c", (function() {
				return h
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "f", (function() {
				return v
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/makeProductOfferKey/index.ts"),
				a = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/models/Payments/index.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = e => e.subreddits.api.productOffers.pending,
				d = (e, {
					subredditId: t,
					type: r
				}) => {
					var n, a, s;
					return t ? e.subreddits.productOffers[Object(o.a)(r, t)] : null === (s = null === (a = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === a ? void 0 : a.productOffers) || void 0 === s ? void 0 : s[Object(o.a)(r)]
				},
				l = (e, {
					subredditId: t
				}) => {
					const r = d(e, {
						subredditId: t,
						type: a.c.Powerups
					});
					return r && r[0]
				},
				u = (e, t) => {
					var r;
					const n = l(e, t);
					return null === (r = null == n ? void 0 : n.pricePackages) || void 0 === r ? void 0 : r[0].price
				},
				p = e => {
					const t = d(e, {
						type: a.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				m = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === s.b.PayPal || e[0] === s.b.Stripe)(e.requiredPaymentProviders)) : null,
				f = Object(n.a)(p, i.p, (e, t) => m(e, t) || null),
				y = Object(n.a)(f, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				h = Object(n.a)(f, e => (null == e ? void 0 : e[0].price) || null),
				b = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				v = Object(n.a)(b, e => Boolean(null == e ? void 0 : e.isCanceled))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal.eefcb8e5fe20aae5e4ce.js.map