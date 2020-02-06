// https://www.redditstatic.com/desktop2x/vendors~Poll~Reddit.9fdc501391e63c93af0a.js
// Retrieved at 2/6/2020, 4:00:15 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~Poll~Reddit"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, r, t) {
			"use strict";
			var o = t("./node_modules/react/index.js"),
				n = t.n(o),
				s = t("./node_modules/react-dom/index.js");
			t("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), t("./node_modules/invariant/browser.js");

			function i(e, r) {
				return Array.isArray(e) && Array.isArray(r) && e.length === r.length ? e.some((function(t, o) {
					return i(e[o], r[o])
				})) : e !== r
			}

			function a() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					r = e.root || null,
					t = function(e) {
						var r = /^-?\d*\.?\d+(px|%)$/,
							t = (e || "0px").split(/\s+/).map((function(e) {
								if (!r.test(e)) throw new Error("rootMargin must be specified in pixels or percent");
								return e
							}));
						return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t.join(" ")
					}(e.rootMargin),
					o = Array.isArray(e.threshold) ? e.threshold : [void 0 !== e.threshold ? e.threshold : 0],
					n = u.keys(),
					s = Array.isArray(n),
					a = 0;
				for (n = s ? n : n[Symbol.iterator]();;) {
					var c;
					if (s) {
						if (a >= n.length) break;
						c = n[a++]
					} else {
						if ((a = n.next()).done) break;
						c = a.value
					}
					var p = c;
					if (![
							[r, p.root],
							[t, p.rootMargin],
							[o, p.thresholds]
						].some((function(e) {
							return i.apply(void 0, e)
						}))) return p
				}
				return null
			}
			var u = new Map,
				c = function() {
					function e() {
						! function(e, r) {
							if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
						}(this, e)
					}
					return e.create = function(e, r) {
						return a(r) || new IntersectionObserver(e, r)
					}, e.findElement = function(e, r) {
						var t = u.get(r);
						if (t) {
							var o = t.values(),
								n = Array.isArray(o),
								s = 0;
							for (o = n ? o : o[Symbol.iterator]();;) {
								var i;
								if (n) {
									if (s >= o.length) break;
									i = o[s++]
								} else {
									if ((s = o.next()).done) break;
									i = s.value
								}
								var a = i;
								if (a.target === e.target) return a
							}
						}
						return null
					}, e.observe = function(e) {
						var r = void 0;
						u.has(e.observer) ? r = u.get(e.observer) : (r = new Set, u.set(e.observer, r)), r.add(e), e.observer.observe(e.target)
					}, e.unobserve = function(e) {
						if (u.has(e.observer)) {
							var r = u.get(e.observer);
							r.delete(e) && (r.size > 0 ? e.observer.unobserve(e.target) : (e.observer.disconnect(), u.delete(e.observer)))
						}
					}, e.clear = function() {
						u.clear()
					}, e.count = function() {
						return u.size
					}, e
				}(),
				p = function() {
					function e(e, r) {
						for (var t = 0; t < r.length; t++) {
							var o = r[t];
							o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
						}
					}
					return function(r, t, o) {
						return t && e(r.prototype, t), o && e(r, o), r
					}
				}();

			function l(e, r) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !r || "object" != typeof r && "function" != typeof r ? e : r
			}

			function d(e, r) {
				e.forEach((function(e) {
					var t = c.findElement(e, r);
					t && t.handleChange(e)
				}))
			}
			var f = ["root", "rootMargin", "threshold"],
				h = Object.prototype,
				y = function(e) {
					function r() {
						var t, o;
						! function(e, r) {
							if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function")
						}(this, r);
						for (var n = arguments.length, s = Array(n), i = 0; i < n; i++) s[i] = arguments[i];
						return t = o = l(this, e.call.apply(e, [this].concat(s))), o.handleChange = function(e) {
							o.props.onChange(e), o.props.onlyOnce && e.isIntersecting && o.unobserve()
						}, o.handleNode = function(e) {
							"function" == typeof o.props.children.ref && o.props.children.ref(e), o.currentTarget && e && o.currentTarget !== e && (o.unobserve(), o.shouldResetObserver = !0), o.target = e
						}, l(o, t)
					}
					return function(e, r) {
						if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
						e.prototype = Object.create(r && r.prototype, {
							constructor: {
								value: e,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r)
					}(r, e), r.prototype.observe = function() {
						var e;
						this.target = (e = this.target, n.a.isValidElement(e) && "string" == typeof e.type ? this.target : Object(s.findDOMNode)(this.target)), this.observer = c.create(d, this.options), c.observe(this)
					}, r.prototype.unobserve = function() {
						c.unobserve(this)
					}, r.prototype.reobserve = function() {
						this.unobserve(), this.props.disabled || this.observe()
					}, r.prototype.componentDidMount = function() {
						this.props.disabled || this.observe()
					}, r.prototype.componentWillUnmount = function() {
						this.unobserve()
					}, r.prototype.componentDidUpdate = function() {
						this.shouldResetObserver && this.reobserve()
					}, r.prototype.componentWillUpdate = function(e) {
						var r = this;
						this.shouldResetObserver = f.concat(["disabled"]).some((function(t) {
							return i(e[t], r.props[t])
						}))
					}, r.prototype.render = function() {
						return this.currentTarget = this.target, n.a.cloneElement(n.a.Children.only(this.props.children), {
							ref: this.handleNode
						})
					}, p(r, [{
						key: "options",
						get: function() {
							var e = this;
							return f.reduce((function(r, t) {
								if (h.hasOwnProperty.call(e.props, t)) {
									var o, n = e.props[t];
									return "root" === t && "[object String]" === h.toString.call(e.props[t]) && (n = document.querySelector(n)), Object.assign({}, r, ((o = {})[t] = n, o))
								}
								return r
							}), {})
						}
					}]), r
				}(n.a.Component);
			y.displayName = "IntersectionObserver";
			var m = y;
			t.d(r, "a", (function() {
				return m
			}))
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, r, t) {
			"use strict";
			var o = t("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}
			e.exports = function() {
				function e(e, r, t, n, s, i) {
					if (i !== o) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
					}
				}

				function r() {
					return e
				}
				e.isRequired = e;
				var t = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: r,
					element: e,
					instanceOf: r,
					node: e,
					objectOf: r,
					oneOf: r,
					oneOfType: r,
					shape: r,
					exact: r
				};
				return t.checkPropTypes = n, t.PropTypes = t, t
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, r, t) {
			e.exports = t("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, r, t) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/brcast/dist/brcast.es.js": function(e, r, t) {
			"use strict";
			r.a = function(e) {
				var r = {},
					t = 1,
					o = e;
				return {
					getState: function() {
						return o
					},
					setState: function(e) {
						o = e;
						for (var t = Object.keys(r), n = 0, s = t.length; n < s; n++) r[t[n]] && r[t[n]](e)
					},
					subscribe: function(e) {
						if ("function" != typeof e) throw new Error("listener must be a function.");
						var o = t;
						return r[o] = e, t += 1, o
					},
					unsubscribe: function(e) {
						r[e] = void 0
					}
				}
			}
		},
		"./node_modules/lodash/_arrayEvery.js": function(e, r) {
			e.exports = function(e, r) {
				for (var t = -1, o = null == e ? 0 : e.length; ++t < o;)
					if (!r(e[t], t, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, r) {
			e.exports = function(e, r, t) {
				return e == e && (void 0 !== t && (e = e <= t ? e : t), void 0 !== r && (e = e >= r ? e : r)), e
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, r, t) {
			var o = t("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, r) {
				var t = !0;
				return o(e, (function(e, o, n) {
					return t = !!r(e, o, n)
				})), t
			}
		},
		"./node_modules/lodash/every.js": function(e, r, t) {
			var o = t("./node_modules/lodash/_arrayEvery.js"),
				n = t("./node_modules/lodash/_baseEvery.js"),
				s = t("./node_modules/lodash/_baseIteratee.js"),
				i = t("./node_modules/lodash/isArray.js"),
				a = t("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, r, t) {
				var u = i(e) ? o : n;
				return t && a(e, r, t) && (r = void 0), u(e, s(r, 3))
			}
		},
		"./node_modules/react-router-dom/esm/react-router-dom.js": function(e, r, t) {
			"use strict";
			t.d(r, "a", (function() {
				return l
			}));
			var o = t("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),
				n = t("./node_modules/react/index.js"),
				s = t.n(n),
				i = t("./node_modules/react-router/esm/react-router.js"),
				a = t("./node_modules/history/esm/history.js"),
				u = (t("./node_modules/react-router-dom/node_modules/prop-types/index.js"), t("./node_modules/@babel/runtime/helpers/esm/extends.js")),
				c = t("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),
				p = t("./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
			s.a.Component;
			s.a.Component;
			var l = function(e) {
				function r() {
					return e.apply(this, arguments) || this
				}
				Object(o.a)(r, e);
				var t = r.prototype;
				return t.handleClick = function(e, r) {
					try {
						this.props.onClick && this.props.onClick(e)
					} catch (t) {
						throw e.preventDefault(), t
					}
					e.defaultPrevented || 0 !== e.button || this.props.target && "_self" !== this.props.target || function(e) {
						return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
					}(e) || (e.preventDefault(), (this.props.replace ? r.replace : r.push)(this.props.to))
				}, t.render = function() {
					var e = this,
						r = this.props,
						t = r.innerRef,
						o = (r.replace, r.to),
						n = Object(c.a)(r, ["innerRef", "replace", "to"]);
					return s.a.createElement(i.g.Consumer, null, (function(r) {
						r || Object(p.default)(!1);
						var i = "string" == typeof o ? Object(a.c)(o, null, null, r.location) : o,
							c = i ? r.history.createHref(i) : "";
						return s.a.createElement("a", Object(u.a)({}, n, {
							onClick: function(t) {
								return e.handleClick(t, r.history)
							},
							href: c,
							ref: t
						}))
					}))
				}, r
			}(s.a.Component)
		},
		"./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js": function(e, r, t) {
			"use strict";
			var o = t("./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}
			e.exports = function() {
				function e(e, r, t, n, s, i) {
					if (i !== o) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
					}
				}

				function r() {
					return e
				}
				e.isRequired = e;
				var t = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: r,
					element: e,
					instanceOf: r,
					node: e,
					objectOf: r,
					oneOf: r,
					oneOfType: r,
					shape: r,
					exact: r
				};
				return t.checkPropTypes = n, t.PropTypes = t, t
			}
		},
		"./node_modules/react-router-dom/node_modules/prop-types/index.js": function(e, r, t) {
			e.exports = t("./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, r, t) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		}
	}
]);
//# sourceMappingURL=vendors~Poll~Reddit.9fdc501391e63c93af0a.js.map