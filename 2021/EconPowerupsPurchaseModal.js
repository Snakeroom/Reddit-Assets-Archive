// https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.81b4b533e43bf801516e.js
// Retrieved at 6/10/2021, 5:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconPowerupsPurchaseModal"], {
		"./node_modules/react-stripe-elements/es/components/Element.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = i(n("./node_modules/react/index.js")),
				a = i(n("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
				o = i(n("./node_modules/react-stripe-elements/es/utils/isEqual.js")),
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
						var a = d(this, t.call(this, e, r));
						a.handleRef = function(e) {
							a._ref = e
						}, a._element = null;
						var o = p(a.props);
						return a._options = o, a
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
						0 === Object.keys(e).length || (0, o.default)(e, this._options) || (this._options = e, this._element && this._element.update(e))
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
				a = i(n("./node_modules/react/index.js")),
				o = i(n("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
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
					getRegisteredElements: o.default.func.isRequired,
					elements: o.default.object
				},
				u = t.elementContextTypes = {
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
						o._elements = null, o.handleRegisterElement = function(e, t, n, a) {
							o.setState((function(o) {
								return {
									registeredElements: [].concat(d(o.registeredElements), [r({
										element: e
									}, t ? {
										impliedTokenType: t
									} : {}, n ? {
										impliedSourceType: n
									} : {}, a ? {
										impliedPaymentMethodType: a
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
						};
						var s = o.props,
							i = (s.children, c(s, ["children"]));
						return "sync" === o.context.tag && (o._elements = o.context.stripe.elements(i)), o.state = {
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
								if ("sync" === e.context.tag) {
									if (!e._elements) throw new Error("Expected elements to be instantiated but it was not.");
									t(e._elements)
								} else e.context.addStripeLoadListener((function(n) {
									if (e._elements) t(e._elements);
									else {
										var r = e.props,
											a = (r.children, c(r, ["children"]));
										e._elements = n.elements(a), t(e._elements)
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
						return a.default.Children.only(this.props.children)
					}, t
				}(a.default.Component);
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
				a = c(n("./node_modules/react/index.js")),
				o = c(n("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
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
						var a = function(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this, n, r));
						a.handleRef = function(e) {
							a._ref = e
						};
						var o = l(n);
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
					}, t.prototype.componentDidUpdate = function(e) {
						this.props.paymentRequest !== e.paymentRequest && console.warn("Unsupported prop change: paymentRequest is not a customizable property.");
						var t = l(this.props);
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
							var a = r.props,
								o = a.apiKey,
								s = (a.children, function(e, t) {
									var n = {};
									for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
									return n
								}(a, ["apiKey", "children"])),
								d = i(o, s);
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
				apiKey: a.default.string,
				stripe: a.default.object,
				children: a.default.node
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
						var a = p(this, t.call(this, e, r));
						return a.parseElementOrData = function(e) {
							return e && "object" === (void 0 === e ? "undefined" : o(e)) && e._frame && "object" === o(e._frame) && e._frame.id && "string" == typeof e._frame.id && "string" == typeof e._componentName ? {
								type: "element",
								element: e
							} : {
								type: "data",
								data: e
							}
						}, a.findElement = function(e, t) {
							var n = a.context.getRegisteredElements().filter((function(t) {
									return t[e]
								})),
								r = "auto" === t ? n : n.filter((function(n) {
									return n[e] === t
								}));
							if (1 === r.length) return r[0].element;
							if (r.length > 1) throw new Error("You did not specify the type of Source, Token, or PaymentMethod to create.\n        We could not infer which Element you want to use for this operation.");
							return null
						}, a.requireElement = function(e, t) {
							var n = a.findElement(e, t);
							if (n) return n;
							throw new Error("You did not specify the type of Source, Token, or PaymentMethod to create.\n        We could not infer which Element you want to use for this operation.")
						}, a.wrappedCreateToken = function(e) {
							return function() {
								var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
									n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
								if (t && "object" === (void 0 === t ? "undefined" : o(t))) {
									var r = t,
										s = r.type,
										i = l(r, ["type"]),
										c = "string" == typeof s ? s : "auto",
										d = a.requireElement("impliedTokenType", c);
									return e.createToken(d, i)
								}
								if ("string" == typeof t) {
									var u = t;
									return e.createToken(u, n)
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
						}, a.wrappedCreatePaymentMethod = function(e) {
							return function(t, n, r) {
								if (t && "object" === (void 0 === t ? "undefined" : o(t))) return e.createPaymentMethod(t);
								if (!t || "string" != typeof t) throw new Error("Invalid PaymentMethod type passed to createPaymentMethod. Expected a string, got " + (void 0 === t ? "undefined" : o(t)) + ".");
								var s = a.parseElementOrData(n);
								if ("element" === s.type) {
									var i = s.element;
									return r ? e.createPaymentMethod(t, i, r) : e.createPaymentMethod(t, i)
								}
								var c = s.data,
									d = a.findElement("impliedPaymentMethodType", t);
								if (d) return c ? e.createPaymentMethod(t, d, c) : e.createPaymentMethod(t, d);
								if (c && "object" === (void 0 === c ? "undefined" : o(c))) return e.createPaymentMethod(t, c);
								throw c ? new Error("Invalid data passed to createPaymentMethod. Expected an object, got " + (void 0 === c ? "undefined" : o(c)) + ".") : new Error("Could not find an Element that can be used to create a PaymentMethod of type: " + t + ".")
							}
						}, a.wrappedHandleCardX = function(e, t) {
							return function(n, r, s) {
								if (!n || "string" != typeof n) throw new Error("Invalid PaymentIntent client secret passed to handleCardPayment. Expected string, got " + (void 0 === n ? "undefined" : o(n)) + ".");
								var i = a.parseElementOrData(r);
								if ("element" === i.type) {
									var c = i.element;
									return s ? e[t](n, c, s) : e[t](n, c)
								}
								var d = i.data,
									l = a.findElement("impliedPaymentMethodType", "card");
								return l ? d ? e[t](n, l, d) : e[t](n, l) : d ? e[t](n, d) : e[t](n)
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
						if (!f) throw new Error("To access the wrapped instance, the `{withRef: true}` option must be set when calling `injectStripe()`");
						return this.wrappedInstance
					}, n.prototype.stripeProps = function(e) {
						return a({}, e, {
							createToken: this.wrappedCreateToken(e),
							createSource: this.wrappedCreateSource(e),
							createPaymentMethod: this.wrappedCreatePaymentMethod(e),
							handleCardPayment: this.wrappedHandleCardX(e, "handleCardPayment"),
							handleCardSetup: this.wrappedHandleCardX(e, "handleCardSetup")
						})
					}, n.prototype.render = function() {
						var t = this;
						return i.default.createElement(e, a({}, this.props, {
							stripe: this.state.stripe,
							elements: this.context.elements,
							ref: f ? function(e) {
								t.wrappedInstance = e
							} : null
						}))
					}, n
				}(i.default.Component), t.contextTypes = a({}, d.providerContextTypes, c.injectContextTypes), t.displayName = "InjectStripe(" + (e.displayName || e.name || "Component") + ")", n
			}
		},
		"./node_modules/react-stripe-elements/es/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.AuBankAccountElement = t.FpxBankElement = t.IdealBankElement = t.IbanElement = t.PaymentRequestButtonElement = t.CardCVCElement = t.CardCvcElement = t.CardExpiryElement = t.CardNumberElement = t.CardElement = t.Elements = t.injectStripe = t.StripeProvider = void 0;
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
				h = (0, s.default)("idealBank", {
					impliedSourceType: "ideal"
				}),
				y = (0, s.default)("fpxBank"),
				b = (0, s.default)("auBankAccount");
			t.StripeProvider = r.default, t.injectStripe = a.default, t.Elements = o.default, t.CardElement = d, t.CardNumberElement = l, t.CardExpiryElement = u, t.CardCvcElement = p, t.CardCVCElement = m, t.PaymentRequestButtonElement = i.default, t.IbanElement = f, t.IdealBankElement = h, t.FpxBankElement = y, t.AuBankAccountElement = b
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
				var a = Array.isArray(t);
				if (a !== Array.isArray(n)) return !1;
				var o = "[object Object]" === Object.prototype.toString.call(t);
				if (o !== ("[object Object]" === Object.prototype.toString.call(n))) return !1;
				if (!o && !a) return !1;
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
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return O
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "f", (function() {
				return N
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "d", (function() {
				return M
			})), n.d(t, "c", (function() {
				return T
			})), n.d(t, "a", (function() {
				return B
			})), n.d(t, "g", (function() {
				return D
			})), n.d(t, "h", (function() {
				return F
			})), n.d(t, "i", (function() {
				return U
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/omit.js"),
				o = n.n(a),
				s = n("./node_modules/uuid/v4.js"),
				i = n.n(s),
				c = n("./src/config.ts"),
				d = n("./src/reddit/constants/modals.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/lib/addQueryParams/index.ts"),
				p = n("./src/lib/makeActionCreator/index.ts"),
				m = n("./src/lib/sentry/index.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/actions/gold/constants.ts"),
				y = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				b = n("./src/reddit/selectors/gold/productOffers.ts"),
				g = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/models/Gold/ProductOffer.ts"),
				P = n("./src/reddit/actions/gold/powerups.ts"),
				C = n("./src/reddit/actions/modal.ts"),
				w = n("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				j = n("./src/reddit/models/Payments/index.ts");
			const _ = () => r.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				x = e => e.map(e => e.message).join(" : "),
				O = (e, t, n) => async (a, o, {
					gqlContext: s
				}) => {
					const c = i()(),
						d = await Object(w.f)(s(), c, e, t, n);
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
				}, S = (e, t, n, a, o, s) => async (c, d, {
					gqlContext: l
				}) => {
					var u;
					const p = d(),
						f = () => c(Object(y.stripeApiError)(r.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						h = o === E.c.Premium,
						P = o === E.c.Powerups,
						C = {};
					if (P && s) C.powerUps = {
						subredditId: s,
						isAnonymous: n
					};
					else if (h) {
						const e = Object(b.c)(p, {
							provider: j.b.Stripe
						});
						if (!e) return;
						C.premium = {
							pricePackage: e
						}
					}
					let _, S, N = "";
					try {
						N = await c(O(t, a, C))
					} catch (M) {
						return m.c.captureException(M), void(M.message && c(Object(y.stripeApiError)(M.message)))
					}
					c(Object(y.stripeTokenPending)());
					const k = Object(g.y)(p);
					if (k || (_ = await c(Object(y.validateAndCreateStripeToken)(e)), S = Object(g.v)(p), _)) try {
						const t = i()(),
							r = k || S ? _ && S ? Object(w.h)(l(), t, N, _.id) : k ? Object(w.j)(l(), t, N, k) : null : Object(w.i)(l(), t, N, _.id),
							o = await r;
						if (!(null == o ? void 0 : o.ok)) return void f();
						const p = o.body.data.createEconPayment;
						if (null === (u = null == p ? void 0 : p.errors) || void 0 === u ? void 0 : u.length) return void c(Object(y.stripeApiError)(x(p.errors)));
						const {
							ok: m,
							payment: b,
							providerExecution: {
								paymentIntentClientSecret: g
							}
						} = p;
						if (m && b.status === w.a.ActionRequired) {
							const t = await e.confirmCardPayment(g),
								{
									error: n
								} = t;
							if (n) return void(n.message ? c(Object(y.stripeApiError)(n.message)) : f());
							let r;
							if (!(r = k ? await Object(w.e)(l(), i()(), b.id, k) : await Object(w.d)(l(), i()(), b.id, _.id, S)).ok) return void f();
							const a = r.body;
							if (!a.data.confirmEconPayment.ok || a.data.confirmEconPayment.payment.status !== w.a.Paid) return void f()
						} else if (m && b.status !== w.a.Paid) return void f();
						const E = Object(v.j)(d());
						E && (P && s ? c(D({
							subredditId: s,
							powerupsCount: a,
							user: E,
							isAnonymous: n
						})) : h && c(F({
							user: E
						})))
					} catch (M) {
						m.c.captureException(M), f()
					}
				}, N = (e, t, n, r, a) => async (o, s, {
					gqlContext: d
				}) => {
					var l;
					const p = s(),
						f = r === E.c.Premium,
						h = r === E.c.Powerups,
						g = {};
					if (h && a) g.powerUps = {
						subredditId: a,
						isAnonymous: t
					};
					else if (f) {
						const e = Object(b.c)(p, {
							provider: j.b.PayPal
						});
						if (!e) return null;
						g.premium = {
							pricePackage: e
						}
					}
					let P = "";
					try {
						P = await o(O(e, n, g))
					} catch (N) {
						return m.c.captureException(N), N.message && o(Object(y.paypalApiError)(N.message)), null
					}
					const C = c.a.redditUrl;
					let S = {
						_o: C,
						o: P,
						pt: r
					};
					h && a && (S = {
						...S,
						r: a
					});
					try {
						const e = Object(u.a)(`${C}/framedModal/paypal-finish`, {
								...S,
								s: !0
							}),
							r = Object(u.a)(`${C}/framedModal/paypal-finish`, S),
							c = i()(),
							p = await Object(w.g)(d(), c, P, e, r);
						if (p && p.ok) {
							const e = p.body.data.createEconPayment;
							if (null === (l = null == e ? void 0 : e.errors) || void 0 === l ? void 0 : l.length) return o(Object(y.paypalApiError)(x(e.errors))), null;
							const r = Object(v.j)(s());
							if (e.ok) {
								const {
									status: s
								} = e.payment;
								if (s === w.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === s && r) return a ? o(D({
									subredditId: a,
									powerupsCount: n,
									user: r,
									isAnonymous: t
								})) : f && o(F({
									user: r
								})), null
							}
						}
					} catch (N) {
						m.c.captureException(N)
					}
					return o(Object(y.paypalApiError)(_())), null
				}, k = (e, t) => async (n, r, {
					gqlContext: a
				}) => {
					var o;
					try {
						const r = i()(),
							s = await Object(w.c)(a(), r, e, t);
						if (s && s.ok) {
							const e = s.body.data.confirmEconPayment;
							if (null === (o = null == e ? void 0 : e.errors) || void 0 === o ? void 0 : o.length) return n(Object(y.paypalApiError)(x(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (s) {
						m.c.captureException(s)
					}
					return n(Object(y.paypalApiError)(_())), !1
				}, M = () => async (e, t, {
					gqlContext: n
				}) => {
					e(Object(y.savedCardsPending)());
					try {
						const t = await Object(w.l)(n());
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
				}, T = e => async (t, n, {
					gqlContext: r
				}) => {
					t(Object(y._deleteSavedCard)(e));
					try {
						const t = await Object(w.k)(r(), e);
						if (t.error) throw new Error(t.error.type);
						const n = t.body,
							{
								errors: a
							} = n.data.deleteEconPaymentMethod;
						if (a && a.length) throw new Error(x(a))
					} catch (a) {
						m.c.captureException(a)
					}
				}, I = Object(p.a)(h.N), L = Object(p.a)(h.O), R = Object(p.a)(h.P), A = e => async (t, n) => {
					await t(I(e)), t(Object(l.f)({
						kind: f.b.Error,
						duration: l.a,
						text: e
					}))
				}, B = (e, t, n) => async (a, o, {
					gqlContext: s
				}) => {
					a(L({
						subredditId: t,
						allocatedAt: n
					}));
					try {
						const o = await Object(w.b)(s(), e);
						if (o.ok) {
							const e = o.body,
								{
									errors: r
								} = e.data.cancelEconRecurringPayment;
							if (r && r.length) return void a(A(r[0].message));
							a(R({
								subredditId: t,
								allocatedAt: n
							}))
						} else a(A(r.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						m.c.captureException(i), a(A(r.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, q = Object(p.a)(h.R), D = e => async (t, n) => {
					t(q(e)), t(Object(P.i)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(C.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(C.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, F = Object(p.a)(h.V), U = Object(p.a)(h.Z)
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "selectPaymentMethod", (function() {
				return d
			})), n.d(t, "paymentCompleted", (function() {
				return l
			})), n.d(t, "cardNameInput", (function() {
				return u
			})), n.d(t, "postalCodeInput", (function() {
				return p
			})), n.d(t, "cardNameEmpty", (function() {
				return m
			})), n.d(t, "cardElementChange", (function() {
				return f
			})), n.d(t, "stripeTokenPending", (function() {
				return h
			})), n.d(t, "stripeTokenError", (function() {
				return y
			})), n.d(t, "stripeApiError", (function() {
				return b
			})), n.d(t, "validateAndCreateStripeToken", (function() {
				return g
			})), n.d(t, "paypalApiError", (function() {
				return v
			})), n.d(t, "toggleRememberCard", (function() {
				return E
			})), n.d(t, "selectSavedCard", (function() {
				return P
			})), n.d(t, "_deleteSavedCard", (function() {
				return C
			})), n.d(t, "deleteSavedCard", (function() {
				return w
			})), n.d(t, "savedCardsPending", (function() {
				return j
			})), n.d(t, "savedCardsSuccess", (function() {
				return _
			})), n.d(t, "loadSavedCards", (function() {
				return x
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/sentry/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/endpoints/gold/purchase.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(o.a)(i.B),
				l = Object(o.a)(i.w),
				u = Object(o.a)(i.b),
				p = Object(o.a)(i.y),
				m = Object(o.a)(i.a),
				f = Object(o.a)(i.E),
				h = Object(o.a)(i.G),
				y = Object(o.a)(i.F),
				b = Object(o.a)(i.D),
				g = e => async (t, n) => {
					const a = n(),
						o = Object(c.h)(a),
						s = Object(c.l)(a),
						{
							token: i,
							error: d
						} = await e.createToken({
							name: o,
							address_zip: s
						});
					if (o.trim()) {
						if (!d && i) return i;
						t(y(d || void 0))
					} else {
						const e = r.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(m({
							message: e
						}))
					}
				}, v = Object(o.a)(i.x), E = Object(o.a)(i.H), P = Object(o.a)(i.C), C = Object(o.a)(i.g), w = e => async (t, n, {
					apiContext: r
				}) => {
					t(C(e));
					try {
						const t = await Object(s.a)(r(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (o) {
						a.c.captureException(o)
					}
				}, j = Object(o.a)(i.z), _ = Object(o.a)(i.A), x = () => async (e, t, {
					apiContext: n
				}) => {
					e(j());
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
						e(_(r)), r[0] && e(P(r[0].cardId))
					} catch (r) {
						a.c.captureException(r), e(_([]))
					}
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
				d = n("./node_modules/react-stripe-elements/es/index.js"),
				l = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				u = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				p = n("./src/reddit/components/CheckoutForm/index.m.less"),
				m = n.n(p);
			const f = Object(i.c)({
					cardCvcValidation: u.f,
					cardExpiryValidation: u.g,
					cardName: u.h,
					cardNumberValidation: u.i,
					nameOnCardValidation: u.k,
					postalCode: u.l
				}),
				h = Object(s.b)(f, (e, t) => ({
					onCardElementChange: t => e(Object(l.cardElementChange)(t)),
					onNameInput: t => e(Object(l.cardNameInput)({
						cardName: t
					})),
					onPostalCodeInput: t => e(Object(l.postalCodeInput)({
						postalCode: t
					}))
				}));
			class y extends o.a.Component {
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
						cardName: a,
						cardNumberValidation: s,
						onCardElementChange: i,
						nameOnCardValidation: l,
						postalCode: u
					} = this.props, {
						cardNumberReady: p,
						cardExpiryReady: f,
						cardCVCReady: h
					} = this.state, y = {
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
						placeholder: r.fbt._("NAME ON CARD", null, {
							hk: "IgrlQ"
						}).toString(),
						onChange: this.onChangeCardName,
						value: a
					})), o.a.createElement("div", {
						className: m.a.formCell
					}, o.a.createElement(d.CardNumberElement, {
						className: Object(c.a)(m.a.cardInput, {
							[m.a.cardInputError]: !!s
						}),
						onChange: i,
						onReady: this.onCardNumberReady,
						placeholder: r.fbt._("CARD NUMBER", null, {
							hk: "3pqMxG"
						}).toString(),
						style: y
					}), !p && o.a.createElement("div", {
						className: m.a.elementPlaceholder
					}, r.fbt._("CARD NUMBER", null, {
						hk: "3pqMxG"
					}))), o.a.createElement("div", {
						className: m.a.formCell
					}, o.a.createElement(d.CardExpiryElement, {
						className: Object(c.a)(m.a.cardInput, {
							[m.a.cardInputError]: !!n
						}),
						onChange: i,
						onReady: this.onCardExpiryReady,
						placeholder: r.fbt._("MM/YY", null, {
							hk: "Hou17"
						}).toString(),
						style: y
					}), !f && o.a.createElement("div", {
						className: m.a.elementPlaceholder
					}, r.fbt._("MM/YY", null, {
						hk: "Hou17"
					}))), o.a.createElement("div", {
						className: m.a.formCell
					}, o.a.createElement(d.CardCVCElement, {
						className: Object(c.a)(m.a.cardInput, {
							[m.a.cardInputError]: !!t
						}),
						onChange: i,
						onReady: this.onCardCVCReady,
						placeholder: r.fbt._("CCV", null, {
							hk: "dZzZJ"
						}).toString(),
						style: y
					}), !h && o.a.createElement("div", {
						className: m.a.elementPlaceholder
					}, r.fbt._("CCV", null, {
						hk: "dZzZJ"
					}))), o.a.createElement("div", {
						className: m.a.formCell
					}, o.a.createElement("input", {
						className: Object(c.a)(m.a.cardInput, m.a.nameOnCard),
						type: "text",
						onChange: this.onChangePostalCode,
						placeholder: r.fbt._("ZIP CODE", null, {
							hk: "2lJZ4j"
						}).toString(),
						value: u
					})))
				}
			}
			t.a = Object(d.injectStripe)(h(y))
		},
		"./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less": function(e, t, n) {
			e.exports = {
				image: "_2UM9VBeA7xU3ro_DBfudN2"
			}
		},
		"./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/config.ts"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.m.less"),
				i = n.n(s);
			const c = e => o.a.createElement("div", {
				className: e.className
			}, o.a.createElement("picture", null, o.a.createElement("source", {
				srcSet: `${r.a.assetPath}/img/powerups/rotating-bolt.webp`,
				type: "image/webp"
			}), o.a.createElement("source", {
				srcSet: `${r.a.assetPath}/img/powerups/powerup.png`,
				type: "image/png"
			}), o.a.createElement("img", {
				className: i.a.image,
				src: `${r.a.assetPath}/img/powerups/powerup.png`
			})))
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3-wzlsd2L9K9BE7yms9IhJ",
				imageContainer: "_2moFyXtJlZerLLuTvZ9TYQ",
				title: "_258n2TylpikH2fhZLhlAgr",
				subtitle: "_1AYSLhpiU1fIwgPPxu2Xuy"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/reddit/components/Econ/Common/PowerupRotatingBolt/index.tsx"),
				i = n("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.m.less"),
				c = n.n(i);
			t.a = e => o.a.createElement("header", {
				className: Object(r.a)(c.a.container, e.className)
			}, o.a.createElement(s.a, {
				className: c.a.imageContainer
			}), o.a.createElement("div", null, o.a.createElement("h2", {
				className: c.a.title
			}, e.title), o.a.createElement("h3", {
				className: c.a.subtitle
			}, e.subtitle)))
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsPremiumButton/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_1mc-IVNBsfKUugqkP3rda7",
				loadingIcon: "_15g-u6pLWEgyq-W1q8zSji"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/PowerupsCount/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/ProgressBar/index.m.less": function(e, t, n) {
			e.exports = {
				titleRow: "_1i5gFES8rHCUngNfydAuWr",
				barRow: "_2C7hWoSd6z9a-xV6Z3dnje",
				track: "No3J_0QnbZSfXaewR0dYK",
				progress: "_3oU4QH4ZKf2Ju86PxWmVvt",
				additionalProgress: "_31fdHeoPmiYpMGtd2vSSdL",
				opacityBlink: "_1eAQSptthEkyF-iGElcw0A"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2iu3jX5bVR5jy7OP6neJ4W",
				count: "_2AMO2XnYhlJu67x263BGll"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Econ/PowerupsPurchaseModal/index.m.less": function(e, t, n) {
			e.exports = {
				modal: "_2f9jiTDa9UHMVSyfqhg9zd",
				closeButton: "xqo3g-oX5emMzx0ruxYkF",
				closeIcon: "_3FE6QbodV9pkVNpABuNryv",
				header: "_2lqkgMZi8MtfVB-gqhYqy8"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/constants/modals.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/icons/svgs/Close/index.tsx"),
				m = n("./src/reddit/components/Econ/PowerupsMarketingModal/Header/index.tsx"),
				f = n("./src/config.ts"),
				h = n("./node_modules/react-stripe-elements/es/index.js"),
				y = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/lib/constants/index.ts"),
				g = n("./src/reddit/helpers/trackers/powerups.ts"),
				v = n("./src/reddit/actions/gold/powerups.ts"),
				E = n("./src/reddit/actions/gold/productOfferPurchase.ts"),
				P = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				C = n("./src/reddit/models/Gold/ProductOffer.ts"),
				w = n("./src/reddit/selectors/gold/powerups/index.ts"),
				j = n("./src/reddit/selectors/gold/productOffers.ts"),
				_ = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				x = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				S = n("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				N = n("./src/reddit/components/StripePaymentForm/index.tsx"),
				k = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				M = n("./src/reddit/icons/svgs/Premium/index.tsx"),
				T = n("./src/reddit/hooks/useThunkDispatch.ts"),
				I = n("./src/reddit/controls/Button/index.tsx");
			const {
				fbt: L
			} = n("./node_modules/fbt/lib/FbtPublic.js"), R = Object(s.c)({
				currentUser: x.j,
				isAnonymous: w.c,
				powerupsCount: w.d,
				productOffer: j.a
			});
			var A = Object(o.b)(R)(a.a.memo((function(e) {
					const {
						className: t,
						currentUser: n,
						isAnonymous: o,
						powerupsCount: s,
						productOffer: i,
						subredditId: c
					} = e, d = Object(T.a)();
					Object(r.useEffect)(() => (window.addEventListener("message", m, !1), () => window.removeEventListener("message", m)), []);
					const [l, u] = Object(r.useState)(!1);
					let p = null;
					if (!n) return null;
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
							d(Object(E.g)({
								subredditId: c,
								powerupsCount: s,
								user: n,
								isAnonymous: o
							}))
						};
					return a.a.createElement(I.i, {
						onClick: async () => {
							if (!i) return;
							u(!0);
							const e = await d(Object(E.f)(i, o, s, C.c.Powerups, c));
							if (e) {
								const {
									url: t
								} = e, n = 580, r = 740, a = Math.max(window.screenX + Math.round((window.outerWidth - n) / 2), 0), o = Math.max(window.screenY + Math.round((window.outerHeight - r) / 2), 0);
								p = window.open(`${t}&rnd=${Math.random()}`, "RedditPaypalPayment", `height=${r},width=${n},top=${o},left=${a},modal=yes,alwaysRaised=yes`)
							}
							u(!1)
						},
						className: t,
						disabled: l
					}, L._("Continue to PayPal", null, {
						hk: "1T4BEy"
					}))
				}))),
				B = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				q = n("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsPremiumButton/index.m.less"),
				D = n.n(q);
			const {
				fbt: F
			} = n("./node_modules/fbt/lib/FbtPublic.js"), U = Object(s.c)({
				isAnonymous: w.c,
				isPending: w.b
			}), V = Object(o.b)(U), W = 12;
			var z = V((function(e) {
					const {
						className: t,
						isAnonymous: n,
						isPending: r,
						subredditId: s
					} = e, i = Object(o.d)();
					return a.a.createElement(I.i, {
						onClick: () => {
							i(Object(v.f)(1)), i(Object(v.g)(s, 1, n))
						},
						className: Object(l.a)(t, D.a.button),
						disabled: r
					}, r ? a.a.createElement(B.a, {
						className: D.a.loadingIcon,
						sizePx: W
					}) : F._("Apply Your Powerup", null, {
						hk: "1PoAEc"
					}))
				})),
				H = n("./src/reddit/components/PowerupsSidebar/common/utils.ts"),
				G = n("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/PowerupsCount/index.m.less"),
				Q = n.n(G);
			var J = function(e) {
					const {
						className: t,
						onChange: n,
						style: r,
						value: o,
						min: s,
						max: i
					} = e, c = e => n(Math.max(Math.min(o + e, i || Number.POSITIVE_INFINITY), s || 0)), d = i === s, u = Object(H.a)(o);
					return a.a.createElement("div", {
						className: Object(l.a)(t, Q.a.container),
						style: r
					}, a.a.createElement("div", {
						className: Object(l.a)(Q.a.control, {
							[Q.a.locked]: d
						})
					}, !d && a.a.createElement("button", {
						className: Object(l.a)(Q.a.button, Q.a.decrementButton),
						onClick: () => c(-1)
					}), a.a.createElement("div", {
						className: Q.a.value
					}, a.a.createElement(u, {
						className: Q.a.icon
					}), a.a.createElement("span", null, o)), !d && a.a.createElement("button", {
						className: Object(l.a)(Q.a.button, Q.a.incrementButton),
						onClick: () => c(1)
					})))
				},
				X = n("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/ProgressBar/index.m.less"),
				K = n.n(X);
			const {
				fbt: Z
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Y = e => {
					const {
						additionalCount: t,
						className: n,
						count: r,
						maxCount: o
					} = e;
					if (!o) return null;
					const s = Math.min(o, r) / o,
						i = Math.min(o, r + (t || 0)) / o;
					return a.a.createElement("div", {
						className: n
					}, a.a.createElement("div", {
						className: K.a.titleRow
					}, a.a.createElement("span", null, Z._("Powerups", null, {
						hk: "DrcXp"
					})), a.a.createElement("span", null, r < o ? `${r}/${o}` : r)), a.a.createElement("div", {
						className: K.a.barRow
					}, a.a.createElement("div", {
						className: K.a.track
					}), a.a.createElement("div", {
						className: K.a.progress,
						style: {
							width: `${100*s}%`
						}
					}), t && a.a.createElement("div", {
						className: K.a.additionalProgress,
						style: {
							width: `${100*(i-s)}%`,
							left: `${100*s}%`
						}
					})))
				},
				$ = n("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/PowerupsProgressControl/index.m.less"),
				ee = n.n($);
			var te = function(e) {
				const {
					className: t,
					count: n,
					maxCount: r,
					onChange: o,
					powerups: s
				} = e, {
					tier: i,
					tiersInfo: c
				} = s, d = (c[i] || c[i - 1]).powerupsCost;
				if (!d) return null;
				const u = Math.min(d, d / 2 + s.count / 2, s.count + (n || 0) / 2) / d;
				return a.a.createElement("div", {
					className: Object(l.a)(t, ee.a.container)
				}, a.a.createElement(Y, {
					additionalCount: n,
					className: ee.a.bar,
					count: s.count,
					maxCount: d
				}), a.a.createElement(J, {
					className: ee.a.count,
					style: {
						left: `${100*u}%`
					},
					value: n,
					min: 1,
					max: r,
					onChange: o
				}))
			};
			const {
				fbt: ne
			} = n("./node_modules/fbt/lib/FbtPublic.js"), re = Object(s.c)({
				isAnonymous: w.c,
				powerupsCount: w.d,
				productOffer: j.a,
				savedCardsPending: _.w,
				stripeTokenPending: _.m
			}), ae = Object(o.b)(re);
			var oe = Object(h.injectStripe)(ae((function(e) {
					const {
						className: t,
						isAnonymous: n,
						powerupsCount: r,
						productOffer: s,
						savedCardsPending: i,
						stripe: c,
						stripeTokenPending: d,
						subredditId: l
					} = e, u = Object(o.d)(), p = d || i;
					return a.a.createElement(I.i, {
						onClick: () => {
							c && s && u(Object(E.j)(c, s, n, r, C.c.Powerups, l))
						},
						className: t,
						disabled: p || !c
					}, ne._("Complete purchase", null, {
						hk: "KaR26"
					}))
				}))),
				se = n("./src/reddit/components/Econ/PowerupsPurchaseModal/PowerupsPurchase/index.m.less"),
				ie = n.n(se);
			const {
				fbt: ce
			} = n("./node_modules/fbt/lib/FbtPublic.js"), de = 100, le = Object(s.c)({
				isAnonymous: w.c,
				isNightMode: x.W,
				paypalErrorMessage: _.d,
				powerups: w.i,
				powerupsCount: w.d,
				productOffer: (e, {
					subredditId: t
				}) => {
					const n = Object(j.h)(e, {
						subredditId: t,
						type: C.c.Powerups
					});
					return n && n[0]
				},
				stripeErrorMessage: _.j,
				userPowerupsData: w.v
			});
			var ue = Object(o.b)(le)((function(e) {
					const {
						isAnonymous: t,
						isNightMode: n,
						onCloseModal: s,
						paypalErrorMessage: i,
						powerups: c,
						powerupsCount: d,
						productOffer: l,
						stripeErrorMessage: u,
						subredditId: p,
						userPowerupsData: m
					} = e, C = Object(o.d)(), [w, j] = Object(r.useState)(b.Eb);
					Object(r.useEffect)(() => {
						C(Object(E.d)()), C(Object(P.selectPaymentMethod)(w))
					}, []);
					const _ = Object(y.a)();
					Object(r.useEffect)(() => {
						_(Object(g.g)())
					}, []);
					const x = l && l.pricePackages.length ? l.pricePackages[0].price : 0;
					if (!x || !c) return s(), null;
					const T = (d * x / 100).toFixed(2),
						I = !!(null == m ? void 0 : m.freeCount);
					return a.a.createElement(h.StripeProvider, {
						apiKey: f.a.stripe.apiKey
					}, a.a.createElement(h.Elements, null, a.a.createElement(a.a.Fragment, null, a.a.createElement(te, {
						className: ie.a.progressControl,
						count: d,
						maxCount: I ? 1 : de,
						onChange: e => C(Object(v.f)(e)),
						powerups: c
					}), a.a.createElement("div", {
						className: ie.a.details
					}, a.a.createElement(k.a, {
						className: ie.a.anonymousCheckbox,
						isSelected: t,
						onClick: () => (e => C(Object(v.b)(e)))(!t),
						text: ce._("Powerup anonymously", null, {
							hk: "YXX31"
						})
					}), !I && a.a.createElement("div", {
						className: ie.a.purchaseDetails
					}, ce._({
						"*": "{powerups} Powerups {powerup price} /mo",
						_1: "1 Powerup {powerup price} /mo"
					}, [ce._plural(d, "powerups"), ce._param("powerup price", `$${T.toLocaleString()}`)], {
						hk: "3cOqa5"
					}))), !I && a.a.createElement(a.a.Fragment, null, a.a.createElement("h3", {
						className: ie.a.paymentMethodTitle
					}, ce._("Payment Method", null, {
						hk: "3EbT3q"
					})), a.a.createElement(S.a, {
						className: ie.a.paymentMethodSelector,
						nightmode: n,
						selectedPayment: w,
						onPaymentSelected: e => {
							j(e), C(Object(P.selectPaymentMethod)(e))
						}
					}), w === b.Db && u && a.a.createElement("div", {
						className: ie.a.errorMessage
					}, u), w === b.Eb && i && a.a.createElement("div", {
						className: ie.a.errorMessage
					}, i), w === b.Db && a.a.createElement(N.a, {
						nightmode: n,
						className: ie.a.stripeForm,
						shouldDeleteCardWithGql: !0
					}), w === b.Eb && a.a.createElement(A, {
						className: ie.a.button,
						subredditId: p
					}), w === b.Db && a.a.createElement(oe, {
						className: ie.a.button,
						subredditId: p
					}), a.a.createElement("p", {
						className: ie.a.description
					}, ce._("By completing your purchase, you are agreeing to automatic payments for Powerups and Reddit's {=User Agreement}, {=Privacy Policy}, and {previews terms of use}. Your Powerups subscription will auto-renew monthly for {powerup price} (plus tax where applicable). Cancel anytime in {=User Settings}. Cancel at least 24 hours before your subscription ends to avoid getting charged for the next month. No partial refunds.", [ce._param("=User Agreement", a.a.createElement("a", {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, ce._("User Agreement", null, {
						hk: "3U1KuA"
					}))), ce._param("=Privacy Policy", a.a.createElement("a", {
						href: "https://www.redditinc.com/policies/privacy-policy",
						target: "_blank",
						rel: "noopener noreferrer"
					}, ce._("Privacy Policy", null, {
						hk: "Z8otX"
					}))), ce._param("previews terms of use", a.a.createElement(O.a, null)), ce._param("powerup price", ` $${T.toLocaleString()} `), ce._param("=User Settings", a.a.createElement("a", {
						href: "/settings/premium",
						target: "_blank"
					}, ce._("User Settings", null, {
						hk: "3TNXSe"
					})))], {
						hk: "NLnVj"
					}))), I && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: ie.a.premiumDescription
					}, a.a.createElement("div", {
						className: ie.a.premiumIconWrapper
					}, a.a.createElement(M.a, {
						className: ie.a.premiumIcon
					})), a.a.createElement("span", null, ce._("Premium gives you one monthly Powerup", null, {
						hk: "2cKV1a"
					}))), a.a.createElement(z, {
						className: ie.a.button,
						subredditId: p
					})))))
				})),
				pe = n("./src/reddit/components/Econ/PowerupsPurchaseModal/index.m.less"),
				me = n.n(pe);

			function fe() {
				return (fe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: he
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ye = Object(d.t)(), be = Object(s.c)({
				currentSubreddit: d.q
			}), ge = Object(o.b)(be);
			const ve = Object(i.a)(ye(ge((function(e) {
				const {
					currentSubreddit: t
				} = e, n = Object(o.d)(), r = () => n(Object(u.g)(c.a.ECON_POWERUPS_PURCHASE));
				return t ? a.a.createElement("div", {
					className: me.a.inner
				}, a.a.createElement(m.a, {
					className: me.a.header,
					title: he._("Powerup {r/community}", [he._param("r/community", t.displayText)], {
						hk: "2HkBNV"
					}),
					subtitle: he._("Unlock perks for the whole community", null, {
						hk: "faCTq"
					})
				}), a.a.createElement("button", {
					className: me.a.closeButton,
					onClick: r
				}, a.a.createElement(p.a, {
					className: me.a.closeIcon
				})), a.a.createElement(ue, {
					subredditId: t.id,
					onCloseModal: r
				})) : (r(), null)
			}))));
			t.default = e => a.a.createElement(ve, fe({}, e, {
				className: Object(l.a)(e.className, me.a.modal)
			}))
		},
		"./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			const {
				fbt: o
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function s({
				className: e
			}) {
				return a.a.createElement("a", {
					href: "https://www.redditinc.com/policies/previews-terms",
					target: "_blank",
					rel: "noopener noreferrer",
					className: e
				}, o._("Previews Terms of Use", null, {
					hk: "2eTczn"
				}))
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
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				d = n("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				l = n.n(d);
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
								gildThingId: n,
								onPaymentSelected: r,
								sendEvent: a
							} = this.props;
						switch (t) {
							case "creditCard":
								a(Object(c.d)(n));
								break;
							case "paypal":
								a(Object(c.e)(n))
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
					}, o.a.createElement("fieldset", null, o.a.createElement(u, {
						nightmode: t,
						selectedValue: n,
						onChange: this.onPaymentSelected,
						value: "paypal"
					}, o.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/paypal.png)`
						}
					})), o.a.createElement(u, {
						nightmode: t,
						selectedValue: n,
						onChange: this.onPaymentSelected,
						value: "creditCard"
					}, o.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/visa.png)`
						}
					}), o.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/mastercard.png)`
						}
					}), o.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/amex.png)`
						}
					}), o.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/discover.jpg)`
						}
					}))))
				}
			}
			t.a = Object(i.c)(p)
		},
		"./src/reddit/components/PowerupsSidebar/common/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			var r = n("./src/config.ts"),
				a = n("./src/reddit/icons/svgs/PowerupTier1/index.tsx"),
				o = n("./src/reddit/icons/svgs/PowerupTier2/index.tsx"),
				s = n("./src/reddit/icons/svgs/PowerupTier3/index.tsx");
			const i = 2,
				c = 5;

			function d(e) {
				return e >= c ? s.a : e >= i ? o.a : a.a
			}

			function l(e) {
				var t;
				const n = !e,
					a = `${r.a.assetPath}/img/powerups/snoovatar_anonymous.svg`;
				return n ? a : null === (t = null == e ? void 0 : e.icon) || void 0 === t ? void 0 : t.url
			}
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
				d = n("./src/config.ts"),
				l = n("./src/reddit/components/CheckoutForm/index.tsx"),
				u = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				p = n("./src/reddit/components/StripePaymentForm/index.m.less"),
				m = n.n(p);
			var f = e => {
					const {
						onToggleRememberCard: t,
						rememberCard: n
					} = e;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(l.a, {
						className: m.a.creditCard
					}), a.a.createElement(u.a, {
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
						src: `${d.a.assetPath}/img/payment-icons/powered-by-stripe.png`
					})))
				},
				h = n("./src/reddit/icons/svgs/Trash2/index.tsx");
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = e => 2 === e.length ? e : "0" + e, g = e => {
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
			class v extends a.a.PureComponent {
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
			var E = v,
				P = n("./src/reddit/actions/gold/productOfferPurchase.ts"),
				C = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				w = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				j = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const _ = Object(s.c)({
					rememberCard: j.v,
					savedCard: e => Object(j.x)(e)[0],
					stripeInfoLoading: j.w
				}),
				x = Object(o.b)(_, (e, t) => ({
					onClickDeleteCard: n => t.shouldDeleteCardWithGql ? e(Object(P.c)(n)) : e(Object(C.deleteSavedCard)(n)),
					onToggleRememberCard: () => e(Object(C.toggleRememberCard)())
				}));
			class O extends a.a.PureComponent {
				render() {
					const {
						className: e,
						nightmode: t,
						onClickDeleteCard: n,
						onToggleRememberCard: r,
						rememberCard: o,
						savedCard: s,
						stripeInfoLoading: c
					} = this.props, d = c, l = !d && s, u = !d && !l, p = d ? m.a.loadingState : l ? m.a.savedCardState : m.a.formState;
					return a.a.createElement("div", {
						className: Object(i.a)(m.a.stripePaymentForm, p, e)
					}, d && a.a.createElement(w.a, {
						className: m.a.loader,
						sizePx: 60
					}), l && s && a.a.createElement("form", null, a.a.createElement(E, {
						nightmode: t,
						onDelete: n,
						savedCard: s
					})), u && a.a.createElement(f, {
						onToggleRememberCard: r,
						rememberCard: o
					}))
				}
			}
			t.a = x(O)
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				s = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(s);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => a.a.createElement("div", {
				className: Object(o.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/endpoints/gold/productOfferPurchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return b
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "j", (function() {
				return P
			})), n.d(t, "g", (function() {
				return C
			})), n.d(t, "c", (function() {
				return w
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "k", (function() {
				return S
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				a = n.n(r),
				o = n("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				s = n("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				i = n("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				c = n("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = n("./src/redditGQL/operations/CreateEconOrder.json"),
				l = n("./src/redditGQL/operations/CreatePaypalPayment.json"),
				u = n("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				p = n("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				m = n("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				f = n("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				h = n("./src/redditGQL/operations/UserSavedStripeCards.json"),
				y = n("./src/lib/makeGqlRequest/index.ts");
			const b = (e, t, n, r, o) => {
				const {
					premium: s,
					...i
				} = o, c = (null == s ? void 0 : s.pricePackage) || n.pricePackages[0], l = new a.a(c.price).multipliedBy(r).toFixed();
				return Object(y.a)(e, {
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
			var g;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(g || (g = {}));
			const v = (e, t, n, r) => Object(y.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: n,
						token: r
					}
				}),
				E = (e, t, n, r) => Object(y.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: n,
						token: r
					}
				}),
				P = (e, t, n, r) => Object(y.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: n,
						cardId: r
					}
				}),
				C = (e, t, n, r, a) => Object(y.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: n,
						successUrl: r,
						cancelUrl: a
					}
				}),
				w = (e, t, n, r) => Object(y.a)(e, {
					...s,
					variables: {
						nonce: t,
						paymentId: n,
						token: r
					}
				}),
				j = (e, t, n, r) => Object(y.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: n,
						cardId: r
					}
				}),
				_ = (e, t, n, r, a) => Object(y.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: n,
						token: r,
						saveCard: a
					}
				}),
				x = (e, t) => Object(y.a)(e, {
					...o,
					variables: {
						orderId: t
					}
				}),
				O = e => Object(y.a)(e, {
					...h,
					variables: {}
				}),
				S = (e, t) => Object(y.a)(e, {
					...f,
					variables: {
						cardId: t
					}
				})
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react-redux/es/index.js");

			function a() {
				return Object(r.d)()
			}
		},
		"./src/reddit/icons/svgs/PowerupTier1/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && a.a.createElement("title", null, e.title), a.a.createElement("path", {
				d: "M28.36 73.65a3.47 3.47 0 01-2.55-1.15l-6.94-7.59a3.47 3.47 0 01-.7-3.63l4.5-10.73h-2.73a3.47 3.47 0 01-2.57-1.15l-6.96-7.57a3.47 3.47 0 01-.65-3.67L25.19 2.62A3.47 3.47 0 0128.35.54l26.28-.2a3.47 3.47 0 012.58 1.16l6.94 7.59a3.47 3.47 0 01.16 4.5l-7.48 9.54c.27.16.52.36.73.6l6.93 7.58a3.47 3.47 0 010 4.7L30.91 72.53a3.47 3.47 0 01-2.55 1.12zM25.44 61.9l2.92 3.17 28.9-31.45-3.77-4.11h-3.47a3.47 3.47 0 01-2.61-5.62l9.67-12.32-3.9-4.26-22.48.16L17.02 38.8l4.42 4.8h6.45a3.47 3.47 0 013.2 4.81L25.44 61.9z",
				fill: "#000"
			}), a.a.createElement("path", {
				d: "M34.43 11.6l19.3-7.78 6.98 7.58-17.57 22.21 10.94-7.58 6.98 7.58-33.62 36.57-6.99-7.58L29.1 47l-10.1.06L12 39.5l22.42-27.9z",
				fill: "#FFD635"
			}), a.a.createElement("path", {
				d: "M27.45 4.01l26.28-.2-17.57 22.22h17.92L20.45 62.6l9.68-23.1-18.12-.01L27.45 4z",
				fill: "#fff"
			}), a.a.createElement("path", {
				d: "M36.12 35.25H18.1l11.74-27 15.34-.13-17.53 22.16h16.28L30.39 48.03l5.73-12.78z",
				fill: "#fff"
			}), a.a.createElement("path", {
				d: "M51.17 26.03H33.62l20-3.03-2.45 3.03zM26.44 48.32l4.34-10.37-7.98 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier2/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && a.a.createElement("title", null, e.title), a.a.createElement("path", {
				d: "M28.03 73.65h-.08a3.47 3.47 0 01-2.48-1.15l-6.93-7.59a3.47 3.47 0 01-.69-3.63l4.5-10.73H19.6a3.47 3.47 0 01-2.56-1.15L10.1 41.8a3.47 3.47 0 01-.67-3.65L24.86 2.62A3.47 3.47 0 0128.02.54l29.8-.2a3.47 3.47 0 012.55 1.16L67.3 9.1a3.47 3.47 0 01.16 4.5l-7.5 9.54c.27.16.51.36.72.6l6.94 7.58a3.47 3.47 0 01-.12 4.82L30.47 72.66c-.65.64-1.53 1-2.44 1zM25.1 61.9l3.06 3.31L60.3 33.53l-3.64-4.03h-3.47a3.47 3.47 0 01-2.72-5.62l9.75-12.32-3.93-4.28-25.96.17L16.7 38.8l4.4 4.8h6.45a3.47 3.47 0 013.2 4.81L25.1 61.9z",
				fill: "#000"
			}), a.a.createElement("path", {
				d: "M34.1 11.6l22.76-7.78 6.99 7.58-17.58 22.21 10.94-7.58 6.98 7.58L27.1 70.18l-6.98-7.58L28.77 47l-10.1.06-7-7.58 22.43-27.9z",
				fill: "#FF7A00"
			}), a.a.createElement("path", {
				d: "M27.11 4.01l29.75-.2L39.3 26.04H57.2L20.11 62.6l9.69-23.1-18.12-.01L27.1 4z",
				fill: "#FFD15C"
			}), a.a.createElement("path", {
				d: "M35.79 35.25H17.77l11.74-27 18.8-.13-17.53 22.16h16.28l-17 17.75 5.73-12.78z",
				fill: "#FFF5C7"
			}), a.a.createElement("path", {
				d: "M54.32 26.03H36.77l20-3.03-2.45 3.03zM26.1 48.32l4.34-10.37-7.97 10.14 3.64.23z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/PowerupTier3/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 74 74",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				id: e.id
			}, e.title && a.a.createElement("title", null, e.title), a.a.createElement("path", {
				d: "M27.75 73.66a3.4 3.4 0 01-1.78-.5l-8.53-5.14a3.47 3.47 0 01-1.16-4.7l3.56-6.18h-.1l-8.54-5.18a3.47 3.47 0 01-1.15-4.8l5.78-9.32-7.74-4.68a3.47 3.47 0 01-1.3-4.57L20.15 2.8A3.47 3.47 0 0123.23.94h34.12c.8 0 1.58.27 2.2.78L67.4 8.1a3.47 3.47 0 01.25 5.15L57.52 23.3l5.29 4.5a3.47 3.47 0 010 5.26l-11.15 9.72 4.29 3.66a3.47 3.47 0 010 5.33L29.98 72.84c-.62.53-1.41.82-2.23.82zm-3.82-9.82l3.47 2.12 20.81-16.95-4.18-3.56a3.47 3.47 0 01-1.16-2.67 3.47 3.47 0 011.16-2.63l11.17-9.7-3.33-2.84h-.17a3.47 3.47 0 01-2.44-5.92L60 11.03 56.1 7.86H25.33L14.41 28.91l4.94 2.98h2.1a3.47 3.47 0 012.83 5.33l-6.54 10.6 4.7 2.84h3.11a3.47 3.47 0 013 5.2l-4.62 7.98z",
				fill: "#000"
			}), a.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43-18.67 18.54 6.65-5.17 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#FF4500"
			}), a.a.createElement("path", {
				d: "M30.6 9.53l26.28-5.14 7.16 6.43L53.11 21.7l-1.09 2.5 7.38 6.3-14.21 12.33 7.36 6.25L26.63 70.2l-8.52-5.15 11.73-10.91-9.48-.02L11.84 49l19.92-13.33-14.57-.32-8.52-5.15L30.6 9.53z",
				fill: "#D01427"
			}), a.a.createElement("path", {
				d: "M22.07 4.4h34.8L36.86 24.21l15.17-.03-20.4 18.6h13.55L18.11 65.04 27.36 49 11.84 49l11.4-18.47-14.57-.33 13.4-25.8z",
				fill: "#FF4500"
			}), a.a.createElement("path", {
				d: "M49.56 7.39l-25.65-.1L13.46 27.4l15 .34-11.87 18.88h15.33l-4.22 7.24 10.53-8.74H24.6L44.4 27.09l-14.72.04L49.56 7.39z",
				fill: "#FF8717"
			}), a.a.createElement("path", {
				d: "M30.62 30.06h6.08L22.82 42.71l7.8-12.65zM18.3 24.64l7.5-14.45 16.55.07-14.7 14.59-9.35-.21z",
				fill: "#FFD635"
			}), a.a.createElement("path", {
				d: "M53.18 24.19l-17.55.03 19.7-2.88-2.15 2.85zM47.48 42.82l-17.42-.04 20-3-2.58 3.04zM20.6 54.78l7.01-6.22-4.52 7.84-2.49-1.62zM16.46 36.11l7.1-6.1-4.8 7.75-2.3-1.65z",
				fill: "#000"
			}))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				a = n.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
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
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var r, a, o, s;
			n.d(t, "b", (function() {
					return a
				})), n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(a || (a = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(o || (o = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "e", (function() {
				return b
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/makeProductOfferKey/index.ts"),
				o = n("./src/reddit/models/Gold/ProductOffer.ts"),
				s = n("./src/reddit/models/Payments/index.ts"),
				i = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = e => e.subreddits.api.productOffers.pending,
				d = (e, {
					subredditId: t,
					type: n
				}) => {
					var r, o, s;
					return t ? e.subreddits.productOffers[Object(a.a)(n, t)] : null === (s = null === (o = null === (r = e.features) || void 0 === r ? void 0 : r.goldPurchase) || void 0 === o ? void 0 : o.productOffers) || void 0 === s ? void 0 : s[Object(a.a)(n)]
				},
				l = (e, {
					subredditId: t
				}) => {
					const n = d(e, {
						subredditId: t,
						type: o.c.Powerups
					});
					return n && n[0]
				},
				u = e => {
					const t = d(e, {
						type: o.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				p = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === s.b.PayPal || e[0] === s.b.Stripe)(e.requiredPaymentProviders)) : null,
				m = Object(r.a)(u, i.p, (e, t) => p(e, t) || null),
				f = Object(r.a)(m, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var n;
					return (null === (n = e.requiredPaymentProviders) || void 0 === n ? void 0 : n[0]) === t
				})),
				h = Object(r.a)(m, e => (null == e ? void 0 : e[0].price) || null),
				y = Object(r.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				b = Object(r.a)(y, e => Boolean(null == e ? void 0 : e.isCanceled))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconPowerupsPurchaseModal.81b4b533e43bf801516e.js.map