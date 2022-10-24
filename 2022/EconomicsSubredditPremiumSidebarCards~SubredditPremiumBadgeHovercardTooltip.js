// https://www.redditstatic.com/desktop2x/EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip.7b1ec2a31443ce35d8ac.js
// Retrieved at 10/24/2022, 5:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"], {
		"./node_modules/lodash/_arrayShuffle.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_copyArray.js"),
				i = r("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e) {
				return i(n(e))
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_shuffleSelf.js"),
				i = r("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return n(i(e))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var r = -1,
					i = e.length,
					s = i - 1;
				for (t = void 0 === t ? i : t; ++r < t;) {
					var a = n(r, s),
						o = e[a];
					e[a] = e[r], e[r] = o
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/flattenDeep.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseFlatten.js"),
				i = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? n(e, i) : []
			}
		},
		"./node_modules/lodash/shuffle.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_arrayShuffle.js"),
				i = r("./node_modules/lodash/_baseShuffle.js"),
				s = r("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (s(e) ? n : i)(e)
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
				i = function() {
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

			function s(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var a = s(r("./node_modules/react-motion/lib/mapToZero.js")),
				o = s(r("./node_modules/react-motion/lib/stripStyle.js")),
				c = s(r("./node_modules/react-motion/lib/stepper.js")),
				d = s(r("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				l = s(r("./node_modules/raf/index.js")),
				u = s(r("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				m = s(r("./node_modules/react/index.js")),
				f = s(r("./node_modules/react-motion/node_modules/prop-types/index.js")),
				p = 1e3 / 60,
				b = function(e) {
					function t(r) {
						var i = this;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), e.call(this, r), this.wasAnimating = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyle = null, this.clearUnreadPropStyle = function(e) {
							var t = !1,
								r = i.state,
								s = r.currentStyle,
								a = r.currentVelocity,
								o = r.lastIdealStyle,
								c = r.lastIdealVelocity;
							for (var d in e)
								if (Object.prototype.hasOwnProperty.call(e, d)) {
									var l = e[d];
									"number" == typeof l && (t || (t = !0, s = n({}, s), a = n({}, a), o = n({}, o), c = n({}, c)), s[d] = l, a[d] = 0, o[d] = l, c[d] = 0)
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
								var r = e || d.default(),
									n = r - i.prevTime;
								if (i.prevTime = r, i.accumulatedTime = i.accumulatedTime + n, i.accumulatedTime > 10 * p && (i.accumulatedTime = 0), 0 === i.accumulatedTime) return i.animationID = null, void i.startAnimationIfNecessary();
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
							r = e.style,
							n = t || o.default(r),
							i = a.default(n);
						return {
							currentStyle: n,
							currentVelocity: i,
							lastIdealStyle: n,
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
				i = function() {
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

			function s(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var a = s(r("./node_modules/react-motion/lib/mapToZero.js")),
				o = s(r("./node_modules/react-motion/lib/stripStyle.js")),
				c = s(r("./node_modules/react-motion/lib/stepper.js")),
				d = s(r("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				l = s(r("./node_modules/raf/index.js")),
				u = s(r("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				m = s(r("./node_modules/react/index.js")),
				f = s(r("./node_modules/react-motion/node_modules/prop-types/index.js")),
				p = 1e3 / 60;
			var b = function(e) {
				function t(r) {
					var i = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, r), this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = i.state, r = t.currentStyles, s = t.currentVelocities, a = t.lastIdealStyles, o = t.lastIdealVelocities, c = !1, d = 0; d < e.length; d++) {
							var l = e[d],
								u = !1;
							for (var m in l)
								if (Object.prototype.hasOwnProperty.call(l, m)) {
									var f = l[m];
									"number" == typeof f && (u || (u = !0, c = !0, r[d] = n({}, r[d]), s[d] = n({}, s[d]), a[d] = n({}, a[d]), o[d] = n({}, o[d])), r[d][m] = f, s[d][m] = 0, a[d][m] = f, o[d][m] = 0)
								}
						}
						c && i.setState({
							currentStyles: r,
							currentVelocities: s,
							lastIdealStyles: a,
							lastIdealVelocities: o
						})
					}, this.startAnimationIfNecessary = function() {
						i.animationID = l.default((function(e) {
							var t = i.props.styles(i.state.lastIdealStyles);
							if (function(e, t, r) {
									for (var n = 0; n < e.length; n++)
										if (!u.default(e[n], t[n], r[n])) return !1;
									return !0
								}(i.state.currentStyles, t, i.state.currentVelocities)) return i.animationID = null, void(i.accumulatedTime = 0);
							var r = e || d.default(),
								n = r - i.prevTime;
							if (i.prevTime = r, i.accumulatedTime = i.accumulatedTime + n, i.accumulatedTime > 10 * p && (i.accumulatedTime = 0), 0 === i.accumulatedTime) return i.animationID = null, void i.startAnimationIfNecessary();
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
						r = e.styles,
						n = t || r().map(o.default),
						i = n.map((function(e) {
							return a.default(e)
						}));
					return {
						currentStyles: n,
						currentVelocities: i,
						lastIdealStyles: n,
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
				i = function() {
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

			function s(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var a = s(r("./node_modules/react-motion/lib/mapToZero.js")),
				o = s(r("./node_modules/react-motion/lib/stripStyle.js")),
				c = s(r("./node_modules/react-motion/lib/stepper.js")),
				d = s(r("./node_modules/react-motion/lib/mergeDiff.js")),
				l = s(r("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				u = s(r("./node_modules/raf/index.js")),
				m = s(r("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				f = s(r("./node_modules/react/index.js")),
				p = s(r("./node_modules/react-motion/node_modules/prop-types/index.js")),
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
					for (var i = 0; i < n.length; i++)
						if (n[i].key === e.key) return {
							key: n[i].key,
							data: n[i].data,
							style: r[t]
						};
					return {
						key: e.key,
						data: e.data,
						style: r[t]
					}
				}))
			}

			function y(e, t, r, n, i, s, o, c, l) {
				for (var u = d.default(n, i, (function(e, n) {
						var i = t(n);
						return null == i ? (r({
							key: n.key,
							data: n.data
						}), null) : m.default(s[e], i, o[e]) ? (r({
							key: n.key,
							data: n.data
						}), null) : {
							key: n.key,
							data: n.data,
							style: i
						}
					})), f = [], p = [], b = [], h = [], y = 0; y < u.length; y++) {
					for (var _ = u[y], g = null, S = 0; S < n.length; S++)
						if (n[S].key === _.key) {
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
				function t(r) {
					var i = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, r), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = y(i.props.willEnter, i.props.willLeave, i.props.didLeave, i.state.mergedPropsStyles, e, i.state.currentStyles, i.state.currentVelocities, i.state.lastIdealStyles, i.state.lastIdealVelocities), r = t[0], s = t[1], a = t[2], o = t[3], c = t[4], d = 0; d < e.length; d++) {
							var l = e[d].style,
								u = !1;
							for (var m in l)
								if (Object.prototype.hasOwnProperty.call(l, m)) {
									var f = l[m];
									"number" == typeof f && (u || (u = !0, s[d] = n({}, s[d]), a[d] = n({}, a[d]), o[d] = n({}, o[d]), c[d] = n({}, c[d]), r[d] = {
										key: r[d].key,
										data: r[d].data,
										style: n({}, r[d].style)
									}), s[d][m] = f, a[d][m] = 0, o[d][m] = f, c[d][m] = 0, r[d].style[m] = f)
								}
						}
						i.setState({
							currentStyles: s,
							currentVelocities: a,
							mergedPropsStyles: r,
							lastIdealStyles: o,
							lastIdealVelocities: c
						})
					}, this.startAnimationIfNecessary = function() {
						i.unmounting || (i.animationID = u.default((function(e) {
							if (!i.unmounting) {
								var t = i.props.styles,
									r = "function" == typeof t ? t(h(i.state.mergedPropsStyles, i.unreadPropStyles, i.state.lastIdealStyles)) : t;
								if (function(e, t, r, n) {
										if (n.length !== t.length) return !1;
										for (var i = 0; i < n.length; i++)
											if (n[i].key !== t[i].key) return !1;
										for (i = 0; i < n.length; i++)
											if (!m.default(e[i], t[i].style, r[i])) return !1;
										return !0
									}(i.state.currentStyles, r, i.state.currentVelocities, i.state.mergedPropsStyles)) return i.animationID = null, void(i.accumulatedTime = 0);
								var n = e || l.default(),
									s = n - i.prevTime;
								if (i.prevTime = n, i.accumulatedTime = i.accumulatedTime + s, i.accumulatedTime > 10 * b && (i.accumulatedTime = 0), 0 === i.accumulatedTime) return i.animationID = null, void i.startAnimationIfNecessary();
								for (var a = (i.accumulatedTime - Math.floor(i.accumulatedTime / b) * b) / b, o = Math.floor(i.accumulatedTime / b), d = y(i.props.willEnter, i.props.willLeave, i.props.didLeave, i.state.mergedPropsStyles, r, i.state.currentStyles, i.state.currentVelocities, i.state.lastIdealStyles, i.state.lastIdealVelocities), u = d[0], f = d[1], p = d[2], _ = d[3], g = d[4], S = 0; S < u.length; S++) {
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
						r = e.styles,
						n = e.willEnter,
						i = e.willLeave,
						s = e.didLeave,
						c = "function" == typeof r ? r(t) : r,
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
						m = y(n, i, s, d, c, l, u, l, u),
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
				for (var n = {}, i = 0; i < e.length; i++) n[e[i].key] = i;
				var s = {};
				for (i = 0; i < t.length; i++) s[t[i].key] = i;
				var a = [];
				for (i = 0; i < t.length; i++) a[i] = t[i];
				for (i = 0; i < e.length; i++)
					if (!Object.prototype.hasOwnProperty.call(s, e[i].key)) {
						var o = r(i, e[i]);
						null != o && a.push(o)
					} return a.sort((function(e, r) {
					var i = s[e.key],
						a = s[r.key],
						o = n[e.key],
						c = n[r.key];
					if (null != i && null != a) return s[e.key] - s[r.key];
					if (null != o && null != c) return n[e.key] - n[r.key];
					if (null != i) {
						for (var d = 0; d < t.length; d++) {
							var l = t[d].key;
							if (Object.prototype.hasOwnProperty.call(n, l)) {
								if (i < s[l] && c > n[l]) return -1;
								if (i > s[l] && c < n[l]) return 1
							}
						}
						return 1
					}
					for (d = 0; d < t.length; d++) {
						l = t[d].key;
						if (Object.prototype.hasOwnProperty.call(n, l)) {
							if (a < s[l] && o > n[l]) return 1;
							if (a > s[l] && o < n[l]) return -1
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
			var i = r("./node_modules/react-motion/lib/Motion.js");
			t.Motion = n(i);
			var s = r("./node_modules/react-motion/lib/StaggeredMotion.js");
			t.StaggeredMotion = n(s);
			var a = r("./node_modules/react-motion/lib/TransitionMotion.js");
			t.TransitionMotion = n(a);
			var o = r("./node_modules/react-motion/lib/spring.js");
			t.spring = n(o);
			var c = r("./node_modules/react-motion/lib/presets.js");
			t.presets = n(c);
			var d = r("./node_modules/react-motion/lib/stripStyle.js");
			t.stripStyle = n(d);
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
						var i = "number" == typeof t[n] ? t[n] : t[n].val;
						if (e[n] !== i) return !1
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
				return n({}, o, t, {
					val: e
				})
			};
			var i, s = r("./node_modules/react-motion/lib/presets.js"),
				a = (i = s) && i.__esModule ? i : {
					default: i
				},
				o = n({}, a.default.noWobble, {
					precision: .01
				});
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stepper.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, r, i, s, a, o) {
				var c = r + (-s * (t - i) + -a * r) * e,
					d = t + c * e;
				if (Math.abs(c) < o && Math.abs(d - i) < o) return n[0] = i, n[1] = 0, n;
				return n[0] = d, n[1] = c, n
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
					var r, n, i;
					"undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
						return performance.now()
					} : null != t && t.hrtime ? (e.exports = function() {
						return (r() - i) / 1e6
					}, n = t.hrtime, i = (r = function() {
						var e;
						return 1e9 * (e = n())[0] + e[1]
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
			var n = r("./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function i() {}

			function s() {}
			s.resetWarningCache = i, e.exports = function() {
				function e(e, t, r, i, s, a) {
					if (a !== n) {
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
					checkPropTypes: s,
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
				return n
			}));
			const n = "custom"
		},
		"./src/reddit/actions/economics/claims/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return i
			}));
			const n = "ECONOMICS__CLAIMS__CLAIM_PENDING",
				i = "ECONOMICS__CLAIMS__CLAIM_COMPLETED"
		},
		"./src/reddit/actions/economics/me/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return s
			}));
			const n = "ECONOMICS__ME__ME_DATA_SUCCESS",
				i = "ECONOMICS__ME__POINTS_COPY_REQUESTED",
				s = "ECONOMICS__ME__POINTS_COPY_SUCCESS"
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return o
			}));
			const n = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				i = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "i", (function() {
				return u
			}));
			const n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/governance/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "g", (function() {
				return d
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
				return _
			})), r.d(t, "q", (function() {
				return g
			})), r.d(t, "r", (function() {
				return S
			})), r.d(t, "s", (function() {
				return v
			})), r.d(t, "t", (function() {
				return E
			})), r.d(t, "u", (function() {
				return O
			})), r.d(t, "v", (function() {
				return w
			})), r.d(t, "w", (function() {
				return P
			})), r.d(t, "x", (function() {
				return I
			}));
			const n = "GOVERNANCE__COMMUNITY_DETAILS_SUCCESS",
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
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, r) {
			"use strict";
			var n, i, s, a;

			function o(e) {
				const {
					platform: t,
					playerType: r,
					region: n,
					style: i
				} = e;
				return `https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_${i}/${n}_${t}_${r}_${i}.svg`
			}
			r.d(t, "a", (function() {
					return n
				})), r.d(t, "b", (function() {
					return i
				})), r.d(t, "c", (function() {
					return s
				})), r.d(t, "d", (function() {
					return o
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(n || (n = {})),
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
				i = r.n(n),
				s = r("./node_modules/react-motion/lib/react-motion.js"),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				l = r("./src/reddit/selectors/economics.ts"),
				u = r("./node_modules/fbt/lib/FbtPublic.js"),
				m = r("./node_modules/lodash/shuffle.js"),
				f = r.n(m),
				p = r("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				b = r("./src/reddit/models/Badge/index.ts"),
				h = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Badges/index.m.less"),
				y = r.n(h);
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
						const r = Math.round((v - t) / S / 2),
							n = this.badgesForLine[1][r % this.badgesForLine[1].length];
						this.setState({
							currentlySelected: n
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
					for (let r = 0; r < 3; r++) {
						t.length < (r + 2) * _ && (t = f()(this.props.styleBadges));
						const e = [];
						for (let n = 0; n < _; n++) e.push(t[(r * _ + n) % t.length]);
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
							color: null == n ? void 0 : n.color
						}
					}, n && i.a.createElement("img", {
						className: y.a.badgePreview,
						src: n.url
					}), r), i.a.createElement("footer", {
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
						innerRef: r,
						style: n
					} = e;
					return i.a.createElement("div", {
						className: y.a.row,
						ref: r,
						style: n
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
			var P = Object(a.b)(w)(E),
				I = r("./src/config.ts"),
				N = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Emojis/index.m.less"),
				C = r.n(N);
			const j = ["blink", "bush", "chug", "clappy", "confused", "cuddle", "dab", "dance", "default", "oof", "respect", "soon", "unfortunately", "wow"].map(e => `https://meta.redditmedia.com/img/fortnitebr/emotes/${e}-2x.gif`).concat("https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_destroy.gif");
			const T = Object(o.c)({
				subreddit: (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.subreddits.models[r]
				}
			});
			var A = Object(a.b)(T)((function(e) {
				const {
					className: t,
					subreddit: r
				} = e;
				return r ? i.a.createElement("article", {
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
				}, u.fbt._("Add r/{communityName} emote", [u.fbt._param("communityName", r.name)], {
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
			var M = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Gifs/index.m.less"),
				k = r.n(M);
			const x = (() => {
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
						t = await x(e),
						{
							imagesCol1: r,
							imagesCol2: n
						} = function(e) {
							const t = [],
								r = [];
							return e.data.map(e => {
								var t;
								return null === (t = e.images.fixed_width) || void 0 === t ? void 0 : t.url
							}).filter(e => e).forEach((e, n) => {
								n % 2 == 0 ? t.push(e) : r.push(e)
							}), {
								imagesCol1: t,
								imagesCol2: r
							}
						}(t);
					this.setState({
						imagesCol1: r,
						imagesCol2: n
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
						subredditId: r
					} = t;
					return e.subreddits.models[r]
				}
			});
			var L = Object(a.b)(R)(D),
				F = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.m.less"),
				B = r.n(F);
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
						meta: r,
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
					}), r.membershipAlt), !t && i.a.createElement(i.a.Fragment, null, i.a.createElement("article", {
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
					}, e => i.a.createElement(n.Fragment, null, e.map(e => i.a.createElement("div", {
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
			t.a = Object(a.b)(W)(V)
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return d
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/config.ts"),
				i = r("./node_modules/lodash/flattenDeep.js"),
				s = r.n(i),
				a = r("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const o = `${n.a.assetPath}/img/memberships/paywall/crown.gif`,
				c = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				d = new Set(s()(Object.keys(a.a).map(e => Object.keys(a.b).map(t => Object.keys(a.c).map(r => `${r}_${e}_${t}_badge`)))))
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/lib/permalinkToOverlayLocation/index.ts");

			function i(e, t) {
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

			function i(e) {
				return [...e].sort(n)
			}
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return i
			}))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "d", (function() {
				return o
			}));
			var n, i, s = r("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(n || (n = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(i || (i = {}));
			const a = {
					[n.Loyalty]: s.a.First,
					[n.Achievement]: s.a.Second,
					[n.Cosmetic]: void 0
				},
				o = e => e === s.a.First ? n.Loyalty : e === s.a.Second ? n.Achievement : n.Cosmetic
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, i, s, a;
			r.d(t, "b", (function() {
					return i
				})), r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
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
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, i = r("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(n || (n = {}));
			const s = {
				status: n.NotFetched
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.a:
						if (e.status === n.Fetched && e.data.stripe && e.data.stripe.sources) {
							const r = t.payload.cardId,
								{
									[r]: n,
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
						if (e.status === n.Fetched && e.data.braintree && e.data.braintree.sources) {
							const r = t.payload.sourceId,
								{
									[r]: n,
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
							error: t.payload.error, status: n.Failure
						};
					case i.c:
						return {
							data: t.payload, status: n.Fetched
						};
					case i.d:
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
			var n, i = r("./src/lib/constants/specialMembership.ts"),
				s = r("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				a = r("./src/reddit/helpers/economics/sortBadges.ts"),
				o = r("./src/reddit/models/Badge/index.ts"),
				c = r("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(n || (n = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, r, n) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(i => {
						let s;
						(s = e.placement ? e.placement === o.a.First ? n[c.a.Loyalty][i] : n[c.a.Achievement][i] : l(e) ? n[c.a.Cosmetic][c.c.MyBadges][i] : n[c.a.Cosmetic][c.c.Gallery][i]) && (l(e) ? r.has(e.id) && s.unlocked.push(e) : t.has(e.id) || s.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const r = parseInt(e.price || "0"),
						n = parseInt(t.price || "0");
					return r === n ? Object(a.b)(e, t) : r - n
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function f(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === i.a).map(m).sort((e, r) => {
					const n = t[e.id],
						i = t[r.id];
					return Object(a.b)(n, i)
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
				Object.keys(e.collections).forEach(r => {
					const n = e.collections[r],
						i = {
							description: n.description,
							highlight: n.extra && n.extra.style && n.extra.style.color,
							id: n.id,
							locked: [],
							title: n.title,
							unlocked: []
						};
					t[c.a.Loyalty][r] = {
						...i,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][r] = {
						...i,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][r] = {
						...i,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][r] = {
						...i,
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
							subredditId: r
						} = t.payload, i = e[r];
						return i && i.status === n.Fetched ? {
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
					case s.h: {
						const {
							subredditId: r
						} = t.payload, i = e[r];
						return i && i.status === n.Fetched ? {
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
					case s.i: {
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
				i = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/actions/economics/claims/constants.ts")),
				s = r("./src/reddit/actions/economics/me/constants.ts");
			const a = {};
			var o = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case s.a: {
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
				c = r("./src/reddit/actions/governance/constants.ts");
			const d = 15e4,
				l = {},
				u = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				};

			function m(e) {
				var t, r, n, i, s;
				const a = null === (t = e.walletProvider) || void 0 === t ? void 0 : t.extra,
					o = null == a ? void 0 : a.contracts,
					c = null == o ? void 0 : o.unlocked,
					l = null !== (n = null === (r = e.walletProvider) || void 0 === r ? void 0 : r.provider) && void 0 !== n ? n : e.provider,
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
							subredditId: r,
							meta: n
						} = t.payload;
						return {
							...e,
							[r]: m(n)
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
							subredditId: r,
							wallets: n
						} = t.payload, i = Object.keys(n).reduce((t, i) => {
							return {
								...t,
								[i]: {
									...e[i] || {},
									[r]: n[i]
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
			t.a = Object(n.c)({
				claims: o,
				points: f,
				publicWallets: b
			})
		},
		"./src/reddit/selectors/economics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return g
			})), r.d(t, "o", (function() {
				return S
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "x", (function() {
				return E
			})), r.d(t, "f", (function() {
				return O
			})), r.d(t, "i", (function() {
				return w
			})), r.d(t, "q", (function() {
				return P
			})), r.d(t, "h", (function() {
				return I
			})), r.d(t, "z", (function() {
				return N
			})), r.d(t, "l", (function() {
				return C
			})), r.d(t, "n", (function() {
				return j
			})), r.d(t, "e", (function() {
				return T
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "j", (function() {
				return M
			})), r.d(t, "p", (function() {
				return k
			})), r.d(t, "k", (function() {
				return R
			})), r.d(t, "r", (function() {
				return F
			})), r.d(t, "y", (function() {
				return B
			})), r.d(t, "u", (function() {
				return U
			})), r.d(t, "v", (function() {
				return G
			})), r.d(t, "b", (function() {
				return V
			})), r.d(t, "w", (function() {
				return W
			})), r.d(t, "s", (function() {
				return z
			})), r.d(t, "t", (function() {
				return Z
			})), r.d(t, "g", (function() {
				return X
			})), r.d(t, "m", (function() {
				return H
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/featureFlags/index.ts"),
				i = r("./src/reddit/helpers/economics/sortBadges.ts"),
				s = r("./src/reddit/helpers/richTextJson/index.ts"),
				a = r("./src/reddit/models/Badge/index.ts"),
				o = r("./src/reddit/models/Badge/managementPage.ts"),
				c = r("./src/reddit/models/Payments/index.ts"),
				d = r("./src/reddit/models/Product/index.ts"),
				l = r("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				u = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = r("./src/reddit/selectors/comments.ts"),
				f = r("./src/reddit/selectors/commentSelector.ts"),
				p = r("./src/reddit/selectors/experiments/econ/index.ts"),
				b = r("./src/reddit/selectors/experiments/mediaInComments.ts"),
				h = r("./src/reddit/selectors/gold/powerups/index.ts"),
				y = r("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const _ = [],
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
				S = (e, t) => {
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
						const r = S(e, t),
							n = Date.now();
						return r && n < r ? v.Subscribed : v.NotSubscribed
					}
					return v.DontKnow
				},
				O = (e, t) => {
					const r = e.user.account,
						n = e.economics.subredditPremium[t];
					if (r && n && n.status === u.a.Fetched) {
						const n = ((e.users.appliedBadges[r.id] || {})[t] || _).map(t => e.badges.models[t]).filter(Boolean);
						if (n) return {
							[o.a.Loyalty]: n.find(e => e.placement === a.a.First),
							[o.a.Achievement]: n.find(e => e.placement === a.a.Second),
							[o.a.Cosmetic]: n.find(e => !e.placement)
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
			const P = (e, t, r) => {
					var i;
					if (!n.d.spBadges(e)) return _;
					return w(null === (i = e.users.appliedBadges[r]) || void 0 === i ? void 0 : i[t], e.badges.models)
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

			function N(e, t) {
				const r = (e.economics.me.data.specialMemberships || {})[t];
				return !!(r && r.settings && r.settings.optOut)
			}

			function C(e, t) {
				const {
					badge: r,
					subredditId: n
				} = t, i = e.user.account ? e.user.account.id : void 0;
				if (Object(a.e)(r) && r.userId === i) return r;
				const s = e.badges.models,
					o = e.user.ownedBadges[n] || {},
					c = Object(a.e)(r) ? r.type : r.id;
				return Object.keys(o).map(e => s[e]).find(e => e && e.type === c)
			}

			function j(e, t, r, n) {
				const i = e.economics.subredditPremium[t];
				if (i && i.status === u.a.Fetched) {
					if (r === o.a.Loyalty || r === o.a.Achievement) return i.data.collections[r];
					if (r === o.a.Cosmetic && n) return i.data.collections[r][n]
				}
				return _
			}

			function T(e, t) {
				const r = j(e, t, o.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : _
			}

			function A(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === u.a.Fetched) {
					const e = r.data.collections[o.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(a.f)
				}
				return _
			}

			function M(e, t) {
				return j(e, t, o.a.Cosmetic, o.c.Gallery).some(e => e.locked.some(e => Object(a.f)(e) || !!e.price))
			}
			const k = e => {
				const t = [],
					r = e.economics.paymentSystems;
				if (r.status === l.a.Fetched && r.data.stripe && r.data.stripe.sources) {
					const e = r.data.stripe.sources;
					for (const r in e) {
						const n = e[r];
						t.push({
							display: `${n.brand} •••• ${n.last4}`,
							id: r,
							type: c.a.SavedStripe
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
					membershipAlt: "Supporter Membership"
				},
				R = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				L = (e, t) => {
					if (!t) return {};
					const r = D.prices;
					R(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const n = g(e, t);
					return n && n.price && n.currency && (r[n.currency] = n.price), r
				},
				F = (e, t) => {
					var r, n, i, s;
					const a = (null === (s = null === (i = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === n ? void 0 : n.points) || void 0 === i ? void 0 : i[t || ""]) || void 0 === s ? void 0 : s.nomenclature) || D;
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
					const r = e.user.ownedBadges[t] || {};
					return !!Object.keys(r).length
				},
				G = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				V = (e, t) => {
					let {
						subredditId: r
					} = t;
					if (!r) return;
					return e.economics.emotes[r]
				},
				W = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				z = (e, t, r) => {
					if (Object(p.f)(e)) return !!t && !!Object(h.a)(e, {
						subredditId: t
					});
					if (Object(h.g)(e, {
							subredditId: t
						})) return !0;
					const n = "replyToPost" !== r && Object(f.b)(e, {
						commentId: r
					});
					return !(!n || !Object(s.a)(n))
				},
				Z = (e, t, r) => {
					if (Object(b.a)(e)) return !(!t || !Object(m.C)(e, {
						subredditId: t
					})) || (!!Y(e, t) || !(!n.d.spGiphy(e) || !q(e, r)));
					if (!Object(y.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(h.h)(e, {
							subredditId: t
						})) return !0;
					if (q(e, r)) return !0;
					const i = n.d.spGiphy(e),
						s = W(e, t);
					return !!Y(e, t) || i && s
				},
				q = (e, t) => {
					const r = "replyToPost" !== t && Object(f.b)(e, {
						commentId: t
					});
					if (r && Object(s.b)(r)) return !0
				},
				Y = (e, t) => {
					const r = n.d.spGiphy(e),
						i = W(e, t);
					return r && i
				},
				X = (e, t, r) => {
					if (t) {
						const n = e.economics.banners.dismissedBanners[t];
						if (n && n.data) return !!n.data[r]
					}
				},
				H = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/products.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return s
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./src/reddit/models/Product/index.ts");
			const i = (e, t) => {
					const r = e.products.models[t];
					if (r && r.type === n.a.Badge) return r
				},
				s = (e, t) => {
					let {
						productId: r
					} = t;
					const n = e.products.models[r];
					if (n) {
						const t = n.subredditId,
							i = Object.keys(e.user.ownedBadges[t] || {}),
							s = e.badges.models,
							a = Date.now();
						let o = !1;
						return i.forEach(e => {
							const t = s[e];
							t && t.type === r && t.endsAt > a && (o = !0)
						}), o
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip.7b1ec2a31443ce35d8ac.js.map