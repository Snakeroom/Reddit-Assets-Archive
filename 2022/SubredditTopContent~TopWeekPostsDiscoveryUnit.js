// https://www.redditstatic.com/desktop2x/SubredditTopContent~TopWeekPostsDiscoveryUnit.1d43907b57ceeaefd7b2.js
// Retrieved at 10/24/2022, 10:40:04 AM by Reddit Dataminer v1.0.0
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
				a = function() {
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

			function r(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var i = r(s("./node_modules/react-motion/lib/mapToZero.js")),
				o = r(s("./node_modules/react-motion/lib/stripStyle.js")),
				l = r(s("./node_modules/react-motion/lib/stepper.js")),
				c = r(s("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				d = r(s("./node_modules/raf/index.js")),
				u = r(s("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				m = r(s("./node_modules/react/index.js")),
				p = r(s("./node_modules/react-motion/node_modules/prop-types/index.js")),
				f = 1e3 / 60,
				h = function(e) {
					function t(s) {
						var a = this;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), e.call(this, s), this.wasAnimating = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyle = null, this.clearUnreadPropStyle = function(e) {
							var t = !1,
								s = a.state,
								r = s.currentStyle,
								i = s.currentVelocity,
								o = s.lastIdealStyle,
								l = s.lastIdealVelocity;
							for (var c in e)
								if (Object.prototype.hasOwnProperty.call(e, c)) {
									var d = e[c];
									"number" == typeof d && (t || (t = !0, r = n({}, r), i = n({}, i), o = n({}, o), l = n({}, l)), r[c] = d, i[c] = 0, o[c] = d, l[c] = 0)
								} t && a.setState({
								currentStyle: r,
								currentVelocity: i,
								lastIdealStyle: o,
								lastIdealVelocity: l
							})
						}, this.startAnimationIfNecessary = function() {
							a.animationID = d.default((function(e) {
								var t = a.props.style;
								if (u.default(a.state.currentStyle, t, a.state.currentVelocity)) return a.wasAnimating && a.props.onRest && a.props.onRest(), a.animationID = null, a.wasAnimating = !1, void(a.accumulatedTime = 0);
								a.wasAnimating = !0;
								var s = e || c.default(),
									n = s - a.prevTime;
								if (a.prevTime = s, a.accumulatedTime = a.accumulatedTime + n, a.accumulatedTime > 10 * f && (a.accumulatedTime = 0), 0 === a.accumulatedTime) return a.animationID = null, void a.startAnimationIfNecessary();
								var r = (a.accumulatedTime - Math.floor(a.accumulatedTime / f) * f) / f,
									i = Math.floor(a.accumulatedTime / f),
									o = {},
									d = {},
									m = {},
									p = {};
								for (var h in t)
									if (Object.prototype.hasOwnProperty.call(t, h)) {
										var b = t[h];
										if ("number" == typeof b) m[h] = b, p[h] = 0, o[h] = b, d[h] = 0;
										else {
											for (var y = a.state.lastIdealStyle[h], x = a.state.lastIdealVelocity[h], g = 0; g < i; g++) {
												var v = l.default(f / 1e3, y, x, b.val, b.stiffness, b.damping, b.precision);
												y = v[0], x = v[1]
											}
											var _ = l.default(f / 1e3, y, x, b.val, b.stiffness, b.damping, b.precision),
												j = _[0],
												O = _[1];
											m[h] = y + (j - y) * r, p[h] = x + (O - x) * r, o[h] = y, d[h] = x
										}
									} a.animationID = null, a.accumulatedTime -= i * f, a.setState({
									currentStyle: m,
									currentVelocity: p,
									lastIdealStyle: o,
									lastIdealVelocity: d
								}), a.unreadPropStyle = null, a.startAnimationIfNecessary()
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
					}(t, e), a(t, null, [{
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
							a = i.default(n);
						return {
							currentStyle: n,
							currentVelocity: a,
							lastIdealStyle: n,
							lastIdealVelocity: a
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
			t.default = h, e.exports = t.default
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
				a = function() {
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

			function r(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var i = r(s("./node_modules/react-motion/lib/mapToZero.js")),
				o = r(s("./node_modules/react-motion/lib/stripStyle.js")),
				l = r(s("./node_modules/react-motion/lib/stepper.js")),
				c = r(s("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				d = r(s("./node_modules/raf/index.js")),
				u = r(s("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				m = r(s("./node_modules/react/index.js")),
				p = r(s("./node_modules/react-motion/node_modules/prop-types/index.js")),
				f = 1e3 / 60;
			var h = function(e) {
				function t(s) {
					var a = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, s), this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = a.state, s = t.currentStyles, r = t.currentVelocities, i = t.lastIdealStyles, o = t.lastIdealVelocities, l = !1, c = 0; c < e.length; c++) {
							var d = e[c],
								u = !1;
							for (var m in d)
								if (Object.prototype.hasOwnProperty.call(d, m)) {
									var p = d[m];
									"number" == typeof p && (u || (u = !0, l = !0, s[c] = n({}, s[c]), r[c] = n({}, r[c]), i[c] = n({}, i[c]), o[c] = n({}, o[c])), s[c][m] = p, r[c][m] = 0, i[c][m] = p, o[c][m] = 0)
								}
						}
						l && a.setState({
							currentStyles: s,
							currentVelocities: r,
							lastIdealStyles: i,
							lastIdealVelocities: o
						})
					}, this.startAnimationIfNecessary = function() {
						a.animationID = d.default((function(e) {
							var t = a.props.styles(a.state.lastIdealStyles);
							if (function(e, t, s) {
									for (var n = 0; n < e.length; n++)
										if (!u.default(e[n], t[n], s[n])) return !1;
									return !0
								}(a.state.currentStyles, t, a.state.currentVelocities)) return a.animationID = null, void(a.accumulatedTime = 0);
							var s = e || c.default(),
								n = s - a.prevTime;
							if (a.prevTime = s, a.accumulatedTime = a.accumulatedTime + n, a.accumulatedTime > 10 * f && (a.accumulatedTime = 0), 0 === a.accumulatedTime) return a.animationID = null, void a.startAnimationIfNecessary();
							for (var r = (a.accumulatedTime - Math.floor(a.accumulatedTime / f) * f) / f, i = Math.floor(a.accumulatedTime / f), o = [], d = [], m = [], p = [], h = 0; h < t.length; h++) {
								var b = t[h],
									y = {},
									x = {},
									g = {},
									v = {};
								for (var _ in b)
									if (Object.prototype.hasOwnProperty.call(b, _)) {
										var j = b[_];
										if ("number" == typeof j) y[_] = j, x[_] = 0, g[_] = j, v[_] = 0;
										else {
											for (var O = a.state.lastIdealStyles[h][_], k = a.state.lastIdealVelocities[h][_], C = 0; C < i; C++) {
												var P = l.default(f / 1e3, O, k, j.val, j.stiffness, j.damping, j.precision);
												O = P[0], k = P[1]
											}
											var S = l.default(f / 1e3, O, k, j.val, j.stiffness, j.damping, j.precision),
												E = S[0],
												w = S[1];
											y[_] = O + (E - O) * r, x[_] = k + (w - k) * r, g[_] = O, v[_] = k
										}
									} m[h] = y, p[h] = x, o[h] = g, d[h] = v
							}
							a.animationID = null, a.accumulatedTime -= i * f, a.setState({
								currentStyles: m,
								currentVelocities: p,
								lastIdealStyles: o,
								lastIdealVelocities: d
							}), a.unreadPropStyles = null, a.startAnimationIfNecessary()
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
				}(t, e), a(t, null, [{
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
						a = n.map((function(e) {
							return i.default(e)
						}));
					return {
						currentStyles: n,
						currentVelocities: a,
						lastIdealStyles: n,
						lastIdealVelocities: a
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
			t.default = h, e.exports = t.default
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
				a = function() {
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

			function r(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var i = r(s("./node_modules/react-motion/lib/mapToZero.js")),
				o = r(s("./node_modules/react-motion/lib/stripStyle.js")),
				l = r(s("./node_modules/react-motion/lib/stepper.js")),
				c = r(s("./node_modules/react-motion/lib/mergeDiff.js")),
				d = r(s("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				u = r(s("./node_modules/raf/index.js")),
				m = r(s("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				p = r(s("./node_modules/react/index.js")),
				f = r(s("./node_modules/react-motion/node_modules/prop-types/index.js")),
				h = 1e3 / 60;

			function b(e, t, s) {
				var n = t;
				return null == n ? e.map((function(e, t) {
					return {
						key: e.key,
						data: e.data,
						style: s[t]
					}
				})) : e.map((function(e, t) {
					for (var a = 0; a < n.length; a++)
						if (n[a].key === e.key) return {
							key: n[a].key,
							data: n[a].data,
							style: s[t]
						};
					return {
						key: e.key,
						data: e.data,
						style: s[t]
					}
				}))
			}

			function y(e, t, s, n, a, r, o, l, d) {
				for (var u = c.default(n, a, (function(e, n) {
						var a = t(n);
						return null == a ? (s({
							key: n.key,
							data: n.data
						}), null) : m.default(r[e], a, o[e]) ? (s({
							key: n.key,
							data: n.data
						}), null) : {
							key: n.key,
							data: n.data,
							style: a
						}
					})), p = [], f = [], h = [], b = [], y = 0; y < u.length; y++) {
					for (var x = u[y], g = null, v = 0; v < n.length; v++)
						if (n[v].key === x.key) {
							g = v;
							break
						} if (null == g) {
						var _ = e(x);
						p[y] = _, h[y] = _;
						var j = i.default(x.style);
						f[y] = j, b[y] = j
					} else p[y] = r[g], h[y] = l[g], f[y] = o[g], b[y] = d[g]
				}
				return [u, p, f, h, b]
			}
			var x = function(e) {
				function t(s) {
					var a = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, s), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = y(a.props.willEnter, a.props.willLeave, a.props.didLeave, a.state.mergedPropsStyles, e, a.state.currentStyles, a.state.currentVelocities, a.state.lastIdealStyles, a.state.lastIdealVelocities), s = t[0], r = t[1], i = t[2], o = t[3], l = t[4], c = 0; c < e.length; c++) {
							var d = e[c].style,
								u = !1;
							for (var m in d)
								if (Object.prototype.hasOwnProperty.call(d, m)) {
									var p = d[m];
									"number" == typeof p && (u || (u = !0, r[c] = n({}, r[c]), i[c] = n({}, i[c]), o[c] = n({}, o[c]), l[c] = n({}, l[c]), s[c] = {
										key: s[c].key,
										data: s[c].data,
										style: n({}, s[c].style)
									}), r[c][m] = p, i[c][m] = 0, o[c][m] = p, l[c][m] = 0, s[c].style[m] = p)
								}
						}
						a.setState({
							currentStyles: r,
							currentVelocities: i,
							mergedPropsStyles: s,
							lastIdealStyles: o,
							lastIdealVelocities: l
						})
					}, this.startAnimationIfNecessary = function() {
						a.unmounting || (a.animationID = u.default((function(e) {
							if (!a.unmounting) {
								var t = a.props.styles,
									s = "function" == typeof t ? t(b(a.state.mergedPropsStyles, a.unreadPropStyles, a.state.lastIdealStyles)) : t;
								if (function(e, t, s, n) {
										if (n.length !== t.length) return !1;
										for (var a = 0; a < n.length; a++)
											if (n[a].key !== t[a].key) return !1;
										for (a = 0; a < n.length; a++)
											if (!m.default(e[a], t[a].style, s[a])) return !1;
										return !0
									}(a.state.currentStyles, s, a.state.currentVelocities, a.state.mergedPropsStyles)) return a.animationID = null, void(a.accumulatedTime = 0);
								var n = e || d.default(),
									r = n - a.prevTime;
								if (a.prevTime = n, a.accumulatedTime = a.accumulatedTime + r, a.accumulatedTime > 10 * h && (a.accumulatedTime = 0), 0 === a.accumulatedTime) return a.animationID = null, void a.startAnimationIfNecessary();
								for (var i = (a.accumulatedTime - Math.floor(a.accumulatedTime / h) * h) / h, o = Math.floor(a.accumulatedTime / h), c = y(a.props.willEnter, a.props.willLeave, a.props.didLeave, a.state.mergedPropsStyles, s, a.state.currentStyles, a.state.currentVelocities, a.state.lastIdealStyles, a.state.lastIdealVelocities), u = c[0], p = c[1], f = c[2], x = c[3], g = c[4], v = 0; v < u.length; v++) {
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
													var N = l.default(h / 1e3, E, w, S.val, S.stiffness, S.damping, S.precision);
													E = N[0], w = N[1]
												}
												var T = l.default(h / 1e3, E, w, S.val, S.stiffness, S.damping, S.precision),
													L = T[0],
													M = T[1];
												j[P] = E + (L - E) * i, O[P] = w + (M - w) * i, k[P] = E, C[P] = w
											}
										} x[v] = k, g[v] = C, p[v] = j, f[v] = O
								}
								a.animationID = null, a.accumulatedTime -= o * h, a.setState({
									currentStyles: p,
									currentVelocities: f,
									lastIdealStyles: x,
									lastIdealVelocities: g,
									mergedPropsStyles: u
								}), a.unreadPropStyles = null, a.startAnimationIfNecessary()
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
				}(t, e), a(t, null, [{
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
						a = e.willLeave,
						r = e.didLeave,
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
						m = y(n, a, r, c, l, d, u, d, u),
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
					this.unreadPropStyles = "function" == typeof t ? t(b(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles)) : t, null == this.animationID && (this.prevTime = d.default(), this.startAnimationIfNecessary())
				}, t.prototype.componentWillUnmount = function() {
					this.unmounting = !0, null != this.animationID && (u.default.cancel(this.animationID), this.animationID = null)
				}, t.prototype.render = function() {
					var e = b(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles),
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
				for (var n = {}, a = 0; a < e.length; a++) n[e[a].key] = a;
				var r = {};
				for (a = 0; a < t.length; a++) r[t[a].key] = a;
				var i = [];
				for (a = 0; a < t.length; a++) i[a] = t[a];
				for (a = 0; a < e.length; a++)
					if (!Object.prototype.hasOwnProperty.call(r, e[a].key)) {
						var o = s(a, e[a]);
						null != o && i.push(o)
					} return i.sort((function(e, s) {
					var a = r[e.key],
						i = r[s.key],
						o = n[e.key],
						l = n[s.key];
					if (null != a && null != i) return r[e.key] - r[s.key];
					if (null != o && null != l) return n[e.key] - n[s.key];
					if (null != a) {
						for (var c = 0; c < t.length; c++) {
							var d = t[c].key;
							if (Object.prototype.hasOwnProperty.call(n, d)) {
								if (a < r[d] && l > n[d]) return -1;
								if (a > r[d] && l < n[d]) return 1
							}
						}
						return 1
					}
					for (c = 0; c < t.length; c++) {
						d = t[c].key;
						if (Object.prototype.hasOwnProperty.call(n, d)) {
							if (i < r[d] && o > n[d]) return 1;
							if (i > r[d] && o < n[d]) return -1
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
			var a = s("./node_modules/react-motion/lib/Motion.js");
			t.Motion = n(a);
			var r = s("./node_modules/react-motion/lib/StaggeredMotion.js");
			t.StaggeredMotion = n(r);
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
						var a = "number" == typeof t[n] ? t[n] : t[n].val;
						if (e[n] !== a) return !1
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
			var a, r = s("./node_modules/react-motion/lib/presets.js"),
				i = (a = r) && a.__esModule ? a : {
					default: a
				},
				o = n({}, i.default.noWobble, {
					precision: .01
				});
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stepper.js": function(e, t, s) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, s, a, r, i, o) {
				var l = s + (-r * (t - a) + -i * s) * e,
					c = t + l * e;
				if (Math.abs(l) < o && Math.abs(c - a) < o) return n[0] = a, n[1] = 0, n;
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
					var s, n, a;
					"undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
						return performance.now()
					} : null != t && t.hrtime ? (e.exports = function() {
						return (s() - a) / 1e6
					}, n = t.hrtime, a = (s = function() {
						var e;
						return 1e9 * (e = n())[0] + e[1]
					})()) : Date.now ? (e.exports = function() {
						return Date.now() - a
					}, a = Date.now()) : (e.exports = function() {
						return (new Date).getTime() - a
					}, a = (new Date).getTime())
				}).call(this)
			}).call(this, s("./node_modules/process/browser.js"))
		},
		"./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function a() {}

			function r() {}
			r.resetWarningCache = a, e.exports = function() {
				function e(e, t, s, a, r, i) {
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
					checkPropTypes: r,
					resetWarningCache: a
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
				a = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				r = s.n(a);
			t.a = function(e) {
				var t;
				const {
					source: s,
					isSponsored: a,
					domainOverride: i,
					callToAction: o
				} = e;
				let l = "";
				if (a) {
					if (s && s.displayText) {
						const e = 36 - (null !== (t = null == o ? void 0 : o.length) && void 0 !== t ? t : 0);
						return s.displayText.length > e ? s.displayText.substring(0, e - 3) + "..." : s.displayText
					}
					l = i || Object(n.D)(e)
				} else l = Object(n.D)(e);
				const c = r.a.parse(l),
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
				a = s("./src/lib/constants/index.ts");
			const r = [a.yc, a.ub, a.E, a.U, a.pb, a.Xb],
				i = {
					[a.Xb]: e => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[a.pb]: e => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[a.U]: e => n.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [n.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[a.E]: e => n.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [n.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[a.ub]: e => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[a.yc]: e => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				o = {
					[a.Xb]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[a.pb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[a.U]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[a.E]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[a.ub]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[a.yc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[a.ub]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[a.yc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function l(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const l = Date.now(),
					c = new Date(e).getTime(),
					d = {
						[a.yc]: "",
						[a.ub]: "",
						[a.E]: "",
						[a.U]: "",
						[a.pb]: "",
						[a.Xb]: ""
					};
				let u = c - l;
				if (u <= 0) return n.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const n of r) {
					const e = Math.floor(u / n);
					e && (d[n] = (t ? o : i)[n](e).toString()), u -= e * n
				}
				const m = r.map(e => d[e]).filter(Boolean).slice(0, 2).join(" ");
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
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				i = s("./node_modules/react-motion/lib/react-motion.js"),
				o = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				u = s("./node_modules/lodash/values.js"),
				m = s.n(u),
				p = s("./src/lib/fastdom/index.ts"),
				f = s("./src/reddit/icons/svgs/DiscoveryUnitArrow/Left/index.tsx"),
				h = s("./src/reddit/icons/svgs/DiscoveryUnitArrow/Right/index.tsx"),
				b = s("./src/reddit/components/DiscoveryUnit/CarouselBase/index.m.less"),
				y = s.n(b);
			const x = e => r.a.createElement("button", {
					className: Object(c.a)(y.a.arrow, e.className),
					onClick: e.onClick
				}, r.a.createElement(f.a, {
					className: y.a.arrowIcon,
					seed: e.seed
				})),
				g = e => r.a.createElement("button", {
					className: Object(c.a)(y.a.arrow, e.className),
					onClick: e.onClick
				}, r.a.createElement(h.a, {
					className: y.a.arrowIcon,
					seed: e.seed
				}));
			class v extends r.a.Component {
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
							spacerWidth: a = 0
						} = e;
						return t - n * (s + a) + a
					}, this.getAdjustment = e => {
						let {
							itemWidth: t,
							maxScrollIndex: s,
							scrollIndex: n,
							spacerWidth: a = 0,
							visibleItemsCount: r
						} = e, i = 0;
						if (n === s && r) {
							const e = r * t + this.getSpacerCount(r) * a;
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
						spacerWidth: a = 0
					} = e;
					if (!t) return !0;
					const r = s.length * n,
						i = this.getSpacerCount(s.length) * a;
					return t.offsetWidth >= r + i
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
			var U = e => {
					const t = L.a.PROFILE,
						s = Object(A.a)(e.author, t),
						n = Object(V.a)();
					return r.a.createElement("div", {
						className: Object(c.a)(F.a.container, e.className)
					}, r.a.createElement(R.a, {
						className: F.a.layout
					}, r.a.createElement("div", {
						className: F.a.textContainer
					}, r.a.createElement("span", {
						className: F.a.description
					}, w.fbt._("posted by", null, {
						hk: "wl0iP"
					})), e.author === M.H ? r.a.createElement("span", {
						className: F.a.authorName
					}, Object(A.b)(e.author, t)) : r.a.createElement(T.a, {
						className: F.a.authorName,
						to: {
							pathname: s,
							state: n
						}
					}, Object(A.b)(e.author, t)), r.a.createElement("span", {
						className: F.a.timestamp
					}, r.a.createElement(D.d, {
						seconds: e.created / M.Xb
					})))))
				},
				B = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				H = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				q = s("./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less"),
				Q = s.n(q);
			var z = e => {
					const t = Object(A.a)(e.name, e.type);
					return r.a.createElement("div", {
						className: Object(c.a)(Q.a.container, e.className)
					}, r.a.createElement(H.a, {
						className: Q.a.layout
					}, r.a.createElement("div", {
						className: Q.a.iconContainer
					}, e.iconUrl ? r.a.createElement("img", {
						className: Q.a.icon,
						src: e.iconUrl
					}) : r.a.createElement(B.a, {
						className: Q.a.planetIcon,
						"data-redditstyle": !0
					})), r.a.createElement("div", {
						className: Q.a.textContainer
					}, r.a.createElement(T.a, {
						"data-click-id": "subreddit",
						className: Q.a.name,
						to: t
					}, Object(A.b)(e.displayText || e.name, e.type)), r.a.createElement("span", {
						className: Q.a.separator
					}, "•"), r.a.createElement("span", {
						className: Q.a.timestamp
					}, r.a.createElement(D.d, {
						seconds: e.created / M.Xb
					})))))
				},
				Z = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				G = s("./src/reddit/components/Media/index.tsx"),
				Y = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				K = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				X = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				J = s("./src/reddit/components/PostContainer/index.tsx"),
				$ = s("./src/reddit/components/PostTitle/index.tsx"),
				ee = s("./src/reddit/connectors/miniCardPost.ts"),
				te = s("./src/reddit/contexts/Post/index.tsx"),
				se = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				ne = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				ae = s("./src/reddit/helpers/widgets/index.tsx"),
				re = s("./src/reddit/models/Media/index.ts"),
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
			class he extends r.a.Component {
				render() {
					const {
						autoplayPref: e,
						availableWidth: t,
						className: s,
						crosspostRoot: n,
						crosspostSubredditOrProfile: a,
						eventFactory: i,
						flairStyleTemplate: o,
						forceLoadMedia: l,
						hideNSFWPref: d,
						isMiniCard: u = !0,
						onClickPost: m,
						post: p,
						scrollerItemRef: f,
						shouldPause: h,
						showAuthorBlock: b = !1,
						showMetaLine: y = !0,
						showSubscribeBlock: x = !1,
						subredditOrProfile: g,
						theme: v
					} = this.props, {
						media: _
					} = n || p, j = Object(ie.q)(p);
					let O = _ && r.a.createElement(G.a, {
							autoplayPref: e,
							availableWidth: t,
							className: ce.a.media,
							forceAspectRatio: re.c,
							imageBoxClassName: ce.a.mediaImageBox,
							imageBoxContentImageClassName: ce.a.mediaImageBoxContentImage,
							isListing: !0,
							isMiniCard: u,
							isNotCardView: !0,
							post: n || p,
							scrollerItemRef: f,
							shouldPause: h,
							shouldLoad: l,
							showCentered: !1,
							showFull: !1
						}),
						k = !1;
					_ && O && (_.type !== re.o.RTJSON && _.type !== re.o.TEXT ? (O = r.a.createElement("div", {
						className: pe.a.mediaWrapper
					}, O), k = !0) : _ && _.content && Object(se.a)(p, null == v ? void 0 : v.subredditContext) && (O = r.a.createElement("div", {
						className: pe.a.textWrapper
					}, O)));
					const C = !k && !j;
					let P;
					return g && (P = Object(oe.i)(g) ? Object(ae.b)(g) : Object(ae.c)(g)), r.a.createElement(J.b, {
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
					}, r.a.createElement(X.a, {
						className: ce.a.backgroundWrapper,
						flairStyleTemplate: o
					}, r.a.createElement("div", {
						className: Object(c.a)(pe.a.innerContainer, ce.a.innerContainer)
					}, x && g && r.a.createElement(z, fe({
						created: p.created
					}, P)), b && g && r.a.createElement(U, fe({
						created: p.created,
						author: p.author
					}, P)), r.a.createElement($.c, {
						className: C ? pe.a.postTitle : pe.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: p,
						size: $.b.Large,
						titleColor: o && o.postTitleColor
					}), y && g && r.a.createElement(Y.a, {
						className: pe.a.metaLine,
						crosspostSubredditOrProfile: a,
						hideNSFWPref: d,
						post: p,
						subredditOrProfile: g
					}), (k || j) && r.a.createElement("div", {
						className: pe.a.flexSpacer
					}), j && r.a.createElement("div", {
						className: pe.a.mediaWrapper
					}, r.a.createElement(K.a, {
						className: pe.a.thumbnailWrapper,
						thumbnailClassName: pe.a.thumbnail,
						thumbnailContainerClassName: pe.a.thumbnailContainer,
						post: p,
						templatePlaceholderImage: o && o.postPlaceholderImage
					})), O, r.a.createElement("div", {
						className: pe.a.metaWrapper
					}, r.a.createElement("span", {
						className: pe.a.meta
					}, w.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [w.fbt._plural(p.score, "number", Object(I.b)(p.score))], {
						hk: "2ncFte"
					})), r.a.createElement("span", {
						className: pe.a.meta
					}, w.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [w.fbt._plural(p.numComments, "number", Object(I.b)(p.numComments))], {
						hk: "1QQoSA"
					}))))), r.a.createElement(Z.d, null))
				}
			}
			const be = Object(te.b)(Object(ee.a)(Object(N.a)(he)));
			class ye extends r.a.Component {
				render() {
					return r.a.createElement(be, this.props)
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
			const Ce = Object(O.u)(),
				Pe = Object(l.c)({
					isFakeSubreddit: O.z
				}),
				Se = Object(o.b)(Pe),
				Ee = e => {
					const t = {
						interactive: !1,
						voteState: _e.a.notVoted
					};
					return r.a.createElement("div", {
						className: Object(c.a)(Oe.a.emptyVotes, e.className)
					}, r.a.createElement(ge.d, t), r.a.createElement("div", {
						className: Object(c.a)(Oe.a.emptyScore, Object(ve.b)({
							isLoading: e.isLoading
						}))
					}), r.a.createElement(ge.c, t))
				};
			var we = Ce(Se(Object(N.a)(e => {
					let {
						className: t,
						isLoading: s,
						showSubreddit: n,
						...a
					} = e;
					return r.a.createElement("div", {
						className: Object(c.a)(Oe.a.container, ue.a.largeAndMediumPostStyles, t)
					}, r.a.createElement("div", {
						className: Object(c.a)(Oe.a.thumbnail, Object(ve.b)({
							isLoading: s
						}))
					}), r.a.createElement("div", {
						className: Oe.a.content
					}, r.a.createElement("div", {
						className: Oe.a.titleContainer
					}, r.a.createElement("div", {
						className: Object(c.a)(Oe.a.title, Object(ve.b)({
							isLoading: s
						}))
					}), r.a.createElement("div", {
						className: Object(c.a)(Oe.a.title, Object(ve.b)({
							isLoading: s
						}))
					})), n && r.a.createElement(R.a, {
						className: Oe.a.subreddit
					}, r.a.createElement(xe.a, ke({
						className: Object(c.a)(Object(ve.b)({
							isLoading: !1
						}))
					}, a)), r.a.createElement("div", {
						className: Object(c.a)(Oe.a.subredditName, Object(ve.b)({
							isLoading: s
						}))
					})), r.a.createElement(R.a, null, r.a.createElement(Ee, ke({
						isLoading: s
					}, a)), r.a.createElement("div", {
						className: Object(c.a)(Oe.a.comments, Object(ve.b)({
							isLoading: s
						}))
					}), r.a.createElement("div", {
						className: Object(c.a)(Oe.a.share, Object(ve.b)({
							isLoading: s
						}))
					}), r.a.createElement("div", {
						className: Object(c.a)(Oe.a.ellipsis, Object(ve.b)({
							isLoading: s
						}))
					}))))
				}))),
				Ie = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less"),
				Ne = s.n(Ie);
			var Te = e => r.a.createElement("div", {
					className: Object(c.a)(Ne.a.container, e.className)
				}, r.a.createElement("div", {
					className: Ne.a.largePosts
				}, r.a.createElement(we, {
					className: Ne.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), r.a.createElement(we, {
					className: Ne.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), r.a.createElement(we, {
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
						renderPost: a,
						...i
					} = e;
					const o = a ? a(i) : r.a.createElement(ye, i);
					return r.a.createElement(n.a, {
						root: t,
						threshold: .99,
						rootMargin: "0px 0px 0px 0px",
						onChange: s
					}, o)
				},
				Ue = Object(l.c)({
					isBlockingInterstitialEnabled: E.b,
					isBlockingInterstitialV2Enabled: E.c
				}),
				Be = Object(o.b)(Ue, (e, t) => {
					let {
						discoveryUnit: s,
						searchDiscoveryUnit: n,
						pageLayer: a
					} = t;
					return {
						openOverlay: t => e(Object(C.a)({
							pathname: Object(P.b)(t.permalink),
							state: Object(k.b)(a)
						})),
						trackPostClick: (t, s) => e((e, a) => n ? S.p(a(), n, t, s) : null),
						trackPostSubredditClick: t => e((e, a) => s ? S.r(a(), s, t) : n ? S.r(a(), n, t) : null),
						showModalOnPostLinkClick: t => e(Object(d.ab)(Object(P.b)(t.permalink), t.id))
					}
				}),
				He = Object(O.u)();
			t.a = He(Be(Object(j.c)(class extends _ {
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
							listingKey: a,
							pageLayer: r,
							searchDiscoveryUnit: i,
							searchOptions: o
						} = this.props;
						let l;
						return (l = "subreddit" === t && o ? S.y(o, r, a, i) : i && o ? S.z(o, r, null, a, i) : S.o(s, n))(e)
					}, this.renderPost = (e, t) => {
						const {
							isMiniCard: s,
							renderPost: n,
							singleSubredditMode: a
						} = this.props;
						return r.a.createElement(Fe, {
							"data-click-id": We,
							className: Me.a.largePost,
							eventFactory: this.itemPostClickEventFactory,
							forceLoadMedia: !0,
							isMiniCard: s,
							postId: e,
							onClickPost: this.onClickPost,
							showAuthorBlock: !!a,
							showMetaLine: !1,
							showSubscribeBlock: !a,
							handleVisibilityChange: this.makeVisibilityChangeHandler(t),
							renderPost: n,
							root: this.id,
							key: e
						})
					}, this.renderPosts = e => r.a.createElement("div", {
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
					} = this.props, a = s || e;
					a && t && t(a, n)
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
						shouldSlideIn: a,
						springConfig: o
					} = this.props;
					if (this.props.isLoading || 0 === this.props.items.length) return r.a.createElement(Te, {
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
					return r.a.createElement("div", {
						className: Object(c.a)(Me.a.postsWrapper, this.props.className),
						id: this.id,
						ref: this.setContainerRef
					}, r.a.createElement(i.Motion, {
						defaultStyle: {
							marginLeft: e || a ? Re : 0
						},
						style: {
							marginLeft: Object(i.spring)(f, o || Ve)
						}
					}, this.renderPosts), 0 !== d && r.a.createElement(x, {
						className: Object(c.a)(Me.a.arrowLeft, t),
						onClick: this.onClickPrev,
						seed: n
					}), !this.state.itemsFitInContainer && (null == m || d < m) && r.a.createElement(g, {
						className: Object(c.a)(Me.a.arrowRight, a && !e && Me.a.slideIn, s),
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
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
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
					hideNSFWPref: a,
					post: m,
					subredditOrProfile: f
				} = e;
				return r.a.createElement("div", {
					className: Object(i.a)(p.a.container, t)
				}, r.a.createElement(c.a, {
					className: p.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: f.url
				}, r.a.createElement(l.b, {
					className: p.a.subredditIcon,
					shouldHideNsfwIcon: a,
					subredditOrProfile: f
				}), r.a.createElement("span", null, f.displayText)), ((e, t) => {
					if (t) return r.a.createElement("div", {
						role: "img",
						"aria-label": n.fbt._("Crossposted by{author}from{community}", [n.fbt._param("author", Object(d.e)(e)), n.fbt._param("community", t.displayText)], {
							hk: "2OZoR0"
						})
					}, r.a.createElement(u.a, {
						name: "crosspost",
						className: p.a.CrosspostIcon
					}))
				})(m.author, s), f && f.isQuarantined && r.a.createElement(o.a, null))
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
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Thumbnail/index.tsx"),
				o = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				l = s.n(o);

			function c(e) {
				const {
					source: t
				} = e.post;
				return a.a.createElement("div", {
					className: Object(r.a)(l.a.container, e.className)
				}, a.a.createElement(i.b, {
					className: Object(r.a)(l.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(r.a)(l.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(r.a)(l.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
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
				a = s("./src/reddit/components/HumanDate/index.tsx"),
				r = s("./src/lib/timeUntil/index.ts"),
				i = s("./node_modules/react/index.js"),
				o = s.n(i);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function c(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return o.a.createElement("span", {
					className: e.className
				}, t ? l._("Voting closed {timeAgo}", [l._param("timeAgo", o.a.createElement(a.d, {
					seconds: e.poll.endsAt / n.Xb
				}))], {
					hk: "3OERID"
				}) : Object(r.a)(new Date(e.poll.endsAt)))
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
				a = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				o = s("./src/reddit/components/AdViewability/index.tsx"),
				l = s("./src/reddit/helpers/trackers/gallery.ts"),
				c = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				d = s("./src/reddit/hooks/useTracking.ts");
			var u = a.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(d.a)(),
						r = Object(n.useCallback)(t => {
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
					return Object(c.a)(t, r, i), a.a.createElement("div", {
						role: "presentation"
					}, a.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				f = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/telemetry.ts"),
				y = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/objectSelector/index.ts"),
				g = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				v = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				_ = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				j = s("./src/reddit/components/PostContainer/index.m.less"),
				O = s.n(j);
			const k = Object(p.a)(() => Object(r.c)({
					basePixelMetadata: Object(x.a)((e, t) => {
						let {
							post: s
						} = t;
						return Object(h.b)(e, s.id)
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
						return Object(h.i)(e, {
							postId: s.id
						})
					},
					pageType: e => Object(b.d)(e).pageType
				})),
				C = "post-container";
			class P extends a.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						imageGalleryCurrentItem: r,
						makePostContainerId: c,
						post: d,
						onClick: m,
						pageType: p,
						sendEvent: h,
						style: b,
						ref: x,
						shouldAddGalleryViewability: g = !0
					} = this.props, v = a.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: b,
						ref: x,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => m && m(s, d, t, r, p))(s), d.id && r) {
								const {
									source: e
								} = Object(i.t)(d, r);
								e && e.outboundUrl && h(Object(l.c)(d.id, e.outboundUrl))
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
					return (e => d.media && Object(f.E)(d.media) && g ? a.a.createElement(u, {
						postId: d.id
					}, e) : e)((e => d.isSponsored || j ? a.a.createElement(o.a, {
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
				a = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/controls/OutboundLink/index.tsx"),
				h = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				b = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				y = s("./src/reddit/actions/post.ts"),
				x = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				v = s("./src/reddit/hooks/useClickSourceData.ts"),
				_ = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				j = s("./src/reddit/hooks/usePostContext.ts"),
				O = s("./src/reddit/hooks/useTheme.ts"),
				k = s("./src/reddit/icons/fonts/index.tsx"),
				C = s("./src/reddit/models/Flair/index.ts"),
				P = s("./src/reddit/models/Media/index.ts"),
				S = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				E = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				w = s("./src/lib/getShortenedLink.ts"),
				I = s("./src/reddit/components/FlairWrapper/index.tsx"),
				N = s("./node_modules/fbt/lib/FbtPublic.js"),
				T = s("./src/lib/prettyPrintNumber/index.ts"),
				L = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				M = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				D = s.n(M);
			const A = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var V, R = Object(o.b)(A)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return Object(_.a)() ? null : i.a.createElement("div", {
						className: Object(u.a)(e.className, D.a.proposalMetaData)
					}, i.a.createElement("span", null, N.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [N.fbt._param("count", Object(T.a)(n)), N.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && i.a.createElement(L.a, {
						className: D.a.proposalExpiry,
						poll: t
					}))
				})),
				W = s("./src/reddit/components/SEOTitle/index.tsx"),
				F = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				U = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				B = s("./src/reddit/selectors/user.ts"),
				H = s("./src/telemetry/models/Outbound.ts"),
				q = s("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				Q = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				z = s("./src/reddit/components/PostTitle/index.m.less"),
				Z = s.n(z);

			function G() {
				return (G = Object.assign || function(e) {
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
						nowrap: a,
						children: r,
						className: o,
						redditStyle: l,
						shouldBlurTitle: c
					} = e;
					const d = Object(O.a)();
					let m = "";
					switch (t) {
						case V.ExtraLarge:
							m = Z.a.ExtraLarge;
							break;
						case V.Large:
							m = Z.a.Large;
							break;
						case V.Medium:
							m = Z.a.Medium;
							break;
						case V.Small:
							m = Z.a.Small;
							break;
						case V.ExtraSmall:
							m = Z.a.ExtraSmall;
							break;
						case V.Metadata:
							m = Z.a.Metadata
					}
					return i.a.createElement("div", {
						className: Object(u.a)(Z.a.Title, o, m, {
							[Z.a.isNoWrap]: a,
							[Z.a.blur]: c
						}),
						style: {
							"--posttitletextcolor": s || Object(E.a)({
								redditStyle: l,
								theme: d
							}).titleText
						}
					}, n ? i.a.createElement(W.b, {
						type: n
					}, r) : r)
				},
				K = e => {
					let {
						className: t,
						disableVisited: s,
						titleColor: n,
						children: a,
						...r
					} = e;
					return i.a.createElement(l.a, G({}, r, {
						className: Object(u.a)(t, Z.a.styledLink, {
							[Z.a.isVisitedEnabled]: !s
						})
					}), a)
				},
				X = e => {
					let {
						disableVisited: t,
						nowrap: s,
						className: n,
						children: a
					} = e;
					return i.a.createElement("div", {
						className: Object(u.a)(Z.a.titleContainer, n, {
							[Z.a.isNoWrap]: s,
							[Z.a.isVisitedEnabled]: !t
						})
					}, a)
				},
				J = Object(c.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(p.q)(e, {
							pageLayer: s
						})
					},
					isNsfwBlurSubreddit: U.e,
					shouldOpenPostInNewTab: B.kb
				}),
				$ = e => {
					const {
						post: t,
						subreddit: s
					} = e, {
						isSponsored: n
					} = t, a = Object(o.d)(), r = Object(v.a)(), l = Object(o.e)(F.b), c = Object(o.e)(F.c), u = e => {
						!l && !c || t.media && Object(P.H)(t.media) || (e.preventDefault(), a(Object(y.ab)(Object(x.b)(t.permalink), t.id)))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return i.a.createElement(X, {
						nowrap: e.nowrap
					}, i.a.createElement(ee, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return i.a.createElement(f.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, i.a.createElement(ee, e)); {
						const a = t.media && Object(P.H)(t.media) ? Object(g.c)(t.id, s.name) : t.permalink,
							o = e.isCommentPermalink ? Object(x.b)(a) : Object(b.a)(a, void 0, r);
						return i.a.createElement(X, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n ? ((e, t) => {
							const {
								source: s
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return s ? i.a.createElement(f.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, i.a.createElement(ee, t)) : i.a.createElement(ee, t)
						})(t, e) : i.a.createElement(K, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: o,
							onClick: u
						}, i.a.createElement(ee, e)))
					}
				},
				ee = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: s,
						post: n
					} = e;
					let a = e.format ? e.format(n) : n.title;
					s && "string" == typeof a && (a = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(a));
					const r = e.isCommentsPage ? W.a.PostComments : W.a.PostItem,
						o = !(!e.isNsfwBlurSubreddit || !e.post.isNSFW);
					return i.a.createElement(Y, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: o,
						size: e.size,
						titleColor: e.titleColor,
						titleType: r
					}, t && i.a.createElement(I.a, {
						titleFlair: t,
						nowrap: !0,
						post: n,
						sendEvent: e.sendEvent
					}), a)
				},
				te = e => {
					const {
						hideSourceLink: t,
						isNsfwBlurSubreddit: s,
						post: n
					} = e, {
						isSponsored: a
					} = n, r = e.isCommentsPage ? H.SourceElement.PostLink : H.SourceElement.ListingPostLink;
					if (Object(_.a)()) return null;
					if (s && n.isNSFW) return null;
					const o = !t && !e.isCrosspost && e.size !== V.Large && !n.isSponsored && !(n.media && Object(P.H)(n.media)) && (n.source || n.media && (n.media.type === P.o.GIFVIDEO || n.media.type === P.o.IMAGE || n.media.type === P.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (o) return i.a.createElement(h.a, {
							className: e.outboundLinkClassName,
							href: Object(P.D)(n),
							isSponsored: a,
							postId: n.id,
							source: n.source,
							sourceElement: r
						}, Object(w.a)(n), !n.isSponsored && i.a.createElement(k.a, {
							name: "external_link",
							className: Z.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== V.Large && e.size !== V.ExtraLarge) return i.a.createElement(h.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: a,
						postId: n.id,
						source: n.source,
						sourceElement: r
					}, Object(w.a)(n), !n.isSponsored && i.a.createElement(k.a, {
						name: "external_link",
						className: Z.a.outboundLinkIcon
					}));
					return null
				};
			class se extends i.a.Component {
				getDynamicStyleTags() {
					return i.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${Z.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(a.c)(.45,Object(E.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(a.c)(.45,this.props.titleColor||Object(E.a)(this.props).titleText,Object(E.a)(this.props).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(a.c)(.45,Object(E.a)(this.props).bodyText,Object(E.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: s,
						isCommentsPage: a,
						isOverlay: r,
						poll: o,
						post: l,
						showNSFWSpoilerFlairsOnly: c,
						hideNSFWSpoilerFlair: d,
						onClick: m
					} = this.props, p = s === C.b.Left, f = Object(I.b)(l), {
						leftFlair: h,
						rightFlair: b
					} = Object(q.a)({
						flair: f,
						isFlairPositionedLeft: p,
						showNSFWSpoilerFlairsOnly: c,
						hideNSFWSpoilerFlair: d
					}), y = !r && !a && !t, x = y && h && h.length > 0, g = y && b && b.length > 0;
					return i.a.createElement("div", {
						className: Object(u.a)(Z.a.Component, e, l.id),
						ref: this.props.innerRef,
						"data-adclicklocation": Q.a.TITLE,
						onClick: m
					}, !c && x && i.a.createElement(I.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: l,
						sendEvent: this.props.sendEvent
					}), !Object(S.b)(l) && i.a.createElement($, G({}, this.props, {
						leftFlair: c ? h : void 0
					})), o && i.a.createElement(R, {
						className: Z.a.pollMeta,
						pollId: o.id
					}), i.a.createElement(te, this.props), g && i.a.createElement(I.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: l,
						sendEvent: this.props.sendEvent
					}), i.a.createElement("div", {
						className: Z.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${n.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = i.a.memo((function(e) {
				const t = Object(p.eb)(),
					s = Object(p.w)(t),
					n = Object(j.a)(),
					a = Object(o.e)(a => J(a, {
						...n,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					r = Object(O.a)(),
					l = Object(m.b)();
				return n ? i.a.createElement(se, G({
					pageLayer: t,
					isCommentPermalink: s
				}, n, a, e, {
					theme: r,
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
				a = s("./node_modules/react/index.js"),
				r = s.n(a),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				o = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				u = s("./src/reddit/components/QuarantinedLabel/index.m.less"),
				m = s.n(u);
			const p = ["center", "top"],
				f = ["center", "bottom"],
				h = o.a.div("Container", m.a),
				b = Object(i.a)(l.b),
				y = Object(c.u)({
					isProfileListingPage: c.I
				});
			class x extends r.a.Component {
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
					return r.a.createElement(h, {
						innerRef: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, r.a.createElement(d.a, {
						className: m.a.quarantineIcon
					}), n.fbt._("quarantined", null, {
						hk: "3hfN4T"
					}), r.a.createElement(b, {
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
				a = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				r = s.n(a);
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(n.a, "SubredditName", r.a);
			t.a = i
		},
		"./src/reddit/hooks/useIsRemovedOrDeletedPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/selectors/removedPosts.ts");
			const r = () => Object(n.e)(e => Object(a.d)(e))
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				a = s("./src/lib/CSSVariableProvider/index.tsx");

			function r() {
				return Object(n.useContext)(a.b)
			}
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("g", null, a.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/DiscoveryUnitArrow/Left/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/colors.ts");
			const i = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return `${t}-du-left-${e}`
			};
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = i("a", t), n = i("b", t), o = i("c", t), l = i("d", t);
				return a.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "4 0 45 45",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("defs", null, a.a.createElement("circle", {
					id: n,
					cx: "18",
					cy: "18",
					r: "18"
				}), a.a.createElement("filter", {
					id: s,
					x: "-33.3%",
					y: "-25%",
					width: "166.7%",
					height: "166.7%"
				}, a.a.createElement("feOffset", {
					dy: "3",
					in: "SourceAlpha",
					result: "shadowOffsetOuter1"
				}), a.a.createElement("feGaussianBlur", {
					in: "shadowOffsetOuter1",
					result: "shadowBlurOuter1"
				}), a.a.createElement("feColorMatrix", {
					in: "shadowBlurOuter1",
					values: "0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.105882353 0 0 0 0.3 0"
				})), a.a.createElement("path", {
					id: o,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), a.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, a.a.createElement("g", {
					fillRule: "nonzero",
					transform: "matrix(-1 0 0 1 43 4)"
				}, a.a.createElement("use", {
					fill: r.a.black,
					filter: `url(#${s})`,
					xlinkHref: `#${n}`
				}), a.a.createElement("use", {
					fill: r.a.white,
					xlinkHref: `#${n}`
				})), a.a.createElement("g", {
					transform: "matrix(0 1 1 0 17.174 14.174)"
				}, a.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), a.a.createElement("mask", {
					id: l,
					fill: r.a.white
				}, a.a.createElement("use", {
					xlinkHref: `#${o}`
				})), a.a.createElement("use", {
					fill: r.a.black,
					xlinkHref: `#${o}`
				}), a.a.createElement("g", {
					fill: r.a.alienblue,
					mask: `url(#${l})`
				}, a.a.createElement("path", {
					d: "M0 0h16v16H0z"
				})))))
			}
		},
		"./src/reddit/icons/svgs/DiscoveryUnitArrow/Right/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/colors.ts");
			const i = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return `${t}-du-right-${e}`
			};
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = i("a", t), n = i("b", t), o = i("c", t), l = i("d", t);
				return a.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "4 0 45 45",
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("defs", null, a.a.createElement("circle", {
					id: n,
					cx: "18",
					cy: "18",
					r: "18"
				}), a.a.createElement("filter", {
					id: s,
					x: "-33.3%",
					y: "-25%",
					width: "166.7%",
					height: "166.7%"
				}, a.a.createElement("feOffset", {
					dy: "3",
					in: "SourceAlpha",
					result: "shadowOffsetOuter1"
				}), a.a.createElement("feGaussianBlur", {
					in: "shadowOffsetOuter1",
					result: "shadowBlurOuter1"
				}), a.a.createElement("feColorMatrix", {
					in: "shadowBlurOuter1",
					values: "0 0 0 0 0.101960784 0 0 0 0 0.101960784 0 0 0 0 0.105882353 0 0 0 0.3 0"
				})), a.a.createElement("path", {
					id: o,
					d: "M12 8a.798.798 0 0 1-.566-.234L8 4.33 4.566 7.766a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 8zm0 4.8a.798.798 0 0 1-.566-.234L8 9.13l-3.434 3.435a.8.8 0 1 1-1.132-1.132l4-4a.8.8 0 0 1 1.132 0l4 4A.8.8 0 0 1 12 12.8z"
				})), a.a.createElement("g", {
					fill: "none",
					fillRule: "evenodd"
				}, a.a.createElement("g", {
					fillRule: "nonzero",
					transform: "translate(7 4)"
				}, a.a.createElement("use", {
					fill: r.a.black,
					filter: `url(#${s})`,
					xlinkHref: `#${n}`
				}), a.a.createElement("use", {
					fill: r.a.white,
					xlinkHref: `#${n}`
				})), a.a.createElement("g", {
					transform: "rotate(90 9.326 23.5)"
				}, a.a.createElement("path", {
					d: "M0 16h16V0H0z"
				}), a.a.createElement("mask", {
					id: l,
					fill: r.a.white
				}, a.a.createElement("use", {
					xlinkHref: `#${o}`
				})), a.a.createElement("use", {
					fill: r.a.black,
					xlinkHref: `#${o}`
				}), a.a.createElement("g", {
					fill: r.a.alienblue,
					mask: `url(#${l})`
				}, a.a.createElement("path", {
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
				a = s("./src/reddit/layout/row/Inline/index.m.less"),
				r = s.n(a);
			t.a = n.a.div("inlineRow", r.a)
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
				a = s.n(n),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
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
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: n,
					widthLeft: r,
					gutter: o,
					...d
				} = e;
				return a.a.createElement("div", c({
					className: Object(i.a)(l.a.expandRightContainer, t)
				}, d), a.a.createElement("div", {
					className: l.a.left,
					style: {
						flexBasis: r,
						height: n,
						marginRight: o
					}
				}, Array.isArray(s) && s[0]), a.a.createElement("div", {
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
				return h
			})), s.d(t, "d", (function() {
				return b
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				i = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				o = s("./src/reddit/models/Media/index.ts"),
				l = s("./src/reddit/models/Post/index.ts"),
				c = s("./src/reddit/selectors/user.ts");
			const d = new Set([l.g.AntiEvilOps, l.g.AutomodFiltered, l.g.CommunityOps, l.g.ContentTakedown, l.g.CopyrightTakedown, l.g.Moderator, l.g.Reddit]),
				u = new Set([l.g.Author, l.g.AuthorDeleted]),
				m = Object(a.a)(r.a, e => {
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
					let a = Object(i.b)(e);
					return a || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== o.o.TEXT || (a = e.media.markdownContent), a === s
				}),
				p = Object(a.a)(r.a, e => {
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
					let a = Object(i.b)(e);
					return a || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== o.o.TEXT || (a = e.media.markdownContent), a === s
				}),
				f = Object(a.a)(r.a, e => {
					if (!e) return !1;
					if (e && e.isSpam) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return u.has(t)
					}
					return !(e.created > Date.UTC(2019, 0))
				}),
				h = Object(a.a)(c.l, r.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				b = Object(a.a)(r.a, e => !(!e || !1 !== e.isRobotIndexable))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditTopContent~TopWeekPostsDiscoveryUnit.1d43907b57ceeaefd7b2.js.map