// https://www.redditstatic.com/desktop2x/vendors~Governance~Reddit.2d68f26c0aacc9d5e950.js
// Retrieved at 1/22/2020, 4:32:02 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~Governance~Reddit"], {
		"./node_modules/@r/frames/compiled.js": function(e, n, o) {
			"use strict";
			(function(e) {
				Object.defineProperty(n, "__esModule", {
					value: !0
				});
				var o = arguments,
					s = ".*",
					r = ".postMessage",
					t = {
						targetOrigin: "*"
					},
					i = /\..+$/;

				function a(e) {
					return new RegExp("\\.(?:" + e.join("|") + ")$")
				}

				function u(e) {
					return new RegExp("^http(s)?:\\/\\/" + e.join("|") + "$", "i")
				}
				var l = [s],
					d = u(l),
					c = [r],
					f = a(c),
					h = {},
					m = !1;

				function p(n, o, s) {
					e.addEventListener ? e.addEventListener(n, o, s) : e.attachEvent && e.attachEvent("on" + n, o)
				}

				function v(n, o) {
					e.removeEventListener ? e.removeEventListener(n, o) : e.detachEvent && e.detachEvent("on" + n, o)
				}

				function _(e) {
					return /\*/.test(e)
				}
				var g = n.postMessage = function(e, n, o) {
						var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
						i.test(n) || (n += r);
						var a = s;
						Object.keys(t).forEach((function(e) {
							a[e] = t[e]
						})), e.postMessage(JSON.stringify({
							type: n,
							data: o,
							defaultedOptions: a
						}), a.targetOrigin)
					},
					j = n.receiveMessage = function(e, n, o, s) {
						"string" == typeof e && (s = o, o = n, n = e, e = null), s = s || void 0;
						var r = function(n) {
							for (var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) t[i - 1] = arguments[i];
							e && e !== n.source && e.contentWindow !== n.source || o.apply(s, [n].concat(t))
						};
						return p(n, r), {
							off: function() {
								v(n, r)
							}
						}
					},
					b = (n.receiveMessageOnce = function(e, n, s, r) {
						var t = j(e, n, (function() {
							s && s.apply(void 0, o), t.off()
						}), r);
						return t
					}, n.removePostMessageOrigin = function(e) {
						var n = l.indexOf(e); - 1 !== n && (l.splice(n, 1), d = u(l))
					}),
					w = e.CustomEvent;
				if ("undefined" != typeof window && "function" != typeof w) {
					var y = {
						bubbles: !1,
						cancelable: !1,
						detail: void 0
					};
					(w = function(e, n) {
						n = n || y;
						var o = document.createEvent("CustomEvent");
						return o.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), o
					}).prototype = e.Event.prototype
				}
				n.addPostMessageOrigin = function(e) {
					_(e) ? l = [s] : -1 === l.indexOf(e) && (b(s), l.push(e), d = u(l))
				};

				function O(n) {
					if (n.origin === e.location.origin || d.test(n.origin) || "null" === n.origin) {
						var o = {};
						try {
							o = JSON.parse(n.data)
						} catch (n) {}
						var s = o.type;
						if (f.test(s)) {
							var r = s.split(".", 2)[1];
							if (h[r]) h[r].targets.forEach((function(e) {
								return g(e, s, o.data, o.options)
							}));
							var t = new w(s, {
								detail: o.data
							});
							t.source = n.source, e.dispatchEvent(t)
						}
					}
				}
				var x = n.listen = function(e) {
					-1 === c.indexOf(e) && (c.push(e), f = a(c)), m || (p("message", O), m = !0)
				};
				n.stopListening = function(e) {
					var n = c.indexOf(e); - 1 !== n && (c.splice(n, 1), c.length ? f = a(c) : (v("message", O), m = !1))
				}, n.proxy = function(e, n) {
					x(e), Array.isArray(n) || (n = [n]);
					var o = h[e];
					o ? o.targets = [].concat(o.targets, n) : o = {
						targets: n
					}, h[e] = o
				}
			}).call(this, o("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/bignumber.js/bignumber.js": function(e, n, o) {
			var s;
			! function(r) {
				"use strict";
				var t, i = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
					a = Math.ceil,
					u = Math.floor,
					l = "[BigNumber Error] ",
					d = l + "Number primitive has more than 15 significant digits: ",
					c = 1e14,
					f = 14,
					h = 9007199254740991,
					m = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
					p = 1e7,
					v = 1e9;

				function _(e) {
					var n = 0 | e;
					return e > 0 || e === n ? n : n - 1
				}

				function g(e) {
					for (var n, o, s = 1, r = e.length, t = e[0] + ""; s < r;) {
						for (n = e[s++] + "", o = f - n.length; o--; n = "0" + n);
						t += n
					}
					for (r = t.length; 48 === t.charCodeAt(--r););
					return t.slice(0, r + 1 || 1)
				}

				function j(e, n) {
					var o, s, r = e.c,
						t = n.c,
						i = e.s,
						a = n.s,
						u = e.e,
						l = n.e;
					if (!i || !a) return null;
					if (o = r && !r[0], s = t && !t[0], o || s) return o ? s ? 0 : -a : i;
					if (i != a) return i;
					if (o = i < 0, s = u == l, !r || !t) return s ? 0 : !r ^ o ? 1 : -1;
					if (!s) return u > l ^ o ? 1 : -1;
					for (a = (u = r.length) < (l = t.length) ? u : l, i = 0; i < a; i++)
						if (r[i] != t[i]) return r[i] > t[i] ^ o ? 1 : -1;
					return u == l ? 0 : u > l ^ o ? 1 : -1
				}

				function b(e, n, o, s) {
					if (e < n || e > o || e !== (e < 0 ? a(e) : u(e))) throw Error(l + (s || "Argument") + ("number" == typeof e ? e < n || e > o ? " out of range: " : " not an integer: " : " not a primitive number: ") + e)
				}

				function w(e) {
					return "[object Array]" == Object.prototype.toString.call(e)
				}

				function y(e) {
					var n = e.c.length - 1;
					return _(e.e / f) == n && e.c[n] % 2 != 0
				}

				function O(e, n) {
					return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (n < 0 ? "e" : "e+") + n
				}

				function x(e, n, o) {
					var s, r;
					if (n < 0) {
						for (r = o + "."; ++n; r += o);
						e = r + e
					} else if (++n > (s = e.length)) {
						for (r = o, n -= s; --n; r += o);
						e += r
					} else n < s && (e = e.slice(0, n) + "." + e.slice(n));
					return e
				}(t = function e(n) {
					var o, s, r, t, A, E, S, k, N, I = G.prototype = {
							constructor: G,
							toString: null,
							valueOf: null
						},
						P = new G(1),
						C = 20,
						T = 4,
						M = -7,
						R = 21,
						L = -1e7,
						B = 1e7,
						F = !1,
						D = 1,
						U = 0,
						z = {
							decimalSeparator: ".",
							groupSeparator: ",",
							groupSize: 3,
							secondaryGroupSize: 0,
							fractionGroupSeparator: " ",
							fractionGroupSize: 0
						},
						q = "0123456789abcdefghijklmnopqrstuvwxyz";

					function G(e, n) {
						var o, t, a, l, c, m, p, v, _ = this;
						if (!(_ instanceof G)) return new G(e, n);
						if (null == n) {
							if (e instanceof G) return _.s = e.s, _.e = e.e, void(_.c = (e = e.c) ? e.slice() : e);
							if ((m = "number" == typeof e) && 0 * e == 0) {
								if (_.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
									for (l = 0, c = e; c >= 10; c /= 10, l++);
									return _.e = l, void(_.c = [e])
								}
								v = e + ""
							} else {
								if (!i.test(v = e + "")) return r(_, v, m);
								_.s = 45 == v.charCodeAt(0) ? (v = v.slice(1), -1) : 1
							}(l = v.indexOf(".")) > -1 && (v = v.replace(".", "")), (c = v.search(/e/i)) > 0 ? (l < 0 && (l = c), l += +v.slice(c + 1), v = v.substring(0, c)) : l < 0 && (l = v.length)
						} else {
							if (b(n, 2, q.length, "Base"), v = e + "", 10 == n) return X(_ = new G(e instanceof G ? e : v), C + _.e + 1, T);
							if (m = "number" == typeof e) {
								if (0 * e != 0) return r(_, v, m, n);
								if (_.s = 1 / e < 0 ? (v = v.slice(1), -1) : 1, G.DEBUG && v.replace(/^0\.0*|\./, "").length > 15) throw Error(d + e);
								m = !1
							} else _.s = 45 === v.charCodeAt(0) ? (v = v.slice(1), -1) : 1;
							for (o = q.slice(0, n), l = c = 0, p = v.length; c < p; c++)
								if (o.indexOf(t = v.charAt(c)) < 0) {
									if ("." == t) {
										if (c > l) {
											l = p;
											continue
										}
									} else if (!a && (v == v.toUpperCase() && (v = v.toLowerCase()) || v == v.toLowerCase() && (v = v.toUpperCase()))) {
										a = !0, c = -1, l = 0;
										continue
									}
									return r(_, e + "", m, n)
								}(l = (v = s(v, n, 10, _.s)).indexOf(".")) > - 1 ? v = v.replace(".", "") : l = v.length
						}
						for (c = 0; 48 === v.charCodeAt(c); c++);
						for (p = v.length; 48 === v.charCodeAt(--p););
						if (v = v.slice(c, ++p)) {
							if (p -= c, m && G.DEBUG && p > 15 && (e > h || e !== u(e))) throw Error(d + _.s * e);
							if ((l = l - c - 1) > B) _.c = _.e = null;
							else if (l < L) _.c = [_.e = 0];
							else {
								if (_.e = l, _.c = [], c = (l + 1) % f, l < 0 && (c += f), c < p) {
									for (c && _.c.push(+v.slice(0, c)), p -= f; c < p;) _.c.push(+v.slice(c, c += f));
									v = v.slice(c), c = f - v.length
								} else c -= p;
								for (; c--; v += "0");
								_.c.push(+v)
							}
						} else _.c = [_.e = 0]
					}

					function V(e, n, o, s) {
						var r, t, i, a, u;
						if (null == o ? o = T : b(o, 0, 8), !e.c) return e.toString();
						if (r = e.c[0], i = e.e, null == n) u = g(e.c), u = 1 == s || 2 == s && i <= M ? O(u, i) : x(u, i, "0");
						else if (t = (e = X(new G(e), n, o)).e, a = (u = g(e.c)).length, 1 == s || 2 == s && (n <= t || t <= M)) {
							for (; a < n; u += "0", a++);
							u = O(u, t)
						} else if (n -= i, u = x(u, t, "0"), t + 1 > a) {
							if (--n > 0)
								for (u += "."; n--; u += "0");
						} else if ((n += t - a) > 0)
							for (t + 1 == a && (u += "."); n--; u += "0");
						return e.s < 0 && r ? "-" + u : u
					}

					function W(e, n) {
						var o, s, r = 0;
						for (w(e[0]) && (e = e[0]), o = new G(e[0]); ++r < e.length;) {
							if (!(s = new G(e[r])).s) {
								o = s;
								break
							}
							n.call(o, s) && (o = s)
						}
						return o
					}

					function $(e, n, o) {
						for (var s = 1, r = n.length; !n[--r]; n.pop());
						for (r = n[0]; r >= 10; r /= 10, s++);
						return (o = s + o * f - 1) > B ? e.c = e.e = null : o < L ? e.c = [e.e = 0] : (e.e = o, e.c = n), e
					}

					function X(e, n, o, s) {
						var r, t, i, l, d, h, p, v = e.c,
							_ = m;
						if (v) {
							e: {
								for (r = 1, l = v[0]; l >= 10; l /= 10, r++);
								if ((t = n - r) < 0) t += f,
								i = n,
								p = (d = v[h = 0]) / _[r - i - 1] % 10 | 0;
								else if ((h = a((t + 1) / f)) >= v.length) {
									if (!s) break e;
									for (; v.length <= h; v.push(0));
									d = p = 0, r = 1, i = (t %= f) - f + 1
								} else {
									for (d = l = v[h], r = 1; l >= 10; l /= 10, r++);
									p = (i = (t %= f) - f + r) < 0 ? 0 : d / _[r - i - 1] % 10 | 0
								}
								if (s = s || n < 0 || null != v[h + 1] || (i < 0 ? d : d % _[r - i - 1]), s = o < 4 ? (p || s) && (0 == o || o == (e.s < 0 ? 3 : 2)) : p > 5 || 5 == p && (4 == o || s || 6 == o && (t > 0 ? i > 0 ? d / _[r - i] : 0 : v[h - 1]) % 10 & 1 || o == (e.s < 0 ? 8 : 7)), n < 1 || !v[0]) return v.length = 0,
								s ? (n -= e.e + 1, v[0] = _[(f - n % f) % f], e.e = -n || 0) : v[0] = e.e = 0,
								e;
								if (0 == t ? (v.length = h, l = 1, h--) : (v.length = h + 1, l = _[f - t], v[h] = i > 0 ? u(d / _[r - i] % _[i]) * l : 0), s)
									for (;;) {
										if (0 == h) {
											for (t = 1, i = v[0]; i >= 10; i /= 10, t++);
											for (i = v[0] += l, l = 1; i >= 10; i /= 10, l++);
											t != l && (e.e++, v[0] == c && (v[0] = 1));
											break
										}
										if (v[h] += l, v[h] != c) break;
										v[h--] = 0, l = 1
									}
								for (t = v.length; 0 === v[--t]; v.pop());
							}
							e.e > B ? e.c = e.e = null : e.e < L && (e.c = [e.e = 0])
						}
						return e
					}
					return G.clone = e, G.ROUND_UP = 0, G.ROUND_DOWN = 1, G.ROUND_CEIL = 2, G.ROUND_FLOOR = 3, G.ROUND_HALF_UP = 4, G.ROUND_HALF_DOWN = 5, G.ROUND_HALF_EVEN = 6, G.ROUND_HALF_CEIL = 7, G.ROUND_HALF_FLOOR = 8, G.EUCLID = 9, G.config = G.set = function(e) {
						var n, o;
						if (null != e) {
							if ("object" != typeof e) throw Error(l + "Object expected: " + e);
							if (e.hasOwnProperty(n = "DECIMAL_PLACES") && (b(o = e[n], 0, v, n), C = o), e.hasOwnProperty(n = "ROUNDING_MODE") && (b(o = e[n], 0, 8, n), T = o), e.hasOwnProperty(n = "EXPONENTIAL_AT") && (w(o = e[n]) ? (b(o[0], -v, 0, n), b(o[1], 0, v, n), M = o[0], R = o[1]) : (b(o, -v, v, n), M = -(R = o < 0 ? -o : o))), e.hasOwnProperty(n = "RANGE"))
								if (w(o = e[n])) b(o[0], -v, -1, n), b(o[1], 1, v, n), L = o[0], B = o[1];
								else {
									if (b(o, -v, v, n), !o) throw Error(l + n + " cannot be zero: " + o);
									L = -(B = o < 0 ? -o : o)
								} if (e.hasOwnProperty(n = "CRYPTO")) {
								if ((o = e[n]) !== !!o) throw Error(l + n + " not true or false: " + o);
								if (o) {
									if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw F = !o, Error(l + "crypto unavailable");
									F = o
								} else F = o
							}
							if (e.hasOwnProperty(n = "MODULO_MODE") && (b(o = e[n], 0, 9, n), D = o), e.hasOwnProperty(n = "POW_PRECISION") && (b(o = e[n], 0, v, n), U = o), e.hasOwnProperty(n = "FORMAT")) {
								if ("object" != typeof(o = e[n])) throw Error(l + n + " not an object: " + o);
								z = o
							}
							if (e.hasOwnProperty(n = "ALPHABET")) {
								if ("string" != typeof(o = e[n]) || /^.$|\.|(.).*\1/.test(o)) throw Error(l + n + " invalid: " + o);
								q = o
							}
						}
						return {
							DECIMAL_PLACES: C,
							ROUNDING_MODE: T,
							EXPONENTIAL_AT: [M, R],
							RANGE: [L, B],
							CRYPTO: F,
							MODULO_MODE: D,
							POW_PRECISION: U,
							FORMAT: z,
							ALPHABET: q
						}
					}, G.isBigNumber = function(e) {
						return e instanceof G || e && !0 === e._isBigNumber || !1
					}, G.maximum = G.max = function() {
						return W(arguments, I.lt)
					}, G.minimum = G.min = function() {
						return W(arguments, I.gt)
					}, G.random = (t = 9007199254740992 * Math.random() & 2097151 ? function() {
						return u(9007199254740992 * Math.random())
					} : function() {
						return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
					}, function(e) {
						var n, o, s, r, i, d = 0,
							c = [],
							h = new G(P);
						if (null == e ? e = C : b(e, 0, v), r = a(e / f), F)
							if (crypto.getRandomValues) {
								for (n = crypto.getRandomValues(new Uint32Array(r *= 2)); d < r;)(i = 131072 * n[d] + (n[d + 1] >>> 11)) >= 9e15 ? (o = crypto.getRandomValues(new Uint32Array(2)), n[d] = o[0], n[d + 1] = o[1]) : (c.push(i % 1e14), d += 2);
								d = r / 2
							} else {
								if (!crypto.randomBytes) throw F = !1, Error(l + "crypto unavailable");
								for (n = crypto.randomBytes(r *= 7); d < r;)(i = 281474976710656 * (31 & n[d]) + 1099511627776 * n[d + 1] + 4294967296 * n[d + 2] + 16777216 * n[d + 3] + (n[d + 4] << 16) + (n[d + 5] << 8) + n[d + 6]) >= 9e15 ? crypto.randomBytes(7).copy(n, d) : (c.push(i % 1e14), d += 7);
								d = r / 7
							} if (!F)
							for (; d < r;)(i = t()) < 9e15 && (c[d++] = i % 1e14);
						for (r = c[--d], e %= f, r && e && (i = m[f - e], c[d] = u(r / i) * i); 0 === c[d]; c.pop(), d--);
						if (d < 0) c = [s = 0];
						else {
							for (s = -1; 0 === c[0]; c.splice(0, 1), s -= f);
							for (d = 1, i = c[0]; i >= 10; i /= 10, d++);
							d < f && (s -= f - d)
						}
						return h.e = s, h.c = c, h
					}), s = function() {
						function e(e, n, o, s) {
							for (var r, t, i = [0], a = 0, u = e.length; a < u;) {
								for (t = i.length; t--; i[t] *= n);
								for (i[0] += s.indexOf(e.charAt(a++)), r = 0; r < i.length; r++) i[r] > o - 1 && (null == i[r + 1] && (i[r + 1] = 0), i[r + 1] += i[r] / o | 0, i[r] %= o)
							}
							return i.reverse()
						}
						return function(n, s, r, t, i) {
							var a, u, l, d, c, f, h, m, p = n.indexOf("."),
								v = C,
								_ = T;
							for (p >= 0 && (d = U, U = 0, n = n.replace(".", ""), f = (m = new G(s)).pow(n.length - p), U = d, m.c = e(x(g(f.c), f.e, "0"), 10, r, "0123456789"), m.e = m.c.length), l = d = (h = e(n, s, r, i ? (a = q, "0123456789") : (a = "0123456789", q))).length; 0 == h[--d]; h.pop());
							if (!h[0]) return a.charAt(0);
							if (p < 0 ? --l : (f.c = h, f.e = l, f.s = t, h = (f = o(f, m, v, _, r)).c, c = f.r, l = f.e), p = h[u = l + v + 1], d = r / 2, c = c || u < 0 || null != h[u + 1], c = _ < 4 ? (null != p || c) && (0 == _ || _ == (f.s < 0 ? 3 : 2)) : p > d || p == d && (4 == _ || c || 6 == _ && 1 & h[u - 1] || _ == (f.s < 0 ? 8 : 7)), u < 1 || !h[0]) n = c ? x(a.charAt(1), -v, a.charAt(0)) : a.charAt(0);
							else {
								if (h.length = u, c)
									for (--r; ++h[--u] > r;) h[u] = 0, u || (++l, h = [1].concat(h));
								for (d = h.length; !h[--d];);
								for (p = 0, n = ""; p <= d; n += a.charAt(h[p++]));
								n = x(n, l, a.charAt(0))
							}
							return n
						}
					}(), o = function() {
						function e(e, n, o) {
							var s, r, t, i, a = 0,
								u = e.length,
								l = n % p,
								d = n / p | 0;
							for (e = e.slice(); u--;) a = ((r = l * (t = e[u] % p) + (s = d * t + (i = e[u] / p | 0) * l) % p * p + a) / o | 0) + (s / p | 0) + d * i, e[u] = r % o;
							return a && (e = [a].concat(e)), e
						}

						function n(e, n, o, s) {
							var r, t;
							if (o != s) t = o > s ? 1 : -1;
							else
								for (r = t = 0; r < o; r++)
									if (e[r] != n[r]) {
										t = e[r] > n[r] ? 1 : -1;
										break
									} return t
						}

						function o(e, n, o, s) {
							for (var r = 0; o--;) e[o] -= r, r = e[o] < n[o] ? 1 : 0, e[o] = r * s + e[o] - n[o];
							for (; !e[0] && e.length > 1; e.splice(0, 1));
						}
						return function(s, r, t, i, a) {
							var l, d, h, m, p, v, g, j, b, w, y, O, x, A, E, S, k, N = s.s == r.s ? 1 : -1,
								I = s.c,
								P = r.c;
							if (!(I && I[0] && P && P[0])) return new G(s.s && r.s && (I ? !P || I[0] != P[0] : P) ? I && 0 == I[0] || !P ? 0 * N : N / 0 : NaN);
							for (b = (j = new G(N)).c = [], N = t + (d = s.e - r.e) + 1, a || (a = c, d = _(s.e / f) - _(r.e / f), N = N / f | 0), h = 0; P[h] == (I[h] || 0); h++);
							if (P[h] > (I[h] || 0) && d--, N < 0) b.push(1), m = !0;
							else {
								for (A = I.length, S = P.length, h = 0, N += 2, (p = u(a / (P[0] + 1))) > 1 && (P = e(P, p, a), I = e(I, p, a), S = P.length, A = I.length), x = S, y = (w = I.slice(0, S)).length; y < S; w[y++] = 0);
								k = P.slice(), k = [0].concat(k), E = P[0], P[1] >= a / 2 && E++;
								do {
									if (p = 0, (l = n(P, w, S, y)) < 0) {
										if (O = w[0], S != y && (O = O * a + (w[1] || 0)), (p = u(O / E)) > 1)
											for (p >= a && (p = a - 1), g = (v = e(P, p, a)).length, y = w.length; 1 == n(v, w, g, y);) p--, o(v, S < g ? k : P, g, a), g = v.length, l = 1;
										else 0 == p && (l = p = 1), g = (v = P.slice()).length;
										if (g < y && (v = [0].concat(v)), o(w, v, y, a), y = w.length, -1 == l)
											for (; n(P, w, S, y) < 1;) p++, o(w, S < y ? k : P, y, a), y = w.length
									} else 0 === l && (p++, w = [0]);
									b[h++] = p, w[0] ? w[y++] = I[x] || 0 : (w = [I[x]], y = 1)
								} while ((x++ < A || null != w[0]) && N--);
								m = null != w[0], b[0] || b.splice(0, 1)
							}
							if (a == c) {
								for (h = 1, N = b[0]; N >= 10; N /= 10, h++);
								X(j, t + (j.e = h + d * f - 1) + 1, i, m)
							} else j.e = d, j.r = +m;
							return j
						}
					}(), A = /^(-?)0([xbo])(?=\w[\w.]*$)/i, E = /^([^.]+)\.$/, S = /^\.([^.]+)$/, k = /^-?(Infinity|NaN)$/, N = /^\s*\+(?=[\w.])|^\s+|\s+$/g, r = function(e, n, o, s) {
						var r, t = o ? n : n.replace(N, "");
						if (k.test(t)) e.s = isNaN(t) ? null : t < 0 ? -1 : 1, e.c = e.e = null;
						else {
							if (!o && (t = t.replace(A, (function(e, n, o) {
									return r = "x" == (o = o.toLowerCase()) ? 16 : "b" == o ? 2 : 8, s && s != r ? e : n
								})), s && (r = s, t = t.replace(E, "$1").replace(S, "0.$1")), n != t)) return new G(t, r);
							if (G.DEBUG) throw Error(l + "Not a" + (s ? " base " + s : "") + " number: " + n);
							e.c = e.e = e.s = null
						}
					}, I.absoluteValue = I.abs = function() {
						var e = new G(this);
						return e.s < 0 && (e.s = 1), e
					}, I.comparedTo = function(e, n) {
						return j(this, new G(e, n))
					}, I.decimalPlaces = I.dp = function(e, n) {
						var o, s, r, t = this;
						if (null != e) return b(e, 0, v), null == n ? n = T : b(n, 0, 8), X(new G(t), e + t.e + 1, n);
						if (!(o = t.c)) return null;
						if (s = ((r = o.length - 1) - _(this.e / f)) * f, r = o[r])
							for (; r % 10 == 0; r /= 10, s--);
						return s < 0 && (s = 0), s
					}, I.dividedBy = I.div = function(e, n) {
						return o(this, new G(e, n), C, T)
					}, I.dividedToIntegerBy = I.idiv = function(e, n) {
						return o(this, new G(e, n), 0, 1)
					}, I.exponentiatedBy = I.pow = function(e, n) {
						var o, s, r, t, i, d, c, h = this;
						if ((e = new G(e)).c && !e.isInteger()) throw Error(l + "Exponent not an integer: " + e);
						if (null != n && (n = new G(n)), t = e.e > 14, !h.c || !h.c[0] || 1 == h.c[0] && !h.e && 1 == h.c.length || !e.c || !e.c[0]) return c = new G(Math.pow(+h.valueOf(), t ? 2 - y(e) : +e)), n ? c.mod(n) : c;
						if (i = e.s < 0, n) {
							if (n.c ? !n.c[0] : !n.s) return new G(NaN);
							(s = !i && h.isInteger() && n.isInteger()) && (h = h.mod(n))
						} else {
							if (e.e > 9 && (h.e > 0 || h.e < -1 || (0 == h.e ? h.c[0] > 1 || t && h.c[1] >= 24e7 : h.c[0] < 8e13 || t && h.c[0] <= 9999975e7))) return r = h.s < 0 && y(e) ? -0 : 0, h.e > -1 && (r = 1 / r), new G(i ? 1 / r : r);
							U && (r = a(U / f + 2))
						}
						for (t ? (o = new G(.5), d = y(e)) : d = e % 2, i && (e.s = 1), c = new G(P);;) {
							if (d) {
								if (!(c = c.times(h)).c) break;
								r ? c.c.length > r && (c.c.length = r) : s && (c = c.mod(n))
							}
							if (t) {
								if (X(e = e.times(o), e.e + 1, 1), !e.c[0]) break;
								t = e.e > 14, d = y(e)
							} else {
								if (!(e = u(e / 2))) break;
								d = e % 2
							}
							h = h.times(h), r ? h.c && h.c.length > r && (h.c.length = r) : s && (h = h.mod(n))
						}
						return s ? c : (i && (c = P.div(c)), n ? c.mod(n) : r ? X(c, U, T, void 0) : c)
					}, I.integerValue = function(e) {
						var n = new G(this);
						return null == e ? e = T : b(e, 0, 8), X(n, n.e + 1, e)
					}, I.isEqualTo = I.eq = function(e, n) {
						return 0 === j(this, new G(e, n))
					}, I.isFinite = function() {
						return !!this.c
					}, I.isGreaterThan = I.gt = function(e, n) {
						return j(this, new G(e, n)) > 0
					}, I.isGreaterThanOrEqualTo = I.gte = function(e, n) {
						return 1 === (n = j(this, new G(e, n))) || 0 === n
					}, I.isInteger = function() {
						return !!this.c && _(this.e / f) > this.c.length - 2
					}, I.isLessThan = I.lt = function(e, n) {
						return j(this, new G(e, n)) < 0
					}, I.isLessThanOrEqualTo = I.lte = function(e, n) {
						return -1 === (n = j(this, new G(e, n))) || 0 === n
					}, I.isNaN = function() {
						return !this.s
					}, I.isNegative = function() {
						return this.s < 0
					}, I.isPositive = function() {
						return this.s > 0
					}, I.isZero = function() {
						return !!this.c && 0 == this.c[0]
					}, I.minus = function(e, n) {
						var o, s, r, t, i = this,
							a = i.s;
						if (n = (e = new G(e, n)).s, !a || !n) return new G(NaN);
						if (a != n) return e.s = -n, i.plus(e);
						var u = i.e / f,
							l = e.e / f,
							d = i.c,
							h = e.c;
						if (!u || !l) {
							if (!d || !h) return d ? (e.s = -n, e) : new G(h ? i : NaN);
							if (!d[0] || !h[0]) return h[0] ? (e.s = -n, e) : new G(d[0] ? i : 3 == T ? -0 : 0)
						}
						if (u = _(u), l = _(l), d = d.slice(), a = u - l) {
							for ((t = a < 0) ? (a = -a, r = d) : (l = u, r = h), r.reverse(), n = a; n--; r.push(0));
							r.reverse()
						} else
							for (s = (t = (a = d.length) < (n = h.length)) ? a : n, a = n = 0; n < s; n++)
								if (d[n] != h[n]) {
									t = d[n] < h[n];
									break
								} if (t && (r = d, d = h, h = r, e.s = -e.s), (n = (s = h.length) - (o = d.length)) > 0)
							for (; n--; d[o++] = 0);
						for (n = c - 1; s > a;) {
							if (d[--s] < h[s]) {
								for (o = s; o && !d[--o]; d[o] = n);
								--d[o], d[s] += c
							}
							d[s] -= h[s]
						}
						for (; 0 == d[0]; d.splice(0, 1), --l);
						return d[0] ? $(e, d, l) : (e.s = 3 == T ? -1 : 1, e.c = [e.e = 0], e)
					}, I.modulo = I.mod = function(e, n) {
						var s, r, t = this;
						return e = new G(e, n), !t.c || !e.s || e.c && !e.c[0] ? new G(NaN) : !e.c || t.c && !t.c[0] ? new G(t) : (9 == D ? (r = e.s, e.s = 1, s = o(t, e, 0, 3), e.s = r, s.s *= r) : s = o(t, e, 0, D), (e = t.minus(s.times(e))).c[0] || 1 != D || (e.s = t.s), e)
					}, I.multipliedBy = I.times = function(e, n) {
						var o, s, r, t, i, a, u, l, d, h, m, v, g, j, b, w = this,
							y = w.c,
							O = (e = new G(e, n)).c;
						if (!(y && O && y[0] && O[0])) return !w.s || !e.s || y && !y[0] && !O || O && !O[0] && !y ? e.c = e.e = e.s = null : (e.s *= w.s, y && O ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
						for (s = _(w.e / f) + _(e.e / f), e.s *= w.s, (u = y.length) < (h = O.length) && (g = y, y = O, O = g, r = u, u = h, h = r), r = u + h, g = []; r--; g.push(0));
						for (j = c, b = p, r = h; --r >= 0;) {
							for (o = 0, m = O[r] % b, v = O[r] / b | 0, t = r + (i = u); t > r;) o = ((l = m * (l = y[--i] % b) + (a = v * l + (d = y[i] / b | 0) * m) % b * b + g[t] + o) / j | 0) + (a / b | 0) + v * d, g[t--] = l % j;
							g[t] = o
						}
						return o ? ++s : g.splice(0, 1), $(e, g, s)
					}, I.negated = function() {
						var e = new G(this);
						return e.s = -e.s || null, e
					}, I.plus = function(e, n) {
						var o, s = this,
							r = s.s;
						if (n = (e = new G(e, n)).s, !r || !n) return new G(NaN);
						if (r != n) return e.s = -n, s.minus(e);
						var t = s.e / f,
							i = e.e / f,
							a = s.c,
							u = e.c;
						if (!t || !i) {
							if (!a || !u) return new G(r / 0);
							if (!a[0] || !u[0]) return u[0] ? e : new G(a[0] ? s : 0 * r)
						}
						if (t = _(t), i = _(i), a = a.slice(), r = t - i) {
							for (r > 0 ? (i = t, o = u) : (r = -r, o = a), o.reverse(); r--; o.push(0));
							o.reverse()
						}
						for ((r = a.length) - (n = u.length) < 0 && (o = u, u = a, a = o, n = r), r = 0; n;) r = (a[--n] = a[n] + u[n] + r) / c | 0, a[n] = c === a[n] ? 0 : a[n] % c;
						return r && (a = [r].concat(a), ++i), $(e, a, i)
					}, I.precision = I.sd = function(e, n) {
						var o, s, r, t = this;
						if (null != e && e !== !!e) return b(e, 1, v), null == n ? n = T : b(n, 0, 8), X(new G(t), e, n);
						if (!(o = t.c)) return null;
						if (s = (r = o.length - 1) * f + 1, r = o[r]) {
							for (; r % 10 == 0; r /= 10, s--);
							for (r = o[0]; r >= 10; r /= 10, s++);
						}
						return e && t.e + 1 > s && (s = t.e + 1), s
					}, I.shiftedBy = function(e) {
						return b(e, -h, h), this.times("1e" + e)
					}, I.squareRoot = I.sqrt = function() {
						var e, n, s, r, t, i = this,
							a = i.c,
							u = i.s,
							l = i.e,
							d = C + 4,
							c = new G("0.5");
						if (1 !== u || !a || !a[0]) return new G(!u || u < 0 && (!a || a[0]) ? NaN : a ? i : 1 / 0);
						if (0 == (u = Math.sqrt(+i)) || u == 1 / 0 ? (((n = g(a)).length + l) % 2 == 0 && (n += "0"), u = Math.sqrt(n), l = _((l + 1) / 2) - (l < 0 || l % 2), s = new G(n = u == 1 / 0 ? "1e" + l : (n = u.toExponential()).slice(0, n.indexOf("e") + 1) + l)) : s = new G(u + ""), s.c[0])
							for ((u = (l = s.e) + d) < 3 && (u = 0);;)
								if (t = s, s = c.times(t.plus(o(i, t, d, 1))), g(t.c).slice(0, u) === (n = g(s.c)).slice(0, u)) {
									if (s.e < l && --u, "9999" != (n = n.slice(u - 3, u + 1)) && (r || "4999" != n)) {
										+n && (+n.slice(1) || "5" != n.charAt(0)) || (X(s, s.e + C + 2, 1), e = !s.times(s).eq(i));
										break
									}
									if (!r && (X(t, t.e + C + 2, 0), t.times(t).eq(i))) {
										s = t;
										break
									}
									d += 4, u += 4, r = 1
								} return X(s, s.e + C + 1, T, e)
					}, I.toExponential = function(e, n) {
						return null != e && (b(e, 0, v), e++), V(this, e, n, 1)
					}, I.toFixed = function(e, n) {
						return null != e && (b(e, 0, v), e = e + this.e + 1), V(this, e, n)
					}, I.toFormat = function(e, n) {
						var o = this.toFixed(e, n);
						if (this.c) {
							var s, r = o.split("."),
								t = +z.groupSize,
								i = +z.secondaryGroupSize,
								a = z.groupSeparator,
								u = r[0],
								l = r[1],
								d = this.s < 0,
								c = d ? u.slice(1) : u,
								f = c.length;
							if (i && (s = t, t = i, i = s, f -= s), t > 0 && f > 0) {
								for (s = f % t || t, u = c.substr(0, s); s < f; s += t) u += a + c.substr(s, t);
								i > 0 && (u += a + c.slice(s)), d && (u = "-" + u)
							}
							o = l ? u + z.decimalSeparator + ((i = +z.fractionGroupSize) ? l.replace(new RegExp("\\d{" + i + "}\\B", "g"), "$&" + z.fractionGroupSeparator) : l) : u
						}
						return o
					}, I.toFraction = function(e) {
						var n, s, r, t, i, a, u, d, c, h, p, v, _ = this,
							j = _.c;
						if (null != e && (!(d = new G(e)).isInteger() && (d.c || 1 !== d.s) || d.lt(P))) throw Error(l + "Argument " + (d.isInteger() ? "out of range: " : "not an integer: ") + e);
						if (!j) return _.toString();
						for (s = new G(P), h = r = new G(P), t = c = new G(P), v = g(j), a = s.e = v.length - _.e - 1, s.c[0] = m[(u = a % f) < 0 ? f + u : u], e = !e || d.comparedTo(s) > 0 ? a > 0 ? s : h : d, u = B, B = 1 / 0, d = new G(v), c.c[0] = 0; p = o(d, s, 0, 1), 1 != (i = r.plus(p.times(t))).comparedTo(e);) r = t, t = i, h = c.plus(p.times(i = h)), c = i, s = d.minus(p.times(i = s)), d = i;
						return i = o(e.minus(r), t, 0, 1), c = c.plus(i.times(h)), r = r.plus(i.times(t)), c.s = h.s = _.s, n = o(h, t, a *= 2, T).minus(_).abs().comparedTo(o(c, r, a, T).minus(_).abs()) < 1 ? [h.toString(), t.toString()] : [c.toString(), r.toString()], B = u, n
					}, I.toNumber = function() {
						return +this
					}, I.toPrecision = function(e, n) {
						return null != e && b(e, 1, v), V(this, e, n, 2)
					}, I.toString = function(e) {
						var n, o = this,
							r = o.s,
							t = o.e;
						return null === t ? r ? (n = "Infinity", r < 0 && (n = "-" + n)) : n = "NaN" : (n = g(o.c), null == e ? n = t <= M || t >= R ? O(n, t) : x(n, t, "0") : (b(e, 2, q.length, "Base"), n = s(x(n, t, "0"), 10, e, r, !0)), r < 0 && o.c[0] && (n = "-" + n)), n
					}, I.valueOf = I.toJSON = function() {
						var e, n = this,
							o = n.e;
						return null === o ? n.toString() : (e = g(n.c), e = o <= M || o >= R ? O(e, o) : x(e, o, "0"), n.s < 0 ? "-" + e : e)
					}, I._isBigNumber = !0, null != n && G.set(n), G
				}()).default = t.BigNumber = t, void 0 === (s = function() {
					return t
				}.call(n, o, n, e)) || (e.exports = s)
			}()
		},
		"./node_modules/bowser/src/bowser.js": function(e, n, o) {
			var s;
			s = function() {
				var e = !0;

				function n(n) {
					function o(e) {
						var o = n.match(e);
						return o && o.length > 1 && o[1] || ""
					}

					function s(e) {
						var o = n.match(e);
						return o && o.length > 1 && o[2] || ""
					}
					var r, t = o(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(n) && /android/i.test(n),
						a = /nexus\s*[0-6]\s*/i.test(n),
						u = !a && /nexus\s*[0-9]+/i.test(n),
						l = /CrOS/.test(n),
						d = /silk/i.test(n),
						c = /sailfish/i.test(n),
						f = /tizen/i.test(n),
						h = /(web|hpw)os/i.test(n),
						m = /windows phone/i.test(n),
						p = (/SamsungBrowser/i.test(n), !m && /windows/i.test(n)),
						v = !t && !d && /macintosh/i.test(n),
						_ = !i && !c && !f && !h && /linux/i.test(n),
						g = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						j = o(/version\/(\d+(\.\d+)?)/i),
						b = /tablet/i.test(n) && !/tablet pc/i.test(n),
						w = !b && /[^-]mobi/i.test(n),
						y = /xbox/i.test(n);
					/opera/i.test(n) ? r = {
						name: "Opera",
						opera: e,
						version: j || o(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(n) ? r = {
						name: "Opera",
						opera: e,
						version: o(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || j
					} : /SamsungBrowser/i.test(n) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: j || o(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(n) ? r = {
						name: "Opera Coast",
						coast: e,
						version: j || o(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(n) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: j || o(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(n) ? r = {
						name: "UC Browser",
						ucbrowser: e,
						version: o(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(n) ? r = {
						name: "Maxthon",
						maxthon: e,
						version: o(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(n) ? r = {
						name: "Epiphany",
						epiphany: e,
						version: o(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(n) ? r = {
						name: "Puffin",
						puffin: e,
						version: o(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(n) ? r = {
						name: "Sleipnir",
						sleipnir: e,
						version: o(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(n) ? r = {
						name: "K-Meleon",
						kMeleon: e,
						version: o(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : m ? (r = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, g ? (r.msedge = e, r.version = g) : (r.msie = e, r.version = o(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(n) ? r = {
						name: "Internet Explorer",
						msie: e,
						version: o(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : l ? r = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: o(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(n) ? r = {
						name: "Microsoft Edge",
						msedge: e,
						version: g
					} : /vivaldi/i.test(n) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: o(/vivaldi\/(\d+(\.\d+)?)/i) || j
					} : c ? r = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: o(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(n) ? r = {
						name: "SeaMonkey",
						seamonkey: e,
						version: o(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(n) ? (r = {
						name: "Firefox",
						firefox: e,
						version: o(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(n) && (r.firefoxos = e, r.osname = "Firefox OS")) : d ? r = {
						name: "Amazon Silk",
						silk: e,
						version: o(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(n) ? r = {
						name: "PhantomJS",
						phantom: e,
						version: o(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(n) ? r = {
						name: "SlimerJS",
						slimer: e,
						version: o(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(n) || /rim\stablet/i.test(n) ? r = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: j || o(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : h ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: j || o(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(n) && (r.touchpad = e)) : /bada/i.test(n) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: o(/dolfin\/(\d+(\.\d+)?)/i)
					} : f ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: o(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || j
					} : /qupzilla/i.test(n) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: o(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || j
					} : /chromium/i.test(n) ? r = {
						name: "Chromium",
						chromium: e,
						version: o(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || j
					} : /chrome|crios|crmo/i.test(n) ? r = {
						name: "Chrome",
						chrome: e,
						version: o(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? r = {
						name: "Android",
						version: j
					} : /safari|applewebkit/i.test(n) ? (r = {
						name: "Safari",
						safari: e
					}, j && (r.version = j)) : t ? (r = {
						name: "iphone" == t ? "iPhone" : "ipad" == t ? "iPad" : "iPod"
					}, j && (r.version = j)) : r = /googlebot/i.test(n) ? {
						name: "Googlebot",
						googlebot: e,
						version: o(/googlebot\/(\d+(\.\d+))/i) || j
					} : {
						name: o(/^(.*)\/(.*) /),
						version: s(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(n) ? (/(apple)?webkit\/537\.36/i.test(n) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && j && (r.version = j)) : !r.opera && /gecko\//i.test(n) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || o(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !i && !r.silk ? !r.windowsphone && t ? (r[t] = e, r.ios = e, r.osname = "iOS") : v ? (r.mac = e, r.osname = "macOS") : y ? (r.xbox = e, r.osname = "Xbox") : p ? (r.windows = e, r.osname = "Windows") : _ && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var O = "";
					r.windows ? O = function(e) {
						switch (e) {
							case "NT":
								return "NT";
							case "XP":
								return "XP";
							case "NT 5.0":
								return "2000";
							case "NT 5.1":
								return "XP";
							case "NT 5.2":
								return "2003";
							case "NT 6.0":
								return "Vista";
							case "NT 6.1":
								return "7";
							case "NT 6.2":
								return "8";
							case "NT 6.3":
								return "8.1";
							case "NT 10.0":
								return "10";
							default:
								return
						}
					}(o(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? O = o(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? O = (O = o(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : t ? O = (O = o(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? O = o(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? O = o(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? O = o(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? O = o(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (O = o(/tizen[\/\s](\d+(\.\d+)*)/i)), O && (r.osversion = O);
					var x = !r.windows && O.split(".")[0];
					return b || u || "ipad" == t || i && (3 == x || x >= 4 && !w) || r.silk ? r.tablet = e : (w || "iphone" == t || "ipod" == t || i || a || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
				}
				var o = n("undefined" != typeof navigator && navigator.userAgent || "");

				function s(e) {
					return e.split(".").length
				}

				function r(e, n) {
					var o, s = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, n);
					for (o = 0; o < e.length; o++) s.push(n(e[o]));
					return s
				}

				function t(e) {
					for (var n = Math.max(s(e[0]), s(e[1])), o = r(e, (function(e) {
							var o = n - s(e);
							return r((e += new Array(o + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --n >= 0;) {
						if (o[0][n] > o[1][n]) return 1;
						if (o[0][n] !== o[1][n]) return -1;
						if (0 === n) return 0
					}
				}

				function i(e, s, r) {
					var i = o;
					"string" == typeof s && (r = s, s = void 0), void 0 === s && (s = !1), r && (i = n(r));
					var a = "" + i.version;
					for (var u in e)
						if (e.hasOwnProperty(u) && i[u]) {
							if ("string" != typeof e[u]) throw new Error("Browser version in the minVersion map should be a string: " + u + ": " + String(e));
							return t([a, e[u]]) < 0
						} return s
				}
				return o.test = function(e) {
					for (var n = 0; n < e.length; ++n) {
						var s = e[n];
						if ("string" == typeof s && s in o) return !0
					}
					return !1
				}, o.isUnsupportedBrowser = i, o.compareVersions = t, o.check = function(e, n, o) {
					return !i(e, n, o)
				}, o._detect = n, o.detect = n, o
			}, e.exports ? e.exports = s() : o("./node_modules/webpack/buildin/amd-define.js")("bowser", s)
		},
		"./node_modules/core-js/modules/_new-promise-capability.js": function(e, n, o) {
			"use strict";
			var s = o("./node_modules/core-js/modules/_a-function.js");

			function r(e) {
				var n, o;
				this.promise = new e((function(e, s) {
					if (void 0 !== n || void 0 !== o) throw TypeError("Bad Promise constructor");
					n = e, o = s
				})), this.resolve = s(n), this.reject = s(o)
			}
			e.exports.f = function(e) {
				return new r(e)
			}
		},
		"./node_modules/core-js/modules/_promise-resolve.js": function(e, n, o) {
			var s = o("./node_modules/core-js/modules/_an-object.js"),
				r = o("./node_modules/core-js/modules/_is-object.js"),
				t = o("./node_modules/core-js/modules/_new-promise-capability.js");
			e.exports = function(e, n) {
				if (s(e), r(n) && n.constructor === e) return n;
				var o = t.f(e);
				return (0, o.resolve)(n), o.promise
			}
		},
		"./node_modules/core-js/modules/_string-trim.js": function(e, n, o) {
			var s = o("./node_modules/core-js/modules/_export.js"),
				r = o("./node_modules/core-js/modules/_defined.js"),
				t = o("./node_modules/core-js/modules/_fails.js"),
				i = o("./node_modules/core-js/modules/_string-ws.js"),
				a = "[" + i + "]",
				u = RegExp("^" + a + a + "*"),
				l = RegExp(a + a + "*$"),
				d = function(e, n, o) {
					var r = {},
						a = t((function() {
							return !!i[e]() || "​" != "​" [e]()
						})),
						u = r[e] = a ? n(c) : i[e];
					o && (r[o] = u), s(s.P + s.F * a, "String", r)
				},
				c = d.trim = function(e, n) {
					return e = String(r(e)), 1 & n && (e = e.replace(u, "")), 2 & n && (e = e.replace(l, "")), e
				};
			e.exports = d
		},
		"./node_modules/core-js/modules/_string-ws.js": function(e, n) {
			e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
		},
		"./node_modules/core-js/modules/es7.promise.finally.js": function(e, n, o) {
			"use strict";
			var s = o("./node_modules/core-js/modules/_export.js"),
				r = o("./node_modules/core-js/modules/_core.js"),
				t = o("./node_modules/core-js/modules/_global.js"),
				i = o("./node_modules/core-js/modules/_species-constructor.js"),
				a = o("./node_modules/core-js/modules/_promise-resolve.js");
			s(s.P + s.R, "Promise", {
				finally: function(e) {
					var n = i(this, r.Promise || t.Promise),
						o = "function" == typeof e;
					return this.then(o ? function(o) {
						return a(n, e()).then((function() {
							return o
						}))
					} : e, o ? function(o) {
						return a(n, e()).then((function() {
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

			function s(e) {
				return function() {
					return e
				}
			}
			var r = function() {};
			r.thatReturns = s, r.thatReturnsFalse = s(!1), r.thatReturnsTrue = s(!0), r.thatReturnsNull = s(null), r.thatReturnsThis = function() {
				return this
			}, r.thatReturnsArgument = function(e) {
				return e
			}, e.exports = r
		},
		"./node_modules/icepick/icepick.js": function(e, n, o) {
			"use strict";
			const s = n,
				r = e => e,
				t = e => null !== e && (Array.isArray(e) || i(e)),
				i = e => !("object" != typeof e || e.constructor !== Object && null != e.constructor || Object.getPrototypeOf(e) !== Object.prototype && null !== Object.getPrototypeOf(e)),
				a = (e, n) => {
					let o, s;
					if (Array.isArray(e))
						for (o = e.length; o--;) n(o);
					else
						for (o = (s = Object.keys(e)).length; o--;) n(s[o])
				},
				u = e => Array.isArray(e) ? e.slice() : (e => {
					const n = null == e.constructor ? Object.create(null) : {},
						o = Object.keys(e);
					let s, r = o.length;
					for (; r--;) n[s = o[r]] = e[s];
					return n
				})(e),
				l = r,
				d = r;

			function c(e, n) {
				return (n || []).reduce((e, n) => {
					if (e) return e[n]
				}, e)
			}

			function f(e, n) {
				return Object.keys(n).reduce((e, o) => s.assoc(e, o, n[o]), e)
			}

			function h(e, n, o) {
				return e[n] === o ? e : s.assoc(e, n, o)
			}
			n.freeze = r, n.thaw = function e(n) {
				if (!t(n) || !Object.isFrozen(n)) return n;
				const o = Array.isArray(n) ? new Array(n.length) : {};
				return a(n, s => {
					o[s] = e(n[s])
				}), o
			}, n.assoc = function(e, n, o) {
				if (e[n] === o) return d(e);
				const s = u(e);
				return s[n] = l(o), d(s)
			}, n.set = n.assoc, n.dissoc = function(e, n) {
				const o = u(e);
				return delete o[n], d(o)
			}, n.unset = n.dissoc, n.assocIn = function e(n, o, r) {
				const t = o[0];
				return 1 === o.length ? s.assoc(n, t, r) : s.assoc(n, t, e(n[t] || {}, o.slice(1), r))
			}, n.setIn = n.assocIn, n.dissocIn = function e(n, o) {
				const r = o[0];
				return n.hasOwnProperty(r) ? 1 === o.length ? s.dissoc(n, r) : s.assoc(n, r, e(n[r], o.slice(1))) : n
			}, n.unsetIn = n.dissocIn, n.getIn = c, n.updateIn = function(e, n, o) {
				const r = c(e, n);
				return s.assocIn(e, n, o(r))
			}, ["push", "unshift", "pop", "shift", "reverse", "sort"].forEach(e => {
				n[e] = function(n, o) {
					const s = [...n];
					return s[e](l(o)), d(s)
				}, n[e].displayName = "icepick." + e
			}), n.splice = function(e, ...n) {
				const o = [...e],
					s = n.map(l);
				return o.splice.apply(o, s), d(o)
			}, n.slice = function(e, n, o) {
				const s = e.slice(n, o);
				return d(s)
			}, ["map", "filter"].forEach(e => {
				n[e] = function(n, o) {
					const s = o[e](n);
					return d(s)
				}, n[e].displayName = "icepick." + e
			}), n.extend = n.assign = function(e, ...n) {
				const o = n.reduce(f, e);
				return d(o)
			}, n.merge = function e(n, o, r) {
				if (null == n || null == o) return n;
				return Object.keys(o).reduce((n, i) => {
					const a = o[i],
						u = n[i],
						l = r ? r(u, a, i) : a;
					return t(a) && t(u) ? l === u ? n : Array.isArray(a) ? s.assoc(n, i, l) : h(n, i, e(u, l, r)) : h(n, i, l)
				}, n)
			};
			const m = {
				value: function() {
					return this.val
				},
				thru: function(e) {
					return this.val = l(e(this.val)), this
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
			var s = o("./node_modules/lodash/_baseClamp.js"),
				r = o("./node_modules/lodash/_copyArray.js"),
				t = o("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, n) {
				return t(r(e), s(n, 0, e.length))
			}
		},
		"./node_modules/lodash/_assignMergeValue.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_baseAssignValue.js"),
				r = o("./node_modules/lodash/eq.js");
			e.exports = function(e, n, o) {
				(void 0 === o || r(e[n], o)) && (void 0 !== o || n in e) || s(e, n, o)
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, n) {
			e.exports = function(e, n, o) {
				return e == e && (void 0 !== o && (e = e <= o ? e : o), void 0 !== n && (e = e >= n ? e : n)), e
			}
		},
		"./node_modules/lodash/_baseInverter.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_baseForOwn.js");
			e.exports = function(e, n, o, r) {
				return s(e, (function(e, s, t) {
					n(r, o(e), s, t)
				})), r
			}
		},
		"./node_modules/lodash/_baseMerge.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_Stack.js"),
				r = o("./node_modules/lodash/_assignMergeValue.js"),
				t = o("./node_modules/lodash/_baseFor.js"),
				i = o("./node_modules/lodash/_baseMergeDeep.js"),
				a = o("./node_modules/lodash/isObject.js"),
				u = o("./node_modules/lodash/keysIn.js"),
				l = o("./node_modules/lodash/_safeGet.js");
			e.exports = function e(n, o, d, c, f) {
				n !== o && t(o, (function(t, u) {
					if (f || (f = new s), a(t)) i(n, o, u, d, e, c, f);
					else {
						var h = c ? c(l(n, u), t, u + "", n, o, f) : void 0;
						void 0 === h && (h = t), r(n, u, h)
					}
				}), u)
			}
		},
		"./node_modules/lodash/_baseMergeDeep.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_assignMergeValue.js"),
				r = o("./node_modules/lodash/_cloneBuffer.js"),
				t = o("./node_modules/lodash/_cloneTypedArray.js"),
				i = o("./node_modules/lodash/_copyArray.js"),
				a = o("./node_modules/lodash/_initCloneObject.js"),
				u = o("./node_modules/lodash/isArguments.js"),
				l = o("./node_modules/lodash/isArray.js"),
				d = o("./node_modules/lodash/isArrayLikeObject.js"),
				c = o("./node_modules/lodash/isBuffer.js"),
				f = o("./node_modules/lodash/isFunction.js"),
				h = o("./node_modules/lodash/isObject.js"),
				m = o("./node_modules/lodash/isPlainObject.js"),
				p = o("./node_modules/lodash/isTypedArray.js"),
				v = o("./node_modules/lodash/_safeGet.js"),
				_ = o("./node_modules/lodash/toPlainObject.js");
			e.exports = function(e, n, o, g, j, b, w) {
				var y = v(e, o),
					O = v(n, o),
					x = w.get(O);
				if (x) s(e, o, x);
				else {
					var A = b ? b(y, O, o + "", e, n, w) : void 0,
						E = void 0 === A;
					if (E) {
						var S = l(O),
							k = !S && c(O),
							N = !S && !k && p(O);
						A = O, S || k || N ? l(y) ? A = y : d(y) ? A = i(y) : k ? (E = !1, A = r(O, !0)) : N ? (E = !1, A = t(O, !0)) : A = [] : m(O) || u(O) ? (A = y, u(y) ? A = _(y) : h(y) && !f(y) || (A = a(O))) : E = !1
					}
					E && (w.set(O, A), j(A, O, g, b, w), w.delete(O)), s(e, o, A)
				}
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, n) {
			var o = Math.floor,
				s = Math.random;
			e.exports = function(e, n) {
				return e + o(s() * (n - e + 1))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_baseClamp.js"),
				r = o("./node_modules/lodash/_shuffleSelf.js"),
				t = o("./node_modules/lodash/values.js");
			e.exports = function(e, n) {
				var o = t(e);
				return r(o, s(n, 0, o.length))
			}
		},
		"./node_modules/lodash/_baseSome.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, n) {
				var o;
				return s(e, (function(e, s, r) {
					return !(o = n(e, s, r))
				})), !!o
			}
		},
		"./node_modules/lodash/_baseXor.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_baseDifference.js"),
				r = o("./node_modules/lodash/_baseFlatten.js"),
				t = o("./node_modules/lodash/_baseUniq.js");
			e.exports = function(e, n, o) {
				var i = e.length;
				if (i < 2) return i ? t(e[0]) : [];
				for (var a = -1, u = Array(i); ++a < i;)
					for (var l = e[a], d = -1; ++d < i;) d != a && (u[a] = s(u[a] || l, e[d], n, o));
				return t(r(u, 1), n, o)
			}
		},
		"./node_modules/lodash/_castSlice.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_baseSlice.js");
			e.exports = function(e, n, o) {
				var r = e.length;
				return o = void 0 === o ? r : o, !n && o >= r ? e : s(e, n, o)
			}
		},
		"./node_modules/lodash/_charsStartIndex.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_baseIndexOf.js");
			e.exports = function(e, n) {
				for (var o = -1, r = e.length; ++o < r && s(n, e[o], 0) > -1;);
				return o
			}
		},
		"./node_modules/lodash/_createCaseFirst.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_castSlice.js"),
				r = o("./node_modules/lodash/_hasUnicode.js"),
				t = o("./node_modules/lodash/_stringToArray.js"),
				i = o("./node_modules/lodash/toString.js");
			e.exports = function(e) {
				return function(n) {
					n = i(n);
					var o = r(n) ? t(n) : void 0,
						a = o ? o[0] : n.charAt(0),
						u = o ? s(o, 1).join("") : n.slice(1);
					return a[e]() + u
				}
			}
		},
		"./node_modules/lodash/_createFind.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_baseIteratee.js"),
				r = o("./node_modules/lodash/isArrayLike.js"),
				t = o("./node_modules/lodash/keys.js");
			e.exports = function(e) {
				return function(n, o, i) {
					var a = Object(n);
					if (!r(n)) {
						var u = s(o, 3);
						n = t(n), o = function(e) {
							return u(a[e], e, a)
						}
					}
					var l = e(n, o, i);
					return l > -1 ? a[u ? n[l] : l] : void 0
				}
			}
		},
		"./node_modules/lodash/_createInverter.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_baseInverter.js");
			e.exports = function(e, n) {
				return function(o, r) {
					return s(o, e, n(r), {})
				}
			}
		},
		"./node_modules/lodash/_safeGet.js": function(e, n) {
			e.exports = function(e, n) {
				if (("constructor" !== n || "function" != typeof e[n]) && "__proto__" != n) return e[n]
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, n) {
				var o = -1,
					r = e.length,
					t = r - 1;
				for (n = void 0 === n ? r : n; ++o < n;) {
					var i = s(o, t),
						a = e[i];
					e[i] = e[o], e[o] = a
				}
				return e.length = n, e
			}
		},
		"./node_modules/lodash/camelCase.js": function(e, n, o) {
			var s = o("./node_modules/lodash/capitalize.js"),
				r = o("./node_modules/lodash/_createCompounder.js")((function(e, n, o) {
					return n = n.toLowerCase(), e + (o ? s(n) : n)
				}));
			e.exports = r
		},
		"./node_modules/lodash/capitalize.js": function(e, n, o) {
			var s = o("./node_modules/lodash/toString.js"),
				r = o("./node_modules/lodash/upperFirst.js");
			e.exports = function(e) {
				return r(s(e).toLowerCase())
			}
		},
		"./node_modules/lodash/clamp.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_baseClamp.js"),
				r = o("./node_modules/lodash/toNumber.js");
			e.exports = function(e, n, o) {
				return void 0 === o && (o = n, n = void 0), void 0 !== o && (o = (o = r(o)) == o ? o : 0), void 0 !== n && (n = (n = r(n)) == n ? n : 0), s(r(e), n, o)
			}
		},
		"./node_modules/lodash/defaults.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_baseRest.js"),
				r = o("./node_modules/lodash/eq.js"),
				t = o("./node_modules/lodash/_isIterateeCall.js"),
				i = o("./node_modules/lodash/keysIn.js"),
				a = Object.prototype,
				u = a.hasOwnProperty,
				l = s((function(e, n) {
					e = Object(e);
					var o = -1,
						s = n.length,
						l = s > 2 ? n[2] : void 0;
					for (l && t(n[0], n[1], l) && (s = 1); ++o < s;)
						for (var d = n[o], c = i(d), f = -1, h = c.length; ++f < h;) {
							var m = c[f],
								p = e[m];
							(void 0 === p || r(p, a[m]) && !u.call(e, m)) && (e[m] = d[m])
						}
					return e
				}));
			e.exports = l
		},
		"./node_modules/lodash/find.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_createFind.js")(o("./node_modules/lodash/findIndex.js"));
			e.exports = s
		},
		"./node_modules/lodash/findIndex.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_baseFindIndex.js"),
				r = o("./node_modules/lodash/_baseIteratee.js"),
				t = o("./node_modules/lodash/toInteger.js"),
				i = Math.max;
			e.exports = function(e, n, o) {
				var a = null == e ? 0 : e.length;
				if (!a) return -1;
				var u = null == o ? 0 : t(o);
				return u < 0 && (u = i(a + u, 0)), s(e, r(n, 3), u)
			}
		},
		"./node_modules/lodash/findLastIndex.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_baseFindIndex.js"),
				r = o("./node_modules/lodash/_baseIteratee.js"),
				t = o("./node_modules/lodash/toInteger.js"),
				i = Math.max,
				a = Math.min;
			e.exports = function(e, n, o) {
				var u = null == e ? 0 : e.length;
				if (!u) return -1;
				var l = u - 1;
				return void 0 !== o && (l = t(o), l = o < 0 ? i(u + l, 0) : a(l, u - 1)), s(e, r(n, 3), l, !0)
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_baseFlatten.js"),
				r = o("./node_modules/lodash/map.js");
			e.exports = function(e, n) {
				return s(r(e, n), 1)
			}
		},
		"./node_modules/lodash/forEach.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_arrayEach.js"),
				r = o("./node_modules/lodash/_baseEach.js"),
				t = o("./node_modules/lodash/_castFunction.js"),
				i = o("./node_modules/lodash/isArray.js");
			e.exports = function(e, n) {
				return (i(e) ? s : r)(e, t(n))
			}
		},
		"./node_modules/lodash/forOwn.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_baseForOwn.js"),
				r = o("./node_modules/lodash/_castFunction.js");
			e.exports = function(e, n) {
				return e && s(e, r(n))
			}
		},
		"./node_modules/lodash/invert.js": function(e, n, o) {
			var s = o("./node_modules/lodash/constant.js"),
				r = o("./node_modules/lodash/_createInverter.js"),
				t = o("./node_modules/lodash/identity.js"),
				i = Object.prototype.toString,
				a = r((function(e, n, o) {
					null != n && "function" != typeof n.toString && (n = i.call(n)), e[n] = o
				}), s(t));
			e.exports = a
		},
		"./node_modules/lodash/isEqualWith.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_baseIsEqual.js");
			e.exports = function(e, n, o) {
				var r = (o = "function" == typeof o ? o : void 0) ? o(e, n) : void 0;
				return void 0 === r ? s(e, n, void 0, o) : !!r
			}
		},
		"./node_modules/lodash/mapValues.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_baseAssignValue.js"),
				r = o("./node_modules/lodash/_baseForOwn.js"),
				t = o("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, n) {
				var o = {};
				return n = t(n, 3), r(e, (function(e, r, t) {
					s(o, r, n(e, r, t))
				})), o
			}
		},
		"./node_modules/lodash/merge.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_baseMerge.js"),
				r = o("./node_modules/lodash/_createAssigner.js")((function(e, n, o) {
					s(e, n, o)
				}));
			e.exports = r
		},
		"./node_modules/lodash/mergeWith.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_baseMerge.js"),
				r = o("./node_modules/lodash/_createAssigner.js")((function(e, n, o, r) {
					s(e, n, o, r)
				}));
			e.exports = r
		},
		"./node_modules/lodash/sampleSize.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_arraySampleSize.js"),
				r = o("./node_modules/lodash/_baseSampleSize.js"),
				t = o("./node_modules/lodash/isArray.js"),
				i = o("./node_modules/lodash/_isIterateeCall.js"),
				a = o("./node_modules/lodash/toInteger.js");
			e.exports = function(e, n, o) {
				return n = (o ? i(e, n, o) : void 0 === n) ? 1 : a(n), (t(e) ? s : r)(e, n)
			}
		},
		"./node_modules/lodash/set.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_baseSet.js");
			e.exports = function(e, n, o) {
				return null == e ? e : s(e, n, o)
			}
		},
		"./node_modules/lodash/some.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_arraySome.js"),
				r = o("./node_modules/lodash/_baseIteratee.js"),
				t = o("./node_modules/lodash/_baseSome.js"),
				i = o("./node_modules/lodash/isArray.js"),
				a = o("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, n, o) {
				var u = i(e) ? s : t;
				return o && a(e, n, o) && (n = void 0), u(e, r(n, 3))
			}
		},
		"./node_modules/lodash/toPlainObject.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_copyObject.js"),
				r = o("./node_modules/lodash/keysIn.js");
			e.exports = function(e) {
				return s(e, r(e))
			}
		},
		"./node_modules/lodash/trimStart.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_baseToString.js"),
				r = o("./node_modules/lodash/_castSlice.js"),
				t = o("./node_modules/lodash/_charsStartIndex.js"),
				i = o("./node_modules/lodash/_stringToArray.js"),
				a = o("./node_modules/lodash/toString.js"),
				u = /^\s+/;
			e.exports = function(e, n, o) {
				if ((e = a(e)) && (o || void 0 === n)) return e.replace(u, "");
				if (!e || !(n = s(n))) return e;
				var l = i(e),
					d = t(l, i(n));
				return r(l, d).join("")
			}
		},
		"./node_modules/lodash/union.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_baseFlatten.js"),
				r = o("./node_modules/lodash/_baseRest.js"),
				t = o("./node_modules/lodash/_baseUniq.js"),
				i = o("./node_modules/lodash/isArrayLikeObject.js"),
				a = r((function(e) {
					return t(s(e, 1, i, !0))
				}));
			e.exports = a
		},
		"./node_modules/lodash/uniqWith.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_baseUniq.js");
			e.exports = function(e, n) {
				return n = "function" == typeof n ? n : void 0, e && e.length ? s(e, void 0, n) : []
			}
		},
		"./node_modules/lodash/upperFirst.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_createCaseFirst.js")("toUpperCase");
			e.exports = s
		},
		"./node_modules/lodash/xor.js": function(e, n, o) {
			var s = o("./node_modules/lodash/_arrayFilter.js"),
				r = o("./node_modules/lodash/_baseRest.js"),
				t = o("./node_modules/lodash/_baseXor.js"),
				i = o("./node_modules/lodash/isArrayLikeObject.js"),
				a = r((function(e) {
					return t(s(e, i))
				}));
			e.exports = a
		},
		"./node_modules/path-browserify/index.js": function(e, n, o) {
			(function(e) {
				function o(e, n) {
					for (var o = 0, s = e.length - 1; s >= 0; s--) {
						var r = e[s];
						"." === r ? e.splice(s, 1) : ".." === r ? (e.splice(s, 1), o++) : o && (e.splice(s, 1), o--)
					}
					if (n)
						for (; o--; o) e.unshift("..");
					return e
				}

				function s(e, n) {
					if (e.filter) return e.filter(n);
					for (var o = [], s = 0; s < e.length; s++) n(e[s], s, e) && o.push(e[s]);
					return o
				}
				n.resolve = function() {
					for (var n = "", r = !1, t = arguments.length - 1; t >= -1 && !r; t--) {
						var i = t >= 0 ? arguments[t] : e.cwd();
						if ("string" != typeof i) throw new TypeError("Arguments to path.resolve must be strings");
						i && (n = i + "/" + n, r = "/" === i.charAt(0))
					}
					return (r ? "/" : "") + (n = o(s(n.split("/"), (function(e) {
						return !!e
					})), !r).join("/")) || "."
				}, n.normalize = function(e) {
					var t = n.isAbsolute(e),
						i = "/" === r(e, -1);
					return (e = o(s(e.split("/"), (function(e) {
						return !!e
					})), !t).join("/")) || t || (e = "."), e && i && (e += "/"), (t ? "/" : "") + e
				}, n.isAbsolute = function(e) {
					return "/" === e.charAt(0)
				}, n.join = function() {
					var e = Array.prototype.slice.call(arguments, 0);
					return n.normalize(s(e, (function(e, n) {
						if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
						return e
					})).join("/"))
				}, n.relative = function(e, o) {
					function s(e) {
						for (var n = 0; n < e.length && "" === e[n]; n++);
						for (var o = e.length - 1; o >= 0 && "" === e[o]; o--);
						return n > o ? [] : e.slice(n, o - n + 1)
					}
					e = n.resolve(e).substr(1), o = n.resolve(o).substr(1);
					for (var r = s(e.split("/")), t = s(o.split("/")), i = Math.min(r.length, t.length), a = i, u = 0; u < i; u++)
						if (r[u] !== t[u]) {
							a = u;
							break
						} var l = [];
					for (u = a; u < r.length; u++) l.push("..");
					return (l = l.concat(t.slice(a))).join("/")
				}, n.sep = "/", n.delimiter = ":", n.dirname = function(e) {
					if ("string" != typeof e && (e += ""), 0 === e.length) return ".";
					for (var n = e.charCodeAt(0), o = 47 === n, s = -1, r = !0, t = e.length - 1; t >= 1; --t)
						if (47 === (n = e.charCodeAt(t))) {
							if (!r) {
								s = t;
								break
							}
						} else r = !1;
					return -1 === s ? o ? "/" : "." : o && 1 === s ? "/" : e.slice(0, s)
				}, n.basename = function(e, n) {
					var o = function(e) {
						"string" != typeof e && (e += "");
						var n, o = 0,
							s = -1,
							r = !0;
						for (n = e.length - 1; n >= 0; --n)
							if (47 === e.charCodeAt(n)) {
								if (!r) {
									o = n + 1;
									break
								}
							} else -1 === s && (r = !1, s = n + 1);
						return -1 === s ? "" : e.slice(o, s)
					}(e);
					return n && o.substr(-1 * n.length) === n && (o = o.substr(0, o.length - n.length)), o
				}, n.extname = function(e) {
					"string" != typeof e && (e += "");
					for (var n = -1, o = 0, s = -1, r = !0, t = 0, i = e.length - 1; i >= 0; --i) {
						var a = e.charCodeAt(i);
						if (47 !== a) - 1 === s && (r = !1, s = i + 1), 46 === a ? -1 === n ? n = i : 1 !== t && (t = 1) : -1 !== n && (t = -1);
						else if (!r) {
							o = i + 1;
							break
						}
					}
					return -1 === n || -1 === s || 0 === t || 1 === t && n === s - 1 && n === o + 1 ? "" : e.slice(n, s)
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
			var s = o("./node_modules/fbjs/lib/emptyFunction.js"),
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
				return o.checkPropTypes = s, o.PropTypes = o, o
			}
		},
		"./node_modules/prop-types/index.js": function(e, n, o) {
			e.exports = o("./node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, n) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		}
	}
]);
//# sourceMappingURL=vendors~Governance~Reddit.2d68f26c0aacc9d5e950.js.map