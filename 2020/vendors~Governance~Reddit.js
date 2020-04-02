// https://www.redditstatic.com/desktop2x/vendors~Governance~Reddit.e374f313fc2c95768afc.js
// Retrieved at 4/2/2020, 7:10:06 PM by Reddit Dataminer v1.0.0
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

				function v(e) {
					return /\*/.test(e)
				}
				var g = n.postMessage = function(e, n, o) {
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
					v(e) ? a = [t] : -1 === a.indexOf(e) && (y(t), a.push(e), c = l(a))
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
								return g(e, t, o.data, o.options)
							}));
							var s = new b(t, {
								detail: o.data
							});
							s.source = n.source, e.dispatchEvent(s)
						}
					}
				}
				var E = n.listen = function(e) {
					-1 === d.indexOf(e) && (d.push(e), f = u(d)), m || (p("message", O), m = !0)
				};
				n.stopListening = function(e) {
					var n = d.indexOf(e); - 1 !== n && (d.splice(n, 1), d.length ? f = u(d) : (_("message", O), m = !1))
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

				function v(e) {
					var n = 0 | e;
					return e > 0 || e === n ? n : n - 1
				}

				function g(e) {
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
					return v(e.e / f) == n && e.c[n] % 2 != 0
				}

				function O(e, n) {
					return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (n < 0 ? "e" : "e+") + n
				}

				function E(e, n, o) {
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
					var o, t, r, s, A, N, x, I, L, P = $.prototype = {
							constructor: $,
							toString: null,
							valueOf: null
						},
						M = new $(1),
						S = 20,
						R = 4,
						D = -7,
						k = 21,
						C = -1e7,
						B = 1e7,
						U = !1,
						T = 1,
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
						var o, s, u, a, d, m, p, _, v = this;
						if (!(v instanceof $)) return new $(e, n);
						if (null == n) {
							if (e instanceof $) return v.s = e.s, v.e = e.e, void(v.c = (e = e.c) ? e.slice() : e);
							if ((m = "number" == typeof e) && 0 * e == 0) {
								if (v.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
									for (a = 0, d = e; d >= 10; d /= 10, a++);
									return v.e = a, void(v.c = [e])
								}
								_ = e + ""
							} else {
								if (!i.test(_ = e + "")) return r(v, _, m);
								v.s = 45 == _.charCodeAt(0) ? (_ = _.slice(1), -1) : 1
							}(a = _.indexOf(".")) > -1 && (_ = _.replace(".", "")), (d = _.search(/e/i)) > 0 ? (a < 0 && (a = d), a += +_.slice(d + 1), _ = _.substring(0, d)) : a < 0 && (a = _.length)
						} else {
							if (y(n, 2, G.length, "Base"), _ = e + "", 10 == n) return W(v = new $(e instanceof $ ? e : _), S + v.e + 1, R);
							if (m = "number" == typeof e) {
								if (0 * e != 0) return r(v, _, m, n);
								if (v.s = 1 / e < 0 ? (_ = _.slice(1), -1) : 1, $.DEBUG && _.replace(/^0\.0*|\./, "").length > 15) throw Error(c + e);
								m = !1
							} else v.s = 45 === _.charCodeAt(0) ? (_ = _.slice(1), -1) : 1;
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
									return r(v, e + "", m, n)
								}(a = (_ = t(_, n, 10, v.s)).indexOf(".")) > - 1 ? _ = _.replace(".", "") : a = _.length
						}
						for (d = 0; 48 === _.charCodeAt(d); d++);
						for (p = _.length; 48 === _.charCodeAt(--p););
						if (_ = _.slice(d, ++p)) {
							if (p -= d, m && $.DEBUG && p > 15 && (e > h || e !== l(e))) throw Error(c + v.s * e);
							if ((a = a - d - 1) > B) v.c = v.e = null;
							else if (a < C) v.c = [v.e = 0];
							else {
								if (v.e = a, v.c = [], d = (a + 1) % f, a < 0 && (d += f), d < p) {
									for (d && v.c.push(+_.slice(0, d)), p -= f; d < p;) v.c.push(+_.slice(d, d += f));
									_ = _.slice(d), d = f - _.length
								} else d -= p;
								for (; d--; _ += "0");
								v.c.push(+_)
							}
						} else v.c = [v.e = 0]
					}

					function V(e, n, o, t) {
						var r, s, i, u, l;
						if (null == o ? o = R : y(o, 0, 8), !e.c) return e.toString();
						if (r = e.c[0], i = e.e, null == n) l = g(e.c), l = 1 == t || 2 == t && i <= D ? O(l, i) : E(l, i, "0");
						else if (s = (e = W(new $(e), n, o)).e, u = (l = g(e.c)).length, 1 == t || 2 == t && (n <= s || s <= D)) {
							for (; u < n; l += "0", u++);
							l = O(l, s)
						} else if (n -= i, l = E(l, s, "0"), s + 1 > u) {
							if (--n > 0)
								for (l += "."; n--; l += "0");
						} else if ((n += s - u) > 0)
							for (s + 1 == u && (l += "."); n--; l += "0");
						return e.s < 0 && r ? "-" + l : l
					}

					function z(e, n) {
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

					function H(e, n, o) {
						for (var t = 1, r = n.length; !n[--r]; n.pop());
						for (r = n[0]; r >= 10; r /= 10, t++);
						return (o = t + o * f - 1) > B ? e.c = e.e = null : o < C ? e.c = [e.e = 0] : (e.e = o, e.c = n), e
					}

					function W(e, n, o, t) {
						var r, s, i, a, c, h, p, _ = e.c,
							v = m;
						if (_) {
							e: {
								for (r = 1, a = _[0]; a >= 10; a /= 10, r++);
								if ((s = n - r) < 0) s += f,
								i = n,
								p = (c = _[h = 0]) / v[r - i - 1] % 10 | 0;
								else if ((h = u((s + 1) / f)) >= _.length) {
									if (!t) break e;
									for (; _.length <= h; _.push(0));
									c = p = 0, r = 1, i = (s %= f) - f + 1
								} else {
									for (c = a = _[h], r = 1; a >= 10; a /= 10, r++);
									p = (i = (s %= f) - f + r) < 0 ? 0 : c / v[r - i - 1] % 10 | 0
								}
								if (t = t || n < 0 || null != _[h + 1] || (i < 0 ? c : c % v[r - i - 1]), t = o < 4 ? (p || t) && (0 == o || o == (e.s < 0 ? 3 : 2)) : p > 5 || 5 == p && (4 == o || t || 6 == o && (s > 0 ? i > 0 ? c / v[r - i] : 0 : _[h - 1]) % 10 & 1 || o == (e.s < 0 ? 8 : 7)), n < 1 || !_[0]) return _.length = 0,
								t ? (n -= e.e + 1, _[0] = v[(f - n % f) % f], e.e = -n || 0) : _[0] = e.e = 0,
								e;
								if (0 == s ? (_.length = h, a = 1, h--) : (_.length = h + 1, a = v[f - s], _[h] = i > 0 ? l(c / v[r - i] % v[i]) * a : 0), t)
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
							e.e > B ? e.c = e.e = null : e.e < C && (e.c = [e.e = 0])
						}
						return e
					}
					return $.clone = e, $.ROUND_UP = 0, $.ROUND_DOWN = 1, $.ROUND_CEIL = 2, $.ROUND_FLOOR = 3, $.ROUND_HALF_UP = 4, $.ROUND_HALF_DOWN = 5, $.ROUND_HALF_EVEN = 6, $.ROUND_HALF_CEIL = 7, $.ROUND_HALF_FLOOR = 8, $.EUCLID = 9, $.config = $.set = function(e) {
						var n, o;
						if (null != e) {
							if ("object" != typeof e) throw Error(a + "Object expected: " + e);
							if (e.hasOwnProperty(n = "DECIMAL_PLACES") && (y(o = e[n], 0, _, n), S = o), e.hasOwnProperty(n = "ROUNDING_MODE") && (y(o = e[n], 0, 8, n), R = o), e.hasOwnProperty(n = "EXPONENTIAL_AT") && (b(o = e[n]) ? (y(o[0], -_, 0, n), y(o[1], 0, _, n), D = o[0], k = o[1]) : (y(o, -_, _, n), D = -(k = o < 0 ? -o : o))), e.hasOwnProperty(n = "RANGE"))
								if (b(o = e[n])) y(o[0], -_, -1, n), y(o[1], 1, _, n), C = o[0], B = o[1];
								else {
									if (y(o, -_, _, n), !o) throw Error(a + n + " cannot be zero: " + o);
									C = -(B = o < 0 ? -o : o)
								} if (e.hasOwnProperty(n = "CRYPTO")) {
								if ((o = e[n]) !== !!o) throw Error(a + n + " not true or false: " + o);
								if (o) {
									if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw U = !o, Error(a + "crypto unavailable");
									U = o
								} else U = o
							}
							if (e.hasOwnProperty(n = "MODULO_MODE") && (y(o = e[n], 0, 9, n), T = o), e.hasOwnProperty(n = "POW_PRECISION") && (y(o = e[n], 0, _, n), F = o), e.hasOwnProperty(n = "FORMAT")) {
								if ("object" != typeof(o = e[n])) throw Error(a + n + " not an object: " + o);
								q = o
							}
							if (e.hasOwnProperty(n = "ALPHABET")) {
								if ("string" != typeof(o = e[n]) || /^.$|\.|(.).*\1/.test(o)) throw Error(a + n + " invalid: " + o);
								G = o
							}
						}
						return {
							DECIMAL_PLACES: S,
							ROUNDING_MODE: R,
							EXPONENTIAL_AT: [D, k],
							RANGE: [C, B],
							CRYPTO: U,
							MODULO_MODE: T,
							POW_PRECISION: F,
							FORMAT: q,
							ALPHABET: G
						}
					}, $.isBigNumber = function(e) {
						return e instanceof $ || e && !0 === e._isBigNumber || !1
					}, $.maximum = $.max = function() {
						return z(arguments, P.lt)
					}, $.minimum = $.min = function() {
						return z(arguments, P.gt)
					}, $.random = (s = 9007199254740992 * Math.random() & 2097151 ? function() {
						return l(9007199254740992 * Math.random())
					} : function() {
						return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
					}, function(e) {
						var n, o, t, r, i, c = 0,
							d = [],
							h = new $(M);
						if (null == e ? e = S : y(e, 0, _), r = u(e / f), U)
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
								_ = S,
								v = R;
							for (p >= 0 && (c = F, F = 0, n = n.replace(".", ""), f = (m = new $(t)).pow(n.length - p), F = c, m.c = e(E(g(f.c), f.e, "0"), 10, r, "0123456789"), m.e = m.c.length), a = c = (h = e(n, t, r, i ? (u = G, "0123456789") : (u = "0123456789", G))).length; 0 == h[--c]; h.pop());
							if (!h[0]) return u.charAt(0);
							if (p < 0 ? --a : (f.c = h, f.e = a, f.s = s, h = (f = o(f, m, _, v, r)).c, d = f.r, a = f.e), p = h[l = a + _ + 1], c = r / 2, d = d || l < 0 || null != h[l + 1], d = v < 4 ? (null != p || d) && (0 == v || v == (f.s < 0 ? 3 : 2)) : p > c || p == c && (4 == v || d || 6 == v && 1 & h[l - 1] || v == (f.s < 0 ? 8 : 7)), l < 1 || !h[0]) n = d ? E(u.charAt(1), -_, u.charAt(0)) : u.charAt(0);
							else {
								if (h.length = l, d)
									for (--r; ++h[--l] > r;) h[l] = 0, l || (++a, h = [1].concat(h));
								for (c = h.length; !h[--c];);
								for (p = 0, n = ""; p <= c; n += u.charAt(h[p++]));
								n = E(n, a, u.charAt(0))
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
							var a, c, h, m, p, _, g, j, y, b, w, O, E, A, N, x, I, L = t.s == r.s ? 1 : -1,
								P = t.c,
								M = r.c;
							if (!(P && P[0] && M && M[0])) return new $(t.s && r.s && (P ? !M || P[0] != M[0] : M) ? P && 0 == P[0] || !M ? 0 * L : L / 0 : NaN);
							for (y = (j = new $(L)).c = [], L = s + (c = t.e - r.e) + 1, u || (u = d, c = v(t.e / f) - v(r.e / f), L = L / f | 0), h = 0; M[h] == (P[h] || 0); h++);
							if (M[h] > (P[h] || 0) && c--, L < 0) y.push(1), m = !0;
							else {
								for (A = P.length, x = M.length, h = 0, L += 2, (p = l(u / (M[0] + 1))) > 1 && (M = e(M, p, u), P = e(P, p, u), x = M.length, A = P.length), E = x, w = (b = P.slice(0, x)).length; w < x; b[w++] = 0);
								I = M.slice(), I = [0].concat(I), N = M[0], M[1] >= u / 2 && N++;
								do {
									if (p = 0, (a = n(M, b, x, w)) < 0) {
										if (O = b[0], x != w && (O = O * u + (b[1] || 0)), (p = l(O / N)) > 1)
											for (p >= u && (p = u - 1), g = (_ = e(M, p, u)).length, w = b.length; 1 == n(_, b, g, w);) p--, o(_, x < g ? I : M, g, u), g = _.length, a = 1;
										else 0 == p && (a = p = 1), g = (_ = M.slice()).length;
										if (g < w && (_ = [0].concat(_)), o(b, _, w, u), w = b.length, -1 == a)
											for (; n(M, b, x, w) < 1;) p++, o(b, x < w ? I : M, w, u), w = b.length
									} else 0 === a && (p++, b = [0]);
									y[h++] = p, b[0] ? b[w++] = P[E] || 0 : (b = [P[E]], w = 1)
								} while ((E++ < A || null != b[0]) && L--);
								m = null != b[0], y[0] || y.splice(0, 1)
							}
							if (u == d) {
								for (h = 1, L = y[0]; L >= 10; L /= 10, h++);
								W(j, s + (j.e = h + c * f - 1) + 1, i, m)
							} else j.e = c, j.r = +m;
							return j
						}
					}(), A = /^(-?)0([xbo])(?=\w[\w.]*$)/i, N = /^([^.]+)\.$/, x = /^\.([^.]+)$/, I = /^-?(Infinity|NaN)$/, L = /^\s*\+(?=[\w.])|^\s+|\s+$/g, r = function(e, n, o, t) {
						var r, s = o ? n : n.replace(L, "");
						if (I.test(s)) e.s = isNaN(s) ? null : s < 0 ? -1 : 1, e.c = e.e = null;
						else {
							if (!o && (s = s.replace(A, (function(e, n, o) {
									return r = "x" == (o = o.toLowerCase()) ? 16 : "b" == o ? 2 : 8, t && t != r ? e : n
								})), t && (r = t, s = s.replace(N, "$1").replace(x, "0.$1")), n != s)) return new $(s, r);
							if ($.DEBUG) throw Error(a + "Not a" + (t ? " base " + t : "") + " number: " + n);
							e.c = e.e = e.s = null
						}
					}, P.absoluteValue = P.abs = function() {
						var e = new $(this);
						return e.s < 0 && (e.s = 1), e
					}, P.comparedTo = function(e, n) {
						return j(this, new $(e, n))
					}, P.decimalPlaces = P.dp = function(e, n) {
						var o, t, r, s = this;
						if (null != e) return y(e, 0, _), null == n ? n = R : y(n, 0, 8), W(new $(s), e + s.e + 1, n);
						if (!(o = s.c)) return null;
						if (t = ((r = o.length - 1) - v(this.e / f)) * f, r = o[r])
							for (; r % 10 == 0; r /= 10, t--);
						return t < 0 && (t = 0), t
					}, P.dividedBy = P.div = function(e, n) {
						return o(this, new $(e, n), S, R)
					}, P.dividedToIntegerBy = P.idiv = function(e, n) {
						return o(this, new $(e, n), 0, 1)
					}, P.exponentiatedBy = P.pow = function(e, n) {
						var o, t, r, s, i, c, d, h = this;
						if ((e = new $(e)).c && !e.isInteger()) throw Error(a + "Exponent not an integer: " + e);
						if (null != n && (n = new $(n)), s = e.e > 14, !h.c || !h.c[0] || 1 == h.c[0] && !h.e && 1 == h.c.length || !e.c || !e.c[0]) return d = new $(Math.pow(+h.valueOf(), s ? 2 - w(e) : +e)), n ? d.mod(n) : d;
						if (i = e.s < 0, n) {
							if (n.c ? !n.c[0] : !n.s) return new $(NaN);
							(t = !i && h.isInteger() && n.isInteger()) && (h = h.mod(n))
						} else {
							if (e.e > 9 && (h.e > 0 || h.e < -1 || (0 == h.e ? h.c[0] > 1 || s && h.c[1] >= 24e7 : h.c[0] < 8e13 || s && h.c[0] <= 9999975e7))) return r = h.s < 0 && w(e) ? -0 : 0, h.e > -1 && (r = 1 / r), new $(i ? 1 / r : r);
							F && (r = u(F / f + 2))
						}
						for (s ? (o = new $(.5), c = w(e)) : c = e % 2, i && (e.s = 1), d = new $(M);;) {
							if (c) {
								if (!(d = d.times(h)).c) break;
								r ? d.c.length > r && (d.c.length = r) : t && (d = d.mod(n))
							}
							if (s) {
								if (W(e = e.times(o), e.e + 1, 1), !e.c[0]) break;
								s = e.e > 14, c = w(e)
							} else {
								if (!(e = l(e / 2))) break;
								c = e % 2
							}
							h = h.times(h), r ? h.c && h.c.length > r && (h.c.length = r) : t && (h = h.mod(n))
						}
						return t ? d : (i && (d = M.div(d)), n ? d.mod(n) : r ? W(d, F, R, void 0) : d)
					}, P.integerValue = function(e) {
						var n = new $(this);
						return null == e ? e = R : y(e, 0, 8), W(n, n.e + 1, e)
					}, P.isEqualTo = P.eq = function(e, n) {
						return 0 === j(this, new $(e, n))
					}, P.isFinite = function() {
						return !!this.c
					}, P.isGreaterThan = P.gt = function(e, n) {
						return j(this, new $(e, n)) > 0
					}, P.isGreaterThanOrEqualTo = P.gte = function(e, n) {
						return 1 === (n = j(this, new $(e, n))) || 0 === n
					}, P.isInteger = function() {
						return !!this.c && v(this.e / f) > this.c.length - 2
					}, P.isLessThan = P.lt = function(e, n) {
						return j(this, new $(e, n)) < 0
					}, P.isLessThanOrEqualTo = P.lte = function(e, n) {
						return -1 === (n = j(this, new $(e, n))) || 0 === n
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
						return c[0] ? H(e, c, a) : (e.s = 3 == R ? -1 : 1, e.c = [e.e = 0], e)
					}, P.modulo = P.mod = function(e, n) {
						var t, r, s = this;
						return e = new $(e, n), !s.c || !e.s || e.c && !e.c[0] ? new $(NaN) : !e.c || s.c && !s.c[0] ? new $(s) : (9 == T ? (r = e.s, e.s = 1, t = o(s, e, 0, 3), e.s = r, t.s *= r) : t = o(s, e, 0, T), (e = s.minus(t.times(e))).c[0] || 1 != T || (e.s = s.s), e)
					}, P.multipliedBy = P.times = function(e, n) {
						var o, t, r, s, i, u, l, a, c, h, m, _, g, j, y, b = this,
							w = b.c,
							O = (e = new $(e, n)).c;
						if (!(w && O && w[0] && O[0])) return !b.s || !e.s || w && !w[0] && !O || O && !O[0] && !w ? e.c = e.e = e.s = null : (e.s *= b.s, w && O ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
						for (t = v(b.e / f) + v(e.e / f), e.s *= b.s, (l = w.length) < (h = O.length) && (g = w, w = O, O = g, r = l, l = h, h = r), r = l + h, g = []; r--; g.push(0));
						for (j = d, y = p, r = h; --r >= 0;) {
							for (o = 0, m = O[r] % y, _ = O[r] / y | 0, s = r + (i = l); s > r;) o = ((a = m * (a = w[--i] % y) + (u = _ * a + (c = w[i] / y | 0) * m) % y * y + g[s] + o) / j | 0) + (u / y | 0) + _ * c, g[s--] = a % j;
							g[s] = o
						}
						return o ? ++t : g.splice(0, 1), H(e, g, t)
					}, P.negated = function() {
						var e = new $(this);
						return e.s = -e.s || null, e
					}, P.plus = function(e, n) {
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
						if (s = v(s), i = v(i), u = u.slice(), r = s - i) {
							for (r > 0 ? (i = s, o = l) : (r = -r, o = u), o.reverse(); r--; o.push(0));
							o.reverse()
						}
						for ((r = u.length) - (n = l.length) < 0 && (o = l, l = u, u = o, n = r), r = 0; n;) r = (u[--n] = u[n] + l[n] + r) / d | 0, u[n] = d === u[n] ? 0 : u[n] % d;
						return r && (u = [r].concat(u), ++i), H(e, u, i)
					}, P.precision = P.sd = function(e, n) {
						var o, t, r, s = this;
						if (null != e && e !== !!e) return y(e, 1, _), null == n ? n = R : y(n, 0, 8), W(new $(s), e, n);
						if (!(o = s.c)) return null;
						if (t = (r = o.length - 1) * f + 1, r = o[r]) {
							for (; r % 10 == 0; r /= 10, t--);
							for (r = o[0]; r >= 10; r /= 10, t++);
						}
						return e && s.e + 1 > t && (t = s.e + 1), t
					}, P.shiftedBy = function(e) {
						return y(e, -h, h), this.times("1e" + e)
					}, P.squareRoot = P.sqrt = function() {
						var e, n, t, r, s, i = this,
							u = i.c,
							l = i.s,
							a = i.e,
							c = S + 4,
							d = new $("0.5");
						if (1 !== l || !u || !u[0]) return new $(!l || l < 0 && (!u || u[0]) ? NaN : u ? i : 1 / 0);
						if (0 == (l = Math.sqrt(+i)) || l == 1 / 0 ? (((n = g(u)).length + a) % 2 == 0 && (n += "0"), l = Math.sqrt(n), a = v((a + 1) / 2) - (a < 0 || a % 2), t = new $(n = l == 1 / 0 ? "1e" + a : (n = l.toExponential()).slice(0, n.indexOf("e") + 1) + a)) : t = new $(l + ""), t.c[0])
							for ((l = (a = t.e) + c) < 3 && (l = 0);;)
								if (s = t, t = d.times(s.plus(o(i, s, c, 1))), g(s.c).slice(0, l) === (n = g(t.c)).slice(0, l)) {
									if (t.e < a && --l, "9999" != (n = n.slice(l - 3, l + 1)) && (r || "4999" != n)) {
										+n && (+n.slice(1) || "5" != n.charAt(0)) || (W(t, t.e + S + 2, 1), e = !t.times(t).eq(i));
										break
									}
									if (!r && (W(s, s.e + S + 2, 0), s.times(s).eq(i))) {
										t = s;
										break
									}
									c += 4, l += 4, r = 1
								} return W(t, t.e + S + 1, R, e)
					}, P.toExponential = function(e, n) {
						return null != e && (y(e, 0, _), e++), V(this, e, n, 1)
					}, P.toFixed = function(e, n) {
						return null != e && (y(e, 0, _), e = e + this.e + 1), V(this, e, n)
					}, P.toFormat = function(e, n) {
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
					}, P.toFraction = function(e) {
						var n, t, r, s, i, u, l, c, d, h, p, _, v = this,
							j = v.c;
						if (null != e && (!(c = new $(e)).isInteger() && (c.c || 1 !== c.s) || c.lt(M))) throw Error(a + "Argument " + (c.isInteger() ? "out of range: " : "not an integer: ") + e);
						if (!j) return v.toString();
						for (t = new $(M), h = r = new $(M), s = d = new $(M), _ = g(j), u = t.e = _.length - v.e - 1, t.c[0] = m[(l = u % f) < 0 ? f + l : l], e = !e || c.comparedTo(t) > 0 ? u > 0 ? t : h : c, l = B, B = 1 / 0, c = new $(_), d.c[0] = 0; p = o(c, t, 0, 1), 1 != (i = r.plus(p.times(s))).comparedTo(e);) r = s, s = i, h = d.plus(p.times(i = h)), d = i, t = c.minus(p.times(i = t)), c = i;
						return i = o(e.minus(r), s, 0, 1), d = d.plus(i.times(h)), r = r.plus(i.times(s)), d.s = h.s = v.s, n = o(h, s, u *= 2, R).minus(v).abs().comparedTo(o(d, r, u, R).minus(v).abs()) < 1 ? [h.toString(), s.toString()] : [d.toString(), r.toString()], B = l, n
					}, P.toNumber = function() {
						return +this
					}, P.toPrecision = function(e, n) {
						return null != e && y(e, 1, _), V(this, e, n, 2)
					}, P.toString = function(e) {
						var n, o = this,
							r = o.s,
							s = o.e;
						return null === s ? r ? (n = "Infinity", r < 0 && (n = "-" + n)) : n = "NaN" : (n = g(o.c), null == e ? n = s <= D || s >= k ? O(n, s) : E(n, s, "0") : (y(e, 2, G.length, "Base"), n = t(E(n, s, "0"), 10, e, r, !0)), r < 0 && o.c[0] && (n = "-" + n)), n
					}, P.valueOf = P.toJSON = function() {
						var e, n = this,
							o = n.e;
						return null === o ? n.toString() : (e = g(n.c), e = o <= D || o >= k ? O(e, o) : E(e, o, "0"), n.s < 0 ? "-" + e : e)
					}, P._isBigNumber = !0, null != n && $.set(n), $
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
				v = o("./node_modules/lodash/toPlainObject.js");
			e.exports = function(e, n, o, g, j, y, b) {
				var w = _(e, o),
					O = _(n, o),
					E = b.get(O);
				if (E) t(e, o, E);
				else {
					var A = y ? y(w, O, o + "", e, n, b) : void 0,
						N = void 0 === A;
					if (N) {
						var x = a(O),
							I = !x && d(O),
							L = !x && !I && p(O);
						A = O, x || I || L ? a(w) ? A = w : c(w) ? A = i(w) : I ? (N = !1, A = r(O, !0)) : L ? (N = !1, A = s(O, !0)) : A = [] : m(O) || l(O) ? (A = w, l(w) ? A = v(w) : h(w) && !f(w) || (A = u(O))) : N = !1
					}
					N && (b.set(O, A), j(A, O, g, y, b), b.delete(O)), t(e, o, A)
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
		"./node_modules/lodash/_createAssigner.js": function(e, n, o) {
			var t = o("./node_modules/lodash/_baseRest.js"),
				r = o("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e) {
				return t((function(n, o) {
					var t = -1,
						s = o.length,
						i = s > 1 ? o[s - 1] : void 0,
						u = s > 2 ? o[2] : void 0;
					for (i = e.length > 3 && "function" == typeof i ? (s--, i) : void 0, u && r(o[0], o[1], u) && (i = s < 3 ? void 0 : i, s = 1), n = Object(n); ++t < s;) {
						var l = o[t];
						l && e(n, l, t, i)
					}
					return n
				}))
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
			var t = o("./node_modules/lodash/_baseIteratee.js"),
				r = o("./node_modules/lodash/negate.js"),
				s = o("./node_modules/lodash/pickBy.js");
			e.exports = function(e, n) {
				return s(e, r(t(n)))
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
		}
	}
]);
//# sourceMappingURL=vendors~Governance~Reddit.e374f313fc2c95768afc.js.map