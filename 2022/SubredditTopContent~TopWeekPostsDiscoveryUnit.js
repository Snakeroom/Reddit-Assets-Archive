// https://www.redditstatic.com/desktop2x/SubredditTopContent~TopWeekPostsDiscoveryUnit.b709068cbb50cf0adcbb.js
// Retrieved at 12/6/2022, 11:10:04 AM by Reddit Dataminer v1.0.0
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
			var i = a(s("./node_modules/react-motion/lib/mapToZero.js")),
				o = a(s("./node_modules/react-motion/lib/stripStyle.js")),
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
								i = s.currentVelocity,
								o = s.lastIdealStyle,
								l = s.lastIdealVelocity;
							for (var c in e)
								if (Object.prototype.hasOwnProperty.call(e, c)) {
									var d = e[c];
									"number" == typeof d && (t || (t = !0, a = n({}, a), i = n({}, i), o = n({}, o), l = n({}, l)), a[c] = d, i[c] = 0, o[c] = d, l[c] = 0)
								} t && r.setState({
								currentStyle: a,
								currentVelocity: i,
								lastIdealStyle: o,
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
									i = Math.floor(r.accumulatedTime / f),
									o = {},
									d = {},
									m = {},
									p = {};
								for (var b in t)
									if (Object.prototype.hasOwnProperty.call(t, b)) {
										var h = t[b];
										if ("number" == typeof h) m[b] = h, p[b] = 0, o[b] = h, d[b] = 0;
										else {
											for (var y = r.state.lastIdealStyle[b], x = r.state.lastIdealVelocity[b], g = 0; g < i; g++) {
												var v = l.default(f / 1e3, y, x, h.val, h.stiffness, h.damping, h.precision);
												y = v[0], x = v[1]
											}
											var _ = l.default(f / 1e3, y, x, h.val, h.stiffness, h.damping, h.precision),
												j = _[0],
												O = _[1];
											m[b] = y + (j - y) * a, p[b] = x + (O - x) * a, o[b] = y, d[b] = x
										}
									} r.animationID = null, r.accumulatedTime -= i * f, r.setState({
									currentStyle: m,
									currentVelocity: p,
									lastIdealStyle: o,
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
							n = t || o.default(s),
							r = i.default(n);
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
			var i = a(s("./node_modules/react-motion/lib/mapToZero.js")),
				o = a(s("./node_modules/react-motion/lib/stripStyle.js")),
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
						for (var t = r.state, s = t.currentStyles, a = t.currentVelocities, i = t.lastIdealStyles, o = t.lastIdealVelocities, l = !1, c = 0; c < e.length; c++) {
							var d = e[c],
								u = !1;
							for (var m in d)
								if (Object.prototype.hasOwnProperty.call(d, m)) {
									var p = d[m];
									"number" == typeof p && (u || (u = !0, l = !0, s[c] = n({}, s[c]), a[c] = n({}, a[c]), i[c] = n({}, i[c]), o[c] = n({}, o[c])), s[c][m] = p, a[c][m] = 0, i[c][m] = p, o[c][m] = 0)
								}
						}
						l && r.setState({
							currentStyles: s,
							currentVelocities: a,
							lastIdealStyles: i,
							lastIdealVelocities: o
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
							for (var a = (r.accumulatedTime - Math.floor(r.accumulatedTime / f) * f) / f, i = Math.floor(r.accumulatedTime / f), o = [], d = [], m = [], p = [], b = 0; b < t.length; b++) {
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
											for (var O = r.state.lastIdealStyles[b][_], k = r.state.lastIdealVelocities[b][_], C = 0; C < i; C++) {
												var P = l.default(f / 1e3, O, k, j.val, j.stiffness, j.damping, j.precision);
												O = P[0], k = P[1]
											}
											var S = l.default(f / 1e3, O, k, j.val, j.stiffness, j.damping, j.precision),
												E = S[0],
												w = S[1];
											y[_] = O + (E - O) * a, x[_] = k + (w - k) * a, g[_] = O, v[_] = k
										}
									} m[b] = y, p[b] = x, o[b] = g, d[b] = v
							}
							r.animationID = null, r.accumulatedTime -= i * f, r.setState({
								currentStyles: m,
								currentVelocities: p,
								lastIdealStyles: o,
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
						n = t || s().map(o.default),
						r = n.map((function(e) {
							return i.default(e)
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
			var i = a(s("./node_modules/react-motion/lib/mapToZero.js")),
				o = a(s("./node_modules/react-motion/lib/stripStyle.js")),
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

			function y(e, t, s, n, r, a, o, l, d) {
				for (var u = c.default(n, r, (function(e, n) {
						var r = t(n);
						return null == r ? (s({
							key: n.key,
							data: n.data
						}), null) : m.default(a[e], r, o[e]) ? (s({
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
						var j = i.default(x.style);
						f[y] = j, h[y] = j
					} else p[y] = a[g], b[y] = l[g], f[y] = o[g], h[y] = d[g]
				}
				return [u, p, f, b, h]
			}
			var x = function(e) {
				function t(s) {
					var r = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, s), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = y(r.props.willEnter, r.props.willLeave, r.props.didLeave, r.state.mergedPropsStyles, e, r.state.currentStyles, r.state.currentVelocities, r.state.lastIdealStyles, r.state.lastIdealVelocities), s = t[0], a = t[1], i = t[2], o = t[3], l = t[4], c = 0; c < e.length; c++) {
							var d = e[c].style,
								u = !1;
							for (var m in d)
								if (Object.prototype.hasOwnProperty.call(d, m)) {
									var p = d[m];
									"number" == typeof p && (u || (u = !0, a[c] = n({}, a[c]), i[c] = n({}, i[c]), o[c] = n({}, o[c]), l[c] = n({}, l[c]), s[c] = {
										key: s[c].key,
										data: s[c].data,
										style: n({}, s[c].style)
									}), a[c][m] = p, i[c][m] = 0, o[c][m] = p, l[c][m] = 0, s[c].style[m] = p)
								}
						}
						r.setState({
							currentStyles: a,
							currentVelocities: i,
							mergedPropsStyles: s,
							lastIdealStyles: o,
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
								for (var i = (r.accumulatedTime - Math.floor(r.accumulatedTime / b) * b) / b, o = Math.floor(r.accumulatedTime / b), c = y(r.props.willEnter, r.props.willLeave, r.props.didLeave, r.state.mergedPropsStyles, s, r.state.currentStyles, r.state.currentVelocities, r.state.lastIdealStyles, r.state.lastIdealVelocities), u = c[0], p = c[1], f = c[2], x = c[3], g = c[4], v = 0; v < u.length; v++) {
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
												for (var E = x[v][P], w = g[v][P], I = 0; I < o; I++) {
													var N = l.default(b / 1e3, E, w, S.val, S.stiffness, S.damping, S.precision);
													E = N[0], w = N[1]
												}
												var T = l.default(b / 1e3, E, w, S.val, S.stiffness, S.damping, S.precision),
													L = T[0],
													M = T[1];
												j[P] = E + (L - E) * i, O[P] = w + (M - w) * i, k[P] = E, C[P] = w
											}
										} x[v] = k, g[v] = C, p[v] = j, f[v] = O
								}
								r.animationID = null, r.accumulatedTime -= o * b, r.setState({
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
							return o.default(e.style)
						})) : t.map((function(e) {
							return o.default(e.style)
						})),
						u = null == t ? l.map((function(e) {
							return i.default(e.style)
						})) : t.map((function(e) {
							return i.default(e.style)
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
				var i = [];
				for (r = 0; r < t.length; r++) i[r] = t[r];
				for (r = 0; r < e.length; r++)
					if (!Object.prototype.hasOwnProperty.call(a, e[r].key)) {
						var o = s(r, e[r]);
						null != o && i.push(o)
					} return i.sort((function(e, s) {
					var r = a[e.key],
						i = a[s.key],
						o = n[e.key],
						l = n[s.key];
					if (null != r && null != i) return a[e.key] - a[s.key];
					if (null != o && null != l) return n[e.key] - n[s.key];
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
							if (i < a[d] && o > n[d]) return 1;
							if (i > a[d] && o < n[d]) return -1
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
			var i = s("./node_modules/react-motion/lib/TransitionMotion.js");
			t.TransitionMotion = n(i);
			var o = s("./node_modules/react-motion/lib/spring.js");
			t.spring = n(o);
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
				return n({}, o, t, {
					val: e
				})
			};
			var r, a = s("./node_modules/react-motion/lib/presets.js"),
				i = (r = a) && r.__esModule ? r : {
					default: r
				},
				o = n({}, i.default.noWobble, {
					precision: .01
				});
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stepper.js": function(e, t, s) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, s, r, a, i, o) {
				var l = s + (-a * (t - r) + -i * s) * e,
					c = t + l * e;
				if (Math.abs(l) < o && Math.abs(c - r) < o) return n[0] = r, n[1] = 0, n;
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
				function e(e, t, s, r, a, i) {
					if (i !== n) {
						var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw o.name = "Invariant Violation", o
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
					domainOverride: i,
					callToAction: o
				} = e;
				let l = "";
				if (r) {
					if (s && s.displayText) {
						const e = 36 - (null !== (t = null == o ? void 0 : o.length) && void 0 !== t ? t : 0);
						return s.displayText.length > e ? s.displayText.substring(0, e - 3) + "..." : s.displayText
					}
					l = i || Object(n.D)(e)
				} else l = Object(n.D)(e);
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
			const a = [r.yc, r.ub, r.E, r.U, r.pb, r.Xb],
				i = {
					[r.Xb]: e => n.fbt._({
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
					[r.E]: e => n.fbt._({
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
					[r.yc]: e => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				o = {
					[r.Xb]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[r.pb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[r.U]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[r.E]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[r.ub]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.yc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[r.ub]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.yc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function l(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const l = Date.now(),
					c = new Date(e).getTime(),
					d = {
						[r.yc]: "",
						[r.ub]: "",
						[r.E]: "",
						[r.U]: "",
						[r.pb]: "",
						[r.Xb]: ""
					};
				let u = c - l;
				if (u <= 0) return n.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const n of a) {
					const e = Math.floor(u / n);
					e && (d[n] = (t ? o : i)[n](e).toString()), u -= e * n
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
				i = s("./node_modules/react-motion/lib/react-motion.js"),
				o = s("./node_modules/react-redux/es/index.js"),
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
						} = e, i = 0;
						if (n === s && a) {
							const e = a * t + this.getSpacerCount(a) * r;
							i = (this.container ? this.container.offsetWidth : e) - e
						} else n > 0 && (i = 0);
						return i
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
						i = this.getSpacerCount(s.length) * r;
					return t.offsetWidth >= a + i
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
				V = s("./src/reddit/hooks/useClickSourceData.ts"),
				R = s("./src/reddit/layout/row/Inline/index.tsx"),
				W = s("./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less"),
				F = s.n(W);
			var B = e => {
					const t = L.a.PROFILE,
						s = Object(A.a)(e.author, t),
						n = Object(V.a)();
					return a.a.createElement("div", {
						className: Object(c.a)(F.a.container, e.className)
					}, a.a.createElement(R.a, {
						className: F.a.layout
					}, a.a.createElement("div", {
						className: F.a.textContainer
					}, a.a.createElement("span", {
						className: F.a.description
					}, w.fbt._("posted by", null, {
						hk: "wl0iP"
					})), e.author === M.H ? a.a.createElement("span", {
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
						seconds: e.created / M.Xb
					})))))
				},
				U = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				H = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				Q = s("./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less"),
				q = s.n(Q);
			var z = e => {
					const t = Object(A.a)(e.name, e.type);
					return a.a.createElement("div", {
						className: Object(c.a)(q.a.container, e.className)
					}, a.a.createElement(H.a, {
						className: q.a.layout
					}, a.a.createElement("div", {
						className: q.a.iconContainer
					}, e.iconUrl ? a.a.createElement("img", {
						className: q.a.icon,
						src: e.iconUrl
					}) : a.a.createElement(U.a, {
						className: q.a.planetIcon,
						"data-redditstyle": !0
					})), a.a.createElement("div", {
						className: q.a.textContainer
					}, a.a.createElement(T.a, {
						"data-click-id": "subreddit",
						className: q.a.name,
						to: t
					}, Object(A.b)(e.displayText || e.name, e.type)), a.a.createElement("span", {
						className: q.a.separator
					}, "•"), a.a.createElement("span", {
						className: q.a.timestamp
					}, a.a.createElement(D.d, {
						seconds: e.created / M.Xb
					})))))
				},
				Z = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				G = s("./src/reddit/components/Media/index.tsx"),
				K = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				Y = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				X = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				J = s("./src/reddit/components/PostContainer/index.tsx"),
				$ = s("./src/reddit/components/PostTitle/index.tsx"),
				ee = s("./src/reddit/connectors/miniCardPost.ts"),
				te = s("./src/reddit/contexts/Post/index.tsx"),
				se = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				ne = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				re = s("./src/reddit/helpers/widgets/index.tsx"),
				ae = s("./src/reddit/models/Media/index.ts"),
				ie = s("./src/reddit/models/Post/index.ts"),
				oe = s("./src/reddit/models/Subreddit/index.ts"),
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
						eventFactory: i,
						flairStyleTemplate: o,
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
					} = n || p, j = Object(ie.q)(p);
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
					return g && (P = Object(oe.i)(g) ? Object(re.b)(g) : Object(re.c)(g)), a.a.createElement(J.b, {
						className: Object(c.a)(pe.a.container, ue.a.largeAndMediumActiveStyles, ue.a.largeAndMediumPostStyles, ce.a.postContainer, Object(ne.a)(this.props), s),
						post: p,
						onClick: m,
						eventFactory: i,
						style: {
							...Object(ne.b)(this.props.flairStyleTemplate),
							...Object(ne.d)(this.props),
							...this.props.style
						},
						"data-click-id": this.props["data-click-id"]
					}, a.a.createElement(X.a, {
						className: ce.a.backgroundWrapper,
						flairStyleTemplate: o
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
						titleColor: o && o.postTitleColor
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
						templatePlaceholderImage: o && o.postPlaceholderImage
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
				Se = Object(o.b)(Pe),
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
					})), n && a.a.createElement(R.a, {
						className: Oe.a.subreddit
					}, a.a.createElement(xe.a, ke({
						className: Object(c.a)(Object(ve.b)({
							isLoading: !1
						}))
					}, r)), a.a.createElement("div", {
						className: Object(c.a)(Oe.a.subredditName, Object(ve.b)({
							isLoading: s
						}))
					})), a.a.createElement(R.a, null, a.a.createElement(Ee, ke({
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
				Ve = {
					stiffness: 210,
					damping: 30
				},
				Re = 100,
				We = "post_carousel_item",
				Fe = e => {
					let {
						root: t,
						handleVisibilityChange: s,
						renderPost: r,
						...i
					} = e;
					const o = r ? r(i) : a.a.createElement(ye, i);
					return a.a.createElement(n.a, {
						root: t,
						threshold: .99,
						rootMargin: "0px 0px 0px 0px",
						onChange: s
					}, o)
				},
				Be = Object(l.c)({
					isBlockingInterstitialEnabled: E.b,
					isBlockingInterstitialV2Enabled: E.c
				}),
				Ue = Object(o.b)(Be, (e, t) => {
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
						showModalOnPostLinkClick: t => e(Object(d.ab)(Object(P.b)(t.permalink), t.id))
					}
				}),
				He = Object(O.v)();
			t.a = He(Ue(Object(j.c)(class extends _ {
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
							searchDiscoveryUnit: i,
							searchOptions: o
						} = this.props;
						let l;
						return (l = "subreddit" === t && o ? S.s(o, a, r, i) : i && o ? S.t(o, a, null, r, i) : S.i(s, n))(e)
					}, this.renderPost = (e, t) => {
						const {
							isMiniCard: s,
							renderPost: n,
							singleSubredditMode: r
						} = this.props;
						return a.a.createElement(Fe, {
							"data-click-id": We,
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
						springConfig: o
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
					}), f = e ? Re : this.getMarginLeft({
						adjustment: p,
						itemWidth: l,
						scrollIndex: d,
						spacerWidth: Ae
					});
					return a.a.createElement("div", {
						className: Object(c.a)(Me.a.postsWrapper, this.props.className),
						id: this.id,
						ref: this.setContainerRef
					}, a.a.createElement(i.Motion, {
						defaultStyle: {
							marginLeft: e || r ? Re : 0
						},
						style: {
							marginLeft: Object(i.spring)(f, o || Ve)
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
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
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
					className: Object(i.a)(p.a.container, t)
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
				})(m.author, s), f && f.isQuarantined && a.a.createElement(o.a, null))
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
				i = s("./src/reddit/components/Thumbnail/index.tsx"),
				o = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				l = s.n(o);

			function c(e) {
				const {
					source: t
				} = e.post;
				return r.a.createElement("div", {
					className: Object(a.a)(l.a.container, e.className)
				}, r.a.createElement(i.b, {
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
				i = s("./node_modules/react/index.js"),
				o = s.n(i);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function c(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return o.a.createElement("span", {
					className: e.className
				}, t ? l._("Voting closed {timeAgo}", [l._param("timeAgo", o.a.createElement(r.d, {
					seconds: e.poll.endsAt / n.Xb
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
				i = s("./src/lib/ads/index.ts"),
				o = s("./src/reddit/components/AdViewability/index.tsx"),
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
						i = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(c.a)(t, a, i), r.a.createElement("div", {
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
								} = Object(i.t)(d, a);
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
					return (e => d.media && Object(f.F)(d.media) && g ? r.a.createElement(u, {
						postId: d.id
					}, e) : e)((e => d.isSponsored || j ? r.a.createElement(o.a, {
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
				return W
			})), s.d(t, "a", (function() {
				return X
			}));
			var n = s("./src/config.ts"),
				r = s("./node_modules/polished/dist/polished.es.js"),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
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
				v = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				_ = s("./src/reddit/hooks/useClickSourceData.ts"),
				j = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				O = s("./src/reddit/hooks/usePostContext.ts"),
				k = s("./src/reddit/hooks/useTheme.ts"),
				C = s("./src/reddit/icons/fonts/index.tsx"),
				P = s("./src/reddit/models/Flair/index.ts"),
				S = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/models/Post/index.ts"),
				w = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				I = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				N = s("./src/lib/getShortenedLink.ts"),
				T = s("./src/reddit/components/FlairWrapper/index.tsx"),
				L = s("./node_modules/fbt/lib/FbtPublic.js"),
				M = s("./src/lib/prettyPrintNumber/index.ts"),
				D = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				A = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				V = s.n(A);
			const R = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var W, F = Object(o.b)(R)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return Object(j.a)() ? null : i.a.createElement("div", {
						className: Object(u.a)(e.className, V.a.proposalMetaData)
					}, i.a.createElement("span", null, L.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [L.fbt._param("count", Object(M.a)(n)), L.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && i.a.createElement(D.a, {
						className: V.a.proposalExpiry,
						poll: t
					}))
				})),
				B = s("./src/reddit/components/SEOTitle/index.tsx"),
				U = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				H = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Q = s("./src/reddit/selectors/user.ts"),
				q = s("./src/telemetry/models/Outbound.ts"),
				z = s("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				Z = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				G = s("./src/reddit/components/PostTitle/index.m.less"),
				K = s.n(G);

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(W || (W = {}));
			const X = e => {
					let {
						size: t,
						titleColor: s,
						titleType: n,
						nowrap: r,
						children: a,
						className: o,
						redditStyle: l,
						shouldBlurTitle: c
					} = e;
					const d = Object(k.a)();
					let m = "";
					switch (t) {
						case W.ExtraLarge:
							m = K.a.ExtraLarge;
							break;
						case W.Large:
							m = K.a.Large;
							break;
						case W.Medium:
							m = K.a.Medium;
							break;
						case W.Small:
							m = K.a.Small;
							break;
						case W.ExtraSmall:
							m = K.a.ExtraSmall;
							break;
						case W.Metadata:
							m = K.a.Metadata
					}
					return i.a.createElement("div", {
						className: Object(u.a)(K.a.Title, o, m, {
							[K.a.isNoWrap]: r,
							[K.a.blur]: c
						}),
						style: {
							"--posttitletextcolor": s || Object(I.a)({
								redditStyle: l,
								theme: d
							}).titleText
						}
					}, n ? i.a.createElement(B.b, {
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
					return i.a.createElement(l.a, Y({}, a, {
						className: Object(u.a)(t, K.a.styledLink, {
							[K.a.isVisitedEnabled]: !s
						})
					}), r)
				},
				$ = e => {
					let {
						disableVisited: t,
						nowrap: s,
						className: n,
						children: r
					} = e;
					return i.a.createElement("div", {
						className: Object(u.a)(K.a.titleContainer, n, {
							[K.a.isNoWrap]: s,
							[K.a.isVisitedEnabled]: !t
						})
					}, r)
				},
				ee = Object(c.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(p.r)(e, {
							pageLayer: s
						})
					},
					isNsfwBlurSubreddit: H.e,
					shouldOpenPostInNewTab: Q.lb
				}),
				te = e => {
					const {
						post: t,
						subreddit: s
					} = e, {
						isSponsored: n
					} = t, r = Object(o.d)(), a = Object(_.a)(), l = Object(o.e)(U.b), c = Object(o.e)(U.c), u = e => {
						!l && !c || t.media && Object(S.I)(t.media) || (e.preventDefault(), r(Object(y.ab)(Object(g.b)(t.permalink), t.id))), t.isSponsored && Object(E.B)(t) && r(Object(y.y)(t, x.a.Click))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return i.a.createElement($, {
						nowrap: e.nowrap
					}, i.a.createElement(se, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return i.a.createElement(f.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, i.a.createElement(se, e)); {
						const r = t.media && Object(S.I)(t.media) ? Object(v.c)(t.id, s.name) : t.permalink,
							o = e.isCommentPermalink ? Object(g.b)(r) : Object(h.a)(r, void 0, a);
						return i.a.createElement($, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n && !Object(E.B)(t) ? ((e, t) => {
							const {
								source: s
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return s ? i.a.createElement(f.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, i.a.createElement(se, t)) : i.a.createElement(se, t)
						})(t, e) : i.a.createElement(J, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: o,
							onClick: u
						}, i.a.createElement(se, e)))
					}
				},
				se = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: s,
						post: n
					} = e;
					let r = e.format ? e.format(n) : n.title;
					s && "string" == typeof r && (r = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(r));
					const a = e.isCommentsPage ? B.a.PostComments : B.a.PostItem,
						o = !(!e.isNsfwBlurSubreddit || !e.post.isNSFW);
					return i.a.createElement(X, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: o,
						size: e.size,
						titleColor: e.titleColor,
						titleType: a
					}, t && i.a.createElement(T.a, {
						titleFlair: t,
						nowrap: !0,
						post: n,
						sendEvent: e.sendEvent
					}), r)
				},
				ne = e => {
					const {
						hideSourceLink: t,
						isNsfwBlurSubreddit: s,
						post: n
					} = e, {
						isSponsored: r
					} = n, a = e.isCommentsPage ? q.SourceElement.PostLink : q.SourceElement.ListingPostLink;
					if (Object(j.a)()) return null;
					if (s && n.isNSFW) return null;
					const o = !t && !e.isCrosspost && e.size !== W.Large && !n.isSponsored && !(n.media && Object(S.I)(n.media)) && (n.source || n.media && (n.media.type === S.o.GIFVIDEO || n.media.type === S.o.IMAGE || n.media.type === S.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (o) return i.a.createElement(b.a, {
							className: e.outboundLinkClassName,
							href: Object(S.D)(n),
							isSponsored: r,
							postId: n.id,
							source: n.source,
							sourceElement: a
						}, Object(N.a)(n), !n.isSponsored && i.a.createElement(C.a, {
							name: "external_link",
							className: K.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== W.Large && e.size !== W.ExtraLarge) return i.a.createElement(b.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: r,
						postId: n.id,
						source: n.source,
						sourceElement: a
					}, Object(N.a)(n), !n.isSponsored && i.a.createElement(C.a, {
						name: "external_link",
						className: K.a.outboundLinkIcon
					}));
					return null
				};
			class re extends i.a.Component {
				getDynamicStyleTags() {
					return i.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${K.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(r.c)(.45,Object(I.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(r.c)(.45,this.props.titleColor||Object(I.a)(this.props).titleText,Object(I.a)(this.props).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(r.c)(.45,Object(I.a)(this.props).bodyText,Object(I.a)(this.props).body)};\n        }\n      `
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
						poll: o,
						post: l,
						showNSFWSpoilerFlairsOnly: c,
						hideNSFWSpoilerFlair: d,
						onClick: m
					} = this.props, p = s === P.b.Left, f = Object(T.b)(l), {
						leftFlair: b,
						rightFlair: h
					} = Object(z.a)({
						flair: f,
						isFlairPositionedLeft: p,
						showNSFWSpoilerFlairsOnly: c,
						hideNSFWSpoilerFlair: d
					}), y = !a && !r && !t, x = y && b && b.length > 0, g = y && h && h.length > 0;
					return i.a.createElement("div", {
						className: Object(u.a)(K.a.Component, e, l.id),
						ref: this.props.innerRef,
						"data-adclicklocation": Z.a.TITLE,
						onClick: m
					}, !c && x && i.a.createElement(T.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: l,
						sendEvent: this.props.sendEvent
					}), !Object(w.b)(l) && i.a.createElement(te, Y({}, this.props, {
						leftFlair: c ? b : void 0
					})), o && i.a.createElement(F, {
						className: K.a.pollMeta,
						pollId: o.id
					}), i.a.createElement(ne, this.props), g && i.a.createElement(T.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: l,
						sendEvent: this.props.sendEvent
					}), i.a.createElement("div", {
						className: K.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${n.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = i.a.memo((function(e) {
				const t = Object(p.gb)(),
					s = Object(p.x)(t),
					n = Object(O.a)(),
					r = Object(o.e)(r => ee(r, {
						...n,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					a = Object(k.a)(),
					l = Object(m.b)();
				return n ? i.a.createElement(re, Y({
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
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				o = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				u = s("./src/reddit/components/QuarantinedLabel/index.m.less"),
				m = s.n(u);
			const p = ["center", "top"],
				f = ["center", "bottom"],
				b = o.a.div("Container", m.a),
				h = Object(i.a)(l.b),
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
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(n.a, "SubredditName", a.a);
			t.a = i
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
			const i = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return `${t}-du-left-${e}`
			};
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = i("a", t), n = i("b", t), o = i("c", t), l = i("d", t);
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
					id: o,
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
					xlinkHref: `#${o}`
				})), r.a.createElement("use", {
					fill: a.a.black,
					xlinkHref: `#${o}`
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
			const i = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return `${t}-du-right-${e}`
			};
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = i("a", t), n = i("b", t), o = i("c", t), l = i("d", t);
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
					id: o,
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
					xlinkHref: `#${o}`
				})), r.a.createElement("use", {
					fill: a.a.black,
					xlinkHref: `#${o}`
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
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/layout/twoCol/ExpandRight/index.m.less"),
				l = s.n(o);

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
					gutter: o,
					...d
				} = e;
				return r.a.createElement("div", c({
					className: Object(i.a)(l.a.expandRightContainer, t)
				}, d), r.a.createElement("div", {
					className: l.a.left,
					style: {
						flexBasis: a,
						height: n,
						marginRight: o
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
				i = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				o = s("./src/reddit/models/Media/index.ts"),
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
					let r = Object(i.b)(e);
					return r || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== o.o.TEXT || (r = e.media.markdownContent), r === s
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
					let r = Object(i.b)(e);
					return r || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== o.o.TEXT || (r = e.media.markdownContent), r === s
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditTopContent~TopWeekPostsDiscoveryUnit.b709068cbb50cf0adcbb.js.map