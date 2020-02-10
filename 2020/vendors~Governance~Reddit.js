// https://www.redditstatic.com/desktop2x/vendors~Governance~Reddit.dafde65beb1ce5ef7772.js
// Retrieved at 2/10/2020, 2:30:19 PM by Reddit Dataminer v1.0.0
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
					c = l(a),
					d = [r],
					f = u(d),
					h = {},
					m = !1;

				function p(n, o, t) {
					e.addEventListener ? e.addEventListener(n, o, t) : e.attachEvent && e.attachEvent("on" + n, o)
				}

				function _(n, o) {
					e.removeEventListener ? e.removeEventListener(n, o) : e.detachEvent && e.detachEvent("on" + n, o)
				}

				function g(e) {
					return /\*/.test(e)
				}
				var v = n.postMessage = function(e, n, o) {
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
					j = n.receiveMessage = function(e, n, o, t) {
						"string" == typeof e && (t = o, o = n, n = e, e = null), t = t || void 0;
						var r = function(n) {
							for (var r = arguments.length, s = Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) s[i - 1] = arguments[i];
							e && e !== n.source && e.contentWindow !== n.source || o.apply(t, [n].concat(s))
						};
						return p(n, r), {
							off: function() {
								_(n, r)
							}
						}
					},
					y = (n.receiveMessageOnce = function(e, n, t, r) {
						var s = j(e, n, (function() {
							t && t.apply(void 0, o), s.off()
						}), r);
						return s
					}, n.removePostMessageOrigin = function(e) {
						var n = a.indexOf(e); - 1 !== n && (a.splice(n, 1), c = l(a))
					}),
					b = e.CustomEvent;
				if ("undefined" != typeof window && "function" != typeof b) {
					var w = {
						bubbles: !1,
						cancelable: !1,
						detail: void 0
					};
					(b = function(e, n) {
						n = n || w;
						var o = document.createEvent("CustomEvent");
						return o.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), o
					}).prototype = e.Event.prototype
				}
				n.addPostMessageOrigin = function(e) {
					g(e) ? a = [t] : -1 === a.indexOf(e) && (y(t), a.push(e), c = l(a))
				};

				function O(n) {
					if (n.origin === e.location.origin || c.test(n.origin) || "null" === n.origin) {
						var o = {};
						try {
							o = JSON.parse(n.data)
						} catch (n) {}
						var t = o.type;
						if (f.test(t)) {
							var r = t.split(".", 2)[1];
							if (h[r]) h[r].targets.forEach((function(e) {
								return v(e, t, o.data, o.options)
							}));
							var s = new b(t, {
								detail: o.data
							});
							s.source = n.source, e.dispatchEvent(s)
						}
					}
				}
				var x = n.listen = function(e) {
					-1 === d.indexOf(e) && (d.push(e), f = u(d)), m || (p("message", O), m = !0)
				};
				n.stopListening = function(e) {
					var n = d.indexOf(e); - 1 !== n && (d.splice(n, 1), d.length ? f = u(d) : (_("message", O), m = !1))
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
			var t;
			! function(r) {
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
					p = 1e7,
					_ = 1e9;

				function g(e) {
					var n = 0 | e;
					return e > 0 || e === n ? n : n - 1
				}

				function v(e) {
					for (var n, o, t = 1, r = e.length, s = e[0] + ""; t < r;) {
						for (n = e[t++] + "", o = f - n.length; o--; n = "0" + n);
						s += n
					}
					for (r = s.length; 48 === s.charCodeAt(--r););
					return s.slice(0, r + 1 || 1)
				}

				function j(e, n) {
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

				function y(e, n, o, t) {
					if (e < n || e > o || e !== (e < 0 ? u(e) : l(e))) throw Error(a + (t || "Argument") + ("number" == typeof e ? e < n || e > o ? " out of range: " : " not an integer: " : " not a primitive number: ") + e)
				}

				function b(e) {
					return "[object Array]" == Object.prototype.toString.call(e)
				}

				function w(e) {
					var n = e.c.length - 1;
					return g(e.e / f) == n && e.c[n] % 2 != 0
				}

				function O(e, n) {
					return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (n < 0 ? "e" : "e+") + n
				}

				function x(e, n, o) {
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
					var o, t, r, s, A, E, N, I, R, S = $.prototype = {
							constructor: $,
							toString: null,
							valueOf: null
						},
						P = new $(1),
						C = 20,
						F = 4,
						L = -7,
						k = 21,
						T = -1e7,
						M = 1e7,
						U = !1,
						D = 1,
						B = 0,
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
						var o, s, u, a, d, m, p, _, g = this;
						if (!(g instanceof $)) return new $(e, n);
						if (null == n) {
							if (e instanceof $) return g.s = e.s, g.e = e.e, void(g.c = (e = e.c) ? e.slice() : e);
							if ((m = "number" == typeof e) && 0 * e == 0) {
								if (g.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
									for (a = 0, d = e; d >= 10; d /= 10, a++);
									return g.e = a, void(g.c = [e])
								}
								_ = e + ""
							} else {
								if (!i.test(_ = e + "")) return r(g, _, m);
								g.s = 45 == _.charCodeAt(0) ? (_ = _.slice(1), -1) : 1
							}(a = _.indexOf(".")) > -1 && (_ = _.replace(".", "")), (d = _.search(/e/i)) > 0 ? (a < 0 && (a = d), a += +_.slice(d + 1), _ = _.substring(0, d)) : a < 0 && (a = _.length)
						} else {
							if (y(n, 2, G.length, "Base"), _ = e + "", 10 == n) return H(g = new $(e instanceof $ ? e : _), C + g.e + 1, F);
							if (m = "number" == typeof e) {
								if (0 * e != 0) return r(g, _, m, n);
								if (g.s = 1 / e < 0 ? (_ = _.slice(1), -1) : 1, $.DEBUG && _.replace(/^0\.0*|\./, "").length > 15) throw Error(c + e);
								m = !1
							} else g.s = 45 === _.charCodeAt(0) ? (_ = _.slice(1), -1) : 1;
							for (o = G.slice(0, n), a = d = 0, p = _.length; d < p; d++)
								if (o.indexOf(s = _.charAt(d)) < 0) {
									if ("." == s) {
										if (d > a) {
											a = p;
											continue
										}
									} else if (!u && (_ == _.toUpperCase() && (_ = _.toLowerCase()) || _ == _.toLowerCase() && (_ = _.toUpperCase()))) {
										u = !0, d = -1, a = 0;
										continue
									}
									return r(g, e + "", m, n)
								}(a = (_ = t(_, n, 10, g.s)).indexOf(".")) > - 1 ? _ = _.replace(".", "") : a = _.length
						}
						for (d = 0; 48 === _.charCodeAt(d); d++);
						for (p = _.length; 48 === _.charCodeAt(--p););
						if (_ = _.slice(d, ++p)) {
							if (p -= d, m && $.DEBUG && p > 15 && (e > h || e !== l(e))) throw Error(c + g.s * e);
							if ((a = a - d - 1) > M) g.c = g.e = null;
							else if (a < T) g.c = [g.e = 0];
							else {
								if (g.e = a, g.c = [], d = (a + 1) % f, a < 0 && (d += f), d < p) {
									for (d && g.c.push(+_.slice(0, d)), p -= f; d < p;) g.c.push(+_.slice(d, d += f));
									_ = _.slice(d), d = f - _.length
								} else d -= p;
								for (; d--; _ += "0");
								g.c.push(+_)
							}
						} else g.c = [g.e = 0]
					}

					function z(e, n, o, t) {
						var r, s, i, u, l;
						if (null == o ? o = F : y(o, 0, 8), !e.c) return e.toString();
						if (r = e.c[0], i = e.e, null == n) l = v(e.c), l = 1 == t || 2 == t && i <= L ? O(l, i) : x(l, i, "0");
						else if (s = (e = H(new $(e), n, o)).e, u = (l = v(e.c)).length, 1 == t || 2 == t && (n <= s || s <= L)) {
							for (; u < n; l += "0", u++);
							l = O(l, s)
						} else if (n -= i, l = x(l, s, "0"), s + 1 > u) {
							if (--n > 0)
								for (l += "."; n--; l += "0");
						} else if ((n += s - u) > 0)
							for (s + 1 == u && (l += "."); n--; l += "0");
						return e.s < 0 && r ? "-" + l : l
					}

					function V(e, n) {
						var o, t, r = 0;
						for (b(e[0]) && (e = e[0]), o = new $(e[0]); ++r < e.length;) {
							if (!(t = new $(e[r])).s) {
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
						return (o = t + o * f - 1) > M ? e.c = e.e = null : o < T ? e.c = [e.e = 0] : (e.e = o, e.c = n), e
					}

					function H(e, n, o, t) {
						var r, s, i, a, c, h, p, _ = e.c,
							g = m;
						if (_) {
							e: {
								for (r = 1, a = _[0]; a >= 10; a /= 10, r++);
								if ((s = n - r) < 0) s += f,
								i = n,
								p = (c = _[h = 0]) / g[r - i - 1] % 10 | 0;
								else if ((h = u((s + 1) / f)) >= _.length) {
									if (!t) break e;
									for (; _.length <= h; _.push(0));
									c = p = 0, r = 1, i = (s %= f) - f + 1
								} else {
									for (c = a = _[h], r = 1; a >= 10; a /= 10, r++);
									p = (i = (s %= f) - f + r) < 0 ? 0 : c / g[r - i - 1] % 10 | 0
								}
								if (t = t || n < 0 || null != _[h + 1] || (i < 0 ? c : c % g[r - i - 1]), t = o < 4 ? (p || t) && (0 == o || o == (e.s < 0 ? 3 : 2)) : p > 5 || 5 == p && (4 == o || t || 6 == o && (s > 0 ? i > 0 ? c / g[r - i] : 0 : _[h - 1]) % 10 & 1 || o == (e.s < 0 ? 8 : 7)), n < 1 || !_[0]) return _.length = 0,
								t ? (n -= e.e + 1, _[0] = g[(f - n % f) % f], e.e = -n || 0) : _[0] = e.e = 0,
								e;
								if (0 == s ? (_.length = h, a = 1, h--) : (_.length = h + 1, a = g[f - s], _[h] = i > 0 ? l(c / g[r - i] % g[i]) * a : 0), t)
									for (;;) {
										if (0 == h) {
											for (s = 1, i = _[0]; i >= 10; i /= 10, s++);
											for (i = _[0] += a, a = 1; i >= 10; i /= 10, a++);
											s != a && (e.e++, _[0] == d && (_[0] = 1));
											break
										}
										if (_[h] += a, _[h] != d) break;
										_[h--] = 0, a = 1
									}
								for (s = _.length; 0 === _[--s]; _.pop());
							}
							e.e > M ? e.c = e.e = null : e.e < T && (e.c = [e.e = 0])
						}
						return e
					}
					return $.clone = e, $.ROUND_UP = 0, $.ROUND_DOWN = 1, $.ROUND_CEIL = 2, $.ROUND_FLOOR = 3, $.ROUND_HALF_UP = 4, $.ROUND_HALF_DOWN = 5, $.ROUND_HALF_EVEN = 6, $.ROUND_HALF_CEIL = 7, $.ROUND_HALF_FLOOR = 8, $.EUCLID = 9, $.config = $.set = function(e) {
						var n, o;
						if (null != e) {
							if ("object" != typeof e) throw Error(a + "Object expected: " + e);
							if (e.hasOwnProperty(n = "DECIMAL_PLACES") && (y(o = e[n], 0, _, n), C = o), e.hasOwnProperty(n = "ROUNDING_MODE") && (y(o = e[n], 0, 8, n), F = o), e.hasOwnProperty(n = "EXPONENTIAL_AT") && (b(o = e[n]) ? (y(o[0], -_, 0, n), y(o[1], 0, _, n), L = o[0], k = o[1]) : (y(o, -_, _, n), L = -(k = o < 0 ? -o : o))), e.hasOwnProperty(n = "RANGE"))
								if (b(o = e[n])) y(o[0], -_, -1, n), y(o[1], 1, _, n), T = o[0], M = o[1];
								else {
									if (y(o, -_, _, n), !o) throw Error(a + n + " cannot be zero: " + o);
									T = -(M = o < 0 ? -o : o)
								} if (e.hasOwnProperty(n = "CRYPTO")) {
								if ((o = e[n]) !== !!o) throw Error(a + n + " not true or false: " + o);
								if (o) {
									if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw U = !o, Error(a + "crypto unavailable");
									U = o
								} else U = o
							}
							if (e.hasOwnProperty(n = "MODULO_MODE") && (y(o = e[n], 0, 9, n), D = o), e.hasOwnProperty(n = "POW_PRECISION") && (y(o = e[n], 0, _, n), B = o), e.hasOwnProperty(n = "FORMAT")) {
								if ("object" != typeof(o = e[n])) throw Error(a + n + " not an object: " + o);
								q = o
							}
							if (e.hasOwnProperty(n = "ALPHABET")) {
								if ("string" != typeof(o = e[n]) || /^.$|\.|(.).*\1/.test(o)) throw Error(a + n + " invalid: " + o);
								G = o
							}
						}
						return {
							DECIMAL_PLACES: C,
							ROUNDING_MODE: F,
							EXPONENTIAL_AT: [L, k],
							RANGE: [T, M],
							CRYPTO: U,
							MODULO_MODE: D,
							POW_PRECISION: B,
							FORMAT: q,
							ALPHABET: G
						}
					}, $.isBigNumber = function(e) {
						return e instanceof $ || e && !0 === e._isBigNumber || !1
					}, $.maximum = $.max = function() {
						return V(arguments, S.lt)
					}, $.minimum = $.min = function() {
						return V(arguments, S.gt)
					}, $.random = (s = 9007199254740992 * Math.random() & 2097151 ? function() {
						return l(9007199254740992 * Math.random())
					} : function() {
						return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
					}, function(e) {
						var n, o, t, r, i, c = 0,
							d = [],
							h = new $(P);
						if (null == e ? e = C : y(e, 0, _), r = u(e / f), U)
							if (crypto.getRandomValues) {
								for (n = crypto.getRandomValues(new Uint32Array(r *= 2)); c < r;)(i = 131072 * n[c] + (n[c + 1] >>> 11)) >= 9e15 ? (o = crypto.getRandomValues(new Uint32Array(2)), n[c] = o[0], n[c + 1] = o[1]) : (d.push(i % 1e14), c += 2);
								c = r / 2
							} else {
								if (!crypto.randomBytes) throw U = !1, Error(a + "crypto unavailable");
								for (n = crypto.randomBytes(r *= 7); c < r;)(i = 281474976710656 * (31 & n[c]) + 1099511627776 * n[c + 1] + 4294967296 * n[c + 2] + 16777216 * n[c + 3] + (n[c + 4] << 16) + (n[c + 5] << 8) + n[c + 6]) >= 9e15 ? crypto.randomBytes(7).copy(n, c) : (d.push(i % 1e14), c += 7);
								c = r / 7
							} if (!U)
							for (; c < r;)(i = s()) < 9e15 && (d[c++] = i % 1e14);
						for (r = d[--c], e %= f, r && e && (i = m[f - e], d[c] = l(r / i) * i); 0 === d[c]; d.pop(), c--);
						if (c < 0) d = [t = 0];
						else {
							for (t = -1; 0 === d[0]; d.splice(0, 1), t -= f);
							for (c = 1, i = d[0]; i >= 10; i /= 10, c++);
							c < f && (t -= f - c)
						}
						return h.e = t, h.c = d, h
					}), t = function() {
						function e(e, n, o, t) {
							for (var r, s, i = [0], u = 0, l = e.length; u < l;) {
								for (s = i.length; s--; i[s] *= n);
								for (i[0] += t.indexOf(e.charAt(u++)), r = 0; r < i.length; r++) i[r] > o - 1 && (null == i[r + 1] && (i[r + 1] = 0), i[r + 1] += i[r] / o | 0, i[r] %= o)
							}
							return i.reverse()
						}
						return function(n, t, r, s, i) {
							var u, l, a, c, d, f, h, m, p = n.indexOf("."),
								_ = C,
								g = F;
							for (p >= 0 && (c = B, B = 0, n = n.replace(".", ""), f = (m = new $(t)).pow(n.length - p), B = c, m.c = e(x(v(f.c), f.e, "0"), 10, r, "0123456789"), m.e = m.c.length), a = c = (h = e(n, t, r, i ? (u = G, "0123456789") : (u = "0123456789", G))).length; 0 == h[--c]; h.pop());
							if (!h[0]) return u.charAt(0);
							if (p < 0 ? --a : (f.c = h, f.e = a, f.s = s, h = (f = o(f, m, _, g, r)).c, d = f.r, a = f.e), p = h[l = a + _ + 1], c = r / 2, d = d || l < 0 || null != h[l + 1], d = g < 4 ? (null != p || d) && (0 == g || g == (f.s < 0 ? 3 : 2)) : p > c || p == c && (4 == g || d || 6 == g && 1 & h[l - 1] || g == (f.s < 0 ? 8 : 7)), l < 1 || !h[0]) n = d ? x(u.charAt(1), -_, u.charAt(0)) : u.charAt(0);
							else {
								if (h.length = l, d)
									for (--r; ++h[--l] > r;) h[l] = 0, l || (++a, h = [1].concat(h));
								for (c = h.length; !h[--c];);
								for (p = 0, n = ""; p <= c; n += u.charAt(h[p++]));
								n = x(n, a, u.charAt(0))
							}
							return n
						}
					}(), o = function() {
						function e(e, n, o) {
							var t, r, s, i, u = 0,
								l = e.length,
								a = n % p,
								c = n / p | 0;
							for (e = e.slice(); l--;) u = ((r = a * (s = e[l] % p) + (t = c * s + (i = e[l] / p | 0) * a) % p * p + u) / o | 0) + (t / p | 0) + c * i, e[l] = r % o;
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
							var a, c, h, m, p, _, v, j, y, b, w, O, x, A, E, N, I, R = t.s == r.s ? 1 : -1,
								S = t.c,
								P = r.c;
							if (!(S && S[0] && P && P[0])) return new $(t.s && r.s && (S ? !P || S[0] != P[0] : P) ? S && 0 == S[0] || !P ? 0 * R : R / 0 : NaN);
							for (y = (j = new $(R)).c = [], R = s + (c = t.e - r.e) + 1, u || (u = d, c = g(t.e / f) - g(r.e / f), R = R / f | 0), h = 0; P[h] == (S[h] || 0); h++);
							if (P[h] > (S[h] || 0) && c--, R < 0) y.push(1), m = !0;
							else {
								for (A = S.length, N = P.length, h = 0, R += 2, (p = l(u / (P[0] + 1))) > 1 && (P = e(P, p, u), S = e(S, p, u), N = P.length, A = S.length), x = N, w = (b = S.slice(0, N)).length; w < N; b[w++] = 0);
								I = P.slice(), I = [0].concat(I), E = P[0], P[1] >= u / 2 && E++;
								do {
									if (p = 0, (a = n(P, b, N, w)) < 0) {
										if (O = b[0], N != w && (O = O * u + (b[1] || 0)), (p = l(O / E)) > 1)
											for (p >= u && (p = u - 1), v = (_ = e(P, p, u)).length, w = b.length; 1 == n(_, b, v, w);) p--, o(_, N < v ? I : P, v, u), v = _.length, a = 1;
										else 0 == p && (a = p = 1), v = (_ = P.slice()).length;
										if (v < w && (_ = [0].concat(_)), o(b, _, w, u), w = b.length, -1 == a)
											for (; n(P, b, N, w) < 1;) p++, o(b, N < w ? I : P, w, u), w = b.length
									} else 0 === a && (p++, b = [0]);
									y[h++] = p, b[0] ? b[w++] = S[x] || 0 : (b = [S[x]], w = 1)
								} while ((x++ < A || null != b[0]) && R--);
								m = null != b[0], y[0] || y.splice(0, 1)
							}
							if (u == d) {
								for (h = 1, R = y[0]; R >= 10; R /= 10, h++);
								H(j, s + (j.e = h + c * f - 1) + 1, i, m)
							} else j.e = c, j.r = +m;
							return j
						}
					}(), A = /^(-?)0([xbo])(?=\w[\w.]*$)/i, E = /^([^.]+)\.$/, N = /^\.([^.]+)$/, I = /^-?(Infinity|NaN)$/, R = /^\s*\+(?=[\w.])|^\s+|\s+$/g, r = function(e, n, o, t) {
						var r, s = o ? n : n.replace(R, "");
						if (I.test(s)) e.s = isNaN(s) ? null : s < 0 ? -1 : 1, e.c = e.e = null;
						else {
							if (!o && (s = s.replace(A, (function(e, n, o) {
									return r = "x" == (o = o.toLowerCase()) ? 16 : "b" == o ? 2 : 8, t && t != r ? e : n
								})), t && (r = t, s = s.replace(E, "$1").replace(N, "0.$1")), n != s)) return new $(s, r);
							if ($.DEBUG) throw Error(a + "Not a" + (t ? " base " + t : "") + " number: " + n);
							e.c = e.e = e.s = null
						}
					}, S.absoluteValue = S.abs = function() {
						var e = new $(this);
						return e.s < 0 && (e.s = 1), e
					}, S.comparedTo = function(e, n) {
						return j(this, new $(e, n))
					}, S.decimalPlaces = S.dp = function(e, n) {
						var o, t, r, s = this;
						if (null != e) return y(e, 0, _), null == n ? n = F : y(n, 0, 8), H(new $(s), e + s.e + 1, n);
						if (!(o = s.c)) return null;
						if (t = ((r = o.length - 1) - g(this.e / f)) * f, r = o[r])
							for (; r % 10 == 0; r /= 10, t--);
						return t < 0 && (t = 0), t
					}, S.dividedBy = S.div = function(e, n) {
						return o(this, new $(e, n), C, F)
					}, S.dividedToIntegerBy = S.idiv = function(e, n) {
						return o(this, new $(e, n), 0, 1)
					}, S.exponentiatedBy = S.pow = function(e, n) {
						var o, t, r, s, i, c, d, h = this;
						if ((e = new $(e)).c && !e.isInteger()) throw Error(a + "Exponent not an integer: " + e);
						if (null != n && (n = new $(n)), s = e.e > 14, !h.c || !h.c[0] || 1 == h.c[0] && !h.e && 1 == h.c.length || !e.c || !e.c[0]) return d = new $(Math.pow(+h.valueOf(), s ? 2 - w(e) : +e)), n ? d.mod(n) : d;
						if (i = e.s < 0, n) {
							if (n.c ? !n.c[0] : !n.s) return new $(NaN);
							(t = !i && h.isInteger() && n.isInteger()) && (h = h.mod(n))
						} else {
							if (e.e > 9 && (h.e > 0 || h.e < -1 || (0 == h.e ? h.c[0] > 1 || s && h.c[1] >= 24e7 : h.c[0] < 8e13 || s && h.c[0] <= 9999975e7))) return r = h.s < 0 && w(e) ? -0 : 0, h.e > -1 && (r = 1 / r), new $(i ? 1 / r : r);
							B && (r = u(B / f + 2))
						}
						for (s ? (o = new $(.5), c = w(e)) : c = e % 2, i && (e.s = 1), d = new $(P);;) {
							if (c) {
								if (!(d = d.times(h)).c) break;
								r ? d.c.length > r && (d.c.length = r) : t && (d = d.mod(n))
							}
							if (s) {
								if (H(e = e.times(o), e.e + 1, 1), !e.c[0]) break;
								s = e.e > 14, c = w(e)
							} else {
								if (!(e = l(e / 2))) break;
								c = e % 2
							}
							h = h.times(h), r ? h.c && h.c.length > r && (h.c.length = r) : t && (h = h.mod(n))
						}
						return t ? d : (i && (d = P.div(d)), n ? d.mod(n) : r ? H(d, B, F, void 0) : d)
					}, S.integerValue = function(e) {
						var n = new $(this);
						return null == e ? e = F : y(e, 0, 8), H(n, n.e + 1, e)
					}, S.isEqualTo = S.eq = function(e, n) {
						return 0 === j(this, new $(e, n))
					}, S.isFinite = function() {
						return !!this.c
					}, S.isGreaterThan = S.gt = function(e, n) {
						return j(this, new $(e, n)) > 0
					}, S.isGreaterThanOrEqualTo = S.gte = function(e, n) {
						return 1 === (n = j(this, new $(e, n))) || 0 === n
					}, S.isInteger = function() {
						return !!this.c && g(this.e / f) > this.c.length - 2
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
						var o, t, r, s, i = this,
							u = i.s;
						if (n = (e = new $(e, n)).s, !u || !n) return new $(NaN);
						if (u != n) return e.s = -n, i.plus(e);
						var l = i.e / f,
							a = e.e / f,
							c = i.c,
							h = e.c;
						if (!l || !a) {
							if (!c || !h) return c ? (e.s = -n, e) : new $(h ? i : NaN);
							if (!c[0] || !h[0]) return h[0] ? (e.s = -n, e) : new $(c[0] ? i : 3 == F ? -0 : 0)
						}
						if (l = g(l), a = g(a), c = c.slice(), u = l - a) {
							for ((s = u < 0) ? (u = -u, r = c) : (a = l, r = h), r.reverse(), n = u; n--; r.push(0));
							r.reverse()
						} else
							for (t = (s = (u = c.length) < (n = h.length)) ? u : n, u = n = 0; n < t; n++)
								if (c[n] != h[n]) {
									s = c[n] < h[n];
									break
								} if (s && (r = c, c = h, h = r, e.s = -e.s), (n = (t = h.length) - (o = c.length)) > 0)
							for (; n--; c[o++] = 0);
						for (n = d - 1; t > u;) {
							if (c[--t] < h[t]) {
								for (o = t; o && !c[--o]; c[o] = n);
								--c[o], c[t] += d
							}
							c[t] -= h[t]
						}
						for (; 0 == c[0]; c.splice(0, 1), --a);
						return c[0] ? W(e, c, a) : (e.s = 3 == F ? -1 : 1, e.c = [e.e = 0], e)
					}, S.modulo = S.mod = function(e, n) {
						var t, r, s = this;
						return e = new $(e, n), !s.c || !e.s || e.c && !e.c[0] ? new $(NaN) : !e.c || s.c && !s.c[0] ? new $(s) : (9 == D ? (r = e.s, e.s = 1, t = o(s, e, 0, 3), e.s = r, t.s *= r) : t = o(s, e, 0, D), (e = s.minus(t.times(e))).c[0] || 1 != D || (e.s = s.s), e)
					}, S.multipliedBy = S.times = function(e, n) {
						var o, t, r, s, i, u, l, a, c, h, m, _, v, j, y, b = this,
							w = b.c,
							O = (e = new $(e, n)).c;
						if (!(w && O && w[0] && O[0])) return !b.s || !e.s || w && !w[0] && !O || O && !O[0] && !w ? e.c = e.e = e.s = null : (e.s *= b.s, w && O ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
						for (t = g(b.e / f) + g(e.e / f), e.s *= b.s, (l = w.length) < (h = O.length) && (v = w, w = O, O = v, r = l, l = h, h = r), r = l + h, v = []; r--; v.push(0));
						for (j = d, y = p, r = h; --r >= 0;) {
							for (o = 0, m = O[r] % y, _ = O[r] / y | 0, s = r + (i = l); s > r;) o = ((a = m * (a = w[--i] % y) + (u = _ * a + (c = w[i] / y | 0) * m) % y * y + v[s] + o) / j | 0) + (u / y | 0) + _ * c, v[s--] = a % j;
							v[s] = o
						}
						return o ? ++t : v.splice(0, 1), W(e, v, t)
					}, S.negated = function() {
						var e = new $(this);
						return e.s = -e.s || null, e
					}, S.plus = function(e, n) {
						var o, t = this,
							r = t.s;
						if (n = (e = new $(e, n)).s, !r || !n) return new $(NaN);
						if (r != n) return e.s = -n, t.minus(e);
						var s = t.e / f,
							i = e.e / f,
							u = t.c,
							l = e.c;
						if (!s || !i) {
							if (!u || !l) return new $(r / 0);
							if (!u[0] || !l[0]) return l[0] ? e : new $(u[0] ? t : 0 * r)
						}
						if (s = g(s), i = g(i), u = u.slice(), r = s - i) {
							for (r > 0 ? (i = s, o = l) : (r = -r, o = u), o.reverse(); r--; o.push(0));
							o.reverse()
						}
						for ((r = u.length) - (n = l.length) < 0 && (o = l, l = u, u = o, n = r), r = 0; n;) r = (u[--n] = u[n] + l[n] + r) / d | 0, u[n] = d === u[n] ? 0 : u[n] % d;
						return r && (u = [r].concat(u), ++i), W(e, u, i)
					}, S.precision = S.sd = function(e, n) {
						var o, t, r, s = this;
						if (null != e && e !== !!e) return y(e, 1, _), null == n ? n = F : y(n, 0, 8), H(new $(s), e, n);
						if (!(o = s.c)) return null;
						if (t = (r = o.length - 1) * f + 1, r = o[r]) {
							for (; r % 10 == 0; r /= 10, t--);
							for (r = o[0]; r >= 10; r /= 10, t++);
						}
						return e && s.e + 1 > t && (t = s.e + 1), t
					}, S.shiftedBy = function(e) {
						return y(e, -h, h), this.times("1e" + e)
					}, S.squareRoot = S.sqrt = function() {
						var e, n, t, r, s, i = this,
							u = i.c,
							l = i.s,
							a = i.e,
							c = C + 4,
							d = new $("0.5");
						if (1 !== l || !u || !u[0]) return new $(!l || l < 0 && (!u || u[0]) ? NaN : u ? i : 1 / 0);
						if (0 == (l = Math.sqrt(+i)) || l == 1 / 0 ? (((n = v(u)).length + a) % 2 == 0 && (n += "0"), l = Math.sqrt(n), a = g((a + 1) / 2) - (a < 0 || a % 2), t = new $(n = l == 1 / 0 ? "1e" + a : (n = l.toExponential()).slice(0, n.indexOf("e") + 1) + a)) : t = new $(l + ""), t.c[0])
							for ((l = (a = t.e) + c) < 3 && (l = 0);;)
								if (s = t, t = d.times(s.plus(o(i, s, c, 1))), v(s.c).slice(0, l) === (n = v(t.c)).slice(0, l)) {
									if (t.e < a && --l, "9999" != (n = n.slice(l - 3, l + 1)) && (r || "4999" != n)) {
										+n && (+n.slice(1) || "5" != n.charAt(0)) || (H(t, t.e + C + 2, 1), e = !t.times(t).eq(i));
										break
									}
									if (!r && (H(s, s.e + C + 2, 0), s.times(s).eq(i))) {
										t = s;
										break
									}
									c += 4, l += 4, r = 1
								} return H(t, t.e + C + 1, F, e)
					}, S.toExponential = function(e, n) {
						return null != e && (y(e, 0, _), e++), z(this, e, n, 1)
					}, S.toFixed = function(e, n) {
						return null != e && (y(e, 0, _), e = e + this.e + 1), z(this, e, n)
					}, S.toFormat = function(e, n) {
						var o = this.toFixed(e, n);
						if (this.c) {
							var t, r = o.split("."),
								s = +q.groupSize,
								i = +q.secondaryGroupSize,
								u = q.groupSeparator,
								l = r[0],
								a = r[1],
								c = this.s < 0,
								d = c ? l.slice(1) : l,
								f = d.length;
							if (i && (t = s, s = i, i = t, f -= t), s > 0 && f > 0) {
								for (t = f % s || s, l = d.substr(0, t); t < f; t += s) l += u + d.substr(t, s);
								i > 0 && (l += u + d.slice(t)), c && (l = "-" + l)
							}
							o = a ? l + q.decimalSeparator + ((i = +q.fractionGroupSize) ? a.replace(new RegExp("\\d{" + i + "}\\B", "g"), "$&" + q.fractionGroupSeparator) : a) : l
						}
						return o
					}, S.toFraction = function(e) {
						var n, t, r, s, i, u, l, c, d, h, p, _, g = this,
							j = g.c;
						if (null != e && (!(c = new $(e)).isInteger() && (c.c || 1 !== c.s) || c.lt(P))) throw Error(a + "Argument " + (c.isInteger() ? "out of range: " : "not an integer: ") + e);
						if (!j) return g.toString();
						for (t = new $(P), h = r = new $(P), s = d = new $(P), _ = v(j), u = t.e = _.length - g.e - 1, t.c[0] = m[(l = u % f) < 0 ? f + l : l], e = !e || c.comparedTo(t) > 0 ? u > 0 ? t : h : c, l = M, M = 1 / 0, c = new $(_), d.c[0] = 0; p = o(c, t, 0, 1), 1 != (i = r.plus(p.times(s))).comparedTo(e);) r = s, s = i, h = d.plus(p.times(i = h)), d = i, t = c.minus(p.times(i = t)), c = i;
						return i = o(e.minus(r), s, 0, 1), d = d.plus(i.times(h)), r = r.plus(i.times(s)), d.s = h.s = g.s, n = o(h, s, u *= 2, F).minus(g).abs().comparedTo(o(d, r, u, F).minus(g).abs()) < 1 ? [h.toString(), s.toString()] : [d.toString(), r.toString()], M = l, n
					}, S.toNumber = function() {
						return +this
					}, S.toPrecision = function(e, n) {
						return null != e && y(e, 1, _), z(this, e, n, 2)
					}, S.toString = function(e) {
						var n, o = this,
							r = o.s,
							s = o.e;
						return null === s ? r ? (n = "Infinity", r < 0 && (n = "-" + n)) : n = "NaN" : (n = v(o.c), null == e ? n = s <= L || s >= k ? O(n, s) : x(n, s, "0") : (y(e, 2, G.length, "Base"), n = t(x(n, s, "0"), 10, e, r, !0)), r < 0 && o.c[0] && (n = "-" + n)), n
					}, S.valueOf = S.toJSON = function() {
						var e, n = this,
							o = n.e;
						return null === o ? n.toString() : (e = v(n.c), e = o <= L || o >= k ? O(e, o) : x(e, o, "0"), n.s < 0 ? "-" + e : e)
					}, S._isBigNumber = !0, null != n && $.set(n), $
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
				c = function(e, n, o) {
					var r = {},
						u = s((function() {
							return !!i[e]() || "​" != "​" [e]()
						})),
						l = r[e] = u ? n(d) : i[e];
					o && (r[o] = l), t(t.P + t.F * u, "String", r)
				},
				d = c.trim = function(e, n) {
					return e = String(r(e)), 1 & n && (e = e.replace(l, "")), 2 & n && (e = e.replace(a, "")), e
				};
			e.exports = c
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
		"./node_modules/decode-uri-component/index.js": function(e, n, o) {
			"use strict";
			var t = new RegExp("%[a-f0-9]{2}", "gi"),
				r = new RegExp("(%[a-f0-9]{2})+", "gi");

			function s(e, n) {
				try {
					return decodeURIComponent(e.join(""))
				} catch (r) {}
				if (1 === e.length) return e;
				n = n || 1;
				var o = e.slice(0, n),
					t = e.slice(n);
				return Array.prototype.concat.call([], s(o), s(t))
			}

			function i(e) {
				try {
					return decodeURIComponent(e)
				} catch (r) {
					for (var n = e.match(t), o = 1; o < n.length; o++) n = (e = s(n, o).join("")).match(t);
					return e
				}
			}
			e.exports = function(e) {
				if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
				try {
					return e = e.replace(/\+/g, " "), decodeURIComponent(e)
				} catch (n) {
					return function(e) {
						for (var o = {
								"%FE%FF": "��",
								"%FF%FE": "��"
							}, t = r.exec(e); t;) {
							try {
								o[t[0]] = decodeURIComponent(t[0])
							} catch (n) {
								var s = i(t[0]);
								s !== t[0] && (o[t[0]] = s)
							}
							t = r.exec(e)
						}
						o["%C2"] = "�";
						for (var u = Object.keys(o), l = 0; l < u.length; l++) {
							var a = u[l];
							e = e.replace(new RegExp(a, "g"), o[a])
						}
						return e
					}(e)
				}
			}
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
				c = r;

			function d(e, n) {
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
				if (e[n] === o) return c(e);
				const t = l(e);
				return t[n] = a(o), c(t)
			}, n.set = n.assoc, n.dissoc = function(e, n) {
				const o = l(e);
				return delete o[n], c(o)
			}, n.unset = n.dissoc, n.assocIn = function e(n, o, r) {
				const s = o[0];
				return 1 === o.length ? t.assoc(n, s, r) : t.assoc(n, s, e(n[s] || {}, o.slice(1), r))
			}, n.setIn = n.assocIn, n.dissocIn = function e(n, o) {
				const r = o[0];
				return n.hasOwnProperty(r) ? 1 === o.length ? t.dissoc(n, r) : t.assoc(n, r, e(n[r], o.slice(1))) : n
			}, n.unsetIn = n.dissocIn, n.getIn = d, n.updateIn = function(e, n, o) {
				const r = d(e, n);
				return t.assocIn(e, n, o(r))
			}, ["push", "unshift", "pop", "shift", "reverse", "sort"].forEach(e => {
				n[e] = function(n, o) {
					const t = [...n];
					return t[e](a(o)), c(t)
				}, n[e].displayName = "icepick." + e
			}), n.splice = function(e, ...n) {
				const o = [...e],
					t = n.map(a);
				return o.splice.apply(o, t), c(o)
			}, n.slice = function(e, n, o) {
				const t = e.slice(n, o);
				return c(t)
			}, ["map", "filter"].forEach(e => {
				n[e] = function(n, o) {
					const t = o[e](n);
					return c(t)
				}, n[e].displayName = "icepick." + e
			}), n.extend = n.assign = function(e, ...n) {
				const o = n.reduce(f, e);
				return c(o)
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
		"./node_modules/lodash/_assignMergeValue.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseAssignValue.js"),
				r = o("./node_modules/lodash/eq.js");
			e.exports = function(e, n, o) {
				(void 0 === o || r(e[n], o)) && (void 0 !== o || n in e) || t(e, n, o)
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
			e.exports = function e(n, o, c, d, f) {
				n !== o && s(o, (function(s, l) {
					if (f || (f = new t), u(s)) i(n, o, l, c, e, d, f);
					else {
						var h = d ? d(a(n, l), s, l + "", n, o, f) : void 0;
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
				c = o("./node_modules/lodash/isArrayLikeObject.js"),
				d = o("./node_modules/lodash/isBuffer.js"),
				f = o("./node_modules/lodash/isFunction.js"),
				h = o("./node_modules/lodash/isObject.js"),
				m = o("./node_modules/lodash/isPlainObject.js"),
				p = o("./node_modules/lodash/isTypedArray.js"),
				_ = o("./node_modules/lodash/_safeGet.js"),
				g = o("./node_modules/lodash/toPlainObject.js");
			e.exports = function(e, n, o, v, j, y, b) {
				var w = _(e, o),
					O = _(n, o),
					x = b.get(O);
				if (x) t(e, o, x);
				else {
					var A = y ? y(w, O, o + "", e, n, b) : void 0,
						E = void 0 === A;
					if (E) {
						var N = a(O),
							I = !N && d(O),
							R = !N && !I && p(O);
						A = O, N || I || R ? a(w) ? A = w : c(w) ? A = i(w) : I ? (E = !1, A = r(O, !0)) : R ? (E = !1, A = s(O, !0)) : A = [] : m(O) || l(O) ? (A = w, l(w) ? A = g(w) : h(w) && !f(w) || (A = u(O))) : E = !1
					}
					E && (b.set(O, A), j(A, O, v, y, b), b.delete(O)), t(e, o, A)
				}
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
					for (var a = e[u], c = -1; ++c < i;) c != u && (l[u] = t(l[u] || a, e[c], n, o));
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
						for (var c = n[o], d = i(c), f = -1, h = d.length; ++f < h;) {
							var m = d[f],
								p = e[m];
							(void 0 === p || r(p, u[m]) && !l.call(e, m)) && (e[m] = c[m])
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
					c = s(a, i(n));
				return r(a, c).join("")
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
		"./node_modules/lodash/xorWith.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_arrayFilter.js"),
				r = o("./node_modules/lodash/_baseRest.js"),
				s = o("./node_modules/lodash/_baseXor.js"),
				i = o("./node_modules/lodash/isArrayLikeObject.js"),
				u = o("./node_modules/lodash/last.js"),
				l = r((function(e) {
					var n = u(e);
					return n = "function" == typeof n ? n : void 0, s(t(e, i), void 0, n)
				}));
			e.exports = l
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
//# sourceMappingURL=vendors~Governance~Reddit.dafde65beb1ce5ef7772.js.map