// https://www.redditstatic.com/desktop2x/Reddit.fe7e742bc560533a7f22.js
// Retrieved at 8/30/2021, 9:40:09 AM by Reddit Dataminer v1.0.0
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
											for (var g = o.state.lastIdealStyle[h], v = o.state.lastIdealVelocity[h], O = 0; O < a; O++) {
												var y = c.default(b / 1e3, g, v, f.val, f.stiffness, f.damping, f.precision);
												g = y[0], v = y[1]
											}
											var C = c.default(b / 1e3, g, v, f.val, f.stiffness, f.damping, f.precision),
												x = C[0],
												E = C[1];
											m[h] = g + (x - g) * r, p[h] = v + (E - v) * r, i[h] = g, d[h] = v
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
									O = {},
									y = {};
								for (var C in f)
									if (Object.prototype.hasOwnProperty.call(f, C)) {
										var x = f[C];
										if ("number" == typeof x) g[C] = x, v[C] = 0, O[C] = x, y[C] = 0;
										else {
											for (var E = o.state.lastIdealStyles[h][C], P = o.state.lastIdealVelocities[h][C], j = 0; j < a; j++) {
												var _ = c.default(b / 1e3, E, P, x.val, x.stiffness, x.damping, x.precision);
												E = _[0], P = _[1]
											}
											var S = c.default(b / 1e3, E, P, x.val, x.stiffness, x.damping, x.precision),
												k = S[0],
												w = S[1];
											g[C] = E + (k - E) * r, v[C] = P + (w - P) * r, O[C] = E, y[C] = P
										}
									} m[h] = g, p[h] = v, i[h] = O, d[h] = y
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
					for (var v = u[g], O = null, y = 0; y < s.length; y++)
						if (s[y].key === v.key) {
							O = y;
							break
						} if (null == O) {
						var C = e(v);
						p[g] = C, h[g] = C;
						var x = a.default(v.style);
						b[g] = x, f[g] = x
					} else p[g] = r[O], h[g] = c[O], b[g] = i[O], f[g] = d[O]
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
								for (var a = (o.accumulatedTime - Math.floor(o.accumulatedTime / h) * h) / h, i = Math.floor(o.accumulatedTime / h), l = g(o.props.willEnter, o.props.willLeave, o.props.didLeave, o.state.mergedPropsStyles, n, o.state.currentStyles, o.state.currentVelocities, o.state.lastIdealStyles, o.state.lastIdealVelocities), u = l[0], p = l[1], b = l[2], v = l[3], O = l[4], y = 0; y < u.length; y++) {
									var C = u[y].style,
										x = {},
										E = {},
										P = {},
										j = {};
									for (var _ in C)
										if (Object.prototype.hasOwnProperty.call(C, _)) {
											var S = C[_];
											if ("number" == typeof S) x[_] = S, E[_] = 0, P[_] = S, j[_] = 0;
											else {
												for (var k = v[y][_], w = O[y][_], I = 0; I < i; I++) {
													var M = c.default(h / 1e3, k, w, S.val, S.stiffness, S.damping, S.precision);
													k = M[0], w = M[1]
												}
												var N = c.default(h / 1e3, k, w, S.val, S.stiffness, S.damping, S.precision),
													T = N[0],
													A = N[1];
												x[_] = k + (T - k) * a, E[_] = w + (A - w) * a, P[_] = k, j[_] = w
											}
										} v[y] = P, O[y] = j, p[y] = x, b[y] = E
								}
								o.animationID = null, o.accumulatedTime -= i * h, o.setState({
									currentStyles: p,
									currentVelocities: b,
									lastIdealStyles: v,
									lastIdealVelocities: O,
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
				i = n("./src/reddit/actions/shortcuts/utils.ts"),
				c = n("./src/reddit/components/Portal/index.tsx"),
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
						}), Object(d.b)(), Object(i.d)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: n,
							ignoreDefaultFocus: s,
							onOverlayClick: a,
							overlayClassName: i,
							overlayCustomStyles: d,
							withOverlay: u,
							...p
						} = t, h = p;
						return o.a.createElement(c.a, {
							container: document.getElementById(l.b)
						}, o.a.createElement(b, {
							className: i,
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
			const o = 120 * s.fb;
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
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/lib/localStorageAvailable/index.ts"),
				o = n("./src/lib/notifications/constants.ts"),
				r = n("./src/lib/notifications/featureFlags.ts");
			n("./src/lib/serviceWorker/index.ts");
			const a = () => {
					if (Object(r.a)() !== o.c.NotificationsSupported) return o.a.Unsupported;
					const e = Object(s.a)() && localStorage.getItem(o.f) === o.g;
					return "granted" === Notification.permission ? o.a.Granted : "denied" === Notification.permission ? o.a.Denied : e ? o.a.Closed : o.a.Default
				},
				i = () => !!Object(s.a)() && (localStorage.removeItem(o.f), !0),
				c = async (e, t, n, r, i, c) => {
					if (Object(s.a)()) {
						const t = localStorage.getItem(o.h),
							n = (new Date).getTime();
						if (!e && t && parseInt(t) + o.i > n) return void c();
						localStorage.setItem(o.h, n.toString())
					}
					const l = a();
					if (l !== o.a.Unsupported) {
						if (!t && l === o.a.Denied) return r(!1, !0), void c();
						if (!t && l === o.a.Granted) return i(!1), void c();
						if (t || l !== o.a.Closed) switch (n(), await Notification.requestPermission()) {
							case "granted":
								i(!0);
								break;
							case "denied":
								r(!0, !0);
								break;
							case "default":
								c();
								break;
							default:
								r(!0, !1), localStorage.setItem(o.f, o.g)
						} else c()
					} else c()
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
					method: d.hb.POST,
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
				return $
			})), n.d(t, "o", (function() {
				return te
			})), n.d(t, "m", (function() {
				return ne
			})), n.d(t, "q", (function() {
				return re
			})), n.d(t, "t", (function() {
				return ae
			})), n.d(t, "n", (function() {
				return ce
			})), n.d(t, "s", (function() {
				return le
			})), n.d(t, "l", (function() {
				return de
			})), n.d(t, "a", (function() {
				return me
			})), n.d(t, "b", (function() {
				return he
			})), n.d(t, "p", (function() {
				return fe
			})), n.d(t, "f", (function() {
				return ge
			})), n.d(t, "g", (function() {
				return ve
			})), n.d(t, "j", (function() {
				return Oe
			})), n.d(t, "d", (function() {
				return Ce
			})), n.d(t, "c", (function() {
				return je
			})), n.d(t, "i", (function() {
				return _e
			})), n.d(t, "h", (function() {
				return Ie
			})), n.d(t, "k", (function() {
				return Me
			})), n.d(t, "r", (function() {
				return Ne
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
				O = n("./src/lib/makeApiRequest/index.ts"),
				y = n("./src/lib/makeGqlRequest/index.ts"),
				C = n("./src/lib/omitHeaders/index.ts"),
				x = n("./src/reddit/constants/headers.ts"),
				E = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				P = n("./src/reddit/helpers/genericServerError/index.ts"),
				j = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				_ = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				S = n("./src/reddit/models/PostCreationForm/index.ts"),
				k = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				w = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const I = (e, t, n, s) => {
					let o, r;
					if (s === S.h.MARKDOWN) o = n.text, r = null;
					else {
						o = null;
						let e = null;
						n.rteState && (e = h.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(y.a)(e, {
						...v,
						variables: {
							subredditName: t,
							markdown: o,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				M = async (e, t, n, s, r) => {
					const a = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					if (r === S.h.MARKDOWN) a.text = n.text;
					else {
						a.text = null;
						let e = null;
						n.rteState && (e = h.a.toRichTextJSON(n.rteState).document), a.richtext_json = JSON.stringify({
							document: e
						})
					}
					return Object(O.a)(Object(C.a)(e, [x.a]), {
						method: o.hb.POST,
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
			var N = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var T = n("./src/reddit/endpoints/post/index.tsx"),
				A = n("./src/reddit/endpoints/post/convert.ts"),
				R = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				L = n("./src/reddit/featureFlags/index.ts"),
				F = n("./src/reddit/helpers/dom/index.ts"),
				D = n("./src/reddit/helpers/localStorage/index.ts"),
				U = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				B = n("./src/reddit/models/Comment/index.ts"),
				G = n("./src/reddit/models/PostDraft/index.ts"),
				q = n("./src/reddit/models/RichTextJson/index.ts"),
				H = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				W = n("./src/reddit/models/Toast/index.ts"),
				V = n("./src/reddit/selectors/comments.ts"),
				J = n("./src/reddit/selectors/commentSelector.ts"),
				z = n("./src/reddit/selectors/platform.ts"),
				K = n("./src/reddit/selectors/posts.ts"),
				Q = n("./src/reddit/selectors/user.ts"),
				X = n("./src/reddit/actions/comment/index.ts"),
				Y = n("./src/reddit/actions/comment/constants.ts");
			const Z = Object(r.a)(Y.k),
				$ = ({
					hasFocus: e,
					draftKey: t
				}) => async (n, s) => {
					const o = s();
					if (!!o.features.comments.drafts[t])
						if (Object(Q.L)(o) && e) {
							const s = Z({
								hasFocus: e,
								draftKey: t
							});
							n(Object(i.f)(s))
						} else n(Z({
							hasFocus: e,
							draftKey: t
						}))
				}, ee = Object(r.a)(Y.H), te = Object(r.a)(Y.J), ne = Object(r.a)(Y.I), se = Object(r.a)(Y.G), oe = (e, t, n, s) => {
					const o = s.ok && s.body,
						r = o && o.comment && o.comment.id;
					U.f(e, n, t, r)
				}, re = "Toxicity_Warning__Modal", ae = (e, t, n, s, o, r) => async (a, i, {
					gqlContext: c
				}) => {
					const d = i(),
						u = Object(z.e)(d);
					let m = "";
					if (u && (m = u.name), L.d.enableToxicityWarning(d)) {
						if (!(await I(c(), m, s, o))) return void a(Object(l.i)(re))
					}
					a(ce(e, t, n, s, o, r))
				}, ie = e => e.rteState ? h.a.toRichTextJSON(e.rteState) : e.rtJson || e.text, ce = (e, t, n, r, a, i, c) => async (u, h, {
					apiContext: g
				}) => {
					u(Object(l.g)(re));
					const v = h(),
						O = v.features.comments.submit.pending[n];
					if (!v.user.account || O) return;
					u(ee({
						draftKey: n,
						draft: r
					}));
					const y = v.user.account.displayText,
						C = r.commentMode;
					let x;
					if (c ? (x = await Object(R.i)(g(), e, r, y), u(Object(m.a)({
							streamId: e,
							level: x.body.automuteLevel
						}))) : x = await M(g(), e, r, y, C), x.ok) {
						let s;
						s = x.body, u(te({
							...s,
							headCommentId: Object(V.w)(v, {
								commentsPageKey: t
							}),
							commentsPageKey: t,
							draftKey: n
						}));
						const o = Object(K.I)(h(), {
							postId: e
						});
						u(Object(d.z)(o, f.a.CommentSubmitted))
					} else {
						x.error && x.error.type === o.Gb && U.g(v, ie(r), e);
						const t = x.error && x.error.fields && x.error.fields[0] ? x.error.fields[0].msg : s.fbt._("Something went wrong", null, {
							hk: "LWFS0"
						});
						u(se({
							draftKey: n,
							error: x.error
						})), u(Object(b.f)({
							duration: b.a,
							kind: W.b.Error,
							text: t
						}))
					}
					oe(h(), t, a, x), i || Object(p.d)()
				}, le = e => async (t, n, {
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
						if (!(await I(s(), p, c, d))) return void t(Object(l.i)(re))
					}
					t(de({
						commentsPageKey: r,
						draftKey: i,
						parentCommentDepth: a,
						parentCommentId: o,
						formData: c,
						editorMode: d
					}))
				}, de = e => async (t, n, {
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
					t(Object(l.g)(re));
					const m = n(),
						b = m.features.comments.submit.pending[c];
					if (!m.user.account || b) return;
					t(ee({
						draftKey: c,
						draft: d
					}));
					const h = m.user.account.displayText,
						f = d.commentMode,
						g = await M(s(), r, d, h, f);
					if (g.ok) t(ne({
						...g.body,
						parentCommentId: r,
						commentsPageKey: a,
						draftKey: c,
						depth: i + 1
					}));
					else {
						if (g.error && g.error.type === o.Gb) {
							const e = Object(J.a)(m, {
								commentId: r
							});
							if (!e) return;
							U.g(m, ie(d), e.postId, r)
						}
						t(se({
							draftKey: c,
							error: g.error
						}))
					}
					oe(n(), a, u, g), Object(p.d)()
				}, ue = Object(r.a)(Y.q), me = Object(r.a)(Y.p), pe = Object(r.a)(Y.l), be = (Object(r.a)(Y.g), Object(r.a)(Y.m)), he = (Object(r.a)(Y.t), (e, t, n) => async (o, r, {
					apiContext: a
				}) => {
					const i = e === S.h.RICH_TEXT;
					if (!t || "object" == typeof t && Object(q.G)(t)) o(be({
						editorMode: e,
						draftKey: n,
						content: i ? q.i : ""
					})), o(Object(u.c)(e));
					else {
						o(Object(u.b)(n));
						const r = await Object(A.a)(a(), e, i ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							o(Object(u.a)(n)), o(be({
								editorMode: e,
								draftKey: n,
								content: t
							})), o(Object(u.c)(e))
						} else o(Object(u.a)(n)), o(Object(b.f)({
							duration: b.a,
							kind: W.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), fe = ({
					commentsPageKey: e,
					parentCommentId: t,
					singleOpen: n
				}) => async (s, o) => {
					const r = o(),
						d = Object(a.a)(G.c.replyToComment, t);
					if (!Object(Q.J)(o())) return s(Object(c.k)()), void s(Object(l.k)({
						actionSource: l.a.Reply,
						redirectUrl: Object(V.m)(o(), {
							commentId: t
						})
					}));
					const u = r.features.comments.replyFormOpen[e],
						m = u && u[t];
					if ((m || u && n) && (Object.keys(u).forEach(t => u[t] && s(me({
							parentCommentId: t,
							commentsPageKey: e
						}))), m)) return;
					let p = "",
						b = null;
					const h = r.user.prefs.commentMode,
						f = Object(F.d)();
					if (f) {
						const e = f.filter(e => !!e && 10 !== e.charCodeAt(0));
						if (h === S.h.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
						else {
							const t = e.map(e => H.s(e, null)).map(e => H.l([e])),
								n = H.s("", null),
								s = H.l([n]);
							b = {
								document: [H.c(t), s]
							}
						}
					}
					const g = r.features.comments.drafts[d];
					let v;
					if (v = f ? {
							commentMode: h,
							draftType: G.c.replyToComment,
							rtJson: b,
							text: `${p}\n`
						} : g || {
							commentMode: h,
							draftType: G.c.replyToComment,
							rtJson: b,
							text: ""
						}, Object(Q.L)(r)) {
						const n = ue({
							parentCommentId: t,
							commentsPageKey: e,
							draftKey: d,
							formData: v
						});
						s(Object(i.f)(n))
					} else s(ue({
						parentCommentId: t,
						commentsPageKey: e,
						draftKey: d,
						formData: v
					}))
				}, ge = e => async t => {
					t(Object(X.p)(e)), t(Ce(e))
				}, ve = ({
					parentCommentId: e,
					commentsPageKey: t
				}) => async n => {
					n(me({
						parentCommentId: e,
						commentsPageKey: t
					})), n(fe({
						parentCommentId: e,
						commentsPageKey: t
					})), n(Object(X.p)({
						commentId: e,
						commentsPageKey: t
					}))
				}, Oe = (e, t) => n => n(pe({
					draftKey: e,
					formData: t
				})), ye = Object(r.a)(Y.s), Ce = ({
					commentId: e,
					commentMode: t,
					commentsPageKey: n,
					draftKey: s,
					text: o
				}) => async (r, a) => {
					const i = a();
					i.user.account && (U.c(i), r(ye({
						commentId: e,
						commentsPageKey: n,
						draftKey: s,
						formData: {
							text: o,
							commentMode: t,
							rteState: null,
							draftType: G.c.edit,
							hasFocus: !0
						}
					})))
				}, xe = Object(r.a)(Y.C), Ee = Object(r.a)(Y.B), Pe = Object(r.a)(Y.D), je = Object(r.a)(Y.h), _e = ({
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
					n(xe({
						draftKey: s
					})), U.d(c);
					const l = c.user.account.displayText || "",
						d = r.commentMode,
						u = await (async (e, t, n, s, r, a) => {
							const i = {
								api_type: "json",
								return_rtjson: !0,
								thing_id: t
							};
							if (a === S.h.MARKDOWN) i.text = s.text;
							else {
								i.text = null;
								let e = null;
								s.rteState && (e = h.a.toRichTextJSON(s.rteState).document), i.richtext_json = JSON.stringify({
									document: e
								})
							}
							return Object(O.a)(Object(C.a)(e, [x.a]), {
								endpoint: Object(E.a)(Object(w.a)(Object(k.a)(`${e.apiUrl}/api/editusertext`))),
								method: o.hb.POST,
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
						n(Pe({
							commentId: e,
							commentsPageKey: t,
							draftKey: s
						})), n(Object(X.i)({
							[e]: {
								...o.comment
							}
						}))
					} else n(Ee({
						draftKey: s,
						error: u.error
					}))
				}, Se = Object(r.a)(Y.z), ke = Object(r.a)(Y.y), we = Object(r.a)(Y.A), Ie = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const a = s();
					n(Se({
						id: e
					})), U.a(e, a);
					const i = await ((e, t) => Object(O.a)(Object(C.a)(e, [x.a]), {
						endpoint: Object(E.a)(`${e.apiUrl}/api/del`),
						method: o.hb.POST,
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
					i.ok ? n(we({
						id: e,
						postId: t
					})) : n(ke({
						id: e,
						error: i.error
					}))
				}, Me = e => async (t, n, {
					apiContext: s
				}) => {
					const o = !n().features.comments.models[e].sendReplies;
					t(Object(X.i)({
						[e]: {
							sendReplies: o
						}
					})), (await Object(T.q)(s(), e, o)).ok || t(Object(X.i)({
						[e]: {
							sendReplies: !o
						}
					}))
				}, Ne = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					var a, i, c, l, d, u;
					n(Object(X.c)());
					const m = e => Object(b.f)(Object(b.e)(e, W.b.Error));
					if (((null === (i = null === (a = o().pages) || void 0 === a ? void 0 : a.comments) || void 0 === i ? void 0 : i.followed) || []).length === g.a) n(m(s.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const a = t === B.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(X.n)(i)), (await ((e, t) => Object(y.a)(e, {
								...N,
								variables: {
									input: t
								}
							}))(r(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(D.vb)(null !== (d = null === (l = null === (c = o().pages) || void 0 === c ? void 0 : c.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== d ? d : [], null === (u = o().user.account) || void 0 === u ? void 0 : u.id);
							const e = a ? s.fbt._("Followed! You’ll receive updates when there’s new activity", null, {
								hk: "1Dp5UH"
							}) : s.fbt._("Unfollowed, You’ll no longer recieve updates on this comment", null, {
								hk: "2fJsVC"
							});
							n(Object(b.f)({
								kind: W.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(X.n)(i)), n(m(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				}
		},
		"./src/reddit/actions/comment/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return w
			})), n.d(t, "m", (function() {
				return I
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "h", (function() {
				return A
			})), n.d(t, "l", (function() {
				return D
			})), n.d(t, "q", (function() {
				return U
			})), n.d(t, "j", (function() {
				return B
			})), n.d(t, "g", (function() {
				return G
			})), n.d(t, "f", (function() {
				return q
			})), n.d(t, "o", (function() {
				return V
			})), n.d(t, "p", (function() {
				return J
			})), n.d(t, "d", (function() {
				return z
			})), n.d(t, "a", (function() {
				return Q
			})), n.d(t, "b", (function() {
				return X
			})), n.d(t, "n", (function() {
				return Y
			})), n.d(t, "c", (function() {
				return Z
			})), n.d(t, "k", (function() {
				return $
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/config.ts"),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/telemetry/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/reddit/actions/economics/helpers/async.ts"),
				c = n("./src/reddit/actions/economics/powerups/achievements.ts"),
				l = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/presence.ts"),
				m = n("./src/reddit/actions/shortcuts/utils.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/actions/vote.ts"),
				h = n("./src/reddit/endpoints/comment/index.tsx"),
				f = n("./src/reddit/helpers/commentList/index.ts"),
				g = n("./src/reddit/helpers/trackers/comment.ts"),
				v = n("./src/reddit/models/Comment/index.ts"),
				O = n("./src/reddit/models/Post/index.ts"),
				y = n("./src/reddit/models/Toast/index.ts"),
				C = n("./src/reddit/models/Vote/index.ts"),
				x = n("./src/reddit/selectors/comments.ts"),
				E = n("./src/reddit/selectors/commentSelector.ts"),
				P = n("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				j = n("./src/reddit/selectors/moderatingComments.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				S = n("./src/reddit/actions/comment/constants.ts");
			const k = {},
				w = Object(a.a)(S.o),
				I = e => async (t, n, {
					apiContext: s
				}) => {
					if (!Object(_.J)(n())) return t(Object(l.k)()), void t(Object(d.k)({
						actionSource: d.a.Save,
						redirectUrl: Object(x.m)(n(), {
							commentId: e
						})
					}));
					const r = n().features.comments.models[e];
					if (!r) return;
					const a = r.isSaved ? h.k : h.g;
					if (t(w({
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
						t(Object(p.f)({
							text: n,
							kind: y.b.Undo,
							buttonText: s,
							buttonAction: I(e)
						}))
					} else t(w({
						[e]: {
							isSaved: r.isSaved
						}
					}))
				}, M = e => `viewing-comment-${e}`, N = s.a.telemetry.commentConsumedThreshold, T = e => async (t, n) => {
					const o = n();
					if (!Object(E.a)(o, {
							commentId: e
						}) || Math.random() > s.a.telemetry.commentSampleRate) return;
					g.g({
						state: o,
						commentId: e
					}), r.c.start(M(e));
					const a = setTimeout(() => g.a({
						state: o,
						commentId: e
					}), N);
					k[e] = a
				}, A = (e, t) => async (n, s) => {
					const o = s(),
						a = M(e);
					if (Object(E.a)(o, {
							commentId: e
						}) && r.c.has(a)) {
						const n = r.c.end(a);
						!t && n < N && (clearTimeout(k[e]), delete k[e])
					}
				}, R = Object(a.a)(S.x), L = Object(a.a)(S.w), F = Object(a.a)(S.v), D = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					const r = s(),
						a = r.moreComments.models[t],
						l = r.platform.currentPage,
						d = l && l.routeMatch,
						m = d && d.match,
						{
							partialPostId: p
						} = m ? m.params : null;
					if (!p) return;
					const b = Object(O.s)(p);
					n(R({
						moreCommentsId: a.id
					}));
					const g = await Object(h.e)(o(), b, {
						token: a.token
					}, Object(P.a)(r));
					if (g.ok) {
						const t = g.body,
							s = Object(f.a)(t, b, r);
						n(L({
							key: e,
							moreCommentsItem: a,
							shouldCollapse: s,
							...t
						}));
						const o = r.posts.models[b];
						let l;
						o && "subreddit" === o.belongsTo.type && t.comments && (l = o.belongsTo.id, await n(Object(i.a)({
							commentIds: Object.keys(g.body.comments),
							postIds: [o.id],
							skip: ["communityDetails", "subscription"],
							subredditId: l
						})));
						const d = g.body.comments,
							m = g.body.posts;
						await n(Object(u.b)(m, d, l)), await n(Object(c.b)(l, d))
					} else n(F({
						moreCommentsItem: a,
						...g.error
					}))
				}, U = Object(b.a)(f.b, C.a.upvoted), B = Object(b.a)(f.b, C.a.downvoted), G = Object(a.a)(S.j), q = Object(a.a)(S.i), H = Object(a.a)(S.e), W = Object(a.a)(S.f), V = (Object(a.a)(S.c), Object(a.a)(S.d), ({
					commentId: e,
					commentsPageKey: t,
					scrollToAndRemeasure: n
				}) => async (s, o) => {
					const r = o(),
						a = Object(v.i)(e),
						i = Object(x.n)(r, {
							commentLink: a,
							commentsPageKey: t
						}),
						c = Object(j.b)(r, {
							commentId: e,
							commentsPageKey: t
						}),
						l = i.depth;
					s(H({
						commentId: e,
						commentsPageKey: t,
						isCollapsed: c
					})), c || 0 !== l || n(e, !0), Object(m.d)()
				}), J = ({
					commentId: e,
					commentsPageKey: t
				}) => async n => {
					n(W({
						commentId: e,
						commentsPageKey: t
					}))
				}, z = ({
					commentLink: e,
					commentsPageKey: t,
					lineDepth: n,
					scrollToAndRemeasure: s
				}) => async (o, r) => {
					const a = r(),
						i = Object(f.e)(t, e, n, a),
						c = Object(j.b)(a, {
							commentId: e.id,
							commentsPageKey: t
						});
					o(H({
						commentId: i,
						commentsPageKey: t,
						isCollapsed: c
					})), 0 === n && s(i, !0), Object(m.d)()
				}, K = Object(a.a)(S.r), Q = e => t => t(K({
					draftKey: e
				})), X = Object(a.a)(S.a), Y = Object(a.a)(S.E), Z = Object(a.a)(S.b), $ = Object(a.a)(S.u)
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
								method: s.hb.GET
							});
						n.ok && n.body && e(u(n.body))
					}
				}
		},
		"./src/reddit/actions/economics/powerups/achievements.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			})), n.d(t, "c", (function() {
				return k
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "d", (function() {
				return I
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/sentry/index.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/SubredditUserAchievements.json"),
				c = n("./src/redditGQL/operations/UpdateAchievementFlairPreference.json");
			var l = n("./src/reddit/selectors/experiments/econ/index.ts"),
				d = n("./src/lib/initializeClient/installReducer.ts"),
				u = n("./src/reddit/reducers/features/powerups/index.ts"),
				m = n("./src/reddit/actions/gold/powerups.ts"),
				p = n("./src/reddit/actions/toaster.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/reddit/selectors/gold/powerups/index.ts"),
				g = n("./src/reddit/selectors/gold/powerups/achievements.ts"),
				v = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/actions/economics/powerups/constants.ts");
			Object(d.a)({
				features: {
					powerups: u.a
				}
			});
			const y = Object(o.a)(O.d),
				C = Object(o.a)(O.h),
				x = Object(o.a)(O.f),
				E = Object(o.a)(O.g),
				P = Object(o.a)(O.e),
				j = (e, t) => async (n, s, {
					gqlContext: o
				}) => {
					const c = t.filter(e => !!(null == e ? void 0 : e.trim()));
					if (c.length) try {
						const t = s(),
							r = Object(l.i)(t),
							d = await (async (e, t, n, s) => {
								const o = await Object(a.a)(e, {
									...i,
									variables: {
										subredditId: t,
										redditorIds: n,
										includeSupporterInfo: s
									}
								});
								if (!o.ok) throw new Error("Unable to fetch user achievements");
								return o.body.data
							})(o(), e, c, r),
							{
								subredditInfoById: u,
								redditorsInfoByIds: m
							} = d;
						await n(y(u)), r && m && await n(C(m))
					} catch (d) {
						r.c.captureException(d)
					}
				}, _ = (e, t) => async (n, s) => {
					if (!e) return;
					const o = s(),
						r = Object(v.j)(o);
					if (!r || !Object(f.g)(o, {
							subredditId: e
						}) || !Object(l.g)(o)) return;
					const a = !!Object(g.c)(o, {
						subredditId: e,
						userId: r.id
					});
					!t && a || await n(j(e, [r.id]))
				}, S = e => async (t, n) => {
					if (!e) return !1;
					await t(Object(m.l)(e, {
						fullData: !0
					}));
					const s = n();
					return Object(f.g)(s, {
						subredditId: e
					}) && Object(l.g)(s)
				}, k = e => async (t, n) => {
					var s;
					const o = n(),
						r = e.map(({
							id: e
						}) => e),
						a = Object(h.b)(o, {
							commentIds: r
						}),
						i = null === (s = a.find(e => e && e.subredditId)) || void 0 === s ? void 0 : s.subredditId;
					if (!(await t(S(i)))) return;
					const c = new Set(a.filter(e => !!(null == e ? void 0 : e.authorId)).map(({
						authorId: e
					}) => e));
					await t(j(i, Array.from(c)))
				}, w = (e, t) => async (n, s) => {
					if (!t) return;
					if (!(await n(S(e)))) return;
					const o = new Set;
					Object.values(t).forEach(e => {
						o.add(e.authorId)
					}), await n(j(e, Array.from(o)))
				}, I = (e, t) => async (n, o, {
					gqlContext: i
				}) => {
					const l = o(),
						d = Object(v.j)(l);
					if (!d) return;
					const u = {
						subredditId: e,
						userId: d.id,
						achievementType: t
					};
					n(x(u));
					try {
						await (async (e, t, n) => {
							const s = await Object(a.a)(e, {
								...c,
								variables: {
									subredditId: t,
									achievementType: n
								}
							});
							if (!s.ok || !s.body.data.updateAchievementFlairPreference.ok) throw new Error("Unable to update the preferred achievement flair")
						})(i(), u.subredditId, u.achievementType), n(E(u))
					} catch (m) {
						n(P(u)), r.c.captureException(m), n(Object(p.f)({
							duration: p.a,
							kind: b.b.Error,
							text: s.fbt._("Failed to set preferred achievement flair", null, {
								hk: "4bEftA"
							})
						}))
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
			const m = o()(d.d),
				p = () => async (e, t) => {
					const n = t();
					m(), Object(u.a)(n) && (await e(Object(i.x)()), Object(u.a)(t()) && e(Object(a.d)({
						notificationBannerId: c.a.EmailCollectionBannerId
					})))
				}, b = () => async (e, t) => {
					const n = t();
					Object(u.a)(n) && (Object(d.c)(), e(Object(a.c)({
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
					method: o.hb.POST,
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
				})), Object(a.J)(i) || await t(o.s());
				const l = n();
				if (!Object(a.J)(l)) return t(Object(s.f)())
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
				Object(o.J)(n) || await e(s.s());
				const r = t();
				if (!Object(o.J)(r)) throw new Error("Failed to login")
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
				return O
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/notificationSettingsLayout/constants.ts"),
				a = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/notificationSettingsLayoutByChannelEndpoint.ts"),
				c = n("./src/reddit/models/NotificationSettingsLayout/index.ts"),
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
					(await Object(i.b)(o(), e)).ok ? (O(t, e), function(e) {
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

			function O(e, t) {
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
							i.nb(!1), Object(s.c)();
							break;
						case o.a.Default:
						case o.a.Granted:
							i.nb(!0), Object(s.c)();
							break;
						case o.a.Closed:
							i.nb(!0)
					}
				}
		},
		"./src/reddit/actions/notificationsInbox/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return N
			})), n.d(t, "e", (function() {
				return T
			})), n.d(t, "b", (function() {
				return U
			})), n.d(t, "f", (function() {
				return B
			})), n.d(t, "c", (function() {
				return G
			})), n.d(t, "a", (function() {
				return q
			})), n.d(t, "h", (function() {
				return W
			})), n.d(t, "i", (function() {
				return V
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
				m = n("./src/redditGQL/operations/DeleteInboxNotifications.json");
			n("./src/reddit/endpoints/notificationSettingsLayoutByChannelEndpoint.ts");
			var p = n("./src/lib/constants/index.ts"),
				b = n("./src/lib/makeApiRequest/index.ts"),
				h = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/redditGQL/operations/NotificationInboxFeed.json"),
				g = n("./src/redditGQL/operations/NotificationInboxFeedSlimmed.json"),
				v = n("./src/reddit/constants/headers.ts"),
				O = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var y;
			! function(e) {
				e.Activity = "activity", e.Messages = "messages"
			}(y || (y = {}));
			var C = n("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				x = n("./src/redditGQL/operations/UpdateInboxActivitySeenState.json");
			var E = n("./src/reddit/helpers/trackers/inbox.ts"),
				P = n("./src/reddit/models/Badge/index.ts"),
				j = n("./src/reddit/models/NotificationInbox/index.ts"),
				_ = n("./src/reddit/models/Toast/index.ts"),
				S = n("./src/reddit/selectors/appBadges.ts"),
				k = (n("./src/reddit/selectors/notificationPrefs.ts"), n("./src/reddit/selectors/notificationsInbox.tsx"));
			const w = Object(o.a)(a.e),
				I = Object(o.a)(a.b),
				M = Object(o.a)(a.a),
				N = e => async (t, n, {
					gqlContext: s
				}) => {
					var o, r;
					const a = n(),
						i = Object(k.a)(a);
					t(w());
					const d = await ((e, t) => Object(l.a)(e, {
						...f,
						variables: t
					}))(s(), e);
					if (null === (r = null === (o = d.error) || void 0 === o ? void 0 : o.fields) || void 0 === r ? void 0 : r.length) return t(M({
						error: d.error
					})), void t(Object(c.d)());
					const u = d && d.body,
						m = A(u);
					if (null === i) {
						const e = Object(k.f)(a);
						t(L(m.nodes, e.length))
					}
					t(I(m))
				}, T = () => async (e, t, {
					gqlContext: n
				}) => {
					var s, o;
					const r = await (e => Object(l.a)(e, {
						...g
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
					a && a !== r && n(F({
						index: a
					}))
				}, F = Object(o.a)(a.g), D = (Object(o.a)(a.h), Object(o.a)(a.f)), U = e => async (t, n, {
					gqlContext: o
				}) => {
					const r = [e];
					if ((await ((e, t) => Object(l.a)(e, {
							...m,
							variables: {
								input: t
							}
						}))(o(), {
							notificationIds: r
						})).ok) {
						t(D({
							id: e
						}));
						const o = Object(k.f)(n());
						t(L(o)), t(Object(c.f)(Object(c.e)(s.fbt._("Notification hidden", null, {
							hk: "1jfPqO"
						}), _.b.SuccessCommunityGreen)))
					} else t(Object(c.f)(Object(c.e)(s.fbt._("Failed to hide notification, please try again.", null, {
						hk: "fL7uB"
					}), _.b.Error)))
				}, B = (e, t) => async (n, o, {
					gqlContext: r
				}) => {
					if (!e) return;
					const a = () => {
						const n = s.fbt._("Success! You won't see notifications from this community in the future.", null, {
							hk: "2tkhbk"
						});
						return Object(c.f)(Object(c.e)(n, _.b.Undo, s.fbt._("Undo", null, {
							hk: "4zFGDk"
						}), ((e, t) => async (n, o, {
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
						})(e, t)))
					};
					(await Object(C.b)(r(), e, {
						isSubredditUpdatesInterestingPostEnabled: !1,
						isUpdateFromSubredditEnabled: !1
					})).ok ? n(a()) : n(Object(c.f)(Object(c.e)(s.fbt._("Failed to hide notifications, please try again.", null, {
						hk: "KEGcB"
					}), _.b.Error)))
				}, G = e => async (t, n, {
					apiContext: o
				}) => {
					if (!e) return;
					(await ((e, t) => Object(b.a)(Object(h.a)(e, [v.a]), {
						endpoint: Object(O.a)(`${e.apiUrl}/api/sendreplies`),
						method: p.hb.POST,
						data: {
							id: t
						}
					}))(o(), e)).ok ? t(Object(c.f)(Object(c.e)(s.fbt._("Success! You won't see updates on this in the future", null, {
						hk: "wtDa4"
					}), _.b.SuccessCommunityGreen))) : t(Object(c.f)(Object(c.e)(s.fbt._("Failed to turn off updates on this, please try again", null, {
						hk: "1zhpEy"
					}), _.b.Error)))
				}, q = e => async (t, n, {
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
				}, H = Object(o.a)(a.d), W = (e, t) => async (n, s, {
					apiContext: o
				}) => {
					let a;
					if (t === j.a.CommentReply || t === j.a.PostReply || t === j.a.PrivateMessage || t === j.a.UsernameMention) {
						if ((a = await ((e, t) => Object(b.a)(Object(h.a)(e, [v.a]), {
								endpoint: Object(O.a)(`${e.apiUrl}/api/read_message`),
								method: p.hb.POST,
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
					} else a = await ((e, t) => Object(b.a)(Object(h.a)(e, [v.a]), {
						endpoint: Object(O.a)(`${e.apiUrl}/api/read_notification`),
						method: p.hb.POST,
						data: {
							id: t
						}
					}))(o(), e);
					if (a.ok) {
						const t = (new Date).toISOString();
						n(H({
							id: e,
							now: t
						}))
					}
				}, V = () => async (e, t, {
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
				}, J = Object(o.a)(a.c), z = () => async (e, t, {
					apiContext: n
				}) => {
					const {
						notificationsInbox: {
							markAllAsReadTimestamp: o
						}
					} = t(), a = new Date;
					if (!o || a.getTime() - new Date(o).getTime() > 15e3) {
						if ((await ((e, t) => Object(b.a)(Object(h.a)(e, [v.a]), {
								endpoint: Object(O.a)(`${e.apiUrl}/api/read_all_messages`),
								method: p.hb.POST,
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
							})), e(J({
								now: a.toISOString()
							}))
						} else e(Object(c.f)(Object(c.e)(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "VW7c3"
						}), _.b.Error)))
					}
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
				e(Object(o.l)({
					title: Object(s.a)()
				})), await e(Object(r.s)()), Object(a.J)(t()) || e(Object(i.i)())
			}
		},
		"./src/reddit/actions/pages/meta/communityPointsLearnMorePage.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/actions/economics/me/thunkedActions.ts"),
				o = n("./src/reddit/actions/users.ts"),
				r = n("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				Object(r.J)(t()) || await e(Object(o.s)()), await e(Object(s.b)()).then(() => {
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
						Object(c.J)(d) || n.push(e(Object(a.s)()));
						const u = Object(s.a)(l, null);
						n.push(e(Object(r.subredditDataRequested)(u, l, {}))), await Promise.all(n);
						const m = Object(i.E)(t(), l);
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
				if (e(Object(r.l)({
						title: Object(s.g)()
					})), await e(Object(i.s)()), !Object(l.J)(t())) return;
				await e(Object(a.q)());
				const n = Object(c.a)(t());
				n && n.length && await e(Object(o.d)(n))
			}
		},
		"./src/reddit/actions/pages/talk.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/pageTitle.ts"),
				o = n("./src/reddit/actions/platform.ts");
			t.a = () => async e => {
				e(Object(o.l)({
					title: Object(s.m)()
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
			const p = Object(o.a)(m.C),
				b = Object(o.a)(m.p),
				h = Object(o.a)(m.M),
				f = (e, t, n) => async (o, i, {
					apiContext: f
				}) => {
					c.j(i(), t);
					const v = t === l.h.MARKDOWN,
						O = t === l.h.RICH_TEXT,
						y = m.k;
					if (v && Object(d.G)(n)) return o(h({
						editorKey: e,
						editorMode: l.h.MARKDOWN,
						content: ""
					})), void o(g(t));
					if (O && !n) return o(h({
						editorKey: e,
						editorMode: l.h.RICH_TEXT,
						content: d.i
					})), void o(g(t));
					o(p(y));
					const C = await Object(a.a)(f(), t, v ? JSON.stringify(n) : n);
					C.ok ? (o(b(y)), o(h({
						editorKey: e,
						editorMode: t,
						content: C.body.output
					})), o(g(t))) : (o(b(y)), o(Object(r.f)({
						duration: r.a,
						kind: u.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, g = e => async (t, n) => {
					const o = Object(i.m)();
					if (o >= 3) return;
					const a = n().user.prefs.useMarkdown ? l.h.MARKDOWN : l.h.RICH_TEXT;
					if (e === a) return;
					const c = e === l.h.MARKDOWN ? s.fbt._("You can set Markdown as the default editor mode in the settings", null, {
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
					})), Object(i.sb)(o + 1)
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
						activePostId: O
					} = h.shortcuts;
					e(t && O ? c.b(O, "close", !0) : l.a)
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
			const o = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairChanged)),
				r = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleUserFlairInSubreddit)),
				a = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.toggleAssignOwnFlairPermission)),
				i = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.saveUserFlairTemplate)),
				c = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.deleteUserFlairTemplate)),
				l = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.reorderUserFlairTemplates)),
				d = Object(s.a)(() => n.e("UserFlair").then(n.bind(null, "./src/reddit/actions/userFlair/userFlair.ts")).then(e => e.userFlairLoadedAndModalOpened))
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
				m = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/lib/makeActionCreator/index.ts"),
				b = n("./src/reddit/actions/sso/constants.ts");
			const h = Object(p.a)(b.a),
				f = Object(p.a)(b.b);
			var g = n("./src/reddit/actions/toaster.ts"),
				v = n("./src/reddit/components/TrackingHelper/index.tsx"),
				O = n("./src/reddit/constants/accountManager.ts"),
				y = n("./src/reddit/constants/history.ts"),
				C = n("./src/reddit/constants/listings.ts"),
				x = n("./src/reddit/constants/modals.ts"),
				E = n("./src/reddit/constants/parameters.ts"),
				P = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				j = n("./src/reddit/helpers/history/index.ts"),
				_ = n("./src/reddit/helpers/trackers/onboarding.ts"),
				S = n("./src/reddit/icons/svgs/Close/index.tsx"),
				k = n("./src/reddit/models/Sso/index.ts"),
				w = n("./src/reddit/models/Toast/index.ts"),
				I = n("./src/reddit/selectors/accountManager.ts"),
				M = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				N = n("./src/reddit/selectors/experiments/onboarding.ts"),
				T = n("./src/reddit/selectors/telemetry.ts"),
				A = n("./src/reddit/selectors/user.ts"),
				R = n("./src/reddit/components/AccountManagerModal/IFrame/index.m.less"),
				L = n.n(R);
			const F = d.a.iframe("IFrame", L.a),
				D = d.a.button("CloseButton", L.a),
				U = d.a.wrapped(S.a, "Close", L.a),
				B = Object(c.c)({
					accountManagerSrc: I.c,
					actionSource: I.a,
					frontpageSignupVariant: M.a,
					isLoggedIn: A.J,
					isOnboardingEnabled: N.a,
					redirectUrl: I.b
				}),
				G = Object(i.b)(B, (e, t) => ({
					oniFrameLoaded: (t, n) => {
						e((e, s) => {
							t.contentWindow.postMessage({
								events: {
									...Object(T.defaults)(s()),
									actionSource: n
								},
								type: "eventData"
							}, Object(P.a)())
						})
					},
					onTwoFactorChanged: () => e(Object(m.x)(!1)),
					onSSOLinkSuccess: (t, n, s) => {
						e(h({
							linkedIdentity: n
						})), e(Object(u.g)(s)), e(Object(g.f)(Object(g.e)(t, w.b.SuccessCommunity)))
					},
					onSSOUnlinkSuccess: (t, n, s) => {
						e(f({
							linkedIdentity: n
						})), e(Object(u.g)(s)), e(Object(g.f)(Object(g.e)(t, w.b.SuccessCommunity)))
					},
					showToast: (t, n) => {
						e(Object(g.f)(Object(g.e)(t, n)))
					}
				})),
				q = ({
					data: e,
					origin: t
				}) => e && e.success && (e.type === O.a.ChangePassword || e.type === O.a.Close || e.type === O.a.CreateAccount || e.type === O.a.GoogleOneTapDisplayed || e.type === O.a.GoogleOneTapFlowFailed || e.type === O.a.GoogleOneTapSkipped || e.type === O.a.Login || e.type === O.a.PreferenceStatus || e.type === O.a.Register || e.type === O.a.Resize || e.type === O.a.ShowStep || e.type === O.a.SSOLinkFail || e.type === O.a.SSOLinkSuccess || e.type === O.a.SSOUnlinkFail || e.type === O.a.SSOUnlinkSuccess || e.type === O.a.Subscribe || e.type === O.a.TwoFactorChanged) && t === s.a.accountManagerOrigin,
				H = {
					"select-account": "link_account",
					"confirm-otp": "link_account_otp",
					"confirm-password": "link_account_password"
				};
			class W extends a.a.Component {
				constructor() {
					super(...arguments), this.iframeRef = a.a.createRef(), this.isAccountCreated = !1, this.trackResizing = !0, this.currentStep = null, this.state = {
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
						const t = e === k.a.Apple ? x.a.LINK_APPLE_SSO : x.a.LINK_GOOGLE_SSO;
						this.props.onSSOLinkSuccess(o.fbt._("Account connected", null, {
							hk: "2X2Y2n"
						}), e, t)
					}, this.handleUnlinkSSOSuccess = e => {
						const t = e === k.a.Apple ? x.a.UNLINK_APPLE_SSO : x.a.UNLINK_GOOGLE_SSO;
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
						if (this.iframeRef.current && e.source === this.iframeRef.current.contentWindow && q(e))
							if (t.type === O.a.CreateAccount) this.isAccountCreated = !0;
							else if (t.type === O.a.Close) this.closedByUser();
						else if (t.type === O.a.Subscribe) this.onSubscribe(t.subscriptions || t.subredditIds);
						else if (t.type === O.a.Login) this.onLogIn();
						else if (t.type === O.a.ChangePassword) this.onChangePassword();
						else if (t.type === O.a.Resize) {
							if (t.payload && this.trackResizing) {
								const e = t.payload;
								e.height && e.width && this.setIframeStyles(e)
							}
						} else if (t.type === O.a.TwoFactorChanged) this.props.onTwoFactorChanged();
						else if (t.type === O.a.SSOLinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === O.a.SSOLinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleLinkSSOSuccess(e)
						} else if (t.type === O.a.SSOUnlinkFail) this.props.onSSOLinkActionFail && this.props.onSSOLinkActionFail();
						else if (t.type === O.a.SSOUnlinkSuccess) {
							const e = t.payload && t.payload.issuerId;
							this.handleUnlinkSSOSuccess(e)
						} else t.type === O.a.GoogleOneTapDisplayed ? this.props.isLoggedIn || (this.setIframeStyles({
							visibility: "visible"
						}), this.onGoogleOneTapUIViewed()) : t.type === O.a.GoogleOneTapFlowFailed ? this.props.isLoggedIn || this.onGoogleOneTapFlowFailed(t.message) : t.type === O.a.GoogleOneTapSkipped ? this.props.isLoggedIn || (this.props.onGoogleOneTapSkipped && this.props.onGoogleOneTapSkipped(t.reason), this.close()) : t.type === O.a.ShowStep ? this.onShowStep(t.step) : t.type === O.a.PreferenceStatus ? this.onEmailDigestsStatus(t.successfullySet) : this.onSignUp(t.numberSubredditsSelected, t.subredditIds)
					}, this.onSubscribe = e => {
						this.props.onSubscriptionsChanged && this.props.onSubscriptionsChanged(e || [])
					}, this.onLogIn = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : (Object(j.a)(y.a.JustLoggedIn, !0), window.location.reload(!0))
					}, this.onChangePassword = () => {
						this.props.redirectUrl ? this.redirectTo(this.props.redirectUrl) : window.location.reload(!0)
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
							o = (e || t && t.length || 0) > n ? C.c[C.b.Home] : C.c[C.b.Popular]
						}
						this.redirectTo(o)
					}, this.onShowStep = e => {
						this.currentStep = e, e === O.b.Subscribe && (this.trackResizing = !1, this.setIframeStyles({
							height: void 0,
							width: void 0
						})), this.props.onShowScreen && this.props.onShowScreen(e)
					}, this.onGoogleOneTapFlowFailed = e => {
						this.close(), this.props.showToast(e || o.fbt._("Something went wrong. Please try again later", null, {
							hk: "3TdJZE"
						}), w.b.Error)
					}, this.onEmailDigestsStatus = e => {
						e ? this.props.showToast(o.fbt._("Changes saved", null, {
							hk: "6bifV"
						}), w.b.SuccessCommunity) : this.props.showToast(o.fbt._("Something went wrong. Please try again later", null, {
							hk: "1M3Z2N"
						}), w.b.Error)
					}, this.onGoogleOneTapUIViewed = () => {
						this.props.onGoogleOneTapUIViewed && this.props.onGoogleOneTapUIViewed()
					}, this.redirectTo = e => {
						window.location.replace(Object(l.a)(e, {
							[E.o]: "true"
						}))
					}, this.closedByUser = () => {
						if (this.currentStep) {
							const e = H[this.currentStep];
							e && this.props.sendEvent(Object(_.l)(e))
						}
						this.close()
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
					}
				}
				componentDidMount() {
					this.iframeRef.current && (this.iframeRef.current.onload = () => {
						this.props.oniFrameLoaded(this.iframeRef.current, this.props.actionSource), this.focusFirstVisibleIframeInput()
					}, this.props.setRef && this.props.setRef(this.iframeRef), this.props.exposeIFrameElement && this.props.exposeIFrameElement(this.iframeRef.current)), window.addEventListener("message", this.onMessage)
				}
				componentDidUpdate(e) {
					this.props.path !== e.path && e.path === O.c.GoogleOneTap && this.iframeRef.current && this.setIframeStyles({
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
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(F, {
						className: t,
						innerRef: this.iframeRef,
						src: e,
						style: s,
						onLoad: this.onIFrameLoad
					}), n && a.a.createElement(D, {
						onClick: this.closedByUser
					}, a.a.createElement(U, null)))
				}
			}
			t.a = G(Object(v.c)(W))
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
				return $u
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
				O = n("./src/lib/constants/index.ts"),
				y = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				C = n("./src/lib/DeprecatedBrowserProvider/index.tsx"),
				x = n("./src/lib/fastdom/index.ts"),
				E = n("./src/lib/FocusTrap/index.ts"),
				P = n("./src/lib/isEqualWithoutKey/index.ts"),
				j = n("./src/lib/isSimpleClick/index.ts"),
				_ = n("./src/reddit/actions/header.ts"),
				S = n("./src/reddit/actions/survey/index.ts"),
				k = n("./src/reddit/components/EmailCollection/Banner/Loader.ts"),
				w = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js"),
				I = n("./node_modules/polished/dist/polished.es.js"),
				M = n("./node_modules/react-motion/lib/react-motion.js"),
				N = n("./src/lib/lessComponent.tsx"),
				T = n("./src/reddit/components/AccountManagerModal/IFrame/index.tsx"),
				A = n("./src/reddit/components/TrackingHelper/index.tsx"),
				R = n("./src/reddit/constants/accountManager.ts"),
				L = n("./src/reddit/helpers/trackers/onboarding.ts"),
				F = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				D = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				U = n("./src/reddit/selectors/experiments/frontpageSignup.ts"),
				B = n("./src/config.ts"),
				G = n("./src/reddit/components/Carousel/index.m.less"),
				q = n.n(G);
			! function(e) {
				e.Fade = "fade", e.Slide = "slide"
			}(s || (s = {}));
			class H extends m.a.Component {
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
						src: `${B.a.assetPath}/${e}`,
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
							className: Object(v.a)(q.a.item, q.a[n]),
							key: `item-${t}`,
							style: {
								...i,
								backgroundImage: `url("${B.a.assetPath}/${e.img}")`,
								width: o
							},
							onClick: r ? this.handleItemClick : void 0
						}, e.extra && e.extra.map(this.renderItemExtra))
					}, this.renderIndicator = (e, t) => m.a.createElement("div", {
						className: Object(v.a)(q.a.indicator, {
							[q.a.indicatorSelected]: this.state.pageNumber % this.props.items.length === t
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
						className: Object(v.a)(e, q.a.container)
					}, m.a.createElement("article", {
						className: q.a.items
					}, this.state.items.map(this.renderItem)), t && m.a.createElement("footer", {
						className: q.a.indicators
					}, n.map(this.renderIndicator)))
				}
			}
			var W = n("./src/reddit/components/FrontpageSignup/Upsell/Images/index.m.less"),
				V = n.n(W);
			const J = N.a.div("Container", V.a),
				z = N.a.wrapped(H, "Carousel", V.a),
				K = N.a.div("Phone", V.a),
				Q = N.a.img("Frame", V.a),
				X = `${B.a.assetPath}/img/frontpage-signup/android-frame.png`,
				Y = `${B.a.assetPath}/img/frontpage-signup/iphone-frame.png`,
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
					return m.a.createElement(J, {
						className: t
					}, m.a.createElement(K, {
						className: V.a.android
					}, m.a.createElement(z, {
						animationType: s.Fade,
						className: V.a.android,
						delay: 2500,
						items: Z,
						itemTime: 5e3,
						itemWidth: 240
					}), m.a.createElement(Q, {
						src: X
					})), m.a.createElement(K, {
						className: V.a.iphone
					}, m.a.createElement(z, {
						animationType: s.Fade,
						className: V.a.iphone,
						items: $,
						itemTime: 5e3,
						itemWidth: 232
					}), m.a.createElement(Q, {
						src: Y
					})))
				},
				te = n("./src/reddit/components/FrontpageSignup/Upsell/Links/index.m.less"),
				ne = n.n(te);
			const se = N.a.div("Container", ne.a),
				oe = N.a.span("Disclaimer", ne.a),
				re = N.a.a("Link", ne.a);
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
				de = N.a.div("Container", ce.a),
				ue = N.a.wrapped(T.a, "IFrame", ce.a),
				me = N.a.wrapped(ee, "Images", ce.a),
				pe = N.a.wrapped(ae, "Links", ce.a),
				be = N.a.div("MainContent", ce.a),
				he = N.a.div("MainContentColumn", ce.a),
				fe = N.a.button("NotReady", ce.a),
				ge = N.a.span("NotReadyText", ce.a),
				ve = N.a.wrapped(F.a, "NotReadyIcon", ce.a),
				Oe = Object(y.a)(e => {
					const {
						className: t,
						containerRef: n,
						frontpageSignupVariant: s,
						onCloseClick: r,
						onVisibilityChange: a
					} = e, i = Object(D.a)(e).bodyText;
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
							[ce.a.fields]: Object(U.b)(s)
						}),
						path: R.c.Register,
						uiMode: R.d.Embed
					}))), m.a.createElement(fe, {
						onClick: r,
						style: {
							"--frontpagesignup-upsell-text-hover-color": Object(I.j)(.8, i)
						}
					}, m.a.createElement(ge, null, o.fbt._("Not ready to sign up yet?", null, {
						hk: "5RIgO"
					})), m.a.createElement(ve, null)), m.a.createElement(pe, null)))
				});
			class ye extends m.a.Component {
				componentDidUpdate(e) {
					this.props.scrollTo !== e.scrollTo && window.scrollTo({
						top: this.props.scrollTo
					})
				}
				render() {
					return null
				}
			}
			class Ce extends m.a.Component {
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
					}) => m.a.createElement(ye, {
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
					return m.a.createElement(m.a.Fragment, null, m.a.createElement(Oe, {
						className: e,
						containerRef: this.containerRef,
						frontpageSignupVariant: t,
						onCloseClick: this.closeUpsell,
						onVisibilityChange: this.handleUpsellVisibilityChange
					}), m.a.createElement(M.Motion, {
						defaultStyle: {
							scrollTo: 0
						},
						onRest: this.hideUpsell,
						style: {
							scrollTo: Object(M.spring)(s, le)
						}
					}, this.renderScroller))
				}
			}
			var xe = Object(A.c)(Ce),
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
				Ie = n("./src/higherOrderComponents/asModal/index.tsx"),
				Me = n("./src/reddit/controls/Button/index.tsx"),
				Ne = n("./src/reddit/icons/svgs/Close/index.tsx"),
				Te = n("./src/reddit/selectors/activeModalId.ts"),
				Ae = n("./src/reddit/components/DownToChatBanner/DownToChatPendingModal/index.m.less"),
				Re = n.n(Ae);
			const {
				fbt: Le
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Fe = N.a.button("CloseButton", Re.a), De = N.a.wrapped(Ne.a, "Close", Re.a), Ue = N.a.div("Container", Re.a), Be = N.a.p("Description", Re.a), Ge = N.a.div("Footer", Re.a), qe = N.a.h3("Heading", Re.a), He = N.a.img("SnooImage", Re.a), We = N.a.div("Wrapper", Re.a), Ve = Object(g.c)({
				activeModalId: Te.a
			});
			class Je extends m.a.Component {
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
					return m.a.createElement(We, null, m.a.createElement(Ue, null, m.a.createElement(qe, null, Le._("Ok, looking for people now...", null, {
						hk: "2fr3Y9"
					})), m.a.createElement(Be, null, Le._("You’ll be redirected to your chat room shortly.", null, {
						hk: "4tpnrt"
					})), m.a.createElement(He, {
						src: `${B.a.assetPath}/img/magnifying-glass-snoo.png`
					})), m.a.createElement(Ge, null, m.a.createElement(Me.i, {
						onClick: this.onCloseButtonClick
					}, Le._("Sounds good", null, {
						hk: "1OMLn5"
					}))), m.a.createElement(Fe, {
						onClick: this.onCloseButtonClick
					}, m.a.createElement(De, null)))
				}
			}
			var ze = Object(p.b)(Ve, e => ({
					modalToggled: t => e(Object(_e.i)(t))
				}))(Object(Ie.a)(Object(A.c)(Je))),
				Ke = n("./src/reddit/components/MutedUserList/MuteUserModal/index.tsx"),
				Qe = n("./src/lib/loadWithRetries/index.ts");
			var Xe = Object(Se.a)({
				getComponent: () => Object(Qe.a)(() => n.e("NotificationsPrePromptLoader").then(n.bind(null, "./src/reddit/components/NotificationsPrePrompt/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			const Ye = () => null;
			var Ze = Object(Se.a)({
					ErrorComponent: Ye,
					getComponent: () => Object(Qe.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("ModQueue~ModQueuePages~ModerationPages"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"))).then(e => e.default),
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
			var at = Object(Ie.a)(rt(e => m.a.createElement(et.e, null, m.a.createElement(et.i, null, m.a.createElement(st.a, null, m.a.createElement(et.q, null, ot._("Turning off Night Mode", null, {
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
				Ot = n("./src/reddit/selectors/authorFlair.ts"),
				yt = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Ct = n("./src/reddit/selectors/telemetry.ts"),
				xt = n("./src/reddit/selectors/user.ts"),
				Et = n("./src/reddit/selectors/userFlair.ts"),
				Pt = n("./src/reddit/components/UserFlairPicker/index.m.less"),
				jt = n.n(Pt);
			const _t = e => e.flairModalContext && e.currentUser && Object(vt.e)(e.currentUser) === e.flairModalContext.username,
				St = e => e.authorFlair || _t(e) && e.userFlairData.applied || null,
				kt = N.a.wrapped(ft.a, "Section", jt.a),
				wt = N.a.div("CheckboxText", jt.a);
			class It extends m.a.Component {
				constructor(e) {
					super(e), this.getTrackingNoun = (e, t) => this.props.isMod ? e : t, this.track = e => this.props.sendEvent(t => ({
						source: "user_flair_picker",
						action: "click",
						noun: e,
						subreddit: Object(Ct.subredditById)(t, this.props.subredditId)
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
					}, c && m.a.createElement(Me.q, {
						className: jt.a.goBackButton,
						priority: Me.b.Plain,
						onClick: e.openAchiementFlairModal
					}, o.fbt._("Go Back", null, {
						hk: "4fisFS"
					})), m.a.createElement("div", {
						className: jt.a.rightSideButtons
					}, a && m.a.createElement(Me.l, {
						className: jt.a.clearButton,
						onClick: this.onClear
					}, o.fbt._("Clear Flair", null, {
						hk: "23i2at"
					})), m.a.createElement(Me.i, {
						disabled: !u,
						onClick: this.onApply
					}, o.fbt._("Apply", null, {
						hk: "ZvO9n"
					})))))
				}
			}
			const Mt = Object(p.b)(() => Object(g.c)({
				authorFlair: Ot.b,
				currentUser: xt.j,
				flairModalContext: Ot.c,
				isMod: (e, t) => !!Object(yt.l)(e, t),
				userFlairData: Et.c
			}), (e, t) => ({
				activeFlairChanged: (n, s, o, r) => e(Object(lt.f)(n, s, o, r.username, t.subredditId)),
				closeModal: () => e(Object(it.b)({
					username: null,
					subredditId: null
				})),
				openAchiementFlairModal: () => e(Object(ct.e)())
			}))(It);
			var Nt = Object(Ie.a)(Object(A.c)(Mt)),
				Tt = n("./src/reddit/selectors/bannedUser.ts"),
				At = n("./src/reddit/selectors/muted.ts"),
				Rt = n("./src/reddit/selectors/notificationPrefs.ts"),
				Lt = n("./src/reddit/selectors/platform.ts"),
				Ft = n("./src/reddit/selectors/removalReasons.ts"),
				Dt = n("./src/reddit/constants/cookie.ts"),
				Ut = n("./src/reddit/featureFlags/index.ts"),
				Bt = n("./src/reddit/helpers/localStorage/index.ts"),
				Gt = n("./src/reddit/helpers/toggleBodyScroll/index.ts");
			const qt = Object(g.c)({
				activeModalId: Te.a,
				authorContext: Ot.c,
				badgePurchaseModalIsOpen: Object(Te.b)(tt.a.BADGE_PURCHASE),
				banContext: Tt.a,
				banModalIsOpen: Object(Te.b)(tt.a.BAN_USER),
				bladeNightmodeModalIsOpen: Object(Te.b)(tt.a.BLADE_NIGHTMODE),
				currentBadgePurchase: e => e.products.currentlyPurchasing,
				downToChatPendingModalIsOpen: Object(Te.b)(tt.a.DOWN_TO_CHAT_PENDING_MODAL),
				introModalFeatureEnabled: e => Ut.d.introModal(e),
				isOverlayOpen: Lt.h,
				moderatorPermissions: e => {
					const t = Object(Lt.c)(e);
					if (t) return e.moderatingSubreddits[t]
				},
				muteContext: At.a,
				muteModalIsOpen: Object(Te.b)(tt.a.MUTE_USER),
				notificationsPrePromptIsOpen: Rt.d,
				removalReasonContext: Ft.b,
				removalReasonModalIsOpen: Object(Te.b)(tt.a.ADD_REMOVAL_REASON),
				subredditId: Lt.c,
				userFlairModalIsOpen: Object(Te.b)(tt.a.USER_FLAIR_MODAL_ID),
				userHasSeenRedesignModal: xt.w,
				userInRedesignBeta: xt.D,
				userIsLoggedIn: xt.J,
				userIsMod: xt.K,
				userIsNew: xt.N
			});
			class Ht extends m.a.Component {
				constructor(e) {
					super(e), this.state = {
						domReady: !1
					}
				}
				conditionalModalCheck() {
					if (!Object(je.a)()) return; {
						const e = Pe.a.get(Dt.a);
						e && Pe.a.remove(Dt.a, {
							domain: B.a.cookieDomain
						});
						const t = Object(Bt.F)(tt.a.ALPHA_CONSUMER);
						t && Object(Bt.bb)(tt.a.ALPHA_CONSUMER), (e || t) && Object(Bt.Jb)(tt.a.REDESIGN_MODAL, !0)
					}
					const {
						userHasSeenRedesignModal: e,
						markRedesignModalAsClosed: t
					} = this.props, n = Object(Bt.F)(tt.a.REDESIGN_MODAL);
					!e && n ? t() : e && !n && Object(Bt.Jb)(tt.a.REDESIGN_MODAL, !0)
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
						userFlairModalIsOpen: O
					} = this.props, y = (e, t, n) => s => () => b(o => ({
						source: e,
						action: "click",
						noun: s,
						comment: n && Object(Ct.comment)(o, n),
						post: n && Object(Ct.post)(o, n),
						screen: Object(Ct.screen)(o),
						subreddit: Object(Ct.subredditById)(o, t)
					}));
					return m.a.createElement(u.Fragment, null, s && n && m.a.createElement(we.a, {
						contextId: n.contextId,
						subredditId: n.subredditId,
						toggleModal: f,
						trackAddEvent: y("banned", n.subredditId, n.contextId)("add_in_context"),
						trackEventWithName: y("banned", n.subredditId, n.contextId),
						username: n.username
					}), c && i && m.a.createElement(Ke.a, {
						contextId: i.contextId,
						subredditId: i.subredditId,
						toggleModal: g,
						trackAddEvent: y("muted", i.subredditId, i.contextId)("add_in_context"),
						username: i.username
					}), p && d && m.a.createElement(Ze, {
						itemIds: d.itemIds,
						subredditId: d.subredditId,
						toggleModal: v,
						trackClick: y("removal_reasons", d.subredditId, 1 === d.itemIds.length ? d.itemIds[0] : void 0)
					}), o && h && m.a.createElement(at, {
						subredditId: h
					}), O && e && e.subredditId && m.a.createElement(Nt, {
						subredditId: e.subredditId,
						withOverlay: !0
					}), t && r && m.a.createElement(ke, {
						withOverlay: !0,
						productId: r
					}), l && m.a.createElement(Xe, null), a && m.a.createElement(ze, {
						withOverlay: !0
					}))
				}
			}
			var Wt = Object(p.b)(qt, e => ({
					markRedesignModalAsClosed: () => e(Object(_e.j)()),
					toggleBanModal: () => e(Object(_e.i)(tt.a.BAN_USER)),
					toggleBladeNightmodeModal: () => e(Object(_e.i)(tt.a.BLADE_NIGHTMODE)),
					toggleMuteModal: () => e(Object(_e.i)(tt.a.MUTE_USER)),
					toggleRemovalReasonsModal: () => e(Object(_e.i)(tt.a.ADD_REMOVAL_REASON))
				}))(Object(A.c)(Ht)),
				Vt = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				Jt = n("./src/reddit/constants/experiments.ts"),
				zt = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Kt = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				Qt = n("./src/reddit/selectors/responsiveSettings.ts"),
				Xt = n("./src/reddit/components/AccountManagerModal/index.m.less"),
				Yt = n.n(Xt);
			const Zt = N.a.div("Overlay", Yt.a),
				$t = N.a.div("IframeContainer", Yt.a),
				en = {},
				tn = Object(zt.u)(),
				nn = Object(g.c)({
					frontpageSignupVariant: U.a,
					isResponsiveSettingsEnabled: Qt.a
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
						this.props.closeModal(this.props.path), this.props.path === R.c.Register && Object(U.f)(this.props.frontpageSignupVariant) && Kt.a.throttleFeature(Jt.xb), this.props.sendEvent(Object(L.a)(this.subscriptions))
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
					} = this.state, c = Object(U.c)(e) || Object(U.d)(e), l = s === R.c.LinkAppleSSO || s === R.c.LinkGoogleSSO || s === R.c.UnlinkAppleSSO || s === R.c.UnlinkGoogleSSO, d = s === R.c.GoogleOneTap, u = Object(v.a)({
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
			n("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/async.tsx"), n("./src/reddit/components/Econ/ClaimFreeAwardModal/async.tsx"), n("./src/reddit/components/Econ/CoinPackageOfferModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsMarketingModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsPremiumUpsellModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsPurchaseModal/async.tsx"), n("./src/reddit/components/Econ/PowerupsSuccess/async.tsx"), n("./src/reddit/components/Econ/Prediction/CancelPredictionModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/ChangePredictionOutcomeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/EndTimeModal/async.tsx"), n("./src/reddit/components/Econ/Prediction/PremiumModal/async.tsx"), n("./src/reddit/components/Econ/TopAwardersModal/async.tsx");
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
					getComponent: () => Object(Qe.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("FramedGild~GildModal"), n.e("GildModal")]).then(n.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
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
			const On = Object(Se.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("GoldTargetedOfferModal").then(n.bind(null, "./src/reddit/components/Gold/TargetedOfferModal/index.tsx")).then(e => e.default)
				}),
				yn = e => () => {
					e()
				};
			Object(Vt.b)(tt.a.GOLD_TARGETED_OFFER_MODAL, e => m.a.createElement(On, {
				onOverlayClick: yn(e),
				withOverlay: !0
			}));
			const Cn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("HarbergerTaxManageModal")]).then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.HARBERGER_TAX_BANNER_MANAGE, e => m.a.createElement(Cn, {
				ignoreDefaultFocus: !0,
				withOverlay: !0
			}));
			const xn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("HarbergerTaxPurchaseModal").then(n.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.HARBERGER_TAX_BANNER_PURCHASE, e => m.a.createElement(xn, {
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
				getComponent: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("GovernanceReleaseNotesModal")]).then(n.bind(null, "./src/reddit/components/Governance/ReleaseNotesModal/index.tsx")).then(e => e.default)
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
			const In = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditCreateModal").then(n.bind(null, "./src/reddit/components/MultiredditCreateModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.MULTIREDDIT_CREATE, e => m.a.createElement(In, {
				onOverlayClick: e,
				withOverlay: !0
			})), Object(Vt.b)(tt.a.MULTIREDDIT_DUPLICATE, e => m.a.createElement(In, {
				isDuplicateModal: !0,
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Mn = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("MultiredditEditModal").then(n.bind(null, "./src/reddit/components/MultiredditEditModal/index.tsx")).then(e => e.default)
			});
			Object(Vt.b)(tt.a.MULTIREDDIT_EDIT, e => m.a.createElement(Mn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Nn = () => Promise.all([n.e(0), n.e("OnboardingModal")]).then(n.bind(null, "./src/reddit/components/Onboarding/Modal.tsx")),
				Tn = Object(Se.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(Qe.a)(Nn).then(e => e.default)
				});
			Object(Vt.b)(tt.a.ONBOARDING_MODAL_D2X, e => m.a.createElement(Tn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			n("./src/reddit/components/PostFlowUpsellModal/async.tsx"), n("./src/reddit/components/PowerupsSidebar/SupportersListModal/async.tsx"), n("./src/reddit/components/PremiumPurchaseModal/Loader.tsx");
			const An = () => null,
				Rn = Object(Se.a)({
					ErrorComponent: An,
					getComponent: () => Object(Qe.a)(() => n.e("GlobalModalContainer").then(n.bind(null, "./src/reddit/components/ProfilePinnedPosts/PinnedPostsLimitReachedModal/_PinnedPostsLimitReachedModal.tsx"))).then(e => e.default),
					LoadingComponent: An
				});
			Object(Vt.b)(tt.a.PINNED_POSTS_LIMIT_REACHED, e => m.a.createElement(Rn, null));
			var Ln = n("./src/reddit/components/ShortcutIndexModal/index.m.less"),
				Fn = n.n(Ln);
			const Dn = N.a.h2("ColumnLabel", Fn.a),
				Un = N.a.wrapped(ft.a, "ColumnWrapper", Fn.a),
				Bn = N.a.div("Column", Fn.a),
				Gn = N.a.div("Description", Fn.a),
				qn = N.a.div("Key", Fn.a),
				Hn = N.a.wrapped(et.l, "ModalMain", Fn.a),
				Wn = N.a.wrapped(et.e, "ModalBody", Fn.a),
				Vn = N.a.wrapped(Me.i, "PrimaryButton", Fn.a),
				Jn = N.a.wrapped(nt.a, "TextButton", Fn.a),
				zn = Object(p.b)(null, e => ({
					closeModal: () => e(Object(_e.i)(tt.a.KEYBOARD_SHORTCUTS))
				})),
				Kn = N.a.wrapped(Object(Ie.a)(zn(e => m.a.createElement(Wn, {
					onClick: e => e.stopPropagation()
				}, m.a.createElement(et.i, null, m.a.createElement(st.a, null, m.a.createElement(et.q, null, o.fbt._("Keyboard Shortcuts", null, {
					hk: "zoWU1"
				})), m.a.createElement(Jn, {
					onClick: e.closeModal
				}, m.a.createElement(et.b, null)))), m.a.createElement(Hn, null, m.a.createElement(Un, null, m.a.createElement(Bn, null, m.a.createElement(ft.a, null, m.a.createElement(Dn, null, o.fbt._("Navigation", null, {
					hk: "3zSWEe"
				}))), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Show shortcuts", null, {
					hk: "4hXvrI"
				})), m.a.createElement(qn, null, "Shift + ?")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Next post or comment", null, {
					hk: "1m8s9z"
				})), m.a.createElement(qn, null, "J")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Previous post or comment", null, {
					hk: "2wzeoq"
				})), m.a.createElement(qn, null, "K")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Next post in lightbox", null, {
					hk: "1ALR5k"
				})), m.a.createElement(qn, null, "N")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Previous post in lightbox", null, {
					hk: "2bLo98"
				})), m.a.createElement(qn, null, "P")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Open post", null, {
					hk: "2wD7mh"
				})), m.a.createElement(qn, null, "Enter")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Open/close expando", null, {
					hk: "1yDst0"
				})), m.a.createElement(qn, null, "X")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Go to post link", null, {
					hk: "c0TNr"
				})), m.a.createElement(qn, null, "L"))), m.a.createElement(Bn, null, m.a.createElement(ft.a, null, m.a.createElement(Dn, null, o.fbt._("Action", null, {
					hk: "3QI6pT"
				}))), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Upvote", null, {
					hk: "5i9NP"
				})), m.a.createElement(qn, null, "A")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Downvote", null, {
					hk: "1ef3YP"
				})), m.a.createElement(qn, null, "Z")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("New post", null, {
					hk: "4dtNWf"
				})), m.a.createElement(qn, null, "C")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Reply to comment", null, {
					hk: "G8AbT"
				})), m.a.createElement(qn, null, "R")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Submit comment/post", null, {
					hk: "13agk7"
				})), m.a.createElement(qn, null, "Ctrl + Enter")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Save", null, {
					hk: "4yMsMq"
				})), m.a.createElement(qn, null, "S")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Hide", null, {
					hk: "2Dn9GF"
				})), m.a.createElement(qn, null, "H")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Open navigation", null, {
					hk: "QdGe2"
				})), m.a.createElement(qn, null, "Q")), m.a.createElement(ft.a, null, m.a.createElement(Gn, null, o.fbt._("Collapse/expand comment", null, {
					hk: "1FxIUN"
				})), m.a.createElement(qn, null, "Enter"))))), m.a.createElement(et.g, null, m.a.createElement(Vn, {
					"data-redditstyle": !0,
					onClick: () => {
						e.closeModal()
					}
				}, o.fbt._("Close", null, {
					hk: "4gbyAA"
				})))))), "ConnectedModal", Fn.a);
			Object(Vt.b)(tt.a.KEYBOARD_SHORTCUTS, e => m.a.createElement(Kn, {
				onOverlayClick: e,
				withOverlay: !0
			}));
			const Qn = Object(Se.a)({
					getComponent: () => Object(Qe.a)(() => n.e("SnoovatarModal").then(n.bind(null, "./src/reddit/components/SnoovatarModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				Xn = e => () => {
					e()
				};
			Object(Vt.b)(tt.a.SNOOVATAR_MODAL, e => m.a.createElement(Qn, {
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
			const ts = Object(Ie.a)($n(es));
			Object(Vt.b)(tt.a.BLADE_UNSAVED_CHANGES, e => m.a.createElement(ts, {
				withOverlay: !0
			}));
			n("./src/reddit/components/SubredditCreationModal/async.tsx");
			const ns = Object(Se.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(Qe.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("SubredditWelcomeMessageModal")]).then(n.bind(null, "./src/reddit/components/SubredditWelcomeMessageModal/index.tsx"))).then(e => e.default)
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
				gs = n("./src/reddit/components/SEOTitle/index.tsx"),
				vs = n("./src/reddit/components/SubredditIcon/index.tsx"),
				Os = n("./src/reddit/components/UserIcon/index.tsx"),
				ys = n("./src/reddit/components/UserIcon/CurrentUserIcon.tsx"),
				Cs = n("./src/reddit/components/HeaderSubredditSelector/index.m.less"),
				xs = n.n(Cs);
			! function(e) {
				e.Acknowledgements = "Acknowledgements", e.All = "All", e.Appeal = "Appeal", e.Avatar = "Avatar", e.Category = "Category", e.Coins = "Coins", e.Community = "Community", e.CommunitySearch = "CommunitySearch", e.CreateCommunity = "CreateCommunity", e.CreatePost = "CreatePost", e.DailyCharts = "DailyCharts", e.Employee = "Employee", e.GlobalSearch = "GlobalSearch", e.Geotagging = "Geotagging", e.Home = "Home", e.Inbox = "Inbox", e.ModListing = "ModListing", e.ModMail = "ModMail", e.ModQueue = "ModQueue", e.Multi = "Multi", e.NotificationsInbox = "NotificationsInbox", e.Popular = "Popular", e.Powerups = "Powerups", e.Premium = "Premium", e.PublicAccessNetwork = "PublicAccessNetwork", e.Report = "Report", e.Settings = "Settings", e.SubredditCreation = "SubredditCreation", e.Talk = "Talk", e.Topic = "Topic", e.Unknown = "Unknown", e.UserDataRequest = "UserDataRequest", e.UserProfile = "UserProfile", e.UserProfileName = "UserProfileName", e.ViewDraft = "ViewDraft"
			}(cs || (cs = {}));
			const Es = (e, t = !1) => {
				const [n, s] = t && -1 !== e.indexOf("/") ? e.split("/") : [, e];
				return m.a.createElement(m.a.Fragment, null, n && `${n}/`, s && m.a.createElement(gs.b, {
					type: gs.a.HeaderSelector
				}, s))
			};
			var Ps = n("./src/lib/objectSelector/index.ts"),
				js = n("./src/reddit/constants/wiki.ts"),
				_s = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Ss = n("./src/reddit/selectors/subreddit.ts"),
				ks = n("./src/reddit/selectors/topic.ts");
			var ws = Object(Ps.a)((e, {
					pageLayer: t
				}) => {
					const n = !!e.user.account,
						s = Object(zt.X)(t);
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
						case "powerups":
							return {
								type: cs.Powerups
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
							const n = Object(zt.t)(t),
								s = n && Object(ks.d)(e, n);
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
					const r = Object(zt.R)(e, {
						pageLayer: t
					});
					if ("all" === r) return {
						type: cs.All
					};
					if ("popular" === r) return {
						type: cs.Popular
					};
					const a = Object(zt.r)(e, {
						pageLayer: t
					});
					if (a) return "searchResults" === s ? {
						type: cs.CommunitySearch,
						model: a
					} : {
						type: cs.Community,
						model: a
					};
					const i = Object(zt.e)(e, {
						pageLayer: t
					});
					if (i) return {
						type: cs.Multi,
						model: i
					};
					const c = Object(zt.k)(e, {
						pageLayer: t
					});
					if (c) return {
						type: cs.UserProfile,
						model: c
					};
					const l = Object(zt.i)(t);
					if (l) return {
						type: cs.UserProfileName,
						name: `u/${l}`
					};
					if (s && "searchResults" === s) return {
						type: cs.GlobalSearch
					};
					if ("subredditWiki" === s) {
						const n = Object(zt.o)(e, {
								pageLayer: t
							}) || js.e,
							s = Object(Ss.z)(e, {
								subredditName: n
							});
						if (s) return {
							type: cs.Community,
							model: s
						}
					}
					return "rpan" === s && Object(_s.a)(e) ? {
						type: cs.PublicAccessNetwork
					} : {
						type: cs.Unknown
					}
				}),
				Is = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/components/HeaderSubredditSelector/GenericListItem/index.m.less")),
				Ms = n.n(Is);

			function Ns() {
				return (Ns = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function Ts(e) {
				const t = e.icon,
					n = e.text,
					s = {
						id: e.id,
						role: "menuitem",
						children: m.a.createElement(m.a.Fragment, null, m.a.createElement(t, {
							className: Ms.a.icon,
							isFilled: e.isCurrentPage
						}), m.a.createElement(n, {
							className: Ms.a.text
						})),
						className: Object(v.a)(Ms.a.item, e.className, {
							[Ms.a.mFocused]: !!e.isFocused,
							[Ms.a.buttonContainer]: !e.to
						}),
						tabIndex: -1,
						onFocus: e.onFocus,
						onMouseEnter: e.onMouseEnter,
						onMouseLeave: e.onMouseLeave,
						onClick: e.onClick
					};
				return s["aria-label"] = e.to || e.label, e.to ? e.externalLink ? m.a.createElement("a", Ns({}, s, {
					href: e.to,
					target: "_blank"
				})) : m.a.createElement(ds.a, Ns({}, s, {
					to: e.to
				})) : m.a.createElement("button", s)
			}
			var As = n("./src/reddit/constants/listings.ts"),
				Rs = n("./src/reddit/helpers/overlay/index.ts"),
				Ls = n("./src/reddit/routes/modListing/index.ts"),
				Fs = n("./src/reddit/routes/powerups/index.ts"),
				Ds = n("./src/reddit/routes/talk/index.ts"),
				Us = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				Bs = n("./src/reddit/selectors/multireddit.ts"),
				Gs = n("./src/lib/LinkedListMap/index.ts"),
				qs = n("./src/reddit/routes/avatar/index.ts");

			function Hs() {
				return (Hs = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ws = Object(g.c)({
				account: e => e.user.account,
				favoriteMultireddits: e => e.subscriptions.favoriteMultiOrder.map(t => Object(Bs.e)(e, t)).filter(Boolean),
				favoriteProfiles: e => e.subscriptions.favoriteProfileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				favoriteSubreddits: e => e.subscriptions.favoriteSubredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubreddits: e => (e.subreddits.moderated.order || []).map(t => e.subreddits.models[t]).filter(Boolean),
				moderatingSubredditsPending: e => e.subreddits.moderated.api.pending || !e.subreddits.moderated.api.fetched,
				multis: e => e.subscriptions.multiredditOrder.map(t => Object(Bs.e)(e, t)).filter(Boolean),
				multisPending: e => e.multireddits.api.forUser.pending || !e.multireddits.api.forUser.fetched,
				profiles: e => e.subscriptions.profileOrder.map(t => e.profiles.models[t]).filter(Boolean),
				subscriptions: e => e.subscriptions.subredditOrder.map(t => e.subreddits.models[t]).filter(Boolean),
				subscriptionsPending: e => e.subscriptions.api.pending || !e.subscriptions.api.fetched
			});
			var Vs;
			! function(e) {
				e[e.Header = 0] = "Header", e[e.Subreddit = 1] = "Subreddit", e[e.SubredditAutocomplete = 2] = "SubredditAutocomplete", e[e.Profile = 3] = "Profile", e[e.Multi = 4] = "Multi", e[e.GenericClickable = 5] = "GenericClickable", e[e.GenericLink = 6] = "GenericLink", e[e.LoadingState = 7] = "LoadingState", e[e.Category = 8] = "Category", e[e.Action = 9] = "Action"
			}(Vs || (Vs = {}));
			const Js = [e => ({
					id: cs.Employee,
					type: Vs.GenericLink,
					model: {
						url: "/user/reddit/m/employee_subbies/new",
						displayText: "Employee Communities",
						icon: e => m.a.createElement(ps.a, Hs({
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
				zs = () => [e => ({
					id: cs.All,
					type: Vs.GenericLink,
					model: {
						url: "/r/all/",
						displayText: o.fbt._("All", null, {
							hk: "2M8nEy"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Hs({
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
				Ks = () => [e => ({
					id: "reddit-feeds",
					type: Vs.Header,
					model: {
						displayText: o.fbt._("Feeds", null, {
							hk: "4zvMfr"
						}).toString()
					}
				}), (e, t) => ({
					id: cs.Home,
					type: Vs.GenericLink,
					model: {
						url: "/",
						displayText: o.fbt._("Home", null, {
							hk: "2u56yo"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Hs({
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
					type: Vs.GenericLink,
					model: {
						url: "/r/popular/",
						displayText: o.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Hs({
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
				}), ...zs()],
				Qs = [e => ({
					id: "reddit-feeds",
					type: Vs.Header,
					model: {
						displayText: o.fbt._("Reddit Feeds", null, {
							hk: "3C1mtF"
						}).toString()
					}
				}), () => ({
					id: cs.Home,
					type: Vs.GenericLink,
					model: {
						url: "/",
						displayText: o.fbt._("Popular", null, {
							hk: "1op8tD"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Hs({
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
				}), ...zs()],
				Xs = [e => ({
					id: "reddit-other",
					type: Vs.Header,
					model: {
						displayText: o.fbt._("Other", null, {
							hk: "1etY05"
						}).toString()
					}
				}), e => ({
					id: cs.Settings,
					type: Vs.GenericLink,
					model: {
						url: "/settings",
						displayText: o.fbt._("User Settings", null, {
							hk: "36WFGd"
						}).toString(),
						icon: ({
							className: e
						}) => m.a.createElement(ys.a, {
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
					type: Vs.GenericLink,
					model: {
						url: "/message/inbox/",
						displayText: o.fbt._("Messages", null, {
							hk: "43DUrY"
						}).toString(),
						icon: ({
							className: e
						}) => m.a.createElement(ys.a, {
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
					type: Vs.GenericLink,
					model: {
						url: "/submit",
						displayText: o.fbt._("Create Post", null, {
							hk: "dGck6"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Hs({
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
				Ys = [e => ({
					id: cs.Coins,
					type: Vs.GenericLink,
					model: {
						url: "/coins",
						displayText: o.fbt._("Coins", null, {
							hk: "ZFvDU"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Hs({
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
					type: Vs.GenericLink,
					model: {
						url: "/premium",
						displayText: o.fbt._("Premium", null, {
							hk: "3i2C4T"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Hs({
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
					type: Vs.GenericLink,
					model: {
						url: qs.a,
						displayText: o.fbt._("Avatar", null, {
							hk: "12GoEB"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Hs({
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
					type: Vs.GenericLink,
					model: {
						url: Fs.a,
						displayText: o.fbt._("Powerups", null, {
							hk: "w9Ere"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Hs({
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
					id: cs.Talk,
					type: Vs.GenericLink,
					model: {
						url: Ds.a,
						displayText: o.fbt._("Talk", null, {
							hk: "lHWAD"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Hs({
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
				})],
				Zs = [e => ({
					id: cs.ModQueue,
					type: Vs.GenericLink,
					model: {
						url: "/r/mod/about/modqueue",
						displayText: o.fbt._("Mod Queue", null, {
							hk: "12pTAg"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Hs({
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
						type: Vs.GenericLink,
						model: {
							url: "https://mod.reddit.com/mail/all",
							displayText: o.fbt._("Modmail", null, {
								hk: "1BtYh4"
							}).toString(),
							icon: e => m.a.createElement(ps.a, Hs({
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

			function $s(e, t, n, s) {
				t.subscriptions.length && (e.push({
					id: "header-subscriptions",
					type: Vs.Header,
					model: {
						displayText: o.fbt._("my communities", null, {
							hk: "2cRte1"
						}).toString()
					}
				}), n && eo(e, s), t.subscriptions.forEach(t => e.push({
					id: "sub" + t.id,
					type: Vs.Subreddit,
					model: t,
					telemetryNoun: "community"
				}))), t.profiles.length && (e.push({
					id: "header-profiles",
					type: Vs.Header,
					model: {
						displayText: o.fbt._("following", null, {
							hk: "1kjEfv"
						}).toString()
					}
				}), t.profiles.forEach(t => e.push({
					id: "pro" + t.id,
					type: Vs.Profile,
					model: t,
					telemetryNoun: "profile"
				})))
			}
			const eo = (e, t) => {
				const n = {
						id: cs.CreateCommunity,
						telemetryNoun: "create_community"
					},
					s = {
						displayText: o.fbt._("Create Community", null, {
							hk: "41sjx"
						}).toString(),
						icon: e => m.a.createElement(ps.a, Hs({
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
					type: Vs.GenericClickable,
					model: {
						...s,
						onClick: () => {
							t(Object(_e.h)(tt.a.SUBREDDIT_CREATION_MODAL_ID))
						}
					}
				})
			};
			var to = n("./src/reddit/components/HeaderSubredditSelector/ListHeader/index.m.less"),
				no = n.n(to);

			function so(e) {
				return m.a.createElement("div", {
					className: Object(v.a)(no.a.header, e.className),
					role: "heading"
				}, e.children)
			}
			var oo = n("./src/reddit/actions/subscription/index.ts"),
				ro = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				ao = n("./src/reddit/components/HeaderSubredditSelector/ListItem/index.m.less"),
				io = n.n(ao);

			function co() {
				return (co = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const lo = Object(g.c)({
					currentUser: xt.j,
					hideNSFWPref: xt.B,
					isLoggedIn: xt.J
				}),
				uo = Object(p.b)(lo, (e, t) => ({
					toggleFavorite: n => {
						switch (n.stopPropagation(), n.preventDefault(), t.type) {
							case Vs.Subreddit:
								e(Object(oo.c)({
									id: t.model.id,
									type: "subreddit"
								}));
								break;
							case Vs.Profile:
								e(Object(oo.c)({
									id: t.model.id,
									type: "profile"
								}));
								break;
							case Vs.Multi:
								e(Object(oo.a)(t.model.url)), t.model.isFavorited ? t.sendEvent(Object(ro.f)(t.model.url)) : t.sendEvent(Object(ro.c)(t.model.url))
						}
					}
				}));
			var mo = Object(A.c)(uo((function(e) {
					const t = {
						className: Object(v.a)(io.a.item, e.className, {
							[io.a.mFocused]: !!e.isFocused
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
						case Vs.Subreddit:
							return m.a.createElement(ds.a, co({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(vs.b, {
								className: io.a.icon,
								shouldHideNsfwIcon: e.hideNSFWPref,
								subredditOrProfile: e.model
							}), m.a.createElement("span", {
								className: io.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(ps.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(v.a)(io.a.favorite, {
									[io.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Vs.SubredditAutocomplete:
							return m.a.createElement(ds.a, co({}, t, {
								"aria-label": e.model.name,
								to: `/r/${e.model.name}/`
							}), m.a.createElement(vs.b, {
								className: io.a.icon,
								primaryColor: e.model.primaryColor,
								iconUrl: e.model.communityIcon || e.model.icon
							}), m.a.createElement("span", {
								className: io.a.text
							}, e.model.name));
						case Vs.Multi:
							return m.a.createElement(ds.a, co({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement("img", {
								src: e.model.icon,
								className: io.a.customFeedIcon
							}), m.a.createElement("span", {
								className: io.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(ps.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(v.a)(io.a.favorite, {
									[io.a.mFavorite]: !!e.isFavorite
								})
							})));
						case Vs.Profile:
							return m.a.createElement(ds.a, co({}, t, {
								"aria-label": e.model.displayText,
								to: e.model.url
							}), m.a.createElement(Os.a, {
								className: io.a.icon,
								iconUrl: e.model.icon.url,
								isNSFW: e.model.isNSFW,
								userName: e.model.name
							}), m.a.createElement("span", {
								className: io.a.text
							}, e.model.displayText), e.isLoggedIn && m.a.createElement("div", {
								onClick: e.toggleFavorite
							}, m.a.createElement(ps.a, {
								name: "star",
								isFilled: !!e.isFavorite,
								className: Object(v.a)(io.a.favorite, {
									[io.a.mFavorite]: !!e.isFavorite
								})
							})))
					}
				}))),
				po = n("./src/reddit/components/HeaderSubredditSelector/LoadingListSection/index.m.less"),
				bo = n.n(po);

			function ho(e) {
				return m.a.createElement("div", {
					className: e.className
				}, m.a.createElement("div", {
					className: bo.a.header
				}), m.a.createElement("div", {
					className: bo.a.item
				}), m.a.createElement("div", {
					className: bo.a.item
				}), m.a.createElement("div", {
					className: bo.a.item
				}), m.a.createElement("div", {
					className: bo.a.item
				}))
			}
			var fo = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				go = n("./src/reddit/actions/subreddit.ts"),
				vo = n("./src/reddit/constants/keycodes.ts"),
				Oo = n("./src/reddit/helpers/correlationIdTracker.ts"),
				yo = n("./src/lib/loadableAction/index.ts"),
				Co = n("./src/reddit/components/HeaderSubredditSelector/SubredditList/index.m.less"),
				xo = n.n(Co);

			function Eo() {
				return (Eo = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function Po(e) {
				return e.id === cs.ModMail || e.id === cs.CreateCommunity
			}

			function jo(e) {
				const t = new Gs.a("id");
				return e.forEach(e => {
					(function(e) {
						return e.type !== Vs.Header && e.type !== Vs.LoadingState
					})(e) && t.push({
						id: e.id
					})
				}), t
			}
			const _o = Object(g.c)({
					favoriteMultireddits: e => new Set(e.subscriptions.favoriteMultiOrder),
					favoriteProfiles: e => new Set(e.subscriptions.favoriteProfileOrder),
					favoriteSubreddits: e => new Set(e.subscriptions.favoriteSubredditOrder),
					unfilteredListBuilder: e => t => {
						const n = Ws(e),
							s = new Gs.a("id"),
							r = Object(xt.hb)(e);
						if (n.account) {
							const a = n.account;
							(n.favoriteSubreddits.length || n.favoriteProfiles.length || n.favoriteMultireddits.length) && (s.push({
								id: "header-favorites",
								type: Vs.Header,
								model: {
									displayText: o.fbt._("favorites", null, {
										hk: "4Gg0k2"
									}).toString()
								}
							}), n.favoriteSubreddits.forEach(e => s.push({
								id: "fav" + e.id,
								type: Vs.Subreddit,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteProfiles.forEach(e => s.push({
								id: "fav" + e.id,
								type: Vs.Profile,
								model: e,
								telemetryNoun: "community_favorite"
							})), n.favoriteMultireddits.forEach(e => s.push({
								id: "fav" + e.url,
								type: Vs.Multi,
								model: e,
								telemetryNoun: "custom_feed"
							}))), n.multisPending && s.push({
								id: "multis-pending",
								type: Vs.LoadingState,
								model: {
									displayText: ""
								}
							}), n.moderatingSubredditsPending ? s.push({
								id: "moderatingSubreddits-pending",
								type: Vs.LoadingState,
								model: {
									displayText: ""
								}
							}) : n.moderatingSubreddits.length && (s.push({
								id: "header-moderating",
								type: Vs.Header,
								model: {
									displayText: o.fbt._("moderating", null, {
										hk: "2du7dx"
									}).toString()
								}
							}), a.isMod && Zs.forEach(e => s.push(e(a))), s.push({
								id: cs.ModListing,
								type: Vs.GenericLink,
								model: {
									url: Ls.a,
									displayText: "r/Mod",
									icon: e => m.a.createElement(ps.a, Hs({
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
								type: Vs.Subreddit,
								model: e,
								telemetryNoun: "community_moderate"
							}))), n.multis.length > 0 && ((e, t, n) => {
								e.push({
									id: "header-multis",
									type: Vs.Header,
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
											className: Object(v.a)(e, xs.a.multiPlusButton)
										}, m.a.createElement(ps.a, {
											name: "add"
										})),
										buttonTelemetryNoun: "create_new_custom_feed"
									}
								}), t.multis.forEach(t => e.push({
									id: t.url,
									type: Vs.Multi,
									model: t,
									telemetryNoun: "custom_feed"
								}))
							})(s, n, t), n.subscriptionsPending ? s.push({
								id: "subscriptions-pending",
								type: Vs.LoadingState,
								model: {
									displayText: ""
								}
							}) : $s(s, n, r, t), ((e, t, n, s) => (Ks().forEach(e => t.push(e(n))), n.isEmployee && Js.forEach(e => t.push(e(n))), Object(_s.a)(e) && t.push({
								id: cs.PublicAccessNetwork,
								type: Vs.GenericClickable,
								model: {
									onClick: () => {
										s(Object(Rs.a)(As.c[As.b.Rpan]))
									},
									displayText: o.fbt._("Reddit live", null, {
										hk: "3zuymj"
									}).toString(),
									icon: e => m.a.createElement(ps.a, Hs({
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
							}), t))(e, s, a, t), Xs.forEach(e => s.push(e(a))), s.push((() => ({
								id: cs.DailyCharts,
								type: Vs.GenericLink,
								model: {
									url: "/subreddits/leaderboard/",
									displayText: o.fbt._("Top Communities", null, {
										hk: "1KzP9v"
									}).toString(),
									icon: e => m.a.createElement(ps.a, Hs({
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
							}))()), Object(Us.g)(e) && (e => e.push({
								id: cs.NotificationsInbox,
								type: Vs.GenericLink,
								model: {
									url: "/notifications",
									displayText: o.fbt._("Notifications", null, {
										hk: "2xenVO"
									}).toString(),
									icon: e => m.a.createElement(ps.a, Hs({
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
							}))(s), Ys.forEach(e => s.push(e(a)))
						} else n.subscriptions.length || Object(xt.J)(e) ? Ks().forEach(e => s.push(e(null))) : Qs.forEach(e => s.push(e(null))), s.push({
							id: "reddit-other",
							type: Vs.Header,
							model: {
								displayText: o.fbt._("Other", null, {
									hk: "1etY05"
								}).toString()
							}
						}), Ys.forEach(e => s.push(e(null))), $s(s, n, r, t);
						return s
					}
				}),
				So = e => ({
					onHomeClicked: () => e(Object(yo.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Frontpage~ModListing"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))()),
					onGotoUrl: t => e(Object(h.b)(t)),
					onSubredditsRequested: () => {
						e(Object(oo.e)()), e(Object(go.q)()), e(Object(yo.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))())
					},
					onActionDispatched: t => e(t)
				}),
				ko = (e, t, n) => ({
					...e,
					...t,
					...n,
					unfilteredList: e.unfilteredListBuilder(t.onActionDispatched)
				});
			class wo extends m.a.Component {
				constructor(e) {
					super(e), this.onChange = e => {
						const t = e.currentTarget.value,
							n = this.getList(t, this.props),
							s = jo(n),
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
						if (e.key === vo.b.Escape && this.props.onClose && this.props.onClose(!0), e.key === vo.b.Tab && this.props.onClose && this.props.onClose(), e.key === vo.b.Enter) {
							const e = this.state.focusOrder.first(),
								t = this.state.focusedItemId || (e ? e.id : null);
							if (t) {
								const e = this.state.renderableList.get(t);
								e && e.type !== Vs.Header && e.type !== Vs.LoadingState && (this.fireTelemetryForListItem(e), e.type === Vs.GenericClickable ? e.model.onClick() : Po(e) ? window.open(e.model.url, "_blank") : this.props.onGotoUrl(e.model.url), this.props.onClose && this.props.onClose(!0))
							}
						}
						e.key === vo.b.ArrowDown && (e.preventDefault(), this.setState(e => {
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
						})), e.key === vo.b.ArrowUp && (e.preventDefault(), this.setState(e => {
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
								Object(Oo.d)(Oo.a.GoldPayment, !0), t = Object(Oo.c)(Oo.a.GoldPayment)
						}
						switch (e.type) {
							case Vs.Category:
							case Vs.GenericLink:
							case Vs.GenericClickable:
							case Vs.Multi:
							case Vs.Profile:
							case Vs.Subreddit:
								this.props.sendEvent(n => ({
									...Object(Ct.defaults)(n),
									...t ? {
										correlationId: t
									} : null,
									customFeed: e.type === Vs.Multi ? Object(Ct.customFeedByPath)(n, e.model.url) : null,
									source: "community_nav",
									action: "click",
									noun: e.telemetryNoun
								}));
								break;
							case Vs.Header: {
								const {
									buttonTelemetryNoun: t
								} = e.model;
								t && this.props.sendEvent(e => ({
									...Object(Ct.defaults)(e),
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
						focusOrder: jo(e.unfilteredList),
						renderableList: e.unfilteredList
					}, this.inputRef = m.a.createRef()
				}
				componentDidMount() {
					"complete" === document.readyState ? this.props.onSubredditsRequested() : window.addEventListener("load", this.props.onSubredditsRequested), this.props.canAutofocus && setTimeout(() => !!this.inputRef.current && this.inputRef.current.focus())
				}
				UNSAFE_componentWillReceiveProps(e) {
					const t = this.state.currentInputText,
						n = this.getList(t, e),
						s = jo(n);
					this.setState({
						focusOrder: s,
						renderableList: n
					})
				}
				getList(e, t) {
					if (e) {
						const n = new Gs.a("id"),
							s = new RegExp(e, "ig");
						t.unfilteredList.forEach(e => {
							switch (e.type) {
								case Vs.Category:
								case Vs.GenericLink:
								case Vs.Multi:
								case Vs.Profile:
								case Vs.Subreddit:
									e.model.displayText.match(s) && n.push(e);
									break;
								case Vs.Header: {
									const t = n.last();
									t && t.type === Vs.Header && n.pop(), n.push(e);
									break
								}
								case Vs.LoadingState:
							}
						});
						const o = n.last();
						return o && o.type === Vs.Header && n.pop(), n
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
						className: xo.a.filter,
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
								this.fireTelemetryForListItem(e), this.props.onClose && this.props.onClose(!0), e.id === cs.Home && this.props.onHomeClicked(), e.type === Vs.GenericClickable && e.model.onClick()
							},
							isCurrentPage: this.props.currentPage.type === e.id
						};
						switch (e.type) {
							case Vs.GenericClickable:
								return m.a.createElement(Ts, Eo({}, n, {
									className: xo.a.item,
									label: e.model.displayText,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Vs.Category:
							case Vs.GenericLink:
								return m.a.createElement(Ts, Eo({}, n, {
									externalLink: Po(e),
									className: xo.a.item,
									to: e.model.url,
									icon: e.model.icon,
									text: e.model.text
								}));
							case Vs.Header: {
								const n = e.model.button;
								return m.a.createElement(so, {
									className: xo.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								}, e.model.displayText, n && m.a.createElement(n, {
									className: xo.a.headerButton,
									sendClickEvent: () => this.fireTelemetryForListItem(e)
								}))
							}
							case Vs.LoadingState:
								return m.a.createElement(ho, {
									className: xo.a.listHeader,
									key: `subreddit-list-key-nomodel${t}`
								});
							case Vs.Multi:
								return m.a.createElement(mo, Eo({}, n, {
									className: xo.a.item,
									isFavorite: e.model.isFavorited,
									model: e.model,
									type: Vs.Multi
								}));
							case Vs.Profile:
								return m.a.createElement(mo, Eo({}, n, {
									className: xo.a.item,
									isFavorite: this.props.favoriteProfiles.has(e.model.id),
									model: e.model,
									type: Vs.Profile
								}));
							case Vs.Subreddit:
								return m.a.createElement(mo, Eo({}, n, {
									className: xo.a.item,
									isFavorite: this.props.favoriteSubreddits.has(e.model.id),
									model: e.model,
									type: Vs.Subreddit
								}))
						}
					}))
				}
			}
			const Io = Object(p.b)(_o, So, ko)(Object(A.c)(wo)),
				Mo = Object(p.b)(_o, So, ko)(Object(A.c)(Object(fo.b)(wo))),
				No = Object(zt.u)({
					isCommentsPage: zt.x,
					pageLayer: e => e
				}),
				To = Object(g.c)({
					currentPage: ws,
					hideNSFWPref: xt.B,
					isDropdownOpen: bs.a,
					isLoggedIn: xt.J,
					isOverlayOpen: Lt.h,
					isPinnedSubscriptionsMenuDisabled: hs.a,
					isSubscriptionsPinned: hs.b
				});
			class Ao extends m.a.Component {
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
							...Object(Ct.defaults)(e),
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
							className: Object(v.a)(xs.a.container, n, {
								[xs.a.mOpen]: c,
								[xs.a.mNotPinned]: !this.props.isSubscriptionsPinned,
								[xs.a.mPinned]: this.props.isSubscriptionsPinned,
								[xs.a.containerExp]: e
							}),
							onClickCapture: this.stopPropagation,
							role: "navigation"
						}, m.a.createElement("button", {
							className: xs.a.selector,
							onMouseDown: this.props.isSubscriptionsPinned ? this.props.onLocationClick : this.toggleDropdown,
							onFocus: this.onButtonFocus,
							tabIndex: this.state.preventFocus || this.props.isSubscriptionsPinned ? -1 : 0
						}, m.a.createElement("span", {
							className: xs.a.containerText
						}, " ", function(e) {
							switch (e.type) {
								case cs.Acknowledgements:
									return Es(o.fbt._("Acknowledgements", null, {
										hk: "32JBVF"
									}).toString());
								case cs.All:
									return Es(o.fbt._("All", null, {
										hk: "2gaHOy"
									}).toString());
								case cs.Appeal:
									return Es(o.fbt._("Appeal", null, {
										hk: "2dMFkN"
									}).toString());
								case cs.Avatar:
									return Es(o.fbt._("Avatar", null, {
										hk: "4E0V0C"
									}).toString());
								case cs.Coins:
									return Es(o.fbt._("Coins", null, {
										hk: "3ZpUbG"
									}).toString());
								case cs.Community:
									return Es(e.model.displayText, !0);
								case cs.CommunitySearch:
									return Es(o.fbt._("Subreddit Results", null, {
										hk: "19qRVH"
									}).toString());
								case cs.CreateCommunity:
									return Es(o.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case cs.CreatePost:
									return Es(o.fbt._("Create Post", null, {
										hk: "30V40V"
									}).toString());
								case cs.DailyCharts:
									return Es(o.fbt._("Top Communities", null, {
										hk: "1sWIEu"
									}).toString());
								case cs.GlobalSearch:
									return Es(o.fbt._("Search Results", null, {
										hk: "scJwR"
									}).toString());
								case cs.Geotagging:
									return Es(o.fbt._("Help Out", null, {
										hk: "1RN9v2"
									}).toString());
								case cs.Home:
									return Es(o.fbt._("Home", null, {
										hk: "amHQd"
									}).toString());
								case cs.Inbox:
									return Es(o.fbt._("Messages", null, {
										hk: "25MBSp"
									}).toString());
								case cs.ModListing:
									return Es("r/Mod");
								case cs.ModMail:
									return Es(o.fbt._("Modmail", null, {
										hk: "of9AC"
									}).toString());
								case cs.ModQueue:
									return Es(o.fbt._("Mod Queue", null, {
										hk: "3hdHhb"
									}).toString());
								case cs.Multi:
									return Es(e.model.displayText, !0);
								case cs.NotificationsInbox:
									return Es(o.fbt._("Notifications", null, {
										hk: "FiFRe"
									}).toString());
								case cs.Popular:
									return Es(o.fbt._("Popular", null, {
										hk: "1rTNHl"
									}).toString());
								case cs.Powerups:
									return Es(o.fbt._("Powerups", null, {
										hk: "1ZXjgq"
									}).toString());
								case cs.Premium:
									return Es(o.fbt._("Premium", null, {
										hk: "x0xKv"
									}).toString());
								case cs.PublicAccessNetwork:
									return Es(o.fbt._("Reddit Live", null, {
										hk: "4tlHX5"
									}).toString());
								case cs.Report:
									return Es(o.fbt._("Report", null, {
										hk: "4oVcnd"
									}).toString());
								case cs.Settings:
									return Es(o.fbt._("User Settings", null, {
										hk: "hcLHW"
									}).toString());
								case cs.SubredditCreation:
									return Es(o.fbt._("Create Community", null, {
										hk: "2UKjpW"
									}).toString());
								case cs.Talk:
									return Es(o.fbt._("Talk", null, {
										hk: "gVQjb"
									}).toString());
								case cs.Topic:
									return Es(e.model);
								case cs.Unknown:
									return Es("");
								case cs.UserDataRequest:
									return Es(o.fbt._("Request your Reddit data", null, {
										hk: "3LqHku"
									}).toString());
								case cs.UserProfile:
									return Es(e.model.displayText, !0);
								case cs.UserProfileName:
									return Es(e.name, !0);
								case cs.ViewDraft:
									return Es(o.fbt._("View Draft", null, {
										hk: "3k2k9a"
									}).toString())
							}
						}(t), " "), function(e, t) {
							const n = e => m.a.createElement(ps.a, {
								name: e,
								isFilled: !0,
								className: xs.a.defaultIcon
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
									return m.a.createElement(vs.b, {
										className: xs.a.subredditIcon,
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
									return m.a.createElement(ys.a, {
										wrapperClassName: xs.a.userIcon
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
										className: xs.a.customFeedIcon
									});
								case cs.NotificationsInbox:
									return n("notification");
								case cs.Popular:
									return n("popular");
								case cs.Powerups:
									return n("powerup");
								case cs.Premium:
									return n("premium");
								case cs.PublicAccessNetwork:
									return n("video_live");
								case cs.Report:
									return n("report");
								case cs.Settings:
									return m.a.createElement(ys.a, {
										wrapperClassName: xs.a.userIcon
									});
								case cs.SubredditCreation:
									return n("add");
								case cs.Talk:
									return n("live");
								case cs.Topic:
									return n("custom_feed");
								case cs.Unknown:
									return m.a.createElement("div", {
										className: xs.a.unknownIcon
									});
								case cs.UserDataRequest:
									return n("add");
								case cs.UserProfile: {
									const n = Object(fs.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(Os.a, {
										className: xs.a.userIcon,
										iconUrl: n.url,
										isNSFW: e.model.isNSFW,
										omitResponsivePresenceWrapper: !0,
										userName: e.model.name
									})
								}
								case cs.UserProfileName:
									return m.a.createElement("div", {
										className: xs.a.defaultIcon
									});
								case cs.Unknown:
									return m.a.createElement("div", {
										className: xs.a.unknownIcon
									});
								case cs.UserProfile: {
									const n = Object(fs.a)({
										shouldHideNsfwIcon: t,
										subredditOrProfile: e.model
									});
									return m.a.createElement(Os.a, {
										className: xs.a.userIcon,
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
							className: xs.a.caretDown
						})), c && !this.props.isPinnedSubscriptionsMenuDisabled && m.a.createElement(ps.a, {
							name: "side_menu",
							className: xs.a.pin,
							onClick: l ? void 0 : this.props.onPinSubscriptions
						}), c && m.a.createElement(Mo, {
							canAutofocus: !0,
							className: xs.a.listContainer,
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
			var Ro = No(Object(p.b)(To, (e, t) => ({
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
				}))(Object(A.c)(Ao))),
				Lo = n("./src/reddit/components/JumpToContent/index.tsx"),
				Fo = n("./src/reddit/controls/InvisibleScreenReaderText/index.tsx"),
				Do = n("./node_modules/history/esm/history.js"),
				Uo = n("./node_modules/lodash/debounce.js"),
				Bo = n.n(Uo),
				Go = n("./node_modules/lodash/isEmpty.js"),
				qo = n.n(Go),
				Ho = n("./node_modules/uuid/v4.js"),
				Wo = n.n(Ho),
				Vo = n("./src/lib/makeSearchKey/index.ts"),
				Jo = n("./src/reddit/actions/post.ts"),
				zo = n("./src/reddit/actions/search.ts"),
				Ko = n("./src/reddit/actions/search/trending.ts"),
				Qo = n("./src/reddit/components/SearchDropdown/index.tsx"),
				Xo = n("./src/reddit/components/SearchNSFWToggle/hooks.ts"),
				Yo = n("./src/reddit/constants/history.ts"),
				Zo = n("./src/reddit/helpers/getSearchUrl/index.ts"),
				$o = n("./src/reddit/helpers/isArrayEqual.ts"),
				er = n("./src/reddit/helpers/trackers/searchResults.ts"),
				tr = n("./src/reddit/models/Search/index.ts"),
				nr = n("./src/reddit/selectors/experiments/serpRedesignLayout.ts"),
				sr = n("./src/reddit/selectors/experiments/trending.ts"),
				or = n("./src/reddit/helpers/chooseVariant/index.ts");
			const rr = e => Object(xt.G)(e) || Jt.ae.Treatment1 === Object(or.c)(e, {
				experimentEligibilitySelector: or.a,
				experimentName: Jt.Wd
			});
			var ar, ir = n("./src/reddit/selectors/experiments/uiSimplification.ts"),
				cr = n("./src/reddit/selectors/searchResults.ts"),
				lr = n("./src/reddit/selectors/trending.ts"),
				dr = n("./src/reddit/hooks/usePageLayer.ts"),
				ur = n("./src/reddit/hooks/usePrevious.ts"),
				mr = n("./src/reddit/controls/Search/index.m.less"),
				pr = n.n(mr),
				br = n("./src/reddit/components/Pill/index.tsx"),
				hr = n("./src/reddit/components/Pill/PillText/index.m.less"),
				fr = n.n(hr);
			! function(e) {
				e.DAY = "DAY", e.NIGHT = "NIGHT"
			}(ar || (ar = {}));
			const gr = {
					[ar.DAY]: fr.a.pillTextVariantDay,
					[ar.NIGHT]: fr.a.pillTextVariantNight
				},
				vr = e => m.a.createElement("div", {
					className: Object(v.a)(fr.a.pillText, gr[e.variant])
				}, e.children);
			var Or = n("./src/reddit/controls/Search/CommunityPill/index.m.less"),
				yr = n.n(Or);
			const Cr = Object(g.c)({
					nightmode: xt.W
				}),
				xr = Object(p.b)(Cr)(({
					nightmode: e,
					subreddit: t
				}) => m.a.createElement(br.a, {
					"aria-hidden": !0,
					className: yr.a.communityPill,
					"data-testid": "community-search-pill"
				}, m.a.createElement(vr, {
					variant: e ? ar.NIGHT : ar.DAY
				}, m.a.createElement(vs.b, {
					className: pr.a.subredditIcon,
					subredditOrProfile: t
				}), t.displayText)));
			var Er = n("./src/reddit/controls/Search/SearchBar/index.m.less"),
				Pr = n.n(Er);
			const jr = ({
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
					className: Object(v.a)(Pr.a.searchBar, d && Pr.a.searchBarExp),
					method: "get",
					onSubmit: a,
					onFocus: i,
					role: "search"
				}, m.a.createElement("label", {
					className: Pr.a.inputLabel,
					htmlFor: "header-search-bar"
				}, m.a.createElement("div", {
					"aria-hidden": !0,
					className: Pr.a.iconContainer
				}, m.a.createElement(ps.a, {
					name: "search",
					className: Pr.a.icon
				})), m.a.createElement(Fo.a, {
					"aria-live": "assertive"
				}, u), n && s && m.a.createElement(xr, {
					subreddit: s
				})), m.a.createElement("input", {
					id: "header-search-bar",
					name: "q",
					className: Pr.a.input,
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

			function _r({
				className: e
			}) {
				const t = Object(dr.a)(),
					n = Object(zt.Y)(t),
					{
						nsfwSessionSetting: s,
						refreshNsfwSessionSettingExpiryTime: o
					} = Object(Xo.a)(),
					[r, a] = Object(u.useState)(-1),
					[i, c] = Object(u.useState)([]),
					[l, d] = Object(u.useState)(!1),
					[b, f] = Object(u.useState)({}),
					[g, O] = Object(u.useState)([]),
					[y, C] = Object(u.useState)(n || ""),
					[x, E] = Object(u.useState)(null),
					P = Object(u.useRef)(null),
					j = Object(u.useRef)(null),
					_ = Object(A.b)(),
					S = Object(p.d)(),
					k = Object(p.e)(Lt.b),
					w = Object(p.e)(Lt.d),
					I = Object(p.e)(xt.j),
					M = Object(p.e)(cr.f),
					N = Object(p.e)(cr.e),
					T = Object(p.e)(sr.a),
					R = Object(p.e)(rr),
					L = Object(p.e)(ir.a),
					F = Object(p.e)(xt.J),
					D = Object(p.e)(cr.g),
					U = Object(p.e)(xt.W),
					B = Object(p.e)(Lt.p),
					G = Object(p.e)(e => Object(zt.Z)(e, {
						pageLayer: t
					})),
					q = Object(p.e)(e => Object(zt.r)(e, {
						pageLayer: t
					})),
					H = Object(p.e)(e => Object(zt.e)(e, {
						pageLayer: t
					})),
					W = Object(p.e)(lr.a),
					V = Object(p.e)(cr.n),
					J = Object(p.e)(nr.b),
					z = Object(p.e)(xt.db),
					K = Object(ur.a)(q),
					Q = Object(ur.a)(n),
					X = Object(ur.a)(V),
					Y = Object(ur.a)(W),
					Z = k ? Object(Ct.getPageTypeFromCurrentPage)(k) : t ? Object(Ct.getPageTypeFromCurrentPage)(t) : void 0,
					$ = b[y];
				Object(u.useEffect)(() => {
					ee()
				}, [Y, X, V, W]), Object(u.useEffect)(() => {
					K || !q || D || se()
				}, [K, q, D]), Object(u.useEffect)(() => {
					qo()(V) || n ? C(n || "") : ce()
				}, [Q, n]);
				const ee = () => {
						const e = Object($o.a)(X, V),
							t = Object($o.a)(Y, W);
						if (!e || !t) {
							const t = V.length ? V : [...g, ...W];
							c(t), !e && V.length && V.forEach(e => {
								me(e.isProfile ? Ct.SearchDropdownNouns.TypeaheadProfile : Ct.SearchDropdownNouns.TypeaheadSubreddit, Ct.StructureType.Search, e.searchQuery)
							})
						}
					},
					te = e => S(Object(zo.s)({
						searchQuery: e
					})),
					ne = () => S(Object(zo.l)()),
					se = () => S(Object(zo.n)()),
					oe = (e, t) => {
						e.preventDefault(), ((e, t, n, s) => {
							S(Object(h.b)(Object(Do.c)({
								pathname: e,
								search: t,
								state: {
									fromPage: n,
									[Yo.a.SearchOriginPage]: s
								}
							})))
						})(t.url, t.qs, {
							routeName: B,
							subredditName: w
						}, Z)
					},
					re = async () => {
						W.length || l || (d(!0), await (() => S(Object(Ko.b)()))(), d(!1))
					}, ae = e => {
						F && I && O(Object(Bt.Rb)({
							...e,
							section: tr.c.recent
						}, I.id))
					}, ie = Bo()(e => {
						(async e => {
							b[e] || (b[e] = !0, f({
								...b
							}), await S(Object(zo.o)(e)), b[e] = !1, f({
								...b
							}))
						})(e)
					}, 250), ce = () => {
						a(-1), E(null), C(""), te("")
					}, le = (e, t, s, o) => {
						const r = {
							displayQuery: e,
							rawQuery: t,
							structureType: s,
							searchQuery: n
						};
						_(Object(er.t)(o, r))
					}, de = (e, t, n) => {
						_(Object(er.v)(e, t, n))
					}, ue = (e, t, n, s) => {
						_(Object(er.x)(e, t, n, s))
					}, me = (e, t, s, o) => {
						const r = {
							displayQuery: s,
							rawQuery: o || s,
							searchQuery: n,
							structureType: t
						};
						_(Object(er.u)(e, r))
					}, pe = ({
						target: e,
						searchOptions: t,
						pageLayer: n,
						subreddit: s
					}) => _(o => ({
						...Object(er.c)(o),
						source: "search",
						action: "click",
						noun: e,
						actionInfo: Object(Ct.actionInfo)(o),
						search: {
							queryId: Object(Oo.c)(Oo.a.SearchResults),
							originPageType: Object(Ct.searchOriginPageTypeSelector)(o, n),
							...Object(Ct.searchOptionsToTelemetryModelParams)(t),
							structureType: Object(Ct.structureType)(n),
							subredditId: null == s ? void 0 : s.id,
							subredditName: null == s ? void 0 : s.name
						}
					})), be = e => {
						const t = i[e] || null,
							n = t ? t.searchQuery : "";
						a(e), C(n), E(t)
					};
				return m.a.createElement("div", {
					className: Object(v.a)(pr.a.relativeWrapper, xs.a.container, e, {
						"m-open": M
					}),
					id: Qo.b,
					ref: P
				}, m.a.createElement(jr, {
					inputRef: j,
					onChange: e => {
						const t = e.currentTarget.value;
						if (C(t), te(t), R) {
							if (!(!N || !N[t]) || !t) return;
							ie(t)
						}
					},
					searchQuery: y,
					onFormSubmit: e => {
						e.preventDefault(), y.trim() && ((async e => {
							var t;
							if (ne(), y.trim()) {
								let n = {
									...tr.a
								};
								if (x && x.searchQuery === y)(n = x).id || (n.id = Wo()()), n.section === tr.c.recent ? de(y, n, r) : n.section === tr.c.typeahead ? ue(y, n, r, i.filter(e => e.isSubreddit)) : le(y, y, Ct.StructureType.Search, Ct.SearchDropdownNouns.Recent);
								else {
									const e = q && q.icon ? q.icon.url : "",
										t = null == q ? void 0 : q.displayText,
										s = !!q && q.isNSFW,
										o = tr.b.text;
									n = {
										id: Wo()(),
										searchQuery: y,
										type: o,
										section: tr.c.recent,
										subredditOrProfileRestrictedName: t,
										displayInfo: {
											iconUrl: e,
											isNSFW: s
										}
									}
								}
								ae(n), ne();
								const a = Object(Zo.b)({
									subreddit: q,
									multireddit: H,
									searchItem: n,
									searchOptions: void 0,
									shouldSearchSubreddit: G,
									includeNsfwResults: J && z && s
								});
								a && (oe(e, a), n.isTypeaheadSuggestion && ce(), o(), null === (t = j.current) || void 0 === t || t.blur())
							}
						})(e), pe({
							searchOptions: Object(Vo.e)({
								q: y
							}),
							subreddit: G ? q : void 0,
							target: "full_search_button"
						}), ne())
					},
					onFocusSearchBar: () => {
						Object(Oo.c)(Oo.a.SearchResults) || Object(Oo.d)(Oo.a.SearchResults), pe({
							searchOptions: Object(Vo.e)({
								q: n
							}),
							pageLayer: t || void 0,
							target: Ct.OriginElement.SearchBar
						})
					},
					onKeyDown: e => {
						if (e.key === vo.b.Escape || e.key === vo.b.Tab) ne();
						else if (e.key === vo.b.ArrowDown) {
							if (e.preventDefault(), 0 === i.length || !M) return;
							if (r >= i.length - 1) return;
							be(r + 1)
						} else if (e.key === vo.b.ArrowUp) {
							if (e.preventDefault(), 0 === i.length || !M) return;
							if (-1 === r) return;
							be(r - 1)
						} else e.key === vo.b.Backspace && !y && G && D && (_(() => Object(er.d)(q)), (() => S(Object(zo.k)()))())
					},
					showCommunityPill: G,
					subreddit: q,
					toggleDropdownAndGetTrending: () => {
						if (!W.length && T && re(), I) {
							const e = Object(Bt.M)(I.id);
							e.length > 0 && (O(F ? e : []), c([...e, ...W]), e.forEach(e => {
								me(Ct.SearchDropdownNouns.Recent, Ct.StructureType.Recent, e.searchQuery)
							}))
						}
						M || (() => S(Object(zo.m)()))()
					}
				}), m.a.createElement(Qo.c, {
					container: P.current,
					focusedItemIndex: r,
					isInTrendingExperiment: T,
					isInUISimplificationI18NExperiment: L,
					searchOriginPage: Z,
					isOpen: M,
					isTrendingPending: l,
					isTypeaheadPending: $,
					itemList: i,
					nightmode: U,
					recentSearches: g,
					trendingItems: W,
					searchQuery: y,
					typeaheadSuggestions: V,
					onClearSearchQuery: ce,
					onClose: ne,
					onRemoveRecentSearch: e => {
						I && 0 !== g.length && (Object(Bt.cb)(e, I.id), O(g.filter(t => t.searchQuery !== e.searchQuery)), a(-1))
					},
					onSendSearchClickRecentEvent: de,
					onSendSearchClickTypeaheadEvent: ue,
					onSetRecentSearch: ae,
					onUpdateSearchQuery: C,
					fireAdPixelsOfType: (e, t) => S(Object(Jo.z)(e, t))
				}))
			}
			var Sr = n("./src/reddit/icons/svgs/Snoo/index.tsx"),
				kr = n("./src/reddit/icons/svgs/Wordmark/index.tsx"),
				wr = n("./src/reddit/selectors/responsivePage.ts"),
				Ir = n("./src/reddit/components/Header/MwebResponsiveHeader/index.m.less"),
				Mr = n.n(Ir);
			var Nr = e => {
					const {
						className: t
					} = e;
					return m.a.createElement("div", {
						className: Object(v.a)(Mr.a.Container, t)
					}, m.a.createElement("a", {
						"aria-label": o.fbt._("Home", null, {
							hk: "1u0Rxp"
						}),
						className: Mr.a.HomeLink,
						href: B.a.redditUrl
					}, m.a.createElement(Sr.a, {
						className: Mr.a.Snoo
					}), m.a.createElement(kr.a, {
						className: Mr.a.Wordmark,
						color: "inherit"
					})))
				},
				Tr = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				Ar = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				Rr = n("./src/reddit/hooks/useTracking.ts"),
				Lr = n("./src/reddit/components/Header/QuickLinks/index.m.less"),
				Fr = n.n(Lr),
				Dr = m.a.memo((function(e) {
					const t = Object(Rr.a)(),
						n = Object(p.d)(),
						s = Object(u.useCallback)(() => {
							t(e => ({
								...Object(Ct.defaults)(e),
								source: "nav",
								action: "click",
								noun: "popular"
							}))
						}, [t]),
						r = Object(u.useCallback)(() => {
							t(e => ({
								...Object(Ct.defaults)(e),
								source: "nav",
								action: "click",
								noun: "all"
							}))
						}, [t]),
						a = Object(u.useCallback)(() => {
							n(Object(Rs.a)(As.c[As.b.Rpan])), t(e => ({
								...Object(Ct.defaults)(e),
								source: "nav",
								action: "click",
								noun: "rpan"
							}))
						}, [n, t]),
						i = Object(p.e)(xt.J),
						c = Object(p.e)(_s.a),
						l = Object(Ar.a)(),
						d = Object(Ar.a)(),
						b = Object(Ar.a)();
					return m.a.createElement("div", {
						className: Object(v.a)(Fr.a.container, e.className)
					}, m.a.createElement("div", {
						className: Fr.a.row
					}, m.a.createElement(ds.a, {
						className: Fr.a.icon,
						innerRef: l.target.ref,
						to: i ? As.c[As.b.Popular] : As.c[As.b.Home],
						onClick: s,
						onMouseEnter: l.show,
						onMouseLeave: l.hide
					}, m.a.createElement(ps.a, {
						name: "popular"
					})), m.a.createElement(Tr.a, {
						arrowProps: l.arrowProps,
						popperProps: l.popperProps,
						visible: l.visible
					}, o.fbt._("Popular", null, {
						hk: "1Kx4va"
					})), m.a.createElement(m.a.Fragment, null, m.a.createElement(ds.a, {
						className: Fr.a.icon,
						innerRef: d.target.ref,
						to: As.c[As.b.All],
						onClick: r,
						onMouseEnter: d.show,
						onMouseLeave: d.hide
					}, m.a.createElement(ps.a, {
						name: "all"
					})), m.a.createElement(Tr.a, {
						arrowProps: d.arrowProps,
						popperProps: d.popperProps,
						visible: d.visible
					}, o.fbt._("All", null, {
						hk: "1Rk1yU"
					}))), c && m.a.createElement(m.a.Fragment, null, m.a.createElement(ds.a, {
						className: Fr.a.icon,
						innerRef: b.target.ref,
						to: As.c[As.b.Rpan],
						onClick: a,
						onMouseEnter: b.show,
						onMouseLeave: b.hide
					}, m.a.createElement(ps.a, {
						name: "video_live"
					})), m.a.createElement(Tr.a, {
						arrowProps: b.arrowProps,
						popperProps: b.popperProps,
						visible: b.visible
					}, o.fbt._("Reddit Live", null, {
						hk: "3BFYUK"
					})))))
				})),
				Ur = n("./src/reddit/actions/login.ts"),
				Br = n("./src/reddit/actions/tooltip.ts"),
				Gr = n("./src/reddit/helpers/trackers/authControls.ts"),
				qr = n("./src/lib/combineRefs/index.tsx"),
				Hr = n("./src/lib/hooks/useOnClickOutside.ts"),
				Wr = n("./src/lib/hooks/useTooltip.ts"),
				Vr = n("./src/lib/matchRoute/index.ts"),
				Jr = n("./src/chat/helpers/dom.ts"),
				zr = n("./src/reddit/actions/appBadgeIndicators/index.ts"),
				Kr = n("./src/reddit/actions/changeUsername.ts"),
				Qr = n("./src/reddit/actions/chat/toggle.ts"),
				Xr = n("./src/reddit/actions/emailVerificationTooltip.ts"),
				Yr = n("./src/reddit/actions/postCreation/general.ts"),
				Zr = n("./src/reddit/actions/preferences.ts"),
				$r = n("./src/reddit/actions/users.ts"),
				ea = n("./src/reddit/components/BadgeCounter/index.tsx"),
				ta = n("./src/reddit/components/BlockNavigation/index.tsx"),
				na = n("./src/reddit/components/ChangeUsernameModals/Loader.tsx"),
				sa = n("./src/reddit/components/ChangeUsernameTooltip/Loader.tsx"),
				oa = n("./src/reddit/components/CommonTooltip/Hooked.tsx");
			var ra = Object(Se.a)({
					getComponent: () => Object(Qe.a)(() => n.e("EmailVerificationModals").then(n.bind(null, "./src/reddit/components/EmailVerificationModals/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				aa = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				ia = n("./src/reddit/helpers/trackers/emailVerification.ts"),
				ca = n("./src/reddit/components/EmailVerificationTooltip/index.m.less"),
				la = n.n(ca);
			class da extends m.a.Component {
				constructor() {
					super(...arguments), this.onChangeEmailModalOpen = () => {
						this.props.sendEvent(Object(ia.e)(ia.a, "update")), this.props.toggleChangeEmailModal()
					}, this.onCloseTooltip = () => {
						this.props.sendEvent(Object(ia.c)(ia.a)), this.props.closeTooltip()
					}, this.onResendEmailClick = () => {
						this.props.sendEvent(Object(ia.e)(ia.a, "confirm")), this.props.resendEmail(), this.props.closeTooltip()
					}
				}
				componentDidMount() {
					da.shouldSendViewEvent && (da.shouldSendViewEvent = !1, this.props.sendEvent(Object(ia.g)(ia.a)))
				}
				render() {
					return m.a.createElement("div", {
						className: la.a.container
					}, m.a.createElement("div", {
						className: la.a.topLine
					}), m.a.createElement("button", {
						className: la.a.closeWrapper,
						onClick: this.onCloseTooltip
					}, m.a.createElement(Ne.a, {
						className: la.a.closeIcon
					})), m.a.createElement("h5", {
						className: la.a.title
					}, o.fbt._("Confirm your email:", null, {
						hk: "1RDs8b"
					})), m.a.createElement("p", {
						className: la.a.subtitle
					}, this.props.email), m.a.createElement("p", {
						className: la.a.description
					}, o.fbt._("Check your inbox email for Reddit's confirmation email. A current email address helps ensure you don't lose access to your account.", null, {
						hk: "2bhwUs"
					})), m.a.createElement("div", {
						className: la.a.buttonWrapper
					}, m.a.createElement(Me.l, {
						className: la.a.commonBtn,
						"data-redditstyle": !0,
						onClick: this.onChangeEmailModalOpen,
						type: "button"
					}, o.fbt._("Update email", null, {
						hk: "1Cxqkk"
					})), m.a.createElement(Me.i, {
						className: Object(v.a)(la.a.commonBtn, la.a.primaryBtn),
						"data-redditstyle": !0,
						onClick: this.onResendEmailClick,
						type: "button"
					}, o.fbt._("Got it", null, {
						hk: "3IP9TO"
					}))))
				}
			}
			da.shouldSendViewEvent = !0;
			const ua = Object(aa.a)(da, [fo.a.Click, fo.a.Keydown, fo.a.Resize]);
			var ma = Object(A.c)(ua),
				pa = n("./src/reddit/components/GoogleOneTapIFrame/index.m.less"),
				ba = n.n(pa);
			const ha = Object(g.c)({
				isLoggedIn: xt.J
			});
			class fa extends m.a.Component {
				render() {
					const {
						className: e,
						exposeIFrameElement: t,
						isLoggedIn: n
					} = this.props;
					return m.a.createElement(T.a, {
						className: Object(v.a)(ba.a.IFrame, {
							[ba.a["m-hidden"]]: n
						}, e),
						exposeIFrameElement: t,
						path: R.c.GoogleOneTap
					})
				}
			}
			var ga = Object(p.b)(ha)(fa),
				va = n("./src/reddit/components/Header/GoldCoinsCta/index.tsx"),
				Oa = n("./src/reddit/components/HeaderIconContainer/index.m.less"),
				ya = n.n(Oa);

			function Ca() {
				return (Ca = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const xa = N.a.button("Button", ya.a),
				Ea = N.a.div("Container", ya.a);

			function Pa(e) {
				const {
					children: t,
					isOpen: n,
					...s
				} = e;
				return m.a.createElement(xa, Ca({}, s, {
					id: e.id,
					onClick: t => e.onClick(t)
				}), m.a.createElement(Ea, {
					className: Object(v.a)({
						[ya.a.isOpen]: n
					})
				}, t))
			}
			var ja = n("./src/reddit/components/HeaderUserActions/index.m.less"),
				_a = n.n(ja);
			var Sa = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(ea.a, {
					isActive: !!e.hasUnreadMessages,
					unreadCount: e.badgeCount
				}), m.a.createElement(ps.a, {
					name: "chat",
					className: _a.a.icon2020
				})),
				ka = n("./src/reddit/components/HeaderUserActions/CustomizeFlyout/index.m.less"),
				wa = n.n(ka);
			const {
				fbt: Ia
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Ma = e => {
				const {
					onCloseFlyout: t
				} = e;
				return m.a.createElement("div", {
					className: wa.a.container
				}, m.a.createElement("p", {
					className: wa.a.title
				}, Ia._("New User Settings", null, {
					hk: "1Sziu9"
				})), m.a.createElement("h5", {
					className: wa.a.subtitle
				}, Ia._("Like customizing Reddit?", null, {
					hk: "38eFal"
				})), m.a.createElement("p", {
					className: wa.a.description
				}, Ia._("You can save how you sort and view your communities in user settings.", null, {
					hk: "XMkGT"
				})), m.a.createElement(Me.l, {
					className: wa.a.dismissBtn,
					onClick: t
				}, Ia._("Got it", null, {
					hk: "3IP9TO"
				})))
			};
			var Na = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(ea.a, {
				isActive: !!e.unreadCount,
				unreadCount: e.unreadCount
			}), m.a.createElement(ps.a, {
				name: "message",
				className: _a.a.icon2020
			}));
			var Ta = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(ea.a, {
					isActive: !!e.unreadCount,
					unreadCount: e.unreadCount
				}), m.a.createElement(ps.a, {
					name: "notification",
					className: _a.a.icon2020
				})),
				Aa = n("./src/lib/prettyPrintNumber/index.ts"),
				Ra = n("./src/reddit/actions/alpha.ts"),
				La = n("./src/reddit/actions/modMode.ts"),
				Fa = n("./src/reddit/actions/profile/index.ts"),
				Da = n("./src/reddit/constants/elementClassNames.ts"),
				Ua = n("./src/reddit/helpers/getAccountManagerMessageTarget/index.ts"),
				Ba = n("./src/reddit/helpers/karma.ts"),
				Ga = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				qa = n("./src/reddit/icons/fonts/Premium/index.tsx"),
				Ha = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				Wa = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts"),
				Va = n("./src/reddit/selectors/experiments/presenceIndicator.ts"),
				Ja = n("./src/reddit/selectors/modModeEnabled.ts"),
				za = n("./src/reddit/selectors/seo/index.ts"),
				Ka = n("./src/reddit/selectors/tooltip.ts"),
				Qa = n("./src/higherOrderComponents/asTooltip.tsx"),
				Xa = n("./src/reddit/components/HiddenDiv.tsx"),
				Ya = n("./src/reddit/controls/Dropdown/index.tsx"),
				Za = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				$a = n("./src/reddit/helpers/makeHeaderUserDropdownItem/index.tsx"),
				ei = n("./src/reddit/helpers/trackers/modTools.ts"),
				ti = n("./src/reddit/helpers/trackers/subredditCreation.ts");
			const ni = e => ({
					screen: Ct.screen(e),
					profile: Ct.profile(e),
					subreddit: Ct.subreddit(e)
				}),
				si = e => t => ({
					source: "user_dropdown",
					action: "click",
					noun: e ? "night_mode_off" : "night_mode_on",
					...ni(t)
				}),
				oi = e => t => ({
					source: "nav",
					action: "click",
					actionInfo: {
						pageType: t.platform.currentPage ? Ct.getPageTypeFromCurrentPage(t.platform.currentPage) : void 0,
						settingValue: e ? "online" : "hidden"
					},
					noun: "online_presence_toggle",
					...ni(t)
				}),
				ri = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "premium",
					correlationId: Object(Oo.c)(Oo.a.GoldPayment),
					...ni(e)
				}),
				ai = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "powerups",
					correlationId: Object(Oo.d)(Oo.a.PowerupsFlow, !1),
					...ni(e)
				}),
				ii = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "coins",
					correlationId: Object(Oo.c)(Oo.a.GoldPayment),
					...ni(e)
				});
			var ci = n("./src/reddit/icons/svgs/SnooNoEyes/index.tsx"),
				li = n("./src/reddit/actions/goldPurchaseModals/requestSpecialEvents.ts"),
				di = n("./src/reddit/actions/snoovatarModal.ts"),
				ui = n("./src/reddit/constants/colors.ts"),
				mi = n("./src/reddit/controls/InternalLink/index.tsx");

			function pi() {
				return (pi = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var bi = e => {
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
					return (s || "").startsWith("http") ? m.a.createElement("a", pi({
						href: s
					}, a), t) : m.a.createElement(mi.a, pi({
						to: s
					}, a), t)
				},
				hi = n("./src/reddit/components/HeaderUserDropdown/UserMenu/shared.m.less"),
				fi = n.n(hi);
			const gi = e => {
					const {
						title: t,
						titleClassName: n
					} = e;
					return m.a.createElement("span", {
						className: Object(v.a)(fi.a.title, n)
					}, t)
				},
				vi = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: o
					} = e;
					return m.a.createElement("button", {
						className: Object(v.a)(fi.a.secondLevelButton, t),
						onClick: n
					}, m.a.createElement(gi, {
						title: s,
						titleClassName: o
					}))
				},
				Oi = e => {
					const {
						className: t,
						href: n,
						onClick: s,
						title: o,
						titleClassName: r,
						rel: a
					} = e;
					return m.a.createElement(bi, {
						className: Object(v.a)(fi.a.secondLevelButton, t),
						href: n,
						onClick: s,
						rel: a
					}, m.a.createElement(gi, {
						title: o,
						titleClassName: r
					}))
				},
				yi = e => {
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
					return m.a.createElement(bi, {
						className: Object(v.a)(fi.a.secondLevelButton, t),
						href: n,
						onClick: r,
						rel: a
					}, m.a.createElement(vs.b, {
						"aria-hidden": !0,
						className: Object(v.a)(fi.a.subredditIcon, s),
						iconUrl: o,
						primaryColor: ui.b.snoo
					}), m.a.createElement(gi, {
						title: i,
						titleClassName: c
					}))
				},
				Ci = e => {
					const {
						className: t,
						onClick: n,
						title: s,
						titleClassName: o,
						isEnabled: r
					} = e;
					return m.a.createElement("button", {
						className: Object(v.a)(fi.a.secondLevelSwitch, t),
						onClick: n,
						onMouseDown: e => {
							e.preventDefault()
						}
					}, m.a.createElement(gi, {
						title: s,
						titleClassName: o
					}), m.a.createElement(Za.a, {
						className: fi.a.toggleSwitch,
						"data-redditstyle": !0,
						on: r,
						redditStyle: !0,
						tabIndex: -1
					}))
				};
			var xi = n("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				Ei = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				Pi = n("./src/reddit/icons/svgs/SparkleGradient/index.tsx"),
				ji = n("./src/reddit/selectors/avatarMarketing.ts"),
				_i = n("./src/reddit/selectors/experiments/econ/index.ts"),
				Si = n("./src/reddit/selectors/meta.ts"),
				ki = n("./src/reddit/components/HeaderUserDropdown/avatar.m.less"),
				wi = n.n(ki);
			const Ii = (e, t) => e && m.a.createElement("div", {
				className: wi.a.marketingBadge
			}, m.a.createElement(xi.a, {
				className: wi.a.marketingAsset,
				headshot: e
			}), o.fbt._("New", null, {
				hk: "2TRcjA"
			}), !t && m.a.createElement(m.a.Fragment, null, m.a.createElement(Pi.a, {
				className: Object(v.a)(wi.a.sparkle, wi.a.sparkle1)
			}), m.a.createElement(Pi.a, {
				className: Object(v.a)(wi.a.sparkle, wi.a.sparkle2)
			}), m.a.createElement(Pi.a, {
				className: Object(v.a)(wi.a.sparkle, wi.a.sparkle3)
			}), m.a.createElement(Pi.a, {
				className: Object(v.a)(wi.a.sparkle, wi.a.sparkle4)
			})));
			var Mi = ({
				useNewButtonComponent: e,
				onClick: t
			}) => {
				var n;
				const s = Object(p.d)(),
					r = Object(Rr.a)(),
					a = Object(zt.db)(),
					i = Object(p.e)(e => e.user.account),
					c = Object(p.e)(hs.c),
					l = Object(p.e)(_i.c),
					d = Object(p.e)(ji.b),
					u = Object(p.e)(ji.a),
					b = () => s(Object(di.b)({
						clickSource: "nav"
					})),
					h = Object(p.e)(Si.i).startsWith("en");
				if ((null === (n = null == a ? void 0 : a.meta) || void 0 === n ? void 0 : n.name) === O.Jb.AVATAR) return null;
				!d && l && s(Object(li.a)()), u && r(Ei.j);
				const f = i && i.snoovatarFullBodyAsset ? o.fbt._("Style Avatar", null, {
					hk: "1HIsKA"
				}) : o.fbt._("Create Avatar", null, {
					hk: "3kfCbX"
				});
				if (e) {
					const e = m.a.createElement(m.a.Fragment, null, f, h && Ii(u, c));
					return m.a.createElement(vi, {
						onClick: () => {
							b(), "function" == typeof t && t()
						},
						title: e,
						titleClassName: wi.a.avatarLinkBody
					})
				}
				const g = Object($a.c)((null == i ? void 0 : i.snoovatarFullBodyAsset) ? Oc("avatar_style") : Oc("add"), ((e, t, n, s) => o => m.a.createElement("div", {
					className: `${wi.a.avatarLinkBody} ${o.className}`
				}, e, s && Ii(t, n)))(f, u, c, h));
				return m.a.createElement(g, {
					onClick: b
				})
			};
			const Ni = e => {
					const {
						icon: t,
						title: n,
						titleClassName: s
					} = e;
					return m.a.createElement("span", {
						className: fi.a.headingContent
					}, m.a.createElement("span", {
						className: fi.a.iconContainer
					}, t), m.a.createElement("span", {
						className: Object(v.a)(fi.a.title, s)
					}, n))
				},
				Ti = e => {
					const {
						className: t,
						icon: n,
						onClick: s,
						title: o,
						titleClassName: r
					} = e;
					return m.a.createElement("button", {
						className: Object(v.a)(fi.a.button, t),
						onClick: s
					}, m.a.createElement(Ni, {
						icon: n,
						title: o,
						titleClassName: r
					}))
				},
				Ai = e => {
					const {
						className: t,
						href: n,
						icon: s,
						onClick: o,
						rel: r,
						title: a,
						titleClassName: i
					} = e;
					return m.a.createElement(bi, {
						className: Object(v.a)(fi.a.button, t),
						href: n,
						rel: r,
						onClick: o
					}, m.a.createElement(Ni, {
						icon: s,
						title: a,
						titleClassName: i
					}))
				};
			class Ri extends m.a.Component {
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
						className: fi.a.button,
						type: "button",
						onClick: e => {
							if (this.toggleOpen(e), "function" == typeof o) {
								const t = e.target,
									n = Boolean(t.getAttribute("data-chevron"));
								o(e, n)
							}
						}
					}, m.a.createElement("span", {
						className: fi.a.headingContent,
						tabIndex: -1
					}, m.a.createElement("span", {
						className: fi.a.iconContainer
					}, s), m.a.createElement("span", {
						className: fi.a.title
					}, a ? m.a.createElement(bi, {
						className: fi.a.innerLink,
						href: a
					}, r) : m.a.createElement(m.a.Fragment, null, r)), m.a.createElement(ps.a, {
						"data-chevron": !0,
						name: "caret_down",
						className: Object(v.a)(fi.a.chevronIcon, {
							[fi.a["m-expanded"]]: i
						})
					}))), m.a.createElement("div", {
						className: Object(v.a)(fi.a.contentContainer, fi.a["m-collapsible"], {
							[fi.a.isOpen]: i
						}, n)
					}, t))
				}
			}
			var Li = Ri;
			var Fi = [{
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
				Di = n("./src/reddit/helpers/trackers/navigation.ts"),
				Ui = n("./src/reddit/components/HeaderUserDropdown/UserMenu/ExploreMenu/styles.m.less"),
				Bi = n.n(Ui);
			var Gi = ({
				isOpen: e,
				onClick: t,
				sendEvent: n
			}) => {
				const [s, r] = Object(u.useState)(null), a = e => () => {
					r(s === e ? null : e)
				};
				return m.a.createElement(Li, {
					icon: m.a.createElement(ps.a, {
						name: "discover"
					}),
					isOpen: e,
					onClick: (e, s) => {
						n(Object(Di.b)(s ? "explore_chevron" : "explore_menu")), "function" == typeof t && t(e)
					},
					title: o.fbt._("Explore", null, {
						hk: "4xNnBs"
					})
				}, m.a.createElement("span", null, Fi.map((e, t) => (({
					link: e,
					sublinks: t
				}, {
					isOpen: n,
					onClick: s
				}, o) => m.a.createElement(Li, {
					className: Bi.a.collapsibleContainer,
					isOpen: n,
					key: e.url,
					onClick: (t, n) => {
						e.noun && o(Object(Di.b)(e.noun + (n ? "_chevron" : "_menu"))), "function" == typeof s && s(t)
					},
					title: e.title,
					url: e.url
				}, t.map(e => m.a.createElement(Oi, {
					className: Bi.a.basicLink,
					href: e.url,
					key: e.url,
					onClick: () => {
						e.noun && o(Object(Di.b)(e.noun + "_menu"))
					},
					title: e.title
				}))))(e, (e => ({
					onClick: a(e),
					isOpen: s === e
				}))(t), n))))
			};
			var qi = e => {
				const {
					title: t,
					children: n,
					icon: s
				} = e;
				return m.a.createElement(m.a.Fragment, null, m.a.createElement("div", {
					className: fi.a.heading
				}, m.a.createElement("span", {
					className: fi.a.headingContent
				}, m.a.createElement("span", {
					className: fi.a.iconContainer
				}, s), m.a.createElement("span", {
					className: fi.a.title
				}, t))), m.a.createElement("div", {
					className: fi.a.contentContainer
				}, n))
			};
			const Hi = () => {
					const e = Object(p.d)(),
						t = Object(Rr.a)(),
						n = Object(p.e)(xt.W);
					return m.a.createElement(Ci, {
						isEnabled: n,
						onClick: () => {
							t(si(n)), (t => e(Object(Zr.w)(t)))(!n)
						},
						title: o.fbt._("Dark Mode", null, {
							hk: "1pZGTO"
						})
					})
				},
				Wi = () => {
					const e = Object(p.d)(),
						t = Object(Rr.a)(),
						n = Object(p.e)(e => e.user.account),
						s = Object(p.e)(Ja.a);
					return n && n.isMod ? m.a.createElement(Ci, {
						isEnabled: s,
						onClick: () => {
							t(Object(ei.i)(!s)), (() => e(Object(La.b)()))()
						},
						title: o.fbt._("Mod Mode", null, {
							hk: "1gLGCN"
						})
					}) : null
				},
				Vi = () => {
					const e = Object(p.d)(),
						t = Object(A.b)(),
						n = Object(p.e)(xt.j),
						s = Object(p.e)(xt.ib);
					return n ? m.a.createElement(qi, {
						icon: m.a.createElement(ps.a, {
							name: "profile"
						}),
						title: o.fbt._("My Stuff", null, {
							hk: "15XGVl"
						})
					}, m.a.createElement(Ci, {
						title: o.fbt._("Online Status", null, {
							hk: "3t396G"
						}),
						isEnabled: s,
						onClick: () => {
							t(oi(!s)), (t => e(Object(Zr.F)({
								showPresence: t
							})))(!s)
						}
					}), m.a.createElement(Oi, {
						title: o.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						href: null == n ? void 0 : n.url,
						onClick: () => t(Object(Di.b)("profile"))
					}), m.a.createElement(Mi, {
						onClick: () => e(Object(Br.j)({
							tooltipId: "USER_DROPDOWN_ID"
						})),
						useNewButtonComponent: !0
					}), m.a.createElement(Oi, {
						title: o.fbt._("User Settings", null, {
							hk: "2HIDAR"
						}),
						href: "/settings/",
						onClick: () => t(Object(Di.b)("settings"))
					})) : null
				},
				Ji = () => {
					return Object(p.e)(xt.j) ? m.a.createElement(qi, {
						title: o.fbt._("View Options", null, {
							hk: "142L6P"
						}),
						icon: m.a.createElement(ps.a, {
							name: "views"
						})
					}, m.a.createElement(Wi, null), m.a.createElement(Hi, null)) : null
				},
				zi = ({
					isOpen: e,
					onClick: t
				}) => {
					return Object(p.e)(xt.j) ? null : m.a.createElement(Li, {
						icon: m.a.createElement(ps.a, {
							name: "settings"
						}),
						title: o.fbt._("Settings", null, {
							hk: "1AC3DI"
						}),
						isOpen: e,
						onClick: t
					}, m.a.createElement(Hi, null))
				},
				Ki = ({
					isOpen: e,
					onClick: t,
					sendEvent: n
				}) => m.a.createElement(Li, {
					icon: m.a.createElement(ps.a, {
						name: "rules"
					}),
					isOpen: e,
					onClick: (e, s) => {
						n(Object(Di.b)(s ? "terms_chevron" : "terms_menu")), "function" == typeof t && t(e)
					},
					title: o.fbt._("Terms & Policies", null, {
						hk: "3sa1sF"
					})
				}, m.a.createElement(Oi, {
					href: "https://www.redditinc.com/policies/user-agreement",
					onClick: () => n(Object(Di.b)("user_agreement")),
					title: o.fbt._("User Agreement", null, {
						hk: "kfqI"
					})
				}), m.a.createElement(Oi, {
					href: "https://www.redditinc.com/policies/privacy-policy",
					onClick: () => n(Object(Di.b)("privacy_policy")),
					title: o.fbt._("Privacy Policy", null, {
						hk: "y8Vyn"
					})
				}), m.a.createElement(Oi, {
					href: "https://www.redditinc.com/policies/content-policy",
					onClick: () => n(Object(Di.b)("content_policy")),
					title: o.fbt._("Content Policy", null, {
						hk: "2xjmLL"
					})
				}), m.a.createElement(Oi, {
					href: "https://www.redditinc.com/policies/moderator-guidelines",
					onClick: () => n(Object(Di.b)("mod_policy")),
					title: o.fbt._("Moderator Guidelines", null, {
						hk: "2AfPVY"
					})
				})),
				Qi = (e = new Date) => {
					const t = e.getFullYear();
					return `/posts/${e.getMonth()>=6?t:t-1}/`
				};
			var Xi = () => [{
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
				url: Qi()
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
			var Yi = ({
					isLoggedIn: e,
					isOpen: t,
					onClick: n,
					sendEvent: s,
					url: r
				}) => m.a.createElement(Li, {
					icon: m.a.createElement(ps.a, {
						name: "info"
					}),
					title: o.fbt._("More", null, {
						hk: "42foEw"
					}),
					isOpen: t,
					onClick: (e, t) => {
						s(Object(Di.b)(t ? "more_chevron" : "more_menu")), "function" == typeof n && n(e)
					}
				}, Xi().map(e => (({
					noun: e,
					rel: t,
					title: n,
					url: s
				}, o) => m.a.createElement(Oi, {
					href: s,
					key: s,
					onClick: () => {
						e && o(Object(Di.b)(e))
					},
					rel: t,
					title: n()
				}))(e, s)), e ? m.a.createElement(Oi, {
					href: "https://old.reddit.com" + r,
					title: o.fbt._("Visit Old Reddit", null, {
						hk: "3Fo9ag"
					}),
					onClick: () => {
						s(Object(Di.b)("old_reddit")), s(e => ({
							source: "redesignbanner",
							action: "click",
							noun: "2xdropdown_visit_old",
							screen: Ct.screen(e),
							subreddit: Ct.subreddit(e)
						}))
					}
				}) : null),
				Zi = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				$i = n("./src/reddit/components/HeaderUserDropdown/UserMenu/RecentCommunitiesMenu/styles.m.less"),
				ec = n.n($i);
			var tc = ({
					isOpen: e,
					onClick: t
				}) => {
					const [{
						links: n,
						showAll: s
					}, r] = Object(u.useState)({
						links: Object(Zi.b)(),
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
					return m.a.createElement(Li, {
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
						return m.a.createElement(yi, {
							className: ec.a.basicLink,
							href: e.url,
							iconClassName: e.communityIcon || (null === (t = e.icon) || void 0 === t ? void 0 : t.url) ? void 0 : ec.a.subredditIcon,
							iconUrl: e.communityIcon || (null === (n = e.icon) || void 0 === n ? void 0 : n.url),
							key: e.url,
							title: e.title,
							titleClassName: ec.a.title
						})
					}), n.length > 3 && (e => m.a.createElement("span", {
						className: fi.a.spanButton,
						onClick: i
					}, m.a.createElement("span", {
						className: Object(v.a)(fi.a.headingContent, ec.a.headingContent)
					}, m.a.createElement("span", {
						className: fi.a.title
					}, e))))(s ? o.fbt._("see less", null, {
						hk: "3tQWvR"
					}) : o.fbt._("see more", null, {
						hk: "1WV0AC"
					})))
				},
				nc = n("./src/reddit/components/HeaderUserDropdown/UserMenu/index.m.less"),
				sc = n.n(nc);

			function oc() {
				return (oc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const rc = e => {
					e.nativeEvent.stopImmediatePropagation()
				},
				ac = e => {
					const t = e && e.coins || 0;
					return o.fbt._({
						"*": "{number of coins} coins",
						_1: "1 coin"
					}, [o.fbt._plural(t, "number of coins")], {
						hk: "qmnnm"
					})
				};
			var ic;
			! function(e) {
				e[e.RecentCommunitiesMenu = 0] = "RecentCommunitiesMenu", e[e.ExploreMenu = 1] = "ExploreMenu", e[e.MoreMenu = 2] = "MoreMenu", e[e.Settings = 3] = "Settings", e[e.TermsAndPolicies = 4] = "TermsAndPolicies"
			}(ic || (ic = {}));
			var cc = e => {
					const {
						closeUserDropdown: t,
						dispatchOpenLoginModal: n,
						logoutUser: s,
						openCommunityCreationModal: r,
						sendEvent: a,
						shouldShowCreateCommunityItem: i,
						url: c,
						user: l
					} = e, [d, p] = Object(u.useState)(ic.TermsAndPolicies), b = e => () => {
						p(d === e ? null : e)
					}, h = e => ({
						onClick: b(e),
						isOpen: d === e
					}), f = !!l, g = () => {
						t(), n()
					};
					return m.a.createElement("div", {
						onClick: rc
					}, m.a.createElement(Vi, null), m.a.createElement(Ji, null), m.a.createElement(() => i ? m.a.createElement(Ti, {
						icon: m.a.createElement(ps.a, {
							name: "community"
						}),
						onClick: () => {
							r(), a(Object(ti.a)())
						},
						title: o.fbt._("Create a Community", null, {
							hk: "3QGru4"
						})
					}) : null, null), m.a.createElement(() => m.a.createElement(Ai, {
						icon: m.a.createElement(ps.a, {
							name: "coins"
						}),
						href: "/coins",
						title: m.a.createElement(m.a.Fragment, null, m.a.createElement("span", null, o.fbt._("Coins", null, {
							hk: "2g3szC"
						})), m.a.createElement("span", {
							className: sc.a.meta
						}, ac(l))),
						onClick: () => {
							Object(Oo.d)(Oo.a.GoldPayment, !0), e.sendEvent(ii())
						},
						titleClassName: sc.a.coinsTitle,
						className: sc.a.coinsLink
					}), null), m.a.createElement(() => m.a.createElement(Ai, {
						icon: m.a.createElement(ps.a, {
							name: "premium"
						}),
						href: "/premium",
						onClick: () => {
							Object(Oo.d)(Oo.a.GoldPayment, !0), e.sendEvent(ri())
						},
						title: o.fbt._("Premium", null, {
							hk: "Ib64I"
						})
					}), null), m.a.createElement(() => m.a.createElement(Ai, {
						icon: m.a.createElement(ps.a, {
							name: "powerup"
						}),
						href: "/powerups",
						onClick: () => {
							Object(Oo.d)(Oo.a.GoldPayment, !0), e.sendEvent(ai())
						},
						title: o.fbt._("Powerups", null, {
							hk: "2rTyID"
						})
					}), null), m.a.createElement(() => m.a.createElement(Ai, {
						icon: m.a.createElement(ps.a, {
							name: "live"
						}),
						href: Ds.a,
						title: o.fbt._("Talk", null, {
							hk: "2nFtKJ"
						})
					}), null), !f && m.a.createElement(tc, h(ic.RecentCommunitiesMenu)), m.a.createElement(Gi, oc({}, h(ic.ExploreMenu), {
						sendEvent: a
					})), m.a.createElement(zi, h(ic.Settings)), m.a.createElement(() => m.a.createElement(Ai, {
						href: "https://www.reddithelp.com/hc/en-us",
						icon: m.a.createElement(ps.a, {
							name: "help"
						}),
						title: o.fbt._("Help Center", null, {
							hk: "4sGjc0"
						}),
						onClick: () => e.sendEventWithName("help_center")
					}), null), m.a.createElement(Yi, oc({}, h(ic.MoreMenu), {
						isLoggedIn: f,
						url: c,
						sendEvent: a
					})), m.a.createElement(Ki, oc({}, h(ic.TermsAndPolicies), {
						sendEvent: a
					})), m.a.createElement(() => f ? m.a.createElement(Ti, {
						icon: m.a.createElement(ps.a, {
							name: "logout"
						}),
						onClick: () => {
							e.sendEventWithName("logout"), s()
						},
						title: o.fbt._("Log Out", null, {
							hk: "2SjIc8"
						})
					}) : m.a.createElement(Ti, {
						icon: m.a.createElement(ps.a, {
							name: "profile"
						}),
						onClick: g,
						title: o.fbt._("Sign Up or Log In", null, {
							hk: "3pedCU"
						})
					}), null), m.a.createElement(() => m.a.createElement("div", {
						className: fi.a.copyrightContainer
					}, m.a.createElement("span", {
						className: fi.a.copyrightText
					}, o.fbt._("© {year} Reddit, Inc. All rights reserved", [o.fbt._param("year", (new Date).getFullYear().toString())], {
						hk: "1rgU6A"
					}))), null))
				},
				lc = n("./src/reddit/components/HeaderUserDropdown/index.m.less"),
				dc = n.n(lc);

			function uc() {
				return (uc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const mc = "undefined" != typeof window && "new.reddit.com" !== window.location.hostname,
				pc = N.a.wrapped(Ya.a, "Dropdown", dc.a),
				bc = Object(Qa.a)(pc),
				hc = e => t => m.a.createElement(ps.a, uc({
					name: e
				}, t)),
				fc = e => m.a.createElement($a.a, {
					className: Object(v.a)(dc.a.button, e.className),
					"data-redditstyle": !0,
					onClick: e.onClick
				}, e.children, m.a.createElement("div", {
					className: dc.a.buttonText
				}, e.displayText), m.a.createElement(Za.a, {
					className: dc.a.toggleSwitch,
					"data-redditstyle": !0,
					redditStyle: !0,
					on: e.isEnabled
				}));
			var gc = Object(A.c)(e => {
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
					toggleModMode: p,
					user: b,
					shouldShowCreateCommunityItem: h,
					openCommunityCreationModal: f
				} = e, g = b && b.id;
				Object(u.useEffect)(() => {
					l()
				}, [g]);
				const v = Object($a.c)(hc("settings"), o.fbt._("User Settings", null, {
						hk: "46J4vT"
					})),
					O = Object($a.b)(hc("help"), o.fbt._("Help Center", null, {
						hk: "4sGjc0"
					})),
					y = Object($a.b)(hc("external_link"), o.fbt._("Visit Old Reddit", null, {
						hk: "3Fo9ag"
					})),
					C = Object($a.c)(hc("logout"), o.fbt._("Log In / Sign Up", null, {
						hk: "4xbfvS"
					})),
					x = Object($a.c)(hc("logout"), o.fbt._("Log Out", null, {
						hk: "2SjIc8"
					})),
					E = Object($a.c)(ci.a, o.fbt._("Opt In to New Reddit", null, {
						hk: "4jiTxA"
					})),
					P = (e => {
						const t = e && e.coins || 0;
						return o.fbt._({
							"*": "{number of coins} coins",
							_1: "1 coin"
						}, [o.fbt._plural(t, "number of coins")], {
							hk: "qmnnm"
						})
					})(b),
					_ = Object($a.c)(hc("coins"), o.fbt._("Coins", null, {
						hk: "25oh47"
					}), {
						meta: P
					}),
					S = Object($a.c)(hc("premium"), o.fbt._("Premium", null, {
						hk: "1SD1CS"
					})),
					k = Object($a.c)(hc("powerup"), o.fbt._("Powerups", null, {
						hk: "3ND1rQ"
					})),
					w = Object($a.c)(hc("live"), o.fbt._("Talk", null, {
						hk: "5IHxP"
					})),
					I = Object($a.c)(hc("community"), o.fbt._("Create a Community", null, {
						hk: "3QGru4"
					}));
				return i ? s ? m.a.createElement(Xa.a, null, m.a.createElement(cc, e)) : m.a.createElement(bc, {
					className: dc.a.navbarLikeMweb,
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID",
					tooltipPosition: ["right", "top"],
					targetPosition: ["right", "bottom"]
				}, m.a.createElement(cc, e)) : m.a.createElement(bc, {
					isFixed: !0,
					isOpen: e.isOpen,
					tooltipId: "USER_DROPDOWN_ID"
				}, b && a && m.a.createElement(m.a.Fragment, null, m.a.createElement("h3", {
					className: dc.a.sectionHeader,
					role: "heading"
				}, o.fbt._("Online Status", null, {
					hk: "23SMHV"
				})), m.a.createElement(fc, {
					className: dc.a.presenceToggle,
					displayText: d ? o.fbt._("On", null, {
						hk: "3aW5MW"
					}) : o.fbt._("Off", null, {
						hk: "pRgYU"
					}),
					isEnabled: d,
					onClick: () => {
						e.sendEvent(oi(!d)), e.toggleShowPresence(!d)
					}
				})), b && m.a.createElement(u.Fragment, null, m.a.createElement("h3", {
					className: dc.a.sectionHeader,
					role: "heading"
				}, o.fbt._("My Stuff", null, {
					hk: "47vhMb"
				})), (e => {
					const t = o.fbt._("Profile", null, {
							hk: "czKk9"
						}),
						n = Object($a.c)(hc("profile"), t);
					return m.a.createElement(n, {
						href: e.url
					})
				})(b), m.a.createElement(Mi, null), m.a.createElement(v, {
					href: "/settings"
				})), m.a.createElement("h3", {
					className: dc.a.sectionHeader,
					role: "heading"
				}, o.fbt._("View Options", null, {
					hk: "3bZPKB"
				})), b && b.isMod && m.a.createElement(fc, {
					displayText: o.fbt._("Mod Mode", null, {
						hk: "3Rb4sj"
					}),
					isEnabled: r,
					onClick: () => {
						e.sendEvent(Object(ei.i)(!r)), p()
					}
				}, m.a.createElement(ps.a, {
					name: "mod_mode",
					className: dc.a.modModeIcon
				})), m.a.createElement(fc, {
					displayText: o.fbt._("Night Mode", null, {
						hk: "2lyxcc"
					}),
					isEnabled: c,
					onClick: () => {
						e.sendEvent(si(c)), e.toggleNightmode(!c)
					}
				}, m.a.createElement(ps.a, {
					name: "night",
					className: dc.a.nightIcon
				})), m.a.createElement("h3", {
					className: dc.a.sectionHeader,
					role: "heading"
				}, o.fbt._("More Stuff", null, {
					hk: "4Gad8T"
				})), h && m.a.createElement(I, {
					className: dc.a.entrypointLink,
					onClick: () => {
						f(), e.sendEvent(Object(ti.a)())
					}
				}), m.a.createElement(u.Fragment, null, m.a.createElement(_, {
					href: "/coins",
					onClick: () => {
						Object(Oo.d)(Oo.a.GoldPayment, !0), e.sendEvent(ii())
					}
				}), m.a.createElement(S, {
					href: "/premium",
					onClick: () => {
						Object(Oo.d)(Oo.a.GoldPayment, !0), e.sendEvent(ri())
					}
				}), m.a.createElement(k, {
					href: "/powerups",
					onClick: () => {
						Object(Oo.d)(Oo.a.GoldPayment, !0), e.sendEvent(ai())
					}
				}), m.a.createElement(w, {
					href: Ds.a
				})), m.a.createElement(O, {
					href: "https://www.reddithelp.com"
				}), b && m.a.createElement(y, {
					href: "https://old.reddit.com" + e.url,
					onClick: () => {
						e.sendEvent(e => ({
							source: "redesignbanner",
							action: "click",
							noun: "2xdropdown_visit_old",
							screen: Ct.screen(e),
							subreddit: Ct.subreddit(e)
						}))
					}
				}), !mc && b && m.a.createElement(E, {
					href: "",
					onClick: () => {
						e.sendEvent(e => ({
							source: "redesignbanner",
							action: "click",
							noun: "2xdropdown_opt_in",
							screen: Ct.screen(e),
							subreddit: Ct.subreddit(e)
						})), e.onOptIntoRedesign()
					}
				}), m.a.createElement("div", {
					className: dc.a.divider
				}), b ? m.a.createElement(x, {
					href: "#",
					onClick: e => {
						t(), e.preventDefault()
					}
				}) : m.a.createElement(C, {
					href: "#",
					onClick: t => {
						Object(j.a)(t) && (t.preventDefault(), t.stopPropagation(), n(), e.sendEvent(Object(Gr.b)()))
					}
				}))
			});

			function vc() {
				return (vc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Oc = e => t => m.a.createElement(ps.a, vc({
					name: e
				}, t)),
				yc = Object(p.b)(() => Object(g.c)({
					isCrawler: e => !!Object(za.a)(e),
					isModModeEnabled: Ja.a,
					isOpen: Object(Ka.b)("USER_DROPDOWN_ID"),
					isPresenceToggleEnabled: Va.b,
					shouldShowCreateCommunityItem: xt.hb,
					navbarLikeMweb: Wa.a,
					nightmode: xt.W,
					showPresence: xt.ib,
					url: Lt.s
				}), (e, t) => ({
					closeUserDropdown: () => e(Object(Br.j)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					toggleNightmode: t => e(Object(Zr.w)(t)),
					toggleShowPresence: t => e(Object(Zr.F)({
						showPresence: t
					})),
					onOptIntoRedesign: () => e(Object(Ra.a)()),
					onOptOutOfRedesign: () => {
						"new.reddit.com" !== window.location.host ? (Pe.a.get("rseor3") && Pe.a.remove("rseor3", {
							domain: B.a.cookieDomain
						}), e(Object(Ra.b)(!0))) : window.location.host = "old.reddit.com"
					},
					requestAwardKarma: () => {
						var n;
						!t.user || null !== (n = t.user.karma) && void 0 !== n && n.total || e(Object(Fa.f)(Object(vt.e)(t.user)))
					},
					dispatchOpenLoginModal: () => e(Object(Ur.i)()),
					logoutUser: () => {
						const {
							googleOneTapIFrame: n
						} = t;
						n && n.contentWindow && (console.log("postMessage: disableAutoSelect"), n.contentWindow.postMessage({
							type: "disableAutoSelect"
						}, Object(Ua.a)())), e(Object($r.p)())
					},
					toggleModMode: () => e(Object(La.b)()),
					openCommunityCreationModal: () => e(Object(_e.h)(tt.a.SUBREDDIT_CREATION_MODAL_ID))
				}));
			var Cc = Object(zt.u)({
					pageLayer: e => e
				})(yc(e => {
					const {
						isPresenceToggleEnabled: t,
						requestAwardKarma: n,
						showPresence: s,
						user: r
					} = e, a = r && r.id;
					Object(u.useEffect)(() => {
						n()
					}, [a]);
					return m.a.createElement("div", {
						className: Object(v.a)(dc.a.container, Da.e)
					}, m.a.createElement(Ha.a, {
						"aria-expanded": e.isOpen,
						"aria-haspopup": !0,
						className: Object(v.a)(e.className, dc.a.inlineButton, {
							[dc.a.dropdownOpen]: e.isOpen,
							[dc.a.isLoggedOut]: !r,
							[dc.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						id: "USER_DROPDOWN_ID",
						onClick: () => {
							e.onClick(), e.sendEventWithName("self_user_icon")
						}
					}, m.a.createElement("span", {
						className: dc.a.accountDisplayText
					}, (n => n ? m.a.createElement("span", {
						className: Object(v.a)(dc.a.accountWrapper, dc.a.isLoggedIn),
						id: "email-collection-tooltip-id"
					}, n.accountIcon && m.a.createElement(ys.a, {
						className: Object(v.a)(dc.a.imgIcon, {
							[dc.a.navbarLikeMweb]: e.navbarLikeMweb
						}),
						wrapperClassName: dc.a.imgIconWrapper,
						shouldShowPresenceIndicator: t && s
					}), m.a.createElement("span", {
						className: dc.a.accountDetails
					}, m.a.createElement("span", {
						className: dc.a.username
					}, n.displayText, n.isGold && m.a.createElement(qa.a, {
						className: dc.a.premiumFontIcon,
						title: o.fbt._("Reddit Premium", null, {
							hk: "4Dwpyn"
						}),
						isFilled: !0
					})), m.a.createElement("span", {
						className: dc.a.accountKarma
					}, m.a.createElement(ps.a, {
						name: "karma",
						isFilled: !0,
						className: dc.a.karmaIcon
					}), m.a.createElement("span", null, (e => {
						const t = Object(Ba.a)(e),
							n = Object(Aa.b)(t);
						return o.fbt._({
							"*": "{karma count} karma",
							_1: "1 karma"
						}, [o.fbt._plural(t, "karma count", n)], {
							hk: "ndlXe"
						})
					})(n))), !!n.coins && m.a.createElement("span", {
						className: dc.a.accountCoins
					}, m.a.createElement(Ga.a, {
						className: dc.a.coinFontIcon,
						isFilled: !0
					}), m.a.createElement("span", null, (e => Object(Aa.b)(e.coins || 0, {
						displayFull: !1,
						roundDown: !0
					}))(n))))) : e.navbarLikeMweb ? null : m.a.createElement("span", {
						className: Object(v.a)(dc.a.accountWrapper, dc.a.isLoggedOut)
					}, m.a.createElement(ps.a, {
						name: "user",
						className: dc.a.defaultProfileIcon
					})))(e.user), m.a.createElement(ps.a, {
						name: "caret_down"
					})), m.a.createElement(Fo.a, null, o.fbt._("User account menu", null, {
						hk: "2TJXIP"
					}))), m.a.createElement(gc, e))
				})),
				xc = n("./src/lib/getParsedUserAgent/index.ts"),
				Ec = n("./src/reddit/components/InboxBanner/index.m.less"),
				Pc = n.n(Ec);
			var jc = Object(Ie.a)(({
					onClose: e
				}) => {
					const t = Object(xc.b)(navigator.userAgent);
					return m.a.createElement(et.e, null, m.a.createElement(et.i, {
						className: Pc.a.modalHeader
					}, m.a.createElement(et.q, {
						className: Pc.a.modalTitle
					}, o.fbt._("Turn on desktop notifications", null, {
						hk: "LDaeq"
					})), m.a.createElement(Me.q, {
						onClick: e,
						Icon: Object(ps.b)("close_fill"),
						size: Me.c.XXS,
						priority: Me.b.Plain,
						className: Pc.a.modalCloseIcon
					})), m.a.createElement(et.l, null, m.a.createElement("ul", {
						className: Pc.a.modalList
					}, m.a.createElement("li", {
						className: Pc.a.modalListItem
					}, m.a.createElement("span", null, "1"), o.fbt._("Click on {lockIcon} in your browser address bar", [o.fbt._param("lockIcon", m.a.createElement(ps.a, {
						name: "lock_fill",
						className: Pc.a.modalListIcon
					}))], {
						hk: "kcfln"
					})), t && m.a.createElement("li", {
						className: Pc.a.modalListItem
					}, m.a.createElement("span", null, "2"), o.fbt._("Select {lockIcon} site settings", [o.fbt._param("lockIcon", m.a.createElement(ps.a, {
						name: "settings_fill",
						className: Pc.a.modalListIcon
					}))], {
						hk: "4wRmvx"
					})), m.a.createElement("li", {
						className: Pc.a.modalListItem
					}, m.a.createElement("span", null, t ? 3 : 2), o.fbt._("Change {lockIcon} site settings notifications to ‘Allow’", [o.fbt._param("lockIcon", m.a.createElement(ps.a, {
						name: "notification_fill",
						className: Pc.a.modalListIcon
					}))], {
						hk: "31PZ6t"
					})))), m.a.createElement(et.g, null, m.a.createElement(Me.q, {
						text: o.fbt._("Got it", null, {
							hk: "1q53HE"
						}),
						onClick: e
					})))
				}),
				_c = n("./src/reddit/components/InboxTooltip/hooked.m.less"),
				Sc = n.n(_c);

			function kc() {
				return (kc = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var wc = m.a.memo((function({
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
					}, [e]), e ? m.a.createElement("div", kc({
						id: "INBOX--TOOLTIP",
						className: Object(v.a)(Sc.a.tooltip, {
							[Sc.a.visible]: n
						})
					}, t.popperProps), t.children) : null
				})),
				Ic = n("./src/reddit/components/InboxTooltip/Loader.ts"),
				Mc = n("./src/reddit/components/InboxTooltip/index.m.less"),
				Nc = n.n(Mc);
			const Tc = N.a.wrapped(Ne.a, "CloseIcon", Nc.a),
				Ac = e => m.a.createElement("div", {
					className: Nc.a.welcomeTooltipContainer
				}, m.a.createElement("button", {
					className: Nc.a.closeButton,
					onClick: e.onClose
				}, m.a.createElement(Tc, null)), m.a.createElement("h3", {
					className: Nc.a.tooltipTitle
				}, o.fbt._("Welcome to your new inbox!", null, {
					hk: "4h8pcK"
				})), m.a.createElement("p", {
					className: Nc.a.tooltipDescription
				}, o.fbt._("Now it’s easier to stay up-to-date on your activity and know what’s happening in your communities.", null, {
					hk: "14J4MZ"
				})));
			var Rc = n("./src/reddit/components/ModerationDropdown/index.tsx"),
				Lc = n("./src/reddit/components/Settings/modalIds.ts"),
				Fc = n("./src/reddit/helpers/trackers/inbox.ts"),
				Dc = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				Uc = n("./src/reddit/hooks/useInboxExposureSeen.ts"),
				Bc = n("./node_modules/icepick/icepick.js");
			const Gc = Object(Bc.freeze)({
				name: "offset",
				options: {
					offset: [-134, 6]
				}
			});
			var qc = n("./src/reddit/routes/index.ts"),
				Hc = n("./src/reddit/selectors/activeModal.ts"),
				Wc = n("./src/reddit/selectors/appBadges.ts");
			var Vc = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				Jc = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				zc = n("./src/reddit/selectors/sso.ts");
			const Kc = "change-username-tooltip-id",
				Qc = "email-verification-tooltip-id",
				Xc = m.a.memo((function({
					moderationDropdownOpen: e,
					...t
				}) {
					const n = Object(Ar.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: _a.a.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: n.target.ref
					}, m.a.createElement(Pa, {
						"aria-expanded": e,
						"aria-haspopup": !0,
						"aria-label": o.fbt._("Moderation", null, {
							hk: "1qCuzM"
						}),
						id: Rc.a,
						onClick: t.onOpenModerationDropdown,
						isOpen: e
					}, m.a.createElement(ea.a, {
						isActive: t.isModerateIconLit,
						unreadCount: -1,
						showEmpty: !0
					}), m.a.createElement(ps.a, {
						className: _a.a.icon2020,
						name: "mod"
					})), m.a.createElement(Tr.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, o.fbt._("Moderation", null, {
						hk: "4uQPyx"
					}))), m.a.createElement(Rc.b, {
						className: _a.a.moderationDropdown,
						isOpen: e,
						unreadNotifications: t.unreadNotifications,
						sendEventWithName: t.sendEventWithName
					}))
				})),
				Yc = m.a.memo((function(e) {
					const t = Object(Ar.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: _a.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("a", {
						className: _a.a.link,
						href: `${B.a.redditUrl}/chat`,
						onClick: Object(Jr.a)(e.onClickChat)
					}, m.a.createElement(Sa, {
						badgeCount: e.badgeCount,
						hasUnreadMessages: e.hasUnreadMessages
					}))), m.a.createElement(Tr.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, o.fbt._("Chat", null, {
						hk: "4nXRWH"
					})))
				})),
				Zc = m.a.memo((function({
					onClickMail: e,
					unreadNotifications: t
				}) {
					const n = Object(Ar.a)();
					return m.a.createElement("span", {
						className: _a.a.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: n.target.ref
					}, m.a.createElement("a", {
						className: _a.a.link,
						href: t && t.hasUnreadMail ? "/message/unread" : "/message/inbox",
						onClick: e
					}, m.a.createElement(Na, {
						unreadCount: t && t.inboxCount || 0
					})), m.a.createElement(Tr.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, o.fbt._("Messages", null, {
						hk: "Txokh"
					})))
				})),
				$c = {
					placement: "bottom",
					modifiers: [{
						name: "offset",
						options: {
							offset: [0, 6]
						}
					}]
				},
				el = m.a.memo((function(e) {
					const t = Object(p.d)(),
						n = Object(Ar.a)(),
						s = function(e) {
							const t = Object(u.useMemo)(() => {
								const t = Object(Wr.a)(e);
								return Object(Bc.updateIn)(t, ["modifiers"], e => Object(Bc.push)(e, Gc))
							}, [e]);
							return Object(Wr.b)(t)
						}(),
						r = Object(Wr.b)($c),
						[a, i] = Object(Uc.a)(e.userId),
						[c, l] = Object(Dc.a)(e.userId),
						d = Object(p.e)(Us.d),
						b = Object(p.e)(Object(Hc.c)("browser_notifications_permission_settings")),
						h = Object(p.e)(Us.e),
						f = Object(p.e)(Us.c),
						g = Object(p.e)(Us.a),
						v = f || h,
						O = Object(u.useCallback)(() => {
							s.hide(), n.hide(), d && i(), g && !c && l()
						}, [s, n, d, l, i, g, c]),
						y = Object(u.useCallback)(() => {
							r.hide(), n.hide(), v && i()
						}, [r, n, v, i]);
					Object(u.useEffect)(() => {
						v && !a && setTimeout(() => {
							r.show()
						}, 3e3)
					}, []);
					const C = Object(u.useRef)(!0);
					Object(u.useEffect)(() => {
						C.current ? C.current = !1 : f && y()
					}, [e.pageUrl]), Object(Hr.a)("INBOX--TOOLTIP", O);
					const x = v && !s.visible;
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: _a.a.iconWrapper,
						onMouseEnter: n.show,
						onMouseLeave: n.hide,
						ref: Object(qr.a)(n.target.ref, s.target.ref, r.target.ref)
					}, m.a.createElement(Pa, {
						"aria-expanded": s.visible,
						"aria-haspopup": !0,
						"aria-label": o.fbt._("Open notifications inbox", null, {
							hk: "1b2BKn"
						}),
						className: _a.a.notificationInboxIconContainer,
						onClick: t => {
							t.stopPropagation(), s.visible ? O() : s.show(), e.sendNavClickInbox(), v && !s.visible && y()
						},
						isOpen: s.visible
					}, m.a.createElement(Ta, {
						unreadCount: e.unreadCount
					})), !s.visible && !r.visible && m.a.createElement(Tr.a, {
						arrowProps: n.arrowProps,
						popperProps: n.popperProps,
						visible: n.visible
					}, m.a.createElement("div", null, o.fbt._("Notifications", null, {
						hk: "vAOKt"
					}))), m.a.createElement(wc, {
						arrowProps: s.arrowProps,
						popperProps: s.popperProps,
						visible: s.visible
					}, m.a.createElement(Ic.a, {
						isOpen: s.visible,
						hideTooltip: O,
						userId: e.userId,
						desktopNotificationsModalId: "browser_notifications_permission_settings"
					})), x && m.a.createElement(oa.a, {
						arrowProps: r.arrowProps,
						popperProps: r.popperProps,
						visible: r.visible,
						tooltipId: "welcome-tooltip-id",
						className: _a.a.welcomeTooltip,
						arrowClassName: _a.a.welcomeTooltipArrow
					}, m.a.createElement(Ac, {
						onClose: y
					}))), b && m.a.createElement(jc, {
						onClose: () => {
							t(Object(_e.g)("browser_notifications_permission_settings"))
						},
						withOverlay: !0
					}))
				})),
				tl = m.a.memo((function(e) {
					const t = Object(Ar.a)();
					return m.a.createElement(m.a.Fragment, null, m.a.createElement("span", {
						className: _a.a.iconWrapper,
						onMouseEnter: t.show,
						onMouseLeave: t.hide,
						ref: t.target.ref
					}, m.a.createElement("button", {
						className: _a.a.link,
						"aria-label": o.fbt._("Create Post", null, {
							hk: "4wbXc8"
						}),
						onClick: e.onClickCreatePost
					}, m.a.createElement(ps.a, {
						className: _a.a.icon2020,
						name: "add"
					}))), m.a.createElement(Tr.a, {
						arrowProps: t.arrowProps,
						popperProps: t.popperProps,
						visible: t.visible
					}, o.fbt._("Create Post", null, {
						hk: "1TvNGq"
					})))
				})),
				nl = Object(zt.u)({
					pageLayer: e => e
				}),
				sl = Object(g.c)({
					activeDropdownId: Ka.a,
					appBadges: Wc.b,
					chatDirectMessagesCount: Wc.e,
					email: xt.m,
					hasUnreadChatMessages: Wc.f,
					inboxBadgeCount: Wc.g,
					isChangeUsernameTooltipShowing: e => e.isChangeUsernameTooltipShowing,
					isCustomizeFlyoutShowing: e => e.user.isCustomizeFlyoutShowing,
					isEmailVerificationTooltipShowing: e => e.isEmailVerificationTooltipShowing,
					isGoogleOneTapEnabled: Vc.c,
					isInboxAppBadgingGqlEnabled: Jc.a,
					isInboxRedesignActive: Us.g,
					isModerator: yt.j,
					isNameEditable: xt.L,
					isResponsiveSettingsEnabled: Qt.a,
					shouldOpenEmailVerificationTooltip: (e, {
						pageLayer: t
					}) => Object(zt.M)(t) && !!Object(xt.m)(e) && !Object(xt.z)(e) && Object(xt.J)(e) && !Object(xt.H)(e),
					shouldShowChangeUsernameModals: zc.c,
					unreadNotifications: xt.lb
				}),
				ol = Object(p.b)(sl, (e, t) => ({
					closeChangeUsernameTooltip: () => e(Object(Kr.d)()),
					closeEmailVerificationTooltip: () => e(Object(Xr.b)()),
					showEmailVerficiationTooltip: () => e(Object(Xr.b)()),
					fetchAppBadges: () => e(Object(zr.c)()),
					onChatClick: () => e(Object(Qr.f)()),
					onDismissCustomizeFlyout: () => e(Object(Zr.s)()),
					onOpenModerationDropdown: () => {
						e(Object(Br.h)({
							tooltipId: Rc.a
						})), e(Object(go.q)())
					},
					onOpenUserDropdown: () => e(Object(Br.h)({
						tooltipId: "USER_DROPDOWN_ID"
					})),
					openChangeUsernameModal: () => {
						e(Object(_e.h)(Lc.b))
					},
					openKeepUsernameModal: () => {
						e(Object(_e.h)(Lc.f))
					},
					toggleChangeEmailModal: () => {
						e(Object(Xr.b)()), e(Object(_e.i)(Lc.a))
					},
					resendEmail: () => e(Object($r.w)(ia.a)),
					requestCreatePost: () => {
						t.pageLayer && e(Yr.n(t.pageLayer))
					},
					startChangeUsernameFlow: t => {
						const n = Object(h.b)(t);
						e(Object(Kr.f)(n))
					}
				}));
			class rl extends m.a.Component {
				constructor() {
					super(...arguments), this.state = {
						googleOneTapIFrame: null
					}, this.sendNavClickInbox = () => this.props.sendEvent(Object(Fc.s)({
						badgeCount: this.props.inboxBadgeCount
					})), this.sendEventWithName = e => this.props.sendEvent(Object(Di.b)(e)), this.onClickMail = () => this.sendEventWithName("mail"), this.onClickCreatePost = () => {
						this.sendEventWithName("create_post"), this.props.requestCreatePost()
					}, this.onClickChat = () => {
						this.sendEventWithName("chat"), this.props.onChatClick()
					}, this.onOpenModerationDropdown = () => {
						this.props.onOpenModerationDropdown(), this.sendEventWithName("mod_entry")
					}, this.confirmNavigate = e => {
						const t = Object(Vr.a)(e.pathname, qc.a),
							n = t && t.route && t.route.meta && t.route.meta.name;
						return !n || n !== O.Jb.POST_CREATION && n !== O.Jb.PROFILE_OVERVIEW || (this.props.startChangeUsernameFlow(e.pathname), !1)
					}, this.exposeIFrameElement = e => {
						this.setState({
							googleOneTapIFrame: e
						})
					}
				}
				componentDidMount() {
					this.props.showEmailVerficiationTooltip(), this.props.isInboxAppBadgingGqlEnabled && qo()(this.props.appBadges) && this.props.fetchAppBadges()
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
						isChangeUsernameTooltipShowing: c,
						isCustomizeFlyoutShowing: l,
						isEmailVerificationTooltipShowing: d,
						isGoogleOneTapEnabled: p,
						isInboxRedesignActive: b,
						isModerator: h,
						isNameEditable: f,
						isResponsiveSettingsEnabled: g,
						onDismissCustomizeFlyout: O,
						onOpenUserDropdown: y,
						openChangeUsernameModal: C,
						openKeepUsernameModal: x,
						pageLayer: E,
						resendEmail: P,
						shouldOpenEmailVerificationTooltip: j,
						shouldShowChangeUsernameModals: _,
						toggleChangeEmailModal: S,
						unreadNotifications: k,
						user: w
					} = this.props, {
						googleOneTapIFrame: I
					} = this.state, M = !(!k || !k.hasUnreadModmail), N = w && Object(vt.e)(w) || "", T = Object(v.a)({
						[_a.a["m-responsive"]]: g
					});
					return m.a.createElement(ft.a, {
						id: Qc,
						ref: e => this.container = e,
						className: n
					}, m.a.createElement(ft.a, {
						className: _a.a.headerLinks,
						id: Kc
					}, h && m.a.createElement(Xc, {
						isModerateIconLit: M,
						moderationDropdownOpen: e === Rc.a,
						onOpenModerationDropdown: this.onOpenModerationDropdown,
						sendEventWithName: this.sendEventWithName,
						unreadNotifications: k
					}), w && m.a.createElement(u.Fragment, null, m.a.createElement(Yc, {
						onClickChat: this.onClickChat,
						badgeCount: t,
						hasUnreadMessages: a
					}), b ? m.a.createElement(el, {
						sendNavClickInbox: this.sendNavClickInbox,
						unreadCount: i,
						pageUrl: null == E ? void 0 : E.url,
						userId: w.id
					}) : m.a.createElement(Zc, {
						onClickMail: this.onClickMail,
						unreadNotifications: k
					}), m.a.createElement(tl, {
						onClickCreatePost: this.onClickCreatePost
					}), m.a.createElement("span", {
						className: _a.a.iconWrapper
					}, m.a.createElement(va.a, null)))), m.a.createElement(Cc, {
						className: _a.a.headerUserDropdown,
						googleOneTapIFrame: I,
						onClick: y,
						user: w,
						sendEventWithName: this.sendEventWithName
					}), p && m.a.createElement("div", {
						className: _a.a.loggedInGoogleOneTap
					}, m.a.createElement(ga, {
						exposeIFrameElement: this.exposeIFrameElement
					})), l && m.a.createElement(Ma, {
						onCloseFlyout: O
					}), m.a.createElement(ma, {
						closeTooltip: o,
						email: r,
						isOpen: j && d,
						resendEmail: P,
						toggleChangeEmailModal: S,
						tooltipId: Qc
					}), m.a.createElement(ra, {
						email: r,
						shouldOpenTooltip: j
					}), f && !g && m.a.createElement(u.Fragment, null, m.a.createElement(sa.a, {
						closeTooltip: s,
						isOpen: c && !_,
						openChangeUsernameModal: C,
						openKeepUsernameModal: x,
						tooltipId: Kc,
						username: N
					}), _ && m.a.createElement(na.a, {
						isResponsiveSettingsEnabled: g,
						overlayClassName: T,
						username: N,
						withOverlay: !0
					}), m.a.createElement(ta.a, {
						confirmNavigate: this.confirmNavigate
					})))
				}
			}
			var al = Object(A.c)(nl(ol(rl))),
				il = n("./src/reddit/components/Header/User/index.m.less"),
				cl = n.n(il);
			const {
				fbt: ll
			} = n("./node_modules/fbt/lib/FbtPublic.js"), dl = Object(g.c)({
				account: e => e.user.account,
				origin: Si.j
			}), ul = m.a.memo(e => m.a.createElement("div", {
				className: Object(v.a)(e.className, cl.a.row)
			}, !e.account && function(e) {
				const t = e.pageLayer,
					n = B.a.accountManagerOrigin,
					s = t ? t.url : "/",
					o = t && t.meta && t.meta.name === O.Jb.EXPLORE ? encodeURIComponent(e.origin) : encodeURIComponent(e.origin + s);
				return m.a.createElement("div", {
					className: cl.a.loggedOutRow
				}, m.a.createElement(Me.m, {
					redditStyle: !0,
					className: cl.a.button,
					href: `${n}/login/?dest=${o}`,
					onClick: t => {
						Object(j.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenLoginModal(), e.sendEvent(Object(Gr.a)("nav")))
					}
				}, ll._("Log In", null, {
					hk: "4Cxw0g"
				})), m.a.createElement(Me.j, {
					redditStyle: !0,
					className: Object(v.a)(cl.a.separator, cl.a.button),
					href: `${n}/register/?dest=${o}`,
					onClick: t => {
						Object(j.a)(t) && (t.stopPropagation(), t.preventDefault(), e.closeUserDropdown(), e.onOpenRegisterModal(), e.sendEvent(Object(Gr.c)("nav")))
					}
				}, ll._("Sign Up", null, {
					hk: "2WZPuJ"
				})))
			}(e), m.a.createElement(al, {
				className: Object(v.a)({
					[cl.a.loggedOut]: !e.account
				}),
				user: e.account
			})));
			var ml = Object(zt.u)()(Object(p.b)(dl, e => ({
					onOpenLoginModal: () => {
						e(Object(_e.k)({
							actionSource: _e.a.HeaderLogin
						})), e(Object(Ur.i)())
					},
					onOpenRegisterModal: () => {
						e(Object(_e.k)({
							actionSource: _e.a.HeaderSignup
						})), e(Object(Ur.k)())
					},
					closeUserDropdown: () => e(Object(Br.j)({
						tooltipId: "USER_DROPDOWN_ID"
					}))
				}))(Object(A.c)(ul))),
				pl = n("./src/reddit/components/Header/index.m.less"),
				bl = n.n(pl);

			function hl() {
				return (hl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const fl = N.a.header("HeaderDynamicStyles", bl.a),
				gl = Object(g.c)({
					isLoggedIn: xt.J,
					isNightMode: xt.W,
					isResponsiveSettingsEnabled: Qt.a,
					isPageResponsive: wr.a,
					isBladeOpen: e => !!e.structuredStyles.isEditing
				}),
				vl = Object(zt.u)({
					categoryName: zt.c,
					pageLayer: e => e
				}),
				Ol = e => {
					const t = Object(u.useContext)(f.a);
					return m.a.createElement("div", {
						className: bl.a.left
					}, m.a.createElement(Fo.a, null, o.fbt._("Press J to jump to the feed. Press question mark to learn the rest of the keyboard shortcuts", null, {
						hk: "ToBNc"
					})), m.a.createElement(Lo.b, null), m.a.createElement(ds.a, {
						"aria-label": o.fbt._("Home", null, {
							hk: "3PmGmU"
						}),
						className: bl.a.centeredRow,
						to: "/",
						onClick: e.onReloadFrontpage
					}, m.a.createElement(Sr.a, {
						className: Object(v.a)(bl.a.snoo, {
							[bl.a.snooExp]: t
						})
					}), m.a.createElement(kr.a, {
						className: bl.a.wordmark
					})), e.children)
				},
				yl = e => m.a.createElement("div", {
					className: bl.a.right
				}, e.children, m.a.createElement(ml, null)),
				Cl = e => {
					const t = Object(u.useContext)(f.a);
					return m.a.createElement("div", {
						className: Object(v.a)(bl.a.layout, {
							[bl.a.layoutContainer]: t
						})
					}, m.a.createElement(Ol, hl({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), m.a.createElement(Ro, null), m.a.createElement(_r, {
						className: bl.a.search
					})), m.a.createElement(yl, null, m.a.createElement(Dr, {
						className: bl.a.quickLinks
					})))
				},
				xl = e => {
					const t = Object(u.useContext)(f.a);
					return m.a.createElement("div", {
						className: Object(v.a)(bl.a.layout, {
							[bl.a.layoutContainer]: t
						})
					}, m.a.createElement(Ol, hl({}, e, {
						onReloadFrontpage: e.onReloadFrontpage
					}), m.a.createElement("div", {
						className: bl.a.searchContainer
					}, m.a.createElement(_r, {
						className: bl.a.search
					}))), m.a.createElement(yl, null))
				};
			var El = vl(Object(p.b)(gl, e => ({
					onReloadFrontpage: () => e(Object(yo.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Frontpage~ModListing"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageReloaded))(!0))
				}))((function(e) {
					let t;
					const n = Object(u.useContext)(f.a);
					return t = e.isLoggedIn ? Cl : xl, m.a.createElement(fl, {
						"data-redditstyle": !0,
						className: Object(v.a)(bl.a.container, e.className, {
							[bl.a.bladeIsOpen]: e.isBladeOpen,
							[bl.a.navbarHeightContainer]: n
						})
					}, m.a.createElement(t, {
						categoryName: e.categoryName,
						onReloadFrontpage: e.onReloadFrontpage
					}), (e.isResponsiveSettingsEnabled || e.isPageResponsive) && m.a.createElement(Nr, {
						className: bl.a.MwebResponsiveHeader
					}))
				}))),
				Pl = n("./src/reddit/components/LightboxHeader/index.tsx"),
				jl = n("./src/reddit/components/NotificationBanners/bannerIds.ts"),
				_l = n("./src/reddit/components/PinnedSubscriptions/index.m.less"),
				Sl = n.n(_l);
			const {
				fbt: kl
			} = n("./node_modules/fbt/lib/FbtPublic.js"), wl = Object(g.c)({
				currentPage: ws
			}), Il = Object(p.b)(wl, e => ({
				onUnpinSubscriptions: () => e(Object(_.j)())
			})), Ml = Object(zt.u)();
			var Nl = N.a.wrapped(Ml(Il(e => m.a.createElement("div", {
					"data-redditstyle": !0,
					className: e.className
				}, m.a.createElement("div", {
					className: Sl.a.title
				}, m.a.createElement(so, {
					className: Sl.a.listHeader
				}, kl._("My Communities", null, {
					hk: "1CmPOc"
				})), m.a.createElement("div", {
					className: Sl.a.unpin,
					onClick: e.onUnpinSubscriptions
				}, m.a.createElement(ps.a, {
					name: "close",
					className: Sl.a.icon
				}))), m.a.createElement(Io, {
					currentPage: e.currentPage
				})))), "Component", Sl.a),
				Tl = n("./src/reddit/components/Survey/index.tsx"),
				Al = n("./src/reddit/components/ThemeProvider/index.tsx"),
				Rl = n("./src/reddit/actions/toaster.ts");
			const Ll = e => t => ({
					source: "toast",
					action: "view",
					noun: e
				}),
				Fl = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...Ct.actionInfo(t),
						reason: "primary"
					}
				}),
				Dl = e => t => ({
					source: "toast",
					action: "click",
					noun: e,
					actionInfo: {
						...Ct.actionInfo(t),
						reason: "secondary"
					}
				});
			var Ul = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				Bl = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				Gl = n("./src/reddit/icons/svgs/SnooFacepalm/index.tsx"),
				ql = n("./src/reddit/icons/svgs/SnooHappy/index.tsx"),
				Hl = n("./src/reddit/icons/svgs/Unlock/index.tsx"),
				Wl = n("./src/reddit/models/Toast/index.ts"),
				Vl = n("./src/reddit/selectors/structuredStyles.ts"),
				Jl = n("./src/reddit/components/Toaster/PlainBread.m.less"),
				zl = n.n(Jl);

			function Kl() {
				return (Kl = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ql = e => {
				const t = ui.b;
				switch (e.kind) {
					case Wl.b.Error:
					case Wl.b.AuthError:
					case Wl.b.SuccessEndBroadcast:
						return t.warning;
					case Wl.b.SuccessCommunity:
						return t.op;
					case Wl.b.SuccessCommunityGreen:
					case Wl.b.SuccessMod:
					case Wl.b.SuccessUnlockComment:
						return t.approved;
					case Wl.b.SuccessLockComment:
						return t.reported;
					case Wl.b.EuCookiePolicy:
					case Wl.b.UappBanner:
					case Wl.b.Undo:
					default:
						return t.op
				}
			};
			class Xl extends m.a.Component {
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
			const Yl = N.a.wrapped(Xl, "PlainBread", zl.a);
			var Zl = e => m.a.createElement(Yl, Kl({}, e, {
					style: {
						...e.style || {},
						"--Toaster-indicatorColor": Ql(e)
					}
				})),
				$l = n("./src/reddit/components/Toaster/StyledComponents.m.less"),
				ed = n.n($l);
			const td = N.a.span("Text", ed.a);
			var nd = n("./src/reddit/components/Toaster/index.m.less"),
				sd = n.n(nd);
			const {
				fbt: od
			} = n("./node_modules/fbt/lib/FbtPublic.js"), rd = N.a.wrapped(Gl.a, "AuthErrorToastIcon", sd.a), ad = N.a.wrapped(Me.i, "AuthErrorToastPrimaryButton", sd.a);
			class id extends m.a.Component {
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
					}, m.a.createElement(Zl, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(rd, null), m.a.createElement(td, null, od._("Something went wrong loading this page. Try again?", null, {
						hk: "3k6ebn"
					})), m.a.createElement(ad, {
						type: "submit"
					}, od._("Reload Page", null, {
						hk: "3Hrcyc"
					}))))
				}
			}
			var cd = id,
				ld = n("./src/lib/cookieConsent/index.ts"),
				dd = n("./src/reddit/controls/Link/index.tsx"),
				ud = n("./src/reddit/components/Toaster/EuCookiePolicyToast.m.less"),
				md = n.n(ud);
			const {
				fbt: pd
			} = n("./node_modules/fbt/lib/FbtPublic.js"), bd = N.a.div("Icon", md.a), hd = () => m.a.createElement(bd, {
				style: {
					backgroundImage: `url(${B.a.assetPath}/img/snoo-upvote.png)`
				}
			}), fd = N.a.wrapped(Me.i, "PrimaryButton", md.a), gd = N.a.wrapped(Zl, "Bread", md.a);
			class vd extends m.a.PureComponent {
				constructor() {
					super(...arguments), this.allowAllCookies = e => {
						e.preventDefault(), Object(ld.b)({
							opted: !0,
							nonessential: !0
						}), this.props.onClose("allow-all")
					}, this.allowEssentialCookiesOnly = e => {
						e.preventDefault(), Object(ld.b)({
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
					return m.a.createElement("section", null, m.a.createElement(gd, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n                translateY(${e.style.y}px)\n                scale(${e.style.x}, ${e.style.x})\n              `
						}
					}, m.a.createElement(hd, null), m.a.createElement("section", {
						className: md.a.EuCookiePolicyBody
					}, m.a.createElement(td, null, pd._("We use cookies on our websites for a number of purposes, including analytics and performance, functionality and advertising.", null, {
						hk: "4prHYN"
					}), " ", m.a.createElement(dd.a, {
						href: "https://www.redditinc.com/policies/cookie-notice",
						target: "_blank"
					}, pd._("Learn more about Reddit’s use of cookies", null, {
						hk: "1bxpLb"
					})), "."), m.a.createElement("section", {
						className: md.a.EuCookiePolicyOptions
					}, m.a.createElement("form", {
						onSubmit: this.allowEssentialCookiesOnly
					}, m.a.createElement(fd, {
						type: "submit"
					}, pd._("Reject non-essential", null, {
						hk: "M79jf"
					}))), m.a.createElement("form", {
						onSubmit: this.allowAllCookies
					}, m.a.createElement(fd, {
						type: "submit"
					}, pd._("Accept all", null, {
						hk: "1tnS6V"
					})))))))
				}
			}
			var Od, yd = vd;
			! function(e) {
				e.LoggedOutMaxSubscriptions = "max_subscriptions"
			}(Od || (Od = {}));
			var Cd = n("./src/reddit/controls/Typography/index.tsx"),
				xd = n("./src/reddit/components/Toaster/MilestoneToast.m.less"),
				Ed = n.n(xd);

			function Pd() {
				return (Pd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const jd = N.a.div("Container", Ed.a),
				_d = N.a.img("SideImage", Ed.a),
				Sd = N.a.div("Main", Ed.a),
				kd = N.a.div("SubTitle", Ed.a),
				wd = Cd.a,
				Id = N.a.wrapped(Me.j, "PrimaryLinkButton", Ed.a),
				Md = N.a.wrapped(Ne.a, "CloseIcon", Ed.a);
			class Nd extends m.a.Component {
				constructor() {
					super(...arguments), this.onSignup = e => {
						e.stopPropagation(), e.preventDefault(), this.props.onClose(), this.props.onSignup(), this.props.sendEvent(Fl(this.props.name))
					}
				}
				componentDidMount() {
					this.props.sendEvent(Ll(this.props.name))
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
					return m.a.createElement(jd, {
						key: t,
						style: {
							...s,
							transform: `\n            translateY(${s.y}px)\n            scale(${s.x}, ${s.x})\n          `
						}
					}, m.a.createElement(Md, {
						onClick: this.props.onClose
					}), m.a.createElement(_d, {
						srcSet: n
					}), m.a.createElement(Sd, null, m.a.createElement(kd, null, r), m.a.createElement(Cd.b, null, a), m.a.createElement(wd, null, e), m.a.createElement(Id, {
						"data-redditstyle": !0,
						href: "/register",
						onClick: this.onSignup
					}, o.fbt._("Sign Up", null, {
						hk: "2iMVSI"
					}))))
				}
			}
			const Td = Object(p.b)(null, e => ({
					onSignup: () => e(Object(Ur.k)())
				}))(Object(A.c)(Nd)),
				Ad = `${Rd("subscribe-cap.png")} 1x,\n  ${Rd("subscribe-cap@2x.png")} 2x,`;

			function Rd(e) {
				return `${B.a.assetPath}/img/banner/${e}`
			}
			const Ld = 3;
			var Fd = n("./src/lib/permanentCookieOptions.ts");
			const Dd = e => `${e}:1527210000`;
			var Ud = n("./src/reddit/components/Toaster/UappBannerToast.m.less"),
				Bd = n.n(Ud);
			const {
				fbt: Gd
			} = n("./node_modules/fbt/lib/FbtPublic.js"), qd = N.a.div("Icon", Bd.a), Hd = () => m.a.createElement(qd, {
				style: {
					backgroundImage: `url(${B.a.assetPath}/img/snoo-upvote.png)`
				}
			}), Wd = N.a.wrapped(Me.i, "PrimaryButton", Bd.a), Vd = N.a.wrapped(Zl, "Bread", Bd.a);
			class Jd extends m.a.Component {
				constructor() {
					super(...arguments), this.handleSubmit = e => {
						e.preventDefault(), Pe.a.set(Dt.j, Dd(Ld), Object(Fd.a)(10)), this.props.onClose()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return m.a.createElement("form", {
						onSubmit: this.handleSubmit
					}, m.a.createElement(Vd, {
						key: e.key,
						kind: e.toast.kind,
						style: {
							...e.style,
							transform: `\n              translateY(${e.style.y}px)\n              scale(${e.style.x}, ${e.style.x})\n            `
						}
					}, m.a.createElement(Hd, null), m.a.createElement(td, null, Gd._("Reddit is updating its {=User Agreement} and {=Privacy Policy} .", [Gd._param("=User Agreement", m.a.createElement(dd.a, {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank"
					}, Gd._("User Agreement", null, {
						hk: "XS57W"
					}))), Gd._param("=Privacy Policy", m.a.createElement(dd.a, {
						href: "https://www.reddit.com/help/privacypolicy",
						target: "_blank"
					}, Gd._("Privacy Policy", null, {
						hk: "4j7vx4"
					})))], {
						hk: "TxCpk"
					}), " "), m.a.createElement(Wd, {
						type: "submit"
					}, Gd._("Got it", null, {
						hk: "2WpndK"
					}))))
				}
			}
			var zd = Jd;

			function Kd() {
				return (Kd = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Qd = [],
				Xd = {
					stiffness: 200,
					damping: 24,
					precision: .01
				},
				Yd = {
					opacity: .5,
					x: .5,
					y: 50
				},
				Zd = {
					opacity: Object(M.spring)(0),
					x: Object(M.spring)(.6),
					y: Object(M.spring)(80, Xd)
				},
				$d = N.a.wrapped(Gl.a, "SnooFacepalm", sd.a),
				eu = N.a.wrapped(ql.a, "SnooHappy", sd.a),
				tu = N.a.wrapped(vs.b, "SubredditIcon", sd.a),
				nu = N.a.img("CustomIcon", sd.a),
				su = N.a.div("Container", sd.a),
				ou = N.a.wrapped(Ne.a, "Close", sd.a),
				ru = N.a.wrapped(Ul.a, "LockIcon", sd.a),
				au = N.a.wrapped(Hl.a, "UnlockIcon", sd.a),
				iu = N.a.wrapped(Bl.a, "RemoveIcon", sd.a),
				cu = e => m.a.createElement(m.a.Fragment, null, m.a.createElement(ou, Kd({
					className: "CloseIcon"
				}, e))),
				lu = N.a.wrapped(Zl, "Bread", sd.a),
				du = Object(g.c)({
					subredditIcon: Vl.b,
					toastSlices: e => e.toaster
				}),
				uu = Object(p.b)(du, e => ({
					dismissToast: t => () => e(Object(Rl.g)(t)),
					onButtonClick: (t, n) => () => {
						e(t), e(Object(Rl.g)(n))
					}
				}));
			class mu extends m.a.Component {
				constructor() {
					super(...arguments), this.getStyles = e => pu(e, this.props.toastSlices), this.getWillEnterStyles = () => Yd, this.getWillLeaveStyles = () => Zd
				}
				render() {
					return this.props.toastSlices.length ? m.a.createElement(M.TransitionMotion, {
						defaultStyles: Qd,
						styles: this.getStyles,
						willLeave: this.getWillLeaveStyles,
						willEnter: this.getWillEnterStyles
					}, e => m.a.createElement(su, null, e.map(e => {
						const t = e.data,
							n = {
								...e.style,
								transform: `\n                  translateY(${e.style.y}px)\n                  scale(${e.style.x}, ${e.style.x})\n                `
							};
						if (t.kind === Wl.b.Custom && void 0 !== t.customToastType) {
							const s = hu[t.customToastType];
							return m.a.createElement(s, {
								key: e.key,
								toast: t,
								style: n,
								onClose: this.props.dismissToast(t.id)
							})
						}
						if (t.kind === Wl.b.UappBanner) return m.a.createElement(zd, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						if (t.kind === Wl.b.EuCookiePolicy) return m.a.createElement(yd, {
							key: e.key,
							toast: t,
							style: n,
							sendViewEvent: () => this.props.sendEvent(Ll("eu_essential_policy")),
							onClose: e => {
								switch (this.props.dismissToast(t.id)(), e) {
									case "allow-all":
										this.props.sendEvent(Fl("eu_essential_cookie_policy"));
										break;
									case "allow-essential":
										this.props.sendEvent(Dl("eu_essential_cookie_policy"))
								}
							}
						});
						if (t.kind === Wl.b.AuthError) return m.a.createElement(cd, {
							key: e.key,
							toast: t,
							style: n,
							onClose: this.props.dismissToast(t.id)
						});
						const s = t.kind === Wl.b.Modal ? Me.i : Me.o,
							o = t.kind === Wl.b.Modal ? Me.l : Me.o;
						return m.a.createElement(lu, {
							className: t.kind === Wl.b.Modal ? sd.a.mModal : void 0,
							key: e.key,
							kind: t.kind,
							sendEvent: t.name ? () => this.props.sendEvent(Ll(t.name)) : void 0,
							style: n
						}, m.a.createElement("div", {
							className: sd.a.ContentWrapper
						}, bu(t, this.props.subredditIcon), t.kind === Wl.b.SuccessLockComment && m.a.createElement(ru, null), t.kind === Wl.b.SuccessUnlockComment && m.a.createElement(au, null), m.a.createElement(td, null, t.text)), m.a.createElement("div", {
							className: sd.a.ButtonsWrapper
						}, t.buttonText && t.buttonAction && m.a.createElement(s, {
							onClick: () => {
								this.props.onButtonClick(t.buttonAction, t.id)(), t.name && this.props.sendEvent(Fl(t.name))
							}
						}, t.buttonText), t.secondButtonText && t.secondButtonAction && m.a.createElement(o, {
							onClick: () => {
								this.props.onButtonClick(t.secondButtonAction, t.id)(), t.name && this.props.sendEvent(Dl(t.name))
							}
						}, t.secondButtonText)), m.a.createElement(cu, {
							onClick: () => {
								var e, n;
								null === (e = this.props.dismissToast(t.id)) || void 0 === e || e(), null === (n = t.onClose) || void 0 === n || n.call(t)
							}
						}))
					}))) : null
				}
			}
			const pu = (e = [], t) => t.map(e => ({
					data: e,
					key: e.id || (new Date).toString(),
					style: {
						opacity: Object(M.spring)(1),
						x: Object(M.spring)(1, Xd),
						y: Object(M.spring)(0, Xd)
					}
				})),
				bu = (e, t) => {
					if (e.customIconAsset) return m.a.createElement(nu, {
						src: e.customIconAsset
					});
					switch (e.kind) {
						case Wl.b.Error:
							return m.a.createElement($d, null);
						case Wl.b.SuccessEndBroadcast:
							return m.a.createElement(iu, null);
						case Wl.b.SuccessAward:
						case Wl.b.SuccessCommunity:
						case Wl.b.SuccessCommunityGreen:
							return m.a.createElement(eu, null);
						case Wl.b.SuccessMod:
							return m.a.createElement(tu, {
								primaryColor: t.color,
								iconUrl: t.url
							})
					}
				},
				hu = {
					[Wl.a.subscribeCap]: e => m.a.createElement(Td, Pd({
						name: Od.LoggedOutMaxSubscriptions,
						sideImage: Ad,
						title: o.fbt._("Oops! You need to Sign Up to join more communities", null, {
							hk: "21CE4w"
						}),
						subTitle: null,
						content: o.fbt._("Sign up to save your communities and secure your account", null, {
							hk: "45W3vB"
						})
					}, e))
				};
			var fu = uu(Object(A.c)(mu)),
				gu = n("./src/reddit/featureFlags/profileCollections.ts");
			const vu = () => e => ({
					source: "banner",
					noun: "update_old_browser",
					action: "view",
					banner: {
						id: "update_old_browser"
					}
				}),
				Ou = () => e => ({
					source: "banner",
					noun: "old_browser_r2",
					action: "click",
					banner: {
						id: "update_old_browser"
					}
				});
			var yu = n("./src/reddit/components/AlertBanner/Wrapper.m.less"),
				Cu = n.n(yu);
			var xu = N.a.div("Wrapper", Cu.a),
				Eu = n("./src/reddit/components/AlertBanner/index.m.less"),
				Pu = n.n(Eu);
			const {
				fbt: ju
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _u = () => m.a.createElement(xu, {
				className: Object(v.a)(Pu.a.wrapper, Pu.a.suspended)
			}, m.a.createElement("span", null, ju._("Your account has been suspended.", null, {
				hk: "36oqxa"
			}), " "), m.a.createElement("a", {
				className: Pu.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, ju._("Learn more", null, {
				hk: "1OTc8q"
			}))), Su = () => m.a.createElement(xu, {
				className: Object(v.a)(Pu.a.wrapper, Pu.a.fpr)
			}, m.a.createElement("span", null, ju._("Uh oh! We have suspended your account due to suspicious activity. Not to worry. You can continue using Reddit by resetting your password.", null, {
				hk: "4CbjOV"
			}), " "), m.a.createElement("a", {
				className: Pu.a.underlineLink,
				href: "https://www.reddithelp.com/hc/en-us/articles/360043504111"
			}, ju._("Learn more", null, {
				hk: "1OTc8q"
			}))), ku = ({
				updateLink: e,
				onClickOldReddit: t
			}) => m.a.createElement(xu, {
				className: Object(v.a)(Pu.a.wrapper, Pu.a.deprecated)
			}, m.a.createElement("span", null, ju._("Looks like you're using new Reddit on an old browser. The site may not work properly if you don't {update your browser} !", [ju._param("update your browser", m.a.createElement(wu, {
				link: e
			}, ju._("update your browser", null, {
				hk: "2TB4hp"
			})))], {
				hk: "gC2GV"
			}), " "), m.a.createElement("span", null, ju._("If you do not update your browser, we suggest you visit {old reddit} .", [ju._param("old reddit", m.a.createElement("a", {
				className: Pu.a.underlineLink,
				href: B.a.oldRedditUrl,
				onClick: t
			}, ju._("old reddit", null, {
				hk: "Sv1DJ"
			})))], {
				hk: "4qKEir"
			}))), wu = ({
				children: e,
				link: t
			}) => null !== t ? m.a.createElement("a", {
				className: Pu.a.underlineLink,
				href: t
			}, e) : m.a.createElement("span", null, e);
			class Iu extends m.a.PureComponent {
				constructor(e) {
					super(e), this.onClickOldReddit = () => {
						this.props.sendEvent(Ou())
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.props.browserInfo && this.props.browserInfo.isDeprecated && this.props.sendEvent(vu())
				}
				render() {
					const {
						browserInfo: e,
						showFPR: t,
						showSuspended: n
					} = this.props;
					return e && e.isDeprecated ? m.a.createElement(ku, {
						updateLink: e.updateLink,
						onClickOldReddit: this.onClickOldReddit
					}) : t ? m.a.createElement(Su, null) : n ? m.a.createElement(_u, null) : null
				}
			}
			var Mu = Object(A.c)(Iu),
				Nu = n("./src/reddit/components/AlertBanner/heights.ts");
			var Tu = n("./src/reddit/components/OfflineBanner/index.m.less"),
				Au = n.n(Tu);
			const {
				fbt: Ru
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Lu = e => {
					const t = Object(u.useCallback)(() => window.location.reload(), []),
						n = e.online ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAE9 0lEQVRoQ9WYW0hlZRTHf94TIXXAYRQzQwmFQQSVYSZ6UlESH+whRxMDX6IHJ1AQCXFQkSFUCIUeCkETUx/CF1FB8ClNpFFEX8T UKWkyxgFngjRvJ9Z278Pe57Yv51Kul33O3mut7/9fa32X9UVxwyXqhuMn0gR+BbJ0QfsU+CaYIEaSgEuAulzKQ3lGR0fLzzngA 6ckIkpAA68HGxWlQHCMw7Ghg4i5AhBIBE4d+HTO3OZgscB5bW0tk5OTbtPV1VXu3bv3v8/AZ8DXwAmQODw8TFNTE0dHR6SlpWl kHFeCY0MLGSgE1lW9D4Fp4AdAfmvyO5BpwZdflVATuF5ijJIAnAUDMpBtuAhIYa+GC7RhFQvxIFoGQh2YiJXQR8AU8C6wE+Lg+ HQXjkhFNAvhICCREhLh8m3IRLgGEQIXgGxgmqwA3wHfqt9CUmGhIvAe8KMDRPGyQzuwc5sES+AXIEe8tbS0MDAwYAnL2dkZt2/ f5tWrV5p+nNOsmBH4EmjzgeoKiE5ISOD01NEZzO3y6uqKmJgY7X8S8DdwB/hDffkx8L2/yPgj0AwMipGAfPjwIS9fvmRmZsbtx 9fJ0lL4/Sitra1RVFQUyMUn6hwyncTPgLcrKyuZm5Ne41ok3SkpKVRVVRmIBAPal63aH7gbH9GJj4/n/FyZKk+AL/R2nhmQqDf v7++TnZ3t1uvu7ubx48dsbGxQUFAQasxe/pKSkpQ5Ijg0SUxM1MrVgFn/R35fNTQ0MDY25jZ8/fo1ycnJHB8fK89Iya1bt9ja2 iIjI8M9pJYd/R6jJ2DoWTUrMRocHKS5WaZFZEWifnIibcS1TE1NKfPRLwH5ODEx4TY4PDwkKysLWfb+K6mpqWF6WlqJa/HsoQ0 ZCPXKEg7SISOQk5PD3t6eAePFxYV+TTfFr6tpRXd0dJTGxsaAdgEJLC0t8eDBA8WBbDDqvY2Xw9jYWC4vL5X3vb29jIyMsLNzf Xq2mkUNfGdnJ11dXVppBLRva2ujr6+vF+hwl5QOnUsAa8BkAF9gdnd3yc3N5e7du2xubhrIic3CwgJlZWWm0ZcgSMb0Ivb3799 neXnZy97XCmSYzerMvtJA+yPga6MxRWtDQUgJOU9Rx5U7mToDaQ9FWbPekPLRbRwGlbq6OsNKZQNbUKr+bvB8nYX+kd1bDlieK Q4KQZDGdggoc9HOhAyETXZTqWk5tebn51NeXu6Iil0CcpS9Y3VF0SNKTU1Vjh1WRGpdPaQFVC8uLubp06ey7HlNDn/HaeV2wS4 Bz3XdCgkrY6h+ZX3/yWtyBxjEVVJSglzAWpUwE/AZ7EAdme15sL29TV5enlW+dHR00NPTE1C/tLSUxcVF2fKV1tVOBt4B9trb2 3nyRPoIa2InCzbKx2+gzXpi21kQmlZIyF5jpqd+l/74T3/hMyPgaEl98eKF0lH5k/X1dQoL5fbdv1RXV0vr+jNQEkjPCgFHJMR IQEobqklmZiYHBwemtSh99+zsrJJMM2VTBZ0DpZwqKiqYn5838+v4e1xcnHYCsITNkpIOzbZ688zz589JT093DNTTcGVlRTmJq jd871t1bJeA5lfOwcptVH9/P62trVbH89IbHx9HLhJUsY3HtoEHgt+At7R39fX1CCAzGRoa4tGjR3q1N4G/zOx8fQ+WgN7n58B XNkAIgyEb+j5VQ0kgWCyO7G88gX8BA0iEQE02M2MAAAAASUVORK5CYII=" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmH AAAFhUlEQVRoQ+1ZX0gsZRT/reu/XEpcs2tqiEQpV31Qr5qpFHHTEoOuocVF3Bd7iOylfRDUlzDxImYYGD0kitKDokH5YLoQiL rQalLqiy89qGRqaYnh33XjjDPjzOzMfDOzu4XQ9yDuznfO+f3Od86Zc7614ZYv2y3Hj0gSeBrArxIHnQJ4LNwOiySBQCAQEPH2 9fXB7XYLny8AvAbg+1AJRYrAby6X687w8LAMn82mai4kDCEJ63jv2OfzOYqLi9UIlABY4h/8CKAQsB7KkSJA+GQhdHJygoSEBP peaZPiLA3AjpVwiiSBDwB8pgD1OoDvFN8JiWIJiyUhK57SkSECvwB41ore/5oAldY4AFEUcreBQCOAUQXQdwCMWQGvllBW9bDk XgSwyG+6AvA2gAmWkJHn/1YIhZSoekTCSeAvAE/oGFsBUGTEq2b2hErgDwBOMmi321FRUYGhoSFkZWVxGKiV6O/vR3d3N/b29q S4jgE8bgao1l4rBEjmhKoHAZ6fnzeNw+l04vDwUJCzgkG0qSdMDVe0GrrOzk50dHSYBq4UqK+vx8QEl8vfAHjTikItAlzSXVxc IDr6moPQiEk7TCsG1WQ0mjxh6+cA3jcTQoHl5WUUFd3kGxloaGjA2Jjlcs3kWlpaCp/Px+WNsFJTU7G7u6sbakGNFQnt7Nz0Vc nJyZibm0NeXp4MxMzMDCorK4UGjQnQyIbBwUE0Nzfj8vKSKwoi8ps2PChigghIPbC1tYX9/X0UFlLHC2xubiIzM5P7v7y8HDU1 NWhrazOCzfCe1tZW9PT0yE5CGsLKblaXQHt7O7q6ujjjAwMDaGlpkQGJRD6QAYfDwZVfOg1h+f1+IR/vAaA54jo3Fa6R9fDSZ5 QHgVflu22e61rPWrTn7OyMAyAUBZYMZ0+hW5LsIm5DBHJyctAdv4EHT1kjoFdltBxwenqK+Ph4mcHFxUXuZSl1vJLAQ6/X+1VZ WZlMMCkpCYfFfwY5zegJCDGsPEG7B0hMSsLBwQHrQMTnvDM0T4A2cjEh9Qy1AXcz7uD3l62dAEnZo2zw3w/GacYJkmQ2R0AQ/D AT+OR5YPsUeGbeWPwLkB3RNvz9inkClLxCSZ2enuYqn14I0cMFqpJqsZmWlia+I4wkL6sIvPUzYH+pHuPj45ohJE1mPnx+APCC VhWi7z8G0G4WICuIY2JiuBfUo+eA+07gHsFQhKqaDoHA0dEREhMTZd4P+sAreAPAt+EmQLo9Hg+qqqo4M3RnRK0DaxEBSRh9Ce Bd2clqKNB8H7AMhvu5pAT/BKBAqV+zG43ECVghxxP4AsB7qiGmodTvdrujent7rdgMm8zS0hJKSugmUvvqUW+gCSmMhKOPjY0F vVUZPb8qabXWwWgIcQViamoKtbW1MhkKLWq5FTMuqMqcn58HARF6emrQjo9pFDa+eAJ0DXPTWyvEWfOo7BQEj+Tm5mJ9fV1URa 0AzQ20VldXkZ+fH4RSrTnTo0Ivr6srwq5/c80i8DWABxsbG8jOzkZGRgZoRtBa4Rw7eV00l8fqEWUR4EKJ/lAcx8XRNab+IsPb 29tIT09nbWU6guV95vHwFkwlMxFobGzE6KjyCtQYHyOJK9XEOoHA5OQk6urqjFnnby8WFha4kdPMIsJNTU2CCAuXqFpvI00TJ2 ZeaHQDRzOyGRm6QKAmkV/MmFc6RY8AlQCbUTBer1f0uhEZl8uFkZERKR4qlVzZMbN0X2QpKSlB9V48Y/VfHLnpiiY46aJ5eG1t jWvgFIvGPPlmM+gZWe6nX05WVlZQUHDdQ83OzqK6ulow8SmAVrrAA0DT8kO+U7yrg4F+kXkE4COTOLUrFkPRPoAnJXvoxksM2H CBCEWP4WwPxUgkZf8nEEnvGtH9D0h1xECJaZxWAAAAAElFTkSuQmCC";
					return m.a.createElement("div", {
						className: Object(v.a)(e.className, Au.a.banner, {
							[Au.a.online]: e.online,
							[Au.a.hidden]: !e.showBanner
						})
					}, m.a.createElement("img", {
						className: Au.a.snoomoji,
						src: n
					}), m.a.createElement("span", {
						className: Au.a.title
					}, e.online ? Ru._("Found the internet!", null, {
						hk: "fMghd"
					}) : Ru._("hmm… no internet?", null, {
						hk: "28GsiU"
					})), m.a.createElement(ps.a, {
						className: Au.a.refresh,
						name: "refresh_fill",
						onClick: t
					}))
				},
				Fu = n("./src/reddit/constants/componentSizes.ts"),
				Du = n("./src/reddit/constants/elementIds.ts"),
				Uu = n("./src/reddit/constants/parameters.ts"),
				Bu = n("./src/reddit/constants/posts.ts"),
				Gu = n("./src/reddit/contexts/InsideOverlay.tsx"),
				qu = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				Hu = n("./src/reddit/helpers/postCollection.ts"),
				Wu = n("./src/reddit/models/Theme/index.ts"),
				Vu = n("./src/reddit/selectors/experiments/survey.ts"),
				Ju = n("./src/reddit/selectors/notificationBanner.ts"),
				zu = n("./src/reddit/selectors/posts.ts"),
				Ku = n("./src/reddit/components/AppRouter/index.m.less"),
				Qu = n.n(Ku);

			function Xu() {
				return (Xu = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Yu = ({
					className: e,
					shouldDisplayPinnedSubscriptions: t,
					...n
				}) => m.a.createElement("div", Xu({
					className: Object(v.a)(Qu.a.main, {
						[Qu.a.mShowingPaddedPinnedDescriptions]: t
					}, e)
				}, n)),
				Zu = Object(y.a)(({
					className: e,
					overlayScrollContainerEl: t,
					theme: n,
					...s
				}) => {
					const o = Object(D.a)({
						theme: n,
						...s
					});
					return m.a.createElement("div", Xu({
						className: Object(v.a)(Qu.a.overlayContentWrapper, e),
						style: {
							"--comments-overlay-background": Object(Wu.g)(o.canvas, o.canvasImgUrl, o.canvasImgPosition),
							"--comments-overlay-offset": `${Object(Gt.c)(t)}px`
						}
					}, s))
				}),
				$u = ({
					className: e,
					divRef: t,
					...n
				}) => {
					const s = Object(u.useContext)(f.a);
					return m.a.createElement("div", Xu({
						className: Object(v.a)(Qu.a.lightboxHeaderWrapper, e, {
							[Qu.a.lightboxHeaderWrapperExp]: s
						})
					}, n, {
						ref: t
					}))
				},
				em = Object(Ju.a)(jl.a.EmailCollectionBannerId),
				tm = Object(p.b)(() => Object(g.c)({
					connection: e => e.connection,
					currentPage: e => e.platform.currentPage,
					frontpageSignupVariant: e => {
						const {
							currentPage: t
						} = e.platform;
						return Object(U.a)(e, {
							pageLayer: t
						})
					},
					hasInvalidSession: xt.u,
					isLoggedIn: xt.J,
					isNpsSurveyEnabled: Vu.c,
					isSubscriptionsPinned: hs.b,
					isSuspended: xt.P,
					isFPR: xt.H,
					posts: zu.L,
					profileCollectionsEnabled: gu.a,
					showEmailCollectionBanner: e => !Object(zt.L)(e.platform.currentPage) && em(e)
				}), e => ({
					onClickOutsideOverlay: t => e(Object(h.b)(t)),
					onUnpinSubscriptions: () => e(Object(_.j)()),
					onPostDismissTrigger: () => e(Object(S.g)())
				})),
				nm = (e, t) => !(!e.state || !e.state[Yo.a.IsOverlay] || t === e);
			class sm extends m.a.Component {
				constructor(e) {
					super(e), this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage, this.isNarrowScreen = !1, this.isWideScreen = !1, this.didCountSurveyTrigger = !1, this.resizeHandler = d()(() => {
						const e = window.innerWidth;
						this.props.isSubscriptionsPinned && e < Fu.l && this.props.onUnpinSubscriptions()
					}, O.I), this.hideSignupUpsell = () => {
						this.setState({
							isSignupUpsellHidden: !0
						})
					}, this.getIsPostCollection = () => {
						const {
							currentPage: e,
							posts: t,
							profileCollectionsEnabled: n
						} = this.props;
						if (Object(zt.x)(e)) {
							const s = e && e.urlParams && e.urlParams.partialPostId,
								o = `${O.Fb.Post}_${s}`,
								r = t && s && t[o],
								a = r && r.belongsTo.type === Bu.a.PROFILE;
							return !(!r || !Object(Hu.a)(r) || a && !n)
						}
						return !1
					}, this.state = {
						isSignupUpsellDisplayed: Object(U.c)(e.frontpageSignupVariant),
						isSignupUpsellHidden: !1
					}
				}
				componentDidMount() {
					this.resizeHandler(), window.addEventListener("resize", this.resizeHandler)
				}
				UNSAFE_componentWillUpdate(e) {
					const {
						isNpsSurveyEnabled: t,
						location: n
					} = this.props, s = n.state && n.state[Yo.a.IsOverlay], o = Object(P.a)(this.previousLocation, e.location);
					t && s && o && !this.didCountSurveyTrigger && (this.props.onPostDismissTrigger(), this.didCountSurveyTrigger = !0);
					const r = Object(P.a)(this.previousLocation, this.props.location),
						a = s ? this.previousPage : this.props.currentPage;
					if (a) {
						const {
							meta: t,
							urlParams: n
						} = a, s = t && (t.name === O.Jb.INDEX || t.name === O.Jb.SUBREDDIT && n.subredditName === As.b.Popular), o = Object(U.c)(this.props.frontpageSignupVariant), r = Object(U.c)(e.frontpageSignupVariant);
						s || o || !r ? o && !r && this.setState({
							isSignupUpsellDisplayed: !1
						}) : this.setState({
							isSignupUpsellDisplayed: !0,
							isSignupUpsellHidden: !1
						})
					}
					"POP" === e.history.action || s || o || r || (this.previousHistory = this.props.history, this.previousLocation = this.props.location, this.previousPage = this.props.currentPage);
					const i = nm(e.location, this.previousLocation);
					x.a.write(() => {
						document.body.style.overflow = i ? "hidden" : ""
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
					} = this.state, v = this.context, y = nm(d, this.previousLocation);
					d.state && d.state[Yo.a.IsOverlay] && !y ? d.state[Yo.a.IsOverlay] = !1 : d.state && (this.previousLocation === d || d.state[Yo.a.CloseLocation] && this.previousLocation.state && this.previousLocation.state[Yo.a.CloseLocation] && this.previousLocation.state[Yo.a.CloseLocation] === d.state[Yo.a.CloseLocation] ? d.state[Yo.a.CloseLocation] = {
						...this.previousLocation,
						state: c()(this.previousLocation.state, Yo.a.CloseLocation)
					} : d.state[Yo.a.CloseLocation] = this.previousLocation);
					const C = Object(P.a)(this.previousLocation, d),
						x = y || C ? this.previousLocation : d,
						E = y || C ? this.previousPage : t,
						j = !(!(E && E.meta && E.meta.name === O.Jb.SEARCH_RESULTS && E && E.queryParams) || E.queryParams[Uu.s]),
						_ = !(!E || !E.meta || E.meta.name !== O.Jb.MODERATION_PAGES),
						S = Object(zt.x)(E),
						w = this.getIsPostCollection(),
						I = f && !g,
						M = e.showBanner;
					return s ? o.fbt._("Sorry, we have failed you. Try refreshing!", null, {
						hk: "3qsDla"
					}) : m.a.createElement(m.a.Fragment, null, m.a.createElement(zt.a.Provider, {
						value: E
					}, m.a.createElement(Lo.c, {
						isOverlayOpen: y
					}, m.a.createElement(Al.a, {
						forceRedditTheme: j
					}, f && m.a.createElement(xe, {
						frontpageSignupVariant: n,
						onClose: this.hideSignupUpsell
					}), m.a.createElement(om, {
						browserInfo: v,
						connection: e,
						isFPR: r,
						isInline: I,
						isSuspended: l,
						showOffline: M
					})), m.a.createElement(Gu.a.Provider, {
						value: !1
					}, m.a.createElement(Al.a, {
						forceRedditTheme: j || _,
						isCommentsPage: S
					}, m.a.createElement(rm, {
						frontpageSignupVariant: n,
						isCommentsPage: S,
						isInline: I,
						isLoggedIn: a,
						isSubscriptionsPinned: i,
						location: x,
						overlayIsOpen: y,
						page: E,
						routes: b,
						showEmailCollectionBanner: h,
						browserInfo: v,
						showFPR: r,
						showOffline: M,
						showSuspended: l
					}))))), m.a.createElement(zt.a.Provider, {
						value: t
					}, y && m.a.createElement(Gu.a.Provider, {
						value: !0
					}, m.a.createElement(Al.a, {
						isOverlay: !0
					}, m.a.createElement(am, {
						browserInfo: v,
						isPostCollection: w,
						location: d,
						onClickOutsideOverlay: p,
						page: t,
						routes: b,
						showEmailCollectionBanner: h,
						showFPR: r,
						showOffline: M,
						showSuspended: l
					}))), m.a.createElement(Al.a, null, m.a.createElement(u.Fragment, null, m.a.createElement(fu, null), m.a.createElement(Tl.a, null), h && m.a.createElement(k.a, null), m.a.createElement(Wt, null), m.a.createElement(ls, null)))))
				}
			}
			sm.contextType = C.a;
			const om = Object(A.c)(e => {
					const t = Object(u.useContext)(f.a),
						{
							browserInfo: n,
							connection: s,
							isFPR: o,
							isInline: r,
							showOffline: a,
							isSuspended: i
						} = e,
						c = {
							browserInfo: n,
							showFPR: o,
							showSuspended: i,
							showOffline: a,
							navExperiment: t
						};
					return m.a.createElement(u.Fragment, null, m.a.createElement(Mu, c), m.a.createElement(El, {
						className: Object(v.a)(Qu.a.header, Object(Nu.b)(Qu.a, c), {
							[Qu.a.inline]: r
						})
					}), m.a.createElement(Lu, {
						className: Object(v.a)(Qu.a.offlineBanner, Object(Nu.b)(Qu.a, c)),
						online: s.online,
						showBanner: s.showBanner
					}))
				}),
				rm = Object(A.c)(class extends m.a.Component {
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
						return m.a.createElement(Yu, {
							"aria-hidden": s,
							className: Object(v.a)(Object(Nu.b)(Qu.a, this.props), {
								[Qu.a.withUpsell]: !!e,
								[Qu.a.inline]: r
							}),
							shouldDisplayPinnedSubscriptions: l
						}, l && m.a.createElement(Nl, {
							className: Object(v.a)(Qu.a.pinnedSubscriptions, Object(Nu.b)(Qu.a, this.props)),
							"data-redditstyle": !0
						}), m.a.createElement(b.f, {
							location: t
						}, n), c && m.a.createElement("div", {
							className: Object(v.a)(Qu.a.bottomSpacer, Object(Nu.a)(Qu.a, this.props))
						}))
					}
				});
			class am extends m.a.Component {
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
							t(e.state[Yo.a.CloseLocation])
						}
					}, this.onOverlayMouseDown = e => {
						this.mouseDownInWrapper = e.target === this.state.overlayScrollContainerEl && e.clientX <= window.innerWidth - 17
					}, this.state = {
						overlayScrollContainerEl: null,
						mediaIsFullscreen: !1
					}
				}
				componentDidMount() {
					document.addEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.lightboxHeaderEl && (this.lightboxHeaderEl.focus(), this.listingFocusSubscriptionId = qu.a.subscribe(e => {
						e.isListingFocused && this.lightboxHeaderEl.querySelector(E.a).focus()
					}))
				}
				componentWillUnmount() {
					document.removeEventListener("webkitfullscreenchange", this.handleWebkitFullscreenChange), this.listingFocusSubscriptionId && qu.a.unsubscribe(this.listingFocusSubscriptionId)
				}
				render() {
					const {
						isPostCollection: e,
						page: t,
						routes: n
					} = this.props, {
						overlayScrollContainerEl: s
					} = this.state, o = !(!t || !t.meta || t.meta.name === O.Jb.SUBREDDIT_CREATION || t.meta.name === O.Jb.PUBLIC_ACCESS_NETWORK), r = e;
					return m.a.createElement(Zu, {
						className: Object(v.a)(Object(Nu.b)(Qu.a, this.props), {
							[Qu.a.mIsCommentsLightbox]: o,
							[Qu.a.mIsLargeCommentsLightbox]: r
						}),
						overlayScrollContainerEl: s
					}, m.a.createElement("div", {
						className: Object(v.a)(Qu.a.overlayWrapper, Object(Nu.b)(Qu.a, this.props))
					}, m.a.createElement("div", {
						className: Object(v.a)(Qu.a.overlayScrollContainer, {
							[Qu.a.mediaIsFullscreen]: this.state.mediaIsFullscreen
						}),
						id: Du.d,
						ref: this.overlayRefFn,
						onMouseDown: this.onOverlayMouseDown,
						onMouseUp: this.onOverlayMouseUp
					}, o && m.a.createElement($u, {
						divRef: this.lightboxHeaderRefFn,
						className: Object(v.a)(Object(Nu.b)(Qu.a, this.props), {
							[Qu.a.mIsLargeCommentsLightbox]: r
						}),
						tabIndex: -1
					}, m.a.createElement(Pl.a, {
						page: t
					})), m.a.createElement(b.f, null, n), m.a.createElement("div", {
						className: Object(v.a)(Qu.a.bottomSpacer, Object(Nu.a)(Qu.a, this.props))
					}))))
				}
			}
			t.b = tm(Object(A.c)(sm))
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
		"./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/reddit/components/GlobalModalContainer/registry.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/modal.m.less"),
				l = n.n(c);
			const d = Object(s.a)({
				resolved: {},
				chunkName: () => "EconAchievementFlairModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("EconAchievementFlairModal").then(n.bind(null, "./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/index.tsx"
				}
			});
			Object(a.b)(i.a.ACHIEVEMENT_FLAIR, e => r.a.createElement(d, {
				onOverlayClick: e,
				withOverlay: !0,
				className: l.a.modalBody
			}))
		},
		"./src/reddit/components/Econ/AchievementFlair/AchievementFlairModal/modal.m.less": function(e, t, n) {
			e.exports = {
				modalBody: "_1DOPDmls0bV8PcYMzJyQXx"
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
				O = Object(c.c)({
					award: b.b,
					awardIcon: p.d
				}),
				y = Object(i.b)(O, e => ({
					onClose: () => e(Object(u.g)(m.a.GOLD_GILD_ANIMATION_OVERLAY))
				}));
			t.default = Object(l.a)(y(e => {
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
				O = n("./src/reddit/helpers/trackers/goldTopNav.ts"),
				y = n("./src/reddit/icons/fonts/index.tsx"),
				C = n("./src/reddit/selectors/experiments/econStorefrontClaim.ts"),
				x = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
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
					activeSaleConfig: x.a,
					activeTooltipId: E.a,
					coinPurchaseDropdownIsOpen: e => Object(E.b)(S)(e),
					isFreeAwardEventEnabled: e => Object(C.a)(e) && Object(x.g)(e)
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
				I = Object(c.b)(k, w);
			class M extends i.a.Component {
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
							r(Object(O.d)("get_coins_cta", e))
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
					}, i.a.createElement(y.a, {
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
			t.a = I(Object(f.c)(M))
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
		"./src/reddit/components/Header/QuickLinks/index.m.less": function(e, t, n) {
			e.exports = {
				container: "x0hiXHicn7r3BG9m1FJH4",
				row: "_1vXXD2qKLnHetdKvisFzBD",
				icon: "_3dZnYgFFpifT-M_Vs2FAq6",
				rpanVideoIcon: "_2BMLeQ_Q2tfBzrcfsUAQZi"
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
				visitOldReddit: "_3Z5rfDuvQDBNfBgpXdnt_b"
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
				notificationInboxIconContainer: "_3AUJR143r5MT-j2-3Y0teA",
				loggedInGoogleOneTap: "GmCFJz0Lv_7OTbtdvK2me",
				icon2020: "_3uVYL9qgX3QSEa_F4F-DPv",
				welcomeTooltip: "_-3krX6mGS5KqbsSJp3Off",
				visible: "TMw6pg71oGapqgV0jlLaN",
				welcomeTooltipArrow: "_1GJb2q6mrucs3GJ9EpbKuZ"
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
			}, d), n && r.a.createElement(a.q, {
				onClick: u,
				Icon: Object(i.b)("close_fill"),
				className: Object(s.a)(l.a.closeIcon, l.a.closeButton),
				size: a.c.XXS,
				priority: a.b.Plain
			})), o && r.a.createElement("p", {
				className: l.a.bannerDescription
			}, o), r.a.createElement("div", {
				className: l.a.bannerButtonsContainer
			}, c && r.a.createElement(a.q, {
				text: c,
				priority: a.b.Tertiary,
				className: Object(s.a)(l.a.button, l.a.primaryButton),
				size: a.c.XS,
				onClick: m
			}), t && r.a.createElement(a.q, {
				text: t,
				onClick: u,
				priority: a.b.Plain,
				size: a.c.XS,
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
				return J
			})), n.d(t, "b", (function() {
				return X
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
			const O = ({
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
			var y = n("./src/reddit/components/NotificationUnit/Loader.tsx"),
				C = n("./src/reddit/components/ResizeSensor/index.tsx"),
				x = n("./src/reddit/components/InboxTooltip/index.m.less"),
				E = n.n(x);
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
						disableNotificationUpdates: t,
						hideNotification: n,
						hideSubredditNotifications: s,
						blockAwarder: o,
						index: a,
						isInboxPostEmbedEnabled: i,
						markNotificationAsRead: c,
						notification: l,
						setActiveOverflowMenuId: d,
						onItemClick: u
					} = this.props, m = a + 1 <= P;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						ref: this.ref,
						className: E.a.notificationResizeWrapper
					}, r.a.createElement(y.a, {
						activeOverflowMenuId: e,
						disableNotificationUpdates: t,
						hideNotification: n,
						hideSubredditNotifications: s,
						isInboxPostEmbedEnabled: i,
						isInTooltip: !0,
						markNotificationAsRead: c,
						notification: l,
						setActiveOverflowMenuId: d,
						onItemClick: u,
						blockAwarder: o
					}), !!m && r.a.createElement(C.a, {
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
			const I = {},
				M = "",
				N = 0,
				T = "200px",
				A = "250px",
				R = 100,
				L = .5,
				F = 5;
			class D extends r.a.Component {
				constructor() {
					super(...arguments), this.container = r.a.createRef(), this.state = {
						notificationHeights: I,
						currentNotificationCursorIndex: -1
					}, this.resetOverflowMenu = () => {
						this.props.activeOverflowMenuId.length > N && this.props.setActiveOverflowMenuId(M)
					}, this.getContainerHeight = () => {
						const {
							notificationHeights: e
						} = this.state, {
							isInboxExposureBannerEnabled: t,
							isDNInboxPromptBannerEnabled: n,
							isInboxPrivacyPolicyBannerEnabled: s
						} = this.props, o = n || t || s;
						let r = 0;
						for (const a in e) r += e[a];
						return 0 === r ? o ? A : T : (o && (r += R), r)
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
						isPending: a,
						notifications: i,
						setDesktopNotificationsPromptSeen: c,
						setInboxExposureBannerSeen: l,
						setInboxPrivacyPolicyBannerSeen: d,
						showBrowserNotificationsPermissionSettings: m
					} = this.props, p = !(!i || !i.length), b = this.getContainerHeight(), h = i.length > this.state.currentNotificationCursorIndex + F, f = s || n || t;
					return r.a.createElement("div", {
						className: E.a.notificationList,
						ref: this.container,
						style: {
							height: b,
							maxHeight: b
						}
					}, f && r.a.createElement("div", {
						className: E.a.notificationBannerContainer
					}, s && r.a.createElement(v.a, {
						onClose: d,
						pageType: S.b.MiniInbox
					}), t && r.a.createElement(g, {
						onTurnOnBrowserNotifications: m,
						onClose: c
					}), n && r.a.createElement(O, {
						onClose: l
					})), !p && a && r.a.createElement(_.a, null), !p && !a && r.a.createElement(k.a, {
						isBannerEnabled: f
					}), p && this.renderNotifications(), o && p && !a && (e || h) && r.a.createElement(u.a, {
						onChange: this.loadNotifications,
						rootMargin: "0px 0px 0px 0px",
						threshold: L
					}, r.a.createElement("div", null)))
				}
			}
			var U = n("./src/reddit/controls/InternalLink/index.tsx"),
				B = n("./src/reddit/hooks/useDesktopNotificationsPromptSeen.ts"),
				G = n("./src/reddit/hooks/useInboxExposureSeen.ts"),
				q = n("./src/reddit/hooks/useInboxPrivacyPolicyBannerSeen.ts"),
				H = n("./src/reddit/hooks/useTracking.ts"),
				W = n("./src/reddit/icons/fonts/index.tsx");

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const J = [],
				z = l.a.div("StyledDropdown", E.a),
				K = ({
					onMessagesClick: e,
					onBarClick: t,
					markAllAsRead: n,
					messagesBadgeCount: a,
					sendInboxClickSettings: i
				}) => {
					const l = !!a,
						u = Object(o.useCallback)(() => {
							e(), t()
						}, [e, t]),
						m = Object(o.useCallback)(() => {
							i(), t()
						}, [i, t]);
					return r.a.createElement("nav", {
						className: E.a.topNav
					}, r.a.createElement("span", {
						className: E.a.topNavTitle
					}, s.fbt._("Notifications", null, {
						hk: "1sYFjx"
					})), r.a.createElement("span", {
						className: E.a.topNavLinks
					}, r.a.createElement("span", {
						className: E.a.messagesLinkContainer
					}, r.a.createElement(U.a, {
						className: Object(c.a)(E.a.messagesLink, {
							[E.a.mActive]: l
						}),
						onClick: u,
						to: l ? "/message/unread" : "/message/messages"
					}, s.fbt._("Messages", null, {
						hk: "hulKY"
					}), r.a.createElement(d.a, {
						className: E.a.badgeCount,
						isActive: l,
						unreadCount: a
					}))), r.a.createElement("button", {
						className: E.a.navLink,
						onClick: n
					}, r.a.createElement(W.a, {
						name: "mark_read",
						className: E.a.icon
					})), r.a.createElement(U.a, {
						className: E.a.navLink,
						onClick: m,
						to: "/settings/notifications"
					}, r.a.createElement(W.a, {
						name: "settings",
						className: E.a.icon
					}))))
				},
				Q = e => r.a.createElement("div", {
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
				X = e => {
					const t = Object(H.a)(),
						{
							clearMessageTabBadgeCount: n,
							inboxBadgeCount: s,
							isPending: o,
							messagesBadgeCount: c,
							notifications: l,
							hideTooltip: d,
							isInboxExposureBannerEnabled: u,
							isInboxPolicyBannerEnabled: m,
							isDNInboxPromptBannerFirstTimeEnabled: p,
							isDNInboxPromptBannerPersistEnabled: b,
							userId: h
						} = e,
						[f, g] = Object(G.a)(h),
						[v, O] = Object(B.a)(h),
						[y, C] = Object(q.a)(h),
						x = !(!l || !l.length),
						P = Object(a.a)(),
						j = P === i.a.Closed || P === i.a.Default || P === i.a.Denied,
						_ = (p || b) && j && !v;
					return r.a.createElement(z, null, r.a.createElement("div", {
						className: E.a.tooltipContainer
					}, r.a.createElement(K, {
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
						onBarClick: d
					}), r.a.createElement(D, V({}, e, {
						isPending: o,
						onItemClick: d,
						setInboxExposureBannerSeen: g,
						setDesktopNotificationsPromptSeen: O,
						isInboxExposureBannerEnabled: u && !f,
						isDNInboxPromptBannerEnabled: _,
						isInboxPrivacyPolicyBannerEnabled: m && !y,
						setInboxPrivacyPolicyBannerSeen: C
					})), (x || o) && r.a.createElement(Q, {
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
					}, r.a.createElement(l.q, {
						kind: l.a.Button,
						priority: l.b.Plain,
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
				h = n("./src/reddit/components/PostTitle/index.tsx"),
				f = n("./src/reddit/components/TrackingHelper/index.tsx"),
				g = n("./src/reddit/constants/colors.ts"),
				v = n("./src/reddit/controls/Button/index.tsx"),
				O = n("./src/reddit/helpers/postCollection.ts"),
				y = n("./src/reddit/icons/fonts/index.tsx"),
				C = n("./src/reddit/models/Media/index.ts"),
				x = n("./src/reddit/models/Vote/index.ts"),
				E = n("./src/reddit/selectors/experiments/categories.ts"),
				P = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				j = n("./src/reddit/selectors/platform.ts"),
				_ = n("./src/reddit/contexts/Post/index.tsx"),
				S = n("./src/reddit/components/LightboxHeader/index.m.less"),
				k = n.n(S);
			const w = Object(i.c)({
					isInCategoriesExperiment: E.a,
					post: j.l,
					isVoteCountAnimation: (e, {
						page: t,
						post: n
					}) => {
						if (!t && !n) return !1;
						const s = t && Object(j.l)(e, {
							page: t
						}) || n;
						return !!s && Object(P.g)(e, {
							post: s
						})
					}
				}),
				I = Object(a.b)(w, (e, {
					sendEvent: t
				}) => ({
					close: () => {
						e(Object(m.a)(t, !0))
					},
					toggleVote: (t, n) => e(n === x.a.upvoted ? Object(u.db)(t) : Object(u.w)(t))
				}), (e, t, n) => ({
					...e,
					...t,
					...n,
					onVoteClick: s => {
						const o = e.post || n.post;
						o && t.toggleVote(o.id, s)
					}
				}));
			class M extends r.a.Component {
				constructor() {
					super(...arguments), this.closeLightbox = e => {
						e.preventDefault(), e.stopPropagation(), this.props.close()
					}
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
					} = this.props, m = T[d && d.media ? d.media.type : C.o.EMBED], f = !d && (null === (e = null == i ? void 0 : i.meta) || void 0 === e ? void 0 : e.name) === l.Jb.META_MEMBERSHIP_PAYWALL_PAGE, v = d ? _.a : function({
						children: e,
						postId: t
					}) {
						return e
					};
					return r.a.createElement("div", {
						className: Object(c.a)(k.a.container, t, {
							[k.a.isCollection]: d && Object(O.a)(d)
						})
					}, r.a.createElement(v, {
						postId: null == d ? void 0 : d.id
					}, r.a.createElement("div", {
						className: k.a.postDetails
					}, d && r.a.createElement(o.Fragment, null, u ? void 0 : r.a.createElement(p.a, {
						className: k.a.horizontalVotes,
						compact: !1,
						light: !0,
						model: d,
						onVoteClick: a,
						redditStyle: !0
					}), r.a.createElement(y.a, {
						name: m,
						className: k.a.mediaIcon
					}), r.a.createElement(h.c, {
						className: k.a.postTitle,
						post: d,
						size: h.b.Small,
						hideSourceLink: !0,
						isCommentsPage: !0,
						isOverlay: !0,
						nowrap: !0,
						titleColor: g.b.lightboxHeaderText,
						titleLinkClassName: k.a.postTitleLink,
						showCategoryTag: !0
					}), r.a.createElement(b.a, {
						post: d,
						nowrap: !0,
						sendEvent: this.props.sendEvent,
						showCategoryTag: this.props.isInCategoriesExperiment
					})), f && i && i.urlParams.subredditName && r.a.createElement("div", {
						className: k.a.membershipPaywallTitle
					}, s.fbt._("{communityName} Special Membership", [s.fbt._param("communityName", `r/${i.urlParams.subredditName}`)], {
						hk: "4vP4VY"
					}))), r.a.createElement("div", {
						className: k.a.actions
					}, r.a.createElement(N, {
						onClick: n || this.closeLightbox
					}))))
				}
			}
			const N = r.a.memo(e => r.a.createElement(v.q, {
					className: k.a.CloseButton,
					size: v.c.XS,
					onClick: e.onClick,
					priority: v.b.Plain,
					Icon: Object(y.b)("close"),
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
				T = {
					[C.o.GIFVIDEO]: d.a.gif_post,
					[C.o.IMAGE]: d.a.image_post,
					[C.o.TEXT]: d.a.text_post,
					[C.o.RTJSON]: d.a.text_post,
					[C.o.VIDEO]: d.a.video_post,
					[C.o.EMBED]: d.a.embed,
					[C.o.LIVEVIDEO]: d.a.video_live,
					[C.o.GALLERY]: d.a.media_gallery
				};
			t.a = Object(f.c)(I(M))
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
				return O
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "k", (function() {
				return x
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
				return I
			})), n.d(t, "a", (function() {
				return M
			})), n.d(t, "s", (function() {
				return N
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
				O = o.a.div("ModalMetaText", u.a),
				y = o.a.label("ModalFormItem", u.a),
				C = o.a.wrapped(c.a, "ModalInput", u.a),
				x = o.a.label("ModalInputLabel", u.a),
				E = o.a.footer("ModalFooter", u.a),
				P = o.a.header("ModalHeader", u.a),
				j = o.a.div("ModalTitle", u.a),
				_ = o.a.div("ModalAnnotation", u.a),
				S = o.a.div("ModalMain", u.a),
				k = o.a.textarea("TextArea", u.a),
				w = o.a.wrapped(i.i, "WarningButton", u.a),
				I = o.a.wrapped(i.i, "PrimaryButton", u.a),
				M = o.a.wrapped(i.l, "CancelButton", u.a),
				N = o.a.wrapped(i.o, "RemoveButton", u.a),
				T = ({
					className: e,
					...t
				}) => a.a.createElement(i.q, m({
					kind: i.a.Button,
					priority: i.b.Primary,
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
				getComponent: () => Object(o.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("ModQueue~ModQueuePages~ModerationPages"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/components/MutedUserList/MuteUserModal/_MuteUserModal.tsx"))).then(e => e.default),
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
				return Object(a.e)(e => Object(i.b)(e) || Object(c.G)(e)) ? r.a.createElement(l, null) : null
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
		"./src/reddit/components/Survey/hooks.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return x
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
				O = n("./src/reddit/models/Toast/index.ts"),
				y = n("./src/reddit/selectors/experiments/index.ts"),
				C = n("./src/reddit/selectors/user.ts");
			const x = () => {
					const e = Object(i.d)(),
						[t, n] = Object(a.useState)(null),
						s = Object(v.a)(),
						o = Object(i.e)(C.h),
						l = Object(i.e)(C.sb),
						m = Object(i.e)(y.a, r.a),
						p = Object(i.e)(u.c),
						b = Object(i.e)(u.a),
						f = Object(i.e)(u.b),
						g = Object(i.e)(u.d),
						O = Object(a.useMemo)(() => {
							const e = Object(d.g)(),
								t = {};
							for (const n of e) t[n] = m[n];
							return t
						}, [m]),
						x = Object(a.useCallback)(e => {
							const s = Object(d.f)({
								triggerName: e,
								surveyExperimentVariants: O,
								samplingId: o || l,
								isDemoEnabled: p,
								activeDemoTrigger: b,
								demoTriggerThreshold: f,
								isSampleFactorEnabled: g
							});
							if (p) return void(s && n(s));
							if (!s || s === t) return;
							const r = O[s.experiment_name];
							(null == r ? void 0 : r.variant) && s.variants[r.variant] && setTimeout(() => n(s), 500)
						}, [t, O, o, l, g, p, b, f]);
					return Object(a.useEffect)(() => {
						const e = Object(d.d)(),
							t = e.subscribe(x);
						return () => e.unsubscribe(t)
					}, [x]), Object(a.useEffect)(() => {
						if (!t) return;
						const n = Date.now();
						Object(d.i)(t, n), e(Object(c.F)({
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
					}, [e, t, l, r]), O = Object(a.useCallback)(() => {
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
						onLeaveConfirm: O
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
					const [i, c] = Object(a.useState)(-1), [l, u] = Object(a.useState)(0), [m, p] = Object(a.useState)(!1), b = Object(v.a)(), O = Object(a.useCallback)(() => {
						const a = e.experiment_name,
							v = e.steps[i],
							O = null == v ? void 0 : v.type,
							y = null == v ? void 0 : v.question,
							C = null == v ? void 0 : v.follow_up_question,
							x = e.steps[i + 1],
							E = null == x ? void 0 : x.type,
							P = null == x ? void 0 : x.question;
						if (u(l + 1), -1 === i) return b(h(a, "agree")), c(0), void b(f({
							experimentName: a,
							action: "display",
							type: E,
							question: P
						}));
						b(m ? g({
							experimentName: a,
							action: "submit",
							type: O,
							text: r,
							question: C
						}) : f({
							experimentName: a,
							action: "submit",
							question: y,
							type: O,
							score: t && t + (O === d.a.NPS ? 0 : 1)
						})), s(void 0), o(""), m || !C ? (p(!1), i + 1 >= e.steps.length ? n(!0) : (c(i + 1), b(f({
							experimentName: a,
							action: "display",
							type: E,
							question: P
						})))) : (p(!0), b(g({
							experimentName: a,
							action: "display",
							type: O,
							question: C
						})))
					}, [i, e, m, r, t, b, n, s, o, l]);
					return {
						activeStepNum: i,
						isFollowUp: m,
						onStepComplete: O,
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
								kind: O.b.SuccessCommunityGreen
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
				return C
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
			class O extends r.a.Component {
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
			const y = Object(a.b)(() => Object(i.a)(e => e.themes.current, e => !!Object(p.i)(e), e => {
				if (Object(p.i)(e)) return e.structuredStyles.draft
			}, (e, t) => {
				if (Object(p.i)(e)) return Object(p.f)(e, t)
			}, v, Object(c.a)((e, t) => {
				if (Object(p.i)(e) || Object(h.kb)(e)) return;
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.E)(e, n);
				if (!s) return;
				if (Object(h.jb)(e, {
						subredditId: s
					})) return;
				const o = e.structuredStyles.models[s];
				return o || void 0
			}), (e, t) => {
				const n = v(e, t);
				if (!n) return;
				const s = Object(b.w)(e, {
					subredditName: n
				});
				return s ? s.emojisCustomSize : void 0
			}, (e, t) => {
				if (t.forceDayMode) return !1;
				return Object(h.ub)(e).nightmode
			}, (e, t) => {
				const n = Object(h.ub)(e);
				if (Object(h.J)(e)) return !n.hideNSFW;
				const s = v(e, t);
				if (s) {
					const t = Object(b.z)(e, {
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
			}))(O);
			t.b = y;
			const C = Object(l.u)()(y)
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
					currentUser: l.j,
					isNightMode: l.W,
					isPresenceUserPrefEnabled: l.ib,
					shouldHideNSFW: l.B
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
				})), n && r.a.createElement(d.a, {
					showPresence: !0
				}))
			})
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
				return O
			})), n.d(t, "w", (function() {
				return y
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "b", (function() {
				return x
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
				O = 5,
				y = 16,
				C = 1250,
				x = 82,
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
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "m", (function() {
				return x
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "l", (function() {
				return P
			})), n.d(t, "p", (function() {
				return j
			})), n.d(t, "o", (function() {
				return _
			})), n.d(t, "e", (function() {
				return S
			})), n.d(t, "f", (function() {
				return k
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "d", (function() {
				return I
			})), n.d(t, "g", (function() {
				return M
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
				e.XXS = "xxsmallButtonStyles", e.XS = "xsmallButtonStyles", e.S = "smallButtonStyles", e.M = "mediumButtonStyles", e.L = "largeButtonStyles", e.XL = "xlargeButtonStyles"
			}(u || (u = {})),
			function(e) {
				e.Primary = "primary", e.Secondary = "secondary", e.Tertiary = "tertiary", e.Plain = "plain"
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
						children: O,
						className: y,
						kind: C = b.Button,
						priority: x = m.Primary,
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
						baseClassName: y,
						children: O,
						dataRedditStyle: t,
						Icon: n,
						isFullWidth: i,
						isSquare: h,
						priority: x,
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
						children: O,
						text: j,
						Icon: n,
						iconClassName: s,
						iconPosition: a,
						priority: x,
						textClassName: _
					});
					return C === b.InternalLink && (e => "to" in e)(S) ? o.a.createElement(f, l({}, d, S, {
						className: k
					}), w) : C === b.ExternalLink && (e => "href" in e)(S) ? o.a.createElement(g, l({}, d, S, {
						className: k
					}), w) : o.a.createElement(v, l({}, d, S, {
						className: k
					}), w)
				},
				f = e => o.a.createElement(a.a, e),
				g = e => o.a.createElement("a", e),
				v = e => o.a.createElement("button", e),
				O = e => o.a.createElement(h, l({
					kind: b.ExternalLink,
					priority: m.Primary
				}, e)),
				y = e => o.a.createElement(h, l({
					kind: b.InternalLink,
					priority: m.Primary
				}, e)),
				C = e => o.a.createElement(h, l({
					kind: b.Button,
					priority: m.Primary
				}, e)),
				x = e => o.a.createElement(h, l({
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
				I = ({
					className: e,
					...t
				}) => o.a.createElement(h, l({
					kind: b.Button,
					className: Object(r.a)(e, c.a.ChatButton)
				}, t)),
				M = ({
					className: e,
					...t
				}) => o.a.createElement(h, l({
					kind: b.Button,
					className: Object(r.a)(e, c.a.InlineTextButton)
				}, t));
			t.q = h
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
				const n = e.size || a.c.XS;
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
			const c = Object(o.c)(r.p.RECENT_SUBREDDITS, "recent_subreddits"),
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
							const s = e.findIndex(e => e.id === n); - 1 !== s && e.splice(s, 1), e.unshift(t.payload), e.splice(i.c), Object(o.d)(c, e, r.nb)
						}
						break
					}
				}
				return n
			}
		},
		"./src/reddit/endpoints/comment/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "h", (function() {
				return y
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "b", (function() {
				return x
			}));
			var s = n("./src/config.ts"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts"),
				c = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				l = n("./src/reddit/models/Comment/addProfileImgParam.ts"),
				d = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				u = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const m = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/save`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				p = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unsave`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				b = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/lock`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				h = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/unlock`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				f = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/approve`),
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				g = (e, t, n) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/remove`),
					method: o.hb.POST,
					data: {
						id: t,
						spam: n
					}
				}),
				v = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/ignore_reports`,
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				O = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/unignore_reports`,
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				y = (e, t) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: `${e.apiUrl}/api/show_comment`,
					method: o.hb.POST,
					data: {
						id: t
					}
				}),
				C = (e, t, n, a) => {
					let i = Object(c.a)(Object(u.a)(Object(d.a)(`${s.a.gatewayUrl}/desktopapi/v1/morecomments/${t}`)));
					return a && (i = Object(l.a)(i)), Object(r.a)(e, {
						data: n,
						endpoint: i,
						method: o.hb.POST,
						type: "json",
						traceRequestName: "more_comments"
					})
				},
				x = (e, t, n, s) => Object(r.a)(Object(a.a)(e, [i.a]), {
					endpoint: Object(c.a)(`${e.apiUrl}/api/distinguish/${n}`),
					method: o.hb.POST,
					data: {
						id: t,
						sticky: s
					}
				})
		},
		"./src/reddit/endpoints/gold/productCatalog/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return C
			})), n.d(t, "a", (function() {
				return x
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
						method: s.hb.GET,
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
			const O = async ({
				context: e,
				awardId: t,
				correlationId: n
			}) => {
				const r = `${e.apiUrl}/api/v2/gold/recommended_coin_package_details`,
					i = Object(d.a)(r);
				return Object(o.a)(Object(a.a)(e, [l.a]), {
					method: s.hb.GET,
					endpoint: i,
					data: {
						correlation_id: n,
						intended_award: t
					}
				}).then(u.c).then(y)
			};

			function y(e) {
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
			const C = e => Object(r.a)(e, {
					...c
				}),
				x = e => Object(r.a)(e, {
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
				return O
			})), n.d(t, "b", (function() {
				return y
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
						method: s.hb.POST,
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
						message: O
					} = r, y = {
						token: h ? h.id : void 0,
						coins: e,
						offer_context: d,
						pennies: u,
						thing_id: b,
						gild_type: g,
						message: O ? O.trim() : "",
						is_anonymous: v,
						remember_card: p,
						card_id: f,
						correlation_id: n
					}, C = `${t.apiUrl}/api/v2/gold/stripe/buy_coins_and_gild`, x = i ? C : Object(l.a)(C);
					return Object(o.a)(Object(a.a)(t, [c.a]), {
						method: s.hb.POST,
						endpoint: x,
						data: y
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
					}, O = `${e.apiUrl}/api/v2/gold/stripe/buy_award`, y = r ? O : Object(l.a)(O);
					return Object(o.a)(Object(a.a)(e, [c.a]), {
						method: s.hb.POST,
						endpoint: y,
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
						method: s.hb.POST,
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
				}, O = async (e, t) => {
					const n = {
						card_id: t
					};
					return Object(o.a)(Object(a.a)(e, [c.a]), {
						method: s.hb.POST,
						endpoint: `${e.apiUrl}/api/v2/gold/stripe/delete_creditcard`,
						data: n
					}).then(e => e.ok ? {
						...e
					} : {
						...e,
						error: Object(u.a)(e)
					})
				}, y = async e => Object(o.a)(Object(a.a)(e, [c.a]), {
					method: s.hb.GET,
					endpoint: `${e.apiUrl}/api/v2/gold/stripe/creditcards`
				}).then(e => e.ok ? {
					...e
				} : {
					...e,
					error: Object(u.a)(e)
				})
		},
		"./src/reddit/endpoints/notificationSettingsLayoutByChannelEndpoint.ts": function(e, t, n) {
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
				return t === c.h.MARKDOWN ? l.richtext_json = n : l.markdown_text = n, Object(o.a)(Object(r.a)(e, [a.a]), {
					endpoint: Object(i.a)(`${e.apiUrl}/api/convert_rte_body_format`),
					method: s.hb.POST,
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
				return Object(i.Q)(e, {}) === r.g.Large && !Object(l.I)(e) && !Object(c.d)(e)
			}

			function u(e) {
				return Object(a.c)(e, {
					expEventOverride: !1,
					experimentEligibilitySelector: d,
					experimentName: o.pc
				})
			}

			function m(e) {
				switch (e) {
					case o.qc.Enabled:
						return 18;
					default:
						return
				}
			}! function(e) {
				e.Enabled = "frontpage-card-posts-3.enabled", e.NoBucket = "frontpage-card-posts-3.no_bucket"
			}(s || (s = {}));
			const p = e => {
				switch (e) {
					case o.qc.Enabled:
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
					const t = Object(o.m)(e);
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
			n.d(t, "g", (function() {
				return r
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
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
				}),
				c = e => t => ({
					source: "comment_composer",
					action: "view",
					noun: "upvote_checkbox",
					...o.defaults(t),
					subreddit: o.subreddit(t),
					post: o.post(t, e),
					comment: o.comment(t, e)
				}),
				l = e => t => ({
					source: "comment_composer",
					action: "submit",
					noun: "upvote_checkbox",
					...o.defaults(t),
					subreddit: o.subreddit(t),
					post: o.post(t, e),
					comment: o.comment(t, e)
				}),
				d = e => t => ({
					source: "comment_composer",
					action: "select",
					noun: "upvote_checkbox",
					...o.defaults(t),
					subreddit: o.subreddit(t),
					post: o.post(t, e),
					comment: o.comment(t, e)
				}),
				u = e => t => ({
					source: "comment_composer",
					action: "deselect",
					noun: "upvote_checkbox",
					...o.defaults(t),
					subreddit: o.subreddit(t),
					post: o.post(t, e),
					comment: o.comment(t, e)
				})
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "d", (function() {
				return g
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/trackers/userFlair.ts"),
				r = n("./src/reddit/models/PostDraft/index.ts"),
				a = n("./src/reddit/selectors/comments.ts"),
				i = n("./src/reddit/selectors/platform.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				l = n("./src/telemetry/index.ts");
			const d = e => {
					const t = Object(i.m)(e);
					return {
						source: "comment_composer",
						action: s.c.CLICK,
						...Object(c.defaults)(e),
						screen: Object(c.screen)(e),
						subreddit: Object(c.subreddit)(e),
						post: t ? Object(c.post)(e, t) : null,
						profile: Object(c.profile)(e)
					}
				},
				u = (e, t, n, s) => {
					const r = {
							commentId: s,
							commentsPageKey: n
						},
						i = s && Object(a.j)(e, r) || 0;
					return Object(l.a)({
						noun: "comment",
						...d(e),
						comment: s ? Object(c.comment)(e, s) : null,
						listing: Object(c.listing)(e, void 0, {
							depth: i
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: Object(o.e)(e)
					})
				},
				m = (e, t, n, s) => {
					const o = d(e);
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
				},
				p = e => Object(l.a)({
					noun: "cancel",
					...d(e)
				}),
				b = (e, t) => {
					t === r.c.replyToPost && Object(l.a)({
						noun: "input",
						...d(e)
					})
				},
				h = (e, t) => Object(l.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(c.defaults)(t),
					screen: Object(c.screen)(t),
					subreddit: Object(c.subreddit)(t),
					post: Object(c.post)(t, e)
				}),
				f = e => Object(l.a)({
					noun: "edit",
					...d(e)
				}),
				g = e => Object(l.a)({
					noun: "save_edit",
					...d(e)
				})
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
				return O
			})), n.d(t, "k", (function() {
				return y
			})), n.d(t, "t", (function() {
				return C
			})), n.d(t, "m", (function() {
				return x
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
				e.HideNotifications = "hide_notification", e.HideSubreddit = "hide_subreddit", e.HideUpdates = "hide_updates", e.BlockAwarder = "block_awarder"
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
				O = ({
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
				y = ({
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
				C = ({
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
				x = e => t => ({
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
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "k", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "f", (function() {
				return O
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = [],
				a = "onboarding";
			var i;
			! function(e) {
				e.CATEGORY = "category", e.CREATE_ACCOUNT_SCREEN_DROPDOWN = "create_account_screen_dropdown", e.EXIT = "exit", e.ONBOARDING_COMMUNITY_RECOMMENDATIONS = "onboarding_community_recommendations", e.ONBOARDING_INTEREST = "onboarding_interest", e.SUB_CATEGORY = "sub_category", e.SUBREDDIT = "subreddit", e.VIEW_MORE = "view_more"
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
					noun: i.ONBOARDING_INTEREST
				}),
				p = () => e => ({
					...Object(o.defaults)(e),
					source: a,
					action: s.c.VIEW,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				b = () => e => ({
					...Object(o.defaults)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_INTEREST
				}),
				h = () => e => ({
					...Object(o.defaults)(e),
					source: a,
					action: s.c.SUBMIT,
					noun: i.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				f = () => e => ({
					...Object(o.defaults)(e),
					source: a,
					action: s.c.SKIP,
					noun: i.ONBOARDING_INTEREST
				}),
				g = (e, t, n) => r => ({
					...Object(o.defaults)(r),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					noun: t ? i.CATEGORY : i.SUB_CATEGORY,
					onboarding: {
						categoryName: n
					}
				}),
				v = (e, t, n) => r => ({
					...Object(o.defaults)(r),
					source: a,
					action: e ? s.c.SELECT : s.c.DESELECT,
					noun: i.SUBREDDIT,
					onboarding: {
						categoryName: t,
						subredditName: n
					}
				}),
				O = e => t => ({
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
				return O
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "u", (function() {
				return C
			})), n.d(t, "t", (function() {
				return x
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
				O = e => r("h_hide", e),
				y = e => r("x_expando", e),
				C = e => r("a_upvote", e),
				x = e => a("a_upvote", e),
				E = e => r("z_downvote", e),
				P = e => a("z_downvote", e),
				j = o("c_create_post"),
				_ = e => r("l_go_to_link", e),
				S = e => a("r_comment", e);
			o("q_navigation")
		},
		"./src/reddit/helpers/wiki/makeWikiPath.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/constants/wiki.ts");
			t.a = (e, t = !1) => {
				let n = "/wiki";
				return e.subredditName && (n = t ? `/r/${e.subredditName}/about/wiki` : `/r/${e.subredditName}/wiki`, e.wikiSubRoute && (n += `/${e.wikiSubRoute}`)), e.wikiPageName ? n += `/${e.wikiPageName.toLowerCase()}` : e.wikiSubRoute || (n += `/${s.i}`), n
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
				const [t, n] = Object(s.useState)(Object(o.t)(e));
				return [t, Object(s.useCallback)(() => {
					n(!0), Object(o.ob)(e)
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
				const [t, n] = Object(s.useState)(Object(o.u)(e));
				return [t, Object(s.useCallback)(() => {
					n(!0), Object(o.yb)(e)
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
				const [t, n] = Object(s.useState)(() => Object(o.v)(e));
				return [t, Object(s.useCallback)(() => {
					n(!0), Object(o.zb)(e)
				}, [e])]
			}
		},
		"./src/reddit/hooks/usePageLayer.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/contexts/PageLayer/index.tsx");
			t.a = s.db
		},
		"./src/reddit/hooks/useTracking.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx");
			t.a = s.b
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
		"./src/reddit/icons/svgs/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				checkbox: "_1vmueUAOJJg7fhS7wxztWa"
			}
		},
		"./src/reddit/icons/svgs/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/Checkbox/index.m.less"),
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
			t.a = ({
				className: e,
				...t
			}) => o.a.createElement("svg", c({
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20",
				className: Object(r.a)(i.a.checkbox, e)
			}, t), o.a.createElement("path", {
				fill: "inherit",
				d: "M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z"
			}))
		},
		"./src/reddit/icons/svgs/CheckboxSelected/index.tsx": function(e, t, n) {
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
				xmlns: "http://www.w3.org/2000/svg",
				width: "20",
				height: "20",
				viewBox: "0 0 20 20"
			}, e), o.a.createElement("path", {
				fill: "inherit",
				d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z"
			}))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/DizzySnoo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 52 52"
			}, o.a.createElement("path", {
				d: "M19.39,15.71a31.37,31.37,0,0,0-3.08,1.53,2.24,2.24,0,0,1-1.34.23c-4.27-1.06-7.54.28-10,4-2.09,3.17-.74,8,1.58,9.76a2.39,2.39,0,0,1,.91,1.53,12.18,12.18,0,0,0,5,8.87c.16.13.33.24.49.35a25.65,25.65,0,0,0,5.52,2.81A24,24,0,0,0,26.83,46c2.74-.09,5.49-.1,8.06-1.18a22.6,22.6,0,0,0,6.25-4c2.21-2.67,4.31-5.45,4.62-9a11.29,11.29,0,0,1,1.64-4.91,4.66,4.66,0,0,0,.54-1.58c.78-4.68-3.5-9.17-7.84-7.57a3.37,3.37,0,0,1-3-.49,18.33,18.33,0,0,0-7.63-2.81A25.61,25.61,0,0,0,19.39,15.71Z"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M42.39,18.88a12.75,12.75,0,0,0-2.48,0c1.76,2.1,3.33,3.86,4,6.23-4-5.95-9.64-9.32-16.71-9.37a19.14,19.14,0,0,0-17,9.06c-.17-.53-.51-1-.38-1.3A9.3,9.3,0,0,1,14,18.94c-3-1.13-6.34.54-8,3.85-1.29,2.58-.52,6.08,1.74,7.5a18.14,18.14,0,0,1,.55-2.24,15.4,15.4,0,0,1,1-1.9.86.86,0,0,1,.07.69,12.41,12.41,0,0,0,.4,8.24,11.06,11.06,0,0,0,3.82,5.31c7.18,5.27,17.21,6.56,25.28.91a13.72,13.72,0,0,0,5.77-10.45c.1-1.13.1-2.26.15-3.4l.3.27c.44-.29,1.12-.49,1.3-.9A6.06,6.06,0,0,0,42.39,18.88Z"
			}), o.a.createElement("path", {
				d: "M19.48,28.09a.73.73,0,0,1,.59-1q1.37.39.64,1.66a1.91,1.91,0,0,1-2.8.67c-2-1.53-.17-4,1.61-4.15a2.88,2.88,0,0,1,3,3.41,3.68,3.68,0,0,1-2.47,2.56,3.86,3.86,0,0,1-5.37-3.12c-.24-2.18,1.25-3.73,3.12-4.49,1.66-.67,5.58.83,4.89.44-2.7-1.49-5.73-2.15-7.86.32a5.19,5.19,0,0,0,.37,7c1.65,1.53,4.28,1.38,6.15.39s3.15-4,1.6-5.89-4.84-2.39-6.4-.19-.52,4.82,2.15,5.12c2,.22,4.63-2.84,2.55-4.43-1.5-1.15-4.32.86-2.79,2.32.48.46,1.46-.13,1-.59Z"
			}), o.a.createElement("path", {
				d: "M35.66,28.69c1.52-1.26.33-3.28-1.64-3.11-2.66.22-1.83,4.41.31,4.94,2.65.66,4.41-1.6,3.67-4.09s-4.31-3.3-6.24-1.53a3.94,3.94,0,0,0-.08,5.78,5.4,5.4,0,0,0,5.93.89c2.34-1.08,2.85-4.35,2-6.51-.54-1.3-1.64-1.74-2.91-2.18a6.19,6.19,0,0,0-4.81.49c-.52.38,3-.45,4.61.24a3.87,3.87,0,0,1,2.4,4.73c-.53,2.68-3.49,3.31-5.66,2.21a3,3,0,0,1,1.5-5.64,2.66,2.66,0,0,1,2,4.18c-1,1.2-2.88.44-3.33-.84a1.29,1.29,0,0,1,.92-1.69c.68-.06,1.14.68.33,1.25C34.08,28.17,34.85,29.36,35.66,28.69Z"
			}), o.a.createElement("path", {
				d: "M27.48,14.55a23.72,23.72,0,0,1-5.89-.24c-2.93-.77-.16-2.12,1-2.52a23.39,23.39,0,0,1,6.7-1c1.71-.05,4.47-.62,5.54,1.06a13.86,13.86,0,0,1-5.86.71c-1.18-.08-4.66-.14-5.34-1.35-.59-1,.88-2.95,1.86-3a11.48,11.48,0,0,1,2.11.15c.67.07.59-.94,0-1A6.33,6.33,0,0,0,23.36,8a2.55,2.55,0,0,0-.27,4.23c2.39,1.83,7.34,1.61,10.07,1.1,1.23-.23,4-.56,2.91-2.43-.68-1.15-2.46-1.07-3.6-1.08a31.33,31.33,0,0,0-11.3,1.47c-2.62,1-3.87,2.91-.4,4a14.5,14.5,0,0,0,4.86.4l1.85-.09C28.1,15.52,28.13,14.52,27.48,14.55Z"
			}), o.a.createElement("path", {
				d: "M30.73,5.14a3.35,3.35,0,0,0-4.43-.85,3,3,0,0,0-.72,3.93c.77,1.16,3.31,1.48,4.39.7A2.63,2.63,0,0,0,30.73,5.14Z"
			}), o.a.createElement("path", {
				fill: "#fff",
				d: "M29.34,7.94c-.52.7-1.71.34-2.39.11-1-.34-1-2.35-.18-2.9a1.79,1.79,0,0,1,2.23,0,2.34,2.34,0,0,1,1,1.18C30.21,6.87,29.61,7.57,29.34,7.94Z"
			}), o.a.createElement("path", {
				d: "M31.51,35.16c-5.18.72-4.85-2.84-9.7-1.22-3,1-3,4.65-.45,6.32,3.2,2.09,9.08.72,11,.24C36.87,39.38,36.72,34.43,31.51,35.16Z"
			}))
		},
		"./src/reddit/icons/svgs/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 40 40",
				xmlns: "http://www.w3.org/2000/svg",
				fill: e.fill
			}, o.a.createElement("g", null, o.a.createElement("rect", {
				x: "7.5",
				y: "12.5",
				width: "0",
				height: "0"
			}), o.a.createElement("path", {
				fill: "inherit",
				d: "M32.5,17.5v-2.6c0-6.8-5.6-12.4-12.4-12.4h-0.2c-6.8,0-12.4,5.6-12.4,12.4v2.6C6.1,17.5,5,18.6,5,20v10c0,5.5,4.5,10,10,10h10c5.5,0,10-4.5,10-10V20C35,18.6,33.9,17.5,32.5,17.5z M12.5,17.5v-2.6c0-4.1,3.3-7.4,7.4-7.4h0.2c4.1,0,7.4,3.3,7.4,7.4v2.6H12.5z"
			})))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/Snoo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/constants/colors.ts");
			t.a = e => o.a.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20",
				className: e.className
			}, o.a.createElement("g", null, o.a.createElement("circle", {
				fill: r.b.snoo,
				cx: "10",
				cy: "10",
				r: "10"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"
			})))
		},
		"./src/reddit/icons/svgs/SnooFacepalm/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fill: "#000",
				d: "M5.1 3.2c.5.3 1.1.3 1.7.1 1.4-.5 2.9-.9 4.5-.7 1.2.2 1.8.2 2.3.4 1 .4 2 .9 3 1.4.5.3 1 .8 1.5 1.2.2.2.5.4.7.4 2.4-.1 4.1 1 5 3.3.8 2-.5 4.5-2 5.1-.3.1-.6.4-.7.7-.6 2-1.9 3.3-3.7 4.2-.1.1-.2.1-.3.1-.7.3-3.9 1.7-7.9 1-4.8-.9-9.3-4.6-8.7-10.2.1-1 0-1.9-.3-2.9-.2-.2-.2-.5-.2-.8.1-2.7 2.9-4.6 5.1-3.3z"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M.7 7.5c.4 1.3.7.5.8.5-.1.6-.3 1.3-.3 1.9-.3 2.4.3 4.6 1.9 6.3 3.7 4 8.5 4.6 13.2 2.7 1.2-.5 2.6-1.7 3.3-2.8.8-1.4 1.3-2.8 1.2-4.4 0-.1 0-.2.1-.4.1.4.3.8.3 1.1.1.4 0 .8 0 1.3 1.4-.5 2.2-2.3 1.8-3.9-.5-2-2.1-3.3-3.9-3 .9.8 1.6 3.3 1.4 3.6-1.5-3.8-4.4-6.1-8.2-6.8-3.8-.8-7.2.4-10.1 3.2.6-1.2 1.7-2 2.9-2.9-.6-.1-1-.3-1.4-.3-1.8.1-3.5 2.1-3 3.9z"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M7.2 16.7c1.4.6 2.9.9 4.4 1 .6 0 1.3-.4.3-.5-1.2-.1-2.4-.3-3.5-.8-.3-.1-.7-.1-1 0-.1 0-.5.2-.2.3zM7.3 13.4c-.1 0-.2-.1-.3-.2-.1-.2-.2-.4-.4-.6-.6-.6-1.4-1.1-2.2-.9-.3.1-.5.2-.8.2h-.5c0-.1-.1-.3 0-.4.2-.2.5-.3.6-.4 1.6-.6 3.7.6 3.9 1.7v.3c0 .3-.2.3-.3.3zm9.8 1.1c-.1 0-.3 0-.4-.1-.1 0-.1-.1-.2-.1-.7-.5-1.5-.5-2.3 0-.2.1-.5.2-.7.3 0-.2 0-.4.1-.6.6-.6 1.7-.8 2.7-.5.3.1.7.5.9.8.1 0 0 .2-.1.2z"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M16.1 20.7c-2-.2-2.7-.9-2.9-2.5-.1-.9-.3-1.6-.7-2.4-.4-.9-.5-1.4-1.5-1.7-1.3-.5-1.9-1.6-2-2.6 0-.8.2-1.7.8-2.3 1.1-1.1 2.9-1.1 4.2-.5 1.3.6 3.8 3.2 4.3 4.5 1.6 4.2.8 7.2-2.2 7.5zM12 5.6c.1.2.1.7.6.5.4-.1.4-.6-.2-1.6-.3-.6-.5-1.6 0-2.2 1-1.3 2.3-1 3.5-.7.4.1 1.5.3 1.5.8 0 .7.6 1.8 1.2 2.2 1.2 1 3.5-.1 3.5-1.8 0-1.5-1.1-2.7-2.5-2.6-.6 0-1.6.7-2 1.2-.6-.2-1.2-.4-1.9-.5-1.3-.3-2.6-.3-3.7.7-1.2 1.1-.8 2.9 0 4-.1-.1-.2-.2-.3-.4.1.1.2.3.3.4.1.1-.6-.9 0 0z"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M21.3 3.1c-.2.5-.6.9-1 1-.4.1-.9 0-1.3-.3s-.7-.7-.7-1.1c0-.2 0-.8.8-1.4.5-.4 1.4 0 1.9.4.2.4.5.8.3 1.4zM18 14.6c-.5-2.5-3.8-6.4-6.8-5.3-1.4.5-1.7 2.4-.8 3.5.7.8 2.1 1.2 3 1.6-.3 0-.6.1-.9 0 1.2 1.6.6 4.7 2.8 5.2 2.5.7 3.4-1.7 2.7-5z"
			}))
		},
		"./src/reddit/icons/svgs/SnooHappy/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 24 25",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fill: "#000",
				d: "M19.7 9.4c-.6.2-1.1 0-1.6-.3-1.3-.8-2.6-1.4-4.2-1.5-1.2-.1-1.8-.1-2.3 0-1.1.2-2.2.4-3.2.7-.6.2-1.1.6-1.7.8-.2.1-.5.2-.7.2-2.3-.6-4.1.2-5.4 2.2-1.1 1.7-.4 4.4.9 5.3.2.2.5.5.5.8.1 2.1 1.2 3.6 2.7 4.8.1.1.2.1.3.2.6.4 1.9 1.2 3 1.5 1.5.5 3 .7 4.5.7 1.5-.1 3-.1 4.4-.6.4-.2 2.3-1.1 3.4-2.2 1.2-1.5 2.3-3 2.5-4.9.1-1 .4-1.8.9-2.7.2-.3.2-.6.3-.9.4-2.5-2-5-4.3-4.1z"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M20.9 10c-.4-.1-.8 0-1.4 0 1 1.1 1.8 2.1 2.2 3.4-2.2-3.2-5.3-5.1-9.1-5.1s-7 1.6-9.2 4.9c-.1-.3-.3-.6-.2-.7.5-1 1.2-1.9 2.3-2.5-1.7-.5-3.5.4-4.4 2.2-.7 1.4-.3 3.3.9 4.1l.3-1.2c.1-.4.4-.7.6-1 .1.2.1.3 0 .4-.5 1.5-.3 3 .2 4.5.5 1 1.1 2 2.1 2.8 3.9 2.9 9.4 3.6 13.8.5 1.9-1.3 2.9-3.3 3.1-5.7.1-.6.1-1.2.1-1.8.1 0 .1.1.2.1.2-.2.6-.3.7-.5.7-1.7-.4-3.9-2.2-4.4z"
			}), o.a.createElement("path", {
				fill: "#000",
				d: "M10.1 15.4s-.3-.1-.4-.2l-.6-.6c-.8-.5-1.6-.3-2.2.5-.2.3-.3.5-.5.8-.1.1-.3.2-.5.3-.1-.2-.2-.4-.2-.6.1-.4.3-.7.3-.9 1.1-1.7 3.3-1.8 4.1-.3.1.2.2.3.2.5s-.1.4-.2.5zm3.1 6.5c-2.3 0-4-1.6-4.4-3.4 0-.1.3-.4.6-.5 2-.8 5-1.1 7.2-.4.2.1.5.2.5.3 0 .1-.3.2-.3.3-.4 1.7-1.5 3.7-3.6 3.7zm5.9-6.5c-.1 0-.3-.1-.4-.2-.1 0-.1-.1-.1-.2-.6-.9-1.4-1-2.2-.3-.2.2-.5.2-.7.4.1-.3 0-.7.2-.9.7-.9 1.8-1.1 2.7-.5.2.2.6.9.8 1.4-.1.1-.2.3-.3.3zM16.6.5c-.5-.4-1.4-.7-2.3-.2-.4.2-.7.5-.8.7-.2.7-.2 1.1-.1 1.5-1 1-2.2 1.6-3.6 1.7-.2 0-.4.2-.4.4-.1.5.1.9.4 1.4.5.7.7 1.2.9 1.9V8c.1.2.2.2.4.2.1 0 .2-.1.3-.1.1-.1.1-.2.1-.3v-.2c0-.1-.1-.3-.1-.4-.1-.3-.2-.6-.3-.8-.1-.2-.2-.3-.3-.4-.1-.3-.3-.8-.3-1.1.5-.1 1.1-.2 1.6-.5.4-.2.7-.5 1-.8.2-.2.3-.3.5-.4.4.5.8.7 1.6.8h.2c.4 0 .9-.2 1.3-.5s.6-.8.6-1.4c.1-.6-.2-1.2-.7-1.6z"
			}), o.a.createElement("path", {
				fill: "#FFF",
				d: "M14 1.9c-.1-.6.4-1.1 1.1-1.2.8-.1 1.4.3 1.5 1 .1.7-.5 1.5-1.1 1.6-.7.1-1.4-.6-1.5-1.4z"
			}))
		},
		"./src/reddit/icons/svgs/SnooNoEyes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M15.4687,7.5029 C15.0937,7.5029 14.7307,7.5849 14.3997,7.7389 C13.4987,7.2209 12.4417,6.8769 11.3157,6.7229 L11.7777,4.5489 L12.8277,4.7729 C13.1127,5.5939 13.8847,6.1889 14.8007,6.1889 C15.9547,6.1889 16.8947,5.2489 16.8947,4.0949 C16.8947,2.9399 15.9547,1.9999 14.8007,1.9999 C14.1367,1.9999 13.5507,2.3159 13.1667,2.7999 L11.2147,2.3849 C10.6757,2.2739 10.1437,2.6139 10.0287,3.1549 L9.3297,6.4389 C9.3137,6.5159 9.3257,6.5899 9.3277,6.6659 C7.9607,6.7589 6.6667,7.1219 5.5987,7.7379 C5.2677,7.5839 4.9057,7.5029 4.5317,7.5029 C3.1357,7.5029 1.9997,8.6389 1.9997,10.0349 C1.9997,10.7769 2.3257,11.4699 2.8687,11.9429 C2.9027,14.8739 6.0217,17.1629 9.9967,17.1629 C13.9697,17.1629 17.0877,14.8769 17.1247,11.9479 C17.6707,11.4759 17.9997,10.7799 17.9997,10.0349 C17.9997,8.6389 16.8647,7.5029 15.4687,7.5029"
			})))
		},
		"./src/reddit/icons/svgs/SparkleGradient/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);

			function r(e) {
				return o.a.createElement("svg", {
					className: e.className,
					style: e.style,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 12 12"
				}, o.a.createElement("path", {
					d: "M6.47.828a.5.5 0 00-.94 0L4.268 4.267.827 5.53a.5.5 0 000 .938l3.44 1.264 1.264 3.44a.5.5 0 00.938 0l1.264-3.44 3.44-1.264a.5.5 0 000-.938l-3.44-1.264L6.47.827z",
					fill: "url(#orangeYellowGradient)",
					stroke: "#fff",
					strokeLinejoin: "round"
				}), o.a.createElement("defs", null, o.a.createElement("linearGradient", {
					id: "orangeYellowGradient",
					x1: "1",
					y1: "11",
					x2: "11.01",
					y2: "10.99",
					gradientUnits: "userSpaceOnUse"
				}, o.a.createElement("stop", {
					stopColor: "#EC0623"
				}), o.a.createElement("stop", {
					offset: "1",
					stopColor: "#FF8717"
				}))))
			}
		},
		"./src/reddit/icons/svgs/Unlock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 17",
				fill: "inherit",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M14.9656 14.8328L13.6 13.4672V8.99847C13.6 8.55608 13.2416 8.19848 12.8 8.19848H12V6.59849C12 4.39291 10.2056 2.59853 8 2.59853C6.5712 2.59853 5.328 3.35852 4.624 4.49131L2.1656 2.03294C1.8528 1.72014 1.3472 1.72014 1.0344 2.03294C0.721605 2.34573 0.721605 2.85133 1.0344 3.16413L13.8344 15.964C13.9904 16.12 14.1952 16.1984 14.4 16.1984C14.6048 16.1984 14.8096 16.12 14.9656 15.964C15.2784 15.6512 15.2784 15.1456 14.9656 14.8328ZM4 8.19859H3.2C2.7584 8.19859 2.4 8.55619 2.4 8.99859V14.5986C2.4 15.041 2.7584 15.3986 3.2 15.3986H11.6688L4 7.72979V8.19859ZM10.4 6.59854C10.4 5.27534 9.32319 4.19854 7.99999 4.19854C7.00959 4.19854 6.15839 4.80174 5.79199 5.65934L8.33119 8.19853H10.4V6.59854Z"
			}))
		},
		"./src/reddit/icons/svgs/Wordmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/constants/colors.ts"),
				i = n("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = Object(r.a)(e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 57 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				fill: e.color || Object(i.a)(e).bodyText
			}, o.a.createElement("path", {
				d: "M54.63,16.52V7.68h1a1,1,0,0,0,1.09-1V6.65a1,1,0,0,0-.93-1.12H54.63V3.88a1.23,1.23,0,0,0-1.12-1.23,1.2,1.2,0,0,0-1.27,1.11V5.55h-1a1,1,0,0,0-1.09,1v.07a1,1,0,0,0,.93,1.12h1.13v8.81a1.19,1.19,0,0,0,1.19,1.19h0a1.19,1.19,0,0,0,1.25-1.12A.17.17,0,0,0,54.63,16.52Z"
			}), o.a.createElement("circle", {
				fill: a.b.snoo,
				cx: "47.26",
				cy: "3.44",
				r: "2.12"
			}), o.a.createElement("path", {
				d: "M48.44,7.81a1.19,1.19,0,1,0-2.38,0h0v8.71a1.19,1.19,0,0,0,2.38,0Z"
			}), o.a.createElement("path", {
				d: "M30.84,1.19A1.19,1.19,0,0,0,29.65,0h0a1.19,1.19,0,0,0-1.19,1.19V6.51a4.11,4.11,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S22.28,18,25.42,18a4.26,4.26,0,0,0,3.1-1.23,1.17,1.17,0,0,0,1.47.8,1.2,1.2,0,0,0,.85-1.05ZM25.41,15.64c-1.83,0-3.32-1.77-3.32-4s1.48-4,3.32-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), o.a.createElement("path", {
				d: "M43.28,1.19A1.19,1.19,0,0,0,42.09,0h0a1.18,1.18,0,0,0-1.18,1.19h0V6.51a4.15,4.15,0,0,0-3-1.21c-3.1,0-5.69,2.85-5.69,6.35S34.72,18,37.86,18A4.26,4.26,0,0,0,41,16.77a1.17,1.17,0,0,0,1.47.8,1.19,1.19,0,0,0,.85-1.05ZM37.85,15.64c-1.83,0-3.31-1.77-3.31-4s1.47-4,3.31-4,3.31,1.78,3.31,4-1.47,3.95-3.3,3.95Z"
			}), o.a.createElement("path", {
				d: "M17.27,12.44a1.49,1.49,0,0,0,1.59-1.38v-.15a4.81,4.81,0,0,0-.1-.85A5.83,5.83,0,0,0,13.25,5.3c-3.1,0-5.69,2.85-5.69,6.35S10.11,18,13.25,18a5.66,5.66,0,0,0,4.39-1.84,1.23,1.23,0,0,0-.08-1.74l-.11-.09a1.29,1.29,0,0,0-1.58.17,3.91,3.91,0,0,1-2.62,1.12A3.54,3.54,0,0,1,10,12.44h7.27Zm-4-4.76a3.41,3.41,0,0,1,3.09,2.64H10.14A3.41,3.41,0,0,1,13.24,7.68Z"
			}), o.a.createElement("path", {
				d: "M7.68,6.53a1.19,1.19,0,0,0-1-1.18A4.56,4.56,0,0,0,2.39,6.91V6.75A1.2,1.2,0,0,0,0,6.75v9.77a1.23,1.23,0,0,0,1.12,1.24,1.19,1.19,0,0,0,1.26-1.1.66.66,0,0,0,0-.14v-5A3.62,3.62,0,0,1,5.81,7.7a4.87,4.87,0,0,1,.54,0h.24A1.18,1.18,0,0,0,7.68,6.53Z"
			}))))
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
			const O = (e, t) => async (n, s) => {
				var o;
				const r = s();
				if (function(e) {
						return g.test(Object(f.g)(e))
					}(t)) {
					const e = (null === (o = Object(v.j)(r)) || void 0 === o ? void 0 : o.displayText) || "";
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
			}, y = Object(p.a)(b.e), C = e => ({
				payload: {
					subreddits: e
				},
				type: b.b
			}), x = e => ({
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
				I = n("./src/lib/initializeClient/index.tsx"),
				M = n("./src/lib/loadableAction/index.ts"),
				N = n("./src/lib/matchRoute/index.ts"),
				T = n("./src/lib/performance.js"),
				A = n("./src/lib/reCaptchaEnterprise/index.ts"),
				R = n("./src/lib/safeJSONParse/index.ts"),
				L = n("./src/lib/serviceWorker/index.ts"),
				F = n("./src/reduxMiddleware/apiContext.ts"),
				D = n("./src/reduxMiddleware/gqlContext.ts"),
				U = n("./src/telemetry/index.ts"),
				B = n("./src/telemetry/models/Timer.ts"),
				G = n("./src/reddit/actions/apiRequestHeaders.ts"),
				q = n("./src/reddit/actions/chat/toggle.ts"),
				H = n("./src/reddit/actions/chat/unreadCount.ts"),
				W = n("./src/reddit/actions/comment/index.ts"),
				V = n("./src/reddit/actions/emailCollection/index.ts"),
				J = n("./src/reddit/actions/emailVerification.ts"),
				z = n("./src/reddit/actions/googleOneTap/index.ts"),
				K = n("./src/reddit/actions/media.ts"),
				Q = n("./src/lib/loadWithRetries/index.ts"),
				X = n("./src/lib/notifications/constants.ts"),
				Y = n("./src/reddit/actions/notifications/utils.ts");
			X.a.Default;
			const Z = {
				denied: X.a.Denied,
				granted: X.a.Granted
			};
			const $ = new class {
					constructor() {
						this.isInitializing = !1, this.isReady = !1, this.isSubscriptionActive = !1, this.permission = X.a.Default, this.listeners = new Set, this.initialize = async e => {
							if (this.isReady || this.isInitializing) return;
							await Object(Y.a)(e) === X.c.NotificationsSupported && (this.isInitializing = !0, await this.subscribeToPermissionsChange(), await this.updateIsSubscriptionEnabled(), this.isInitializing = !1, this.isReady = !0, this.notifyAll())
						}, this.updatePermission = () => {
							this.permission = Z[Notification.permission] || X.a.Default
						}, this.updateIsSubscriptionEnabled = async () => {
							const e = await window.navigator.serviceWorker.getRegistrations();
							for (const t of e) {
								if (await t.pushManager.getSubscription()) return void(this.isSubscriptionActive = !0)
							}
						}, this.recalculate = async () => {
							this.isReady && (this.updatePermission(), await this.updateIsSubscriptionEnabled(), this.notifyAll())
						}, this.getCurrentState = () => {
							return {
								isEnabled: this.isSubscriptionActive && this.permission === X.a.Granted,
								isSubscriptionActive: this.isSubscriptionActive,
								permission: this.permission
							}
						}, this.subscribe = e => {
							this.listeners.has(e) || this.listeners.add(e), this.isReady && e(this.getCurrentState())
						}, this.unsubscribe = e => {
							this.listeners.delete(e)
						}
					}
					async subscribeToPermissionsChange() {
						if (!window.navigator.permissions || !window.navigator.permissions.query) return;
						const e = await window.navigator.permissions.query({
							name: "notifications"
						});
						this.updatePermission(), e.onchange = () => {
							this.updatePermission(), this.notifyAll()
						}
					}
					notifyAll() {
						this.isReady && this.listeners.forEach(e => {
							e(this.getCurrentState())
						})
					}
				},
				ee = ($.subscribe, $.unsubscribe, $.initialize);
			$.recalculate;
			var te = n("./src/reddit/actions/nps.ts");
			const ne = Object(M.a)(() => n.e("OnboardingActions").then(n.bind(null, "./src/reddit/actions/onboarding/index.ts")).then(e => e.default));
			var se = n("./src/reddit/actions/platform.ts"),
				oe = n("./src/reddit/actions/post.ts"),
				re = n("./src/reddit/actions/reCaptchaEnterprise.ts"),
				ae = n("./src/reddit/actions/session.ts"),
				ie = n("./src/reddit/actions/survey/index.ts"),
				ce = n("./src/reddit/actions/theme.ts"),
				le = n("./src/reddit/actions/toaster.ts"),
				de = n("./src/reddit/actions/users.ts"),
				ue = n("./node_modules/react-redux/es/index.js"),
				me = n("./node_modules/react-router/esm/react-router.js"),
				pe = n("./node_modules/reselect/es/index.js"),
				be = (n("./assets/fonts/redesignIcon2020/redesignFont2020.css"), n("./assets/fonts/BentonSans/font.less"), n("./assets/fonts/IBMPlexSans/font.less"), n("./assets/fonts/NotoMono/font.less"), n("./assets/fonts/NotoSans/font.less"), n("./assets/fonts/VCR/font.less"), n("./src/reddit/components/Root/index.m.less")),
				he = n.n(be),
				fe = n("./src/reddit/components/Root/AdminPanelLoader.tsx"),
				ge = n("./src/lib/classNames/index.ts"),
				ve = n("./src/reddit/components/AppRouter/index.tsx"),
				Oe = n("./src/reddit/contexts/User/index.tsx");

			function ye(e) {
				return u.a.createElement(Oe.b, null, e.children)
			}
			var Ce = n("./src/reddit/components/ShortcutWrapper/Loader.ts"),
				xe = n("./src/reddit/constants/shortcuts.ts"),
				Ee = n("./src/reddit/components/ShortcutWrapper/ShortcutContainer.m.less"),
				Pe = n.n(Ee);
			var je = ({
					children: e
				}) => u.a.createElement("div", {
					className: Pe.a.shortcutDiv,
					id: xe.b,
					tabIndex: -1
				}, u.a.Children.only(e)),
				_e = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Se = n("./src/reddit/contexts/NavbarExp.ts"),
				ke = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				we = n("./src/reddit/components/Header/Sparse.tsx"),
				Ie = n("./src/reddit/components/ThemeProvider/index.tsx"),
				Me = n("./src/reddit/contexts/InsideOverlay.tsx"),
				Ne = n("./src/reddit/controls/Button/index.tsx"),
				Te = n("./src/reddit/featureFlags/index.ts"),
				Ae = n("./src/reddit/icons/svgs/DizzySnoo/index.tsx"),
				Re = n("./src/reddit/pages/InternalServerError/index.m.less"),
				Le = n.n(Re);
			const {
				fbt: Fe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), De = Object(pe.c)({
				showError: Te.d.showVerboseErrors
			}), Ue = Object(ue.b)(De)(e => {
				const t = Object(d.useContext)(Se.a);
				return u.a.createElement(Me.a.Provider, {
					value: !1
				}, u.a.createElement(Ie.b, {
					subredditName: ""
				}, u.a.createElement("div", null, u.a.createElement(we.a, {
					logoHref: "#",
					logoOnClick: () => window.location.reload(!0)
				}), u.a.createElement("div", {
					className: Le.a.container
				}, u.a.createElement("div", {
					className: Le.a.mainContent
				}, u.a.createElement(Ae.a, {
					className: Le.a.dizzySnoo
				}), u.a.createElement("h3", {
					className: Le.a.title
				}, Fe._("Sorry, for some reason reddit can't be reached.", null, {
					hk: "2yRKWG"
				})), u.a.createElement("div", {
					className: Le.a.subTitle
				}, Fe._("Give us a few minutes to fix the problem. Sorry!", null, {
					hk: "1c7Mg0"
				})), u.a.createElement(Ne.i, {
					onClick: () => window.location.reload(!0)
				}, Fe._("Reload Page", null, {
					hk: "S79U1"
				})), e.showError && u.a.createElement(u.a.Fragment, null, u.a.createElement("div", {
					className: Le.a.subTitle
				}, e.error.message), u.a.createElement("pre", null, u.a.createElement("code", null, e.error.stack)))), u.a.createElement("div", {
					className: Object(ge.a)(Le.a.topImageContainer, {
						[Le.a.topImageContainerExp]: t
					})
				}, u.a.createElement("img", {
					className: Le.a.image,
					src: `${a.a.assetPath}/img/error/star_pattern.png`
				})), u.a.createElement("div", {
					className: Le.a.bottomImageContainer
				}, u.a.createElement("img", {
					className: Le.a.image,
					src: `${a.a.assetPath}/img/error/half_planet.png`
				}))))))
			});
			var Be = n("./src/reddit/selectors/experiments/navbarLikeMweb.ts");

			function Ge() {
				return (Ge = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const qe = Object(pe.c)({
					isNavbarLikeMwebEnabled: Be.a,
					theme: e => e.themes.current
				}),
				He = Object(ue.b)(qe, {})(({
					children: e,
					theme: t,
					isNavbarLikeMwebEnabled: n
				}) => {
					const s = Object(ke.a)({
						theme: t
					});
					return u.a.createElement(Se.a.Provider, {
						value: n
					}, u.a.createElement("div", {
						className: Object(ge.a)(he.a.container, {
							[he.a.containerExp]: n
						}),
						style: {
							"--background": s.body,
							"--canvas": s.canvas
						}
					}, e))
				});

			function We(e) {
				if (e.ok) {
					const {
						RouterComponent: t,
						routes: n
					} = e;
					return u.a.createElement(_e.a, null, u.a.createElement(He, null, u.a.createElement(ye, null, u.a.createElement(fe.a, null), u.a.createElement(Ce.a, null), u.a.createElement(je, null, u.a.createElement(t, null, u.a.createElement(me.d, {
						component: Ve(n)
					}))))))
				}
				return u.a.createElement(Ue, {
					error: e.error
				})
			}
			const Ve = e => t => u.a.createElement(ve.b, Ge({
				routes: e
			}, t));
			var Je = n("./src/reddit/constants/localStorage.ts"),
				ze = n("./node_modules/lodash/throttle.js"),
				Ke = n.n(ze),
				Qe = n("./src/reddit/helpers/localStorage/index.ts");
			const Xe = 1e3;
			class Ye extends u.a.Component {
				constructor() {
					super(...arguments), this.flush = Ke()(() => Object(Qe.Gb)(this.props.storageKey, this.props.value), Xe)
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
			Ye.defaultProps = {
				enabled: !0,
				syncOnMount: !0
			};
			const Ze = Object(pe.a)(v.J, e => ({
				storageKey: Je.b.LOCAL_PERSISTED_EXPERIMENTS_STORE,
				value: {},
				enabled: !e
			}));
			var $e = Object(ue.b)(Ze)(Ye);
			var et = () => u.a.createElement(u.a.Fragment, null, u.a.createElement($e, null)),
				tt = n("./src/reddit/constants/headers.ts"),
				nt = n("./src/reddit/constants/history.ts"),
				st = n("./src/reddit/constants/jsapiEvents.ts"),
				ot = n("./src/reddit/constants/parameters.ts"),
				rt = n("./src/reddit/constants/screenWidths.ts"),
				at = n("./src/reddit/contexts/AdminEvents.ts"),
				it = n("./src/reddit/contexts/ApiContext.tsx"),
				ct = n("./src/reddit/contexts/ThrottlingContext/index.tsx"),
				lt = n("./src/reddit/actions/appBadgeIndicators/constants.ts");
			const dt = () => e => t => e(t);
			var ut = n("./src/lib/safeBadgeUpdate.ts"),
				mt = n("./src/reddit/selectors/appBadges.ts");

			function pt(e) {
				const t = Object(mt.g)(e);
				Object(ut.a)(t)
			}
			var bt = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					return n.type !== lt.b && n.type !== lt.d || pt(e.getState()), s
				} : dt,
				ht = n("./node_modules/brcast/dist/brcast.es.js"),
				ft = n("./src/telemetry/helpers/sendEvent.ts"),
				gt = n("./src/reddit/selectors/runTimeEnvVars.ts");
			var vt = "undefined" != typeof document ? () => {
					let e = !1;
					const t = Object(ht.a)([]);
					return {
						broadcaster: t,
						middleware: n => {
							const s = n.getState();
							return (Object(gt.b)(s) || Object(v.G)(s)) && (e = !0, Object(ft.c)(t)), s => o => {
								const r = s(o),
									a = n.getState();
								if (!Object(gt.b)(a)) {
									const n = Object(v.G)(a);
									e && !n ? (e = !1, Object(ft.c)(void 0), t.setState([])) : n && !e && (t.setState([]), Object(ft.c)(t), e = !0)
								}
								return r
							}
						}
					}
				} : () => ({
					broadcaster: Object(ht.a)([]),
					middleware: () => e => t => e(t)
				}),
				Ot = n("./node_modules/lodash/debounce.js"),
				yt = n.n(Ot),
				Ct = n("./src/lib/domUtils/index.ts");
			const xt = 30 * _.ib;
			let Et = Date.now();
			const Pt = () => {
					Et = Date.now()
				},
				jt = !!Object(Ct.f)() && {
					passive: !0
				};
			window.addEventListener("click", Pt, !1), window.addEventListener("wheel", yt()(Pt, 250), jt), window.addEventListener("mousemove", yt()(Pt, 250), jt), window.addEventListener("keydown", yt()(Pt, 250), jt);
			var _t = e => {
					return document.addEventListener("visibilitychange", (function() {
						"visible" === document.visibilityState && document.hasFocus && Date.now() - Et >= xt ? (e.dispatch(ae.h()), Pt()) : Pt()
					})), e => t => e(t)
				},
				St = n("./node_modules/lodash/pick.js"),
				kt = n.n(St),
				wt = n("./src/reddit/actions/header.ts"),
				It = n("./src/reddit/actions/preferences.ts"),
				Mt = n("./src/reddit/constants/preferences.ts"),
				Nt = n("./src/reddit/helpers/cookies/index.ts");
			const Tt = new Set([It.f, It.h, ce.b, It.c, It.n, wt.d, wt.e, It.q]);
			var At = e => t => n => {
					const s = t(n);
					if (Tt.has(n.type)) {
						const t = e.getState().user,
							n = kt()(t.prefs, ["hamburgerTray", "globalTheme", "collapsedTraySections", "nightmode", "subscriptionsPinned", Mt.b, Mt.d, Mt.e]);
						Object(Nt.a)({
							prefs: n
						})
					}
					return s
				},
				Rt = n("./src/lib/fastdom/index.ts"),
				Lt = n("./src/reddit/actions/tabBadging.ts"),
				Ft = n("./src/reddit/selectors/chat.ts"),
				Dt = n("./src/reddit/selectors/experiments/inboxAppBadgingGql.ts"),
				Ut = n("./src/reddit/selectors/experiments/inboxRedesign.ts"),
				Bt = n("./src/reddit/contexts/PageLayer/index.tsx"),
				Gt = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				qt = n("./src/reddit/selectors/platform.ts");
			const Ht = new Set([302, 400, 401, 403, 404, 421, 429, 500, 502, 503, 504, 0, void 0, null]),
				Wt = e => {
					var t;
					const {
						currentPage: n
					} = e.platform, s = Object(qt.p)(e), o = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.status, r = Ht.has(o), a = Object(Bt.l)(e, {
						pageLayer: n
					}), i = !(!a || !a.hideFromRobots), c = Vt(e), l = n && n.isRobotIndexable, d = s === _.Jb.COMMENTS || s === _.Jb.COLLECTION_COMMENTS, u = !(!n || !n.urlParams.partialCommentId), m = s === _.Jb.SEARCH_RESULTS || s === _.Jb.SUBREDDIT_LEADERBOARD || d && u;
					return i || r || c || (!1 === l || m) ? m ? "noindex" : "noindex,nofollow" : null
				},
				Vt = e => {
					var t;
					let n = !1;
					const s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams.subredditName;
					if (s) {
						const t = Object(v.e)(e, s);
						n = !!Object(Gt.a)(t, !1, s)
					}
					return n
				};
			var Jt = "undefined" != typeof document ? e => t => n => {
					const s = t(n);
					if (n.type === se.e) {
						const t = e.getState(),
							s = Object(v.I)(t),
							{
								meta: o
							} = n.payload;
						s ? ((e, t) => {
							const n = Object(Ut.g)(e),
								s = Object(Dt.a)(e);
							let o = 0;
							if (n) o = Object(mt.i)(e);
							else if (s) o = Object(mt.j)(e);
							else {
								const t = Object(v.E)(e) || 0;
								o = Object(Ft.a)(e) + t
							}
							Object(Lt.c)(o, t)
						})(t, o.title) : Rt.a.write(() => {
							document.title = o.title, ((e, t) => {
								if (t.head) {
									let n = t.querySelector("meta[name='robots']");
									const s = Wt(e),
										{
											head: o
										} = t;
									s ? (n || ((n = t.createElement("meta")).name = "robots", o.appendChild(n)), n.content = s) : n && (n.remove ? n.remove() : n.parentNode ? n.parentNode.removeChild(n) : o.removeChild && o.removeChild(n))
								}
							})(t, document)
						})
					}
					return s
				} : dt,
				zt = n("./src/reddit/helpers/survey/index.ts");
			var Kt = "undefined" != typeof document ? e => e => t => ((e => !!Object.keys(zt.b).filter(t => t === e).length)(t.type) && Object(Qe.U)(zt.b[t.type]), e(t)) : dt;
			const Qt = 5 * _.ib;
			var Xt = e => {
					const t = Ke()(() => {
						const t = e.getState().user.session,
							n = new Date(t.expires),
							s = new Date;
						n.getTime() - s.getTime() > .2 * t.expiresIn * 1e3 || e.dispatch(ae.g())
					}, Qt);
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
					return a.user.session && r(a.user.session), window.addEventListener("focus", o), window.addEventListener("touchend", o), document.body.addEventListener("mouseenter", o), e => t => (t.type !== ae.a && t.type !== ae.b && t.type !== ae.c && t.type !== ae.e || r(t.payload), t.type === ae.d && (clearTimeout(n), n = null), e(t))
				},
				Yt = n("./src/reddit/singleton/tracing/index.ts");
			var Zt = e => e => t => {
					const n = () => e(t);
					return Yt.b.isEnabled ? Yt.b.recordLocalSpan(t.type, n) : e(t)
				},
				$t = n("./src/reddit/actions/frontpage/constants.ts"),
				en = n("./src/reddit/actions/pages/profileComments/constants.ts"),
				tn = n("./src/reddit/actions/pages/profileOverview/constants.ts"),
				nn = n("./src/reddit/actions/pages/profilePosts.ts"),
				sn = n("./src/reddit/actions/pages/search.ts"),
				on = n("./src/reddit/actions/pages/subreddit.ts"),
				rn = n("./src/reddit/actions/search.ts"),
				an = n("./src/reddit/actions/subreddit.ts"),
				cn = n("./src/reddit/actions/tracking.ts"),
				ln = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				dn = n("./src/reddit/helpers/history/index.ts"),
				un = n("./src/reddit/helpers/trackers/commentList.ts"),
				mn = n("./src/reddit/helpers/trackers/postList.ts"),
				pn = n("./src/reddit/helpers/trackers/screenview.ts"),
				bn = n("./src/reddit/selectors/subreddit.ts"),
				hn = n("./src/reddit/helpers/routeKey/index.ts");
			var fn = e => t => n => {
					const s = t => {
						e.getState().tracking.viewportDataLoaded[t] || e.dispatch(cn.c({
							routeKey: t
						}))
					};
					if (n.type === se.a) {
						const s = e.getState(),
							o = (s.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
							a = Object(bn.E)(s, o) || "",
							i = (s.subreddits.about[a] || {}).advertiserCategory;
						r.trigger("pageview", {
							...kt()(n.payload.location, "pathname", "search", "hash"),
							subreddit: o,
							advertiserCategory: i
						});
						const c = s.platform.currentPage && s.platform.currentPage.routeMatch;
						if (c) {
							const e = Object(hn.b)(c, s, Object(ln.a)(s));
							if (e && U.c.has(e)) {
								const t = U.c.end(e);
								!Object(qt.h)(s) && Object(dn.b)(nt.a.IsOverlay) || Object(pn.k)(c, s, B.TimerType.UserCancelled, t)
							}
						}
						const l = n.payload.routeMatch;
						if (!l) return t(n);
						const d = Object(ln.a)(s, l),
							u = Object(hn.b)(l, s, d);
						if (!u) return t(n);
						U.c.start(u)
					}
					const o = t(n);
					switch (n.type) {
						case $t.b:
						case tn.b:
						case tn.e:
						case nn.PROFILE_POSTS_LOADED:
						case en.e:
						case on.SUBREDDIT_LOADED: {
							const {
								key: e,
								token: t
							} = n.payload;
							t || s(e);
							break
						}
						case sn.SEARCH_RESULTS_RECEIVED: {
							const {
								key: e,
								tokens: t
							} = n.payload;
							t.posts || s(e);
							break
						}
						case $t.f:
						case an.i:
						case nn.MORE_POSTS_LOADED: {
							const {
								key: t,
								postIds: o
							} = n.payload;
							s(t);
							const r = e.getState();
							if (o.length) break;
							if (void 0 === r.listings.postOrder.endMarkers[t]) break;
							mn.l(r, t);
							break
						}
						case en.b: {
							const {
								key: t,
								commentIds: o
							} = n.payload;
							if (s(t), o.length) break;
							const r = e.getState();
							if (void 0 === r.profileCommentsPage.endMarkers[t]) break;
							un.a(r, t);
							break
						}
						case rn.g: {
							const {
								key: e
							} = n.payload;
							s(e);
							break
						}
					}
					return o
				},
				gn = n("./src/reddit/helpers/featureThrottling/store/index.ts"),
				vn = n("./src/reddit/helpers/frontpageCardPostCountExperiment.ts"),
				On = n("./src/reddit/helpers/trackers/global.ts");
			let yn = null;
			const Cn = () => {
				yn && window.clearTimeout(yn), yn = null
			};
			var xn = e => {
					yn = window.setTimeout(() => {
						Cn(), Object(U.a)(Object(On.d)(3e4)(e()))
					}, 3e4), window.addEventListener("beforeunload", Cn)
				},
				En = n("./src/reddit/helpers/onBeforeRequestFactory/index.ts"),
				Pn = n("./src/reddit/actions/connection/constants.ts");
			const jn = Object(p.a)(Pn.b),
				_n = Object(p.a)(Pn.a),
				Sn = Object(p.a)(Pn.c);
			var kn = n("./src/reddit/actions/meta.ts"),
				wn = n("./src/reddit/selectors/telemetry.ts");
			const In = (e, t) => Object(U.a)({
					...wn.defaults(e),
					source: "store",
					action: "install",
					noun: "pwa",
					actionInfo: Object(wn.actionInfo)(e, {
						type: t
					})
				}),
				Mn = "(display-mode: minimal-ui)";
			const Nn = 3 * _.Ob;

			function Tn(e) {
				if (!window) return;
				(function(e) {
					const t = e.matchMedia(Mn).matches;
					return e.navigator && e.navigator.standalone || t
				})(window) && e.dispatch(Object(kn.i)());
				const t = window.matchMedia(Mn);
				t && "function" == typeof t.addEventListener && t.addEventListener("change", t => {
					t.matches ? e.dispatch(Object(kn.i)()) : e.dispatch(Object(kn.j)())
				}), window.addEventListener("appinstalled", () => {
					const t = e.getState();
					setTimeout(() => {
						pt(t)
					}, 1e3), In(t, function(e) {
						return "microsoft-store" === new URLSearchParams(e.location.search).get("app-install-source") ? "microsoft-store" : "browser"
					}(window))
				}), window.addEventListener("online", () => {
					e.dispatch(jn()), setTimeout(() => e.dispatch(Sn()), Nn)
				}), window.addEventListener("offline", () => e.dispatch(_n()))
			}
			var An = n("./src/lib/cookieConsent/index.ts"),
				Rn = n("./src/lib/permanentCookieOptions.ts"),
				Ln = n("./src/reddit/constants/cookie.ts");
			const Fn = (e, t) => {
				if (!e) return;
				const n = (l.a.get(Ln.g) || "").split(",");
				if (!n.includes(e)) {
					n.unshift(e);
					const s = n.slice(0, 10).join(","),
						o = {
							name: Ln.g,
							value: s,
							cookieOptions: Object(Rn.a)(),
							cookieContext: t
						};
					Object(An.c)(o)
				}
			};
			var Dn = n("./src/reddit/layout/page/Listing/index.tsx"),
				Un = n("./src/reddit/models/Toast/index.ts"),
				Bn = n("./src/reddit/reducers/index.ts"),
				Gn = n("./src/reddit/routes/index.ts"),
				qn = n("./src/reddit/constants/experiments.ts"),
				Hn = n("./src/reddit/helpers/chooseVariant/index.ts");
			var Wn = n("./src/reddit/selectors/experiments/googleOneTap.ts"),
				Vn = n("./src/reddit/selectors/experiments/postCommentFollow.ts");
			const Jn = {
					displayDelay: 15,
					displayOnRoutes: [_.Jb.SUBREDDIT, _.Jb.COMMENTS],
					experimentName: qn.vc,
					experimentVariant: qn.zc.On,
					isSEOOnly: !0,
					samplingRate: 25,
					seed: Math.random()
				},
				zn = e => {
					const {
						base_url: t
					} = Object(wn.requestWithParams)(e), n = Object(qt.b)(e), s = n && n.urlParams.partialPostId, o = n && n.urlParams.subredditName;
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
				Kn = e => {
					if (((({
							experimentName: e,
							experimentVariant: t
						}, n) => n.experimentOverrides[e] === t)(Jn, e) || (({
							samplingRate: e,
							seed: t
						}) => !!t && 0 === Math.floor(t * e))(Jn)) && (({
							displayOnRoutes: e
						}, t) => {
							const n = t.platform.currentPage && t.platform.currentPage.meta && t.platform.currentPage.meta.name;
							return !!n && e.includes(n)
						})(Jn, e) && (({
							isSEOOnly: e
						}, t) => !e || t.meta.isSessionSeo)(Jn, e) && (({
							experimentName: e,
							experimentVariant: t
						}, n) => Object(Hn.c)(n, {
							experimentName: e,
							experimentEligibilitySelector: Hn.a
						}) === t)(Jn, e)) return {
						displayDelay: Jn.displayDelay,
						externalVars: zn(e)
					}
				};
			var Qn = n("./src/reddit/selectors/meta.ts");
			var Xn = n("./src/reddit/singleton/EventSystem.ts"),
				Yn = n("./src/lib/initializeClient/installReducer.ts"),
				Zn = n("./src/reddit/reducers/features/categories/index.ts"),
				$n = n("./src/lib/sentry/index.ts"),
				es = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const ts = Object(p.a)(es.C),
				ns = () => {
					return Object(Qe.B)(Je.b.RPAN_USER_SETTINGS_STORE) || void 0
				};
			var ss = n("./src/reddit/actions/global/constants.ts");
			Object(Yn.a)({
				features: {
					categories: Zn.a
				}
			});
			const os = Object(p.a)(ss.a),
				rs = e => async (t, n) => {
					t((() => async e => {
						const t = ns();
						t && e(ts(t))
					})());
					const s = n();
					s.user.loid.loid || s.meta.isBot || $n.c.withScope(e => {
						Object($n.a)(e, {
							serverLogging: !1
						}), $n.c.captureMessage("User has no LOID set")
					});
					const {
						localStorageData: o
					} = e;
					o && t(os(o))
				};
			var as = n("./src/reddit/actions/login.ts"),
				is = n("./src/reddit/selectors/experiments/onboarding.ts");
			const cs = /^\/account\/magic_link\/landing\/[^\/]+\/?$/,
				ls = () => async (e, t) => {
					var n;
					const s = t();
					(e => {
						if (!e) return !1;
						const t = new URL(e).pathname;
						return cs.test(t)
					})(null === (n = s.platform) || void 0 === n ? void 0 : n.sessionReferrer) && !Object(is.a)(s) && e(Object(as.j)())
				};
			var ds = n("./src/reddit/actions/notificationsInbox/index.ts"),
				us = n("./src/reddit/customMiddleware/recentSubreddits.ts"),
				ms = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts"),
				ps = n("./src/reddit/selectors/experiments/goodVisitSearchFeed.ts");
			Object(o.e)(o.b.EntryPointStart);
			const bs = Object(F.a)({
					actionDispatchers: {
						reddaidReceived: de.t,
						loidReceived: de.q,
						sessionTrackerReceived: de.y
					},
					authHeaders: {
						[tt.a]: "desktop2x"
					},
					cookies: l.a,
					receivedActions: {
						reddaidReceived: de.d,
						loidReceived: de.b,
						sessionTrackerReceived: de.k,
						userAuthenticated: ae.c,
						userLoggedOut: ae.d,
						userReauthenticated: ae.e,
						headersReceived: G.a
					},
					onBeforeRequestFactory: En.a,
					statsAppName: _.l.Redesign
				}),
				hs = Object(D.a)(bs.apiContext),
				fs = vt();
			let gs;
			Object(I.a)({
				reducerMap: Bn.a,
				routes: Gn.a,
				apiContext: bs.apiContext,
				gqlContext: hs.gqlContext,
				appFactory: (e, t) => u.a.createElement(at.a.Provider, {
					value: fs.broadcaster
				}, u.a.createElement(it.a.Provider, {
					value: {
						apiContext: bs.apiContext,
						gqlContext: hs.gqlContext
					}
				}, u.a.createElement(ct.b, null, u.a.createElement(We, {
					ok: !0,
					RouterComponent: e,
					routes: t
				}), u.a.createElement(et, null)))),
				appName: _.l.Redesign,
				history: Object(i.a)({
					getUserConfirmation(e, t) {
						const n = gs;
						if (!n) return;
						n.dispatch(Object(se.k)({
							allowNavigationCallback: (e = !1) => {
								t(e), n.dispatch(Object(se.j)())
							}
						}))
					}
				}),
				customMiddleware: [E.a.withExtraArgument({
					routes: Gn.a,
					apiContext: bs.apiContext,
					gqlContext: hs.gqlContext
				}), fs.middleware, _t, bs.middleware, hs.middleware, Xt, At, Zt, fn, Jt, Kt, us.a, bt],
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
					loading: u.a.createElement(Dn.a, {
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
							e.origin.indexOf(t) < 0 || "tweet-measured" !== e.data.action || !e.data.id36 || n.dispatch(Object(K.j)({
								height: e.data.height || 0,
								isDeleted: e.data.isDeleted || !1,
								postId: `t3_${e.data.id36}`
							}))
						}), Tn(n), window.addEventListener("beforeunload", () => {
							const e = n.getState();
							Object(L.b)("sendV2Event", Object(On.a)("tab_closed")(e))
						}),
						function(e) {
							const t = String(e.split("/")[1]).toLowerCase();
							return "framedgild" === t || "framedmodal" === t
						}(e.location.pathname) || n.dispatch(Object(se.g)());
					const s = Object(v.W)(n.getState());
					n.dispatch(Object(ce.c)({
						nightmode: s
					}));
					const o = (e => e.tracing.traceId)(n.getState());
					if (o && (e => Object(Hn.c)(e, {
							experimentEligibilitySelector: Hn.a,
							experimentName: qn.C
						}) === qn.J.Enabled)(n.getState())) {
						Yt.b.enableTracing(!0);
						const e = Yt.b.createTraceFromId(o);
						Yt.b.setParent(e)
					}
					n.dispatch(Object(se.h)(t));
					e.listen((e, s) => {
						const o = Object(N.a)(Object(i.e)(e), t, n.getState());
						n.dispatch(Object(se.i)(e, s, o))
					});
					const r = n.getState(),
						{
							currentPage: c
						} = r.platform;
					if (c) {
						const e = [];
						Object(qt.i)(r) && e.push(ot.e), e.length > 0 && n.dispatch(Object(m.c)(Object(k.a)(c.url, e)))
					}
					return gn.a.initialize(), {
						localStorageData: Object(Qe.C)()
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
					gs = c;
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
							i = Object(bn.E)(n, a) || "";
						if (Fn(i, {
								country: n.meta.country
							}), i) {
							c.dispatch(O(i, a));
							const e = Object(qt.e)(n);
							e && c.dispatch(y(e))
						}
						Xn.a.publish(st.c, r, document)
					});
					const m = c.getState(),
						p = Object(us.b)();
					c.dispatch((e => async t => {
						const n = {},
							s = new Set;
						e.forEach(e => {
							s.add(e.id), n[e.id] || (n[e.id] = e)
						}), t(C(n)), t(x(Array.from(s)))
					})(p));
					const b = (m.platform.currentPage.urlParams.subredditName || "").toLowerCase(),
						h = Object(bn.E)(m, b) || "";
					if (b) {
						c.dispatch(O(h, b));
						const e = Object(qt.e)(m);
						e && c.dispatch(y(e))
					}
					const f = Object(bn.E)(m, b) || "",
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
						}), c.dispatch(rs({
							localStorageData: l
						})), Object(Wn.f)(m) && Object(z.d)(m), c.dispatch(Object(z.c)()), c.dispatch(ls()), window.addEventListener("load", () => {
							const t = c.getState(),
								{
									currentPage: r
								} = t.platform,
								a = (r.urlParams.subredditName || "").toLowerCase(),
								l = Object(bn.E)(t, a) || "";
							if (Object(L.a)(), Fn(l, {
									country: t.meta.country
								}), r && r.meta) {
								const a = r.meta.name;
								if (Object(U.b)(_.l.Redesign, {
										page: a,
										type: "rum"
									}), Object(w.c)(t.meta.userAgent) && window.innerWidth > rt.b) {
									const e = Object(o.f)(i);
									T.a && T.a.timing && Yt.b.isEnabled && (Yt.b.recordPerformanceTimings(`${a}_time_to_first_byte`, T.a.timing.fetchStart, T.a.timing.responseStart), Yt.b.recordPerformanceTimings(`${a}_time_to_interactive`, T.a.timing.fetchStart, T.a.timing.domInteractive));
									const n = [],
										s = !0;
									if (Object(qt.g)(t)) {
										const e = Object(vn.a)(t);
										n.push(Object(vn.c)(e))
									}
									const r = {
										isLoggedIn: Object(v.J)(t),
										name: a,
										statsdPathsForExperiments: n
									};
									Object(o.g)(r, e, s)
								}
								const l = T.a.timing.domInteractive - T.a.timing.navigationStart;
								Object(pn.k)(r.routeMatch, c.getState(), B.TimerType.Initial, l, r.urlParams);
								const d = Object(S.a)(window.location.href);
								d && d.get(ot.a) && history.replaceState(history.state, "", Object(k.a)(window.location.href, [ot.a])), Object(R.a)(d.get(ot.y)) && c.dispatch(Object(le.f)({
									kind: Un.b.SuccessCommunity,
									text: s.fbt._("Email verification complete", null, {
										hk: "bqMP6"
									})
								})), d.get(ot.z) && (c.dispatch(Object(J.a)(d.get(ot.z))), history.replaceState(history.state, "", Object(k.a)(window.location.href, [ot.z])));
								let u = !1;
								const m = Object(v.M)(t);
								if (m && c.dispatch(ne()), (Object(dn.b)(nt.a.JustLoggedIn) || m) && (c.dispatch(Object(le.f)({
										text: s.fbt._("Successfully logged in!", null, {
											hk: "2POUVB"
										})
									})), u = !0, Object(dn.c)(nt.a.JustLoggedIn), history.replaceState(history.state, "", Object(k.a)(window.location.href, [ot.o]))), Object(dn.b)(nt.a.JustLoggedOut) && (u = !0, Object(dn.c)(nt.a.JustLoggedOut)), ee(t), !1 !== Qe.V()) {
									let s;
									Object(Wn.a)(t) && (s = () => {
										const {
											dispatch: t
										} = c;
										e.listen(() => t(Object(z.b)())), t(Object(z.b)())
									}), (() => Object(Q.a)(() => n.e("PushNotifications").then(n.bind(null, "./src/reddit/actions/notifications/index.ts"))))().then(e => e.requestNotificationsPermissions).then(e => c.dispatch(e(u, !1, s)))
								}
								if (a === _.Jb.MULTIREDDIT && r.routeMatch) {
									const {
										multiredditName: e,
										username: t
									} = r.routeMatch.match.params;
									c.dispatch(Object(M.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.recommendationsRequested))({
										multiredditName: e,
										username: t
									}))
								}
								c.dispatch(Object(V.c)())
							}
							Object(v.J)(c.getState()) && (Object(Dt.a)(c.getState()) || c.dispatch(Object(H.d)()), c.dispatch(Object(q.e)())), Object(P.requestIdleCallback)(async () => {
								c.dispatch(Object(te.d)()), await Object(j.a)() && Object(On.b)(c.getState());
								const t = async () => {
									const e = c.getState(),
										t = Kn(e);
									t && (await (async e => {
										return (await Object(Q.a)(() => n.e("UserZoomIntegration").then(n.bind(null, "./src/reddit/helpers/userzoom/index.ts")))).embedFrame(e)
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
								if ("visible" !== document.visibilityState && (Qe.Vb(Date.now()), Object(U.a)(Object(On.a)("tab_backgrounded")(t))), (e => Object(Hn.c)(e, {
										experimentEligibilitySelector: e => !Object(Qn.d)(e),
										experimentName: qn.nb
									}) === qn.wb.Enabled)(t) && "visible" === document.visibilityState && n && Object(pn.k)(n.routeMatch, c.getState(), B.TimerType.Revisit, 0, n.urlParams, !0), "visible" === document.visibilityState) {
									const e = Qe.x(),
										t = Qe.y(),
										n = Qe.H(),
										s = Qe.R();
									if (s && e && n) {
										const o = Date.now() - s;
										Object(U.a)(Object(On.e)("tab_backgrounded", n)(c.getState(), o, e, t))
									}(s || e || n || t) && (Qe.eb(), Qe.ib(), Qe.gb(), Qe.fb())
								}
								Object(ps.a)(c.getState()) && (null === (e = null == n ? void 0 : n.locationState) || void 0 === e ? void 0 : e.clickId) && ms.d[n.locationState.clickId] && !ms.d[n.locationState.clickId].completed && ("visible" !== document.visibilityState ? Object(ms.b)(n.locationState.clickId) : Object(ms.c)(n.locationState.clickId))
							}), Object(Qn.g)(c.getState()) && xn(c.getState), c.dispatch(Object(ie.j)())
						}), window.history.scrollRestoration = "manual", Xn.a.attachStore(c), c.dispatch(Object(re.b)(A.a.PageLoad)), Object(Ut.j)(c.getState()) && c.dispatch(Object(ds.e)()), Object(Vn.b)(c.getState())) {
						const e = Qe.q(null === (d = c.getState().user.account) || void 0 === d ? void 0 : d.id);
						c.dispatch(Object(oe.C)({
							posts: null != e ? e : []
						}))
					}
					if (Object(Vn.a)(c.getState())) {
						const e = Qe.p(null === (u = c.getState().user.account) || void 0 === u ? void 0 : u.id);
						c.dispatch(Object(W.k)({
							comments: null != e ? e : []
						}))
					}
				},
				raven: {
					tags: {
						project: _.l.Redesign
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
				f = Object(r.b)(h),
				g = ({
					hideOnlyChildMargin: e,
					disableFullscreen: t,
					dispatch: n,
					fitPageToContent: s,
					forcedLayout: r,
					isCollectionLayout: a,
					isEditing: i,
					layout: c,
					pageLayer: l,
					...d
				}) => o.a.createElement("div", d);
			t.a = b(f(({
				className: e,
				...t
			}) => o.a.createElement(g, p({
				className: Object(i.a)(e, m.a.styledContent, {
					[m.a.mLargePostLayout]: t.layout === c.g.Large,
					[m.a.mDisableFullScreen]: t.disableFullscreen && !t.isCollectionLayout,
					[m.a.mClassicWidth]: t.isCollectionLayout,
					[m.a.mIsEditing]: !!t.isEditing,
					[m.a.mCanFlexFullWidth]: !t.fitPageToContent,
					[m.a.onlyChildMargin]: !t.hideOnlyChildMargin
				})
			}, t))))
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
					disableFullscreen: O,
					fitPageToContent: y,
					forcedLayout: C,
					hideOnlyChildMargin: x,
					isCollectionLayout: E,
					isPageSwapped: P,
					maxWidth: j,
					navBar: _,
					redditStyle: S,
					sidebar: k,
					sidebars: w,
					trendingUnit: I,
					subredditId: M
				} = e, N = I ? "28px" : "0", T = P ? {
					marginRight: `${c.q}px`,
					marginTop: N
				} : {
					marginLeft: `${c.q}px`,
					marginTop: N
				}, A = k && o.a.createElement("div", {
					className: Object(i.a)(b.a.sidebar, E ? b.a["m-collectionLayout"] : b.a.defaultLayout),
					style: T
				}, k), R = o.a.createElement(a.a, {
					hideOnlyChildMargin: x,
					className: g,
					disableFullscreen: O,
					fitPageToContent: y,
					forcedLayout: C,
					isCollectionLayout: E
				}, f, h);
				let L;
				L = w ? o.a.createElement(o.a.Fragment, null, w[0], R, w[1]) : P ? o.a.createElement(o.a.Fragment, null, A, R) : o.a.createElement(o.a.Fragment, null, R, A);
				const F = O ? `${j||d.a+2*c.m}px` : "100%",
					D = Object(s.useContext)(u.a);
				return o.a.createElement(m.a, {
					subredditId: M
				}, o.a.createElement("div", {
					className: Object(i.a)(b.a.outerContainer, l.i, n, {
						[b.a.outerContainerExp]: D
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
						maxWidth: F
					}
				}, I), o.a.createElement("div", {
					className: b.a.body,
					style: {
						maxWidth: F
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
					e.Email = "EMAIL", e.Push = "PUSH"
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
				return m
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx");
			var c = e => r.a.createElement("svg", {
					className: e.className,
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 21"
				}, r.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M18.4 14.788c-.662 0-1.2-.537-1.2-1.202l-.012-5.998C17.188 3.625 13.963.4 10 .4 6.037.4 2.811 3.625 2.811 7.586l-.01 6.002c0 .663-.54 1.2-1.2 1.2a1.199 1.199 0 100 2.4h16.8a1.2 1.2 0 100-2.4zm-9.6 3.6H7.6c0 1.324 1.076 2.4 2.4 2.4 1.323 0 2.4-1.076 2.4-2.4H8.8zm-3.6-4.797c0 .422-.087.822-.22 1.197H15.02a3.554 3.554 0 01-.22-1.2l-.013-5.997A4.794 4.794 0 0010 2.8a4.794 4.794 0 00-4.789 4.787l-.01 6.003z"
				})),
				l = n("./src/reddit/pages/NotificationsInbox/Content/index.m.less"),
				d = n.n(l);
			const u = i.a.wrapped(c, "BellOutline", d.a),
				m = ({
					isBannerEnabled: e
				}) => r.a.createElement("div", {
					className: Object(a.a)(d.a.emptyState, {
						[d.a.emptyStateWithBanner]: Boolean(e)
					})
				}, r.a.createElement(u, null), r.a.createElement("h1", {
					className: d.a.emptyTitle
				}, s.fbt._("Be the first to know", null, {
					hk: "2mNJO0"
				})), r.a.createElement("p", {
					className: d.a.emptyDescription
				}, s.fbt._("This is where you get updates on your activity and recommendations", null, {
					hk: "27V2PG"
				})))
		},
		"./src/reddit/pages/NotificationsInbox/Content/index.m.less": function(e, t, n) {
			e.exports = {
				notificationsBannersContainer: "_30M-VGAobP1YuoM04brOVT",
				notificationsContainer: "_1B9l9ftY8mkrILj7ISvc9_",
				NotificationUnit: "_1xxYCr84JqFV0qli3rFj6Y",
				notificationUnit: "_1xxYCr84JqFV0qli3rFj6Y",
				emptyState: "_1q1-Ijtc4SLFaVvDcMzus8",
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
					chunk: o.q.ACKNOWLEDGEMENTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.ACKNOWLEDGEMENTS
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
					chunk: o.q.APPEAL,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.APPEAL
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
					chunk: o.q.AVATAR,
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
						name: o.Jb.AVATAR
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
					chunk: o.q.COINS,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.COINS
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
					chunk: o.q.COINS_MOBILE,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.COINS_MOBILE
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
				importAsync: () => Promise.all([n.e("vendors~CollectionCommentsPage~CommentsPage"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/pages/CollectionCommentsPage/index.tsx")),
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
			l = Object(r.a)(l);
			const d = ["/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId/:partialCommentId", "/:routePrefix(user)/:subredditName/collection/:collectionId/:partialPostId", "/:routePrefix(user)/:subredditName/collection/:collectionId"],
				u = {
					action: Object(a.a)(() => Promise.all([n.e("vendors~CollectionCommentsPage~CommentsPage"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CollectionCommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/collectionCommentsPage.ts")).then(e => e.collectionCommentsPageRequested)),
					chunk: o.q.COLLECTION_COMMENTS_PAGE,
					component: c,
					exact: !0,
					meta: {
						name: o.Jb.COLLECTION_COMMENTS
					},
					prefetches: [o.q.FRONTPAGE, o.q.COMMENTS_PAGE, o.q.SUBREDDIT]
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
				importAsync: () => Promise.all([n.e("vendors~CollectionCommentsPage~CommentsPage"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/pages/CommentsPage/index.tsx")),
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
			c = Object(r.a)(c);
			const l = ["/:routePrefix(r)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/:routePrefix(user)/:subredditName/duplicates/:partialPostId/:urlSafePostTitle?", "/duplicates/:partialPostId/:urlSafePostTitle?"],
				d = ["/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle/:partialCommentId", "/:routePrefix(user)/:subredditName/comments/:partialPostId/:urlSafePostTitle?"],
				u = (e, t) => ({
					action: Object(a.a)(() => Promise.all([n.e("vendors~CollectionCommentsPage~CommentsPage"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("CommentsPage")]).then(n.bind(null, "./src/reddit/actions/pages/comments.ts")).then(e => e.commentsPageRequested)),
					chunk: o.q.COMMENTS_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: e
					},
					path: t,
					prefetches: [o.q.FRONTPAGE, o.q.SUBREDDIT]
				}),
				m = [u(o.Jb.COMMENTS, c), u(o.Jb.DUPLICATES, l), u(o.Jb.COMMENTS, d)];
			t.a = m
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("FramedGild~GildModal"), n.e("FramedGild")]).then(n.bind(null, "./src/reddit/pages/FramedGildPage/index.tsx")),
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
					chunk: o.q.FRAMED_GILD,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.FRAMED_GILD
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
					chunk: o.q.FRAMED_MODAL,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.FRAMED_MODAL
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
			const d = Object.keys(a.U).map(e => a.U[e]).join("|"),
				u = "/",
				m = `/:sort(${d})?`,
				p = Object(i.a)([u]),
				b = Object(i.a)([m]),
				h = Object(r.a)({
					resolved: {},
					chunkName: () => "Frontpage",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Frontpage~ModListing"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/pages/Frontpage/index.tsx")),
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
					action: Object(c.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Frontpage~ModListing"), n.e("Frontpage")]).then(n.bind(null, "./src/reddit/actions/frontpage/index.ts")).then(e => e.frontpageRequested)),
					chunk: a.q.FRONTPAGE,
					component: h,
					exact: !0,
					prefetches: [a.q.COMMENTS_PAGE, a.q.SUBREDDIT]
				},
				g = {
					...f,
					path: p,
					meta: {
						name: a.Jb.INDEX
					},
					routePredicate: l.J
				},
				v = {
					...f,
					path: u,
					meta: {
						name: a.Jb.INDEX,
						telemetryPageType: "popular"
					},
					routePredicate: e => !Object(l.J)(e)
				},
				O = {
					...f,
					path: b,
					meta: {
						name: a.Jb.LISTING
					},
					routePredicate: l.J
				},
				y = {
					...f,
					path: m,
					meta: {
						name: a.Jb.LISTING,
						telemetryPageType: "popular"
					},
					routePredicate: e => !Object(l.J)(e)
				},
				C = [g, v, O, y];
			t.a = C
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
					chunk: o.q.GEOTAGGING,
					component: c,
					exact: !0,
					meta: {
						name: o.Jb.GEOTAGGING
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
				l = Object.keys(a.Q).map(e => a.Q[e]).join("|"),
				d = [`/message/:pageName(${l})`, "/message/messages/:messageId([A-Za-z0-9]+)"],
				u = {
					action: i.d,
					chunk: a.q.INBOX_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Jb.INBOX_PAGES
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
					chunk: c.q.EMPTY,
					exact: !0,
					meta: {
						name: c.Jb.AVATAR_PROFILE
					},
					path: ["/user/me/avatar", "/u/me/avatar", "/user/:profileName/avatar"]
				},
				d = n("./src/reddit/routes/coins/index.ts"),
				u = n("./src/reddit/routes/coinsMobile/index.ts"),
				m = n("./src/reddit/routes/commentsPage/index.ts"),
				p = (n("./node_modules/@loadable/component/dist/loadable.esm.js"), n("./src/lib/loadableAction/index.ts"));
			var b = [];
			var h = {
					action: Object(p.a)(() => n.e(2).then(n.bind(null, "./src/reddit/actions/pages/emailVerification.ts")).then(e => e.emailVerificationRequested)),
					chunk: c.q.EMPTY,
					exact: !0,
					meta: {
						name: c.Jb.EMAIL_VERIFICATION
					},
					path: "/verification/:verificationToken"
				},
				f = n("./src/lib/addQueryParams/index.ts");
			var g = {
					action: e => async (t, n, {
						apiContext: s
					}) => {
						const {
							queryParams: o
						} = e;
						await t(Object(i.c)(Object(f.a)("/", o)))
					},
					chunk: c.q.EMPTY,
					exact: !0,
					meta: {
						name: c.Jb.EXPLORE
					},
					path: ["/explore", "/explore/:categoryName"],
					prefetches: [c.q.COMMENTS_PAGE, c.q.FRONTPAGE]
				},
				v = n("./src/reddit/routes/framedGild/index.ts"),
				O = n("./src/reddit/routes/framedModal/index.ts"),
				y = n("./src/reddit/routes/frontpage/index.ts"),
				C = n("./src/reddit/routes/geotagging/index.ts"),
				x = n("./src/reddit/routes/inbox/index.ts"),
				E = n("./src/reddit/routes/meta/index.ts"),
				P = n("./src/reddit/routes/moderationPages/index.ts"),
				j = n("./src/reddit/routes/modListing/index.ts"),
				_ = n("./src/reddit/routes/modQueue/index.ts"),
				S = n("./src/reddit/routes/multireddit/index.ts"),
				k = n("./src/reddit/routes/notificationsInbox/index.ts"),
				w = n("./src/reddit/routes/postCreation/constants.ts");
			const I = ["/original", "/original/:categoryName/:sort([a-z]+)?"].map(e => ({
				path: e,
				action: () => async e => {
					await e(Object(i.c)("/"))
				},
				chunk: c.q.EMPTY,
				exact: !0,
				meta: {
					name: c.Jb.ORIGINAL_CONTENT_REDIRECT
				}
			}));
			var M = [{
					path: "/original/submit",
					action: () => async e => {
						await e(Object(i.c)(w.b))
					},
					chunk: c.q.EMPTY,
					exact: !0,
					meta: {
						name: c.Jb.ORIGINAL_CONTENT_REDIRECT
					}
				}, ...I],
				N = n("./src/reddit/routes/postCreation/index.ts"),
				T = n("./src/reddit/routes/postDraft/index.ts"),
				A = n("./src/reddit/routes/powerups/index.ts");
			var R = {
					action: () => async e => await e(Object(i.c)(A.a)),
					chunk: c.q.EMPTY,
					exact: !0,
					meta: {
						name: c.Jb.POWERUP_REDIRECT
					},
					path: "/powerup"
				},
				L = n("./src/reddit/routes/premium/index.ts"),
				F = n("./src/reddit/routes/profileComments/index.ts"),
				D = n("./src/reddit/endpoints/me/index.ts"),
				U = n("./src/reddit/helpers/pageActionLoginRedirect.ts");
			var B = {
					action: e => async (t, n, {
						apiContext: s
					}) => {
						const {
							rest: o
						} = e.params, {
							queryParams: r
						} = e, a = await Object(D.a)(s());
						if (!(a.ok && a.body && a.body.account)) {
							const e = n();
							return void Object(U.a)(t, e)
						}
						const c = a.body.account.displayText,
							l = o ? `/user/${c}/${(e=>e.endsWith("/")?e:`${e}/`)(o)}` : `/user/${c}/`,
							d = Object(f.a)(l, r);
						await t(Object(i.c)(d))
					},
					chunk: c.q.EMPTY,
					exact: !0,
					meta: {
						name: c.Jb.PROFILE_ME
					},
					path: ["/user/me", "/user/me/:rest(.*)"]
				},
				G = n("./src/reddit/routes/profileModSettings/index.ts"),
				q = n("./src/reddit/routes/profileOverview/index.ts"),
				H = n("./src/reddit/routes/profilePosts/index.ts"),
				W = n("./src/reddit/routes/profilePrivate/index.ts");
			var V = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							queryParams: o
						} = e, r = s ? `/user/${n}/${(e=>e.endsWith("/")?e:`${e}/`)(s)}` : `/user/${n}/`, a = Object(f.a)(r, o);
						await t(Object(i.c)(a))
					},
					chunk: c.q.EMPTY,
					exact: !0,
					meta: {
						name: c.Jb.PROFILE_REDIRECT
					},
					path: ["/r/u_:profileName", "/r/u_:profileName/:rest(.*)", "/u/:profileName", "/u/:profileName/:rest(.*)"]
				},
				J = n("./src/reddit/routes/profileSnoobuilder/index.ts");
			var z = {
					action: e => async t => {
						const {
							profileName: n,
							rest: s
						} = e.params, {
							queryParams: o
						} = e, r = s ? `/user/${n}/posts/${s}` : `/user/${n}/posts`, a = Object(f.a)(r, o);
						t(Object(i.c)(a))
					},
					chunk: c.q.EMPTY,
					exact: !0,
					meta: {
						name: c.Jb.PROFILE_REDIRECT
					},
					path: ["/user/:profileName/submitted", "/user/:profileName/submitted/:rest(.*)"]
				},
				K = n("./src/reddit/routes/publicAccessNetwork/index.ts"),
				Q = n("./src/reddit/routes/report/index.ts"),
				X = n("./src/reddit/routes/searchResults/index.ts"),
				Y = n("./src/reddit/routes/settings/index.ts");
			var Z = [{
					action: e => async t => {
						const {
							page: n
						} = e.params, s = n && "blocked" === n ? "/settings/privacy" : "/settings/";
						await t(Object(i.c)(s))
					},
					chunk: c.q.EMPTY,
					meta: {
						name: c.Jb.SETTINGS_REDIRECT
					},
					path: "/prefs/:page(deactivate|blocked)?"
				}, {
					action: () => async e => {
						await e(Object(i.c)("/settings/profile"))
					},
					chunk: c.q.EMPTY,
					meta: {
						name: c.Jb.SETTINGS_REDIRECT
					},
					path: ["/user/:username/about/edit", "/user/:username/about/edit/privacy"]
				}],
				$ = n("./src/reddit/routes/subreddit/index.ts"),
				ee = n("./src/reddit/routes/subredditLeaderboard/index.ts"),
				te = n("./src/reddit/routes/subredditWiki/index.ts"),
				ne = n("./src/reddit/routes/talk/index.ts"),
				se = n("./src/reddit/routes/topic/index.ts");
			const oe = [o.a, r.a, a.b, l, d.a, u.a, B, V, z, ...s.a, ...m.a, h, ...y.a, C.a, L.a, A.b, ne.b, R, v.a, O.a, N.a, T.a, ...M, g, ...E.a, S.a, _.a, j.c, k.a, x.a, F.a, G.a, q.a, H.a, J.a, W.a, K.a, ...Y.a, ...Z, X.a, ...te.a, se.a, $.b, ee.a, P.a, Q.a, ...b];
			t.a = oe
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
						Object(p.J)(t()) || await e(Object(l.s)())
					},
					chunk: o.q.META_ARBITRUM_POINTS_MIGRATION_PAGE,
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
						name: o.Jb.META_ARBITRUM_POINTS_MIGRATION_PAGE
					},
					path: ["/web/points-migration/"]
				},
				h = {
					action: i.a,
					chunk: o.q.META_COMMUNITY_POINTS_LEARN_MORE_PAGE,
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
						name: o.Jb.META_COMMUNITY_POINTS_LEARN_MORE_PAGE
					},
					path: ["/community-points/", "/vault/", "/web/community-points/"]
				},
				f = {
					action: c.a,
					chunk: o.q.META_MEMBERSHIP_PAYWALL_PAGE,
					component: Object(s.a)({
						resolved: {},
						chunkName: () => "MembershipPaywallPage",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), n.e("MembershipPaywallPage")]).then(n.bind(null, "./src/reddit/pages/meta/MembershipPaywallPage/index.tsx")),
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
						name: o.Jb.META_MEMBERSHIP_PAYWALL_PAGE
					},
					path: ["/web/special-membership/:subredditName", "/web/membership/:subredditName"]
				},
				g = e => async (t, n) => {
					const s = Object(m.a)(e.queryParams);
					Object(p.J)(n()) || await t(Object(l.s)()), s && setTimeout(async () => {
						await t(Object(r.c)(`/r/${encodeURIComponent(s.subreddit)}/`)), u.d.spBurnLinks(n()) && t(Object(a.h)(d.a.CRYPTO_BURN_POINTS, s))
					}, 0)
				}, v = {
					action: g,
					chunk: o.q.EMPTY,
					exact: !0,
					meta: {
						name: o.Jb.META_VAULT_BURN
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("ModQueue~ModQueuePages~ModerationPages"), n.e("ModQueuePages~reddit-components-ModHub-Content-ModQueue"), n.e("ModQueuePages")]).then(n.bind(null, "./src/reddit/pages/ModQueuePages/index.tsx")),
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
				l = Object.keys(a.pb).map(e => a.pb[e]).join("|"),
				d = `/r/mod/about/:pageName(${l})?`,
				u = {
					action: Object(i.a)(() => Promise.all([n.e("ModQueue~ModQueuePages~ModerationPages"), n.e("ModQueue")]).then(n.bind(null, "./src/reddit/actions/pages/modQueue/index.ts")).then(e => e.modQueuePageRequested)),
					chunk: a.q.MODQUEUE_PAGES,
					component: c,
					exact: !0,
					meta: {
						name: a.Jb.MODQUEUE_PAGES
					},
					path: d
				};
			t.a = u
		},
		"./src/reddit/routes/moderationPages/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "c", (function() {
				return v
			}));
			var s = n("./node_modules/core-js/modules/web.dom.iterable.js"),
				o = n.n(s),
				r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				i = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/loadableAction/index.ts");
			const l = Object.keys(i.ac).map(e => i.ac[e]).join("|"),
				d = [i.ac.Awards],
				u = d.join("|"),
				m = e => `/${e}/about/scheduledposts`,
				p = e => `/${e}/about/eventposts`,
				b = e => `/${e}/about/predictions`,
				h = Object(r.a)({
					resolved: {},
					chunkName: () => "ModerationPages",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("ModQueue~ModQueuePages~ModerationPages"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/pages/ModHub/index.tsx")),
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
				f = ["/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(revisions|wikibanned|wikicontributors)", "/r/:subredditName/about/:pageName(wiki)/:wikiSubRoute(edit|create|settings|revisions)/:wikiPageName+", "/r/:subredditName/about/:pageName(wiki)/:wikiPageName*"],
				g = ["/r/:subredditName/about", `/r/:subredditName/about/:pageName(${l})`, `/user/:profileName/about/:pageName(${u})`, ...f],
				v = e => !!Object(a.h)(e, {
					path: "/r/:subredditName/about"
				}),
				O = {
					action: Object(c.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModerationPages"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("ModQueue~ModQueuePages~ModerationPages"), n.e("ModerationPages~SubredditWiki"), n.e("ModerationPages")]).then(n.bind(null, "./src/reddit/actions/pages/moderationPages/index.ts")).then(e => e.moderationPageRequested)),
					chunk: i.q.MODERATION_PAGES,
					component: h,
					exact: !0,
					meta: {
						name: i.Jb.MODERATION_PAGES
					},
					path: g,
					prefetches: [i.q.SUBREDDIT]
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/pages/Multireddit/index.tsx")),
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
				d = Object.keys(a.U).map(e => `${l}/:sort(${a.U[e]})?`),
				u = "/user/:username/m/:multiredditName",
				m = Object.keys(a.U).map(e => `${u}/:sort(${a.U[e]})?`),
				p = [l, u, ...d, ...m],
				b = {
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("Multireddit")]).then(n.bind(null, "./src/reddit/actions/pages/multireddit/index.ts")).then(e => e.multiredditRequested)),
					chunk: a.q.MULTIREDDIT,
					component: c,
					exact: !0,
					meta: {
						name: a.Jb.MULTIREDDIT
					},
					path: p,
					prefetches: [a.q.SUBREDDIT]
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
					chunk: o.q.NOTIFICATIONS_INBOX,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.NOTIFICATIONS_INBOX
					},
					path: a,
					prefetches: [o.q.FRONTPAGE]
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/pages/PostDraft/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("PostDraft")]).then(n.bind(null, "./src/reddit/actions/pages/postDraft.ts")).then(e => e.postDraftRequested)),
					chunk: o.q.POST_DRAFT,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.POST_DRAFT
					},
					path: a,
					prefetches: [o.q.POST_DRAFT]
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
					chunk: o.q.POWERUPS,
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
						name: o.Jb.POWERUPS
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/pages/ProfileComments/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview"), n.e("ProfileComments")]).then(n.bind(null, "./src/reddit/actions/pages/profileComments/index.ts")).then(e => e.profileCommentsRequested)),
					chunk: o.q.PROFILE_COMMENTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.PROFILE_COMMENTS
					},
					path: a,
					prefetches: [o.q.COMMENTS_PAGE]
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
					chunk: o.q.PROFILE_MODERATION,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.PROFILE_MODERATION
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/pages/ProfileOverview/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview"), n.e("ProfileOverview")]).then(n.bind(null, "./src/reddit/actions/pages/profileOverview/index.ts")).then(e => e.profileOverviewRequested)),
					chunk: o.q.PROFILE_OVERVIEW,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.PROFILE_OVERVIEW
					},
					path: a,
					prefetches: [o.q.COMMENTS_PAGE]
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/pages/ProfilePosts/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePosts.ts")).then(e => e.profilePostsRequested)),
					chunk: o.q.PROFILE_POSTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.PROFILE_POSTS
					},
					path: a,
					prefetches: [o.q.COMMENTS_PAGE]
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("CollectionCommentsPage~CommentsPage~ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfileComments~ProfileOverview~ProfilePrivate"), n.e("ProfilePrivate")]).then(n.bind(null, "./src/reddit/pages/ProfilePrivate/index.tsx")),
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
					action: Object(i.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("ProfilePosts")]).then(n.bind(null, "./src/reddit/actions/pages/profilePrivate/index.ts")).then(e => e.profilePrivateRequested)),
					chunk: a.q.PROFILE_PRIVATE,
					component: l,
					exact: !0,
					meta: {
						name: a.Jb.PROFILE_PRIVATE
					},
					path: u,
					prefetches: [a.q.COMMENTS_PAGE]
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/pages/ProfileSnoobuilder/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ProfileSnoobuilder")]).then(n.bind(null, "./src/reddit/actions/pages/profileSnoobuilder.ts")).then(e => e.profileSnoobuilderRequested)),
					chunk: o.q.PROFILE_SNOOBUILDER,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.PROFILE_SNOOBUILDER
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
					importAsync: () => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/pages/PublicAccessNetwork/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), n.e("PublicAccessNetwork")]).then(n.bind(null, "./src/reddit/actions/publicAccessNetwork/page.ts")).then(e => e.publicAccessNetworkRequested)),
					chunk: o.q.PUBLIC_ACCESS_NETWORK,
					component: a,
					exact: !0,
					meta: {
						name: o.Jb.PUBLIC_ACCESS_NETWORK
					},
					path: ["/rpan/r/:subredditName/:partialPostId?", "/rpan/:partialPostId?"],
					prefetches: [o.q.PUBLIC_ACCESS_NETWORK]
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
					chunk: o.q.REPORT_PAGE,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.REPORT
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/pages/SearchResults/experimentWrapper.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~PostC~fd8b3c86"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~ProfileComments~ProfileOverview~ProfilePrivate~R~45fabc48"), n.e("CollectionCommentsPage~CommentsPage~ModerationPages~PostCreation~ProfileComments~ProfileOverview~Pro~2e044255"), n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("SearchResults")]).then(n.bind(null, "./src/reddit/actions/pages/search.ts")).then(e => e.searchResultsRequested)),
					chunk: o.q.SEARCH_RESULTS,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.SEARCH_RESULTS
					},
					path: a,
					prefetches: [o.q.FRONTPAGE, o.q.SUBREDDIT, o.q.COMMENTS_PAGE]
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
			const c = Object.keys(a.Xb).map(e => a.Xb[e]).join("|"),
				l = [{
					action: Object(i.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModStatsChart~Settings"), n.e("Settings")]).then(n.bind(null, "./src/reddit/actions/pages/settings.ts")).then(e => e.settingsPageRequested)),
					component: Object(r.a)({
						resolved: {},
						chunkName: () => "Settings",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!n.m[t]
						},
						importAsync: () => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("vendors~ModStatsChart~Settings"), n.e("Settings")]).then(n.bind(null, "./src/reddit/pages/Settings/index.tsx")),
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
					chunk: a.q.SETTINGS,
					exact: !0,
					meta: {
						name: a.Jb.SETTINGS
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
					chunk: a.q.USER_DATA_REQUEST,
					exact: !0,
					meta: {
						name: a.Jb.USER_DATA_REQUEST
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
					chunk: o.q.SUBREDDIT_LEADERBOARD,
					component: i,
					exact: !0,
					meta: {
						name: o.Jb.SUBREDDIT_LEADERBOARD,
						isResponsive: !0
					},
					path: a,
					prefetches: [o.q.FRONTPAGE]
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
				importAsync: () => Promise.all([n.e("vendors~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("ModerationPages~SubredditWiki"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/pages/SubredditWiki/index.tsx")),
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
			d = Object(a.a)(d), d.push("/wiki/:wikiPageName+");
			const u = ["/wiki/", "/r/:subredditName/wiki/", "/r/:subredditName/w/:wikiPageName*", "/w/:wikiPageName*", "/r/:subredditName/wiki/:wikiSubRoute(settings)/:wikiPageName+"],
				m = e => async t => {
					await t(Object(o.c)(Object(c.a)(e.url, e.params)))
				}, p = {
					action: m,
					chunk: r.q.EMPTY,
					exact: !0,
					meta: {
						name: r.Jb.SUBREDDIT_WIKI
					},
					path: u
				}, b = {
					action: Object(i.a)(() => Promise.all([n.e("vendors~SubredditWiki"), n.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), n.e("CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki"), n.e("ModerationPages~SubredditWiki"), n.e("SubredditWiki")]).then(n.bind(null, "./src/reddit/actions/pages/subredditWiki/index.ts")).then(e => e.subredditWikiPageRequested)),
					chunk: r.q.SUBREDDIT_WIKI,
					component: l,
					exact: !0,
					meta: {
						name: r.Jb.SUBREDDIT_WIKI
					},
					path: d,
					prefetches: [r.q.SUBREDDIT]
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
					chunk: o.q.TALK,
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
						name: o.Jb.TALK
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
					importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Topic")]).then(n.bind(null, "./src/reddit/pages/Topic/index.tsx")),
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
					action: Object(r.a)(() => Promise.all([n.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), n.e("Topic")]).then(n.bind(null, "./src/reddit/actions/pages/topic.ts")).then(e => e.topicPageRequested)),
					chunk: o.q.TOPIC,
					component: a,
					exact: !0,
					meta: {
						name: o.Jb.TOPIC
					},
					prefetches: [o.q.COMMENTS_PAGE, o.q.FRONTPAGE]
				};
			t.a = c
		},
		"./src/reddit/selectors/accountManager.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "c", (function() {
				return y
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
				m = n("./src/reddit/selectors/experiments/magicLink.ts"),
				p = n("./src/reddit/selectors/experiments/onboarding.ts"),
				b = n("./src/reddit/helpers/chooseVariant/index.ts"),
				h = n("./src/reddit/selectors/experiments/index.ts");
			var f = n("./src/reddit/selectors/meta.ts"),
				g = n("./src/reddit/selectors/responsiveSettings.ts");
			const v = e => e.accountManagerModalData.actionSource,
				O = e => e.accountManagerModalData.redirectUrl,
				y = Object(a.a)((e, t) => t.path, (e, t) => t.uiMode, v, d.a, p.a, g.a, u.b, e => Object(b.c)(e, {
					experimentEligibilitySelector: e => !Object(h.e)(e),
					experimentName: l.Hd
				}), m.a, f.i, (e, t, n, a, d, u, m, p, b, h) => {
					let f = `${r.a.accountManagerOrigin}${e}`;
					if (f = Object(i.a)(f, {
							experiment_d2x_2020ify_buttons: "enabled"
						}), p && (f = Object(i.a)(f, {
							[`experiment_${l.Hd}`]: p
						})), d && (f = Object(i.a)(f, {
							experiment_d2x_onboarding: "enabled"
						})), e === c.c.GoogleOneTap) return Object(i.a)(f, {
						[l.W]: m
					});
					if (a && (f = Object(i.a)(f, {
							[l.xb]: a,
							uiMode: t
						})), b && (f = Object(i.a)(f, {
							[`experiment_${l.Rc}`]: b
						})), u && (f = Object(i.a)(f, {
							mweb_responsive_settings: "treatment"
						})), h) {
						const e = Object(s.isoLocaleToR2Language)(h);
						h !== o.DEFAULT_LOCALE && e && (f = Object(i.a)(f, {
							lang: e
						}))
					}
					return e === c.c.Index || e === c.c.ChangePassword ? f : f = Object(i.a)(f, {
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
		"./src/reddit/selectors/experiments/categories.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const a = e => {
				return Object(r.G)(e) || s.H.Treatment1 === Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.B
				})
			}
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
					experimentEligibilitySelector: r.J,
					experimentName: s.gc
				});
				return !(!t || Object(s.je)(t))
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
			const d = Object(s.a)(l.R, (e, {
					pageLayer: t
				}) => !t || Object(r.z)(t), c.c, (e, t, n) => !e && t && !n),
				u = Object(s.a)((e, t) => Object(a.c)(e, {
					experimentEligibilitySelector: e => d(e, t),
					experimentName: o.xb,
					throttledVariants: {
						[o.rc.CurrentThrottled]: o.xb
					}
				}), i.a),
				m = e => e === o.rc.CurrentThrottled,
				p = e => e === o.rc.CurrentThrottled || e === o.rc.CurrentUnthrottled || e === o.rc.CurrentUnthrottledCopy || e === o.rc.NewPopUnthrottledCopy,
				b = e => e === o.rc.NewPopUnthrottledCopy,
				h = e => e === o.rc.NewPageUnthrottledCopy || e === o.rc.NewPageUnthrottledCopyFields,
				f = e => e === o.rc.NewPageUnthrottledCopyFields
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => Object(o.c)(e, {
				experimentName: s.Wc,
				experimentEligibilitySelector: o.a
			}) === s.bd.Enabled
		},
		"./src/reddit/selectors/experiments/onboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/utils.ts");
			const i = Object(s.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: o.Ud
				}), e => [o.Yd.Enabled, o.Yd.Enabled_noskip, o.Yd.Enabled_noskip_no_preselect].find(t => t === e)),
				c = Object(s.a)(i, e => !!Object(a.a)(e))
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
					experimentName: o.eb,
					experimentEligibilitySelector: a.e
				}), i.a),
				l = Object(s.a)(c, e => e === o.kd.Enabled),
				d = Object(s.a)(e => Object(r.c)(e, {
					experimentName: o.U,
					experimentEligibilitySelector: a.e
				}), i.a),
				u = Object(s.a)(d, e => e === o.L.Enabled)
		},
		"./src/reddit/selectors/experiments/trending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const a = e => Object(r.G)(e) || !(s.Zd.Holdout === Object(o.c)(e, {
				experimentEligibilitySelector: o.a,
				experimentName: s.Vd
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
				i = new Set([s.Bc.AllItems, s.Bc.TrendingSearch]),
				c = e => {
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: Object(o.d)(Object(o.b)(...a)),
						experimentName: s.Cc
					});
					return i.has(t)
				},
				l = e => s.Bc.AllItems === Object(r.c)(e, {
					experimentEligibilitySelector: Object(o.d)(Object(o.b)(...a)),
					experimentName: s.Cc
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
			const c = Object(s.a)(i.y, e => !e),
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
		"./src/redditGQL/operations/FetchSpecialEvents.json": function(e) {
			e.exports = JSON.parse('{"id":"7537a71b4f14"}')
		},
		"./src/redditGQL/operations/NotificationInboxFeed.json": function(e) {
			e.exports = JSON.parse('{"id":"b0e50336ee76"}')
		},
		"./src/redditGQL/operations/NotificationInboxFeedSlimmed.json": function(e) {
			e.exports = JSON.parse('{"id":"916e9e9be5e0"}')
		},
		"./src/redditGQL/operations/NotificationSettingsLayoutByChannel.json": function(e) {
			e.exports = JSON.parse('{"id":"d03522f8a8d4"}')
		},
		"./src/redditGQL/operations/SubredditUserAchievements.json": function(e) {
			e.exports = JSON.parse('{"id":"df1c1b9b6408"}')
		},
		"./src/redditGQL/operations/UpdateAchievementFlairPreference.json": function(e) {
			e.exports = JSON.parse('{"id":"eab9458f507c"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		},
		"./src/redditGQL/operations/UpdateInboxActivitySeenState.json": function(e) {
			e.exports = JSON.parse('{"id":"85d656894a08"}')
		},
		"./src/redditGQL/operations/UpdateNotificationPreferences.json": function(e) {
			e.exports = JSON.parse('{"id":"129085be0500"}')
		}
	},
	[
		["./src/reddit/index.tsx", "runtime~Reddit", "vendors~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-components-LargePo~5f1ac562", "vendors~Governance~ModListing~Reddit~Subreddit", "vendors~Chat~Governance~Reddit", "Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241", "Governance~Reddit~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~reddit-compone~3b56c92e", "Governance~PostCreation~Reddit~Subreddit~reddit-components-ClassicPost~reddit-components-CompactPost~2a8f7250", "Governance~ModListing~Reddit~Subreddit", "Chat~Governance~Reddit", "Governance~Reddit~reddit-components-MediumPost", "Reddit~StandalonePostPage~reddit-components-MediumPost", "Governance~Reddit"]
	]
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit.fe7e742bc560533a7f22.js.map