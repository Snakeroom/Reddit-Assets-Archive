// https://www.redditstatic.com/desktop2x/vendors~Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~c822ce19.11ea53197bd413399b54.js
// Retrieved at 10/14/2020, 1:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~c822ce19"], {
		"./node_modules/bignumber.js/bignumber.js": function(e, n, r) {
			var t;
			! function(o) {
				"use strict";
				var i, s = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
					u = Math.ceil,
					l = Math.floor,
					c = "[BigNumber Error] ",
					f = c + "Number primitive has more than 15 significant digits: ",
					a = 1e14,
					h = 14,
					d = 9007199254740991,
					p = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
					g = 1e7,
					m = 1e9;

				function v(e) {
					var n = 0 | e;
					return e > 0 || e === n ? n : n - 1
				}

				function _(e) {
					for (var n, r, t = 1, o = e.length, i = e[0] + ""; t < o;) {
						for (n = e[t++] + "", r = h - n.length; r--; n = "0" + n);
						i += n
					}
					for (o = i.length; 48 === i.charCodeAt(--o););
					return i.slice(0, o + 1 || 1)
				}

				function w(e, n) {
					var r, t, o = e.c,
						i = n.c,
						s = e.s,
						u = n.s,
						l = e.e,
						c = n.e;
					if (!s || !u) return null;
					if (r = o && !o[0], t = i && !i[0], r || t) return r ? t ? 0 : -u : s;
					if (s != u) return s;
					if (r = s < 0, t = l == c, !o || !i) return t ? 0 : !o ^ r ? 1 : -1;
					if (!t) return l > c ^ r ? 1 : -1;
					for (u = (l = o.length) < (c = i.length) ? l : c, s = 0; s < u; s++)
						if (o[s] != i[s]) return o[s] > i[s] ^ r ? 1 : -1;
					return l == c ? 0 : l > c ^ r ? 1 : -1
				}

				function O(e, n, r, t) {
					if (e < n || e > r || e !== (e < 0 ? u(e) : l(e))) throw Error(c + (t || "Argument") + ("number" == typeof e ? e < n || e > r ? " out of range: " : " not an integer: " : " not a primitive number: ") + e)
				}

				function b(e) {
					return "[object Array]" == Object.prototype.toString.call(e)
				}

				function y(e) {
					var n = e.c.length - 1;
					return v(e.e / h) == n && e.c[n] % 2 != 0
				}

				function N(e, n) {
					return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (n < 0 ? "e" : "e+") + n
				}

				function E(e, n, r) {
					var t, o;
					if (n < 0) {
						for (o = r + "."; ++n; o += r);
						e = o + e
					} else if (++n > (t = e.length)) {
						for (o = r, n -= t; --n; o += r);
						e += o
					} else n < t && (e = e.slice(0, n) + "." + e.slice(n));
					return e
				}(i = function e(n) {
					var r, t, o, i, A, j, x, L, D, I = $.prototype = {
							constructor: $,
							toString: null,
							valueOf: null
						},
						S = new $(1),
						R = 20,
						P = 4,
						U = -7,
						C = 21,
						B = -1e7,
						T = 1e7,
						M = !1,
						F = 1,
						G = 0,
						q = {
							decimalSeparator: ".",
							groupSeparator: ",",
							groupSize: 3,
							secondaryGroupSize: 0,
							fractionGroupSeparator: " ",
							fractionGroupSize: 0
						},
						k = "0123456789abcdefghijklmnopqrstuvwxyz";

					function $(e, n) {
						var r, i, u, c, a, p, g, m, v = this;
						if (!(v instanceof $)) return new $(e, n);
						if (null == n) {
							if (e instanceof $) return v.s = e.s, v.e = e.e, void(v.c = (e = e.c) ? e.slice() : e);
							if ((p = "number" == typeof e) && 0 * e == 0) {
								if (v.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
									for (c = 0, a = e; a >= 10; a /= 10, c++);
									return v.e = c, void(v.c = [e])
								}
								m = e + ""
							} else {
								if (!s.test(m = e + "")) return o(v, m, p);
								v.s = 45 == m.charCodeAt(0) ? (m = m.slice(1), -1) : 1
							}(c = m.indexOf(".")) > -1 && (m = m.replace(".", "")), (a = m.search(/e/i)) > 0 ? (c < 0 && (c = a), c += +m.slice(a + 1), m = m.substring(0, a)) : c < 0 && (c = m.length)
						} else {
							if (O(n, 2, k.length, "Base"), m = e + "", 10 == n) return W(v = new $(e instanceof $ ? e : m), R + v.e + 1, P);
							if (p = "number" == typeof e) {
								if (0 * e != 0) return o(v, m, p, n);
								if (v.s = 1 / e < 0 ? (m = m.slice(1), -1) : 1, $.DEBUG && m.replace(/^0\.0*|\./, "").length > 15) throw Error(f + e);
								p = !1
							} else v.s = 45 === m.charCodeAt(0) ? (m = m.slice(1), -1) : 1;
							for (r = k.slice(0, n), c = a = 0, g = m.length; a < g; a++)
								if (r.indexOf(i = m.charAt(a)) < 0) {
									if ("." == i) {
										if (a > c) {
											c = g;
											continue
										}
									} else if (!u && (m == m.toUpperCase() && (m = m.toLowerCase()) || m == m.toLowerCase() && (m = m.toUpperCase()))) {
										u = !0, a = -1, c = 0;
										continue
									}
									return o(v, e + "", p, n)
								}(c = (m = t(m, n, 10, v.s)).indexOf(".")) > - 1 ? m = m.replace(".", "") : c = m.length
						}
						for (a = 0; 48 === m.charCodeAt(a); a++);
						for (g = m.length; 48 === m.charCodeAt(--g););
						if (m = m.slice(a, ++g)) {
							if (g -= a, p && $.DEBUG && g > 15 && (e > d || e !== l(e))) throw Error(f + v.s * e);
							if ((c = c - a - 1) > T) v.c = v.e = null;
							else if (c < B) v.c = [v.e = 0];
							else {
								if (v.e = c, v.c = [], a = (c + 1) % h, c < 0 && (a += h), a < g) {
									for (a && v.c.push(+m.slice(0, a)), g -= h; a < g;) v.c.push(+m.slice(a, a += h));
									m = m.slice(a), a = h - m.length
								} else a -= g;
								for (; a--; m += "0");
								v.c.push(+m)
							}
						} else v.c = [v.e = 0]
					}

					function H(e, n, r, t) {
						var o, i, s, u, l;
						if (null == r ? r = P : O(r, 0, 8), !e.c) return e.toString();
						if (o = e.c[0], s = e.e, null == n) l = _(e.c), l = 1 == t || 2 == t && s <= U ? N(l, s) : E(l, s, "0");
						else if (i = (e = W(new $(e), n, r)).e, u = (l = _(e.c)).length, 1 == t || 2 == t && (n <= i || i <= U)) {
							for (; u < n; l += "0", u++);
							l = N(l, i)
						} else if (n -= s, l = E(l, i, "0"), i + 1 > u) {
							if (--n > 0)
								for (l += "."; n--; l += "0");
						} else if ((n += i - u) > 0)
							for (i + 1 == u && (l += "."); n--; l += "0");
						return e.s < 0 && o ? "-" + l : l
					}

					function z(e, n) {
						var r, t, o = 0;
						for (b(e[0]) && (e = e[0]), r = new $(e[0]); ++o < e.length;) {
							if (!(t = new $(e[o])).s) {
								r = t;
								break
							}
							n.call(r, t) && (r = t)
						}
						return r
					}

					function V(e, n, r) {
						for (var t = 1, o = n.length; !n[--o]; n.pop());
						for (o = n[0]; o >= 10; o /= 10, t++);
						return (r = t + r * h - 1) > T ? e.c = e.e = null : r < B ? e.c = [e.e = 0] : (e.e = r, e.c = n), e
					}

					function W(e, n, r, t) {
						var o, i, s, c, f, d, g, m = e.c,
							v = p;
						if (m) {
							e: {
								for (o = 1, c = m[0]; c >= 10; c /= 10, o++);
								if ((i = n - o) < 0) i += h,
								s = n,
								g = (f = m[d = 0]) / v[o - s - 1] % 10 | 0;
								else if ((d = u((i + 1) / h)) >= m.length) {
									if (!t) break e;
									for (; m.length <= d; m.push(0));
									f = g = 0, o = 1, s = (i %= h) - h + 1
								} else {
									for (f = c = m[d], o = 1; c >= 10; c /= 10, o++);
									g = (s = (i %= h) - h + o) < 0 ? 0 : f / v[o - s - 1] % 10 | 0
								}
								if (t = t || n < 0 || null != m[d + 1] || (s < 0 ? f : f % v[o - s - 1]), t = r < 4 ? (g || t) && (0 == r || r == (e.s < 0 ? 3 : 2)) : g > 5 || 5 == g && (4 == r || t || 6 == r && (i > 0 ? s > 0 ? f / v[o - s] : 0 : m[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !m[0]) return m.length = 0,
								t ? (n -= e.e + 1, m[0] = v[(h - n % h) % h], e.e = -n || 0) : m[0] = e.e = 0,
								e;
								if (0 == i ? (m.length = d, c = 1, d--) : (m.length = d + 1, c = v[h - i], m[d] = s > 0 ? l(f / v[o - s] % v[s]) * c : 0), t)
									for (;;) {
										if (0 == d) {
											for (i = 1, s = m[0]; s >= 10; s /= 10, i++);
											for (s = m[0] += c, c = 1; s >= 10; s /= 10, c++);
											i != c && (e.e++, m[0] == a && (m[0] = 1));
											break
										}
										if (m[d] += c, m[d] != a) break;
										m[d--] = 0, c = 1
									}
								for (i = m.length; 0 === m[--i]; m.pop());
							}
							e.e > T ? e.c = e.e = null : e.e < B && (e.c = [e.e = 0])
						}
						return e
					}
					return $.clone = e, $.ROUND_UP = 0, $.ROUND_DOWN = 1, $.ROUND_CEIL = 2, $.ROUND_FLOOR = 3, $.ROUND_HALF_UP = 4, $.ROUND_HALF_DOWN = 5, $.ROUND_HALF_EVEN = 6, $.ROUND_HALF_CEIL = 7, $.ROUND_HALF_FLOOR = 8, $.EUCLID = 9, $.config = $.set = function(e) {
						var n, r;
						if (null != e) {
							if ("object" != typeof e) throw Error(c + "Object expected: " + e);
							if (e.hasOwnProperty(n = "DECIMAL_PLACES") && (O(r = e[n], 0, m, n), R = r), e.hasOwnProperty(n = "ROUNDING_MODE") && (O(r = e[n], 0, 8, n), P = r), e.hasOwnProperty(n = "EXPONENTIAL_AT") && (b(r = e[n]) ? (O(r[0], -m, 0, n), O(r[1], 0, m, n), U = r[0], C = r[1]) : (O(r, -m, m, n), U = -(C = r < 0 ? -r : r))), e.hasOwnProperty(n = "RANGE"))
								if (b(r = e[n])) O(r[0], -m, -1, n), O(r[1], 1, m, n), B = r[0], T = r[1];
								else {
									if (O(r, -m, m, n), !r) throw Error(c + n + " cannot be zero: " + r);
									B = -(T = r < 0 ? -r : r)
								} if (e.hasOwnProperty(n = "CRYPTO")) {
								if ((r = e[n]) !== !!r) throw Error(c + n + " not true or false: " + r);
								if (r) {
									if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw M = !r, Error(c + "crypto unavailable");
									M = r
								} else M = r
							}
							if (e.hasOwnProperty(n = "MODULO_MODE") && (O(r = e[n], 0, 9, n), F = r), e.hasOwnProperty(n = "POW_PRECISION") && (O(r = e[n], 0, m, n), G = r), e.hasOwnProperty(n = "FORMAT")) {
								if ("object" != typeof(r = e[n])) throw Error(c + n + " not an object: " + r);
								q = r
							}
							if (e.hasOwnProperty(n = "ALPHABET")) {
								if ("string" != typeof(r = e[n]) || /^.$|\.|(.).*\1/.test(r)) throw Error(c + n + " invalid: " + r);
								k = r
							}
						}
						return {
							DECIMAL_PLACES: R,
							ROUNDING_MODE: P,
							EXPONENTIAL_AT: [U, C],
							RANGE: [B, T],
							CRYPTO: M,
							MODULO_MODE: F,
							POW_PRECISION: G,
							FORMAT: q,
							ALPHABET: k
						}
					}, $.isBigNumber = function(e) {
						return e instanceof $ || e && !0 === e._isBigNumber || !1
					}, $.maximum = $.max = function() {
						return z(arguments, I.lt)
					}, $.minimum = $.min = function() {
						return z(arguments, I.gt)
					}, $.random = (i = 9007199254740992 * Math.random() & 2097151 ? function() {
						return l(9007199254740992 * Math.random())
					} : function() {
						return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
					}, function(e) {
						var n, r, t, o, s, f = 0,
							a = [],
							d = new $(S);
						if (null == e ? e = R : O(e, 0, m), o = u(e / h), M)
							if (crypto.getRandomValues) {
								for (n = crypto.getRandomValues(new Uint32Array(o *= 2)); f < o;)(s = 131072 * n[f] + (n[f + 1] >>> 11)) >= 9e15 ? (r = crypto.getRandomValues(new Uint32Array(2)), n[f] = r[0], n[f + 1] = r[1]) : (a.push(s % 1e14), f += 2);
								f = o / 2
							} else {
								if (!crypto.randomBytes) throw M = !1, Error(c + "crypto unavailable");
								for (n = crypto.randomBytes(o *= 7); f < o;)(s = 281474976710656 * (31 & n[f]) + 1099511627776 * n[f + 1] + 4294967296 * n[f + 2] + 16777216 * n[f + 3] + (n[f + 4] << 16) + (n[f + 5] << 8) + n[f + 6]) >= 9e15 ? crypto.randomBytes(7).copy(n, f) : (a.push(s % 1e14), f += 7);
								f = o / 7
							} if (!M)
							for (; f < o;)(s = i()) < 9e15 && (a[f++] = s % 1e14);
						for (o = a[--f], e %= h, o && e && (s = p[h - e], a[f] = l(o / s) * s); 0 === a[f]; a.pop(), f--);
						if (f < 0) a = [t = 0];
						else {
							for (t = -1; 0 === a[0]; a.splice(0, 1), t -= h);
							for (f = 1, s = a[0]; s >= 10; s /= 10, f++);
							f < h && (t -= h - f)
						}
						return d.e = t, d.c = a, d
					}), t = function() {
						function e(e, n, r, t) {
							for (var o, i, s = [0], u = 0, l = e.length; u < l;) {
								for (i = s.length; i--; s[i] *= n);
								for (s[0] += t.indexOf(e.charAt(u++)), o = 0; o < s.length; o++) s[o] > r - 1 && (null == s[o + 1] && (s[o + 1] = 0), s[o + 1] += s[o] / r | 0, s[o] %= r)
							}
							return s.reverse()
						}
						return function(n, t, o, i, s) {
							var u, l, c, f, a, h, d, p, g = n.indexOf("."),
								m = R,
								v = P;
							for (g >= 0 && (f = G, G = 0, n = n.replace(".", ""), h = (p = new $(t)).pow(n.length - g), G = f, p.c = e(E(_(h.c), h.e, "0"), 10, o, "0123456789"), p.e = p.c.length), c = f = (d = e(n, t, o, s ? (u = k, "0123456789") : (u = "0123456789", k))).length; 0 == d[--f]; d.pop());
							if (!d[0]) return u.charAt(0);
							if (g < 0 ? --c : (h.c = d, h.e = c, h.s = i, d = (h = r(h, p, m, v, o)).c, a = h.r, c = h.e), g = d[l = c + m + 1], f = o / 2, a = a || l < 0 || null != d[l + 1], a = v < 4 ? (null != g || a) && (0 == v || v == (h.s < 0 ? 3 : 2)) : g > f || g == f && (4 == v || a || 6 == v && 1 & d[l - 1] || v == (h.s < 0 ? 8 : 7)), l < 1 || !d[0]) n = a ? E(u.charAt(1), -m, u.charAt(0)) : u.charAt(0);
							else {
								if (d.length = l, a)
									for (--o; ++d[--l] > o;) d[l] = 0, l || (++c, d = [1].concat(d));
								for (f = d.length; !d[--f];);
								for (g = 0, n = ""; g <= f; n += u.charAt(d[g++]));
								n = E(n, c, u.charAt(0))
							}
							return n
						}
					}(), r = function() {
						function e(e, n, r) {
							var t, o, i, s, u = 0,
								l = e.length,
								c = n % g,
								f = n / g | 0;
							for (e = e.slice(); l--;) u = ((o = c * (i = e[l] % g) + (t = f * i + (s = e[l] / g | 0) * c) % g * g + u) / r | 0) + (t / g | 0) + f * s, e[l] = o % r;
							return u && (e = [u].concat(e)), e
						}

						function n(e, n, r, t) {
							var o, i;
							if (r != t) i = r > t ? 1 : -1;
							else
								for (o = i = 0; o < r; o++)
									if (e[o] != n[o]) {
										i = e[o] > n[o] ? 1 : -1;
										break
									} return i
						}

						function r(e, n, r, t) {
							for (var o = 0; r--;) e[r] -= o, o = e[r] < n[r] ? 1 : 0, e[r] = o * t + e[r] - n[r];
							for (; !e[0] && e.length > 1; e.splice(0, 1));
						}
						return function(t, o, i, s, u) {
							var c, f, d, p, g, m, _, w, O, b, y, N, E, A, j, x, L, D = t.s == o.s ? 1 : -1,
								I = t.c,
								S = o.c;
							if (!(I && I[0] && S && S[0])) return new $(t.s && o.s && (I ? !S || I[0] != S[0] : S) ? I && 0 == I[0] || !S ? 0 * D : D / 0 : NaN);
							for (O = (w = new $(D)).c = [], D = i + (f = t.e - o.e) + 1, u || (u = a, f = v(t.e / h) - v(o.e / h), D = D / h | 0), d = 0; S[d] == (I[d] || 0); d++);
							if (S[d] > (I[d] || 0) && f--, D < 0) O.push(1), p = !0;
							else {
								for (A = I.length, x = S.length, d = 0, D += 2, (g = l(u / (S[0] + 1))) > 1 && (S = e(S, g, u), I = e(I, g, u), x = S.length, A = I.length), E = x, y = (b = I.slice(0, x)).length; y < x; b[y++] = 0);
								L = S.slice(), L = [0].concat(L), j = S[0], S[1] >= u / 2 && j++;
								do {
									if (g = 0, (c = n(S, b, x, y)) < 0) {
										if (N = b[0], x != y && (N = N * u + (b[1] || 0)), (g = l(N / j)) > 1)
											for (g >= u && (g = u - 1), _ = (m = e(S, g, u)).length, y = b.length; 1 == n(m, b, _, y);) g--, r(m, x < _ ? L : S, _, u), _ = m.length, c = 1;
										else 0 == g && (c = g = 1), _ = (m = S.slice()).length;
										if (_ < y && (m = [0].concat(m)), r(b, m, y, u), y = b.length, -1 == c)
											for (; n(S, b, x, y) < 1;) g++, r(b, x < y ? L : S, y, u), y = b.length
									} else 0 === c && (g++, b = [0]);
									O[d++] = g, b[0] ? b[y++] = I[E] || 0 : (b = [I[E]], y = 1)
								} while ((E++ < A || null != b[0]) && D--);
								p = null != b[0], O[0] || O.splice(0, 1)
							}
							if (u == a) {
								for (d = 1, D = O[0]; D >= 10; D /= 10, d++);
								W(w, i + (w.e = d + f * h - 1) + 1, s, p)
							} else w.e = f, w.r = +p;
							return w
						}
					}(), A = /^(-?)0([xbo])(?=\w[\w.]*$)/i, j = /^([^.]+)\.$/, x = /^\.([^.]+)$/, L = /^-?(Infinity|NaN)$/, D = /^\s*\+(?=[\w.])|^\s+|\s+$/g, o = function(e, n, r, t) {
						var o, i = r ? n : n.replace(D, "");
						if (L.test(i)) e.s = isNaN(i) ? null : i < 0 ? -1 : 1, e.c = e.e = null;
						else {
							if (!r && (i = i.replace(A, (function(e, n, r) {
									return o = "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8, t && t != o ? e : n
								})), t && (o = t, i = i.replace(j, "$1").replace(x, "0.$1")), n != i)) return new $(i, o);
							if ($.DEBUG) throw Error(c + "Not a" + (t ? " base " + t : "") + " number: " + n);
							e.c = e.e = e.s = null
						}
					}, I.absoluteValue = I.abs = function() {
						var e = new $(this);
						return e.s < 0 && (e.s = 1), e
					}, I.comparedTo = function(e, n) {
						return w(this, new $(e, n))
					}, I.decimalPlaces = I.dp = function(e, n) {
						var r, t, o, i = this;
						if (null != e) return O(e, 0, m), null == n ? n = P : O(n, 0, 8), W(new $(i), e + i.e + 1, n);
						if (!(r = i.c)) return null;
						if (t = ((o = r.length - 1) - v(this.e / h)) * h, o = r[o])
							for (; o % 10 == 0; o /= 10, t--);
						return t < 0 && (t = 0), t
					}, I.dividedBy = I.div = function(e, n) {
						return r(this, new $(e, n), R, P)
					}, I.dividedToIntegerBy = I.idiv = function(e, n) {
						return r(this, new $(e, n), 0, 1)
					}, I.exponentiatedBy = I.pow = function(e, n) {
						var r, t, o, i, s, f, a, d = this;
						if ((e = new $(e)).c && !e.isInteger()) throw Error(c + "Exponent not an integer: " + e);
						if (null != n && (n = new $(n)), i = e.e > 14, !d.c || !d.c[0] || 1 == d.c[0] && !d.e && 1 == d.c.length || !e.c || !e.c[0]) return a = new $(Math.pow(+d.valueOf(), i ? 2 - y(e) : +e)), n ? a.mod(n) : a;
						if (s = e.s < 0, n) {
							if (n.c ? !n.c[0] : !n.s) return new $(NaN);
							(t = !s && d.isInteger() && n.isInteger()) && (d = d.mod(n))
						} else {
							if (e.e > 9 && (d.e > 0 || d.e < -1 || (0 == d.e ? d.c[0] > 1 || i && d.c[1] >= 24e7 : d.c[0] < 8e13 || i && d.c[0] <= 9999975e7))) return o = d.s < 0 && y(e) ? -0 : 0, d.e > -1 && (o = 1 / o), new $(s ? 1 / o : o);
							G && (o = u(G / h + 2))
						}
						for (i ? (r = new $(.5), f = y(e)) : f = e % 2, s && (e.s = 1), a = new $(S);;) {
							if (f) {
								if (!(a = a.times(d)).c) break;
								o ? a.c.length > o && (a.c.length = o) : t && (a = a.mod(n))
							}
							if (i) {
								if (W(e = e.times(r), e.e + 1, 1), !e.c[0]) break;
								i = e.e > 14, f = y(e)
							} else {
								if (!(e = l(e / 2))) break;
								f = e % 2
							}
							d = d.times(d), o ? d.c && d.c.length > o && (d.c.length = o) : t && (d = d.mod(n))
						}
						return t ? a : (s && (a = S.div(a)), n ? a.mod(n) : o ? W(a, G, P, void 0) : a)
					}, I.integerValue = function(e) {
						var n = new $(this);
						return null == e ? e = P : O(e, 0, 8), W(n, n.e + 1, e)
					}, I.isEqualTo = I.eq = function(e, n) {
						return 0 === w(this, new $(e, n))
					}, I.isFinite = function() {
						return !!this.c
					}, I.isGreaterThan = I.gt = function(e, n) {
						return w(this, new $(e, n)) > 0
					}, I.isGreaterThanOrEqualTo = I.gte = function(e, n) {
						return 1 === (n = w(this, new $(e, n))) || 0 === n
					}, I.isInteger = function() {
						return !!this.c && v(this.e / h) > this.c.length - 2
					}, I.isLessThan = I.lt = function(e, n) {
						return w(this, new $(e, n)) < 0
					}, I.isLessThanOrEqualTo = I.lte = function(e, n) {
						return -1 === (n = w(this, new $(e, n))) || 0 === n
					}, I.isNaN = function() {
						return !this.s
					}, I.isNegative = function() {
						return this.s < 0
					}, I.isPositive = function() {
						return this.s > 0
					}, I.isZero = function() {
						return !!this.c && 0 == this.c[0]
					}, I.minus = function(e, n) {
						var r, t, o, i, s = this,
							u = s.s;
						if (n = (e = new $(e, n)).s, !u || !n) return new $(NaN);
						if (u != n) return e.s = -n, s.plus(e);
						var l = s.e / h,
							c = e.e / h,
							f = s.c,
							d = e.c;
						if (!l || !c) {
							if (!f || !d) return f ? (e.s = -n, e) : new $(d ? s : NaN);
							if (!f[0] || !d[0]) return d[0] ? (e.s = -n, e) : new $(f[0] ? s : 3 == P ? -0 : 0)
						}
						if (l = v(l), c = v(c), f = f.slice(), u = l - c) {
							for ((i = u < 0) ? (u = -u, o = f) : (c = l, o = d), o.reverse(), n = u; n--; o.push(0));
							o.reverse()
						} else
							for (t = (i = (u = f.length) < (n = d.length)) ? u : n, u = n = 0; n < t; n++)
								if (f[n] != d[n]) {
									i = f[n] < d[n];
									break
								} if (i && (o = f, f = d, d = o, e.s = -e.s), (n = (t = d.length) - (r = f.length)) > 0)
							for (; n--; f[r++] = 0);
						for (n = a - 1; t > u;) {
							if (f[--t] < d[t]) {
								for (r = t; r && !f[--r]; f[r] = n);
								--f[r], f[t] += a
							}
							f[t] -= d[t]
						}
						for (; 0 == f[0]; f.splice(0, 1), --c);
						return f[0] ? V(e, f, c) : (e.s = 3 == P ? -1 : 1, e.c = [e.e = 0], e)
					}, I.modulo = I.mod = function(e, n) {
						var t, o, i = this;
						return e = new $(e, n), !i.c || !e.s || e.c && !e.c[0] ? new $(NaN) : !e.c || i.c && !i.c[0] ? new $(i) : (9 == F ? (o = e.s, e.s = 1, t = r(i, e, 0, 3), e.s = o, t.s *= o) : t = r(i, e, 0, F), (e = i.minus(t.times(e))).c[0] || 1 != F || (e.s = i.s), e)
					}, I.multipliedBy = I.times = function(e, n) {
						var r, t, o, i, s, u, l, c, f, d, p, m, _, w, O, b = this,
							y = b.c,
							N = (e = new $(e, n)).c;
						if (!(y && N && y[0] && N[0])) return !b.s || !e.s || y && !y[0] && !N || N && !N[0] && !y ? e.c = e.e = e.s = null : (e.s *= b.s, y && N ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
						for (t = v(b.e / h) + v(e.e / h), e.s *= b.s, (l = y.length) < (d = N.length) && (_ = y, y = N, N = _, o = l, l = d, d = o), o = l + d, _ = []; o--; _.push(0));
						for (w = a, O = g, o = d; --o >= 0;) {
							for (r = 0, p = N[o] % O, m = N[o] / O | 0, i = o + (s = l); i > o;) r = ((c = p * (c = y[--s] % O) + (u = m * c + (f = y[s] / O | 0) * p) % O * O + _[i] + r) / w | 0) + (u / O | 0) + m * f, _[i--] = c % w;
							_[i] = r
						}
						return r ? ++t : _.splice(0, 1), V(e, _, t)
					}, I.negated = function() {
						var e = new $(this);
						return e.s = -e.s || null, e
					}, I.plus = function(e, n) {
						var r, t = this,
							o = t.s;
						if (n = (e = new $(e, n)).s, !o || !n) return new $(NaN);
						if (o != n) return e.s = -n, t.minus(e);
						var i = t.e / h,
							s = e.e / h,
							u = t.c,
							l = e.c;
						if (!i || !s) {
							if (!u || !l) return new $(o / 0);
							if (!u[0] || !l[0]) return l[0] ? e : new $(u[0] ? t : 0 * o)
						}
						if (i = v(i), s = v(s), u = u.slice(), o = i - s) {
							for (o > 0 ? (s = i, r = l) : (o = -o, r = u), r.reverse(); o--; r.push(0));
							r.reverse()
						}
						for ((o = u.length) - (n = l.length) < 0 && (r = l, l = u, u = r, n = o), o = 0; n;) o = (u[--n] = u[n] + l[n] + o) / a | 0, u[n] = a === u[n] ? 0 : u[n] % a;
						return o && (u = [o].concat(u), ++s), V(e, u, s)
					}, I.precision = I.sd = function(e, n) {
						var r, t, o, i = this;
						if (null != e && e !== !!e) return O(e, 1, m), null == n ? n = P : O(n, 0, 8), W(new $(i), e, n);
						if (!(r = i.c)) return null;
						if (t = (o = r.length - 1) * h + 1, o = r[o]) {
							for (; o % 10 == 0; o /= 10, t--);
							for (o = r[0]; o >= 10; o /= 10, t++);
						}
						return e && i.e + 1 > t && (t = i.e + 1), t
					}, I.shiftedBy = function(e) {
						return O(e, -d, d), this.times("1e" + e)
					}, I.squareRoot = I.sqrt = function() {
						var e, n, t, o, i, s = this,
							u = s.c,
							l = s.s,
							c = s.e,
							f = R + 4,
							a = new $("0.5");
						if (1 !== l || !u || !u[0]) return new $(!l || l < 0 && (!u || u[0]) ? NaN : u ? s : 1 / 0);
						if (0 == (l = Math.sqrt(+s)) || l == 1 / 0 ? (((n = _(u)).length + c) % 2 == 0 && (n += "0"), l = Math.sqrt(n), c = v((c + 1) / 2) - (c < 0 || c % 2), t = new $(n = l == 1 / 0 ? "1e" + c : (n = l.toExponential()).slice(0, n.indexOf("e") + 1) + c)) : t = new $(l + ""), t.c[0])
							for ((l = (c = t.e) + f) < 3 && (l = 0);;)
								if (i = t, t = a.times(i.plus(r(s, i, f, 1))), _(i.c).slice(0, l) === (n = _(t.c)).slice(0, l)) {
									if (t.e < c && --l, "9999" != (n = n.slice(l - 3, l + 1)) && (o || "4999" != n)) {
										+n && (+n.slice(1) || "5" != n.charAt(0)) || (W(t, t.e + R + 2, 1), e = !t.times(t).eq(s));
										break
									}
									if (!o && (W(i, i.e + R + 2, 0), i.times(i).eq(s))) {
										t = i;
										break
									}
									f += 4, l += 4, o = 1
								} return W(t, t.e + R + 1, P, e)
					}, I.toExponential = function(e, n) {
						return null != e && (O(e, 0, m), e++), H(this, e, n, 1)
					}, I.toFixed = function(e, n) {
						return null != e && (O(e, 0, m), e = e + this.e + 1), H(this, e, n)
					}, I.toFormat = function(e, n) {
						var r = this.toFixed(e, n);
						if (this.c) {
							var t, o = r.split("."),
								i = +q.groupSize,
								s = +q.secondaryGroupSize,
								u = q.groupSeparator,
								l = o[0],
								c = o[1],
								f = this.s < 0,
								a = f ? l.slice(1) : l,
								h = a.length;
							if (s && (t = i, i = s, s = t, h -= t), i > 0 && h > 0) {
								for (t = h % i || i, l = a.substr(0, t); t < h; t += i) l += u + a.substr(t, i);
								s > 0 && (l += u + a.slice(t)), f && (l = "-" + l)
							}
							r = c ? l + q.decimalSeparator + ((s = +q.fractionGroupSize) ? c.replace(new RegExp("\\d{" + s + "}\\B", "g"), "$&" + q.fractionGroupSeparator) : c) : l
						}
						return r
					}, I.toFraction = function(e) {
						var n, t, o, i, s, u, l, f, a, d, g, m, v = this,
							w = v.c;
						if (null != e && (!(f = new $(e)).isInteger() && (f.c || 1 !== f.s) || f.lt(S))) throw Error(c + "Argument " + (f.isInteger() ? "out of range: " : "not an integer: ") + e);
						if (!w) return v.toString();
						for (t = new $(S), d = o = new $(S), i = a = new $(S), m = _(w), u = t.e = m.length - v.e - 1, t.c[0] = p[(l = u % h) < 0 ? h + l : l], e = !e || f.comparedTo(t) > 0 ? u > 0 ? t : d : f, l = T, T = 1 / 0, f = new $(m), a.c[0] = 0; g = r(f, t, 0, 1), 1 != (s = o.plus(g.times(i))).comparedTo(e);) o = i, i = s, d = a.plus(g.times(s = d)), a = s, t = f.minus(g.times(s = t)), f = s;
						return s = r(e.minus(o), i, 0, 1), a = a.plus(s.times(d)), o = o.plus(s.times(i)), a.s = d.s = v.s, n = r(d, i, u *= 2, P).minus(v).abs().comparedTo(r(a, o, u, P).minus(v).abs()) < 1 ? [d.toString(), i.toString()] : [a.toString(), o.toString()], T = l, n
					}, I.toNumber = function() {
						return +this
					}, I.toPrecision = function(e, n) {
						return null != e && O(e, 1, m), H(this, e, n, 2)
					}, I.toString = function(e) {
						var n, r = this,
							o = r.s,
							i = r.e;
						return null === i ? o ? (n = "Infinity", o < 0 && (n = "-" + n)) : n = "NaN" : (n = _(r.c), null == e ? n = i <= U || i >= C ? N(n, i) : E(n, i, "0") : (O(e, 2, k.length, "Base"), n = t(E(n, i, "0"), 10, e, o, !0)), o < 0 && r.c[0] && (n = "-" + n)), n
					}, I.valueOf = I.toJSON = function() {
						var e, n = this,
							r = n.e;
						return null === r ? n.toString() : (e = _(n.c), e = r <= U || r >= C ? N(e, r) : E(e, r, "0"), n.s < 0 ? "-" + e : e)
					}, I._isBigNumber = !0, null != n && $.set(n), $
				}()).default = i.BigNumber = i, void 0 === (t = function() {
					return i
				}.call(n, r, n, e)) || (e.exports = t)
			}()
		},
		"./node_modules/lodash/_arrayEvery.js": function(e, n) {
			e.exports = function(e, n) {
				for (var r = -1, t = null == e ? 0 : e.length; ++r < t;)
					if (!n(e[r], r, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_baseEvery.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, n) {
				var r = !0;
				return t(e, (function(e, t, o) {
					return r = !!n(e, t, o)
				})), r
			}
		},
		"./node_modules/lodash/_baseInverter.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_baseForOwn.js");
			e.exports = function(e, n, r, o) {
				return t(e, (function(e, t, i) {
					n(o, r(e), t, i)
				})), o
			}
		},
		"./node_modules/lodash/_baseXor.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_baseDifference.js"),
				o = r("./node_modules/lodash/_baseFlatten.js"),
				i = r("./node_modules/lodash/_baseUniq.js");
			e.exports = function(e, n, r) {
				var s = e.length;
				if (s < 2) return s ? i(e[0]) : [];
				for (var u = -1, l = Array(s); ++u < s;)
					for (var c = e[u], f = -1; ++f < s;) f != u && (l[u] = t(l[u] || c, e[f], n, r));
				return i(o(l, 1), n, r)
			}
		},
		"./node_modules/lodash/_createInverter.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_baseInverter.js");
			e.exports = function(e, n) {
				return function(r, o) {
					return t(r, e, n(o), {})
				}
			}
		},
		"./node_modules/lodash/every.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_arrayEvery.js"),
				o = r("./node_modules/lodash/_baseEvery.js"),
				i = r("./node_modules/lodash/_baseIteratee.js"),
				s = r("./node_modules/lodash/isArray.js"),
				u = r("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, n, r) {
				var l = s(e) ? t : o;
				return r && u(e, n, r) && (n = void 0), l(e, i(n, 3))
			}
		},
		"./node_modules/lodash/findLastIndex.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_baseFindIndex.js"),
				o = r("./node_modules/lodash/_baseIteratee.js"),
				i = r("./node_modules/lodash/toInteger.js"),
				s = Math.max,
				u = Math.min;
			e.exports = function(e, n, r) {
				var l = null == e ? 0 : e.length;
				if (!l) return -1;
				var c = l - 1;
				return void 0 !== r && (c = i(r), c = r < 0 ? s(l + c, 0) : u(c, l - 1)), t(e, o(n, 3), c, !0)
			}
		},
		"./node_modules/lodash/forOwn.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_baseForOwn.js"),
				o = r("./node_modules/lodash/_castFunction.js");
			e.exports = function(e, n) {
				return e && t(e, o(n))
			}
		},
		"./node_modules/lodash/invert.js": function(e, n, r) {
			var t = r("./node_modules/lodash/constant.js"),
				o = r("./node_modules/lodash/_createInverter.js"),
				i = r("./node_modules/lodash/identity.js"),
				s = Object.prototype.toString,
				u = o((function(e, n, r) {
					null != n && "function" != typeof n.toString && (n = s.call(n)), e[n] = r
				}), t(i));
			e.exports = u
		},
		"./node_modules/lodash/uniqWith.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_baseUniq.js");
			e.exports = function(e, n) {
				return n = "function" == typeof n ? n : void 0, e && e.length ? t(e, void 0, n) : []
			}
		},
		"./node_modules/lodash/xor.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_arrayFilter.js"),
				o = r("./node_modules/lodash/_baseRest.js"),
				i = r("./node_modules/lodash/_baseXor.js"),
				s = r("./node_modules/lodash/isArrayLikeObject.js"),
				u = o((function(e) {
					return i(t(e, s))
				}));
			e.exports = u
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~Governance~Reddit~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~c822ce19.11ea53197bd413399b54.js.map