// https://www.redditstatic.com/desktop2x/SubredditTopContent~TopWeekPostsDiscoveryUnit.33f402074e080ef46858.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
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
			var o = r(s("./node_modules/react-motion/lib/mapToZero.js")),
				i = r(s("./node_modules/react-motion/lib/stripStyle.js")),
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
								o = s.currentVelocity,
								i = s.lastIdealStyle,
								l = s.lastIdealVelocity;
							for (var c in e)
								if (Object.prototype.hasOwnProperty.call(e, c)) {
									var d = e[c];
									"number" == typeof d && (t || (t = !0, r = n({}, r), o = n({}, o), i = n({}, i), l = n({}, l)), r[c] = d, o[c] = 0, i[c] = d, l[c] = 0)
								} t && a.setState({
								currentStyle: r,
								currentVelocity: o,
								lastIdealStyle: i,
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
									o = Math.floor(a.accumulatedTime / f),
									i = {},
									d = {},
									m = {},
									p = {};
								for (var h in t)
									if (Object.prototype.hasOwnProperty.call(t, h)) {
										var b = t[h];
										if ("number" == typeof b) m[h] = b, p[h] = 0, i[h] = b, d[h] = 0;
										else {
											for (var y = a.state.lastIdealStyle[h], v = a.state.lastIdealVelocity[h], x = 0; x < o; x++) {
												var g = l.default(f / 1e3, y, v, b.val, b.stiffness, b.damping, b.precision);
												y = g[0], v = g[1]
											}
											var O = l.default(f / 1e3, y, v, b.val, b.stiffness, b.damping, b.precision),
												j = O[0],
												_ = O[1];
											m[h] = y + (j - y) * r, p[h] = v + (_ - v) * r, i[h] = y, d[h] = v
										}
									} a.animationID = null, a.accumulatedTime -= o * f, a.setState({
									currentStyle: m,
									currentVelocity: p,
									lastIdealStyle: i,
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
							n = t || i.default(s),
							a = o.default(n);
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
			var o = r(s("./node_modules/react-motion/lib/mapToZero.js")),
				i = r(s("./node_modules/react-motion/lib/stripStyle.js")),
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
						for (var t = a.state, s = t.currentStyles, r = t.currentVelocities, o = t.lastIdealStyles, i = t.lastIdealVelocities, l = !1, c = 0; c < e.length; c++) {
							var d = e[c],
								u = !1;
							for (var m in d)
								if (Object.prototype.hasOwnProperty.call(d, m)) {
									var p = d[m];
									"number" == typeof p && (u || (u = !0, l = !0, s[c] = n({}, s[c]), r[c] = n({}, r[c]), o[c] = n({}, o[c]), i[c] = n({}, i[c])), s[c][m] = p, r[c][m] = 0, o[c][m] = p, i[c][m] = 0)
								}
						}
						l && a.setState({
							currentStyles: s,
							currentVelocities: r,
							lastIdealStyles: o,
							lastIdealVelocities: i
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
							for (var r = (a.accumulatedTime - Math.floor(a.accumulatedTime / f) * f) / f, o = Math.floor(a.accumulatedTime / f), i = [], d = [], m = [], p = [], h = 0; h < t.length; h++) {
								var b = t[h],
									y = {},
									v = {},
									x = {},
									g = {};
								for (var O in b)
									if (Object.prototype.hasOwnProperty.call(b, O)) {
										var j = b[O];
										if ("number" == typeof j) y[O] = j, v[O] = 0, x[O] = j, g[O] = 0;
										else {
											for (var _ = a.state.lastIdealStyles[h][O], k = a.state.lastIdealVelocities[h][O], C = 0; C < o; C++) {
												var P = l.default(f / 1e3, _, k, j.val, j.stiffness, j.damping, j.precision);
												_ = P[0], k = P[1]
											}
											var w = l.default(f / 1e3, _, k, j.val, j.stiffness, j.damping, j.precision),
												S = w[0],
												I = w[1];
											y[O] = _ + (S - _) * r, v[O] = k + (I - k) * r, x[O] = _, g[O] = k
										}
									} m[h] = y, p[h] = v, i[h] = x, d[h] = g
							}
							a.animationID = null, a.accumulatedTime -= o * f, a.setState({
								currentStyles: m,
								currentVelocities: p,
								lastIdealStyles: i,
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
						n = t || s().map(i.default),
						a = n.map((function(e) {
							return o.default(e)
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
			var o = r(s("./node_modules/react-motion/lib/mapToZero.js")),
				i = r(s("./node_modules/react-motion/lib/stripStyle.js")),
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

			function y(e, t, s, n, a, r, i, l, d) {
				for (var u = c.default(n, a, (function(e, n) {
						var a = t(n);
						return null == a ? (s({
							key: n.key,
							data: n.data
						}), null) : m.default(r[e], a, i[e]) ? (s({
							key: n.key,
							data: n.data
						}), null) : {
							key: n.key,
							data: n.data,
							style: a
						}
					})), p = [], f = [], h = [], b = [], y = 0; y < u.length; y++) {
					for (var v = u[y], x = null, g = 0; g < n.length; g++)
						if (n[g].key === v.key) {
							x = g;
							break
						} if (null == x) {
						var O = e(v);
						p[y] = O, h[y] = O;
						var j = o.default(v.style);
						f[y] = j, b[y] = j
					} else p[y] = r[x], h[y] = l[x], f[y] = i[x], b[y] = d[x]
				}
				return [u, p, f, h, b]
			}
			var v = function(e) {
				function t(s) {
					var a = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, s), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = y(a.props.willEnter, a.props.willLeave, a.props.didLeave, a.state.mergedPropsStyles, e, a.state.currentStyles, a.state.currentVelocities, a.state.lastIdealStyles, a.state.lastIdealVelocities), s = t[0], r = t[1], o = t[2], i = t[3], l = t[4], c = 0; c < e.length; c++) {
							var d = e[c].style,
								u = !1;
							for (var m in d)
								if (Object.prototype.hasOwnProperty.call(d, m)) {
									var p = d[m];
									"number" == typeof p && (u || (u = !0, r[c] = n({}, r[c]), o[c] = n({}, o[c]), i[c] = n({}, i[c]), l[c] = n({}, l[c]), s[c] = {
										key: s[c].key,
										data: s[c].data,
										style: n({}, s[c].style)
									}), r[c][m] = p, o[c][m] = 0, i[c][m] = p, l[c][m] = 0, s[c].style[m] = p)
								}
						}
						a.setState({
							currentStyles: r,
							currentVelocities: o,
							mergedPropsStyles: s,
							lastIdealStyles: i,
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
								for (var o = (a.accumulatedTime - Math.floor(a.accumulatedTime / h) * h) / h, i = Math.floor(a.accumulatedTime / h), c = y(a.props.willEnter, a.props.willLeave, a.props.didLeave, a.state.mergedPropsStyles, s, a.state.currentStyles, a.state.currentVelocities, a.state.lastIdealStyles, a.state.lastIdealVelocities), u = c[0], p = c[1], f = c[2], v = c[3], x = c[4], g = 0; g < u.length; g++) {
									var O = u[g].style,
										j = {},
										_ = {},
										k = {},
										C = {};
									for (var P in O)
										if (Object.prototype.hasOwnProperty.call(O, P)) {
											var w = O[P];
											if ("number" == typeof w) j[P] = w, _[P] = 0, k[P] = w, C[P] = 0;
											else {
												for (var S = v[g][P], I = x[g][P], E = 0; E < i; E++) {
													var N = l.default(h / 1e3, S, I, w.val, w.stiffness, w.damping, w.precision);
													S = N[0], I = N[1]
												}
												var T = l.default(h / 1e3, S, I, w.val, w.stiffness, w.damping, w.precision),
													L = T[0],
													M = T[1];
												j[P] = S + (L - S) * o, _[P] = I + (M - I) * o, k[P] = S, C[P] = I
											}
										} v[g] = k, x[g] = C, p[g] = j, f[g] = _
								}
								a.animationID = null, a.accumulatedTime -= i * h, a.setState({
									currentStyles: p,
									currentVelocities: f,
									lastIdealStyles: v,
									lastIdealVelocities: x,
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
							return i.default(e.style)
						})) : t.map((function(e) {
							return i.default(e.style)
						})),
						u = null == t ? l.map((function(e) {
							return o.default(e.style)
						})) : t.map((function(e) {
							return o.default(e.style)
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
			t.default = v, e.exports = t.default
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
				var o = [];
				for (a = 0; a < t.length; a++) o[a] = t[a];
				for (a = 0; a < e.length; a++)
					if (!Object.prototype.hasOwnProperty.call(r, e[a].key)) {
						var i = s(a, e[a]);
						null != i && o.push(i)
					} return o.sort((function(e, s) {
					var a = r[e.key],
						o = r[s.key],
						i = n[e.key],
						l = n[s.key];
					if (null != a && null != o) return r[e.key] - r[s.key];
					if (null != i && null != l) return n[e.key] - n[s.key];
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
							if (o < r[d] && i > n[d]) return 1;
							if (o > r[d] && i < n[d]) return -1
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
				return n({}, i, t, {
					val: e
				})
			};
			var a, r = s("./node_modules/react-motion/lib/presets.js"),
				o = (a = r) && a.__esModule ? a : {
					default: a
				},
				i = n({}, o.default.noWobble, {
					precision: .01
				});
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stepper.js": function(e, t, s) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, s, a, r, o, i) {
				var l = s + (-r * (t - a) + -o * s) * e,
					c = t + l * e;
				if (Math.abs(l) < i && Math.abs(c - a) < i) return n[0] = a, n[1] = 0, n;
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
				function e(e, t, s, a, r, o) {
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
		"./src/higherOrderComponents/withAdClickLocation/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const i = e => (e, t, s) => ({
				...o.q(e),
				source: "post",
				action: "click",
				noun: "ad",
				adClick: {
					location: t
				},
				actionInfo: o.d(e),
				adblock: o.f(e),
				app: o.g(e),
				feed: o.t(e),
				geo: o.v(e),
				platform: o.K(e),
				referrer: o.bb(e),
				request: o.cb(e),
				screen: o.eb(e),
				session: o.jb(e),
				user: o.ub(e),
				media: s ? o.E(e, s) : null,
				post: s ? o.M(e, s) : null
			});
			var l = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				c = s("./src/telemetry/index.ts");
			const d = new Set;

			function u(e) {
				function t(t) {
					const s = Object(r.f)().getState(),
						{
							post: n
						} = {
							...t
						};
					return n && n.isSponsored ? a.a.createElement("div", {
						onClickCapture: function(e, n) {
							var a, r;
							if (d.has(e.timeStamp)) return;
							d.add(e.timeStamp);
							const o = function(e) {
								if (e.dataset.adclicklocation) return e.dataset.adclicklocation;
								const t = e.closest(".PostContainer, [data-adclicklocation]");
								return t ? t.dataset.adclicklocation : l.a.UNKNOWN
							}(e.target);
							o && (! function(e, t) {
								return Object.values(t).some(t => t === e)
							}(o, l.b) ? Object(c.a)(i(n)(s, o, null === (r = t.post) || void 0 === r ? void 0 : r.postId)) : Object(c.a)(i(n)(s, l.a.UNKNOWN, null === (a = t.post) || void 0 === a ? void 0 : a.postId)))
						}
					}, a.a.createElement(e, t)) : a.a.createElement(e, t)
				}
				const s = e.name || e.displayName;
				return t.displayName = `WithAdClickLocation(${s})`, t
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
				o = s("./node_modules/react-motion/lib/react-motion.js"),
				i = s("./node_modules/react-redux/es/index.js"),
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
			const v = e => r.a.createElement("button", {
					className: Object(c.a)(y.a.arrow, e.className),
					onClick: e.onClick
				}, r.a.createElement(f.a, {
					className: y.a.arrowIcon,
					seed: e.seed
				})),
				x = e => r.a.createElement("button", {
					className: Object(c.a)(y.a.arrow, e.className),
					onClick: e.onClick
				}, r.a.createElement(h.a, {
					className: y.a.arrowIcon,
					seed: e.seed
				}));
			class g extends r.a.Component {
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
						} = e, o = 0;
						if (n === s && r) {
							const e = r * t + this.getSpacerCount(r) * a;
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
						spacerWidth: a = 0
					} = e;
					if (!t) return !0;
					const r = s.length * n,
						o = this.getSpacerCount(s.length) * a;
					return t.offsetWidth >= r + o
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
			var O = g,
				j = s("./src/reddit/components/TrackingHelper/index.tsx"),
				_ = s("./src/reddit/contexts/PageLayer/index.tsx"),
				k = s("./src/reddit/helpers/clickSourceData/index.ts"),
				C = s("./src/reddit/helpers/overlay/index.ts"),
				P = s("./src/reddit/helpers/path/index.ts"),
				w = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				S = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				I = s("./node_modules/fbt/lib/FbtPublic.js"),
				E = s("./src/lib/prettyPrintNumber/index.ts"),
				N = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				T = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				L = s("./src/reddit/constants/posts.ts"),
				M = s("./src/lib/constants/index.ts"),
				D = s("./src/reddit/components/HumanDate/index.tsx"),
				A = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				W = s("./src/reddit/hooks/useClickSourceData.ts"),
				R = s("./src/reddit/layout/row/Inline/index.tsx"),
				V = s("./src/reddit/components/DiscoveryUnit/PostAuthor/index.m.less"),
				U = s.n(V);
			var B = e => {
					const t = L.a.PROFILE,
						s = Object(A.a)(e.author, t),
						n = Object(W.a)();
					return r.a.createElement("div", {
						className: Object(c.a)(U.a.container, e.className)
					}, r.a.createElement(R.a, {
						className: U.a.layout
					}, r.a.createElement("div", {
						className: U.a.textContainer
					}, r.a.createElement("span", {
						className: U.a.description
					}, I.fbt._("posted by", null, {
						hk: "wl0iP"
					})), e.author === M.F ? r.a.createElement("span", {
						className: U.a.authorName
					}, Object(A.b)(e.author, t)) : r.a.createElement(T.a, {
						className: U.a.authorName,
						to: {
							pathname: s,
							state: n
						}
					}, Object(A.b)(e.author, t)), r.a.createElement("span", {
						className: U.a.timestamp
					}, r.a.createElement(D.d, {
						seconds: e.created / M.Wb
					})))))
				},
				H = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				Q = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				F = s("./src/reddit/components/DiscoveryUnit/PostCommunity/index.m.less"),
				q = s.n(F);
			var K = e => {
					const t = Object(A.a)(e.name, e.type);
					return r.a.createElement("div", {
						className: Object(c.a)(q.a.container, e.className)
					}, r.a.createElement(Q.a, {
						className: q.a.layout
					}, r.a.createElement("div", {
						className: q.a.iconContainer
					}, e.iconUrl ? r.a.createElement("img", {
						className: q.a.icon,
						src: e.iconUrl
					}) : r.a.createElement(H.a, {
						className: q.a.planetIcon,
						"data-redditstyle": !0
					})), r.a.createElement("div", {
						className: q.a.textContainer
					}, r.a.createElement(T.a, {
						"data-click-id": "subreddit",
						className: q.a.name,
						to: t
					}, Object(A.b)(e.displayText || e.name, e.type)), r.a.createElement("span", {
						className: q.a.separator
					}, "•"), r.a.createElement("span", {
						className: q.a.timestamp
					}, r.a.createElement(D.d, {
						seconds: e.created / M.Wb
					})))))
				},
				Z = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				G = s("./src/reddit/components/Media/index.tsx"),
				z = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				J = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				Y = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				X = s("./src/reddit/components/PostContainer/index.tsx"),
				$ = s("./src/reddit/components/PostTitle/index.tsx"),
				ee = s("./src/reddit/connectors/miniCardPost.ts"),
				te = s("./src/reddit/contexts/Post/index.tsx"),
				se = s("./src/reddit/helpers/canPreviewSelfText/index.ts"),
				ne = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				ae = s("./src/reddit/helpers/widgets/index.tsx"),
				re = s("./src/reddit/models/Media/index.ts"),
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
			class he extends r.a.Component {
				render() {
					const {
						autoplayPref: e,
						availableWidth: t,
						className: s,
						crosspostRoot: n,
						crosspostSubredditOrProfile: a,
						eventFactory: o,
						flairStyleTemplate: i,
						forceLoadMedia: l,
						hideNSFWPref: d,
						isMiniCard: u = !0,
						onClickPost: m,
						post: p,
						scrollerItemRef: f,
						shouldPause: h,
						showAuthorBlock: b = !1,
						showMetaLine: y = !0,
						showSubscribeBlock: v = !1,
						subredditOrProfile: x,
						theme: g
					} = this.props, {
						media: O
					} = n || p, j = Object(oe.q)(p);
					let _ = O && r.a.createElement(G.a, {
							autoplayPref: e,
							availableWidth: t,
							className: ce.a.media,
							forceAspectRatio: re.b,
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
					O && _ && (O.type !== re.o.RTJSON && O.type !== re.o.TEXT ? (_ = r.a.createElement("div", {
						className: pe.a.mediaWrapper
					}, _), k = !0) : O && O.content && Object(se.a)(p, null == g ? void 0 : g.subredditContext) && (_ = r.a.createElement("div", {
						className: pe.a.textWrapper
					}, _)));
					const C = !k && !j;
					let P;
					return x && (P = Object(ie.i)(x) ? Object(ae.b)(x) : Object(ae.c)(x)), r.a.createElement(X.b, {
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
					}, r.a.createElement(Y.a, {
						className: ce.a.backgroundWrapper,
						flairStyleTemplate: i
					}, r.a.createElement("div", {
						className: Object(c.a)(pe.a.innerContainer, ce.a.innerContainer)
					}, v && x && r.a.createElement(K, fe({
						created: p.created
					}, P)), b && x && r.a.createElement(B, fe({
						created: p.created,
						author: p.author
					}, P)), r.a.createElement($.c, {
						className: C ? pe.a.postTitle : pe.a.postTitleCompact,
						disableFlair: !0,
						hideSourceLink: !0,
						post: p,
						size: $.b.Large,
						titleColor: i && i.postTitleColor
					}), y && x && r.a.createElement(z.a, {
						className: pe.a.metaLine,
						crosspostSubredditOrProfile: a,
						hideNSFWPref: d,
						post: p,
						subredditOrProfile: x
					}), (k || j) && r.a.createElement("div", {
						className: pe.a.flexSpacer
					}), j && r.a.createElement("div", {
						className: pe.a.mediaWrapper
					}, r.a.createElement(J.a, {
						className: pe.a.thumbnailWrapper,
						thumbnailClassName: pe.a.thumbnail,
						thumbnailContainerClassName: pe.a.thumbnailContainer,
						post: p,
						templatePlaceholderImage: i && i.postPlaceholderImage
					})), _, r.a.createElement("div", {
						className: pe.a.metaWrapper
					}, r.a.createElement("span", {
						className: pe.a.meta
					}, I.fbt._({
						"*": "{number} points",
						_1: "1 score"
					}, [I.fbt._plural(p.score, "number", Object(E.b)(p.score))], {
						hk: "2ncFte"
					})), r.a.createElement("span", {
						className: pe.a.meta
					}, I.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [I.fbt._plural(p.numComments, "number", Object(E.b)(p.numComments))], {
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
			var ve = s("./src/reddit/components/SubredditIcon/index.tsx"),
				xe = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				ge = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				Oe = s("./src/reddit/models/Vote/index.ts"),
				je = s("./src/reddit/components/MiniCardPost/Placeholder/index.m.less"),
				_e = s.n(je);

			function ke() {
				return (ke = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ce = Object(_.v)(),
				Pe = Object(l.c)({
					isFakeSubreddit: _.A
				}),
				we = Object(i.b)(Pe),
				Se = e => {
					const t = {
						interactive: !1,
						voteState: Oe.a.notVoted
					};
					return r.a.createElement("div", {
						className: Object(c.a)(_e.a.emptyVotes, e.className)
					}, r.a.createElement(xe.d, t), r.a.createElement("div", {
						className: Object(c.a)(_e.a.emptyScore, Object(ge.b)({
							isLoading: e.isLoading
						}))
					}), r.a.createElement(xe.c, t))
				};
			var Ie = Ce(we(Object(N.a)(e => {
					let {
						className: t,
						isLoading: s,
						showSubreddit: n,
						...a
					} = e;
					return r.a.createElement("div", {
						className: Object(c.a)(_e.a.container, ue.a.largeAndMediumPostStyles, t)
					}, r.a.createElement("div", {
						className: Object(c.a)(_e.a.thumbnail, Object(ge.b)({
							isLoading: s
						}))
					}), r.a.createElement("div", {
						className: _e.a.content
					}, r.a.createElement("div", {
						className: _e.a.titleContainer
					}, r.a.createElement("div", {
						className: Object(c.a)(_e.a.title, Object(ge.b)({
							isLoading: s
						}))
					}), r.a.createElement("div", {
						className: Object(c.a)(_e.a.title, Object(ge.b)({
							isLoading: s
						}))
					})), n && r.a.createElement(R.a, {
						className: _e.a.subreddit
					}, r.a.createElement(ve.a, ke({
						className: Object(c.a)(Object(ge.b)({
							isLoading: !1
						}))
					}, a)), r.a.createElement("div", {
						className: Object(c.a)(_e.a.subredditName, Object(ge.b)({
							isLoading: s
						}))
					})), r.a.createElement(R.a, null, r.a.createElement(Se, ke({
						isLoading: s
					}, a)), r.a.createElement("div", {
						className: Object(c.a)(_e.a.comments, Object(ge.b)({
							isLoading: s
						}))
					}), r.a.createElement("div", {
						className: Object(c.a)(_e.a.share, Object(ge.b)({
							isLoading: s
						}))
					}), r.a.createElement("div", {
						className: Object(c.a)(_e.a.ellipsis, Object(ge.b)({
							isLoading: s
						}))
					}))))
				}))),
				Ee = s("./src/reddit/components/DiscoveryUnit/Layout/Posts/index.m.less"),
				Ne = s.n(Ee);
			var Te = e => r.a.createElement("div", {
					className: Object(c.a)(Ne.a.container, e.className)
				}, r.a.createElement("div", {
					className: Ne.a.largePosts
				}, r.a.createElement(Ie, {
					className: Ne.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), r.a.createElement(Ie, {
					className: Ne.a.topPostLargePost,
					isLoading: !0,
					showSubreddit: e.showSubreddit
				}), r.a.createElement(Ie, {
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
				Re = 100,
				Ve = "post_carousel_item",
				Ue = e => {
					let {
						root: t,
						handleVisibilityChange: s,
						renderPost: a,
						...o
					} = e;
					const i = a ? a(o) : r.a.createElement(ye, o);
					return r.a.createElement(n.a, {
						root: t,
						threshold: .99,
						rootMargin: "0px 0px 0px 0px",
						onChange: s
					}, i)
				},
				Be = Object(l.c)({
					isBlockingInterstitialEnabled: S.b,
					isBlockingInterstitialV2Enabled: S.c
				}),
				He = Object(i.b)(Be, (e, t) => {
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
						trackPostClick: (t, s) => e((e, a) => n ? w.j(a(), n, t, s) : null),
						trackPostSubredditClick: t => e((e, a) => s ? w.l(a(), s, t) : n ? w.l(a(), n, t) : null),
						showModalOnPostLinkClick: t => e(Object(d.Z)(Object(P.b)(t.permalink), t.id))
					}
				}),
				Qe = Object(_.v)();
			t.a = Qe(He(Object(j.c)(class extends O {
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
							searchDiscoveryUnit: o,
							searchOptions: i
						} = this.props;
						let l;
						return (l = "subreddit" === t && i ? w.s(i, r, a, o) : o && i ? w.t(i, r, null, a, o) : w.i(s, n))(e)
					}, this.renderPost = (e, t) => {
						const {
							isMiniCard: s,
							renderPost: n,
							singleSubredditMode: a
						} = this.props;
						return r.a.createElement(Ue, {
							"data-click-id": Ve,
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
						springConfig: i
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
					}, r.a.createElement(o.Motion, {
						defaultStyle: {
							marginLeft: e || a ? Re : 0
						},
						style: {
							marginLeft: Object(o.spring)(f, i || We)
						}
					}, this.renderPosts), 0 !== d && r.a.createElement(v, {
						className: Object(c.a)(Me.a.arrowLeft, t),
						onClick: this.onClickPrev,
						seed: n
					}), !this.state.itemsFitInContainer && (null == m || d < m) && r.a.createElement(x, {
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
					hideNSFWPref: a,
					post: m,
					subredditOrProfile: f
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(p.a.container, t)
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
				})(m.author, s), f && f.isQuarantined && r.a.createElement(i.a, null))
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
				o = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				l = s.n(i);

			function c(e) {
				const {
					source: t
				} = e.post;
				return a.a.createElement("div", {
					className: Object(r.a)(l.a.container, e.className)
				}, a.a.createElement(o.b, {
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
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
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
					...h
				} = e;
				return a.a.createElement("div", m({
					className: Object(r.a)(u.a.backgroundWrapper, s),
					style: f || Object(i.c)(n, e),
					onClick: o,
					"data-adclicklocation": c.a.BACKGROUND
				}, h), t)
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
				a = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/ads/index.ts"),
				i = s("./src/reddit/components/AdViewability/index.tsx"),
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
						o = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(c.a)(t, r, o), a.a.createElement("div", {
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
				v = s("./src/lib/objectSelector/index.ts"),
				x = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				g = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				O = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				j = s("./src/reddit/components/PostContainer/index.m.less"),
				_ = s.n(j);
			const k = Object(p.a)(() => Object(r.c)({
					basePixelMetadata: Object(v.a)((e, t) => {
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
						ref: v,
						shouldAddGalleryViewability: x = !0
					} = this.props, g = a.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: b,
						ref: v,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => m && m(s, d, t, r, p))(s), d.id && r) {
								const {
									source: e
								} = Object(o.t)(d, r);
								e && e.outboundUrl && h(Object(l.c)(d.id, e.outboundUrl))
							}
						},
						className: Object(y.a)(_.a.WrappedPost, n, `Post ${d.id}`, {
							promotedlink: d.isSponsored
						}),
						"data-testid": C,
						id: c ? c(d.id) : d.id,
						tabIndex: -1,
						"data-adclicklocation": O.a.BACKGROUND
					}, s), j = !!d.media && d.media.type === f.o.VIDEO;
					return (e => d.media && Object(f.H)(d.media) && x ? a.a.createElement(u, {
						postId: d.id
					}, e) : e)((e => d.isSponsored || j ? a.a.createElement(i.a, {
						post: d,
						trackDisplay: !0
					}, e) : e)(g))
				}
			}
			t.b = k(Object(g.a)(Object(x.a)(Object(m.c)(P))))
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
				o = s("./src/higherOrderComponents/asTooltip.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				u = s("./src/reddit/components/QuarantinedLabel/index.m.less"),
				m = s.n(u);
			const p = ["center", "top"],
				f = ["center", "bottom"],
				h = i.a.div("Container", m.a),
				b = Object(o.a)(l.b),
				y = Object(c.v)({
					isProfileListingPage: c.K
				});
			class v extends r.a.Component {
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
			t.a = y(v)
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
			const o = s("./src/lib/lessComponent.tsx").a.wrapped(n.a, "SubredditName", r.a);
			t.a = o
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "d", (function() {
				return y
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				a = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				o = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				l = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				d = s.n(c);
			const u = {},
				m = e => Object(i.f)(Object(l.a)(e).post, Object(l.a)(e).backgroundImage, Object(l.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.f)(e.postBackgroundColor || Object(l.a)(t).post, e.postBackgroundImage, Object(l.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.f)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				f = e => Object(n.k)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: f(e.postBackgroundColor)
				} : u,
				b = e => e.isActive ? d.a.mIsActive : void 0,
				y = e => {
					const t = Object(r.a)(Object(a.a)(e), o.a.actionIcon, o.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/icons/svgs/DiscoveryUnitArrow/Left/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				a = s.n(n),
				r = s("./src/reddit/constants/colors.ts");
			const o = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return `${t}-du-left-${e}`
			};
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = o("a", t), n = o("b", t), i = o("c", t), l = o("d", t);
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
					id: i,
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
					xlinkHref: `#${i}`
				})), a.a.createElement("use", {
					fill: r.a.black,
					xlinkHref: `#${i}`
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
			const o = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
				return `${t}-du-right-${e}`
			};
			t.a = e => {
				const {
					seed: t = ""
				} = e, s = o("a", t), n = o("b", t), i = o("c", t), l = o("d", t);
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
					id: i,
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
					xlinkHref: `#${i}`
				})), a.a.createElement("use", {
					fill: r.a.black,
					xlinkHref: `#${i}`
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
			t.a = Object(r.a)(e => {
				const {
					className: t,
					children: s,
					heightLeft: n,
					widthLeft: r,
					gutter: i,
					...d
				} = e;
				return a.a.createElement("div", c({
					className: Object(o.a)(l.a.expandRightContainer, t)
				}, d), a.a.createElement("div", {
					className: l.a.left,
					style: {
						flexBasis: r,
						height: n,
						marginRight: i
					}
				}, Array.isArray(s) && s[0]), a.a.createElement("div", {
					className: l.a.right
				}, Array.isArray(s) && s[1]))
			}, 2)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditTopContent~TopWeekPostsDiscoveryUnit.33f402074e080ef46858.js.map