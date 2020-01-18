// https://www.redditstatic.com/desktop2x/vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a.74b485ead3fd83ea4fe9.js
// Retrieved at 1/17/2020, 10:30:26 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"], {
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
			var l = a(n("./node_modules/react-motion/lib/mapToZero.js")),
				i = a(n("./node_modules/react-motion/lib/stripStyle.js")),
				s = a(n("./node_modules/react-motion/lib/stepper.js")),
				u = a(n("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				c = a(n("./node_modules/raf/index.js")),
				d = a(n("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				f = a(n("./node_modules/react/index.js")),
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
								l = n.currentVelocity,
								i = n.lastIdealStyle,
								s = n.lastIdealVelocity;
							for (var u in e)
								if (Object.prototype.hasOwnProperty.call(e, u)) {
									var c = e[u];
									"number" == typeof c && (t || (t = !0, a = r({}, a), l = r({}, l), i = r({}, i), s = r({}, s)), a[u] = c, l[u] = 0, i[u] = c, s[u] = 0)
								} t && o.setState({
								currentStyle: a,
								currentVelocity: l,
								lastIdealStyle: i,
								lastIdealVelocity: s
							})
						}, this.startAnimationIfNecessary = function() {
							o.animationID = c.default((function(e) {
								var t = o.props.style;
								if (d.default(o.state.currentStyle, t, o.state.currentVelocity)) return o.wasAnimating && o.props.onRest && o.props.onRest(), o.animationID = null, o.wasAnimating = !1, void(o.accumulatedTime = 0);
								o.wasAnimating = !0;
								var n = e || u.default(),
									r = n - o.prevTime;
								if (o.prevTime = n, o.accumulatedTime = o.accumulatedTime + r, o.accumulatedTime > 10 * m && (o.accumulatedTime = 0), 0 === o.accumulatedTime) return o.animationID = null, void o.startAnimationIfNecessary();
								var a = (o.accumulatedTime - Math.floor(o.accumulatedTime / m) * m) / m,
									l = Math.floor(o.accumulatedTime / m),
									i = {},
									c = {},
									f = {},
									p = {};
								for (var y in t)
									if (Object.prototype.hasOwnProperty.call(t, y)) {
										var h = t[y];
										if ("number" == typeof h) f[y] = h, p[y] = 0, i[y] = h, c[y] = 0;
										else {
											for (var v = o.state.lastIdealStyle[y], b = o.state.lastIdealVelocity[y], _ = 0; _ < l; _++) {
												var S = s.default(m / 1e3, v, b, h.val, h.stiffness, h.damping, h.precision);
												v = S[0], b = S[1]
											}
											var j = s.default(m / 1e3, v, b, h.val, h.stiffness, h.damping, h.precision),
												g = j[0],
												T = j[1];
											f[y] = v + (g - v) * a, p[y] = b + (T - b) * a, i[y] = v, c[y] = b
										}
									} o.animationID = null, o.accumulatedTime -= l * m, o.setState({
									currentStyle: f,
									currentVelocity: p,
									lastIdealStyle: i,
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
							r = t || i.default(n),
							o = l.default(r);
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
						return e && f.default.Children.only(e)
					}, t
				}(f.default.Component);
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
			var l = a(n("./node_modules/react-motion/lib/mapToZero.js")),
				i = a(n("./node_modules/react-motion/lib/stripStyle.js")),
				s = a(n("./node_modules/react-motion/lib/stepper.js")),
				u = a(n("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				c = a(n("./node_modules/raf/index.js")),
				d = a(n("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				f = a(n("./node_modules/react/index.js")),
				p = a(n("./node_modules/react-motion/node_modules/prop-types/index.js")),
				m = 1e3 / 60;
			var y = function(e) {
				function t(n) {
					var o = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, n), this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = o.state, n = t.currentStyles, a = t.currentVelocities, l = t.lastIdealStyles, i = t.lastIdealVelocities, s = !1, u = 0; u < e.length; u++) {
							var c = e[u],
								d = !1;
							for (var f in c)
								if (Object.prototype.hasOwnProperty.call(c, f)) {
									var p = c[f];
									"number" == typeof p && (d || (d = !0, s = !0, n[u] = r({}, n[u]), a[u] = r({}, a[u]), l[u] = r({}, l[u]), i[u] = r({}, i[u])), n[u][f] = p, a[u][f] = 0, l[u][f] = p, i[u][f] = 0)
								}
						}
						s && o.setState({
							currentStyles: n,
							currentVelocities: a,
							lastIdealStyles: l,
							lastIdealVelocities: i
						})
					}, this.startAnimationIfNecessary = function() {
						o.animationID = c.default((function(e) {
							var t = o.props.styles(o.state.lastIdealStyles);
							if (function(e, t, n) {
									for (var r = 0; r < e.length; r++)
										if (!d.default(e[r], t[r], n[r])) return !1;
									return !0
								}(o.state.currentStyles, t, o.state.currentVelocities)) return o.animationID = null, void(o.accumulatedTime = 0);
							var n = e || u.default(),
								r = n - o.prevTime;
							if (o.prevTime = n, o.accumulatedTime = o.accumulatedTime + r, o.accumulatedTime > 10 * m && (o.accumulatedTime = 0), 0 === o.accumulatedTime) return o.animationID = null, void o.startAnimationIfNecessary();
							for (var a = (o.accumulatedTime - Math.floor(o.accumulatedTime / m) * m) / m, l = Math.floor(o.accumulatedTime / m), i = [], c = [], f = [], p = [], y = 0; y < t.length; y++) {
								var h = t[y],
									v = {},
									b = {},
									_ = {},
									S = {};
								for (var j in h)
									if (Object.prototype.hasOwnProperty.call(h, j)) {
										var g = h[j];
										if ("number" == typeof g) v[j] = g, b[j] = 0, _[j] = g, S[j] = 0;
										else {
											for (var T = o.state.lastIdealStyles[y][j], I = o.state.lastIdealVelocities[y][j], O = 0; O < l; O++) {
												var P = s.default(m / 1e3, T, I, g.val, g.stiffness, g.damping, g.precision);
												T = P[0], I = P[1]
											}
											var w = s.default(m / 1e3, T, I, g.val, g.stiffness, g.damping, g.precision),
												k = w[0],
												D = w[1];
											v[j] = T + (k - T) * a, b[j] = I + (D - I) * a, _[j] = T, S[j] = I
										}
									} f[y] = v, p[y] = b, i[y] = _, c[y] = S
							}
							o.animationID = null, o.accumulatedTime -= l * m, o.setState({
								currentStyles: f,
								currentVelocities: p,
								lastIdealStyles: i,
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
						r = t || n().map(i.default),
						o = r.map((function(e) {
							return l.default(e)
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
					return e && f.default.Children.only(e)
				}, t
			}(f.default.Component);
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
			var l = a(n("./node_modules/react-motion/lib/mapToZero.js")),
				i = a(n("./node_modules/react-motion/lib/stripStyle.js")),
				s = a(n("./node_modules/react-motion/lib/stepper.js")),
				u = a(n("./node_modules/react-motion/lib/mergeDiff.js")),
				c = a(n("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				d = a(n("./node_modules/raf/index.js")),
				f = a(n("./node_modules/react-motion/lib/shouldStopAnimation.js")),
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

			function v(e, t, n, r, o, a, i, s, c) {
				for (var d = u.default(r, o, (function(e, r) {
						var o = t(r);
						return null == o ? (n({
							key: r.key,
							data: r.data
						}), null) : f.default(a[e], o, i[e]) ? (n({
							key: r.key,
							data: r.data
						}), null) : {
							key: r.key,
							data: r.data,
							style: o
						}
					})), p = [], m = [], y = [], h = [], v = 0; v < d.length; v++) {
					for (var b = d[v], _ = null, S = 0; S < r.length; S++)
						if (r[S].key === b.key) {
							_ = S;
							break
						} if (null == _) {
						var j = e(b);
						p[v] = j, y[v] = j;
						var g = l.default(b.style);
						m[v] = g, h[v] = g
					} else p[v] = a[_], y[v] = s[_], m[v] = i[_], h[v] = c[_]
				}
				return [d, p, m, y, h]
			}
			var b = function(e) {
				function t(n) {
					var o = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, n), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = v(o.props.willEnter, o.props.willLeave, o.props.didLeave, o.state.mergedPropsStyles, e, o.state.currentStyles, o.state.currentVelocities, o.state.lastIdealStyles, o.state.lastIdealVelocities), n = t[0], a = t[1], l = t[2], i = t[3], s = t[4], u = 0; u < e.length; u++) {
							var c = e[u].style,
								d = !1;
							for (var f in c)
								if (Object.prototype.hasOwnProperty.call(c, f)) {
									var p = c[f];
									"number" == typeof p && (d || (d = !0, a[u] = r({}, a[u]), l[u] = r({}, l[u]), i[u] = r({}, i[u]), s[u] = r({}, s[u]), n[u] = {
										key: n[u].key,
										data: n[u].data,
										style: r({}, n[u].style)
									}), a[u][f] = p, l[u][f] = 0, i[u][f] = p, s[u][f] = 0, n[u].style[f] = p)
								}
						}
						o.setState({
							currentStyles: a,
							currentVelocities: l,
							mergedPropsStyles: n,
							lastIdealStyles: i,
							lastIdealVelocities: s
						})
					}, this.startAnimationIfNecessary = function() {
						o.unmounting || (o.animationID = d.default((function(e) {
							if (!o.unmounting) {
								var t = o.props.styles,
									n = "function" == typeof t ? t(h(o.state.mergedPropsStyles, o.unreadPropStyles, o.state.lastIdealStyles)) : t;
								if (function(e, t, n, r) {
										if (r.length !== t.length) return !1;
										for (var o = 0; o < r.length; o++)
											if (r[o].key !== t[o].key) return !1;
										for (o = 0; o < r.length; o++)
											if (!f.default(e[o], t[o].style, n[o])) return !1;
										return !0
									}(o.state.currentStyles, n, o.state.currentVelocities, o.state.mergedPropsStyles)) return o.animationID = null, void(o.accumulatedTime = 0);
								var r = e || c.default(),
									a = r - o.prevTime;
								if (o.prevTime = r, o.accumulatedTime = o.accumulatedTime + a, o.accumulatedTime > 10 * y && (o.accumulatedTime = 0), 0 === o.accumulatedTime) return o.animationID = null, void o.startAnimationIfNecessary();
								for (var l = (o.accumulatedTime - Math.floor(o.accumulatedTime / y) * y) / y, i = Math.floor(o.accumulatedTime / y), u = v(o.props.willEnter, o.props.willLeave, o.props.didLeave, o.state.mergedPropsStyles, n, o.state.currentStyles, o.state.currentVelocities, o.state.lastIdealStyles, o.state.lastIdealVelocities), d = u[0], p = u[1], m = u[2], b = u[3], _ = u[4], S = 0; S < d.length; S++) {
									var j = d[S].style,
										g = {},
										T = {},
										I = {},
										O = {};
									for (var P in j)
										if (Object.prototype.hasOwnProperty.call(j, P)) {
											var w = j[P];
											if ("number" == typeof w) g[P] = w, T[P] = 0, I[P] = w, O[P] = 0;
											else {
												for (var k = b[S][P], D = _[S][P], M = 0; M < i; M++) {
													var x = s.default(y / 1e3, k, D, w.val, w.stiffness, w.damping, w.precision);
													k = x[0], D = x[1]
												}
												var V = s.default(y / 1e3, k, D, w.val, w.stiffness, w.damping, w.precision),
													A = V[0],
													R = V[1];
												g[P] = k + (A - k) * l, T[P] = D + (R - D) * l, I[P] = k, O[P] = D
											}
										} b[S] = I, _[S] = O, p[S] = g, m[S] = T
								}
								o.animationID = null, o.accumulatedTime -= i * y, o.setState({
									currentStyles: p,
									currentVelocities: m,
									lastIdealStyles: b,
									lastIdealVelocities: _,
									mergedPropsStyles: d
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
						o = e.willLeave,
						a = e.didLeave,
						s = "function" == typeof n ? n(t) : n,
						u = void 0;
					u = null == t ? s : t.map((function(e) {
						for (var t = 0; t < s.length; t++)
							if (s[t].key === e.key) return s[t];
						return e
					}));
					var c = null == t ? s.map((function(e) {
							return i.default(e.style)
						})) : t.map((function(e) {
							return i.default(e.style)
						})),
						d = null == t ? s.map((function(e) {
							return l.default(e.style)
						})) : t.map((function(e) {
							return l.default(e.style)
						})),
						f = v(r, o, a, u, s, c, d, c, d),
						p = f[0];
					return {
						currentStyles: f[1],
						currentVelocities: f[2],
						lastIdealStyles: f[3],
						lastIdealVelocities: f[4],
						mergedPropsStyles: p
					}
				}, t.prototype.componentDidMount = function() {
					this.prevTime = c.default(), this.startAnimationIfNecessary()
				}, t.prototype.componentWillReceiveProps = function(e) {
					this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles);
					var t = e.styles;
					this.unreadPropStyles = "function" == typeof t ? t(h(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles)) : t, null == this.animationID && (this.prevTime = c.default(), this.startAnimationIfNecessary())
				}, t.prototype.componentWillUnmount = function() {
					this.unmounting = !0, null != this.animationID && (d.default.cancel(this.animationID), this.animationID = null)
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
				var l = [];
				for (o = 0; o < t.length; o++) l[o] = t[o];
				for (o = 0; o < e.length; o++)
					if (!Object.prototype.hasOwnProperty.call(a, e[o].key)) {
						var i = n(o, e[o]);
						null != i && l.push(i)
					} return l.sort((function(e, n) {
					var o = a[e.key],
						l = a[n.key],
						i = r[e.key],
						s = r[n.key];
					if (null != o && null != l) return a[e.key] - a[n.key];
					if (null != i && null != s) return r[e.key] - r[n.key];
					if (null != o) {
						for (var u = 0; u < t.length; u++) {
							var c = t[u].key;
							if (Object.prototype.hasOwnProperty.call(r, c)) {
								if (o < a[c] && s > r[c]) return -1;
								if (o > a[c] && s < r[c]) return 1
							}
						}
						return 1
					}
					for (u = 0; u < t.length; u++) {
						c = t[u].key;
						if (Object.prototype.hasOwnProperty.call(r, c)) {
							if (l < a[c] && i > r[c]) return 1;
							if (l > a[c] && i < r[c]) return -1
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
			var l = n("./node_modules/react-motion/lib/TransitionMotion.js");
			t.TransitionMotion = r(l);
			var i = n("./node_modules/react-motion/lib/spring.js");
			t.spring = r(i);
			var s = n("./node_modules/react-motion/lib/presets.js");
			t.presets = r(s);
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
				return r({}, i, t, {
					val: e
				})
			};
			var o, a = n("./node_modules/react-motion/lib/presets.js"),
				l = (o = a) && o.__esModule ? o : {
					default: o
				},
				i = r({}, l.default.noWobble, {
					precision: .01
				});
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stepper.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, n, o, a, l, i) {
				var s = n + (-a * (t - o) + -l * n) * e,
					u = t + s * e;
				if (Math.abs(s) < i && Math.abs(u - o) < i) return r[0] = o, r[1] = 0, r;
				return r[0] = u, r[1] = s, r
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
			e.exports = function() {
				function e(e, t, n, o, a, l) {
					if (l !== r) {
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
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t
				};
				return n.checkPropTypes = o, n.PropTypes = n, n
			}
		},
		"./node_modules/react-motion/node_modules/prop-types/index.js": function(e, t, n) {
			e.exports = n("./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, n) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		}
	}
]);
//# sourceMappingURL=vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a.74b485ead3fd83ea4fe9.js.map