// https://www.redditstatic.com/desktop2x/Subreddit.3d599cbe146a86f07372.js
// Retrieved at 3/11/2021, 11:30:06 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Subreddit", "reddit-components-Econ-PredictionLeaderboard-Sidebar"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-dom/index.js"),
				a = (n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function i(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(n, r) {
					return i(e[r], t[r])
				})) : e !== t
			}
			var c = new Map;

			function d(e) {
				void 0 === e && (e = {});
				for (var t, n = e.root || null, r = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!a.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							n = t[0],
							r = void 0 === n ? "0px" : n,
							s = t[1],
							o = void 0 === s ? r : s,
							i = t[2],
							c = void 0 === i ? r : i,
							d = t[3];
						return r + " " + o + " " + c + " " + (void 0 === d ? o : d)
					}(e.rootMargin), s = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], o = c.keys(); t = o.next().value;) {
					if (!(n !== t.root || r !== t.rootMargin || i(s, t.thresholds))) return t
				}
				return null
			}

			function l(e, t) {
				var n = c.get(e);
				if (n)
					for (var r, s = n.values(); r = s.next().value;)
						if (r.target === t.target) return r;
				return null
			}

			function u(e, t) {
				for (var n = 0; n < e.length; n++) {
					var r = l(t, e[n]);
					r && r.handleChange(e[n])
				}
			}

			function m(e) {
				return d(e) || new IntersectionObserver(u, e)
			}
			var p = n("./node_modules/invariant/browser.js"),
				b = n.n(p),
				f = {},
				h = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return f.errorReporter || function(e) {
								return b()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							f.errorReporter = e
						}
					}
				});

			function y(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function g(e, t, n) {
				return t in e ? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = n, e
			}
			var v = ["root", "rootMargin", "threshold"],
				_ = ["root", "rootMargin", "threshold", "disabled"],
				x = Object.prototype,
				O = x.hasOwnProperty,
				j = x.toString,
				E = function(e) {
					return v.reduce((function(t, n) {
						if (O.call(e, n)) {
							var r = "root" === n && "[object String]" === j.call(e[n]);
							t[n] = r ? document.querySelector(e[n]) : e[n]
						}
						return t
					}), {})
				},
				S = function(e) {
					var t, n;

					function r() {
						for (var t, n = arguments.length, r = new Array(n), s = 0; s < n; s++) r[s] = arguments[s];
						return g(y(t = e.call.apply(e, [this].concat(r)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), g(y(t), "handleNode", (function(e) {
							var n = t.props.children;
							if (null != n) {
								var r = n.ref;
								r && ("function" == typeof r ? r(e) : "object" == typeof r && (r.current = e))
							}
							t.targetNode = e && Object(o.findDOMNode)(e)
						})), g(y(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = m(E(t.props)), t.target = t.targetNode, e = y(t), c.has(e.observer) || c.set(e.observer, new Set), c.get(e.observer).add(e), e.observer.observe(e.target), !0) : (h.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), g(y(t), "unobserve", (function(e) {
							! function(e, t) {
								if (c.has(e.observer)) {
									var n = c.get(e.observer);
									n.delete(e) && (n.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), c.delete(e.observer)))
								}
							}(y(t), e)
						})), g(y(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n;
					var a = r.prototype;
					return a.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var n = _.some((function(n) {
							return i(t.props[n], e[n])
						}));
						return n && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), n
					}, a.componentDidUpdate = function(e, t, n) {
						var r = !1;
						n || (r = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (n || r) && this.observe()
					}, a.componentDidMount = function() {
						this.observe()
					}, a.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, a.render = function() {
						var e = this.props.children;
						return null != e ? s.a.cloneElement(s.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, r
				}(s.a.Component);
			g(S, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}

			function o() {}
			o.resetWarningCache = s, e.exports = function() {
				function e(e, t, n, s, o, a) {
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
					checkPropTypes: o,
					resetWarningCache: s
				};
				return n.PropTypes = n, n
			}
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, t, n) {
			e.exports = n("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, n) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/lodash/_arraySampleSize.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseClamp.js"),
				s = n("./node_modules/lodash/_copyArray.js"),
				o = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, t) {
				return o(s(e), r(t, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var n = Math.floor,
				r = Math.random;
			e.exports = function(e, t) {
				return e + n(r() * (t - e + 1))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseClamp.js"),
				s = n("./node_modules/lodash/_shuffleSelf.js"),
				o = n("./node_modules/lodash/values.js");
			e.exports = function(e, t) {
				var n = o(e);
				return s(n, r(t, 0, n.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var n = -1,
					s = e.length,
					o = s - 1;
				for (t = void 0 === t ? s : t; ++n < t;) {
					var a = r(n, o),
						i = e[a];
					e[a] = e[n], e[n] = i
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/random.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseRandom.js"),
				s = n("./node_modules/lodash/_isIterateeCall.js"),
				o = n("./node_modules/lodash/toFinite.js"),
				a = parseFloat,
				i = Math.min,
				c = Math.random;
			e.exports = function(e, t, n) {
				if (n && "boolean" != typeof n && s(e, t, n) && (t = n = void 0), void 0 === n && ("boolean" == typeof t ? (n = t, t = void 0) : "boolean" == typeof e && (n = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = o(e), void 0 === t ? (t = e, e = 0) : t = o(t)), e > t) {
					var d = e;
					e = t, t = d
				}
				if (n || e % 1 || t % 1) {
					var l = c();
					return i(e + l * (t - e + a("1e-" + ((l + "").length - 1))), t)
				}
				return r(e, t)
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arraySampleSize.js"),
				s = n("./node_modules/lodash/_baseSampleSize.js"),
				o = n("./node_modules/lodash/isArray.js"),
				a = n("./node_modules/lodash/_isIterateeCall.js"),
				i = n("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, n) {
				return t = (n ? a(e, t, n) : void 0 === t) ? 1 : i(t), (o(e) ? r : s)(e, t)
			}
		},
		"./node_modules/react-fast-compare/index.js": function(e, t) {
			var n = "undefined" != typeof Element,
				r = "function" == typeof Map,
				s = "function" == typeof Set,
				o = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
			e.exports = function(e, t) {
				try {
					return function e(t, a) {
						if (t === a) return !0;
						if (t && a && "object" == typeof t && "object" == typeof a) {
							if (t.constructor !== a.constructor) return !1;
							var i, c, d, l;
							if (Array.isArray(t)) {
								if ((i = t.length) != a.length) return !1;
								for (c = i; 0 != c--;)
									if (!e(t[c], a[c])) return !1;
								return !0
							}
							if (r && t instanceof Map && a instanceof Map) {
								if (t.size !== a.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!a.has(c.value[0])) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!e(c.value[1], a.get(c.value[0]))) return !1;
								return !0
							}
							if (s && t instanceof Set && a instanceof Set) {
								if (t.size !== a.size) return !1;
								for (l = t.entries(); !(c = l.next()).done;)
									if (!a.has(c.value[0])) return !1;
								return !0
							}
							if (o && ArrayBuffer.isView(t) && ArrayBuffer.isView(a)) {
								if ((i = t.length) != a.length) return !1;
								for (c = i; 0 != c--;)
									if (t[c] !== a[c]) return !1;
								return !0
							}
							if (t.constructor === RegExp) return t.source === a.source && t.flags === a.flags;
							if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === a.valueOf();
							if (t.toString !== Object.prototype.toString) return t.toString() === a.toString();
							if ((i = (d = Object.keys(t)).length) !== Object.keys(a).length) return !1;
							for (c = i; 0 != c--;)
								if (!Object.prototype.hasOwnProperty.call(a, d[c])) return !1;
							if (n && t instanceof Element) return !1;
							for (c = i; 0 != c--;)
								if (("_owner" !== d[c] && "__v" !== d[c] && "__o" !== d[c] || !t.$$typeof) && !e(t[d[c]], a[d[c]])) return !1;
							return !0
						}
						return t != t && a != a
					}(e, t)
				} catch (a) {
					if ((a.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
					throw a
				}
			}
		},
		"./node_modules/react-motion/lib/Motion.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0;
			var r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				},
				s = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t
					}
				}();

			function o(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var a = o(n("./node_modules/react-motion/lib/mapToZero.js")),
				i = o(n("./node_modules/react-motion/lib/stripStyle.js")),
				c = o(n("./node_modules/react-motion/lib/stepper.js")),
				d = o(n("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				l = o(n("./node_modules/raf/index.js")),
				u = o(n("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				m = o(n("./node_modules/react/index.js")),
				p = o(n("./node_modules/react-motion/node_modules/prop-types/index.js")),
				b = 1e3 / 60,
				f = function(e) {
					function t(n) {
						var s = this;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), e.call(this, n), this.wasAnimating = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyle = null, this.clearUnreadPropStyle = function(e) {
							var t = !1,
								n = s.state,
								o = n.currentStyle,
								a = n.currentVelocity,
								i = n.lastIdealStyle,
								c = n.lastIdealVelocity;
							for (var d in e)
								if (Object.prototype.hasOwnProperty.call(e, d)) {
									var l = e[d];
									"number" == typeof l && (t || (t = !0, o = r({}, o), a = r({}, a), i = r({}, i), c = r({}, c)), o[d] = l, a[d] = 0, i[d] = l, c[d] = 0)
								} t && s.setState({
								currentStyle: o,
								currentVelocity: a,
								lastIdealStyle: i,
								lastIdealVelocity: c
							})
						}, this.startAnimationIfNecessary = function() {
							s.animationID = l.default((function(e) {
								var t = s.props.style;
								if (u.default(s.state.currentStyle, t, s.state.currentVelocity)) return s.wasAnimating && s.props.onRest && s.props.onRest(), s.animationID = null, s.wasAnimating = !1, void(s.accumulatedTime = 0);
								s.wasAnimating = !0;
								var n = e || d.default(),
									r = n - s.prevTime;
								if (s.prevTime = n, s.accumulatedTime = s.accumulatedTime + r, s.accumulatedTime > 10 * b && (s.accumulatedTime = 0), 0 === s.accumulatedTime) return s.animationID = null, void s.startAnimationIfNecessary();
								var o = (s.accumulatedTime - Math.floor(s.accumulatedTime / b) * b) / b,
									a = Math.floor(s.accumulatedTime / b),
									i = {},
									l = {},
									m = {},
									p = {};
								for (var f in t)
									if (Object.prototype.hasOwnProperty.call(t, f)) {
										var h = t[f];
										if ("number" == typeof h) m[f] = h, p[f] = 0, i[f] = h, l[f] = 0;
										else {
											for (var y = s.state.lastIdealStyle[f], g = s.state.lastIdealVelocity[f], v = 0; v < a; v++) {
												var _ = c.default(b / 1e3, y, g, h.val, h.stiffness, h.damping, h.precision);
												y = _[0], g = _[1]
											}
											var x = c.default(b / 1e3, y, g, h.val, h.stiffness, h.damping, h.precision),
												O = x[0],
												j = x[1];
											m[f] = y + (O - y) * o, p[f] = g + (j - g) * o, i[f] = y, l[f] = g
										}
									} s.animationID = null, s.accumulatedTime -= a * b, s.setState({
									currentStyle: m,
									currentVelocity: p,
									lastIdealStyle: i,
									lastIdealVelocity: l
								}), s.unreadPropStyle = null, s.startAnimationIfNecessary()
							}))
						}, this.state = this.defaultState()
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
					}(t, e), s(t, null, [{
						key: "propTypes",
						value: {
							defaultStyle: p.default.objectOf(p.default.number),
							style: p.default.objectOf(p.default.oneOfType([p.default.number, p.default.object])).isRequired,
							children: p.default.func.isRequired,
							onRest: p.default.func
						},
						enumerable: !0
					}]), t.prototype.defaultState = function() {
						var e = this.props,
							t = e.defaultStyle,
							n = e.style,
							r = t || i.default(n),
							s = a.default(r);
						return {
							currentStyle: r,
							currentVelocity: s,
							lastIdealStyle: r,
							lastIdealVelocity: s
						}
					}, t.prototype.componentDidMount = function() {
						this.prevTime = d.default(), this.startAnimationIfNecessary()
					}, t.prototype.componentWillReceiveProps = function(e) {
						null != this.unreadPropStyle && this.clearUnreadPropStyle(this.unreadPropStyle), this.unreadPropStyle = e.style, null == this.animationID && (this.prevTime = d.default(), this.startAnimationIfNecessary())
					}, t.prototype.componentWillUnmount = function() {
						null != this.animationID && (l.default.cancel(this.animationID), this.animationID = null)
					}, t.prototype.render = function() {
						var e = this.props.children(this.state.currentStyle);
						return e && m.default.Children.only(e)
					}, t
				}(m.default.Component);
			t.default = f, e.exports = t.default
		},
		"./node_modules/react-motion/lib/StaggeredMotion.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0;
			var r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				},
				s = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t
					}
				}();

			function o(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var a = o(n("./node_modules/react-motion/lib/mapToZero.js")),
				i = o(n("./node_modules/react-motion/lib/stripStyle.js")),
				c = o(n("./node_modules/react-motion/lib/stepper.js")),
				d = o(n("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				l = o(n("./node_modules/raf/index.js")),
				u = o(n("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				m = o(n("./node_modules/react/index.js")),
				p = o(n("./node_modules/react-motion/node_modules/prop-types/index.js")),
				b = 1e3 / 60;
			var f = function(e) {
				function t(n) {
					var s = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, n), this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = s.state, n = t.currentStyles, o = t.currentVelocities, a = t.lastIdealStyles, i = t.lastIdealVelocities, c = !1, d = 0; d < e.length; d++) {
							var l = e[d],
								u = !1;
							for (var m in l)
								if (Object.prototype.hasOwnProperty.call(l, m)) {
									var p = l[m];
									"number" == typeof p && (u || (u = !0, c = !0, n[d] = r({}, n[d]), o[d] = r({}, o[d]), a[d] = r({}, a[d]), i[d] = r({}, i[d])), n[d][m] = p, o[d][m] = 0, a[d][m] = p, i[d][m] = 0)
								}
						}
						c && s.setState({
							currentStyles: n,
							currentVelocities: o,
							lastIdealStyles: a,
							lastIdealVelocities: i
						})
					}, this.startAnimationIfNecessary = function() {
						s.animationID = l.default((function(e) {
							var t = s.props.styles(s.state.lastIdealStyles);
							if (function(e, t, n) {
									for (var r = 0; r < e.length; r++)
										if (!u.default(e[r], t[r], n[r])) return !1;
									return !0
								}(s.state.currentStyles, t, s.state.currentVelocities)) return s.animationID = null, void(s.accumulatedTime = 0);
							var n = e || d.default(),
								r = n - s.prevTime;
							if (s.prevTime = n, s.accumulatedTime = s.accumulatedTime + r, s.accumulatedTime > 10 * b && (s.accumulatedTime = 0), 0 === s.accumulatedTime) return s.animationID = null, void s.startAnimationIfNecessary();
							for (var o = (s.accumulatedTime - Math.floor(s.accumulatedTime / b) * b) / b, a = Math.floor(s.accumulatedTime / b), i = [], l = [], m = [], p = [], f = 0; f < t.length; f++) {
								var h = t[f],
									y = {},
									g = {},
									v = {},
									_ = {};
								for (var x in h)
									if (Object.prototype.hasOwnProperty.call(h, x)) {
										var O = h[x];
										if ("number" == typeof O) y[x] = O, g[x] = 0, v[x] = O, _[x] = 0;
										else {
											for (var j = s.state.lastIdealStyles[f][x], E = s.state.lastIdealVelocities[f][x], S = 0; S < a; S++) {
												var I = c.default(b / 1e3, j, E, O.val, O.stiffness, O.damping, O.precision);
												j = I[0], E = I[1]
											}
											var P = c.default(b / 1e3, j, E, O.val, O.stiffness, O.damping, O.precision),
												C = P[0],
												T = P[1];
											y[x] = j + (C - j) * o, g[x] = E + (T - E) * o, v[x] = j, _[x] = E
										}
									} m[f] = y, p[f] = g, i[f] = v, l[f] = _
							}
							s.animationID = null, s.accumulatedTime -= a * b, s.setState({
								currentStyles: m,
								currentVelocities: p,
								lastIdealStyles: i,
								lastIdealVelocities: l
							}), s.unreadPropStyles = null, s.startAnimationIfNecessary()
						}))
					}, this.state = this.defaultState()
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
				}(t, e), s(t, null, [{
					key: "propTypes",
					value: {
						defaultStyles: p.default.arrayOf(p.default.objectOf(p.default.number)),
						styles: p.default.func.isRequired,
						children: p.default.func.isRequired
					},
					enumerable: !0
				}]), t.prototype.defaultState = function() {
					var e = this.props,
						t = e.defaultStyles,
						n = e.styles,
						r = t || n().map(i.default),
						s = r.map((function(e) {
							return a.default(e)
						}));
					return {
						currentStyles: r,
						currentVelocities: s,
						lastIdealStyles: r,
						lastIdealVelocities: s
					}
				}, t.prototype.componentDidMount = function() {
					this.prevTime = d.default(), this.startAnimationIfNecessary()
				}, t.prototype.componentWillReceiveProps = function(e) {
					null != this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles), this.unreadPropStyles = e.styles(this.state.lastIdealStyles), null == this.animationID && (this.prevTime = d.default(), this.startAnimationIfNecessary())
				}, t.prototype.componentWillUnmount = function() {
					null != this.animationID && (l.default.cancel(this.animationID), this.animationID = null)
				}, t.prototype.render = function() {
					var e = this.props.children(this.state.currentStyles);
					return e && m.default.Children.only(e)
				}, t
			}(m.default.Component);
			t.default = f, e.exports = t.default
		},
		"./node_modules/react-motion/lib/TransitionMotion.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0;
			var r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				},
				s = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t
					}
				}();

			function o(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var a = o(n("./node_modules/react-motion/lib/mapToZero.js")),
				i = o(n("./node_modules/react-motion/lib/stripStyle.js")),
				c = o(n("./node_modules/react-motion/lib/stepper.js")),
				d = o(n("./node_modules/react-motion/lib/mergeDiff.js")),
				l = o(n("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				u = o(n("./node_modules/raf/index.js")),
				m = o(n("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				p = o(n("./node_modules/react/index.js")),
				b = o(n("./node_modules/react-motion/node_modules/prop-types/index.js")),
				f = 1e3 / 60;

			function h(e, t, n) {
				var r = t;
				return null == r ? e.map((function(e, t) {
					return {
						key: e.key,
						data: e.data,
						style: n[t]
					}
				})) : e.map((function(e, t) {
					for (var s = 0; s < r.length; s++)
						if (r[s].key === e.key) return {
							key: r[s].key,
							data: r[s].data,
							style: n[t]
						};
					return {
						key: e.key,
						data: e.data,
						style: n[t]
					}
				}))
			}

			function y(e, t, n, r, s, o, i, c, l) {
				for (var u = d.default(r, s, (function(e, r) {
						var s = t(r);
						return null == s ? (n({
							key: r.key,
							data: r.data
						}), null) : m.default(o[e], s, i[e]) ? (n({
							key: r.key,
							data: r.data
						}), null) : {
							key: r.key,
							data: r.data,
							style: s
						}
					})), p = [], b = [], f = [], h = [], y = 0; y < u.length; y++) {
					for (var g = u[y], v = null, _ = 0; _ < r.length; _++)
						if (r[_].key === g.key) {
							v = _;
							break
						} if (null == v) {
						var x = e(g);
						p[y] = x, f[y] = x;
						var O = a.default(g.style);
						b[y] = O, h[y] = O
					} else p[y] = o[v], f[y] = c[v], b[y] = i[v], h[y] = l[v]
				}
				return [u, p, b, f, h]
			}
			var g = function(e) {
				function t(n) {
					var s = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, n), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = y(s.props.willEnter, s.props.willLeave, s.props.didLeave, s.state.mergedPropsStyles, e, s.state.currentStyles, s.state.currentVelocities, s.state.lastIdealStyles, s.state.lastIdealVelocities), n = t[0], o = t[1], a = t[2], i = t[3], c = t[4], d = 0; d < e.length; d++) {
							var l = e[d].style,
								u = !1;
							for (var m in l)
								if (Object.prototype.hasOwnProperty.call(l, m)) {
									var p = l[m];
									"number" == typeof p && (u || (u = !0, o[d] = r({}, o[d]), a[d] = r({}, a[d]), i[d] = r({}, i[d]), c[d] = r({}, c[d]), n[d] = {
										key: n[d].key,
										data: n[d].data,
										style: r({}, n[d].style)
									}), o[d][m] = p, a[d][m] = 0, i[d][m] = p, c[d][m] = 0, n[d].style[m] = p)
								}
						}
						s.setState({
							currentStyles: o,
							currentVelocities: a,
							mergedPropsStyles: n,
							lastIdealStyles: i,
							lastIdealVelocities: c
						})
					}, this.startAnimationIfNecessary = function() {
						s.unmounting || (s.animationID = u.default((function(e) {
							if (!s.unmounting) {
								var t = s.props.styles,
									n = "function" == typeof t ? t(h(s.state.mergedPropsStyles, s.unreadPropStyles, s.state.lastIdealStyles)) : t;
								if (function(e, t, n, r) {
										if (r.length !== t.length) return !1;
										for (var s = 0; s < r.length; s++)
											if (r[s].key !== t[s].key) return !1;
										for (s = 0; s < r.length; s++)
											if (!m.default(e[s], t[s].style, n[s])) return !1;
										return !0
									}(s.state.currentStyles, n, s.state.currentVelocities, s.state.mergedPropsStyles)) return s.animationID = null, void(s.accumulatedTime = 0);
								var r = e || l.default(),
									o = r - s.prevTime;
								if (s.prevTime = r, s.accumulatedTime = s.accumulatedTime + o, s.accumulatedTime > 10 * f && (s.accumulatedTime = 0), 0 === s.accumulatedTime) return s.animationID = null, void s.startAnimationIfNecessary();
								for (var a = (s.accumulatedTime - Math.floor(s.accumulatedTime / f) * f) / f, i = Math.floor(s.accumulatedTime / f), d = y(s.props.willEnter, s.props.willLeave, s.props.didLeave, s.state.mergedPropsStyles, n, s.state.currentStyles, s.state.currentVelocities, s.state.lastIdealStyles, s.state.lastIdealVelocities), u = d[0], p = d[1], b = d[2], g = d[3], v = d[4], _ = 0; _ < u.length; _++) {
									var x = u[_].style,
										O = {},
										j = {},
										E = {},
										S = {};
									for (var I in x)
										if (Object.prototype.hasOwnProperty.call(x, I)) {
											var P = x[I];
											if ("number" == typeof P) O[I] = P, j[I] = 0, E[I] = P, S[I] = 0;
											else {
												for (var C = g[_][I], T = v[_][I], k = 0; k < i; k++) {
													var w = c.default(f / 1e3, C, T, P.val, P.stiffness, P.damping, P.precision);
													C = w[0], T = w[1]
												}
												var N = c.default(f / 1e3, C, T, P.val, P.stiffness, P.damping, P.precision),
													A = N[0],
													L = N[1];
												O[I] = C + (A - C) * a, j[I] = T + (L - T) * a, E[I] = C, S[I] = T
											}
										} g[_] = E, v[_] = S, p[_] = O, b[_] = j
								}
								s.animationID = null, s.accumulatedTime -= i * f, s.setState({
									currentStyles: p,
									currentVelocities: b,
									lastIdealStyles: g,
									lastIdealVelocities: v,
									mergedPropsStyles: u
								}), s.unreadPropStyles = null, s.startAnimationIfNecessary()
							}
						})))
					}, this.state = this.defaultState()
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
				}(t, e), s(t, null, [{
					key: "propTypes",
					value: {
						defaultStyles: b.default.arrayOf(b.default.shape({
							key: b.default.string.isRequired,
							data: b.default.any,
							style: b.default.objectOf(b.default.number).isRequired
						})),
						styles: b.default.oneOfType([b.default.func, b.default.arrayOf(b.default.shape({
							key: b.default.string.isRequired,
							data: b.default.any,
							style: b.default.objectOf(b.default.oneOfType([b.default.number, b.default.object])).isRequired
						}))]).isRequired,
						children: b.default.func.isRequired,
						willEnter: b.default.func,
						willLeave: b.default.func,
						didLeave: b.default.func
					},
					enumerable: !0
				}, {
					key: "defaultProps",
					value: {
						willEnter: function(e) {
							return i.default(e.style)
						},
						willLeave: function() {
							return null
						},
						didLeave: function() {}
					},
					enumerable: !0
				}]), t.prototype.defaultState = function() {
					var e = this.props,
						t = e.defaultStyles,
						n = e.styles,
						r = e.willEnter,
						s = e.willLeave,
						o = e.didLeave,
						c = "function" == typeof n ? n(t) : n,
						d = void 0;
					d = null == t ? c : t.map((function(e) {
						for (var t = 0; t < c.length; t++)
							if (c[t].key === e.key) return c[t];
						return e
					}));
					var l = null == t ? c.map((function(e) {
							return i.default(e.style)
						})) : t.map((function(e) {
							return i.default(e.style)
						})),
						u = null == t ? c.map((function(e) {
							return a.default(e.style)
						})) : t.map((function(e) {
							return a.default(e.style)
						})),
						m = y(r, s, o, d, c, l, u, l, u),
						p = m[0];
					return {
						currentStyles: m[1],
						currentVelocities: m[2],
						lastIdealStyles: m[3],
						lastIdealVelocities: m[4],
						mergedPropsStyles: p
					}
				}, t.prototype.componentDidMount = function() {
					this.prevTime = l.default(), this.startAnimationIfNecessary()
				}, t.prototype.componentWillReceiveProps = function(e) {
					this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles);
					var t = e.styles;
					this.unreadPropStyles = "function" == typeof t ? t(h(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles)) : t, null == this.animationID && (this.prevTime = l.default(), this.startAnimationIfNecessary())
				}, t.prototype.componentWillUnmount = function() {
					this.unmounting = !0, null != this.animationID && (u.default.cancel(this.animationID), this.animationID = null)
				}, t.prototype.render = function() {
					var e = h(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles),
						t = this.props.children(e);
					return t && p.default.Children.only(t)
				}, t
			}(p.default.Component);
			t.default = g, e.exports = t.default
		},
		"./node_modules/react-motion/lib/mapToZero.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0, t.default = function(e) {
				var t = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = 0);
				return t
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/mergeDiff.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, n) {
				for (var r = {}, s = 0; s < e.length; s++) r[e[s].key] = s;
				var o = {};
				for (s = 0; s < t.length; s++) o[t[s].key] = s;
				var a = [];
				for (s = 0; s < t.length; s++) a[s] = t[s];
				for (s = 0; s < e.length; s++)
					if (!Object.prototype.hasOwnProperty.call(o, e[s].key)) {
						var i = n(s, e[s]);
						null != i && a.push(i)
					} return a.sort((function(e, n) {
					var s = o[e.key],
						a = o[n.key],
						i = r[e.key],
						c = r[n.key];
					if (null != s && null != a) return o[e.key] - o[n.key];
					if (null != i && null != c) return r[e.key] - r[n.key];
					if (null != s) {
						for (var d = 0; d < t.length; d++) {
							var l = t[d].key;
							if (Object.prototype.hasOwnProperty.call(r, l)) {
								if (s < o[l] && c > r[l]) return -1;
								if (s > o[l] && c < r[l]) return 1
							}
						}
						return 1
					}
					for (d = 0; d < t.length; d++) {
						l = t[d].key;
						if (Object.prototype.hasOwnProperty.call(r, l)) {
							if (a < o[l] && i > r[l]) return 1;
							if (a > o[l] && i < r[l]) return -1
						}
					}
					return -1
				}))
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/presets.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0, t.default = {
				noWobble: {
					stiffness: 170,
					damping: 26
				},
				gentle: {
					stiffness: 120,
					damping: 14
				},
				wobbly: {
					stiffness: 180,
					damping: 12
				},
				stiff: {
					stiffness: 210,
					damping: 20
				}
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/react-motion.js": function(e, t, n) {
			"use strict";

			function r(e) {
				return e && e.__esModule ? e.default : e
			}
			t.__esModule = !0;
			var s = n("./node_modules/react-motion/lib/Motion.js");
			t.Motion = r(s);
			var o = n("./node_modules/react-motion/lib/StaggeredMotion.js");
			t.StaggeredMotion = r(o);
			var a = n("./node_modules/react-motion/lib/TransitionMotion.js");
			t.TransitionMotion = r(a);
			var i = n("./node_modules/react-motion/lib/spring.js");
			t.spring = r(i);
			var c = n("./node_modules/react-motion/lib/presets.js");
			t.presets = r(c);
			var d = n("./node_modules/react-motion/lib/stripStyle.js");
			t.stripStyle = r(d);
			var l = n("./node_modules/react-motion/lib/reorderKeys.js");
			t.reorderKeys = r(l)
		},
		"./node_modules/react-motion/lib/reorderKeys.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0, t.default = function() {
				0
			};
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/shouldStopAnimation.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, n) {
				for (var r in t)
					if (Object.prototype.hasOwnProperty.call(t, r)) {
						if (0 !== n[r]) return !1;
						var s = "number" == typeof t[r] ? t[r] : t[r].val;
						if (e[r] !== s) return !1
					} return !0
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/spring.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0;
			var r = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
				return e
			};
			t.default = function(e, t) {
				return r({}, i, t, {
					val: e
				})
			};
			var s, o = n("./node_modules/react-motion/lib/presets.js"),
				a = (s = o) && s.__esModule ? s : {
					default: s
				},
				i = r({}, a.default.noWobble, {
					precision: .01
				});
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stepper.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, n, s, o, a, i) {
				var c = n + (-o * (t - s) + -a * n) * e,
					d = t + c * e;
				if (Math.abs(c) < i && Math.abs(d - s) < i) return r[0] = s, r[1] = 0, r;
				return r[0] = d, r[1] = c, r
			};
			var r = [0, 0];
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stripStyle.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0, t.default = function(e) {
				var t = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = "number" == typeof e[n] ? e[n] : e[n].val);
				return t
			}, e.exports = t.default
		},
		"./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js": function(e, t, n) {
			(function(t) {
				(function() {
					var n, r, s;
					"undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
						return performance.now()
					} : null != t && t.hrtime ? (e.exports = function() {
						return (n() - s) / 1e6
					}, r = t.hrtime, s = (n = function() {
						var e;
						return 1e9 * (e = r())[0] + e[1]
					})()) : Date.now ? (e.exports = function() {
						return Date.now() - s
					}, s = Date.now()) : (e.exports = function() {
						return (new Date).getTime() - s
					}, s = (new Date).getTime())
				}).call(this)
			}).call(this, n("./node_modules/process/browser.js"))
		},
		"./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}

			function o() {}
			o.resetWarningCache = s, e.exports = function() {
				function e(e, t, n, s, o, a) {
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
					checkPropTypes: o,
					resetWarningCache: s
				};
				return n.PropTypes = n, n
			}
		},
		"./node_modules/react-motion/node_modules/prop-types/index.js": function(e, t, n) {
			e.exports = n("./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, n) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/react-router-dom/esm/react-router-dom.js": function(e, t, n) {
			"use strict";

			function r(e, t) {
				e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
			}
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-router/esm/react-router.js"),
				i = n("./node_modules/history/esm/history.js");
			n("./node_modules/react-router-dom/node_modules/prop-types/index.js");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				if (null == e) return {};
				var n, r, s = {},
					o = Object.keys(e);
				for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (s[n] = e[n]);
				return s
			}
			var l = n("./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
			o.a.Component;
			o.a.Component;
			var u = function(e) {
				function t() {
					return e.apply(this, arguments) || this
				}
				r(t, e);
				var n = t.prototype;
				return n.handleClick = function(e, t) {
					try {
						this.props.onClick && this.props.onClick(e)
					} catch (n) {
						throw e.preventDefault(), n
					}
					e.defaultPrevented || 0 !== e.button || this.props.target && "_self" !== this.props.target || function(e) {
						return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
					}(e) || (e.preventDefault(), (this.props.replace ? t.replace : t.push)(this.props.to))
				}, n.render = function() {
					var e = this,
						t = this.props,
						n = t.innerRef,
						r = (t.replace, t.to),
						s = d(t, ["innerRef", "replace", "to"]);
					return o.a.createElement(a.g.Consumer, null, (function(t) {
						t || Object(l.default)(!1);
						var a = "string" == typeof r ? Object(i.c)(r, null, null, t.location) : r,
							d = a ? t.history.createHref(a) : "";
						return o.a.createElement("a", c({}, s, {
							onClick: function(n) {
								return e.handleClick(n, t.history)
							},
							href: d,
							ref: n
						}))
					}))
				}, t
			}(o.a.Component)
		},
		"./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}

			function o() {}
			o.resetWarningCache = s, e.exports = function() {
				function e(e, t, n, s, o, a) {
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
					checkPropTypes: o,
					resetWarningCache: s
				};
				return n.PropTypes = n, n
			}
		},
		"./node_modules/react-router-dom/node_modules/prop-types/index.js": function(e, t, n) {
			e.exports = n("./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, n) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./src/graphql/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"84f02d14f38a"}')
		},
		"./src/lib/LinkedListMap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			class r {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class s {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const n = new s(t);
					return e.forEach(e => n.push(e)), n
				}
				first() {
					if (this.tail) return this.tail.value
				}
				firstNode() {
					if (this.tail) return this.tail
				}
				forEach(e) {
					let t = this.tail;
					for (; t;) e(t.value), t = t.next
				}
				get(e) {
					const t = this.getNode(e);
					if (t) return t.value
				}
				getNode(e) {
					return this.itemsByKey[e]
				}
				has(e) {
					return e in this.itemsByKey
				}
				insertAfter(e, t) {
					const n = t instanceof r ? t : new r(t),
						s = this.getNode(e);
					if (!s) throw new Error(`Cannot find item with key ${e}`);
					n.prev = s, n.next = s.next, s.next = n, n.next && (n.next.prev = n);
					const o = t instanceof r ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = n, this.length++
				}
				insertBefore(e, t) {
					const n = t instanceof r ? t : new r(t),
						s = this.getNode(e);
					if (!s) throw new Error(`Cannot find item with key ${e}`);
					n.next = s, n.prev = s.prev, s.prev = n, n.prev && (n.prev.next = n);
					const o = t instanceof r ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = n, this.length++
				}
				last() {
					if (this.head) return this.head.value
				}
				lastNode() {
					if (this.head) return this.head
				}
				pop() {
					if (!this.head) return;
					return this.removeNode(this.head).value
				}
				push(e) {
					const t = e instanceof r ? e : new r(e);
					t.prev = this.head, this.head ? this.head.next = t : this.tail = t, this.head = t;
					const n = e instanceof r ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
				}
				remove(e) {
					const t = this.getNode(e);
					if (t) return this.removeNode(t).value
				}
				removeNode(e) {
					return e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e === this.tail && (this.tail = e.next), e === this.head && (this.head = e.prev), e.next = void 0, e.prev = void 0, this.itemsByKey[e.value[this.key]] = void 0, this.length--, e
				}
				shift() {
					if (!this.tail) return;
					return this.removeNode(this.tail).value
				}
				toArray() {
					const e = [];
					return this.forEach(t => e.push(t)), e
				}
				unshift(e) {
					const t = e instanceof r ? e : new r(e);
					t.next = this.tail, this.tail ? this.tail.prev = t : this.head = t, this.tail = t;
					const n = e instanceof r ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
				}
			}
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, n) {
			"use strict";
			t.a = (...e) => t => {
				e.forEach(e => {
					if (e) return "function" == typeof e ? e(t) : void(e.current = t)
				})
			}
		},
		"./src/lib/doubleclickForPublishers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "f", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/isFakeSubreddit/index.ts"),
				a = n("./src/lib/fastdom/index.ts");
			const i = new Map,
				c = (e, t) => {
					const n = [r.a.dfpSlotPrefix];
					return t !== s.Db.PROFILE && (Object(o.a)(e) ? n.push("frontpage") : n.push(`r.${e}`)), t === s.Db.INDEX ? n.push(s.Db.LISTING) : t && n.push(t), n.join("/")
				},
				d = (e, t) => {
					e.setTargeting("keywords", t.keywords);
					for (const n in t.properties) e.setTargeting(n, t.properties[n])
				},
				l = (e, t) => {
					p(e);
					const {
						id: n,
						slot: r,
						sizes: s
					} = t, o = window.googletag = window.googletag || {};
					return o.cmd = o.cmd || [], new Promise(c => {
						o.cmd.push(() => {
							a.a.write(() => {
								const a = o.defineSlot(r, s, n);
								if (!a) return c();
								a.addService(o.pubads()), i.set(e, a), a.setCollapseEmptyDiv(!0), d(a, t), o.display(n), c()
							})
						})
					})
				},
				u = (e, t) => {
					const n = i.get(e);
					if (!n) return;
					const r = window.googletag = window.googletag || {};
					r.cmd = r.cmd || [], r.cmd.push(() => {
						Object.keys(t).forEach(e => n.setTargeting(e, t[e]))
					})
				},
				m = (e, t) => {
					const n = i.get(e);
					if (!n) return;
					d(n, t);
					const r = window.googletag = window.googletag || {};
					r.cmd = r.cmd || [], window.aax && window.aax.cmd.push(() => {
						window.aax.getAbpStatus && window.aax.getAbpStatus() && r.cmd.push(() => {
							r.pubads().refresh([n])
						})
					}), window.apstag.fetchBids({
						slots: [{
							slotID: t.id,
							slotName: [t.slot, t.id].join("/"),
							sizes: t.sizes
						}],
						timeout: 2e3
					}, () => {
						r.cmd.push(() => {
							window.apstag.setDisplayBids(), r.pubads().refresh([n])
						})
					})
				},
				p = e => {
					const t = i.get(e);
					if (!t) return;
					const n = window.googletag = window.googletag || {};
					n.cmd = n.cmd || [], n.cmd.push(() => {
						a.a.write(() => {
							n.destroySlots([t]), i.delete(e)
						})
					})
				},
				b = e => {
					const t = () => {
						const t = document.createElement("script");
						t.src = e, t.async = !0;
						const n = document.getElementsByTagName("script")[0];
						n && n.parentNode && n.parentNode.insertBefore(t, n)
					};
					if (document.head && (() => {
							const {
								relList: e
							} = document.createElement("link");
							if (!e || !e.supports) return !1;
							try {
								return e.supports("preload")
							} catch (t) {
								return !1
							}
						})()) {
						const n = document.createElement("link");
						n.href = e, n.rel = "preload", n.as = "script", n.onload = t, document.head.insertBefore(n, document.head.firstChild)
					} else t()
				},
				f = e => {
					const t = window.googletag = window.googletag || {};
					t.cmd = t.cmd || [], b("//www.googletagservices.com/tag/js/gpt.js"), t.cmd.push(() => {
						t.pubads().addEventListener("slotRequested", e.onRequest), t.pubads().addEventListener("impressionViewable", t => e.onAdView(t, !1)), t.pubads().disableInitialLoad(), t.enableServices()
					}), window.apstag || (window.apstag = {
						_Q: []
					}, window.apstag.init = (...e) => {
						window.apstag._Q.push(["i", e])
					}, window.apstag.fetchBids = (...e) => {
						window.apstag._Q.push(["f", e])
					}, b("//c.amazon-adsystem.com/aax2/apstag.js"), window.apstag.init({
						pubID: "3379",
						adServer: "googletag",
						bidTimeout: 2e3,
						params: {
							aps_privacy: e.limitDataProcessing ? "1YY" : "1--"
						}
					})), window.aax || (window.aax = {
						pubId: "AAX763KC6",
						ver: 1.2,
						initTime: (new Date).getTime(),
						hst: location.hostname,
						deliverExchangeDemand: () => {},
						cmd: [() => window.aax.addEventListener("impressionViewable", t => e.onAdView(t, !0))],
						execute: [() => window.aax.limitDataProcessing(e.limitDataProcessing)]
					}, b(`//c.aaxads.com/aax.js?pub=${window.aax.pubId}&hst=${window.aax.hst}&ver=${window.aax.ver}`))
				}
		},
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/makeCommentPermalink/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/redditId/index.ts");
			t.a = (e, t) => {
				let n = e;
				return "/" !== n.substr(-1) && (n += "/"), n += Object(r.c)(t)
			}
		},
		"./src/lib/makePostDraftPageKey/index.ts": function(e, t, n) {
			"use strict";

			function r(e) {
				let t = "PostDraftPage";
				return e.draftId && (t += `--[draftId:${e.draftId}]`), t
			}
			n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/actions/embedAndImage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "EMBEDS__UNLOADABLE",
				o = "EMBEDS__LOADABLE",
				a = Object(r.a)(s),
				i = Object(r.a)(o)
		},
		"./src/reddit/actions/jsApi.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./src/lib/makeActionCreator/index.ts");
			const s = "JSAPI__CONSUMER_SUBSCRIBED",
				o = Object(r.a)(s)
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "l", (function() {
				return D
			})), n.d(t, "k", (function() {
				return R
			})), n.d(t, "j", (function() {
				return B
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "i", (function() {
				return F
			})), n.d(t, "h", (function() {
				return U
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/post.ts"),
				a = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/flair/index.ts"),
				d = n("./src/reddit/helpers/flair.ts"),
				l = n("./src/reddit/models/Flair/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/postFlair.ts"),
				p = n("./src/reddit/selectors/subreddit.ts");
			const b = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				f = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				h = Object(s.a)(b),
				y = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				g = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				v = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				_ = Object(s.a)(g),
				x = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				O = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				j = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				E = Object(s.a)(O),
				S = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				I = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				P = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				C = Object(s.a)(I),
				T = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				k = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				w = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				N = Object(s.a)(k),
				A = Object(s.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				L = Object(s.a)(w),
				D = (e, t) => async (n, r, {
					apiContext: s
				}) => {
					const o = r(),
						a = Object(p.T)(o, {
							subredditId: e
						}).name;
					n(f());
					const i = await Object(c.k)(s(), a, t);
					if (i.ok) {
						n(h({
							subredditId: e,
							isEnabled: t
						}))
					} else n(y());
					return i.ok
				}, R = (e, t) => async (n, r, {
					apiContext: s
				}) => {
					const o = r(),
						a = Object(p.T)(o, {
							subredditId: e
						}).name;
					n(v());
					const i = await Object(c.j)(s(), t, l.d.LinkFlair, a);
					if (i.ok) {
						n(_({
							subredditId: e,
							canAssignOwn: t
						}))
					} else n(x());
					return i.ok
				}, B = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const d = s(),
						m = Object(p.T)(d, {
							subredditId: t
						}).name;
					n(j());
					const b = await Object(c.f)(o(), e, m, l.d.LinkFlair);
					let f = b.ok && !(b.body && !1 === b.body.success);
					if (f) {
						const r = b.body;
						if (n(E({
								subredditId: t,
								template: r
							})), r.id) {
							const s = e.styleTemplate,
								o = d.structuredStyles.flairTemplate.models[r.id];
							s ? f = await n(Object(a.d)(t, r.id, s)) : o && (f = await n(Object(a.c)(t, r.id)))
						}
					}
					if (f) {
						const e = Object(i.d)(r.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), u.b.SuccessMod);
						n(Object(i.e)(e))
					} else {
						n(S());
						const s = Object(i.d)(r.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), B(e, t));
						n(Object(i.e)(s))
					}
					return f
				}, M = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const a = s(),
						d = Object(p.T)(a, {
							subredditId: t
						}).name;
					if (n(P()), (await Object(c.b)(o(), e, d)).ok) {
						n(C({
							subredditId: t,
							templateId: e
						}));
						const s = Object(i.d)(r.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), u.b.SuccessMod);
						n(Object(i.e)(s))
					} else {
						n(T());
						const s = Object(i.d)(r.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(e, t));
						n(Object(i.e)(s))
					}
				}, F = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const a = s(),
						d = Object(m.d)(a, {
							subredditId: t
						}).templateIds,
						b = Object(p.T)(a, {
							subredditId: t
						}).name;
					if (n(N({
							subredditId: t,
							templateIds: e
						})), (await Object(c.e)(o(), b, l.d.LinkFlair, e)).ok) {
						n(A());
						const e = Object(i.d)(r.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), u.b.SuccessMod);
						n(Object(i.e)(e))
					} else {
						n(L({
							subredditId: t,
							templateIds: d
						}));
						const s = Object(i.d)(r.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), u.b.Error, r.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), F(e, t));
						n(Object(i.e)(s))
					}
				}, U = ({
					post: e,
					previewFlair: t,
					selectedTemplateId: n
				}) => async (r, s, {
					apiContext: a
				}) => {
					const i = e.flair.filter(e => !Object(d.p)(e.type));
					if (t && i.unshift(t), r(Object(o.L)({
							[e.id]: {
								flair: i
							}
						})), t) {
						const r = Object(d.g)(t);
						Object(c.h)(a(), e.id, n, r)
					} else Object(c.h)(a(), e.id, "", "")
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "c", (function() {
				return I
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/forEach.js"),
				s = n.n(r),
				o = n("./node_modules/lodash/isEqual.js"),
				a = n.n(o),
				i = n("./node_modules/lodash/values.js"),
				c = n.n(i),
				d = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/imageUploads.ts"),
				u = n("./src/reddit/helpers/media/index.ts"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts");
			var h = n("./src/reddit/helpers/trackers/blade.ts"),
				y = n("./src/reddit/models/Image/index.tsx"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/telemetry/index.ts");
			const _ = ({
				subredditId: e,
				flairId: t,
				imageKey: n,
				imageData: r
			}) => async (s, o, a) => {
				const i = o(),
					c = Object(g.T)(i, {
						subredditId: e
					});
				if (!c) return !1;
				s(Object(l.k)(r));
				const d = await (async (e, t, n, r, s, o) => Object(p.a)(Object(b.a)(e, [f.a]), {
					endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${n}`,
					method: m.cb.POST,
					data: {
						filepath: r,
						imagetype: s,
						mimetype: o
					}
				}))(a.apiContext(), c.name, t, r.file.name, n, await Object(u.g)(r.file));
				let h = !1;
				try {
					const e = await Object(l.g)(o(), d, r, y.a.FlairTemplates);
					e && s(Object(l.j)(e)), h = !0
				} catch (v) {
					if (v instanceof Error) throw v;
					s(Object(l.i)(v))
				}
				return h
			}, x = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", O = Object(d.a)(x), j = (e, t, n) => async (r, o, i) => {
				const {
					apiContext: d
				} = i;
				let u = o();
				const {
					pendingImages: x,
					...j
				} = n;
				let E = j;
				const S = Object(g.T)(u, {
					subredditId: e
				});
				if (!S) return !1;
				const I = u.structuredStyles.flairTemplate.models[t];
				if (I && a()(I, E)) return !0;
				if (x) {
					const n = [];
					if (s()(x, (s, o) => {
							s && n.push(r(_({
								flairId: t,
								imageData: Object(y.m)(s),
								imageKey: o,
								subredditId: e
							})))
						}), !(await Promise.all(n)).every(e => e)) return !1;
					E = ((e, t, n) => {
						const r = {
							...e
						};
						return s()(t, (e, t) => {
							const s = e && n.imageUploads[e.id];
							s && s.kind === y.b.TempUploaded && (r[t] = s.url)
						}), r
					})(E, x, o())
				}
				u = o();
				let P = null,
					C = null;
				const T = [];
				try {
					(P = await Object(l.f)(u, y.a.FlairTemplates)) && (C = Object(l.m)(P)(r, o, i), T.push(...c()(P.imagesByKey)))
				} catch (A) {
					return !1
				}
				const k = await (async (e, t, n, r) => Object(p.a)(Object(b.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
						method: m.cb.PUT,
						data: r
					}))(d(), S.name, t, E),
					w = I ? "edit_post_flair_template" : "save_post_flair_template",
					N = Object(h.e)(u, w);
				if (k.ok) {
					let e;
					if (C) try {
						await C, e = ((e, t, n) => {
							const r = {
								...e
							};
							return t.forEach(e => {
								const t = n.imageUploads[e.id];
								t && t.kind === y.b.Uploaded && (e.url === r.postBackgroundImage ? r.postBackgroundImage = t.url : e.url === r.postPlaceholderImage && (r.postPlaceholderImage = t.url))
							}), r
						})(E, T, o())
					} catch (A) {
						e = null
					} else e = E;
					r(O({
						flairId: t,
						template: e || E
					}))
				} else P && P.websocket.close();
				return Object(v.a)({
					...N,
					actionInfo: {
						...N.actionInfo,
						success: k.ok
					}
				}), k.ok
			}, E = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", S = Object(d.a)(E), I = (e, t) => async (n, r, {
				apiContext: s
			}) => {
				const o = r(),
					a = Object(g.T)(o, {
						subredditId: e
					});
				if (!a) return !1;
				const i = await (async (e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
						method: m.cb.DELETE
					}))(s(), a.name, t),
					c = Object(h.e)(o, "delete_flair_template");
				return i.ok && n(S({
					flairId: t
				})), Object(v.a)({
					...c,
					actionInfo: {
						...c.actionInfo,
						success: i.ok
					}
				}), i.ok
			}
		},
		"./src/reddit/actions/postList.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = (n("./src/reddit/actions/embedAndImage.ts"), n("./src/reddit/actions/video.ts"), n("./src/reddit/helpers/trackers/postList.ts"));
			n("./src/reddit/constants/postLayout.ts"), n("./src/reddit/selectors/platform.ts"), n("./src/reddit/selectors/posts.ts");
			n("./src/reddit/selectors/video.ts");
			const o = "POSTLIST__MARKED_END",
				a = "POSTLIST__UNMARKED_END",
				i = Object(r.a)(o),
				c = Object(r.a)(a),
				d = (e, t) => async (n, r) => {
					const o = r();
					e in o.listings.postOrder.fetchedTokens ? e in o.listings.postOrder.ids ? n(c({
						listingKey: e
					})) : s.j(o, e) : n(i({
						listingKey: e,
						listingName: t
					}))
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "h", (function() {
				return a
			})), n.d(t, "i", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			}));
			const r = "SUBSCRIPTION__FETCH_DATA_PENDING",
				s = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				o = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				a = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				i = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				c = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return A
			})), n.d(t, "d", (function() {
				return D
			})), n.d(t, "c", (function() {
				return B
			})), n.d(t, "a", (function() {
				return F
			})), n.d(t, "b", (function() {
				return W
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/linkMatchers/customLinks.ts"),
				i = n("./src/reddit/actions/login.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/subscription/constants.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/posts.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				b = n("./src/reddit/constants/headers.ts");
			var f = n("./src/graphql/operations/SubscribedSubreddits.json"),
				h = n("./src/lib/makeGqlRequest/index.ts"),
				y = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var g = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				v = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				_ = n("./src/reddit/models/GqlTopLevelField.ts"),
				x = n("./src/reddit/models/User/index.ts");

			function O(e) {
				const t = [],
					n = [],
					r = {},
					s = {},
					{
						followedRedditorsInfo: o
					} = e.identity;
				for (const i of o.edges) {
					if (i.node.__typename !== x.c.AvailableRedditor) continue;
					const e = Object(g.a)(i.node.profile);
					r[e.id] = e;
					const {
						isFavorite: n
					} = i.node.profile;
					n && t.push(e.id)
				}
				const {
					subscribedSubreddits: a
				} = e.identity;
				for (const i of a.edges) {
					if (i.node.__typename !== _.a.Subreddit) continue;
					const e = Object(v.a)(i.node);
					s[e.id] = e;
					const {
						isFavorite: t
					} = i.node;
					t && n.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: n,
					profiles: r,
					subreddits: s
				}
			}
			var j = n("./src/reddit/models/Toast/index.ts"),
				E = n("./src/reddit/selectors/profile.ts"),
				S = n("./src/reddit/selectors/subreddit.ts"),
				I = n("./src/reddit/selectors/subscriptions.ts"),
				P = n("./src/reddit/selectors/user.ts");
			const C = () => r.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				T = Object(o.a)(d.c),
				k = Object(o.a)(d.b),
				w = Object(o.a)(d.a),
				N = Object(o.a)(d.h),
				A = (Object(o.a)(d.i), Object(o.a)(d.g), () => async (e, t, {
					gqlContext: n
				}) => {
					const r = t();
					if (!r.user.account || r.subscriptions.api.fetched) return;
					e(k());
					const s = await (e => Object(h.a)(e, f))(n());
					if (s.ok) {
						const t = O(s.body.data);
						e(T(t))
					} else e(w({
						error: s.error
					}))
				}),
				L = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				D = (e, t, n) => async (o, d, {
					apiContext: f
				}) => {
					let h = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(S.F)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(E.m)(d(), e.name),
						name: `${s.Wb}${e.name}`,
						type: e.type
					});
					if (!Object(P.K)(d())) return o(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void o(Object(i.j)());
					const g = Object(P.j)(d());
					if (g) {
						const t = h.length,
							n = e.length;
						if (h = h.filter(e => !L(g, e)), (e = e.filter(e => !L(g, e))).length !== n || h.length !== t) {
							const e = r.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(l.e)(Object(l.d)(e, j.b.Error)))
						}
						if (!e.length && !h.length) return
					}
					if (o(N({
							identifiers: h,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(I.b)(d()),
							userIsSubscriber: t,
							widgetId: n
						})), (await ((e, {
							subredditIds: t,
							subredditNames: n,
							subscribe: r
						}) => Object(m.a)(Object(p.a)(e, [b.a]), {
							method: s.cb.POST,
							endpoint: Object(y.a)(`${e.apiUrl}/api/subscribe`),
							data: {
								action: r ? "sub" : "unsub",
								sr: t && t.join(",") || void 0,
								sr_name: n && n.join(",") || void 0,
								api_type: "json"
							}
						}))(f(), {
							subredditNames: h.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						const n = 1 === e.length ? `${"subreddit"===e[0].type?a.d.subreddit:a.d.profile}${e[0].name}` : `${r.fbt.plural("community",e.length,{many:"communities",name:"communities",showCount:"yes"})}`;
						o(Object(l.e)({
							text: 1 === e.length && "profile" === e[0].type ? r.fbt._("Sucсessfully {verb} {communityname}", [r.fbt._param("verb", t ? "followed" : "unfollowed"), r.fbt._param("communityname", n)], {
								hk: "1hY5KX"
							}) : r.fbt._("Sucсessfully {verb} {communityname}", [r.fbt._param("verb", t ? "joined" : "left"), r.fbt._param("communityname", n)], {
								hk: "1hY5KX"
							})
						}))
					} else {
						o(N({
							identifiers: h,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(I.b)(d()),
							userIsSubscriber: !t,
							widgetId: n
						}));
						const s = r.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(l.e)(Object(l.d)(s, j.b.Error)))
					}
				}, R = Object(o.a)(d.f), B = e => async (t, n, {
					apiContext: r
				}) => {
					const o = n(),
						a = Object(S.L)(o, {
							identifier: e
						});
					if (!a) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const i = e.type === u.a.SUBREDDIT ? a.name : `u_${a.name}`,
						c = o.subscriptions.favoriteSubredditOrder || [],
						d = o.subscriptions.favoriteProfileOrder || [],
						f = c.indexOf(e.id),
						h = d.indexOf(e.id),
						y = -1 === f && -1 === h,
						g = o.subreddits.models,
						v = o.profiles.models;
					t(R({
						makeFavorite: y,
						identifier: e,
						subredditModels: g,
						profileModels: v
					}));
					const _ = {
							type: e.type,
							name: a.name
						},
						x = () => Object(S.gb)(n(), {
							identifier: _
						});
					(x() || (await t(D([_], !0)), x())) && ((await ((e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: s.cb.POST,
						endpoint: `${e.apiUrl}/api/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							sr_name: t,
							api_type: "json"
						}
					}))(r(), i, y)).ok || (t(R({
						makeFavorite: !y,
						identifier: e,
						subredditModels: g,
						profileModels: v
					})), t(Object(l.e)({
						text: C(),
						kind: j.b.Error
					}))))
				}, M = Object(o.a)(d.d), F = e => async (t, n, {
					apiContext: r
				}) => {
					const o = n().multireddits.models,
						a = () => {
							t(Object(l.e)({
								text: C(),
								kind: j.b.Error
							}))
						},
						i = o[e];
					if (!i) return void a();
					const c = !i.isFavorited;
					t(M({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: s.cb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(r(), e, c)).ok || (t(M({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), a())
				}, U = Object(o.a)(d.e), W = e => async (t, n, {
					apiContext: o
				}) => {
					const a = n(),
						i = a.multireddits.models;
					if (!Object(P.K)(a)) return;
					const c = (e = !0) => {
							t(Object(l.e)({
								text: r.fbt._("Sorry, failed to {followAction}", [r.fbt._param("followAction", e ? r.fbt._("follow", null, {
									hk: "2I4uia"
								}) : r.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: j.b.Error
							}))
						},
						d = i[e];
					if (!d) return void c();
					const u = !d.isFollowed;
					t(U({
						follow: u,
						multiredditPath: e,
						multiredditsModelsState: i
					})), (await ((e, t, n) => Object(m.a)(Object(p.a)(e, [b.a]), {
						method: s.cb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: n ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(o(), e, u)).ok || (t(U({
						follow: !u,
						multiredditPath: e,
						multiredditsModelsState: i
					})), c(u))
				}
		},
		"./src/reddit/components/AwardedListingBanner/index.m.less": function(e, t, n) {
			e.exports = {
				container: "Euf0eewj0MUfCAneI6fj_",
				title: "_3ugv2ujLUVD37KHjuncuRT",
				close: "_3JAHw6m54Wrjm0rnX7GgRZ",
				dismissedContainer: "_1HciFW1Gf3BHBs0dEvE_tk",
				dismissedText: "_1cXKsx4apv5X14RmNQ0794",
				iconCarouselWrapper: "_2BnXKMLxfFWoe-pZcfIiIm",
				awardIcon: "_34m3e-Z2OR_TEdYH0Ih7O6",
				linearAnimation: "_4HAlQmVogiasYQ9srm4z4",
				iconCarouselInnerWrapper0: "_2fP0vb7wP0Afwdaw6cwZpG",
				slide0: "_3GqXepZa1qvL1X0wE8N0e2",
				iconCarouselInnerWrapper1: "_2O70Ew5pvoBSnOqL4T5EGx",
				slide1: "Fo2rMgLePrq248kivE__Q",
				scale: "_1IMFuS4ukJn7lP178Rtiqd",
				fadeInALittle: "_2KMwT7J3kyGA-____-iftE",
				fadeInTheRest: "_2BxmXNxZx082mr62D3k1LQ"
			}
		},
		"./src/reddit/components/AwardedListingBanner/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/banners.ts"),
				i = n("./src/reddit/constants/page.ts"),
				c = n("./src/reddit/helpers/localStorage/index.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				u = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/react-redux/es/index.js")),
				m = n("./node_modules/reselect/es/index.js"),
				p = n("./node_modules/lodash/sampleSize.js"),
				b = n.n(p),
				f = n("./src/reddit/models/Gold/Award.ts"),
				h = n("./src/reddit/components/AwardedListingBanner/index.m.less"),
				y = n.n(h);
			const g = 11,
				v = 1e3,
				_ = 500,
				x = [y.a.iconCarouselInnerWrapper0, y.a.iconCarouselInnerWrapper1];

			function O({
				asset: e
			}) {
				return s.a.createElement("div", {
					className: y.a.awardIcon,
					style: {
						backgroundImage: `url('${e}')`
					}
				})
			}
			const j = Object(m.c)({
				awards: e => e.awards.models
			});
			class E extends r.Component {
				constructor(e) {
					super(e), this.state = {
						animationClass: x[0],
						icons: []
					}
				}
				componentDidMount() {
					this.timerId = setInterval(() => this.updateOrdering(), v + _)
				}
				componentWillUnmount() {
					clearInterval(this.timerId)
				}
				updateOrdering() {
					this.setState(e => {
						const t = [...e.icons];
						return t.unshift(t.pop()), {
							icons: t,
							animationClass: e.animationClass === x[0] ? x[1] : x[0]
						}
					})
				}
				shouldComponentUpdate(e, t) {
					return this.state.animationClass !== t.animationClass
				}
				static getDerivedStateFromProps(e, t) {
					if (t.icons.length) return null;
					const n = Object.values(e.awards).filter(e => {
						return e.awardType === f.f.Global && e.isEnabled && !e.isOptional
					});
					return n.length ? {
						icons: b()(n, g).map(e => {
							var t;
							const n = (null === (t = e.staticIcon64) || void 0 === t ? void 0 : t.url) || e.staticIcon.url;
							return s.a.createElement(O, {
								asset: n,
								key: e.id
							})
						})
					} : null
				}
				render() {
					const {
						animationClass: e,
						icons: t
					} = this.state;
					return s.a.createElement("div", {
						className: y.a.iconCarouselWrapper
					}, s.a.createElement("div", {
						className: e
					}, t))
				}
			}
			var S = Object(u.b)(j)(E);
			const {
				fbt: I
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var P;
			! function(e) {
				e.Dismissed = "dismissed", e.Hidden = "hidden", e.Visible = "visible"
			}(P || (P = {}));
			t.a = e => {
				const {
					className: t
				} = e, n = Object(c.f)(a.a.AWARDED_LISTING_BANNER, i.f), [u, m] = Object(r.useState)(n ? P.Hidden : P.Visible);
				if (u === P.Hidden) return null;
				const p = () => {
					m(P.Visible), Object(c.W)(a.a.AWARDED_LISTING_BANNER, !1, i.f)
				};
				return u === P.Dismissed ? s.a.createElement("div", {
					className: Object(o.a)(y.a.dismissedContainer, t)
				}, s.a.createElement("div", {
					className: y.a.dismissedText
				}, I._("Ok, we won't show you this again.", null, {
					hk: "4z33KK"
				})), s.a.createElement(d.i, {
					onClick: p
				}, I._("undo", null, {
					hk: "1A9z3Y"
				}))) : s.a.createElement("div", {
					className: Object(o.a)(y.a.container, t)
				}, s.a.createElement("h2", {
					className: y.a.title
				}, I._("Explore and react to the top awarded posts on Reddit", null, {
					hk: "3IAtgk"
				})), s.a.createElement(S, null), s.a.createElement(l.a, {
					className: y.a.close,
					onClick: () => {
						m(P.Dismissed), Object(c.W)(a.a.AWARDED_LISTING_BANNER, !0, i.f)
					}
				}))
			}
		},
		"./src/reddit/components/BlankPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "BlankPost", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/components/AdViewability/index.tsx"),
				a = n("./src/reddit/connectors/PostViewable/index.ts"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/contexts/Post/index.tsx");
			const d = Object(a.a)(null),
				l = ({
					className: e,
					post: t
				}) => t.isSponsored ? s.a.createElement(o.a, {
					post: t,
					trackDisplay: !0
				}, s.a.createElement("div", {
					className: Object(i.a)(e, `Blank ${t.id}`)
				})) : null;
			t.default = Object(c.b)(d(l))
		},
		"./src/reddit/components/CreatePostBanner/index.m.less": function(e, t, n) {
			e.exports = {
				titleFontH1: "_1BIJI1DdDH_4emkRdSgYtS",
				titleFontH2: "_23v2sEqtCPdekfIaLfBZp0",
				titleFontH3: "_3IPxgawQfrpK8awcnvf2tu",
				titleFontH4: "ZuN5dJ8fJ4v1pojDMILP0",
				titleFontH5: "_2ztaAHYqZbZbLYMI-lEtHX",
				titleFontH6: "FJTuq_jN8uqei2Q4GA66j",
				metadataFont: "_1cBJStdY8xmiR_5jS9gSeH",
				flairFont: "_1fMm1d_nUYPU1bZGhGW2bC",
				labelsFont: "_2_UCOjEBwHnvHk6zBrjPsR",
				actionFont: "_2yyPZbzMoNrAUtQO_SktBd",
				smallButtonFont: "_2_b2a8o6wkToROG8VNRtMR",
				largeButtonFont: "_3Ls4y5dDOPfsU8368YWswn",
				tabFont: "_2TXH3iCv_qoKnRDI_q5ehB",
				strongTextFont: "_1VYMlogcTatyZdJyEPfw1t",
				buttonFontXS: "BKPBSYK3yGS2AhF1fd1an",
				buttonFontXs: "BKPBSYK3yGS2AhF1fd1an",
				buttonFontS: "_1l-KcydphK1LZ0DY8WNS7-",
				buttonFontM: "_2-Ytw7EJuJ76FU11odY0vH",
				buttonFontL: "_1fMOhvVkzFghuFsd8kzAEz",
				buttonFontXL: "_25jU9LTEsPZrTgo4UTgEvr",
				buttonFontXl: "_25jU9LTEsPZrTgo4UTgEvr",
				bodyFontH1: "_2ZqUm_Cp2QP_j0eqf4TOLu",
				bodyFontH2: "_3CcMb_6AI06xq5ar12VdGR",
				bodyFontH3: "_2rQURI6yWXPMKy8zTsJVhS",
				bodyFontH4: "_20eyEQiTe3oMfPFHKZsVTk",
				bodyFontH5: "_1LGkFCI_sPLVchg392lGmP",
				bodyFontH6: "NneW2LW2rvek7WBZYLULA",
				bodyFont: "_1WbHqicmob5scrxcNoRM6z",
				bodyFontSmall: "_1JhbrLSCwywCqsws4jUAzS",
				bodyFontMono: "_1DXzqFfRPHDAA7hSJMbTxi",
				banner: "_2bVJFy1zdpBBF6tNX6MsZt",
				button: "_3dn2kMjL3eThyGPEb1oAf-",
				buttonWrapper: "_2MsQ2gmnKXnwElZFA1jCbV",
				close: "_1MiKBKJCDaPRJ7r-vSQ8xU",
				closeContainer: "_3Amqa4WXRxq65XAjmjQw8E",
				heading: "aVXYLWktPH4YxXbOJbfEg",
				postIcon: "_2cBHGzAvbCcbR3bvPSt_Y1",
				text: "_3VcroXmJS3StZ2nIi8JODq"
			}
		},
		"./src/reddit/components/CreatePostBanner/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/constants/banners.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/localStorage/index.ts"),
				m = n("./src/reddit/helpers/trackers/modOnboarding.ts"),
				p = n("./src/reddit/icons/svgs/CirclePost/index.tsx"),
				b = n("./src/reddit/icons/svgs/Close/index.tsx"),
				f = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/components/CreatePostBanner/index.m.less"),
				y = n.n(h);
			const g = Object(a.b)(null, e => ({
				showToast: () => {
					e(Object(i.e)({
						kind: f.b.SuccessCommunity,
						text: r.fbt._("Dismissed", null, {
							hk: "3YBtnR"
						})
					}))
				}
			}));
			class v extends o.a.Component {
				constructor(e) {
					super(e), this.closeBanner = () => {
						Object(u.W)(d.a.CREATE_POST_BANNER, !0, this.props.subreddit.id), this.setState({
							visible: !1
						}), this.props.showToast(), this.props.sendEvent(Object(m.b)())
					}, this.createPost = () => {
						this.props.sendEvent(Object(m.a)())
					}, this.state = {
						visible: !1
					}
				}
				componentDidMount() {
					this.onUpdate()
				}
				componentDidUpdate() {
					this.onUpdate()
				}
				onUpdate() {
					const {
						subreddit: e
					} = this.props, t = !Object(u.f)(d.a.CREATE_POST_BANNER, e.id);
					t !== this.state.visible && (this.props.sendEvent(Object(m.c)()), this.setState({
						visible: t
					}))
				}
				render() {
					const {
						subreddit: e
					} = this.props;
					return this.state.visible ? o.a.createElement("div", {
						className: y.a.banner
					}, o.a.createElement("button", {
						className: y.a.closeContainer,
						onClick: this.closeBanner
					}, o.a.createElement(b.a, {
						className: y.a.close
					})), o.a.createElement(p.a, {
						className: y.a.postIcon
					}), o.a.createElement("div", {
						className: y.a.heading
					}, r.fbt._("Create the ideal {subredditDisplayText} post", [r.fbt._param("subredditDisplayText", ` ${e.displayText} `)], {
						hk: "3ZioIj"
					})), o.a.createElement("div", {
						className: y.a.text
					}, r.fbt._("Content is an important part of any new community.", null, {
						hk: "4nsVy"
					}), o.a.createElement("br", null), r.fbt._("Try creating your own post now!", null, {
						hk: "1KCWqr"
					})), o.a.createElement("div", {
						className: y.a.buttonWrapper
					}, o.a.createElement(l.j, {
						className: y.a.button,
						target: "_blank",
						href: `/${e.displayText}/submit`,
						onClick: this.createPost
					}, r.fbt._("Create Post", null, {
						hk: "sSUAI"
					})))) : null
				}
			}
			t.a = g(Object(c.c)(v))
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3lILa1kmfAauhn7UzHzjLJ",
				heroContainer: "_2xvhS-vDti9NRsRHMeqFmX",
				smallContainer: "_11h2c3EwgJFkGto36dozz7",
				oldContainer: "_24S-GP9dX3BODxJwehVvRx",
				header: "_3UiOKr6dA-zB_4O4l14Icx",
				bodyHidePadding: "M4vA4bj3WWpggduxPTpBA",
				body: "_1l2RfnlEvwmRPfDwe46NRR"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				i = n.n(a);
			class c extends s.a.Component {
				render() {
					return s.a.createElement("div", {
						className: Object(o.a)(i.a.heroContainer, this.props.className)
					}, s.a.createElement("div", {
						className: Object(o.a)(i.a.header, this.props.headerClassName)
					}, this.props.header), s.a.createElement("div", {
						className: Object(o.a)(this.props.hidePadding ? i.a.bodyHidePadding : i.a.body, this.props.bodyClassName)
					}, this.props.children))
				}
			}
			t.a = c
		},
		"./src/reddit/components/DownToChatBanner/index.m.less": function(e, t, n) {
			e.exports = {
				backgroundAnimationStyles: "nu9ZkGwD7hyrRLI6Isf0L",
				Container: "_3HwENDlXUGoAOP6zptLsmD",
				container: "_3HwENDlXUGoAOP6zptLsmD",
				backgroundAnimation: "E0C3InHZ3RJwQ52gcvYvk",
				Footer: "_1EDQhZLmAaqq0TjAaBHfRc",
				footer: "_1EDQhZLmAaqq0TjAaBHfRc",
				Title: "_1XKqWvpbNVuWQvCDOzDnY9",
				title: "_1XKqWvpbNVuWQvCDOzDnY9",
				Description: "_2jyh4u7PkcB4yzPbeF0o5D",
				description: "_2jyh4u7PkcB4yzPbeF0o5D",
				AvatarContainer: "_3MkBSjcFze3xCUGrbKb4cv",
				avatarContainer: "_3MkBSjcFze3xCUGrbKb4cv",
				Avatar: "_368cN6FwbMRDo7PzTz7IsF",
				avatar: "_368cN6FwbMRDo7PzTz7IsF",
				editableIcon: "_191Gjm6x9puYH4dNQ6ISjj",
				emptyEditableIcon: "iM8M6DgU7p5Ok8n_Ks0gt",
				CloseButton: "_32Qext59XJHMV7WLlayaa",
				closeButton: "_32Qext59XJHMV7WLlayaa",
				Close: "_1KqEjgaeL1FeIc48mzjBo4",
				close: "_1KqEjgaeL1FeIc48mzjBo4",
				Counter: "_1I9s8rY01sj6dSMpZ120Pu",
				counter: "_1I9s8rY01sj6dSMpZ120Pu"
			}
		},
		"./src/reddit/components/DownToChatBanner/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/lib/prettyPrintNumber/index.ts"),
				d = n("./src/reddit/actions/downToChat.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/icons/svgs/Close/index.tsx"),
				m = n("./src/reddit/icons/svgs/DownToChatAvatar/index.tsx"),
				p = n("./src/reddit/selectors/downToChat.ts"),
				b = n("./src/reddit/selectors/experiments/downToChat.ts"),
				f = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/DownToChatBanner/StartChattingButton/index.tsx"),
				y = n("./src/reddit/components/DownToChatBanner/index.m.less"),
				g = n.n(y);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = i.a.wrapped(m.a, "Avatar", g.a), x = i.a.div("AvatarContainer", g.a), O = i.a.wrapped(u.a, "Close", g.a), j = i.a.button("CloseButton", g.a), E = i.a.div("Counter", g.a), S = i.a.p("Description", g.a), I = i.a.div("Footer", g.a), P = i.a.h1("Title", g.a), C = i.a.div("Container", g.a), T = Object(a.c)({
				accountsActive: (e, t) => {
					const {
						subreddit: n
					} = t;
					if (n && n.name) {
						const t = Object(f.x)(e, {
							subredditName: n.name
						});
						return t && t.accountsActive
					}
				},
				isDownToChatExperimentEnabled: b.a,
				isEnabled: (e, {
					subreddit: t
				}) => Object(p.b)(e, t.id)
			}), k = Object(o.b)(T, e => ({
				dismissBanner: t => e(Object(d.h)(t)),
				fetchDownToChatAvailability: t => e(Object(d.j)(t))
			}));
			class w extends s.a.Component {
				constructor(e) {
					super(e), this.onCloseButtonClick = () => {
						const {
							subreddit: e,
							dismissBanner: t
						} = this.props, {
							isDismissed: n
						} = this.state;
						n || (this.setState({
							isDismissed: !0
						}), t(e.id))
					}, this.state = {
						isDismissed: !1
					}
				}
				render() {
					const {
						accountsActive: e,
						isDownToChatExperimentEnabled: t,
						subreddit: n,
						isEnabled: r
					} = this.props, {
						isDismissed: o
					} = this.state;
					return t && r && !o ? s.a.createElement(C, null, s.a.createElement(x, null, s.a.createElement(_, null)), s.a.createElement(P, null, v._("Find people who want to chat", null, {
						hk: "3Y6Pm1"
					})), s.a.createElement(S, null, v._("Bored at home? Want someone to talk to? Reddit will match you with members who want to chat too.", null, {
						hk: "3HaCWZ"
					})), s.a.createElement(I, null, s.a.createElement(h.a, {
						subreddit: n
					}), e ? s.a.createElement(E, null, v._("{viewingCount} Online", [v._param("viewingCount", Object(c.b)(e))], {
						hk: "LsWtb"
					})) : null), s.a.createElement(j, {
						onClick: this.onCloseButtonClick
					}, s.a.createElement(O, null))) : null
				}
			}
			t.a = k(Object(l.c)(w))
		},
		"./src/reddit/components/Econ/PowerupsLevel2PerksBanner/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-PowerupsLevel2PerksBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-PowerupsLevel2PerksBanner").then(n.bind(null, "./src/reddit/components/Econ/PowerupsLevel2PerksBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsLevel2PerksBanner/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/List/index.m.less": function(e, t, n) {
			e.exports = {
				predictionLeaderboardList: "WnsHpoM6ZTGbLzCSxG1ho",
				topPredictor: "iABJTvK6lrMc3PmeMk2bZ"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.tsx"),
				i = n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.m.less"),
				c = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function l({
				className: e,
				currentRank: t,
				topPredictorsRank: n
			}) {
				return s.a.createElement("div", {
					className: Object(o.a)(c.a.predictionLeaderboardList, e)
				}, (null == n ? void 0 : n.length) ? n.map(({
					rank: e,
					redditor: n,
					score: r
				}) => n ? s.a.createElement("div", {
					key: `prediction-leaderboard-${n.id}`,
					className: c.a.topPredictor
				}, s.a.createElement(a.a, {
					isCurrentUser: (null == t ? void 0 : t.redditor.name) === n.name,
					rank: e,
					redditor: n,
					score: r
				})) : null) : d._("No top predictors", null, {
					hk: "1nIqZI"
				}))
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1_C9n5LWcnYHJ78_PhY6M_",
				header: "_29gj_JsULicXdU3UTZKiDI",
				tournamentName: "_3KMEVZQ1fKy47r4xUKQaCg",
				closeButton: "_1Q_qQCWWqlqHQzCU0P83E_",
				listContainer: "_1MiUX_7AddF3lpCZ3nYtMe",
				currentRank: "_39H3viVq70CUv4_7JdBLsx",
				spacer: "_37V-Um9VhBWlh1fA0PP6hv",
				isTournament: "S2wYSCw_j9gZfcPOmSnLk"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				c = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				u = n("./src/reddit/helpers/trackers/predictions.ts"),
				m = n("./src/reddit/hooks/usePageLayer.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				f = n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx"),
				h = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.tsx"),
				y = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.m.less"),
				g = n.n(y);
			const {
				fbt: v
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(i.a)((function({
				onClose: e,
				currentRank: t,
				subredditId: n,
				topPredictorsRank: i,
				tournamentId: y
			}) {
				const _ = Object(p.a)(),
					x = Object(m.a)(),
					O = Object(c.w)(x),
					j = Object(o.e)(e => Object(b.e)(e, {
						subredditId: n
					}));
				Object(r.useEffect)(() => {
					_(Object(u.h)(O))
				}, []);
				const E = t && t.rank > 0;
				return s.a.createElement("div", {
					className: Object(a.a)(g.a.container, {
						[g.a.isTournament]: !!y
					})
				}, s.a.createElement("div", {
					className: g.a.header
				}, s.a.createElement(d.q, {
					className: g.a.closeButton,
					Icon: l.a,
					priority: d.b.Plain,
					onClick: e
				}), s.a.createElement("h1", null, y ? v._("Tournament leaderboard", null, {
					hk: "3GP3FC"
				}) : v._("Top Predictors", null, {
					hk: "4BEbch"
				})), (null == j ? void 0 : j.name) && s.a.createElement("h2", {
					className: g.a.tournamentName
				}, null == j ? void 0 : j.name)), s.a.createElement("div", {
					className: g.a.listContainer
				}, s.a.createElement(f.a, {
					currentRank: t,
					topPredictorsRank: i
				}), E && s.a.createElement("div", {
					className: g.a.spacer
				}, " ")), t && E && s.a.createElement(h.a, {
					className: g.a.currentRank,
					isCurrentUser: !0,
					rank: t.rank,
					redditor: t.redditor,
					score: t.score
				}))
			}))
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Predictor/PlaceBadge/index.m.less": function(e, t, n) {
			e.exports = {
				placeBadge: "_3j-KsBmkOxaO1_k3p8PS4q"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.m.less": function(e, t, n) {
			e.exports = {
				predictor: "ainvGgXQrIMFpP9X4Mrc_",
				userLink: "_34lqpm8WEQ2vCBLoneB-q5",
				userName: "Lm2HlDnjd61FFIUJMsqY1",
				yourProfile: "_3NXCPZBcTL9t1VpyqYkpAi",
				rank: "_35mmwlcmeMehfyJXIsaV6P",
				userIcon: "_12PvAVnV9Mni44vSgjcixP",
				avatar: "KajS3NI16AuxmHTMwUM9Y",
				score: "_3ebMVpO-ahVFbOZDTJpx9U",
				coinIcon: "_1aYPVtVpXwl960I3DbyeEc"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/UserIcon/index.tsx"),
				i = n("./src/reddit/controls/InternalLink/index.tsx"),
				c = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				d = n("./src/reddit/helpers/trackers/predictions.ts"),
				l = n("./src/reddit/hooks/useTracking.ts"),
				u = n("./node_modules/fbt/lib/FbtPublic.js"),
				m = n("./src/config.ts"),
				p = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/PlaceBadge/index.m.less"),
				b = n.n(p);
			const f = `${m.a.assetPath}/img/econ/predictions/leaderboard`,
				h = `${f}/first@2x.png`,
				y = `${f}/second@2x.png`,
				g = `${f}/third@2x.png`,
				v = {
					1: {
						alt: u.fbt._("First place", null, {
							hk: "3uGGfU"
						}),
						src: h,
						srcSet: `\n  ${f}/first.png,\n  ${h} 2x,\n  ${f}/first@3x.png 3x,\n`
					},
					2: {
						alt: u.fbt._("Second place", null, {
							hk: "4AYjyw"
						}),
						src: y,
						srcSet: `\n  ${f}/second.png,\n  ${y} 2x,\n  ${f}/second@3x.png 3x,\n`
					},
					3: {
						alt: u.fbt._("Third place", null, {
							hk: "lyjwD"
						}),
						src: g,
						srcSet: `\n  ${f}/third.png,\n  ${g} 2x,\n  ${f}/third@3x.png 3x,\n`
					}
				};

			function _({
				place: e
			}) {
				const t = e && v[e];
				return t ? s.a.createElement("img", {
					alt: t.alt,
					className: b.a.placeBadge,
					src: t.src,
					srcSet: t.srcSet
				}) : null
			}
			var x = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.m.less"),
				O = n.n(x);
			const {
				fbt: j
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function E({
				className: e,
				isCurrentUser: t,
				rank: n,
				redditor: r,
				score: u
			}) {
				const m = Object(l.a)();
				if (!r) return null;
				const {
					icon: p,
					name: b,
					profile: f
				} = r;
				return s.a.createElement("div", {
					className: Object(o.a)(O.a.predictor, e)
				}, s.a.createElement("div", {
					className: O.a.rank
				}, n), s.a.createElement(i.a, {
					className: O.a.userLink,
					onClick: () => m(Object(d.b)({
						targetUserId: r.id
					})),
					to: `/user/${b}`
				}, s.a.createElement(_, {
					place: n
				}), s.a.createElement(a.a, {
					className: Object(o.a)(O.a.userIcon, O.a.avatar),
					iconUrl: null == p ? void 0 : p.url,
					isNSFW: !!(null == f ? void 0 : f.isNsfw),
					userName: null != b ? b : ""
				}), s.a.createElement("div", null, s.a.createElement("div", {
					className: O.a.userName
				}, b), t && s.a.createElement("div", {
					className: O.a.yourProfile
				}, j._("Yep, thats you.", null, {
					hk: "3DqdE1"
				})))), s.a.createElement("div", {
					className: O.a.score
				}, s.a.createElement(c.a, {
					className: O.a.coinIcon
				}), u))
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.m.less": function(e, t, n) {
			e.exports = {
				themedWidget: "_3uxjfiwzc4v4BiMEQHtZ3J",
				openModalButtonContainer: "Phr96vmtPy_VTwey6qWL_",
				openModalButton: "_1wSRscxdBnLN2r_D5XZhbe",
				modal: "PxqE9oFD_60_KiA_nA9CV"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "PredictionLeaderboardSidebar", (function() {
				return S
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/economics/predictions/index.ts"),
				l = n("./src/reddit/components/SidebarSpacer/index.tsx"),
				u = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				p = n("./src/reddit/endpoints/economics/predictions.ts"),
				b = n("./src/lib/initializeClient/installReducer.ts"),
				f = n("./src/reddit/reducers/features/predictions/index.ts");
			Object(b.a)({
				features: {
					predictions: f.a
				}
			});
			var h = n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx"),
				y = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx"),
				g = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.m.less"),
				v = n.n(g);
			const _ = 4,
				x = 25,
				O = Object(i.c)({
					leaderboard: (e, t) => {
						var n, r;
						return (null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.predictions) || void 0 === r ? void 0 : r.leaderboards[t.subredditId]) || null
					}
				}),
				j = {
					fetchSubredditTopPredictors: d.a
				},
				E = Object(a.b)(O, j);

			function S({
				className: e,
				fetchSubredditTopPredictors: t,
				leaderboard: n,
				subredditId: a,
				tournamentId: i
			}) {
				var d;
				const [b, f] = Object(s.useState)(!1), [g, O] = Object(s.useState)(!1);
				Object(s.useEffect)(() => {
					(async () => {
						if (!n) try {
							await t(a, p.a.AllTime, x, i)
						} catch (e) {
							O(!0)
						}
					})()
				}, [a]);
				const j = () => {
					f(!1)
				};
				if (!(null === (d = null == n ? void 0 : n.topPredictorsRank) || void 0 === d ? void 0 : d.length) || g) return null;
				const {
					currentRank: E,
					topPredictorsRank: S
				} = n;
				return o.a.createElement(l.a, null, o.a.createElement(u.a, {
					className: Object(c.a)(v.a.themedWidget, e),
					title: i ? r.fbt._("Tournament leaderboard", null, {
						hk: "1WFLrI"
					}) : r.fbt._("Top Predictors", null, {
						hk: "3HCYxQ"
					})
				}, o.a.createElement(h.a, {
					currentRank: E,
					topPredictorsRank: S.slice(0, _)
				}), o.a.createElement("div", {
					className: v.a.openModalButtonContainer
				}, o.a.createElement(m.i, {
					className: v.a.openModalButton,
					isFullWidth: !0,
					onClick: () => {
						f(!0)
					}
				}, r.fbt._("See All", null, {
					hk: "1Ozf02"
				}))), b && o.a.createElement(y.a, {
					className: v.a.modal,
					currentRank: E,
					onOverlayClick: j,
					onClose: j,
					subredditId: a,
					topPredictorsRank: n.topPredictorsRank,
					tournamentId: i,
					withOverlay: !0
				})))
			}
			t.default = E(S)
		},
		"./src/reddit/components/Econ/Tournament/Facepile/index.m.less": function(e, t, n) {
			e.exports = {
				tournamentFacepile: "_2s5mTnxw-HrR3LxXr6-s9l",
				snoovatar: "_10n2BWHixtesWJB1Xu_4iY",
				userIcon: "w79K8RlYWlnCQFk_TP4Zt",
				snoovatarBackground: "_2TJo5CZBd22_s9OR3EIwI3"
			}
		},
		"./src/reddit/components/Econ/Tournament/Facepile/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				c = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				d = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/models/User/index.ts"),
				u = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Econ/Tournament/Facepile/index.m.less"),
				b = n.n(p);

			function f({
				className: e,
				faceClassName: t,
				subredditId: n
			}) {
				var r;
				const p = Object(o.e)(m.V),
					f = Object(o.e)(m.j),
					h = Object(o.e)(m.C),
					y = Object(o.e)(e => Object(u.b)(e, {
						subredditId: n
					}));
				return (null === (r = null == y ? void 0 : y.latestParticipants) || void 0 === r ? void 0 : r.length) ? s.a.createElement("div", {
					className: Object(a.a)(b.a.tournamentFacepile, e)
				}, y.latestParticipants.slice(0, 3).map(({
					icon: e,
					name: n,
					profile: r
				}) => {
					const o = !!f && Object(l.e)(f) === n,
						{
							url: u
						} = e,
						{
							isNsfw: m
						} = r,
						y = `tournament-facepile-face-${n}`;
					return Object(d.a)(u) ? s.a.createElement(i.a, {
						key: y,
						backgroundClassName: b.a.snoovatarBackground,
						className: Object(a.a)(b.a.snoovatar, t),
						headshot: u
					}) : s.a.createElement(c.a, {
						key: y,
						className: Object(a.a)(b.a.userIcon, t),
						iconUrl: u,
						isCurrentUser: o,
						isNSFW: m,
						isNightMode: p,
						shouldHideNSFW: h
					})
				})) : null
			}
		},
		"./src/reddit/components/Econ/Tournament/Sidebar/Header/index.m.less": function(e, t, n) {
			e.exports = {
				tournamentHeader: "_2L8VNMjNWlcP7ToGgB-MVT",
				icon: "_2SAm3TtzbpBy2zeX5sXDSY",
				title: "_3GhPDUwqXvOEMxzArLzLW9",
				subtitle: "_1vXOj5w7dYV91BVsFC8f42",
				status: "_1cyWKM1TKL3TVlK7DGt2aX",
				facepileRow: "_3wP4rK05eWhVhwlsZCRcwW",
				numberOfPlayers: "JMuDzgPbrHDhUhQ-LmFSx"
			}
		},
		"./src/reddit/components/Econ/Tournament/Sidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/Econ/Tournament/Facepile/index.tsx"),
				c = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				d = n("./src/reddit/models/Poll/index.ts"),
				l = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/components/Econ/Tournament/Sidebar/Header/index.m.less"),
				p = n.n(m);
			const {
				fbt: b
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function f({
				subredditId: e
			}) {
				const t = Object(o.e)(t => Object(l.e)(t, {
						subredditId: e
					})),
					n = Object(o.e)(t => Object(u.T)(t, {
						subredditId: e
					})),
					r = Object(c.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: n
					});
				if (!t) return null;
				const {
					name: m,
					status: f,
					totalParticipantsCount: h
				} = t;
				return s.a.createElement("div", {
					className: p.a.tournamentHeader
				}, s.a.createElement("img", {
					alt: b._("Subreddit icon", null, {
						hk: "gEWhf"
					}),
					className: p.a.icon,
					src: r.url,
					style: {
						backgroundColor: r.color
					}
				}), s.a.createElement("h1", {
					className: p.a.title
				}, m), s.a.createElement("h3", {
					className: p.a.subtitle
				}, b._("Predictions tournament", null, {
					hk: "447IA5"
				})), s.a.createElement("div", {
					className: p.a.status
				}, f !== d.c.Closed ? h > 0 && s.a.createElement("div", {
					className: p.a.facepileRow
				}, s.a.createElement(i.a, {
					subredditId: e
				}), s.a.createElement("div", {
					className: p.a.numberOfPlayers
				}, b._({
					"*": "{totalPlayers} players",
					_1: "{totalPlayers} player"
				}, [b._param("totalPlayers", Object(a.b)(h)), b._plural(h)], {
					hk: "4vb2za"
				}))) : b._("Tournament ended", null, {
					hk: "2gUDWl"
				})))
			}
			n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx"), n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx");
			var h = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx");

			function y({
				subredditId: e
			}) {
				const t = Object(o.e)(t => Object(l.e)(t, {
					subredditId: e
				}));
				return t ? s.a.createElement(h.default, {
					subredditId: e,
					tournamentId: t.tournamentId
				}) : null
			}
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function v({
				subredditId: e
			}) {
				return s.a.createElement("div", null, s.a.createElement(f, {
					subredditId: e
				}), s.a.createElement(y, {
					subredditId: e
				}))
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-Economics-SubredditPremium-LFGBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Economics-SubredditPremium-LFGBanner").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx"
				}
			})
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/higherOrderComponents/makeAsync.tsx"),
				s = n("./src/reddit/featureFlags/component.tsx");
			const o = Object(r.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumNewUserWelcome").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.tsx")).then(e => e.default)
			});
			t.a = Object(s.a)("spSpecialMemberships", o)
		},
		"./src/reddit/components/Governance/ClaimPointsBanner/async.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/reddit/featureFlags/component.tsx");
			const o = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-ClaimPointsBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Governance-ClaimPointsBanner").then(n.bind(null, "./src/reddit/components/Governance/ClaimPointsBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/ClaimPointsBanner/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = Object(s.a)("spClaimablePoints", o)
		},
		"./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/reddit/featureFlags/index.ts");
			const d = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Banner/index.tsx")).then(e => e.default)
			});
			const l = Object(a.c)({
				featureEnabled: c.d.spWalletRegistrationBanner
			});
			t.a = Object(o.b)(l)((function(e) {
				return s.a.createElement(d, e)
			}))
		},
		"./src/reddit/components/Governance/WalletRegistration/StellarBanner/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/reddit/featureFlags/index.ts");
			const d = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistrationStellarBanner").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/StellarBanner/index.tsx")).then(e => e.default)
			});
			const l = Object(a.c)({
				featureEnabled: c.d.spStellarWalletRegistration
			});
			t.a = Object(o.b)(l)((function(e) {
				return s.a.createElement(d, e)
			}))
		},
		"./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less": function(e, t, n) {
			e.exports = {
				item: "XEkFoehJNxIH9Wlr5Ilzd",
				mFocused: "_3Av66iQf7_N4Z-XZxsek76",
				itemWrapper: "_17q-ew4FcK6U0ZiybWkIGG",
				icon: "_3HTtcITrR-crvsRovLrijl",
				text: "_2aqH0n-kSzFY7HZZ5GL-Jb",
				trending: "_2H51id1RX9dGNrtrAIOMGK",
				subText: "_2Efd4uMAp4YawdvL9Zhdhv",
				title: "_1JNAu7U5gWAkRoykwfUWhY",
				favorite: "t2A0mgkgGzc8cAahJsR7a",
				mFavorite: "_2cEhEGN_WTLlwspw_bpqTr",
				multi: "_3Hhjob0kyyqVjBXut8STgU",
				customFeedIcon: "ENGeNwSHzwN-SV2KTH2s7",
				trendingContent: "BNJ5Y52EyQmTHFZJwjoXJ",
				relatedSubredditMetaData: "_3P_WRCH8aFjwOFA7B1RlBL",
				promoted: "bpYVdL9hAnIqOnrKi8PVS"
			}
		},
		"./src/reddit/components/InFeedPostCreation/async.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-InFeedPostCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-InFeedPostCreation").then(n.bind(null, "./src/reddit/components/InFeedPostCreation/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/InFeedPostCreation/index.tsx"
				}
			})
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, n) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				i = n.n(a),
				c = n("./src/lib/lessComponent.tsx");
			const d = c.a.div("IconWrapper", i.a),
				l = c.a.div("TextWrapper", i.a);

			function u(e) {
				const {
					className: t,
					color: n,
					icon: r,
					subtitle: a,
					title: c
				} = e;
				return s.a.createElement("div", {
					className: Object(o.a)(t, i.a.wrapper),
					style: n && {
						borderColor: n
					} || {}
				}, s.a.createElement("div", {
					className: i.a.leftSideRectangle,
					style: n && {
						backgroundColor: n
					} || {}
				}), r ? s.a.createElement(d, null, r) : s.a.createElement(d, null), s.a.createElement(l, null, s.a.createElement("div", {
					className: i.a.title
				}, c), a && s.a.createElement("div", {
					className: i.a.subtitle
				}, a)))
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3UJGTKmHd4TVKyOdhiMAJ1",
				rawHtmlDisplay: "s2P-f2c3l2Irco5Ru0S5J",
				link: "_1eRb8-B7kEgkwxWFSWuVUk",
				icon: "WCZvfrkaO-Zq7vsDKOAdS"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = n("./src/reddit/constants/colors.ts"),
				l = n("./src/reddit/controls/InternalLink/index.tsx"),
				u = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				p = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				b = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				f = n.n(b);
			const h = o.a.createElement(u.a, {
					className: f.a.icon
				}),
				y = Object(i.c)({
					subreddit: m.A,
					subredditAboutInfo: m.x
				}),
				g = Object(a.b)(y);
			t.a = g(e => {
				const {
					subreddit: t,
					subredditAboutInfo: n
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const s = n && n.quarantineMessageHtml,
					a = n && n.quarantineMessage || r.fbt._("It is dedicated to shocking or highly offensive content.", null, {
						hk: "2QoofC"
					});
				return o.a.createElement(p.a, {
					className: f.a.container,
					color: d.b.quarantine,
					icon: h,
					subtitle: o.a.createElement("span", null, r.fbt._("This community is {=quarantined}", [r.fbt._param("=quarantined", o.a.createElement("a", {
						className: f.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, r.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", s ? o.a.createElement(c.a, {
						className: f.a.rawHtmlDisplay,
						html: s
					}) : a, " ", o.a.createElement(l.a, {
						className: f.a.link,
						to: "/"
					}, r.fbt._("Click to return home.", null, {
						hk: "3FgSpg"
					}))),
					title: r.fbt._("Community Quarantined", null, {
						hk: "3RKbEl"
					})
				})
			})
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/reddit/constants/componentSizes.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/JumpToContent/index.m.less"),
				d = n.n(c);
			const l = Object(s.createContext)(null),
				u = Object(s.createContext)(null);
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						handleRef: null
					}, this.setHandleRef = e => {
						this.state.handleRef !== e && this.setState({
							handleRef: e
						})
					}
				}
				render() {
					return o.a.createElement(l.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, o.a.createElement(u.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const p = a.f + 10,
				b = o.a.memo(() => o.a.createElement(l.Consumer, null, e => e && o.a.createElement("div", {
					className: d.a.wrapper
				}, o.a.createElement(i.o, {
					className: d.a.button,
					onClick: () => {
						e.focus(), e.scrollIntoView(), window.scrollBy(0, -p)
					}
				}, r.fbt._("Jump to content", null, {
					hk: "2zWOmQ"
				})), o.a.createElement("div", {
					className: d.a.rightBorder
				})))),
				f = o.a.memo(() => o.a.createElement(u.Consumer, null, e => o.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(a.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: r,
					onClick: a,
					post: c,
					redditStyle: u,
					theme: m,
					...p
				} = e;
				return s.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, n),
					style: Object(i.c)(r, e),
					onClick: a
				}, p), t)
			})
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/LRUCache/index.ts"),
				a = n("./src/higherOrderComponents/makeAsync.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				d = n("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				l = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				u = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				f = n.n(b);
			const {
				fbt: h
			} = n("./node_modules/fbt/lib/FbtPublic.js"), y = ({
				className: e
			}) => s.a.createElement("div", {
				className: Object(i.a)(e, f.a.container, f.a.placeholder, f.a.large, p.a.largeAndMediumPostStyles)
			}, s.a.createElement(l.a, {
				className: f.a.backgroundWrapper
			}, s.a.createElement("div", {
				className: f.a.titleAndDescriptionContainer
			}, s.a.createElement("h3", {
				className: f.a.title
			}, h._("Top broadcast", null, {
				hk: "HADCh"
			}))), s.a.createElement("div", {
				className: f.a.body
			}, s.a.createElement("div", {
				className: f.a.previewContainer
			}, s.a.createElement("div", {
				className: Object(i.a)(f.a.thumbnail, f.a.loading)
			})))));
			var g = ({
				className: e,
				layout: t
			}) => t === u.g.Classic ? s.a.createElement(c.b, {
				className: Object(i.a)(e, f.a.classicPostPlaceholder),
				isLoading: !0
			}) : t === u.g.Compact ? s.a.createElement(d.a, {
				className: Object(i.a)(e, f.a.compactPostPlaceholder),
				isLoading: !0
			}) : s.a.createElement(y, {
				className: e
			});
			const v = Object(a.a)({
				ErrorComponent: () => null,
				LoadingComponent: ({
					className: e,
					layout: t
				}) => s.a.createElement(g, {
					className: e,
					layout: t
				}),
				getComponent: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("RpanListingUnit")]).then(n.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			var _ = e => s.a.createElement(v, e),
				x = n("./src/reddit/helpers/trackers/rpan.ts");
			const O = e => e === u.g.Classic ? 88 : e === u.g.Compact ? 42 : 340,
				j = new o.a(20),
				E = e => {
					const t = `rpan-${e.layout}-${e.listingKey}`,
						n = j.get(t);
					if (n) return n;
					const r = S(e.desiredIndex, e.children),
						o = {
							child: {
								id: t,
								estHeight: O(e.layout),
								trackOnEnteredViewport: () => e.sendEvent(Object(x.G)()),
								render: ({
									className: t
								}) => s.a.createElement(_, {
									className: t,
									layout: e.layout,
									listingName: e.listingName
								})
							},
							idx: r
						};
					return j.set(t, o), o
				},
				S = (e, t) => {
					const n = new Set(Object.keys(t).map(e => parseInt(e, 10)));
					for (; n.has(e);) e++;
					return e
				}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1EG7_Cm18ANvUvJ4rJdRgQ",
				leftRail: "_2GllO2Gk7c6od_GL_uNYcO",
				backgroundWrapper: "_3qQRMrsougg399HF8ZDsfl",
				header: "_25K6Ujp7eqOAHEdYuHm3pY",
				titleAndDescriptionContainer: "lQm93MTLO_P-uDIe2PRl3",
				title: "_1eNkAwmWuXZFmNLfie958",
				description: "fTm7r0gvPYKH7pWZpQbgm",
				overflowMenu: "_1g1tKbaVucAvOc7c2mO--M",
				overflowItemIconWrapper: "yw5ALrlWcD8wfh7tIB4Jl",
				overflowItemText: "fxp6qlPWJ76riedygoUS7",
				hideIcon: "_1YoM6AZ3m3ETysTwNLrh3N",
				flatListContainer: "_2psTIDB-4cySf4KyON03mz",
				flatlistSeparator: "_1q8ZrSYLuE8Stn2AL2N4mJ",
				expandoButton: "_2OUloQpdxYXyrn8kPE4iAu",
				videoIcon: "_1uKWYPTIE0QxbdTkW9En19",
				expandoIcon: "_2m0hG8zpYJ2W34yfcu_PGL",
				bigExpando: "qecjZnTfgEjCTlYKgqrl0",
				bigExpandoIcon: "_8ViGpsDZkJ4aNM6aVyan0",
				previewContainer: "_1N144m-88joWY3ZwzWRjrl",
				thumbnail: "A8CAQWacAEq_Pwee5F5IZ",
				placeholder: "_3XAxDMGyfQtOCP0nwHqdLt",
				gradientAnimation: "_3Jz-b55_o5VWDQ42wh1-rr",
				glimmer: "_1HSyAH-KtED8iH51buUWfa",
				loading: "_3Hsr_kP1TY2ld8xQG-XqAL",
				infoContainer: "_2aNPePbQCJ2-xyqF693-oh",
				broadcastTitle: "_2PtVDFQbkz3Sh1f_ppShzf",
				watchingCount: "VT9OiuLNsb6RZcYm86q9G",
				titlePlaceholder: "_3DC7-C7eSLDyl1gxOp5IFX",
				large: "hrQ5rXDbyl6t3TIXxENXB",
				body: "_1jrhjWiRPpBMVjEPmkDP26",
				previewLink: "_2ZFeLyTw6PIP6lE1S9c4Js",
				classic: "_3Rb0d4ST3qYLtk7GE1D2Ku",
				thumbnailContainer: "_1UGYtZeEoz8fDy4G-b4pqk",
				main: "_12iec8OZ9gJJtQR8nSC2se",
				compact: "_2mQGWgGIa1tOb-9mH8lvcG",
				verticalVotes: "_3Q8HLP8Cv_uongOZe_uVp2",
				score: "_1c8HaTqXDAT7pYLrFLAWFt",
				horizontalVotes: "_3dLEcgpoUWjqaG1vVXlfYR",
				compactPostPlaceholder: "jw9TfhViHYwiaSOWfhKRa",
				classicPostPlaceholder: "_2lnslGhr0-HKZXmHDCzAU7",
				upvoteAnimation: "_1MEw3CaNaAuwCohG-n7UPc",
				liveStatus: "_1YeXsBJft9g02XQNAzcPWD"
			}
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/raf/index.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o);
			class i extends a.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && s.a.cancel(this.frame), this.frame = s()(this.props.onResize)
					}, this.containerRef = e.containerRef
				}
				shouldComponentUpdate() {
					return !1
				}
				componentDidMount() {
					this.createSensor()
				}
				createSensor() {
					if (!this.containerRef || this.sensor) return;
					this.sensor = document.createElement("object"), this.sensor.setAttribute("style", "\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n      pointer-events: none;\n      z-index: -1;\n    "), this.sensor.setAttribute("tabindex", "-1"), this.sensor.onload = () => {
						this.props.onResize(), this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.addEventListener("resize", this.handleResize)
					}, this.sensor.type = "text/html";
					const e = this.isIE();
					e && this.containerRef.appendChild(this.sensor), this.sensor.data = "about:blank", e || this.containerRef.appendChild(this.sensor), this.props.onResize()
				}
				componentWillUnmount() {
					this.sensor && (this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.removeEventListener("resize", this.handleResize), this.containerRef && this.containerRef.removeChild(this.sensor))
				}
				render() {
					return a.a.createElement("div", {
						ref: this.setContainerRef
					})
				}
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3ioMyxiI-wWgZFqBDVBh6r"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less"),
				o = n.n(s);
			t.a = r.a.div("header", o.a)
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1Pcih1cgtQusjyfxp7YPbP",
				"m-card": "Ab_CG1GZxb0mjtooTcgRC",
				mCard: "Ab_CG1GZxb0mjtooTcgRC",
				layout: "_2kSyv4gtHy2zfKKHU-4g7F",
				layoutBody: "_2OOX0Ul2XYOdHT0ojyBOUD",
				layoutHeader: "lUMtC2iyxpeA0-GrN-P2x"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				i = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				c = n.n(i);

			function d(e) {
				const {
					className: t,
					id: n,
					layoutBodyClassName: r,
					showCardView: i
				} = e, d = {
					[c.a["m-card"]]: i
				};
				return s.a.createElement("div", {
					id: n,
					className: Object(o.a)(c.a.container, d, t)
				}, s.a.createElement(a.a, {
					className: c.a.layout,
					bodyClassName: Object(o.a)(c.a.layoutBody, d, r),
					header: e.header,
					headerClassName: Object(o.a)(c.a.layoutHeader, d)
				}, e.children))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less": function(e, t, n) {
			e.exports = {
				cardViewContainer: "_3SRia4h16KBodhRWPhm8Yn",
				container: "_3_c5cqV3WsdQo95Ql4El73",
				desc: "_3R8QK7DFEcDSPoSj255qHJ",
				one: "fLTQnOxtJpKvmnJh5ATHh",
				two: "_2c6Ke7Z35QpkUQA7b_RdMX",
				icon: "_1WvWGBpNLkD_JVC5Fdzz6n",
				name: "_3_bgt7LjReM2xalPiPzPhR",
				post: "_1K3CRPtfEoi_X2HCsP1PDn",
				layoutBody: "_1Hi56fRSBr7dTnQbwYoiBi"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				i = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				c = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = s.a.createElement(a.a, {
				className: l.a.duHeader
			}, u._("Trending today", null, {
				hk: "3rOxuO"
			})), p = Object(c.a)({
				isLoading: !0
			});
			t.a = e => s.a.createElement(i.a, {
				className: e.className,
				header: m,
				layoutBodyClassName: l.a.layoutBody,
				showCardView: e.showCardView
			}, Array.from({
				length: e.numberOfItems || 6
			}).map((e, t) => s.a.createElement("div", {
				className: l.a.post,
				key: `placeholder-post-${t}`
			}, s.a.createElement("div", {
				className: Object(o.a)(l.a.desc, l.a.one, p)
			}), s.a.createElement("div", {
				className: Object(o.a)(l.a.desc, l.a.two, p)
			}), s.a.createElement("div", {
				className: Object(o.a)(l.a.icon, p)
			}), s.a.createElement("div", {
				className: Object(o.a)(l.a.name, p)
			}))))
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less": function(e, t, n) {
			e.exports = {
				BladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				bladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				Container: "_2lnfWQQ2rf3LByOAo0AIxK",
				container: "_2lnfWQQ2rf3LByOAo0AIxK",
				isSubscriptionPinned: "_3VGAuEF6xANTry3OLdIkY-",
				CloseIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				closeIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				LoadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loading: "ZKk731y0xKgZOe9Tjjniq",
				gradientAnimation: "U7_QESggl5iLUzCuBiLcO",
				LoadingTitle: "XP9o26f6xTYlWRW8E4xg",
				loadingTitle: "XP9o26f6xTYlWRW8E4xg",
				LoadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				loadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				LoadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				loadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				ShortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				shortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				ThemedChevron: "_3yekFtL72Ta99kZASWWCIh",
				themedChevron: "_3yekFtL72Ta99kZASWWCIh"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lodash/values.js"),
				s = n.n(r),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/loadWithRetries/index.ts"),
				p = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				b = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				f = n("./src/reddit/icons/svgs/Close/index.tsx"),
				h = n("./src/reddit/selectors/moderatorPermissions.ts"),
				y = n("./src/reddit/selectors/structuredStyles.ts"),
				g = n("./src/reddit/selectors/userPrefs.ts"),
				v = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				_ = n.n(v);
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js"), O = u.a.div("BladeContainer", _.a), j = u.a.wrapped(f.a, "CloseIcon", _.a), E = u.a.div("LoadingTitleContainer", _.a), S = u.a.div("LoadingNavContainer", _.a), I = u.a.div("ShortLoadingNav", _.a), P = u.a.wrapped(b.a, "ThemedChevron", _.a), C = ({
				...e
			}) => a.a.createElement(O, null, a.a.createElement(j, null), a.a.createElement(p.k, null, a.a.createElement(p.p, null, x._("Back to mod tools", null, {
				hk: "1YCI0W"
			})), a.a.createElement(p.o, null, a.a.createElement(E, null, a.a.createElement("div", {
				className: Object(l.a)(_.a.LoadingTitle, e.isLoading && _.a.loading)
			})), a.a.createElement(S, null, a.a.createElement("div", {
				className: Object(l.a)(_.a.LoadingNav, e.isLoading && _.a.loading)
			}), a.a.createElement(P, null)), a.a.createElement(S, null, a.a.createElement(I, null), a.a.createElement(P, null)), a.a.createElement(S, null, a.a.createElement("div", {
				className: Object(l.a)(_.a.LoadingNav, e.isLoading && _.a.loading)
			}), a.a.createElement(P, null)), a.a.createElement(S, null, a.a.createElement(I, null), a.a.createElement(P, null)), a.a.createElement(S, null, a.a.createElement("div", {
				className: Object(l.a)(_.a.LoadingNav, e.isLoading && _.a.loading)
			}), a.a.createElement(P, null))))), T = Object(d.a)({
				getComponent: () => Object(m.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => a.a.createElement(C, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => a.a.createElement(C, {
					gradientType: "posts",
					isLoading: !0
				})
			}), k = Object(c.c)({
				isEditing: y.i,
				isSubscriptionsPinned: g.b,
				moderatorPermissions: h.i
			});
			t.a = Object(i.b)(k)(e => {
				const t = e.moderatorPermissions && s()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? a.a.createElement("div", {
					className: Object(l.a)(_.a.Container, e.isSubscriptionsPinned && _.a.isSubscriptionPinned)
				}, e.children, a.a.createElement(T, {
					subredditId: e.subredditId
				})) : a.a.createElement(o.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, n) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return a
			})), n.d(t, "p", (function() {
				return i
			})), n.d(t, "n", (function() {
				return c
			})), n.d(t, "o", (function() {
				return d
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "e", (function() {
				return y
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "j", (function() {
				return x
			}));
			var r = n("./src/lib/lessComponent.tsx"),
				s = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = n.n(s);
			const a = r.a.section("FormPage", o.a),
				i = r.a.h1("HomePageTitle", o.a),
				c = r.a.button("HomePageBreadcrumb", o.a),
				d = r.a.div("HomePageGroup", o.a),
				l = r.a.h1("FormPageTitle", o.a),
				u = r.a.div("FormPageSection", o.a),
				m = r.a.div("FormGroup", o.a),
				p = r.a.h2("FormGroupTitle", o.a),
				b = r.a.div("FormElement", o.a),
				f = r.a.div("FormGroupDescription", o.a),
				h = r.a.div("FormItem", o.a),
				y = r.a.h3("FormElementTitle", o.a),
				g = r.a.div("FormElementDescription", o.a),
				v = r.a.div("FormElementError", o.a),
				_ = r.a.div("FormElementSubGroup", o.a),
				x = r.a.li("FormListItem", o.a)
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const m = ({
					border: e,
					small: t,
					...n
				}) => o.a.createElement(a.q, u({}, n, {
					priority: e ? a.b.Primary : a.b.Plain,
					className: Object(l.a)(n.className, d.a.BaseButton),
					size: t ? a.c.S : a.c.M
				})),
				p = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? r.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : r.fbt._("Following", null, {
					hk: "1wQlVR"
				})), o.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? r.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : r.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				b = ({
					buttonType: e,
					border: t,
					small: n,
					...r
				}) => o.a.createElement(a.q, u({}, r, {
					priority: t ? a.b.Secondary : a.b.Plain,
					className: Object(l.a)(r.className, d.a.BaseButton),
					size: n ? a.c.S : a.c.M,
					text: p(e)
				}));
			class f extends o.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: n,
						small: r = !1
					} = this.props, s = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: r
					};
					return this.props.userIsSubscriber ? o.a.createElement(b, u({}, s, {
						buttonType: this.props.identifier.type
					})) : o.a.createElement(m, u({}, s, {
						id: n
					}), this.props.children, Object(i.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				o = {
					subredditActions: {
						subscribe: () => r.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => r.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => r.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => r.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => r.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => r.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				a = ({
					type: e,
					key: t
				}) => o[s({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				s = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(s.a)(Object(r.c)(o.a))
		},
		"./src/reddit/components/TabBadger/Loader.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-TabBadger-Component",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-TabBadger-Component").then(n.bind(null, "./src/reddit/components/TabBadger/Component.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/TabBadger/Component.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = s
		},
		"./src/reddit/components/TabBadger/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/TabBadger/Loader.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/posts.ts");
			const u = Object(a.c)({
					postCount: l.N,
					previousPageIsOverlay: d.n,
					tabBadged: e => e.tabBadged
				}),
				m = Object(o.b)(u);
			t.a = m(Object(c.c)(e => 0 === e.postCount ? null : s.a.createElement(i.a, {
				handlePillClick: e.handlePillClick,
				previousPageIsOverlay: e.previousPageIsOverlay,
				sendEvent: e.sendEvent,
				shortTimer: e.shortTimer,
				subredditName: e.subredditName,
				subscriberCount: e.subscriberCount,
				tabBadged: e.tabBadged
			})))
		},
		"./src/reddit/components/TrackingHelper/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/telemetry/index.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const d = s.a.createContext(() => {});

			function l({
				children: e
			}) {
				const t = Object(o.f)(),
					n = Object(r.useCallback)(e => {
						{
							const n = t.getState(),
								r = e(n);
							Object(i.a)({
								...a.defaults(n),
								...r
							})
						}
					}, [t]);
				return s.a.createElement(d.Provider, {
					value: n
				}, e ? s.a.Children.only(e) : null)
			}

			function u() {
				return Object(r.useContext)(d)
			}

			function m(e) {
				function t(t) {
					const n = u();
					return s.a.createElement(e, c({}, t, {
						sendEvent: n
					}))
				}
				return t.displayName = "Tracked", t.WrappedComponent = e, t
			}
		},
		"./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/components/AdViewability/index.tsx"),
				a = n("./src/reddit/components/BlankPost/index.tsx"),
				i = n("./src/reddit/connectors/PostViewable/index.ts");
			const c = Object(i.a)(null);
			class d extends s.a.Component {
				render() {
					const {
						children: e,
						post: t,
						onPostViewable: n
					} = this.props;
					if (t) return t.isBlank ? s.a.createElement(a.BlankPost, {
						post: t,
						postId: t.id,
						onPostViewable: n
					}) : s.a.createElement(o.a, {
						post: t,
						trackDisplay: !0
					}, e)
				}
			}
			t.a = c(d)
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/subscription/index.ts"),
				a = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(r.b)(() => Object(s.c)({
				userIsSubscriber: a.gb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(o.d([t], !0)),
				onSubscriptionsRequested: () => e(o.e()),
				onUnsubscribe: () => e(o.d([t], !1))
			}))
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/structuredStyles/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const d = Object(s.c)({
				bladeHasUnsavedChanges: i.a,
				isEditing: i.i,
				isBladeEditorDirty: i.h,
				isModalOpen: Object(a.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(r.b)(d, (e, {
				subredditId: t
			}) => ({
				requestCloseBlade: () => t && e(Object(o.h)(t))
			}))
		},
		"./src/reddit/constants/banners.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.STYLES_ENTRY_BANNER = "styles_entry_banner", e.CREATE_POST_BANNER = "create_post_banner", e.AWARDED_LISTING_BANNER = "awarded_listing_banner"
				}(r || (r = {}))
		},
		"./src/reddit/constants/chat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(r || (r = {}));
			var s;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(s || (s = {}))
		},
		"./src/reddit/constants/shortcuts.ts": function(e, t, n) {
			"use strict";
			var r, s;
			n.d(t, "d", (function() {
					return r
				})), n.d(t, "c", (function() {
					return s
				})), n.d(t, "b", (function() {
					return o
				})), n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.CommentPage = "CommentPage", e.Global = "Global", e.Lightbox = "Lightbox", e.Listing = "Listing", e.Modqueue = "Modqueue"
				}(r || (r = {})),
				function(e) {
					e.Close = "CLOSE", e.CollapseOrLoad = "COLLAPSE_OR_LOAD", e.Downvote = "DOWNVOTE", e.Expando = "EXPANDO", e.Hide = "HIDE", e.Konami = "KONAMI", e.NewPost = "NEW_POST", e.NextComment = "NEXT_COMMENT", e.NextPost = "NEXT_POST", e.OpenIndex = "OPEN_INDEX", e.OpenLightbox = "OPEN_LIGHTBOX", e.OpenLink = "OPEN_LINK", e.PrevComment = "PREV_COMMENT", e.PrevPost = "PREV_POST", e.Reply = "REPLY", e.Save = "SAVE", e.Upvote = "UPVOTE"
				}(s || (s = {}));
			const o = "SHORTCUT_FOCUSABLE_DIV",
				a = [9, 13, 32]
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const a = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					}
				},
				i = Object(r.createContext)(a);

			function c(e) {
				return t => s.a.createElement(i.Consumer, null, ({
					apiContext: n,
					gqlContext: r
				}) => s.a.createElement(e, o({
					apiContext: n,
					gqlContext: r
				}, t)))
			}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			class o extends s.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							n = this.props.multiple ? [...t] : t[0];
						this.props.onChange(n), this.setState(() => ({
							value: n
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = "string" == typeof t.value ? t.value : "", r = "object" == typeof t.value ? t.value : null, o = n || r;
					return s.a.createElement("div", {
						className: e.className
					}, n && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), !o && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
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
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(a);
			t.a = ({
				center: e,
				className: t,
				sizePx: n
			}) => s.a.createElement("div", {
				className: Object(o.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/controls/Search/RelatedSubredditMetaData.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/objectSelector/index.ts"),
				d = n("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = n("./src/reddit/components/SubredditIcon/index.tsx"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				p = n.n(m),
				b = n("./src/reddit/controls/Search/index.m.less"),
				f = n.n(b);
			const h = Object(o.b)(() => Object(a.c)({
				subredditsByName: Object(c.a)((e, t) => {
					const n = {};
					return t.subredditIcons && t.subredditIcons.map(t => {
						n[t.subredditName] = Object(u.A)(e, {
							subredditName: t.subredditName
						})
					}), n
				})
			}));
			t.a = h(e => s.a.createElement("div", {
				className: Object(i.a)(p.a.subText, f.a.subText, e.className)
			}, e.subredditIcons ? e.subredditIcons.map(t => s.a.createElement(d.a, {
				key: `${t.subredditName}-hoverCard`,
				subredditName: t.subredditName
			}, s.a.createElement(l.b, {
				className: Object(i.a)(f.a.subredditIcon, f.a.isHeaderIcon, e.iconClassName),
				linkTo: `/r/${t.subredditName}/`,
				key: t.subredditName,
				iconUrl: t.url,
				subredditOrProfile: e.subredditsByName[t.subredditName]
			}))) : s.a.createElement(l.b, {
				className: Object(i.a)(f.a.subredditIcon, e.iconClassName),
				key: e.iconUrl,
				iconUrl: e.iconUrl
			}), e.suffix && s.a.createElement("span", null, e.suffix)))
		},
		"./src/reddit/controls/Search/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_2xQx4j6lBnDGQ8QsRnJEJa",
				iconContainer: "_2QGKgHKTtOwKHI4B_LI0YM",
				icon: "_1hdDhVEGWEdVJcgy2XQ2Eq",
				relativeWrapper: "_1blFGqU8stoZgWSZ8MQNpf",
				subredditIcon: "_2me05I1oHEys1gUyyDWswt",
				isHeaderIcon: "_1biYoFBD4CLgOvrr_HinV4",
				hasIcons: "_1M-azLenSs2UgxeZ2rJX20",
				subText: "_2-DL_E9cFo1xsqU3Q8BXnJ"
			}
		},
		"./src/reddit/helpers/commentList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/constants/comments.ts"),
				s = n("./src/reddit/selectors/comments.ts"),
				o = n("./src/reddit/constants/experiments.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts");
			const i = (e, t) => t().features.comments.models[e],
				c = e => {
					switch (e.commentLink.type) {
						case r.a.Comment:
							return e.commentsDict[e.commentLink.id];
						case r.a.MoreComments:
							return e.moreCommentsDict[e.commentLink.id];
						case r.a.ContinueThread:
							return e.continueThreadDict[e.commentLink.id]
					}
				},
				d = (e, t) => e.type === r.a.MoreComments ? t[e.id].numComments : 1,
				l = (e, t, n, r) => {
					let o = Object(s.n)(r, {
							commentLink: t,
							commentsPageKey: e
						}),
						a = t;
					for (; o && o.depth > n && o.prev && (a = o.prev, (o = Object(s.n)(r, {
							commentLink: a,
							commentsPageKey: e
						})) && !(o.depth <= n)););
					return a.id
				},
				u = (e, t, n) => {
					const {
						commentLists: r,
						comments: s
					} = e, {
						head: i
					} = r[t];
					if (i) return Object.keys(s).filter(e => {
						const t = s[e];
						return !(!t.isStickied || !((e, t) => {
							const n = Object(a.c)(e, {
								experimentEligibilitySelector: a.a,
								experimentName: o.w,
								expEventOverride: t
							});
							return !!(Object(o.wd)(n) ? void 0 : n)
						})(n)) || (e => !1 !== e.collapsed)(t)
					})
				}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function r(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function s(e) {
				const {
					subreddit: t,
					amount: n,
					memo: r,
					cta: s
				} = e;
				if (!(t && n && r && s)) throw new Error("subreddit, amount, and memo query params required for vault action");
				return {
					subreddit: t,
					amount: n,
					memo: r,
					cta: s
				}
			}
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/getSubredditErrorProps/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./src/reddit/models/ContentGate.ts");
			t.a = (e, t, n) => {
				let s, o, a, i, c, d;
				return e ? e.quarantinedSubreddit ? (o = r.a.QuarantinedSubreddit, i = e.quarantineMessage, c = e.quarantineMessageHtml, d = e.quarantineRequiresEmail) : e.privateSubreddit ? (o = r.a.PrivateSubreddit, a = e.subredditDescription) : e.goldSubreddit ? o = r.a.GoldSubreddit : e.subredditBanned ? (o = r.a.SubredditBanned, s = e.subredditBanMessage) : e.subredditDoesNotExist ? o = r.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason && (o = r.a.SubredditBlockedForLegalReason) : t && (o = r.a.Nsfw), o && n ? {
					banMessage: s,
					contentGateType: o,
					subredditDescription: a,
					subredditName: n,
					quarantineMessage: i,
					quarantineMessageHtml: c,
					quarantineRequiresEmail: d
				} : void 0
			}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./node_modules/brcast/dist/brcast.es.js");
			const s = Object(r.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/resonatePage/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = e => {
				window.resonateAnalytics && window.resonateAnalytics.initialize || function() {
					const e = window.resonateAnalytics = window.resonateAnalytics || [];
					if (!e.initialize) {
						if (e.invoked) return;
						e.invoked = !0, e.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "profile"], e.factory = function(t) {
							return function() {
								const n = Array.prototype.slice.call(arguments);
								return n.unshift(t), e.push(n), e
							}
						};
						for (let t = 0; t < e.methods.length; t++) {
							const n = e.methods[t];
							e[n] = e.factory(n)
						}
						e.load = function(e) {
							const t = document.createElement("script");
							t.type = "text/javascript", t.async = !0, t.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.resonate.com/analytics.js/v1/" + e + "/analytics.min.js";
							const n = document.getElementsByTagName("script")[0];
							n.parentNode.insertBefore(t, n)
						}, e.SNIPPET_VERSION = "1.0.0", e.load("101117480")
					}
				}(), window.resonateAnalytics && window.resonateAnalytics.page && window.resonateAnalytics.page(e)
			}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "d", (function() {
				return y
			}));
			var r = n("./node_modules/polished/dist/polished.es.js"),
				s = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(d);
			const u = {},
				m = e => Object(i.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(r.l)(.2, e),
				f = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				y = e => {
					const t = Object(o.a)(Object(s.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/tabBadging/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			}));
			var r = n("./src/config.ts");
			const s = `${r.a.assetPath}/img/favicon/badged-favicon-32x32.png`,
				o = `${r.a.assetPath}/img/favicon/badged-favicon-16x16.png`,
				a = `${r.a.assetPath}/img/favicon/favicon-32x32.png`,
				i = `${r.a.assetPath}/img/favicon/favicon-16x16.png`,
				c = "badgeCountSync",
				d = e => window.document.querySelector(`link[href="${e}"]`),
				l = (e = !0) => {
					const t = d(e ? a : s),
						n = d(e ? i : o);
					t && n && (t.href = e ? s : a, n.href = e ? o : i)
				},
				u = e => {
					navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage({
						command: c,
						badgeCounts: e
					})
				}
		},
		"./src/reddit/helpers/trackers/ads.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					source: "dfp",
					action: "request",
					noun: "ad",
					...s.defaults(e),
					subreddit: s.subreddit(e)
				}),
				a = () => e => ({
					source: "dfp",
					action: "define",
					noun: "ad",
					...s.defaults(e),
					subreddit: s.subreddit(e)
				}),
				i = (e, t) => n => {
					const o = t ? e.dfpDetails.slot.getSlotId().getDomId() : e.slot.getSlotId().getDomId(),
						a = -1 !== o.indexOf(r.c.ABOVE_THE_FOLD) ? r.c.ABOVE_THE_FOLD : r.c.BELOW_THE_FOLD,
						i = document.querySelector("#" + o);
					let c, d;
					if (i && (c = r.f.HOUSE_AD, -1 !== i.innerHTML.indexOf("google_ads_iframe") && (c = r.f.PROGRAMMATIC_AD), i.children && i.children.length > 0)) {
						const e = i.children[0];
						d = `${e.offsetWidth}x${e.offsetHeight}`
					}
					const l = t ? "aax" : void 0;
					return {
						source: "post",
						action: "view",
						noun: "programmatic_ad",
						...s.defaults(n),
						subreddit: s.subreddit(n),
						programmatic: {
							adUnit: d ? `DESKTOP ${d} ${a}` : `DESKTOP ${a}`,
							count: 1,
							partner: l,
							type: c
						}
					}
				},
				c = (e, t, n) => o => ({
					source: "post",
					action: "view",
					noun: "programmatic_ad",
					...s.defaults(o),
					subreddit: s.subreddit(o),
					programmatic: {
						adUnit: null !== e && null !== t ? `DESKTOP ${e}x${t} ${n}` : `DESKTOP ${n}`,
						count: 1,
						type: r.f.SWITCH_HOUSE_AD
					}
				})
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return g
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "E", (function() {
				return E
			})), n.d(t, "F", (function() {
				return S
			})), n.d(t, "M", (function() {
				return P
			})), n.d(t, "B", (function() {
				return C
			})), n.d(t, "C", (function() {
				return T
			})), n.d(t, "D", (function() {
				return k
			})), n.d(t, "i", (function() {
				return w
			})), n.d(t, "w", (function() {
				return N
			})), n.d(t, "x", (function() {
				return A
			})), n.d(t, "L", (function() {
				return L
			})), n.d(t, "K", (function() {
				return D
			})), n.d(t, "I", (function() {
				return R
			})), n.d(t, "v", (function() {
				return B
			})), n.d(t, "y", (function() {
				return M
			})), n.d(t, "z", (function() {
				return F
			})), n.d(t, "A", (function() {
				return U
			})), n.d(t, "N", (function() {
				return W
			})), n.d(t, "J", (function() {
				return H
			})), n.d(t, "t", (function() {
				return V
			})), n.d(t, "H", (function() {
				return K
			})), n.d(t, "d", (function() {
				return G
			})), n.d(t, "c", (function() {
				return q
			})), n.d(t, "b", (function() {
				return Z
			})), n.d(t, "f", (function() {
				return Q
			})), n.d(t, "e", (function() {
				return z
			})), n.d(t, "s", (function() {
				return X
			})), n.d(t, "m", (function() {
				return $
			})), n.d(t, "r", (function() {
				return ee
			})), n.d(t, "k", (function() {
				return te
			})), n.d(t, "l", (function() {
				return ne
			})), n.d(t, "n", (function() {
				return re
			})), n.d(t, "p", (function() {
				return se
			})), n.d(t, "q", (function() {
				return oe
			})), n.d(t, "o", (function() {
				return ae
			})), n.d(t, "j", (function() {
				return ie
			})), n.d(t, "u", (function() {
				return ce
			})), n.d(t, "G", (function() {
				return de
			}));
			var r, s = n("./src/lib/stringInterpolate/index.ts"),
				o = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = (n("./src/reddit/constants/categories.tsx"), n("./src/reddit/constants/tracking.ts")),
				i = n("./src/reddit/helpers/correlationIdTracker.ts"),
				c = n("./src/reddit/helpers/trackers/searchResults.ts"),
				d = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/models/Widgets/index.ts"),
				u = n("./src/reddit/selectors/posts.ts"),
				m = n("./src/reddit/selectors/telemetry.ts"),
				p = n("./src/reddit/selectors/widgets.ts"),
				b = n("./src/telemetry/index.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(r || (r = {}));
			const f = "discovery_unit",
				h = (e, t, n) => ({
					...m.defaults(e),
					source: f,
					screen: m.screen(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && n ? Object(s.a)(t.title, {
							subredditName: n.name
						}) : t.title,
						name: t.unitName
					}
				}),
				y = (e, t, n) => ({
					...h(e, t, n),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				g = (e, t) => {
					Object(b.a)(v(t)(e))
				},
				v = (e, t) => n => y(n, e, t),
				_ = (e, t, n, r) => "unitName" in t ? h(e, t, r) : ((e, t, n) => ({
					...m.defaults(e),
					source: "search",
					screen: m.screen(e),
					search: n ? {
						...m.search(e, n),
						structureType: m.StructureType.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, n),
				x = (e, t, n, s, o) => ({
					..._(e, t, s, o),
					action: "view",
					noun: r.ITEM_POST,
					post: m.post(e, n)
				}),
				O = ({
					post: e,
					rawQuery: t,
					searchQuery: n
				}) => ({
					displayQuery: decodeURIComponent(n),
					rawQuery: t ? decodeURIComponent(t) : void 0,
					structureType: e && e.isSponsored ? m.StructureType.PromotedTrend : m.StructureType.Trending
				});
			var j;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(j || (j = {}));
			const E = (e, t, n) => {
					Object(b.a)(I(e, t, n, a.c.CLICK))
				},
				S = (e, t, n) => {
					Object(b.a)(I(e, t, n, a.c.VIEW))
				},
				I = (e, t, n, r) => {
					const s = e.trending.models.filter(e => !e.post || !e.post.isSponsored).findIndex(e => e.id === t.id) + 1;
					return {
						...m.defaults(e),
						source: "search",
						action: r,
						noun: "trending",
						metaSearch: O(t),
						discoveryUnit: n === j.POPULAR_CAROUSEL ? {
							name: d.l,
							id: d.l,
							title: d.l,
							type: "query"
						} : void 0,
						actionInfo: m.actionInfo(e, {
							paneName: n,
							position: s
						}),
						search: {
							originPageType: e.platform.currentPage ? m.getPageTypeFromCurrentPage(e.platform.currentPage) : void 0,
							query: t.rawQuery,
							structureType: m.StructureType.Trending,
							queryId: r === a.c.CLICK ? Object(i.c)(i.a.SearchResults) : void 0
						}
					}
				},
				P = (e, t, n, r, s, o, i) => {
					Object(b.a)({
						...m.defaults(e),
						...Object(c.e)(e, n, r, s, o, t),
						action: a.c.VIEW,
						noun: i ? "ad" : "post"
					})
				},
				C = (e, t, n, r) => {
					Object(b.a)(x(e, t, n, r))
				},
				T = (e, t, n, r) => s => x(s, e, t, n, r),
				k = (e, t, n, s) => {
					const o = _(e, t, s);
					Object(b.a)({
						...o,
						...Object(p.b)(e, n),
						action: "view",
						noun: r.ITEM_SUBREDDIT
					})
				},
				w = (e, t) => {
					Object(b.a)({
						...h(e, t),
						source: f,
						action: a.c.CLICK,
						noun: "show_less_often"
					})
				},
				N = (e, t, n, r) => {
					Object(b.a)(A(t, n, r)(e))
				},
				A = (e, t, n, s) => o => {
					return {
						..._(o, e, n, s),
						source: f,
						action: a.c.CLICK,
						noun: r.ITEM_POST,
						post: m.post(o, t)
					}
				},
				L = (e, t, n, r) => s => o => Object(c.e)(o, s, e, t, n, r),
				D = (e, t, n, r) => s => o => Object(c.d)(o, e, t, void 0, n, s, r),
				R = (e, t, n, r) => s => o => ({
					...Object(c.e)(o, s, e, t, n, r),
					noun: "ad"
				}),
				B = (e, t) => n => s => ({
					...e ? h(s, e, t) : {},
					source: f,
					action: a.c.CLICK,
					noun: r.ITEM_POST,
					post: m.post(s, n)
				}),
				M = (e, t, n, r) => {
					Object(b.a)(F(t, n, r)(e))
				},
				F = (e, t, n, r) => s => {
					const o = Object(u.c)(s, {
							postId: t
						}),
						i = o ? Object(p.b)(s, o) : void 0;
					return {
						..._(s, e, n, r),
						...i,
						source: f,
						action: a.c.CLICK,
						noun: "item_post_subreddit",
						post: m.post(s, t)
					}
				},
				U = (e, t, n) => r => s => {
					const o = Object(u.c)(s, {
							postId: t
						}),
						i = o ? Object(p.b)(s, o) : void 0;
					return {
						..._(s, e, void 0, n),
						...i,
						source: f,
						action: a.c.CLICK,
						noun: r ? "item_post_subreddit_unsubscribe" : "item_post_subreddit_subscribe",
						post: m.post(s, t)
					}
				},
				W = (e, t, n) => {
					const r = _(e, t);
					Object(b.a)({
						...r,
						...Object(p.b)(e, n),
						source: "search",
						action: a.c.CLICK,
						noun: "search_result_discovery_unit_subreddit"
					})
				},
				H = (e, t, n, r, s, o) => {
					Object(b.a)({
						...m.defaults(e),
						...Object(c.d)(e, t, n, r, s, void 0, o)
					})
				},
				V = (e, t, n) => {
					const r = _(e, t);
					Object(b.a)({
						...r,
						...Object(p.b)(e, n),
						source: f,
						action: a.c.CLICK,
						noun: "footer_subreddit"
					})
				},
				K = (e, t) => n => {
					const r = Object(l.j)(t);
					return {
						...h(n, e, t),
						...Object(p.b)(n, r),
						source: f,
						action: a.c.CLICK,
						noun: "title_subreddit"
					}
				},
				G = (e, t) => n => ({
					...h(n, e, t),
					action: "status",
					actionInfo: m.actionInfo(n, {
						success: !0
					}),
					noun: "loading"
				}),
				q = (e, t, n) => r => ({
					...h(r, e, n),
					action: "status",
					actionInfo: m.actionInfo(r, {
						reason: t,
						success: !1
					}),
					noun: "loading"
				}),
				Z = (e, t) => n => ({
					...h(n, e, t),
					action: "click",
					noun: "close"
				}),
				Q = (e, t, n) => r => ({
					..._(r, e, t, n),
					action: "click",
					noun: "scroll"
				}),
				z = (e, t) => n => ({
					...h(n, e, t),
					action: "click",
					noun: "overflow_menu"
				}),
				Y = () => ({
					id: "xd_focus_verticals",
					unitType: d.f.Listing,
					experiment: "",
					title: o.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: d.d.Large,
					surface: d.e.Frontpage,
					url: "gql.reddit.com"
				}),
				J = (e, t, n) => m.actionInfo(e, {
					position: n
				}),
				X = (e, t, n) => {
					const r = Y();
					return e => ({
						...y(e, r),
						actionInfo: J(e, 0, n),
						subreddit: m.subredditById(e, t)
					})
				},
				$ = (e, t, n) => {
					const r = Y();
					return e => ({
						...x(e, r, t),
						actionInfo: J(e, 0, n)
					})
				},
				ee = (e, t, n) => {
					const s = Y();
					return e => ({
						...h(e, s),
						actionInfo: J(e, 0, n),
						subreddit: m.subredditById(e, t) || null,
						source: f,
						action: a.c.VIEW,
						noun: r.ITEM_SUBREDDIT
					})
				},
				te = (e, t, n) => {
					const s = Y();
					return e => ({
						...h(e, s),
						actionInfo: J(e, 0, n),
						post: m.post(e, t) || null,
						source: f,
						action: a.c.CLICK,
						noun: r.ITEM_POST
					})
				},
				ne = (e, t, n, s) => {
					const o = Y();
					return e => ({
						...h(e, o),
						actionInfo: J(e, 0, s),
						subreddit: m.subredditById(e, n) || null,
						post: m.post(e, t) || null,
						source: f,
						action: a.c.CLICK,
						noun: r.ITEM_POST_SUBREDDIT
					})
				},
				re = (e, t, n) => {
					const s = Y();
					return e => ({
						...h(e, s),
						actionInfo: J(e, 0, n),
						subreddit: m.subredditById(e, t) || null,
						source: f,
						action: a.c.CLICK,
						noun: r.ITEM_SUBREDDIT
					})
				},
				se = (e, t, n, s) => {
					const o = Y();
					return e => ({
						...h(e, o),
						actionInfo: J(e, 0, n),
						subreddit: m.subredditById(e, t) || null,
						post: s ? m.post(e, s) : null,
						source: f,
						action: a.c.CLICK,
						noun: r.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				oe = (e, t, n, s) => {
					const o = Y();
					return e => ({
						...h(e, o),
						actionInfo: J(e, 0, n),
						subreddit: m.subredditById(e, t) || null,
						post: s ? m.post(e, s) : null,
						source: f,
						action: a.c.CLICK,
						noun: r.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				ae = (e, t, n) => {
					const s = Y();
					return e => ({
						...h(e, s),
						actionInfo: J(e, 0, n),
						subreddit: m.subredditById(e, t) || null,
						source: f,
						action: a.c.CLICK,
						noun: r.ITEM_SUBREDDIT_HIDE
					})
				},
				ie = (e, t, n) => {
					const s = Y();
					return e => ({
						...h(e, s),
						actionInfo: J(e, 0, n),
						subreddit: m.subredditById(e, t) || null,
						source: f,
						action: a.c.CLICK,
						noun: r.HEADER_SUBREDDIT
					})
				},
				ce = (e, t) => n => ({
					...h(n, e),
					...t && Object(p.b)(n, t),
					source: f,
					action: a.c.CLICK,
					noun: "item"
				}),
				de = e => t => ({
					...h(t, e),
					source: f,
					action: a.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			n("./src/reddit/constants/categories.tsx");
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					screen: r.screen(e),
					profile: r.profile(e),
					subreddit: r.subreddit(e)
				}),
				o = e => t => ({
					source: "nav",
					action: "click",
					noun: e,
					...s(t)
				}),
				a = e => t => ({
					...s(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				i = e => t => ({
					...s(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				})
		},
		"./src/reddit/helpers/trackers/postComposer.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "x", (function() {
				return v
			})), n.d(t, "w", (function() {
				return _
			})), n.d(t, "s", (function() {
				return x
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "q", (function() {
				return j
			})), n.d(t, "z", (function() {
				return E
			})), n.d(t, "r", (function() {
				return S
			})), n.d(t, "i", (function() {
				return I
			})), n.d(t, "u", (function() {
				return P
			})), n.d(t, "t", (function() {
				return C
			})), n.d(t, "o", (function() {
				return T
			})), n.d(t, "n", (function() {
				return k
			})), n.d(t, "y", (function() {
				return w
			})), n.d(t, "k", (function() {
				return N
			})), n.d(t, "j", (function() {
				return A
			})), n.d(t, "l", (function() {
				return L
			})), n.d(t, "d", (function() {
				return R
			})), n.d(t, "m", (function() {
				return M
			})), n.d(t, "h", (function() {
				return U
			})), n.d(t, "e", (function() {
				return W
			})), n.d(t, "f", (function() {
				return H
			})), n.d(t, "b", (function() {
				return V
			})), n.d(t, "v", (function() {
				return K
			})), n.d(t, "g", (function() {
				return G
			}));
			var r = n("./src/reddit/constants/tracking.ts"),
				s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/helpers/media/index.ts"),
				a = n("./src/reddit/models/PostCreationForm/index.ts"),
				i = n("./src/reddit/models/PostDraft/index.ts"),
				c = n("./src/reddit/selectors/postDraft.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				l = n("./src/reddit/selectors/user.ts"),
				u = n("./src/telemetry/index.ts"),
				m = n("./src/telemetry/models/PostComposer.ts"),
				p = n("./src/telemetry/models/PostDraft.ts");
			const b = {
					imageOnly: "image",
					linkOnly: "link",
					media: "media",
					poll: "poll",
					post: "self",
					crosspost: "crosspost"
				},
				f = e => ({
					source: "post_composer",
					action: r.c.CLICK,
					...d.defaults(e),
					screen: d.screen(e),
					correlationId: Object(s.c)(s.a.PostComposer)
				}),
				h = (e, t) => "self" !== t ? {} : {
					editorMode: e.user.prefs.editorMode === a.h.MARKDOWN ? "markdown" : "rte"
				},
				y = e => {
					Object(u.a)({
						noun: "cancel",
						...f(e)
					})
				},
				g = e => {
					Object(u.a)({
						noun: "discard",
						...f(e)
					})
				},
				v = e => {
					Object(u.a)({
						noun: "subreddit_choice",
						subreddit: d.subreddit(e),
						...f(e),
						actionInfo: d.chatPostActionInfo(e)
					})
				},
				_ = e => {
					Object(u.a)({
						noun: "subreddit_selector",
						...f(e)
					})
				},
				x = (e, t) => {
					Object(u.a)({
						noun: "post_type_selector",
						postComposer: {
							type: b[t]
						},
						...f(e)
					})
				},
				O = () => e => ({
					noun: "add_option",
					...f(e)
				}),
				j = () => e => ({
					noun: "voting_length",
					...f(e)
				}),
				E = (e, t, n) => {
					"image_upload" === t || "video_upload" === t ? Object(u.a)({
						noun: t,
						...f(e)
					}) : Object(u.a)({
						noun: "text_option",
						postComposer: {
							textType: t,
							finalStatus: n ? "on" : "off"
						},
						...f(e)
					})
				},
				S = (e, t, n) => {
					Object(u.a)({
						noun: "post",
						subreddit: d.subreddit(e),
						postComposer: {
							type: t,
							...h(e, t)
						},
						post: n ? d.post(e, n) : null,
						...f(e)
					})
				},
				I = (e, t) => {
					const n = t === a.h.MARKDOWN ? "markdown_mode" : "rte_mode";
					Object(u.a)({
						noun: n,
						...f(e)
					})
				},
				P = (e, t) => {
					Object(u.a)({
						noun: "save",
						subreddit: d.subreddit(e),
						postComposer: {
							type: t,
							...h(e, t)
						},
						...f(e)
					})
				},
				C = (e, t) => {
					const n = e.uploads[t];
					n.error && Object(u.a)({
						...f(e),
						noun: "media",
						action: r.c.REJECT,
						actionInfo: {
							...d.actionInfo(e),
							reason: JSON.stringify(n.error)
						}
					})
				},
				T = (e, t) => {
					t.forEach(t => {
						const n = Object(o.f)(t.type);
						n && Object(u.a)({
							...f(e),
							action: r.c.DRAG,
							noun: n
						})
					})
				},
				k = (e, t, n) => {
					Object(u.a)({
						...f(e),
						noun: "input",
						postComposer: {
							inputType: n
						},
						action: t,
						actionInfo: d.chatPostActionInfo(e)
					})
				},
				w = (e, t, n) => {
					Object(u.a)({
						...f(e),
						noun: n,
						action: Object(m.getToggleAction)(t),
						actionInfo: d.chatPostActionInfo(e)
					})
				},
				N = e => D("input", e),
				A = () => D("add"),
				L = () => D("remove"),
				D = (e, t) => n => ({
					...f(n),
					noun: e,
					postComposer: {
						inputType: t,
						type: b.imageOnly
					},
					action: r.c.CLICK
				}),
				R = e => {
					Object(u.a)({
						...f(e),
						noun: "hide_oc_description",
						action: r.c.CLICK
					})
				},
				B = (e, t) => {
					if (t) {
						const n = d.subredditById(e, t);
						if (n) return {
							subreddit: n
						};
						const r = d.profileById(e, t);
						if (r) return {
							profile: r
						}
					}
				},
				M = (e, t) => {
					const {
						draftId: n,
						destSubreddit: r
					} = t, s = Object(l.j)(e), o = Object(c.d)(e, {
						draftId: n
					}), a = {
						authorId: s ? s.id : void 0,
						createdTimestamp: o ? o.created : void 0,
						id: n || void 0,
						nsfw: t.isNSFW,
						originalContent: t.isOC,
						spoiler: t.isSpoiler,
						titleLength: t.title.length
					};
					switch (t.kind) {
						case i.b.Link:
							a.type = p.DraftType.Link, a.urlLength = t.body.length;
							break;
						case i.b.Markdown:
							a.type = p.DraftType.Self, a.bodyTextLength = t.body.length;
							break;
						case i.b.RichText:
							a.type = p.DraftType.RichText, t.documentStats && (a.bodyTextLength = t.documentStats.textLength, a.numberRteImages = t.documentStats.rteImagesCount, a.numberRteVideos = t.documentStats.rteVideosCount);
							break;
						case i.b.Image:
							a.type = p.DraftType.Image;
							break;
						case i.b.Video:
							a.type = p.DraftType.Video
					}
					return {
						postDraft: a,
						...B(e, r.id)
					}
				},
				F = (e, t) => {
					const n = Object(l.j)(e),
						r = {
							authorId: n ? n.id : void 0,
							createdTimestamp: t.created,
							id: t.id,
							nsfw: t.isNSFW,
							originalContent: t.isOriginalContent,
							spoiler: t.isSpoiler,
							titleLength: t.title.length
						};
					switch (t.kind) {
						case i.b.Link:
							r.type = p.DraftType.Link, r.urlLength = (t.body || "").length;
							break;
						case i.b.Markdown:
							r.type = p.DraftType.Self, r.bodyTextLength = (t.body || "").length;
							break;
						case i.b.RichText:
							r.type = p.DraftType.RichText
					}
					return {
						postDraft: r,
						...B(e, t.subredditId)
					}
				},
				U = (e, t) => {
					Object(u.a)({
						noun: "draft_load",
						...f(e),
						...M(e, t)
					})
				},
				W = (e, t) => {
					Object(u.a)({
						noun: t.draftId ? "draft_update" : "draft_create",
						...f(e),
						...M(e, t)
					})
				},
				H = (e, t) => {
					Object(u.a)({
						noun: "draft_delete",
						...f(e),
						...F(e, t)
					})
				},
				V = e => {
					Object(u.a)({
						...f(e),
						noun: "social_connect_link",
						action: r.c.CLICK
					})
				},
				K = (e, t) => {
					Object(u.a)({
						...f(e),
						noun: "twitter_share_checkbox",
						action: Object(m.getToggleAction)(t)
					})
				},
				G = (e, t, n) => {
					Object(u.a)({
						...f(e),
						...M(e, t),
						noun: "draft_share",
						action: n ? r.c.ENABLE : r.c.DISABLE
					})
				}
		},
		"./src/reddit/helpers/trackers/predictions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return s
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "i", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "h", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var r = n("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "select",
					noun: "poll_option"
				}),
				o = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "select",
					noun: "prediction_option"
				}),
				a = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_info_modal"
				}),
				i = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "close",
					noun: "predict_info_modal"
				}),
				c = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "view",
					noun: "predict_option_modal"
				}),
				d = ({
					pollId: e,
					selectedNumberCoins: t,
					totalStakeAmount: n
				}) => s => ({
					...Object(r.defaults)(s),
					source: "poll",
					action: "confirm",
					noun: "predict",
					poll: Object(r.poll)(s, e, !1, void 0, t),
					goldPurchase: {
						numberCoins: n
					}
				}),
				l = e => ({
					...Object(r.defaults)(e),
					source: "poll",
					action: "click",
					noun: "add_coins"
				}),
				u = e => t => ({
					...Object(r.defaults)(t),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "predictions_leaderboard",
						reason: e ? "prediction_details" : "subreddit_header"
					}
				}),
				m = ({
					targetUserId: e
				}) => t => ({
					...Object(r.defaults)(t),
					source: "prediction",
					action: "click",
					noun: "leaderboard_profile",
					targetUser: {
						id: e
					}
				})
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "G", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "C", (function() {
				return p
			})), n.d(t, "z", (function() {
				return b
			})), n.d(t, "D", (function() {
				return f
			})), n.d(t, "B", (function() {
				return h
			})), n.d(t, "A", (function() {
				return y
			})), n.d(t, "t", (function() {
				return g
			})), n.d(t, "u", (function() {
				return v
			})), n.d(t, "w", (function() {
				return _
			})), n.d(t, "q", (function() {
				return x
			})), n.d(t, "o", (function() {
				return O
			})), n.d(t, "p", (function() {
				return j
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "y", (function() {
				return S
			})), n.d(t, "r", (function() {
				return I
			})), n.d(t, "x", (function() {
				return P
			})), n.d(t, "F", (function() {
				return C
			})), n.d(t, "s", (function() {
				return T
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "k", (function() {
				return w
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "e", (function() {
				return L
			})), n.d(t, "v", (function() {
				return D
			})), n.d(t, "E", (function() {
				return R
			})), n.d(t, "f", (function() {
				return B
			})), n.d(t, "l", (function() {
				return M
			})), n.d(t, "m", (function() {
				return F
			})), n.d(t, "g", (function() {
				return U
			})), n.d(t, "h", (function() {
				return W
			}));
			var r, s = n("./src/reddit/constants/chat.ts"),
				o = n("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				a = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(r || (r = {}));
			const i = (e, t) => {
					if (t) {
						const n = a.media(e, t.post.id),
							r = a.post(e, t.post.id),
							s = a.subreddit(e);
						if (t.post.authorInfo && r && (r.authorId = t.post.authorInfo.id), n) {
							n.streamPublicId = t.stream.stream_id, n.id = t.stream.stream_id;
							const r = Object(o.j)(e, {
								streamIdFromPath: t.post.id
							});
							r === o.a.LIVE ? n.type = "stream_live" : r === o.a.VOD ? n.type = "stream_vod" : r === o.a.UNAVAILABLE && (n.type = "stream_unavailable")
						}
						return {
							post: r,
							media: n,
							subreddit: s
						}
					}
					return {
						subreddit: a.subreddit(e)
					}
				},
				c = (e, t, n) => {
					if (!t || !n) return;
					const r = Object(o.j)(e, {
							streamIdFromPath: t.post.id
						}),
						a = t.chat_disabled || n.chatState === s.a.None;
					return {
						id: n.id,
						sessionDurationMs: n.sessionDurationMs,
						watchDurationMs: n.watchDurationMs,
						heartbeatDurationMs: n.heartbeatDurationMs,
						isLive: r === o.a.LIVE,
						playheadOffsetMs: n.playheadOffsetMs,
						timestampMs: n.timestampMs,
						startTimeMs: n.startTimeMs,
						volume: n.volume,
						chatState: a ? s.a.None : s.a.Compact,
						scrubbingStartMs: n.scrubbingStartMs,
						scrubbingEndMs: n.scrubbingEndMs,
						playerType: n.playerType
					}
				},
				d = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				l = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du",
					...i(e)
				}),
				u = () => e => ({
					source: "stream_du",
					action: "click",
					noun: "show_less",
					...i(e)
				}),
				m = (e, t) => n => ({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					...i(n, e),
					actionInfo: a.actionInfo(n, {
						position: t || 0
					})
				}),
				p = (e, t) => n => ({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...e && {
						...i(n, e)
					}
				}),
				b = (e, t) => n => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				f = (e, t) => n => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				h = (e, t) => n => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				y = (e, t, n) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, n),
					...d(r),
					...i(r, t)
				}),
				g = (e, t, n, r) => s => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(s, t, n),
					...d(s),
					...i(s, t),
					actionInfo: a.actionInfo(s, {
						referralId: r
					})
				}),
				v = (e, t, n) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: c(r, t, n),
					...d(r),
					...i(r, t)
				}),
				_ = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...d(t),
					...i(t, e)
				}),
				x = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				O = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				j = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: c(n, e, t),
					...d(n),
					...i(n, e)
				}),
				E = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: c(n, e, t),
					...i(n, e)
				}),
				S = e => t => {
					const n = Object(o.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...i(t, n)
					}
				},
				I = (e, t, n) => r => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: c(r, t, n),
					...i(r, t)
				}),
				P = (e, t) => n => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: c(n, e, t),
					...d(n)
				}),
				C = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: a.profile(t),
					screen: a.screen(t),
					...i(t, e)
				}),
				T = e => e => {
					const t = i(e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: a.profile(e),
						screen: a.screen(e),
						...t
					}
				},
				k = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...i(t, e)
				}),
				w = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...i(t, e),
					targetSubreddit: a.subreddit(t)
				}),
				N = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: c(n, e, t),
					...i(n, e)
				}),
				A = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: c(n, e, t),
					...i(n, e)
				}),
				L = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: c(n, e, t),
					...i(n, e)
				}),
				D = (e, t) => n => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: c(n, e, t),
					...i(n, e)
				}),
				R = (e, t) => n => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: c(n, e, t),
					...i(n, e)
				}),
				B = (e, t) => n => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: c(n, e, t),
					...i(n, e)
				}),
				M = (e, t) => n => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: c(n, e, t),
					...i(n, e),
					...d(n)
				}),
				F = (e, t) => n => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: c(n, e, t),
					...i(n, e),
					...d(n)
				}),
				U = (e, t) => n => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...i(n, t),
					...d(n)
				}),
				W = (e, t) => n => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...i(n, t),
					...d(n)
				})
		},
		"./src/reddit/helpers/trackers/screenview.ts": function(e, t, n) {
			"use strict";
			n.d(t, "k", (function() {
				return E
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "q", (function() {
				return I
			})), n.d(t, "r", (function() {
				return P
			})), n.d(t, "o", (function() {
				return C
			})), n.d(t, "s", (function() {
				return T
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "l", (function() {
				return w
			})), n.d(t, "p", (function() {
				return N
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "j", (function() {
				return L
			})), n.d(t, "g", (function() {
				return D
			})), n.d(t, "b", (function() {
				return B
			})), n.d(t, "a", (function() {
				return M
			})), n.d(t, "n", (function() {
				return F
			})), n.d(t, "m", (function() {
				return U
			})), n.d(t, "t", (function() {
				return V
			})), n.d(t, "w", (function() {
				return K
			})), n.d(t, "e", (function() {
				return G
			})), n.d(t, "d", (function() {
				return Z
			})), n.d(t, "u", (function() {
				return Q
			})), n.d(t, "v", (function() {
				return z
			})), n.d(t, "h", (function() {
				return Y
			}));
			var r = n("./node_modules/lodash/pick.js"),
				s = n.n(r),
				o = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makePostDraftPageKey/index.ts"),
				i = n("./src/reddit/constants/parameters.ts"),
				c = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				d = n("./src/reddit/helpers/routeKey/index.ts"),
				l = n("./src/reddit/helpers/trackers/postComposer.ts"),
				u = n("./src/reddit/helpers/trackers/profileSettings.ts"),
				m = n("./src/reddit/models/Comment/index.ts"),
				p = n("./src/reddit/models/Post/index.ts"),
				b = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				f = n("./src/reddit/selectors/profile.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				y = n("./src/lib/makePostCreationPageKey/index.ts"),
				g = n("./src/lib/makeSearchKey/index.ts"),
				v = n("./src/reddit/helpers/correlationIdTracker.ts"),
				_ = n("./src/reddit/helpers/trackers/searchResults.ts"),
				x = n("./src/reddit/selectors/postDraft.ts"),
				O = n("./src/reddit/selectors/telemetry.ts"),
				j = n("./src/telemetry/index.ts");
			const E = (e, t, n, r, l, b) => {
					const {
						route: f
					} = e, {
						name: h
					} = f.meta;
					if (!h) return;
					const v = t.platform.currentPage;
					switch (h) {
						case o.Db.COMMENTS: {
							const {
								partialCommentId: s,
								partialPostId: o
							} = e.match.params, a = Object(p.r)(o), i = Object(d.a)(e, t, t.posts.models[a]);
							if (!i) return;
							const l = s && Object(m.f)(s),
								{
									sortToUse: u
								} = Object(c.a)(t, a),
								b = !0;
							Object(j.a)(k(i, a, l, n, r, u, b)(t));
							break
						}
						case o.Db.INDEX:
						case o.Db.LISTING:
						case o.Db.MULTIREDDIT:
						case o.Db.SUBREDDIT: {
							const s = Object(d.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: a,
								queryParams: i
							} = e.match, {
								sort: c = (s.sort ? s.sort : o.P.HOT)
							} = a, l = i.t;
							Object(j.a)(S(s.listingKey, c, n, r, l)(t));
							break
						}
						case o.Db.TOPIC: {
							const s = Object(d.c)(e, t);
							if (!s.listingKey) return;
							const {
								params: a
							} = e.match, i = s.sort ? s.sort : o.Q, {
								sort: c = i
							} = a;
							Object(j.a)(S(s.listingKey, c, n, r)(t));
							break
						}
						case o.Db.PROFILE_OVERVIEW: {
							const s = Object(d.d)(e, t);
							if (!s) return;
							const {
								params: a,
								queryParams: i
							} = e.match, {
								sort: c = o.vb
							} = a, l = i.t;
							Object(j.a)(I(s, c, n, r, l)(t));
							break
						}
						case o.Db.PROFILE_POSTS: {
							const s = Object(d.d)(e, t);
							if (!s) return;
							const {
								queryParams: a
							} = e.match, {
								sort: i = o.vb,
								t: c = o.wb
							} = a;
							Object(j.a)(P(s, i, n, r, c)(t));
							break
						}
						case o.Db.PROFILE_COMMENTS: {
							const s = Object(d.d)(e, t);
							if (!s) return;
							const {
								queryParams: a
							} = e.match, {
								sort: i = o.vb,
								t: c = o.wb
							} = a;
							Object(j.a)(C(s, i, n, r, c)(t));
							break
						}
						case o.Db.PROFILE_PRIVATE: {
							const s = Object(d.d)(e, t);
							if (!s) return;
							Object(j.a)(T(s)(r, n)(t));
							break
						}
						case o.Db.PROFILE_MODERATION:
							b && N(t, !0);
							break;
						case o.Db.SETTINGS: {
							const s = e;
							Object(j.a)(H(n, r)(t)), s.match.params.page === o.Qb.Profile && Object(u.j)(t);
							break
						}
						case o.Db.POST_CREATION:
							if (b && l) {
								const e = Object(y.a)(l);
								Object(j.a)(w(e, n, r)(t))
							}
							break;
						case o.Db.POST_DRAFT: {
							const {
								draftId: s
							} = e.match.params, o = Object(a.a)(e.match.params);
							if (!o) return;
							R(t, o, s, n, r);
							break
						}
						case o.Db.SUBREDDIT_WIKI:
							Object(j.a)(q(n, r)(t));
							break;
						case o.Db.COINS:
							Object(j.a)(B(n, r)(t)), Object(j.a)(M()(t));
							break;
						case o.Db.PREMIUM:
							Object(j.a)(F(n, r)(t)), Object(j.a)(U()(t));
							break;
						case o.Db.APPEAL:
							Object(j.a)(W(n, r)(t));
							break;
						case o.Db.INBOX_PAGES:
							b && D(t);
							break;
						case o.Db.MODERATION_PAGES:
							b && A(t, !0, l ? l.subredditName : null, l ? l.profileName : null);
							break;
						case o.Db.COLLECTION_COMMENTS:
							b && z(t, !0);
							break;
						case o.Db.MODQUEUE_PAGES:
							b && L(t, l ? l.subredditName : null, l ? l.profileName : null);
							break;
						case o.Db.SUBREDDIT_LEADERBOARD:
							b && Object(j.a)(G()(t));
							break;
						case o.Db.SEARCH_RESULTS:
							if (b) {
								const o = Object(d.e)(e);
								if (!o) return;
								Object(j.a)(Q(o, Object(g.c)(s()(v && v.queryParams || {}, i.t)), n, r, v)(t))
							}
							break;
						case o.Db.PUBLIC_ACCESS_NETWORK:
							b && Object(j.a)(V()(t));
							break;
						case o.Db.GEOTAGGING:
							b && Object(j.a)(Z()(t));
							break;
						case o.Db.SUBREDDIT_CREATION:
							b && Object(j.a)(K()(t));
							break;
						case o.Db.MOD_LISTING:
							b && Y(t, !0)
					}
				},
				S = (e, t, n, r, s, o) => a => {
					const {
						api: i
					} = a.listings.postOrder, c = !i.error[e] && !i.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...O.defaults(a),
						actionInfo: O.actionInfo(a, {
							success: c
						}),
						customFeed: O.customFeed(a),
						listing: O.listing(a, e, {
							sort: t,
							sortTime: s
						}),
						subreddit: O.subreddit(a),
						timer: O.timer(n, r),
						userSubreddit: O.userSubreddit(a),
						adblock: O.adblock(a),
						postFlair: {
							title: o
						}
					}
				},
				I = (e, t, n, r, s) => o => {
					const a = O.listing(o, e);
					a && (a.sort = t, s && (a.sortTime = s));
					const {
						api: i
					} = o.listings.postOrder, c = !i.error[e] && !i.pending[e];
					return {
						listing: a,
						source: "global",
						action: "view",
						noun: "screen",
						...O.defaults(o),
						actionInfo: O.actionInfo(o, {
							success: c
						}),
						profile: O.profile(o),
						snoovatar: O.snoovatar(o),
						subreddit: O.subreddit(o),
						timer: O.timer(n, r),
						userSubreddit: O.userSubreddit(o),
						adblock: O.adblock(o)
					}
				},
				P = (e, t, n, r, s) => o => {
					const a = O.listing(o, e);
					a && (a.sort = t, s && (a.sortTime = s));
					const {
						api: i
					} = o.listings.postOrder, c = !i.error[e] && !i.pending[e];
					return {
						listing: a,
						source: "global",
						action: "view",
						noun: "screen",
						...O.defaults(o),
						actionInfo: O.actionInfo(o, {
							success: c
						}),
						profile: O.profile(o),
						subreddit: O.subreddit(o),
						timer: O.timer(n, r),
						userSubreddit: O.userSubreddit(o),
						adblock: O.adblock(o)
					}
				},
				C = (e, t, n, r, s) => o => {
					const a = O.profileComments(o, e);
					a && (a.sort = t, s && (a.sortTime = s));
					const {
						api: i
					} = o.profileCommentsPage, c = !i.error[e] && !i.pending[e];
					return {
						listing: a,
						source: "global",
						action: "view",
						noun: "screen",
						...O.defaults(o),
						actionInfo: O.actionInfo(o, {
							success: c
						}),
						profile: O.profile(o),
						subreddit: O.subreddit(o),
						timer: O.timer(n, r),
						userSubreddit: O.userSubreddit(o),
						adblock: O.adblock(o)
					}
				},
				T = e => (t, n) => r => {
					const s = !r.profilePrivatePage.api.error[e] && !r.profilePrivatePage.api.pending[e];
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...O.defaults(r),
						actionInfo: O.actionInfo(r, {
							success: s
						}),
						profile: O.profile(r),
						subreddit: O.subreddit(r),
						timer: O.timer(n, t),
						userSubreddit: O.userSubreddit(r),
						adblock: O.adblock(r)
					}
				},
				k = (e, t, n, r, s, o, a) => i => {
					const {
						api: c
					} = i.pages.comments, d = !c.error[e] && !c.pending[e], l = Object(b.c)(i, {
						postId: t,
						isForceSelected: a
					}), u = {
						source: "global",
						action: "view",
						noun: "screen",
						...O.defaults(i),
						actionInfo: O.actionInfo(i, {
							success: d,
							reason: l || void 0
						}),
						post: O.post(i, t),
						profile: O.profile(i),
						subreddit: O.subreddit(i),
						timer: O.timer(r, s),
						userSubreddit: O.userSubreddit(i),
						adblock: O.adblock(i),
						postEvent: O.postEventI13nSelector(i, {
							postId: t
						}),
						postCollection: O.postCollectionI13nSelector(i, {
							postId: t
						}),
						listing: O.listing(i, void 0, {
							sort: o
						})
					};
					return n && (u.comment = O.comment(i, n)), u
				},
				w = (e, t, n) => r => {
					const s = r.creations.api.page.fetched[e],
						o = r.platform.currentPage ? r.platform.currentPage.queryParams.source_id : void 0;
					return {
						source: "global",
						action: "view",
						noun: "screen",
						...O.defaults(r),
						actionInfo: O.actionInfo(r, {
							success: s
						}),
						post: o ? O.post(r, o) : void 0,
						subreddit: O.subreddit(r),
						timer: O.timer(t, n),
						userSubreddit: O.userSubreddit(r),
						adblock: O.adblock(r)
					}
				},
				N = (e, t) => {
					Object(j.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...O.defaults(e),
						actionInfo: O.actionInfo(e, {
							success: t
						})
					})
				},
				A = (e, t, n, r) => {
					Object(j.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...O.defaults(e),
						actionInfo: O.actionInfo(e, {
							success: t
						}),
						profile: O.profileById(e, Object(f.m)(e, r)),
						subreddit: O.subredditById(e, Object(h.F)(e, n)),
						userSubreddit: O.userSubreddit(e),
						adblock: O.adblock(e)
					})
				},
				L = (e, t, n) => {
					Object(j.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...O.defaults(e),
						profile: O.profileById(e, Object(f.m)(e, n)),
						subreddit: O.subredditById(e, Object(h.F)(e, t)),
						userSubreddit: O.userSubreddit(e),
						adblock: O.adblock(e)
					})
				},
				D = e => {
					Object(j.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...O.defaults(e),
						actionInfo: O.actionInfo(e)
					})
				},
				R = (e, t, n, r, s) => {
					const o = e.creations.api.page.pending[t],
						a = !e.creations.api.page.error[t] && !o && !!n,
						i = Object(x.h)(e, n);
					Object(j.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...O.defaults(e),
						actionInfo: O.actionInfo(e, {
							success: a
						}),
						subreddit: O.subreddit(e),
						timer: O.timer(r, s),
						userSubreddit: O.userSubreddit(e),
						adblock: O.adblock(e),
						...i ? Object(l.m)(e, i) : {}
					})
				},
				B = (e, t) => n => ({
					source: "coins_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(v.c)(v.a.GoldPayment),
					...O.defaults(n),
					timer: O.timer(e, t),
					adblock: O.adblock(n)
				}),
				M = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...O.defaults(e)
				}),
				F = (e, t) => n => ({
					source: "premium_marketing",
					action: "view",
					noun: "page",
					correlationId: Object(v.c)(v.a.GoldPayment),
					...O.defaults(n),
					timer: O.timer(e, t),
					adblock: O.adblock(n)
				}),
				U = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...O.defaults(e)
				}),
				W = (e, t) => n => ({
					source: "appeal",
					action: "view",
					noun: "page",
					...O.defaults(n),
					timer: O.timer(e, t)
				}),
				H = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					...O.defaults(n),
					timer: O.timer(e, t)
				}),
				V = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					subreddit: O.subreddit(e),
					...O.defaults(e)
				}),
				K = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...O.defaults(e)
				}),
				G = () => e => ({
					action: "view",
					source: "global",
					noun: "screen",
					...O.defaults(e)
				}),
				q = (e, t) => n => ({
					source: "global",
					action: "view",
					noun: "screen",
					...O.defaults(n),
					customFeed: O.customFeed(n),
					subreddit: O.subreddit(n),
					timer: O.timer(e, t),
					userSubreddit: O.userSubreddit(n),
					adblock: O.adblock(n)
				}),
				Z = () => e => ({
					source: "global",
					action: "view",
					noun: "screen",
					...O.defaults(e)
				}),
				Q = (e, t, n, r, s, a) => i => {
					let c = !0;
					if (t.type.indexOf(o.Pb.Posts) > -1) {
						const {
							api: t
						} = i.listings.listingOrder;
						c = c && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(o.Pb.Subreddits) > -1 || t.type.indexOf(o.Pb.Users) > -1) {
						const {
							api: t
						} = i.listings.postOrder;
						c = c && !t.error[e] && !t.pending[e]
					}
					const d = O.paneName(i, s),
						l = O.structureType(i, s),
						u = i.platform.currentPage && i.platform.currentPage.urlParams && i.platform.currentPage.urlParams.subredditName ? O.subredditByName(i, i.platform.currentPage.urlParams.subredditName) : void 0;
					return {
						..._.c(i, t),
						source: "global",
						action: "view",
						noun: "screen",
						...O.defaults(i),
						actionInfo: O.actionInfo(i, {
							success: c,
							paneName: d
						}),
						timer: O.timer(n, r),
						search: {
							...O.search(i, t, !0, s || void 0),
							...!!a && {
								originElement: a
							},
							queryId: Object(v.c)(v.a.SearchResults),
							structureType: l,
							subredditId: t.restrict_sr && u && u.id ? u.id : void 0,
							subredditName: t.restrict_sr && u && u.name ? u.name : void 0
						},
						...!!a && {
							correlationId: Object(v.c)(v.a.SearchResults)
						},
						userPreferences: {
							hideNsfw: !i.user.prefs.over18
						}
					}
				},
				z = (e, t) => {
					Object(j.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...O.defaults(e),
						actionInfo: O.actionInfo(e, {
							success: t
						})
					})
				},
				Y = (e, t) => {
					Object(j.a)({
						source: "global",
						action: "view",
						noun: "screen",
						...O.defaults(e),
						actionInfo: O.actionInfo(e, {
							success: t
						})
					})
				}
		},
		"./src/reddit/helpers/trackers/searchResults.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "p", (function() {
				return p
			})), n.d(t, "r", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "t", (function() {
				return h
			})), n.d(t, "s", (function() {
				return y
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "w", (function() {
				return v
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "h", (function() {
				return j
			})), n.d(t, "x", (function() {
				return E
			})), n.d(t, "v", (function() {
				return S
			})), n.d(t, "i", (function() {
				return I
			})), n.d(t, "k", (function() {
				return P
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "j", (function() {
				return T
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "o", (function() {
				return w
			})), n.d(t, "n", (function() {
				return N
			})), n.d(t, "l", (function() {
				return A
			})), n.d(t, "m", (function() {
				return L
			})), n.d(t, "b", (function() {
				return D
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/constants/posts.ts"),
				o = n("./src/reddit/constants/tracking.ts"),
				a = n("./src/reddit/helpers/correlationIdTracker.ts"),
				i = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/telemetry.ts");
			const d = "search",
				l = "search_results_best",
				u = (e, t) => {
					const n = c.subreddit(e);
					return {
						screen: c.screen(e),
						subreddit: n && t && t.restrict_sr ? n : null
					}
				},
				m = (e, t) => n => {
					const r = t;
					return r.structureType = "related", {
						action: e,
						correlationId: Object(a.c)(a.a.SearchResults),
						noun: "related_search",
						source: d,
						search: c.search(n, r),
						...u(n)
					}
				},
				p = (e, t, n, r) => s => ({
					...u(s, n),
					source: d,
					action: "click",
					noun: t,
					actionInfo: c.actionInfo(s, r ? {
						pageType: "search_results_best",
						position: 0
					} : void 0),
					discoveryUnit: r ? c.discoveryUnit(r) : null,
					search: c.search(s, n),
					post: c.post(s, e),
					media: c.media(s, e)
				}),
				b = (e, t, n, r, s) => o => ({
					...C(o, e, t, s, r, n),
					noun: "ad"
				}),
				f = (e, t, n) => s => {
					let o = !0;
					if (t.type.indexOf(r.Pb.Posts) > -1) {
						const {
							api: t
						} = s.listings.listingOrder;
						o = o && !t.error[e] && !t.pending[e]
					}
					if (t.type.indexOf(r.Pb.Subreddits) > -1 || t.type.indexOf(r.Pb.Users) > -1) {
						const {
							api: t
						} = s.listings.postOrder;
						o = o && !t.error[e] && !t.pending[e]
					}
					return {
						...u(s, t),
						source: d,
						action: "view",
						noun: "search_results_post",
						actionInfo: c.actionInfo(s, {
							success: o,
							pageType: "search_results_best",
							position: 0
						}),
						discoveryUnit: c.discoveryUnit(n),
						search: c.search(s, t)
					}
				},
				h = (e, t) => n => ({
					action: "view",
					actionInfo: c.actionInfo(n),
					metaSearch: c.metaSearch(t),
					noun: e,
					screen: c.screen(n),
					search: c.smartSearch(n, t),
					source: d
				}),
				y = (e, t) => n => ({
					action: "click",
					actionInfo: c.actionInfo(n),
					noun: e,
					metaSearch: c.metaSearch(t),
					screen: c.screen(n),
					search: c.smartSearch(n, t),
					source: d
				}),
				g = (e, t, n) => r => ({
					source: d,
					action: "click",
					noun: c.SearchDropdownNouns.Recent,
					actionInfo: c.actionInfo(r, {
						paneName: "subreddit_dropdown",
						position: n + 1
					}),
					search: {
						query: e,
						originPageType: r.platform.currentPage ? c.getPageTypeFromCurrentPage(r.platform.currentPage) : void 0,
						queryId: Object(a.c)(a.a.SearchResults)
					},
					..._(r, t)
				}),
				v = (e, t, n, r) => s => {
					const o = r.filter(e => e.id);
					return {
						source: d,
						action: "click",
						noun: c.SearchDropdownNouns.Typeahead,
						actionInfo: c.actionInfo(s, {
							position: n + 1
						}),
						search: {
							query: t.displayInfo && t.displayInfo.subredditOrProfileName ? t.displayInfo.subredditOrProfileName : e,
							originPageType: s.platform.currentPage ? c.getPageTypeFromCurrentPage(s.platform.currentPage) : void 0,
							queryId: Object(a.c)(a.a.SearchResults),
							typeaheadActive: !0,
							subredditIds: o.map(e => e.id),
							numberSubreddits: o.length
						},
						..._(s, t)
					}
				},
				_ = (e, t) => {
					const n = t.isSubreddit && t.id ? c.subredditForSearch(e, t.id) : void 0,
						r = t.isProfile && t.id ? c.profileForSearch(e, t.id) : void 0,
						s = {
							id: t.id,
							name: t.displayInfo ? t.displayInfo.subredditOrProfileName : void 0
						};
					return {
						subreddit: t.isSubreddit ? n || s : void 0,
						profile: t.isProfile ? r || s : void 0
					}
				},
				x = (e, t, n) => r => ({
					action: t,
					actionInfo: c.actionInfo(r),
					noun: e,
					screen: c.screen(r),
					search: c.search(r, n),
					source: l
				});
			var O;
			! function(e) {
				e.TopResults = "tab_top_results", e.Posts = "tab_posts", e.CommunitiesAndUsers = "tab_communities"
			}(O || (O = {}));
			const j = (e, t) => n => ({
					...u(n, t),
					source: d,
					action: "click",
					noun: e,
					correlationId: Object(a.c)(a.a.SearchResults),
					actionInfo: c.actionInfo(n),
					search: c.search(n, t)
				}),
				E = (e, t) => n => ({
					...u(n, t),
					source: d,
					action: "click",
					noun: e,
					correlationId: Object(a.c)(a.a.SearchResults),
					actionInfo: c.actionInfo(n),
					search: c.search(n, t)
				}),
				S = (e, t) => n => ({
					action: "click",
					correlationId: Object(a.c)(a.a.SearchResults),
					noun: e ? r.Ob.ToSubreddit : r.Ob.ToGlobal,
					search: c.search(n, t),
					source: d
				}),
				I = (e, t, n, r) => s => ({
					...u(s, n),
					source: d,
					action: "click",
					noun: "search_result_post",
					correlationId: Object(a.c)(a.a.SearchResults),
					actionInfo: c.actionInfo(s, {
						relativePosition: c.getRelativePostOrder(s, t, e)
					}),
					search: {
						...c.search(s, n),
						...!!r && {
							originElement: r
						}
					},
					post: c.post(s, t)
				}),
				P = (e, t, n, r, s) => o => C(o, e, t, n, r, s),
				C = (e, t, n, r, s, i) => {
					const l = c.paneName(e, r),
						u = c.postRelativePosition(e, t, s, i),
						m = c.amountOfElementsBeforePost(e, n, s, i, l),
						p = null !== u ? m + u : null,
						b = c.structureType(e, r),
						f = {
							...c.search(e, n, !0, r || void 0),
							structureType: b,
							queryId: Object(a.c)(a.a.SearchResults)
						};
					return {
						source: d,
						action: o.c.CLICK,
						noun: "post",
						actionInfo: r ? {
							pageType: c.getPageTypeFromCurrentPage(r),
							paneName: l,
							position: p,
							relativePosition: u
						} : c.actionInfo(e, {
							paneName: l,
							position: p,
							relativePosition: u
						}),
						search: f,
						post: c.post(e, t),
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: i ? c.discoveryUnit(i) : null
					}
				},
				T = (e, t, n, r, s, o) => a => k(a, e, t, n, r, s, o),
				k = (e, t, n, r, l, u, m) => {
					if (!r) {
						r = Object(i.I)(e, {
							postId: u
						}).belongsTo
					}
					const p = c.paneName(e, n);
					let b, f;
					if (u) {
						b = c.postRelativePosition(e, u, l, m);
						const n = c.amountOfElementsBeforePost(e, t, l, m, p);
						f = null !== b ? n + b : null
					} else {
						b = c.communityRelativePosition(e, r.id, l, m);
						const t = c.amountOfElementsBeforeCommunity(e, l, m);
						f = null !== b ? t + b : null
					}
					const h = c.structureType(e, n),
						y = {
							...c.search(e, t, !0, n || void 0),
							structureType: h,
							queryId: Object(a.c)(a.a.SearchResults)
						};
					return {
						source: d,
						action: o.c.CLICK,
						noun: r.type,
						search: y,
						subreddit: r.type === s.a.SUBREDDIT ? c.subredditForSearch(e, r.id) : void 0,
						profile: r.type === s.a.PROFILE ? c.profileForSearch(e, r.id) : void 0,
						userPreferences: {
							hideNsfw: !e.user.prefs.over18
						},
						discoveryUnit: m ? c.discoveryUnit(m) : null,
						actionInfo: n ? {
							pageType: c.getPageTypeFromCurrentPage(n),
							paneName: p,
							position: f,
							relativePosition: b
						} : c.actionInfo(e, {
							paneName: p,
							position: f,
							relativePosition: b
						}),
						post: u ? c.post(e, u) : void 0
					}
				},
				w = (e, t) => n => ({
					...u(n, e),
					source: d,
					action: "click",
					noun: "search_result_subreddit",
					correlationId: Object(a.c)(a.a.SearchResults),
					actionInfo: c.actionInfo(n),
					search: {
						...c.search(n, e),
						...!!t && {
							originElement: t
						}
					},
					subreddit: c.subreddit(n)
				}),
				N = (e, t, n, r, s) => a => ({
					...C(a, t, n, r, e, s),
					action: o.c.VIEW
				}),
				A = (e, t, n, r) => s => ({
					...u(s, n),
					source: d,
					action: "view",
					noun: "search_results_post",
					correlationId: Object(a.c)(a.a.SearchResults),
					actionInfo: c.actionInfo(s, {
						relativePosition: c.getRelativePostOrder(s, t, e),
						position: c.getAbsoluteOrder(s, t, e)
					}),
					search: {
						...c.search(s, n),
						...!!r && {
							originElement: r
						}
					},
					post: c.post(s, t)
				}),
				L = (e, t, n) => r => ({
					...u(r),
					source: d,
					action: "click",
					noun: `search_result_${e}`,
					correlationId: Object(a.c)(a.a.SearchResults),
					actionInfo: c.actionInfo(r),
					search: {
						...c.search(r, t),
						...!!n && {
							originElement: n
						}
					},
					[e]: c[e](r)
				}),
				D = (e, t) => n => ({
					...u(n, t),
					source: d,
					action: e,
					noun: "covid_banner",
					correlationId: Object(a.c)(a.a.SearchResults),
					actionInfo: c.actionInfo(n),
					search: c.search(n, t)
				})
		},
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					source: e,
					noun: "create_community_button",
					action: "click",
					...s.defaults(t),
					actionInfo: s.actionInfo(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(r.d)(r.a.SubredditCreation, !0)
				}),
				a = (e, t, n) => o => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...s.defaults(o),
					actionInfo: s.actionInfo(o, {
						settingValue: e
					}),
					subreddit: {
						id: n,
						name: t.name,
						publicDescription: t.publicDescription,
						nsfw: t.over18,
						accessType: t.type,
						topicTagContents: t.allTags,
						topicTagPrimaryId: t.primaryTagId
					},
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				i = () => e => ({
					source: "community_form",
					noun: "cancel",
					action: "click",
					...s.defaults(e),
					actionInfo: s.actionInfo(e),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				}),
				c = e => t => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...s.defaults(t),
					actionInfo: s.actionInfo(t, {
						reason: e
					}),
					correlationId: Object(r.c)(r.a.SubredditCreation)
				})
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, n) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				l = n.n(d);
			const u = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(i.a)();
				return s.a.createElement("i", {
					className: Object(o.a)(e.className, Object(c.b)(t ? "coins" : "coin", e.isFilled)),
					style: {
						color: e.fillColor || a.b.gold
					}
				})
			}, "CoinIcon", l.a);
			t.a = u
		},
		"./src/reddit/icons/svgs/Chat/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: e.viewBox || "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M10,0A10,10,0,0,0,1.64,15.51L.57,18.73c-.16.52.19.86.7.7l3.22-1.08A10,10,0,1,0,10,0ZM5.54,11.41A1.39,1.39,0,1,1,6.93,10,1.39,1.39,0,0,1,5.54,11.41Zm4.46,0A1.39,1.39,0,1,1,11.39,10,1.39,1.39,0,0,1,10,11.41Zm4.44,0A1.39,1.39,0,1,1,15.83,10,1.39,1.39,0,0,1,14.44,11.41Z"
			}))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/CirclePost/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				viewBox: "0 0 56 56",
				xmlns: "http://www.w3.org/2000/svg",
				className: e.className
			}, s.a.createElement("g", {
				transform: "translate(1 1)",
				fill: "inherit",
				stroke: "inherit",
				fillRule: "evenodd"
			}, s.a.createElement("rect", {
				x: "16",
				y: "35",
				width: "22.4",
				height: "2.8",
				rx: "1.4",
				stroke: "none"
			}), s.a.createElement("path", {
				d: "M20.4 34.08h3.96c.372 0 .727-.147.99-.41l11.32-11.32a1.398 1.398 0 0 0 0-1.98l-3.96-3.96a1.398 1.398 0 0 0-1.98 0L19.41 27.73c-.263.263-.41.618-.41.99v3.96a1.4 1.4 0 0 0 1.4 1.4"
			}), s.a.createElement("circle", {
				strokeWidth: "2",
				fill: "none",
				cx: "27",
				cy: "27",
				r: "27"
			})))
		},
		"./src/reddit/icons/svgs/DownToChatAvatar/index.m.less": function(e, t, n) {
			e.exports = {
				cls1: "_27ZvSsL0zi1nAja8nD5wM8",
				cls3: "qXtY7I_GoiY3yZuQSiIxk",
				cls4: "_2CRPf4Bo0p7KCRDFYv6WzO",
				cls5: "_2dYeHLcTCSuVCgU8GN_pWV",
				cls7: "_3vSXIQsi-G_3bo41eaYRjh",
				cls6: "_1mQOm7u0X9LlZoCnM5HHkJ",
				cls8: "_3fxIhlHWNlaXwlNMXtCZ-x",
				cls9: "_1L0T9MQ7u60GxCoL3DFJ4Z",
				cls10: "_1xlX8IJ47jyoodC4L9co14"
			}
		},
		"./src/reddit/icons/svgs/DownToChatAvatar/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/icons/svgs/DownToChatAvatar/index.m.less"),
				a = n.n(o);

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", i({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 60 60"
			}, e), s.a.createElement("g", null, s.a.createElement("g", {
				className: a.a.cls2
			}, s.a.createElement("path", {
				className: a.a.cls3,
				d: "M54.44-5.35A67.31,67.31,0,0,0,4,.77C-.47,3.27-4.7,6.36-7.69,10.5a20.47,20.47,0,0,0-3.52,7.88c-.5,2.47.23,5.13-.42,7.5-1.35,4.89-4.93,7.56-2.79,13.24,1.48,3.91,4.7,6.91,8.14,9.3,8.24,5.74,16.53,2.11,25.37-.67,2.62-.83,5.23-1.64,7.79-2.6C29.14,44.3,31,42.79,33.27,42a62.83,62.83,0,0,0,8.3-3.39c2.54-1.31,5-2.73,7.69-3.79,2.38-1,5.11-1.82,6.28-4.1a7.74,7.74,0,0,0,.55-4.13c-.39-4.63-2.17-9-4-13.32a40.17,40.17,0,0,0-2-4.36c-.7-1.23-1.82-2.26-2.42-3.52-1.1-2.3-1.37-5.4-2-7.87"
			}), s.a.createElement("path", {
				className: a.a.cls4,
				d: "M48.81.61C39.94,7.54,37.18,9.26,25.05,16.13,29.21,19,45.38,26.28,53.92,29.28,42.46,33.81,12.15,41-1.85,44.74c3,1.76,8.22,7.79,10.8,10.14,4,3.65,8.39,9.47,14.32,9.42a60.26,60.26,0,0,0,18-2.54c8.83-2.84,17.6-7.09,23.31-14.39a29.94,29.94,0,0,0,1.2-35.32C64.61,10.32,63,7.79,61.09,6.94,59,6,55.46,6.22,53.16,6.16"
			}), s.a.createElement("path", {
				className: a.a.cls5,
				d: "M20,30.71A9.26,9.26,0,0,0,24.77,36a4,4,0,0,1,1.48.85,2,2,0,0,1-.12,2.48,3.39,3.39,0,0,1-2.4,1.05C20.55,40.62,18,37.7,17,35"
			}), s.a.createElement("path", {
				d: "M17,35c.11.06.44.91,1,1.78A8.17,8.17,0,0,0,20,38.84a5.9,5.9,0,0,0,3.24,1.21A3,3,0,0,0,26,38.73a1.63,1.63,0,0,0,.09-1.2,1.46,1.46,0,0,0-.87-.79,12.78,12.78,0,0,1-1.4-.68,7.84,7.84,0,0,1-1.26-.92,9.52,9.52,0,0,1-2.69-4.38c.4.52.94,1.26,1.49,1.9s1.1,1.18,1.37,1.48a6.64,6.64,0,0,0,1.86,1.5c.64.37,1.57.59,2,1.41a2.25,2.25,0,0,1-.23,2.3,3.27,3.27,0,0,1-1.83,1.14,5.52,5.52,0,0,1-2,.08A6.16,6.16,0,0,1,20.74,40a7.49,7.49,0,0,1-2.5-2.24A8.31,8.31,0,0,1,17,35Z"
			}), s.a.createElement("path", {
				className: a.a.cls5,
				d: "M5.87,46.65c3.07,2.59,7.08,2.88,9,.65s.91-6.13-2.16-8.72-7.08-2.88-9-.65"
			}), s.a.createElement("path", {
				className: a.a.cls5,
				d: "M5.41,46.45a3.56,3.56,0,0,1-2-2.69,10.5,10.5,0,0,1,.08-3.49A49.24,49.24,0,0,1,4.83,34,17.67,17.67,0,0,1,7.46,28.7a7.51,7.51,0,0,1,1.11-1.4c2.33-2.22,6.24-2.2,9.1-1.16,1.81.66,1.81,2.12,1.85,4a22.8,22.8,0,0,1-3.69,13.5"
			}), s.a.createElement("path", {
				d: "M15.82,43.62c0-.23,1.08-1.83,1.86-3.9a21.21,21.21,0,0,0,1.37-5.9,31.42,31.42,0,0,0,.05-3.77C19,28.76,19,27.39,18,26.87a6.76,6.76,0,0,0-1.73-.59A11.13,11.13,0,0,0,14.41,26a8.46,8.46,0,0,0-3.61.55,5.48,5.48,0,0,0-2.38,1.8,30.74,30.74,0,0,0-1.72,2.7,13.79,13.79,0,0,0-1.23,2.83c-.29,1-.57,2-.82,3a34.3,34.3,0,0,0-1,5.53A5,5,0,0,0,4,44.75a3,3,0,0,0,1.44,1.54A2.91,2.91,0,0,1,3.61,45a5.42,5.42,0,0,1-.78-2.73,17.89,17.89,0,0,1,.47-4.49c.23-.89.48-1.75.74-2.6a25.31,25.31,0,0,1,.84-2.5A23.26,23.26,0,0,1,7.4,28.29a6.69,6.69,0,0,1,3.86-2.73,10.58,10.58,0,0,1,4.43-.19,12.31,12.31,0,0,1,2,.52,2.7,2.7,0,0,1,1.66,1.39,5.41,5.41,0,0,1,.4,2c0,.64,0,1.27,0,1.89a22.8,22.8,0,0,1-1,6.9,17.41,17.41,0,0,1-1.51,3.35A20.12,20.12,0,0,1,15.82,43.62Z"
			}), s.a.createElement("path", {
				className: a.a.cls6,
				d: "M10.91,28.22a24.4,24.4,0,0,1,.94,2.63l-.25,0,0-3.11.35,0a10.52,10.52,0,0,0,1.83,4.62l-.44.21-.06-.16a15.52,15.52,0,0,1-.74-4.24l.7-.07A12.81,12.81,0,0,0,15.88,33l-.75.44a14,14,0,0,1-1.36-4.9l.89-.28.94,1.55,1.61,2.67L16.3,33a36.05,36.05,0,0,1-1.14-4.52l1-.28a21,21,0,0,0,2,4l-.82.42a18.77,18.77,0,0,1-.9-3.54l.77-.26a10.37,10.37,0,0,0,2,2.81l-.5.4a11.41,11.41,0,0,1-1.05-2.72L18,29a21,21,0,0,0,1.7,2.24,13.32,13.32,0,0,1-2-1.95l.29-.17a13.85,13.85,0,0,0,1.26,2.49l-.59.46a9.8,9.8,0,0,1-2.29-2.9l1-.32.14.81a16.84,16.84,0,0,0,.66,2.59l-.71.36a22.75,22.75,0,0,1-2-4.15l.53-.16A35.93,35.93,0,0,0,17,32.74l-.38.18-2.54-4.28.37-.12a13.27,13.27,0,0,0,1.27,4.68l-.36.22a13,13,0,0,1-2.67-5.2l.52,0a15.76,15.76,0,0,0,.69,4.26l-.51.24a10.5,10.5,0,0,1-1.68-4.08c0-.25-.1-.53-.13-.78l.49,0c-.06,1.18-.15,2.57-.23,3.11l-.21,0C11.18,29.33,11,28.52,10.91,28.22Z"
			}), s.a.createElement("path", {
				className: a.a.cls5,
				d: "M3.23,34.05a4.89,4.89,0,0,1-.36-3.11,3.82,3.82,0,0,1,1.51-2.23A9.28,9.28,0,0,1,7,27.61c1.08-.33,4.74.59,5.06,1.91"
			}), s.a.createElement("path", {
				d: "M12,29.52a2.66,2.66,0,0,0-.88-.81,5.79,5.79,0,0,0-1.62-.61,8.19,8.19,0,0,0-2.14-.18,7.18,7.18,0,0,0-1,.31c-.35.13-.69.27-1,.42a3.82,3.82,0,0,0-2.12,2.47A5.56,5.56,0,0,0,3.33,34a2.38,2.38,0,0,1-.84-1.29,2.92,2.92,0,0,1-.13-1.37,4.44,4.44,0,0,1,1.71-2.64,8.54,8.54,0,0,1,2.44-1.12,2.85,2.85,0,0,1,1.22-.23,6.87,6.87,0,0,1,1.14.12,6.47,6.47,0,0,1,2,.66,3,3,0,0,1,.86.68A1.2,1.2,0,0,1,12,29.52Z"
			}), s.a.createElement("path", {
				d: "M33.11,8.69a1.12,1.12,0,0,1-.62.29,2.35,2.35,0,0,1-1.41-.18,10.13,10.13,0,0,1-2.31-1.75,15.24,15.24,0,0,0-1.32-1,3,3,0,0,0-.67-.33A3.76,3.76,0,0,0,26,5.53a2.73,2.73,0,0,0-2.45,1.25,7.65,7.65,0,0,0-1.28,5A4.77,4.77,0,0,0,23,14a3.39,3.39,0,0,0,1.54,1.23,2.65,2.65,0,0,1-2.41-.6,3.4,3.4,0,0,1-1.18-2,9.6,9.6,0,0,1,.81-4.89,5.25,5.25,0,0,1,3-3,3.88,3.88,0,0,1,3.69.94c.88.78,1.53,1.6,2.22,2.19A4,4,0,0,0,32,8.6,2.65,2.65,0,0,0,33.11,8.69Z"
			}), s.a.createElement("path", {
				className: a.a.cls5,
				d: "M31,23.45c2.42-1.82,3.32-5.73,1.55-8.22-1.05-1.42-2.65-3-4.56-1.87"
			}), s.a.createElement("path", {
				d: "M28,13.36a1.62,1.62,0,0,1,1.2-.55,3.21,3.21,0,0,1,1.86.48,6.08,6.08,0,0,1,1.83,1.57,5.44,5.44,0,0,1,1.07,2.33,6.28,6.28,0,0,1-.59,4,5.42,5.42,0,0,1-2.26,2.37c.38-.87.87-2.13,1.13-2.53a5.16,5.16,0,0,0,1-2.64,4.64,4.64,0,0,0-.5-2.46,6.89,6.89,0,0,0-1.42-1.71,4.24,4.24,0,0,0-1.59-.93,3.43,3.43,0,0,0-1-.11A4.12,4.12,0,0,0,28,13.36Z"
			}), s.a.createElement("path", {
				className: a.a.cls5,
				d: "M10.38,7.68c7.31-2.53,18.18,1.32,20.67,9,1.08,4.27.9,10.19-2.53,12.84C19.77,36.32-1.84,26.59,5,13.93"
			}), s.a.createElement("path", {
				d: "M5,13.94a4.44,4.44,0,0,1-.23.64l-.25.58-.24.77A9.27,9.27,0,0,0,4,20.23a9.85,9.85,0,0,0,2.09,4.48,15.11,15.11,0,0,0,3,2.79,21.66,21.66,0,0,0,10.81,3.74,14.5,14.5,0,0,0,5.76-.73,10.08,10.08,0,0,0,2.48-1.35,6.26,6.26,0,0,0,1.7-2.06A11.24,11.24,0,0,0,31,22.48a19.33,19.33,0,0,0-.34-4.81,9.91,9.91,0,0,0-2-4.11,13.61,13.61,0,0,0-3.28-3.06,16.91,16.91,0,0,0-3.84-2,19.08,19.08,0,0,0-4-1.06,16.86,16.86,0,0,0-7.2.39A14.78,14.78,0,0,1,18,6.69a17.43,17.43,0,0,1,6.54,2,15.24,15.24,0,0,1,5.83,5.65l.47.87.36.93a4.33,4.33,0,0,1,.28.93c.08.32.13.63.18.95a20.43,20.43,0,0,1,.26,3.72,11.81,11.81,0,0,1-2,6.79,7.54,7.54,0,0,1-2.67,2.14,11.17,11.17,0,0,1-3.11,1.08,19.94,19.94,0,0,1-11.83-1.65,15.78,15.78,0,0,1-7.82-6.94,9.27,9.27,0,0,1-.85-2.56,8.88,8.88,0,0,1,0-2.91A10.92,10.92,0,0,1,5,13.94Z"
			}), s.a.createElement("path", {
				className: a.a.cls6,
				d: "M5.47,18.27a2.52,2.52,0,0,1-.57.46v-.18a2.68,2.68,0,0,1,.69.6l.09.11s-.07.07-.11.11l-.21.2-.22.2c-.09.09,0,.2.11.22l.28.11.7.27.79.31-.84.14a.69.69,0,0,0-.18,0,.72.72,0,0,0-.25.17l-.07.09.17,0,.13,0h.07l.09,0,.77.26,1,.33-1,.44c-.33.14-.27.19-.31.21l.06,0h0l.11,0,.93.36.86.33-.8.51-.14.09s0,0,0,0l1.19.35.71.2L9.15,25c-.1.15-.06.1-.08.11l0,0s0,0,0,0h0l.24.06c.35.08.68.14,1,.19l.52.08-.19.45c0,.07-.1.19-.12.21a.07.07,0,0,1,0,0l-.09.08a.43.43,0,0,0-.09.1l0,.06h.63a6,6,0,0,1,1,.08c-.31.07-.62.19-1,.3a15.8,15.8,0,0,1-1.72.39c0-.06,0-.07,0-.16l0-.22a2.22,2.22,0,0,1,.1-.41,2.38,2.38,0,0,1,.34-.51,1.42,1.42,0,0,0,.14-.22l0-.08.41.67a2.73,2.73,0,0,1-.49-.07l-1-.25L8,25.79c-.22-.05-.51-.08-.56-.15.24-.2.53-.46.73-.66a4,4,0,0,1,.32-.46l.18.45-.89-.29-1.06-.33-.51-.19c-.08,0,0,0,0-.08L6.38,24l.2-.19a5.93,5.93,0,0,1,.87-.62l0,.34-1-.38a10,10,0,0,1-1.17-.5c.59-.35.94-.87,1.36-1v.42l-.86-.3a6.78,6.78,0,0,1-1.11-.46l-.22-.12c0-.06.12-.13.17-.19a3.19,3.19,0,0,1,.4-.33,2.44,2.44,0,0,1,.51-.26,2.16,2.16,0,0,1,.53-.12l-.06.54-.72-.32c-.11-.06-.33-.14-.47-.23A.6.6,0,0,1,4.59,20c-.13-.38.79-.81.61-.78A1.28,1.28,0,0,0,5,18.94l-.22-.25-.06-.07.06,0A6.68,6.68,0,0,1,5.47,18.27Z"
			}), s.a.createElement("path", {
				className: a.a.cls5,
				d: "M14.41,9.83C15,6.68,10.85,5.27,7.89,6.28c-4.72,1.16-5.22,10.26.6,9.54"
			}), s.a.createElement("path", {
				d: "M8.49,15.83a3.38,3.38,0,0,1-2,0,7.27,7.27,0,0,1-.75-.35c-.21-.17-.43-.34-.63-.52l-.46-.58c-.12-.19-.2-.38-.29-.53A6.29,6.29,0,0,1,5.87,6.7a4.64,4.64,0,0,1,1.49-.86,6.7,6.7,0,0,1,1.57-.4A6.78,6.78,0,0,1,12,5.76,4.29,4.29,0,0,1,14.3,7.48a2.85,2.85,0,0,1,.27,2.38,3.2,3.2,0,0,0-1-2A6.68,6.68,0,0,0,12.12,7a5.48,5.48,0,0,0-4.26-.4A4.32,4.32,0,0,0,5.06,9.1c-1,2.27-.52,4.79.89,5.88a4.64,4.64,0,0,0,.61.38,4.6,4.6,0,0,0,.76.29C7.84,15.78,8.33,15.79,8.49,15.83Z"
			}), s.a.createElement("path", {
				className: a.a.cls5,
				d: "M33.24,5.42c-4-.29-4.62,6.08-.28,6.25C36.81,11.83,37,5.5,33.24,5.42Z"
			}), s.a.createElement("path", {
				d: "M33.24,5.42a2.17,2.17,0,0,1,1.67.41A3.4,3.4,0,0,1,36.18,8a3.79,3.79,0,0,1-.79,3.15,3,3,0,0,1-1.55.91,4.4,4.4,0,0,1-.88.1L32.11,12a3.24,3.24,0,0,1-2.3-1.81,3.81,3.81,0,0,1-.12-2.75,3.34,3.34,0,0,1,1.55-1.9,3.21,3.21,0,0,1,2-.3,4.63,4.63,0,0,0-1.7.89,5.56,5.56,0,0,0-.85,1.21,2.77,2.77,0,0,0,.35,3.33,2.51,2.51,0,0,0,1.5.71l.42.06.4,0a2.65,2.65,0,0,0,.75-.17A2.79,2.79,0,0,0,35.65,9a3.62,3.62,0,0,0-.5-2.38,2.81,2.81,0,0,0-1-.87l-.3-.16-.28-.08Z"
			}), s.a.createElement("path", {
				className: a.a.cls4,
				d: "M16.13,19.35A2.7,2.7,0,0,1,14,16a3.25,3.25,0,0,1,3.21-2.54C21.33,13.66,19.73,20.06,16.13,19.35Z"
			}), s.a.createElement("path", {
				d: "M16.13,19.34a4.16,4.16,0,0,0,1.53-.27,3,3,0,0,0,1.43-1.56,3.28,3.28,0,0,0,0-2.59A2.19,2.19,0,0,0,17,13.76a3.09,3.09,0,0,0-2.77,2.78,2.49,2.49,0,0,0,.51,1.78,2.73,2.73,0,0,0,1.39.92,2.28,2.28,0,0,1-1.8-.64A2.35,2.35,0,0,1,13.57,17a3.82,3.82,0,0,1,2-3.33,3.11,3.11,0,0,1,3.32.23,2.45,2.45,0,0,1,.56.6,3.55,3.55,0,0,1,.29.74,3.37,3.37,0,0,1,0,1.48A3.57,3.57,0,0,1,18.43,19a2.37,2.37,0,0,1-1.31.49l-.34,0-.29,0Z"
			}), s.a.createElement("path", {
				className: a.a.cls4,
				d: "M27,21.4c-.36-1,.07-4.84,2-3.82,1.28.7.19,4-.82,4.55C27.59,22.45,27.22,22,27,21.4Z"
			}), s.a.createElement("path", {
				d: "M27,21.4c.08,0,.22.54.64.7s.83-.5,1-.76a6.26,6.26,0,0,0,.54-1.7A2.21,2.21,0,0,0,29,18.07c0-.08-.13-.11-.19-.16l-.28-.11a.59.59,0,0,0-.45.09A2.21,2.21,0,0,0,27.41,19a6.12,6.12,0,0,0-.31,2.4,2.86,2.86,0,0,1-.43-2.3,4.87,4.87,0,0,1,.61-1.23,1.28,1.28,0,0,1,1.2-.58,1.31,1.31,0,0,1,1,.69,2.24,2.24,0,0,1,.2,1.09A5.3,5.3,0,0,1,29.25,21a2.62,2.62,0,0,1-1.1,1.37.72.72,0,0,1-.53,0,.7.7,0,0,1-.4-.35A1.49,1.49,0,0,1,27,21.4Z"
			}), s.a.createElement("path", {
				d: "M26.34,24.19a12.22,12.22,0,0,1-5.91-.48,7.19,7.19,0,0,1-2.56-1.88s-.17,2-.17,2.13c0,2.74,2.73,4.42,5,2.55.55-.46,1.67-1.5,2.19-2"
			}), s.a.createElement("path", {
				d: "M24.85,24.51a9,9,0,0,1-1.28,1.37,13.06,13.06,0,0,1-1.09,1,3.48,3.48,0,0,1-1.12.57A3,3,0,0,1,18,26.31a4,4,0,0,1-.74-1.77l0-.48c0-.17,0-.33,0-.47l.06-.91a5.79,5.79,0,0,1,.07-.76l.05-.15c0-.05.06,0,.09-.05l.16,0,.07,0h0l-.09-.25h0c0-.06,0-.17.07-.18a.44.44,0,0,1,.2.07l.26.25a7,7,0,0,0,2.2,1.69,8.15,8.15,0,0,0,2.08.62,21.63,21.63,0,0,0,3.79.22,7.62,7.62,0,0,1-2.15.62,5.55,5.55,0,0,1-2,0,8.76,8.76,0,0,1-2.31-.87,9.56,9.56,0,0,1-1-.66l-.43-.36c-.14-.13-.15-.16-.24-.25l-.16-.17a.27.27,0,0,0-.07-.08s0,.06,0,.1l0,.43a8.66,8.66,0,0,0-.07,1.35,3.18,3.18,0,0,0,1,2.21,2.58,2.58,0,0,0,2,.65,3.46,3.46,0,0,0,1.77-.88C23.35,25.56,24.6,24.68,24.85,24.51Z"
			}), s.a.createElement("path", {
				className: a.a.cls4,
				d: "M19,39.36C12.27,41.12,3.41,42.68-3.4,44.22a48.19,48.19,0,0,0,10.83,9,5.38,5.38,0,0,0,1.68.65,5.09,5.09,0,0,0,3.5-1.07A27.16,27.16,0,0,0,18,47.76Q20.38,45,22.6,42.1"
			}), s.a.createElement("path", {
				className: a.a.cls5,
				d: "M26.84,53.17a5.89,5.89,0,0,1-1.51-.63A2.4,2.4,0,0,1,24,50.1a2.1,2.1,0,0,1,1.21-1.28,6.69,6.69,0,0,1,1.77-.4,42.66,42.66,0,0,0,6.51-1.5c1-.3,1.48.1,1.87,1.06a3,3,0,0,1-.08,2.38c-1,2.21-3.9,2.87-6.12,3A7.19,7.19,0,0,1,26.84,53.17Z"
			}), s.a.createElement("path", {
				d: "M26.85,53.16a12.24,12.24,0,0,0,2.52.05,9.91,9.91,0,0,0,3.42-.88A5.13,5.13,0,0,0,34.45,51a3,3,0,0,0,.71-1.92,2.41,2.41,0,0,0-.21-1,1.67,1.67,0,0,0-.52-.76.92.92,0,0,0-.76,0l-1.09.34a37.62,37.62,0,0,1-3.84.93c-.63.12-1.27.21-1.89.29a5.35,5.35,0,0,0-1.62.39,1.39,1.39,0,0,0-.57,2.26A4.51,4.51,0,0,0,26.88,53a3.79,3.79,0,0,1-2.79-1.19,2.13,2.13,0,0,1-.58-1.68A1.88,1.88,0,0,1,24.16,49a3.44,3.44,0,0,1,1.63-.72c.55-.1,1.05-.12,1.55-.18,1-.12,1.94-.28,2.86-.47s1.8-.42,2.64-.67a4,4,0,0,1,1.34-.27,1.42,1.42,0,0,1,1.13.8,3.33,3.33,0,0,1,.36,2.48,4.14,4.14,0,0,1-1.28,2,7.48,7.48,0,0,1-3.85,1.55,9.11,9.11,0,0,1-2.17,0A5.72,5.72,0,0,1,26.85,53.16Z"
			}), s.a.createElement("path", {
				className: a.a.cls7,
				d: "M29.83,58c-.66,2.08.89,5,5.59,6.51,4.37,1.41,7.12-1.27,7.78-3.36s-1.64-3-5.4-4.18S30.48,55.9,29.83,58Z"
			}), s.a.createElement("path", {
				className: a.a.cls5,
				d: "M42.73,62.91c.38-.17.38-.7.35-1.12-.16-2.17.54-4.3,1.05-6.42a35.6,35.6,0,0,0,.75-4.1A5.9,5.9,0,0,0,38,44.81a8.09,8.09,0,0,0-4.88,2.93A13.74,13.74,0,0,0,30.56,53c-.5,1.84-1.62,6-1,8"
			}), s.a.createElement("path", {
				d: "M29.56,61a2.86,2.86,0,0,1-.29-1.19,12.94,12.94,0,0,1,.13-2.54,51.74,51.74,0,0,1,1.12-5.18A11.88,11.88,0,0,1,34,46.19a8.46,8.46,0,0,1,3.19-1.76,6.94,6.94,0,0,1,3.62,0,6.25,6.25,0,0,1,4.62,7.1l-.52,2.65c-.29,1.74-.9,3.29-1.22,4.76a13.73,13.73,0,0,0-.33,2.11c0,.35,0,.66,0,1a1.78,1.78,0,0,1-.1.55.74.74,0,0,1-.41.44.91.91,0,0,0,.27-1c-.06-.33-.15-.69-.19-1.07a11.15,11.15,0,0,1,0-2.38,32.73,32.73,0,0,1,.72-3.75l.52-2.2a13.22,13.22,0,0,0,.4-2.13,5.22,5.22,0,0,0-1.31-3.69A5.58,5.58,0,0,0,40,45.07a6.12,6.12,0,0,0-3.53.45,9.37,9.37,0,0,0-4.48,4.66,30.36,30.36,0,0,0-1.75,5.56c-.2.85-.48,2-.62,3A6.91,6.91,0,0,0,29.56,61Z"
			}), s.a.createElement("path", {
				className: a.a.cls6,
				d: "M37.27,49a1.25,1.25,0,0,1-.07.34l-.06-.06.64-.33.49-.25.07,0s0,0,0,.06l0,.15.07.31.07.4s0,.12,0,.13l.12-.1a.94.94,0,0,0,.25-.3,5.09,5.09,0,0,0,.29-.7s.09.15.14.25l.5,1.35-.34-.05.1-.18,0-.09a1.54,1.54,0,0,0,.08-.19A9.75,9.75,0,0,0,40,48.48c.14.26.34.85.54,1.21l.08.15,0,.08.1.15.21.29-.45.11,0-.17,0-.26a6.58,6.58,0,0,0,0-.78,1.2,1.2,0,0,0,.25-.14l.28,0,.61,1.1.28.51-.55.11a3.38,3.38,0,0,0-.32-1.7l.53-.28a12.64,12.64,0,0,0,1.25,1.89l-.46.25a8.24,8.24,0,0,0-.31-.92c0-.09-.15-.39-.26-.62l-.33-.66,1.31.51.66.28-.18.2a1.76,1.76,0,0,0-.69-.75,1.58,1.58,0,0,1,.91.63l.16.23-.29-.07-.79-.19c-.13,0-.12,0-.12,0l.06.05s0,.08.07.15l.07.2a7.91,7.91,0,0,1,.22.78l-.42.23a13.67,13.67,0,0,1-1.26-2l.28-.14a3.85,3.85,0,0,1,.32,1.94l0,.39-.18-.34-.53-1c-.06-.09-.12-.22-.16-.28V50a3.51,3.51,0,0,1-.05.55l0,.29-.18-.23c-.15-.19-.32-.46-.41-.6l-.09-.17,0-.09,0,0v0a1.3,1.3,0,0,1-.29.63l-.18.25-.1-.3-.23-.68-.06-.15s0-.16,0-.06l-.07.14-.06.07a1.35,1.35,0,0,1-.17.17,2.07,2.07,0,0,1-.4.28l-.1.06,0-.11,0-.22c0-.28-.09-.56-.1-.67a1.38,1.38,0,0,0,0-.2L38,49c-.35.13-.72.27-.86.31h0v0Z"
			}), s.a.createElement("path", {
				d: "M44,28.63c0-.21,1.82-1.47,2.41-2.09s1.17-1.11,1.64-1.63c.25-.33.15-.3.14-.34a.06.06,0,0,0-.06,0l-.59,0-.54,0a2,2,0,0,1-.93-.08.89.89,0,0,1-.48-.6,1.08,1.08,0,0,1,.16-.8,8.24,8.24,0,0,1,.81-1c.22-.24.45-.47.68-.69a12.6,12.6,0,0,1,2.67-2A7.94,7.94,0,0,1,48.24,22,12.13,12.13,0,0,0,47,23l-.41.4c-.08.08-.17.27,0,.35a1.26,1.26,0,0,0,.4,0l.7,0H48a1.7,1.7,0,0,1,.45,0,.64.64,0,0,1,.49.64,1.28,1.28,0,0,1-.26.78,2.75,2.75,0,0,1-.45.5l-.87.79a17.69,17.69,0,0,1-1.69,1.29A9.78,9.78,0,0,1,44,28.63Z"
			}), s.a.createElement("path", {
				className: a.a.cls5,
				d: "M39,27.34a5,5,0,0,0-2-2.39,3.14,3.14,0,0,0-1.32-.26,4.73,4.73,0,0,0-3.19,1.2A4.45,4.45,0,0,0,31,29.06c0,.18.05,1.71.15.5"
			}), s.a.createElement("path", {
				d: "M31.12,29.56c.05,0,.08.17.08.39a.87.87,0,0,0,0,.1v0s0,0-.09.07a.14.14,0,0,1-.15,0l0,0s0-.06,0-.08a1.62,1.62,0,0,1,0-.19c0-.14,0-.28,0-.43a5.21,5.21,0,0,1,.11-1.69,4.16,4.16,0,0,1,1-2,5,5,0,0,1,3.85-1.63,3.32,3.32,0,0,1,1.87.62,4.8,4.8,0,0,1,1.51,2.58,6.84,6.84,0,0,1-1.2-.81,5,5,0,0,1-.78-.65A2.31,2.31,0,0,0,35,25a3.78,3.78,0,0,0-2.07.78,4.64,4.64,0,0,0-1.67,3.09l-.12.92,0,.11v0h0a.13.13,0,0,0-.08,0c-.05,0,0,0-.09,0s0-.11,0-.16Z"
			}), s.a.createElement("path", {
				className: a.a.cls5,
				d: "M43.74,49.05a2.43,2.43,0,0,1,2.42.74,5,5,0,0,1,1.39,2,3.31,3.31,0,0,1-.06,2.44,4,4,0,0,1-1.33,1.44,3.07,3.07,0,0,1-1.77.73A2.59,2.59,0,0,1,43.11,56a4,4,0,0,1-1.69-2.2c-.28-.93-1.57-1.62-1-2.38"
			}), s.a.createElement("path", {
				d: "M40.39,51.4c0,.06-.08.24,0,.47a2.55,2.55,0,0,0,.59.82,3.34,3.34,0,0,1,.71,1.12,2.9,2.9,0,0,0,.48.82,3.47,3.47,0,0,0,2.12,1.25A3.48,3.48,0,0,0,46.4,54.7a2.86,2.86,0,0,0,.15-3.64c-.71-1.13-1.78-2.06-2.74-1.84a1.18,1.18,0,0,1,.8-.44,2.49,2.49,0,0,1,1.14.15A3.2,3.2,0,0,1,47.22,50a4.59,4.59,0,0,1,.65,4,3.53,3.53,0,0,1-1.11,1.49,6.88,6.88,0,0,1-1.41.93,2.26,2.26,0,0,1-1.67.12,3.92,3.92,0,0,1-1.34-.77,4.18,4.18,0,0,1-.91-1.11A10.05,10.05,0,0,1,41,53.55c-.15-.29-.46-.71-.67-1.16a1.07,1.07,0,0,1-.11-.66A.74.74,0,0,1,40.39,51.4Z"
			}), s.a.createElement("path", {
				className: a.a.cls5,
				d: "M56.48,39.84c.38-4-2.18-6.9-5.12-9.28a18.11,18.11,0,0,0-9.42-4.16,12.74,12.74,0,0,0-5.16.5,14.25,14.25,0,0,0-4.75,3,12.39,12.39,0,0,0-1.86,1.76,8,8,0,0,0-1.43,6.52c1.18,6,7.6,9.65,13,10.63,3.43.62,7.43.64,10.55-1.44C54.39,46,56.09,43.85,56.48,39.84Z"
			}), s.a.createElement("path", {
				d: "M56.49,39.84a8.51,8.51,0,0,1-.28,2.25A9,9,0,0,1,54,46.23a10.28,10.28,0,0,1-4.71,2.71,16,16,0,0,1-4.44.49,20.28,20.28,0,0,1-11.86-4,13,13,0,0,1-4.15-5.13,9.89,9.89,0,0,1-.53-1.59A7.59,7.59,0,0,1,28,37.07a9.05,9.05,0,0,1,.35-3.28,8,8,0,0,1,1.33-2.57,13.92,13.92,0,0,1,2-1.92,15.09,15.09,0,0,1,4.61-2.9A14.24,14.24,0,0,1,46.57,27a21.82,21.82,0,0,1,7.49,5.49,11.09,11.09,0,0,1,2.19,3.58,8.23,8.23,0,0,1,.41,3.76,9,9,0,0,0-.86-3.6,11.66,11.66,0,0,0-2.53-3.34,29.35,29.35,0,0,0-5.55-4.05A14.75,14.75,0,0,0,40,26.74a11.51,11.51,0,0,0-3.8.74,12.83,12.83,0,0,0-3.22,2A14.5,14.5,0,0,0,30.23,32a7.09,7.09,0,0,0-1.32,3.24,8.15,8.15,0,0,0,.2,3.41,9.67,9.67,0,0,0,1.36,3A11.91,11.91,0,0,0,32.6,44.1,15.11,15.11,0,0,0,35.14,46a19.85,19.85,0,0,0,5.54,2.24c3.75.85,7.56.89,10.55-.6a9.05,9.05,0,0,0,4-3.8A12.41,12.41,0,0,0,56.49,39.84Z"
			}), s.a.createElement("path", {
				className: a.a.cls5,
				d: "M51.92,33a4.71,4.71,0,0,1,5-1.22c1.86.62,3,2.87,2.75,4.89a5.69,5.69,0,0,1-1.46,3.19c-.69.75-2.1,1.93-3.1,1.56"
			}), s.a.createElement("path", {
				d: "M55.1,41.44c.06,0,.24,0,.51,0a2.81,2.81,0,0,0,.94-.4,5.57,5.57,0,0,0,1.59-1.53,6,6,0,0,0,1-2.51,4.81,4.81,0,0,0-.41-2.58,4,4,0,0,0-1.33-1.63,3.75,3.75,0,0,0-1.9-.61,4.51,4.51,0,0,0-3.4,1,2.56,2.56,0,0,1,1.19-1.63A3.14,3.14,0,0,1,55,31a6.16,6.16,0,0,1,2.12.5,4.39,4.39,0,0,1,1.58,1.25A5.89,5.89,0,0,1,59.93,36a5.71,5.71,0,0,1-2.49,5,3.25,3.25,0,0,1-1.32.57A1.4,1.4,0,0,1,55.1,41.44Z"
			}), s.a.createElement("path", {
				className: a.a.cls6,
				d: "M43.86,47.39a.36.36,0,0,0,.35.23c.08,0,.18,0,.21-.33,0,0,0-.07.07-.06l.17.13.18.12.13-.21c.09-.13.21-.4.26-.3.16.56.38.59.61.63l-.12.09a2.27,2.27,0,0,0,0-.64.81.81,0,0,0,.06-.44c.06,0,.2.14.28.17l.24.34.26.38a.26.26,0,0,0,.12.12s0,0,.06-.12.08-.28-.1-1.12c.17.1.2.08.22.07a.09.09,0,0,0,0-.05l.14.12.18.21a.74.74,0,0,1,.14.2c.06.1.1.26.16.35s.18,0,.3-.05a.3.3,0,0,0,.08-.19.64.64,0,0,0,0-.25,2.59,2.59,0,0,0-.1-.4.65.65,0,0,0,.2-.21.71.71,0,0,0,.27-.09,3.23,3.23,0,0,0,.45.4l.15.11.08,0,0,0v0l-.15-.79-.18-1,1.3,1,.27.21h0v-.1l0-.18a3.26,3.26,0,0,0-.06-.38l-.21-.81,1.18.58c.15.08.07,0,.1.06l0,0v0h0V45a3.49,3.49,0,0,0,0-.57v-.18l.13-.07a.42.42,0,0,1,.48,0c.12.09.05,0,.08.07l.05.08c0,.07.15.07.12,0v-.07s0-.06.06.14L52,44.08c-.16-.48-.25-.64-.2-.74.25.17.49.33.64.41a1.26,1.26,0,0,0,.33.09.75.75,0,0,0,.26,0,1.63,1.63,0,0,0-.27-.67,1.58,1.58,0,0,1,.5.82,1.32,1.32,0,0,1-.56.13h-.28l0,.06,0,.06c.06.14-.1-.29,0-.12l.07.14,0,.07.13.33a.72.72,0,0,1,0,.36.41.41,0,0,1-.28.31.58.58,0,0,1-.38,0,.84.84,0,0,1-.35-.33,1.06,1.06,0,0,0-.18-.22s0,0,0-.06,0-.15,0-.11l.21-.16a5.44,5.44,0,0,1,0,.7,7.94,7.94,0,0,0,.06,1.07l-.56-.36L51,45.62l-.15-.09c-.06,0-.17-.11-.21-.12a4,4,0,0,1,0,.55c0,.19,0,.41,0,.6l0,.29a1,1,0,0,1-.23-.15l-1.16-.9.22,1.26,0,.23s0,0,0,.05l0,0-.11,0a3.89,3.89,0,0,1-.42-.19l-.35-.21-.16-.12a1.23,1.23,0,0,1-.2-.19c0,.1.06.2.08.29a.59.59,0,0,1,0,.26.74.74,0,0,1-.18.39.77.77,0,0,1-.38.22.52.52,0,0,1-.43-.12c-.08-.08-.09-.2-.15-.29s0-.05,0-.05l0,.08a.43.43,0,0,1,0,.16.46.46,0,0,1-.06.23.44.44,0,0,1-.24.22.37.37,0,0,1-.35-.09,1.22,1.22,0,0,1-.16-.18l-.05-.09-.1-.16c0-.06-.12-.19-.14-.19a1.24,1.24,0,0,1,0,.27c0,.07,0,.12,0,.22l0,.15-.14,0h0a.87.87,0,0,1-.46-.2.53.53,0,0,1-.16-.23l0-.07h0v0l-.07.09a1.93,1.93,0,0,1-.19.26l-.22-.19-.12-.11s0,.1,0,.07a.35.35,0,0,1-.2.18c-.07,0-.11,0-.09,0a.33.33,0,0,1-.31-.17A.21.21,0,0,1,43.86,47.39Z"
			}), s.a.createElement("path", {
				className: a.a.cls6,
				d: "M54.8,39.38a5,5,0,0,0,.16.71L54.83,40a.44.44,0,0,0,.18-.51l.25,0a1.05,1.05,0,0,0,.09.34,1.37,1.37,0,0,0,.26.4l-.32,0a1.27,1.27,0,0,0,.13-.19,1.18,1.18,0,0,0,.15-.55c.2-.07.25-.12.27-.15a1.57,1.57,0,0,0,.29,0,4.36,4.36,0,0,0,.28.64c.07.11.12.17.18.25l0,.05-.53.08a2.37,2.37,0,0,0,.09-.36,1.93,1.93,0,0,0,0-.32,2.2,2.2,0,0,0,0-.45l.3-.07.31,0a1,1,0,0,0,.39.49l-.42.29c0-.32-.06-.6-.07-.85l.4-.16a.25.25,0,0,0,.24.15c.08,0,.06-.13.1-.31a2.17,2.17,0,0,1,.12.26,1.29,1.29,0,0,1,0,.19.18.18,0,0,1,0,.1l-.08,0a.57.57,0,0,1-.42.08.7.7,0,0,1-.42-.24l.5-.2a2.09,2.09,0,0,1,.12.53v.31l0,.57-.41-.3c-.17-.12-.11-.1-.15-.15a1.38,1.38,0,0,1-.11-.24s0,.1,0,.15a3.14,3.14,0,0,1-.18.65l-.08.22-.13-.18a3,3,0,0,1-.21-.33L56,40c0-.08-.1-.26-.11-.22a.94.94,0,0,1,0,.3.4.4,0,0,1-.07.15,1.08,1.08,0,0,1-.18.24l-.13.14-.12-.15a1.7,1.7,0,0,1-.36-1l.34-.06a.66.66,0,0,1,0,.48.59.59,0,0,1-.34.32l-.14,0,0-.11A1.48,1.48,0,0,1,54.8,39.38Z"
			}), s.a.createElement("path", {
				className: a.a.cls4,
				d: "M45.58,36.55a1.63,1.63,0,0,1-.08-.37,2.88,2.88,0,0,1,.12-.92A3.38,3.38,0,0,1,46.89,33a2.43,2.43,0,0,1,3.2.53c1.39,1.59-.16,4.18-2.07,4.29a2.88,2.88,0,0,1-1.61-.33A1.85,1.85,0,0,1,45.58,36.55Z"
			}), s.a.createElement("path", {
				d: "M45.58,36.54a2.4,2.4,0,0,0,1,.94,2.8,2.8,0,0,0,1.88.14,3,3,0,0,0,1.69-1.57A2.08,2.08,0,0,0,50,33.88a2.41,2.41,0,0,0-1.61-.94,2.16,2.16,0,0,0-1.66.57A3.48,3.48,0,0,0,45.88,35a2.64,2.64,0,0,0-.22,1.49,2.27,2.27,0,0,1-.16-1.64A3,3,0,0,1,46,33.44a2.63,2.63,0,0,1,3.27-.66,2.8,2.8,0,0,1,1.13,1.08,2.31,2.31,0,0,1,.28,1.44,3.22,3.22,0,0,1-1.38,2.23,2.76,2.76,0,0,1-2.27.39A2.16,2.16,0,0,1,46,37.31,1.84,1.84,0,0,1,45.58,36.54Z"
			}), s.a.createElement("path", {
				className: a.a.cls4,
				d: "M35.34,29.49a1.81,1.81,0,0,1,1.9-.24,1.52,1.52,0,0,1,.65,1.33,2.77,2.77,0,0,1-1.82,2.71,1.51,1.51,0,0,1-2-1.76A2.63,2.63,0,0,1,35.34,29.49Z"
			}), s.a.createElement("path", {
				d: "M35.34,29.5a6.72,6.72,0,0,0-.73.81,2.6,2.6,0,0,0-.4,1.43,1.36,1.36,0,0,0,.93,1.33,1.78,1.78,0,0,0,1.62-.49,2.65,2.65,0,0,0,.71-2.71,1,1,0,0,0-1-.61,2.5,2.5,0,0,0-1.13.3,1.88,1.88,0,0,1,1.16-.7,1.29,1.29,0,0,1,1.23.47,2.16,2.16,0,0,1,.3,1.47,3.57,3.57,0,0,1-.4,1.27,2.62,2.62,0,0,1-1.88,1.4,1.58,1.58,0,0,1-1.77-1,2.45,2.45,0,0,1,.14-1.84,2.18,2.18,0,0,1,.6-.77A2.66,2.66,0,0,1,35.34,29.5Z"
			}), s.a.createElement("path", {
				d: "M36,34.9a19,19,0,0,0,8.08,2.8,20.79,20.79,0,0,1-.92,2.17A8.13,8.13,0,0,1,41.6,42a4,4,0,0,1-4.33.91c-1.18-.59-1.06-2.08-1.06-3.2a29.23,29.23,0,0,1,.4-4.38"
			}), s.a.createElement("path", {
				d: "M36.61,35.37c0,.12-.12,1.12-.2,2.29a25.35,25.35,0,0,0,0,3.23,2.29,2.29,0,0,0,.7,1.67A2.65,2.65,0,0,0,38.9,43a4.66,4.66,0,0,0,3.26-2,9.77,9.77,0,0,0,1-1.75l.4-.91.1-.22,0-.11h0l-.43-.06-.6-.11q-.6-.12-1.17-.27a18.06,18.06,0,0,1-2.15-.71A15.64,15.64,0,0,1,36,35c.66.27,1.59.66,2.49,1s1.76.56,2.2.71a15.88,15.88,0,0,0,1.67.51l.82.18.39.08.5.07.15.08h0s.06,0,0,0v0l0,.07c0,.1,0,.24-.08.37l-.24.53-.46,1a10,10,0,0,1-1.12,1.79,5.09,5.09,0,0,1-3.3,2,3.27,3.27,0,0,1-1.81-.27,2,2,0,0,1-1.07-1.37A6.46,6.46,0,0,1,36,40.14c0-.5,0-1,.06-1.48A20.63,20.63,0,0,1,36.61,35.37Z"
			}), s.a.createElement("path", {
				className: a.a.cls5,
				d: "M54.28,16.26a2.92,2.92,0,0,1,.28,2.67,3.34,3.34,0,0,1-2.1,1.88,2.72,2.72,0,0,1-.86.14A3.19,3.19,0,0,1,50,20.49a2.71,2.71,0,0,1-1.62-3.15A3.16,3.16,0,0,1,52.33,15a3.38,3.38,0,0,1,2.54,2.22"
			}), s.a.createElement("path", {
				d: "M54.86,17.18a4.77,4.77,0,0,0-1.11-1.33,3.42,3.42,0,0,0-2.26-.69,2.77,2.77,0,0,0-2.27,1.48A3,3,0,0,0,48.83,18a1.87,1.87,0,0,0,.43,1.16,3.77,3.77,0,0,0,2,1.19,2.69,2.69,0,0,0,2-.53,2.62,2.62,0,0,0,1.11-1.64,2.91,2.91,0,0,0-.23-1.81,2.39,2.39,0,0,1,1,2,2.66,2.66,0,0,1-.81,2,4.28,4.28,0,0,1-2.26,1,3.51,3.51,0,0,1-2.18-.55,4,4,0,0,1-1.49-1.41,2.61,2.61,0,0,1-.3-1.92,3.65,3.65,0,0,1,2.17-2.67,3.73,3.73,0,0,1,3,.26,3.07,3.07,0,0,1,1.16,1.11A2.56,2.56,0,0,1,54.86,17.18Z"
			}), s.a.createElement("path", {
				className: a.a.cls8,
				d: "M28.91,55c0,1.3-1.84.76-2.86.65l-1.77-.19a4.85,4.85,0,0,1-1.42-.23c-.74-.34-2.58-7.68-2.95-9.25a2.41,2.41,0,0,1,.32-1.41c.27-.44.76-.34,1.2-.27l1.44.26,1.72.35c.55.13,1.08.2,1.27.8.13.37.25.74.37,1.11l.94,2.93.36,1.1c.39,1.22,1,2.39,1.3,3.62A1.89,1.89,0,0,1,28.91,55Z"
			}), s.a.createElement("path", {
				d: "M28.91,55c-.06-.07-.08-.41-.28-.91S28.2,53,27.91,52.3c-.59-1.4-1.07-3-1.41-3.93l-.88-2.44c-.11-.39-.33-.49-.76-.59l-1.33-.25c-.86-.16-1.82-.34-2.61-.44a.4.4,0,0,0-.32.1,1.67,1.67,0,0,0-.21.46,1.82,1.82,0,0,0-.1.54.78.78,0,0,0,0,.22l.08.32c.37,1.46.75,2.92,1.15,4.33a32.94,32.94,0,0,0,1.3,4c.19.32.12.35.48.43s.61.08.95.12l1.87.26a14.7,14.7,0,0,0,1.69.27,1.4,1.4,0,0,0,.69-.12.64.64,0,0,0,.27-.54.7.7,0,0,1-.16.66,1.33,1.33,0,0,1-.8.31A11.5,11.5,0,0,1,26,56l-1.74-.08a4.86,4.86,0,0,1-1.33-.18.89.89,0,0,1-.29-.15,1.06,1.06,0,0,1-.26-.29,3.15,3.15,0,0,1-.22-.46c-.13-.3-.22-.59-.32-.88-.18-.57-.35-1.14-.5-1.7C21,51.12,20.73,50,20.46,49s-.52-2-.73-3.1a2.41,2.41,0,0,1,.13-.81,1.77,1.77,0,0,1,.37-.72,1,1,0,0,1,.81-.23c.27,0,.49.07.73.11.95.16,1.85.34,2.73.51a2.29,2.29,0,0,1,1.32.52,1.57,1.57,0,0,1,.32.65l.2.6c.53,1.58,1,3.06,1.44,4.45A18.72,18.72,0,0,1,28.91,55Z"
			}), s.a.createElement("path", {
				className: a.a.cls9,
				d: "M26.58,49.75c.23.7.46,1.41.71,2.11.12.35.26.71.39,1.06,0,.12.28.67.19.75h0a5.32,5.32,0,0,1-1.18-.16l-1.26-.22-1.05-.2a1.37,1.37,0,0,1-.49-.13c-.17-.12-1.87-5.31-2.38-7a.29.29,0,0,1,.35-.36c.64.17,2.83.49,3.12.58a1.63,1.63,0,0,1,.48.13c.14.09.14.22.18.36s.16.53.24.79C26.08,48.21,26.33,49,26.58,49.75Z"
			}), s.a.createElement("path", {
				d: "M26.58,49.75c0-.09-.34-1-.67-2L25.66,47l-.12-.39c0-.13-.05-.25-.15-.3a8.59,8.59,0,0,0-1.26-.26l-1.79-.3-.46-.08c-.16-.05-.23,0-.29.07a.23.23,0,0,0,0,.14l.07.23.15.45L23,50.17l.51,1.49.27.74.14.35c0,.08,0,.09,0,.11l.14,0,2.94.56a4.14,4.14,0,0,0,.68.1c.08,0,.06,0,.07,0a1.86,1.86,0,0,0-.1-.31L27.23,52l-.69-2.22c.26.57.59,1.42.9,2.22l.46,1.12a1.34,1.34,0,0,1,.09.26.47.47,0,0,1,0,.14.37.37,0,0,1,0,.21c-.05.12-.25.12-.31.12h-.19l-2.47-.49c-.41-.1-.77-.14-1.18-.26a.26.26,0,0,1-.13-.14l-.06-.14-.11-.27L23.38,52,22,47.91l-.58-1.85a.4.4,0,0,1,.1-.5c.17-.13.37,0,.5,0l.88.16,1.67.31a8,8,0,0,1,.79.17.42.42,0,0,1,.27.35c0,.12.07.25.1.37Z"
			}), s.a.createElement("path", {
				className: a.a.cls5,
				d: "M43.91,52.83c-1.93.15-3-2-4.47-2.85A3.66,3.66,0,0,0,38,49.45c-1.76-.14-2.19,1.76-2,3.17a5.54,5.54,0,0,0,2.93,4,7.69,7.69,0,0,0,5.59.51,3.27,3.27,0,0,0,2.54-3"
			}), s.a.createElement("path", {
				d: "M47,54.12a1.4,1.4,0,0,1,0,.78,2.85,2.85,0,0,1-.78,1.42,5.56,5.56,0,0,1-3.07,1.4,7.62,7.62,0,0,1-4.3-.51A6.19,6.19,0,0,1,35.72,54,4.65,4.65,0,0,1,35.78,50a2.29,2.29,0,0,1,.78-.83,2.32,2.32,0,0,1,1.09-.32,3.53,3.53,0,0,1,1.85.53,11.2,11.2,0,0,1,2.33,2.15,3.09,3.09,0,0,0,2.07,1.1,2,2,0,0,1-1.27.1,4.18,4.18,0,0,1-1.4-.66c-.83-.59-1.48-1.17-1.8-1.43a2.53,2.53,0,0,0-2.15-.76c-.69.19-1,1.06-1.1,1.84a4.84,4.84,0,0,0,1.83,4,6.46,6.46,0,0,0,3.74,1.36,6.79,6.79,0,0,0,3.41-.6,3.87,3.87,0,0,0,1.39-1.14A2.79,2.79,0,0,0,47,54.12Z"
			}), s.a.createElement("path", {
				d: "M24.54,49.69c-.13,0-.35-.76-.5-1-.07-.12-.13-.25-.19-.38a1.26,1.26,0,0,1-.16-.5.53.53,0,0,1,.23-.48.51.51,0,0,1,.62.06,1.11,1.11,0,0,1,.28.58,7.21,7.21,0,0,1,.24,2v.23l-.13,0a.5.5,0,0,1-.67-.29c.23.08.48-.07.44-.17l-.15.3a.85.85,0,0,1-.2-.47,6,6,0,0,0,0-1.12c0-.31-.11-.79-.17-.73s0,0,0,0,0,0,0,0a.69.69,0,0,0,0,.13l.14.38a4.64,4.64,0,0,1,.2.72A2.3,2.3,0,0,1,24.54,49.69Z"
			}), s.a.createElement("path", {
				d: "M25.26,50.93c-.09.07-.13.11-.1.19s.09.05.07.05,0,0,0,0,0,.09,0,0-.18-.09-.14-.08a.25.25,0,0,0,.17-.18c.32-.21.68.1.58.22a.76.76,0,0,1-.51.4.46.46,0,0,1-.41-.21.42.42,0,0,1,.13-.66.19.19,0,0,1,.21,0A.16.16,0,0,1,25.26,50.93Z"
			}), s.a.createElement("path", {
				className: a.a.cls5,
				d: "M16.21,48.3c0-.11.63-.32,1.11-.79a1.62,1.62,0,0,0,.46-.86.93.93,0,0,0-.15-.7,1.25,1.25,0,0,0-.23-.23,2.49,2.49,0,0,0-.55-.33l-1.77-.74c.49-.06,1.25-.14,1.84-.24l.4-.1a1.68,1.68,0,0,0,.31-.11L18,44a2.56,2.56,0,0,0,1.08-.92l.05-.12s0-.11,0-.24a3.24,3.24,0,0,0-.13-.41,2.67,2.67,0,0,0-.37-.65l.72-.67a13.4,13.4,0,0,0,.86,1.18,1.37,1.37,0,0,0,.35.32,3.48,3.48,0,0,0,.61.08,5.5,5.5,0,0,0,1.21,0l1.12-.14a4.45,4.45,0,0,1-1.52.84,3.3,3.3,0,0,1-1.55.1,1.27,1.27,0,0,1-.44-.21,2.28,2.28,0,0,1-.27-.27,5.77,5.77,0,0,1-.39-.51c-.23-.33-.42-.66-.61-1l.39-.37a2.74,2.74,0,0,1,.58,1,1.86,1.86,0,0,1,.12,1.11,3,3,0,0,1-1.47,1.37l-.42.2-.26.09a2.59,2.59,0,0,1-.4.1,3.34,3.34,0,0,1,.38.17,1.36,1.36,0,0,1,.17.12,1.85,1.85,0,0,1,.29.33,1.52,1.52,0,0,1,0,1.64,2,2,0,0,1-1,.81A3.79,3.79,0,0,1,16.21,48.3Z"
			}), s.a.createElement("path", {
				className: a.a.cls8,
				d: "M8.62,33.78l.76-1,1.72-2.21A4.92,4.92,0,0,1,12,29.51a1.37,1.37,0,0,1,.5-.28,2.43,2.43,0,0,1,1.58.39c.51.21,2.57,1.48,3.06,1.76s1.08.56,1.06,1.25a1.86,1.86,0,0,1-.33.87c-.61,1-1.31,2-2,3s-3.14,4.35-3.8,5a1.1,1.1,0,0,1-.38.3c-.63.26-1.24-.24-1.77-.53L8.59,40.6l-1.52-.86c-.37-.21-1.12-.49-1.21-.94s.57-1.15.84-1.51L7.63,36"
			}), s.a.createElement("path", {
				d: "M7.63,36a4.56,4.56,0,0,1-.5.85c-.15.22-.32.49-.54.77A3.55,3.55,0,0,0,6,38.5c-.13.32.13.55.47.75l1,.53,1.69.9,1.17.6a1.77,1.77,0,0,0,1.06.35.59.59,0,0,0,.38-.25c.14-.15.28-.32.42-.5l.83-1.1c1.08-1.5,2.19-3,3.11-4.49l1.24-1.94a1.51,1.51,0,0,0,.32-.79c0-.2-.12-.35-.41-.53-1.28-.73-2.52-1.61-3.73-2.18a2.09,2.09,0,0,0-.8-.27.6.6,0,0,0-.32.07,1.36,1.36,0,0,0-.34.23,17.67,17.67,0,0,0-1.21,1.41c-.79.94-1.53,1.81-2.21,2.57a33.53,33.53,0,0,1,1.77-3.05l.5-.76a3.72,3.72,0,0,1,.57-.75,2.12,2.12,0,0,1,.76-.51,1.56,1.56,0,0,1,.79,0,16.69,16.69,0,0,1,3.32,1.85c.5.35,1,.59,1.49,1a1.3,1.3,0,0,1,.51.87,1.59,1.59,0,0,1-.23.93C17,35.24,15.86,37,14.69,38.57c-.57.8-1.13,1.56-1.69,2.29a9.73,9.73,0,0,1-.9,1.06,1.32,1.32,0,0,1-1.48.1c-1.53-.82-2.9-1.62-4.19-2.35a2.25,2.25,0,0,1-.51-.37.78.78,0,0,1-.25-.77,2.94,2.94,0,0,1,.79-1.14Z"
			}), s.a.createElement("g", {
				className: "cls10"
			}, s.a.createElement("path", {
				d: "M11.3,40.88a24.23,24.23,0,0,1-2.84-1.27l-.6-.29-.31-.17-.16-.09a.6.6,0,0,1-.21-.21.76.76,0,0,1,.09-.58l.19-.36.41-.73.84-1.41a47.55,47.55,0,0,1,4-5.69,11.25,11.25,0,0,1-1.28,2.51,37.38,37.38,0,0,0-2.37,3.3c-.34.52-.64,1-.93,1.51l-.41.72c-.12.23-.3.5-.25.58a.11.11,0,0,0,.07.06l.14.09L8,39l.59.32,1.09.59C10.23,40.21,11.11,40.78,11.3,40.88Z"
			})), s.a.createElement("path", {
				className: a.a.cls5,
				d: "M5.43,28.78a3.44,3.44,0,0,0-2.11,5.71c1.24,1.58,4.57,3.39,6.28,2.21a2.11,2.11,0,0,0,.94-1.29c.17-.94-.69-2-1.35-2.55a5.75,5.75,0,0,0-3.54-1.34c-.09,0-.22.06-.18.13"
			}), s.a.createElement("path", {
				d: "M5.47,31.66c-.06,0,0-.17.12-.19a2.36,2.36,0,0,1,.47,0,5.2,5.2,0,0,1,1.37.24,6.14,6.14,0,0,1,2.49,1.57A3.23,3.23,0,0,1,10.86,35,2.12,2.12,0,0,1,10,36.87a2.82,2.82,0,0,1-2,.6A5.89,5.89,0,0,1,6.05,37a8.39,8.39,0,0,1-2.72-1.82,4.34,4.34,0,0,1-1.26-2.93,3.4,3.4,0,0,1,1.15-2.64,4.22,4.22,0,0,1,2.18-.95,5.58,5.58,0,0,0-1.8,1.43,3.61,3.61,0,0,0-.68,1.66,3.29,3.29,0,0,0,.35,2.17,5.24,5.24,0,0,0,1.49,1.62,5.86,5.86,0,0,0,3.78,1.34c1.21-.12,2.18-1.37,1.66-2.32A4.93,4.93,0,0,0,8.1,32.4a7.54,7.54,0,0,0-1.51-.66,7.49,7.49,0,0,0-.74-.17C5.65,31.53,5.43,31.53,5.47,31.66Z"
			}), s.a.createElement("path", {
				d: "M14.69,31.63c0,.09-.34.56-.37.79s.14.17.12.12l0,0,.13-.22.26-.41s0-.09.05-.15,0-.07.09-.07l0,0c0-.05-.1-.08-.22,0a.33.33,0,0,1,.45-.34.4.4,0,0,1,.2.17.79.79,0,0,1,.07.2.42.42,0,0,1,0,.2.79.79,0,0,1-.1.21c-.21.24-.37.46-.53.67a.86.86,0,0,1-.73.46.29.29,0,0,1-.2-.29.73.73,0,0,1,0-.38,1.77,1.77,0,0,1,.3-.59A1.31,1.31,0,0,1,14.69,31.63Z"
			}), s.a.createElement("path", {
				d: "M13.77,33.64s.09,0,.14,0h0v.11a.59.59,0,0,1,0,.14c0,.2-.35.34-.56.15a.38.38,0,0,1,0-.63.25.25,0,0,1,.39.19.24.24,0,0,0-.14.1s0,0,0,0v0c.05,0,0,0,0,0s0-.07,0-.05h0l.07.17A.41.41,0,0,1,13.77,33.64Z"
			}))))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const d = ({
				className: e,
				isSubreddit: t,
				...n
			}) => s.a.createElement("svg", c({
				className: Object(o.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), s.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = d
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = ({
				className: e
			}) => s.a.createElement("svg", {
				className: e,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", {
				fillRule: "evenodd"
			}, s.a.createElement("path", {
				d: "M0 12h12V0H0z",
				fill: "none"
			}), s.a.createElement("path", {
				d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
				fill: "inherit"
			})))
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, n) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/structuredStyles.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.m.less"),
				m = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const b = Object(d.t)(),
				f = Object(a.c)({
					isEditing: l.i,
					layout: (e, t) => t.forcedLayout || Object(d.O)(e, t)
				}),
				h = Object(o.b)(f),
				y = ({
					disableFullscreen: e,
					dispatch: t,
					fitPageToContent: n,
					forcedLayout: r,
					isCollectionLayout: o,
					isEditing: a,
					layout: i,
					pageLayer: c,
					...d
				}) => s.a.createElement("div", d);
			t.a = b(h(({
				className: e,
				...t
			}) => s.a.createElement(y, p({
				className: Object(i.a)(e, m.a.styledContent, {
					[m.a.mLargePostLayout]: t.layout === c.g.Large,
					[m.a.mDisableFullScreen]: t.disableFullscreen && !t.isCollectionLayout,
					[m.a.mClassicWidth]: t.isCollectionLayout,
					[m.a.mIsEditing]: !!t.isEditing,
					[m.a.mCanFlexFullWidth]: !t.fitPageToContent
				})
			}, t))))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, n) {
			e.exports = {
				Body: "_1vyLCp-v-tE5QvZovwrASa",
				body: "_1vyLCp-v-tE5QvZovwrASa",
				Sidebar: "_1BFbVxT49QnrAN3fqGZ1z8",
				sidebar: "_1BFbVxT49QnrAN3fqGZ1z8",
				defaultLayout: "_1tvThPWQpORoc2taKebHxs",
				"m-collectionLayout": "K1OCXipJxqOt01sOdQXEx",
				mCollectionLayout: "K1OCXipJxqOt01sOdQXEx",
				outerContainer: "qYj03fU5CXf5t2Fc5iSvg",
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh",
				backgroundContainer: "_33erTQ46yfKeF2B6B-ooMJ"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				o = n("./src/reddit/layout/page/Listing/Content.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/componentSizes.ts"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/constants/screenWidths.ts"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class f extends s.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return s.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var h = Object(b.a)(f);
			var y = e => s.a.createElement(h, e),
				g = n("./src/reddit/layout/page/Listing/index.m.less"),
				v = n.n(g);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const x = Object(i.a)(e => {
					const {
						backgroundColor: t,
						className: n,
						redditStyle: r,
						theme: o,
						...i
					} = e, c = Object(p.a)(e), d = {
						"--pseudo-before-background": t || Object(m.g)(c.canvas, c.canvasImgUrl, c.canvasImgPosition)
					};
					return s.a.createElement("div", _({
						className: Object(a.a)(v.a.backgroundContainer, n),
						style: d
					}, i))
				}),
				O = c.a.div("Body", v.a),
				j = c.a.div("Sidebar", v.a),
				E = e => e.hero ? s.a.createElement(s.a.Fragment, null, e.hero) : null;

			function S(e) {
				const t = e.trendingUnit ? "28px" : "0",
					n = e.isPageSwapped ? {
						marginRight: `${d.q}px`,
						marginTop: t
					} : {
						marginLeft: `${d.q}px`,
						marginTop: t
					},
					r = e.sidebar && s.a.createElement(j, {
						className: e.isCollectionLayout ? v.a["m-collectionLayout"] : v.a.defaultLayout,
						style: n
					}, e.sidebar),
					i = s.a.createElement(o.a, {
						className: e.contentClassName,
						disableFullscreen: e.disableFullscreen,
						fitPageToContent: e.fitPageToContent,
						forcedLayout: e.forcedLayout,
						isCollectionLayout: e.isCollectionLayout
					}, e.contentBanner, e.content);
				let c;
				c = e.sidebars ? s.a.createElement(s.a.Fragment, null, e.sidebars[0], i, e.sidebars[1]) : e.isPageSwapped ? s.a.createElement(s.a.Fragment, null, r, i) : s.a.createElement(s.a.Fragment, null, i, r);
				const m = e.disableFullscreen ? `${e.maxWidth||u.a+2*d.m}px` : "100%";
				return s.a.createElement(y, {
					subredditId: e.subredditId
				}, s.a.createElement("div", {
					className: Object(a.a)(v.a.outerContainer, l.i, e.className),
					ref: e.containerRef
				}, s.a.createElement(x, {
					className: l.h,
					redditStyle: e.redditStyle,
					backgroundColor: e.backgroundColor
				}), s.a.createElement("div", {
					className: v.a.innerContainer
				}, s.a.createElement("div", {
					className: v.a.bannerNavContainer
				}, e.navBar), e.contentNavBar, E(e), s.a.createElement("div", {
					style: {
						maxWidth: m
					}
				}, e.trendingUnit), s.a.createElement(O, {
					style: {
						maxWidth: m
					}
				}, c))))
			}
		},
		"./src/reddit/models/ContentGate.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.CustomFeedDoesNotExist = "CustomFeedDoesNotExist", e.GoldSubreddit = "GoldSubreddit", e.Nsfw = "Nsfw", e.NsfwCustomFeed = "NsfwCustomFeed", e.PrivateSubreddit = "PrivateSubreddit", e.ProfileDoesNotExist = "ProfileDoesNotExist", e.ProfileDeleted = "ProfileDeleted", e.ProfileSuspended = "ProfileSuspended", e.ProfileBlockedForLegalReason = "ProfileBlockedForLegalReason", e.QuarantinedSubreddit = "QuarantinedSubreddit", e.SubredditBanned = "SubredditBanned", e.SubredditBlockedForLegalReason = "SubredditBlockedForLegalReason", e.SubredditDoesNotExist = "SubredditDoesNotExist", e.PostBlockedForLegalReason = "PostBlockedForLegalReason"
				}(r || (r = {}))
		},
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
				}(r || (r = {}))
		},
		"./src/reddit/pages/Subreddit/index.m.less": function(e, t, n) {
			e.exports = {
				duHeader: "otZ2uDhYTr1YmgF32ArRm",
				cardChild: "_3HLyjC36ED_cOkMhS77Ts1",
				classicChild: "_2YjutkjJwMliy9kOCltIuA",
				compactChild: "m6QmcOHa4tObaem8JhVz8",
				sidebar: "_3ZmEUUvrdj4LXpXC9XZdN7",
				subredditPremiumUpsell: "_3s2ygGulpjIr920Ws4sGpx",
				af: "GWC1a5vux4ivxu9auf82p"
			}
		},
		"./src/reddit/pages/Subreddit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./node_modules/lodash/fromPairs.js"),
				o = n.n(s),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/config.ts"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/lib/extractQueryParams/index.ts"),
				p = n("./src/lib/isAdHocMultireddit/index.ts"),
				b = n("./src/lib/isFakeSubreddit/index.ts"),
				f = n("./src/lib/listingSort/index.ts"),
				h = n("./src/lib/makeListingKey/index.ts"),
				y = n("./src/lib/objectSelector/index.ts"),
				g = n("./src/lib/constants/index.ts"),
				v = n("./src/lib/fastdom/index.ts"),
				_ = n("./src/lib/performanceTimings/index.tsx"),
				x = n("./src/reddit/actions/pages/subreddit.ts"),
				O = n("./src/reddit/actions/preferences.ts"),
				j = n("./src/reddit/actions/search.ts"),
				E = n("./src/reddit/actions/subreddit.ts"),
				S = n("./src/reddit/components/AwardedListingBanner/index.tsx"),
				I = n("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				P = n("./src/reddit/components/ContentGate/index.tsx"),
				C = n("./src/reddit/components/CreatePostBanner/index.tsx"),
				T = n("./src/reddit/components/DownToChatBanner/index.tsx"),
				k = n("./src/reddit/components/Econ/PowerupsLevel2PerksBanner/async.tsx"),
				w = n("./src/reddit/components/Econ/Tournament/Sidebar/index.tsx"),
				N = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/async.tsx"),
				A = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx"),
				L = n("./src/reddit/components/EmptySubreddit.tsx"),
				D = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				R = n("./src/reddit/components/Governance/ClaimPointsBanner/async.ts"),
				B = n("./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx"),
				M = n("./src/reddit/components/Governance/WalletRegistration/StellarBanner/async.tsx"),
				F = n("./src/reddit/components/HeaderImage/index.tsx"),
				U = n("./src/reddit/components/InFeedPostCreation/async.tsx"),
				W = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				H = n("./src/reddit/components/JumpToContent/index.tsx"),
				V = n("./src/reddit/components/ListingPostList/index.tsx"),
				K = n("./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx"),
				G = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				q = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				Z = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				Q = n("./src/reddit/components/SubredditSidebar/index.tsx"),
				z = n("./src/reddit/components/TabBadger/index.tsx"),
				Y = n("./src/reddit/components/TitleTagManager/index.tsx"),
				J = n("./src/reddit/components/TrackingHelper/index.tsx"),
				X = n("./src/reddit/constants/page.ts"),
				$ = n("./src/reddit/constants/parameters.ts"),
				ee = n("./src/reddit/constants/postLayout.ts"),
				te = n("./src/reddit/contexts/PageLayer/index.tsx"),
				ne = n("./src/reddit/featureFlags/index.ts"),
				re = n("./src/reddit/helpers/correlationIdTracker.ts"),
				se = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				oe = n("./src/reddit/helpers/resonatePage/index.ts"),
				ae = n("./src/reddit/helpers/trackers/screenview.ts"),
				ie = n("./src/reddit/layout/page/Listing/index.tsx"),
				ce = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				de = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				le = n("./src/reddit/selectors/discoveryUnit.ts"),
				ue = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				me = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				pe = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				be = n("./src/reddit/selectors/experiments/resonatePilot.ts"),
				fe = n("./src/reddit/selectors/experiments/topPosts.ts"),
				he = n("./src/reddit/selectors/experiments/trending.ts"),
				ye = n("./src/reddit/selectors/experiments/uiSimplification.ts"),
				ge = n("./src/reddit/selectors/gold/powerups.ts"),
				ve = n("./src/reddit/selectors/listings.ts"),
				_e = n("./src/reddit/selectors/meta.ts"),
				xe = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Oe = n("./src/reddit/selectors/multireddit.ts"),
				je = n("./src/reddit/selectors/posts.ts"),
				Ee = n("./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts"),
				Se = n("./src/reddit/selectors/subreddit.ts"),
				Ie = n("./src/reddit/selectors/user.ts"),
				Pe = n("./src/reddit/pages/Subreddit/SurveyUnit.tsx"),
				Ce = n("./src/reddit/pages/Subreddit/index.m.less"),
				Te = n.n(Ce);

			function ke() {
				return (ke = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: we
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ne = Object(r.a)({
				resolved: {},
				chunkName: () => "reddit-components-AdHocMultiredditSidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("reddit-components-AdHocMultiredditSidebar")]).then(n.bind(null, "./src/reddit/components/AdHocMultiredditSidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/AdHocMultiredditSidebar/index.tsx"
				}
			}), Ae = 5, Le = 3, De = Object(te.t)(), Re = Object(r.a)({
				resolved: {},
				chunkName: () => "SubredditTopContent",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("SubredditTopContent")]).then(n.bind(null, "./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx"
				}
			}), Be = Object(y.a)(Object(d.a)((e, {
				location: t
			}) => t.search, e => o()([...Object(m.a)(e)]))), Me = Object(d.a)((e, {
				match: t
			}) => t.params.subredditName, (e, {
				match: t
			}) => t.params.sort, Be, Ie.cb, ue.a, (e, t, n, r, s) => {
				let o = t;
				o || (e === X.f && s ? o = g.P.BEST : Object(b.a)(e) && (o = g.P.HOT));
				const a = Object(x.makeFlairSearchOptions)(n, r);
				return Object(x.makeSubredditPageKey)(e, o, n, a)
			}), Fe = Object(d.c)({
				isTopContentDismissed: Ie.Q
			}), Ue = Object(d.c)({
				subreddit: (e, t) => Object(Se.A)(e, {
					subredditName: t.match.params.subredditName
				})
			}), We = Object(d.c)({
				powerupsEnabled: (e, t) => {
					const {
						subreddit: n
					} = Ue(e, t);
					return !(!n || !Object(ge.i)(e, {
						subredditId: n.id
					}))
				},
				powerupsTier2Achieved: (e, t) => {
					const {
						subreddit: n
					} = Ue(e, t);
					return !(!n || !Object(ge.j)(e, {
						subredditId: n.id
					}))
				}
			}), He = Object(d.c)({
				countryMeta: _e.b,
				geopopular: Ie.n
			}), Ve = Object(d.c)({
				isLoggedIn: Ie.K
			}), Ke = Object(y.a)((e, t) => {
				const {
					subreddit: n
				} = Ue(e, t), {
					subredditName: r
				} = t.match.params;
				if (n) {
					if (e.subreddits.progressModule[n.id]) return !1;
					const s = Me(e, t),
						o = Object(xe.a)(de.c.config)(e, {
							subredditId: n.id
						}),
						a = Object(je.F)(e, s, r, !0),
						i = !Object(ve.d)(e, {
							listingKey: s
						});
					if (o && i && a.length <= 1) return !0
				}
				return !1
			}), Ge = Object(d.c)({
				inAwardListingExperiment: me.a,
				isPopular: te.C,
				isInTrendingEntrypointExperiment: he.a
			}), qe = e => {
				const t = $.x in e && e[$.x].toUpperCase();
				if ("string" == typeof t && t in g.Ub) return g.Ub[t]
			}, Ze = Object(y.a)((e, t) => {
				const {
					sort: n,
					subredditName: r
				} = t.match.params, s = Be(e, t);
				if (n) return Object(f.b)({
					sort: n,
					timeSort: qe(s)
				});
				if (Object(b.a)(r)) return r === X.f && Object(ue.a)(e) ? Object(f.b)({
					sort: g.P.BEST
				}) : Object(f.b)({
					sort: g.P.HOT
				});
				const o = Me(e, t),
					a = e.listings.postOrder.listingSort[o];
				if (a && !a.hasChanged) return Object(f.d)(a.sort);
				const {
					subreddit: i
				} = Ue(e, t);
				if (i) {
					const t = Object(Se.D)(e, {
						subredditId: i.id
					});
					return Object(f.d)(t)
				}
				return Object(f.d)(e.user.prefs.sort)
			}), Qe = Object(y.a)((e, t) => {
				const {
					subredditName: n
				} = t.match.params;
				return Object(Se.X)(e, {
					subredditName: n
				})
			}), ze = (e, {
				match: t
			}) => {
				const {
					subredditName: n
				} = t.params;
				if (Object(b.a)(n)) {
					if (Object(p.a)(n)) {
						return Object(Oe.a)(e, {
							listingName: n
						}).displayText
					}
					switch (n.toLowerCase()) {
						case X.c.Popular:
							return "r/popular";
						case X.c.All:
							return "r/all"
					}
				}
				return Object(Se.W)(e, {
					subredditName: n
				})
			}, Ye = Object(d.c)({
				claimablePointsEnabled: ne.d.spClaimablePoints,
				isBlacklistedTopContentPage: le.f,
				listingKey: Me,
				sortParams: Ze,
				specialMembershipUpsellsEnabled: ne.d.spSpecialMembershipUpsells,
				stellarRegistrationBannerEnabled: ne.d.spStellarWalletRegistration,
				topContent: Qe,
				topContentDiscoveryUnit: e => Object(le.c)(e, {
					unitName: ce.a
				}),
				topPostsVariant: fe.d,
				walletRegistrationBannerEnabled: ne.d.spWalletRegistrationBanner,
				pageTitle: ze
			}), Je = Object(d.c)({
				showCreatePostBanner: Ke,
				contentGateInfo: (e, t) => Object(Ie.e)(e, t.match.params.subredditName),
				layout: te.O,
				isRpanDuVisible: (e, {
					match: t
				}) => Object(Ee.a)(e, {
					listingName: `r/${t.params.subredditName}`,
					sort: t.params.sort
				}),
				rpanInjectionIndex: (e, {
					match: t
				}) => Object(Ee.b)(e, {
					listingName: `r/${t.params.subredditName}`
				}),
				isUISimplificationAllItemsVariant: ye.b,
				isActionBarAnimationEnabled: pe.b,
				inResonatePilot: be.a
			}), Xe = () => Object(d.a)(Ie.cb, He, Be, Fe, We, Ue, (e, {
				match: t
			}) => Object(Se.x)(e, {
				subredditName: t.params.subredditName
			}), Ve, (e, {
				match: t
			}) => t.params.subredditName, Ge, Ye, Je, (e, {
				countryMeta: t,
				geopopular: n
			}, r, {
				isTopContentDismissed: s
			}, {
				powerupsEnabled: o,
				powerupsTier2Achieved: a
			}, {
				subreddit: i
			}, c, {
				isLoggedIn: d
			}, l, {
				inAwardListingExperiment: u,
				isInTrendingEntrypointExperiment: m,
				isPopular: p
			}, {
				claimablePointsEnabled: b,
				specialMembershipUpsellsEnabled: f,
				listingKey: h,
				pageTitle: y,
				sortParams: {
					sort: v,
					timeSort: _
				},
				stellarRegistrationBannerEnabled: x,
				topContent: O,
				topContentDiscoveryUnit: j,
				topPostsVariant: E,
				isBlacklistedTopContentPage: S,
				walletRegistrationBannerEnabled: I
			}, P) => {
				const C = t || g.w.Everywhere,
					T = n || C,
					k = r && $.h in r ? r[$.h].toUpperCase() : T,
					w = !!r.hasOwnProperty("f");
				return {
					countrySort: k,
					claimablePointsEnabled: b,
					specialMembershipUpsellsEnabled: f,
					inAwardListingExperiment: u,
					isLoggedIn: d,
					isInTrendingEntrypointExperiment: m,
					isPopular: p,
					listingKey: h,
					renderNSFWContentGate: i && i.isNSFW && !e,
					isTopContentDismissed: s,
					pageTitle: y,
					powerupsEnabled: o,
					powerupsTier2Achieved: a,
					sort: v,
					stellarRegistrationBannerEnabled: x,
					subreddit: i,
					subredditAboutInfo: c,
					subredditName: l,
					timeSort: _,
					topContent: O,
					topContentDiscoveryUnit: j,
					topPostsVariant: E,
					isBlacklistedTopContentPage: S,
					isFlairFilter: w,
					walletRegistrationBannerEnabled: I,
					...P
				}
			}), $e = (e, t) => ({
				onLoadMorePosts: () => {
					e(E.r({
						sort: t.match.params.sort,
						subredditName: t.match.params.subredditName
					}))
				},
				onLoadMoreSearchResults: () => e(Object(j.g)([g.Pb.Posts])),
				refreshFeed: () => e(E.s({
					sort: t.match.params.sort,
					subredditName: t.match.params.subredditName
				})),
				setTopContentDismissalPref: () => e(Object(O.F)())
			}), et = Object(c.b)(Xe, $e), tt = Object(r.a)({
				resolved: {},
				chunkName: () => "Trending",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("Trending").then(n.bind(null, "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx"
				}
			}, {
				ssr: !1
			}), nt = e => i.a.createElement(tt, ke({}, e, {
				fallback: i.a.createElement(q.a, {
					className: e.className,
					showCardView: !!e.showCardView
				})
			})), rt = Object(r.a)({
				resolved: {},
				chunkName: () => "FrontpageSidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("FrontpageSidebar").then(n.bind(null, "./src/reddit/components/FrontpageSidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/FrontpageSidebar/index.tsx"
				}
			}), st = Object(r.a)({
				resolved: {},
				chunkName: () => "TopWeekPostsDiscoveryUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("TopWeekPostsDiscoveryUnit")]).then(n.bind(null, "./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx"
				}
			});

			function ot(e) {
				const {
					subreddit: t
				} = e;
				return !!t && !!t.name && "snoovatar" === t.name.toLowerCase()
			}
			class at extends i.a.Component {
				constructor() {
					super(...arguments), this.onTopContentDismissed = () => {
						this.props.setTopContentDismissalPref()
					}
				}
				componentDidMount() {
					if (v.a.read(() => {
							Object(_.d)(_.c.Subreddit, this.props.isLoggedIn)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						g.Cb.includes(e) && Object(oe.a)(e)
					}
				}
				componentDidUpdate(e) {
					if (e.isFlairFilter && !this.props.isFlairFilter && Object(re.c)(re.a.SearchResults) && Object(re.b)(re.a.SearchResults), this.props.inResonatePilot) {
						const t = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						(e.subredditName ? e.subredditName.toLowerCase() : "") !== t && g.Cb.includes(t) && Object(oe.a)(t)
					}
				}
				componentWillUnmount() {
					this.props.isFlairFilter && Object(re.c)(re.a.SearchResults) && Object(re.b)(re.a.SearchResults)
				}
				render() {
					const {
						pageTitle: e
					} = this.props;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(Y.a, {
						title: e
					}), this.renderContent())
				}
				renderContent() {
					const {
						claimablePointsEnabled: e,
						contentGateInfo: t,
						countrySort: n,
						inAwardListingExperiment: r,
						isActionBarAnimationEnabled: s,
						isInTrendingEntrypointExperiment: o,
						isPopular: a,
						isLoggedIn: c,
						layout: d,
						listingKey: m,
						match: f,
						renderNSFWContentGate: y,
						showCreatePostBanner: v,
						sort: _,
						specialMembershipUpsellsEnabled: x,
						isTopContentDismissed: O,
						pageLayer: j,
						powerupsEnabled: E,
						powerupsTier2Achieved: q,
						stellarRegistrationBannerEnabled: Y,
						sendEvent: J,
						subreddit: $,
						subredditAboutInfo: ne,
						subredditName: re,
						timeSort: oe,
						topContent: ce,
						topContentDiscoveryUnit: de,
						topPostsVariant: le,
						isBlacklistedTopContentPage: ue,
						isRpanDuVisible: me,
						rpanInjectionIndex: pe,
						isFlairFilter: be,
						walletRegistrationBannerEnabled: he,
						isUISimplificationAllItemsVariant: ye
					} = this.props, ge = Object(b.a)(re), ve = re.toLowerCase(), _e = `/r/${re}/`, xe = {
						listingKey: m,
						listingName: ve
					}, Oe = Object(fe.a)(le), je = Object(fe.b)(le), Ee = Object(fe.c)(le), Se = Object(te.L)(j);
					let Ie;
					ge ? Ie = Object(p.a)(re) ? i.a.createElement(Ne, xe) : i.a.createElement(rt, xe) : $ && (Ie = Se ? i.a.createElement(w.a, {
						subredditId: $.id
					}) : i.a.createElement(Q.a, ke({}, xe, {
						className: Te.a.sidebar,
						subredditId: $.id,
						subredditName: re,
						topPostsVariant: le
					})));
					const Ce = Object(se.a)(t, y, re);
					if (Ce) return i.a.createElement(P.default, Ce);
					const De = d === ee.g.Large,
						Be = a && o && !ye,
						Me = $ ? $.id : void 0,
						Fe = !f.params.sort && ce && !ce.isSubscribed && ce.postIds && ce.postIds.length >= Ae && !O && !ue && !Oe && !je,
						Ue = {},
						We = d === ee.g.Classic ? Te.a.classicChild : d === ee.g.Compact ? Te.a.compactChild : Te.a.cardChild;
					if (x && $ && (Ue[0] = {
							estHeight: 487,
							id: `newbie-banner-${d}-${m}`,
							render: ({
								className: e
							}) => i.a.createElement(A.a, {
								className: Object(u.a)(e, We)
							})
						}, Ue[3] = {
							estHeight: 256,
							id: `lfg-banner-${d}-${m}`,
							render: ({
								className: e
							}) => i.a.createElement(N.a, {
								className: Object(u.a)(e, We),
								subredditId: $.id
							})
						}), $ && d === ee.g.Large && (Ue[0] = {
							estHeight: 175,
							id: `community-survey-${d}-${m}`,
							render: () => i.a.createElement(Pe.a, {
								subredditId: $.id
							})
						}), r && re === X.f && _ === g.P.AWARDED && (Ue[0] = {
							estHeight: 180,
							id: `awardlisting-banner-${d}-${m}`,
							render: ({
								className: e
							}) => i.a.createElement(S.a, {
								className: Object(u.a)(e, We)
							})
						}), he && $ && (Ue[1] = {
							estHeight: 384,
							id: `wallet-registration-${d}-${m}`,
							render: ({
								className: e
							}) => i.a.createElement(B.a, {
								className: Object(u.a)(e, We),
								subredditId: $.id
							})
						}), Y && $ && (Ue[2] = {
							estHeight: 200,
							id: `stellar-registration-${d}-${m}`,
							render: ({
								className: e
							}) => i.a.createElement(M.a, {
								className: Object(u.a)(e, We),
								subredditId: $.id
							})
						}), e && $ && (Ue[2] = {
							estHeight: 268,
							id: `claim-points-${d}-${m}`,
							render: ({
								className: e
							}) => i.a.createElement(R.a, {
								className: Object(u.a)(e, We),
								subredditId: $.id
							})
						}), $ && d === ee.g.Large && E && !q) {
						Ue[Ue[2] ? Ue[3] ? 4 : 3 : 2] = {
							estHeight: 476,
							id: `powerups-perks-${d}-${m}`,
							render: ({
								className: e
							}) => i.a.createElement(k.a, {
								className: Object(u.a)(e, We),
								subredditId: $.id
							})
						}
					}
					if (!a && Ee && oe !== g.Ub.WEEK && d === ee.g.Large) {
						const e = Object(h.a)(re, g.P.TOP, {
							t: g.Ub.WEEK
						});
						Ue[Le] = {
							estHeight: 0,
							id: `top-week-posts-${d}-${m}`,
							render: ({
								className: t
							}) => i.a.createElement(st, {
								className: t,
								listingKey: e,
								subredditName: re
							})
						}
					}
					if (me) {
						const {
							child: e,
							idx: t
						} = Object(K.a)({
							children: Ue,
							desiredIndex: pe,
							layout: d,
							listingKey: m,
							listingName: `r/${re}`,
							sendEvent: J
						});
						Ue[t] = e
					}
					const He = {
							baseUrl: _e,
							countrySort: n,
							sort: _,
							subredditId: Me,
							timeSort: oe
						},
						Ve = be ? this.props.onLoadMoreSearchResults : this.props.onLoadMorePosts,
						Ke = $ && $.subscribers;
					let Ge;
					const qe = window.URL;
					if (ot(this.props)) {
						const e = new qe(l.a.snoovatarUrl + "/static/client/");
						e.searchParams.set("platform", "desktop"), Ge = i.a.createElement("iframe", {
							className: Object(u.a)(Te.a.af),
							src: e.href
						})
					} else Be && (Ge = i.a.createElement(nt, {
						showCardView: this.props.layout === ee.g.Large
					}));
					return i.a.createElement(Z.a, {
						subredditId: Me
					}, i.a.createElement(ie.a, {
						subredditId: Me,
						className: Object(u.a)(Te.a.Container, this.props.className),
						fitPageToContent: !0,
						navBar: !ge && i.a.Children.toArray([i.a.createElement(F.a, {
							headerText: $ ? $.name : re,
							disableFullscreen: De,
							isTopBannerVariant: !0,
							key: "headerimage",
							subredditOrProfile: $,
							url: _e
						}), i.a.createElement(I.a, {
							layout: d,
							key: "idtopbar",
							subreddit: $ || void 0,
							subredditId: Me,
							subredditName: re,
							subredditUrl: _e
						})]),
						trendingUnit: Ge,
						content: i.a.createElement(i.a.Fragment, null, $ && $.isQuarantined && i.a.createElement(W.a, {
							subredditName: re
						}), $ && v && i.a.createElement(C.a, {
							subreddit: $,
							listingKey: m,
							listingName: ve
						}), Be && i.a.createElement(G.a, {
							className: Te.a.duHeader
						}, we._("Popular posts", null, {
							hk: "Gfyj2"
						})), Fe && i.a.createElement(Re, {
							discoveryUnit: de,
							subredditName: $ ? $.name : re,
							topContent: ce,
							onCloseClick: this.onTopContentDismissed
						}), !ge && c && !(ne && ne.userIsBanned) && !Se && i.a.createElement(U.a, {
							subredditName: re
						}), !Se && i.a.createElement(D.a, He), $ && i.a.createElement(T.a, {
							subreddit: $
						}), i.a.createElement(H.a, null), i.a.createElement(z.a, {
							handlePillClick: this.props.refreshFeed,
							listingKey: m,
							subredditName: re,
							subscriberCount: Ke
						}), i.a.createElement(V.a, {
							injectChildren: Ue,
							listingKey: m,
							listingName: ve,
							listingViewed: (e, t) => Object(ae.f)(m, _, t, e, oe),
							noPostsComponent: () => i.a.createElement(L.a, {
								listingName: ve,
								sort: _,
								subreddit: $ || void 0
							}),
							onLoadMore: Ve,
							inSubredditOrProfile: !ge,
							disablePlaceholder: re === X.f && _ === g.P.AWARDED,
							isActionBarAnimationEnabled: s
						})),
						sidebar: Ie
					}))
				}
			}
			t.default = De(et(Object(J.c)(at)))
		},
		"./src/reddit/reducers/pages/comments/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/ads/constants.ts");
			const o = [];
			var a = (e = o, t) => {
					switch (t.type) {
						case s.o:
							return t.payload;
						case s.p:
						default:
							return e
					}
				},
				i = n("./src/reddit/actions/pages/constants.ts");
			const c = {};
			var d = (e = c, t) => {
				switch (t.type) {
					case i.d:
					case i.b:
					case i.h:
					case i.f: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: null
						}
					}
					case i.a:
					case i.e: {
						const {
							key: n,
							error: r
						} = t.payload;
						return {
							...e,
							[n]: r || {}
						}
					}
					default:
						return e
				}
			};
			const l = {};
			var u = (e = l, t) => {
				switch (t.type) {
					case i.c:
					case i.g: {
						const {
							key: n
						} = t.payload;
						return {
							...e,
							[n]: !0
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var p = (e = m, t) => {
					switch (t.type) {
						case i.d:
						case i.h: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !0
							}
						}
						case i.b:
						case i.a:
						case i.f:
						case i.e: {
							const {
								key: n
							} = t.payload;
							return {
								...e,
								[n]: !1
							}
						}
						default:
							return e
					}
				},
				b = Object(r.c)({
					error: d,
					fullyLoaded: u,
					pending: p
				}),
				f = n("./node_modules/lodash/uniqBy.js"),
				h = n.n(f),
				y = n("./node_modules/lodash/values.js"),
				g = n.n(y),
				v = n("./src/reddit/actions/comment/constants.ts"),
				_ = n("./src/reddit/actions/comment/websocket/constants.ts");
			const x = {};

			function O(e) {
				return h()(e, "id").sort((e, t) => e.created - t.created)
			}
			var j = (e = x, t) => {
					switch (t.type) {
						case i.f:
						case v.u:
						case i.b: {
							const {
								comments: n,
								key: r
							} = t.payload, s = e[r] ? e[r] : [], o = function(e, t) {
								return g()(e).map(e => {
									const n = e.isStickied ? t && t.created || Math.round(Date.now() / 1e3) : e.created;
									return {
										id: e.id,
										created: n,
										stickied: e.isStickied,
										authorId: e.authorId
									}
								})
							}(n, s.find(e => e.stickied)), a = O([...s, ...o]);
							return {
								...e,
								[r]: [...a]
							}
						}
						case _.b:
						case _.c:
						case _.d:
						case v.G:
						case v.F: {
							const {
								comment: {
									id: n,
									created: r,
									isStickied: s,
									authorId: o
								},
								commentsPageKey: a,
								isChatSort: i
							} = t.payload;
							return !1 === i ? e : {
								...e,
								[a]: [...O([...e[a] ? e[a] : [], {
									id: n,
									created: r,
									stickied: s,
									authorId: o
								}])]
							}
						}
						default:
							return e
					}
				},
				E = n("./node_modules/lodash/mapValues.js"),
				S = n.n(E),
				I = n("./src/reddit/helpers/commentList/index.ts"),
				P = n("./src/reddit/models/Comment/index.ts");
			const C = {};

			function T(e) {
				const t = e;
				return S()(t, ({
					depth: e,
					next: t,
					prev: n
				}) => ({
					depth: e,
					next: t,
					prev: n
				}))
			}
			var k = (e = C, t) => {
				switch (t.type) {
					case v.u: {
						const {
							comments: n,
							commentLists: r,
							continueThreads: s,
							key: o,
							moreCommentsItem: a,
							moreComments: i
						} = t.payload, c = r[a.postId], d = e[o], l = {}, u = d[a.id];
						if (u && u.prev) {
							const {
								id: e
							} = u.prev;
							l[e] = {
								...d[e],
								next: c.head || u.next
							}
						}
						if (u && u.next) {
							const {
								id: e
							} = u.next;
							l[e] = {
								...d[e],
								prev: c.tail || u.prev
							}
						}
						if (c.head && c.tail) {
							const e = Object(I.c)({
									commentLink: c.head,
									commentsDict: n,
									moreCommentsDict: i,
									continueThreadDict: s
								}),
								t = Object(I.c)({
									commentLink: c.tail,
									commentsDict: n,
									moreCommentsDict: i,
									continueThreadDict: s
								});
							u && (e.prev = u.prev, t.next = u.next)
						}
						return {
							...e,
							[o]: {
								...e[o],
								...T(n),
								...T(s),
								...T(i),
								...l
							}
						}
					}
					case i.b:
					case i.f: {
						const {
							comments: n,
							continueThreads: r,
							key: s,
							moreComments: o
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								...T(n),
								...T(r),
								...T(o)
							}
						}
					}
					case _.b:
						const {
							comment: n, commentsPageKey: r, depth: s, headCommentId: o, originId: a, isChatSort: c
						} = t.payload, d = e[r], l = {};
						let u = null;
						if (c) return o && (l[o] = {
							...d[o],
							prev: Object(P.g)(n.id)
						}, u = Object(P.g)(o)), {
							...e,
							[r]: {
								...e[r],
								...l,
								[n.id]: {
									depth: 0,
									next: u,
									prev: null
								}
							}
						}; {
							let t = null;
							const o = n.parentId;
							if (a && o) {
								const n = "moreComments-" + a;
								if (d[o] && !d[n]) {
									const a = d[o].next;
									return a && (l[a.id] = {
										...d[a.id],
										prev: Object(P.h)(n)
									}, u = a), l[o] = {
										...d[o],
										next: Object(P.h)(n)
									}, t = Object(P.g)(o), {
										...e,
										[r]: {
											...e[r],
											...l,
											[n]: {
												depth: s || 0,
												next: u,
												prev: t
											}
										}
									}
								}
							}
							return e
						}
						case v.G: {
							const {
								comment: n,
								commentsPageKey: r,
								headCommentId: s
							} = t.payload, o = e[r], a = {};
							let i = null;
							return s && (a[s] = {
								...o[s],
								prev: Object(P.g)(n.id)
							}, i = Object(P.g)(s)), {
								...e,
								[r]: {
									...e[r],
									...a,
									[n.id]: {
										depth: 0,
										next: i,
										prev: null
									}
								}
							}
						}
						case v.F: {
							const {
								comment: n,
								commentsPageKey: r,
								parentCommentId: s,
								depth: o
							} = t.payload, a = e[r], i = {};
							let c = null;
							if (!a[s]) return e;
							const d = a[s].next;
							return d && (i[d.id] = {
								...a[d.id],
								prev: Object(P.g)(n.id)
							}, c = d), i[s] = {
								...a[s],
								next: Object(P.g)(n.id)
							}, {
								...e,
								[r]: {
									...e[r],
									...i,
									[n.id]: {
										depth: o,
										next: c,
										prev: Object(P.g)(s)
									}
								}
							}
						}
						default:
							return e
				}
			};
			const w = {};
			var N = (e = w, t) => {
				switch (t.type) {
					case _.b:
					case _.c:
					case v.G: {
						const {
							comment: n,
							commentsPageKey: r,
							isChatSort: s
						} = t.payload;
						return !1 === s ? e : {
							...e,
							[r]: n.id
						}
					}
					case i.b:
					case i.f: {
						const {
							commentLists: n,
							key: r,
							postId: s
						} = t.payload;
						return {
							...e,
							[r]: n[s] && n[s].head ? n[s].head.id : null
						}
					}
					default:
						return e
				}
			};
			const A = {};
			var L = (e = A, t) => {
				switch (t.type) {
					case i.d:
					case i.b:
					case i.c:
					case i.h: {
						const {
							key: n,
							postId: r
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					case v.G: {
						const {
							parentId: n,
							commentsPageKey: r
						} = t.payload;
						return e[r] ? e : {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				api: b,
				keyToChatCommentLinks: j,
				keyToCommentThreadLinkSets: k,
				keyToHeadCommentId: N,
				keyToPostId: L,
				ads: a
			})
		},
		"./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = n("./src/reddit/selectors/subreddit.ts"),
				i = n("./src/reddit/selectors/user.ts"),
				c = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				d = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const l = Object(r.a)(c.a, (e, {
					listingName: t
				}) => {
					const n = Object(i.ub)(e);
					if (!n) return !1;
					let r;
					if (-1 === [o.R, "r/popular"].indexOf(t)) {
						const s = t.replace(/^r\//, ""),
							o = Object(a.F)(e, s),
							i = n.subreddit[o];
						if (!i) return !1;
						r = i
					} else r = n;
					if (!r.rpanDuDismissalTime) return !1;
					return new Date(r.rpanDuDismissalTime).getTime() > Date.now() - 30 * s.x
				}, (e, {
					listingName: t
				}) => t, (e, {
					listingName: t
				}) => Object(d.m)(e, {
					subreddit: t
				}), d.k, (e, {
					sort: t
				}) => t, (e, t, n, r, o, a) => a !== s.P.AWARDED && (!!e && (!o.isPermanentlyCanceled && (!t && (!!r && r.show_discovery_unit))))),
				u = Object(r.a)((e, {
					listingName: t
				}) => t, (e, {
					listingName: t
				}) => Object(d.m)(e, {
					subreddit: t
				}), d.l, (e, t, n) => t ? t.discovery_unit_index : o.i)
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, n) {
			"use strict";
			n.d(t, "l", (function() {
				return O
			})), n.d(t, "m", (function() {
				return S
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "h", (function() {
				return A
			})), n.d(t, "k", (function() {
				return L
			})), n.d(t, "c", (function() {
				return D
			})), n.d(t, "f", (function() {
				return R
			})), n.d(t, "a", (function() {
				return F
			})), n.d(t, "j", (function() {
				return U
			})), n.d(t, "b", (function() {
				return W
			})), n.d(t, "e", (function() {
				return H
			})), n.d(t, "g", (function() {
				return V
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				a = n("./src/reddit/models/PublicAccessNetwork/index.ts"),
				i = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = n("./node_modules/lodash/memoize.js");
			const l = e => e.publicAccessNetwork.listings,
				u = n.n(d)()(e => Object(s.a)(Object(r.a)(l, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var m = n("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				b = e => e.publicAccessNetwork.reports.reported,
				f = e => e.publicAccessNetwork.history,
				h = e => e.publicAccessNetwork.history.cursor,
				y = e => e.publicAccessNetwork.history.visitOrder,
				g = e => e.publicAccessNetwork.hlsStreams,
				v = Object(r.a)(g, e => e.ended),
				_ = Object(r.a)(g, e => e.removed),
				x = Object(r.a)(p, v, _, (e, t, n) => {
					const r = t.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const r = n.stream.state,
							s = B(r, a.a.ENDED) ? a.a.ENDED : r,
							o = n.stream.vod_accessible;
						return s === r && !0 === o ? e : {
							...e,
							[t]: {
								...n,
								stream: {
									...n.stream,
									state: s,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return n.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const r = n.stream.state,
							s = B(r, a.a.ENDED) ? a.a.ENDED : r,
							o = n.stream.vod_accessible;
						return s === r && !1 === o ? e : {
							...e,
							[t]: {
								...n,
								stream: {
									...n.stream,
									state: s,
									vod_accessible: !1
								}
							}
						}
					}, r)
				}),
				O = (e, t) => {
					return x(e)[Object(o.g)(t)]
				},
				j = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t, (e, t) => u(t.listingName)(e, t), x, b, i.h, (e, t, n, r, s) => {
					const i = [];
					if (e) {
						const t = Object(o.g)(e);
						n[t] && i.push(t)
					}
					const c = i.concat(t),
						d = [...new Set(c)],
						l = new Set([...r, ...s]);
					return d.filter(e => {
						const t = n[e];
						return !l.has(e) && !t.post.isHidden && t.stream.state !== a.a.KILLED && t.stream.state !== a.a.PURGED
					})
				}),
				E = Object(r.a)((e, {
					count: t
				}) => t, x, (e, {
					listingName: t,
					streamIdFromPath: n
				}) => j(e, {
					listingName: t,
					streamIdFromPath: n
				}), (e, t, n) => {
					const r = n.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? r.slice(0, e) : r
				}),
				S = Object(r.a)(x, E, (e, t) => {
					const n = t[0];
					if (n) return e[n]
				}),
				I = Object(r.a)(y, (e, {
					related: t,
					streamIdFromPath: n,
					subreddit: r
				}) => E(e, {
					listingName: t || r,
					streamIdFromPath: n
				}), (e, t) => {
					const n = new Set(e),
						r = t.filter(e => !n.has(e));
					if (r.length) return r[0]
				}),
				P = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t, x, (e, {
					related: t,
					streamIdFromPath: n,
					subreddit: r
				}) => E(e, {
					listingName: t || r,
					streamIdFromPath: n
				}), f, (e, t, n, r) => {
					if (!n.length) return;
					const s = n.map(e => t[e]).filter(t => t && t.post.id !== e),
						o = s.find(e => e.stream.state === a.a.IS_LIVE);
					if (o) return o.post.id;
					const i = s.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (r.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				C = Object(s.a)(Object(r.a)(P, x, (e, t) => e ? t[e] : void 0)),
				T = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t ? Object(o.g)(t) : void 0, P, b, i.h, (e, {
					related: t,
					streamIdFromPath: n,
					subreddit: r
				}) => E(e, {
					listingName: t || r,
					streamIdFromPath: n
				}), (e, t, n, r, s) => !e || n.includes(e) || r.includes(e) ? t || s[0] : e),
				k = Object(r.a)(h, y, I, (e, t, n) => e < t.length - 1 ? t[e + 1] : n),
				w = Object(r.a)(h, y, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				N = Object(s.a)(Object(r.a)(T, x, (e, t) => e ? t[e] : void 0)),
				A = Object(s.a)(Object(r.a)(k, x, (e, t) => e ? t[e] : void 0)),
				L = Object(s.a)(Object(r.a)(w, x, (e, t) => e ? t[e] : void 0)),
				D = (Object(s.a)(Object(r.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, x, (e, t) => Object.keys(e).filter(e => !!t[e]).map(n => ({
					...t[n],
					preloadedPreviewUrl: e[n]
				})))), Object(r.a)(T, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				R = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t ? O(e, t) : void 0, e => !e || e.chat_disabled);

			function B(e, t) {
				const n = {
					[a.a.NOT_STARTED]: 0,
					[a.a.PUBLISHED]: 1,
					[a.a.IS_LIVE]: 2,
					[a.a.DISCONNECTED]: 2,
					[a.a.ENDED]: 3,
					[a.a.KILLED]: 4,
					[a.a.PURGED]: 4
				};
				return n[t] >= n[e]
			}
			const M = Object(r.a)(T, f, (e, t) => e && t.timestamps[e] || 0);
			var F;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(F || (F = {}));
			const U = Object(r.a)(T, x, m.b, (e, t, n) => {
					if (n) return F.INTRO;
					const r = e && t[e];
					if (!r) return F.UNAVAILABLE;
					const s = r.stream.state;
					return s === a.a.IS_LIVE || s === a.a.DISCONNECTED ? F.LIVE : s === a.a.ENDED && r.stream.vod_accessible ? F.VOD : F.UNAVAILABLE
				}),
				W = Object(r.a)(N, U, m.b, c.b, c.o, (e, t, n, r, s) => n ? r : e ? t === F.LIVE || t === F.VOD ? e.stream.hls_url : s : void 0),
				H = Object(r.a)(N, U, M, (e, t, n) => e ? t === F.LIVE ? e.broadcast_time : t === F.VOD && n < e.broadcast_time ? n : 0 : 0),
				V = (e, t) => {
					const n = p(e);
					return !!n && n[t] && n[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const a = e => e.publicAccessNetwork.theaterSettings,
				i = Object(r.a)(a, o.n, (e, t) => t && !e.isIntroFinished),
				c = Object(r.a)(a, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + s.a > Date.now()
		},
		"./src/reddit/selectors/appBadges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "c", (function() {
				return g
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/selectors/chat.ts"),
				o = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				a = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const c = e => e.appBadges.badges,
				d = Object(r.a)(o.a, c, s.a, (e, t, n) => e ? t && t.directMessages && t.directMessages.count || 0 : n),
				l = Object(r.a)(c, e => e && e.chatRooms && e.chatRooms.count || 0),
				u = Object(r.a)(c, e => e && e.chatRoomMentions && e.chatRoomMentions.count || 0),
				m = Object(r.a)(o.a, s.a, d, l, u, (e, t, n, r, s) => {
					if (e) {
						return n + r + s > 0
					}
					return t > 0
				}),
				p = Object(r.a)(c, e => e && e.activityTab && e.activityTab.count || 0),
				b = Object(r.a)(c, e => e && e.messageTab && e.messageTab.count || 0),
				f = Object(r.a)(p, b, (e, t) => e + t),
				h = Object(r.a)(d, b, (e, t) => e + t),
				y = Object(r.a)(d, f, (e, t) => e + t),
				g = Object(r.a)(i.K, o.a, y, h, b, i.F, d, s.a, a.d, (e, t, n, r, s, o, a, i, c) => {
					if (!e) return 0;
					const d = () => {
						return {
							inboxCount: t ? s : o || 0,
							basicChannelCount: t ? a : i || 0
						}
					};
					let l = 0;
					return l = t ? c ? n : r : (() => {
						const {
							inboxCount: e,
							basicChannelCount: t
						} = d();
						return e + t
					})()
				})
		},
		"./src/reddit/selectors/chat.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				o = n("./src/reddit/selectors/moderatorPermissions.ts");
			const a = e => e.chat.unread.count,
				i = Object(r.a)(a, e => e.basicChannelCount),
				c = (Object(r.a)(a, e => e.subredditChannelCount), e => !(e.chat.isInited || e.chat.unread.api.pending)),
				d = (e, t) => {
					const {
						chatConfig: n
					} = s.c;
					return Object(o.a)(n)(e, t)
				}
		},
		"./src/reddit/selectors/comments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return h
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "w", (function() {
				return v
			})), n.d(t, "x", (function() {
				return _
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "F", (function() {
				return E
			})), n.d(t, "n", (function() {
				return S
			})), n.d(t, "o", (function() {
				return I
			})), n.d(t, "j", (function() {
				return P
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "h", (function() {
				return T
			})), n.d(t, "a", (function() {
				return k
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "q", (function() {
				return N
			})), n.d(t, "m", (function() {
				return A
			})), n.d(t, "t", (function() {
				return L
			})), n.d(t, "y", (function() {
				return D
			})), n.d(t, "H", (function() {
				return R
			})), n.d(t, "s", (function() {
				return B
			})), n.d(t, "A", (function() {
				return M
			})), n.d(t, "B", (function() {
				return F
			})), n.d(t, "D", (function() {
				return U
			})), n.d(t, "r", (function() {
				return W
			})), n.d(t, "e", (function() {
				return H
			})), n.d(t, "v", (function() {
				return V
			})), n.d(t, "I", (function() {
				return K
			})), n.d(t, "f", (function() {
				return G
			})), n.d(t, "i", (function() {
				return q
			})), n.d(t, "E", (function() {
				return Z
			})), n.d(t, "z", (function() {
				return Q
			})), n.d(t, "G", (function() {
				return z
			})), n.d(t, "p", (function() {
				return Y
			})), n.d(t, "J", (function() {
				return J
			})), n.d(t, "C", (function() {
				return X
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/values.js"),
				s = n.n(r),
				o = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeCommentPermalink/index.ts"),
				i = n("./src/lib/objectSelector/index.ts"),
				c = n("./src/reddit/constants/comments.ts"),
				d = n("./src/reddit/models/Post/index.ts"),
				l = n("./src/reddit/selectors/posts.ts"),
				u = n("./src/reddit/selectors/subreddit.ts"),
				m = n("./src/reddit/selectors/commentSelector.ts"),
				p = n("./src/lib/initializeClient/installReducer.ts"),
				b = n("./src/reddit/reducers/features/comments/index.ts"),
				f = n("./src/reddit/reducers/pages/comments/index.ts");
			Object(p.a)({
				features: {
					comments: b.a
				},
				pages: {
					comments: f.a
				}
			});
			const h = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.error[t],
				y = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.pending[t],
				g = (e, {
					commentsPageKey: t
				}) => e.pages.comments.api.fullyLoaded[t],
				v = (e, t) => e.pages.comments.keyToHeadCommentId[t.commentsPageKey],
				_ = (e, t) => {
					const n = v(e, t);
					if (n) return Object(m.a)(e, {
						commentId: n
					})
				},
				x = [],
				O = Object(i.a)((e, t) => {
					const n = _(e, t),
						r = n && n.id;
					if (!r) return x;
					const {
						commentsPageKey: s
					} = t, o = e.pages.comments.keyToCommentThreadLinkSets[s], a = [];
					let i = {
						id: r,
						type: c.a.Comment
					};
					do {
						a.push(i), i = o[i.id].next
					} while (i);
					return a
				}),
				j = (e, t) => v(e, t) ? e.pages.comments.keyToChatCommentLinks[t.commentsPageKey] : [],
				E = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					return n ? e.posts.models[n] : null
				},
				S = (e, {
					commentId: t,
					commentLink: n,
					commentsPageKey: r
				}) => {
					const s = e.pages.comments.keyToCommentThreadLinkSets[r];
					return s ? n ? s[n.id] : t ? s[t] : null : null
				},
				I = (e, {
					commentsPageKey: t
				}) => e.pages.comments.keyToCommentThreadLinkSets[t],
				P = (e, t) => {
					const n = t.commentsPageKey ? S(e, t) : null;
					return n ? n.depth : null
				},
				C = (e, {
					commentLink: t
				}) => {
					const {
						id: n,
						type: r
					} = t;
					switch (r) {
						case c.a.Comment:
							return e.features.comments.models[n];
						case c.a.MoreComments:
							return e.moreComments.models[n];
						case c.a.ContinueThread:
							return e.continueThreads.models[n];
						default:
							return null
					}
				},
				T = (e, t) => {
					if (e.platform.currentPage && e.platform.currentPage.urlParams && e.platform.currentPage.urlParams.partialPostId) {
						const {
							partialPostId: t
						} = e.platform.currentPage.urlParams, n = Object(d.r)(t);
						return Array.from(new Set(Object.keys(e.features.comments.models).filter(t => e.features.comments.models[t].postId === n && e.features.comments.models[t].author !== o.A).map(t => e.features.comments.models[t].author)))
					}
					return []
				},
				k = (e, {
					commentsPageKey: t
				}) => e.features.comments.collapsed[t],
				w = e => e.moreComments.models,
				N = e => e.features.comments.models,
				A = (e, {
					commentId: t
				}) => {
					const n = Object(m.a)(e, {
						commentId: t
					});
					return n ? Object(a.a)(Object(l.H)(e, n), t) : ""
				},
				L = (e, {
					commentId: t
				}) => !!(t && e.features.comments.focused && e.features.comments.focused[t]),
				D = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.isEditing[n] && e.features.comments.isEditing[n][t]),
				R = (e, {
					commentId: t,
					commentsPageKey: n
				}) => !!(t && e.features.comments.replyFormOpen[n] && e.features.comments.replyFormOpen[n][t]),
				B = (e, {
					commentsPageKey: t
				}) => {
					const n = t && e.features.comments.replyFormOpen[t] || {},
						r = Object.keys(n).find(e => n[e]),
						s = Object(m.a)(e, {
							commentId: r
						}),
						o = s && P(e, {
							commentId: s.id,
							commentLink: void 0,
							commentsPageKey: t
						});
					if (s && "number" == typeof o) return {
						...s,
						depth: o
					}
				},
				M = (e, {
					moreCommentsId: t
				}) => e.moreComments.models[t],
				F = (e, {
					moreCommentsId: t
				}) => !!e.moreComments.api.pending[t],
				U = (e, {
					commentsPageKey: t
				}) => {
					const n = e.pages.comments.keyToPostId[t];
					if (n) {
						const t = s()(e.moreComments.models).find(t => t.postId === n && 0 === t.depth && !(void 0 !== e.moreComments.api.pending[t.id]));
						if (t) return {
							moreCommentId: t.id,
							pending: !!e.moreComments.api.pending[t.id]
						}
					}
					return null
				},
				W = (e, {
					id: t
				}) => e.continueThreads.models[t],
				H = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.models[t] : void 0;
					if (!n) return null;
					const r = e.authorFlair.models[n.subredditId];
					return r ? r[n.author] : null
				},
				V = (e, {
					draftKey: t
				}) => !!e.features.comments.submit.error[t],
				K = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.submit.error[t];
					return n && n.fields ? n.fields.map(e => e.msg) : []
				},
				G = (e, {
					draftKey: t
				}) => {
					const n = e.features.comments.drafts[t];
					return !!n && n.autofocusDisabled
				},
				q = (e, {
					draftKey: t
				}) => e.features.comments.drafts[t],
				Z = (e, {
					commentId: t
				}) => {
					const n = t ? e.features.comments.submit.error[t] : void 0;
					return n && n.fields ? n.fields.map(e => e.msg) : void 0
				},
				Q = (e, {
					commentId: t
				}) => !!t && e.features.comments.submit.pending[t],
				z = (e, {
					commentId: t
				}) => !!t && e.features.comments.models[t].sendReplies,
				Y = e => e.features.comments.visitHighlightFilter,
				J = (e, t) => {
					const n = Object(m.a)(e, t);
					if (n) return Object(u.Y)(e, n)
				},
				X = (e, {
					postId: t
				}) => e.features.comments.newCommentsCount[t] ? e.features.comments.newCommentsCount[t] : 0
		},
		"./src/reddit/selectors/experiments/inboxAppBadgingGql.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const c = Object(r.a)(e => Object(o.c)(e, {
					experimentName: s.Xb,
					experimentEligibilitySelector: d
				}), a.a),
				d = e => Object(i.J)(e) || Object(i.K)(e),
				l = Object(r.a)(c, e => e === s.dc.Enabled)
		},
		"./src/reddit/selectors/experiments/inboxRedesign.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "e", (function() {
				return y
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const c = Object(r.a)(e => Object(o.c)(e, {
					experimentName: s.ac,
					experimentEligibilitySelector: d
				}), a.a),
				d = e => Object(i.J)(e) || Object(i.K)(e),
				l = Object(r.a)(c, e => e === s.gc.Redesign),
				u = Object(r.a)(e => Object(o.c)(e, {
					experimentName: s.Zb,
					experimentEligibilitySelector: d
				}), a.a),
				m = Object(r.a)(u, e => e === s.fc.Enabled),
				p = Object(r.a)(e => Object(o.c)(e, {
					experimentName: s.Yb,
					experimentEligibilitySelector: d
				}), a.a),
				b = Object(r.a)(p, e => e === s.ec.Enabled),
				f = Object(r.a)(e => Object(o.c)(e, {
					experimentName: s.R,
					experimentEligibilitySelector: d
				}), a.a),
				h = Object(r.a)(f, e => e === s.ab.NoOverflow),
				y = Object(r.a)(f, e => e === s.ab.UndoBar)
		},
		"./src/reddit/selectors/experiments/resonatePilot.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/meta.ts");
			const a = e => Object(s.c)(e, {
				experimentEligibilitySelector: e => !Object(o.d)(e) && "US" === Object(o.b)(e),
				experimentName: r.Lc
			}) === r.Uc.Enabled
		},
		"./src/reddit/selectors/experiments/trending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const a = e => Object(o.H)(e) || !(r.kd.Holdout === Object(s.c)(e, {
				experimentEligibilitySelector: s.a,
				experimentName: r.hd
			}))
		},
		"./src/reddit/selectors/experiments/uiSimplification.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/featureFlags/utils.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = ["AU", "CA", "GB", "US"],
				i = new Set([r.Tb.AllItems, r.Tb.TrendingSearch]),
				c = e => {
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: Object(s.d)(Object(s.b)(...a)),
						experimentName: r.Ub
					});
					return i.has(t)
				},
				d = e => r.Tb.AllItems === Object(o.c)(e, {
					experimentEligibilitySelector: Object(s.d)(Object(s.b)(...a)),
					experimentName: r.Ub
				})
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Subreddit.3d599cbe146a86f07372.js.map