// https://www.redditstatic.com/desktop2x/vendors~Governance~Reddit.64190a957ce50e28e8dc.js
// Retrieved at 2/6/2020, 12:30:14 PM by Reddit Dataminer v1.0.0
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
					s = ".postMessage",
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
				var l = [r],
					d = u(l),
					c = [s],
					f = a(c),
					h = {},
					m = !1;

				function p(n, o, r) {
					e.addEventListener ? e.addEventListener(n, o, r) : e.attachEvent && e.attachEvent("on" + n, o)
				}

				function v(n, o) {
					e.removeEventListener ? e.removeEventListener(n, o) : e.detachEvent && e.detachEvent("on" + n, o)
				}

				function _(e) {
					return /\*/.test(e)
				}
				var g = n.postMessage = function(e, n, o) {
						var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
						i.test(n) || (n += s);
						var a = r;
						Object.keys(t).forEach((function(e) {
							a[e] = t[e]
						})), e.postMessage(JSON.stringify({
							type: n,
							data: o,
							defaultedOptions: a
						}), a.targetOrigin)
					},
					j = n.receiveMessage = function(e, n, o, r) {
						"string" == typeof e && (r = o, o = n, n = e, e = null), r = r || void 0;
						var s = function(n) {
							for (var s = arguments.length, t = Array(s > 1 ? s - 1 : 0), i = 1; i < s; i++) t[i - 1] = arguments[i];
							e && e !== n.source && e.contentWindow !== n.source || o.apply(r, [n].concat(t))
						};
						return p(n, s), {
							off: function() {
								v(n, s)
							}
						}
					},
					b = (n.receiveMessageOnce = function(e, n, r, s) {
						var t = j(e, n, (function() {
							r && r.apply(void 0, o), t.off()
						}), s);
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
					_(e) ? l = [r] : -1 === l.indexOf(e) && (b(r), l.push(e), d = u(l))
				};

				function O(n) {
					if (n.origin === e.location.origin || d.test(n.origin) || "null" === n.origin) {
						var o = {};
						try {
							o = JSON.parse(n.data)
						} catch (n) {}
						var r = o.type;
						if (f.test(r)) {
							var s = r.split(".", 2)[1];
							if (h[s]) h[s].targets.forEach((function(e) {
								return g(e, r, o.data, o.options)
							}));
							var t = new w(r, {
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
			var r;
			! function(s) {
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
					for (var n, o, r = 1, s = e.length, t = e[0] + ""; r < s;) {
						for (n = e[r++] + "", o = f - n.length; o--; n = "0" + n);
						t += n
					}
					for (s = t.length; 48 === t.charCodeAt(--s););
					return t.slice(0, s + 1 || 1)
				}

				function j(e, n) {
					var o, r, s = e.c,
						t = n.c,
						i = e.s,
						a = n.s,
						u = e.e,
						l = n.e;
					if (!i || !a) return null;
					if (o = s && !s[0], r = t && !t[0], o || r) return o ? r ? 0 : -a : i;
					if (i != a) return i;
					if (o = i < 0, r = u == l, !s || !t) return r ? 0 : !s ^ o ? 1 : -1;
					if (!r) return u > l ^ o ? 1 : -1;
					for (a = (u = s.length) < (l = t.length) ? u : l, i = 0; i < a; i++)
						if (s[i] != t[i]) return s[i] > t[i] ^ o ? 1 : -1;
					return u == l ? 0 : u > l ^ o ? 1 : -1
				}

				function b(e, n, o, r) {
					if (e < n || e > o || e !== (e < 0 ? a(e) : u(e))) throw Error(l + (r || "Argument") + ("number" == typeof e ? e < n || e > o ? " out of range: " : " not an integer: " : " not a primitive number: ") + e)
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
					var r, s;
					if (n < 0) {
						for (s = o + "."; ++n; s += o);
						e = s + e
					} else if (++n > (r = e.length)) {
						for (s = o, n -= r; --n; s += o);
						e += s
					} else n < r && (e = e.slice(0, n) + "." + e.slice(n));
					return e
				}(t = function e(n) {
					var o, r, s, t, A, E, k, S, N, P = G.prototype = {
							constructor: G,
							toString: null,
							valueOf: null
						},
						I = new G(1),
						T = 20,
						C = 4,
						M = -7,
						L = 21,
						R = -1e7,
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
								if (!i.test(v = e + "")) return s(_, v, m);
								_.s = 45 == v.charCodeAt(0) ? (v = v.slice(1), -1) : 1
							}(l = v.indexOf(".")) > -1 && (v = v.replace(".", "")), (c = v.search(/e/i)) > 0 ? (l < 0 && (l = c), l += +v.slice(c + 1), v = v.substring(0, c)) : l < 0 && (l = v.length)
						} else {
							if (b(n, 2, q.length, "Base"), v = e + "", 10 == n) return X(_ = new G(e instanceof G ? e : v), T + _.e + 1, C);
							if (m = "number" == typeof e) {
								if (0 * e != 0) return s(_, v, m, n);
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
									return s(_, e + "", m, n)
								}(l = (v = r(v, n, 10, _.s)).indexOf(".")) > - 1 ? v = v.replace(".", "") : l = v.length
						}
						for (c = 0; 48 === v.charCodeAt(c); c++);
						for (p = v.length; 48 === v.charCodeAt(--p););
						if (v = v.slice(c, ++p)) {
							if (p -= c, m && G.DEBUG && p > 15 && (e > h || e !== u(e))) throw Error(d + _.s * e);
							if ((l = l - c - 1) > B) _.c = _.e = null;
							else if (l < R) _.c = [_.e = 0];
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

					function W(e, n, o, r) {
						var s, t, i, a, u;
						if (null == o ? o = C : b(o, 0, 8), !e.c) return e.toString();
						if (s = e.c[0], i = e.e, null == n) u = g(e.c), u = 1 == r || 2 == r && i <= M ? O(u, i) : x(u, i, "0");
						else if (t = (e = X(new G(e), n, o)).e, a = (u = g(e.c)).length, 1 == r || 2 == r && (n <= t || t <= M)) {
							for (; a < n; u += "0", a++);
							u = O(u, t)
						} else if (n -= i, u = x(u, t, "0"), t + 1 > a) {
							if (--n > 0)
								for (u += "."; n--; u += "0");
						} else if ((n += t - a) > 0)
							for (t + 1 == a && (u += "."); n--; u += "0");
						return e.s < 0 && s ? "-" + u : u
					}

					function V(e, n) {
						var o, r, s = 0;
						for (w(e[0]) && (e = e[0]), o = new G(e[0]); ++s < e.length;) {
							if (!(r = new G(e[s])).s) {
								o = r;
								break
							}
							n.call(o, r) && (o = r)
						}
						return o
					}

					function $(e, n, o) {
						for (var r = 1, s = n.length; !n[--s]; n.pop());
						for (s = n[0]; s >= 10; s /= 10, r++);
						return (o = r + o * f - 1) > B ? e.c = e.e = null : o < R ? e.c = [e.e = 0] : (e.e = o, e.c = n), e
					}

					function X(e, n, o, r) {
						var s, t, i, l, d, h, p, v = e.c,
							_ = m;
						if (v) {
							e: {
								for (s = 1, l = v[0]; l >= 10; l /= 10, s++);
								if ((t = n - s) < 0) t += f,
								i = n,
								p = (d = v[h = 0]) / _[s - i - 1] % 10 | 0;
								else if ((h = a((t + 1) / f)) >= v.length) {
									if (!r) break e;
									for (; v.length <= h; v.push(0));
									d = p = 0, s = 1, i = (t %= f) - f + 1
								} else {
									for (d = l = v[h], s = 1; l >= 10; l /= 10, s++);
									p = (i = (t %= f) - f + s) < 0 ? 0 : d / _[s - i - 1] % 10 | 0
								}
								if (r = r || n < 0 || null != v[h + 1] || (i < 0 ? d : d % _[s - i - 1]), r = o < 4 ? (p || r) && (0 == o || o == (e.s < 0 ? 3 : 2)) : p > 5 || 5 == p && (4 == o || r || 6 == o && (t > 0 ? i > 0 ? d / _[s - i] : 0 : v[h - 1]) % 10 & 1 || o == (e.s < 0 ? 8 : 7)), n < 1 || !v[0]) return v.length = 0,
								r ? (n -= e.e + 1, v[0] = _[(f - n % f) % f], e.e = -n || 0) : v[0] = e.e = 0,
								e;
								if (0 == t ? (v.length = h, l = 1, h--) : (v.length = h + 1, l = _[f - t], v[h] = i > 0 ? u(d / _[s - i] % _[i]) * l : 0), r)
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
							e.e > B ? e.c = e.e = null : e.e < R && (e.c = [e.e = 0])
						}
						return e
					}
					return G.clone = e, G.ROUND_UP = 0, G.ROUND_DOWN = 1, G.ROUND_CEIL = 2, G.ROUND_FLOOR = 3, G.ROUND_HALF_UP = 4, G.ROUND_HALF_DOWN = 5, G.ROUND_HALF_EVEN = 6, G.ROUND_HALF_CEIL = 7, G.ROUND_HALF_FLOOR = 8, G.EUCLID = 9, G.config = G.set = function(e) {
						var n, o;
						if (null != e) {
							if ("object" != typeof e) throw Error(l + "Object expected: " + e);
							if (e.hasOwnProperty(n = "DECIMAL_PLACES") && (b(o = e[n], 0, v, n), T = o), e.hasOwnProperty(n = "ROUNDING_MODE") && (b(o = e[n], 0, 8, n), C = o), e.hasOwnProperty(n = "EXPONENTIAL_AT") && (w(o = e[n]) ? (b(o[0], -v, 0, n), b(o[1], 0, v, n), M = o[0], L = o[1]) : (b(o, -v, v, n), M = -(L = o < 0 ? -o : o))), e.hasOwnProperty(n = "RANGE"))
								if (w(o = e[n])) b(o[0], -v, -1, n), b(o[1], 1, v, n), R = o[0], B = o[1];
								else {
									if (b(o, -v, v, n), !o) throw Error(l + n + " cannot be zero: " + o);
									R = -(B = o < 0 ? -o : o)
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
							DECIMAL_PLACES: T,
							ROUNDING_MODE: C,
							EXPONENTIAL_AT: [M, L],
							RANGE: [R, B],
							CRYPTO: F,
							MODULO_MODE: D,
							POW_PRECISION: U,
							FORMAT: z,
							ALPHABET: q
						}
					}, G.isBigNumber = function(e) {
						return e instanceof G || e && !0 === e._isBigNumber || !1
					}, G.maximum = G.max = function() {
						return V(arguments, P.lt)
					}, G.minimum = G.min = function() {
						return V(arguments, P.gt)
					}, G.random = (t = 9007199254740992 * Math.random() & 2097151 ? function() {
						return u(9007199254740992 * Math.random())
					} : function() {
						return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
					}, function(e) {
						var n, o, r, s, i, d = 0,
							c = [],
							h = new G(I);
						if (null == e ? e = T : b(e, 0, v), s = a(e / f), F)
							if (crypto.getRandomValues) {
								for (n = crypto.getRandomValues(new Uint32Array(s *= 2)); d < s;)(i = 131072 * n[d] + (n[d + 1] >>> 11)) >= 9e15 ? (o = crypto.getRandomValues(new Uint32Array(2)), n[d] = o[0], n[d + 1] = o[1]) : (c.push(i % 1e14), d += 2);
								d = s / 2
							} else {
								if (!crypto.randomBytes) throw F = !1, Error(l + "crypto unavailable");
								for (n = crypto.randomBytes(s *= 7); d < s;)(i = 281474976710656 * (31 & n[d]) + 1099511627776 * n[d + 1] + 4294967296 * n[d + 2] + 16777216 * n[d + 3] + (n[d + 4] << 16) + (n[d + 5] << 8) + n[d + 6]) >= 9e15 ? crypto.randomBytes(7).copy(n, d) : (c.push(i % 1e14), d += 7);
								d = s / 7
							} if (!F)
							for (; d < s;)(i = t()) < 9e15 && (c[d++] = i % 1e14);
						for (s = c[--d], e %= f, s && e && (i = m[f - e], c[d] = u(s / i) * i); 0 === c[d]; c.pop(), d--);
						if (d < 0) c = [r = 0];
						else {
							for (r = -1; 0 === c[0]; c.splice(0, 1), r -= f);
							for (d = 1, i = c[0]; i >= 10; i /= 10, d++);
							d < f && (r -= f - d)
						}
						return h.e = r, h.c = c, h
					}), r = function() {
						function e(e, n, o, r) {
							for (var s, t, i = [0], a = 0, u = e.length; a < u;) {
								for (t = i.length; t--; i[t] *= n);
								for (i[0] += r.indexOf(e.charAt(a++)), s = 0; s < i.length; s++) i[s] > o - 1 && (null == i[s + 1] && (i[s + 1] = 0), i[s + 1] += i[s] / o | 0, i[s] %= o)
							}
							return i.reverse()
						}
						return function(n, r, s, t, i) {
							var a, u, l, d, c, f, h, m, p = n.indexOf("."),
								v = T,
								_ = C;
							for (p >= 0 && (d = U, U = 0, n = n.replace(".", ""), f = (m = new G(r)).pow(n.length - p), U = d, m.c = e(x(g(f.c), f.e, "0"), 10, s, "0123456789"), m.e = m.c.length), l = d = (h = e(n, r, s, i ? (a = q, "0123456789") : (a = "0123456789", q))).length; 0 == h[--d]; h.pop());
							if (!h[0]) return a.charAt(0);
							if (p < 0 ? --l : (f.c = h, f.e = l, f.s = t, h = (f = o(f, m, v, _, s)).c, c = f.r, l = f.e), p = h[u = l + v + 1], d = s / 2, c = c || u < 0 || null != h[u + 1], c = _ < 4 ? (null != p || c) && (0 == _ || _ == (f.s < 0 ? 3 : 2)) : p > d || p == d && (4 == _ || c || 6 == _ && 1 & h[u - 1] || _ == (f.s < 0 ? 8 : 7)), u < 1 || !h[0]) n = c ? x(a.charAt(1), -v, a.charAt(0)) : a.charAt(0);
							else {
								if (h.length = u, c)
									for (--s; ++h[--u] > s;) h[u] = 0, u || (++l, h = [1].concat(h));
								for (d = h.length; !h[--d];);
								for (p = 0, n = ""; p <= d; n += a.charAt(h[p++]));
								n = x(n, l, a.charAt(0))
							}
							return n
						}
					}(), o = function() {
						function e(e, n, o) {
							var r, s, t, i, a = 0,
								u = e.length,
								l = n % p,
								d = n / p | 0;
							for (e = e.slice(); u--;) a = ((s = l * (t = e[u] % p) + (r = d * t + (i = e[u] / p | 0) * l) % p * p + a) / o | 0) + (r / p | 0) + d * i, e[u] = s % o;
							return a && (e = [a].concat(e)), e
						}

						function n(e, n, o, r) {
							var s, t;
							if (o != r) t = o > r ? 1 : -1;
							else
								for (s = t = 0; s < o; s++)
									if (e[s] != n[s]) {
										t = e[s] > n[s] ? 1 : -1;
										break
									} return t
						}

						function o(e, n, o, r) {
							for (var s = 0; o--;) e[o] -= s, s = e[o] < n[o] ? 1 : 0, e[o] = s * r + e[o] - n[o];
							for (; !e[0] && e.length > 1; e.splice(0, 1));
						}
						return function(r, s, t, i, a) {
							var l, d, h, m, p, v, g, j, b, w, y, O, x, A, E, k, S, N = r.s == s.s ? 1 : -1,
								P = r.c,
								I = s.c;
							if (!(P && P[0] && I && I[0])) return new G(r.s && s.s && (P ? !I || P[0] != I[0] : I) ? P && 0 == P[0] || !I ? 0 * N : N / 0 : NaN);
							for (b = (j = new G(N)).c = [], N = t + (d = r.e - s.e) + 1, a || (a = c, d = _(r.e / f) - _(s.e / f), N = N / f | 0), h = 0; I[h] == (P[h] || 0); h++);
							if (I[h] > (P[h] || 0) && d--, N < 0) b.push(1), m = !0;
							else {
								for (A = P.length, k = I.length, h = 0, N += 2, (p = u(a / (I[0] + 1))) > 1 && (I = e(I, p, a), P = e(P, p, a), k = I.length, A = P.length), x = k, y = (w = P.slice(0, k)).length; y < k; w[y++] = 0);
								S = I.slice(), S = [0].concat(S), E = I[0], I[1] >= a / 2 && E++;
								do {
									if (p = 0, (l = n(I, w, k, y)) < 0) {
										if (O = w[0], k != y && (O = O * a + (w[1] || 0)), (p = u(O / E)) > 1)
											for (p >= a && (p = a - 1), g = (v = e(I, p, a)).length, y = w.length; 1 == n(v, w, g, y);) p--, o(v, k < g ? S : I, g, a), g = v.length, l = 1;
										else 0 == p && (l = p = 1), g = (v = I.slice()).length;
										if (g < y && (v = [0].concat(v)), o(w, v, y, a), y = w.length, -1 == l)
											for (; n(I, w, k, y) < 1;) p++, o(w, k < y ? S : I, y, a), y = w.length
									} else 0 === l && (p++, w = [0]);
									b[h++] = p, w[0] ? w[y++] = P[x] || 0 : (w = [P[x]], y = 1)
								} while ((x++ < A || null != w[0]) && N--);
								m = null != w[0], b[0] || b.splice(0, 1)
							}
							if (a == c) {
								for (h = 1, N = b[0]; N >= 10; N /= 10, h++);
								X(j, t + (j.e = h + d * f - 1) + 1, i, m)
							} else j.e = d, j.r = +m;
							return j
						}
					}(), A = /^(-?)0([xbo])(?=\w[\w.]*$)/i, E = /^([^.]+)\.$/, k = /^\.([^.]+)$/, S = /^-?(Infinity|NaN)$/, N = /^\s*\+(?=[\w.])|^\s+|\s+$/g, s = function(e, n, o, r) {
						var s, t = o ? n : n.replace(N, "");
						if (S.test(t)) e.s = isNaN(t) ? null : t < 0 ? -1 : 1, e.c = e.e = null;
						else {
							if (!o && (t = t.replace(A, (function(e, n, o) {
									return s = "x" == (o = o.toLowerCase()) ? 16 : "b" == o ? 2 : 8, r && r != s ? e : n
								})), r && (s = r, t = t.replace(E, "$1").replace(k, "0.$1")), n != t)) return new G(t, s);
							if (G.DEBUG) throw Error(l + "Not a" + (r ? " base " + r : "") + " number: " + n);
							e.c = e.e = e.s = null
						}
					}, P.absoluteValue = P.abs = function() {
						var e = new G(this);
						return e.s < 0 && (e.s = 1), e
					}, P.comparedTo = function(e, n) {
						return j(this, new G(e, n))
					}, P.decimalPlaces = P.dp = function(e, n) {
						var o, r, s, t = this;
						if (null != e) return b(e, 0, v), null == n ? n = C : b(n, 0, 8), X(new G(t), e + t.e + 1, n);
						if (!(o = t.c)) return null;
						if (r = ((s = o.length - 1) - _(this.e / f)) * f, s = o[s])
							for (; s % 10 == 0; s /= 10, r--);
						return r < 0 && (r = 0), r
					}, P.dividedBy = P.div = function(e, n) {
						return o(this, new G(e, n), T, C)
					}, P.dividedToIntegerBy = P.idiv = function(e, n) {
						return o(this, new G(e, n), 0, 1)
					}, P.exponentiatedBy = P.pow = function(e, n) {
						var o, r, s, t, i, d, c, h = this;
						if ((e = new G(e)).c && !e.isInteger()) throw Error(l + "Exponent not an integer: " + e);
						if (null != n && (n = new G(n)), t = e.e > 14, !h.c || !h.c[0] || 1 == h.c[0] && !h.e && 1 == h.c.length || !e.c || !e.c[0]) return c = new G(Math.pow(+h.valueOf(), t ? 2 - y(e) : +e)), n ? c.mod(n) : c;
						if (i = e.s < 0, n) {
							if (n.c ? !n.c[0] : !n.s) return new G(NaN);
							(r = !i && h.isInteger() && n.isInteger()) && (h = h.mod(n))
						} else {
							if (e.e > 9 && (h.e > 0 || h.e < -1 || (0 == h.e ? h.c[0] > 1 || t && h.c[1] >= 24e7 : h.c[0] < 8e13 || t && h.c[0] <= 9999975e7))) return s = h.s < 0 && y(e) ? -0 : 0, h.e > -1 && (s = 1 / s), new G(i ? 1 / s : s);
							U && (s = a(U / f + 2))
						}
						for (t ? (o = new G(.5), d = y(e)) : d = e % 2, i && (e.s = 1), c = new G(I);;) {
							if (d) {
								if (!(c = c.times(h)).c) break;
								s ? c.c.length > s && (c.c.length = s) : r && (c = c.mod(n))
							}
							if (t) {
								if (X(e = e.times(o), e.e + 1, 1), !e.c[0]) break;
								t = e.e > 14, d = y(e)
							} else {
								if (!(e = u(e / 2))) break;
								d = e % 2
							}
							h = h.times(h), s ? h.c && h.c.length > s && (h.c.length = s) : r && (h = h.mod(n))
						}
						return r ? c : (i && (c = I.div(c)), n ? c.mod(n) : s ? X(c, U, C, void 0) : c)
					}, P.integerValue = function(e) {
						var n = new G(this);
						return null == e ? e = C : b(e, 0, 8), X(n, n.e + 1, e)
					}, P.isEqualTo = P.eq = function(e, n) {
						return 0 === j(this, new G(e, n))
					}, P.isFinite = function() {
						return !!this.c
					}, P.isGreaterThan = P.gt = function(e, n) {
						return j(this, new G(e, n)) > 0
					}, P.isGreaterThanOrEqualTo = P.gte = function(e, n) {
						return 1 === (n = j(this, new G(e, n))) || 0 === n
					}, P.isInteger = function() {
						return !!this.c && _(this.e / f) > this.c.length - 2
					}, P.isLessThan = P.lt = function(e, n) {
						return j(this, new G(e, n)) < 0
					}, P.isLessThanOrEqualTo = P.lte = function(e, n) {
						return -1 === (n = j(this, new G(e, n))) || 0 === n
					}, P.isNaN = function() {
						return !this.s
					}, P.isNegative = function() {
						return this.s < 0
					}, P.isPositive = function() {
						return this.s > 0
					}, P.isZero = function() {
						return !!this.c && 0 == this.c[0]
					}, P.minus = function(e, n) {
						var o, r, s, t, i = this,
							a = i.s;
						if (n = (e = new G(e, n)).s, !a || !n) return new G(NaN);
						if (a != n) return e.s = -n, i.plus(e);
						var u = i.e / f,
							l = e.e / f,
							d = i.c,
							h = e.c;
						if (!u || !l) {
							if (!d || !h) return d ? (e.s = -n, e) : new G(h ? i : NaN);
							if (!d[0] || !h[0]) return h[0] ? (e.s = -n, e) : new G(d[0] ? i : 3 == C ? -0 : 0)
						}
						if (u = _(u), l = _(l), d = d.slice(), a = u - l) {
							for ((t = a < 0) ? (a = -a, s = d) : (l = u, s = h), s.reverse(), n = a; n--; s.push(0));
							s.reverse()
						} else
							for (r = (t = (a = d.length) < (n = h.length)) ? a : n, a = n = 0; n < r; n++)
								if (d[n] != h[n]) {
									t = d[n] < h[n];
									break
								} if (t && (s = d, d = h, h = s, e.s = -e.s), (n = (r = h.length) - (o = d.length)) > 0)
							for (; n--; d[o++] = 0);
						for (n = c - 1; r > a;) {
							if (d[--r] < h[r]) {
								for (o = r; o && !d[--o]; d[o] = n);
								--d[o], d[r] += c
							}
							d[r] -= h[r]
						}
						for (; 0 == d[0]; d.splice(0, 1), --l);
						return d[0] ? $(e, d, l) : (e.s = 3 == C ? -1 : 1, e.c = [e.e = 0], e)
					}, P.modulo = P.mod = function(e, n) {
						var r, s, t = this;
						return e = new G(e, n), !t.c || !e.s || e.c && !e.c[0] ? new G(NaN) : !e.c || t.c && !t.c[0] ? new G(t) : (9 == D ? (s = e.s, e.s = 1, r = o(t, e, 0, 3), e.s = s, r.s *= s) : r = o(t, e, 0, D), (e = t.minus(r.times(e))).c[0] || 1 != D || (e.s = t.s), e)
					}, P.multipliedBy = P.times = function(e, n) {
						var o, r, s, t, i, a, u, l, d, h, m, v, g, j, b, w = this,
							y = w.c,
							O = (e = new G(e, n)).c;
						if (!(y && O && y[0] && O[0])) return !w.s || !e.s || y && !y[0] && !O || O && !O[0] && !y ? e.c = e.e = e.s = null : (e.s *= w.s, y && O ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
						for (r = _(w.e / f) + _(e.e / f), e.s *= w.s, (u = y.length) < (h = O.length) && (g = y, y = O, O = g, s = u, u = h, h = s), s = u + h, g = []; s--; g.push(0));
						for (j = c, b = p, s = h; --s >= 0;) {
							for (o = 0, m = O[s] % b, v = O[s] / b | 0, t = s + (i = u); t > s;) o = ((l = m * (l = y[--i] % b) + (a = v * l + (d = y[i] / b | 0) * m) % b * b + g[t] + o) / j | 0) + (a / b | 0) + v * d, g[t--] = l % j;
							g[t] = o
						}
						return o ? ++r : g.splice(0, 1), $(e, g, r)
					}, P.negated = function() {
						var e = new G(this);
						return e.s = -e.s || null, e
					}, P.plus = function(e, n) {
						var o, r = this,
							s = r.s;
						if (n = (e = new G(e, n)).s, !s || !n) return new G(NaN);
						if (s != n) return e.s = -n, r.minus(e);
						var t = r.e / f,
							i = e.e / f,
							a = r.c,
							u = e.c;
						if (!t || !i) {
							if (!a || !u) return new G(s / 0);
							if (!a[0] || !u[0]) return u[0] ? e : new G(a[0] ? r : 0 * s)
						}
						if (t = _(t), i = _(i), a = a.slice(), s = t - i) {
							for (s > 0 ? (i = t, o = u) : (s = -s, o = a), o.reverse(); s--; o.push(0));
							o.reverse()
						}
						for ((s = a.length) - (n = u.length) < 0 && (o = u, u = a, a = o, n = s), s = 0; n;) s = (a[--n] = a[n] + u[n] + s) / c | 0, a[n] = c === a[n] ? 0 : a[n] % c;
						return s && (a = [s].concat(a), ++i), $(e, a, i)
					}, P.precision = P.sd = function(e, n) {
						var o, r, s, t = this;
						if (null != e && e !== !!e) return b(e, 1, v), null == n ? n = C : b(n, 0, 8), X(new G(t), e, n);
						if (!(o = t.c)) return null;
						if (r = (s = o.length - 1) * f + 1, s = o[s]) {
							for (; s % 10 == 0; s /= 10, r--);
							for (s = o[0]; s >= 10; s /= 10, r++);
						}
						return e && t.e + 1 > r && (r = t.e + 1), r
					}, P.shiftedBy = function(e) {
						return b(e, -h, h), this.times("1e" + e)
					}, P.squareRoot = P.sqrt = function() {
						var e, n, r, s, t, i = this,
							a = i.c,
							u = i.s,
							l = i.e,
							d = T + 4,
							c = new G("0.5");
						if (1 !== u || !a || !a[0]) return new G(!u || u < 0 && (!a || a[0]) ? NaN : a ? i : 1 / 0);
						if (0 == (u = Math.sqrt(+i)) || u == 1 / 0 ? (((n = g(a)).length + l) % 2 == 0 && (n += "0"), u = Math.sqrt(n), l = _((l + 1) / 2) - (l < 0 || l % 2), r = new G(n = u == 1 / 0 ? "1e" + l : (n = u.toExponential()).slice(0, n.indexOf("e") + 1) + l)) : r = new G(u + ""), r.c[0])
							for ((u = (l = r.e) + d) < 3 && (u = 0);;)
								if (t = r, r = c.times(t.plus(o(i, t, d, 1))), g(t.c).slice(0, u) === (n = g(r.c)).slice(0, u)) {
									if (r.e < l && --u, "9999" != (n = n.slice(u - 3, u + 1)) && (s || "4999" != n)) {
										+n && (+n.slice(1) || "5" != n.charAt(0)) || (X(r, r.e + T + 2, 1), e = !r.times(r).eq(i));
										break
									}
									if (!s && (X(t, t.e + T + 2, 0), t.times(t).eq(i))) {
										r = t;
										break
									}
									d += 4, u += 4, s = 1
								} return X(r, r.e + T + 1, C, e)
					}, P.toExponential = function(e, n) {
						return null != e && (b(e, 0, v), e++), W(this, e, n, 1)
					}, P.toFixed = function(e, n) {
						return null != e && (b(e, 0, v), e = e + this.e + 1), W(this, e, n)
					}, P.toFormat = function(e, n) {
						var o = this.toFixed(e, n);
						if (this.c) {
							var r, s = o.split("."),
								t = +z.groupSize,
								i = +z.secondaryGroupSize,
								a = z.groupSeparator,
								u = s[0],
								l = s[1],
								d = this.s < 0,
								c = d ? u.slice(1) : u,
								f = c.length;
							if (i && (r = t, t = i, i = r, f -= r), t > 0 && f > 0) {
								for (r = f % t || t, u = c.substr(0, r); r < f; r += t) u += a + c.substr(r, t);
								i > 0 && (u += a + c.slice(r)), d && (u = "-" + u)
							}
							o = l ? u + z.decimalSeparator + ((i = +z.fractionGroupSize) ? l.replace(new RegExp("\\d{" + i + "}\\B", "g"), "$&" + z.fractionGroupSeparator) : l) : u
						}
						return o
					}, P.toFraction = function(e) {
						var n, r, s, t, i, a, u, d, c, h, p, v, _ = this,
							j = _.c;
						if (null != e && (!(d = new G(e)).isInteger() && (d.c || 1 !== d.s) || d.lt(I))) throw Error(l + "Argument " + (d.isInteger() ? "out of range: " : "not an integer: ") + e);
						if (!j) return _.toString();
						for (r = new G(I), h = s = new G(I), t = c = new G(I), v = g(j), a = r.e = v.length - _.e - 1, r.c[0] = m[(u = a % f) < 0 ? f + u : u], e = !e || d.comparedTo(r) > 0 ? a > 0 ? r : h : d, u = B, B = 1 / 0, d = new G(v), c.c[0] = 0; p = o(d, r, 0, 1), 1 != (i = s.plus(p.times(t))).comparedTo(e);) s = t, t = i, h = c.plus(p.times(i = h)), c = i, r = d.minus(p.times(i = r)), d = i;
						return i = o(e.minus(s), t, 0, 1), c = c.plus(i.times(h)), s = s.plus(i.times(t)), c.s = h.s = _.s, n = o(h, t, a *= 2, C).minus(_).abs().comparedTo(o(c, s, a, C).minus(_).abs()) < 1 ? [h.toString(), t.toString()] : [c.toString(), s.toString()], B = u, n
					}, P.toNumber = function() {
						return +this
					}, P.toPrecision = function(e, n) {
						return null != e && b(e, 1, v), W(this, e, n, 2)
					}, P.toString = function(e) {
						var n, o = this,
							s = o.s,
							t = o.e;
						return null === t ? s ? (n = "Infinity", s < 0 && (n = "-" + n)) : n = "NaN" : (n = g(o.c), null == e ? n = t <= M || t >= L ? O(n, t) : x(n, t, "0") : (b(e, 2, q.length, "Base"), n = r(x(n, t, "0"), 10, e, s, !0)), s < 0 && o.c[0] && (n = "-" + n)), n
					}, P.valueOf = P.toJSON = function() {
						var e, n = this,
							o = n.e;
						return null === o ? n.toString() : (e = g(n.c), e = o <= M || o >= L ? O(e, o) : x(e, o, "0"), n.s < 0 ? "-" + e : e)
					}, P._isBigNumber = !0, null != n && G.set(n), G
				}()).default = t.BigNumber = t, void 0 === (r = function() {
					return t
				}.call(n, o, n, e)) || (e.exports = r)
			}()
		},
		"./node_modules/bowser/src/bowser.js": function(e, n, o) {
			var r;
			r = function() {
				var e = !0;

				function n(n) {
					function o(e) {
						var o = n.match(e);
						return o && o.length > 1 && o[1] || ""
					}

					function r(e) {
						var o = n.match(e);
						return o && o.length > 1 && o[2] || ""
					}
					var s, t = o(/(ipod|iphone|ipad)/i).toLowerCase(),
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
						g = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						j = o(/version\/(\d+(\.\d+)?)/i),
						b = /tablet/i.test(n) && !/tablet pc/i.test(n),
						w = !b && /[^-]mobi/i.test(n),
						y = /xbox/i.test(n);
					/opera/i.test(n) ? s = {
						name: "Opera",
						opera: e,
						version: j || o(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(n) ? s = {
						name: "Opera",
						opera: e,
						version: o(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || j
					} : /SamsungBrowser/i.test(n) ? s = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: j || o(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(n) ? s = {
						name: "Opera Coast",
						coast: e,
						version: j || o(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(n) ? s = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: j || o(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(n) ? s = {
						name: "UC Browser",
						ucbrowser: e,
						version: o(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(n) ? s = {
						name: "Maxthon",
						maxthon: e,
						version: o(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(n) ? s = {
						name: "Epiphany",
						epiphany: e,
						version: o(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(n) ? s = {
						name: "Puffin",
						puffin: e,
						version: o(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(n) ? s = {
						name: "Sleipnir",
						sleipnir: e,
						version: o(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(n) ? s = {
						name: "K-Meleon",
						kMeleon: e,
						version: o(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : m ? (s = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, g ? (s.msedge = e, s.version = g) : (s.msie = e, s.version = o(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(n) ? s = {
						name: "Internet Explorer",
						msie: e,
						version: o(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : l ? s = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: o(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(n) ? s = {
						name: "Microsoft Edge",
						msedge: e,
						version: g
					} : /vivaldi/i.test(n) ? s = {
						name: "Vivaldi",
						vivaldi: e,
						version: o(/vivaldi\/(\d+(\.\d+)?)/i) || j
					} : c ? s = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: o(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(n) ? s = {
						name: "SeaMonkey",
						seamonkey: e,
						version: o(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(n) ? (s = {
						name: "Firefox",
						firefox: e,
						version: o(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(n) && (s.firefoxos = e, s.osname = "Firefox OS")) : d ? s = {
						name: "Amazon Silk",
						silk: e,
						version: o(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(n) ? s = {
						name: "PhantomJS",
						phantom: e,
						version: o(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(n) ? s = {
						name: "SlimerJS",
						slimer: e,
						version: o(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(n) || /rim\stablet/i.test(n) ? s = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: j || o(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : h ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: j || o(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(n) && (s.touchpad = e)) : /bada/i.test(n) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: o(/dolfin\/(\d+(\.\d+)?)/i)
					} : f ? s = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: o(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || j
					} : /qupzilla/i.test(n) ? s = {
						name: "QupZilla",
						qupzilla: e,
						version: o(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || j
					} : /chromium/i.test(n) ? s = {
						name: "Chromium",
						chromium: e,
						version: o(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || j
					} : /chrome|crios|crmo/i.test(n) ? s = {
						name: "Chrome",
						chrome: e,
						version: o(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? s = {
						name: "Android",
						version: j
					} : /safari|applewebkit/i.test(n) ? (s = {
						name: "Safari",
						safari: e
					}, j && (s.version = j)) : t ? (s = {
						name: "iphone" == t ? "iPhone" : "ipad" == t ? "iPad" : "iPod"
					}, j && (s.version = j)) : s = /googlebot/i.test(n) ? {
						name: "Googlebot",
						googlebot: e,
						version: o(/googlebot\/(\d+(\.\d+))/i) || j
					} : {
						name: o(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(n) ? (/(apple)?webkit\/537\.36/i.test(n) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && j && (s.version = j)) : !s.opera && /gecko\//i.test(n) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || o(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !i && !s.silk ? !s.windowsphone && t ? (s[t] = e, s.ios = e, s.osname = "iOS") : v ? (s.mac = e, s.osname = "macOS") : y ? (s.xbox = e, s.osname = "Xbox") : p ? (s.windows = e, s.osname = "Windows") : _ && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
					var O = "";
					s.windows ? O = function(e) {
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
					}(o(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? O = o(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? O = (O = o(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : t ? O = (O = o(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? O = o(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? O = o(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? O = o(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? O = o(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (O = o(/tizen[\/\s](\d+(\.\d+)*)/i)), O && (s.osversion = O);
					var x = !s.windows && O.split(".")[0];
					return b || u || "ipad" == t || i && (3 == x || x >= 4 && !w) || s.silk ? s.tablet = e : (w || "iphone" == t || "ipod" == t || i || a || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
				}
				var o = n("undefined" != typeof navigator && navigator.userAgent || "");

				function r(e) {
					return e.split(".").length
				}

				function s(e, n) {
					var o, r = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, n);
					for (o = 0; o < e.length; o++) r.push(n(e[o]));
					return r
				}

				function t(e) {
					for (var n = Math.max(r(e[0]), r(e[1])), o = s(e, (function(e) {
							var o = n - r(e);
							return s((e += new Array(o + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --n >= 0;) {
						if (o[0][n] > o[1][n]) return 1;
						if (o[0][n] !== o[1][n]) return -1;
						if (0 === n) return 0
					}
				}

				function i(e, r, s) {
					var i = o;
					"string" == typeof r && (s = r, r = void 0), void 0 === r && (r = !1), s && (i = n(s));
					var a = "" + i.version;
					for (var u in e)
						if (e.hasOwnProperty(u) && i[u]) {
							if ("string" != typeof e[u]) throw new Error("Browser version in the minVersion map should be a string: " + u + ": " + String(e));
							return t([a, e[u]]) < 0
						} return r
				}
				return o.test = function(e) {
					for (var n = 0; n < e.length; ++n) {
						var r = e[n];
						if ("string" == typeof r && r in o) return !0
					}
					return !1
				}, o.isUnsupportedBrowser = i, o.compareVersions = t, o.check = function(e, n, o) {
					return !i(e, n, o)
				}, o._detect = n, o.detect = n, o
			}, e.exports ? e.exports = r() : o("./node_modules/webpack/buildin/amd-define.js")("bowser", r)
		},
		"./node_modules/core-js/modules/_new-promise-capability.js": function(e, n, o) {
			"use strict";
			var r = o("./node_modules/core-js/modules/_a-function.js");

			function s(e) {
				var n, o;
				this.promise = new e((function(e, r) {
					if (void 0 !== n || void 0 !== o) throw TypeError("Bad Promise constructor");
					n = e, o = r
				})), this.resolve = r(n), this.reject = r(o)
			}
			e.exports.f = function(e) {
				return new s(e)
			}
		},
		"./node_modules/core-js/modules/_promise-resolve.js": function(e, n, o) {
			var r = o("./node_modules/core-js/modules/_an-object.js"),
				s = o("./node_modules/core-js/modules/_is-object.js"),
				t = o("./node_modules/core-js/modules/_new-promise-capability.js");
			e.exports = function(e, n) {
				if (r(e), s(n) && n.constructor === e) return n;
				var o = t.f(e);
				return (0, o.resolve)(n), o.promise
			}
		},
		"./node_modules/core-js/modules/_string-trim.js": function(e, n, o) {
			var r = o("./node_modules/core-js/modules/_export.js"),
				s = o("./node_modules/core-js/modules/_defined.js"),
				t = o("./node_modules/core-js/modules/_fails.js"),
				i = o("./node_modules/core-js/modules/_string-ws.js"),
				a = "[" + i + "]",
				u = RegExp("^" + a + a + "*"),
				l = RegExp(a + a + "*$"),
				d = function(e, n, o) {
					var s = {},
						a = t((function() {
							return !!i[e]() || "​" != "​" [e]()
						})),
						u = s[e] = a ? n(c) : i[e];
					o && (s[o] = u), r(r.P + r.F * a, "String", s)
				},
				c = d.trim = function(e, n) {
					return e = String(s(e)), 1 & n && (e = e.replace(u, "")), 2 & n && (e = e.replace(l, "")), e
				};
			e.exports = d
		},
		"./node_modules/core-js/modules/_string-ws.js": function(e, n) {
			e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
		},
		"./node_modules/core-js/modules/es7.promise.finally.js": function(e, n, o) {
			"use strict";
			var r = o("./node_modules/core-js/modules/_export.js"),
				s = o("./node_modules/core-js/modules/_core.js"),
				t = o("./node_modules/core-js/modules/_global.js"),
				i = o("./node_modules/core-js/modules/_species-constructor.js"),
				a = o("./node_modules/core-js/modules/_promise-resolve.js");
			r(r.P + r.R, "Promise", {
				finally: function(e) {
					var n = i(this, s.Promise || t.Promise),
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

			function r(e) {
				return function() {
					return e
				}
			}
			var s = function() {};
			s.thatReturns = r, s.thatReturnsFalse = r(!1), s.thatReturnsTrue = r(!0), s.thatReturnsNull = r(null), s.thatReturnsThis = function() {
				return this
			}, s.thatReturnsArgument = function(e) {
				return e
			}, e.exports = s
		},
		"./node_modules/icepick/icepick.js": function(e, n, o) {
			"use strict";
			const r = n,
				s = e => e,
				t = e => null !== e && (Array.isArray(e) || i(e)),
				i = e => !("object" != typeof e || e.constructor !== Object && null != e.constructor || Object.getPrototypeOf(e) !== Object.prototype && null !== Object.getPrototypeOf(e)),
				a = (e, n) => {
					let o, r;
					if (Array.isArray(e))
						for (o = e.length; o--;) n(o);
					else
						for (o = (r = Object.keys(e)).length; o--;) n(r[o])
				},
				u = e => Array.isArray(e) ? e.slice() : (e => {
					const n = null == e.constructor ? Object.create(null) : {},
						o = Object.keys(e);
					let r, s = o.length;
					for (; s--;) n[r = o[s]] = e[r];
					return n
				})(e),
				l = s,
				d = s;

			function c(e, n) {
				return (n || []).reduce((e, n) => {
					if (e) return e[n]
				}, e)
			}

			function f(e, n) {
				return Object.keys(n).reduce((e, o) => r.assoc(e, o, n[o]), e)
			}

			function h(e, n, o) {
				return e[n] === o ? e : r.assoc(e, n, o)
			}
			n.freeze = s, n.thaw = function e(n) {
				if (!t(n) || !Object.isFrozen(n)) return n;
				const o = Array.isArray(n) ? new Array(n.length) : {};
				return a(n, r => {
					o[r] = e(n[r])
				}), o
			}, n.assoc = function(e, n, o) {
				if (e[n] === o) return d(e);
				const r = u(e);
				return r[n] = l(o), d(r)
			}, n.set = n.assoc, n.dissoc = function(e, n) {
				const o = u(e);
				return delete o[n], d(o)
			}, n.unset = n.dissoc, n.assocIn = function e(n, o, s) {
				const t = o[0];
				return 1 === o.length ? r.assoc(n, t, s) : r.assoc(n, t, e(n[t] || {}, o.slice(1), s))
			}, n.setIn = n.assocIn, n.dissocIn = function e(n, o) {
				const s = o[0];
				return n.hasOwnProperty(s) ? 1 === o.length ? r.dissoc(n, s) : r.assoc(n, s, e(n[s], o.slice(1))) : n
			}, n.unsetIn = n.dissocIn, n.getIn = c, n.updateIn = function(e, n, o) {
				const s = c(e, n);
				return r.assocIn(e, n, o(s))
			}, ["push", "unshift", "pop", "shift", "reverse", "sort"].forEach(e => {
				n[e] = function(n, o) {
					const r = [...n];
					return r[e](l(o)), d(r)
				}, n[e].displayName = "icepick." + e
			}), n.splice = function(e, ...n) {
				const o = [...e],
					r = n.map(l);
				return o.splice.apply(o, r), d(o)
			}, n.slice = function(e, n, o) {
				const r = e.slice(n, o);
				return d(r)
			}, ["map", "filter"].forEach(e => {
				n[e] = function(n, o) {
					const r = o[e](n);
					return d(r)
				}, n[e].displayName = "icepick." + e
			}), n.extend = n.assign = function(e, ...n) {
				const o = n.reduce(f, e);
				return d(o)
			}, n.merge = function e(n, o, s) {
				if (null == n || null == o) return n;
				return Object.keys(o).reduce((n, i) => {
					const a = o[i],
						u = n[i],
						l = s ? s(u, a, i) : a;
					return t(a) && t(u) ? l === u ? n : Array.isArray(a) ? r.assoc(n, i, l) : h(n, i, e(u, l, s)) : h(n, i, l)
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
		"./node_modules/lodash/_assignMergeValue.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseAssignValue.js"),
				s = o("./node_modules/lodash/eq.js");
			e.exports = function(e, n, o) {
				(void 0 === o || s(e[n], o)) && (void 0 !== o || n in e) || r(e, n, o)
			}
		},
		"./node_modules/lodash/_baseClamp.js": function(e, n) {
			e.exports = function(e, n, o) {
				return e == e && (void 0 !== o && (e = e <= o ? e : o), void 0 !== n && (e = e >= n ? e : n)), e
			}
		},
		"./node_modules/lodash/_baseInverter.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseForOwn.js");
			e.exports = function(e, n, o, s) {
				return r(e, (function(e, r, t) {
					n(s, o(e), r, t)
				})), s
			}
		},
		"./node_modules/lodash/_baseMerge.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_Stack.js"),
				s = o("./node_modules/lodash/_assignMergeValue.js"),
				t = o("./node_modules/lodash/_baseFor.js"),
				i = o("./node_modules/lodash/_baseMergeDeep.js"),
				a = o("./node_modules/lodash/isObject.js"),
				u = o("./node_modules/lodash/keysIn.js"),
				l = o("./node_modules/lodash/_safeGet.js");
			e.exports = function e(n, o, d, c, f) {
				n !== o && t(o, (function(t, u) {
					if (f || (f = new r), a(t)) i(n, o, u, d, e, c, f);
					else {
						var h = c ? c(l(n, u), t, u + "", n, o, f) : void 0;
						void 0 === h && (h = t), s(n, u, h)
					}
				}), u)
			}
		},
		"./node_modules/lodash/_baseMergeDeep.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_assignMergeValue.js"),
				s = o("./node_modules/lodash/_cloneBuffer.js"),
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
				if (x) r(e, o, x);
				else {
					var A = b ? b(y, O, o + "", e, n, w) : void 0,
						E = void 0 === A;
					if (E) {
						var k = l(O),
							S = !k && c(O),
							N = !k && !S && p(O);
						A = O, k || S || N ? l(y) ? A = y : d(y) ? A = i(y) : S ? (E = !1, A = s(O, !0)) : N ? (E = !1, A = t(O, !0)) : A = [] : m(O) || u(O) ? (A = y, u(y) ? A = _(y) : h(y) && !f(y) || (A = a(O))) : E = !1
					}
					E && (w.set(O, A), j(A, O, g, b, w), w.delete(O)), r(e, o, A)
				}
			}
		},
		"./node_modules/lodash/_baseSome.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, n) {
				var o;
				return r(e, (function(e, r, s) {
					return !(o = n(e, r, s))
				})), !!o
			}
		},
		"./node_modules/lodash/_baseXor.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseDifference.js"),
				s = o("./node_modules/lodash/_baseFlatten.js"),
				t = o("./node_modules/lodash/_baseUniq.js");
			e.exports = function(e, n, o) {
				var i = e.length;
				if (i < 2) return i ? t(e[0]) : [];
				for (var a = -1, u = Array(i); ++a < i;)
					for (var l = e[a], d = -1; ++d < i;) d != a && (u[a] = r(u[a] || l, e[d], n, o));
				return t(s(u, 1), n, o)
			}
		},
		"./node_modules/lodash/_castSlice.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseSlice.js");
			e.exports = function(e, n, o) {
				var s = e.length;
				return o = void 0 === o ? s : o, !n && o >= s ? e : r(e, n, o)
			}
		},
		"./node_modules/lodash/_charsStartIndex.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseIndexOf.js");
			e.exports = function(e, n) {
				for (var o = -1, s = e.length; ++o < s && r(n, e[o], 0) > -1;);
				return o
			}
		},
		"./node_modules/lodash/_createCaseFirst.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_castSlice.js"),
				s = o("./node_modules/lodash/_hasUnicode.js"),
				t = o("./node_modules/lodash/_stringToArray.js"),
				i = o("./node_modules/lodash/toString.js");
			e.exports = function(e) {
				return function(n) {
					n = i(n);
					var o = s(n) ? t(n) : void 0,
						a = o ? o[0] : n.charAt(0),
						u = o ? r(o, 1).join("") : n.slice(1);
					return a[e]() + u
				}
			}
		},
		"./node_modules/lodash/_createFind.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseIteratee.js"),
				s = o("./node_modules/lodash/isArrayLike.js"),
				t = o("./node_modules/lodash/keys.js");
			e.exports = function(e) {
				return function(n, o, i) {
					var a = Object(n);
					if (!s(n)) {
						var u = r(o, 3);
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
			var r = o("./node_modules/lodash/_baseInverter.js");
			e.exports = function(e, n) {
				return function(o, s) {
					return r(o, e, n(s), {})
				}
			}
		},
		"./node_modules/lodash/_safeGet.js": function(e, n) {
			e.exports = function(e, n) {
				if (("constructor" !== n || "function" != typeof e[n]) && "__proto__" != n) return e[n]
			}
		},
		"./node_modules/lodash/camelCase.js": function(e, n, o) {
			var r = o("./node_modules/lodash/capitalize.js"),
				s = o("./node_modules/lodash/_createCompounder.js")((function(e, n, o) {
					return n = n.toLowerCase(), e + (o ? r(n) : n)
				}));
			e.exports = s
		},
		"./node_modules/lodash/capitalize.js": function(e, n, o) {
			var r = o("./node_modules/lodash/toString.js"),
				s = o("./node_modules/lodash/upperFirst.js");
			e.exports = function(e) {
				return s(r(e).toLowerCase())
			}
		},
		"./node_modules/lodash/clamp.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseClamp.js"),
				s = o("./node_modules/lodash/toNumber.js");
			e.exports = function(e, n, o) {
				return void 0 === o && (o = n, n = void 0), void 0 !== o && (o = (o = s(o)) == o ? o : 0), void 0 !== n && (n = (n = s(n)) == n ? n : 0), r(s(e), n, o)
			}
		},
		"./node_modules/lodash/defaults.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseRest.js"),
				s = o("./node_modules/lodash/eq.js"),
				t = o("./node_modules/lodash/_isIterateeCall.js"),
				i = o("./node_modules/lodash/keysIn.js"),
				a = Object.prototype,
				u = a.hasOwnProperty,
				l = r((function(e, n) {
					e = Object(e);
					var o = -1,
						r = n.length,
						l = r > 2 ? n[2] : void 0;
					for (l && t(n[0], n[1], l) && (r = 1); ++o < r;)
						for (var d = n[o], c = i(d), f = -1, h = c.length; ++f < h;) {
							var m = c[f],
								p = e[m];
							(void 0 === p || s(p, a[m]) && !u.call(e, m)) && (e[m] = d[m])
						}
					return e
				}));
			e.exports = l
		},
		"./node_modules/lodash/find.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_createFind.js")(o("./node_modules/lodash/findIndex.js"));
			e.exports = r
		},
		"./node_modules/lodash/findIndex.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseFindIndex.js"),
				s = o("./node_modules/lodash/_baseIteratee.js"),
				t = o("./node_modules/lodash/toInteger.js"),
				i = Math.max;
			e.exports = function(e, n, o) {
				var a = null == e ? 0 : e.length;
				if (!a) return -1;
				var u = null == o ? 0 : t(o);
				return u < 0 && (u = i(a + u, 0)), r(e, s(n, 3), u)
			}
		},
		"./node_modules/lodash/findLastIndex.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseFindIndex.js"),
				s = o("./node_modules/lodash/_baseIteratee.js"),
				t = o("./node_modules/lodash/toInteger.js"),
				i = Math.max,
				a = Math.min;
			e.exports = function(e, n, o) {
				var u = null == e ? 0 : e.length;
				if (!u) return -1;
				var l = u - 1;
				return void 0 !== o && (l = t(o), l = o < 0 ? i(u + l, 0) : a(l, u - 1)), r(e, s(n, 3), l, !0)
			}
		},
		"./node_modules/lodash/flatMap.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseFlatten.js"),
				s = o("./node_modules/lodash/map.js");
			e.exports = function(e, n) {
				return r(s(e, n), 1)
			}
		},
		"./node_modules/lodash/forEach.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_arrayEach.js"),
				s = o("./node_modules/lodash/_baseEach.js"),
				t = o("./node_modules/lodash/_castFunction.js"),
				i = o("./node_modules/lodash/isArray.js");
			e.exports = function(e, n) {
				return (i(e) ? r : s)(e, t(n))
			}
		},
		"./node_modules/lodash/forOwn.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseForOwn.js"),
				s = o("./node_modules/lodash/_castFunction.js");
			e.exports = function(e, n) {
				return e && r(e, s(n))
			}
		},
		"./node_modules/lodash/invert.js": function(e, n, o) {
			var r = o("./node_modules/lodash/constant.js"),
				s = o("./node_modules/lodash/_createInverter.js"),
				t = o("./node_modules/lodash/identity.js"),
				i = Object.prototype.toString,
				a = s((function(e, n, o) {
					null != n && "function" != typeof n.toString && (n = i.call(n)), e[n] = o
				}), r(t));
			e.exports = a
		},
		"./node_modules/lodash/isEqualWith.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseIsEqual.js");
			e.exports = function(e, n, o) {
				var s = (o = "function" == typeof o ? o : void 0) ? o(e, n) : void 0;
				return void 0 === s ? r(e, n, void 0, o) : !!s
			}
		},
		"./node_modules/lodash/mapValues.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseAssignValue.js"),
				s = o("./node_modules/lodash/_baseForOwn.js"),
				t = o("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, n) {
				var o = {};
				return n = t(n, 3), s(e, (function(e, s, t) {
					r(o, s, n(e, s, t))
				})), o
			}
		},
		"./node_modules/lodash/merge.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseMerge.js"),
				s = o("./node_modules/lodash/_createAssigner.js")((function(e, n, o) {
					r(e, n, o)
				}));
			e.exports = s
		},
		"./node_modules/lodash/mergeWith.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseMerge.js"),
				s = o("./node_modules/lodash/_createAssigner.js")((function(e, n, o, s) {
					r(e, n, o, s)
				}));
			e.exports = s
		},
		"./node_modules/lodash/set.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseSet.js");
			e.exports = function(e, n, o) {
				return null == e ? e : r(e, n, o)
			}
		},
		"./node_modules/lodash/some.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_arraySome.js"),
				s = o("./node_modules/lodash/_baseIteratee.js"),
				t = o("./node_modules/lodash/_baseSome.js"),
				i = o("./node_modules/lodash/isArray.js"),
				a = o("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, n, o) {
				var u = i(e) ? r : t;
				return o && a(e, n, o) && (n = void 0), u(e, s(n, 3))
			}
		},
		"./node_modules/lodash/toPlainObject.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_copyObject.js"),
				s = o("./node_modules/lodash/keysIn.js");
			e.exports = function(e) {
				return r(e, s(e))
			}
		},
		"./node_modules/lodash/trimStart.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseToString.js"),
				s = o("./node_modules/lodash/_castSlice.js"),
				t = o("./node_modules/lodash/_charsStartIndex.js"),
				i = o("./node_modules/lodash/_stringToArray.js"),
				a = o("./node_modules/lodash/toString.js"),
				u = /^\s+/;
			e.exports = function(e, n, o) {
				if ((e = a(e)) && (o || void 0 === n)) return e.replace(u, "");
				if (!e || !(n = r(n))) return e;
				var l = i(e),
					d = t(l, i(n));
				return s(l, d).join("")
			}
		},
		"./node_modules/lodash/union.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseFlatten.js"),
				s = o("./node_modules/lodash/_baseRest.js"),
				t = o("./node_modules/lodash/_baseUniq.js"),
				i = o("./node_modules/lodash/isArrayLikeObject.js"),
				a = s((function(e) {
					return t(r(e, 1, i, !0))
				}));
			e.exports = a
		},
		"./node_modules/lodash/uniqWith.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseUniq.js");
			e.exports = function(e, n) {
				return n = "function" == typeof n ? n : void 0, e && e.length ? r(e, void 0, n) : []
			}
		},
		"./node_modules/lodash/upperFirst.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_createCaseFirst.js")("toUpperCase");
			e.exports = r
		},
		"./node_modules/lodash/xor.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_arrayFilter.js"),
				s = o("./node_modules/lodash/_baseRest.js"),
				t = o("./node_modules/lodash/_baseXor.js"),
				i = o("./node_modules/lodash/isArrayLikeObject.js"),
				a = s((function(e) {
					return t(r(e, i))
				}));
			e.exports = a
		},
		"./node_modules/lodash/xorWith.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_arrayFilter.js"),
				s = o("./node_modules/lodash/_baseRest.js"),
				t = o("./node_modules/lodash/_baseXor.js"),
				i = o("./node_modules/lodash/isArrayLikeObject.js"),
				a = o("./node_modules/lodash/last.js"),
				u = s((function(e) {
					var n = a(e);
					return n = "function" == typeof n ? n : void 0, t(r(e, i), void 0, n)
				}));
			e.exports = u
		},
		"./node_modules/path-browserify/index.js": function(e, n, o) {
			(function(e) {
				function o(e, n) {
					for (var o = 0, r = e.length - 1; r >= 0; r--) {
						var s = e[r];
						"." === s ? e.splice(r, 1) : ".." === s ? (e.splice(r, 1), o++) : o && (e.splice(r, 1), o--)
					}
					if (n)
						for (; o--; o) e.unshift("..");
					return e
				}

				function r(e, n) {
					if (e.filter) return e.filter(n);
					for (var o = [], r = 0; r < e.length; r++) n(e[r], r, e) && o.push(e[r]);
					return o
				}
				n.resolve = function() {
					for (var n = "", s = !1, t = arguments.length - 1; t >= -1 && !s; t--) {
						var i = t >= 0 ? arguments[t] : e.cwd();
						if ("string" != typeof i) throw new TypeError("Arguments to path.resolve must be strings");
						i && (n = i + "/" + n, s = "/" === i.charAt(0))
					}
					return (s ? "/" : "") + (n = o(r(n.split("/"), (function(e) {
						return !!e
					})), !s).join("/")) || "."
				}, n.normalize = function(e) {
					var t = n.isAbsolute(e),
						i = "/" === s(e, -1);
					return (e = o(r(e.split("/"), (function(e) {
						return !!e
					})), !t).join("/")) || t || (e = "."), e && i && (e += "/"), (t ? "/" : "") + e
				}, n.isAbsolute = function(e) {
					return "/" === e.charAt(0)
				}, n.join = function() {
					var e = Array.prototype.slice.call(arguments, 0);
					return n.normalize(r(e, (function(e, n) {
						if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
						return e
					})).join("/"))
				}, n.relative = function(e, o) {
					function r(e) {
						for (var n = 0; n < e.length && "" === e[n]; n++);
						for (var o = e.length - 1; o >= 0 && "" === e[o]; o--);
						return n > o ? [] : e.slice(n, o - n + 1)
					}
					e = n.resolve(e).substr(1), o = n.resolve(o).substr(1);
					for (var s = r(e.split("/")), t = r(o.split("/")), i = Math.min(s.length, t.length), a = i, u = 0; u < i; u++)
						if (s[u] !== t[u]) {
							a = u;
							break
						} var l = [];
					for (u = a; u < s.length; u++) l.push("..");
					return (l = l.concat(t.slice(a))).join("/")
				}, n.sep = "/", n.delimiter = ":", n.dirname = function(e) {
					if ("string" != typeof e && (e += ""), 0 === e.length) return ".";
					for (var n = e.charCodeAt(0), o = 47 === n, r = -1, s = !0, t = e.length - 1; t >= 1; --t)
						if (47 === (n = e.charCodeAt(t))) {
							if (!s) {
								r = t;
								break
							}
						} else s = !1;
					return -1 === r ? o ? "/" : "." : o && 1 === r ? "/" : e.slice(0, r)
				}, n.basename = function(e, n) {
					var o = function(e) {
						"string" != typeof e && (e += "");
						var n, o = 0,
							r = -1,
							s = !0;
						for (n = e.length - 1; n >= 0; --n)
							if (47 === e.charCodeAt(n)) {
								if (!s) {
									o = n + 1;
									break
								}
							} else -1 === r && (s = !1, r = n + 1);
						return -1 === r ? "" : e.slice(o, r)
					}(e);
					return n && o.substr(-1 * n.length) === n && (o = o.substr(0, o.length - n.length)), o
				}, n.extname = function(e) {
					"string" != typeof e && (e += "");
					for (var n = -1, o = 0, r = -1, s = !0, t = 0, i = e.length - 1; i >= 0; --i) {
						var a = e.charCodeAt(i);
						if (47 !== a) - 1 === r && (s = !1, r = i + 1), 46 === a ? -1 === n ? n = i : 1 !== t && (t = 1) : -1 !== n && (t = -1);
						else if (!s) {
							o = i + 1;
							break
						}
					}
					return -1 === n || -1 === r || 0 === t || 1 === t && n === r - 1 && n === o + 1 ? "" : e.slice(n, r)
				};
				var s = "b" === "ab".substr(-1) ? function(e, n, o) {
					return e.substr(n, o)
				} : function(e, n, o) {
					return n < 0 && (n = e.length + n), e.substr(n, o)
				}
			}).call(this, o("./node_modules/process/browser.js"))
		},
		"./node_modules/prop-types/factoryWithThrowingShims.js": function(e, n, o) {
			"use strict";
			var r = o("./node_modules/fbjs/lib/emptyFunction.js"),
				s = o("./node_modules/fbjs/lib/invariant.js");
			e.exports = function() {
				function e() {
					s(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
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
				return o.checkPropTypes = r, o.PropTypes = o, o
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
//# sourceMappingURL=vendors~Governance~Reddit.64190a957ce50e28e8dc.js.map