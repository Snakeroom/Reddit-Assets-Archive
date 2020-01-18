// https://www.redditstatic.com/desktop2x/vendors~Governance~Reddit.c0e808323891f3da58b8.js
// Retrieved at 1/18/2020, 3:45:21 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~Governance~Reddit"], {
		"./node_modules/@r/frames/compiled.js": function(e, n, o) {
			"use strict";
			(function(e) {
				Object.defineProperty(n, "__esModule", {
					value: !0
				});
				var o = arguments,
					t = ".*",
					r = ".postMessage",
					s = {
						targetOrigin: "*"
					},
					i = /\..+$/;

				function u(e) {
					return new RegExp("\\.(?:" + e.join("|") + ")$")
				}

				function l(e) {
					return new RegExp("^http(s)?:\\/\\/" + e.join("|") + "$", "i")
				}
				var a = [t],
					d = l(a),
					c = [r],
					f = u(c),
					h = {},
					m = !1;

				function _(n, o, t) {
					e.addEventListener ? e.addEventListener(n, o, t) : e.attachEvent && e.attachEvent("on" + n, o)
				}

				function p(n, o) {
					e.removeEventListener ? e.removeEventListener(n, o) : e.detachEvent && e.detachEvent("on" + n, o)
				}

				function v(e) {
					return /\*/.test(e)
				}
				var j = n.postMessage = function(e, n, o) {
						var t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
						i.test(n) || (n += r);
						var u = t;
						Object.keys(s).forEach((function(e) {
							u[e] = s[e]
						})), e.postMessage(JSON.stringify({
							type: n,
							data: o,
							defaultedOptions: u
						}), u.targetOrigin)
					},
					g = n.receiveMessage = function(e, n, o, t) {
						"string" == typeof e && (t = o, o = n, n = e, e = null), t = t || void 0;
						var r = function(n) {
							for (var r = arguments.length, s = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) s[i - 1] = arguments[i];
							e && e !== n.source && e.contentWindow !== n.source || o.apply(t, [n].concat(s))
						};
						return _(n, r), {
							off: function() {
								p(n, r)
							}
						}
					},
					b = (n.receiveMessageOnce = function(e, n, t, r) {
						var s = g(e, n, (function() {
							t && t.apply(void 0, o), s.off()
						}), r);
						return s
					}, n.removePostMessageOrigin = function(e) {
						var n = a.indexOf(e); - 1 !== n && (a.splice(n, 1), d = l(a))
					}),
					y = e.CustomEvent;
				if ("undefined" != typeof window && "function" != typeof y) {
					var w = {
						bubbles: !1,
						cancelable: !1,
						detail: void 0
					};
					(y = function(e, n) {
						n = n || w;
						var o = document.createEvent("CustomEvent");
						return o.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), o
					}).prototype = e.Event.prototype
				}
				n.addPostMessageOrigin = function(e) {
					v(e) ? a = [t] : -1 === a.indexOf(e) && (b(t), a.push(e), d = l(a))
				};

				function O(n) {
					if (n.origin === e.location.origin || d.test(n.origin) || "null" === n.origin) {
						var o = {};
						try {
							o = JSON.parse(n.data)
						} catch (n) {}
						var t = o.type;
						if (f.test(t)) {
							var r = t.split(".", 2)[1];
							if (h[r]) h[r].targets.forEach((function(e) {
								return j(e, t, o.data, o.options)
							}));
							var s = new y(t, {
								detail: o.data
							});
							s.source = n.source, e.dispatchEvent(s)
						}
					}
				}
				var A = n.listen = function(e) {
					-1 === c.indexOf(e) && (c.push(e), f = u(c)), m || (_("message", O), m = !0)
				};
				n.stopListening = function(e) {
					var n = c.indexOf(e); - 1 !== n && (c.splice(n, 1), c.length ? f = u(c) : (p("message", O), m = !1))
				}, n.proxy = function(e, n) {
					A(e), Array.isArray(n) || (n = [n]);
					var o = h[e];
					o ? o.targets = [].concat(o.targets, n) : o = {
						targets: n
					}, h[e] = o
				}
			}).call(this, o("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/bignumber.js/bignumber.js": function(e, n, o) {
			var t;
			! function(r) {
				"use strict";
				var s, i = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
					u = Math.ceil,
					l = Math.floor,
					a = "[BigNumber Error] ",
					d = a + "Number primitive has more than 15 significant digits: ",
					c = 1e14,
					f = 14,
					h = 9007199254740991,
					m = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
					_ = 1e7,
					p = 1e9;

				function v(e) {
					var n = 0 | e;
					return e > 0 || e === n ? n : n - 1
				}

				function j(e) {
					for (var n, o, t = 1, r = e.length, s = e[0] + ""; t < r;) {
						for (n = e[t++] + "", o = f - n.length; o--; n = "0" + n);
						s += n
					}
					for (r = s.length; 48 === s.charCodeAt(--r););
					return s.slice(0, r + 1 || 1)
				}

				function g(e, n) {
					var o, t, r = e.c,
						s = n.c,
						i = e.s,
						u = n.s,
						l = e.e,
						a = n.e;
					if (!i || !u) return null;
					if (o = r && !r[0], t = s && !s[0], o || t) return o ? t ? 0 : -u : i;
					if (i != u) return i;
					if (o = i < 0, t = l == a, !r || !s) return t ? 0 : !r ^ o ? 1 : -1;
					if (!t) return l > a ^ o ? 1 : -1;
					for (u = (l = r.length) < (a = s.length) ? l : a, i = 0; i < u; i++)
						if (r[i] != s[i]) return r[i] > s[i] ^ o ? 1 : -1;
					return l == a ? 0 : l > a ^ o ? 1 : -1
				}

				function b(e, n, o, t) {
					if (e < n || e > o || e !== (e < 0 ? u(e) : l(e))) throw Error(a + (t || "Argument") + ("number" == typeof e ? e < n || e > o ? " out of range: " : " not an integer: " : " not a primitive number: ") + e)
				}

				function y(e) {
					return "[object Array]" == Object.prototype.toString.call(e)
				}

				function w(e) {
					var n = e.c.length - 1;
					return v(e.e / f) == n && e.c[n] % 2 != 0
				}

				function O(e, n) {
					return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (n < 0 ? "e" : "e+") + n
				}

				function A(e, n, o) {
					var t, r;
					if (n < 0) {
						for (r = o + "."; ++n; r += o);
						e = r + e
					} else if (++n > (t = e.length)) {
						for (r = o, n -= t; --n; r += o);
						e += r
					} else n < t && (e = e.slice(0, n) + "." + e.slice(n));
					return e
				}(s = function e(n) {
					var o, t, r, s, x, E, S, N, I, P = G.prototype = {
							constructor: G,
							toString: null,
							valueOf: null
						},
						R = new G(1),
						C = 20,
						L = 4,
						M = -7,
						k = 21,
						T = -1e7,
						F = 1e7,
						D = !1,
						U = 1,
						B = 0,
						q = {
							decimalSeparator: ".",
							groupSeparator: ",",
							groupSize: 3,
							secondaryGroupSize: 0,
							fractionGroupSeparator: " ",
							fractionGroupSize: 0
						},
						z = "0123456789abcdefghijklmnopqrstuvwxyz";

					function G(e, n) {
						var o, s, u, a, c, m, _, p, v = this;
						if (!(v instanceof G)) return new G(e, n);
						if (null == n) {
							if (e instanceof G) return v.s = e.s, v.e = e.e, void(v.c = (e = e.c) ? e.slice() : e);
							if ((m = "number" == typeof e) && 0 * e == 0) {
								if (v.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
									for (a = 0, c = e; c >= 10; c /= 10, a++);
									return v.e = a, void(v.c = [e])
								}
								p = e + ""
							} else {
								if (!i.test(p = e + "")) return r(v, p, m);
								v.s = 45 == p.charCodeAt(0) ? (p = p.slice(1), -1) : 1
							}(a = p.indexOf(".")) > -1 && (p = p.replace(".", "")), (c = p.search(/e/i)) > 0 ? (a < 0 && (a = c), a += +p.slice(c + 1), p = p.substring(0, c)) : a < 0 && (a = p.length)
						} else {
							if (b(n, 2, z.length, "Base"), p = e + "", 10 == n) return H(v = new G(e instanceof G ? e : p), C + v.e + 1, L);
							if (m = "number" == typeof e) {
								if (0 * e != 0) return r(v, p, m, n);
								if (v.s = 1 / e < 0 ? (p = p.slice(1), -1) : 1, G.DEBUG && p.replace(/^0\.0*|\./, "").length > 15) throw Error(d + e);
								m = !1
							} else v.s = 45 === p.charCodeAt(0) ? (p = p.slice(1), -1) : 1;
							for (o = z.slice(0, n), a = c = 0, _ = p.length; c < _; c++)
								if (o.indexOf(s = p.charAt(c)) < 0) {
									if ("." == s) {
										if (c > a) {
											a = _;
											continue
										}
									} else if (!u && (p == p.toUpperCase() && (p = p.toLowerCase()) || p == p.toLowerCase() && (p = p.toUpperCase()))) {
										u = !0, c = -1, a = 0;
										continue
									}
									return r(v, e + "", m, n)
								}(a = (p = t(p, n, 10, v.s)).indexOf(".")) > - 1 ? p = p.replace(".", "") : a = p.length
						}
						for (c = 0; 48 === p.charCodeAt(c); c++);
						for (_ = p.length; 48 === p.charCodeAt(--_););
						if (p = p.slice(c, ++_)) {
							if (_ -= c, m && G.DEBUG && _ > 15 && (e > h || e !== l(e))) throw Error(d + v.s * e);
							if ((a = a - c - 1) > F) v.c = v.e = null;
							else if (a < T) v.c = [v.e = 0];
							else {
								if (v.e = a, v.c = [], c = (a + 1) % f, a < 0 && (c += f), c < _) {
									for (c && v.c.push(+p.slice(0, c)), _ -= f; c < _;) v.c.push(+p.slice(c, c += f));
									p = p.slice(c), c = f - p.length
								} else c -= _;
								for (; c--; p += "0");
								v.c.push(+p)
							}
						} else v.c = [v.e = 0]
					}

					function $(e, n, o, t) {
						var r, s, i, u, l;
						if (null == o ? o = L : b(o, 0, 8), !e.c) return e.toString();
						if (r = e.c[0], i = e.e, null == n) l = j(e.c), l = 1 == t || 2 == t && i <= M ? O(l, i) : A(l, i, "0");
						else if (s = (e = H(new G(e), n, o)).e, u = (l = j(e.c)).length, 1 == t || 2 == t && (n <= s || s <= M)) {
							for (; u < n; l += "0", u++);
							l = O(l, s)
						} else if (n -= i, l = A(l, s, "0"), s + 1 > u) {
							if (--n > 0)
								for (l += "."; n--; l += "0");
						} else if ((n += s - u) > 0)
							for (s + 1 == u && (l += "."); n--; l += "0");
						return e.s < 0 && r ? "-" + l : l
					}

					function V(e, n) {
						var o, t, r = 0;
						for (y(e[0]) && (e = e[0]), o = new G(e[0]); ++r < e.length;) {
							if (!(t = new G(e[r])).s) {
								o = t;
								break
							}
							n.call(o, t) && (o = t)
						}
						return o
					}

					function W(e, n, o) {
						for (var t = 1, r = n.length; !n[--r]; n.pop());
						for (r = n[0]; r >= 10; r /= 10, t++);
						return (o = t + o * f - 1) > F ? e.c = e.e = null : o < T ? e.c = [e.e = 0] : (e.e = o, e.c = n), e
					}

					function H(e, n, o, t) {
						var r, s, i, a, d, h, _, p = e.c,
							v = m;
						if (p) {
							e: {
								for (r = 1, a = p[0]; a >= 10; a /= 10, r++);
								if ((s = n - r) < 0) s += f,
								i = n,
								_ = (d = p[h = 0]) / v[r - i - 1] % 10 | 0;
								else if ((h = u((s + 1) / f)) >= p.length) {
									if (!t) break e;
									for (; p.length <= h; p.push(0));
									d = _ = 0, r = 1, i = (s %= f) - f + 1
								} else {
									for (d = a = p[h], r = 1; a >= 10; a /= 10, r++);
									_ = (i = (s %= f) - f + r) < 0 ? 0 : d / v[r - i - 1] % 10 | 0
								}
								if (t = t || n < 0 || null != p[h + 1] || (i < 0 ? d : d % v[r - i - 1]), t = o < 4 ? (_ || t) && (0 == o || o == (e.s < 0 ? 3 : 2)) : _ > 5 || 5 == _ && (4 == o || t || 6 == o && (s > 0 ? i > 0 ? d / v[r - i] : 0 : p[h - 1]) % 10 & 1 || o == (e.s < 0 ? 8 : 7)), n < 1 || !p[0]) return p.length = 0,
								t ? (n -= e.e + 1, p[0] = v[(f - n % f) % f], e.e = -n || 0) : p[0] = e.e = 0,
								e;
								if (0 == s ? (p.length = h, a = 1, h--) : (p.length = h + 1, a = v[f - s], p[h] = i > 0 ? l(d / v[r - i] % v[i]) * a : 0), t)
									for (;;) {
										if (0 == h) {
											for (s = 1, i = p[0]; i >= 10; i /= 10, s++);
											for (i = p[0] += a, a = 1; i >= 10; i /= 10, a++);
											s != a && (e.e++, p[0] == c && (p[0] = 1));
											break
										}
										if (p[h] += a, p[h] != c) break;
										p[h--] = 0, a = 1
									}
								for (s = p.length; 0 === p[--s]; p.pop());
							}
							e.e > F ? e.c = e.e = null : e.e < T && (e.c = [e.e = 0])
						}
						return e
					}
					return G.clone = e, G.ROUND_UP = 0, G.ROUND_DOWN = 1, G.ROUND_CEIL = 2, G.ROUND_FLOOR = 3, G.ROUND_HALF_UP = 4, G.ROUND_HALF_DOWN = 5, G.ROUND_HALF_EVEN = 6, G.ROUND_HALF_CEIL = 7, G.ROUND_HALF_FLOOR = 8, G.EUCLID = 9, G.config = G.set = function(e) {
						var n, o;
						if (null != e) {
							if ("object" != typeof e) throw Error(a + "Object expected: " + e);
							if (e.hasOwnProperty(n = "DECIMAL_PLACES") && (b(o = e[n], 0, p, n), C = o), e.hasOwnProperty(n = "ROUNDING_MODE") && (b(o = e[n], 0, 8, n), L = o), e.hasOwnProperty(n = "EXPONENTIAL_AT") && (y(o = e[n]) ? (b(o[0], -p, 0, n), b(o[1], 0, p, n), M = o[0], k = o[1]) : (b(o, -p, p, n), M = -(k = o < 0 ? -o : o))), e.hasOwnProperty(n = "RANGE"))
								if (y(o = e[n])) b(o[0], -p, -1, n), b(o[1], 1, p, n), T = o[0], F = o[1];
								else {
									if (b(o, -p, p, n), !o) throw Error(a + n + " cannot be zero: " + o);
									T = -(F = o < 0 ? -o : o)
								} if (e.hasOwnProperty(n = "CRYPTO")) {
								if ((o = e[n]) !== !!o) throw Error(a + n + " not true or false: " + o);
								if (o) {
									if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw D = !o, Error(a + "crypto unavailable");
									D = o
								} else D = o
							}
							if (e.hasOwnProperty(n = "MODULO_MODE") && (b(o = e[n], 0, 9, n), U = o), e.hasOwnProperty(n = "POW_PRECISION") && (b(o = e[n], 0, p, n), B = o), e.hasOwnProperty(n = "FORMAT")) {
								if ("object" != typeof(o = e[n])) throw Error(a + n + " not an object: " + o);
								q = o
							}
							if (e.hasOwnProperty(n = "ALPHABET")) {
								if ("string" != typeof(o = e[n]) || /^.$|\.|(.).*\1/.test(o)) throw Error(a + n + " invalid: " + o);
								z = o
							}
						}
						return {
							DECIMAL_PLACES: C,
							ROUNDING_MODE: L,
							EXPONENTIAL_AT: [M, k],
							RANGE: [T, F],
							CRYPTO: D,
							MODULO_MODE: U,
							POW_PRECISION: B,
							FORMAT: q,
							ALPHABET: z
						}
					}, G.isBigNumber = function(e) {
						return e instanceof G || e && !0 === e._isBigNumber || !1
					}, G.maximum = G.max = function() {
						return V(arguments, P.lt)
					}, G.minimum = G.min = function() {
						return V(arguments, P.gt)
					}, G.random = (s = 9007199254740992 * Math.random() & 2097151 ? function() {
						return l(9007199254740992 * Math.random())
					} : function() {
						return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
					}, function(e) {
						var n, o, t, r, i, d = 0,
							c = [],
							h = new G(R);
						if (null == e ? e = C : b(e, 0, p), r = u(e / f), D)
							if (crypto.getRandomValues) {
								for (n = crypto.getRandomValues(new Uint32Array(r *= 2)); d < r;)(i = 131072 * n[d] + (n[d + 1] >>> 11)) >= 9e15 ? (o = crypto.getRandomValues(new Uint32Array(2)), n[d] = o[0], n[d + 1] = o[1]) : (c.push(i % 1e14), d += 2);
								d = r / 2
							} else {
								if (!crypto.randomBytes) throw D = !1, Error(a + "crypto unavailable");
								for (n = crypto.randomBytes(r *= 7); d < r;)(i = 281474976710656 * (31 & n[d]) + 1099511627776 * n[d + 1] + 4294967296 * n[d + 2] + 16777216 * n[d + 3] + (n[d + 4] << 16) + (n[d + 5] << 8) + n[d + 6]) >= 9e15 ? crypto.randomBytes(7).copy(n, d) : (c.push(i % 1e14), d += 7);
								d = r / 7
							} if (!D)
							for (; d < r;)(i = s()) < 9e15 && (c[d++] = i % 1e14);
						for (r = c[--d], e %= f, r && e && (i = m[f - e], c[d] = l(r / i) * i); 0 === c[d]; c.pop(), d--);
						if (d < 0) c = [t = 0];
						else {
							for (t = -1; 0 === c[0]; c.splice(0, 1), t -= f);
							for (d = 1, i = c[0]; i >= 10; i /= 10, d++);
							d < f && (t -= f - d)
						}
						return h.e = t, h.c = c, h
					}), t = function() {
						function e(e, n, o, t) {
							for (var r, s, i = [0], u = 0, l = e.length; u < l;) {
								for (s = i.length; s--; i[s] *= n);
								for (i[0] += t.indexOf(e.charAt(u++)), r = 0; r < i.length; r++) i[r] > o - 1 && (null == i[r + 1] && (i[r + 1] = 0), i[r + 1] += i[r] / o | 0, i[r] %= o)
							}
							return i.reverse()
						}
						return function(n, t, r, s, i) {
							var u, l, a, d, c, f, h, m, _ = n.indexOf("."),
								p = C,
								v = L;
							for (_ >= 0 && (d = B, B = 0, n = n.replace(".", ""), f = (m = new G(t)).pow(n.length - _), B = d, m.c = e(A(j(f.c), f.e, "0"), 10, r, "0123456789"), m.e = m.c.length), a = d = (h = e(n, t, r, i ? (u = z, "0123456789") : (u = "0123456789", z))).length; 0 == h[--d]; h.pop());
							if (!h[0]) return u.charAt(0);
							if (_ < 0 ? --a : (f.c = h, f.e = a, f.s = s, h = (f = o(f, m, p, v, r)).c, c = f.r, a = f.e), _ = h[l = a + p + 1], d = r / 2, c = c || l < 0 || null != h[l + 1], c = v < 4 ? (null != _ || c) && (0 == v || v == (f.s < 0 ? 3 : 2)) : _ > d || _ == d && (4 == v || c || 6 == v && 1 & h[l - 1] || v == (f.s < 0 ? 8 : 7)), l < 1 || !h[0]) n = c ? A(u.charAt(1), -p, u.charAt(0)) : u.charAt(0);
							else {
								if (h.length = l, c)
									for (--r; ++h[--l] > r;) h[l] = 0, l || (++a, h = [1].concat(h));
								for (d = h.length; !h[--d];);
								for (_ = 0, n = ""; _ <= d; n += u.charAt(h[_++]));
								n = A(n, a, u.charAt(0))
							}
							return n
						}
					}(), o = function() {
						function e(e, n, o) {
							var t, r, s, i, u = 0,
								l = e.length,
								a = n % _,
								d = n / _ | 0;
							for (e = e.slice(); l--;) u = ((r = a * (s = e[l] % _) + (t = d * s + (i = e[l] / _ | 0) * a) % _ * _ + u) / o | 0) + (t / _ | 0) + d * i, e[l] = r % o;
							return u && (e = [u].concat(e)), e
						}

						function n(e, n, o, t) {
							var r, s;
							if (o != t) s = o > t ? 1 : -1;
							else
								for (r = s = 0; r < o; r++)
									if (e[r] != n[r]) {
										s = e[r] > n[r] ? 1 : -1;
										break
									} return s
						}

						function o(e, n, o, t) {
							for (var r = 0; o--;) e[o] -= r, r = e[o] < n[o] ? 1 : 0, e[o] = r * t + e[o] - n[o];
							for (; !e[0] && e.length > 1; e.splice(0, 1));
						}
						return function(t, r, s, i, u) {
							var a, d, h, m, _, p, j, g, b, y, w, O, A, x, E, S, N, I = t.s == r.s ? 1 : -1,
								P = t.c,
								R = r.c;
							if (!(P && P[0] && R && R[0])) return new G(t.s && r.s && (P ? !R || P[0] != R[0] : R) ? P && 0 == P[0] || !R ? 0 * I : I / 0 : NaN);
							for (b = (g = new G(I)).c = [], I = s + (d = t.e - r.e) + 1, u || (u = c, d = v(t.e / f) - v(r.e / f), I = I / f | 0), h = 0; R[h] == (P[h] || 0); h++);
							if (R[h] > (P[h] || 0) && d--, I < 0) b.push(1), m = !0;
							else {
								for (x = P.length, S = R.length, h = 0, I += 2, (_ = l(u / (R[0] + 1))) > 1 && (R = e(R, _, u), P = e(P, _, u), S = R.length, x = P.length), A = S, w = (y = P.slice(0, S)).length; w < S; y[w++] = 0);
								N = R.slice(), N = [0].concat(N), E = R[0], R[1] >= u / 2 && E++;
								do {
									if (_ = 0, (a = n(R, y, S, w)) < 0) {
										if (O = y[0], S != w && (O = O * u + (y[1] || 0)), (_ = l(O / E)) > 1)
											for (_ >= u && (_ = u - 1), j = (p = e(R, _, u)).length, w = y.length; 1 == n(p, y, j, w);) _--, o(p, S < j ? N : R, j, u), j = p.length, a = 1;
										else 0 == _ && (a = _ = 1), j = (p = R.slice()).length;
										if (j < w && (p = [0].concat(p)), o(y, p, w, u), w = y.length, -1 == a)
											for (; n(R, y, S, w) < 1;) _++, o(y, S < w ? N : R, w, u), w = y.length
									} else 0 === a && (_++, y = [0]);
									b[h++] = _, y[0] ? y[w++] = P[A] || 0 : (y = [P[A]], w = 1)
								} while ((A++ < x || null != y[0]) && I--);
								m = null != y[0], b[0] || b.splice(0, 1)
							}
							if (u == c) {
								for (h = 1, I = b[0]; I >= 10; I /= 10, h++);
								H(g, s + (g.e = h + d * f - 1) + 1, i, m)
							} else g.e = d, g.r = +m;
							return g
						}
					}(), x = /^(-?)0([xbo])(?=\w[\w.]*$)/i, E = /^([^.]+)\.$/, S = /^\.([^.]+)$/, N = /^-?(Infinity|NaN)$/, I = /^\s*\+(?=[\w.])|^\s+|\s+$/g, r = function(e, n, o, t) {
						var r, s = o ? n : n.replace(I, "");
						if (N.test(s)) e.s = isNaN(s) ? null : s < 0 ? -1 : 1, e.c = e.e = null;
						else {
							if (!o && (s = s.replace(x, (function(e, n, o) {
									return r = "x" == (o = o.toLowerCase()) ? 16 : "b" == o ? 2 : 8, t && t != r ? e : n
								})), t && (r = t, s = s.replace(E, "$1").replace(S, "0.$1")), n != s)) return new G(s, r);
							if (G.DEBUG) throw Error(a + "Not a" + (t ? " base " + t : "") + " number: " + n);
							e.c = e.e = e.s = null
						}
					}, P.absoluteValue = P.abs = function() {
						var e = new G(this);
						return e.s < 0 && (e.s = 1), e
					}, P.comparedTo = function(e, n) {
						return g(this, new G(e, n))
					}, P.decimalPlaces = P.dp = function(e, n) {
						var o, t, r, s = this;
						if (null != e) return b(e, 0, p), null == n ? n = L : b(n, 0, 8), H(new G(s), e + s.e + 1, n);
						if (!(o = s.c)) return null;
						if (t = ((r = o.length - 1) - v(this.e / f)) * f, r = o[r])
							for (; r % 10 == 0; r /= 10, t--);
						return t < 0 && (t = 0), t
					}, P.dividedBy = P.div = function(e, n) {
						return o(this, new G(e, n), C, L)
					}, P.dividedToIntegerBy = P.idiv = function(e, n) {
						return o(this, new G(e, n), 0, 1)
					}, P.exponentiatedBy = P.pow = function(e, n) {
						var o, t, r, s, i, d, c, h = this;
						if ((e = new G(e)).c && !e.isInteger()) throw Error(a + "Exponent not an integer: " + e);
						if (null != n && (n = new G(n)), s = e.e > 14, !h.c || !h.c[0] || 1 == h.c[0] && !h.e && 1 == h.c.length || !e.c || !e.c[0]) return c = new G(Math.pow(+h.valueOf(), s ? 2 - w(e) : +e)), n ? c.mod(n) : c;
						if (i = e.s < 0, n) {
							if (n.c ? !n.c[0] : !n.s) return new G(NaN);
							(t = !i && h.isInteger() && n.isInteger()) && (h = h.mod(n))
						} else {
							if (e.e > 9 && (h.e > 0 || h.e < -1 || (0 == h.e ? h.c[0] > 1 || s && h.c[1] >= 24e7 : h.c[0] < 8e13 || s && h.c[0] <= 9999975e7))) return r = h.s < 0 && w(e) ? -0 : 0, h.e > -1 && (r = 1 / r), new G(i ? 1 / r : r);
							B && (r = u(B / f + 2))
						}
						for (s ? (o = new G(.5), d = w(e)) : d = e % 2, i && (e.s = 1), c = new G(R);;) {
							if (d) {
								if (!(c = c.times(h)).c) break;
								r ? c.c.length > r && (c.c.length = r) : t && (c = c.mod(n))
							}
							if (s) {
								if (H(e = e.times(o), e.e + 1, 1), !e.c[0]) break;
								s = e.e > 14, d = w(e)
							} else {
								if (!(e = l(e / 2))) break;
								d = e % 2
							}
							h = h.times(h), r ? h.c && h.c.length > r && (h.c.length = r) : t && (h = h.mod(n))
						}
						return t ? c : (i && (c = R.div(c)), n ? c.mod(n) : r ? H(c, B, L, void 0) : c)
					}, P.integerValue = function(e) {
						var n = new G(this);
						return null == e ? e = L : b(e, 0, 8), H(n, n.e + 1, e)
					}, P.isEqualTo = P.eq = function(e, n) {
						return 0 === g(this, new G(e, n))
					}, P.isFinite = function() {
						return !!this.c
					}, P.isGreaterThan = P.gt = function(e, n) {
						return g(this, new G(e, n)) > 0
					}, P.isGreaterThanOrEqualTo = P.gte = function(e, n) {
						return 1 === (n = g(this, new G(e, n))) || 0 === n
					}, P.isInteger = function() {
						return !!this.c && v(this.e / f) > this.c.length - 2
					}, P.isLessThan = P.lt = function(e, n) {
						return g(this, new G(e, n)) < 0
					}, P.isLessThanOrEqualTo = P.lte = function(e, n) {
						return -1 === (n = g(this, new G(e, n))) || 0 === n
					}, P.isNaN = function() {
						return !this.s
					}, P.isNegative = function() {
						return this.s < 0
					}, P.isPositive = function() {
						return this.s > 0
					}, P.isZero = function() {
						return !!this.c && 0 == this.c[0]
					}, P.minus = function(e, n) {
						var o, t, r, s, i = this,
							u = i.s;
						if (n = (e = new G(e, n)).s, !u || !n) return new G(NaN);
						if (u != n) return e.s = -n, i.plus(e);
						var l = i.e / f,
							a = e.e / f,
							d = i.c,
							h = e.c;
						if (!l || !a) {
							if (!d || !h) return d ? (e.s = -n, e) : new G(h ? i : NaN);
							if (!d[0] || !h[0]) return h[0] ? (e.s = -n, e) : new G(d[0] ? i : 3 == L ? -0 : 0)
						}
						if (l = v(l), a = v(a), d = d.slice(), u = l - a) {
							for ((s = u < 0) ? (u = -u, r = d) : (a = l, r = h), r.reverse(), n = u; n--; r.push(0));
							r.reverse()
						} else
							for (t = (s = (u = d.length) < (n = h.length)) ? u : n, u = n = 0; n < t; n++)
								if (d[n] != h[n]) {
									s = d[n] < h[n];
									break
								} if (s && (r = d, d = h, h = r, e.s = -e.s), (n = (t = h.length) - (o = d.length)) > 0)
							for (; n--; d[o++] = 0);
						for (n = c - 1; t > u;) {
							if (d[--t] < h[t]) {
								for (o = t; o && !d[--o]; d[o] = n);
								--d[o], d[t] += c
							}
							d[t] -= h[t]
						}
						for (; 0 == d[0]; d.splice(0, 1), --a);
						return d[0] ? W(e, d, a) : (e.s = 3 == L ? -1 : 1, e.c = [e.e = 0], e)
					}, P.modulo = P.mod = function(e, n) {
						var t, r, s = this;
						return e = new G(e, n), !s.c || !e.s || e.c && !e.c[0] ? new G(NaN) : !e.c || s.c && !s.c[0] ? new G(s) : (9 == U ? (r = e.s, e.s = 1, t = o(s, e, 0, 3), e.s = r, t.s *= r) : t = o(s, e, 0, U), (e = s.minus(t.times(e))).c[0] || 1 != U || (e.s = s.s), e)
					}, P.multipliedBy = P.times = function(e, n) {
						var o, t, r, s, i, u, l, a, d, h, m, p, j, g, b, y = this,
							w = y.c,
							O = (e = new G(e, n)).c;
						if (!(w && O && w[0] && O[0])) return !y.s || !e.s || w && !w[0] && !O || O && !O[0] && !w ? e.c = e.e = e.s = null : (e.s *= y.s, w && O ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
						for (t = v(y.e / f) + v(e.e / f), e.s *= y.s, (l = w.length) < (h = O.length) && (j = w, w = O, O = j, r = l, l = h, h = r), r = l + h, j = []; r--; j.push(0));
						for (g = c, b = _, r = h; --r >= 0;) {
							for (o = 0, m = O[r] % b, p = O[r] / b | 0, s = r + (i = l); s > r;) o = ((a = m * (a = w[--i] % b) + (u = p * a + (d = w[i] / b | 0) * m) % b * b + j[s] + o) / g | 0) + (u / b | 0) + p * d, j[s--] = a % g;
							j[s] = o
						}
						return o ? ++t : j.splice(0, 1), W(e, j, t)
					}, P.negated = function() {
						var e = new G(this);
						return e.s = -e.s || null, e
					}, P.plus = function(e, n) {
						var o, t = this,
							r = t.s;
						if (n = (e = new G(e, n)).s, !r || !n) return new G(NaN);
						if (r != n) return e.s = -n, t.minus(e);
						var s = t.e / f,
							i = e.e / f,
							u = t.c,
							l = e.c;
						if (!s || !i) {
							if (!u || !l) return new G(r / 0);
							if (!u[0] || !l[0]) return l[0] ? e : new G(u[0] ? t : 0 * r)
						}
						if (s = v(s), i = v(i), u = u.slice(), r = s - i) {
							for (r > 0 ? (i = s, o = l) : (r = -r, o = u), o.reverse(); r--; o.push(0));
							o.reverse()
						}
						for ((r = u.length) - (n = l.length) < 0 && (o = l, l = u, u = o, n = r), r = 0; n;) r = (u[--n] = u[n] + l[n] + r) / c | 0, u[n] = c === u[n] ? 0 : u[n] % c;
						return r && (u = [r].concat(u), ++i), W(e, u, i)
					}, P.precision = P.sd = function(e, n) {
						var o, t, r, s = this;
						if (null != e && e !== !!e) return b(e, 1, p), null == n ? n = L : b(n, 0, 8), H(new G(s), e, n);
						if (!(o = s.c)) return null;
						if (t = (r = o.length - 1) * f + 1, r = o[r]) {
							for (; r % 10 == 0; r /= 10, t--);
							for (r = o[0]; r >= 10; r /= 10, t++);
						}
						return e && s.e + 1 > t && (t = s.e + 1), t
					}, P.shiftedBy = function(e) {
						return b(e, -h, h), this.times("1e" + e)
					}, P.squareRoot = P.sqrt = function() {
						var e, n, t, r, s, i = this,
							u = i.c,
							l = i.s,
							a = i.e,
							d = C + 4,
							c = new G("0.5");
						if (1 !== l || !u || !u[0]) return new G(!l || l < 0 && (!u || u[0]) ? NaN : u ? i : 1 / 0);
						if (0 == (l = Math.sqrt(+i)) || l == 1 / 0 ? (((n = j(u)).length + a) % 2 == 0 && (n += "0"), l = Math.sqrt(n), a = v((a + 1) / 2) - (a < 0 || a % 2), t = new G(n = l == 1 / 0 ? "1e" + a : (n = l.toExponential()).slice(0, n.indexOf("e") + 1) + a)) : t = new G(l + ""), t.c[0])
							for ((l = (a = t.e) + d) < 3 && (l = 0);;)
								if (s = t, t = c.times(s.plus(o(i, s, d, 1))), j(s.c).slice(0, l) === (n = j(t.c)).slice(0, l)) {
									if (t.e < a && --l, "9999" != (n = n.slice(l - 3, l + 1)) && (r || "4999" != n)) {
										+n && (+n.slice(1) || "5" != n.charAt(0)) || (H(t, t.e + C + 2, 1), e = !t.times(t).eq(i));
										break
									}
									if (!r && (H(s, s.e + C + 2, 0), s.times(s).eq(i))) {
										t = s;
										break
									}
									d += 4, l += 4, r = 1
								} return H(t, t.e + C + 1, L, e)
					}, P.toExponential = function(e, n) {
						return null != e && (b(e, 0, p), e++), $(this, e, n, 1)
					}, P.toFixed = function(e, n) {
						return null != e && (b(e, 0, p), e = e + this.e + 1), $(this, e, n)
					}, P.toFormat = function(e, n) {
						var o = this.toFixed(e, n);
						if (this.c) {
							var t, r = o.split("."),
								s = +q.groupSize,
								i = +q.secondaryGroupSize,
								u = q.groupSeparator,
								l = r[0],
								a = r[1],
								d = this.s < 0,
								c = d ? l.slice(1) : l,
								f = c.length;
							if (i && (t = s, s = i, i = t, f -= t), s > 0 && f > 0) {
								for (t = f % s || s, l = c.substr(0, t); t < f; t += s) l += u + c.substr(t, s);
								i > 0 && (l += u + c.slice(t)), d && (l = "-" + l)
							}
							o = a ? l + q.decimalSeparator + ((i = +q.fractionGroupSize) ? a.replace(new RegExp("\\d{" + i + "}\\B", "g"), "$&" + q.fractionGroupSeparator) : a) : l
						}
						return o
					}, P.toFraction = function(e) {
						var n, t, r, s, i, u, l, d, c, h, _, p, v = this,
							g = v.c;
						if (null != e && (!(d = new G(e)).isInteger() && (d.c || 1 !== d.s) || d.lt(R))) throw Error(a + "Argument " + (d.isInteger() ? "out of range: " : "not an integer: ") + e);
						if (!g) return v.toString();
						for (t = new G(R), h = r = new G(R), s = c = new G(R), p = j(g), u = t.e = p.length - v.e - 1, t.c[0] = m[(l = u % f) < 0 ? f + l : l], e = !e || d.comparedTo(t) > 0 ? u > 0 ? t : h : d, l = F, F = 1 / 0, d = new G(p), c.c[0] = 0; _ = o(d, t, 0, 1), 1 != (i = r.plus(_.times(s))).comparedTo(e);) r = s, s = i, h = c.plus(_.times(i = h)), c = i, t = d.minus(_.times(i = t)), d = i;
						return i = o(e.minus(r), s, 0, 1), c = c.plus(i.times(h)), r = r.plus(i.times(s)), c.s = h.s = v.s, n = o(h, s, u *= 2, L).minus(v).abs().comparedTo(o(c, r, u, L).minus(v).abs()) < 1 ? [h.toString(), s.toString()] : [c.toString(), r.toString()], F = l, n
					}, P.toNumber = function() {
						return +this
					}, P.toPrecision = function(e, n) {
						return null != e && b(e, 1, p), $(this, e, n, 2)
					}, P.toString = function(e) {
						var n, o = this,
							r = o.s,
							s = o.e;
						return null === s ? r ? (n = "Infinity", r < 0 && (n = "-" + n)) : n = "NaN" : (n = j(o.c), null == e ? n = s <= M || s >= k ? O(n, s) : A(n, s, "0") : (b(e, 2, z.length, "Base"), n = t(A(n, s, "0"), 10, e, r, !0)), r < 0 && o.c[0] && (n = "-" + n)), n
					}, P.valueOf = P.toJSON = function() {
						var e, n = this,
							o = n.e;
						return null === o ? n.toString() : (e = j(n.c), e = o <= M || o >= k ? O(e, o) : A(e, o, "0"), n.s < 0 ? "-" + e : e)
					}, P._isBigNumber = !0, null != n && G.set(n), G
				}()).default = s.BigNumber = s, void 0 === (t = function() {
					return s
				}.call(n, o, n, e)) || (e.exports = t)
			}()
		},
		"./node_modules/core-js/modules/_new-promise-capability.js": function(e, n, o) {
			"use strict";
			var t = o("./node_modules/core-js/modules/_a-function.js");

			function r(e) {
				var n, o;
				this.promise = new e((function(e, t) {
					if (void 0 !== n || void 0 !== o) throw TypeError("Bad Promise constructor");
					n = e, o = t
				})), this.resolve = t(n), this.reject = t(o)
			}
			e.exports.f = function(e) {
				return new r(e)
			}
		},
		"./node_modules/core-js/modules/_promise-resolve.js": function(e, n, o) {
			var t = o("./node_modules/core-js/modules/_an-object.js"),
				r = o("./node_modules/core-js/modules/_is-object.js"),
				s = o("./node_modules/core-js/modules/_new-promise-capability.js");
			e.exports = function(e, n) {
				if (t(e), r(n) && n.constructor === e) return n;
				var o = s.f(e);
				return (0, o.resolve)(n), o.promise
			}
		},
		"./node_modules/core-js/modules/_string-trim.js": function(e, n, o) {
			var t = o("./node_modules/core-js/modules/_export.js"),
				r = o("./node_modules/core-js/modules/_defined.js"),
				s = o("./node_modules/core-js/modules/_fails.js"),
				i = o("./node_modules/core-js/modules/_string-ws.js"),
				u = "[" + i + "]",
				l = RegExp("^" + u + u + "*"),
				a = RegExp(u + u + "*$"),
				d = function(e, n, o) {
					var r = {},
						u = s((function() {
							return !!i[e]() || "​" != "​" [e]()
						})),
						l = r[e] = u ? n(c) : i[e];
					o && (r[o] = l), t(t.P + t.F * u, "String", r)
				},
				c = d.trim = function(e, n) {
					return e = String(r(e)), 1 & n && (e = e.replace(l, "")), 2 & n && (e = e.replace(a, "")), e
				};
			e.exports = d
		},
		"./node_modules/core-js/modules/_string-ws.js": function(e, n) {
			e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
		},
		"./node_modules/core-js/modules/es7.promise.finally.js": function(e, n, o) {
			"use strict";
			var t = o("./node_modules/core-js/modules/_export.js"),
				r = o("./node_modules/core-js/modules/_core.js"),
				s = o("./node_modules/core-js/modules/_global.js"),
				i = o("./node_modules/core-js/modules/_species-constructor.js"),
				u = o("./node_modules/core-js/modules/_promise-resolve.js");
			t(t.P + t.R, "Promise", {
				finally: function(e) {
					var n = i(this, r.Promise || s.Promise),
						o = "function" == typeof e;
					return this.then(o ? function(o) {
						return u(n, e()).then((function() {
							return o
						}))
					} : e, o ? function(o) {
						return u(n, e()).then((function() {
							throw o
						}))
					} : e)
				}
			})
		},
		"./node_modules/core-js/modules/es7.string.trim-right.js": function(e, n, o) {
			"use strict";
			o("./node_modules/core-js/modules/_string-trim.js")("trimRight", (function(e) {
				return function() {
					return e(this, 2)
				}
			}), "trimEnd")
		},
		"./node_modules/fbjs/lib/emptyFunction.js": function(e, n, o) {
			"use strict";

			function t(e) {
				return function() {
					return e
				}
			}
			var r = function() {};
			r.thatReturns = t, r.thatReturnsFalse = t(!1), r.thatReturnsTrue = t(!0), r.thatReturnsNull = t(null), r.thatReturnsThis = function() {
				return this
			}, r.thatReturnsArgument = function(e) {
				return e
			}, e.exports = r
		},
		"./node_modules/icepick/icepick.js": function(e, n, o) {
			"use strict";
			const t = n,
				r = e => e,
				s = e => null !== e && (Array.isArray(e) || i(e)),
				i = e => !("object" != typeof e || e.constructor !== Object && null != e.constructor || Object.getPrototypeOf(e) !== Object.prototype && null !== Object.getPrototypeOf(e)),
				u = (e, n) => {
					let o, t;
					if (Array.isArray(e))
						for (o = e.length; o--;) n(o);
					else
						for (o = (t = Object.keys(e)).length; o--;) n(t[o])
				},
				l = e => Array.isArray(e) ? e.slice() : (e => {
					const n = null == e.constructor ? Object.create(null) : {},
						o = Object.keys(e);
					let t, r = o.length;
					for (; r--;) n[t = o[r]] = e[t];
					return n
				})(e),
				a = r,
				d = r;

			function c(e, n) {
				return (n || []).reduce((e, n) => {
					if (e) return e[n]
				}, e)
			}

			function f(e, n) {
				return Object.keys(n).reduce((e, o) => t.assoc(e, o, n[o]), e)
			}

			function h(e, n, o) {
				return e[n] === o ? e : t.assoc(e, n, o)
			}
			n.freeze = r, n.thaw = function e(n) {
				if (!s(n) || !Object.isFrozen(n)) return n;
				const o = Array.isArray(n) ? new Array(n.length) : {};
				return u(n, t => {
					o[t] = e(n[t])
				}), o
			}, n.assoc = function(e, n, o) {
				if (e[n] === o) return d(e);
				const t = l(e);
				return t[n] = a(o), d(t)
			}, n.set = n.assoc, n.dissoc = function(e, n) {
				const o = l(e);
				return delete o[n], d(o)
			}, n.unset = n.dissoc, n.assocIn = function e(n, o, r) {
				const s = o[0];
				return 1 === o.length ? t.assoc(n, s, r) : t.assoc(n, s, e(n[s] || {}, o.slice(1), r))
			}, n.setIn = n.assocIn, n.dissocIn = function e(n, o) {
				const r = o[0];
				return n.hasOwnProperty(r) ? 1 === o.length ? t.dissoc(n, r) : t.assoc(n, r, e(n[r], o.slice(1))) : n
			}, n.unsetIn = n.dissocIn, n.getIn = c, n.updateIn = function(e, n, o) {
				const r = c(e, n);
				return t.assocIn(e, n, o(r))
			}, ["push", "unshift", "pop", "shift", "reverse", "sort"].forEach(e => {
				n[e] = function(n, o) {
					const t = [...n];
					return t[e](a(o)), d(t)
				}, n[e].displayName = "icepick." + e
			}), n.splice = function(e, ...n) {
				const o = [...e],
					t = n.map(a);
				return o.splice.apply(o, t), d(o)
			}, n.slice = function(e, n, o) {
				const t = e.slice(n, o);
				return d(t)
			}, ["map", "filter"].forEach(e => {
				n[e] = function(n, o) {
					const t = o[e](n);
					return d(t)
				}, n[e].displayName = "icepick." + e
			}), n.extend = n.assign = function(e, ...n) {
				const o = n.reduce(f, e);
				return d(o)
			}, n.merge = function e(n, o, r) {
				if (null == n || null == o) return n;
				return Object.keys(o).reduce((n, i) => {
					const u = o[i],
						l = n[i],
						a = r ? r(l, u, i) : u;
					return s(u) && s(l) ? a === l ? n : Array.isArray(u) ? t.assoc(n, i, a) : h(n, i, e(l, a, r)) : h(n, i, a)
				}, n)
			};
			const m = {
				value: function() {
					return this.val
				},
				thru: function(e) {
					return this.val = a(e(this.val)), this
				}
			};
			Object.keys(n).forEach(e => {
				e.match(/^(map|filter)$/) ? m[e] = function(o) {
					return this.val = n[e](o, this.val), this
				} : m[e] = function(...o) {
					return this.val = n[e](this.val, ...o), this
				}
			}), n.chain = function(e) {
				const n = Object.create(m);
				return n.val = e, n
			}
		},
		"./node_modules/lodash/_arraySampleSize.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseClamp.js"),
				r = o("./node_modules/lodash/_copyArray.js"),
				s = o("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, n) {
				return s(r(e), t(n, 0, e.length))
			}
		},
		"./node_modules/lodash/_assignMergeValue.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseAssignValue.js"),
				r = o("./node_modules/lodash/eq.js");
			e.exports = function(e, n, o) {
				(void 0 === o || r(e[n], o)) && (void 0 !== o || n in e) || t(e, n, o)
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, n) {
			e.exports = function(e, n, o) {
				return e == e && (void 0 !== o && (e = e <= o ? e : o), void 0 !== n && (e = e >= n ? e : n)), e
			}
		},
		"./node_modules/lodash/_baseInverter.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseForOwn.js");
			e.exports = function(e, n, o, r) {
				return t(e, (function(e, t, s) {
					n(r, o(e), t, s)
				})), r
			}
		},
		"./node_modules/lodash/_baseMerge.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_Stack.js"),
				r = o("./node_modules/lodash/_assignMergeValue.js"),
				s = o("./node_modules/lodash/_baseFor.js"),
				i = o("./node_modules/lodash/_baseMergeDeep.js"),
				u = o("./node_modules/lodash/isObject.js"),
				l = o("./node_modules/lodash/keysIn.js"),
				a = o("./node_modules/lodash/_safeGet.js");
			e.exports = function e(n, o, d, c, f) {
				n !== o && s(o, (function(s, l) {
					if (f || (f = new t), u(s)) i(n, o, l, d, e, c, f);
					else {
						var h = c ? c(a(n, l), s, l + "", n, o, f) : void 0;
						void 0 === h && (h = s), r(n, l, h)
					}
				}), l)
			}
		},
		"./node_modules/lodash/_baseMergeDeep.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_assignMergeValue.js"),
				r = o("./node_modules/lodash/_cloneBuffer.js"),
				s = o("./node_modules/lodash/_cloneTypedArray.js"),
				i = o("./node_modules/lodash/_copyArray.js"),
				u = o("./node_modules/lodash/_initCloneObject.js"),
				l = o("./node_modules/lodash/isArguments.js"),
				a = o("./node_modules/lodash/isArray.js"),
				d = o("./node_modules/lodash/isArrayLikeObject.js"),
				c = o("./node_modules/lodash/isBuffer.js"),
				f = o("./node_modules/lodash/isFunction.js"),
				h = o("./node_modules/lodash/isObject.js"),
				m = o("./node_modules/lodash/isPlainObject.js"),
				_ = o("./node_modules/lodash/isTypedArray.js"),
				p = o("./node_modules/lodash/_safeGet.js"),
				v = o("./node_modules/lodash/toPlainObject.js");
			e.exports = function(e, n, o, j, g, b, y) {
				var w = p(e, o),
					O = p(n, o),
					A = y.get(O);
				if (A) t(e, o, A);
				else {
					var x = b ? b(w, O, o + "", e, n, y) : void 0,
						E = void 0 === x;
					if (E) {
						var S = a(O),
							N = !S && c(O),
							I = !S && !N && _(O);
						x = O, S || N || I ? a(w) ? x = w : d(w) ? x = i(w) : N ? (E = !1, x = r(O, !0)) : I ? (E = !1, x = s(O, !0)) : x = [] : m(O) || l(O) ? (x = w, l(w) ? x = v(w) : h(w) && !f(w) || (x = u(O))) : E = !1
					}
					E && (y.set(O, x), g(x, O, j, b, y), y.delete(O)), t(e, o, x)
				}
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, n) {
			var o = Math.floor,
				t = Math.random;
			e.exports = function(e, n) {
				return e + o(t() * (n - e + 1))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseClamp.js"),
				r = o("./node_modules/lodash/_shuffleSelf.js"),
				s = o("./node_modules/lodash/values.js");
			e.exports = function(e, n) {
				var o = s(e);
				return r(o, t(n, 0, o.length))
			}
		},
		"./node_modules/lodash/_baseSome.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, n) {
				var o;
				return t(e, (function(e, t, r) {
					return !(o = n(e, t, r))
				})), !!o
			}
		},
		"./node_modules/lodash/_baseXor.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseDifference.js"),
				r = o("./node_modules/lodash/_baseFlatten.js"),
				s = o("./node_modules/lodash/_baseUniq.js");
			e.exports = function(e, n, o) {
				var i = e.length;
				if (i < 2) return i ? s(e[0]) : [];
				for (var u = -1, l = Array(i); ++u < i;)
					for (var a = e[u], d = -1; ++d < i;) d != u && (l[u] = t(l[u] || a, e[d], n, o));
				return s(r(l, 1), n, o)
			}
		},
		"./node_modules/lodash/_castSlice.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseSlice.js");
			e.exports = function(e, n, o) {
				var r = e.length;
				return o = void 0 === o ? r : o, !n && o >= r ? e : t(e, n, o)
			}
		},
		"./node_modules/lodash/_charsStartIndex.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseIndexOf.js");
			e.exports = function(e, n) {
				for (var o = -1, r = e.length; ++o < r && t(n, e[o], 0) > -1;);
				return o
			}
		},
		"./node_modules/lodash/_createCaseFirst.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_castSlice.js"),
				r = o("./node_modules/lodash/_hasUnicode.js"),
				s = o("./node_modules/lodash/_stringToArray.js"),
				i = o("./node_modules/lodash/toString.js");
			e.exports = function(e) {
				return function(n) {
					n = i(n);
					var o = r(n) ? s(n) : void 0,
						u = o ? o[0] : n.charAt(0),
						l = o ? t(o, 1).join("") : n.slice(1);
					return u[e]() + l
				}
			}
		},
		"./node_modules/lodash/_createFind.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseIteratee.js"),
				r = o("./node_modules/lodash/isArrayLike.js"),
				s = o("./node_modules/lodash/keys.js");
			e.exports = function(e) {
				return function(n, o, i) {
					var u = Object(n);
					if (!r(n)) {
						var l = t(o, 3);
						n = s(n), o = function(e) {
							return l(u[e], e, u)
						}
					}
					var a = e(n, o, i);
					return a > -1 ? u[l ? n[a] : a] : void 0
				}
			}
		},
		"./node_modules/lodash/_createInverter.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseInverter.js");
			e.exports = function(e, n) {
				return function(o, r) {
					return t(o, e, n(r), {})
				}
			}
		},
		"./node_modules/lodash/_safeGet.js": function(e, n) {
			e.exports = function(e, n) {
				if (("constructor" !== n || "function" != typeof e[n]) && "__proto__" != n) return e[n]
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, n) {
				var o = -1,
					r = e.length,
					s = r - 1;
				for (n = void 0 === n ? r : n; ++o < n;) {
					var i = t(o, s),
						u = e[i];
					e[i] = e[o], e[o] = u
				}
				return e.length = n, e
			}
		},
		"./node_modules/lodash/camelCase.js": function(e, n, o) {
			var t = o("./node_modules/lodash/capitalize.js"),
				r = o("./node_modules/lodash/_createCompounder.js")((function(e, n, o) {
					return n = n.toLowerCase(), e + (o ? t(n) : n)
				}));
			e.exports = r
		},
		"./node_modules/lodash/capitalize.js": function(e, n, o) {
			var t = o("./node_modules/lodash/toString.js"),
				r = o("./node_modules/lodash/upperFirst.js");
			e.exports = function(e) {
				return r(t(e).toLowerCase())
			}
		},
		"./node_modules/lodash/defaults.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseRest.js"),
				r = o("./node_modules/lodash/eq.js"),
				s = o("./node_modules/lodash/_isIterateeCall.js"),
				i = o("./node_modules/lodash/keysIn.js"),
				u = Object.prototype,
				l = u.hasOwnProperty,
				a = t((function(e, n) {
					e = Object(e);
					var o = -1,
						t = n.length,
						a = t > 2 ? n[2] : void 0;
					for (a && s(n[0], n[1], a) && (t = 1); ++o < t;)
						for (var d = n[o], c = i(d), f = -1, h = c.length; ++f < h;) {
							var m = c[f],
								_ = e[m];
							(void 0 === _ || r(_, u[m]) && !l.call(e, m)) && (e[m] = d[m])
						}
					return e
				}));
			e.exports = a
		},
		"./node_modules/lodash/find.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_createFind.js")(o("./node_modules/lodash/findIndex.js"));
			e.exports = t
		},
		"./node_modules/lodash/findIndex.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseFindIndex.js"),
				r = o("./node_modules/lodash/_baseIteratee.js"),
				s = o("./node_modules/lodash/toInteger.js"),
				i = Math.max;
			e.exports = function(e, n, o) {
				var u = null == e ? 0 : e.length;
				if (!u) return -1;
				var l = null == o ? 0 : s(o);
				return l < 0 && (l = i(u + l, 0)), t(e, r(n, 3), l)
			}
		},
		"./node_modules/lodash/findLastIndex.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseFindIndex.js"),
				r = o("./node_modules/lodash/_baseIteratee.js"),
				s = o("./node_modules/lodash/toInteger.js"),
				i = Math.max,
				u = Math.min;
			e.exports = function(e, n, o) {
				var l = null == e ? 0 : e.length;
				if (!l) return -1;
				var a = l - 1;
				return void 0 !== o && (a = s(o), a = o < 0 ? i(l + a, 0) : u(a, l - 1)), t(e, r(n, 3), a, !0)
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseFlatten.js"),
				r = o("./node_modules/lodash/map.js");
			e.exports = function(e, n) {
				return t(r(e, n), 1)
			}
		},
		"./node_modules/lodash/forEach.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_arrayEach.js"),
				r = o("./node_modules/lodash/_baseEach.js"),
				s = o("./node_modules/lodash/_castFunction.js"),
				i = o("./node_modules/lodash/isArray.js");
			e.exports = function(e, n) {
				return (i(e) ? t : r)(e, s(n))
			}
		},
		"./node_modules/lodash/forOwn.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseForOwn.js"),
				r = o("./node_modules/lodash/_castFunction.js");
			e.exports = function(e, n) {
				return e && t(e, r(n))
			}
		},
		"./node_modules/lodash/invert.js": function(e, n, o) {
			var t = o("./node_modules/lodash/constant.js"),
				r = o("./node_modules/lodash/_createInverter.js"),
				s = o("./node_modules/lodash/identity.js"),
				i = Object.prototype.toString,
				u = r((function(e, n, o) {
					null != n && "function" != typeof n.toString && (n = i.call(n)), e[n] = o
				}), t(s));
			e.exports = u
		},
		"./node_modules/lodash/isEqualWith.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseIsEqual.js");
			e.exports = function(e, n, o) {
				var r = (o = "function" == typeof o ? o : void 0) ? o(e, n) : void 0;
				return void 0 === r ? t(e, n, void 0, o) : !!r
			}
		},
		"./node_modules/lodash/mapValues.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseAssignValue.js"),
				r = o("./node_modules/lodash/_baseForOwn.js"),
				s = o("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, n) {
				var o = {};
				return n = s(n, 3), r(e, (function(e, r, s) {
					t(o, r, n(e, r, s))
				})), o
			}
		},
		"./node_modules/lodash/merge.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseMerge.js"),
				r = o("./node_modules/lodash/_createAssigner.js")((function(e, n, o) {
					t(e, n, o)
				}));
			e.exports = r
		},
		"./node_modules/lodash/mergeWith.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseMerge.js"),
				r = o("./node_modules/lodash/_createAssigner.js")((function(e, n, o, r) {
					t(e, n, o, r)
				}));
			e.exports = r
		},
		"./node_modules/lodash/sampleSize.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_arraySampleSize.js"),
				r = o("./node_modules/lodash/_baseSampleSize.js"),
				s = o("./node_modules/lodash/isArray.js"),
				i = o("./node_modules/lodash/_isIterateeCall.js"),
				u = o("./node_modules/lodash/toInteger.js");
			e.exports = function(e, n, o) {
				return n = (o ? i(e, n, o) : void 0 === n) ? 1 : u(n), (s(e) ? t : r)(e, n)
			}
		},
		"./node_modules/lodash/set.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseSet.js");
			e.exports = function(e, n, o) {
				return null == e ? e : t(e, n, o)
			}
		},
		"./node_modules/lodash/some.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_arraySome.js"),
				r = o("./node_modules/lodash/_baseIteratee.js"),
				s = o("./node_modules/lodash/_baseSome.js"),
				i = o("./node_modules/lodash/isArray.js"),
				u = o("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, n, o) {
				var l = i(e) ? t : s;
				return o && u(e, n, o) && (n = void 0), l(e, r(n, 3))
			}
		},
		"./node_modules/lodash/toPlainObject.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_copyObject.js"),
				r = o("./node_modules/lodash/keysIn.js");
			e.exports = function(e) {
				return t(e, r(e))
			}
		},
		"./node_modules/lodash/trimStart.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseToString.js"),
				r = o("./node_modules/lodash/_castSlice.js"),
				s = o("./node_modules/lodash/_charsStartIndex.js"),
				i = o("./node_modules/lodash/_stringToArray.js"),
				u = o("./node_modules/lodash/toString.js"),
				l = /^\s+/;
			e.exports = function(e, n, o) {
				if ((e = u(e)) && (o || void 0 === n)) return e.replace(l, "");
				if (!e || !(n = t(n))) return e;
				var a = i(e),
					d = s(a, i(n));
				return r(a, d).join("")
			}
		},
		"./node_modules/lodash/union.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseFlatten.js"),
				r = o("./node_modules/lodash/_baseRest.js"),
				s = o("./node_modules/lodash/_baseUniq.js"),
				i = o("./node_modules/lodash/isArrayLikeObject.js"),
				u = r((function(e) {
					return s(t(e, 1, i, !0))
				}));
			e.exports = u
		},
		"./node_modules/lodash/uniqWith.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseUniq.js");
			e.exports = function(e, n) {
				return n = "function" == typeof n ? n : void 0, e && e.length ? t(e, void 0, n) : []
			}
		},
		"./node_modules/lodash/upperFirst.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_createCaseFirst.js")("toUpperCase");
			e.exports = t
		},
		"./node_modules/lodash/xor.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_arrayFilter.js"),
				r = o("./node_modules/lodash/_baseRest.js"),
				s = o("./node_modules/lodash/_baseXor.js"),
				i = o("./node_modules/lodash/isArrayLikeObject.js"),
				u = r((function(e) {
					return s(t(e, i))
				}));
			e.exports = u
		},
		"./node_modules/path-browserify/index.js": function(e, n, o) {
			(function(e) {
				function o(e, n) {
					for (var o = 0, t = e.length - 1; t >= 0; t--) {
						var r = e[t];
						"." === r ? e.splice(t, 1) : ".." === r ? (e.splice(t, 1), o++) : o && (e.splice(t, 1), o--)
					}
					if (n)
						for (; o--; o) e.unshift("..");
					return e
				}

				function t(e, n) {
					if (e.filter) return e.filter(n);
					for (var o = [], t = 0; t < e.length; t++) n(e[t], t, e) && o.push(e[t]);
					return o
				}
				n.resolve = function() {
					for (var n = "", r = !1, s = arguments.length - 1; s >= -1 && !r; s--) {
						var i = s >= 0 ? arguments[s] : e.cwd();
						if ("string" != typeof i) throw new TypeError("Arguments to path.resolve must be strings");
						i && (n = i + "/" + n, r = "/" === i.charAt(0))
					}
					return (r ? "/" : "") + (n = o(t(n.split("/"), (function(e) {
						return !!e
					})), !r).join("/")) || "."
				}, n.normalize = function(e) {
					var s = n.isAbsolute(e),
						i = "/" === r(e, -1);
					return (e = o(t(e.split("/"), (function(e) {
						return !!e
					})), !s).join("/")) || s || (e = "."), e && i && (e += "/"), (s ? "/" : "") + e
				}, n.isAbsolute = function(e) {
					return "/" === e.charAt(0)
				}, n.join = function() {
					var e = Array.prototype.slice.call(arguments, 0);
					return n.normalize(t(e, (function(e, n) {
						if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
						return e
					})).join("/"))
				}, n.relative = function(e, o) {
					function t(e) {
						for (var n = 0; n < e.length && "" === e[n]; n++);
						for (var o = e.length - 1; o >= 0 && "" === e[o]; o--);
						return n > o ? [] : e.slice(n, o - n + 1)
					}
					e = n.resolve(e).substr(1), o = n.resolve(o).substr(1);
					for (var r = t(e.split("/")), s = t(o.split("/")), i = Math.min(r.length, s.length), u = i, l = 0; l < i; l++)
						if (r[l] !== s[l]) {
							u = l;
							break
						} var a = [];
					for (l = u; l < r.length; l++) a.push("..");
					return (a = a.concat(s.slice(u))).join("/")
				}, n.sep = "/", n.delimiter = ":", n.dirname = function(e) {
					if ("string" != typeof e && (e += ""), 0 === e.length) return ".";
					for (var n = e.charCodeAt(0), o = 47 === n, t = -1, r = !0, s = e.length - 1; s >= 1; --s)
						if (47 === (n = e.charCodeAt(s))) {
							if (!r) {
								t = s;
								break
							}
						} else r = !1;
					return -1 === t ? o ? "/" : "." : o && 1 === t ? "/" : e.slice(0, t)
				}, n.basename = function(e, n) {
					var o = function(e) {
						"string" != typeof e && (e += "");
						var n, o = 0,
							t = -1,
							r = !0;
						for (n = e.length - 1; n >= 0; --n)
							if (47 === e.charCodeAt(n)) {
								if (!r) {
									o = n + 1;
									break
								}
							} else -1 === t && (r = !1, t = n + 1);
						return -1 === t ? "" : e.slice(o, t)
					}(e);
					return n && o.substr(-1 * n.length) === n && (o = o.substr(0, o.length - n.length)), o
				}, n.extname = function(e) {
					"string" != typeof e && (e += "");
					for (var n = -1, o = 0, t = -1, r = !0, s = 0, i = e.length - 1; i >= 0; --i) {
						var u = e.charCodeAt(i);
						if (47 !== u) - 1 === t && (r = !1, t = i + 1), 46 === u ? -1 === n ? n = i : 1 !== s && (s = 1) : -1 !== n && (s = -1);
						else if (!r) {
							o = i + 1;
							break
						}
					}
					return -1 === n || -1 === t || 0 === s || 1 === s && n === t - 1 && n === o + 1 ? "" : e.slice(n, t)
				};
				var r = "b" === "ab".substr(-1) ? function(e, n, o) {
					return e.substr(n, o)
				} : function(e, n, o) {
					return n < 0 && (n = e.length + n), e.substr(n, o)
				}
			}).call(this, o("./node_modules/process/browser.js"))
		},
		"./node_modules/prop-types/factoryWithThrowingShims.js": function(e, n, o) {
			"use strict";
			var t = o("./node_modules/fbjs/lib/emptyFunction.js"),
				r = o("./node_modules/fbjs/lib/invariant.js");
			e.exports = function() {
				function e() {
					r(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
				}

				function n() {
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
					arrayOf: n,
					element: e,
					instanceOf: n,
					node: e,
					objectOf: n,
					oneOf: n,
					oneOfType: n,
					shape: n
				};
				return o.checkPropTypes = t, o.PropTypes = o, o
			}
		},
		"./node_modules/prop-types/index.js": function(e, n, o) {
			e.exports = o("./node_modules/prop-types/factoryWithThrowingShims.js")()
		}
	}
]);
//# sourceMappingURL=vendors~Governance~Reddit.c0e808323891f3da58b8.js.map