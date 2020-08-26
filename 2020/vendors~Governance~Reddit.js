// https://www.redditstatic.com/desktop2x/vendors~Governance~Reddit.673d0e04821a911044ad.js
// Retrieved at 8/26/2020, 11:50:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~Governance~Reddit"], {
		"./node_modules/@r/frames/compiled.js": function(e, n, o) {
			"use strict";
			(function(e) {
				Object.defineProperty(n, "__esModule", {
					value: !0
				});
				var o = arguments,
					r = ".*",
					t = ".postMessage",
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
				var a = [r],
					c = l(a),
					d = [t],
					f = u(d),
					h = {},
					m = !1;

				function _(n, o, r) {
					e.addEventListener ? e.addEventListener(n, o, r) : e.attachEvent && e.attachEvent("on" + n, o)
				}

				function p(n, o) {
					e.removeEventListener ? e.removeEventListener(n, o) : e.detachEvent && e.detachEvent("on" + n, o)
				}

				function v(e) {
					return /\*/.test(e)
				}
				var g = n.postMessage = function(e, n, o) {
						var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
						i.test(n) || (n += t);
						var u = r;
						Object.keys(s).forEach((function(e) {
							u[e] = s[e]
						})), e.postMessage(JSON.stringify({
							type: n,
							data: o,
							defaultedOptions: u
						}), u.targetOrigin)
					},
					j = n.receiveMessage = function(e, n, o, r) {
						"string" == typeof e && (r = o, o = n, n = e, e = null), r = r || void 0;
						var t = function(n) {
							for (var t = arguments.length, s = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) s[i - 1] = arguments[i];
							e && e !== n.source && e.contentWindow !== n.source || o.apply(r, [n].concat(s))
						};
						return _(n, t), {
							off: function() {
								p(n, t)
							}
						}
					},
					b = (n.receiveMessageOnce = function(e, n, r, t) {
						var s = j(e, n, (function() {
							r && r.apply(void 0, o), s.off()
						}), t);
						return s
					}, n.removePostMessageOrigin = function(e) {
						var n = a.indexOf(e); - 1 !== n && (a.splice(n, 1), c = l(a))
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
					v(e) ? a = [r] : -1 === a.indexOf(e) && (b(r), a.push(e), c = l(a))
				};

				function O(n) {
					if (n.origin === e.location.origin || c.test(n.origin) || "null" === n.origin) {
						var o = {};
						try {
							o = JSON.parse(n.data)
						} catch (n) {}
						var r = o.type;
						if (f.test(r)) {
							var t = r.split(".", 2)[1];
							if (h[t]) h[t].targets.forEach((function(e) {
								return g(e, r, o.data, o.options)
							}));
							var s = new y(r, {
								detail: o.data
							});
							s.source = n.source, e.dispatchEvent(s)
						}
					}
				}
				var E = n.listen = function(e) {
					-1 === d.indexOf(e) && (d.push(e), f = u(d)), m || (_("message", O), m = !0)
				};
				n.stopListening = function(e) {
					var n = d.indexOf(e); - 1 !== n && (d.splice(n, 1), d.length ? f = u(d) : (p("message", O), m = !1))
				}, n.proxy = function(e, n) {
					E(e), Array.isArray(n) || (n = [n]);
					var o = h[e];
					o ? o.targets = [].concat(o.targets, n) : o = {
						targets: n
					}, h[e] = o
				}
			}).call(this, o("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/bignumber.js/bignumber.js": function(e, n, o) {
			var r;
			! function(t) {
				"use strict";
				var s, i = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
					u = Math.ceil,
					l = Math.floor,
					a = "[BigNumber Error] ",
					c = a + "Number primitive has more than 15 significant digits: ",
					d = 1e14,
					f = 14,
					h = 9007199254740991,
					m = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
					_ = 1e7,
					p = 1e9;

				function v(e) {
					var n = 0 | e;
					return e > 0 || e === n ? n : n - 1
				}

				function g(e) {
					for (var n, o, r = 1, t = e.length, s = e[0] + ""; r < t;) {
						for (n = e[r++] + "", o = f - n.length; o--; n = "0" + n);
						s += n
					}
					for (t = s.length; 48 === s.charCodeAt(--t););
					return s.slice(0, t + 1 || 1)
				}

				function j(e, n) {
					var o, r, t = e.c,
						s = n.c,
						i = e.s,
						u = n.s,
						l = e.e,
						a = n.e;
					if (!i || !u) return null;
					if (o = t && !t[0], r = s && !s[0], o || r) return o ? r ? 0 : -u : i;
					if (i != u) return i;
					if (o = i < 0, r = l == a, !t || !s) return r ? 0 : !t ^ o ? 1 : -1;
					if (!r) return l > a ^ o ? 1 : -1;
					for (u = (l = t.length) < (a = s.length) ? l : a, i = 0; i < u; i++)
						if (t[i] != s[i]) return t[i] > s[i] ^ o ? 1 : -1;
					return l == a ? 0 : l > a ^ o ? 1 : -1
				}

				function b(e, n, o, r) {
					if (e < n || e > o || e !== (e < 0 ? u(e) : l(e))) throw Error(a + (r || "Argument") + ("number" == typeof e ? e < n || e > o ? " out of range: " : " not an integer: " : " not a primitive number: ") + e)
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

				function E(e, n, o) {
					var r, t;
					if (n < 0) {
						for (t = o + "."; ++n; t += o);
						e = t + e
					} else if (++n > (r = e.length)) {
						for (t = o, n -= r; --n; t += o);
						e += t
					} else n < r && (e = e.slice(0, n) + "." + e.slice(n));
					return e
				}(s = function e(n) {
					var o, r, t, s, x, A, N, P, I, S = $.prototype = {
							constructor: $,
							toString: null,
							valueOf: null
						},
						L = new $(1),
						M = 20,
						R = 4,
						D = -7,
						C = 21,
						k = -1e7,
						B = 1e7,
						T = !1,
						U = 1,
						F = 0,
						q = {
							decimalSeparator: ".",
							groupSeparator: ",",
							groupSize: 3,
							secondaryGroupSize: 0,
							fractionGroupSeparator: " ",
							fractionGroupSize: 0
						},
						G = "0123456789abcdefghijklmnopqrstuvwxyz";

					function $(e, n) {
						var o, s, u, a, d, m, _, p, v = this;
						if (!(v instanceof $)) return new $(e, n);
						if (null == n) {
							if (e instanceof $) return v.s = e.s, v.e = e.e, void(v.c = (e = e.c) ? e.slice() : e);
							if ((m = "number" == typeof e) && 0 * e == 0) {
								if (v.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
									for (a = 0, d = e; d >= 10; d /= 10, a++);
									return v.e = a, void(v.c = [e])
								}
								p = e + ""
							} else {
								if (!i.test(p = e + "")) return t(v, p, m);
								v.s = 45 == p.charCodeAt(0) ? (p = p.slice(1), -1) : 1
							}(a = p.indexOf(".")) > -1 && (p = p.replace(".", "")), (d = p.search(/e/i)) > 0 ? (a < 0 && (a = d), a += +p.slice(d + 1), p = p.substring(0, d)) : a < 0 && (a = p.length)
						} else {
							if (b(n, 2, G.length, "Base"), p = e + "", 10 == n) return z(v = new $(e instanceof $ ? e : p), M + v.e + 1, R);
							if (m = "number" == typeof e) {
								if (0 * e != 0) return t(v, p, m, n);
								if (v.s = 1 / e < 0 ? (p = p.slice(1), -1) : 1, $.DEBUG && p.replace(/^0\.0*|\./, "").length > 15) throw Error(c + e);
								m = !1
							} else v.s = 45 === p.charCodeAt(0) ? (p = p.slice(1), -1) : 1;
							for (o = G.slice(0, n), a = d = 0, _ = p.length; d < _; d++)
								if (o.indexOf(s = p.charAt(d)) < 0) {
									if ("." == s) {
										if (d > a) {
											a = _;
											continue
										}
									} else if (!u && (p == p.toUpperCase() && (p = p.toLowerCase()) || p == p.toLowerCase() && (p = p.toUpperCase()))) {
										u = !0, d = -1, a = 0;
										continue
									}
									return t(v, e + "", m, n)
								}(a = (p = r(p, n, 10, v.s)).indexOf(".")) > - 1 ? p = p.replace(".", "") : a = p.length
						}
						for (d = 0; 48 === p.charCodeAt(d); d++);
						for (_ = p.length; 48 === p.charCodeAt(--_););
						if (p = p.slice(d, ++_)) {
							if (_ -= d, m && $.DEBUG && _ > 15 && (e > h || e !== l(e))) throw Error(c + v.s * e);
							if ((a = a - d - 1) > B) v.c = v.e = null;
							else if (a < k) v.c = [v.e = 0];
							else {
								if (v.e = a, v.c = [], d = (a + 1) % f, a < 0 && (d += f), d < _) {
									for (d && v.c.push(+p.slice(0, d)), _ -= f; d < _;) v.c.push(+p.slice(d, d += f));
									p = p.slice(d), d = f - p.length
								} else d -= _;
								for (; d--; p += "0");
								v.c.push(+p)
							}
						} else v.c = [v.e = 0]
					}

					function V(e, n, o, r) {
						var t, s, i, u, l;
						if (null == o ? o = R : b(o, 0, 8), !e.c) return e.toString();
						if (t = e.c[0], i = e.e, null == n) l = g(e.c), l = 1 == r || 2 == r && i <= D ? O(l, i) : E(l, i, "0");
						else if (s = (e = z(new $(e), n, o)).e, u = (l = g(e.c)).length, 1 == r || 2 == r && (n <= s || s <= D)) {
							for (; u < n; l += "0", u++);
							l = O(l, s)
						} else if (n -= i, l = E(l, s, "0"), s + 1 > u) {
							if (--n > 0)
								for (l += "."; n--; l += "0");
						} else if ((n += s - u) > 0)
							for (s + 1 == u && (l += "."); n--; l += "0");
						return e.s < 0 && t ? "-" + l : l
					}

					function H(e, n) {
						var o, r, t = 0;
						for (y(e[0]) && (e = e[0]), o = new $(e[0]); ++t < e.length;) {
							if (!(r = new $(e[t])).s) {
								o = r;
								break
							}
							n.call(o, r) && (o = r)
						}
						return o
					}

					function W(e, n, o) {
						for (var r = 1, t = n.length; !n[--t]; n.pop());
						for (t = n[0]; t >= 10; t /= 10, r++);
						return (o = r + o * f - 1) > B ? e.c = e.e = null : o < k ? e.c = [e.e = 0] : (e.e = o, e.c = n), e
					}

					function z(e, n, o, r) {
						var t, s, i, a, c, h, _, p = e.c,
							v = m;
						if (p) {
							e: {
								for (t = 1, a = p[0]; a >= 10; a /= 10, t++);
								if ((s = n - t) < 0) s += f,
								i = n,
								_ = (c = p[h = 0]) / v[t - i - 1] % 10 | 0;
								else if ((h = u((s + 1) / f)) >= p.length) {
									if (!r) break e;
									for (; p.length <= h; p.push(0));
									c = _ = 0, t = 1, i = (s %= f) - f + 1
								} else {
									for (c = a = p[h], t = 1; a >= 10; a /= 10, t++);
									_ = (i = (s %= f) - f + t) < 0 ? 0 : c / v[t - i - 1] % 10 | 0
								}
								if (r = r || n < 0 || null != p[h + 1] || (i < 0 ? c : c % v[t - i - 1]), r = o < 4 ? (_ || r) && (0 == o || o == (e.s < 0 ? 3 : 2)) : _ > 5 || 5 == _ && (4 == o || r || 6 == o && (s > 0 ? i > 0 ? c / v[t - i] : 0 : p[h - 1]) % 10 & 1 || o == (e.s < 0 ? 8 : 7)), n < 1 || !p[0]) return p.length = 0,
								r ? (n -= e.e + 1, p[0] = v[(f - n % f) % f], e.e = -n || 0) : p[0] = e.e = 0,
								e;
								if (0 == s ? (p.length = h, a = 1, h--) : (p.length = h + 1, a = v[f - s], p[h] = i > 0 ? l(c / v[t - i] % v[i]) * a : 0), r)
									for (;;) {
										if (0 == h) {
											for (s = 1, i = p[0]; i >= 10; i /= 10, s++);
											for (i = p[0] += a, a = 1; i >= 10; i /= 10, a++);
											s != a && (e.e++, p[0] == d && (p[0] = 1));
											break
										}
										if (p[h] += a, p[h] != d) break;
										p[h--] = 0, a = 1
									}
								for (s = p.length; 0 === p[--s]; p.pop());
							}
							e.e > B ? e.c = e.e = null : e.e < k && (e.c = [e.e = 0])
						}
						return e
					}
					return $.clone = e, $.ROUND_UP = 0, $.ROUND_DOWN = 1, $.ROUND_CEIL = 2, $.ROUND_FLOOR = 3, $.ROUND_HALF_UP = 4, $.ROUND_HALF_DOWN = 5, $.ROUND_HALF_EVEN = 6, $.ROUND_HALF_CEIL = 7, $.ROUND_HALF_FLOOR = 8, $.EUCLID = 9, $.config = $.set = function(e) {
						var n, o;
						if (null != e) {
							if ("object" != typeof e) throw Error(a + "Object expected: " + e);
							if (e.hasOwnProperty(n = "DECIMAL_PLACES") && (b(o = e[n], 0, p, n), M = o), e.hasOwnProperty(n = "ROUNDING_MODE") && (b(o = e[n], 0, 8, n), R = o), e.hasOwnProperty(n = "EXPONENTIAL_AT") && (y(o = e[n]) ? (b(o[0], -p, 0, n), b(o[1], 0, p, n), D = o[0], C = o[1]) : (b(o, -p, p, n), D = -(C = o < 0 ? -o : o))), e.hasOwnProperty(n = "RANGE"))
								if (y(o = e[n])) b(o[0], -p, -1, n), b(o[1], 1, p, n), k = o[0], B = o[1];
								else {
									if (b(o, -p, p, n), !o) throw Error(a + n + " cannot be zero: " + o);
									k = -(B = o < 0 ? -o : o)
								} if (e.hasOwnProperty(n = "CRYPTO")) {
								if ((o = e[n]) !== !!o) throw Error(a + n + " not true or false: " + o);
								if (o) {
									if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw T = !o, Error(a + "crypto unavailable");
									T = o
								} else T = o
							}
							if (e.hasOwnProperty(n = "MODULO_MODE") && (b(o = e[n], 0, 9, n), U = o), e.hasOwnProperty(n = "POW_PRECISION") && (b(o = e[n], 0, p, n), F = o), e.hasOwnProperty(n = "FORMAT")) {
								if ("object" != typeof(o = e[n])) throw Error(a + n + " not an object: " + o);
								q = o
							}
							if (e.hasOwnProperty(n = "ALPHABET")) {
								if ("string" != typeof(o = e[n]) || /^.$|\.|(.).*\1/.test(o)) throw Error(a + n + " invalid: " + o);
								G = o
							}
						}
						return {
							DECIMAL_PLACES: M,
							ROUNDING_MODE: R,
							EXPONENTIAL_AT: [D, C],
							RANGE: [k, B],
							CRYPTO: T,
							MODULO_MODE: U,
							POW_PRECISION: F,
							FORMAT: q,
							ALPHABET: G
						}
					}, $.isBigNumber = function(e) {
						return e instanceof $ || e && !0 === e._isBigNumber || !1
					}, $.maximum = $.max = function() {
						return H(arguments, S.lt)
					}, $.minimum = $.min = function() {
						return H(arguments, S.gt)
					}, $.random = (s = 9007199254740992 * Math.random() & 2097151 ? function() {
						return l(9007199254740992 * Math.random())
					} : function() {
						return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
					}, function(e) {
						var n, o, r, t, i, c = 0,
							d = [],
							h = new $(L);
						if (null == e ? e = M : b(e, 0, p), t = u(e / f), T)
							if (crypto.getRandomValues) {
								for (n = crypto.getRandomValues(new Uint32Array(t *= 2)); c < t;)(i = 131072 * n[c] + (n[c + 1] >>> 11)) >= 9e15 ? (o = crypto.getRandomValues(new Uint32Array(2)), n[c] = o[0], n[c + 1] = o[1]) : (d.push(i % 1e14), c += 2);
								c = t / 2
							} else {
								if (!crypto.randomBytes) throw T = !1, Error(a + "crypto unavailable");
								for (n = crypto.randomBytes(t *= 7); c < t;)(i = 281474976710656 * (31 & n[c]) + 1099511627776 * n[c + 1] + 4294967296 * n[c + 2] + 16777216 * n[c + 3] + (n[c + 4] << 16) + (n[c + 5] << 8) + n[c + 6]) >= 9e15 ? crypto.randomBytes(7).copy(n, c) : (d.push(i % 1e14), c += 7);
								c = t / 7
							} if (!T)
							for (; c < t;)(i = s()) < 9e15 && (d[c++] = i % 1e14);
						for (t = d[--c], e %= f, t && e && (i = m[f - e], d[c] = l(t / i) * i); 0 === d[c]; d.pop(), c--);
						if (c < 0) d = [r = 0];
						else {
							for (r = -1; 0 === d[0]; d.splice(0, 1), r -= f);
							for (c = 1, i = d[0]; i >= 10; i /= 10, c++);
							c < f && (r -= f - c)
						}
						return h.e = r, h.c = d, h
					}), r = function() {
						function e(e, n, o, r) {
							for (var t, s, i = [0], u = 0, l = e.length; u < l;) {
								for (s = i.length; s--; i[s] *= n);
								for (i[0] += r.indexOf(e.charAt(u++)), t = 0; t < i.length; t++) i[t] > o - 1 && (null == i[t + 1] && (i[t + 1] = 0), i[t + 1] += i[t] / o | 0, i[t] %= o)
							}
							return i.reverse()
						}
						return function(n, r, t, s, i) {
							var u, l, a, c, d, f, h, m, _ = n.indexOf("."),
								p = M,
								v = R;
							for (_ >= 0 && (c = F, F = 0, n = n.replace(".", ""), f = (m = new $(r)).pow(n.length - _), F = c, m.c = e(E(g(f.c), f.e, "0"), 10, t, "0123456789"), m.e = m.c.length), a = c = (h = e(n, r, t, i ? (u = G, "0123456789") : (u = "0123456789", G))).length; 0 == h[--c]; h.pop());
							if (!h[0]) return u.charAt(0);
							if (_ < 0 ? --a : (f.c = h, f.e = a, f.s = s, h = (f = o(f, m, p, v, t)).c, d = f.r, a = f.e), _ = h[l = a + p + 1], c = t / 2, d = d || l < 0 || null != h[l + 1], d = v < 4 ? (null != _ || d) && (0 == v || v == (f.s < 0 ? 3 : 2)) : _ > c || _ == c && (4 == v || d || 6 == v && 1 & h[l - 1] || v == (f.s < 0 ? 8 : 7)), l < 1 || !h[0]) n = d ? E(u.charAt(1), -p, u.charAt(0)) : u.charAt(0);
							else {
								if (h.length = l, d)
									for (--t; ++h[--l] > t;) h[l] = 0, l || (++a, h = [1].concat(h));
								for (c = h.length; !h[--c];);
								for (_ = 0, n = ""; _ <= c; n += u.charAt(h[_++]));
								n = E(n, a, u.charAt(0))
							}
							return n
						}
					}(), o = function() {
						function e(e, n, o) {
							var r, t, s, i, u = 0,
								l = e.length,
								a = n % _,
								c = n / _ | 0;
							for (e = e.slice(); l--;) u = ((t = a * (s = e[l] % _) + (r = c * s + (i = e[l] / _ | 0) * a) % _ * _ + u) / o | 0) + (r / _ | 0) + c * i, e[l] = t % o;
							return u && (e = [u].concat(e)), e
						}

						function n(e, n, o, r) {
							var t, s;
							if (o != r) s = o > r ? 1 : -1;
							else
								for (t = s = 0; t < o; t++)
									if (e[t] != n[t]) {
										s = e[t] > n[t] ? 1 : -1;
										break
									} return s
						}

						function o(e, n, o, r) {
							for (var t = 0; o--;) e[o] -= t, t = e[o] < n[o] ? 1 : 0, e[o] = t * r + e[o] - n[o];
							for (; !e[0] && e.length > 1; e.splice(0, 1));
						}
						return function(r, t, s, i, u) {
							var a, c, h, m, _, p, g, j, b, y, w, O, E, x, A, N, P, I = r.s == t.s ? 1 : -1,
								S = r.c,
								L = t.c;
							if (!(S && S[0] && L && L[0])) return new $(r.s && t.s && (S ? !L || S[0] != L[0] : L) ? S && 0 == S[0] || !L ? 0 * I : I / 0 : NaN);
							for (b = (j = new $(I)).c = [], I = s + (c = r.e - t.e) + 1, u || (u = d, c = v(r.e / f) - v(t.e / f), I = I / f | 0), h = 0; L[h] == (S[h] || 0); h++);
							if (L[h] > (S[h] || 0) && c--, I < 0) b.push(1), m = !0;
							else {
								for (x = S.length, N = L.length, h = 0, I += 2, (_ = l(u / (L[0] + 1))) > 1 && (L = e(L, _, u), S = e(S, _, u), N = L.length, x = S.length), E = N, w = (y = S.slice(0, N)).length; w < N; y[w++] = 0);
								P = L.slice(), P = [0].concat(P), A = L[0], L[1] >= u / 2 && A++;
								do {
									if (_ = 0, (a = n(L, y, N, w)) < 0) {
										if (O = y[0], N != w && (O = O * u + (y[1] || 0)), (_ = l(O / A)) > 1)
											for (_ >= u && (_ = u - 1), g = (p = e(L, _, u)).length, w = y.length; 1 == n(p, y, g, w);) _--, o(p, N < g ? P : L, g, u), g = p.length, a = 1;
										else 0 == _ && (a = _ = 1), g = (p = L.slice()).length;
										if (g < w && (p = [0].concat(p)), o(y, p, w, u), w = y.length, -1 == a)
											for (; n(L, y, N, w) < 1;) _++, o(y, N < w ? P : L, w, u), w = y.length
									} else 0 === a && (_++, y = [0]);
									b[h++] = _, y[0] ? y[w++] = S[E] || 0 : (y = [S[E]], w = 1)
								} while ((E++ < x || null != y[0]) && I--);
								m = null != y[0], b[0] || b.splice(0, 1)
							}
							if (u == d) {
								for (h = 1, I = b[0]; I >= 10; I /= 10, h++);
								z(j, s + (j.e = h + c * f - 1) + 1, i, m)
							} else j.e = c, j.r = +m;
							return j
						}
					}(), x = /^(-?)0([xbo])(?=\w[\w.]*$)/i, A = /^([^.]+)\.$/, N = /^\.([^.]+)$/, P = /^-?(Infinity|NaN)$/, I = /^\s*\+(?=[\w.])|^\s+|\s+$/g, t = function(e, n, o, r) {
						var t, s = o ? n : n.replace(I, "");
						if (P.test(s)) e.s = isNaN(s) ? null : s < 0 ? -1 : 1, e.c = e.e = null;
						else {
							if (!o && (s = s.replace(x, (function(e, n, o) {
									return t = "x" == (o = o.toLowerCase()) ? 16 : "b" == o ? 2 : 8, r && r != t ? e : n
								})), r && (t = r, s = s.replace(A, "$1").replace(N, "0.$1")), n != s)) return new $(s, t);
							if ($.DEBUG) throw Error(a + "Not a" + (r ? " base " + r : "") + " number: " + n);
							e.c = e.e = e.s = null
						}
					}, S.absoluteValue = S.abs = function() {
						var e = new $(this);
						return e.s < 0 && (e.s = 1), e
					}, S.comparedTo = function(e, n) {
						return j(this, new $(e, n))
					}, S.decimalPlaces = S.dp = function(e, n) {
						var o, r, t, s = this;
						if (null != e) return b(e, 0, p), null == n ? n = R : b(n, 0, 8), z(new $(s), e + s.e + 1, n);
						if (!(o = s.c)) return null;
						if (r = ((t = o.length - 1) - v(this.e / f)) * f, t = o[t])
							for (; t % 10 == 0; t /= 10, r--);
						return r < 0 && (r = 0), r
					}, S.dividedBy = S.div = function(e, n) {
						return o(this, new $(e, n), M, R)
					}, S.dividedToIntegerBy = S.idiv = function(e, n) {
						return o(this, new $(e, n), 0, 1)
					}, S.exponentiatedBy = S.pow = function(e, n) {
						var o, r, t, s, i, c, d, h = this;
						if ((e = new $(e)).c && !e.isInteger()) throw Error(a + "Exponent not an integer: " + e);
						if (null != n && (n = new $(n)), s = e.e > 14, !h.c || !h.c[0] || 1 == h.c[0] && !h.e && 1 == h.c.length || !e.c || !e.c[0]) return d = new $(Math.pow(+h.valueOf(), s ? 2 - w(e) : +e)), n ? d.mod(n) : d;
						if (i = e.s < 0, n) {
							if (n.c ? !n.c[0] : !n.s) return new $(NaN);
							(r = !i && h.isInteger() && n.isInteger()) && (h = h.mod(n))
						} else {
							if (e.e > 9 && (h.e > 0 || h.e < -1 || (0 == h.e ? h.c[0] > 1 || s && h.c[1] >= 24e7 : h.c[0] < 8e13 || s && h.c[0] <= 9999975e7))) return t = h.s < 0 && w(e) ? -0 : 0, h.e > -1 && (t = 1 / t), new $(i ? 1 / t : t);
							F && (t = u(F / f + 2))
						}
						for (s ? (o = new $(.5), c = w(e)) : c = e % 2, i && (e.s = 1), d = new $(L);;) {
							if (c) {
								if (!(d = d.times(h)).c) break;
								t ? d.c.length > t && (d.c.length = t) : r && (d = d.mod(n))
							}
							if (s) {
								if (z(e = e.times(o), e.e + 1, 1), !e.c[0]) break;
								s = e.e > 14, c = w(e)
							} else {
								if (!(e = l(e / 2))) break;
								c = e % 2
							}
							h = h.times(h), t ? h.c && h.c.length > t && (h.c.length = t) : r && (h = h.mod(n))
						}
						return r ? d : (i && (d = L.div(d)), n ? d.mod(n) : t ? z(d, F, R, void 0) : d)
					}, S.integerValue = function(e) {
						var n = new $(this);
						return null == e ? e = R : b(e, 0, 8), z(n, n.e + 1, e)
					}, S.isEqualTo = S.eq = function(e, n) {
						return 0 === j(this, new $(e, n))
					}, S.isFinite = function() {
						return !!this.c
					}, S.isGreaterThan = S.gt = function(e, n) {
						return j(this, new $(e, n)) > 0
					}, S.isGreaterThanOrEqualTo = S.gte = function(e, n) {
						return 1 === (n = j(this, new $(e, n))) || 0 === n
					}, S.isInteger = function() {
						return !!this.c && v(this.e / f) > this.c.length - 2
					}, S.isLessThan = S.lt = function(e, n) {
						return j(this, new $(e, n)) < 0
					}, S.isLessThanOrEqualTo = S.lte = function(e, n) {
						return -1 === (n = j(this, new $(e, n))) || 0 === n
					}, S.isNaN = function() {
						return !this.s
					}, S.isNegative = function() {
						return this.s < 0
					}, S.isPositive = function() {
						return this.s > 0
					}, S.isZero = function() {
						return !!this.c && 0 == this.c[0]
					}, S.minus = function(e, n) {
						var o, r, t, s, i = this,
							u = i.s;
						if (n = (e = new $(e, n)).s, !u || !n) return new $(NaN);
						if (u != n) return e.s = -n, i.plus(e);
						var l = i.e / f,
							a = e.e / f,
							c = i.c,
							h = e.c;
						if (!l || !a) {
							if (!c || !h) return c ? (e.s = -n, e) : new $(h ? i : NaN);
							if (!c[0] || !h[0]) return h[0] ? (e.s = -n, e) : new $(c[0] ? i : 3 == R ? -0 : 0)
						}
						if (l = v(l), a = v(a), c = c.slice(), u = l - a) {
							for ((s = u < 0) ? (u = -u, t = c) : (a = l, t = h), t.reverse(), n = u; n--; t.push(0));
							t.reverse()
						} else
							for (r = (s = (u = c.length) < (n = h.length)) ? u : n, u = n = 0; n < r; n++)
								if (c[n] != h[n]) {
									s = c[n] < h[n];
									break
								} if (s && (t = c, c = h, h = t, e.s = -e.s), (n = (r = h.length) - (o = c.length)) > 0)
							for (; n--; c[o++] = 0);
						for (n = d - 1; r > u;) {
							if (c[--r] < h[r]) {
								for (o = r; o && !c[--o]; c[o] = n);
								--c[o], c[r] += d
							}
							c[r] -= h[r]
						}
						for (; 0 == c[0]; c.splice(0, 1), --a);
						return c[0] ? W(e, c, a) : (e.s = 3 == R ? -1 : 1, e.c = [e.e = 0], e)
					}, S.modulo = S.mod = function(e, n) {
						var r, t, s = this;
						return e = new $(e, n), !s.c || !e.s || e.c && !e.c[0] ? new $(NaN) : !e.c || s.c && !s.c[0] ? new $(s) : (9 == U ? (t = e.s, e.s = 1, r = o(s, e, 0, 3), e.s = t, r.s *= t) : r = o(s, e, 0, U), (e = s.minus(r.times(e))).c[0] || 1 != U || (e.s = s.s), e)
					}, S.multipliedBy = S.times = function(e, n) {
						var o, r, t, s, i, u, l, a, c, h, m, p, g, j, b, y = this,
							w = y.c,
							O = (e = new $(e, n)).c;
						if (!(w && O && w[0] && O[0])) return !y.s || !e.s || w && !w[0] && !O || O && !O[0] && !w ? e.c = e.e = e.s = null : (e.s *= y.s, w && O ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
						for (r = v(y.e / f) + v(e.e / f), e.s *= y.s, (l = w.length) < (h = O.length) && (g = w, w = O, O = g, t = l, l = h, h = t), t = l + h, g = []; t--; g.push(0));
						for (j = d, b = _, t = h; --t >= 0;) {
							for (o = 0, m = O[t] % b, p = O[t] / b | 0, s = t + (i = l); s > t;) o = ((a = m * (a = w[--i] % b) + (u = p * a + (c = w[i] / b | 0) * m) % b * b + g[s] + o) / j | 0) + (u / b | 0) + p * c, g[s--] = a % j;
							g[s] = o
						}
						return o ? ++r : g.splice(0, 1), W(e, g, r)
					}, S.negated = function() {
						var e = new $(this);
						return e.s = -e.s || null, e
					}, S.plus = function(e, n) {
						var o, r = this,
							t = r.s;
						if (n = (e = new $(e, n)).s, !t || !n) return new $(NaN);
						if (t != n) return e.s = -n, r.minus(e);
						var s = r.e / f,
							i = e.e / f,
							u = r.c,
							l = e.c;
						if (!s || !i) {
							if (!u || !l) return new $(t / 0);
							if (!u[0] || !l[0]) return l[0] ? e : new $(u[0] ? r : 0 * t)
						}
						if (s = v(s), i = v(i), u = u.slice(), t = s - i) {
							for (t > 0 ? (i = s, o = l) : (t = -t, o = u), o.reverse(); t--; o.push(0));
							o.reverse()
						}
						for ((t = u.length) - (n = l.length) < 0 && (o = l, l = u, u = o, n = t), t = 0; n;) t = (u[--n] = u[n] + l[n] + t) / d | 0, u[n] = d === u[n] ? 0 : u[n] % d;
						return t && (u = [t].concat(u), ++i), W(e, u, i)
					}, S.precision = S.sd = function(e, n) {
						var o, r, t, s = this;
						if (null != e && e !== !!e) return b(e, 1, p), null == n ? n = R : b(n, 0, 8), z(new $(s), e, n);
						if (!(o = s.c)) return null;
						if (r = (t = o.length - 1) * f + 1, t = o[t]) {
							for (; t % 10 == 0; t /= 10, r--);
							for (t = o[0]; t >= 10; t /= 10, r++);
						}
						return e && s.e + 1 > r && (r = s.e + 1), r
					}, S.shiftedBy = function(e) {
						return b(e, -h, h), this.times("1e" + e)
					}, S.squareRoot = S.sqrt = function() {
						var e, n, r, t, s, i = this,
							u = i.c,
							l = i.s,
							a = i.e,
							c = M + 4,
							d = new $("0.5");
						if (1 !== l || !u || !u[0]) return new $(!l || l < 0 && (!u || u[0]) ? NaN : u ? i : 1 / 0);
						if (0 == (l = Math.sqrt(+i)) || l == 1 / 0 ? (((n = g(u)).length + a) % 2 == 0 && (n += "0"), l = Math.sqrt(n), a = v((a + 1) / 2) - (a < 0 || a % 2), r = new $(n = l == 1 / 0 ? "1e" + a : (n = l.toExponential()).slice(0, n.indexOf("e") + 1) + a)) : r = new $(l + ""), r.c[0])
							for ((l = (a = r.e) + c) < 3 && (l = 0);;)
								if (s = r, r = d.times(s.plus(o(i, s, c, 1))), g(s.c).slice(0, l) === (n = g(r.c)).slice(0, l)) {
									if (r.e < a && --l, "9999" != (n = n.slice(l - 3, l + 1)) && (t || "4999" != n)) {
										+n && (+n.slice(1) || "5" != n.charAt(0)) || (z(r, r.e + M + 2, 1), e = !r.times(r).eq(i));
										break
									}
									if (!t && (z(s, s.e + M + 2, 0), s.times(s).eq(i))) {
										r = s;
										break
									}
									c += 4, l += 4, t = 1
								} return z(r, r.e + M + 1, R, e)
					}, S.toExponential = function(e, n) {
						return null != e && (b(e, 0, p), e++), V(this, e, n, 1)
					}, S.toFixed = function(e, n) {
						return null != e && (b(e, 0, p), e = e + this.e + 1), V(this, e, n)
					}, S.toFormat = function(e, n) {
						var o = this.toFixed(e, n);
						if (this.c) {
							var r, t = o.split("."),
								s = +q.groupSize,
								i = +q.secondaryGroupSize,
								u = q.groupSeparator,
								l = t[0],
								a = t[1],
								c = this.s < 0,
								d = c ? l.slice(1) : l,
								f = d.length;
							if (i && (r = s, s = i, i = r, f -= r), s > 0 && f > 0) {
								for (r = f % s || s, l = d.substr(0, r); r < f; r += s) l += u + d.substr(r, s);
								i > 0 && (l += u + d.slice(r)), c && (l = "-" + l)
							}
							o = a ? l + q.decimalSeparator + ((i = +q.fractionGroupSize) ? a.replace(new RegExp("\\d{" + i + "}\\B", "g"), "$&" + q.fractionGroupSeparator) : a) : l
						}
						return o
					}, S.toFraction = function(e) {
						var n, r, t, s, i, u, l, c, d, h, _, p, v = this,
							j = v.c;
						if (null != e && (!(c = new $(e)).isInteger() && (c.c || 1 !== c.s) || c.lt(L))) throw Error(a + "Argument " + (c.isInteger() ? "out of range: " : "not an integer: ") + e);
						if (!j) return v.toString();
						for (r = new $(L), h = t = new $(L), s = d = new $(L), p = g(j), u = r.e = p.length - v.e - 1, r.c[0] = m[(l = u % f) < 0 ? f + l : l], e = !e || c.comparedTo(r) > 0 ? u > 0 ? r : h : c, l = B, B = 1 / 0, c = new $(p), d.c[0] = 0; _ = o(c, r, 0, 1), 1 != (i = t.plus(_.times(s))).comparedTo(e);) t = s, s = i, h = d.plus(_.times(i = h)), d = i, r = c.minus(_.times(i = r)), c = i;
						return i = o(e.minus(t), s, 0, 1), d = d.plus(i.times(h)), t = t.plus(i.times(s)), d.s = h.s = v.s, n = o(h, s, u *= 2, R).minus(v).abs().comparedTo(o(d, t, u, R).minus(v).abs()) < 1 ? [h.toString(), s.toString()] : [d.toString(), t.toString()], B = l, n
					}, S.toNumber = function() {
						return +this
					}, S.toPrecision = function(e, n) {
						return null != e && b(e, 1, p), V(this, e, n, 2)
					}, S.toString = function(e) {
						var n, o = this,
							t = o.s,
							s = o.e;
						return null === s ? t ? (n = "Infinity", t < 0 && (n = "-" + n)) : n = "NaN" : (n = g(o.c), null == e ? n = s <= D || s >= C ? O(n, s) : E(n, s, "0") : (b(e, 2, G.length, "Base"), n = r(E(n, s, "0"), 10, e, t, !0)), t < 0 && o.c[0] && (n = "-" + n)), n
					}, S.valueOf = S.toJSON = function() {
						var e, n = this,
							o = n.e;
						return null === o ? n.toString() : (e = g(n.c), e = o <= D || o >= C ? O(e, o) : E(e, o, "0"), n.s < 0 ? "-" + e : e)
					}, S._isBigNumber = !0, null != n && $.set(n), $
				}()).default = s.BigNumber = s, void 0 === (r = function() {
					return s
				}.call(n, o, n, e)) || (e.exports = r)
			}()
		},
		"./node_modules/core-js/modules/_new-promise-capability.js": function(e, n, o) {
			"use strict";
			var r = o("./node_modules/core-js/modules/_a-function.js");

			function t(e) {
				var n, o;
				this.promise = new e((function(e, r) {
					if (void 0 !== n || void 0 !== o) throw TypeError("Bad Promise constructor");
					n = e, o = r
				})), this.resolve = r(n), this.reject = r(o)
			}
			e.exports.f = function(e) {
				return new t(e)
			}
		},
		"./node_modules/core-js/modules/_promise-resolve.js": function(e, n, o) {
			var r = o("./node_modules/core-js/modules/_an-object.js"),
				t = o("./node_modules/core-js/modules/_is-object.js"),
				s = o("./node_modules/core-js/modules/_new-promise-capability.js");
			e.exports = function(e, n) {
				if (r(e), t(n) && n.constructor === e) return n;
				var o = s.f(e);
				return (0, o.resolve)(n), o.promise
			}
		},
		"./node_modules/core-js/modules/es7.promise.finally.js": function(e, n, o) {
			"use strict";
			var r = o("./node_modules/core-js/modules/_export.js"),
				t = o("./node_modules/core-js/modules/_core.js"),
				s = o("./node_modules/core-js/modules/_global.js"),
				i = o("./node_modules/core-js/modules/_species-constructor.js"),
				u = o("./node_modules/core-js/modules/_promise-resolve.js");
			r(r.P + r.R, "Promise", {
				finally: function(e) {
					var n = i(this, t.Promise || s.Promise),
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
		"./node_modules/core-js/modules/es7.symbol.async-iterator.js": function(e, n, o) {
			o("./node_modules/core-js/modules/_wks-define.js")("asyncIterator")
		},
		"./node_modules/lodash/_arrayEvery.js": function(e, n) {
			e.exports = function(e, n) {
				for (var o = -1, r = null == e ? 0 : e.length; ++o < r;)
					if (!n(e[o], o, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_assignMergeValue.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseAssignValue.js"),
				t = o("./node_modules/lodash/eq.js");
			e.exports = function(e, n, o) {
				(void 0 === o || t(e[n], o)) && (void 0 !== o || n in e) || r(e, n, o)
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, n) {
				var o = !0;
				return r(e, (function(e, r, t) {
					return o = !!n(e, r, t)
				})), o
			}
		},
		"./node_modules/lodash/_baseInverter.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseForOwn.js");
			e.exports = function(e, n, o, t) {
				return r(e, (function(e, r, s) {
					n(t, o(e), r, s)
				})), t
			}
		},
		"./node_modules/lodash/_baseMerge.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_Stack.js"),
				t = o("./node_modules/lodash/_assignMergeValue.js"),
				s = o("./node_modules/lodash/_baseFor.js"),
				i = o("./node_modules/lodash/_baseMergeDeep.js"),
				u = o("./node_modules/lodash/isObject.js"),
				l = o("./node_modules/lodash/keysIn.js"),
				a = o("./node_modules/lodash/_safeGet.js");
			e.exports = function e(n, o, c, d, f) {
				n !== o && s(o, (function(s, l) {
					if (f || (f = new r), u(s)) i(n, o, l, c, e, d, f);
					else {
						var h = d ? d(a(n, l), s, l + "", n, o, f) : void 0;
						void 0 === h && (h = s), t(n, l, h)
					}
				}), l)
			}
		},
		"./node_modules/lodash/_baseMergeDeep.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_assignMergeValue.js"),
				t = o("./node_modules/lodash/_cloneBuffer.js"),
				s = o("./node_modules/lodash/_cloneTypedArray.js"),
				i = o("./node_modules/lodash/_copyArray.js"),
				u = o("./node_modules/lodash/_initCloneObject.js"),
				l = o("./node_modules/lodash/isArguments.js"),
				a = o("./node_modules/lodash/isArray.js"),
				c = o("./node_modules/lodash/isArrayLikeObject.js"),
				d = o("./node_modules/lodash/isBuffer.js"),
				f = o("./node_modules/lodash/isFunction.js"),
				h = o("./node_modules/lodash/isObject.js"),
				m = o("./node_modules/lodash/isPlainObject.js"),
				_ = o("./node_modules/lodash/isTypedArray.js"),
				p = o("./node_modules/lodash/_safeGet.js"),
				v = o("./node_modules/lodash/toPlainObject.js");
			e.exports = function(e, n, o, g, j, b, y) {
				var w = p(e, o),
					O = p(n, o),
					E = y.get(O);
				if (E) r(e, o, E);
				else {
					var x = b ? b(w, O, o + "", e, n, y) : void 0,
						A = void 0 === x;
					if (A) {
						var N = a(O),
							P = !N && d(O),
							I = !N && !P && _(O);
						x = O, N || P || I ? a(w) ? x = w : c(w) ? x = i(w) : P ? (A = !1, x = t(O, !0)) : I ? (A = !1, x = s(O, !0)) : x = [] : m(O) || l(O) ? (x = w, l(w) ? x = v(w) : h(w) && !f(w) || (x = u(O))) : A = !1
					}
					A && (y.set(O, x), j(x, O, g, b, y), y.delete(O)), r(e, o, x)
				}
			}
		},
		"./node_modules/lodash/_baseSome.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, n) {
				var o;
				return r(e, (function(e, r, t) {
					return !(o = n(e, r, t))
				})), !!o
			}
		},
		"./node_modules/lodash/_baseXor.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseDifference.js"),
				t = o("./node_modules/lodash/_baseFlatten.js"),
				s = o("./node_modules/lodash/_baseUniq.js");
			e.exports = function(e, n, o) {
				var i = e.length;
				if (i < 2) return i ? s(e[0]) : [];
				for (var u = -1, l = Array(i); ++u < i;)
					for (var a = e[u], c = -1; ++c < i;) c != u && (l[u] = r(l[u] || a, e[c], n, o));
				return s(t(l, 1), n, o)
			}
		},
		"./node_modules/lodash/_createAssigner.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseRest.js"),
				t = o("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e) {
				return r((function(n, o) {
					var r = -1,
						s = o.length,
						i = s > 1 ? o[s - 1] : void 0,
						u = s > 2 ? o[2] : void 0;
					for (i = e.length > 3 && "function" == typeof i ? (s--, i) : void 0, u && t(o[0], o[1], u) && (i = s < 3 ? void 0 : i, s = 1), n = Object(n); ++r < s;) {
						var l = o[r];
						l && e(n, l, r, i)
					}
					return n
				}))
			}
		},
		"./node_modules/lodash/_createInverter.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseInverter.js");
			e.exports = function(e, n) {
				return function(o, t) {
					return r(o, e, n(t), {})
				}
			}
		},
		"./node_modules/lodash/_safeGet.js": function(e, n) {
			e.exports = function(e, n) {
				if (("constructor" !== n || "function" != typeof e[n]) && "__proto__" != n) return e[n]
			}
		},
		"./node_modules/lodash/defaults.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseRest.js"),
				t = o("./node_modules/lodash/eq.js"),
				s = o("./node_modules/lodash/_isIterateeCall.js"),
				i = o("./node_modules/lodash/keysIn.js"),
				u = Object.prototype,
				l = u.hasOwnProperty,
				a = r((function(e, n) {
					e = Object(e);
					var o = -1,
						r = n.length,
						a = r > 2 ? n[2] : void 0;
					for (a && s(n[0], n[1], a) && (r = 1); ++o < r;)
						for (var c = n[o], d = i(c), f = -1, h = d.length; ++f < h;) {
							var m = d[f],
								_ = e[m];
							(void 0 === _ || t(_, u[m]) && !l.call(e, m)) && (e[m] = c[m])
						}
					return e
				}));
			e.exports = a
		},
		"./node_modules/lodash/every.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_arrayEvery.js"),
				t = o("./node_modules/lodash/_baseEvery.js"),
				s = o("./node_modules/lodash/_baseIteratee.js"),
				i = o("./node_modules/lodash/isArray.js"),
				u = o("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, n, o) {
				var l = i(e) ? r : t;
				return o && u(e, n, o) && (n = void 0), l(e, s(n, 3))
			}
		},
		"./node_modules/lodash/findLastIndex.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseFindIndex.js"),
				t = o("./node_modules/lodash/_baseIteratee.js"),
				s = o("./node_modules/lodash/toInteger.js"),
				i = Math.max,
				u = Math.min;
			e.exports = function(e, n, o) {
				var l = null == e ? 0 : e.length;
				if (!l) return -1;
				var a = l - 1;
				return void 0 !== o && (a = s(o), a = o < 0 ? i(l + a, 0) : u(a, l - 1)), r(e, t(n, 3), a, !0)
			}
		},
		"./node_modules/lodash/forOwn.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseForOwn.js"),
				t = o("./node_modules/lodash/_castFunction.js");
			e.exports = function(e, n) {
				return e && r(e, t(n))
			}
		},
		"./node_modules/lodash/invert.js": function(e, n, o) {
			var r = o("./node_modules/lodash/constant.js"),
				t = o("./node_modules/lodash/_createInverter.js"),
				s = o("./node_modules/lodash/identity.js"),
				i = Object.prototype.toString,
				u = t((function(e, n, o) {
					null != n && "function" != typeof n.toString && (n = i.call(n)), e[n] = o
				}), r(s));
			e.exports = u
		},
		"./node_modules/lodash/isEqualWith.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseIsEqual.js");
			e.exports = function(e, n, o) {
				var t = (o = "function" == typeof o ? o : void 0) ? o(e, n) : void 0;
				return void 0 === t ? r(e, n, void 0, o) : !!t
			}
		},
		"./node_modules/lodash/merge.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseMerge.js"),
				t = o("./node_modules/lodash/_createAssigner.js")((function(e, n, o) {
					r(e, n, o)
				}));
			e.exports = t
		},
		"./node_modules/lodash/mergeWith.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseMerge.js"),
				t = o("./node_modules/lodash/_createAssigner.js")((function(e, n, o, t) {
					r(e, n, o, t)
				}));
			e.exports = t
		},
		"./node_modules/lodash/negate.js": function(e, n) {
			var o = "Expected a function";
			e.exports = function(e) {
				if ("function" != typeof e) throw new TypeError(o);
				return function() {
					var n = arguments;
					switch (n.length) {
						case 0:
							return !e.call(this);
						case 1:
							return !e.call(this, n[0]);
						case 2:
							return !e.call(this, n[0], n[1]);
						case 3:
							return !e.call(this, n[0], n[1], n[2])
					}
					return !e.apply(this, n)
				}
			}
		},
		"./node_modules/lodash/omitBy.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseIteratee.js"),
				t = o("./node_modules/lodash/negate.js"),
				s = o("./node_modules/lodash/pickBy.js");
			e.exports = function(e, n) {
				return s(e, t(r(n)))
			}
		},
		"./node_modules/lodash/some.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_arraySome.js"),
				t = o("./node_modules/lodash/_baseIteratee.js"),
				s = o("./node_modules/lodash/_baseSome.js"),
				i = o("./node_modules/lodash/isArray.js"),
				u = o("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, n, o) {
				var l = i(e) ? r : s;
				return o && u(e, n, o) && (n = void 0), l(e, t(n, 3))
			}
		},
		"./node_modules/lodash/toPlainObject.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_copyObject.js"),
				t = o("./node_modules/lodash/keysIn.js");
			e.exports = function(e) {
				return r(e, t(e))
			}
		},
		"./node_modules/lodash/union.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseFlatten.js"),
				t = o("./node_modules/lodash/_baseRest.js"),
				s = o("./node_modules/lodash/_baseUniq.js"),
				i = o("./node_modules/lodash/isArrayLikeObject.js"),
				u = t((function(e) {
					return s(r(e, 1, i, !0))
				}));
			e.exports = u
		},
		"./node_modules/lodash/uniqWith.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseUniq.js");
			e.exports = function(e, n) {
				return n = "function" == typeof n ? n : void 0, e && e.length ? r(e, void 0, n) : []
			}
		},
		"./node_modules/lodash/xor.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_arrayFilter.js"),
				t = o("./node_modules/lodash/_baseRest.js"),
				s = o("./node_modules/lodash/_baseXor.js"),
				i = o("./node_modules/lodash/isArrayLikeObject.js"),
				u = t((function(e) {
					return s(r(e, i))
				}));
			e.exports = u
		},
		"./node_modules/lodash/xorWith.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_arrayFilter.js"),
				t = o("./node_modules/lodash/_baseRest.js"),
				s = o("./node_modules/lodash/_baseXor.js"),
				i = o("./node_modules/lodash/isArrayLikeObject.js"),
				u = o("./node_modules/lodash/last.js"),
				l = t((function(e) {
					var n = u(e);
					return n = "function" == typeof n ? n : void 0, s(r(e, i), void 0, n)
				}));
			e.exports = l
		},
		"./node_modules/ts-error/lib/cjs.js": function(e, n, o) {
			"use strict";
			n.__esModule = void 0, n.__esModule = !0;
			var r = o("./node_modules/ts-error/lib/helpers.js"),
				t = r.setPrototypeOf,
				s = r.getPrototypeOf,
				i = r.defineProperty,
				u = r.objectCreate,
				l = "[object Error]" === (new Error).toString(),
				a = "";

			function c(e) {
				var n, o = this.constructor,
					r = o.name || (null === (n = o.toString().match(/^function\s*([^\s(]+)/)) ? a || "Error" : n[1]),
					u = "Error" === r,
					d = u ? a : r,
					f = Error.apply(this, arguments);
				if (t(f, s(this)), !(f instanceof o && f instanceof c)) {
					f = this;
					Error.apply(this, arguments), i(f, "message", {
						configurable: !0,
						enumerable: !1,
						value: e,
						writable: !0
					})
				}
				if (i(f, "name", {
						configurable: !0,
						enumerable: !1,
						value: d,
						writable: !0
					}), Error.captureStackTrace && Error.captureStackTrace(f, u ? c : o), void 0 === f.stack) {
					var h = new Error(e);
					h.name = f.name, f.stack = h.stack
				}
				return l && i(f, "toString", {
					configurable: !0,
					enumerable: !1,
					value: function() {
						return (this.name || "Error") + (void 0 === this.message ? "" : ": " + this.message)
					},
					writable: !0
				}), f
			}
			a = c.name || "ExtendableError", c.prototype = u(Error.prototype, {
				constructor: {
					value: Error,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), n.ExtendableError = c, n.default = n.ExtendableError
		},
		"./node_modules/ts-error/lib/helpers.js": function(e, n, o) {
			"use strict";
			n.__esModule = void 0, n.__esModule = !0;
			var r = "function" == typeof Object.setPrototypeOf,
				t = "function" == typeof Object.getPrototypeOf,
				s = "function" == typeof Object.defineProperty,
				i = "function" == typeof Object.create,
				u = "function" == typeof Object.prototype.hasOwnProperty;
			n.setPrototypeOf = function(e, n) {
				r ? Object.setPrototypeOf(e, n) : e.__proto__ = n
			};
			n.getPrototypeOf = function(e) {
				return t ? Object.getPrototypeOf(e) : e.__proto__ || e.prototype
			};
			var l = !1;
			n.defineProperty = function e(n, o, r) {
				if (s && !l) try {
					Object.defineProperty(n, o, r)
				} catch (t) {
					l = !0, e(n, o, r)
				} else n[o] = r.value
			};
			var a = function(e, n) {
				return u ? e.hasOwnProperty(e, n) : void 0 === e[n]
			};
			n.hasOwnProperty = a;
			n.objectCreate = function(e, n) {
				if (i) return Object.create(e, n);
				var o = function() {};
				o.prototype = e;
				var r = new o;
				if (void 0 === n) return r;
				if ("null" == typeof n) throw new Error("PropertyDescriptors must not be null.");
				if ("object" == typeof n)
					for (var t in n) a(n, t) && (r[t] = n[t].value);
				return r
			}
		}
	}
]);
//# sourceMappingURL=vendors~Governance~Reddit.673d0e04821a911044ad.js.map