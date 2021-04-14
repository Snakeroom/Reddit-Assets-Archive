// https://www.redditstatic.com/desktop2x/vendors~Reddit~StandalonePostPage.96a3642f63703c5fab30.js
// Retrieved at 4/14/2021, 1:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~Reddit~StandalonePostPage"], {
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var n = Math.floor,
				r = Math.random;
			e.exports = function(e, t) {
				return e + n(r() * (t - e + 1))
			}
		},
		"./node_modules/lodash/random.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseRandom.js"),
				o = n("./node_modules/lodash/_isIterateeCall.js"),
				a = n("./node_modules/lodash/toFinite.js"),
				i = parseFloat,
				s = Math.min,
				l = Math.random;
			e.exports = function(e, t, n) {
				if (n && "boolean" != typeof n && o(e, t, n) && (t = n = void 0), void 0 === n && ("boolean" == typeof t ? (n = t, t = void 0) : "boolean" == typeof e && (n = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = a(e), void 0 === t ? (t = e, e = 0) : t = a(t)), e > t) {
					var u = e;
					e = t, t = u
				}
				if (n || e % 1 || t % 1) {
					var c = l();
					return s(e + c * (t - e + i("1e-" + ((c + "").length - 1))), t)
				}
				return r(e, t)
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
				o = function() {
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

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var i = a(n("./node_modules/react-motion/lib/mapToZero.js")),
				s = a(n("./node_modules/react-motion/lib/stripStyle.js")),
				l = a(n("./node_modules/react-motion/lib/stepper.js")),
				u = a(n("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				c = a(n("./node_modules/raf/index.js")),
				f = a(n("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				d = a(n("./node_modules/react/index.js")),
				p = a(n("./node_modules/react-motion/node_modules/prop-types/index.js")),
				m = 1e3 / 60,
				y = function(e) {
					function t(n) {
						var o = this;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), e.call(this, n), this.wasAnimating = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyle = null, this.clearUnreadPropStyle = function(e) {
							var t = !1,
								n = o.state,
								a = n.currentStyle,
								i = n.currentVelocity,
								s = n.lastIdealStyle,
								l = n.lastIdealVelocity;
							for (var u in e)
								if (Object.prototype.hasOwnProperty.call(e, u)) {
									var c = e[u];
									"number" == typeof c && (t || (t = !0, a = r({}, a), i = r({}, i), s = r({}, s), l = r({}, l)), a[u] = c, i[u] = 0, s[u] = c, l[u] = 0)
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
								var n = e || u.default(),
									r = n - o.prevTime;
								if (o.prevTime = n, o.accumulatedTime = o.accumulatedTime + r, o.accumulatedTime > 10 * m && (o.accumulatedTime = 0), 0 === o.accumulatedTime) return o.animationID = null, void o.startAnimationIfNecessary();
								var a = (o.accumulatedTime - Math.floor(o.accumulatedTime / m) * m) / m,
									i = Math.floor(o.accumulatedTime / m),
									s = {},
									c = {},
									d = {},
									p = {};
								for (var y in t)
									if (Object.prototype.hasOwnProperty.call(t, y)) {
										var h = t[y];
										if ("number" == typeof h) d[y] = h, p[y] = 0, s[y] = h, c[y] = 0;
										else {
											for (var v = o.state.lastIdealStyle[y], b = o.state.lastIdealVelocity[y], g = 0; g < i; g++) {
												var O = l.default(m / 1e3, v, b, h.val, h.stiffness, h.damping, h.precision);
												v = O[0], b = O[1]
											}
											var w = l.default(m / 1e3, v, b, h.val, h.stiffness, h.damping, h.precision),
												j = w[0],
												_ = w[1];
											d[y] = v + (j - v) * a, p[y] = b + (_ - b) * a, s[y] = v, c[y] = b
										}
									} o.animationID = null, o.accumulatedTime -= i * m, o.setState({
									currentStyle: d,
									currentVelocity: p,
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
							r = t || s.default(n),
							o = i.default(r);
						return {
							currentStyle: r,
							currentVelocity: o,
							lastIdealStyle: r,
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
						return e && d.default.Children.only(e)
					}, t
				}(d.default.Component);
			t.default = y, e.exports = t.default
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
				o = function() {
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

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var i = a(n("./node_modules/react-motion/lib/mapToZero.js")),
				s = a(n("./node_modules/react-motion/lib/stripStyle.js")),
				l = a(n("./node_modules/react-motion/lib/stepper.js")),
				u = a(n("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				c = a(n("./node_modules/raf/index.js")),
				f = a(n("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				d = a(n("./node_modules/react/index.js")),
				p = a(n("./node_modules/react-motion/node_modules/prop-types/index.js")),
				m = 1e3 / 60;
			var y = function(e) {
				function t(n) {
					var o = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, n), this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = o.state, n = t.currentStyles, a = t.currentVelocities, i = t.lastIdealStyles, s = t.lastIdealVelocities, l = !1, u = 0; u < e.length; u++) {
							var c = e[u],
								f = !1;
							for (var d in c)
								if (Object.prototype.hasOwnProperty.call(c, d)) {
									var p = c[d];
									"number" == typeof p && (f || (f = !0, l = !0, n[u] = r({}, n[u]), a[u] = r({}, a[u]), i[u] = r({}, i[u]), s[u] = r({}, s[u])), n[u][d] = p, a[u][d] = 0, i[u][d] = p, s[u][d] = 0)
								}
						}
						l && o.setState({
							currentStyles: n,
							currentVelocities: a,
							lastIdealStyles: i,
							lastIdealVelocities: s
						})
					}, this.startAnimationIfNecessary = function() {
						o.animationID = c.default((function(e) {
							var t = o.props.styles(o.state.lastIdealStyles);
							if (function(e, t, n) {
									for (var r = 0; r < e.length; r++)
										if (!f.default(e[r], t[r], n[r])) return !1;
									return !0
								}(o.state.currentStyles, t, o.state.currentVelocities)) return o.animationID = null, void(o.accumulatedTime = 0);
							var n = e || u.default(),
								r = n - o.prevTime;
							if (o.prevTime = n, o.accumulatedTime = o.accumulatedTime + r, o.accumulatedTime > 10 * m && (o.accumulatedTime = 0), 0 === o.accumulatedTime) return o.animationID = null, void o.startAnimationIfNecessary();
							for (var a = (o.accumulatedTime - Math.floor(o.accumulatedTime / m) * m) / m, i = Math.floor(o.accumulatedTime / m), s = [], c = [], d = [], p = [], y = 0; y < t.length; y++) {
								var h = t[y],
									v = {},
									b = {},
									g = {},
									O = {};
								for (var w in h)
									if (Object.prototype.hasOwnProperty.call(h, w)) {
										var j = h[w];
										if ("number" == typeof j) v[w] = j, b[w] = 0, g[w] = j, O[w] = 0;
										else {
											for (var _ = o.state.lastIdealStyles[y][w], S = o.state.lastIdealVelocities[y][w], x = 0; x < i; x++) {
												var T = l.default(m / 1e3, _, S, j.val, j.stiffness, j.damping, j.precision);
												_ = T[0], S = T[1]
											}
											var P = l.default(m / 1e3, _, S, j.val, j.stiffness, j.damping, j.precision),
												I = P[0],
												M = P[1];
											v[w] = _ + (I - _) * a, b[w] = S + (M - S) * a, g[w] = _, O[w] = S
										}
									} d[y] = v, p[y] = b, s[y] = g, c[y] = O
							}
							o.animationID = null, o.accumulatedTime -= i * m, o.setState({
								currentStyles: d,
								currentVelocities: p,
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
						defaultStyles: p.default.arrayOf(p.default.objectOf(p.default.number)),
						styles: p.default.func.isRequired,
						children: p.default.func.isRequired
					},
					enumerable: !0
				}]), t.prototype.defaultState = function() {
					var e = this.props,
						t = e.defaultStyles,
						n = e.styles,
						r = t || n().map(s.default),
						o = r.map((function(e) {
							return i.default(e)
						}));
					return {
						currentStyles: r,
						currentVelocities: o,
						lastIdealStyles: r,
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
					return e && d.default.Children.only(e)
				}, t
			}(d.default.Component);
			t.default = y, e.exports = t.default
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
				o = function() {
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

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var i = a(n("./node_modules/react-motion/lib/mapToZero.js")),
				s = a(n("./node_modules/react-motion/lib/stripStyle.js")),
				l = a(n("./node_modules/react-motion/lib/stepper.js")),
				u = a(n("./node_modules/react-motion/lib/mergeDiff.js")),
				c = a(n("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				f = a(n("./node_modules/raf/index.js")),
				d = a(n("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				p = a(n("./node_modules/react/index.js")),
				m = a(n("./node_modules/react-motion/node_modules/prop-types/index.js")),
				y = 1e3 / 60;

			function h(e, t, n) {
				var r = t;
				return null == r ? e.map((function(e, t) {
					return {
						key: e.key,
						data: e.data,
						style: n[t]
					}
				})) : e.map((function(e, t) {
					for (var o = 0; o < r.length; o++)
						if (r[o].key === e.key) return {
							key: r[o].key,
							data: r[o].data,
							style: n[t]
						};
					return {
						key: e.key,
						data: e.data,
						style: n[t]
					}
				}))
			}

			function v(e, t, n, r, o, a, s, l, c) {
				for (var f = u.default(r, o, (function(e, r) {
						var o = t(r);
						return null == o ? (n({
							key: r.key,
							data: r.data
						}), null) : d.default(a[e], o, s[e]) ? (n({
							key: r.key,
							data: r.data
						}), null) : {
							key: r.key,
							data: r.data,
							style: o
						}
					})), p = [], m = [], y = [], h = [], v = 0; v < f.length; v++) {
					for (var b = f[v], g = null, O = 0; O < r.length; O++)
						if (r[O].key === b.key) {
							g = O;
							break
						} if (null == g) {
						var w = e(b);
						p[v] = w, y[v] = w;
						var j = i.default(b.style);
						m[v] = j, h[v] = j
					} else p[v] = a[g], y[v] = l[g], m[v] = s[g], h[v] = c[g]
				}
				return [f, p, m, y, h]
			}
			var b = function(e) {
				function t(n) {
					var o = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, n), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = v(o.props.willEnter, o.props.willLeave, o.props.didLeave, o.state.mergedPropsStyles, e, o.state.currentStyles, o.state.currentVelocities, o.state.lastIdealStyles, o.state.lastIdealVelocities), n = t[0], a = t[1], i = t[2], s = t[3], l = t[4], u = 0; u < e.length; u++) {
							var c = e[u].style,
								f = !1;
							for (var d in c)
								if (Object.prototype.hasOwnProperty.call(c, d)) {
									var p = c[d];
									"number" == typeof p && (f || (f = !0, a[u] = r({}, a[u]), i[u] = r({}, i[u]), s[u] = r({}, s[u]), l[u] = r({}, l[u]), n[u] = {
										key: n[u].key,
										data: n[u].data,
										style: r({}, n[u].style)
									}), a[u][d] = p, i[u][d] = 0, s[u][d] = p, l[u][d] = 0, n[u].style[d] = p)
								}
						}
						o.setState({
							currentStyles: a,
							currentVelocities: i,
							mergedPropsStyles: n,
							lastIdealStyles: s,
							lastIdealVelocities: l
						})
					}, this.startAnimationIfNecessary = function() {
						o.unmounting || (o.animationID = f.default((function(e) {
							if (!o.unmounting) {
								var t = o.props.styles,
									n = "function" == typeof t ? t(h(o.state.mergedPropsStyles, o.unreadPropStyles, o.state.lastIdealStyles)) : t;
								if (function(e, t, n, r) {
										if (r.length !== t.length) return !1;
										for (var o = 0; o < r.length; o++)
											if (r[o].key !== t[o].key) return !1;
										for (o = 0; o < r.length; o++)
											if (!d.default(e[o], t[o].style, n[o])) return !1;
										return !0
									}(o.state.currentStyles, n, o.state.currentVelocities, o.state.mergedPropsStyles)) return o.animationID = null, void(o.accumulatedTime = 0);
								var r = e || c.default(),
									a = r - o.prevTime;
								if (o.prevTime = r, o.accumulatedTime = o.accumulatedTime + a, o.accumulatedTime > 10 * y && (o.accumulatedTime = 0), 0 === o.accumulatedTime) return o.animationID = null, void o.startAnimationIfNecessary();
								for (var i = (o.accumulatedTime - Math.floor(o.accumulatedTime / y) * y) / y, s = Math.floor(o.accumulatedTime / y), u = v(o.props.willEnter, o.props.willLeave, o.props.didLeave, o.state.mergedPropsStyles, n, o.state.currentStyles, o.state.currentVelocities, o.state.lastIdealStyles, o.state.lastIdealVelocities), f = u[0], p = u[1], m = u[2], b = u[3], g = u[4], O = 0; O < f.length; O++) {
									var w = f[O].style,
										j = {},
										_ = {},
										S = {},
										x = {};
									for (var T in w)
										if (Object.prototype.hasOwnProperty.call(w, T)) {
											var P = w[T];
											if ("number" == typeof P) j[T] = P, _[T] = 0, S[T] = P, x[T] = 0;
											else {
												for (var I = b[O][T], M = g[O][T], D = 0; D < s; D++) {
													var k = l.default(y / 1e3, I, M, P.val, P.stiffness, P.damping, P.precision);
													I = k[0], M = k[1]
												}
												var E = l.default(y / 1e3, I, M, P.val, P.stiffness, P.damping, P.precision),
													A = E[0],
													V = E[1];
												j[T] = I + (A - I) * i, _[T] = M + (V - M) * i, S[T] = I, x[T] = M
											}
										} b[O] = S, g[O] = x, p[O] = j, m[O] = _
								}
								o.animationID = null, o.accumulatedTime -= s * y, o.setState({
									currentStyles: p,
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
						n = e.styles,
						r = e.willEnter,
						o = e.willLeave,
						a = e.didLeave,
						l = "function" == typeof n ? n(t) : n,
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
						d = v(r, o, a, u, l, c, f, c, f),
						p = d[0];
					return {
						currentStyles: d[1],
						currentVelocities: d[2],
						lastIdealStyles: d[3],
						lastIdealVelocities: d[4],
						mergedPropsStyles: p
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
					return t && p.default.Children.only(t)
				}, t
			}(p.default.Component);
			t.default = b, e.exports = t.default
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
				for (var r = {}, o = 0; o < e.length; o++) r[e[o].key] = o;
				var a = {};
				for (o = 0; o < t.length; o++) a[t[o].key] = o;
				var i = [];
				for (o = 0; o < t.length; o++) i[o] = t[o];
				for (o = 0; o < e.length; o++)
					if (!Object.prototype.hasOwnProperty.call(a, e[o].key)) {
						var s = n(o, e[o]);
						null != s && i.push(s)
					} return i.sort((function(e, n) {
					var o = a[e.key],
						i = a[n.key],
						s = r[e.key],
						l = r[n.key];
					if (null != o && null != i) return a[e.key] - a[n.key];
					if (null != s && null != l) return r[e.key] - r[n.key];
					if (null != o) {
						for (var u = 0; u < t.length; u++) {
							var c = t[u].key;
							if (Object.prototype.hasOwnProperty.call(r, c)) {
								if (o < a[c] && l > r[c]) return -1;
								if (o > a[c] && l < r[c]) return 1
							}
						}
						return 1
					}
					for (u = 0; u < t.length; u++) {
						c = t[u].key;
						if (Object.prototype.hasOwnProperty.call(r, c)) {
							if (i < a[c] && s > r[c]) return 1;
							if (i > a[c] && s < r[c]) return -1
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
			var o = n("./node_modules/react-motion/lib/Motion.js");
			t.Motion = r(o);
			var a = n("./node_modules/react-motion/lib/StaggeredMotion.js");
			t.StaggeredMotion = r(a);
			var i = n("./node_modules/react-motion/lib/TransitionMotion.js");
			t.TransitionMotion = r(i);
			var s = n("./node_modules/react-motion/lib/spring.js");
			t.spring = r(s);
			var l = n("./node_modules/react-motion/lib/presets.js");
			t.presets = r(l);
			var u = n("./node_modules/react-motion/lib/stripStyle.js");
			t.stripStyle = r(u);
			var c = n("./node_modules/react-motion/lib/reorderKeys.js");
			t.reorderKeys = r(c)
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
						var o = "number" == typeof t[r] ? t[r] : t[r].val;
						if (e[r] !== o) return !1
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
				return r({}, s, t, {
					val: e
				})
			};
			var o, a = n("./node_modules/react-motion/lib/presets.js"),
				i = (o = a) && o.__esModule ? o : {
					default: o
				},
				s = r({}, i.default.noWobble, {
					precision: .01
				});
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stepper.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, n, o, a, i, s) {
				var l = n + (-a * (t - o) + -i * n) * e,
					u = t + l * e;
				if (Math.abs(l) < s && Math.abs(u - o) < s) return r[0] = o, r[1] = 0, r;
				return r[0] = u, r[1] = l, r
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
					var n, r, o;
					"undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
						return performance.now()
					} : null != t && t.hrtime ? (e.exports = function() {
						return (n() - o) / 1e6
					}, r = t.hrtime, o = (n = function() {
						var e;
						return 1e9 * (e = r())[0] + e[1]
					})()) : Date.now ? (e.exports = function() {
						return Date.now() - o
					}, o = Date.now()) : (e.exports = function() {
						return (new Date).getTime() - o
					}, o = (new Date).getTime())
				}).call(this)
			}).call(this, n("./node_modules/process/browser.js"))
		},
		"./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function a() {}
			a.resetWarningCache = o, e.exports = function() {
				function e(e, t, n, o, a, i) {
					if (i !== r) {
						var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw s.name = "Invariant Violation", s
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
		"./node_modules/react-motion/node_modules/prop-types/index.js": function(e, t, n) {
			e.exports = n("./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, n) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/react-popper/lib/esm/usePopper.js": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return pe
			}));
			var r = n("./node_modules/react/index.js");

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

			function d(e) {
				return a(e).getComputedStyle(e)
			}

			function p(e) {
				var t = d(e),
					n = t.overflow,
					r = t.overflowX,
					o = t.overflowY;
				return /auto|scroll|overlay|hidden/.test(n + o + r)
			}

			function m(e, t, n) {
				void 0 === n && (n = !1);
				var r, s, d = c(t),
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
				return (y || !y && !n) && (("body" !== u(t) || p(d)) && (h = (r = t) !== a(r) && l(r) ? {
					scrollLeft: (s = r).scrollLeft,
					scrollTop: s.scrollTop
				} : i(r)), l(t) ? ((v = o(t)).x += t.clientLeft, v.y += t.clientTop) : d && (v.x = f(d))), {
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
				var n = function e(t) {
						return ["html", "body", "#document"].indexOf(u(t)) >= 0 ? t.ownerDocument.body : l(t) && p(t) ? t : e(h(t))
					}(e),
					r = "body" === u(n),
					o = a(n),
					i = r ? [o].concat(o.visualViewport || [], p(n) ? n : []) : n,
					s = t.concat(i);
				return r ? s : s.concat(v(h(i)))
			}

			function b(e) {
				return ["table", "td", "th"].indexOf(u(e)) >= 0
			}

			function g(e) {
				return l(e) && "fixed" !== d(e).position ? e.offsetParent : null
			}

			function O(e) {
				for (var t = a(e), n = g(e); n && b(n) && "static" === d(n).position;) n = g(n);
				return n && "body" === u(n) && "static" === d(n).position ? t : n || function(e) {
					for (var t = h(e); l(t) && ["html", "body"].indexOf(u(t)) < 0;) {
						var n = d(t);
						if ("none" !== n.transform || "none" !== n.perspective || "auto" !== n.willChange) return t;
						t = t.parentNode
					}
					return null
				}(e) || t
			}
			var w = "top",
				j = "bottom",
				_ = "right",
				S = "left",
				x = "auto",
				T = [w, j, _, S],
				P = "start",
				I = "end",
				M = "clippingParents",
				D = "viewport",
				k = "popper",
				E = "reference",
				A = T.reduce((function(e, t) {
					return e.concat([t + "-" + P, t + "-" + I])
				}), []),
				V = [].concat(T, [x]).reduce((function(e, t) {
					return e.concat([t, t + "-" + P, t + "-" + I])
				}), []),
				R = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

			function L(e) {
				var t = new Map,
					n = new Set,
					r = [];
				return e.forEach((function(e) {
					t.set(e.name, e)
				})), e.forEach((function(e) {
					n.has(e.name) || function e(o) {
						n.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(r) {
							if (!n.has(r)) {
								var o = t.get(r);
								o && e(o)
							}
						})), r.push(o)
					}(e)
				})), r
			}
			var W = {
				placement: "bottom",
				modifiers: [],
				strategy: "absolute"
			};

			function N() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return !t.some((function(e) {
					return !(e && "function" == typeof e.getBoundingClientRect)
				}))
			}

			function B(e) {
				void 0 === e && (e = {});
				var t = e,
					n = t.defaultModifiers,
					r = void 0 === n ? [] : n,
					o = t.defaultOptions,
					a = void 0 === o ? W : o;
				return function(e, t, n) {
					void 0 === n && (n = a);
					var o, i, l = {
							placement: "bottom",
							orderedModifiers: [],
							options: Object.assign(Object.assign({}, W), a),
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
							setOptions: function(n) {
								d(), l.options = Object.assign(Object.assign(Object.assign({}, a), l.options), n), l.scrollParents = {
									reference: s(e) ? v(e) : e.contextElement ? v(e.contextElement) : [],
									popper: v(t)
								};
								var o = function(e) {
									var t = L(e);
									return R.reduce((function(e, n) {
										return e.concat(t.filter((function(e) {
											return e.phase === n
										})))
									}), [])
								}(function(e) {
									var t = e.reduce((function(e, t) {
										var n = e[t.name];
										return e[t.name] = n ? Object.assign(Object.assign(Object.assign({}, n), t), {}, {
											options: Object.assign(Object.assign({}, n.options), t.options),
											data: Object.assign(Object.assign({}, n.data), t.data)
										}) : t, e
									}), {});
									return Object.keys(t).map((function(e) {
										return t[e]
									}))
								}([].concat(r, l.options.modifiers)));
								return l.orderedModifiers = o.filter((function(e) {
									return e.enabled
								})), l.orderedModifiers.forEach((function(e) {
									var t = e.name,
										n = e.options,
										r = void 0 === n ? {} : n,
										o = e.effect;
									if ("function" == typeof o) {
										var a = o({
											state: l,
											name: t,
											instance: f,
											options: r
										});
										u.push(a || function() {})
									}
								})), f.update()
							},
							forceUpdate: function() {
								if (!c) {
									var e = l.elements,
										t = e.reference,
										n = e.popper;
									if (N(t, n)) {
										l.rects = {
											reference: m(t, O(n), "fixed" === l.options.strategy),
											popper: y(n)
										}, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach((function(e) {
											return l.modifiersData[e.name] = Object.assign({}, e.data)
										}));
										for (var r = 0; r < l.orderedModifiers.length; r++)
											if (!0 !== l.reset) {
												var o = l.orderedModifiers[r],
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
											} else l.reset = !1, r = -1
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
								d(), c = !0
							}
						};
					if (!N(e, t)) return f;

					function d() {
						u.forEach((function(e) {
							return e()
						})), u = []
					}
					return f.setOptions(n).then((function(e) {
						!c && n.onFirstUpdate && n.onFirstUpdate(e)
					})), f
				}
			}
			var C = {
				passive: !0
			};

			function U(e) {
				return e.split("-")[0]
			}

			function q(e) {
				return e.split("-")[1]
			}

			function H(e) {
				return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
			}

			function F(e) {
				var t, n = e.reference,
					r = e.element,
					o = e.placement,
					a = o ? U(o) : null,
					i = o ? q(o) : null,
					s = n.x + n.width / 2 - r.width / 2,
					l = n.y + n.height / 2 - r.height / 2;
				switch (a) {
					case w:
						t = {
							x: s,
							y: n.y - r.height
						};
						break;
					case j:
						t = {
							x: s,
							y: n.y + n.height
						};
						break;
					case _:
						t = {
							x: n.x + n.width,
							y: l
						};
						break;
					case S:
						t = {
							x: n.x - r.width,
							y: l
						};
						break;
					default:
						t = {
							x: n.x,
							y: n.y
						}
				}
				var u = a ? H(a) : null;
				if (null != u) {
					var c = "y" === u ? "height" : "width";
					switch (i) {
						case P:
							t[u] = Math.floor(t[u]) - Math.floor(n[c] / 2 - r[c] / 2);
							break;
						case I:
							t[u] = Math.floor(t[u]) + Math.ceil(n[c] / 2 - r[c] / 2)
					}
				}
				return t
			}
			var z = {
				top: "auto",
				right: "auto",
				bottom: "auto",
				left: "auto"
			};

			function K(e) {
				var t, n = e.popper,
					r = e.popperRect,
					o = e.placement,
					i = e.offsets,
					s = e.position,
					l = e.gpuAcceleration,
					u = e.adaptive,
					f = function(e) {
						var t = e.x,
							n = e.y,
							r = window.devicePixelRatio || 1;
						return {
							x: Math.round(t * r) / r || 0,
							y: Math.round(n * r) / r || 0
						}
					}(i),
					d = f.x,
					p = f.y,
					m = i.hasOwnProperty("x"),
					y = i.hasOwnProperty("y"),
					h = S,
					v = w,
					b = window;
				if (u) {
					var g = O(n);
					g === a(n) && (g = c(n)), o === w && (v = j, p -= g.clientHeight - r.height, p *= l ? 1 : -1), o === S && (h = _, d -= g.clientWidth - r.width, d *= l ? 1 : -1)
				}
				var x, T = Object.assign({
					position: s
				}, u && z);
				return l ? Object.assign(Object.assign({}, T), {}, ((x = {})[v] = y ? "0" : "", x[h] = m ? "0" : "", x.transform = (b.devicePixelRatio || 1) < 2 ? "translate(" + d + "px, " + p + "px)" : "translate3d(" + d + "px, " + p + "px, 0)", x)) : Object.assign(Object.assign({}, T), {}, ((t = {})[v] = y ? p + "px" : "", t[h] = m ? d + "px" : "", t.transform = "", t))
			}
			var Z = {
				left: "right",
				right: "left",
				bottom: "top",
				top: "bottom"
			};

			function Y(e) {
				return e.replace(/left|right|bottom|top/g, (function(e) {
					return Z[e]
				}))
			}
			var X = {
				start: "end",
				end: "start"
			};

			function $(e) {
				return e.replace(/start|end/g, (function(e) {
					return X[e]
				}))
			}

			function G(e, t) {
				var n = Boolean(t.getRootNode && t.getRootNode().host);
				if (e.contains(t)) return !0;
				if (n) {
					var r = t;
					do {
						if (r && e.isSameNode(r)) return !0;
						r = r.parentNode || r.host
					} while (r)
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
				return t === D ? J(function(e) {
					var t = a(e),
						n = c(e),
						r = t.visualViewport,
						o = n.clientWidth,
						i = n.clientHeight,
						s = 0,
						l = 0;
					return r && (o = r.width, i = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = r.offsetLeft, l = r.offsetTop)), {
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
						n = i(e),
						r = e.ownerDocument.body,
						o = Math.max(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
						a = Math.max(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
						s = -n.scrollLeft + f(e),
						l = -n.scrollTop;
					return "rtl" === d(r || t).direction && (s += Math.max(t.clientWidth, r ? r.clientWidth : 0) - o), {
						width: o,
						height: a,
						x: s,
						y: l
					}
				}(c(e)))
			}

			function ee(e, t, n) {
				var r = "clippingParents" === t ? function(e) {
						var t = v(e),
							n = ["absolute", "fixed"].indexOf(d(e).position) >= 0 && l(e) ? O(e) : e;
						return s(n) ? t.filter((function(e) {
							return s(e) && G(e, n)
						})) : []
					}(e) : [].concat(t),
					o = [].concat(r, [n]),
					a = o[0],
					i = o.reduce((function(t, n) {
						var r = Q(e, n);
						return t.top = Math.max(r.top, t.top), t.right = Math.min(r.right, t.right), t.bottom = Math.min(r.bottom, t.bottom), t.left = Math.max(r.left, t.left), t
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

			function ne(e, t) {
				return t.reduce((function(t, n) {
					return t[n] = e, t
				}), {})
			}

			function re(e, t) {
				void 0 === t && (t = {});
				var n = t,
					r = n.placement,
					a = void 0 === r ? e.placement : r,
					i = n.boundary,
					l = void 0 === i ? M : i,
					u = n.rootBoundary,
					f = void 0 === u ? D : u,
					d = n.elementContext,
					p = void 0 === d ? k : d,
					m = n.altBoundary,
					y = void 0 !== m && m,
					h = n.padding,
					v = void 0 === h ? 0 : h,
					b = te("number" != typeof v ? v : ne(v, T)),
					g = p === k ? E : k,
					O = e.elements.reference,
					S = e.rects.popper,
					x = e.elements[y ? g : p],
					P = ee(s(x) ? x : x.contextElement || c(e.elements.popper), l, f),
					I = o(O),
					A = F({
						reference: I,
						element: S,
						strategy: "absolute",
						placement: a
					}),
					V = J(Object.assign(Object.assign({}, S), A)),
					R = p === k ? V : I,
					L = {
						top: P.top - R.top + b.top,
						bottom: R.bottom - P.bottom + b.bottom,
						left: P.left - R.left + b.left,
						right: R.right - P.right + b.right
					},
					W = e.modifiersData.offset;
				if (p === k && W) {
					var N = W[a];
					Object.keys(L).forEach((function(e) {
						var t = [_, j].indexOf(e) >= 0 ? 1 : -1,
							n = [w, j].indexOf(e) >= 0 ? "y" : "x";
						L[e] += N[n] * t
					}))
				}
				return L
			}

			function oe(e, t, n) {
				return Math.max(e, Math.min(t, n))
			}

			function ae(e, t, n) {
				return void 0 === n && (n = {
					x: 0,
					y: 0
				}), {
					top: e.top - t.height - n.y,
					right: e.right - t.width + n.x,
					bottom: e.bottom - t.height + n.y,
					left: e.left - t.width - n.x
				}
			}

			function ie(e) {
				return [w, _, j, S].some((function(t) {
					return e[t] >= 0
				}))
			}
			var se = B({
					defaultModifiers: [{
						name: "eventListeners",
						enabled: !0,
						phase: "write",
						fn: function() {},
						effect: function(e) {
							var t = e.state,
								n = e.instance,
								r = e.options,
								o = r.scroll,
								i = void 0 === o || o,
								s = r.resize,
								l = void 0 === s || s,
								u = a(t.elements.popper),
								c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
							return i && c.forEach((function(e) {
									e.addEventListener("scroll", n.update, C)
								})), l && u.addEventListener("resize", n.update, C),
								function() {
									i && c.forEach((function(e) {
										e.removeEventListener("scroll", n.update, C)
									})), l && u.removeEventListener("resize", n.update, C)
								}
						},
						data: {}
					}, {
						name: "popperOffsets",
						enabled: !0,
						phase: "read",
						fn: function(e) {
							var t = e.state,
								n = e.name;
							t.modifiersData[n] = F({
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
								n = e.options,
								r = n.gpuAcceleration,
								o = void 0 === r || r,
								a = n.adaptive,
								i = void 0 === a || a,
								s = {
									placement: U(t.placement),
									popper: t.elements.popper,
									popperRect: t.rects.popper,
									gpuAcceleration: o
								};
							null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign(Object.assign({}, t.styles.popper), K(Object.assign(Object.assign({}, s), {}, {
								offsets: t.modifiersData.popperOffsets,
								position: t.options.strategy,
								adaptive: i
							})))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign(Object.assign({}, t.styles.arrow), K(Object.assign(Object.assign({}, s), {}, {
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
								var n = t.styles[e] || {},
									r = t.attributes[e] || {},
									o = t.elements[e];
								l(o) && u(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(e) {
									var t = r[e];
									!1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
								})))
							}))
						},
						effect: function(e) {
							var t = e.state,
								n = {
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
							return Object.assign(t.elements.popper.style, n.popper), t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
								function() {
									Object.keys(t.elements).forEach((function(e) {
										var r = t.elements[e],
											o = t.attributes[e] || {},
											a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
												return e[t] = "", e
											}), {});
										l(r) && u(r) && (Object.assign(r.style, a), Object.keys(o).forEach((function(e) {
											r.removeAttribute(e)
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
								n = e.options,
								r = e.name,
								o = n.offset,
								a = void 0 === o ? [0, 0] : o,
								i = V.reduce((function(e, n) {
									return e[n] = function(e, t, n) {
										var r = U(e),
											o = [S, w].indexOf(r) >= 0 ? -1 : 1,
											a = "function" == typeof n ? n(Object.assign(Object.assign({}, t), {}, {
												placement: e
											})) : n,
											i = a[0],
											s = a[1];
										return i = i || 0, s = (s || 0) * o, [S, _].indexOf(r) >= 0 ? {
											x: s,
											y: i
										} : {
											x: i,
											y: s
										}
									}(n, t.rects, a), e
								}), {}),
								s = i[t.placement],
								l = s.x,
								u = s.y;
							null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[r] = i
						}
					}, {
						name: "flip",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t = e.state,
								n = e.options,
								r = e.name;
							if (!t.modifiersData[r]._skip) {
								for (var o = n.mainAxis, a = void 0 === o || o, i = n.altAxis, s = void 0 === i || i, l = n.fallbackPlacements, u = n.padding, c = n.boundary, f = n.rootBoundary, d = n.altBoundary, p = n.flipVariations, m = void 0 === p || p, y = n.allowedAutoPlacements, h = t.options.placement, v = U(h), b = l || (v === h || !m ? [Y(h)] : function(e) {
										if (U(e) === x) return [];
										var t = Y(e);
										return [$(e), t, $(t)]
									}(h)), g = [h].concat(b).reduce((function(e, n) {
										return e.concat(U(n) === x ? function(e, t) {
											void 0 === t && (t = {});
											var n = t,
												r = n.placement,
												o = n.boundary,
												a = n.rootBoundary,
												i = n.padding,
												s = n.flipVariations,
												l = n.allowedAutoPlacements,
												u = void 0 === l ? V : l,
												c = q(r),
												f = (c ? s ? A : A.filter((function(e) {
													return q(e) === c
												})) : T).filter((function(e) {
													return u.indexOf(e) >= 0
												})).reduce((function(t, n) {
													return t[n] = re(e, {
														placement: n,
														boundary: o,
														rootBoundary: a,
														padding: i
													})[U(n)], t
												}), {});
											return Object.keys(f).sort((function(e, t) {
												return f[e] - f[t]
											}))
										}(t, {
											placement: n,
											boundary: c,
											rootBoundary: f,
											padding: u,
											flipVariations: m,
											allowedAutoPlacements: y
										}) : n)
									}), []), O = t.rects.reference, I = t.rects.popper, M = new Map, D = !0, k = g[0], E = 0; E < g.length; E++) {
									var R = g[E],
										L = U(R),
										W = q(R) === P,
										N = [w, j].indexOf(L) >= 0,
										B = N ? "width" : "height",
										C = re(t, {
											placement: R,
											boundary: c,
											rootBoundary: f,
											altBoundary: d,
											padding: u
										}),
										H = N ? W ? _ : S : W ? j : w;
									O[B] > I[B] && (H = Y(H));
									var F = Y(H),
										z = [];
									if (a && z.push(C[L] <= 0), s && z.push(C[H] <= 0, C[F] <= 0), z.every((function(e) {
											return e
										}))) {
										k = R, D = !1;
										break
									}
									M.set(R, z)
								}
								if (D)
									for (var K = function(e) {
											var t = g.find((function(t) {
												var n = M.get(t);
												if (n) return n.slice(0, e).every((function(e) {
													return e
												}))
											}));
											if (t) return k = t, "break"
										}, Z = m ? 3 : 1; Z > 0; Z--) {
										if ("break" === K(Z)) break
									}
								t.placement !== k && (t.modifiersData[r]._skip = !0, t.placement = k, t.reset = !0)
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
								n = e.options,
								r = e.name,
								o = n.mainAxis,
								a = void 0 === o || o,
								i = n.altAxis,
								s = void 0 !== i && i,
								l = n.boundary,
								u = n.rootBoundary,
								c = n.altBoundary,
								f = n.padding,
								d = n.tether,
								p = void 0 === d || d,
								m = n.tetherOffset,
								h = void 0 === m ? 0 : m,
								v = re(t, {
									boundary: l,
									rootBoundary: u,
									padding: f,
									altBoundary: c
								}),
								b = U(t.placement),
								g = q(t.placement),
								x = !g,
								T = H(b),
								I = "x" === T ? "y" : "x",
								M = t.modifiersData.popperOffsets,
								D = t.rects.reference,
								k = t.rects.popper,
								E = "function" == typeof h ? h(Object.assign(Object.assign({}, t.rects), {}, {
									placement: t.placement
								})) : h,
								A = {
									x: 0,
									y: 0
								};
							if (M) {
								if (a) {
									var V = "y" === T ? w : S,
										R = "y" === T ? j : _,
										L = "y" === T ? "height" : "width",
										W = M[T],
										N = M[T] + v[V],
										B = M[T] - v[R],
										C = p ? -k[L] / 2 : 0,
										F = g === P ? D[L] : k[L],
										z = g === P ? -k[L] : -D[L],
										K = t.elements.arrow,
										Z = p && K ? y(K) : {
											width: 0,
											height: 0
										},
										Y = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
											top: 0,
											right: 0,
											bottom: 0,
											left: 0
										},
										X = Y[V],
										$ = Y[R],
										G = oe(0, D[L], Z[L]),
										J = x ? D[L] / 2 - C - G - X - E : F - G - X - E,
										Q = x ? -D[L] / 2 + C + G + $ + E : z + G + $ + E,
										ee = t.elements.arrow && O(t.elements.arrow),
										te = ee ? "y" === T ? ee.clientTop || 0 : ee.clientLeft || 0 : 0,
										ne = t.modifiersData.offset ? t.modifiersData.offset[t.placement][T] : 0,
										ae = M[T] + J - ne - te,
										ie = M[T] + Q - ne,
										se = oe(p ? Math.min(N, ae) : N, W, p ? Math.max(B, ie) : B);
									M[T] = se, A[T] = se - W
								}
								if (s) {
									var le = "x" === T ? w : S,
										ue = "x" === T ? j : _,
										ce = M[I],
										fe = oe(ce + v[le], ce, ce - v[ue]);
									M[I] = fe, A[I] = fe - ce
								}
								t.modifiersData[r] = A
							}
						},
						requiresIfExists: ["offset"]
					}, {
						name: "arrow",
						enabled: !0,
						phase: "main",
						fn: function(e) {
							var t, n = e.state,
								r = e.name,
								o = n.elements.arrow,
								a = n.modifiersData.popperOffsets,
								i = U(n.placement),
								s = H(i),
								l = [S, _].indexOf(i) >= 0 ? "height" : "width";
							if (o && a) {
								var u = n.modifiersData[r + "#persistent"].padding,
									c = y(o),
									f = "y" === s ? w : S,
									d = "y" === s ? j : _,
									p = n.rects.reference[l] + n.rects.reference[s] - a[s] - n.rects.popper[l],
									m = a[s] - n.rects.reference[s],
									h = O(o),
									v = h ? "y" === s ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
									b = p / 2 - m / 2,
									g = u[f],
									x = v - c[l] - u[d],
									T = v / 2 - c[l] / 2 + b,
									P = oe(g, T, x),
									I = s;
								n.modifiersData[r] = ((t = {})[I] = P, t.centerOffset = P - T, t)
							}
						},
						effect: function(e) {
							var t = e.state,
								n = e.options,
								r = e.name,
								o = n.element,
								a = void 0 === o ? "[data-popper-arrow]" : o,
								i = n.padding,
								s = void 0 === i ? 0 : i;
							null != a && ("string" != typeof a || (a = t.elements.popper.querySelector(a))) && G(t.elements.popper, a) && (t.elements.arrow = a, t.modifiersData[r + "#persistent"] = {
								padding: te("number" != typeof s ? s : ne(s, T))
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
								n = e.name,
								r = t.rects.reference,
								o = t.rects.popper,
								a = t.modifiersData.preventOverflow,
								i = re(t, {
									elementContext: "reference"
								}),
								s = re(t, {
									altBoundary: !0
								}),
								l = ae(i, r),
								u = ae(s, o, a),
								c = ie(l),
								f = ie(u);
							t.modifiersData[n] = {
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
				le = n("./node_modules/react-popper/node_modules/react-fast-compare/index.js"),
				ue = n.n(le),
				ce = function(e) {
					return e.reduce((function(e, t) {
						var n = t[0],
							r = t[1];
						return e[n] = r, e
					}), {})
				},
				fe = "undefined" != typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect,
				de = [],
				pe = function(e, t, n) {
					void 0 === n && (n = {});
					var o = r.useRef(null),
						a = {
							onFirstUpdate: n.onFirstUpdate,
							placement: n.placement || "bottom",
							strategy: n.strategy || "absolute",
							modifiers: n.modifiers || de
						},
						i = r.useState({
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
						u = r.useMemo((function() {
							return {
								name: "updateState",
								enabled: !0,
								phase: "write",
								fn: function(e) {
									var t = e.state,
										n = Object.keys(t.elements);
									l({
										styles: ce(n.map((function(e) {
											return [e, t.styles[e] || {}]
										}))),
										attributes: ce(n.map((function(e) {
											return [e, t.attributes[e]]
										})))
									})
								},
								requires: ["computeStyles"]
							}
						}), []),
						c = r.useMemo((function() {
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
						f = r.useRef();
					return fe((function() {
						f.current && f.current.setOptions(c)
					}), [c]), fe((function() {
						if (null != e && null != t) {
							var r = (n.createPopper || se)(e, t, c);
							return f.current = r,
								function() {
									r.destroy(), f.current = null
								}
						}
					}), [e, t, n.createPopper]), {
						state: f.current ? f.current.state : null,
						styles: s.styles,
						attributes: s.attributes,
						update: f.current ? f.current.update : null,
						forceUpdate: f.current ? f.current.forceUpdate : null
					}
				}
		},
		"./node_modules/react-popper/node_modules/react-fast-compare/index.js": function(e, t) {
			var n = "undefined" != typeof Element,
				r = "function" == typeof Map,
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
							if (r && t instanceof Map && i instanceof Map) {
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
							if (n && t instanceof Element) return !1;
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~Reddit~StandalonePostPage.96a3642f63703c5fab30.js.map