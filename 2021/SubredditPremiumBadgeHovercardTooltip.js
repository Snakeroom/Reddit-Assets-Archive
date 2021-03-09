// https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeHovercardTooltip.df96569a1785e46816e0.js
// Retrieved at 3/9/2021, 6:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditPremiumBadgeHovercardTooltip", "EconHelperActions"], {
		"./node_modules/lodash/flattenDeep.js": function(e, t, r) {
			var a = r("./node_modules/lodash/_baseFlatten.js"),
				i = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? a(e, i) : []
			}
		},
		"./node_modules/react-motion/lib/Motion.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0;
			var a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
					}
					return e
				},
				i = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var a = t[r];
							a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
						}
					}
					return function(t, r, a) {
						return r && e(t.prototype, r), a && e(t, a), t
					}
				}();

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var s = n(r("./node_modules/react-motion/lib/mapToZero.js")),
				o = n(r("./node_modules/react-motion/lib/stripStyle.js")),
				d = n(r("./node_modules/react-motion/lib/stepper.js")),
				c = n(r("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				l = n(r("./node_modules/raf/index.js")),
				u = n(r("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				m = n(r("./node_modules/react/index.js")),
				p = n(r("./node_modules/react-motion/node_modules/prop-types/index.js")),
				b = 1e3 / 60,
				f = function(e) {
					function t(r) {
						var i = this;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), e.call(this, r), this.wasAnimating = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyle = null, this.clearUnreadPropStyle = function(e) {
							var t = !1,
								r = i.state,
								n = r.currentStyle,
								s = r.currentVelocity,
								o = r.lastIdealStyle,
								d = r.lastIdealVelocity;
							for (var c in e)
								if (Object.prototype.hasOwnProperty.call(e, c)) {
									var l = e[c];
									"number" == typeof l && (t || (t = !0, n = a({}, n), s = a({}, s), o = a({}, o), d = a({}, d)), n[c] = l, s[c] = 0, o[c] = l, d[c] = 0)
								} t && i.setState({
								currentStyle: n,
								currentVelocity: s,
								lastIdealStyle: o,
								lastIdealVelocity: d
							})
						}, this.startAnimationIfNecessary = function() {
							i.animationID = l.default((function(e) {
								var t = i.props.style;
								if (u.default(i.state.currentStyle, t, i.state.currentVelocity)) return i.wasAnimating && i.props.onRest && i.props.onRest(), i.animationID = null, i.wasAnimating = !1, void(i.accumulatedTime = 0);
								i.wasAnimating = !0;
								var r = e || c.default(),
									a = r - i.prevTime;
								if (i.prevTime = r, i.accumulatedTime = i.accumulatedTime + a, i.accumulatedTime > 10 * b && (i.accumulatedTime = 0), 0 === i.accumulatedTime) return i.animationID = null, void i.startAnimationIfNecessary();
								var n = (i.accumulatedTime - Math.floor(i.accumulatedTime / b) * b) / b,
									s = Math.floor(i.accumulatedTime / b),
									o = {},
									l = {},
									m = {},
									p = {};
								for (var f in t)
									if (Object.prototype.hasOwnProperty.call(t, f)) {
										var h = t[f];
										if ("number" == typeof h) m[f] = h, p[f] = 0, o[f] = h, l[f] = 0;
										else {
											for (var g = i.state.lastIdealStyle[f], y = i.state.lastIdealVelocity[f], _ = 0; _ < s; _++) {
												var v = d.default(b / 1e3, g, y, h.val, h.stiffness, h.damping, h.precision);
												g = v[0], y = v[1]
											}
											var E = d.default(b / 1e3, g, y, h.val, h.stiffness, h.damping, h.precision),
												S = E[0],
												O = E[1];
											m[f] = g + (S - g) * n, p[f] = y + (O - y) * n, o[f] = g, l[f] = y
										}
									} i.animationID = null, i.accumulatedTime -= s * b, i.setState({
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
							a = t || o.default(r),
							i = s.default(a);
						return {
							currentStyle: a,
							currentVelocity: i,
							lastIdealStyle: a,
							lastIdealVelocity: i
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
			t.default = f, e.exports = t.default
		},
		"./node_modules/react-motion/lib/StaggeredMotion.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0;
			var a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
					}
					return e
				},
				i = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var a = t[r];
							a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
						}
					}
					return function(t, r, a) {
						return r && e(t.prototype, r), a && e(t, a), t
					}
				}();

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var s = n(r("./node_modules/react-motion/lib/mapToZero.js")),
				o = n(r("./node_modules/react-motion/lib/stripStyle.js")),
				d = n(r("./node_modules/react-motion/lib/stepper.js")),
				c = n(r("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				l = n(r("./node_modules/raf/index.js")),
				u = n(r("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				m = n(r("./node_modules/react/index.js")),
				p = n(r("./node_modules/react-motion/node_modules/prop-types/index.js")),
				b = 1e3 / 60;
			var f = function(e) {
				function t(r) {
					var i = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, r), this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = i.state, r = t.currentStyles, n = t.currentVelocities, s = t.lastIdealStyles, o = t.lastIdealVelocities, d = !1, c = 0; c < e.length; c++) {
							var l = e[c],
								u = !1;
							for (var m in l)
								if (Object.prototype.hasOwnProperty.call(l, m)) {
									var p = l[m];
									"number" == typeof p && (u || (u = !0, d = !0, r[c] = a({}, r[c]), n[c] = a({}, n[c]), s[c] = a({}, s[c]), o[c] = a({}, o[c])), r[c][m] = p, n[c][m] = 0, s[c][m] = p, o[c][m] = 0)
								}
						}
						d && i.setState({
							currentStyles: r,
							currentVelocities: n,
							lastIdealStyles: s,
							lastIdealVelocities: o
						})
					}, this.startAnimationIfNecessary = function() {
						i.animationID = l.default((function(e) {
							var t = i.props.styles(i.state.lastIdealStyles);
							if (function(e, t, r) {
									for (var a = 0; a < e.length; a++)
										if (!u.default(e[a], t[a], r[a])) return !1;
									return !0
								}(i.state.currentStyles, t, i.state.currentVelocities)) return i.animationID = null, void(i.accumulatedTime = 0);
							var r = e || c.default(),
								a = r - i.prevTime;
							if (i.prevTime = r, i.accumulatedTime = i.accumulatedTime + a, i.accumulatedTime > 10 * b && (i.accumulatedTime = 0), 0 === i.accumulatedTime) return i.animationID = null, void i.startAnimationIfNecessary();
							for (var n = (i.accumulatedTime - Math.floor(i.accumulatedTime / b) * b) / b, s = Math.floor(i.accumulatedTime / b), o = [], l = [], m = [], p = [], f = 0; f < t.length; f++) {
								var h = t[f],
									g = {},
									y = {},
									_ = {},
									v = {};
								for (var E in h)
									if (Object.prototype.hasOwnProperty.call(h, E)) {
										var S = h[E];
										if ("number" == typeof S) g[E] = S, y[E] = 0, _[E] = S, v[E] = 0;
										else {
											for (var O = i.state.lastIdealStyles[f][E], w = i.state.lastIdealVelocities[f][E], P = 0; P < s; P++) {
												var x = d.default(b / 1e3, O, w, S.val, S.stiffness, S.damping, S.precision);
												O = x[0], w = x[1]
											}
											var I = d.default(b / 1e3, O, w, S.val, S.stiffness, S.damping, S.precision),
												N = I[0],
												j = I[1];
											g[E] = O + (N - O) * n, y[E] = w + (j - w) * n, _[E] = O, v[E] = w
										}
									} m[f] = g, p[f] = y, o[f] = _, l[f] = v
							}
							i.animationID = null, i.accumulatedTime -= s * b, i.setState({
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
						a = t || r().map(o.default),
						i = a.map((function(e) {
							return s.default(e)
						}));
					return {
						currentStyles: a,
						currentVelocities: i,
						lastIdealStyles: a,
						lastIdealVelocities: i
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
			t.default = f, e.exports = t.default
		},
		"./node_modules/react-motion/lib/TransitionMotion.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0;
			var a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
					}
					return e
				},
				i = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var a = t[r];
							a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
						}
					}
					return function(t, r, a) {
						return r && e(t.prototype, r), a && e(t, a), t
					}
				}();

			function n(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var s = n(r("./node_modules/react-motion/lib/mapToZero.js")),
				o = n(r("./node_modules/react-motion/lib/stripStyle.js")),
				d = n(r("./node_modules/react-motion/lib/stepper.js")),
				c = n(r("./node_modules/react-motion/lib/mergeDiff.js")),
				l = n(r("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				u = n(r("./node_modules/raf/index.js")),
				m = n(r("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				p = n(r("./node_modules/react/index.js")),
				b = n(r("./node_modules/react-motion/node_modules/prop-types/index.js")),
				f = 1e3 / 60;

			function h(e, t, r) {
				var a = t;
				return null == a ? e.map((function(e, t) {
					return {
						key: e.key,
						data: e.data,
						style: r[t]
					}
				})) : e.map((function(e, t) {
					for (var i = 0; i < a.length; i++)
						if (a[i].key === e.key) return {
							key: a[i].key,
							data: a[i].data,
							style: r[t]
						};
					return {
						key: e.key,
						data: e.data,
						style: r[t]
					}
				}))
			}

			function g(e, t, r, a, i, n, o, d, l) {
				for (var u = c.default(a, i, (function(e, a) {
						var i = t(a);
						return null == i ? (r({
							key: a.key,
							data: a.data
						}), null) : m.default(n[e], i, o[e]) ? (r({
							key: a.key,
							data: a.data
						}), null) : {
							key: a.key,
							data: a.data,
							style: i
						}
					})), p = [], b = [], f = [], h = [], g = 0; g < u.length; g++) {
					for (var y = u[g], _ = null, v = 0; v < a.length; v++)
						if (a[v].key === y.key) {
							_ = v;
							break
						} if (null == _) {
						var E = e(y);
						p[g] = E, f[g] = E;
						var S = s.default(y.style);
						b[g] = S, h[g] = S
					} else p[g] = n[_], f[g] = d[_], b[g] = o[_], h[g] = l[_]
				}
				return [u, p, b, f, h]
			}
			var y = function(e) {
				function t(r) {
					var i = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, r), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = g(i.props.willEnter, i.props.willLeave, i.props.didLeave, i.state.mergedPropsStyles, e, i.state.currentStyles, i.state.currentVelocities, i.state.lastIdealStyles, i.state.lastIdealVelocities), r = t[0], n = t[1], s = t[2], o = t[3], d = t[4], c = 0; c < e.length; c++) {
							var l = e[c].style,
								u = !1;
							for (var m in l)
								if (Object.prototype.hasOwnProperty.call(l, m)) {
									var p = l[m];
									"number" == typeof p && (u || (u = !0, n[c] = a({}, n[c]), s[c] = a({}, s[c]), o[c] = a({}, o[c]), d[c] = a({}, d[c]), r[c] = {
										key: r[c].key,
										data: r[c].data,
										style: a({}, r[c].style)
									}), n[c][m] = p, s[c][m] = 0, o[c][m] = p, d[c][m] = 0, r[c].style[m] = p)
								}
						}
						i.setState({
							currentStyles: n,
							currentVelocities: s,
							mergedPropsStyles: r,
							lastIdealStyles: o,
							lastIdealVelocities: d
						})
					}, this.startAnimationIfNecessary = function() {
						i.unmounting || (i.animationID = u.default((function(e) {
							if (!i.unmounting) {
								var t = i.props.styles,
									r = "function" == typeof t ? t(h(i.state.mergedPropsStyles, i.unreadPropStyles, i.state.lastIdealStyles)) : t;
								if (function(e, t, r, a) {
										if (a.length !== t.length) return !1;
										for (var i = 0; i < a.length; i++)
											if (a[i].key !== t[i].key) return !1;
										for (i = 0; i < a.length; i++)
											if (!m.default(e[i], t[i].style, r[i])) return !1;
										return !0
									}(i.state.currentStyles, r, i.state.currentVelocities, i.state.mergedPropsStyles)) return i.animationID = null, void(i.accumulatedTime = 0);
								var a = e || l.default(),
									n = a - i.prevTime;
								if (i.prevTime = a, i.accumulatedTime = i.accumulatedTime + n, i.accumulatedTime > 10 * f && (i.accumulatedTime = 0), 0 === i.accumulatedTime) return i.animationID = null, void i.startAnimationIfNecessary();
								for (var s = (i.accumulatedTime - Math.floor(i.accumulatedTime / f) * f) / f, o = Math.floor(i.accumulatedTime / f), c = g(i.props.willEnter, i.props.willLeave, i.props.didLeave, i.state.mergedPropsStyles, r, i.state.currentStyles, i.state.currentVelocities, i.state.lastIdealStyles, i.state.lastIdealVelocities), u = c[0], p = c[1], b = c[2], y = c[3], _ = c[4], v = 0; v < u.length; v++) {
									var E = u[v].style,
										S = {},
										O = {},
										w = {},
										P = {};
									for (var x in E)
										if (Object.prototype.hasOwnProperty.call(E, x)) {
											var I = E[x];
											if ("number" == typeof I) S[x] = I, O[x] = 0, w[x] = I, P[x] = 0;
											else {
												for (var N = y[v][x], j = _[v][x], C = 0; C < o; C++) {
													var k = d.default(f / 1e3, N, j, I.val, I.stiffness, I.damping, I.precision);
													N = k[0], j = k[1]
												}
												var A = d.default(f / 1e3, N, j, I.val, I.stiffness, I.damping, I.precision),
													T = A[0],
													M = A[1];
												S[x] = N + (T - N) * s, O[x] = j + (M - j) * s, w[x] = N, P[x] = j
											}
										} y[v] = w, _[v] = P, p[v] = S, b[v] = O
								}
								i.animationID = null, i.accumulatedTime -= o * f, i.setState({
									currentStyles: p,
									currentVelocities: b,
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
						a = e.willEnter,
						i = e.willLeave,
						n = e.didLeave,
						d = "function" == typeof r ? r(t) : r,
						c = void 0;
					c = null == t ? d : t.map((function(e) {
						for (var t = 0; t < d.length; t++)
							if (d[t].key === e.key) return d[t];
						return e
					}));
					var l = null == t ? d.map((function(e) {
							return o.default(e.style)
						})) : t.map((function(e) {
							return o.default(e.style)
						})),
						u = null == t ? d.map((function(e) {
							return s.default(e.style)
						})) : t.map((function(e) {
							return s.default(e.style)
						})),
						m = g(a, i, n, c, d, l, u, l, u),
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
				for (var a = {}, i = 0; i < e.length; i++) a[e[i].key] = i;
				var n = {};
				for (i = 0; i < t.length; i++) n[t[i].key] = i;
				var s = [];
				for (i = 0; i < t.length; i++) s[i] = t[i];
				for (i = 0; i < e.length; i++)
					if (!Object.prototype.hasOwnProperty.call(n, e[i].key)) {
						var o = r(i, e[i]);
						null != o && s.push(o)
					} return s.sort((function(e, r) {
					var i = n[e.key],
						s = n[r.key],
						o = a[e.key],
						d = a[r.key];
					if (null != i && null != s) return n[e.key] - n[r.key];
					if (null != o && null != d) return a[e.key] - a[r.key];
					if (null != i) {
						for (var c = 0; c < t.length; c++) {
							var l = t[c].key;
							if (Object.prototype.hasOwnProperty.call(a, l)) {
								if (i < n[l] && d > a[l]) return -1;
								if (i > n[l] && d < a[l]) return 1
							}
						}
						return 1
					}
					for (c = 0; c < t.length; c++) {
						l = t[c].key;
						if (Object.prototype.hasOwnProperty.call(a, l)) {
							if (s < n[l] && o > a[l]) return 1;
							if (s > n[l] && o < a[l]) return -1
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

			function a(e) {
				return e && e.__esModule ? e.default : e
			}
			t.__esModule = !0;
			var i = r("./node_modules/react-motion/lib/Motion.js");
			t.Motion = a(i);
			var n = r("./node_modules/react-motion/lib/StaggeredMotion.js");
			t.StaggeredMotion = a(n);
			var s = r("./node_modules/react-motion/lib/TransitionMotion.js");
			t.TransitionMotion = a(s);
			var o = r("./node_modules/react-motion/lib/spring.js");
			t.spring = a(o);
			var d = r("./node_modules/react-motion/lib/presets.js");
			t.presets = a(d);
			var c = r("./node_modules/react-motion/lib/stripStyle.js");
			t.stripStyle = a(c);
			var l = r("./node_modules/react-motion/lib/reorderKeys.js");
			t.reorderKeys = a(l)
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
				for (var a in t)
					if (Object.prototype.hasOwnProperty.call(t, a)) {
						if (0 !== r[a]) return !1;
						var i = "number" == typeof t[a] ? t[a] : t[a].val;
						if (e[a] !== i) return !1
					} return !0
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/spring.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0;
			var a = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = arguments[t];
					for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
				}
				return e
			};
			t.default = function(e, t) {
				return a({}, o, t, {
					val: e
				})
			};
			var i, n = r("./node_modules/react-motion/lib/presets.js"),
				s = (i = n) && i.__esModule ? i : {
					default: i
				},
				o = a({}, s.default.noWobble, {
					precision: .01
				});
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stepper.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, r, i, n, s, o) {
				var d = r + (-n * (t - i) + -s * r) * e,
					c = t + d * e;
				if (Math.abs(d) < o && Math.abs(c - i) < o) return a[0] = i, a[1] = 0, a;
				return a[0] = c, a[1] = d, a
			};
			var a = [0, 0];
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
					var r, a, i;
					"undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
						return performance.now()
					} : null != t && t.hrtime ? (e.exports = function() {
						return (r() - i) / 1e6
					}, a = t.hrtime, i = (r = function() {
						var e;
						return 1e9 * (e = a())[0] + e[1]
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
			var a = r("./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function i() {}

			function n() {}
			n.resetWarningCache = i, e.exports = function() {
				function e(e, t, r, i, n, s) {
					if (s !== a) {
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
					checkPropTypes: n,
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
				return a
			}));
			const a = "custom"
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return i
			}));
			const a = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				i = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return n
			}));
			const a = "ECONOMICS__ME__ME_DATA_SUCCESS",
				i = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				n = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return o
			}));
			const a = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				i = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				n = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				s = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return n
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "e", (function() {
				return o
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
				return p
			})), r.d(t, "l", (function() {
				return b
			})), r.d(t, "m", (function() {
				return f
			})), r.d(t, "n", (function() {
				return h
			})), r.d(t, "o", (function() {
				return g
			})), r.d(t, "p", (function() {
				return y
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
				return w
			})), r.d(t, "w", (function() {
				return P
			})), r.d(t, "x", (function() {
				return x
			}));
			const a = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				i = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				n = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				s = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				o = "POLL_VOTE_SUCCESS",
				d = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				c = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				l = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				u = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				p = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				b = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				f = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				h = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				g = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				y = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				_ = "GOVERNANCE__TRANSFER_FAILURE",
				v = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				E = "GOVERNANCE__TRANSFER_PENDING",
				S = "GOVERNANCE__TRANSFER_SUCCESS",
				O = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				w = "GOVERNANCE__WALLETS_FETCH_PENDING",
				P = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				x = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
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
			var a = r("./node_modules/react/index.js"),
				i = r.n(a),
				n = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				o = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				c = r("./src/reddit/selectors/tooltip.ts"),
				l = r("./node_modules/uuid/v4.js"),
				u = r.n(l),
				m = r("./src/lib/classNames/index.ts"),
				p = r("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.tsx"),
				b = r("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				f = r("./src/reddit/components/TrackingHelper/index.tsx"),
				h = r("./src/reddit/featureFlags/index.ts"),
				g = r("./src/reddit/models/Badge/index.ts"),
				y = r("./src/reddit/models/Badge/managementPage.ts"),
				_ = r("./src/reddit/selectors/economics.ts"),
				v = r("./src/reddit/selectors/products.ts"),
				E = r("./src/reddit/selectors/telemetry.ts"),
				S = r("./node_modules/fbt/lib/FbtPublic.js"),
				O = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				w = r("./src/reddit/actions/tooltip.ts"),
				P = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.tsx"),
				x = r("./src/reddit/controls/Button/index.tsx"),
				I = r("./src/reddit/helpers/economics/membershipPage.ts"),
				N = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/EducationFooter/index.m.less"),
				j = r.n(N);
			const C = Object(s.c)({
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t]
			});
			var k = Object(f.c)(Object(n.b)(C, e => ({
					onOpen: () => e(Object(w.i)())
				}))((function(e) {
					const t = e.subreddit ? e.subreddit.name : "",
						r = e.correlationId || u()(),
						a = t => {
							t.stopPropagation(), e.sendEvent(e => ({
								correlationId: r,
								source: "meta",
								action: "click",
								noun: "subscription_badge_hover_open_learn_more",
								...E.defaults(e),
								subreddit: E.subreddit(e)
							})), e.onOpen()
						};
					return i.a.createElement("footer", {
						className: Object(m.a)(e.className, j.a.container)
					}, i.a.createElement(O.a, {
						className: j.a.wrapper,
						to: Object(I.a)(t, r),
						onClick: a
					}, i.a.createElement(P.a, {
						className: j.a.benefits,
						subredditId: e.subredditId
					})), i.a.createElement(x.k, {
						className: j.a.link,
						disabled: !e.subreddit,
						to: Object(I.a)(t, r),
						onClick: a
					}, S.fbt._("Learn More", null, {
						hk: "4FGSHD"
					})))
				}))),
				A = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				T = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/GalleryFooter/index.m.less"),
				M = r.n(T);
			var B = Object(f.c)(Object(n.b)(void 0, (e, {
					badge: t,
					subredditId: r
				}) => ({
					onOpen: () => {
						e(Object(w.i)()), e(Object(A.c)({
							badge: t,
							subredditId: r,
							initialView: y.c.Gallery
						}))
					}
				}))((function(e) {
					const t = e.correlationId || u()();
					return i.a.createElement("footer", {
						className: Object(m.a)(e.className, M.a.container)
					}, i.a.createElement("div", null), i.a.createElement(x.i, {
						onClick: r => {
							r.stopPropagation(), e.sendEvent(e => ({
								correlationId: t,
								source: "meta",
								action: "click",
								noun: "subscription_badge_hover_open_gallery",
								...E.defaults(e),
								subreddit: E.subreddit(e)
							})), e.onOpen()
						}
					}, S.fbt._("Get", null, {
						hk: "4g4sIK"
					})))
				}))),
				D = r("./src/reddit/actions/chat/toggle.ts"),
				L = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/LFGFooter/index.m.less"),
				F = r.n(L);
			var R = Object(f.c)(Object(n.b)(void 0, (e, {
					userId: t
				}) => ({
					onStartChat: () => e(Object(D.a)(t))
				}))((function(e) {
					const t = e.correlationId || u()();
					return i.a.createElement("footer", {
						className: Object(m.a)(F.a.container, e.className)
					}, i.a.createElement("div", null), i.a.createElement(x.i, {
						onClick: r => {
							r.stopPropagation(), e.sendEvent(e => ({
								correlationId: t,
								source: "meta",
								action: "click",
								noun: "lfg_badge_start_chat",
								...E.defaults(e),
								subreddit: E.subreddit(e)
							})), e.onStartChat()
						}
					}, S.fbt._("start chat", null, {
						hk: "eNK8L"
					})))
				}))),
				G = r("./src/reddit/components/Economics/SubredditPremium/Badges/HoverCard/ManagementFooter/index.m.less"),
				V = r.n(G);
			var W, U = Object(n.b)(void 0, (e, {
					badge: t,
					subredditId: r
				}) => ({
					onOpen: () => {
						e(Object(w.i)()), e(Object(A.c)({
							badge: t,
							subredditId: r,
							initialView: y.c.MyBadges
						}))
					}
				}))((function(e) {
					return i.a.createElement("footer", {
						className: Object(m.a)(e.className, V.a.container)
					}, i.a.createElement("div", null), i.a.createElement(x.i, {
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
			}(W || (W = {}));
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
						...E.defaults(e),
						subreddit: E.subreddit(e)
					}))
				}
				render() {
					const e = function(e) {
						const t = !!e.badge.placement || Object(g.f)(e.badge);
						return e.userId && (b.b.has(e.badge.id) || b.b.has(e.badge.type)) ? W.LFG : t && e.userIsPremiumSubscriber === _.a.Subscribed || !t && e.ownedBadge ? W.Management : t && e.userIsPremiumSubscriber !== _.a.Subscribed && e.premiumSubscriptionsEnabled ? W.Education : !t && !e.ownedBadge && e.relevantProduct && e.relevantProduct.price ? W.Gallery : void 0
					}(this.props);
					return i.a.createElement("div", {
						className: Object(m.a)(this.props.className, H.a.container),
						style: this.props.style
					}, i.a.createElement(p.a, {
						badge: this.props.badge,
						className: H.a.content,
						subredditId: this.props.subredditId,
						type: Object(y.d)(this.props.badge.placement)
					}), e === W.Management && i.a.createElement(U, {
						className: H.a.footer,
						badge: this.props.badge,
						subredditId: this.props.subredditId
					}), e === W.Education && i.a.createElement(k, {
						className: H.a.footerEducation,
						correlationId: this.correlationId,
						subredditId: this.props.subredditId
					}), e === W.Gallery && i.a.createElement(B, {
						className: H.a.footer,
						correlationId: this.correlationId,
						badge: this.props.badge,
						subredditId: this.props.subredditId
					}), e === W.LFG && i.a.createElement(R, {
						className: H.a.footer,
						correlationId: this.correlationId,
						userId: this.props.userId
					}))
				}
			}
			const X = Object(s.c)({
				ownedBadge: _.k,
				premiumSubscriptionsEnabled: h.d.spSpecialMemberships,
				relevantProduct: (e, {
					badge: t
				}) => {
					if (!Object(g.e)(t)) return t;
					const r = t.type;
					return Object(v.a)(e, r)
				},
				userIsPremiumSubscriber: (e, {
					subredditId: t
				}) => Object(_.v)(e, t)
			});
			var q = Object(f.c)(Object(n.b)(X)(Z));
			const Y = Object(d.a)(q, [o.a.Click, o.a.Keydown]);
			const $ = Object(s.c)({
				isOpen: (e, {
					tooltipId: t
				}) => Object(c.b)(t)(e)
			});
			t.default = Object(n.b)($)((function(e) {
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
			var a = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./node_modules/react/index.js"),
				n = r.n(i),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				c = r("./src/reddit/models/Badge/index.ts"),
				l = r("./src/reddit/models/Badge/managementPage.ts"),
				u = r("./src/reddit/selectors/crypto/wallet.ts"),
				m = r("./src/reddit/selectors/economics.ts"),
				p = r("./node_modules/reselect/es/index.js"),
				b = r("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/Content/index.m.less"),
				f = r.n(b);
			const h = Object(p.c)({
				collection: (e, {
					badge: t,
					subredditId: r
				}) => {
					if (t.collections) {
						const a = Object.keys(t.collections);
						if (a.length) {
							const t = a[0];
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
					type: a
				}) => {
					if (!Object(c.e)(t) && a === l.a.Achievement && d.a[t.id]) {
						const a = Object(u.a)(e, {
							subredditId: r
						});
						if (a) return {
							complete: parseInt(a.amount),
							total: d.a[t.id]
						}
					}
				}
			});
			t.a = Object(s.b)(h)((function(e) {
				const t = e.type === l.a.Loyalty ? a.fbt._("Loyalty Badge", null, {
						hk: "3C1yVX"
					}) : e.type === l.a.Achievement ? a.fbt._("Achievement Badge", null, {
						hk: "3ZCLHl"
					}) : a.fbt._("Style Badge", null, {
						hk: "1heMgq"
					}),
					r = e.collection ? e.collection.title : t,
					{
						url: i,
						url2x: s
					} = Object(c.d)(60, 60, e.badge),
					d = e.progress;
				return n.a.createElement("article", {
					className: Object(o.a)(e.className, {
						[f.a.fullWidth]: !!e.fullWidth
					})
				}, n.a.createElement("div", {
					className: f.a.wrapper
				}, n.a.createElement("img", {
					className: f.a.image,
					src: s,
					srcSet: `${i}, ${s} 2x`
				}), n.a.createElement("div", {
					className: f.a.info
				}, n.a.createElement("div", {
					className: f.a.collectionTitle,
					style: {
						color: e.collection && e.collection.highlight
					},
					title: r
				}, r), n.a.createElement("header", {
					className: f.a.title
				}, e.badge.title), d && d.complete < d.total && n.a.createElement("div", {
					className: f.a.progressContainer
				}, n.a.createElement("div", {
					className: f.a.progressBar
				}, n.a.createElement("div", {
					className: f.a.progressThumb,
					style: {
						width: `${d.complete/d.total*100}%`
					}
				})), n.a.createElement("div", {
					className: f.a.progressAmount
				}, function(e) {
					return `${`${Math.floor(e.complete/1e3)}k`}/${`${Math.floor(e.total/1e3)}k`}`
				}(d))), n.a.createElement("div", {
					className: f.a.description
				}, e.badge.description))), e.children)
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, r) {
			"use strict";
			var a, i, n, s;

			function o(e) {
				const {
					platform: t,
					playerType: r,
					region: a,
					style: i
				} = e;
				return `https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_${i}/${a}_${t}_${r}_${i}.svg`
			}
			r.d(t, "a", (function() {
					return a
				})), r.d(t, "b", (function() {
					return i
				})), r.d(t, "c", (function() {
					return n
				})), r.d(t, "d", (function() {
					return o
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(a || (a = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(i || (i = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(n || (n = {})),
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
			var a = r("./node_modules/react/index.js"),
				i = r.n(a),
				n = r("./node_modules/react-motion/lib/react-motion.js"),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				l = r("./src/reddit/selectors/economics.ts"),
				u = r("./node_modules/fbt/lib/FbtPublic.js"),
				m = r("./src/config.ts"),
				p = r("./src/reddit/icons/svgs/Checkmark/index.tsx");
			const b = {
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
				f = {
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
					t5_2wlj3: f,
					t5_2l3wpx: f,
					t5_vsb5g: h,
					t5_37jgj: h,
					t5_2t9ha: g,
					t5_2a3y8x: g
				};
			var _ = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Badges/index.m.less"),
				v = r.n(_);
			const E = (e, t) => `${m.a.assetPath}/img/memberships/paywall/${e.name.toLowerCase()}/${t}`,
				S = 500,
				O = 30,
				w = 132;
			class P extends i.a.Component {
				constructor(e) {
					super(e), this.badgesBackground = function(e) {
						const t = y[e] || b,
							r = t.width / t.badges.length;
						return {
							...t,
							badges: t.badges.map((function(e, t, a) {
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
						const a = ((w - parseFloat(r.replace("px", ""))) * e + t) % t;
						this.badgesBackground.badges.forEach(e => {
							a > e.interval[0] && a <= e.interval[1] && this.setState({
								currentlySelected: e
							})
						})
					}, S)
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
						currentlySelected: a
					} = this.state;
					return t ? i.a.createElement("article", {
						className: Object(d.a)(v.a.container, e)
					}, i.a.createElement("div", {
						className: v.a.background
					}), i.a.createElement("div", {
						className: v.a.content
					}, i.a.createElement("header", {
						className: v.a.title
					}, u.fbt._("badges", null, {
						hk: "4bW4l"
					})), i.a.createElement("div", {
						className: v.a.rows
					}, i.a.createElement("div", {
						className: v.a.row,
						style: {
							animationDuration: "80s",
							backgroundImage: `url(${E(t,"badges-line-1-v2.png")})`
						}
					}), i.a.createElement("div", {
						className: v.a.row,
						ref: e => this.rowRef = e,
						style: {
							animationDirection: "reverse",
							animationDuration: "120s",
							backgroundImage: `url(${E(t,"badges-line-2-v2.png")})`
						}
					}), i.a.createElement("div", {
						className: v.a.row,
						style: {
							animationDuration: "160s",
							backgroundImage: `url(${E(t,"badges-line-3-v2.png")})`
						}
					})), i.a.createElement("div", {
						className: v.a.username,
						style: {
							color: a.color
						}
					}, i.a.createElement("img", {
						className: v.a.badgePreview,
						src: a.url
					}), r), i.a.createElement("footer", {
						className: v.a.explanation
					}, u.fbt._("Style your username with a badge and color", null, {
						hk: "2bRpdH"
					})), i.a.createElement("div", {
						className: v.a.selection
					}, i.a.createElement(p.a, {
						className: v.a.check
					})))) : null
				}
			}
			const x = Object(o.c)({
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t],
				username: e => `u/${e.user.account&&e.user.account.displayText||"username"}`
			});
			var I = Object(s.b)(x)(P),
				N = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Emojis/index.m.less"),
				j = r.n(N);
			const C = ["blink", "bush", "chug", "clappy", "confused", "cuddle", "dab", "dance", "default", "oof", "respect", "soon", "unfortunately", "wow"].map(e => `https://meta.redditmedia.com/img/fortnitebr/emotes/${e}-2x.gif`).concat("https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_destroy.gif");
			const k = Object(o.c)({
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t]
			});
			var A = Object(s.b)(k)((function(e) {
					const {
						className: t,
						subreddit: r
					} = e;
					return r ? i.a.createElement("article", {
						className: Object(d.a)(j.a.container, t)
					}, i.a.createElement("div", {
						className: j.a.background
					}), i.a.createElement("div", {
						className: j.a.content
					}, i.a.createElement("header", {
						className: j.a.title
					}, u.fbt._("emotes", null, {
						hk: "1VLDec"
					})), i.a.createElement("div", {
						className: j.a.example
					}, i.a.createElement("img", {
						className: j.a.drawer,
						src: `${m.a.assetPath}/img/memberships/emoji-drawer.png`
					}), i.a.createElement("div", {
						className: j.a.emojisTitle
					}, u.fbt._("Add r/{communityName} emote", [u.fbt._param("communityName", r.name)], {
						hk: "1pL2rY"
					})), i.a.createElement("div", {
						className: j.a.emojisContainer
					}, i.a.createElement("div", {
						className: j.a.emojis
					}, C.map(e => i.a.createElement("img", {
						className: j.a.emoji,
						key: e,
						src: e
					}))), i.a.createElement("div", {
						className: j.a.overflow
					}))), i.a.createElement("footer", {
						className: j.a.explanation
					}, u.fbt._("Get access to premium animated emotes", null, {
						hk: "1jTE2m"
					})))) : null
				})),
				T = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Gifs/index.m.less"),
				M = r.n(T);
			const B = (() => {
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
			class D extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						imagesCol1: [],
						imagesCol2: []
					}
				}
				async componentDidMount() {
					const e = this.props.subreddit && this.props.subreddit.title || "reddit",
						t = await B(e),
						r = [],
						a = [];
					t.data.forEach((e, t) => {
						const i = e.images.fixed_width.url;
						t % 2 == 0 ? r.push(i) : a.push(i)
					}), this.setState({
						imagesCol1: r,
						imagesCol2: a
					})
				}
				render() {
					const {
						className: e,
						subreddit: t
					} = this.props;
					return t ? i.a.createElement("article", {
						className: Object(d.a)(M.a.container, e)
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
			const L = Object(o.c)({
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t]
			});
			var F = Object(s.b)(L)(D),
				R = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.m.less"),
				G = r.n(R);
			const V = 1e4,
				W = 110;
			class U extends i.a.Component {
				constructor(e) {
					super(e), this.gotoNextSlide = () => {
						this.timeoutRef && clearInterval(this.timeoutRef), this.setState({
							currentSlideIdx: (this.state.currentSlideIdx + 1) % this.slides.length
						}), this.timeoutRef = window.setTimeout(this.gotoNextSlide, V)
					}, this.timeoutRef = null, this.state = {
						currentSlideIdx: 0
					}, this.slides = function(e) {
						switch (e) {
							case "t5_3oeyf":
							case "t5_socj8":
								return [I, A, F];
							default:
								return [I, F]
						}
					}(e.subredditId)
				}
				componentDidMount() {
					this.timeoutRef = window.setTimeout(this.gotoNextSlide, V)
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
						src: Object(c.a)(o, "Crown.gif")
					}), r.membershipAlt), !t && i.a.createElement(i.a.Fragment, null, i.a.createElement("article", {
						className: G.a.benefits
					}, i.a.createElement(n.TransitionMotion, {
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
								left: Object(n.spring)(0)
							}
						}],
						willEnter: () => ({
							left: W
						}),
						willLeave: () => ({
							left: Object(n.spring)(-W)
						})
					}, e => i.a.createElement(a.Fragment, null, e.map(e => i.a.createElement("div", {
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
						className: Object(d.a)(G.a.indicator, {
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
				}) => Object(l.q)(e, t),
				subreddit: (e, {
					subredditId: t
				}) => e.subreddits.models[t],
				username: e => {
					const t = e.user.account;
					return t && t.username || "username"
				}
			});
			t.a = Object(s.b)(z)(U)
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return o
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = r("./node_modules/lodash/flattenDeep.js"),
				i = r.n(a),
				n = r("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const s = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				o = new Set(i()(Object.keys(n.a).map(e => Object.keys(n.b).map(t => Object.keys(n.c).map(r => `${r}_${e}_${t}_badge`)))))
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var a = r("./src/lib/permalinkToOverlayLocation/index.ts");

			function i(e, t) {
				return Object(a.a)(`/web/special-membership/${e}?corr=${t}`)
			}
		},
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "d", (function() {
				return m
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = r("./src/reddit/models/RichTextJson/index.ts");
			const i = "giphy|",
				n = "|downsized";

			function s(e, t) {
				return i + e + (t ? n : "")
			}

			function o(e) {
				return e && 0 === e.indexOf(i)
			}

			function d(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(o)
			}

			function c(e) {
				let t = e.substring(i.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function l(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, r) => [...e, ...l(r, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function u(e) {
				return l(e, a.F).map(e => e.id)
			}

			function m(e) {
				return l(e, e => e.e === a.o).map(e => e.u)
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				i = r.n(a);
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
				return a
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "d", (function() {
				return o
			}));
			var a, i, n = r("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(a || (a = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(i || (i = {}));
			const s = {
					[a.Loyalty]: n.a.First,
					[a.Achievement]: n.a.Second,
					[a.Cosmetic]: void 0
				},
				o = e => e === n.a.First ? a.Loyalty : e === n.a.Second ? a.Achievement : a.Cosmetic
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var a, i, n;
			r.d(t, "a", (function() {
					return i
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(a || (a = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(i || (i = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(n || (n = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, r) {
			"use strict";
			var a;

			function i(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			r.d(t, "a", (function() {
					return a
				})), r.d(t, "b", (function() {
					return i
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(a || (a = {}))
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var a = r("./src/config.ts");
			const i = (e, t) => `${a.a.assetPath}/img/memberships/paywall/${e.name.toLowerCase()}/${t}`
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var a, i = r("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(a || (a = {}));
			const n = {
				status: a.NotFetched
			};
			t.b = (e = n, t) => {
				switch (t.type) {
					case i.a:
						if (e.status === a.Fetched && e.data.stripe && e.data.stripe.sources) {
							const r = t.payload.cardId,
								{
									[r]: a,
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
						if (e.status === a.Fetched && e.data.braintree && e.data.braintree.sources) {
							const r = t.payload.sourceId,
								{
									[r]: a,
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
							error: t.payload.error, status: a.Failure
						};
					case i.c:
						return {
							data: t.payload, status: a.Fetched
						};
					case i.d:
						return {
							status: a.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var a, i = r("./src/lib/constants/specialMembership.ts"),
				n = r("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				s = r("./src/reddit/helpers/economics/sortBadges.ts"),
				o = r("./src/reddit/models/Badge/index.ts"),
				d = r("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(a || (a = {}));
			const c = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, r, a) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(i => {
						let n;
						(n = e.placement ? e.placement === o.a.First ? a[d.a.Loyalty][i] : a[d.a.Achievement][i] : l(e) ? a[d.a.Cosmetic][d.c.MyBadges][i] : a[d.a.Cosmetic][d.c.Gallery][i]) && (l(e) ? r.has(e.id) && n.unlocked.push(e) : t.has(e.id) || n.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const r = parseInt(e.price || "0"),
						a = parseInt(t.price || "0");
					return r === a ? Object(s.b)(e, t) : r - a
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === i.a).map(m).sort((e, r) => {
					const a = t[e.id],
						i = t[r.id];
					return Object(s.b)(a, i)
				})
			}

			function b(e) {
				const t = {
					[d.a.Loyalty]: {},
					[d.a.Achievement]: {},
					[d.a.Cosmetic]: {
						[d.c.Gallery]: {},
						[d.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(r => {
					const a = e.collections[r],
						i = {
							description: a.description,
							highlight: a.extra && a.extra.style && a.extra.style.color,
							id: a.id,
							locked: [],
							title: a.title,
							unlocked: []
						};
					t[d.a.Loyalty][r] = {
						...i,
						locked: [],
						unlocked: []
					}, t[d.a.Achievement][r] = {
						...i,
						locked: [],
						unlocked: []
					}, t[d.a.Cosmetic][d.c.Gallery][r] = {
						...i,
						locked: [],
						unlocked: []
					}, t[d.a.Cosmetic][d.c.MyBadges][r] = {
						...i,
						locked: [],
						unlocked: []
					}
				});
				const r = new Set;
				e.userOwnedBadges.forEach(t => {
					const a = e.badges[t];
					a && r.add(a.type)
				});
				const a = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), r, a, t), u(Object.keys(e.products).map(t => e.products[t]), r, a, t), {
					collections: {
						[d.a.Loyalty]: p(t[d.a.Loyalty], e.collections),
						[d.a.Achievement]: p(t[d.a.Achievement], e.collections),
						[d.a.Cosmetic]: {
							[d.c.Gallery]: p(t[d.a.Cosmetic][d.c.Gallery], e.collections),
							[d.c.MyBadges]: p(t[d.a.Cosmetic][d.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = (e = c, t) => {
				switch (t.type) {
					case n.a: {
						const {
							subredditId: r
						} = t.payload, i = e[r];
						return i && i.status === a.Fetched ? {
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
					case n.h: {
						const {
							subredditId: r
						} = t.payload, i = e[r];
						return i && i.status === a.Fetched ? {
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
					case n.i: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: {
								raw: r,
								data: b(r),
								status: a.Fetched
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
			var a = r("./node_modules/redux/es/redux.js"),
				i = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/economics/claims/constants.ts")),
				n = r("./src/reddit/actions/economics/me/constants.ts");
			const s = {};
			var o = (e = s, t) => {
					switch (t.type) {
						case n.a: {
							const r = t.payload.claimPoints || {},
								a = Object.keys(r).reduce((t, a) => (t[a] = {
									...e[a],
									availableClaims: r[a]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var r;
								(null === (r = e[t]) || void 0 === r ? void 0 : r.isClaiming) && (a[t] = a[t] || {
									availableClaims: []
								}, a[t].isClaiming = !0)
							}), a
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
				d = r("./src/reddit/actions/governance/constants.ts");
			const c = {};
			var l = (e = c, t) => {
				switch (t.type) {
					case d.n: {
						const {
							subredditId: r,
							wallets: a
						} = t.payload, i = Object.keys(a).reduce((t, i) => {
							return {
								...t,
								[i]: {
									...e[i] || {},
									[r]: a[i]
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
			t.a = Object(a.c)({
				claims: o,
				publicWallets: l
			})
		},
		"./src/reddit/selectors/crypto/wallet.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			}));
			var a = r("./src/lib/initializeClient/installReducer.ts"),
				i = r("./src/reddit/reducers/features/crypto/index.ts");
			Object(a.a)({
				features: {
					crypto: i.a
				}
			});
			const n = (e, t) => {
					var r;
					return t && (null === (r = e.user.wallets[t.subredditId]) || void 0 === r ? void 0 : r.latest)
				},
				s = (e, t) => {
					var r;
					return null === (r = n(e, t)) || void 0 === r ? void 0 : r.publicAddress
				},
				o = (e, t) => {
					var r, a, i, n;
					return null === (n = null === (i = null === (a = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === a ? void 0 : a.publicWallets) || void 0 === i ? void 0 : i[t.userId]) || void 0 === n ? void 0 : n[t.subredditId]
				}
		},
		"./src/reddit/selectors/economics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return f
			})), r.d(t, "n", (function() {
				return h
			})), r.d(t, "a", (function() {
				return g
			})), r.d(t, "v", (function() {
				return y
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "p", (function() {
				return v
			})), r.d(t, "h", (function() {
				return E
			})), r.d(t, "x", (function() {
				return S
			})), r.d(t, "k", (function() {
				return O
			})), r.d(t, "m", (function() {
				return w
			})), r.d(t, "e", (function() {
				return P
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "i", (function() {
				return I
			})), r.d(t, "o", (function() {
				return N
			})), r.d(t, "j", (function() {
				return k
			})), r.d(t, "q", (function() {
				return T
			})), r.d(t, "w", (function() {
				return M
			})), r.d(t, "s", (function() {
				return B
			})), r.d(t, "t", (function() {
				return D
			})), r.d(t, "b", (function() {
				return L
			})), r.d(t, "u", (function() {
				return F
			})), r.d(t, "r", (function() {
				return R
			})), r.d(t, "g", (function() {
				return G
			})), r.d(t, "l", (function() {
				return V
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = r("./src/reddit/featureFlags/index.ts"),
				i = r("./src/reddit/helpers/economics/sortBadges.ts"),
				n = r("./src/reddit/helpers/richTextJson/index.ts"),
				s = r("./src/reddit/models/Badge/index.ts"),
				o = r("./src/reddit/models/Badge/managementPage.ts"),
				d = r("./src/reddit/models/Gold/Powerups/index.ts"),
				c = r("./src/reddit/models/Payments/index.ts"),
				l = r("./src/reddit/models/Product/index.ts"),
				u = r("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				m = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				p = r("./src/reddit/selectors/commentSelector.ts"),
				b = r("./src/reddit/selectors/gold/powerups.ts");
			const f = (e, t) => {
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
				h = (e, t) => {
					const r = f(e, t);
					return r && r.endsAt || null
				};
			var g;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(g || (g = {}));
			const y = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === m.a.Fetched) {
						const r = h(e, t),
							a = Date.now();
						return r && a < r ? g.Subscribed : g.NotSubscribed
					}
					return g.DontKnow
				},
				_ = (e, t) => {
					const r = e.user.account,
						a = e.economics.subredditPremium[t];
					if (r && a && a.status === m.a.Fetched) {
						const a = ((e.users.appliedBadges[r.id] || {})[t] || []).map(t => e.badges.models[t]).filter(Boolean);
						if (a) return {
							[o.a.Loyalty]: a.find(e => e.placement === s.a.First),
							[o.a.Achievement]: a.find(e => e.placement === s.a.Second),
							[o.a.Cosmetic]: a.find(e => !e.placement)
						}
					}
					return {
						[o.a.Loyalty]: void 0,
						[o.a.Achievement]: void 0,
						[o.a.Cosmetic]: void 0
					}
				},
				v = (e, t, r) => {
					if (!a.d.spBadges(e)) return [];
					const n = (e.users.appliedBadges[r] || {})[t] || [];
					return Object(i.a)(n.map(t => e.badges.models[t]).filter(Boolean))
				},
				E = (e, t) => {
					const r = e.economics.subredditPremium[t.subredditId];
					if (r && r.status === m.a.Fetched) {
						const e = r.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function S(e, t) {
				const r = (e.economics.me.data.specialMemberships || {})[t];
				return !!(r && r.settings && r.settings.optOut)
			}

			function O(e, t) {
				const {
					badge: r,
					subredditId: a
				} = t, i = e.user.account ? e.user.account.id : void 0;
				if (Object(s.e)(r) && r.userId === i) return r;
				const n = e.badges.models,
					o = e.user.ownedBadges[a] || {},
					d = Object(s.e)(r) ? r.type : r.id;
				return Object.keys(o).map(e => n[e]).find(e => e && e.type === d)
			}

			function w(e, t, r, a) {
				const i = e.economics.subredditPremium[t];
				if (i && i.status === m.a.Fetched) {
					if (r === o.a.Loyalty || r === o.a.Achievement) return i.data.collections[r];
					if (r === o.a.Cosmetic && a) return i.data.collections[r][a]
				}
				return []
			}

			function P(e, t) {
				const r = w(e, t, o.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : []
			}

			function x(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === m.a.Fetched) {
					const e = r.data.collections[o.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(s.f)
				}
				return []
			}

			function I(e, t) {
				return w(e, t, o.a.Cosmetic, o.c.Gallery).some(e => e.locked.some(e => Object(s.f)(e) || !!e.price))
			}
			const N = e => {
				const t = [],
					r = e.economics.paymentSystems;
				if (r.status === u.a.Fetched && r.data.stripe && r.data.stripe.sources) {
					const e = r.data.stripe.sources;
					for (const r in e) {
						const a = e[r];
						t.push({
							display: `${a.brand} •••• ${a.last4}`,
							id: r,
							type: c.a.SavedStripe
						})
					}
				}
				if (r.status === u.a.Fetched && r.data.braintree && r.data.braintree.sources) {
					const e = r.data.braintree.sources;
					for (const r in e) {
						const a = e[r];
						"PayPal" === a.brand && t.push({
							display: "PayPal",
							id: a.id,
							type: c.a.SavedPayPal
						})
					}
				}
				return t
			};
			var j;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(j || (j = {}));
			const C = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				k = (e, t) => Object.values(e.products.models).filter(e => e.type === l.a.Membership && t && e.subredditId === t),
				A = (e, t) => {
					if (!t) return {};
					const r = C.prices;
					k(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const a = f(e, t);
					return a && a.price && a.currency && (r[a.currency] = a.price), r
				},
				T = (e, t) => {
					const r = e.subreddits.gov.meta[t || ""],
						a = r && r.extra && r.extra.nomenclature || C;
					return {
						prices: A(e, t),
						member: a.member || C.member,
						memberPlural: a.memberPlural || C.memberPlural,
						memberAlt: a.memberAlt || C.memberAlt,
						memberAltPlural: a.memberAltPlural || C.memberAltPlural,
						membership: a.membership || C.membership,
						membershipAlt: a.membershipAlt || C.membershipAlt
					}
				},
				M = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === u.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				B = (e, t) => {
					const r = e.user.ownedBadges[t] || {};
					return !!Object.keys(r).length
				},
				D = e => {
					const t = e.economics.paymentSystems;
					return t.status === u.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				L = (e, {
					subredditId: t
				}) => {
					if (!t) return;
					return e.economics.emotes[t]
				},
				F = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				R = (e, t, r) => {
					const i = "replyToPost" !== r && Object(p.a)(e, {
						commentId: r
					});
					if (!!i && Object(n.a)(i)) return !0;
					if (t && Object(b.m)(e, {
							subredditId: t,
							benefit: d.a.CommentsWithGifs
						})) return !0;
					const s = a.d.spGiphy(e),
						o = F(e, t);
					return s && o
				},
				G = (e, t, r) => {
					if (t) {
						const a = e.economics.banners.dismissedBanners[t];
						if (a && a.data) return !!a.data[r]
					}
				},
				V = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/products.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return n
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = r("./src/reddit/models/Product/index.ts");
			const i = (e, t) => {
					const r = e.products.models[t];
					if (r && r.type === a.a.Badge) return r
				},
				n = (e, {
					productId: t
				}) => {
					const r = e.products.models[t];
					if (r) {
						const a = r.subredditId,
							i = Object.keys(e.user.ownedBadges[a] || {}),
							n = e.badges.models,
							s = Date.now();
						let o = !1;
						return i.forEach(e => {
							const r = n[e];
							r && r.type === t && r.endsAt > s && (o = !0)
						}), o
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditPremiumBadgeHovercardTooltip.df96569a1785e46816e0.js.map