// https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeHovercardTooltip.ab93e2c2e54d534f4f88.js
// Retrieved at 5/3/2021, 2:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditPremiumBadgeHovercardTooltip"], {
		"./node_modules/lodash/flattenDeep.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseFlatten.js"),
				i = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? n(e, i) : []
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
				i = function() {
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
			var s = a(r("./node_modules/react-motion/lib/mapToZero.js")),
				o = a(r("./node_modules/react-motion/lib/stripStyle.js")),
				c = a(r("./node_modules/react-motion/lib/stepper.js")),
				d = a(r("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				l = a(r("./node_modules/raf/index.js")),
				u = a(r("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				m = a(r("./node_modules/react/index.js")),
				p = a(r("./node_modules/react-motion/node_modules/prop-types/index.js")),
				f = 1e3 / 60,
				b = function(e) {
					function t(r) {
						var i = this;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), e.call(this, r), this.wasAnimating = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyle = null, this.clearUnreadPropStyle = function(e) {
							var t = !1,
								r = i.state,
								a = r.currentStyle,
								s = r.currentVelocity,
								o = r.lastIdealStyle,
								c = r.lastIdealVelocity;
							for (var d in e)
								if (Object.prototype.hasOwnProperty.call(e, d)) {
									var l = e[d];
									"number" == typeof l && (t || (t = !0, a = n({}, a), s = n({}, s), o = n({}, o), c = n({}, c)), a[d] = l, s[d] = 0, o[d] = l, c[d] = 0)
								} t && i.setState({
								currentStyle: a,
								currentVelocity: s,
								lastIdealStyle: o,
								lastIdealVelocity: c
							})
						}, this.startAnimationIfNecessary = function() {
							i.animationID = l.default((function(e) {
								var t = i.props.style;
								if (u.default(i.state.currentStyle, t, i.state.currentVelocity)) return i.wasAnimating && i.props.onRest && i.props.onRest(), i.animationID = null, i.wasAnimating = !1, void(i.accumulatedTime = 0);
								i.wasAnimating = !0;
								var r = e || d.default(),
									n = r - i.prevTime;
								if (i.prevTime = r, i.accumulatedTime = i.accumulatedTime + n, i.accumulatedTime > 10 * f && (i.accumulatedTime = 0), 0 === i.accumulatedTime) return i.animationID = null, void i.startAnimationIfNecessary();
								var a = (i.accumulatedTime - Math.floor(i.accumulatedTime / f) * f) / f,
									s = Math.floor(i.accumulatedTime / f),
									o = {},
									l = {},
									m = {},
									p = {};
								for (var b in t)
									if (Object.prototype.hasOwnProperty.call(t, b)) {
										var h = t[b];
										if ("number" == typeof h) m[b] = h, p[b] = 0, o[b] = h, l[b] = 0;
										else {
											for (var g = i.state.lastIdealStyle[b], y = i.state.lastIdealVelocity[b], _ = 0; _ < s; _++) {
												var E = c.default(f / 1e3, g, y, h.val, h.stiffness, h.damping, h.precision);
												g = E[0], y = E[1]
											}
											var S = c.default(f / 1e3, g, y, h.val, h.stiffness, h.damping, h.precision),
												v = S[0],
												O = S[1];
											m[b] = g + (v - g) * a, p[b] = y + (O - y) * a, o[b] = g, l[b] = y
										}
									} i.animationID = null, i.accumulatedTime -= s * f, i.setState({
									currentStyle: m,
									currentVelocity: p,
									lastIdealStyle: o,
									lastIdealVelocity: l
								}), i.unreadPropStyle = null, i.startAnimationIfNecessary()
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
					}(t, e), i(t, null, [{
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
							r = e.style,
							n = t || o.default(r),
							i = s.default(n);
						return {
							currentStyle: n,
							currentVelocity: i,
							lastIdealStyle: n,
							lastIdealVelocity: i
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
			t.default = b, e.exports = t.default
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
				i = function() {
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
			var s = a(r("./node_modules/react-motion/lib/mapToZero.js")),
				o = a(r("./node_modules/react-motion/lib/stripStyle.js")),
				c = a(r("./node_modules/react-motion/lib/stepper.js")),
				d = a(r("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				l = a(r("./node_modules/raf/index.js")),
				u = a(r("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				m = a(r("./node_modules/react/index.js")),
				p = a(r("./node_modules/react-motion/node_modules/prop-types/index.js")),
				f = 1e3 / 60;
			var b = function(e) {
				function t(r) {
					var i = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, r), this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = i.state, r = t.currentStyles, a = t.currentVelocities, s = t.lastIdealStyles, o = t.lastIdealVelocities, c = !1, d = 0; d < e.length; d++) {
							var l = e[d],
								u = !1;
							for (var m in l)
								if (Object.prototype.hasOwnProperty.call(l, m)) {
									var p = l[m];
									"number" == typeof p && (u || (u = !0, c = !0, r[d] = n({}, r[d]), a[d] = n({}, a[d]), s[d] = n({}, s[d]), o[d] = n({}, o[d])), r[d][m] = p, a[d][m] = 0, s[d][m] = p, o[d][m] = 0)
								}
						}
						c && i.setState({
							currentStyles: r,
							currentVelocities: a,
							lastIdealStyles: s,
							lastIdealVelocities: o
						})
					}, this.startAnimationIfNecessary = function() {
						i.animationID = l.default((function(e) {
							var t = i.props.styles(i.state.lastIdealStyles);
							if (function(e, t, r) {
									for (var n = 0; n < e.length; n++)
										if (!u.default(e[n], t[n], r[n])) return !1;
									return !0
								}(i.state.currentStyles, t, i.state.currentVelocities)) return i.animationID = null, void(i.accumulatedTime = 0);
							var r = e || d.default(),
								n = r - i.prevTime;
							if (i.prevTime = r, i.accumulatedTime = i.accumulatedTime + n, i.accumulatedTime > 10 * f && (i.accumulatedTime = 0), 0 === i.accumulatedTime) return i.animationID = null, void i.startAnimationIfNecessary();
							for (var a = (i.accumulatedTime - Math.floor(i.accumulatedTime / f) * f) / f, s = Math.floor(i.accumulatedTime / f), o = [], l = [], m = [], p = [], b = 0; b < t.length; b++) {
								var h = t[b],
									g = {},
									y = {},
									_ = {},
									E = {};
								for (var S in h)
									if (Object.prototype.hasOwnProperty.call(h, S)) {
										var v = h[S];
										if ("number" == typeof v) g[S] = v, y[S] = 0, _[S] = v, E[S] = 0;
										else {
											for (var O = i.state.lastIdealStyles[b][S], w = i.state.lastIdealVelocities[b][S], P = 0; P < s; P++) {
												var I = c.default(f / 1e3, O, w, v.val, v.stiffness, v.damping, v.precision);
												O = I[0], w = I[1]
											}
											var C = c.default(f / 1e3, O, w, v.val, v.stiffness, v.damping, v.precision),
												N = C[0],
												x = C[1];
											g[S] = O + (N - O) * a, y[S] = w + (x - w) * a, _[S] = O, E[S] = w
										}
									} m[b] = g, p[b] = y, o[b] = _, l[b] = E
							}
							i.animationID = null, i.accumulatedTime -= s * f, i.setState({
								currentStyles: m,
								currentVelocities: p,
								lastIdealStyles: o,
								lastIdealVelocities: l
							}), i.unreadPropStyles = null, i.startAnimationIfNecessary()
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
				}(t, e), i(t, null, [{
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
						r = e.styles,
						n = t || r().map(o.default),
						i = n.map((function(e) {
							return s.default(e)
						}));
					return {
						currentStyles: n,
						currentVelocities: i,
						lastIdealStyles: n,
						lastIdealVelocities: i
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
			t.default = b, e.exports = t.default
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
				i = function() {
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
			var s = a(r("./node_modules/react-motion/lib/mapToZero.js")),
				o = a(r("./node_modules/react-motion/lib/stripStyle.js")),
				c = a(r("./node_modules/react-motion/lib/stepper.js")),
				d = a(r("./node_modules/react-motion/lib/mergeDiff.js")),
				l = a(r("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				u = a(r("./node_modules/raf/index.js")),
				m = a(r("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				p = a(r("./node_modules/react/index.js")),
				f = a(r("./node_modules/react-motion/node_modules/prop-types/index.js")),
				b = 1e3 / 60;

			function h(e, t, r) {
				var n = t;
				return null == n ? e.map((function(e, t) {
					return {
						key: e.key,
						data: e.data,
						style: r[t]
					}
				})) : e.map((function(e, t) {
					for (var i = 0; i < n.length; i++)
						if (n[i].key === e.key) return {
							key: n[i].key,
							data: n[i].data,
							style: r[t]
						};
					return {
						key: e.key,
						data: e.data,
						style: r[t]
					}
				}))
			}

			function g(e, t, r, n, i, a, o, c, l) {
				for (var u = d.default(n, i, (function(e, n) {
						var i = t(n);
						return null == i ? (r({
							key: n.key,
							data: n.data
						}), null) : m.default(a[e], i, o[e]) ? (r({
							key: n.key,
							data: n.data
						}), null) : {
							key: n.key,
							data: n.data,
							style: i
						}
					})), p = [], f = [], b = [], h = [], g = 0; g < u.length; g++) {
					for (var y = u[g], _ = null, E = 0; E < n.length; E++)
						if (n[E].key === y.key) {
							_ = E;
							break
						} if (null == _) {
						var S = e(y);
						p[g] = S, b[g] = S;
						var v = s.default(y.style);
						f[g] = v, h[g] = v
					} else p[g] = a[_], b[g] = c[_], f[g] = o[_], h[g] = l[_]
				}
				return [u, p, f, b, h]
			}
			var y = function(e) {
				function t(r) {
					var i = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, r), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = g(i.props.willEnter, i.props.willLeave, i.props.didLeave, i.state.mergedPropsStyles, e, i.state.currentStyles, i.state.currentVelocities, i.state.lastIdealStyles, i.state.lastIdealVelocities), r = t[0], a = t[1], s = t[2], o = t[3], c = t[4], d = 0; d < e.length; d++) {
							var l = e[d].style,
								u = !1;
							for (var m in l)
								if (Object.prototype.hasOwnProperty.call(l, m)) {
									var p = l[m];
									"number" == typeof p && (u || (u = !0, a[d] = n({}, a[d]), s[d] = n({}, s[d]), o[d] = n({}, o[d]), c[d] = n({}, c[d]), r[d] = {
										key: r[d].key,
										data: r[d].data,
										style: n({}, r[d].style)
									}), a[d][m] = p, s[d][m] = 0, o[d][m] = p, c[d][m] = 0, r[d].style[m] = p)
								}
						}
						i.setState({
							currentStyles: a,
							currentVelocities: s,
							mergedPropsStyles: r,
							lastIdealStyles: o,
							lastIdealVelocities: c
						})
					}, this.startAnimationIfNecessary = function() {
						i.unmounting || (i.animationID = u.default((function(e) {
							if (!i.unmounting) {
								var t = i.props.styles,
									r = "function" == typeof t ? t(h(i.state.mergedPropsStyles, i.unreadPropStyles, i.state.lastIdealStyles)) : t;
								if (function(e, t, r, n) {
										if (n.length !== t.length) return !1;
										for (var i = 0; i < n.length; i++)
											if (n[i].key !== t[i].key) return !1;
										for (i = 0; i < n.length; i++)
											if (!m.default(e[i], t[i].style, r[i])) return !1;
										return !0
									}(i.state.currentStyles, r, i.state.currentVelocities, i.state.mergedPropsStyles)) return i.animationID = null, void(i.accumulatedTime = 0);
								var n = e || l.default(),
									a = n - i.prevTime;
								if (i.prevTime = n, i.accumulatedTime = i.accumulatedTime + a, i.accumulatedTime > 10 * b && (i.accumulatedTime = 0), 0 === i.accumulatedTime) return i.animationID = null, void i.startAnimationIfNecessary();
								for (var s = (i.accumulatedTime - Math.floor(i.accumulatedTime / b) * b) / b, o = Math.floor(i.accumulatedTime / b), d = g(i.props.willEnter, i.props.willLeave, i.props.didLeave, i.state.mergedPropsStyles, r, i.state.currentStyles, i.state.currentVelocities, i.state.lastIdealStyles, i.state.lastIdealVelocities), u = d[0], p = d[1], f = d[2], y = d[3], _ = d[4], E = 0; E < u.length; E++) {
									var S = u[E].style,
										v = {},
										O = {},
										w = {},
										P = {};
									for (var I in S)
										if (Object.prototype.hasOwnProperty.call(S, I)) {
											var C = S[I];
											if ("number" == typeof C) v[I] = C, O[I] = 0, w[I] = C, P[I] = 0;
											else {
												for (var N = y[E][I], x = _[E][I], j = 0; j < o; j++) {
													var A = c.default(b / 1e3, N, x, C.val, C.stiffness, C.damping, C.precision);
													N = A[0], x = A[1]
												}
												var T = c.default(b / 1e3, N, x, C.val, C.stiffness, C.damping, C.precision),
													k = T[0],
													M = T[1];
												v[I] = N + (k - N) * s, O[I] = x + (M - x) * s, w[I] = N, P[I] = x
											}
										} y[E] = w, _[E] = P, p[E] = v, f[E] = O
								}
								i.animationID = null, i.accumulatedTime -= o * b, i.setState({
									currentStyles: p,
									currentVelocities: f,
									lastIdealStyles: y,
									lastIdealVelocities: _,
									mergedPropsStyles: u
								}), i.unreadPropStyles = null, i.startAnimationIfNecessary()
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
				}(t, e), i(t, null, [{
					key: "propTypes",
					value: {
						defaultStyles: f.default.arrayOf(f.default.shape({
							key: f.default.string.isRequired,
							data: f.default.any,
							style: f.default.objectOf(f.default.number).isRequired
						})),
						styles: f.default.oneOfType([f.default.func, f.default.arrayOf(f.default.shape({
							key: f.default.string.isRequired,
							data: f.default.any,
							style: f.default.objectOf(f.default.oneOfType([f.default.number, f.default.object])).isRequired
						}))]).isRequired,
						children: f.default.func.isRequired,
						willEnter: f.default.func,
						willLeave: f.default.func,
						didLeave: f.default.func
					},
					enumerable: !0
				}, {
					key: "defaultProps",
					value: {
						willEnter: function(e) {
							return o.default(e.style)
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
						i = e.willLeave,
						a = e.didLeave,
						c = "function" == typeof r ? r(t) : r,
						d = void 0;
					d = null == t ? c : t.map((function(e) {
						for (var t = 0; t < c.length; t++)
							if (c[t].key === e.key) return c[t];
						return e
					}));
					var l = null == t ? c.map((function(e) {
							return o.default(e.style)
						})) : t.map((function(e) {
							return o.default(e.style)
						})),
						u = null == t ? c.map((function(e) {
							return s.default(e.style)
						})) : t.map((function(e) {
							return s.default(e.style)
						})),
						m = g(n, i, a, d, c, l, u, l, u),
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
			t.default = y, e.exports = t.default
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
				for (var n = {}, i = 0; i < e.length; i++) n[e[i].key] = i;
				var a = {};
				for (i = 0; i < t.length; i++) a[t[i].key] = i;
				var s = [];
				for (i = 0; i < t.length; i++) s[i] = t[i];
				for (i = 0; i < e.length; i++)
					if (!Object.prototype.hasOwnProperty.call(a, e[i].key)) {
						var o = r(i, e[i]);
						null != o && s.push(o)
					} return s.sort((function(e, r) {
					var i = a[e.key],
						s = a[r.key],
						o = n[e.key],
						c = n[r.key];
					if (null != i && null != s) return a[e.key] - a[r.key];
					if (null != o && null != c) return n[e.key] - n[r.key];
					if (null != i) {
						for (var d = 0; d < t.length; d++) {
							var l = t[d].key;
							if (Object.prototype.hasOwnProperty.call(n, l)) {
								if (i < a[l] && c > n[l]) return -1;
								if (i > a[l] && c < n[l]) return 1
							}
						}
						return 1
					}
					for (d = 0; d < t.length; d++) {
						l = t[d].key;
						if (Object.prototype.hasOwnProperty.call(n, l)) {
							if (s < a[l] && o > n[l]) return 1;
							if (s > a[l] && o < n[l]) return -1
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
			var i = r("./node_modules/react-motion/lib/Motion.js");
			t.Motion = n(i);
			var a = r("./node_modules/react-motion/lib/StaggeredMotion.js");
			t.StaggeredMotion = n(a);
			var s = r("./node_modules/react-motion/lib/TransitionMotion.js");
			t.TransitionMotion = n(s);
			var o = r("./node_modules/react-motion/lib/spring.js");
			t.spring = n(o);
			var c = r("./node_modules/react-motion/lib/presets.js");
			t.presets = n(c);
			var d = r("./node_modules/react-motion/lib/stripStyle.js");
			t.stripStyle = n(d);
			var l = r("./node_modules/react-motion/lib/reorderKeys.js");
			t.reorderKeys = n(l)
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
						var i = "number" == typeof t[n] ? t[n] : t[n].val;
						if (e[n] !== i) return !1
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
				return n({}, o, t, {
					val: e
				})
			};
			var i, a = r("./node_modules/react-motion/lib/presets.js"),
				s = (i = a) && i.__esModule ? i : {
					default: i
				},
				o = n({}, s.default.noWobble, {
					precision: .01
				});
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stepper.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, r, i, a, s, o) {
				var c = r + (-a * (t - i) + -s * r) * e,
					d = t + c * e;
				if (Math.abs(c) < o && Math.abs(d - i) < o) return n[0] = i, n[1] = 0, n;
				return n[0] = d, n[1] = c, n
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
					var r, n, i;
					"undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
						return performance.now()
					} : null != t && t.hrtime ? (e.exports = function() {
						return (r() - i) / 1e6
					}, n = t.hrtime, i = (r = function() {
						var e;
						return 1e9 * (e = n())[0] + e[1]
					})()) : Date.now ? (e.exports = function() {
						return Date.now() - i
					}, i = Date.now()) : (e.exports = function() {
						return (new Date).getTime() - i
					}, i = (new Date).getTime())
				}).call(this)
			}).call(this, r("./node_modules/process/browser.js"))
		},
		"./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function i() {}

			function a() {}
			a.resetWarningCache = i, e.exports = function() {
				function e(e, t, r, i, a, s) {
					if (s !== n) {
						var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw o.name = "Invariant Violation", o
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
					resetWarningCache: i
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
		"./src/lib/constants/specialMembership.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = "custom"
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return i
			}));
			const n = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				i = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return a
			}));
			const n = "ECONOMICS__ME__ME_DATA_SUCCESS",
				i = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				a = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return o
			}));
			const n = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				i = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				s = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "i", (function() {
				return u
			}));
			const n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "i", (function() {
				return u
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "k", (function() {
				return p
			})), r.d(t, "l", (function() {
				return f
			})), r.d(t, "m", (function() {
				return b
			})), r.d(t, "n", (function() {
				return h
			})), r.d(t, "o", (function() {
				return g
			})), r.d(t, "p", (function() {
				return y
			})), r.d(t, "q", (function() {
				return _
			})), r.d(t, "r", (function() {
				return E
			})), r.d(t, "s", (function() {
				return S
			})), r.d(t, "t", (function() {
				return v
			})), r.d(t, "u", (function() {
				return O
			})), r.d(t, "v", (function() {
				return w
			})), r.d(t, "w", (function() {
				return P
			})), r.d(t, "x", (function() {
				return I
			}));
			const n = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				i = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				a = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				s = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				o = "POLL_VOTE_SUCCESS",
				c = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				d = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				l = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				u = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				p = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				b = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				h = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				g = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				y = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				_ = "GOVERNANCE__TRANSFER_FAILURE",
				E = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				S = "GOVERNANCE__TRANSFER_PENDING",
				v = "GOVERNANCE__TRANSFER_SUCCESS",
				O = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				w = "GOVERNANCE__WALLETS_FETCH_PENDING",
				P = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				I = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/EducationFooter/index.m.less": function(e, t, r) {
			e.exports = {
				link: "_3Xm1pMbPLD4-LimCPttJrx",
				wrapper: "_3J6-mHf2cWgDlC72639JFl"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/GalleryFooter/index.m.less": function(e, t, r) {
			e.exports = {
				container: "Vst2AR9_4M4Sa4GdU44ww"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/LFGFooter/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_36fj-CehWYV4px8rNNfJ7l"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/ManagementFooter/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1hMuufUdWJuEiM0j1zuJRE"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_22OSHb1gg9w0AIZCnJ0OLU",
				content: "_2ufo2cNthLAzO0GHHyZ4pz",
				footer: "pBiXUPSTxpS_BderhuZ1o",
				footerEducation: "_33aWIZevNirbJReK2qtyZT"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/tooltip.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				i = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				o = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = r("./src/reddit/selectors/tooltip.ts"),
				l = r("./node_modules/uuid/v4.js"),
				u = r.n(l),
				m = r("./src/lib/classNames/index.ts"),
				p = r("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx"),
				f = r("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				b = r("./src/reddit/components/TrackingHelper/index.tsx"),
				h = r("./src/reddit/featureFlags/index.ts"),
				g = r("./src/reddit/models/Badge/index.ts"),
				y = r("./src/reddit/models/Badge/managementPage.ts"),
				_ = r("./src/reddit/selectors/economics.ts"),
				E = r("./src/reddit/selectors/products.ts"),
				S = r("./src/reddit/selectors/telemetry.ts"),
				v = r("./node_modules/fbt/lib/FbtPublic.js"),
				O = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				w = r("./src/reddit/actions/tooltip.ts"),
				P = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.tsx"),
				I = r("./src/reddit/controls/Button/index.tsx"),
				C = r("./src/reddit/helpers/economics/membershipPage.ts"),
				N = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/EducationFooter/index.m.less"),
				x = r.n(N);
			const j = Object(s.c)({
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t]
			});
			var A = Object(b.c)(Object(a.b)(j, e => ({
					onOpen: () => e(Object(w.i)())
				}))((function(e) {
					const t = e.subreddit ? e.subreddit.name : "",
						r = e.correlationId || u()(),
						n = t => {
							t.stopPropagation(), e.sendEvent(e => ({
								correlationId: r,
								source: "meta",
								action: "click",
								noun: "subscription_badge_hover_open_learn_more",
								...S.defaults(e),
								subreddit: S.subreddit(e)
							})), e.onOpen()
						};
					return i.a.createElement("footer", {
						className: Object(m.a)(e.className, x.a.container)
					}, i.a.createElement(O.a, {
						className: x.a.wrapper,
						to: Object(C.a)(t, r),
						onClick: n
					}, i.a.createElement(P.a, {
						className: x.a.benefits,
						subredditId: e.subredditId
					})), i.a.createElement(I.k, {
						className: x.a.link,
						disabled: !e.subreddit,
						to: Object(C.a)(t, r),
						onClick: n
					}, v.fbt._("Learn More", null, {
						hk: "4FGSHD"
					})))
				}))),
				T = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				k = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/GalleryFooter/index.m.less"),
				M = r.n(k);
			var D = Object(b.c)(Object(a.b)(void 0, (e, {
					badge: t,
					subredditId: r
				}) => ({
					onOpen: () => {
						e(Object(w.i)()), e(Object(T.c)({
							badge: t,
							subredditId: r,
							initialView: y.c.Gallery
						}))
					}
				}))((function(e) {
					const t = e.correlationId || u()();
					return i.a.createElement("footer", {
						className: Object(m.a)(e.className, M.a.container)
					}, i.a.createElement("div", null), i.a.createElement(I.i, {
						onClick: r => {
							r.stopPropagation(), e.sendEvent(e => ({
								correlationId: t,
								source: "meta",
								action: "click",
								noun: "subscription_badge_hover_open_gallery",
								...S.defaults(e),
								subreddit: S.subreddit(e)
							})), e.onOpen()
						}
					}, v.fbt._("Get", null, {
						hk: "4g4sIK"
					})))
				}))),
				B = r("./src/reddit/actions/chat/toggle.ts"),
				R = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/LFGFooter/index.m.less"),
				L = r.n(R);
			var F = Object(b.c)(Object(a.b)(void 0, (e, {
					userId: t
				}) => ({
					onStartChat: () => e(Object(B.b)(t))
				}))((function(e) {
					const t = e.correlationId || u()();
					return i.a.createElement("footer", {
						className: Object(m.a)(L.a.container, e.className)
					}, i.a.createElement("div", null), i.a.createElement(I.i, {
						onClick: r => {
							r.stopPropagation(), e.sendEvent(e => ({
								correlationId: t,
								source: "meta",
								action: "click",
								noun: "lfg_badge_start_chat",
								...S.defaults(e),
								subreddit: S.subreddit(e)
							})), e.onStartChat()
						}
					}, v.fbt._("start chat", null, {
						hk: "eNK8L"
					})))
				}))),
				G = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/ManagementFooter/index.m.less"),
				U = r.n(G);
			var V, W = Object(a.b)(void 0, (e, {
					badge: t,
					subredditId: r
				}) => ({
					onOpen: () => {
						e(Object(w.i)()), e(Object(T.c)({
							badge: t,
							subredditId: r,
							initialView: y.c.MyBadges
						}))
					}
				}))((function(e) {
					return i.a.createElement("footer", {
						className: Object(m.a)(e.className, U.a.container)
					}, i.a.createElement("div", null), i.a.createElement(I.i, {
						onClick: t => {
							t.stopPropagation(), e.onOpen()
						}
					}, v.fbt._("View", null, {
						hk: "3ZVmGs"
					})))
				})),
				z = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/index.m.less"),
				H = r.n(z);
			! function(e) {
				e[e.Education = 0] = "Education", e[e.Gallery = 1] = "Gallery", e[e.LFG = 2] = "LFG", e[e.Management = 3] = "Management"
			}(V || (V = {}));
			class Z extends i.a.Component {
				constructor(e) {
					super(e), this.correlationId = e.correlationId || u()()
				}
				componentDidMount() {
					this.props.sendEvent(e => ({
						source: "meta",
						action: "open",
						noun: "badges_hover_card",
						correlationId: this.correlationId,
						...S.defaults(e),
						subreddit: S.subreddit(e)
					}))
				}
				render() {
					const e = function(e) {
						const t = !!e.badge.placement || Object(g.f)(e.badge);
						return e.userId && (f.b.has(e.badge.id) || f.b.has(e.badge.type)) ? V.LFG : t && e.userIsPremiumSubscriber === _.a.Subscribed || !t && e.ownedBadge ? V.Management : t && e.userIsPremiumSubscriber !== _.a.Subscribed && e.premiumSubscriptionsEnabled ? V.Education : !t && !e.ownedBadge && e.relevantProduct && e.relevantProduct.price ? V.Gallery : void 0
					}(this.props);
					return i.a.createElement("div", {
						className: Object(m.a)(this.props.className, H.a.container),
						style: this.props.style
					}, i.a.createElement(p.a, {
						badge: this.props.badge,
						className: H.a.content,
						subredditId: this.props.subredditId,
						type: Object(y.d)(this.props.badge.placement)
					}), e === V.Management && i.a.createElement(W, {
						className: H.a.footer,
						badge: this.props.badge,
						subredditId: this.props.subredditId
					}), e === V.Education && i.a.createElement(A, {
						className: H.a.footerEducation,
						correlationId: this.correlationId,
						subredditId: this.props.subredditId
					}), e === V.Gallery && i.a.createElement(D, {
						className: H.a.footer,
						correlationId: this.correlationId,
						badge: this.props.badge,
						subredditId: this.props.subredditId
					}), e === V.LFG && i.a.createElement(F, {
						className: H.a.footer,
						correlationId: this.correlationId,
						userId: this.props.userId
					}))
				}
			}
			const X = Object(s.c)({
				ownedBadge: _.l,
				premiumSubscriptionsEnabled: h.d.spSpecialMemberships,
				relevantProduct: (e, {
					badge: t
				}) => {
					if (!Object(g.e)(t)) return t;
					const r = t.type;
					return Object(E.a)(e, r)
				},
				userIsPremiumSubscriber: (e, {
					subredditId: t
				}) => Object(_.w)(e, t)
			});
			var q = Object(b.c)(Object(a.b)(X)(Z));
			const Y = Object(c.a)(q, [o.a.Click, o.a.Keydown]);
			const $ = Object(s.c)({
				isOpen: (e, {
					tooltipId: t
				}) => Object(d.b)(t)(e)
			});
			t.default = Object(a.b)($)((function(e) {
				return e.isOpen ? i.a.createElement(Y, e) : null
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less": function(e, t, r) {
			e.exports = {
				collectionTitle: "BKuPdCEiKWhUuAAZSV8Hu",
				singleLineText: "_3vV5Hg-hZiDuQVXYnhgzdZ",
				description: "_3K0DQ21Q-wH4kETiMxiaNo",
				fullWidth: "_1HsWtVhofw3GuWXgyObfz4",
				info: "_30GDKdvss889YcOkeQXbVz",
				image: "_3vLr4Xzqw3Fx7cHwT9nDP7",
				progressAmount: "_2zNarMBPc02JsQXIFrSaFR",
				progressBar: "_3hmtSMaZH5Wkj8Ftna8Wy1",
				progressContainer: "_2F36VBMAcVYDe4GdSPiMdk",
				progressThumb: "_3i-h-gzh3Oskm1I04nHRT3",
				title: "_2ZnmMFDAIE41ruoyRhfq3L",
				wrapper: "_2se6JR27PiBUl4k4nrgmAS"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./node_modules/react/index.js"),
				a = r.n(i),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				d = r("./src/reddit/models/Badge/index.ts"),
				l = r("./src/reddit/models/Badge/managementPage.ts"),
				u = r("./src/reddit/selectors/crypto/wallet.ts"),
				m = r("./src/reddit/selectors/economics.ts"),
				p = r("./node_modules/reselect/es/index.js"),
				f = r("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less"),
				b = r.n(f);
			const h = Object(p.c)({
				collection: (e, {
					badge: t,
					subredditId: r
				}) => {
					if (t.collections) {
						const n = Object.keys(t.collections);
						if (n.length) {
							const t = n[0];
							return Object(m.h)(e, {
								collectionId: t,
								subredditId: r
							})
						}
					}
				},
				progress: (e, {
					badge: t,
					subredditId: r,
					type: n
				}) => {
					if (!Object(d.e)(t) && n === l.a.Achievement && c.a[t.id]) {
						const n = Object(u.a)(e, {
							subredditId: r
						});
						if (n) return {
							complete: parseInt(n.amount),
							total: c.a[t.id]
						}
					}
				}
			});
			t.a = Object(s.b)(h)((function(e) {
				const t = e.type === l.a.Loyalty ? n.fbt._("Loyalty Badge", null, {
						hk: "3C1yVX"
					}) : e.type === l.a.Achievement ? n.fbt._("Achievement Badge", null, {
						hk: "3ZCLHl"
					}) : n.fbt._("Style Badge", null, {
						hk: "1heMgq"
					}),
					r = e.collection ? e.collection.title : t,
					{
						url: i,
						url2x: s
					} = Object(d.d)(60, 60, e.badge),
					c = e.progress;
				return a.a.createElement("article", {
					className: Object(o.a)(e.className, {
						[b.a.fullWidth]: !!e.fullWidth
					})
				}, a.a.createElement("div", {
					className: b.a.wrapper
				}, a.a.createElement("img", {
					className: b.a.image,
					src: s,
					srcSet: `${i}, ${s} 2x`
				}), a.a.createElement("div", {
					className: b.a.info
				}, a.a.createElement("div", {
					className: b.a.collectionTitle,
					style: {
						color: e.collection && e.collection.highlight
					},
					title: r
				}, r), a.a.createElement("header", {
					className: b.a.title
				}, e.badge.title), c && c.complete < c.total && a.a.createElement("div", {
					className: b.a.progressContainer
				}, a.a.createElement("div", {
					className: b.a.progressBar
				}, a.a.createElement("div", {
					className: b.a.progressThumb,
					style: {
						width: `${c.complete/c.total*100}%`
					}
				})), a.a.createElement("div", {
					className: b.a.progressAmount
				}, function(e) {
					return `${`${Math.floor(e.complete/1e3)}k`}/${`${Math.floor(e.total/1e3)}k`}`
				}(c))), a.a.createElement("div", {
					className: b.a.description
				}, e.badge.description))), e.children)
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, r) {
			"use strict";
			var n, i, a, s;

			function o(e) {
				const {
					platform: t,
					playerType: r,
					region: n,
					style: i
				} = e;
				return `https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_${i}/${n}_${t}_${r}_${i}.svg`
			}
			r.d(t, "a", (function() {
					return n
				})), r.d(t, "b", (function() {
					return i
				})), r.d(t, "c", (function() {
					return a
				})), r.d(t, "d", (function() {
					return o
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(n || (n = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(i || (i = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(a || (a = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(s || (s = {}))
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Badges/index.m.less": function(e, t, r) {
			e.exports = {
				badgePreview: "iHgTssgiyXOzrR4gf5B3U",
				background: "_2xYSXHDQnghiy2GNEFAPFu",
				check: "_22Z9uN-IvHaTp6USqcM_jo",
				container: "P12mq84uFfuH2KXEfMeR5",
				content: "_3aWIE0KiovmqTpbPkjPtwb",
				explanation: "_1c0pMqE8eosjFrQF7TH2RQ",
				rows: "_3angrEFRx8dotcgLSeeW8G",
				row: "_2cyN6pW1y-GxOiMIrnLAMp",
				animateRow: "_2Y-UeLdd5w01w0dNSzfQ_j",
				selection: "_3u2ui0EFGUMzQ4sp5UDL2t",
				title: "mU_g_sx9q_eDtVlJGYxm-",
				username: "Wn_hZZCRmaPUoiOnUYCMI"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Emojis/index.m.less": function(e, t, r) {
			e.exports = {
				background: "_1jIalZDRbSrivjxJGUEUz5",
				container: "qa348cr0hy45FoDJcbNpU",
				content: "_3F4MQT8DhZnlZdukDjTF8R",
				drawer: "_2c4rmfyXdC90cXD7tu5pam",
				emojisContainer: "_3RXctyTdCd4UoLrVZGdbSo",
				emojisTitle: "_2DK6aKnJxZcH_qsy1SFiyN",
				emojis: "_1lshagpcnVvFEiV4HdvkAv",
				emoji: "_2NuSs4NMhHbCUiCtDEDcMU",
				example: "_38AlmvDvQ-QTZpGXVbBCuW",
				explanation: "_2lZ_1R5WMYgpfu-bINYFQa",
				overflow: "_2rIEQfirq9yyIqx4WfnSQI",
				title: "c5oGzlimw-np80U3WGVEK"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Gifs/index.m.less": function(e, t, r) {
			e.exports = {
				background: "_2hc7sa_lfKoqSqOWx-hXqA",
				container: "yinH5vFGetGkZNpQ-OAx_",
				content: "_3WKBNoWpNqiOP45cLNS5JD",
				drawer: "_30RKyPpFVXVRthw0A5gxQV",
				example: "_3vQpPpC99oo04IqE6s-Rox",
				explanation: "_3P6ofGcsEuWGLcft5TyN3r",
				imagesContainer: "_3pOXb-J3VLbj-wVyihBPKk",
				images: "_2LOj_LEpO5_iCgPHSrCoJq",
				image: "_2ekdbqTrmyuQOBNIf1iDG6",
				imageCol: "_2CiGDmaab7d5qe_INqssQ9",
				overflow: "_1EMpIuS7ryuiZydXIgXwpC",
				title: "KGn3VoZ0vCi_xW-pYgA-D"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.m.less": function(e, t, r) {
			e.exports = {
				benefits: "_2sX8y0yMiZaCrlPaX9DwmY",
				crown: "_3KyPIyW6lPDHYkM0oa3vEk",
				indicators: "R3HqL7N1U6nD6Qv-tC1lO",
				indicator: "_3WFF566WDWEz-i22qBNmmf",
				indicatorSelected: "_1_pc03SFie7M0ad9TPTpT_",
				slide: "_13eyljtfoaT6F8z_utN2zt",
				title: "Fq_OfxL8jLCsLuL7E_ZRr"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				i = r.n(n),
				a = r("./node_modules/react-motion/lib/react-motion.js"),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				l = r("./src/reddit/selectors/economics.ts"),
				u = r("./node_modules/fbt/lib/FbtPublic.js"),
				m = r("./src/config.ts"),
				p = r("./src/reddit/icons/svgs/Checkmark/index.tsx");
			const f = {
					height: 120,
					width: 3464,
					badges: [{
						color: "rgb(41, 37, 132)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/20_collision_40@2x.png"
					}, {
						color: "rgb(241, 116, 62)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/4_reddit_wrap_40@2x.png"
					}, {
						color: "rgb(209, 90, 72)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/11_8_from_9_dmg_40@2x.png"
					}, {
						color: "rgb(71, 83, 118)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/15_skull_trooper_40@2x.png"
					}, {
						color: "rgb(180, 124, 56)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/7_battle_star_gold_40@2x.png"
					}, {
						color: "rgb(86, 132, 215)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/28_meteor_40@2x.png"
					}, {
						color: "rgb(115, 115, 153)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/10_shopping_cart_40@2x.png"
					}, {
						color: "rgb(108, 82, 89)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/16_OG_40@2x.png"
					}, {
						color: "rgb(88, 72, 88)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/13_scorecard_40@2x.png"
					}, {
						color: "rgb(115, 75, 220)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/23_kevins_autograph_40@2x.png"
					}, {
						color: "rgb(146, 80, 25)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/1_wood_40@2x.png"
					}, {
						color: "rgb(44, 96, 184)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/9_battle_star_diamond_40@2x.png"
					}, {
						color: "rgb(110, 108, 148)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/21_rocket_40@2x.png"
					}, {
						color: "rgb(98, 167, 54)",
						url: "https://meta.redditmedia.com/img/fortnitebr/badges/22_t_pose_40@2x.png"
					}]
				},
				b = {
					height: 64,
					width: 1664,
					badges: [{
						color: "#3B77A3",
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/original/rocket_60x60.png"
					}, {
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/membership/9_months_60x60.png"
					}, {
						color: "#256F77",
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/crypto/pickaxe_60x60.png"
					}, {
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/membership/member_80x80.png"
					}, {
						color: "#307EB9",
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/membership/3_month_60x60.png"
					}, {
						color: "#458545",
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/crypto/magic_ball_60x60.png"
					}, {
						color: "#AA183F",
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/crypto/pink_wojak_60x60.png"
					}, {
						color: "#2B6670",
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/crypto/rollercoaster_60x60.png"
					}, {
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/membership/6_months_60x60.png"
					}, {
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/membership/1_year_60x60.png"
					}, {
						color: "#B96125",
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/crypto/printer_60x60.png"
					}, {
						color: "#561313",
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/crypto/bear_60x60.png"
					}, {
						url: "https://meta.redditmedia.com/public/cryptocurrencytest/badges/membership/1_month_60x60.png"
					}]
				},
				h = {
					height: 64,
					width: 1664,
					badges: [{
						color: "#714114",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/bear_60x60.png"
					}, {
						color: "#2A4168",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/beliver_60x60.png"
					}, {
						color: "#615127",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/buidl_60x60.png"
					}, {
						color: "#7E2826",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/bull_60x60.png"
					}, {
						color: "#679504",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/cuecumber_60x60.png"
					}, {
						color: "#458545",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/trader_120x120.png"
					}, {
						color: "#70561A",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/lambo_60x60.png"
					}, {
						color: "#2D4877",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/miner_60x60.png"
					}, {
						color: "#2B6071",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/shill_shield_60x60.png"
					}, {
						color: "#44761B",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/snek_60x60.png"
					}, {
						color: "#416B9A",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/ufo_60x60.png"
					}, {
						color: "#444D8A",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/whale_60x60.png"
					}, {
						color: "#44761B",
						url: "https://meta.redditmedia.com/public/daonuts/badges/original/snek_60x60.png"
					}]
				},
				g = {
					height: 64,
					width: 1664,
					badges: [{
						color: "#7D60B6",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/fire_60x60.png"
					}, {
						color: "#6E30C8",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/bear_60x60.png"
					}, {
						color: "#5D25AC",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/rocket_60x60.png"
					}, {
						color: "#982A09",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/bull_60x60.png"
					}, {
						color: "#3B3B5E",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/moon_60x60.png"
					}, {
						color: "#1BA2C1",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/3d_60x60.png"
					}, {
						color: "#380982",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/anon_60x60.png"
					}, {
						color: "#480C8E",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/balance_60x60.png"
					}, {
						color: "#306EB7",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/lumenaut_60x60.png"
					}, {
						color: "#B23C19",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/rekt_60x60.png"
					}, {
						color: "#982A09",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/bull_60x60.png"
					}, {
						color: "#6E30C8",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/bear_60x60.png"
					}, {
						color: "#1BA2C1",
						url: "https://meta.redditmedia.com/public/stellartest/badges/original/3d_60x60.png"
					}]
				},
				y = {
					t5_2wlj3: b,
					t5_2l3wpx: b,
					t5_vsb5g: h,
					t5_37jgj: h,
					t5_2t9ha: g,
					t5_2a3y8x: g
				};
			var _ = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Badges/index.m.less"),
				E = r.n(_);
			const S = (e, t) => `${m.a.assetPath}/img/memberships/paywall/${e.name.toLowerCase()}/${t}`,
				v = 500,
				O = 30,
				w = 132;
			class P extends i.a.Component {
				constructor(e) {
					super(e), this.badgesBackground = function(e) {
						const t = y[e] || f,
							r = t.width / t.badges.length;
						return {
							...t,
							badges: t.badges.map((function(e, t, n) {
								return {
									...e,
									interval: [r * t, r * (t + 1)]
								}
							}))
						}
					}(e.subredditId), this.state = {
						currentlySelected: this.badgesBackground.badges[0]
					}, this.intervalRef = null, this.rowRef = null
				}
				componentDidMount() {
					const e = this.badgesBackground.height / O;
					this.intervalRef = window.setInterval(() => {
						if (!this.rowRef) return;
						const t = this.badgesBackground.width,
							r = window.getComputedStyle(this.rowRef).backgroundPositionX;
						if (!r) return;
						const n = ((w - parseFloat(r.replace("px", ""))) * e + t) % t;
						this.badgesBackground.badges.forEach(e => {
							n > e.interval[0] && n <= e.interval[1] && this.setState({
								currentlySelected: e
							})
						})
					}, v)
				}
				componentWillUnmount() {
					this.intervalRef && clearInterval(this.intervalRef)
				}
				render() {
					const {
						className: e,
						subreddit: t,
						username: r
					} = this.props, {
						currentlySelected: n
					} = this.state;
					return t ? i.a.createElement("article", {
						className: Object(c.a)(E.a.container, e)
					}, i.a.createElement("div", {
						className: E.a.background
					}), i.a.createElement("div", {
						className: E.a.content
					}, i.a.createElement("header", {
						className: E.a.title
					}, u.fbt._("badges", null, {
						hk: "4bW4l"
					})), i.a.createElement("div", {
						className: E.a.rows
					}, i.a.createElement("div", {
						className: E.a.row,
						style: {
							animationDuration: "80s",
							backgroundImage: `url(${S(t,"badges-line-1-v2.png")})`
						}
					}), i.a.createElement("div", {
						className: E.a.row,
						ref: e => this.rowRef = e,
						style: {
							animationDirection: "reverse",
							animationDuration: "120s",
							backgroundImage: `url(${S(t,"badges-line-2-v2.png")})`
						}
					}), i.a.createElement("div", {
						className: E.a.row,
						style: {
							animationDuration: "160s",
							backgroundImage: `url(${S(t,"badges-line-3-v2.png")})`
						}
					})), i.a.createElement("div", {
						className: E.a.username,
						style: {
							color: n.color
						}
					}, i.a.createElement("img", {
						className: E.a.badgePreview,
						src: n.url
					}), r), i.a.createElement("footer", {
						className: E.a.explanation
					}, u.fbt._("Style your username with a badge and color", null, {
						hk: "2bRpdH"
					})), i.a.createElement("div", {
						className: E.a.selection
					}, i.a.createElement(p.a, {
						className: E.a.check
					})))) : null
				}
			}
			const I = Object(o.c)({
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t],
				username: e => `u/${e.user.account&&e.user.account.displayText||"username"}`
			});
			var C = Object(s.b)(I)(P),
				N = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Emojis/index.m.less"),
				x = r.n(N);
			const j = ["blink", "bush", "chug", "clappy", "confused", "cuddle", "dab", "dance", "default", "oof", "respect", "soon", "unfortunately", "wow"].map(e => `https://meta.redditmedia.com/img/fortnitebr/emotes/${e}-2x.gif`).concat("https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_destroy.gif");
			const A = Object(o.c)({
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t]
			});
			var T = Object(s.b)(A)((function(e) {
					const {
						className: t,
						subreddit: r
					} = e;
					return r ? i.a.createElement("article", {
						className: Object(c.a)(x.a.container, t)
					}, i.a.createElement("div", {
						className: x.a.background
					}), i.a.createElement("div", {
						className: x.a.content
					}, i.a.createElement("header", {
						className: x.a.title
					}, u.fbt._("emotes", null, {
						hk: "1VLDec"
					})), i.a.createElement("div", {
						className: x.a.example
					}, i.a.createElement("img", {
						className: x.a.drawer,
						src: `${m.a.assetPath}/img/memberships/emoji-drawer.png`
					}), i.a.createElement("div", {
						className: x.a.emojisTitle
					}, u.fbt._("Add r/{communityName} emote", [u.fbt._param("communityName", r.name)], {
						hk: "1pL2rY"
					})), i.a.createElement("div", {
						className: x.a.emojisContainer
					}, i.a.createElement("div", {
						className: x.a.emojis
					}, j.map(e => i.a.createElement("img", {
						className: x.a.emoji,
						key: e,
						src: e
					}))), i.a.createElement("div", {
						className: x.a.overflow
					}))), i.a.createElement("footer", {
						className: x.a.explanation
					}, u.fbt._("Get access to premium animated emotes", null, {
						hk: "1jTE2m"
					})))) : null
				})),
				k = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Gifs/index.m.less"),
				M = r.n(k);
			const D = (() => {
				const e = {};
				return async t => {
					if (e[t]) return e[t];
					const r = {
						data: [{
							type: "gif",
							id: "LYtOpHpS9dNFU2W55R",
							rating: "g",
							images: {
								fixed_width: {
									url: "https://media1.giphy.com/media/LYtOpHpS9dNFU2W55R/200w.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200w.gif",
									width: "200",
									height: "112",
									size: "561605"
								},
								downsized: {
									url: "https://media1.giphy.com/media/LYtOpHpS9dNFU2W55R/giphy-downsized.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=giphy-downsized.gif",
									width: "362",
									height: "203",
									size: "1497339"
								},
								fixed_height: {
									url: "https://media1.giphy.com/media/LYtOpHpS9dNFU2W55R/200.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200.gif",
									width: "356",
									height: "200",
									size: "1745959"
								}
							},
							title: "battle royale dab GIF by PlayStation"
						}, {
							type: "gif",
							id: "1rPWlleU4TwMW16RBI",
							rating: "g",
							images: {
								fixed_width: {
									url: "https://media0.giphy.com/media/1rPWlleU4TwMW16RBI/200w.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200w.gif",
									width: "200",
									height: "113",
									size: "626489"
								},
								downsized: {
									url: "https://media0.giphy.com/media/1rPWlleU4TwMW16RBI/giphy.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=giphy.gif",
									width: "166",
									height: "94",
									size: "445107"
								},
								fixed_height: {
									url: "https://media0.giphy.com/media/1rPWlleU4TwMW16RBI/200.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200.gif",
									width: "353",
									height: "200",
									size: "1178715"
								}
							},
							title: "Animated GIF"
						}, {
							type: "gif",
							id: "6bdgwW6B0ooer3r8AZ",
							rating: "g",
							images: {
								fixed_width: {
									url: "https://media2.giphy.com/media/6bdgwW6B0ooer3r8AZ/200w.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200w.gif",
									width: "200",
									height: "127",
									size: "1631580"
								},
								downsized: {
									url: "https://media2.giphy.com/media/6bdgwW6B0ooer3r8AZ/giphy-downsized.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=giphy-downsized.gif",
									width: "517",
									height: "328",
									size: "1411973"
								},
								fixed_height: {
									url: "https://media2.giphy.com/media/6bdgwW6B0ooer3r8AZ/200.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200.gif",
									width: "315",
									height: "200",
									size: "3772671"
								}
							},
							title: "suspicious kenan thompson GIF"
						}, {
							type: "gif",
							id: "2A8tnatJlmXfhjY1DW",
							rating: "g",
							images: {
								fixed_width: {
									url: "https://media3.giphy.com/media/2A8tnatJlmXfhjY1DW/200w.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200w.gif",
									width: "200",
									height: "356",
									size: "2826317"
								},
								downsized: {
									url: "https://media3.giphy.com/media/2A8tnatJlmXfhjY1DW/giphy-downsized.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=giphy-downsized.gif",
									width: "270",
									height: "480",
									size: "1480957"
								},
								fixed_height: {
									url: "https://media3.giphy.com/media/2A8tnatJlmXfhjY1DW/200.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200.gif",
									width: "113",
									height: "200",
									size: "1158938"
								}
							},
							title: "dance dancing GIF by FC Bayern Munich"
						}, {
							type: "gif",
							id: "gLz0XVWX1T2kE",
							rating: "g",
							images: {
								fixed_width: {
									url: "https://media2.giphy.com/media/gLz0XVWX1T2kE/200w.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200w.gif",
									width: "200",
									height: "113",
									size: "575239"
								},
								downsized: {
									url: "https://media2.giphy.com/media/gLz0XVWX1T2kE/giphy-tumblr.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=giphy-tumblr.gif",
									width: "250",
									height: "140",
									size: "840134"
								},
								fixed_height: {
									url: "https://media2.giphy.com/media/gLz0XVWX1T2kE/200.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200.gif",
									width: "356",
									height: "200",
									size: "1585466"
								}
							},
							title: "you mad GIF"
						}, {
							type: "gif",
							id: "XZ1BckBZDh4w0Ey3A0",
							rating: "g",
							images: {
								fixed_width: {
									url: "https://media0.giphy.com/media/XZ1BckBZDh4w0Ey3A0/200w.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200w.gif",
									width: "200",
									height: "113",
									size: "429842"
								},
								downsized: {
									url: "https://media0.giphy.com/media/XZ1BckBZDh4w0Ey3A0/giphy-downsized.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=giphy-downsized.gif",
									width: "480",
									height: "270",
									size: "1592826"
								},
								fixed_height: {
									url: "https://media0.giphy.com/media/XZ1BckBZDh4w0Ey3A0/200.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200.gif",
									width: "356",
									height: "200",
									size: "1141385"
								}
							},
							title: "braxton family values GIF by WE tv"
						}, {
							type: "gif",
							id: "bwUp1oSrOKIGPy28Zi",
							slug: "redbull-what-okay-bwUp1oSrOKIGPy28Zi",
							rating: "g",
							images: {
								fixed_width: {
									url: "https://media1.giphy.com/media/bwUp1oSrOKIGPy28Zi/200w.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200w.gif",
									width: "200",
									height: "200",
									size: "385281"
								},
								downsized: {
									url: "https://media1.giphy.com/media/bwUp1oSrOKIGPy28Zi/giphy-downsized.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=giphy-downsized.gif",
									width: "480",
									height: "480",
									size: "1195081"
								},
								fixed_height: {
									url: "https://media1.giphy.com/media/bwUp1oSrOKIGPy28Zi/200.gif?cid=849e041abbc36d4633243e2e8f4733bcc0ab9bfde99721ba&rid=200.gif",
									width: "200",
									height: "200",
									size: "385281"
								}
							},
							title: "you good what GIF by Red Bull"
						}],
						pagination: {
							total_count: 6007,
							count: 25,
							offset: 0
						},
						meta: {
							status: 200,
							msg: "OK",
							response_id: "bbc36d4633243e2e8f4733bcc0ab9bfde99721ba"
						}
					};
					return e[t] = r, r
				}
			})();
			class B extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						imagesCol1: [],
						imagesCol2: []
					}
				}
				async componentDidMount() {
					const e = this.props.subreddit && this.props.subreddit.title || "reddit",
						t = await D(e),
						r = [],
						n = [];
					t.data.forEach((e, t) => {
						const i = e.images.fixed_width.url;
						t % 2 == 0 ? r.push(i) : n.push(i)
					}), this.setState({
						imagesCol1: r,
						imagesCol2: n
					})
				}
				render() {
					const {
						className: e,
						subreddit: t
					} = this.props;
					return t ? i.a.createElement("article", {
						className: Object(c.a)(M.a.container, e)
					}, i.a.createElement("div", {
						className: M.a.background
					}), i.a.createElement("div", {
						className: M.a.content
					}, i.a.createElement("header", {
						className: M.a.title
					}, u.fbt._("gifs in comments", null, {
						hk: "41wG7A"
					})), i.a.createElement("div", {
						className: M.a.example
					}, i.a.createElement("img", {
						className: M.a.drawer,
						src: `${m.a.assetPath}/img/memberships/gif-drawer.png`
					}), i.a.createElement("div", {
						className: M.a.imagesContainer
					}, i.a.createElement("div", {
						className: M.a.images
					}, i.a.createElement("div", {
						className: M.a.imageCol
					}, this.state.imagesCol1.map(e => i.a.createElement("img", {
						className: M.a.image,
						key: e,
						src: e
					}))), i.a.createElement("div", {
						className: M.a.imageCol
					}, this.state.imagesCol2.map(e => i.a.createElement("img", {
						className: M.a.image,
						key: e,
						src: e
					})))), i.a.createElement("div", {
						className: M.a.overflow
					}))), i.a.createElement("footer", {
						className: M.a.explanation
					}, u.fbt._("Add GIFs to your comments", null, {
						hk: "302rEX"
					})))) : null
				}
			}
			const R = Object(o.c)({
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t]
			});
			var L = Object(s.b)(R)(B),
				F = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.m.less"),
				G = r.n(F);
			const U = 1e4,
				V = 110;
			class W extends i.a.Component {
				constructor(e) {
					super(e), this.gotoNextSlide = () => {
						this.timeoutRef && clearInterval(this.timeoutRef), this.setState({
							currentSlideIdx: (this.state.currentSlideIdx + 1) % this.slides.length
						}), this.timeoutRef = window.setTimeout(this.gotoNextSlide, U)
					}, this.timeoutRef = null, this.state = {
						currentSlideIdx: 0
					}, this.slides = function(e) {
						switch (e) {
							case "t5_3oeyf":
							case "t5_socj8":
								return [C, T, L];
							default:
								return [C, L]
						}
					}(e.subredditId)
				}
				componentDidMount() {
					this.timeoutRef = window.setTimeout(this.gotoNextSlide, U)
				}
				componentWillUnmount() {
					this.timeoutRef && clearInterval(this.timeoutRef)
				}
				render() {
					const {
						className: e,
						hideSlideshow: t,
						meta: r,
						subredditId: s,
						subreddit: o
					} = this.props, {
						currentSlideIdx: l
					} = this.state;
					return o ? i.a.createElement("div", {
						className: e
					}, i.a.createElement("header", {
						className: G.a.title
					}, i.a.createElement("img", {
						className: G.a.crown,
						src: Object(d.a)(o, "Crown.gif")
					}), r.membershipAlt), !t && i.a.createElement(i.a.Fragment, null, i.a.createElement("article", {
						className: G.a.benefits
					}, i.a.createElement(a.TransitionMotion, {
						defaultStyles: [{
							key: "slide-0",
							data: {
								Component: this.slides[0],
								index: 0
							},
							style: {
								left: 0
							}
						}],
						styles: [{
							key: `slide-${l}`,
							data: {
								Component: this.slides[l],
								index: l
							},
							style: {
								left: Object(a.spring)(0)
							}
						}],
						willEnter: () => ({
							left: V
						}),
						willLeave: () => ({
							left: Object(a.spring)(-V)
						})
					}, e => i.a.createElement(n.Fragment, null, e.map(e => i.a.createElement("div", {
						className: G.a.slide,
						key: e.key,
						style: {
							left: `${e.style.left}%`
						},
						onClick: this.gotoNextSlide
					}, i.a.createElement(e.data.Component, {
						subredditId: s
					})))))), i.a.createElement("footer", {
						className: G.a.indicators
					}, this.slides.map((e, t) => i.a.createElement("div", {
						className: Object(c.a)(G.a.indicator, {
							[G.a.indicatorSelected]: t === l
						}),
						key: t,
						onClick: () => this.setState({
							currentSlideIdx: t
						})
					}))))) : null
				}
			}
			const z = Object(o.c)({
				meta: (e, {
					subredditId: t
				}) => Object(l.r)(e, t),
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t],
				username: e => {
					const t = e.user.account;
					return t && t.username || "username"
				}
			});
			t.a = Object(s.b)(z)(W)
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return o
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/flattenDeep.js"),
				i = r.n(n),
				a = r("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const s = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				o = new Set(i()(Object.keys(a.a).map(e => Object.keys(a.b).map(t => Object.keys(a.c).map(r => `${r}_${e}_${t}_badge`)))))
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				i = r.n(n),
				a = r("./src/higherOrderComponents/asTooltip.tsx"),
				s = r("./src/reddit/constants/elementIds.ts"),
				o = r("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const r = Object(a.a)(e, t);
				class n extends i.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(s.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return i.a.createElement(r, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(o.b)(n)
			}
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/lib/permalinkToOverlayLocation/index.ts");

			function i(e, t) {
				return Object(n.a)(`/web/special-membership/${e}?corr=${t}`)
			}
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, r) {
			"use strict";

			function n(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let r = 0;
				return e.placement && t.placement && (r = e.placement.localeCompare(t.placement)), 0 === r && e.position && t.position && (r = e.position - t.position), 0 === r && (r = e.title.localeCompare(t.title)), r
			}

			function i(e) {
				return [...e].sort(n)
			}
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return i
			}))
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "d", (function() {
				return m
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/models/RichTextJson/index.ts");
			const i = "giphy|",
				a = "|downsized";

			function s(e, t) {
				return i + e + (t ? a : "")
			}

			function o(e) {
				return e && 0 === e.indexOf(i)
			}

			function c(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(o)
			}

			function d(e) {
				let t = e.substring(i.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function l(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, r) => [...e, ...l(r, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function u(e) {
				return l(e, n.F).map(e => e.id)
			}

			function m(e) {
				return l(e, e => e.e === n.o).map(e => e.u)
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				i = r.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "d", (function() {
				return o
			}));
			var n, i, a = r("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(n || (n = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(i || (i = {}));
			const s = {
					[n.Loyalty]: a.a.First,
					[n.Achievement]: a.a.Second,
					[n.Cosmetic]: void 0
				},
				o = e => e === a.a.First ? n.Loyalty : e === a.a.Second ? n.Achievement : n.Cosmetic
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, i, a;
			r.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(i || (i = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(a || (a = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, r) {
			"use strict";
			var n;

			function i(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			r.d(t, "a", (function() {
					return n
				})), r.d(t, "b", (function() {
					return i
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(n || (n = {}))
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/config.ts");
			const i = (e, t) => `${n.a.assetPath}/img/memberships/paywall/${e.name.toLowerCase()}/${t}`
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, i = r("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(n || (n = {}));
			const a = {
				status: n.NotFetched
			};
			t.b = (e = a, t) => {
				switch (t.type) {
					case i.a:
						if (e.status === n.Fetched && e.data.stripe && e.data.stripe.sources) {
							const r = t.payload.cardId,
								{
									[r]: n,
									...i
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: i
									}
								}
							}
						}
						return e;
					case i.e:
						if (e.status === n.Fetched && e.data.braintree && e.data.braintree.sources) {
							const r = t.payload.sourceId,
								{
									[r]: n,
									...i
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: i
									}
								}
							}
						}
						return e;
					case i.b:
						return {
							error: t.payload.error, status: n.Failure
						};
					case i.c:
						return {
							data: t.payload, status: n.Fetched
						};
					case i.d:
						return {
							status: n.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, i = r("./src/lib/constants/specialMembership.ts"),
				a = r("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				s = r("./src/reddit/helpers/economics/sortBadges.ts"),
				o = r("./src/reddit/models/Badge/index.ts"),
				c = r("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(n || (n = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, r, n) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(i => {
						let a;
						(a = e.placement ? e.placement === o.a.First ? n[c.a.Loyalty][i] : n[c.a.Achievement][i] : l(e) ? n[c.a.Cosmetic][c.c.MyBadges][i] : n[c.a.Cosmetic][c.c.Gallery][i]) && (l(e) ? r.has(e.id) && a.unlocked.push(e) : t.has(e.id) || a.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const r = parseInt(e.price || "0"),
						n = parseInt(t.price || "0");
					return r === n ? Object(s.b)(e, t) : r - n
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === i.a).map(m).sort((e, r) => {
					const n = t[e.id],
						i = t[r.id];
					return Object(s.b)(n, i)
				})
			}

			function f(e) {
				const t = {
					[c.a.Loyalty]: {},
					[c.a.Achievement]: {},
					[c.a.Cosmetic]: {
						[c.c.Gallery]: {},
						[c.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(r => {
					const n = e.collections[r],
						i = {
							description: n.description,
							highlight: n.extra && n.extra.style && n.extra.style.color,
							id: n.id,
							locked: [],
							title: n.title,
							unlocked: []
						};
					t[c.a.Loyalty][r] = {
						...i,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][r] = {
						...i,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][r] = {
						...i,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][r] = {
						...i,
						locked: [],
						unlocked: []
					}
				});
				const r = new Set;
				e.userOwnedBadges.forEach(t => {
					const n = e.badges[t];
					n && r.add(n.type)
				});
				const n = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), r, n, t), u(Object.keys(e.products).map(t => e.products[t]), r, n, t), {
					collections: {
						[c.a.Loyalty]: p(t[c.a.Loyalty], e.collections),
						[c.a.Achievement]: p(t[c.a.Achievement], e.collections),
						[c.a.Cosmetic]: {
							[c.c.Gallery]: p(t[c.a.Cosmetic][c.c.Gallery], e.collections),
							[c.c.MyBadges]: p(t[c.a.Cosmetic][c.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = (e = d, t) => {
				switch (t.type) {
					case a.a: {
						const {
							subredditId: r
						} = t.payload, i = e[r];
						return i && i.status === n.Fetched ? {
							...e,
							[r]: {
								...i,
								data: {
									...i.data
								},
								raw: {
									...i.raw
								}
							}
						} : e
					}
					case a.h: {
						const {
							subredditId: r
						} = t.payload, i = e[r];
						return i && i.status === n.Fetched ? {
							...e,
							[r]: {
								...i,
								data: {
									...i.data,
									subscription: {
										...i.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...i.raw,
									subscription: {
										...i.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case a.i: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: {
								raw: r,
								data: f(r),
								status: n.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				i = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/economics/claims/constants.ts")),
				a = r("./src/reddit/actions/economics/me/constants.ts");
			const s = {};
			var o = (e = s, t) => {
					switch (t.type) {
						case a.a: {
							const r = t.payload.claimPoints || {},
								n = Object.keys(r).reduce((t, n) => (t[n] = {
									...e[n],
									availableClaims: r[n]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var r;
								(null === (r = e[t]) || void 0 === r ? void 0 : r.isClaiming) && (n[t] = n[t] || {
									availableClaims: []
								}, n[t].isClaiming = !0)
							}), n
						}
						case i.b:
						case i.a:
							const {
								subredditId: r
							} = t.payload;
							return {
								...e, [r]: {
									...e[r],
									isClaiming: t.type === i.b
								}
							};
						default:
							return e
					}
				},
				c = r("./src/reddit/actions/governance/constants.ts");
			const d = {};
			var l = (e = d, t) => {
				switch (t.type) {
					case c.n: {
						const {
							subredditId: r,
							wallets: n
						} = t.payload, i = Object.keys(n).reduce((t, i) => {
							return {
								...t,
								[i]: {
									...e[i] || {},
									[r]: n[i]
								}
							}
						}, {});
						return {
							...e,
							...i
						}
					}
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				claims: o,
				publicWallets: l
			})
		},
		"./src/reddit/selectors/crypto/wallet.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				i = r("./src/reddit/reducers/features/crypto/index.ts");
			Object(n.a)({
				features: {
					crypto: i.a
				}
			});
			const a = (e, t) => {
					var r;
					return t && (null === (r = e.user.wallets[t.subredditId]) || void 0 === r ? void 0 : r.latest)
				},
				s = (e, t) => {
					var r;
					return null === (r = a(e, t)) || void 0 === r ? void 0 : r.publicAddress
				},
				o = (e, t) => {
					var r, n, i, a;
					return null === (a = null === (i = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === n ? void 0 : n.publicWallets) || void 0 === i ? void 0 : i[t.userId]) || void 0 === a ? void 0 : a[t.subredditId]
				}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return h
			})), r.d(t, "o", (function() {
				return g
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "w", (function() {
				return _
			})), r.d(t, "f", (function() {
				return E
			})), r.d(t, "i", (function() {
				return S
			})), r.d(t, "q", (function() {
				return v
			})), r.d(t, "h", (function() {
				return O
			})), r.d(t, "y", (function() {
				return w
			})), r.d(t, "l", (function() {
				return P
			})), r.d(t, "n", (function() {
				return I
			})), r.d(t, "e", (function() {
				return C
			})), r.d(t, "d", (function() {
				return N
			})), r.d(t, "j", (function() {
				return x
			})), r.d(t, "p", (function() {
				return j
			})), r.d(t, "k", (function() {
				return k
			})), r.d(t, "r", (function() {
				return D
			})), r.d(t, "x", (function() {
				return B
			})), r.d(t, "t", (function() {
				return R
			})), r.d(t, "u", (function() {
				return L
			})), r.d(t, "b", (function() {
				return F
			})), r.d(t, "v", (function() {
				return G
			})), r.d(t, "s", (function() {
				return U
			})), r.d(t, "g", (function() {
				return V
			})), r.d(t, "m", (function() {
				return W
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/featureFlags/index.ts"),
				i = r("./src/reddit/helpers/economics/sortBadges.ts"),
				a = r("./src/reddit/helpers/richTextJson/index.ts"),
				s = r("./src/reddit/models/Badge/index.ts"),
				o = r("./src/reddit/models/Badge/managementPage.ts"),
				c = r("./src/reddit/models/Gold/Powerups/index.ts"),
				d = r("./src/reddit/models/Payments/index.ts"),
				l = r("./src/reddit/models/Product/index.ts"),
				u = r("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				m = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = r("./src/reddit/selectors/commentSelector.ts"),
				f = r("./src/reddit/selectors/gold/powerups.ts");
			const b = [],
				h = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === m.a.Fetched) {
						const e = r.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				g = (e, t) => {
					const r = h(e, t);
					return r && r.endsAt || null
				};
			var y;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(y || (y = {}));
			const _ = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === m.a.Fetched) {
						const r = g(e, t),
							n = Date.now();
						return r && n < r ? y.Subscribed : y.NotSubscribed
					}
					return y.DontKnow
				},
				E = (e, t) => {
					const r = e.user.account,
						n = e.economics.subredditPremium[t];
					if (r && n && n.status === m.a.Fetched) {
						const n = ((e.users.appliedBadges[r.id] || {})[t] || b).map(t => e.badges.models[t]).filter(Boolean);
						if (n) return {
							[o.a.Loyalty]: n.find(e => e.placement === s.a.First),
							[o.a.Achievement]: n.find(e => e.placement === s.a.Second),
							[o.a.Cosmetic]: n.find(e => !e.placement)
						}
					}
					return {
						[o.a.Loyalty]: void 0,
						[o.a.Achievement]: void 0,
						[o.a.Cosmetic]: void 0
					}
				};

			function S(e, t) {
				return (null == e ? void 0 : e.length) ? Object(i.a)(e.map(e => t[e]).filter(Boolean)) : b
			}
			const v = (e, t, r) => {
					var i;
					if (!n.d.spBadges(e)) return b;
					return S(null === (i = e.users.appliedBadges[r]) || void 0 === i ? void 0 : i[t], e.badges.models)
				},
				O = (e, t) => {
					const r = e.economics.subredditPremium[t.subredditId];
					if (r && r.status === m.a.Fetched) {
						const e = r.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function w(e, t) {
				const r = (e.economics.me.data.specialMemberships || {})[t];
				return !!(r && r.settings && r.settings.optOut)
			}

			function P(e, t) {
				const {
					badge: r,
					subredditId: n
				} = t, i = e.user.account ? e.user.account.id : void 0;
				if (Object(s.e)(r) && r.userId === i) return r;
				const a = e.badges.models,
					o = e.user.ownedBadges[n] || {},
					c = Object(s.e)(r) ? r.type : r.id;
				return Object.keys(o).map(e => a[e]).find(e => e && e.type === c)
			}

			function I(e, t, r, n) {
				const i = e.economics.subredditPremium[t];
				if (i && i.status === m.a.Fetched) {
					if (r === o.a.Loyalty || r === o.a.Achievement) return i.data.collections[r];
					if (r === o.a.Cosmetic && n) return i.data.collections[r][n]
				}
				return b
			}

			function C(e, t) {
				const r = I(e, t, o.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : b
			}

			function N(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === m.a.Fetched) {
					const e = r.data.collections[o.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(s.f)
				}
				return b
			}

			function x(e, t) {
				return I(e, t, o.a.Cosmetic, o.c.Gallery).some(e => e.locked.some(e => Object(s.f)(e) || !!e.price))
			}
			const j = e => {
				const t = [],
					r = e.economics.paymentSystems;
				if (r.status === u.a.Fetched && r.data.stripe && r.data.stripe.sources) {
					const e = r.data.stripe.sources;
					for (const r in e) {
						const n = e[r];
						t.push({
							display: `${n.brand} •••• ${n.last4}`,
							id: r,
							type: d.a.SavedStripe
						})
					}
				}
				if (r.status === u.a.Fetched && r.data.braintree && r.data.braintree.sources) {
					const e = r.data.braintree.sources;
					for (const r in e) {
						const n = e[r];
						"PayPal" === n.brand && t.push({
							display: "PayPal",
							id: n.id,
							type: d.a.SavedPayPal
						})
					}
				}
				return t
			};
			var A;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(A || (A = {}));
			const T = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				k = (e, t) => Object.values(e.products.models).filter(e => e.type === l.a.Membership && t && e.subredditId === t),
				M = (e, t) => {
					if (!t) return {};
					const r = T.prices;
					k(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const n = h(e, t);
					return n && n.price && n.currency && (r[n.currency] = n.price), r
				},
				D = (e, t) => {
					const r = e.subreddits.gov.meta[t || ""],
						n = r && r.extra && r.extra.nomenclature || T;
					return {
						prices: M(e, t),
						member: n.member || T.member,
						memberPlural: n.memberPlural || T.memberPlural,
						memberAlt: n.memberAlt || T.memberAlt,
						memberAltPlural: n.memberAltPlural || T.memberAltPlural,
						membership: n.membership || T.membership,
						membershipAlt: n.membershipAlt || T.membershipAlt
					}
				},
				B = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				R = (e, t) => {
					const r = e.user.ownedBadges[t] || {};
					return !!Object.keys(r).length
				},
				L = e => {
					const t = e.economics.paymentSystems;
					return t.status === u.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				F = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				G = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				U = (e, t, r) => {
					const i = "replyToPost" !== r && Object(p.a)(e, {
						commentId: r
					});
					if (!!i && Object(a.a)(i)) return !0;
					if (t && Object(f.o)(e, {
							subredditId: t,
							benefit: c.a.CommentsWithGifs
						})) return !0;
					const s = n.d.spGiphy(e),
						o = G(e, t);
					return s && o
				},
				V = (e, t, r) => {
					if (t) {
						const n = e.economics.banners.dismissedBanners[t];
						if (n && n.data) return !!n.data[r]
					}
				},
				W = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/products.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return a
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/models/Product/index.ts");
			const i = (e, t) => {
					const r = e.products.models[t];
					if (r && r.type === n.a.Badge) return r
				},
				a = (e, {
					productId: t
				}) => {
					const r = e.products.models[t];
					if (r) {
						const n = r.subredditId,
							i = Object.keys(e.user.ownedBadges[n] || {}),
							a = e.badges.models,
							s = Date.now();
						let o = !1;
						return i.forEach(e => {
							const r = a[e];
							r && r.type === t && r.endsAt > s && (o = !0)
						}), o
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeHovercardTooltip.ab93e2c2e54d534f4f88.js.map