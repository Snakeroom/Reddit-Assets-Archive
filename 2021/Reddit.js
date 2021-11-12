// https://www.redditstatic.com/desktop2x/Reddit.2bdb71a4c7bc5fd2c38d.js
// Retrieved at 11/11/2021, 7:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit"], {
		"./assets/fonts/BentonSans/font.less": function(e, t, n) {},
		"./assets/fonts/VCR/font.less": function(e, t, n) {},
		"./assets/fonts/redesignIcon2020/redesignFont2020.css": function(e, t, n) {},
		"./node_modules/@r/google-tag-manager/compiled.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.setup = t.trigger = t.getLocation = void 0;
			var s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				},
				o = n("./node_modules/@r/google-tag-manager/node_modules/uuid/index.js"),
				r = function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
					return t.default = e, t
				}(n("./node_modules/@r/frames/compiled.js"));
			var a = "gtm-" + (0, o.v4)(),
				i = !1,
				c = [],
				l = function() {
					var e = document.getElementById(a);
					return e && e.contentWindow ? e : null
				},
				d = t.getLocation = function() {
					return {
						href: location.href,
						hostname: location.hostname,
						origin: location.origin,
						pathname: location.pathname || "/",
						search: location.search.replace(/^\?/, ""),
						hash: location.hash.replace(/^#/, "")
					}
				},
				u = t.trigger = function(e, t) {
					var n = l();
					n && i ? (t && r.postMessage(n.contentWindow, "data.gtm", t), r.postMessage(n.contentWindow, "event.gtm", {
						event: e
					})) : function(e, t) {
						c.push({
							eventName: e,
							payload: t
						})
					}(e, t)
				},
				m = function() {
					if (l() && i) {
						var e = c.slice();
						c = [], e.forEach((function(e) {
							var t = e.eventName,
								n = e.payload;
							return u(t, n)
						}))
					}
				};
			t.setup = function(e) {
				var t = e.containerId,
					n = e.jailUrl,
					o = e.payload;
				if (t)
					if (n) {
						r.listen("gtm"), r.receiveMessageOnce("loaded.gtm", (function() {
							i = !0, r.stopListening("gtm")
						}));
						var c = document.createElement("iframe");
						c.style.display = "none", c.id = a, c.name = JSON.stringify(s({
							referrer: document.referrer
						}, d(), o)), c.src = n + "?id=" + t, c.onload = m, document.body.appendChild(c)
					} else console.warn("GTM#setup: No `jailUrl` specified, skipping.");
				else console.warn("GTM#setup: No `containerId` specified, skipping.")
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/index.js": function(e, t, n) {
			var s = n("./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js"),
				o = n("./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js"),
				r = o;
			r.v1 = s, r.v4 = o, e.exports = r
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js": function(e, t) {
			for (var n = [], s = 0; s < 256; ++s) n[s] = (s + 256).toString(16).substr(1);
			e.exports = function(e, t) {
				var s = t || 0,
					o = n;
				return o[e[s++]] + o[e[s++]] + o[e[s++]] + o[e[s++]] + "-" + o[e[s++]] + o[e[s++]] + "-" + o[e[s++]] + o[e[s++]] + "-" + o[e[s++]] + o[e[s++]] + "-" + o[e[s++]] + o[e[s++]] + o[e[s++]] + o[e[s++]] + o[e[s++]] + o[e[s++]]
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js": function(e, t, n) {
			(function(t) {
				var n, s = t.crypto || t.msCrypto;
				if (s && s.getRandomValues) {
					var o = new Uint8Array(16);
					n = function() {
						return s.getRandomValues(o), o
					}
				}
				if (!n) {
					var r = new Array(16);
					n = function() {
						for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255;
						return r
					}
				}
				e.exports = n
			}).call(this, n("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v1.js": function(e, t, n) {
			var s = n("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				o = n("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js"),
				r = s(),
				a = [1 | r[0], r[1], r[2], r[3], r[4], r[5]],
				i = 16383 & (r[6] << 8 | r[7]),
				c = 0,
				l = 0;
			e.exports = function(e, t, n) {
				var s = t && n || 0,
					r = t || [],
					d = void 0 !== (e = e || {}).clockseq ? e.clockseq : i,
					u = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					m = void 0 !== e.nsecs ? e.nsecs : l + 1,
					p = u - c + (m - l) / 1e4;
				if (p < 0 && void 0 === e.clockseq && (d = d + 1 & 16383), (p < 0 || u > c) && void 0 === e.nsecs && (m = 0), m >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				c = u, l = m, i = d;
				var b = (1e4 * (268435455 & (u += 122192928e5)) + m) % 4294967296;
				r[s++] = b >>> 24 & 255, r[s++] = b >>> 16 & 255, r[s++] = b >>> 8 & 255, r[s++] = 255 & b;
				var h = u / 4294967296 * 1e4 & 268435455;
				r[s++] = h >>> 8 & 255, r[s++] = 255 & h, r[s++] = h >>> 24 & 15 | 16, r[s++] = h >>> 16 & 255, r[s++] = d >>> 8 | 128, r[s++] = 255 & d;
				for (var f = e.node || a, g = 0; g < 6; ++g) r[s + g] = f[g];
				return t || o(r)
			}
		},
		"./node_modules/@r/google-tag-manager/node_modules/uuid/v4.js": function(e, t, n) {
			var s = n("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				o = n("./node_modules/@r/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js");
			e.exports = function(e, t, n) {
				var r = t && n || 0;
				"string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null);
				var a = (e = e || {}).random || (e.rng || s)();
				if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
					for (var i = 0; i < 16; ++i) t[r + i] = a[i];
				return t || o(a)
			}
		},
		"./node_modules/react-motion/lib/Motion.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0;
			var s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				},
				o = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var s = t[n];
							s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
						}
					}
					return function(t, n, s) {
						return n && e(t.prototype, n), s && e(t, s), t
					}
				}();

			function r(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var a = r(n("./node_modules/react-motion/lib/mapToZero.js")),
				i = r(n("./node_modules/react-motion/lib/stripStyle.js")),
				c = r(n("./node_modules/react-motion/lib/stepper.js")),
				l = r(n("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				d = r(n("./node_modules/raf/index.js")),
				u = r(n("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				m = r(n("./node_modules/react/index.js")),
				p = r(n("./node_modules/react-motion/node_modules/prop-types/index.js")),
				b = 1e3 / 60,
				h = function(e) {
					function t(n) {
						var o = this;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), e.call(this, n), this.wasAnimating = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyle = null, this.clearUnreadPropStyle = function(e) {
							var t = !1,
								n = o.state,
								r = n.currentStyle,
								a = n.currentVelocity,
								i = n.lastIdealStyle,
								c = n.lastIdealVelocity;
							for (var l in e)
								if (Object.prototype.hasOwnProperty.call(e, l)) {
									var d = e[l];
									"number" == typeof d && (t || (t = !0, r = s({}, r), a = s({}, a), i = s({}, i), c = s({}, c)), r[l] = d, a[l] = 0, i[l] = d, c[l] = 0)
								} t && o.setState({
								currentStyle: r,
								currentVelocity: a,
								lastIdealStyle: i,
								lastIdealVelocity: c
							})
						}, this.startAnimationIfNecessary = function() {
							o.animationID = d.default((function(e) {
								var t = o.props.style;
								if (u.default(o.state.currentStyle, t, o.state.currentVelocity)) return o.wasAnimating && o.props.onRest && o.props.onRest(), o.animationID = null, o.wasAnimating = !1, void(o.accumulatedTime = 0);
								o.wasAnimating = !0;
								var n = e || l.default(),
									s = n - o.prevTime;
								if (o.prevTime = n, o.accumulatedTime = o.accumulatedTime + s, o.accumulatedTime > 10 * b && (o.accumulatedTime = 0), 0 === o.accumulatedTime) return o.animationID = null, void o.startAnimationIfNecessary();
								var r = (o.accumulatedTime - Math.floor(o.accumulatedTime / b) * b) / b,
									a = Math.floor(o.accumulatedTime / b),
									i = {},
									d = {},
									m = {},
									p = {};
								for (var h in t)
									if (Object.prototype.hasOwnProperty.call(t, h)) {
										var f = t[h];
										if ("number" == typeof f) m[h] = f, p[h] = 0, i[h] = f, d[h] = 0;
										else {
											for (var g = o.state.lastIdealStyle[h], v = o.state.lastIdealVelocity[h], y = 0; y < a; y++) {
												var O = c.default(b / 1e3, g, v, f.val, f.stiffness, f.damping, f.precision);
												g = O[0], v = O[1]
											}
											var x = c.default(b / 1e3, g, v, f.val, f.stiffness, f.damping, f.precision),
												C = x[0],
												E = x[1];
											m[h] = g + (C - g) * r, p[h] = v + (E - v) * r, i[h] = g, d[h] = v
										}
									} o.animationID = null, o.accumulatedTime -= a * b, o.setState({
									currentStyle: m,
									currentVelocity: p,
									lastIdealStyle: i,
									lastIdealVelocity: d
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
							s = t || i.default(n),
							o = a.default(s);
						return {
							currentStyle: s,
							currentVelocity: o,
							lastIdealStyle: s,
							lastIdealVelocity: o
						}
					}, t.prototype.componentDidMount = function() {
						this.prevTime = l.default(), this.startAnimationIfNecessary()
					}, t.prototype.componentWillReceiveProps = function(e) {
						null != this.unreadPropStyle && this.clearUnreadPropStyle(this.unreadPropStyle), this.unreadPropStyle = e.style, null == this.animationID && (this.prevTime = l.default(), this.startAnimationIfNecessary())
					}, t.prototype.componentWillUnmount = function() {
						null != this.animationID && (d.default.cancel(this.animationID), this.animationID = null)
					}, t.prototype.render = function() {
						var e = this.props.children(this.state.currentStyle);
						return e && m.default.Children.only(e)
					}, t
				}(m.default.Component);
			t.default = h, e.exports = t.default
		},
		"./node_modules/react-motion/lib/StaggeredMotion.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0;
			var s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				},
				o = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var s = t[n];
							s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
						}
					}
					return function(t, n, s) {
						return n && e(t.prototype, n), s && e(t, s), t
					}
				}();

			function r(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var a = r(n("./node_modules/react-motion/lib/mapToZero.js")),
				i = r(n("./node_modules/react-motion/lib/stripStyle.js")),
				c = r(n("./node_modules/react-motion/lib/stepper.js")),
				l = r(n("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				d = r(n("./node_modules/raf/index.js")),
				u = r(n("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				m = r(n("./node_modules/react/index.js")),
				p = r(n("./node_modules/react-motion/node_modules/prop-types/index.js")),
				b = 1e3 / 60;
			var h = function(e) {
				function t(n) {
					var o = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, n), this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = o.state, n = t.currentStyles, r = t.currentVelocities, a = t.lastIdealStyles, i = t.lastIdealVelocities, c = !1, l = 0; l < e.length; l++) {
							var d = e[l],
								u = !1;
							for (var m in d)
								if (Object.prototype.hasOwnProperty.call(d, m)) {
									var p = d[m];
									"number" == typeof p && (u || (u = !0, c = !0, n[l] = s({}, n[l]), r[l] = s({}, r[l]), a[l] = s({}, a[l]), i[l] = s({}, i[l])), n[l][m] = p, r[l][m] = 0, a[l][m] = p, i[l][m] = 0)
								}
						}
						c && o.setState({
							currentStyles: n,
							currentVelocities: r,
							lastIdealStyles: a,
							lastIdealVelocities: i
						})
					}, this.startAnimationIfNecessary = function() {
						o.animationID = d.default((function(e) {
							var t = o.props.styles(o.state.lastIdealStyles);
							if (function(e, t, n) {
									for (var s = 0; s < e.length; s++)
										if (!u.default(e[s], t[s], n[s])) return !1;
									return !0
								}(o.state.currentStyles, t, o.state.currentVelocities)) return o.animationID = null, void(o.accumulatedTime = 0);
							var n = e || l.default(),
								s = n - o.prevTime;
							if (o.prevTime = n, o.accumulatedTime = o.accumulatedTime + s, o.accumulatedTime > 10 * b && (o.accumulatedTime = 0), 0 === o.accumulatedTime) return o.animationID = null, void o.startAnimationIfNecessary();
							for (var r = (o.accumulatedTime - Math.floor(o.accumulatedTime / b) * b) / b, a = Math.floor(o.accumulatedTime / b), i = [], d = [], m = [], p = [], h = 0; h < t.length; h++) {
								var f = t[h],
									g = {},
									v = {},
									y = {},
									O = {};
								for (var x in f)
									if (Object.prototype.hasOwnProperty.call(f, x)) {
										var C = f[x];
										if ("number" == typeof C) g[x] = C, v[x] = 0, y[x] = C, O[x] = 0;
										else {
											for (var E = o.state.lastIdealStyles[h][x], P = o.state.lastIdealVelocities[h][x], j = 0; j < a; j++) {
												var _ = c.default(b / 1e3, E, P, C.val, C.stiffness, C.damping, C.precision);
												E = _[0], P = _[1]
											}
											var S = c.default(b / 1e3, E, P, C.val, C.stiffness, C.damping, C.precision),
												k = S[0],
												w = S[1];
											g[x] = E + (k - E) * r, v[x] = P + (w - P) * r, y[x] = E, O[x] = P
										}
									} m[h] = g, p[h] = v, i[h] = y, d[h] = O
							}
							o.animationID = null, o.accumulatedTime -= a * b, o.setState({
								currentStyles: m,
								currentVelocities: p,
								lastIdealStyles: i,
								lastIdealVelocities: d
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
						s = t || n().map(i.default),
						o = s.map((function(e) {
							return a.default(e)
						}));
					return {
						currentStyles: s,
						currentVelocities: o,
						lastIdealStyles: s,
						lastIdealVelocities: o
					}
				}, t.prototype.componentDidMount = function() {
					this.prevTime = l.default(), this.startAnimationIfNecessary()
				}, t.prototype.componentWillReceiveProps = function(e) {
					null != this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles), this.unreadPropStyles = e.styles(this.state.lastIdealStyles), null == this.animationID && (this.prevTime = l.default(), this.startAnimationIfNecessary())
				}, t.prototype.componentWillUnmount = function() {
					null != this.animationID && (d.default.cancel(this.animationID), this.animationID = null)
				}, t.prototype.render = function() {
					var e = this.props.children(this.state.currentStyles);
					return e && m.default.Children.only(e)
				}, t
			}(m.default.Component);
			t.default = h, e.exports = t.default
		},
		"./node_modules/react-motion/lib/TransitionMotion.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0;
			var s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				},
				o = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var s = t[n];
							s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
						}
					}
					return function(t, n, s) {
						return n && e(t.prototype, n), s && e(t, s), t
					}
				}();

			function r(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var a = r(n("./node_modules/react-motion/lib/mapToZero.js")),
				i = r(n("./node_modules/react-motion/lib/stripStyle.js")),
				c = r(n("./node_modules/react-motion/lib/stepper.js")),
				l = r(n("./node_modules/react-motion/lib/mergeDiff.js")),
				d = r(n("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				u = r(n("./node_modules/raf/index.js")),
				m = r(n("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				p = r(n("./node_modules/react/index.js")),
				b = r(n("./node_modules/react-motion/node_modules/prop-types/index.js")),
				h = 1e3 / 60;

			function f(e, t, n) {
				var s = t;
				return null == s ? e.map((function(e, t) {
					return {
						key: e.key,
						data: e.data,
						style: n[t]
					}
				})) : e.map((function(e, t) {
					for (var o = 0; o < s.length; o++)
						if (s[o].key === e.key) return {
							key: s[o].key,
							data: s[o].data,
							style: n[t]
						};
					return {
						key: e.key,
						data: e.data,
						style: n[t]
					}
				}))
			}

			function g(e, t, n, s, o, r, i, c, d) {
				for (var u = l.default(s, o, (function(e, s) {
						var o = t(s);
						return null == o ? (n({
							key: s.key,
							data: s.data
						}), null) : m.default(r[e], o, i[e]) ? (n({
							key: s.key,
							data: s.data
						}), null) : {
							key: s.key,
							data: s.data,
							style: o
						}
					})), p = [], b = [], h = [], f = [], g = 0; g < u.length; g++) {
					for (var v = u[g], y = null, O = 0; O < s.length; O++)
						if (s[O].key === v.key) {
							y = O;
							break
						} if (null == y) {
						var x = e(v);
						p[g] = x, h[g] = x;
						var C = a.default(v.style);
						b[g] = C, f[g] = C
					} else p[g] = r[y], h[g] = c[y], b[g] = i[y], f[g] = d[y]
				}
				return [u, p, b, h, f]
			}
			var v = function(e) {
				function t(n) {
					var o = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, n), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = g(o.props.willEnter, o.props.willLeave, o.props.didLeave, o.state.mergedPropsStyles, e, o.state.currentStyles, o.state.currentVelocities, o.state.lastIdealStyles, o.state.lastIdealVelocities), n = t[0], r = t[1], a = t[2], i = t[3], c = t[4], l = 0; l < e.length; l++) {
							var d = e[l].style,
								u = !1;
							for (var m in d)
								if (Object.prototype.hasOwnProperty.call(d, m)) {
									var p = d[m];
									"number" == typeof p && (u || (u = !0, r[l] = s({}, r[l]), a[l] = s({}, a[l]), i[l] = s({}, i[l]), c[l] = s({}, c[l]), n[l] = {
										key: n[l].key,
										data: n[l].data,
										style: s({}, n[l].style)
									}), r[l][m] = p, a[l][m] = 0, i[l][m] = p, c[l][m] = 0, n[l].style[m] = p)
								}
						}
						o.setState({
							currentStyles: r,
							currentVelocities: a,
							mergedPropsStyles: n,
							lastIdealStyles: i,
							lastIdealVelocities: c
						})
					}, this.startAnimationIfNecessary = function() {
						o.unmounting || (o.animationID = u.default((function(e) {
							if (!o.unmounting) {
								var t = o.props.styles,
									n = "function" == typeof t ? t(f(o.state.mergedPropsStyles, o.unreadPropStyles, o.state.lastIdealStyles)) : t;
								if (function(e, t, n, s) {
										if (s.length !== t.length) return !1;
										for (var o = 0; o < s.length; o++)
											if (s[o].key !== t[o].key) return !1;
										for (o = 0; o < s.length; o++)
											if (!m.default(e[o], t[o].style, n[o])) return !1;
										return !0
									}(o.state.currentStyles, n, o.state.currentVelocities, o.state.mergedPropsStyles)) return o.animationID = null, void(o.accumulatedTime = 0);
								var s = e || d.default(),
									r = s - o.prevTime;
								if (o.prevTime = s, o.accumulatedTime = o.accumulatedTime + r, o.accumulatedTime > 10 * h && (o.accumulatedTime = 0), 0 === o.accumulatedTime) return o.animationID = null, void o.startAnimationIfNecessary();
								for (var a = (o.accumulatedTime - Math.floor(o.accumulatedTime / h) * h) / h, i = Math.floor(o.accumulatedTime / h), l = g(o.props.willEnter, o.props.willLeave, o.props.didLeave, o.state.mergedPropsStyles, n, o.state.currentStyles, o.state.currentVelocities, o.state.lastIdealStyles, o.state.lastIdealVelocities), u = l[0], p = l[1], b = l[2], v = l[3], y = l[4], O = 0; O < u.length; O++) {
									var x = u[O].style,
										C = {},
										E = {},
										P = {},
										j = {};
									for (var _ in x)
										if (Object.prototype.hasOwnProperty.call(x, _)) {
											var S = x[_];
											if ("number" == typeof S) C[_] = S, E[_] = 0, P[_] = S, j[_] = 0;
											else {
												for (var k = v[O][_], w = y[O][_], M = 0; M < i; M++) {
													var N = c.default(h / 1e3, k, w, S.val, S.stiffness, S.damping, S.precision);
													k = N[0], w = N[1]
												}
												var I = c.default(h / 1e3, k, w, S.val, S.stiffness, S.damping, S.precision),
													T = I[0],
													A = I[1];
												C[_] = k + (T - k) * a, E[_] = w + (A - w) * a, P[_] = k, j[_] = w
											}
										} v[O] = P, y[O] = j, p[O] = C, b[O] = E
								}
								o.animationID = null, o.accumulatedTime -= i * h, o.setState({
									currentStyles: p,
									currentVelocities: b,
									lastIdealStyles: v,
									lastIdealVelocities: y,
									mergedPropsStyles: u
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
						s = e.willEnter,
						o = e.willLeave,
						r = e.didLeave,
						c = "function" == typeof n ? n(t) : n,
						l = void 0;
					l = null == t ? c : t.map((function(e) {
						for (var t = 0; t < c.length; t++)
							if (c[t].key === e.key) return c[t];
						return e
					}));
					var d = null == t ? c.map((function(e) {
							return i.default(e.style)
						})) : t.map((function(e) {
							return i.default(e.style)
						})),
						u = null == t ? c.map((function(e) {
							return a.default(e.style)
						})) : t.map((function(e) {
							return a.default(e.style)
						})),
						m = g(s, o, r, l, c, d, u, d, u),
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
					this.unreadPropStyles = "function" == typeof t ? t(f(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles)) : t, null == this.animationID && (this.prevTime = d.default(), this.startAnimationIfNecessary())
				}, t.prototype.componentWillUnmount = function() {
					this.unmounting = !0, null != this.animationID && (u.default.cancel(this.animationID), this.animationID = null)
				}, t.prototype.render = function() {
					var e = f(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles),
						t = this.props.children(e);
					return t && p.default.Children.only(t)
				}, t
			}(p.default.Component);
			t.default = v, e.exports = t.default
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
				for (var s = {}, o = 0; o < e.length; o++) s[e[o].key] = o;
				var r = {};
				for (o = 0; o < t.length; o++) r[t[o].key] = o;
				var a = [];
				for (o = 0; o < t.length; o++) a[o] = t[o];
				for (o = 0; o < e.length; o++)
					if (!Object.prototype.hasOwnProperty.call(r, e[o].key)) {
						var i = n(o, e[o]);
						null != i && a.push(i)
					} return a.sort((function(e, n) {
					var o = r[e.key],
						a = r[n.key],
						i = s[e.key],
						c = s[n.key];
					if (null != o && null != a) return r[e.key] - r[n.key];
					if (null != i && null != c) return s[e.key] - s[n.key];
					if (null != o) {
						for (var l = 0; l < t.length; l++) {
							var d = t[l].key;
							if (Object.prototype.hasOwnProperty.call(s, d)) {
								if (o < r[d] && c > s[d]) return -1;
								if (o > r[d] && c < s[d]) return 1
							}
						}
						return 1
					}
					for (l = 0; l < t.length; l++) {
						d = t[l].key;
						if (Object.prototype.hasOwnProperty.call(s, d)) {
							if (a < r[d] && i > s[d]) return 1;
							if (a > r[d] && i < s[d]) return -1
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

			function s(e) {
				return e && e.__esModule ? e.default : e
			}
			t.__esModule = !0;
			var o = n("./node_modules/react-motion/lib/Motion.js");
			t.Motion = s(o);
			var r = n("./node_modules/react-motion/lib/StaggeredMotion.js");
			t.StaggeredMotion = s(r);
			var a = n("./node_modules/react-motion/lib/TransitionMotion.js");
			t.TransitionMotion = s(a);
			var i = n("./node_modules/react-motion/lib/spring.js");
			t.spring = s(i);
			var c = n("./node_modules/react-motion/lib/presets.js");
			t.presets = s(c);
			var l = n("./node_modules/react-motion/lib/stripStyle.js");
			t.stripStyle = s(l);
			var d = n("./node_modules/react-motion/lib/reorderKeys.js");
			t.reorderKeys = s(d)
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
				for (var s in t)
					if (Object.prototype.hasOwnProperty.call(t, s)) {
						if (0 !== n[s]) return !1;
						var o = "number" == typeof t[s] ? t[s] : t[s].val;
						if (e[s] !== o) return !1
					} return !0
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/spring.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0;
			var s = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
				}
				return e
			};
			t.default = function(e, t) {
				return s({}, i, t, {
					val: e
				})
			};
			var o, r = n("./node_modules/react-motion/lib/presets.js"),
				a = (o = r) && o.__esModule ? o : {
					default: o
				},
				i = s({}, a.default.noWobble, {
					precision: .01
				});
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stepper.js": function(e, t, n) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, n, o, r, a, i) {
				var c = n + (-r * (t - o) + -a * n) * e,
					l = t + c * e;
				if (Math.abs(c) < i && Math.abs(l - o) < i) return s[0] = o, s[1] = 0, s;
				return s[0] = l, s[1] = c, s
			};
			var s = [0, 0];
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
					var n, s, o;
					"undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
						return performance.now()
					} : null != t && t.hrtime ? (e.exports = function() {
						return (n() - o) / 1e6
					}, s = t.hrtime, o = (n = function() {
						var e;
						return 1e9 * (e = s())[0] + e[1]
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
			var s = n("./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}

			function r() {}
			r.resetWarningCache = o, e.exports = function() {
				function e(e, t, n, o, r, a) {
					if (a !== s) {
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
					checkPropTypes: r,
					resetWarningCache: o
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
		"./src/chat/helpers/dom.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			const s = e => t => {
					if (t.preventDefault(), e && "function" == typeof e) return e(t)
				},
				o = e => t => {
					if (t.preventDefault(), t.stopPropagation(), e && "function" == typeof e) return e(t)
				}
		},
		"./src/higherOrderComponents/asModal/index.m.less": function(e, t, n) {
			e.exports = {
				overlay: "_1DK52RbaamLOWw5UPaht_S",
				mIsVisible: "_1acwN_tUhJ8w-n7oCp-Aw3",
				modal: "_2Bejocqb-InO8686E2ehf"
			}
		},
		"./src/higherOrderComponents/asModal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/FocusTrap/index.ts"),
				i = n("./src/lib/portal/index.tsx"),
				c = n("./src/reddit/actions/shortcuts/utils.ts"),
				l = n("./src/reddit/constants/shortcuts.ts"),
				d = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				u = n("./src/higherOrderComponents/asModal/index.m.less"),
				m = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ({
				className: e,
				isVisible: t,
				...n
			}) => o.a.createElement("div", p({
				className: Object(r.a)(m.a.overlay, e, {
					[m.a.mIsVisible]: t
				})
			}, n));

			function h(e) {
				class t extends s.Component {
					constructor(e) {
						super(e), this.getRef = e => this.ref = e, this.onClick = e => e.stopPropagation(), this.onOverlayClick = e => {
							this.props.onOverlayClick && this.props.onOverlayClick(), e.stopPropagation()
						}, this.state = {
							mounted: !1
						}
					}
					componentDidMount() {
						this.props.ignoreDefaultFocus || this.ref && this.ref.focus(), this.setState({
							mounted: !0
						}), Object(d.a)(), this.ref && (this.focusTrap = new a.b(this.ref), this.focusTrap.activate())
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(d.b)(), Object(c.d)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: n,
							ignoreDefaultFocus: s,
							onOverlayClick: a,
							overlayClassName: c,
							overlayCustomStyles: d,
							withOverlay: u,
							...p
						} = t, h = p;
						return o.a.createElement(i.a, {
							container: document.getElementById(l.b)
						}, o.a.createElement(b, {
							className: c,
							isVisible: u,
							onClick: this.onOverlayClick,
							style: d
						}, o.a.createElement("div", {
							"aria-modal": !0,
							className: Object(r.a)(m.a.modal, n),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, o.a.createElement(e, h))))
					}
				}
				return t
			}
		},
		"./src/higherOrderComponents/warnOnChildrenCount/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			n("./src/lib/logs/console.ts");
			t.a = function(e, t) {
				return t => o.a.createElement(e, t)
			}
		},
		"./src/lib/LinkedListMap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			class s {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class o {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const n = new o(t);
					return e.forEach(e => n.push(e)), n
				}
				first() {
					if (this.tail) return this.tail.value
				}
				firstNode() {
					if (this.tail) return this.tail
				}
				forEach(e) {
					let t = this.tail;
					for (; t;) e(t.value), t = t.next
				}
				get(e) {
					const t = this.getNode(e);
					if (t) return t.value
				}
				getNode(e) {
					return this.itemsByKey[e]
				}
				has(e) {
					return e in this.itemsByKey
				}
				insertAfter(e, t) {
					const n = t instanceof s ? t : new s(t),
						o = this.getNode(e);
					if (!o) throw new Error(`Cannot find item with key ${e}`);
					n.prev = o, n.next = o.next, o.next = n, n.next && (n.next.prev = n);
					const r = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[r] = n, this.length++
				}
				insertBefore(e, t) {
					const n = t instanceof s ? t : new s(t),
						o = this.getNode(e);
					if (!o) throw new Error(`Cannot find item with key ${e}`);
					n.next = o, n.prev = o.prev, o.prev = n, n.prev && (n.prev.next = n);
					const r = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[r] = n, this.length++
				}
				last() {
					if (this.head) return this.head.value
				}
				lastNode() {
					if (this.head) return this.head
				}
				pop() {
					if (!this.head) return;
					return this.removeNode(this.head).value
				}
				push(e) {
					const t = e instanceof s ? e : new s(e);
					t.prev = this.head, this.head ? this.head.next = t : this.tail = t, this.head = t;
					const n = e instanceof s ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
				}
				remove(e) {
					const t = this.getNode(e);
					if (t) return this.removeNode(t).value
				}
				removeNode(e) {
					return e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e === this.tail && (this.tail = e.next), e === this.head && (this.head = e.prev), e.next = void 0, e.prev = void 0, this.itemsByKey[e.value[this.key]] = void 0, this.length--, e
				}
				shift() {
					if (!this.tail) return;
					return this.removeNode(this.tail).value
				}
				toArray() {
					const e = [];
					return this.forEach(t => e.push(t)), e
				}
				unshift(e) {
					const t = e instanceof s ? e : new s(e);
					t.next = this.tail, this.tail ? this.tail.prev = t : this.head = t, this.tail = t;
					const n = e instanceof s ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
				}
			}
		},
		"./src/lib/browser/isIncognito.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts");
			const o = 120 * s.hb;
			t.a = async () => {
				let e = await (async () => await new Promise(e => {
					const t = window.RequestFileSystem || window.webkitRequestFileSystem;
					t ? t(0, 100, () => e(!1), () => e(!0)) : e(void 0)
				}))();
				return e || (e = await (async () => {
					if ("storage" in navigator && "estimate" in navigator.storage) {
						const {
							quota: e
						} = await navigator.storage.estimate();
						return !e || e <= o
					}
				})()), e
			}
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, n) {
			"use strict";
			t.a = (...e) => t => {
				e.forEach(e => {
					if (e) return "function" == typeof e ? e(t) : void(e.current = t)
				})
			}
		},
		"./src/lib/delay/index.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return new Promise(t => setTimeout(t, e))
			}
			n.d(t, "a", (function() {
				return s
			}))
		},
		"./src/lib/hooks/useOnClickOutside.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js");

			function o(e, t) {
				const n = Object(s.useCallback)(n => {
					if (!t) return;
					const s = document.getElementById(e);
					s && (s.contains(n.target) || t(n))
				}, [e, t]);
				Object(s.useEffect)(() => {
					if (t) return window.addEventListener("click", n), () => {
						window.removeEventListener("click", n)
					}
				}, [t, n])
			}
		},
		"./src/lib/isSimpleClick/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => {
				if (e && e.target && (e => {
						let t = e;
						for (; t && t !== window.document.body;) {
							if ("A" === t.nodeName) return !0;
							t = t.parentElement
						}
						return !1
					})(e.target)) {
					if (e.ctrlKey) return !1;
					if (e.altKey) return !1;
					if (e.metaKey) return !1;
					if (e.shiftKey) return !1
				}
				return !0
			}
		},
		"./src/lib/notifications/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			}));
			var s = n("./src/lib/delay/index.ts"),
				o = n("./src/lib/getParsedUserAgent/index.ts"),
				r = n("./src/lib/localStorageAvailable/index.ts"),
				a = n("./src/lib/notifications/constants.ts"),
				i = n("./src/lib/notifications/featureFlags.ts");
			n("./src/lib/serviceWorker/index.ts");
			const c = () => {
					if (Object(i.a)() !== a.c.NotificationsSupported) return a.a.Unsupported;
					const e = Object(r.a)() && localStorage.getItem(a.f) === a.g;
					return "granted" === Notification.permission ? a.a.Granted : "denied" === Notification.permission ? a.a.Denied : e ? a.a.Closed : a.a.Default
				},
				l = () => !!Object(r.a)() && (localStorage.removeItem(a.f), !0),
				d = async (e, t, n, i, l, d) => {
					const u = c();
					if (u === a.a.Unsupported) return void d();
					if (Object(r.a)()) {
						const t = localStorage.getItem(a.h),
							n = (new Date).getTime();
						if (!e && t && parseInt(t) + a.i > n) return void d();
						localStorage.setItem(a.h, n.toString())
					}
					if (!t && u === a.a.Denied) return i(!1, !0), void d();
					if (!t && u === a.a.Granted) return l(!1), void d();
					if (!t && u === a.a.Closed) return void d();
					let m = a.a.Default;
					const p = navigator.userAgent;
					switch (Object(o.b)(p) || Object(o.f)(p) ? Object(s.a)(1800).then(() => {
						m === a.a.Default && n()
					}) : n(), m = await Notification.requestPermission()) {
						case "granted":
							l(!0);
							break;
						case "denied":
							i(!0, !0);
							break;
						case "default":
							d();
							break;
						default:
							i(!0, !1), localStorage.setItem(a.f, a.g)
					}
				}
		},
		"./src/lib/pubsub/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			class s {
				constructor() {
					this.listenerMap = {}
				}
				_resetListenerMap() {
					this.listenerMap = {}
				}
				_resetKey(e) {
					this.listenerMap[e] = []
				}
				reset(e) {
					e ? this._resetKey(e) : this._resetListenerMap()
				}
				addListeners(e, ...t) {
					this.listenerMap[e] || (this.listenerMap[e] = []), this.listenerMap[e].push(...t)
				}
				removeListeners(e, ...t) {
					if (!this.listenerMap[e] || !this.listenerMap[e].length) return !1;
					const n = t.length,
						s = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !t.includes(e)), this.listenerMap[e].length - s === n
				}
				publish(e) {
					return !(!this.listenerMap[e] || !this.listenerMap[e].length) && (this.listenerMap[e].forEach(e => e()), !0)
				}
			}
		},
		"./src/lib/safeBadgeUpdate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/lib/throwDevError.ts");
			const o = e => {
				const t = null === window || void 0 === window ? void 0 : window.navigator;
				if (t && "setAppBadge" in t && "clearAppBadge" in t) {
					(e >= 0 ? t.setAppBadge(e) : t.clearAppBadge()).catch(e => Object(s.a)(e))
				}
			}
		},
		"./src/reddit/actions/alpha.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./src/config.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts");
			var i = n("./src/reddit/helpers/redesignOptoutCookie/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/makeRequest/index.ts");
			async function m(e, t) {
				return await Object(u.b)({
					method: d.jb.POST,
					endpoint: "/timings/optoutrequest",
					data: {
						appName: e.statsAppName,
						successful: t
					},
					type: "json"
				})
			}
			const p = e => async (t, n, {
				apiContext: s
			}) => {
				(await
					function(e) {
						return Object(o.a)(Object(r.a)(e, [a.a]), {
							endpoint: `${e.apiUrl}/api/leave_redesign_beta`,
							method: "post",
							type: "json"
						})
					}(s())).ok ? (Object(i.b)(), await m(s(), !0), e && window.location.reload()) : (m(s(), !1), t(Object(c.f)({
					kind: l.b.Error,
					text: "Sorry, something went wrong. Try Opting out again."
				})))
			}, b = () => async (e, t, {
				apiContext: n
			}) => {
				Object(i.a)(),
					function(e) {
						Object(o.a)(Object(r.a)(e, [a.a]), {
							endpoint: `${e.apiUrl}/api/join_redesign_beta`,
							method: "post",
							type: "json"
						}).then(() => {
							const {
								pathname: e,
								search: t
							} = window.location, n = `${s.a.redditUrl}${e}${t}`;
							window.location.replace(n)
						})
					}(n())
			}
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return ee
			})), n.d(t, "o", (function() {
				return ne
			})), n.d(t, "m", (function() {
				return se
			})), n.d(t, "q", (function() {
				return ae
			})), n.d(t, "t", (function() {
				return ie
			})), n.d(t, "n", (function() {
				return le
			})), n.d(t, "s", (function() {
				return de
			})), n.d(t, "l", (function() {
				return ue
			})), n.d(t, "a", (function() {
				return pe
			})), n.d(t, "b", (function() {
				return fe
			})), n.d(t, "p", (function() {
				return ge
			})), n.d(t, "f", (function() {
				return ve
			})), n.d(t, "g", (function() {
				return ye
			})), n.d(t, "j", (function() {
				return Oe
			})), n.d(t, "d", (function() {
				return Ce
			})), n.d(t, "c", (function() {
				return _e
			})), n.d(t, "i", (function() {
				return Se
			})), n.d(t, "h", (function() {
				return Ne
			})), n.d(t, "k", (function() {
				return Ie
			})), n.d(t, "r", (function() {
				return Te
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/makeDraftKey/index.ts"),
				i = n("./src/reddit/actions/changeUsername.ts"),
				c = n("./src/reddit/actions/login.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/postCreation/editorContent.ts"),
				m = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				p = n("./src/reddit/actions/shortcuts/utils.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				f = n("./src/reddit/constants/adEvents.ts"),
				g = n("./src/reddit/constants/localStorage.ts"),
				v = n("./src/redditGQL/operations/CommentToxicity.json"),
				y = n("./src/lib/makeApiRequest/index.ts"),
				O = n("./src/lib/makeGqlRequest/index.ts"),
				x = n("./src/lib/omitHeaders/index.ts"),
				C = n("./src/reddit/constants/headers.ts"),
				E = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				P = n("./src/reddit/helpers/genericServerError/index.ts"),
				j = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				_ = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				S = n("./src/reddit/models/PostCreationForm/index.ts"),
				k = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				w = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const M = (e, t, n, s) => {
					let o, r;
					if (s === S.i.MARKDOWN) o = n.text, r = null;
					else {
						o = null;
						let e = null;
						n.rteState && (e = h.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(O.a)(e, {
						...v,
						variables: {
							subredditName: t,
							markdown: o,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				N = async (e, t, n, s, r) => {
					const a = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (r === S.i.MARKDOWN) a.text = n.text;
					else {
						a.text = null;
						let e = null;
						n.rteState && (e = h.a.toRichTextJSON(n.rteState).document), a.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(y.a)(Object(x.a)(e, [C.a]), {
						method: o.jb.POST,
						endpoint: Object(E.a)(Object(k.a)(Object(w.a)(`${e.apiUrl}/api/comment.json`))),
						data: a
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(_.a)(e)
					} : {
						...e,
						body: {
							comment: Object(j.a)(e.body.json.data.things[0].data, s)
						}
					} : {
						...e,
						body: {
							comment: Object(j.a)(e.body, s)
						}
					} : {
						...e,
						error: e.error || Object(P.a)()
					})
				};
			var I = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var T = n("./src/reddit/endpoints/post/index.tsx"),
				A = n("./src/reddit/endpoints/post/convert.ts"),
				R = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				L = n("./src/reddit/featureFlags/index.ts"),
				D = n("./src/reddit/helpers/correlationIdTracker.ts"),
				F = n("./src/reddit/helpers/dom/index.ts"),
				B = n("./src/reddit/helpers/localStorage/index.ts"),
				U = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				G = n("./src/reddit/models/Comment/index.ts"),
				H = n("./src/reddit/models/PostDraft/index.ts"),
				W = n("./src/reddit/models/RichTextJson/index.ts"),
				q = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				V = n("./src/reddit/models/Toast/index.ts"),
				K = n("./src/reddit/selectors/comments.ts"),
				Q = n("./src/reddit/selectors/commentSelector.ts"),
				z = n("./src/reddit/selectors/platform.ts"),
				J = n("./src/reddit/selectors/posts.ts"),
				X = n("./src/reddit/selectors/user.ts"),
				Y = n("./src/reddit/actions/comment/index.ts"),
				Z = n("./src/reddit/actions/comment/constants.ts");
			const $ = Object(r.a)(Z.k),
				ee = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, s) => {
					const o = s();
					if (!!o.features.comments.drafts[t])
						if (Object(X.M)(o) && e) {
							const s = $({
								hasFocus: e,
								draftKey: t
							});
							n(Object(i.f)(s))
						} else n($({
							hasFocus: e,
							draftKey: t
						}))
				}, te = Object(r.a)(Z.H), ne = Object(r.a)(Z.J), se = Object(r.a)(Z.I), oe = Object(r.a)(Z.G), re = async (e, t, n, s) => {
					const o = s.ok && s.body,
						r = o && o.comment && o.comment.id;
					await U.g(e, n, t, r)
				}, ae = "Toxicity_Warning__Modal", ie = (e, t, n, s, o, r) => async (a, i, {
					gqlContext: c
				}) => {
					const d = i(),
						u = Object(z.e)(d);
					let m = "";
					if (u && (m = u.name), L.d.enableToxicityWarning(d)) {
						if (!(await M(c(), m, s, o))) return void a(Object(l.i)(ae))
					}
					a(le(e, t, n, s, o, r))
				}, ce = e => e.rteState ? h.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, le = (e, t, n, r, a, i, c) => async (u, h, {
					apiContext: g
				}) => {
					u(Object(l.g)(ae));
					const v = h(),
						y = v.features.comments.submit.pending[n];
					if (!v.user.account || y) return;
					u(te({
						draftKey: n,
						draft: r
					}));
					const O = v.user.account.displayText,
						x = r.commentMode;
					let C;
					if (c ? (C = await Object(R.i)(g(), e, r, O), u(Object(m.a)({
							streamId: e,
							level: C.body.automuteLevel
						}))) : C = await N(g(), e, r, O, x), C.ok) {
						let s;
						s = C.body, u(ne({
							...s,
							headCommentId: Object(K.w)(v, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const o = Object(J.H)(h(), {
							postId: e
						});
						u(Object(d.z)(o, f.a.CommentSubmitted))
					} else {
						C.error && C.error.type === o.Jb && U.i(v, ce(r), e);
						const t = C.error && C.error.fields && C.error.fields[0] ? C.error.fields[0].msg : s.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(oe({
							draftKey: n,
							error: C.error
						})), u(Object(b.f)({
							duration: b.a,
							kind: V.b.Error,
							text: t
						}))
					}
					re(h(), t, a, C).then(() => C.ok && a === S.i.RICH_TEXT ? Object(D.b)(D.a.CommentComposer) : void 0), i || Object(p.d)()
				}, de = e => async (t, n, {
					gqlContext: s
				}) => {
					const {
						parentCommentId: o,
						commentsPageKey: r,
						parentCommentDepth: a,
						draftKey: i,
						formData: c,
						editorMode: d
					} = e, u = n(), m = Object(z.e)(u);
					let p = "";
					if (m && (p = m.name), L.d.enableToxicityWarning(u)) {
						if (!(await M(s(), p, c, d))) return void t(Object(l.i)(ae))
					}
					t(ue({
						commentsPageKey: r,
						draftKey: i,
						parentCommentDepth: a,
						parentCommentId: o,
						formData: c,
						editorMode: d
					}))
				}, ue = e => async (t, n, {
					apiContext: s
				}) => {
					const {
						parentCommentId: r,
						commentsPageKey: a,
						parentCommentDepth: i,
						draftKey: c,
						formData: d,
						editorMode: u
					} = e;
					t(Object(l.g)(ae));
					const m = n(),
						b = m.features.comments.submit.pending[c];
					if (!m.user.account || b) return;
					t(te({
						draftKey: c,
						draft: d
					}));
					const h = m.user.account.displayText,
						f = d.commentMode,
						g = await N(s(), r, d, h, f);
					if (g.ok) t(se({
						...g.body,
						parentCommentId: r,
						commentsPageKey: a,
						draftKey: c,
						depth: i + 1
					}));
					else {
						if (g.error && g.error.type === o.Jb) {
							const e = Object(Q.b)(m, {
								commentId: r
							});
							if (!e) return;
							U.i(m, ce(d), e.postId, r)
						}
						t(oe({
							draftKey: c,
							error: g.error
						}))
					}
					re(n(), a, u, g), Object(p.d)()
				}, me = Object(r.a)(Z.q), pe = Object(r.a)(Z.p), be = Object(r.a)(Z.l), he = (Object(r.a)(Z.g), Object(r.a)(Z.m)), fe = (Object(r.a)(Z.t), (e, t, n) => async (o, r, {
					apiContext: a
				}) => {
					const i = e === S.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(W.G)(t)) o(he({
						editorMode: e,
						draftKey: n,
						content: i ? W.i : ""
					})), o(Object(u.c)(e));
					else {
						o(Object(u.b)(n));
						const r = await Object(A.a)(a(), e, i ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							o(Object(u.a)(n)), o(he({
								editorMode: e,
								draftKey: n,
								content: t
							})), o(Object(u.c)(e))
						} else o(Object(u.a)(n)), o(Object(b.f)({
							duration: b.a,
							kind: V.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), ge = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: n
				}) => async (s, o) => {
					const r = o(),
						d = Object(a.a)(H.c.replyToComment, t);
					if (!Object(X.K)(o())) return s(Object(c.k)()), void s(Object(l.k)({
						actionSource: l.a.Reply,
						redirectUrl: Object(K.m)(o(), {
							commentId: t
						})
					}));
					const u = r.features.comments.replyFormOpen[e],
						m = u && u[t];
					if ((m || u && n) && (Object.keys(u).forEach(t => u[t] && s(pe({
							parentCommentId: t,
							commentsPageKey: e
						}))), m)) return;
					let p = "",
						b = null;
					const h = r.user.prefs.commentMode,
						f = Object(F.d)();
					if (f) {
						const e = f.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (h === S.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => q.s(e, null)).map(e => q.l([e])),
								n = q.s("", null),
								s = q.l([n]);
							b = {
								document: [q.c(t), s]
							}
						}
					}
					const g = r.features.comments.drafts[d];
					let v;
					if (v = f ? {
							commentMode: h,
							draftType: H.c.replyToComment,
							rtJson: b,
							text: `${p}\n`
						} : g || {
							commentMode: h,
							draftType: H.c.replyToComment,
							rtJson: b,
							text: ""
						}, Object(X.M)(r)) {
						const n = me({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: d,
							formData: v
						});
						s(Object(i.f)(n))
					} else s(me({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: d,
						formData: v
					}))
				}, ve = e => async t => {
					t(Object(Y.p)(e)), t(Ce(e))
				}, ye = ({
					parentCommentId: e,
					commentsPageKey: t
				}) => async n => {
					n(pe({
						parentCommentId: e,
						commentsPageKey: t
					})), n(ge({
						parentCommentId: e,
						commentsPageKey: t
					})), n(Object(Y.p)({
						commentId: e,
						commentsPageKey: t
					}))
				}, Oe = (e, t) => n => n(be({
					draftKey: e,
					formData: t
				})), xe = Object(r.a)(Z.s), Ce = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: s,
					text: o
				}) => async (r, a) => {
					const i = a();
					i.user.account && (U.d(i), r(xe({
						commentId: e,
						commentsPageKey: n,
						draftKey: s,
						formData: {
							text: o,
							commentMode: t,
							rteState: null,
							draftType: H.c.edit,
							hasFocus: !0
						}
					})))
				}, Ee = Object(r.a)(Z.C), Pe = Object(r.a)(Z.B), je = Object(r.a)(Z.D), _e = Object(r.a)(Z.h), Se = ({
					id: e,
					commentsPageKey: t,
					depth: n,
					draftKey: s,
					formData: r
				}) => async (n, a, {
					apiContext: i
				}) => {
					const c = a();
					if (!c.user.account) return;
					n(Ee({
						draftKey: s
					})), U.e(c);
					const l = c.user.account.displayText || "",
						d = r.commentMode,
						u = await (async (e, t, n, s, r, a) => {
							const i = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (a === S.i.MARKDOWN) i.text = s.text;
							else {
								i.text = null;
								let e = null;
								s.rteState && (e = h.a.toRichTextJSON(s.rteState).document), i.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(y.a)(Object(x.a)(e, [C.a]), {
								endpoint: Object(E.a)(Object(w.a)(Object(k.a)(`${e.apiUrl}/api/editusertext`))),
								method: o.jb.POST,
								data: i
							}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
								...e,
								ok: !1,
								error: Object(_.a)(e)
							} : {
								...e,
								body: {
									comment: Object(j.a)(e.body.json.data.things[0].data, r)
								}
							} : {
								...e,
								body: {
									comment: Object(j.a)(e.body, r)
								}
							} : {
								...e,
								error: e.error || Object(P.a)()
							})
						})(i(), e, 0, r, l, d);
					if (u.ok) {
						const o = u.body;
						n(je({
							commentId: e,
							commentsPageKey: t,
							draftKey: s
						})), n(Object(Y.i)({
							[e]: {
								...o.comment
							}
						}))
					} else n(Pe({
						draftKey: s,
						error: u.error
					}))
				}, ke = Object(r.a)(Z.z), we = Object(r.a)(Z.y), Me = Object(r.a)(Z.A), Ne = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const a = s();
					n(ke({
						id: e
					})), U.b(e, a);
					const i = await ((e, t) => Object(y.a)(Object(x.a)(e, [C.a]), {
						endpoint: Object(E.a)(`${e.apiUrl}/api/del`),
						method: o.jb.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(_.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(P.a)()
					}))(r(), e);
					i.ok ? n(Me({
						id: e,
						postId: t
					})) : n(we({
						id: e,
						error: i.error
					}))
				}, Ie = e => async (t, n, {
					apiContext: s
				}) => {
					const o = !n().features.comments.models[e].sendReplies;
					t(Object(Y.i)({
						[e]: {
							sendReplies: o
						}
					})), (await Object(T.o)(s(), e, o)).ok || t(Object(Y.i)({
						[e]: {
							sendReplies: !o
						}
					}))
				}, Te = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					var a, i, c, l, d, u;
					n(Object(Y.c)());
					const m = e => Object(b.f)(Object(b.e)(e, V.b.Error));
					if (((null === (i = null === (a = o().pages) || void 0 === a ? void 0 : a.comments) || void 0 === i ? void 0 : i.followed) || []).length === g.a) n(m(s.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const a = t === G.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(Y.n)(i)), (await ((e, t) => Object(O.a)(e, {
								...I,
								variables: {
									input: t
								}
							}))(r(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(B.sb)(null !== (d = null === (l = null === (c = o().pages) || void 0 === c ? void 0 : c.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== d ? d : [], null === (u = o().user.account) || void 0 === u ? void 0 : u.id);
							const e = a ? s.fbt._("Followed! You’ll receive updates when there’s new activity", null, {
								hk: "1Dp5UH"
							}) : s.fbt._("Unfollowed, You’ll no longer receive updates on this comment", null, {
								hk: "1L9sav"
							});
							n(Object(b.f)({
								kind: V.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(Y.n)(i)), n(m(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return k
			})), n.d(t, "m", (function() {
				return w
			})), n.d(t, "e", (function() {
				return I
			})), n.d(t, "h", (function() {
				return T
			})), n.d(t, "l", (function() {
				return D
			})), n.d(t, "q", (function() {
				return F
			})), n.d(t, "j", (function() {
				return B
			})), n.d(t, "g", (function() {
				return U
			})), n.d(t, "f", (function() {
				return G
			})), n.d(t, "o", (function() {
				return q
			})), n.d(t, "p", (function() {
				return V
			})), n.d(t, "d", (function() {
				return K
			})), n.d(t, "a", (function() {
				return z
			})), n.d(t, "b", (function() {
				return J
			})), n.d(t, "n", (function() {
				return X
			})), n.d(t, "c", (function() {
				return Y
			})), n.d(t, "k", (function() {
				return Z
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/telemetry/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/economics/helpers/async.ts"),
				c = n("./src/reddit/actions/economics/powerups/flairs/async.ts"),
				l = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/shortcuts/utils.ts"),
				m = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/actions/vote.ts"),
				b = n("./src/reddit/endpoints/comment/index.tsx"),
				h = n("./src/reddit/helpers/commentList/index.ts"),
				f = n("./src/reddit/helpers/trackers/comment.ts"),
				g = n("./src/reddit/models/Comment/index.ts"),
				v = n("./src/reddit/models/Post/index.ts"),
				y = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/models/Vote/index.ts"),
				x = n("./src/reddit/selectors/comments.ts"),
				C = n("./src/reddit/selectors/commentSelector.ts"),
				E = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				P = n("./src/reddit/selectors/moderatingComments.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/actions/comment/constants.ts");
			const S = {},
				k = Object(a.a)(_.o),
				w = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(j.K)(n())) return t(Object(l.k)()), void t(Object(d.k)({
						actionSource: d.a.Save,
						redirectUrl: Object(x.m)(n(), {
							commentId: e
						})
					}));
					const r = n().features.comments.models[e];
					if (!r) return;
					const a = r.isSaved ? b.m : b.i;
					if (t(k({
							[e]: {
								isSaved: !r.isSaved
							}
						})), (await a(s(), e)).ok) {
						const n = r.isSaved ? o.fbt._("Comment unsaved successfully", null, {
								hk: "UGKHZ"
							}) : o.fbt._("Comment saved successfully", null, {
								hk: "1BZqMx"
							}),
							s = o.fbt._("Undo", null, {
								hk: "46OwLP"
							});
						t(Object(m.f)({
							text: n,
							kind: y.b.Undo,
							buttonText: s,
							buttonAction: w(e)
						}))
					} else t(k({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, M = e => `viewing-comment-${e}`, N = s.a.telemetry.commentConsumedThreshold, I = e => async (t, n) => {
					const o = n();
					if (!Object(C.b)(o, {
							commentId: e
						}) || Math.random() > s.a.telemetry.commentSampleRate) return;
					f.c({
						state: o,
						commentId: e
					}), r.c.start(M(e));
					const a = setTimeout(() => f.a({
						state: o,
						commentId: e
					}), N);
					S[e] = a
				}, T = (e, t) => async (n, s) => {
					const o = s(),
						a = M(e);
					if (Object(C.b)(o, {
							commentId: e
						}) && r.c.has(a)) {
						const n = r.c.end(a);
						!t && n < N && (clearTimeout(S[e]), delete S[e])
					}
				}, A = Object(a.a)(_.x), R = Object(a.a)(_.w), L = Object(a.a)(_.v), D = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const r = s(),
						a = r.moreComments.models[t],
						l = r.platform.currentPage,
						d = l && l.routeMatch,
						u = d && d.match,
						{
							partialPostId: m
						} = u ? u.params : null;
					if (!m) return;
					const p = Object(v.t)(m);
					n(A({
						moreCommentsId: a.id
					}));
					const f = await Object(b.f)(o(), p, {
						token: a.token
					}, Object(E.a)(r));
					if (f.ok) {
						const t = f.body,
							s = Object(h.a)(t, p, r);
						n(R({
							key: e,
							moreCommentsItem: a,
							shouldCollapse: s,
							...t
						}));
						const o = r.posts.models[p];
						let l;
						o && "subreddit" === o.belongsTo.type && t.comments && (l = o.belongsTo.id, await n(Object(i.a)({
							commentIds: Object.keys(f.body.comments),
							postIds: [o.id],
							skip: ["communityDetails", "subscription"],
							subredditId: l
						})));
						const d = f.body.comments;
						await n(Object(c.b)(l, d))
					} else n(L({
						moreCommentsItem: a,
						...f.error
					}))
				}, F = Object(p.a)(h.b, O.a.upvoted), B = Object(p.a)(h.b, O.a.downvoted), U = Object(a.a)(_.j), G = Object(a.a)(_.i), H = Object(a.a)(_.e), W = Object(a.a)(_.f), q = (Object(a.a)(_.c), Object(a.a)(_.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (s, o) => {
					const r = o(),
						a = Object(g.i)(e),
						i = Object(x.n)(r, {
							commentLink: a,
							commentsPageKey: t
						}),
						c = Object(P.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						l = i.depth;
					s(H({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: c
					})), c || 0 !== l || n(e, !0), Object(u.d)()
				}), V = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n(W({
						commentId: e,
						commentsPageKey: t
					}))
				}, K = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: n,
					scrollToAndRemeasure: s
				}) => async (o, r) => {
					const a = r(),
						i = Object(h.e)(t, e, n, a),
						c = Object(P.b)(a, {
							commentId: e.id,
							commentsPageKey: t
						});
					o(H({
						commentId: i,
						commentsPageKey: t,
						isCollapsed: c
					})), 0 === n && s(i, !0), Object(u.d)()
				}, Q = Object(a.a)(_.r), z = e => t => t(Q({
					draftKey: e
				})), J = Object(a.a)(_.a), X = Object(a.a)(_.E), Y = Object(a.a)(_.b), Z = Object(a.a)(_.u)
		},
		"./src/reddit/actions/economics/econManagement/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			const s = "ECON_MANAGEMENT_FETCH_ENTITY_TYPES_SUCCESS",
				o = "ECON_MANAGEMENT_FETCH_ENTITY_TYPES_FAILED",
				r = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_STARTED",
				a = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_SUCCESS",
				i = "ECON_MANAGEMENT_SEARCH_ENTITY_DATA_FAILED",
				c = "ECON_MANAGEMENT_FETCH_ASSOCIATED_DATA_SUCCESS"
		},
		"./src/reddit/actions/economics/econManagement/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "a", (function() {
				return C
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/economics/econManagement/constants.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/EconAdminPanelQuery.json"),
				c = n("./src/redditGQL/operations/PerformEconAdminAction.json");
			var l = n("./src/reddit/models/Toast/index.ts"),
				d = n("./src/reddit/routes/econManagement/index.ts"),
				u = n("./src/reddit/selectors/econManagement.ts"),
				m = n("./src/reddit/selectors/user.ts");
			const p = Object(s.a)(o.c),
				b = Object(s.a)(o.b),
				h = Object(s.a)(o.e),
				f = Object(s.a)(o.f),
				g = Object(s.a)(o.d),
				v = Object(s.a)(o.a),
				y = () => async (e, t, {
					gqlContext: n
				}) => {
					const s = t(),
						o = Object(m.k)(s);
					if (o && o.isEmployee) try {
						const t = await (async e => {
							const t = await Object(a.a)(e, {
								...i,
								variables: {
									query: "",
									queryName: "getEntityTypes"
								}
							});
							if (!t.ok) throw new Error("Unable to update the preferred achievement flair");
							const n = t.body.data.econAdminPanel.response;
							return JSON.parse(n)
						})(n());
						e(p(t))
					} catch (c) {
						e(b()), e(Object(r.f)({
							duration: r.a,
							kind: l.b.Error,
							text: c.message
						}))
					}
				}, O = e => async (t, n, {
					gqlContext: s
				}) => {
					const o = n(),
						c = Object(m.k)(o);
					if (c && c.isEmployee) {
						if ("undefined" != typeof window) {
							const t = `?${d.b}=${e}`;
							window.history.pushState({
								path: t
							}, "", t)
						}
						t(h());
						try {
							const n = await (async (e, t) => {
								const n = await Object(a.a)(e, {
									...i,
									variables: {
										query: JSON.stringify({
											entityRef: t
										}),
										queryName: "getEntity"
									}
								});
								if (!n.ok) throw new Error(`Unable to fetch ${t}`);
								const s = n.body.data.econAdminPanel.response;
								return JSON.parse(s)
							})(s(), e);
							t(f(n))
						} catch (u) {
							t(g()), t(Object(r.f)({
								duration: r.a,
								kind: l.b.Error,
								text: u.message
							}))
						}
					}
				}, x = e => async (t, n, {
					gqlContext: s
				}) => {
					const o = n(),
						c = Object(m.k)(o);
					if (!c || !c.isEmployee) return;
					const d = Object(u.b)(o);
					if (d) try {
						const n = await (async (e, t, n) => {
							const s = await Object(a.a)(e, {
								...i,
								variables: {
									query: JSON.stringify({
										contextEntityRef: t,
										entityType: n
									}),
									queryName: "getEntitiesBelongingTo"
								}
							});
							if (!s.ok) throw new Error(`Unable to fetch ${n} data for ${t}`);
							const o = s.body.data.econAdminPanel.response;
							return JSON.parse(o)
						})(s(), d.prefixedId, e);
						t(v({
							entity: n,
							type: e
						}))
					} catch (p) {
						t(Object(r.f)({
							duration: r.a,
							kind: l.b.Error,
							text: p.message
						}))
					}
				}, C = (e, t, n) => async (s, o, {
					gqlContext: i
				}) => {
					const d = o(),
						p = Object(m.k)(d);
					if (p && p.isEmployee && Object(u.b)(d)) try {
						await (async (e, t, n, s) => {
							const o = s ? {
								params: s
							} : {};
							if (!(await Object(a.a)(e, {
									...c,
									variables: {
										input: {
											name: n,
											args: JSON.stringify({
												entityRef: t,
												...o
											})
										}
									}
								})).ok) throw new Error(`Unable to perform ${n} on ${t} with ${JSON.stringify(o)}`)
						})(i(), e, t, n), s(Object(r.f)({
							duration: r.a,
							kind: l.b.SuccessCommunityGreen,
							text: `${t} executed successfully for ${e}`
						}))
					} catch (b) {
						s(Object(r.f)({
							duration: r.a,
							kind: l.b.Error,
							text: b.message
						}))
					}
				}
		},
		"./src/reddit/actions/economics/me/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeRequest/index.ts"),
				r = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");
			var i = n("./src/lib/makeActionCreator/index.ts"),
				c = n("./src/reddit/actions/economics/me/constants.ts");
			const l = Object(i.a)(c.a),
				d = Object(i.a)(c.b),
				u = Object(i.a)(c.c),
				m = e => async (t, n, {
					apiContext: s
				}) => {
					const o = e && e.includeMemberships || !1,
						i = e && e.forceFetch || !1,
						c = n();
					if (!c.economics.me.fetched || o && !c.economics.me.data.specialMemberships || i) {
						const e = await
						function(e, t) {
							return Object(a.a)(e, {
								method: "get",
								endpoint: `${r.a.metaUrl}/users/me${t?"?fields=specialMemberships":""}`
							})
						}(s(), o);
						if (e.ok) {
							const n = e.body;
							o && !n.specialMemberships && (n.specialMemberships = {}), t(l(n))
						}
					}
				}, p = () => async (e, t) => {
					const n = t(),
						r = n.economics.me.data;
					if (!r) throw new Error("me data required for copy to be fetched");
					if (!n.economics.pointsCopy.fetched) {
						e(d());
						const t = `https://${r.pointsDocsBaseUrl}v1.json?web`,
							n = await Object(o.b)({
								endpoint: t,
								method: s.jb.GET
							});
						n.ok && n.body && e(u(n.body))
					}
				}
		},
		"./src/reddit/actions/emailCollection/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "b", (function() {
				return h
			}));
			var s = n("./node_modules/lodash/once.js"),
				o = n.n(s),
				r = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/notificationBanner.ts"),
				i = n("./src/reddit/actions/preferences.ts"),
				c = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				l = n("./src/reddit/components/Settings/modalIds.ts"),
				d = n("./src/reddit/helpers/localStorage/index.ts"),
				u = n("./src/reddit/selectors/emailCollection.ts");
			const m = o()(d.c),
				p = () => async (e, t) => {
					const n = t();
					m(), Object(u.a)(n) && (await e(Object(i.z)()), Object(u.a)(t()) && e(Object(a.d)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, b = () => async (e, t) => {
					const n = t();
					Object(u.a)(n) && (Object(d.b)(), e(Object(a.c)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, h = () => async (e, t) => {
					e(Object(r.g)(l.g))
				}
		},
		"./src/reddit/actions/emailVerification.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/models/EmailSettings/index.ts"),
				d = n("./src/reddit/models/Toast/index.ts");
			const u = e => async (t, n, {
				apiContext: o
			}) => {
				switch (e) {
					case l.a.Success:
						t(Object(c.f)({
							kind: d.b.SuccessCommunity,
							text: s.fbt._("Email verification complete", null, {
								hk: "vp6R2"
							})
						}));
						break;
					case l.a.AlreadyVerified:
						t(Object(c.f)({
							kind: d.b.SuccessCommunity,
							text: s.fbt._("Your email address has already been verified.", null, {
								hk: "7ro41"
							})
						}));
						break;
					case l.a.WrongUser:
						return void t(Object(c.f)({
							kind: d.b.Error,
							text: s.fbt._("The email verification link you've followed is for a different user account. Please log out and click the email verification link again to verify your email.", null, {
								hk: "1NrK5a"
							})
						}));
					default:
						t(Object(c.f)({
							kind: d.b.Error,
							text: s.fbt._("Something went wrong.", null, {
								hk: "JbBLl"
							})
						}))
				}
			}, m = e => async (t, n, {
				apiContext: s
			}) => {
				const c = await ((e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					method: o.jb.POST,
					endpoint: `${e.apiUrl}/api/v1/verify_email/${t}`,
					data: {}
				}))(s(), e);
				if (c.ok && c.body && c.body.success) return l.a.Success;
				switch (c.body.reason) {
					case l.a.AlreadyVerified:
						return l.a.AlreadyVerified;
					case l.a.WrongUser:
						return l.a.WrongUser;
					default:
						return l.a.Error
				}
			}
		},
		"./src/reddit/actions/framedGild/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/actions/gold/modals.ts"),
				o = n("./src/reddit/actions/users.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = e => async (t, n) => {
				const i = n(),
					c = e.params.thingId;
				t(Object(s.c)({
					correlationId: Object(r.d)(r.a.GildingFlow),
					thingId: c
				})), Object(a.K)(i) || await t(o.t());
				const l = n();
				if (!Object(a.K)(l)) return t(Object(s.f)())
			}
		},
		"./src/reddit/actions/framedModal/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/actions/users.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const r = e => async (e, t) => {
				const n = t();
				Object(o.K)(n) || await e(s.t());
				const r = t();
				if (!Object(o.K)(r)) throw new Error("Failed to login")
			}
		},
		"./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./src/lib/env/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/sentry/index.ts"),
				a = n("./src/reddit/endpoints/gold/productCatalog/index.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = n("./src/lib/initializeClient/installReducer.ts"),
				l = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(c.a)({
				features: {
					avatar: l.a
				}
			});
			const d = Object(o.a)(i.o);
			class SpecialEventsError extends Error {
				constructor() {
					super(...arguments), this.response = null
				}
			}
			const u = () => async (e, t, {
				gqlContext: n
			}) => {
				try {
					const t = await Object(a.d)(n());
					if (!t.ok) {
						const e = new SpecialEventsError("Got bad response in GQL call for special events");
						throw e.response = t, e
					} {
						const n = t.body.data.econSpecialEvents;
						await e(d(n))
					}
				} catch (o) {
					Object(s.b)() || console.error(o), r.c.withScope(e => {
						var t, n;
						e.setExtra("response", o.response), e.setExtra("status", null === (t = o.response) || void 0 === t ? void 0 : t.status), e.setExtra("graphql_error", null === (n = o.response) || void 0 === n ? void 0 : n.error), r.c.captureException(o)
					})
				}
			}
		},
		"./src/reddit/actions/notificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return y
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts");
			n("./src/lib/makeGqlRequest/index.ts"), n("./src/redditGQL/operations/UserSubredditsNotificationsLevel.json");
			var c = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
				l = n("./src/reddit/models/Toast/index.ts");
			const d = Object(o.a)(r.c),
				u = Object(o.a)(r.b),
				m = Object(o.a)(r.a),
				p = Object(o.a)(r.f),
				b = Object(o.a)(r.e),
				h = Object(o.a)(r.d),
				f = e => async (t, n, {
					gqlContext: s
				}) => {
					e === c.a.Push ? t(p()) : t(d()), await async function(e, t, n) {
						const s = await Object(i.a)(e(), {
							channel: t
						});
						if (s.ok && s.body) {
							const e = function(e) {
								const t = e && e.data,
									n = t && t.notificationSettingsLayoutByChannel,
									s = n && n.sections;
								if (s) return function(e) {
									const t = {},
										n = [];
									let s = {},
										o = [];
									const r = e => {
										const {
											rowIds: r,
											rowsCollection: a
										} = function(e) {
											const t = [],
												n = {};
											if (e.rows)
												for (let s = 0; s < e.rows.length; s++) {
													const o = e.rows[s],
														r = o.messageType;
													t.push(r), n[r] = o
												}
											return {
												rowsCollection: n,
												rowIds: t
											}
										}(e);
										s = {
											...s,
											...a
										}, o = [...o, ...r];
										const i = e.id;
										n.push(i), t[i] = {
											...e,
											rows: r
										}
									};
									for (let a = 0; a < e.length; a++) r(e[a]);
									return {
										sections: {
											byId: t,
											allIds: n
										},
										rows: {
											byId: s,
											allIds: o
										}
									}
								}(s)
							}(s.body);
							t === c.a.Push ? n(b(e)) : n(u(e))
						} else t === c.a.Push ? n(h({
							error: s.error
						})) : n(m({
							error: s.error
						}))
					}(s, e, t)
				};
			const g = Object(o.a)(r.g),
				v = e => async (t, n, {
					gqlContext: o
				}) => {
					(await Object(i.b)(o(), e)).ok ? (y(t, e), function(e) {
						e(Object(a.f)({
							kind: l.b.SuccessCommunity,
							text: s.fbt._("Changes saved", null, {
								hk: "UBoVR"
							})
						}))
					}(t)) : function(e) {
						e(Object(a.f)({
							kind: l.b.Error,
							text: s.fbt._("We had some issues saving your changes. Please try again.", null, {
								hk: "1OvQi6"
							})
						}))
					}(t)
				};

			function y(e, t) {
				e(g({
					isEnabled: t.isEnabled,
					messageType: t.messageType
				}))
			}
		},
		"./src/reddit/actions/notifications/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			}));
			var s = n("./src/lib/notifications/index.ts"),
				o = n("./src/lib/notifications/constants.ts"),
				r = n("./src/lib/notifications/featureFlags.ts"),
				a = n("./src/reddit/featureFlags/index.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts");
			const c = e => a.d.pushNotificationsBrowserSupported(e) ? Object(r.a)() : o.c.BrowserUnsupported,
				l = e => {
					switch (e) {
						case o.a.Denied:
							i.kb(!1), Object(s.c)();
							break;
						case o.a.Default:
						case o.a.Granted:
							i.kb(!0), Object(s.c)();
							break;
						case o.a.Closed:
							i.kb(!0)
					}
				}
		},
		"./src/reddit/actions/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return I
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "b", (function() {
				return B
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "f", (function() {
				return G
			})), n.d(t, "c", (function() {
				return H
			})), n.d(t, "a", (function() {
				return W
			})), n.d(t, "h", (function() {
				return V
			})), n.d(t, "j", (function() {
				return K
			})), n.d(t, "g", (function() {
				return z
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				a = (n("./src/reddit/actions/notificationSettingsLayout/index.ts"), n("./src/reddit/actions/notificationsInbox/constants.ts")),
				i = n("./src/reddit/actions/tabBadging.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/redditGQL/operations/BlockAwarder.json");
			var u = (e, t) => Object(l.a)(e, {
					...d,
					variables: t
				}),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/redditGQL/operations/NotificationInboxFeed.json"),
				f = n("./src/redditGQL/operations/NotificationInboxFeedSlimmed.json"),
				g = n("./src/reddit/constants/headers.ts"),
				v = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var y;
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(y || (y = {}));
			var O = n("./src/redditGQL/operations/DeleteInboxNotifications.json");
			n("./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts");
			var x = n("./src/redditGQL/operations/UpdateInboxActivitySeenState.json");
			var C = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				E = n("./src/reddit/helpers/trackers/inbox.ts"),
				P = n("./src/reddit/models/Badge/index.ts"),
				j = n("./src/reddit/models/NotificationInbox/index.ts"),
				_ = n("./src/reddit/models/Toast/index.ts"),
				S = n("./src/reddit/selectors/appBadges.ts"),
				k = (n("./src/reddit/selectors/notificationPrefs.ts"), n("./src/reddit/selectors/notificationsInbox.tsx"));
			const w = Object(o.a)(a.e),
				M = Object(o.a)(a.b),
				N = Object(o.a)(a.a),
				I = e => async (t, n, {
					gqlContext: s
				}) => {
					var o, r;
					const a = n(),
						i = Object(k.a)(a);
					t(w());
					const d = await ((e, t) => Object(l.a)(e, {
						...h,
						variables: t
					}))(s(), e);
					if (null === (r = null === (o = d.error) || void 0 === o ? void 0 : o.fields) || void 0 === r ? void 0 : r.length) return t(N({
						error: d.error
					})), void t(Object(c.d)());
					const u = d && d.body,
						m = A(u);
					if (null === i) {
						const e = Object(k.f)(a);
						t(L(m.nodes, e.length))
					}
					t(M(m))
				}, T = () => async (e, t, {
					gqlContext: n
				}) => {
					var s, o;
					const r = await (e => Object(l.a)(e, {
						...f
					}))(n());
					if (null === (o = null === (s = r.error) || void 0 === s ? void 0 : s.fields) || void 0 === o ? void 0 : o.length) return;
					const a = r && r.body,
						i = R(a).nodes.filter(e => !e.viewedAt);
					i.length && i.forEach(e => {
						var n;
						Object(E.n)({
							id: e.id,
							isClicked: !1,
							isViewed: Boolean(e.viewedAt),
							type: null === (n = e.context) || void 0 === n ? void 0 : n.messageType
						})(t())
					})
				}, A = e => {
					const t = e && e.data,
						n = t && t.notificationInbox,
						s = n && n.elements,
						o = s && s.pageInfo;
					return {
						nodes: (s && s.edges).map(e => e.node),
						pageInfo: o
					}
				}, R = e => {
					var t, n;
					return {
						nodes: null === (n = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.notificationInbox) || void 0 === n ? void 0 : n.elements.edges.map(e => e.node)
					}
				}, L = (e, t) => async (n, s) => {
					const o = s(),
						r = Object(k.a)(o),
						a = ((e, t) => {
							let n, s = 0;
							const o = new Date,
								r = o.getDate(),
								a = o.getMonth(),
								i = o.getFullYear();
							for (; s < e.length && !n;) {
								const o = e[s],
									c = new Date(o.sentAt),
									l = c.getDate(),
									d = c.getMonth(),
									u = c.getFullYear();
								if ((l !== r || d !== a || u !== i) && !n) {
									n = ((t || 0) + s).toString()
								} else s++
							}
							return n
						})(e, t);
					a && a !== r && n(D({
						index: a
					}))
				}, D = Object(o.a)(a.g), F = (Object(o.a)(a.h), Object(o.a)(a.f)), B = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = [e];
					if ((await ((e, t) => Object(l.a)(e, {
							...O,
							variables: {
								input: t
							}
						}))(o(), {
							notificationIds: r
						})).ok) {
						t(F({
							id: e
						}));
						const o = Object(k.f)(n());
						t(L(o)), t(Object(c.f)(Object(c.e)(s.fbt._("Notification hidden", null, {
							hk: "1jfPqO"
						}), _.b.SuccessCommunityGreen)))
					} else t(Object(c.f)(Object(c.e)(s.fbt._("Failed to hide notification, please try again.", null, {
						hk: "fL7uB"
					}), _.b.Error)))
				}, U = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					if (!e) return;
					(await Object(C.b)(r(), e, {
						isSubredditUpdatesInterestingPostEnabled: !0,
						isUpdateFromSubredditEnabled: !0
					})).ok ? (t && t(), n(Object(c.f)(Object(c.e)(s.fbt._("Success! Undone hiding notifications from this community.", null, {
						hk: "1na0NP"
					}), _.b.SuccessCommunityGreen)))) : n(Object(c.f)(Object(c.e)(s.fbt._("Failed to undo hiding notifications, please try again.", null, {
						hk: "4jo7Pf"
					}), _.b.Error)))
				}, G = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					if (!e) return;
					(await Object(C.b)(r(), e, {
						isSubredditUpdatesInterestingPostEnabled: !1,
						isUpdateFromSubredditEnabled: !1
					})).ok ? n((() => {
						const n = s.fbt._("Success! You won't see notifications from this community in the future.", null, {
							hk: "2tkhbk"
						});
						return Object(c.f)(Object(c.e)(n, _.b.Undo, s.fbt._("Undo", null, {
							hk: "4zFGDk"
						}), U(e, t)))
					})()) : n(Object(c.f)(Object(c.e)(s.fbt._("Failed to hide notifications, please try again.", null, {
						hk: "KEGcB"
					}), _.b.Error)))
				}, H = e => async (t, n, {
					apiContext: o
				}) => {
					if (!e) return;
					(await ((e, t) => Object(p.a)(Object(b.a)(e, [g.a]), {
						endpoint: Object(v.a)(`${e.apiUrl}/api/sendreplies`),
						method: m.jb.POST,
						data: {
							id: t
						}
					}))(o(), e)).ok ? t(Object(c.f)(Object(c.e)(s.fbt._("Success! You won't see updates on this in the future", null, {
						hk: "wtDa4"
					}), _.b.SuccessCommunityGreen))) : t(Object(c.f)(Object(c.e)(s.fbt._("Failed to turn off updates on this, please try again", null, {
						hk: "1zhpEy"
					}), _.b.Error)))
				}, W = e => async (t, n, {
					gqlContext: o
				}) => {
					if (!e) return;
					(await u(o(), {
						awardingId: e
					})).ok ? t(Object(c.f)(Object(c.e)(s.fbt._("Success! Awarder has been blocked", null, {
						hk: "2D5PUk"
					}), _.b.SuccessCommunityGreen))) : t(Object(c.f)(Object(c.e)(s.fbt._("Failed to block awarder, please try again", null, {
						hk: "2dxeA8"
					}), _.b.Error)))
				}, q = Object(o.a)(a.d), V = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					let a;
					if (t === j.a.CommentReply || t === j.a.PostReply || t === j.a.PrivateMessage || t === j.a.UsernameMention) {
						if ((a = await ((e, t) => Object(p.a)(Object(b.a)(e, [g.a]), {
								endpoint: Object(v.a)(`${e.apiUrl}/api/read_message`),
								method: m.jb.POST,
								data: {
									id: t
								}
							}))(o(), e)).ok) {
							let e = Object(S.a)(s());
							if (e > 0) {
								e--;
								const t = Object(r.e)({
									count: e,
									key: P.c.ActivityTab
								});
								n(Object(r.a)(t)), n(Object(i.e)())
							}
						}
					} else a = await ((e, t) => Object(p.a)(Object(b.a)(e, [g.a]), {
						endpoint: Object(v.a)(`${e.apiUrl}/api/read_notification`),
						method: m.jb.POST,
						data: {
							id: t
						}
					}))(o(), e);
					if (a.ok) {
						const t = (new Date).toISOString();
						n(q({
							id: e,
							now: t
						}))
					}
				}, K = () => async (e, t, {
					gqlContext: n
				}) => {
					const s = (new Date).toLocaleDateString(),
						o = await ((e, t) => Object(l.a)(e, {
							...x,
							variables: {
								input: t
							}
						}))(n(), {
							lastSentAt: s
						});
					if (o.ok) {
						const t = o.body,
							n = t && t.data && t.data.updateInboxActivitySeenState && t.data.updateInboxActivitySeenState.badgeIndicators;
						n && (e(Object(r.a)(n)), e(Object(i.d)()))
					}
				}, Q = Object(o.a)(a.c), z = () => async (e, t, {
					apiContext: n
				}) => {
					const {
						notificationsInbox: {
							markAllAsReadTimestamp: o
						}
					} = t(), a = new Date;
					if (!o || a.getTime() - new Date(o).getTime() > 15e3) {
						if ((await ((e, t) => Object(p.a)(Object(b.a)(e, [g.a]), {
								endpoint: Object(v.a)(`${e.apiUrl}/api/read_all_messages`),
								method: m.jb.POST,
								data: {
									filter_types: null == t ? void 0 : t.join(",")
								}
							}))(n(), [y.Activity, y.Messages])).ok) {
							const t = Object(r.e)({
									count: 0,
									key: P.c.MessageTab
								}),
								n = Object(r.e)({
									count: 0,
									key: P.c.ActivityTab
								});
							e(Object(r.a)({
								...t,
								...n
							})), e(Q({
								now: a.toISOString()
							}))
						} else e(Object(c.f)(Object(c.e)(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "VW7c3"
						}), _.b.Error)))
					}
				}
		},
		"./src/reddit/actions/onboarding/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "sendOnboardingExposureEvent", (function() {
				return l
			})), n.d(t, "resetGenderUpdateState", (function() {
				return d
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/login.ts"),
				r = n("./src/reddit/actions/onboarding/constants.ts"),
				a = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/helpers/chooseVariant/index.ts"),
				c = n("./src/reddit/selectors/onboarding.ts");
			const l = () => async (e, t) => {
				const n = t();
				Object(i.d)(n, {
					experimentName: a.bf
				})
			}, d = Object(s.a)(r.a);
			t.default = () => async (e, t) => {
				const n = t();
				Object(c.c)(n) && e(Object(o.c)())
			}
		},
		"./src/reddit/actions/pages/avatar.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				r = n("./src/reddit/actions/users.ts"),
				a = n("./src/reddit/selectors/user.ts"),
				i = n("./src/reddit/actions/login.ts");
			t.a = () => async (e, t) => {
				e(Object(o.m)({
					title: Object(s.a)()
				})), await e(Object(r.t)()), Object(a.K)(t()) || e(Object(i.i)())
			}
		},
		"./src/reddit/actions/pages/econManagement.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/reddit/actions/economics/econManagement/index.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/routes/econManagement/index.ts"),
				c = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				await e(Object(a.t)());
				const n = t(),
					l = Object(c.K)(n),
					d = Object(c.H)(n);
				l && d || await e(Object(s.c)("/")), e(Object(r.m)({
					title: "Econ control panel"
				})), await e(Object(o.c)());
				n.platform.currentPage.queryParams[i.b]
			}
		},
		"./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				o = n("./src/reddit/actions/users.ts"),
				r = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				Object(r.K)(t()) || await e(Object(o.t)()), await e(Object(s.b)()).then(() => {
					if (t().economics.me.data) return e(Object(s.a)())
				})
			}
		},
		"./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/makeListingKey/index.ts"),
				o = n("./src/reddit/actions/economics/helpers/async.ts"),
				r = n("./src/reddit/actions/pages/subreddit.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/subreddit.ts"),
				c = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				const n = t().platform.currentPage;
				if (n && n.routeMatch && n.routeMatch.match) {
					const l = (n.routeMatch.match.params || {}).subredditName;
					if (l) {
						const n = [],
							d = t();
						Object(c.K)(d) || n.push(e(Object(a.t)()));
						const u = Object(s.a)(l, null);
						n.push(e(Object(r.subredditDataRequested)(u, l, {}))), await Promise.all(n);
						const m = Object(i.B)(t(), l);
						await e(Object(o.a)({
							subredditId: m,
							skip: ["badges", "tips", "wallets"]
						}))
					}
				}
			}
		},
		"./src/reddit/actions/pages/powerups.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle.ts"),
				o = n("./src/reddit/actions/gold/powerups.ts"),
				r = n("./src/reddit/actions/platform.ts"),
				a = n("./src/reddit/actions/subreddit.ts"),
				i = n("./src/reddit/actions/users.ts"),
				c = n("./src/reddit/selectors/moderatorPermissions.ts"),
				l = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				if (e(Object(r.m)({
						title: Object(s.g)()
					})), await e(Object(i.t)()), !Object(l.K)(t())) return;
				await e(Object(a.q)());
				const n = Object(c.a)(t());
				n && n.length && await e(Object(o.d)(n))
			}
		},
		"./src/reddit/actions/pages/predictions.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle.ts"),
				o = n("./src/reddit/actions/platform.ts"),
				r = n("./src/reddit/actions/subreddit.ts"),
				a = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				e(Object(o.m)({
					title: Object(s.h)()
				})), await e(Object(a.t)()), Object(i.K)(t()) && await e(Object(r.q)())
			}
		},
		"./src/reddit/actions/pages/talk.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle.ts"),
				o = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(o.m)({
					title: Object(s.n)()
				}))
			}
		},
		"./src/reddit/actions/pages/wrappedReddit.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle.ts"),
				o = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(o.m)({
					title: Object(s.o)()
				}))
			}
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "c", (function() {
				return g
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				a = n("./src/reddit/endpoints/post/convert.ts"),
				i = n("./src/reddit/helpers/localStorage/index.ts"),
				c = n("./src/reddit/helpers/trackers/postComposer.ts"),
				l = n("./src/reddit/models/PostCreationForm/index.ts"),
				d = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(o.a)(m.G),
				b = Object(o.a)(m.p),
				h = Object(o.a)(m.Q),
				f = (e, t, n) => async (o, i, {
					apiContext: f
				}) => {
					c.j(i(), t);
					const v = t === l.i.MARKDOWN,
						y = t === l.i.RICH_TEXT,
						O = m.k;
					if (v && Object(d.G)(n)) return o(h({
						editorKey: e,
						editorMode: l.i.MARKDOWN,
						content: ""
					})), void o(g(t));
					if (y && !n) return o(h({
						editorKey: e,
						editorMode: l.i.RICH_TEXT,
						content: d.i
					})), void o(g(t));
					o(p(O));
					const x = await Object(a.a)(f(), t, v ? JSON.stringify(n) : n);
					x.ok ? (o(b(O)), o(h({
						editorKey: e,
						editorMode: t,
						content: x.body.output
					})), o(g(t))) : (o(b(O)), o(Object(r.f)({
						duration: r.a,
						kind: u.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, g = e => async (t, n) => {
					const o = Object(i.l)();
					if (o >= 3) return;
					const a = n().user.prefs.useMarkdown ? l.i.MARKDOWN : l.i.RICH_TEXT;
					if (e === a) return;
					const c = e === l.i.MARKDOWN ? s.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : s.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(r.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: s.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: c
					})), Object(i.pb)(o + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const a = Object(s.a)(r.r),
				i = Object(s.a)(r.F),
				c = e => async (t, n, {
					apiContext: s
				}) => {
					const r = await Object(o.a)(s(), e);
					r && r.ok ? t(a({
						streamId: e,
						level: r.body.data.auto_mute_status.level
					})) : t(i(e))
				}
		},
		"./src/reddit/actions/shortcuts/close.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/react-router-redux/es/index.js"),
				o = n("./src/reddit/actions/comment/authoring.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/constants/shortcuts.ts"),
				c = n("./src/reddit/helpers/trackers/lightbox.ts"),
				l = n("./src/reddit/helpers/trackers/shortcuts.ts"),
				d = n("./src/reddit/selectors/activeModal.ts"),
				u = n("./src/reddit/selectors/gild.ts"),
				m = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				p = n("./src/reddit/actions/shortcuts/utils.ts");
			const b = [m.u, m.o, e => !!Object(u.d)(e)],
				h = (e, t) => async (n, u, {
					apiContext: m
				}) => {
					const h = u();
					for (const e of b)
						if (e(h)) return;
					const f = document.activeElement,
						g = h.shortcuts.activeCommentId,
						v = Object(p.c)(h);
					if (f && "true" === f.contentEditable && g && v) n(o.a({
						parentCommentId: g,
						commentsPageKey: v
					})), Object(p.a)(g);
					else if (Object(d.b)(h)) Object(p.b)(i.b), n(Object(r.i)(Object(d.b)(h)));
					else if (h.toaster[0]) Object(p.b)(i.b), n(Object(a.g)(h.toaster[0].id));
					else if (h.shortcuts.namespace === i.d.Lightbox && h.platform.currentPage) {
						const e = h.platform.currentPage.locationState.closeLocation;
						e && (Object(p.b)(i.b), n(Object(s.b)(e)))
					}
					const {
						activePostId: y
					} = h.shortcuts;
					e(t && y ? c.b(y, "close", !0) : l.a)
				}
		},
		"./src/reddit/actions/shortcuts/utils.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			}));
			var s = n("./src/reddit/constants/shortcuts.ts"),
				o = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				r = n("./src/reddit/helpers/routeKey/index.ts");
			const a = e => {
					const t = e.platform.currentPage;
					if (!t || !t.routeMatch) return;
					const n = t.routeMatch,
						s = Object(o.a)(e);
					return Object(r.b)(n, e, s)
				},
				i = e => {
					const t = document.getElementById(e);
					t && t.focus()
				},
				c = e => {
					const t = document.getElementById(e),
						n = window.scrollX,
						s = window.scrollY;
					t && (t.focus(), window.scrollTo(n, s))
				},
				l = () => {
					c(s.b)
				}
		},
		"./src/reddit/actions/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return o
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "g", (function() {
				return d
			}));
			var s = n("./src/lib/loadableAction/index.ts");
			const o = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairChanged)),
				r = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
				a = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleAssignOwnFlairPermission)),
				i = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.saveUserFlairTemplate)),
				c = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.deleteUserFlairTemplate)),
				l = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.reorderUserFlairTemplates)),
				d = Object(s.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairLoadedAndModalOpened))
		},
		"./src/reddit/components/AccountManagerModal/IFrame/index.m.less": function(e, t, n) {
			e.exports = {
				IFrame: "_25r3t_lrPF3M6zD2YkWvZU",
				iFrame: "_25r3t_lrPF3M6zD2YkWvZU",
				CloseButton: "_1ryinm9ofYAx_k9dpdCbpq",
				closeButton: "_1ryinm9ofYAx_k9dpdCbpq",
				Close: "_14dkERGUnSwisNWFcFX-0T",
				close: "_14dkERGUnSwisNWFcFX-0T"
			}
		},
		"./src/reddit/components/AccountManagerModal/IFrame/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/addQueryParams/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/actions/onboarding/index.ts"),
				p = n("./src/reddit/actions/preferences.ts"),
				b = n("./src/lib/makeActionCreator/index.ts"),
				h = n("./src/reddit/actions/sso/constants.ts");
			const f = Object(b.a)(h.a),
				g = Object(b.a)(h.b);
			var v = n("./src/reddit/actions/survey/index.ts"),
				y = n("./src/reddit/actions/toaster.ts"),
				O = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/constants/accountManager.ts"),
				C = n("./src/reddit/constants/history.ts"),
				E = n("./src/reddit/constants/listings.ts"),
				P = n("./src/reddit/constants/modals.ts"),
				j = n("./src/reddit/constants/parameters.ts"),
				_ = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				S = n("./src/reddit/helpers/history/index.ts"),
				k = n("./src/reddit/helpers/trackers/moreReplies.ts"),
				w = n("./src/reddit/helpers/trackers/onboarding.ts"),
				M = n("./src/reddit/icons/svgs/Close/index.tsx"),
				N = n("./src/reddit/models/Sso/index.ts"),
				I = n("./src/reddit/models/Toast/index.ts"),
				T = n("./src/reddit/selectors/accountManager.ts"),
				A = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				R = n("./src/reddit/selectors/experiments/moreRepliesSignup.ts"),
				L = n("./src/reddit/selectors/experiments/onboarding.ts"),
				D = n("./src/reddit/selectors/experiments/survey.ts"),
				F = n("./src/reddit/selectors/telemetry.ts"),
				B = n("./src/reddit/selectors/user.ts"),
				U = n("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				G = n.n(U);
			const H = d.a.iframe("IFrame", G.a),
				W = d.a.button("CloseButton", G.a),
				q = d.a.wrapped(M.a, "Close", G.a),
				V = Object(c.c)({
					accountManagerSrc: T.c,
					actionSource: T.a,
					frontpageSignupVariant: A.a,
					isDismissSurveyEnabled: D.a,
					isLoggedIn: B.K,
					isMoreRepliesSignupEnabled: R.a,
					isOnboardingEnabled: L.b,
					isOnboardingExperiment: L.c,
					redirectUrl: T.b
				}),
				K = Object(i.b)(V, (e, t) => ({
					exposeOnboardingExperiment: () => e(Object(m.sendOnboardingExposureEvent)()),
					onDismissSignupTrigger: () => e(Object(v.d)()),
					oniFrameLoaded: (t, n) => {
						e((e, s) => {
							t.contentWindow.postMessage({
								events: {
									...Object(F.defaults)(s()),
									actionSource: n
								},
								type: "eventData"
							}, Object(_.a)())
						})
					},
					onTwoFactorChanged: () => e(Object(p.z)(!1)),
					onSSOLinkSuccess: (t, n, s) => {
						e(f({
							linkedIdentity: n
						})), e(Object(u.g)(s)), e(Object(y.f)(Object(y.e)(t, I.b.SuccessCommunity)))
					},
					onSSOUnlinkSuccess: (t, n, s) => {
						e(g({
							linkedIdentity: n
						})), e(Object(u.g)(s)), e(Object(y.f)(Object(y.e)(t, I.b.SuccessCommunity)))
					},
					showToast: (t, n) => {
						e(Object(y.f)(Object(y.e)(t, n)))
					}
				})),
				Q = ({
					data: e,
					origin: t
				}) => e && e.success && (e.type === x.a.ChangePassword || e.type === x.a.Close || e.type === x.a.CreateAccount || e.type === x.a.GoogleOneTapDisplayed || e.type === x.a.GoogleOneTapFlowFailed || e.type === x.a.GoogleOneTapSkipped || e.type === x.a.Login || e.type === x.a.PreferenceStatus || e.type === x.a.Register || e.type === x.a.Resize || e.type === x.a.ShowStep || e.type === x.a.SSOLinkFail || e.type === x.a.SSOLinkSuccess || e.type === x.a.SSOUnlinkFail || e.type === x.a.SSOUnlinkSuccess || e.type === x.a.Subscribe || e.type === x.a.TwoFactorChanged) && t === s.a.accountManagerOrigin,
				z = {
					"select-account": "link_account",
					"confirm-otp": "link_account_otp",
					"confirm-password": "link_account_password"
				};
			class J extends a.a.Component {
				constructor() {
					super(...arguments), this.iframeRef = a.a.createRef(), this.isAccountCreated = !1, this.isSignupModalDismissed = !1, this.isSignupModalSuccessful = !1, this.trackResizing = !0, this.currentStep = null, this.state = {
						iframeStyles: {}
					}, this.focusFirstVisibleIframeInput = () => {
						try {
							if (!this.iframeRef.current) return;
							const e = this.iframeRef.current.contentWindow ? this.iframeRef.current.contentWindow.document : this.iframeRef.current.contentDocument;
							if (!e) return;
							const t = e.querySelector('input:not([type="hidden"])');
							t && t.focus()
						} catch (e) {}
					}, this.handleLinkSSOSuccess = e => {
						const t = e === N.a.Apple ? P.a.LINK_APPLE_SSO : P.a.LINK_GOOGLE_SSO;
						this.props.onSSOLinkSuccess(o.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), e, t)
					}, this.handleUnlinkSSOSuccess = e => {
						const t = e === N.a.Apple ? P.a.UNLINK_APPLE_SSO : P.a.UNLINK_GOOGLE_SSO;
						this.props.onSSOUnlinkSuccess(o.fbt._("Account disconnected", null, {
							hk: "mUOBy"
						}), e, t)
					}, this.setIframeStyles = e => {
						this.setState(t => ({
							iframeStyles: {
								...t.iframeStyles,
								...e
							}
						}))
					}, this.onMessage = e => {
						const {
							data: t
						} = e;
						if (!this.iframeRef.current || e.source !== this.iframeRef.current.contentWindow || !Q(e)) return;
						const {
							exposeOnboardingExperiment: n,
							isOnboardingExperiment: s
						} = this.props;
						if (t.type === x.a.CreateAccount) this.isAccountCreated = !0;
						else if (t.type === x.a.Close) this.closedByUser();
						else if (t.type === x.a.Subscribe) this.onSubscribe(t.subscriptions || t.subredditIds);
						else if (t.type === x.a.Login) this.onLogIn();
						else if (t.type === x.a.ChangePassword) this.onChangePassword();
						else if (t.type === x.a.Resize) {
							if (t.payload && this.trackResizing) {
								const e = t.payload;
								e.height && e.width && this.setIframeStyles(e)
							}
						} else if (t.type === x.a.TwoFactorChanged) this.props.onTwoFactorChanged();
						else if (t.type === x.a.SSOLinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === x.a.SSOLinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleLinkSSOSuccess(e)
						} else if (t.type === x.a.SSOUnlinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === x.a.SSOUnlinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleUnlinkSSOSuccess(e)
						} else t.type === x.a.GoogleOneTapDisplayed ? this.props.isLoggedIn || (this.setIframeStyles({
							visibility: "visible"
						}), this.onGoogleOneTapUIViewed(), s && n()) : t.type === x.a.GoogleOneTapFlowFailed ? this.props.isLoggedIn || this.onGoogleOneTapFlowFailed(t.message) : t.type === x.a.GoogleOneTapSkipped ? this.props.isLoggedIn || (this.props.onGoogleOneTapSkipped && this.props.onGoogleOneTapSkipped(t.reason), this.close()) : t.type === x.a.ShowStep ? this.onShowStep(t.step) : t.type === x.a.PreferenceStatus ? this.onEmailDigestsStatus(t.successfullySet) : this.onSignUp(t.numberSubredditsSelected, t.subredditIds)
					}, this.onSubscribe = e => {
						this.props.onSubscriptionsChanged && this.props.onSubscriptionsChanged(e || [])
					}, this.onLogIn = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(S.a)(C.b.JustLoggedIn, !0), window.location.reload())
					}, this.onChangePassword = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : window.location.reload()
					}, this.onSignUp = (e, t) => {
						const {
							isOnboardingEnabled: n,
							redirectUrl: s
						} = this.props;
						let o = "";
						if (s) o = s;
						else if ("/" !== window.location.pathname || n) o = window.location.href;
						else {
							const n = 0;
							o = (e || t && t.length || 0) > n ? E.c[E.b.Home] : E.c[E.b.Popular]
						}
						this.isSignupSurveyTriggerSource() && (this.isSignupModalSuccessful = !0), this.redirectTo(o, n)
					}, this.onShowStep = e => {
						this.currentStep = e, e === x.b.Subscribe && (this.trackResizing = !1, this.setIframeStyles({
							height: void 0,
							width: void 0
						})), this.props.onShowScreen && this.props.onShowScreen(e)
					}, this.onGoogleOneTapFlowFailed = e => {
						this.close(), this.props.showToast(e || o.fbt._("Something went wrong. Please try again later", null, {
							hk: "3TdJZE"
						}), I.b.Error)
					}, this.onEmailDigestsStatus = e => {
						e ? this.props.showToast(o.fbt._("Changes saved", null, {
							hk: "6bifV"
						}), I.b.SuccessCommunity) : this.props.showToast(o.fbt._("Something went wrong. Please try again later", null, {
							hk: "1M3Z2N"
						}), I.b.Error)
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.onGoogleOneTapUIViewed && this.props.onGoogleOneTapUIViewed()
					}, this.redirectTo = (e, t = !1) => {
						const n = {
							[j.o]: "true"
						};
						t && (n[j.u] = "true"), this.isSignupModalSuccessful && (n[j.v] = "true"), window.location.replace(Object(l.a)(e, n))
					}, this.closedByUser = () => {
						const {
							isDismissSurveyEnabled: e,
							isMoreRepliesSignupEnabled: t,
							onDismissSignupTrigger: n,
							sendEvent: s
						} = this.props;
						if (this.currentStep) {
							const e = z[this.currentStep];
							e && s(Object(w.p)(e))
						}
						this.isSignupSurveyTriggerSource() && (this.isSignupModalDismissed = !0), t && s(Object(k.b)()), this.close(), this.isSignupModalDismissed && e && n()
					}, this.close = () => {
						this.props.onClose && this.props.onClose();
						try {
							sessionStorage.removeItem("data"), sessionStorage.removeItem("initialData")
						} catch (e) {}
						this.isAccountCreated && this.onSignUp()
					}, this.isLoaded = !1, this.onIFrameLoad = e => {
						this.currentStep = null, this.isLoaded ? (this.trackResizing = !1, this.setIframeStyles({
							height: void 0,
							width: void 0
						}), this.props.onChange && this.props.onChange()) : this.isLoaded = !0
					}, this.isSignupSurveyTriggerSource = () => {
						const {
							actionSource: e
						} = this.props;
						return e && u.l.includes(e)
					}
				}
				componentDidMount() {
					const {
						actionSource: e,
						exposeIFrameElement: t,
						exposeOnboardingExperiment: n,
						isOnboardingExperiment: s,
						oniFrameLoaded: o,
						path: r,
						setRef: a
					} = this.props;
					this.iframeRef.current && (this.iframeRef.current.onload = () => {
						o(this.iframeRef.current, e), this.focusFirstVisibleIframeInput()
					}, a && a(this.iframeRef), t && t(this.iframeRef.current)), s && [x.c.Index, x.c.Register].includes(r) && n(), window.addEventListener("message", this.onMessage)
				}
				componentDidUpdate(e) {
					this.props.path !== e.path && e.path === x.c.GoogleOneTap && this.iframeRef.current && this.setIframeStyles({
						height: void 0,
						visibility: void 0,
						width: void 0
					})
				}
				componentWillUnmount() {
					window.removeEventListener("message", this.onMessage)
				}
				render() {
					const {
						accountManagerSrc: e,
						className: t,
						showCloseButton: n
					} = this.props, {
						iframeStyles: s
					} = this.state;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(H, {
						className: t,
						innerRef: this.iframeRef,
						src: e,
						style: s,
						onLoad: this.onIFrameLoad
					}), n && a.a.createElement(W, {
						onClick: this.closedByUser
					}, a.a.createElement(q, null)))
				}
			}
			t.a = K(Object(O.c)(J))
		},
		"./src/reddit/components/AccountManagerModal/index.m.less": function(e, t, n) {
			e.exports = {
				Overlay: "_1UtFUrE2ijAe5ba5uPgcfQ",
				overlay: "_1UtFUrE2ijAe5ba5uPgcfQ",
				IframeContainer: "_34uo64r1j-TcpBGXAQcZJ1",
				iframeContainer: "_34uo64r1j-TcpBGXAQcZJ1",
				small: "FBb4FZ4ng7CvLYrT6LBdp",
				ssoConfirmPassword: "_3CQoZKhSqrJrbOGJxp03DS",
				mResponsive: "_2CwLGmlfoqlHFJcOwm0RS-",
				linkActionSSOFail: "_1ALB_4jSDt6vPeELvg9lKL",
				linkActionSsoFail: "_1ALB_4jSDt6vPeELvg9lKL",
				mGoogleOneTap: "_15Lh8Q9iPGbXdxumHm8cT9",
				mHiddenOverlay: "_233XfOVq91N_ugGQDBb_OT"
			}
		},
		"./src/reddit/components/AlertBanner/Wrapper.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "GfthJQJvWCHdUoMi6YjYa",
				wrapper: "GfthJQJvWCHdUoMi6YjYa"
			}
		},
		"./src/reddit/components/AlertBanner/heights.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = (e, t) => ({
					[e.showDeprecated]: !(!t.browserInfo || !t.browserInfo.isDeprecated),
					[e.showFPR]: !!t.showFPR,
					[e.showSuspended]: !!t.showSuspended,
					[e.offline]: !!t.showOffline,
					[e.navExperiment]: !!t.navExperiment
				}),
				o = (e, t) => ({
					[e.showEmailCollectionBanner]: !!t.showEmailCollectionBanner
				})
		},
		"./src/reddit/components/AlertBanner/index.m.less": function(e, t, n) {
			e.exports = {
				underlineButton: "_1uQwMnfXrOfzkL_CFxH6fd",
				underlineLink: "vOGtEDdh1mVbkqinhg3Ov",
				wrapper: "_3el1HrJryfAxBUzu4HsIhE",
				deprecated: "_2s1xq3Ji1Oj7oZtdSqWznV",
				fpr: "_36j6vvbAY0wIrxbyXuNQhn",
				suspended: "_1ivoPEQV9lryC0mH-f_uGY",
				closeButton: "_1oAzKCYwbVOQ-AbuRZfMg2",
				closeIcon: "_6aklZuhHMm1XJcsi8dEeP"
			}
		},
		"./src/reddit/components/AppRouter/index.m.less": function(e, t, n) {
			e.exports = {
				header: "cx1ohrUAq6ARaXTX2u8YN",
				showDeprecated: "_378Md-M6pOqwzEiV3lAwYk",
				showFPR: "_2P-zXcOfggYIWnL3EfXUHP",
				showFpr: "_2P-zXcOfggYIWnL3EfXUHP",
				showSuspended: "_3o7sV2ySJ76-f1ktwzclmi",
				offline: "_1OVuPhC0s89CZodD5qWMWP",
				navExperiment: "_32g3BKfzA1V3Y0eaczZbYl",
				inline: "_2aHCVoJEFfwy05xpKqUif2",
				overlayContentWrapper: "_2DJXORCrmcNpPTSq0LqL6i",
				mIsCommentsLightbox: "_26pbaCw90eAC80WRqUfICJ",
				mIsLargeCommentsLightbox: "_2zCdbqYzIDmabv-Dk_ILKk",
				overlayWrapper: "_2mIbM_6nl-2OnOGEbEMRXa",
				main: "_1nxEQl5D2Bx2jxDILRHemb",
				mShowingPaddedPinnedDescriptions: "_3x1dyL19KnZ4kI6i9TlRp4",
				pinnedSubscriptions: "zoWOQnp55WuhEugRSwfw1",
				withUpsell: "_1kFzDy0hQVq-CvguZsCcmV",
				lightboxHeaderWrapper: "_3obgdFz00GvpqpuX8QCsNK",
				lightboxHeaderWrapperExp: "_1k5guql3KcBJzH7i7UCr7Y",
				bottomAdContainer: "_2SL_DAWw1V6pxZysgrdeBe",
				sidebarFooter: "_2AJ0ZwpZtFJ10GdcU0CUew",
				sidebarFooterWithAd: "_1ht98h5gXjzYhFyRZgB0Pv",
				bottomSpacer: "_14-8KVF3BKuTNsLNWcOG2X",
				showEmailCollectionBanner: "_25N7Qd1z8aRQYtQhjEFyTC",
				overlayScrollContainer: "_29IbETWb5VVDcfk_-GumWz",
				mediaIsFullscreen: "_34Bl1Of1839ZWJXR8IY0Ym",
				popupContainer: "_13Vg6OZEIy5AcJ_DOw6jK0",
				offlineBanner: "_1C1Dn0NhEGQkEA9tDGKKSH"
			}
		},
		"./src/reddit/components/AppRouter/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _m
			}));
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/isEqual.js"),
				a = n.n(r),
				i = n("./node_modules/lodash/omit.js"),
				c = n.n(i),
				l = n("./node_modules/lodash/throttle.js"),
				d = n.n(l),
				u = n("./node_modules/react/index.js"),
				m = n.n(u),
				p = n("./node_modules/react-redux/es/index.js"),
				b = n("./node_modules/react-router/esm/react-router.js"),
				h = n("./node_modules/react-router-redux/es/index.js"),
				f = n("./src/reddit/contexts/NavbarExp.ts"),
				g = n("./node_modules/reselect/es/index.js"),
				v = n("./src/lib/classNames/index.ts"),
				y = n("./src/lib/constants/index.ts"),
				O = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				x = n("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				C = n("./src/lib/fastdom/index.ts"),
				E = n("./src/lib/FocusTrap/index.ts"),
				P = n("./src/lib/isEqualWithoutKey/index.ts"),
				j = n("./src/lib/isSimpleClick/index.ts"),
				_ = n("./src/reddit/actions/header.ts"),
				S = n("./src/reddit/actions/survey/index.ts"),
				k = n("./src/reddit/components/EmailCollection/Banner/Loader.ts"),
				w = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				M = n("./node_modules/polished/dist/polished.es.js"),
				N = n("./node_modules/react-motion/lib/react-motion.js"),
				I = n("./src/lib/lessComponent.tsx"),
				T = n("./src/reddit/components/AccountManagerModal/IFrame/index.tsx"),
				A = n("./src/reddit/components/TrackingHelper/index.tsx"),
				R = n("./src/reddit/constants/accountManager.ts"),
				L = n("./src/reddit/helpers/trackers/onboarding.ts"),
				D = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				F = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				B = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				U = n("./src/config.ts"),
				G = n("./src/reddit/components/Carousel/index.m.less"),
				H = n.n(G);
			! function(e) {
				e.Fade = "fade", e.Slide = "slide"
			}(s || (s = {}));
			class W extends m.a.Component {
				constructor(e) {
					super(e), this.timeoutNumber = null, this.handleNextPage = () => {
						this.props.animationType === s.Fade ? this.handleNextFadePage() : this.handleNextSlidePage(), this.setPageInterval()
					}, this.handleNextFadePage = () => {
						this.setState((e, t) => ({
							...e,
							pageNumber: (e.pageNumber + 1) % t.items.length
						}))
					}, this.handleNextSlidePage = () => {
						this.setState((e, t) => {
							const n = 10 * t.items.length;
							return {
								...e,
								pageNumber: (e.pageNumber + 1) % n,
								items: e.pageNumber === n - 1 ? t.items : e.pageNumber === e.items.length - 1 ? e.items.concat(t.items) : e.items
							}
						})
					}, this.clearPageInterval = () => {
						this.timeoutNumber && window.clearTimeout(this.timeoutNumber)
					}, this.setPageInterval = (e = 0) => {
						this.clearPageInterval(), this.timeoutNumber = window.setTimeout(this.handleNextPage, this.props.itemTime + e)
					}, this.handleItemClick = () => {
						this.clearPageInterval(), this.handleNextPage()
					}, this.renderItemExtra = ({
						img: e,
						style: t
					}) => m.a.createElement("img", {
						key: e,
						src: `${U.a.assetPath}/${e}`,
						style: t
					}), this.renderItem = (e, t) => {
						const {
							animationType: n,
							itemWidth: o,
							shouldHandleMouseClicks: r
						} = this.props, {
							pageNumber: a
						} = this.state, i = n === s.Fade ? {
							opacity: t === a ? 1 : 0
						} : {
							marginLeft: 0 === t ? -o * a : void 0
						};
						return m.a.createElement("div", {
							className: Object(v.a)(H.a.item, H.a[n]),
							key: `item-${t}`,
							style: {
								...i,
								backgroundImage: `url("${U.a.assetPath}/${e.img}")`,
								width: o
							},
							onClick: r ? this.handleItemClick : void 0
						}, e.extra && e.extra.map(this.renderItemExtra))
					}, this.renderIndicator = (e, t) => m.a.createElement("div", {
						className: Object(v.a)(H.a.indicator, {
							[H.a.indicatorSelected]: this.state.pageNumber % this.props.items.length === t
						}),
						key: t
					}), this.state = {
						items: e.items,
						pageNumber: 0
					}
				}
				componentDidMount() {
					this.setPageInterval(this.props.delay)
				}
				componentWillUnmount() {
					this.clearPageInterval()
				}
				render() {
					const {
						className: e,
						shouldShowIndicators: t,
						items: n
					} = this.props;
					return m.a.createElement("div", {
						className: Object(v.a)(e, H.a.container)
					}, m.a.createElement("article", {
						className: H.a.items
					}, this.state.items.map(this.renderItem)), t && m.a.createElement("footer", {
						className: H.a.indicators
					}, n.map(this.renderIndicator)))
				}
			}
			var q = n("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				V = n.n(q);
			const K = I.a.div("Container", V.a),
				Q = I.a.wrapped(W, "Carousel", V.a),
				z = I.a.div("Phone", V.a),
				J = I.a.img("Frame", V.a),
				X = `${U.a.assetPath}/img/frontpage-signup/android-frame.png`,
				Y = `${U.a.assetPath}/img/frontpage-signup/iphone-frame.png`,
				Z = [{
					img: "img/frontpage-signup/android-1.png"
				}, {
					img: "img/frontpage-signup/android-2.png"
				}, {
					img: "img/frontpage-signup/android-3.png"
				}, {
					img: "img/frontpage-signup/android-4.png"
				}],
				$ = [{
					img: "img/frontpage-signup/iphone-1.png"
				}, {
					img: "img/frontpage-signup/iphone-2.png"
				}, {
					img: "img/frontpage-signup/iphone-3.png"
				}, {
					img: "img/frontpage-signup/iphone-4.png"
				}];
			var ee = e => {
					const {
						className: t
					} = e;
					return m.a.createElement(K, {
						className: t
					}, m.a.createElement(z, {
						className: V.a.android
					}, m.a.createElement(Q, {
						animationType: s.Fade,
						className: V.a.android,
						delay: 2500,
						items: Z,
						itemTime: 5e3,
						itemWidth: 240
					}), m.a.createElement(J, {
						src: X
					})), m.a.createElement(z, {
						className: V.a.iphone
					}, m.a.createElement(Q, {
						animationType: s.Fade,
						className: V.a.iphone,
						items: $,
						itemTime: 5e3,
						itemWidth: 232
					}), m.a.createElement(J, {
						src: Y
					})))
				},
				te = n("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				ne = n.n(te);
			const se = I.a.div("Container", ne.a),
				oe = I.a.span("Disclaimer", ne.a),
				re = I.a.a("Link", ne.a);
			var ae = e => m.a.createElement(se, {
					className: e.className
				}, m.a.createElement(re, {
					href: "https://about.reddit.com"
				}, o.fbt._("about", null, {
					hk: "4n6gdA"
				})), m.a.createElement(re, {
					href: "https://www.redditinc.com/advertising"
				}, o.fbt._("advertise", null, {
					hk: "3M40BX"
				})), m.a.createElement(re, {
					href: "http://www.redditblog.com/"
				}, o.fbt._("blog", null, {
					hk: "iEUEu"
				})), m.a.createElement(re, {
					href: "https://about.reddit.com/careers/"
				}, o.fbt._("careers", null, {
					hk: "1nRiZW"
				})), m.a.createElement(re, {
					href: "https://www.reddithelp.com"
				}, o.fbt._("help", null, {
					hk: "3CJ8k2"
				})), m.a.createElement(re, {
					href: "https://about.reddit.com/press/"
				}, o.fbt._("press", null, {
					hk: "x8wb0"
				})), m.a.createElement(re, {
					href: "https://www.reddit.com/coins"
				}, o.fbt._("Reddit coins", null, {
					hk: "4EwVXk"
				})), m.a.createElement(re, {
					href: "https://redditgifts.com/"
				}, o.fbt._("Reddit gifts", null, {
					hk: "1XCLXF"
				})), m.a.createElement(re, {
					href: "https://www.reddit.com/premium"
				}, o.fbt._("Reddit premium", null, {
					hk: "1v1E7F"
				})), m.a.createElement(re, {
					href: "https://www.redditinc.com/policies/user-agreement"
				}, o.fbt._("User agreement", null, {
					hk: "18j1Xy"
				})), m.a.createElement(re, {
					href: "https://www.reddit.com/help/healthycommunities/"
				}, o.fbt._("Mod policy", null, {
					hk: "18VnG9"
				})), m.a.createElement(oe, null, o.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1AMxtg"
				}))),
				ie = n("./src/reddit/components/FrontpageSignup/Upsell/index.m.less"),
				ce = n.n(ie);
			const le = {
					stiffness: 300,
					damping: 40,
					precision: 1
				},
				de = I.a.div("Container", ce.a),
				ue = I.a.wrapped(T.a, "IFrame", ce.a),
				me = I.a.wrapped(ee, "Images", ce.a),
				pe = I.a.wrapped(ae, "Links", ce.a),
				be = I.a.div("MainContent", ce.a),
				he = I.a.div("MainContentColumn", ce.a),
				fe = I.a.button("NotReady", ce.a),
				ge = I.a.span("NotReadyText", ce.a),
				ve = I.a.wrapped(D.a, "NotReadyIcon", ce.a),
				ye = Object(O.a)(e => {
					const {
						className: t,
						containerRef: n,
						frontpageSignupVariant: s,
						onCloseClick: r,
						onVisibilityChange: a
					} = e, i = Object(F.a)(e).bodyText;
					return m.a.createElement(w.a, {
						root: "SignupUpsellContainer",
						threshold: .01,
						rootMargin: "0px 0px 0px 0px",
						onChange: a
					}, m.a.createElement(de, {
						className: t,
						innerRef: n
					}, m.a.createElement(be, null, m.a.createElement(he, null, m.a.createElement(me, null, "Images Placeholder")), m.a.createElement(he, null, m.a.createElement(ue, {
						className: Object(v.a)({
							[ce.a.fields]: Object(B.b)(s)
						}),
						path: R.c.Register,
						uiMode: R.d.Embed
					}))), m.a.createElement(fe, {
						onClick: r,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(M.i)(.8, i)
						}
					}, m.a.createElement(ge, null, o.fbt._("Not ready to sign up yet?", null, {
						hk: "5RIgO"
					})), m.a.createElement(ve, null)), m.a.createElement(pe, null)))
				});
			class Oe extends m.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class xe extends m.a.Component {
				constructor() {
					super(...arguments), this.containerRef = m.a.createRef(), this.state = {
						isClosed: !1
					}, this.closeUpsell = () => {
						"safari" in window ? this.hideUpsell() : (this.setState({
							isClosed: !0
						}), this.props.sendEvent(Object(L.a)()))
					}, this.hideUpsell = () => {
						this.containerRef.current && (this.containerRef.current.style.marginTop = `-${this.containerRef.current.offsetHeight}px`, this.props.onClose())
					}, this.handleUpsellVisibilityChange = e => {
						this.state.isClosed || e.isIntersecting || this.hideUpsell()
					}, this.renderScroller = ({
						scrollTo: e
					}) => m.a.createElement(Oe, {
						scrollTo: e
					})
				}
				render() {
					const {
						className: e,
						frontpageSignupVariant: t
					} = this.props, {
						isClosed: n
					} = this.state, s = n && this.containerRef.current ? this.containerRef.current.offsetHeight : 0;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(ye, {
						className: e,
						containerRef: this.containerRef,
						frontpageSignupVariant: t,
						onCloseClick: this.closeUpsell,
						onVisibilityChange: this.handleUpsellVisibilityChange
					}), m.a.createElement(N.Motion, {
						defaultStyle: {
							scrollTo: 0
						},
						onRest: this.hideUpsell,
						style: {
							scrollTo: Object(N.spring)(s, le)
						}
					}, this.renderScroller))
				}
			}
			var Ce = Object(A.c)(xe),
				Ee = n("./node_modules/js-cookie/src/js.cookie.js"),
				Pe = n.n(Ee),
				je = n("./src/lib/localStorageAvailable/index.ts"),
				_e = n("./src/reddit/actions/modal.ts"),
				Se = n("./src/higherOrderComponents/makeAsync.tsx"),
				ke = Object(Se.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("BadgePurchaseModal").then(n.bind(null, "./src/reddit/components/Badges/PurchaseModal/index.tsx")).then(e => e.default)
				}),
				we = n("./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx"),
				Me = n("./src/higherOrderComponents/asModal/index.tsx"),
				Ne = n("./src/reddit/controls/Button/index.tsx"),
				Ie = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Te = n("./src/reddit/selectors/activeModalId.ts"),
				Ae = n("./src/reddit/components/DownToChatBanner/DownToChatPendingModal/index.m.less"),
				Re = n.n(Ae);
			const {
				fbt: Le
			} = n("./node_modules/fbt/lib/FbtPublic.js"), De = I.a.button("CloseButton", Re.a), Fe = I.a.wrapped(Ie.a, "Close", Re.a), Be = I.a.div("Container", Re.a), Ue = I.a.p("Description", Re.a), Ge = I.a.div("Footer", Re.a), He = I.a.h3("Heading", Re.a), We = I.a.img("SnooImage", Re.a), qe = I.a.div("Wrapper", Re.a), Ve = Object(g.c)({
				activeModalId: Te.a
			});
			class Ke extends m.a.Component {
				constructor() {
					super(...arguments), this.onCloseButtonClick = () => {
						const {
							modalToggled: e,
							activeModalId: t
						} = this.props;
						t && e(t)
					}
				}
				render() {
					return m.a.createElement(qe, null, m.a.createElement(Be, null, m.a.createElement(He, null, Le._("Ok, looking for people now...", null, {
						hk: "2fr3Y9"
					})), m.a.createElement(Ue, null, Le._("You’ll be redirected to your chat room shortly.", null, {
						hk: "4tpnrt"
					})), m.a.createElement(We, {
						src: `${U.a.assetPath}/img/magnifying-glass-snoo.png`
					})), m.a.createElement(Ge, null, m.a.createElement(Ne.l, {
						onClick: this.onCloseButtonClick
					}, Le._("Sounds good", null, {
						hk: "1OMLn5"
					}))), m.a.createElement(De, {
						onClick: this.onCloseButtonClick
					}, m.a.createElement(Fe, null)))
				}
			}
			var Qe = Object(p.b)(Ve, e => ({
					modalToggled: t => e(Object(_e.i)(t))
				}))(Object(Me.a)(Object(A.c)(Ke))),
				ze = n("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx"),
				Je = n("./src/lib/loadWithRetries/index.ts");
			var Xe = Object(Se.a)({
				getComponent: () => Object(Je.a)(() => n.e("NotificationsPrePromptLoader").then(n.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const Ye = () => null;
			var Ze = Object(Se.a)({
					ErrorComponent: Ye,
					getComponent: () => Object(Je.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("ModQueue~ModQueuePages~ModerationPages"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
					LoadingComponent: Ye
				}),
				$e = n("./src/reddit/actions/structuredStyles/index.ts"),
				et = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				tt = n("./src/reddit/constants/modals.ts"),
				nt = n("./src/reddit/controls/TextButton/index.tsx"),
				st = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			const {
				fbt: ot
			} = n("./node_modules/fbt/lib/FbtPublic.js"), rt = Object(p.b)(null, (e, {
				subredditId: t
			}) => ({
				closeModal: () => {
					e(Object(_e.i)(tt.a.BLADE_NIGHTMODE)), e(Object($e.f)())
				},
				openBlade: () => {
					e(Object($e.e)(t))
				}
			}));
			var at = Object(Me.a)(rt(e => m.a.createElement(et.e, null, m.a.createElement(et.i, null, m.a.createElement(st.a, null, m.a.createElement(et.q, null, ot._("Turning off Night Mode", null, {
					hk: "2XW7Rk"
				})), m.a.createElement(nt.a, {
					onClick: e.closeModal
				}, m.a.createElement(et.b, null)))), m.a.createElement(et.l, null, m.a.createElement(et.o, null, ot._("In order to continue styling your community, Night Mode must be turned off.", null, {
					hk: "2qLSfr"
				}))), m.a.createElement(et.g, null, m.a.createElement(et.a, {
					onClick: e.closeModal,
					"data-redditstyle": !0
				}, ot._("Cancel", null, {
					hk: "2TSLl5"
				})), m.a.createElement(et.r, {
					onClick: e.openBlade,
					"data-redditstyle": !0
				}, ot._("Continue", null, {
					hk: "413jMZ"
				})))))),
				it = n("./src/reddit/actions/authorFlair.ts"),
				ct = n("./src/reddit/actions/gold/powerups.ts"),
				lt = n("./src/reddit/actions/userFlair/index.ts"),
				dt = n("./src/reddit/components/FlairPickerTitle/index.tsx"),
				ut = n("./src/reddit/components/FlairPickerWrapper/index.tsx"),
				mt = n("./src/reddit/components/FlairPreview/index.tsx"),
				pt = n("./src/reddit/components/FlairSearch/index.tsx"),
				bt = n("./src/reddit/components/PostFlairPicker/helpers.ts"),
				ht = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				ft = n("./src/reddit/layout/row/Inline/index.tsx"),
				gt = n("./src/reddit/models/Flair/index.ts"),
				vt = n("./src/reddit/models/User/index.ts"),
				yt = n("./src/reddit/selectors/authorFlair.ts"),
				Ot = n("./src/reddit/selectors/moderatorPermissions.ts"),
				xt = n("./src/reddit/selectors/telemetry.ts"),
				Ct = n("./src/reddit/selectors/user.ts"),
				Et = n("./src/reddit/selectors/userFlair.ts"),
				Pt = n("./src/reddit/components/UserFlairPicker/index.m.less"),
				jt = n.n(Pt);
			const _t = e => e.flairModalContext && e.currentUser && Object(vt.e)(e.currentUser) === e.flairModalContext.username,
				St = e => e.authorFlair || _t(e) && e.userFlairData.applied || null,
				kt = I.a.wrapped(ft.a, "Section", jt.a),
				wt = I.a.div("CheckboxText", jt.a);
			class Mt extends m.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(xt.subredditById)(t, this.props.subredditId)
					})), this.setSelectedFlair = e => this.setState({
						previewFlair: e
					}), this.onApply = () => {
						var e;
						const {
							props: t,
							state: n
						} = this, s = n.previewFlair ? n.previewFlair.templateId : void 0;
						t.activeFlairChanged(n.previewFlair, s, n.showFlair, t.flairModalContext), (null === (e = t.flairModalContext) || void 0 === e ? void 0 : e.isOpenedFromAchievementsModal) ? t.openAchiementFlairModal() : t.closeModal(), this.track(this.getTrackingNoun("flairadd_mod", "flairadd_user"))
					}, this.onClear = () => this.setSelectedFlair(null), this.onToggleShowFlair = () => {
						this.setState({
							showFlair: !this.state.showFlair
						})
					}, this.state = {
						previewFlair: St(e),
						showFlair: e.userFlairData.displaySettings.isUserEnabled
					}
				}
				canSave() {
					const {
						userFlairData: e
					} = this.props, {
						previewFlair: t
					} = this.state, {
						templates: n,
						permissions: s
					} = e, {
						isUserEnabled: o
					} = e.displaySettings, r = this.state.showFlair !== o, a = St(this.props);
					if (!s.canUserChange) return r;
					const {
						canSave: i,
						reason: c
					} = Object(bt.b)(n, t, a);
					return !(i || c !== bt.a.NoChanges || !r) || i
				}
				render() {
					const {
						props: e,
						state: t
					} = this, {
						userFlairData: n,
						subredditId: s,
						flairModalContext: r
					} = e, a = n.permissions.canUserChange, i = n.permissions.canUserChange, c = null == r ? void 0 : r.isOpenedFromAchievementsModal, {
						templates: l,
						templateIds: d
					} = n, u = this.canSave(), p = _t(e);
					return m.a.createElement(ut.a, null, m.a.createElement(dt.a, {
						onClosePressed: e.closeModal,
						title: o.fbt._("Select your community flair", null, {
							hk: "199vaD"
						})
					}), m.a.createElement(mt.a, {
						flair: t.previewFlair,
						flairTemplateType: gt.d.UserFlair,
						placeholderText: o.fbt._("u/username", null, {
							hk: "2EDH9"
						})
					}), i && m.a.createElement(pt.a, {
						flair: t.previewFlair,
						flairTemplateType: gt.d.UserFlair,
						subredditId: s,
						templates: l,
						templateIds: d,
						onChange: this.setSelectedFlair
					}), p && m.a.createElement(kt, null, m.a.createElement(ht.a, {
						isSelected: t.showFlair,
						onClick: this.onToggleShowFlair,
						text: m.a.createElement(wt, null, o.fbt._("Show my user flair on this community", null, {
							hk: "x9nc9"
						}))
					})), m.a.createElement("div", {
						className: jt.a.buttonsRow
					}, c && m.a.createElement(Ne.t, {
						className: jt.a.goBackButton,
						priority: Ne.c.Plain,
						onClick: e.openAchiementFlairModal
					}, o.fbt._("Go Back", null, {
						hk: "4fisFS"
					})), m.a.createElement("div", {
						className: jt.a.rightSideButtons
					}, a && m.a.createElement(Ne.o, {
						className: jt.a.clearButton,
						onClick: this.onClear
					}, o.fbt._("Clear Flair", null, {
						hk: "23i2at"
					})), m.a.createElement(Ne.l, {
						disabled: !u,
						onClick: this.onApply
					}, o.fbt._("Apply", null, {
						hk: "ZvO9n"
					})))))
				}
			}
			const Nt = Object(p.b)(() => Object(g.c)({
				authorFlair: yt.b,
				currentUser: Ct.k,
				flairModalContext: yt.c,
				isMod: (e, t) => !!Object(Ot.m)(e, t),
				userFlairData: Et.d
			}), (e, t) => ({
				activeFlairChanged: (n, s, o, r) => e(Object(lt.f)(n, s, o, r.username, t.subredditId)),
				closeModal: () => e(Object(it.b)({
					username: null,
					subredditId: null
				})),
				openAchiementFlairModal: () => e(Object(ct.f)())
			}))(Mt);
			var It = Object(Me.a)(Object(A.c)(Nt)),
				Tt = n("./src/reddit/selectors/bannedUser.ts"),
				At = n("./src/reddit/selectors/muted.ts"),
				Rt = n("./src/reddit/selectors/notificationPrefs.ts"),
				Lt = n("./src/reddit/selectors/platform.ts"),
				Dt = n("./src/reddit/selectors/removalReasons.ts"),
				Ft = n("./src/reddit/constants/cookie.ts"),
				Bt = n("./src/reddit/featureFlags/index.ts"),
				Ut = n("./src/reddit/helpers/localStorage/index.ts"),
				Gt = n("./src/reddit/helpers/toggleBodyScroll/index.ts");
			const Ht = Object(g.c)({
				activeModalId: Te.a,
				authorContext: yt.c,
				badgePurchaseModalIsOpen: Object(Te.b)(tt.a.BADGE_PURCHASE),
				banContext: Tt.a,
				banModalIsOpen: Object(Te.b)(tt.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(Te.b)(tt.a.BLADE_NIGHTMODE),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				downToChatPendingModalIsOpen: Object(Te.b)(tt.a.DOWN_TO_CHAT_PENDING_MODAL),
				introModalFeatureEnabled: e => Bt.d.introModal(e),
				isOverlayOpen: Lt.i,
				moderatorPermissions: e => {
					const t = Object(Lt.c)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: At.a,
				muteModalIsOpen: Object(Te.b)(tt.a.MUTE_USER),
				notificationsPrePromptIsOpen: Rt.d,
				removalReasonContext: Dt.b,
				removalReasonModalIsOpen: Object(Te.b)(tt.a.ADD_REMOVAL_REASON),
				subredditId: Lt.c,
				userFlairModalIsOpen: Object(Te.b)(tt.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: Ct.x,
				userInRedesignBeta: Ct.E,
				userIsLoggedIn: Ct.K,
				userIsMod: Ct.L,
				userIsNew: Ct.O
			});
			class Wt extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(je.a)()) return; {
						const e = Pe.a.get(Ft.a);
						e && Pe.a.remove(Ft.a, {
							domain: U.a.cookieDomain
						});
						const t = Object(Ut.E)(tt.a.ALPHA_CONSUMER);
						t && Object(Ut.X)(tt.a.ALPHA_CONSUMER), (e || t) && Object(Ut.Fb)(tt.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, n = Object(Ut.E)(tt.a.REDESIGN_MODAL);
					!e && n ? t() : e && !n && Object(Ut.Fb)(tt.a.REDESIGN_MODAL, !0)
				}
				componentDidMount() {
					this.conditionalModalCheck(), this.setState({
						domReady: !0
					})
				}
				componentDidUpdate() {
					this.conditionalModalCheck(), tt.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(Gt.a)(), 500) : setTimeout(() => Object(Gt.b)(), 500))
				}
				render() {
					const {
						authorContext: e,
						badgePurchaseModalIsOpen: t,
						banContext: n,
						banModalIsOpen: s,
						bladeNightmodeModalIsOpen: o,
						currentBadgePurchase: r,
						downToChatPendingModalIsOpen: a,
						muteContext: i,
						muteModalIsOpen: c,
						notificationsPrePromptIsOpen: l,
						removalReasonContext: d,
						removalReasonModalIsOpen: p,
						sendEvent: b,
						subredditId: h,
						toggleBanModal: f,
						toggleMuteModal: g,
						toggleRemovalReasonsModal: v,
						userFlairModalIsOpen: y
					} = this.props, O = (e, t, n) => s => () => b(o => ({
						source: e,
						action: "click",
						noun: s,
						comment: n && Object(xt.comment)(o, n),
						post: n && Object(xt.post)(o, n),
						screen: Object(xt.screen)(o),
						subreddit: Object(xt.subredditById)(o, t)
					}));
					return m.a.createElement(u.Fragment, null, s && n && m.a.createElement(we.a, {
						contextId: n.contextId,
						subredditId: n.subredditId,
						toggleModal: f,
						trackAddEvent: O("banned", n.subredditId, n.contextId)("add_in_context"),
						trackEventWithName: O("banned", n.subredditId, n.contextId),
						username: n.username
					}), c && i && m.a.createElement(ze.a, {
						contextId: i.contextId,
						subredditId: i.subredditId,
						toggleModal: g,
						trackAddEvent: O("muted", i.subredditId, i.contextId)("add_in_context"),
						username: i.username
					}), p && d && m.a.createElement(Ze, {
						itemIds: d.itemIds,
						subredditId: d.subredditId,
						toggleModal: v,
						trackClick: O("removal_reasons", d.subredditId, 1 === d.itemIds.length ? d.itemIds[0] : void 0)
					}), o && h && m.a.createElement(at, {
						subredditId: h
					}), y && e && e.subredditId && m.a.createElement(It, {
						subredditId: e.subredditId,
						withOverlay: !0
					}), t && r && m.a.createElement(ke, {
						withOverlay: !0,
						productId: r
					}), l && m.a.createElement(Xe, null), a && m.a.createElement(Qe, {
						withOverlay: !0
					}))
				}
			}
			var qt = Object(p.b)(Ht, e => ({
					markRedesignModalAsClosed: () => e(Object(_e.j)()),
					toggleBanModal: () => e(Object(_e.i)(tt.a.BAN_USER)),
					toggleBladeNightmodeModal: () => e(Object(_e.i)(tt.a.BLADE_NIGHTMODE)),
					toggleMuteModal: () => e(Object(_e.i)(tt.a.MUTE_USER)),
					toggleRemovalReasonsModal: () => e(Object(_e.i)(tt.a.ADD_REMOVAL_REASON))
				}))(Object(A.c)(Wt)),
				Vt = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				Kt = n("./src/reddit/constants/experiments.ts"),
				Qt = n("./src/reddit/contexts/PageLayer/index.tsx"),
				zt = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Jt = n("./src/reddit/selectors/responsiveSettings.ts"),
				Xt = n("./src/reddit/components/AccountManagerModal/index.m.less"),
				Yt = n.n(Xt);
			const Zt = I.a.div("Overlay", Yt.a),
				$t = I.a.div("IframeContainer", Yt.a),
				en = {},
				tn = Object(Qt.u)(),
				nn = Object(g.c)({
					frontpageSignupVariant: B.a,
					isResponsiveSettingsEnabled: Jt.a
				}),
				sn = {
					[R.c.ChangePassword]: tt.a.CHANGE_PASSWORD_MODAL_ID,
					[R.c.Index]: tt.a.LOGIN_MODAL_ID,
					[R.c.Register]: tt.a.REGISTER_MODAL_ID,
					[R.c.EnableTwoFactor]: tt.a.ENABLE_TWO_FACTOR,
					[R.c.DisableTwoFactor]: tt.a.DISABLE_TWO_FACTOR,
					[R.c.TwoFactorBackupCodes]: tt.a.TWO_FACTOR_BACKUP_CODES,
					[R.c.LinkAppleSSO]: tt.a.LINK_APPLE_SSO,
					[R.c.UnlinkAppleSSO]: tt.a.UNLINK_APPLE_SSO,
					[R.c.LinkGoogleSSO]: tt.a.LINK_GOOGLE_SSO,
					[R.c.UnlinkGoogleSSO]: tt.a.UNLINK_GOOGLE_SSO,
					[R.c.GoogleOneTap]: tt.a.GOOGLE_ONE_TAP_MODAL_ID,
					[R.c.Onboarding]: tt.a.ONBOARDING_MODAL_ID
				};
			class on extends m.a.Component {
				constructor() {
					super(...arguments), this.subscriptions = [], this.state = {
						containerSize: null,
						isSSOLinkActionFailedModal: !1,
						removeGoogleOneTapStyles: !1,
						removeHiddenOverlay: !1
					}, this.closeModal = () => {
						this.props.closeModal(this.props.path), this.props.path === R.c.Register && Object(B.f)(this.props.frontpageSignupVariant) && zt.a.throttleFeature(Kt.gc), this.props.sendEvent(Object(L.a)(this.subscriptions))
					}, this.resizeContainer = e => {
						this.setState({
							containerSize: e
						})
					}, this.restoreContainerSize = () => {
						this.setState({
							containerSize: null
						})
					}, this.updateSubscriptions = e => {
						this.subscriptions = e
					}, this.handleSSOLinkActionFail = () => {
						this.setState({
							isSSOLinkActionFailedModal: !0
						})
					}, this.restoreIFrameStyles = () => {
						this.setState({
							removeGoogleOneTapStyles: !0,
							removeHiddenOverlay: !0
						})
					}, this.onGoogleOneTapSkipped = e => {
						"user_cancel" === e && this.props.sendEvent(Object(L.b)())
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.sendEvent(Object(L.c)())
					}, this.onShowScreen = e => {
						const {
							path: t
						} = this.props, n = t === R.c.Index || t === R.c.Register, s = t === R.c.GoogleOneTap;
						e === R.b.SelectAccount ? n ? this.resizeContainer({
							height: 474,
							width: 416
						}) : s && this.setState({
							removeHiddenOverlay: !0
						}) : e === R.b.Subscribe ? (n && this.restoreContainerSize(), this.restoreIFrameStyles()) : e === R.b.Email || e === R.b.UsernameAndPassword ? n && this.restoreContainerSize() : e !== R.b.EmailOptIn && e !== R.b.GoogleUI || this.setState({
							removeHiddenOverlay: !1
						})
					}
				}
				render() {
					const {
						frontpageSignupVariant: e,
						isResponsiveSettingsEnabled: t,
						pageLayer: n,
						path: s
					} = this.props, {
						containerSize: o,
						isSSOLinkActionFailedModal: r,
						removeGoogleOneTapStyles: a,
						removeHiddenOverlay: i
					} = this.state, c = Object(B.c)(e) || Object(B.d)(e), l = s === R.c.LinkAppleSSO || s === R.c.LinkGoogleSSO || s === R.c.UnlinkAppleSSO || s === R.c.UnlinkGoogleSSO, d = s === R.c.GoogleOneTap, u = Object(v.a)({
						[Yt.a.small]: c,
						[Yt.a.ssoConfirmPassword]: l,
						[Yt.a.linkActionSSOFail]: r,
						[Yt.a.mResponsive]: t,
						[Yt.a.mGoogleOneTap]: d && !a
					}), p = Object(v.a)({
						[Yt.a.mGoogleOneTap]: d && !a,
						[Yt.a.mHiddenOverlay]: d && !i
					}), b = !c && !r && !t;
					return m.a.createElement(Zt, {
						className: p
					}, m.a.createElement($t, {
						className: u,
						style: o || en
					}, m.a.createElement(T.a, {
						onChange: this.restoreContainerSize,
						onClose: this.closeModal,
						onGoogleOneTapSkipped: this.onGoogleOneTapSkipped,
						onGoogleOneTapUIViewed: this.onGoogleOneTapUIViewed,
						onShowScreen: this.onShowScreen,
						onSSOLinkActionFail: this.handleSSOLinkActionFail,
						onSubscriptionsChanged: this.updateSubscriptions,
						pageLayer: n,
						path: s,
						showCloseButton: b
					})))
				}
			}
			const rn = tn(Object(p.b)(nn, (e, t) => ({
				closeModal: t => {
					e(Object(_e.g)(sn[t]))
				}
			}))(Object(A.c)(on)));
			Object(Vt.b)(tt.a.CHANGE_PASSWORD_MODAL_ID, e => m.a.createElement(rn, {
				path: R.c.ChangePassword
			})), Object(Vt.b)(tt.a.LOGIN_MODAL_ID, e => m.a.createElement(rn, {
				path: R.c.Index
			})), Object(Vt.b)(tt.a.ONBOARDING_MODAL_ID, e => m.a.createElement(rn, {
				path: R.c.Onboarding
			})), Object(Vt.b)(tt.a.ENABLE_TWO_FACTOR, e => m.a.createElement(rn, {
				path: R.c.EnableTwoFactor
			})), Object(Vt.b)(tt.a.DISABLE_TWO_FACTOR, e => m.a.createElement(rn, {
				path: R.c.DisableTwoFactor
			})), Object(Vt.b)(tt.a.TWO_FACTOR_BACKUP_CODES, e => m.a.createElement(rn, {
				path: R.c.TwoFactorBackupCodes
			})), Object(Vt.b)(tt.a.REGISTER_MODAL_ID, e => m.a.createElement(rn, {
				path: R.c.Register
			})), Object(Vt.b)(tt.a.LINK_APPLE_SSO, e => m.a.createElement(rn, {
				path: R.c.LinkAppleSSO
			})), Object(Vt.b)(tt.a.LINK_GOOGLE_SSO, e => m.a.createElement(rn, {
				path: R.c.LinkGoogleSSO
			})), Object(Vt.b)(tt.a.UNLINK_APPLE_SSO, e => m.a.createElement(rn, {
				path: R.c.UnlinkAppleSSO
			})), Object(Vt.b)(tt.a.UNLINK_GOOGLE_SSO, e => m.a.createElement(rn, {
				path: R.c.UnlinkGoogleSSO
			})), Object(Vt.b)(tt.a.GOOGLE_ONE_TAP_MODAL_ID, e => m.a.createElement(rn, {
				path: R.c.GoogleOneTap
			}));
			n("./src/reddit/components/CoinPurchaseModal/async.tsx");
			const an = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestPendingModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.CONTRIBUTOR_REQUEST_PENDING, e => m.a.createElement(an, {
				withOverlay: !0
			}));
			const cn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ContributorRequestRequestModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.CONTRIBUTOR_REQUEST, e => m.a.createElement(cn, {
				withOverlay: !0
			}));
			const ln = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("RequestToJoinPrivateSubredditModal").then(n.bind(null, "./src/reddit/components/ContributorRequestFlow/RequestToJoinPrivateSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.CONTRIBUTOR_REQUEST_PRIVATE_SUREDDIT, e => m.a.createElement(ln, {
				withOverlay: !0
			}));
			const dn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CrowdControlModal").then(n.bind(null, "./src/reddit/components/CrowdControlModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.CROWD_CONTROL, e => m.a.createElement(dn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx"), n("./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsSuccess/async.tsx"), n("./src/reddit/components/Econ/Prediction/CancelPredictionModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx"), n("./src/reddit/components/Econ/TopAwardersModal/async.tsx");
			const un = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumBadgeManagement").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.SUBREDDIT_PREMIUM_BADGE_MANAGEMENT, e => m.a.createElement(un, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const mn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("SubredditPremiumUploadModal")]).then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/UploadModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, e => m.a.createElement(mn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const pn = Object(Se.a)({
					getComponent: () => Object(Je.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("FramedGild~GildModal"), n.e("GildModal")]).then(n.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				bn = e => () => {
					e()
				};
			Object(Vt.b)(tt.a.GOLD_GILD_MODAL, e => m.a.createElement(pn, {
				onOverlayClick: bn(e),
				withOverlay: !0
			}));
			var hn = n("./src/reddit/components/Gold/GildAnimationOverlay/index.tsx"),
				fn = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				gn = n.n(fn);
			const vn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => {
					return document.createElement("img").src = hn.SPARKLE_ASSET_PATH, document.createElement("img").src = hn.STARBURST_ASSET_PATH, Promise.resolve().then(n.bind(null, "./src/reddit/components/Gold/GildAnimationOverlay/index.tsx")).then(e => e.default)
				}
			});
			Object(Vt.b)(tt.a.GOLD_GILD_ANIMATION_OVERLAY, e => m.a.createElement(vn, {
				withOverlay: !0,
				className: gn.a.modalBody,
				overlayClassName: gn.a.modalOverlay
			}));
			const yn = Object(Se.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				On = e => () => {
					e()
				};
			Object(Vt.b)(tt.a.GOLD_TARGETED_OFFER_MODAL, e => m.a.createElement(yn, {
				onOverlayClick: On(e),
				withOverlay: !0
			}));
			const xn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("HarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.HARBERGER_TAX_BANNER_MANAGE, e => m.a.createElement(xn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Cn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("HarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.HARBERGER_TAX_BANNER_PURCHASE, e => m.a.createElement(Cn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const En = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("CryptoHarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.HARBERGER_TAX_CRYPTO_BANNER_MANAGE, e => m.a.createElement(En, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Pn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("CryptoHarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTaxWithCrypto/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.HARBERGER_TAX_CRYPTO_BANNER_PURCHASE, e => m.a.createElement(Pn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const jn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("GovernanceReleaseNotesModal")]).then(n.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.GOVERNANCE_RELEASE_NOTES, e => m.a.createElement(jn, {
				withOverlay: !0
			}));
			n("./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx"), n("./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx");
			const _n = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceTransferPointsModal").then(n.bind(null, "./src/reddit/components/Governance/TransferPointsModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.TRANSFER_POINTS, e => m.a.createElement(_n, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const Sn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Modal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.WALLET_REGISTRATION_MODAL, e => m.a.createElement(Sn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const kn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("ModToMemberShareModal").then(n.bind(null, "./src/reddit/components/ModToMemberShareModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.MOD_TO_MEMBER_SHARE, e => m.a.createElement(kn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const wn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditAddSubredditModal").then(n.bind(null, "./src/reddit/components/MultiredditAddSubredditModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.MULTIREDDIT_ADD_SUBREDDIT, e => m.a.createElement(wn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Mn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditCreateModal").then(n.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.MULTIREDDIT_CREATE, e => m.a.createElement(Mn, {
				onOverlayClick: e,
				withOverlay: !0
			})), Object(Vt.b)(tt.a.MULTIREDDIT_DUPLICATE, e => m.a.createElement(Mn, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Nn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditEditModal").then(n.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.MULTIREDDIT_EDIT, e => m.a.createElement(Nn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const In = () => n.e("OnboardingModal").then(n.bind(null, "./src/reddit/components/Onboarding/Modal.tsx")),
				Tn = Object(Se.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(Je.a)(In).then(e => e.default)
				});
			Object(Vt.b)(tt.a.ONBOARDING_MODAL_D2X, e => m.a.createElement(Tn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/PostFlowUpsellModal/async.tsx"), n("./src/reddit/components/PowerupsSidebar/SupportersListModal/async.tsx"), n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			const An = () => null,
				Rn = Object(Se.a)({
					ErrorComponent: An,
					getComponent: () => Object(Je.a)(() => n.e("GlobalModalContainer").then(n.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: An
				});
			Object(Vt.b)(tt.a.PINNED_POSTS_LIMIT_REACHED, e => m.a.createElement(Rn, null));
			var Ln = n("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				Dn = n.n(Ln);
			const Fn = I.a.h2("ColumnLabel", Dn.a),
				Bn = I.a.wrapped(ft.a, "ColumnWrapper", Dn.a),
				Un = I.a.div("Column", Dn.a),
				Gn = I.a.div("Description", Dn.a),
				Hn = I.a.div("Key", Dn.a),
				Wn = I.a.wrapped(et.l, "ModalMain", Dn.a),
				qn = I.a.wrapped(et.e, "ModalBody", Dn.a),
				Vn = I.a.wrapped(Ne.l, "PrimaryButton", Dn.a),
				Kn = I.a.wrapped(nt.a, "TextButton", Dn.a),
				Qn = Object(p.b)(null, e => ({
					closeModal: () => e(Object(_e.i)(tt.a.KEYBOARD_SHORTCUTS))
				})),
				zn = I.a.wrapped(Object(Me.a)(Qn(e => m.a.createElement(qn, {
					onClick: e => e.stopPropagation()
				}, m.a.createElement(et.i, null, m.a.createElement(st.a, null, m.a.createElement(et.q, null, o.fbt._("Keyboard Shortcuts", null, {
					hk: "zoWU1"
				})), m.a.createElement(Kn, {
					onClick: e.closeModal
				}, m.a.createElement(et.b, null)))), m.a.createElement(Wn, null, m.a.createElement(Bn, null, m.a.createElement(Un, null, m.a.createElement(ft.a, null, m.a.createElement(Fn, null, o.fbt._("Navigation", null, {
					hk: "3zSWEe"
				}))), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Show shortcuts", null, {
					hk: "4hXvrI"
				})), m.a.createElement(Hn, null, "Shift + ?")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Next post or comment", null, {
					hk: "1m8s9z"
				})), m.a.createElement(Hn, null, "J")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Previous post or comment", null, {
					hk: "2wzeoq"
				})), m.a.createElement(Hn, null, "K")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Next post in lightbox", null, {
					hk: "1ALR5k"
				})), m.a.createElement(Hn, null, "N")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Previous post in lightbox", null, {
					hk: "2bLo98"
				})), m.a.createElement(Hn, null, "P")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Open post", null, {
					hk: "2wD7mh"
				})), m.a.createElement(Hn, null, "Enter")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Open/close expando", null, {
					hk: "1yDst0"
				})), m.a.createElement(Hn, null, "X")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Go to post link", null, {
					hk: "c0TNr"
				})), m.a.createElement(Hn, null, "L"))), m.a.createElement(Un, null, m.a.createElement(ft.a, null, m.a.createElement(Fn, null, o.fbt._("Action", null, {
					hk: "3QI6pT"
				}))), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Upvote", null, {
					hk: "5i9NP"
				})), m.a.createElement(Hn, null, "A")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Downvote", null, {
					hk: "1ef3YP"
				})), m.a.createElement(Hn, null, "Z")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("New post", null, {
					hk: "4dtNWf"
				})), m.a.createElement(Hn, null, "C")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Reply to comment", null, {
					hk: "G8AbT"
				})), m.a.createElement(Hn, null, "R")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Submit comment/post", null, {
					hk: "13agk7"
				})), m.a.createElement(Hn, null, "Ctrl + Enter")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Save", null, {
					hk: "4yMsMq"
				})), m.a.createElement(Hn, null, "S")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Hide", null, {
					hk: "2Dn9GF"
				})), m.a.createElement(Hn, null, "H")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Open navigation", null, {
					hk: "QdGe2"
				})), m.a.createElement(Hn, null, "Q")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Collapse/expand comment", null, {
					hk: "1FxIUN"
				})), m.a.createElement(Hn, null, "Enter"))))), m.a.createElement(et.g, null, m.a.createElement(Vn, {
					"data-redditstyle": !0,
					onClick: () => {
						e.closeModal()
					}
				}, o.fbt._("Close", null, {
					hk: "4gbyAA"
				})))))), "ConnectedModal", Dn.a);
			Object(Vt.b)(tt.a.KEYBOARD_SHORTCUTS, e => m.a.createElement(zn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Jn = Object(Se.a)({
					getComponent: () => Object(Je.a)(() => n.e("SnoovatarModal").then(n.bind(null, "./src/reddit/components/SnoovatarModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Xn = e => () => {
					e()
				};
			Object(Vt.b)(tt.a.SNOOVATAR_MODAL, e => m.a.createElement(Jn, {
				onOverlayClick: Xn(e),
				withOverlay: !0
			}));
			const {
				fbt: Yn
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Zn = Object(g.c)({
				allowNavigationCallback: Lt.a
			}), $n = Object(p.b)(Zn, e => ({
				closeModal: () => e(Object(_e.i)(tt.a.BLADE_UNSAVED_CHANGES)),
				closeBlade: () => e(Object($e.a)())
			}));
			class es extends m.a.Component {
				constructor() {
					super(...arguments), this.onDiscardClick = async () => {
						this.props.closeBlade(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}, this.onCancelClick = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!1)
					}
				}
				render() {
					return m.a.createElement(et.e, null, m.a.createElement(et.i, null, m.a.createElement(st.a, null, m.a.createElement(et.q, null, Yn._("Discard unsaved changes before leaving?", null, {
						hk: "4qVGC7"
					})), m.a.createElement(nt.a, {
						onClick: this.onCancelClick
					}, m.a.createElement(et.b, null)))), m.a.createElement(et.l, null, m.a.createElement(et.p, null, Yn._("You have made some changes to your community, do you wish to leave this menu without saving?", null, {
						hk: "28O7Pm"
					}))), m.a.createElement(et.g, null, m.a.createElement(et.a, {
						onClick: this.onCancelClick,
						"data-redditstyle": !0
					}, Yn._("Cancel", null, {
						hk: "2TSLl5"
					})), m.a.createElement(et.r, {
						onClick: this.onDiscardClick,
						"data-redditstyle": !0
					}, Yn._("Discard", null, {
						hk: "1SiwLl"
					}))))
				}
			}
			const ts = Object(Me.a)($n(es));
			Object(Vt.b)(tt.a.BLADE_UNSAVED_CHANGES, e => m.a.createElement(ts, {
				withOverlay: !0
			}));
			n("./src/reddit/components/SubredditCreationModal/async.tsx");
			const ns = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(Je.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("SubredditWelcomeMessageModal")]).then(n.bind(null, "./src/reddit/components/SubredditWelcomeMessageModal/index.tsx"))).then(e => e.default)
			});
			Object(Vt.b)(tt.a.SUBREDDIT_WELCOME_MESSAGE, e => m.a.createElement(ns, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const ss = Object(g.c)({
					activeModalId: Te.a
				}),
				os = Object(p.b)(ss, e => ({
					toggleModal: t => e(Object(_e.i)(t))
				})),
				rs = 500,
				as = () => {};
			class is extends m.a.Component {
				constructor() {
					super(...arguments), this.toggleModal = () => {
						this.props.activeModalId && this.props.toggleModal(this.props.activeModalId)
					}
				}
				componentDidUpdate() {
					tt.b.includes(this.props.activeModalId || "") || (this.props.activeModalId ? setTimeout(() => Object(Gt.a)(), rs) : setTimeout(() => Object(Gt.b)(), rs))
				}
				componentWillUnmount() {
					Object(Gt.b)()
				}
				render() {
					const {
						activeModalId: e
					} = this.props;
					return Object(Vt.a)(e)(e ? this.toggleModal : as)
				}
			}
			var cs, ls = os(is),
				ds = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				us = n("./src/reddit/actions/page.ts"),
				ms = n("./src/reddit/actions/shortcuts/utils.ts"),
				ps = n("./src/reddit/icons/fonts/index.tsx"),
				bs = n("./src/reddit/selectors/header.ts"),
				hs = n("./src/reddit/selectors/userPrefs.ts"),
				fs = n("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				gs = n("./src/reddit/icons/svgs/svgIcons.tsx"),
				vs = n("./src/reddit/components/SEOTitle/index.tsx"),
				ys = n("./src/reddit/components/SubredditIcon/index.tsx"),
				Os = n("./src/reddit/components/UserIcon/index.tsx"),
				xs = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				Cs = n("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				Es = n.n(Cs);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Avatar = "Avatar", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Geotagging = "Geotagging", e.Home = "Home", e.Inbox = "Inbox", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModQueue = "ModQueue", e.Multi = "Multi", e.NotificationsInbox = "NotificationsInbox", e.Popular = "Popular", e.Powerups = "Powerups", e.Predictions = "Predictions", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Talk = "Talk", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft", e.WrappedReddit = "WrappedReddit"
			}(cs || (cs = {}));
			const Ps = () => m.a.createElement(gs.e, {
				className: Es.a.wrappedRedditDropdown
			});
			const js = (e, t = !1) => {
				const [n, s] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return m.a.createElement(m.a.Fragment, null, n && `${n}/`, s && m.a.createElement(vs.b, {
					type: vs.a.HeaderSelector
				}, s))
			};
			var _s = n("./src/lib/objectSelector/index.ts"),
				Ss = n("./src/reddit/constants/wiki.ts"),
				ks = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				ws = n("./src/reddit/selectors/subreddit.ts"),
				Ms = n("./src/reddit/selectors/topic.ts");
			var Ns = Object(_s.a)((e, {
					pageLayer: t
				}) => {
					const n = !!e.user.account,
						s = Object(Qt.X)(t);
					switch (s) {
						case "avatar":
							return {
								type: cs.Avatar
							};
						case "index":
						case "listing":
							return n ? {
								type: cs.Home
							} : {
								type: cs.Popular
							};
						case "modListing":
							return {
								type: cs.ModListing
							};
						case "modQueuePages":
							return {
								type: cs.ModQueue
							};
						case "postCreation":
							return {
								type: cs.CreatePost
							};
						case "postDraft":
							return {
								type: cs.ViewDraft
							};
						case "subredditCreation":
							return {
								type: cs.SubredditCreation
							};
						case "coins":
							return {
								type: cs.Coins
							};
						case "wrappedreddit":
							return {
								type: cs.WrappedReddit
							};
						case "powerups":
							return {
								type: cs.Powerups
							};
						case "predictions":
							return {
								type: cs.Predictions
							};
						case "premium":
							return {
								type: cs.Premium
							};
						case "acknowledgements":
							return {
								type: cs.Acknowledgements
							};
						case "appeal":
							return {
								type: cs.Appeal
							};
						case "report":
							return {
								type: cs.Report
							};
						case "userDataRequest":
							return {
								type: cs.UserDataRequest
							};
						case "subredditLeaderboard":
							return {
								type: cs.DailyCharts
							};
						case "geotagging":
							return {
								type: cs.Geotagging
							};
						case "notificationsInbox":
							return {
								type: cs.NotificationsInbox
							};
						case "talk":
							return {
								type: cs.Talk
							};
						case "topic": {
							const n = Object(Qt.t)(t),
								s = n && Object(Ms.d)(e, n);
							if (s) return {
								type: cs.Topic,
								model: s
							}
						}
					}
					const o = e.user.account;
					if (o) switch (s) {
						case "inboxPages":
							return {
								type: cs.Inbox, model: o
							};
						case "settings":
							return {
								type: cs.Settings, model: o
							}
					}
					const r = Object(Qt.R)(e, {
						pageLayer: t
					});
					if ("all" === r) return {
						type: cs.All
					};
					if ("popular" === r) return {
						type: cs.Popular
					};
					const a = Object(Qt.r)(e, {
						pageLayer: t
					});
					if (a) return "searchResults" === s ? {
						type: cs.CommunitySearch,
						model: a
					} : {
						type: cs.Community,
						model: a
					};
					const i = Object(Qt.e)(e, {
						pageLayer: t
					});
					if (i) return {
						type: cs.Multi,
						model: i
					};
					const c = Object(Qt.k)(e, {
						pageLayer: t
					});
					if (c) return {
						type: cs.UserProfile,
						model: c
					};
					const l = Object(Qt.i)(t);
					if (l) return {
						type: cs.UserProfileName,
						name: `u/${l}`
					};
					if (s && "searchResults" === s) return {
						type: cs.GlobalSearch
					};
					if ("subredditWiki" === s) {
						const n = Object(Qt.o)(e, {
								pageLayer: t
							}) || Ss.e,
							s = Object(ws.w)(e, {
								subredditName: n
							});
						if (s) return {
							type: cs.Community,
							model: s
						}
					}
					return "rpan" === s && Object(ks.a)(e) ? {
						type: cs.PublicAccessNetwork
					} : {
						type: cs.Unknown
					}
				}),
				Is = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less")),
				Ts = n.n(Is);

			function As() {
				return (As = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function Rs(e) {
				const t = e.icon,
					n = e.text,
					s = {
						id: e.id,
						role: "menuitem",
						children: m.a.createElement(m.a.Fragment, null, m.a.createElement(t, {
							className: Ts.a.icon,
							isFilled: e.isCurrentPage
						}), m.a.createElement(n, {
							className: Ts.a.text
						})),
						className: Object(v.a)(Ts.a.item, e.className, {
							[Ts.a.mFocused]: !!e.isFocused,
							[Ts.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return s["aria-label"] = e.to || e.label, e.to ? e.externalLink ? m.a.createElement("a", As({}, s, {
					href: e.to,
					target: "_blank"
				})) : m.a.createElement(ds.a, As({}, s, {
					to: e.to
				})) : m.a.createElement("button", s)
			}
			var Ls = n("./src/reddit/constants/listings.ts"),
				Ds = n("./src/reddit/helpers/overlay/index.ts"),
				Fs = n("./src/reddit/routes/modListing/index.ts"),
				Bs = n("./src/reddit/routes/powerups/index.ts"),
				Us = n("./src/reddit/routes/predictions/index.ts"),
				Gs = n("./src/reddit/routes/talk/index.ts"),
				Hs = n("./src/reddit/routes/wrappedreddit/index.ts"),
				Ws = n("./src/reddit/selectors/experiments/econ/index.ts"),
				qs = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				Vs = n("./src/reddit/helpers/chooseVariant/index.ts");
			const Ks = e => Object(Vs.c)(e, {
				experimentEligibilitySelector: Vs.a,
				experimentName: Kt.Vb
			}) === Kt.ib.Enabled;
			var Qs = n("./src/reddit/selectors/multireddit.ts"),
				zs = n("./src/lib/LinkedListMap/index.ts"),
				Js = n("./src/reddit/routes/avatar/index.ts");

			function Xs() {
				return (Xs = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ys = Object(g.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(Qs.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(Qs.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched
			});
			var Zs;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action"
			}(Zs || (Zs = {}));
			const $s = [e => ({
					id: cs.Employee,
					type: Zs.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => m.a.createElement(ps.a, Xs({
							name: "home"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, "Employee Communities")
					},
					telemetryNoun: "employee"
				})],
				eo = () => [e => ({
					id: cs.All,
					type: Zs.GenericLink,
					model: {
						url: "/r/all/",
						displayText: o.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Xs({
							name: "all"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("All", null, {
							hk: "2M8nEy"
						}))
					},
					telemetryNoun: "all"
				})],
				to = () => [e => ({
					id: "reddit-feeds",
					type: Zs.Header,
					model: {
						displayText: o.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: cs.Home,
					type: Zs.GenericLink,
					model: {
						url: "/",
						displayText: o.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Xs({
							name: "home"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Home", null, {
							hk: "2u56yo"
						}))
					},
					telemetryNoun: "home"
				}), e => ({
					id: cs.Popular,
					type: Zs.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: o.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Xs({
							name: "popular"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Popular", null, {
							hk: "1op8tD"
						}))
					},
					telemetryNoun: "popular"
				}), ...eo()],
				no = [e => ({
					id: "reddit-feeds",
					type: Zs.Header,
					model: {
						displayText: o.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), () => ({
					id: cs.Home,
					type: Zs.GenericLink,
					model: {
						url: "/",
						displayText: o.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Xs({
							name: "home"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Popular", null, {
							hk: "1op8tD"
						}))
					},
					telemetryNoun: "popular"
				}), ...eo()],
				so = [e => ({
					id: "reddit-other",
					type: Zs.Header,
					model: {
						displayText: o.fbt._("Other", null, {
							hk: "1etY05"
						}).toString()
					}
				}), e => ({
					id: cs.Settings,
					type: Zs.GenericLink,
					model: {
						url: "/settings",
						displayText: o.fbt._("User Settings", null, {
							hk: "36WFGd"
						}).toString(),
						icon: ({
							className: e
						}) => m.a.createElement(xs.a, {
							className: e
						}),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("User Settings", null, {
							hk: "36WFGd"
						}))
					},
					telemetryNoun: "settings"
				}), e => ({
					id: cs.Inbox,
					type: Zs.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: o.fbt._("Messages", null, {
							hk: "43DUrY"
						}).toString(),
						icon: ({
							className: e
						}) => m.a.createElement(xs.a, {
							className: e
						}),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Messages", null, {
							hk: "43DUrY"
						}))
					},
					telemetryNoun: "mail"
				}), e => ({
					id: cs.CreatePost,
					type: Zs.GenericLink,
					model: {
						url: "/submit",
						displayText: o.fbt._("Create Post", null, {
							hk: "dGck6"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Xs({
							name: "add"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Create Post", null, {
							hk: "dGck6"
						}))
					},
					telemetryNoun: "create_post"
				})],
				oo = [e => ({
					id: cs.Coins,
					type: Zs.GenericLink,
					model: {
						url: "/coins",
						displayText: o.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Xs({
							name: "coins"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Coins", null, {
							hk: "ZFvDU"
						}))
					},
					telemetryNoun: "coins"
				}), e => ({
					id: cs.Premium,
					type: Zs.GenericLink,
					model: {
						url: "/premium",
						displayText: o.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Xs({
							name: "premium"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Premium", null, {
							hk: "3i2C4T"
						}))
					},
					telemetryNoun: "premium"
				}), e => ({
					id: cs.Avatar,
					type: Zs.GenericLink,
					model: {
						url: Js.a,
						displayText: o.fbt._("Avatar", null, {
							hk: "12GoEB"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Xs({
							name: "avatar_style"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Avatar", null, {
							hk: "43lxPH"
						}))
					},
					telemetryNoun: "avatar"
				}), e => ({
					id: cs.Powerups,
					type: Zs.GenericLink,
					model: {
						url: Bs.a,
						displayText: o.fbt._("Powerups", null, {
							hk: "w9Ere"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Xs({
							name: "powerup"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Powerups", null, {
							hk: "1f7fL8"
						}))
					},
					telemetryNoun: "powerups"
				}), e => ({
					id: cs.WrappedReddit,
					type: Zs.GenericLink,
					model: {
						url: Hs.a,
						displayText: o.fbt._("Reddit Recap", null, {
							hk: "3S6KUW"
						}).toString(),
						icon: e => m.a.createElement(gs.e, {
							className: Es.a.wrappedRedditLogo
						}),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Reddit Recap", null, {
							hk: "1UuGvQ"
						}))
					},
					telemetryNoun: "wrappedreddit"
				}), e => ({
					id: cs.Talk,
					type: Zs.GenericLink,
					model: {
						url: Gs.a,
						displayText: o.fbt._("Talk", null, {
							hk: "lHWAD"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Xs({
							name: "live"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Talk", null, {
							hk: "31Avul"
						}))
					},
					telemetryNoun: "talk"
				}), e => ({
					id: cs.Predictions,
					type: Zs.GenericLink,
					model: {
						url: Us.a,
						displayText: o.fbt._("Predictions", null, {
							hk: "4doXhN"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Xs({
							name: "prediction"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Predictions", null, {
							hk: "3lUrcj"
						}))
					},
					telemetryNoun: "predictions"
				})],
				ro = [e => ({
					id: cs.ModQueue,
					type: Zs.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: o.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Xs({
							name: "mod_queue"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}))
					},
					telemetryNoun: "mod_queue"
				}), e => {
					return {
						id: cs.ModMail,
						type: Zs.GenericLink,
						model: {
							url: "https://mod.reddit.com/mail/all",
							displayText: o.fbt._("Modmail", null, {
								hk: "1BtYh4"
							}).toString(),
							icon: e => m.a.createElement(ps.a, Xs({
								name: "mod_mail"
							}, e)),
							text: ({
								className: e
							}) => m.a.createElement("span", {
								className: e
							}, o.fbt._("Modmail", null, {
								hk: "2QQ3dU"
							}))
						},
						telemetryNoun: "modmail_beta"
					}
				}];

			function ao(e, t, n, s) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: Zs.Header,
					model: {
						displayText: o.fbt._("my communities", null, {
							hk: "2cRte1"
						}).toString()
					}
				}), n && io(e, s), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: Zs.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: Zs.Header,
					model: {
						displayText: o.fbt._("following", null, {
							hk: "1kjEfv"
						}).toString()
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: Zs.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}
			const io = (e, t) => {
				const n = {
						id: cs.CreateCommunity,
						telemetryNoun: "create_community"
					},
					s = {
						displayText: o.fbt._("Create Community", null, {
							hk: "41sjx"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Xs({
							name: "add"
						}, e)),
						text: ({
							className: e
						}) => m.a.createElement("span", {
							className: e
						}, o.fbt._("Create Community", null, {
							hk: "41sjx"
						}).toString())
					};
				e.push({
					...n,
					type: Zs.GenericClickable,
					model: {
						...s,
						onClick: () => {
							t(Object(_e.h)(tt.a.SUBREDDIT_CREATION_MODAL_ID))
						}
					}
				})
			};
			var co = n("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				lo = n.n(co);

			function uo(e) {
				return m.a.createElement("div", {
					className: Object(v.a)(lo.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var mo = n("./src/reddit/actions/subscription/index.ts"),
				po = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				bo = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				ho = n.n(bo);

			function fo() {
				return (fo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const go = Object(g.c)({
					currentUser: Ct.k,
					hideNSFWPref: Ct.C,
					isLoggedIn: Ct.K
				}),
				vo = Object(p.b)(go, (e, t) => ({
					toggleFavorite: n => {
						switch (n.stopPropagation(), n.preventDefault(), t.type) {
							case Zs.Subreddit:
								e(Object(mo.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case Zs.Profile:
								e(Object(mo.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case Zs.Multi:
								e(Object(mo.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(po.f)(t.model.url)) : t.sendEvent(Object(po.c)(t.model.url))
						}
					}
				}));
			var yo = Object(A.c)(vo((function(e) {
					const t = {
						className: Object(v.a)(ho.a.item, e.className, {
							[ho.a.mFocused]: !!e.isFocused
						}),
						id: e.id,
						role: "menuitem",
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
					switch (e.type) {
						case Zs.Subreddit:
							return m.a.createElement(ds.a, fo({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(ys.b, {
								className: ho.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), m.a.createElement("span", {
								className: ho.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(ps.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(v.a)(ho.a.favorite, {
									[ho.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Zs.SubredditAutocomplete:
							return m.a.createElement(ds.a, fo({}, t, {
								"aria-label": e.model.name,
								to: `/r/${e.model.name}/`
							}), m.a.createElement(ys.b, {
								className: ho.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), m.a.createElement("span", {
								className: ho.a.text
							}, e.model.name));
						case Zs.Multi:
							return m.a.createElement(ds.a, fo({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement("img", {
								src: e.model.icon,
								className: ho.a.customFeedIcon
							}), m.a.createElement("span", {
								className: ho.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(ps.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(v.a)(ho.a.favorite, {
									[ho.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Zs.Profile:
							return m.a.createElement(ds.a, fo({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(Os.a, {
								className: ho.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), m.a.createElement("span", {
								className: ho.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(ps.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(v.a)(ho.a.favorite, {
									[ho.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				Oo = n("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				xo = n.n(Oo);

			function Co(e) {
				return m.a.createElement("div", {
					className: e.className
				}, m.a.createElement("div", {
					className: xo.a.header
				}), m.a.createElement("div", {
					className: xo.a.item
				}), m.a.createElement("div", {
					className: xo.a.item
				}), m.a.createElement("div", {
					className: xo.a.item
				}), m.a.createElement("div", {
					className: xo.a.item
				}))
			}
			var Eo = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				Po = n("./src/reddit/actions/subreddit.ts"),
				jo = n("./src/reddit/constants/keycodes.ts"),
				_o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				So = n("./src/lib/loadableAction/index.ts"),
				ko = n("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				wo = n.n(ko);

			function Mo() {
				return (Mo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function No(e) {
				return e.id === cs.ModMail || e.id === cs.CreateCommunity
			}

			function Io(e) {
				const t = new zs.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== Zs.Header && e.type !== Zs.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const To = Object(g.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					unfilteredListBuilder: e => t => {
						const n = Ys(e),
							s = new zs.a("id"),
							r = Object(Ct.ib)(e),
							a = Object(Ws.t)(e),
							i = Ks(e),
							c = [];
						a && i || (!a && c.push(cs.Predictions), !i && c.push(cs.WrappedReddit));
						const l = c.length ? oo.filter(e => !c.includes(e(null).id)) : oo;
						if (n.account) {
							const a = n.account;
							(n.favoriteSubreddits.length || n.favoriteProfiles.length || n.favoriteMultireddits.length) && (s.push({
								id: "header-favorites",
								type: Zs.Header,
								model: {
									displayText: o.fbt._("favorites", null, {
										hk: "4Gg0k2"
									}).toString()
								}
							}), n.favoriteSubreddits.forEach(e => s.push({
								id: "fav" + e.id,
								type: Zs.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteProfiles.forEach(e => s.push({
								id: "fav" + e.id,
								type: Zs.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteMultireddits.forEach(e => s.push({
								id: "fav" + e.url,
								type: Zs.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), n.multisPending && s.push({
								id: "multis-pending",
								type: Zs.LoadingState,
								model: {
									displayText: ""
								}
							}), n.moderatingSubredditsPending ? s.push({
								id: "moderatingSubreddits-pending",
								type: Zs.LoadingState,
								model: {
									displayText: ""
								}
							}) : n.moderatingSubreddits.length && (s.push({
								id: "header-moderating",
								type: Zs.Header,
								model: {
									displayText: o.fbt._("moderating", null, {
										hk: "2du7dx"
									}).toString()
								}
							}), a.isMod && ro.forEach(e => s.push(e(a))), s.push({
								id: cs.ModListing,
								type: Zs.GenericLink,
								model: {
									url: Fs.a,
									displayText: "r/Mod",
									icon: e => m.a.createElement(ps.a, Xs({
										name: "mod_queue"
									}, e)),
									text: ({
										className: e
									}) => m.a.createElement("span", {
										className: e
									}, "r/Mod")
								},
								telemetryNoun: "r_mod"
							}), n.moderatingSubreddits.forEach(e => s.push({
								id: "mod" + e.id,
								type: Zs.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), n.multis.length > 0 && ((e, t, n) => {
								e.push({
									id: "header-multis",
									type: Zs.Header,
									model: {
										displayText: o.fbt._("Custom feeds", null, {
											hk: "3K02MA"
										}).toString(),
										button: ({
											className: e,
											sendClickEvent: t
										}) => m.a.createElement("button", {
											onClick: () => {
												n(Object(_e.h)(tt.a.MULTIREDDIT_CREATE)), t()
											},
											className: Object(v.a)(e, Es.a.multiPlusButton)
										}, m.a.createElement(ps.a, {
											name: "add"
										})),
										buttonTelemetryNoun: "create_new_custom_feed"
									}
								}), t.multis.forEach(t => e.push({
									id: t.url,
									type: Zs.Multi,
									model: t,
									telemetryNoun: "custom_feed"
								}))
							})(s, n, t), n.subscriptionsPending ? s.push({
								id: "subscriptions-pending",
								type: Zs.LoadingState,
								model: {
									displayText: ""
								}
							}) : ao(s, n, r, t), ((e, t, n, s) => (to().forEach(e => t.push(e(n))), n.isEmployee && $s.forEach(e => t.push(e(n))), Object(ks.a)(e) && t.push({
								id: cs.PublicAccessNetwork,
								type: Zs.GenericClickable,
								model: {
									onClick: () => {
										s(Object(Ds.a)(Ls.c[Ls.b.Rpan]))
									},
									displayText: o.fbt._("Reddit live", null, {
										hk: "3zuymj"
									}).toString(),
									icon: e => m.a.createElement(ps.a, Xs({
										name: "video_live"
									}, e)),
									text: ({
										className: e
									}) => m.a.createElement("span", {
										className: e
									}, o.fbt._("Reddit Live", null, {
										hk: "93lry"
									}))
								},
								telemetryNoun: "rpan"
							}), t))(e, s, a, t), so.forEach(e => s.push(e(a))), s.push((() => ({
								id: cs.DailyCharts,
								type: Zs.GenericLink,
								model: {
									url: "/subreddits/leaderboard/",
									displayText: o.fbt._("Top Communities", null, {
										hk: "1KzP9v"
									}).toString(),
									icon: e => m.a.createElement(ps.a, Xs({
										name: "list_numbered"
									}, e)),
									text: ({
										className: e
									}) => m.a.createElement("span", {
										className: e
									}, o.fbt._("Top Communities", null, {
										hk: "1KzP9v"
									}))
								},
								telemetryNoun: "daily_charts"
							}))()), Object(qs.g)(e) && (e => e.push({
								id: cs.NotificationsInbox,
								type: Zs.GenericLink,
								model: {
									url: "/notifications",
									displayText: o.fbt._("Notifications", null, {
										hk: "2xenVO"
									}).toString(),
									icon: e => m.a.createElement(ps.a, Xs({
										name: "notification"
									}, e)),
									text: ({
										className: e
									}) => m.a.createElement("span", {
										className: e
									}, o.fbt._("Notifications", null, {
										hk: "2xenVO"
									}))
								},
								telemetryNoun: "inbox"
							}))(s), l.forEach(e => s.push(e(a)))
						} else n.subscriptions.length || Object(Ct.K)(e) ? to().forEach(e => s.push(e(null))) : no.forEach(e => s.push(e(null))), s.push({
							id: "reddit-other",
							type: Zs.Header,
							model: {
								displayText: o.fbt._("Other", null, {
									hk: "1etY05"
								}).toString()
							}
						}), l.forEach(e => s.push(e(null))), ao(s, n, r, t);
						return s
					}
				}),
				Ao = e => ({
					onHomeClicked: () => e(Object(So.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("Frontpage~ModListing"), n.e("Frontpage~FrontpageSidebar"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))()),
					onGotoUrl: t => e(Object(h.b)(t)),
					onSubredditsRequested: () => {
						e(Object(mo.e)()), e(Object(Po.q)()), e(Object(So.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))())
					},
					onActionDispatched: t => e(t)
				}),
				Ro = (e, t, n) => ({
					...e,
					...t,
					...n,
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class Lo extends m.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							n = this.getList(t, this.props),
							s = Io(n),
							o = s.first();
						this.setState({
							focusOrder: s,
							renderableList: n,
							currentInputText: e.currentTarget.value,
							focusedItemId: o ? o.id : void 0
						})
					}, this.onChangeFocusedListItemId = e => this.setState({
						focusedItemId: e
					}), this.onKeyDown = e => {
						if (e.key === jo.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === jo.b.Tab && this.props.onClose && this.props.onClose(), e.key === jo.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== Zs.Header && e.type !== Zs.LoadingState && (this.fireTelemetryForListItem(e), e.type === Zs.GenericClickable ? e.model.onClick() : No(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === jo.b.ArrowDown && (e.preventDefault(), this.setState(e => {
							const t = this.findNextFocusableItem(),
								n = t ? e.renderableList.get(t) : void 0,
								s = n ? n.model.displayText : e.currentInputText;
							if (t) {
								const e = document.getElementById(`focus-${t}`);
								e && e.scrollIntoView({
									block: "nearest"
								})
							}
							return {
								currentInputText: s,
								focusedItemId: t
							}
						})), e.key === jo.b.ArrowUp && (e.preventDefault(), this.setState(e => {
							const t = this.findPrevFocusableItem(),
								n = t ? e.renderableList.get(t) : void 0,
								s = n ? n.model.displayText : e.currentInputText;
							if (t) {
								const e = document.getElementById(`focus-${t}`);
								e && e.scrollIntoView({
									block: "nearest"
								})
							}
							return {
								currentInputText: s,
								focusedItemId: t
							}
						}))
					}, this.fireTelemetryForListItem = e => {
						let t;
						switch (e.id) {
							case cs.Coins:
							case cs.Premium:
								Object(_o.d)(_o.a.GoldPayment, !0), t = Object(_o.c)(_o.a.GoldPayment)
						}
						switch (e.type) {
							case Zs.Category:
							case Zs.GenericLink:
							case Zs.GenericClickable:
							case Zs.Multi:
							case Zs.Profile:
							case Zs.Subreddit:
								this.props.sendEvent(n => ({
									...Object(xt.defaults)(n),
									...t ? {
										correlationId: t
									} : null,
									customFeed: e.type === Zs.Multi ? Object(xt.customFeedByPath)(n, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case Zs.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => ({
									...Object(xt.defaults)(e),
									source: "community_nav",
									action: "click",
									noun: t
								}));
								break
							}
						}
					}, this.state = {
						currentInputText: "",
						focusedItemId: null,
						focusOrder: Io(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = m.a.createRef()
				}
				componentDidMount() {
					"complete" === document.readyState ? this.props.onSubredditsRequested() : window.addEventListener("load", this.props.onSubredditsRequested), this.props.canAutofocus && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus())
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						n = this.getList(t, e),
						s = Io(n);
					this.setState({
						focusOrder: s,
						renderableList: n
					})
				}
				getList(e, t) {
					if (e) {
						const n = new zs.a("id"),
							s = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case Zs.Category:
								case Zs.GenericLink:
								case Zs.Multi:
								case Zs.Profile:
								case Zs.Subreddit:
									e.model.displayText.match(s) && n.push(e);
									break;
								case Zs.Header: {
									const t = n.last();
									t && t.type === Zs.Header && n.pop(), n.push(e);
									break
								}
								case Zs.LoadingState:
							}
						});
						const o = n.last();
						return o && o.type === Zs.Header && n.pop(), n
					}
					return t.unfilteredList
				}
				findNextFocusableItem() {
					const e = this.state.focusOrder.first();
					if (this.state.focusedItemId) {
						const t = this.state.focusOrder.getNode(this.state.focusedItemId);
						if (t) return t.next ? t.next.value.id : t.value.id;
						if (e) return e.id
					} else if (e) return e.id
				}
				findPrevFocusableItem() {
					const e = this.state.focusOrder.last();
					if (this.state.focusedItemId) {
						const t = this.state.focusOrder.getNode(this.state.focusedItemId);
						if (t) return t.prev ? t.prev.value.id : t.value.id;
						if (e) return e.id
					} else if (e) return e.id
				}
				render() {
					const e = this.state.renderableList.toArray(),
						t = this.state.focusedItemId ? this.state.renderableList.get(this.state.focusedItemId) : null;
					return m.a.createElement("div", {
						role: "menu",
						className: this.props.className
					}, m.a.createElement("div", {
						"aria-live": "assertive",
						"aria-label": t && t.model.displayText ? `${t.model.displayText} ${o.fbt._("selected",null,{hk:"QqrSS"})}` : ""
					}), m.a.createElement("input", {
						autoFocus: this.props.canAutofocus,
						"aria-label": o.fbt._("Start typing to filter your communities or use up and down to select.", null, {
							hk: "1AB1YU"
						}),
						className: wo.a.filter,
						id: "header-subreddit-filter",
						placeholder: o.fbt._("Filter", null, {
							hk: "oqdpz"
						}),
						onChange: this.onChange,
						onKeyDown: this.onKeyDown,
						ref: this.inputRef
					}), e.map((e, t) => {
						const n = {
							id: `focus-${e.id}`,
							isFocused: this.state.focusedItemId === e.id,
							key: `subreddit-list-key-${e.id}`,
							onFocus: () => this.onChangeFocusedListItemId(e.id),
							onMouseEnter: () => this.onChangeFocusedListItemId(e.id),
							onMouseLeave: () => this.onChangeFocusedListItemId(void 0),
							onClick: () => {
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === cs.Home && this.props.onHomeClicked(), e.type === Zs.GenericClickable && e.model.onClick()
							},
							isCurrentPage: this.props.currentPage.type === e.id
						};
						switch (e.type) {
							case Zs.GenericClickable:
								return m.a.createElement(Rs, Mo({}, n, {
									className: wo.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Zs.Category:
							case Zs.GenericLink:
								return m.a.createElement(Rs, Mo({}, n, {
									externalLink: No(e),
									className: wo.a.item,
									to: e.model.url,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Zs.Header: {
								const n = e.model.button;
								return m.a.createElement(uo, {
									className: wo.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								}, e.model.displayText, n && m.a.createElement(n, {
									className: wo.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case Zs.LoadingState:
								return m.a.createElement(Co, {
									className: wo.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								});
							case Zs.Multi:
								return m.a.createElement(yo, Mo({}, n, {
									className: wo.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: Zs.Multi
								}));
							case Zs.Profile:
								return m.a.createElement(yo, Mo({}, n, {
									className: wo.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: Zs.Profile
								}));
							case Zs.Subreddit:
								return m.a.createElement(yo, Mo({}, n, {
									className: wo.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: Zs.Subreddit
								}))
						}
					}))
				}
			}
			const Do = Object(p.b)(To, Ao, Ro)(Object(A.c)(Lo)),
				Fo = Object(p.b)(To, Ao, Ro)(Object(A.c)(Object(Eo.b)(Lo))),
				Bo = Object(Qt.u)({
					isCommentsPage: Qt.x,
					pageLayer: e => e
				}),
				Uo = Object(g.c)({
					currentPage: Ns,
					hideNSFWPref: Ct.C,
					isDropdownOpen: bs.a,
					isLoggedIn: Ct.K,
					isOverlayOpen: Lt.i,
					isPinnedSubscriptionsMenuDisabled: hs.a,
					isSubscriptionsPinned: hs.b
				});
			class Go extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						preventFocus: !1
					}, this.handleKeyboardShortcut = e => {
						if ("q" === e.key && !this.props.isSubscriptionsPinned) {
							if (document.activeElement && ("input" === document.activeElement.tagName.toLowerCase() || "textarea" === document.activeElement.tagName.toLowerCase() || "true" === document.activeElement.getAttribute("contenteditable"))) return;
							this.props.openDropdown()
						}
					}, this.enablePreventFocus = () => this.setState({
						preventFocus: !0
					}), this.disablePreventFocus = () => setTimeout(() => this.setState({
						preventFocus: !1
					})), this.close = e => {
						this.enablePreventFocus(), this.props.closeDropdown(), this.disablePreventFocus(), e && Object(ms.d)()
					}, this.onButtonFocus = () => {
						this.props.isSubscriptionsPinned || this.state.preventFocus || this.props.openDropdown(), this.state.preventFocus && this.disablePreventFocus()
					}, this.toggleDropdown = e => {
						this.props.isSubscriptionsPinned || (this.props.sendEvent(e => ({
							...Object(xt.defaults)(e),
							source: "nav",
							action: "click",
							noun: this.props.isDropdownOpen ? "close_community_nav" : "open_community_nav"
						})), this.props.isDropdownOpen && this.enablePreventFocus(), this.props.toggleDropdown(), this.props.isDropdownOpen || this.disablePreventFocus())
					}, this.renderHeaderSubreddit = e => {
						const {
							currentPage: t,
							className: n,
							hideNSFWPref: s,
							isCommentsPage: r,
							isLoggedIn: a,
							isOverlayOpen: i
						} = this.props, c = this.props.isDropdownOpen && !this.props.isSubscriptionsPinned, l = i || !a && r;
						return m.a.createElement("div", {
							"aria-label": o.fbt._("Start typing to filter your communities or use up and down to select.", null, {
								hk: "2PXR4j"
							}),
							className: Object(v.a)(Es.a.container, n, {
								[Es.a.mOpen]: c,
								[Es.a.mNotPinned]: !this.props.isSubscriptionsPinned,
								[Es.a.mPinned]: this.props.isSubscriptionsPinned,
								[Es.a.containerExp]: e
							}),
							onClickCapture: this.stopPropagation,
							role: "navigation"
						}, m.a.createElement("button", {
							className: Es.a.selector,
							onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
							onFocus: this.onButtonFocus,
							tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
						}, m.a.createElement("span", {
							className: Es.a.containerText
						}, " ", function(e) {
							switch (e.type) {
								case cs.Acknowledgements:
									return js(o.fbt._("Acknowledgements", null, {
										hk: "32JBVF"
									}).toString());
								case cs.All:
									return js(o.fbt._("All", null, {
										hk: "2gaHOy"
									}).toString());
								case cs.Appeal:
									return js(o.fbt._("Appeal", null, {
										hk: "2dMFkN"
									}).toString());
								case cs.Avatar:
									return js(o.fbt._("Avatar", null, {
										hk: "4E0V0C"
									}).toString());
								case cs.Coins:
									return js(o.fbt._("Coins", null, {
										hk: "3ZpUbG"
									}).toString());
								case cs.Community:
									return js(e.model.displayText, !0);
								case cs.CommunitySearch:
									return js(o.fbt._("Subreddit Results", null, {
										hk: "19qRVH"
									}).toString());
								case cs.CreateCommunity:
									return js(o.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case cs.CreatePost:
									return js(o.fbt._("Create Post", null, {
										hk: "30V40V"
									}).toString());
								case cs.DailyCharts:
									return js(o.fbt._("Top Communities", null, {
										hk: "1sWIEu"
									}).toString());
								case cs.GlobalSearch:
									return js(o.fbt._("Search Results", null, {
										hk: "scJwR"
									}).toString());
								case cs.Geotagging:
									return js(o.fbt._("Help Out", null, {
										hk: "1RN9v2"
									}).toString());
								case cs.Home:
									return js(o.fbt._("Home", null, {
										hk: "amHQd"
									}).toString());
								case cs.Inbox:
									return js(o.fbt._("Messages", null, {
										hk: "25MBSp"
									}).toString());
								case cs.ModListing:
									return js("r/Mod");
								case cs.ModMail:
									return js(o.fbt._("Modmail", null, {
										hk: "of9AC"
									}).toString());
								case cs.ModQueue:
									return js(o.fbt._("Mod Queue", null, {
										hk: "3hdHhb"
									}).toString());
								case cs.Multi:
									return js(e.model.displayText, !0);
								case cs.NotificationsInbox:
									return js(o.fbt._("Notifications", null, {
										hk: "FiFRe"
									}).toString());
								case cs.Popular:
									return js(o.fbt._("Popular", null, {
										hk: "1rTNHl"
									}).toString());
								case cs.WrappedReddit:
									return js(o.fbt._("Reddit Recap", null, {
										hk: "1IMaHW"
									}).toString());
								case cs.Powerups:
									return js(o.fbt._("Powerups", null, {
										hk: "1ZXjgq"
									}).toString());
								case cs.Predictions:
									return js(o.fbt._("Predictions", null, {
										hk: "47Cyyb"
									}).toString());
								case cs.Premium:
									return js(o.fbt._("Premium", null, {
										hk: "x0xKv"
									}).toString());
								case cs.PublicAccessNetwork:
									return js(o.fbt._("Reddit Live", null, {
										hk: "4tlHX5"
									}).toString());
								case cs.Report:
									return js(o.fbt._("Report", null, {
										hk: "4oVcnd"
									}).toString());
								case cs.Settings:
									return js(o.fbt._("User Settings", null, {
										hk: "hcLHW"
									}).toString());
								case cs.SubredditCreation:
									return js(o.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case cs.Talk:
									return js(o.fbt._("Talk", null, {
										hk: "gVQjb"
									}).toString());
								case cs.Topic:
									return js(e.model);
								case cs.Unknown:
									return js("");
								case cs.UserDataRequest:
									return js(o.fbt._("Request your Reddit data", null, {
										hk: "3LqHku"
									}).toString());
								case cs.UserProfile:
									return js(e.model.displayText, !0);
								case cs.UserProfileName:
									return js(e.name, !0);
								case cs.ViewDraft:
									return js(o.fbt._("View Draft", null, {
										hk: "3k2k9a"
									}).toString())
							}
						}(t), " "), function(e, t) {
							const n = e => m.a.createElement(ps.a, {
								name: e,
								isFilled: !0,
								className: Es.a.defaultIcon
							});
							switch (e.type) {
								case cs.All:
									return n("all");
								case cs.Acknowledgements:
								case cs.Appeal:
									return n("edit");
								case cs.Avatar:
									return n("avatar_style");
								case cs.Coins:
									return n("coins");
								case cs.Community:
								case cs.CommunitySearch: {
									const n = Object(fs.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(ys.b, {
										className: Es.a.subredditIcon,
										iconUrl: n.url,
										primaryColor: n.color
									})
								}
								case cs.CreateCommunity:
								case cs.CreatePost:
									return n("add");
								case cs.DailyCharts:
									return n("list_numbered");
								case cs.Geotagging:
									return n("custom_feed");
								case cs.GlobalSearch:
									return n("search");
								case cs.Home:
									return n("home");
								case cs.Inbox:
									return m.a.createElement(xs.a, {
										wrapperClassName: Es.a.userIcon
									});
								case cs.ModListing:
									return n("mod_queue");
								case cs.ModMail:
									return n("mod_mail");
								case cs.ModQueue:
									return n("mod_queue");
								case cs.Multi:
									return m.a.createElement("img", {
										src: e.model.icon,
										className: Es.a.customFeedIcon
									});
								case cs.NotificationsInbox:
									return n("notification");
								case cs.Popular:
									return n("popular");
								case cs.WrappedReddit:
									return m.a.createElement(gs.e, {
										className: Es.a.wrappedRedditLogoActive
									});
								case cs.Powerups:
									return n("powerup");
								case cs.Predictions:
									return n("prediction");
								case cs.Premium:
									return n("premium");
								case cs.PublicAccessNetwork:
									return n("video_live");
								case cs.Report:
									return n("report");
								case cs.Settings:
									return m.a.createElement(xs.a, {
										wrapperClassName: Es.a.userIcon
									});
								case cs.SubredditCreation:
									return n("add");
								case cs.Talk:
									return n("live");
								case cs.Topic:
									return n("custom_feed");
								case cs.Unknown:
									return m.a.createElement("div", {
										className: Es.a.unknownIcon
									});
								case cs.UserDataRequest:
									return n("add");
								case cs.UserProfile: {
									const n = Object(fs.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(Os.a, {
										className: Es.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										omitResponsivePresenceWrapper: !0,
										userName: e.model.name
									})
								}
								case cs.UserProfileName:
									return m.a.createElement("div", {
										className: Es.a.defaultIcon
									});
								case cs.Unknown:
									return m.a.createElement("div", {
										className: Es.a.unknownIcon
									});
								case cs.UserProfile: {
									const n = Object(fs.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(Os.a, {
										className: Es.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										userName: e.model.name
									})
								}
								case cs.ViewDraft:
									return n("edit")
							}
						}(t, s), !this.props.isSubscriptionsPinned && m.a.createElement(ps.a, {
							name: "caret_down",
							className: Es.a.caretDown
						})), c && !this.props.isPinnedSubscriptionsMenuDisabled && m.a.createElement(ps.a, {
							name: "side_menu",
							className: Es.a.pin,
							onClick: l ? void 0 : this.props.onPinSubscriptions
						}), c && m.a.createElement(Fo, {
							canAutofocus: !0,
							className: Es.a.listContainer,
							currentPage: t,
							onClose: this.close
						}))
					}
				}
				componentDidMount() {
					document.addEventListener("keyup", this.handleKeyboardShortcut)
				}
				componentWillUnmount() {
					document.removeEventListener("keyup", this.handleKeyboardShortcut)
				}
				shouldComponentUpdate(e, t) {
					return this.state.preventFocus !== t.preventFocus || (!(!this.props.isDropdownOpen && !e.isDropdownOpen) || (e.currentPage !== this.props.currentPage || e.isSubscriptionsPinned !== this.props.isSubscriptionsPinned))
				}
				stopPropagation(e) {
					e.nativeEvent.stopImmediatePropagation()
				}
				render() {
					return m.a.createElement(f.a.Consumer, null, this.renderHeaderSubreddit)
				}
			}
			var Ho = Bo(Object(p.b)(Uo, (e, t) => ({
					closeDropdown: () => e(Object(_.f)()),
					onLocationRefresh: (n, s) => e(Object(us.f)(n, t.pageLayer, s)),
					onPinSubscriptions: () => {
						e(Object(_.i)()), e(Object(_.f)())
					},
					openDropdown: () => e(Object(_.g)()),
					toggleDropdown: () => e(Object(_.h)())
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onLocationClick: n => t.onLocationRefresh(n, e.isOverlayOpen)
				}))(Object(A.c)(Go))),
				Wo = n("./src/reddit/components/JumpToContent/index.tsx"),
				qo = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Vo = n("./node_modules/history/esm/history.js"),
				Ko = n("./node_modules/lodash/debounce.js"),
				Qo = n.n(Ko),
				zo = n("./node_modules/lodash/isEmpty.js"),
				Jo = n.n(zo),
				Xo = n("./node_modules/uuid/v4.js"),
				Yo = n.n(Xo),
				Zo = n("./src/lib/hooks/usePrevious.ts"),
				$o = n("./src/lib/makeSearchKey/index.ts"),
				er = n("./src/reddit/actions/post.ts"),
				tr = n("./src/reddit/actions/search.ts"),
				nr = n("./src/reddit/actions/search/trending.ts"),
				sr = n("./src/reddit/components/SearchDropdown/index.tsx"),
				or = n("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				rr = n("./src/reddit/constants/history.ts"),
				ar = n("./src/reddit/helpers/getSearchUrl/index.ts"),
				ir = n("./src/reddit/helpers/isArrayEqual.ts"),
				cr = n("./src/reddit/helpers/trackers/searchResults.ts"),
				lr = n("./src/reddit/models/Search/index.ts"),
				dr = n("./src/reddit/selectors/experiments/trending.ts");
			const ur = e => Object(Ct.H)(e) || Kt.hf.Treatment1 === Object(Vs.c)(e, {
				experimentEligibilitySelector: Vs.a,
				experimentName: Kt.df
			});
			var mr, pr = n("./src/reddit/selectors/experiments/uiSimplification.ts"),
				br = n("./src/reddit/selectors/searchResults.ts"),
				hr = n("./src/reddit/selectors/trending.ts"),
				fr = n("./src/reddit/hooks/usePageLayer.ts"),
				gr = n("./src/reddit/controls/Search/index.m.less"),
				vr = n.n(gr),
				yr = n("./src/reddit/components/Pill/index.tsx"),
				Or = n("./src/reddit/components/Pill/PillText/index.m.less"),
				xr = n.n(Or);
			! function(e) {
				e.DAY = "DAY", e.NIGHT = "NIGHT"
			}(mr || (mr = {}));
			const Cr = {
					[mr.DAY]: xr.a.pillTextVariantDay,
					[mr.NIGHT]: xr.a.pillTextVariantNight
				},
				Er = e => m.a.createElement("div", {
					className: Object(v.a)(xr.a.pillText, Cr[e.variant])
				}, e.children);
			var Pr = n("./src/reddit/controls/Search/CommunityPill/index.m.less"),
				jr = n.n(Pr);
			const _r = Object(g.c)({
					nightmode: Ct.X
				}),
				Sr = Object(p.b)(_r)(({
					nightmode: e,
					subreddit: t
				}) => m.a.createElement(yr.a, {
					"aria-hidden": !0,
					className: jr.a.communityPill,
					"data-testid": "community-search-pill"
				}, m.a.createElement(Er, {
					variant: e ? mr.NIGHT : mr.DAY
				}, m.a.createElement(ys.b, {
					className: vr.a.subredditIcon,
					subredditOrProfile: t
				}), t.displayText)));
			var kr = n("./src/reddit/controls/Search/SearchBar/index.m.less"),
				wr = n.n(kr);
			const Mr = ({
				inputRef: e,
				searchQuery: t,
				showCommunityPill: n,
				subreddit: s,
				onChange: r,
				onFormSubmit: a,
				onFocusSearchBar: i,
				onKeyDown: c,
				toggleDropdownAndGetTrending: l
			}) => {
				const d = m.a.useContext(f.a),
					u = n && s ? o.fbt._("Search within {subredditName}", [o.fbt._param("subredditName", s.displayText)], {
						hk: "2B6J3t"
					}) : o.fbt._("Search all of Reddit", null, {
						hk: "1Fi1f5"
					});
				return m.a.createElement("form", {
					action: "/search/",
					autoComplete: "off",
					className: Object(v.a)(wr.a.searchBar, d && wr.a.searchBarExp),
					method: "get",
					onSubmit: a,
					onFocus: i,
					role: "search"
				}, m.a.createElement("label", {
					className: wr.a.inputLabel,
					htmlFor: "header-search-bar"
				}, m.a.createElement("div", {
					"aria-hidden": !0,
					className: wr.a.iconContainer
				}, m.a.createElement(ps.a, {
					name: "search",
					className: wr.a.icon
				})), m.a.createElement(qo.a, {
					"aria-live": "assertive"
				}, u), n && s && m.a.createElement(Sr, {
					subreddit: s
				})), m.a.createElement("input", {
					id: "header-search-bar",
					name: "q",
					className: wr.a.input,
					onChange: r,
					onClick: l,
					onKeyDown: c,
					placeholder: o.fbt._("Search Reddit", null, {
						hk: "34Vfom"
					}),
					ref: e,
					type: "search",
					value: t
				}))
			};

			function Nr({
				className: e
			}) {
				const t = Object(fr.a)(),
					n = Object(Qt.Y)(t),
					{
						nsfwSessionSetting: s,
						refreshNsfwSessionSettingExpiryTime: o
					} = Object(or.a)(),
					[r, a] = Object(u.useState)(-1),
					[i, c] = Object(u.useState)([]),
					[l, d] = Object(u.useState)(!1),
					[b, f] = Object(u.useState)({}),
					[g, y] = Object(u.useState)([]),
					[O, x] = Object(u.useState)(n || ""),
					[C, E] = Object(u.useState)(null),
					P = Object(u.useRef)(null),
					j = Object(u.useRef)(null),
					_ = Object(A.b)(),
					S = Object(p.d)(),
					k = Object(p.e)(Lt.b),
					w = Object(p.e)(Lt.d),
					M = Object(p.e)(Ct.k),
					N = Object(p.e)(br.n),
					I = Object(p.e)(br.m),
					T = Object(p.e)(dr.a),
					R = Object(p.e)(ur),
					L = Object(p.e)(pr.a),
					D = Object(p.e)(Ct.K),
					F = Object(p.e)(br.o),
					B = Object(p.e)(Ct.X),
					U = Object(p.e)(Lt.r),
					G = Object(p.e)(e => Object(Qt.Z)(e, {
						pageLayer: t
					})),
					H = Object(p.e)(e => Object(Qt.r)(e, {
						pageLayer: t
					})),
					W = Object(p.e)(e => Object(Qt.e)(e, {
						pageLayer: t
					})),
					q = Object(p.e)(hr.a),
					V = Object(p.e)(br.x),
					K = Object(p.e)(Ct.eb),
					Q = Object(Zo.a)(H),
					z = Object(Zo.a)(n),
					J = Object(Zo.a)(V),
					X = Object(Zo.a)(q),
					Y = k ? Object(xt.getPageTypeFromCurrentPage)(k) : t ? Object(xt.getPageTypeFromCurrentPage)(t) : void 0,
					Z = b[O];
				Object(u.useEffect)(() => {
					$()
				}, [X, J, V, q]), Object(u.useEffect)(() => {
					Q || !H || F || ne()
				}, [Q, H, F]), Object(u.useEffect)(() => {
					Jo()(V) || n ? x(n || "") : ie()
				}, [z, n]);
				const $ = () => {
						const e = Object(ir.a)(J, V),
							t = Object(ir.a)(X, q);
						if (!e || !t) {
							const t = V.length ? V : [...g, ...q];
							c(t), !e && V.length && V.forEach(e => {
								ue(e.isProfile ? xt.SearchDropdownNouns.TypeaheadProfile : xt.SearchDropdownNouns.TypeaheadSubreddit, xt.StructureType.Search, e.searchQuery)
							})
						}
					},
					ee = e => S(Object(tr.s)({
						searchQuery: e
					})),
					te = () => S(Object(tr.l)()),
					ne = () => S(Object(tr.n)()),
					se = (e, t) => {
						e.preventDefault(), ((e, t, n, s) => {
							S(Object(h.b)(Object(Vo.c)({
								pathname: e,
								search: t,
								state: {
									fromPage: n,
									[rr.b.SearchOriginPage]: s
								}
							})))
						})(t.url, t.qs, {
							routeName: U,
							subredditName: w
						}, Y)
					},
					oe = async () => {
						q.length || l || (d(!0), await (() => S(Object(nr.b)()))(), d(!1))
					}, re = e => {
						D && M && y(Object(Ut.Lb)({
							...e,
							section: lr.c.recent
						}, M.id))
					}, ae = Qo()(e => {
						(async e => {
							b[e] || (b[e] = !0, f({
								...b
							}), await S(Object(tr.o)(e)), b[e] = !1, f({
								...b
							}))
						})(e)
					}, 250), ie = () => {
						a(-1), E(null), x(""), ee("")
					}, ce = (e, t, s, o) => {
						const r = {
							displayQuery: e,
							rawQuery: t,
							structureType: s,
							searchQuery: n
						};
						_(Object(cr.v)(o, r))
					}, le = (e, t, n) => {
						_(Object(cr.x)(e, t, n))
					}, de = (e, t, n, s) => {
						_(Object(cr.z)(e, t, n, s))
					}, ue = (e, t, s, o) => {
						const r = {
							displayQuery: s,
							rawQuery: o || s,
							searchQuery: n,
							structureType: t
						};
						_(Object(cr.w)(e, r))
					}, me = e => {
						const t = i[e] || null,
							n = t ? t.searchQuery : "";
						a(e), x(n), E(t)
					};
				return m.a.createElement("div", {
					className: Object(v.a)(vr.a.relativeWrapper, Es.a.container, e, {
						"m-open": N
					}),
					id: sr.b,
					ref: P
				}, m.a.createElement(Mr, {
					inputRef: j,
					onChange: e => {
						const t = e.currentTarget.value;
						if (x(t), ee(t), R) {
							if (!(!I || !I[t]) || !t) return;
							ae(t)
						}
					},
					searchQuery: O,
					onFormSubmit: e => {
						e.preventDefault(), O.trim() && ((async e => {
							var t;
							if (te(), O.trim()) {
								let n = {
									...lr.a
								};
								if (C && C.searchQuery === O)(n = C).id || (n.id = Yo()()), n.section === lr.c.recent ? le(O, n, r) : n.section === lr.c.typeahead ? de(O, n, r, i.filter(e => e.isSubreddit)) : ce(O, O, xt.StructureType.Search, xt.SearchDropdownNouns.Recent);
								else {
									const e = H && H.icon ? H.icon.url : "",
										t = null == H ? void 0 : H.displayText,
										s = !!H && H.isNSFW,
										o = lr.b.text;
									n = {
										id: Yo()(),
										searchQuery: O,
										type: o,
										section: lr.c.recent,
										subredditOrProfileRestrictedName: t,
										displayInfo: {
											iconUrl: e,
											isNSFW: s
										}
									}
								}
								re(n), te();
								const a = Object(ar.a)({
									subreddit: H,
									multireddit: W,
									searchItem: n,
									searchOptions: void 0,
									shouldSearchSubreddit: G,
									includeNsfwResults: K && s
								});
								a && (se(e, a), n.isTypeaheadSuggestion && ie(), o(), null === (t = j.current) || void 0 === t || t.blur())
							}
						})(e), _(Object(cr.l)(xt.OriginElement.FullSearchButton, Object($o.e)({
							q: O
						}))), te())
					},
					onFocusSearchBar: () => {
						Object(_o.c)(_o.a.SearchResults) || Object(_o.d)(_o.a.SearchResults), _(Object(cr.l)(xt.OriginElement.SearchBar, Object($o.e)({
							q: n
						})))
					},
					onKeyDown: e => {
						if (e.key === jo.b.Escape || e.key === jo.b.Tab) te();
						else if (e.key === jo.b.ArrowDown) {
							if (e.preventDefault(), 0 === i.length || !N) return;
							if (r >= i.length - 1) return;
							me(r + 1)
						} else if (e.key === jo.b.ArrowUp) {
							if (e.preventDefault(), 0 === i.length || !N) return;
							if (-1 === r) return;
							me(r - 1)
						} else e.key === jo.b.Backspace && !O && G && F && (_(() => Object(cr.d)(H)), (() => S(Object(tr.k)()))())
					},
					showCommunityPill: G,
					subreddit: H,
					toggleDropdownAndGetTrending: () => {
						if (!q.length && T && oe(), M) {
							const e = Object(Ut.K)(M.id);
							e.length > 0 && (y(D ? e : []), c([...e, ...q]), e.forEach(e => {
								ue(xt.SearchDropdownNouns.Recent, xt.StructureType.Recent, e.searchQuery)
							}))
						}
						N || (() => S(Object(tr.m)()))()
					}
				}), m.a.createElement(sr.c, {
					container: P.current,
					focusedItemIndex: r,
					isInTrendingExperiment: T,
					isInUISimplificationI18NExperiment: L,
					searchOriginPage: Y,
					isOpen: N,
					isTrendingPending: l,
					isTypeaheadPending: Z,
					itemList: i,
					nightmode: B,
					recentSearches: g,
					trendingItems: q,
					searchQuery: O,
					typeaheadSuggestions: V,
					onClearSearchQuery: ie,
					onClose: te,
					onRemoveRecentSearch: e => {
						M && 0 !== g.length && (Object(Ut.Y)(e, M.id), y(g.filter(t => t.searchQuery !== e.searchQuery)), a(-1))
					},
					onSendSearchClickRecentEvent: le,
					onSendSearchClickTypeaheadEvent: de,
					onSetRecentSearch: re,
					onUpdateSearchQuery: x,
					fireAdPixelsOfType: (e, t) => S(Object(er.z)(e, t))
				}))
			}
			var Ir = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				Tr = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				Ar = n("./src/reddit/selectors/responsivePage.ts"),
				Rr = n("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				Lr = n.n(Rr);
			var Dr = e => {
					const {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: Object(v.a)(Lr.a.Container, t)
					}, m.a.createElement("a", {
						"aria-label": o.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: Lr.a.HomeLink,
						href: U.a.redditUrl
					}, m.a.createElement(Ir.a, {
						className: Lr.a.Snoo
					}), m.a.createElement(Tr.a, {
						className: Lr.a.Wordmark,
						color: "inherit"
					})))
				},
				Fr = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				Br = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				Ur = n("./src/reddit/hooks/useTracking.ts");
			var Gr = e => m.a.createElement("svg", {
				className: e.className,
				id: "flat",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				fill: "#ff4500"
			}, m.a.createElement("path", {
				fill: "inherit",
				d: "M19.625.375H5.7812V1.8062H2.6089V3.75H.5127V19.625H14.0356V17.6816h2.0962V14.7988H19.625ZM14.8818,16.4316H12.7856V18.375H1.7627V5H3.8589V3.0562H5.7812V14.7988h9.1006Zm3.4932-2.8828H7.0312V1.625H18.375Z"
			}), m.a.createElement("path", {
				fill: "inherit",
				d: "M9.83,8.6869h.8086a2.5968,2.5968,0,0,0,1.2324-.2827,2.0363,2.0363,0,0,0,.8281-.7906,2.2972,2.2972,0,0,0,.2935-1.1709,2.1873,2.1873,0,0,0-.2872-1.1347,1.8957,1.8957,0,0,0-.8281-.749,2.9046,2.9046,0,0,0-1.2788-.2627H8.3815V10.807H9.83Zm0-3.1006h.68a1.1725,1.1725,0,0,1,.78.2427.8044.8044,0,0,1,.2852.6582.9157.9157,0,0,1-.124.4746.86.86,0,0,1-.3531.3291,1.1443,1.1443,0,0,1-.5346.12H9.83Z"
			}), m.a.createElement("path", {
				fill: "inherit",
				d: "M15.5881,9.7269a.6642.6642,0,0,1-.2827.0552.8486.8486,0,0,1-.5079-.1655,1.1369,1.1369,0,0,1-.3491-.3911l-1.122.4682a1.785,1.785,0,0,0,.4487.6143,2.18,2.18,0,0,0,.6909.4194,2.2847,2.2847,0,0,0,.8218.15,2.1,2.1,0,0,0,.8945-.19,1.5993,1.5993,0,0,0,.6494-.5323,1.325,1.325,0,0,0,.2407-.78,1.1177,1.1177,0,0,0-.2407-.7422,1.5127,1.5127,0,0,0-.519-.4151,3.6685,3.6685,0,0,0-.5923-.2119c-.2207-.0591-.3936-.11-.5186-.1548a1.0759,1.0759,0,0,1-.3159-.1679.3052.3052,0,0,1-.1284-.2471.3264.3264,0,0,1,.1392-.2671.547.547,0,0,1,.3466-.1084.6423.6423,0,0,1,.4156.1348,1.09,1.09,0,0,1,.2558.28l1.0694-.45a1.4624,1.4624,0,0,0-.3843-.53,1.9609,1.9609,0,0,0-.6294-.3755,2.1994,2.1994,0,0,0-.78-.1367,2.0044,2.0044,0,0,0-.8682.1831,1.4665,1.4665,0,0,0-.6069.5146,1.3217,1.3217,0,0,0-.2212.751,1.1947,1.1947,0,0,0,.3491.8857,2.0947,2.0947,0,0,0,.9322.51c.0146.0029.0556.0151.1235.0356a3.8108,3.8108,0,0,1,.669.2208q.2584.1192.2587.3178a.318.318,0,0,1-.06.1812A.4179.4179,0,0,1,15.5881,9.7269Z"
			}));
			const Hr = e => {
				return Object(Vs.c)(e, {
					experimentEligibilitySelector: Vs.a,
					experimentName: Kt.me
				}) === Kt.Zc
			};
			var Wr = n("./src/reddit/components/Header/QuickLinks/index.m.less"),
				qr = n.n(Wr),
				Vr = m.a.memo((function(e) {
					const t = Object(Ur.a)(),
						n = Object(p.d)(),
						s = Object(u.useCallback)(() => {
							t(e => ({
								...Object(xt.defaults)(e),
								source: "nav",
								action: "click",
								noun: "popular"
							}))
						}, [t]),
						r = Object(u.useCallback)(() => {
							t(e => ({
								...Object(xt.defaults)(e),
								source: "nav",
								action: "click",
								noun: "all"
							}))
						}, [t]),
						a = Object(u.useCallback)(() => {
							n(Object(Ds.a)(Ls.c[Ls.b.Rpan])), t(e => ({
								...Object(xt.defaults)(e),
								source: "nav",
								action: "click",
								noun: "rpan"
							}))
						}, [n, t]),
						i = Object(p.e)(Ct.K),
						c = Object(p.e)(ks.a),
						l = Object(p.e)(Hr),
						d = Object(Br.a)(),
						b = Object(Br.a)(),
						h = Object(Br.a)(),
						f = Object(Br.a)();
					return m.a.createElement("div", {
						className: Object(v.a)(qr.a.container, e.className)
					}, m.a.createElement("div", {
						className: qr.a.row
					}, m.a.createElement(ds.a, {
						className: qr.a.icon,
						innerRef: d.target.ref,
						to: i ? Ls.c[Ls.b.Popular] : Ls.c[Ls.b.Home],
						onClick: s,
						onMouseEnter: d.show,
						onMouseLeave: d.hide
					}, m.a.createElement(ps.a, {
						name: "popular"
					})), m.a.createElement(Fr.a, {
						arrowProps: d.arrowProps,
						popperProps: d.popperProps,
						visible: d.visible
					}, o.fbt._("Popular", null, {
						hk: "1Kx4va"
					})), m.a.createElement(m.a.Fragment, null, m.a.createElement(ds.a, {
						className: qr.a.icon,
						innerRef: b.target.ref,
						to: Ls.c[Ls.b.All],
						onClick: r,
						onMouseEnter: b.show,
						onMouseLeave: b.hide
					}, m.a.createElement(ps.a, {
						name: "all"
					})), m.a.createElement(Fr.a, {
						arrowProps: b.arrowProps,
						popperProps: b.popperProps,
						visible: b.visible
					}, o.fbt._("All", null, {
						hk: "1Rk1yU"
					}))), c && m.a.createElement(m.a.Fragment, null, m.a.createElement(ds.a, {
						className: qr.a.icon,
						innerRef: h.target.ref,
						to: Ls.c[Ls.b.Rpan],
						onClick: a,
						onMouseEnter: h.show,
						onMouseLeave: h.hide
					}, m.a.createElement(ps.a, {
						name: "video_live"
					})), m.a.createElement(Fr.a, {
						arrowProps: h.arrowProps,
						popperProps: h.popperProps,
						visible: h.visible
					}, o.fbt._("Reddit Live", null, {
						hk: "3BFYUK"
					}))), l && m.a.createElement(m.a.Fragment, null, m.a.createElement(ds.a, {
						className: qr.a.icon,
						innerRef: f.target.ref,
						to: "/r/psbattleslive",
						onClick: () => {},
						onMouseEnter: f.show,
						onMouseLeave: f.hide
					}, m.a.createElement(Gr, {
						className: qr.a.psBattlesIcon
					})), m.a.createElement(Fr.a, {
						arrowProps: f.arrowProps,
						popperProps: f.popperProps,
						visible: f.visible
					}, o.fbt._("PsBattles Live in partnership with Adobe", null, {
						hk: "3mGYdM"
					})))))
				})),
				Kr = n("./src/reddit/actions/login.ts"),
				Qr = n("./src/reddit/actions/tooltip.ts"),
				zr = n("./src/lib/combineRefs/index.tsx"),
				Jr = n("./src/lib/hooks/useOnClickOutside.ts"),
				Xr = n("./src/lib/hooks/useTooltip.ts"),
				Yr = n("./src/reddit/components/CommonTooltip/Hooked.tsx"),
				Zr = n("./src/reddit/components/HeaderIconContainer/index.m.less"),
				$r = n.n(Zr);

			function ea() {
				return (ea = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ta = I.a.button("Button", $r.a),
				na = I.a.div("Container", $r.a);

			function sa(e) {
				const {
					children: t,
					isOpen: n,
					...s
				} = e;
				return m.a.createElement(ta, ea({}, s, {
					id: e.id,
					onClick: t => e.onClick(t)
				}), m.a.createElement(na, {
					className: Object(v.a)({
						[$r.a.isOpen]: n
					})
				}, t))
			}
			var oa = n("./src/reddit/components/BadgeCounter/index.tsx"),
				ra = n("./src/reddit/components/HeaderUserActions/index.m.less"),
				aa = n.n(ra);
			var ia = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(oa.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount
				}), m.a.createElement(ps.a, {
					name: "notification",
					className: aa.a.icon2020
				})),
				ca = n("./src/lib/getParsedUserAgent/index.ts"),
				la = n("./src/reddit/components/InboxBanner/index.m.less"),
				da = n.n(la);
			var ua = Object(Me.a)(({
					onClose: e
				}) => {
					const t = Object(ca.b)(navigator.userAgent);
					return m.a.createElement(et.e, null, m.a.createElement(et.i, {
						className: da.a.modalHeader
					}, m.a.createElement(et.q, {
						className: da.a.modalTitle
					}, o.fbt._("Turn on desktop notifications", null, {
						hk: "LDaeq"
					})), m.a.createElement(Ne.t, {
						onClick: e,
						Icon: Object(ps.b)("close_fill"),
						size: Ne.d.XXS,
						priority: Ne.c.Plain,
						className: da.a.modalCloseIcon
					})), m.a.createElement(et.l, null, m.a.createElement("ul", {
						className: da.a.modalList
					}, m.a.createElement("li", {
						className: da.a.modalListItem
					}, m.a.createElement("span", null, "1"), o.fbt._("Click on {lockIcon} in your browser address bar", [o.fbt._param("lockIcon", m.a.createElement(ps.a, {
						name: "lock_fill",
						className: da.a.modalListIcon
					}))], {
						hk: "kcfln"
					})), t && m.a.createElement("li", {
						className: da.a.modalListItem
					}, m.a.createElement("span", null, "2"), o.fbt._("Select {lockIcon} site settings", [o.fbt._param("lockIcon", m.a.createElement(ps.a, {
						name: "settings_fill",
						className: da.a.modalListIcon
					}))], {
						hk: "4wRmvx"
					})), m.a.createElement("li", {
						className: da.a.modalListItem
					}, m.a.createElement("span", null, t ? 3 : 2), o.fbt._("Change {lockIcon} site settings notifications to ‘Allow’", [o.fbt._param("lockIcon", m.a.createElement(ps.a, {
						name: "notification_fill",
						className: da.a.modalListIcon
					}))], {
						hk: "31PZ6t"
					})))), m.a.createElement(et.g, null, m.a.createElement(Ne.t, {
						text: o.fbt._("Got it", null, {
							hk: "1q53HE"
						}),
						onClick: e
					})))
				}),
				ma = n("./src/reddit/components/InboxTooltip/hooked.m.less"),
				pa = n.n(ma);

			function ba() {
				return (ba = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var ha = m.a.memo((function({
					visible: e,
					...t
				}) {
					const [n, s] = Object(u.useState)(e);
					return Object(u.useEffect)(() => {
						let t = window.setTimeout(() => {
							t = void 0, s(e)
						}, 0);
						return () => {
							t && window.clearTimeout(t), s(!1)
						}
					}, [e]), e ? m.a.createElement("div", ba({
						id: "INBOX--TOOLTIP",
						className: Object(v.a)(pa.a.tooltip, {
							[pa.a.visible]: n
						})
					}, t.popperProps), t.children) : null
				})),
				fa = n("./src/reddit/components/InboxTooltip/Loader.ts"),
				ga = n("./src/reddit/components/InboxTooltip/index.m.less"),
				va = n.n(ga);
			const ya = I.a.wrapped(Ie.a, "CloseIcon", va.a),
				Oa = e => m.a.createElement("div", {
					className: va.a.welcomeTooltipContainer
				}, m.a.createElement("button", {
					className: va.a.closeButton,
					onClick: e.onClose
				}, m.a.createElement(ya, null)), m.a.createElement("h3", {
					className: va.a.tooltipTitle
				}, o.fbt._("Welcome to your new inbox!", null, {
					hk: "4h8pcK"
				})), m.a.createElement("p", {
					className: va.a.tooltipDescription
				}, o.fbt._("Now it’s easier to stay up-to-date on your activity and know what’s happening in your communities.", null, {
					hk: "14J4MZ"
				})));
			var xa = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				Ca = n("./src/reddit/hooks/useInboxExposureSeen.ts"),
				Ea = n("./node_modules/icepick/icepick.js");
			const Pa = Object(Ea.freeze)({
				name: "offset",
				options: {
					offset: [-134, 6]
				}
			});
			var ja = n("./src/reddit/selectors/activeModal.ts"),
				_a = n("./src/reddit/components/Header/NotificationsButton/index.m.less"),
				Sa = n.n(_a);
			const ka = {
					placement: "bottom",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				wa = m.a.memo((function(e) {
					const t = Object(p.d)(),
						n = Object(Br.a)(),
						s = function(e) {
							const t = Object(u.useMemo)(() => {
								const t = Object(Xr.a)(e);
								return Object(Ea.updateIn)(t, ["modifiers"], e => Object(Ea.push)(e, Pa))
							}, [e]);
							return Object(Xr.b)(t)
						}(),
						r = Object(Xr.b)(ka),
						[a, i] = Object(Ca.a)(e.userId),
						[c, l] = Object(xa.a)(e.userId),
						d = Object(p.e)(qs.d),
						b = Object(p.e)(Object(ja.c)("browser_notifications_permission_settings")),
						h = Object(p.e)(qs.e),
						f = Object(p.e)(qs.c),
						g = Object(p.e)(qs.a),
						v = f || h,
						y = Object(u.useCallback)(() => {
							s.hide(), n.hide(), d && i(), g && !c && l()
						}, [s, n, d, l, i, g, c]),
						O = Object(u.useCallback)(() => {
							r.hide(), n.hide(), v && i()
						}, [r, n, v, i]);
					Object(u.useEffect)(() => {
						v && !a && setTimeout(() => {
							r.show()
						}, 3e3)
					}, [v, a]);
					const x = Object(u.useRef)(!0);
					Object(u.useEffect)(() => {
						x.current ? x.current = !1 : f && O()
					}, [e.pageUrl]), Object(Jr.a)("INBOX--TOOLTIP", y);
					const C = v && !s.visible;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: e.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: Object(zr.a)(n.target.ref, s.target.ref, r.target.ref)
					}, m.a.createElement(sa, {
						"aria-expanded": s.visible,
						"aria-haspopup": !0,
						"aria-label": o.fbt._("Open notifications inbox", null, {
							hk: "1b2BKn"
						}),
						className: Sa.a.notificationInboxIconContainer,
						onClick: t => {
							t.stopPropagation(), s.visible ? y() : s.show(), e.sendNavClickInbox(), v && !s.visible && O()
						},
						isOpen: s.visible
					}, m.a.createElement(ia, {
						unreadCount: e.unreadCount
					})), !s.visible && !r.visible && m.a.createElement(Fr.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, m.a.createElement("div", null, o.fbt._("Notifications", null, {
						hk: "vAOKt"
					}))), m.a.createElement(ha, {
						arrowProps: s.arrowProps,
						popperProps: s.popperProps,
						visible: s.visible
					}, m.a.createElement(fa.a, {
						isOpen: s.visible,
						hideTooltip: y,
						userId: e.userId,
						desktopNotificationsModalId: "browser_notifications_permission_settings",
						isLoggedIn: e.isLoggedIn
					})), C && m.a.createElement(Yr.a, {
						arrowProps: r.arrowProps,
						popperProps: r.popperProps,
						visible: r.visible,
						tooltipId: "welcome-tooltip-id",
						className: Sa.a.welcomeTooltip,
						arrowClassName: Sa.a.welcomeTooltipArrow
					}, m.a.createElement(Oa, {
						onClose: O
					}))), b && m.a.createElement(ua, {
						onClose: () => {
							t(Object(_e.g)("browser_notifications_permission_settings"))
						},
						withOverlay: !0
					}))
				}));
			var Ma = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				Na = n("./src/reddit/actions/snoovatarModal.ts"),
				Ia = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				Ta = n("./src/reddit/icons/svgs/SparkleGradient/index.tsx"),
				Aa = n("./src/lib/initializeClient/installReducer.ts"),
				Ra = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(Aa.a)({
				features: {
					avatar: Ra.a
				}
			});
			const La = e => 864e5 * e,
				Da = e => {
					var t, n, s;
					return null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === s ? void 0 : s.quickCreateV1
				},
				Fa = (e, t, n) => {
					var s;
					const o = !!(null === (s = Object(Ct.k)(e)) || void 0 === s ? void 0 : s.snoovatarFullBodyAsset);
					return Ba(e, t) && n === o
				},
				Ba = (e, t) => {
					const n = Object(Ct.k)(e);
					return !(!n || !t) && (new Date).getTime() - (e => Math.floor(1e3 * e))(n.created) > La(t)
				};
			var Ua = n("./src/reddit/components/Header/AvatarQuickCreateCta/index.m.less"),
				Ga = n.n(Ua);
			const {
				fbt: Ha
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Wa(e, t = "view") {
				if (e) {
					const n = Object(Ut.x)(),
						s = {
							id: e.id,
							eventViews: n.eventViews.toString() || "0"
						};
					if ("view" === t) {
						const t = n.id === e.id ? n.eventViews : 0;
						s.eventViews = (t + 1).toString()
					}
					"click" === t && (s.lastInteractionTimestamp = (new Date).getTime().toString()), Object(Ut.gb)(s)
				}
			}
			var qa = ({
					avatarUrlParams: e
				}) => {
					const t = Object(p.e)(Da),
						n = Object(p.d)(),
						s = Object(Ur.a)();
					Object(u.useEffect)(() => {
						s(Object(Ia.n)())
					}, [s]), Object(u.useEffect)(() => {
						t || n(Object(Ma.a)())
					}, [n, t]), Object(u.useEffect)(() => {
						Wa(t)
					}, [t]);
					return m.a.createElement(Ne.k, {
						onClick: () => {
							s(Object(Ia.c)()), Wa(t, "click"), n(Object(Na.b)({
								share: e,
								source: "quick_create"
							}))
						},
						className: Ga.a.ctaContainer
					}, m.a.createElement("img", {
						className: Ga.a.quickCreateGiftAnimation,
						src: `${U.a.assetPath}/img/snoovatars/Golden_Chest.png`,
						alt: Ha._("animated golden chest", null, {
							hk: "12HBG9"
						})
					}), m.a.createElement(m.a.Fragment, null, m.a.createElement(Ta.a, {
						className: Object(v.a)(Ga.a.sparkle, Ga.a.sparkle1)
					}), m.a.createElement(Ta.a, {
						className: Object(v.a)(Ga.a.sparkle, Ga.a.sparkle2)
					}), m.a.createElement(Ta.a, {
						className: Object(v.a)(Ga.a.sparkle, Ga.a.sparkle3)
					})), Ha._("Open Gift", null, {
						hk: "Cd6TH"
					}))
				},
				Va = n("./src/lib/matchRoute/index.ts"),
				Ka = n("./src/chat/helpers/dom.ts"),
				Qa = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				za = n("./src/reddit/actions/changeUsername.ts"),
				Ja = n("./src/reddit/actions/chat/toggle.ts"),
				Xa = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				Ya = n("./src/reddit/actions/postCreation/general.ts"),
				Za = n("./src/reddit/actions/preferences.ts"),
				$a = n("./src/reddit/actions/users.ts"),
				ei = n("./src/reddit/components/BlockNavigation/index.tsx"),
				ti = n("./src/reddit/components/ChangeUsernameModals/Loader.tsx"),
				ni = n("./src/reddit/components/ChangeUsernameTooltip/Loader.tsx");
			var si = Object(Se.a)({
					getComponent: () => Object(Je.a)(() => n.e("EmailVerificationModals").then(n.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				oi = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				ri = n("./src/reddit/helpers/trackers/emailVerification.ts"),
				ai = n("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				ii = n.n(ai);
			class ci extends m.a.Component {
				constructor() {
					super(...arguments), this.onChangeEmailModalOpen = () => {
						this.props.sendEvent(Object(ri.e)(ri.a, "update")), this.props.toggleChangeEmailModal()
					}, this.onCloseTooltip = () => {
						this.props.sendEvent(Object(ri.c)(ri.a)), this.props.closeTooltip()
					}, this.onResendEmailClick = () => {
						this.props.sendEvent(Object(ri.e)(ri.a, "confirm")), this.props.resendEmail(), this.props.closeTooltip()
					}
				}
				componentDidMount() {
					ci.shouldSendViewEvent && (ci.shouldSendViewEvent = !1, this.props.sendEvent(Object(ri.g)(ri.a)))
				}
				render() {
					return m.a.createElement("div", {
						className: ii.a.container
					}, m.a.createElement("div", {
						className: ii.a.topLine
					}), m.a.createElement("button", {
						className: ii.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, m.a.createElement(Ie.a, {
						className: ii.a.closeIcon
					})), m.a.createElement("h5", {
						className: ii.a.title
					}, o.fbt._("Confirm your email:", null, {
						hk: "1RDs8b"
					})), m.a.createElement("p", {
						className: ii.a.subtitle
					}, this.props.email), m.a.createElement("p", {
						className: ii.a.description
					}, o.fbt._("Check your inbox email for Reddit's confirmation email. A current email address helps ensure you don't lose access to your account.", null, {
						hk: "2bhwUs"
					})), m.a.createElement("div", {
						className: ii.a.buttonWrapper
					}, m.a.createElement(Ne.o, {
						className: ii.a.commonBtn,
						"data-redditstyle": !0,
						onClick: this.onChangeEmailModalOpen,
						type: "button"
					}, o.fbt._("Update email", null, {
						hk: "1Cxqkk"
					})), m.a.createElement(Ne.l, {
						className: Object(v.a)(ii.a.commonBtn, ii.a.primaryBtn),
						"data-redditstyle": !0,
						onClick: this.onResendEmailClick,
						type: "button"
					}, o.fbt._("Got it", null, {
						hk: "3IP9TO"
					}))))
				}
			}
			ci.shouldSendViewEvent = !0;
			const li = Object(oi.a)(ci, [Eo.a.Click, Eo.a.Keydown, Eo.a.Resize]);
			var di = Object(A.c)(li),
				ui = n("./src/reddit/components/GoogleOneTapIFrame/index.m.less"),
				mi = n.n(ui);
			const pi = Object(g.c)({
				isLoggedIn: Ct.K
			});
			class bi extends m.a.Component {
				render() {
					const {
						className: e,
						exposeIFrameElement: t,
						isLoggedIn: n
					} = this.props;
					return m.a.createElement(T.a, {
						className: Object(v.a)(mi.a.IFrame, {
							[mi.a["m-hidden"]]: n
						}, e),
						exposeIFrameElement: t,
						path: R.c.GoogleOneTap
					})
				}
			}
			var hi = Object(p.b)(pi)(bi),
				fi = n("./src/reddit/components/Header/GoldCoinsCta/index.tsx");
			var gi = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(oa.a, {
					isActive: e.badgeCount > 0 || e.hasUnreadGroupMessages,
					unreadCount: e.badgeCount
				}), m.a.createElement(ps.a, {
					name: "chat",
					className: aa.a.icon2020
				})),
				vi = n("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				yi = n.n(vi);
			const {
				fbt: Oi
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var xi = e => {
				const {
					onCloseFlyout: t
				} = e;
				return m.a.createElement("div", {
					className: yi.a.container
				}, m.a.createElement("p", {
					className: yi.a.title
				}, Oi._("New User Settings", null, {
					hk: "1Sziu9"
				})), m.a.createElement("h5", {
					className: yi.a.subtitle
				}, Oi._("Like customizing Reddit?", null, {
					hk: "38eFal"
				})), m.a.createElement("p", {
					className: yi.a.description
				}, Oi._("You can save how you sort and view your communities in user settings.", null, {
					hk: "XMkGT"
				})), m.a.createElement(Ne.o, {
					className: yi.a.dismissBtn,
					onClick: t
				}, Oi._("Got it", null, {
					hk: "3IP9TO"
				})))
			};
			var Ci = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(oa.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount
				}), m.a.createElement(ps.a, {
					name: "message",
					className: aa.a.icon2020
				})),
				Ei = n("./node_modules/lodash/noop.js"),
				Pi = n.n(Ei),
				ji = n("./src/lib/prettyPrintNumber/index.ts"),
				_i = n("./src/realtime/GQLSubscription/async.tsx"),
				Si = n("./src/reddit/actions/alpha.ts"),
				ki = n("./src/reddit/actions/modMode.ts"),
				wi = n("./src/reddit/actions/profile/index.ts"),
				Mi = n("./src/reddit/constants/elementClassNames.ts"),
				Ni = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				Ii = n("./src/reddit/helpers/karma.ts");
			const Ti = (e, t) => {
				Object(u.useEffect)(() => (window.addEventListener(e, t), () => window.removeEventListener(e, t)), [e, t])
			};
			var Ai = Ti;
			var Ri = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				Li = n("./src/reddit/icons/fonts/Premium/index.tsx"),
				Di = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				Fi = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				Bi = n("./src/reddit/selectors/experiments/onlineIndicator.ts"),
				Ui = n("./src/reddit/selectors/modModeEnabled.ts"),
				Gi = n("./src/reddit/selectors/seo/index.ts"),
				Hi = n("./src/reddit/selectors/tooltip.ts"),
				Wi = n("./src/higherOrderComponents/asTooltip.tsx"),
				qi = n("./src/reddit/components/HiddenDiv.tsx"),
				Vi = n("./src/reddit/controls/Dropdown/index.tsx"),
				Ki = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				Qi = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				zi = n("./src/reddit/helpers/trackers/authControls.ts"),
				Ji = n("./src/reddit/helpers/trackers/modTools.ts"),
				Xi = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				Yi = n("./src/reddit/helpers/trackers/user.ts"),
				Zi = n("./src/reddit/icons/svgs/SnooNoEyes/index.tsx"),
				$i = n("./src/reddit/constants/colors.ts"),
				ec = n("./src/reddit/controls/InternalLink/index.tsx");

			function tc() {
				return (tc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var nc = e => {
					const {
						children: t,
						className: n,
						href: s = "#",
						onClick: o,
						rel: r
					} = e, a = {
						onClick: o,
						rel: r,
						className: n
					};
					return (s || "").startsWith("http") ? m.a.createElement("a", tc({
						href: s
					}, a), t) : m.a.createElement(ec.a, tc({
						to: s
					}, a), t)
				},
				sc = n("./src/reddit/components/HeaderUserDropdown/UserMenu/shared.m.less"),
				oc = n.n(sc);
			const rc = e => {
					const {
						title: t,
						titleClassName: n
					} = e;
					return m.a.createElement("span", {
						className: Object(v.a)(oc.a.title, n)
					}, t)
				},
				ac = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: o
					} = e;
					return m.a.createElement("button", {
						className: Object(v.a)(oc.a.secondLevelButton, t),
						onClick: n
					}, m.a.createElement(rc, {
						title: s,
						titleClassName: o
					}))
				},
				ic = e => {
					const {
						className: t,
						href: n,
						onClick: s,
						title: o,
						titleClassName: r,
						rel: a
					} = e;
					return m.a.createElement(nc, {
						className: Object(v.a)(oc.a.secondLevelButton, t),
						href: n,
						onClick: s,
						rel: a
					}, m.a.createElement(rc, {
						title: o,
						titleClassName: r
					}))
				},
				cc = e => {
					const {
						className: t,
						href: n,
						iconClassName: s,
						iconUrl: o,
						onClick: r,
						rel: a,
						title: i,
						titleClassName: c
					} = e;
					return m.a.createElement(nc, {
						className: Object(v.a)(oc.a.secondLevelButton, t),
						href: n,
						onClick: r,
						rel: a
					}, m.a.createElement(ys.b, {
						"aria-hidden": !0,
						className: Object(v.a)(oc.a.subredditIcon, s),
						iconUrl: o,
						primaryColor: $i.b.snoo
					}), m.a.createElement(rc, {
						title: i,
						titleClassName: c
					}))
				},
				lc = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: o,
						isEnabled: r
					} = e;
					return m.a.createElement("button", {
						className: Object(v.a)(oc.a.secondLevelSwitch, t),
						onClick: n,
						onMouseDown: e => {
							e.preventDefault()
						}
					}, m.a.createElement(rc, {
						title: s,
						titleClassName: o
					}), m.a.createElement(Ki.a, {
						className: oc.a.toggleSwitch,
						"data-redditstyle": !0,
						on: r,
						redditStyle: !0,
						tabIndex: -1
					}))
				};
			var dc = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				uc = n("./src/reddit/selectors/avatarMarketing.ts"),
				mc = n("./src/reddit/selectors/meta.ts"),
				pc = n("./src/reddit/components/HeaderUserDropdown/avatar.m.less"),
				bc = n.n(pc);
			const hc = (e, t) => e && m.a.createElement("div", {
				className: bc.a.marketingBadge
			}, m.a.createElement(dc.a, {
				className: bc.a.marketingAsset,
				headshot: e
			}), o.fbt._("New", null, {
				hk: "2TRcjA"
			}), !t && m.a.createElement(m.a.Fragment, null, m.a.createElement(Ta.a, {
				className: Object(v.a)(bc.a.sparkle, bc.a.sparkle1)
			}), m.a.createElement(Ta.a, {
				className: Object(v.a)(bc.a.sparkle, bc.a.sparkle2)
			}), m.a.createElement(Ta.a, {
				className: Object(v.a)(bc.a.sparkle, bc.a.sparkle3)
			}), m.a.createElement(Ta.a, {
				className: Object(v.a)(bc.a.sparkle, bc.a.sparkle4)
			})));
			var fc = ({
				useNewButtonComponent: e,
				onClick: t
			}) => {
				var n;
				const s = Object(p.d)(),
					r = Object(Ur.a)(),
					a = Object(Qt.eb)(),
					i = Object(p.e)(e => e.user.account),
					c = Object(p.e)(hs.c),
					l = Object(p.e)(Ws.d),
					d = Object(p.e)(uc.b),
					u = Object(p.e)(uc.a),
					b = () => s(Object(Na.b)({
						clickSource: "nav"
					})),
					h = Object(p.e)(mc.i).startsWith("en");
				if ((null === (n = null == a ? void 0 : a.meta) || void 0 === n ? void 0 : n.name) === y.Mb.AVATAR) return null;
				!d && l && s(Object(Ma.a)()), u && r(Ia.l);
				const f = i && i.snoovatarFullBodyAsset ? o.fbt._("Style Avatar", null, {
					hk: "1HIsKA"
				}) : o.fbt._("Create Avatar", null, {
					hk: "3kfCbX"
				});
				if (e) {
					const e = m.a.createElement(m.a.Fragment, null, f, h && hc(u, c));
					return m.a.createElement(ac, {
						onClick: () => {
							b(), "function" == typeof t && t()
						},
						title: e,
						titleClassName: bc.a.avatarLinkBody
					})
				}
				const g = Object(Qi.c)((null == i ? void 0 : i.snoovatarFullBodyAsset) ? ol("avatar_style") : ol("add"), ((e, t, n, s) => o => m.a.createElement("div", {
					className: `${bc.a.avatarLinkBody} ${o.className}`
				}, e, s && hc(t, n)))(f, u, c, h));
				return m.a.createElement(g, {
					onClick: b
				})
			};
			const gc = e => {
					const {
						icon: t,
						title: n,
						titleClassName: s
					} = e;
					return m.a.createElement("span", {
						className: oc.a.headingContent
					}, m.a.createElement("span", {
						className: oc.a.iconContainer
					}, t), m.a.createElement("span", {
						className: Object(v.a)(oc.a.title, s)
					}, n))
				},
				vc = e => {
					const {
						className: t,
						icon: n,
						onClick: s,
						title: o,
						titleClassName: r
					} = e;
					return m.a.createElement("button", {
						className: Object(v.a)(oc.a.button, t),
						onClick: s
					}, m.a.createElement(gc, {
						icon: n,
						title: o,
						titleClassName: r
					}))
				},
				yc = e => {
					const {
						className: t,
						href: n,
						icon: s,
						onClick: o,
						rel: r,
						title: a,
						titleClassName: i
					} = e;
					return m.a.createElement(nc, {
						className: Object(v.a)(oc.a.button, t),
						href: n,
						rel: r,
						onClick: o
					}, m.a.createElement(gc, {
						icon: s,
						title: a,
						titleClassName: i
					}))
				};
			class Oc extends m.a.Component {
				constructor(e) {
					super(e), this.toggleOpen = e => {
						const t = "A" === e.target.tagName;
						this.props.children && !t && null == this.props.isOpen && this.setState({
							isOpen: !this.state.isOpen
						})
					}, this.state = {
						isOpen: !!e.defaultOpen
					}
				}
				render() {
					var e;
					const {
						children: t,
						className: n,
						icon: s,
						onClick: o,
						title: r,
						url: a
					} = this.props, i = null !== (e = this.props.isOpen) && void 0 !== e ? e : this.state.isOpen;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("button", {
						className: oc.a.button,
						type: "button",
						onClick: e => {
							if (this.toggleOpen(e), "function" == typeof o) {
								const t = e.target,
									n = Boolean(t.getAttribute("data-chevron"));
								o(e, n)
							}
						}
					}, m.a.createElement("span", {
						className: oc.a.headingContent,
						tabIndex: -1
					}, m.a.createElement("span", {
						className: oc.a.iconContainer
					}, s), m.a.createElement("span", {
						className: oc.a.title
					}, a ? m.a.createElement(nc, {
						className: oc.a.innerLink,
						href: a
					}, r) : m.a.createElement(m.a.Fragment, null, r)), m.a.createElement(ps.a, {
						"data-chevron": !0,
						name: "caret_down",
						className: Object(v.a)(oc.a.chevronIcon, {
							[oc.a["m-expanded"]]: i
						})
					}))), m.a.createElement("div", {
						className: Object(v.a)(oc.a.contentContainer, oc.a["m-collapsible"], {
							[oc.a.isOpen]: i
						}, n)
					}, t))
				}
			}
			var xc = Oc;
			var Cc = [{
					link: {
						noun: "gaming",
						title: "Gaming",
						url: "/t/gaming/"
					},
					sublinks: [{
						noun: "valheim",
						title: "Valheim",
						url: "/t/valheim/"
					}, {
						noun: "genshin_impact",
						title: "Genshin Impact",
						url: "/t/genshin_impact/"
					}, {
						noun: "minecraft",
						title: "Minecraft",
						url: "/t/minecraft/"
					}, {
						noun: "pokimane",
						title: "Pokimane",
						url: "/t/pokimane/"
					}, {
						noun: "halo_infinite",
						title: "Halo Infinite",
						url: "/t/halo_infinite/"
					}, {
						noun: "call_of_duty_warzone",
						title: "Call of Duty: Warzone",
						url: "/t/call_of_duty_warzone/"
					}, {
						noun: "path_of_exile",
						title: "Path of Exile",
						url: "/t/path_of_exile/"
					}, {
						noun: "hollow_knight_silksong",
						title: "Hollow Knight: Silksong",
						url: "/t/hollow_knight_silksong/"
					}, {
						noun: "escape_from_tarkov",
						title: "Escape from Tarkov",
						url: "/t/escape_from_tarkov/"
					}, {
						noun: "watch_dogs_legion",
						title: "Watch Dogs: Legion",
						url: "/t/watch_dogs_legion/"
					}]
				}, {
					link: {
						noun: "sports",
						title: "Sports",
						url: "/t/sports/"
					},
					sublinks: [{
						noun: "nfl",
						title: "NFL",
						url: "/t/nfl/"
					}, {
						noun: "nba",
						title: "NBA",
						url: "/t/nba/"
					}, {
						noun: "megan_anderson",
						title: "Megan Anderson",
						url: "/t/megan_anderson/"
					}, {
						noun: "atlanta_hawks",
						title: "Atlanta Hawks",
						url: "/t/atlanta_hawks/"
					}, {
						noun: "los_angeles_lakers",
						title: "Los Angeles Lakers",
						url: "/t/los_angeles_lakers/"
					}, {
						noun: "boston_celtics",
						title: "Boston Celtics",
						url: "/t/boston_celtics/"
					}, {
						noun: "arsenal_fc",
						title: "Arsenal F.C.",
						url: "/t/arsenal_fc/"
					}, {
						noun: "philadelphia_76ers",
						title: "Philadelphia 76ers",
						url: "/t/philadelphia_76ers/"
					}, {
						noun: "premier_league",
						title: "Premier League",
						url: "/t/premier_league/"
					}, {
						noun: "ufc",
						title: "UFC",
						url: "/t/ufc/"
					}]
				}, {
					link: {
						noun: "tv",
						title: "Television",
						url: "/t/television/"
					},
					sublinks: [{
						noun: "the_real_housewives_of_atlanta",
						title: "The Real Housewives of Atlanta",
						url: "/t/the_real_housewives_of_atlanta/"
					}, {
						noun: "the_bachelor",
						title: "The Bachelor",
						url: "/t/the_bachelor/"
					}, {
						noun: "sister_wives",
						title: "Sister Wives",
						url: "/t/sister_wives/"
					}, {
						noun: "90_day_fiance",
						title: "90 Day Fiance",
						url: "/t/90_day_fiance/"
					}, {
						noun: "wife_swap",
						title: "Wife Swap",
						url: "/t/wife_swap/"
					}, {
						noun: "the_amazing_race_australia",
						title: "The Amazing Race Australia",
						url: "/t/the_amazing_race_australia/"
					}, {
						noun: "married_at_first_sight",
						title: "Married at First Sight",
						url: "/t/married_at_first_sight/"
					}, {
						noun: "the_real_housewives_of_dallas",
						title: "The Real Housewives of Dallas",
						url: "/t/the_real_housewives_of_dallas/"
					}, {
						noun: "my_600lb_life",
						title: "My 600-lb Life",
						url: "/t/my_600lb_life/"
					}, {
						noun: "last_week_tonight_with_john_oliver",
						title: "Last Week Tonight with John Oliver",
						url: "/t/last_week_tonight_with_john_oliver/"
					}]
				}, {
					link: {
						noun: "celebrity",
						title: "Celebrity",
						url: "/t/celebrity/"
					},
					sublinks: [{
						noun: "kim_kardashian",
						title: "Kim Kardashian",
						url: "/t/kim_kardashian/"
					}, {
						noun: "doja_cat",
						title: "Doja Cat",
						url: "/t/doja_cat/"
					}, {
						noun: "iggy_azalea",
						title: "Iggy Azalea",
						url: "/t/iggy_azalea/"
					}, {
						noun: "anya_taylorjoy",
						title: "Anya Taylor-Joy",
						url: "/t/anya_taylor_joy/"
					}, {
						noun: "jamie_lee_curtis",
						title: "Jamie Lee Curtis",
						url: "/t/jamie_lee_curtis/"
					}, {
						noun: "natalie_portman",
						title: "Natalie Portman",
						url: "/t/natalie_portman/"
					}, {
						noun: "henry_cavill",
						title: "Henry Cavill",
						url: "/t/henry_cavill/"
					}, {
						noun: "millie_bobby_brown",
						title: "Millie Bobby Brown",
						url: "/t/millie_bobby_brown/"
					}, {
						noun: "tom_hiddleston",
						title: "Tom Hiddleston",
						url: "/t/tom_hiddleston/"
					}, {
						noun: "keanu_reeves",
						title: "Keanu Reeves",
						url: "/t/keanu_reeves/"
					}]
				}, {
					link: {
						noun: "business",
						title: "Business, Economics, and Finance",
						url: "/t/business_economics_and_finance/"
					},
					sublinks: [{
						noun: "gamestop",
						title: "GameStop",
						url: "/t/gamestop/"
					}, {
						noun: "moderna",
						title: "Moderna",
						url: "/t/moderna/"
					}, {
						noun: "pfizer",
						title: "Pfizer",
						url: "/t/pfizer/"
					}, {
						noun: "johnson_johnson",
						title: "Johnson & Johnson",
						url: "/t/johnson_johnson/"
					}, {
						noun: "astrazeneca",
						title: "AstraZeneca",
						url: "/t/astrazeneca/"
					}, {
						noun: "walgreens",
						title: "Walgreens",
						url: "/t/walgreens/"
					}, {
						noun: "best_buy",
						title: "Best Buy",
						url: "/t/best_buy/"
					}, {
						noun: "novavax",
						title: "Novavax",
						url: "/t/novavax/"
					}, {
						noun: "spacex",
						title: "SpaceX",
						url: "/t/spacex/"
					}, {
						noun: "tesla",
						title: "Tesla",
						url: "/t/tesla/"
					}]
				}, {
					link: {
						noun: "crypto",
						title: "Crypto",
						url: "/t/cryptocurrency/"
					},
					sublinks: [{
						noun: "cardano",
						title: "Cardano",
						url: "/t/cardano/"
					}, {
						noun: "dogecoin",
						title: "Dogecoin",
						url: "/t/dogecoin/"
					}, {
						noun: "algorand",
						title: "Algorand",
						url: "/t/algorand/"
					}, {
						noun: "bitcoin",
						title: "Bitcoin",
						url: "/t/bitcoin/"
					}, {
						noun: "litecoin",
						title: "Litecoin",
						url: "/t/litecoin/"
					}, {
						noun: "basic_attention_token",
						title: "Basic Attention Token",
						url: "/t/basic_attention_token/"
					}, {
						noun: "bitcoin_cash",
						title: "Bitcoin Cash",
						url: "/t/bitcoin_cash/"
					}]
				}, {
					link: {
						noun: "more_topics",
						title: "More Topics",
						url: "/topics/a-1/"
					},
					sublinks: [{
						noun: "animals_and_pets",
						title: "Animals and Pets",
						url: "/t/animals_and_pets/"
					}, {
						noun: "anime",
						title: "Anime",
						url: "/t/anime/"
					}, {
						noun: "art",
						title: "Art",
						url: "/t/art/"
					}, {
						noun: "cars_and_motor_vehicles",
						title: "Cars and Motor Vehicles",
						url: "/t/cars_and_motor_vehicles/"
					}, {
						noun: "crafts_and_diy",
						title: "Crafts and DIY",
						url: "/t/crafts_and_diy/"
					}, {
						noun: "culture_race_and_ethnicity",
						title: "Culture, Race, and Ethnicity",
						url: "/t/culture_race_and_ethnicity/"
					}, {
						noun: "ethics_and_philosophy",
						title: "Ethics and Philosophy",
						url: "/t/ethics_and_philosophy/"
					}, {
						noun: "fashion",
						title: "Fashion",
						url: "/t/fashion/"
					}, {
						noun: "food_and_drink",
						title: "Food and Drink",
						url: "/t/food_and_drink/"
					}, {
						noun: "history",
						title: "History",
						url: "/t/history/"
					}, {
						noun: "hobby",
						title: "Hobbies",
						url: "/t/hobby/"
					}, {
						noun: "law",
						title: "Law",
						url: "/t/law/"
					}, {
						noun: "learning_and_education",
						title: "Learning and Education",
						url: "/t/learning_and_education/"
					}, {
						noun: "military",
						title: "Military",
						url: "/t/military/"
					}, {
						noun: "movie",
						title: "Movies",
						url: "/t/movie/"
					}, {
						noun: "music",
						title: "Music",
						url: "/t/music/"
					}, {
						noun: "place",
						title: "Place",
						url: "/t/place/"
					}, {
						noun: "podcasts_and_streamers",
						title: "Podcasts and Streamers",
						url: "/t/podcasts_and_streamers/"
					}, {
						noun: "politics",
						title: "Politics",
						url: "/t/politics/"
					}, {
						noun: "programming",
						title: "Programming",
						url: "/t/programming/"
					}, {
						noun: "reading_writing_and_literature",
						title: "Reading, Writing, and Literature",
						url: "/t/reading_writing_and_literature/"
					}, {
						noun: "religion_and_spirituality",
						title: "Religion and Spirituality",
						url: "/t/religion_and_spirituality/"
					}, {
						noun: "science",
						title: "Science",
						url: "/t/science/"
					}, {
						noun: "tabletop_game",
						title: "Tabletop Games",
						url: "/t/tabletop_game/"
					}, {
						noun: "technology",
						title: "Technology",
						url: "/t/technology/"
					}, {
						noun: "travel",
						title: "Travel",
						url: "/t/travel/"
					}]
				}],
				Ec = n("./src/reddit/helpers/trackers/navigation.ts"),
				Pc = n("./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less"),
				jc = n.n(Pc);
			var _c = ({
				isOpen: e,
				onClick: t,
				sendEvent: n
			}) => {
				const [s, r] = Object(u.useState)(null), a = e => () => {
					r(s === e ? null : e)
				};
				return m.a.createElement(xc, {
					icon: m.a.createElement(ps.a, {
						name: "discover"
					}),
					isOpen: e,
					onClick: (e, s) => {
						n(Object(Ec.b)(s ? "explore_chevron" : "explore_menu")), "function" == typeof t && t(e)
					},
					title: o.fbt._("Explore", null, {
						hk: "4xNnBs"
					})
				}, m.a.createElement("span", null, Cc.map((e, t) => (({
					link: e,
					sublinks: t
				}, {
					isOpen: n,
					onClick: s
				}, o) => m.a.createElement(xc, {
					className: jc.a.collapsibleContainer,
					isOpen: n,
					key: e.url,
					onClick: (t, n) => {
						e.noun && o(Object(Ec.b)(e.noun + (n ? "_chevron" : "_menu"))), "function" == typeof s && s(t)
					},
					title: e.title,
					url: e.url
				}, t.map(e => m.a.createElement(ic, {
					className: jc.a.basicLink,
					href: e.url,
					key: e.url,
					onClick: () => {
						e.noun && o(Object(Ec.b)(e.noun + "_menu"))
					},
					title: e.title
				}))))(e, (e => ({
					onClick: a(e),
					isOpen: s === e
				}))(t), n))))
			};
			var Sc = e => {
				const {
					title: t,
					children: n,
					icon: s
				} = e;
				return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
					className: oc.a.heading
				}, m.a.createElement("span", {
					className: oc.a.headingContent
				}, m.a.createElement("span", {
					className: oc.a.iconContainer
				}, s), m.a.createElement("span", {
					className: oc.a.title
				}, t))), m.a.createElement("div", {
					className: oc.a.contentContainer
				}, n))
			};
			const kc = () => {
					const e = Object(p.d)(),
						t = Object(Ur.a)(),
						n = Object(p.e)(Ct.X);
					return m.a.createElement(lc, {
						isEnabled: n,
						onClick: () => {
							t(Object(Yi.f)(n)), (t => e(Object(Za.y)(t)))(!n)
						},
						title: o.fbt._("Dark Mode", null, {
							hk: "1pZGTO"
						})
					})
				},
				wc = () => {
					const e = Object(p.d)(),
						t = Object(Ur.a)(),
						n = Object(p.e)(e => e.user.account),
						s = Object(p.e)(Ui.a);
					return n && n.isMod ? m.a.createElement(lc, {
						isEnabled: s,
						onClick: () => {
							t(Object(Ji.i)(!s)), (() => e(Object(ki.b)()))()
						},
						title: o.fbt._("Mod Mode", null, {
							hk: "1gLGCN"
						})
					}) : null
				},
				Mc = () => {
					const e = Object(p.d)(),
						t = Object(A.b)(),
						n = Object(p.e)(Ct.k),
						s = Object(p.e)(Ct.P);
					return n ? m.a.createElement(Sc, {
						icon: m.a.createElement(ps.a, {
							name: "profile"
						}),
						title: o.fbt._("My Stuff", null, {
							hk: "15XGVl"
						})
					}, m.a.createElement(lc, {
						title: o.fbt._("Online Status", null, {
							hk: "3t396G"
						}),
						isEnabled: s,
						onClick: () => {
							t(Object(Yi.g)(!s)), (t => e(Object(Za.H)({
								showPresence: t
							})))(!s)
						}
					}), m.a.createElement(ic, {
						title: o.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						href: null == n ? void 0 : n.url,
						onClick: () => t(Object(Ec.b)("profile"))
					}), m.a.createElement(fc, {
						onClick: () => e(Object(Qr.j)({
							tooltipId: "USER_DROPDOWN_ID"
						})),
						useNewButtonComponent: !0
					}), m.a.createElement(ic, {
						title: o.fbt._("User Settings", null, {
							hk: "2HIDAR"
						}),
						href: "/settings/",
						onClick: () => t(Object(Ec.b)("settings"))
					})) : null
				},
				Nc = () => {
					return Object(p.e)(Ct.k) ? m.a.createElement(Sc, {
						title: o.fbt._("View Options", null, {
							hk: "142L6P"
						}),
						icon: m.a.createElement(ps.a, {
							name: "views"
						})
					}, m.a.createElement(wc, null), m.a.createElement(kc, null)) : null
				},
				Ic = ({
					isOpen: e,
					onClick: t
				}) => {
					return Object(p.e)(Ct.k) ? null : m.a.createElement(xc, {
						icon: m.a.createElement(ps.a, {
							name: "settings"
						}),
						title: o.fbt._("Settings", null, {
							hk: "1AC3DI"
						}),
						isOpen: e,
						onClick: t
					}, m.a.createElement(kc, null))
				},
				Tc = ({
					isOpen: e,
					onClick: t,
					sendEvent: n
				}) => m.a.createElement(xc, {
					icon: m.a.createElement(ps.a, {
						name: "rules"
					}),
					isOpen: e,
					onClick: (e, s) => {
						n(Object(Ec.b)(s ? "terms_chevron" : "terms_menu")), "function" == typeof t && t(e)
					},
					title: o.fbt._("Terms & Policies", null, {
						hk: "3sa1sF"
					})
				}, m.a.createElement(ic, {
					href: "https://www.redditinc.com/policies/user-agreement",
					onClick: () => n(Object(Ec.b)("user_agreement")),
					title: o.fbt._("User Agreement", null, {
						hk: "kfqI"
					})
				}), m.a.createElement(ic, {
					href: "https://www.redditinc.com/policies/privacy-policy",
					onClick: () => n(Object(Ec.b)("privacy_policy")),
					title: o.fbt._("Privacy Policy", null, {
						hk: "y8Vyn"
					})
				}), m.a.createElement(ic, {
					href: "https://www.redditinc.com/policies/content-policy",
					onClick: () => n(Object(Ec.b)("content_policy")),
					title: o.fbt._("Content Policy", null, {
						hk: "2xjmLL"
					})
				}), m.a.createElement(ic, {
					href: "https://www.redditinc.com/policies/moderator-guidelines",
					onClick: () => n(Object(Ec.b)("mod_policy")),
					title: o.fbt._("Moderator Guidelines", null, {
						hk: "2AfPVY"
					})
				})),
				Ac = (e = new Date) => {
					const t = e.getFullYear();
					return `/posts/${e.getMonth()>=6?t:t-1}/`
				};
			var Rc = () => [{
				noun: "ios",
				rel: "nofollow",
				title: () => o.fbt._("Reddit iOS", null, {
					hk: "2W8O9q"
				}),
				url: "https://reddit.onelink.me/MRHZ/b3d845e"
			}, {
				noun: "android",
				rel: "nofollow",
				title: () => o.fbt._("Reddit Android", null, {
					hk: "SmUA3"
				}),
				url: "https://reddit.onelink.me/MRHZ/4c212f61"
			}, {
				noun: "gifts",
				title: () => o.fbt._("Reddit Gifts", null, {
					hk: "3FWQGX"
				}),
				url: "https://www.redditgifts.com"
			}, {
				noun: "rereddit",
				title: () => o.fbt._("Rereddit", null, {
					hk: "1DyKwo"
				}),
				url: Ac()
			}, {
				noun: "communities",
				title: () => o.fbt._("Communities", null, {
					hk: "9RIu9"
				}),
				url: "/subreddits/a-1/"
			}, {
				noun: "about_reddit",
				title: () => o.fbt._("About Reddit", null, {
					hk: "3cosfA"
				}),
				url: "https://www.redditinc.com"
			}, {
				noun: "advertise",
				title: () => o.fbt._("Advertise", null, {
					hk: "3eP3Lb"
				}),
				url: "https://www.redditinc.com/advertising"
			}, {
				noun: "blog",
				title: () => o.fbt._("Blog", null, {
					hk: "2XlvLX"
				}),
				url: "https://redditblog.com"
			}, {
				noun: "careers",
				title: () => o.fbt._("Careers", null, {
					hk: "g9gZP"
				}),
				url: "https://www.redditinc.com/careers"
			}, {
				noun: "press",
				title: () => o.fbt._("Press", null, {
					hk: "FYgfC"
				}),
				url: "https://www.redditinc.com/press"
			}];
			var Lc = ({
					isLoggedIn: e,
					isOpen: t,
					onClick: n,
					sendEvent: s,
					url: r
				}) => m.a.createElement(xc, {
					icon: m.a.createElement(ps.a, {
						name: "info"
					}),
					title: o.fbt._("More", null, {
						hk: "42foEw"
					}),
					isOpen: t,
					onClick: (e, t) => {
						s(Object(Ec.b)(t ? "more_chevron" : "more_menu")), "function" == typeof n && n(e)
					}
				}, Rc().map(e => (({
					noun: e,
					rel: t,
					title: n,
					url: s
				}, o) => m.a.createElement(ic, {
					href: s,
					key: s,
					onClick: () => {
						e && o(Object(Ec.b)(e))
					},
					rel: t,
					title: n()
				}))(e, s)), e ? m.a.createElement(ic, {
					href: "https://old.reddit.com" + r,
					title: o.fbt._("Visit Old Reddit", null, {
						hk: "3Fo9ag"
					}),
					onClick: () => {
						s(Object(Ec.b)("old_reddit")), s(e => ({
							source: "redesignbanner",
							action: "click",
							noun: "2xdropdown_visit_old",
							screen: xt.screen(e),
							subreddit: xt.subreddit(e)
						}))
					}
				}) : null),
				Dc = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				Fc = n("./src/reddit/components/HeaderUserDropdown/UserMenu/RecentCommunitiesMenu/styles.m.less"),
				Bc = n.n(Fc);
			var Uc = ({
					isOpen: e,
					onClick: t
				}) => {
					const [{
						links: n,
						showAll: s
					}, r] = Object(u.useState)({
						links: Object(Dc.b)(),
						showAll: !1
					});
					if (Object(u.useEffect)(() => {
							e || r({
								links: n,
								showAll: !1
							})
						}, [n, e]), 0 === n.length) return null;
					const a = s ? n : n.slice(0, 3),
						i = () => r({
							links: n,
							showAll: !s
						});
					return m.a.createElement(xc, {
						"aria-hidden": !0,
						icon: m.a.createElement(ps.a, {
							name: "history"
						}),
						isOpen: e,
						title: o.fbt._("Recent Communities", null, {
							hk: "cJ4rl"
						}),
						onClick: t
					}, a.map(e => {
						var t, n;
						return m.a.createElement(cc, {
							className: Bc.a.basicLink,
							href: e.url,
							iconClassName: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url) ? void 0 : Bc.a.subredditIcon,
							iconUrl: e.communityIcon || (null === (n = e.icon) || void 0 === n ? void 0 : n.url),
							key: e.url,
							title: e.title,
							titleClassName: Bc.a.title
						})
					}), n.length > 3 && (e => m.a.createElement("span", {
						className: oc.a.spanButton,
						onClick: i
					}, m.a.createElement("span", {
						className: Object(v.a)(oc.a.headingContent, Bc.a.headingContent)
					}, m.a.createElement("span", {
						className: oc.a.title
					}, e))))(s ? o.fbt._("see less", null, {
						hk: "3tQWvR"
					}) : o.fbt._("see more", null, {
						hk: "1WV0AC"
					})))
				},
				Gc = n("./src/reddit/components/HeaderUserDropdown/UserMenu/index.m.less"),
				Hc = n.n(Gc);

			function Wc() {
				return (Wc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const qc = e => {
					e.nativeEvent.stopImmediatePropagation()
				},
				Vc = e => {
					const t = e && e.coins || 0;
					return o.fbt._({
						"*": "{number of coins} coins",
						_1: "1 coin"
					}, [o.fbt._plural(t, "number of coins")], {
						hk: "qmnnm"
					})
				};
			var Kc;
			! function(e) {
				e[e.RecentCommunitiesMenu = 0] = "RecentCommunitiesMenu", e[e.ExploreMenu = 1] = "ExploreMenu", e[e.MoreMenu = 2] = "MoreMenu", e[e.Settings = 3] = "Settings", e[e.TermsAndPolicies = 4] = "TermsAndPolicies"
			}(Kc || (Kc = {}));
			var Qc = e => {
					const {
						closeUserDropdown: t,
						dispatchOpenLoginModal: n,
						logoutUser: s,
						openCommunityCreationModal: r,
						sendEvent: a,
						shouldShowCreateCommunityItem: i,
						url: c,
						user: l
					} = e, [d, p] = Object(u.useState)(Kc.TermsAndPolicies), b = e => () => {
						p(d === e ? null : e)
					}, h = e => ({
						onClick: b(e),
						isOpen: d === e
					}), f = !!l, g = () => {
						t(), n()
					};
					return m.a.createElement("div", {
						onClick: qc
					}, m.a.createElement(Mc, null), m.a.createElement(Nc, null), m.a.createElement(() => i ? m.a.createElement(vc, {
						icon: m.a.createElement(ps.a, {
							name: "community"
						}),
						onClick: () => {
							r(), a(Object(Xi.a)())
						},
						title: o.fbt._("Create a Community", null, {
							hk: "3QGru4"
						})
					}) : null, null), m.a.createElement(() => m.a.createElement(yc, {
						icon: m.a.createElement(ps.a, {
							name: "coins"
						}),
						href: "/coins",
						title: m.a.createElement(m.a.Fragment, null, m.a.createElement("span", null, o.fbt._("Coins", null, {
							hk: "2g3szC"
						})), m.a.createElement("span", {
							className: Hc.a.meta
						}, Vc(l))),
						onClick: () => {
							Object(_o.d)(_o.a.GoldPayment, !0), e.sendEvent(Object(Yi.b)())
						},
						titleClassName: Hc.a.coinsTitle,
						className: Hc.a.coinsLink
					}), null), m.a.createElement(() => m.a.createElement(yc, {
						icon: m.a.createElement(ps.a, {
							name: "premium"
						}),
						href: "/premium",
						onClick: () => {
							Object(_o.d)(_o.a.GoldPayment, !0), e.sendEvent(Object(Yi.e)())
						},
						title: o.fbt._("Premium", null, {
							hk: "Ib64I"
						})
					}), null), m.a.createElement(() => m.a.createElement(yc, {
						icon: m.a.createElement(ps.a, {
							name: "powerup"
						}),
						href: "/powerups",
						onClick: () => {
							Object(_o.d)(_o.a.GoldPayment, !0), e.sendEvent(Object(Yi.c)())
						},
						title: o.fbt._("Powerups", null, {
							hk: "2rTyID"
						})
					}), null), m.a.createElement(() => m.a.createElement(yc, {
						icon: m.a.createElement(ps.a, {
							name: "live"
						}),
						href: Gs.a,
						title: o.fbt._("Talk", null, {
							hk: "2nFtKJ"
						})
					}), null), !f && m.a.createElement(Uc, h(Kc.RecentCommunitiesMenu)), m.a.createElement(_c, Wc({}, h(Kc.ExploreMenu), {
						sendEvent: a
					})), m.a.createElement(Ic, h(Kc.Settings)), m.a.createElement(() => m.a.createElement(yc, {
						href: "https://www.reddithelp.com/hc/en-us",
						icon: m.a.createElement(ps.a, {
							name: "help"
						}),
						title: o.fbt._("Help Center", null, {
							hk: "4sGjc0"
						}),
						onClick: () => e.sendEventWithName("help_center")
					}), null), m.a.createElement(Lc, Wc({}, h(Kc.MoreMenu), {
						isLoggedIn: f,
						url: c,
						sendEvent: a
					})), m.a.createElement(Tc, Wc({}, h(Kc.TermsAndPolicies), {
						sendEvent: a
					})), m.a.createElement(() => f ? m.a.createElement(vc, {
						icon: m.a.createElement(ps.a, {
							name: "logout"
						}),
						onClick: () => {
							e.sendEventWithName("logout"), s()
						},
						title: o.fbt._("Log Out", null, {
							hk: "2SjIc8"
						})
					}) : m.a.createElement(vc, {
						icon: m.a.createElement(ps.a, {
							name: "profile"
						}),
						onClick: g,
						title: o.fbt._("Sign Up or Log In", null, {
							hk: "3pedCU"
						})
					}), null), m.a.createElement(() => m.a.createElement("div", {
						className: oc.a.copyrightContainer
					}, m.a.createElement("span", {
						className: oc.a.copyrightText
					}, o.fbt._("© {year} Reddit, Inc. All rights reserved", [o.fbt._param("year", (new Date).getFullYear().toString())], {
						hk: "1rgU6A"
					}))), null))
				},
				zc = n("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				Jc = n.n(zc);

			function Xc() {
				return (Xc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Yc = "undefined" != typeof window && "new.reddit.com" !== window.location.hostname,
				Zc = I.a.wrapped(Vi.a, "Dropdown", Jc.a),
				$c = Object(Wi.a)(Zc),
				el = e => t => m.a.createElement(ps.a, Xc({
					name: e
				}, t)),
				tl = e => m.a.createElement(Qi.a, {
					className: Object(v.a)(Jc.a.button, e.className),
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, m.a.createElement("div", {
					className: Jc.a.buttonText
				}, e.displayText), m.a.createElement(Ki.a, {
					className: Jc.a.toggleSwitch,
					"data-redditstyle": !0,
					redditStyle: !0,
					on: e.isEnabled
				}));
			var nl = Object(A.c)(e => {
				const {
					logoutUser: t,
					dispatchOpenLoginModal: n,
					isCrawler: s,
					isModModeEnabled: r,
					isPresenceToggleEnabled: a,
					navbarLikeMweb: i,
					nightmode: c,
					requestAwardKarma: l,
					showPresence: d,
					toggleModMode: b,
					user: h,
					shouldShowCreateCommunityItem: f,
					openCommunityCreationModal: g
				} = e, v = h && h.id, y = Object(p.e)(Ws.t), O = Object(p.e)(Ks);
				Object(u.useEffect)(() => {
					l()
				}, [v]);
				const x = Object(Qi.c)(el("settings"), o.fbt._("User Settings", null, {
						hk: "46J4vT"
					})),
					C = Object(Qi.b)(el("help"), o.fbt._("Help Center", null, {
						hk: "4sGjc0"
					})),
					E = Object(Qi.b)(el("external_link"), o.fbt._("Visit Old Reddit", null, {
						hk: "3Fo9ag"
					})),
					P = Object(Qi.c)(el("logout"), o.fbt._("Log In / Sign Up", null, {
						hk: "4xbfvS"
					})),
					_ = Object(Qi.c)(el("logout"), o.fbt._("Log Out", null, {
						hk: "2SjIc8"
					})),
					S = Object(Qi.c)(Zi.a, o.fbt._("Opt In to New Reddit", null, {
						hk: "4jiTxA"
					})),
					k = (e => {
						const t = e && e.coins || 0;
						return o.fbt._({
							"*": "{number of coins} coins",
							_1: "1 coin"
						}, [o.fbt._plural(t, "number of coins")], {
							hk: "qmnnm"
						})
					})(h),
					w = Object(Qi.c)(el("coins"), o.fbt._("Coins", null, {
						hk: "25oh47"
					}), {
						meta: k
					}),
					M = Object(Qi.c)(el("premium"), o.fbt._("Premium", null, {
						hk: "1SD1CS"
					})),
					N = Object(Qi.c)(el("powerup"), o.fbt._("Powerups", null, {
						hk: "3ND1rQ"
					})),
					I = Object(Qi.c)(Ps, o.fbt._("Reddit Recap", null, {
						hk: "3OsV6N"
					})),
					T = Object(Qi.c)(el("live"), o.fbt._("Talk", null, {
						hk: "5IHxP"
					})),
					A = Object(Qi.c)(el("prediction"), o.fbt._("Predictions", null, {
						hk: "1LUvJo"
					})),
					R = Object(Qi.c)(el("community"), o.fbt._("Create a Community", null, {
						hk: "3QGru4"
					}));
				return i ? s ? m.a.createElement(qi.a, null, m.a.createElement(Qc, e)) : m.a.createElement($c, {
					className: Jc.a.navbarLikeMweb,
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(Qc, e)) : m.a.createElement($c, {
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID"
				}, h && a && m.a.createElement(m.a.Fragment, null, m.a.createElement("h3", {
					className: Jc.a.sectionHeader,
					role: "heading"
				}, o.fbt._("Online Status", null, {
					hk: "23SMHV"
				})), m.a.createElement(tl, {
					className: Jc.a.presenceToggle,
					displayText: d ? o.fbt._("On", null, {
						hk: "3aW5MW"
					}) : o.fbt._("Off", null, {
						hk: "pRgYU"
					}),
					isEnabled: d,
					onClick: () => {
						e.sendEvent(Object(Yi.g)(!d)), e.toggleShowPresence(!d)
					}
				})), h && m.a.createElement(u.Fragment, null, m.a.createElement("h3", {
					className: Jc.a.sectionHeader,
					role: "heading"
				}, o.fbt._("My Stuff", null, {
					hk: "47vhMb"
				})), (e => {
					const t = o.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						n = Object(Qi.c)(el("profile"), t);
					return m.a.createElement(n, {
						href: e.url
					})
				})(h), m.a.createElement(fc, null), m.a.createElement(x, {
					href: "/settings"
				})), m.a.createElement("h3", {
					className: Jc.a.sectionHeader,
					role: "heading"
				}, o.fbt._("View Options", null, {
					hk: "3bZPKB"
				})), h && h.isMod && m.a.createElement(tl, {
					displayText: o.fbt._("Mod Mode", null, {
						hk: "3Rb4sj"
					}),
					isEnabled: r,
					onClick: () => {
						e.sendEvent(Object(Ji.i)(!r)), b()
					}
				}, m.a.createElement(ps.a, {
					name: "mod_mode",
					className: Jc.a.modModeIcon
				})), m.a.createElement(tl, {
					displayText: o.fbt._("Night Mode", null, {
						hk: "2lyxcc"
					}),
					isEnabled: c,
					onClick: () => {
						e.sendEvent(Object(Yi.f)(c)), e.toggleNightmode(!c)
					}
				}, m.a.createElement(ps.a, {
					name: "night",
					className: Jc.a.nightIcon
				})), m.a.createElement("h3", {
					className: Jc.a.sectionHeader,
					role: "heading"
				}, o.fbt._("More Stuff", null, {
					hk: "4Gad8T"
				})), f && m.a.createElement(R, {
					className: Jc.a.entrypointLink,
					onClick: () => {
						g(), e.sendEvent(Object(Xi.a)())
					}
				}), m.a.createElement(u.Fragment, null, m.a.createElement(w, {
					href: "/coins",
					onClick: () => {
						Object(_o.d)(_o.a.GoldPayment, !0), e.sendEvent(Object(Yi.b)())
					}
				}), m.a.createElement(M, {
					href: "/premium",
					onClick: () => {
						Object(_o.d)(_o.a.GoldPayment, !0), e.sendEvent(Object(Yi.e)())
					}
				}), m.a.createElement(N, {
					href: "/powerups",
					onClick: () => {
						Object(_o.d)(_o.a.PowerupsFlow, !0), e.sendEvent(Object(Yi.c)())
					}
				}), m.a.createElement(T, {
					href: Gs.a
				}), O && m.a.createElement(I, {
					href: Hs.a
				}), y && m.a.createElement(A, {
					href: "/predictions",
					onClick: () => {
						Object(_o.d)(_o.a.GoldPayment, !0), e.sendEvent(Object(Yi.d)())
					}
				})), m.a.createElement(C, {
					href: "https://www.reddithelp.com"
				}), h && m.a.createElement(E, {
					href: "https://old.reddit.com" + e.url,
					onClick: () => {
						e.sendEvent(e => ({
							source: "redesignbanner",
							action: "click",
							noun: "2xdropdown_visit_old",
							screen: xt.screen(e),
							subreddit: xt.subreddit(e)
						}))
					}
				}), !Yc && h && m.a.createElement(S, {
					href: "",
					onClick: () => {
						e.sendEvent(e => ({
							source: "redesignbanner",
							action: "click",
							noun: "2xdropdown_opt_in",
							screen: xt.screen(e),
							subreddit: xt.subreddit(e)
						})), e.onOptIntoRedesign()
					}
				}), m.a.createElement("div", {
					className: Jc.a.divider
				}), h ? m.a.createElement(_, {
					href: "#",
					onClick: e => {
						t(), e.preventDefault()
					}
				}) : m.a.createElement(P, {
					href: "#",
					onClick: t => {
						Object(j.a)(t) && (t.preventDefault(), t.stopPropagation(), n(), e.sendEvent(Object(zi.b)()))
					}
				}))
			});

			function sl() {
				return (sl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const ol = e => t => m.a.createElement(ps.a, sl({
					name: e
				}, t)),
				rl = Object(p.b)(() => Object(g.c)({
					isCrawler: e => !!Object(Gi.a)(e),
					isModModeEnabled: Ui.a,
					isOpen: Object(Hi.b)("USER_DROPDOWN_ID"),
					isPresenceToggleEnabled: Bi.d,
					shouldShowCreateCommunityItem: Ct.ib,
					navbarLikeMweb: Fi.a,
					nightmode: Ct.X,
					showPresence: Ct.P,
					url: Lt.u
				}), (e, t) => ({
					closeUserDropdown: () => e(Object(Qr.j)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					toggleNightmode: t => e(Object(Za.y)(t)),
					toggleShowPresence: t => e(Object(Za.H)({
						showPresence: t
					})),
					onOptIntoRedesign: () => e(Object(Si.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (Pe.a.get("rseor3") && Pe.a.remove("rseor3", {
							domain: U.a.cookieDomain
						}), e(Object(Si.b)(!0))) : window.location.host = "old.reddit.com"
					},
					requestAwardKarma: () => {
						var n;
						!t.user || null !== (n = t.user.karma) && void 0 !== n && n.total || e(Object(wi.f)(Object(vt.e)(t.user)))
					},
					dispatchOpenLoginModal: () => e(Object(Kr.i)()),
					logoutUser: () => {
						const {
							googleOneTapIFrame: n
						} = t;
						n && n.contentWindow && (console.log("postMessage: disableAutoSelect"), n.contentWindow.postMessage({
							type: "disableAutoSelect"
						}, Object(Ni.a)())), e(Object($a.q)())
					},
					toggleModMode: () => e(Object(ki.b)()),
					openCommunityCreationModal: () => e(Object(_e.h)(tt.a.SUBREDDIT_CREATION_MODAL_ID))
				}));
			var al = Object(Qt.u)({
					pageLayer: e => e
				})(rl(e => {
					const {
						isPresenceToggleEnabled: t,
						requestAwardKarma: n,
						showPresence: s,
						user: r
					} = e, a = Object(p.e)(Bi.b), [i, c] = Object(u.useState)(!1), l = r && r.id;
					Object(u.useEffect)(() => {
						n()
					}, [l]);
					const d = Object(u.useMemo)(() => ({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "USER_IS_ONLINE",
									userID: l
								}
							}
						}), [l]),
						b = Object(u.useCallback)(() => {
							c("visible" === document.visibilityState)
						}, []);
					return Ai("visibilitychange", b), Object(u.useEffect)(() => {
						c("visible" === document.visibilityState)
					}, []), m.a.createElement("div", {
						className: Object(v.a)(Jc.a.container, Mi.e)
					}, s && i && a && m.a.createElement(_i.a, {
						variables: d,
						onData: Pi.a,
						queryKey: "userIsOnline"
					}), m.a.createElement(Di.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(v.a)(e.className, Jc.a.inlineButton, {
							[Jc.a.dropdownOpen]: e.isOpen,
							[Jc.a.isLoggedOut]: !r,
							[Jc.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("self_user_icon")
						}
					}, m.a.createElement("span", {
						className: Jc.a.accountDisplayText
					}, (n => n ? m.a.createElement("span", {
						className: Object(v.a)(Jc.a.accountWrapper, Jc.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, n.accountIcon && m.a.createElement(xs.a, {
						className: Object(v.a)(Jc.a.imgIcon, {
							[Jc.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						wrapperClassName: Jc.a.imgIconWrapper,
						shouldShowPresenceIndicator: t && s
					}), m.a.createElement("span", {
						className: Jc.a.accountDetails
					}, m.a.createElement("span", {
						className: Jc.a.username
					}, n.displayText, n.isGold && m.a.createElement(Li.a, {
						className: Jc.a.premiumFontIcon,
						title: o.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						}),
						isFilled: !0
					})), m.a.createElement("span", {
						className: Jc.a.accountKarma
					}, m.a.createElement(ps.a, {
						name: "karma",
						isFilled: !0,
						className: Jc.a.karmaIcon
					}), m.a.createElement("span", null, (e => {
						const t = Object(Ii.a)(e),
							n = Object(ji.b)(t);
						return o.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [o.fbt._plural(t, "karma count", n)], {
							hk: "ndlXe"
						})
					})(n))), !!n.coins && m.a.createElement("span", {
						className: Jc.a.accountCoins
					}, m.a.createElement(Ri.a, {
						className: Jc.a.coinFontIcon,
						isFilled: !0
					}), m.a.createElement("span", null, (e => Object(ji.b)(e.coins || 0, {
						displayFull: !1,
						roundDown: !0
					}))(n))))) : e.navbarLikeMweb ? null : m.a.createElement("span", {
						className: Object(v.a)(Jc.a.accountWrapper, Jc.a.isLoggedOut)
					}, m.a.createElement(ps.a, {
						name: "user",
						className: Jc.a.defaultProfileIcon
					})))(e.user), m.a.createElement(ps.a, {
						name: "caret_down"
					})), m.a.createElement(qo.a, null, o.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), m.a.createElement(nl, e))
				})),
				il = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				cl = n("./src/reddit/components/Settings/modalIds.ts"),
				ll = n("./src/reddit/helpers/trackers/inbox.ts"),
				dl = n("./src/reddit/routes/index.ts"),
				ul = n("./src/reddit/selectors/appBadges.ts");
			var ml = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				pl = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				bl = n("./src/reddit/selectors/sso.ts");
			const hl = "change-username-tooltip-id",
				fl = "email-verification-tooltip-id",
				gl = m.a.memo((function({
					moderationDropdownOpen: e,
					...t
				}) {
					const n = Object(Br.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: aa.a.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: n.target.ref
					}, m.a.createElement(sa, {
						"aria-expanded": e,
						"aria-haspopup": !0,
						"aria-label": o.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: il.a,
						onClick: t.onOpenModerationDropdown,
						isOpen: e
					}, m.a.createElement(oa.a, {
						isActive: t.isModerateIconLit,
						unreadCount: -1,
						showEmpty: !0
					}), m.a.createElement(ps.a, {
						className: aa.a.icon2020,
						name: "mod"
					})), m.a.createElement(Fr.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, o.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), m.a.createElement(il.b, {
						className: aa.a.moderationDropdown,
						isOpen: e,
						unreadNotifications: t.unreadNotifications,
						sendEventWithName: t.sendEventWithName
					}))
				})),
				vl = m.a.memo((function(e) {
					const t = Object(Br.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: aa.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("a", {
						className: aa.a.link,
						href: `${U.a.redditUrl}/chat`,
						onClick: Object(Ka.a)(e.onClickChat)
					}, m.a.createElement(gi, {
						badgeCount: e.badgeCount,
						hasUnreadGroupMessages: e.hasUnreadChatMessages
					}))), m.a.createElement(Fr.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, o.fbt._("Chat", null, {
						hk: "4nXRWH"
					})))
				})),
				yl = m.a.memo((function({
					onClickMail: e,
					unreadNotifications: t
				}) {
					const n = Object(Br.a)();
					return m.a.createElement("span", {
						className: aa.a.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: n.target.ref
					}, m.a.createElement("a", {
						className: aa.a.link,
						href: t && t.hasUnreadMail ? "/message/unread" : "/message/inbox",
						onClick: e
					}, m.a.createElement(Ci, {
						unreadCount: t && t.inboxCount || 0
					})), m.a.createElement(Fr.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, o.fbt._("Messages", null, {
						hk: "Txokh"
					})))
				})),
				Ol = m.a.memo((function(e) {
					const t = Object(Br.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: aa.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("button", {
						className: aa.a.link,
						"aria-label": o.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: e.onClickCreatePost
					}, m.a.createElement(ps.a, {
						className: aa.a.icon2020,
						name: "add"
					}))), m.a.createElement(Fr.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, o.fbt._("Create Post", null, {
						hk: "1TvNGq"
					})))
				})),
				xl = Object(Qt.u)({
					pageLayer: e => e
				}),
				Cl = Object(g.c)({
					activeDropdownId: Hi.a,
					appBadges: ul.b,
					chatDirectMessagesCount: ul.e,
					email: Ct.n,
					hasUnreadChatMessages: ul.f,
					inboxBadgeCount: ul.g,
					isAvatarQuickCreateEnabled: e => Object(Ws.g)(e) && (e => {
						const t = Da(e),
							n = (new Date).getTime(),
							s = Object(Ut.x)();
						if (!(null == t ? void 0 : t.active) || !Fa(e, null == t ? void 0 : t.min_days_on_reddit, t.should_have_avatar)) return !1;
						if (s && t) {
							const e = n > s.lastInteractionTimestamp + La(null == t ? void 0 : t.min_days_since_last_event_interaction);
							return !!(s.id === t.id && e && s.eventViews <= t.max_event_views) || s.id !== t.id && e
						}
						return !1
					})(e),
					isChangeUsernameTooltipShowing: e => e.isChangeUsernameTooltipShowing,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					isEmailVerificationTooltipShowing: e => e.isEmailVerificationTooltipShowing,
					isGoogleOneTapEnabled: ml.c,
					isInboxAppBadgingGqlEnabled: pl.a,
					isInboxRedesignActive: qs.g,
					isModerator: Ot.j,
					isNameEditable: Ct.M,
					isResponsiveSettingsEnabled: Jt.a,
					shouldOpenEmailVerificationTooltip: (e, {
						pageLayer: t
					}) => Object(Qt.M)(t) && !!Object(Ct.n)(e) && !Object(Ct.A)(e) && Object(Ct.K)(e) && !Object(Ct.I)(e),
					shouldShowChangeUsernameModals: bl.c,
					unreadNotifications: Ct.lb
				}),
				El = Object(p.b)(Cl, (e, t) => ({
					closeChangeUsernameTooltip: () => e(Object(za.d)()),
					closeEmailVerificationTooltip: () => e(Object(Xa.b)()),
					showEmailVerficiationTooltip: () => e(Object(Xa.b)()),
					fetchAppBadges: () => e(Object(Qa.c)()),
					onChatClick: () => e(Object(Ja.g)()),
					onDismissCustomizeFlyout: () => e(Object(Za.u)()),
					onOpenModerationDropdown: () => {
						e(Object(Qr.h)({
							tooltipId: il.a
						})), e(Object(Po.q)())
					},
					onOpenUserDropdown: () => e(Object(Qr.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					openChangeUsernameModal: () => {
						e(Object(_e.h)(cl.b))
					},
					openKeepUsernameModal: () => {
						e(Object(_e.h)(cl.f))
					},
					toggleChangeEmailModal: () => {
						e(Object(Xa.b)()), e(Object(_e.i)(cl.a))
					},
					resendEmail: () => e(Object($a.x)(ri.a)),
					requestCreatePost: () => {
						t.pageLayer && e(Ya.o(t.pageLayer))
					},
					startChangeUsernameFlow: t => {
						const n = Object(h.b)(t);
						e(Object(za.f)(n))
					}
				}));
			class Pl extends m.a.Component {
				constructor() {
					super(...arguments), this.state = {
						googleOneTapIFrame: null
					}, this.sendNavClickInbox = () => this.props.sendEvent(Object(ll.s)({
						badgeCount: this.props.inboxBadgeCount
					})), this.sendEventWithName = e => this.props.sendEvent(Object(Ec.b)(e)), this.onClickMail = () => this.sendEventWithName("mail"), this.onClickCreatePost = () => {
						this.sendEventWithName("create_post"), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}, this.confirmNavigate = e => {
						const t = Object(Va.a)(e.pathname, dl.a),
							n = t && t.route && t.route.meta && t.route.meta.name;
						return !n || n !== y.Mb.POST_CREATION && n !== y.Mb.PROFILE_OVERVIEW || (this.props.startChangeUsernameFlow(e.pathname), !1)
					}, this.exposeIFrameElement = e => {
						this.setState({
							googleOneTapIFrame: e
						})
					}
				}
				componentDidMount() {
					this.props.showEmailVerficiationTooltip(), this.props.isInboxAppBadgingGqlEnabled && Jo()(this.props.appBadges) && this.props.fetchAppBadges()
				}
				render() {
					const {
						activeDropdownId: e,
						chatDirectMessagesCount: t,
						className: n,
						closeChangeUsernameTooltip: s,
						closeEmailVerificationTooltip: o,
						email: r,
						hasUnreadChatMessages: a,
						inboxBadgeCount: i,
						isAvatarQuickCreateEnabled: c,
						isChangeUsernameTooltipShowing: l,
						isCustomizeFlyoutShowing: d,
						isEmailVerificationTooltipShowing: p,
						isGoogleOneTapEnabled: b,
						isInboxRedesignActive: h,
						isModerator: f,
						isNameEditable: g,
						isResponsiveSettingsEnabled: y,
						onDismissCustomizeFlyout: O,
						onOpenUserDropdown: x,
						openChangeUsernameModal: C,
						openKeepUsernameModal: E,
						pageLayer: P,
						resendEmail: j,
						shouldOpenEmailVerificationTooltip: _,
						shouldShowChangeUsernameModals: S,
						toggleChangeEmailModal: k,
						unreadNotifications: w,
						user: M
					} = this.props, {
						googleOneTapIFrame: N
					} = this.state, I = !(!w || !w.hasUnreadModmail), T = M && Object(vt.e)(M) || "", A = Object(v.a)({
						[aa.a["m-responsive"]]: y
					});
					return m.a.createElement(ft.a, {
						id: fl,
						ref: e => this.container = e,
						className: n
					}, m.a.createElement(ft.a, {
						className: aa.a.headerLinks,
						id: hl
					}, f && m.a.createElement(gl, {
						isModerateIconLit: I,
						moderationDropdownOpen: e === il.a,
						onOpenModerationDropdown: this.onOpenModerationDropdown,
						sendEventWithName: this.sendEventWithName,
						unreadNotifications: w
					}), M && m.a.createElement(u.Fragment, null, m.a.createElement(vl, {
						onClickChat: this.onClickChat,
						badgeCount: t,
						hasUnreadChatMessages: a
					}), h ? m.a.createElement(wa, {
						sendNavClickInbox: this.sendNavClickInbox,
						unreadCount: i,
						pageUrl: null == P ? void 0 : P.url,
						userId: M.id,
						isLoggedIn: !!M,
						iconWrapper: aa.a.iconWrapper
					}) : m.a.createElement(yl, {
						onClickMail: this.onClickMail,
						unreadNotifications: w
					}), m.a.createElement(Ol, {
						onClickCreatePost: this.onClickCreatePost
					}), m.a.createElement("span", {
						className: aa.a.iconWrapper
					}, c ? m.a.createElement(qa, {
						avatarUrlParams: {
							avatarId: "random",
							username: T
						}
					}) : m.a.createElement(fi.a, null)))), m.a.createElement(al, {
						className: aa.a.headerUserDropdown,
						googleOneTapIFrame: N,
						onClick: x,
						user: M,
						sendEventWithName: this.sendEventWithName
					}), b && m.a.createElement("div", {
						className: aa.a.loggedInGoogleOneTap
					}, m.a.createElement(hi, {
						exposeIFrameElement: this.exposeIFrameElement
					})), d && m.a.createElement(xi, {
						onCloseFlyout: O
					}), m.a.createElement(di, {
						closeTooltip: o,
						email: r,
						isOpen: _ && p,
						resendEmail: j,
						toggleChangeEmailModal: k,
						tooltipId: fl
					}), m.a.createElement(si, {
						email: r,
						shouldOpenTooltip: _
					}), g && !y && m.a.createElement(u.Fragment, null, m.a.createElement(ni.a, {
						closeTooltip: s,
						isOpen: l && !S,
						openChangeUsernameModal: C,
						openKeepUsernameModal: E,
						tooltipId: hl,
						username: T
					}), S && m.a.createElement(ti.a, {
						isResponsiveSettingsEnabled: y,
						overlayClassName: A,
						username: T,
						withOverlay: !0
					}), m.a.createElement(ei.a, {
						confirmNavigate: this.confirmNavigate
					})))
				}
			}
			var jl = Object(A.c)(xl(El(Pl))),
				_l = n("./src/reddit/components/Header/User/index.m.less"),
				Sl = n.n(_l);
			const {
				fbt: kl
			} = n("./node_modules/fbt/lib/FbtPublic.js"), wl = Object(g.c)({
				account: e => e.user.account,
				origin: mc.j
			}), Ml = m.a.memo(e => m.a.createElement("div", {
				className: Object(v.a)(e.className, Sl.a.row)
			}, !e.account && m.a.createElement(Nl, e), m.a.createElement(jl, {
				className: Object(v.a)({
					[Sl.a.loggedOut]: !e.account
				}),
				user: e.account
			}))), Nl = e => {
				const t = Object(p.e)(ul.g),
					n = Object(p.e)(Ct.sb),
					s = Object(p.e)(qs.i),
					o = e.pageLayer,
					r = U.a.accountManagerOrigin,
					a = o ? o.url : "/",
					i = o && o.meta && o.meta.name === y.Mb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + a);
				return m.a.createElement(m.a.Fragment, null, s && m.a.createElement(wa, {
					sendNavClickInbox: () => e.sendEvent(Object(ll.s)({
						badgeCount: t
					})),
					unreadCount: t,
					pageUrl: a,
					userId: n,
					isLoggedIn: !1,
					iconWrapper: Sl.a.iconWrapper
				}), m.a.createElement("div", {
					className: Sl.a.loggedOutRow
				}, m.a.createElement(Ne.t, {
					kind: Ne.b.ExternalLink,
					priority: Ne.c.Secondary,
					redditStyle: !0,
					className: Sl.a.button,
					href: `${r}/login/?dest=${i}`,
					onClick: t => {
						Object(j.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenLoginModal(), e.sendEvent(Object(zi.a)("nav")))
					}
				}, kl._("Log In", null, {
					hk: "4Cxw0g"
				})), m.a.createElement(Ne.t, {
					kind: Ne.b.ExternalLink,
					priority: Ne.c.Primary,
					redditStyle: !0,
					className: Object(v.a)(Sl.a.separator, Sl.a.button),
					href: `${r}/register/?dest=${i}`,
					onClick: t => {
						Object(j.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenRegisterModal(), e.sendEvent(Object(zi.c)("nav")))
					}
				}, kl._("Sign Up", null, {
					hk: "2WZPuJ"
				}))))
			};
			var Il = Object(Qt.u)()(Object(p.b)(wl, e => ({
					onOpenLoginModal: () => {
						e(Object(_e.k)({
							actionSource: _e.a.HeaderLogin
						})), e(Object(Kr.i)())
					},
					onOpenRegisterModal: () => {
						e(Object(_e.k)({
							actionSource: _e.a.HeaderSignup
						})), e(Object(Kr.k)())
					},
					closeUserDropdown: () => e(Object(Qr.j)({
						tooltipId: "USER_DROPDOWN_ID"
					}))
				}))(Object(A.c)(Ml))),
				Tl = n("./src/reddit/components/Header/index.m.less"),
				Al = n.n(Tl);

			function Rl() {
				return (Rl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ll = I.a.header("HeaderDynamicStyles", Al.a),
				Dl = Object(g.c)({
					isLoggedIn: Ct.K,
					isNightMode: Ct.X,
					isResponsiveSettingsEnabled: Jt.a,
					isPageResponsive: Ar.a,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				Fl = Object(Qt.u)({
					categoryName: Qt.c,
					pageLayer: e => e
				}),
				Bl = e => {
					const t = Object(u.useContext)(f.a);
					return m.a.createElement("div", {
						className: Al.a.left
					}, m.a.createElement(qo.a, null, o.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
						hk: "ToBNc"
					})), m.a.createElement(Wo.b, null), m.a.createElement(ds.a, {
						"aria-label": o.fbt._("Home", null, {
							hk: "3PmGmU"
						}),
						className: Al.a.centeredRow,
						to: "/",
						onClick: e.onReloadFrontpage
					}, m.a.createElement(Ir.a, {
						className: Object(v.a)(Al.a.snoo, {
							[Al.a.snooExp]: t
						})
					}), m.a.createElement(Tr.a, {
						className: Al.a.wordmark
					})), e.children)
				},
				Ul = e => m.a.createElement("div", {
					className: Al.a.right
				}, e.children, m.a.createElement(Il, null)),
				Gl = e => {
					const t = Object(u.useContext)(f.a);
					return m.a.createElement("div", {
						className: Object(v.a)(Al.a.layout, {
							[Al.a.layoutContainer]: t
						})
					}, m.a.createElement(Bl, Rl({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), m.a.createElement(Ho, null), m.a.createElement(Nr, {
						className: Al.a.search
					})), m.a.createElement(Ul, null, m.a.createElement(Vr, {
						className: Al.a.quickLinks
					})))
				},
				Hl = e => {
					const t = Object(u.useContext)(f.a);
					return m.a.createElement("div", {
						className: Object(v.a)(Al.a.layout, {
							[Al.a.layoutContainer]: t
						})
					}, m.a.createElement(Bl, Rl({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), m.a.createElement("div", {
						className: Al.a.searchContainer
					}, m.a.createElement(Nr, {
						className: Al.a.search
					}))), m.a.createElement(Ul, null))
				};
			var Wl = Fl(Object(p.b)(Dl, e => ({
					onReloadFrontpage: () => e(Object(So.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("Frontpage~ModListing"), n.e("Frontpage~FrontpageSidebar"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
				}))((function(e) {
					let t;
					const n = Object(u.useContext)(f.a);
					return t = e.isLoggedIn ? Gl : Hl, m.a.createElement(Ll, {
						"data-redditstyle": !0,
						className: Object(v.a)(Al.a.container, e.className, {
							[Al.a.bladeIsOpen]: e.isBladeOpen,
							[Al.a.navbarHeightContainer]: n
						})
					}, m.a.createElement(t, {
						categoryName: e.categoryName,
						onReloadFrontpage: e.onReloadFrontpage
					}), (e.isResponsiveSettingsEnabled || e.isPageResponsive) && m.a.createElement(Dr, {
						className: Al.a.MwebResponsiveHeader
					}))
				}))),
				ql = n("./src/reddit/components/LightboxHeader/index.tsx"),
				Vl = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				Kl = n("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				Ql = n.n(Kl);
			const {
				fbt: zl
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Jl = Object(g.c)({
				currentPage: Ns
			}), Xl = Object(p.b)(Jl, e => ({
				onUnpinSubscriptions: () => e(Object(_.j)())
			})), Yl = Object(Qt.u)();
			var Zl = I.a.wrapped(Yl(Xl(e => m.a.createElement("div", {
					"data-redditstyle": !0,
					className: e.className
				}, m.a.createElement("div", {
					className: Ql.a.title
				}, m.a.createElement(uo, {
					className: Ql.a.listHeader
				}, zl._("My Communities", null, {
					hk: "1CmPOc"
				})), m.a.createElement("div", {
					className: Ql.a.unpin,
					onClick: e.onUnpinSubscriptions
				}, m.a.createElement(ps.a, {
					name: "close",
					className: Ql.a.icon
				}))), m.a.createElement(Do, {
					currentPage: e.currentPage
				})))), "Component", Ql.a),
				$l = n("./src/reddit/components/Survey/index.tsx"),
				ed = n("./src/reddit/components/ThemeProvider/index.tsx"),
				td = n("./src/reddit/actions/toaster.ts");
			const nd = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				sd = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...xt.actionInfo(t),
						reason: "primary"
					}
				}),
				od = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...xt.actionInfo(t),
						reason: "secondary"
					}
				});
			var rd = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				ad = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				id = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				cd = n("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				ld = n("./src/reddit/icons/svgs/Unlock/index.tsx"),
				dd = n("./src/reddit/models/Toast/index.ts"),
				ud = n("./src/reddit/selectors/structuredStyles.ts"),
				md = n("./src/reddit/components/Toaster/PlainBread.m.less"),
				pd = n.n(md);

			function bd() {
				return (bd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const hd = e => {
				const t = $i.b;
				switch (e.kind) {
					case dd.b.Error:
					case dd.b.AuthError:
					case dd.b.SuccessEndBroadcast:
						return t.warning;
					case dd.b.SuccessCommunity:
						return t.op;
					case dd.b.SuccessCommunityGreen:
					case dd.b.SuccessMod:
					case dd.b.SuccessUnlockComment:
						return t.approved;
					case dd.b.SuccessLockComment:
						return t.reported;
					case dd.b.EuCookiePolicy:
					case dd.b.UappBanner:
					case dd.b.Undo:
					default:
						return t.op
				}
			};
			class fd extends m.a.Component {
				componentDidMount() {
					this.props.sendEvent && this.props.sendEvent()
				}
				render() {
					const {
						kind: e,
						sendEvent: t,
						...n
					} = this.props;
					return m.a.createElement("div", n)
				}
			}
			const gd = I.a.wrapped(fd, "PlainBread", pd.a);
			var vd = e => m.a.createElement(gd, bd({}, e, {
					style: {
						...e.style || {},
						"--Toaster-indicatorColor": hd(e)
					}
				})),
				yd = n("./src/reddit/components/Toaster/StyledComponents.m.less"),
				Od = n.n(yd);
			const xd = I.a.span("Text", Od.a);
			var Cd = n("./src/reddit/components/Toaster/index.m.less"),
				Ed = n.n(Cd);
			const {
				fbt: Pd
			} = n("./node_modules/fbt/lib/FbtPublic.js"), jd = I.a.wrapped(id.a, "AuthErrorToastIcon", Ed.a), _d = I.a.wrapped(Ne.l, "AuthErrorToastPrimaryButton", Ed.a);
			class Sd extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), window.location.reload(!0)
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(vd, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(jd, null), m.a.createElement(xd, null, Pd._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), m.a.createElement(_d, {
						type: "submit"
					}, Pd._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var kd = Sd,
				wd = n("./src/lib/cookieConsent/index.ts"),
				Md = n("./src/reddit/controls/Link/index.tsx"),
				Nd = n("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				Id = n.n(Nd);
			const {
				fbt: Td
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ad = I.a.div("Icon", Id.a), Rd = () => m.a.createElement(Ad, {
				style: {
					backgroundImage: `url(${U.a.assetPath}/img/snoo-upvote.png)`
				}
			}), Ld = I.a.wrapped(Ne.l, "PrimaryButton", Id.a), Dd = I.a.wrapped(vd, "Bread", Id.a);
			class Fd extends m.a.PureComponent {
				constructor() {
					super(...arguments), this.allowAllCookies = e => {
						e.preventDefault(), Object(wd.b)({
							opted: !0,
							nonessential: !0
						}), this.props.onClose("allow-all")
					}, this.allowEssentialCookiesOnly = e => {
						e.preventDefault(), Object(wd.b)({
							opted: !0,
							nonessential: !1
						}), this.props.onClose("allow-essential")
					}
				}
				componentDidMount() {
					this.props.sendViewEvent && this.props.sendViewEvent()
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("section", null, m.a.createElement(Dd, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n                translateY(${e.style.y}px)\n                scale(${e.style.x}, ${e.style.x})\n              `
						}
					}, m.a.createElement(Rd, null), m.a.createElement("section", {
						className: Id.a.EuCookiePolicyBody
					}, m.a.createElement(xd, null, Td._("We use cookies on our websites for a number of purposes, including analytics and performance, functionality and advertising.", null, {
						hk: "4prHYN"
					}), " ", m.a.createElement(Md.a, {
						href: "https://www.redditinc.com/policies/cookie-notice",
						target: "_blank"
					}, Td._("Learn more about Reddit’s use of cookies", null, {
						hk: "1bxpLb"
					})), "."), m.a.createElement("section", {
						className: Id.a.EuCookiePolicyOptions
					}, m.a.createElement("form", {
						onSubmit: this.allowEssentialCookiesOnly
					}, m.a.createElement(Ld, {
						type: "submit"
					}, Td._("Reject non-essential", null, {
						hk: "M79jf"
					}))), m.a.createElement("form", {
						onSubmit: this.allowAllCookies
					}, m.a.createElement(Ld, {
						type: "submit"
					}, Td._("Accept all", null, {
						hk: "1tnS6V"
					})))))))
				}
			}
			var Bd, Ud = Fd;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(Bd || (Bd = {}));
			var Gd = n("./src/reddit/controls/Typography/index.tsx"),
				Hd = n("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				Wd = n.n(Hd);

			function qd() {
				return (qd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Vd = I.a.div("Container", Wd.a),
				Kd = I.a.img("SideImage", Wd.a),
				Qd = I.a.div("Main", Wd.a),
				zd = I.a.div("SubTitle", Wd.a),
				Jd = Gd.a,
				Xd = I.a.wrapped(Ne.m, "PrimaryLinkButton", Wd.a),
				Yd = I.a.wrapped(Ie.a, "CloseIcon", Wd.a);
			class Zd extends m.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(sd(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(nd(this.props.name))
				}
				render() {
					const {
						content: e,
						key: t,
						sideImage: n,
						style: s,
						subTitle: r,
						title: a
					} = this.props;
					return m.a.createElement(Vd, {
						key: t,
						style: {
							...s,
							transform: `\n            translateY(${s.y}px)\n            scale(${s.x}, ${s.x})\n          `
						}
					}, m.a.createElement(Yd, {
						onClick: this.props.onClose
					}), m.a.createElement(Kd, {
						srcSet: n
					}), m.a.createElement(Qd, null, m.a.createElement(zd, null, r), m.a.createElement(Gd.b, null, a), m.a.createElement(Jd, null, e), m.a.createElement(Xd, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, o.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const $d = Object(p.b)(null, e => ({
					onSignup: () => e(Object(Kr.k)())
				}))(Object(A.c)(Zd)),
				eu = `${tu("subscribe-cap.png")} 1x,\n  ${tu("subscribe-cap@2x.png")} 2x,`;

			function tu(e) {
				return `${U.a.assetPath}/img/banner/${e}`
			}
			const nu = 3;
			var su = n("./src/lib/permanentCookieOptions.ts");
			const ou = e => `${e}:1527210000`;
			var ru = n("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				au = n.n(ru);
			const {
				fbt: iu
			} = n("./node_modules/fbt/lib/FbtPublic.js"), cu = I.a.div("Icon", au.a), lu = () => m.a.createElement(cu, {
				style: {
					backgroundImage: `url(${U.a.assetPath}/img/snoo-upvote.png)`
				}
			}), du = I.a.wrapped(Ne.l, "PrimaryButton", au.a), uu = I.a.wrapped(vd, "Bread", au.a);
			class mu extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Pe.a.set(Ft.j, ou(nu), Object(su.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(uu, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(lu, null), m.a.createElement(xd, null, iu._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [iu._param("=User Agreement", m.a.createElement(Md.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, iu._("User Agreement", null, {
						hk: "XS57W"
					}))), iu._param("=Privacy Policy", m.a.createElement(Md.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, iu._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), m.a.createElement(du, {
						type: "submit"
					}, iu._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var pu = mu;

			function bu() {
				return (bu = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const hu = [],
				fu = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				gu = {
					opacity: .5,
					x: .5,
					y: 50
				},
				vu = {
					opacity: Object(N.spring)(0),
					x: Object(N.spring)(.6),
					y: Object(N.spring)(80, fu)
				},
				yu = I.a.wrapped(id.a, "SnooFacepalm", Ed.a),
				Ou = I.a.wrapped(cd.a, "SnooHappy", Ed.a),
				xu = I.a.wrapped(ys.b, "SubredditIcon", Ed.a),
				Cu = I.a.img("CustomIcon", Ed.a),
				Eu = I.a.div("Container", Ed.a),
				Pu = I.a.wrapped(Ie.a, "Close", Ed.a),
				ju = I.a.wrapped(rd.a, "LockIcon", Ed.a),
				_u = I.a.wrapped(ld.a, "UnlockIcon", Ed.a),
				Su = I.a.wrapped(ad.a, "RemoveIcon", Ed.a),
				ku = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(Pu, bu({
					className: "CloseIcon"
				}, e))),
				wu = I.a.wrapped(vd, "Bread", Ed.a),
				Mu = Object(g.c)({
					subredditIcon: ud.b,
					toastSlices: e => e.toaster
				}),
				Nu = Object(p.b)(Mu, e => ({
					dismissToast: t => () => e(Object(td.g)(t)),
					onButtonClick: (t, n) => () => {
						e(t), e(Object(td.g)(n))
					}
				}));
			class Iu extends m.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => Tu(e, this.props.toastSlices), this.getWillEnterStyles = () => gu, this.getWillLeaveStyles = () => vu
				}
				render() {
					return this.props.toastSlices.length ? m.a.createElement(N.TransitionMotion, {
						defaultStyles: hu,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => m.a.createElement(Eu, null, e.map(e => {
						const t = e.data,
							n = {
								...e.style,
								transform: `\n                  translateY(${e.style.y}px)\n                  scale(${e.style.x}, ${e.style.x})\n                `
							};
						if (t.kind === dd.b.Custom && void 0 !== t.customToastType) {
							const s = Ru[t.customToastType];
							return m.a.createElement(s, {
								key: e.key,
								toast: t,
								style: n,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === dd.b.UappBanner) return m.a.createElement(pu, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === dd.b.EuCookiePolicy) return m.a.createElement(Ud, {
							key: e.key,
							toast: t,
							style: n,
							sendViewEvent: () => this.props.sendEvent(nd("eu_essential_policy")),
							onClose: e => {
								switch (this.props.dismissToast(t.id)(), e) {
									case "allow-all":
										this.props.sendEvent(sd("eu_essential_cookie_policy"));
										break;
									case "allow-essential":
										this.props.sendEvent(od("eu_essential_cookie_policy"))
								}
							}
						});
						if (t.kind === dd.b.AuthError) return m.a.createElement(kd, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						const s = t.kind === dd.b.Modal ? Ne.l : Ne.r,
							o = t.kind === dd.b.Modal ? Ne.o : Ne.r;
						return m.a.createElement(wu, {
							className: t.kind === dd.b.Modal ? Ed.a.mModal : void 0,
							key: e.key,
							kind: t.kind,
							sendEvent: t.name ? () => this.props.sendEvent(nd(t.name)) : void 0,
							style: n
						}, m.a.createElement("div", {
							className: Ed.a.ContentWrapper
						}, Au(t, this.props.subredditIcon), t.kind === dd.b.SuccessLockComment && m.a.createElement(ju, null), t.kind === dd.b.SuccessUnlockComment && m.a.createElement(_u, null), m.a.createElement(xd, null, t.text)), m.a.createElement("div", {
							className: Ed.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && m.a.createElement(s, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(sd(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && m.a.createElement(o, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(od(t.name))
							}
						}, t.secondButtonText)), m.a.createElement(ku, {
							onClick: () => {
								var e, n;
								null === (e = this.props.dismissToast(t.id)) || void 0 === e || e(), null === (n = t.onClose) || void 0 === n || n.call(t)
							}
						}))
					}))) : null
				}
			}
			const Tu = (e = [], t) => t.map(e => ({
					data: e,
					key: e.id || (new Date).toString(),
					style: {
						opacity: Object(N.spring)(1),
						x: Object(N.spring)(1, fu),
						y: Object(N.spring)(0, fu)
					}
				})),
				Au = (e, t) => {
					if (e.customIconAsset) return m.a.createElement(Cu, {
						src: e.customIconAsset
					});
					switch (e.kind) {
						case dd.b.Error:
							return m.a.createElement(yu, null);
						case dd.b.SuccessEndBroadcast:
							return m.a.createElement(Su, null);
						case dd.b.SuccessAward:
						case dd.b.SuccessCommunity:
						case dd.b.SuccessCommunityGreen:
							return m.a.createElement(Ou, null);
						case dd.b.SuccessMod:
							return m.a.createElement(xu, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				Ru = {
					[dd.a.subscribeCap]: e => m.a.createElement($d, qd({
						name: Bd.LoggedOutMaxSubscriptions,
						sideImage: eu,
						title: o.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: o.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var Lu = Nu(Object(A.c)(Iu)),
				Du = n("./src/reddit/featureFlags/profileCollections.ts");
			const Fu = () => e => ({
					source: "banner",
					noun: "update_old_browser",
					action: "view",
					banner: {
						id: "update_old_browser"
					}
				}),
				Bu = () => e => ({
					source: "banner",
					noun: "old_browser_r2",
					action: "click",
					banner: {
						id: "update_old_browser"
					}
				});
			var Uu = n("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				Gu = n.n(Uu);
			var Hu = I.a.div("Wrapper", Gu.a),
				Wu = n("./src/reddit/components/AlertBanner/index.m.less"),
				qu = n.n(Wu);
			const {
				fbt: Vu
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Ku = () => m.a.createElement(Hu, {
				className: Object(v.a)(qu.a.wrapper, qu.a.suspended)
			}, m.a.createElement("span", null, Vu._("Your account has been suspended.", null, {
				hk: "36oqxa"
			}), " "), m.a.createElement("a", {
				className: qu.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, Vu._("Learn more", null, {
				hk: "1OTc8q"
			}))), Qu = () => m.a.createElement(Hu, {
				className: Object(v.a)(qu.a.wrapper, qu.a.fpr)
			}, m.a.createElement("span", null, Vu._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), m.a.createElement("a", {
				className: qu.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, Vu._("Learn more", null, {
				hk: "1OTc8q"
			}))), zu = ({
				updateLink: e,
				onClickOldReddit: t
			}) => m.a.createElement(Hu, {
				className: Object(v.a)(qu.a.wrapper, qu.a.deprecated)
			}, m.a.createElement("span", null, Vu._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [Vu._param("update your browser", m.a.createElement(Ju, {
				link: e
			}, Vu._("update your browser", null, {
				hk: "2TB4hp"
			})))], {
				hk: "gC2GV"
			}), " "), m.a.createElement("span", null, Vu._("If you do not update your browser, we suggest you visit {old reddit} .", [Vu._param("old reddit", m.a.createElement("a", {
				className: qu.a.underlineLink,
				href: U.a.oldRedditUrl,
				onClick: t
			}, Vu._("old reddit", null, {
				hk: "Sv1DJ"
			})))], {
				hk: "4qKEir"
			}))), Ju = ({
				children: e,
				link: t
			}) => null !== t ? m.a.createElement("a", {
				className: qu.a.underlineLink,
				href: t
			}, e) : m.a.createElement("span", null, e);
			class Xu extends m.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(Bu())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(Fu())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: n
					} = this.props;
					return e && e.isDeprecated ? m.a.createElement(zu, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? m.a.createElement(Qu, null) : n ? m.a.createElement(Ku, null) : null
				}
			}
			var Yu = Object(A.c)(Xu),
				Zu = n("./src/reddit/components/AlertBanner/heights.ts");
			var $u = n("./src/reddit/components/OfflineBanner/index.m.less"),
				em = n.n($u);
			const {
				fbt: tm
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var nm = e => {
					const t = Object(u.useCallback)(() => window.location.reload(), []),
						n = e.online ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAE9 0lEQVRoQ9WYW0hlZRTHf94TIXXAYRQzQwmFQQSVYSZ6UlESH+whRxMDX6IHJ1AQCXFQkSFUCIUeCkETUx/CF1FB8ClNpFFEX8T UKWkyxgFngjRvJ9Z278Pe57Yv51Kul33O3mut7/9fa32X9UVxwyXqhuMn0gR+BbJ0QfsU+CaYIEaSgEuAulzKQ3lGR0fLzzngA 6ckIkpAA68HGxWlQHCMw7Ghg4i5AhBIBE4d+HTO3OZgscB5bW0tk5OTbtPV1VXu3bv3v8/AZ8DXwAmQODw8TFNTE0dHR6SlpWl kHFeCY0MLGSgE1lW9D4Fp4AdAfmvyO5BpwZdflVATuF5ijJIAnAUDMpBtuAhIYa+GC7RhFQvxIFoGQh2YiJXQR8AU8C6wE+Lg+ HQXjkhFNAvhICCREhLh8m3IRLgGEQIXgGxgmqwA3wHfqt9CUmGhIvAe8KMDRPGyQzuwc5sES+AXIEe8tbS0MDAwYAnL2dkZt2/ f5tWrV5p+nNOsmBH4EmjzgeoKiE5ISOD01NEZzO3y6uqKmJgY7X8S8DdwB/hDffkx8L2/yPgj0AwMipGAfPjwIS9fvmRmZsbtx 9fJ0lL4/Sitra1RVFQUyMUn6hwyncTPgLcrKyuZm5Ne41ok3SkpKVRVVRmIBAPal63aH7gbH9GJj4/n/FyZKk+AL/R2nhmQqDf v7++TnZ3t1uvu7ubx48dsbGxQUFAQasxe/pKSkpQ5Ijg0SUxM1MrVgFn/R35fNTQ0MDY25jZ8/fo1ycnJHB8fK89Iya1bt9ja2 iIjI8M9pJYd/R6jJ2DoWTUrMRocHKS5WaZFZEWifnIibcS1TE1NKfPRLwH5ODEx4TY4PDwkKysLWfb+K6mpqWF6WlqJa/HsoQ0 ZCPXKEg7SISOQk5PD3t6eAePFxYV+TTfFr6tpRXd0dJTGxsaAdgEJLC0t8eDBA8WBbDDqvY2Xw9jYWC4vL5X3vb29jIyMsLNzf Xq2mkUNfGdnJ11dXVppBLRva2ujr6+vF+hwl5QOnUsAa8BkAF9gdnd3yc3N5e7du2xubhrIic3CwgJlZWWm0ZcgSMb0Ivb3799 neXnZy97XCmSYzerMvtJA+yPga6MxRWtDQUgJOU9Rx5U7mToDaQ9FWbPekPLRbRwGlbq6OsNKZQNbUKr+bvB8nYX+kd1bDlieK Q4KQZDGdggoc9HOhAyETXZTqWk5tebn51NeXu6Iil0CcpS9Y3VF0SNKTU1Vjh1WRGpdPaQFVC8uLubp06ey7HlNDn/HaeV2wS4 Bz3XdCgkrY6h+ZX3/yWtyBxjEVVJSglzAWpUwE/AZ7EAdme15sL29TV5enlW+dHR00NPTE1C/tLSUxcVF2fKV1tVOBt4B9trb2 3nyRPoIa2InCzbKx2+gzXpi21kQmlZIyF5jpqd+l/74T3/hMyPgaEl98eKF0lH5k/X1dQoL5fbdv1RXV0vr+jNQEkjPCgFHJMR IQEobqklmZiYHBwemtSh99+zsrJJMM2VTBZ0DpZwqKiqYn5838+v4e1xcnHYCsITNkpIOzbZ688zz589JT093DNTTcGVlRTmJq jd871t1bJeA5lfOwcptVH9/P62trVbH89IbHx9HLhJUsY3HtoEHgt+At7R39fX1CCAzGRoa4tGjR3q1N4G/zOx8fQ+WgN7n58B XNkAIgyEb+j5VQ0kgWCyO7G88gX8BA0iEQE02M2MAAAAASUVORK5CYII=" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmH AAAFhUlEQVRoQ+1ZX0gsZRT/reu/XEpcs2tqiEQpV31Qr5qpFHHTEoOuocVF3Bd7iOylfRDUlzDxImYYGD0kitKDokH5YLoQiL rQalLqiy89qGRqaYnh33XjjDPjzOzMfDOzu4XQ9yDuznfO+f3Od86Zc7614ZYv2y3Hj0gSeBrArxIHnQJ4LNwOiySBQCAQEPH2 9fXB7XYLny8AvAbg+1AJRYrAby6X687w8LAMn82mai4kDCEJ63jv2OfzOYqLi9UIlABY4h/8CKAQsB7KkSJA+GQhdHJygoSEBP peaZPiLA3AjpVwiiSBDwB8pgD1OoDvFN8JiWIJiyUhK57SkSECvwB41ore/5oAldY4AFEUcreBQCOAUQXQdwCMWQGvllBW9bDk XgSwyG+6AvA2gAmWkJHn/1YIhZSoekTCSeAvAE/oGFsBUGTEq2b2hErgDwBOMmi321FRUYGhoSFkZWVxGKiV6O/vR3d3N/b29q S4jgE8bgao1l4rBEjmhKoHAZ6fnzeNw+l04vDwUJCzgkG0qSdMDVe0GrrOzk50dHSYBq4UqK+vx8QEl8vfAHjTikItAlzSXVxc IDr6moPQiEk7TCsG1WQ0mjxh6+cA3jcTQoHl5WUUFd3kGxloaGjA2Jjlcs3kWlpaCp/Px+WNsFJTU7G7u6sbakGNFQnt7Nz0Vc nJyZibm0NeXp4MxMzMDCorK4UGjQnQyIbBwUE0Nzfj8vKSKwoi8ps2PChigghIPbC1tYX9/X0UFlLHC2xubiIzM5P7v7y8HDU1 NWhrazOCzfCe1tZW9PT0yE5CGsLKblaXQHt7O7q6ujjjAwMDaGlpkQGJRD6QAYfDwZVfOg1h+f1+IR/vAaA54jo3Fa6R9fDSZ5 QHgVflu22e61rPWrTn7OyMAyAUBZYMZ0+hW5LsIm5DBHJyctAdv4EHT1kjoFdltBxwenqK+Ph4mcHFxUXuZSl1vJLAQ6/X+1VZ WZlMMCkpCYfFfwY5zegJCDGsPEG7B0hMSsLBwQHrQMTnvDM0T4A2cjEh9Qy1AXcz7uD3l62dAEnZo2zw3w/GacYJkmQ2R0AQ/D AT+OR5YPsUeGbeWPwLkB3RNvz9inkClLxCSZ2enuYqn14I0cMFqpJqsZmWlia+I4wkL6sIvPUzYH+pHuPj45ohJE1mPnx+APCC VhWi7z8G0G4WICuIY2JiuBfUo+eA+07gHsFQhKqaDoHA0dEREhMTZd4P+sAreAPAt+EmQLo9Hg+qqqo4M3RnRK0DaxEBSRh9Ce Bd2clqKNB8H7AMhvu5pAT/BKBAqV+zG43ECVghxxP4AsB7qiGmodTvdrujent7rdgMm8zS0hJKSugmUvvqUW+gCSmMhKOPjY0F vVUZPb8qabXWwWgIcQViamoKtbW1MhkKLWq5FTMuqMqcn58HARF6emrQjo9pFDa+eAJ0DXPTWyvEWfOo7BQEj+Tm5mJ9fV1URa 0AzQ20VldXkZ+fH4RSrTnTo0Ivr6srwq5/c80i8DWABxsbG8jOzkZGRgZoRtBa4Rw7eV00l8fqEWUR4EKJ/lAcx8XRNab+IsPb 29tIT09nbWU6guV95vHwFkwlMxFobGzE6KjyCtQYHyOJK9XEOoHA5OQk6urqjFnnby8WFha4kdPMIsJNTU2CCAuXqFpvI00TJ2 ZeaHQDRzOyGRm6QKAmkV/MmFc6RY8AlQCbUTBer1f0uhEZl8uFkZERKR4qlVzZMbN0X2QpKSlB9V48Y/VfHLnpiiY46aJ5eG1t jWvgFIvGPPlmM+gZWe6nX05WVlZQUHDdQ83OzqK6ulow8SmAVrrAA0DT8kO+U7yrg4F+kXkE4COTOLUrFkPRPoAnJXvoxksM2H CBCEWP4WwPxUgkZf8nEEnvGtH9D0h1xECJaZxWAAAAAElFTkSuQmCC";
					return m.a.createElement("div", {
						className: Object(v.a)(e.className, em.a.banner, {
							[em.a.online]: e.online,
							[em.a.hidden]: !e.showBanner
						})
					}, m.a.createElement("img", {
						className: em.a.snoomoji,
						src: n
					}), m.a.createElement("span", {
						className: em.a.title
					}, e.online ? tm._("Found the internet!", null, {
						hk: "fMghd"
					}) : tm._("hmm… no internet?", null, {
						hk: "28GsiU"
					})), m.a.createElement(ps.a, {
						className: em.a.refresh,
						name: "refresh_fill",
						onClick: t
					}))
				},
				sm = n("./src/reddit/components/Upsell/async.ts"),
				om = n("./src/reddit/constants/componentSizes.ts"),
				rm = n("./src/reddit/constants/elementIds.ts"),
				am = n("./src/reddit/constants/parameters.ts"),
				im = n("./src/reddit/constants/posts.ts"),
				cm = n("./src/reddit/contexts/InsideOverlay.tsx"),
				lm = n("./src/reddit/constants/promo.ts"),
				dm = n("./src/reddit/contexts/Promo/index.ts");

			function um(e, t) {
				const {
					promoName: n
				} = t.payload, s = e.get(n);
				switch (t.type) {
					case lm.a.Completed:
						return s === lm.a.Shown ? new Map(e.set(n, lm.a.Completed)) : e;
					case lm.a.Dismissed:
						return s === lm.a.Shown ? new Map(e.set(n, lm.a.Dismissed)) : e;
					case lm.a.Shown:
						return s ? e : new Map(e.set(n, lm.a.Shown));
					default:
						throw new Error
				}
			}
			var mm = function({
					children: e
				}) {
					const [t, n] = u.useReducer(um, new Map), s = u.useCallback(e => n({
						type: lm.a.Completed,
						payload: {
							promoName: e
						}
					}), []), o = u.useCallback(e => n({
						type: lm.a.Dismissed,
						payload: {
							promoName: e
						}
					}), []), r = u.useCallback(e => n({
						type: lm.a.Shown,
						payload: {
							promoName: e
						}
					}), []), a = u.useMemo(() => ({
						completePromo: s,
						dismissPromo: o,
						promos: t,
						showPromo: r
					}), [s, o, t, r]);
					return u.createElement(dm.a.Provider, {
						value: a
					}, e)
				},
				pm = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				bm = n("./src/reddit/helpers/postCollection.ts"),
				hm = n("./src/reddit/models/Theme/index.ts"),
				fm = n("./src/reddit/selectors/experiments/econ/meta.ts");
			var gm = n("./src/reddit/selectors/experiments/survey.ts"),
				vm = n("./src/reddit/selectors/notificationBanner.ts"),
				ym = n("./src/reddit/selectors/onboarding.ts"),
				Om = n("./src/reddit/selectors/posts.ts"),
				xm = n("./src/reddit/components/AppRouter/index.m.less"),
				Cm = n.n(xm);

			function Em() {
				return (Em = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Pm = ({
					className: e,
					shouldDisplayPinnedSubscriptions: t,
					...n
				}) => m.a.createElement("div", Em({
					className: Object(v.a)(Cm.a.main, {
						[Cm.a.mShowingPaddedPinnedDescriptions]: t
					}, e)
				}, n)),
				jm = Object(O.a)(({
					className: e,
					overlayScrollContainerEl: t,
					theme: n,
					...s
				}) => {
					const o = Object(F.a)({
						theme: n,
						...s
					});
					return m.a.createElement("div", Em({
						className: Object(v.a)(Cm.a.overlayContentWrapper, e),
						style: {
							"--comments-overlay-background": Object(hm.g)(o.canvas, o.canvasImgUrl, o.canvasImgPosition),
							"--comments-overlay-offset": `${Object(Gt.c)(t)}px`
						}
					}, s))
				}),
				_m = ({
					className: e,
					divRef: t,
					...n
				}) => {
					const s = Object(u.useContext)(f.a);
					return m.a.createElement("div", Em({
						className: Object(v.a)(Cm.a.lightboxHeaderWrapper, e, {
							[Cm.a.lightboxHeaderWrapperExp]: s
						})
					}, n, {
						ref: t
					}))
				},
				Sm = Object(vm.a)(Vl.a.EmailCollectionBannerId),
				km = Object(p.b)(() => Object(g.c)({
					connection: e => e.connection,
					currentPage: e => e.platform.currentPage,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object(B.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: Ct.u,
					isLoggedIn: Ct.K,
					isNpsSurveyEnabled: gm.d,
					isOnboardingQueryParamEnabled: ym.b,
					isSubscriptionsPinned: hs.b,
					isSuccessfulSurveyEnabled: gm.f,
					isSuspended: Ct.R,
					isFPR: Ct.I,
					posts: Om.K,
					profileCollectionsEnabled: Du.a,
					showEmailCollectionBanner: e => !Object(Qt.L)(e.platform.currentPage) && Sm(e)
				}), e => ({
					onClickOutsideOverlay: t => e(Object(h.b)(t)),
					onPostDismissTrigger: () => e(Object(S.j)()),
					onSuccessfulSignupTrigger: () => e(Object(S.f)()),
					onUnpinSubscriptions: () => e(Object(_.j)())
				})),
				wm = (e, t) => !(!e.state || !e.state[rr.b.IsOverlay] || t === e);
			class Mm extends m.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.didCountSurveyTrigger = !1, this.resizeHandler = d()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < om.l && this.props.onUnpinSubscriptions()
					}, y.K), this.hideSignupUpsell = () => {
						this.setState({
							isSignupUpsellHidden: !0
						})
					}, this.getIsPostCollection = () => {
						const {
							currentPage: e,
							posts: t,
							profileCollectionsEnabled: n
						} = this.props;
						if (Object(Qt.x)(e)) {
							const s = e && e.urlParams && e.urlParams.partialPostId,
								o = `${y.Ib.Post}_${s}`,
								r = t && s && t[o],
								a = r && r.belongsTo.type === im.a.PROFILE;
							return !(!r || !Object(bm.a)(r) || a && !n)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object(B.c)(e.frontpageSignupVariant),
						isSignupUpsellHidden: !1
					}
				}
				componentDidMount() {
					this.resizeHandler(), window.addEventListener("resize", this.resizeHandler);
					const {
						isOnboardingQueryParamEnabled: e,
						isSuccessfulSurveyEnabled: t,
						onSuccessfulSignupTrigger: n
					} = this.props;
					t && !e && n()
				}
				UNSAFE_componentWillUpdate(e) {
					const {
						isNpsSurveyEnabled: t,
						location: n,
						onPostDismissTrigger: s
					} = this.props, o = n.state && n.state[rr.b.IsOverlay], r = Object(P.a)(this.previousLocation, e.location);
					t && o && r && !this.didCountSurveyTrigger && (s(), this.didCountSurveyTrigger = !0);
					const a = Object(P.a)(this.previousLocation, this.props.location),
						i = o ? this.previousPage : this.props.currentPage;
					if (i) {
						const {
							meta: t,
							urlParams: n
						} = i, s = t && (t.name === y.Mb.INDEX || t.name === y.Mb.SUBREDDIT && n.subredditName === Ls.b.Popular), o = Object(B.c)(this.props.frontpageSignupVariant), r = Object(B.c)(e.frontpageSignupVariant);
						s || o || !r ? o && !r && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					"POP" === e.history.action || o || r || a || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage);
					const c = wm(e.location, this.previousLocation);
					C.a.write(() => {
						document.body.style.overflow = c ? "hidden" : ""
					})
				}
				componentDidUpdate() {
					this.didCountSurveyTrigger = !1
				}
				render() {
					const {
						connection: e,
						currentPage: t,
						frontpageSignupVariant: n,
						hasInvalidSession: s,
						isFPR: r,
						isLoggedIn: a,
						isSubscriptionsPinned: i,
						isSuspended: l,
						location: d,
						onClickOutsideOverlay: p,
						routes: b,
						showEmailCollectionBanner: h
					} = this.props, {
						isSignupUpsellDisplayed: f,
						isSignupUpsellHidden: g
					} = this.state, v = this.context, O = wm(d, this.previousLocation);
					d.state && d.state[rr.b.IsOverlay] && !O ? d.state[rr.b.IsOverlay] = !1 : d.state && (this.previousLocation === d || d.state[rr.b.CloseLocation] && this.previousLocation.state && this.previousLocation.state[rr.b.CloseLocation] && this.previousLocation.state[rr.b.CloseLocation] === d.state[rr.b.CloseLocation] ? d.state[rr.b.CloseLocation] = {
						...this.previousLocation,
						state: c()(this.previousLocation.state, rr.b.CloseLocation)
					} : d.state[rr.b.CloseLocation] = this.previousLocation);
					const x = Object(P.a)(this.previousLocation, d),
						C = O || x ? this.previousLocation : d,
						E = O || x ? this.previousPage : t,
						j = !(!(E && E.meta && E.meta.name === y.Mb.SEARCH_RESULTS && E && E.queryParams) || E.queryParams[am.s]),
						_ = !(!E || !E.meta || E.meta.name !== y.Mb.MODERATION_PAGES),
						S = Object(Qt.x)(E),
						w = this.getIsPostCollection(),
						M = f && !g,
						N = e.showBanner;
					return s ? o.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					}) : m.a.createElement(m.a.Fragment, null, m.a.createElement(Qt.a.Provider, {
						value: E
					}, m.a.createElement(Wo.c, {
						isOverlayOpen: O
					}, m.a.createElement(ed.a, {
						forceRedditTheme: j
					}, f && m.a.createElement(Ce, {
						frontpageSignupVariant: n,
						onClose: this.hideSignupUpsell
					}), m.a.createElement(Nm, {
						browserInfo: v,
						connection: e,
						isFPR: r,
						isInline: M,
						isSuspended: l,
						showOffline: N
					})), m.a.createElement(cm.a.Provider, {
						value: !1
					}, m.a.createElement(ed.a, {
						forceRedditTheme: j || _,
						isCommentsPage: S
					}, m.a.createElement(mm, null, m.a.createElement(Im, {
						browserInfo: v,
						frontpageSignupVariant: n,
						isCommentsPage: S,
						isInline: M,
						isLoggedIn: a,
						isSubscriptionsPinned: i,
						location: C,
						overlayIsOpen: O,
						page: E,
						routes: b,
						showEmailCollectionBanner: h,
						showFPR: r,
						showOffline: N,
						showSuspended: l
					}), m.a.createElement(sm.b, null), m.a.createElement(sm.a, null)))))), m.a.createElement(Qt.a.Provider, {
						value: t
					}, O && m.a.createElement(cm.a.Provider, {
						value: !0
					}, m.a.createElement(ed.a, {
						isOverlay: !0
					}, m.a.createElement(Tm, {
						browserInfo: v,
						isPostCollection: w,
						location: d,
						onClickOutsideOverlay: p,
						page: t,
						routes: b,
						showEmailCollectionBanner: h,
						showFPR: r,
						showOffline: N,
						showSuspended: l
					}))), m.a.createElement(ed.a, null, m.a.createElement(u.Fragment, null, m.a.createElement(Lu, null), m.a.createElement($l.a, null), h && m.a.createElement(k.a, null), m.a.createElement(qt, null), m.a.createElement(ls, null)))))
				}
			}
			Mm.contextType = x.a;
			const Nm = Object(A.c)(e => {
					const t = Object(Qt.eb)(),
						n = Object(p.e)(e => ((e, {
							pageLayer: t
						}) => !!Object(Qt.ab)(t) || !Object(fm.a)(e))(e, {
							pageLayer: t
						})),
						s = Object(u.useContext)(f.a),
						{
							browserInfo: o,
							connection: r,
							isFPR: a,
							isInline: i,
							showOffline: c,
							isSuspended: l
						} = e,
						d = {
							browserInfo: o,
							showFPR: a,
							showSuspended: l,
							showOffline: c,
							navExperiment: s
						};
					return m.a.createElement(u.Fragment, null, m.a.createElement(Yu, d), n && m.a.createElement(Wl, {
						className: Object(v.a)(Cm.a.header, Object(Zu.b)(Cm.a, d), {
							[Cm.a.inline]: i
						})
					}), m.a.createElement(nm, {
						className: Object(v.a)(Cm.a.offlineBanner, Object(Zu.b)(Cm.a, d)),
						online: r.online,
						showBanner: r.showBanner
					}))
				}),
				Im = Object(A.c)(class extends m.a.Component {
					shouldComponentUpdate(e, t) {
						return !this.locationsEqual(this.props.location, e.location) || !this.pagesEqual(this.props.page, e.page) || this.props.isSubscriptionsPinned !== e.isSubscriptionsPinned || this.props.showEmailCollectionBanner !== e.showEmailCollectionBanner || this.props.isInline !== e.isInline || this.props.showOffline !== e.showOffline
					}
					locationsEqual(e, t) {
						const n = c()(e, "key"),
							s = c()(t, "key");
						return a()(n, s)
					}
					pagesEqual(e, t) {
						if (e && t) {
							const n = c()(e, ["key", "locationState"]),
								s = c()(t, ["key", "locationState"]);
							return a()(n, s)
						}
						return !1
					}
					render() {
						const {
							frontpageSignupVariant: e,
							location: t,
							routes: n,
							overlayIsOpen: s,
							isCommentsPage: o,
							isInline: r,
							isLoggedIn: a,
							isSubscriptionsPinned: i,
							showEmailCollectionBanner: c
						} = this.props, l = i && !(!a && !s && o);
						return m.a.createElement(Pm, {
							"aria-hidden": s,
							className: Object(v.a)(Object(Zu.b)(Cm.a, this.props), {
								[Cm.a.withUpsell]: !!e,
								[Cm.a.inline]: r
							}),
							shouldDisplayPinnedSubscriptions: l
						}, l && m.a.createElement(Zl, {
							className: Object(v.a)(Cm.a.pinnedSubscriptions, Object(Zu.b)(Cm.a, this.props)),
							"data-redditstyle": !0
						}), m.a.createElement(b.f, {
							location: t
						}, n), c && m.a.createElement("div", {
							className: Object(v.a)(Cm.a.bottomSpacer, Object(Zu.a)(Cm.a, this.props))
						}))
					}
				});
			class Tm extends m.a.Component {
				constructor(e) {
					super(e), this.mouseDownInWrapper = !1, this.listingFocusSubscriptionId = 0, this.handleWebkitFullscreenChange = e => {
						this.setState({
							mediaIsFullscreen: null !== document.webkitFullscreenElement
						})
					}, this.lightboxHeaderRefFn = e => this.lightboxHeaderEl = e, this.overlayRefFn = e => {
						this.setState({
							overlayScrollContainerEl: e
						})
					}, this.onOverlayMouseUp = e => {
						if (this.mouseDownInWrapper && Object(j.a)(e) && 0 === e.button && e.target === this.state.overlayScrollContainerEl) {
							const {
								location: e,
								onClickOutsideOverlay: t
							} = this.props;
							t(e.state[rr.b.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.state.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						overlayScrollContainerEl: null,
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = pm.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(E.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && pm.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: n
					} = this.props, {
						overlayScrollContainerEl: s
					} = this.state, o = !(!t || !t.meta || t.meta.name === y.Mb.SUBREDDIT_CREATION || t.meta.name === y.Mb.PUBLIC_ACCESS_NETWORK), r = e;
					return m.a.createElement(jm, {
						className: Object(v.a)(Object(Zu.b)(Cm.a, this.props), {
							[Cm.a.mIsCommentsLightbox]: o,
							[Cm.a.mIsLargeCommentsLightbox]: r
						}),
						overlayScrollContainerEl: s
					}, m.a.createElement("div", {
						className: Object(v.a)(Cm.a.overlayWrapper, Object(Zu.b)(Cm.a, this.props))
					}, m.a.createElement("div", {
						className: Object(v.a)(Cm.a.overlayScrollContainer, {
							[Cm.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: rm.d,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, o && m.a.createElement(_m, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(v.a)(Object(Zu.b)(Cm.a, this.props), {
							[Cm.a.mIsLargeCommentsLightbox]: r
						}),
						tabIndex: -1
					}, m.a.createElement(ql.a, {
						page: t
					})), m.a.createElement(b.f, null, n), m.a.createElement("div", {
						className: Object(v.a)(Cm.a.bottomSpacer, Object(Zu.a)(Cm.a, this.props))
					}))))
				}
			}
			t.b = km(Object(A.c)(Mm))
		},
		"./src/reddit/components/BadgeCounter/index.m.less": function(e, t, n) {
			e.exports = {
				badgeCounter: "_1-nIsCaWhGBFN-L4ZHnbGp",
				mEmpty: "_3FX9lCQKNdKXkfBiSWCjSb"
			}
		},
		"./src/reddit/components/BadgeCounter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/components/BadgeCounter/index.m.less"),
				c = n.n(i);
			t.a = ({
				className: e,
				isActive: t,
				showEmpty: n,
				unreadCount: s
			}) => t ? o.a.createElement("span", {
				className: Object(r.a)(e, c.a.badgeCounter, {
					[c.a.mEmpty]: n || s < 1
				})
			}, n || s < 1 ? "" : Object(a.b)(s)) : null
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(s.a)({
				ErrorComponent: r,
				getComponent: () => Object(o.a)(() => n.e("BannedUserModal").then(n.bind(null, "./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/BlockNavigation/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				i = n("./src/reddit/actions/modal.ts");
			const c = "non-empty-string-to-block-navigation";
			class l extends o.a.Component {
				constructor() {
					super(...arguments), this.onBeforeUnload = e => {
						if (this.props.enabled) return e.preventDefault(), e.returnValue = "", ""
					}, this.message = (e, t) => {
						return !0 === (this.props.confirmNavigate || this.defaultConfirmNavigate)(e, t) || c
					}, this.defaultConfirmNavigate = (e, t) => {
						const {
							ignoreCurrentLocation: n = !0,
							location: s,
							showModal: o,
							dialogId: r
						} = this.props;
						return !(!n || e.pathname !== s.pathname) || (r && o(), !1)
					}
				}
				componentDidMount() {
					this.props.blockOnBeforeUnload && window.addEventListener("beforeunload", this.onBeforeUnload)
				}
				componentWillUnmount() {
					this.props.blockOnBeforeUnload && window.removeEventListener("beforeunload", this.onBeforeUnload)
				}
				render() {
					const {
						enabled: e = !0
					} = this.props;
					return o.a.createElement(a.b, {
						message: this.message,
						when: e
					})
				}
			}
			t.a = Object(r.b)(null, (e, t) => ({
				showModal: () => e(Object(i.h)(t.dialogId))
			}))(Object(a.i)(l))
		},
		"./src/reddit/components/Carousel/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FR0eEUi22u9saLEyWWJGS",
				indicators: "_3YoS4yX_XBXWbj-eYFW6MS",
				indicator: "_1mwHqJp51wXFI7rjTonkz5",
				indicatorSelected: "_2ol4vy2ml1IZ6lfT2n775g",
				items: "_26qHHOV6EkP4whoc4ySt3l",
				item: "_2gs-hGAB6w3q4Gc8mSyG5Z",
				fade: "uAUBkt8dAygLJNIsiAmad",
				slide: "_4S2XTVURHpoKNNEuKzJbH"
			}
		},
		"./src/reddit/components/ChangeUsernameModals/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "ChangeUsernameModals",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ChangeUsernameModals").then(n.bind(null, "./src/reddit/components/ChangeUsernameModals/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ChangeUsernameModals/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = o
		},
		"./src/reddit/components/ChangeUsernameTooltip/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "ChangeUsernameTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ChangeUsernameTooltip").then(n.bind(null, "./src/reddit/components/ChangeUsernameTooltip/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ChangeUsernameTooltip/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = o
		},
		"./src/reddit/components/CoinPurchaseModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				l = n("./src/reddit/constants/modals.ts");
			const d = () => Object(a.a)(() => Promise.all([Promise.all([n.e("CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal"), n.e("CoinPurchaseModal")]).then(n.bind(null, "./src/reddit/components/CoinPurchaseModal/index.tsx")), Object(i.d)().catch(() => {})])).then(e => e[0].default),
				u = Object(r.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: d
				});
			Object(c.b)(l.a.ECON_COIN_PURCHASE, e => o.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/CommonTooltip/Hooked.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/CommonTooltip/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = o.a.memo((function({
				visible: e,
				tooltipId: t,
				className: n,
				arrowClassName: a,
				...l
			}) {
				const [d, u] = Object(s.useState)(e);
				return Object(s.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, u(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), u(!1)
					}
				}, [e]), e ? o.a.createElement("div", c({
					id: t,
					className: Object(r.a)(i.a.tooltip, n, {
						[i.a.visible]: d
					})
				}, l.popperProps), d && o.a.createElement(o.a.Fragment, null, l.arrowProps && o.a.createElement("div", c({
					className: Object(r.a)(i.a.arrow, a)
				}, l.arrowProps)), l.children)) : null
			}))
		},
		"./src/reddit/components/CommonTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "_1sDiFFHKyPJghjPpVTW7vB",
				visible: "_288IzKhWMb7Dw403RofBU8",
				arrow: "J7dyd68w4oXhfat_ErBlK",
				carot: "_1cSDLuGjo4e7WXeW8lyx7K"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				l = n.n(c);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(a.a)(({
				className: e,
				...t
			}) => o.a.createElement(i.a, d({}, t, {
				className: Object(r.a)(l.a.horizontalVotes, e),
				scoreClassName: Object(r.a)(l.a.customScoreStyles, t.scoreClassName),
				downvoteClassName: Object(i.b)(t) ? l.a.customDownvoteStyles : void 0
			})));
			t.a = u
		},
		"./src/reddit/components/DownToChatBanner/DownToChatPendingModal/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "O258FYaW9n8M2K5BGX4v_",
				wrapper: "O258FYaW9n8M2K5BGX4v_",
				backgroundAnimation: "_3wgpIyg-y7kAJzTXM19iIz",
				Container: "WWLVFaNE0_QzzlHV-5_2A",
				container: "WWLVFaNE0_QzzlHV-5_2A",
				Heading: "_2mCl3hzhnrbUnRSV0Hlgvv",
				heading: "_2mCl3hzhnrbUnRSV0Hlgvv",
				Description: "_3cd3ufhq0Jp8vxXTPbHKEa",
				description: "_3cd3ufhq0Jp8vxXTPbHKEa",
				SnooImage: "_1cU9WVsnegf986qVbdoocd",
				snooImage: "_1cU9WVsnegf986qVbdoocd",
				Footer: "_31ILosdTcnxgP48mu3YbxG",
				footer: "_31ILosdTcnxgP48mu3YbxG"
			}
		},
		"./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "ClaimFreeAwardModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ClaimFreeAwardModal").then(n.bind(null, "./src/reddit/components/Econ/ClaimFreeAwardModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/ClaimFreeAwardModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_CLAIM_FREE_AWARD_MODAL, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "GoldTargetedOfferModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Econ/CoinPackageOfferModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/CoinPackageOfferModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_COIN_PACKAGE_OFFER, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/modal.m.less"),
				l = n.n(c);
			const d = Object(s.a)({
				resolved: {},
				chunkName: () => "EconPowerupsFlairModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EconPowerupsFlairModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ACHIEVEMENT_FLAIR, e => r.a.createElement(d, {
				onOverlayClick: e,
				withOverlay: !0,
				className: l.a.modalBody
			}))
		},
		"./src/reddit/components/Econ/PowerupsFlair/PowerupsFlairModal/modal.m.less": function(e, t, n) {
			e.exports = {
				modalBody: "_3kFZWXar5EkIAbiKLZxwKw"
			}
		},
		"./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const l = () => n.e("EconPowerupsMarketingModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsMarketingModal/index.tsx")),
				d = Object(r.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(a.a)(l).then(e => e.default)
				});
			Object(i.b)(c.a.ECON_POWERUPS_MARKETING, e => o.a.createElement(d, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.m.less"),
				l = n.n(c);
			const d = () => n.e("PowerupsPremiumUpsellModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.tsx")),
				u = Object(s.a)(d);
			Object(a.b)(i.a.ECON_POWERUPS_PREMIUM_UPSELL, e => r.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0,
				className: l.a.modal
			}))
		},
		"./src/reddit/components/Econ/PowerupsPremiumUpsellModal/index.m.less": function(e, t, n) {
			e.exports = {
				modal: "_1KwpOybv6p44QN3WvUVBoQ",
				container: "TPBQxpFGmnc7DlYlMReTd",
				title: "_1MbiZSwLn6AEllOCsl_VOs",
				footer: "_3rKjfC0Km1veZhKaJ4mY5g"
			}
		},
		"./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/helpers/loadThirdPartyScript.ts"),
				c = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				l = n("./src/reddit/constants/modals.ts");
			const d = () => Promise.all([Promise.all([n.e("CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal"), n.e("EconPowerupsPurchaseModal")]).then(n.bind(null, "./src/reddit/components/Econ/PowerupsPurchaseModal/index.tsx")), Object(i.d)().catch(() => {})]),
				u = Object(r.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(a.a)(d).then(e => e[0].default)
				});
			Object(c.b)(l.a.ECON_POWERUPS_PURCHASE, e => o.a.createElement(u, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/Econ/PowerupsSuccess/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/Econ/PowerupsSuccess/index.m.less"),
				l = n.n(c);
			const d = Object(s.a)({
				resolved: {},
				chunkName: () => "PowerupSuccessModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("PowerupSuccessModal").then(n.bind(null, "./src/reddit/components/Econ/PowerupsSuccess/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/PowerupsSuccess/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_POWERUPS_SUCCESS, () => r.a.createElement(d, {
				withOverlay: !0,
				className: l.a.modalBody,
				overlayClassName: l.a.modalOverlay
			}))
		},
		"./src/reddit/components/Econ/PowerupsSuccess/index.m.less": function(e, t, n) {
			e.exports = {
				modalOverlay: "_3uruuYeyxpi66lhx6sYSsl",
				fadeOut: "nIOXvEXFyDg7VnFtNVmlJ",
				modalBody: "_2HHFaH5ZLOM1NWKsiGkorM",
				successPowerup: "_25UgJzq-s3kOud15pllhar",
				icon: "_15HZ1T5sP47ouINDpZ92Td",
				title: "_2bJ-GCaxSGVPn1OefwaiZ0",
				confetti: "_3cJJ0jZwGKhEPBNW-HZasa"
			}
		},
		"./src/reddit/components/Econ/Prediction/CancelPredictionModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-CancelPredictionModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-Prediction-CancelPredictionModal").then(n.bind(null, "./src/reddit/components/Econ/Prediction/CancelPredictionModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/CancelPredictionModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_CANCEL_PREDICTION, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-ChangePredictionOutcomeModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-Prediction-ChangePredictionOutcomeModal").then(n.bind(null, "./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_CHANGE_OUTCOME, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-EndTimeModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-Prediction-EndTimeModal").then(n.bind(null, "./src/reddit/components/Econ/Prediction/EndTimeModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/EndTimeModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_CHANGE_END_TIME, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-PremiumModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("Premium~reddit-components-Econ-Prediction-PremiumModal"), n.e("reddit-components-Econ-Prediction-PremiumModal")]).then(n.bind(null, "./src/reddit/components/Econ/Prediction/PremiumModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/PremiumModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_PREDICTIONS_PREMIUM_UPSELL, () => r.a.createElement(c, null))
		},
		"./src/reddit/components/Econ/TopAwardersModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "EconTopAwardersModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("EconTopAwardersModal")]).then(n.bind(null, "./src/reddit/components/Econ/TopAwardersModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/TopAwardersModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(a.b)(i.a.ECON_TOP_AWARDERS, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}))
		},
		"./src/reddit/components/EmailCollection/Banner/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "EmailCollectionBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EmailCollectionBanner").then(n.bind(null, "./src/reddit/components/EmailCollection/Banner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/EmailCollection/Banner/index.tsx"
				}
			});
			t.a = o
		},
		"./src/reddit/components/EmailVerificationTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "_2lPBwpVCWIEI428aTPAwZx",
				closeWrapper: "_1_Rq-E5LCS_6JTARElGK12",
				container: "_2IHh1GBfUxJVQQX0dJvAry",
				topLine: "_1l7oRxdMdQQ7NG2BqRCukJ",
				title: "_3tEYeY-LfC8l7tb0sWeImJ",
				subtitle: "_42_eHTHzRRdWB7Fg8R_QS",
				description: "_33SFF8h93OHkDyAJ59D1nc",
				buttonWrapper: "_9wv2Od0X3vE5kIG9M0Ic",
				commonBtn: "_193xt0mDvkWqbClnP3Aj6T",
				primaryBtn: "BwIqd_kQSoiSr3qEDtdp_"
			}
		},
		"./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1DtVp1OCzoJt6rVu4kqyST",
				container: "_1DtVp1OCzoJt6rVu4kqyST",
				Phone: "_20m5B-2NHmUmXVUYC1gymo",
				phone: "_20m5B-2NHmUmXVUYC1gymo",
				android: "_2jgq6Cm4n7c3NNl8VpFltS",
				iphone: "_2ocrsCliWP9UUmx5ZL374w",
				Carousel: "_1gqdyMEgD0pz6QBvVhgU7i",
				carousel: "_1gqdyMEgD0pz6QBvVhgU7i",
				Frame: "_3P_iHJEXRll3mWyuqNik3I",
				frame: "_3P_iHJEXRll3mWyuqNik3I"
			}
		},
		"./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_23C-3j-0TrSZn_NJT8fcwU",
				container: "_23C-3j-0TrSZn_NJT8fcwU",
				Disclaimer: "_19_2-KUNWYbunHVuHaoY-a",
				disclaimer: "_19_2-KUNWYbunHVuHaoY-a",
				Link: "EzRsHBU9A06NEXZnsJyWI",
				link: "EzRsHBU9A06NEXZnsJyWI"
			}
		},
		"./src/reddit/components/FrontpageSignup/Upsell/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1uKZh7b1kZ-bLvlZ02RLL6",
				container: "_1uKZh7b1kZ-bLvlZ02RLL6",
				MainContent: "_1xH0LEH3NeL-Kz1FAMx9Vz",
				mainContent: "_1xH0LEH3NeL-Kz1FAMx9Vz",
				MainContentColumn: "_3UaPvIbppFSklSTg2aTFLl",
				mainContentColumn: "_3UaPvIbppFSklSTg2aTFLl",
				Images: "_19dEFhHhbDgVJWuOq0KZlf",
				images: "_19dEFhHhbDgVJWuOq0KZlf",
				IFrame: "_2e0gx7j1Bc2qfAjI-3Tbio",
				iFrame: "_2e0gx7j1Bc2qfAjI-3Tbio",
				fields: "g5DNTyz0K4p8Qe1KemhqM",
				NotReady: "W6BMDJ-zjJbsEwxbpvU5r",
				notReady: "W6BMDJ-zjJbsEwxbpvU5r",
				NotReadyText: "_1igwWwaemysS2mmPW8WZ2s",
				notReadyText: "_1igwWwaemysS2mmPW8WZ2s",
				NotReadyIcon: "_3PeYnzFZio-HxxDaqnOAE_",
				notReadyIcon: "_3PeYnzFZio-HxxDaqnOAE_",
				Links: "_1etyEGrcHpnkE1UMtQIjpV",
				links: "_1etyEGrcHpnkE1UMtQIjpV",
				Carousel: "_3OBSZQIgZx2ksSzBQmYOeO",
				carousel: "_3OBSZQIgZx2ksSzBQmYOeO"
			}
		},
		"./src/reddit/components/GlobalModalContainer/registry.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			}));
			const s = {},
				o = () => null;

			function r(e, t) {
				if (e in s) throw new Error(`Modal with id ${e} already registered!`);
				s[e] = t
			}

			function a(e) {
				return e && e in s ? s[e] : o
			}
		},
		"./src/reddit/components/Gold/GildAnimationOverlay/index.m.less": function(e, t, n) {
			e.exports = {
				modalOverlay: "_3b88NBdFAQ04N7cULqQvPh",
				fadeOut: "_3ktYxYLY8M4ue26GyBBjpt",
				modalBody: "_2W0vYckM4OsrrANQqi_sir",
				gildAnimationContainer: "_3xD0e6RJGug4SSLnVIPeh2",
				awardScaleIn: "_231us7lszsy_R3tzl2GqL1",
				awardScaleOut: "eC2A2qBG6f2mU9XPlMMcZ",
				animationComponent: "_2KBRcm-P0k4_mVHu1UroF6",
				starburst: "_3xKR2QByGO_30UN1TJJ9qF",
				awardAsset: "Ju8wOr8Uag5VUdjYF6E_m",
				sparkle: "_28LAx64oVvQTCvxl2mvkX4"
			}
		},
		"./src/reddit/components/Gold/GildAnimationOverlay/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "SPARKLE_ASSET_PATH", (function() {
				return g
			})), n.d(t, "STARBURST_ASSET_PATH", (function() {
				return v
			}));
			var s = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				l = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/modal.ts"),
				m = n("./src/reddit/constants/modals.ts"),
				p = n("./src/reddit/selectors/gold/awardIcon.ts"),
				b = n("./src/reddit/selectors/gold/giveAwards.ts"),
				h = n("./src/reddit/components/Gold/GildAnimationOverlay/index.m.less"),
				f = n.n(h);
			const g = `${s.a.assetPath}/img/gold/animated-sparkle-256.png`,
				v = `${s.a.assetPath}/img/gold/animated-starburst-256.png`,
				y = Object(c.c)({
					award: b.b,
					awardIcon: p.d
				}),
				O = Object(i.b)(y, e => ({
					onClose: () => e(Object(u.g)(m.a.GOLD_GILD_ANIMATION_OVERLAY))
				}));
			t.default = Object(l.a)(O(e => {
				const {
					award: t,
					awardIcon: n,
					onClose: s
				} = e;
				setTimeout(s, 1700);
				const r = o.fbt._("Animation of {award name} image", [o.fbt._param("award name", t.name)], {
					hk: "222osK"
				});
				return a.a.createElement("div", {
					className: f.a.gildAnimationContainer
				}, a.a.createElement("div", {
					className: Object(d.a)(f.a.animationComponent, f.a.starburst),
					style: {
						backgroundImage: `url(${v})`
					}
				}), a.a.createElement("img", {
					alt: r,
					className: Object(d.a)(f.a.animationComponent, f.a.awardAsset),
					src: n
				}), a.a.createElement("div", {
					className: Object(d.a)(f.a.animationComponent, f.a.sparkle),
					style: {
						backgroundImage: `url(${g})`
					}
				}))
			}))
		},
		"./src/reddit/components/GoogleOneTapIFrame/index.m.less": function(e, t, n) {
			e.exports = {
				IFrame: "V6V7iCbDSFo5LexMzDv4B",
				iFrame: "V6V7iCbDSFo5LexMzDv4B",
				"m-hidden": "_1F0LLqsimObYeEF5Q2a-Nn",
				mHidden: "_1F0LLqsimObYeEF5Q2a-Nn"
			}
		},
		"./src/reddit/components/Governance/TransactionModals/BurnPointsModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-BurnPointsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~fb9f1732"), n.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~bd661033"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/BurnPointsModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/BurnPointsModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(a.b)(i.a.CRYPTO_BURN_POINTS, e => r.a.createElement(c, null))
		},
		"./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-ConvertToCoinsModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~fb9f1732"), n.e("vendors~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-~bd661033"), n.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), n.e("reddit-components-Governance-TransactionModals-ConvertToCoinsModal")]).then(n.bind(null, "./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/ConvertToCoinsModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			Object(a.b)(i.a.CONVERT_TO_COINS, e => r.a.createElement(c, null))
		},
		"./src/reddit/components/Header/AvatarQuickCreateCta/index.m.less": function(e, t, n) {
			e.exports = {
				ctaContainer: "_1_-T-UyaTFWSKiU5qkmH4p",
				sparkle: "_3BW2xh05Xd6fPp8ewmG_zt",
				fadeIn: "_3EsU62vzG6DnMyeCR6qmsN",
				quickCreateGiftAnimation: "_2ayMLd0-DF3iBdcNu4Jyw9",
				sparkle1: "_2XTOJxs8_NUxZs7xO_yqD4",
				sparkle2: "DSsYeuIxRQ_6mpLKn7Znw",
				sparkle3: "egE_sRX5MzRyi9eJWBBvR"
			}
		},
		"./src/reddit/components/Header/GoldCoinsCta/index.m.less": function(e, t, n) {
			e.exports = {
				ctaContainer: "_1t5i5bNwZeJ7FuUXZ9rM-p",
				ctaContent: "jEUbSHJJx8vISKpWirlfx",
				special: "_1dJtiWITrnvIbQdXgYgdym",
				text: "_2Q7wEg_pr4EKVIc6XvJibh",
				icon: "_1F-AgkBVxGxQsEfI3oVkVa"
			}
		},
		"./src/reddit/components/Header/GoldCoinsCta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n.n(o),
				a = n("./node_modules/react/index.js"),
				i = n.n(a),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/models/Gold/ProductOffer.ts"),
				b = n("./src/reddit/components/CoinPurchaseModal/async.tsx"),
				h = n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx"),
				f = n("./src/reddit/components/TrackingHelper/index.tsx"),
				g = n("./src/reddit/helpers/awards/overlayIds.ts"),
				v = n("./src/reddit/helpers/correlationIdTracker.ts"),
				y = n("./src/reddit/helpers/trackers/goldTopNav.ts"),
				O = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/selectors/experiments/econStorefrontClaim.ts"),
				C = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				E = n("./src/reddit/selectors/tooltip.ts"),
				P = n("./src/reddit/components/Header/GoldCoinsCta/index.m.less"),
				j = n.n(P);
			const _ = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-CoinPurchaseDropdown",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("reddit-components-CoinPurchaseDropdown").then(n.bind(null, "./src/reddit/components/CoinPurchaseDropdown/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/CoinPurchaseDropdown/index.tsx"
					}
				}),
				S = Object(g.a)(),
				k = Object(l.c)({
					activeSaleConfig: C.a,
					activeTooltipId: E.a,
					coinPurchaseDropdownIsOpen: e => Object(E.b)(S)(e),
					isFreeAwardEventEnabled: e => Object(x.a)(e) && Object(C.g)(e)
				}),
				w = (e, t) => ({
					closeTooltip: () => e(Object(m.i)()),
					requestSpecialEvents: () => e(Object(u.a)()),
					toggleTooltip: t => {
						e(t === S ? Object(m.i)() : Object(m.f)({
							tooltipId: S
						}))
					}
				}),
				M = Object(c.b)(k, w);
			class N extends i.a.Component {
				constructor() {
					super(...arguments), this.handleClick = e => {
						const {
							activeTooltipId: t,
							activeSaleConfig: n,
							coinPurchaseDropdownIsOpen: s,
							isFreeAwardEventEnabled: o,
							sendEvent: r,
							toggleTooltip: a
						} = this.props;
						if (!s) {
							Object(v.d)(v.a.GoldPayment, !0), Object(b.a)(), Object(h.a)();
							const e = n ? p.a.CoinSale : o ? p.a.StorefrontFreeAward : void 0;
							r(Object(y.d)("get_coins_cta", e))
						}
						a(t)
					}
				}
				componentDidMount() {
					const {
						activeSaleConfig: e,
						requestSpecialEvents: t
					} = this.props;
					e || t()
				}
				getButtonText() {
					const {
						activeSaleConfig: e,
						isFreeAwardEventEnabled: t
					} = this.props;
					return e ? e.ctaText || o.fbt._("Coin Sale", null, {
						hk: "1VWZAa"
					}) : t ? o.fbt._("Free", null, {
						hk: "2qYM7h"
					}) : o.fbt._("Get Coins", null, {
						hk: "4h3X7d"
					})
				}
				render() {
					const {
						activeSaleConfig: e,
						className: t,
						closeTooltip: n,
						coinPurchaseDropdownIsOpen: s,
						isFreeAwardEventEnabled: o
					} = this.props, r = this.getButtonText(), a = !!e || o, c = Object(d.a)(j.a.icon, {
						[j.a.special]: a
					});
					return i.a.createElement("button", {
						className: Object(d.a)(t, j.a.ctaContainer, {
							[j.a.special]: a
						}),
						id: S,
						onClick: this.handleClick
					}, i.a.createElement("div", {
						className: Object(d.a)(j.a.ctaContent, {
							[j.a.special]: a
						})
					}, i.a.createElement(O.a, {
						name: "coins",
						className: c
					}), i.a.createElement("span", {
						className: j.a.text
					}, r)), s && i.a.createElement(_, {
						activeSaleConfig: e,
						isFreeAwardEventEnabled: o,
						isOpen: s,
						onCloseTooltip: n,
						tooltipId: S
					}))
				}
			}
			t.a = M(Object(f.c)(N))
		},
		"./src/reddit/components/Header/MwebResponsiveHeader/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_1oBkxkI9Ae3Qs71WqfDicM",
				container: "_1oBkxkI9Ae3Qs71WqfDicM",
				HomeLink: "_3zEcZZkpP9hBtkGINx6zWf",
				homeLink: "_3zEcZZkpP9hBtkGINx6zWf",
				Snoo: "_1ZrnhKss6v3Ggw08tDbTXH",
				snoo: "_1ZrnhKss6v3Ggw08tDbTXH",
				Wordmark: "_1rivc6IIexuAqsRVeptXuq",
				wordmark: "_1rivc6IIexuAqsRVeptXuq"
			}
		},
		"./src/reddit/components/Header/NotificationsButton/index.m.less": function(e, t, n) {
			e.exports = {
				notificationInboxIconContainer: "_1Tdh9XCXmEOaXAlloLqrmH",
				welcomeTooltip: "_3OMmYPy8XZymvnsxBSK3c0",
				visible: "_1Ssw-NK4SzV_ZrK0hsAQZj",
				welcomeTooltipArrow: "_3Dl1lNOXSRFghRireQprSr"
			}
		},
		"./src/reddit/components/Header/QuickLinks/index.m.less": function(e, t, n) {
			e.exports = {
				container: "x0hiXHicn7r3BG9m1FJH4",
				row: "_1vXXD2qKLnHetdKvisFzBD",
				icon: "_3dZnYgFFpifT-M_Vs2FAq6",
				rpanVideoIcon: "_2BMLeQ_Q2tfBzrcfsUAQZi",
				psBattlesIcon: "_3wyl6g2grDztg8KpnqxWiE"
			}
		},
		"./src/reddit/components/Header/Sparse.m.less": function(e, t, n) {
			e.exports = {
				Logo: "_27RfkQ1Fuxjg5UzNJqCtC-",
				logo: "_27RfkQ1Fuxjg5UzNJqCtC-",
				Wordmark: "_1j_hHS0lKR-ok52j1iYlId",
				wordmark: "_1j_hHS0lKR-ok52j1iYlId",
				HomeExternalLink: "XGVEYXuPeFqHqAf2DqHaM",
				homeExternalLink: "XGVEYXuPeFqHqAf2DqHaM",
				SparseContainer: "_1GdKQyDUWvhTFBDr0FsAkj",
				sparseContainer: "_1GdKQyDUWvhTFBDr0FsAkj",
				SparseContainerExp: "pb476LMY7Ob_RBN7pZ3kN",
				sparseContainerExp: "pb476LMY7Ob_RBN7pZ3kN"
			}
		},
		"./src/reddit/components/Header/Sparse.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/elementIds.ts"),
				a = n("./src/reddit/contexts/NavbarExp.ts"),
				i = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				c = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				l = n("./src/reddit/layout/row/Inline/index.tsx"),
				d = n("./src/reddit/components/Header/Sparse.m.less"),
				u = n.n(d),
				m = n("./src/lib/lessComponent.tsx");
			const p = m.a.wrapped(i.a, "Logo", u.a),
				b = m.a.wrapped(c.a, "Wordmark", u.a),
				h = m.a.div("SparseContainer", u.a),
				f = m.a.div("SparseContainerExp", u.a),
				g = m.a.a("HomeExternalLink", u.a);
			t.a = function(e) {
				const t = Object(s.useContext)(a.a) ? f : h;
				return o.a.createElement(t, {
					id: r.c
				}, o.a.createElement(g, {
					href: e.logoHref || "/",
					onClick: e.logoOnClick
				}, o.a.createElement(l.a, null, o.a.createElement(p, null), o.a.createElement(b, null))))
			}
		},
		"./src/reddit/components/Header/User/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3Wg53T10KuuPmyWOMWsY2F",
				icon: "_234aKY_LemFWuSTYVoshHn",
				link: "_2qcLS5et_OlJluP0WWDdsJ",
				loggedOut: "U3FRqDA_Qhr4icbaNXSuf",
				loggedOutRow: "_1JBkpB_FOZMZ7IPr3FyNfH",
				oldRedditLink: "_31lJpVPojF0SAR5usRZ36h",
				row: "_19oWd7e3z7-ztUGzdIoCR7",
				separator: "Z_HUY3BUsGOBOtdmH94ZS",
				visitOldReddit: "_3Z5rfDuvQDBNfBgpXdnt_b",
				iconWrapper: "_2QpF1Fkq_rr2nvPL1no0nN"
			}
		},
		"./src/reddit/components/Header/index.m.less": function(e, t, n) {
			e.exports = {
				centeredRow: "_30BbATRhFv3V83DHNDjJAO",
				container: "_2GyPfdsi-MbQFyHRECo9GO",
				navbarHeightContainer: "lNoTgmppXfHyXXS-3aRDj",
				layout: "_2vkeRJojnV7cb9pMlPHy7d",
				layoutContainer: "_31IHoBZ9we7EzLMdkTaIR2",
				compactLayout: "Y4MkVr6trrdypfZVUkpIA",
				searchContainer: "_1iqnOY2Y57wmetu8MAjiId",
				explore: "_17gDYx5g5X6q--Lcmc9IvO",
				search: "_2dlTXDaX9JuL0bekTwhV18",
				snoo: "_1O4jTk-dZ-VIxsCuYB6OR8",
				snooExp: "_32hLJ8_m9mplK6bwNXysk8",
				wordmark: "_1bWuGs_1sq4Pqy099x_yy-",
				left: "_3dnbqz69WJTFCss8wl7Wlk",
				quickLinks: "_23q1waDr4n_2fR5A7zcZzb",
				right: "_2u8LqkbMtzd0lpblMFbJq5",
				HeaderDynamicStyles: "_1tvdSTbdxaK-BnUbzUIqIY",
				headerDynamicStyles: "_1tvdSTbdxaK-BnUbzUIqIY",
				bladeIsOpen: "_1z0T-r2uyIYQr2tLUWs4M2",
				MwebResponsiveHeader: "_2egmn5KNYpLrH0zPS0gihA",
				mwebResponsiveHeader: "_2egmn5KNYpLrH0zPS0gihA"
			}
		},
		"./src/reddit/components/HeaderIconContainer/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "PH-V9ggsF2mi5JTDmDqdR",
				button: "PH-V9ggsF2mi5JTDmDqdR",
				Container: "FOioVk_DUTmZIKKa82Mm1",
				container: "FOioVk_DUTmZIKKa82Mm1",
				isOpen: "_2DgzqfpTotjWrh91uFswuC"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less": function(e, t, n) {
			e.exports = {
				item: "_26MVepkxZHzpNv1cuAA4JA",
				mFocused: "_7Xbismt11Yj8tq6BaRWFr",
				buttonContainer: "oiDWziAp_Bua6rb7oQKXs",
				icon: "cq0sTeCPC4GI78UNPdClD",
				text: "_1nBP1OfpQDgTmzRFqaVult"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_1Ok0AiXwAeYl2SsUBaxgPC"
			}
		},
		"./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less": function(e, t, n) {
			e.exports = {
				filter: "_37tmRmxaFMjRRrvwcY2JmY",
				item: "_2MgAHlPDdKvXiG-Qbz5cbC",
				listHeader: "_2XRPX11qL4-HxWPuHAzOW5",
				headerButton: "_1ee4j8lY-1iIi8GkJdJ5RD"
			}
		},
		"./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less": function(e, t, n) {
			e.exports = {
				container: "nSJCQrnLY07CzwT8tTsNO",
				title: "csebgIdGwT3fBJ8kUT2aQ",
				subtitle: "rsZg2IAMPbcDGNPnNIBy_",
				description: "_3m-DocsNGlVUjAtAm7ZZLi",
				dismissBtn: "_3tJL-r-lrTcB_GkrrlZxEN"
			}
		},
		"./src/reddit/components/HeaderUserActions/index.m.less": function(e, t, n) {
			e.exports = {
				iconWrapper: "_2zZ-KGHbWWqrwGlHWXR90y",
				postIcon: "_1aj2BqXAeeo2bHwArcJ5AT",
				moderateIcon: "_14ugEJZOmgrUDXYeFSSv9w",
				isLit: "_3ge8uSGq8pAK2qqs45Vzde",
				link: "_1x6pySZ2CoUnAfsFhGe7J1",
				headerLinks: "_20HfCAFz3ot1MW1o29ZoGZ",
				headerUserDropdown: "_1pA8z73SZ1olP5KMKFN4_Z",
				moderationDropdown: "_1luaIaEVRAlXWIwqbCOj2a",
				envelopeIcon: "_1V77mEI1g_5ZlCh_c2-Yab",
				isUnread: "_2Wgcbg0LNUiJf4L2fVQJ7O",
				notificationInboxIcon: "_2mR_VyuaB50nsX1FR6XERF",
				loggedInGoogleOneTap: "GmCFJz0Lv_7OTbtdvK2me",
				icon2020: "_3uVYL9qgX3QSEa_F4F-DPv"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less": function(e, t, n) {
			e.exports = {
				basicLink: "_2CQ2c7khtd-m7uslH6Mz7J",
				collapsibleContainer: "_10IrsfRFg99DXaIMnqu-vj"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/RecentCommunitiesMenu/styles.m.less": function(e, t, n) {
			e.exports = {
				basicLink: "_2gT-SgcGRQsJc7cLAzWT3r",
				headingContent: "_26v6JOihbU7MuezKAlj4JI",
				subredditIcon: "u_VVgOsrqJsUNbQ80sEby",
				title: "_3eGd1zitdF6RmAyLpSDjG6"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/index.m.less": function(e, t, n) {
			e.exports = {
				coinsLink: "_3zu1R6cDitNjrJaFA1VPXj",
				coinsTitle: "_6PPJ3peMr-B90dx0MQDhB",
				meta: "msJd1mFtK7HCAm9dasMIn"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/UserMenu/shared.m.less": function(e, t, n) {
			e.exports = {
				button: "_3fbofimxVp_hpVM6I1TGMS",
				heading: "_1pjbWqnK8P0fDmz8PgLxXY",
				secondLevelButton: "NiNJXib52w4C8FUidB5af",
				secondLevelSwitch: "nBh6t8H3UNZpI1Ce9s6yQ",
				headingContent: "f8nXLisWxOYzMMl1uIAP3",
				iconContainer: "_225mt8Dkk7IyfYILsMLk9t",
				title: "yloKeyD8bfd8UJ_Gi9rsR",
				collapseIcon: "_3MAMvvyd5hQy71OUfBGRkm",
				chevronIcon: "_3DRWid86ywqQiIYSK1e5mN",
				"m-expanded": "_1AFIV6eh63D9Ab_ml6uJ5j",
				mExpanded: "_1AFIV6eh63D9Ab_ml6uJ5j",
				contentContainer: "_3SDj_IT6ZaqCbKfC4eTjb2",
				"m-collapsible": "sJncFX1AQ0-0SzCGc9V5L",
				mCollapsible: "sJncFX1AQ0-0SzCGc9V5L",
				isOpen: "_27B2PE8qRdRlQHbzPBidG6",
				innerLink: "_2ChaQYEC5d_hjd-mltzvQK",
				copyrightContainer: "_2XCnMY85ivEZUL6cAgK0nV",
				copyrightText: "_ttuvLVH4k74IkCGNFJSt",
				subredditIcon: "_3i89oiIrBc-3aoYCzDu8Dy",
				spanButton: "VeDtdPVW3ue8oUfGWbxqu"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/avatar.m.less": function(e, t, n) {
			e.exports = {
				avatarLinkBody: "_6opQAE7SUXi-Fy7P3vItL",
				marketingBadge: "_6qTe2HfpYA9trfOatbi74",
				marketingAsset: "_1lcNm4na-FCLir4IeIpM7w",
				sparkle: "_2thIi4nb9dgSv10ECKVHL4",
				fadeIn: "w8i-7IiMlCG-ncHyRHzxw",
				sparkle1: "_2XE_ejqL9tZ617JilWAoev",
				sparkle2: "RPtjfCh_RZnh_Lh-sTACB",
				sparkle3: "o03hgL0CTE9PaKw9A2nHD",
				sparkle4: "_16-T-fB2mGMlxyfbZjQvUG"
			}
		},
		"./src/reddit/components/HeaderUserDropdown/index.m.less": function(e, t, n) {
			e.exports = {
				accountCoins: "_2pXW42IYsGP59qZnjAnkAx",
				accountDisplayText: "DFKWwVItcycZV1bKUOyay",
				accountKarma: "Rz5N3cHNgTGZsIQJqBfgk",
				accountDetails: "_1pHyKCBktIf_9WFW9jjM3P",
				accountWrapper: "_3KfbpxpA8Esu_3UHTmIvfw",
				isLoggedOut: "_22SL37yETIW414yUiZj27w",
				isLoggedIn: "_2OFo5eaD2V6ZcJsYBuYned",
				button: "_1zZ3VDhRC38fXLLvVCHOwK",
				presenceToggle: "_3Axd0OX2sZP0PEIHdeocc3",
				buttonText: "_3m4MQxMy4WfgIkMhHh-UAg",
				coinFontIcon: "LyE1zRbUJlGravH4LHRfD",
				karmaIcon: "_2wYneOcJEB6o4mj1NedmsR",
				dropdownTriangle: "_50RxI-5rW1xzwoC42vhzM",
				imgIcon: "-z42jjKOFdAdFhdJ8mmI4",
				navbarLikeMweb: "_2XkHtsPtFuTExJyk9JQUAp",
				imgIconWrapper: "_1zyV-XmoYeSNGWjfZiXbPc",
				defaultProfileIcon: "_3-lF5kPDkSGfnVUW_GtvUV",
				modModeIcon: "_2Az3JCV8DZZ1S6CU8cR-bl",
				nightIcon: "gRVZlDl2ZHFThtPLjYYzD",
				inlineButton: "_18X7KoiaLuKbuLqg4zE8BH",
				dropdownOpen: "_3F3oKTToidUQ0CbMS1cccX",
				premiumFontIcon: "pztXT07fzqRz6IEE6thRV",
				Dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				dropdown: "_1HSQGYlfPWzs40LP4_oFi5",
				username: "_2BMnTatQ5gjKGK5OWROgaG",
				divider: "_7cxLZzQcuE-aYbch5G9oN",
				sectionHeader: "_18Q1kN_hFY6M09dHaoehBF",
				entrypointLink: "pszNQQxC761u1dbJ3aR-C"
			}
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return c
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/config.ts"),
				r = n("./src/lib/pubsub/index.ts"),
				a = n("./src/reddit/constants/listings.ts"),
				i = n("./src/reddit/constants/page.ts");
			const c = e => e && e.toLowerCase() === a.b.Popular,
				l = e => e && e.toLowerCase() === a.b.All,
				d = e => e && e === i.c,
				u = (e, t = 40, n = 68) => ({
					height: n,
					image: e,
					width: t
				}),
				m = ({
					listingName: e,
					subreddit: t,
					idCardWidget: n
				}) => {
					let r, i, m, p, b;
					const h = n && n.subscribersText || s.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						f = n && n.currentlyViewingText || s.fbt._("Online", null, {
							hk: "36JX70"
						});
					let g, v;
					return d(e) ? (r = `${o.a.assetPath}/img/id-cards/home-banner@2x.png`, m = u(`url('${o.a.assetPath}/img/id-cards/snoo-home@2x.png')`), b = a.c[a.b.Home], i = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), p = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : l(e) ? (r = `${o.a.assetPath}/img/id-cards/banner@2x.png`, i = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), m = u(`url('${o.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/all", b = a.c[a.b.All]) : c(e) ? (r = `${o.a.assetPath}/img/id-cards/banner@2x.png`, i = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), m = u(`url('${o.a.assetPath}/img/id-cards/snoo-home@2x.png')`), p = "r/popular", b = a.c[a.b.Popular]) : e && (i = n && n.description, m = u(""), p = t.displayText, b = t.url, v = n && n.subscribersCount, g = n && n.currentlyViewingCount), {
						snooBackground: m,
						description: i,
						titleText: p,
						url: b,
						subscribersCount: v,
						subscribersText: h,
						currentlyViewingText: f,
						currentlyViewingCount: g,
						...r ? {
							bannerBackgroundImage: r
						} : {}
					}
				},
				p = new r.a,
				b = "VISIBLE",
				h = "NOT_VISIBLE",
				f = e => p.publish(e ? b : h)
		},
		"./src/reddit/components/InboxBanner/Banner.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				c = n("./src/reddit/components/InboxBanner/index.m.less"),
				l = n.n(c);
			t.a = ({
				className: e,
				closeButtonText: t,
				closeIcon: n,
				descriptionText: o,
				primaryButtonText: c,
				titleText: d,
				onClose: u,
				onClick: m
			}) => r.a.createElement("div", {
				className: Object(s.a)(l.a.banner, e)
			}, r.a.createElement("div", {
				className: l.a.bannerTitleContainer
			}, d && r.a.createElement("h4", {
				className: l.a.bannerTitle
			}, d), n && r.a.createElement(a.t, {
				onClick: u,
				Icon: Object(i.b)("close_fill"),
				className: Object(s.a)(l.a.closeIcon, l.a.closeButton),
				size: a.d.XXS,
				priority: a.c.Plain
			})), o && r.a.createElement("p", {
				className: l.a.bannerDescription
			}, o), r.a.createElement("div", {
				className: l.a.bannerButtonsContainer
			}, c && r.a.createElement(a.t, {
				text: c,
				priority: a.c.Tertiary,
				className: Object(s.a)(l.a.button, l.a.primaryButton),
				size: a.d.XS,
				onClick: m
			}), t && r.a.createElement(a.t, {
				text: t,
				onClick: u,
				priority: a.c.Plain,
				size: a.d.XS,
				className: Object(s.a)(l.a.button, l.a.closeButton)
			})))
		},
		"./src/reddit/components/InboxBanner/PolicyBanner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/InboxBanner/Banner.tsx"),
				i = n("./src/reddit/helpers/trackers/inbox.ts"),
				c = n("./src/reddit/hooks/useTracking.ts"),
				l = n("./src/reddit/components/InboxBanner/index.m.less"),
				d = n.n(l);
			const u = ({
				onClose: e,
				pageType: t
			}) => {
				const n = Object(c.a)(),
					o = s.fbt._("We’ve updated our {userAgreement} and {privacyPolicy}. Take a look, as the changes take effect September 12, 2021.", [s.fbt._param("userAgreement", r.a.createElement("a", {
						className: d.a.underlineLink,
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "User Agreement")), s.fbt._param("privacyPolicy", r.a.createElement("a", {
						className: d.a.underlineLink,
						href: "https://www.redditinc.com/policies/privacy-policy",
						target: "_blank",
						rel: "noopener noreferrer"
					}, "Privacy Policy"))], {
						hk: "3bGC4g"
					});
				return r.a.createElement(a.a, {
					className: d.a.policyBanner,
					titleText: s.fbt._("Reddit’s User Agreement & Privacy Policy", null, {
						hk: "32fxCY"
					}),
					descriptionText: o,
					primaryButtonText: s.fbt._("Ok", null, {
						hk: "1IJxzv"
					}),
					onClick: s => {
						s.stopPropagation(), e(), n(Object(i.f)(t, i.a.Confirm))
					}
				})
			}
		},
		"./src/reddit/components/InboxBanner/index.m.less": function(e, t, n) {
			e.exports = {
				underlineLink: "_3vOO3WyD7yteL4Rr9E1i2y",
				banner: "_34mO86zNIysmcISYIe8gVT",
				bannerTitleContainer: "rh7yf_ejK6H75L6jZkb6C",
				bannerTitle: "V_VLkmdSrXqz92-5vad5F",
				bannerDescription: "_1vbdR0mal1nPuuTOZIemLg",
				closeButton: "-Fi_Lr4OQ6XfCIiufmgxa",
				bannerButtonsContainer: "_1a9VL63O5el1YN7RuPoDLy",
				button: "_1mejKTw8yWGmudymV6GufX",
				primaryButton: "_1mR2YFl21PdJDX9T7ykA7c",
				welcomeBanner: "_3QWgBcfZuqQ6TlxZa6uYkS",
				dnPromptBanner: "_3IIpKn1IlCXgko4sLMEie1",
				policyBanner: "GLgkxGZkPymWBWeRISXBe",
				modalHeader: "_2Ggqgl_RyXu2U-mPYZSaCk",
				modalTitle: "_2C3YUpN8pGzseZOBK0tl0I",
				modalCloseIcon: "_2BTQI8_1TIwwfdecOP_j6o",
				modalListItem: "-sXLpWAGj2HMFvzRvH_bC",
				modalListIcon: "_3UO2hA0CsOqKl1bYybPZGs"
			}
		},
		"./src/reddit/components/InboxTooltip/Component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return Q
			})), n.d(t, "b", (function() {
				return Y
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/notifications/index.ts"),
				i = n("./src/lib/notifications/constants.ts"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/BadgeCounter/index.tsx"),
				u = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				m = n("./node_modules/lodash/omit.js"),
				p = n.n(m),
				b = n("./src/reddit/components/InboxBanner/Banner.tsx"),
				h = n("./src/reddit/components/InboxBanner/index.m.less"),
				f = n.n(h);
			const g = ({
				onClose: e,
				onTurnOnBrowserNotifications: t
			}) => {
				return r.a.createElement(b.a, {
					className: f.a.dnPromptBanner,
					titleText: s.fbt._("Don’t miss out on updates — Turn on desktop notifications.", null, {
						hk: "10oNqB"
					}),
					onClose: t => {
						t.stopPropagation(), e()
					},
					closeIcon: !0,
					primaryButtonText: s.fbt._("Turn On", null, {
						hk: "3hywR9"
					}),
					closeButtonText: s.fbt._("No Thanks", null, {
						hk: "2GQOmV"
					}),
					onClick: n => {
						t(), e()
					}
				})
			};
			var v = n("./src/reddit/components/InboxBanner/PolicyBanner.tsx");
			const y = ({
				onClose: e
			}) => {
				return r.a.createElement(b.a, {
					className: f.a.welcomeBanner,
					titleText: s.fbt._("Welcome to your new inbox!", null, {
						hk: "37URYp"
					}),
					onClose: t => {
						t.stopPropagation(), t.preventDefault(), e()
					},
					descriptionText: s.fbt._("Now it’s easier to stay up-to-date on your activity and know what’s happening in your communities.", null, {
						hk: "3kKTJ3"
					}),
					closeIcon: !0
				})
			};
			var O = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				x = n("./src/reddit/components/ResizeSensor/index.tsx"),
				C = n("./src/reddit/components/InboxTooltip/index.m.less"),
				E = n.n(C);
			const P = 3;
			class j extends r.a.Component {
				constructor() {
					super(...arguments), this.ref = r.a.createRef(), this.handleResize = () => {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						e !== this.props.notificationHeight && this.props.setNotificationHeight(e, this.props.index)
					}
				}
				componentDidMount() {
					if (this.props.index + 1 <= P) {
						const e = this.ref && this.ref.current && this.ref.current.clientHeight || 0;
						this.props.setNotificationHeight(e, this.props.index)
					}
				}
				render() {
					const {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: s,
						hideSubredditNotifications: o,
						blockAwarder: a,
						index: i,
						isInboxPostEmbedEnabled: c,
						markNotificationAsRead: l,
						notification: d,
						setActiveOverflowMenuId: u,
						onItemClick: m
					} = this.props, p = i + 1 <= P;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						ref: this.ref,
						className: E.a.notificationResizeWrapper
					}, r.a.createElement(O.a, {
						activeOverflowMenuId: e,
						decreaseSubredditNotifications: t,
						disableNotificationUpdates: n,
						hideNotification: s,
						hideSubredditNotifications: o,
						isInboxPostEmbedEnabled: c,
						isInTooltip: !0,
						markNotificationAsRead: l,
						notification: d,
						setActiveOverflowMenuId: u,
						onItemClick: m,
						blockAwarder: a
					}), !!p && r.a.createElement(x.a, {
						onResize: this.handleResize
					})))
				}
			}
			var _ = n("./src/reddit/components/NotificationUnit/Placeholder.tsx"),
				S = n("./src/reddit/helpers/trackers/inbox.ts"),
				k = n("./src/reddit/pages/NotificationsInbox/Content/EmptyState.tsx");

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const M = {},
				N = "",
				I = 0,
				T = "200px",
				A = "250px",
				R = "270px",
				L = 100,
				D = .5,
				F = 5;
			class B extends r.a.Component {
				constructor() {
					super(...arguments), this.container = r.a.createRef(), this.state = {
						notificationHeights: M,
						currentNotificationCursorIndex: -1
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > I && this.props.setActiveOverflowMenuId(N)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state, {
							isInboxExposureBannerEnabled: t,
							isDNInboxPromptBannerEnabled: n,
							isInboxPrivacyPolicyBannerEnabled: s,
							isLoggedIn: o
						} = this.props, r = n || t || s;
						let a = 0;
						for (const i in e) a += e[i];
						return 0 === a ? r ? A : o ? T : R : (r && (a += L), a)
					}, this.setNotificationHeight = (e, t) => {
						this.setState(n => ({
							notificationHeights: {
								...n.notificationHeights,
								[t]: e
							}
						}))
					}, this.updateCurrentCursorIndex = () => {
						const {
							notifications: e
						} = this.props, {
							currentNotificationCursorIndex: t
						} = this.state, n = t + F, s = n > e.length ? n : e.length - 1;
						this.setState({
							currentNotificationCursorIndex: s
						})
					}, this.renderNotifications = () => {
						const e = p()(this.props, ["notifications"]),
							{
								notificationHeights: t,
								currentNotificationCursorIndex: n
							} = this.state,
							{
								isInboxInfiniteScrollEnabled: s,
								notifications: o
							} = this.props,
							a = o.length > n + F;
						return (s && o.length > 0 && a ? o.slice(0, n + 1) : o).map((n, s) => r.a.createElement(j, w({}, e, {
							index: s,
							key: s,
							notification: n,
							notificationHeight: t[s],
							setNotificationHeight: this.setNotificationHeight
						})))
					}, this.loadNotifications = e => {
						const {
							cursor: t,
							fetchNotifications: n,
							isInboxInfiniteScrollEnabled: s,
							notifications: o
						} = this.props;
						if (e.isIntersecting) {
							const e = o.length > this.state.currentNotificationCursorIndex + F;
							this.props.notifications.length > 0 && s && e ? this.updateCurrentCursorIndex() : t && n({
								after: t,
								first: F
							})
						}
					}
				}
				componentDidMount() {
					const e = this.container && this.container.current;
					e && e.addEventListener("scroll", this.resetOverflowMenu)
				}
				componentWillUnmount() {
					const e = this.container && this.container.current;
					e && e.removeEventListener("scroll", this.resetOverflowMenu), this.resetOverflowMenu()
				}
				render() {
					const {
						hasNextPage: e,
						isDNInboxPromptBannerEnabled: t,
						isInboxExposureBannerEnabled: n,
						isInboxPrivacyPolicyBannerEnabled: s,
						isInboxInfiniteScrollEnabled: o,
						isLoggedIn: a,
						isPending: i,
						notifications: c,
						setDesktopNotificationsPromptSeen: l,
						setInboxExposureBannerSeen: d,
						setInboxPrivacyPolicyBannerSeen: m,
						showBrowserNotificationsPermissionSettings: p
					} = this.props, b = !(!c || !c.length), h = this.getContainerHeight(), f = c.length > this.state.currentNotificationCursorIndex + F, O = s || n || t;
					return r.a.createElement("div", {
						className: E.a.notificationList,
						ref: this.container,
						style: {
							height: h,
							maxHeight: h
						}
					}, O && r.a.createElement("div", {
						className: E.a.notificationBannerContainer
					}, s && r.a.createElement(v.a, {
						onClose: m,
						pageType: S.b.MiniInbox
					}), t && r.a.createElement(g, {
						onTurnOnBrowserNotifications: p,
						onClose: l
					}), n && r.a.createElement(y, {
						onClose: d
					})), !b && i && r.a.createElement(_.a, null), !b && !i && r.a.createElement(k.a, {
						isBannerEnabled: O,
						isLoggedIn: a
					}), b && this.renderNotifications(), o && b && !i && (e || f) && r.a.createElement(u.a, {
						onChange: this.loadNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: D
					}, r.a.createElement("div", null)))
				}
			}
			var U = n("./src/reddit/controls/InternalLink/index.tsx"),
				G = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				H = n("./src/reddit/hooks/useInboxExposureSeen.ts"),
				W = n("./src/reddit/hooks/useInboxPrivacyPolicyBannerSeen.ts"),
				q = n("./src/reddit/hooks/useTracking.ts"),
				V = n("./src/reddit/icons/fonts/index.tsx");

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Q = [],
				z = l.a.div("StyledDropdown", E.a),
				J = ({
					isLoggedIn: e,
					onMessagesClick: t,
					onBarClick: n,
					markAllAsRead: a,
					messagesBadgeCount: i,
					sendInboxClickSettings: l
				}) => {
					const u = !!i,
						m = Object(o.useCallback)(() => {
							t(), n()
						}, [t, n]),
						p = Object(o.useCallback)(() => {
							l(), n()
						}, [l, n]);
					return r.a.createElement("nav", {
						className: E.a.topNav
					}, r.a.createElement("span", {
						className: E.a.topNavTitle
					}, s.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), e && r.a.createElement("span", {
						className: E.a.topNavLinks
					}, r.a.createElement("span", {
						className: E.a.messagesLinkContainer
					}, r.a.createElement(U.a, {
						className: Object(c.a)(E.a.messagesLink, {
							[E.a.mActive]: u
						}),
						onClick: m,
						to: u ? "/message/unread" : "/message/messages"
					}, s.fbt._("Messages", null, {
						hk: "hulKY"
					}), r.a.createElement(d.a, {
						className: E.a.badgeCount,
						isActive: u,
						unreadCount: i
					}))), r.a.createElement("button", {
						className: E.a.navLink,
						onClick: a
					}, r.a.createElement(V.a, {
						name: "mark_read",
						className: E.a.icon
					})), r.a.createElement(U.a, {
						className: E.a.navLink,
						onClick: p,
						to: "/settings/notifications"
					}, r.a.createElement(V.a, {
						name: "settings",
						className: E.a.icon
					}))))
				},
				X = e => r.a.createElement("div", {
					className: E.a.bottomBar
				}, r.a.createElement(U.a, {
					className: E.a.bottomLink,
					onClick: () => {
						e.sendInboxClickSeeAll(), e.onBarClick()
					},
					to: "/notifications"
				}, s.fbt._("See All", null, {
					hk: "3L3tFc"
				}))),
				Y = e => {
					const t = Object(q.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: s,
							isPending: o,
							messagesBadgeCount: c,
							notifications: l,
							hideTooltip: d,
							isInboxExposureBannerEnabled: u,
							isInboxPolicyBannerEnabled: m,
							isLoggedIn: p,
							isDNInboxPromptBannerFirstTimeEnabled: b,
							isDNInboxPromptBannerPersistEnabled: h,
							userId: f
						} = e,
						[g, v] = Object(H.a)(f),
						[y, O] = Object(G.a)(f),
						[x, C] = Object(W.a)(f),
						P = !(!l || !l.length),
						j = Object(a.a)(),
						_ = j === i.a.Closed || j === i.a.Default || j === i.a.Denied,
						k = (b || h) && _ && !y;
					return r.a.createElement(z, null, r.a.createElement("div", {
						className: E.a.tooltipContainer
					}, r.a.createElement(J, {
						markAllAsRead: () => {
							e.markAllAsRead(), t(Object(S.g)({
								isMiniInbox: !0
							}))
						},
						messagesBadgeCount: c,
						onMessagesClick: () => {
							t(Object(S.o)({
								badgeCount: s,
								tab: S.e.Messages
							})), t(Object(S.h)()), n()
						},
						sendInboxClickSettings: () => t(Object(S.m)(S.b.MiniInbox)),
						onBarClick: d,
						isLoggedIn: p
					}), r.a.createElement(B, K({}, e, {
						isPending: o,
						onItemClick: d,
						setInboxExposureBannerSeen: v,
						setDesktopNotificationsPromptSeen: O,
						isInboxExposureBannerEnabled: u && !g,
						isDNInboxPromptBannerEnabled: k,
						isInboxPrivacyPolicyBannerEnabled: m && !x,
						setInboxPrivacyPolicyBannerSeen: C
					})), (P || o) && r.a.createElement(X, {
						sendInboxClickSeeAll: () => t(Object(S.l)()),
						onBarClick: d
					})))
				}
		},
		"./src/reddit/components/InboxTooltip/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "InboxTooltip",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("InboxTooltip").then(n.bind(null, "./src/reddit/components/InboxTooltip/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/InboxTooltip/index.tsx"
				}
			});
			t.a = o
		},
		"./src/reddit/components/InboxTooltip/hooked.m.less": function(e, t, n) {
			e.exports = {
				tooltip: "_3uJguwDAW5Ra1r4aegBvBq",
				visible: "_1TfMsQUAiVAqjXRo7s3R_t"
			}
		},
		"./src/reddit/components/InboxTooltip/index.m.less": function(e, t, n) {
			e.exports = {
				carot: "_389RY3FytRs4F82-BLVEiq",
				StyledDropdown: "_3fRnnkCBwqAZG6nmxhTKHr",
				styledDropdown: "_3fRnnkCBwqAZG6nmxhTKHr",
				tooltipContainer: "_3oNU8Gzy2V3jDPhFfeEFbD",
				topNav: "F0hrtz76LlopbY9X0wtDo",
				topNavTitle: "wdFbe8PT7DInxaiHo2Me1",
				messagesLinkContainer: "_1581SeO-Xb1j1kfhIRrIyB",
				topNavLinks: "_1R0ZV71kh7uwDXo7fn1eDk",
				messagesLink: "_27rjoZBkLhiqLLjBu-xU_p",
				"m-active": "_29xCmtH_l8UtRn8IP08VLB",
				mActive: "_29xCmtH_l8UtRn8IP08VLB",
				badgeCount: "_1mrhJHegVozrNeTH7r5svN",
				navLink: "_2l1d6HSQ764u0JcvRSEJXD",
				notificationList: "_2MId4QR3fPm4RPlrSTZg_E",
				notificationResizeWrapper: "_3PWmWL3sMw23-xBHydcnPf",
				emptyState: "_17HPdVVhdV3LWBjzHwGlhA",
				emptyTitle: "_2CY3n2AMoj0af7gQhj9dfI",
				emptyDescription: "HxBuWRTAFa8y8bMiQKdSJ",
				bottomBar: "_8INvnNiEMHRndJ0M-LiY",
				bottomLink: "X1WC7m4hrFQNzINreBRsv",
				icon: "_3pDOQfbIbQuT4PBwPGp85E",
				BellOutline: "SBkEJxL8i3eNB9EZn7AAz",
				bellOutline: "SBkEJxL8i3eNB9EZn7AAz",
				notificationBannerContainer: "_2prSjBmU3TS_Liup8DFR-2",
				welcomeTooltipContainer: "_1OZgaZvEs6sdhMUCqaUCW_",
				closeButton: "_3fWRL_DhsIqXjpW4eXDwmR",
				CloseIcon: "_2xK-Knp1-SUm_DxX4Ak1T0",
				closeIcon: "_2xK-Knp1-SUm_DxX4Ak1T0",
				tooltipTitle: "_3EmopbfaUR0bemuuUcEcko",
				tooltipDescription: "_3MtkPXIDbG9Hf6YeNOxAxv"
			}
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				rightBorderExp: "d2l2sN1D4PNVkzMmwALA2",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S",
				wrapperExp: "_1C67uwkUf95iJOZ63vDJOZ"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return g
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/componentSizes.ts"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/components/JumpToContent/index.m.less"),
				u = n.n(d);
			const m = Object(o.createContext)(null),
				p = Object(o.createContext)(null);
			class b extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						handleRef: null
					}, this.setHandleRef = e => {
						this.state.handleRef !== e && this.setState({
							handleRef: e
						})
					}
				}
				render() {
					return r.a.createElement(m.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, r.a.createElement(p.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const h = i.f + 10,
				f = r.a.memo(() => {
					const [e, t] = Object(o.useState)("-500px"), n = Object(o.useContext)(c.a);
					return r.a.createElement(m.Consumer, null, o => o && r.a.createElement("div", {
						className: Object(a.a)(u.a.wrapper, {
							[u.a.wrapperExp]: n
						}),
						"data-testid": "jump-to-content"
					}, r.a.createElement(l.t, {
						kind: l.b.Button,
						priority: l.c.Plain,
						className: u.a.button,
						style: {
							marginLeft: e
						},
						onBlur: e => {
							const n = e.currentTarget.clientWidth + 55;
							t(`-${n}px`)
						},
						onFocus: () => {
							t("0")
						},
						onClick: () => {
							o.focus(), o.scrollIntoView(), window.scrollBy(0, -h)
						}
					}, s.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), r.a.createElement("div", {
						className: Object(a.a)(u.a.rightBorder, {
							[u.a.rightBorderExp]: n
						})
					})))
				}),
				g = r.a.memo(() => r.a.createElement(p.Consumer, null, e => r.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/LightboxHeader/index.m.less": function(e, t, n) {
			e.exports = {
				container: "K4Eem3pMbRbAYioOfqN5E",
				isCollection: "_1_ihtgX_FgdbtB-rbz84r6",
				postDetails: "-DOLBAFWXMQX1Q3ErGO8I",
				mediaIcon: "_33YMDoIltkTaZemWTS7Yki",
				postTitle: "P9Qd6oTCWgLr3ackKg0I5",
				postTitleLink: "_1iZHnGYX-Wc90AM6BQQemg",
				membershipPaywallTitle: "SHwEfOV-Wq0AnI-uha8Ci",
				horizontalVotes: "_15Igkrvvp7jIfVHt0eKzFd",
				actions: "_25ONQRwoX20oeRXFl_FZXt",
				SubscribeButton: "_2W8hDtix416kR_AGDshJ1q",
				subscribeButton: "_2W8hDtix416kR_AGDshJ1q",
				visible: "_3hDL4MmXN5ibsBRoePashZ",
				CloseButton: "_2Mq93X6GCESH9CsQ6XVqOS",
				closeButton: "_2Mq93X6GCESH9CsQ6XVqOS"
			}
		},
		"./src/reddit/components/LightboxHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				d = n("./src/lib/constants/icons.ts"),
				u = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/shortcuts/close.ts"),
				p = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = n("./src/reddit/components/FlairWrapper/index.tsx"),
				h = n("./src/reddit/components/IdCard/helpers.ts"),
				f = n("./src/reddit/components/PostTitle/index.tsx"),
				g = n("./src/reddit/components/SubscribeButton/index.tsx"),
				v = n("./src/reddit/components/TrackingHelper/index.tsx"),
				y = n("./src/reddit/constants/colors.ts"),
				O = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/helpers/postCollection.ts"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				E = n("./src/reddit/models/Media/index.ts"),
				P = n("./src/reddit/models/Vote/index.ts"),
				j = n("./src/reddit/selectors/experiments/categories.ts"),
				_ = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				S = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				k = n("./src/reddit/selectors/platform.ts"),
				w = n("./src/reddit/selectors/subreddit.ts"),
				M = n("./src/reddit/contexts/Post/index.tsx"),
				N = n("./src/reddit/components/LightboxHeader/index.m.less"),
				I = n.n(N);
			const T = Object(i.c)({
					isInCategoriesExperiment: j.a,
					subreddit: (e, {
						page: t,
						post: n
					}) => {
						if (!t) return null;
						const s = n || Object(k.n)(e, {
							page: t
						});
						return (null == s ? void 0 : s.belongsTo) ? Object(w.I)(e, {
							identifier: s.belongsTo
						}) : null
					},
					post: k.n,
					joinOptimizationsLightboxHeaderEnabled: e => Object(_.b)(e) || Object(_.f)(e),
					isVoteCountAnimation: (e, {
						page: t,
						post: n
					}) => {
						if (!t && !n) return !1;
						const s = t && Object(k.n)(e, {
							page: t
						}) || n;
						return !!s && Object(S.g)(e, {
							post: s
						})
					}
				}),
				A = Object(a.b)(T, (e, {
					sendEvent: t
				}) => ({
					close: () => {
						e(Object(m.a)(t, !0))
					},
					toggleVote: (t, n) => e(n === P.a.upvoted ? Object(u.db)(t) : Object(u.w)(t))
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onVoteClick: s => {
						const o = e.post || n.post;
						o && t.toggleVote(o.id, s)
					}
				}));
			class R extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showSubscribeButton: !1
					}, this.closeLightbox = e => {
						e.preventDefault(), e.stopPropagation(), this.props.close()
					}, this.handleSubscribeButtonVisible = () => {
						this.setState({
							showSubscribeButton: !1
						})
					}, this.handleSubscribeButtonNotVisible = () => {
						this.setState({
							showSubscribeButton: !0
						})
					}
				}
				componentDidMount() {
					this.props.joinOptimizationsLightboxHeaderEnabled && (h.i.addListeners(h.b, this.handleSubscribeButtonVisible), h.i.addListeners(h.a, this.handleSubscribeButtonNotVisible))
				}
				componentWillUnmount() {
					this.props.joinOptimizationsLightboxHeaderEnabled && (h.i.removeListeners(h.b, this.handleSubscribeButtonVisible), h.i.removeListeners(h.a, this.handleSubscribeButtonNotVisible))
				}
				render() {
					var e;
					const {
						className: t,
						onCloseClick: n,
						onVoteClick: a,
						page: i,
						post: d,
						isVoteCountAnimation: u
					} = this.props, m = D[d && d.media ? d.media.type : E.o.EMBED], h = !d && (null === (e = null == i ? void 0 : i.meta) || void 0 === e ? void 0 : e.name) === l.Mb.META_MEMBERSHIP_PAYWALL_PAGE, v = d ? M.a : function({
						children: e,
						postId: t
					}) {
						return e
					};
					return r.a.createElement("div", {
						className: Object(c.a)(I.a.container, t, {
							[I.a.isCollection]: d && Object(x.a)(d)
						})
					}, r.a.createElement(v, {
						postId: null == d ? void 0 : d.id
					}, r.a.createElement("div", {
						className: I.a.postDetails
					}, d && r.a.createElement(o.Fragment, null, u ? void 0 : r.a.createElement(p.a, {
						className: I.a.horizontalVotes,
						compact: !1,
						light: !0,
						model: d,
						onVoteClick: a,
						redditStyle: !0
					}), r.a.createElement(C.a, {
						name: m,
						className: I.a.mediaIcon
					}), r.a.createElement(f.c, {
						className: I.a.postTitle,
						post: d,
						size: f.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: y.b.lightboxHeaderText,
						titleLinkClassName: I.a.postTitleLink,
						showCategoryTag: !0
					}), r.a.createElement(b.a, {
						post: d,
						nowrap: !0,
						sendEvent: this.props.sendEvent,
						showCategoryTag: this.props.isInCategoriesExperiment
					})), h && i && i.urlParams.subredditName && r.a.createElement("div", {
						className: I.a.membershipPaywallTitle
					}, s.fbt._("{communityName} Special Membership", [s.fbt._param("communityName", `r/${i.urlParams.subredditName}`)], {
						hk: "4vP4VY"
					}))), r.a.createElement("div", {
						className: I.a.actions
					}, this.props.joinOptimizationsLightboxHeaderEnabled && this.props.subreddit && r.a.createElement(g.a, {
						className: Object(c.a)(I.a.SubscribeButton, {
							[I.a.visible]: this.state.showSubscribeButton
						}),
						identifier: {
							name: this.props.subreddit.name,
							type: "subreddit"
						},
						onClick: e => e.stopPropagation(),
						small: !0
					}), r.a.createElement(L, {
						onClick: n || this.closeLightbox
					}))))
				}
			}
			const L = r.a.memo(e => r.a.createElement(O.t, {
					className: I.a.CloseButton,
					size: O.d.XS,
					onClick: e.onClick,
					priority: O.c.Plain,
					Icon: Object(C.b)("close"),
					text: s.fbt._("Close", null, {
						hk: "4gbyAA"
					}),
					title: s.fbt._("Close", null, {
						hk: "4gbyAA"
					}),
					"aria-label": s.fbt._("Close", null, {
						hk: "4gbyAA"
					})
				})),
				D = {
					[E.o.GIFVIDEO]: d.a.gif_post,
					[E.o.IMAGE]: d.a.image_post,
					[E.o.TEXT]: d.a.text_post,
					[E.o.RTJSON]: d.a.text_post,
					[E.o.VIDEO]: d.a.video_post,
					[E.o.EMBED]: d.a.embed,
					[E.o.LIVEVIDEO]: d.a.video_live,
					[E.o.GALLERY]: d.a.media_gallery,
					[E.o.LIVEAUDIO]: d.a.audio
				};
			t.a = Object(v.c)(A(R))
		},
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, n) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "n", (function() {
				return h
			})), n.d(t, "p", (function() {
				return f
			})), n.d(t, "o", (function() {
				return g
			})), n.d(t, "f", (function() {
				return v
			})), n.d(t, "m", (function() {
				return y
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "k", (function() {
				return C
			})), n.d(t, "g", (function() {
				return E
			})), n.d(t, "i", (function() {
				return P
			})), n.d(t, "q", (function() {
				return j
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "l", (function() {
				return S
			})), n.d(t, "t", (function() {
				return k
			})), n.d(t, "u", (function() {
				return w
			})), n.d(t, "r", (function() {
				return M
			})), n.d(t, "a", (function() {
				return N
			})), n.d(t, "s", (function() {
				return I
			})), n.d(t, "c", (function() {
				return T
			}));
			var s = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/controls/Input/ModalInput.tsx"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				d = n("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = n.n(d);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = o.a.wrapped(l.a, "CloseIcon", u.a),
				b = o.a.section("ModalBody", u.a),
				h = o.a.section("ModalPostPreview", u.a),
				f = o.a.p("ModalText", u.a),
				g = o.a.div("ModalSmallText", u.a),
				v = o.a.div("ModalDescriptionText", u.a),
				y = o.a.div("ModalMetaText", u.a),
				O = o.a.label("ModalFormItem", u.a),
				x = o.a.wrapped(c.a, "ModalInput", u.a),
				C = o.a.label("ModalInputLabel", u.a),
				E = o.a.footer("ModalFooter", u.a),
				P = o.a.header("ModalHeader", u.a),
				j = o.a.div("ModalTitle", u.a),
				_ = o.a.div("ModalAnnotation", u.a),
				S = o.a.div("ModalMain", u.a),
				k = o.a.textarea("TextArea", u.a),
				w = o.a.wrapped(i.l, "WarningButton", u.a),
				M = o.a.wrapped(i.l, "PrimaryButton", u.a),
				N = o.a.wrapped(i.o, "CancelButton", u.a),
				I = o.a.wrapped(i.r, "RemoveButton", u.a),
				T = ({
					className: e,
					...t
				}) => a.a.createElement(i.t, m({
					kind: i.b.Button,
					priority: i.c.Primary,
					className: Object(s.a)(u.a.ConfirmButton, e)
				}, t))
		},
		"./src/reddit/components/ModerationDropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const r = "Header--Moderation",
				a = () => null;
			t.b = Object(s.a)({
				ErrorComponent: a,
				getComponent: () => Object(o.a)(() => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModerationDropdown/_ModerationDropdown.tsx"))).then(e => e.default),
				LoadingComponent: a
			})
		},
		"./src/reddit/components/MutedUserList/MuteUserModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				o = n("./src/lib/loadWithRetries/index.ts");
			const r = () => null;
			t.a = Object(s.a)({
				ErrorComponent: r,
				getComponent: () => Object(o.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("ModQueue~ModQueuePages~ModerationPages"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/NotificationUnit/Loader.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "NotificationUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("NotificationUnit").then(n.bind(null, "./src/reddit/components/NotificationUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/NotificationUnit/index.tsx"
				}
			});
			t.a = o
		},
		"./src/reddit/components/NotificationUnit/Placeholder.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/NotificationUnit/index.m.less"),
				a = n.n(r);
			const i = () => o.a.createElement("li", {
					className: a.a.placeholderWrapper
				}, o.a.createElement("span", {
					className: a.a.placeholderAvatar
				}), o.a.createElement("span", {
					className: a.a.placeholderContent
				})),
				c = () => o.a.createElement("ol", null, o.a.createElement(i, null), o.a.createElement(i, null), o.a.createElement(i, null))
		},
		"./src/reddit/components/NotificationUnit/index.m.less": function(e, t, n) {
			e.exports = {
				notificationItem: "_3mUSJN4kdLCGjq-K-JLJw",
				unread: "_2n4UrzwZ3VBdRmFUYAHF_9",
				isNightMode: "_3ds5pVvIyBrh1GgQ2O7AFd",
				contextContainer: "_3T3J7R8JnlSfiFdB5bxe5h",
				link: "_1tpiOc0IxpDU113wUs4zi1",
				avatarContainer: "_2WN4-UdVoyjpLQ8mpNTQA",
				avatar: "_12V0IULSx8mSJHxdpHwOGE",
				nsfwAvatar: "_1Bzw8F6BC4Vk8OzAgnU0z3",
				notificationIconContainer: "_3smo-GSstogGTGh6ArpwI0",
				NotifIcon: "OzS9DxR-g3V71ZAeo2lbH",
				notifIcon: "OzS9DxR-g3V71ZAeo2lbH",
				RedditorIcon: "_23rEnykeBXjpsB9b72y8_1",
				redditorIcon: "_23rEnykeBXjpsB9b72y8_1",
				Separator: "_1caKsZ5CCRPSfIgoh608Ej",
				separator: "_1caKsZ5CCRPSfIgoh608Ej",
				topBar: "_3mGSd8RyCZhF_eqyrV_Bvk",
				title: "_180jOSBDwwE60X5UR8zt3-",
				timeAgo: "_2fQXbzOYQuzqlwMzxgtBKH",
				"m-tooltip": "_2a8MIP8QlMF7KPqTup62Vt",
				mTooltip: "_2a8MIP8QlMF7KPqTup62Vt",
				menuButton: "_8Q653FSGz7lD9Ux0AQsXY",
				isOpen: "WHFiF_asC8mzlevTdJv26",
				MenuIcon: "_2oVe02cXZA6mJa7WXHJFi5",
				menuIcon: "_2oVe02cXZA6mJa7WXHJFi5",
				contentContainer: "_3Q_e75oXJ8meqWwAQS36l2",
				body: "_2VDnxV3G5ZvEDq10Z-_fM9",
				ButtonIcon: "_25ecrisK-bGTesa4kIqyHR",
				buttonIcon: "_25ecrisK-bGTesa4kIqyHR",
				ReplyButtonIcon: "_1wAIwQaxmGHWzaHv-8jex_",
				replyButtonIcon: "_1wAIwQaxmGHWzaHv-8jex_",
				notificationButton: "_3doOacPPJ-LU-aBSoLl9TV",
				isUnread: "_2svu3lh5YfWQmYfACdB2J5",
				replyIcon: "_3LbCSOW9yuZK_CHzTuR9M5",
				postIcon: "_102yZEdZMcXLlu2Ri0KD9O",
				postEmbedContainer: "_1cndvAxAFPMUr8IaWuw_we",
				postEmbedContent: "_2fsQOzhZpW9XNu1RXtgzqW",
				deleted: "LypGzp3NJwjpkpsRn9Ocn",
				postEmbedTitleContainer: "_2XT3C7unUlQXgaiyeYfIYv",
				postEmbedTitle: "_1SZwyv3jy4dBipT0yC1CcI",
				postEmbedMeta: "_1LcCO3y9JhylZFlKsgvzHs",
				postEmbedBlurredThumbnailContainer: "_2EmrjrpYxkgB5_ljritGbO",
				postEmbedBlurredThumbnail: "_2a0rc3KL05PEnGmVWcQI8W",
				postEmbedThumbnail: "msJLWFmahK0W8JhaqYny9",
				postEmbedThumbnailBase: "_3CGVcVQDu97m9Oj_xs0n01",
				postEmbedNSFWThumbnailIndicator: "_2q-yvZHWG3Xp2YECYCI09S",
				postEmbedNsfwThumbnailIndicator: "_2q-yvZHWG3Xp2YECYCI09S",
				WarningIcon: "_2PzKGDccrg-BWzhhzJaJTs",
				warningIcon: "_2PzKGDccrg-BWzhhzJaJTs",
				StyledDropdown: "_1i_9WvxHOe7AlJZQ6w_-X9",
				styledDropdown: "_1i_9WvxHOe7AlJZQ6w_-X9",
				overflowMenuContainer: "_2UKt6pQu-os9uxZnfhPydP",
				overflowMenuOption: "_1g8x_Z2KsTf65RBk7dRBZm",
				placeholderWrapper: "_2iacm7sPgvO9z8gO1W7FoY",
				placeholderAvatar: "_2_cDiTNVpitX7CtTmIambB",
				placeholderContent: "_2KpinIkIJ7VxNGQgUgzJCA",
				glimmer: "_27pfB7o_o_4F4TdujFhrNO",
				PostUnavailableInfo: "_2lh6HxiG9gd6MKnaAag9Cu",
				postUnavailableInfo: "_2lh6HxiG9gd6MKnaAag9Cu",
				StateIcon: "_2RPeGp2zLx2hBQTZWSUTQK",
				stateIcon: "_2RPeGp2zLx2hBQTZWSUTQK",
				Text: "_2bba9zuFqUwxMhGdswkU86",
				text: "_2bba9zuFqUwxMhGdswkU86"
			}
		},
		"./src/reddit/components/OfflineBanner/index.m.less": function(e, t, n) {
			e.exports = {
				banner: "OEQgz7Lkj--3zFaLL7BUF",
				online: "_1HWVXJoazfrENIGlRprCVp",
				snoomoji: "_3BcAFuYpz37S0WFvgyWCUN",
				title: "_2hQKVL2Pm4yfkiqifapnBp",
				refresh: "_1E59q-NCGBwN0Aq_bPsPKb",
				hidden: "_2elztvdigLcbcRyu_4wcFW"
			}
		},
		"./src/reddit/components/Pill/PillText/index.m.less": function(e, t, n) {
			e.exports = {
				pillText: "_3CUdiRoAXQxoYJ-UeFCjPS",
				pillTextVariantDay: "_2SVIoeexI3lRGCH0NAYAMx",
				pillTextVariantNight: "QRGfIrC3QhcjQPpbXOPJy"
			}
		},
		"./src/reddit/components/Pill/index.m.less": function(e, t, n) {
			e.exports = {
				pillContainer: "_3LO_LEpMLN8-uaedpg6nl4"
			}
		},
		"./src/reddit/components/Pill/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Pill/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = ({
				children: e,
				className: t,
				...n
			}) => o.a.createElement("div", c({
				className: Object(r.a)(i.a.pillContainer, t)
			}, n), e)
		},
		"./src/reddit/components/PinnedSubscriptions/index.m.less": function(e, t, n) {
			e.exports = {
				title: "FRrbwuHy8Zmlubp3nowLZ",
				listHeader: "_3hELZctjzdizaWjW1al9DZ",
				unpin: "_2oY_N7NWiAv9m_mFIRdwVX",
				icon: "_3B-ny-D97ZKwdUyXAaWF19",
				Component: "_20fGT0XJD3MvX9yBsVeKMn",
				component: "_20fGT0XJD3MvX9yBsVeKMn"
			}
		},
		"./src/reddit/components/PostFlowUpsellModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "PostFlowUpsellModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("PostFlowUpsellModal").then(n.bind(null, "./src/reddit/components/PostFlowUpsellModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/PostFlowUpsellModal/index.tsx"
				}
			});
			Object(a.b)(i.a.POST_FLOW_UPSELL_MODAL_ID, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var l = c
		},
		"./src/reddit/components/PowerupsSidebar/SupportersListModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/PowerupsSidebar/SupportersListModal/modal.m.less"),
				l = n.n(c);
			const d = Object(s.a)({
				resolved: {},
				chunkName: () => "SupportersListModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("SupportersListModal").then(n.bind(null, "./src/reddit/components/PowerupsSidebar/SupportersListModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/PowerupsSidebar/SupportersListModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ECON_SUPPORTERS_LIST, e => r.a.createElement(d, {
				onOverlayClick: e,
				withOverlay: !0,
				className: l.a.modalBody
			}))
		},
		"./src/reddit/components/PowerupsSidebar/SupportersListModal/modal.m.less": function(e, t, n) {
			e.exports = {
				modalBody: "_2iaVQV4QQm863obinS6v2-"
			}
		},
		"./src/reddit/components/PremiumPurchaseModal/Loader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/makeAsync.tsx"),
				a = n("./src/lib/loadWithRetries/index.ts"),
				i = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				c = n("./src/reddit/constants/modals.ts"),
				l = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			const d = () => Object(a.a)(() => Promise.all([Promise.all([n.e("CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal"), n.e("PremiumPurchaseModal")]).then(n.bind(null, "./src/reddit/components/PremiumPurchaseModal/index.tsx")), Object(l.d)().catch(() => {})])).then(e => e[0].default),
				u = Object(r.a)({
					getComponent: d,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				});
			Object(i.b)(c.a.ECON_PREMIUM_PURCHASE, () => o.a.createElement(u, null))
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/raf/index.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				a = n.n(r);
			class i extends a.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && o.a.cancel(this.frame), this.frame = o()(this.props.onResize)
					}, this.containerRef = e.containerRef
				}
				shouldComponentUpdate() {
					return !1
				}
				componentDidMount() {
					this.createSensor()
				}
				createSensor() {
					if (!this.containerRef || this.sensor) return;
					this.sensor = document.createElement("object"), this.sensor.setAttribute("style", "\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n      pointer-events: none;\n      z-index: -1;\n    "), this.sensor.setAttribute("tabindex", "-1"), this.sensor.onload = () => {
						this.props.onResize(), this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.addEventListener("resize", this.handleResize)
					}, this.sensor.type = "text/html";
					const e = this.isIE();
					e && this.containerRef.appendChild(this.sensor), this.sensor.data = "about:blank", e || this.containerRef.appendChild(this.sensor), this.props.onResize()
				}
				componentWillUnmount() {
					this.sensor && (this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.removeEventListener("resize", this.handleResize), this.containerRef && this.containerRef.removeChild(this.sensor))
				}
				render() {
					return a.a.createElement("div", {
						ref: this.setContainerRef
					})
				}
			}
		},
		"./src/reddit/components/Root/AdminPanelLoader.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/runTimeEnvVars.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const l = Object(s.a)({
				resolved: {},
				chunkName: () => "AdminPanel",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("vendors~AdminPanel"), n.e("AdminPanel")]).then(n.bind(null, "./src/reddit/components/AdminPanel/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/AdminPanel/index.tsx"
				}
			});

			function d() {
				return Object(a.e)(e => Object(i.b)(e) || Object(c.H)(e)) ? r.a.createElement(l, null) : null
			}
		},
		"./src/reddit/components/Root/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1VP69d9lk-Wk9zokOaylL",
				containerExp: "KDkLHOpoLUZvoYQUBe9nF"
			}
		},
		"./src/reddit/components/ShortcutIndexModal/index.m.less": function(e, t, n) {
			e.exports = {
				ColumnLabel: "_3RwBfA8Nrz_fZLCoxbAAmA",
				columnLabel: "_3RwBfA8Nrz_fZLCoxbAAmA",
				ColumnWrapper: "_2fnA79IIdtL-mNZYnvBalc",
				columnWrapper: "_2fnA79IIdtL-mNZYnvBalc",
				Column: "_3O97w7RY6RBkLbc3u-Mg4u",
				column: "_3O97w7RY6RBkLbc3u-Mg4u",
				Description: "_2rgXACgxMtUDCuKcGDK6tL",
				description: "_2rgXACgxMtUDCuKcGDK6tL",
				Key: "_3Ren-BGfEFUtj5MNFV9jGZ",
				key: "_3Ren-BGfEFUtj5MNFV9jGZ",
				ModalMain: "_3SVP64qu6nV3rRil6Mkvmk",
				modalMain: "_3SVP64qu6nV3rRil6Mkvmk",
				ModalBody: "_3MZjFI9WV4spd-w0yXdEAG",
				modalBody: "_3MZjFI9WV4spd-w0yXdEAG",
				PrimaryButton: "_2eEY2Q9pfXNNh2P9nh8cn4",
				primaryButton: "_2eEY2Q9pfXNNh2P9nh8cn4",
				TextButton: "_1RrzHtukV58ONGeHXBNR7t",
				textButton: "_1RrzHtukV58ONGeHXBNR7t",
				ConnectedModal: "_1qRgDlLw5wytfgHvP96-gS",
				connectedModal: "_1qRgDlLw5wytfgHvP96-gS"
			}
		},
		"./src/reddit/components/ShortcutWrapper/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "ShortcutWrapper",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ShortcutWrapper").then(n.bind(null, "./src/reddit/components/ShortcutWrapper/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/ShortcutWrapper/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = o
		},
		"./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less": function(e, t, n) {
			e.exports = {
				shortcutDiv: "hciOr5UGrnYrZxB11tX9s"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class a extends o.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return o.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var i = Object(r.a)(a);
			t.a = e => o.a.createElement(i, e)
		},
		"./src/reddit/components/SubredditCreationModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "SubredditCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("SubredditCreation").then(n.bind(null, "./src/reddit/components/SubredditCreationModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/SubredditCreationModal/index.tsx"
				}
			});
			Object(a.b)(i.a.SUBREDDIT_CREATION_MODAL_ID, e => r.a.createElement(c, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			var l = c
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				l = n.n(c),
				d = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = (e, t, n) => null != n ? n : t ? e : a.c.Plain,
				p = ({
					border: e,
					priority: t,
					small: n,
					...s
				}) => r.a.createElement(a.t, u({}, s, {
					priority: m(a.c.Primary, e, t),
					className: Object(d.a)(s.className, l.a.BaseButton),
					size: n ? a.d.S : a.d.M
				})),
				b = e => r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: l.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? s.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : s.fbt._("Following", null, {
					hk: "1wQlVR"
				})), r.a.createElement("span", {
					className: l.a.UnsubscribeButtonHover
				}, "subreddit" === e ? s.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : s.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				h = ({
					buttonType: e,
					border: t,
					priority: n,
					small: s,
					...o
				}) => r.a.createElement(a.t, u({}, o, {
					priority: m(a.c.Secondary, t, n),
					className: Object(d.a)(o.className, l.a.BaseButton),
					size: s ? a.d.S : a.d.M,
					text: b(e)
				}));
			class f extends r.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: n,
						priority: s,
						small: o = !1,
						isFullWidth: a = !1
					} = this.props, c = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: s,
						small: o,
						isFullWidth: a
					};
					return this.props.userIsSubscriber ? r.a.createElement(h, u({}, c, {
						buttonType: this.props.identifier.type
					})) : r.a.createElement(p, u({}, c, {
						id: n
					}), this.props.children, Object(i.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				o = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				r = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(o.a)(Object(s.c)(r.a))
		},
		"./src/reddit/components/Survey/hooks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return C
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "b", (function() {
				return P
			})), n.d(t, "c", (function() {
				return j
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/isEqual.js"),
				r = n.n(o),
				a = n("./node_modules/react/index.js"),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/reddit/actions/preferences.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/helpers/survey/index.ts"),
				u = n("./src/reddit/selectors/survey.ts"),
				m = n("./src/reddit/selectors/telemetry.ts");
			const p = (e, t) => {
					const n = Object(u.c)(e),
						s = Object(u.a)(e);
					if (n && s) return {
						experiment_name: "desktop_local_survey_demo",
						experiment_variant: `trigger_${s}`,
						experiment_version: -1
					};
					const o = m.experiment(e, t);
					return o ? {
						experiment_name: o.name,
						experiment_variant: o.variant,
						experiment_version: o.version
					} : {}
				},
				b = e => {
					switch (e) {
						case d.a.CES:
							return "ces";
						case d.a.CSAT:
							return "csat";
						case d.a.NPS:
							return "nps"
					}
				},
				h = (e, t) => n => ({
					source: "survey",
					action: t,
					noun: "intro",
					...m.defaults(n),
					survey: p(n, e)
				}),
				f = ({
					action: e,
					experimentName: t,
					question: n,
					score: s,
					type: o
				}) => r => ({
					source: "survey",
					action: e,
					noun: "rating",
					...m.defaults(r),
					survey: {
						type: b(o),
						min: o === d.a.NPS ? 0 : 1,
						max: o === d.a.NPS ? 10 : 7,
						question: n,
						score: s,
						...p(r, t)
					}
				}),
				g = ({
					action: e,
					experimentName: t,
					question: n,
					text: s,
					type: o
				}) => r => ({
					source: "survey",
					action: e,
					noun: "freeform_text",
					...m.defaults(r),
					survey: {
						question: n,
						type: b(o),
						text: s,
						...p(r, t)
					}
				});
			var v = n("./src/reddit/hooks/useTracking.ts"),
				y = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/selectors/experiments/index.ts"),
				x = n("./src/reddit/selectors/user.ts");
			const C = () => {
					const e = Object(i.d)(),
						[t, n] = Object(a.useState)(null),
						s = Object(v.a)(),
						o = Object(i.e)(x.i),
						l = Object(i.e)(x.sb),
						m = Object(i.e)(O.a, r.a),
						p = Object(i.e)(u.c),
						b = Object(i.e)(u.a),
						f = Object(i.e)(u.b),
						g = Object(i.e)(u.d),
						y = Object(a.useMemo)(() => {
							const e = Object(d.g)(),
								t = {};
							for (const n of e) t[n] = m[n];
							return t
						}, [m]),
						C = Object(a.useCallback)(e => {
							const s = Object(d.f)({
								triggerName: e,
								surveyExperimentVariants: y,
								samplingId: o || l,
								isDemoEnabled: p,
								activeDemoTrigger: b,
								demoTriggerThreshold: f,
								isSampleFactorEnabled: g
							});
							if (p) return void(s && n(s));
							if (!s || s === t) return;
							const r = y[s.experiment_name];
							(null == r ? void 0 : r.variant) && s.variants[r.variant] && setTimeout(() => n(s), 500)
						}, [t, y, o, l, g, p, b, f]);
					return Object(a.useEffect)(() => {
						const e = Object(d.d)(),
							t = e.subscribe(C);
						return () => e.unsubscribe(t)
					}, [C]), Object(a.useEffect)(() => {
						if (!t) return;
						const n = Date.now();
						Object(d.i)(t, n), e(Object(c.H)({
							surveyLastSeenTime: n
						}, !1)), s(h(t.experiment_name, "display"))
					}, [t, e, s]), {
						activeSurvey: t,
						setActiveSurvey: n
					}
				},
				E = ({
					activeStepNum: e,
					activeSurvey: t,
					isFollowUp: n,
					textResponse: s,
					setTextResponse: o,
					setIsSurveyDismissed: r
				}) => {
					(({
						isFollowUp: e,
						textResponse: t
					}) => {
						const n = Object(a.useCallback)(n => {
							if (e && t.length) return n.preventDefault(), n.returnValue = "sure?", "sure?"
						}, [e, t]);
						Object(a.useEffect)(() => (window.addEventListener("beforeunload", n), () => window.removeEventListener("beforeunload", n)), [n])
					})({
						isFollowUp: n,
						textResponse: s
					});
					const [i, c] = Object(a.useState)(!1), l = Object(v.a)(), d = t.experiment_name, u = t.steps[e], m = null == u ? void 0 : u.type, p = null == u ? void 0 : u.question, b = Object(a.useCallback)(() => {
						e >= 0 ? c(!0) : (r(!0), l(h(t.experiment_name, "dismiss")))
					}, [e, t, l, r]), y = Object(a.useCallback)(() => {
						o(""), r(!0), l(n ? g({
							experimentName: d,
							action: "dismiss",
							type: m,
							question: p
						}) : f({
							experimentName: d,
							action: "dismiss",
							type: m,
							question: p
						}))
					}, [d, n, p, l, r, o, m]);
					return {
						isLeavingModalShowing: i,
						onClose: b,
						onLeaveCancel: Object(a.useCallback)(() => c(!1), []),
						onLeaveConfirm: y
					}
				},
				P = ({
					activeSurvey: e,
					selectedNumber: t,
					setIsSurveyDismissed: n,
					setSelectedNumber: s,
					setTextResponse: o,
					textResponse: r
				}) => {
					const [i, c] = Object(a.useState)(-1), [l, u] = Object(a.useState)(0), [m, p] = Object(a.useState)(!1), b = Object(v.a)(), y = Object(a.useCallback)(() => {
						const a = e.experiment_name,
							v = e.steps[i],
							y = null == v ? void 0 : v.type,
							O = null == v ? void 0 : v.question,
							x = null == v ? void 0 : v.follow_up_question,
							C = e.steps[i + 1],
							E = null == C ? void 0 : C.type,
							P = null == C ? void 0 : C.question;
						if (u(l + 1), -1 === i) return b(h(a, "agree")), c(0), void b(f({
							experimentName: a,
							action: "display",
							type: E,
							question: P
						}));
						b(m ? g({
							experimentName: a,
							action: "submit",
							type: y,
							text: r,
							question: x
						}) : f({
							experimentName: a,
							action: "submit",
							question: O,
							type: y,
							score: t && t + (y === d.a.NPS ? 0 : 1)
						})), s(void 0), o(""), m || !x ? (p(!1), i + 1 >= e.steps.length ? n(!0) : (c(i + 1), b(f({
							experimentName: a,
							action: "display",
							type: E,
							question: P
						})))) : (p(!0), b(g({
							experimentName: a,
							action: "display",
							type: y,
							question: x
						})))
					}, [i, e, m, r, t, b, n, s, o, l]);
					return {
						activeStepNum: i,
						isFollowUp: m,
						onStepComplete: y,
						uiStep: l,
						setActiveStepNum: c,
						setUIStep: u,
						setIsFollowUp: p
					}
				},
				j = ({
					isSurveyDismissed: e,
					setIsSurveyDismissed: t,
					setActiveStepNum: n,
					setActiveSurvey: o,
					setUIStep: r,
					setIsFollowUp: c,
					shouldMount: d,
					uiStep: u
				}) => {
					const m = Object(i.d)();
					Object(a.useEffect)(() => {
						e && !d && setTimeout(() => {
							n(-1), r(0), c(!1), o(null), u > 1 && m(Object(l.f)({
								text: s.fbt._("Thanks for your feedback!", null, {
									hk: "11jNYw"
								}),
								kind: y.b.SuccessCommunityGreen
							}))
						}, 500)
					}, [m, e, d, u, t, n, o, r, c])
				}
		},
		"./src/reddit/components/Survey/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/Survey/hooks.ts");
			const i = Object(s.a)({
				resolved: {},
				chunkName: () => "SurveyAsync",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("SurveyAsync").then(n.bind(null, "./src/reddit/components/Survey/Async.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Survey/Async.tsx"
				}
			});

			function c() {
				const {
					activeSurvey: e,
					setActiveSurvey: t
				} = Object(a.d)();
				return e ? r.a.createElement(i, {
					activeSurvey: e,
					setActiveSurvey: t
				}) : null
			}
		},
		"./src/reddit/components/ThemeProvider/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/objectSelector/index.ts"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/contexts/PageLayer/selectors.ts"),
				u = n("./src/reddit/models/StructuredStyles/index.ts"),
				m = n("./src/reddit/models/Theme/index.ts"),
				p = n("./src/reddit/selectors/structuredStyles.ts"),
				b = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				f = n("./src/lib/CSSVariableProvider/index.tsx"),
				g = n("./src/lib/isAdHocMultireddit/index.ts");
			const v = (e, t) => t.forceRedditTheme ? void 0 : void 0 !== t.subredditName ? t.subredditName : Object(d.p)(e, t);
			class y extends r.a.Component {
				render() {
					const {
						children: e,
						isRootOrUniqueClassName: t,
						theme: n
					} = this.props;
					return r.a.createElement(f.e, {
						theme: n,
						isRootOrUniqueClassName: t
					}, e)
				}
			}
			const O = Object(a.b)(() => Object(i.a)(e => e.themes.current, e => !!Object(p.i)(e), e => {
				if (Object(p.i)(e)) return e.structuredStyles.draft
			}, (e, t) => {
				if (Object(p.i)(e)) return Object(p.f)(e, t)
			}, v, Object(c.a)((e, t) => {
				if (Object(p.i)(e) || Object(h.kb)(e)) return;
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.B)(e, n);
				if (!s) return;
				if (Object(h.jb)(e, {
						subredditId: s
					})) return;
				const o = e.structuredStyles.models[s];
				return o || void 0
			}), (e, t) => {
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.t)(e, {
					subredditName: n
				});
				return s ? s.emojisCustomSize : void 0
			}, (e, t) => {
				if (t.forceDayMode) return !1;
				return Object(h.ub)(e).nightmode
			}, (e, t) => {
				const n = Object(h.ub)(e);
				if (Object(h.K)(e)) return !n.hideNSFW;
				const s = v(e, t);
				if (s) {
					const t = Object(b.w)(e, {
						subredditName: s
					});
					return !(!t || !t.isNSFW)
				}
				const o = Object(d.e)(e, t);
				return !!o && o.isNSFW
			}, (e, t) => t.isOverlay, (e, t) => t.isCommentsPage, (e, t, n, o, r, a, i, c, l, d, p) => {
				const b = {
						...i ? {
							emojiWidth: i[0],
							emojiHeight: i[1]
						} : {},
						shouldShowNSFWContent: l,
						isCommentsPage: p,
						isOverlay: d
					},
					h = r && r.length && !Object(g.a)(r) ? `subredditvars-r-${r.toLocaleLowerCase()}` : f.c;
				if (t && n && o) {
					const e = Object(u.h)(n, o);
					return {
						isRootOrUniqueClassName: h,
						theme: Object(m.i)(e, b)
					}
				}
				if (a) {
					const e = Object(u.h)(a);
					let t;
					return {
						isRootOrUniqueClassName: h,
						theme: t = c ? Object(m.h)(e, b) : Object(m.i)(e, b)
					}
				}
				return {
					isRootOrUniqueClassName: h,
					theme: Object(s.merge)(e, {
						subredditContext: b
					})
				}
			}))(y);
			t.b = O;
			const x = Object(l.u)()(O)
		},
		"./src/reddit/components/Toaster/EuCookiePolicyToast.m.less": function(e, t, n) {
			e.exports = {
				Icon: "_2pPCvXlD2wzNO9taY3pzqw",
				icon: "_2pPCvXlD2wzNO9taY3pzqw",
				PrimaryButton: "_1tI68pPnLBjR1iHcL7vsee",
				primaryButton: "_1tI68pPnLBjR1iHcL7vsee",
				Bread: "_3RhWPJfjpsEoBw52x0fQp2",
				bread: "_3RhWPJfjpsEoBw52x0fQp2",
				EuCookiePolicyBody: "_3vKcvhm0JtGJa_zEd1cO2w",
				euCookiePolicyBody: "_3vKcvhm0JtGJa_zEd1cO2w",
				EuCookiePolicyOptions: "_2BNSty-Ld4uppTeWGfEe8r",
				euCookiePolicyOptions: "_2BNSty-Ld4uppTeWGfEe8r"
			}
		},
		"./src/reddit/components/Toaster/MilestoneToast.m.less": function(e, t, n) {
			e.exports = {
				Container: "_3Cb-J_TUgYhl23GF1E8ueS",
				container: "_3Cb-J_TUgYhl23GF1E8ueS",
				SideImage: "_3noiB6ClBZxqX-VfENVYha",
				sideImage: "_3noiB6ClBZxqX-VfENVYha",
				Main: "_2uE5iMLmEfZ_HNjn85c1NP",
				main: "_2uE5iMLmEfZ_HNjn85c1NP",
				SubTitle: "_2dvmXQB_w1cCQdCLjHGb0F",
				subTitle: "_2dvmXQB_w1cCQdCLjHGb0F",
				PrimaryLinkButton: "_2JcKYVeW6FIeewNVpxApr6",
				primaryLinkButton: "_2JcKYVeW6FIeewNVpxApr6",
				CloseIcon: "_1kI4teIozhxDil2omCIIs5",
				closeIcon: "_1kI4teIozhxDil2omCIIs5"
			}
		},
		"./src/reddit/components/Toaster/PlainBread.m.less": function(e, t, n) {
			e.exports = {
				PlainBread: "trdUvQxqQHHqQKOUBcgnr",
				plainBread: "trdUvQxqQHHqQKOUBcgnr"
			}
		},
		"./src/reddit/components/Toaster/StyledComponents.m.less": function(e, t, n) {
			e.exports = {
				Text: "_7JH6kQpO-bx66b9ajIZrz",
				text: "_7JH6kQpO-bx66b9ajIZrz"
			}
		},
		"./src/reddit/components/Toaster/UappBannerToast.m.less": function(e, t, n) {
			e.exports = {
				Icon: "NODQrxMsajJv0SMw0Glss",
				icon: "NODQrxMsajJv0SMw0Glss",
				PrimaryButton: "_-660JDG_NhSvu-lby-LYB",
				primaryButton: "_-660JDG_NhSvu-lby-LYB",
				Bread: "_3jUV8naze01hV-7EqsBdjm",
				bread: "_3jUV8naze01hV-7EqsBdjm"
			}
		},
		"./src/reddit/components/Toaster/index.m.less": function(e, t, n) {
			e.exports = {
				AuthErrorToastIcon: "_2Jt0Cjod2bIVz4VEgb6ZNn",
				authErrorToastIcon: "_2Jt0Cjod2bIVz4VEgb6ZNn",
				AuthErrorToastPrimaryButton: "_1BkkYahLrqvrnZoHHBH9pU",
				authErrorToastPrimaryButton: "_1BkkYahLrqvrnZoHHBH9pU",
				CustomIcon: "_3F4cPSBsBgzFOcnpe466x-",
				customIcon: "_3F4cPSBsBgzFOcnpe466x-",
				SnooFacepalm: "_33UT9FofKPRVp4gDnLAM-6",
				snooFacepalm: "_33UT9FofKPRVp4gDnLAM-6",
				SnooHappy: "_5OZRCtpmuaH0Is4CZ7GpZ",
				snooHappy: "_5OZRCtpmuaH0Is4CZ7GpZ",
				SubredditIcon: "_-43TYgcIz7mHcgQHam-CV",
				subredditIcon: "_-43TYgcIz7mHcgQHam-CV",
				UnlockIcon: "tClrg2w16xkW4hmCj8nTo",
				unlockIcon: "tClrg2w16xkW4hmCj8nTo",
				LockIcon: "ZI0D2mGVpaunJEvFji7pm",
				lockIcon: "ZI0D2mGVpaunJEvFji7pm",
				RemoveIcon: "vvMBwTMgHpgz4UTQ4H_nJ",
				removeIcon: "vvMBwTMgHpgz4UTQ4H_nJ",
				Container: "_3q-XSJ2vokDQrvdG6mR__k",
				container: "_3q-XSJ2vokDQrvdG6mR__k",
				Bread: "EjdBJNEwygtHMKiHd3Bnv",
				bread: "EjdBJNEwygtHMKiHd3Bnv",
				mModal: "_29WPjLJ0vRIyLIUC_lQ4a8",
				ButtonsWrapper: "_2-rGW3UtrT-pD45pofU3tx",
				buttonsWrapper: "_2-rGW3UtrT-pD45pofU3tx",
				ContentWrapper: "_21oJwLzDt5kLN6scufKBab",
				contentWrapper: "_21oJwLzDt5kLN6scufKBab"
			}
		},
		"./src/reddit/components/Upsell/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
					resolved: {},
					chunkName: () => "BottomCellWrapper",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("BottomCellWrapper").then(n.bind(null, "./src/reddit/components/Upsell/BottomCellWrapper/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Upsell/BottomCellWrapper/index.tsx"
					}
				}, {
					ssr: !1
				}),
				r = Object(s.a)({
					resolved: {},
					chunkName: () => "BottomSheetUpsellWrapper",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("BottomSheetUpsellWrapper").then(n.bind(null, "./src/reddit/components/Upsell/BottomSheetUpsellWrapper/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Upsell/BottomSheetUpsellWrapper/index.tsx"
					}
				}, {
					ssr: !1
				})
		},
		"./src/reddit/components/UserFlairPicker/index.m.less": function(e, t, n) {
			e.exports = {
				buttonsRow: "_2jjk9b3mpveU6Vpam4kPBm",
				rightSideButtons: "_1DUcff8CoMLomEzQZ1S6IX",
				clearButton: "_2HCY4xCLt3RKVIgnkh0ZgW",
				goBackButton: "saAxhszfFnlBT8m48Quv9",
				Section: "_3dGLI85CRTmDAbSQrDiQZl",
				section: "_3dGLI85CRTmDAbSQrDiQZl",
				CheckboxText: "_2pIwiaNLf5jaTR1EK7Nx09",
				checkboxText: "_2pIwiaNLf5jaTR1EK7Nx09"
			}
		},
		"./src/reddit/components/UserIcon/CurrentUserIcon.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/helpers/userSnoovatar/index.ts"),
				l = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/components/UserIcon/PresenceDot.tsx"),
				u = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				m = n("./src/reddit/components/UserIcon/UserIcon.tsx"),
				p = n("./src/reddit/components/UserIcon/UserIcon.m.less"),
				b = n.n(p);

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const f = Object(i.c)({
					currentUser: l.k,
					isNightMode: l.X,
					isPresenceUserPrefEnabled: l.P,
					shouldHideNSFW: l.C
				}),
				g = Object(a.b)(f);
			t.a = g(e => {
				const {
					currentUser: t,
					shouldShowPresenceIndicator: n,
					isPresenceUserPrefEnabled: o,
					wrapperClassName: a,
					...i
				} = e, l = Object(c.a)(null == t ? void 0 : t.accountIcon);
				return r.a.createElement("div", {
					className: Object(s.a)(b.a.currentUserIconWrapper, a)
				}, l ? r.a.createElement(u.a, {
					headshot: t.accountIcon,
					className: e.className
				}) : r.a.createElement(m.b, h({}, i, {
					iconUrl: t ? t.accountIcon : void 0,
					isCurrentUser: !0,
					isNSFW: !!t && t.isNSFW
				})), n && r.a.createElement(d.default, {
					showPresence: !0
				}))
			})
		},
		"./src/reddit/components/VerticalVotes/votes.m.less": function(e, t, n) {
			e.exports = {
				customDownvote: "ceU_3ot04pOVIcrrXH9fY",
				compact: "_3sO1xEnOT_9CQBjRzczQjS",
				voted: "_8dpZTfzgKPKCUTjp9SAn1",
				customUpvote: "_2k73nZrjAYiwAj9hv7K-kq"
			}
		},
		"./src/reddit/components/VerticalVotes/votes.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return M
			})), n.d(t, "b", (function() {
				return N
			})), n.d(t, "c", (function() {
				return I
			})), n.d(t, "d", (function() {
				return T
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx");
			const i = (e, t, n) => s => {
				const o = e(s),
					a = t(s),
					i = !o && a;
				return Object(r.a)(n.baseClassName, s.className, {
					[n.mIsInteractive]: a,
					[n.mIsActive]: o,
					[n.mIsVoteable]: i
				})
			};
			var c = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				l = n("./src/reddit/models/Vote/index.ts"),
				d = n("./src/reddit/controls/Downvote/index.m.less"),
				u = n.n(d);
			const m = {
					...u.a,
					baseClassName: u.a.Downvote
				},
				p = ({
					voteState: e
				}) => e === l.a.downvoted,
				b = i(p, ({
					interactive: e
				}) => !1 !== e, m);
			var h = e => o.a.createElement(c.a, {
					className: b(e),
					compact: e.compact,
					isFilled: p(e)
				}),
				f = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				g = n("./src/reddit/controls/Upvote/index.m.less"),
				v = n.n(g);
			const y = {
					...v.a,
					baseClassName: v.a.Upvote
				},
				O = ({
					voteState: e
				}) => e === l.a.upvoted,
				x = i(O, ({
					interactive: e
				}) => !1 !== e, y);
			var C = e => o.a.createElement(f.a, {
					className: x(e),
					compact: e.compact,
					isFilled: O(e)
				}),
				E = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				P = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				j = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				_ = n("./src/reddit/components/VerticalVotes/votes.m.less"),
				S = n.n(_);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const w = e => Object(r.a)({
					[S.a.compact]: e.compact,
					[S.a.dark]: Object(P.b)(Object(E.a)(e)),
					[S.a.nightmode]: e.isNightMode
				}),
				M = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(j.a)(e), n = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: s,
						isNightMode: a,
						voteState: i,
						compact: c,
						...d
					} = e;
					return o.a.createElement("button", k({}, d, {
						className: Object(r.a)(S.a.customDownvote, w(e), {
							[S.a.voted]: e.voteState === l.a.downvoted
						}, e.className),
						style: n
					}))
				}),
				N = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(j.a)(e), n = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: s,
						isNightMode: a,
						voteState: i,
						compact: c,
						...d
					} = e;
					return o.a.createElement("button", k({}, d, {
						className: Object(r.a)(S.a.customUpvote, w(e), {
							[S.a.voted]: e.voteState === l.a.upvoted
						}, e.className),
						style: n
					}))
				}),
				I = h,
				T = C
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/structuredStyles/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const l = Object(o.c)({
				bladeHasUnsavedChanges: i.a,
				isEditing: i.i,
				isBladeEditorDirty: i.h,
				isModalOpen: Object(a.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(s.b)(l, (e, {
				subredditId: t
			}) => ({
				requestCloseBlade: () => t && e(Object(r.h)(t))
			}))
		},
		"./src/reddit/constants/accountManager.ts": function(e, t, n) {
			"use strict";
			var s, o, r, a;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "a", (function() {
					return o
				})), n.d(t, "d", (function() {
					return r
				})), n.d(t, "b", (function() {
					return a
				})),
				function(e) {
					e.ChangePassword = "/change_password/", e.Index = "/login/", e.Register = "/register/", e.EnableTwoFactor = "/2fa/enable/", e.DisableTwoFactor = "/2fa/disable/", e.TwoFactorBackupCodes = "/2fa/backup-keys/", e.LinkAppleSSO = "/account/sso/link/?provider=apple", e.UnlinkAppleSSO = "/account/sso/unlink/?provider=apple", e.LinkGoogleSSO = "/account/sso/link/?provider=google", e.UnlinkGoogleSSO = "/account/sso/unlink/?provider=google", e.GoogleOneTap = "/account/sso/one_tap/", e.Onboarding = "/account/onboarding/"
				}(s || (s = {})),
				function(e) {
					e.ChangePassword = "changePassword", e.Close = "close", e.CreateAccount = "createAccount", e.GoogleOneTapDisplayed = "googleOneTapDisplayed", e.GoogleOneTapFlowFailed = "googleOneTapFlowFailed", e.GoogleOneTapSkipped = "googleOneTapSkipped", e.Login = "login", e.PreferenceStatus = "preferenceStatus", e.Register = "register", e.Resize = "resize", e.ShowStep = "showStep", e.SSOLinkFail = "ssoLinkFail", e.SSOLinkSuccess = "ssoLinkSuccess", e.SSOUnlinkFail = "ssoUnlinkFail", e.SSOUnlinkSuccess = "ssoUnlinkSuccess", e.Subscribe = "subscribe", e.TwoFactorChanged = "twoFactorChanged"
				}(o || (o = {})),
				function(e) {
					e.Embed = "embed", e.Modal = "modal"
				}(r || (r = {})),
				function(e) {
					e.SelectAccount = "select-account", e.Email = "email", e.EmailOptIn = "email-opt-in", e.GoogleUI = "google-ui", e.Subscribe = "subscribe", e.UsernameAndPassword = "username-and-password"
				}(a || (a = {}))
		},
		"./src/reddit/constants/componentSizes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "j", (function() {
				return u
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "m", (function() {
				return p
			})), n.d(t, "q", (function() {
				return b
			})), n.d(t, "r", (function() {
				return h
			})), n.d(t, "s", (function() {
				return f
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "t", (function() {
				return v
			})), n.d(t, "v", (function() {
				return y
			})), n.d(t, "w", (function() {
				return O
			})), n.d(t, "l", (function() {
				return x
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "o", (function() {
				return P
			})), n.d(t, "p", (function() {
				return j
			}));
			const s = 284,
				o = 450,
				r = 800,
				a = 284,
				i = 48,
				c = 640,
				l = 1600,
				d = 1280,
				u = 40,
				m = 48,
				p = 24,
				b = 24,
				h = 312,
				f = 40,
				g = 270,
				v = 106,
				y = 5,
				O = 16,
				x = 1250,
				C = 82,
				E = 48,
				P = 36,
				j = 40
		},
		"./src/reddit/constants/keycodes.ts": function(e, t, n) {
			"use strict";
			var s, o;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e[e.ArrowDown = 40] = "ArrowDown", e[e.ArrowLeft = 37] = "ArrowLeft", e[e.ArrowRight = 39] = "ArrowRight", e[e.ArrowUp = 38] = "ArrowUp", e[e.Backspace = 8] = "Backspace", e[e.Delete = 46] = "Delete", e[e.Enter = 13] = "Enter", e[e.Escape = 27] = "Escape", e[e.F = 70] = "F", e[e.K = 75] = "K", e[e.Space = 32] = "Space", e[e.Tab = 9] = "Tab", e[e.Comma = 188] = "Comma"
				}(s || (s = {})),
				function(e) {
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Backspace = "Backspace", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
				}(o || (o = {}))
		},
		"./src/reddit/constants/promo.ts": function(e, t, n) {
			"use strict";
			var s, o;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.SignupUpsellCell = "signupUpsellBottomCell", e.SignupUpsellCellDismissible = "signupUpsellBottomCellDismissible", e.SignupUpsellBottomSheet = "signupUpsellBottomSheet"
				}(s || (s = {})),
				function(e) {
					e.Shown = "shown", e.Dismissed = "dismissed", e.Completed = "completed"
				}(o || (o = {}))
		},
		"./src/reddit/constants/screenWidths.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = 480,
				o = 960,
				r = 1200
		},
		"./src/reddit/contexts/AdminEvents.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/brcast/dist/brcast.es.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o);
			t.a = r.a.createContext(Object(s.a)([]))
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const a = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					}
				},
				i = Object(s.createContext)(a);

			function c(e) {
				const t = t => o.a.createElement(i.Consumer, null, ({
					apiContext: n,
					gqlContext: s
				}) => o.a.createElement(e, r({
					apiContext: n,
					gqlContext: s
				}, t)));
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/contexts/NavbarExp.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = o.a.createContext(!1)
		},
		"./src/reddit/contexts/Promo/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/noop.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js");
			const a = r.createContext({
				showPromo: o.a,
				dismissPromo: o.a,
				completePromo: o.a,
				promos: new Map
			});
			t.a = a
		},
		"./src/reddit/contexts/ThrottlingContext/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/featureThrottling.ts"),
				a = n("./src/reddit/helpers/featureThrottling/store/index.ts");
			const i = {
					isThrottled: !1,
					resetFeature: () => {
						throw new Error("Component attempted to reset feature with no ThrottlingContext")
					},
					throttleFeature: () => {
						throw new Error("Component attempted to throttle feature with no ThrottlingContext")
					}
				},
				c = Object.keys(r.a).reduce((e, t) => (e[t] = Object(s.createContext)(i), e), {});
			class l extends o.a.Component {
				constructor(e) {
					super(e), this.onThrottlingDataChange = (e, t) => {
						if (t) {
							const e = a.a.isFeatureThrottled(t);
							this.setState(n => e === n[t].isThrottled ? null : {
								...n,
								[t]: {
									...n[t],
									isThrottled: e
								}
							})
						} else this.setState(e => {
							const t = Object.keys(r.a).reduce((t, n) => (a.a.isFeatureThrottled(n) && (t[n] = {
								...e[n],
								isThrottled: !0
							}), t), {});
							return Object.keys(t).length > 0 ? t : null
						})
					}, this.renderContextProvider = (e, t) => {
						const n = c[t];
						return o.a.createElement(n.Provider, {
							value: this.state[t]
						}, e)
					}, this.state = Object.keys(r.a).reduce((e, t) => (e[t] = {
						isThrottled: !1,
						resetFeature: a.a.resetFeature.bind(a.a, t),
						throttleFeature: a.a.throttleFeature.bind(a.a, t)
					}, e), {})
				}
				componentDidMount() {
					a.a.subscribe(this.onThrottlingDataChange)
				}
				componentWilUnmount() {
					a.a.unsubscribe(this.onThrottlingDataChange)
				}
				render() {
					return Object.keys(c).reduce(this.renderContextProvider, this.props.children)
				}
			}
		},
		"./src/reddit/controls/Button/index.m.less": function(e, t, n) {
			e.exports = {
				Button: "_2iuoyPiKHN3kfOoeIQalDT",
				button: "_2iuoyPiKHN3kfOoeIQalDT",
				isFullWidth: "_34mIRHpFtnJ0Sk97S2Z3D9",
				xxsmallButtonStyles: "_1h6qKGhVsgNfytYFlo8m3f",
				Icon: "_1mvTX6krm3Q2d1CSyUm28s",
				icon: "_1mvTX6krm3Q2d1CSyUm28s",
				isLeft: "_1HHR_ND8U6x6YrIqKFeXZy",
				isRight: "_3tKmDp5VAtgWvabEmFkJ7T",
				xsmallButtonStyles: "_3uJP0daPEH2plzVEYyTdaH",
				xsmallBigPaddingButtonStyles: "UEPNkU0rd1-nvbkOcBatc",
				smallButtonStyles: "HNozj_dKjQZ59ZsfEegz8",
				mediumButtonStyles: "_3ukcnQySDskQwK_wB2iXYl",
				largeButtonStyles: "_1J4mN6_wNfCtSyMDUNGQqN",
				xlargeButtonStyles: "XpD6n11mOiKNg8ZKtvgVR",
				primary: "_10BQ7pjWbeYP63SAPNS8Ts",
				active: "_39a0Mt5b1i2joAqIaEHOWJ",
				redditStyle: "_2nelDm85zKKmuD94NequP0",
				DangerButtonColors: "_1t63zWyh9UUgsyQc6acROM",
				dangerButtonColors: "_1t63zWyh9UUgsyQc6acROM",
				GoldButtonColors: "_10UWrWSil1Xu6pdSaa_3-K",
				goldButtonColors: "_10UWrWSil1Xu6pdSaa_3-K",
				PremiumButtonColors: "q_unSaY23rpdd3lDvGZ-",
				premiumButtonColors: "q_unSaY23rpdd3lDvGZ-",
				secondary: "_2tU8R9NTqhvBrhoNAXWWcP",
				tertiary: "_4Glnzr5LA7bNBGMWGW4pU",
				plain: "_3zbhtNO0bdck0oYbYRhjMC",
				isIconOnly: "_1tPpYVD73ugqp4k-VMFRki",
				isSquare: "_3ojSE1JW7jxNzUzZK8kt7m",
				ExtraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				extraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				InlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				inlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				ChatButton: "_13twe55MPRo1LqypxB-LJx",
				chatButton: "_13twe55MPRo1LqypxB-LJx",
				PlainLinkButton: "_2UhHcZFBOYxMULbf2p-skl",
				plainLinkButton: "_2UhHcZFBOYxMULbf2p-skl"
			}
		},
		"./src/reddit/controls/Button/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "m", (function() {
				return y
			})), n.d(t, "n", (function() {
				return O
			})), n.d(t, "l", (function() {
				return x
			})), n.d(t, "p", (function() {
				return C
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "o", (function() {
				return P
			})), n.d(t, "s", (function() {
				return j
			})), n.d(t, "r", (function() {
				return _
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "g", (function() {
				return k
			})), n.d(t, "k", (function() {
				return w
			})), n.d(t, "e", (function() {
				return M
			})), n.d(t, "i", (function() {
				return N
			})), n.d(t, "j", (function() {
				return I
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/InternalLink/index.tsx"),
				i = n("./src/reddit/controls/Button/index.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = {
				role: "button",
				tabIndex: 0
			};
			var u, m, p, b;
			! function(e) {
				e.XXS = "xxsmallButtonStyles", e.XS = "xsmallButtonStyles", e.XSP = "xsmallBigPaddingButtonStyles", e.S = "smallButtonStyles", e.M = "mediumButtonStyles", e.L = "largeButtonStyles", e.XL = "xlargeButtonStyles"
			}(u || (u = {})),
			function(e) {
				e.Primary = "primary", e.Secondary = "secondary", e.Tertiary = "tertiary", e.Plain = "plain", e.PlainLink = "plainLink"
			}(m || (m = {})),
			function(e) {
				e.L = "left", e.R = "right", e.C = "center"
			}(p || (p = {})),
			function(e) {
				e.Button = "button", e.ExternalLink = "external-link", e.InternalLink = "internal-link"
			}(b || (b = {}));
			const h = e => {
					const {
						"data-redditstyle": t,
						Icon: n,
						iconClassName: s,
						iconPosition: a = p.C,
						isFullWidth: i = !1,
						isSquare: h = !1,
						children: y,
						className: O,
						kind: x = b.Button,
						priority: C = m.Primary,
						redditStyle: E,
						size: P = u.S,
						text: j,
						textClassName: _,
						...S
					} = e, k = (({
						baseClassName: e,
						redditStyle: t,
						dataRedditStyle: n,
						Icon: s,
						isFullWidth: o,
						isSquare: a,
						priority: i,
						size: l,
						text: d
					}) => Object(r.a)(e, c.a.Button, i && c.a[i], l && c.a[l], {
						[c.a.isFullWidth]: o,
						[c.a.isIconOnly]: !!s && !d,
						[c.a.isSquare]: a,
						[c.a.redditStyle]: !(!t && !n)
					}))({
						baseClassName: O,
						children: y,
						dataRedditStyle: t,
						Icon: n,
						isFullWidth: i,
						isSquare: h,
						priority: C,
						redditStyle: E,
						size: P,
						text: j
					}), w = (({
						children: e,
						text: t,
						Icon: n,
						iconClassName: s,
						iconPosition: a,
						priority: i,
						textClassName: l
					}) => !n && t ? o.a.createElement("span", {
						className: l
					}, t) : o.a.createElement(o.a.Fragment, null, n && (a === p.C || a === p.L) && o.a.createElement(n, {
						className: Object(r.a)(c.a.Icon, s, {
							[c.a.isLeft]: a === p.L
						}),
						isFilled: i === m.Primary
					}), t && o.a.createElement("span", {
						className: Object(r.a)(c.a.Text, l)
					}, t), e && e, n && a === p.R && o.a.createElement(n, {
						className: Object(r.a)(c.a.Icon, s, c.a.isRight),
						isFilled: i === m.Primary
					})))({
						children: y,
						text: j,
						Icon: n,
						iconClassName: s,
						iconPosition: a,
						priority: C,
						textClassName: _
					});
					return x === b.InternalLink && (e => "to" in e)(S) ? o.a.createElement(f, l({}, d, S, {
						className: k
					}), w) : x === b.ExternalLink && (e => "href" in e)(S) ? o.a.createElement(g, l({}, d, S, {
						className: k
					}), w) : o.a.createElement(v, l({}, d, S, {
						className: k
					}), w)
				},
				f = e => o.a.createElement(a.a, e),
				g = e => o.a.createElement("a", e),
				v = e => o.a.createElement("button", e),
				y = e => o.a.createElement(h, l({
					kind: b.ExternalLink,
					priority: m.Primary
				}, e)),
				O = e => o.a.createElement(h, l({
					kind: b.InternalLink,
					priority: m.Primary
				}, e)),
				x = e => o.a.createElement(h, l({
					kind: b.Button,
					priority: m.Primary
				}, e)),
				C = e => o.a.createElement(h, l({
					kind: b.ExternalLink,
					priority: m.Secondary
				}, e)),
				E = e => o.a.createElement(h, l({
					kind: b.InternalLink,
					priority: m.Secondary
				}, e)),
				P = e => o.a.createElement(h, l({
					kind: b.Button,
					priority: m.Secondary
				}, e)),
				j = e => o.a.createElement(h, l({
					kind: b.InternalLink,
					priority: m.Plain
				}, e)),
				_ = e => o.a.createElement(h, l({
					kind: b.Button,
					priority: m.Plain
				}, e)),
				S = ({
					className: e,
					...t
				}) => o.a.createElement(h, l({
					kind: b.Button,
					priority: m.Primary,
					className: Object(r.a)(e, c.a.DangerButtonColors)
				}, t)),
				k = ({
					className: e,
					...t
				}) => o.a.createElement(h, l({
					kind: b.Button,
					className: Object(r.a)(e, c.a.GoldButtonColors)
				}, t)),
				w = ({
					className: e,
					...t
				}) => o.a.createElement(h, l({
					kind: b.Button,
					className: Object(r.a)(e, c.a.PremiumButtonColors)
				}, t)),
				M = ({
					className: e,
					...t
				}) => o.a.createElement(h, l({
					kind: b.Button,
					className: Object(r.a)(e, c.a.ChatButton)
				}, t)),
				N = ({
					className: e,
					...t
				}) => o.a.createElement(h, l({
					kind: b.Button,
					className: Object(r.a)(e, c.a.InlineTextButton)
				}, t)),
				I = ({
					className: e,
					...t
				}) => o.a.createElement(h, l({
					kind: b.Button,
					className: Object(r.a)(e, c.a.PlainLinkButton),
					priority: m.PlainLink
				}, t));
			t.t = h
		},
		"./src/reddit/controls/CheckboxWithLabel/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_21CrWSXdmd-ue61gDl6zRs",
				checkboxSelected: "_1xT_z2uw_7yX0esEUZVFwf",
				sharedIconStyles: "_1NVucoiiTLKJiKzRTPVKaW",
				checkboxLabel: "_1H6-wE3jxCdsIeXW5AMjj8",
				labelContent: "-kceiAQn0jpWOpu7qZRjD"
			}
		},
		"./src/reddit/controls/CheckboxWithLabel/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.tsx"),
				i = n("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				c = n("./src/reddit/controls/CheckboxWithLabel/index.m.less"),
				l = n.n(c);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isSelected,
				"aria-disabled": e.disabled,
				autoFocus: e.autoFocus,
				className: Object(r.a)(l.a.checkboxLabel, e.className),
				disabled: e.disabled,
				onClick: e.onClick,
				type: "button",
				role: "checkbox"
			}, o.a.createElement("span", {
				tabIndex: -1,
				className: l.a.labelContent
			}, e.isSelected ? o.a.createElement(i.a, {
				className: l.a.checkboxSelected
			}) : o.a.createElement(a.a, {
				className: l.a.checkbox
			}), e.text))
		},
		"./src/reddit/controls/Downvote/index.m.less": function(e, t, n) {
			e.exports = {
				Downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				mIsInteractive: "_2fe-KdD2OM0ciaiux-G1EL",
				mIsActive: "_3emIxnIscWEPB7o5LgU_rn",
				mIsVoteable: "_3yQIOwaIuF6gn8db96Gu7y"
			}
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/constants/keycodes.ts"),
				l = n("./src/reddit/controls/Input/index.m.less"),
				d = n.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === c.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...n
					} = this.props;
					return o.a.createElement("input", u({
						className: Object(a.a)(d.a.input, e),
						onKeyDown: this.handleKeyDown
					}, n))
				}
			}
			t.a = Object(r.b)(null, {
				closeModal: i.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, n) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/controls/InvisibleScreenReaderText/index.m.less": function(e, t, n) {
			e.exports = {
				invisibleText: "_1RIl585IYPW6cmNXwgRz0J"
			}
		},
		"./src/reddit/controls/InvisibleScreenReaderText/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/InvisibleScreenReaderText/index.m.less"),
				r = n.n(o);
			t.a = s.a.span("invisibleText", r.a)
		},
		"./src/reddit/controls/Link/index.m.less": function(e, t, n) {
			e.exports = {
				link: "zrXDKcys3Vl7vt1f6ef4V"
			}
		},
		"./src/reddit/controls/Link/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/Link/index.m.less"),
				r = n.n(o);
			t.a = s.a.a("link", r.a)
		},
		"./src/reddit/controls/Search/CommunityPill/index.m.less": function(e, t, n) {
			e.exports = {
				communityPill: "_1MA3fP9fWarZfJ7sTZvCY8"
			}
		},
		"./src/reddit/controls/Search/SearchBar/index.m.less": function(e, t, n) {
			e.exports = {
				searchBar: "_1DeR7_QiQnu2UK0e2dDfYD",
				searchBarExp: "_2cQyXGCHzUUwjteF5E1eO7",
				inputLabel: "_1t0x2fnX0IYp1-sp47CSHI",
				input: "_1K7ubH9z5v9E6C19j2fjQU",
				iconContainer: "cNtxQ5c1PdvcDe82u_yz9",
				icon: "_3ylUT2QX58nnEl8r4H26ys"
			}
		},
		"./src/reddit/controls/TextButton/index.m.less": function(e, t, n) {
			e.exports = {
				textButton: "qYzY57HWQ8W424hj3s10-"
			}
		},
		"./src/reddit/controls/TextButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/TextButton/index.m.less"),
				i = n.n(a);
			t.a = e => o.a.createElement("button", {
				children: e.children,
				className: Object(r.a)(i.a.textButton, e.className),
				disabled: e.disabled,
				onClick: e.onClick
			})
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				toggleDisplay: "_2FKpII1jz0h6xCAw1kQAvS",
				toggleSwitch: "_2e2g485kpErHhJQUiyvvC2",
				redditStyle: "_3kUvbpMbR21zJBboDdBH7D",
				mActive: "_1L5kUnhRYhUJ4TkMbOTKkI",
				mDisabled: "_3clF3xRMqSWmoBQpXv8U5z",
				xs: "_1asGWL2_XadHoBuUlNArOq",
				s: "_1hku5xiXsbqzLmszstPyR3",
				m: "_10hZCcuqkss2sf5UbBMCSD",
				l: "_1fCdbQCDv6tiX242k80-LO",
				xl: "_2Jp5Pv4tgpAsTcnUzTsXgO"
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				c = n.n(i);
			t.a = Object(s.memo)(Object(s.forwardRef)((e, t) => {
				const n = e.size || a.d.XS;
				return o.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(c.a.toggleSwitch, e.className, c.a[n], {
						[c.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
						[c.a.mDisabled]: e.disabled,
						[c.a.redditStyle]: e.redditStyle
					}),
					style: e.on && !e.disabled && e.activeColorOverride ? {
						backgroundColor: e.activeColorOverride
					} : void 0,
					id: e.id,
					role: "switch",
					tabIndex: e.tabIndex,
					type: "button",
					onClick: () => !e.disabled && e.onToggle && e.onToggle(),
					ref: t
				}, o.a.createElement("div", {
					className: c.a.toggleDisplay
				}))
			}))
		},
		"./src/reddit/controls/Typography/index.m.less": function(e, t, n) {
			e.exports = {
				heading1: "_37JeV292IJA7_x1qej_-2H",
				heading2: "p13k-tsMcatGBlVpJBZmw",
				heading3: "_1nHvvYpmn7q9eWDAGzKcce",
				heading4: "_1-rwUWsB5F8WmYI8F66dai",
				heading5: "_22RKdGqihAj6MFumW6DuRV",
				heading6: "_4xqrI_N1UdqsK9E1RSisG",
				body1: "_2HJOIn4SJm4z1NeCv_hNFu",
				body2: "_3ImIPX9rfoPmUrZ1R8KGqS",
				actionFont: "_3uShGanwyVFBaTiPMFzfAC",
				metadata: "_2nyJGeaFJbXTqTh9OGwxfu",
				metadata3: "_3BIqvjJkJKZfH4vtC11dGF"
			}
		},
		"./src/reddit/controls/Typography/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/Typography/index.m.less"),
				r = n.n(o);
			s.a.h1("heading1", r.a), s.a.h2("heading2", r.a), s.a.h3("heading3", r.a), s.a.h4("heading4", r.a);
			const a = s.a.h5("heading5", r.a),
				i = (s.a.h6("heading6", r.a), s.a.p("body1", r.a), s.a.p("body2", r.a)),
				c = (s.a.p("actionFont", r.a), s.a.p("metadata", r.a));
			s.a.p("metadata3", r.a)
		},
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
		},
		"./src/reddit/customMiddleware/recentSubreddits.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			}));
			var s = n("./src/chat/customMiddleware/noop.ts"),
				o = n("./src/lib/cache/index.ts"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/localStorageAvailable/index.ts"),
				i = n("./src/reddit/actions/recentSubreddits/constants.ts");
			const c = Object(o.c)(r.r.RECENT_SUBREDDITS, "recent_subreddits"),
				l = () => Object(a.a)() && Object(o.b)(c) || [];
			t.a = e => "undefined" == typeof window ? s.a : e => t => {
				const n = e(t);
				switch (t.type) {
					case i.e: {
						const e = l() || [],
							{
								id: n
							} = t.payload || {};
						if (n) {
							const s = e.findIndex(e => e.id === n); - 1 !== s && e.splice(s, 1), e.unshift(t.payload), e.splice(i.c), Object(o.d)(c, e, r.pb)
						}
						break
					}
				}
				return n
			}
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return f
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "l", (function() {
				return y
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "j", (function() {
				return P
			})), n.d(t, "f", (function() {
				return j
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "b", (function() {
				return k
			})), n.d(t, "c", (function() {
				return w
			}));
			var s = n("./src/config.ts"),
				o = n("./src/redditGQL/operations/UpdateCommentDistinguishState.json"),
				r = n("./src/redditGQL/operations/UpdateCommentStickyState.json"),
				a = n("./src/redditGQL/types.ts"),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				l = n("./src/lib/makeGqlRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				u = n("./src/reddit/constants/headers.ts"),
				m = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				p = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				b = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				h = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const f = (e, t) => Object(c.a)(Object(d.a)(e, [u.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/save`),
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				g = (e, t) => Object(c.a)(Object(d.a)(e, [u.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/unsave`),
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				v = (e, t) => Object(c.a)(Object(d.a)(e, [u.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/lock`),
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				y = (e, t) => Object(c.a)(Object(d.a)(e, [u.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/unlock`),
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				O = (e, t) => Object(c.a)(Object(d.a)(e, [u.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/approve`),
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				x = (e, t, n) => Object(c.a)(Object(d.a)(e, [u.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/remove`),
					method: i.jb.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				C = (e, t) => Object(c.a)(Object(d.a)(e, [u.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				E = (e, t) => Object(c.a)(Object(d.a)(e, [u.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				P = (e, t) => Object(c.a)(Object(d.a)(e, [u.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: i.jb.POST,
					data: {
						id: t
					}
				}),
				j = (e, t, n, o) => {
					let r = Object(m.a)(Object(h.a)(Object(b.a)(`${s.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return o && (r = Object(p.a)(r)), Object(c.a)(e, {
						data: n,
						endpoint: r,
						method: i.jb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				_ = (e, t, n, s) => Object(c.a)(Object(d.a)(e, [u.a]), {
					endpoint: Object(m.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: i.jb.POST,
					data: {
						id: t,
						sticky: s
					}
				}),
				S = {
					[i.G.NONE]: a.d.None,
					[i.G.MODERATOR]: a.d.ModDistinguished,
					[i.G.ADMIN]: a.d.AdminDistinguished,
					[i.G.ALUMNI_ADMIN]: a.d.AlumniDistinguished
				};

			function k(e, t, n) {
				const s = function(e, t) {
					return {
						input: {
							commentId: e,
							distinguishState: t === i.G.NONE ? a.b.None : a.b.Distinguished,
							distinguishType: S[t]
						}
					}
				}(t, n);
				return Object(l.a)(e, {
					...o,
					variables: s
				})
			}

			function w(e, t, n) {
				return Object(l.a)(e, {
					...r,
					variables: {
						input: {
							commentId: t,
							sticky: n
						}
					}
				})
			}
		},
		"./src/reddit/endpoints/gold/productCatalog/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "d", (function() {
				return x
			})), n.d(t, "a", (function() {
				return C
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/redditGQL/operations/ClaimAwardOffer.json"),
				c = n("./src/redditGQL/operations/FetchSpecialEvents.json"),
				l = n("./src/reddit/constants/headers.ts"),
				d = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				u = n("./src/reddit/endpoints/gold/purchase.ts");
			const m = e => ({
					baselineCoins: e.baseline_coins || e.coins,
					baselinePennies: e.baseline_pennies || e.pennies,
					bonusPct: e.bonus_pct,
					coins: e.coins,
					description: e.description,
					featured: e.featured,
					featuredLabel: e.featured_label,
					images: {
						marketing: e.images.marketing,
						purchaseSuccess: e.images.purchase_success
					},
					mobileId: e.mobile_id,
					pennies: e.pennies
				}),
				p = e => e.map(m),
				b = e => e.map(e => {
					return {
						...m(e),
						dealInfo: {
							type: e.deal_info.type,
							title: e.deal_info.title,
							subtitle: e.deal_info.subtitle,
							displayDelay: e.deal_info.display_delay
						}
					}
				}),
				h = e => e.map(e => ({
					defaultSignupBonusCoins: e.default_signup_bonus_coins,
					bonusPct: e.bonus_pct,
					description: e.description,
					frequency: e.frequency,
					frequencyDays: e.frequency_days,
					images: {
						marketing: e.images.marketing,
						purchaseSuccess: e.images.purchase_success
					},
					mobileId: e.mobile_id,
					mobilePennies: e.mobile_pennies,
					paypalButtonId: e.paypal_button_id,
					pennies: e.pennies,
					periodicalCoins: e.periodical_coins,
					signupBonusCoins: e.signup_bonus_coins
				})),
				f = e => e ? {
					ctaText: e.cta_text,
					dropdownHeaderText: e.dropdown_banner_text,
					dropdownHeaderBackgroundAsset: e.dropdown_banner_image_url,
					endsAt: e.ends_at,
					heroImageUrl: e.hero_image_url,
					heroSubtext: e.hero_subtext,
					heroText: e.hero_text
				} : null,
				g = async ({
					context: e,
					correlationId: t,
					shouldUseCurrentOrigin: n
				}) => {
					const r = "/api/v2/gold/purchase_package_details",
						i = n && "undefined" != typeof window ? `${window.location.origin}${r}` : `${e.apiUrl}${r}`,
						c = Object(d.a)(i);
					return Object(o.a)(Object(a.a)(e, [l.a]), {
						method: s.jb.GET,
						endpoint: c,
						data: {
							correlation_id: t
						}
					}).then(u.c).then(v)
				};

			function v(e) {
				if (!e.ok) return e;
				const {
					active_sale: t,
					coin_packages: n,
					deals: s,
					premium_packages: o
				} = e.body, r = {
					activeSaleConfig: f(t),
					coinPackages: p(n),
					dealCoinPackages: b(s),
					premiumPackages: h(o)
				};
				return {
					...e,
					body: r
				}
			}
			const y = async ({
				context: e,
				awardId: t,
				correlationId: n
			}) => {
				const r = `${e.apiUrl}/api/v2/gold/recommended_coin_package_details`,
					i = Object(d.a)(r);
				return Object(o.a)(Object(a.a)(e, [l.a]), {
					method: s.jb.GET,
					endpoint: i,
					data: {
						correlation_id: n,
						intended_award: t
					}
				}).then(u.c).then(O)
			};

			function O(e) {
				if (!e.ok) return e;
				const t = e.body,
					n = {
						coinPackages: p([t])
					};
				return {
					...e,
					body: n
				}
			}
			const x = e => Object(r.a)(e, {
					...c
				}),
				C = e => Object(r.a)(e, {
					...i,
					variables: {
						input: {
							offerId: "free_awards"
						}
					}
				})
		},
		"./src/reddit/endpoints/gold/purchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "b", (function() {
				return O
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/makeGqlRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/redditGQL/operations/ChangeStripePaymentMethod.json"),
				c = n("./src/reddit/constants/headers.ts"),
				l = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				d = n("./src/reddit/helpers/genericServerError/index.ts"),
				u = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts");
			const m = e => e.ok ? e.body.json && e.body.json.errors.length ? {
					...e,
					ok: !1,
					error: Object(u.a)(e)
				} : {
					...e
				} : {
					...e,
					error: e.error || Object(d.a)()
				},
				p = async ({
					coins: e,
					context: t,
					correlationId: n,
					offerContext: r,
					pennies: i,
					rememberCard: d,
					token: u,
					savedCardId: p
				}) => {
					const b = {
							token: u ? u.id : void 0,
							coins: e,
							offer_context: r,
							pennies: i,
							remember_card: d,
							card_id: p,
							correlation_id: n
						},
						h = `${t.apiUrl}/api/v2/gold/stripe/buy_coins`,
						f = Object(l.a)(h);
					return Object(o.a)(Object(a.a)(t, [c.a]), {
						method: s.jb.POST,
						endpoint: f,
						data: b
					}).then(m)
				}, b = async ({
					coins: e,
					context: t,
					correlationId: n,
					gildParams: r,
					isOldReddit: i,
					offerContext: d,
					pennies: u,
					rememberCard: p,
					thingId: b,
					token: h,
					savedCardId: f
				}) => {
					const {
						gildType: g,
						isAnonymous: v,
						message: y
					} = r, O = {
						token: h ? h.id : void 0,
						coins: e,
						offer_context: d,
						pennies: u,
						thing_id: b,
						gild_type: g,
						message: y ? y.trim() : "",
						is_anonymous: v,
						remember_card: p,
						card_id: f,
						correlation_id: n
					}, x = `${t.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, C = i ? x : Object(l.a)(x);
					return Object(o.a)(Object(a.a)(t, [c.a]), {
						method: s.jb.POST,
						endpoint: C,
						data: O
					}).then(m)
				}, h = async ({
					context: e,
					correlationId: t,
					gildParams: n,
					isOldReddit: r,
					pennies: i,
					rememberCard: d,
					thingId: u,
					token: p,
					savedCardId: b
				}) => {
					const {
						gildType: h,
						isAnonymous: f,
						message: g
					} = n, v = {
						token: p ? p.id : void 0,
						thing_id: u,
						award_id: h,
						message: g ? g.trim() : "",
						is_anonymous: f,
						pennies: i,
						remember_card: d,
						card_id: b,
						correlation_id: t
					}, y = `${e.apiUrl}/api/v2/gold/stripe/buy_award`, O = r ? y : Object(l.a)(y);
					return Object(o.a)(Object(a.a)(e, [c.a]), {
						method: s.jb.POST,
						endpoint: O,
						data: v
					}).then(m)
				}, f = async ({
					context: e,
					correlationId: t,
					pennies: n,
					token: r
				}) => {
					const i = {
							token: r.id,
							pennies: n,
							correlation_id: t
						},
						d = `${e.apiUrl}/api/v2/gold/stripe/buy_premium_subscription`,
						u = Object(l.a)(d);
					return Object(o.a)(Object(a.a)(e, [c.a]), {
						method: s.jb.POST,
						endpoint: u,
						data: i
					}).then(m)
				}, g = "paymentInfoUpdated", v = async e => {
					const {
						origin: t
					} = window.location, n = `${t}/settings/premium`, s = new URLSearchParams({
						[g]: "true"
					}), o = await Object(r.a)(e, {
						...i,
						variables: {
							successUrl: `${n}?${s}`,
							cancelUrl: `${n}`
						}
					});
					if (!o.ok) throw new Error("Unable to update payment information");
					return o.body.data.changeStripePaymentMethod.sessionId
				}, y = async (e, t) => {
					const n = {
						card_id: t
					};
					return Object(o.a)(Object(a.a)(e, [c.a]), {
						method: s.jb.POST,
						endpoint: `${e.apiUrl}/api/v2/gold/stripe/delete_creditcard`,
						data: n
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(u.a)(e)
					})
				}, O = async e => Object(o.a)(Object(a.a)(e, [c.a]), {
					method: s.jb.GET,
					endpoint: `${e.apiUrl}/api/v2/gold/stripe/creditcards`
				}).then(e => e.ok ? {
					...e
				} : {
					...e,
					error: Object(u.a)(e)
				})
		},
		"./src/reddit/endpoints/notificationsSettings/layoutByChannelEndpoint.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				o = n("./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json"),
				r = n("./src/redditGQL/operations/UpdateNotificationPreferences.json");
			const a = (e, t) => Object(s.a)(e, {
					...o,
					variables: t
				}),
				i = (e, t) => Object(s.a)(e, {
					...r,
					variables: {
						input: {
							preferences: [t]
						}
					}
				})
		},
		"./src/reddit/endpoints/post/convert.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				r = n("./src/lib/omitHeaders/index.ts"),
				a = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = n("./src/reddit/models/PostCreationForm/index.ts");
			t.a = (e, t, n) => {
				const l = {
					output_mode: "markdown" === t ? t : "rtjson"
				};
				return t === c.i.MARKDOWN ? l.richtext_json = n : l.markdown_text = n, Object(o.a)(Object(r.a)(e, [a.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: s.jb.POST,
					data: l
				})
			}
		},
		"./src/reddit/helpers/awards/overlayIds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = () => "COIN_PURCHASE_DROPDOWN_ID"
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function o(e) {
				const {
					subreddit: t,
					amount: n,
					memo: s,
					cta: o
				} = e;
				return t && n && s && o ? {
					subreddit: t,
					amount: n,
					memo: s,
					cta: o
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/helpers/frontpageCardPostCountExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var s, o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/constants/postLayout.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/selectors/meta.ts"),
				l = n("./src/reddit/selectors/user.ts");

			function d(e) {
				return Object(i.Q)(e, {}) === r.g.Large && !Object(l.J)(e) && !Object(c.d)(e)
			}

			function u(e) {
				return Object(a.c)(e, {
					expEventOverride: !1,
					experimentEligibilitySelector: d,
					experimentName: o.gd
				})
			}

			function m(e) {
				switch (e) {
					case o.hd.Enabled:
						return 18;
					default:
						return
				}
			}! function(e) {
				e.Enabled = "frontpage-card-posts-3.enabled", e.NoBucket = "frontpage-card-posts-3.no_bucket"
			}(s || (s = {}));
			const p = e => {
				switch (e) {
					case o.hd.Enabled:
						return s.Enabled;
					default:
						return s.NoBucket
				}
			}
		},
		"./src/reddit/helpers/getAccountManagerMessageTarget/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/config.ts");
			const o = () => s.a.redditUrl
		},
		"./src/reddit/helpers/getSubredditErrorProps/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/ContentGate.ts");
			t.a = (e, t, n) => {
				let o, r, a, i, c, l, d, u;
				return e ? e.quarantinedSubreddit ? (r = s.a.QuarantinedSubreddit, i = e.quarantineMessage, c = e.quarantineMessageHtml, l = e.quarantineRequiresEmail) : e.privateSubreddit ? (r = s.a.PrivateSubreddit, a = e.subredditDescription, d = e.isContributorRequestsDisabled, u = e.isContributorRequestTimestamp) : e.goldSubreddit ? r = s.a.GoldSubreddit : e.subredditBanned ? (r = s.a.SubredditBanned, o = e.subredditBanMessage) : e.subredditDoesNotExist ? r = s.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason && (r = s.a.SubredditBlockedForLegalReason) : t && (r = s.a.Nsfw), r && n ? {
					banMessage: o,
					contentGateType: r,
					isContributorRequestsDisabled: d,
					isContributorRequestTimestamp: u,
					subredditDescription: a,
					subredditName: n,
					quarantineMessage: i,
					quarantineMessageHtml: c,
					quarantineRequiresEmail: l
				} : void 0
			}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/brcast/dist/brcast.es.js");
			const o = Object(s.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/karma.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const s = e => {
				if (!e || !e.karma) return 0;
				const {
					total: t,
					...n
				} = e.karma;
				return t || Object.values(n).reduce((e, t) => e + (t || 0), 0)
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less": function(e, t, n) {
			e.exports = {
				basicLink: "_1YWXCINvcuU7nk0ED-bta8",
				metaContainer: "_1HGeWoy6faY2UWkCD7cYoW",
				outboundLink: "_1Jtes5zRWNpwobWM4O2Unx",
				button: "_2KotRmn9DgdA58Ikji2mnV",
				icon: "_2BQPq3iyS8t6kKtFmtkB30",
				isLit: "_3RofgwJEAbXD6OnLxEZ8Kg",
				body: "vzhy90YD0qH7ZDJi7xMGw"
			}
		},
		"./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.m.less"),
				l = n.n(c);
			const d = i.a.button("button", l.a),
				u = e => t => o.a.createElement("div", {
					className: t.className
				}, e);

			function m(e, t, n) {
				return b(e, t, !0, {
					...n
				})
			}

			function p(e, t, n) {
				return b(e, t, !1, {
					...n
				})
			}

			function b(e, t, n, s) {
				const i = e,
					c = "function" == typeof t ? t : u(t),
					{
						meta: d
					} = s,
					m = e => o.a.createElement(o.a.Fragment, null, o.a.createElement(i, {
						className: Object(a.a)(l.a.icon, {
							[l.a.isLit]: e
						})
					}), o.a.createElement(c, {
						className: l.a.body
					}), d && o.a.createElement("div", {
						className: l.a.metaContainer
					}, d));
				return n ? e => o.a.createElement("a", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.basicLink),
					href: e.href,
					onClick: e.onClick,
					target: "_blank",
					rel: "noopener noreferrer"
				}, m(e.isLit)) : e => e.href ? o.a.createElement(r.a, {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.basicLink),
					to: e.href,
					onClick: e.onClick
				}, m(e.isLit)) : o.a.createElement("button", {
					"data-redditstyle": !0,
					className: Object(a.a)(e.className, l.a.button),
					onClick: e.onClick
				}, m(e.isLit))
			}
		},
		"./src/reddit/helpers/styles/postBackgroundColor.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			n("./node_modules/polished/dist/polished.es.js");
			var s = n("./src/reddit/models/Theme/NewColorSystem/index.ts");

			function o(e) {
				return e.flairStyleTemplate && e.flairStyleTemplate.postBackgroundColor ? e.flairStyleTemplate.postBackgroundColor : Object(s.a)(e).post
			}
		},
		"./src/reddit/helpers/toggleBodyScroll/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			var s = n("./src/reddit/constants/elementIds.ts");
			let o;
			const r = () => {
					const e = document.body.dataset.previousOverflow;
					if (!e) return;
					document.body.removeAttribute("data-previous-overflow");
					const t = document.getElementById(s.c);
					document.body.style.overflow = e, document.body.style.marginRight = "", t && (t.style.marginRight = "")
				},
				a = () => {
					if (document.body.dataset.previousOverflow) return;
					const e = document.body.style.overflow || "auto";
					document.body.dataset.previousOverflow = e, o || (o = i(document.body)), document.body.style.overflow = "hidden", document.body.style.marginRight = `${o}px`;
					const t = document.getElementById(s.c);
					t && (t.style.marginRight = `${o}px`)
				},
				i = e => {
					const t = e.getBoundingClientRect();
					return window.innerWidth - (t.left + t.right)
				},
				c = e => {
					if (!e || !document.body) return 0;
					const t = i(document.body),
						n = e.offsetWidth - e.scrollWidth;
					return t || n
				}
		},
		"./src/reddit/helpers/trackers/authControls.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/platform.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					const t = Object(o.o)(e);
					return {
						actionInfo: Object(r.actionInfo)(e),
						post: t && Object(r.post)(e, t) || null,
						profile: Object(r.profile)(e),
						screen: Object(r.screen)(e),
						subreddit: Object(r.subreddit)(e)
					}
				},
				i = e => t => ({
					source: e,
					action: s.c.CLICK,
					noun: "login",
					...a(t)
				}),
				c = e => t => ({
					source: e,
					action: s.c.CLICK,
					noun: "signup",
					...a(t)
				}),
				l = () => e => ({
					source: "user_dropdown",
					action: s.c.CLICK,
					noun: "login_signup",
					...a(e)
				})
		},
		"./src/reddit/helpers/trackers/comment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/telemetry/index.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = ({
					state: e,
					commentId: t
				}) => Object(s.a)({
					source: "comment",
					action: "view",
					noun: "comment",
					...o.defaults(e),
					profile: o.profile(e),
					post: o.post(e, t),
					media: o.media(e, t),
					subreddit: o.subreddit(e),
					comment: o.comment(e, t)
				}),
				a = ({
					state: e,
					commentId: t
				}) => Object(s.a)({
					source: "comment",
					action: "consume",
					noun: "comment",
					...o.defaults(e),
					profile: o.profile(e),
					post: o.post(e, t),
					media: o.media(e, t),
					subreddit: o.subreddit(e),
					comment: o.comment(e, t)
				}),
				i = e => t => ({
					source: "online_presence",
					action: "view",
					noun: "user",
					user: o.user(t),
					subreddit: o.subreddit(t),
					post: o.post(t, e),
					actionInfo: o.actionInfo(t),
					app: o.app(t),
					referrer: o.referrer(t),
					session: o.session(t)
				})
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "h", (function() {
				return y
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/models/PostDraft/index.ts"),
				a = n("./src/reddit/selectors/comments.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				l = n("./src/telemetry/index.ts");
			const d = "comment_composer",
				u = e => {
					const t = Object(i.o)(e);
					return {
						source: d,
						action: s.c.CLICK,
						...Object(c.defaults)(e),
						screen: Object(c.screen)(e),
						subreddit: Object(c.subreddit)(e),
						post: t ? Object(c.post)(e, t) : null,
						profile: Object(c.profile)(e),
						correlationId: Object(o.c)(o.a.CommentComposer)
					}
				},
				m = async (e, t, s, o) => {
					const r = {
							commentId: o,
							commentsPageKey: s
						},
						i = o && Object(a.j)(e, r) || 0,
						{
							getFlairData: d
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts"));
					return Object(l.a)({
						noun: "comment",
						...u(e),
						comment: o ? Object(c.comment)(e, o) : null,
						listing: Object(c.listing)(e, void 0, {
							depth: i
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: d(e)
					})
				}, p = (e, t, n, s) => {
					const o = u(e);
					return Object(l.a)({
						...o,
						actionInfo: {
							...o.actionInfo,
							reason: "karma_rate_limit"
						},
						source: "backend",
						action: "error",
						noun: "comment",
						comment: {
							bodyText: t,
							parentId: s,
							postId: n
						}
					})
				}, b = e => Object(l.a)({
					noun: "cancel",
					...u(e)
				}), h = (e, t) => {
					t === r.c.replyToPost && Object(l.a)({
						noun: "input",
						...u(e)
					})
				}, f = (e, t) => Object(l.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(c.defaults)(t),
					screen: Object(c.screen)(t),
					subreddit: Object(c.subreddit)(t),
					post: Object(c.post)(t, e)
				}), g = e => Object(l.a)({
					noun: "edit",
					...u(e)
				}), v = e => Object(l.a)({
					noun: "save_edit",
					...u(e)
				}), y = (e, t) => n => {
					const s = "image_upload" === e || "video_upload" === e;
					return {
						...u(n),
						noun: s ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/customFeeds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "f", (function() {
				return u
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = (e, t) => ({
					...Object(s.defaults)(t),
					customFeed: Object(s.customFeedByPath)(t, e),
					source: "custom_feeds"
				}),
				r = e => t => ({
					...o(e, t),
					action: "click",
					noun: "delete"
				}),
				a = e => t => ({
					...o(e, t),
					action: "click",
					noun: "follow"
				}),
				i = e => t => ({
					...o(e, t),
					action: "click",
					noun: "unfollow"
				}),
				c = e => t => ({
					...o(e, t),
					action: "click",
					noun: "duplicate"
				}),
				l = e => t => ({
					...o(e, t),
					action: "click",
					noun: "share"
				}),
				d = e => t => ({
					...o(e, t),
					action: "click",
					noun: "favorite",
					source: "community_nav"
				}),
				u = e => t => ({
					...o(e, t),
					action: "click",
					noun: "unfavorite",
					source: "community_nav"
				})
		},
		"./src/reddit/helpers/trackers/goldTopNav.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/helpers/trackers/goldPayment.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const a = "gold_top_nav",
				i = (e, t = {}) => ({
					...Object(o.g)(e, t),
					correlationId: Object(s.d)(s.a.GoldPayment, !1),
					profile: r.profile(e),
					subreddit: r.subreddit(e)
				}),
				c = (e, t) => n => ({
					source: a,
					action: "click",
					noun: e,
					...i(n, {
						offerContext: t
					})
				}),
				l = e => t => ({
					source: a,
					action: "click",
					noun: "coins_package",
					...i(t, {
						packageId: e
					})
				}),
				d = () => e => ({
					source: a,
					action: "click",
					noun: "premium",
					...i(e)
				}),
				u = () => e => ({
					source: a,
					action: "click",
					noun: "free_award_offer",
					...i(e)
				}),
				m = e => t => ({
					source: a,
					action: "view",
					noun: "dropdown",
					...i(t, {
						offerContext: e
					})
				})
		},
		"./src/reddit/helpers/trackers/inbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "i", (function() {
				return b
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "p", (function() {
				return f
			})), n.d(t, "s", (function() {
				return g
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "r", (function() {
				return y
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "t", (function() {
				return x
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "h", (function() {
				return P
			})), n.d(t, "g", (function() {
				return j
			})), n.d(t, "f", (function() {
				return _
			}));
			var s, o, r, a, i, c, l = n("./src/reddit/constants/tracking.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				u = n("./src/telemetry/index.ts");
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(s || (s = {})),
			function(e) {
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.HideUpdates = "hide_updates", e.BlockAwarder = "block_awarder", e.DecreaseSubredditUpdates = "disable_frequent"
			}(o || (o = {})),
			function(e) {
				e.MiniInbox = "mini_inbox", e.Inbox = "inbox"
			}(r || (r = {})),
			function(e) {
				e.Inbox = "inbox", e.Nav = "nav", e.Settings = "notification_app_settings"
			}(a || (a = {})),
			function(e) {
				e[e.FIRST = 1] = "FIRST", e[e.SECOND = 2] = "SECOND"
			}(i || (i = {})),
			function(e) {
				e.Confirm = "confirm"
			}(c || (c = {}));
			const m = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s
				}) => o => ({
					...d.defaults(o),
					action: l.c.VIEW,
					noun: "inbox_notification",
					source: a.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: s
					}
				}),
				p = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s,
					awardId: o
				}) => r => {
					Object(u.a)({
						...d.defaults(r),
						action: "receive",
						noun: "inbox_notification",
						source: a.Inbox,
						inbox: {
							id: e,
							isClicked: t,
							isViewed: n
						},
						notification: {
							type: s
						},
						goldPurchase: {
							awardId: o
						}
					})
				},
				b = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s,
					awardId: o,
					position: r
				}) => i => ({
					...d.defaults(i),
					action: l.c.CLICK,
					noun: "inbox_notification",
					source: a.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: s
					},
					goldPurchase: {
						awardId: o
					},
					actionInfo: {
						position: r
					}
				}),
				h = ({
					badgeCount: e,
					tab: t
				}) => n => ({
					...d.defaults(n),
					action: l.c.VIEW,
					noun: "inbox",
					source: a.Inbox,
					inbox: {
						badgeCount: e,
						tab: t
					}
				}),
				f = ({
					badgeCount: e,
					tab: t
				}) => t => ({
					...d.defaults(t),
					action: l.c.VIEW,
					noun: "mini_inbox",
					source: a.Inbox,
					inbox: {
						badgeCount: e,
						tab: s.Activity
					}
				}),
				g = ({
					badgeCount: e
				}) => t => ({
					...d.defaults(t),
					action: l.c.CLICK,
					noun: "inbox",
					source: a.Nav,
					inbox: {
						badgeCount: e
					}
				}),
				v = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s,
					awardId: o
				}) => r => ({
					...d.defaults(r),
					action: l.c.CLICK,
					noun: "inbox_notification_overflow",
					source: a.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: s
					},
					goldPurchase: {
						awardId: o
					}
				}),
				y = ({
					id: e,
					isClicked: t,
					isViewed: n,
					type: s
				}) => o => ({
					...d.defaults(o),
					action: l.c.VIEW,
					noun: "inbox_notification_overflow",
					source: a.Inbox,
					inbox: {
						id: e,
						isClicked: t,
						isViewed: n
					},
					notification: {
						type: s
					}
				}),
				O = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: s,
					type: o
				}) => r => ({
					...d.defaults(r),
					action: l.c.CLICK,
					noun: "overflow_option",
					source: a.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: s
					},
					notification: {
						type: o
					},
					actionInfo: {
						...d.actionInfo(r),
						type: e
					}
				}),
				x = ({
					actionInfoType: e,
					id: t,
					isClicked: n,
					isViewed: s,
					type: o
				}) => r => ({
					...d.defaults(r),
					action: l.c.UNDO,
					noun: "overflow_option",
					source: a.Inbox,
					inbox: {
						id: t,
						isClicked: n,
						isViewed: s
					},
					notification: {
						type: o
					},
					actionInfo: {
						...d.actionInfo(r),
						type: e
					}
				}),
				C = e => t => ({
					...d.defaults(t),
					action: l.c.CLICK,
					noun: "notification_app_settings",
					source: a.Inbox,
					actionInfo: {
						...d.actionInfo(t),
						pageType: e
					}
				}),
				E = () => e => ({
					...d.defaults(e),
					action: l.c.CLICK,
					noun: "see_all",
					source: a.Inbox,
					actionInfo: {
						...d.actionInfo(e),
						pageType: r.MiniInbox
					}
				}),
				P = () => e => ({
					...d.defaults(e),
					action: l.c.CLICK,
					noun: "messages",
					source: a.Inbox
				}),
				j = ({
					isMiniInbox: e
				}) => t => ({
					...d.defaults(t),
					action: l.c.CLICK,
					noun: "mark_all_as_read",
					source: a.Inbox,
					actionInfo: e ? {
						...d.actionInfo(t),
						pageType: r.MiniInbox
					} : {}
				}),
				_ = (e, t) => n => ({
					...d.defaults(n),
					action: l.c.CLICK,
					noun: "policy_banner",
					source: a.Inbox,
					actionInfo: {
						...d.actionInfo(n),
						pageType: e,
						type: t
					}
				})
		},
		"./src/reddit/helpers/trackers/moreReplies.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			}));
			var s, o, r, a = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Click = "click", e.Dismiss = "dismiss", e.View = "view"
			}(s || (s = {})),
			function(e) {
				e.Load = "load_more_comments", e.SsoSignup = "sso_signup"
			}(o || (o = {})),
			function(e) {
				e.Popup = "popup", e.PostDetail = "post_detail"
			}(r || (r = {}));
			const i = () => e => ({
					...Object(a.defaults)(e),
					source: r.PostDetail,
					action: s.Click,
					noun: o.Load,
					actionInfo: Object(a.actionInfo)(e, {
						page_type: "d2x_post_detail"
					})
				}),
				c = () => e => ({
					...Object(a.defaults)(e),
					source: r.Popup,
					action: s.Dismiss,
					noun: o.SsoSignup,
					actionInfo: Object(a.actionInfo)(e, {
						page_type: "d2x_post_detail"
					})
				}),
				l = () => e => ({
					...Object(a.defaults)(e),
					source: r.Popup,
					action: s.View,
					noun: o.SsoSignup,
					actionInfo: Object(a.actionInfo)(e, {
						page_type: "d2x_post_detail",
						type: "view_more_comments"
					})
				})
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			}));
			n("./src/reddit/constants/categories.tsx");
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: s.screen(e),
					profile: s.profile(e),
					subreddit: s.subreddit(e)
				}),
				r = e => t => ({
					action: "click",
					source: "nav",
					noun: e,
					...o(t)
				}),
				a = e => t => ({
					...o(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				i = e => t => ({
					...o(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				})
		},
		"./src/reddit/helpers/trackers/onboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "p", (function() {
				return u
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "n", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "m", (function() {
				return y
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "l", (function() {
				return x
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "f", (function() {
				return E
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = [],
				a = "onboarding";
			var i;
			! function(e) {
				e.CATEGORY = "category", e.CREATE_ACCOUNT_SCREEN_DROPDOWN = "create_account_screen_dropdown", e.EXIT = "exit", e.GENDER = "gender", e.ONBOARDING_COMMUNITY_RECOMMENDATIONS = "onboarding_community_recommendations", e.ONBOARDING_GENDER_COLLECTION = "onboarding_gender_collection", e.ONBOARDING_INTEREST = "onboarding_interest", e.SUB_CATEGORY = "sub_category", e.SUBREDDIT = "subreddit", e.VIEW_MORE = "view_more"
			}(i || (i = {}));
			const c = (e = r) => t => ({
					...Object(o.defaults)(t),
					action: s.c.CLICK,
					noun: i.EXIT,
					onboarding: {
						processNotes: "exited",
						numberSubredditsSelected: e.length,
						subredditsSelected: e
					},
					source: a
				}),
				l = () => e => ({
					...Object(o.defaults)(e),
					action: s.c.DISMISS,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				d = () => e => ({
					...Object(o.defaults)(e),
					action: s.c.VIEW,
					noun: i.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: a
				}),
				u = e => t => ({
					...Object(o.defaults)(t),
					action: s.c.DISMISS,
					noun: e,
					source: a
				}),
				m = () => e => ({
					...Object(o.defaults)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				p = () => e => ({
					...Object(o.defaults)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_INTEREST
				}),
				b = () => e => ({
					...Object(o.defaults)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				h = () => e => ({
					...Object(o.defaults)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				f = () => e => ({
					...Object(o.defaults)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_INTEREST
				}),
				g = () => e => ({
					...Object(o.defaults)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				v = () => e => ({
					...Object(o.defaults)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_GENDER_COLLECTION
				}),
				y = () => e => ({
					...Object(o.defaults)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_INTEREST
				}),
				O = () => e => ({
					...Object(o.defaults)(e),
					source: a,
					action: s.c.SELECT,
					noun: i.GENDER
				}),
				x = (e, t, n) => r => ({
					...Object(o.defaults)(r),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					noun: t ? i.CATEGORY : i.SUB_CATEGORY,
					onboarding: {
						categoryName: n
					}
				}),
				C = (e, t, n) => r => ({
					...Object(o.defaults)(r),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: t,
						subredditName: n
					}
				}),
				E = e => t => ({
					...Object(o.defaults)(t),
					source: a,
					action: s.c.CLICK,
					noun: i.VIEW_MORE,
					onboarding: {
						categoryName: e
					}
				})
		},
		"./src/reddit/helpers/trackers/shortcuts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "s", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "l", (function() {
				return h
			})), n.d(t, "p", (function() {
				return f
			})), n.d(t, "r", (function() {
				return g
			})), n.d(t, "q", (function() {
				return v
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "u", (function() {
				return x
			})), n.d(t, "t", (function() {
				return C
			})), n.d(t, "f", (function() {
				return E
			})), n.d(t, "e", (function() {
				return P
			})), n.d(t, "d", (function() {
				return j
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "c", (function() {
				return S
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => () => ({
					source: "shortcuts",
					action: "submit",
					noun: e
				}),
				r = (e, t) => n => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					post: s.post(n, t)
				}),
				a = (e, t) => n => ({
					source: "shortcuts",
					action: "submit",
					noun: e,
					comment: s.comment(n, t)
				}),
				i = o("show_panel"),
				c = o("esc_close"),
				l = e => r("enter_open_post", e),
				d = e => a("enter_comment_collapse", e),
				u = e => r("j_next", e),
				m = e => a("j_next", e),
				p = e => r("k_previous", e),
				b = e => a("k_previous", e),
				h = e => r("n_next", e),
				f = e => r("p_previous", e),
				g = e => r("s_save", e),
				v = e => a("s_save", e),
				y = e => r("h_hide", e),
				O = e => r("x_expando", e),
				x = e => r("a_upvote", e),
				C = e => a("a_upvote", e),
				E = e => r("z_downvote", e),
				P = e => a("z_downvote", e),
				j = o("c_create_post"),
				_ = e => r("l_go_to_link", e),
				S = e => a("r_comment", e);
			o("q_navigation")
		},
		"./src/reddit/helpers/trackers/user.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const a = e => ({
					screen: o.screen(e),
					profile: o.profile(e),
					subreddit: o.subreddit(e)
				}),
				i = e => t => ({
					source: "user_dropdown",
					action: "click",
					noun: e ? "night_mode_off" : "night_mode_on",
					...a(t)
				}),
				c = e => t => ({
					source: "nav",
					action: "click",
					actionInfo: {
						pageType: t.platform.currentPage ? o.getPageTypeFromCurrentPage(t.platform.currentPage) : void 0,
						settingValue: e ? "online" : "hidden"
					},
					noun: "online_presence_toggle",
					...a(t)
				}),
				l = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "predictions",
					...a(e)
				}),
				d = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "premium",
					correlationId: Object(s.c)(s.a.GoldPayment),
					...a(e)
				}),
				u = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "powerups",
					correlationId: Object(s.d)(s.a.PowerupsFlow, !1),
					...a(e)
				}),
				m = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "coins",
					correlationId: Object(s.c)(s.a.GoldPayment),
					...a(e)
				}),
				p = e => t => ({
					source: "profile",
					action: "click",
					noun: "block_user",
					targetUser: {
						id: Object(r.nb)(t, {
							userName: e
						}).id
					},
					...o.defaults(t)
				}),
				b = e => t => ({
					source: "profile",
					action: "click",
					noun: "unblock_user",
					targetUser: {
						id: Object(r.nb)(t, {
							userName: e
						}).id
					},
					...o.defaults(t)
				})
		},
		"./src/reddit/helpers/wiki/makeWikiPath.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/constants/wiki.ts");
			t.a = (e, t = !1) => {
				let n = "/wiki";
				const o = e.countryCode ? `/${e.countryCode}` : "",
					r = e.languageCode ? `/${e.languageCode}` : "";
				return e.subredditName && (n = t ? `${o}${r}/r/${e.subredditName}/about/wiki` : `${o}${r}/r/${e.subredditName}/wiki`, e.wikiSubRoute && (n += `/${e.wikiSubRoute}`)), e.wikiPageName ? n += `/${e.wikiPageName.toLowerCase()}` : e.wikiSubRoute || (n += `/${s.i}`), n
			}
		},
		"./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n("./src/reddit/helpers/localStorage/index.ts");

			function r(e) {
				const [t, n] = Object(s.useState)(Object(o.s)(e));
				return [t, Object(s.useCallback)(() => {
					n(!0), Object(o.lb)(e)
				}, [])]
			}
		},
		"./src/reddit/hooks/useInboxExposureSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n("./src/reddit/helpers/localStorage/index.ts");

			function r(e) {
				const [t, n] = Object(s.useState)(Object(o.t)(e));
				return [t, Object(s.useCallback)(() => {
					n(!0), Object(o.vb)(e)
				}, [])]
			}
		},
		"./src/reddit/hooks/useInboxPrivacyPolicyBannerSeen.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n("./src/reddit/helpers/localStorage/index.ts");

			function r(e) {
				const [t, n] = Object(s.useState)(() => Object(o.u)(e));
				return [t, Object(s.useCallback)(() => {
					n(!0), Object(o.wb)(e)
				}, [e])]
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = s.eb
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, n) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				l = n.n(c);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: Object(r.a)(e.className, Object(i.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || a.b.gold
				}
			}), "CoinIcon", l.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, n) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Downvote/index.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("downvote", e.isFilled), c.a.downvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...n
			}) => e ? o.a.createElement("span", l({}, n, {
				className: Object(r.a)(c.a.compactDownvoteWrapper, n.className)
			}), o.a.createElement(d, {
				className: c.a.compactDownvote,
				isFilled: t
			})) : o.a.createElement("span", l({}, n, {
				className: Object(r.a)(c.a.downvoteWrapper, n.className)
			}), o.a.createElement(d, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Upvote/index.m.less"),
				c = n.n(i);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("upvote", e.isFilled), c.a.upvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...n
			}) => e ? o.a.createElement("span", l({}, n, {
				className: Object(r.a)(c.a.compactUpvoteWrapper, n.className)
			}), o.a.createElement(d, {
				className: c.a.compactUpvote,
				isFilled: t
			})) : o.a.createElement("span", l({}, n, {
				className: Object(r.a)(c.a.upvoteWrapper, n.className)
			}), o.a.createElement(d, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = ({
				className: e,
				isSubreddit: t,
				...n
			}) => o.a.createElement("svg", c({
				className: Object(r.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n), o.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = l
		},
		"./src/reddit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = (n("./src/polyfill.ts"), n("./src/lib/performanceTimings/index.tsx")),
				r = n("./node_modules/@r/google-tag-manager/compiled.js"),
				a = n("./src/config.ts"),
				i = n("./node_modules/history/esm/history.js"),
				c = n("./node_modules/js-cookie/src/js.cookie.js"),
				l = n.n(c),
				d = n("./node_modules/react/index.js"),
				u = n.n(d),
				m = n("./node_modules/react-router-redux/es/index.js"),
				p = n("./src/lib/makeActionCreator/index.ts"),
				b = n("./src/reddit/actions/recentSubreddits/constants.ts"),
				h = n("./src/lib/isFakeSubreddit/index.ts"),
				f = n("./src/reddit/helpers/name/index.ts");
			const g = /^u_[\w-]+$/;
			var v = n("./src/reddit/selectors/user.ts");
			const y = (e, t) => async (n, s) => {
				var o;
				const r = s();
				if (function(e) {
						return g.test(Object(f.g)(e))
					}(t)) {
					const e = (null === (o = Object(v.k)(r)) || void 0 === o ? void 0 : o.displayText) || "";
					if (function(e, t) {
							return Object(f.g)(e) === Object(f.g)(t)
						}(t, function(e) {
							return `u_${Object(f.g)(e)}`
						}(e))) return
				} else if (Object(h.a)(t)) return;
				n((e => ({
					payload: e,
					type: b.f
				}))(e))
			}, O = Object(p.a)(b.e), x = e => ({
				payload: {
					subreddits: e
				},
				type: b.b
			}), C = e => ({
				payload: e,
				type: b.a
			});
			var E = n("./node_modules/redux-thunk/es/index.js"),
				P = n("./node_modules/request-idle-callback/index.js"),
				j = n("./src/lib/browser/isIncognito.ts"),
				_ = n("./src/lib/constants/index.ts"),
				S = n("./src/lib/extractQueryParams/index.ts"),
				k = n("./src/lib/filterQueryParams/index.ts"),
				w = n("./src/lib/getParsedUserAgent/index.ts"),
				M = n("./src/lib/initializeClient/index.tsx"),
				N = n("./src/lib/loadableAction/index.ts"),
				I = n("./src/lib/matchRoute/index.ts"),
				T = n("./src/lib/performance.js"),
				A = n("./src/lib/reCaptchaEnterprise/index.ts"),
				R = n("./src/lib/safeJSONParse/index.ts"),
				L = n("./src/lib/serviceWorker/index.ts"),
				D = n("./src/reduxMiddleware/apiContext.ts"),
				F = n("./src/reduxMiddleware/gqlContext.ts"),
				B = n("./src/telemetry/index.ts"),
				U = n("./src/telemetry/helpers/sendEvent.ts"),
				G = n("./src/telemetry/models/Timer.ts"),
				H = n("./src/reddit/actions/apiRequestHeaders.ts"),
				W = n("./src/reddit/actions/chat/toggle.ts"),
				q = n("./src/reddit/actions/chat/unreadCount.ts"),
				V = n("./src/reddit/actions/comment/index.ts"),
				K = n("./src/reddit/actions/emailCollection/index.ts"),
				Q = n("./src/reddit/actions/emailVerification.ts"),
				z = n("./src/reddit/actions/googleOneTap/index.ts"),
				J = n("./src/reddit/actions/media.ts"),
				X = n("./src/lib/loadWithRetries/index.ts"),
				Y = () => Object(X.a)(() => n.e("PushNotifications").then(n.bind(null, "./src/reddit/actions/notifications/index.ts"))),
				Z = n("./src/reddit/actions/nps.ts");
			const $ = Object(N.a)(() => Promise.resolve().then(n.bind(null, "./src/reddit/actions/onboarding/index.ts")).then(e => e.default));
			var ee = n("./src/reddit/actions/platform.ts"),
				te = n("./src/reddit/actions/post.ts"),
				ne = n("./src/reddit/actions/reCaptchaEnterprise.ts"),
				se = n("./src/reddit/actions/session.ts"),
				oe = n("./src/reddit/actions/survey/index.ts"),
				re = n("./src/reddit/actions/theme.ts"),
				ae = n("./src/reddit/actions/toaster.ts"),
				ie = n("./src/reddit/actions/users.ts"),
				ce = n("./node_modules/react-redux/es/index.js"),
				le = n("./node_modules/react-router/esm/react-router.js"),
				de = n("./node_modules/reselect/es/index.js"),
				ue = (n("./assets/fonts/redesignIcon2020/redesignFont2020.css"), n("./assets/fonts/BentonSans/font.less"), n("./assets/fonts/IBMPlexSans/font.less"), n("./assets/fonts/NotoMono/font.less"), n("./assets/fonts/NotoSans/font.less"), n("./assets/fonts/VCR/font.less"), n("./src/reddit/components/Root/index.m.less")),
				me = n.n(ue),
				pe = n("./src/reddit/components/Root/AdminPanelLoader.tsx"),
				be = n("./src/lib/classNames/index.ts"),
				he = n("./src/reddit/components/AppRouter/index.tsx"),
				fe = n("./src/reddit/contexts/User/index.tsx");

			function ge(e) {
				return u.a.createElement(fe.b, null, e.children)
			}
			var ve = n("./src/reddit/components/ShortcutWrapper/Loader.ts"),
				ye = n("./src/reddit/constants/shortcuts.ts"),
				Oe = n("./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less"),
				xe = n.n(Oe);
			var Ce = ({
					children: e
				}) => u.a.createElement("div", {
					className: xe.a.shortcutDiv,
					id: ye.b,
					tabIndex: -1
				}, u.a.Children.only(e)),
				Ee = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Pe = n("./src/reddit/contexts/NavbarExp.ts"),
				je = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				_e = n("./src/reddit/components/Header/Sparse.tsx"),
				Se = n("./src/reddit/components/ThemeProvider/index.tsx"),
				ke = n("./src/reddit/contexts/InsideOverlay.tsx"),
				we = n("./src/reddit/controls/Button/index.tsx"),
				Me = n("./src/reddit/featureFlags/index.ts"),
				Ne = n("./src/reddit/icons/svgs/DizzySnoo/index.tsx"),
				Ie = n("./src/reddit/pages/InternalServerError/index.m.less"),
				Te = n.n(Ie);
			const {
				fbt: Ae
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Re = Object(de.c)({
				showError: Me.d.showVerboseErrors
			}), Le = Object(ce.b)(Re)(e => {
				const t = Object(d.useContext)(Pe.a);
				return u.a.createElement(ke.a.Provider, {
					value: !1
				}, u.a.createElement(Se.b, {
					subredditName: ""
				}, u.a.createElement("div", null, u.a.createElement(_e.a, {
					logoHref: "#",
					logoOnClick: () => window.location.reload(!0)
				}), u.a.createElement("div", {
					className: Te.a.container
				}, u.a.createElement("div", {
					className: Te.a.mainContent
				}, u.a.createElement(Ne.a, {
					className: Te.a.dizzySnoo
				}), u.a.createElement("h3", {
					className: Te.a.title
				}, Ae._("Sorry, for some reason reddit can't be reached.", null, {
					hk: "2yRKWG"
				})), u.a.createElement("div", {
					className: Te.a.subTitle
				}, Ae._("Give us a few minutes to fix the problem. Sorry!", null, {
					hk: "1c7Mg0"
				})), u.a.createElement(we.l, {
					onClick: () => window.location.reload(!0)
				}, Ae._("Reload Page", null, {
					hk: "S79U1"
				})), e.showError && u.a.createElement(u.a.Fragment, null, u.a.createElement("div", {
					className: Te.a.subTitle
				}, e.error.message), u.a.createElement("pre", null, u.a.createElement("code", null, e.error.stack)))), u.a.createElement("div", {
					className: Object(be.a)(Te.a.topImageContainer, {
						[Te.a.topImageContainerExp]: t
					})
				}, u.a.createElement("img", {
					className: Te.a.image,
					src: `${a.a.assetPath}/img/error/star_pattern.png`
				})), u.a.createElement("div", {
					className: Te.a.bottomImageContainer
				}, u.a.createElement("img", {
					className: Te.a.image,
					src: `${a.a.assetPath}/img/error/half_planet.png`
				}))))))
			});
			var De = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts");

			function Fe() {
				return (Fe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Be = Object(de.c)({
					isNavbarLikeMwebEnabled: De.a,
					theme: e => e.themes.current
				}),
				Ue = Object(ce.b)(Be, {})(({
					children: e,
					theme: t,
					isNavbarLikeMwebEnabled: n
				}) => {
					const s = Object(je.a)({
						theme: t
					});
					return u.a.createElement(Pe.a.Provider, {
						value: n
					}, u.a.createElement("div", {
						className: Object(be.a)(me.a.container, {
							[me.a.containerExp]: n
						}),
						style: {
							"--background": s.body,
							"--canvas": s.canvas
						}
					}, e))
				});

			function Ge(e) {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: n
					} = e;
					return u.a.createElement(Ee.a, null, u.a.createElement(Ue, null, u.a.createElement(ge, null, u.a.createElement(pe.a, null), u.a.createElement(ve.a, null), u.a.createElement(Ce, null, u.a.createElement(t, null, u.a.createElement(le.d, {
						component: He(n)
					}))))))
				}
				return u.a.createElement(Le, {
					error: e.error
				})
			}
			const He = e => t => u.a.createElement(he.b, Fe({
				routes: e
			}, t));
			var We = n("./src/reddit/constants/localStorage.ts"),
				qe = n("./node_modules/lodash/throttle.js"),
				Ve = n.n(qe),
				Ke = n("./src/reddit/helpers/localStorage/index.ts");
			const Qe = 1e3;
			class ze extends u.a.Component {
				constructor() {
					super(...arguments), this.flush = Ve()(() => Object(Ke.Cb)(this.props.storageKey, this.props.value), Qe)
				}
				componentDidMount() {
					this.props.syncOnMount && this.sync()
				}
				componentDidUpdate() {
					this.sync()
				}
				sync() {
					this.props.enabled && this.flush()
				}
				render() {
					return null
				}
			}
			ze.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const Je = Object(de.a)(v.K, e => ({
				storageKey: We.b.LOCAL_PERSISTED_EXPERIMENTS_STORE,
				value: {},
				enabled: !e
			}));
			var Xe = Object(ce.b)(Je)(ze);
			var Ye = () => u.a.createElement(u.a.Fragment, null, u.a.createElement(Xe, null)),
				Ze = n("./src/reddit/constants/experiments.ts"),
				$e = n("./src/reddit/constants/headers.ts"),
				et = n("./src/reddit/constants/history.ts"),
				tt = n("./src/reddit/constants/jsapiEvents.ts"),
				nt = n("./src/reddit/constants/parameters.ts"),
				st = n("./src/reddit/constants/screenWidths.ts"),
				ot = n("./src/reddit/contexts/AdminEvents.ts"),
				rt = n("./src/reddit/contexts/ApiContext.tsx"),
				at = n("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				it = n("./src/reddit/actions/appBadgeIndicators/constants.ts");
			const ct = () => e => t => e(t);
			var lt = n("./src/lib/safeBadgeUpdate.ts"),
				dt = n("./src/reddit/selectors/appBadges.ts");

			function ut(e) {
				const t = Object(dt.g)(e);
				Object(lt.a)(t)
			}
			var mt = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					return n.type !== it.b && n.type !== it.d || ut(e.getState()), s
				} : ct,
				pt = n("./node_modules/brcast/dist/brcast.es.js"),
				bt = n("./src/reddit/selectors/runTimeEnvVars.ts");
			var ht = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(pt.a)([]);
					return {
						broadcaster: t,
						middleware: n => {
							const s = n.getState();
							return (Object(bt.b)(s) || Object(v.H)(s)) && (e = !0, Object(U.e)(t)), s => o => {
								const r = s(o),
									a = n.getState();
								if (!Object(bt.b)(a)) {
									const n = Object(v.H)(a);
									e && !n ? (e = !1, Object(U.e)(void 0), t.setState([])) : n && !e && (t.setState([]), Object(U.e)(t), e = !0)
								}
								return r
							}
						}
					}
				} : () => ({
					broadcaster: Object(pt.a)([]),
					middleware: () => e => t => e(t)
				}),
				ft = n("./node_modules/lodash/debounce.js"),
				gt = n.n(ft),
				vt = n("./src/lib/domUtils/index.ts");
			const yt = 30 * _.kb;
			let Ot = Date.now();
			const xt = () => {
					Ot = Date.now()
				},
				Ct = !!Object(vt.f)() && {
					passive: !0
				};
			window.addEventListener("click", xt, !1), window.addEventListener("wheel", gt()(xt, 250), Ct), window.addEventListener("mousemove", gt()(xt, 250), Ct), window.addEventListener("keydown", gt()(xt, 250), Ct);
			var Et = e => {
					return document.addEventListener("visibilitychange", (function() {
						"visible" === document.visibilityState && document.hasFocus && Date.now() - Ot >= yt ? (e.dispatch(se.h()), xt()) : xt()
					})), e => t => e(t)
				},
				Pt = n("./node_modules/lodash/pick.js"),
				jt = n.n(Pt),
				_t = n("./src/reddit/actions/header.ts"),
				St = n("./src/reddit/actions/preferences.ts"),
				kt = n("./src/reddit/constants/preferences.ts"),
				wt = n("./src/reddit/helpers/cookies/index.ts");
			const Mt = new Set([St.g, St.i, re.b, St.d, St.o, _t.d, _t.e, St.r]);
			var Nt = e => t => n => {
					const s = t(n);
					if (Mt.has(n.type)) {
						const t = e.getState().user,
							n = jt()(t.prefs, ["hamburgerTray", "globalTheme", "collapsedTraySections", "nightmode", "subscriptionsPinned", kt.b, kt.d, kt.e]);
						Object(wt.a)({
							prefs: n
						})
					}
					return s
				},
				It = n("./src/lib/fastdom/index.ts"),
				Tt = n("./src/reddit/actions/tabBadging.ts"),
				At = n("./src/reddit/selectors/chat.ts"),
				Rt = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				Lt = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				Dt = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Ft = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				Bt = n("./src/reddit/selectors/platform.ts");
			const Ut = new Set([302, 400, 401, 403, 404, 421, 429, 500, 502, 503, 504, 0, void 0, null]),
				Gt = e => {
					var t;
					const {
						currentPage: n
					} = e.platform, s = Object(Bt.r)(e), o = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status, r = Ut.has(o), a = Object(Dt.l)(e, {
						pageLayer: n
					}), i = !(!a || !a.hideFromRobots), c = Ht(e), l = n && n.isRobotIndexable, d = s === _.Mb.COMMENTS || s === _.Mb.COLLECTION_COMMENTS, u = !(!n || !n.urlParams.partialCommentId), m = s === _.Mb.SEARCH_RESULTS || s === _.Mb.SUBREDDIT_LEADERBOARD || d && u;
					return i || r || c || (!1 === l || m) ? m ? "noindex" : "noindex,nofollow" : null
				},
				Ht = e => {
					var t;
					let n = !1;
					const s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams.subredditName;
					if (s) {
						const t = Object(v.f)(e, s);
						n = !!Object(Ft.a)(t, !1, s)
					}
					return n
				};
			var Wt = n("./src/reddit/models/NewStructuredStyles/index.ts");
			const qt = "theme-color",
				Vt = `meta[name="${qt}"]`;

			function Kt(e) {
				return e ? Wt.b.body : Wt.a.body
			}
			var Qt = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					if (n.type === ee.f) {
						const t = e.getState(),
							s = Object(v.J)(t),
							{
								meta: o
							} = n.payload;
						s ? ((e, t) => {
							const n = Object(Lt.g)(e),
								s = Object(Rt.a)(e);
							let o = 0;
							if (n) o = Object(dt.i)(e);
							else if (s) o = Object(dt.j)(e);
							else {
								const t = Object(v.F)(e) || 0;
								o = Object(At.a)(e) + t
							}
							Object(Tt.c)(o, t)
						})(t, o.title) : It.a.write(() => {
							document.title = o.title, ((e, t) => {
								if (t.head) {
									let n = t.querySelector("meta[name='robots']");
									const s = Gt(e),
										{
											head: o
										} = t;
									s ? (n || ((n = t.createElement("meta")).name = "robots", o.appendChild(n)), n.content = s) : n && (n.remove ? n.remove() : n.parentNode ? n.parentNode.removeChild(n) : o.removeChild && o.removeChild(n))
								}
							})(t, document)
						})
					} else if (n.type === St.i) {
						! function(e) {
							It.a.write(() => {
								const t = document.head.querySelector(Vt);
								if (t) {
									const n = Object(v.X)(e);
									t.content = Kt(n)
								}
							})
						}(e.getState())
					}
					return s
				} : ct,
				zt = n("./src/reddit/helpers/survey/index.ts");
			var Jt = "undefined" != typeof document ? e => e => t => ((e => !!Object.keys(zt.b).filter(t => t === e).length)(t.type) && Object(Ke.S)(zt.b[t.type]), e(t)) : ct;
			const Xt = 5 * _.kb;
			var Yt = e => {
					const t = Ve()(() => {
						const t = e.getState().user.session,
							n = new Date(t.expires),
							s = new Date;
						n.getTime() - s.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(se.g())
					}, Xt);
					let n, s;
					const o = () => {
							const n = e.getState().user.session;
							if (!n || !s) return;
							const o = new Date(n.expires),
								r = s + Math.floor(.8 * (o.getTime() - s));
							Date.now() > r && t && t()
						},
						r = e => {
							s = Date.now();
							const o = new Date(e.expires).getTime() - s,
								r = .8 + .1 * Math.random(),
								a = Math.min(Math.floor(r * e.expiresIn * 1e3), Math.floor(r * o));
							n = setTimeout(t, a)
						},
						a = e.getState();
					return a.user.session && r(a.user.session), window.addEventListener("focus", o), window.addEventListener("touchend", o), document.body.addEventListener("mouseenter", o), e => t => (t.type !== se.a && t.type !== se.b && t.type !== se.c && t.type !== se.e || r(t.payload), t.type === se.d && (clearTimeout(n), n = null), e(t))
				},
				Zt = n("./src/reddit/singleton/tracing/index.ts");
			var $t = e => e => t => {
					const n = () => e(t);
					return Zt.b.isEnabled ? Zt.b.recordLocalSpan(t.type, n) : e(t)
				},
				en = n("./src/reddit/actions/frontpage/constants.ts"),
				tn = n("./src/reddit/actions/pages/profileComments/constants.ts"),
				nn = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				sn = n("./src/reddit/actions/pages/profilePosts.ts"),
				on = n("./src/reddit/actions/pages/search/index.ts"),
				rn = n("./src/reddit/actions/pages/subreddit.ts"),
				an = n("./src/reddit/actions/search.ts"),
				cn = n("./src/reddit/actions/subreddit.ts"),
				ln = n("./src/reddit/actions/tracking.ts"),
				dn = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				un = n("./src/reddit/helpers/history/index.ts"),
				mn = n("./src/reddit/helpers/trackers/commentList.ts"),
				pn = n("./src/reddit/helpers/trackers/postList.ts"),
				bn = n("./src/reddit/helpers/trackers/screenview.ts"),
				hn = n("./src/reddit/selectors/subreddit.ts"),
				fn = n("./src/reddit/helpers/routeKey/index.ts");
			var gn = e => t => n => {
					const s = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(ln.c({
							routeKey: t
						}))
					};
					if (n.type === ee.b) {
						const s = e.getState(),
							o = (s.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							a = Object(hn.B)(s, o) || "",
							i = (s.subreddits.about[a] || {}).advertiserCategory;
						r.trigger("pageview", {
							...jt()(n.payload.location, "pathname", "search", "hash"),
							subreddit: o,
							advertiserCategory: i
						});
						const c = s.platform.currentPage && s.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(fn.b)(c, s, Object(dn.a)(s));
							if (e && B.c.has(e)) {
								const t = B.c.end(e);
								!Object(Bt.i)(s) && Object(un.b)(et.b.IsOverlay) || Object(bn.k)(c, s, G.TimerType.UserCancelled, t)
							}
						}
						const l = n.payload.routeMatch;
						if (!l) return t(n);
						const d = Object(dn.a)(s, l),
							u = Object(fn.b)(l, s, d);
						if (!u) return t(n);
						B.c.start(u)
					}
					const o = t(n);
					switch (n.type) {
						case en.b:
						case nn.b:
						case nn.e:
						case sn.PROFILE_POSTS_LOADED:
						case tn.e:
						case rn.SUBREDDIT_LOADED: {
							const {
								key: e,
								token: t
							} = n.payload;
							t || s(e);
							break
						}
						case on.c: {
							const {
								key: e,
								tokens: t
							} = n.payload;
							t.posts || s(e);
							break
						}
						case en.f:
						case cn.i:
						case sn.MORE_POSTS_LOADED: {
							const {
								key: t,
								postIds: o
							} = n.payload;
							s(t);
							const r = e.getState();
							if (o.length) break;
							if (void 0 === r.listings.postOrder.endMarkers[t]) break;
							pn.l(r, t);
							break
						}
						case tn.b: {
							const {
								key: t,
								commentIds: o
							} = n.payload;
							if (s(t), o.length) break;
							const r = e.getState();
							if (void 0 === r.profileCommentsPage.endMarkers[t]) break;
							mn.a(r, t);
							break
						}
						case an.g: {
							const {
								key: e
							} = n.payload;
							s(e);
							break
						}
					}
					return o
				},
				vn = n("./src/reddit/helpers/chooseVariant/index.ts"),
				yn = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				On = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				xn = n("./src/reddit/helpers/trackers/global.ts");
			let Cn = null;
			const En = () => {
				Cn && window.clearTimeout(Cn), Cn = null
			};
			var Pn = e => {
					Cn = window.setTimeout(() => {
						En(), Object(B.a)(Object(xn.d)(3e4)(e()))
					}, 3e4), window.addEventListener("beforeunload", En)
				},
				jn = n("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				_n = n("./src/reddit/actions/connection/constants.ts");
			const Sn = Object(p.a)(_n.b),
				kn = Object(p.a)(_n.a),
				wn = Object(p.a)(_n.c);
			var Mn = n("./src/reddit/actions/meta.ts"),
				Nn = n("./src/reddit/selectors/telemetry.ts");
			const In = (e, t) => Object(B.a)({
					...Nn.defaults(e),
					source: "store",
					action: "install",
					noun: "pwa",
					actionInfo: Object(Nn.actionInfo)(e, {
						type: t
					})
				}),
				Tn = "(display-mode: minimal-ui)";
			const An = 3 * _.Rb;

			function Rn(e) {
				if (!window) return;
				(function(e) {
					const t = e.matchMedia(Tn).matches;
					return e.navigator && e.navigator.standalone || t
				})(window) && e.dispatch(Object(Mn.i)());
				const t = window.matchMedia(Tn);
				t && "function" == typeof t.addEventListener && t.addEventListener("change", t => {
					t.matches ? e.dispatch(Object(Mn.i)()) : e.dispatch(Object(Mn.j)())
				}), window.addEventListener("appinstalled", () => {
					const t = e.getState();
					setTimeout(() => {
						ut(t)
					}, 1e3), In(t, function(e) {
						return "microsoft-store" === new URLSearchParams(e.location.search).get("app-install-source") ? "microsoft-store" : "browser"
					}(window))
				}), window.addEventListener("online", () => {
					e.dispatch(Sn()), setTimeout(() => e.dispatch(wn()), An)
				}), window.addEventListener("offline", () => e.dispatch(kn()))
			}
			var Ln = n("./src/lib/cookieConsent/index.ts"),
				Dn = n("./src/lib/permanentCookieOptions.ts"),
				Fn = n("./src/reddit/constants/cookie.ts");
			const Bn = (e, t) => {
				if (!e) return;
				const n = (l.a.get(Fn.g) || "").split(",");
				if (!n.includes(e)) {
					n.unshift(e);
					const s = n.slice(0, 10).join(","),
						o = {
							name: Fn.g,
							value: s,
							cookieOptions: Object(Dn.a)(),
							cookieContext: t
						};
					Object(Ln.c)(o)
				}
			};
			var Un = n("./src/reddit/layout/page/Listing/index.tsx"),
				Gn = n("./src/reddit/models/Toast/index.ts"),
				Hn = n("./src/reddit/reducers/index.ts"),
				Wn = n("./src/reddit/routes/index.ts");
			var qn = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				Vn = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				Kn = n("./src/reddit/selectors/experiments/postCommentFollow.ts");
			const Qn = {
					displayDelay: 15,
					displayOnRoutes: [_.Mb.SUBREDDIT, _.Mb.COMMENTS],
					experimentName: Ze.nd,
					experimentVariant: Ze.sd.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				zn = e => {
					const {
						base_url: t
					} = Object(Nn.requestWithParams)(e), n = Object(Bt.b)(e), s = n && n.urlParams.partialPostId, o = n && n.urlParams.subredditName;
					return {
						...t && {
							rbl: t
						},
						...o && {
							s: o
						},
						...s && {
							p: s
						}
					}
				},
				Jn = e => {
					if (((({
							experimentName: e,
							experimentVariant: t
						}, n) => n.experimentOverrides[e] === t)(Qn, e) || (({
							samplingRate: e,
							seed: t
						}) => !!t && 0 === Math.floor(t * e))(Qn)) && (({
							displayOnRoutes: e
						}, t) => {
							const n = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!n && e.includes(n)
						})(Qn, e) && (({
							isSEOOnly: e
						}, t) => !e || t.meta.isSessionSeo)(Qn, e) && (({
							experimentName: e,
							experimentVariant: t
						}, n) => Object(vn.c)(n, {
							experimentName: e,
							experimentEligibilitySelector: vn.a
						}) === t)(Qn, e)) return {
						displayDelay: Qn.displayDelay,
						externalVars: zn(e)
					}
				};
			var Xn = n("./src/reddit/selectors/meta.ts"),
				Yn = n("./src/reddit/selectors/onboarding.ts");
			var Zn = n("./src/reddit/singleton/EventSystem.ts"),
				$n = n("./src/lib/initializeClient/installReducer.ts"),
				es = n("./src/reddit/reducers/features/categories/index.ts"),
				ts = n("./src/lib/sentry/index.ts"),
				ns = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const ss = Object(p.a)(ns.C),
				os = () => {
					return Object(Ke.A)(We.b.RPAN_USER_SETTINGS_STORE) || void 0
				};
			var rs = n("./src/reddit/actions/global/constants.ts");
			Object($n.a)({
				features: {
					categories: es.a
				}
			});
			const as = Object(p.a)(rs.a),
				is = e => async (t, n) => {
					t((() => async e => {
						const t = os();
						t && e(ss(t))
					})());
					const s = n();
					s.user.loid.loid || s.meta.isBot || ts.c.withScope(e => {
						Object(ts.a)(e, {
							serverLogging: !1
						}), ts.c.captureMessage("User has no LOID set")
					});
					const {
						localStorageData: o
					} = e;
					o && t(as(o))
				};
			var cs = n("./src/reddit/actions/login.ts"),
				ls = n("./src/reddit/selectors/experiments/onboarding.ts");
			const ds = /^\/account\/magic_link\/landing\/[^\/]+\/?$/,
				us = () => async (e, t) => {
					var n;
					const s = t();
					(e => {
						if (!e) return !1;
						const t = new URL(e).pathname;
						return ds.test(t)
					})(null === (n = s.platform) || void 0 === n ? void 0 : n.sessionReferrer) && !Object(ls.b)(s) && e(Object(cs.j)())
				};
			var ms = n("./src/reddit/actions/notificationsInbox/index.ts"),
				ps = n("./src/reddit/constants/countrySites.ts"),
				bs = n("./src/reddit/selectors/countrySites.ts");
			const hs = ps.b ? `${ps.a}/${ps.b}` : `${ps.a}`,
				fs = (e, t) => {
					return !!Object(bs.d)(e) && !(t && !Object(bs.c)(t))
				},
				gs = e => e.startsWith("/r/") ? e.replace("/r/", `/${hs}/r/`) : e;
			var vs = n("./src/reddit/selectors/experiments/countrySites.ts");
			var ys = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				Os = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts"),
				xs = n("./src/reddit/selectors/experiments/goodVisitSearchFeed.ts");
			Object(o.e)(o.b.EntryPointStart);
			const Cs = Object(D.a)({
					actionDispatchers: {
						reddaidReceived: ie.u,
						loidReceived: ie.r,
						sessionTrackerReceived: ie.z
					},
					authHeaders: {
						[$e.a]: "desktop2x"
					},
					cookies: l.a,
					receivedActions: {
						reddaidReceived: ie.d,
						loidReceived: ie.b,
						sessionTrackerReceived: ie.k,
						userAuthenticated: se.c,
						userLoggedOut: se.d,
						userReauthenticated: se.e,
						headersReceived: H.a
					},
					onBeforeRequestFactory: jn.a,
					statsAppName: _.n.Redesign
				}),
				Es = Object(F.a)(Cs.apiContext),
				Ps = ht();
			let js;
			Object(M.a)({
				reducerMap: Hn.a,
				routes: Wn.a,
				apiContext: Cs.apiContext,
				gqlContext: Es.gqlContext,
				appFactory: (e, t) => u.a.createElement(ot.a.Provider, {
					value: Ps.broadcaster
				}, u.a.createElement(rt.a.Provider, {
					value: {
						apiContext: Cs.apiContext,
						gqlContext: Es.gqlContext
					}
				}, u.a.createElement(at.b, null, u.a.createElement(Ge, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), u.a.createElement(Ye, null)))),
				appName: _.n.Redesign,
				history: Object(i.a)({
					getUserConfirmation(e, t) {
						const n = js;
						if (!n) return;
						n.dispatch(Object(ee.l)({
							allowNavigationCallback: (e = !1) => {
								t(e), n.dispatch(Object(ee.k)())
							}
						}))
					}
				}),
				customMiddleware: [E.a.withExtraArgument({
					routes: Wn.a,
					apiContext: Cs.apiContext,
					gqlContext: Es.gqlContext
				}), Ps.middleware, Et, Cs.middleware, Es.middleware, Yt, Nt, $t, gn, Qt, Jt, ys.a, mt, e => t => n => {
					let s, o;
					if (!Object(vs.a)(e.getState()) || !n.payload) return t(n);
					o = (null == (s = e.getState().platform.currentPage) ? void 0 : s.urlParams.subredditName) || "";
					const r = {
						...n.payload
					};
					try {
						void 0 !== n.payload.posts && (n.payload.posts = ((e, t, n) => {
							if (!fs(e, n)) return t;
							for (const [s, o] of Object.entries(t)) {
								const e = o.belongsTo.id,
									t = Object(bs.c)(e);
								(n || t) && (o.permalink = o.permalink.replace("https://www.reddit.com/r/", `https://www.reddit.com/${hs}/r/`))
							}
							return t
						})(e.getState(), n.payload.posts, o)), void 0 !== n.payload.comments && (n.payload.comments = ((e, t, n) => {
							if (!fs(e, n)) return t;
							for (const [s, o] of Object.entries(t)) {
								const e = o.subredditId,
									t = Object(bs.c)(e);
								(n || t) && (o.permalink = gs(o.permalink))
							}
							return t
						})(e.getState(), n.payload.comments, o))
					} catch (a) {
						n.payload = {
							...r
						}
					}
					return t(n)
				}, e => t => n => {
					if (!Object(vs.a)(e.getState()) || !n.payload) return t(n);
					const s = {
						...n.payload
					};
					try {
						n.type === b.e ? n.payload = ((e, t) => {
							if (!fs(e, t.name)) return t;
							const n = Object(bs.c)(t.id);
							if (t.name || n) {
								const e = gs(t.url);
								return {
									...t,
									url: e
								}
							}
							return t
						})(e.getState(), n.payload) : void 0 !== n.payload.subreddits && (n.payload.subreddits = ((e, t) => {
							if (!fs(e, "")) return t;
							for (const [n, s] of Object.entries(t)) {
								const e = Object(bs.c)(s.id),
									o = Object(bs.c)(s.name);
								if (e || o) {
									const e = gs(s.url),
										o = {
											...s,
											url: e
										};
									t[n] = o
								}
							}
							return t
						})(e.getState(), n.payload.subreddits))
					} catch (o) {
						n.payload = {
							...s
						}
					}
					return t(n)
				}],
				modifyInitialData: ({
					initialData: e,
					browserHistory: t
				}) => {
					const n = e.platform.currentPage ? e.platform.currentPage.key : "";
					if (n) {
						const s = t.location.key;
						e.platform.currentPage && (e.platform.currentPage.key = s);
						for (const t of ["referrers", "metas"]) Object.keys(e.platform[t]).length && (e.platform[t] = {
							[s]: e.platform[t][n]
						})
					}
					return e
				},
				staticPages: {
					loading: u.a.createElement(Un.a, {
						content: null,
						sidebar: null
					})
				},
				preRender: ({
					browserHistory: e,
					routes: t,
					store: n
				}) => {
					window.addEventListener("message", e => {
							const t = a.a.mediaUrl;
							e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || n.dispatch(Object(J.j)({
								height: e.data.height || 0,
								isDeleted: e.data.isDeleted || !1,
								postId: `t3_${e.data.id36}`
							}))
						}), Rn(n), Object(U.d)("enabled" === Object(vn.c)(n.getState(), {
							experimentEligibilitySelector: vn.a,
							experimentName: Ze.Ye,
							expEventOverride: !1
						})), Object(U.c)("enabled" === Object(vn.c)(n.getState(), {
							experimentEligibilitySelector: vn.a,
							experimentName: Ze.af
						})), Object(U.g)("enabled" === Object(vn.c)(n.getState(), {
							experimentEligibilitySelector: vn.a,
							experimentName: Ze.Ze
						})), Object(U.f)(Es.gqlContext), window.addEventListener("beforeunload", () => {
							const e = n.getState();
							Object(L.b)("sendV2Event", Object(xn.a)("tab_closed")(e))
						}),
						function(e) {
							const t = String(e.split("/")[1]).toLowerCase();
							return "framedgild" === t || "framedmodal" === t
						}(e.location.pathname) || n.dispatch(Object(ee.h)());
					const s = Object(v.X)(n.getState());
					n.dispatch(Object(re.c)({
						nightmode: s
					}));
					const o = (e => e.tracing.traceId)(n.getState());
					if (o && (e => Object(vn.c)(e, {
							experimentEligibilitySelector: vn.a,
							experimentName: Ze.E
						}) === Ze.O.Enabled)(n.getState())) {
						Zt.b.enableTracing(!0);
						const e = Zt.b.createTraceFromId(o);
						Zt.b.setParent(e)
					}
					n.dispatch(Object(ee.i)(t));
					e.listen((e, s) => {
						const o = Object(I.a)(Object(i.e)(e), t, n.getState());
						n.dispatch(Object(ee.j)(e, s, o))
					});
					const r = n.getState(),
						{
							currentPage: c
						} = r.platform;
					if (c) {
						const e = [];
						Object(Bt.j)(r) && e.push(nt.e), e.length > 0 && n.dispatch(Object(m.c)(Object(k.a)(c.url, e)))
					}
					return yn.a.initialize(), {
						localStorageData: Object(Ke.B)()
					}
				},
				postRender: ({
					browserHistory: e,
					routes: t,
					serverDocumentLength: i,
					store: c,
					localStorageData: l
				}) => {
					var d, u;
					js = c;
					e.listen((e, t) => {
						const n = c.getState(),
							{
								urlParams: s,
								queryParams: o
							} = n.platform.currentPage,
							r = {
								action: t,
								location: e,
								urlParams: s,
								queryParams: o
							},
							a = s.subredditName,
							i = Object(hn.B)(n, a) || "";
						if (Bn(i, {
								country: n.meta.country
							}), i) {
							c.dispatch(y(i, a));
							const e = Object(Bt.e)(n);
							e && c.dispatch(O(e))
						}
						Zn.a.publish(tt.c, r, document)
					});
					const m = c.getState(),
						p = Object(ys.b)();
					c.dispatch((e => async t => {
						const n = {},
							s = new Set;
						e.forEach(e => {
							s.add(e.id), n[e.id] || (n[e.id] = e)
						}), t(x(n)), t(C(Array.from(s)))
					})(p));
					const b = (m.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						h = Object(hn.B)(m, b) || "";
					if (b) {
						c.dispatch(y(h, b));
						const e = Object(Bt.e)(m);
						e && c.dispatch(O(e))
					}
					const f = Object(hn.B)(m, b) || "",
						g = (m.subreddits.about[f] || {}).advertiserCategory;
					if (r.setup({
							jailUrl: "https://www.redditmedia.com/gtm/jail",
							containerId: a.a.gtmContainerId,
							payload: {
								user: m.user.account ? m.user.account.id : m.user.loid.loid
							}
						}), r.trigger("pageview", {
							subreddit: b,
							advertiserCategory: g
						}), c.dispatch(is({
							localStorageData: l
						})), Object(qn.f)(m) && Object(z.d)(m), c.dispatch(Object(z.c)()), Object(Yn.b)(m) && (c.dispatch($()), history.replaceState(history.state, "", Object(k.a)(window.location.href, [nt.u]))), c.dispatch(us()), window.addEventListener("load", () => {
							const t = c.getState(),
								{
									currentPage: r
								} = t.platform,
								a = (r.urlParams.subredditName || "").toLowerCase(),
								l = Object(hn.B)(t, a) || "";
							if (Object(L.a)(), Bn(l, {
									country: t.meta.country
								}), r && r.meta) {
								const a = r.meta.name;
								if (Object(B.b)(_.n.Redesign, {
										page: a,
										type: "rum"
									}), Object(w.c)(t.meta.userAgent) && window.innerWidth > st.b) {
									const e = Object(o.f)(i);
									T.a && T.a.timing && Zt.b.isEnabled && (Zt.b.recordPerformanceTimings(`${a}_time_to_first_byte`, T.a.timing.fetchStart, T.a.timing.responseStart), Zt.b.recordPerformanceTimings(`${a}_time_to_interactive`, T.a.timing.fetchStart, T.a.timing.domInteractive));
									const n = [],
										s = !0;
									if (Object(Bt.g)(t)) {
										const e = Object(On.a)(t);
										n.push(Object(On.c)(e)), Object(Vn.d)(t)
									}
									const r = {
										isLoggedIn: Object(v.K)(t),
										name: a,
										statsdPathsForExperiments: n
									};
									Object(o.g)(r, e, s)
								}
								const l = T.a.timing.domInteractive - T.a.timing.navigationStart;
								Object(bn.k)(r.routeMatch, c.getState(), G.TimerType.Initial, l, r.urlParams);
								const d = Object(S.a)(window.location.href);
								d && d.get(nt.a) && history.replaceState(history.state, "", Object(k.a)(window.location.href, [nt.a])), Object(R.a)(d.get(nt.B)) && c.dispatch(Object(ae.f)({
									kind: Gn.b.SuccessCommunity,
									text: s.fbt._("Email verification complete", null, {
										hk: "bqMP6"
									})
								})), d.get(nt.C) && (c.dispatch(Object(Q.a)(d.get(nt.C))), history.replaceState(history.state, "", Object(k.a)(window.location.href, [nt.C])));
								let u = !1;
								const m = Object(v.N)(t);
								if ((Object(un.b)(et.b.JustLoggedIn) || m) && (c.dispatch(Object(ae.f)({
										text: s.fbt._("Successfully logged in!", null, {
											hk: "2POUVB"
										})
									})), u = !0, Object(un.c)(et.b.JustLoggedIn), history.replaceState(history.state, "", Object(k.a)(window.location.href, [nt.o]))), Object(un.b)(et.b.JustLoggedOut) && (u = !0, Object(un.c)(et.b.JustLoggedOut)), Y().then(({
										subscribeToPermissionsChange: e
									}) => c.dispatch(e())), !1 !== Ke.T()) {
									let n;
									Object(qn.a)(t) && (n = () => {
										const {
											dispatch: t
										} = c;
										e.listen(() => t(Object(z.b)())), t(Object(z.b)())
									}), Y().then(e => e.requestNotificationsPermissions).then(e => c.dispatch(e(u, !1, n)))
								}
								if (a === _.Mb.MULTIREDDIT && r.routeMatch) {
									const {
										multiredditName: e,
										username: t
									} = r.routeMatch.match.params;
									c.dispatch(Object(N.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.recommendationsRequested))({
										multiredditName: e,
										username: t
									}))
								}
								Object(Vn.a)(c.getState()), Object(Vn.g)(c.getState()), c.dispatch(Object(K.c)())
							}
							Object(v.K)(c.getState()) && (Object(Rt.a)(c.getState()) || c.dispatch(Object(q.d)()), c.dispatch(Object(W.e)())), Object(P.requestIdleCallback)(async () => {
								c.dispatch(Object(Z.d)()), await Object(j.a)() && Object(xn.b)(c.getState());
								const t = async () => {
									const e = c.getState(),
										t = Jn(e);
									t && (await (async e => {
										return (await Object(X.a)(() => n.e("UserZoomIntegration").then(n.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
									})(t), s && s())
								}, s = e.listen((e, n) => {
									"POP" !== n && t()
								});
								t()
							}), document.addEventListener("visibilitychange", () => {
								var e;
								const t = c.getState(),
									{
										currentPage: n
									} = t.platform;
								if ("visible" !== document.visibilityState && (Ke.Pb(Date.now()), Object(B.a)(Object(xn.a)("tab_backgrounded")(t))), (e => Object(vn.c)(e, {
										experimentEligibilitySelector: e => !Object(Xn.d)(e),
										experimentName: Ze.Ub
									}) === Ze.fc.Enabled)(t) && "visible" === document.visibilityState && n && Object(bn.k)(n.routeMatch, c.getState(), G.TimerType.Revisit, 0, n.urlParams, !0), "visible" === document.visibilityState) {
									const e = Ke.v(),
										t = Ke.w(),
										n = Ke.G(),
										s = Ke.P();
									if (s && e && n) {
										const o = Date.now() - s;
										Object(B.a)(Object(xn.e)("tab_backgrounded", n)(c.getState(), o, e, t))
									}(s || e || n || t) && (Ke.ab(), Ke.eb(), Ke.cb(), Ke.bb())
								}
								Object(xs.a)(c.getState()) && (null === (e = null == n ? void 0 : n.locationState) || void 0 === e ? void 0 : e.clickId) && Os.d[n.locationState.clickId] && !Os.d[n.locationState.clickId].completed && ("visible" !== document.visibilityState ? Object(Os.b)(n.locationState.clickId) : Object(Os.c)(n.locationState.clickId))
							}), Object(Xn.g)(c.getState()) && Pn(c.getState), c.dispatch(Object(oe.m)())
						}), window.history.scrollRestoration = "manual", Zn.a.attachStore(c), c.dispatch(Object(ne.b)(A.a.PageLoad)), Object(Lt.k)(c.getState()) && c.dispatch(Object(ms.e)()), Object(Kn.b)(c.getState())) {
						const e = Ke.p(null === (d = c.getState().user.account) || void 0 === d ? void 0 : d.id);
						c.dispatch(Object(te.C)({
							posts: null != e ? e : []
						}))
					}
					if (Object(Kn.a)(c.getState())) {
						const e = Ke.o(null === (u = c.getState().user.account) || void 0 === u ? void 0 : u.id);
						c.dispatch(Object(V.k)({
							comments: null != e ? e : []
						}))
					}
				},
				raven: {
					tags: {
						project: _.n.Redesign
					}
				},
				ssr: !0,
				target: document.getElementById("2x-container"),
				timingsSampleRate: 1
			})
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.m.less": function(e, t, n) {
			e.exports = {
				backgroundContainer: "_2wxsLGNmMLx6sEMLJyn2o9"
			}
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				l = n("./src/reddit/layout/page/Listing/BackgroundContainer.m.less"),
				d = n.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(a.a)(e => {
				const {
					backgroundColor: t,
					className: n,
					redditStyle: s,
					theme: a,
					...l
				} = e, m = Object(c.a)(e), p = {
					"--pseudo-before-background": t || Object(i.g)(m.canvas, m.canvasImgUrl, m.canvasImgPosition)
				};
				return o.a.createElement("div", u({
					className: Object(r.a)(d.a.backgroundContainer, n),
					style: p
				}, l))
			})
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, n) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7",
				onlyChildMargin: "_2OVNlZuUd8L9v0yVECZ2iA"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				d = n("./src/reddit/selectors/structuredStyles.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.m.less"),
				m = n.n(u);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = Object(l.u)(),
				h = Object(a.c)({
					isEditing: d.i,
					layout: (e, t) => t.forcedLayout || Object(l.Q)(e, t)
				}),
				f = Object(r.b)(h);
			t.a = b(f(({
				className: e,
				hideOnlyChildMargin: t,
				disableFullscreen: n,
				dispatch: s,
				fitPageToContent: r,
				forcedLayout: a,
				isCollectionLayout: d,
				isEditing: u,
				layout: b,
				pageLayer: h,
				...f
			}) => o.a.createElement("div", p({
				className: Object(i.a)(e, m.a.styledContent, {
					[m.a.mLargePostLayout]: b === c.g.Large || Object(l.N)(h),
					[m.a.mDisableFullScreen]: n && !d,
					[m.a.mClassicWidth]: d,
					[m.a.mIsEditing]: !!u,
					[m.a.mCanFlexFullWidth]: !r,
					[m.a.onlyChildMargin]: !t
				})
			}, f))))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, n) {
			e.exports = {
				body: "_31N0dvxfpsO6Ur5AKx4O5d",
				sidebar: "_3Kd8DQpBIbsr5E1JcrMFTY",
				defaultLayout: "_1tvThPWQpORoc2taKebHxs",
				"m-collectionLayout": "K1OCXipJxqOt01sOdQXEx",
				mCollectionLayout: "K1OCXipJxqOt01sOdQXEx",
				outerContainer: "qYj03fU5CXf5t2Fc5iSvg",
				outerContainerExp: "_35NDNOyTzBcywfeEavUt6p",
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				a = n("./src/reddit/layout/page/Listing/Content.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/componentSizes.ts"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				d = n("./src/reddit/constants/screenWidths.ts"),
				u = n("./src/reddit/contexts/NavbarExp.ts"),
				m = n("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				p = n("./src/reddit/layout/page/Listing/index.m.less"),
				b = n.n(p);
			t.a = e => {
				const {
					backgroundColor: t,
					className: n,
					containerRef: p,
					content: h,
					contentBanner: f,
					contentClassName: g,
					contentNavBar: v,
					disableFullscreen: y,
					fitPageToContent: O,
					forcedLayout: x,
					hideOnlyChildMargin: C,
					isCollectionLayout: E,
					isPageSwapped: P,
					maxWidth: j,
					navBar: _,
					redditStyle: S,
					sidebar: k,
					sidebars: w,
					trendingUnit: M,
					subredditId: N
				} = e, I = M ? "28px" : "0", T = P ? {
					marginRight: `${c.q}px`,
					marginTop: I
				} : {
					marginLeft: `${c.q}px`,
					marginTop: I
				}, A = k && o.a.createElement("div", {
					className: Object(i.a)(b.a.sidebar, E ? b.a["m-collectionLayout"] : b.a.defaultLayout),
					style: T
				}, k), R = o.a.createElement(a.a, {
					hideOnlyChildMargin: C,
					className: g,
					disableFullscreen: y,
					fitPageToContent: O,
					forcedLayout: x,
					isCollectionLayout: E
				}, f, h);
				let L;
				L = w ? o.a.createElement(o.a.Fragment, null, w[0], R, w[1]) : P ? o.a.createElement(o.a.Fragment, null, A, R) : o.a.createElement(o.a.Fragment, null, R, A);
				const D = y ? `${j||d.a+2*c.m}px` : "100%",
					F = Object(s.useContext)(u.a);
				return o.a.createElement(m.a, {
					subredditId: N
				}, o.a.createElement("div", {
					className: Object(i.a)(b.a.outerContainer, l.i, n, {
						[b.a.outerContainerExp]: F
					}),
					ref: p
				}, o.a.createElement(r.a, {
					className: l.h,
					redditStyle: S,
					backgroundColor: t
				}), o.a.createElement("div", {
					className: b.a.innerContainer
				}, o.a.createElement("div", {
					className: b.a.bannerNavContainer
				}, _), v, (e => e.hero ? o.a.createElement(o.a.Fragment, null, e.hero) : null)(e), o.a.createElement("div", {
					style: {
						maxWidth: D
					}
				}, M), o.a.createElement("div", {
					className: b.a.body,
					style: {
						maxWidth: D
					}
				}, L))))
			}
		},
		"./src/reddit/layout/row/InlineButton/index.m.less": function(e, t, n) {
			e.exports = {
				inlineButton: "_10K5i7NW6qcm-UoCtpB3aK"
			}
		},
		"./src/reddit/layout/row/InlineButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/layout/row/InlineButton/index.m.less"),
				r = n.n(o);
			t.a = s.a.button("inlineButton", r.a)
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, n) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				c = n.n(i);
			t.a = Object(r.a)(e => o.a.createElement("div", {
				className: Object(a.a)(c.a.exapndLeftContainer, e.className)
			}, o.a.createElement("div", {
				className: c.a.left
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: c.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/models/ContentGate.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.CustomFeedDoesNotExist = "CustomFeedDoesNotExist", e.GoldSubreddit = "GoldSubreddit", e.Nsfw = "Nsfw", e.NsfwCustomFeed = "NsfwCustomFeed", e.PrivateSubreddit = "PrivateSubreddit", e.ProfileDoesNotExist = "ProfileDoesNotExist", e.ProfileDeleted = "ProfileDeleted", e.ProfileSuspended = "ProfileSuspended", e.ProfileBlockedForLegalReason = "ProfileBlockedForLegalReason", e.QuarantinedSubreddit = "QuarantinedSubreddit", e.SubredditBanned = "SubredditBanned", e.SubredditBlockedForLegalReason = "SubredditBlockedForLegalReason", e.SubredditDoesNotExist = "SubredditDoesNotExist", e.PostBlockedForLegalReason = "PostBlockedForLegalReason"
				}(s || (s = {}))
		},
		"./src/reddit/models/EconManagement/index.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.hasOwnProperty("source")
			}

			function o(e) {
				return "object" != typeof e[0]
			}
			var r;
			n.d(t, "c", (function() {
					return s
				})), n.d(t, "b", (function() {
					return o
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.Default = "default", e.Loading = "loading", e.Error = "error"
				}(r || (r = {}))
		},
		"./src/reddit/models/EmailSettings/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Success = "SUCCESS", e.AlreadyVerified = "EMAIL_ALREADY_VERIFIED", e.WrongUser = "EMAIL_VERIFY_WRONG_USER", e.Error = "EMAIL_VERIFY_ERROR"
				}(s || (s = {}))
		},
		"./src/reddit/models/NotificationInbox/index.ts": function(e, t, n) {
			"use strict";
			var s, o, r, a;
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return o
				})), n.d(t, "c", (function() {
					return r
				})),
				function(e) {
					e.AwardReceived = "AWARD_RECEIVED", e.CakeDay = "CAKE_DAY", e.ChatMessage = "CHAT_MESSAGE", e.CommentFollow = "COMMENT_FOLLOW", e.CommentReply = "COMMENT_REPLY", e.HFNSubredditInterestingPost = "SUBREDDIT_UPDATES_INTERESTING_POST", e.LifecyclePostSuggestions = "LIFECYCLE_POST_SUGGESTIONS", e.PostFollow = "POST_FOLLOW", e.PostReply = "POST_REPLY", e.PrivateMessage = "PRIVATE_MESSAGE", e.SubredditRecommendation = "SUBREDDIT_RECOMMENDATION", e.ThreadReplies = "THREAD_REPLIES", e.TopLevelComment = "TOP_LEVEL_COMMENT", e.UpvoteComment = "UPVOTE_COMMENT", e.UpvotePost = "UPVOTE_POST", e.UsernameMention = "USERNAME_MENTION", e.UserNewFollower = "USER_NEW_FOLLOWER"
				}(s || (s = {})),
				function(e) {
					e.Award = "AWARD", e.Bell = "BELL", e.Chat = "CHAT", e.Comment = "COMMENT", e.Heart = "HEART", e.Live = "LIVE", e.NotifyAll = "NOTIFY_ALL", e.Redditor = "REDDITOR", e.Reply = "REPLY", e.SortLive = "SORT_LIVE", e.SortRising = "SORT_RISING", e.SortTop = "SORT_TOP", e.Trophy = "TROPHY", e.Upvote = "UPVOTE"
				}(o || (o = {})),
				function(e) {
					e.CopyrightTakedown = "COPYRIGHT_TAKEDOWN", e.ContentTakedown = " CONTENT_TAKEDOWN", e.Author = "AUTHOR", e.Moderator = "MODERATOR", e.CommunityOps = "COMMUNITY_OPS", e.AntiEvilOps = "ANTI_EVIL_OPS", e.Reddit = "REDDIT", e.Deleted = "DELETED", e.AutomodFiltered = "AUTOMOD_FILTERED"
				}(r || (r = {})),
				function(e) {
					e.InboxNotification = "InboxNotification", e.InboxNotificationContext = "InboxNotificationContext", e.NotificationIcon = "NotificationIcon", e.AwardReceivedInboxNotificationContext = "AwardReceivedInboxNotificationContext", e.BasicInboxNotificationContext = "BasicInboxNotificationContext", e.CommentInboxNotificationContext = "CommentInboxNotificationContext", e.PostInboxNotificationContext = "PostInboxNotificationContext", e.PostSubredditInboxNotificationContext = "PostSubredditInboxNotificationContext", e.SubredditInboxNotificationContext = "SubredditInboxNotificationContext"
				}(a || (a = {}))
		},
		"./src/reddit/models/NotificationSettingsLayout/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Email = "EMAIL", e.Push = "PUSH", e.CommunityAlerts = "COMMUNITY_ALERTS", e.ModCommunityAlerts = "MOD_COMMUNITY_ALERTS"
				}(s || (s = {}))
		},
		"./src/reddit/models/Sso/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.Apple = "https://appleid.apple.com", e.Google = "https://accounts.google.com"
				}(s || (s = {}))
		},
		"./src/reddit/pages/InternalServerError/index.m.less": function(e, t, n) {
			e.exports = {
				dizzySnoo: "UaNg246yNIpwcq_Uhe6vC",
				container: "EXdERxzjUGqvBK511L1Eq",
				mainContent: "_3dyrEHC8cc6dIOTUPQmv1S",
				title: "_1PdcLVyQbMPVKRikIspqb_",
				subTitle: "_1YhiRkum1oGZUdm5i1mHFJ",
				image: "_1gTZDLeeF0VPQsS6Iz5boy",
				bottomImageContainer: "_3sveU8lpcXyGOpDXsXc9xg",
				imageContainer: "_2wX-WzezrtDmDaxm8BR4zz",
				topImageContainer: "_3zW_PbmBAhs9ARwV_Yl9BR",
				topImageContainerExp: "_2NU2A-ZU5J-cxP78RF0oeb"
			}
		},
		"./src/reddit/pages/NotificationsInbox/Content/EmptyState.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/controls/Button/index.tsx");
			var u = e => r.a.createElement("svg", {
					className: e.className,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 21"
				}, r.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M18.4 14.788c-.662 0-1.2-.537-1.2-1.202l-.012-5.998C17.188 3.625 13.963.4 10 .4 6.037.4 2.811 3.625 2.811 7.586l-.01 6.002c0 .663-.54 1.2-1.2 1.2a1.199 1.199 0 100 2.4h16.8a1.2 1.2 0 100-2.4zm-9.6 3.6H7.6c0 1.324 1.076 2.4 2.4 2.4 1.323 0 2.4-1.076 2.4-2.4H8.8zm-3.6-4.797c0 .422-.087.822-.22 1.197H15.02a3.554 3.554 0 01-.22-1.2l-.013-5.997A4.794 4.794 0 0010 2.8a4.794 4.794 0 00-4.789 4.787l-.01 6.003z"
				})),
				m = n("./src/reddit/pages/NotificationsInbox/Content/index.m.less"),
				p = n.n(m);
			const b = i.a.wrapped(u, "BellOutline", p.a),
				h = ({
					isBannerEnabled: e,
					isLoggedIn: t
				}) => {
					const n = Object(c.d)();
					return r.a.createElement("div", {
						className: Object(a.a)(p.a.emptyState, {
							[p.a.emptyStateWithBanner]: Boolean(e),
							[p.a.loggedOutState]: !t
						})
					}, r.a.createElement(b, null), r.a.createElement("h1", {
						className: p.a.emptyTitle
					}, s.fbt._("Be the first to know", null, {
						hk: "2mNJO0"
					})), r.a.createElement("p", {
						className: p.a.emptyDescription
					}, s.fbt._("This is where you get updates on your activity and recommendations", null, {
						hk: "27V2PG"
					})), !t && r.a.createElement("div", {
						className: p.a.emptyStateLoggedOutContainer
					}, r.a.createElement(d.j, {
						onClick: () => n(Object(l.i)())
					}, s.fbt._("Log In", null, {
						hk: "ZR3pC"
					})), r.a.createElement("span", {
						className: p.a.emptyStateDivider
					}), r.a.createElement(d.j, {
						onClick: () => n(Object(l.k)())
					}, s.fbt._("Sign Up", null, {
						hk: "3Jd0SI"
					}))))
				}
		},
		"./src/reddit/pages/NotificationsInbox/Content/index.m.less": function(e, t, n) {
			e.exports = {
				notificationsBannersContainer: "_30M-VGAobP1YuoM04brOVT",
				notificationsContainer: "_1B9l9ftY8mkrILj7ISvc9_",
				NotificationUnit: "_1xxYCr84JqFV0qli3rFj6Y",
				notificationUnit: "_1xxYCr84JqFV0qli3rFj6Y",
				emptyState: "_1q1-Ijtc4SLFaVvDcMzus8",
				emptyStateLoggedOutContainer: "_3RdkUuOKNnzN1UCWQNo6gI",
				emptyStateDivider: "-CQMcpUJHUU0cafBbsr__",
				loggedOutState: "_3DbA2SOgvxHXDiHhZbGEVw",
				emptyStateWithBanner: "_3cq_2lLFVJmAq-zXfEMOMD",
				emptyTitle: "qVJaimYNUSSDa5PIOSZoi",
				emptyDescription: "ytrwXC5fcR-1vocS1eSbT",
				BellOutline: "_3xFZexoKoKqw8cjNoivDDZ",
				bellOutline: "_3xFZexoKoKqw8cjNoivDDZ",
				Divider: "_2ACXQJ7zvrPMS_i8J15E_s",
				divider: "_2ACXQJ7zvrPMS_i8J15E_s"
			}
		},
		"./src/reddit/routes/acknowledgements/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/page.ts");
			const a = "/acknowledgements",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "Acknowledgements",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Acknowledgements").then(n.bind(null, "./src/reddit/pages/Acknowledgements/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Acknowledgements/index.tsx"
					}
				}),
				c = {
					action: r.a,
					chunk: o.s.ACKNOWLEDGEMENTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Mb.ACKNOWLEDGEMENTS
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/appeal/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/page.ts");
			const a = ["/appeal", "/appeals"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "Appeal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Appeal").then(n.bind(null, "./src/reddit/pages/AppealPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/AppealPage/index.tsx"
					}
				}),
				c = {
					action: r.a,
					chunk: o.s.APPEAL,
					component: i,
					exact: !0,
					meta: {
						name: o.Mb.APPEAL
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/avatar/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/avatar.ts");
			const a = "/avatar",
				i = [a, `${a}/:username`, `${a}/:username/:avatarId`],
				c = {
					action: r.a,
					chunk: o.s.AVATAR,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Avatar",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Avatar").then(n.bind(null, "./src/reddit/pages/Avatar/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Avatar/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Mb.AVATAR
					},
					path: i
				};
			t.b = c
		},
		"./src/reddit/routes/coins/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/page.ts");
			const a = "/coins",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "Coins",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Coins").then(n.bind(null, "./src/reddit/pages/CoinsPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/CoinsPage/index.tsx"
					}
				}),
				c = {
					action: r.c,
					chunk: o.s.COINS,
					component: i,
					exact: !0,
					meta: {
						name: o.Mb.COINS
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/coinsMobile/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/page.ts");
			const a = "/coins/mobile",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "CoinsMobile",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CoinsMobile").then(n.bind(null, "./src/reddit/pages/CoinsMobilePage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/CoinsMobilePage/index.tsx"
					}
				}),
				c = {
					action: r.b,
					chunk: o.s.COINS_MOBILE,
					component: i,
					exact: !0,
					meta: {
						name: o.Mb.COINS_MOBILE
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/collectionCommentsPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/countrySites/index.ts"),
				a = n("./src/lib/loadableAction/index.ts"),
				i = n("./src/reddit/featureFlags/profileCollections.ts");
			const c = Object(s.a)({
				resolved: {},
				chunkName: () => "CollectionCommentsPage",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CommentsPage"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/pages/CollectionCommentsPage/index.tsx"
				}
			});
			let l = ["/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(r)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(r)/:subredditName/collection/:collectionId"];
			l = Object(r.b)(l);
			const d = ["/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(user)/:subredditName/collection/:collectionId"],
				u = {
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CommentsPage"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/collectionCommentsPage.ts")).then(e => e.collectionCommentsPageRequested)),
					chunk: o.s.COLLECTION_COMMENTS_PAGE,
					component: c,
					exact: !0,
					meta: {
						name: o.Mb.COLLECTION_COMMENTS
					},
					prefetches: [o.s.FRONTPAGE, o.s.COMMENTS_PAGE, o.s.SUBREDDIT]
				},
				m = {
					...u,
					path: l
				},
				p = {
					...u,
					path: d,
					routePredicate: i.a
				},
				b = [m, p];
			t.a = b
		},
		"./src/reddit/routes/commentsPage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/countrySites/index.ts"),
				a = n("./src/lib/loadableAction/index.ts");
			const i = Object(s.a)({
				resolved: {},
				chunkName: () => "CommentsPage",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/pages/CommentsPage/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/pages/CommentsPage/index.tsx"
				}
			});
			let c = ["/:routePrefix(r)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(r)/:subredditName/comments/:partialPostId/:urlSafePostTitle?", "/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/comments/:partialPostId/:urlSafePostTitle?"];
			c = Object(r.b)(c);
			const l = ["/:routePrefix(r)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/:routePrefix(user)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/duplicates/:partialPostId/:urlSafePostTitle?"],
				d = ["/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle?"],
				u = (e, t) => ({
					action: Object(a.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/comments.ts")).then(e => e.commentsPageRequested)),
					chunk: o.s.COMMENTS_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: e
					},
					path: t,
					prefetches: [o.s.FRONTPAGE, o.s.SUBREDDIT]
				}),
				m = [u(o.Mb.COMMENTS, c), u(o.Mb.DUPLICATES, l), u(o.Mb.COMMENTS, d)];
			t.a = m
		},
		"./src/reddit/routes/econManagement/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/econManagement.ts");
			const a = "/econ-management",
				i = "q",
				c = {
					action: r.a,
					chunk: o.s.ECON_MANAGEMENT,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "EconManagement",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("EconManagement").then(n.bind(null, "./src/reddit/pages/EconManagement/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/EconManagement/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Mb.ECON_MANAGEMENT
					},
					path: a
				};
			t.c = c
		},
		"./src/reddit/routes/followers/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/followers",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileFollowersPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ProfileFollowersPage").then(n.bind(null, "./src/reddit/pages/Followers/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Followers/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => n.e("ProfileFollowersAction").then(n.bind(null, "./src/reddit/actions/pages/followers/index.ts")).then(e => e.followersPageRequested)),
					chunk: o.s.PROFILE_FOLLOWERS,
					component: i,
					exact: !0,
					meta: {
						name: o.Mb.FOLLOWERS
					},
					path: a,
					prefetches: [o.s.PROFILE_OVERVIEW]
				};
			t.a = c
		},
		"./src/reddit/routes/framedGild/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/framedGild/index.ts");
			const a = "/framedGild/:thingId",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "FramedGild",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("FramedGild~GildModal"), n.e("FramedGild")]).then(n.bind(null, "./src/reddit/pages/FramedGildPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/FramedGildPage/index.tsx"
					}
				}),
				c = {
					action: r.a,
					chunk: o.s.FRAMED_GILD,
					component: i,
					exact: !0,
					meta: {
						name: o.Mb.FRAMED_GILD
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/framedModal/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/framedModal/index.ts");
			const a = "/framedModal/:type",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "FramedModal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("FramedModal").then(n.bind(null, "./src/reddit/pages/FramedModalPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/FramedModalPage/index.tsx"
					}
				}),
				c = {
					action: r.a,
					chunk: o.s.FRAMED_MODAL,
					component: i,
					exact: !0,
					meta: {
						name: o.Mb.FRAMED_MODAL
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/frontpage/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/countrySites/index.ts"),
				c = n("./src/lib/loadableAction/index.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const d = Object.keys(a.W).map(e => a.W[e]).join("|"),
				u = "/",
				m = `/:sort(${d})?`,
				p = Object(i.b)([u]),
				b = Object(i.b)([m]),
				h = Object(r.a)({
					resolved: {},
					chunkName: () => "Frontpage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("Frontpage~ModListing"), n.e("Frontpage~FrontpageSidebar"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/pages/Frontpage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Frontpage/index.tsx"
					}
				}),
				f = {
					action: Object(c.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("Frontpage~ModListing"), n.e("Frontpage~FrontpageSidebar"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageRequested)),
					chunk: a.s.FRONTPAGE,
					component: h,
					exact: !0,
					prefetches: [a.s.COMMENTS_PAGE, a.s.SUBREDDIT]
				},
				g = {
					...f,
					path: p,
					meta: {
						name: a.Mb.INDEX
					},
					routePredicate: l.K
				},
				v = {
					...f,
					path: p,
					meta: {
						name: a.Mb.INDEX,
						telemetryPageType: "popular"
					},
					routePredicate: e => !Object(l.K)(e)
				},
				y = {
					...f,
					path: b,
					meta: {
						name: a.Mb.LISTING
					},
					routePredicate: l.K
				},
				O = {
					...f,
					path: b,
					meta: {
						name: a.Mb.LISTING,
						telemetryPageType: "popular"
					},
					routePredicate: e => !Object(l.K)(e)
				},
				x = [g, v, y, O];
			t.a = x
		},
		"./src/reddit/routes/geotagging/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/topic.ts"),
				a = n("./src/reddit/selectors/topic.ts");
			const i = "/label/subreddits",
				c = Object(s.a)({
					resolved: {},
					chunkName: () => "Geotagging",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("Geotagging").then(n.bind(null, "./src/reddit/pages/Geotagging/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Geotagging/index.tsx"
					}
				}),
				l = {
					action: e => async (e, t, {
						gqlContext: n
					}) => {
						{
							const e = t();
							if (Object(a.c)(e, {
									topicSlug: "coronavirus"
								})) return
						}
						let s;
						try {
							s = await Object(r.fetchTopicPage)(n(), "coronavirus", {
								includeIdentity: !0,
								includePosts: !1,
								includeRelationships: !1
							})
						} catch {
							return void e(Object(r.topicFailed)())
						}
						if (!s) return;
						const o = t();
						e(Object(r.topicLoaded)({
							...s,
							key: "tagging",
							meta: o.meta
						}))
					},
					chunk: o.s.GEOTAGGING,
					component: c,
					exact: !0,
					meta: {
						name: o.Mb.GEOTAGGING
					},
					path: i,
					prefetches: []
				};
			t.a = l
		},
		"./src/reddit/routes/inbox/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/reddit/actions/page.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "InboxPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("InboxPages").then(n.bind(null, "./src/reddit/pages/RedditEmbed/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/RedditEmbed/index.tsx"
					}
				}),
				l = Object.keys(a.S).map(e => a.S[e]).join("|"),
				d = [`/message/:pageName(${l})`, "/message/messages/:messageId([A-Za-z0-9]+)"],
				u = {
					action: i.d,
					chunk: a.s.INBOX_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Mb.INBOX_PAGES
					},
					path: d
				};
			t.a = u
		},
		"./src/reddit/routes/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/routes/collectionCommentsPage/index.ts"),
				o = n("./src/reddit/routes/acknowledgements/index.ts"),
				r = n("./src/reddit/routes/appeal/index.ts"),
				a = n("./src/reddit/routes/avatar/index.ts"),
				i = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./src/lib/constants/index.ts");
			var l = {
					action: () => async e => await e(Object(i.c)(a.a)),
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.AVATAR_PROFILE
					},
					path: ["/user/me/avatar", "/u/me/avatar", "/user/:profileName/avatar"]
				},
				d = n("./src/reddit/routes/coins/index.ts"),
				u = n("./src/reddit/routes/coinsMobile/index.ts"),
				m = n("./src/reddit/routes/commentsPage/index.ts"),
				p = (n("./node_modules/@loadable/component/dist/loadable.esm.js"), n("./src/lib/loadableAction/index.ts"));
			var b = [],
				h = n("./src/reddit/routes/econManagement/index.ts");
			var f = {
					action: Object(p.a)(() => n.e(3).then(n.bind(null, "./src/reddit/actions/pages/emailVerification.ts")).then(e => e.emailVerificationRequested)),
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				g = n("./src/lib/addQueryParams/index.ts");
			var v = {
					action: e => async (t, n, {
						apiContext: s
					}) => {
						const {
							queryParams: o
						} = e;
						await t(Object(i.c)(Object(g.a)("/", o)))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [c.s.COMMENTS_PAGE, c.s.FRONTPAGE]
				},
				y = n("./src/reddit/routes/followers/index.ts"),
				O = n("./src/reddit/routes/framedGild/index.ts"),
				x = n("./src/reddit/routes/framedModal/index.ts"),
				C = n("./src/reddit/routes/frontpage/index.ts"),
				E = n("./src/reddit/routes/geotagging/index.ts"),
				P = n("./src/reddit/routes/inbox/index.ts"),
				j = n("./src/reddit/routes/meta/index.ts"),
				_ = n("./src/reddit/routes/moderationPages/index.ts"),
				S = n("./src/reddit/routes/modListing/index.ts"),
				k = n("./src/reddit/routes/modQueue/index.ts"),
				w = n("./src/reddit/routes/multireddit/index.ts"),
				M = n("./src/reddit/routes/notificationsInbox/index.ts"),
				N = n("./src/reddit/routes/postCreation/constants.ts");
			const I = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
				path: e,
				action: () => async e => {
					await e(Object(i.c)("/"))
				},
				chunk: c.s.EMPTY,
				exact: !0,
				meta: {
					name: c.Mb.ORIGINAL_CONTENT_REDIRECT
				}
			}));
			var T = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(i.c)(N.b))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...I],
				A = n("./src/reddit/routes/postCreation/index.ts"),
				R = n("./src/reddit/routes/postDraft/index.ts"),
				L = n("./src/reddit/routes/powerups/index.ts");
			var D = {
					action: () => async e => await e(Object(i.c)(L.a)),
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.POWERUP_REDIRECT
					},
					path: "/powerup"
				},
				F = n("./src/reddit/routes/predictions/index.ts");
			var B = {
					action: () => async e => await e(Object(i.c)(F.a)),
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.PREDICTION_REDIRECT
					},
					path: "/prediction"
				},
				U = n("./src/reddit/routes/premium/index.ts"),
				G = n("./src/reddit/routes/profileComments/index.ts"),
				H = n("./src/reddit/endpoints/me/index.ts"),
				W = n("./src/reddit/helpers/pageActionLoginRedirect.ts");
			var q = {
					action: e => async (t, n, {
						apiContext: s
					}) => {
						const {
							rest: o
						} = e.params, {
							queryParams: r
						} = e, a = await Object(H.a)(s());
						if (!(a.ok && a.body && a.body.account)) {
							const e = n();
							return void Object(W.a)(t, e)
						}
						const c = a.body.account.displayText,
							l = o ? `/user/${c}/${(e=>e.endsWith("/")?e:`${e}/`)(o)}` : `/user/${c}/`,
							d = Object(g.a)(l, r);
						await t(Object(i.c)(d))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				V = n("./src/reddit/routes/profileModSettings/index.ts"),
				K = n("./src/reddit/routes/profileOverview/index.ts"),
				Q = n("./src/reddit/routes/profilePosts/index.ts"),
				z = n("./src/reddit/routes/profilePrivate/index.ts");
			var J = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							queryParams: o
						} = e, r = s ? `/user/${n}/${(e=>e.endsWith("/")?e:`${e}/`)(s)}` : `/user/${n}/`, a = Object(g.a)(r, o);
						await t(Object(i.c)(a))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)"]
				},
				X = n("./src/reddit/routes/profileSnoobuilder/index.ts");
			var Y = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							queryParams: o
						} = e, r = s ? `/user/${n}/posts/${s}` : `/user/${n}/posts`, a = Object(g.a)(r, o);
						t(Object(i.c)(a))
					},
					chunk: c.s.EMPTY,
					exact: !0,
					meta: {
						name: c.Mb.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/submitted", "/user/:profileName/submitted/:rest(.*)"]
				},
				Z = n("./src/reddit/routes/publicAccessNetwork/index.ts"),
				$ = n("./src/reddit/routes/report/index.ts"),
				ee = n("./src/reddit/routes/searchResults/index.ts"),
				te = n("./src/reddit/routes/settings/index.ts");
			var ne = [{
					action: e => async t => {
						const {
							page: n
						} = e.params, s = n && "blocked" === n ? "/settings/privacy" : "/settings/";
						await t(Object(i.c)(s))
					},
					chunk: c.s.EMPTY,
					meta: {
						name: c.Mb.SETTINGS_REDIRECT
					},
					path: "/prefs/:page(deactivate|blocked)?"
				}, {
					action: () => async e => {
						await e(Object(i.c)("/settings/profile"))
					},
					chunk: c.s.EMPTY,
					meta: {
						name: c.Mb.SETTINGS_REDIRECT
					},
					path: ["/user/:username/about/edit", "/user/:username/about/edit/privacy"]
				}],
				se = n("./src/reddit/routes/subreddit/index.ts"),
				oe = n("./src/reddit/routes/subredditLeaderboard/index.ts"),
				re = n("./src/reddit/routes/subredditWiki/index.ts"),
				ae = n("./src/reddit/routes/talk/index.ts"),
				ie = n("./src/reddit/routes/topic/index.ts"),
				ce = n("./src/reddit/routes/wrappedreddit/index.ts");
			const le = [o.a, r.a, a.b, l, d.a, u.a, q, J, Y, ...s.a, ...m.a, f, ...C.a, E.a, U.a, L.b, ce.b, F.b, ae.b, h.c, D, B, y.a, O.a, x.a, A.a, R.a, ...T, v, ...j.a, w.a, k.a, S.c, M.a, P.a, G.a, V.a, K.a, Q.a, X.a, z.a, Z.a, ...te.a, ...ne, ee.a, ...re.a, ie.a, se.b, oe.a, _.a, $.a, ...b];
			t.a = le
		},
		"./src/reddit/routes/meta/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./node_modules/react-router-redux/es/index.js"),
				a = n("./src/reddit/actions/modal.ts"),
				i = n("./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts"),
				c = n("./src/reddit/actions/pages/meta/specialMembershipPaywallPage.ts"),
				l = n("./src/reddit/actions/users.ts"),
				d = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/featureFlags/index.ts"),
				m = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				p = n("./src/reddit/selectors/user.ts");
			const b = {
					action: () => async (e, t) => {
						Object(p.K)(t()) || await e(Object(l.t)())
					},
					chunk: o.s.META_ARBITRUM_POINTS_MIGRATION_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "reddit-pages-meta-ArbitrumPointsMigrationPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-compon~fb9f1732"), n.e("reddit-pages-meta-ArbitrumPointsMigrationPage")]).then(n.bind(null, "./src/reddit/pages/meta/ArbitrumPointsMigrationPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/ArbitrumPointsMigrationPage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Mb.META_ARBITRUM_POINTS_MIGRATION_PAGE
					},
					path: ["/web/points-migration/"]
				},
				h = {
					action: i.a,
					chunk: o.s.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "CommunityPointsLearnMore",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("CommunityPointsLearnMore").then(n.bind(null, "./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/CommunityPointsLearnMorePage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Mb.META_COMMUNITY_POINTS_LEARN_MORE_PAGE
					},
					path: ["/community-points/", "/vault/", "/web/community-points/"]
				},
				f = {
					action: c.a,
					chunk: o.s.META_MEMBERSHIP_PAYWALL_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "MembershipPaywallPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), n.e("MembershipPaywallPage")]).then(n.bind(null, "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Mb.META_MEMBERSHIP_PAYWALL_PAGE
					},
					path: ["/web/special-membership/:subredditName", "/web/membership/:subredditName"]
				},
				g = e => async (t, n) => {
					const s = Object(m.a)(e.queryParams);
					Object(p.K)(n()) || await t(Object(l.t)()), s && setTimeout(async () => {
						await t(Object(r.c)(`/r/${encodeURIComponent(s.subreddit)}/`)), u.d.spBurnLinks(n()) && t(Object(a.h)(d.a.CRYPTO_BURN_POINTS, s))
					}, 0)
				}, v = {
					action: g,
					chunk: o.s.EMPTY,
					exact: !0,
					meta: {
						name: o.Mb.META_VAULT_BURN
					},
					path: ["/vault/burn"]
				};
			t.a = [b, h, f, v]
		},
		"./src/reddit/routes/modQueue/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "ModQueuePages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("ModQueue~ModQueuePages~ModerationPages"), n.e("ModQueuePages")]).then(n.bind(null, "./src/reddit/pages/ModQueuePages/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ModQueuePages/index.tsx"
					}
				}),
				l = Object.keys(a.rb).map(e => a.rb[e]).join("|"),
				d = `/r/mod/about/:pageName(${l})?`,
				u = {
					action: Object(i.a)(() => Promise.all([n.e("ModQueue~ModQueuePages~ModerationPages"), n.e("ModQueue")]).then(n.bind(null, "./src/reddit/actions/pages/modQueue/index.ts")).then(e => e.modQueuePageRequested)),
					chunk: a.s.MODQUEUE_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Mb.MODQUEUE_PAGES
					},
					path: d
				};
			t.a = u
		},
		"./src/reddit/routes/moderationPages/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "d", (function() {
				return h
			})), n.d(t, "c", (function() {
				return y
			}));
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/countrySites/index.ts"),
				c = n("./src/lib/loadableAction/index.ts"),
				l = n("./node_modules/react-router/esm/react-router.js");
			const d = Object.keys(a.dc).map(e => a.dc[e]).join("|"),
				u = [a.dc.Awards],
				m = u.join("|"),
				p = e => `${e}about/scheduledposts`,
				b = e => `${e}about/eventposts`,
				h = e => `${e}about/predictions`,
				f = Object(r.a)({
					resolved: {},
					chunkName: () => "ModerationPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("ModQueue~ModQueuePages~ModerationPages"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/pages/ModHub/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ModHub/index.tsx"
					}
				}),
				g = ["/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(revisions|wikibanned|wikicontributors)", "/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(edit|create|settings|revisions)/:wikiPageName+", "/r/:subredditName/about/:pageName(wiki)/:wikiPageName*"];
			let v = ["/r/:subredditName/about", `/r/:subredditName/about/:pageName(${d})`, `/user/:profileName/about/:pageName(${m})`, ...g];
			v = Object(i.b)(v);
			const y = e => !!Object(l.h)(e, {
					path: "/r/:subredditName/about"
				}) || !!Object(l.h)(e, {
					path: "/:countryCode([a-z]{2})/r/:subredditName/about"
				}) || !!Object(l.h)(e, {
					path: "/:countryCode([a-z]{2})/:languageCode([a-z]{2})/r/:subredditName/about"
				}),
				O = {
					action: Object(c.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("ModQueue~ModQueuePages~ModerationPages"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/actions/pages/moderationPages/index.ts")).then(e => e.moderationPageRequested)),
					chunk: a.s.MODERATION_PAGES,
					component: f,
					exact: !0,
					meta: {
						name: a.Mb.MODERATION_PAGES
					},
					path: v,
					prefetches: [a.s.SUBREDDIT]
				};
			t.a = O
		},
		"./src/reddit/routes/multireddit/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object(r.a)({
					resolved: {},
					chunkName: () => "Multireddit",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/pages/Multireddit/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Multireddit/index.tsx"
					}
				}),
				l = "/me/m/:multiredditName",
				d = Object.keys(a.W).map(e => `${l}/:sort(${a.W[e]})?`),
				u = "/user/:username/m/:multiredditName",
				m = Object.keys(a.W).map(e => `${u}/:sort(${a.W[e]})?`),
				p = [l, u, ...d, ...m],
				b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/pages/multireddit/index.ts")).then(e => e.multiredditRequested)),
					chunk: a.s.MULTIREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: a.Mb.MULTIREDDIT
					},
					path: p,
					prefetches: [a.s.SUBREDDIT]
				};
			t.a = b
		},
		"./src/reddit/routes/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/notifications/",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "NotificationsInbox",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("NotificationsInbox").then(n.bind(null, "./src/reddit/pages/NotificationsInbox/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/NotificationsInbox/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => n.e("NotificationsInbox").then(n.bind(null, "./src/reddit/actions/pages/notificationsInbox.ts")).then(e => e.notificationsInboxPageRequested)),
					chunk: o.s.NOTIFICATIONS_INBOX,
					component: i,
					exact: !0,
					meta: {
						name: o.Mb.NOTIFICATIONS_INBOX
					},
					path: a,
					prefetches: [o.s.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/postDraft/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/draft/:draftId",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "PostDraft",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/pages/PostDraft/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/PostDraft/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/actions/pages/postDraft.ts")).then(e => e.postDraftRequested)),
					chunk: o.s.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: o.Mb.POST_DRAFT
					},
					path: a,
					prefetches: [o.s.POST_DRAFT]
				};
			t.a = c
		},
		"./src/reddit/routes/powerups/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/powerups.ts");
			const a = "/powerups",
				i = {
					action: r.a,
					chunk: o.s.POWERUPS,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Powerups",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Powerups").then(n.bind(null, "./src/reddit/pages/Powerups/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Powerups/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Mb.POWERUPS
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/predictions.ts");
			const a = "/predictions",
				i = {
					action: r.a,
					chunk: o.s.PREDICTIONS,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Predictions",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Predictions").then(n.bind(null, "./src/reddit/pages/Predictions/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Predictions/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Mb.PREDICTIONS,
						isResponsive: !0
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/profileComments/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/comments",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileComments",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileComments/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/actions/pages/profileComments/index.ts")).then(e => e.profileCommentsRequested)),
					chunk: o.s.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Mb.PROFILE_COMMENTS
					},
					path: a,
					prefetches: [o.s.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profileModSettings/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/about/edit/moderation",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileModeration",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ProfileModeration").then(n.bind(null, "./src/reddit/pages/ProfileModSettings/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileModSettings/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => n.e("ProfileModeration").then(n.bind(null, "./src/reddit/actions/pages/profileModSettings.ts")).then(e => e.profileModSettingsRequested)),
					chunk: o.s.PROFILE_MODERATION,
					component: i,
					exact: !0,
					meta: {
						name: o.Mb.PROFILE_MODERATION
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/profileOverview/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileOverview",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileOverview/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/actions/pages/profileOverview/index.ts")).then(e => e.profileOverviewRequested)),
					chunk: o.s.PROFILE_OVERVIEW,
					component: i,
					exact: !0,
					meta: {
						name: o.Mb.PROFILE_OVERVIEW
					},
					path: a,
					prefetches: [o.s.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePosts/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/user/:profileName/posts",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfilePosts",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/pages/ProfilePosts/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfilePosts/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePosts.ts")).then(e => e.profilePostsRequested)),
					chunk: o.s.PROFILE_POSTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Mb.PROFILE_POSTS
					},
					path: a,
					prefetches: [o.s.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/profilePrivate/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/models/Profile/index.ts");
			const l = Object(r.a)({
					resolved: {},
					chunkName: () => "ProfilePrivate",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfilePrivate")]).then(n.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfilePrivate/index.tsx"
					}
				}),
				d = Object.keys(c.a).map(e => c.a[e]).join("|"),
				u = [`/user/:profileName/:listingType(${d})`, `/user/:profileName/gilded/:listingType(${c.a.GivenGildings})`],
				m = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePrivate/index.ts")).then(e => e.profilePrivateRequested)),
					chunk: a.s.PROFILE_PRIVATE,
					component: l,
					exact: !0,
					meta: {
						name: a.Mb.PROFILE_PRIVATE
					},
					path: u,
					prefetches: [a.s.COMMENTS_PAGE]
				};
			t.a = m
		},
		"./src/reddit/routes/profileSnoobuilder/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts"),
				a = n("./src/reddit/featureFlags/index.ts");
			const i = Object(s.a)({
					resolved: {},
					chunkName: () => "ProfileSnoobuilder",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/pages/ProfileSnoobuilder/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ProfileSnoobuilder/index.tsx"
					}
				}),
				c = "/user/:profileName/snoo",
				l = {
					path: c,
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested)),
					chunk: o.s.PROFILE_SNOOBUILDER,
					component: i,
					exact: !0,
					meta: {
						name: o.Mb.PROFILE_SNOOBUILDER
					},
					routePredicate: a.d.snoovatar30
				};
			t.a = l
		},
		"./src/reddit/routes/publicAccessNetwork/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "PublicAccessNetwork",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("LiveVideoPlayer~PublicAccessNetwork"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/pages/PublicAccessNetwork/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/PublicAccessNetwork/index.tsx"
					}
				}),
				i = {
					action: Object(r.a)(() => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("LiveVideoPlayer~PublicAccessNetwork"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/actions/publicAccessNetwork/page.ts")).then(e => e.publicAccessNetworkRequested)),
					chunk: o.s.PUBLIC_ACCESS_NETWORK,
					component: a,
					exact: !0,
					meta: {
						name: o.Mb.PUBLIC_ACCESS_NETWORK
					},
					path: ["/rpan/r/:subredditName/:partialPostId?", "/rpan/:partialPostId?"],
					prefetches: [o.s.PUBLIC_ACCESS_NETWORK]
				};
			t.a = i
		},
		"./src/reddit/routes/report/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = "/report",
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "ReportPage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("ReportPage").then(n.bind(null, "./src/reddit/pages/ReportPage/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/ReportPage/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => n.e("Report").then(n.bind(null, "./src/reddit/actions/pages/report/index.ts")).then(e => e.reportPageRequested)),
					chunk: o.s.REPORT_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: o.Mb.REPORT
					},
					path: a
				};
			t.a = c
		},
		"./src/reddit/routes/searchResults/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = ["/search", "/r/:subredditName/search", "/me/m/:multiredditName/search", "/user/:username/m/:multiredditName/search"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "SearchResults",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/pages/SearchResults/experimentWrapper.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/SearchResults/experimentWrapper.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/actions/pages/search/searchResultsRequested.ts")).then(e => e.searchResultsRequested)),
					chunk: o.s.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Mb.SEARCH_RESULTS
					},
					path: a,
					prefetches: [o.s.FRONTPAGE, o.s.SUBREDDIT, o.s.COMMENTS_PAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/settings/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./src/lib/constants/index.ts"),
				i = n("./src/lib/loadableAction/index.ts");
			const c = Object.keys(a.ac).map(e => a.ac[e]).join("|"),
				l = [{
					action: Object(i.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModStatsChart~Settings~ViewsTooltip"), n.e("Settings")]).then(n.bind(null, "./src/reddit/actions/pages/settings.ts")).then(e => e.settingsPageRequested)),
					component: Object(r.a)({
						resolved: {},
						chunkName: () => "Settings",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModStatsChart~Settings~ViewsTooltip"), n.e("Settings")]).then(n.bind(null, "./src/reddit/pages/Settings/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Settings/index.tsx"
						}
					}),
					chunk: a.s.SETTINGS,
					exact: !0,
					meta: {
						name: a.Mb.SETTINGS
					},
					path: `/settings/:page(${c})?`
				}, {
					action: Object(i.a)(() => n.e("UserDataRequestPage").then(n.bind(null, "./src/reddit/actions/userDataRequest.ts")).then(e => e.userDataRequestPageRequested)),
					component: Object(r.a)({
						resolved: {},
						chunkName: () => "UserDataRequestPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("UserDataRequestPage").then(n.bind(null, "./src/reddit/pages/UserDataRequestPage/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/UserDataRequestPage/index.tsx"
						}
					}),
					chunk: a.s.USER_DATA_REQUEST,
					exact: !0,
					meta: {
						name: a.Mb.USER_DATA_REQUEST
					},
					path: "/settings/data-request"
				}];
			t.a = l
		},
		"./src/reddit/routes/subredditLeaderboard/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = ["/subreddits/leaderboard", "/subreddits/leaderboard/:categoryName/"],
				i = Object(s.a)({
					resolved: {},
					chunkName: () => "SubredditLeaderboard",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("SubredditLeaderboard").then(n.bind(null, "./src/reddit/pages/SubredditLeaderboard/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/SubredditLeaderboard/index.tsx"
					}
				}),
				c = {
					action: Object(r.a)(() => n.e("SubredditLeaderboard").then(n.bind(null, "./src/reddit/actions/pages/subredditLeaderboard.ts")).then(e => e.subredditLeaderboardPageRequested)),
					chunk: o.s.SUBREDDIT_LEADERBOARD,
					component: i,
					exact: !0,
					meta: {
						name: o.Mb.SUBREDDIT_LEADERBOARD,
						isResponsive: !0
					},
					path: a,
					prefetches: [o.s.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/subredditWiki/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react-router-redux/es/index.js"),
				r = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/countrySites/index.ts"),
				i = n("./src/lib/loadableAction/index.ts"),
				c = n("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts");
			const l = Object(s.a)({
				resolved: {},
				chunkName: () => "SubredditWiki",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/pages/SubredditWiki/index.tsx"
				}
			});
			let d = ["/r/:subredditName/wiki/:wikiSubRoute(revisions)", "/r/:subredditName/wiki/:wikiSubRoute(edit|create|revisions)/:wikiPageName+", "/r/:subredditName/wiki/:wikiPageName+"];
			d = Object(a.b)(d), d.push("/wiki/:wikiPageName+");
			const u = ["/wiki/", "/r/:subredditName/wiki/", "/r/:subredditName/w/:wikiPageName*", "/w/:wikiPageName*", "/r/:subredditName/wiki/:wikiSubRoute(settings)/:wikiPageName+"],
				m = e => async t => {
					await t(Object(o.c)(Object(c.a)(e.url, e.params)))
				}, p = {
					action: m,
					chunk: r.s.EMPTY,
					exact: !0,
					meta: {
						name: r.Mb.SUBREDDIT_WIKI
					},
					path: u
				}, b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested)),
					chunk: r.s.SUBREDDIT_WIKI,
					component: l,
					exact: !0,
					meta: {
						name: r.Mb.SUBREDDIT_WIKI
					},
					path: d,
					prefetches: [r.s.SUBREDDIT]
				};
			t.a = [p, b]
		},
		"./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/wiki.ts"),
				a = n("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				i = n("./src/reddit/routes/moderationPages/index.ts");
			t.a = (e, t) => {
				const n = t.wikiSubRoute === r.m.Settings,
					s = Object(a.a)(t, Object(i.c)(e) || n),
					c = o.a.parse(e);
				return (c.pathname || "").replace(/\/$/, "") !== s ? (c.pathname = s, o.a.format(c)) : e
			}
		},
		"./src/reddit/routes/talk/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/talk.ts");
			const a = "/talk",
				i = {
					action: r.a,
					chunk: o.s.TALK,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "Talk",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("Talk").then(n.bind(null, "./src/reddit/pages/Talk/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/Talk/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Mb.TALK
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/routes/topic/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/loadableAction/index.ts");
			const a = Object(s.a)({
					resolved: {},
					chunkName: () => "Topic",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("Topic")]).then(n.bind(null, "./src/reddit/pages/Topic/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/pages/Topic/index.tsx"
					}
				}),
				i = ["/t/:topicSlug"],
				c = {
					path: i,
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~GovernanceReleaseNotesModal~ModListing~ModQueuePages~M~eb6c0aee"), n.e("Topic")]).then(n.bind(null, "./src/reddit/actions/pages/topic.ts")).then(e => e.topicPageRequested)),
					chunk: o.s.TOPIC,
					component: a,
					exact: !0,
					meta: {
						name: o.Mb.TOPIC
					},
					prefetches: [o.s.COMMENTS_PAGE, o.s.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/routes/wrappedreddit/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/actions/pages/wrappedReddit.ts");
			const a = "/wrappedreddit",
				i = {
					action: r.a,
					chunk: o.s.WRAPPED_REDDIT,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "WrappedReddit",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => n.e("WrappedReddit").then(n.bind(null, "./src/reddit/pages/WrappedReddit/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return n(t)
						},
						resolve() {
							return "./src/reddit/pages/WrappedReddit/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: o.Mb.WRAPPED_REDDIT
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/selectors/accountManager.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return C
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "c", (function() {
				return _
			}));
			var s = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				o = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				r = n("./src/config.ts"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/reddit/constants/accountManager.ts"),
				l = n("./src/reddit/constants/experiments.ts"),
				d = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				u = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				m = n("./src/reddit/helpers/chooseVariant/index.ts"),
				p = n("./src/reddit/selectors/experiments/index.ts");
			const b = Object(a.a)(e => Object(m.c)(e, {
				experimentEligibilitySelector: p.f,
				experimentName: l.kd
			}), e => e === l.pd.Enabled);
			var h = n("./src/reddit/selectors/experiments/magicLink.ts"),
				f = n("./src/reddit/selectors/experiments/moreRepliesSignup.ts"),
				g = n("./src/reddit/selectors/experiments/onboarding.ts"),
				v = n("./src/lib/getParsedUserAgent/index.ts");
			const y = Object(a.a)(e => Object(m.c)(e, {
				experimentEligibilitySelector: e => Object(v.g)(e.meta.userAgent) && Object(p.f)(e),
				experimentName: l.Je
			}), e => e === l.Re.Enabled);
			var O = n("./src/reddit/selectors/meta.ts"),
				x = n("./src/reddit/selectors/responsiveSettings.ts");
			const C = e => e.accountManagerModalData.actionSource,
				E = e => e.accountManagerModalData.redirectUrl,
				P = Object(a.c)({
					frontpageSignupVariant: d.a,
					googleOneTapVariant: u.b,
					magicLinkVariant: h.a,
					moreRepliesSignupVariant: f.c,
					ssoLoginLinkVariant: e => Object(m.c)(e, {
						experimentEligibilitySelector: e => !Object(p.e)(e),
						experimentName: l.Ke
					})
				}),
				j = Object(a.c)({
					isGoogleSsoGisEnabled: b,
					isMoreRepliesSignupEnabled: f.a,
					isOnboardingEnabled: g.b,
					isSafariOneTapEnabled: y
				}),
				_ = Object(a.a)((e, t) => t.path, (e, t) => t.uiMode, C, x.a, O.i, P, j, (e, t, n, a, d, u, m) => {
					const {
						frontpageSignupVariant: p,
						googleOneTapVariant: b,
						ssoLoginLinkVariant: h,
						magicLinkVariant: f,
						moreRepliesSignupVariant: g
					} = u, {
						isGoogleSsoGisEnabled: v,
						isMoreRepliesSignupEnabled: y,
						isOnboardingEnabled: O,
						isSafariOneTapEnabled: x
					} = m;
					let C = `${r.a.accountManagerOrigin}${e}`;
					if (C = Object(i.a)(C, {
							experiment_d2x_2020ify_buttons: "enabled"
						}), h && (C = Object(i.a)(C, {
							[`experiment_${l.Ke}`]: h
						})), v && (C = Object(i.a)(C, {
							[`experiment_${l.kd}`]: "enabled"
						})), y && (C = Object(i.a)(C, {
							[`experiment_${l.Kd}`]: g
						})), O && (C = Object(i.a)(C, {
							experiment_d2x_onboarding: "enabled"
						})), x && (C = Object(i.a)(C, {
							[`experiment_${l.Je}`]: "enabled"
						})), e === c.c.GoogleOneTap) return Object(i.a)(C, {
						[l.rb]: b
					});
					if (p && (C = Object(i.a)(C, {
							[l.gc]: p,
							uiMode: t
						})), f && (C = Object(i.a)(C, {
							[`experiment_${l.Hd}`]: f
						})), a && (C = Object(i.a)(C, {
							mweb_responsive_settings: "treatment"
						})), d) {
						const e = Object(s.isoLocaleToR2Language)(d);
						d !== o.DEFAULT_LOCALE && e && (C = Object(i.a)(C, {
							lang: e
						}))
					}
					return e === c.c.Index || e === c.c.ChangePassword ? C : C = Object(i.a)(C, {
						actionSource: n
					})
				})
		},
		"./src/reddit/selectors/bannedUser.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/components/InboxTooltip/Component.tsx"),
				r = n("./src/reddit/models/SubredditModeration/index.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = (e, {
					subredditId: t
				}) => e.features.banned.models[t],
				c = (e, {
					subredditId: t,
					username: n
				}) => {
					const s = Object(a.nb)(e, {
						userName: n
					});
					if (!s) return;
					const o = i(e, {
						subredditId: t
					});
					return o ? o[s.id] : void 0
				},
				l = Object(s.a)((e, {
					subredditId: t
				}) => {
					const n = e.features.banned.userOrder[t];
					return n ? n.map(n => e.features.banned.models[t][n]) : o.a
				}),
				d = (e, {
					subredditId: t
				}) => {
					const n = Object(r.d)(t);
					return e.features.banned.api.pending[n]
				},
				u = (e, {
					subredditId: t
				}) => e.features.banned.loadMore[t],
				m = e => e.features.banned.search.api.pending,
				p = e => e.features.banned.search.result,
				b = e => e.features.banned.inContext
		},
		"./src/reddit/selectors/econManagement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/models/EconManagement/index.ts"),
				r = n("./src/reddit/actions/economics/econManagement/constants.ts");
			const a = {
				displayState: o.a.Default,
				currentEntity: null,
				relatedData: {},
				entityTypes: {}
			};
			var i = (e = a, t) => {
				switch (t.type) {
					case r.c:
						return {
							...e, entityTypes: t.payload.reduce((e, t) => ({
								...e,
								[t.typename]: t
							}), {})
						};
					case r.e:
						return {
							...a, entityTypes: e.entityTypes, displayState: o.a.Loading
						};
					case r.d:
						return {
							...a, entityTypes: e.entityTypes, displayState: o.a.Error
						};
					case r.f: {
						const n = t.payload,
							s = n.typename;
						return {
							...e,
							displayState: o.a.Default,
							currentEntity: {
								id: n.entityId || "",
								type: s,
								prefixedId: `${n.typename}:${n.entityId}`,
								details: n
							},
							relatedData: {}
						}
					}
					case r.a: {
						const n = t.payload,
							s = n.type;
						return {
							...e,
							relatedData: {
								...e.relatedData,
								[s]: n.entity
							}
						}
					}
					default:
						return e
				}
			};
			Object(s.a)({
				pages: {
					econManagement: i
				}
			});
			const c = e => {
					var t, n;
					return (null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.currentEntity) || null
				},
				l = e => {
					var t, n;
					return (null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.displayState) || o.a.Default
				},
				d = e => {
					var t, n;
					const s = c(e);
					if (!s) return [];
					const o = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.econManagement) || void 0 === n ? void 0 : n.entityTypes[s.type];
					return o && o.externalRefs || []
				},
				u = (e, t) => {
					var n, s;
					return null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.econManagement) || void 0 === s ? void 0 : s.relatedData[t]
				},
				m = (e, t) => {
					var n, s, o;
					return (null === (o = null === (s = null === (n = e.pages) || void 0 === n ? void 0 : n.econManagement) || void 0 === s ? void 0 : s.entityTypes[t]) || void 0 === o ? void 0 : o.actions) || []
				}
		},
		"./src/reddit/selectors/experiments/categories.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const a = e => {
				return Object(r.H)(e) || s.N.Treatment1 === Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.C
				})
			}
		},
		"./src/reddit/selectors/experiments/econ/meta.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const r = Object(o.a)(s.Id)
		},
		"./src/reddit/selectors/experiments/econStorefrontClaim.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const a = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: r.K,
					experimentName: s.Xc
				});
				return !(!t || Object(s.uf)(t))
			}
		},
		"./src/reddit/selectors/experiments/frontpageSignup.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "b", (function() {
				return f
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts"),
				c = n("./src/reddit/selectors/meta.ts"),
				l = n("./src/reddit/selectors/user.ts");
			const d = Object(s.a)(l.T, (e, {
					pageLayer: t
				}) => !t || Object(r.z)(t), c.c, (e, t, n) => !e && t && !n),
				u = Object(s.a)((e, t) => Object(a.c)(e, {
					experimentEligibilitySelector: e => d(e, t),
					experimentName: o.gc,
					throttledVariants: {
						[o.id.CurrentThrottled]: o.gc
					}
				}), i.a),
				m = e => e === o.id.CurrentThrottled,
				p = e => e === o.id.CurrentThrottled || e === o.id.CurrentUnthrottled || e === o.id.CurrentUnthrottledCopy || e === o.id.NewPopUnthrottledCopy,
				b = e => e === o.id.NewPopUnthrottledCopy,
				h = e => e === o.id.NewPageUnthrottledCopy || e === o.id.NewPageUnthrottledCopyFields,
				f = e => e === o.id.NewPageUnthrottledCopyFields
		},
		"./src/reddit/selectors/experiments/moreRepliesSignup.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const c = Object(s.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: a.f,
					experimentName: o.Kd,
					throttledVariants: {
						[o.Pd.ThrottledDaily]: o.Qd.Daily,
						[o.Pd.ThrottledWeekly]: o.Qd.Weekly
					}
				}), e => e),
				l = Object(s.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: a.f,
					experimentName: o.Kd,
					expEventOverride: !1,
					throttledVariants: {
						[o.Pd.ThrottledDaily]: o.Qd.Daily,
						[o.Pd.ThrottledWeekly]: o.Qd.Weekly
					}
				}), i.a),
				d = Object(s.a)(l, e => !!e)
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => Object(o.c)(e, {
				experimentName: s.Sd,
				experimentEligibilitySelector: o.a
			}) === s.Zd.Enabled
		},
		"./src/reddit/selectors/experiments/onboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts");
			const i = Object(s.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: o.bf,
					expEventOverride: !1
				}), e => e),
				c = Object(s.a)(i, e => !!Object(a.a)(e)),
				l = Object(s.a)(i, e => !!e),
				d = Object(s.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: o.Sb,
					expEventOverride: !1
				}), e => e)
		},
		"./src/reddit/selectors/experiments/onlineIndicator.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/experiments/presence.ts");
			const a = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.ke
					}) === s.Zc
				},
				i = e => {
					if (Object(r.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.je
					}) === s.Zc
				},
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.be
					}) === s.Zc
				},
				l = e => {
					if (Object(r.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.ae
					}) === s.Zc
				}
		},
		"./src/reddit/selectors/experiments/postCommentFollow.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const c = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.Lb,
					experimentEligibilitySelector: a.e
				}), i.a),
				l = Object(s.a)(c, e => e === o.oe.Enabled),
				d = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.mb,
					experimentEligibilitySelector: a.e
				}), i.a),
				u = Object(s.a)(d, e => e === o.Q.Enabled)
		},
		"./src/reddit/selectors/experiments/trending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const a = e => Object(r.H)(e) || !(s.gf.Holdout === Object(o.c)(e, {
				experimentEligibilitySelector: o.a,
				experimentName: s.cf
			}))
		},
		"./src/reddit/selectors/experiments/uiSimplification.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/featureFlags/utils.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const a = ["AU", "CA", "GB", "US"],
				i = new Set([s.td.AllItems, s.td.TrendingSearch]),
				c = e => {
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: Object(o.d)(Object(o.b)(...a)),
						experimentName: s.ud
					});
					return i.has(t)
				},
				l = e => s.td.AllItems === Object(r.c)(e, {
					experimentEligibilitySelector: Object(o.d)(Object(o.b)(...a)),
					experimentName: s.ud
				})
		},
		"./src/reddit/selectors/moderatingComments.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}));
			const s = (e, {
					commentId: t,
					commentsPageKey: n
				}) => {
					if (!t) return !1;
					if (e.features.comments.collapsed[n] && t in e.features.comments.collapsed[n]) return !!e.features.comments.collapsed[n][t];
					const s = e.features.comments.models[t];
					return !!s && ("computedCollapsed" in s ? !!s.computedCollapsed : s.collapsedBecauseCrowdControl ? !e.modModeEnabled : s.collapsed)
				},
				o = (e, {
					commentId: t
				}) => {
					if (!t) return !1;
					const n = e.features.comments.models[t];
					return !(!n || !n.collapsedBecauseCrowdControl) && e.modModeEnabled
				}
		},
		"./src/reddit/selectors/muted.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				o = n("./src/reddit/models/SubredditModeration/index.ts");
			const r = [],
				a = Object(s.a)((e, {
					subredditId: t
				}) => {
					const n = e.pages.modHub.muted.userOrder[t];
					return n ? n.map(n => e.pages.modHub.muted.models[t][n]) : r
				}),
				i = (e, {
					subredditId: t
				}) => {
					const n = Object(o.d)(t);
					return !!e.pages.modHub.muted.api.pending[n]
				},
				c = e => !!e.pages.modHub.muted.search.api.pending,
				l = e => e.pages.modHub.muted.search.result,
				d = e => {
					var t, n, s;
					return null === (s = null === (n = null === (t = e.pages) || void 0 === t ? void 0 : t.modHub) || void 0 === n ? void 0 : n.muted) || void 0 === s ? void 0 : s.inContext
				},
				u = (e, {
					subredditId: t
				}) => e.pages.modHub.muted.loadMore[t]
		},
		"./src/reddit/selectors/notificationPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "f", (function() {
				return r
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			}));
			const s = e => e.user.notificationPrefs.api.getPreferences.loaded,
				o = e => e.user.notificationPrefs.api.getPreferences.pending,
				r = e => e.user.notificationPrefs.api.setPreferences.pending,
				a = e => e.user.notificationPrefs.preferences,
				i = e => e.user.notificationPrefs.isNotificationPromptVisible,
				c = (e, t) => {
					var n, s;
					const o = (e => e.user.notificationPrefs.pushSettingsLayout)(e),
						r = null === (n = null == o ? void 0 : o.rows) || void 0 === n ? void 0 : n.byId;
					return r && (null === (s = r[t]) || void 0 === s ? void 0 : s.isEnabled)
				}
		},
		"./src/reddit/selectors/notificationsInbox.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "h", (function() {
				return h
			}));
			var s = n("./src/lib/notifications/constants.ts"),
				o = n("./src/reddit/actions/notifications/utils.ts"),
				r = n("./node_modules/reselect/es/index.js");
			const a = e => e.notificationsInbox && e.notificationsInbox.api && e.notificationsInbox.api.pending,
				i = e => e.notificationsInbox && e.notificationsInbox.pageInfo,
				c = Object(r.a)(i, e => !(!e || !e.hasNextPage)),
				l = Object(r.a)(i, e => e && e.endCursor),
				d = e => e.notificationsInbox && e.notificationsInbox.notifications,
				u = Object(r.a)(d, e => e.slice(0, 5)),
				m = e => e.notificationsInbox && e.notificationsInbox.earlierDividerIndex,
				p = Object(r.a)(d, m, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(0, n)
					}
					return e
				}),
				b = Object(r.a)(d, m, (e, t) => {
					if (t) {
						const n = parseInt(t);
						return e.slice(n)
					}
					return null
				}),
				h = Object(r.a)(o.a, e => e === s.c.NotificationsSupported)
		},
		"./src/reddit/selectors/onboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/safeJSONParse/index.ts"),
				r = n("./src/reddit/constants/parameters.ts"),
				a = n("./src/reddit/selectors/experiments/onboarding.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/user.ts");
			const l = e => {
					const t = Object(i.q)(e);
					return Boolean((null == t ? void 0 : t[r.u]) && Object(o.a)(t[r.u]))
				},
				d = Object(s.a)(c.K, c.J, a.b, l, (e, t, n, s) => (e || t) && n && s),
				u = e => {
					const {
						genderUpdateState: t
					} = e.onboardingModal;
					if (t.success || t.failure) return t
				}
		},
		"./src/reddit/selectors/removalReasons.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = (e, {
					subredditId: t
				}) => {
					if (e.features.removalReasons.reasonOrder[t]) {
						return e.features.removalReasons.reasonOrder[t].map(t => e.features.removalReasons.models[t])
					}
					return []
				},
				o = e => e.features.removalReasons.removedItemIds && e.features.removalReasons.removedItemIds.itemIds.length ? e.features.removalReasons.removedItemIds : null,
				r = e => e.features.removalReasons.api.pending
		},
		"./src/reddit/selectors/sso.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/components/Settings/modalIds.ts"),
				r = n("./src/reddit/models/Sso/index.ts"),
				a = n("./src/reddit/selectors/activeModalId.ts"),
				i = n("./src/reddit/selectors/user.ts");
			Object(s.a)(i.rb, e => !(!e || !e.length));
			const c = Object(s.a)(i.z, e => !e),
				l = Object(s.a)(i.rb, e => e && e.find(e => e === r.a.Apple)),
				d = Object(s.a)(i.rb, e => !(!e || !e.includes(r.a.Google))),
				u = Object(s.a)(a.a, e => !!e && [o.b, o.d, o.e, o.f].includes(e))
		},
		"./src/reddit/selectors/trending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = e => e.trending.models
		},
		"./src/redditGQL/operations/BlockAwarder.json": function(e) {
			e.exports = JSON.parse('{"id":"9769ffbb7031"}')
		},
		"./src/redditGQL/operations/ChangeStripePaymentMethod.json": function(e) {
			e.exports = JSON.parse('{"id":"ce700fb9b230"}')
		},
		"./src/redditGQL/operations/ClaimAwardOffer.json": function(e) {
			e.exports = JSON.parse('{"id":"7264b2ee2ded"}')
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/DeleteInboxNotifications.json": function(e) {
			e.exports = JSON.parse('{"id":"ce2deb9deef7"}')
		},
		"./src/redditGQL/operations/EconAdminPanelQuery.json": function(e) {
			e.exports = JSON.parse('{"id":"d47c78bc4284"}')
		},
		"./src/redditGQL/operations/FetchSpecialEvents.json": function(e) {
			e.exports = JSON.parse('{"id":"6c73f2f0b64f"}')
		},
		"./src/redditGQL/operations/NotificationInboxFeed.json": function(e) {
			e.exports = JSON.parse('{"id":"6bc40669baab"}')
		},
		"./src/redditGQL/operations/NotificationInboxFeedSlimmed.json": function(e) {
			e.exports = JSON.parse('{"id":"916e9e9be5e0"}')
		},
		"./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json": function(e) {
			e.exports = JSON.parse('{"id":"d03522f8a8d4"}')
		},
		"./src/redditGQL/operations/PerformEconAdminAction.json": function(e) {
			e.exports = JSON.parse('{"id":"de8b0fb0be5d"}')
		},
		"./src/redditGQL/operations/UpdateCommentDistinguishState.json": function(e) {
			e.exports = JSON.parse('{"id":"e1f407c8ceba"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		},
		"./src/redditGQL/operations/UpdateCommentStickyState.json": function(e) {
			e.exports = JSON.parse('{"id":"236938d65d55"}')
		},
		"./src/redditGQL/operations/UpdateInboxActivitySeenState.json": function(e) {
			e.exports = JSON.parse('{"id":"85d656894a08"}')
		},
		"./src/redditGQL/operations/UpdateNotificationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"129085be0500"}')
		},
		"./src/redditGQL/operations/UserSubredditsNotificationsLevel.json": function(e) {
			e.exports = JSON.parse('{"id":"8404d1f9e84d"}')
		}
	},
	[
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePo~5f1ac562", "vendors~Governance~ModListing~Reddit~Subreddit", "vendors~Chat~Governance~Reddit", "Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241", "Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250", "Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e", "Governance~ModListing~Reddit~Subreddit", "Chat~Governance~Reddit", 0, "Reddit~StandalonePostPage~reddit-components-MediumPost", "Governance~Reddit"]
	]
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit.2bdb71a4c7bc5fd2c38d.js.map