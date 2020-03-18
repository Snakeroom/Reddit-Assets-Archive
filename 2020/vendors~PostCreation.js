// https://www.redditstatic.com/desktop2x/vendors~PostCreation.1b1379b71eff9278cb0c.js
// Retrieved at 3/18/2020, 2:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~PostCreation", "vendors~Poll"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, r, o) {
			"use strict";
			var t = o("./node_modules/react/index.js"),
				n = o.n(t),
				s = o("./node_modules/react-dom/index.js"),
				a = (o("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function i(e, r) {
				return Array.isArray(e) && Array.isArray(r) && e.length === r.length ? e.some((function(o, t) {
					return i(e[t], r[t])
				})) : e !== r
			}
			var u = new Map;

			function d(e) {
				void 0 === e && (e = {});
				for (var r, o = e.root || null, t = function(e) {
						var r = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!a.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							o = r[0],
							t = void 0 === o ? "0px" : o,
							n = r[1],
							s = void 0 === n ? t : n,
							i = r[2],
							u = void 0 === i ? t : i,
							d = r[3];
						return t + " " + s + " " + u + " " + (void 0 === d ? s : d)
					}(e.rootMargin), n = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], s = u.keys(); r = s.next().value;) {
					if (!(o !== r.root || t !== r.rootMargin || i(n, r.thresholds))) return r
				}
				return null
			}

			function c(e, r) {
				var o = u.get(e);
				if (o)
					for (var t, n = o.values(); t = n.next().value;)
						if (t.target === r.target) return t;
				return null
			}

			function l(e, r) {
				for (var o = 0; o < e.length; o++) {
					var t = c(r, e[o]);
					t && t.handleChange(e[o])
				}
			}

			function p(e) {
				return d(e) || new IntersectionObserver(l, e)
			}
			var h = o("./node_modules/invariant/browser.js"),
				f = o.n(h),
				m = {},
				v = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return m.errorReporter || function(e) {
								return f()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							m.errorReporter = e
						}
					}
				});

			function _(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function b(e, r, o) {
				return r in e ? Object.defineProperty(e, r, {
					value: o,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[r] = o, e
			}
			var y = ["root", "rootMargin", "threshold"],
				g = ["root", "rootMargin", "threshold", "disabled"],
				j = Object.prototype,
				O = j.hasOwnProperty,
				T = j.toString,
				x = function(e) {
					return y.reduce((function(r, o) {
						if (O.call(e, o)) {
							var t = "root" === o && "[object String]" === T.call(e[o]);
							r[o] = t ? document.querySelector(e[o]) : e[o]
						}
						return r
					}), {})
				},
				w = function(e) {
					var r, o;

					function t() {
						for (var r, o = arguments.length, t = new Array(o), n = 0; n < o; n++) t[n] = arguments[n];
						return b(_(r = e.call.apply(e, [this].concat(t)) || this), "handleChange", (function(e) {
							r.props.onChange(e, r.externalUnobserve)
						})), b(_(r), "handleNode", (function(e) {
							var o = r.props.children;
							if (null != o) {
								var t = o.ref;
								t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e))
							}
							r.targetNode = e && Object(s.findDOMNode)(e)
						})), b(_(r), "observe", (function() {
							return null != r.props.children && !r.props.disabled && (r.targetNode ? (r.observer = p(x(r.props)), r.target = r.targetNode, e = _(r), u.has(e.observer) || u.set(e.observer, new Set), u.get(e.observer).add(e), e.observer.observe(e.target), !0) : (v.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), b(_(r), "unobserve", (function(e) {
							! function(e, r) {
								if (u.has(e.observer)) {
									var o = u.get(e.observer);
									o.delete(e) && (o.size > 0 ? e.observer.unobserve(r) : (e.observer.disconnect(), u.delete(e.observer)))
								}
							}(_(r), e)
						})), b(_(r), "externalUnobserve", (function() {
							r.unobserve(r.targetNode)
						})), r
					}
					o = e, (r = t).prototype = Object.create(o.prototype), r.prototype.constructor = r, r.__proto__ = o;
					var a = t.prototype;
					return a.getSnapshotBeforeUpdate = function(e) {
						var r = this;
						this.prevTargetNode = this.targetNode;
						var o = g.some((function(o) {
							return i(r.props[o], e[o])
						}));
						return o && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), o
					}, a.componentDidUpdate = function(e, r, o) {
						var t = !1;
						o || (t = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (o || t) && this.observe()
					}, a.componentDidMount = function() {
						this.observe()
					}, a.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, a.render = function() {
						var e = this.props.children;
						return null != e ? n.a.cloneElement(n.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, t
				}(n.a.Component);
			b(w, "displayName", "IntersectionObserver"), o.d(r, "a", (function() {
				return w
			}))
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, r, o) {
			"use strict";
			var t = o("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}

			function s() {}
			s.resetWarningCache = n, e.exports = function() {
				function e(e, r, o, n, s, a) {
					if (a !== t) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
					}
				}

				function r() {
					return e
				}
				e.isRequired = e;
				var o = {
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
					elementType: e,
					instanceOf: r,
					node: e,
					objectOf: r,
					oneOf: r,
					oneOfType: r,
					shape: r,
					exact: r,
					checkPropTypes: s,
					resetWarningCache: n
				};
				return o.PropTypes = o, o
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, r, o) {
			e.exports = o("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, r, o) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/brcast/dist/brcast.es.js": function(e, r, o) {
			"use strict";
			r.a = function(e) {
				var r = {},
					o = 1,
					t = e;
				return {
					getState: function() {
						return t
					},
					setState: function(e) {
						t = e;
						for (var o = Object.keys(r), n = 0, s = o.length; n < s; n++) r[o[n]] && r[o[n]](e)
					},
					subscribe: function(e) {
						if ("function" != typeof e) throw new Error("listener must be a function.");
						var t = o;
						return r[t] = e, o += 1, t
					},
					unsubscribe: function(e) {
						r[e] = void 0
					}
				}
			}
		},
		"./node_modules/lodash/_arrayEvery.js": function(e, r) {
			e.exports = function(e, r) {
				for (var o = -1, t = null == e ? 0 : e.length; ++o < t;)
					if (!r(e[o], o, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, r) {
			e.exports = function(e, r, o) {
				return e == e && (void 0 !== o && (e = e <= o ? e : o), void 0 !== r && (e = e >= r ? e : r)), e
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, r, o) {
			var t = o("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, r) {
				var o = !0;
				return t(e, (function(e, t, n) {
					return o = !!r(e, t, n)
				})), o
			}
		},
		"./node_modules/lodash/_baseFindKey.js": function(e, r) {
			e.exports = function(e, r, o) {
				var t;
				return o(e, (function(e, o, n) {
					if (r(e, o, n)) return t = o, !1
				})), t
			}
		},
		"./node_modules/lodash/every.js": function(e, r, o) {
			var t = o("./node_modules/lodash/_arrayEvery.js"),
				n = o("./node_modules/lodash/_baseEvery.js"),
				s = o("./node_modules/lodash/_baseIteratee.js"),
				a = o("./node_modules/lodash/isArray.js"),
				i = o("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, r, o) {
				var u = a(e) ? t : n;
				return o && i(e, r, o) && (r = void 0), u(e, s(r, 3))
			}
		},
		"./node_modules/lodash/findKey.js": function(e, r, o) {
			var t = o("./node_modules/lodash/_baseFindKey.js"),
				n = o("./node_modules/lodash/_baseForOwn.js"),
				s = o("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, r) {
				return t(e, s(r, 3), n)
			}
		},
		"./node_modules/lodash/times.js": function(e, r, o) {
			var t = o("./node_modules/lodash/_baseTimes.js"),
				n = o("./node_modules/lodash/_castFunction.js"),
				s = o("./node_modules/lodash/toInteger.js"),
				a = 9007199254740991,
				i = 4294967295,
				u = Math.min;
			e.exports = function(e, r) {
				if ((e = s(e)) < 1 || e > a) return [];
				var o = i,
					d = u(e, i);
				r = n(r), e -= i;
				for (var c = t(d, r); ++o < e;) r(o);
				return c
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, r, o) {
			var t = o("./node_modules/lodash/toString.js"),
				n = 0;
			e.exports = function(e) {
				var r = ++n;
				return t(e) + r
			}
		},
		"./node_modules/react-router-dom/esm/react-router-dom.js": function(e, r, o) {
			"use strict";
			o.d(r, "a", (function() {
				return l
			}));
			var t = o("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),
				n = o("./node_modules/react/index.js"),
				s = o.n(n),
				a = o("./node_modules/react-router/esm/react-router.js"),
				i = o("./node_modules/history/esm/history.js"),
				u = (o("./node_modules/react-router-dom/node_modules/prop-types/index.js"), o("./node_modules/@babel/runtime/helpers/esm/extends.js")),
				d = o("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),
				c = o("./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
			s.a.Component;
			s.a.Component;
			var l = function(e) {
				function r() {
					return e.apply(this, arguments) || this
				}
				Object(t.a)(r, e);
				var o = r.prototype;
				return o.handleClick = function(e, r) {
					try {
						this.props.onClick && this.props.onClick(e)
					} catch (o) {
						throw e.preventDefault(), o
					}
					e.defaultPrevented || 0 !== e.button || this.props.target && "_self" !== this.props.target || function(e) {
						return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
					}(e) || (e.preventDefault(), (this.props.replace ? r.replace : r.push)(this.props.to))
				}, o.render = function() {
					var e = this,
						r = this.props,
						o = r.innerRef,
						t = (r.replace, r.to),
						n = Object(d.a)(r, ["innerRef", "replace", "to"]);
					return s.a.createElement(a.g.Consumer, null, (function(r) {
						r || Object(c.default)(!1);
						var a = "string" == typeof t ? Object(i.c)(t, null, null, r.location) : t,
							d = a ? r.history.createHref(a) : "";
						return s.a.createElement("a", Object(u.a)({}, n, {
							onClick: function(o) {
								return e.handleClick(o, r.history)
							},
							href: d,
							ref: o
						}))
					}))
				}, r
			}(s.a.Component)
		},
		"./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js": function(e, r, o) {
			"use strict";
			var t = o("./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}
			e.exports = function() {
				function e(e, r, o, n, s, a) {
					if (a !== t) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
					}
				}

				function r() {
					return e
				}
				e.isRequired = e;
				var o = {
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
				return o.checkPropTypes = n, o.PropTypes = o, o
			}
		},
		"./node_modules/react-router-dom/node_modules/prop-types/index.js": function(e, r, o) {
			e.exports = o("./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, r, o) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		}
	}
]);
//# sourceMappingURL=vendors~PostCreation.1b1379b71eff9278cb0c.js.map