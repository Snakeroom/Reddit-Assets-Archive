// https://www.redditstatic.com/desktop2x/CoinPurchaseModal~PennyPurchaseModal.68c933405f009063dd6c.js
// Retrieved at 6/1/2021, 3:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CoinPurchaseModal~PennyPurchaseModal"], {
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
						var a = d(this, t.call(this, e, r));
						a.handleRef = function(e) {
							a._ref = e
						}, a._element = null;
						var o = u(a.props);
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
						var e = u(this.props);
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
				p = t.elementContextTypes = {
					addElementsLoadListener: o.default.func.isRequired,
					registerElement: o.default.func.isRequired,
					unregisterElement: o.default.func.isRequired
				},
				u = function(e) {
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
			u.childContextTypes = r({}, l, p), u.contextTypes = s.providerContextTypes, u.defaultProps = {
				children: null
			}, t.default = u
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
				onBlur: d,
				onClick: d,
				onFocus: d,
				onReady: d
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
					f = void 0 !== s && s;
				return n = t = function(t) {
					function n(e, r) {
						if (p(this, n), !r || !r.getRegisteredElements) throw new Error("It looks like you are trying to inject Stripe context outside of an Elements context.\nPlease be sure the component that calls createSource or createToken is within an <Elements> component.");
						var a = u(this, t.call(this, e, r));
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
				p = (0, s.default)("cardExpiry"),
				u = (0, s.default)("cardCvc"),
				m = u,
				f = (0, s.default)("iban", {
					impliedTokenType: "bank_account",
					impliedSourceType: "sepa_debit"
				}),
				h = (0, s.default)("idealBank", {
					impliedSourceType: "ideal"
				}),
				y = (0, s.default)("fpxBank"),
				b = (0, s.default)("auBankAccount");
			t.StripeProvider = r.default, t.injectStripe = a.default, t.Elements = o.default, t.CardElement = d, t.CardNumberElement = l, t.CardExpiryElement = p, t.CardCvcElement = u, t.CardCVCElement = m, t.PaymentRequestButtonElement = i.default, t.IbanElement = f, t.IdealBankElement = h, t.FpxBankElement = y, t.AuBankAccountElement = b
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
				var p = Object.keys(c);
				if (p.length !== s.length) return !1;
				var u = t,
					m = n;
				return p.every((function(t) {
					return e(u[t], m[t])
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
		"./src/graphql/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
		},
		"./src/graphql/operations/ConfirmPaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"6ad51fec38be"}')
		},
		"./src/graphql/operations/ConfirmStripePaymentNewCard.json": function(e) {
			e.exports = JSON.parse('{"id":"e4d2b27d6d30"}')
		},
		"./src/graphql/operations/ConfirmStripePaymentSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"0095edf93db4"}')
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
				return O
			})), n.d(t, "j", (function() {
				return k
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "e", (function() {
				return N
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "c", (function() {
				return I
			})), n.d(t, "a", (function() {
				return q
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "h", (function() {
				return L
			})), n.d(t, "i", (function() {
				return W
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/lodash/omit.js"),
				o = n.n(a),
				s = n("./node_modules/uuid/v4.js"),
				i = n.n(s),
				c = n("./src/config.ts"),
				d = n("./src/reddit/constants/modals.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/lib/addQueryParams/index.ts"),
				u = n("./src/lib/makeActionCreator/index.ts"),
				m = n("./src/lib/sentry/index.ts"),
				f = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/actions/gold/constants.ts"),
				y = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				b = n("./src/reddit/selectors/gold/productOffers.ts"),
				g = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				v = n("./src/reddit/models/Gold/ProductOffer.ts"),
				P = n("./src/reddit/actions/gold/powerups.ts"),
				E = n("./src/reddit/actions/modal.ts"),
				_ = n("./src/reddit/endpoints/gold/productOfferPurchase.ts"),
				j = n("./src/reddit/models/Payments/index.ts");
			const x = () => r.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				w = e => e.map(e => e.message).join(" : "),
				O = (e, t, n) => async (a, o, {
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
						if (t && t.length) throw new Error(w(t));
						if (n) return n.id
					}
					throw new Error((() => r.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, k = (e, t, n, a, o, s) => async (c, d, {
					gqlContext: l
				}) => {
					var p;
					const u = d(),
						f = () => c(Object(y.stripeApiError)(r.fbt._("Something went wrong during payment creation", null, {
							hk: "2LgB2E"
						}))),
						h = o === v.c.Premium,
						P = o === v.c.Powerups,
						E = {};
					if (P && s) E.powerUps = {
						subredditId: s,
						isAnonymous: n
					};
					else if (h) {
						const e = Object(b.c)(u, {
							provider: j.b.Stripe
						});
						if (!e) return;
						E.premium = {
							pricePackage: e
						}
					}
					let x, k, S = "";
					try {
						S = await c(O(t, a, E))
					} catch (T) {
						return m.c.captureException(T), void(T.message && c(Object(y.stripeApiError)(T.message)))
					}
					c(Object(y.stripeTokenPending)());
					const N = Object(g.y)(u);
					if (N || (x = await c(Object(y.validateAndCreateStripeToken)(e)), k = Object(g.v)(u), x)) try {
						const t = i()(),
							r = N || k ? x && k ? Object(_.h)(l(), t, S, x.id) : N ? Object(_.j)(l(), t, S, N) : null : Object(_.i)(l(), t, S, x.id),
							o = await r;
						if (!(null == o ? void 0 : o.ok)) return void f();
						const u = o.body.data.createEconPayment;
						if (null === (p = null == u ? void 0 : u.errors) || void 0 === p ? void 0 : p.length) return void c(Object(y.stripeApiError)(w(u.errors)));
						const {
							ok: m,
							payment: b,
							providerExecution: {
								paymentIntentClientSecret: g
							}
						} = u;
						if (m && b.status === _.a.ActionRequired) {
							const t = await e.confirmCardPayment(g),
								{
									error: n
								} = t;
							if (n) return void(n.message ? c(Object(y.stripeApiError)(n.message)) : f());
							let r;
							if (!(r = N ? await Object(_.e)(l(), i()(), b.id, N) : await Object(_.d)(l(), i()(), b.id, x.id, k)).ok) return void f();
							const a = r.body;
							if (!a.data.confirmEconPayment.ok || a.data.confirmEconPayment.payment.status !== _.a.Paid) return void f()
						} else if (m && b.status !== _.a.Paid) return void f();
						const v = Object(C.j)(d());
						v && (P && s ? c(F({
							subredditId: s,
							powerupsCount: a,
							user: v,
							isAnonymous: n
						})) : h && c(L({
							user: v
						})))
					} catch (T) {
						m.c.captureException(T), f()
					}
				}, S = (e, t, n, r, a) => async (o, s, {
					gqlContext: d
				}) => {
					var l;
					const u = s(),
						f = r === v.c.Premium,
						h = r === v.c.Powerups,
						g = {};
					if (h && a) g.powerUps = {
						subredditId: a,
						isAnonymous: t
					};
					else if (f) {
						const e = Object(b.c)(u, {
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
					} catch (S) {
						return m.c.captureException(S), S.message && o(Object(y.paypalApiError)(S.message)), null
					}
					const E = c.a.redditUrl;
					let k = {
						_o: E,
						o: P,
						pt: r
					};
					h && a && (k = {
						...k,
						r: a
					});
					try {
						const e = Object(p.a)(`${E}/framedModal/paypal-finish`, {
								...k,
								s: !0
							}),
							r = Object(p.a)(`${E}/framedModal/paypal-finish`, k),
							c = i()(),
							u = await Object(_.g)(d(), c, P, e, r);
						if (u && u.ok) {
							const e = u.body.data.createEconPayment;
							if (null === (l = null == e ? void 0 : e.errors) || void 0 === l ? void 0 : l.length) return o(Object(y.paypalApiError)(w(e.errors))), null;
							const r = Object(C.j)(s());
							if (e.ok) {
								const {
									status: s
								} = e.payment;
								if (s === _.a.ActionRequired) return {
									paymentId: e.payment.id,
									token: e.providerExecution.billingAgreementToken,
									url: e.providerExecution.billingAgreementApprovalUrl
								};
								if ("PAID" === s && r) return a ? o(F({
									subredditId: a,
									powerupsCount: n,
									user: r,
									isAnonymous: t
								})) : f && o(L({
									user: r
								})), null
							}
						}
					} catch (S) {
						m.c.captureException(S)
					}
					return o(Object(y.paypalApiError)(x())), null
				}, N = (e, t) => async (n, r, {
					gqlContext: a
				}) => {
					var o;
					try {
						const r = i()(),
							s = await Object(_.c)(a(), r, e, t);
						if (s && s.ok) {
							const e = s.body.data.confirmEconPayment;
							if (null === (o = null == e ? void 0 : e.errors) || void 0 === o ? void 0 : o.length) return n(Object(y.paypalApiError)(w(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (s) {
						m.c.captureException(s)
					}
					return n(Object(y.paypalApiError)(x())), !1
				}, T = () => async (e, t, {
					gqlContext: n
				}) => {
					e(Object(y.savedCardsPending)());
					try {
						const t = await Object(_.l)(n());
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
				}, I = e => async (t, n, {
					gqlContext: r
				}) => {
					t(Object(y._deleteSavedCard)(e));
					try {
						const t = await Object(_.k)(r(), e);
						if (t.error) throw new Error(t.error.type);
						const n = t.body,
							{
								errors: a
							} = n.data.deleteEconPaymentMethod;
						if (a && a.length) throw new Error(w(a))
					} catch (a) {
						m.c.captureException(a)
					}
				}, R = Object(u.a)(h.N), M = Object(u.a)(h.O), A = Object(u.a)(h.P), B = e => async (t, n) => {
					await t(R(e)), t(Object(l.f)({
						kind: f.b.Error,
						duration: l.a,
						text: e
					}))
				}, q = (e, t, n) => async (a, o, {
					gqlContext: s
				}) => {
					a(M({
						subredditId: t,
						allocatedAt: n
					}));
					try {
						const o = await Object(_.b)(s(), e);
						if (o.ok) {
							const e = o.body,
								{
									errors: r
								} = e.data.cancelEconRecurringPayment;
							if (r && r.length) return void a(B(r[0].message));
							a(A({
								subredditId: t,
								allocatedAt: n
							}))
						} else a(B(r.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						m.c.captureException(i), a(B(r.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, D = Object(u.a)(h.R), F = e => async (t, n) => {
					t(D(e)), t(Object(P.i)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(E.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(E.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, L = Object(u.a)(h.V), W = Object(u.a)(h.Z)
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
				p = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				u = n("./src/reddit/components/CheckoutForm/index.m.less"),
				m = n.n(u);
			const f = Object(i.c)({
					cardCvcValidation: p.f,
					cardExpiryValidation: p.g,
					cardName: p.h,
					cardNumberValidation: p.i,
					nameOnCardValidation: p.k,
					postalCode: p.l
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
						postalCode: p
					} = this.props, {
						cardNumberReady: u,
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
					}), !u && o.a.createElement("div", {
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
						value: p
					})))
				}
			}
			t.a = Object(d.injectStripe)(h(y))
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
				d = n("./src/reddit/components/CoinBalance/index.m.less"),
				l = n.n(d);
			t.a = e => o.a.createElement("div", {
				className: Object(s.a)(l.a.coinBalance, e.className),
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
				d = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				u = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				m = n("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				f = n.n(m);
			class h extends o.a.PureComponent {
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
						className: f.a.paymentCompleteHeader,
						style: {
							backgroundImage: `url("${s.a.assetPath}/img/gold/coins-hero.jpg")`
						}
					}, o.a.createElement(u.a, {
						className: f.a.coinIcon
					}), o.a.createElement("div", {
						className: f.a.paymentCompleteTitleMain
					}, e.isGild ? r.fbt._("Thanks for purchasing an Award, {username}", [r.fbt._param("username", e.userName)], {
						hk: "1VcYkx"
					}) : r.fbt._("Thanks for purchasing Coins, {username}", [r.fbt._param("username", e.userName)], {
						hk: "3m40W1"
					})), o.a.createElement("div", {
						className: f.a.paymentCompleteTitleDescription
					}, t), o.a.createElement("button", {
						className: f.a.closeButton,
						onClick: e.onCloseClick
					}, o.a.createElement(d.b, {
						className: f.a.closeIcon,
						"data-redditstyle": !0
					}))), o.a.createElement(c.a, {
						onCloseClick: e.onCloseClick
					}))
				}
			}
			t.a = Object(l.c)(h)
		},
		"./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				s = n("./node_modules/react-stripe-elements/es/index.js"),
				i = n("./src/config.ts"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				l = n("./src/reddit/components/StripePaymentForm/index.tsx"),
				p = n("./src/reddit/helpers/createEmojiText/index.tsx"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/reddit/components/CoinBalance/index.tsx"),
				f = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/controls/Button/index.tsx"),
				y = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				b = n("./node_modules/react-dom/index.js"),
				g = n.n(b),
				C = n("./node_modules/react-redux/es/index.js"),
				v = n("./node_modules/reselect/es/index.js"),
				P = n("./src/higherOrderComponents/makeAsync.tsx"),
				E = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				_ = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				j = n("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				x = n("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts");
			const w = Object(v.c)({
				isGild: e => !!Object(_.s)(e)
			});
			class O extends o.a.Component {
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
						ReactDOM: g.a
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
			const k = Object(C.b)(w, (e, t) => ({
				createPayment: () => "coinPackage" in t ? e(Object(j.f)(t.coinPackage)) : "awardId" in t ? e(Object(x.d)(t.awardId, t.pennies, t.thingId)) : void 0,
				executePayment: (n, r) => {
					if ("coinPackage" in t) {
						if (n) return void e(Object(j.h)(r, t.coinPackage));
						e(Object(j.g)(r, t.coinPackage))
					} else "awardId" in t && e(Object(x.c)(r))
				}
			}))(O);
			var S = Object(P.a)({
					getComponent: () => Object(E.c)().then(() => k),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				N = n("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				T = n.n(N);
			const {
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class R extends o.a.Component {
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
					}), s === c.Cb ? e && e.pennyPrice && n ? o.a.createElement(S, {
						awardId: e.id,
						className: Object(u.a)(T.a.purchaseButton, T.a.paypalCheckoutButton),
						pennies: e.pennyPrice,
						thingId: n
					}) : r && o.a.createElement(S, {
						className: Object(u.a)(T.a.purchaseButton, T.a.paypalCheckoutButton),
						coinPackage: r
					}) : null, s === c.Bb && o.a.createElement(h.i, {
						className: T.a.purchaseButton,
						"data-redditstyle": !0,
						disabled: i || a,
						onClick: this.onCompletePurchaseClick
					}, I._("Complete purchase", null, {
						hk: "3d1QJR"
					})))
				}
			}
			var M = Object(s.injectStripe)(Object(f.c)(R)),
				A = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				B = n("./src/reddit/icons/fonts/Coin/index.tsx");
			const {
				fbt: q
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var D = e => o.a.createElement("div", {
				className: T.a.purchaseHeader,
				style: {
					backgroundImage: `url("${i.a.assetPath}/img/gold/coins-hero.jpg")`
				}
			}, o.a.createElement(B.a, {
				className: T.a.coinIcon
			}), o.a.createElement("div", {
				className: T.a.titleMain
			}, q._("Buy {amount} Coins!", [q._param("amount", e.purchasePackage.coins.toLocaleString())], {
				hk: "3E2DWq"
			})), o.a.createElement("div", {
				className: T.a.titleDescription
			}, q._("You're purchasing Coins for yourself, {userName}!", [q._param("userName", e.userName)], {
				hk: "ZGCBt"
			})), o.a.createElement("img", {
				className: T.a.goldPackage,
				src: e.purchasePackage.images.purchaseSuccess["3x"].url
			}), o.a.createElement("button", {
				className: T.a.closeButton,
				onClick: e.onCloseClick
			}, o.a.createElement(A.b, {
				className: T.a.closeIcon,
				"data-redditstyle": !0
			})));
			var F = e => {
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
				}, o.a.createElement(A.b, {
					className: Object(u.a)(T.a.closeIcon, T.a.awardPurchase),
					"data-redditstyle": !0
				})))
			};
			t.a = e => o.a.createElement(s.StripeProvider, {
				apiKey: i.a.stripe.apiKey
			}, o.a.createElement(s.Elements, null, o.a.createElement(o.a.Fragment, null, e.gildThingId ? o.a.createElement(F, {
				coinBalance: e.coinBalance,
				award: e.selectedAward,
				purchasePackage: e.purchasePackage,
				userName: e.userName,
				onCloseClick: e.onCloseModal
			}) : e.purchasePackage && o.a.createElement(D, {
				coinBalance: e.coinBalance,
				purchasePackage: e.purchasePackage,
				userName: e.userName,
				onCloseClick: e.onCloseModal
			}), o.a.createElement("div", {
				className: T.a.purchaseBody
			}, o.a.createElement(d.a, {
				className: T.a.selectPayment,
				gildThingId: e.gildThingId,
				nightmode: e.nightmode,
				selectedPayment: e.selectedPayment,
				onPaymentSelected: e.onPaymentSelected
			}), e.selectedPayment === c.Bb && o.a.createElement(l.a, {
				nightmode: e.nightmode
			}), o.a.createElement("div", {
				className: T.a.checkoutFooter
			}, o.a.createElement("div", {
				className: T.a.purchaseTotal
			}, r.fbt._("Total: {totalAmount}", [r.fbt._param("totalAmount", "$" + ((e.purchasePackage ? e.purchasePackage.pennies : e.selectedAward.pennyPrice || 0) / 100).toLocaleString())], {
				hk: "3dx6W8"
			}))), e.selectedPayment === c.Cb && e.paypalErrorMessage && o.a.createElement("div", {
				className: T.a.errorMessage
			}, e.paypalErrorMessage), e.selectedPayment === c.Bb && e.stripeErrorMessage && o.a.createElement("div", {
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
				d = n("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				l = n.n(d);
			const p = e => o.a.createElement("label", {
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
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${r.a.assetPath}/img/payment-icons/paypal.png)`
						}
					})), o.a.createElement(p, {
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
				d = n("./src/config.ts"),
				l = n("./src/reddit/components/CheckoutForm/index.tsx"),
				p = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				u = n("./src/reddit/components/StripePaymentForm/index.m.less"),
				m = n.n(u);
			var f = e => {
					const {
						onToggleRememberCard: t,
						rememberCard: n
					} = e;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(l.a, {
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
				P = n("./src/reddit/actions/gold/productOfferPurchase.ts"),
				E = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				_ = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				j = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const x = Object(s.c)({
					rememberCard: j.v,
					savedCard: e => Object(j.x)(e)[0],
					stripeInfoLoading: j.w
				}),
				w = Object(o.b)(x, (e, t) => ({
					onClickDeleteCard: n => t.shouldDeleteCardWithGql ? e(Object(P.c)(n)) : e(Object(E.deleteSavedCard)(n)),
					onToggleRememberCard: () => e(Object(E.toggleRememberCard)())
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
					} = this.props, d = c, l = !d && s, p = !d && !l, u = d ? m.a.loadingState : l ? m.a.savedCardState : m.a.formState;
					return a.a.createElement("div", {
						className: Object(i.a)(m.a.stripePaymentForm, u, e)
					}, d && a.a.createElement(_.a, {
						className: m.a.loader,
						sizePx: 60
					}), l && s && a.a.createElement("form", null, a.a.createElement(v, {
						nightmode: t,
						onDelete: n,
						savedCard: s
					})), p && a.a.createElement(f, {
						onToggleRememberCard: r,
						rememberCard: o
					}))
				}
			}
			t.a = w(O)
		},
		"./src/reddit/endpoints/gold/productOfferPurchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return b
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "j", (function() {
				return P
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "k", (function() {
				return k
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				a = n.n(r),
				o = n("./src/graphql/operations/CancelEconRecurringPayment.json"),
				s = n("./src/graphql/operations/ConfirmPaypalPayment.json"),
				i = n("./src/graphql/operations/ConfirmStripePaymentNewCard.json"),
				c = n("./src/graphql/operations/ConfirmStripePaymentSavedCard.json"),
				d = n("./src/graphql/operations/CreateEconOrder.json"),
				l = n("./src/graphql/operations/CreatePaypalPayment.json"),
				p = n("./src/graphql/operations/CreateStripePaymentWithProvidedCard.json"),
				u = n("./src/graphql/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				m = n("./src/graphql/operations/CreateStripePaymentWithSavedCard.json"),
				f = n("./src/graphql/operations/DeleteSavedStripeCard.json"),
				h = n("./src/graphql/operations/UserSavedStripeCards.json"),
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
			const C = (e, t, n, r) => Object(y.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: n,
						token: r
					}
				}),
				v = (e, t, n, r) => Object(y.a)(e, {
					...p,
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
				E = (e, t, n, r, a) => Object(y.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: n,
						successUrl: r,
						cancelUrl: a
					}
				}),
				_ = (e, t, n, r) => Object(y.a)(e, {
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
				x = (e, t, n, r, a) => Object(y.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: n,
						token: r,
						saveCard: a
					}
				}),
				w = (e, t) => Object(y.a)(e, {
					...o,
					variables: {
						orderId: t
					}
				}),
				O = e => Object(y.a)(e, {
					...h,
					variables: {}
				}),
				k = (e, t) => Object(y.a)(e, {
					...f,
					variables: {
						cardId: t
					}
				})
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
				return p
			})), n.d(t, "i", (function() {
				return u
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
				p = e => {
					const t = d(e, {
						type: o.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				u = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === s.b.PayPal || e[0] === s.b.Stripe)(e.requiredPaymentProviders)) : null,
				m = Object(r.a)(p, i.p, (e, t) => u(e, t) || null),
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CoinPurchaseModal~PennyPurchaseModal.68c933405f009063dd6c.js.map