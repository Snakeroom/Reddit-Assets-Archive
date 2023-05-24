// https://www.redditstatic.com/desktop2x/vendors~Reddit.af6013323ec2e9fb5c14.js
// Retrieved at 5/24/2023, 2:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~Reddit"], {
		"./node_modules/@r/frames/compiled.js": function(e, t, o) {
			"use strict";
			(function(e) {
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var o = arguments,
					n = ".*",
					r = ".postMessage",
					a = {
						targetOrigin: "*"
					},
					s = /\..+$/;

				function i(e) {
					return new RegExp("\\.(?:" + e.join("|") + ")$")
				}

				function l(e) {
					return new RegExp("^http(s)?:\\/\\/" + e.join("|") + "$", "i")
				}
				var u = [n],
					d = l(u),
					c = [r],
					f = i(c),
					p = {},
					m = !1;

				function y(t, o, n) {
					e.addEventListener ? e.addEventListener(t, o, n) : e.attachEvent && e.attachEvent("on" + t, o)
				}

				function v(t, o) {
					e.removeEventListener ? e.removeEventListener(t, o) : e.detachEvent && e.detachEvent("on" + t, o)
				}

				function h(e) {
					return /\*/.test(e)
				}
				var _ = t.postMessage = function(e, t, o) {
						var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
						s.test(t) || (t += r);
						var i = n;
						Object.keys(a).forEach((function(e) {
							i[e] = a[e]
						})), e.postMessage(JSON.stringify({
							type: t,
							data: o,
							defaultedOptions: i
						}), i.targetOrigin)
					},
					g = t.receiveMessage = function(e, t, o, n) {
						"string" == typeof e && (n = o, o = t, t = e, e = null), n = n || void 0;
						var r = function(t) {
							for (var r = arguments.length, a = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++) a[s - 1] = arguments[s];
							e && e !== t.source && e.contentWindow !== t.source || o.apply(n, [t].concat(a))
						};
						return y(t, r), {
							off: function() {
								v(t, r)
							}
						}
					},
					b = (t.receiveMessageOnce = function(e, t, n, r) {
						var a = g(e, t, (function() {
							n && n.apply(void 0, o), a.off()
						}), r);
						return a
					}, t.removePostMessageOrigin = function(e) {
						var t = u.indexOf(e); - 1 !== t && (u.splice(t, 1), d = l(u))
					}),
					j = e.CustomEvent;
				if ("undefined" != typeof window && "function" != typeof j) {
					var S = {
						bubbles: !1,
						cancelable: !1,
						detail: void 0
					};
					(j = function(e, t) {
						t = t || S;
						var o = document.createEvent("CustomEvent");
						return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o
					}).prototype = e.Event.prototype
				}
				t.addPostMessageOrigin = function(e) {
					h(e) ? u = [n] : -1 === u.indexOf(e) && (b(n), u.push(e), d = l(u))
				};

				function O(t) {
					if (t.origin === e.location.origin || d.test(t.origin) || "null" === t.origin) {
						var o = {};
						try {
							o = JSON.parse(t.data)
						} catch (t) {}
						var n = o.type;
						if (f.test(n)) {
							var r = n.split(".", 2)[1];
							if (p[r]) p[r].targets.forEach((function(e) {
								return _(e, n, o.data, o.options)
							}));
							var a = new j(n, {
								detail: o.data
							});
							a.source = t.source, e.dispatchEvent(a)
						}
					}
				}
				var w = t.listen = function(e) {
					-1 === c.indexOf(e) && (c.push(e), f = i(c)), m || (y("message", O), m = !0)
				};
				t.stopListening = function(e) {
					var t = c.indexOf(e); - 1 !== t && (c.splice(t, 1), c.length ? f = i(c) : (v("message", O), m = !1))
				}, t.proxy = function(e, t) {
					w(e), Array.isArray(t) || (t = [t]);
					var o = p[e];
					o ? o.targets = [].concat(o.targets, t) : o = {
						targets: t
					}, p[e] = o
				}
			}).call(this, o("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@reddit/google-tag-manager/compiled.js": function(e, t, o) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.setup = t.trigger = t.getLocation = void 0;
			var n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				},
				r = function(e, t) {
					if (Array.isArray(e)) return e;
					if (Symbol.iterator in Object(e)) return function(e, t) {
						var o = [],
							n = !0,
							r = !1,
							a = void 0;
						try {
							for (var s, i = e[Symbol.iterator](); !(n = (s = i.next()).done) && (o.push(s.value), !t || o.length !== t); n = !0);
						} catch (l) {
							r = !0, a = l
						} finally {
							try {
								!n && i.return && i.return()
							} finally {
								if (r) throw a
							}
						}
						return o
					}(e, t);
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				},
				a = o("./node_modules/@reddit/google-tag-manager/node_modules/uuid/index.js"),
				s = function(e) {
					if (e && e.__esModule) return e;
					var t = {};
					if (null != e)
						for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
					return t.default = e, t
				}(o("./node_modules/@r/frames/compiled.js"));
			var i = "gtm-" + (0, a.v4)(),
				l = !1,
				u = [],
				d = function() {
					var e = document.getElementById(i);
					return e && e.contentWindow ? e : null
				},
				c = ["code", "access_token", "state", "refresh_token", "id_token"],
				f = new URLSearchParams(location.search);
			c.forEach((function(e) {
				f.delete(e)
			}));
			var p = f.toString(),
				m = "" + location.origin + location.pathname + (p ? "?" + p : ""),
				y = [];
			location.hash.replace(/^#/, "").split("&").forEach((function(e) {
				var t = e.split("="),
					o = r(t, 2),
					n = o[0],
					a = o[1];
				c.includes(n) || y.push(n + "=" + a)
			}));
			var v = y.length ? "" + y.join("&") : "",
				h = t.getLocation = function() {
					return {
						href: m,
						hostname: location.hostname,
						origin: location.origin,
						pathname: location.pathname || "/",
						search: p,
						hash: v
					}
				},
				_ = t.trigger = function(e, t) {
					var o = d();
					o && l ? (t && s.postMessage(o.contentWindow, "data.gtm", t), s.postMessage(o.contentWindow, "event.gtm", {
						event: e
					})) : function(e, t) {
						u.push({
							eventName: e,
							payload: t
						})
					}(e, t)
				},
				g = function() {
					if (d() && l) {
						var e = u.slice();
						u = [], e.forEach((function(e) {
							var t = e.eventName,
								o = e.payload;
							return _(t, o)
						}))
					}
				};
			t.setup = function(e) {
				var t = e.containerId,
					o = e.jailUrl,
					r = e.payload;
				if (t)
					if (o) {
						s.listen("gtm"), s.receiveMessageOnce("loaded.gtm", (function() {
							l = !0, s.stopListening("gtm")
						}));
						var a = document.createElement("iframe");
						a.style.display = "none", a.id = i, a.name = JSON.stringify(n({
							referrer: document.referrer
						}, h(), r)), a.src = o + "?id=" + t, a.onload = g, document.body.appendChild(a)
					} else console.warn("GTM#setup: No `jailUrl` specified, skipping.");
				else console.warn("GTM#setup: No `containerId` specified, skipping.")
			}
		},
		"./node_modules/@reddit/google-tag-manager/node_modules/uuid/index.js": function(e, t, o) {
			var n = o("./node_modules/@reddit/google-tag-manager/node_modules/uuid/v1.js"),
				r = o("./node_modules/@reddit/google-tag-manager/node_modules/uuid/v4.js"),
				a = r;
			a.v1 = n, a.v4 = r, e.exports = a
		},
		"./node_modules/@reddit/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js": function(e, t) {
			for (var o = [], n = 0; n < 256; ++n) o[n] = (n + 256).toString(16).substr(1);
			e.exports = function(e, t) {
				var n = t || 0,
					r = o;
				return r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + "-" + r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]] + r[e[n++]]
			}
		},
		"./node_modules/@reddit/google-tag-manager/node_modules/uuid/lib/rng-browser.js": function(e, t, o) {
			(function(t) {
				var o, n = t.crypto || t.msCrypto;
				if (n && n.getRandomValues) {
					var r = new Uint8Array(16);
					o = function() {
						return n.getRandomValues(r), r
					}
				}
				if (!o) {
					var a = new Array(16);
					o = function() {
						for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), a[t] = e >>> ((3 & t) << 3) & 255;
						return a
					}
				}
				e.exports = o
			}).call(this, o("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@reddit/google-tag-manager/node_modules/uuid/v1.js": function(e, t, o) {
			var n = o("./node_modules/@reddit/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				r = o("./node_modules/@reddit/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js"),
				a = n(),
				s = [1 | a[0], a[1], a[2], a[3], a[4], a[5]],
				i = 16383 & (a[6] << 8 | a[7]),
				l = 0,
				u = 0;
			e.exports = function(e, t, o) {
				var n = t && o || 0,
					a = t || [],
					d = void 0 !== (e = e || {}).clockseq ? e.clockseq : i,
					c = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
					f = void 0 !== e.nsecs ? e.nsecs : u + 1,
					p = c - l + (f - u) / 1e4;
				if (p < 0 && void 0 === e.clockseq && (d = d + 1 & 16383), (p < 0 || c > l) && void 0 === e.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
				l = c, u = f, i = d;
				var m = (1e4 * (268435455 & (c += 122192928e5)) + f) % 4294967296;
				a[n++] = m >>> 24 & 255, a[n++] = m >>> 16 & 255, a[n++] = m >>> 8 & 255, a[n++] = 255 & m;
				var y = c / 4294967296 * 1e4 & 268435455;
				a[n++] = y >>> 8 & 255, a[n++] = 255 & y, a[n++] = y >>> 24 & 15 | 16, a[n++] = y >>> 16 & 255, a[n++] = d >>> 8 | 128, a[n++] = 255 & d;
				for (var v = e.node || s, h = 0; h < 6; ++h) a[n + h] = v[h];
				return t || r(a)
			}
		},
		"./node_modules/@reddit/google-tag-manager/node_modules/uuid/v4.js": function(e, t, o) {
			var n = o("./node_modules/@reddit/google-tag-manager/node_modules/uuid/lib/rng-browser.js"),
				r = o("./node_modules/@reddit/google-tag-manager/node_modules/uuid/lib/bytesToUuid.js");
			e.exports = function(e, t, o) {
				var a = t && o || 0;
				"string" == typeof e && (t = "binary" == e ? new Array(16) : null, e = null);
				var s = (e = e || {}).random || (e.rng || n)();
				if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, t)
					for (var i = 0; i < 16; ++i) t[a + i] = s[i];
				return t || r(s)
			}
		},
		"./node_modules/classnames/index.js": function(e, t, o) {
			var n;
			! function() {
				"use strict";
				var o = {}.hasOwnProperty;

				function r() {
					for (var e = [], t = 0; t < arguments.length; t++) {
						var n = arguments[t];
						if (n) {
							var a = typeof n;
							if ("string" === a || "number" === a) e.push(n);
							else if (Array.isArray(n)) {
								if (n.length) {
									var s = r.apply(null, n);
									s && e.push(s)
								}
							} else if ("object" === a)
								if (n.toString === Object.prototype.toString)
									for (var i in n) o.call(n, i) && n[i] && e.push(i);
								else e.push(n.toString())
						}
					}
					return e.join(" ")
				}
				e.exports ? (r.default = r, e.exports = r) : void 0 === (n = function() {
					return r
				}.apply(t, [])) || (e.exports = n)
			}()
		},
		"./node_modules/lodash/_arrayShuffle.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_copyArray.js"),
				r = o("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e) {
				return r(n(e))
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var o = Math.floor,
				n = Math.random;
			e.exports = function(e, t) {
				return e + o(n() * (t - e + 1))
			}
		},
		"./node_modules/lodash/_baseShuffle.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_shuffleSelf.js"),
				r = o("./node_modules/lodash/values.js");
			e.exports = function(e) {
				return n(r(e))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var o = -1,
					r = e.length,
					a = r - 1;
				for (t = void 0 === t ? r : t; ++o < t;) {
					var s = n(o, a),
						i = e[s];
					e[s] = e[o], e[o] = i
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/forOwn.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseForOwn.js"),
				r = o("./node_modules/lodash/_castFunction.js");
			e.exports = function(e, t) {
				return e && n(e, r(t))
			}
		},
		"./node_modules/lodash/isEqualWith.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseIsEqual.js");
			e.exports = function(e, t, o) {
				var r = (o = "function" == typeof o ? o : void 0) ? o(e, t) : void 0;
				return void 0 === r ? n(e, t, void 0, o) : !!r
			}
		},
		"./node_modules/lodash/map.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_arrayMap.js"),
				r = o("./node_modules/lodash/_baseIteratee.js"),
				a = o("./node_modules/lodash/_baseMap.js"),
				s = o("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (s(e) ? n : a)(e, r(t, 3))
			}
		},
		"./node_modules/lodash/negate.js": function(e, t) {
			var o = "Expected a function";
			e.exports = function(e) {
				if ("function" != typeof e) throw new TypeError(o);
				return function() {
					var t = arguments;
					switch (t.length) {
						case 0:
							return !e.call(this);
						case 1:
							return !e.call(this, t[0]);
						case 2:
							return !e.call(this, t[0], t[1]);
						case 3:
							return !e.call(this, t[0], t[1], t[2])
					}
					return !e.apply(this, t)
				}
			}
		},
		"./node_modules/lodash/omitBy.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseIteratee.js"),
				r = o("./node_modules/lodash/negate.js"),
				a = o("./node_modules/lodash/pickBy.js");
			e.exports = function(e, t) {
				return a(e, r(n(t)))
			}
		},
		"./node_modules/lodash/shuffle.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_arrayShuffle.js"),
				r = o("./node_modules/lodash/_baseShuffle.js"),
				a = o("./node_modules/lodash/isArray.js");
			e.exports = function(e) {
				return (a(e) ? n : r)(e)
			}
		},
		"./node_modules/lodash/union.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseFlatten.js"),
				r = o("./node_modules/lodash/_baseRest.js"),
				a = o("./node_modules/lodash/_baseUniq.js"),
				s = o("./node_modules/lodash/isArrayLikeObject.js"),
				i = r((function(e) {
					return a(n(e, 1, s, !0))
				}));
			e.exports = i
		},
		"./node_modules/lodash/xorWith.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_arrayFilter.js"),
				r = o("./node_modules/lodash/_baseRest.js"),
				a = o("./node_modules/lodash/_baseXor.js"),
				s = o("./node_modules/lodash/isArrayLikeObject.js"),
				i = o("./node_modules/lodash/last.js"),
				l = r((function(e) {
					var t = i(e);
					return t = "function" == typeof t ? t : void 0, a(n(e, s), void 0, t)
				}));
			e.exports = l
		},
		"./node_modules/react-motion/lib/Motion.js": function(e, t, o) {
			"use strict";
			t.__esModule = !0;
			var n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				},
				r = function() {
					function e(e, t) {
						for (var o = 0; o < t.length; o++) {
							var n = t[o];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, o, n) {
						return o && e(t.prototype, o), n && e(t, n), t
					}
				}();

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var s = a(o("./node_modules/react-motion/lib/mapToZero.js")),
				i = a(o("./node_modules/react-motion/lib/stripStyle.js")),
				l = a(o("./node_modules/react-motion/lib/stepper.js")),
				u = a(o("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				d = a(o("./node_modules/raf/index.js")),
				c = a(o("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				f = a(o("./node_modules/react/index.js")),
				p = a(o("./node_modules/react-motion/node_modules/prop-types/index.js")),
				m = 1e3 / 60,
				y = function(e) {
					function t(o) {
						var r = this;
						! function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
						}(this, t), e.call(this, o), this.wasAnimating = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyle = null, this.clearUnreadPropStyle = function(e) {
							var t = !1,
								o = r.state,
								a = o.currentStyle,
								s = o.currentVelocity,
								i = o.lastIdealStyle,
								l = o.lastIdealVelocity;
							for (var u in e)
								if (Object.prototype.hasOwnProperty.call(e, u)) {
									var d = e[u];
									"number" == typeof d && (t || (t = !0, a = n({}, a), s = n({}, s), i = n({}, i), l = n({}, l)), a[u] = d, s[u] = 0, i[u] = d, l[u] = 0)
								} t && r.setState({
								currentStyle: a,
								currentVelocity: s,
								lastIdealStyle: i,
								lastIdealVelocity: l
							})
						}, this.startAnimationIfNecessary = function() {
							r.animationID = d.default((function(e) {
								var t = r.props.style;
								if (c.default(r.state.currentStyle, t, r.state.currentVelocity)) return r.wasAnimating && r.props.onRest && r.props.onRest(), r.animationID = null, r.wasAnimating = !1, void(r.accumulatedTime = 0);
								r.wasAnimating = !0;
								var o = e || u.default(),
									n = o - r.prevTime;
								if (r.prevTime = o, r.accumulatedTime = r.accumulatedTime + n, r.accumulatedTime > 10 * m && (r.accumulatedTime = 0), 0 === r.accumulatedTime) return r.animationID = null, void r.startAnimationIfNecessary();
								var a = (r.accumulatedTime - Math.floor(r.accumulatedTime / m) * m) / m,
									s = Math.floor(r.accumulatedTime / m),
									i = {},
									d = {},
									f = {},
									p = {};
								for (var y in t)
									if (Object.prototype.hasOwnProperty.call(t, y)) {
										var v = t[y];
										if ("number" == typeof v) f[y] = v, p[y] = 0, i[y] = v, d[y] = 0;
										else {
											for (var h = r.state.lastIdealStyle[y], _ = r.state.lastIdealVelocity[y], g = 0; g < s; g++) {
												var b = l.default(m / 1e3, h, _, v.val, v.stiffness, v.damping, v.precision);
												h = b[0], _ = b[1]
											}
											var j = l.default(m / 1e3, h, _, v.val, v.stiffness, v.damping, v.precision),
												S = j[0],
												O = j[1];
											f[y] = h + (S - h) * a, p[y] = _ + (O - _) * a, i[y] = h, d[y] = _
										}
									} r.animationID = null, r.accumulatedTime -= s * m, r.setState({
									currentStyle: f,
									currentVelocity: p,
									lastIdealStyle: i,
									lastIdealVelocity: d
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
							o = e.style,
							n = t || i.default(o),
							r = s.default(n);
						return {
							currentStyle: n,
							currentVelocity: r,
							lastIdealStyle: n,
							lastIdealVelocity: r
						}
					}, t.prototype.componentDidMount = function() {
						this.prevTime = u.default(), this.startAnimationIfNecessary()
					}, t.prototype.componentWillReceiveProps = function(e) {
						null != this.unreadPropStyle && this.clearUnreadPropStyle(this.unreadPropStyle), this.unreadPropStyle = e.style, null == this.animationID && (this.prevTime = u.default(), this.startAnimationIfNecessary())
					}, t.prototype.componentWillUnmount = function() {
						null != this.animationID && (d.default.cancel(this.animationID), this.animationID = null)
					}, t.prototype.render = function() {
						var e = this.props.children(this.state.currentStyle);
						return e && f.default.Children.only(e)
					}, t
				}(f.default.Component);
			t.default = y, e.exports = t.default
		},
		"./node_modules/react-motion/lib/StaggeredMotion.js": function(e, t, o) {
			"use strict";
			t.__esModule = !0;
			var n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				},
				r = function() {
					function e(e, t) {
						for (var o = 0; o < t.length; o++) {
							var n = t[o];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, o, n) {
						return o && e(t.prototype, o), n && e(t, n), t
					}
				}();

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var s = a(o("./node_modules/react-motion/lib/mapToZero.js")),
				i = a(o("./node_modules/react-motion/lib/stripStyle.js")),
				l = a(o("./node_modules/react-motion/lib/stepper.js")),
				u = a(o("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				d = a(o("./node_modules/raf/index.js")),
				c = a(o("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				f = a(o("./node_modules/react/index.js")),
				p = a(o("./node_modules/react-motion/node_modules/prop-types/index.js")),
				m = 1e3 / 60;
			var y = function(e) {
				function t(o) {
					var r = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, o), this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = r.state, o = t.currentStyles, a = t.currentVelocities, s = t.lastIdealStyles, i = t.lastIdealVelocities, l = !1, u = 0; u < e.length; u++) {
							var d = e[u],
								c = !1;
							for (var f in d)
								if (Object.prototype.hasOwnProperty.call(d, f)) {
									var p = d[f];
									"number" == typeof p && (c || (c = !0, l = !0, o[u] = n({}, o[u]), a[u] = n({}, a[u]), s[u] = n({}, s[u]), i[u] = n({}, i[u])), o[u][f] = p, a[u][f] = 0, s[u][f] = p, i[u][f] = 0)
								}
						}
						l && r.setState({
							currentStyles: o,
							currentVelocities: a,
							lastIdealStyles: s,
							lastIdealVelocities: i
						})
					}, this.startAnimationIfNecessary = function() {
						r.animationID = d.default((function(e) {
							var t = r.props.styles(r.state.lastIdealStyles);
							if (function(e, t, o) {
									for (var n = 0; n < e.length; n++)
										if (!c.default(e[n], t[n], o[n])) return !1;
									return !0
								}(r.state.currentStyles, t, r.state.currentVelocities)) return r.animationID = null, void(r.accumulatedTime = 0);
							var o = e || u.default(),
								n = o - r.prevTime;
							if (r.prevTime = o, r.accumulatedTime = r.accumulatedTime + n, r.accumulatedTime > 10 * m && (r.accumulatedTime = 0), 0 === r.accumulatedTime) return r.animationID = null, void r.startAnimationIfNecessary();
							for (var a = (r.accumulatedTime - Math.floor(r.accumulatedTime / m) * m) / m, s = Math.floor(r.accumulatedTime / m), i = [], d = [], f = [], p = [], y = 0; y < t.length; y++) {
								var v = t[y],
									h = {},
									_ = {},
									g = {},
									b = {};
								for (var j in v)
									if (Object.prototype.hasOwnProperty.call(v, j)) {
										var S = v[j];
										if ("number" == typeof S) h[j] = S, _[j] = 0, g[j] = S, b[j] = 0;
										else {
											for (var O = r.state.lastIdealStyles[y][j], w = r.state.lastIdealVelocities[y][j], P = 0; P < s; P++) {
												var T = l.default(m / 1e3, O, w, S.val, S.stiffness, S.damping, S.precision);
												O = T[0], w = T[1]
											}
											var I = l.default(m / 1e3, O, w, S.val, S.stiffness, S.damping, S.precision),
												k = I[0],
												x = I[1];
											h[j] = O + (k - O) * a, _[j] = w + (x - w) * a, g[j] = O, b[j] = w
										}
									} f[y] = h, p[y] = _, i[y] = g, d[y] = b
							}
							r.animationID = null, r.accumulatedTime -= s * m, r.setState({
								currentStyles: f,
								currentVelocities: p,
								lastIdealStyles: i,
								lastIdealVelocities: d
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
						o = e.styles,
						n = t || o().map(i.default),
						r = n.map((function(e) {
							return s.default(e)
						}));
					return {
						currentStyles: n,
						currentVelocities: r,
						lastIdealStyles: n,
						lastIdealVelocities: r
					}
				}, t.prototype.componentDidMount = function() {
					this.prevTime = u.default(), this.startAnimationIfNecessary()
				}, t.prototype.componentWillReceiveProps = function(e) {
					null != this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles), this.unreadPropStyles = e.styles(this.state.lastIdealStyles), null == this.animationID && (this.prevTime = u.default(), this.startAnimationIfNecessary())
				}, t.prototype.componentWillUnmount = function() {
					null != this.animationID && (d.default.cancel(this.animationID), this.animationID = null)
				}, t.prototype.render = function() {
					var e = this.props.children(this.state.currentStyles);
					return e && f.default.Children.only(e)
				}, t
			}(f.default.Component);
			t.default = y, e.exports = t.default
		},
		"./node_modules/react-motion/lib/TransitionMotion.js": function(e, t, o) {
			"use strict";
			t.__esModule = !0;
			var n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				},
				r = function() {
					function e(e, t) {
						for (var o = 0; o < t.length; o++) {
							var n = t[o];
							n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
						}
					}
					return function(t, o, n) {
						return o && e(t.prototype, o), n && e(t, n), t
					}
				}();

			function a(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}
			var s = a(o("./node_modules/react-motion/lib/mapToZero.js")),
				i = a(o("./node_modules/react-motion/lib/stripStyle.js")),
				l = a(o("./node_modules/react-motion/lib/stepper.js")),
				u = a(o("./node_modules/react-motion/lib/mergeDiff.js")),
				d = a(o("./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js")),
				c = a(o("./node_modules/raf/index.js")),
				f = a(o("./node_modules/react-motion/lib/shouldStopAnimation.js")),
				p = a(o("./node_modules/react/index.js")),
				m = a(o("./node_modules/react-motion/node_modules/prop-types/index.js")),
				y = 1e3 / 60;

			function v(e, t, o) {
				var n = t;
				return null == n ? e.map((function(e, t) {
					return {
						key: e.key,
						data: e.data,
						style: o[t]
					}
				})) : e.map((function(e, t) {
					for (var r = 0; r < n.length; r++)
						if (n[r].key === e.key) return {
							key: n[r].key,
							data: n[r].data,
							style: o[t]
						};
					return {
						key: e.key,
						data: e.data,
						style: o[t]
					}
				}))
			}

			function h(e, t, o, n, r, a, i, l, d) {
				for (var c = u.default(n, r, (function(e, n) {
						var r = t(n);
						return null == r ? (o({
							key: n.key,
							data: n.data
						}), null) : f.default(a[e], r, i[e]) ? (o({
							key: n.key,
							data: n.data
						}), null) : {
							key: n.key,
							data: n.data,
							style: r
						}
					})), p = [], m = [], y = [], v = [], h = 0; h < c.length; h++) {
					for (var _ = c[h], g = null, b = 0; b < n.length; b++)
						if (n[b].key === _.key) {
							g = b;
							break
						} if (null == g) {
						var j = e(_);
						p[h] = j, y[h] = j;
						var S = s.default(_.style);
						m[h] = S, v[h] = S
					} else p[h] = a[g], y[h] = l[g], m[h] = i[g], v[h] = d[g]
				}
				return [c, p, m, y, v]
			}
			var _ = function(e) {
				function t(o) {
					var r = this;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t), e.call(this, o), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
						for (var t = h(r.props.willEnter, r.props.willLeave, r.props.didLeave, r.state.mergedPropsStyles, e, r.state.currentStyles, r.state.currentVelocities, r.state.lastIdealStyles, r.state.lastIdealVelocities), o = t[0], a = t[1], s = t[2], i = t[3], l = t[4], u = 0; u < e.length; u++) {
							var d = e[u].style,
								c = !1;
							for (var f in d)
								if (Object.prototype.hasOwnProperty.call(d, f)) {
									var p = d[f];
									"number" == typeof p && (c || (c = !0, a[u] = n({}, a[u]), s[u] = n({}, s[u]), i[u] = n({}, i[u]), l[u] = n({}, l[u]), o[u] = {
										key: o[u].key,
										data: o[u].data,
										style: n({}, o[u].style)
									}), a[u][f] = p, s[u][f] = 0, i[u][f] = p, l[u][f] = 0, o[u].style[f] = p)
								}
						}
						r.setState({
							currentStyles: a,
							currentVelocities: s,
							mergedPropsStyles: o,
							lastIdealStyles: i,
							lastIdealVelocities: l
						})
					}, this.startAnimationIfNecessary = function() {
						r.unmounting || (r.animationID = c.default((function(e) {
							if (!r.unmounting) {
								var t = r.props.styles,
									o = "function" == typeof t ? t(v(r.state.mergedPropsStyles, r.unreadPropStyles, r.state.lastIdealStyles)) : t;
								if (function(e, t, o, n) {
										if (n.length !== t.length) return !1;
										for (var r = 0; r < n.length; r++)
											if (n[r].key !== t[r].key) return !1;
										for (r = 0; r < n.length; r++)
											if (!f.default(e[r], t[r].style, o[r])) return !1;
										return !0
									}(r.state.currentStyles, o, r.state.currentVelocities, r.state.mergedPropsStyles)) return r.animationID = null, void(r.accumulatedTime = 0);
								var n = e || d.default(),
									a = n - r.prevTime;
								if (r.prevTime = n, r.accumulatedTime = r.accumulatedTime + a, r.accumulatedTime > 10 * y && (r.accumulatedTime = 0), 0 === r.accumulatedTime) return r.animationID = null, void r.startAnimationIfNecessary();
								for (var s = (r.accumulatedTime - Math.floor(r.accumulatedTime / y) * y) / y, i = Math.floor(r.accumulatedTime / y), u = h(r.props.willEnter, r.props.willLeave, r.props.didLeave, r.state.mergedPropsStyles, o, r.state.currentStyles, r.state.currentVelocities, r.state.lastIdealStyles, r.state.lastIdealVelocities), c = u[0], p = u[1], m = u[2], _ = u[3], g = u[4], b = 0; b < c.length; b++) {
									var j = c[b].style,
										S = {},
										O = {},
										w = {},
										P = {};
									for (var T in j)
										if (Object.prototype.hasOwnProperty.call(j, T)) {
											var I = j[T];
											if ("number" == typeof I) S[T] = I, O[T] = 0, w[T] = I, P[T] = 0;
											else {
												for (var k = _[b][T], x = g[b][T], E = 0; E < i; E++) {
													var M = l.default(y / 1e3, k, x, I.val, I.stiffness, I.damping, I.precision);
													k = M[0], x = M[1]
												}
												var D = l.default(y / 1e3, k, x, I.val, I.stiffness, I.damping, I.precision),
													A = D[0],
													V = D[1];
												S[T] = k + (A - k) * s, O[T] = x + (V - x) * s, w[T] = k, P[T] = x
											}
										} _[b] = w, g[b] = P, p[b] = S, m[b] = O
								}
								r.animationID = null, r.accumulatedTime -= i * y, r.setState({
									currentStyles: p,
									currentVelocities: m,
									lastIdealStyles: _,
									lastIdealVelocities: g,
									mergedPropsStyles: c
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
						o = e.styles,
						n = e.willEnter,
						r = e.willLeave,
						a = e.didLeave,
						l = "function" == typeof o ? o(t) : o,
						u = void 0;
					u = null == t ? l : t.map((function(e) {
						for (var t = 0; t < l.length; t++)
							if (l[t].key === e.key) return l[t];
						return e
					}));
					var d = null == t ? l.map((function(e) {
							return i.default(e.style)
						})) : t.map((function(e) {
							return i.default(e.style)
						})),
						c = null == t ? l.map((function(e) {
							return s.default(e.style)
						})) : t.map((function(e) {
							return s.default(e.style)
						})),
						f = h(n, r, a, u, l, d, c, d, c),
						p = f[0];
					return {
						currentStyles: f[1],
						currentVelocities: f[2],
						lastIdealStyles: f[3],
						lastIdealVelocities: f[4],
						mergedPropsStyles: p
					}
				}, t.prototype.componentDidMount = function() {
					this.prevTime = d.default(), this.startAnimationIfNecessary()
				}, t.prototype.componentWillReceiveProps = function(e) {
					this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles);
					var t = e.styles;
					this.unreadPropStyles = "function" == typeof t ? t(v(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles)) : t, null == this.animationID && (this.prevTime = d.default(), this.startAnimationIfNecessary())
				}, t.prototype.componentWillUnmount = function() {
					this.unmounting = !0, null != this.animationID && (c.default.cancel(this.animationID), this.animationID = null)
				}, t.prototype.render = function() {
					var e = v(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles),
						t = this.props.children(e);
					return t && p.default.Children.only(t)
				}, t
			}(p.default.Component);
			t.default = _, e.exports = t.default
		},
		"./node_modules/react-motion/lib/mapToZero.js": function(e, t, o) {
			"use strict";
			t.__esModule = !0, t.default = function(e) {
				var t = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = 0);
				return t
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/mergeDiff.js": function(e, t, o) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, o) {
				for (var n = {}, r = 0; r < e.length; r++) n[e[r].key] = r;
				var a = {};
				for (r = 0; r < t.length; r++) a[t[r].key] = r;
				var s = [];
				for (r = 0; r < t.length; r++) s[r] = t[r];
				for (r = 0; r < e.length; r++)
					if (!Object.prototype.hasOwnProperty.call(a, e[r].key)) {
						var i = o(r, e[r]);
						null != i && s.push(i)
					} return s.sort((function(e, o) {
					var r = a[e.key],
						s = a[o.key],
						i = n[e.key],
						l = n[o.key];
					if (null != r && null != s) return a[e.key] - a[o.key];
					if (null != i && null != l) return n[e.key] - n[o.key];
					if (null != r) {
						for (var u = 0; u < t.length; u++) {
							var d = t[u].key;
							if (Object.prototype.hasOwnProperty.call(n, d)) {
								if (r < a[d] && l > n[d]) return -1;
								if (r > a[d] && l < n[d]) return 1
							}
						}
						return 1
					}
					for (u = 0; u < t.length; u++) {
						d = t[u].key;
						if (Object.prototype.hasOwnProperty.call(n, d)) {
							if (s < a[d] && i > n[d]) return 1;
							if (s > a[d] && i < n[d]) return -1
						}
					}
					return -1
				}))
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/presets.js": function(e, t, o) {
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
		"./node_modules/react-motion/lib/react-motion.js": function(e, t, o) {
			"use strict";

			function n(e) {
				return e && e.__esModule ? e.default : e
			}
			t.__esModule = !0;
			var r = o("./node_modules/react-motion/lib/Motion.js");
			t.Motion = n(r);
			var a = o("./node_modules/react-motion/lib/StaggeredMotion.js");
			t.StaggeredMotion = n(a);
			var s = o("./node_modules/react-motion/lib/TransitionMotion.js");
			t.TransitionMotion = n(s);
			var i = o("./node_modules/react-motion/lib/spring.js");
			t.spring = n(i);
			var l = o("./node_modules/react-motion/lib/presets.js");
			t.presets = n(l);
			var u = o("./node_modules/react-motion/lib/stripStyle.js");
			t.stripStyle = n(u);
			var d = o("./node_modules/react-motion/lib/reorderKeys.js");
			t.reorderKeys = n(d)
		},
		"./node_modules/react-motion/lib/reorderKeys.js": function(e, t, o) {
			"use strict";
			t.__esModule = !0, t.default = function() {
				0
			};
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/shouldStopAnimation.js": function(e, t, o) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, o) {
				for (var n in t)
					if (Object.prototype.hasOwnProperty.call(t, n)) {
						if (0 !== o[n]) return !1;
						var r = "number" == typeof t[n] ? t[n] : t[n].val;
						if (e[n] !== r) return !1
					} return !0
			}, e.exports = t.default
		},
		"./node_modules/react-motion/lib/spring.js": function(e, t, o) {
			"use strict";
			t.__esModule = !0;
			var n = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var o = arguments[t];
					for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
				}
				return e
			};
			t.default = function(e, t) {
				return n({}, i, t, {
					val: e
				})
			};
			var r, a = o("./node_modules/react-motion/lib/presets.js"),
				s = (r = a) && r.__esModule ? r : {
					default: r
				},
				i = n({}, s.default.noWobble, {
					precision: .01
				});
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stepper.js": function(e, t, o) {
			"use strict";
			t.__esModule = !0, t.default = function(e, t, o, r, a, s, i) {
				var l = o + (-a * (t - r) + -s * o) * e,
					u = t + l * e;
				if (Math.abs(l) < i && Math.abs(u - r) < i) return n[0] = r, n[1] = 0, n;
				return n[0] = u, n[1] = l, n
			};
			var n = [0, 0];
			e.exports = t.default
		},
		"./node_modules/react-motion/lib/stripStyle.js": function(e, t, o) {
			"use strict";
			t.__esModule = !0, t.default = function(e) {
				var t = {};
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = "number" == typeof e[o] ? e[o] : e[o].val);
				return t
			}, e.exports = t.default
		},
		"./node_modules/react-motion/node_modules/performance-now/lib/performance-now.js": function(e, t, o) {
			(function(t) {
				(function() {
					var o, n, r;
					"undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
						return performance.now()
					} : null != t && t.hrtime ? (e.exports = function() {
						return (o() - r) / 1e6
					}, n = t.hrtime, r = (o = function() {
						var e;
						return 1e9 * (e = n())[0] + e[1]
					})()) : Date.now ? (e.exports = function() {
						return Date.now() - r
					}, r = Date.now()) : (e.exports = function() {
						return (new Date).getTime() - r
					}, r = (new Date).getTime())
				}).call(this)
			}).call(this, o("./node_modules/process/browser.js"))
		},
		"./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function r() {}

			function a() {}
			a.resetWarningCache = r, e.exports = function() {
				function e(e, t, o, r, a, s) {
					if (s !== n) {
						var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw i.name = "Invariant Violation", i
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var o = {
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
					resetWarningCache: r
				};
				return o.PropTypes = o, o
			}
		},
		"./node_modules/react-motion/node_modules/prop-types/index.js": function(e, t, o) {
			e.exports = o("./node_modules/react-motion/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-motion/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, o) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./node_modules/ts-error/lib/cjs.js": function(e, t, o) {
			"use strict";
			t.__esModule = void 0, t.__esModule = !0;
			var n = o("./node_modules/ts-error/lib/helpers.js"),
				r = n.setPrototypeOf,
				a = n.getPrototypeOf,
				s = n.defineProperty,
				i = n.objectCreate,
				l = "[object Error]" === (new Error).toString(),
				u = "";

			function d(e) {
				var t, o = this.constructor,
					n = o.name || (null === (t = o.toString().match(/^function\s*([^\s(]+)/)) ? u || "Error" : t[1]),
					i = "Error" === n,
					c = i ? u : n,
					f = Error.apply(this, arguments);
				if (r(f, a(this)), !(f instanceof o && f instanceof d)) {
					f = this;
					Error.apply(this, arguments), s(f, "message", {
						configurable: !0,
						enumerable: !1,
						value: e,
						writable: !0
					})
				}
				if (s(f, "name", {
						configurable: !0,
						enumerable: !1,
						value: c,
						writable: !0
					}), Error.captureStackTrace && Error.captureStackTrace(f, i ? d : o), void 0 === f.stack) {
					var p = new Error(e);
					p.name = f.name, f.stack = p.stack
				}
				return l && s(f, "toString", {
					configurable: !0,
					enumerable: !1,
					value: function() {
						return (this.name || "Error") + (void 0 === this.message ? "" : ": " + this.message)
					},
					writable: !0
				}), f
			}
			u = d.name || "ExtendableError", d.prototype = i(Error.prototype, {
				constructor: {
					value: Error,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t.ExtendableError = d, t.default = t.ExtendableError
		},
		"./node_modules/ts-error/lib/helpers.js": function(e, t, o) {
			"use strict";
			t.__esModule = void 0, t.__esModule = !0;
			var n = "function" == typeof Object.setPrototypeOf,
				r = "function" == typeof Object.getPrototypeOf,
				a = "function" == typeof Object.defineProperty,
				s = "function" == typeof Object.create,
				i = "function" == typeof Object.prototype.hasOwnProperty;
			t.setPrototypeOf = function(e, t) {
				n ? Object.setPrototypeOf(e, t) : e.__proto__ = t
			};
			t.getPrototypeOf = function(e) {
				return r ? Object.getPrototypeOf(e) : e.__proto__ || e.prototype
			};
			var l = !1;
			t.defineProperty = function e(t, o, n) {
				if (a && !l) try {
					Object.defineProperty(t, o, n)
				} catch (r) {
					l = !0, e(t, o, n)
				} else t[o] = n.value
			};
			var u = function(e, t) {
				return i ? e.hasOwnProperty(e, t) : void 0 === e[t]
			};
			t.hasOwnProperty = u;
			t.objectCreate = function(e, t) {
				if (s) return Object.create(e, t);
				var o = function() {};
				o.prototype = e;
				var n = new o;
				if (void 0 === t) return n;
				if ("null" == typeof t) throw new Error("PropertyDescriptors must not be null.");
				if ("object" == typeof t)
					for (var r in t) u(t, r) && (n[r] = t[r].value);
				return n
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~Reddit.af6013323ec2e9fb5c14.js.map