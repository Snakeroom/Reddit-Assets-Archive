// https://www.redditstatic.com/desktop2x/vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a.375fa8e474afa92c8ccc.js
// Retrieved at 5/29/2020, 11:10:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a"], {
		"./node_modules/react-motion/lib/Motion.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0;
			var o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				},
				r = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var o = t[n];
							o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
						}
					}
					return function(t, n, o) {
						return n && e(t.prototype, n), o && e(t, o), t
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
				c = a(n("./node_modules/react-motion/node_modules/raf/index.js")),
				d = a(n("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				f = a(n("./node_modules/react/index.js")),
				p = a(n("./node_modules/react-motion/node_modules/prop-types/index.js")),
				m = 1e3 / 60,
				y = function(e) {
					function t(n) {
						var r = this;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), e.call(this, n), this.wasAnimating = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyle = null, this.clearUnreadPropStyle = function(e) {
							var t = !1,
								n = r.state,
								a = n.currentStyle,
								l = n.currentVelocity,
								i = n.lastIdealStyle,
								s = n.lastIdealVelocity;
							for (var u in e)
								if (Object.prototype.hasOwnProperty.call(e, u)) {
									var c = e[u];
									"number" == typeof c && (t || (t = !0, a = o({}, a), l = o({}, l), i = o({}, i), s = o({}, s)), a[u] = c, l[u] = 0, i[u] = c, s[u] = 0)
								} t && r.setState({
								currentStyle: a,
								currentVelocity: l,
								lastIdealStyle: i,
								lastIdealVelocity: s
							})
						}, this.startAnimationIfNecessary = function() {
							r.animationID = c.default((function(e) {
								var t = r.props.style;
								if (d.default(r.state.currentStyle, t, r.state.currentVelocity)) return r.wasAnimating && r.props.onRest && r.props.onRest(), r.animationID = null, r.wasAnimating = !1, void(r.accumulatedTime = 0);
								r.wasAnimating = !0;
								var n = e || u.default(),
									o = n - r.prevTime;
								if (r.prevTime = n, r.accumulatedTime = r.accumulatedTime + o, r.accumulatedTime > 10 * m && (r.accumulatedTime = 0), 0 === r.accumulatedTime) return r.animationID = null, void r.startAnimationIfNecessary();
								var a = (r.accumulatedTime - Math.floor(r.accumulatedTime / m) * m) / m,
									l = Math.floor(r.accumulatedTime / m),
									i = {},
									c = {},
									f = {},
									p = {};
								for (var y in t)
									if (Object.prototype.hasOwnProperty.call(t, y)) {
										var h = t[y];
										if ("number" == typeof h) f[y] = h, p[y] = 0, i[y] = h, c[y] = 0;
										else {
											for (var v = r.state.lastIdealStyle[y], b = r.state.lastIdealVelocity[y], _ = 0; _ < l; _++) {
												var S = s.default(m / 1e3, v, b, h.val, h.stiffness, h.damping, h.precision);
												v = S[0], b = S[1]
											}
											var j = s.default(m / 1e3, v, b, h.val, h.stiffness, h.damping, h.precision),
												g = j[0],
												w = j[1];
											f[y] = v + (g - v) * a, p[y] = b + (w - b) * a, i[y] = v, c[y] = b
										}
									} r.animationID = null, r.accumulatedTime -= l * m, r.setState({
									currentStyle: f,
									currentVelocity: p,
									lastIdealStyle: i,
									lastIdealVelocity: c
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
							n = e.style,
							o = t || i.default(n),
							r = l.default(o);
						return {
							currentStyle: o,
							currentVelocity: r,
							lastIdealStyle: o,
							lastIdealVelocity: r
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
			var o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				},
				r = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var o = t[n];
							o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
						}
					}
					return function(t, n, o) {
						return n && e(t.prototype, n), o && e(t, o), t
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
				c = a(n("./node_modules/react-motion/node_modules/raf/index.js")),
				d = a(n("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				f = a(n("./node_modules/react/index.js")),
				p = a(n("./node_modules/react-motion/node_modules/prop-types/index.js")),
				m = 1e3 / 60;
			var y = function(e) {
				function t(n) {
					var r = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, n), this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = r.state, n = t.currentStyles, a = t.currentVelocities, l = t.lastIdealStyles, i = t.lastIdealVelocities, s = !1, u = 0; u < e.length; u++) {
							var c = e[u],
								d = !1;
							for (var f in c)
								if (Object.prototype.hasOwnProperty.call(c, f)) {
									var p = c[f];
									"number" == typeof p && (d || (d = !0, s = !0, n[u] = o({}, n[u]), a[u] = o({}, a[u]), l[u] = o({}, l[u]), i[u] = o({}, i[u])), n[u][f] = p, a[u][f] = 0, l[u][f] = p, i[u][f] = 0)
								}
						}
						s && r.setState({
							currentStyles: n,
							currentVelocities: a,
							lastIdealStyles: l,
							lastIdealVelocities: i
						})
					}, this.startAnimationIfNecessary = function() {
						r.animationID = c.default((function(e) {
							var t = r.props.styles(r.state.lastIdealStyles);
							if (function(e, t, n) {
									for (var o = 0; o < e.length; o++)
										if (!d.default(e[o], t[o], n[o])) return !1;
									return !0
								}(r.state.currentStyles, t, r.state.currentVelocities)) return r.animationID = null, void(r.accumulatedTime = 0);
							var n = e || u.default(),
								o = n - r.prevTime;
							if (r.prevTime = n, r.accumulatedTime = r.accumulatedTime + o, r.accumulatedTime > 10 * m && (r.accumulatedTime = 0), 0 === r.accumulatedTime) return r.animationID = null, void r.startAnimationIfNecessary();
							for (var a = (r.accumulatedTime - Math.floor(r.accumulatedTime / m) * m) / m, l = Math.floor(r.accumulatedTime / m), i = [], c = [], f = [], p = [], y = 0; y < t.length; y++) {
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
											for (var w = r.state.lastIdealStyles[y][j], T = r.state.lastIdealVelocities[y][j], I = 0; I < l; I++) {
												var O = s.default(m / 1e3, w, T, g.val, g.stiffness, g.damping, g.precision);
												w = O[0], T = O[1]
											}
											var P = s.default(m / 1e3, w, T, g.val, g.stiffness, g.damping, g.precision),
												k = P[0],
												D = P[1];
											v[j] = w + (k - w) * a, b[j] = T + (D - T) * a, _[j] = w, S[j] = T
										}
									} f[y] = v, p[y] = b, i[y] = _, c[y] = S
							}
							r.animationID = null, r.accumulatedTime -= l * m, r.setState({
								currentStyles: f,
								currentVelocities: p,
								lastIdealStyles: i,
								lastIdealVelocities: c
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
						n = e.styles,
						o = t || n().map(i.default),
						r = o.map((function(e) {
							return l.default(e)
						}));
					return {
						currentStyles: o,
						currentVelocities: r,
						lastIdealStyles: o,
						lastIdealVelocities: r
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
			var o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
					}
					return e
				},
				r = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var o = t[n];
							o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
						}
					}
					return function(t, n, o) {
						return n && e(t.prototype, n), o && e(t, o), t
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
				d = a(n("./node_modules/react-motion/node_modules/raf/index.js")),
				f = a(n("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				p = a(n("./node_modules/react/index.js")),
				m = a(n("./node_modules/react-motion/node_modules/prop-types/index.js")),
				y = 1e3 / 60;

			function h(e, t, n) {
				var o = t;
				return null == o ? e.map((function(e, t) {
					return {
						key: e.key,
						data: e.data,
						style: n[t]
					}
				})) : e.map((function(e, t) {
					for (var r = 0; r < o.length; r++)
						if (o[r].key === e.key) return {
							key: o[r].key,
							data: o[r].data,
							style: n[t]
						};
					return {
						key: e.key,
						data: e.data,
						style: n[t]
					}
				}))
			}

			function v(e, t, n, o, r, a, i, s, c) {
				for (var d = u.default(o, r, (function(e, o) {
						var r = t(o);
						return null == r ? (n({
							key: o.key,
							data: o.data
						}), null) : f.default(a[e], r, i[e]) ? (n({
							key: o.key,
							data: o.data
						}), null) : {
							key: o.key,
							data: o.data,
							style: r
						}
					})), p = [], m = [], y = [], h = [], v = 0; v < d.length; v++) {
					for (var b = d[v], _ = null, S = 0; S < o.length; S++)
						if (o[S].key === b.key) {
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
					var r = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, n), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = v(r.props.willEnter, r.props.willLeave, r.props.didLeave, r.state.mergedPropsStyles, e, r.state.currentStyles, r.state.currentVelocities, r.state.lastIdealStyles, r.state.lastIdealVelocities), n = t[0], a = t[1], l = t[2], i = t[3], s = t[4], u = 0; u < e.length; u++) {
							var c = e[u].style,
								d = !1;
							for (var f in c)
								if (Object.prototype.hasOwnProperty.call(c, f)) {
									var p = c[f];
									"number" == typeof p && (d || (d = !0, a[u] = o({}, a[u]), l[u] = o({}, l[u]), i[u] = o({}, i[u]), s[u] = o({}, s[u]), n[u] = {
										key: n[u].key,
										data: n[u].data,
										style: o({}, n[u].style)
									}), a[u][f] = p, l[u][f] = 0, i[u][f] = p, s[u][f] = 0, n[u].style[f] = p)
								}
						}
						r.setState({
							currentStyles: a,
							currentVelocities: l,
							mergedPropsStyles: n,
							lastIdealStyles: i,
							lastIdealVelocities: s
						})
					}, this.startAnimationIfNecessary = function() {
						r.unmounting || (r.animationID = d.default((function(e) {
							if (!r.unmounting) {
								var t = r.props.styles,
									n = "function" == typeof t ? t(h(r.state.mergedPropsStyles, r.unreadPropStyles, r.state.lastIdealStyles)) : t;
								if (function(e, t, n, o) {
										if (o.length !== t.length) return !1;
										for (var r = 0; r < o.length; r++)
											if (o[r].key !== t[r].key) return !1;
										for (r = 0; r < o.length; r++)
											if (!f.default(e[r], t[r].style, n[r])) return !1;
										return !0
									}(r.state.currentStyles, n, r.state.currentVelocities, r.state.mergedPropsStyles)) return r.animationID = null, void(r.accumulatedTime = 0);
								var o = e || c.default(),
									a = o - r.prevTime;
								if (r.prevTime = o, r.accumulatedTime = r.accumulatedTime + a, r.accumulatedTime > 10 * y && (r.accumulatedTime = 0), 0 === r.accumulatedTime) return r.animationID = null, void r.startAnimationIfNecessary();
								for (var l = (r.accumulatedTime - Math.floor(r.accumulatedTime / y) * y) / y, i = Math.floor(r.accumulatedTime / y), u = v(r.props.willEnter, r.props.willLeave, r.props.didLeave, r.state.mergedPropsStyles, n, r.state.currentStyles, r.state.currentVelocities, r.state.lastIdealStyles, r.state.lastIdealVelocities), d = u[0], p = u[1], m = u[2], b = u[3], _ = u[4], S = 0; S < d.length; S++) {
									var j = d[S].style,
										g = {},
										w = {},
										T = {},
										I = {};
									for (var O in j)
										if (Object.prototype.hasOwnProperty.call(j, O)) {
											var P = j[O];
											if ("number" == typeof P) g[O] = P, w[O] = 0, T[O] = P, I[O] = 0;
											else {
												for (var k = b[S][O], D = _[S][O], x = 0; x < i; x++) {
													var M = s.default(y / 1e3, k, D, P.val, P.stiffness, P.damping, P.precision);
													k = M[0], D = M[1]
												}
												var A = s.default(y / 1e3, k, D, P.val, P.stiffness, P.damping, P.precision),
													V = A[0],
													R = A[1];
												g[O] = k + (V - k) * l, w[O] = D + (R - D) * l, T[O] = k, I[O] = D
											}
										} b[S] = T, _[S] = I, p[S] = g, m[S] = w
								}
								r.animationID = null, r.accumulatedTime -= i * y, r.setState({
									currentStyles: p,
									currentVelocities: m,
									lastIdealStyles: b,
									lastIdealVelocities: _,
									mergedPropsStyles: d
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
						o = e.willEnter,
						r = e.willLeave,
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
						f = v(o, r, a, u, s, c, d, c, d),
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
				for (var o = {}, r = 0; r < e.length; r++) o[e[r].key] = r;
				var a = {};
				for (r = 0; r < t.length; r++) a[t[r].key] = r;
				var l = [];
				for (r = 0; r < t.length; r++) l[r] = t[r];
				for (r = 0; r < e.length; r++)
					if (!Object.prototype.hasOwnProperty.call(a, e[r].key)) {
						var i = n(r, e[r]);
						null != i && l.push(i)
					} return l.sort((function(e, n) {
					var r = a[e.key],
						l = a[n.key],
						i = o[e.key],
						s = o[n.key];
					if (null != r && null != l) return a[e.key] - a[n.key];
					if (null != i && null != s) return o[e.key] - o[n.key];
					if (null != r) {
						for (var u = 0; u < t.length; u++) {
							var c = t[u].key;
							if (Object.prototype.hasOwnProperty.call(o, c)) {
								if (r < a[c] && s > o[c]) return -1;
								if (r > a[c] && s < o[c]) return 1
							}
						}
						return 1
					}
					for (u = 0; u < t.length; u++) {
						c = t[u].key;
						if (Object.prototype.hasOwnProperty.call(o, c)) {
							if (l < a[c] && i > o[c]) return 1;
							if (l > a[c] && i < o[c]) return -1
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

			function o(e) {
				return e && e.__esModule ? e.default : e
			}
			t.__esModule = !0;
			var r = n("./node_modules/react-motion/lib/Motion.js");
			t.Motion = o(r);
			var a = n("./node_modules/react-motion/lib/StaggeredMotion.js");
			t.StaggeredMotion = o(a);
			var l = n("./node_modules/react-motion/lib/TransitionMotion.js");
			t.TransitionMotion = o(l);
			var i = n("./node_modules/react-motion/lib/spring.js");
			t.spring = o(i);
			var s = n("./node_modules/react-motion/lib/presets.js");
			t.presets = o(s);
			var u = n("./node_modules/react-motion/lib/stripStyle.js");
			t.stripStyle = o(u);
			var c = n("./node_modules/react-motion/lib/reorderKeys.js");
			t.reorderKeys = o(c)
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
				for (var o in t)
					if (Object.prototype.hasOwnProperty.call(t, o)) {
						if (0 !== n[o]) return !1;
						var r = "number" == typeof t[o] ? t[o] : t[o].val;
						if (e[o] !== r) return !1
					} return !0
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/spring.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0;
			var o = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
				}
				return e
			};
			t.default = function(e, t) {
				return o({}, i, t, {
					val: e
				})
			};
			var r, a = n("./node_modules/react-motion/lib/presets.js"),
				l = (r = a) && r.__esModule ? r : {
					default: r
				},
				i = o({}, l.default.noWobble, {
					precision: .01
				});
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stepper.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, n, r, a, l, i) {
				var s = n + (-a * (t - r) + -l * n) * e,
					u = t + s * e;
				if (Math.abs(s) < i && Math.abs(u - r) < i) return o[0] = r, o[1] = 0, o;
				return o[0] = u, o[1] = s, o
			};
			var o = [0, 0];
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
					var n, o, r;
					"undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
						return performance.now()
					} : null != t && t.hrtime ? (e.exports = function() {
						return (n() - r) / 1e6
					}, o = t.hrtime, r = (n = function() {
						var e;
						return 1e9 * (e = o())[0] + e[1]
					})()) : Date.now ? (e.exports = function() {
						return Date.now() - r
					}, r = Date.now()) : (e.exports = function() {
						return (new Date).getTime() - r
					}, r = (new Date).getTime())
				}).call(this)
			}).call(this, n("./node_modules/process/browser.js"))
		},
		"./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var o = n("./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}
			e.exports = function() {
				function e(e, t, n, r, a, l) {
					if (l !== o) {
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
				return n.checkPropTypes = r, n.PropTypes = n, n
			}
		},
		"./node_modules/react-motion/node_modules/prop-types/index.js": function(e, t, n) {
			e.exports = n("./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, n) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/react-motion/node_modules/raf/index.js": function(e, t, n) {
			(function(t) {
				for (var o = n("./node_modules/react-motion/node_modules/raf/node_modules/performance-now/lib/performance-now.js"), r = "undefined" == typeof window ? t : window, a = ["moz", "webkit"], l = "AnimationFrame", i = r["request" + l], s = r["cancel" + l] || r["cancelRequest" + l], u = 0; !i && u < a.length; u++) i = r[a[u] + "Request" + l], s = r[a[u] + "Cancel" + l] || r[a[u] + "CancelRequest" + l];
				if (!i || !s) {
					var c = 0,
						d = 0,
						f = [];
					i = function(e) {
						if (0 === f.length) {
							var t = o(),
								n = Math.max(0, 1e3 / 60 - (t - c));
							c = n + t, setTimeout((function() {
								var e = f.slice(0);
								f.length = 0;
								for (var t = 0; t < e.length; t++)
									if (!e[t].cancelled) try {
										e[t].callback(c)
									} catch (n) {
										setTimeout((function() {
											throw n
										}), 0)
									}
							}), Math.round(n))
						}
						return f.push({
							handle: ++d,
							callback: e,
							cancelled: !1
						}), d
					}, s = function(e) {
						for (var t = 0; t < f.length; t++) f[t].handle === e && (f[t].cancelled = !0)
					}
				}
				e.exports = function(e) {
					return i.call(r, e)
				}, e.exports.cancel = function() {
					s.apply(r, arguments)
				}, e.exports.polyfill = function(e) {
					e || (e = r), e.requestAnimationFrame = i, e.cancelAnimationFrame = s
				}
			}).call(this, n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/react-motion/node_modules/raf/node_modules/performance-now/lib/performance-now.js": function(e, t, n) {
			(function(t) {
				(function() {
					var n, o, r, a, l, i;
					"undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
						return performance.now()
					} : null != t && t.hrtime ? (e.exports = function() {
						return (n() - l) / 1e6
					}, o = t.hrtime, a = (n = function() {
						var e;
						return 1e9 * (e = o())[0] + e[1]
					})(), i = 1e9 * t.uptime(), l = a - i) : Date.now ? (e.exports = function() {
						return Date.now() - r
					}, r = Date.now()) : (e.exports = function() {
						return (new Date).getTime() - r
					}, r = (new Date).getTime())
				}).call(this)
			}).call(this, n("./node_modules/process/browser.js"))
		}
	}
]);
//# sourceMappingURL=vendors~EconomicsEntryPointsPostFlatlistSupportCTA~InFeedChaining~Poll~PostCreation~Reddit~Subreddit~2c16ee4a.375fa8e474afa92c8ccc.js.map