// https://www.redditstatic.com/desktop2x/reddit-components-Economics-SubredditPremium-LFGBanner.a8b240d4df099c51f3d1.js
// Retrieved at 6/8/2023, 8:50:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Economics-SubredditPremium-LFGBanner"], {
		"./node_modules/lodash/_arraySample.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e) {
				var t = e.length;
				return t ? e[r(0, t - 1)] : void 0
			}
		},
		"./node_modules/lodash/_baseSample.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arraySample.js"),
				s = n("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return r(s(e))
			}
		},
		"./node_modules/lodash/flattenDeep.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseFlatten.js"),
				s = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? r(e, s) : []
			}
		},
		"./node_modules/lodash/forOwn.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseForOwn.js"),
				s = n("./node_modules/lodash/_castFunction.js");
			e.exports = function(e, t) {
				return e && r(e, s(t))
			}
		},
		"./node_modules/lodash/sample.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arraySample.js"),
				s = n("./node_modules/lodash/_baseSample.js"),
				o = n("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (o(e) ? r : s)(e)
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
				f = 1e3 / 60,
				b = function(e) {
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
								if (s.prevTime = n, s.accumulatedTime = s.accumulatedTime + r, s.accumulatedTime > 10 * f && (s.accumulatedTime = 0), 0 === s.accumulatedTime) return s.animationID = null, void s.startAnimationIfNecessary();
								var o = (s.accumulatedTime - Math.floor(s.accumulatedTime / f) * f) / f,
									a = Math.floor(s.accumulatedTime / f),
									i = {},
									l = {},
									m = {},
									p = {};
								for (var b in t)
									if (Object.prototype.hasOwnProperty.call(t, b)) {
										var y = t[b];
										if ("number" == typeof y) m[b] = y, p[b] = 0, i[b] = y, l[b] = 0;
										else {
											for (var h = s.state.lastIdealStyle[b], g = s.state.lastIdealVelocity[b], _ = 0; _ < a; _++) {
												var v = c.default(f / 1e3, h, g, y.val, y.stiffness, y.damping, y.precision);
												h = v[0], g = v[1]
											}
											var S = c.default(f / 1e3, h, g, y.val, y.stiffness, y.damping, y.precision),
												O = S[0],
												j = S[1];
											m[b] = h + (O - h) * o, p[b] = g + (j - g) * o, i[b] = h, l[b] = g
										}
									} s.animationID = null, s.accumulatedTime -= a * f, s.setState({
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
			t.default = b, e.exports = t.default
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
				f = 1e3 / 60;
			var b = function(e) {
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
							if (s.prevTime = n, s.accumulatedTime = s.accumulatedTime + r, s.accumulatedTime > 10 * f && (s.accumulatedTime = 0), 0 === s.accumulatedTime) return s.animationID = null, void s.startAnimationIfNecessary();
							for (var o = (s.accumulatedTime - Math.floor(s.accumulatedTime / f) * f) / f, a = Math.floor(s.accumulatedTime / f), i = [], l = [], m = [], p = [], b = 0; b < t.length; b++) {
								var y = t[b],
									h = {},
									g = {},
									_ = {},
									v = {};
								for (var S in y)
									if (Object.prototype.hasOwnProperty.call(y, S)) {
										var O = y[S];
										if ("number" == typeof O) h[S] = O, g[S] = 0, _[S] = O, v[S] = 0;
										else {
											for (var j = s.state.lastIdealStyles[b][S], E = s.state.lastIdealVelocities[b][S], I = 0; I < a; I++) {
												var w = c.default(f / 1e3, j, E, O.val, O.stiffness, O.damping, O.precision);
												j = w[0], E = w[1]
											}
											var P = c.default(f / 1e3, j, E, O.val, O.stiffness, O.damping, O.precision),
												C = P[0],
												x = P[1];
											h[S] = j + (C - j) * o, g[S] = E + (x - E) * o, _[S] = j, v[S] = E
										}
									} m[b] = h, p[b] = g, i[b] = _, l[b] = v
							}
							s.animationID = null, s.accumulatedTime -= a * f, s.setState({
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
			t.default = b, e.exports = t.default
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
				f = o(n("./node_modules/react-motion/node_modules/prop-types/index.js")),
				b = 1e3 / 60;

			function y(e, t, n) {
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

			function h(e, t, n, r, s, o, i, c, l) {
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
					})), p = [], f = [], b = [], y = [], h = 0; h < u.length; h++) {
					for (var g = u[h], _ = null, v = 0; v < r.length; v++)
						if (r[v].key === g.key) {
							_ = v;
							break
						} if (null == _) {
						var S = e(g);
						p[h] = S, b[h] = S;
						var O = a.default(g.style);
						f[h] = O, y[h] = O
					} else p[h] = o[_], b[h] = c[_], f[h] = i[_], y[h] = l[_]
				}
				return [u, p, f, b, y]
			}
			var g = function(e) {
				function t(n) {
					var s = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, n), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = h(s.props.willEnter, s.props.willLeave, s.props.didLeave, s.state.mergedPropsStyles, e, s.state.currentStyles, s.state.currentVelocities, s.state.lastIdealStyles, s.state.lastIdealVelocities), n = t[0], o = t[1], a = t[2], i = t[3], c = t[4], d = 0; d < e.length; d++) {
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
									n = "function" == typeof t ? t(y(s.state.mergedPropsStyles, s.unreadPropStyles, s.state.lastIdealStyles)) : t;
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
								if (s.prevTime = r, s.accumulatedTime = s.accumulatedTime + o, s.accumulatedTime > 10 * b && (s.accumulatedTime = 0), 0 === s.accumulatedTime) return s.animationID = null, void s.startAnimationIfNecessary();
								for (var a = (s.accumulatedTime - Math.floor(s.accumulatedTime / b) * b) / b, i = Math.floor(s.accumulatedTime / b), d = h(s.props.willEnter, s.props.willLeave, s.props.didLeave, s.state.mergedPropsStyles, n, s.state.currentStyles, s.state.currentVelocities, s.state.lastIdealStyles, s.state.lastIdealVelocities), u = d[0], p = d[1], f = d[2], g = d[3], _ = d[4], v = 0; v < u.length; v++) {
									var S = u[v].style,
										O = {},
										j = {},
										E = {},
										I = {};
									for (var w in S)
										if (Object.prototype.hasOwnProperty.call(S, w)) {
											var P = S[w];
											if ("number" == typeof P) O[w] = P, j[w] = 0, E[w] = P, I[w] = 0;
											else {
												for (var C = g[v][w], x = _[v][w], k = 0; k < i; k++) {
													var N = c.default(b / 1e3, C, x, P.val, P.stiffness, P.damping, P.precision);
													C = N[0], x = N[1]
												}
												var T = c.default(b / 1e3, C, x, P.val, P.stiffness, P.damping, P.precision),
													D = T[0],
													M = T[1];
												O[w] = C + (D - C) * a, j[w] = x + (M - x) * a, E[w] = C, I[w] = x
											}
										} g[v] = E, _[v] = I, p[v] = O, f[v] = j
								}
								s.animationID = null, s.accumulatedTime -= i * b, s.setState({
									currentStyles: p,
									currentVelocities: f,
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
						m = h(r, s, o, d, c, l, u, l, u),
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
					this.unreadPropStyles = "function" == typeof t ? t(y(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles)) : t, null == this.animationID && (this.prevTime = l.default(), this.startAnimationIfNecessary())
				}, t.prototype.componentWillUnmount = function() {
					this.unmounting = !0, null != this.animationID && (u.default.cancel(this.animationID), this.animationID = null)
				}, t.prototype.render = function() {
					var e = y(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles),
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
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = "custom"
		},
		"./src/reddit/actions/economics/banners/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			const r = "ECONOMICS__BANNERS__DISMISSED_BANNERS_PENDING",
				s = "ECONOMICS__BANNERS__DISMISSED_BANNERS_UPDATED",
				o = "ECONOMICS__BANNERS__BANNER_DISMISSED",
				a = "ECONOMICS__BANNERS__BANNER_UNDISMISSED"
		},
		"./src/reddit/actions/economics/banners/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			}));
			var r = n("./src/reddit/endpoints/economics/banners.ts"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/economics/banners/constants.ts");
			const a = Object(s.a)(o.c),
				i = Object(s.a)(o.d),
				c = Object(s.a)(o.a),
				d = Object(s.a)(o.b),
				l = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const c = n();
					if (!c.user.account) return;
					if (c.economics.banners.dismissedBanners[e]) return;
					t(a(e));
					const d = await Object(r.b)(o(), e);
					t(i({
						subredditId: e,
						data: d
					}))
				}, u = (e, t) => async (n, s, o) => {
					let {
						apiContext: a
					} = o;
					n(c({
						subredditId: e,
						bannerType: t
					})), Object(r.c)(a(), e, t)
				}, m = (e, t) => async (n, s, o) => {
					let {
						apiContext: a
					} = o;
					n(d({
						subredditId: e,
						bannerType: t
					})), Object(r.e)(a(), e, t)
				}
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			}));
			const r = "ECONOMICS__ME__ME_DATA_SUCCESS",
				s = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				o = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeRequest/index.ts"),
				o = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");
			var i = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/economics/me/constants.ts");
			const d = Object(i.a)(c.a),
				l = Object(i.a)(c.b),
				u = Object(i.a)(c.c),
				m = e => async (t, n, r) => {
					let {
						apiContext: s
					} = r;
					const i = e && e.includeMemberships || !1,
						c = e && e.forceFetch || !1,
						l = n();
					if (!l.economics.me.fetched || i && !l.economics.me.data.specialMemberships || c) {
						const e = await
						function(e, t) {
							return Object(a.a)(e, {
								method: "get",
								endpoint: `${o.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(s(), i);
						if (e.ok) {
							const n = e.body;
							i && !n.specialMemberships && (n.specialMemberships = {}), t(d(n))
						}
					}
				}, p = () => async (e, t) => {
					const n = t(),
						o = n.economics.me.data;
					if (!o) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(l());
						const t = `https://${o.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(s.b)({
								endpoint: t,
								method: r.ob.GET
							});
						n.ok && n.body && e(u(n.body))
					}
				}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			}));
			const r = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "j", (function() {
				return y
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/modal.ts"),
				o = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const i = Object(r.a)(a.a),
				c = Object(r.a)(a.b),
				d = Object(r.a)(a.c),
				l = Object(r.a)(a.d),
				u = Object(r.a)(a.e),
				m = Object(r.a)(a.f),
				p = Object(r.a)(a.g),
				f = Object(r.a)(a.h),
				b = Object(r.a)(a.i),
				y = e => Object(s.h)(o.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			}));
			const r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/economics/subredditPremium/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "b", (function() {
				return I
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "c", (function() {
				return C
			})), n.d(t, "f", (function() {
				return x
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/forOwn.js"),
				s = n.n(r),
				o = n("./src/reddit/actions/governance/errorToast.ts"),
				a = n("./src/reddit/endpoints/economics/emojis.ts"),
				i = n("./src/reddit/endpoints/economics/specialMembership.ts"),
				c = n("./src/reddit/endpoints/economics/subredditPremium.ts"),
				d = n("./src/reddit/endpoints/governance/badges.ts"),
				l = n("./src/config.ts"),
				u = n("./src/reddit/endpoints/governance/requester.ts");

			function m(e, t, n) {
				return Object(u.a)(e, {
					method: "get",
					endpoint: `${l.a.metaUrl}/products/${t}?owners=${n}` + "&types=emotes_pack,giphy"
				})
			}
			var p = n("./src/reddit/models/Badge/index.ts"),
				f = n("./src/reddit/models/Badge/managementPage.ts"),
				b = n("./src/reddit/models/Product/index.ts"),
				y = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				h = n("./src/reddit/selectors/economics.ts"),
				g = n("./src/reddit/selectors/products.ts"),
				_ = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				v = n("./src/reddit/actions/economics/subredditPremium/actionCreators.ts");

			function S(e) {
				return !!e && "removeBadge" === e.type
			}

			function O(e) {
				if (!S(e)) return e
			}
			const j = () => async (e, t, n) => {
				let {
					apiContext: r
				} = n;
				if (!t().user.account) return;
				await e(Object(_.b)({
					includeMemberships: !0
				}));
				const s = t().economics.me.data.specialMemberships || {},
					o = Object.keys(s);
				if (o.length) {
					const t = await Object(i.e)(r(), o);
					t.ok && e(Object(v.g)(t.body))
				}
			}, E = (e, t) => async (n, r, s) => {
				let {
					apiContext: o
				} = s;
				const a = r().user.account,
					i = r().economics.subredditPremium[e],
					d = !i || i.status !== y.a.Fetched || t;
				if (a && d) {
					const t = await Object(c.a)(o(), e, a.id);
					n(Object(v.i)(t))
				}
			}, I = e => async (t, n, r) => {
				let {
					apiContext: s
				} = r;
				const a = n(),
					i = a.user.account,
					c = Object(h.f)(a, e.subredditId),
					l = Object.keys(c).map(e => c[e]).filter(Boolean);
				if (i && e.badge) {
					let n, r;
					n = e.placement === p.a.First ? c[f.a.Loyalty] : e.placement === p.a.Second ? c[f.a.Achievement] : c[f.a.Cosmetic], t(Object(v.a)({
						...e,
						badge: O(e.badge),
						currentAppliedBadges: l,
						userId: i.id
					})), S(e.badge) && n ? r = await Object(d.a)(s(), e.subredditId, n.id, !1) : S(e.badge) || (r = await Object(d.a)(s(), e.subredditId, e.badge.id)), r && !r.ok && (t(Object(v.a)({
						...e,
						badge: n,
						currentAppliedBadges: l,
						userId: i.id
					})), Object(o.a)(t, r.error))
				}
			}, w = (e, t) => async (n, r, s) => {
				let {
					apiContext: o
				} = s;
				await n(E(e, !0));
				const a = r().economics.subredditPremium[e];
				if (a && a.status === y.a.Fetched) {
					const r = a.data.userOwnedBadges.find(e => e.type === t.id);
					r && (n(I({
						badge: r,
						subredditId: e,
						placement: r.placement
					})), n(Object(v.d)(f.c.MyBadges)))
				}
			}, P = e => async (t, n, r) => {
				let {
					apiContext: i
				} = r;
				const c = n().user.account,
					d = !n().economics.emotes[e],
					l = !n().economics.gifs[e];
				if (c && (d || l)) {
					const [n, r] = await Promise.all([Object(a.b)(i(), e), m(i(), e, c.id)]);
					if (!r.ok) return void Object(o.a)(t, r.error);
					const d = {
						emotes: [],
						emoteCollections: n.ok ? n.body : {},
						giphy: []
					};
					s()(r.body, e => {
						e.type === b.a.EmotesPack ? d.emotes.push(e) : e.type === b.a.Giphy && d.giphy.push(e)
					}), t(Object(v.e)({
						subredditId: e,
						products: d
					}))
				}
			}, C = (e, t, n) => async (r, s, o) => {
				let {
					apiContext: a
				} = o;
				if (await r(E(e, !0)), n && t) {
					const n = s(),
						o = Object(h.f)(n, e),
						a = Object(g.a)(n, t);
					if (!o[Object(f.d)(a.placement)] && a) {
						const t = Object(h.l)(n, {
							subredditId: e,
							badge: a
						});
						t && await r(I({
							badge: t,
							subredditId: e
						}))
					}
					r(Object(v.c)({
						subredditId: e,
						initialView: f.c.MyBadges
					}))
				}
			}, x = e => async (t, n, r) => {
				let {
					apiContext: s
				} = r;
				const {
					wallet: o
				} = await Object(i.c)(s(), e);
				t(Object(v.f)({
					wallet: o
				})), await t(E(e.subredditId, !0))
			}
		},
		"./src/reddit/actions/governance/errorToast.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/reddit/actions/toaster.ts"),
				s = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				o = n("./src/reddit/models/Toast/index.ts");

			function a(e, t) {
				e(Object(r.f)({
					duration: 5e3,
					kind: o.b.Error,
					text: Object(s.a)(t)
				}))
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/InteractiveBadgesBanner/Success/index.m.less": function(e, t, n) {
			e.exports = {
				checkContainer: "vLDY173Vj0GmHGlQQPGsJ",
				check: "_1PIZA9aT40J0xlDyxPr-bH",
				col: "_2ueaZW2VmYFP3k8IpO59IR",
				explanation: "_3X0Y99cKtJPNprvvqIyeOk",
				header: "_2tkUUsImD0I5jWUKt77ZAH",
				img: "_2qJnksxaH_YpcbYwW6ggtA",
				tutorial: "_13vSv0_15yzB5YMudJnPJt"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/Card/index.m.less": function(e, t, n) {
			e.exports = {
				button: "aq9ZqWnC2Xwbkzhr1C8hJ",
				container: "m7z0uN9mDxptXfSHafLTw",
				cover: "xyt2inBPUfRQ_Efcqt_Ab",
				description: "KX_LU59tHaCYNg437pykk",
				freeCard: "_3qfrF-S8Mak5I9Y5F6oJFF",
				fullWidth: "_3c3Kr_1Q_oJTZvtAYy1N-6",
				img: "_2VRR41zg0aqqAAjxIzZGz0",
				title: "gRNqnS3tiW9yK_OX8aSV3",
				premiumCard: "_1J7mAZ1dsFqB0jBKT2A-Ry"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/index.m.less": function(e, t, n) {
			e.exports = {
				container: "yQNQSPTLUWPNXeKzlqNu6",
				cover: "_24vnSg5ae29l97QtBxVV3-",
				divider: "_2fEN3CscLjkwMnMGeO-Gbi",
				trial: "_2o92N1SUEIcx7a3P7K3tJT"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Example/index.m.less": function(e, t, n) {
			e.exports = {
				container: "ez89jyuMsOzC0NO44ciD1",
				cover: "i990kFkfa3m_m5S_U0sma",
				description: "a7ZSke4zXeciCfufC-OWq",
				image: "_29JFielihsv0FuuO4vTOLb",
				preview: "_1gyHt90KLC-GJrapFWERJx",
				redo: "_1sHLf9k2ibP_C7Mx2o9Xcf",
				title: "_2F4sRR7iIwaKQvPPvqmiX-"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Header/index.m.less": function(e, t, n) {
			e.exports = {
				crown: "YKwhmGUT9303yZWJlH-QT",
				heading: "_2-PLWgbnP8j-2wARSQiPC6",
				prompt: "_34l-xSb_Lf_m0uJryaeQRG",
				sponsorship: "_2gij23f36Hizly0kdb-hWD",
				text: "NgOyQpTLN-QLfbsXr_kxQ"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/Option/index.m.less": function(e, t, n) {
			e.exports = {
				container: "bIIqFNgEct-dJixmNGzH8",
				controller: "U9kRmM-8uzmN81_cyWilS",
				planet: "OsL6tpn4UXSU4UwEHQpxf",
				user: "_3Q0T-a4HcsAzBW8-YqMrdZ",
				selected: "_2rCRpMr2CIl-rgIl_ikgYT",
				triangle: "_1SxOqeKmgCBvhzxL632u7q"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_1-fWFAeAioWlCembFKUHMX",
				container: "_1ftim-rZF9xZL_CTpqF85f",
				title: "_3sTbD7175DPlp68I03ayUK"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.m.less": function(e, t, n) {
			e.exports = {
				choiceSelected: "_2_PAZW9RwEcRVWBO0fhHa6",
				close: "_308nelFEzZOnhnqbW5RpPv",
				dismissedContainer: "_2EAX2PYbs1gAVQGLJ5XaB9",
				dismissedText: "DBgaCJDh9aY3K_vHjS9Q3",
				showContainer: "_2BkQlYxIdIBMsKRROdxSSP",
				successContainer: "_1wtFNjoeAGTIux27TBYRFN",
				claim: "_2h8JoT5ednzNOqKdVKCHlM",
				container: "_26wdyRSALASUyhdTxV6U4k",
				content: "_3D6as82_3SjWTXYShWM5lz",
				example: "_3jYACS0eVj0IZYGd02X11f",
				header: "_12kLHf53On8M30LOB009-F"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/economics/banners/thunkedActions.ts"),
				u = n("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/config.ts"),
				f = n("./src/reddit/icons/svgs/Approve/index.tsx"),
				b = n("./src/reddit/components/Economics/SubredditPremium/InteractiveBadgesBanner/Success/index.m.less"),
				y = n.n(b);
			const h = {
					description: () => r.fbt._("Add your new emoji to comments! Use the action in the bottom right corner to add an emoji.", null, {
						hk: "3bQZrx"
					}),
					src: `${p.a.assetPath}/img/memberships/banners/how_to_use_emoji.gif`
				},
				g = {
					description: () => r.fbt._("Open 'My Badges' in the Sidebar to apply your badge.", null, {
						hk: "rQPFZ"
					}),
					src: `${p.a.assetPath}/img/memberships/banners/how_to_apply_badge.gif`
				},
				_ = {
					description: () => r.fbt._("Want to change your badge? Visit the Gallery in the Sidebar to view the latest styles.", null, {
						hk: "71rqs"
					}),
					src: `${p.a.assetPath}/img/memberships/banners/how_to_apply_badge.gif`
				};

			function v(e) {
				const t = (e.hideEmoji ? [] : [h]).concat(e.boughtBadge ? g : _);
				return o.a.createElement("article", {
					className: Object(d.a)(e.className, y.a.container)
				}, o.a.createElement("header", {
					className: y.a.header
				}, o.a.createElement("div", {
					className: y.a.checkContainer
				}, o.a.createElement(f.a, {
					className: y.a.check
				})), r.fbt._("Congrats! Here's how to use it", null, {
					hk: "2IUXGc"
				})), o.a.createElement("div", {
					className: y.a.tutorial
				}, t.map(e => {
					let {
						description: t,
						src: n
					} = e;
					return o.a.createElement("div", {
						className: y.a.col,
						key: t()
					}, o.a.createElement("img", {
						className: y.a.img,
						src: n
					}), o.a.createElement("div", {
						className: y.a.explanation
					}, t()))
				})))
			}
			var S = n("./src/reddit/components/TrackingHelper/index.tsx"),
				O = n("./src/reddit/contexts/ApiContext.tsx"),
				j = n("./src/reddit/controls/Button/index.tsx"),
				E = n("./src/reddit/endpoints/economics/banners.ts"),
				I = n("./src/reddit/endpoints/economics/emojis.ts"),
				w = n("./src/reddit/helpers/economics/membershipPage.ts"),
				P = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				C = n("./src/reddit/icons/svgs/Close/index.tsx"),
				x = n("./src/reddit/models/Toast/index.ts"),
				k = n("./src/reddit/selectors/economics.ts"),
				N = n("./src/reddit/selectors/telemetry.ts"),
				T = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				D = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/Card/index.m.less"),
				M = n.n(D);

			function B(e) {
				return o.a.createElement("article", {
					className: Object(d.a)(e.className, M.a.container, {
						[M.a.fullWidth]: !!e.fullWidth
					})
				}, o.a.createElement("div", {
					className: M.a.cover
				}), o.a.createElement("header", {
					className: M.a.title
				}, e.title), o.a.createElement("img", {
					className: M.a.img,
					src: e.img
				}), o.a.createElement("div", {
					className: M.a.description
				}, e.description), o.a.createElement(j.r, {
					className: M.a.button,
					onClick: e.onClaim
				}, e.cta))
			}
			var A = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts"),
				F = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Claim/index.m.less"),
				R = n.n(F);

			function L(e) {
				const {
					className: t,
					platform: n,
					playerType: s,
					region: a,
					userIsSubscriber: i,
					onClaim: c
				} = e, l = Object(A.d)({
					platform: n,
					playerType: s,
					region: a,
					style: "bw"
				}), u = Object(A.d)({
					platform: n,
					playerType: s,
					region: a,
					style: "color"
				});
				return o.a.createElement("div", {
					className: Object(d.a)(R.a.container, t)
				}, !i && o.a.createElement(o.a.Fragment, null, o.a.createElement(B, {
					className: R.a.freeCard,
					cta: r.fbt._("claim", null, {
						hk: "2Ru6yU"
					}),
					img: l,
					title: r.fbt._("Claim Free Badge", null, {
						hk: "3w9WUY"
					}),
					onClaim: () => c(!1)
				}), o.a.createElement("div", {
					className: R.a.divider
				}, o.a.createElement("div", {
					className: R.a.cover
				}), "OR"), o.a.createElement(B, {
					className: R.a.premiumCard,
					cta: r.fbt._("become a supporter", null, {
						hk: "4EFiLI"
					}),
					description: r.fbt._("Colored badge + dozens more, emojis and GIFs in comments", null, {
						hk: "4zbqFO"
					}),
					img: u,
					title: r.fbt._("Claim Premium Badge", null, {
						hk: "2UVCao"
					}),
					onClaim: () => c(!0)
				}), o.a.createElement("img", {
					className: R.a.trial,
					src: `${p.a.assetPath}/img/memberships/banners/free-trial.png`
				})), i && o.a.createElement(B, {
					fullWidth: !0,
					className: R.a.fullWidthCard,
					cta: r.fbt._("claim", null, {
						hk: "3XIQIJ"
					}),
					img: u,
					title: r.fbt._("Claim Premium Badge", null, {
						hk: "28iPPD"
					}),
					onClaim: () => c(!1)
				}))
			}
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var U = n("./node_modules/lodash/sample.js"),
				G = n.n(U),
				$ = n("./node_modules/react-motion/lib/react-motion.js"),
				V = n("./src/reddit/icons/svgs/Replay/index.tsx"),
				W = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Example/index.m.less"),
				q = n.n(W);
			const Y = {
				stiffness: 210,
				damping: 20
			};

			function H() {
				return {
					platform: G()(Object.keys(A.a)) || "pc",
					playerType: G()(Object.keys(A.b)) || "casual",
					region: G()(Object.keys(A.c)) || "nae"
				}
			}
			class K extends o.a.Component {
				constructor(e) {
					super(e), this.state = H()
				}
				render() {
					const {
						platform: e,
						playerType: t,
						region: n
					} = this.state, s = A.a[e], a = A.b[t], i = A.c[n];
					return o.a.createElement("article", {
						className: Object(d.a)(q.a.container, this.props.className)
					}, o.a.createElement("div", {
						className: q.a.cover
					}), o.a.createElement("header", {
						className: q.a.title
					}, r.fbt._("Example", null, {
						hk: "1siPoi"
					})), o.a.createElement($.TransitionMotion, {
						defaultStyles: [{
							key: Object(A.d)({
								...this.state,
								style: "color"
							}),
							style: {
								rotation: 0
							}
						}],
						styles: [{
							key: Object(A.d)({
								...this.state,
								style: "color"
							}),
							style: {
								rotation: Object($.spring)(0, Y)
							}
						}],
						willEnter: () => ({
							rotation: -180
						}),
						willLeave: () => ({
							rotation: Object($.spring)(180, Y)
						})
					}, e => o.a.createElement("div", {
						className: q.a.preview
					}, e.map(e => o.a.createElement("img", {
						className: q.a.image,
						key: e.key,
						src: e.key,
						style: {
							transform: `rotateY(${e.style.rotation}deg)`
						}
					})))), o.a.createElement("footer", {
						className: q.a.description
					}, `${i}, ${s}, ${a}`), o.a.createElement(V.a, {
						className: q.a.redo,
						onClick: () => this.setState(H())
					}))
				}
			}
			var Z = n("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				z = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Header/index.m.less"),
				Q = n.n(z);
			const J = Object(c.c)({
				meta: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(k.r)(e, n)
				},
				subreddit: (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.subreddits.models[n]
				}
			});
			var X = Object(a.b)(J)((function(e) {
					const t = e.subreddit ? e.subreddit.displayText : "the community";
					return o.a.createElement("header", {
						className: Object(d.a)(Q.a.container, e.className)
					}, o.a.createElement("div", {
						className: Q.a.heading
					}, r.fbt._("looking for game badge", null, {
						hk: "1fWc1w"
					})), o.a.createElement("div", {
						className: Q.a.prompt
					}, r.fbt._("Find New Gamers to Play Together", null, {
						hk: "3voe2T"
					}), o.a.createElement("div", {
						className: Q.a.sponsorship
					}, o.a.createElement("img", {
						className: Q.a.crown,
						src: Z.a
					}), r.fbt._("Sponsored by {members}", [r.fbt._param("members", e.meta.memberAltPlural)], {
						hk: "2QHfal"
					}))), o.a.createElement("div", {
						className: Q.a.text
					}, r.fbt._("Get a badge that lets you find new teammates in {community}.", [r.fbt._param("community", t)], {
						hk: "2GYrVD"
					}), " ", r.fbt._("Specify your region, platform, and your play style for the best match.", null, {
						hk: "1HilaD"
					}), " ", r.fbt._("The badge helps other players find you, and makes it easier for others to start a conversation in Reddit chat.", null, {
						hk: "2TBy4p"
					})))
				})),
				ee = n("./src/higherOrderComponents/asTooltip.tsx"),
				te = n("./src/reddit/controls/Dropdown/index.tsx"),
				ne = n("./src/reddit/controls/Dropdown/Row.tsx"),
				re = n("./src/reddit/icons/svgs/Controller/index.tsx"),
				se = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				oe = n("./src/reddit/icons/svgs/Planet/index.tsx"),
				ae = n("./src/reddit/icons/svgs/User/index.tsx"),
				ie = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/Option/index.m.less"),
				ce = n.n(ie);
			const de = new Map;
			de.set(A.a, "LFG_BANNER_PLATFORM_DROPDOWN"), de.set(A.b, "LFG_BANNER_PLAYERTYPE_DROPDOWN"), de.set(A.c, "LFG_BANNER_REGION_DROPDOWN");
			const le = new Map;
			le.set(A.a, "platform"), le.set(A.b, "playerType"), le.set(A.c, "region");
			const ue = new Map;
			ue.set(A.a, o.a.createElement(re.a, {
				className: ce.a.controller
			})), ue.set(A.b, o.a.createElement(ae.a, {
				className: ce.a.user
			})), ue.set(A.c, o.a.createElement(oe.a, {
				className: ce.a.planet
			}));
			const me = Object(ee.a)(te.a);
			var pe, fe = Object(S.c)((function(e) {
					const t = ue.get(e.type),
						n = de.get(e.type);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(d.a)(ce.a.container, e.className, {
							[ce.a.selected]: !!e.selected
						}),
						id: n,
						onClick: e.onToggleDropdown
					}, t, e.text, o.a.createElement(se.b, {
						className: ce.a.triangle
					})), o.a.createElement(me, {
						tooltipId: n,
						isOpen: !!e.tooltipVisible
					}, Object.keys(e.type).map((t, n) => o.a.createElement(ne.b, {
						"data-redditStyle": !0,
						key: n,
						index: n,
						displayText: String(e.type[t]),
						onClick: () => {
							e.onChange(t), e.sendEvent(n => {
								const r = N.o(n);
								return {
									source: "meta",
									action: "click",
									noun: "lfg_banner_customize_badge",
									correlationId: e.correlationId,
									...r,
									actionInfo: {
										...r.actionInfo,
										paneName: le.get(e.type),
										reason: t
									},
									subreddit: N.lb(n)
								}
							})
						}
					}))))
				})),
				be = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/Setup/index.m.less"),
				ye = n.n(be),
				he = Object(S.c)(class extends o.a.Component {
					constructor() {
						super(...arguments), this.state = {
							selectedPlatform: void 0,
							selectedPlayerType: void 0,
							selectedRegion: void 0,
							visibleDropdown: void 0
						}
					}
					render() {
						const {
							className: e,
							onGenerate: t
						} = this.props, {
							selectedPlatform: n,
							selectedPlayerType: s,
							selectedRegion: a,
							visibleDropdown: i
						} = this.state, c = n ? A.a[n] : r.fbt._("platform", null, {
							hk: "4cCVan"
						}), l = s ? A.b[s] : r.fbt._("player type", null, {
							hk: "20Xii5"
						}), u = a ? A.c[a] : r.fbt._("region", null, {
							hk: "30zv9O"
						});
						return o.a.createElement("article", {
							className: Object(d.a)(ye.a.container, e)
						}, o.a.createElement("header", {
							className: ye.a.title
						}, r.fbt._("Setup Your Badge", null, {
							hk: "21LcIU"
						})), o.a.createElement(fe, {
							correlationId: this.props.correlationId,
							selected: !!a,
							tooltipVisible: "region" === i,
							text: u,
							type: A.c,
							onChange: e => this.setState({
								selectedRegion: e,
								visibleDropdown: void 0
							}),
							onToggleDropdown: () => this.setState(e => ({
								visibleDropdown: e.visibleDropdown ? void 0 : "region"
							}))
						}), o.a.createElement(fe, {
							correlationId: this.props.correlationId,
							selected: !!n,
							tooltipVisible: "platform" === i,
							text: c,
							type: A.a,
							onChange: e => this.setState({
								selectedPlatform: e,
								visibleDropdown: void 0
							}),
							onToggleDropdown: () => this.setState(e => ({
								visibleDropdown: e.visibleDropdown ? void 0 : "platform"
							}))
						}), o.a.createElement(fe, {
							correlationId: this.props.correlationId,
							selected: !!s,
							tooltipVisible: "playerType" === i,
							text: l,
							type: A.b,
							onChange: e => this.setState({
								selectedPlayerType: e,
								visibleDropdown: void 0
							}),
							onToggleDropdown: () => this.setState(e => ({
								visibleDropdown: e.visibleDropdown ? void 0 : "playerType"
							}))
						}), o.a.createElement(j.l, {
							className: ye.a.button,
							disabled: !n || !s || !a,
							onClick: () => {
								n && s && a && (t({
									platform: n,
									playerType: s,
									region: a
								}), this.props.sendEvent(e => ({
									source: "meta",
									action: "click",
									noun: "lfg_banner_generate_badge",
									correlationId: this.props.correlationId,
									...N.o(e),
									subreddit: N.lb(e)
								})))
							}
						}, r.fbt._("Generate Badge", null, {
							hk: "1FRc45"
						})))
					}
				}),
				ge = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.m.less"),
				_e = n.n(ge);
			! function(e) {
				e.CanClaim = "canclaim", e.Claimed = "claimed", e.Dismissed = "dismissed", e.Generating = "generating", e.Hidden = "hidden", e.Select = "select"
			}(pe || (pe = {}));
			class ve extends o.a.Component {
				constructor(e) {
					super(e), this.handleClaim = async e => {
						const {
							subscriberState: t,
							subreddit: n
						} = this.props, {
							selectedRegion: r,
							selectedPlatform: s,
							selectedPlayerType: o
						} = this.state;
						if (!(r && s && o && n && t !== k.a.DontKnow)) return null;
						const a = `${r}_${s}_${o}_badge`,
							i = await Object(I.a)(this.props.apiContext(), {
								productId: a,
								subredditId: this.props.subredditId
							});
						i.ok ? (this.setState({
							show: pe.Claimed
						}), this.props.onDismissBanner(), this.props.onBadgeClaimed(a)) : this.props.onError(i.error), e && this.props.onOpenLandingPage(n, this.correlationId), this.props.sendEvent(t => {
							const n = N.o(t);
							return {
								source: "meta",
								action: "click",
								noun: e && this.correlationId ? "lfg_banner_claim_premium" : "lfg_banner_claim",
								correlationId: this.correlationId,
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: a,
									paneName: E.a.LFG
								},
								subreddit: N.lb(t)
							}
						})
					}, this.handleDismiss = () => {
						this.state.show === pe.Claimed ? this.setState({
							show: pe.Hidden
						}) : (this.setState({
							show: pe.Dismissed
						}), this.props.sendEvent(e => {
							const t = N.o(e);
							return {
								source: "meta",
								action: "click",
								noun: "lfg_banner_dismiss",
								correlationId: this.correlationId,
								...t,
								actionInfo: {
									...t.actionInfo,
									paneName: E.a.LFG
								},
								subreddit: N.lb(e)
							}
						})), this.props.onDismissBanner()
					}, this.handleUndoDismiss = () => {
						this.setState({
							show: pe.Select
						}), this.props.onUndismissBanner(), this.props.sendEvent(e => {
							const t = N.o(e);
							return {
								source: "meta",
								action: "click",
								noun: "lfg_banner_undo_dismiss",
								correlationId: this.correlationId,
								...t,
								actionInfo: {
									...t.actionInfo,
									paneName: E.a.LFG
								},
								subreddit: N.lb(e)
							}
						})
					}, this.state = {
						show: pe.Hidden
					}, this.correlationId = Object(T.a)()
				}
				componentDidMount() {
					!1 === this.props.isBannerDismissed ? this.handleBannerShownFirstTime() : void 0 === this.props.isBannerDismissed && this.props.onFetchDismissedBanners()
				}
				componentDidUpdate(e) {
					void 0 === e.isBannerDismissed && !1 === this.props.isBannerDismissed && this.handleBannerShownFirstTime()
				}
				handleBannerShownFirstTime() {
					this.setState({
						show: pe.Select
					}), this.props.sendEvent(e => {
						const t = N.o(e);
						return {
							source: "meta",
							action: "view",
							noun: "lfg_banner",
							correlationId: this.correlationId,
							...t,
							actionInfo: {
								...t.actionInfo,
								paneName: E.a.LFG
							},
							subreddit: N.lb(e)
						}
					})
				}
				render() {
					const {
						className: e,
						subredditId: t,
						subscriberState: n,
						userIsLoggedIn: s
					} = this.props, {
						show: a,
						selectedRegion: i,
						selectedPlatform: c,
						selectedPlayerType: l
					} = this.state;
					return s && n !== k.a.DontKnow && a !== pe.Hidden ? this.state.show === pe.Dismissed ? o.a.createElement("div", {
						className: Object(d.a)(_e.a.dismissedContainer, e)
					}, o.a.createElement("div", {
						className: _e.a.dismissedText
					}, r.fbt._("Ok, we won't show you this again.", null, {
						hk: "4z33KK"
					})), o.a.createElement(j.l, {
						onClick: this.handleUndoDismiss
					}, r.fbt._("undo", null, {
						hk: "1A9z3Y"
					}))) : this.state.show === pe.Claimed ? o.a.createElement("div", {
						className: Object(d.a)(_e.a.successContainer, e)
					}, o.a.createElement(C.a, {
						className: _e.a.close,
						onClick: this.handleDismiss
					}), o.a.createElement(v, {
						boughtBadge: !0,
						hideEmoji: !0
					})) : o.a.createElement("article", {
						className: Object(d.a)(_e.a.container, e)
					}, o.a.createElement(X, {
						className: _e.a.header,
						subredditId: t
					}), o.a.createElement("div", {
						className: _e.a.content
					}, o.a.createElement(he, {
						correlationId: this.correlationId,
						onGenerate: e => this.setState(() => ({
							show: pe.CanClaim,
							selectedRegion: e.region,
							selectedPlatform: e.platform,
							selectedPlayerType: e.playerType
						}))
					}), a === pe.Select && o.a.createElement(K, {
						className: _e.a.example
					}), a === pe.CanClaim && i && c && l && o.a.createElement(L, {
						className: _e.a.claim,
						platform: c,
						playerType: l,
						region: i,
						userIsSubscriber: n === k.a.Subscribed,
						onClaim: e => this.handleClaim(e)
					})), o.a.createElement(C.a, {
						className: _e.a.close,
						onClick: this.handleDismiss
					})) : null
				}
			}
			const Se = Object(c.c)({
					isBannerDismissed: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(k.g)(e, n, E.a.LFG)
					},
					subreddit: (e, t) => {
						let {
							subredditId: n
						} = t;
						return e.subreddits.models[n]
					},
					subscriberState: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(k.x)(e, n)
					},
					userIsLoggedIn: e => !!e.user.account
				}),
				Oe = Object(S.c)(ve);
			t.default = Object(O.b)(Object(a.b)(Se, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					onDismissBanner: () => e(Object(l.a)(n, E.a.LFG)),
					onError: t => e(Object(m.f)({
						duration: 5e3,
						kind: x.b.Error,
						text: Object(P.a)(t)
					})),
					onFetchDismissedBanners: () => e(Object(l.b)(n)),
					onBadgeClaimed: t => {
						e(Object(u.c)(n, t))
					},
					onOpenLandingPage: (t, n) => {
						e(Object(i.b)(Object(w.a)(t.name, n)))
					},
					onUndismissBanner: () => e(Object(l.c)(n, E.a.LFG))
				}
			})(Oe))
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, n) {
			"use strict";
			var r, s, o, a;

			function i(e) {
				const {
					platform: t,
					playerType: n,
					region: r,
					style: s
				} = e;
				return `https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_${s}/${r}_${t}_${n}_${s}.svg`
			}
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return s
				})), n.d(t, "c", (function() {
					return o
				})), n.d(t, "d", (function() {
					return i
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(r || (r = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(s || (s = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(o || (o = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(a || (a = {}))
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/config.ts"),
				s = n("./node_modules/lodash/flattenDeep.js"),
				o = n.n(s),
				a = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const i = `${r.a.assetPath}/img/memberships/paywall/crown.gif`,
				c = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				d = new Set(o()(Object.keys(a.a).map(e => Object.keys(a.b).map(t => Object.keys(a.c).map(n => `${n}_${e}_${t}_badge`)))))
		},
		"./src/reddit/endpoints/economics/banners.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, s, o = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");
			async function i(e, t, n, r) {
				return Object(a.a)(e, {
					endpoint: `${o.a.metaUrl}/storage/${t}/me/${n}`,
					method: "patch",
					data: r
				})
			}
			async function c(e, t) {
				const n = await async function(e, t, n) {
					return Object(a.a)(e, {
						endpoint: `${o.a.metaUrl}/storage/${t}/me/${n}`,
						method: "get"
					})
				}(e, t, r.UpsellBanners);
				return n.ok && n.body || {}
			}
			async function d(e, t, n, s) {
					const o = await c(e, t),
						a = {
							...o,
							[n]: s
						};
					return (await i(e, t, r.UpsellBanners, a)).ok ? a : o
				}! function(e) {
					e.SubredditPremiumWaitlist = "subreddit_premium_waitlist", e.UpsellBanners = "upsell_banners"
				}(r || (r = {})),
				function(e) {
					e.AnimatedCard = "animatedCard", e.Badges = "badges", e.BlackHole = "blackHole", e.ClaimPoints = "claimPoints", e.Emojis = "emojis", e.FavoriteSeason = "favoriteSeason", e.GameStyle = "gameStyle", e.LFG = "lfg", e.NewUserWelcome = "newuserwelcome", e.WalletRegistration = "walletRegistration"
				}(s || (s = {}));
			const l = async (e, t, n) => d(e, t, n, !0), u = async (e, t, n) => d(e, t, n, !1), m = (e, t) => i(e, t, r.UpsellBanners, Object.keys(s).reduce((e, t) => (e[s[t]] = !1, e), {}))
		},
		"./src/reddit/endpoints/economics/emojis.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");
			const o = (e, t) => Object(s.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/orders`,
					data: {
						price: "0",
						currency: "usd",
						products: [{
							productId: t.productId,
							quantity: "1"
						}],
						subredditId: t.subredditId
					}
				}),
				a = (e, t) => Object(s.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/product-collections/${t}?types=emotes_pack`
				})
		},
		"./src/reddit/endpoints/economics/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var r = n("./src/config.ts"),
				s = n("./src/lib/omitHeaders/index.ts"),
				o = n("./src/reddit/constants/headers.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts"),
				i = n("./src/reddit/helpers/governanceErrorText/index.ts"),
				c = n("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts");

			function d(e, t) {
				return Object(a.a)(e, {
					endpoint: `${r.a.metaUrl}/communities/${t.subredditId}/me`,
					method: "patch",
					data: {
						specialMemberships: {
							settings: {
								renew: !1
							}
						}
					}
				})
			}

			function l(e, t) {
				return Object(a.a)(e, {
					endpoint: `${r.a.metaUrl}/ps/me/braintree-client-tokens`,
					method: "post",
					data: {
						username: t && t.username
					}
				})
			}

			function u(e, t) {
				return Object(a.a)(e, {
					endpoint: `${r.a.metaUrl}/orders`,
					method: "post",
					data: {
						currency: "usd",
						orderTarget: "special_membership",
						price: t.trial ? "0" : t.price,
						products: [{
							productId: t.productId,
							quantity: "1"
						}],
						providerArgs: {
							paymentNonce: t.nonce,
							savePaymentMethod: !0
						},
						providerName: "braintree",
						subredditId: t.subredditId,
						targetArgs: {
							renew: !0,
							receiverName: t.username
						}
					}
				})
			}

			function m(e, t) {
				return Object(a.a)(Object(s.a)(e, [o.a]), {
					endpoint: `${e.apiUrl}/api/info?id=${t.join(",")}`,
					method: "get"
				}).then(e => {
					if (e.ok) {
						const t = e.body.data.children.map(e => {
							let {
								data: t
							} = e;
							return Object(c.a)(t)
						}).reduce((e, t) => (e[t.id] = t, e), {});
						return {
							...e,
							body: t
						}
					}
					return e
				})
			}
			async function p(e, t) {
				const n = await Object(a.a)(e, {
					endpoint: `${r.a.metaUrl}/orders`,
					method: "post",
					data: {
						...t,
						currency: "points",
						orderTarget: "special_membership",
						products: [{
							productId: "provisional_membership",
							quantity: "1"
						}],
						targetArgs: {
							renew: !1
						}
					}
				});
				if (!n.ok) throw new Error(`Error fetching provisional membership: ${Object(i.b)(n.error)}`);
				return n.body
			}
		},
		"./src/reddit/endpoints/economics/subredditPremium.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/merge.js"),
				s = n.n(r),
				o = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/badges.ts"),
				i = n("./src/reddit/endpoints/governance/community.ts"),
				c = n("./src/reddit/endpoints/governance/products/badges.ts"),
				d = n("./src/reddit/endpoints/governance/requester.ts");
			async function l(e, t, n) {
				const r = {
						subredditId: t,
						badges: {},
						errors: {},
						collections: {},
						products: {},
						subscription: void 0,
						userOwnedBadges: []
					},
					l = function(e, t) {
						return Object(d.a)(e, {
							method: "get",
							endpoint: `${o.a.metaUrl}/product-collections/${t}?types=badge`
						})
					}(e, t),
					u = Object(i.a)(e, {
						subredditId: t
					}),
					m = Object(c.b)(e, t),
					p = Object(a.c)(e, t, n),
					[f, b, y, h] = await Promise.all([l, u, m, p]);
				if (f.ok ? r.collections = f.body : r.errors.collections = f.error, b.ok) {
					const e = b.body;
					r.subscription = e.specialMemberships, r.communityRaw = e
				}
				return y.ok ? r.products = y.body : r.errors.products = y.error, h.ok ? (s()(r.badges, h.body.badges), r.userOwnedBadges = h.body.userOwnedBadges) : r.errors.userBadges = h.error, r
			}
			const u = (e, t) => Object(d.a)(e, {
				endpoint: `${o.a.metaUrl}/products/${t}?types=badge,membership`,
				method: "delete"
			})
		},
		"./src/reddit/endpoints/governance/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");
			async function o(e, t, n) {
				const o = Object(s.a)(e, {
						headers: {
							"X-HTTP-Method-Override": "GET"
						},
						method: "post",
						endpoint: `${r.a.metaUrl}/badges/${t}`,
						data: {
							selected: !0,
							users: n
						}
					}),
					a = await o;
				if (a.ok) {
					const e = {},
						t = {},
						n = a.body;
					return Object.keys(n).forEach(r => {
						const s = n[r];
						t[r] = s, e[s.userId] || (e[s.userId] = []), e[s.userId].push(s.id)
					}), {
						...a,
						body: {
							badges: t,
							usersAppliedBadges: e
						}
					}
				}
				return a
			}
			async function a(e, t, n) {
				const o = await Object(s.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/badges/${t}?users=${n}`
				});
				if (o.ok) {
					const e = {},
						t = [],
						n = o.body;
					return Object.keys(n).forEach(r => {
						const s = n[r];
						e[r] = s, t.push(s.id)
					}), {
						...o,
						body: {
							badges: e,
							userOwnedBadges: t
						}
					}
				}
				return o
			}

			function i(e, t, n) {
				let o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
				return Object(s.a)(e, {
					method: "patch",
					endpoint: `${r.a.metaUrl}/badges/${t}/${n}`,
					data: {
						selected: o
					}
				})
			}
		},
		"./src/reddit/endpoints/governance/community.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/endpoints/governance/requester.ts");

			function a(e, t) {
				return Object(o.a)(e, {
					endpoint: `${r.a.metaUrl}/communities/${t.subredditId}/me`,
					method: s.ob.GET
				})
			}
		},
		"./src/reddit/endpoints/governance/products/badges.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var r = n("./src/config.ts"),
				s = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e, t) {
				return Object(s.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/products/${t}?types=badge`
				})
			}

			function a(e, t) {
				return Object(s.a)(e, {
					method: "get",
					endpoint: `${r.a.metaUrl}/products/${t}?types=badge,membership`
				})
			}

			function i(e, t) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/orders`,
					data: t
				})
			}

			function c(e, t) {
				return Object(s.a)(e, {
					method: "post",
					endpoint: `${r.a.metaUrl}/orders`,
					data: {
						currency: "usd",
						price: t.price,
						products: t.products,
						providerArgs: {
							paymentNonce: t.nonce
						},
						providerName: "braintree",
						subredditId: t.subredditId
					}
				})
			}
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/lib/permalinkToOverlayLocation/index.ts");

			function s(e, t) {
				return Object(r.a)(`/web/special-membership/${e}?corr=${t}`)
			}
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function r(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function s(e) {
				return [...e].sort(r)
			}
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/governanceErrorText/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js");

			function s(e) {
				return e[0].toUpperCase() + e.slice(1)
			}

			function o(e) {
				return "extra" in e ? "string" == typeof e.extra ? e.extra : Object.keys(e.extra).map(t => e.extra[t]).map(s).join(" ") : r.fbt._("Something went wrong. Please try again later.", null, {
					hk: "16ibYk"
				})
			}

			function a(e) {
				const t = `${e.type} (${e.code})`;
				return "message" in e ? `${t}: ${e.message}` : t
			}
		},
		"./src/reddit/icons/svgs/Approve/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "m17.707 5.6934-1.399-1.4c-.188-.188-.442-.293-.707-.293-.266 0-.52.105-.707.293l-6.994 6.993-2.793-2.793c-.39-.391-1.023-.391-1.414 0l-1.4 1.4c-.391.391-.391 1.024 0 1.414l4.9 4.9c.196.195.451.293.707.293s.512-.098.707-.293l9.1-9.1c.391-.391.391-1.023 0-1.414",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Controller/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M15.7658 8.30457C15.5196 6.40434 14.6685 3.93402 13.992 2.18306C13.4831 0.865888 12.2136 0 10.8015 0H5.01677C3.60472 0 2.33517 0.865888 1.82628 2.18306C1.1498 3.93402 0.298684 6.40434 0.0525311 8.30457C-0.374308 11.5997 1.94027 12 1.94027 12L5.31936 7.9067H10.4989L13.878 12C13.878 12 16.1926 11.5997 15.7658 8.30457ZM4.36141 3.50639C4.94606 3.50639 5.42001 3.03243 5.42001 2.44778C5.42001 1.86313 4.94606 1.38918 4.36141 1.38918C3.77676 1.38918 3.3028 1.86313 3.3028 2.44778C3.3028 3.03243 3.77676 3.50639 4.36141 3.50639ZM7.02295 5.43958C7.02295 6.02423 6.549 6.49818 5.96435 6.49818C5.3797 6.49818 4.90574 6.02423 4.90574 5.43958C4.90574 4.85493 5.3797 4.38097 5.96435 4.38097C6.549 4.38097 7.02295 4.85493 7.02295 5.43958ZM11.4569 3.50639C12.0416 3.50639 12.5155 3.03244 12.5155 2.44779C12.5155 1.86314 12.0416 1.38919 11.4569 1.38919C10.8723 1.38919 10.3983 1.86314 10.3983 2.44779C10.3983 3.03244 10.8723 3.50639 11.4569 3.50639ZM10.9126 5.43958C10.9126 6.02423 10.4386 6.49818 9.85398 6.49818C9.26933 6.49818 8.79538 6.02423 8.79538 5.43958C8.79538 4.85493 9.26933 4.38097 9.85398 4.38097C10.4386 4.38097 10.9126 4.85493 10.9126 5.43958Z"
			}))
		},
		"./src/reddit/icons/svgs/Planet/index.tsx": function(e, t, n) {
			"use strict";
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
			t.a = e => s.a.createElement("svg", o({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), s.a.createElement("title", null, "Planet"), s.a.createElement("path", {
				d: "M16.74,11.87A7,7,0,0,0,8.13,3.26c-3-2-5.59-2.8-6.63-1.76S1.25,5.15,3.28,8.16a6.95,6.95,0,0,0,8.57,8.57c3,2,5.61,2.82,6.66,1.78S18.76,14.87,16.74,11.87Zm0,4.86c-.53.53-1.77.26-3.33-.61h0a25.48,25.48,0,0,1-5.32-4.19c-.46-.46-.9-.93-1.31-1.39h0c-.41-.46-.79-.92-1.15-1.37h0c-.35-.45-.68-.89-1-1.32h0C4.36,7.41,4.1,7,3.88,6.6,3,5,2.74,3.8,3.27,3.27S5,3,6.6,3.88A6.78,6.78,0,0,0,4.52,5.65a23.14,23.14,0,0,0,4.27,5.56,22.92,22.92,0,0,0,5.56,4.27,6.79,6.79,0,0,0,1.77-2.08C17,15,17.26,16.2,16.73,16.73Z"
			}))
		},
		"./src/reddit/icons/svgs/Replay/index.tsx": function(e, t, n) {
			"use strict";
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
			t.a = e => s.a.createElement("svg", o({}, e, {
				viewBox: "13 12 23 23",
				xmlns: "http://www.w3.org/2000/svg"
			}), s.a.createElement("g", null, s.a.createElement("path", {
				d: "M32.5 23.3c-.7 0-1.2.5-1.2 1.2 0 4-3.2 7.2-7.2 7.2s-7.2-3.2-7.2-7.2c0-3.6 2.7-6.6 6.2-7.1v1.7c0 .2.1.4.3.5.1 0 .2.1.3.1.1 0 .3 0 .4-.1l3.6-3c.1-.1.2-.3.2-.5s-.1-.3-.2-.5l-3.7-3c-.2-.1-.4-.2-.6-.1-.2.1-.4.3-.4.6V15c-4.8.5-8.6 4.6-8.6 9.5 0 5.3 4.3 9.6 9.6 9.6s9.6-4.3 9.6-9.6c.1-.7-.5-1.2-1.1-1.2",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			}));
			var r, s, o = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(r || (r = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(s || (s = {}));
			const a = {
					[r.Loyalty]: o.a.First,
					[r.Achievement]: o.a.Second,
					[r.Cosmetic]: void 0
				},
				i = e => e === o.a.First ? r.Loyalty : e === o.a.Second ? r.Achievement : r.Cosmetic
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var r, s, o, a;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(s || (s = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(o || (o = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(a || (a = {}))
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, s = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(r || (r = {}));
			const o = {
				status: r.NotFetched
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.a:
						if (e.status === r.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: r,
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
						if (e.status === r.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: r,
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
							error: t.payload.error, status: r.Failure
						};
					case s.c:
						return {
							data: t.payload, status: r.Fetched
						};
					case s.d:
						return {
							status: r.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r, s = n("./src/lib/constants/specialMembership.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				a = n("./src/reddit/helpers/economics/sortBadges.ts"),
				i = n("./src/reddit/models/Badge/index.ts"),
				c = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(r || (r = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, n, r) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(s => {
						let o;
						(o = e.placement ? e.placement === i.a.First ? r[c.a.Loyalty][s] : r[c.a.Achievement][s] : l(e) ? r[c.a.Cosmetic][c.c.MyBadges][s] : r[c.a.Cosmetic][c.c.Gallery][s]) && (l(e) ? n.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						r = parseInt(t.price || "0");
					return n === r ? Object(a.b)(e, t) : n - r
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === s.a).map(m).sort((e, n) => {
					const r = t[e.id],
						s = t[n.id];
					return Object(a.b)(r, s)
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
				Object.keys(e.collections).forEach(n => {
					const r = e.collections[n],
						s = {
							description: r.description,
							highlight: r.extra && r.extra.style && r.extra.style.color,
							id: r.id,
							locked: [],
							title: r.title,
							unlocked: []
						};
					t[c.a.Loyalty][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
						...s,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const r = e.badges[t];
					r && n.add(r.type)
				});
				const r = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), n, r, t), u(Object.keys(e.products).map(t => e.products[t]), n, r, t), {
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
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.a: {
						const {
							subredditId: n
						} = t.payload, s = e[n];
						return s && s.status === r.Fetched ? {
							...e,
							[n]: {
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
					case o.h: {
						const {
							subredditId: n
						} = t.payload, s = e[n];
						return s && s.status === r.Fetched ? {
							...e,
							[n]: {
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
					case o.i: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: f(n),
								status: r.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return g
			})), n.d(t, "o", (function() {
				return _
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "x", (function() {
				return S
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "z", (function() {
				return w
			})), n.d(t, "l", (function() {
				return P
			})), n.d(t, "n", (function() {
				return C
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "j", (function() {
				return N
			})), n.d(t, "p", (function() {
				return T
			})), n.d(t, "k", (function() {
				return B
			})), n.d(t, "r", (function() {
				return F
			})), n.d(t, "y", (function() {
				return R
			})), n.d(t, "u", (function() {
				return L
			})), n.d(t, "v", (function() {
				return U
			})), n.d(t, "b", (function() {
				return G
			})), n.d(t, "w", (function() {
				return $
			})), n.d(t, "s", (function() {
				return V
			})), n.d(t, "t", (function() {
				return W
			})), n.d(t, "g", (function() {
				return H
			})), n.d(t, "m", (function() {
				return K
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/featureFlags/index.ts"),
				s = n("./src/reddit/helpers/economics/sortBadges.ts"),
				o = n("./src/reddit/helpers/richTextJson/index.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
				i = n("./src/reddit/models/Badge/managementPage.ts"),
				c = n("./src/reddit/models/Payments/index.ts"),
				d = n("./src/reddit/models/Product/index.ts"),
				l = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				u = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = n("./src/reddit/selectors/comments.ts"),
				p = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/reddit/selectors/experiments/mediaInComments.ts"),
				b = n("./src/reddit/selectors/gold/powerups/index.ts"),
				y = n("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const h = [],
				g = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === u.a.Fetched) {
						const e = n.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				_ = (e, t) => {
					const n = g(e, t);
					return n && n.endsAt || null
				};
			var v;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(v || (v = {}));
			const S = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === u.a.Fetched) {
						const n = _(e, t),
							r = Date.now();
						return n && r < n ? v.Subscribed : v.NotSubscribed
					}
					return v.DontKnow
				},
				O = (e, t) => {
					const n = e.user.account,
						r = e.economics.subredditPremium[t];
					if (n && r && r.status === u.a.Fetched) {
						const r = ((e.users.appliedBadges[n.id] || {})[t] || h).map(t => e.badges.models[t]).filter(Boolean);
						if (r) return {
							[i.a.Loyalty]: r.find(e => e.placement === a.a.First),
							[i.a.Achievement]: r.find(e => e.placement === a.a.Second),
							[i.a.Cosmetic]: r.find(e => !e.placement)
						}
					}
					return {
						[i.a.Loyalty]: void 0,
						[i.a.Achievement]: void 0,
						[i.a.Cosmetic]: void 0
					}
				};

			function j(e, t) {
				return (null == e ? void 0 : e.length) ? Object(s.a)(e.map(e => t[e]).filter(Boolean)) : h
			}
			const E = (e, t, n) => {
					var s;
					if (!r.d.spBadges(e)) return h;
					return j(null === (s = e.users.appliedBadges[n]) || void 0 === s ? void 0 : s[t], e.badges.models)
				},
				I = (e, t) => {
					const n = e.economics.subredditPremium[t.subredditId];
					if (n && n.status === u.a.Fetched) {
						const e = n.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function w(e, t) {
				const n = (e.economics.me.data.specialMemberships || {})[t];
				return !!(n && n.settings && n.settings.optOut)
			}

			function P(e, t) {
				const {
					badge: n,
					subredditId: r
				} = t, s = e.user.account ? e.user.account.id : void 0;
				if (Object(a.e)(n) && n.userId === s) return n;
				const o = e.badges.models,
					i = e.user.ownedBadges[r] || {},
					c = Object(a.e)(n) ? n.type : n.id;
				return Object.keys(i).map(e => o[e]).find(e => e && e.type === c)
			}

			function C(e, t, n, r) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === u.a.Fetched) {
					if (n === i.a.Loyalty || n === i.a.Achievement) return s.data.collections[n];
					if (n === i.a.Cosmetic && r) return s.data.collections[n][r]
				}
				return h
			}

			function x(e, t) {
				const n = C(e, t, i.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : h
			}

			function k(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === u.a.Fetched) {
					const e = n.data.collections[i.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(a.f)
				}
				return h
			}

			function N(e, t) {
				return C(e, t, i.a.Cosmetic, i.c.Gallery).some(e => e.locked.some(e => Object(a.f)(e) || !!e.price))
			}
			const T = e => {
				const t = [],
					n = e.economics.paymentSystems;
				if (n.status === l.a.Fetched && n.data.stripe && n.data.stripe.sources) {
					const e = n.data.stripe.sources;
					for (const n in e) {
						const r = e[n];
						t.push({
							display: `${r.brand} •••• ${r.last4}`,
							id: n,
							type: c.a.SavedStripe
						})
					}
				}
				if (n.status === l.a.Fetched && n.data.braintree && n.data.braintree.sources) {
					const e = n.data.braintree.sources;
					for (const n in e) {
						const r = e[n];
						"PayPal" === r.brand && t.push({
							display: "PayPal",
							id: r.id,
							type: c.a.SavedPayPal
						})
					}
				}
				return t
			};
			var D;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(D || (D = {}));
			const M = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Special Membership"
				},
				B = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				A = (e, t) => {
					if (!t) return {};
					const n = M.prices;
					B(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const r = g(e, t);
					return r && r.price && r.currency && (n[r.currency] = r.price), n
				},
				F = (e, t) => {
					var n, r, s, o;
					const a = (null === (o = null === (s = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.points) || void 0 === s ? void 0 : s[t || ""]) || void 0 === o ? void 0 : o.nomenclature) || M;
					return {
						prices: A(e, t),
						member: a.member || M.member,
						memberPlural: a.memberPlural || M.memberPlural,
						memberAlt: a.memberAlt || M.memberAlt,
						memberAltPlural: a.memberAltPlural || M.memberAltPlural,
						membership: a.membership || M.membership,
						membershipAlt: a.membershipAlt || M.membershipAlt
					}
				},
				R = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				L = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				U = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				G = (e, t) => {
					let {
						subredditId: n
					} = t;
					if (!n) return;
					return e.economics.emotes[n]
				},
				$ = (e, t) => {
					const n = t && e.economics.gifs[t];
					return !!n && n.hasGifProduct
				},
				V = (e, t) => !!t && !!Object(b.a)(e, {
					subredditId: t
				}),
				W = (e, t, n) => {
					if (Object(f.b)(e)) return !(!t || !Object(m.C)(e, {
						subredditId: t
					})) || (!!Y(e, t) || !(!r.d.spGiphy(e) || !q(e, n)));
					if (!Object(y.a)(e, {
							subredditId: t
						})) return !1;
					if (Object(b.f)(e, {
							subredditId: t
						})) return !0;
					if (q(e, n)) return !0;
					const s = r.d.spGiphy(e),
						o = $(e, t);
					return !!Y(e, t) || s && o
				},
				q = (e, t) => {
					const n = "replyToPost" !== t && Object(p.c)(e, {
						commentId: t
					});
					if (n && Object(o.a)(n)) return !0
				},
				Y = (e, t) => {
					const n = r.d.spGiphy(e),
						s = $(e, t);
					return n && s
				},
				H = (e, t, n) => {
					if (t) {
						const r = e.economics.banners.dismissedBanners[t];
						if (r && r.data) return !!r.data[n]
					}
				},
				K = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/gold/powerups/benefitSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var r = n("./src/reddit/models/Gold/Powerups/index.ts"),
				s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/actions/gold/constants.ts");
			const a = {};
			var i = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var n, r;
					switch (t.type) {
						case o.mb:
						case o.nb: {
							const {
								benefitStatuses: r,
								subredditId: s
							} = t.payload;
							if (!r) return e;
							const o = null !== (n = e[s]) && void 0 !== n ? n : {},
								a = {};
							return r.forEach(e => {
								let {
									benefit: t,
									isEnabled: n
								} = e;
								a[t] = n
							}), {
								...e,
								[s]: {
									...o,
									...a
								}
							}
						}
						case o.L: {
							const {
								benefitStatuses: n,
								subredditId: s
							} = t.payload, o = null !== (r = e[s]) && void 0 !== r ? r : {}, a = {};
							return n.forEach(e => {
								let {
									benefit: t,
									isEnabled: n
								} = e;
								a[t] = n
							}), {
								...e,
								[s]: {
									...o,
									...a
								}
							}
						}
						default:
							return e
					}
				},
				c = n("./node_modules/reselect/es/index.js");
			Object(s.a)({
				features: {
					powerupsBenefitSettings: i
				}
			});
			const d = (e, t) => {
					let {
						subredditId: n
					} = t;
					return n ? e.features.powerupsBenefitSettings[n] : null
				},
				l = (e => Object(c.a)(d, t => !!(null == t ? void 0 : t[e])))(r.a.CommentsWithGifs)
		},
		"./src/reddit/selectors/products.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/models/Product/index.ts");
			const s = (e, t) => {
					const n = e.products.models[t];
					if (n && n.type === r.a.Badge) return n
				},
				o = (e, t) => {
					let {
						productId: n
					} = t;
					const r = e.products.models[n];
					if (r) {
						const t = r.subredditId,
							s = Object.keys(e.user.ownedBadges[t] || {}),
							o = e.badges.models,
							a = Date.now();
						let i = !1;
						return s.forEach(e => {
							const t = o[e];
							t && t.type === n && t.endsAt > a && (i = !0)
						}), i
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Economics-SubredditPremium-LFGBanner.a8b240d4df099c51f3d1.js.map