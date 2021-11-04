// https://www.redditstatic.com/desktop2x/UpdateCardModal.5d1cee9d384ddd8692bb.js
// Retrieved at 11/4/2021, 10:30:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["UpdateCardModal"], {
		"./node_modules/react-stripe-elements/es/components/Element.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var r = a(n("./node_modules/react/index.js")),
				o = a(n("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
				s = a(n("./node_modules/react-stripe-elements/es/utils/isEqual.js")),
				i = n("./node_modules/react-stripe-elements/es/components/Elements.js");

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function c(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}

			function p(e, t) {
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
				d = function(e) {
					e.id, e.className, e.onChange, e.onFocus, e.onBlur, e.onReady;
					return function(e, t) {
						var n = {};
						for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
						return n
					}(e, ["id", "className", "onChange", "onFocus", "onBlur", "onReady"])
				},
				f = function(e) {
					return e.charAt(0).toUpperCase() + e.slice(1)
				};
			t.default = function(e) {
				var t, n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				return n = t = function(t) {
					function n(e, r) {
						c(this, n);
						var o = p(this, t.call(this, e, r));
						o.handleRef = function(e) {
							o._ref = e
						}, o._element = null;
						var s = d(o.props);
						return o._options = s, o
					}
					return l(n, t), n.prototype.componentDidMount = function() {
						var t = this;
						this.context.addElementsLoadListener((function(n) {
							if (t._ref) {
								var r = n.create(e, t._options);
								t._element = r, t._setupEventListeners(r), r.mount(t._ref), t.context.registerElement(r, a.impliedTokenType, a.impliedSourceType, a.impliedPaymentMethodType)
							}
						}))
					}, n.prototype.componentDidUpdate = function() {
						var e = d(this.props);
						0 === Object.keys(e).length || (0, s.default)(e, this._options) || (this._options = e, this._element && this._element.update(e))
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
				}, t.contextTypes = i.elementContextTypes, t.displayName = f(e) + "Element", n
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
				o = a(n("./node_modules/react/index.js")),
				s = a(n("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
				i = n("./node_modules/react-stripe-elements/es/components/Provider.js");

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function c(e, t) {
				var n = {};
				for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
				return n
			}

			function p(e) {
				if (Array.isArray(e)) {
					for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
					return n
				}
				return Array.from(e)
			}
			var l = t.injectContextTypes = {
					getRegisteredElements: s.default.func.isRequired,
					elements: s.default.object
				},
				u = t.elementContextTypes = {
					addElementsLoadListener: s.default.func.isRequired,
					registerElement: s.default.func.isRequired,
					unregisterElement: s.default.func.isRequired
				},
				d = function(e) {
					function t(n, o) {
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t);
						var s = function(e, t) {
							if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !t || "object" != typeof t && "function" != typeof t ? e : t
						}(this, e.call(this, n, o));
						s._elements = null, s.handleRegisterElement = function(e, t, n, o) {
							s.setState((function(s) {
								return {
									registeredElements: [].concat(p(s.registeredElements), [r({
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
						}, s.handleUnregisterElement = function(e) {
							s.setState((function(t) {
								return {
									registeredElements: t.registeredElements.filter((function(t) {
										return t.element !== e
									}))
								}
							}))
						};
						var i = s.props,
							a = (i.children, c(i, ["children"]));
						return "sync" === s.context.tag && (s._elements = s.context.stripe.elements(a)), s.state = {
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
			d.childContextTypes = r({}, l, u), d.contextTypes = i.providerContextTypes, d.defaultProps = {
				children: null
			}, t.default = d
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
				s = c(n("./node_modules/react-stripe-elements/node_modules/prop-types/index.js")),
				i = c(n("./node_modules/react-stripe-elements/es/utils/shallowEqual.js")),
				a = n("./node_modules/react-stripe-elements/es/components/Elements.js");

			function c(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var p = function() {},
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
						var s = l(n);
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
					}, t.prototype.componentDidUpdate = function(e) {
						this.props.paymentRequest !== e.paymentRequest && console.warn("Unsupported prop change: paymentRequest is not a customizable property.");
						var t = l(this.props);
						0 === Object.keys(t).length || (0, i.default)(t, this._options) || (this._options = t, this._element.update(t))
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
			}, u.defaultProps = {
				id: void 0,
				className: void 0,
				onBlur: p,
				onClick: p,
				onFocus: p,
				onReady: p
			}, u.contextTypes = a.elementContextTypes, t.default = u
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
			var i = t.providerContextTypes = {
					tag: o.default.string.isRequired,
					stripe: o.default.object,
					addStripeLoadListener: o.default.func
				},
				a = function(e, t) {
					window.Stripe.__cachedInstances = window.Stripe.__cachedInstances || {};
					var n = "key=" + e + " options=" + JSON.stringify(t),
						r = window.Stripe.__cachedInstances[n] || window.Stripe(e, t);
					return window.Stripe.__cachedInstances[n] = r, r
				},
				c = function(e) {
					if (e && e.elements && e.createSource && e.createToken && e.createPaymentMethod && e.handleCardPayment) return e;
					throw new Error("Please pass a valid Stripe object to StripeProvider. You can obtain a Stripe object by calling 'Stripe(...)' with your publishable key.")
				},
				p = function(e) {
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
								i = (o.children, function(e, t) {
									var n = {};
									for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
									return n
								}(o, ["apiKey", "children"])),
								p = a(s, i);
							r._meta = {
								tag: "sync",
								stripe: p
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
			p.propTypes = {
				apiKey: o.default.string,
				stripe: o.default.object,
				children: o.default.node
			}, p.childContextTypes = i, p.defaultProps = {
				apiKey: void 0,
				stripe: void 0,
				children: null
			}, t.default = p
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
				i = n("./node_modules/react/index.js"),
				a = (r = i) && r.__esModule ? r : {
					default: r
				},
				c = n("./node_modules/react-stripe-elements/es/components/Elements.js"),
				p = n("./node_modules/react-stripe-elements/es/components/Provider.js");

			function l(e, t) {
				var n = {};
				for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
				return n
			}

			function u(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}

			function d(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}

			function f(e, t) {
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
					i = r.withRef,
					m = void 0 !== i && i;
				return n = t = function(t) {
					function n(e, r) {
						if (u(this, n), !r || !r.getRegisteredElements) throw new Error("It looks like you are trying to inject Stripe context outside of an Elements context.\nPlease be sure the component that calls createSource or createToken is within an <Elements> component.");
						var o = d(this, t.call(this, e, r));
						return o.parseElementOrData = function(e) {
							return e && "object" === (void 0 === e ? "undefined" : s(e)) && e._frame && "object" === s(e._frame) && e._frame.id && "string" == typeof e._frame.id && "string" == typeof e._componentName ? {
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
								if (t && "object" === (void 0 === t ? "undefined" : s(t))) {
									var r = t,
										i = r.type,
										a = l(r, ["type"]),
										c = "string" == typeof i ? i : "auto",
										p = o.requireElement("impliedTokenType", c);
									return e.createToken(p, a)
								}
								if ("string" == typeof t) {
									var u = t;
									return e.createToken(u, n)
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
						}, o.wrappedCreatePaymentMethod = function(e) {
							return function(t, n, r) {
								if (t && "object" === (void 0 === t ? "undefined" : s(t))) return e.createPaymentMethod(t);
								if (!t || "string" != typeof t) throw new Error("Invalid PaymentMethod type passed to createPaymentMethod. Expected a string, got " + (void 0 === t ? "undefined" : s(t)) + ".");
								var i = o.parseElementOrData(n);
								if ("element" === i.type) {
									var a = i.element;
									return r ? e.createPaymentMethod(t, a, r) : e.createPaymentMethod(t, a)
								}
								var c = i.data,
									p = o.findElement("impliedPaymentMethodType", t);
								if (p) return c ? e.createPaymentMethod(t, p, c) : e.createPaymentMethod(t, p);
								if (c && "object" === (void 0 === c ? "undefined" : s(c))) return e.createPaymentMethod(t, c);
								throw c ? new Error("Invalid data passed to createPaymentMethod. Expected an object, got " + (void 0 === c ? "undefined" : s(c)) + ".") : new Error("Could not find an Element that can be used to create a PaymentMethod of type: " + t + ".")
							}
						}, o.wrappedHandleCardX = function(e, t) {
							return function(n, r, i) {
								if (!n || "string" != typeof n) throw new Error("Invalid PaymentIntent client secret passed to handleCardPayment. Expected string, got " + (void 0 === n ? "undefined" : s(n)) + ".");
								var a = o.parseElementOrData(r);
								if ("element" === a.type) {
									var c = a.element;
									return i ? e[t](n, c, i) : e[t](n, c)
								}
								var p = a.data,
									l = o.findElement("impliedPaymentMethodType", "card");
								return l ? p ? e[t](n, l, p) : e[t](n, l) : p ? e[t](n, p) : e[t](n)
							}
						}, "sync" === o.context.tag ? o.state = {
							stripe: o.stripeProps(o.context.stripe)
						} : o.state = {
							stripe: null
						}, o
					}
					return f(n, t), n.prototype.componentDidMount = function() {
						var e = this;
						"async" === this.context.tag && this.context.addStripeLoadListener((function(t) {
							e.setState({
								stripe: e.stripeProps(t)
							})
						}))
					}, n.prototype.getWrappedInstance = function() {
						if (!m) throw new Error("To access the wrapped instance, the `{withRef: true}` option must be set when calling `injectStripe()`");
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
						return a.default.createElement(e, o({}, this.props, {
							stripe: this.state.stripe,
							elements: this.context.elements,
							ref: m ? function(e) {
								t.wrappedInstance = e
							} : null
						}))
					}, n
				}(a.default.Component), t.contextTypes = o({}, p.providerContextTypes, c.injectContextTypes), t.displayName = "InjectStripe(" + (e.displayName || e.name || "Component") + ")", n
			}
		},
		"./node_modules/react-stripe-elements/es/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.AuBankAccountElement = t.FpxBankElement = t.IdealBankElement = t.IbanElement = t.PaymentRequestButtonElement = t.CardCVCElement = t.CardCvcElement = t.CardExpiryElement = t.CardNumberElement = t.CardElement = t.Elements = t.injectStripe = t.StripeProvider = void 0;
			var r = c(n("./node_modules/react-stripe-elements/es/components/Provider.js")),
				o = c(n("./node_modules/react-stripe-elements/es/components/inject.js")),
				s = c(n("./node_modules/react-stripe-elements/es/components/Elements.js")),
				i = c(n("./node_modules/react-stripe-elements/es/components/Element.js")),
				a = c(n("./node_modules/react-stripe-elements/es/components/PaymentRequestButtonElement.js"));

			function c(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var p = (0, i.default)("card", {
					impliedTokenType: "card",
					impliedSourceType: "card",
					impliedPaymentMethodType: "card"
				}),
				l = (0, i.default)("cardNumber", {
					impliedTokenType: "card",
					impliedSourceType: "card",
					impliedPaymentMethodType: "card"
				}),
				u = (0, i.default)("cardExpiry"),
				d = (0, i.default)("cardCvc"),
				f = d,
				m = (0, i.default)("iban", {
					impliedTokenType: "bank_account",
					impliedSourceType: "sepa_debit"
				}),
				y = (0, i.default)("idealBank", {
					impliedSourceType: "ideal"
				}),
				h = (0, i.default)("fpxBank"),
				_ = (0, i.default)("auBankAccount");
			t.StripeProvider = r.default, t.injectStripe = o.default, t.Elements = s.default, t.CardElement = p, t.CardNumberElement = l, t.CardExpiryElement = u, t.CardCvcElement = d, t.CardCVCElement = f, t.PaymentRequestButtonElement = a.default, t.IbanElement = m, t.IdealBankElement = y, t.FpxBankElement = h, t.AuBankAccountElement = _
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
				var s = "[object Object]" === Object.prototype.toString.call(t);
				if (s !== ("[object Object]" === Object.prototype.toString.call(n))) return !1;
				if (!s && !o) return !1;
				var i = Object.keys(t),
					a = Object.keys(n);
				if (i.length !== a.length) return !1;
				for (var c = {}, p = 0; p < i.length; p += 1) c[i[p]] = !0;
				for (var l = 0; l < a.length; l += 1) c[a[l]] = !0;
				var u = Object.keys(c);
				if (u.length !== i.length) return !1;
				var d = t,
					f = n;
				return u.every((function(t) {
					return e(d[t], f[t])
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

			function s() {}
			s.resetWarningCache = o, e.exports = function() {
				function e(e, t, n, o, s, i) {
					if (i !== r) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
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
		"./src/reddit/components/UpdateCardModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/react/index.js"),
				o = n.n(r),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-stripe-elements/es/index.js"),
				a = n("./src/reddit/hooks/useStripe.ts"),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				p = n("./node_modules/fbt/lib/FbtPublic.js"),
				l = n("./src/lib/makeActionCreator/index.ts"),
				u = n("./src/lib/sentry/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				f = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/components/Settings/PremiumForm.tsx"),
				y = n("./src/reddit/endpoints/gold/purchase.ts"),
				h = n("./src/reddit/models/Toast/index.ts"),
				_ = n("./src/reddit/selectors/activeModalId.ts"),
				v = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const b = Object(l.a)(v.f),
				E = e => async (t, n, {
					gqlContext: r
				}) => {
					try {
						const t = await Object(y.i)(r()),
							{
								error: n
							} = await e.redirectToCheckout({
								sessionId: t
							});
						if (n) throw new Error(n.message)
					} catch (o) {
						u.c.captureException(o);
						const e = p.fbt._("Something went wrong", null, {
							hk: "ie9Ol"
						});
						t(Object(f.f)({
							kind: h.b.Error,
							duration: f.a,
							text: e
						})), t((() => async (e, t) => {
							Object(_.b)(m.a)(t()) && (e(Object(d.i)(m.a)), e(b()))
						})())
					}
				};
			var j = n("./src/reddit/controls/LoadingIcon/index.tsx");
			const g = Object(i.injectStripe)(Object(c.a)(({
				stripe: e
			}) => {
				const t = Object(s.d)();
				return Object(r.useEffect)(() => {
					e && t(E(e))
				}, [e, t]), o.a.createElement(j.a, {
					sizePx: 15
				})
			}));
			t.default = e => {
				const t = Object(a.a)();
				return o.a.createElement(i.StripeProvider, {
					stripe: t
				}, o.a.createElement(i.Elements, null, o.a.createElement(g, e)))
			}
		},
		"./src/reddit/hooks/useStripe.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			}));
			var r = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				s = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const c = Object(a.a)(i.oc);

			function p() {
				const [e, t] = Object(o.useState)(null), n = Object(s.e)(c);
				return Object(o.useEffect)(() => {
					window.Stripe && t(window.Stripe(r.a.stripe.apiKey(n)))
				}, [n]), e
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/UpdateCardModal.5d1cee9d384ddd8692bb.js.map