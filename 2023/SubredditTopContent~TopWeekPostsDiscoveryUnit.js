// https://www.redditstatic.com/desktop2x/SubredditTopContent~TopWeekPostsDiscoveryUnit.d704efde2447a42ad053.js
// Retrieved at 6/7/2023, 12:10:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditTopContent~TopWeekPostsDiscoveryUnit"], {
		"./node_modules/react-motion/lib/Motion.js": function(e, t, s) {
			"use strict";
			t.__esModule = !0;
			var n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				},
				r = function() {
					function e(e, t) {
						for (var s = 0; s < t.length; s++) {
							var n = t[s];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, s, n) {
						return s && e(t.prototype, s), n && e(t, n), t
					}
				}();

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var o = a(s("./node_modules/react-motion/lib/mapToZero.js")),
				i = a(s("./node_modules/react-motion/lib/stripStyle.js")),
				l = a(s("./node_modules/react-motion/lib/stepper.js")),
				c = a(s("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				d = a(s("./node_modules/raf/index.js")),
				u = a(s("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				m = a(s("./node_modules/react/index.js")),
				p = a(s("./node_modules/react-motion/node_modules/prop-types/index.js")),
				f = 1e3 / 60,
				b = function(e) {
					function t(s) {
						var r = this;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), e.call(this, s), this.wasAnimating = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyle = null, this.clearUnreadPropStyle = function(e) {
							var t = !1,
								s = r.state,
								a = s.currentStyle,
								o = s.currentVelocity,
								i = s.lastIdealStyle,
								l = s.lastIdealVelocity;
							for (var c in e)
								if (Object.prototype.hasOwnProperty.call(e, c)) {
									var d = e[c];
									"number" == typeof d && (t || (t = !0, a = n({}, a), o = n({}, o), i = n({}, i), l = n({}, l)), a[c] = d, o[c] = 0, i[c] = d, l[c] = 0)
								} t && r.setState({
								currentStyle: a,
								currentVelocity: o,
								lastIdealStyle: i,
								lastIdealVelocity: l
							})
						}, this.startAnimationIfNecessary = function() {
							r.animationID = d.default((function(e) {
								var t = r.props.style;
								if (u.default(r.state.currentStyle, t, r.state.currentVelocity)) return r.wasAnimating && r.props.onRest && r.props.onRest(), r.animationID = null, r.wasAnimating = !1, void(r.accumulatedTime = 0);
								r.wasAnimating = !0;
								var s = e || c.default(),
									n = s - r.prevTime;
								if (r.prevTime = s, r.accumulatedTime = r.accumulatedTime + n, r.accumulatedTime > 10 * f && (r.accumulatedTime = 0), 0 === r.accumulatedTime) return r.animationID = null, void r.startAnimationIfNecessary();
								var a = (r.accumulatedTime - Math.floor(r.accumulatedTime / f) * f) / f,
									o = Math.floor(r.accumulatedTime / f),
									i = {},
									d = {},
									m = {},
									p = {};
								for (var b in t)
									if (Object.prototype.hasOwnProperty.call(t, b)) {
										var h = t[b];
										if ("number" == typeof h) m[b] = h, p[b] = 0, i[b] = h, d[b] = 0;
										else {
											for (var y = r.state.lastIdealStyle[b], x = r.state.lastIdealVelocity[b], g = 0; g < o; g++) {
												var v = l.default(f / 1e3, y, x, h.val, h.stiffness, h.damping, h.precision);
												y = v[0], x = v[1]
											}
											var _ = l.default(f / 1e3, y, x, h.val, h.stiffness, h.damping, h.precision),
												j = _[0],
												O = _[1];
											m[b] = y + (j - y) * a, p[b] = x + (O - x) * a, i[b] = y, d[b] = x
										}
									} r.animationID = null, r.accumulatedTime -= o * f, r.setState({
									currentStyle: m,
									currentVelocity: p,
									lastIdealStyle: i,
									lastIdealVelocity: d
								}), r.unreadPropStyle = null, r.startAnimationIfNecessary()
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
					}(t, e), r(t, null, [{
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
							s = e.style,
							n = t || i.default(s),
							r = o.default(n);
						return {
							currentStyle: n,
							currentVelocity: r,
							lastIdealStyle: n,
							lastIdealVelocity: r
						}
					}, t.prototype.componentDidMount = function() {
						this.prevTime = c.default(), this.startAnimationIfNecessary()
					}, t.prototype.componentWillReceiveProps = function(e) {
						null != this.unreadPropStyle && this.clearUnreadPropStyle(this.unreadPropStyle), this.unreadPropStyle = e.style, null == this.animationID && (this.prevTime = c.default(), this.startAnimationIfNecessary())
					}, t.prototype.componentWillUnmount = function() {
						null != this.animationID && (d.default.cancel(this.animationID), this.animationID = null)
					}, t.prototype.render = function() {
						var e = this.props.children(this.state.currentStyle);
						return e && m.default.Children.only(e)
					}, t
				}(m.default.Component);
			t.default = b, e.exports = t.default
		},
		"./node_modules/react-motion/lib/StaggeredMotion.js": function(e, t, s) {
			"use strict";
			t.__esModule = !0;
			var n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				},
				r = function() {
					function e(e, t) {
						for (var s = 0; s < t.length; s++) {
							var n = t[s];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, s, n) {
						return s && e(t.prototype, s), n && e(t, n), t
					}
				}();

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var o = a(s("./node_modules/react-motion/lib/mapToZero.js")),
				i = a(s("./node_modules/react-motion/lib/stripStyle.js")),
				l = a(s("./node_modules/react-motion/lib/stepper.js")),
				c = a(s("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				d = a(s("./node_modules/raf/index.js")),
				u = a(s("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				m = a(s("./node_modules/react/index.js")),
				p = a(s("./node_modules/react-motion/node_modules/prop-types/index.js")),
				f = 1e3 / 60;
			var b = function(e) {
				function t(s) {
					var r = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, s), this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = r.state, s = t.currentStyles, a = t.currentVelocities, o = t.lastIdealStyles, i = t.lastIdealVelocities, l = !1, c = 0; c < e.length; c++) {
							var d = e[c],
								u = !1;
							for (var m in d)
								if (Object.prototype.hasOwnProperty.call(d, m)) {
									var p = d[m];
									"number" == typeof p && (u || (u = !0, l = !0, s[c] = n({}, s[c]), a[c] = n({}, a[c]), o[c] = n({}, o[c]), i[c] = n({}, i[c])), s[c][m] = p, a[c][m] = 0, o[c][m] = p, i[c][m] = 0)
								}
						}
						l && r.setState({
							currentStyles: s,
							currentVelocities: a,
							lastIdealStyles: o,
							lastIdealVelocities: i
						})
					}, this.startAnimationIfNecessary = function() {
						r.animationID = d.default((function(e) {
							var t = r.props.styles(r.state.lastIdealStyles);
							if (function(e, t, s) {
									for (var n = 0; n < e.length; n++)
										if (!u.default(e[n], t[n], s[n])) return !1;
									return !0
								}(r.state.currentStyles, t, r.state.currentVelocities)) return r.animationID = null, void(r.accumulatedTime = 0);
							var s = e || c.default(),
								n = s - r.prevTime;
							if (r.prevTime = s, r.accumulatedTime = r.accumulatedTime + n, r.accumulatedTime > 10 * f && (r.accumulatedTime = 0), 0 === r.accumulatedTime) return r.animationID = null, void r.startAnimationIfNecessary();
							for (var a = (r.accumulatedTime - Math.floor(r.accumulatedTime / f) * f) / f, o = Math.floor(r.accumulatedTime / f), i = [], d = [], m = [], p = [], b = 0; b < t.length; b++) {
								var h = t[b],
									y = {},
									x = {},
									g = {},
									v = {};
								for (var _ in h)
									if (Object.prototype.hasOwnProperty.call(h, _)) {
										var j = h[_];
										if ("number" == typeof j) y[_] = j, x[_] = 0, g[_] = j, v[_] = 0;
										else {
											for (var O = r.state.lastIdealStyles[b][_], k = r.state.lastIdealVelocities[b][_], C = 0; C < o; C++) {
												var P = l.default(f / 1e3, O, k, j.val, j.stiffness, j.damping, j.precision);
												O = P[0], k = P[1]
											}
											var S = l.default(f / 1e3, O, k, j.val, j.stiffness, j.damping, j.precision),
												E = S[0],
												w = S[1];
											y[_] = O + (E - O) * a, x[_] = k + (w - k) * a, g[_] = O, v[_] = k
										}
									} m[b] = y, p[b] = x, i[b] = g, d[b] = v
							}
							r.animationID = null, r.accumulatedTime -= o * f, r.setState({
								currentStyles: m,
								currentVelocities: p,
								lastIdealStyles: i,
								lastIdealVelocities: d
							}), r.unreadPropStyles = null, r.startAnimationIfNecessary()
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
				}(t, e), r(t, null, [{
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
						s = e.styles,
						n = t || s().map(i.default),
						r = n.map((function(e) {
							return o.default(e)
						}));
					return {
						currentStyles: n,
						currentVelocities: r,
						lastIdealStyles: n,
						lastIdealVelocities: r
					}
				}, t.prototype.componentDidMount = function() {
					this.prevTime = c.default(), this.startAnimationIfNecessary()
				}, t.prototype.componentWillReceiveProps = function(e) {
					null != this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles), this.unreadPropStyles = e.styles(this.state.lastIdealStyles), null == this.animationID && (this.prevTime = c.default(), this.startAnimationIfNecessary())
				}, t.prototype.componentWillUnmount = function() {
					null != this.animationID && (d.default.cancel(this.animationID), this.animationID = null)
				}, t.prototype.render = function() {
					var e = this.props.children(this.state.currentStyles);
					return e && m.default.Children.only(e)
				}, t
			}(m.default.Component);
			t.default = b, e.exports = t.default
		},
		"./node_modules/react-motion/lib/TransitionMotion.js": function(e, t, s) {
			"use strict";
			t.__esModule = !0;
			var n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				},
				r = function() {
					function e(e, t) {
						for (var s = 0; s < t.length; s++) {
							var n = t[s];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, s, n) {
						return s && e(t.prototype, s), n && e(t, n), t
					}
				}();

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var o = a(s("./node_modules/react-motion/lib/mapToZero.js")),
				i = a(s("./node_modules/react-motion/lib/stripStyle.js")),
				l = a(s("./node_modules/react-motion/lib/stepper.js")),
				c = a(s("./node_modules/react-motion/lib/mergeDiff.js")),
				d = a(s("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				u = a(s("./node_modules/raf/index.js")),
				m = a(s("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				p = a(s("./node_modules/react/index.js")),
				f = a(s("./node_modules/react-motion/node_modules/prop-types/index.js")),
				b = 1e3 / 60;

			function h(e, t, s) {
				var n = t;
				return null == n ? e.map((function(e, t) {
					return {
						key: e.key,
						data: e.data,
						style: s[t]
					}
				})) : e.map((function(e, t) {
					for (var r = 0; r < n.length; r++)
						if (n[r].key === e.key) return {
							key: n[r].key,
							data: n[r].data,
							style: s[t]
						};
					return {
						key: e.key,
						data: e.data,
						style: s[t]
					}
				}))
			}

			function y(e, t, s, n, r, a, i, l, d) {
				for (var u = c.default(n, r, (function(e, n) {
						var r = t(n);
						return null == r ? (s({
							key: n.key,
							data: n.data
						}), null) : m.default(a[e], r, i[e]) ? (s({
							key: n.key,
							data: n.data
						}), null) : {
							key: n.key,
							data: n.data,
							style: r
						}
					})), p = [], f = [], b = [], h = [], y = 0; y < u.length; y++) {
					for (var x = u[y], g = null, v = 0; v < n.length; v++)
						if (n[v].key === x.key) {
							g = v;
							break
						} if (null == g) {
						var _ = e(x);
						p[y] = _, b[y] = _;
						var j = o.default(x.style);
						f[y] = j, h[y] = j
					} else p[y] = a[g], b[y] = l[g], f[y] = i[g], h[y] = d[g]
				}
				return [u, p, f, b, h]
			}
			var x = function(e) {
				function t(s) {
					var r = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, s), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = y(r.props.willEnter, r.props.willLeave, r.props.didLeave, r.state.mergedPropsStyles, e, r.state.currentStyles, r.state.currentVelocities, r.state.lastIdealStyles, r.state.lastIdealVelocities), s = t[0], a = t[1], o = t[2], i = t[3], l = t[4], c = 0; c < e.length; c++) {
							var d = e[c].style,
								u = !1;
							for (var m in d)
								if (Object.prototype.hasOwnProperty.call(d, m)) {
									var p = d[m];
									"number" == typeof p && (u || (u = !0, a[c] = n({}, a[c]), o[c] = n({}, o[c]), i[c] = n({}, i[c]), l[c] = n({}, l[c]), s[c] = {
										key: s[c].key,
										data: s[c].data,
										style: n({}, s[c].style)
									}), a[c][m] = p, o[c][m] = 0, i[c][m] = p, l[c][m] = 0, s[c].style[m] = p)
								}
						}
						r.setState({
							currentStyles: a,
							currentVelocities: o,
							mergedPropsStyles: s,
							lastIdealStyles: i,
							lastIdealVelocities: l
						})
					}, this.startAnimationIfNecessary = function() {
						r.unmounting || (r.animationID = u.default((function(e) {
							if (!r.unmounting) {
								var t = r.props.styles,
									s = "function" == typeof t ? t(h(r.state.mergedPropsStyles, r.unreadPropStyles, r.state.lastIdealStyles)) : t;
								if (function(e, t, s, n) {
										if (n.length !== t.length) return !1;
										for (var r = 0; r < n.length; r++)
											if (n[r].key !== t[r].key) return !1;
										for (r = 0; r < n.length; r++)
											if (!m.default(e[r], t[r].style, s[r])) return !1;
										return !0
									}(r.state.currentStyles, s, r.state.currentVelocities, r.state.mergedPropsStyles)) return r.animationID = null, void(r.accumulatedTime = 0);
								var n = e || d.default(),
									a = n - r.prevTime;
								if (r.prevTime = n, r.accumulatedTime = r.accumulatedTime + a, r.accumulatedTime > 10 * b && (r.accumulatedTime = 0), 0 === r.accumulatedTime) return r.animationID = null, void r.startAnimationIfNecessary();
								for (var o = (r.accumulatedTime - Math.floor(r.accumulatedTime / b) * b) / b, i = Math.floor(r.accumulatedTime / b), c = y(r.props.willEnter, r.props.willLeave, r.props.didLeave, r.state.mergedPropsStyles, s, r.state.currentStyles, r.state.currentVelocities, r.state.lastIdealStyles, r.state.lastIdealVelocities), u = c[0], p = c[1], f = c[2], x = c[3], g = c[4], v = 0; v < u.length; v++) {
									var _ = u[v].style,
										j = {},
										O = {},
										k = {},
										C = {};
									for (var P in _)
										if (Object.prototype.hasOwnProperty.call(_, P)) {
											var S = _[P];
											if ("number" == typeof S) j[P] = S, O[P] = 0, k[P] = S, C[P] = 0;
											else {
												for (var E = x[v][P], w = g[v][P], I = 0; I < i; I++) {
													var N = l.default(b / 1e3, E, w, S.val, S.stiffness, S.damping, S.precision);
													E = N[0], w = N[1]
												}
												var T = l.default(b / 1e3, E, w, S.val, S.stiffness, S.damping, S.precision),
													L = T[0],
													M = T[1];
												j[P] = E + (L - E) * o, O[P] = w + (M - w) * o, k[P] = E, C[P] = w
											}
										} x[v] = k, g[v] = C, p[v] = j, f[v] = O
								}
								r.animationID = null, r.accumulatedTime -= i * b, r.setState({
									currentStyles: p,
									currentVelocities: f,
									lastIdealStyles: x,
									lastIdealVelocities: g,
									mergedPropsStyles: u
								}), r.unreadPropStyles = null, r.startAnimationIfNecessary()
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
				}(t, e), r(t, null, [{
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
						s = e.styles,
						n = e.willEnter,
						r = e.willLeave,
						a = e.didLeave,
						l = "function" == typeof s ? s(t) : s,
						c = void 0;
					c = null == t ? l : t.map((function(e) {
						for (var t = 0; t < l.length; t++)
							if (l[t].key === e.key) return l[t];
						return e
					}));
					var d = null == t ? l.map((function(e) {
							return i.default(e.style)
						})) : t.map((function(e) {
							return i.default(e.style)
						})),
						u = null == t ? l.map((function(e) {
							return o.default(e.style)
						})) : t.map((function(e) {
							return o.default(e.style)
						})),
						m = y(n, r, a, c, l, d, u, d, u),
						p = m[0];
					return {
						currentStyles: m[1],
						currentVelocities: m[2],
						lastIdealStyles: m[3],
						lastIdealVelocities: m[4],
						mergedPropsStyles: p
					}
				}, t.prototype.componentDidMount = function() {
					this.prevTime = d.default(), this.startAnimationIfNecessary()
				}, t.prototype.componentWillReceiveProps = function(e) {
					this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles);
					var t = e.styles;
					this.unreadPropStyles = "function" == typeof t ? t(h(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles)) : t, null == this.animationID && (this.prevTime = d.default(), this.startAnimationIfNecessary())
				}, t.prototype.componentWillUnmount = function() {
					this.unmounting = !0, null != this.animationID && (u.default.cancel(this.animationID), this.animationID = null)
				}, t.prototype.render = function() {
					var e = h(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles),
						t = this.props.children(e);
					return t && p.default.Children.only(t)
				}, t
			}(p.default.Component);
			t.default = x, e.exports = t.default
		},
		"./node_modules/react-motion/lib/mapToZero.js": function(e, t, s) {
			"use strict";
			t.__esModule = !0, t.default = function(e) {
				var t = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = 0);
				return t
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/mergeDiff.js": function(e, t, s) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, s) {
				for (var n = {}, r = 0; r < e.length; r++) n[e[r].key] = r;
				var a = {};
				for (r = 0; r < t.length; r++) a[t[r].key] = r;
				var o = [];
				for (r = 0; r < t.length; r++) o[r] = t[r];
				for (r = 0; r < e.length; r++)
					if (!Object.prototype.hasOwnProperty.call(a, e[r].key)) {
						var i = s(r, e[r]);
						null != i && o.push(i)
					} return o.sort((function(e, s) {
					var r = a[e.key],
						o = a[s.key],
						i = n[e.key],
						l = n[s.key];
					if (null != r && null != o) return a[e.key] - a[s.key];
					if (null != i && null != l) return n[e.key] - n[s.key];
					if (null != r) {
						for (var c = 0; c < t.length; c++) {
							var d = t[c].key;
							if (Object.prototype.hasOwnProperty.call(n, d)) {
								if (r < a[d] && l > n[d]) return -1;
								if (r > a[d] && l < n[d]) return 1
							}
						}
						return 1
					}
					for (c = 0; c < t.length; c++) {
						d = t[c].key;
						if (Object.prototype.hasOwnProperty.call(n, d)) {
							if (o < a[d] && i > n[d]) return 1;
							if (o > a[d] && i < n[d]) return -1
						}
					}
					return -1
				}))
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/presets.js": function(e, t, s) {
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
		"./node_modules/react-motion/lib/react-motion.js": function(e, t, s) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e.default : e
			}
			t.__esModule = !0;
			var r = s("./node_modules/react-motion/lib/Motion.js");
			t.Motion = n(r);
			var a = s("./node_modules/react-motion/lib/StaggeredMotion.js");
			t.StaggeredMotion = n(a);
			var o = s("./node_modules/react-motion/lib/TransitionMotion.js");
			t.TransitionMotion = n(o);
			var i = s("./node_modules/react-motion/lib/spring.js");
			t.spring = n(i);
			var l = s("./node_modules/react-motion/lib/presets.js");
			t.presets = n(l);
			var c = s("./node_modules/react-motion/lib/stripStyle.js");
			t.stripStyle = n(c);
			var d = s("./node_modules/react-motion/lib/reorderKeys.js");
			t.reorderKeys = n(d)
		},
		"./node_modules/react-motion/lib/reorderKeys.js": function(e, t, s) {
			"use strict";
			t.__esModule = !0, t.default = function() {
				0
			};
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/shouldStopAnimation.js": function(e, t, s) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, s) {
				for (var n in t)
					if (Object.prototype.hasOwnProperty.call(t, n)) {
						if (0 !== s[n]) return !1;
						var r = "number" == typeof t[n] ? t[n] : t[n].val;
						if (e[n] !== r) return !1
					} return !0
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/spring.js": function(e, t, s) {
			"use strict";
			t.__esModule = !0;
			var n = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var s = arguments[t];
					for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
				}
				return e
			};
			t.default = function(e, t) {
				return n({}, i, t, {
					val: e
				})
			};
			var r, a = s("./node_modules/react-motion/lib/presets.js"),
				o = (r = a) && r.__esModule ? r : {
					default: r
				},
				i = n({}, o.default.noWobble, {
					precision: .01
				});
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stepper.js": function(e, t, s) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, s, r, a, o, i) {
				var l = s + (-a * (t - r) + -o * s) * e,
					c = t + l * e;
				if (Math.abs(l) < i && Math.abs(c - r) < i) return n[0] = r, n[1] = 0, n;
				return n[0] = c, n[1] = l, n
			};
			var n = [0, 0];
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stripStyle.js": function(e, t, s) {
			"use strict";
			t.__esModule = !0, t.default = function(e) {
				var t = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = "number" == typeof e[s] ? e[s] : e[s].val);
				return t
			}, e.exports = t.default
		},
		"./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js": function(e, t, s) {
			(function(t) {
				(function() {
					var s, n, r;
					"undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
						return performance.now()
					} : null != t && t.hrtime ? (e.exports = function() {
						return (s() - r) / 1e6
					}, n = t.hrtime, r = (s = function() {
						var e;
						return 1e9 * (e = n())[0] + e[1]
					})()) : Date.now ? (e.exports = function() {
						return Date.now() - r
					}, r = Date.now()) : (e.exports = function() {
						return (new Date).getTime() - r
					}, r = (new Date).getTime())
				}).call(this)
			}).call(this, s("./node_modules/process/browser.js"))
		},
		"./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}

			function a() {}
			a.resetWarningCache = r, e.exports = function() {
				function e(e, t, s, r, a, o) {
					if (o !== n) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var s = {
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
					resetWarningCache: r
				};
				return s.PropTypes = s, s
			}
		},
		"./node_modules/react-motion/node_modules/prop-types/index.js": function(e, t, s) {
			e.exports = s("./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, s) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./src/higherOrderComponents/withAdClickLocation/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const i = e => (e, t, s) => ({
				...o.o(e),
				source: "post",
				action: "click",
				noun: "ad",
				adClick: {
					location: t
				},
				actionInfo: o.d(e),
				adblock: o.e(e),
				app: o.f(e),
				feed: o.r(e),
				geo: o.t(e),
				platform: o.I(e),
				referrer: o.Z(e),
				request: o.ab(e),
				screen: o.cb(e),
				session: o.hb(e),
				user: o.sb(e),
				media: s ? o.C(e, s) : null,
				post: s ? o.K(e, s) : null
			});
			var l = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				c = s("./src/telemetry/index.ts");
			const d = new Set;

			function u(e) {
				function t(t) {
					const s = Object(a.f)().getState(),
						{
							post: n
						} = {
							...t
						};
					return n && n.isSponsored ? r.a.createElement("div", {
						onClickCapture: function(e, n) {
							var r, a;
							if (d.has(e.timeStamp)) return;
							d.add(e.timeStamp);
							const o = function(e) {
								if (e.dataset.adclicklocation) return e.dataset.adclicklocation;
								const t = e.closest(".PostContainer, [data-adclicklocation]");
								return t ? t.dataset.adclicklocation : l.a.UNKNOWN
							}(e.target);
							o && (! function(e, t) {
								return Object.values(t).some(t => t === e)
							}(o, l.b) ? Object(c.a)(i(n)(s, o, null === (a = t.post) || void 0 === a ? void 0 : a.postId)) : Object(c.a)(i(n)(s, l.a.UNKNOWN, null === (r = t.post) || void 0 === r ? void 0 : r.postId)))
						}
					}, r.a.createElement(e, t)) : r.a.createElement(e, t)
				}
				const s = e.name || e.displayName;
				return t.displayName = `WithAdClickLocation(${s})`, t
			}
		},
		"./src/lib/getShortenedLink.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/models/Media/index.ts"),
				r = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				a = s.n(r);
			t.a = function(e) {
				var t;
				const {
					source: s,
					isSponsored: r,
					domainOverride: o,
					callToAction: i
				} = e;
				let l = "";
				if (r) {
					if (s && s.displayText) {
						const e = 36 - (null !== (t = null == i ? void 0 : i.length) && void 0 !== t ? t : 0);
						return s.displayText.length > e ? s.displayText.substring(0, e - 3) + "..." : s.displayText
					}
					l = o || Object(n.E)(e)
				} else l = Object(n.E)(e);
				const c = a.a.parse(l),
					d = c.path || "",
					u = d.length > 7 ? d.substring(0, 7) + "..." : d;
				return (c.hostname ? c.hostname.replace("www.", "") : "") + u
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts");
			const a = [r.xc, r.ub, r.D, r.U, r.pb, r.Wb],
				o = {
					[r.Wb]: e => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[r.pb]: e => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[r.U]: e => n.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [n.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[r.D]: e => n.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [n.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[r.ub]: e => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[r.xc]: e => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				i = {
					[r.Wb]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[r.pb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[r.U]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[r.D]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[r.ub]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.xc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[r.ub]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.xc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function l(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const l = Date.now(),
					c = new Date(e).getTime(),
					d = {
						[r.xc]: "",
						[r.ub]: "",
						[r.D]: "",
						[r.U]: "",
						[r.pb]: "",
						[r.Wb]: ""
					};
				let u = c - l;
				if (u <= 0) return n.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const n of a) {
					const e = Math.floor(u / n);
					e && (d[n] = (t ? i : o)[n](e).toString()), u -= e * n
				}
				const m = a.map(e => d[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || s ? m : n.fbt._("{amount of time left} left", [n.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less": function(e, t, s) {
			e.exports = {
				arrow: "_22LJahVHZg-w-Ok4e54Ekf",
				arrowIcon: "_2vWDDpepKDRWqekB9vJEi"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsLargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "DZ4N46-GxcZN4myRo1Jov",
				metaLine: "_3RsomDBMRm4zJwQoMA4H1I",
				bodyWrapper: "_8QyJR-f-gRDrBnB_U9d9M",
				mediaWrapper: "aAoswTeXSP59D_O0jbLMm",
				textWrapper: "_2QMHsv2ah510M8yVPnDIDo",
				meta: "_3OnBTLhwkjT_qb7jDZaN9k",
				metaWrapper: "_2kgjZeq5YSkBzbG2wBt-_",
				thumbnailWrapper: "_1QpRu40opbkSjXtHCoSpBr",
				thumbnail: "_1DSgZoQLneHjWE3l_dVvDG",
				thumbnailContainer: "_1cYdO4iDTKirKmKc6pjuYh",
				flatlist: "_15Tcsv4uOZy408GvAhSm6S",
				postTitle: "_20l1A0LHN5sLYdsFa4q_mv",
				postTitleCompact: "-si4FJBkXt7YGgVfE6_gR",
				flexSpacer: "oE0WBXnmx0c_cycbOzIeZ",
				innerContainer: "_2-GgqVSOuBRpxRqecJixsh"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_380AW2tV1AjseFZoaW2xp3",
				topPosts: "_3RDCFf4elKrhJHKKZkPPD",
				topPostsLargePostsContainer: "_1iE8_7IcegvYg_Wg3A0jTR",
				largePosts: "_2jBymLZmAms1MelhCFZsUI",
				"m-large": "_2lujqkV5X6gCVwiA3jxvA1",
				mLarge: "_2lujqkV5X6gCVwiA3jxvA1",
				"m-subreddit": "_3UFkxiq8tu1X9rAES7YEk7",
				mSubreddit: "_3UFkxiq8tu1X9rAES7YEk7",
				topPostLargePosts: "_1B27sUe973sxluKyC6_HnP",
				topPost: "_3_Nr3saSmaO8BeqrN2u7Pb",
				largePost: "_21q6EU8IrGnKgnRi9Fcrko",
				topPostLargePost: "_3rjlIRqkC_nm_BoSlEQ8u-",
				smallPosts: "_1XdjckgSGhgpGEGUohL62w",
				smallPost: "_69IUkr5xucpVcbGP5l070"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsLargePostsContainer: "blJHXrhp2aDTr_eU2819a",
				postsWrapper: "_31N1g4ul5_oWaf7McMDm4z",
				arrow: "_3PrQgt3ZKPk7QhsYwrdYga",
				arrowLeft: "_1GoqoM-Z9VRJCHgekfYoZE",
				arrowRight: "SGDu37agzx7_Dwp8seKWa",
				posts: "Fa7qwmMMPp0OdoJcQuaNG",
				largePost: "_2rsZ95X0CQMIjB--1M9rHS",
				slideIn: "_11Gk71fxo8Xiw2sUIcEJd7"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-motion/lib/react-motion.js"),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				u = s("./node_modules/lodash/values.js"),
				m = s.n(u),
				p = s("./src/lib/fastdom/index.ts"),
				f = s("./src/reddit/icons/svgs/DiscoveryUnitArrow/Left/index.tsx"),
				b = s("./src/reddit/icons/svgs/DiscoveryUnitArrow/Right/index.tsx"),
				h = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less"),
				y = s.n(h);
			const x = e => a.a.createElement("button", {
					className: Object(c.a)(y.a.arrow, e.className),
					onClick: e.onClick
				}, a.a.createElement(f.a, {
					className: y.a.arrowIcon,
					seed: e.seed
				})),
				g = e => a.a.createElement("button", {
					className: Object(c.a)(y.a.arrow, e.className),
					onClick: e.onClick
				}, a.a.createElement(b.a, {
					className: y.a.arrowIcon,
					seed: e.seed
				}));
			class v extends a.a.Component {
				constructor(e) {
					super(e), this.state = {
						itemsFitInContainer: !1,
						scrollIndex: 0,
						viewableItems: {},
						visibleItemsCount: null
					}, this.makeVisibilityChangeHandler = e => t => {
						this.setState({
							viewableItems: {
								...this.state.viewableItems,
								[e]: t.isIntersecting && t.intersectionRatio >= .99
							}
						})
					}, this.getVisibleItemsCount = () => {
						return m()(this.state.viewableItems).reduce((e, t) => e + (t ? 1 : 0), 0)
					}, this.getMaxScrollIndex = e => null != e && this.props.items ? this.props.items.length - e : null, this.getSpacerCount = e => e + 1, this.getMarginLeft = e => {
						let {
							adjustment: t,
							itemWidth: s,
							scrollIndex: n,
							spacerWidth: r = 0
						} = e;
						return t - n * (s + r) + r
					}, this.getAdjustment = e => {
						let {
							itemWidth: t,
							maxScrollIndex: s,
							scrollIndex: n,
							spacerWidth: r = 0,
							visibleItemsCount: a
						} = e, o = 0;
						if (n === s && a) {
							const e = a * t + this.getSpacerCount(a) * r;
							o = (this.container ? this.container.offsetWidth : e) - e
						} else n > 0 && (o = 0);
						return o
					}, this.setContainerRef = e => {
						this.container = e
					}, this.id = "", this.spacerWidth = 0, this.itemWidth = 0, this.onClickNext = this.onClickNext.bind(this), this.onClickPrev = this.onClickPrev.bind(this)
				}
				componentDidMount() {
					const e = this.getVisibleItemsCount();
					this.setState({
						visibleItemsCount: e
					}), this.calcItemsFitInContainer()
				}
				componentDidUpdate(e, t) {
					this.calcItemsFitInContainer()
				}
				calcItemsFitInContainer() {
					p.a.read(() => {
						this.setState(e => {
							const t = this.doItemsFitInContainer({
								container: this.container,
								items: this.props.items,
								itemWidth: this.itemWidth,
								spacerWidth: this.spacerWidth
							});
							return e.itemsFitInContainer !== t ? {
								itemsFitInContainer: t
							} : null
						})
					})
				}
				doItemsFitInContainer(e) {
					let {
						container: t,
						items: s,
						itemWidth: n,
						spacerWidth: r = 0
					} = e;
					if (!t) return !0;
					const a = s.length * n,
						o = this.getSpacerCount(s.length) * r;
					return t.offsetWidth >= a + o
				}
				onClickNext() {
					const e = this.getVisibleItemsCount(),
						t = this.getMaxScrollIndex(e),
						s = Math.max(1, e),
						n = Math.min(this.state.scrollIndex + s, t);
					this.setState({
						scrollIndex: n,
						visibleItemsCount: e
					})
				}
				onClickPrev() {
					const e = this.getVisibleItemsCount(),
						t = Math.max(1, e),
						s = Math.max(0, this.state.scrollIndex - t);
					this.setState({
						scrollIndex: s,
						visibleItemsCount: e
					})
				}
			}
			var _ = v,
				j = s("./src/reddit/components/TrackingHelper/index.tsx"),
				O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/helpers/clickSourceData/index.ts"),
				C = s("./src/reddit/helpers/overlay/index.ts"),
				P = s("./src/reddit/helpers/path/index.ts"),
				S = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				E = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				w = s("./node_modules/fbt/lib/FbtPublic.js"),
				I = s("./src/lib/prettyPrintNumber/index.ts"),
				N = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				T = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				L = s("./src/reddit/constants/posts.ts"),
				M = s("./src/lib/constants/index.ts"),
				D = s("./src/reddit/components/HumanDate/index.tsx"),
				A = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				W = s("./src/reddit/hooks/useClickSourceData.ts"),
				V = s("./src/reddit/layout/row/Inline/index.tsx"),
				R = s("./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less"),
				F = s.n(R);
			var B = e => {
					const t = L.a.PROFILE,
						s = Object(A.a)(e.author, t),
						n = Object(W.a)();
					return a.a.createElement("div", {
						className: Object(c.a)(F.a.container, e.className)
					}, a.a.createElement(V.a, {
						className: F.a.layout
					}, a.a.createElement("div", {
						className: F.a.textContainer
					}, a.a.createElement("span", {
						className: F.a.description
					}, w.fbt._("posted by", null, {
						hk: "wl0iP"
					})), e.author === M.G ? a.a.createElement("span", {
						className: F.a.authorName
					}, Object(A.b)(e.author, t)) : a.a.createElement(T.a, {
						className: F.a.authorName,
						to: {
							pathname: s,
							state: n
						}
					}, Object(A.b)(e.author, t)), a.a.createElement("span", {
						className: F.a.timestamp
					}, a.a.createElement(D.d, {
						seconds: e.created / M.Wb
					})))))
				},
				U = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				Q = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				q = s("./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less"),
				H = s.n(q);
			var z = e => {
					const t = Object(A.a)(e.name, e.type);
					return a.a.createElement("div", {
						className: Object(c.a)(H.a.container, e.className)
					}, a.a.createElement(Q.a, {
						className: H.a.layout
					}, a.a.createElement("div", {
						className: H.a.iconContainer
					}, e.iconUrl ? a.a.createElement("img", {
						className: H.a.icon,
						src: e.iconUrl
					}) : a.a.createElement(U.a, {
						className: H.a.planetIcon,
						"data-redditstyle": !0
					})), a.a.createElement("div", {
						className: H.a.textContainer
					}, a.a.createElement(T.a, {
						"data-click-id": "subreddit",
						className: H.a.name,
						to: t
					}, Object(A.b)(e.displayText || e.name, e.type)), a.a.createElement("span", {
						className: H.a.separator
					}, "•"), a.a.createElement("span", {
						className: H.a.timestamp
					}, a.a.createElement(D.d, {
						seconds: e.created / M.Wb
					})))))
				},
				Z = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				G = s("./src/reddit/components/Media/index.tsx"),
				K = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				Y = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				J = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				X = s("./src/reddit/components/PostContainer/index.tsx"),
				$ = s("./src/reddit/components/PostTitle/index.tsx"),
				ee = s("./src/reddit/connectors/miniCardPost.ts"),
				te = s("./src/reddit/contexts/Post/index.tsx"),
				se = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				ne = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				re = s("./src/reddit/helpers/widgets/index.tsx"),
				ae = s("./src/reddit/models/Media/index.ts"),
				oe = s("./src/reddit/models/Post/index.ts"),
				ie = s("./src/reddit/models/Subreddit/index.ts"),
				le = s("./src/reddit/components/MiniCardPost/index.m.less"),
				ce = s.n(le),
				de = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ue = s.n(de),
				me = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/TopPostsLargePost/index.m.less"),
				pe = s.n(me);

			function fe() {
				return (fe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			class be extends a.a.Component {
				render() {
					const {
						autoplayPref: e,
						availableWidth: t,
						className: s,
						crosspostRoot: n,
						crosspostSubredditOrProfile: r,
						eventFactory: o,
						flairStyleTemplate: i,
						forceLoadMedia: l,
						hideNSFWPref: d,
						isMiniCard: u = !0,
						onClickPost: m,
						post: p,
						scrollerItemRef: f,
						shouldPause: b,
						showAuthorBlock: h = !1,
						showMetaLine: y = !0,
						showSubscribeBlock: x = !1,
						subredditOrProfile: g,
						theme: v
					} = this.props, {
						media: _
					} = n || p, j = Object(oe.q)(p);
					let O = _ && a.a.createElement(G.a, {
							autoplayPref: e,
							availableWidth: t,
							className: ce.a.media,
							forceAspectRatio: ae.b,
							imageBoxClassName: ce.a.mediaImageBox,
							imageBoxContentImageClassName: ce.a.mediaImageBoxContentImage,
							isListing: !0,
							isMiniCard: u,
							isNotCardView: !0,
							post: n || p,
							scrollerItemRef: f,
							shouldPause: b,
							shouldLoad: l,
							showCentered: !1,
							showFull: !1
						}),
						k = !1;
					_ && O && (_.type !== ae.o.RTJSON && _.type !== ae.o.TEXT ? (O = a.a.createElement("div", {
						className: pe.a.mediaWrapper
					}, O), k = !0) : _ && _.content && Object(se.a)(p, null == v ? void 0 : v.subredditContext) && (O = a.a.createElement("div", {
						className: pe.a.textWrapper
					}, O)));
					const C = !k && !j;
					let P;
					return g && (P = Object(ie.i)(g) ? Object(re.b)(g) : Object(re.c)(g)), a.a.createElement(X.b, {
						className: Object(c.a)(pe.a.container, ue.a.largeAndMediumActiveStyles, ue.a.largeAndMediumPostStyles, ce.a.postContainer, Object(ne.a)(this.props), s),
						post: p,
						onClick: m,
						eventFactory: o,
						style: {
							...Object(ne.b)(this.props.flairStyleTemplate),
							...Object(ne.d)(this.props),
							...this.props.style
						},
						"data-click-id": this.props["data-click-id"]
					}, a.a.createElement(J.a, {
						className: ce.a.backgroundWrapper,
						flairStyleTemplate: i
					}, a.a.createElement("div", {
						className: Object(c.a)(pe.a.innerContainer, ce.a.innerContainer)
					}, x && g && a.a.createElement(z, fe({
						created: p.created
					}, P)), h && g && a.a.createElement(B, fe({
						created: p.created,
						author: p.author
					}, P)), a.a.createElement($.c, {
						className: C ? pe.a.postTitle : pe.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: p,
						size: $.b.Large,
						titleColor: i && i.postTitleColor
					}), y && g && a.a.createElement(K.a, {
						className: pe.a.metaLine,
						crosspostSubredditOrProfile: r,
						hideNSFWPref: d,
						post: p,
						subredditOrProfile: g
					}), (k || j) && a.a.createElement("div", {
						className: pe.a.flexSpacer
					}), j && a.a.createElement("div", {
						className: pe.a.mediaWrapper
					}, a.a.createElement(Y.a, {
						className: pe.a.thumbnailWrapper,
						thumbnailClassName: pe.a.thumbnail,
						thumbnailContainerClassName: pe.a.thumbnailContainer,
						post: p,
						templatePlaceholderImage: i && i.postPlaceholderImage
					})), O, a.a.createElement("div", {
						className: pe.a.metaWrapper
					}, a.a.createElement("span", {
						className: pe.a.meta
					}, w.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [w.fbt._plural(p.score, "number", Object(I.b)(p.score))], {
						hk: "2ncFte"
					})), a.a.createElement("span", {
						className: pe.a.meta
					}, w.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [w.fbt._plural(p.numComments, "number", Object(I.b)(p.numComments))], {
						hk: "1QQoSA"
					}))))), a.a.createElement(Z.d, null))
				}
			}
			const he = Object(te.b)(Object(ee.a)(Object(N.a)(be)));
			class ye extends a.a.Component {
				render() {
					return a.a.createElement(he, this.props)
				}
			}
			var xe = s("./src/reddit/components/SubredditIcon/index.tsx"),
				ge = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				ve = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				_e = s("./src/reddit/models/Vote/index.ts"),
				je = s("./src/reddit/components/MiniCardPost/Placeholder/index.m.less"),
				Oe = s.n(je);

			function ke() {
				return (ke = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ce = Object(O.v)(),
				Pe = Object(l.c)({
					isFakeSubreddit: O.A
				}),
				Se = Object(i.b)(Pe),
				Ee = e => {
					const t = {
						interactive: !1,
						voteState: _e.a.notVoted
					};
					return a.a.createElement("div", {
						className: Object(c.a)(Oe.a.emptyVotes, e.className)
					}, a.a.createElement(ge.d, t), a.a.createElement("div", {
						className: Object(c.a)(Oe.a.emptyScore, Object(ve.b)({
							isLoading: e.isLoading
						}))
					}), a.a.createElement(ge.c, t))
				};
			var we = Ce(Se(Object(N.a)(e => {
					let {
						className: t,
						isLoading: s,
						showSubreddit: n,
						...r
					} = e;
					return a.a.createElement("div", {
						className: Object(c.a)(Oe.a.container, ue.a.largeAndMediumPostStyles, t)
					}, a.a.createElement("div", {
						className: Object(c.a)(Oe.a.thumbnail, Object(ve.b)({
							isLoading: s
						}))
					}), a.a.createElement("div", {
						className: Oe.a.content
					}, a.a.createElement("div", {
						className: Oe.a.titleContainer
					}, a.a.createElement("div", {
						className: Object(c.a)(Oe.a.title, Object(ve.b)({
							isLoading: s
						}))
					}), a.a.createElement("div", {
						className: Object(c.a)(Oe.a.title, Object(ve.b)({
							isLoading: s
						}))
					})), n && a.a.createElement(V.a, {
						className: Oe.a.subreddit
					}, a.a.createElement(xe.a, ke({
						className: Object(c.a)(Object(ve.b)({
							isLoading: !1
						}))
					}, r)), a.a.createElement("div", {
						className: Object(c.a)(Oe.a.subredditName, Object(ve.b)({
							isLoading: s
						}))
					})), a.a.createElement(V.a, null, a.a.createElement(Ee, ke({
						isLoading: s
					}, r)), a.a.createElement("div", {
						className: Object(c.a)(Oe.a.comments, Object(ve.b)({
							isLoading: s
						}))
					}), a.a.createElement("div", {
						className: Object(c.a)(Oe.a.share, Object(ve.b)({
							isLoading: s
						}))
					}), a.a.createElement("div", {
						className: Object(c.a)(Oe.a.ellipsis, Object(ve.b)({
							isLoading: s
						}))
					}))))
				}))),
				Ie = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less"),
				Ne = s.n(Ie);
			var Te = e => a.a.createElement("div", {
					className: Object(c.a)(Ne.a.container, e.className)
				}, a.a.createElement("div", {
					className: Ne.a.largePosts
				}, a.a.createElement(we, {
					className: Ne.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), a.a.createElement(we, {
					className: Ne.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), a.a.createElement(we, {
					className: Ne.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}))),
				Le = s("./src/reddit/components/DiscoveryUnit/Layout/PostsCarousel/index.m.less"),
				Me = s.n(Le);
			const De = 326,
				Ae = 12,
				We = {
					stiffness: 210,
					damping: 30
				},
				Ve = 100,
				Re = "post_carousel_item",
				Fe = e => {
					let {
						root: t,
						handleVisibilityChange: s,
						renderPost: r,
						...o
					} = e;
					const i = r ? r(o) : a.a.createElement(ye, o);
					return a.a.createElement(n.a, {
						root: t,
						threshold: .99,
						rootMargin: "0px 0px 0px 0px",
						onChange: s
					}, i)
				},
				Be = Object(l.c)({
					isBlockingInterstitialEnabled: E.b,
					isBlockingInterstitialV2Enabled: E.c
				}),
				Ue = Object(i.b)(Be, (e, t) => {
					let {
						discoveryUnit: s,
						searchDiscoveryUnit: n,
						pageLayer: r
					} = t;
					return {
						openOverlay: t => e(Object(C.a)({
							pathname: Object(P.b)(t.permalink),
							state: Object(k.b)(r)
						})),
						trackPostClick: (t, s) => e((e, r) => n ? S.j(r(), n, t, s) : null),
						trackPostSubredditClick: t => e((e, r) => s ? S.l(r(), s, t) : n ? S.l(r(), n, t) : null),
						showModalOnPostLinkClick: t => e(Object(d.Z)(Object(P.b)(t.permalink), t.id))
					}
				}),
				Qe = Object(O.v)();
			t.a = Qe(Ue(Object(j.c)(class extends _ {
				constructor(e) {
					super(e), this.state = {
						scrollIndex: 0,
						viewableItems: {},
						visibleItemsCount: null,
						itemsFitInContainer: !1
					}, this.onClickPost = (e, t) => {
						this.props.isBlockingInterstitialEnabled || this.props.isBlockingInterstitialV2Enabled ? (e.preventDefault(), this.props.showModalOnPostLinkClick(t)) : this.props.openOverlay(t), this.props.trackPostClick(t.id, this.props.searchOptions)
					}, this.itemPostClickEventFactory = (e, t) => {
						const {
							discoveryUnit: s,
							discoveryUnitSubreddit: n,
							listingKey: r,
							pageLayer: a,
							searchDiscoveryUnit: o,
							searchOptions: i
						} = this.props;
						let l;
						return (l = "subreddit" === t && i ? S.s(i, a, r, o) : o && i ? S.t(i, a, null, r, o) : S.i(s, n))(e)
					}, this.renderPost = (e, t) => {
						const {
							isMiniCard: s,
							renderPost: n,
							singleSubredditMode: r
						} = this.props;
						return a.a.createElement(Fe, {
							"data-click-id": Re,
							className: Me.a.largePost,
							eventFactory: this.itemPostClickEventFactory,
							forceLoadMedia: !0,
							isMiniCard: s,
							postId: e,
							onClickPost: this.onClickPost,
							showAuthorBlock: !!r,
							showMetaLine: !1,
							showSubscribeBlock: !r,
							handleVisibilityChange: this.makeVisibilityChangeHandler(t),
							renderPost: n,
							root: this.id,
							key: e
						})
					}, this.renderPosts = e => a.a.createElement("div", {
						className: Me.a.posts,
						style: e
					}, this.props.items.map(this.renderPost)), this.id = "PostsCarousel", this.itemWidth = e.itemWidth
				}
				componentDidMount() {
					super.componentDidMount()
				}
				componentDidUpdate(e, t) {
					if (super.componentDidUpdate(e, t), this.state !== t) {
						const e = Object.keys(this.state.viewableItems).filter(e => !1 === t.viewableItems[e] && !0 === this.state.viewableItems[e]);
						this.trackPostsViewed(this.props, e)
					}
				}
				trackPostsViewed(e, t) {
					e.isLoading || 0 === e.items.length || t.forEach(t => {
						this.props.searchDiscoveryUnit ? e.onPostView(this.props.searchDiscoveryUnit, e.items[t], e.searchOptions, e.listingKey, e.pageLayer) : this.props.discoveryUnit && e.onPostView(this.props.discoveryUnit, e.items[t])
					})
				}
				trackArrowClick() {
					const {
						discoveryUnit: e,
						onArrowClick: t,
						searchDiscoveryUnit: s,
						searchOptions: n
					} = this.props, r = s || e;
					r && t && t(r, n)
				}
				onClickNext() {
					super.onClickNext(), this.trackArrowClick()
				}
				onClickPrev() {
					super.onClickPrev(), this.trackArrowClick()
				}
				render() {
					const {
						isHidden: e,
						leftArrowClassName: t,
						rightArrowClassName: s,
						seed: n,
						shouldSlideIn: r,
						springConfig: i
					} = this.props;
					if (this.props.isLoading || 0 === this.props.items.length) return a.a.createElement(Te, {
						shouldUseSmallCardLayout: !1,
						showSubreddit: this.props.showSubreddit
					});
					const {
						itemWidth: l = De
					} = this.props, {
						scrollIndex: d,
						visibleItemsCount: u
					} = this.state, m = this.getMaxScrollIndex(u), p = this.getAdjustment({
						itemWidth: l,
						maxScrollIndex: m,
						scrollIndex: d,
						spacerWidth: Ae,
						visibleItemsCount: u
					}), f = e ? Ve : this.getMarginLeft({
						adjustment: p,
						itemWidth: l,
						scrollIndex: d,
						spacerWidth: Ae
					});
					return a.a.createElement("div", {
						className: Object(c.a)(Me.a.postsWrapper, this.props.className),
						id: this.id,
						ref: this.setContainerRef
					}, a.a.createElement(o.Motion, {
						defaultStyle: {
							marginLeft: e || r ? Ve : 0
						},
						style: {
							marginLeft: Object(o.spring)(f, i || We)
						}
					}, this.renderPosts), 0 !== d && a.a.createElement(x, {
						className: Object(c.a)(Me.a.arrowLeft, t),
						onClick: this.onClickPrev,
						seed: n
					}), !this.state.itemsFitInContainer && (null == m || d < m) && a.a.createElement(g, {
						className: Object(c.a)(Me.a.arrowRight, r && !e && Me.a.slideIn, s),
						onClick: this.onClickNext,
						seed: n
					}))
				}
			})))
		},
		"./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less": function(e, t, s) {
			e.exports = {
				layout: "_2REdLXF0mpSj8m3oeNFnQI",
				textContainer: "_25evCORf3YPgobOP7A0KBH",
				timestamp: "_12ZMpGOwwzQ5LQDmj2sycd",
				authorName: "_2cI137mSn1p19S7GzCn4aj",
				description: "_3WMX64jyXL-FNQ0kNYl267"
			}
		},
		"./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less": function(e, t, s) {
			e.exports = {
				layout: "_3w4KSJJGE7TS9xZVlkChNX",
				iconContainer: "_8eVKEiEgNTHopUF8DqZhu",
				separator: "_2dPygXwKlm02lGuxfWM6hJ",
				subscribeIcon: "_3C-lBXRQY9_CCGVZfQJODL",
				subscribeButton: "_26ierA6Rodr6VMGHkKwTPE",
				textContainer: "ZseEDtQar85FcCdC4sPE7",
				timestamp: "_3AdY0o-9CnsxnxO_VDj8Zh",
				icon: "_3YX9w39yU25-vbz-5gk236",
				planetIcon: "f6zRrQi4zqlZ4aoPrzGIN",
				name: "lyBM6dpYVMHQASC9SYGiO",
				subscribers: "uPyUGlwdDzPsq3i6O_w_G",
				right: "_9gZLJghZHrkIQlPvwZYDE",
				visitCommunity: "_1BAg1jhNwLExU7vX1TAvxR",
				description: "_3PWARIYmlsbZulr9sGQAVC",
				descriptionLine: "_2-CpYCxMGuxCYjr8tTgDTR"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_35Bx3s8VlFspHwPlg1MaHt",
				subredditNameLink: "_20yDd2SHTuiJkQnTV4zehJ",
				subredditIcon: "_32Ni_aGBoPzRxNSy5eC_ck",
				CrosspostIcon: "y4hzYjyQqdKpwuDyNnLeW",
				crosspostIcon: "y4hzYjyQqdKpwuDyNnLeW"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				c = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				d = s("./src/reddit/helpers/name/index.ts"),
				u = s("./src/reddit/icons/fonts/index.tsx"),
				m = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				p = s.n(m);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: r,
					post: m,
					subredditOrProfile: f
				} = e;
				return a.a.createElement("div", {
					className: Object(o.a)(p.a.container, t)
				}, a.a.createElement(c.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: f.url
				}, a.a.createElement(l.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: r,
					subredditOrProfile: f
				}), a.a.createElement("span", null, f.displayText)), ((e, t) => {
					if (t) return a.a.createElement("div", {
						role: "img",
						"aria-label": n.fbt._("Crossposted by{author}from{community}", [n.fbt._param("author", Object(d.e)(e)), n.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, a.a.createElement(u.a, {
						name: "crosspost",
						className: p.a.CrosspostIcon
					}))
				})(m.author, s), f && f.isQuarantined && a.a.createElement(i.a, null))
			}
		},
		"./src/reddit/components/MiniCardPost/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "qxO-jkRl1-0EUFMSW12Wx",
				thumbnail: "_10app6y4qukOnb1vd3WjaL",
				content: "Dmp1nT-wBa1YnTs1m5Qh-",
				titleContainer: "_3zDhT2pkq9c_2I1Wc0TC7W",
				title: "_1baTc1hWul6JGRus85W_n9",
				subreddit: "_1QAmOEgKAW-xepM1iAQ1vt",
				subredditIcon: "_2kjKnQFVUV8rujMRQ0FJcM",
				subredditName: "_1gWkHloK0RuxI3PqEBqAlk",
				comments: "_3Se1TreUiuh_QYZKmggj-E",
				share: "_1auh4Ct-kA4za4GqRMTChm",
				ellipsis: "_3KZqW8v85dlRDNmHXcrU5X",
				emptyScore: "_1vYoQQMevPpZ7Szpl9imM",
				emptyVotes: "zNcTz0MkZAJvitPlo_eI7"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1HoOlmppFDBC4s5XWY-Qcd",
				thumbnail: "_1XZerRCUnHmbtEN1gqPwnw",
				thumbnailContainer: "_3fS9xUAmm4zWkzfM1ce7Jk",
				thumbnailLinkIcon: "_2JCMpuchwaEmL9S0QsJ9Ok",
				thumbnailLinkText: "_2vJWD7kgxbAQRGL328NxHg",
				thumbnailOutboundLinkIcon: "_4GTpE-l9TNXVeix3ZOE-_"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				l = s.n(i);

			function c(e) {
				const {
					source: t
				} = e.post;
				return r.a.createElement("div", {
					className: Object(a.a)(l.a.container, e.className)
				}, r.a.createElement(o.b, {
					className: Object(a.a)(l.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(a.a)(l.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(a.a)(l.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
					linkTextClassName: l.a.thumbnailLinkText,
					outboundLinkIconClassName: l.a.thumbnailOutboundLinkIcon,
					post: e.post,
					showContentType: e.showPlaceholderContentType,
					templatePlaceholderImage: e.templatePlaceholderImage,
					text: t ? t.url : "",
					usePreview: e.usePreview
				}))
			}
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/components/HumanDate/index.tsx"),
				a = s("./src/lib/timeUntil/index.ts"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function c(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return i.a.createElement("span", {
					className: e.className
				}, t ? l._("Voting closed {timeAgo}", [l._param("timeAgo", i.a.createElement(r.d, {
					seconds: e.poll.endsAt / n.Wb
				}))], {
					hk: "3OERID"
				}) : Object(a.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(e, t, s) {
			e.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				l = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				c = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				d = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				u = s.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(l.a)(Object(o.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: o,
					post: l,
					redditStyle: d,
					theme: p,
					overrideBackgroundColor: f,
					...b
				} = e;
				return r.a.createElement("div", m({
					className: Object(a.a)(u.a.backgroundWrapper, s),
					style: f || Object(i.c)(n, e),
					onClick: o,
					"data-adclicklocation": c.a.BACKGROUND
				}, b), t)
			}))
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/ads/index.ts"),
				i = s("./src/reddit/components/AdViewability/index.tsx"),
				l = s("./src/reddit/helpers/trackers/gallery.ts"),
				c = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				d = s("./src/reddit/hooks/useTracking.ts");
			var u = r.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(d.a)(),
						a = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(l.d(e.postId))
							})
						}, [s, e.postId]),
						o = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(c.a)(t, a, o), r.a.createElement("div", {
						role: "presentation"
					}, r.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				f = s("./src/reddit/models/Media/index.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/telemetry.ts"),
				y = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/objectSelector/index.ts"),
				g = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				v = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				_ = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				j = s("./src/reddit/components/PostContainer/index.m.less"),
				O = s.n(j);
			const k = Object(p.a)(() => Object(a.c)({
					basePixelMetadata: Object(x.a)((e, t) => {
						let {
							post: s
						} = t;
						return Object(b.b)(e, s.id)
					}),
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: s
						} = t;
						return Object(b.i)(e, {
							postId: s.id
						})
					},
					pageType: e => Object(h.d)(e).pageType
				})),
				C = "post-container";
			class P extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						imageGalleryCurrentItem: a,
						makePostContainerId: c,
						post: d,
						onClick: m,
						pageType: p,
						sendEvent: b,
						style: h,
						ref: x,
						shouldAddGalleryViewability: g = !0
					} = this.props, v = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: h,
						ref: x,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => m && m(s, d, t, a, p))(s), d.id && a) {
								const {
									source: e
								} = Object(o.t)(d, a);
								e && e.outboundUrl && b(Object(l.c)(d.id, e.outboundUrl))
							}
						},
						className: Object(y.a)(O.a.WrappedPost, n, `Post ${d.id}`, {
							promotedlink: d.isSponsored
						}),
						"data-testid": C,
						id: c ? c(d.id) : d.id,
						tabIndex: -1,
						"data-adclicklocation": _.a.BACKGROUND
					}, s), j = !!d.media && d.media.type === f.o.VIDEO;
					return (e => d.media && Object(f.G)(d.media) && g ? r.a.createElement(u, {
						postId: d.id
					}, e) : e)((e => d.isSponsored || j ? r.a.createElement(i.a, {
						post: d,
						trackDisplay: !0
					}, e) : e)(v))
				}
			}
			t.b = k(Object(v.a)(Object(g.a)(Object(m.c)(P))))
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, s) {
			e.exports = {
				outboundLinkIcon: "qgDkGQIoFEpMMeNtfI0BY",
				pollMeta: "FKej75-i0z1XubMqeVh9Q",
				styledLink: "SQnoC3ObvgnGjWt90zD9Z",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				postTitleVisibility: "_1hLrLjnE1G_RBCNcN9MVQf",
				blur: "_1Y3R-LNfq0EOkZUcePSt1j",
				ExtraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				extraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				Large: "_3wqmjmv3tb_k-PROt7qFZe",
				large: "_3wqmjmv3tb_k-PROt7qFZe",
				Medium: "_1zpZYP8cFNLfLDexPY65Y7",
				medium: "_1zpZYP8cFNLfLDexPY65Y7",
				Small: "uWdXen_41bh0iwLrgzFkc",
				small: "uWdXen_41bh0iwLrgzFkc",
				ExtraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				extraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				Metadata: "_2_YD0sbnnLrJvpCrMxBFaC",
				metadata: "_2_YD0sbnnLrJvpCrMxBFaC",
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return V
			})), s.d(t, "a", (function() {
				return Y
			}));
			var n = s("./src/config.ts"),
				r = s("./node_modules/polished/dist/polished.es.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/controls/OutboundLink/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				h = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				y = s("./src/reddit/actions/post.ts"),
				x = s("./src/reddit/constants/adEvents.ts"),
				g = s("./src/reddit/helpers/path/index.ts"),
				v = s("./src/reddit/hooks/useClickSourceData.ts"),
				_ = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				j = s("./src/reddit/hooks/usePostContext.ts"),
				O = s("./src/reddit/hooks/useTheme.ts"),
				k = s("./src/reddit/icons/fonts/index.tsx"),
				C = s("./src/reddit/models/Flair/index.ts"),
				P = s("./src/reddit/models/Media/index.ts"),
				S = s("./src/reddit/models/Post/index.ts"),
				E = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				w = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				I = s("./src/lib/getShortenedLink.ts"),
				N = s("./src/reddit/components/FlairWrapper/index.tsx"),
				T = s("./node_modules/fbt/lib/FbtPublic.js"),
				L = s("./src/lib/prettyPrintNumber/index.ts"),
				M = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				D = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				A = s.n(D);
			const W = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var V, R = Object(i.b)(W)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return Object(_.a)() ? null : o.a.createElement("div", {
						className: Object(u.a)(e.className, A.a.proposalMetaData)
					}, o.a.createElement("span", null, T.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [T.fbt._param("count", Object(L.a)(n)), T.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && o.a.createElement(M.a, {
						className: A.a.proposalExpiry,
						poll: t
					}))
				})),
				F = s("./src/reddit/components/SEOTitle/index.tsx"),
				B = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				U = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Q = s("./src/reddit/selectors/user.ts"),
				q = s("./src/telemetry/models/Outbound.ts"),
				H = s("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				z = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				Z = s("./src/reddit/components/PostTitle/index.m.less"),
				G = s.n(Z);

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(V || (V = {}));
			const Y = e => {
					let {
						size: t,
						titleColor: s,
						titleType: n,
						nowrap: r,
						children: a,
						className: i,
						redditStyle: l,
						shouldBlurTitle: c
					} = e;
					const d = Object(O.a)();
					let m = "";
					switch (t) {
						case V.ExtraLarge:
							m = G.a.ExtraLarge;
							break;
						case V.Large:
							m = G.a.Large;
							break;
						case V.Medium:
							m = G.a.Medium;
							break;
						case V.Small:
							m = G.a.Small;
							break;
						case V.ExtraSmall:
							m = G.a.ExtraSmall;
							break;
						case V.Metadata:
							m = G.a.Metadata
					}
					return o.a.createElement("div", {
						className: Object(u.a)(G.a.Title, i, m, {
							[G.a.isNoWrap]: r,
							[G.a.blur]: c
						}),
						style: {
							"--posttitletextcolor": s || Object(w.a)({
								redditStyle: l,
								theme: d
							}).titleText
						}
					}, n ? o.a.createElement(F.b, {
						type: n
					}, a) : a)
				},
				J = e => {
					let {
						className: t,
						disableVisited: s,
						titleColor: n,
						children: r,
						...a
					} = e;
					return o.a.createElement(l.a, K({}, a, {
						className: Object(u.a)(t, G.a.styledLink, {
							[G.a.isVisitedEnabled]: !s
						})
					}), r)
				},
				X = e => {
					let {
						disableVisited: t,
						nowrap: s,
						className: n,
						children: r
					} = e;
					return o.a.createElement("div", {
						className: Object(u.a)(G.a.titleContainer, n, {
							[G.a.isNoWrap]: s,
							[G.a.isVisitedEnabled]: !t
						})
					}, r)
				},
				$ = Object(c.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(p.r)(e, {
							pageLayer: s
						})
					},
					isNsfwBlurSubreddit: U.e,
					shouldOpenPostInNewTab: Q.lb
				}),
				ee = e => {
					const {
						post: t
					} = e, {
						isSponsored: s
					} = t, n = Object(i.d)(), r = Object(v.a)(), a = Object(i.e)(B.b), l = Object(i.e)(B.c), c = e => {
						(a || l) && (e.preventDefault(), n(Object(y.Z)(Object(g.b)(t.permalink), t.id))), t.isSponsored && Object(S.A)(t) && n(Object(y.y)(t, x.a.Click))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return o.a.createElement(X, {
						nowrap: e.nowrap
					}, o.a.createElement(te, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return o.a.createElement(f.b, {
						href: t.source.url,
						isSponsored: s,
						postId: t.id,
						source: t.source
					}, o.a.createElement(te, e)); {
						const n = t.permalink,
							a = e.isCommentPermalink ? Object(g.b)(n) : Object(h.a)(n, void 0, r);
						return o.a.createElement(X, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, s && !Object(S.A)(t) ? ((e, t) => {
							const {
								source: s
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return s ? o.a.createElement(f.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, o.a.createElement(te, t)) : o.a.createElement(te, t)
						})(t, e) : o.a.createElement(J, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: a,
							onClick: c
						}, o.a.createElement(te, e)))
					}
				},
				te = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: s,
						post: n
					} = e;
					let r = e.format ? e.format(n) : n.title;
					s && "string" == typeof r && (r = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(r));
					const a = e.isCommentsPage ? F.a.PostComments : F.a.PostItem,
						i = !(!e.isNsfwBlurSubreddit || !e.post.isNSFW);
					return o.a.createElement(Y, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: i,
						size: e.size,
						titleColor: e.titleColor,
						titleType: a
					}, t && o.a.createElement(N.a, {
						titleFlair: t,
						nowrap: !0,
						post: n,
						sendEvent: e.sendEvent
					}), r)
				},
				se = e => {
					const {
						hideSourceLink: t,
						isNsfwBlurSubreddit: s,
						post: n
					} = e, {
						isSponsored: r
					} = n, a = e.isCommentsPage ? q.SourceElement.PostLink : q.SourceElement.ListingPostLink;
					if (Object(_.a)()) return null;
					if (s && n.isNSFW) return null;
					const i = !t && !e.isCrosspost && e.size !== V.Large && !n.isSponsored && (n.source || n.media && (n.media.type === P.o.GIFVIDEO || n.media.type === P.o.IMAGE || n.media.type === P.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return o.a.createElement(b.a, {
							className: e.outboundLinkClassName,
							href: Object(P.E)(n),
							isSponsored: r,
							postId: n.id,
							source: n.source,
							sourceElement: a
						}, Object(I.a)(n), !n.isSponsored && o.a.createElement(k.a, {
							name: "external_link",
							className: G.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== V.Large && e.size !== V.ExtraLarge) return o.a.createElement(b.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: r,
						postId: n.id,
						source: n.source,
						sourceElement: a
					}, Object(I.a)(n), !n.isSponsored && o.a.createElement(k.a, {
						name: "external_link",
						className: G.a.outboundLinkIcon
					}));
					return null
				};
			class ne extends o.a.Component {
				getDynamicStyleTags() {
					return o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${G.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(r.c)(.45,Object(w.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(r.c)(.45,this.props.titleColor||Object(w.a)(this.props).titleText,Object(w.a)(this.props).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(r.c)(.45,Object(w.a)(this.props).bodyText,Object(w.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: s,
						isCommentsPage: r,
						isOverlay: a,
						poll: i,
						post: l,
						showNSFWSpoilerFlairsOnly: c,
						hideNSFWSpoilerFlair: d,
						onClick: m
					} = this.props, p = s === C.b.Left, f = Object(N.b)(l), {
						leftFlair: b,
						rightFlair: h
					} = Object(H.a)({
						flair: f,
						isFlairPositionedLeft: p,
						showNSFWSpoilerFlairsOnly: c,
						hideNSFWSpoilerFlair: d
					}), y = !a && !r && !t, x = y && b && b.length > 0, g = y && h && h.length > 0;
					return o.a.createElement("div", {
						className: Object(u.a)(G.a.Component, e, l.id),
						ref: this.props.innerRef,
						"data-adclicklocation": z.a.TITLE,
						onClick: m
					}, !c && x && o.a.createElement(N.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: l,
						sendEvent: this.props.sendEvent
					}), !Object(E.b)(l) && o.a.createElement(ee, K({}, this.props, {
						leftFlair: c ? b : void 0
					})), i && o.a.createElement(R, {
						className: G.a.pollMeta,
						pollId: i.id
					}), o.a.createElement(se, this.props), g && o.a.createElement(N.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: l,
						sendEvent: this.props.sendEvent
					}), o.a.createElement("div", {
						className: G.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${n.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = o.a.memo((function(e) {
				const t = Object(p.ib)(),
					s = Object(p.x)(t),
					n = Object(j.a)(),
					r = Object(i.e)(r => $(r, {
						...n,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					a = Object(O.a)(),
					l = Object(m.b)();
				return n ? o.a.createElement(ne, K({
					pageLayer: t,
					isCommentPermalink: s
				}, n, r, e, {
					theme: a,
					sendEvent: l
				})) : null
			}))
		},
		"./src/reddit/components/QuarantinedLabel/index.m.less": function(e, t, s) {
			e.exports = {
				quarantineIcon: "_3fdQM74ud_8KssWgeznOrR",
				Container: "_3Ph6ensT9WFRjOg8dQQKJK",
				container: "_3Ph6ensT9WFRjOg8dQQKJK"
			}
		},
		"./src/reddit/components/QuarantinedLabel/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./src/higherOrderComponents/asTooltip.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				u = s("./src/reddit/components/QuarantinedLabel/index.m.less"),
				m = s.n(u);
			const p = ["center", "top"],
				f = ["center", "bottom"],
				b = i.a.div("Container", m.a),
				h = Object(o.a)(l.b),
				y = Object(c.v)({
					isProfileListingPage: c.K
				});
			class x extends a.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						showTooltip: !1
					}
				}
				render() {
					const {
						isProfileListingPage: e
					} = this.props;
					if (!e) return null;
					const {
						showTooltip: t
					} = this.state;
					return a.a.createElement(b, {
						innerRef: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, a.a.createElement(d.a, {
						className: m.a.quarantineIcon
					}), n.fbt._("quarantined", null, {
						hk: "3hfN4T"
					}), a.a.createElement(h, {
						text: n.fbt._("This post was submitted in a quarantined community", null, {
							hk: "1Rebnc"
						}),
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: p,
						tooltipPosition: f
					}))
				}
			}
			t.a = y(x)
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, s) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				r = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				a = s.n(r);
			const o = s("./src/lib/lessComponent.tsx").a.wrapped(n.a, "SubredditName", a.a);
			t.a = o
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "d", (function() {
				return y
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				a = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				o = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				d = s.n(c);
			const u = {},
				m = e => Object(i.g)(Object(l.a)(e).post, Object(l.a)(e).backgroundImage, Object(l.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(l.a)(t).post, e.postBackgroundImage, Object(l.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				f = e => Object(n.k)(.2, e),
				b = e => e && e.postBackgroundColor ? {
					backgroundColor: f(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? d.a.mIsActive : void 0,
				y = e => {
					const t = Object(a.a)(Object(r.a)(e), o.a.actionIcon, o.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/hooks/useIsRemovedOrDeletedPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/selectors/removedPosts.ts");
			const a = () => Object(n.e)(e => Object(r.d)(e))
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				r = s("./src/lib/CSSVariableProvider/index.tsx");

			function a() {
				return Object(n.useContext)(r.b)
			}
		},
		"./src/reddit/icons/svgs/DiscoveryUnitArrow/Left/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/constants/colors.ts");
			const o = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return `${t}-du-left-${e}`
			};
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = o("a", t), n = o("b", t), i = o("c", t), l = o("d", t);
				return r.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "4 0 45 45",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("defs", null, r.a.createElement("circle", {
					id: n,
					cx: "18",
					cy: "18",
					r: "18"
				}), r.a.createElement("filter", {
					id: s,
					x: "-33.3%",
					y: "-25%",
					width: "166.7%",
					height: "166.7%"
				}, r.a.createElement("feOffset", {
					dy: "3",
					in: "SourceAlpha",
					result: "shadowOffsetOuter1"
				}), r.a.createElement("feGaussianBlur", {
					in: "shadowOffsetOuter1",
					result: "shadowBlurOuter1"
				}), r.a.createElement("feColorMatrix", {
					in: "shadowBlurOuter1",
					values: "0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.105882353 0 0 0 0.3 0"
				})), r.a.createElement("path", {
					id: i,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), r.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, r.a.createElement("g", {
					fillRule: "nonzero",
					transform: "matrix(-1 0 0 1 43 4)"
				}, r.a.createElement("use", {
					fill: a.a.black,
					filter: `url(#${s})`,
					xlinkHref: `#${n}`
				}), r.a.createElement("use", {
					fill: a.a.white,
					xlinkHref: `#${n}`
				})), r.a.createElement("g", {
					transform: "matrix(0 1 1 0 17.174 14.174)"
				}, r.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), r.a.createElement("mask", {
					id: l,
					fill: a.a.white
				}, r.a.createElement("use", {
					xlinkHref: `#${i}`
				})), r.a.createElement("use", {
					fill: a.a.black,
					xlinkHref: `#${i}`
				}), r.a.createElement("g", {
					fill: a.a.alienblue,
					mask: `url(#${l})`
				}, r.a.createElement("path", {
					d: "M0 0h16v16H0z"
				})))))
			}
		},
		"./src/reddit/icons/svgs/DiscoveryUnitArrow/Right/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/constants/colors.ts");
			const o = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return `${t}-du-right-${e}`
			};
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = o("a", t), n = o("b", t), i = o("c", t), l = o("d", t);
				return r.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "4 0 45 45",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("defs", null, r.a.createElement("circle", {
					id: n,
					cx: "18",
					cy: "18",
					r: "18"
				}), r.a.createElement("filter", {
					id: s,
					x: "-33.3%",
					y: "-25%",
					width: "166.7%",
					height: "166.7%"
				}, r.a.createElement("feOffset", {
					dy: "3",
					in: "SourceAlpha",
					result: "shadowOffsetOuter1"
				}), r.a.createElement("feGaussianBlur", {
					in: "shadowOffsetOuter1",
					result: "shadowBlurOuter1"
				}), r.a.createElement("feColorMatrix", {
					in: "shadowBlurOuter1",
					values: "0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.105882353 0 0 0 0.3 0"
				})), r.a.createElement("path", {
					id: i,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), r.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, r.a.createElement("g", {
					fillRule: "nonzero",
					transform: "translate(7 4)"
				}, r.a.createElement("use", {
					fill: a.a.black,
					filter: `url(#${s})`,
					xlinkHref: `#${n}`
				}), r.a.createElement("use", {
					fill: a.a.white,
					xlinkHref: `#${n}`
				})), r.a.createElement("g", {
					transform: "rotate(90 9.326 23.5)"
				}, r.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), r.a.createElement("mask", {
					id: l,
					fill: a.a.white
				}, r.a.createElement("use", {
					xlinkHref: `#${i}`
				})), r.a.createElement("use", {
					fill: a.a.black,
					xlinkHref: `#${i}`
				}), r.a.createElement("g", {
					fill: a.a.alienblue,
					mask: `url(#${l})`
				}, r.a.createElement("path", {
					d: "M0 0h16v16H0z"
				})))))
			}
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, s) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/layout/row/Inline/index.m.less"),
				a = s.n(r);
			t.a = n.a.div("inlineRow", a.a)
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.m.less": function(e, t, s) {
			e.exports = {
				left: "_3YRHtGWABKh4OVO3s5gJwt",
				right: "_1IPWlMFPB_zPPajVPKk5Dy",
				expandRightContainer: "_2CUZHyZpRYmdvLE9tOI-2L"
			}
		},
		"./src/reddit/layout/twoCol/ExpandRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				l = s.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(a.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: n,
					widthLeft: a,
					gutter: i,
					...d
				} = e;
				return r.a.createElement("div", c({
					className: Object(o.a)(l.a.expandRightContainer, t)
				}, d), r.a.createElement("div", {
					className: l.a.left,
					style: {
						flexBasis: a,
						height: n,
						marginRight: i
					}
				}, Array.isArray(s) && s[0]), r.a.createElement("div", {
					className: l.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		},
		"./src/reddit/selectors/removedPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "d", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				o = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				i = s("./src/reddit/models/Media/index.ts"),
				l = s("./src/reddit/models/Post/index.ts"),
				c = s("./src/reddit/selectors/user.ts");
			const d = new Set([l.g.AntiEvilOps, l.g.AutomodFiltered, l.g.CommunityOps, l.g.ContentTakedown, l.g.CopyrightTakedown, l.g.Moderator, l.g.Reddit]),
				u = new Set([l.g.Author, l.g.AuthorDeleted]),
				m = Object(r.a)(a.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return d.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = n.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let r = Object(o.b)(e);
					return r || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== i.o.TEXT || (r = e.media.markdownContent), r === s
				}),
				p = Object(r.a)(a.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return u.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = n.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let r = Object(o.b)(e);
					return r || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== i.o.TEXT || (r = e.media.markdownContent), r === s
				}),
				f = Object(r.a)(a.a, e => {
					if (!e) return !1;
					if (e && e.isSpam) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return u.has(t)
					}
					return !(e.created > Date.UTC(2019, 0))
				}),
				b = Object(r.a)(c.m, a.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				h = Object(r.a)(a.a, e => !(!e || !1 !== e.isRobotIndexable))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditTopContent~TopWeekPostsDiscoveryUnit.d704efde2447a42ad053.js.map