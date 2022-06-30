// https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeHovercardTooltip.8db266b9be3637c83e1a.js
// Retrieved at 6/30/2022, 12:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditPremiumBadgeHovercardTooltip"], {
		"./node_modules/lodash/_arrayShuffle.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_copyArray.js"),
				s = r("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e) {
				return s(n(e))
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var r = Math.floor,
				n = Math.random;
			e.exports = function(e, t) {
				return e + r(n() * (t - e + 1))
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_shuffleSelf.js"),
				s = r("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return n(s(e))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var r = -1,
					s = e.length,
					i = s - 1;
				for (t = void 0 === t ? s : t; ++r < t;) {
					var o = n(r, i),
						a = e[o];
					e[o] = e[r], e[r] = a
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/flattenDeep.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseFlatten.js"),
				s = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? n(e, s) : []
			}
		},
		"./node_modules/lodash/shuffle.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_arrayShuffle.js"),
				s = r("./node_modules/lodash/_baseShuffle.js"),
				i = r("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (i(e) ? n : s)(e)
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
				s = function() {
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

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var o = i(r("./node_modules/react-motion/lib/mapToZero.js")),
				a = i(r("./node_modules/react-motion/lib/stripStyle.js")),
				d = i(r("./node_modules/react-motion/lib/stepper.js")),
				c = i(r("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				l = i(r("./node_modules/raf/index.js")),
				u = i(r("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				m = i(r("./node_modules/react/index.js")),
				f = i(r("./node_modules/react-motion/node_modules/prop-types/index.js")),
				p = 1e3 / 60,
				b = function(e) {
					function t(r) {
						var s = this;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), e.call(this, r), this.wasAnimating = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyle = null, this.clearUnreadPropStyle = function(e) {
							var t = !1,
								r = s.state,
								i = r.currentStyle,
								o = r.currentVelocity,
								a = r.lastIdealStyle,
								d = r.lastIdealVelocity;
							for (var c in e)
								if (Object.prototype.hasOwnProperty.call(e, c)) {
									var l = e[c];
									"number" == typeof l && (t || (t = !0, i = n({}, i), o = n({}, o), a = n({}, a), d = n({}, d)), i[c] = l, o[c] = 0, a[c] = l, d[c] = 0)
								} t && s.setState({
								currentStyle: i,
								currentVelocity: o,
								lastIdealStyle: a,
								lastIdealVelocity: d
							})
						}, this.startAnimationIfNecessary = function() {
							s.animationID = l.default((function(e) {
								var t = s.props.style;
								if (u.default(s.state.currentStyle, t, s.state.currentVelocity)) return s.wasAnimating && s.props.onRest && s.props.onRest(), s.animationID = null, s.wasAnimating = !1, void(s.accumulatedTime = 0);
								s.wasAnimating = !0;
								var r = e || c.default(),
									n = r - s.prevTime;
								if (s.prevTime = r, s.accumulatedTime = s.accumulatedTime + n, s.accumulatedTime > 10 * p && (s.accumulatedTime = 0), 0 === s.accumulatedTime) return s.animationID = null, void s.startAnimationIfNecessary();
								var i = (s.accumulatedTime - Math.floor(s.accumulatedTime / p) * p) / p,
									o = Math.floor(s.accumulatedTime / p),
									a = {},
									l = {},
									m = {},
									f = {};
								for (var b in t)
									if (Object.prototype.hasOwnProperty.call(t, b)) {
										var h = t[b];
										if ("number" == typeof h) m[b] = h, f[b] = 0, a[b] = h, l[b] = 0;
										else {
											for (var y = s.state.lastIdealStyle[b], g = s.state.lastIdealVelocity[b], _ = 0; _ < o; _++) {
												var v = d.default(p / 1e3, y, g, h.val, h.stiffness, h.damping, h.precision);
												y = v[0], g = v[1]
											}
											var E = d.default(p / 1e3, y, g, h.val, h.stiffness, h.damping, h.precision),
												S = E[0],
												O = E[1];
											m[b] = y + (S - y) * i, f[b] = g + (O - g) * i, a[b] = y, l[b] = g
										}
									} s.animationID = null, s.accumulatedTime -= o * p, s.setState({
									currentStyle: m,
									currentVelocity: f,
									lastIdealStyle: a,
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
							defaultStyle: f.default.objectOf(f.default.number),
							style: f.default.objectOf(f.default.oneOfType([f.default.number, f.default.object])).isRequired,
							children: f.default.func.isRequired,
							onRest: f.default.func
						},
						enumerable: !0
					}]), t.prototype.defaultState = function() {
						var e = this.props,
							t = e.defaultStyle,
							r = e.style,
							n = t || a.default(r),
							s = o.default(n);
						return {
							currentStyle: n,
							currentVelocity: s,
							lastIdealStyle: n,
							lastIdealVelocity: s
						}
					}, t.prototype.componentDidMount = function() {
						this.prevTime = c.default(), this.startAnimationIfNecessary()
					}, t.prototype.componentWillReceiveProps = function(e) {
						null != this.unreadPropStyle && this.clearUnreadPropStyle(this.unreadPropStyle), this.unreadPropStyle = e.style, null == this.animationID && (this.prevTime = c.default(), this.startAnimationIfNecessary())
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
				s = function() {
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

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var o = i(r("./node_modules/react-motion/lib/mapToZero.js")),
				a = i(r("./node_modules/react-motion/lib/stripStyle.js")),
				d = i(r("./node_modules/react-motion/lib/stepper.js")),
				c = i(r("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				l = i(r("./node_modules/raf/index.js")),
				u = i(r("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				m = i(r("./node_modules/react/index.js")),
				f = i(r("./node_modules/react-motion/node_modules/prop-types/index.js")),
				p = 1e3 / 60;
			var b = function(e) {
				function t(r) {
					var s = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, r), this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = s.state, r = t.currentStyles, i = t.currentVelocities, o = t.lastIdealStyles, a = t.lastIdealVelocities, d = !1, c = 0; c < e.length; c++) {
							var l = e[c],
								u = !1;
							for (var m in l)
								if (Object.prototype.hasOwnProperty.call(l, m)) {
									var f = l[m];
									"number" == typeof f && (u || (u = !0, d = !0, r[c] = n({}, r[c]), i[c] = n({}, i[c]), o[c] = n({}, o[c]), a[c] = n({}, a[c])), r[c][m] = f, i[c][m] = 0, o[c][m] = f, a[c][m] = 0)
								}
						}
						d && s.setState({
							currentStyles: r,
							currentVelocities: i,
							lastIdealStyles: o,
							lastIdealVelocities: a
						})
					}, this.startAnimationIfNecessary = function() {
						s.animationID = l.default((function(e) {
							var t = s.props.styles(s.state.lastIdealStyles);
							if (function(e, t, r) {
									for (var n = 0; n < e.length; n++)
										if (!u.default(e[n], t[n], r[n])) return !1;
									return !0
								}(s.state.currentStyles, t, s.state.currentVelocities)) return s.animationID = null, void(s.accumulatedTime = 0);
							var r = e || c.default(),
								n = r - s.prevTime;
							if (s.prevTime = r, s.accumulatedTime = s.accumulatedTime + n, s.accumulatedTime > 10 * p && (s.accumulatedTime = 0), 0 === s.accumulatedTime) return s.animationID = null, void s.startAnimationIfNecessary();
							for (var i = (s.accumulatedTime - Math.floor(s.accumulatedTime / p) * p) / p, o = Math.floor(s.accumulatedTime / p), a = [], l = [], m = [], f = [], b = 0; b < t.length; b++) {
								var h = t[b],
									y = {},
									g = {},
									_ = {},
									v = {};
								for (var E in h)
									if (Object.prototype.hasOwnProperty.call(h, E)) {
										var S = h[E];
										if ("number" == typeof S) y[E] = S, g[E] = 0, _[E] = S, v[E] = 0;
										else {
											for (var O = s.state.lastIdealStyles[b][E], P = s.state.lastIdealVelocities[b][E], I = 0; I < o; I++) {
												var w = d.default(p / 1e3, O, P, S.val, S.stiffness, S.damping, S.precision);
												O = w[0], P = w[1]
											}
											var N = d.default(p / 1e3, O, P, S.val, S.stiffness, S.damping, S.precision),
												C = N[0],
												j = N[1];
											y[E] = O + (C - O) * i, g[E] = P + (j - P) * i, _[E] = O, v[E] = P
										}
									} m[b] = y, f[b] = g, a[b] = _, l[b] = v
							}
							s.animationID = null, s.accumulatedTime -= o * p, s.setState({
								currentStyles: m,
								currentVelocities: f,
								lastIdealStyles: a,
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
						defaultStyles: f.default.arrayOf(f.default.objectOf(f.default.number)),
						styles: f.default.func.isRequired,
						children: f.default.func.isRequired
					},
					enumerable: !0
				}]), t.prototype.defaultState = function() {
					var e = this.props,
						t = e.defaultStyles,
						r = e.styles,
						n = t || r().map(a.default),
						s = n.map((function(e) {
							return o.default(e)
						}));
					return {
						currentStyles: n,
						currentVelocities: s,
						lastIdealStyles: n,
						lastIdealVelocities: s
					}
				}, t.prototype.componentDidMount = function() {
					this.prevTime = c.default(), this.startAnimationIfNecessary()
				}, t.prototype.componentWillReceiveProps = function(e) {
					null != this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles), this.unreadPropStyles = e.styles(this.state.lastIdealStyles), null == this.animationID && (this.prevTime = c.default(), this.startAnimationIfNecessary())
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
				s = function() {
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

			function i(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var o = i(r("./node_modules/react-motion/lib/mapToZero.js")),
				a = i(r("./node_modules/react-motion/lib/stripStyle.js")),
				d = i(r("./node_modules/react-motion/lib/stepper.js")),
				c = i(r("./node_modules/react-motion/lib/mergeDiff.js")),
				l = i(r("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				u = i(r("./node_modules/raf/index.js")),
				m = i(r("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				f = i(r("./node_modules/react/index.js")),
				p = i(r("./node_modules/react-motion/node_modules/prop-types/index.js")),
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
					for (var s = 0; s < n.length; s++)
						if (n[s].key === e.key) return {
							key: n[s].key,
							data: n[s].data,
							style: r[t]
						};
					return {
						key: e.key,
						data: e.data,
						style: r[t]
					}
				}))
			}

			function y(e, t, r, n, s, i, a, d, l) {
				for (var u = c.default(n, s, (function(e, n) {
						var s = t(n);
						return null == s ? (r({
							key: n.key,
							data: n.data
						}), null) : m.default(i[e], s, a[e]) ? (r({
							key: n.key,
							data: n.data
						}), null) : {
							key: n.key,
							data: n.data,
							style: s
						}
					})), f = [], p = [], b = [], h = [], y = 0; y < u.length; y++) {
					for (var g = u[y], _ = null, v = 0; v < n.length; v++)
						if (n[v].key === g.key) {
							_ = v;
							break
						} if (null == _) {
						var E = e(g);
						f[y] = E, b[y] = E;
						var S = o.default(g.style);
						p[y] = S, h[y] = S
					} else f[y] = i[_], b[y] = d[_], p[y] = a[_], h[y] = l[_]
				}
				return [u, f, p, b, h]
			}
			var g = function(e) {
				function t(r) {
					var s = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, r), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = y(s.props.willEnter, s.props.willLeave, s.props.didLeave, s.state.mergedPropsStyles, e, s.state.currentStyles, s.state.currentVelocities, s.state.lastIdealStyles, s.state.lastIdealVelocities), r = t[0], i = t[1], o = t[2], a = t[3], d = t[4], c = 0; c < e.length; c++) {
							var l = e[c].style,
								u = !1;
							for (var m in l)
								if (Object.prototype.hasOwnProperty.call(l, m)) {
									var f = l[m];
									"number" == typeof f && (u || (u = !0, i[c] = n({}, i[c]), o[c] = n({}, o[c]), a[c] = n({}, a[c]), d[c] = n({}, d[c]), r[c] = {
										key: r[c].key,
										data: r[c].data,
										style: n({}, r[c].style)
									}), i[c][m] = f, o[c][m] = 0, a[c][m] = f, d[c][m] = 0, r[c].style[m] = f)
								}
						}
						s.setState({
							currentStyles: i,
							currentVelocities: o,
							mergedPropsStyles: r,
							lastIdealStyles: a,
							lastIdealVelocities: d
						})
					}, this.startAnimationIfNecessary = function() {
						s.unmounting || (s.animationID = u.default((function(e) {
							if (!s.unmounting) {
								var t = s.props.styles,
									r = "function" == typeof t ? t(h(s.state.mergedPropsStyles, s.unreadPropStyles, s.state.lastIdealStyles)) : t;
								if (function(e, t, r, n) {
										if (n.length !== t.length) return !1;
										for (var s = 0; s < n.length; s++)
											if (n[s].key !== t[s].key) return !1;
										for (s = 0; s < n.length; s++)
											if (!m.default(e[s], t[s].style, r[s])) return !1;
										return !0
									}(s.state.currentStyles, r, s.state.currentVelocities, s.state.mergedPropsStyles)) return s.animationID = null, void(s.accumulatedTime = 0);
								var n = e || l.default(),
									i = n - s.prevTime;
								if (s.prevTime = n, s.accumulatedTime = s.accumulatedTime + i, s.accumulatedTime > 10 * b && (s.accumulatedTime = 0), 0 === s.accumulatedTime) return s.animationID = null, void s.startAnimationIfNecessary();
								for (var o = (s.accumulatedTime - Math.floor(s.accumulatedTime / b) * b) / b, a = Math.floor(s.accumulatedTime / b), c = y(s.props.willEnter, s.props.willLeave, s.props.didLeave, s.state.mergedPropsStyles, r, s.state.currentStyles, s.state.currentVelocities, s.state.lastIdealStyles, s.state.lastIdealVelocities), u = c[0], f = c[1], p = c[2], g = c[3], _ = c[4], v = 0; v < u.length; v++) {
									var E = u[v].style,
										S = {},
										O = {},
										P = {},
										I = {};
									for (var w in E)
										if (Object.prototype.hasOwnProperty.call(E, w)) {
											var N = E[w];
											if ("number" == typeof N) S[w] = N, O[w] = 0, P[w] = N, I[w] = 0;
											else {
												for (var C = g[v][w], j = _[v][w], x = 0; x < a; x++) {
													var T = d.default(b / 1e3, C, j, N.val, N.stiffness, N.damping, N.precision);
													C = T[0], j = T[1]
												}
												var A = d.default(b / 1e3, C, j, N.val, N.stiffness, N.damping, N.precision),
													M = A[0],
													k = A[1];
												S[w] = C + (M - C) * o, O[w] = j + (k - j) * o, P[w] = C, I[w] = j
											}
										} g[v] = P, _[v] = I, f[v] = S, p[v] = O
								}
								s.animationID = null, s.accumulatedTime -= a * b, s.setState({
									currentStyles: f,
									currentVelocities: p,
									lastIdealStyles: g,
									lastIdealVelocities: _,
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
						defaultStyles: p.default.arrayOf(p.default.shape({
							key: p.default.string.isRequired,
							data: p.default.any,
							style: p.default.objectOf(p.default.number).isRequired
						})),
						styles: p.default.oneOfType([p.default.func, p.default.arrayOf(p.default.shape({
							key: p.default.string.isRequired,
							data: p.default.any,
							style: p.default.objectOf(p.default.oneOfType([p.default.number, p.default.object])).isRequired
						}))]).isRequired,
						children: p.default.func.isRequired,
						willEnter: p.default.func,
						willLeave: p.default.func,
						didLeave: p.default.func
					},
					enumerable: !0
				}, {
					key: "defaultProps",
					value: {
						willEnter: function(e) {
							return a.default(e.style)
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
						s = e.willLeave,
						i = e.didLeave,
						d = "function" == typeof r ? r(t) : r,
						c = void 0;
					c = null == t ? d : t.map((function(e) {
						for (var t = 0; t < d.length; t++)
							if (d[t].key === e.key) return d[t];
						return e
					}));
					var l = null == t ? d.map((function(e) {
							return a.default(e.style)
						})) : t.map((function(e) {
							return a.default(e.style)
						})),
						u = null == t ? d.map((function(e) {
							return o.default(e.style)
						})) : t.map((function(e) {
							return o.default(e.style)
						})),
						m = y(n, s, i, c, d, l, u, l, u),
						f = m[0];
					return {
						currentStyles: m[1],
						currentVelocities: m[2],
						lastIdealStyles: m[3],
						lastIdealVelocities: m[4],
						mergedPropsStyles: f
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
					return t && f.default.Children.only(t)
				}, t
			}(f.default.Component);
			t.default = g, e.exports = t.default
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
				for (var n = {}, s = 0; s < e.length; s++) n[e[s].key] = s;
				var i = {};
				for (s = 0; s < t.length; s++) i[t[s].key] = s;
				var o = [];
				for (s = 0; s < t.length; s++) o[s] = t[s];
				for (s = 0; s < e.length; s++)
					if (!Object.prototype.hasOwnProperty.call(i, e[s].key)) {
						var a = r(s, e[s]);
						null != a && o.push(a)
					} return o.sort((function(e, r) {
					var s = i[e.key],
						o = i[r.key],
						a = n[e.key],
						d = n[r.key];
					if (null != s && null != o) return i[e.key] - i[r.key];
					if (null != a && null != d) return n[e.key] - n[r.key];
					if (null != s) {
						for (var c = 0; c < t.length; c++) {
							var l = t[c].key;
							if (Object.prototype.hasOwnProperty.call(n, l)) {
								if (s < i[l] && d > n[l]) return -1;
								if (s > i[l] && d < n[l]) return 1
							}
						}
						return 1
					}
					for (c = 0; c < t.length; c++) {
						l = t[c].key;
						if (Object.prototype.hasOwnProperty.call(n, l)) {
							if (o < i[l] && a > n[l]) return 1;
							if (o > i[l] && a < n[l]) return -1
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
			var s = r("./node_modules/react-motion/lib/Motion.js");
			t.Motion = n(s);
			var i = r("./node_modules/react-motion/lib/StaggeredMotion.js");
			t.StaggeredMotion = n(i);
			var o = r("./node_modules/react-motion/lib/TransitionMotion.js");
			t.TransitionMotion = n(o);
			var a = r("./node_modules/react-motion/lib/spring.js");
			t.spring = n(a);
			var d = r("./node_modules/react-motion/lib/presets.js");
			t.presets = n(d);
			var c = r("./node_modules/react-motion/lib/stripStyle.js");
			t.stripStyle = n(c);
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
						var s = "number" == typeof t[n] ? t[n] : t[n].val;
						if (e[n] !== s) return !1
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
				return n({}, a, t, {
					val: e
				})
			};
			var s, i = r("./node_modules/react-motion/lib/presets.js"),
				o = (s = i) && s.__esModule ? s : {
					default: s
				},
				a = n({}, o.default.noWobble, {
					precision: .01
				});
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stepper.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, r, s, i, o, a) {
				var d = r + (-i * (t - s) + -o * r) * e,
					c = t + d * e;
				if (Math.abs(d) < a && Math.abs(c - s) < a) return n[0] = s, n[1] = 0, n;
				return n[0] = c, n[1] = d, n
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
					var r, n, s;
					"undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
						return performance.now()
					} : null != t && t.hrtime ? (e.exports = function() {
						return (r() - s) / 1e6
					}, n = t.hrtime, s = (r = function() {
						var e;
						return 1e9 * (e = n())[0] + e[1]
					})()) : Date.now ? (e.exports = function() {
						return Date.now() - s
					}, s = Date.now()) : (e.exports = function() {
						return (new Date).getTime() - s
					}, s = (new Date).getTime())
				}).call(this)
			}).call(this, r("./node_modules/process/browser.js"))
		},
		"./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}

			function i() {}
			i.resetWarningCache = s, e.exports = function() {
				function e(e, t, r, s, i, o) {
					if (o !== n) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
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
					checkPropTypes: i,
					resetWarningCache: s
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
				return s
			}));
			const n = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				s = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			}));
			const n = "ECONOMICS__ME__ME_DATA_SUCCESS",
				s = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				i = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "e", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return a
			}));
			const n = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "i", (function() {
				return u
			}));
			const n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "i", (function() {
				return u
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "k", (function() {
				return f
			})), r.d(t, "l", (function() {
				return p
			})), r.d(t, "m", (function() {
				return b
			})), r.d(t, "n", (function() {
				return h
			})), r.d(t, "o", (function() {
				return y
			})), r.d(t, "p", (function() {
				return g
			})), r.d(t, "q", (function() {
				return _
			})), r.d(t, "r", (function() {
				return v
			})), r.d(t, "s", (function() {
				return E
			})), r.d(t, "t", (function() {
				return S
			})), r.d(t, "u", (function() {
				return O
			})), r.d(t, "v", (function() {
				return P
			})), r.d(t, "w", (function() {
				return I
			})), r.d(t, "x", (function() {
				return w
			}));
			const n = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				s = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				i = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				o = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				a = "POLL_VOTE_SUCCESS",
				d = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				c = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				l = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				u = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				f = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				p = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				b = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				h = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				y = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				g = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				_ = "GOVERNANCE__TRANSFER_FAILURE",
				v = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				E = "GOVERNANCE__TRANSFER_PENDING",
				S = "GOVERNANCE__TRANSFER_SUCCESS",
				O = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				P = "GOVERNANCE__WALLETS_FETCH_PENDING",
				I = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				w = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
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
				s = r.n(n),
				i = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = r("./src/reddit/selectors/tooltip.ts"),
				l = r("./node_modules/uuid/v4.js"),
				u = r.n(l),
				m = r("./src/lib/classNames/index.ts"),
				f = r("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx"),
				p = r("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				b = r("./src/reddit/components/TrackingHelper/index.tsx"),
				h = r("./src/reddit/featureFlags/index.ts"),
				y = r("./src/reddit/models/Badge/index.ts"),
				g = r("./src/reddit/models/Badge/managementPage.ts"),
				_ = r("./src/reddit/selectors/economics.ts"),
				v = r("./src/reddit/selectors/products.ts"),
				E = r("./src/reddit/selectors/telemetry.ts"),
				S = r("./node_modules/fbt/lib/FbtPublic.js"),
				O = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				P = r("./src/reddit/actions/tooltip.ts"),
				I = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.tsx"),
				w = r("./src/reddit/controls/Button/index.tsx"),
				N = r("./src/reddit/helpers/economics/membershipPage.ts"),
				C = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/EducationFooter/index.m.less"),
				j = r.n(C);
			const x = Object(o.c)({
				subreddit: (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.subreddits.models[r]
				}
			});
			var T = Object(b.c)(Object(i.b)(x, e => ({
					onOpen: () => e(Object(P.i)())
				}))((function(e) {
					const t = e.subreddit ? e.subreddit.name : "",
						r = e.correlationId || u()(),
						n = t => {
							t.stopPropagation(), e.sendEvent(e => ({
								correlationId: r,
								source: "meta",
								action: "click",
								noun: "subscription_badge_hover_open_learn_more",
								...E.n(e),
								subreddit: E.hb(e)
							})), e.onOpen()
						};
					return s.a.createElement("footer", {
						className: Object(m.a)(e.className, j.a.container)
					}, s.a.createElement(O.a, {
						className: j.a.wrapper,
						to: Object(N.a)(t, r),
						onClick: n
					}, s.a.createElement(I.a, {
						className: j.a.benefits,
						subredditId: e.subredditId
					})), s.a.createElement(w.n, {
						className: j.a.link,
						disabled: !e.subreddit,
						to: Object(N.a)(t, r),
						onClick: n
					}, S.fbt._("Learn More", null, {
						hk: "4FGSHD"
					})))
				}))),
				A = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				M = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/GalleryFooter/index.m.less"),
				k = r.n(M);
			var D = Object(b.c)(Object(i.b)(void 0, (e, t) => {
					let {
						badge: r,
						subredditId: n
					} = t;
					return {
						onOpen: () => {
							e(Object(P.i)()), e(Object(A.c)({
								badge: r,
								subredditId: n,
								initialView: g.c.Gallery
							}))
						}
					}
				})((function(e) {
					const t = e.correlationId || u()();
					return s.a.createElement("footer", {
						className: Object(m.a)(e.className, k.a.container)
					}, s.a.createElement("div", null), s.a.createElement(w.l, {
						onClick: r => {
							r.stopPropagation(), e.sendEvent(e => ({
								correlationId: t,
								source: "meta",
								action: "click",
								noun: "subscription_badge_hover_open_gallery",
								...E.n(e),
								subreddit: E.hb(e)
							})), e.onOpen()
						}
					}, S.fbt._("Get", null, {
						hk: "4g4sIK"
					})))
				}))),
				R = r("./src/reddit/actions/chat/toggle.ts"),
				B = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/LFGFooter/index.m.less"),
				L = r.n(B);
			var F = Object(b.c)(Object(i.b)(void 0, (e, t) => {
					let {
						userId: r
					} = t;
					return {
						onStartChat: () => e(Object(R.b)(r))
					}
				})((function(e) {
					const t = e.correlationId || u()();
					return s.a.createElement("footer", {
						className: Object(m.a)(L.a.container, e.className)
					}, s.a.createElement("div", null), s.a.createElement(w.l, {
						onClick: r => {
							r.stopPropagation(), e.sendEvent(e => ({
								correlationId: t,
								source: "meta",
								action: "click",
								noun: "lfg_badge_start_chat",
								...E.n(e),
								subreddit: E.hb(e)
							})), e.onStartChat()
						}
					}, S.fbt._("start chat", null, {
						hk: "eNK8L"
					})))
				}))),
				G = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/ManagementFooter/index.m.less"),
				U = r.n(G);
			var V, W = Object(i.b)(void 0, (e, t) => {
					let {
						badge: r,
						subredditId: n
					} = t;
					return {
						onOpen: () => {
							e(Object(P.i)()), e(Object(A.c)({
								badge: r,
								subredditId: n,
								initialView: g.c.MyBadges
							}))
						}
					}
				})((function(e) {
					return s.a.createElement("footer", {
						className: Object(m.a)(e.className, U.a.container)
					}, s.a.createElement("div", null), s.a.createElement(w.l, {
						onClick: t => {
							t.stopPropagation(), e.onOpen()
						}
					}, S.fbt._("View", null, {
						hk: "3ZVmGs"
					})))
				})),
				z = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/index.m.less"),
				H = r.n(z);
			! function(e) {
				e[e.Education = 0] = "Education", e[e.Gallery = 1] = "Gallery", e[e.LFG = 2] = "LFG", e[e.Management = 3] = "Management"
			}(V || (V = {}));
			class Z extends s.a.Component {
				constructor(e) {
					super(e), this.correlationId = e.correlationId || u()()
				}
				componentDidMount() {
					this.props.sendEvent(e => ({
						source: "meta",
						action: "open",
						noun: "badges_hover_card",
						correlationId: this.correlationId,
						...E.n(e),
						subreddit: E.hb(e)
					}))
				}
				render() {
					const e = function(e) {
						const t = !!e.badge.placement || Object(y.f)(e.badge);
						return e.userId && (p.c.has(e.badge.id) || p.c.has(e.badge.type)) ? V.LFG : t && e.userIsPremiumSubscriber === _.a.Subscribed || !t && e.ownedBadge ? V.Management : t && e.userIsPremiumSubscriber !== _.a.Subscribed && e.premiumSubscriptionsEnabled ? V.Education : !t && !e.ownedBadge && e.relevantProduct && e.relevantProduct.price ? V.Gallery : void 0
					}(this.props);
					return s.a.createElement("div", {
						className: Object(m.a)(this.props.className, H.a.container),
						style: this.props.style
					}, s.a.createElement(f.a, {
						badge: this.props.badge,
						className: H.a.content,
						subredditId: this.props.subredditId,
						type: Object(g.d)(this.props.badge.placement)
					}), e === V.Management && s.a.createElement(W, {
						className: H.a.footer,
						badge: this.props.badge,
						subredditId: this.props.subredditId
					}), e === V.Education && s.a.createElement(T, {
						className: H.a.footerEducation,
						correlationId: this.correlationId,
						subredditId: this.props.subredditId
					}), e === V.Gallery && s.a.createElement(D, {
						className: H.a.footer,
						correlationId: this.correlationId,
						badge: this.props.badge,
						subredditId: this.props.subredditId
					}), e === V.LFG && s.a.createElement(F, {
						className: H.a.footer,
						correlationId: this.correlationId,
						userId: this.props.userId
					}))
				}
			}
			const q = Object(o.c)({
				ownedBadge: _.l,
				premiumSubscriptionsEnabled: h.d.spSpecialMemberships,
				relevantProduct: (e, t) => {
					let {
						badge: r
					} = t;
					if (!Object(y.e)(r)) return r;
					const n = r.type;
					return Object(v.a)(e, n)
				},
				userIsPremiumSubscriber: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(_.x)(e, r)
				}
			});
			var X = Object(b.c)(Object(i.b)(q)(Z));
			const Y = Object(d.a)(X, [a.a.Click, a.a.Keydown]);
			const K = Object(o.c)({
				isOpen: (e, t) => {
					let {
						tooltipId: r
					} = t;
					return Object(c.b)(r)(e)
				}
			});
			t.default = Object(i.b)(K)((function(e) {
				return e.isOpen ? s.a.createElement(Y, e) : null
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
				s = r("./node_modules/react/index.js"),
				i = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				c = r("./src/reddit/models/Badge/index.ts"),
				l = r("./src/reddit/models/Badge/managementPage.ts"),
				u = r("./src/reddit/selectors/crypto/wallet.ts"),
				m = r("./src/reddit/selectors/economics.ts"),
				f = r("./node_modules/reselect/es/index.js"),
				p = r("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less"),
				b = r.n(p);
			const h = Object(f.c)({
				collection: (e, t) => {
					let {
						badge: r,
						subredditId: n
					} = t;
					if (r.collections) {
						const t = Object.keys(r.collections);
						if (t.length) {
							const r = t[0];
							return Object(m.h)(e, {
								collectionId: r,
								subredditId: n
							})
						}
					}
				},
				progress: (e, t) => {
					let {
						badge: r,
						subredditId: n,
						type: s
					} = t;
					if (!Object(c.e)(r) && s === l.a.Achievement && d.b[r.id]) {
						const t = Object(u.a)(e, {
							subredditId: n
						});
						if (t) return {
							complete: parseInt(t.amount),
							total: d.b[r.id]
						}
					}
				}
			});
			t.a = Object(o.b)(h)((function(e) {
				const t = e.type === l.a.Loyalty ? n.fbt._("Loyalty Badge", null, {
						hk: "3C1yVX"
					}) : e.type === l.a.Achievement ? n.fbt._("Achievement Badge", null, {
						hk: "3ZCLHl"
					}) : n.fbt._("Style Badge", null, {
						hk: "1heMgq"
					}),
					r = e.collection ? e.collection.title : t,
					{
						url: s,
						url2x: o
					} = Object(c.d)(60, 60, e.badge),
					d = e.progress;
				return i.a.createElement("article", {
					className: Object(a.a)(e.className, {
						[b.a.fullWidth]: !!e.fullWidth
					})
				}, i.a.createElement("div", {
					className: b.a.wrapper
				}, i.a.createElement("img", {
					className: b.a.image,
					src: o,
					srcSet: `${s}, ${o} 2x`
				}), i.a.createElement("div", {
					className: b.a.info
				}, i.a.createElement("div", {
					className: b.a.collectionTitle,
					style: {
						color: e.collection && e.collection.highlight
					},
					title: r
				}, r), i.a.createElement("header", {
					className: b.a.title
				}, e.badge.title), d && d.complete < d.total && i.a.createElement("div", {
					className: b.a.progressContainer
				}, i.a.createElement("div", {
					className: b.a.progressBar
				}, i.a.createElement("div", {
					className: b.a.progressThumb,
					style: {
						width: `${d.complete/d.total*100}%`
					}
				})), i.a.createElement("div", {
					className: b.a.progressAmount
				}, function(e) {
					return `${`${Math.floor(e.complete/1e3)}k`}/${`${Math.floor(e.total/1e3)}k`}`
				}(d))), i.a.createElement("div", {
					className: b.a.description
				}, e.badge.description))), e.children)
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, r) {
			"use strict";
			var n, s, i, o;

			function a(e) {
				const {
					platform: t,
					playerType: r,
					region: n,
					style: s
				} = e;
				return `https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_${s}/${n}_${t}_${r}_${s}.svg`
			}
			r.d(t, "a", (function() {
					return n
				})), r.d(t, "b", (function() {
					return s
				})), r.d(t, "c", (function() {
					return i
				})), r.d(t, "d", (function() {
					return a
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(n || (n = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(s || (s = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(i || (i = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(o || (o = {}))
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
				rowBadge: "_3qzww-Y_LhfpPS8LxLZLqk",
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
				s = r.n(n),
				i = r("./node_modules/react-motion/lib/react-motion.js"),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				l = r("./src/reddit/selectors/economics.ts"),
				u = r("./node_modules/fbt/lib/FbtPublic.js"),
				m = r("./node_modules/lodash/shuffle.js"),
				f = r.n(m),
				p = r("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				b = r("./src/reddit/models/Badge/index.ts"),
				h = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Badges/index.m.less"),
				y = r.n(h);
			const g = 10,
				_ = 500,
				v = 30,
				E = 132;
			class S extends s.a.Component {
				constructor(e) {
					super(e), this.badgesForLine = [], this.setRowRef = e => {
						e && (this.rowRef = e)
					}, this.state = {
						currentlySelected: null
					}, this.intervalRef = null, this.rowRef = null, this.chooseBadgesForLines()
				}
				componentDidMount() {
					this.intervalRef = window.setInterval(() => {
						if (!this.rowRef) return;
						const e = window.getComputedStyle(this.rowRef).transform,
							t = parseFloat(null == e ? void 0 : e.split(",")[4]);
						if (isNaN(t)) return;
						const r = Math.round((E - t) / v / 2),
							n = this.badgesForLine[1][r % this.badgesForLine[1].length];
						this.setState({
							currentlySelected: n
						})
					}, _)
				}
				componentDidUpdate() {
					this.chooseBadgesForLines()
				}
				componentWillUnmount() {
					this.intervalRef && clearInterval(this.intervalRef)
				}
				chooseBadgesForLines() {
					var e;
					if (this.badgesForLine.length || !(null === (e = this.props.styleBadges) || void 0 === e ? void 0 : e.length)) return;
					this.badgesForLine = [];
					let t = [];
					for (let r = 0; r < 3; r++) {
						t.length < (r + 2) * g && (t = f()(this.props.styleBadges));
						const e = [];
						for (let n = 0; n < g; n++) e.push(t[(r * g + n) % t.length]);
						this.badgesForLine.push(e)
					}
				}
				render() {
					const {
						className: e,
						subreddit: t,
						username: r
					} = this.props, {
						currentlySelected: n
					} = this.state;
					if (!t) return null;
					const i = this.badgesForLine;
					return s.a.createElement("article", {
						className: Object(d.a)(y.a.container, e)
					}, s.a.createElement("div", {
						className: y.a.background
					}), s.a.createElement("div", {
						className: y.a.content
					}, s.a.createElement("header", {
						className: y.a.title
					}, u.fbt._("badges", null, {
						hk: "4bW4l"
					})), i.length && s.a.createElement("div", {
						className: y.a.rows
					}, s.a.createElement(O, {
						badges: i[0],
						style: {
							animationDuration: "20s"
						}
					}), s.a.createElement(O, {
						badges: i[1],
						innerRef: this.setRowRef,
						style: {
							animationDirection: "reverse",
							animationDuration: "25s"
						}
					}), s.a.createElement(O, {
						badges: i[2],
						style: {
							animationDuration: "30s"
						}
					})), s.a.createElement("div", {
						className: y.a.username,
						style: {
							color: null == n ? void 0 : n.color
						}
					}, n && s.a.createElement("img", {
						className: y.a.badgePreview,
						src: n.url
					}), r), s.a.createElement("footer", {
						className: y.a.explanation
					}, u.fbt._("Style your username with a badge and color", null, {
						hk: "2bRpdH"
					})), s.a.createElement("div", {
						className: y.a.selection
					}, s.a.createElement(p.a, {
						className: y.a.check
					}))))
				}
			}
			const O = e => {
					let {
						badges: t,
						innerRef: r,
						style: n
					} = e;
					return s.a.createElement("div", {
						className: y.a.row,
						ref: r,
						style: n
					}, t.map(e => s.a.createElement("img", {
						key: e.url,
						src: e.url,
						className: y.a.rowBadge
					})), t.map(e => s.a.createElement("img", {
						key: e.url + 2,
						src: e.url,
						className: y.a.rowBadge
					})))
				},
				P = Object(a.c)({
					styleBadges: (e, t) => {
						let {
							subredditId: r
						} = t;
						return Object(l.d)(e, r).filter(e => {
							var t;
							return !(null === (t = e.collections) || void 0 === t ? void 0 : t.custom)
						}).map(e => {
							var t, r;
							return {
								url: Object(b.d)(60, 60, e).url2x,
								color: (null === (r = null === (t = e.extra) || void 0 === t ? void 0 : t.style) || void 0 === r ? void 0 : r.color) || ""
							}
						}).filter(e => e.color)
					},
					subreddit: (e, t) => {
						let {
							subredditId: r
						} = t;
						return e.subreddits.models[r]
					},
					username: e => {
						var t;
						return `u/${(null===(t=e.user.account)||void 0===t?void 0:t.displayText)||"username"}`
					}
				});
			var I = Object(o.b)(P)(S),
				w = r("./src/config.ts"),
				N = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Emojis/index.m.less"),
				C = r.n(N);
			const j = ["blink", "bush", "chug", "clappy", "confused", "cuddle", "dab", "dance", "default", "oof", "respect", "soon", "unfortunately", "wow"].map(e => `https://meta.redditmedia.com/img/fortnitebr/emotes/${e}-2x.gif`).concat("https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_destroy.gif");
			const x = Object(a.c)({
				subreddit: (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.subreddits.models[r]
				}
			});
			var T = Object(o.b)(x)((function(e) {
					const {
						className: t,
						subreddit: r
					} = e;
					return r ? s.a.createElement("article", {
						className: Object(d.a)(C.a.container, t)
					}, s.a.createElement("div", {
						className: C.a.background
					}), s.a.createElement("div", {
						className: C.a.content
					}, s.a.createElement("header", {
						className: C.a.title
					}, u.fbt._("emotes", null, {
						hk: "1VLDec"
					})), s.a.createElement("div", {
						className: C.a.example
					}, s.a.createElement("img", {
						className: C.a.drawer,
						src: `${w.a.assetPath}/img/memberships/emoji-drawer.png`
					}), s.a.createElement("div", {
						className: C.a.emojisTitle
					}, u.fbt._("Add r/{communityName} emote", [u.fbt._param("communityName", r.name)], {
						hk: "1pL2rY"
					})), s.a.createElement("div", {
						className: C.a.emojisContainer
					}, s.a.createElement("div", {
						className: C.a.emojis
					}, j.map(e => s.a.createElement("img", {
						className: C.a.emoji,
						key: e,
						src: e
					}))), s.a.createElement("div", {
						className: C.a.overflow
					}))), s.a.createElement("footer", {
						className: C.a.explanation
					}, u.fbt._("Get access to premium animated emotes", null, {
						hk: "1jTE2m"
					})))) : null
				})),
				A = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Gifs/index.m.less"),
				M = r.n(A);
			const k = (() => {
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
			class D extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						imagesCol1: [],
						imagesCol2: []
					}
				}
				async componentDidMount() {
					const e = this.props.subreddit && this.props.subreddit.title || "reddit",
						t = await k(e),
						r = [],
						n = [];
					t.data.forEach((e, t) => {
						const s = e.images.fixed_width.url;
						t % 2 == 0 ? r.push(s) : n.push(s)
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
					return t ? s.a.createElement("article", {
						className: Object(d.a)(M.a.container, e)
					}, s.a.createElement("div", {
						className: M.a.background
					}), s.a.createElement("div", {
						className: M.a.content
					}, s.a.createElement("header", {
						className: M.a.title
					}, u.fbt._("gifs in comments", null, {
						hk: "41wG7A"
					})), s.a.createElement("div", {
						className: M.a.example
					}, s.a.createElement("img", {
						className: M.a.drawer,
						src: `${w.a.assetPath}/img/memberships/gif-drawer.png`
					}), s.a.createElement("div", {
						className: M.a.imagesContainer
					}, s.a.createElement("div", {
						className: M.a.images
					}, s.a.createElement("div", {
						className: M.a.imageCol
					}, this.state.imagesCol1.map(e => s.a.createElement("img", {
						className: M.a.image,
						key: e,
						src: e
					}))), s.a.createElement("div", {
						className: M.a.imageCol
					}, this.state.imagesCol2.map(e => s.a.createElement("img", {
						className: M.a.image,
						key: e,
						src: e
					})))), s.a.createElement("div", {
						className: M.a.overflow
					}))), s.a.createElement("footer", {
						className: M.a.explanation
					}, u.fbt._("Add GIFs to your comments", null, {
						hk: "302rEX"
					})))) : null
				}
			}
			const R = Object(a.c)({
				subreddit: (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.subreddits.models[r]
				}
			});
			var B = Object(o.b)(R)(D),
				L = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.m.less"),
				F = r.n(L);
			const G = 1e4,
				U = 110;
			class V extends s.a.Component {
				constructor(e) {
					super(e), this.gotoNextSlide = () => {
						this.timeoutRef && clearInterval(this.timeoutRef), this.setState({
							currentSlideIdx: (this.state.currentSlideIdx + 1) % this.slides.length
						}), this.timeoutRef = window.setTimeout(this.gotoNextSlide, G)
					}, this.timeoutRef = null, this.state = {
						currentSlideIdx: 0
					}, this.slides = function(e) {
						switch (e) {
							case "t5_3oeyf":
							case "t5_socj8":
								return [I, T, B];
							default:
								return [I, B]
						}
					}(e.subredditId)
				}
				componentDidMount() {
					this.timeoutRef = window.setTimeout(this.gotoNextSlide, G)
				}
				componentWillUnmount() {
					this.timeoutRef && clearInterval(this.timeoutRef)
				}
				render() {
					const {
						className: e,
						hideSlideshow: t,
						meta: r,
						subredditId: o,
						subreddit: a
					} = this.props, {
						currentSlideIdx: l
					} = this.state;
					return a ? s.a.createElement("div", {
						className: e
					}, s.a.createElement("header", {
						className: F.a.title
					}, s.a.createElement("img", {
						className: F.a.crown,
						src: c.a
					}), r.membershipAlt), !t && s.a.createElement(s.a.Fragment, null, s.a.createElement("article", {
						className: F.a.benefits
					}, s.a.createElement(i.TransitionMotion, {
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
								left: Object(i.spring)(0)
							}
						}],
						willEnter: () => ({
							left: U
						}),
						willLeave: () => ({
							left: Object(i.spring)(-U)
						})
					}, e => s.a.createElement(n.Fragment, null, e.map(e => s.a.createElement("div", {
						className: F.a.slide,
						key: e.key,
						style: {
							left: `${e.style.left}%`
						},
						onClick: this.gotoNextSlide
					}, s.a.createElement(e.data.Component, {
						subredditId: o
					})))))), s.a.createElement("footer", {
						className: F.a.indicators
					}, this.slides.map((e, t) => s.a.createElement("div", {
						className: Object(d.a)(F.a.indicator, {
							[F.a.indicatorSelected]: t === l
						}),
						key: t,
						onClick: () => this.setState({
							currentSlideIdx: t
						})
					}))))) : null
				}
			}
			const W = Object(a.c)({
				meta: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(l.r)(e, r)
				},
				subreddit: (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.subreddits.models[r]
				},
				username: e => {
					const t = e.user.account;
					return t && t.username || "username"
				}
			});
			t.a = Object(o.b)(W)(V)
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "c", (function() {
				return c
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/config.ts"),
				s = r("./node_modules/lodash/flattenDeep.js"),
				i = r.n(s),
				o = r("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const a = `${n.a.assetPath}/img/memberships/paywall/crown.gif`,
				d = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				c = new Set(i()(Object.keys(o.a).map(e => Object.keys(o.b).map(t => Object.keys(o.c).map(r => `${r}_${e}_${t}_badge`)))))
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				i = r("./src/higherOrderComponents/asTooltip.tsx"),
				o = r("./src/reddit/constants/elementIds.ts"),
				a = r("./src/reddit/contexts/InsideOverlay.tsx");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e, t) {
				const r = Object(i.a)(e, t);
				class n extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(o.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return s.a.createElement(r, d({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(n)
			}
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/lib/permalinkToOverlayLocation/index.ts");

			function s(e, t) {
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

			function s(e) {
				return [...e].sort(n)
			}
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "d", (function() {
				return a
			}));
			var n, s, i = r("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(n || (n = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(s || (s = {}));
			const o = {
					[n.Loyalty]: i.a.First,
					[n.Achievement]: i.a.Second,
					[n.Cosmetic]: void 0
				},
				a = e => e === i.a.First ? n.Loyalty : e === i.a.Second ? n.Achievement : n.Cosmetic
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, s, i, o;
			r.d(t, "b", (function() {
					return s
				})), r.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(s || (s = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(i || (i = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(o || (o = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, r) {
			"use strict";
			var n;

			function s(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			r.d(t, "a", (function() {
					return n
				})), r.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(n || (n = {}))
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, s = r("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(n || (n = {}));
			const i = {
				status: n.NotFetched
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.a:
						if (e.status === n.Fetched && e.data.stripe && e.data.stripe.sources) {
							const r = t.payload.cardId,
								{
									[r]: n,
									...s
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: s
									}
								}
							}
						}
						return e;
					case s.e:
						if (e.status === n.Fetched && e.data.braintree && e.data.braintree.sources) {
							const r = t.payload.sourceId,
								{
									[r]: n,
									...s
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: s
									}
								}
							}
						}
						return e;
					case s.b:
						return {
							error: t.payload.error, status: n.Failure
						};
					case s.c:
						return {
							data: t.payload, status: n.Fetched
						};
					case s.d:
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
			var n, s = r("./src/lib/constants/specialMembership.ts"),
				i = r("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				o = r("./src/reddit/helpers/economics/sortBadges.ts"),
				a = r("./src/reddit/models/Badge/index.ts"),
				d = r("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(n || (n = {}));
			const c = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, r, n) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(s => {
						let i;
						(i = e.placement ? e.placement === a.a.First ? n[d.a.Loyalty][s] : n[d.a.Achievement][s] : l(e) ? n[d.a.Cosmetic][d.c.MyBadges][s] : n[d.a.Cosmetic][d.c.Gallery][s]) && (l(e) ? r.has(e.id) && i.unlocked.push(e) : t.has(e.id) || i.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const r = parseInt(e.price || "0"),
						n = parseInt(t.price || "0");
					return r === n ? Object(o.b)(e, t) : r - n
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function f(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === s.a).map(m).sort((e, r) => {
					const n = t[e.id],
						s = t[r.id];
					return Object(o.b)(n, s)
				})
			}

			function p(e) {
				const t = {
					[d.a.Loyalty]: {},
					[d.a.Achievement]: {},
					[d.a.Cosmetic]: {
						[d.c.Gallery]: {},
						[d.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(r => {
					const n = e.collections[r],
						s = {
							description: n.description,
							highlight: n.extra && n.extra.style && n.extra.style.color,
							id: n.id,
							locked: [],
							title: n.title,
							unlocked: []
						};
					t[d.a.Loyalty][r] = {
						...s,
						locked: [],
						unlocked: []
					}, t[d.a.Achievement][r] = {
						...s,
						locked: [],
						unlocked: []
					}, t[d.a.Cosmetic][d.c.Gallery][r] = {
						...s,
						locked: [],
						unlocked: []
					}, t[d.a.Cosmetic][d.c.MyBadges][r] = {
						...s,
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
						[d.a.Loyalty]: f(t[d.a.Loyalty], e.collections),
						[d.a.Achievement]: f(t[d.a.Achievement], e.collections),
						[d.a.Cosmetic]: {
							[d.c.Gallery]: f(t[d.a.Cosmetic][d.c.Gallery], e.collections),
							[d.c.MyBadges]: f(t[d.a.Cosmetic][d.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.a: {
						const {
							subredditId: r
						} = t.payload, s = e[r];
						return s && s.status === n.Fetched ? {
							...e,
							[r]: {
								...s,
								data: {
									...s.data
								},
								raw: {
									...s.raw
								}
							}
						} : e
					}
					case i.h: {
						const {
							subredditId: r
						} = t.payload, s = e[r];
						return s && s.status === n.Fetched ? {
							...e,
							[r]: {
								...s,
								data: {
									...s.data,
									subscription: {
										...s.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...s.raw,
									subscription: {
										...s.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case i.i: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: {
								raw: r,
								data: p(r),
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
				s = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/economics/claims/constants.ts")),
				i = r("./src/reddit/actions/economics/me/constants.ts");
			const o = {};
			var a = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case i.a: {
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
						case s.b:
						case s.a:
							const {
								subredditId: r
							} = t.payload;
							return {
								...e, [r]: {
									...e[r],
									isClaiming: t.type === s.b
								}
							};
						default:
							return e
					}
				},
				d = r("./src/reddit/actions/governance/constants.ts");
			const c = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function u(e) {
				var t, r, n, s, i;
				const o = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					a = null == o ? void 0 : o.contracts,
					d = null == a ? void 0 : a.unlocked,
					c = null !== (n = null === (r = e.walletProvider) || void 0 === r ? void 0 : r.provider) && void 0 !== n ? n : e.provider,
					u = !!(null === (s = e.walletProvider) || void 0 === s ? void 0 : s.inTransition),
					m = (null == d ? void 0 : d.decimals) || 0,
					f = "1" + "0".repeat(m);
				return {
					blockchainProvider: c,
					contractAddress: (null == d ? void 0 : d.address) || "",
					contracts: a,
					decimals: m,
					displayConversion: f,
					images: e.images || l,
					inTransition: u,
					name: e.name,
					nomenclature: null === (i = e.extra) || void 0 === i ? void 0 : i.nomenclature,
					polls: e.polls,
					symbol: (null == d ? void 0 : d.token) || ""
				}
			}
			var m = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.a: {
						const {
							subredditId: r,
							meta: n
						} = t.payload;
						return {
							...e,
							[r]: u(n)
						}
					}
					default:
						return e
				}
			};
			const f = {};
			var p = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : f,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case d.n: {
						const {
							subredditId: r,
							wallets: n
						} = t.payload, s = Object.keys(n).reduce((t, s) => {
							return {
								...t,
								[s]: {
									...e[s] || {},
									[r]: n[s]
								}
							}
						}, {});
						return {
							...e,
							...s
						}
					}
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				claims: a,
				points: m,
				publicWallets: p
			})
		},
		"./src/reddit/selectors/crypto/wallet.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return a
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/crypto/index.ts");
			Object(n.a)({
				features: {
					crypto: s.a
				}
			});
			const i = (e, t) => {
					var r;
					return t && (null === (r = e.user.wallets[t.subredditId]) || void 0 === r ? void 0 : r.latest)
				},
				o = (e, t) => {
					var r;
					return null === (r = i(e, t)) || void 0 === r ? void 0 : r.publicAddress
				},
				a = (e, t) => {
					var r, n, s, i;
					return null === (i = null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === n ? void 0 : n.publicWallets) || void 0 === s ? void 0 : s[t.userId]) || void 0 === i ? void 0 : i[t.subredditId]
				}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return g
			})), r.d(t, "o", (function() {
				return _
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "x", (function() {
				return E
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "i", (function() {
				return O
			})), r.d(t, "q", (function() {
				return P
			})), r.d(t, "h", (function() {
				return I
			})), r.d(t, "z", (function() {
				return w
			})), r.d(t, "l", (function() {
				return N
			})), r.d(t, "n", (function() {
				return C
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "j", (function() {
				return T
			})), r.d(t, "p", (function() {
				return A
			})), r.d(t, "k", (function() {
				return D
			})), r.d(t, "r", (function() {
				return B
			})), r.d(t, "y", (function() {
				return L
			})), r.d(t, "u", (function() {
				return F
			})), r.d(t, "v", (function() {
				return G
			})), r.d(t, "b", (function() {
				return U
			})), r.d(t, "w", (function() {
				return V
			})), r.d(t, "s", (function() {
				return W
			})), r.d(t, "t", (function() {
				return z
			})), r.d(t, "g", (function() {
				return H
			})), r.d(t, "m", (function() {
				return Z
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/featureFlags/index.ts"),
				s = r("./src/reddit/helpers/economics/sortBadges.ts"),
				i = r("./src/reddit/helpers/richTextJson/index.ts"),
				o = r("./src/reddit/models/Badge/index.ts"),
				a = r("./src/reddit/models/Badge/managementPage.ts"),
				d = r("./src/reddit/models/Payments/index.ts"),
				c = r("./src/reddit/models/Product/index.ts"),
				l = r("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				u = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = r("./src/reddit/selectors/comments.ts"),
				f = r("./src/reddit/selectors/commentSelector.ts"),
				p = r("./src/reddit/selectors/experiments/mediaInComments.ts"),
				b = r("./src/reddit/selectors/gold/powerups/index.ts"),
				h = r("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const y = [],
				g = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === u.a.Fetched) {
						const e = r.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				_ = (e, t) => {
					const r = g(e, t);
					return r && r.endsAt || null
				};
			var v;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(v || (v = {}));
			const E = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === u.a.Fetched) {
						const r = _(e, t),
							n = Date.now();
						return r && n < r ? v.Subscribed : v.NotSubscribed
					}
					return v.DontKnow
				},
				S = (e, t) => {
					const r = e.user.account,
						n = e.economics.subredditPremium[t];
					if (r && n && n.status === u.a.Fetched) {
						const n = ((e.users.appliedBadges[r.id] || {})[t] || y).map(t => e.badges.models[t]).filter(Boolean);
						if (n) return {
							[a.a.Loyalty]: n.find(e => e.placement === o.a.First),
							[a.a.Achievement]: n.find(e => e.placement === o.a.Second),
							[a.a.Cosmetic]: n.find(e => !e.placement)
						}
					}
					return {
						[a.a.Loyalty]: void 0,
						[a.a.Achievement]: void 0,
						[a.a.Cosmetic]: void 0
					}
				};

			function O(e, t) {
				return (null == e ? void 0 : e.length) ? Object(s.a)(e.map(e => t[e]).filter(Boolean)) : y
			}
			const P = (e, t, r) => {
					var s;
					if (!n.d.spBadges(e)) return y;
					return O(null === (s = e.users.appliedBadges[r]) || void 0 === s ? void 0 : s[t], e.badges.models)
				},
				I = (e, t) => {
					const r = e.economics.subredditPremium[t.subredditId];
					if (r && r.status === u.a.Fetched) {
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

			function N(e, t) {
				const {
					badge: r,
					subredditId: n
				} = t, s = e.user.account ? e.user.account.id : void 0;
				if (Object(o.e)(r) && r.userId === s) return r;
				const i = e.badges.models,
					a = e.user.ownedBadges[n] || {},
					d = Object(o.e)(r) ? r.type : r.id;
				return Object.keys(a).map(e => i[e]).find(e => e && e.type === d)
			}

			function C(e, t, r, n) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === u.a.Fetched) {
					if (r === a.a.Loyalty || r === a.a.Achievement) return s.data.collections[r];
					if (r === a.a.Cosmetic && n) return s.data.collections[r][n]
				}
				return y
			}

			function j(e, t) {
				const r = C(e, t, a.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : y
			}

			function x(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === u.a.Fetched) {
					const e = r.data.collections[a.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(o.f)
				}
				return y
			}

			function T(e, t) {
				return C(e, t, a.a.Cosmetic, a.c.Gallery).some(e => e.locked.some(e => Object(o.f)(e) || !!e.price))
			}
			const A = e => {
				const t = [],
					r = e.economics.paymentSystems;
				if (r.status === l.a.Fetched && r.data.stripe && r.data.stripe.sources) {
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
				if (r.status === l.a.Fetched && r.data.braintree && r.data.braintree.sources) {
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
			var M;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(M || (M = {}));
			const k = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				D = (e, t) => Object.values(e.products.models).filter(e => e.type === c.a.Membership && t && e.subredditId === t),
				R = (e, t) => {
					if (!t) return {};
					const r = k.prices;
					D(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const n = g(e, t);
					return n && n.price && n.currency && (r[n.currency] = n.price), r
				},
				B = (e, t) => {
					var r, n, s, i;
					const o = (null === (i = null === (s = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === n ? void 0 : n.points) || void 0 === s ? void 0 : s[t || ""]) || void 0 === i ? void 0 : i.nomenclature) || k;
					return {
						prices: R(e, t),
						member: o.member || k.member,
						memberPlural: o.memberPlural || k.memberPlural,
						memberAlt: o.memberAlt || k.memberAlt,
						memberAltPlural: o.memberAltPlural || k.memberAltPlural,
						membership: o.membership || k.membership,
						membershipAlt: o.membershipAlt || k.membershipAlt
					}
				},
				L = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				F = (e, t) => {
					const r = e.user.ownedBadges[t] || {};
					return !!Object.keys(r).length
				},
				G = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				U = (e, t) => {
					let {
						subredditId: r
					} = t;
					if (!r) return;
					return e.economics.emotes[r]
				},
				V = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				W = (e, t, r) => {
					if (Object(b.o)(e, {
							subredditId: t
						})) return !0;
					const n = "replyToPost" !== r && Object(f.b)(e, {
						commentId: r
					});
					return !(!n || !Object(i.a)(n))
				},
				z = (e, t, r) => {
					if (Object(p.a)(e)) return !!t && Object(m.B)(e, {
						subredditId: t
					});
					if (!Object(h.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(b.p)(e, {
							subredditId: t
						})) return !0;
					const s = "replyToPost" !== r && Object(f.b)(e, {
						commentId: r
					});
					if (s && Object(i.b)(s)) return !0;
					const o = n.d.spGiphy(e),
						a = V(e, t);
					return !(!o || !a) || o && a
				},
				H = (e, t, r) => {
					if (t) {
						const n = e.economics.banners.dismissedBanners[t];
						if (n && n.data) return !!n.data[r]
					}
				},
				Z = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/products.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return i
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/models/Product/index.ts");
			const s = (e, t) => {
					const r = e.products.models[t];
					if (r && r.type === n.a.Badge) return r
				},
				i = (e, t) => {
					let {
						productId: r
					} = t;
					const n = e.products.models[r];
					if (n) {
						const t = n.subredditId,
							s = Object.keys(e.user.ownedBadges[t] || {}),
							i = e.badges.models,
							o = Date.now();
						let a = !1;
						return s.forEach(e => {
							const t = i[e];
							t && t.type === r && t.endsAt > o && (a = !0)
						}), a
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeHovercardTooltip.8db266b9be3637c83e1a.js.map