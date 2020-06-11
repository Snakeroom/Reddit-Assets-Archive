// https://www.redditstatic.com/desktop2x/vendors~Governance~Reddit.4c211b0a3d96c936c2cb.js
// Retrieved at 6/11/2020, 7:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~Governance~Reddit"], {
		"./node_modules/@r/frames/compiled.js": function(e, n, r) {
			"use strict";
			(function(e) {
				Object.defineProperty(n, "__esModule", {
					value: !0
				});
				var r = arguments,
					t = ".*",
					o = ".postMessage",
					s = {
						targetOrigin: "*"
					},
					i = /\..+$/;

				function u(e) {
					return new RegExp("\\.(?:" + e.join("|") + ")$")
				}

				function a(e) {
					return new RegExp("^http(s)?:\\/\\/" + e.join("|") + "$", "i")
				}
				var l = [t],
					c = a(l),
					d = [o],
					f = u(d),
					h = {},
					p = !1;

				function m(n, r, t) {
					e.addEventListener ? e.addEventListener(n, r, t) : e.attachEvent && e.attachEvent("on" + n, r)
				}

				function _(n, r) {
					e.removeEventListener ? e.removeEventListener(n, r) : e.detachEvent && e.detachEvent("on" + n, r)
				}

				function g(e) {
					return /\*/.test(e)
				}
				var v = n.postMessage = function(e, n, r) {
						var t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
						i.test(n) || (n += o);
						var u = t;
						Object.keys(s).forEach((function(e) {
							u[e] = s[e]
						})), e.postMessage(JSON.stringify({
							type: n,
							data: r,
							defaultedOptions: u
						}), u.targetOrigin)
					},
					j = n.receiveMessage = function(e, n, r, t) {
						"string" == typeof e && (t = r, r = n, n = e, e = null), t = t || void 0;
						var o = function(n) {
							for (var o = arguments.length, s = Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) s[i - 1] = arguments[i];
							e && e !== n.source && e.contentWindow !== n.source || r.apply(t, [n].concat(s))
						};
						return m(n, o), {
							off: function() {
								_(n, o)
							}
						}
					},
					y = (n.receiveMessageOnce = function(e, n, t, o) {
						var s = j(e, n, (function() {
							t && t.apply(void 0, r), s.off()
						}), o);
						return s
					}, n.removePostMessageOrigin = function(e) {
						var n = l.indexOf(e); - 1 !== n && (l.splice(n, 1), c = a(l))
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
						var r = document.createEvent("CustomEvent");
						return r.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), r
					}).prototype = e.Event.prototype
				}
				n.addPostMessageOrigin = function(e) {
					g(e) ? l = [t] : -1 === l.indexOf(e) && (y(t), l.push(e), c = a(l))
				};

				function O(n) {
					if (n.origin === e.location.origin || c.test(n.origin) || "null" === n.origin) {
						var r = {};
						try {
							r = JSON.parse(n.data)
						} catch (n) {}
						var t = r.type;
						if (f.test(t)) {
							var o = t.split(".", 2)[1];
							if (h[o]) h[o].targets.forEach((function(e) {
								return v(e, t, r.data, r.options)
							}));
							var s = new b(t, {
								detail: r.data
							});
							s.source = n.source, e.dispatchEvent(s)
						}
					}
				}
				var E = n.listen = function(e) {
					-1 === d.indexOf(e) && (d.push(e), f = u(d)), p || (m("message", O), p = !0)
				};
				n.stopListening = function(e) {
					var n = d.indexOf(e); - 1 !== n && (d.splice(n, 1), d.length ? f = u(d) : (_("message", O), p = !1))
				}, n.proxy = function(e, n) {
					E(e), Array.isArray(n) || (n = [n]);
					var r = h[e];
					r ? r.targets = [].concat(r.targets, n) : r = {
						targets: n
					}, h[e] = r
				}
			}).call(this, r("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/aggregate-error/index.js": function(e, n, r) {
			"use strict";
			const t = r("./node_modules/indent-string/index.js"),
				o = r("./node_modules/clean-stack/index.js"),
				s = e => e.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, "");
			class AggregateError extends Error {
				constructor(e) {
					if (!Array.isArray(e)) throw new TypeError(`Expected input to be an Array, got ${typeof e}`);
					let n = (e = [...e].map(e => e instanceof Error ? e : null !== e && "object" == typeof e ? Object.assign(new Error(e.message), e) : new Error(e))).map(e => "string" == typeof e.stack ? s(o(e.stack)) : String(e)).join("\n");
					super(n = "\n" + t(n, 4)), this.name = "AggregateError", Object.defineProperty(this, "_errors", {
						value: e
					})
				}*[Symbol.iterator]() {
					for (const e of this._errors) yield e
				}
			}
			e.exports = AggregateError
		},
		"./node_modules/bignumber.js/bignumber.js": function(e, n, r) {
			var t;
			! function(o) {
				"use strict";
				var s, i = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
					u = Math.ceil,
					a = Math.floor,
					l = "[BigNumber Error] ",
					c = l + "Number primitive has more than 15 significant digits: ",
					d = 1e14,
					f = 14,
					h = 9007199254740991,
					p = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
					m = 1e7,
					_ = 1e9;

				function g(e) {
					var n = 0 | e;
					return e > 0 || e === n ? n : n - 1
				}

				function v(e) {
					for (var n, r, t = 1, o = e.length, s = e[0] + ""; t < o;) {
						for (n = e[t++] + "", r = f - n.length; r--; n = "0" + n);
						s += n
					}
					for (o = s.length; 48 === s.charCodeAt(--o););
					return s.slice(0, o + 1 || 1)
				}

				function j(e, n) {
					var r, t, o = e.c,
						s = n.c,
						i = e.s,
						u = n.s,
						a = e.e,
						l = n.e;
					if (!i || !u) return null;
					if (r = o && !o[0], t = s && !s[0], r || t) return r ? t ? 0 : -u : i;
					if (i != u) return i;
					if (r = i < 0, t = a == l, !o || !s) return t ? 0 : !o ^ r ? 1 : -1;
					if (!t) return a > l ^ r ? 1 : -1;
					for (u = (a = o.length) < (l = s.length) ? a : l, i = 0; i < u; i++)
						if (o[i] != s[i]) return o[i] > s[i] ^ r ? 1 : -1;
					return a == l ? 0 : a > l ^ r ? 1 : -1
				}

				function y(e, n, r, t) {
					if (e < n || e > r || e !== (e < 0 ? u(e) : a(e))) throw Error(l + (t || "Argument") + ("number" == typeof e ? e < n || e > r ? " out of range: " : " not an integer: " : " not a primitive number: ") + e)
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
				}(s = function e(n) {
					var r, t, o, s, A, x, N, P, I, S = $.prototype = {
							constructor: $,
							toString: null,
							valueOf: null
						},
						L = new $(1),
						k = 20,
						M = 4,
						R = -7,
						C = 21,
						D = -1e7,
						T = 1e7,
						B = !1,
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
						var r, s, u, l, d, p, m, _, g = this;
						if (!(g instanceof $)) return new $(e, n);
						if (null == n) {
							if (e instanceof $) return g.s = e.s, g.e = e.e, void(g.c = (e = e.c) ? e.slice() : e);
							if ((p = "number" == typeof e) && 0 * e == 0) {
								if (g.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
									for (l = 0, d = e; d >= 10; d /= 10, l++);
									return g.e = l, void(g.c = [e])
								}
								_ = e + ""
							} else {
								if (!i.test(_ = e + "")) return o(g, _, p);
								g.s = 45 == _.charCodeAt(0) ? (_ = _.slice(1), -1) : 1
							}(l = _.indexOf(".")) > -1 && (_ = _.replace(".", "")), (d = _.search(/e/i)) > 0 ? (l < 0 && (l = d), l += +_.slice(d + 1), _ = _.substring(0, d)) : l < 0 && (l = _.length)
						} else {
							if (y(n, 2, G.length, "Base"), _ = e + "", 10 == n) return W(g = new $(e instanceof $ ? e : _), k + g.e + 1, M);
							if (p = "number" == typeof e) {
								if (0 * e != 0) return o(g, _, p, n);
								if (g.s = 1 / e < 0 ? (_ = _.slice(1), -1) : 1, $.DEBUG && _.replace(/^0\.0*|\./, "").length > 15) throw Error(c + e);
								p = !1
							} else g.s = 45 === _.charCodeAt(0) ? (_ = _.slice(1), -1) : 1;
							for (r = G.slice(0, n), l = d = 0, m = _.length; d < m; d++)
								if (r.indexOf(s = _.charAt(d)) < 0) {
									if ("." == s) {
										if (d > l) {
											l = m;
											continue
										}
									} else if (!u && (_ == _.toUpperCase() && (_ = _.toLowerCase()) || _ == _.toLowerCase() && (_ = _.toUpperCase()))) {
										u = !0, d = -1, l = 0;
										continue
									}
									return o(g, e + "", p, n)
								}(l = (_ = t(_, n, 10, g.s)).indexOf(".")) > - 1 ? _ = _.replace(".", "") : l = _.length
						}
						for (d = 0; 48 === _.charCodeAt(d); d++);
						for (m = _.length; 48 === _.charCodeAt(--m););
						if (_ = _.slice(d, ++m)) {
							if (m -= d, p && $.DEBUG && m > 15 && (e > h || e !== a(e))) throw Error(c + g.s * e);
							if ((l = l - d - 1) > T) g.c = g.e = null;
							else if (l < D) g.c = [g.e = 0];
							else {
								if (g.e = l, g.c = [], d = (l + 1) % f, l < 0 && (d += f), d < m) {
									for (d && g.c.push(+_.slice(0, d)), m -= f; d < m;) g.c.push(+_.slice(d, d += f));
									_ = _.slice(d), d = f - _.length
								} else d -= m;
								for (; d--; _ += "0");
								g.c.push(+_)
							}
						} else g.c = [g.e = 0]
					}

					function V(e, n, r, t) {
						var o, s, i, u, a;
						if (null == r ? r = M : y(r, 0, 8), !e.c) return e.toString();
						if (o = e.c[0], i = e.e, null == n) a = v(e.c), a = 1 == t || 2 == t && i <= R ? O(a, i) : E(a, i, "0");
						else if (s = (e = W(new $(e), n, r)).e, u = (a = v(e.c)).length, 1 == t || 2 == t && (n <= s || s <= R)) {
							for (; u < n; a += "0", u++);
							a = O(a, s)
						} else if (n -= i, a = E(a, s, "0"), s + 1 > u) {
							if (--n > 0)
								for (a += "."; n--; a += "0");
						} else if ((n += s - u) > 0)
							for (s + 1 == u && (a += "."); n--; a += "0");
						return e.s < 0 && o ? "-" + a : a
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

					function H(e, n, r) {
						for (var t = 1, o = n.length; !n[--o]; n.pop());
						for (o = n[0]; o >= 10; o /= 10, t++);
						return (r = t + r * f - 1) > T ? e.c = e.e = null : r < D ? e.c = [e.e = 0] : (e.e = r, e.c = n), e
					}

					function W(e, n, r, t) {
						var o, s, i, l, c, h, m, _ = e.c,
							g = p;
						if (_) {
							e: {
								for (o = 1, l = _[0]; l >= 10; l /= 10, o++);
								if ((s = n - o) < 0) s += f,
								i = n,
								m = (c = _[h = 0]) / g[o - i - 1] % 10 | 0;
								else if ((h = u((s + 1) / f)) >= _.length) {
									if (!t) break e;
									for (; _.length <= h; _.push(0));
									c = m = 0, o = 1, i = (s %= f) - f + 1
								} else {
									for (c = l = _[h], o = 1; l >= 10; l /= 10, o++);
									m = (i = (s %= f) - f + o) < 0 ? 0 : c / g[o - i - 1] % 10 | 0
								}
								if (t = t || n < 0 || null != _[h + 1] || (i < 0 ? c : c % g[o - i - 1]), t = r < 4 ? (m || t) && (0 == r || r == (e.s < 0 ? 3 : 2)) : m > 5 || 5 == m && (4 == r || t || 6 == r && (s > 0 ? i > 0 ? c / g[o - i] : 0 : _[h - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !_[0]) return _.length = 0,
								t ? (n -= e.e + 1, _[0] = g[(f - n % f) % f], e.e = -n || 0) : _[0] = e.e = 0,
								e;
								if (0 == s ? (_.length = h, l = 1, h--) : (_.length = h + 1, l = g[f - s], _[h] = i > 0 ? a(c / g[o - i] % g[i]) * l : 0), t)
									for (;;) {
										if (0 == h) {
											for (s = 1, i = _[0]; i >= 10; i /= 10, s++);
											for (i = _[0] += l, l = 1; i >= 10; i /= 10, l++);
											s != l && (e.e++, _[0] == d && (_[0] = 1));
											break
										}
										if (_[h] += l, _[h] != d) break;
										_[h--] = 0, l = 1
									}
								for (s = _.length; 0 === _[--s]; _.pop());
							}
							e.e > T ? e.c = e.e = null : e.e < D && (e.c = [e.e = 0])
						}
						return e
					}
					return $.clone = e, $.ROUND_UP = 0, $.ROUND_DOWN = 1, $.ROUND_CEIL = 2, $.ROUND_FLOOR = 3, $.ROUND_HALF_UP = 4, $.ROUND_HALF_DOWN = 5, $.ROUND_HALF_EVEN = 6, $.ROUND_HALF_CEIL = 7, $.ROUND_HALF_FLOOR = 8, $.EUCLID = 9, $.config = $.set = function(e) {
						var n, r;
						if (null != e) {
							if ("object" != typeof e) throw Error(l + "Object expected: " + e);
							if (e.hasOwnProperty(n = "DECIMAL_PLACES") && (y(r = e[n], 0, _, n), k = r), e.hasOwnProperty(n = "ROUNDING_MODE") && (y(r = e[n], 0, 8, n), M = r), e.hasOwnProperty(n = "EXPONENTIAL_AT") && (b(r = e[n]) ? (y(r[0], -_, 0, n), y(r[1], 0, _, n), R = r[0], C = r[1]) : (y(r, -_, _, n), R = -(C = r < 0 ? -r : r))), e.hasOwnProperty(n = "RANGE"))
								if (b(r = e[n])) y(r[0], -_, -1, n), y(r[1], 1, _, n), D = r[0], T = r[1];
								else {
									if (y(r, -_, _, n), !r) throw Error(l + n + " cannot be zero: " + r);
									D = -(T = r < 0 ? -r : r)
								} if (e.hasOwnProperty(n = "CRYPTO")) {
								if ((r = e[n]) !== !!r) throw Error(l + n + " not true or false: " + r);
								if (r) {
									if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw B = !r, Error(l + "crypto unavailable");
									B = r
								} else B = r
							}
							if (e.hasOwnProperty(n = "MODULO_MODE") && (y(r = e[n], 0, 9, n), U = r), e.hasOwnProperty(n = "POW_PRECISION") && (y(r = e[n], 0, _, n), F = r), e.hasOwnProperty(n = "FORMAT")) {
								if ("object" != typeof(r = e[n])) throw Error(l + n + " not an object: " + r);
								q = r
							}
							if (e.hasOwnProperty(n = "ALPHABET")) {
								if ("string" != typeof(r = e[n]) || /^.$|\.|(.).*\1/.test(r)) throw Error(l + n + " invalid: " + r);
								G = r
							}
						}
						return {
							DECIMAL_PLACES: k,
							ROUNDING_MODE: M,
							EXPONENTIAL_AT: [R, C],
							RANGE: [D, T],
							CRYPTO: B,
							MODULO_MODE: U,
							POW_PRECISION: F,
							FORMAT: q,
							ALPHABET: G
						}
					}, $.isBigNumber = function(e) {
						return e instanceof $ || e && !0 === e._isBigNumber || !1
					}, $.maximum = $.max = function() {
						return z(arguments, S.lt)
					}, $.minimum = $.min = function() {
						return z(arguments, S.gt)
					}, $.random = (s = 9007199254740992 * Math.random() & 2097151 ? function() {
						return a(9007199254740992 * Math.random())
					} : function() {
						return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
					}, function(e) {
						var n, r, t, o, i, c = 0,
							d = [],
							h = new $(L);
						if (null == e ? e = k : y(e, 0, _), o = u(e / f), B)
							if (crypto.getRandomValues) {
								for (n = crypto.getRandomValues(new Uint32Array(o *= 2)); c < o;)(i = 131072 * n[c] + (n[c + 1] >>> 11)) >= 9e15 ? (r = crypto.getRandomValues(new Uint32Array(2)), n[c] = r[0], n[c + 1] = r[1]) : (d.push(i % 1e14), c += 2);
								c = o / 2
							} else {
								if (!crypto.randomBytes) throw B = !1, Error(l + "crypto unavailable");
								for (n = crypto.randomBytes(o *= 7); c < o;)(i = 281474976710656 * (31 & n[c]) + 1099511627776 * n[c + 1] + 4294967296 * n[c + 2] + 16777216 * n[c + 3] + (n[c + 4] << 16) + (n[c + 5] << 8) + n[c + 6]) >= 9e15 ? crypto.randomBytes(7).copy(n, c) : (d.push(i % 1e14), c += 7);
								c = o / 7
							} if (!B)
							for (; c < o;)(i = s()) < 9e15 && (d[c++] = i % 1e14);
						for (o = d[--c], e %= f, o && e && (i = p[f - e], d[c] = a(o / i) * i); 0 === d[c]; d.pop(), c--);
						if (c < 0) d = [t = 0];
						else {
							for (t = -1; 0 === d[0]; d.splice(0, 1), t -= f);
							for (c = 1, i = d[0]; i >= 10; i /= 10, c++);
							c < f && (t -= f - c)
						}
						return h.e = t, h.c = d, h
					}), t = function() {
						function e(e, n, r, t) {
							for (var o, s, i = [0], u = 0, a = e.length; u < a;) {
								for (s = i.length; s--; i[s] *= n);
								for (i[0] += t.indexOf(e.charAt(u++)), o = 0; o < i.length; o++) i[o] > r - 1 && (null == i[o + 1] && (i[o + 1] = 0), i[o + 1] += i[o] / r | 0, i[o] %= r)
							}
							return i.reverse()
						}
						return function(n, t, o, s, i) {
							var u, a, l, c, d, f, h, p, m = n.indexOf("."),
								_ = k,
								g = M;
							for (m >= 0 && (c = F, F = 0, n = n.replace(".", ""), f = (p = new $(t)).pow(n.length - m), F = c, p.c = e(E(v(f.c), f.e, "0"), 10, o, "0123456789"), p.e = p.c.length), l = c = (h = e(n, t, o, i ? (u = G, "0123456789") : (u = "0123456789", G))).length; 0 == h[--c]; h.pop());
							if (!h[0]) return u.charAt(0);
							if (m < 0 ? --l : (f.c = h, f.e = l, f.s = s, h = (f = r(f, p, _, g, o)).c, d = f.r, l = f.e), m = h[a = l + _ + 1], c = o / 2, d = d || a < 0 || null != h[a + 1], d = g < 4 ? (null != m || d) && (0 == g || g == (f.s < 0 ? 3 : 2)) : m > c || m == c && (4 == g || d || 6 == g && 1 & h[a - 1] || g == (f.s < 0 ? 8 : 7)), a < 1 || !h[0]) n = d ? E(u.charAt(1), -_, u.charAt(0)) : u.charAt(0);
							else {
								if (h.length = a, d)
									for (--o; ++h[--a] > o;) h[a] = 0, a || (++l, h = [1].concat(h));
								for (c = h.length; !h[--c];);
								for (m = 0, n = ""; m <= c; n += u.charAt(h[m++]));
								n = E(n, l, u.charAt(0))
							}
							return n
						}
					}(), r = function() {
						function e(e, n, r) {
							var t, o, s, i, u = 0,
								a = e.length,
								l = n % m,
								c = n / m | 0;
							for (e = e.slice(); a--;) u = ((o = l * (s = e[a] % m) + (t = c * s + (i = e[a] / m | 0) * l) % m * m + u) / r | 0) + (t / m | 0) + c * i, e[a] = o % r;
							return u && (e = [u].concat(e)), e
						}

						function n(e, n, r, t) {
							var o, s;
							if (r != t) s = r > t ? 1 : -1;
							else
								for (o = s = 0; o < r; o++)
									if (e[o] != n[o]) {
										s = e[o] > n[o] ? 1 : -1;
										break
									} return s
						}

						function r(e, n, r, t) {
							for (var o = 0; r--;) e[r] -= o, o = e[r] < n[r] ? 1 : 0, e[r] = o * t + e[r] - n[r];
							for (; !e[0] && e.length > 1; e.splice(0, 1));
						}
						return function(t, o, s, i, u) {
							var l, c, h, p, m, _, v, j, y, b, w, O, E, A, x, N, P, I = t.s == o.s ? 1 : -1,
								S = t.c,
								L = o.c;
							if (!(S && S[0] && L && L[0])) return new $(t.s && o.s && (S ? !L || S[0] != L[0] : L) ? S && 0 == S[0] || !L ? 0 * I : I / 0 : NaN);
							for (y = (j = new $(I)).c = [], I = s + (c = t.e - o.e) + 1, u || (u = d, c = g(t.e / f) - g(o.e / f), I = I / f | 0), h = 0; L[h] == (S[h] || 0); h++);
							if (L[h] > (S[h] || 0) && c--, I < 0) y.push(1), p = !0;
							else {
								for (A = S.length, N = L.length, h = 0, I += 2, (m = a(u / (L[0] + 1))) > 1 && (L = e(L, m, u), S = e(S, m, u), N = L.length, A = S.length), E = N, w = (b = S.slice(0, N)).length; w < N; b[w++] = 0);
								P = L.slice(), P = [0].concat(P), x = L[0], L[1] >= u / 2 && x++;
								do {
									if (m = 0, (l = n(L, b, N, w)) < 0) {
										if (O = b[0], N != w && (O = O * u + (b[1] || 0)), (m = a(O / x)) > 1)
											for (m >= u && (m = u - 1), v = (_ = e(L, m, u)).length, w = b.length; 1 == n(_, b, v, w);) m--, r(_, N < v ? P : L, v, u), v = _.length, l = 1;
										else 0 == m && (l = m = 1), v = (_ = L.slice()).length;
										if (v < w && (_ = [0].concat(_)), r(b, _, w, u), w = b.length, -1 == l)
											for (; n(L, b, N, w) < 1;) m++, r(b, N < w ? P : L, w, u), w = b.length
									} else 0 === l && (m++, b = [0]);
									y[h++] = m, b[0] ? b[w++] = S[E] || 0 : (b = [S[E]], w = 1)
								} while ((E++ < A || null != b[0]) && I--);
								p = null != b[0], y[0] || y.splice(0, 1)
							}
							if (u == d) {
								for (h = 1, I = y[0]; I >= 10; I /= 10, h++);
								W(j, s + (j.e = h + c * f - 1) + 1, i, p)
							} else j.e = c, j.r = +p;
							return j
						}
					}(), A = /^(-?)0([xbo])(?=\w[\w.]*$)/i, x = /^([^.]+)\.$/, N = /^\.([^.]+)$/, P = /^-?(Infinity|NaN)$/, I = /^\s*\+(?=[\w.])|^\s+|\s+$/g, o = function(e, n, r, t) {
						var o, s = r ? n : n.replace(I, "");
						if (P.test(s)) e.s = isNaN(s) ? null : s < 0 ? -1 : 1, e.c = e.e = null;
						else {
							if (!r && (s = s.replace(A, (function(e, n, r) {
									return o = "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8, t && t != o ? e : n
								})), t && (o = t, s = s.replace(x, "$1").replace(N, "0.$1")), n != s)) return new $(s, o);
							if ($.DEBUG) throw Error(l + "Not a" + (t ? " base " + t : "") + " number: " + n);
							e.c = e.e = e.s = null
						}
					}, S.absoluteValue = S.abs = function() {
						var e = new $(this);
						return e.s < 0 && (e.s = 1), e
					}, S.comparedTo = function(e, n) {
						return j(this, new $(e, n))
					}, S.decimalPlaces = S.dp = function(e, n) {
						var r, t, o, s = this;
						if (null != e) return y(e, 0, _), null == n ? n = M : y(n, 0, 8), W(new $(s), e + s.e + 1, n);
						if (!(r = s.c)) return null;
						if (t = ((o = r.length - 1) - g(this.e / f)) * f, o = r[o])
							for (; o % 10 == 0; o /= 10, t--);
						return t < 0 && (t = 0), t
					}, S.dividedBy = S.div = function(e, n) {
						return r(this, new $(e, n), k, M)
					}, S.dividedToIntegerBy = S.idiv = function(e, n) {
						return r(this, new $(e, n), 0, 1)
					}, S.exponentiatedBy = S.pow = function(e, n) {
						var r, t, o, s, i, c, d, h = this;
						if ((e = new $(e)).c && !e.isInteger()) throw Error(l + "Exponent not an integer: " + e);
						if (null != n && (n = new $(n)), s = e.e > 14, !h.c || !h.c[0] || 1 == h.c[0] && !h.e && 1 == h.c.length || !e.c || !e.c[0]) return d = new $(Math.pow(+h.valueOf(), s ? 2 - w(e) : +e)), n ? d.mod(n) : d;
						if (i = e.s < 0, n) {
							if (n.c ? !n.c[0] : !n.s) return new $(NaN);
							(t = !i && h.isInteger() && n.isInteger()) && (h = h.mod(n))
						} else {
							if (e.e > 9 && (h.e > 0 || h.e < -1 || (0 == h.e ? h.c[0] > 1 || s && h.c[1] >= 24e7 : h.c[0] < 8e13 || s && h.c[0] <= 9999975e7))) return o = h.s < 0 && w(e) ? -0 : 0, h.e > -1 && (o = 1 / o), new $(i ? 1 / o : o);
							F && (o = u(F / f + 2))
						}
						for (s ? (r = new $(.5), c = w(e)) : c = e % 2, i && (e.s = 1), d = new $(L);;) {
							if (c) {
								if (!(d = d.times(h)).c) break;
								o ? d.c.length > o && (d.c.length = o) : t && (d = d.mod(n))
							}
							if (s) {
								if (W(e = e.times(r), e.e + 1, 1), !e.c[0]) break;
								s = e.e > 14, c = w(e)
							} else {
								if (!(e = a(e / 2))) break;
								c = e % 2
							}
							h = h.times(h), o ? h.c && h.c.length > o && (h.c.length = o) : t && (h = h.mod(n))
						}
						return t ? d : (i && (d = L.div(d)), n ? d.mod(n) : o ? W(d, F, M, void 0) : d)
					}, S.integerValue = function(e) {
						var n = new $(this);
						return null == e ? e = M : y(e, 0, 8), W(n, n.e + 1, e)
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
						var r, t, o, s, i = this,
							u = i.s;
						if (n = (e = new $(e, n)).s, !u || !n) return new $(NaN);
						if (u != n) return e.s = -n, i.plus(e);
						var a = i.e / f,
							l = e.e / f,
							c = i.c,
							h = e.c;
						if (!a || !l) {
							if (!c || !h) return c ? (e.s = -n, e) : new $(h ? i : NaN);
							if (!c[0] || !h[0]) return h[0] ? (e.s = -n, e) : new $(c[0] ? i : 3 == M ? -0 : 0)
						}
						if (a = g(a), l = g(l), c = c.slice(), u = a - l) {
							for ((s = u < 0) ? (u = -u, o = c) : (l = a, o = h), o.reverse(), n = u; n--; o.push(0));
							o.reverse()
						} else
							for (t = (s = (u = c.length) < (n = h.length)) ? u : n, u = n = 0; n < t; n++)
								if (c[n] != h[n]) {
									s = c[n] < h[n];
									break
								} if (s && (o = c, c = h, h = o, e.s = -e.s), (n = (t = h.length) - (r = c.length)) > 0)
							for (; n--; c[r++] = 0);
						for (n = d - 1; t > u;) {
							if (c[--t] < h[t]) {
								for (r = t; r && !c[--r]; c[r] = n);
								--c[r], c[t] += d
							}
							c[t] -= h[t]
						}
						for (; 0 == c[0]; c.splice(0, 1), --l);
						return c[0] ? H(e, c, l) : (e.s = 3 == M ? -1 : 1, e.c = [e.e = 0], e)
					}, S.modulo = S.mod = function(e, n) {
						var t, o, s = this;
						return e = new $(e, n), !s.c || !e.s || e.c && !e.c[0] ? new $(NaN) : !e.c || s.c && !s.c[0] ? new $(s) : (9 == U ? (o = e.s, e.s = 1, t = r(s, e, 0, 3), e.s = o, t.s *= o) : t = r(s, e, 0, U), (e = s.minus(t.times(e))).c[0] || 1 != U || (e.s = s.s), e)
					}, S.multipliedBy = S.times = function(e, n) {
						var r, t, o, s, i, u, a, l, c, h, p, _, v, j, y, b = this,
							w = b.c,
							O = (e = new $(e, n)).c;
						if (!(w && O && w[0] && O[0])) return !b.s || !e.s || w && !w[0] && !O || O && !O[0] && !w ? e.c = e.e = e.s = null : (e.s *= b.s, w && O ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
						for (t = g(b.e / f) + g(e.e / f), e.s *= b.s, (a = w.length) < (h = O.length) && (v = w, w = O, O = v, o = a, a = h, h = o), o = a + h, v = []; o--; v.push(0));
						for (j = d, y = m, o = h; --o >= 0;) {
							for (r = 0, p = O[o] % y, _ = O[o] / y | 0, s = o + (i = a); s > o;) r = ((l = p * (l = w[--i] % y) + (u = _ * l + (c = w[i] / y | 0) * p) % y * y + v[s] + r) / j | 0) + (u / y | 0) + _ * c, v[s--] = l % j;
							v[s] = r
						}
						return r ? ++t : v.splice(0, 1), H(e, v, t)
					}, S.negated = function() {
						var e = new $(this);
						return e.s = -e.s || null, e
					}, S.plus = function(e, n) {
						var r, t = this,
							o = t.s;
						if (n = (e = new $(e, n)).s, !o || !n) return new $(NaN);
						if (o != n) return e.s = -n, t.minus(e);
						var s = t.e / f,
							i = e.e / f,
							u = t.c,
							a = e.c;
						if (!s || !i) {
							if (!u || !a) return new $(o / 0);
							if (!u[0] || !a[0]) return a[0] ? e : new $(u[0] ? t : 0 * o)
						}
						if (s = g(s), i = g(i), u = u.slice(), o = s - i) {
							for (o > 0 ? (i = s, r = a) : (o = -o, r = u), r.reverse(); o--; r.push(0));
							r.reverse()
						}
						for ((o = u.length) - (n = a.length) < 0 && (r = a, a = u, u = r, n = o), o = 0; n;) o = (u[--n] = u[n] + a[n] + o) / d | 0, u[n] = d === u[n] ? 0 : u[n] % d;
						return o && (u = [o].concat(u), ++i), H(e, u, i)
					}, S.precision = S.sd = function(e, n) {
						var r, t, o, s = this;
						if (null != e && e !== !!e) return y(e, 1, _), null == n ? n = M : y(n, 0, 8), W(new $(s), e, n);
						if (!(r = s.c)) return null;
						if (t = (o = r.length - 1) * f + 1, o = r[o]) {
							for (; o % 10 == 0; o /= 10, t--);
							for (o = r[0]; o >= 10; o /= 10, t++);
						}
						return e && s.e + 1 > t && (t = s.e + 1), t
					}, S.shiftedBy = function(e) {
						return y(e, -h, h), this.times("1e" + e)
					}, S.squareRoot = S.sqrt = function() {
						var e, n, t, o, s, i = this,
							u = i.c,
							a = i.s,
							l = i.e,
							c = k + 4,
							d = new $("0.5");
						if (1 !== a || !u || !u[0]) return new $(!a || a < 0 && (!u || u[0]) ? NaN : u ? i : 1 / 0);
						if (0 == (a = Math.sqrt(+i)) || a == 1 / 0 ? (((n = v(u)).length + l) % 2 == 0 && (n += "0"), a = Math.sqrt(n), l = g((l + 1) / 2) - (l < 0 || l % 2), t = new $(n = a == 1 / 0 ? "1e" + l : (n = a.toExponential()).slice(0, n.indexOf("e") + 1) + l)) : t = new $(a + ""), t.c[0])
							for ((a = (l = t.e) + c) < 3 && (a = 0);;)
								if (s = t, t = d.times(s.plus(r(i, s, c, 1))), v(s.c).slice(0, a) === (n = v(t.c)).slice(0, a)) {
									if (t.e < l && --a, "9999" != (n = n.slice(a - 3, a + 1)) && (o || "4999" != n)) {
										+n && (+n.slice(1) || "5" != n.charAt(0)) || (W(t, t.e + k + 2, 1), e = !t.times(t).eq(i));
										break
									}
									if (!o && (W(s, s.e + k + 2, 0), s.times(s).eq(i))) {
										t = s;
										break
									}
									c += 4, a += 4, o = 1
								} return W(t, t.e + k + 1, M, e)
					}, S.toExponential = function(e, n) {
						return null != e && (y(e, 0, _), e++), V(this, e, n, 1)
					}, S.toFixed = function(e, n) {
						return null != e && (y(e, 0, _), e = e + this.e + 1), V(this, e, n)
					}, S.toFormat = function(e, n) {
						var r = this.toFixed(e, n);
						if (this.c) {
							var t, o = r.split("."),
								s = +q.groupSize,
								i = +q.secondaryGroupSize,
								u = q.groupSeparator,
								a = o[0],
								l = o[1],
								c = this.s < 0,
								d = c ? a.slice(1) : a,
								f = d.length;
							if (i && (t = s, s = i, i = t, f -= t), s > 0 && f > 0) {
								for (t = f % s || s, a = d.substr(0, t); t < f; t += s) a += u + d.substr(t, s);
								i > 0 && (a += u + d.slice(t)), c && (a = "-" + a)
							}
							r = l ? a + q.decimalSeparator + ((i = +q.fractionGroupSize) ? l.replace(new RegExp("\\d{" + i + "}\\B", "g"), "$&" + q.fractionGroupSeparator) : l) : a
						}
						return r
					}, S.toFraction = function(e) {
						var n, t, o, s, i, u, a, c, d, h, m, _, g = this,
							j = g.c;
						if (null != e && (!(c = new $(e)).isInteger() && (c.c || 1 !== c.s) || c.lt(L))) throw Error(l + "Argument " + (c.isInteger() ? "out of range: " : "not an integer: ") + e);
						if (!j) return g.toString();
						for (t = new $(L), h = o = new $(L), s = d = new $(L), _ = v(j), u = t.e = _.length - g.e - 1, t.c[0] = p[(a = u % f) < 0 ? f + a : a], e = !e || c.comparedTo(t) > 0 ? u > 0 ? t : h : c, a = T, T = 1 / 0, c = new $(_), d.c[0] = 0; m = r(c, t, 0, 1), 1 != (i = o.plus(m.times(s))).comparedTo(e);) o = s, s = i, h = d.plus(m.times(i = h)), d = i, t = c.minus(m.times(i = t)), c = i;
						return i = r(e.minus(o), s, 0, 1), d = d.plus(i.times(h)), o = o.plus(i.times(s)), d.s = h.s = g.s, n = r(h, s, u *= 2, M).minus(g).abs().comparedTo(r(d, o, u, M).minus(g).abs()) < 1 ? [h.toString(), s.toString()] : [d.toString(), o.toString()], T = a, n
					}, S.toNumber = function() {
						return +this
					}, S.toPrecision = function(e, n) {
						return null != e && y(e, 1, _), V(this, e, n, 2)
					}, S.toString = function(e) {
						var n, r = this,
							o = r.s,
							s = r.e;
						return null === s ? o ? (n = "Infinity", o < 0 && (n = "-" + n)) : n = "NaN" : (n = v(r.c), null == e ? n = s <= R || s >= C ? O(n, s) : E(n, s, "0") : (y(e, 2, G.length, "Base"), n = t(E(n, s, "0"), 10, e, o, !0)), o < 0 && r.c[0] && (n = "-" + n)), n
					}, S.valueOf = S.toJSON = function() {
						var e, n = this,
							r = n.e;
						return null === r ? n.toString() : (e = v(n.c), e = r <= R || r >= C ? O(e, r) : E(e, r, "0"), n.s < 0 ? "-" + e : e)
					}, S._isBigNumber = !0, null != n && $.set(n), $
				}()).default = s.BigNumber = s, void 0 === (t = function() {
					return s
				}.call(n, r, n, e)) || (e.exports = t)
			}()
		},
		"./node_modules/clean-stack/index.js": function(e, n, r) {
			"use strict";
			const t = r("ignored /drone/src/node_modules/clean-stack os"),
				o = /\s+at.*(?:\(|\s)(.*)\)?/,
				s = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/,
				i = void 0 === t.homedir ? "" : t.homedir();
			e.exports = (e, n) => (n = Object.assign({
				pretty: !1
			}, n), e.replace(/\\/g, "/").split("\n").filter(e => {
				const n = e.match(o);
				if (null === n || !n[1]) return !0;
				const r = n[1];
				return !r.includes(".app/Contents/Resources/electron.asar") && !r.includes(".app/Contents/Resources/default_app.asar") && !s.test(r)
			}).filter(e => "" !== e.trim()).map(e => n.pretty ? e.replace(o, (e, n) => e.replace(n, n.replace(i, "~"))) : e).join("\n"))
		},
		"./node_modules/core-js/modules/_new-promise-capability.js": function(e, n, r) {
			"use strict";
			var t = r("./node_modules/core-js/modules/_a-function.js");

			function o(e) {
				var n, r;
				this.promise = new e((function(e, t) {
					if (void 0 !== n || void 0 !== r) throw TypeError("Bad Promise constructor");
					n = e, r = t
				})), this.resolve = t(n), this.reject = t(r)
			}
			e.exports.f = function(e) {
				return new o(e)
			}
		},
		"./node_modules/core-js/modules/_promise-resolve.js": function(e, n, r) {
			var t = r("./node_modules/core-js/modules/_an-object.js"),
				o = r("./node_modules/core-js/modules/_is-object.js"),
				s = r("./node_modules/core-js/modules/_new-promise-capability.js");
			e.exports = function(e, n) {
				if (t(e), o(n) && n.constructor === e) return n;
				var r = s.f(e);
				return (0, r.resolve)(n), r.promise
			}
		},
		"./node_modules/core-js/modules/es7.promise.finally.js": function(e, n, r) {
			"use strict";
			var t = r("./node_modules/core-js/modules/_export.js"),
				o = r("./node_modules/core-js/modules/_core.js"),
				s = r("./node_modules/core-js/modules/_global.js"),
				i = r("./node_modules/core-js/modules/_species-constructor.js"),
				u = r("./node_modules/core-js/modules/_promise-resolve.js");
			t(t.P + t.R, "Promise", {
				finally: function(e) {
					var n = i(this, o.Promise || s.Promise),
						r = "function" == typeof e;
					return this.then(r ? function(r) {
						return u(n, e()).then((function() {
							return r
						}))
					} : e, r ? function(r) {
						return u(n, e()).then((function() {
							throw r
						}))
					} : e)
				}
			})
		},
		"./node_modules/icepick/icepick.js": function(e, n, r) {
			"use strict";
			const t = n,
				o = e => e,
				s = e => null !== e && (Array.isArray(e) || i(e)),
				i = e => !("object" != typeof e || e.constructor !== Object && null != e.constructor || Object.getPrototypeOf(e) !== Object.prototype && null !== Object.getPrototypeOf(e)),
				u = (e, n) => {
					let r, t;
					if (Array.isArray(e))
						for (r = e.length; r--;) n(r);
					else
						for (r = (t = Object.keys(e)).length; r--;) n(t[r])
				},
				a = e => Array.isArray(e) ? e.slice() : (e => {
					const n = null == e.constructor ? Object.create(null) : {},
						r = Object.keys(e);
					let t, o = r.length;
					for (; o--;) n[t = r[o]] = e[t];
					return n
				})(e),
				l = o,
				c = o;

			function d(e, n) {
				return (n || []).reduce((e, n) => {
					if (e) return e[n]
				}, e)
			}

			function f(e, n) {
				return Object.keys(n).reduce((e, r) => t.assoc(e, r, n[r]), e)
			}

			function h(e, n, r) {
				return e[n] === r ? e : t.assoc(e, n, r)
			}
			n.freeze = o, n.thaw = function e(n) {
				if (!s(n) || !Object.isFrozen(n)) return n;
				const r = Array.isArray(n) ? new Array(n.length) : {};
				return u(n, t => {
					r[t] = e(n[t])
				}), r
			}, n.assoc = function(e, n, r) {
				if (e[n] === r) return c(e);
				const t = a(e);
				return t[n] = l(r), c(t)
			}, n.set = n.assoc, n.dissoc = function(e, n) {
				const r = a(e);
				return delete r[n], c(r)
			}, n.unset = n.dissoc, n.assocIn = function e(n, r, o) {
				const s = r[0];
				return 1 === r.length ? t.assoc(n, s, o) : t.assoc(n, s, e(n[s] || {}, r.slice(1), o))
			}, n.setIn = n.assocIn, n.dissocIn = function e(n, r) {
				const o = r[0];
				return n.hasOwnProperty(o) ? 1 === r.length ? t.dissoc(n, o) : t.assoc(n, o, e(n[o], r.slice(1))) : n
			}, n.unsetIn = n.dissocIn, n.getIn = d, n.updateIn = function(e, n, r) {
				const o = d(e, n);
				return t.assocIn(e, n, r(o))
			}, ["push", "unshift", "pop", "shift", "reverse", "sort"].forEach(e => {
				n[e] = function(n, r) {
					const t = [...n];
					return t[e](l(r)), c(t)
				}, n[e].displayName = "icepick." + e
			}), n.splice = function(e, ...n) {
				const r = [...e],
					t = n.map(l);
				return r.splice.apply(r, t), c(r)
			}, n.slice = function(e, n, r) {
				const t = e.slice(n, r);
				return c(t)
			}, ["map", "filter"].forEach(e => {
				n[e] = function(n, r) {
					const t = r[e](n);
					return c(t)
				}, n[e].displayName = "icepick." + e
			}), n.extend = n.assign = function(e, ...n) {
				const r = n.reduce(f, e);
				return c(r)
			}, n.merge = function e(n, r, o) {
				if (null == n || null == r) return n;
				return Object.keys(r).reduce((n, i) => {
					const u = r[i],
						a = n[i],
						l = o ? o(a, u, i) : u;
					return s(u) && s(a) ? l === a ? n : Array.isArray(u) ? t.assoc(n, i, l) : h(n, i, e(a, l, o)) : h(n, i, l)
				}, n)
			};
			const p = {
				value: function() {
					return this.val
				},
				thru: function(e) {
					return this.val = l(e(this.val)), this
				}
			};
			Object.keys(n).forEach(e => {
				e.match(/^(map|filter)$/) ? p[e] = function(r) {
					return this.val = n[e](r, this.val), this
				} : p[e] = function(...r) {
					return this.val = n[e](this.val, ...r), this
				}
			}), n.chain = function(e) {
				const n = Object.create(p);
				return n.val = e, n
			}
		},
		"./node_modules/indent-string/index.js": function(e, n, r) {
			"use strict";
			e.exports = (e, n = 1, r) => {
				if (r = {
						indent: " ",
						includeEmptyLines: !1,
						...r
					}, "string" != typeof e) throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
				if ("number" != typeof n) throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof n}\``);
				if ("string" != typeof r.indent) throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
				if (0 === n) return e;
				const t = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
				return e.replace(t, r.indent.repeat(n))
			}
		},
		"./node_modules/lodash/_arrayEvery.js": function(e, n) {
			e.exports = function(e, n) {
				for (var r = -1, t = null == e ? 0 : e.length; ++r < t;)
					if (!n(e[r], r, e)) return !1;
				return !0
			}
		},
		"./node_modules/lodash/_assignMergeValue.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_baseAssignValue.js"),
				o = r("./node_modules/lodash/eq.js");
			e.exports = function(e, n, r) {
				(void 0 === r || o(e[n], r)) && (void 0 !== r || n in e) || t(e, n, r)
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
				return t(e, (function(e, t, s) {
					n(o, r(e), t, s)
				})), o
			}
		},
		"./node_modules/lodash/_baseMerge.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_Stack.js"),
				o = r("./node_modules/lodash/_assignMergeValue.js"),
				s = r("./node_modules/lodash/_baseFor.js"),
				i = r("./node_modules/lodash/_baseMergeDeep.js"),
				u = r("./node_modules/lodash/isObject.js"),
				a = r("./node_modules/lodash/keysIn.js"),
				l = r("./node_modules/lodash/_safeGet.js");
			e.exports = function e(n, r, c, d, f) {
				n !== r && s(r, (function(s, a) {
					if (f || (f = new t), u(s)) i(n, r, a, c, e, d, f);
					else {
						var h = d ? d(l(n, a), s, a + "", n, r, f) : void 0;
						void 0 === h && (h = s), o(n, a, h)
					}
				}), a)
			}
		},
		"./node_modules/lodash/_baseMergeDeep.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_assignMergeValue.js"),
				o = r("./node_modules/lodash/_cloneBuffer.js"),
				s = r("./node_modules/lodash/_cloneTypedArray.js"),
				i = r("./node_modules/lodash/_copyArray.js"),
				u = r("./node_modules/lodash/_initCloneObject.js"),
				a = r("./node_modules/lodash/isArguments.js"),
				l = r("./node_modules/lodash/isArray.js"),
				c = r("./node_modules/lodash/isArrayLikeObject.js"),
				d = r("./node_modules/lodash/isBuffer.js"),
				f = r("./node_modules/lodash/isFunction.js"),
				h = r("./node_modules/lodash/isObject.js"),
				p = r("./node_modules/lodash/isPlainObject.js"),
				m = r("./node_modules/lodash/isTypedArray.js"),
				_ = r("./node_modules/lodash/_safeGet.js"),
				g = r("./node_modules/lodash/toPlainObject.js");
			e.exports = function(e, n, r, v, j, y, b) {
				var w = _(e, r),
					O = _(n, r),
					E = b.get(O);
				if (E) t(e, r, E);
				else {
					var A = y ? y(w, O, r + "", e, n, b) : void 0,
						x = void 0 === A;
					if (x) {
						var N = l(O),
							P = !N && d(O),
							I = !N && !P && m(O);
						A = O, N || P || I ? l(w) ? A = w : c(w) ? A = i(w) : P ? (x = !1, A = o(O, !0)) : I ? (x = !1, A = s(O, !0)) : A = [] : p(O) || a(O) ? (A = w, a(w) ? A = g(w) : h(w) && !f(w) || (A = u(O))) : x = !1
					}
					x && (b.set(O, A), j(A, O, v, y, b), b.delete(O)), t(e, r, A)
				}
			}
		},
		"./node_modules/lodash/_baseSome.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_baseEach.js");
			e.exports = function(e, n) {
				var r;
				return t(e, (function(e, t, o) {
					return !(r = n(e, t, o))
				})), !!r
			}
		},
		"./node_modules/lodash/_baseXor.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_baseDifference.js"),
				o = r("./node_modules/lodash/_baseFlatten.js"),
				s = r("./node_modules/lodash/_baseUniq.js");
			e.exports = function(e, n, r) {
				var i = e.length;
				if (i < 2) return i ? s(e[0]) : [];
				for (var u = -1, a = Array(i); ++u < i;)
					for (var l = e[u], c = -1; ++c < i;) c != u && (a[u] = t(a[u] || l, e[c], n, r));
				return s(o(a, 1), n, r)
			}
		},
		"./node_modules/lodash/_createAssigner.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_baseRest.js"),
				o = r("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e) {
				return t((function(n, r) {
					var t = -1,
						s = r.length,
						i = s > 1 ? r[s - 1] : void 0,
						u = s > 2 ? r[2] : void 0;
					for (i = e.length > 3 && "function" == typeof i ? (s--, i) : void 0, u && o(r[0], r[1], u) && (i = s < 3 ? void 0 : i, s = 1), n = Object(n); ++t < s;) {
						var a = r[t];
						a && e(n, a, t, i)
					}
					return n
				}))
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
		"./node_modules/lodash/_safeGet.js": function(e, n) {
			e.exports = function(e, n) {
				if (("constructor" !== n || "function" != typeof e[n]) && "__proto__" != n) return e[n]
			}
		},
		"./node_modules/lodash/defaults.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_baseRest.js"),
				o = r("./node_modules/lodash/eq.js"),
				s = r("./node_modules/lodash/_isIterateeCall.js"),
				i = r("./node_modules/lodash/keysIn.js"),
				u = Object.prototype,
				a = u.hasOwnProperty,
				l = t((function(e, n) {
					e = Object(e);
					var r = -1,
						t = n.length,
						l = t > 2 ? n[2] : void 0;
					for (l && s(n[0], n[1], l) && (t = 1); ++r < t;)
						for (var c = n[r], d = i(c), f = -1, h = d.length; ++f < h;) {
							var p = d[f],
								m = e[p];
							(void 0 === m || o(m, u[p]) && !a.call(e, p)) && (e[p] = c[p])
						}
					return e
				}));
			e.exports = l
		},
		"./node_modules/lodash/every.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_arrayEvery.js"),
				o = r("./node_modules/lodash/_baseEvery.js"),
				s = r("./node_modules/lodash/_baseIteratee.js"),
				i = r("./node_modules/lodash/isArray.js"),
				u = r("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, n, r) {
				var a = i(e) ? t : o;
				return r && u(e, n, r) && (n = void 0), a(e, s(n, 3))
			}
		},
		"./node_modules/lodash/findLastIndex.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_baseFindIndex.js"),
				o = r("./node_modules/lodash/_baseIteratee.js"),
				s = r("./node_modules/lodash/toInteger.js"),
				i = Math.max,
				u = Math.min;
			e.exports = function(e, n, r) {
				var a = null == e ? 0 : e.length;
				if (!a) return -1;
				var l = a - 1;
				return void 0 !== r && (l = s(r), l = r < 0 ? i(a + l, 0) : u(l, a - 1)), t(e, o(n, 3), l, !0)
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
				s = r("./node_modules/lodash/identity.js"),
				i = Object.prototype.toString,
				u = o((function(e, n, r) {
					null != n && "function" != typeof n.toString && (n = i.call(n)), e[n] = r
				}), t(s));
			e.exports = u
		},
		"./node_modules/lodash/isEqualWith.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_baseIsEqual.js");
			e.exports = function(e, n, r) {
				var o = (r = "function" == typeof r ? r : void 0) ? r(e, n) : void 0;
				return void 0 === o ? t(e, n, void 0, r) : !!o
			}
		},
		"./node_modules/lodash/merge.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_baseMerge.js"),
				o = r("./node_modules/lodash/_createAssigner.js")((function(e, n, r) {
					t(e, n, r)
				}));
			e.exports = o
		},
		"./node_modules/lodash/mergeWith.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_baseMerge.js"),
				o = r("./node_modules/lodash/_createAssigner.js")((function(e, n, r, o) {
					t(e, n, r, o)
				}));
			e.exports = o
		},
		"./node_modules/lodash/negate.js": function(e, n) {
			var r = "Expected a function";
			e.exports = function(e) {
				if ("function" != typeof e) throw new TypeError(r);
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
		"./node_modules/lodash/omitBy.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_baseIteratee.js"),
				o = r("./node_modules/lodash/negate.js"),
				s = r("./node_modules/lodash/pickBy.js");
			e.exports = function(e, n) {
				return s(e, o(t(n)))
			}
		},
		"./node_modules/lodash/some.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_arraySome.js"),
				o = r("./node_modules/lodash/_baseIteratee.js"),
				s = r("./node_modules/lodash/_baseSome.js"),
				i = r("./node_modules/lodash/isArray.js"),
				u = r("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, n, r) {
				var a = i(e) ? t : s;
				return r && u(e, n, r) && (n = void 0), a(e, o(n, 3))
			}
		},
		"./node_modules/lodash/toPlainObject.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_copyObject.js"),
				o = r("./node_modules/lodash/keysIn.js");
			e.exports = function(e) {
				return t(e, o(e))
			}
		},
		"./node_modules/lodash/union.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_baseFlatten.js"),
				o = r("./node_modules/lodash/_baseRest.js"),
				s = r("./node_modules/lodash/_baseUniq.js"),
				i = r("./node_modules/lodash/isArrayLikeObject.js"),
				u = o((function(e) {
					return s(t(e, 1, i, !0))
				}));
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
				s = r("./node_modules/lodash/_baseXor.js"),
				i = r("./node_modules/lodash/isArrayLikeObject.js"),
				u = o((function(e) {
					return s(t(e, i))
				}));
			e.exports = u
		},
		"./node_modules/lodash/xorWith.js": function(e, n, r) {
			var t = r("./node_modules/lodash/_arrayFilter.js"),
				o = r("./node_modules/lodash/_baseRest.js"),
				s = r("./node_modules/lodash/_baseXor.js"),
				i = r("./node_modules/lodash/isArrayLikeObject.js"),
				u = r("./node_modules/lodash/last.js"),
				a = o((function(e) {
					var n = u(e);
					return n = "function" == typeof n ? n : void 0, s(t(e, i), void 0, n)
				}));
			e.exports = a
		},
		"./node_modules/ts-error/lib/cjs.js": function(e, n, r) {
			"use strict";
			n.__esModule = void 0, n.__esModule = !0;
			var t = r("./node_modules/ts-error/lib/helpers.js"),
				o = t.setPrototypeOf,
				s = t.getPrototypeOf,
				i = t.defineProperty,
				u = t.objectCreate,
				a = "[object Error]" === (new Error).toString(),
				l = "";

			function c(e) {
				var n, r = this.constructor,
					t = r.name || (null === (n = r.toString().match(/^function\s*([^\s(]+)/)) ? l || "Error" : n[1]),
					u = "Error" === t,
					d = u ? l : t,
					f = Error.apply(this, arguments);
				if (o(f, s(this)), !(f instanceof r && f instanceof c)) {
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
					}), Error.captureStackTrace && Error.captureStackTrace(f, u ? c : r), void 0 === f.stack) {
					var h = new Error(e);
					h.name = f.name, f.stack = h.stack
				}
				return a && i(f, "toString", {
					configurable: !0,
					enumerable: !1,
					value: function() {
						return (this.name || "Error") + (void 0 === this.message ? "" : ": " + this.message)
					},
					writable: !0
				}), f
			}
			l = c.name || "ExtendableError", c.prototype = u(Error.prototype, {
				constructor: {
					value: Error,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), n.ExtendableError = c, n.default = n.ExtendableError
		},
		"./node_modules/ts-error/lib/helpers.js": function(e, n, r) {
			"use strict";
			n.__esModule = void 0, n.__esModule = !0;
			var t = "function" == typeof Object.setPrototypeOf,
				o = "function" == typeof Object.getPrototypeOf,
				s = "function" == typeof Object.defineProperty,
				i = "function" == typeof Object.create,
				u = "function" == typeof Object.prototype.hasOwnProperty;
			n.setPrototypeOf = function(e, n) {
				t ? Object.setPrototypeOf(e, n) : e.__proto__ = n
			};
			n.getPrototypeOf = function(e) {
				return o ? Object.getPrototypeOf(e) : e.__proto__ || e.prototype
			};
			var a = !1;
			n.defineProperty = function e(n, r, t) {
				if (s && !a) try {
					Object.defineProperty(n, r, t)
				} catch (o) {
					a = !0, e(n, r, t)
				} else n[r] = t.value
			};
			var l = function(e, n) {
				return u ? e.hasOwnProperty(e, n) : void 0 === e[n]
			};
			n.hasOwnProperty = l;
			n.objectCreate = function(e, n) {
				if (i) return Object.create(e, n);
				var r = function() {};
				r.prototype = e;
				var t = new r;
				if (void 0 === n) return t;
				if ("null" == typeof n) throw new Error("PropertyDescriptors must not be null.");
				if ("object" == typeof n)
					for (var o in n) l(n, o) && (t[o] = n[o].value);
				return t
			}
		}
	}
]);
//# sourceMappingURL=vendors~Governance~Reddit.4c211b0a3d96c936c2cb.js.map