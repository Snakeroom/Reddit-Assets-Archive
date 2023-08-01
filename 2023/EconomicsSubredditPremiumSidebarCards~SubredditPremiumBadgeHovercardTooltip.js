// https://www.redditstatic.com/desktop2x/EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip.0ee4ad57a05415280446.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"], {
		"./node_modules/lodash/_arrayShuffle.js": function(e, t, r) {
			var i = r("./node_modules/lodash/_copyArray.js"),
				n = r("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e) {
				return n(i(e))
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(e, t, r) {
			var i = r("./node_modules/lodash/_shuffleSelf.js"),
				n = r("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return i(n(e))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, r) {
			var i = r("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var r = -1,
					n = e.length,
					a = n - 1;
				for (t = void 0 === t ? n : t; ++r < t;) {
					var s = i(r, a),
						o = e[s];
					e[s] = e[r], e[r] = o
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/flattenDeep.js": function(e, t, r) {
			var i = r("./node_modules/lodash/_baseFlatten.js"),
				n = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? i(e, n) : []
			}
		},
		"./node_modules/lodash/shuffle.js": function(e, t, r) {
			var i = r("./node_modules/lodash/_arrayShuffle.js"),
				n = r("./node_modules/lodash/_baseShuffle.js"),
				a = r("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (a(e) ? i : n)(e)
			}
		},
		"./node_modules/react-motion/lib/Motion.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0;
			var i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
					}
					return e
				},
				n = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var i = t[r];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function(t, r, i) {
						return r && e(t.prototype, r), i && e(t, i), t
					}
				}();

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var s = a(r("./node_modules/react-motion/lib/mapToZero.js")),
				o = a(r("./node_modules/react-motion/lib/stripStyle.js")),
				l = a(r("./node_modules/react-motion/lib/stepper.js")),
				d = a(r("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				c = a(r("./node_modules/raf/index.js")),
				u = a(r("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				m = a(r("./node_modules/react/index.js")),
				f = a(r("./node_modules/react-motion/node_modules/prop-types/index.js")),
				p = 1e3 / 60,
				b = function(e) {
					function t(r) {
						var n = this;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), e.call(this, r), this.wasAnimating = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyle = null, this.clearUnreadPropStyle = function(e) {
							var t = !1,
								r = n.state,
								a = r.currentStyle,
								s = r.currentVelocity,
								o = r.lastIdealStyle,
								l = r.lastIdealVelocity;
							for (var d in e)
								if (Object.prototype.hasOwnProperty.call(e, d)) {
									var c = e[d];
									"number" == typeof c && (t || (t = !0, a = i({}, a), s = i({}, s), o = i({}, o), l = i({}, l)), a[d] = c, s[d] = 0, o[d] = c, l[d] = 0)
								} t && n.setState({
								currentStyle: a,
								currentVelocity: s,
								lastIdealStyle: o,
								lastIdealVelocity: l
							})
						}, this.startAnimationIfNecessary = function() {
							n.animationID = c.default((function(e) {
								var t = n.props.style;
								if (u.default(n.state.currentStyle, t, n.state.currentVelocity)) return n.wasAnimating && n.props.onRest && n.props.onRest(), n.animationID = null, n.wasAnimating = !1, void(n.accumulatedTime = 0);
								n.wasAnimating = !0;
								var r = e || d.default(),
									i = r - n.prevTime;
								if (n.prevTime = r, n.accumulatedTime = n.accumulatedTime + i, n.accumulatedTime > 10 * p && (n.accumulatedTime = 0), 0 === n.accumulatedTime) return n.animationID = null, void n.startAnimationIfNecessary();
								var a = (n.accumulatedTime - Math.floor(n.accumulatedTime / p) * p) / p,
									s = Math.floor(n.accumulatedTime / p),
									o = {},
									c = {},
									m = {},
									f = {};
								for (var b in t)
									if (Object.prototype.hasOwnProperty.call(t, b)) {
										var h = t[b];
										if ("number" == typeof h) m[b] = h, f[b] = 0, o[b] = h, c[b] = 0;
										else {
											for (var y = n.state.lastIdealStyle[b], g = n.state.lastIdealVelocity[b], v = 0; v < s; v++) {
												var _ = l.default(p / 1e3, y, g, h.val, h.stiffness, h.damping, h.precision);
												y = _[0], g = _[1]
											}
											var w = l.default(p / 1e3, y, g, h.val, h.stiffness, h.damping, h.precision),
												S = w[0],
												j = w[1];
											m[b] = y + (S - y) * a, f[b] = g + (j - g) * a, o[b] = y, c[b] = g
										}
									} n.animationID = null, n.accumulatedTime -= s * p, n.setState({
									currentStyle: m,
									currentVelocity: f,
									lastIdealStyle: o,
									lastIdealVelocity: c
								}), n.unreadPropStyle = null, n.startAnimationIfNecessary()
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
					}(t, e), n(t, null, [{
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
							i = t || o.default(r),
							n = s.default(i);
						return {
							currentStyle: i,
							currentVelocity: n,
							lastIdealStyle: i,
							lastIdealVelocity: n
						}
					}, t.prototype.componentDidMount = function() {
						this.prevTime = d.default(), this.startAnimationIfNecessary()
					}, t.prototype.componentWillReceiveProps = function(e) {
						null != this.unreadPropStyle && this.clearUnreadPropStyle(this.unreadPropStyle), this.unreadPropStyle = e.style, null == this.animationID && (this.prevTime = d.default(), this.startAnimationIfNecessary())
					}, t.prototype.componentWillUnmount = function() {
						null != this.animationID && (c.default.cancel(this.animationID), this.animationID = null)
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
			var i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
					}
					return e
				},
				n = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var i = t[r];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function(t, r, i) {
						return r && e(t.prototype, r), i && e(t, i), t
					}
				}();

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var s = a(r("./node_modules/react-motion/lib/mapToZero.js")),
				o = a(r("./node_modules/react-motion/lib/stripStyle.js")),
				l = a(r("./node_modules/react-motion/lib/stepper.js")),
				d = a(r("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				c = a(r("./node_modules/raf/index.js")),
				u = a(r("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				m = a(r("./node_modules/react/index.js")),
				f = a(r("./node_modules/react-motion/node_modules/prop-types/index.js")),
				p = 1e3 / 60;
			var b = function(e) {
				function t(r) {
					var n = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, r), this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = n.state, r = t.currentStyles, a = t.currentVelocities, s = t.lastIdealStyles, o = t.lastIdealVelocities, l = !1, d = 0; d < e.length; d++) {
							var c = e[d],
								u = !1;
							for (var m in c)
								if (Object.prototype.hasOwnProperty.call(c, m)) {
									var f = c[m];
									"number" == typeof f && (u || (u = !0, l = !0, r[d] = i({}, r[d]), a[d] = i({}, a[d]), s[d] = i({}, s[d]), o[d] = i({}, o[d])), r[d][m] = f, a[d][m] = 0, s[d][m] = f, o[d][m] = 0)
								}
						}
						l && n.setState({
							currentStyles: r,
							currentVelocities: a,
							lastIdealStyles: s,
							lastIdealVelocities: o
						})
					}, this.startAnimationIfNecessary = function() {
						n.animationID = c.default((function(e) {
							var t = n.props.styles(n.state.lastIdealStyles);
							if (function(e, t, r) {
									for (var i = 0; i < e.length; i++)
										if (!u.default(e[i], t[i], r[i])) return !1;
									return !0
								}(n.state.currentStyles, t, n.state.currentVelocities)) return n.animationID = null, void(n.accumulatedTime = 0);
							var r = e || d.default(),
								i = r - n.prevTime;
							if (n.prevTime = r, n.accumulatedTime = n.accumulatedTime + i, n.accumulatedTime > 10 * p && (n.accumulatedTime = 0), 0 === n.accumulatedTime) return n.animationID = null, void n.startAnimationIfNecessary();
							for (var a = (n.accumulatedTime - Math.floor(n.accumulatedTime / p) * p) / p, s = Math.floor(n.accumulatedTime / p), o = [], c = [], m = [], f = [], b = 0; b < t.length; b++) {
								var h = t[b],
									y = {},
									g = {},
									v = {},
									_ = {};
								for (var w in h)
									if (Object.prototype.hasOwnProperty.call(h, w)) {
										var S = h[w];
										if ("number" == typeof S) y[w] = S, g[w] = 0, v[w] = S, _[w] = 0;
										else {
											for (var j = n.state.lastIdealStyles[b][w], P = n.state.lastIdealVelocities[b][w], I = 0; I < s; I++) {
												var O = l.default(p / 1e3, j, P, S.val, S.stiffness, S.damping, S.precision);
												j = O[0], P = O[1]
											}
											var x = l.default(p / 1e3, j, P, S.val, S.stiffness, S.damping, S.precision),
												E = x[0],
												k = x[1];
											y[w] = j + (E - j) * a, g[w] = P + (k - P) * a, v[w] = j, _[w] = P
										}
									} m[b] = y, f[b] = g, o[b] = v, c[b] = _
							}
							n.animationID = null, n.accumulatedTime -= s * p, n.setState({
								currentStyles: m,
								currentVelocities: f,
								lastIdealStyles: o,
								lastIdealVelocities: c
							}), n.unreadPropStyles = null, n.startAnimationIfNecessary()
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
				}(t, e), n(t, null, [{
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
						i = t || r().map(o.default),
						n = i.map((function(e) {
							return s.default(e)
						}));
					return {
						currentStyles: i,
						currentVelocities: n,
						lastIdealStyles: i,
						lastIdealVelocities: n
					}
				}, t.prototype.componentDidMount = function() {
					this.prevTime = d.default(), this.startAnimationIfNecessary()
				}, t.prototype.componentWillReceiveProps = function(e) {
					null != this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles), this.unreadPropStyles = e.styles(this.state.lastIdealStyles), null == this.animationID && (this.prevTime = d.default(), this.startAnimationIfNecessary())
				}, t.prototype.componentWillUnmount = function() {
					null != this.animationID && (c.default.cancel(this.animationID), this.animationID = null)
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
			var i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
					}
					return e
				},
				n = function() {
					function e(e, t) {
						for (var r = 0; r < t.length; r++) {
							var i = t[r];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function(t, r, i) {
						return r && e(t.prototype, r), i && e(t, i), t
					}
				}();

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var s = a(r("./node_modules/react-motion/lib/mapToZero.js")),
				o = a(r("./node_modules/react-motion/lib/stripStyle.js")),
				l = a(r("./node_modules/react-motion/lib/stepper.js")),
				d = a(r("./node_modules/react-motion/lib/mergeDiff.js")),
				c = a(r("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				u = a(r("./node_modules/raf/index.js")),
				m = a(r("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				f = a(r("./node_modules/react/index.js")),
				p = a(r("./node_modules/react-motion/node_modules/prop-types/index.js")),
				b = 1e3 / 60;

			function h(e, t, r) {
				var i = t;
				return null == i ? e.map((function(e, t) {
					return {
						key: e.key,
						data: e.data,
						style: r[t]
					}
				})) : e.map((function(e, t) {
					for (var n = 0; n < i.length; n++)
						if (i[n].key === e.key) return {
							key: i[n].key,
							data: i[n].data,
							style: r[t]
						};
					return {
						key: e.key,
						data: e.data,
						style: r[t]
					}
				}))
			}

			function y(e, t, r, i, n, a, o, l, c) {
				for (var u = d.default(i, n, (function(e, i) {
						var n = t(i);
						return null == n ? (r({
							key: i.key,
							data: i.data
						}), null) : m.default(a[e], n, o[e]) ? (r({
							key: i.key,
							data: i.data
						}), null) : {
							key: i.key,
							data: i.data,
							style: n
						}
					})), f = [], p = [], b = [], h = [], y = 0; y < u.length; y++) {
					for (var g = u[y], v = null, _ = 0; _ < i.length; _++)
						if (i[_].key === g.key) {
							v = _;
							break
						} if (null == v) {
						var w = e(g);
						f[y] = w, b[y] = w;
						var S = s.default(g.style);
						p[y] = S, h[y] = S
					} else f[y] = a[v], b[y] = l[v], p[y] = o[v], h[y] = c[v]
				}
				return [u, f, p, b, h]
			}
			var g = function(e) {
				function t(r) {
					var n = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, r), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = y(n.props.willEnter, n.props.willLeave, n.props.didLeave, n.state.mergedPropsStyles, e, n.state.currentStyles, n.state.currentVelocities, n.state.lastIdealStyles, n.state.lastIdealVelocities), r = t[0], a = t[1], s = t[2], o = t[3], l = t[4], d = 0; d < e.length; d++) {
							var c = e[d].style,
								u = !1;
							for (var m in c)
								if (Object.prototype.hasOwnProperty.call(c, m)) {
									var f = c[m];
									"number" == typeof f && (u || (u = !0, a[d] = i({}, a[d]), s[d] = i({}, s[d]), o[d] = i({}, o[d]), l[d] = i({}, l[d]), r[d] = {
										key: r[d].key,
										data: r[d].data,
										style: i({}, r[d].style)
									}), a[d][m] = f, s[d][m] = 0, o[d][m] = f, l[d][m] = 0, r[d].style[m] = f)
								}
						}
						n.setState({
							currentStyles: a,
							currentVelocities: s,
							mergedPropsStyles: r,
							lastIdealStyles: o,
							lastIdealVelocities: l
						})
					}, this.startAnimationIfNecessary = function() {
						n.unmounting || (n.animationID = u.default((function(e) {
							if (!n.unmounting) {
								var t = n.props.styles,
									r = "function" == typeof t ? t(h(n.state.mergedPropsStyles, n.unreadPropStyles, n.state.lastIdealStyles)) : t;
								if (function(e, t, r, i) {
										if (i.length !== t.length) return !1;
										for (var n = 0; n < i.length; n++)
											if (i[n].key !== t[n].key) return !1;
										for (n = 0; n < i.length; n++)
											if (!m.default(e[n], t[n].style, r[n])) return !1;
										return !0
									}(n.state.currentStyles, r, n.state.currentVelocities, n.state.mergedPropsStyles)) return n.animationID = null, void(n.accumulatedTime = 0);
								var i = e || c.default(),
									a = i - n.prevTime;
								if (n.prevTime = i, n.accumulatedTime = n.accumulatedTime + a, n.accumulatedTime > 10 * b && (n.accumulatedTime = 0), 0 === n.accumulatedTime) return n.animationID = null, void n.startAnimationIfNecessary();
								for (var s = (n.accumulatedTime - Math.floor(n.accumulatedTime / b) * b) / b, o = Math.floor(n.accumulatedTime / b), d = y(n.props.willEnter, n.props.willLeave, n.props.didLeave, n.state.mergedPropsStyles, r, n.state.currentStyles, n.state.currentVelocities, n.state.lastIdealStyles, n.state.lastIdealVelocities), u = d[0], f = d[1], p = d[2], g = d[3], v = d[4], _ = 0; _ < u.length; _++) {
									var w = u[_].style,
										S = {},
										j = {},
										P = {},
										I = {};
									for (var O in w)
										if (Object.prototype.hasOwnProperty.call(w, O)) {
											var x = w[O];
											if ("number" == typeof x) S[O] = x, j[O] = 0, P[O] = x, I[O] = 0;
											else {
												for (var E = g[_][O], k = v[_][O], T = 0; T < o; T++) {
													var N = l.default(b / 1e3, E, k, x.val, x.stiffness, x.damping, x.precision);
													E = N[0], k = N[1]
												}
												var C = l.default(b / 1e3, E, k, x.val, x.stiffness, x.damping, x.precision),
													D = C[0],
													A = C[1];
												S[O] = E + (D - E) * s, j[O] = k + (A - k) * s, P[O] = E, I[O] = k
											}
										} g[_] = P, v[_] = I, f[_] = S, p[_] = j
								}
								n.animationID = null, n.accumulatedTime -= o * b, n.setState({
									currentStyles: f,
									currentVelocities: p,
									lastIdealStyles: g,
									lastIdealVelocities: v,
									mergedPropsStyles: u
								}), n.unreadPropStyles = null, n.startAnimationIfNecessary()
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
				}(t, e), n(t, null, [{
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
						i = e.willEnter,
						n = e.willLeave,
						a = e.didLeave,
						l = "function" == typeof r ? r(t) : r,
						d = void 0;
					d = null == t ? l : t.map((function(e) {
						for (var t = 0; t < l.length; t++)
							if (l[t].key === e.key) return l[t];
						return e
					}));
					var c = null == t ? l.map((function(e) {
							return o.default(e.style)
						})) : t.map((function(e) {
							return o.default(e.style)
						})),
						u = null == t ? l.map((function(e) {
							return s.default(e.style)
						})) : t.map((function(e) {
							return s.default(e.style)
						})),
						m = y(i, n, a, d, l, c, u, c, u),
						f = m[0];
					return {
						currentStyles: m[1],
						currentVelocities: m[2],
						lastIdealStyles: m[3],
						lastIdealVelocities: m[4],
						mergedPropsStyles: f
					}
				}, t.prototype.componentDidMount = function() {
					this.prevTime = c.default(), this.startAnimationIfNecessary()
				}, t.prototype.componentWillReceiveProps = function(e) {
					this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles);
					var t = e.styles;
					this.unreadPropStyles = "function" == typeof t ? t(h(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles)) : t, null == this.animationID && (this.prevTime = c.default(), this.startAnimationIfNecessary())
				}, t.prototype.componentWillUnmount = function() {
					this.unmounting = !0, null != this.animationID && (u.default.cancel(this.animationID), this.animationID = null)
				}, t.prototype.render = function() {
					var e = h(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles),
						t = this.props.children(e);
					return t && f.default.Children.only(t)
				}, t
			}(f.default.Component);
			t.default = g, e.exports = t.default
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
				for (var i = {}, n = 0; n < e.length; n++) i[e[n].key] = n;
				var a = {};
				for (n = 0; n < t.length; n++) a[t[n].key] = n;
				var s = [];
				for (n = 0; n < t.length; n++) s[n] = t[n];
				for (n = 0; n < e.length; n++)
					if (!Object.prototype.hasOwnProperty.call(a, e[n].key)) {
						var o = r(n, e[n]);
						null != o && s.push(o)
					} return s.sort((function(e, r) {
					var n = a[e.key],
						s = a[r.key],
						o = i[e.key],
						l = i[r.key];
					if (null != n && null != s) return a[e.key] - a[r.key];
					if (null != o && null != l) return i[e.key] - i[r.key];
					if (null != n) {
						for (var d = 0; d < t.length; d++) {
							var c = t[d].key;
							if (Object.prototype.hasOwnProperty.call(i, c)) {
								if (n < a[c] && l > i[c]) return -1;
								if (n > a[c] && l < i[c]) return 1
							}
						}
						return 1
					}
					for (d = 0; d < t.length; d++) {
						c = t[d].key;
						if (Object.prototype.hasOwnProperty.call(i, c)) {
							if (s < a[c] && o > i[c]) return 1;
							if (s > a[c] && o < i[c]) return -1
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

			function i(e) {
				return e && e.__esModule ? e.default : e
			}
			t.__esModule = !0;
			var n = r("./node_modules/react-motion/lib/Motion.js");
			t.Motion = i(n);
			var a = r("./node_modules/react-motion/lib/StaggeredMotion.js");
			t.StaggeredMotion = i(a);
			var s = r("./node_modules/react-motion/lib/TransitionMotion.js");
			t.TransitionMotion = i(s);
			var o = r("./node_modules/react-motion/lib/spring.js");
			t.spring = i(o);
			var l = r("./node_modules/react-motion/lib/presets.js");
			t.presets = i(l);
			var d = r("./node_modules/react-motion/lib/stripStyle.js");
			t.stripStyle = i(d);
			var c = r("./node_modules/react-motion/lib/reorderKeys.js");
			t.reorderKeys = i(c)
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
				for (var i in t)
					if (Object.prototype.hasOwnProperty.call(t, i)) {
						if (0 !== r[i]) return !1;
						var n = "number" == typeof t[i] ? t[i] : t[i].val;
						if (e[i] !== n) return !1
					} return !0
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/spring.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0;
			var i = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = arguments[t];
					for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
				}
				return e
			};
			t.default = function(e, t) {
				return i({}, o, t, {
					val: e
				})
			};
			var n, a = r("./node_modules/react-motion/lib/presets.js"),
				s = (n = a) && n.__esModule ? n : {
					default: n
				},
				o = i({}, s.default.noWobble, {
					precision: .01
				});
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stepper.js": function(e, t, r) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, r, n, a, s, o) {
				var l = r + (-a * (t - n) + -s * r) * e,
					d = t + l * e;
				if (Math.abs(l) < o && Math.abs(d - n) < o) return i[0] = n, i[1] = 0, i;
				return i[0] = d, i[1] = l, i
			};
			var i = [0, 0];
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
					var r, i, n;
					"undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
						return performance.now()
					} : null != t && t.hrtime ? (e.exports = function() {
						return (r() - n) / 1e6
					}, i = t.hrtime, n = (r = function() {
						var e;
						return 1e9 * (e = i())[0] + e[1]
					})()) : Date.now ? (e.exports = function() {
						return Date.now() - n
					}, n = Date.now()) : (e.exports = function() {
						return (new Date).getTime() - n
					}, n = (new Date).getTime())
				}).call(this)
			}).call(this, r("./node_modules/process/browser.js"))
		},
		"./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, r) {
			"use strict";
			var i = r("./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function n() {}

			function a() {}
			a.resetWarningCache = n, e.exports = function() {
				function e(e, t, r, n, a, s) {
					if (s !== i) {
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
					checkPropTypes: a,
					resetWarningCache: n
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
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, r) {
			"use strict";
			var i, n, a, s;

			function o(e) {
				const {
					platform: t,
					playerType: r,
					region: i,
					style: n
				} = e;
				return `https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_${n}/${i}_${t}_${r}_${n}.svg`
			}
			r.d(t, "a", (function() {
					return i
				})), r.d(t, "b", (function() {
					return n
				})), r.d(t, "c", (function() {
					return a
				})), r.d(t, "d", (function() {
					return o
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(i || (i = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(n || (n = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(a || (a = {})),
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
			var i = r("./node_modules/react/index.js"),
				n = r.n(i),
				a = r("./node_modules/react-motion/lib/react-motion.js"),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				l = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				c = r("./src/reddit/selectors/economics.ts"),
				u = r("./node_modules/fbt/lib/FbtPublic.js"),
				m = r("./node_modules/lodash/shuffle.js"),
				f = r.n(m),
				p = r("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				b = r("./src/reddit/models/Badge/index.ts"),
				h = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Badges/index.m.less"),
				y = r.n(h);
			const g = 10,
				v = 500,
				_ = 30,
				w = 132;
			class S extends n.a.Component {
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
						const r = Math.round((w - t) / _ / 2),
							i = this.badgesForLine[1][r % this.badgesForLine[1].length];
						this.setState({
							currentlySelected: i
						})
					}, v)
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
						t.length < (r + 2) * g && (t = f()(this.props.styleBadges));
						const e = [];
						for (let i = 0; i < g; i++) e.push(t[(r * g + i) % t.length]);
						this.badgesForLine.push(e)
					}
				}
				render() {
					const {
						className: e,
						subreddit: t,
						username: r
					} = this.props, {
						currentlySelected: i
					} = this.state;
					if (!t) return null;
					const a = this.badgesForLine;
					return n.a.createElement("article", {
						className: Object(l.a)(y.a.container, e)
					}, n.a.createElement("div", {
						className: y.a.background
					}), n.a.createElement("div", {
						className: y.a.content
					}, n.a.createElement("header", {
						className: y.a.title
					}, u.fbt._("badges", null, {
						hk: "4bW4l"
					})), a.length && n.a.createElement("div", {
						className: y.a.rows
					}, n.a.createElement(j, {
						badges: a[0],
						style: {
							animationDuration: "20s"
						}
					}), n.a.createElement(j, {
						badges: a[1],
						innerRef: this.setRowRef,
						style: {
							animationDirection: "reverse",
							animationDuration: "25s"
						}
					}), n.a.createElement(j, {
						badges: a[2],
						style: {
							animationDuration: "30s"
						}
					})), n.a.createElement("div", {
						className: y.a.username,
						style: {
							color: null == i ? void 0 : i.color
						}
					}, i && n.a.createElement("img", {
						className: y.a.badgePreview,
						src: i.url
					}), r), n.a.createElement("footer", {
						className: y.a.explanation
					}, u.fbt._("Style your username with a badge and color", null, {
						hk: "2bRpdH"
					})), n.a.createElement("div", {
						className: y.a.selection
					}, n.a.createElement(p.a, {
						className: y.a.check
					}))))
				}
			}
			const j = e => {
					let {
						badges: t,
						innerRef: r,
						style: i
					} = e;
					return n.a.createElement("div", {
						className: y.a.row,
						ref: r,
						style: i
					}, t.map(e => n.a.createElement("img", {
						key: e.url,
						src: e.url,
						className: y.a.rowBadge
					})), t.map(e => n.a.createElement("img", {
						key: e.url + 2,
						src: e.url,
						className: y.a.rowBadge
					})))
				},
				P = Object(o.c)({
					styleBadges: (e, t) => {
						let {
							subredditId: r
						} = t;
						return Object(c.d)(e, r).filter(e => {
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
			var I = Object(s.b)(P)(S),
				O = r("./src/config.ts"),
				x = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Emojis/index.m.less"),
				E = r.n(x);
			const k = ["blink", "bush", "chug", "clappy", "confused", "cuddle", "dab", "dance", "default", "oof", "respect", "soon", "unfortunately", "wow"].map(e => `https://meta.redditmedia.com/img/fortnitebr/emotes/${e}-2x.gif`).concat("https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_destroy.gif");
			const T = Object(o.c)({
				subreddit: (e, t) => {
					let {
						subredditId: r
					} = t;
					return e.subreddits.models[r]
				}
			});
			var N = Object(s.b)(T)((function(e) {
				const {
					className: t,
					subreddit: r
				} = e;
				return r ? n.a.createElement("article", {
					className: Object(l.a)(E.a.container, t)
				}, n.a.createElement("div", {
					className: E.a.background
				}), n.a.createElement("div", {
					className: E.a.content
				}, n.a.createElement("header", {
					className: E.a.title
				}, u.fbt._("emotes", null, {
					hk: "1VLDec"
				})), n.a.createElement("div", {
					className: E.a.example
				}, n.a.createElement("img", {
					className: E.a.drawer,
					src: `${O.a.assetPath}/img/memberships/emoji-drawer.png`
				}), n.a.createElement("div", {
					className: E.a.emojisTitle
				}, u.fbt._("Add r/{communityName} emote", [u.fbt._param("communityName", r.name)], {
					hk: "1pL2rY"
				})), n.a.createElement("div", {
					className: E.a.emojisContainer
				}, n.a.createElement("div", {
					className: E.a.emojis
				}, k.map(e => n.a.createElement("img", {
					className: E.a.emoji,
					key: e,
					src: e
				}))), n.a.createElement("div", {
					className: E.a.overflow
				}))), n.a.createElement("footer", {
					className: E.a.explanation
				}, u.fbt._("Get access to premium animated emotes", null, {
					hk: "1jTE2m"
				})))) : null
			}));
			var C = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/Gifs/index.m.less"),
				D = r.n(C);
			const A = (() => {
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
			class M extends n.a.Component {
				constructor() {
					super(...arguments), this.state = {
						imagesCol1: [],
						imagesCol2: []
					}
				}
				async componentDidMount() {
					const e = this.props.subreddit && this.props.subreddit.title || "reddit",
						t = await A(e),
						{
							imagesCol1: r,
							imagesCol2: i
						} = function(e) {
							const t = [],
								r = [];
							return e.data.map(e => {
								var t;
								return null === (t = e.images.fixed_width) || void 0 === t ? void 0 : t.url
							}).filter(e => e).forEach((e, i) => {
								i % 2 == 0 ? t.push(e) : r.push(e)
							}), {
								imagesCol1: t,
								imagesCol2: r
							}
						}(t);
					this.setState({
						imagesCol1: r,
						imagesCol2: i
					})
				}
				render() {
					const {
						className: e,
						subreddit: t
					} = this.props;
					return t ? n.a.createElement("article", {
						className: Object(l.a)(D.a.container, e)
					}, n.a.createElement("div", {
						className: D.a.background
					}), n.a.createElement("div", {
						className: D.a.content
					}, n.a.createElement("header", {
						className: D.a.title
					}, u.fbt._("gifs in comments", null, {
						hk: "41wG7A"
					})), n.a.createElement("div", {
						className: D.a.example
					}, n.a.createElement("img", {
						className: D.a.drawer,
						src: `${O.a.assetPath}/img/memberships/gif-drawer.png`
					}), n.a.createElement("div", {
						className: D.a.imagesContainer
					}, n.a.createElement("div", {
						className: D.a.images
					}, n.a.createElement("div", {
						className: D.a.imageCol
					}, this.state.imagesCol1.map(e => n.a.createElement("img", {
						className: D.a.image,
						key: e,
						src: e
					}))), n.a.createElement("div", {
						className: D.a.imageCol
					}, this.state.imagesCol2.map(e => n.a.createElement("img", {
						className: D.a.image,
						key: e,
						src: e
					})))), n.a.createElement("div", {
						className: D.a.overflow
					}))), n.a.createElement("footer", {
						className: D.a.explanation
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
			var B = Object(s.b)(R)(M),
				F = r("./src/reddit/components/Economics/SubredditPremium/SidebarCards/MembershipCard/PrePurchase/SubscriberBenefits/index.m.less"),
				L = r.n(F);
			const W = 1e4,
				z = 110;
			class V extends n.a.Component {
				constructor(e) {
					super(e), this.gotoNextSlide = () => {
						this.timeoutRef && clearInterval(this.timeoutRef), this.setState({
							currentSlideIdx: (this.state.currentSlideIdx + 1) % this.slides.length
						}), this.timeoutRef = window.setTimeout(this.gotoNextSlide, W)
					}, this.timeoutRef = null, this.state = {
						currentSlideIdx: 0
					}, this.slides = function(e) {
						switch (e) {
							case "t5_3oeyf":
							case "t5_socj8":
								return [I, N, B];
							default:
								return [I, B]
						}
					}(e.subredditId)
				}
				componentDidMount() {
					this.timeoutRef = window.setTimeout(this.gotoNextSlide, W)
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
						currentSlideIdx: c
					} = this.state;
					return o ? n.a.createElement("div", {
						className: e
					}, n.a.createElement("header", {
						className: L.a.title
					}, n.a.createElement("img", {
						className: L.a.crown,
						src: d.a
					}), r.membershipAlt), !t && n.a.createElement(n.a.Fragment, null, n.a.createElement("article", {
						className: L.a.benefits
					}, n.a.createElement(a.TransitionMotion, {
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
							key: `slide-${c}`,
							data: {
								Component: this.slides[c],
								index: c
							},
							style: {
								left: Object(a.spring)(0)
							}
						}],
						willEnter: () => ({
							left: z
						}),
						willLeave: () => ({
							left: Object(a.spring)(-z)
						})
					}, e => n.a.createElement(i.Fragment, null, e.map(e => n.a.createElement("div", {
						className: L.a.slide,
						key: e.key,
						style: {
							left: `${e.style.left}%`
						},
						onClick: this.gotoNextSlide
					}, n.a.createElement(e.data.Component, {
						subredditId: s
					})))))), n.a.createElement("footer", {
						className: L.a.indicators
					}, this.slides.map((e, t) => n.a.createElement("div", {
						className: Object(l.a)(L.a.indicator, {
							[L.a.indicatorSelected]: t === c
						}),
						key: t,
						onClick: () => this.setState({
							currentSlideIdx: t
						})
					}))))) : null
				}
			}
			const U = Object(o.c)({
				meta: (e, t) => {
					let {
						subredditId: r
					} = t;
					return Object(c.r)(e, r)
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
			t.a = Object(s.b)(U)(V)
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return d
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = r("./src/config.ts"),
				n = r("./node_modules/lodash/flattenDeep.js"),
				a = r.n(n),
				s = r("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const o = `${i.a.assetPath}/img/memberships/paywall/crown.gif`,
				l = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				d = new Set(a()(Object.keys(s.a).map(e => Object.keys(s.b).map(t => Object.keys(s.c).map(r => `${r}_${e}_${t}_badge`)))))
		},
		"./src/reddit/helpers/economics/membershipPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var i = r("./src/lib/permalinkToOverlayLocation/index.ts");

			function n(e, t) {
				return Object(i.a)(`/web/special-membership/${e}?corr=${t}`)
			}
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var i, n, a, s;
			r.d(t, "b", (function() {
					return n
				})), r.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(i || (i = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(n || (n = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(a || (a = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(s || (s = {}))
		},
		"./src/reddit/selectors/economics.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return g
			})), r.d(t, "o", (function() {
				return v
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "x", (function() {
				return w
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "q", (function() {
				return P
			})), r.d(t, "h", (function() {
				return I
			})), r.d(t, "z", (function() {
				return O
			})), r.d(t, "l", (function() {
				return x
			})), r.d(t, "n", (function() {
				return E
			})), r.d(t, "e", (function() {
				return k
			})), r.d(t, "d", (function() {
				return T
			})), r.d(t, "j", (function() {
				return N
			})), r.d(t, "p", (function() {
				return C
			})), r.d(t, "k", (function() {
				return M
			})), r.d(t, "r", (function() {
				return B
			})), r.d(t, "y", (function() {
				return F
			})), r.d(t, "u", (function() {
				return L
			})), r.d(t, "v", (function() {
				return W
			})), r.d(t, "b", (function() {
				return z
			})), r.d(t, "w", (function() {
				return V
			})), r.d(t, "s", (function() {
				return U
			})), r.d(t, "t", (function() {
				return G
			})), r.d(t, "g", (function() {
				return X
			})), r.d(t, "m", (function() {
				return K
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = r("./src/reddit/featureFlags/index.ts"),
				n = r("./src/reddit/helpers/economics/sortBadges.ts"),
				a = r("./src/reddit/helpers/richTextJson/index.ts"),
				s = r("./src/reddit/models/Badge/index.ts"),
				o = r("./src/reddit/models/Badge/managementPage.ts"),
				l = r("./src/reddit/models/Payments/index.ts"),
				d = r("./src/reddit/models/Product/index.ts"),
				c = r("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				u = r("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				m = r("./src/reddit/selectors/comments.ts"),
				f = r("./src/reddit/selectors/commentSelector.ts"),
				p = r("./src/reddit/selectors/experiments/mediaInComments.ts"),
				b = r("./src/reddit/selectors/gold/powerups/index.ts"),
				h = r("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const y = [],
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
				v = (e, t) => {
					const r = g(e, t);
					return r && r.endsAt || null
				};
			var _;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(_ || (_ = {}));
			const w = (e, t) => {
					const r = e.economics.subredditPremium[t];
					if (r && r.status === u.a.Fetched) {
						const r = v(e, t),
							i = Date.now();
						return r && i < r ? _.Subscribed : _.NotSubscribed
					}
					return _.DontKnow
				},
				S = (e, t) => {
					const r = e.user.account,
						i = e.economics.subredditPremium[t];
					if (r && i && i.status === u.a.Fetched) {
						const i = ((e.users.appliedBadges[r.id] || {})[t] || y).map(t => e.badges.models[t]).filter(Boolean);
						if (i) return {
							[o.a.Loyalty]: i.find(e => e.placement === s.a.First),
							[o.a.Achievement]: i.find(e => e.placement === s.a.Second),
							[o.a.Cosmetic]: i.find(e => !e.placement)
						}
					}
					return {
						[o.a.Loyalty]: void 0,
						[o.a.Achievement]: void 0,
						[o.a.Cosmetic]: void 0
					}
				};

			function j(e, t) {
				return (null == e ? void 0 : e.length) ? Object(n.a)(e.map(e => t[e]).filter(Boolean)) : y
			}
			const P = (e, t, r) => {
					var n;
					if (!i.d.spBadges(e)) return y;
					return j(null === (n = e.users.appliedBadges[r]) || void 0 === n ? void 0 : n[t], e.badges.models)
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

			function O(e, t) {
				const r = (e.economics.me.data.specialMemberships || {})[t];
				return !!(r && r.settings && r.settings.optOut)
			}

			function x(e, t) {
				const {
					badge: r,
					subredditId: i
				} = t, n = e.user.account ? e.user.account.id : void 0;
				if (Object(s.e)(r) && r.userId === n) return r;
				const a = e.badges.models,
					o = e.user.ownedBadges[i] || {},
					l = Object(s.e)(r) ? r.type : r.id;
				return Object.keys(o).map(e => a[e]).find(e => e && e.type === l)
			}

			function E(e, t, r, i) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === u.a.Fetched) {
					if (r === o.a.Loyalty || r === o.a.Achievement) return n.data.collections[r];
					if (r === o.a.Cosmetic && i) return n.data.collections[r][i]
				}
				return y
			}

			function k(e, t) {
				const r = E(e, t, o.a.Loyalty).find(e => "membership" === e.id);
				return r ? [].concat(r.locked, r.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : y
			}

			function T(e, t) {
				const r = e.economics.subredditPremium[t];
				if (r && r.status === u.a.Fetched) {
					const e = r.data.collections[o.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(s.f)
				}
				return y
			}

			function N(e, t) {
				return E(e, t, o.a.Cosmetic, o.c.Gallery).some(e => e.locked.some(e => Object(s.f)(e) || !!e.price))
			}
			const C = e => {
				const t = [],
					r = e.economics.paymentSystems;
				if (r.status === c.a.Fetched && r.data.stripe && r.data.stripe.sources) {
					const e = r.data.stripe.sources;
					for (const r in e) {
						const i = e[r];
						t.push({
							display: `${i.brand} •••• ${i.last4}`,
							id: r,
							type: l.a.SavedStripe
						})
					}
				}
				if (r.status === c.a.Fetched && r.data.braintree && r.data.braintree.sources) {
					const e = r.data.braintree.sources;
					for (const r in e) {
						const i = e[r];
						"PayPal" === i.brand && t.push({
							display: "PayPal",
							id: i.id,
							type: l.a.SavedPayPal
						})
					}
				}
				return t
			};
			var D;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(D || (D = {}));
			const A = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Special Membership"
				},
				M = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				R = (e, t) => {
					if (!t) return {};
					const r = A.prices;
					M(e, t).forEach(e => {
						e.price && e.currency && (r[e.currency] = e.price)
					});
					const i = g(e, t);
					return i && i.price && i.currency && (r[i.currency] = i.price), r
				},
				B = (e, t) => {
					var r, i, n, a;
					const s = (null === (a = null === (n = null === (i = null === (r = e.features) || void 0 === r ? void 0 : r.crypto) || void 0 === i ? void 0 : i.points) || void 0 === n ? void 0 : n[t || ""]) || void 0 === a ? void 0 : a.nomenclature) || A;
					return {
						prices: R(e, t),
						member: s.member || A.member,
						memberPlural: s.memberPlural || A.memberPlural,
						memberAlt: s.memberAlt || A.memberAlt,
						memberAltPlural: s.memberAltPlural || A.memberAltPlural,
						membership: s.membership || A.membership,
						membershipAlt: s.membershipAlt || A.membershipAlt
					}
				},
				F = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === c.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				L = (e, t) => {
					const r = e.user.ownedBadges[t] || {};
					return !!Object.keys(r).length
				},
				W = e => {
					const t = e.economics.paymentSystems;
					return t.status === c.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				z = (e, t) => {
					let {
						subredditId: r
					} = t;
					if (!r) return;
					return e.economics.emotes[r]
				},
				V = (e, t) => {
					const r = t && e.economics.gifs[t];
					return !!r && r.hasGifProduct
				},
				U = (e, t) => !!t && !!Object(b.a)(e, {
					subredditId: t
				}),
				G = (e, t, r) => {
					if (Object(p.b)(e)) return !(!t || !Object(m.C)(e, {
						subredditId: t
					})) || (!!q(e, t) || !(!i.d.spGiphy(e) || !Z(e, r)));
					if (!Object(h.a)(e, {
							subredditId: t
						})) return !1;
					if (Object(b.f)(e, {
							subredditId: t
						})) return !0;
					if (Z(e, r)) return !0;
					const n = i.d.spGiphy(e),
						a = V(e, t);
					return !!q(e, t) || n && a
				},
				Z = (e, t) => {
					const r = "replyToPost" !== t && Object(f.c)(e, {
						commentId: t
					});
					if (r && Object(a.a)(r)) return !0
				},
				q = (e, t) => {
					const r = i.d.spGiphy(e),
						n = V(e, t);
					return r && n
				},
				X = (e, t, r) => {
					if (t) {
						const i = e.economics.banners.dismissedBanners[t];
						if (i && i.data) return !!i.data[r]
					}
				},
				K = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/gold/powerups/benefitSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var i = r("./src/reddit/models/Gold/Powerups/index.ts"),
				n = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/actions/gold/constants.ts");
			const s = {};
			var o = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
						t = arguments.length > 1 ? arguments[1] : void 0;
					var r, i;
					switch (t.type) {
						case a.mb:
						case a.nb: {
							const {
								benefitStatuses: i,
								subredditId: n
							} = t.payload;
							if (!i) return e;
							const a = null !== (r = e[n]) && void 0 !== r ? r : {},
								s = {};
							return i.forEach(e => {
								let {
									benefit: t,
									isEnabled: r
								} = e;
								s[t] = r
							}), {
								...e,
								[n]: {
									...a,
									...s
								}
							}
						}
						case a.L: {
							const {
								benefitStatuses: r,
								subredditId: n
							} = t.payload, a = null !== (i = e[n]) && void 0 !== i ? i : {}, s = {};
							return r.forEach(e => {
								let {
									benefit: t,
									isEnabled: r
								} = e;
								s[t] = r
							}), {
								...e,
								[n]: {
									...a,
									...s
								}
							}
						}
						default:
							return e
					}
				},
				l = r("./node_modules/reselect/es/index.js");
			Object(n.a)({
				features: {
					powerupsBenefitSettings: o
				}
			});
			const d = (e, t) => {
					let {
						subredditId: r
					} = t;
					return r ? e.features.powerupsBenefitSettings[r] : null
				},
				c = (e => Object(l.a)(d, t => !!(null == t ? void 0 : t[e])))(i.a.CommentsWithGifs)
		},
		"./src/reddit/selectors/products.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = r("./src/reddit/models/Product/index.ts");
			const n = (e, t) => {
					const r = e.products.models[t];
					if (r && r.type === i.a.Badge) return r
				},
				a = (e, t) => {
					let {
						productId: r
					} = t;
					const i = e.products.models[r];
					if (i) {
						const t = i.subredditId,
							n = Object.keys(e.user.ownedBadges[t] || {}),
							a = e.badges.models,
							s = Date.now();
						let o = !1;
						return n.forEach(e => {
							const t = a[e];
							t && t.type === r && t.endsAt > s && (o = !0)
						}), o
					}
					return !1
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip.0ee4ad57a05415280446.js.map