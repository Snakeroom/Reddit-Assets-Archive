// https://www.redditstatic.com/desktop2x/vendors~Governance~Reddit.a799ad02e412e4826d64.js
// Retrieved at 3/11/2020, 3:10:05 PM by Reddit Dataminer v1.0.0
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

				function p(n, o, r) {
					e.addEventListener ? e.addEventListener(n, o, r) : e.attachEvent && e.attachEvent("on" + n, o)
				}

				function _(n, o) {
					e.removeEventListener ? e.removeEventListener(n, o) : e.detachEvent && e.detachEvent("on" + n, o)
				}

				function g(e) {
					return /\*/.test(e)
				}
				var v = n.postMessage = function(e, n, o) {
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
						return p(n, t), {
							off: function() {
								_(n, t)
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
					g(e) ? a = [r] : -1 === a.indexOf(e) && (b(r), a.push(e), c = l(a))
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
								return v(e, r, o.data, o.options)
							}));
							var s = new y(r, {
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
					p = 1e7,
					_ = 1e9;

				function g(e) {
					var n = 0 | e;
					return e > 0 || e === n ? n : n - 1
				}

				function v(e) {
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
					return g(e.e / f) == n && e.c[n] % 2 != 0
				}

				function O(e, n) {
					return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (n < 0 ? "e" : "e+") + n
				}

				function x(e, n, o) {
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
					var o, r, t, s, A, E, I, N, S, R = $.prototype = {
							constructor: $,
							toString: null,
							valueOf: null
						},
						C = new $(1),
						L = 20,
						P = 4,
						F = -7,
						k = 21,
						M = -1e7,
						U = 1e7,
						D = !1,
						T = 1,
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
								if (!i.test(_ = e + "")) return t(g, _, m);
								g.s = 45 == _.charCodeAt(0) ? (_ = _.slice(1), -1) : 1
							}(a = _.indexOf(".")) > -1 && (_ = _.replace(".", "")), (d = _.search(/e/i)) > 0 ? (a < 0 && (a = d), a += +_.slice(d + 1), _ = _.substring(0, d)) : a < 0 && (a = _.length)
						} else {
							if (b(n, 2, G.length, "Base"), _ = e + "", 10 == n) return W(g = new $(e instanceof $ ? e : _), L + g.e + 1, P);
							if (m = "number" == typeof e) {
								if (0 * e != 0) return t(g, _, m, n);
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
									return t(g, e + "", m, n)
								}(a = (_ = r(_, n, 10, g.s)).indexOf(".")) > - 1 ? _ = _.replace(".", "") : a = _.length
						}
						for (d = 0; 48 === _.charCodeAt(d); d++);
						for (p = _.length; 48 === _.charCodeAt(--p););
						if (_ = _.slice(d, ++p)) {
							if (p -= d, m && $.DEBUG && p > 15 && (e > h || e !== l(e))) throw Error(c + g.s * e);
							if ((a = a - d - 1) > U) g.c = g.e = null;
							else if (a < M) g.c = [g.e = 0];
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

					function z(e, n, o, r) {
						var t, s, i, u, l;
						if (null == o ? o = P : b(o, 0, 8), !e.c) return e.toString();
						if (t = e.c[0], i = e.e, null == n) l = v(e.c), l = 1 == r || 2 == r && i <= F ? O(l, i) : x(l, i, "0");
						else if (s = (e = W(new $(e), n, o)).e, u = (l = v(e.c)).length, 1 == r || 2 == r && (n <= s || s <= F)) {
							for (; u < n; l += "0", u++);
							l = O(l, s)
						} else if (n -= i, l = x(l, s, "0"), s + 1 > u) {
							if (--n > 0)
								for (l += "."; n--; l += "0");
						} else if ((n += s - u) > 0)
							for (s + 1 == u && (l += "."); n--; l += "0");
						return e.s < 0 && t ? "-" + l : l
					}

					function V(e, n) {
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

					function H(e, n, o) {
						for (var r = 1, t = n.length; !n[--t]; n.pop());
						for (t = n[0]; t >= 10; t /= 10, r++);
						return (o = r + o * f - 1) > U ? e.c = e.e = null : o < M ? e.c = [e.e = 0] : (e.e = o, e.c = n), e
					}

					function W(e, n, o, r) {
						var t, s, i, a, c, h, p, _ = e.c,
							g = m;
						if (_) {
							e: {
								for (t = 1, a = _[0]; a >= 10; a /= 10, t++);
								if ((s = n - t) < 0) s += f,
								i = n,
								p = (c = _[h = 0]) / g[t - i - 1] % 10 | 0;
								else if ((h = u((s + 1) / f)) >= _.length) {
									if (!r) break e;
									for (; _.length <= h; _.push(0));
									c = p = 0, t = 1, i = (s %= f) - f + 1
								} else {
									for (c = a = _[h], t = 1; a >= 10; a /= 10, t++);
									p = (i = (s %= f) - f + t) < 0 ? 0 : c / g[t - i - 1] % 10 | 0
								}
								if (r = r || n < 0 || null != _[h + 1] || (i < 0 ? c : c % g[t - i - 1]), r = o < 4 ? (p || r) && (0 == o || o == (e.s < 0 ? 3 : 2)) : p > 5 || 5 == p && (4 == o || r || 6 == o && (s > 0 ? i > 0 ? c / g[t - i] : 0 : _[h - 1]) % 10 & 1 || o == (e.s < 0 ? 8 : 7)), n < 1 || !_[0]) return _.length = 0,
								r ? (n -= e.e + 1, _[0] = g[(f - n % f) % f], e.e = -n || 0) : _[0] = e.e = 0,
								e;
								if (0 == s ? (_.length = h, a = 1, h--) : (_.length = h + 1, a = g[f - s], _[h] = i > 0 ? l(c / g[t - i] % g[i]) * a : 0), r)
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
							e.e > U ? e.c = e.e = null : e.e < M && (e.c = [e.e = 0])
						}
						return e
					}
					return $.clone = e, $.ROUND_UP = 0, $.ROUND_DOWN = 1, $.ROUND_CEIL = 2, $.ROUND_FLOOR = 3, $.ROUND_HALF_UP = 4, $.ROUND_HALF_DOWN = 5, $.ROUND_HALF_EVEN = 6, $.ROUND_HALF_CEIL = 7, $.ROUND_HALF_FLOOR = 8, $.EUCLID = 9, $.config = $.set = function(e) {
						var n, o;
						if (null != e) {
							if ("object" != typeof e) throw Error(a + "Object expected: " + e);
							if (e.hasOwnProperty(n = "DECIMAL_PLACES") && (b(o = e[n], 0, _, n), L = o), e.hasOwnProperty(n = "ROUNDING_MODE") && (b(o = e[n], 0, 8, n), P = o), e.hasOwnProperty(n = "EXPONENTIAL_AT") && (y(o = e[n]) ? (b(o[0], -_, 0, n), b(o[1], 0, _, n), F = o[0], k = o[1]) : (b(o, -_, _, n), F = -(k = o < 0 ? -o : o))), e.hasOwnProperty(n = "RANGE"))
								if (y(o = e[n])) b(o[0], -_, -1, n), b(o[1], 1, _, n), M = o[0], U = o[1];
								else {
									if (b(o, -_, _, n), !o) throw Error(a + n + " cannot be zero: " + o);
									M = -(U = o < 0 ? -o : o)
								} if (e.hasOwnProperty(n = "CRYPTO")) {
								if ((o = e[n]) !== !!o) throw Error(a + n + " not true or false: " + o);
								if (o) {
									if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw D = !o, Error(a + "crypto unavailable");
									D = o
								} else D = o
							}
							if (e.hasOwnProperty(n = "MODULO_MODE") && (b(o = e[n], 0, 9, n), T = o), e.hasOwnProperty(n = "POW_PRECISION") && (b(o = e[n], 0, _, n), B = o), e.hasOwnProperty(n = "FORMAT")) {
								if ("object" != typeof(o = e[n])) throw Error(a + n + " not an object: " + o);
								q = o
							}
							if (e.hasOwnProperty(n = "ALPHABET")) {
								if ("string" != typeof(o = e[n]) || /^.$|\.|(.).*\1/.test(o)) throw Error(a + n + " invalid: " + o);
								G = o
							}
						}
						return {
							DECIMAL_PLACES: L,
							ROUNDING_MODE: P,
							EXPONENTIAL_AT: [F, k],
							RANGE: [M, U],
							CRYPTO: D,
							MODULO_MODE: T,
							POW_PRECISION: B,
							FORMAT: q,
							ALPHABET: G
						}
					}, $.isBigNumber = function(e) {
						return e instanceof $ || e && !0 === e._isBigNumber || !1
					}, $.maximum = $.max = function() {
						return V(arguments, R.lt)
					}, $.minimum = $.min = function() {
						return V(arguments, R.gt)
					}, $.random = (s = 9007199254740992 * Math.random() & 2097151 ? function() {
						return l(9007199254740992 * Math.random())
					} : function() {
						return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
					}, function(e) {
						var n, o, r, t, i, c = 0,
							d = [],
							h = new $(C);
						if (null == e ? e = L : b(e, 0, _), t = u(e / f), D)
							if (crypto.getRandomValues) {
								for (n = crypto.getRandomValues(new Uint32Array(t *= 2)); c < t;)(i = 131072 * n[c] + (n[c + 1] >>> 11)) >= 9e15 ? (o = crypto.getRandomValues(new Uint32Array(2)), n[c] = o[0], n[c + 1] = o[1]) : (d.push(i % 1e14), c += 2);
								c = t / 2
							} else {
								if (!crypto.randomBytes) throw D = !1, Error(a + "crypto unavailable");
								for (n = crypto.randomBytes(t *= 7); c < t;)(i = 281474976710656 * (31 & n[c]) + 1099511627776 * n[c + 1] + 4294967296 * n[c + 2] + 16777216 * n[c + 3] + (n[c + 4] << 16) + (n[c + 5] << 8) + n[c + 6]) >= 9e15 ? crypto.randomBytes(7).copy(n, c) : (d.push(i % 1e14), c += 7);
								c = t / 7
							} if (!D)
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
							var u, l, a, c, d, f, h, m, p = n.indexOf("."),
								_ = L,
								g = P;
							for (p >= 0 && (c = B, B = 0, n = n.replace(".", ""), f = (m = new $(r)).pow(n.length - p), B = c, m.c = e(x(v(f.c), f.e, "0"), 10, t, "0123456789"), m.e = m.c.length), a = c = (h = e(n, r, t, i ? (u = G, "0123456789") : (u = "0123456789", G))).length; 0 == h[--c]; h.pop());
							if (!h[0]) return u.charAt(0);
							if (p < 0 ? --a : (f.c = h, f.e = a, f.s = s, h = (f = o(f, m, _, g, t)).c, d = f.r, a = f.e), p = h[l = a + _ + 1], c = t / 2, d = d || l < 0 || null != h[l + 1], d = g < 4 ? (null != p || d) && (0 == g || g == (f.s < 0 ? 3 : 2)) : p > c || p == c && (4 == g || d || 6 == g && 1 & h[l - 1] || g == (f.s < 0 ? 8 : 7)), l < 1 || !h[0]) n = d ? x(u.charAt(1), -_, u.charAt(0)) : u.charAt(0);
							else {
								if (h.length = l, d)
									for (--t; ++h[--l] > t;) h[l] = 0, l || (++a, h = [1].concat(h));
								for (c = h.length; !h[--c];);
								for (p = 0, n = ""; p <= c; n += u.charAt(h[p++]));
								n = x(n, a, u.charAt(0))
							}
							return n
						}
					}(), o = function() {
						function e(e, n, o) {
							var r, t, s, i, u = 0,
								l = e.length,
								a = n % p,
								c = n / p | 0;
							for (e = e.slice(); l--;) u = ((t = a * (s = e[l] % p) + (r = c * s + (i = e[l] / p | 0) * a) % p * p + u) / o | 0) + (r / p | 0) + c * i, e[l] = t % o;
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
							var a, c, h, m, p, _, v, j, b, y, w, O, x, A, E, I, N, S = r.s == t.s ? 1 : -1,
								R = r.c,
								C = t.c;
							if (!(R && R[0] && C && C[0])) return new $(r.s && t.s && (R ? !C || R[0] != C[0] : C) ? R && 0 == R[0] || !C ? 0 * S : S / 0 : NaN);
							for (b = (j = new $(S)).c = [], S = s + (c = r.e - t.e) + 1, u || (u = d, c = g(r.e / f) - g(t.e / f), S = S / f | 0), h = 0; C[h] == (R[h] || 0); h++);
							if (C[h] > (R[h] || 0) && c--, S < 0) b.push(1), m = !0;
							else {
								for (A = R.length, I = C.length, h = 0, S += 2, (p = l(u / (C[0] + 1))) > 1 && (C = e(C, p, u), R = e(R, p, u), I = C.length, A = R.length), x = I, w = (y = R.slice(0, I)).length; w < I; y[w++] = 0);
								N = C.slice(), N = [0].concat(N), E = C[0], C[1] >= u / 2 && E++;
								do {
									if (p = 0, (a = n(C, y, I, w)) < 0) {
										if (O = y[0], I != w && (O = O * u + (y[1] || 0)), (p = l(O / E)) > 1)
											for (p >= u && (p = u - 1), v = (_ = e(C, p, u)).length, w = y.length; 1 == n(_, y, v, w);) p--, o(_, I < v ? N : C, v, u), v = _.length, a = 1;
										else 0 == p && (a = p = 1), v = (_ = C.slice()).length;
										if (v < w && (_ = [0].concat(_)), o(y, _, w, u), w = y.length, -1 == a)
											for (; n(C, y, I, w) < 1;) p++, o(y, I < w ? N : C, w, u), w = y.length
									} else 0 === a && (p++, y = [0]);
									b[h++] = p, y[0] ? y[w++] = R[x] || 0 : (y = [R[x]], w = 1)
								} while ((x++ < A || null != y[0]) && S--);
								m = null != y[0], b[0] || b.splice(0, 1)
							}
							if (u == d) {
								for (h = 1, S = b[0]; S >= 10; S /= 10, h++);
								W(j, s + (j.e = h + c * f - 1) + 1, i, m)
							} else j.e = c, j.r = +m;
							return j
						}
					}(), A = /^(-?)0([xbo])(?=\w[\w.]*$)/i, E = /^([^.]+)\.$/, I = /^\.([^.]+)$/, N = /^-?(Infinity|NaN)$/, S = /^\s*\+(?=[\w.])|^\s+|\s+$/g, t = function(e, n, o, r) {
						var t, s = o ? n : n.replace(S, "");
						if (N.test(s)) e.s = isNaN(s) ? null : s < 0 ? -1 : 1, e.c = e.e = null;
						else {
							if (!o && (s = s.replace(A, (function(e, n, o) {
									return t = "x" == (o = o.toLowerCase()) ? 16 : "b" == o ? 2 : 8, r && r != t ? e : n
								})), r && (t = r, s = s.replace(E, "$1").replace(I, "0.$1")), n != s)) return new $(s, t);
							if ($.DEBUG) throw Error(a + "Not a" + (r ? " base " + r : "") + " number: " + n);
							e.c = e.e = e.s = null
						}
					}, R.absoluteValue = R.abs = function() {
						var e = new $(this);
						return e.s < 0 && (e.s = 1), e
					}, R.comparedTo = function(e, n) {
						return j(this, new $(e, n))
					}, R.decimalPlaces = R.dp = function(e, n) {
						var o, r, t, s = this;
						if (null != e) return b(e, 0, _), null == n ? n = P : b(n, 0, 8), W(new $(s), e + s.e + 1, n);
						if (!(o = s.c)) return null;
						if (r = ((t = o.length - 1) - g(this.e / f)) * f, t = o[t])
							for (; t % 10 == 0; t /= 10, r--);
						return r < 0 && (r = 0), r
					}, R.dividedBy = R.div = function(e, n) {
						return o(this, new $(e, n), L, P)
					}, R.dividedToIntegerBy = R.idiv = function(e, n) {
						return o(this, new $(e, n), 0, 1)
					}, R.exponentiatedBy = R.pow = function(e, n) {
						var o, r, t, s, i, c, d, h = this;
						if ((e = new $(e)).c && !e.isInteger()) throw Error(a + "Exponent not an integer: " + e);
						if (null != n && (n = new $(n)), s = e.e > 14, !h.c || !h.c[0] || 1 == h.c[0] && !h.e && 1 == h.c.length || !e.c || !e.c[0]) return d = new $(Math.pow(+h.valueOf(), s ? 2 - w(e) : +e)), n ? d.mod(n) : d;
						if (i = e.s < 0, n) {
							if (n.c ? !n.c[0] : !n.s) return new $(NaN);
							(r = !i && h.isInteger() && n.isInteger()) && (h = h.mod(n))
						} else {
							if (e.e > 9 && (h.e > 0 || h.e < -1 || (0 == h.e ? h.c[0] > 1 || s && h.c[1] >= 24e7 : h.c[0] < 8e13 || s && h.c[0] <= 9999975e7))) return t = h.s < 0 && w(e) ? -0 : 0, h.e > -1 && (t = 1 / t), new $(i ? 1 / t : t);
							B && (t = u(B / f + 2))
						}
						for (s ? (o = new $(.5), c = w(e)) : c = e % 2, i && (e.s = 1), d = new $(C);;) {
							if (c) {
								if (!(d = d.times(h)).c) break;
								t ? d.c.length > t && (d.c.length = t) : r && (d = d.mod(n))
							}
							if (s) {
								if (W(e = e.times(o), e.e + 1, 1), !e.c[0]) break;
								s = e.e > 14, c = w(e)
							} else {
								if (!(e = l(e / 2))) break;
								c = e % 2
							}
							h = h.times(h), t ? h.c && h.c.length > t && (h.c.length = t) : r && (h = h.mod(n))
						}
						return r ? d : (i && (d = C.div(d)), n ? d.mod(n) : t ? W(d, B, P, void 0) : d)
					}, R.integerValue = function(e) {
						var n = new $(this);
						return null == e ? e = P : b(e, 0, 8), W(n, n.e + 1, e)
					}, R.isEqualTo = R.eq = function(e, n) {
						return 0 === j(this, new $(e, n))
					}, R.isFinite = function() {
						return !!this.c
					}, R.isGreaterThan = R.gt = function(e, n) {
						return j(this, new $(e, n)) > 0
					}, R.isGreaterThanOrEqualTo = R.gte = function(e, n) {
						return 1 === (n = j(this, new $(e, n))) || 0 === n
					}, R.isInteger = function() {
						return !!this.c && g(this.e / f) > this.c.length - 2
					}, R.isLessThan = R.lt = function(e, n) {
						return j(this, new $(e, n)) < 0
					}, R.isLessThanOrEqualTo = R.lte = function(e, n) {
						return -1 === (n = j(this, new $(e, n))) || 0 === n
					}, R.isNaN = function() {
						return !this.s
					}, R.isNegative = function() {
						return this.s < 0
					}, R.isPositive = function() {
						return this.s > 0
					}, R.isZero = function() {
						return !!this.c && 0 == this.c[0]
					}, R.minus = function(e, n) {
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
							if (!c[0] || !h[0]) return h[0] ? (e.s = -n, e) : new $(c[0] ? i : 3 == P ? -0 : 0)
						}
						if (l = g(l), a = g(a), c = c.slice(), u = l - a) {
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
						return c[0] ? H(e, c, a) : (e.s = 3 == P ? -1 : 1, e.c = [e.e = 0], e)
					}, R.modulo = R.mod = function(e, n) {
						var r, t, s = this;
						return e = new $(e, n), !s.c || !e.s || e.c && !e.c[0] ? new $(NaN) : !e.c || s.c && !s.c[0] ? new $(s) : (9 == T ? (t = e.s, e.s = 1, r = o(s, e, 0, 3), e.s = t, r.s *= t) : r = o(s, e, 0, T), (e = s.minus(r.times(e))).c[0] || 1 != T || (e.s = s.s), e)
					}, R.multipliedBy = R.times = function(e, n) {
						var o, r, t, s, i, u, l, a, c, h, m, _, v, j, b, y = this,
							w = y.c,
							O = (e = new $(e, n)).c;
						if (!(w && O && w[0] && O[0])) return !y.s || !e.s || w && !w[0] && !O || O && !O[0] && !w ? e.c = e.e = e.s = null : (e.s *= y.s, w && O ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
						for (r = g(y.e / f) + g(e.e / f), e.s *= y.s, (l = w.length) < (h = O.length) && (v = w, w = O, O = v, t = l, l = h, h = t), t = l + h, v = []; t--; v.push(0));
						for (j = d, b = p, t = h; --t >= 0;) {
							for (o = 0, m = O[t] % b, _ = O[t] / b | 0, s = t + (i = l); s > t;) o = ((a = m * (a = w[--i] % b) + (u = _ * a + (c = w[i] / b | 0) * m) % b * b + v[s] + o) / j | 0) + (u / b | 0) + _ * c, v[s--] = a % j;
							v[s] = o
						}
						return o ? ++r : v.splice(0, 1), H(e, v, r)
					}, R.negated = function() {
						var e = new $(this);
						return e.s = -e.s || null, e
					}, R.plus = function(e, n) {
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
						if (s = g(s), i = g(i), u = u.slice(), t = s - i) {
							for (t > 0 ? (i = s, o = l) : (t = -t, o = u), o.reverse(); t--; o.push(0));
							o.reverse()
						}
						for ((t = u.length) - (n = l.length) < 0 && (o = l, l = u, u = o, n = t), t = 0; n;) t = (u[--n] = u[n] + l[n] + t) / d | 0, u[n] = d === u[n] ? 0 : u[n] % d;
						return t && (u = [t].concat(u), ++i), H(e, u, i)
					}, R.precision = R.sd = function(e, n) {
						var o, r, t, s = this;
						if (null != e && e !== !!e) return b(e, 1, _), null == n ? n = P : b(n, 0, 8), W(new $(s), e, n);
						if (!(o = s.c)) return null;
						if (r = (t = o.length - 1) * f + 1, t = o[t]) {
							for (; t % 10 == 0; t /= 10, r--);
							for (t = o[0]; t >= 10; t /= 10, r++);
						}
						return e && s.e + 1 > r && (r = s.e + 1), r
					}, R.shiftedBy = function(e) {
						return b(e, -h, h), this.times("1e" + e)
					}, R.squareRoot = R.sqrt = function() {
						var e, n, r, t, s, i = this,
							u = i.c,
							l = i.s,
							a = i.e,
							c = L + 4,
							d = new $("0.5");
						if (1 !== l || !u || !u[0]) return new $(!l || l < 0 && (!u || u[0]) ? NaN : u ? i : 1 / 0);
						if (0 == (l = Math.sqrt(+i)) || l == 1 / 0 ? (((n = v(u)).length + a) % 2 == 0 && (n += "0"), l = Math.sqrt(n), a = g((a + 1) / 2) - (a < 0 || a % 2), r = new $(n = l == 1 / 0 ? "1e" + a : (n = l.toExponential()).slice(0, n.indexOf("e") + 1) + a)) : r = new $(l + ""), r.c[0])
							for ((l = (a = r.e) + c) < 3 && (l = 0);;)
								if (s = r, r = d.times(s.plus(o(i, s, c, 1))), v(s.c).slice(0, l) === (n = v(r.c)).slice(0, l)) {
									if (r.e < a && --l, "9999" != (n = n.slice(l - 3, l + 1)) && (t || "4999" != n)) {
										+n && (+n.slice(1) || "5" != n.charAt(0)) || (W(r, r.e + L + 2, 1), e = !r.times(r).eq(i));
										break
									}
									if (!t && (W(s, s.e + L + 2, 0), s.times(s).eq(i))) {
										r = s;
										break
									}
									c += 4, l += 4, t = 1
								} return W(r, r.e + L + 1, P, e)
					}, R.toExponential = function(e, n) {
						return null != e && (b(e, 0, _), e++), z(this, e, n, 1)
					}, R.toFixed = function(e, n) {
						return null != e && (b(e, 0, _), e = e + this.e + 1), z(this, e, n)
					}, R.toFormat = function(e, n) {
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
					}, R.toFraction = function(e) {
						var n, r, t, s, i, u, l, c, d, h, p, _, g = this,
							j = g.c;
						if (null != e && (!(c = new $(e)).isInteger() && (c.c || 1 !== c.s) || c.lt(C))) throw Error(a + "Argument " + (c.isInteger() ? "out of range: " : "not an integer: ") + e);
						if (!j) return g.toString();
						for (r = new $(C), h = t = new $(C), s = d = new $(C), _ = v(j), u = r.e = _.length - g.e - 1, r.c[0] = m[(l = u % f) < 0 ? f + l : l], e = !e || c.comparedTo(r) > 0 ? u > 0 ? r : h : c, l = U, U = 1 / 0, c = new $(_), d.c[0] = 0; p = o(c, r, 0, 1), 1 != (i = t.plus(p.times(s))).comparedTo(e);) t = s, s = i, h = d.plus(p.times(i = h)), d = i, r = c.minus(p.times(i = r)), c = i;
						return i = o(e.minus(t), s, 0, 1), d = d.plus(i.times(h)), t = t.plus(i.times(s)), d.s = h.s = g.s, n = o(h, s, u *= 2, P).minus(g).abs().comparedTo(o(d, t, u, P).minus(g).abs()) < 1 ? [h.toString(), s.toString()] : [d.toString(), t.toString()], U = l, n
					}, R.toNumber = function() {
						return +this
					}, R.toPrecision = function(e, n) {
						return null != e && b(e, 1, _), z(this, e, n, 2)
					}, R.toString = function(e) {
						var n, o = this,
							t = o.s,
							s = o.e;
						return null === s ? t ? (n = "Infinity", t < 0 && (n = "-" + n)) : n = "NaN" : (n = v(o.c), null == e ? n = s <= F || s >= k ? O(n, s) : x(n, s, "0") : (b(e, 2, G.length, "Base"), n = r(x(n, s, "0"), 10, e, t, !0)), t < 0 && o.c[0] && (n = "-" + n)), n
					}, R.valueOf = R.toJSON = function() {
						var e, n = this,
							o = n.e;
						return null === o ? n.toString() : (e = v(n.c), e = o <= F || o >= k ? O(e, o) : x(e, o, "0"), n.s < 0 ? "-" + e : e)
					}, R._isBigNumber = !0, null != n && $.set(n), $
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
		"./node_modules/core-js/modules/_string-trim.js": function(e, n, o) {
			var r = o("./node_modules/core-js/modules/_export.js"),
				t = o("./node_modules/core-js/modules/_defined.js"),
				s = o("./node_modules/core-js/modules/_fails.js"),
				i = o("./node_modules/core-js/modules/_string-ws.js"),
				u = "[" + i + "]",
				l = RegExp("^" + u + u + "*"),
				a = RegExp(u + u + "*$"),
				c = function(e, n, o) {
					var t = {},
						u = s((function() {
							return !!i[e]() || "​" != "​" [e]()
						})),
						l = t[e] = u ? n(d) : i[e];
					o && (t[o] = l), r(r.P + r.F * u, "String", t)
				},
				d = c.trim = function(e, n) {
					return e = String(t(e)), 1 & n && (e = e.replace(l, "")), 2 & n && (e = e.replace(a, "")), e
				};
			e.exports = c
		},
		"./node_modules/core-js/modules/_string-ws.js": function(e, n) {
			e.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
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
			var r = new RegExp("%[a-f0-9]{2}", "gi"),
				t = new RegExp("(%[a-f0-9]{2})+", "gi");

			function s(e, n) {
				try {
					return decodeURIComponent(e.join(""))
				} catch (t) {}
				if (1 === e.length) return e;
				n = n || 1;
				var o = e.slice(0, n),
					r = e.slice(n);
				return Array.prototype.concat.call([], s(o), s(r))
			}

			function i(e) {
				try {
					return decodeURIComponent(e)
				} catch (t) {
					for (var n = e.match(r), o = 1; o < n.length; o++) n = (e = s(n, o).join("")).match(r);
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
							}, r = t.exec(e); r;) {
							try {
								o[r[0]] = decodeURIComponent(r[0])
							} catch (n) {
								var s = i(r[0]);
								s !== r[0] && (o[r[0]] = s)
							}
							r = t.exec(e)
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
		"./node_modules/icepick/icepick.js": function(e, n, o) {
			"use strict";
			const r = n,
				t = e => e,
				s = e => null !== e && (Array.isArray(e) || i(e)),
				i = e => !("object" != typeof e || e.constructor !== Object && null != e.constructor || Object.getPrototypeOf(e) !== Object.prototype && null !== Object.getPrototypeOf(e)),
				u = (e, n) => {
					let o, r;
					if (Array.isArray(e))
						for (o = e.length; o--;) n(o);
					else
						for (o = (r = Object.keys(e)).length; o--;) n(r[o])
				},
				l = e => Array.isArray(e) ? e.slice() : (e => {
					const n = null == e.constructor ? Object.create(null) : {},
						o = Object.keys(e);
					let r, t = o.length;
					for (; t--;) n[r = o[t]] = e[r];
					return n
				})(e),
				a = t,
				c = t;

			function d(e, n) {
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
			n.freeze = t, n.thaw = function e(n) {
				if (!s(n) || !Object.isFrozen(n)) return n;
				const o = Array.isArray(n) ? new Array(n.length) : {};
				return u(n, r => {
					o[r] = e(n[r])
				}), o
			}, n.assoc = function(e, n, o) {
				if (e[n] === o) return c(e);
				const r = l(e);
				return r[n] = a(o), c(r)
			}, n.set = n.assoc, n.dissoc = function(e, n) {
				const o = l(e);
				return delete o[n], c(o)
			}, n.unset = n.dissoc, n.assocIn = function e(n, o, t) {
				const s = o[0];
				return 1 === o.length ? r.assoc(n, s, t) : r.assoc(n, s, e(n[s] || {}, o.slice(1), t))
			}, n.setIn = n.assocIn, n.dissocIn = function e(n, o) {
				const t = o[0];
				return n.hasOwnProperty(t) ? 1 === o.length ? r.dissoc(n, t) : r.assoc(n, t, e(n[t], o.slice(1))) : n
			}, n.unsetIn = n.dissocIn, n.getIn = d, n.updateIn = function(e, n, o) {
				const t = d(e, n);
				return r.assocIn(e, n, o(t))
			}, ["push", "unshift", "pop", "shift", "reverse", "sort"].forEach(e => {
				n[e] = function(n, o) {
					const r = [...n];
					return r[e](a(o)), c(r)
				}, n[e].displayName = "icepick." + e
			}), n.splice = function(e, ...n) {
				const o = [...e],
					r = n.map(a);
				return o.splice.apply(o, r), c(o)
			}, n.slice = function(e, n, o) {
				const r = e.slice(n, o);
				return c(r)
			}, ["map", "filter"].forEach(e => {
				n[e] = function(n, o) {
					const r = o[e](n);
					return c(r)
				}, n[e].displayName = "icepick." + e
			}), n.extend = n.assign = function(e, ...n) {
				const o = n.reduce(f, e);
				return c(o)
			}, n.merge = function e(n, o, t) {
				if (null == n || null == o) return n;
				return Object.keys(o).reduce((n, i) => {
					const u = o[i],
						l = n[i],
						a = t ? t(l, u, i) : u;
					return s(u) && s(l) ? a === l ? n : Array.isArray(u) ? r.assoc(n, i, a) : h(n, i, e(l, a, t)) : h(n, i, a)
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
			var r = o("./node_modules/lodash/_baseAssignValue.js"),
				t = o("./node_modules/lodash/eq.js");
			e.exports = function(e, n, o) {
				(void 0 === o || t(e[n], o)) && (void 0 !== o || n in e) || r(e, n, o)
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
				p = o("./node_modules/lodash/isTypedArray.js"),
				_ = o("./node_modules/lodash/_safeGet.js"),
				g = o("./node_modules/lodash/toPlainObject.js");
			e.exports = function(e, n, o, v, j, b, y) {
				var w = _(e, o),
					O = _(n, o),
					x = y.get(O);
				if (x) r(e, o, x);
				else {
					var A = b ? b(w, O, o + "", e, n, y) : void 0,
						E = void 0 === A;
					if (E) {
						var I = a(O),
							N = !I && d(O),
							S = !I && !N && p(O);
						A = O, I || N || S ? a(w) ? A = w : c(w) ? A = i(w) : N ? (E = !1, A = t(O, !0)) : S ? (E = !1, A = s(O, !0)) : A = [] : m(O) || l(O) ? (A = w, l(w) ? A = g(w) : h(w) && !f(w) || (A = u(O))) : E = !1
					}
					E && (y.set(O, A), j(A, O, v, b, y), y.delete(O)), r(e, o, A)
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
		"./node_modules/lodash/_castSlice.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseSlice.js");
			e.exports = function(e, n, o) {
				var t = e.length;
				return o = void 0 === o ? t : o, !n && o >= t ? e : r(e, n, o)
			}
		},
		"./node_modules/lodash/_charsStartIndex.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseIndexOf.js");
			e.exports = function(e, n) {
				for (var o = -1, t = e.length; ++o < t && r(n, e[o], 0) > -1;);
				return o
			}
		},
		"./node_modules/lodash/_createCaseFirst.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_castSlice.js"),
				t = o("./node_modules/lodash/_hasUnicode.js"),
				s = o("./node_modules/lodash/_stringToArray.js"),
				i = o("./node_modules/lodash/toString.js");
			e.exports = function(e) {
				return function(n) {
					n = i(n);
					var o = t(n) ? s(n) : void 0,
						u = o ? o[0] : n.charAt(0),
						l = o ? r(o, 1).join("") : n.slice(1);
					return u[e]() + l
				}
			}
		},
		"./node_modules/lodash/_createFind.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseIteratee.js"),
				t = o("./node_modules/lodash/isArrayLike.js"),
				s = o("./node_modules/lodash/keys.js");
			e.exports = function(e) {
				return function(n, o, i) {
					var u = Object(n);
					if (!t(n)) {
						var l = r(o, 3);
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
		"./node_modules/lodash/camelCase.js": function(e, n, o) {
			var r = o("./node_modules/lodash/capitalize.js"),
				t = o("./node_modules/lodash/_createCompounder.js")((function(e, n, o) {
					return n = n.toLowerCase(), e + (o ? r(n) : n)
				}));
			e.exports = t
		},
		"./node_modules/lodash/capitalize.js": function(e, n, o) {
			var r = o("./node_modules/lodash/toString.js"),
				t = o("./node_modules/lodash/upperFirst.js");
			e.exports = function(e) {
				return t(r(e).toLowerCase())
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
								p = e[m];
							(void 0 === p || t(p, u[m]) && !l.call(e, m)) && (e[m] = c[m])
						}
					return e
				}));
			e.exports = a
		},
		"./node_modules/lodash/find.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_createFind.js")(o("./node_modules/lodash/findIndex.js"));
			e.exports = r
		},
		"./node_modules/lodash/findIndex.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseFindIndex.js"),
				t = o("./node_modules/lodash/_baseIteratee.js"),
				s = o("./node_modules/lodash/toInteger.js"),
				i = Math.max;
			e.exports = function(e, n, o) {
				var u = null == e ? 0 : e.length;
				if (!u) return -1;
				var l = null == o ? 0 : s(o);
				return l < 0 && (l = i(u + l, 0)), r(e, t(n, 3), l)
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
		"./node_modules/lodash/mapValues.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseAssignValue.js"),
				t = o("./node_modules/lodash/_baseForOwn.js"),
				s = o("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, n) {
				var o = {};
				return n = s(n, 3), t(e, (function(e, t, s) {
					r(o, t, n(e, t, s))
				})), o
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
		"./node_modules/lodash/set.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseSet.js");
			e.exports = function(e, n, o) {
				return null == e ? e : r(e, n, o)
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
		"./node_modules/lodash/trimStart.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseToString.js"),
				t = o("./node_modules/lodash/_castSlice.js"),
				s = o("./node_modules/lodash/_charsStartIndex.js"),
				i = o("./node_modules/lodash/_stringToArray.js"),
				u = o("./node_modules/lodash/toString.js"),
				l = /^\s+/;
			e.exports = function(e, n, o) {
				if ((e = u(e)) && (o || void 0 === n)) return e.replace(l, "");
				if (!e || !(n = r(n))) return e;
				var a = i(e),
					c = s(a, i(n));
				return t(a, c).join("")
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
		"./node_modules/lodash/upperFirst.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_createCaseFirst.js")("toUpperCase");
			e.exports = r
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
		"./node_modules/path-browserify/index.js": function(e, n, o) {
			(function(e) {
				function o(e, n) {
					for (var o = 0, r = e.length - 1; r >= 0; r--) {
						var t = e[r];
						"." === t ? e.splice(r, 1) : ".." === t ? (e.splice(r, 1), o++) : o && (e.splice(r, 1), o--)
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
					for (var n = "", t = !1, s = arguments.length - 1; s >= -1 && !t; s--) {
						var i = s >= 0 ? arguments[s] : e.cwd();
						if ("string" != typeof i) throw new TypeError("Arguments to path.resolve must be strings");
						i && (n = i + "/" + n, t = "/" === i.charAt(0))
					}
					return (t ? "/" : "") + (n = o(r(n.split("/"), (function(e) {
						return !!e
					})), !t).join("/")) || "."
				}, n.normalize = function(e) {
					var s = n.isAbsolute(e),
						i = "/" === t(e, -1);
					return (e = o(r(e.split("/"), (function(e) {
						return !!e
					})), !s).join("/")) || s || (e = "."), e && i && (e += "/"), (s ? "/" : "") + e
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
					for (var t = r(e.split("/")), s = r(o.split("/")), i = Math.min(t.length, s.length), u = i, l = 0; l < i; l++)
						if (t[l] !== s[l]) {
							u = l;
							break
						} var a = [];
					for (l = u; l < t.length; l++) a.push("..");
					return (a = a.concat(s.slice(u))).join("/")
				}, n.sep = "/", n.delimiter = ":", n.dirname = function(e) {
					if ("string" != typeof e && (e += ""), 0 === e.length) return ".";
					for (var n = e.charCodeAt(0), o = 47 === n, r = -1, t = !0, s = e.length - 1; s >= 1; --s)
						if (47 === (n = e.charCodeAt(s))) {
							if (!t) {
								r = s;
								break
							}
						} else t = !1;
					return -1 === r ? o ? "/" : "." : o && 1 === r ? "/" : e.slice(0, r)
				}, n.basename = function(e, n) {
					var o = function(e) {
						"string" != typeof e && (e += "");
						var n, o = 0,
							r = -1,
							t = !0;
						for (n = e.length - 1; n >= 0; --n)
							if (47 === e.charCodeAt(n)) {
								if (!t) {
									o = n + 1;
									break
								}
							} else -1 === r && (t = !1, r = n + 1);
						return -1 === r ? "" : e.slice(o, r)
					}(e);
					return n && o.substr(-1 * n.length) === n && (o = o.substr(0, o.length - n.length)), o
				}, n.extname = function(e) {
					"string" != typeof e && (e += "");
					for (var n = -1, o = 0, r = -1, t = !0, s = 0, i = e.length - 1; i >= 0; --i) {
						var u = e.charCodeAt(i);
						if (47 !== u) - 1 === r && (t = !1, r = i + 1), 46 === u ? -1 === n ? n = i : 1 !== s && (s = 1) : -1 !== n && (s = -1);
						else if (!t) {
							o = i + 1;
							break
						}
					}
					return -1 === n || -1 === r || 0 === s || 1 === s && n === r - 1 && n === o + 1 ? "" : e.slice(n, r)
				};
				var t = "b" === "ab".substr(-1) ? function(e, n, o) {
					return e.substr(n, o)
				} : function(e, n, o) {
					return n < 0 && (n = e.length + n), e.substr(n, o)
				}
			}).call(this, o("./node_modules/process/browser.js"))
		}
	}
]);
//# sourceMappingURL=vendors~Governance~Reddit.a799ad02e412e4826d64.js.map