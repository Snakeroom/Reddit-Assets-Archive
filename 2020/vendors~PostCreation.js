// https://www.redditstatic.com/desktop2x/vendors~PostCreation.c051114172e8b42d437b.js
// Retrieved at 3/30/2020, 7:00:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~PostCreation", "vendors~Poll"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, r, t) {
			"use strict";
			var o = t("./node_modules/react/index.js"),
				n = t.n(o),
				s = t("./node_modules/react-dom/index.js"),
				a = (t("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function i(e, r) {
				return Array.isArray(e) && Array.isArray(r) && e.length === r.length ? e.some((function(t, o) {
					return i(e[o], r[o])
				})) : e !== r
			}
			var u = new Map;

			function d(e) {
				void 0 === e && (e = {});
				for (var r, t = e.root || null, o = function(e) {
						var r = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!a.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							t = r[0],
							o = void 0 === t ? "0px" : t,
							n = r[1],
							s = void 0 === n ? o : n,
							i = r[2],
							u = void 0 === i ? o : i,
							d = r[3];
						return o + " " + s + " " + u + " " + (void 0 === d ? s : d)
					}(e.rootMargin), n = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], s = u.keys(); r = s.next().value;) {
					if (!(t !== r.root || o !== r.rootMargin || i(n, r.thresholds))) return r
				}
				return null
			}

			function c(e, r) {
				var t = u.get(e);
				if (t)
					for (var o, n = t.values(); o = n.next().value;)
						if (o.target === r.target) return o;
				return null
			}

			function l(e, r) {
				for (var t = 0; t < e.length; t++) {
					var o = c(r, e[t]);
					o && o.handleChange(e[t])
				}
			}

			function p(e) {
				return d(e) || new IntersectionObserver(l, e)
			}
			var h = t("./node_modules/invariant/browser.js"),
				f = t.n(h),
				v = {},
				m = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return v.errorReporter || function(e) {
								return f()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							v.errorReporter = e
						}
					}
				});

			function b(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function _(e, r, t) {
				return r in e ? Object.defineProperty(e, r, {
					value: t,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[r] = t, e
			}
			var y = ["root", "rootMargin", "threshold"],
				g = ["root", "rootMargin", "threshold", "disabled"],
				j = Object.prototype,
				O = j.hasOwnProperty,
				T = j.toString,
				x = function(e) {
					return y.reduce((function(r, t) {
						if (O.call(e, t)) {
							var o = "root" === t && "[object String]" === T.call(e[t]);
							r[t] = o ? document.querySelector(e[t]) : e[t]
						}
						return r
					}), {})
				},
				w = function(e) {
					var r, t;

					function o() {
						for (var r, t = arguments.length, o = new Array(t), n = 0; n < t; n++) o[n] = arguments[n];
						return _(b(r = e.call.apply(e, [this].concat(o)) || this), "handleChange", (function(e) {
							r.props.onChange(e, r.externalUnobserve)
						})), _(b(r), "handleNode", (function(e) {
							var t = r.props.children;
							if (null != t) {
								var o = t.ref;
								o && ("function" == typeof o ? o(e) : "object" == typeof o && (o.current = e))
							}
							r.targetNode = e && Object(s.findDOMNode)(e)
						})), _(b(r), "observe", (function() {
							return null != r.props.children && !r.props.disabled && (r.targetNode ? (r.observer = p(x(r.props)), r.target = r.targetNode, e = b(r), u.has(e.observer) || u.set(e.observer, new Set), u.get(e.observer).add(e), e.observer.observe(e.target), !0) : (m.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), _(b(r), "unobserve", (function(e) {
							! function(e, r) {
								if (u.has(e.observer)) {
									var t = u.get(e.observer);
									t.delete(e) && (t.size > 0 ? e.observer.unobserve(r) : (e.observer.disconnect(), u.delete(e.observer)))
								}
							}(b(r), e)
						})), _(b(r), "externalUnobserve", (function() {
							r.unobserve(r.targetNode)
						})), r
					}
					t = e, (r = o).prototype = Object.create(t.prototype), r.prototype.constructor = r, r.__proto__ = t;
					var a = o.prototype;
					return a.getSnapshotBeforeUpdate = function(e) {
						var r = this;
						this.prevTargetNode = this.targetNode;
						var t = g.some((function(t) {
							return i(r.props[t], e[t])
						}));
						return t && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), t
					}, a.componentDidUpdate = function(e, r, t) {
						var o = !1;
						t || (o = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (t || o) && this.observe()
					}, a.componentDidMount = function() {
						this.observe()
					}, a.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, a.render = function() {
						var e = this.props.children;
						return null != e ? n.a.cloneElement(n.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, o
				}(n.a.Component);
			_(w, "displayName", "IntersectionObserver"), t.d(r, "a", (function() {
				return w
			}))
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, r, t) {
			"use strict";
			var o = t("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}

			function s() {}
			s.resetWarningCache = n, e.exports = function() {
				function e(e, r, t, n, s, a) {
					if (a !== o) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
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
				return t.PropTypes = t, t
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
		"./node_modules/lodash/_baseFindKey.js": function(e, r) {
			e.exports = function(e, r, t) {
				var o;
				return t(e, (function(e, t, n) {
					if (r(e, t, n)) return o = t, !1
				})), o
			}
		},
		"./node_modules/lodash/every.js": function(e, r, t) {
			var o = t("./node_modules/lodash/_arrayEvery.js"),
				n = t("./node_modules/lodash/_baseEvery.js"),
				s = t("./node_modules/lodash/_baseIteratee.js"),
				a = t("./node_modules/lodash/isArray.js"),
				i = t("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, r, t) {
				var u = a(e) ? o : n;
				return t && i(e, r, t) && (r = void 0), u(e, s(r, 3))
			}
		},
		"./node_modules/lodash/findKey.js": function(e, r, t) {
			var o = t("./node_modules/lodash/_baseFindKey.js"),
				n = t("./node_modules/lodash/_baseForOwn.js"),
				s = t("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, r) {
				return o(e, s(r, 3), n)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, r, t) {
			var o = t("./node_modules/lodash/toString.js"),
				n = 0;
			e.exports = function(e) {
				var r = ++n;
				return o(e) + r
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
				a = t("./node_modules/react-router/esm/react-router.js"),
				i = t("./node_modules/history/esm/history.js"),
				u = (t("./node_modules/react-router-dom/node_modules/prop-types/index.js"), t("./node_modules/@babel/runtime/helpers/esm/extends.js")),
				d = t("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),
				c = t("./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
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
						n = Object(d.a)(r, ["innerRef", "replace", "to"]);
					return s.a.createElement(a.g.Consumer, null, (function(r) {
						r || Object(c.default)(!1);
						var a = "string" == typeof o ? Object(i.c)(o, null, null, r.location) : o,
							d = a ? r.history.createHref(a) : "";
						return s.a.createElement("a", Object(u.a)({}, n, {
							onClick: function(t) {
								return e.handleClick(t, r.history)
							},
							href: d,
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
				function e(e, r, t, n, s, a) {
					if (a !== o) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
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
//# sourceMappingURL=vendors~PostCreation.c051114172e8b42d437b.js.map