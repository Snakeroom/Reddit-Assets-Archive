// https://www.redditstatic.com/desktop2x/vendors~Reddit~StandalonePostPage.8c700812183259010dec.js
// Retrieved at 4/6/2021, 3:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~Reddit~StandalonePostPage"], {
		"./node_modules/@researchgate/react-intersection-observer/lib/es/index.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return x
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				a = r("./node_modules/react-dom/index.js"),
				i = (r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js"), /^-?\d*\.?\d+(px|%)$/);

			function s(e, t) {
				return Array.isArray(e) && Array.isArray(t) && e.length === t.length ? e.some((function(r, n) {
					return s(e[n], t[n])
				})) : e !== t
			}
			var l = new Map;

			function u(e) {
				void 0 === e && (e = {});
				for (var t, r = e.root || null, n = function(e) {
						var t = (e ? e.trim() : "0px").split(/\s+/).map((function(e) {
								if (!i.test(e)) throw new Error("rootMargin must be a string literal containing pixels and/or percent values");
								return e
							})),
							r = t[0],
							n = void 0 === r ? "0px" : r,
							o = t[1],
							a = void 0 === o ? n : o,
							s = t[2],
							l = void 0 === s ? n : s,
							u = t[3];
						return n + " " + a + " " + l + " " + (void 0 === u ? a : u)
					}(e.rootMargin), o = Array.isArray(e.threshold) ? e.threshold : [null != e.threshold ? e.threshold : 0], a = l.keys(); t = a.next().value;) {
					if (!(r !== t.root || n !== t.rootMargin || s(o, t.thresholds))) return t
				}
				return null
			}

			function c(e, t) {
				var r = l.get(e);
				if (r)
					for (var n, o = r.values(); n = o.next().value;)
						if (n.target === t.target) return n;
				return null
			}

			function f(e, t) {
				for (var r = 0; r < e.length; r++) {
					var n = c(t, e[r]);
					n && n.handleChange(e[r])
				}
			}

			function p(e) {
				return u(e) || new IntersectionObserver(f, e)
			}
			var d = r("./node_modules/invariant/browser.js"),
				m = r.n(d),
				y = {},
				h = Object.create(null, {
					errorReporter: {
						configurable: !1,
						get: function() {
							return y.errorReporter || function(e) {
								return m()(!1, e)
							}
						},
						set: function(e) {
							if ("function" != typeof e) throw new Error("ReactIntersectionObserver: `Config.errorReporter` must be a callable");
							y.errorReporter = e
						}
					}
				});

			function v(e) {
				if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return e
			}

			function b(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}
			var g = ["root", "rootMargin", "threshold"],
				O = ["root", "rootMargin", "threshold", "disabled"],
				_ = Object.prototype,
				j = _.hasOwnProperty,
				w = _.toString,
				S = function(e) {
					return g.reduce((function(t, r) {
						if (j.call(e, r)) {
							var n = "root" === r && "[object String]" === w.call(e[r]);
							t[r] = n ? document.querySelector(e[r]) : e[r]
						}
						return t
					}), {})
				},
				x = function(e) {
					var t, r;

					function n() {
						for (var t, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
						return b(v(t = e.call.apply(e, [this].concat(n)) || this), "handleChange", (function(e) {
							t.props.onChange(e, t.externalUnobserve)
						})), b(v(t), "handleNode", (function(e) {
							var r = t.props.children;
							if (null != r) {
								var n = r.ref;
								n && ("function" == typeof n ? n(e) : "object" == typeof n && (n.current = e))
							}
							t.targetNode = e && Object(a.findDOMNode)(e)
						})), b(v(t), "observe", (function() {
							return null != t.props.children && !t.props.disabled && (t.targetNode ? (t.observer = p(S(t.props)), t.target = t.targetNode, e = v(t), l.has(e.observer) || l.set(e.observer, new Set), l.get(e.observer).add(e), e.observer.observe(e.target), !0) : (h.errorReporter("ReactIntersectionObserver: Can't find DOM node in the provided children. Make sure to render at least one DOM node in the tree."), !1));
							var e
						})), b(v(t), "unobserve", (function(e) {
							! function(e, t) {
								if (l.has(e.observer)) {
									var r = l.get(e.observer);
									r.delete(e) && (r.size > 0 ? e.observer.unobserve(t) : (e.observer.disconnect(), l.delete(e.observer)))
								}
							}(v(t), e)
						})), b(v(t), "externalUnobserve", (function() {
							t.unobserve(t.targetNode)
						})), t
					}
					r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
					var i = n.prototype;
					return i.getSnapshotBeforeUpdate = function(e) {
						var t = this;
						this.prevTargetNode = this.targetNode;
						var r = O.some((function(r) {
							return s(t.props[r], e[r])
						}));
						return r && this.prevTargetNode && (e.disabled || this.unobserve(this.prevTargetNode)), r
					}, i.componentDidUpdate = function(e, t, r) {
						var n = !1;
						r || (n = this.prevTargetNode !== this.targetNode) && null != this.prevTargetNode && this.unobserve(this.prevTargetNode), (r || n) && this.observe()
					}, i.componentDidMount = function() {
						this.observe()
					}, i.componentWillUnmount = function() {
						this.targetNode && this.unobserve(this.targetNode)
					}, i.render = function() {
						var e = this.props.children;
						return null != e ? o.a.cloneElement(o.a.Children.only(e), {
							ref: this.handleNode
						}) : null
					}, n
				}(o.a.Component);
			b(x, "displayName", "IntersectionObserver")
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function a() {}
			a.resetWarningCache = o, e.exports = function() {
				function e(e, t, r, o, a, i) {
					if (i !== n) {
						var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw s.name = "Invariant Violation", s
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
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/index.js": function(e, t, r) {
			e.exports = r("./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/@researchgate/react-intersection-observer/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, r) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var r = Math.floor,
				n = Math.random;
			e.exports = function(e, t) {
				return e + r(n() * (t - e + 1))
			}
		},
		"./node_modules/lodash/random.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseRandom.js"),
				o = r("./node_modules/lodash/_isIterateeCall.js"),
				a = r("./node_modules/lodash/toFinite.js"),
				i = parseFloat,
				s = Math.min,
				l = Math.random;
			e.exports = function(e, t, r) {
				if (r && "boolean" != typeof r && o(e, t, r) && (t = r = void 0), void 0 === r && ("boolean" == typeof t ? (r = t, t = void 0) : "boolean" == typeof e && (r = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = a(e), void 0 === t ? (t = e, e = 0) : t = a(t)), e > t) {
					var u = e;
					e = t, t = u
				}
				if (r || e % 1 || t % 1) {
					var c = l();
					return s(e + c * (t - e + i("1e-" + ((c + "").length - 1))), t)
				}
				return n(e, t)
			}
		},
		"./node_modules/react-motion/lib/Motion.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0;
			var n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				},
				o = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var n = t[r];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, r, n) {
						return r && e(t.prototype, r), n && e(t, n), t
					}
				}();

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var i = a(r("./node_modules/react-motion/lib/mapToZero.js")),
				s = a(r("./node_modules/react-motion/lib/stripStyle.js")),
				l = a(r("./node_modules/react-motion/lib/stepper.js")),
				u = a(r("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				c = a(r("./node_modules/raf/index.js")),
				f = a(r("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				p = a(r("./node_modules/react/index.js")),
				d = a(r("./node_modules/react-motion/node_modules/prop-types/index.js")),
				m = 1e3 / 60,
				y = function(e) {
					function t(r) {
						var o = this;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), e.call(this, r), this.wasAnimating = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyle = null, this.clearUnreadPropStyle = function(e) {
							var t = !1,
								r = o.state,
								a = r.currentStyle,
								i = r.currentVelocity,
								s = r.lastIdealStyle,
								l = r.lastIdealVelocity;
							for (var u in e)
								if (Object.prototype.hasOwnProperty.call(e, u)) {
									var c = e[u];
									"number" == typeof c && (t || (t = !0, a = n({}, a), i = n({}, i), s = n({}, s), l = n({}, l)), a[u] = c, i[u] = 0, s[u] = c, l[u] = 0)
								} t && o.setState({
								currentStyle: a,
								currentVelocity: i,
								lastIdealStyle: s,
								lastIdealVelocity: l
							})
						}, this.startAnimationIfNecessary = function() {
							o.animationID = c.default((function(e) {
								var t = o.props.style;
								if (f.default(o.state.currentStyle, t, o.state.currentVelocity)) return o.wasAnimating && o.props.onRest && o.props.onRest(), o.animationID = null, o.wasAnimating = !1, void(o.accumulatedTime = 0);
								o.wasAnimating = !0;
								var r = e || u.default(),
									n = r - o.prevTime;
								if (o.prevTime = r, o.accumulatedTime = o.accumulatedTime + n, o.accumulatedTime > 10 * m && (o.accumulatedTime = 0), 0 === o.accumulatedTime) return o.animationID = null, void o.startAnimationIfNecessary();
								var a = (o.accumulatedTime - Math.floor(o.accumulatedTime / m) * m) / m,
									i = Math.floor(o.accumulatedTime / m),
									s = {},
									c = {},
									p = {},
									d = {};
								for (var y in t)
									if (Object.prototype.hasOwnProperty.call(t, y)) {
										var h = t[y];
										if ("number" == typeof h) p[y] = h, d[y] = 0, s[y] = h, c[y] = 0;
										else {
											for (var v = o.state.lastIdealStyle[y], b = o.state.lastIdealVelocity[y], g = 0; g < i; g++) {
												var O = l.default(m / 1e3, v, b, h.val, h.stiffness, h.damping, h.precision);
												v = O[0], b = O[1]
											}
											var _ = l.default(m / 1e3, v, b, h.val, h.stiffness, h.damping, h.precision),
												j = _[0],
												w = _[1];
											p[y] = v + (j - v) * a, d[y] = b + (w - b) * a, s[y] = v, c[y] = b
										}
									} o.animationID = null, o.accumulatedTime -= i * m, o.setState({
									currentStyle: p,
									currentVelocity: d,
									lastIdealStyle: s,
									lastIdealVelocity: c
								}), o.unreadPropStyle = null, o.startAnimationIfNecessary()
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
					}(t, e), o(t, null, [{
						key: "propTypes",
						value: {
							defaultStyle: d.default.objectOf(d.default.number),
							style: d.default.objectOf(d.default.oneOfType([d.default.number, d.default.object])).isRequired,
							children: d.default.func.isRequired,
							onRest: d.default.func
						},
						enumerable: !0
					}]), t.prototype.defaultState = function() {
						var e = this.props,
							t = e.defaultStyle,
							r = e.style,
							n = t || s.default(r),
							o = i.default(n);
						return {
							currentStyle: n,
							currentVelocity: o,
							lastIdealStyle: n,
							lastIdealVelocity: o
						}
					}, t.prototype.componentDidMount = function() {
						this.prevTime = u.default(), this.startAnimationIfNecessary()
					}, t.prototype.componentWillReceiveProps = function(e) {
						null != this.unreadPropStyle && this.clearUnreadPropStyle(this.unreadPropStyle), this.unreadPropStyle = e.style, null == this.animationID && (this.prevTime = u.default(), this.startAnimationIfNecessary())
					}, t.prototype.componentWillUnmount = function() {
						null != this.animationID && (c.default.cancel(this.animationID), this.animationID = null)
					}, t.prototype.render = function() {
						var e = this.props.children(this.state.currentStyle);
						return e && p.default.Children.only(e)
					}, t
				}(p.default.Component);
			t.default = y, e.exports = t.default
		},
		"./node_modules/react-motion/lib/StaggeredMotion.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0;
			var n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				},
				o = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var n = t[r];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, r, n) {
						return r && e(t.prototype, r), n && e(t, n), t
					}
				}();

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var i = a(r("./node_modules/react-motion/lib/mapToZero.js")),
				s = a(r("./node_modules/react-motion/lib/stripStyle.js")),
				l = a(r("./node_modules/react-motion/lib/stepper.js")),
				u = a(r("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				c = a(r("./node_modules/raf/index.js")),
				f = a(r("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				p = a(r("./node_modules/react/index.js")),
				d = a(r("./node_modules/react-motion/node_modules/prop-types/index.js")),
				m = 1e3 / 60;
			var y = function(e) {
				function t(r) {
					var o = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, r), this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = o.state, r = t.currentStyles, a = t.currentVelocities, i = t.lastIdealStyles, s = t.lastIdealVelocities, l = !1, u = 0; u < e.length; u++) {
							var c = e[u],
								f = !1;
							for (var p in c)
								if (Object.prototype.hasOwnProperty.call(c, p)) {
									var d = c[p];
									"number" == typeof d && (f || (f = !0, l = !0, r[u] = n({}, r[u]), a[u] = n({}, a[u]), i[u] = n({}, i[u]), s[u] = n({}, s[u])), r[u][p] = d, a[u][p] = 0, i[u][p] = d, s[u][p] = 0)
								}
						}
						l && o.setState({
							currentStyles: r,
							currentVelocities: a,
							lastIdealStyles: i,
							lastIdealVelocities: s
						})
					}, this.startAnimationIfNecessary = function() {
						o.animationID = c.default((function(e) {
							var t = o.props.styles(o.state.lastIdealStyles);
							if (function(e, t, r) {
									for (var n = 0; n < e.length; n++)
										if (!f.default(e[n], t[n], r[n])) return !1;
									return !0
								}(o.state.currentStyles, t, o.state.currentVelocities)) return o.animationID = null, void(o.accumulatedTime = 0);
							var r = e || u.default(),
								n = r - o.prevTime;
							if (o.prevTime = r, o.accumulatedTime = o.accumulatedTime + n, o.accumulatedTime > 10 * m && (o.accumulatedTime = 0), 0 === o.accumulatedTime) return o.animationID = null, void o.startAnimationIfNecessary();
							for (var a = (o.accumulatedTime - Math.floor(o.accumulatedTime / m) * m) / m, i = Math.floor(o.accumulatedTime / m), s = [], c = [], p = [], d = [], y = 0; y < t.length; y++) {
								var h = t[y],
									v = {},
									b = {},
									g = {},
									O = {};
								for (var _ in h)
									if (Object.prototype.hasOwnProperty.call(h, _)) {
										var j = h[_];
										if ("number" == typeof j) v[_] = j, b[_] = 0, g[_] = j, O[_] = 0;
										else {
											for (var w = o.state.lastIdealStyles[y][_], S = o.state.lastIdealVelocities[y][_], x = 0; x < i; x++) {
												var T = l.default(m / 1e3, w, S, j.val, j.stiffness, j.damping, j.precision);
												w = T[0], S = T[1]
											}
											var P = l.default(m / 1e3, w, S, j.val, j.stiffness, j.damping, j.precision),
												I = P[0],
												k = P[1];
											v[_] = w + (I - w) * a, b[_] = S + (k - S) * a, g[_] = w, O[_] = S
										}
									} p[y] = v, d[y] = b, s[y] = g, c[y] = O
							}
							o.animationID = null, o.accumulatedTime -= i * m, o.setState({
								currentStyles: p,
								currentVelocities: d,
								lastIdealStyles: s,
								lastIdealVelocities: c
							}), o.unreadPropStyles = null, o.startAnimationIfNecessary()
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
				}(t, e), o(t, null, [{
					key: "propTypes",
					value: {
						defaultStyles: d.default.arrayOf(d.default.objectOf(d.default.number)),
						styles: d.default.func.isRequired,
						children: d.default.func.isRequired
					},
					enumerable: !0
				}]), t.prototype.defaultState = function() {
					var e = this.props,
						t = e.defaultStyles,
						r = e.styles,
						n = t || r().map(s.default),
						o = n.map((function(e) {
							return i.default(e)
						}));
					return {
						currentStyles: n,
						currentVelocities: o,
						lastIdealStyles: n,
						lastIdealVelocities: o
					}
				}, t.prototype.componentDidMount = function() {
					this.prevTime = u.default(), this.startAnimationIfNecessary()
				}, t.prototype.componentWillReceiveProps = function(e) {
					null != this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles), this.unreadPropStyles = e.styles(this.state.lastIdealStyles), null == this.animationID && (this.prevTime = u.default(), this.startAnimationIfNecessary())
				}, t.prototype.componentWillUnmount = function() {
					null != this.animationID && (c.default.cancel(this.animationID), this.animationID = null)
				}, t.prototype.render = function() {
					var e = this.props.children(this.state.currentStyles);
					return e && p.default.Children.only(e)
				}, t
			}(p.default.Component);
			t.default = y, e.exports = t.default
		},
		"./node_modules/react-motion/lib/TransitionMotion.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0;
			var n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				},
				o = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var n = t[r];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, r, n) {
						return r && e(t.prototype, r), n && e(t, n), t
					}
				}();

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var i = a(r("./node_modules/react-motion/lib/mapToZero.js")),
				s = a(r("./node_modules/react-motion/lib/stripStyle.js")),
				l = a(r("./node_modules/react-motion/lib/stepper.js")),
				u = a(r("./node_modules/react-motion/lib/mergeDiff.js")),
				c = a(r("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				f = a(r("./node_modules/raf/index.js")),
				p = a(r("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				d = a(r("./node_modules/react/index.js")),
				m = a(r("./node_modules/react-motion/node_modules/prop-types/index.js")),
				y = 1e3 / 60;

			function h(e, t, r) {
				var n = t;
				return null == n ? e.map((function(e, t) {
					return {
						key: e.key,
						data: e.data,
						style: r[t]
					}
				})) : e.map((function(e, t) {
					for (var o = 0; o < n.length; o++)
						if (n[o].key === e.key) return {
							key: n[o].key,
							data: n[o].data,
							style: r[t]
						};
					return {
						key: e.key,
						data: e.data,
						style: r[t]
					}
				}))
			}

			function v(e, t, r, n, o, a, s, l, c) {
				for (var f = u.default(n, o, (function(e, n) {
						var o = t(n);
						return null == o ? (r({
							key: n.key,
							data: n.data
						}), null) : p.default(a[e], o, s[e]) ? (r({
							key: n.key,
							data: n.data
						}), null) : {
							key: n.key,
							data: n.data,
							style: o
						}
					})), d = [], m = [], y = [], h = [], v = 0; v < f.length; v++) {
					for (var b = f[v], g = null, O = 0; O < n.length; O++)
						if (n[O].key === b.key) {
							g = O;
							break
						} if (null == g) {
						var _ = e(b);
						d[v] = _, y[v] = _;
						var j = i.default(b.style);
						m[v] = j, h[v] = j
					} else d[v] = a[g], y[v] = l[g], m[v] = s[g], h[v] = c[g]
				}
				return [f, d, m, y, h]
			}
			var b = function(e) {
				function t(r) {
					var o = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, r), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = v(o.props.willEnter, o.props.willLeave, o.props.didLeave, o.state.mergedPropsStyles, e, o.state.currentStyles, o.state.currentVelocities, o.state.lastIdealStyles, o.state.lastIdealVelocities), r = t[0], a = t[1], i = t[2], s = t[3], l = t[4], u = 0; u < e.length; u++) {
							var c = e[u].style,
								f = !1;
							for (var p in c)
								if (Object.prototype.hasOwnProperty.call(c, p)) {
									var d = c[p];
									"number" == typeof d && (f || (f = !0, a[u] = n({}, a[u]), i[u] = n({}, i[u]), s[u] = n({}, s[u]), l[u] = n({}, l[u]), r[u] = {
										key: r[u].key,
										data: r[u].data,
										style: n({}, r[u].style)
									}), a[u][p] = d, i[u][p] = 0, s[u][p] = d, l[u][p] = 0, r[u].style[p] = d)
								}
						}
						o.setState({
							currentStyles: a,
							currentVelocities: i,
							mergedPropsStyles: r,
							lastIdealStyles: s,
							lastIdealVelocities: l
						})
					}, this.startAnimationIfNecessary = function() {
						o.unmounting || (o.animationID = f.default((function(e) {
							if (!o.unmounting) {
								var t = o.props.styles,
									r = "function" == typeof t ? t(h(o.state.mergedPropsStyles, o.unreadPropStyles, o.state.lastIdealStyles)) : t;
								if (function(e, t, r, n) {
										if (n.length !== t.length) return !1;
										for (var o = 0; o < n.length; o++)
											if (n[o].key !== t[o].key) return !1;
										for (o = 0; o < n.length; o++)
											if (!p.default(e[o], t[o].style, r[o])) return !1;
										return !0
									}(o.state.currentStyles, r, o.state.currentVelocities, o.state.mergedPropsStyles)) return o.animationID = null, void(o.accumulatedTime = 0);
								var n = e || c.default(),
									a = n - o.prevTime;
								if (o.prevTime = n, o.accumulatedTime = o.accumulatedTime + a, o.accumulatedTime > 10 * y && (o.accumulatedTime = 0), 0 === o.accumulatedTime) return o.animationID = null, void o.startAnimationIfNecessary();
								for (var i = (o.accumulatedTime - Math.floor(o.accumulatedTime / y) * y) / y, s = Math.floor(o.accumulatedTime / y), u = v(o.props.willEnter, o.props.willLeave, o.props.didLeave, o.state.mergedPropsStyles, r, o.state.currentStyles, o.state.currentVelocities, o.state.lastIdealStyles, o.state.lastIdealVelocities), f = u[0], d = u[1], m = u[2], b = u[3], g = u[4], O = 0; O < f.length; O++) {
									var _ = f[O].style,
										j = {},
										w = {},
										S = {},
										x = {};
									for (var T in _)
										if (Object.prototype.hasOwnProperty.call(_, T)) {
											var P = _[T];
											if ("number" == typeof P) j[T] = P, w[T] = 0, S[T] = P, x[T] = 0;
											else {
												for (var I = b[O][T], k = g[O][T], M = 0; M < s; M++) {
													var D = l.default(y / 1e3, I, k, P.val, P.stiffness, P.damping, P.precision);
													I = D[0], k = D[1]
												}
												var E = l.default(y / 1e3, I, k, P.val, P.stiffness, P.damping, P.precision),
													R = E[0],
													A = E[1];
												j[T] = I + (R - I) * i, w[T] = k + (A - k) * i, S[T] = I, x[T] = k
											}
										} b[O] = S, g[O] = x, d[O] = j, m[O] = w
								}
								o.animationID = null, o.accumulatedTime -= s * y, o.setState({
									currentStyles: d,
									currentVelocities: m,
									lastIdealStyles: b,
									lastIdealVelocities: g,
									mergedPropsStyles: f
								}), o.unreadPropStyles = null, o.startAnimationIfNecessary()
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
				}(t, e), o(t, null, [{
					key: "propTypes",
					value: {
						defaultStyles: m.default.arrayOf(m.default.shape({
							key: m.default.string.isRequired,
							data: m.default.any,
							style: m.default.objectOf(m.default.number).isRequired
						})),
						styles: m.default.oneOfType([m.default.func, m.default.arrayOf(m.default.shape({
							key: m.default.string.isRequired,
							data: m.default.any,
							style: m.default.objectOf(m.default.oneOfType([m.default.number, m.default.object])).isRequired
						}))]).isRequired,
						children: m.default.func.isRequired,
						willEnter: m.default.func,
						willLeave: m.default.func,
						didLeave: m.default.func
					},
					enumerable: !0
				}, {
					key: "defaultProps",
					value: {
						willEnter: function(e) {
							return s.default(e.style)
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
						r = e.styles,
						n = e.willEnter,
						o = e.willLeave,
						a = e.didLeave,
						l = "function" == typeof r ? r(t) : r,
						u = void 0;
					u = null == t ? l : t.map((function(e) {
						for (var t = 0; t < l.length; t++)
							if (l[t].key === e.key) return l[t];
						return e
					}));
					var c = null == t ? l.map((function(e) {
							return s.default(e.style)
						})) : t.map((function(e) {
							return s.default(e.style)
						})),
						f = null == t ? l.map((function(e) {
							return i.default(e.style)
						})) : t.map((function(e) {
							return i.default(e.style)
						})),
						p = v(n, o, a, u, l, c, f, c, f),
						d = p[0];
					return {
						currentStyles: p[1],
						currentVelocities: p[2],
						lastIdealStyles: p[3],
						lastIdealVelocities: p[4],
						mergedPropsStyles: d
					}
				}, t.prototype.componentDidMount = function() {
					this.prevTime = c.default(), this.startAnimationIfNecessary()
				}, t.prototype.componentWillReceiveProps = function(e) {
					this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles);
					var t = e.styles;
					this.unreadPropStyles = "function" == typeof t ? t(h(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles)) : t, null == this.animationID && (this.prevTime = c.default(), this.startAnimationIfNecessary())
				}, t.prototype.componentWillUnmount = function() {
					this.unmounting = !0, null != this.animationID && (f.default.cancel(this.animationID), this.animationID = null)
				}, t.prototype.render = function() {
					var e = h(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles),
						t = this.props.children(e);
					return t && d.default.Children.only(t)
				}, t
			}(d.default.Component);
			t.default = b, e.exports = t.default
		},
		"./node_modules/react-motion/lib/mapToZero.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0, t.default = function(e) {
				var t = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = 0);
				return t
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/mergeDiff.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, r) {
				for (var n = {}, o = 0; o < e.length; o++) n[e[o].key] = o;
				var a = {};
				for (o = 0; o < t.length; o++) a[t[o].key] = o;
				var i = [];
				for (o = 0; o < t.length; o++) i[o] = t[o];
				for (o = 0; o < e.length; o++)
					if (!Object.prototype.hasOwnProperty.call(a, e[o].key)) {
						var s = r(o, e[o]);
						null != s && i.push(s)
					} return i.sort((function(e, r) {
					var o = a[e.key],
						i = a[r.key],
						s = n[e.key],
						l = n[r.key];
					if (null != o && null != i) return a[e.key] - a[r.key];
					if (null != s && null != l) return n[e.key] - n[r.key];
					if (null != o) {
						for (var u = 0; u < t.length; u++) {
							var c = t[u].key;
							if (Object.prototype.hasOwnProperty.call(n, c)) {
								if (o < a[c] && l > n[c]) return -1;
								if (o > a[c] && l < n[c]) return 1
							}
						}
						return 1
					}
					for (u = 0; u < t.length; u++) {
						c = t[u].key;
						if (Object.prototype.hasOwnProperty.call(n, c)) {
							if (i < a[c] && s > n[c]) return 1;
							if (i > a[c] && s < n[c]) return -1
						}
					}
					return -1
				}))
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/presets.js": function(e, t, r) {
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
		"./node_modules/react-motion/lib/react-motion.js": function(e, t, r) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e.default : e
			}
			t.__esModule = !0;
			var o = r("./node_modules/react-motion/lib/Motion.js");
			t.Motion = n(o);
			var a = r("./node_modules/react-motion/lib/StaggeredMotion.js");
			t.StaggeredMotion = n(a);
			var i = r("./node_modules/react-motion/lib/TransitionMotion.js");
			t.TransitionMotion = n(i);
			var s = r("./node_modules/react-motion/lib/spring.js");
			t.spring = n(s);
			var l = r("./node_modules/react-motion/lib/presets.js");
			t.presets = n(l);
			var u = r("./node_modules/react-motion/lib/stripStyle.js");
			t.stripStyle = n(u);
			var c = r("./node_modules/react-motion/lib/reorderKeys.js");
			t.reorderKeys = n(c)
		},
		"./node_modules/react-motion/lib/reorderKeys.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0, t.default = function() {
				0
			};
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/shouldStopAnimation.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, r) {
				for (var n in t)
					if (Object.prototype.hasOwnProperty.call(t, n)) {
						if (0 !== r[n]) return !1;
						var o = "number" == typeof t[n] ? t[n] : t[n].val;
						if (e[n] !== o) return !1
					} return !0
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/spring.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0;
			var n = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = arguments[t];
					for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
				}
				return e
			};
			t.default = function(e, t) {
				return n({}, s, t, {
					val: e
				})
			};
			var o, a = r("./node_modules/react-motion/lib/presets.js"),
				i = (o = a) && o.__esModule ? o : {
					default: o
				},
				s = n({}, i.default.noWobble, {
					precision: .01
				});
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stepper.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, r, o, a, i, s) {
				var l = r + (-a * (t - o) + -i * r) * e,
					u = t + l * e;
				if (Math.abs(l) < s && Math.abs(u - o) < s) return n[0] = o, n[1] = 0, n;
				return n[0] = u, n[1] = l, n
			};
			var n = [0, 0];
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stripStyle.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0, t.default = function(e) {
				var t = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = "number" == typeof e[r] ? e[r] : e[r].val);
				return t
			}, e.exports = t.default
		},
		"./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js": function(e, t, r) {
			(function(t) {
				(function() {
					var r, n, o;
					"undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
						return performance.now()
					} : null != t && t.hrtime ? (e.exports = function() {
						return (r() - o) / 1e6
					}, n = t.hrtime, o = (r = function() {
						var e;
						return 1e9 * (e = n())[0] + e[1]
					})()) : Date.now ? (e.exports = function() {
						return Date.now() - o
					}, o = Date.now()) : (e.exports = function() {
						return (new Date).getTime() - o
					}, o = (new Date).getTime())
				}).call(this)
			}).call(this, r("./node_modules/process/browser.js"))
		},
		"./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function a() {}
			a.resetWarningCache = o, e.exports = function() {
				function e(e, t, r, o, a, i) {
					if (i !== n) {
						var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw s.name = "Invariant Violation", s
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
		"./node_modules/react-motion/node_modules/prop-types/index.js": function(e, t, r) {
			e.exports = r("./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, r) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return de
			}));
			var n = r("./node_modules/react/index.js");

			function o(e) {
				var t = e.getBoundingClientRect();
				return {
					width: t.width,
					height: t.height,
					top: t.top,
					right: t.right,
					bottom: t.bottom,
					left: t.left,
					x: t.left,
					y: t.top
				}
			}

			function a(e) {
				if ("[object Window]" !== e.toString()) {
					var t = e.ownerDocument;
					return t ? t.defaultView : window
				}
				return e
			}

			function i(e) {
				var t = a(e);
				return {
					scrollLeft: t.pageXOffset,
					scrollTop: t.pageYOffset
				}
			}

			function s(e) {
				return e instanceof a(e).Element || e instanceof Element
			}

			function l(e) {
				return e instanceof a(e).HTMLElement || e instanceof HTMLElement
			}

			function u(e) {
				return e ? (e.nodeName || "").toLowerCase() : null
			}

			function c(e) {
				return (s(e) ? e.ownerDocument : e.document).documentElement
			}

			function f(e) {
				return o(c(e)).left + i(e).scrollLeft
			}

			function p(e) {
				return a(e).getComputedStyle(e)
			}

			function d(e) {
				var t = p(e),
					r = t.overflow,
					n = t.overflowX,
					o = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(r + o + n)
			}

			function m(e, t, r) {
				void 0 === r && (r = !1);
				var n, s, p = c(t),
					m = o(e),
					y = l(t),
					h = {
						scrollLeft: 0,
						scrollTop: 0
					},
					v = {
						x: 0,
						y: 0
					};
				return (y || !y && !r) && (("body" !== u(t) || d(p)) && (h = (n = t) !== a(n) && l(n) ? {
					scrollLeft: (s = n).scrollLeft,
					scrollTop: s.scrollTop
				} : i(n)), l(t) ? ((v = o(t)).x += t.clientLeft, v.y += t.clientTop) : p && (v.x = f(p))), {
					x: m.left + h.scrollLeft - v.x,
					y: m.top + h.scrollTop - v.y,
					width: m.width,
					height: m.height
				}
			}

			function y(e) {
				return {
					x: e.offsetLeft,
					y: e.offsetTop,
					width: e.offsetWidth,
					height: e.offsetHeight
				}
			}

			function h(e) {
				return "html" === u(e) ? e : e.assignedSlot || e.parentNode || e.host || c(e)
			}

			function v(e, t) {
				void 0 === t && (t = []);
				var r = function e(t) {
						return ["html", "body", "#document"].indexOf(u(t)) >= 0 ? t.ownerDocument.body : l(t) && d(t) ? t : e(h(t))
					}(e),
					n = "body" === u(r),
					o = a(r),
					i = n ? [o].concat(o.visualViewport || [], d(r) ? r : []) : r,
					s = t.concat(i);
				return n ? s : s.concat(v(h(i)))
			}

			function b(e) {
				return ["table", "td", "th"].indexOf(u(e)) >= 0
			}

			function g(e) {
				return l(e) && "fixed" !== p(e).position ? e.offsetParent : null
			}

			function O(e) {
				for (var t = a(e), r = g(e); r && b(r) && "static" === p(r).position;) r = g(r);
				return r && "body" === u(r) && "static" === p(r).position ? t : r || function(e) {
					for (var t = h(e); l(t) && ["html", "body"].indexOf(u(t)) < 0;) {
						var r = p(t);
						if ("none" !== r.transform || "none" !== r.perspective || "auto" !== r.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var _ = "top",
				j = "bottom",
				w = "right",
				S = "left",
				x = "auto",
				T = [_, j, w, S],
				P = "start",
				I = "end",
				k = "clippingParents",
				M = "viewport",
				D = "popper",
				E = "reference",
				R = T.reduce((function(e, t) {
					return e.concat([t + "-" + P, t + "-" + I])
				}), []),
				A = [].concat(T, [x]).reduce((function(e, t) {
					return e.concat([t, t + "-" + P, t + "-" + I])
				}), []),
				C = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function N(e) {
				var t = new Map,
					r = new Set,
					n = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					r.has(e.name) || function e(o) {
						r.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(n) {
							if (!r.has(n)) {
								var o = t.get(n);
								o && e(o)
							}
						})), n.push(o)
					}(e)
				})), n
			}
			var L = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function V() {
				for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
				return !t.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function W(e) {
				void 0 === e && (e = {});
				var t = e,
					r = t.defaultModifiers,
					n = void 0 === r ? [] : r,
					o = t.defaultOptions,
					a = void 0 === o ? L : o;
				return function(e, t, r) {
					void 0 === r && (r = a);
					var o, i, l = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, L), a),
							modifiersData: {},
							elements: {
								reference: e,
								popper: t
							},
							attributes: {},
							styles: {}
						},
						u = [],
						c = !1,
						f = {
							state: l,
							setOptions: function(r) {
								p(), l.options = Object.assign(Object.assign(Object.assign({}, a), l.options), r), l.scrollParents = {
									reference: s(e) ? v(e) : e.contextElement ? v(e.contextElement) : [],
									popper: v(t)
								};
								var o = function(e) {
									var t = N(e);
									return C.reduce((function(e, r) {
										return e.concat(t.filter((function(e) {
											return e.phase === r
										})))
									}), [])
								}(function(e) {
									var t = e.reduce((function(e, t) {
										var r = e[t.name];
										return e[t.name] = r ? Object.assign(Object.assign(Object.assign({}, r), t), {}, {
											options: Object.assign(Object.assign({}, r.options), t.options),
											data: Object.assign(Object.assign({}, r.data), t.data)
										}) : t, e
									}), {});
									return Object.keys(t).map((function(e) {
										return t[e]
									}))
								}([].concat(n, l.options.modifiers)));
								return l.orderedModifiers = o.filter((function(e) {
									return e.enabled
								})), l.orderedModifiers.forEach((function(e) {
									var t = e.name,
										r = e.options,
										n = void 0 === r ? {} : r,
										o = e.effect;
									if ("function" == typeof o) {
										var a = o({
											state: l,
											name: t,
											instance: f,
											options: n
										});
										u.push(a || function() {})
									}
								})), f.update()
							},
							forceUpdate: function() {
								if (!c) {
									var e = l.elements,
										t = e.reference,
										r = e.popper;
									if (V(t, r)) {
										l.rects = {
											reference: m(t, O(r), "fixed" === l.options.strategy),
											popper: y(r)
										}, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach((function(e) {
											return l.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var n = 0; n < l.orderedModifiers.length; n++)
											if (!0 !== l.reset) {
												var o = l.orderedModifiers[n],
													a = o.fn,
													i = o.options,
													s = void 0 === i ? {} : i,
													u = o.name;
												"function" == typeof a && (l = a({
													state: l,
													options: s,
													name: u,
													instance: f
												}) || l)
											} else l.reset = !1, n = -1
									}
								}
							},
							update: (o = function() {
								return new Promise((function(e) {
									f.forceUpdate(), e(l)
								}))
							}, function() {
								return i || (i = new Promise((function(e) {
									Promise.resolve().then((function() {
										i = void 0, e(o())
									}))
								}))), i
							}),
							destroy: function() {
								p(), c = !0
							}
						};
					if (!V(e, t)) return f;

					function p() {
						u.forEach((function(e) {
							return e()
						})), u = []
					}
					return f.setOptions(r).then((function(e) {
						!c && r.onFirstUpdate && r.onFirstUpdate(e)
					})), f
				}
			}
			var U = {
				passive: !0
			};

			function B(e) {
				return e.split("-")[0]
			}

			function q(e) {
				return e.split("-")[1]
			}

			function H(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function F(e) {
				var t, r = e.reference,
					n = e.element,
					o = e.placement,
					a = o ? B(o) : null,
					i = o ? q(o) : null,
					s = r.x + r.width / 2 - n.width / 2,
					l = r.y + r.height / 2 - n.height / 2;
				switch (a) {
					case _:
						t = {
							x: s,
							y: r.y - n.height
						};
						break;
					case j:
						t = {
							x: s,
							y: r.y + r.height
						};
						break;
					case w:
						t = {
							x: r.x + r.width,
							y: l
						};
						break;
					case S:
						t = {
							x: r.x - n.width,
							y: l
						};
						break;
					default:
						t = {
							x: r.x,
							y: r.y
						}
				}
				var u = a ? H(a) : null;
				if (null != u) {
					var c = "y" === u ? "height" : "width";
					switch (i) {
						case P:
							t[u] = Math.floor(t[u]) - Math.floor(r[c] / 2 - n[c] / 2);
							break;
						case I:
							t[u] = Math.floor(t[u]) + Math.ceil(r[c] / 2 - n[c] / 2)
					}
				}
				return t
			}
			var K = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function z(e) {
				var t, r = e.popper,
					n = e.popperRect,
					o = e.placement,
					i = e.offsets,
					s = e.position,
					l = e.gpuAcceleration,
					u = e.adaptive,
					f = function(e) {
						var t = e.x,
							r = e.y,
							n = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * n) / n || 0,
							y: Math.round(r * n) / n || 0
						}
					}(i),
					p = f.x,
					d = f.y,
					m = i.hasOwnProperty("x"),
					y = i.hasOwnProperty("y"),
					h = S,
					v = _,
					b = window;
				if (u) {
					var g = O(r);
					g === a(r) && (g = c(r)), o === _ && (v = j, d -= g.clientHeight - n.height, d *= l ? 1 : -1), o === S && (h = w, p -= g.clientWidth - n.width, p *= l ? 1 : -1)
				}
				var x, T = Object.assign({
					position: s
				}, u && K);
				return l ? Object.assign(Object.assign({}, T), {}, ((x = {})[v] = y ? "0" : "", x[h] = m ? "0" : "", x.transform = (b.devicePixelRatio || 1) < 2 ? "translate(" + p + "px, " + d + "px)" : "translate3d(" + p + "px, " + d + "px, 0)", x)) : Object.assign(Object.assign({}, T), {}, ((t = {})[v] = y ? d + "px" : "", t[h] = m ? p + "px" : "", t.transform = "", t))
			}
			var Y = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function Z(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return Y[e]
				}))
			}
			var $ = {
				start: "end",
				end: "start"
			};

			function X(e) {
				return e.replace(/start|end/g, (function(e) {
					return $[e]
				}))
			}

			function G(e, t) {
				var r = Boolean(t.getRootNode && t.getRootNode().host);
				if (e.contains(t)) return !0;
				if (r) {
					var n = t;
					do {
						if (n && e.isSameNode(n)) return !0;
						n = n.parentNode || n.host
					} while (n)
				}
				return !1
			}

			function J(e) {
				return Object.assign(Object.assign({}, e), {}, {
					left: e.x,
					top: e.y,
					right: e.x + e.width,
					bottom: e.y + e.height
				})
			}

			function Q(e, t) {
				return t === M ? J(function(e) {
					var t = a(e),
						r = c(e),
						n = t.visualViewport,
						o = r.clientWidth,
						i = r.clientHeight,
						s = 0,
						l = 0;
					return n && (o = n.width, i = n.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = n.offsetLeft, l = n.offsetTop)), {
						width: o,
						height: i,
						x: s + f(e),
						y: l
					}
				}(e)) : l(t) ? function(e) {
					var t = o(e);
					return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
				}(t) : J(function(e) {
					var t = c(e),
						r = i(e),
						n = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0),
						a = Math.max(t.scrollHeight, t.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0),
						s = -r.scrollLeft + f(e),
						l = -r.scrollTop;
					return "rtl" === p(n || t).direction && (s += Math.max(t.clientWidth, n ? n.clientWidth : 0) - o), {
						width: o,
						height: a,
						x: s,
						y: l
					}
				}(c(e)))
			}

			function ee(e, t, r) {
				var n = "clippingParents" === t ? function(e) {
						var t = v(e),
							r = ["absolute", "fixed"].indexOf(p(e).position) >= 0 && l(e) ? O(e) : e;
						return s(r) ? t.filter((function(e) {
							return s(e) && G(e, r)
						})) : []
					}(e) : [].concat(t),
					o = [].concat(n, [r]),
					a = o[0],
					i = o.reduce((function(t, r) {
						var n = Q(e, r);
						return t.top = Math.max(n.top, t.top), t.right = Math.min(n.right, t.right), t.bottom = Math.min(n.bottom, t.bottom), t.left = Math.max(n.left, t.left), t
					}), Q(e, a));
				return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i
			}

			function te(e) {
				return Object.assign(Object.assign({}, {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				}), e)
			}

			function re(e, t) {
				return t.reduce((function(t, r) {
					return t[r] = e, t
				}), {})
			}

			function ne(e, t) {
				void 0 === t && (t = {});
				var r = t,
					n = r.placement,
					a = void 0 === n ? e.placement : n,
					i = r.boundary,
					l = void 0 === i ? k : i,
					u = r.rootBoundary,
					f = void 0 === u ? M : u,
					p = r.elementContext,
					d = void 0 === p ? D : p,
					m = r.altBoundary,
					y = void 0 !== m && m,
					h = r.padding,
					v = void 0 === h ? 0 : h,
					b = te("number" != typeof v ? v : re(v, T)),
					g = d === D ? E : D,
					O = e.elements.reference,
					S = e.rects.popper,
					x = e.elements[y ? g : d],
					P = ee(s(x) ? x : x.contextElement || c(e.elements.popper), l, f),
					I = o(O),
					R = F({
						reference: I,
						element: S,
						strategy: "absolute",
						placement: a
					}),
					A = J(Object.assign(Object.assign({}, S), R)),
					C = d === D ? A : I,
					N = {
						top: P.top - C.top + b.top,
						bottom: C.bottom - P.bottom + b.bottom,
						left: P.left - C.left + b.left,
						right: C.right - P.right + b.right
					},
					L = e.modifiersData.offset;
				if (d === D && L) {
					var V = L[a];
					Object.keys(N).forEach((function(e) {
						var t = [w, j].indexOf(e) >= 0 ? 1 : -1,
							r = [_, j].indexOf(e) >= 0 ? "y" : "x";
						N[e] += V[r] * t
					}))
				}
				return N
			}

			function oe(e, t, r) {
				return Math.max(e, Math.min(t, r))
			}

			function ae(e, t, r) {
				return void 0 === r && (r = {
					x: 0,
					y: 0
				}), {
					top: e.top - t.height - r.y,
					right: e.right - t.width + r.x,
					bottom: e.bottom - t.height + r.y,
					left: e.left - t.width - r.x
				}
			}

			function ie(e) {
				return [_, w, j, S].some((function(t) {
					return e[t] >= 0
				}))
			}
			var se = W({
					defaultModifiers: [{
						name: "eventListeners",
						enabled: !0,
						phase: "write",
						fn: function() {},
						effect: function(e) {
							var t = e.state,
								r = e.instance,
								n = e.options,
								o = n.scroll,
								i = void 0 === o || o,
								s = n.resize,
								l = void 0 === s || s,
								u = a(t.elements.popper),
								c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return i && c.forEach((function(e) {
									e.addEventListener("scroll", r.update, U)
								})), l && u.addEventListener("resize", r.update, U),
								function() {
									i && c.forEach((function(e) {
										e.removeEventListener("scroll", r.update, U)
									})), l && u.removeEventListener("resize", r.update, U)
								}
						},
						data: {}
					}, {
						name: "popperOffsets",
						enabled: !0,
						phase: "read",
						fn: function(e) {
							var t = e.state,
								r = e.name;
							t.modifiersData[r] = F({
								reference: t.rects.reference,
								element: t.rects.popper,
								strategy: "absolute",
								placement: t.placement
							})
						},
						data: {}
					}, {
						name: "computeStyles",
						enabled: !0,
						phase: "beforeWrite",
						fn: function(e) {
							var t = e.state,
								r = e.options,
								n = r.gpuAcceleration,
								o = void 0 === n || n,
								a = r.adaptive,
								i = void 0 === a || a,
								s = {
									placement: B(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: o
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), z(Object.assign(Object.assign({}, s), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: i
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), z(Object.assign(Object.assign({}, s), {}, {
								offsets: t.modifiersData.arrow,
								position: "absolute",
								adaptive: !1
							})))), t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-placement": t.placement
							})
						},
						data: {}
					}, {
						name: "applyStyles",
						enabled: !0,
						phase: "write",
						fn: function(e) {
							var t = e.state;
							Object.keys(t.elements).forEach((function(e) {
								var r = t.styles[e] || {},
									n = t.attributes[e] || {},
									o = t.elements[e];
								l(o) && u(o) && (Object.assign(o.style, r), Object.keys(n).forEach((function(e) {
									var t = n[e];
									!1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
								})))
							}))
						},
						effect: function(e) {
							var t = e.state,
								r = {
									popper: {
										position: t.options.strategy,
										left: "0",
										top: "0",
										margin: "0"
									},
									arrow: {
										position: "absolute"
									},
									reference: {}
								};
							return Object.assign(t.elements.popper.style, r.popper), t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
								function() {
									Object.keys(t.elements).forEach((function(e) {
										var n = t.elements[e],
											o = t.attributes[e] || {},
											a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : r[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										l(n) && u(n) && (Object.assign(n.style, a), Object.keys(o).forEach((function(e) {
											n.removeAttribute(e)
										})))
									}))
								}
						},
						requires: ["computeStyles"]
					}, {
						name: "offset",
						enabled: !0,
						phase: "main",
						requires: ["popperOffsets"],
						fn: function(e) {
							var t = e.state,
								r = e.options,
								n = e.name,
								o = r.offset,
								a = void 0 === o ? [0, 0] : o,
								i = A.reduce((function(e, r) {
									return e[r] = function(e, t, r) {
										var n = B(e),
											o = [S, _].indexOf(n) >= 0 ? -1 : 1,
											a = "function" == typeof r ? r(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : r,
											i = a[0],
											s = a[1];
										return i = i || 0, s = (s || 0) * o, [S, w].indexOf(n) >= 0 ? {
											x: s,
											y: i
										} : {
											x: i,
											y: s
										}
									}(r, t.rects, a), e
								}), {}),
								s = i[t.placement],
								l = s.x,
								u = s.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[n] = i
						}
					}, {
						name: "flip",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t = e.state,
								r = e.options,
								n = e.name;
							if (!t.modifiersData[n]._skip) {
								for (var o = r.mainAxis, a = void 0 === o || o, i = r.altAxis, s = void 0 === i || i, l = r.fallbackPlacements, u = r.padding, c = r.boundary, f = r.rootBoundary, p = r.altBoundary, d = r.flipVariations, m = void 0 === d || d, y = r.allowedAutoPlacements, h = t.options.placement, v = B(h), b = l || (v === h || !m ? [Z(h)] : function(e) {
										if (B(e) === x) return [];
										var t = Z(e);
										return [X(e), t, X(t)]
									}(h)), g = [h].concat(b).reduce((function(e, r) {
										return e.concat(B(r) === x ? function(e, t) {
											void 0 === t && (t = {});
											var r = t,
												n = r.placement,
												o = r.boundary,
												a = r.rootBoundary,
												i = r.padding,
												s = r.flipVariations,
												l = r.allowedAutoPlacements,
												u = void 0 === l ? A : l,
												c = q(n),
												f = (c ? s ? R : R.filter((function(e) {
													return q(e) === c
												})) : T).filter((function(e) {
													return u.indexOf(e) >= 0
												})).reduce((function(t, r) {
													return t[r] = ne(e, {
														placement: r,
														boundary: o,
														rootBoundary: a,
														padding: i
													})[B(r)], t
												}), {});
											return Object.keys(f).sort((function(e, t) {
												return f[e] - f[t]
											}))
										}(t, {
											placement: r,
											boundary: c,
											rootBoundary: f,
											padding: u,
											flipVariations: m,
											allowedAutoPlacements: y
										}) : r)
									}), []), O = t.rects.reference, I = t.rects.popper, k = new Map, M = !0, D = g[0], E = 0; E < g.length; E++) {
									var C = g[E],
										N = B(C),
										L = q(C) === P,
										V = [_, j].indexOf(N) >= 0,
										W = V ? "width" : "height",
										U = ne(t, {
											placement: C,
											boundary: c,
											rootBoundary: f,
											altBoundary: p,
											padding: u
										}),
										H = V ? L ? w : S : L ? j : _;
									O[W] > I[W] && (H = Z(H));
									var F = Z(H),
										K = [];
									if (a && K.push(U[N] <= 0), s && K.push(U[H] <= 0, U[F] <= 0), K.every((function(e) {
											return e
										}))) {
										D = C, M = !1;
										break
									}
									k.set(C, K)
								}
								if (M)
									for (var z = function(e) {
											var t = g.find((function(t) {
												var r = k.get(t);
												if (r) return r.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return D = t, "break"
										}, Y = m ? 3 : 1; Y > 0; Y--) {
										if ("break" === z(Y)) break
									}
								t.placement !== D && (t.modifiersData[n]._skip = !0, t.placement = D, t.reset = !0)
							}
						},
						requiresIfExists: ["offset"],
						data: {
							_skip: !1
						}
					}, {
						name: "preventOverflow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t = e.state,
								r = e.options,
								n = e.name,
								o = r.mainAxis,
								a = void 0 === o || o,
								i = r.altAxis,
								s = void 0 !== i && i,
								l = r.boundary,
								u = r.rootBoundary,
								c = r.altBoundary,
								f = r.padding,
								p = r.tether,
								d = void 0 === p || p,
								m = r.tetherOffset,
								h = void 0 === m ? 0 : m,
								v = ne(t, {
									boundary: l,
									rootBoundary: u,
									padding: f,
									altBoundary: c
								}),
								b = B(t.placement),
								g = q(t.placement),
								x = !g,
								T = H(b),
								I = "x" === T ? "y" : "x",
								k = t.modifiersData.popperOffsets,
								M = t.rects.reference,
								D = t.rects.popper,
								E = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								R = {
									x: 0,
									y: 0
								};
							if (k) {
								if (a) {
									var A = "y" === T ? _ : S,
										C = "y" === T ? j : w,
										N = "y" === T ? "height" : "width",
										L = k[T],
										V = k[T] + v[A],
										W = k[T] - v[C],
										U = d ? -D[N] / 2 : 0,
										F = g === P ? M[N] : D[N],
										K = g === P ? -D[N] : -M[N],
										z = t.elements.arrow,
										Y = d && z ? y(z) : {
											width: 0,
											height: 0
										},
										Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										$ = Z[A],
										X = Z[C],
										G = oe(0, M[N], Y[N]),
										J = x ? M[N] / 2 - U - G - $ - E : F - G - $ - E,
										Q = x ? -M[N] / 2 + U + G + X + E : K + G + X + E,
										ee = t.elements.arrow && O(t.elements.arrow),
										te = ee ? "y" === T ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										re = t.modifiersData.offset ? t.modifiersData.offset[t.placement][T] : 0,
										ae = k[T] + J - re - te,
										ie = k[T] + Q - re,
										se = oe(d ? Math.min(V, ae) : V, L, d ? Math.max(W, ie) : W);
									k[T] = se, R[T] = se - L
								}
								if (s) {
									var le = "x" === T ? _ : S,
										ue = "x" === T ? j : w,
										ce = k[I],
										fe = oe(ce + v[le], ce, ce - v[ue]);
									k[I] = fe, R[I] = fe - ce
								}
								t.modifiersData[n] = R
							}
						},
						requiresIfExists: ["offset"]
					}, {
						name: "arrow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t, r = e.state,
								n = e.name,
								o = r.elements.arrow,
								a = r.modifiersData.popperOffsets,
								i = B(r.placement),
								s = H(i),
								l = [S, w].indexOf(i) >= 0 ? "height" : "width";
							if (o && a) {
								var u = r.modifiersData[n + "#persistent"].padding,
									c = y(o),
									f = "y" === s ? _ : S,
									p = "y" === s ? j : w,
									d = r.rects.reference[l] + r.rects.reference[s] - a[s] - r.rects.popper[l],
									m = a[s] - r.rects.reference[s],
									h = O(o),
									v = h ? "y" === s ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									b = d / 2 - m / 2,
									g = u[f],
									x = v - c[l] - u[p],
									T = v / 2 - c[l] / 2 + b,
									P = oe(g, T, x),
									I = s;
								r.modifiersData[n] = ((t = {})[I] = P, t.centerOffset = P - T, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								r = e.options,
								n = e.name,
								o = r.element,
								a = void 0 === o ? "[data-popper-arrow]" : o,
								i = r.padding,
								s = void 0 === i ? 0 : i;
							null != a && ("string" != typeof a || (a = t.elements.popper.querySelector(a))) && G(t.elements.popper, a) && (t.elements.arrow = a, t.modifiersData[n + "#persistent"] = {
								padding: te("number" != typeof s ? s : re(s, T))
							})
						},
						requires: ["popperOffsets"],
						requiresIfExists: ["preventOverflow"]
					}, {
						name: "hide",
						enabled: !0,
						phase: "main",
						requiresIfExists: ["preventOverflow"],
						fn: function(e) {
							var t = e.state,
								r = e.name,
								n = t.rects.reference,
								o = t.rects.popper,
								a = t.modifiersData.preventOverflow,
								i = ne(t, {
									elementContext: "reference"
								}),
								s = ne(t, {
									altBoundary: !0
								}),
								l = ae(i, n),
								u = ae(s, o, a),
								c = ie(l),
								f = ie(u);
							t.modifiersData[r] = {
								referenceClippingOffsets: l,
								popperEscapeOffsets: u,
								isReferenceHidden: c,
								hasPopperEscaped: f
							}, t.attributes.popper = Object.assign(Object.assign({}, t.attributes.popper), {}, {
								"data-popper-reference-hidden": c,
								"data-popper-escaped": f
							})
						}
					}]
				}),
				le = r("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				ue = r.n(le),
				ce = function(e) {
					return e.reduce((function(e, t) {
						var r = t[0],
							n = t[1];
						return e[r] = n, e
					}), {})
				},
				fe = "undefined" != typeof window && window.document && window.document.createElement ? n.useLayoutEffect : n.useEffect,
				pe = [],
				de = function(e, t, r) {
					void 0 === r && (r = {});
					var o = n.useRef(null),
						a = {
							onFirstUpdate: r.onFirstUpdate,
							placement: r.placement || "bottom",
							strategy: r.strategy || "absolute",
							modifiers: r.modifiers || pe
						},
						i = n.useState({
							styles: {
								popper: {
									position: a.strategy,
									left: "0",
									top: "0"
								}
							},
							attributes: {}
						}),
						s = i[0],
						l = i[1],
						u = n.useMemo((function() {
							return {
								name: "updateState",
								enabled: !0,
								phase: "write",
								fn: function(e) {
									var t = e.state,
										r = Object.keys(t.elements);
									l({
										styles: ce(r.map((function(e) {
											return [e, t.styles[e] || {}]
										}))),
										attributes: ce(r.map((function(e) {
											return [e, t.attributes[e]]
										})))
									})
								},
								requires: ["computeStyles"]
							}
						}), []),
						c = n.useMemo((function() {
							var e = {
								onFirstUpdate: a.onFirstUpdate,
								placement: a.placement,
								strategy: a.strategy,
								modifiers: [].concat(a.modifiers, [u, {
									name: "applyStyles",
									enabled: !1
								}])
							};
							return ue()(o.current, e) ? o.current || e : (o.current = e, e)
						}), [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, u]),
						f = n.useRef();
					return fe((function() {
						f.current && f.current.setOptions(c)
					}), [c]), fe((function() {
						if (null != e && null != t) {
							var n = (r.createPopper || se)(e, t, c);
							return f.current = n,
								function() {
									n.destroy(), f.current = null
								}
						}
					}), [e, t, r.createPopper]), {
						state: f.current ? f.current.state : null,
						styles: s.styles,
						attributes: s.attributes,
						update: f.current ? f.current.update : null,
						forceUpdate: f.current ? f.current.forceUpdate : null
					}
				}
		},
		"./node_modules/react-popper/node_modules/react-fast-compare/index.js": function(e, t) {
			var r = "undefined" != typeof Element,
				n = "function" == typeof Map,
				o = "function" == typeof Set,
				a = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
			e.exports = function(e, t) {
				try {
					return function e(t, i) {
						if (t === i) return !0;
						if (t && i && "object" == typeof t && "object" == typeof i) {
							if (t.constructor !== i.constructor) return !1;
							var s, l, u, c;
							if (Array.isArray(t)) {
								if ((s = t.length) != i.length) return !1;
								for (l = s; 0 != l--;)
									if (!e(t[l], i[l])) return !1;
								return !0
							}
							if (n && t instanceof Map && i instanceof Map) {
								if (t.size !== i.size) return !1;
								for (c = t.entries(); !(l = c.next()).done;)
									if (!i.has(l.value[0])) return !1;
								for (c = t.entries(); !(l = c.next()).done;)
									if (!e(l.value[1], i.get(l.value[0]))) return !1;
								return !0
							}
							if (o && t instanceof Set && i instanceof Set) {
								if (t.size !== i.size) return !1;
								for (c = t.entries(); !(l = c.next()).done;)
									if (!i.has(l.value[0])) return !1;
								return !0
							}
							if (a && ArrayBuffer.isView(t) && ArrayBuffer.isView(i)) {
								if ((s = t.length) != i.length) return !1;
								for (l = s; 0 != l--;)
									if (t[l] !== i[l]) return !1;
								return !0
							}
							if (t.constructor === RegExp) return t.source === i.source && t.flags === i.flags;
							if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === i.valueOf();
							if (t.toString !== Object.prototype.toString) return t.toString() === i.toString();
							if ((s = (u = Object.keys(t)).length) !== Object.keys(i).length) return !1;
							for (l = s; 0 != l--;)
								if (!Object.prototype.hasOwnProperty.call(i, u[l])) return !1;
							if (r && t instanceof Element) return !1;
							for (l = s; 0 != l--;)
								if (("_owner" !== u[l] && "__v" !== u[l] && "__o" !== u[l] || !t.$$typeof) && !e(t[u[l]], i[u[l]])) return !1;
							return !0
						}
						return t != t && i != i
					}(e, t)
				} catch (i) {
					if ((i.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
					throw i
				}
			}
		},
		"./node_modules/react-router-dom/esm/react-router-dom.js": function(e, t, r) {
			"use strict";

			function n(e, t) {
				e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
			}
			r.d(t, "a", (function() {
				return f
			}));
			var o = r("./node_modules/react/index.js"),
				a = r.n(o),
				i = r("./node_modules/react-router/esm/react-router.js"),
				s = r("./node_modules/history/esm/history.js");
			r("./node_modules/react-router-dom/node_modules/prop-types/index.js");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function u(e, t) {
				if (null == e) return {};
				var r, n, o = {},
					a = Object.keys(e);
				for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
				return o
			}
			var c = r("./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
			a.a.Component;
			a.a.Component;
			var f = function(e) {
				function t() {
					return e.apply(this, arguments) || this
				}
				n(t, e);
				var r = t.prototype;
				return r.handleClick = function(e, t) {
					try {
						this.props.onClick && this.props.onClick(e)
					} catch (r) {
						throw e.preventDefault(), r
					}
					e.defaultPrevented || 0 !== e.button || this.props.target && "_self" !== this.props.target || function(e) {
						return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
					}(e) || (e.preventDefault(), (this.props.replace ? t.replace : t.push)(this.props.to))
				}, r.render = function() {
					var e = this,
						t = this.props,
						r = t.innerRef,
						n = (t.replace, t.to),
						o = u(t, ["innerRef", "replace", "to"]);
					return a.a.createElement(i.g.Consumer, null, (function(t) {
						t || Object(c.default)(!1);
						var i = "string" == typeof n ? Object(s.c)(n, null, null, t.location) : n,
							u = i ? t.history.createHref(i) : "";
						return a.a.createElement("a", l({}, o, {
							onClick: function(r) {
								return e.handleClick(r, t.history)
							},
							href: u,
							ref: r
						}))
					}))
				}, t
			}(a.a.Component)
		},
		"./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function a() {}
			a.resetWarningCache = o, e.exports = function() {
				function e(e, t, r, o, a, i) {
					if (i !== n) {
						var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw s.name = "Invariant Violation", s
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
		"./node_modules/react-router-dom/node_modules/prop-types/index.js": function(e, t, r) {
			e.exports = r("./node_modules/react-router-dom/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-router-dom/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, r) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~Reddit~StandalonePostPage.8c700812183259010dec.js.map