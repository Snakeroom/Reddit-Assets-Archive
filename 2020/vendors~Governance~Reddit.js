// https://www.redditstatic.com/desktop2x/vendors~Governance~Reddit.a5afa7976641825374e8.js
// Retrieved at 6/24/2020, 5:40:07 PM by Reddit Dataminer v1.0.0
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

				function a(e) {
					return new RegExp("^http(s)?:\\/\\/" + e.join("|") + "$", "i")
				}
				var l = [r],
					c = a(l),
					d = [t],
					f = u(d),
					h = {},
					p = !1;

				function m(n, o, r) {
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
						return m(n, t), {
							off: function() {
								_(n, t)
							}
						}
					},
					y = (n.receiveMessageOnce = function(e, n, r, t) {
						var s = j(e, n, (function() {
							r && r.apply(void 0, o), s.off()
						}), t);
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
						var o = document.createEvent("CustomEvent");
						return o.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), o
					}).prototype = e.Event.prototype
				}
				n.addPostMessageOrigin = function(e) {
					g(e) ? l = [r] : -1 === l.indexOf(e) && (y(r), l.push(e), c = a(l))
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
							var s = new b(r, {
								detail: o.data
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
					var o = h[e];
					o ? o.targets = [].concat(o.targets, n) : o = {
						targets: n
					}, h[e] = o
				}
			}).call(this, o("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/aggregate-error/index.js": function(e, n, o) {
			"use strict";
			const r = o("./node_modules/indent-string/index.js"),
				t = o("./node_modules/clean-stack/index.js"),
				s = e => e.replace(/\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g, "");
			class AggregateError extends Error {
				constructor(e) {
					if (!Array.isArray(e)) throw new TypeError(`Expected input to be an Array, got ${typeof e}`);
					let n = (e = [...e].map(e => e instanceof Error ? e : null !== e && "object" == typeof e ? Object.assign(new Error(e.message), e) : new Error(e))).map(e => "string" == typeof e.stack ? s(t(e.stack)) : String(e)).join("\n");
					super(n = "\n" + r(n, 4)), this.name = "AggregateError", Object.defineProperty(this, "_errors", {
						value: e
					})
				}*[Symbol.iterator]() {
					for (const e of this._errors) yield e
				}
			}
			e.exports = AggregateError
		},
		"./node_modules/bignumber.js/bignumber.js": function(e, n, o) {
			var r;
			! function(t) {
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
						a = e.e,
						l = n.e;
					if (!i || !u) return null;
					if (o = t && !t[0], r = s && !s[0], o || r) return o ? r ? 0 : -u : i;
					if (i != u) return i;
					if (o = i < 0, r = a == l, !t || !s) return r ? 0 : !t ^ o ? 1 : -1;
					if (!r) return a > l ^ o ? 1 : -1;
					for (u = (a = t.length) < (l = s.length) ? a : l, i = 0; i < u; i++)
						if (t[i] != s[i]) return t[i] > s[i] ^ o ? 1 : -1;
					return a == l ? 0 : a > l ^ o ? 1 : -1
				}

				function y(e, n, o, r) {
					if (e < n || e > o || e !== (e < 0 ? u(e) : a(e))) throw Error(l + (r || "Argument") + ("number" == typeof e ? e < n || e > o ? " out of range: " : " not an integer: " : " not a primitive number: ") + e)
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
					var o, r, t, s, x, A, N, P, S, L = $.prototype = {
							constructor: $,
							toString: null,
							valueOf: null
						},
						I = new $(1),
						M = 20,
						R = 4,
						C = -7,
						D = 21,
						k = -1e7,
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
						var o, s, u, l, d, p, m, _, g = this;
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
								if (!i.test(_ = e + "")) return t(g, _, p);
								g.s = 45 == _.charCodeAt(0) ? (_ = _.slice(1), -1) : 1
							}(l = _.indexOf(".")) > -1 && (_ = _.replace(".", "")), (d = _.search(/e/i)) > 0 ? (l < 0 && (l = d), l += +_.slice(d + 1), _ = _.substring(0, d)) : l < 0 && (l = _.length)
						} else {
							if (y(n, 2, G.length, "Base"), _ = e + "", 10 == n) return z(g = new $(e instanceof $ ? e : _), M + g.e + 1, R);
							if (p = "number" == typeof e) {
								if (0 * e != 0) return t(g, _, p, n);
								if (g.s = 1 / e < 0 ? (_ = _.slice(1), -1) : 1, $.DEBUG && _.replace(/^0\.0*|\./, "").length > 15) throw Error(c + e);
								p = !1
							} else g.s = 45 === _.charCodeAt(0) ? (_ = _.slice(1), -1) : 1;
							for (o = G.slice(0, n), l = d = 0, m = _.length; d < m; d++)
								if (o.indexOf(s = _.charAt(d)) < 0) {
									if ("." == s) {
										if (d > l) {
											l = m;
											continue
										}
									} else if (!u && (_ == _.toUpperCase() && (_ = _.toLowerCase()) || _ == _.toLowerCase() && (_ = _.toUpperCase()))) {
										u = !0, d = -1, l = 0;
										continue
									}
									return t(g, e + "", p, n)
								}(l = (_ = r(_, n, 10, g.s)).indexOf(".")) > - 1 ? _ = _.replace(".", "") : l = _.length
						}
						for (d = 0; 48 === _.charCodeAt(d); d++);
						for (m = _.length; 48 === _.charCodeAt(--m););
						if (_ = _.slice(d, ++m)) {
							if (m -= d, p && $.DEBUG && m > 15 && (e > h || e !== a(e))) throw Error(c + g.s * e);
							if ((l = l - d - 1) > T) g.c = g.e = null;
							else if (l < k) g.c = [g.e = 0];
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

					function V(e, n, o, r) {
						var t, s, i, u, a;
						if (null == o ? o = R : y(o, 0, 8), !e.c) return e.toString();
						if (t = e.c[0], i = e.e, null == n) a = v(e.c), a = 1 == r || 2 == r && i <= C ? O(a, i) : E(a, i, "0");
						else if (s = (e = z(new $(e), n, o)).e, u = (a = v(e.c)).length, 1 == r || 2 == r && (n <= s || s <= C)) {
							for (; u < n; a += "0", u++);
							a = O(a, s)
						} else if (n -= i, a = E(a, s, "0"), s + 1 > u) {
							if (--n > 0)
								for (a += "."; n--; a += "0");
						} else if ((n += s - u) > 0)
							for (s + 1 == u && (a += "."); n--; a += "0");
						return e.s < 0 && t ? "-" + a : a
					}

					function H(e, n) {
						var o, r, t = 0;
						for (b(e[0]) && (e = e[0]), o = new $(e[0]); ++t < e.length;) {
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
						return (o = r + o * f - 1) > T ? e.c = e.e = null : o < k ? e.c = [e.e = 0] : (e.e = o, e.c = n), e
					}

					function z(e, n, o, r) {
						var t, s, i, l, c, h, m, _ = e.c,
							g = p;
						if (_) {
							e: {
								for (t = 1, l = _[0]; l >= 10; l /= 10, t++);
								if ((s = n - t) < 0) s += f,
								i = n,
								m = (c = _[h = 0]) / g[t - i - 1] % 10 | 0;
								else if ((h = u((s + 1) / f)) >= _.length) {
									if (!r) break e;
									for (; _.length <= h; _.push(0));
									c = m = 0, t = 1, i = (s %= f) - f + 1
								} else {
									for (c = l = _[h], t = 1; l >= 10; l /= 10, t++);
									m = (i = (s %= f) - f + t) < 0 ? 0 : c / g[t - i - 1] % 10 | 0
								}
								if (r = r || n < 0 || null != _[h + 1] || (i < 0 ? c : c % g[t - i - 1]), r = o < 4 ? (m || r) && (0 == o || o == (e.s < 0 ? 3 : 2)) : m > 5 || 5 == m && (4 == o || r || 6 == o && (s > 0 ? i > 0 ? c / g[t - i] : 0 : _[h - 1]) % 10 & 1 || o == (e.s < 0 ? 8 : 7)), n < 1 || !_[0]) return _.length = 0,
								r ? (n -= e.e + 1, _[0] = g[(f - n % f) % f], e.e = -n || 0) : _[0] = e.e = 0,
								e;
								if (0 == s ? (_.length = h, l = 1, h--) : (_.length = h + 1, l = g[f - s], _[h] = i > 0 ? a(c / g[t - i] % g[i]) * l : 0), r)
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
							e.e > T ? e.c = e.e = null : e.e < k && (e.c = [e.e = 0])
						}
						return e
					}
					return $.clone = e, $.ROUND_UP = 0, $.ROUND_DOWN = 1, $.ROUND_CEIL = 2, $.ROUND_FLOOR = 3, $.ROUND_HALF_UP = 4, $.ROUND_HALF_DOWN = 5, $.ROUND_HALF_EVEN = 6, $.ROUND_HALF_CEIL = 7, $.ROUND_HALF_FLOOR = 8, $.EUCLID = 9, $.config = $.set = function(e) {
						var n, o;
						if (null != e) {
							if ("object" != typeof e) throw Error(l + "Object expected: " + e);
							if (e.hasOwnProperty(n = "DECIMAL_PLACES") && (y(o = e[n], 0, _, n), M = o), e.hasOwnProperty(n = "ROUNDING_MODE") && (y(o = e[n], 0, 8, n), R = o), e.hasOwnProperty(n = "EXPONENTIAL_AT") && (b(o = e[n]) ? (y(o[0], -_, 0, n), y(o[1], 0, _, n), C = o[0], D = o[1]) : (y(o, -_, _, n), C = -(D = o < 0 ? -o : o))), e.hasOwnProperty(n = "RANGE"))
								if (b(o = e[n])) y(o[0], -_, -1, n), y(o[1], 1, _, n), k = o[0], T = o[1];
								else {
									if (y(o, -_, _, n), !o) throw Error(l + n + " cannot be zero: " + o);
									k = -(T = o < 0 ? -o : o)
								} if (e.hasOwnProperty(n = "CRYPTO")) {
								if ((o = e[n]) !== !!o) throw Error(l + n + " not true or false: " + o);
								if (o) {
									if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw B = !o, Error(l + "crypto unavailable");
									B = o
								} else B = o
							}
							if (e.hasOwnProperty(n = "MODULO_MODE") && (y(o = e[n], 0, 9, n), U = o), e.hasOwnProperty(n = "POW_PRECISION") && (y(o = e[n], 0, _, n), F = o), e.hasOwnProperty(n = "FORMAT")) {
								if ("object" != typeof(o = e[n])) throw Error(l + n + " not an object: " + o);
								q = o
							}
							if (e.hasOwnProperty(n = "ALPHABET")) {
								if ("string" != typeof(o = e[n]) || /^.$|\.|(.).*\1/.test(o)) throw Error(l + n + " invalid: " + o);
								G = o
							}
						}
						return {
							DECIMAL_PLACES: M,
							ROUNDING_MODE: R,
							EXPONENTIAL_AT: [C, D],
							RANGE: [k, T],
							CRYPTO: B,
							MODULO_MODE: U,
							POW_PRECISION: F,
							FORMAT: q,
							ALPHABET: G
						}
					}, $.isBigNumber = function(e) {
						return e instanceof $ || e && !0 === e._isBigNumber || !1
					}, $.maximum = $.max = function() {
						return H(arguments, L.lt)
					}, $.minimum = $.min = function() {
						return H(arguments, L.gt)
					}, $.random = (s = 9007199254740992 * Math.random() & 2097151 ? function() {
						return a(9007199254740992 * Math.random())
					} : function() {
						return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
					}, function(e) {
						var n, o, r, t, i, c = 0,
							d = [],
							h = new $(I);
						if (null == e ? e = M : y(e, 0, _), t = u(e / f), B)
							if (crypto.getRandomValues) {
								for (n = crypto.getRandomValues(new Uint32Array(t *= 2)); c < t;)(i = 131072 * n[c] + (n[c + 1] >>> 11)) >= 9e15 ? (o = crypto.getRandomValues(new Uint32Array(2)), n[c] = o[0], n[c + 1] = o[1]) : (d.push(i % 1e14), c += 2);
								c = t / 2
							} else {
								if (!crypto.randomBytes) throw B = !1, Error(l + "crypto unavailable");
								for (n = crypto.randomBytes(t *= 7); c < t;)(i = 281474976710656 * (31 & n[c]) + 1099511627776 * n[c + 1] + 4294967296 * n[c + 2] + 16777216 * n[c + 3] + (n[c + 4] << 16) + (n[c + 5] << 8) + n[c + 6]) >= 9e15 ? crypto.randomBytes(7).copy(n, c) : (d.push(i % 1e14), c += 7);
								c = t / 7
							} if (!B)
							for (; c < t;)(i = s()) < 9e15 && (d[c++] = i % 1e14);
						for (t = d[--c], e %= f, t && e && (i = p[f - e], d[c] = a(t / i) * i); 0 === d[c]; d.pop(), c--);
						if (c < 0) d = [r = 0];
						else {
							for (r = -1; 0 === d[0]; d.splice(0, 1), r -= f);
							for (c = 1, i = d[0]; i >= 10; i /= 10, c++);
							c < f && (r -= f - c)
						}
						return h.e = r, h.c = d, h
					}), r = function() {
						function e(e, n, o, r) {
							for (var t, s, i = [0], u = 0, a = e.length; u < a;) {
								for (s = i.length; s--; i[s] *= n);
								for (i[0] += r.indexOf(e.charAt(u++)), t = 0; t < i.length; t++) i[t] > o - 1 && (null == i[t + 1] && (i[t + 1] = 0), i[t + 1] += i[t] / o | 0, i[t] %= o)
							}
							return i.reverse()
						}
						return function(n, r, t, s, i) {
							var u, a, l, c, d, f, h, p, m = n.indexOf("."),
								_ = M,
								g = R;
							for (m >= 0 && (c = F, F = 0, n = n.replace(".", ""), f = (p = new $(r)).pow(n.length - m), F = c, p.c = e(E(v(f.c), f.e, "0"), 10, t, "0123456789"), p.e = p.c.length), l = c = (h = e(n, r, t, i ? (u = G, "0123456789") : (u = "0123456789", G))).length; 0 == h[--c]; h.pop());
							if (!h[0]) return u.charAt(0);
							if (m < 0 ? --l : (f.c = h, f.e = l, f.s = s, h = (f = o(f, p, _, g, t)).c, d = f.r, l = f.e), m = h[a = l + _ + 1], c = t / 2, d = d || a < 0 || null != h[a + 1], d = g < 4 ? (null != m || d) && (0 == g || g == (f.s < 0 ? 3 : 2)) : m > c || m == c && (4 == g || d || 6 == g && 1 & h[a - 1] || g == (f.s < 0 ? 8 : 7)), a < 1 || !h[0]) n = d ? E(u.charAt(1), -_, u.charAt(0)) : u.charAt(0);
							else {
								if (h.length = a, d)
									for (--t; ++h[--a] > t;) h[a] = 0, a || (++l, h = [1].concat(h));
								for (c = h.length; !h[--c];);
								for (m = 0, n = ""; m <= c; n += u.charAt(h[m++]));
								n = E(n, l, u.charAt(0))
							}
							return n
						}
					}(), o = function() {
						function e(e, n, o) {
							var r, t, s, i, u = 0,
								a = e.length,
								l = n % m,
								c = n / m | 0;
							for (e = e.slice(); a--;) u = ((t = l * (s = e[a] % m) + (r = c * s + (i = e[a] / m | 0) * l) % m * m + u) / o | 0) + (r / m | 0) + c * i, e[a] = t % o;
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
							var l, c, h, p, m, _, v, j, y, b, w, O, E, x, A, N, P, S = r.s == t.s ? 1 : -1,
								L = r.c,
								I = t.c;
							if (!(L && L[0] && I && I[0])) return new $(r.s && t.s && (L ? !I || L[0] != I[0] : I) ? L && 0 == L[0] || !I ? 0 * S : S / 0 : NaN);
							for (y = (j = new $(S)).c = [], S = s + (c = r.e - t.e) + 1, u || (u = d, c = g(r.e / f) - g(t.e / f), S = S / f | 0), h = 0; I[h] == (L[h] || 0); h++);
							if (I[h] > (L[h] || 0) && c--, S < 0) y.push(1), p = !0;
							else {
								for (x = L.length, N = I.length, h = 0, S += 2, (m = a(u / (I[0] + 1))) > 1 && (I = e(I, m, u), L = e(L, m, u), N = I.length, x = L.length), E = N, w = (b = L.slice(0, N)).length; w < N; b[w++] = 0);
								P = I.slice(), P = [0].concat(P), A = I[0], I[1] >= u / 2 && A++;
								do {
									if (m = 0, (l = n(I, b, N, w)) < 0) {
										if (O = b[0], N != w && (O = O * u + (b[1] || 0)), (m = a(O / A)) > 1)
											for (m >= u && (m = u - 1), v = (_ = e(I, m, u)).length, w = b.length; 1 == n(_, b, v, w);) m--, o(_, N < v ? P : I, v, u), v = _.length, l = 1;
										else 0 == m && (l = m = 1), v = (_ = I.slice()).length;
										if (v < w && (_ = [0].concat(_)), o(b, _, w, u), w = b.length, -1 == l)
											for (; n(I, b, N, w) < 1;) m++, o(b, N < w ? P : I, w, u), w = b.length
									} else 0 === l && (m++, b = [0]);
									y[h++] = m, b[0] ? b[w++] = L[E] || 0 : (b = [L[E]], w = 1)
								} while ((E++ < x || null != b[0]) && S--);
								p = null != b[0], y[0] || y.splice(0, 1)
							}
							if (u == d) {
								for (h = 1, S = y[0]; S >= 10; S /= 10, h++);
								z(j, s + (j.e = h + c * f - 1) + 1, i, p)
							} else j.e = c, j.r = +p;
							return j
						}
					}(), x = /^(-?)0([xbo])(?=\w[\w.]*$)/i, A = /^([^.]+)\.$/, N = /^\.([^.]+)$/, P = /^-?(Infinity|NaN)$/, S = /^\s*\+(?=[\w.])|^\s+|\s+$/g, t = function(e, n, o, r) {
						var t, s = o ? n : n.replace(S, "");
						if (P.test(s)) e.s = isNaN(s) ? null : s < 0 ? -1 : 1, e.c = e.e = null;
						else {
							if (!o && (s = s.replace(x, (function(e, n, o) {
									return t = "x" == (o = o.toLowerCase()) ? 16 : "b" == o ? 2 : 8, r && r != t ? e : n
								})), r && (t = r, s = s.replace(A, "$1").replace(N, "0.$1")), n != s)) return new $(s, t);
							if ($.DEBUG) throw Error(l + "Not a" + (r ? " base " + r : "") + " number: " + n);
							e.c = e.e = e.s = null
						}
					}, L.absoluteValue = L.abs = function() {
						var e = new $(this);
						return e.s < 0 && (e.s = 1), e
					}, L.comparedTo = function(e, n) {
						return j(this, new $(e, n))
					}, L.decimalPlaces = L.dp = function(e, n) {
						var o, r, t, s = this;
						if (null != e) return y(e, 0, _), null == n ? n = R : y(n, 0, 8), z(new $(s), e + s.e + 1, n);
						if (!(o = s.c)) return null;
						if (r = ((t = o.length - 1) - g(this.e / f)) * f, t = o[t])
							for (; t % 10 == 0; t /= 10, r--);
						return r < 0 && (r = 0), r
					}, L.dividedBy = L.div = function(e, n) {
						return o(this, new $(e, n), M, R)
					}, L.dividedToIntegerBy = L.idiv = function(e, n) {
						return o(this, new $(e, n), 0, 1)
					}, L.exponentiatedBy = L.pow = function(e, n) {
						var o, r, t, s, i, c, d, h = this;
						if ((e = new $(e)).c && !e.isInteger()) throw Error(l + "Exponent not an integer: " + e);
						if (null != n && (n = new $(n)), s = e.e > 14, !h.c || !h.c[0] || 1 == h.c[0] && !h.e && 1 == h.c.length || !e.c || !e.c[0]) return d = new $(Math.pow(+h.valueOf(), s ? 2 - w(e) : +e)), n ? d.mod(n) : d;
						if (i = e.s < 0, n) {
							if (n.c ? !n.c[0] : !n.s) return new $(NaN);
							(r = !i && h.isInteger() && n.isInteger()) && (h = h.mod(n))
						} else {
							if (e.e > 9 && (h.e > 0 || h.e < -1 || (0 == h.e ? h.c[0] > 1 || s && h.c[1] >= 24e7 : h.c[0] < 8e13 || s && h.c[0] <= 9999975e7))) return t = h.s < 0 && w(e) ? -0 : 0, h.e > -1 && (t = 1 / t), new $(i ? 1 / t : t);
							F && (t = u(F / f + 2))
						}
						for (s ? (o = new $(.5), c = w(e)) : c = e % 2, i && (e.s = 1), d = new $(I);;) {
							if (c) {
								if (!(d = d.times(h)).c) break;
								t ? d.c.length > t && (d.c.length = t) : r && (d = d.mod(n))
							}
							if (s) {
								if (z(e = e.times(o), e.e + 1, 1), !e.c[0]) break;
								s = e.e > 14, c = w(e)
							} else {
								if (!(e = a(e / 2))) break;
								c = e % 2
							}
							h = h.times(h), t ? h.c && h.c.length > t && (h.c.length = t) : r && (h = h.mod(n))
						}
						return r ? d : (i && (d = I.div(d)), n ? d.mod(n) : t ? z(d, F, R, void 0) : d)
					}, L.integerValue = function(e) {
						var n = new $(this);
						return null == e ? e = R : y(e, 0, 8), z(n, n.e + 1, e)
					}, L.isEqualTo = L.eq = function(e, n) {
						return 0 === j(this, new $(e, n))
					}, L.isFinite = function() {
						return !!this.c
					}, L.isGreaterThan = L.gt = function(e, n) {
						return j(this, new $(e, n)) > 0
					}, L.isGreaterThanOrEqualTo = L.gte = function(e, n) {
						return 1 === (n = j(this, new $(e, n))) || 0 === n
					}, L.isInteger = function() {
						return !!this.c && g(this.e / f) > this.c.length - 2
					}, L.isLessThan = L.lt = function(e, n) {
						return j(this, new $(e, n)) < 0
					}, L.isLessThanOrEqualTo = L.lte = function(e, n) {
						return -1 === (n = j(this, new $(e, n))) || 0 === n
					}, L.isNaN = function() {
						return !this.s
					}, L.isNegative = function() {
						return this.s < 0
					}, L.isPositive = function() {
						return this.s > 0
					}, L.isZero = function() {
						return !!this.c && 0 == this.c[0]
					}, L.minus = function(e, n) {
						var o, r, t, s, i = this,
							u = i.s;
						if (n = (e = new $(e, n)).s, !u || !n) return new $(NaN);
						if (u != n) return e.s = -n, i.plus(e);
						var a = i.e / f,
							l = e.e / f,
							c = i.c,
							h = e.c;
						if (!a || !l) {
							if (!c || !h) return c ? (e.s = -n, e) : new $(h ? i : NaN);
							if (!c[0] || !h[0]) return h[0] ? (e.s = -n, e) : new $(c[0] ? i : 3 == R ? -0 : 0)
						}
						if (a = g(a), l = g(l), c = c.slice(), u = a - l) {
							for ((s = u < 0) ? (u = -u, t = c) : (l = a, t = h), t.reverse(), n = u; n--; t.push(0));
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
						for (; 0 == c[0]; c.splice(0, 1), --l);
						return c[0] ? W(e, c, l) : (e.s = 3 == R ? -1 : 1, e.c = [e.e = 0], e)
					}, L.modulo = L.mod = function(e, n) {
						var r, t, s = this;
						return e = new $(e, n), !s.c || !e.s || e.c && !e.c[0] ? new $(NaN) : !e.c || s.c && !s.c[0] ? new $(s) : (9 == U ? (t = e.s, e.s = 1, r = o(s, e, 0, 3), e.s = t, r.s *= t) : r = o(s, e, 0, U), (e = s.minus(r.times(e))).c[0] || 1 != U || (e.s = s.s), e)
					}, L.multipliedBy = L.times = function(e, n) {
						var o, r, t, s, i, u, a, l, c, h, p, _, v, j, y, b = this,
							w = b.c,
							O = (e = new $(e, n)).c;
						if (!(w && O && w[0] && O[0])) return !b.s || !e.s || w && !w[0] && !O || O && !O[0] && !w ? e.c = e.e = e.s = null : (e.s *= b.s, w && O ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
						for (r = g(b.e / f) + g(e.e / f), e.s *= b.s, (a = w.length) < (h = O.length) && (v = w, w = O, O = v, t = a, a = h, h = t), t = a + h, v = []; t--; v.push(0));
						for (j = d, y = m, t = h; --t >= 0;) {
							for (o = 0, p = O[t] % y, _ = O[t] / y | 0, s = t + (i = a); s > t;) o = ((l = p * (l = w[--i] % y) + (u = _ * l + (c = w[i] / y | 0) * p) % y * y + v[s] + o) / j | 0) + (u / y | 0) + _ * c, v[s--] = l % j;
							v[s] = o
						}
						return o ? ++r : v.splice(0, 1), W(e, v, r)
					}, L.negated = function() {
						var e = new $(this);
						return e.s = -e.s || null, e
					}, L.plus = function(e, n) {
						var o, r = this,
							t = r.s;
						if (n = (e = new $(e, n)).s, !t || !n) return new $(NaN);
						if (t != n) return e.s = -n, r.minus(e);
						var s = r.e / f,
							i = e.e / f,
							u = r.c,
							a = e.c;
						if (!s || !i) {
							if (!u || !a) return new $(t / 0);
							if (!u[0] || !a[0]) return a[0] ? e : new $(u[0] ? r : 0 * t)
						}
						if (s = g(s), i = g(i), u = u.slice(), t = s - i) {
							for (t > 0 ? (i = s, o = a) : (t = -t, o = u), o.reverse(); t--; o.push(0));
							o.reverse()
						}
						for ((t = u.length) - (n = a.length) < 0 && (o = a, a = u, u = o, n = t), t = 0; n;) t = (u[--n] = u[n] + a[n] + t) / d | 0, u[n] = d === u[n] ? 0 : u[n] % d;
						return t && (u = [t].concat(u), ++i), W(e, u, i)
					}, L.precision = L.sd = function(e, n) {
						var o, r, t, s = this;
						if (null != e && e !== !!e) return y(e, 1, _), null == n ? n = R : y(n, 0, 8), z(new $(s), e, n);
						if (!(o = s.c)) return null;
						if (r = (t = o.length - 1) * f + 1, t = o[t]) {
							for (; t % 10 == 0; t /= 10, r--);
							for (t = o[0]; t >= 10; t /= 10, r++);
						}
						return e && s.e + 1 > r && (r = s.e + 1), r
					}, L.shiftedBy = function(e) {
						return y(e, -h, h), this.times("1e" + e)
					}, L.squareRoot = L.sqrt = function() {
						var e, n, r, t, s, i = this,
							u = i.c,
							a = i.s,
							l = i.e,
							c = M + 4,
							d = new $("0.5");
						if (1 !== a || !u || !u[0]) return new $(!a || a < 0 && (!u || u[0]) ? NaN : u ? i : 1 / 0);
						if (0 == (a = Math.sqrt(+i)) || a == 1 / 0 ? (((n = v(u)).length + l) % 2 == 0 && (n += "0"), a = Math.sqrt(n), l = g((l + 1) / 2) - (l < 0 || l % 2), r = new $(n = a == 1 / 0 ? "1e" + l : (n = a.toExponential()).slice(0, n.indexOf("e") + 1) + l)) : r = new $(a + ""), r.c[0])
							for ((a = (l = r.e) + c) < 3 && (a = 0);;)
								if (s = r, r = d.times(s.plus(o(i, s, c, 1))), v(s.c).slice(0, a) === (n = v(r.c)).slice(0, a)) {
									if (r.e < l && --a, "9999" != (n = n.slice(a - 3, a + 1)) && (t || "4999" != n)) {
										+n && (+n.slice(1) || "5" != n.charAt(0)) || (z(r, r.e + M + 2, 1), e = !r.times(r).eq(i));
										break
									}
									if (!t && (z(s, s.e + M + 2, 0), s.times(s).eq(i))) {
										r = s;
										break
									}
									c += 4, a += 4, t = 1
								} return z(r, r.e + M + 1, R, e)
					}, L.toExponential = function(e, n) {
						return null != e && (y(e, 0, _), e++), V(this, e, n, 1)
					}, L.toFixed = function(e, n) {
						return null != e && (y(e, 0, _), e = e + this.e + 1), V(this, e, n)
					}, L.toFormat = function(e, n) {
						var o = this.toFixed(e, n);
						if (this.c) {
							var r, t = o.split("."),
								s = +q.groupSize,
								i = +q.secondaryGroupSize,
								u = q.groupSeparator,
								a = t[0],
								l = t[1],
								c = this.s < 0,
								d = c ? a.slice(1) : a,
								f = d.length;
							if (i && (r = s, s = i, i = r, f -= r), s > 0 && f > 0) {
								for (r = f % s || s, a = d.substr(0, r); r < f; r += s) a += u + d.substr(r, s);
								i > 0 && (a += u + d.slice(r)), c && (a = "-" + a)
							}
							o = l ? a + q.decimalSeparator + ((i = +q.fractionGroupSize) ? l.replace(new RegExp("\\d{" + i + "}\\B", "g"), "$&" + q.fractionGroupSeparator) : l) : a
						}
						return o
					}, L.toFraction = function(e) {
						var n, r, t, s, i, u, a, c, d, h, m, _, g = this,
							j = g.c;
						if (null != e && (!(c = new $(e)).isInteger() && (c.c || 1 !== c.s) || c.lt(I))) throw Error(l + "Argument " + (c.isInteger() ? "out of range: " : "not an integer: ") + e);
						if (!j) return g.toString();
						for (r = new $(I), h = t = new $(I), s = d = new $(I), _ = v(j), u = r.e = _.length - g.e - 1, r.c[0] = p[(a = u % f) < 0 ? f + a : a], e = !e || c.comparedTo(r) > 0 ? u > 0 ? r : h : c, a = T, T = 1 / 0, c = new $(_), d.c[0] = 0; m = o(c, r, 0, 1), 1 != (i = t.plus(m.times(s))).comparedTo(e);) t = s, s = i, h = d.plus(m.times(i = h)), d = i, r = c.minus(m.times(i = r)), c = i;
						return i = o(e.minus(t), s, 0, 1), d = d.plus(i.times(h)), t = t.plus(i.times(s)), d.s = h.s = g.s, n = o(h, s, u *= 2, R).minus(g).abs().comparedTo(o(d, t, u, R).minus(g).abs()) < 1 ? [h.toString(), s.toString()] : [d.toString(), t.toString()], T = a, n
					}, L.toNumber = function() {
						return +this
					}, L.toPrecision = function(e, n) {
						return null != e && y(e, 1, _), V(this, e, n, 2)
					}, L.toString = function(e) {
						var n, o = this,
							t = o.s,
							s = o.e;
						return null === s ? t ? (n = "Infinity", t < 0 && (n = "-" + n)) : n = "NaN" : (n = v(o.c), null == e ? n = s <= C || s >= D ? O(n, s) : E(n, s, "0") : (y(e, 2, G.length, "Base"), n = r(E(n, s, "0"), 10, e, t, !0)), t < 0 && o.c[0] && (n = "-" + n)), n
					}, L.valueOf = L.toJSON = function() {
						var e, n = this,
							o = n.e;
						return null === o ? n.toString() : (e = v(n.c), e = o <= C || o >= D ? O(e, o) : E(e, o, "0"), n.s < 0 ? "-" + e : e)
					}, L._isBigNumber = !0, null != n && $.set(n), $
				}()).default = s.BigNumber = s, void 0 === (r = function() {
					return s
				}.call(n, o, n, e)) || (e.exports = r)
			}()
		},
		"./node_modules/clean-stack/index.js": function(e, n, o) {
			"use strict";
			const r = o("ignored /drone/src/node_modules/clean-stack os"),
				t = /\s+at.*(?:\(|\s)(.*)\)?/,
				s = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/,
				i = void 0 === r.homedir ? "" : r.homedir();
			e.exports = (e, n) => (n = Object.assign({
				pretty: !1
			}, n), e.replace(/\\/g, "/").split("\n").filter(e => {
				const n = e.match(t);
				if (null === n || !n[1]) return !0;
				const o = n[1];
				return !o.includes(".app/Contents/Resources/electron.asar") && !o.includes(".app/Contents/Resources/default_app.asar") && !s.test(o)
			}).filter(e => "" !== e.trim()).map(e => n.pretty ? e.replace(t, (e, n) => e.replace(n, n.replace(i, "~"))) : e).join("\n"))
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
		"./node_modules/indent-string/index.js": function(e, n, o) {
			"use strict";
			e.exports = (e, n = 1, o) => {
				if (o = {
						indent: " ",
						includeEmptyLines: !1,
						...o
					}, "string" != typeof e) throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
				if ("number" != typeof n) throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof n}\``);
				if ("string" != typeof o.indent) throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof o.indent}\``);
				if (0 === n) return e;
				const r = o.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
				return e.replace(r, o.indent.repeat(n))
			}
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
				a = o("./node_modules/lodash/keysIn.js"),
				l = o("./node_modules/lodash/_safeGet.js");
			e.exports = function e(n, o, c, d, f) {
				n !== o && s(o, (function(s, a) {
					if (f || (f = new r), u(s)) i(n, o, a, c, e, d, f);
					else {
						var h = d ? d(l(n, a), s, a + "", n, o, f) : void 0;
						void 0 === h && (h = s), t(n, a, h)
					}
				}), a)
			}
		},
		"./node_modules/lodash/_baseMergeDeep.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_assignMergeValue.js"),
				t = o("./node_modules/lodash/_cloneBuffer.js"),
				s = o("./node_modules/lodash/_cloneTypedArray.js"),
				i = o("./node_modules/lodash/_copyArray.js"),
				u = o("./node_modules/lodash/_initCloneObject.js"),
				a = o("./node_modules/lodash/isArguments.js"),
				l = o("./node_modules/lodash/isArray.js"),
				c = o("./node_modules/lodash/isArrayLikeObject.js"),
				d = o("./node_modules/lodash/isBuffer.js"),
				f = o("./node_modules/lodash/isFunction.js"),
				h = o("./node_modules/lodash/isObject.js"),
				p = o("./node_modules/lodash/isPlainObject.js"),
				m = o("./node_modules/lodash/isTypedArray.js"),
				_ = o("./node_modules/lodash/_safeGet.js"),
				g = o("./node_modules/lodash/toPlainObject.js");
			e.exports = function(e, n, o, v, j, y, b) {
				var w = _(e, o),
					O = _(n, o),
					E = b.get(O);
				if (E) r(e, o, E);
				else {
					var x = y ? y(w, O, o + "", e, n, b) : void 0,
						A = void 0 === x;
					if (A) {
						var N = l(O),
							P = !N && d(O),
							S = !N && !P && m(O);
						x = O, N || P || S ? l(w) ? x = w : c(w) ? x = i(w) : P ? (A = !1, x = t(O, !0)) : S ? (A = !1, x = s(O, !0)) : x = [] : p(O) || a(O) ? (x = w, a(w) ? x = g(w) : h(w) && !f(w) || (x = u(O))) : A = !1
					}
					A && (b.set(O, x), j(x, O, v, y, b), b.delete(O)), r(e, o, x)
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
				for (var u = -1, a = Array(i); ++u < i;)
					for (var l = e[u], c = -1; ++c < i;) c != u && (a[u] = r(a[u] || l, e[c], n, o));
				return s(t(a, 1), n, o)
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
						var a = o[r];
						a && e(n, a, r, i)
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
				a = u.hasOwnProperty,
				l = r((function(e, n) {
					e = Object(e);
					var o = -1,
						r = n.length,
						l = r > 2 ? n[2] : void 0;
					for (l && s(n[0], n[1], l) && (r = 1); ++o < r;)
						for (var c = n[o], d = i(c), f = -1, h = d.length; ++f < h;) {
							var p = d[f],
								m = e[p];
							(void 0 === m || t(m, u[p]) && !a.call(e, p)) && (e[p] = c[p])
						}
					return e
				}));
			e.exports = l
		},
		"./node_modules/lodash/every.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_arrayEvery.js"),
				t = o("./node_modules/lodash/_baseEvery.js"),
				s = o("./node_modules/lodash/_baseIteratee.js"),
				i = o("./node_modules/lodash/isArray.js"),
				u = o("./node_modules/lodash/_isIterateeCall.js");
			e.exports = function(e, n, o) {
				var a = i(e) ? r : t;
				return o && u(e, n, o) && (n = void 0), a(e, s(n, 3))
			}
		},
		"./node_modules/lodash/findLastIndex.js": function(e, n, o) {
			var r = o("./node_modules/lodash/_baseFindIndex.js"),
				t = o("./node_modules/lodash/_baseIteratee.js"),
				s = o("./node_modules/lodash/toInteger.js"),
				i = Math.max,
				u = Math.min;
			e.exports = function(e, n, o) {
				var a = null == e ? 0 : e.length;
				if (!a) return -1;
				var l = a - 1;
				return void 0 !== o && (l = s(o), l = o < 0 ? i(a + l, 0) : u(l, a - 1)), r(e, t(n, 3), l, !0)
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
				var a = i(e) ? r : s;
				return o && u(e, n, o) && (n = void 0), a(e, t(n, 3))
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
				a = t((function(e) {
					var n = u(e);
					return n = "function" == typeof n ? n : void 0, s(r(e, i), void 0, n)
				}));
			e.exports = a
		},
		"./node_modules/ts-error/lib/cjs.js": function(e, n, o) {
			"use strict";
			n.__esModule = void 0, n.__esModule = !0;
			var r = o("./node_modules/ts-error/lib/helpers.js"),
				t = r.setPrototypeOf,
				s = r.getPrototypeOf,
				i = r.defineProperty,
				u = r.objectCreate,
				a = "[object Error]" === (new Error).toString(),
				l = "";

			function c(e) {
				var n, o = this.constructor,
					r = o.name || (null === (n = o.toString().match(/^function\s*([^\s(]+)/)) ? l || "Error" : n[1]),
					u = "Error" === r,
					d = u ? l : r,
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
			var a = !1;
			n.defineProperty = function e(n, o, r) {
				if (s && !a) try {
					Object.defineProperty(n, o, r)
				} catch (t) {
					a = !0, e(n, o, r)
				} else n[o] = r.value
			};
			var l = function(e, n) {
				return u ? e.hasOwnProperty(e, n) : void 0 === e[n]
			};
			n.hasOwnProperty = l;
			n.objectCreate = function(e, n) {
				if (i) return Object.create(e, n);
				var o = function() {};
				o.prototype = e;
				var r = new o;
				if (void 0 === n) return r;
				if ("null" == typeof n) throw new Error("PropertyDescriptors must not be null.");
				if ("object" == typeof n)
					for (var t in n) l(n, t) && (r[t] = n[t].value);
				return r
			}
		}
	}
]);
//# sourceMappingURL=vendors~Governance~Reddit.a5afa7976641825374e8.js.map