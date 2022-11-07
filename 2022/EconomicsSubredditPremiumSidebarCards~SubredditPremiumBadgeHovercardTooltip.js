// https://www.redditstatic.com/desktop2x/EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip.68e85ad6e20ae912db80.js
// Retrieved at 11/7/2022, 1:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"], {
		"./node_modules/lodash/_arrayShuffle.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_copyArray.js"),
				i = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e) {
				return i(r(e))
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_shuffleSelf.js"),
				i = n("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return r(i(e))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var n = -1,
					i = e.length,
					s = i - 1;
				for (t = void 0 === t ? i : t; ++n < t;) {
					var a = r(n, s),
						o = e[a];
					e[a] = e[n], e[n] = o
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/flattenDeep.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseFlatten.js"),
				i = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? r(e, i) : []
			}
		},
		"./node_modules/lodash/shuffle.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayShuffle.js"),
				i = n("./node_modules/lodash/_baseShuffle.js"),
				s = n("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (s(e) ? r : i)(e)
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
				i = function() {
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

			function s(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var a = s(n("./node_modules/react-motion/lib/mapToZero.js")),
				o = s(n("./node_modules/react-motion/lib/stripStyle.js")),
				c = s(n("./node_modules/react-motion/lib/stepper.js")),
				d = s(n("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				l = s(n("./node_modules/raf/index.js")),
				u = s(n("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				m = s(n("./node_modules/react/index.js")),
				f = s(n("./node_modules/react-motion/node_modules/prop-types/index.js")),
				p = 1e3 / 60,
				b = function(e) {
					function t(n) {
						var i = this;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), e.call(this, n), this.wasAnimating = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyle = null, this.clearUnreadPropStyle = function(e) {
							var t = !1,
								n = i.state,
								s = n.currentStyle,
								a = n.currentVelocity,
								o = n.lastIdealStyle,
								c = n.lastIdealVelocity;
							for (var d in e)
								if (Object.prototype.hasOwnProperty.call(e, d)) {
									var l = e[d];
									"number" == typeof l && (t || (t = !0, s = r({}, s), a = r({}, a), o = r({}, o), c = r({}, c)), s[d] = l, a[d] = 0, o[d] = l, c[d] = 0)
								} t && i.setState({
								currentStyle: s,
								currentVelocity: a,
								lastIdealStyle: o,
								lastIdealVelocity: c
							})
						}, this.startAnimationIfNecessary = function() {
							i.animationID = l.default((function(e) {
								var t = i.props.style;
								if (u.default(i.state.currentStyle, t, i.state.currentVelocity)) return i.wasAnimating && i.props.onRest && i.props.onRest(), i.animationID = null, i.wasAnimating = !1, void(i.accumulatedTime = 0);
								i.wasAnimating = !0;
								var n = e || d.default(),
									r = n - i.prevTime;
								if (i.prevTime = n, i.accumulatedTime = i.accumulatedTime + r, i.accumulatedTime > 10 * p && (i.accumulatedTime = 0), 0 === i.accumulatedTime) return i.animationID = null, void i.startAnimationIfNecessary();
								var s = (i.accumulatedTime - Math.floor(i.accumulatedTime / p) * p) / p,
									a = Math.floor(i.accumulatedTime / p),
									o = {},
									l = {},
									m = {},
									f = {};
								for (var b in t)
									if (Object.prototype.hasOwnProperty.call(t, b)) {
										var h = t[b];
										if ("number" == typeof h) m[b] = h, f[b] = 0, o[b] = h, l[b] = 0;
										else {
											for (var y = i.state.lastIdealStyle[b], _ = i.state.lastIdealVelocity[b], g = 0; g < a; g++) {
												var S = c.default(p / 1e3, y, _, h.val, h.stiffness, h.damping, h.precision);
												y = S[0], _ = S[1]
											}
											var v = c.default(p / 1e3, y, _, h.val, h.stiffness, h.damping, h.precision),
												E = v[0],
												O = v[1];
											m[b] = y + (E - y) * s, f[b] = _ + (O - _) * s, o[b] = y, l[b] = _
										}
									} i.animationID = null, i.accumulatedTime -= a * p, i.setState({
									currentStyle: m,
									currentVelocity: f,
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
							defaultStyle: f.default.objectOf(f.default.number),
							style: f.default.objectOf(f.default.oneOfType([f.default.number, f.default.object])).isRequired,
							children: f.default.func.isRequired,
							onRest: f.default.func
						},
						enumerable: !0
					}]), t.prototype.defaultState = function() {
						var e = this.props,
							t = e.defaultStyle,
							n = e.style,
							r = t || o.default(n),
							i = a.default(r);
						return {
							currentStyle: r,
							currentVelocity: i,
							lastIdealStyle: r,
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
				i = function() {
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

			function s(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var a = s(n("./node_modules/react-motion/lib/mapToZero.js")),
				o = s(n("./node_modules/react-motion/lib/stripStyle.js")),
				c = s(n("./node_modules/react-motion/lib/stepper.js")),
				d = s(n("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				l = s(n("./node_modules/raf/index.js")),
				u = s(n("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				m = s(n("./node_modules/react/index.js")),
				f = s(n("./node_modules/react-motion/node_modules/prop-types/index.js")),
				p = 1e3 / 60;
			var b = function(e) {
				function t(n) {
					var i = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, n), this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = i.state, n = t.currentStyles, s = t.currentVelocities, a = t.lastIdealStyles, o = t.lastIdealVelocities, c = !1, d = 0; d < e.length; d++) {
							var l = e[d],
								u = !1;
							for (var m in l)
								if (Object.prototype.hasOwnProperty.call(l, m)) {
									var f = l[m];
									"number" == typeof f && (u || (u = !0, c = !0, n[d] = r({}, n[d]), s[d] = r({}, s[d]), a[d] = r({}, a[d]), o[d] = r({}, o[d])), n[d][m] = f, s[d][m] = 0, a[d][m] = f, o[d][m] = 0)
								}
						}
						c && i.setState({
							currentStyles: n,
							currentVelocities: s,
							lastIdealStyles: a,
							lastIdealVelocities: o
						})
					}, this.startAnimationIfNecessary = function() {
						i.animationID = l.default((function(e) {
							var t = i.props.styles(i.state.lastIdealStyles);
							if (function(e, t, n) {
									for (var r = 0; r < e.length; r++)
										if (!u.default(e[r], t[r], n[r])) return !1;
									return !0
								}(i.state.currentStyles, t, i.state.currentVelocities)) return i.animationID = null, void(i.accumulatedTime = 0);
							var n = e || d.default(),
								r = n - i.prevTime;
							if (i.prevTime = n, i.accumulatedTime = i.accumulatedTime + r, i.accumulatedTime > 10 * p && (i.accumulatedTime = 0), 0 === i.accumulatedTime) return i.animationID = null, void i.startAnimationIfNecessary();
							for (var s = (i.accumulatedTime - Math.floor(i.accumulatedTime / p) * p) / p, a = Math.floor(i.accumulatedTime / p), o = [], l = [], m = [], f = [], b = 0; b < t.length; b++) {
								var h = t[b],
									y = {},
									_ = {},
									g = {},
									S = {};
								for (var v in h)
									if (Object.prototype.hasOwnProperty.call(h, v)) {
										var E = h[v];
										if ("number" == typeof E) y[v] = E, _[v] = 0, g[v] = E, S[v] = 0;
										else {
											for (var O = i.state.lastIdealStyles[b][v], w = i.state.lastIdealVelocities[b][v], P = 0; P < a; P++) {
												var I = c.default(p / 1e3, O, w, E.val, E.stiffness, E.damping, E.precision);
												O = I[0], w = I[1]
											}
											var N = c.default(p / 1e3, O, w, E.val, E.stiffness, E.damping, E.precision),
												C = N[0],
												j = N[1];
											y[v] = O + (C - O) * s, _[v] = w + (j - w) * s, g[v] = O, S[v] = w
										}
									} m[b] = y, f[b] = _, o[b] = g, l[b] = S
							}
							i.animationID = null, i.accumulatedTime -= a * p, i.setState({
								currentStyles: m,
								currentVelocities: f,
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
						defaultStyles: f.default.arrayOf(f.default.objectOf(f.default.number)),
						styles: f.default.func.isRequired,
						children: f.default.func.isRequired
					},
					enumerable: !0
				}]), t.prototype.defaultState = function() {
					var e = this.props,
						t = e.defaultStyles,
						n = e.styles,
						r = t || n().map(o.default),
						i = r.map((function(e) {
							return a.default(e)
						}));
					return {
						currentStyles: r,
						currentVelocities: i,
						lastIdealStyles: r,
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
				i = function() {
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

			function s(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var a = s(n("./node_modules/react-motion/lib/mapToZero.js")),
				o = s(n("./node_modules/react-motion/lib/stripStyle.js")),
				c = s(n("./node_modules/react-motion/lib/stepper.js")),
				d = s(n("./node_modules/react-motion/lib/mergeDiff.js")),
				l = s(n("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				u = s(n("./node_modules/raf/index.js")),
				m = s(n("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				f = s(n("./node_modules/react/index.js")),
				p = s(n("./node_modules/react-motion/node_modules/prop-types/index.js")),
				b = 1e3 / 60;

			function h(e, t, n) {
				var r = t;
				return null == r ? e.map((function(e, t) {
					return {
						key: e.key,
						data: e.data,
						style: n[t]
					}
				})) : e.map((function(e, t) {
					for (var i = 0; i < r.length; i++)
						if (r[i].key === e.key) return {
							key: r[i].key,
							data: r[i].data,
							style: n[t]
						};
					return {
						key: e.key,
						data: e.data,
						style: n[t]
					}
				}))
			}

			function y(e, t, n, r, i, s, o, c, l) {
				for (var u = d.default(r, i, (function(e, r) {
						var i = t(r);
						return null == i ? (n({
							key: r.key,
							data: r.data
						}), null) : m.default(s[e], i, o[e]) ? (n({
							key: r.key,
							data: r.data
						}), null) : {
							key: r.key,
							data: r.data,
							style: i
						}
					})), f = [], p = [], b = [], h = [], y = 0; y < u.length; y++) {
					for (var _ = u[y], g = null, S = 0; S < r.length; S++)
						if (r[S].key === _.key) {
							g = S;
							break
						} if (null == g) {
						var v = e(_);
						f[y] = v, b[y] = v;
						var E = a.default(_.style);
						p[y] = E, h[y] = E
					} else f[y] = s[g], b[y] = c[g], p[y] = o[g], h[y] = l[g]
				}
				return [u, f, p, b, h]
			}
			var _ = function(e) {
				function t(n) {
					var i = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, n), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = y(i.props.willEnter, i.props.willLeave, i.props.didLeave, i.state.mergedPropsStyles, e, i.state.currentStyles, i.state.currentVelocities, i.state.lastIdealStyles, i.state.lastIdealVelocities), n = t[0], s = t[1], a = t[2], o = t[3], c = t[4], d = 0; d < e.length; d++) {
							var l = e[d].style,
								u = !1;
							for (var m in l)
								if (Object.prototype.hasOwnProperty.call(l, m)) {
									var f = l[m];
									"number" == typeof f && (u || (u = !0, s[d] = r({}, s[d]), a[d] = r({}, a[d]), o[d] = r({}, o[d]), c[d] = r({}, c[d]), n[d] = {
										key: n[d].key,
										data: n[d].data,
										style: r({}, n[d].style)
									}), s[d][m] = f, a[d][m] = 0, o[d][m] = f, c[d][m] = 0, n[d].style[m] = f)
								}
						}
						i.setState({
							currentStyles: s,
							currentVelocities: a,
							mergedPropsStyles: n,
							lastIdealStyles: o,
							lastIdealVelocities: c
						})
					}, this.startAnimationIfNecessary = function() {
						i.unmounting || (i.animationID = u.default((function(e) {
							if (!i.unmounting) {
								var t = i.props.styles,
									n = "function" == typeof t ? t(h(i.state.mergedPropsStyles, i.unreadPropStyles, i.state.lastIdealStyles)) : t;
								if (function(e, t, n, r) {
										if (r.length !== t.length) return !1;
										for (var i = 0; i < r.length; i++)
											if (r[i].key !== t[i].key) return !1;
										for (i = 0; i < r.length; i++)
											if (!m.default(e[i], t[i].style, n[i])) return !1;
										return !0
									}(i.state.currentStyles, n, i.state.currentVelocities, i.state.mergedPropsStyles)) return i.animationID = null, void(i.accumulatedTime = 0);
								var r = e || l.default(),
									s = r - i.prevTime;
								if (i.prevTime = r, i.accumulatedTime = i.accumulatedTime + s, i.accumulatedTime > 10 * b && (i.accumulatedTime = 0), 0 === i.accumulatedTime) return i.animationID = null, void i.startAnimationIfNecessary();
								for (var a = (i.accumulatedTime - Math.floor(i.accumulatedTime / b) * b) / b, o = Math.floor(i.accumulatedTime / b), d = y(i.props.willEnter, i.props.willLeave, i.props.didLeave, i.state.mergedPropsStyles, n, i.state.currentStyles, i.state.currentVelocities, i.state.lastIdealStyles, i.state.lastIdealVelocities), u = d[0], f = d[1], p = d[2], _ = d[3], g = d[4], S = 0; S < u.length; S++) {
									var v = u[S].style,
										E = {},
										O = {},
										w = {},
										P = {};
									for (var I in v)
										if (Object.prototype.hasOwnProperty.call(v, I)) {
											var N = v[I];
											if ("number" == typeof N) E[I] = N, O[I] = 0, w[I] = N, P[I] = 0;
											else {
												for (var C = _[S][I], j = g[S][I], T = 0; T < o; T++) {
													var A = c.default(b / 1e3, C, j, N.val, N.stiffness, N.damping, N.precision);
													C = A[0], j = A[1]
												}
												var M = c.default(b / 1e3, C, j, N.val, N.stiffness, N.damping, N.precision),
													k = M[0],
													x = M[1];
												E[I] = C + (k - C) * a, O[I] = j + (x - j) * a, w[I] = C, P[I] = j
											}
										} _[S] = w, g[S] = P, f[S] = E, p[S] = O
								}
								i.animationID = null, i.accumulatedTime -= o * b, i.setState({
									currentStyles: f,
									currentVelocities: p,
									lastIdealStyles: _,
									lastIdealVelocities: g,
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
						n = e.styles,
						r = e.willEnter,
						i = e.willLeave,
						s = e.didLeave,
						c = "function" == typeof n ? n(t) : n,
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
							return a.default(e.style)
						})) : t.map((function(e) {
							return a.default(e.style)
						})),
						m = y(r, i, s, d, c, l, u, l, u),
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
			t.default = _, e.exports = t.default
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
				for (var r = {}, i = 0; i < e.length; i++) r[e[i].key] = i;
				var s = {};
				for (i = 0; i < t.length; i++) s[t[i].key] = i;
				var a = [];
				for (i = 0; i < t.length; i++) a[i] = t[i];
				for (i = 0; i < e.length; i++)
					if (!Object.prototype.hasOwnProperty.call(s, e[i].key)) {
						var o = n(i, e[i]);
						null != o && a.push(o)
					} return a.sort((function(e, n) {
					var i = s[e.key],
						a = s[n.key],
						o = r[e.key],
						c = r[n.key];
					if (null != i && null != a) return s[e.key] - s[n.key];
					if (null != o && null != c) return r[e.key] - r[n.key];
					if (null != i) {
						for (var d = 0; d < t.length; d++) {
							var l = t[d].key;
							if (Object.prototype.hasOwnProperty.call(r, l)) {
								if (i < s[l] && c > r[l]) return -1;
								if (i > s[l] && c < r[l]) return 1
							}
						}
						return 1
					}
					for (d = 0; d < t.length; d++) {
						l = t[d].key;
						if (Object.prototype.hasOwnProperty.call(r, l)) {
							if (a < s[l] && o > r[l]) return 1;
							if (a > s[l] && o < r[l]) return -1
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
			var i = n("./node_modules/react-motion/lib/Motion.js");
			t.Motion = r(i);
			var s = n("./node_modules/react-motion/lib/StaggeredMotion.js");
			t.StaggeredMotion = r(s);
			var a = n("./node_modules/react-motion/lib/TransitionMotion.js");
			t.TransitionMotion = r(a);
			var o = n("./node_modules/react-motion/lib/spring.js");
			t.spring = r(o);
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
						var i = "number" == typeof t[r] ? t[r] : t[r].val;
						if (e[r] !== i) return !1
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
				return r({}, o, t, {
					val: e
				})
			};
			var i, s = n("./node_modules/react-motion/lib/presets.js"),
				a = (i = s) && i.__esModule ? i : {
					default: i
				},
				o = r({}, a.default.noWobble, {
					precision: .01
				});
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stepper.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, n, i, s, a, o) {
				var c = n + (-s * (t - i) + -a * n) * e,
					d = t + c * e;
				if (Math.abs(c) < o && Math.abs(d - i) < o) return r[0] = i, r[1] = 0, r;
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
					var n, r, i;
					"undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
						return performance.now()
					} : null != t && t.hrtime ? (e.exports = function() {
						return (n() - i) / 1e6
					}, r = t.hrtime, i = (n = function() {
						var e;
						return 1e9 * (e = r())[0] + e[1]
					})()) : Date.now ? (e.exports = function() {
						return Date.now() - i
					}, i = Date.now()) : (e.exports = function() {
						return (new Date).getTime() - i
					}, i = (new Date).getTime())
				}).call(this)
			}).call(this, n("./node_modules/process/browser.js"))
		},
		"./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function i() {}

			function s() {}
			s.resetWarningCache = i, e.exports = function() {
				function e(e, t, n, i, s, a) {
					if (a !== r) {
						var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw o.name = "Invariant Violation", o
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
					checkPropTypes: s,
					resetWarningCache: i
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
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			}));
			const r = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				i = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return s
			}));
			const r = "ECONOMICS__ME__ME_DATA_SUCCESS",
				i = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				s = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			}));
			const r = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				i = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return o
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
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "n", (function() {
				return h
			})), n.d(t, "o", (function() {
				return y
			})), n.d(t, "p", (function() {
				return _
			})), n.d(t, "q", (function() {
				return g
			})), n.d(t, "r", (function() {
				return S
			})), n.d(t, "s", (function() {
				return v
			})), n.d(t, "t", (function() {
				return E
			})), n.d(t, "u", (function() {
				return O
			})), n.d(t, "v", (function() {
				return w
			})), n.d(t, "w", (function() {
				return P
			})), n.d(t, "x", (function() {
				return I
			}));
			const r = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
				i = "GOVERNANCE__NEW_SUBREDDIT_SUGGESTED",
				s = "GOVERNANCE__NEW_TOP_MOD_SUGGESTED",
				a = "GOVERNANCE__OPT_OUT_MODAL_OPENED",
				o = "POLL_VOTE_SUCCESS",
				c = "GOVERNANCE__PROPOSAL_CREATION_FAILURE",
				d = "GOVERNANCE__PROPOSAL_CREATION_PENDING",
				l = "GOVERNANCE__PROPOSAL_CREATION_SUCCESS",
				u = "GOVERNANCE__PROPOSAL_OPTION_VOTE_FAILURE",
				m = "GOVERNANCE__PROPOSAL_OPTION_VOTE_PENDING",
				f = "GOVERNANCE__PROPOSAL_OPTION_VOTE_SUCCESS",
				p = "GOVERNANCE__PUBLIC_WALLET_INFO_FAILURE",
				b = "GOVERNANCE__PUBLIC_WALLET_INFO_PENDING",
				h = "GOVERNANCE__PUBLIC_WALLET_INFO_SUCCESS",
				y = "GOVERNANCE__RELEASE_NOTES_MODAL_OPENED",
				_ = "GOVERNANCE__RELEASE_NOTES_SUCCESS",
				g = "GOVERNANCE__TRANSFER_FAILURE",
				S = "GOVERNANCE__TRANSFER_MODAL_OPENED",
				v = "GOVERNANCE__TRANSFER_PENDING",
				E = "GOVERNANCE__TRANSFER_SUCCESS",
				O = "GOVERNANCE__WALLETS_FETCH_FAILURE",
				w = "GOVERNANCE__WALLETS_FETCH_PENDING",
				P = "GOVERNANCE__WALLETS_FETCH_SUCCESS",
				I = "GOVERNANCE__WALLET_REGISTRATION_MODAL_OPENED"
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, n) {
			"use strict";
			var r, i, s, a;

			function o(e) {
				const {
					platform: t,
					playerType: n,
					region: r,
					style: i
				} = e;
				return `https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_${i}/${r}_${t}_${n}_${i}.svg`
			}
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return i
				})), n.d(t, "c", (function() {
					return s
				})), n.d(t, "d", (function() {
					return o
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(r || (r = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(i || (i = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(s || (s = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(a || (a = {}))
		},
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Badges/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Emojis/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Gifs/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				i = n.n(r),
				s = n("./node_modules/react-motion/lib/react-motion.js"),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				l = n("./src/reddit/selectors/economics.ts"),
				u = n("./node_modules/fbt/lib/FbtPublic.js"),
				m = n("./node_modules/lodash/shuffle.js"),
				f = n.n(m),
				p = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				b = n("./src/reddit/models/Badge/index.ts"),
				h = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Badges/index.m.less"),
				y = n.n(h);
			const _ = 10,
				g = 500,
				S = 30,
				v = 132;
			class E extends i.a.Component {
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
						const n = Math.round((v - t) / S / 2),
							r = this.badgesForLine[1][n % this.badgesForLine[1].length];
						this.setState({
							currentlySelected: r
						})
					}, g)
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
					for (let n = 0; n < 3; n++) {
						t.length < (n + 2) * _ && (t = f()(this.props.styleBadges));
						const e = [];
						for (let r = 0; r < _; r++) e.push(t[(n * _ + r) % t.length]);
						this.badgesForLine.push(e)
					}
				}
				render() {
					const {
						className: e,
						subreddit: t,
						username: n
					} = this.props, {
						currentlySelected: r
					} = this.state;
					if (!t) return null;
					const s = this.badgesForLine;
					return i.a.createElement("article", {
						className: Object(c.a)(y.a.container, e)
					}, i.a.createElement("div", {
						className: y.a.background
					}), i.a.createElement("div", {
						className: y.a.content
					}, i.a.createElement("header", {
						className: y.a.title
					}, u.fbt._("badges", null, {
						hk: "4bW4l"
					})), s.length && i.a.createElement("div", {
						className: y.a.rows
					}, i.a.createElement(O, {
						badges: s[0],
						style: {
							animationDuration: "20s"
						}
					}), i.a.createElement(O, {
						badges: s[1],
						innerRef: this.setRowRef,
						style: {
							animationDirection: "reverse",
							animationDuration: "25s"
						}
					}), i.a.createElement(O, {
						badges: s[2],
						style: {
							animationDuration: "30s"
						}
					})), i.a.createElement("div", {
						className: y.a.username,
						style: {
							color: null == r ? void 0 : r.color
						}
					}, r && i.a.createElement("img", {
						className: y.a.badgePreview,
						src: r.url
					}), n), i.a.createElement("footer", {
						className: y.a.explanation
					}, u.fbt._("Style your username with a badge and color", null, {
						hk: "2bRpdH"
					})), i.a.createElement("div", {
						className: y.a.selection
					}, i.a.createElement(p.a, {
						className: y.a.check
					}))))
				}
			}
			const O = e => {
					let {
						badges: t,
						innerRef: n,
						style: r
					} = e;
					return i.a.createElement("div", {
						className: y.a.row,
						ref: n,
						style: r
					}, t.map(e => i.a.createElement("img", {
						key: e.url,
						src: e.url,
						className: y.a.rowBadge
					})), t.map(e => i.a.createElement("img", {
						key: e.url + 2,
						src: e.url,
						className: y.a.rowBadge
					})))
				},
				w = Object(o.c)({
					styleBadges: (e, t) => {
						let {
							subredditId: n
						} = t;
						return Object(l.d)(e, n).filter(e => {
							var t;
							return !(null === (t = e.collections) || void 0 === t ? void 0 : t.custom)
						}).map(e => {
							var t, n;
							return {
								url: Object(b.d)(60, 60, e).url2x,
								color: (null === (n = null === (t = e.extra) || void 0 === t ? void 0 : t.style) || void 0 === n ? void 0 : n.color) || ""
							}
						}).filter(e => e.color)
					},
					subreddit: (e, t) => {
						let {
							subredditId: n
						} = t;
						return e.subreddits.models[n]
					},
					username: e => {
						var t;
						return `u/${(null===(t=e.user.account)||void 0===t?void 0:t.displayText)||"username"}`
					}
				});
			var P = Object(a.b)(w)(E),
				I = n("./src/config.ts"),
				N = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Emojis/index.m.less"),
				C = n.n(N);
			const j = ["blink", "bush", "chug", "clappy", "confused", "cuddle", "dab", "dance", "default", "oof", "respect", "soon", "unfortunately", "wow"].map(e => `https://meta.redditmedia.com/img/fortnitebr/emotes/${e}-2x.gif`).concat("https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_destroy.gif");
			const T = Object(o.c)({
				subreddit: (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.subreddits.models[n]
				}
			});
			var A = Object(a.b)(T)((function(e) {
				const {
					className: t,
					subreddit: n
				} = e;
				return n ? i.a.createElement("article", {
					className: Object(c.a)(C.a.container, t)
				}, i.a.createElement("div", {
					className: C.a.background
				}), i.a.createElement("div", {
					className: C.a.content
				}, i.a.createElement("header", {
					className: C.a.title
				}, u.fbt._("emotes", null, {
					hk: "1VLDec"
				})), i.a.createElement("div", {
					className: C.a.example
				}, i.a.createElement("img", {
					className: C.a.drawer,
					src: `${I.a.assetPath}/img/memberships/emoji-drawer.png`
				}), i.a.createElement("div", {
					className: C.a.emojisTitle
				}, u.fbt._("Add r/{communityName} emote", [u.fbt._param("communityName", n.name)], {
					hk: "1pL2rY"
				})), i.a.createElement("div", {
					className: C.a.emojisContainer
				}, i.a.createElement("div", {
					className: C.a.emojis
				}, j.map(e => i.a.createElement("img", {
					className: C.a.emoji,
					key: e,
					src: e
				}))), i.a.createElement("div", {
					className: C.a.overflow
				}))), i.a.createElement("footer", {
					className: C.a.explanation
				}, u.fbt._("Get access to premium animated emotes", null, {
					hk: "1jTE2m"
				})))) : null
			}));
			var M = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Gifs/index.m.less"),
				k = n.n(M);
			const x = (() => {
				const e = {};
				return async t => {
					if (e[t]) return e[t];
					const n = {
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
					return e[t] = n, n
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
						t = await x(e),
						{
							imagesCol1: n,
							imagesCol2: r
						} = function(e) {
							const t = [],
								n = [];
							return e.data.map(e => {
								var t;
								return null === (t = e.images.fixed_width) || void 0 === t ? void 0 : t.url
							}).filter(e => e).forEach((e, r) => {
								r % 2 == 0 ? t.push(e) : n.push(e)
							}), {
								imagesCol1: t,
								imagesCol2: n
							}
						}(t);
					this.setState({
						imagesCol1: n,
						imagesCol2: r
					})
				}
				render() {
					const {
						className: e,
						subreddit: t
					} = this.props;
					return t ? i.a.createElement("article", {
						className: Object(c.a)(k.a.container, e)
					}, i.a.createElement("div", {
						className: k.a.background
					}), i.a.createElement("div", {
						className: k.a.content
					}, i.a.createElement("header", {
						className: k.a.title
					}, u.fbt._("gifs in comments", null, {
						hk: "41wG7A"
					})), i.a.createElement("div", {
						className: k.a.example
					}, i.a.createElement("img", {
						className: k.a.drawer,
						src: `${I.a.assetPath}/img/memberships/gif-drawer.png`
					}), i.a.createElement("div", {
						className: k.a.imagesContainer
					}, i.a.createElement("div", {
						className: k.a.images
					}, i.a.createElement("div", {
						className: k.a.imageCol
					}, this.state.imagesCol1.map(e => i.a.createElement("img", {
						className: k.a.image,
						key: e,
						src: e
					}))), i.a.createElement("div", {
						className: k.a.imageCol
					}, this.state.imagesCol2.map(e => i.a.createElement("img", {
						className: k.a.image,
						key: e,
						src: e
					})))), i.a.createElement("div", {
						className: k.a.overflow
					}))), i.a.createElement("footer", {
						className: k.a.explanation
					}, u.fbt._("Add GIFs to your comments", null, {
						hk: "302rEX"
					})))) : null
				}
			}
			const R = Object(o.c)({
				subreddit: (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.subreddits.models[n]
				}
			});
			var L = Object(a.b)(R)(D),
				F = n("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.m.less"),
				B = n.n(F);
			const U = 1e4,
				G = 110;
			class V extends i.a.Component {
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
								return [P, A, L];
							default:
								return [P, L]
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
						meta: n,
						subredditId: a,
						subreddit: o
					} = this.props, {
						currentSlideIdx: l
					} = this.state;
					return o ? i.a.createElement("div", {
						className: e
					}, i.a.createElement("header", {
						className: B.a.title
					}, i.a.createElement("img", {
						className: B.a.crown,
						src: d.a
					}), n.membershipAlt), !t && i.a.createElement(i.a.Fragment, null, i.a.createElement("article", {
						className: B.a.benefits
					}, i.a.createElement(s.TransitionMotion, {
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
								left: Object(s.spring)(0)
							}
						}],
						willEnter: () => ({
							left: G
						}),
						willLeave: () => ({
							left: Object(s.spring)(-G)
						})
					}, e => i.a.createElement(r.Fragment, null, e.map(e => i.a.createElement("div", {
						className: B.a.slide,
						key: e.key,
						style: {
							left: `${e.style.left}%`
						},
						onClick: this.gotoNextSlide
					}, i.a.createElement(e.data.Component, {
						subredditId: a
					})))))), i.a.createElement("footer", {
						className: B.a.indicators
					}, this.slides.map((e, t) => i.a.createElement("div", {
						className: Object(c.a)(B.a.indicator, {
							[B.a.indicatorSelected]: t === l
						}),
						key: t,
						onClick: () => this.setState({
							currentSlideIdx: t
						})
					}))))) : null
				}
			}
			const W = Object(o.c)({
				meta: (e, t) => {
					let {
						subredditId: n
					} = t;
					return Object(l.r)(e, n)
				},
				subreddit: (e, t) => {
					let {
						subredditId: n
					} = t;
					return e.subreddits.models[n]
				},
				username: e => {
					const t = e.user.account;
					return t && t.username || "username"
				}
			});
			t.a = Object(a.b)(W)(V)
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/config.ts"),
				i = n("./node_modules/lodash/flattenDeep.js"),
				s = n.n(i),
				a = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const o = `${r.a.assetPath}/img/memberships/paywall/crown.gif`,
				c = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				d = new Set(s()(Object.keys(a.a).map(e => Object.keys(a.b).map(t => Object.keys(a.c).map(n => `${n}_${e}_${t}_badge`)))))
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/lib/permalinkToOverlayLocation/index.ts");

			function i(e, t) {
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

			function i(e) {
				return [...e].sort(r)
			}
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			}))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			}));
			var r, i, s = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(r || (r = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(i || (i = {}));
			const a = {
					[r.Loyalty]: s.a.First,
					[r.Achievement]: s.a.Second,
					[r.Cosmetic]: void 0
				},
				o = e => e === s.a.First ? r.Loyalty : e === s.a.Second ? r.Achievement : r.Cosmetic
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var r, i, s, a;
			n.d(t, "b", (function() {
					return i
				})), n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(i || (i = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(s || (s = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(a || (a = {}))
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var r, i = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(r || (r = {}));
			const s = {
				status: r.NotFetched
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.a:
						if (e.status === r.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: r,
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
						if (e.status === r.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: r,
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
							error: t.payload.error, status: r.Failure
						};
					case i.c:
						return {
							data: t.payload, status: r.Fetched
						};
					case i.d:
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
			var r, i = n("./src/lib/constants/specialMembership.ts"),
				s = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				a = n("./src/reddit/helpers/economics/sortBadges.ts"),
				o = n("./src/reddit/models/Badge/index.ts"),
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
					e.collections && Object.keys(e.collections).forEach(i => {
						let s;
						(s = e.placement ? e.placement === o.a.First ? r[c.a.Loyalty][i] : r[c.a.Achievement][i] : l(e) ? r[c.a.Cosmetic][c.c.MyBadges][i] : r[c.a.Cosmetic][c.c.Gallery][i]) && (l(e) ? n.has(e.id) && s.unlocked.push(e) : t.has(e.id) || s.locked.push(e))
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

			function f(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === i.a).map(m).sort((e, n) => {
					const r = t[e.id],
						i = t[n.id];
					return Object(a.b)(r, i)
				})
			}

			function p(e) {
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
						i = {
							description: r.description,
							highlight: r.extra && r.extra.style && r.extra.style.color,
							id: r.id,
							locked: [],
							title: r.title,
							unlocked: []
						};
					t[c.a.Loyalty][n] = {
						...i,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...i,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...i,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
						...i,
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
						[c.a.Loyalty]: f(t[c.a.Loyalty], e.collections),
						[c.a.Achievement]: f(t[c.a.Achievement], e.collections),
						[c.a.Cosmetic]: {
							[c.c.Gallery]: f(t[c.a.Cosmetic][c.c.Gallery], e.collections),
							[c.c.MyBadges]: f(t[c.a.Cosmetic][c.c.MyBadges], e.collections)
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
					case s.a: {
						const {
							subredditId: n
						} = t.payload, i = e[n];
						return i && i.status === r.Fetched ? {
							...e,
							[n]: {
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
					case s.h: {
						const {
							subredditId: n
						} = t.payload, i = e[n];
						return i && i.status === r.Fetched ? {
							...e,
							[n]: {
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
					case s.i: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: p(n),
								status: r.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/crypto/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				i = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/economics/claims/constants.ts")),
				s = n("./src/reddit/actions/economics/me/constants.ts");
			const a = {};
			var o = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.a: {
							const n = t.payload.claimPoints || {},
								r = Object.keys(n).reduce((t, r) => (t[r] = {
									...e[r],
									availableClaims: n[r]
								}, t), {});
							return Object.keys(e).forEach(t => {
								var n;
								(null === (n = e[t]) || void 0 === n ? void 0 : n.isClaiming) && (r[t] = r[t] || {
									availableClaims: []
								}, r[t].isClaiming = !0)
							}), r
						}
						case i.b:
						case i.a:
							const {
								subredditId: n
							} = t.payload;
							return {
								...e, [n]: {
									...e[n],
									isClaiming: t.type === i.b
								}
							};
						default:
							return e
					}
				},
				c = n("./src/reddit/actions/governance/constants.ts");
			const d = 15e4,
				l = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function m(e) {
				var t, n, r, i, s;
				const a = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					o = null == a ? void 0 : a.contracts,
					c = null == o ? void 0 : o.unlocked,
					l = null !== (r = null === (n = e.walletProvider) || void 0 === n ? void 0 : n.provider) && void 0 !== r ? r : e.provider,
					m = !!(null === (i = e.walletProvider) || void 0 === i ? void 0 : i.inTransition),
					f = null == a ? void 0 : a.metaTransactions,
					p = (null == f ? void 0 : f.allowedContractMethods) || {},
					b = (null == f ? void 0 : f.gasLimit) || d,
					h = (null == c ? void 0 : c.decimals) || 0,
					y = "1" + "0".repeat(h);
				return {
					allowedContractMethods: p,
					blockchainProvider: l,
					contractAddress: (null == c ? void 0 : c.address) || "",
					contracts: o,
					decimals: h,
					displayConversion: y,
					gasLimit: b,
					images: e.images || u,
					inTransition: m,
					name: e.name,
					nomenclature: null === (s = e.extra) || void 0 === s ? void 0 : s.nomenclature,
					polls: e.polls,
					symbol: (null == c ? void 0 : c.token) || ""
				}
			}
			var f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.a: {
						const {
							subredditId: n,
							meta: r
						} = t.payload;
						return {
							...e,
							[n]: m(r)
						}
					}
					default:
						return e
				}
			};
			const p = {};
			var b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case c.n: {
						const {
							subredditId: n,
							wallets: r
						} = t.payload, i = Object.keys(r).reduce((t, i) => {
							return {
								...t,
								[i]: {
									...e[i] || {},
									[n]: r[i]
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
			t.a = Object(r.c)({
				claims: o,
				points: f,
				publicWallets: b
			})
		},
		"./src/reddit/selectors/economics.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return g
			})), n.d(t, "o", (function() {
				return S
			})), n.d(t, "a", (function() {
				return v
			})), n.d(t, "x", (function() {
				return E
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "i", (function() {
				return w
			})), n.d(t, "q", (function() {
				return P
			})), n.d(t, "h", (function() {
				return I
			})), n.d(t, "z", (function() {
				return N
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "n", (function() {
				return j
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "j", (function() {
				return M
			})), n.d(t, "p", (function() {
				return k
			})), n.d(t, "k", (function() {
				return R
			})), n.d(t, "r", (function() {
				return F
			})), n.d(t, "y", (function() {
				return B
			})), n.d(t, "u", (function() {
				return U
			})), n.d(t, "v", (function() {
				return G
			})), n.d(t, "b", (function() {
				return V
			})), n.d(t, "w", (function() {
				return W
			})), n.d(t, "s", (function() {
				return z
			})), n.d(t, "t", (function() {
				return Z
			})), n.d(t, "g", (function() {
				return X
			})), n.d(t, "m", (function() {
				return H
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/featureFlags/index.ts"),
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				s = n("./src/reddit/helpers/richTextJson/index.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
				o = n("./src/reddit/models/Badge/managementPage.ts"),
				c = n("./src/reddit/models/Payments/index.ts"),
				d = n("./src/reddit/models/Product/index.ts"),
				l = n("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				u = n("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = n("./src/reddit/selectors/comments.ts"),
				f = n("./src/reddit/selectors/commentSelector.ts"),
				p = n("./src/reddit/selectors/experiments/econ/index.ts"),
				b = n("./src/reddit/selectors/experiments/mediaInComments.ts"),
				h = n("./src/reddit/selectors/gold/powerups/index.ts"),
				y = n("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const _ = [],
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
				S = (e, t) => {
					const n = g(e, t);
					return n && n.endsAt || null
				};
			var v;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(v || (v = {}));
			const E = (e, t) => {
					const n = e.economics.subredditPremium[t];
					if (n && n.status === u.a.Fetched) {
						const n = S(e, t),
							r = Date.now();
						return n && r < n ? v.Subscribed : v.NotSubscribed
					}
					return v.DontKnow
				},
				O = (e, t) => {
					const n = e.user.account,
						r = e.economics.subredditPremium[t];
					if (n && r && r.status === u.a.Fetched) {
						const r = ((e.users.appliedBadges[n.id] || {})[t] || _).map(t => e.badges.models[t]).filter(Boolean);
						if (r) return {
							[o.a.Loyalty]: r.find(e => e.placement === a.a.First),
							[o.a.Achievement]: r.find(e => e.placement === a.a.Second),
							[o.a.Cosmetic]: r.find(e => !e.placement)
						}
					}
					return {
						[o.a.Loyalty]: void 0,
						[o.a.Achievement]: void 0,
						[o.a.Cosmetic]: void 0
					}
				};

			function w(e, t) {
				return (null == e ? void 0 : e.length) ? Object(i.a)(e.map(e => t[e]).filter(Boolean)) : _
			}
			const P = (e, t, n) => {
					var i;
					if (!r.d.spBadges(e)) return _;
					return w(null === (i = e.users.appliedBadges[n]) || void 0 === i ? void 0 : i[t], e.badges.models)
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

			function N(e, t) {
				const n = (e.economics.me.data.specialMemberships || {})[t];
				return !!(n && n.settings && n.settings.optOut)
			}

			function C(e, t) {
				const {
					badge: n,
					subredditId: r
				} = t, i = e.user.account ? e.user.account.id : void 0;
				if (Object(a.e)(n) && n.userId === i) return n;
				const s = e.badges.models,
					o = e.user.ownedBadges[r] || {},
					c = Object(a.e)(n) ? n.type : n.id;
				return Object.keys(o).map(e => s[e]).find(e => e && e.type === c)
			}

			function j(e, t, n, r) {
				const i = e.economics.subredditPremium[t];
				if (i && i.status === u.a.Fetched) {
					if (n === o.a.Loyalty || n === o.a.Achievement) return i.data.collections[n];
					if (n === o.a.Cosmetic && r) return i.data.collections[n][r]
				}
				return _
			}

			function T(e, t) {
				const n = j(e, t, o.a.Loyalty).find(e => "membership" === e.id);
				return n ? [].concat(n.locked, n.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : _
			}

			function A(e, t) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === u.a.Fetched) {
					const e = n.data.collections[o.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(a.f)
				}
				return _
			}

			function M(e, t) {
				return j(e, t, o.a.Cosmetic, o.c.Gallery).some(e => e.locked.some(e => Object(a.f)(e) || !!e.price))
			}
			const k = e => {
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
			var x;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(x || (x = {}));
			const D = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Special Membership"
				},
				R = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				L = (e, t) => {
					if (!t) return {};
					const n = D.prices;
					R(e, t).forEach(e => {
						e.price && e.currency && (n[e.currency] = e.price)
					});
					const r = g(e, t);
					return r && r.price && r.currency && (n[r.currency] = r.price), n
				},
				F = (e, t) => {
					var n, r, i, s;
					const a = (null === (s = null === (i = null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.crypto) || void 0 === r ? void 0 : r.points) || void 0 === i ? void 0 : i[t || ""]) || void 0 === s ? void 0 : s.nomenclature) || D;
					return {
						prices: L(e, t),
						member: a.member || D.member,
						memberPlural: a.memberPlural || D.memberPlural,
						memberAlt: a.memberAlt || D.memberAlt,
						memberAltPlural: a.memberAltPlural || D.memberAltPlural,
						membership: a.membership || D.membership,
						membershipAlt: a.membershipAlt || D.membershipAlt
					}
				},
				B = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				U = (e, t) => {
					const n = e.user.ownedBadges[t] || {};
					return !!Object.keys(n).length
				},
				G = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				V = (e, t) => {
					let {
						subredditId: n
					} = t;
					if (!n) return;
					return e.economics.emotes[n]
				},
				W = (e, t) => {
					const n = t && e.economics.gifs[t];
					return !!n && n.hasGifProduct
				},
				z = (e, t, n) => {
					if (Object(p.e)(e)) return !!t && !!Object(h.a)(e, {
						subredditId: t
					});
					if (Object(h.g)(e, {
							subredditId: t
						})) return !0;
					const r = "replyToPost" !== n && Object(f.b)(e, {
						commentId: n
					});
					return !(!r || !Object(s.a)(r))
				},
				Z = (e, t, n) => {
					if (Object(b.a)(e)) return !(!t || !Object(m.C)(e, {
						subredditId: t
					})) || (!!Y(e, t) || !(!r.d.spGiphy(e) || !q(e, n)));
					if (!Object(y.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(h.h)(e, {
							subredditId: t
						})) return !0;
					if (q(e, n)) return !0;
					const i = r.d.spGiphy(e),
						s = W(e, t);
					return !!Y(e, t) || i && s
				},
				q = (e, t) => {
					const n = "replyToPost" !== t && Object(f.b)(e, {
						commentId: t
					});
					if (n && Object(s.b)(n)) return !0
				},
				Y = (e, t) => {
					const n = r.d.spGiphy(e),
						i = W(e, t);
					return n && i
				},
				X = (e, t, n) => {
					if (t) {
						const r = e.economics.banners.dismissedBanners[t];
						if (r && r.data) return !!r.data[n]
					}
				},
				H = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/products.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/models/Product/index.ts");
			const i = (e, t) => {
					const n = e.products.models[t];
					if (n && n.type === r.a.Badge) return n
				},
				s = (e, t) => {
					let {
						productId: n
					} = t;
					const r = e.products.models[n];
					if (r) {
						const t = r.subredditId,
							i = Object.keys(e.user.ownedBadges[t] || {}),
							s = e.badges.models,
							a = Date.now();
						let o = !1;
						return i.forEach(e => {
							const t = s[e];
							t && t.type === n && t.endsAt > a && (o = !0)
						}), o
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip.68e85ad6e20ae912db80.js.map