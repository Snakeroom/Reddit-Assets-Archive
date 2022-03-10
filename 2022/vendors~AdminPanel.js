// https://www.redditstatic.com/desktop2x/vendors~AdminPanel.e6e59f93c311ab1cce5c.js
// Retrieved at 3/10/2022, 11:20:03 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~AdminPanel"], {
		"./node_modules/@reddit/event-helpers-typescript/dist/esm/index.js": function(e, t, i) {
			"use strict";
			(function(e) {
				i.d(t, "a", (function() {
					return jt
				})), i.d(t, "b", (function() {
					return $t
				}));
				"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e || "undefined" != typeof self && self;

				function s(e, t) {
					return e(t = {
						exports: {}
					}, t.exports), t.exports
				}

				function n(e) {
					return e && e.default || e
				}
				var o, r = s((function(e, t) {
					! function(e) {
						function t() {
							for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
							if (t.length > 1) {
								t[0] = t[0].slice(0, -1);
								for (var s = t.length - 1, n = 1; n < s; ++n) t[n] = t[n].slice(1, -1);
								return t[s] = t[s].slice(1), t.join("")
							}
							return t[0]
						}

						function i(e) {
							return "(?:" + e + ")"
						}

						function s(e) {
							return void 0 === e ? "undefined" : null === e ? "null" : Object.prototype.toString.call(e).split(" ").pop().split("]").shift().toLowerCase()
						}

						function n(e) {
							return e.toUpperCase()
						}

						function o(e) {
							var s = t("[0-9]", "[A-Fa-f]"),
								n = i(i("%[EFef]" + s + "%" + s + s + "%" + s + s) + "|" + i("%[89A-Fa-f]" + s + "%" + s + s) + "|" + i("%" + s + s)),
								o = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
								r = t("[\\:\\/\\?\\#\\[\\]\\@]", o),
								a = e ? "[\\uE000-\\uF8FF]" : "[]",
								d = t("[A-Za-z]", "[0-9]", "[\\-\\.\\_\\~]", e ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]"),
								c = (i("[A-Za-z]" + t("[A-Za-z]", "[0-9]", "[\\+\\-\\.]") + "*"), i(i(n + "|" + t(d, o, "[\\:]")) + "*"), i(i("25[0-5]") + "|" + i("2[0-4][0-9]") + "|" + i("1[0-9][0-9]") + "|" + i("0?[1-9][0-9]") + "|0?0?[0-9]")),
								p = i(c + "\\." + c + "\\." + c + "\\." + c),
								m = i(s + "{1,4}"),
								_ = i(i(m + "\\:" + m) + "|" + p),
								h = i(i(m + "\\:") + "{6}" + _),
								f = i("\\:\\:" + i(m + "\\:") + "{5}" + _),
								l = i(i(m) + "?\\:\\:" + i(m + "\\:") + "{4}" + _),
								u = i(i(i(m + "\\:") + "{0,1}" + m) + "?\\:\\:" + i(m + "\\:") + "{3}" + _),
								g = i(i(i(m + "\\:") + "{0,2}" + m) + "?\\:\\:" + i(m + "\\:") + "{2}" + _),
								y = i(i(i(m + "\\:") + "{0,3}" + m) + "?\\:\\:" + m + "\\:" + _),
								v = i(i(i(m + "\\:") + "{0,4}" + m) + "?\\:\\:" + _),
								b = i(i(i(m + "\\:") + "{0,5}" + m) + "?\\:\\:" + m),
								w = i(i(i(m + "\\:") + "{0,6}" + m) + "?\\:\\:"),
								j = i([h, f, l, u, g, y, v, b, w].join("|")),
								$ = i(i(d + "|" + n) + "+"),
								k = (i("[vV]" + s + "+\\." + t(d, o, "[\\:]") + "+"), i(i(n + "|" + t(d, o)) + "*"), i(n + "|" + t(d, o, "[\\:\\@]")));
							return i(i(n + "|" + t(d, o, "[\\@]")) + "+"), i(i(k + "|" + t("[\\/\\?]", a)) + "*"), {
								NOT_SCHEME: new RegExp(t("[^]", "[A-Za-z]", "[0-9]", "[\\+\\-\\.]"), "g"),
								NOT_USERINFO: new RegExp(t("[^\\%\\:]", d, o), "g"),
								NOT_HOST: new RegExp(t("[^\\%\\[\\]\\:]", d, o), "g"),
								NOT_PATH: new RegExp(t("[^\\%\\/\\:\\@]", d, o), "g"),
								NOT_PATH_NOSCHEME: new RegExp(t("[^\\%\\/\\@]", d, o), "g"),
								NOT_QUERY: new RegExp(t("[^\\%]", d, o, "[\\:\\@\\/\\?]", a), "g"),
								NOT_FRAGMENT: new RegExp(t("[^\\%]", d, o, "[\\:\\@\\/\\?]"), "g"),
								ESCAPE: new RegExp(t("[^]", d, o), "g"),
								UNRESERVED: new RegExp(d, "g"),
								OTHER_CHARS: new RegExp(t("[^\\%]", d, r), "g"),
								PCT_ENCODED: new RegExp(n, "g"),
								IPV4ADDRESS: new RegExp("^(" + p + ")$"),
								IPV6ADDRESS: new RegExp("^\\[?(" + j + ")" + i(i("\\%25|\\%(?!" + s + "{2})") + "(" + $ + ")") + "?\\]?$")
							}
						}
						var r = o(!1),
							a = o(!0),
							d = function(e, t) {
								if (Array.isArray(e)) return e;
								if (Symbol.iterator in Object(e)) return function(e, t) {
									var i = [],
										s = !0,
										n = !1,
										o = void 0;
									try {
										for (var r, a = e[Symbol.iterator](); !(s = (r = a.next()).done) && (i.push(r.value), !t || i.length !== t); s = !0);
									} catch (d) {
										n = !0, o = d
									} finally {
										try {
											!s && a.return && a.return()
										} finally {
											if (n) throw o
										}
									}
									return i
								}(e, t);
								throw new TypeError("Invalid attempt to destructure non-iterable instance")
							},
							c = 2147483647,
							p = /^xn--/,
							m = /[^\0-\x7E]/,
							_ = /[\x2E\u3002\uFF0E\uFF61]/g,
							h = {
								overflow: "Overflow: input needs wider integers to process",
								"not-basic": "Illegal input >= 0x80 (not a basic code point)",
								"invalid-input": "Invalid input"
							},
							f = Math.floor,
							l = String.fromCharCode;

						function u(e) {
							throw new RangeError(h[e])
						}

						function g(e, t) {
							var i = e.split("@"),
								s = "";
							i.length > 1 && (s = i[0] + "@", e = i[1]);
							var n = function(e, t) {
								for (var i = [], s = e.length; s--;) i[s] = t(e[s]);
								return i
							}((e = e.replace(_, ".")).split("."), t).join(".");
							return s + n
						}

						function y(e) {
							for (var t = [], i = 0, s = e.length; i < s;) {
								var n = e.charCodeAt(i++);
								if (n >= 55296 && n <= 56319 && i < s) {
									var o = e.charCodeAt(i++);
									56320 == (64512 & o) ? t.push(((1023 & n) << 10) + (1023 & o) + 65536) : (t.push(n), i--)
								} else t.push(n)
							}
							return t
						}
						var v = function(e, t) {
								return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
							},
							b = function(e, t, i) {
								var s = 0;
								for (e = i ? f(e / 700) : e >> 1, e += f(e / t); e > 455; s += 36) e = f(e / 35);
								return f(s + 36 * e / (e + 38))
							},
							w = function(e) {
								var t, i = [],
									s = e.length,
									n = 0,
									o = 128,
									r = 72,
									a = e.lastIndexOf("-");
								a < 0 && (a = 0);
								for (var d = 0; d < a; ++d) e.charCodeAt(d) >= 128 && u("not-basic"), i.push(e.charCodeAt(d));
								for (var p = a > 0 ? a + 1 : 0; p < s;) {
									for (var m = n, _ = 1, h = 36;; h += 36) {
										p >= s && u("invalid-input");
										var l = (t = e.charCodeAt(p++)) - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : 36;
										(l >= 36 || l > f((c - n) / _)) && u("overflow"), n += l * _;
										var g = h <= r ? 1 : h >= r + 26 ? 26 : h - r;
										if (l < g) break;
										var y = 36 - g;
										_ > f(c / y) && u("overflow"), _ *= y
									}
									var v = i.length + 1;
									r = b(n - m, v, 0 == m), f(n / v) > c - o && u("overflow"), o += f(n / v), n %= v, i.splice(n++, 0, o)
								}
								return String.fromCodePoint.apply(String, i)
							},
							j = function(e) {
								var t = [],
									i = (e = y(e)).length,
									s = 128,
									n = 0,
									o = 72,
									r = !0,
									a = !1,
									d = void 0;
								try {
									for (var p, m = e[Symbol.iterator](); !(r = (p = m.next()).done); r = !0) {
										var _ = p.value;
										_ < 128 && t.push(l(_))
									}
								} catch (L) {
									a = !0, d = L
								} finally {
									try {
										!r && m.return && m.return()
									} finally {
										if (a) throw d
									}
								}
								var h = t.length,
									g = h;
								for (h && t.push("-"); g < i;) {
									var w = c,
										j = !0,
										$ = !1,
										k = void 0;
									try {
										for (var x, q = e[Symbol.iterator](); !(j = (x = q.next()).done); j = !0) {
											var P = x.value;
											P >= s && P < w && (w = P)
										}
									} catch (L) {
										$ = !0, k = L
									} finally {
										try {
											!j && q.return && q.return()
										} finally {
											if ($) throw k
										}
									}
									var E = g + 1;
									w - s > f((c - n) / E) && u("overflow"), n += (w - s) * E, s = w;
									var T = !0,
										S = !1,
										A = void 0;
									try {
										for (var R, D = e[Symbol.iterator](); !(T = (R = D.next()).done); T = !0) {
											var I = R.value;
											if (I < s && ++n > c && u("overflow"), I == s) {
												for (var F = n, O = 36;; O += 36) {
													var C = O <= o ? 1 : O >= o + 26 ? 26 : O - o;
													if (F < C) break;
													var U = F - C,
														z = 36 - C;
													t.push(l(v(C + U % z, 0))), F = f(U / z)
												}
												t.push(l(v(F, 0))), o = b(n, E, g == h), n = 0, ++g
											}
										}
									} catch (L) {
										S = !0, A = L
									} finally {
										try {
											!T && D.return && D.return()
										} finally {
											if (S) throw A
										}
									}++n, ++s
								}
								return t.join("")
							},
							$ = {
								version: "2.1.0",
								ucs2: {
									decode: y,
									encode: function(e) {
										return String.fromCodePoint.apply(String, function(e) {
											if (Array.isArray(e)) {
												for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
												return i
											}
											return Array.from(e)
										}(e))
									}
								},
								decode: w,
								encode: j,
								toASCII: function(e) {
									return g(e, (function(e) {
										return m.test(e) ? "xn--" + j(e) : e
									}))
								},
								toUnicode: function(e) {
									return g(e, (function(e) {
										return p.test(e) ? w(e.slice(4).toLowerCase()) : e
									}))
								}
							},
							k = {};

						function x(e) {
							var t = e.charCodeAt(0);
							return t < 16 ? "%0" + t.toString(16).toUpperCase() : t < 128 ? "%" + t.toString(16).toUpperCase() : t < 2048 ? "%" + (t >> 6 | 192).toString(16).toUpperCase() + "%" + (63 & t | 128).toString(16).toUpperCase() : "%" + (t >> 12 | 224).toString(16).toUpperCase() + "%" + (t >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (63 & t | 128).toString(16).toUpperCase()
						}

						function q(e) {
							for (var t = "", i = 0, s = e.length; i < s;) {
								var n = parseInt(e.substr(i + 1, 2), 16);
								if (n < 128) t += String.fromCharCode(n), i += 3;
								else if (n >= 194 && n < 224) {
									if (s - i >= 6) {
										var o = parseInt(e.substr(i + 4, 2), 16);
										t += String.fromCharCode((31 & n) << 6 | 63 & o)
									} else t += e.substr(i, 6);
									i += 6
								} else if (n >= 224) {
									if (s - i >= 9) {
										var r = parseInt(e.substr(i + 4, 2), 16),
											a = parseInt(e.substr(i + 7, 2), 16);
										t += String.fromCharCode((15 & n) << 12 | (63 & r) << 6 | 63 & a)
									} else t += e.substr(i, 9);
									i += 9
								} else t += e.substr(i, 3), i += 3
							}
							return t
						}

						function P(e, t) {
							function i(e) {
								var i = q(e);
								return i.match(t.UNRESERVED) ? i : e
							}
							return e.scheme && (e.scheme = String(e.scheme).replace(t.PCT_ENCODED, i).toLowerCase().replace(t.NOT_SCHEME, "")), void 0 !== e.userinfo && (e.userinfo = String(e.userinfo).replace(t.PCT_ENCODED, i).replace(t.NOT_USERINFO, x).replace(t.PCT_ENCODED, n)), void 0 !== e.host && (e.host = String(e.host).replace(t.PCT_ENCODED, i).toLowerCase().replace(t.NOT_HOST, x).replace(t.PCT_ENCODED, n)), void 0 !== e.path && (e.path = String(e.path).replace(t.PCT_ENCODED, i).replace(e.scheme ? t.NOT_PATH : t.NOT_PATH_NOSCHEME, x).replace(t.PCT_ENCODED, n)), void 0 !== e.query && (e.query = String(e.query).replace(t.PCT_ENCODED, i).replace(t.NOT_QUERY, x).replace(t.PCT_ENCODED, n)), void 0 !== e.fragment && (e.fragment = String(e.fragment).replace(t.PCT_ENCODED, i).replace(t.NOT_FRAGMENT, x).replace(t.PCT_ENCODED, n)), e
						}

						function E(e) {
							return e.replace(/^0*(.*)/, "$1") || "0"
						}

						function T(e, t) {
							var i = e.match(t.IPV4ADDRESS) || [],
								s = d(i, 2)[1];
							return s ? s.split(".").map(E).join(".") : e
						}

						function S(e, t) {
							var i = e.match(t.IPV6ADDRESS) || [],
								s = d(i, 3),
								n = s[1],
								o = s[2];
							if (n) {
								for (var r = n.toLowerCase().split("::").reverse(), a = d(r, 2), c = a[0], p = a[1], m = p ? p.split(":").map(E) : [], _ = c.split(":").map(E), h = t.IPV4ADDRESS.test(_[_.length - 1]), f = h ? 7 : 8, l = _.length - f, u = Array(f), g = 0; g < f; ++g) u[g] = m[g] || _[l + g] || "";
								h && (u[f - 1] = T(u[f - 1], t));
								var y = u.reduce((function(e, t, i) {
										if (!t || "0" === t) {
											var s = e[e.length - 1];
											s && s.index + s.length === i ? s.length++ : e.push({
												index: i,
												length: 1
											})
										}
										return e
									}), []).sort((function(e, t) {
										return t.length - e.length
									}))[0],
									v = void 0;
								if (y && y.length > 1) {
									var b = u.slice(0, y.index),
										w = u.slice(y.index + y.length);
									v = b.join(":") + "::" + w.join(":")
								} else v = u.join(":");
								return o && (v += "%" + o), v
							}
							return e
						}
						var A = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,
							R = void 0 === "".match(/(){0}/)[1];

						function D(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								i = {},
								s = !1 !== t.iri ? a : r;
							"suffix" === t.reference && (e = (t.scheme ? t.scheme + ":" : "") + "//" + e);
							var n = e.match(A);
							if (n) {
								R ? (i.scheme = n[1], i.userinfo = n[3], i.host = n[4], i.port = parseInt(n[5], 10), i.path = n[6] || "", i.query = n[7], i.fragment = n[8], isNaN(i.port) && (i.port = n[5])) : (i.scheme = n[1] || void 0, i.userinfo = -1 !== e.indexOf("@") ? n[3] : void 0, i.host = -1 !== e.indexOf("//") ? n[4] : void 0, i.port = parseInt(n[5], 10), i.path = n[6] || "", i.query = -1 !== e.indexOf("?") ? n[7] : void 0, i.fragment = -1 !== e.indexOf("#") ? n[8] : void 0, isNaN(i.port) && (i.port = e.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? n[4] : void 0)), i.host && (i.host = S(T(i.host, s), s)), void 0 !== i.scheme || void 0 !== i.userinfo || void 0 !== i.host || void 0 !== i.port || i.path || void 0 !== i.query ? void 0 === i.scheme ? i.reference = "relative" : void 0 === i.fragment ? i.reference = "absolute" : i.reference = "uri" : i.reference = "same-document", t.reference && "suffix" !== t.reference && t.reference !== i.reference && (i.error = i.error || "URI is not a " + t.reference + " reference.");
								var o = k[(t.scheme || i.scheme || "").toLowerCase()];
								if (t.unicodeSupport || o && o.unicodeSupport) P(i, s);
								else {
									if (i.host && (t.domainHost || o && o.domainHost)) try {
										i.host = $.toASCII(i.host.replace(s.PCT_ENCODED, q).toLowerCase())
									} catch (d) {
										i.error = i.error || "Host's domain name can not be converted to ASCII via punycode: " + d
									}
									P(i, r)
								}
								o && o.parse && o.parse(i, t)
							} else i.error = i.error || "URI can not be parsed.";
							return i
						}
						var I = /^\.\.?\//,
							F = /^\/\.(\/|$)/,
							O = /^\/\.\.(\/|$)/,
							C = /^\/?(?:.|\n)*?(?=\/|$)/;

						function U(e) {
							for (var t = []; e.length;)
								if (e.match(I)) e = e.replace(I, "");
								else if (e.match(F)) e = e.replace(F, "/");
							else if (e.match(O)) e = e.replace(O, "/"), t.pop();
							else if ("." === e || ".." === e) e = "";
							else {
								var i = e.match(C);
								if (!i) throw new Error("Unexpected dot segment condition");
								var s = i[0];
								e = e.slice(s.length), t.push(s)
							}
							return t.join("")
						}

						function z(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								i = t.iri ? a : r,
								s = [],
								n = k[(t.scheme || e.scheme || "").toLowerCase()];
							if (n && n.serialize && n.serialize(e, t), e.host)
								if (i.IPV6ADDRESS.test(e.host));
								else if (t.domainHost || n && n.domainHost) try {
								e.host = t.iri ? $.toUnicode(e.host) : $.toASCII(e.host.replace(i.PCT_ENCODED, q).toLowerCase())
							} catch (c) {
								e.error = e.error || "Host's domain name can not be converted to " + (t.iri ? "Unicode" : "ASCII") + " via punycode: " + c
							}
							P(e, i), "suffix" !== t.reference && e.scheme && (s.push(e.scheme), s.push(":"));
							var o = function(e, t) {
								var i = !1 !== t.iri ? a : r,
									s = [];
								return void 0 !== e.userinfo && (s.push(e.userinfo), s.push("@")), void 0 !== e.host && s.push(S(T(String(e.host), i), i).replace(i.IPV6ADDRESS, (function(e, t, i) {
									return "[" + t + (i ? "%25" + i : "") + "]"
								}))), "number" == typeof e.port && (s.push(":"), s.push(e.port.toString(10))), s.length ? s.join("") : void 0
							}(e, t);
							if (void 0 !== o && ("suffix" !== t.reference && s.push("//"), s.push(o), e.path && "/" !== e.path.charAt(0) && s.push("/")), void 0 !== e.path) {
								var d = e.path;
								t.absolutePath || n && n.absolutePath || (d = U(d)), void 0 === o && (d = d.replace(/^\/\//, "/%2F")), s.push(d)
							}
							return void 0 !== e.query && (s.push("?"), s.push(e.query)), void 0 !== e.fragment && (s.push("#"), s.push(e.fragment)), s.join("")
						}

						function L(e, t) {
							var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
								s = {};
							return arguments[3] || (e = D(z(e, i), i), t = D(z(t, i), i)), !(i = i || {}).tolerant && t.scheme ? (s.scheme = t.scheme, s.userinfo = t.userinfo, s.host = t.host, s.port = t.port, s.path = U(t.path || ""), s.query = t.query) : (void 0 !== t.userinfo || void 0 !== t.host || void 0 !== t.port ? (s.userinfo = t.userinfo, s.host = t.host, s.port = t.port, s.path = U(t.path || ""), s.query = t.query) : (t.path ? ("/" === t.path.charAt(0) ? s.path = U(t.path) : (void 0 === e.userinfo && void 0 === e.host && void 0 === e.port || e.path ? e.path ? s.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path : s.path = t.path : s.path = "/" + t.path, s.path = U(s.path)), s.query = t.query) : (s.path = e.path, void 0 !== t.query ? s.query = t.query : s.query = e.query), s.userinfo = e.userinfo, s.host = e.host, s.port = e.port), s.scheme = e.scheme), s.fragment = t.fragment, s
						}

						function N(e, t) {
							return e && e.toString().replace(t && t.iri ? a.PCT_ENCODED : r.PCT_ENCODED, q)
						}
						var M = {
								scheme: "http",
								domainHost: !0,
								parse: function(e, t) {
									return e.host || (e.error = e.error || "HTTP URIs must have a host."), e
								},
								serialize: function(e, t) {
									return e.port !== ("https" !== String(e.scheme).toLowerCase() ? 80 : 443) && "" !== e.port || (e.port = void 0), e.path || (e.path = "/"), e
								}
							},
							H = {
								scheme: "https",
								domainHost: M.domainHost,
								parse: M.parse,
								serialize: M.serialize
							},
							B = {},
							W = "[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]",
							V = "[0-9A-Fa-f]",
							Q = i(i("%[EFef][0-9A-Fa-f]%" + V + V + "%" + V + V) + "|" + i("%[89A-Fa-f][0-9A-Fa-f]%" + V + V) + "|" + i("%" + V + V)),
							G = t("[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", '[\\"\\\\]'),
							J = new RegExp(W, "g"),
							Y = new RegExp(Q, "g"),
							K = new RegExp(t("[^]", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", "[\\.]", '[\\"]', G), "g"),
							Z = new RegExp(t("[^]", W, "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]"), "g"),
							X = Z;

						function ee(e) {
							var t = q(e);
							return t.match(J) ? t : e
						}
						var te = {
								scheme: "mailto",
								parse: function(e, t) {
									var i = e,
										s = i.to = i.path ? i.path.split(",") : [];
									if (i.path = void 0, i.query) {
										for (var n = !1, o = {}, r = i.query.split("&"), a = 0, d = r.length; a < d; ++a) {
											var c = r[a].split("=");
											switch (c[0]) {
												case "to":
													for (var p = c[1].split(","), m = 0, _ = p.length; m < _; ++m) s.push(p[m]);
													break;
												case "subject":
													i.subject = N(c[1], t);
													break;
												case "body":
													i.body = N(c[1], t);
													break;
												default:
													n = !0, o[N(c[0], t)] = N(c[1], t)
											}
										}
										n && (i.headers = o)
									}
									i.query = void 0;
									for (var h = 0, f = s.length; h < f; ++h) {
										var l = s[h].split("@");
										if (l[0] = N(l[0]), t.unicodeSupport) l[1] = N(l[1], t).toLowerCase();
										else try {
											l[1] = $.toASCII(N(l[1], t).toLowerCase())
										} catch (u) {
											i.error = i.error || "Email address's domain name can not be converted to ASCII via punycode: " + u
										}
										s[h] = l.join("@")
									}
									return i
								},
								serialize: function(e, t) {
									var i, s = e,
										o = null != (i = e.to) ? i instanceof Array ? i : "number" != typeof i.length || i.split || i.setInterval || i.call ? [i] : Array.prototype.slice.call(i) : [];
									if (o) {
										for (var r = 0, a = o.length; r < a; ++r) {
											var d = String(o[r]),
												c = d.lastIndexOf("@"),
												p = d.slice(0, c).replace(Y, ee).replace(Y, n).replace(K, x),
												m = d.slice(c + 1);
											try {
												m = t.iri ? $.toUnicode(m) : $.toASCII(N(m, t).toLowerCase())
											} catch (l) {
												s.error = s.error || "Email address's domain name can not be converted to " + (t.iri ? "Unicode" : "ASCII") + " via punycode: " + l
											}
											o[r] = p + "@" + m
										}
										s.path = o.join(",")
									}
									var _ = e.headers = e.headers || {};
									e.subject && (_.subject = e.subject), e.body && (_.body = e.body);
									var h = [];
									for (var f in _) _[f] !== B[f] && h.push(f.replace(Y, ee).replace(Y, n).replace(Z, x) + "=" + _[f].replace(Y, ee).replace(Y, n).replace(X, x));
									return h.length && (s.query = h.join("&")), s
								}
							},
							ie = /^([^\:]+)\:(.*)/,
							se = {
								scheme: "urn",
								parse: function(e, t) {
									var i = e.path && e.path.match(ie),
										s = e;
									if (i) {
										var n = t.scheme || s.scheme || "urn",
											o = i[1].toLowerCase(),
											r = i[2],
											a = n + ":" + (t.nid || o),
											d = k[a];
										s.nid = o, s.nss = r, s.path = void 0, d && (s = d.parse(s, t))
									} else s.error = s.error || "URN can not be parsed.";
									return s
								},
								serialize: function(e, t) {
									var i = t.scheme || e.scheme || "urn",
										s = e.nid,
										n = i + ":" + (t.nid || s),
										o = k[n];
									o && (e = o.serialize(e, t));
									var r = e,
										a = e.nss;
									return r.path = (s || t.nid) + ":" + a, r
								}
							},
							ne = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/,
							oe = {
								scheme: "urn:uuid",
								parse: function(e, t) {
									var i = e;
									return i.uuid = i.nss, i.nss = void 0, t.tolerant || i.uuid && i.uuid.match(ne) || (i.error = i.error || "UUID is not valid."), i
								},
								serialize: function(e, t) {
									var i = e;
									return i.nss = (e.uuid || "").toLowerCase(), i
								}
							};
						k[M.scheme] = M, k[H.scheme] = H, k[te.scheme] = te, k[se.scheme] = se, k[oe.scheme] = oe, e.SCHEMES = k, e.pctEncChar = x, e.pctDecChars = q, e.parse = D, e.removeDotSegments = U, e.serialize = z, e.resolveComponents = L, e.resolve = function(e, t, i) {
							var s = function(e, t) {
								var i = e;
								if (t)
									for (var s in t) i[s] = t[s];
								return i
							}({
								scheme: "null"
							}, i);
							return z(L(D(e, s), D(t, s), s, !0), s)
						}, e.normalize = function(e, t) {
							return "string" == typeof e ? e = z(D(e, t), t) : "object" === s(e) && (e = D(z(e, t), t)), e
						}, e.equal = function(e, t, i) {
							return "string" == typeof e ? e = z(D(e, i), i) : "object" === s(e) && (e = z(e, i)), "string" == typeof t ? t = z(D(t, i), i) : "object" === s(t) && (t = z(t, i)), e === t
						}, e.escapeComponent = function(e, t) {
							return e && e.toString().replace(t && t.iri ? a.ESCAPE : r.ESCAPE, x)
						}, e.unescapeComponent = N, Object.defineProperty(e, "__esModule", {
							value: !0
						})
					}(t)
				}));
				(o = r) && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") && o.default;
				var a = function e(t, i) {
						if (t === i) return !0;
						if (t && i && "object" == typeof t && "object" == typeof i) {
							if (t.constructor !== i.constructor) return !1;
							var s, n, o;
							if (Array.isArray(t)) {
								if ((s = t.length) != i.length) return !1;
								for (n = s; 0 != n--;)
									if (!e(t[n], i[n])) return !1;
								return !0
							}
							if (t.constructor === RegExp) return t.source === i.source && t.flags === i.flags;
							if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === i.valueOf();
							if (t.toString !== Object.prototype.toString) return t.toString() === i.toString();
							if ((s = (o = Object.keys(t)).length) !== Object.keys(i).length) return !1;
							for (n = s; 0 != n--;)
								if (!Object.prototype.hasOwnProperty.call(i, o[n])) return !1;
							for (n = s; 0 != n--;) {
								var r = o[n];
								if (!e(t[r], i[r])) return !1
							}
							return !0
						}
						return t != t && i != i
					},
					d = {
						copy: function(e, t) {
							for (var i in t = t || {}, e) t[i] = e[i];
							return t
						},
						checkDataType: c,
						checkDataTypes: function(e, t) {
							switch (e.length) {
								case 1:
									return c(e[0], t, !0);
								default:
									var i = "",
										s = m(e);
									for (var n in s.array && s.object && (i = s.null ? "(" : "(!" + t + " || ", i += "typeof " + t + ' !== "object")', delete s.null, delete s.array, delete s.object), s.number && delete s.integer, s) i += (i ? " && " : "") + c(n, t, !0);
									return i
							}
						},
						coerceToTypes: function(e, t) {
							if (Array.isArray(t)) {
								for (var i = [], s = 0; s < t.length; s++) {
									var n = t[s];
									p[n] ? i[i.length] = n : "array" === e && "array" === n && (i[i.length] = n)
								}
								if (i.length) return i
							} else {
								if (p[t]) return [t];
								if ("array" === e && "array" === t) return ["array"]
							}
						},
						toHash: m,
						getProperty: f,
						escapeQuotes: l,
						equal: a,
						ucs2length: function(e) {
							for (var t, i = 0, s = e.length, n = 0; n < s;) i++, (t = e.charCodeAt(n++)) >= 55296 && t <= 56319 && n < s && 56320 == (64512 & (t = e.charCodeAt(n))) && n++;
							return i
						},
						varOccurences: function(e, t) {
							t += "[^0-9]";
							var i = e.match(new RegExp(t, "g"));
							return i ? i.length : 0
						},
						varReplace: function(e, t, i) {
							return t += "([^0-9])", i = i.replace(/\$/g, "$$$$"), e.replace(new RegExp(t, "g"), i + "$1")
						},
						cleanUpCode: function(e) {
							return e.replace(u, "").replace(g, "").replace(y, "if (!($1))")
						},
						finalCleanUpCode: function(e, t) {
							var i = e.match(v);
							i && 2 == i.length && (e = t ? e.replace(w, "").replace(k, x) : e.replace(b, "").replace(j, $));
							return (i = e.match(q)) && 3 === i.length ? e.replace(P, "") : e
						},
						schemaHasRules: function(e, t) {
							if ("boolean" == typeof e) return !e;
							for (var i in e)
								if (t[i]) return !0
						},
						schemaHasRulesExcept: function(e, t, i) {
							if ("boolean" == typeof e) return !e && "not" != i;
							for (var s in e)
								if (s != i && t[s]) return !0
						},
						schemaUnknownRules: function(e, t) {
							if ("boolean" == typeof e) return;
							for (var i in e)
								if (!t[i]) return i
						},
						toQuotedString: E,
						getPathExpr: function(e, t, i, s) {
							return A(e, i ? "'/' + " + t + (s ? "" : ".replace(/~/g, '~0').replace(/\\//g, '~1')") : s ? "'[' + " + t + " + ']'" : "'[\\'' + " + t + " + '\\']'")
						},
						getPath: function(e, t, i) {
							var s = E(i ? "/" + R(t) : f(t));
							return A(e, s)
						},
						getData: function(e, t, i) {
							var s, n, o, r;
							if ("" === e) return "rootData";
							if ("/" == e[0]) {
								if (!T.test(e)) throw new Error("Invalid JSON-pointer: " + e);
								n = e, o = "rootData"
							} else {
								if (!(r = e.match(S))) throw new Error("Invalid JSON-pointer: " + e);
								if (s = +r[1], "#" == (n = r[2])) {
									if (s >= t) throw new Error("Cannot access property/index " + s + " levels up, current level is " + t);
									return i[t - s]
								}
								if (s > t) throw new Error("Cannot access data " + s + " levels up, current level is " + t);
								if (o = "data" + (t - s || ""), !n) return o
							}
							for (var a = o, d = n.split("/"), c = 0; c < d.length; c++) {
								var p = d[c];
								p && (o += f(D(p)), a += " && " + o)
							}
							return a
						},
						unescapeFragment: function(e) {
							return D(decodeURIComponent(e))
						},
						unescapeJsonPointer: D,
						escapeFragment: function(e) {
							return encodeURIComponent(R(e))
						},
						escapeJsonPointer: R
					};

				function c(e, t, i) {
					var s = i ? " !== " : " === ",
						n = i ? " || " : " && ",
						o = i ? "!" : "",
						r = i ? "" : "!";
					switch (e) {
						case "null":
							return t + s + "null";
						case "array":
							return o + "Array.isArray(" + t + ")";
						case "object":
							return "(" + o + t + n + "typeof " + t + s + '"object"' + n + r + "Array.isArray(" + t + "))";
						case "integer":
							return "(typeof " + t + s + '"number"' + n + r + "(" + t + " % 1)" + n + t + s + t + ")";
						default:
							return "typeof " + t + s + '"' + e + '"'
					}
				}
				var p = m(["string", "number", "integer", "boolean", "null"]);

				function m(e) {
					for (var t = {}, i = 0; i < e.length; i++) t[e[i]] = !0;
					return t
				}
				var _ = /^[a-z$_][a-z$_0-9]*$/i,
					h = /'|\\/g;

				function f(e) {
					return "number" == typeof e ? "[" + e + "]" : _.test(e) ? "." + e : "['" + l(e) + "']"
				}

				function l(e) {
					return e.replace(h, "\\$&").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\f/g, "\\f").replace(/\t/g, "\\t")
				}
				var u = /else\s*{\s*}/g,
					g = /if\s*\([^)]+\)\s*\{\s*\}(?!\s*else)/g,
					y = /if\s*\(([^)]+)\)\s*\{\s*\}\s*else(?!\s*if)/g;
				var v = /[^v.]errors/g,
					b = /var errors = 0;|var vErrors = null;|validate.errors = vErrors;/g,
					w = /var errors = 0;|var vErrors = null;/g,
					j = "return errors === 0;",
					$ = "validate.errors = null; return true;",
					k = /if \(errors === 0\) return data;\s*else throw new ValidationError\(vErrors\);/,
					x = "return data;",
					q = /[^A-Za-z_$]rootData[^A-Za-z0-9_$]/g,
					P = /if \(rootData === undefined\) rootData = data;/;

				function E(e) {
					return "'" + l(e) + "'"
				}
				var T = /^\/(?:[^~]|~0|~1)*$/,
					S = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;

				function A(e, t) {
					return '""' == e ? t : (e + " + " + t).replace(/' \+ '/g, "")
				}

				function R(e) {
					return e.replace(/~/g, "~0").replace(/\//g, "~1")
				}

				function D(e) {
					return e.replace(/~1/g, "/").replace(/~0/g, "~")
				}
				var I = function(e) {
					d.copy(e, this)
				};
				var F = s((function(e) {
						var t = e.exports = function(e, i, s) {
							"function" == typeof i && (s = i, i = {}),
								function e(i, s, n, o, r, a, d, c, p, m) {
									if (o && "object" == typeof o && !Array.isArray(o)) {
										for (var _ in s(o, r, a, d, c, p, m), o) {
											var h = o[_];
											if (Array.isArray(h)) {
												if (_ in t.arrayKeywords)
													for (var f = 0; f < h.length; f++) e(i, s, n, h[f], r + "/" + _ + "/" + f, a, r, _, o, f)
											} else if (_ in t.propsKeywords) {
												if (h && "object" == typeof h)
													for (var l in h) e(i, s, n, h[l], r + "/" + _ + "/" + l.replace(/~/g, "~0").replace(/\//g, "~1"), a, r, _, o, l)
											} else(_ in t.keywords || i.allKeys && !(_ in t.skipKeywords)) && e(i, s, n, h, r + "/" + _, a, r, _, o)
										}
										n(o, r, a, d, c, p, m)
									}
								}(i, "function" == typeof(s = i.cb || s) ? s : s.pre || function() {}, s.post || function() {}, e, "", e)
						};
						t.keywords = {
							additionalItems: !0,
							items: !0,
							contains: !0,
							additionalProperties: !0,
							propertyNames: !0,
							not: !0
						}, t.arrayKeywords = {
							items: !0,
							allOf: !0,
							anyOf: !0,
							oneOf: !0
						}, t.propsKeywords = {
							definitions: !0,
							properties: !0,
							patternProperties: !0,
							dependencies: !0
						}, t.skipKeywords = {
							default: !0,
							enum: !0,
							const: !0,
							required: !0,
							maximum: !0,
							minimum: !0,
							exclusiveMaximum: !0,
							exclusiveMinimum: !0,
							multipleOf: !0,
							maxLength: !0,
							minLength: !0,
							pattern: !0,
							format: !0,
							maxItems: !0,
							minItems: !0,
							uniqueItems: !0,
							maxProperties: !0,
							minProperties: !0
						}
					})),
					O = C;

				function C(e, t, i) {
					var s = this._refs[i];
					if ("string" == typeof s) {
						if (!this._refs[s]) return C.call(this, e, t, s);
						s = this._refs[s]
					}
					if ((s = s || this._schemas[i]) instanceof I) return H(s.schema, this._opts.inlineRefs) ? s.schema : s.validate || this._compile(s);
					var n, o, r, a = U.call(this, t, i);
					return a && (n = a.schema, t = a.root, r = a.baseId), n instanceof I ? o = n.validate || e.call(this, n.schema, t, void 0, r) : void 0 !== n && (o = H(n, this._opts.inlineRefs) ? n : e.call(this, n, t, void 0, r)), o
				}

				function U(e, t) {
					var i = r.parse(t),
						s = W(i),
						n = B(this._getId(e.schema));
					if (0 === Object.keys(e.schema).length || s !== n) {
						var o = Q(s),
							a = this._refs[o];
						if ("string" == typeof a) return z.call(this, e, a, i);
						if (a instanceof I) a.validate || this._compile(a), e = a;
						else {
							if (!((a = this._schemas[o]) instanceof I)) return;
							if (a.validate || this._compile(a), o == Q(t)) return {
								schema: a,
								root: e,
								baseId: n
							};
							e = a
						}
						if (!e.schema) return;
						n = B(this._getId(e.schema))
					}
					return N.call(this, i, n, e.schema, e)
				}

				function z(e, t, i) {
					var s = U.call(this, e, t);
					if (s) {
						var n = s.schema,
							o = s.baseId;
						e = s.root;
						var r = this._getId(n);
						return r && (o = G(o, r)), N.call(this, i, o, n, e)
					}
				}
				C.normalizeId = Q, C.fullPath = B, C.url = G, C.ids = function(e) {
					var t = Q(this._getId(e)),
						i = {
							"": t
						},
						s = {
							"": B(t, !1)
						},
						n = {},
						o = this;
					return F(e, {
						allKeys: !0
					}, (function(e, t, c, p, m, _, h) {
						if ("" !== t) {
							var f = o._getId(e),
								l = i[p],
								u = s[p] + "/" + m;
							if (void 0 !== h && (u += "/" + ("number" == typeof h ? h : d.escapeFragment(h))), "string" == typeof f) {
								f = l = Q(l ? r.resolve(l, f) : f);
								var g = o._refs[f];
								if ("string" == typeof g && (g = o._refs[g]), g && g.schema) {
									if (!a(e, g.schema)) throw new Error('id "' + f + '" resolves to more than one schema')
								} else if (f != Q(u))
									if ("#" == f[0]) {
										if (n[f] && !a(e, n[f])) throw new Error('id "' + f + '" resolves to more than one schema');
										n[f] = e
									} else o._refs[f] = u
							}
							i[t] = l, s[t] = u
						}
					})), n
				}, C.inlineRef = H, C.schema = U;
				var L = d.toHash(["properties", "patternProperties", "enum", "dependencies", "definitions"]);

				function N(e, t, i, s) {
					if (e.fragment = e.fragment || "", "/" == e.fragment.slice(0, 1)) {
						for (var n = e.fragment.split("/"), o = 1; o < n.length; o++) {
							var r = n[o];
							if (r) {
								if (void 0 === (i = i[r = d.unescapeFragment(r)])) break;
								var a;
								if (!L[r] && ((a = this._getId(i)) && (t = G(t, a)), i.$ref)) {
									var c = G(t, i.$ref),
										p = U.call(this, s, c);
									p && (i = p.schema, s = p.root, t = p.baseId)
								}
							}
						}
						return void 0 !== i && i !== s.schema ? {
							schema: i,
							root: s,
							baseId: t
						} : void 0
					}
				}
				var M = d.toHash(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum"]);

				function H(e, t) {
					return !1 !== t && (void 0 === t || !0 === t ? function e(t) {
						var i;
						if (Array.isArray(t)) {
							for (var s = 0; s < t.length; s++)
								if ("object" == typeof(i = t[s]) && !e(i)) return !1
						} else
							for (var n in t) {
								if ("$ref" == n) return !1;
								if ("object" == typeof(i = t[n]) && !e(i)) return !1
							}
						return !0
					}(e) : t ? function e(t) {
						var i, s = 0;
						if (Array.isArray(t)) {
							for (var n = 0; n < t.length; n++)
								if ("object" == typeof(i = t[n]) && (s += e(i)), s == 1 / 0) return 1 / 0
						} else
							for (var o in t) {
								if ("$ref" == o) return 1 / 0;
								if (M[o]) s++;
								else if ("object" == typeof(i = t[o]) && (s += e(i) + 1), s == 1 / 0) return 1 / 0
							}
						return s
					}(e) <= t : void 0)
				}

				function B(e, t) {
					return !1 !== t && (e = Q(e)), W(r.parse(e))
				}

				function W(e) {
					return r.serialize(e).split("#")[0] + "#"
				}
				var V = /#\/?$/;

				function Q(e) {
					return e ? e.replace(V, "") : ""
				}

				function G(e, t) {
					return t = Q(t), r.resolve(e, t)
				}
				var J = {
					Validation: K((function(e) {
						this.message = "validation failed", this.errors = e, this.ajv = this.validation = !0
					})),
					MissingRef: K(Y)
				};

				function Y(e, t, i) {
					this.message = i || Y.message(e, t), this.missingRef = O.url(e, t), this.missingSchema = O.normalizeId(O.fullPath(this.missingRef))
				}

				function K(e) {
					return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e, e
				}
				Y.message = function(e, t) {
					return "can't resolve reference " + t + " from id " + e
				};
				var Z = function(e, t) {
						t || (t = {}), "function" == typeof t && (t = {
							cmp: t
						});
						var i, s = "boolean" == typeof t.cycles && t.cycles,
							n = t.cmp && (i = t.cmp, function(e) {
								return function(t, s) {
									var n = {
											key: t,
											value: e[t]
										},
										o = {
											key: s,
											value: e[s]
										};
									return i(n, o)
								}
							}),
							o = [];
						return function e(t) {
							if (t && t.toJSON && "function" == typeof t.toJSON && (t = t.toJSON()), void 0 !== t) {
								if ("number" == typeof t) return isFinite(t) ? "" + t : "null";
								if ("object" != typeof t) return JSON.stringify(t);
								var i, r;
								if (Array.isArray(t)) {
									for (r = "[", i = 0; i < t.length; i++) i && (r += ","), r += e(t[i]) || "null";
									return r + "]"
								}
								if (null === t) return "null";
								if (-1 !== o.indexOf(t)) {
									if (s) return JSON.stringify("__cycle__");
									throw new TypeError("Converting circular structure to JSON")
								}
								var a = o.push(t) - 1,
									d = Object.keys(t).sort(n && n(t));
								for (r = "", i = 0; i < d.length; i++) {
									var c = d[i],
										p = e(t[c]);
									p && (r && (r += ","), r += JSON.stringify(c) + ":" + p)
								}
								return o.splice(a, 1), "{" + r + "}"
							}
						}(e)
					},
					X = function(e, t, i) {
						var s = "",
							n = !0 === e.schema.$async,
							o = e.util.schemaHasRulesExcept(e.schema, e.RULES.all, "$ref"),
							r = e.self._getId(e.schema);
						if (e.opts.strictKeywords) {
							var a = e.util.schemaUnknownRules(e.schema, e.RULES.keywords);
							if (a) {
								var d = "unknown keyword: " + a;
								if ("log" !== e.opts.strictKeywords) throw new Error(d);
								e.logger.warn(d)
							}
						}
						if (e.isTop && (s += " var validate = ", n && (e.async = !0, s += "async "), s += "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", r && (e.opts.sourceCode || e.opts.processCode) && (s += " /*# sourceURL=" + r + " */ ")), "boolean" == typeof e.schema || !o && !e.schema.$ref) {
							var c = e.level,
								p = e.dataLevel,
								m = e.schema["false schema"],
								_ = e.schemaPath + e.util.getProperty("false schema"),
								h = e.errSchemaPath + "/false schema",
								f = !e.opts.allErrors,
								l = "data" + (p || ""),
								u = "valid" + c;
							if (!1 === e.schema) {
								e.isTop ? f = !0 : s += " var " + u + " = false; ", (K = K || []).push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'false schema' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(h) + " , params: {} ", !1 !== e.opts.messages && (s += " , message: 'boolean schema is false' "), e.opts.verbose && (s += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "), s += " } ") : s += " {} ";
								var g = s;
								s = K.pop(), !e.compositeRule && f ? e.async ? s += " throw new ValidationError([" + g + "]); " : s += " validate.errors = [" + g + "]; return false; " : s += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
							} else e.isTop ? s += n ? " return data; " : " validate.errors = null; return true; " : s += " var " + u + " = true; ";
							return e.isTop && (s += " }; return validate; "), s
						}
						if (e.isTop) {
							var y = e.isTop;
							c = e.level = 0, p = e.dataLevel = 0, l = "data";
							if (e.rootId = e.resolve.fullPath(e.self._getId(e.root.schema)), e.baseId = e.baseId || e.rootId, delete e.isTop, e.dataPathArr = [void 0], void 0 !== e.schema.default && e.opts.useDefaults && e.opts.strictDefaults) {
								var v = "default is ignored in the schema root";
								if ("log" !== e.opts.strictDefaults) throw new Error(v);
								e.logger.warn(v)
							}
							s += " var vErrors = null; ", s += " var errors = 0;     ", s += " if (rootData === undefined) rootData = data; "
						} else {
							c = e.level, l = "data" + ((p = e.dataLevel) || "");
							if (r && (e.baseId = e.resolve.url(e.baseId, r)), n && !e.async) throw new Error("async schema in sync schema");
							s += " var errs_" + c + " = errors;"
						}
						u = "valid" + c, f = !e.opts.allErrors;
						var b = "",
							w = "",
							j = e.schema.type,
							$ = Array.isArray(j);
						if (j && e.opts.nullable && !0 === e.schema.nullable && ($ ? -1 == j.indexOf("null") && (j = j.concat("null")) : "null" != j && (j = [j, "null"], $ = !0)), $ && 1 == j.length && (j = j[0], $ = !1), e.schema.$ref && o) {
							if ("fail" == e.opts.extendRefs) throw new Error('$ref: validation keywords used in schema at path "' + e.errSchemaPath + '" (see option extendRefs)');
							!0 !== e.opts.extendRefs && (o = !1, e.logger.warn('$ref: keywords ignored in schema at path "' + e.errSchemaPath + '"'))
						}
						if (e.schema.$comment && e.opts.$comment && (s += " " + e.RULES.all.$comment.code(e, "$comment")), j) {
							if (e.opts.coerceTypes) var k = e.util.coerceToTypes(e.opts.coerceTypes, j);
							var x = e.RULES.types[j];
							if (k || $ || !0 === x || x && !Z(x)) {
								_ = e.schemaPath + ".type", h = e.errSchemaPath + "/type", _ = e.schemaPath + ".type", h = e.errSchemaPath + "/type";
								var q = $ ? "checkDataTypes" : "checkDataType";
								if (s += " if (" + e.util[q](j, l, !0) + ") { ", k) {
									var P = "dataType" + c,
										E = "coerced" + c;
									s += " var " + P + " = typeof " + l + "; ", "array" == e.opts.coerceTypes && (s += " if (" + P + " == 'object' && Array.isArray(" + l + ")) " + P + " = 'array'; "), s += " var " + E + " = undefined; ";
									var T = "",
										S = k;
									if (S)
										for (var A, R = -1, D = S.length - 1; R < D;) A = S[R += 1], R && (s += " if (" + E + " === undefined) { ", T += "}"), "array" == e.opts.coerceTypes && "array" != A && (s += " if (" + P + " == 'array' && " + l + ".length == 1) { " + E + " = " + l + " = " + l + "[0]; " + P + " = typeof " + l + ";  } "), "string" == A ? s += " if (" + P + " == 'number' || " + P + " == 'boolean') " + E + " = '' + " + l + "; else if (" + l + " === null) " + E + " = ''; " : "number" == A || "integer" == A ? (s += " if (" + P + " == 'boolean' || " + l + " === null || (" + P + " == 'string' && " + l + " && " + l + " == +" + l + " ", "integer" == A && (s += " && !(" + l + " % 1)"), s += ")) " + E + " = +" + l + "; ") : "boolean" == A ? s += " if (" + l + " === 'false' || " + l + " === 0 || " + l + " === null) " + E + " = false; else if (" + l + " === 'true' || " + l + " === 1) " + E + " = true; " : "null" == A ? s += " if (" + l + " === '' || " + l + " === 0 || " + l + " === false) " + E + " = null; " : "array" == e.opts.coerceTypes && "array" == A && (s += " if (" + P + " == 'string' || " + P + " == 'number' || " + P + " == 'boolean' || " + l + " == null) " + E + " = [" + l + "]; ");
									s += " " + T + " if (" + E + " === undefined) {   ", (K = K || []).push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'type' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(h) + " , params: { type: '", s += $ ? "" + j.join(",") : "" + j, s += "' } ", !1 !== e.opts.messages && (s += " , message: 'should be ", s += $ ? "" + j.join(",") : "" + j, s += "' "), e.opts.verbose && (s += " , schema: validate.schema" + _ + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "), s += " } ") : s += " {} ";
									g = s;
									s = K.pop(), !e.compositeRule && f ? e.async ? s += " throw new ValidationError([" + g + "]); " : s += " validate.errors = [" + g + "]; return false; " : s += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } else {  ";
									var I = p ? "data" + (p - 1 || "") : "parentData";
									s += " " + l + " = " + E + "; ", p || (s += "if (" + I + " !== undefined)"), s += " " + I + "[" + (p ? e.dataPathArr[p] : "parentDataProperty") + "] = " + E + "; } "
								} else {
									(K = K || []).push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'type' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(h) + " , params: { type: '", s += $ ? "" + j.join(",") : "" + j, s += "' } ", !1 !== e.opts.messages && (s += " , message: 'should be ", s += $ ? "" + j.join(",") : "" + j, s += "' "), e.opts.verbose && (s += " , schema: validate.schema" + _ + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "), s += " } ") : s += " {} ";
									g = s;
									s = K.pop(), !e.compositeRule && f ? e.async ? s += " throw new ValidationError([" + g + "]); " : s += " validate.errors = [" + g + "]; return false; " : s += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
								}
								s += " } "
							}
						}
						if (e.schema.$ref && !o) s += " " + e.RULES.all.$ref.code(e, "$ref") + " ", f && (s += " } if (errors === ", s += y ? "0" : "errs_" + c, s += ") { ", w += "}");
						else {
							var F = e.RULES;
							if (F)
								for (var O = -1, C = F.length - 1; O < C;)
									if (Z(x = F[O += 1])) {
										if (x.type && (s += " if (" + e.util.checkDataType(x.type, l) + ") { "), e.opts.useDefaults)
											if ("object" == x.type && e.schema.properties) {
												m = e.schema.properties;
												var U = Object.keys(m);
												if (U)
													for (var z, L = -1, N = U.length - 1; L < N;) {
														if (void 0 !== (B = m[z = U[L += 1]]).default) {
															var M = l + e.util.getProperty(z);
															if (e.compositeRule) {
																if (e.opts.strictDefaults) {
																	v = "default is ignored for: " + M;
																	if ("log" !== e.opts.strictDefaults) throw new Error(v);
																	e.logger.warn(v)
																}
															} else s += " if (" + M + " === undefined ", "empty" == e.opts.useDefaults && (s += " || " + M + " === null || " + M + " === '' "), s += " ) " + M + " = ", "shared" == e.opts.useDefaults ? s += " " + e.useDefault(B.default) + " " : s += " " + JSON.stringify(B.default) + " ", s += "; "
														}
													}
											} else if ("array" == x.type && Array.isArray(e.schema.items)) {
											var H = e.schema.items;
											if (H) {
												R = -1;
												for (var B, W = H.length - 1; R < W;)
													if (void 0 !== (B = H[R += 1]).default) {
														M = l + "[" + R + "]";
														if (e.compositeRule) {
															if (e.opts.strictDefaults) {
																v = "default is ignored for: " + M;
																if ("log" !== e.opts.strictDefaults) throw new Error(v);
																e.logger.warn(v)
															}
														} else s += " if (" + M + " === undefined ", "empty" == e.opts.useDefaults && (s += " || " + M + " === null || " + M + " === '' "), s += " ) " + M + " = ", "shared" == e.opts.useDefaults ? s += " " + e.useDefault(B.default) + " " : s += " " + JSON.stringify(B.default) + " ", s += "; "
													}
											}
										}
										var V = x.rules;
										if (V)
											for (var Q, G = -1, J = V.length - 1; G < J;)
												if (X(Q = V[G += 1])) {
													var Y = Q.code(e, Q.keyword, x.type);
													Y && (s += " " + Y + " ", f && (b += "}"))
												} if (f && (s += " " + b + " ", b = ""), x.type && (s += " } ", j && j === x.type && !k)) {
											s += " else { ";
											var K;
											_ = e.schemaPath + ".type", h = e.errSchemaPath + "/type";
											(K = K || []).push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'type' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(h) + " , params: { type: '", s += $ ? "" + j.join(",") : "" + j, s += "' } ", !1 !== e.opts.messages && (s += " , message: 'should be ", s += $ ? "" + j.join(",") : "" + j, s += "' "), e.opts.verbose && (s += " , schema: validate.schema" + _ + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "), s += " } ") : s += " {} ";
											g = s;
											s = K.pop(), !e.compositeRule && f ? e.async ? s += " throw new ValidationError([" + g + "]); " : s += " validate.errors = [" + g + "]; return false; " : s += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } "
										}
										f && (s += " if (errors === ", s += y ? "0" : "errs_" + c, s += ") { ", w += "}")
									}
						}

						function Z(e) {
							for (var t = e.rules, i = 0; i < t.length; i++)
								if (X(t[i])) return !0
						}

						function X(t) {
							return void 0 !== e.schema[t.keyword] || t.implements && function(t) {
								for (var i = t.implements, s = 0; s < i.length; s++)
									if (void 0 !== e.schema[i[s]]) return !0
							}(t)
						}
						return f && (s += " " + w + " "), y ? (n ? (s += " if (errors === 0) return data;           ", s += " else throw new ValidationError(vErrors); ") : (s += " validate.errors = vErrors; ", s += " return errors === 0;       "), s += " }; return validate;") : s += " var " + u + " = errors === errs_" + c + ";", s = e.util.cleanUpCode(s), y && (s = e.util.finalCleanUpCode(s, n)), s
					},
					ee = d.ucs2length,
					te = J.Validation,
					ie = function e(t, i, s, n) {
						var o = this,
							r = this._opts,
							c = [void 0],
							p = {},
							m = [],
							_ = {},
							h = [],
							f = {},
							l = [];
						i = i || {
							schema: t,
							refVal: c,
							refs: p
						};
						var u = se.call(this, t, i, n);
						var g = this._compilations[u.index];
						if (u.compiling) return g.callValidate = function e() {
							var t = g.validate;
							var i = t.apply(this, arguments);
							e.errors = t.errors;
							return i
						};
						var y = this._formats;
						var v = this.RULES;
						try {
							var b = j(t, i, s, n);
							g.validate = b;
							var w = g.callValidate;
							return w && (w.schema = b.schema, w.errors = null, w.refs = b.refs, w.refVal = b.refVal, w.root = b.root, w.$async = b.$async, r.sourceCode && (w.source = b.source)), b
						} finally {
							ne.call(this, t, i, n)
						}

						function j(t, s, n, _) {
							var f = !s || s && s.schema == t;
							if (s.schema != i.schema) return e.call(o, t, s, n, _);
							var u, g = !0 === t.$async,
								b = X({
									isTop: !0,
									schema: t,
									isRoot: f,
									baseId: _,
									root: s,
									schemaPath: "",
									errSchemaPath: "#",
									errorPath: '""',
									MissingRefError: J.MissingRef,
									RULES: v,
									validate: X,
									util: d,
									resolve: O,
									resolveRef: $,
									usePattern: q,
									useDefault: P,
									useCustomRule: E,
									opts: r,
									formats: y,
									logger: o.logger,
									self: o
								});
							b = pe(c, de) + pe(m, re) + pe(h, ae) + pe(l, ce) + b, r.processCode && (b = r.processCode(b));
							try {
								u = new Function("self", "RULES", "formats", "root", "refVal", "defaults", "customRules", "equal", "ucs2length", "ValidationError", b)(o, v, y, i, c, h, l, a, ee, te), c[0] = u
							} catch (w) {
								throw o.logger.error("Error compiling schema, function code:", b), w
							}
							return u.schema = t, u.errors = null, u.refs = p, u.refVal = c, u.root = f ? u : s, g && (u.$async = !0), !0 === r.sourceCode && (u.source = {
								code: b,
								patterns: m,
								defaults: h
							}), u
						}

						function $(t, n, a) {
							n = O.url(t, n);
							var d, m, _ = p[n];
							if (void 0 !== _) return x(d = c[_], m = "refVal[" + _ + "]");
							if (!a && i.refs) {
								var h = i.refs[n];
								if (void 0 !== h) return x(d = i.refVal[h], m = k(n, d))
							}
							m = k(n);
							var f = O.call(o, j, i, n);
							if (void 0 === f) {
								var l = s && s[n];
								l && (f = O.inlineRef(l, r.inlineRefs) ? l : e.call(o, l, i, s, t))
							}
							if (void 0 !== f) return function(e, t) {
								var i = p[e];
								c[i] = t
							}(n, f), x(f, m);
							! function(e) {
								delete p[e]
							}(n)
						}

						function k(e, t) {
							var i = c.length;
							return c[i] = t, p[e] = i, "refVal" + i
						}

						function x(e, t) {
							return "object" == typeof e || "boolean" == typeof e ? {
								code: t,
								schema: e,
								inline: !0
							} : {
								code: t,
								$async: e && !!e.$async
							}
						}

						function q(e) {
							var t = _[e];
							return void 0 === t && (t = _[e] = m.length, m[t] = e), "pattern" + t
						}

						function P(e) {
							switch (typeof e) {
								case "boolean":
								case "number":
									return "" + e;
								case "string":
									return d.toQuotedString(e);
								case "object":
									if (null === e) return "null";
									var t = Z(e),
										i = f[t];
									return void 0 === i && (i = f[t] = h.length, h[i] = e), "default" + i
							}
						}

						function E(e, t, i, s) {
							if (!1 !== o._opts.validateSchema) {
								var n = e.definition.dependencies;
								if (n && !n.every((function(e) {
										return Object.prototype.hasOwnProperty.call(i, e)
									}))) throw new Error("parent schema must have all required keywords: " + n.join(","));
								var a = e.definition.validateSchema;
								if (a)
									if (!a(t)) {
										var d = "keyword schema is invalid: " + o.errorsText(a.errors);
										if ("log" != o._opts.validateSchema) throw new Error(d);
										o.logger.error(d)
									}
							}
							var c, p = e.definition.compile,
								m = e.definition.inline,
								_ = e.definition.macro;
							if (p) c = p.call(o, t, i, s);
							else if (_) c = _.call(o, t, i, s), !1 !== r.validateSchema && o.validateSchema(c, !0);
							else if (m) c = m.call(o, s, e.keyword, t, i);
							else if (!(c = e.definition.validate)) return;
							if (void 0 === c) throw new Error('custom keyword "' + e.keyword + '"failed to compile');
							var h = l.length;
							return l[h] = c, {
								code: "customRule" + h,
								validate: c
							}
						}
					};

				function se(e, t, i) {
					var s = oe.call(this, e, t, i);
					return s >= 0 ? {
						index: s,
						compiling: !0
					} : (s = this._compilations.length, this._compilations[s] = {
						schema: e,
						root: t,
						baseId: i
					}, {
						index: s,
						compiling: !1
					})
				}

				function ne(e, t, i) {
					var s = oe.call(this, e, t, i);
					s >= 0 && this._compilations.splice(s, 1)
				}

				function oe(e, t, i) {
					for (var s = 0; s < this._compilations.length; s++) {
						var n = this._compilations[s];
						if (n.schema == e && n.root == t && n.baseId == i) return s
					}
					return -1
				}

				function re(e, t) {
					return "var pattern" + e + " = new RegExp(" + d.toQuotedString(t[e]) + ");"
				}

				function ae(e) {
					return "var default" + e + " = defaults[" + e + "];"
				}

				function de(e, t) {
					return void 0 === t[e] ? "" : "var refVal" + e + " = refVal[" + e + "];"
				}

				function ce(e) {
					return "var customRule" + e + " = customRules[" + e + "];"
				}

				function pe(e, t) {
					if (!e.length) return "";
					for (var i = "", s = 0; s < e.length; s++) i += t(s, e);
					return i
				}
				var me = s((function(e) {
						var t = e.exports = function() {
							this._cache = {}
						};
						t.prototype.put = function(e, t) {
							this._cache[e] = t
						}, t.prototype.get = function(e) {
							return this._cache[e]
						}, t.prototype.del = function(e) {
							delete this._cache[e]
						}, t.prototype.clear = function() {
							this._cache = {}
						}
					})),
					_e = /^(\d\d\d\d)-(\d\d)-(\d\d)$/,
					he = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
					fe = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i,
					le = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
					ue = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
					ge = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
					ye = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i,
					ve = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
					be = /^(?:\/(?:[^~/]|~0|~1)*)*$/,
					we = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
					je = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
					$e = ke;

				function ke(e) {
					return e = "full" == e ? "full" : "fast", d.copy(ke[e])
				}

				function xe(e) {
					var t = e.match(_e);
					if (!t) return !1;
					var i = +t[1],
						s = +t[2],
						n = +t[3];
					return s >= 1 && s <= 12 && n >= 1 && n <= (2 == s && function(e) {
						return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
					}(i) ? 29 : he[s])
				}

				function qe(e, t) {
					var i = e.match(fe);
					if (!i) return !1;
					var s = i[1],
						n = i[2],
						o = i[3],
						r = i[5];
					return (s <= 23 && n <= 59 && o <= 59 || 23 == s && 59 == n && 60 == o) && (!t || r)
				}
				ke.fast = {
					date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
					time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
					"date-time": /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
					uri: /^(?:[a-z][a-z0-9+-.]*:)(?:\/?\/)?[^\s]*$/i,
					"uri-reference": /^(?:(?:[a-z][a-z0-9+-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
					"uri-template": ge,
					url: ye,
					email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
					hostname: le,
					ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
					ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
					regex: Se,
					uuid: ve,
					"json-pointer": be,
					"json-pointer-uri-fragment": we,
					"relative-json-pointer": je
				}, ke.full = {
					date: xe,
					time: qe,
					"date-time": function(e) {
						var t = e.split(Pe);
						return 2 == t.length && xe(t[0]) && qe(t[1], !0)
					},
					uri: function(e) {
						return Ee.test(e) && ue.test(e)
					},
					"uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
					"uri-template": ge,
					url: ye,
					email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
					hostname: le,
					ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
					ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
					regex: Se,
					uuid: ve,
					"json-pointer": be,
					"json-pointer-uri-fragment": we,
					"relative-json-pointer": je
				};
				var Pe = /t|\s/i;
				var Ee = /\/|:/;
				var Te = /[^\\]\\Z/;

				function Se(e) {
					if (Te.test(e)) return !1;
					try {
						return new RegExp(e), !0
					} catch (t) {
						return !1
					}
				}
				var Ae = function(e, t, i) {
						var s, n = " ",
							o = e.level,
							r = e.dataLevel,
							a = e.schema[t],
							d = e.schemaPath + e.util.getProperty(t),
							c = e.errSchemaPath + "/" + t,
							p = !e.opts.allErrors,
							m = "data" + (r || ""),
							_ = e.opts.$data && a && a.$data;
						_ ? (n += " var schema" + o + " = " + e.util.getData(a.$data, r, e.dataPathArr) + "; ", s = "schema" + o) : s = a;
						var h = "maximum" == t,
							f = h ? "exclusiveMaximum" : "exclusiveMinimum",
							l = e.schema[f],
							u = e.opts.$data && l && l.$data,
							g = h ? "<" : ">",
							y = h ? ">" : "<",
							v = void 0;
						if (u) {
							var b = e.util.getData(l.$data, r, e.dataPathArr),
								w = "exclusive" + o,
								j = "exclType" + o,
								$ = "exclIsNumber" + o,
								k = "' + " + (P = "op" + o) + " + '";
							n += " var schemaExcl" + o + " = " + b + "; ", n += " var " + w + "; var " + j + " = typeof " + (b = "schemaExcl" + o) + "; if (" + j + " != 'boolean' && " + j + " != 'undefined' && " + j + " != 'number') { ";
							var x;
							v = f;
							(x = x || []).push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: '" + (v || "_exclusiveLimit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ", !1 !== e.opts.messages && (n += " , message: '" + f + " should be boolean' "), e.opts.verbose && (n += " , schema: validate.schema" + d + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ";
							var q = n;
							n = x.pop(), !e.compositeRule && p ? e.async ? n += " throw new ValidationError([" + q + "]); " : n += " validate.errors = [" + q + "]; return false; " : n += " var err = " + q + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += " } else if ( ", _ && (n += " (" + s + " !== undefined && typeof " + s + " != 'number') || "), n += " " + j + " == 'number' ? ( (" + w + " = " + s + " === undefined || " + b + " " + g + "= " + s + ") ? " + m + " " + y + "= " + b + " : " + m + " " + y + " " + s + " ) : ( (" + w + " = " + b + " === true) ? " + m + " " + y + "= " + s + " : " + m + " " + y + " " + s + " ) || " + m + " !== " + m + ") { var op" + o + " = " + w + " ? '" + g + "' : '" + g + "='; ", void 0 === a && (v = f, c = e.errSchemaPath + "/" + f, s = b, _ = u)
						} else {
							k = g;
							if (($ = "number" == typeof l) && _) {
								var P = "'" + k + "'";
								n += " if ( ", _ && (n += " (" + s + " !== undefined && typeof " + s + " != 'number') || "), n += " ( " + s + " === undefined || " + l + " " + g + "= " + s + " ? " + m + " " + y + "= " + l + " : " + m + " " + y + " " + s + " ) || " + m + " !== " + m + ") { "
							} else {
								$ && void 0 === a ? (w = !0, v = f, c = e.errSchemaPath + "/" + f, s = l, y += "=") : ($ && (s = Math[h ? "min" : "max"](l, a)), l === (!$ || s) ? (w = !0, v = f, c = e.errSchemaPath + "/" + f, y += "=") : (w = !1, k += "="));
								P = "'" + k + "'";
								n += " if ( ", _ && (n += " (" + s + " !== undefined && typeof " + s + " != 'number') || "), n += " " + m + " " + y + " " + s + " || " + m + " !== " + m + ") { "
							}
						}
						v = v || t, (x = x || []).push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: '" + (v || "_limit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { comparison: " + P + ", limit: " + s + ", exclusive: " + w + " } ", !1 !== e.opts.messages && (n += " , message: 'should be " + k + " ", n += _ ? "' + " + s : s + "'"), e.opts.verbose && (n += " , schema:  ", n += _ ? "validate.schema" + d : "" + a, n += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ";
						q = n;
						return n = x.pop(), !e.compositeRule && p ? e.async ? n += " throw new ValidationError([" + q + "]); " : n += " validate.errors = [" + q + "]; return false; " : n += " var err = " + q + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += " } ", p && (n += " else { "), n
					},
					Re = function(e, t, i) {
						var s, n = " ",
							o = e.level,
							r = e.dataLevel,
							a = e.schema[t],
							d = e.schemaPath + e.util.getProperty(t),
							c = e.errSchemaPath + "/" + t,
							p = !e.opts.allErrors,
							m = "data" + (r || ""),
							_ = e.opts.$data && a && a.$data;
						_ ? (n += " var schema" + o + " = " + e.util.getData(a.$data, r, e.dataPathArr) + "; ", s = "schema" + o) : s = a, n += "if ( ", _ && (n += " (" + s + " !== undefined && typeof " + s + " != 'number') || "), n += " " + m + ".length " + ("maxItems" == t ? ">" : "<") + " " + s + ") { ";
						var h = t,
							f = f || [];
						f.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: '" + (h || "_limitItems") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { limit: " + s + " } ", !1 !== e.opts.messages && (n += " , message: 'should NOT have ", n += "maxItems" == t ? "more" : "fewer", n += " than ", n += _ ? "' + " + s + " + '" : "" + a, n += " items' "), e.opts.verbose && (n += " , schema:  ", n += _ ? "validate.schema" + d : "" + a, n += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ";
						var l = n;
						return n = f.pop(), !e.compositeRule && p ? e.async ? n += " throw new ValidationError([" + l + "]); " : n += " validate.errors = [" + l + "]; return false; " : n += " var err = " + l + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += "} ", p && (n += " else { "), n
					},
					De = function(e, t, i) {
						var s, n = " ",
							o = e.level,
							r = e.dataLevel,
							a = e.schema[t],
							d = e.schemaPath + e.util.getProperty(t),
							c = e.errSchemaPath + "/" + t,
							p = !e.opts.allErrors,
							m = "data" + (r || ""),
							_ = e.opts.$data && a && a.$data;
						_ ? (n += " var schema" + o + " = " + e.util.getData(a.$data, r, e.dataPathArr) + "; ", s = "schema" + o) : s = a;
						var h = "maxLength" == t ? ">" : "<";
						n += "if ( ", _ && (n += " (" + s + " !== undefined && typeof " + s + " != 'number') || "), !1 === e.opts.unicode ? n += " " + m + ".length " : n += " ucs2length(" + m + ") ", n += " " + h + " " + s + ") { ";
						var f = t,
							l = l || [];
						l.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: '" + (f || "_limitLength") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { limit: " + s + " } ", !1 !== e.opts.messages && (n += " , message: 'should NOT be ", n += "maxLength" == t ? "longer" : "shorter", n += " than ", n += _ ? "' + " + s + " + '" : "" + a, n += " characters' "), e.opts.verbose && (n += " , schema:  ", n += _ ? "validate.schema" + d : "" + a, n += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ";
						var u = n;
						return n = l.pop(), !e.compositeRule && p ? e.async ? n += " throw new ValidationError([" + u + "]); " : n += " validate.errors = [" + u + "]; return false; " : n += " var err = " + u + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += "} ", p && (n += " else { "), n
					},
					Ie = function(e, t, i) {
						var s, n = " ",
							o = e.level,
							r = e.dataLevel,
							a = e.schema[t],
							d = e.schemaPath + e.util.getProperty(t),
							c = e.errSchemaPath + "/" + t,
							p = !e.opts.allErrors,
							m = "data" + (r || ""),
							_ = e.opts.$data && a && a.$data;
						_ ? (n += " var schema" + o + " = " + e.util.getData(a.$data, r, e.dataPathArr) + "; ", s = "schema" + o) : s = a, n += "if ( ", _ && (n += " (" + s + " !== undefined && typeof " + s + " != 'number') || "), n += " Object.keys(" + m + ").length " + ("maxProperties" == t ? ">" : "<") + " " + s + ") { ";
						var h = t,
							f = f || [];
						f.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: '" + (h || "_limitProperties") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { limit: " + s + " } ", !1 !== e.opts.messages && (n += " , message: 'should NOT have ", n += "maxProperties" == t ? "more" : "fewer", n += " than ", n += _ ? "' + " + s + " + '" : "" + a, n += " properties' "), e.opts.verbose && (n += " , schema:  ", n += _ ? "validate.schema" + d : "" + a, n += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ";
						var l = n;
						return n = f.pop(), !e.compositeRule && p ? e.async ? n += " throw new ValidationError([" + l + "]); " : n += " validate.errors = [" + l + "]; return false; " : n += " var err = " + l + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += "} ", p && (n += " else { "), n
					},
					Fe = {
						$ref: function(e, t, i) {
							var s, n, o = " ",
								r = e.level,
								a = e.dataLevel,
								d = e.schema[t],
								c = e.errSchemaPath + "/" + t,
								p = !e.opts.allErrors,
								m = "data" + (a || ""),
								_ = "valid" + r;
							if ("#" == d || "#/" == d) e.isRoot ? (s = e.async, n = "validate") : (s = !0 === e.root.schema.$async, n = "root.refVal[0]");
							else {
								var h = e.resolveRef(e.baseId, d, e.isRoot);
								if (void 0 === h) {
									var f = e.MissingRefError.message(e.baseId, d);
									if ("fail" == e.opts.missingRefs) {
										e.logger.error(f), (y = y || []).push(o), o = "", !1 !== e.createErrors ? (o += " { keyword: '$ref' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { ref: '" + e.util.escapeQuotes(d) + "' } ", !1 !== e.opts.messages && (o += " , message: 'can\\'t resolve reference " + e.util.escapeQuotes(d) + "' "), e.opts.verbose && (o += " , schema: " + e.util.toQuotedString(d) + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), o += " } ") : o += " {} ";
										var l = o;
										o = y.pop(), !e.compositeRule && p ? e.async ? o += " throw new ValidationError([" + l + "]); " : o += " validate.errors = [" + l + "]; return false; " : o += " var err = " + l + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", p && (o += " if (false) { ")
									} else {
										if ("ignore" != e.opts.missingRefs) throw new e.MissingRefError(e.baseId, d, f);
										e.logger.warn(f), p && (o += " if (true) { ")
									}
								} else if (h.inline) {
									var u = e.util.copy(e);
									u.level++;
									var g = "valid" + u.level;
									u.schema = h.schema, u.schemaPath = "", u.errSchemaPath = d, o += " " + e.validate(u).replace(/validate\.schema/g, h.code) + " ", p && (o += " if (" + g + ") { ")
								} else s = !0 === h.$async || e.async && !1 !== h.$async, n = h.code
							}
							if (n) {
								var y;
								(y = y || []).push(o), o = "", e.opts.passContext ? o += " " + n + ".call(this, " : o += " " + n + "( ", o += " " + m + ", (dataPath || '')", '""' != e.errorPath && (o += " + " + e.errorPath);
								var v = o += " , " + (a ? "data" + (a - 1 || "") : "parentData") + " , " + (a ? e.dataPathArr[a] : "parentDataProperty") + ", rootData)  ";
								if (o = y.pop(), s) {
									if (!e.async) throw new Error("async schema referenced by sync schema");
									p && (o += " var " + _ + "; "), o += " try { await " + v + "; ", p && (o += " " + _ + " = true; "), o += " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", p && (o += " " + _ + " = false; "), o += " } ", p && (o += " if (" + _ + ") { ")
								} else o += " if (!" + v + ") { if (vErrors === null) vErrors = " + n + ".errors; else vErrors = vErrors.concat(" + n + ".errors); errors = vErrors.length; } ", p && (o += " else { ")
							}
							return o
						},
						allOf: function(e, t, i) {
							var s = " ",
								n = e.schema[t],
								o = e.schemaPath + e.util.getProperty(t),
								r = e.errSchemaPath + "/" + t,
								a = !e.opts.allErrors,
								d = e.util.copy(e),
								c = "";
							d.level++;
							var p = "valid" + d.level,
								m = d.baseId,
								_ = !0,
								h = n;
							if (h)
								for (var f, l = -1, u = h.length - 1; l < u;) f = h[l += 1], (e.opts.strictKeywords ? "object" == typeof f && Object.keys(f).length > 0 : e.util.schemaHasRules(f, e.RULES.all)) && (_ = !1, d.schema = f, d.schemaPath = o + "[" + l + "]", d.errSchemaPath = r + "/" + l, s += "  " + e.validate(d) + " ", d.baseId = m, a && (s += " if (" + p + ") { ", c += "}"));
							return a && (s += _ ? " if (true) { " : " " + c.slice(0, -1) + " "), s = e.util.cleanUpCode(s)
						},
						anyOf: function(e, t, i) {
							var s = " ",
								n = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								p = "data" + (o || ""),
								m = "valid" + n,
								_ = "errs__" + n,
								h = e.util.copy(e),
								f = "";
							h.level++;
							var l = "valid" + h.level;
							if (r.every((function(t) {
									return e.opts.strictKeywords ? "object" == typeof t && Object.keys(t).length > 0 : e.util.schemaHasRules(t, e.RULES.all)
								}))) {
								var u = h.baseId;
								s += " var " + _ + " = errors; var " + m + " = false;  ";
								var g = e.compositeRule;
								e.compositeRule = h.compositeRule = !0;
								var y = r;
								if (y)
									for (var v, b = -1, w = y.length - 1; b < w;) v = y[b += 1], h.schema = v, h.schemaPath = a + "[" + b + "]", h.errSchemaPath = d + "/" + b, s += "  " + e.validate(h) + " ", h.baseId = u, s += " " + m + " = " + m + " || " + l + "; if (!" + m + ") { ", f += "}";
								e.compositeRule = h.compositeRule = g, s += " " + f + " if (!" + m + ") {   var err =   ", !1 !== e.createErrors ? (s += " { keyword: 'anyOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: {} ", !1 !== e.opts.messages && (s += " , message: 'should match some schema in anyOf' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ", s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && c && (e.async ? s += " throw new ValidationError(vErrors); " : s += " validate.errors = vErrors; return false; "), s += " } else {  errors = " + _ + "; if (vErrors !== null) { if (" + _ + ") vErrors.length = " + _ + "; else vErrors = null; } ", e.opts.allErrors && (s += " } "), s = e.util.cleanUpCode(s)
							} else c && (s += " if (true) { ");
							return s
						},
						$comment: function(e, t, i) {
							var s = " ",
								n = e.schema[t],
								o = e.errSchemaPath + "/" + t,
								r = (e.opts.allErrors, e.util.toQuotedString(n));
							return !0 === e.opts.$comment ? s += " console.log(" + r + ");" : "function" == typeof e.opts.$comment && (s += " self._opts.$comment(" + r + ", " + e.util.toQuotedString(o) + ", validate.root.schema);"), s
						},
						const: function(e, t, i) {
							var s = " ",
								n = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								p = "data" + (o || ""),
								m = "valid" + n,
								_ = e.opts.$data && r && r.$data;
							_ && (s += " var schema" + n + " = " + e.util.getData(r.$data, o, e.dataPathArr) + "; "), _ || (s += " var schema" + n + " = validate.schema" + a + ";"), s += "var " + m + " = equal(" + p + ", schema" + n + "); if (!" + m + ") {   ";
							var h = h || [];
							h.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'const' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { allowedValue: schema" + n + " } ", !1 !== e.opts.messages && (s += " , message: 'should be equal to constant' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ";
							var f = s;
							return s = h.pop(), !e.compositeRule && c ? e.async ? s += " throw new ValidationError([" + f + "]); " : s += " validate.errors = [" + f + "]; return false; " : s += " var err = " + f + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " }", c && (s += " else { "), s
						},
						contains: function(e, t, i) {
							var s = " ",
								n = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								p = "data" + (o || ""),
								m = "valid" + n,
								_ = "errs__" + n,
								h = e.util.copy(e);
							h.level++;
							var f = "valid" + h.level,
								l = "i" + n,
								u = h.dataLevel = e.dataLevel + 1,
								g = "data" + u,
								y = e.baseId,
								v = e.opts.strictKeywords ? "object" == typeof r && Object.keys(r).length > 0 : e.util.schemaHasRules(r, e.RULES.all);
							if (s += "var " + _ + " = errors;var " + m + ";", v) {
								var b = e.compositeRule;
								e.compositeRule = h.compositeRule = !0, h.schema = r, h.schemaPath = a, h.errSchemaPath = d, s += " var " + f + " = false; for (var " + l + " = 0; " + l + " < " + p + ".length; " + l + "++) { ", h.errorPath = e.util.getPathExpr(e.errorPath, l, e.opts.jsonPointers, !0);
								var w = p + "[" + l + "]";
								h.dataPathArr[u] = l;
								var j = e.validate(h);
								h.baseId = y, e.util.varOccurences(j, g) < 2 ? s += " " + e.util.varReplace(j, g, w) + " " : s += " var " + g + " = " + w + "; " + j + " ", s += " if (" + f + ") break; }  ", e.compositeRule = h.compositeRule = b, s += "  if (!" + f + ") {"
							} else s += " if (" + p + ".length == 0) {";
							var $ = $ || [];
							$.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'contains' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: {} ", !1 !== e.opts.messages && (s += " , message: 'should contain a valid item' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ";
							var k = s;
							return s = $.pop(), !e.compositeRule && c ? e.async ? s += " throw new ValidationError([" + k + "]); " : s += " validate.errors = [" + k + "]; return false; " : s += " var err = " + k + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } else { ", v && (s += "  errors = " + _ + "; if (vErrors !== null) { if (" + _ + ") vErrors.length = " + _ + "; else vErrors = null; } "), e.opts.allErrors && (s += " } "), s = e.util.cleanUpCode(s)
						},
						dependencies: function(e, t, i) {
							var s = " ",
								n = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								p = "data" + (o || ""),
								m = "errs__" + n,
								_ = e.util.copy(e),
								h = "";
							_.level++;
							var f = "valid" + _.level,
								l = {},
								u = {},
								g = e.opts.ownProperties;
							for (w in r) {
								var y = r[w],
									v = Array.isArray(y) ? u : l;
								v[w] = y
							}
							s += "var " + m + " = errors;";
							var b = e.errorPath;
							for (var w in s += "var missing" + n + ";", u)
								if ((v = u[w]).length) {
									if (s += " if ( " + p + e.util.getProperty(w) + " !== undefined ", g && (s += " && Object.prototype.hasOwnProperty.call(" + p + ", '" + e.util.escapeQuotes(w) + "') "), c) {
										s += " && ( ";
										var j = v;
										if (j)
											for (var $ = -1, k = j.length - 1; $ < k;) {
												S = j[$ += 1], $ && (s += " || "), s += " ( ( " + (I = p + (D = e.util.getProperty(S))) + " === undefined ", g && (s += " || ! Object.prototype.hasOwnProperty.call(" + p + ", '" + e.util.escapeQuotes(S) + "') "), s += ") && (missing" + n + " = " + e.util.toQuotedString(e.opts.jsonPointers ? S : D) + ") ) "
											}
										s += ")) {  ";
										var x = "missing" + n,
											q = "' + " + x + " + '";
										e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(b, x, !0) : b + " + " + x);
										var P = P || [];
										P.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { property: '" + e.util.escapeQuotes(w) + "', missingProperty: '" + q + "', depsCount: " + v.length + ", deps: '" + e.util.escapeQuotes(1 == v.length ? v[0] : v.join(", ")) + "' } ", !1 !== e.opts.messages && (s += " , message: 'should have ", 1 == v.length ? s += "property " + e.util.escapeQuotes(v[0]) : s += "properties " + e.util.escapeQuotes(v.join(", ")), s += " when property " + e.util.escapeQuotes(w) + " is present' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ";
										var E = s;
										s = P.pop(), !e.compositeRule && c ? e.async ? s += " throw new ValidationError([" + E + "]); " : s += " validate.errors = [" + E + "]; return false; " : s += " var err = " + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
									} else {
										s += " ) { ";
										var T = v;
										if (T)
											for (var S, A = -1, R = T.length - 1; A < R;) {
												S = T[A += 1];
												var D = e.util.getProperty(S),
													I = (q = e.util.escapeQuotes(S), p + D);
												e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(b, S, e.opts.jsonPointers)), s += " if ( " + I + " === undefined ", g && (s += " || ! Object.prototype.hasOwnProperty.call(" + p + ", '" + e.util.escapeQuotes(S) + "') "), s += ") {  var err =   ", !1 !== e.createErrors ? (s += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { property: '" + e.util.escapeQuotes(w) + "', missingProperty: '" + q + "', depsCount: " + v.length + ", deps: '" + e.util.escapeQuotes(1 == v.length ? v[0] : v.join(", ")) + "' } ", !1 !== e.opts.messages && (s += " , message: 'should have ", 1 == v.length ? s += "property " + e.util.escapeQuotes(v[0]) : s += "properties " + e.util.escapeQuotes(v.join(", ")), s += " when property " + e.util.escapeQuotes(w) + " is present' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ", s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "
											}
									}
									s += " }   ", c && (h += "}", s += " else { ")
								} e.errorPath = b;
							var F = _.baseId;
							for (var w in l) {
								y = l[w];
								(e.opts.strictKeywords ? "object" == typeof y && Object.keys(y).length > 0 : e.util.schemaHasRules(y, e.RULES.all)) && (s += " " + f + " = true; if ( " + p + e.util.getProperty(w) + " !== undefined ", g && (s += " && Object.prototype.hasOwnProperty.call(" + p + ", '" + e.util.escapeQuotes(w) + "') "), s += ") { ", _.schema = y, _.schemaPath = a + e.util.getProperty(w), _.errSchemaPath = d + "/" + e.util.escapeFragment(w), s += "  " + e.validate(_) + " ", _.baseId = F, s += " }  ", c && (s += " if (" + f + ") { ", h += "}"))
							}
							return c && (s += "   " + h + " if (" + m + " == errors) {"), s = e.util.cleanUpCode(s)
						},
						enum: function(e, t, i) {
							var s = " ",
								n = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								p = "data" + (o || ""),
								m = "valid" + n,
								_ = e.opts.$data && r && r.$data;
							_ && (s += " var schema" + n + " = " + e.util.getData(r.$data, o, e.dataPathArr) + "; ");
							var h = "i" + n,
								f = "schema" + n;
							_ || (s += " var " + f + " = validate.schema" + a + ";"), s += "var " + m + ";", _ && (s += " if (schema" + n + " === undefined) " + m + " = true; else if (!Array.isArray(schema" + n + ")) " + m + " = false; else {"), s += m + " = false;for (var " + h + "=0; " + h + "<" + f + ".length; " + h + "++) if (equal(" + p + ", " + f + "[" + h + "])) { " + m + " = true; break; }", _ && (s += "  }  "), s += " if (!" + m + ") {   ";
							var l = l || [];
							l.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'enum' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { allowedValues: schema" + n + " } ", !1 !== e.opts.messages && (s += " , message: 'should be equal to one of the allowed values' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ";
							var u = s;
							return s = l.pop(), !e.compositeRule && c ? e.async ? s += " throw new ValidationError([" + u + "]); " : s += " validate.errors = [" + u + "]; return false; " : s += " var err = " + u + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " }", c && (s += " else { "), s
						},
						format: function(e, t, i) {
							var s = " ",
								n = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								p = "data" + (o || "");
							if (!1 === e.opts.format) return c && (s += " if (true) { "), s;
							var m, _ = e.opts.$data && r && r.$data;
							_ ? (s += " var schema" + n + " = " + e.util.getData(r.$data, o, e.dataPathArr) + "; ", m = "schema" + n) : m = r;
							var h = e.opts.unknownFormats,
								f = Array.isArray(h);
							if (_) {
								s += " var " + (l = "format" + n) + " = formats[" + m + "]; var " + (u = "isObject" + n) + " = typeof " + l + " == 'object' && !(" + l + " instanceof RegExp) && " + l + ".validate; var " + (g = "formatType" + n) + " = " + u + " && " + l + ".type || 'string'; if (" + u + ") { ", e.async && (s += " var async" + n + " = " + l + ".async; "), s += " " + l + " = " + l + ".validate; } if (  ", _ && (s += " (" + m + " !== undefined && typeof " + m + " != 'string') || "), s += " (", "ignore" != h && (s += " (" + m + " && !" + l + " ", f && (s += " && self._opts.unknownFormats.indexOf(" + m + ") == -1 "), s += ") || "), s += " (" + l + " && " + g + " == '" + i + "' && !(typeof " + l + " == 'function' ? ", e.async ? s += " (async" + n + " ? await " + l + "(" + p + ") : " + l + "(" + p + ")) " : s += " " + l + "(" + p + ") ", s += " : " + l + ".test(" + p + "))))) {"
							} else {
								var l;
								if (!(l = e.formats[r])) {
									if ("ignore" == h) return e.logger.warn('unknown format "' + r + '" ignored in schema at path "' + e.errSchemaPath + '"'), c && (s += " if (true) { "), s;
									if (f && h.indexOf(r) >= 0) return c && (s += " if (true) { "), s;
									throw new Error('unknown format "' + r + '" is used in schema at path "' + e.errSchemaPath + '"')
								}
								var u, g = (u = "object" == typeof l && !(l instanceof RegExp) && l.validate) && l.type || "string";
								if (u) {
									var y = !0 === l.async;
									l = l.validate
								}
								if (g != i) return c && (s += " if (true) { "), s;
								if (y) {
									if (!e.async) throw new Error("async format in sync schema");
									s += " if (!(await " + (v = "formats" + e.util.getProperty(r) + ".validate") + "(" + p + "))) { "
								} else {
									s += " if (! ";
									var v = "formats" + e.util.getProperty(r);
									u && (v += ".validate"), s += "function" == typeof l ? " " + v + "(" + p + ") " : " " + v + ".test(" + p + ") ", s += ") { "
								}
							}
							var b = b || [];
							b.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'format' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { format:  ", s += _ ? "" + m : "" + e.util.toQuotedString(r), s += "  } ", !1 !== e.opts.messages && (s += " , message: 'should match format \"", s += _ ? "' + " + m + " + '" : "" + e.util.escapeQuotes(r), s += "\"' "), e.opts.verbose && (s += " , schema:  ", s += _ ? "validate.schema" + a : "" + e.util.toQuotedString(r), s += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ";
							var w = s;
							return s = b.pop(), !e.compositeRule && c ? e.async ? s += " throw new ValidationError([" + w + "]); " : s += " validate.errors = [" + w + "]; return false; " : s += " var err = " + w + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } ", c && (s += " else { "), s
						},
						if: function(e, t, i) {
							var s = " ",
								n = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								p = "data" + (o || ""),
								m = "valid" + n,
								_ = "errs__" + n,
								h = e.util.copy(e);
							h.level++;
							var f = "valid" + h.level,
								l = e.schema.then,
								u = e.schema.else,
								g = void 0 !== l && (e.opts.strictKeywords ? "object" == typeof l && Object.keys(l).length > 0 : e.util.schemaHasRules(l, e.RULES.all)),
								y = void 0 !== u && (e.opts.strictKeywords ? "object" == typeof u && Object.keys(u).length > 0 : e.util.schemaHasRules(u, e.RULES.all)),
								v = h.baseId;
							if (g || y) {
								var b;
								h.createErrors = !1, h.schema = r, h.schemaPath = a, h.errSchemaPath = d, s += " var " + _ + " = errors; var " + m + " = true;  ";
								var w = e.compositeRule;
								e.compositeRule = h.compositeRule = !0, s += "  " + e.validate(h) + " ", h.baseId = v, h.createErrors = !0, s += "  errors = " + _ + "; if (vErrors !== null) { if (" + _ + ") vErrors.length = " + _ + "; else vErrors = null; }  ", e.compositeRule = h.compositeRule = w, g ? (s += " if (" + f + ") {  ", h.schema = e.schema.then, h.schemaPath = e.schemaPath + ".then", h.errSchemaPath = e.errSchemaPath + "/then", s += "  " + e.validate(h) + " ", h.baseId = v, s += " " + m + " = " + f + "; ", g && y ? s += " var " + (b = "ifClause" + n) + " = 'then'; " : b = "'then'", s += " } ", y && (s += " else { ")) : s += " if (!" + f + ") { ", y && (h.schema = e.schema.else, h.schemaPath = e.schemaPath + ".else", h.errSchemaPath = e.errSchemaPath + "/else", s += "  " + e.validate(h) + " ", h.baseId = v, s += " " + m + " = " + f + "; ", g && y ? s += " var " + (b = "ifClause" + n) + " = 'else'; " : b = "'else'", s += " } "), s += " if (!" + m + ") {   var err =   ", !1 !== e.createErrors ? (s += " { keyword: 'if' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { failingKeyword: " + b + " } ", !1 !== e.opts.messages && (s += " , message: 'should match \"' + " + b + " + '\" schema' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ", s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && c && (e.async ? s += " throw new ValidationError(vErrors); " : s += " validate.errors = vErrors; return false; "), s += " }   ", c && (s += " else { "), s = e.util.cleanUpCode(s)
							} else c && (s += " if (true) { ");
							return s
						},
						items: function(e, t, i) {
							var s = " ",
								n = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								p = "data" + (o || ""),
								m = "valid" + n,
								_ = "errs__" + n,
								h = e.util.copy(e),
								f = "";
							h.level++;
							var l = "valid" + h.level,
								u = "i" + n,
								g = h.dataLevel = e.dataLevel + 1,
								y = "data" + g,
								v = e.baseId;
							if (s += "var " + _ + " = errors;var " + m + ";", Array.isArray(r)) {
								var b = e.schema.additionalItems;
								if (!1 === b) {
									s += " " + m + " = " + p + ".length <= " + r.length + "; ";
									var w = d;
									d = e.errSchemaPath + "/additionalItems", s += "  if (!" + m + ") {   ";
									var j = j || [];
									j.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'additionalItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { limit: " + r.length + " } ", !1 !== e.opts.messages && (s += " , message: 'should NOT have more than " + r.length + " items' "), e.opts.verbose && (s += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ";
									var $ = s;
									s = j.pop(), !e.compositeRule && c ? e.async ? s += " throw new ValidationError([" + $ + "]); " : s += " validate.errors = [" + $ + "]; return false; " : s += " var err = " + $ + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } ", d = w, c && (f += "}", s += " else { ")
								}
								var k = r;
								if (k)
									for (var x, q = -1, P = k.length - 1; q < P;)
										if (x = k[q += 1], e.opts.strictKeywords ? "object" == typeof x && Object.keys(x).length > 0 : e.util.schemaHasRules(x, e.RULES.all)) {
											s += " " + l + " = true; if (" + p + ".length > " + q + ") { ";
											var E = p + "[" + q + "]";
											h.schema = x, h.schemaPath = a + "[" + q + "]", h.errSchemaPath = d + "/" + q, h.errorPath = e.util.getPathExpr(e.errorPath, q, e.opts.jsonPointers, !0), h.dataPathArr[g] = q;
											var T = e.validate(h);
											h.baseId = v, e.util.varOccurences(T, y) < 2 ? s += " " + e.util.varReplace(T, y, E) + " " : s += " var " + y + " = " + E + "; " + T + " ", s += " }  ", c && (s += " if (" + l + ") { ", f += "}")
										} if ("object" == typeof b && (e.opts.strictKeywords ? "object" == typeof b && Object.keys(b).length > 0 : e.util.schemaHasRules(b, e.RULES.all))) {
									h.schema = b, h.schemaPath = e.schemaPath + ".additionalItems", h.errSchemaPath = e.errSchemaPath + "/additionalItems", s += " " + l + " = true; if (" + p + ".length > " + r.length + ") {  for (var " + u + " = " + r.length + "; " + u + " < " + p + ".length; " + u + "++) { ", h.errorPath = e.util.getPathExpr(e.errorPath, u, e.opts.jsonPointers, !0);
									E = p + "[" + u + "]";
									h.dataPathArr[g] = u;
									T = e.validate(h);
									h.baseId = v, e.util.varOccurences(T, y) < 2 ? s += " " + e.util.varReplace(T, y, E) + " " : s += " var " + y + " = " + E + "; " + T + " ", c && (s += " if (!" + l + ") break; "), s += " } }  ", c && (s += " if (" + l + ") { ", f += "}")
								}
							} else if (e.opts.strictKeywords ? "object" == typeof r && Object.keys(r).length > 0 : e.util.schemaHasRules(r, e.RULES.all)) {
								h.schema = r, h.schemaPath = a, h.errSchemaPath = d, s += "  for (var " + u + " = 0; " + u + " < " + p + ".length; " + u + "++) { ", h.errorPath = e.util.getPathExpr(e.errorPath, u, e.opts.jsonPointers, !0);
								E = p + "[" + u + "]";
								h.dataPathArr[g] = u;
								T = e.validate(h);
								h.baseId = v, e.util.varOccurences(T, y) < 2 ? s += " " + e.util.varReplace(T, y, E) + " " : s += " var " + y + " = " + E + "; " + T + " ", c && (s += " if (!" + l + ") break; "), s += " }"
							}
							return c && (s += " " + f + " if (" + _ + " == errors) {"), s = e.util.cleanUpCode(s)
						},
						maximum: Ae,
						minimum: Ae,
						maxItems: Re,
						minItems: Re,
						maxLength: De,
						minLength: De,
						maxProperties: Ie,
						minProperties: Ie,
						multipleOf: function(e, t, i) {
							var s, n = " ",
								o = e.level,
								r = e.dataLevel,
								a = e.schema[t],
								d = e.schemaPath + e.util.getProperty(t),
								c = e.errSchemaPath + "/" + t,
								p = !e.opts.allErrors,
								m = "data" + (r || ""),
								_ = e.opts.$data && a && a.$data;
							_ ? (n += " var schema" + o + " = " + e.util.getData(a.$data, r, e.dataPathArr) + "; ", s = "schema" + o) : s = a, n += "var division" + o + ";if (", _ && (n += " " + s + " !== undefined && ( typeof " + s + " != 'number' || "), n += " (division" + o + " = " + m + " / " + s + ", ", e.opts.multipleOfPrecision ? n += " Math.abs(Math.round(division" + o + ") - division" + o + ") > 1e-" + e.opts.multipleOfPrecision + " " : n += " division" + o + " !== parseInt(division" + o + ") ", n += " ) ", _ && (n += "  )  "), n += " ) {   ";
							var h = h || [];
							h.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: 'multipleOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { multipleOf: " + s + " } ", !1 !== e.opts.messages && (n += " , message: 'should be multiple of ", n += _ ? "' + " + s : s + "'"), e.opts.verbose && (n += " , schema:  ", n += _ ? "validate.schema" + d : "" + a, n += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ";
							var f = n;
							return n = h.pop(), !e.compositeRule && p ? e.async ? n += " throw new ValidationError([" + f + "]); " : n += " validate.errors = [" + f + "]; return false; " : n += " var err = " + f + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += "} ", p && (n += " else { "), n
						},
						not: function(e, t, i) {
							var s = " ",
								n = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								p = "data" + (o || ""),
								m = "errs__" + n,
								_ = e.util.copy(e);
							_.level++;
							var h = "valid" + _.level;
							if (e.opts.strictKeywords ? "object" == typeof r && Object.keys(r).length > 0 : e.util.schemaHasRules(r, e.RULES.all)) {
								_.schema = r, _.schemaPath = a, _.errSchemaPath = d, s += " var " + m + " = errors;  ";
								var f, l = e.compositeRule;
								e.compositeRule = _.compositeRule = !0, _.createErrors = !1, _.opts.allErrors && (f = _.opts.allErrors, _.opts.allErrors = !1), s += " " + e.validate(_) + " ", _.createErrors = !0, f && (_.opts.allErrors = f), e.compositeRule = _.compositeRule = l, s += " if (" + h + ") {   ";
								var u = u || [];
								u.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: {} ", !1 !== e.opts.messages && (s += " , message: 'should NOT be valid' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ";
								var g = s;
								s = u.pop(), !e.compositeRule && c ? e.async ? s += " throw new ValidationError([" + g + "]); " : s += " validate.errors = [" + g + "]; return false; " : s += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } else {  errors = " + m + "; if (vErrors !== null) { if (" + m + ") vErrors.length = " + m + "; else vErrors = null; } ", e.opts.allErrors && (s += " } ")
							} else s += "  var err =   ", !1 !== e.createErrors ? (s += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: {} ", !1 !== e.opts.messages && (s += " , message: 'should NOT be valid' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ", s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", c && (s += " if (false) { ");
							return s
						},
						oneOf: function(e, t, i) {
							var s = " ",
								n = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								p = "data" + (o || ""),
								m = "valid" + n,
								_ = "errs__" + n,
								h = e.util.copy(e),
								f = "";
							h.level++;
							var l = "valid" + h.level,
								u = h.baseId,
								g = "prevValid" + n,
								y = "passingSchemas" + n;
							s += "var " + _ + " = errors , " + g + " = false , " + m + " = false , " + y + " = null; ";
							var v = e.compositeRule;
							e.compositeRule = h.compositeRule = !0;
							var b = r;
							if (b)
								for (var w, j = -1, $ = b.length - 1; j < $;) w = b[j += 1], (e.opts.strictKeywords ? "object" == typeof w && Object.keys(w).length > 0 : e.util.schemaHasRules(w, e.RULES.all)) ? (h.schema = w, h.schemaPath = a + "[" + j + "]", h.errSchemaPath = d + "/" + j, s += "  " + e.validate(h) + " ", h.baseId = u) : s += " var " + l + " = true; ", j && (s += " if (" + l + " && " + g + ") { " + m + " = false; " + y + " = [" + y + ", " + j + "]; } else { ", f += "}"), s += " if (" + l + ") { " + m + " = " + g + " = true; " + y + " = " + j + "; }";
							return e.compositeRule = h.compositeRule = v, s += f + "if (!" + m + ") {   var err =   ", !1 !== e.createErrors ? (s += " { keyword: 'oneOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { passingSchemas: " + y + " } ", !1 !== e.opts.messages && (s += " , message: 'should match exactly one schema in oneOf' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ", s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && c && (e.async ? s += " throw new ValidationError(vErrors); " : s += " validate.errors = vErrors; return false; "), s += "} else {  errors = " + _ + "; if (vErrors !== null) { if (" + _ + ") vErrors.length = " + _ + "; else vErrors = null; }", e.opts.allErrors && (s += " } "), s
						},
						pattern: function(e, t, i) {
							var s, n = " ",
								o = e.level,
								r = e.dataLevel,
								a = e.schema[t],
								d = e.schemaPath + e.util.getProperty(t),
								c = e.errSchemaPath + "/" + t,
								p = !e.opts.allErrors,
								m = "data" + (r || ""),
								_ = e.opts.$data && a && a.$data;
							_ ? (n += " var schema" + o + " = " + e.util.getData(a.$data, r, e.dataPathArr) + "; ", s = "schema" + o) : s = a, n += "if ( ", _ && (n += " (" + s + " !== undefined && typeof " + s + " != 'string') || "), n += " !" + (_ ? "(new RegExp(" + s + "))" : e.usePattern(a)) + ".test(" + m + ") ) {   ";
							var h = h || [];
							h.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: 'pattern' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { pattern:  ", n += _ ? "" + s : "" + e.util.toQuotedString(a), n += "  } ", !1 !== e.opts.messages && (n += " , message: 'should match pattern \"", n += _ ? "' + " + s + " + '" : "" + e.util.escapeQuotes(a), n += "\"' "), e.opts.verbose && (n += " , schema:  ", n += _ ? "validate.schema" + d : "" + e.util.toQuotedString(a), n += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ";
							var f = n;
							return n = h.pop(), !e.compositeRule && p ? e.async ? n += " throw new ValidationError([" + f + "]); " : n += " validate.errors = [" + f + "]; return false; " : n += " var err = " + f + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += "} ", p && (n += " else { "), n
						},
						properties: function(e, t, i) {
							var s = " ",
								n = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								p = "data" + (o || ""),
								m = "errs__" + n,
								_ = e.util.copy(e),
								h = "";
							_.level++;
							var f = "valid" + _.level,
								l = "key" + n,
								u = "idx" + n,
								g = _.dataLevel = e.dataLevel + 1,
								y = "data" + g,
								v = "dataProperties" + n,
								b = Object.keys(r || {}),
								w = e.schema.patternProperties || {},
								j = Object.keys(w),
								$ = e.schema.additionalProperties,
								k = b.length || j.length,
								x = !1 === $,
								q = "object" == typeof $ && Object.keys($).length,
								P = e.opts.removeAdditional,
								E = x || q || P,
								T = e.opts.ownProperties,
								S = e.baseId,
								A = e.schema.required;
							if (A && (!e.opts.$data || !A.$data) && A.length < e.opts.loopRequired) var R = e.util.toHash(A);
							if (s += "var " + m + " = errors;var " + f + " = true;", T && (s += " var " + v + " = undefined;"), E) {
								if (s += T ? " " + v + " = " + v + " || Object.keys(" + p + "); for (var " + u + "=0; " + u + "<" + v + ".length; " + u + "++) { var " + l + " = " + v + "[" + u + "]; " : " for (var " + l + " in " + p + ") { ", k) {
									if (s += " var isAdditional" + n + " = !(false ", b.length)
										if (b.length > 8) s += " || validate.schema" + a + ".hasOwnProperty(" + l + ") ";
										else {
											var D = b;
											if (D)
												for (var I = -1, F = D.length - 1; I < F;) G = D[I += 1], s += " || " + l + " == " + e.util.toQuotedString(G) + " "
										} if (j.length) {
										var O = j;
										if (O)
											for (var C = -1, U = O.length - 1; C < U;) ne = O[C += 1], s += " || " + e.usePattern(ne) + ".test(" + l + ") "
									}
									s += " ); if (isAdditional" + n + ") { "
								}
								if ("all" == P) s += " delete " + p + "[" + l + "]; ";
								else {
									var z = e.errorPath,
										L = "' + " + l + " + '";
									if (e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(e.errorPath, l, e.opts.jsonPointers)), x)
										if (P) s += " delete " + p + "[" + l + "]; ";
										else {
											s += " " + f + " = false; ";
											var N = d;
											d = e.errSchemaPath + "/additionalProperties", (te = te || []).push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'additionalProperties' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { additionalProperty: '" + L + "' } ", !1 !== e.opts.messages && (s += " , message: '", e.opts._errorDataPathProperty ? s += "is an invalid additional property" : s += "should NOT have additional properties", s += "' "), e.opts.verbose && (s += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ";
											var M = s;
											s = te.pop(), !e.compositeRule && c ? e.async ? s += " throw new ValidationError([" + M + "]); " : s += " validate.errors = [" + M + "]; return false; " : s += " var err = " + M + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", d = N, c && (s += " break; ")
										}
									else if (q)
										if ("failing" == P) {
											s += " var " + m + " = errors;  ";
											var H = e.compositeRule;
											e.compositeRule = _.compositeRule = !0, _.schema = $, _.schemaPath = e.schemaPath + ".additionalProperties", _.errSchemaPath = e.errSchemaPath + "/additionalProperties", _.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, l, e.opts.jsonPointers);
											var B = p + "[" + l + "]";
											_.dataPathArr[g] = l;
											var W = e.validate(_);
											_.baseId = S, e.util.varOccurences(W, y) < 2 ? s += " " + e.util.varReplace(W, y, B) + " " : s += " var " + y + " = " + B + "; " + W + " ", s += " if (!" + f + ") { errors = " + m + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + p + "[" + l + "]; }  ", e.compositeRule = _.compositeRule = H
										} else {
											_.schema = $, _.schemaPath = e.schemaPath + ".additionalProperties", _.errSchemaPath = e.errSchemaPath + "/additionalProperties", _.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, l, e.opts.jsonPointers);
											B = p + "[" + l + "]";
											_.dataPathArr[g] = l;
											W = e.validate(_);
											_.baseId = S, e.util.varOccurences(W, y) < 2 ? s += " " + e.util.varReplace(W, y, B) + " " : s += " var " + y + " = " + B + "; " + W + " ", c && (s += " if (!" + f + ") break; ")
										} e.errorPath = z
								}
								k && (s += " } "), s += " }  ", c && (s += " if (" + f + ") { ", h += "}")
							}
							var V = e.opts.useDefaults && !e.compositeRule;
							if (b.length) {
								var Q = b;
								if (Q)
									for (var G, J = -1, Y = Q.length - 1; J < Y;) {
										var K = r[G = Q[J += 1]];
										if (e.opts.strictKeywords ? "object" == typeof K && Object.keys(K).length > 0 : e.util.schemaHasRules(K, e.RULES.all)) {
											var Z = e.util.getProperty(G),
												X = (B = p + Z, V && void 0 !== K.default);
											_.schema = K, _.schemaPath = a + Z, _.errSchemaPath = d + "/" + e.util.escapeFragment(G), _.errorPath = e.util.getPath(e.errorPath, G, e.opts.jsonPointers), _.dataPathArr[g] = e.util.toQuotedString(G);
											W = e.validate(_);
											if (_.baseId = S, e.util.varOccurences(W, y) < 2) {
												W = e.util.varReplace(W, y, B);
												var ee = B
											} else {
												ee = y;
												s += " var " + y + " = " + B + "; "
											}
											if (X) s += " " + W + " ";
											else {
												if (R && R[G]) {
													s += " if ( " + ee + " === undefined ", T && (s += " || ! Object.prototype.hasOwnProperty.call(" + p + ", '" + e.util.escapeQuotes(G) + "') "), s += ") { " + f + " = false; ";
													z = e.errorPath, N = d;
													var te, ie = e.util.escapeQuotes(G);
													e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(z, G, e.opts.jsonPointers)), d = e.errSchemaPath + "/required", (te = te || []).push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { missingProperty: '" + ie + "' } ", !1 !== e.opts.messages && (s += " , message: '", e.opts._errorDataPathProperty ? s += "is a required property" : s += "should have required property \\'" + ie + "\\'", s += "' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ";
													M = s;
													s = te.pop(), !e.compositeRule && c ? e.async ? s += " throw new ValidationError([" + M + "]); " : s += " validate.errors = [" + M + "]; return false; " : s += " var err = " + M + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", d = N, e.errorPath = z, s += " } else { "
												} else c ? (s += " if ( " + ee + " === undefined ", T && (s += " || ! Object.prototype.hasOwnProperty.call(" + p + ", '" + e.util.escapeQuotes(G) + "') "), s += ") { " + f + " = true; } else { ") : (s += " if (" + ee + " !== undefined ", T && (s += " &&   Object.prototype.hasOwnProperty.call(" + p + ", '" + e.util.escapeQuotes(G) + "') "), s += " ) { ");
												s += " " + W + " } "
											}
										}
										c && (s += " if (" + f + ") { ", h += "}")
									}
							}
							if (j.length) {
								var se = j;
								if (se)
									for (var ne, oe = -1, re = se.length - 1; oe < re;) {
										K = w[ne = se[oe += 1]];
										if (e.opts.strictKeywords ? "object" == typeof K && Object.keys(K).length > 0 : e.util.schemaHasRules(K, e.RULES.all)) {
											_.schema = K, _.schemaPath = e.schemaPath + ".patternProperties" + e.util.getProperty(ne), _.errSchemaPath = e.errSchemaPath + "/patternProperties/" + e.util.escapeFragment(ne), s += T ? " " + v + " = " + v + " || Object.keys(" + p + "); for (var " + u + "=0; " + u + "<" + v + ".length; " + u + "++) { var " + l + " = " + v + "[" + u + "]; " : " for (var " + l + " in " + p + ") { ", s += " if (" + e.usePattern(ne) + ".test(" + l + ")) { ", _.errorPath = e.util.getPathExpr(e.errorPath, l, e.opts.jsonPointers);
											B = p + "[" + l + "]";
											_.dataPathArr[g] = l;
											W = e.validate(_);
											_.baseId = S, e.util.varOccurences(W, y) < 2 ? s += " " + e.util.varReplace(W, y, B) + " " : s += " var " + y + " = " + B + "; " + W + " ", c && (s += " if (!" + f + ") break; "), s += " } ", c && (s += " else " + f + " = true; "), s += " }  ", c && (s += " if (" + f + ") { ", h += "}")
										}
									}
							}
							return c && (s += " " + h + " if (" + m + " == errors) {"), s = e.util.cleanUpCode(s)
						},
						propertyNames: function(e, t, i) {
							var s = " ",
								n = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								p = "data" + (o || ""),
								m = "errs__" + n,
								_ = e.util.copy(e);
							_.level++;
							var h = "valid" + _.level;
							if (s += "var " + m + " = errors;", e.opts.strictKeywords ? "object" == typeof r && Object.keys(r).length > 0 : e.util.schemaHasRules(r, e.RULES.all)) {
								_.schema = r, _.schemaPath = a, _.errSchemaPath = d;
								var f = "key" + n,
									l = "idx" + n,
									u = "i" + n,
									g = "' + " + f + " + '",
									y = "data" + (_.dataLevel = e.dataLevel + 1),
									v = "dataProperties" + n,
									b = e.opts.ownProperties,
									w = e.baseId;
								b && (s += " var " + v + " = undefined; "), s += b ? " " + v + " = " + v + " || Object.keys(" + p + "); for (var " + l + "=0; " + l + "<" + v + ".length; " + l + "++) { var " + f + " = " + v + "[" + l + "]; " : " for (var " + f + " in " + p + ") { ", s += " var startErrs" + n + " = errors; ";
								var j = f,
									$ = e.compositeRule;
								e.compositeRule = _.compositeRule = !0;
								var k = e.validate(_);
								_.baseId = w, e.util.varOccurences(k, y) < 2 ? s += " " + e.util.varReplace(k, y, j) + " " : s += " var " + y + " = " + j + "; " + k + " ", e.compositeRule = _.compositeRule = $, s += " if (!" + h + ") { for (var " + u + "=startErrs" + n + "; " + u + "<errors; " + u + "++) { vErrors[" + u + "].propertyName = " + f + "; }   var err =   ", !1 !== e.createErrors ? (s += " { keyword: 'propertyNames' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { propertyName: '" + g + "' } ", !1 !== e.opts.messages && (s += " , message: 'property name \\'" + g + "\\' is invalid' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ", s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && c && (e.async ? s += " throw new ValidationError(vErrors); " : s += " validate.errors = vErrors; return false; "), c && (s += " break; "), s += " } }"
							}
							return c && (s += "  if (" + m + " == errors) {"), s = e.util.cleanUpCode(s)
						},
						required: function(e, t, i) {
							var s = " ",
								n = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								p = "data" + (o || ""),
								m = "valid" + n,
								_ = e.opts.$data && r && r.$data;
							_ && (s += " var schema" + n + " = " + e.util.getData(r.$data, o, e.dataPathArr) + "; ");
							var h = "schema" + n;
							if (!_)
								if (r.length < e.opts.loopRequired && e.schema.properties && Object.keys(e.schema.properties).length) {
									var f = [],
										l = r;
									if (l)
										for (var u, g = -1, y = l.length - 1; g < y;) {
											u = l[g += 1];
											var v = e.schema.properties[u];
											v && (e.opts.strictKeywords ? "object" == typeof v && Object.keys(v).length > 0 : e.util.schemaHasRules(v, e.RULES.all)) || (f[f.length] = u)
										}
								} else f = r;
							if (_ || f.length) {
								var b = e.errorPath,
									w = _ || f.length >= e.opts.loopRequired,
									j = e.opts.ownProperties;
								if (c)
									if (s += " var missing" + n + "; ", w) {
										_ || (s += " var " + h + " = validate.schema" + a + "; ");
										var $ = "' + " + (T = "schema" + n + "[" + (q = "i" + n) + "]") + " + '";
										e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(b, T, e.opts.jsonPointers)), s += " var " + m + " = true; ", _ && (s += " if (schema" + n + " === undefined) " + m + " = true; else if (!Array.isArray(schema" + n + ")) " + m + " = false; else {"), s += " for (var " + q + " = 0; " + q + " < " + h + ".length; " + q + "++) { " + m + " = " + p + "[" + h + "[" + q + "]] !== undefined ", j && (s += " &&   Object.prototype.hasOwnProperty.call(" + p + ", " + h + "[" + q + "]) "), s += "; if (!" + m + ") break; } ", _ && (s += "  }  "), s += "  if (!" + m + ") {   ", (E = E || []).push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { missingProperty: '" + $ + "' } ", !1 !== e.opts.messages && (s += " , message: '", e.opts._errorDataPathProperty ? s += "is a required property" : s += "should have required property \\'" + $ + "\\'", s += "' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ";
										var k = s;
										s = E.pop(), !e.compositeRule && c ? e.async ? s += " throw new ValidationError([" + k + "]); " : s += " validate.errors = [" + k + "]; return false; " : s += " var err = " + k + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } else { "
									} else {
										s += " if ( ";
										var x = f;
										if (x)
											for (var q = -1, P = x.length - 1; q < P;) {
												A = x[q += 1], q && (s += " || "), s += " ( ( " + (F = p + (I = e.util.getProperty(A))) + " === undefined ", j && (s += " || ! Object.prototype.hasOwnProperty.call(" + p + ", '" + e.util.escapeQuotes(A) + "') "), s += ") && (missing" + n + " = " + e.util.toQuotedString(e.opts.jsonPointers ? A : I) + ") ) "
											}
										s += ") {  ";
										var E;
										$ = "' + " + (T = "missing" + n) + " + '";
										e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(b, T, !0) : b + " + " + T), (E = E || []).push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { missingProperty: '" + $ + "' } ", !1 !== e.opts.messages && (s += " , message: '", e.opts._errorDataPathProperty ? s += "is a required property" : s += "should have required property \\'" + $ + "\\'", s += "' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ";
										k = s;
										s = E.pop(), !e.compositeRule && c ? e.async ? s += " throw new ValidationError([" + k + "]); " : s += " validate.errors = [" + k + "]; return false; " : s += " var err = " + k + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } else { "
									}
								else if (w) {
									_ || (s += " var " + h + " = validate.schema" + a + "; ");
									var T;
									$ = "' + " + (T = "schema" + n + "[" + (q = "i" + n) + "]") + " + '";
									e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(b, T, e.opts.jsonPointers)), _ && (s += " if (" + h + " && !Array.isArray(" + h + ")) {  var err =   ", !1 !== e.createErrors ? (s += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { missingProperty: '" + $ + "' } ", !1 !== e.opts.messages && (s += " , message: '", e.opts._errorDataPathProperty ? s += "is a required property" : s += "should have required property \\'" + $ + "\\'", s += "' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ", s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (" + h + " !== undefined) { "), s += " for (var " + q + " = 0; " + q + " < " + h + ".length; " + q + "++) { if (" + p + "[" + h + "[" + q + "]] === undefined ", j && (s += " || ! Object.prototype.hasOwnProperty.call(" + p + ", " + h + "[" + q + "]) "), s += ") {  var err =   ", !1 !== e.createErrors ? (s += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { missingProperty: '" + $ + "' } ", !1 !== e.opts.messages && (s += " , message: '", e.opts._errorDataPathProperty ? s += "is a required property" : s += "should have required property \\'" + $ + "\\'", s += "' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ", s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", _ && (s += "  }  ")
								} else {
									var S = f;
									if (S)
										for (var A, R = -1, D = S.length - 1; R < D;) {
											A = S[R += 1];
											var I = e.util.getProperty(A),
												F = ($ = e.util.escapeQuotes(A), p + I);
											e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(b, A, e.opts.jsonPointers)), s += " if ( " + F + " === undefined ", j && (s += " || ! Object.prototype.hasOwnProperty.call(" + p + ", '" + e.util.escapeQuotes(A) + "') "), s += ") {  var err =   ", !1 !== e.createErrors ? (s += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { missingProperty: '" + $ + "' } ", !1 !== e.opts.messages && (s += " , message: '", e.opts._errorDataPathProperty ? s += "is a required property" : s += "should have required property \\'" + $ + "\\'", s += "' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ", s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "
										}
								}
								e.errorPath = b
							} else c && (s += " if (true) {");
							return s
						},
						uniqueItems: function(e, t, i) {
							var s, n = " ",
								o = e.level,
								r = e.dataLevel,
								a = e.schema[t],
								d = e.schemaPath + e.util.getProperty(t),
								c = e.errSchemaPath + "/" + t,
								p = !e.opts.allErrors,
								m = "data" + (r || ""),
								_ = "valid" + o,
								h = e.opts.$data && a && a.$data;
							if (h ? (n += " var schema" + o + " = " + e.util.getData(a.$data, r, e.dataPathArr) + "; ", s = "schema" + o) : s = a, (a || h) && !1 !== e.opts.uniqueItems) {
								h && (n += " var " + _ + "; if (" + s + " === false || " + s + " === undefined) " + _ + " = true; else if (typeof " + s + " != 'boolean') " + _ + " = false; else { "), n += " var i = " + m + ".length , " + _ + " = true , j; if (i > 1) { ";
								var f = e.schema.items && e.schema.items.type,
									l = Array.isArray(f);
								if (!f || "object" == f || "array" == f || l && (f.indexOf("object") >= 0 || f.indexOf("array") >= 0)) n += " outer: for (;i--;) { for (j = i; j--;) { if (equal(" + m + "[i], " + m + "[j])) { " + _ + " = false; break outer; } } } ";
								else {
									n += " var itemIndices = {}, item; for (;i--;) { var item = " + m + "[i]; ";
									var u = "checkDataType" + (l ? "s" : "");
									n += " if (" + e.util[u](f, "item", !0) + ") continue; ", l && (n += " if (typeof item == 'string') item = '\"' + item; "), n += " if (typeof itemIndices[item] == 'number') { " + _ + " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } "
								}
								n += " } ", h && (n += "  }  "), n += " if (!" + _ + ") {   ";
								var g = g || [];
								g.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: 'uniqueItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { i: i, j: j } ", !1 !== e.opts.messages && (n += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), e.opts.verbose && (n += " , schema:  ", n += h ? "validate.schema" + d : "" + a, n += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ";
								var y = n;
								n = g.pop(), !e.compositeRule && p ? e.async ? n += " throw new ValidationError([" + y + "]); " : n += " validate.errors = [" + y + "]; return false; " : n += " var err = " + y + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += " } ", p && (n += " else { ")
							} else p && (n += " if (true) { ");
							return n
						},
						validate: X
					},
					Oe = d.toHash,
					Ce = function() {
						var e = [{
								type: "number",
								rules: [{
									maximum: ["exclusiveMaximum"]
								}, {
									minimum: ["exclusiveMinimum"]
								}, "multipleOf", "format"]
							}, {
								type: "string",
								rules: ["maxLength", "minLength", "pattern", "format"]
							}, {
								type: "array",
								rules: ["maxItems", "minItems", "items", "contains", "uniqueItems"]
							}, {
								type: "object",
								rules: ["maxProperties", "minProperties", "required", "dependencies", "propertyNames", {
									properties: ["additionalProperties", "patternProperties"]
								}]
							}, {
								rules: ["$ref", "const", "enum", "not", "anyOf", "oneOf", "allOf", "if"]
							}],
							t = ["type", "$comment"];
						return e.all = Oe(t), e.types = Oe(["number", "integer", "string", "array", "object", "boolean", "null"]), e.forEach((function(i) {
							i.rules = i.rules.map((function(i) {
								var s;
								if ("object" == typeof i) {
									var n = Object.keys(i)[0];
									s = i[n], i = n, s.forEach((function(i) {
										t.push(i), e.all[i] = !0
									}))
								}
								return t.push(i), e.all[i] = {
									keyword: i,
									code: Fe[i],
									implements: s
								}
							})), e.all.$comment = {
								keyword: "$comment",
								code: Fe.$comment
							}, i.type && (e.types[i.type] = i)
						})), e.keywords = Oe(t.concat(["$schema", "$id", "id", "$data", "$async", "title", "description", "default", "definitions", "examples", "readOnly", "writeOnly", "contentMediaType", "contentEncoding", "additionalItems", "then", "else"])), e.custom = {}, e
					},
					Ue = ["multipleOf", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "additionalItems", "maxItems", "minItems", "uniqueItems", "maxProperties", "minProperties", "required", "additionalProperties", "enum", "format", "const"],
					ze = function(e, t) {
						for (var i = 0; i < t.length; i++) {
							e = JSON.parse(JSON.stringify(e));
							var s, n = t[i].split("/"),
								o = e;
							for (s = 1; s < n.length; s++) o = o[n[s]];
							for (s = 0; s < Ue.length; s++) {
								var r = Ue[s],
									a = o[r];
								a && (o[r] = {
									anyOf: [a, {
										$ref: "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#"
									}]
								})
							}
						}
						return e
					},
					Le = J.MissingRef,
					Ne = function e(t, i, s) {
						var n = this;
						if ("function" != typeof this._opts.loadSchema) throw new Error("options.loadSchema should be a function");
						"function" == typeof i && (s = i, i = void 0);
						var o = r(t).then((function() {
							var e = n._addSchema(t, void 0, i);
							return e.validate || function e(t) {
								try {
									return n._compile(t)
								} catch (s) {
									if (s instanceof Le) return function(s) {
										var o = s.missingSchema;
										if (c(o)) throw new Error("Schema " + o + " is loaded but " + s.missingRef + " cannot be resolved");
										var a = n._loadingSchemas[o];
										a || (a = n._loadingSchemas[o] = n._opts.loadSchema(o)).then(d, d);
										return a.then((function(e) {
											if (!c(o)) return r(e).then((function() {
												c(o) || n.addSchema(e, o, void 0, i)
											}))
										})).then((function() {
											return e(t)
										}));

										function d() {
											delete n._loadingSchemas[o]
										}

										function c(e) {
											return n._refs[e] || n._schemas[e]
										}
									}(s);
									throw s
								}
							}(e)
						}));
						s && o.then((function(e) {
							s(null, e)
						}), s);
						return o;

						function r(t) {
							var i = t.$schema;
							return i && !n.getSchema(i) ? e.call(n, {
								$ref: i
							}, !0) : Promise.resolve()
						}
					};
				var Me = function(e, t, i) {
						var s, n, o = " ",
							r = e.level,
							a = e.dataLevel,
							d = e.schema[t],
							c = e.schemaPath + e.util.getProperty(t),
							p = e.errSchemaPath + "/" + t,
							m = !e.opts.allErrors,
							_ = "data" + (a || ""),
							h = "valid" + r,
							f = "errs__" + r,
							l = e.opts.$data && d && d.$data;
						l ? (o += " var schema" + r + " = " + e.util.getData(d.$data, a, e.dataPathArr) + "; ", n = "schema" + r) : n = d;
						var u, g, y, v, b, w = "definition" + r,
							j = this.definition,
							$ = "";
						if (l && j.$data) {
							b = "keywordValidate" + r;
							var k = j.validateSchema;
							o += " var " + w + " = RULES.custom['" + t + "'].definition; var " + b + " = " + w + ".validate;"
						} else {
							if (!(v = e.useCustomRule(this, d, e.schema, e))) return;
							n = "validate.schema" + c, b = v.code, u = j.compile, g = j.inline, y = j.macro
						}
						var x = b + ".errors",
							q = "i" + r,
							P = "ruleErr" + r,
							E = j.async;
						if (E && !e.async) throw new Error("async keyword in sync schema");
						if (g || y || (o += x + " = null;"), o += "var " + f + " = errors;var " + h + ";", l && j.$data && ($ += "}", o += " if (" + n + " === undefined) { " + h + " = true; } else { ", k && ($ += "}", o += " " + h + " = " + w + ".validateSchema(" + n + "); if (" + h + ") { ")), g) j.statements ? o += " " + v.validate + " " : o += " " + h + " = " + v.validate + "; ";
						else if (y) {
							var T = e.util.copy(e);
							$ = "";
							T.level++;
							var S = "valid" + T.level;
							T.schema = v.validate, T.schemaPath = "";
							var A = e.compositeRule;
							e.compositeRule = T.compositeRule = !0;
							var R = e.validate(T).replace(/validate\.schema/g, b);
							e.compositeRule = T.compositeRule = A, o += " " + R
						} else {
							(O = O || []).push(o), o = "", o += "  " + b + ".call( ", e.opts.passContext ? o += "this" : o += "self", u || !1 === j.schema ? o += " , " + _ + " " : o += " , " + n + " , " + _ + " , validate.schema" + e.schemaPath + " ", o += " , (dataPath || '')", '""' != e.errorPath && (o += " + " + e.errorPath);
							var D = a ? "data" + (a - 1 || "") : "parentData",
								I = a ? e.dataPathArr[a] : "parentDataProperty",
								F = o += " , " + D + " , " + I + " , rootData )  ";
							o = O.pop(), !1 === j.errors ? (o += " " + h + " = ", E && (o += "await "), o += F + "; ") : o += E ? " var " + (x = "customErrors" + r) + " = null; try { " + h + " = await " + F + "; } catch (e) { " + h + " = false; if (e instanceof ValidationError) " + x + " = e.errors; else throw e; } " : " " + x + " = null; " + h + " = " + F + "; "
						}
						if (j.modifying && (o += " if (" + D + ") " + _ + " = " + D + "[" + I + "];"), o += "" + $, j.valid) m && (o += " if (true) { ");
						else {
							var O;
							o += " if ( ", void 0 === j.valid ? (o += " !", o += y ? "" + S : "" + h) : o += " " + !j.valid + " ", o += ") { ", s = this.keyword, (O = O || []).push(o), o = "", (O = O || []).push(o), o = "", !1 !== e.createErrors ? (o += " { keyword: '" + (s || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(p) + " , params: { keyword: '" + this.keyword + "' } ", !1 !== e.opts.messages && (o += " , message: 'should pass \"" + this.keyword + "\" keyword validation' "), e.opts.verbose && (o += " , schema: validate.schema" + c + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " "), o += " } ") : o += " {} ";
							var C = o;
							o = O.pop(), !e.compositeRule && m ? e.async ? o += " throw new ValidationError([" + C + "]); " : o += " validate.errors = [" + C + "]; return false; " : o += " var err = " + C + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
							var U = o;
							o = O.pop(), g ? j.errors ? "full" != j.errors && (o += "  for (var " + q + "=" + f + "; " + q + "<errors; " + q + "++) { var " + P + " = vErrors[" + q + "]; if (" + P + ".dataPath === undefined) " + P + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + P + ".schemaPath === undefined) { " + P + '.schemaPath = "' + p + '"; } ', e.opts.verbose && (o += " " + P + ".schema = " + n + "; " + P + ".data = " + _ + "; "), o += " } ") : !1 === j.errors ? o += " " + U + " " : (o += " if (" + f + " == errors) { " + U + " } else {  for (var " + q + "=" + f + "; " + q + "<errors; " + q + "++) { var " + P + " = vErrors[" + q + "]; if (" + P + ".dataPath === undefined) " + P + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + P + ".schemaPath === undefined) { " + P + '.schemaPath = "' + p + '"; } ', e.opts.verbose && (o += " " + P + ".schema = " + n + "; " + P + ".data = " + _ + "; "), o += " } } ") : y ? (o += "   var err =   ", !1 !== e.createErrors ? (o += " { keyword: '" + (s || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(p) + " , params: { keyword: '" + this.keyword + "' } ", !1 !== e.opts.messages && (o += " , message: 'should pass \"" + this.keyword + "\" keyword validation' "), e.opts.verbose && (o += " , schema: validate.schema" + c + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " "), o += " } ") : o += " {} ", o += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && m && (e.async ? o += " throw new ValidationError(vErrors); " : o += " validate.errors = vErrors; return false; ")) : !1 === j.errors ? o += " " + U + " " : (o += " if (Array.isArray(" + x + ")) { if (vErrors === null) vErrors = " + x + "; else vErrors = vErrors.concat(" + x + "); errors = vErrors.length;  for (var " + q + "=" + f + "; " + q + "<errors; " + q + "++) { var " + P + " = vErrors[" + q + "]; if (" + P + ".dataPath === undefined) " + P + ".dataPath = (dataPath || '') + " + e.errorPath + ";  " + P + '.schemaPath = "' + p + '";  ', e.opts.verbose && (o += " " + P + ".schema = " + n + "; " + P + ".data = " + _ + "; "), o += " } } else { " + U + " } "), o += " } ", m && (o += " else { ")
						}
						return o
					},
					He = "http://json-schema.org/draft-07/schema#",
					Be = "http://json-schema.org/draft-07/schema#",
					We = "Core schema meta-schema",
					Ve = {
						schemaArray: {
							type: "array",
							minItems: 1,
							items: {
								$ref: "#"
							}
						},
						nonNegativeInteger: {
							type: "integer",
							minimum: 0
						},
						nonNegativeIntegerDefault0: {
							allOf: [{
								$ref: "#/definitions/nonNegativeInteger"
							}, {
								default: 0
							}]
						},
						simpleTypes: {
							enum: ["array", "boolean", "integer", "null", "number", "object", "string"]
						},
						stringArray: {
							type: "array",
							items: {
								type: "string"
							},
							uniqueItems: !0,
							default: []
						}
					},
					Qe = ["object", "boolean"],
					Ge = {
						$id: {
							type: "string",
							format: "uri-reference"
						},
						$schema: {
							type: "string",
							format: "uri"
						},
						$ref: {
							type: "string",
							format: "uri-reference"
						},
						$comment: {
							type: "string"
						},
						title: {
							type: "string"
						},
						description: {
							type: "string"
						},
						default: !0,
						readOnly: {
							type: "boolean",
							default: !1
						},
						examples: {
							type: "array",
							items: !0
						},
						multipleOf: {
							type: "number",
							exclusiveMinimum: 0
						},
						maximum: {
							type: "number"
						},
						exclusiveMaximum: {
							type: "number"
						},
						minimum: {
							type: "number"
						},
						exclusiveMinimum: {
							type: "number"
						},
						maxLength: {
							$ref: "#/definitions/nonNegativeInteger"
						},
						minLength: {
							$ref: "#/definitions/nonNegativeIntegerDefault0"
						},
						pattern: {
							type: "string",
							format: "regex"
						},
						additionalItems: {
							$ref: "#"
						},
						items: {
							anyOf: [{
								$ref: "#"
							}, {
								$ref: "#/definitions/schemaArray"
							}],
							default: !0
						},
						maxItems: {
							$ref: "#/definitions/nonNegativeInteger"
						},
						minItems: {
							$ref: "#/definitions/nonNegativeIntegerDefault0"
						},
						uniqueItems: {
							type: "boolean",
							default: !1
						},
						contains: {
							$ref: "#"
						},
						maxProperties: {
							$ref: "#/definitions/nonNegativeInteger"
						},
						minProperties: {
							$ref: "#/definitions/nonNegativeIntegerDefault0"
						},
						required: {
							$ref: "#/definitions/stringArray"
						},
						additionalProperties: {
							$ref: "#"
						},
						definitions: {
							type: "object",
							additionalProperties: {
								$ref: "#"
							},
							default: {}
						},
						properties: {
							type: "object",
							additionalProperties: {
								$ref: "#"
							},
							default: {}
						},
						patternProperties: {
							type: "object",
							additionalProperties: {
								$ref: "#"
							},
							propertyNames: {
								format: "regex"
							},
							default: {}
						},
						dependencies: {
							type: "object",
							additionalProperties: {
								anyOf: [{
									$ref: "#"
								}, {
									$ref: "#/definitions/stringArray"
								}]
							}
						},
						propertyNames: {
							$ref: "#"
						},
						const: !0,
						enum: {
							type: "array",
							items: !0,
							minItems: 1,
							uniqueItems: !0
						},
						type: {
							anyOf: [{
								$ref: "#/definitions/simpleTypes"
							}, {
								type: "array",
								items: {
									$ref: "#/definitions/simpleTypes"
								},
								minItems: 1,
								uniqueItems: !0
							}]
						},
						format: {
							type: "string"
						},
						contentMediaType: {
							type: "string"
						},
						contentEncoding: {
							type: "string"
						},
						if: {
							$ref: "#"
						},
						then: {
							$ref: "#"
						},
						else: {
							$ref: "#"
						},
						allOf: {
							$ref: "#/definitions/schemaArray"
						},
						anyOf: {
							$ref: "#/definitions/schemaArray"
						},
						oneOf: {
							$ref: "#/definitions/schemaArray"
						},
						not: {
							$ref: "#"
						}
					},
					Je = {
						$schema: He,
						$id: Be,
						title: We,
						definitions: Ve,
						type: Qe,
						properties: Ge,
						default: !0
					},
					Ye = n(Object.freeze({
						__proto__: null,
						$schema: He,
						$id: Be,
						title: We,
						definitions: Ve,
						type: Qe,
						properties: Ge,
						default: Je
					})),
					Ke = {
						$id: "https://github.com/epoberezkin/ajv/blob/master/lib/definition_schema.js",
						definitions: {
							simpleTypes: Ye.definitions.simpleTypes
						},
						type: "object",
						dependencies: {
							schema: ["validate"],
							$data: ["validate"],
							statements: ["inline"],
							valid: {
								not: {
									required: ["macro"]
								}
							}
						},
						properties: {
							type: Ye.properties.type,
							schema: {
								type: "boolean"
							},
							statements: {
								type: "boolean"
							},
							dependencies: {
								type: "array",
								items: {
									type: "string"
								}
							},
							metaSchema: {
								type: "object"
							},
							modifying: {
								type: "boolean"
							},
							valid: {
								type: "boolean"
							},
							$data: {
								type: "boolean"
							},
							async: {
								type: "boolean"
							},
							errors: {
								anyOf: [{
									type: "boolean"
								}, {
									const: "full"
								}]
							}
						}
					},
					Ze = /^[a-z_$][a-z0-9_$-]*$/i,
					Xe = function(e, t) {
						var i = this.RULES;
						if (i.keywords[e]) throw new Error("Keyword " + e + " is already defined");
						if (!Ze.test(e)) throw new Error("Keyword " + e + " is not a valid identifier");
						if (t) {
							this.validateKeyword(t, !0);
							var s = t.type;
							if (Array.isArray(s))
								for (var n = 0; n < s.length; n++) r(e, s[n], t);
							else r(e, s, t);
							var o = t.metaSchema;
							o && (t.$data && this._opts.$data && (o = {
								anyOf: [o, {
									$ref: "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#"
								}]
							}), t.validateSchema = this.compile(o, !0))
						}

						function r(e, t, s) {
							for (var n, o = 0; o < i.length; o++) {
								var r = i[o];
								if (r.type == t) {
									n = r;
									break
								}
							}
							n || (n = {
								type: t,
								rules: []
							}, i.push(n));
							var a = {
								keyword: e,
								definition: s,
								custom: !0,
								code: Me,
								implements: s.implements
							};
							n.rules.push(a), i.custom[e] = a
						}
						return i.keywords[e] = i.all[e] = !0, this
					},
					et = function(e) {
						var t = this.RULES.custom[e];
						return t ? t.definition : this.RULES.keywords[e] || !1
					},
					tt = function(e) {
						var t = this.RULES;
						delete t.keywords[e], delete t.all[e], delete t.custom[e];
						for (var i = 0; i < t.length; i++)
							for (var s = t[i].rules, n = 0; n < s.length; n++)
								if (s[n].keyword == e) {
									s.splice(n, 1);
									break
								} return this
					},
					it = function e(t, i) {
						e.errors = null;
						var s = this._validateKeyword = this._validateKeyword || this.compile(Ke, !0);
						if (s(t)) return !0;
						e.errors = s.errors;
						if (i) throw new Error("custom keyword definition is invalid: " + this.errorsText(s.errors));
						return !1
					};
				var st = "http://json-schema.org/draft-07/schema#",
					nt = "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#",
					ot = "Meta-schema for $data reference (JSON Schema extension proposal)",
					rt = ["$data"],
					at = {
						$data: {
							type: "string",
							anyOf: [{
								format: "relative-json-pointer"
							}, {
								format: "json-pointer"
							}]
						}
					},
					dt = {
						$schema: st,
						$id: nt,
						description: ot,
						type: "object",
						required: rt,
						properties: at,
						additionalProperties: !1
					},
					ct = n(Object.freeze({
						__proto__: null,
						$schema: st,
						$id: nt,
						description: ot,
						type: "object",
						required: rt,
						properties: at,
						additionalProperties: !1,
						default: dt
					})),
					pt = ft;
				ft.prototype.validate = function(e, t) {
					var i;
					if ("string" == typeof e) {
						if (!(i = this.getSchema(e))) throw new Error('no schema with key or ref "' + e + '"')
					} else {
						var s = this._addSchema(e);
						i = s.validate || this._compile(s)
					}
					var n = i(t);
					!0 !== i.$async && (this.errors = i.errors);
					return n
				}, ft.prototype.compile = function(e, t) {
					var i = this._addSchema(e, void 0, t);
					return i.validate || this._compile(i)
				}, ft.prototype.addSchema = function(e, t, i, s) {
					if (Array.isArray(e)) {
						for (var n = 0; n < e.length; n++) this.addSchema(e[n], void 0, i, s);
						return this
					}
					var o = this._getId(e);
					if (void 0 !== o && "string" != typeof o) throw new Error("schema id must be string");
					return bt(this, t = O.normalizeId(t || o)), this._schemas[t] = this._addSchema(e, i, s, !0), this
				}, ft.prototype.addMetaSchema = function(e, t, i) {
					return this.addSchema(e, t, i, !0), this
				}, ft.prototype.validateSchema = function(e, t) {
					var i = e.$schema;
					if (void 0 !== i && "string" != typeof i) throw new Error("$schema must be a string");
					if (!(i = i || this._opts.defaultMeta || function(e) {
							var t = e._opts.meta;
							return e._opts.defaultMeta = "object" == typeof t ? e._getId(t) || t : e.getSchema(mt) ? mt : void 0, e._opts.defaultMeta
						}(this))) return this.logger.warn("meta-schema not available"), this.errors = null, !0;
					var s = this.validate(i, e);
					if (!s && t) {
						var n = "schema is invalid: " + this.errorsText();
						if ("log" != this._opts.validateSchema) throw new Error(n);
						this.logger.error(n)
					}
					return s
				}, ft.prototype.getSchema = function(e) {
					var t = lt(this, e);
					switch (typeof t) {
						case "object":
							return t.validate || this._compile(t);
						case "string":
							return this.getSchema(t);
						case "undefined":
							return function(e, t) {
								var i = O.schema.call(e, {
									schema: {}
								}, t);
								if (i) {
									var s = i.schema,
										n = i.root,
										o = i.baseId,
										r = ie.call(e, s, n, void 0, o);
									return e._fragments[t] = new I({
										ref: t,
										fragment: !0,
										schema: s,
										root: n,
										baseId: o,
										validate: r
									}), r
								}
							}(this, e)
					}
				}, ft.prototype.removeSchema = function(e) {
					if (e instanceof RegExp) return ut(this, this._schemas, e), ut(this, this._refs, e), this;
					switch (typeof e) {
						case "undefined":
							return ut(this, this._schemas), ut(this, this._refs), this._cache.clear(), this;
						case "string":
							var t = lt(this, e);
							return t && this._cache.del(t.cacheKey), delete this._schemas[e], delete this._refs[e], this;
						case "object":
							var i = this._opts.serialize,
								s = i ? i(e) : e;
							this._cache.del(s);
							var n = this._getId(e);
							n && (n = O.normalizeId(n), delete this._schemas[n], delete this._refs[n])
					}
					return this
				}, ft.prototype.addFormat = function(e, t) {
					"string" == typeof t && (t = new RegExp(t));
					return this._formats[e] = t, this
				}, ft.prototype.errorsText = function(e, t) {
					if (!(e = e || this.errors)) return "No errors";
					for (var i = void 0 === (t = t || {}).separator ? ", " : t.separator, s = void 0 === t.dataVar ? "data" : t.dataVar, n = "", o = 0; o < e.length; o++) {
						var r = e[o];
						r && (n += s + r.dataPath + " " + r.message + i)
					}
					return n.slice(0, -i.length)
				}, ft.prototype._addSchema = function(e, t, i, s) {
					if ("object" != typeof e && "boolean" != typeof e) throw new Error("schema should be object or boolean");
					var n = this._opts.serialize,
						o = n ? n(e) : e,
						r = this._cache.get(o);
					if (r) return r;
					s = s || !1 !== this._opts.addUsedSchema;
					var a = O.normalizeId(this._getId(e));
					a && s && bt(this, a);
					var d, c = !1 !== this._opts.validateSchema && !t;
					c && !(d = a && a == O.normalizeId(e.$schema)) && this.validateSchema(e, !0);
					var p = O.ids.call(this, e),
						m = new I({
							id: a,
							schema: e,
							localRefs: p,
							cacheKey: o,
							meta: i
						});
					"#" != a[0] && s && (this._refs[a] = m);
					this._cache.put(o, m), c && d && this.validateSchema(e, !0);
					return m
				}, ft.prototype._compile = function(e, t) {
					if (e.compiling) return e.validate = n, n.schema = e.schema, n.errors = null, n.root = t || n, !0 === e.schema.$async && (n.$async = !0), n;
					var i, s;
					e.compiling = !0, e.meta && (i = this._opts, this._opts = this._metaOpts);
					try {
						s = ie.call(this, e.schema, t, e.localRefs)
					} catch (o) {
						throw delete e.validate, o
					} finally {
						e.compiling = !1, e.meta && (this._opts = i)
					}
					return e.validate = s, e.refs = s.refs, e.refVal = s.refVal, e.root = s.root, s;

					function n() {
						var t = e.validate,
							i = t.apply(this, arguments);
						return n.errors = t.errors, i
					}
				}, ft.prototype.compileAsync = Ne, ft.prototype.addKeyword = Xe, ft.prototype.getKeyword = et, ft.prototype.removeKeyword = tt, ft.prototype.validateKeyword = it, ft.ValidationError = J.Validation, ft.MissingRefError = J.MissingRef, ft.$dataMetaSchema = ze;
				var mt = "http://json-schema.org/draft-07/schema",
					_t = ["removeAdditional", "useDefaults", "coerceTypes", "strictDefaults"],
					ht = ["/properties"];

				function ft(e) {
					if (!(this instanceof ft)) return new ft(e);
					e = this._opts = d.copy(e) || {},
						function(e) {
							var t = e._opts.logger;
							if (!1 === t) e.logger = {
								log: wt,
								warn: wt,
								error: wt
							};
							else {
								if (void 0 === t && (t = console), !("object" == typeof t && t.log && t.warn && t.error)) throw new Error("logger must implement log, warn and error methods");
								e.logger = t
							}
						}(this), this._schemas = {}, this._refs = {}, this._fragments = {}, this._formats = $e(e.format), this._cache = e.cache || new me, this._loadingSchemas = {}, this._compilations = [], this.RULES = Ce(), this._getId = function(e) {
							switch (e.schemaId) {
								case "auto":
									return vt;
								case "id":
									return gt;
								default:
									return yt
							}
						}(e), e.loopRequired = e.loopRequired || 1 / 0, "property" == e.errorDataPath && (e._errorDataPathProperty = !0), void 0 === e.serialize && (e.serialize = Z), this._metaOpts = function(e) {
							for (var t = d.copy(e._opts), i = 0; i < _t.length; i++) delete t[_t[i]];
							return t
						}(this), e.formats && function(e) {
							for (var t in e._opts.formats) {
								var i = e._opts.formats[t];
								e.addFormat(t, i)
							}
						}(this), e.keywords && function(e) {
							for (var t in e._opts.keywords) {
								var i = e._opts.keywords[t];
								e.addKeyword(t, i)
							}
						}(this),
						function(e) {
							var t;
							e._opts.$data && (t = ct, e.addMetaSchema(t, t.$id, !0));
							if (!1 === e._opts.meta) return;
							var i = Ye;
							e._opts.$data && (i = ze(i, ht));
							e.addMetaSchema(i, mt, !0), e._refs["http://json-schema.org/schema"] = mt
						}(this), "object" == typeof e.meta && this.addMetaSchema(e.meta), e.nullable && this.addKeyword("nullable", {
							metaSchema: {
								type: "boolean"
							}
						}),
						function(e) {
							var t = e._opts.schemas;
							if (!t) return;
							if (Array.isArray(t)) e.addSchema(t);
							else
								for (var i in t) e.addSchema(t[i], i)
						}(this)
				}

				function lt(e, t) {
					return t = O.normalizeId(t), e._schemas[t] || e._refs[t] || e._fragments[t]
				}

				function ut(e, t, i) {
					for (var s in t) {
						var n = t[s];
						n.meta || i && !i.test(s) || (e._cache.del(n.cacheKey), delete t[s])
					}
				}

				function gt(e) {
					return e.$id && this.logger.warn("schema $id ignored", e.$id), e.id
				}

				function yt(e) {
					return e.id && this.logger.warn("schema id ignored", e.id), e.$id
				}

				function vt(e) {
					if (e.$id && e.id && e.$id != e.id) throw new Error("schema $id is different from id");
					return e.$id || e.id
				}

				function bt(e, t) {
					if (e._schemas[t] || e._refs[t]) throw new Error('schema with key or id "' + t + '" already exists')
				}

				function wt() {}
				class jt {
					constructor(e) {
						this.ajv = new pt;
						for (const t of e) this.ajv.addSchema(t)
					}
					validate(e, t) {
						const i = this.ajv.validate(e, t),
							s = this.ajv.errorsText();
						if (!i) throw new Error(s)
					}
					getSchema(e) {
						const t = this.ajv.getSchema(e);
						if (null == t) throw new Error(`No schema exists for ${e}`);
						return t.schema
					}
				}

				function $t(e) {
					var t = {};
					return function e(t, i, s) {
						for (var n in t)
							if (Object.prototype.hasOwnProperty.call(t, n)) {
								var o;
								o = null == s ? n : s + "_" + n;
								var r = t[n];
								"object" == typeof r ? e(r, i, o) : i[o] = r
							}
					}(e, t, null), t
				}
			}).call(this, i("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@reddit/event-schema-registry/dist/esm/index.js": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return _i
			}));
			var s = {
					firing_logic: "Fires when bulk messenger job finishes execution",
					$id: "http://com.reddit/schemas/event_schemas/admin_tool__bulk_message__subreddit.json",
					properties: {
						source: {
							const: "admin_tool"
						},
						action: {
							const: "bulk_message"
						},
						noun: {
							const: "subreddit"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/19sAyx-9pc8aqyL_f_Z7EyfN-_zfGZb7wjH4fmnBA7UA/edit#"],
					owner: "anti-evil-eng@reddit.com",
					required: ["add_admin_note", "subject", "recipient_count", "sender_id", "give_coins", "distinguished", "message_type", "message_body", "add_to_sent_box", "repliable", "recipient_type", "admin_note"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				n = {
					firing_logic: "Fires when bulk messenger job finishes execution",
					$id: "http://com.reddit/schemas/event_schemas/admin_tool__bulk_message__user.json",
					properties: {
						source: {
							const: "admin_tool"
						},
						action: {
							const: "bulk_message"
						},
						noun: {
							const: "user"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/19sAyx-9pc8aqyL_f_Z7EyfN-_zfGZb7wjH4fmnBA7UA/edit#"],
					owner: "anti-evil-eng@reddit.com",
					required: ["add_admin_note", "subject", "recipient_count", "sender_id", "give_coins", "distinguished", "message_type", "message_body", "add_to_sent_box", "repliable", "recipient_type", "admin_note"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				o = {
					firing_logic: "Fired when an individual message tile is displayed (if the user scrolls through the carousel, fires once for each message the user sees)",
					$id: "http://com.reddit/schemas/event_schemas/announcement__view__announcement.json",
					properties: {
						source: {
							const: "announcement"
						},
						action: {
							const: "view"
						},
						noun: {
							const: "announcement"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/16llnqZbhoJWIgS9NuT8pi_H9I-9-p0_-bgaYokd970M/edit"],
					owner: "channels@reddit.com",
					required: ["user_has_premium", "source", "session_id", "announcement_id", "live_thread_id", "client_timestamp", "uuid", "announcement_body", "user_id", "user_is_premium_subscriber", "noun", "user_logged_in", "request_base_url", "action_info_page_type", "screen_view_type", "app_name", "live_thread_is_announcement", "session_created_timestamp", "announcement_title", "request_domain", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				r = {
					firing_logic: "Comment search endpoint hit in GQL.",
					$id: "http://com.reddit/schemas/event_schemas/backend__search__comment_search.json",
					properties: {
						source: {
							const: "backend"
						},
						action: {
							const: "search"
						},
						noun: {
							const: "comment_search"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/1deNXVg-vEMj0Z4g65rPjYBdfHWC-sL8HmOPRYfkg6-0/edit#gid=0&range=B100"],
					owner: "search-team@reddit.com",
					required: ["search_query_id", "search_origin_page_type", "search_author_names_filter", "search_post_id", "search_query", "search_comment_ids", "search_number_comments"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				a = {
					firing_logic: "Rails/Best Tab makes a search request.",
					$id: "http://com.reddit/schemas/event_schemas/backend__search__full_search.json",
					properties: {
						source: {
							const: "backend"
						},
						action: {
							const: "search"
						},
						noun: {
							const: "full_search"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/1deNXVg-vEMj0Z4g65rPjYBdfHWC-sL8HmOPRYfkg6-0/edit#gid=0&range=B1"],
					owner: "search-team@reddit.com",
					required: ["search_number_subreddits", "search_range", "search_query_id", "search_origin_page_type", "search_links", "search_number_links", "search_query", "search_structure_type", "search_sort"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				d = {
					firing_logic: "Only for requests to /search, so when a user issues a post search.",
					$id: "http://com.reddit/schemas/event_schemas/backend__search__post_search.json",
					properties: {
						source: {
							const: "backend"
						},
						action: {
							const: "search"
						},
						noun: {
							const: "post_search"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/1deNXVg-vEMj0Z4g65rPjYBdfHWC-sL8HmOPRYfkg6-0/edit#gid=0&range=B35"],
					owner: "search-team@reddit.com",
					required: ["search_number_subreddits", "search_range", "search_query_id", "search_origin_page_type", "search_links", "search_number_links", "search_query", "search_structure_type", "search_sort"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				c = {
					firing_logic: "Fires on a request to one of the subreddit search endpoints.",
					$id: "http://com.reddit/schemas/event_schemas/backend__search__subreddit_search.json",
					properties: {
						source: {
							const: "backend"
						},
						action: {
							const: "search"
						},
						noun: {
							const: "subreddit_search"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/1deNXVg-vEMj0Z4g65rPjYBdfHWC-sL8HmOPRYfkg6-0/edit#gid=0&range=B57"],
					owner: "search-team@reddit.com",
					required: ["search_number_subreddits", "search_range", "search_query_id", "search_origin_page_type", "search_links", "search_number_links", "search_query", "search_structure_type", "search_sort"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				p = {
					firing_logic: "Strictly for a typeahead request.",
					$id: "http://com.reddit/schemas/event_schemas/backend__search__typeahead_search.json",
					properties: {
						source: {
							const: "backend"
						},
						action: {
							const: "search"
						},
						noun: {
							const: "typeahead_search"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/1deNXVg-vEMj0Z4g65rPjYBdfHWC-sL8HmOPRYfkg6-0/edit#gid=0&range=B79"],
					owner: "search-team@reddit.com",
					required: ["search_number_subreddits", "search_range", "search_query_id", "search_origin_page_type", "search_links", "search_number_links", "search_query", "search_structure_type", "search_sort"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				m = {
					firing_logic: "User submits a comment.",
					$id: "http://com.reddit/schemas/event_schemas/backend__submit__comment.json",
					properties: {
						source: {
							const: "backend"
						},
						action: {
							const: "submit"
						},
						noun: {
							const: "comment"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/1cf1TDMtjW4IEnB8zeFdBxuo3vj1TUzmBhVbX-qMHi0A"],
					owner: "data-warehouse@reddit.com",
					required: ["oauth_client_id", "post_domain", "session_id", "post_title", "post_nsfw", "subreddit_name", "post_id", "post_type", "post_body_text", "client_timestamp", "oauth_client_name", "user_created_timestamp", "oauth_client_app_type", "subreddit_id", "user_id", "user_logged_in", "post_promoted", "session_version", "app_name", "session_created_timestamp", "post_created_timestamp", "post_spoiler", "post_url", "request_domain", "post_author_id", "request_user_agent"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				_ = {
					firing_logic: "User submits a post.",
					$id: "http://com.reddit/schemas/event_schemas/backend__submit__post.json",
					properties: {
						source: {
							const: "backend"
						},
						action: {
							const: "submit"
						},
						noun: {
							const: "post"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/11BU1grpzsmHC1kPsTsh3YtQOsDYTkWZ_f5BWB2W0BrQ"],
					owner: "data-warehouse@reddit.com",
					required: ["oauth_client_id", "post_domain", "session_id", "post_title", "post_nsfw", "subreddit_name", "post_id", "post_type", "post_body_text", "client_timestamp", "oauth_client_name", "user_created_timestamp", "oauth_client_app_type", "subreddit_id", "user_id", "user_logged_in", "post_promoted", "session_version", "app_name", "session_created_timestamp", "post_created_timestamp", "post_spoiler", "post_url", "request_domain", "post_author_id", "request_user_agent"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				h = {
					firing_logic: "User auto-upvotes content (aka the initial vote).",
					$id: "http://com.reddit/schemas/event_schemas/backend__vote__auto_upvote.json",
					properties: {
						source: {
							const: "backend"
						},
						action: {
							const: "vote"
						},
						noun: {
							const: "auto_upvote"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/1-mlheTYKmGSKpvIP0zfQi55AZr2uyLjzOefypifcL20"],
					owner: "data-warehouse@reddit.com",
					required: ["oauth_client_id", "post_domain", "session_id", "post_title", "post_nsfw", "subreddit_name", "post_id", "post_type", "post_body_text", "client_timestamp", "oauth_client_name", "user_created_timestamp", "oauth_client_app_type", "subreddit_id", "user_id", "user_logged_in", "post_promoted", "session_version", "app_name", "session_created_timestamp", "post_created_timestamp", "post_spoiler", "post_url", "request_domain", "post_author_id", "request_user_agent"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				f = {
					firing_logic: "User clears his or her previous downvote.",
					$id: "http://com.reddit/schemas/event_schemas/backend__vote__clear_downvote.json",
					properties: {
						source: {
							const: "backend"
						},
						action: {
							const: "vote"
						},
						noun: {
							const: "clear_downvote"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/1-mlheTYKmGSKpvIP0zfQi55AZr2uyLjzOefypifcL20"],
					owner: "data-warehouse@reddit.com",
					required: ["oauth_client_id", "post_domain", "session_id", "post_title", "post_nsfw", "subreddit_name", "post_id", "post_type", "post_body_text", "client_timestamp", "oauth_client_name", "user_created_timestamp", "oauth_client_app_type", "subreddit_id", "user_id", "user_logged_in", "post_promoted", "session_version", "app_name", "session_created_timestamp", "post_created_timestamp", "post_spoiler", "post_url", "request_domain", "post_author_id", "request_user_agent"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				l = {
					firing_logic: "User clears his or her previous upvote.",
					$id: "http://com.reddit/schemas/event_schemas/backend__vote__clear_upvote.json",
					properties: {
						source: {
							const: "backend"
						},
						action: {
							const: "vote"
						},
						noun: {
							const: "clear_upvote"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/1-mlheTYKmGSKpvIP0zfQi55AZr2uyLjzOefypifcL20"],
					owner: "data-warehouse@reddit.com",
					required: ["oauth_client_id", "post_domain", "session_id", "post_title", "post_nsfw", "subreddit_name", "post_id", "post_type", "post_body_text", "client_timestamp", "oauth_client_name", "user_created_timestamp", "oauth_client_app_type", "subreddit_id", "user_id", "user_logged_in", "post_promoted", "session_version", "app_name", "session_created_timestamp", "post_created_timestamp", "post_spoiler", "post_url", "request_domain", "post_author_id", "request_user_agent"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				u = {
					firing_logic: "User downvotes content.",
					$id: "http://com.reddit/schemas/event_schemas/backend__vote__downvote.json",
					properties: {
						source: {
							const: "backend"
						},
						action: {
							const: "vote"
						},
						noun: {
							const: "downvote"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/1-mlheTYKmGSKpvIP0zfQi55AZr2uyLjzOefypifcL20"],
					owner: "data-warehouse@reddit.com",
					required: ["oauth_client_id", "post_domain", "session_id", "post_title", "post_nsfw", "subreddit_name", "post_id", "post_type", "post_body_text", "client_timestamp", "oauth_client_name", "user_created_timestamp", "oauth_client_app_type", "subreddit_id", "user_id", "user_logged_in", "post_promoted", "session_version", "app_name", "session_created_timestamp", "post_created_timestamp", "post_spoiler", "post_url", "request_domain", "post_author_id", "request_user_agent"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				g = {
					firing_logic: "User upvotes content.",
					$id: "http://com.reddit/schemas/event_schemas/backend__vote__upvote.json",
					properties: {
						source: {
							const: "backend"
						},
						action: {
							const: "vote"
						},
						noun: {
							const: "upvote"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/1-mlheTYKmGSKpvIP0zfQi55AZr2uyLjzOefypifcL20"],
					owner: "data-warehouse@reddit.com",
					required: ["oauth_client_id", "post_domain", "session_id", "post_title", "post_nsfw", "subreddit_name", "post_id", "post_type", "post_body_text", "client_timestamp", "oauth_client_name", "user_created_timestamp", "oauth_client_app_type", "subreddit_id", "user_id", "user_logged_in", "post_promoted", "session_version", "app_name", "session_created_timestamp", "post_created_timestamp", "post_spoiler", "post_url", "request_domain", "post_author_id", "request_user_agent"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				y = {
					firing_logic: "Fired on Coins package block click on /coins marketing page and top nav coins dropdown.",
					$id: "http://com.reddit/schemas/event_schemas/coins_marketing__click__coins_package.json",
					properties: {
						source: {
							const: "coins_marketing"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "coins_package"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=1470564269"],
					owner: "economy@reddit.com",
					required: ["user_has_premium", "source", "session_id", "correlation_id", "client_timestamp", "uuid", "user_created_timestamp", "user_id", "user_is_premium_subscriber", "noun", "user_logged_in", "request_base_url", "action_info_page_type", "screen_view_type", "app_name", "user_number_coins", "session_created_timestamp", "user_is_admin", "request_domain", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				v = {
					firing_logic: "User views Coins Marketing page.",
					$id: "http://com.reddit/schemas/event_schemas/coins_marketing__view__page.json",
					properties: {
						source: {
							const: "coins_marketing"
						},
						action: {
							const: "view"
						},
						noun: {
							const: "page"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=1470564269&range=D12"],
					owner: "economy@reddit.com",
					required: ["user_has_premium", "source", "session_id", "correlation_id", "client_timestamp", "uuid", "user_created_timestamp", "user_id", "user_is_premium_subscriber", "noun", "user_logged_in", "request_base_url", "action_info_page_type", "screen_view_type", "app_name", "user_number_coins", "session_created_timestamp", "user_is_admin", "request_domain", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				b = {
					firing_logic: "Fire when a given comment has been in view for 2 continuous seconds.",
					$id: "http://com.reddit/schemas/event_schemas/comment__consume__comment.json",
					properties: {
						source: {
							const: "comment"
						},
						action: {
							const: "consume"
						},
						noun: {
							const: "comment"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/1dRP6DXjRxE04Hsc80xF2TkYsBSOoAfz2mm5wUXzr3GY/edit#heading=h.y6w2ct9vq108"],
					owner: "ads-engineering@reddit.com",
					required: ["user_has_premium", "source", "session_id", "comment_post_id", "client_timestamp", "uuid", "comment_created_timestamp", "comment_score", "comment_parent_id", "comment_id", "user_id", "user_is_premium_subscriber", "noun", "user_logged_in", "comment_author_id", "request_base_url", "action_info_page_type", "screen_view_type", "comment_number_gildings", "app_name", "session_created_timestamp", "request_domain", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				w = {
					firing_logic: "Fire when a given comment scrolls into view",
					$id: "http://com.reddit/schemas/event_schemas/comment__view__comment.json",
					properties: {
						source: {
							const: "comment"
						},
						action: {
							const: "view"
						},
						noun: {
							const: "comment"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/1dRP6DXjRxE04Hsc80xF2TkYsBSOoAfz2mm5wUXzr3GY/edit#heading=h.y6w2ct9vq108"],
					owner: "ads-engineering@reddit.com",
					required: ["user_has_premium", "source", "session_id", "comment_post_id", "client_timestamp", "uuid", "comment_created_timestamp", "comment_score", "comment_parent_id", "comment_id", "user_id", "user_is_premium_subscriber", "noun", "user_logged_in", "comment_author_id", "request_base_url", "action_info_page_type", "screen_view_type", "comment_number_gildings", "app_name", "session_created_timestamp", "request_domain", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				j = {
					firing_logic: "User taps on Premium from the top nav.",
					$id: "http://com.reddit/schemas/event_schemas/community_nav__click__premium.json",
					properties: {
						source: {
							const: "community_nav"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "premium"
						}
					},
					owner: "economy@reddit.com",
					required: ["user_has_premium", "source", "session_id", "client_timestamp", "uuid", "user_id", "user_is_premium_subscriber", "noun", "user_logged_in", "request_base_url", "action_info_page_type", "screen_view_type", "app_name", "session_created_timestamp", "request_domain", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				$ = {
					firing_logic: "User clicks No on location verification prompt",
					$id: "http://com.reddit/schemas/event_schemas/crowdsource__click__reject_location.json",
					properties: {
						source: {
							const: "crowdsource"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "reject_location"
						}
					},
					documentation_links: ["https://reddit.atlassian.net/wiki/spaces/SIG/pages/830866056/Crowdsourced+Geotagging+Instrumentation+Spec#Frontend"],
					owner: "community-activation@reddit.com",
					required: ["source", "session_id", "client_timestamp", "uuid", "user_id", "noun", "user_logged_in", "request_base_url", "action_info_page_type", "screen_view_type", "app_name", "session_created_timestamp", "request_domain", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				k = {
					firing_logic: "Canonical location is being modified",
					$id: "http://com.reddit/schemas/event_schemas/crowdsource__save__location.json",
					properties: {
						source: {
							const: "crowdsource"
						},
						action: {
							const: "save"
						},
						noun: {
							const: "location"
						}
					},
					documentation_links: ["https://reddit.atlassian.net/wiki/spaces/SIG/pages/830866056/Crowdsourced+Geotagging+Instrumentation+Spec#Backend"],
					owner: "community-activation@reddit.com",
					required: ["crowd_source_geo_region", "crowd_source_place_id", "crowd_source_geo_country", "crowd_source_old_place_id", "crowd_source_geo_city", "crowd_source_old_geo_country", "crowd_source_old_geo_region", "crowd_source_old_geo_city"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				x = {
					firing_logic: "User submits location (not guaranteed source of truth)",
					$id: "http://com.reddit/schemas/event_schemas/crowdsource__submit__location.json",
					properties: {
						source: {
							const: "crowdsource"
						},
						action: {
							const: "submit"
						},
						noun: {
							const: "location"
						}
					},
					documentation_links: ["https://reddit.atlassian.net/wiki/spaces/SIG/pages/830866056/Crowdsourced+Geotagging+Instrumentation+Spec#Backend"],
					owner: "community-activation@reddit.com",
					required: ["crowd_source_geo_region", "crowd_source_place_id", "crowd_source_geo_country", "crowd_source_old_place_id", "crowd_source_geo_city", "crowd_source_old_geo_country", "crowd_source_old_geo_region", "crowd_source_old_geo_city"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				q = {
					firing_logic: "Expose events are emitted when a user reaches an experiment code fork",
					$id: "http://com.reddit/schemas/event_schemas/experiment__expose__user_id.json",
					properties: {
						source: {
							const: "experiment"
						},
						action: {
							const: "expose"
						},
						noun: {
							const: "user_id"
						}
					},
					documentation_links: ["https://reddit.atlassian.net/wiki/spaces/EX/pages/343212125/Running+Experiments+at+Reddit"],
					owner: "experiments@reddit.com",
					required: ["experiment_name", "experiment_version", "experiment_id", "experiment_is_override", "experiment_variant"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				P = {
					firing_logic: "User selects account gender in settings page",
					$id: "http://com.reddit/schemas/event_schemas/gender_app_settings__select__gender.json",
					properties: {
						source: {
							const: "gender_app_settings"
						},
						action: {
							const: "select"
						},
						noun: {
							const: "gender"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/1M-hcrD2WCkdpHxwwRA82iN-qUoCNbMA0SomMxcKmTlc"],
					owner: "growth@reddit.com",
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				E = {
					firing_logic: "User clicks Award button to award the post / comment (because they have enough Coins).",
					$id: "http://com.reddit/schemas/event_schemas/give_gold__click__confirm.json",
					properties: {
						source: {
							const: "give_gold"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "confirm"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=464493950&range=D29"],
					owner: "economy@reddit.com",
					required: ["user_has_premium", "source", "session_id", "user_number_premium_days_remaining", "gold_purchase_type", "post_id", "client_timestamp", "uuid", "user_created_timestamp", "user_id", "user_is_premium_subscriber", "noun", "user_logged_in", "request_base_url", "action_info_page_type", "post_number_gildings", "screen_view_type", "app_name", "gold_purchase_content_type", "user_number_coins", "session_created_timestamp", "user_is_admin", "request_domain", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				T = {
					firing_logic: "User clicks Silver award type",
					$id: "http://com.reddit/schemas/event_schemas/give_gold__click__gid_1.json",
					properties: {
						source: {
							const: "give_gold"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "gid_1"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=464493950&range=D15"],
					owner: "economy@reddit.com",
					required: ["user_has_premium", "source", "session_id", "user_number_premium_days_remaining", "post_id", "client_timestamp", "uuid", "user_created_timestamp", "user_id", "user_is_premium_subscriber", "noun", "user_logged_in", "request_base_url", "action_info_page_type", "post_number_gildings", "screen_view_type", "app_name", "user_number_coins", "session_created_timestamp", "user_is_admin", "request_domain", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				S = {
					firing_logic: "User clicks Gold award type",
					$id: "http://com.reddit/schemas/event_schemas/give_gold__click__gid_2.json",
					properties: {
						source: {
							const: "give_gold"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "gid_2"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=464493950&range=D16"],
					owner: "economy@reddit.com",
					required: ["user_has_premium", "source", "session_id", "user_number_premium_days_remaining", "post_id", "client_timestamp", "uuid", "user_created_timestamp", "user_id", "user_is_premium_subscriber", "noun", "user_logged_in", "request_base_url", "action_info_page_type", "post_number_gildings", "screen_view_type", "app_name", "user_number_coins", "session_created_timestamp", "user_is_admin", "request_domain", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				A = {
					firing_logic: "User clicks Platinum award type",
					$id: "http://com.reddit/schemas/event_schemas/give_gold__click__gid_3.json",
					properties: {
						source: {
							const: "give_gold"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "gid_3"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=464493950&range=D17"],
					owner: "economy@reddit.com",
					required: ["user_has_premium", "source", "session_id", "user_number_premium_days_remaining", "post_id", "client_timestamp", "uuid", "user_created_timestamp", "user_id", "user_is_premium_subscriber", "noun", "user_logged_in", "request_base_url", "action_info_page_type", "post_number_gildings", "screen_view_type", "app_name", "user_number_coins", "session_created_timestamp", "user_is_admin", "request_domain", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				R = {
					firing_logic: "User clicks 'Next' button (because they don't have enough Coins)",
					$id: "http://com.reddit/schemas/event_schemas/give_gold__click__next.json",
					properties: {
						source: {
							const: "give_gold"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "next"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=464493950&range=D30"],
					owner: "economy@reddit.com",
					required: ["user_has_premium", "source", "session_id", "user_number_premium_days_remaining", "post_id", "client_timestamp", "uuid", "user_created_timestamp", "user_id", "user_is_premium_subscriber", "noun", "user_logged_in", "request_base_url", "action_info_page_type", "post_number_gildings", "screen_view_type", "app_name", "user_number_coins", "session_created_timestamp", "user_is_admin", "request_domain", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				D = {
					firing_logic: "User views Give Gold modal",
					$id: "http://com.reddit/schemas/event_schemas/give_gold__view__page.json",
					properties: {
						source: {
							const: "give_gold"
						},
						action: {
							const: "view"
						},
						noun: {
							const: "page"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=464493950&range=D14"],
					owner: "economy@reddit.com",
					required: ["user_has_premium", "source", "session_id", "user_number_premium_days_remaining", "subreddit_name", "post_id", "client_timestamp", "uuid", "user_created_timestamp", "subreddit_id", "user_id", "user_is_premium_subscriber", "gold_purchase_default_option", "noun", "user_logged_in", "request_base_url", "action_info_page_type", "post_number_gildings", "screen_view_type", "gold_purchase_default_anonymous", "app_name", "user_number_coins", "session_created_timestamp", "user_is_admin", "request_domain", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				I = {
					firing_logic: "Fired when a user leaves/exits Reddit",
					$id: "http://com.reddit/schemas/event_schemas/global__leave__app.json",
					properties: {
						source: {
							const: "global"
						},
						action: {
							const: "leave"
						},
						noun: {
							const: "app"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/1OHIME1H9MgrCovWkUFZTTPhPmft9f8kiXpMM438BVDI/edit"],
					owner: "data-warehouse@reddit.com",
					required: ["user_has_premium", "source", "session_id", "client_timestamp", "uuid", "user_id", "user_is_premium_subscriber", "noun", "user_logged_in", "request_base_url", "action_info_page_type", "screen_view_type", "app_name", "session_created_timestamp", "request_domain", "action", "action_info_reason"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				F = {
					firing_logic: "Fires when the page/content loads for a user",
					$id: "http://com.reddit/schemas/event_schemas/global__view__screen.json",
					properties: {
						source: {
							const: "global"
						},
						action: {
							const: "view"
						},
						noun: {
							const: "screen"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/16cGRpFr-eEq8JOb-6Kd9vxe1Ah9oQm8d_T7vpfpZfpo/edit"],
					owner: "data-warehouse@reddit.com",
					required: ["user_has_premium", "source", "session_id", "client_timestamp", "uuid", "user_id", "user_is_premium_subscriber", "noun", "user_logged_in", "request_base_url", "action_info_page_type", "screen_view_type", "app_name", "session_created_timestamp", "request_domain", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				O = {
					firing_logic: "User clicks credit card option",
					$id: "http://com.reddit/schemas/event_schemas/gold_payment__click__credit_card.json",
					properties: {
						source: {
							const: "gold_payment"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "credit_card"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=281579805&range=D16"],
					owner: "economy@reddit.com",
					required: ["user_has_premium", "source", "session_id", "correlation_id", "user_number_premium_days_remaining", "gold_purchase_type", "post_id", "client_timestamp", "uuid", "gold_purchase_gilded_content", "user_is_premium_subcriber", "user_created_timestamp", "user_id", "noun", "user_logged_in", "request_base_url", "action_info_page_type", "gold_purchase_number_coins", "post_number_gildings", "screen_view_type", "app_name", "gold_purchase_content_type", "user_number_coins", "session_created_timestamp", "payment_currency", "user_is_admin", "request_domain", "payment_amount_in_smallest_denom", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				C = {
					firing_logic: "User views Gold Payment modal",
					$id: "http://com.reddit/schemas/event_schemas/gold_payment__view__page.json",
					properties: {
						source: {
							const: "gold_payment"
						},
						action: {
							const: "view"
						},
						noun: {
							const: "page"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=281579805&range=D10"],
					owner: "economy@reddit.com",
					required: ["user_has_premium", "source", "session_id", "correlation_id", "user_number_premium_days_remaining", "subreddit_name", "gold_purchase_type", "post_id", "client_timestamp", "uuid", "gold_purchase_gilded_content", "user_is_premium_subcriber", "payment_default_option", "user_created_timestamp", "subreddit_id", "user_id", "noun", "user_logged_in", "request_base_url", "action_info_page_type", "gold_purchase_number_coins", "post_number_gildings", "screen_view_type", "app_name", "gold_purchase_content_type", "user_number_coins", "session_created_timestamp", "payment_currency", "user_is_admin", "request_domain", "payment_amount_in_smallest_denom", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				U = {
					firing_logic: "User clicks on the user dropdown.",
					$id: "http://com.reddit/schemas/event_schemas/nav__click__user.json",
					properties: {
						source: {
							const: "nav"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "user"
						}
					},
					owner: "data-warehouse@reddit.com",
					required: ["user_has_premium", "source", "session_id", "client_timestamp", "uuid", "user_id", "user_is_premium_subscriber", "noun", "user_logged_in", "request_base_url", "action_info_page_type", "screen_view_type", "app_name", "user_number_coins", "session_created_timestamp", "request_domain", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				z = {
					firing_logic: "User click 'Give Gold' on post",
					$id: "http://com.reddit/schemas/event_schemas/post__click__give_gold.json",
					properties: {
						source: {
							const: "post"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "give_gold"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=464493950&range=D10"],
					owner: "economy@reddit.com",
					required: ["user_has_premium", "source", "session_id", "user_number_premium_days_remaining", "post_id", "client_timestamp", "uuid", "user_created_timestamp", "user_id", "user_is_premium_subscriber", "noun", "user_logged_in", "request_base_url", "action_info_page_type", "post_number_gildings", "screen_view_type", "app_name", "user_number_coins", "session_created_timestamp", "user_is_admin", "request_domain", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				L = {
					firing_logic: "User clicks on a post flair on a post.",
					$id: "http://com.reddit/schemas/event_schemas/post__click__post_flair.json",
					properties: {
						source: {
							const: "post"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "post_flair"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/1deNXVg-vEMj0Z4g65rPjYBdfHWC-sL8HmOPRYfkg6-0/edit#gid=671769040&range=B207"],
					owner: "search-team@reddit.com",
					required: ["post_score", "search_query_id", "post_domain", "post_upvote_ratio", "search_origin_page_type", "search_post_flair_name", "post_title", "post_archived", "post_nsfw", "post_id", "post_type", "post_comment_type", "post_subreddit_id", "post_crosspost_root_id", "post_subreddit_name", "action_info_page_type", "post_promoted", "post_number_gildings", "search_subreddit_name", "search_query", "search_subreddit_id", "search_origin_element", "post_created_timestamp", "post_spoiler", "post_url", "post_author_id", "post_number_comments"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				N = {
					firing_logic: "Fired when a post that was >0% visible for at least 2 seconds becomes 0% visible (i.e. goes off screen).",
					$id: "http://com.reddit/schemas/event_schemas/post__consume__post.json",
					properties: {
						source: {
							const: "post"
						},
						action: {
							const: "consume"
						},
						noun: {
							const: "post"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/1d82wbSdR48tmqcuMoGr_IsFb9qrajaORWhnUTWkEvrk/edit#"],
					owner: "data-warehouse@reddit.com",
					required: ["post_domain", "post_upvote_ratio", "source", "session_id", "post_title", "post_archived", "post_nsfw", "post_id", "post_type", "client_timestamp", "uuid", "post_subreddit_id", "user_id", "action_info_position", "post_subreddit_name", "noun", "user_logged_in", "request_base_url", "action_info_page_type", "post_promoted", "screen_view_type", "app_name", "session_created_timestamp", "post_created_timestamp", "request_domain", "post_author_id", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				M = {
					firing_logic: "Fired immediately when a post becomes >0% visible.",
					$id: "http://com.reddit/schemas/event_schemas/post__view__post.json",
					properties: {
						source: {
							const: "post"
						},
						action: {
							const: "view"
						},
						noun: {
							const: "post"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/1d82wbSdR48tmqcuMoGr_IsFb9qrajaORWhnUTWkEvrk/edit#"],
					owner: "data-warehouse@reddit.com",
					required: ["post_domain", "post_upvote_ratio", "source", "session_id", "post_title", "post_archived", "post_nsfw", "post_id", "post_type", "client_timestamp", "uuid", "post_subreddit_id", "user_id", "action_info_position", "post_subreddit_name", "noun", "user_logged_in", "request_base_url", "action_info_page_type", "post_promoted", "screen_view_type", "app_name", "session_created_timestamp", "post_created_timestamp", "request_domain", "post_author_id", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				H = {
					firing_logic: "User clicks top 'Get Reddit Premium' button to scroll to purchase section below",
					$id: "http://com.reddit/schemas/event_schemas/premium_marketing__click__get_premium.json",
					properties: {
						source: {
							const: "premium_marketing"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "get_premium"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=1536255464&range=D12"],
					owner: "economy@reddit.com",
					required: ["user_has_premium", "source", "session_id", "correlation_id", "user_number_premium_days_remaining", "client_timestamp", "uuid", "user_is_premium_subscribe", "user_created_timestamp", "user_id", "noun", "user_logged_in", "request_base_url", "action_info_page_type", "screen_view_type", "app_name", "user_number_coins", "session_created_timestamp", "user_is_admin", "request_domain", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				B = {
					firing_logic: "User clicks bottom '$5.99 / Month' button to enter purchase flow",
					$id: "http://com.reddit/schemas/event_schemas/premium_marketing__click__price.json",
					properties: {
						source: {
							const: "premium_marketing"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "price"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=1536255464&range=D12"],
					owner: "economy@reddit.com",
					required: ["user_has_premium", "source", "session_id", "correlation_id", "user_number_premium_days_remaining", "client_timestamp", "uuid", "user_is_premium_subscribe", "user_created_timestamp", "user_id", "noun", "user_logged_in", "request_base_url", "action_info_page_type", "screen_view_type", "app_name", "user_number_coins", "session_created_timestamp", "user_is_admin", "request_domain", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				W = {
					firing_logic: "User views Premium Marketing page.",
					$id: "http://com.reddit/schemas/event_schemas/premium_marketing__view__page.json",
					properties: {
						source: {
							const: "premium_marketing"
						},
						action: {
							const: "view"
						},
						noun: {
							const: "page"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=1536255464&range=D12"],
					owner: "economy@reddit.com",
					required: ["user_has_premium", "source", "session_id", "correlation_id", "user_number_premium_days_remaining", "client_timestamp", "uuid", "user_is_premium_subscribe", "user_created_timestamp", "user_id", "noun", "user_logged_in", "request_base_url", "action_info_page_type", "screen_view_type", "app_name", "user_number_coins", "session_created_timestamp", "user_is_admin", "request_domain", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				V = {
					firing_logic: "User clicks block button on another user's profile to block them.",
					$id: "http://com.reddit/schemas/event_schemas/profile__click__block_user.json",
					properties: {
						source: {
							const: "profile"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "block_user"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/1h0gdN9fwcXF7pORauoRy-2lGYm4scrEpa73Quv42eos/edit?usp=sharing"],
					owner: "anti-evil-eng@reddit.com",
					required: ["target_user"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				Q = {
					firing_logic: "User clicks unblock button on another user's profile to unblock them.",
					$id: "http://com.reddit/schemas/event_schemas/profile__click__unblock_user.json",
					properties: {
						source: {
							const: "profile"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "unblock_user"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/1h0gdN9fwcXF7pORauoRy-2lGYm4scrEpa73Quv42eos/edit?usp=sharing"],
					owner: "anti-evil-eng@reddit.com",
					required: ["target_user"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				G = {
					firing_logic: "User clicks on an ad on the Search Results Page.",
					$id: "http://com.reddit/schemas/event_schemas/search__click__ad.json",
					properties: {
						source: {
							const: "search"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "ad"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/1deNXVg-vEMj0Z4g65rPjYBdfHWC-sL8HmOPRYfkg6-0/edit#gid=114077196&range=B333"],
					owner: "search-team@reddit.com",
					required: ["post_score", "search_range", "search_query_id", "post_domain", "post_upvote_ratio", "search_origin_page_type", "post_title", "post_archived", "post_nsfw", "post_id", "post_type", "post_comment_type", "post_subreddit_id", "post_crosspost_root_id", "user_preferences_hide_nsfw", "action_info_relative_position", "action_info_position", "post_subreddit_name", "action_info_page_type", "post_promoted", "post_number_gildings", "search_query", "search_structure_type", "post_created_timestamp", "post_spoiler", "post_url", "action_info_pane_name", "post_author_id", "post_number_comments", "search_sort"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				J = {
					firing_logic: "User executes a query from the search bar. This fires when the query is explicitly fired.",
					$id: "http://com.reddit/schemas/event_schemas/search__click__full_search_button.json",
					properties: {
						source: {
							const: "search"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "full_search_button"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/1deNXVg-vEMj0Z4g65rPjYBdfHWC-sL8HmOPRYfkg6-0/edit#gid=671769040&range=B207"],
					owner: "search-team@reddit.com",
					required: ["search_query", "action_info_page_type", "search_query_id", "search_origin_page_type"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				Y = {
					firing_logic: "User clicks on a post on the Search Results Page.",
					$id: "http://com.reddit/schemas/event_schemas/search__click__post.json",
					properties: {
						source: {
							const: "search"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "post"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/1deNXVg-vEMj0Z4g65rPjYBdfHWC-sL8HmOPRYfkg6-0/edit#gid=114077196&range=B87"],
					owner: "search-team@reddit.com",
					required: ["post_score", "search_range", "search_query_id", "post_domain", "post_upvote_ratio", "search_origin_page_type", "post_title", "post_archived", "post_nsfw", "post_id", "post_type", "post_comment_type", "post_subreddit_id", "post_crosspost_root_id", "user_preferences_hide_nsfw", "action_info_relative_position", "action_info_position", "post_subreddit_name", "action_info_page_type", "post_promoted", "post_number_gildings", "search_query", "search_structure_type", "post_created_timestamp", "post_spoiler", "post_url", "action_info_pane_name", "post_author_id", "post_number_comments", "search_sort"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				K = {
					firing_logic: "User clicks on a profile on the Search Results Page.",
					$id: "http://com.reddit/schemas/event_schemas/search__click__profile.json",
					properties: {
						source: {
							const: "search"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "profile"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/1deNXVg-vEMj0Z4g65rPjYBdfHWC-sL8HmOPRYfkg6-0/edit#gid=114077196&range=B210"],
					owner: "search-team@reddit.com",
					required: ["search_range", "search_query_id", "search_origin_page_type", "user_preferences_hide_nsfw", "action_info_relative_position", "profile_name", "action_info_position", "action_info_page_type", "profile_id", "search_query", "search_structure_type", "profile_nsfw", "action_info_pane_name", "search_sort"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				Z = {
					firing_logic: "User clicks on a recent search (can be a full search, subreddit, or profile) in the search dropdown.",
					$id: "http://com.reddit/schemas/event_schemas/search__click__recent_search.json",
					properties: {
						source: {
							const: "search"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "recent_search"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/1deNXVg-vEMj0Z4g65rPjYBdfHWC-sL8HmOPRYfkg6-0/edit#gid=671769040&range=B39"],
					owner: "search-team@reddit.com",
					required: ["search_query_id", "search_origin_page_type", "action_info_position", "action_info_page_type", "search_query"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				X = {
					firing_logic: "User clicks on the search bar.",
					$id: "http://com.reddit/schemas/event_schemas/search__click__search_bar.json",
					properties: {
						source: {
							const: "search"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "search_bar"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/1deNXVg-vEMj0Z4g65rPjYBdfHWC-sL8HmOPRYfkg6-0/edit#gid=671769040&range=B1"],
					owner: "search-team@reddit.com",
					required: ["action_info_page_type", "search_origin_page_type"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				ee = {
					firing_logic: "A user changes the sort on the search results page.",
					$id: "http://com.reddit/schemas/event_schemas/search__click__sort_change.json",
					properties: {
						source: {
							const: "search"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "sort_change"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/1deNXVg-vEMj0Z4g65rPjYBdfHWC-sL8HmOPRYfkg6-0/edit#gid=114077196&range=B392"],
					owner: "search-team@reddit.com",
					required: ["search_range", "search_query_id", "search_origin_page_type", "user_preferences_hide_nsfw", "action_info_relative_position", "action_info_position", "action_info_page_type", "search_query", "search_structure_type", "action_info_pane_name", "search_sort"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				te = {
					firing_logic: "User clicks on a subreddit on the Search Results Page.",
					$id: "http://com.reddit/schemas/event_schemas/search__click__subreddit.json",
					properties: {
						source: {
							const: "search"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "subreddit"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/1deNXVg-vEMj0Z4g65rPjYBdfHWC-sL8HmOPRYfkg6-0/edit#gid=114077196&range=B145"],
					owner: "search-team@reddit.com",
					required: ["search_range", "search_query_id", "subreddit_nsfw", "search_origin_page_type", "subreddit_quarantined", "subreddit_name", "user_preferences_hide_nsfw", "action_info_relative_position", "subreddit_id", "action_info_position", "action_info_page_type", "search_query", "search_structure_type", "action_info_pane_name", "search_sort"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				ie = {
					firing_logic: "User clicks on a trend within the r/popular carousel or the search dropdown.",
					$id: "http://com.reddit/schemas/event_schemas/search__click__trending.json",
					properties: {
						source: {
							const: "search"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "trending"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/1deNXVg-vEMj0Z4g65rPjYBdfHWC-sL8HmOPRYfkg6-0/edit#gid=671769040&range=B161"],
					owner: "search-team@reddit.com",
					required: ["search_query_id", "meta_search_raw_query", "search_origin_page_type", "meta_search_structure_type", "meta_search_display_query", "action_info_position", "action_info_page_type", "search_query", "action_info_pane_name"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				se = {
					firing_logic: "User clicks on an item returned by the typeahead endpoint.",
					$id: "http://com.reddit/schemas/event_schemas/search__click__typeahead.json",
					properties: {
						source: {
							const: "search"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "typeahead"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/1deNXVg-vEMj0Z4g65rPjYBdfHWC-sL8HmOPRYfkg6-0/edit#gid=671769040&range=B77"],
					owner: "search-team@reddit.com",
					required: ["search_number_subreddits", "search_query_id", "search_origin_page_type", "search_subreddit_ids", "action_info_position", "action_info_page_type", "search_query", "search_typeahead_active"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				ne = {
					firing_logic: "User disables community specific search, changing search to results from all of Reddit",
					$id: "http://com.reddit/schemas/event_schemas/search__disable__subreddit_search.json",
					properties: {
						source: {
							const: "search"
						},
						action: {
							const: "disable"
						},
						noun: {
							const: "subreddit_search"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/1zQXcNhChy_xqISO08_lFwOxHhfA65NpYz8mLSKuK48g/edit#heading=h.r0otu5jpacz6"],
					owner: "fset@reddit.com",
					required: ["subreddit_nsfw", "subreddit_quarantined", "subreddit_id", "subreddit_name"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				oe = {
					firing_logic: "User views an ad on their screen on the search results page, this only fires when the ad is within view of the user. If the ad leaves the view then reenters, this should fire again.",
					$id: "http://com.reddit/schemas/event_schemas/search__view__ad.json",
					properties: {
						source: {
							const: "search"
						},
						action: {
							const: "view"
						},
						noun: {
							const: "ad"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/1deNXVg-vEMj0Z4g65rPjYBdfHWC-sL8HmOPRYfkg6-0/edit#gid=114077196&range=B274"],
					owner: "search-team@reddit.com",
					required: ["post_score", "search_range", "search_query_id", "post_domain", "post_upvote_ratio", "search_origin_page_type", "post_title", "post_archived", "post_nsfw", "post_id", "post_type", "post_comment_type", "post_subreddit_id", "post_crosspost_root_id", "user_preferences_hide_nsfw", "action_info_relative_position", "action_info_position", "post_subreddit_name", "action_info_page_type", "post_promoted", "post_number_gildings", "search_query", "search_structure_type", "post_created_timestamp", "post_spoiler", "post_url", "action_info_pane_name", "post_author_id", "post_number_comments", "search_sort"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				re = {
					firing_logic: "User views a post on their screen on the search results page. This only fires when the post is within view of the user.",
					$id: "http://com.reddit/schemas/event_schemas/search__view__post.json",
					properties: {
						source: {
							const: "search"
						},
						action: {
							const: "view"
						},
						noun: {
							const: "post"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/1deNXVg-vEMj0Z4g65rPjYBdfHWC-sL8HmOPRYfkg6-0/edit#gid=114077196&range=B29"],
					owner: "search-team@reddit.com",
					required: ["post_score", "search_range", "search_query_id", "post_domain", "post_upvote_ratio", "search_origin_page_type", "post_title", "post_archived", "post_nsfw", "post_id", "post_type", "post_comment_type", "post_subreddit_id", "post_crosspost_root_id", "user_preferences_hide_nsfw", "action_info_relative_position", "action_info_position", "post_subreddit_name", "action_info_page_type", "post_promoted", "post_number_gildings", "search_query", "search_structure_type", "post_created_timestamp", "post_spoiler", "post_url", "action_info_pane_name", "post_author_id", "post_number_comments", "search_sort"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				ae = {
					firing_logic: "User sees a trend within the r/popular carousel or the search dropdown.",
					$id: "http://com.reddit/schemas/event_schemas/search__view__trending.json",
					properties: {
						source: {
							const: "search"
						},
						action: {
							const: "view"
						},
						noun: {
							const: "trending"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/1deNXVg-vEMj0Z4g65rPjYBdfHWC-sL8HmOPRYfkg6-0/edit#gid=671769040&range=B115"],
					owner: "search-team@reddit.com",
					required: ["search_query_id", "meta_search_raw_query", "search_origin_page_type", "meta_search_structure_type", "meta_search_display_query", "action_info_position", "action_info_page_type", "search_query", "action_info_pane_name"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				de = {
					firing_logic: "Gazette powered home feed is constructed for a user.",
					$id: "http://com.reddit/schemas/event_schemas/user_activity_one_feed__predict__feed.json",
					properties: {
						source: {
							const: "user_activity_one_feed"
						},
						action: {
							const: "predict"
						},
						noun: {
							const: "feed"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/1yjww_krW7rM2pLM-DaJtHP_6fowT3GoRS80b4urgwg4/edit?usp=sharing"],
					owner: "relevance-team@reddit.com",
					required: ["listing_length", "geo_country_code", "session_id", "correlation_id", "geo_region", "user_id", "user_logged_in", "geo_city", "app_name", "listing_links"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				ce = {
					firing_logic: "One feed model makes a batch of predictions in Minsky.",
					$id: "http://com.reddit/schemas/event_schemas/user_activity_one_feed__predict__one_feed_feature.json",
					properties: {
						source: {
							const: "user_activity_one_feed"
						},
						action: {
							const: "predict"
						},
						noun: {
							const: "one_feed_feature"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/1yjww_krW7rM2pLM-DaJtHP_6fowT3GoRS80b4urgwg4/edit?usp=sharing"],
					owner: "relevance-team@reddit.com",
					required: ["relevance_model_result_blob", "relevance_model_feature_blob", "relevance_model_identifier", "relevance_model_version", "correlation_id", "post_id", "client_timestamp", "uuid", "user_id"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				pe = {
					firing_logic: "Gazette powered popular feed is constructed for a user.",
					$id: "http://com.reddit/schemas/event_schemas/user_activity_popular__predict__feed.json",
					properties: {
						source: {
							const: "user_activity_popular"
						},
						action: {
							const: "predict"
						},
						noun: {
							const: "feed"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/1yjww_krW7rM2pLM-DaJtHP_6fowT3GoRS80b4urgwg4/edit?usp=sharing"],
					owner: "relevance-team@reddit.com",
					required: ["listing_length", "geo_country_code", "session_id", "correlation_id", "geo_region", "user_id", "user_logged_in", "geo_city", "app_name", "listing_links"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				me = {
					firing_logic: "Popular model makes a batch of predictions in Minsky.",
					$id: "http://com.reddit/schemas/event_schemas/user_activity_popular__predict__popular_feature.json",
					properties: {
						source: {
							const: "user_activity_popular"
						},
						action: {
							const: "predict"
						},
						noun: {
							const: "popular_feature"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/1yjww_krW7rM2pLM-DaJtHP_6fowT3GoRS80b4urgwg4/edit?usp=sharing"],
					owner: "relevance-team@reddit.com",
					required: ["relevance_model_result_blob", "relevance_model_feature_blob", "relevance_model_identifier", "relevance_model_version", "correlation_id", "post_id", "client_timestamp", "uuid", "user_id"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				_e = {
					firing_logic: "Push notification model makes a batch of predictions in Minsky.",
					$id: "http://com.reddit/schemas/event_schemas/user_activity_push_notification__predict__push_notification_feature.json",
					properties: {
						source: {
							const: "user_activity_push_notification"
						},
						action: {
							const: "predict"
						},
						noun: {
							const: "push_notification_feature"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/1yjww_krW7rM2pLM-DaJtHP_6fowT3GoRS80b4urgwg4/edit?usp=sharing"],
					owner: "relevance-team@reddit.com",
					required: ["relevance_model_result_blob", "relevance_model_feature_blob", "relevance_model_identifier", "relevance_model_version", "correlation_id", "post_id", "client_timestamp", "uuid", "user_id"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				he = {
					firing_logic: "Video feed model makes a batch of predictions in Minsky.",
					$id: "http://com.reddit/schemas/event_schemas/user_activity_video__predict__video_feature.json",
					properties: {
						source: {
							const: "user_activity_video"
						},
						action: {
							const: "predict"
						},
						noun: {
							const: "video_feature"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/1yjww_krW7rM2pLM-DaJtHP_6fowT3GoRS80b4urgwg4/edit?usp=sharing"],
					owner: "relevance-team@reddit.com",
					required: ["relevance_model_result_blob", "relevance_model_feature_blob", "relevance_model_identifier", "relevance_model_version", "correlation_id", "post_id", "client_timestamp", "uuid", "user_id"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				fe = {
					firing_logic: "User clicks Coins from user dropdown.",
					$id: "http://com.reddit/schemas/event_schemas/user_dropdown__click__coins.json",
					properties: {
						source: {
							const: "user_dropdown"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "coins"
						}
					},
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=1470564269&range=D10"],
					owner: "economy@reddit.com",
					required: ["user_has_premium", "source", "session_id", "correlation_id", "client_timestamp", "uuid", "user_created_timestamp", "user_id", "user_is_premium_subscriber", "noun", "user_logged_in", "request_base_url", "action_info_page_type", "screen_view_type", "app_name", "user_number_coins", "session_created_timestamp", "user_is_admin", "request_domain", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				le = {
					firing_logic: "User saves user flair.",
					$id: "http://com.reddit/schemas/event_schemas/user_flair_picker__save__user_flair.json",
					properties: {
						source: {
							const: "user_flair_picker"
						},
						action: {
							const: "save"
						},
						noun: {
							const: "user_flair"
						}
					},
					documentation_links: ["https://docs.google.com/document/d/1N5_k1Uu6A22Pi4d5EsX_c76nRZCloP7ZmJxjgSAAwvI/edit#heading=h.2vx26vm7jbjs"],
					owner: "economy@reddit.com",
					required: ["user_flair_title", "user_flair_id"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				ue = {
					$id: "http://com.reddit/schemas/field_definitions/account_label/account_label.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "A label associated with reddit account.",
					definitions: {
						id: {
							type: "string",
							description: "Unique identifier for the label being acted on."
						},
						type: {
							type: "string",
							description: "Type of label.\n\n    As of writing this the type will always be high_profile.\n    But this can change later to other label types as well.\n\n    Examples:\n    high_profile,advertiser,employee,moderator,moderator_bot,public_figure"
						},
						name: {
							type: "string",
							description: "The string representation of the label."
						}
					}
				},
				ge = {
					$id: "http://com.reddit/schemas/field_definitions/action/action_info.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Informational fields about different actions that occur on Reddit.\n\nThis struct is deliberately left generic, because many of the fields here could be used between\ndifferent types of user actions.\n\nIt is also deliberately named, to avoid conflict with the top level `action` field.",
					definitions: {
						count: {
							type: "integer",
							description: "Generic counter for actions."
						},
						referral_id: {
							type: "string",
							description: "Identifier for correlating inbound traffic to originating share events.\n\n    For example, when a user clicks to copy the permalink of a post, a unique referral ID is generated and appended to\n    the permalink's query params. This identifier is also stored in the share event (e.g. post/click/share_copy) for\n    correlation."
						},
						success: {
							type: "boolean",
							description: "Generic property to track whether this event was fired as a result of a successful or failed action.\n\n    For example, this field is false if a screenview is fired but client displayed an error state."
						},
						reason: {
							type: "string",
							description: "Generic field giving human-readable context for an action."
						},
						pane_name: {
							type: "string",
							description: "Name of the pane for the community mod tools."
						},
						relative_position: {
							type: "integer",
							description: "The relative position of an entity prior to any client-side manipulation.\n\n    For example, search results for posts and subreddits can appear stacked. This is used to report the original rank\n    of the item as provided by the search results, instead of exactly as presented in the UI."
						},
						retried: {
							type: "boolean",
							description: "Determines if an event is a retry of a previous action."
						},
						position: {
							type: "integer",
							description: "The position of an entity being clicked or selected.\n\n    For example, voting on the 5th post in the feed."
						},
						type: {
							type: "string",
							description: "Additional context field for actions.\n\n    There are a large number of possible values for this field.\n    Please check events we currently have in BigQuery for values already in use."
						},
						setting_value: {
							type: "string",
							description: "Generic field used when setting prefs, subreddit rules, etc.\n\n    This field is not intended to contain the state of a setting, but rather what the current action is doing.\n    For example, when adding a blacklisted domain to a subreddit, the domain would go in this field."
						},
						page_type: {
							type: "string",
							description: "Type of page on which a particular action happened on.\n\n    There are a large number of possible values for this field.\n    Please check events we currently have in BigQuery for values already in use."
						}
					}
				},
				ye = {
					$id: "http://com.reddit/schemas/field_definitions/action/expand.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Metadata fields about post expands.",
					definitions: {
						provider: {
							type: "string",
							description: "If we have an expando on the site, who provided it?\n\n    It's either first-party (through us) or through Embedly.\n\n    Examples:\n    reddit,embedly"
						}
					}
				},
				ve = {
					$id: "http://com.reddit/schemas/field_definitions/action/share.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields related to sharing content. *",
					definitions: {
						target: {
							type: "string",
							description: 'The app through which content is being shared.\n\n    The value can change depending on the app_name. On android, it is the package name the user shared to,\n    e.g. "com.instagram.android".'
						},
						id: {
							type: "string",
							description: "The id of the object returned from the external account."
						},
						text: {
							type: "string",
							description: "Represents a text which was sent to share a content."
						}
					}
				},
				be = {
					$id: "http://com.reddit/schemas/field_definitions/action/widget.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Metadata for widgets.",
					definitions: {
						target_subreddit_name: {
							type: "string",
							description: "Subreddit name the click points to."
						},
						target_subreddit_id: {
							type: "string",
							description: "Subreddit fullname the click points to."
						},
						type: {
							type: "string",
							description: "Widget type, e.g. a button or moderator widget."
						}
					}
				},
				we = {
					$id: "http://com.reddit/schemas/field_definitions/ad/programmatic.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Unique identifier for the ad being acted on. */\n    1: optional string id\n    /** The name of this ad set by the advertiser. */\n    2: optional string name\n    /** The outbound URL to direct to when this ad is clicked. */\n    3: optional string click_url\n    /** A list of third party trackers attached to this ad. */\n    4: optional list<string> third_party_trackers\n    /** The status of the ad as configured by the advertiser. */\n    5: optional adtypedefs.ConfiguredStatus configured_status\n    /** The status of the ad as calculated by the backend. */\n    6: optional adtypedefs.EffectiveStatus effective_status\n    /**\n    The approval status of this ad.\n\n    Examples:\n    approval,deferred,pending,rejected,running,suspended,whitelisted\n    */\n    7: optional string admin_approval\n    /** A list of third party pixel URLs to fire when the user clicks on this ad. */\n    8: optional list<string> click_trackers\n    /** A list of classifications for an ad. */\n    9: optional list<adtypedefs.Classification> classifications\n    /**\n    The reason that this ad was rejected.\n\n    There are a large number of possible values for this field.\n    Please check events we currently have in BigQuery for values already in use.\n    */\n    10: optional string rejection_reason\n    /** Expiration date of forced Ad Preview */\n    11: optional typedefs.Timestamp preview_expiry_timestamp\n}\n\n/** Fields related to programmatic ads. *",
					definitions: {
						ad_unit: {
							type: "string",
							description: "Ad description which includes device, size and placement.\n\n    example: 'Desktop 300x250 ATF'"
						},
						count: {
							type: "integer",
							description: "Defaults to 1. Relevant if marketing decides to do ad aggregation."
						},
						partner: {
							type: "string",
							description: "The partner who won the impression."
						},
						type: {
							type: "string",
							description: "Ad type, in house or programmatic.\n\n    Examples:\n    house_ad,programmatic_ad"
						}
					}
				},
				je = {
					$id: "http://com.reddit/schemas/field_definitions/adevent/ad_brand_safety.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the brand safety properties of an ad.",
					definitions: {
						tier: {
							type: "string",
							description: "The brand safety tier of the ad request context.\n\n    Examples:\n    limited,standard,expanded"
						},
						tier_reason_rall: {
							type: "boolean",
							description: "Whether the ad request fell into the tier because subreddit was /r/all."
						},
						tier_reason_sort: {
							type: "boolean",
							description: "Whether the ad request fell into the tier because of its sort."
						},
						tier_reason_whitelist: {
							type: "boolean",
							description: "Whether the ad request fell into the tier because of the subreddit's or feed's whitelist status."
						}
					}
				},
				$e = {
					$id: "http://com.reddit/schemas/field_definitions/adevent/ad_click.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the post click properties of an ad",
					definitions: {
						landing_page_duration: {
							type: "integer",
							description: "The duration in milliseconds a user spends viewing an ad\n\n    The delta in milliseconds between the timestamp when a user clicks an ad and leaves Reddit to the timestamp\n    when a user returns to Reddit. This field should be in milliseconds and be the length an ad was viewed for.\n    It is a delta not a timestamp.\n\n    For example, if a user clicks an ad at time 100 and returns to Reddit at time 2000, then this value would be 1900"
						}
					}
				},
				ke = {
					$id: "http://com.reddit/schemas/field_definitions/adevent/ad_decision.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the properties of any decision to not show an ad.",
					definitions: {
						hide_sort: {
							type: "boolean",
							description: "Whether the current content sort does not support ads."
						},
						hide_source_post: {
							type: "boolean",
							description: "Whether the content of the source post in a post page feed is not safe for ads."
						},
						hide_experiment: {
							type: "boolean",
							description: "Whether the user is in an experiment variant where they shouldn't be shown ads."
						},
						hide_whitelist: {
							type: "boolean",
							description: "Whether the listing has a whitelist status indicating that no ads should be shown."
						},
						hide_other: {
							type: "boolean",
							description: "Other reasons why we might not show ads. Should not be used unless absolutely necessary."
						},
						hide_gold: {
							type: "boolean",
							description: "Whether the user has gold-related product that hides ads."
						},
						hide_mod: {
							type: "boolean",
							description: "Whether the user is a mod and they're in their own subreddit."
						},
						hide_news: {
							type: "boolean",
							description: "Whether the current listing is news where we do not currently show ads."
						}
					}
				},
				xe = {
					$id: "http://com.reddit/schemas/field_definitions/adevent/ad_metadata.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents additional information from the ad that was served to the user",
					definitions: {
						impression_id: {
							type: "string",
							description: "Unique id of an ad impressions."
						}
					}
				},
				qe = {
					$id: "http://com.reddit/schemas/field_definitions/adevent/ad_pixel.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents information about an ad pixel",
					definitions: {
						event_timestamp: {
							type: "number",
							description: "The time when the pixel originally tried to fire. \n\n    This is different than the field called client_timestamp, which is intended to be the point in time at which the v2 event was created. This timestamp may differ because the user action that triggered the pixel to be generated may have occurred when\n    the device was unable to upload the pixel to our server."
						},
						deferred: {
							type: "boolean",
							description: "Boolean indicating whether it was a retry attempt to upload pixel"
						},
						tracking_type: {
							type: "integer",
							description: "Type of pixel (click, impresion, etc). Numeric value to match other ad event tables\n\n    Link enumerating values:\n    https://docs.google.com/spreadsheets/d/1Xni0eoCpB7VR9cfs7Uaku0f32ZrJ1U9OZUYOV2AyGeo/edit#gid=0"
						}
					}
				},
				Pe = {
					$id: "http://com.reddit/schemas/field_definitions/adevent/ad_push.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the properties of any reason to shift the placement of an ad.",
					definitions: {
						direction: {
							type: "string",
							description: "Indicates whether push was due to post above or below the ad.\n\n    Examples:\n    above,below"
						},
						push_keyword: {
							type: "string",
							description: "A keyword that was brand unsafe, causing a push."
						},
						push_whitelist: {
							type: "boolean",
							description: "Whether the adjacent post has a whitelist status indicating that no ads should be shown."
						},
						push_nsfw: {
							type: "boolean",
							description: "Whether the adjacent post is tagged as nsfw."
						},
						push_other: {
							type: "boolean",
							description: "Whether the adjacent post was not ok for some other reason."
						},
						first_ad: {
							type: "boolean",
							description: "Whether the ad being pushed is the first ad in the feed or not."
						}
					}
				},
				Ee = {
					$id: "http://com.reddit/schemas/field_definitions/adevent/ad_request.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the attributes of an ad request.",
					definitions: {
						post_links_below: {
							type: "array",
							description: "List of posts below received (as Thing fullnames) returned from the ad server\n\n    To be used in conjunction with post_links param. List of posts received (as Thing fullnames)\n    returned from the ad server will be the same size as post_links, where idx 0 in this list\n    represents the post below the post in idx 0 of post_links."
						},
						first_chunk: {
							type: "boolean",
							description: "Whether the request to the ad server is for the first chunk of the listing page."
						},
						top_comment_id: {
							type: "string",
							description: "Unique identifier of the top comment when the ad was shown"
						},
						post_links: {
							type: "array",
							description: "List of posts received (as Thing fullnames) returned from the ad server."
						},
						placement: {
							type: "string",
							description: "Ad placement type used in request.\n\n    Examples:\n    feed,sidebars,comments_page,promoted_trend"
						},
						slots: {
							type: "array",
							description: "A list of the ad slots being requested, e.g. [first, second, all_but_first]"
						},
						number_min_distance: {
							type: "integer",
							description: "Minimum distance between ads for the current listing page."
						},
						platform: {
							type: "string",
							description: "Ad platform name used in request.\n\n    Examples:\n    desktop,mobile_web,mobile_native,desktop_legacy,mobile_web_3x,all"
						},
						post_links_above: {
							type: "array",
							description: "List of posts above received (as Thing fullnames) returned from the ad server\n\n    To be used in conjunction with post_links param. List of posts received (as Thing fullnames)\n    returned from the ad server will be the same size as post_links, where idx 0 in this list\n    represents the post above the post in idx 0 of post_links."
						}
					}
				},
				Te = {
					$id: "http://com.reddit/schemas/field_definitions/admin/admin.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "A reddit-employeed administrator account.",
					definitions: {
						id: {
							type: "string",
							description: "Required identifier for this admin."
						},
						name: {
							type: "string",
							description: "Username of the admin.\n\n    Note that this field is not stripped in BigQuery as we consider employee usernames to be fine to\n    show to other employees."
						}
					}
				},
				Se = {
					$id: "http://com.reddit/schemas/field_definitions/admin_action/admin_action.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Information regarding AE admin actions.",
					definitions: {
						takedown_id: {
							type: "string",
							description: "Takedown ID.\n\n    If the removal is done via the takedown queue, and has a takedown ID,\n    this field will be populated."
						},
						password_dump_id: {
							type: "string",
							description: "ID for the specific password dump.\n\n    This ID will be in theex: 3__018-08-23_12:23:05_UTC\n\n    The first number is a counter indicating which dump this is that we have\n    received overall, and the latter part is a timestamp of when the dump was\n    received.",
							pattern: " <Dump number base 10>__%Y-%m-%d_%H:%M:%S_%Z"
						},
						template_type: {
							type: "string",
							description: "Different message types sent via reddar.\n\n    Values and their definitions:\n        * yact - taken action - (default)\n        * aoa - abuse of admins\n        * aoa2 - abuse of admins\n        * nact - no action taken - (default)\n        * nv - no content violation\n        * nsi - need specific info\n        * atc - already taken care of\n        * mrs - mods run subs\n        * grd_def - general removal demand (including defamation)\n        * blk - harassment\n        * 3p - 3rd party report\n        * grd_dmca - general removal demand (requires dmca)\n        * mp - marketplace\n        * sh - self-harm\n        * tof - turn off feature\n        * yact2 - ban evasion - taken action - (default)\n        * nact2 - no action taken (ban evasion) - (default)\n        * nmr - need moderator report\n        * saa - suspension appeal approved - (default)\n        * naa - neuter appeal approved\n        * sad - suspension appeal denied - (default)\n        * aoa - abuse of admins extend suspension\n        * aoa2 - abuse of admins suspend\n    *"
						},
						target_team_id: {
							type: "integer",
							description: "The numerical team ID which is having access changed, represents a team based on teams from Okta.\n    *"
						},
						process_notes: {
							type: "string",
							description: "Broad description of an action."
						},
						timeout_duration: {
							type: "integer",
							description: "For timeout action only: this field represents the number of days for a\n    temporary timeout."
						},
						removal_job_id: {
							type: "string",
							description: "ID for a removal job in Content Action Service.\n\n    This field is a removal job's reddit_id. Prefix 'removal_job__'\n    followed by base36 value.\n    For example: 'removal_job__23b'"
						},
						removal_type: {
							type: "string",
							description: "Type of removal, e.g. overwriting the post, marked as spam, etc\n\n    Examples:\n    overwrite,mark_as_spam,mod_remove_from_subreddit\n    admin_remove_from_subreddit,mod_approved"
						},
						restoration_job_id: {
							type: "string",
							description: "ID for a restoration job in Content Action Service.\n\n    This field is a restoration job's reddit_id. Prefix 'restoration_job__'\n    followed by base36 value.\n    For example: 'restoration_job__23b'"
						},
						number_password_dump_credentials: {
							type: "integer",
							description: "Number of credentials contained in this password dump."
						},
						notes: {
							type: "string",
							description: "Notes by an admin giving context for an action."
						},
						removal_is_restorable: {
							type: "boolean",
							description: "Is the removal of the content restorable in the future?\n\n    This tracks if content being removed can be restored, meaning if we\n    permanently delete the media assets or not, and if we save the comment/post\n    information anywhere."
						}
					}
				},
				Ae = {
					$id: "http://com.reddit/schemas/field_definitions/admin_action/admin_team.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Reported url extracted from ticket. Can be valid reddit url or an external url.\n    **/\n    1: optional string reported_url\n    /**\n    Content url associated with reported_url. Can be blank in case we cannot find associated content.\n    */\n    2: optional string content_url\n    /**\n    The reddit ID of content associated with this ticket content.\n    Can be empty in case reported url doesn't resolve to valid reddit content.\n    */\n    3: optional typedefs.Fullname target_id\n    /**\n    Type of reddit content.\n\n    Examples:\n    post,comment,message\n    */\n    4: optional typedefs.StringLower target_type\n    /**\n    ID given by google csai / microsoft photodna to track the event.\n\n    examples:\n    photodna: 1_photodna_a0e3d02b-1a0a-4b38-827f-764acd288c25\n    google_csai: 17986187222943498570_1534786098\n    */\n    5: optional string tracking_id\n    /**\n    Populate information about if post/comment/third_party_link was already removed by a moderator.\n\n    Reflects values defined in admin-service admin.thrift RemovedByType.\n\n    Examples:\n    null_value,copyright_takedown,content_takedown,author,moderator\n    community_ops,anti_evil_ops,reddit,deleted,automod_filter\n    */\n    6: optional string removed_by_user_type\n    /**\n    The type of content that is reported.\n\n    Reflects values defined in admin-service admin.thrift ContentType.\n\n    Examples:\n    image,video,post,comment,third_party_link,thumbnail,preview,subreddit_icon\n    **/\n    7: optional typedefs.StringLower content_type\n    /** User who deleted the content. Fullname of user. */\n    8: optional typedefs.Fullname removed_by_user_id\n    /** Subreddit id where content was reported. Fullname of subreddt. */\n    9: optional typedefs.Fullname subreddit_id\n    /**\n    The identifier for a reddar queue from where ticket is moved. i.e. Minor Sexualization\n\n    This field is a reddar queue's reddit_id. Prefix 'queues__'\n    followed by base36 value.\n    For example: 'queues__23b'\n    */\n    10: optional string original_queue_id\n    /**\n    The identifier for a reddar queue where ticket is moved. i.e. CP internal\n\n    This field is a reddar queue's reddit_id. Prefix 'queues__'\n    followed by base36 value.\n    For example: 'queues__23b'\n    */\n    11: optional string dest_queue_id\n    /** Indicates if reported content is confirmed CSAI or not. */\n    12: optional bool confirmed_csai\n    /** Indicates if content is reported to ncmec. If not null, then the value is ncmec_id. */\n    13: optional i64 ncmec_report_number\n    /** Full name of user who reported content. */\n    14: optional typedefs.Fullname reporter_id\n    /**\n    Permalink of post/comment/message url. Can be valid reddit url or an external url.\n    **/\n    15: optional string permalink\n}\n\n/**\nInformation regarding reroute rules in Reddar.\n\nA reroute rule defines how to reroute tickets from the original queue to a new queue\nwhen tickets match some specific reroute contitions.\n*/\nstruct RerouteRule{\n    /**\n    Required identifier for a reddar routing set.\n\n    This field is a reddar routing set's reddit_id. Prefix 'routing_sets__'\n    followed by base36 value.\n    For example: 'routing_sets__3a'\n    */\n    1: optional string id\n    /**\n    Type of tickets the routing set works on.\n\n    There are a large number of possible values for this field.\n    Please check events we currently have in BigQuery for values already in use.\n    */\n    2: optional typedefs.StringLower ticket_type\n    /**\n    Priority of the routing set when multiple routing sets match a ticket.\n\n    A lower number means higher priority.\n    */\n    3: optional i32 priority\n    /** ID of the queue the routing set will route tickets to. */\n    4: optional string target_queue_id\n}\n\n/** Information regarding queues in Reddar. */\nstruct ReddarQueue{\n    /**\n    The identifier for a reddar queue.\n\n    This field is a reddar queue's reddit_id. Prefix 'queues__'\n    followed by base36 value.\n    For example: 'queues__23b'\n    */\n    1: optional typedefs.StringLower id\n    /**\n    Type of a reddar queue.\n\n    Examples:\n    private_message_abuse,harassment,violence,ban_evasion,csai\n    appeal,legal_export,login_bot,configurable,photodna\n    bulk_action_job,delete_media,live_stream,terrorism\n    dmca,user_data_request,geo_block\n    */\n    2: optional typedefs.StringLower type\n    /**\n    Type of tickets a reddar queue contains.\n\n    There are a large number of possible values for this field.\n    Please check events we currently have in BigQuery for values already in use.\n    */\n    3: optional typedefs.StringLower ticket_type\n    /**\n    The group a reddar queue belongs to.\n\n    Examples:\n    anti_evil,ae_ops,legal_ops,community,swat,chat,reddar_tools,live_stream,award\n    */\n    4: optional typedefs.StringLower group_type\n    /** The human readable freeform text name of the queue. */\n    5: optional typedefs.StringLower name\n    /**\n    The level of priority the queue has.\n    P0 Blocker: Drop everything, this must be completed immediately.\n    P1 Critical: This is complex/important and must be done in a rush.\n    P2 Major: This is complex/important and has a fixed deadline.\n    P3 Minor: This needs to get done, but is not very time sensitive.\n\n    Examples:\n    p0,p1,p2,p3\n    */\n    6: optional typedefs.StringLower priority\n    /*\n    The numerical team ID which has access, represents a team based on teams from Okta.\n    */\n    // 7: optional i32 team_id DEPRECATED\n    /*\n    The human readable name of the team.\n    */\n    // 8: optional typedefs.StringLower team_name DEPRECATED\n    /*\n    The type of access granted or removed.\n\n    Examples:\n    readonly,write,restricted\n    */\n    // 9: optional typedefs.StringLower access_type DEPRECATED\n}\n\n/** Information regarding Admin teams at reddit and what kind of access they have.",
					definitions: {
						id: {
							type: "integer",
							description: "The numerical team ID which has access, represents a team based on teams from Okta."
						},
						name: {
							type: "string",
							description: "The human readable name of the team."
						},
						access_type: {
							type: "string",
							description: "The type of access granted or removed.\n\n    Examples:\n    readonly,write,restricted"
						}
					}
				},
				Re = {
					$id: "http://com.reddit/schemas/field_definitions/admin_action/c_s_a_i_media.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Information regarding google csai / microsoft photodna.",
					definitions: {
						media_url: {
							type: "string",
							description: "Url of the video/image being checked.\n    Can be reddit hosted or external\n\n    examples:\n    photodna: https://i.imgur.com/aeulpB4.png\n    photodna: https://i.redd.it/i85evufd5us11.jpg\n    google_csai: https://v.redd.it/kvyioqwybxs11"
						},
						match: {
							type: "boolean",
							description: "True if there is a match for the media, indicating confirmation of CP."
						},
						retry_media_url: {
							type: "string",
							description: "Retry url sent to photodna."
						},
						violation_source: {
							type: "string",
							description: "Lowercase source of where the violation has come from\n\n    example: 'ncmec'"
						},
						origin_queue_name: {
							type: "string",
							description: "Name of queue the media is being read from."
						},
						violation_types: {
							type: "array",
							description: "List of violation types as provided by csai/photodna.\n\n    example: ['A1', 'A2']"
						},
						tracking_id: {
							type: "string",
							description: "ID given by google csai / microsoft photodna to track the event.\n\n    examples:\n\n    photodna: 1_photodna_a0e3d02b-1a0a-4b38-827f-764acd288c25\n    google_csai: 17986187222943498570_1534786098"
						},
						error_message: {
							type: "string",
							description: "Error message provided by 3rd party if response is an error."
						},
						error_code: {
							type: "integer",
							description: "Error code provided by 3rd party if response is an error."
						},
						destination_queue_name: {
							type: "string",
							description: "Name of queue the media is being sent to."
						}
					}
				},
				De = {
					$id: "http://com.reddit/schemas/field_definitions/admin_action/n_c_m_e_c_report.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Information regarding NCMEC reports, associated with content identification and takedown.",
					definitions: {
						content_publicly_available: {
							type: "boolean",
							description: "Whether the file was publicly accessible to online users."
						},
						account_registration_proxy: {
							type: "boolean",
							description: "Indicates if there is proxy attached to registration ip."
						},
						email_verified: {
							type: "boolean",
							description: "Indicates if Account email is verified."
						},
						permalink: {
							type: "string",
							description: "Permalink of content."
						},
						file_viewed_by_admin: {
							type: "boolean",
							description: "Whether the reporting company viewed the file being reported to NCMEC."
						},
						classification_type: {
							type: "string",
							description: "A categorization from the ESP-designated categorization scale.\n\n    https://exttest.cybertip.org/ispws/documentation/#xml-file-details\n    <industryClassification>\n\n    Examples:\n    a1,a2,b1,b2"
						},
						post_id: {
							type: "string",
							description: "Fullname of reddit post."
						},
						is_live_stream: {
							type: "boolean",
							description: "Indicates whether content is a live stream video or of other type."
						},
						email_verified_timestamp: {
							type: "number",
							description: "Timestamp when account email was verified."
						},
						user_id: {
							type: "string",
							description: "Account reddit id associated with report."
						},
						report_added_note: {
							type: "string",
							description: "Optionally added by reddar admin/legalOps when submitting ncmec request."
						},
						id: {
							type: "integer",
							description: "Id of report submitted to NCMEC\n\n    https://exttest.cybertip.org/ispws/documentation/#report-response\n    <reportId>"
						},
						content_url: {
							type: "string",
							description: "Reported url extracted from ticket. Can be valid reddit url or an external url."
						},
						filename: {
							type: "string",
							description: "The name of the file(s) associated with the incident."
						},
						account_created_timestamp: {
							type: "number",
							description: "Timestamp when account was created."
						},
						post_possible_proxy: {
							type: "boolean",
							description: "Indicates whether there was ip attached when the post was created."
						},
						post_added_note: {
							type: "string",
							description: "Optionally added by reddar admin/legalOps when submitting ncmec request."
						},
						content_is_reddit_hosted: {
							type: "boolean",
							description: "Indicates whether content is reddit hosted or third party."
						},
						account_added_note: {
							type: "string",
							description: "Notes added by content reviewer. Optionally added by reddar Admin/LegalOps when submitting ncmec report."
						}
					}
				},
				Ie = {
					$id: "http://com.reddit/schemas/field_definitions/afd_second/a_f_d_second.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represent the actions of Second, April Fools 2021",
					definitions: {
						image_set_name: {
							type: "string",
							description: "Name of the set that the images belong to."
						},
						vote_counts: {
							type: "array",
							description: "Array of vote counts in the same order as image_ids."
						},
						image_id: {
							type: "integer",
							description: "Id of the image being acted on."
						},
						winning_image_name: {
							type: "string",
							description: "Name of the image that won the round."
						},
						image_ranks: {
							type: "array",
							description: "Array of image rank in the same order as image_ids."
						},
						round_id: {
							type: "integer",
							description: "Id of a round."
						},
						round_end_timestamp: {
							type: "number",
							description: "End time of a round."
						},
						image_ids: {
							type: "array",
							description: "Array of image ids present in the round.\n\n    The ordering of the items in this array is used to order the other array fields."
						},
						image_name: {
							type: "string",
							description: "Name of the image being acted on."
						},
						round_start_timestamp: {
							type: "number",
							description: "Start time of a round."
						},
						image_set_id: {
							type: "integer",
							description: "Id of image set."
						},
						image_names: {
							type: "array",
							description: "Array of image names present in the round in the same order as image_ids."
						},
						winning_image_id: {
							type: "integer",
							description: "Id of the image that won the round."
						}
					}
				},
				Fe = {
					$id: "http://com.reddit/schemas/field_definitions/announcement/announcement.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "An announcement, shown in the top carousel conditionally on all platforms.",
					definitions: {
						id: {
							type: "string",
							description: "Required alphanumeric identifier for the announcement."
						},
						title: {
							type: "string",
							description: "The title of the announcement."
						},
						body: {
							type: "string",
							description: "The main content of the announcement."
						}
					}
				},
				Oe = {
					$id: "http://com.reddit/schemas/field_definitions/app_icons/app_icon.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Alternate App Icons",
					definitions: {
						id: {
							type: "string",
							description: "the id of the icon"
						},
						name: {
							type: "string",
							description: "name of the icon"
						},
						is_premium: {
							type: "boolean",
							description: "boolean  true if the icon is premium-only"
						},
						prev_icon_id: {
							type: "string",
							description: "id of the previously selected icon, in case this is a modification event"
						}
					}
				},
				Ce = {
					$id: "http://com.reddit/schemas/field_definitions/atc/a_t_c.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "An Air Traffic Controller event.",
					definitions: {
						decision_channel: {
							type: "string",
							description: "The send channel for this decision.\n\n    Examples:\n    email,push,inbox_only,all"
						},
						decision_value: {
							type: "string",
							description: "The action chosen for this decision.\n\n    Examples:\n    send,no_send,requeue"
						},
						decision_reason_detail: {
							type: "string",
							description: "More detail about decision_reason."
						},
						decision_reason: {
							type: "string",
							description: "The budget responsible for the decision_value.\n\n    Experimental groups:\n    static_daily_cap,static_weekly_cap,rolling_window_cap"
						},
						budget_remaining: {
							type: "integer",
							description: "The amount of budget remaining in the current window.\n\n    For example, if the budget is static weekly with a daily cap,\n    this number will be the amount remaining in either the daily\n    budget or the weekly budget, whichever is lower."
						},
						notification_group: {
							type: "string",
							description: "The general group of this message type.\n\n    ATC performs rate limiting by group based on mailroom MessageType.\n\n    Trigger/queue groups:\n    transactional,non_transactional,opt_in,other"
						},
						pn_index: {
							type: "integer",
							description: "The index number of this request within the budget period.\n\n    The first ATC request in a budget window receives pn_index 1,\n    the second receives pn_index 2, etc. The pn_index is reset to\n    1 after the budget window expires."
						}
					}
				},
				Ue = {
					$id: "http://com.reddit/schemas/field_definitions/audit/reddar_audit.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "A struct representing a Reddar audit.",
					definitions: {
						included_range_end_timestamp: {
							type: "number",
							description: "End timestamp of the date range of the audit."
						},
						included_range_start_timestamp: {
							type: "number",
							description: "Start timestamp of the date range of the audit."
						},
						ticket_ids: {
							type: "array",
							description: "List of Reddar IDs of the tickets included in the audit."
						},
						percent_tickets_included: {
							type: "number",
							description: "Percent of tickets included in the audit."
						},
						included_agent_ids: {
							type: "array",
							description: "List of thing IDs of the agents included in the audit."
						},
						included_queues: {
							type: "array",
							description: "List of Reddar IDs of the queues included in the audit."
						},
						auditor_id: {
							type: "string",
							description: "Thing ID of the auditor."
						},
						id: {
							type: "string",
							description: "Reddar ID of the audit."
						}
					}
				},
				ze = {
					$id: "http://com.reddit/schemas/field_definitions/audit/reddar_audit_ticket.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "A struct representing a Reddar audit ticket.",
					definitions: {
						ticket_id: {
							type: "string",
							description: "Reddar ID of the ticket associated with the audit ticket."
						},
						qa_content_action: {
							type: "string",
							description: "Rating of content action taken by the agent."
						},
						qa_policy: {
							type: "string",
							description: "Rating of policy application by the agent."
						},
						qa_message: {
							type: "string",
							description: "Rating of message sent by the agent."
						},
						audit_id: {
							type: "string",
							description: "Reddar ID of the audit the audit ticket belongs to."
						},
						qa_user_action: {
							type: "string",
							description: "Rating of user action taken by the agent."
						},
						auditor_id: {
							type: "string",
							description: "Thing ID of the auditor."
						},
						id: {
							type: "string",
							description: "Reddar ID of the audit ticket."
						},
						agent_id: {
							type: "string",
							description: "Thing ID of the agent who actioned the associated ticket."
						}
					}
				},
				Le = {
					$id: "http://com.reddit/schemas/field_definitions/banner/banner.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "A banner, either in web or mobile platforms.",
					definitions: {
						id: {
							type: "string",
							description: 'Required identifier for the banner, e.g. "nfl_gameday_survey".'
						},
						button_text: {
							type: "string",
							description: 'Banner button interacted with, e.g. for survey banners.\n\n    Example values include "yes" or "dismiss"'
						}
					}
				},
				Ne = {
					$id: "http://com.reddit/schemas/field_definitions/bot_detection/bot_detection.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Model for bot detection.",
					definitions: {
						provider: {
							type: "string",
							description: "Name of the provider who supplied bot detection services.\n\n    Examples:\n    recaptcha"
						},
						website_action: {
							type: "string",
							description: "Name of the website action that was protected by a bot detection service.\n\n    Examples:\n    page_view,comment,login"
						},
						recaptcha_score: {
							type: "number",
							description: "reCaptcha assessment score."
						}
					}
				},
				Me = {
					$id: "http://com.reddit/schemas/field_definitions/bulk_action_job/bulk_action_job.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Model for Reddar bulk action jobs.",
					definitions: {
						requires_manual_review: {
							type: "boolean",
							description: "A boolean flag that discriminates whether or not the job was flagged for manual review."
						},
						targets: {
							type: "array",
							description: "List of things we are taking action on."
						},
						target_count: {
							type: "integer",
							description: 'An integer giving the number of "things" expected to be actioned by the bulk action job.'
						},
						reason: {
							type: "string",
							description: "A string giving the reason for the bulk action job."
						},
						user_id: {
							type: "string",
							description: "Account reddit id associated with report."
						},
						id: {
							type: "string",
							description: "Required identifier for the job.\n\n    This field is tracked as base36."
						},
						bigquery_job_id: {
							type: "string",
							description: "For jobs created via the BigQuery connector, the unique id of the related entry in BigQuery.\n\n    If the bulk action is created manually by uploading a CSV, the bigquery_job_id field is\n    left empty. If the bulk action job is created through the BigQuery connector (i.e. the job\n    was automatically created by an integrated ETL from the SWAT team), the bigquery_job_id is a\n    string storing a back reference to it\n\n    This field is tracked as UUID."
						},
						status: {
							type: "string",
							description: "A string giving the status of the bulk action job.\n\n    Examples:\n    error,created,pending,running,complete,stopped"
						},
						actions: {
							type: "array",
							description: "A list of (lowercase) strings giving the actions that the bulk action job is expected to perform.\n\n    E.g. ['ap__suspend_temporarily_3day', 'ap__mark_for_alt_tracking']"
						},
						target_type: {
							type: "string",
							description: "A string giving the type of the things expected to be actioned by the bulk action job.\n\n    Examples:\n    post,comment,message,account,subreddit,livethread"
						},
						target_limit: {
							type: "integer",
							description: "An integer giving the current limit of targets that can be actioned without a maunual review."
						}
					}
				},
				He = {
					$id: "http://com.reddit/schemas/field_definitions/bulk_messenger/bulk_messenger.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Information regarding Bulk Messenger job.",
					definitions: {
						add_admin_note: {
							type: "boolean",
							description: "message should attach admin note or not\n\n    Examples:\n    true | false"
						},
						subject: {
							type: "string",
							description: "plaintext subject of message\n\n    Examples: \n    market survey"
						},
						recipient_count: {
							type: "integer",
							description: "total number of users (or communities in recipient list)\n\n    Examples:\n    1000"
						},
						sender_id: {
							type: "string",
							description: "user or subreddit who is the sender of bulk messenger job\n    user name should be converted to user_id\n\n    Examples:\n    user_id or subreddit_id"
						},
						give_coins: {
							type: "integer",
							description: "sender could award coins in message \n\n    Examples:\n    100"
						},
						distinguished: {
							type: "boolean",
							description: "sender is a distinguished user or not\n\n    Examples:\n    true | false"
						},
						message_type: {
							type: "string",
							description: "type of the message\n\n    Examples:\n    survey,newsletter,mod guidelines, or other"
						},
						message_body: {
							type: "string",
							description: "body of the message, might be in markdown format\n\n    Examples:\n    hello, username"
						},
						add_to_sent_box: {
							type: "boolean",
							description: "message should be added to sender's sent box\n\n    Examples:\n    true | false"
						},
						repliable: {
							type: "boolean",
							description: "recipient should replay this message or not\n\n    Examples:\n    true | false"
						},
						recipient_type: {
							type: "string",
							description: "type of recipient\n\n    Examples:\n    user or subreddit"
						},
						admin_note: {
							type: "string",
							description: "context of admin note attached by sender\n    \n    Examples:\n    this is a admin note"
						}
					}
				},
				Be = {
					$id: "http://com.reddit/schemas/field_definitions/carousel/carousel.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "A carousel is a horizontally scrolling content view.\n\nMost carousels are used to display posts and subreddits for discovery of new content.",
					definitions: {
						id: {
							type: "string",
							description: "Required identifier for the carousel. \n    \n    Note that these are not thing ids, so they aren't Fullnames."
						},
						type: {
							type: "string",
							description: "String that identifies the carousel's purpose and content.\n\n    Roughly equivalent to an experiment name."
						}
					}
				},
				We = {
					$id: "http://com.reddit/schemas/field_definitions/category_header/category_header.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "The header used for certain categories on search results.",
					definitions: {
						id: {
							type: "string",
							description: "Unique id for category."
						},
						name: {
							type: "string",
							description: "Unique name for category."
						},
						subreddit_ids: {
							type: "array",
							description: "A list of ids of the subreddits in the header."
						},
						subreddit_names: {
							type: "array",
							description: "A list of ids of the subreddits in the header."
						}
					}
				},
				Ve = {
					$id: "http://com.reddit/schemas/field_definitions/chat/chat.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields about live user chat.",
					definitions: {
						invitation_timestamp: {
							type: "number",
							description: "Timestamp when the user was invited."
						},
						message_length: {
							type: "integer",
							description: "The length of the message body text."
						},
						channel_name: {
							type: "string",
							description: "Name of group or 1:1 channel.\n\n    Note! The field will be protected, with the data fields being part of the blacklist,\n    and only accessible in SWATs restricted data project.\n\n    Values:\n        * for 1:1 channel, this information leaks user names (protected by SWAT team)\n        * for group channel, this will be a channel name"
						},
						reported_user_id: {
							type: "string",
							description: "The user_id of the member being reported."
						},
						invitation_preview_type: {
							type: "string",
							description: "Type of first invitation message, e.g. text or snoomoji.\n\n    Examples:\n    text,image,post,snoomoji,gif,video"
						},
						number_blocked_users: {
							type: "integer",
							description: "The number of members who are currently blocked."
						},
						invitation_id: {
							type: "string",
							description: "Invitation id for the channel."
						},
						recipient_user_id: {
							type: "string",
							description: "The recipient of the chat."
						},
						sender_user_id: {
							type: "string",
							description: "The user_id of the sender of a message."
						},
						number_pending_invites: {
							type: "integer",
							description: "The number of invites the user has not responded to."
						},
						image_upload_method: {
							type: "string",
							description: "Method for image uploads, either via gallery or camera.\n\n    Examples:\n    gallery,camera"
						},
						message_type: {
							type: "string",
							description: "Type of message, e.g. text or snoomoji.\n\n    Examples:\n    text,image,post,snoomoji,gif,video"
						},
						message_body: {
							type: "string",
							description: "Text of message in group and 1:1 channel.\n\n    Note! The field will be protected, with the data fields being part of the blacklist,\n    and only accessible in SWATs restricted data project."
						},
						number_unreads: {
							type: "integer",
							description: "The number of unread messages in a channel."
						},
						invitation_type: {
							type: "string",
							description: "Type of channel the user being invited, either group or 1:1 chat.\n\n    Values:\n        * direct - private 1:1 chat\n        * group - private group chat\n        * room_private - subreddit private chat\n        * room_public - subreddit public chat\n\n    Examples:\n    direct,group,room_public,room_private"
						},
						is_member: {
							type: "boolean",
							description: "Did this user already join this chat?"
						},
						message_id: {
							type: "integer",
							description: "Message id provided by SendBird."
						},
						id: {
							type: "string",
							description: "Channel id provided from our chat service, of the form:\n    CHAT_{sendbird_channel_id}_{message_id}\n    Example value:\n    CHAT_sendbird_group_channel_11652835_3ebbc9b3692c3cf399e970f66f720712a08145ce_132118214"
						},
						shown_history: {
							type: "boolean",
							description: "Were there already messages in the room when the user joined?"
						},
						number_members: {
							type: "integer",
							description: "The number of members in a channel."
						},
						request_name: {
							type: "string",
							description: "Url if available, otherwise a method name, used for measuring web request roundtrip time.\n\n    This field is used for debugging. As such, we allow all ascii characters."
						},
						number_channels: {
							type: "integer",
							description: "The number of channels that are in the inbox."
						},
						existing_channel: {
							type: "boolean",
							description: "Is user being added to an existing channel (vs a new channel)?"
						},
						members: {
							type: "array",
							description: "Array of members in a channel."
						},
						type: {
							type: "string",
							description: "Identifies if the chat is with a group or 1:1 chat.\n\n    Values:\n        * direct - private 1:1 chat\n        * group - private group chat\n        * room_private - subreddit private chat\n        * room_public - subreddit public chat\n\n    Examples:\n    direct,group,room_public,room_private"
						},
						user_added_method: {
							type: "string",
							description: "Method for how users were added, either through contacts or search.\n\n    Examples:\n    contacts,search"
						},
						blocked_user_id: {
							type: "string",
							description: "User id of member who is being blocked."
						},
						report_reason: {
							type: "string",
							description: "A report reason from a pre-selected set of options."
						}
					}
				},
				Qe = {
					$id: "http://com.reddit/schemas/field_definitions/chat/chat_home_feed_boosting.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields about chat home feed boosting event.",
					definitions: {
						subreddit_ids: {
							type: "array",
							description: "List of subreddit IDs being boosted."
						},
						post_ids: {
							type: "array",
							description: "List of post IDs being boosted."
						},
						positions: {
							type: "array",
							description: "Corresponding list of positions that the post_ids were boosted."
						},
						original_positions: {
							type: "array",
							description: "Corresponding list of original positions that the post_ids were boosted."
						}
					}
				},
				Ge = {
					$id: "http://com.reddit/schemas/field_definitions/comment_draft/comment_draft.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Text of a comment before it is submitted.",
					definitions: {
						body_text: {
							type: "string",
							description: "The text of the drafted comment."
						}
					}
				},
				Je = {
					$id: "http://com.reddit/schemas/components/common.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields that apply to all event types.",
					definitions: {
						source: {
							type: "string",
							description: 'Event topics are derived by combining source/action/noun.\n    As such, "source" should be treated as the category. For client-side events it should be the particular\n    UI element acted upon. e.g., "inbox", "post".',
							pattern: "^[_a-z0-9]+$"
						},
						action: {
							type: "string",
							description: 'What action/operation was performed in this event, e.g., "click", "view".\n    Values here are always in the present tense, e.g. "click" not "clicked".\n    format:^[_a-z0-9]+$\n    skip_validation:False'
						},
						noun: {
							type: "string",
							description: 'What component was acted upon by the action, e.g., "user", "share".\n    format:^[_a-z0-9]+$\n    skip_validation:False'
						},
						endpoint_timestamp: {
							type: "number",
							description: "Timestamp (epoch ms) on the server that received the message.\n    This field is populated by event collectors and should *not* be populated when sending in events.\n"
						},
						client_timestamp: {
							type: "number",
							description: "Timestamp (epoch ms) on the client that created the message."
						},
						uuid: {
							type: "string",
							description: "Globally unique identifier for this event."
						},
						utc_offset: {
							type: "number",
							description: "UTC offset in hours corresponding to the client's timezone.\n    Does not take daylight savings time into account. This field is a double because timezones may not\n    necessarily be a whole number of hours.\n    range:-12 - 14\n    skip_validation:False"
						},
						correlation_id: {
							type: "string",
							description: "Correlation IDs are used to easily track down related events.\n    Each related event should send the same correlation id, allowing easy retrieval of those events in\n    analysis. An example of this would be when you want to send a screenview and some timing metrics related\n    to it. You can send a single screenview with correlation_id x, then send events for each timer\n    (using the timer field at index 124) using the same correlation id.\n    This ID should be of a uuid format and each should be randomly generated.\n    skip_validation:False"
						},
						screenview_id: {
							type: "string",
							description: "Screenview IDs are used to easily track down related screen|view and screen|leave.\n    Each related event should send the same view id, allowing easy retrieval of those events in\n    analysis.\n    This ID should be of a uuid format and each should be randomly generated.\n    skip_validation:False"
						},
						user_legacy_id: {
							type: "string",
							description: 'Old format 32 digit user id e.g. "00000000000000000000000015486003".\n    This value is populated by Midas, our data enrichment layer. Clients should not set this field;\n    any value provided by clients will be overwritten.\n    format:^[0-9]{32}$'
						},
						create_request_timestamp: {
							type: "number",
							description: "Time at which we sent the event to BigQuery for writing.\n    This field, like all midas-enriched fields, should never be touched directly by clients. It will be\n    automatically populated by our events pipeline."
						},
						event_hmac_key: {
							type: "string",
							description: 'Name of the service the event came from, e.g., "Desktop2x3", "RedditAppiOS2"\n    format:^[a-zA-Z0-9]*$'
						},
						batch_load_id: {
							type: "string",
							description: "ID that identifies which batch load into BigQuery this event is written as part of.\n    This field is used to ensure that data is loaded only once into BigQuery.\n    format:.*"
						}
					}
				},
				Ye = {
					$id: "http://com.reddit/schemas/field_definitions/content/comment.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the characteristics we would send as part of a comment.",
					definitions: {
						parent_id: {
							type: "string",
							description: "Parent comment. Will be unset for top-level comments."
						},
						post_id: {
							type: "string",
							description: "Parent post's identifier."
						},
						content_type: {
							type: "string",
							description: "The types of content present in this comment.\n\n    Nested string (comma-separated) where each of the content types are listed per comment submit.\n    Example of values inside the list: text,snoomoji,gif"
						},
						score: {
							type: "integer",
							description: "Vote score for the comment."
						},
						upvote_ratio: {
							type: "number",
							description: "Number of upvotes divided by total number of votes for the comment.\n\n    Note that raw upvote/downvote scores are not exposed to clients due to\n    security / privacy / anti-evil reasons."
						},
						id: {
							type: "string",
							description: "Unique identifier of the comment."
						},
						created_timestamp: {
							type: "number",
							description: "Timestamp of when the comment was created."
						},
						depth: {
							type: "integer",
							description: "The depth of the comment in the comment tree."
						},
						author_id: {
							type: "string",
							description: "Author of the comment."
						},
						body_text: {
							type: "string",
							description: "Content of the comment in markdown."
						},
						type: {
							type: "string",
							description: "The type of comment.\n\n    Values and their definitions:\n        * comment: a traditional comment\n        * chat: a comment submitted to a chat post"
						},
						number_gildings: {
							type: "integer",
							description: "How much gold the comment has received."
						}
					}
				},
				Ke = {
					$id: "http://com.reddit/schemas/field_definitions/content/comment_composer.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents fields specific to the comment creation form.",
					definitions: {
						editor_mode: {
							type: "string",
							description: "Which mode the editor is in.\n\n    Examples:\n    rte,markdown"
						}
					}
				},
				Ze = {
					$id: "http://com.reddit/schemas/field_definitions/content/edit.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Details of an edit made by a user to a piece of content.",
					definitions: {
						previous_body_text: {
							type: "string",
							description: "The body text of the content before the current user edit was performed.\n    This field is used for both post and comment edits."
						}
					}
				},
				Xe = {
					$id: "http://com.reddit/schemas/field_definitions/content/gallery.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents a Media Gallery post, which collects many Media objects.",
					definitions: {
						num_videos: {
							type: "integer",
							description: "Number of videos in the gallery."
						},
						num_images: {
							type: "integer",
							description: "Number of images in the gallery."
						},
						id: {
							type: "string",
							description: "The id for the gallery."
						},
						media_ids: {
							type: "array",
							description: "Array of media ids in the gallery."
						},
						num_items: {
							type: "integer",
							description: "Number of media assets in the gallery."
						},
						position: {
							type: "integer",
							description: "Position of the media within the gallery.\n\n    Number that represents position of the media within the gallery that is in view and/or interacted with."
						}
					}
				},
				et = {
					$id: "http://com.reddit/schemas/field_definitions/content/listing.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the characteristics we would send as part of a listing page.",
					definitions: {
						max_rank: {
							type: "integer",
							description: "The maximum rank of the sort result."
						},
						source: {
							type: "string",
							description: "What type of listing this is.\n\n    Examples:\n    home,popular,all,subreddit,original_content,post_detail\n    *"
						},
						aggregator: {
							type: "string",
							description: "Describes how a listing is aggregated.\n\n    Examples:\n    single_agg"
						},
						min_rank: {
							type: "integer",
							description: "The offset used in the sort result."
						},
						cursor: {
							type: "string",
							description: "Cursor passed in by request in listing service."
						},
						old_sort: {
							type: "string",
							description: "The type of sort that a listing previously had if changed.\n\n    Examples:\n    hot,new,rising,top,controversial,gilded,wiki,promoted,best,chat\n    confidence,qa,old,live,random,relevance,comments,timestamp,score,upvotes"
						},
						links: {
							type: "array",
							description: "List of all of the Thing fullnames included in the listing (in order)"
						},
						sort_time_filter: {
							type: "string",
							description: "Time filter, if present, that is applied to a sort.\n\n    Examples:\n    hour,day,week,month,year,all"
						},
						metadata: {
							type: "string",
							description: "Extra metadata to be used for listing related things."
						},
						depth: {
							type: "integer",
							description: "The depth of a comment in a listing."
						},
						length: {
							type: "integer",
							description: "Number of links present in the listing."
						},
						geo_filter: {
							type: "string",
							description: "Geopopular filter applied to the listing."
						},
						sort: {
							type: "string",
							description: "The type of sort that a listing page is loaded with.\n\n    Examples:\n    hot,new,rising,top,controversial,gilded,wiki,promoted,best,chat\n    confidence,qa,old,live,random,relevance,comments,timestamp,score,upvotes"
						},
						cursor_returned: {
							type: "string",
							description: "Cursor returned by request from listing service."
						}
					}
				},
				tt = {
					$id: "http://com.reddit/schemas/field_definitions/content/media.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields used in posted media.",
					definitions: {
						mimetype: {
							type: "string",
							description: "Mimetype of media."
						},
						duration: {
							type: "integer",
							description: "Length of the video in milliseconds."
						},
						max_time_served: {
							type: "integer",
							description: "Max time a video was served."
						},
						stream_ended_timestamp: {
							type: "number",
							description: "The timestamp for when the live stream ended."
						},
						source: {
							type: "string",
							description: "The location from which media was uploaded to the site.\n\n    Examples:\n    fileselector,clipboard,drag_and_drop"
						},
						size: {
							type: "integer",
							description: "Size of media in bytes."
						},
						upload_duration: {
							type: "integer",
							description: "Uploading time in milliseconds."
						},
						file_name: {
							type: "string",
							description: "File name of the media being uploaded."
						},
						url: {
							type: "string",
							description: "URL of media."
						},
						destination_region: {
							type: "string",
							description: "The region where this media was sent to.\n\n    Note that the region format will differ depending on the cdn used."
						},
						cdn_name: {
							type: "string",
							description: "The CDN that served this media."
						},
						height: {
							type: "integer",
							description: "Height in pixels."
						},
						outbound_url: {
							type: "string",
							description: "Outbound url for a specific media asset."
						},
						preview_url: {
							type: "string",
							description: "URL for the image or video preview."
						},
						id: {
							type: "string",
							description: "Identifier of the image or video."
						},
						md5: {
							type: "string",
							description: "The md5 of the media, as uploaded by the user."
						},
						stream_private_id: {
							type: "string",
							description: "The private ID for the live stream (a.k.a. streamer_key)."
						},
						caption: {
							type: "string",
							description: "Specific caption for the media the user is interacting with."
						},
						thumbnail_url: {
							type: "string",
							description: "URL for the image or video thumbnail."
						},
						pinned: {
							type: "boolean",
							description: "Is the media pinned?"
						},
						orientation: {
							type: "string",
							description: "Orientation of the media, e.g. landscape or portrait.\n\n    Examples:\n    landscape,portrait"
						},
						load_time: {
							type: "integer",
							description: "Time to load media in milliseconds."
						},
						stream_public_id: {
							type: "string",
							description: "The public ID for the live stream."
						},
						time: {
							type: "integer",
							description: "At what time in the video is the event happening in milliseconds.\n\n    E.g. clicked on pause after the video played for 100ms."
						},
						type: {
							type: "string",
							description: "Upload type, e.g. video, image, or live stream video\n\n    Examples:\n    image,video,stream\n    stream_live,stream_vod,stream_unavailable,native_video"
						},
						outbound_domain: {
							type: "string",
							description: "Outbound url domain for a specific media asset."
						},
						cdn_region: {
							type: "string",
							description: "The cdn region where this media was downloaded from.\n\n    Note that the region format will differ depending on the cdn used."
						},
						width: {
							type: "integer",
							description: "Width in pixels."
						}
					}
				},
				it = {
					$id: "http://com.reddit/schemas/field_definitions/content/message.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: 'Type of discovery unit.\n\n    The type of carousel, usually "listing" or "subreddit_listing" or "comments_listing". However, some older\n    units have grandfathered unique types. This is an arbitrary lowercase string without spaces.\n    */\n    2: required typedefs.StringLower type\n    // 3: optional i64 number_posts DEPRECATED\n    // 4: optional list<typedefs.Fullname> posts_shown DEPRECATED\n    // 6: optional i64 post_position DEPRECATED\n    // 7: optional typedefs.StringLower post_type DEPRECATED\n    // 8: optional typedefs.StringLower post_subreddit DEPRECATED\n    /**\n    The unique identifier of the discovery unit as outlined on the config wiki.\n\n    This is an arbitrary string, but generally should be in the format of "xd_X"\n    where X is a number or text identifier.\n    */\n    9: required string id\n    /** The displayed title of the carousel, this will be an arbitrary string. */\n    10: optional string title\n    /**\n    The carousel\'s unique english name used for analytics.\n\n    This is an arbitrary lowercase string without spaces.\n    */\n    11: required typedefs.StringLower name\n    /** A list of fullnames for each item presented in the discovery unit. */\n    12: optional list<typedefs.Fullname> items\n}\n\n/** A private message sent between Redditors.',
					definitions: {
						body: {
							type: "string",
							description: "The content in the body of the message.\n\n    read-access:swat@reddit.com"
						},
						modmail_message_id: {
							type: "string",
							description: "If this message is associated with a modmail conversation, the associated message ID within that conversation.\n\n    A base36 encoded string. Modmail IDs are not fullnames, so do not have a type prefix."
						},
						parent_message_id: {
							type: "string",
							description: "Message ID of the parent message in this thread."
						},
						subject: {
							type: "string",
							description: "The subject of the message thread.\n\n    read-access:swat@reddit.com"
						},
						filtered_by_recipient: {
							type: "boolean",
							description: "Did the message get rejected before being received by the recipient.\n\n    There are a variety of reasons why a rejection would occur, such\n    as blocking."
						},
						sender_type: {
							type: "string",
							description: "What kind of entity the sender is.\n\n    Used to differentiate between automated systems, users,\n    and subreddits sending content.\n\n    Examples:\n    automated,user,subreddit"
						},
						modmail_conversation_id: {
							type: "string",
							description: "If this message is associated with a modmail conversation, the associated modmail conversation ID.\n\n    A base36 encoded string. Modmail IDs are not fullnames, so do not have a type prefix."
						},
						id: {
							type: "string",
							description: "Required id of the Message."
						},
						recipient_type: {
							type: "string",
							description: "The type of the recipient.\n\n    Examples:\n    user,subreddit"
						},
						created_timestamp: {
							type: "number",
							description: "Timestamp of when this message was created."
						},
						recipient_id: {
							type: "string",
							description: "The Account ID or Subreddit ID of the recipient."
						},
						type: {
							type: "string",
							description: 'The type of the message.\n\n    For the purposes of tracking kinds of messages sent out. For instance,\n    "user", "creators_top_ten", "creators_five_followers","creators_top_post",\n    "creators_top_comment", "crosspost", "crosspost_commenter".'
						},
						source_page: {
							type: "string",
							description: "Source page the user was on when they created this message.\n\n    Examples:\n    compose,permalink,usermail"
						},
						first_message_id: {
							type: "string",
							description: "Message ID of the first message in this thread."
						}
					}
				},
				st = {
					$id: "http://com.reddit/schemas/field_definitions/content/news.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents news topics and subtopics.",
					definitions: {
						topic_id: {
							type: "string",
							description: 'Topic ID provided by the news backend service.\n\n    Topics represent the top level subject, e.g. "entertainment", "gaming", etc.\n\n    Note that we currently do not have a backend service and thus IDs are currently hacked, hardcoded\n    values, e.g. e.g. "100", "200", "300", etc. For future compatibility we are keeping the type as\n    strings so that it can be converted to fullnames if needed.'
						},
						topic_name: {
							type: "string",
							description: 'Topic name provided by the news backend service.\n\n    Example values: "news", "gaming", etc.'
						},
						subtopic_id: {
							type: "string",
							description: 'Subtopic id provided by the news backend service.\n\n    Subtopics break down under each topic, e.g. "US Left", "US Right", etc.\n\n    Note that we currently do not have a backend service and thus IDs are currently hacked, hardcoded\n    values, e.g. e.g. "101", "201", "301", etc. For future compatibility we are keeping the type as\n    strings so that it can be converted to fullnames if needed.'
						},
						subtopic_name: {
							type: "string",
							description: 'Subtopic name provided by the news backend service.\n\n    Example values: "us_left", "us_right", etc.'
						}
					}
				},
				nt = {
					$id: "http://com.reddit/schemas/field_definitions/content/notification.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents a notification, mostly used for mobile platforms.",
					definitions: {
						body: {
							type: "string",
							description: "The body of this Notification."
						},
						dropped: {
							type: "boolean",
							description: "Was the notification dropped?\n\n    A notification was dropped because of a preference check, version check,\n    bad push token, invalid ARN endpoint, multiple device ids mapped to the\n    same push token, etc."
						},
						authorization_status: {
							type: "string",
							description: "Authorization status of a notification, only applies to iOS devices\n\n    Examples:\n    enabled,provisional"
						},
						process_notes: {
							type: "string",
							description: "optional metadata about how the notification was generated."
						},
						id: {
							type: "string",
							description: "Unique identifier of the notification."
						},
						title: {
							type: "string",
							description: "The title of this Notification."
						},
						type: {
							type: "string",
							description: "The type of this Notification."
						}
					}
				},
				ot = {
					$id: "http://com.reddit/schemas/field_definitions/content/onboarding.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields related to the onboarding flow.",
					definitions: {
						subreddits_selected: {
							type: "array",
							description: "Subreddits selected as part of the onboarding flow."
						},
						number_subreddits_selected: {
							type: "integer",
							description: "Number of subreddits selected as part of the onboarding flow."
						},
						similar_subreddits: {
							type: "array",
							description: "List of the similar subreddits.\n\n    Expected to be a list of StringLower subreddit names, e.g. [askreddit, pics]"
						},
						end_timestamp: {
							type: "number",
							description: "Timestamp of when the user completed a onboarding stage."
						},
						subreddit_name: {
							type: "string",
							description: "Subreddit name."
						},
						category_name: {
							type: "string",
							description: "Subreddit category name."
						},
						valid_email_submitted: {
							type: "boolean",
							description: "Does this user have a submitted valid email?"
						},
						captcha_num_screens: {
							type: "integer",
							description: "Number of captcha screens a user saw."
						},
						is_similar_subreddit: {
							type: "boolean",
							description: "Is the subreddit user clicked is similar to the one the user interacted with?"
						},
						process_notes: {
							type: "string",
							description: "Additional context field for onboarding events."
						},
						start_timestamp: {
							type: "number",
							description: "Timestamp of when the user started a onboarding stage."
						},
						id: {
							type: "string",
							description: "Onboarding UUID."
						},
						action_source: {
							type: "string",
							description: "Additional context field for onboarding events."
						},
						successful: {
							type: "boolean",
							description: "Was this action successful?"
						},
						subreddits_already_selected: {
							type: "integer",
							description: "Number of subreddits already selected."
						},
						recommended_user_name: {
							type: "boolean",
							description: "Was this user name an autogenerated one?"
						},
						semantic_version: {
							type: "string",
							description: "Version of the onboarding flow, e.g. r2_desktop_onboarding_2017q3."
						},
						pre_selected: {
							type: "boolean",
							description: "Is the subreddit the user is clicking on a pre-selected subreddit?"
						},
						category_position: {
							type: "integer",
							description: "Subreddit category position in a list."
						},
						subreddit_position: {
							type: "integer",
							description: "Subreddit position in a list."
						},
						user_name: {
							type: "string",
							description: "Submitted user name."
						},
						subreddit_is_selected: {
							type: "boolean",
							description: "Was this subreddit already selected? Used in onboarding subreddit click events."
						},
						number_subreddits: {
							type: "integer",
							description: "Number of similar subreddits viewed."
						},
						personalized_subreddits: {
							type: "integer",
							description: "Number of personalized subreddits shown to the user."
						},
						landing_page: {
							type: "string",
							description: "The page the user lands on after onboarding."
						},
						passed_captcha: {
							type: "boolean",
							description: "Has the user passed the captcha?"
						}
					}
				},
				rt = {
					$id: "http://com.reddit/schemas/field_definitions/content/post.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the characteristics of a post (aka a link).",
					definitions: {
						top_awarded_type: {
							type: "string",
							description: "The type of top awarded leaderboard\n\n    Values and their definitions:\n        * active: leaderboard is active\n        * inactive: leaderboard is inactive and can not be updated"
						},
						is_scheduled: {
							type: "boolean",
							description: "Does this post have a scheduled time?"
						},
						hvts: {
							type: "array",
							description: 'Array of high-value terms, formatted as "term:score" strings'
						},
						number_comments: {
							type: "integer",
							description: "The number of comments a post has at the time of the event."
						},
						number_posts_from_ad: {
							type: "integer",
							description: "Number of posts between this post and the nearest ad above it."
						},
						url: {
							type: "string",
							description: 'Typically the URL unless a text or self type post.\n\n    Will not be set by text posts. May be a reddit post\n    (e.g. "/r/askreddit/comments/abcd1234/post_title") if set by AMP.'
						},
						subreddit_name: {
							type: "string",
							description: "Lowercase name of the post's parent subreddit, e.g. askreddit."
						},
						archived: {
							type: "boolean",
							description: "Boolean for whether a post is archived or not."
						},
						domain: {
							type: "string",
							description: "Domain of the above url, if present."
						},
						score: {
							type: "integer",
							description: "Vote score for the post."
						},
						flair: {
							type: "string",
							description: "Flair text that appears in the post."
						},
						nsfw: {
							type: "boolean",
							description: "Is the post flagged as nsfw?"
						},
						is_event: {
							type: "boolean",
							description: "Is this post a PostEvent?"
						},
						promoted: {
							type: "boolean",
							description: "Is this an ad/sponsored link?"
						},
						impression_id: {
							type: "string",
							description: "DEPRECATED: Unique id of an ad impressions.\n\n    Use the field defined in AdMetadata struct inside adevent.thift"
						},
						subreddit_id: {
							type: "string",
							description: "Fullname of the post's parent subreddit."
						},
						recommendation_source: {
							type: "string",
							description: "The first pass ranker source name.\n\n    This will be the typename field on feed element nodes.\n\n    i.e. PostRecommendation, SubredditPost, AdPost, ect..."
						},
						submit_scheduled_timestamp: {
							type: "number",
							description: "Is this post scheduled to go live at a certain time?"
						},
						upvote_ratio: {
							type: "number",
							description: "Number of upvotes divided by total number of votes for the post.\n\n    Note that raw upvote/downvote scores are not exposed to clients due to\n    security / privacy / anti-evil reasons."
						},
						recommendation_source_subreddit_id: {
							type: "string",
							description: "ID for the similar subreddit recommendation seed\n\n    i.e. if the recommendation is from r/warriors because you subscribed to r/nba,\n    then r/nba would be the seed"
						},
						spoiler: {
							type: "boolean",
							description: "Is the post flagged as a spoiler?"
						},
						id: {
							type: "string",
							description: "Unique identifier of the Post.\n\n    Event-collector will reject an event if id does not satisfy this regex: ^t[0-9]_[a-z0-9]+$"
						},
						content_duration: {
							type: "integer",
							description: "UNKNOWN. May be deprecated."
						},
						is_automated: {
							type: "boolean",
							description: "Is this post created automatically (not by the user themselves)?"
						},
						created_timestamp: {
							type: "number",
							description: "Timestamp of when the post was created."
						},
						comment_type: {
							type: "string",
							description: "The type of comments displayed for this post.\n\n    Values and their definitions:\n        * comment: discussion consists of comments\n        * chat: discussion consists of chats"
						},
						recommendation_source_subreddit_name: {
							type: "string",
							description: "Name for the similar subreddit recommendation seed\n\n    i.e. if the recommendation is from r/warriors because you subscribed to r/nba,\n    then r/nba would be the seed"
						},
						crosspost_root_id: {
							type: "string",
							description: "Unique identifier of the Crosspost root post ID"
						},
						author_id: {
							type: "string",
							description: "Author of the post, represented as an account ID."
						},
						body_text: {
							type: "string",
							description: "Used for text posts to hold content."
						},
						title: {
							type: "string",
							description: "Display title, entered by the author.\n\n    Note that titles typically cannot contain newlines today, they are used in ads as well in very old posts."
						},
						type: {
							type: "string",
							description: 'Style of the post.\n\n    Values and their definitions:\n        * link: outgoing link\n        * text: Text (aka "self") post\n        * image: direct link to an image\n        * gif: direct link to a gif\n        * video: direct link to a video\n        * crosspost: a crosspost post\n        * multi_media: post with inline media\n        * self: used by AMP\n        * rtjson: rich text json description\n        * circle: used as part of april fools 2018\n        * poll: post with points-based polling\n        * stream: (deprecated, use rpan) live stream video post\n        * rpan: live stream video post\n        * gallery: post with a gallery of media\n        * liveaudio: post with audio-conference room'
						},
						number_gildings: {
							type: "integer",
							description: "How much gold the post has already received."
						},
						original_content: {
							type: "boolean",
							description: "Boolean for whether this post flagged as original content."
						}
					}
				},
				at = {
					$id: "http://com.reddit/schemas/field_definitions/content/post_collection.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Details of a PostCollection (collection of posts).",
					definitions: {
						post_ids: {
							type: "array",
							description: "List of all of the Posts fullnames included in the PostCollection (in order)\n\n    NOTE: This field should be used only for PostCollection Create/Edit/Delete/Add_to/Remove_from events"
						},
						display_layout: {
							type: "string",
							description: "Display layout of the post collection, e.g. gallery or timeline.\n\n    Examples:\n    gallery,timeline"
						},
						id: {
							type: "string",
							description: "PostCollection UUID."
						},
						author_id: {
							type: "string",
							description: "Author of the PostCollection, represented as an account ID.\n\n    NOTE: This field should be used only for PostCollection Create/Edit/Delete/Add_to/Remove_from events"
						},
						title: {
							type: "string",
							description: "Display title for the PostCollection, entered by the author.\n\n    NOTE: This field should be used only for PostCollection Create/Edit/Delete/Add_to/Remove_from events"
						}
					}
				},
				dt = {
					$id: "http://com.reddit/schemas/field_definitions/content/post_composer.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents fields specific to the post creation form.",
					definitions: {
						post_scheduled: {
							type: "boolean",
							description: "Is the post scheduled to go live at a certain time?"
						},
						editor_mode: {
							type: "string",
							description: "Editor mode, e.g. rte (rich text editor) or markdown.\n\n    Examples:\n    rte,markdown"
						},
						input_type: {
							type: "string",
							description: "Where the input is occuring, e.g. title, or rte (rich text editor).\n\n    Examples:\n    title,text,url,rte,caption,outbound_url"
						},
						text_type: {
							type: "string",
							description: "Text type, e.g. bold or url.\n\n    Examples:\n    bold,italics,title,body,url"
						},
						final_status: {
							type: "string",
							description: "Final status text option.\n\n    Examples:\n    on,off"
						},
						submit_scheduled_timestamp: {
							type: "number",
							description: "Timestamp of when this post event is scheduled to go live"
						},
						type: {
							type: "string",
							description: "Post type selection, e.g. self, image.\n\n    Examples:\n    crosspost,image,link,live,media,poll,self,text,video"
						}
					}
				},
				ct = {
					$id: "http://com.reddit/schemas/field_definitions/content/post_event.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Details of a PostEvent (scheduled post) for amas/shows.",
					definitions: {
						type: {
							type: "string",
							description: "Type of the PostEvent.\n\n    Values and their definitions:\n        * ama: Ask Me Anything\n        * event: Generic catch all event\n        * show: TV Show\n        * game: Sports game"
						},
						event_state: {
							type: "string",
							description: "The state of the PostEvent.\n\n    Values and their definitions:\n        * before: not yet started\n        * now: currently active\n        * after: finished"
						},
						event_start_timestamp: {
							type: "number",
							description: "Timestamp of when this post event is scheduled to start"
						},
						event_end_timestamp: {
							type: "number",
							description: "Timestamp of when this post event is scheduled to end"
						}
					}
				},
				pt = {
					$id: "http://com.reddit/schemas/field_definitions/content/view_stats.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Describing stats about a user's browsing experience on a page",
					definitions: {
						num_comments_viewed: {
							type: "integer",
							description: "This field contains the number of comments that a user viewed on their visit to the post detail page"
						},
						comments_viewed_list: {
							type: "array",
							description: "This field contains the list of comment IDs that the user viewed on the page"
						}
					}
				},
				mt = {
					$id: "http://com.reddit/schemas/field_definitions/content/vote.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Details about a vote, e.g. if it affects karma.",
					definitions: {
						affects_karma: {
							type: "boolean",
							description: "Does this vote affect user's karma?"
						},
						affects_score: {
							type: "boolean",
							description: "Does this vote affect the post's score?"
						}
					}
				},
				_t = {
					$id: "http://com.reddit/schemas/field_definitions/content_tag/content_tag.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: 'Model for ContentTag data.\n\nThis struct is used to capture event tracking data based on the subreddits "Content Rating".\nSee https://reddit.atlassian.net/browse/CACTI-4464.\n\nThe subreddit moderators can take a survey we render to them in the UI, and upon submission we will fire v2 events that\ncontain some information about their survey responses and the associated mature themes.',
					definitions: {
						mature_themes: {
							type: "array",
							description: "A list of mature themes that this subreddit is associated with.\n\n    Some examples may be:\n        * nudity\n        * profanity\n        * sex"
						},
						survey_answers: {
							type: "array",
							description: "A list of survey responses that the subreddit selected.\n\n    Some examples may be:\n        * amateur_advice\n        * moderate_advice\n        * drugs_alcohol"
						},
						rating_version: {
							type: "string",
							description: "The version of the rating survey that this content tag came from.\n\n    Some examples may be:\n        * v1\n        * v2"
						},
						rating: {
							type: "string",
							description: "The rating associated with the given content tag. Will not always be set."
						}
					}
				},
				ht = {
					$id: "http://com.reddit/schemas/field_definitions/crawler/crawler.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields related to crawlers.",
					definitions: {
						name: {
							type: "string",
							description: 'Crawler name set by VCL.\n\n    This name can be something general: "googlebot", "bingbot", or something specific: "AdsBot-Google-Mobile-Apps".'
						}
					}
				},
				ft = {
					$id: "http://com.reddit/schemas/field_definitions/crowd_control/crowd_control.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Data associated with the Crowd Control feature",
					definitions: {
						collapse_reasons: {
							type: "array",
							description: "Which reasons would Crowd Control collapse this comment for?\n     \n    This list should include all possible reasons, not limited to reasons relevant to current crowd control threshold."
						},
						rating_threshold: {
							type: "string",
							description: "Which level of Crowd Control strictness is set at the time at the event?\n\n    Corresponds to enum CrowdControlLevel in reddit-service-thing thing.thrift\n\n    Examples:\n    off,lenient,moderate,strict,null_value"
						}
					}
				},
				lt = {
					$id: "http://com.reddit/schemas/field_definitions/crowd_source/crowd_source.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Model for Crowd-sourced data.",
					definitions: {
						old_geo_city: {
							type: "string",
							description: "The google maps or maxmind city value"
						},
						geo_country: {
							type: "string",
							description: "The google maps or maxmind country value"
						},
						geo_region: {
							type: "string",
							description: "The google maps or maxmind region value"
						},
						old_place_id: {
							type: "string",
							description: "The google maps place_id value that previously existed"
						},
						old_geo_region: {
							type: "string",
							description: "The google maps or maxmind region value that previously existed"
						},
						geo_city: {
							type: "string",
							description: "The google maps or maxmind city value"
						},
						old_geo_country: {
							type: "string",
							description: "The google maps or maxmind country value that previously existed"
						},
						place_id: {
							type: "string",
							description: "The google maps place_id value"
						}
					}
				},
				ut = {
					$id: "http://com.reddit/schemas/field_definitions/custom_feed/custom_feed.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields related to custom feeds, a.k.a. multi-reddits.",
					definitions: {
						owner_id: {
							type: "string",
							description: "The user that owns the feed."
						},
						id: {
							type: "string",
							description: "Unique identifier for the custom feed."
						},
						number_followers: {
							type: "integer",
							description: "The number of followers of the custom feed."
						},
						is_nsfw: {
							type: "boolean",
							description: "Whether the custom feed contains NSFW communities."
						},
						cover_art_url: {
							type: "string",
							description: "URL of the uploaded cover image."
						},
						visibility: {
							type: "string",
							description: "The visibility status of the custom feed.\n\n    Examples:\n    public,private,hidden"
						},
						number_subreddits: {
							type: "integer",
							description: "The number of subreddits in the custom feed."
						}
					}
				},
				gt = {
					$id: "http://com.reddit/schemas/field_definitions/device/app.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Application information.",
					definitions: {
						name: {
							type: "string",
							description: "The name of the app/code base sending the event.\n    \n    Expected values:\n        * web: desktop site\n        * web2x: redesigned desktop site\n        * mweb: mobile site\n        * ios: Reddit-native iOS app\n        * android: Reddit-native Android app\n        * amp: Google's Accelerated Mobile Pages\n        * mweb3x: lightweight, blazing fast, mobile-first frontend service\n        * third party app name lowercased with _ for spaces\n\n    Event-collector will reject an event if name does not satisfy this regex: ^[-_a-z0-9]+$"
						},
						build_number: {
							type: "integer",
							description: "Incremental build number, if known."
						},
						install_timestamp: {
							type: "number",
							description: "Timestamp of app installation, if known."
						},
						version: {
							type: "string",
							description: "Version of the native apps.\n\n    Event-collector will reject an event if version does not satisfy this regex: ^\\d[\\d\\.]+\\d$"
						},
						build_timestamp: {
							type: "number",
							description: "Unix timestamp of build, if known."
						}
					}
				},
				yt = {
					$id: "http://com.reddit/schemas/field_definitions/device/platform.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Platform information.",
					definitions: {
						device_name: {
							type: "string",
							description: 'Manufacturer name of the device when device is known (mostly on mobile)\n    Example values:\n        * iPhone 7\n        * iPad Air 3\n        * Galaxy View 18.4" 32GB\n        * HTC Hero'
						},
						device_id: {
							type: "string",
							description: "Installation uuid."
						},
						name: {
							type: "string",
							description: 'What "form factor" this is.\n\n    Examples:\n    kubuntu,chromecast,iphone'
						},
						fingerprint: {
							type: "string",
							description: "Fingerprint for the browser."
						},
						language_list: {
							type: "string",
							description: "The full accept language hierarchy for the user"
						},
						os_version: {
							type: "string",
							description: "Version of the operating system."
						},
						device_tier: {
							type: "string",
							description: "The performance bucket for the request device's year class.\n\n    We group year classes into several buckets, so that we can measure\n    the performance of groups of devices with similar hardware characteristics.\n\n    Examples:\n    low,moderately_low,medium,moderately_high,high"
						},
						os_name: {
							type: "string",
							description: "Name of operating system.\n\n    Example values: window, osx, ios, android, linux, chromeos\n    Bad values: win32, xp, win, mac, macintel, ubuntu"
						},
						year_class: {
							type: "integer",
							description: "The year in which the request device would be considered high-end.\n\n    We measure the performance class for some mobile devices as\n    the year in which a device could be considered top of the line."
						},
						fingerprint_created_timestamp: {
							type: "number",
							description: "Timestamp when fingerprint was created."
						},
						browser_version: {
							type: "string",
							description: "Version of that browser."
						},
						browser_name: {
							type: "string",
							description: "Name of the browser that the client is running."
						},
						primary_language: {
							type: "string",
							description: "The primary OS / browser language for the user"
						}
					}
				},
				vt = {
					$id: "http://com.reddit/schemas/field_definitions/device/screen.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Client machine display/screen characteristics.",
					definitions: {
						viewport_width: {
							type: "integer",
							description: "Screen width of the viewport. Will be set to 0 if the viewport is closed."
						},
						ios_font_size: {
							type: "string",
							description: "Font size setting specified by iOS.\n\n    This can be changed by the user, but is not specific to our app.\n\n    Examples:\n    xs,s,m,l,xl,xxl,xxxl,ax_m,ax_l,ax_xl,ax_xxl,ax_xxxl"
						},
						app_font_size_delta: {
							type: "integer",
							description: "User-specified font size setting within the iOS app.\n    \n    The value is a delta, with 0 being the default size. Negatives are\n    smaller, and positives are larger."
						},
						height: {
							type: "integer",
							description: "Screen height of the device."
						},
						view_type: {
							type: "string",
							description: "View types available.\n\n    Examples:\n    card,classic,compact,lightbox,post_detail,gallery,fullscreen,videoplayer"
						},
						android_font_size: {
							type: "number",
							description: "Font size setting specified by Android.\n\n    It is used as a multiplier, but some devices don't use 1.0 as a default.\n    This can be changed by the user, but is not specific to our app.\n\n    Example values:\n        * 0.8\n        * 1.0\n        * 1.2"
						},
						browser_tab_id: {
							type: "string",
							description: "UUID to differentiate between different browser tabs.\n\n    This is primarily used to improve time on site calculations when a user\n    has more than one tab open."
						},
						scroll_position: {
							type: "integer",
							description: "Scroll position of the screen in pixels."
						},
						viewport_height: {
							type: "integer",
							description: "Screen height of the viewport. Will be set to 0 if the viewport is closed."
						},
						in_focus: {
							type: "boolean",
							description: "Denotes whether the tab is in focus (Used in heartbeat event)."
						},
						auto_dark_mode: {
							type: "string",
							description: "Automatic dark mode setting.\n\n    The value that the user has selected for this setting in the native mobile apps.\n    iOS and Android have slightly different use cases. Battery saver mode only applies\n    to Android.\n\n    Examples:\n    off,follow_os,location_based\n    battery_saver,location_based_and_battery_saver"
						},
						theme: {
							type: "string",
							description: "App theme, e.g. ponymode.\n\n    Examples:\n    alienbluemode,amoledmode,default,mintmode,nightmode,anonymousbrowsingmode,ponymode\n    treesmode"
						},
						width: {
							type: "integer",
							description: "Screen width of the device."
						}
					}
				},
				bt = {
					$id: "http://com.reddit/schemas/field_definitions/domain_ban/domain_ban.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Information regarding Domain Bans.",
					definitions: {
						regex: {
							type: "string",
							description: "Regexp required to match in order to ban url within the given domain. When left empty, the entire domain is banned."
						},
						url: {
							type: "string",
							description: "URL/Domain that will be banned or unbanned."
						},
						no_email: {
							type: "boolean",
							description: "Is email domain forbidden?"
						},
						shame_message: {
							type: "string",
							description: "Message shown to accounts trying to post to this domain. Will be empty, unless shame is turned on."
						},
						inspector_exempt_regex: {
							type: "string",
							description: "Exemptions for banning, using regex. Will usually be left empty."
						},
						shame: {
							type: "boolean",
							description: "Let the user know that domain can't be posted."
						},
						submit_banned: {
							type: "boolean",
							description: "Post to domain is taken down."
						},
						disable_approve: {
							type: "boolean",
							description: "Post to domain cannot be approved by a moderator."
						},
						markdown: {
							type: "boolean",
							description: "Will the content be removed based on self posts / comments / messages? (vs. just posts with links)."
						},
						ban_message: {
							type: "string",
							description: "Internal ban message for this domain. Can be left empty."
						}
					}
				},
				wt = {
					$id: "http://com.reddit/schemas/field_definitions/econ/purchase.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Attributes of buy or cancel actions for digital products.",
					definitions: {
						count: {
							type: "integer",
							description: "Number of units.\n\n    Count and price depends on product definition.\n    Some products might be sold 1 by 1 then you can buy 13 things for $1.99 each.\n    Some products might be only sold in packs (like 750 couns + 3 days premium is a product) and you buy just one for $2.99\n\n    In any case money spend (payment_amount_in_smallest_denom) = count * price"
						},
						order_id: {
							type: "string",
							description: "Order associated with concrete billing event."
						},
						product_version: {
							type: "integer",
							description: "product_id, product_version and subreddit_id define product being purchased."
						},
						product_type: {
							type: "string",
							description: "Kind (or family) of the product being purchased."
						},
						price_micros: {
							type: "integer",
							description: "Price of a single unit in a smallest denominator of the currency (e.g. cents for USD)."
						},
						product_id: {
							type: "string",
							description: "product_id, product_version and subreddit_id define product being purchased."
						},
						currency: {
							type: "string",
							description: "Currency used in the transaction, e.g. usd or coins.\n    \n    Examples:\n    usd,coins"
						},
						subscription_id: {
							type: "string",
							description: "For `type = new | update | renew` subscription_id links operations on a particular subscription."
						},
						count_remaining: {
							type: "integer",
							description: "Present on subscriptions update. Number of units remaning in subscription after update."
						},
						type: {
							type: "string",
							description: "Regular purchase has type `once`. Subscriptions are new, update, renew.\n\n    Subscription cancellation is also an `update`, while `review` is automated billing\n    at the end of the billing cycle.\n\n    Examples:\n    once,new,update,renew"
						},
						days_remaining: {
							type: "integer",
							description: "For reccuring payments how many days left till the next payment (even if it's cancelled)."
						}
					}
				},
				jt = {
					$id: "http://com.reddit/schemas/field_definitions/email/email.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the attributes of email and posts sent in an email.",
					definitions: {
						post_has_thumbnail: {
							type: "boolean",
							description: "Boolean whether or not a post has a picture."
						},
						subject_line: {
							type: "string",
							description: "Subject line of the email."
						},
						preview_text: {
							type: "string",
							description: "Preview text of the email."
						},
						header_text: {
							type: "string",
							description: 'The text that\'s in the header of the email, e.g. "Top posts on Reddit".'
						},
						type: {
							type: "string",
							description: "Type of email, e.g. email_digest_v1."
						},
						listing_source: {
							type: "string",
							description: "Name of the listing used to serve posts, e.g. popular, askreddit."
						}
					}
				},
				$t = {
					$id: "http://com.reddit/schemas/field_definitions/experiment/click_test.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Tracks outcomes from dialog test modals we show to site visitors.\n\nFor example, we might ask users if they would pay for a certain new feature,\nor assess relative interest across a few potential product plans.",
					definitions: {
						name: {
							type: "string",
							description: "Name of the click test."
						},
						prompt: {
							type: "string",
							description: 'Prompt used to solicit feedback\n\n    Example value: "Would you use this feature?"'
						},
						variant: {
							type: "string",
							description: "Variants of the test.\n\n    Example values: variant_1, red_dialog"
						},
						response: {
							type: "string",
							description: 'Open-ended response recorded from the test.\n\n    Example values: "yes", "I don\'t like this because..."'
						},
						id: {
							type: "integer",
							description: "Unique identifier of the click test."
						},
						owner: {
							type: "string",
							description: "Team that owns the click test."
						},
						page_type: {
							type: "string",
							description: "Type of page collecting user feedback.\n\n    Examples:\n    question,yes,no"
						}
					}
				},
				kt = {
					$id: "http://com.reddit/schemas/field_definitions/experiment/experiment.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Struct for experiment related fields.",
					definitions: {
						name: {
							type: "string",
							description: "Name of the experiment."
						},
						bucketing_key: {
							type: "string",
							description: "What key is used for bucketing? This is typically be user_id."
						},
						end_timestamp: {
							type: "number",
							description: "Timestamp of the end of the experiment."
						},
						is_override: {
							type: "boolean",
							description: "True if the variant shown was due to an override rather than bucketing."
						},
						bucketing_type: {
							type: "string",
							description: "Experiment bucketing type defined in DDG e.g. single_variant, multi_variant, feature_rollout."
						},
						variant: {
							type: "string",
							description: "Variants of the experiment.\n\n    Example values: control_1, control_2, signup_cta"
						},
						info: {
							type: "string",
							description: "Brief desription of the experiment's impact on a user experience."
						},
						start_timestamp: {
							type: "number",
							description: "Timestamp of the start of the experiment."
						},
						github_link: {
							type: "string",
							description: "Github link for an event's appropriate expose emit log."
						},
						version: {
							type: "string",
							description: "Experiment version."
						},
						variant_names: {
							type: "array",
							description: "List of all experiment variants."
						},
						id: {
							type: "integer",
							description: "Unique identifier of the experiment."
						},
						bucketing_value: {
							type: "string",
							description: "The value used to bucket the experiment.\n\n    This value may be redundant with another value within the schema,\n    but is intended to provide a single place to be able to pull out\n    this value, and to ensure that it gets sent on every experiment even\n    if it isn't explicitly sent as additional inputs on the variant call."
						},
						qa_proxy_event: {
							type: "string",
							description: "app_name, source, action, noun, action_info_page_type (ASANA) that fires near the expose event.\n\n    This is used to sanity check the volume of exposure events being fired."
						},
						owner: {
							type: "string",
							description: "Team that owns the experiment, or contact email of owner."
						},
						variant_percentages: {
							type: "array",
							description: "List of all experient variant percentage splits."
						},
						active: {
							type: "boolean",
							description: "True if the experiment is currently active."
						}
					}
				},
				xt = {
					$id: "http://com.reddit/schemas/field_definitions/feature/feature.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the feature (code) that sends the event.\n\nThis struct can be used to distinguish between events sent from\ndifferent versions of the same feature.\n\nThis is especially useful for events that would be otherwise\nimpossible to distinguish which version of the code/feature\nfired the event.",
					definitions: {
						name: {
							type: "string",
							description: 'Name of the feature.\n\n    e.g. "discovery_unit"'
						},
						version: {
							type: "string",
							description: "Version of the feature.\n\n    Format as a semantic version e.g. v1.2.3"
						},
						version_description: {
							type: "string",
							description: "Short description of the feature version.\n\n    Identifies the distinguishing changes in this version of the feature.\n\n    Examples:\n    - \"This version of the discovery unit has title 'Discover more'\"\n    - \"This version of the discovery unit has title including the topic name,\n        e.g. 'Discover more in Fashion'\""
						}
					}
				},
				qt = {
					$id: "http://com.reddit/schemas/field_definitions/feed/feed.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the characteristics of a feed (home, popular, all).",
					definitions: {
						correlation_id: {
							type: "string",
							description: "Correlation IDs are used to easily track down related events.\n\n    Having a correlation ID associated with feed-related events allows us to batch together\n    the events associated with a user's feed browsing session.\n\n    This ID should be of a uuid format and each should be randomly generated."
						},
						id: {
							type: "string",
							description: "Id tracking each request for video feed content batch\n\n    Same id is shared for however many videos are given to the client to chain posts for a \n    user."
						},
						serving_position: {
							type: "integer",
							description: "Zero based integer index identifying position of a post within a serving list."
						}
					}
				},
				Pt = {
					$id: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Funding instrument - entity that back all advertisers ad delivery with a funding source",
					definitions: {
						line_item_id: {
							type: "string",
							description: "Id pointer to the line_item in SFDC."
						},
						available_freebies_micros: {
							type: "integer",
							description: "Total amount of ads credits to be used before accruing balance."
						},
						name: {
							type: "string",
							description: "The name of the funding instrument."
						},
						writeoff_micros: {
							type: "integer",
							description: "Field for admins to manually adjust a 'billable amount' on a funding instrument, in microdollars."
						},
						spent_freebies_micros: {
							type: "integer",
							description: "Total amount of ads credit used, in microdollars."
						},
						end_timestamp: {
							type: "number",
							description: "Date funding instrument becomes inactive."
						},
						servable: {
							type: "boolean",
							description: "Boolean to indicate whether this funding instrument is servable."
						},
						billing_threshold_micros: {
							type: "integer",
							description: "User selected threshold to be billed when amount is reached, in microdollars."
						},
						total_payment_micros: {
							type: "integer",
							description: "Total amount of payment to Reddit, in microdollars."
						},
						is_effective: {
							type: "boolean",
							description: "Boolean to indicate whether this funding instrument is an effective one for the user."
						},
						legacy_transaction_id: {
							type: "string",
							description: "Pointer to transaction_id from row in cassandra."
						},
						rollup_timestamp: {
							type: "number",
							description: "Time rolled up transaction was created."
						},
						credit_line_micros: {
							type: "integer",
							description: "Amount in credit line, in microdollars."
						},
						max_billing_threshold_micros: {
							type: "integer",
							description: "Max value for user billing_threshold_micros, in microdollars."
						},
						original_payment_id: {
							type: "string",
							description: "Original payment id required for refunds."
						},
						user_id: {
							type: "string",
							description: "Owner of the funding instrument."
						},
						authorize_payment_profile_id: {
							type: "string",
							description: "Payment Profile id in Authorize."
						},
						total_refund_micros: {
							type: "integer",
							description: "Total amount of refund, in microdollars."
						},
						start_timestamp: {
							type: "number",
							description: "Date funding instrument becomes active."
						},
						id: {
							type: "integer",
							description: "Unique identifier for the funding instrument."
						},
						payment_id: {
							type: "string",
							description: "Pointer to external payment id (currently stored in authorize_transactions_by_user)."
						},
						adzerk_lifetime_micros: {
							type: "integer",
							description: "This is original spent value from legacy Adzerk, in microdollars."
						},
						overdelivery_micros: {
							type: "integer",
							description: "Total amount of overdelivery, in microdollars."
						},
						last_modified_timestamp: {
							type: "number",
							description: "The time of the most recent funding instrument modification."
						},
						created_timestamp: {
							type: "number",
							description: "The time the funding instrument was created at."
						},
						authorize_profile_id: {
							type: "string",
							description: "Profile id in Authorize."
						},
						admin_id: {
							type: "string",
							description: "The admin_id making a change to the funding instrument."
						},
						overwrite: {
							type: "boolean",
							description: "Boolean to indicate whether this is an overwrite row."
						},
						type: {
							type: "string",
							description: "The type of the funding instrument.\n\n    Examples:\n    credit_card,credit_line,insertion_order,placeholder"
						},
						estimated_spending_micros: {
							type: "integer",
							description: "Total estimate of spend past most recent rollup, in microdollars."
						},
						total_spending_micros: {
							type: "integer",
							description: "Total amount of delivery, in microdollars."
						},
						balance_micros: {
							type: "integer",
							description: "Current balance amount, in microdollars."
						},
						level: {
							type: "string",
							description: "The level of the funding instrument.\n    Examples:\n    advertiser,campaign"
						},
						active: {
							type: "boolean",
							description: "Is the funding instrument active."
						},
						netsuite_customer_internal_id: {
							type: "string",
							description: "Net Suite customer internal id."
						}
					}
				},
				Et = {
					$id: "http://com.reddit/schemas/field_definitions/geo_block/geo_block.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Model for Geo Blocks.",
					definitions: {
						countries: {
							type: "array",
							description: "A list of alpha countries where the geo block applies.\n\n    E.g. ['IE', 'US', 'DE']"
						},
						reason: {
							type: "string",
							description: "A string giving the reason for the Geo Block (e.g. NetzDG request, general legal request, ...)\n\n    Examples:\n    general,netzdg,fto"
						},
						public_note: {
							type: "string",
							description: "Note that is displayed when users from targeted countries land on geo-blocked content."
						}
					}
				},
				Tt = {
					$id: "http://com.reddit/schemas/field_definitions/gold/gold_purchase.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the characteristics of gold purchase actions.",
					definitions: {
						gift_user_id: {
							type: "string",
							description: "User id of gift recipient if gifted."
						},
						number_coins_monthly: {
							type: "integer",
							description: "Number of coins given monthly as part of membership.",
							minimum: 0
						},
						source: {
							type: "string",
							description: "The type of page if referring page was related to Gold.\n    Note: To be deprecated with goldv1.",
							enums: ["listing", "direct", "gold_coin", "about_gold", "gold_tracker", "gold_dialog", "gilding", "gold_purchase", "gold_message", "hide_ads", "premium_marketing", "coins_marketing", "give_gold", "in_feed_unit", "cancel_premium_offer", "gold_award"]
						},
						default_anonymous: {
							type: "boolean",
							description: "Was the is_anonymous flag set by default in the gilding modal?"
						},
						gilded_content: {
							type: "boolean",
							description: "Was the purchase associated with a post/comment gilding?"
						},
						proxy_for_user_id: {
							type: "string",
							description: "User id of proxied user if action was executed on their behalf\n    by another account (e.g. RedditIsFun_gold_bot)"
						},
						content_type: {
							type: "string",
							description: "Type of content being rewarded with a gild.",
							enums: ["post", "comment", "stream"]
						},
						number_creddits: {
							type: "integer",
							description: "Number of creddits purchased.\n    Note: To be deprecated with goldv1.",
							minimum: 0
						},
						one_time_type: {
							type: "string",
							description: "Type of one-time purchase, e.g. through a gift code.\n    Note: To be deprecated with goldv1.",
							enums: ["self", "gift_user", "gift_code"]
						},
						number_coins: {
							type: "integer",
							description: "Number of coins awarded as part of subscription signup or spent in a transaction.",
							pattern: ".*"
						},
						number_months: {
							type: "integer",
							description: "Number of months-worth of gold purchased.\n    Note: To be deprecated with goldv1.\n\n    Current expected values: 1, 3, 12, 24, 36",
							minimum: 0
						},
						number_coins_bonus: {
							type: "integer",
							description: "Number of one-time coins given as part of subscription signup.",
							minimum: 0
						},
						transaction_id: {
							type: "string",
							description: "ID for specific Gold transaction.",
							pattern: "^[_.\\-a-zA-Z0-9]*$"
						},
						gift_anonymous: {
							type: "boolean",
							description: "Was the gift anonymous?"
						},
						gift_message: {
							type: "boolean",
							description: "Was there a gift message included?"
						},
						gift_message_length: {
							type: "integer",
							description: "Count of characters in gift message.",
							minimum: 0
						},
						type: {
							type: "string",
							description: "Type of Premium subscription, gilding, or coin purchase.",
							enums: ["one_time", "subscription", "creddits", "new", "renew", "gift_code", "gid_1", "gid_2", "gid_3", "gid_mod", "gid_community", "gid_appreciation", "gid_premium", "gid_group", "gid_global", "gid_unknown", "coins_gid_mod", "coins_gid_community", "coins_gid_appreciation", "coins_gid_premium", "coins_gid_global", "coins_gid_unknown", "coins_gid_1", "coins_gid_2", "coins_gid_3", "premium", "coins", "buy_premium", "renew_premium", "admin_transfer", "buy_coins", "purchase_award", "receive_award", "non_paying_drip", "receive_premium", "purchase_premium_via_coins", "gold_purchase", "poll_predict"]
						},
						award_id: {
							type: "string",
							description: "ID of given award.",
							pattern: "^(award_[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12})|(gid_\\d+)$"
						},
						purchased_coins: {
							type: "boolean",
							description: "Was the action accompanied by a coin purchase?"
						},
						subscription_type: {
							type: "string",
							description: "Period of subscription, e.g. monthly or yearly.",
							enums: ["monthly", "yearly"]
						},
						default_option: {
							type: "string",
							description: "Default award type when gilding.",
							enums: ["silver", "gold", "supergold", "gid_1", "gid_2", "gid_3", "gid_mod", "gid_community", "gid_global"]
						}
					}
				},
				St = {
					$id: "http://com.reddit/schemas/field_definitions/grapeshot_classification/grapeshot_classification.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the characteristics of a post classification from Grapeshot.",
					definitions: {
						categories: {
							type: "array",
							description: "Set of strings returned as violation & segment"
						}
					}
				},
				At = {
					$id: "http://com.reddit/schemas/field_definitions/imposter/imposter.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represent the actions of Imposter, April Fools 2020",
					definitions: {
						success: {
							type: "boolean",
							description: "Was the imposter successfully identified?"
						},
						game_id: {
							type: "string",
							description: "UUID of game."
						},
						note_text: {
							type: "string",
							description: "Text of the note."
						},
						imposter_id: {
							type: "string",
							description: "UUID of imposter note."
						},
						note_id: {
							type: "string",
							description: "UUID of note."
						},
						note_ignore: {
							type: "boolean",
							description: "Was the note ignored at create or edit time."
						},
						notes_blob: {
							type: "string",
							description: "JSON text blob of the state of the game when the event fired.\n\n    Format is [{note_id: note_text}, ...]"
						}
					}
				},
				Rt = {
					$id: "http://com.reddit/schemas/field_definitions/inbox/inbox.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields for the client and server side notifications inbox.",
					definitions: {
						tab: {
							type: "string",
							description: "Tab of the inbox a user is viewing.\n\n    Examples:\n    activity,messages,modmail"
						},
						badge_count: {
							type: "integer",
							description: "Badge count on the inbox tab when the user views it."
						},
						is_clicked: {
							type: "boolean",
							description: "Whether the inbox message has been clicked.\n\n    This means a user has selected the message from the inbox and the client has marked it as read on the backend."
						},
						id: {
							type: "string",
							description: "Unique identifier for the inbox message.\n\n    The static identifier is used by both backend and client. This value should be unique per user per inbox item.\n\n    Values may either be UUIDs, or for inbox messages, thing ids corresponding to messages."
						},
						is_viewed: {
							type: "boolean",
							description: "Whether the inbox message has been viewed.\n\n    Denotes whether the inbox item has been viewed on screen before. This means the user has received it from the server and at least opened the inbox tab to see the message presented there."
						}
					}
				},
				Dt = {
					$id: "http://com.reddit/schemas/field_definitions/legal_export_request/legal_export_request.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Model for legal export requests.",
					definitions: {
						target_id: {
							type: "string",
							description: "Reddit thing_id that is the subject of the data export."
						},
						requested_information: {
							type: "array",
							description: "A list of (lowercase) strings giving the requested information."
						},
						ads_data_status: {
							type: "string",
							description: "The status of the ads data for the user the request refers to.\n\n    Examples:\n    unknown,not_present,present_not_sent,present_sent"
						},
						has_ndo: {
							type: "boolean",
							description: "A boolean flag discriminating whether or not the legal export request has an attached NDO.\n    *"
						},
						received_timestamp: {
							type: "number",
							description: "The date when the legal export request was received."
						},
						id: {
							type: "integer",
							description: "Legal export request ID."
						},
						status: {
							type: "string",
							description: "A string giving the status of the request when the event was emitted.\n\n    Examples:\n    not_started,pending,completed,error,closed"
						},
						requestor_id: {
							type: "string",
							description: "Reddit thing_id (t2_) for the internal user who submits the request for export."
						},
						completed_timestamp: {
							type: "number",
							description: "Endpoint timestamp of the message event that delivered the export to the user."
						},
						target_type: {
							type: "string",
							description: "Field that describes the target_id.\n\n    For example: 'user' or 'subreddit'"
						},
						automation_type: {
							type: "string",
							description: "The type of automation.\n    reddit-service-admin admin.thrift enum LegalExportProcess\n\n    Examples:\n    automated,manual_intervention,unset"
						},
						user_ids: {
							type: "array",
							description: "A list with the reddit ids of the users the legal request refers to.\n\n    Note: In most of the cases the list will have a single element."
						},
						type: {
							type: "string",
							description: "A string giving the type of the legal export request.\n\n    Examples:\n    subpoena,court_order,search_warrant,pen_register,trap_and_trace_order\n    emergency_disclosure_request,preservation_request,ncmec_preservation,civil_subpoena\n    civil_court_order,criminal_defense_subpoena,criminal_defense_court_order\n    gdpr_request_for_user_data,foreign_request_for_production,ccpa_request_for_user_data,other_request_for_user_data\n    foreign_request_for_preservation,preservation_to_production"
						},
						gifts_data_status: {
							type: "string",
							description: "The status of the gifts data for the user the request refers to.\n\n    Examples:\n    unknown,not_present,present_not_sent,present_sent"
						},
						started_timestamp: {
							type: "number",
							description: "The legal export request will provide users data starting from this date."
						},
						ended_timestamp: {
							type: "number",
							description: "The legal export request will provide users data till this date."
						},
						due_timestamp: {
							type: "number",
							description: "The due date for the legal export request."
						}
					}
				},
				It = {
					$id: "http://com.reddit/schemas/field_definitions/live_thread/live_thread.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Live Threads are ongoing events that pop up in reddit.com/live\n\nLive threads are also used for annoucements for some reason.",
					definitions: {
						id: {
							type: "string",
							description: 'Live thread ID. Formatted as base36, e.g. "11sl1svj5tn5p".'
						},
						is_announcement: {
							type: "boolean",
							description: "Is this an announcement?"
						}
					}
				},
				Ft = {
					$id: "http://com.reddit/schemas/field_definitions/liveaudio/live_audio_room.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Room used for real-time voice communication",
					definitions: {
						id: {
							type: "string",
							description: "* Live Audio room id.\n    *"
						},
						title: {
							type: "string",
							description: "* Name of the room.\n    *"
						},
						platform: {
							type: "string",
							description: "* Provider of real-time communication platform.\n    *\n    * Examples: tencent,twilio\n    *"
						},
						creator_id: {
							type: "string",
							description: "* Creator of the audio room.\n    *"
						}
					}
				},
				Ot = {
					$id: "http://com.reddit/schemas/field_definitions/liveaudio/live_audio_room_user.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "User that communicates in liveaudio room",
					definitions: {
						platform_id: {
							type: "string",
							description: "* External userId for platform that provides Real Time Communications\n    *\n    * We use syntetic id (platformId) for reddit users inside 3-rd party platforms that provide real-time communication.\n    * PlatformId may change over time. Also a reddit user can have several PlatformId's at the same time\n    * if he uses several devices, as id is generated per device.\n    *"
						},
						role: {
							type: "string",
							description: "* User role in the room.\n    *\n    * Examples:\n    * listener,speaker,moderator"
						}
					}
				},
				Ct = {
					$id: "http://com.reddit/schemas/field_definitions/metaflair/meta_flair.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: 'Flairs defined by Reddit.\n\nMeta Flair is the more generalized replacement for Subreddit Categories. Meta Flairs have an ID and a title, and\nshould be viewed in a similar scope to a "Post" or a "Subreddit" as it is a specific piece of content that the user\nmay click or view.',
					definitions: {
						id: {
							type: "string",
							description: "Unique id for the MetaFlair."
						},
						title: {
							type: "string",
							description: 'The human-readable display name for the category, e.g. "Animals" or "Pics & GIFs".'
						}
					}
				},
				Ut = {
					$id: "http://com.reddit/schemas/field_definitions/metasearch/meta_search.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: 'A content item used to represent a "Search" item, such as a trending search item.',
					definitions: {
						number_current_window: {
							type: "integer",
							description: 'The count of this item in the "current" (or most recent) window'
						},
						meta_flair_id: {
							type: "string",
							description: 'Meta Flair option ID for search item.\n\n    Usually in the format of "cX" where X is a number.'
						},
						post_flair_name: {
							type: "string",
							description: "Post Flair option for search item."
						},
						subreddit_name: {
							type: "string",
							description: "Lowercase name of the subreddit option, e.g. askreddit."
						},
						number_previous_window: {
							type: "integer",
							description: "The count of this item in the previous window"
						},
						subreddit_id: {
							type: "string",
							description: "Subreddit option for search item."
						},
						display_query: {
							type: "string",
							description: "Search query presented to the user."
						},
						raw_query: {
							type: "string",
							description: "Actual query string backing the search item."
						},
						range: {
							type: "string",
							description: "Range option for search item, e.g. hour, day, week.\n\n    Examples:\n    hour,day,week,month,year,all"
						},
						sort: {
							type: "string",
							description: "Sorting option for search item.\n\n    Examples:\n    hot,new,rising,top,controversial,gilded,wiki,promoted,best\n    confidence,qa,old,live,relevance,comments,timestamp,score,upvotes"
						},
						structure_type: {
							type: "string",
							description: 'Structure Type of search item.\n\n    Example values: "trending", "recent", "related", etc.'
						},
						meta_flair_name: {
							type: "string",
							description: "The display title of the MetaFlair option."
						}
					}
				},
				zt = {
					$id: "http://com.reddit/schemas/field_definitions/midas/content_metadata.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Midas content metadata.",
					definitions: {
						is_quarantined: {
							type: "boolean",
							description: "Is this subreddit quarantined?"
						},
						is_nsfw: {
							type: "boolean",
							description: "Is this subreddit not safe for work?"
						},
						categories: {
							type: "array",
							description: "An array of"
						}
					}
				},
				Lt = {
					$id: "http://com.reddit/schemas/field_definitions/midas/geo.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Midas-enriched geographical fields.",
					definitions: {
						city: {
							type: "string",
							description: "City of the user."
						},
						anonymous: {
							type: "boolean",
							description: "Is this IP address anonymized?"
						},
						tor_exit_node: {
							type: "boolean",
							description: "Is this IP address a Tor exit node?"
						},
						metro_code: {
							type: "integer",
							description: "Metro code aka DMA region code of the location if location is in US."
						},
						anonymous_vpn: {
							type: "boolean",
							description: "Is this IP address a VPN?"
						},
						hosting_provider: {
							type: "boolean",
							description: "Is this IP address an ISP?"
						},
						public_proxy: {
							type: "boolean",
							description: "Is this IP address a known public proxy?"
						},
						country_code: {
							type: "string",
							description: 'Short form country code e.g. "US".'
						},
						region: {
							type: "string",
							description: 'State or province within a country e.g. "CA".\n\n    The format of this field can change depending on the country. For example, in the US it is the two letter\n    state code. Australia is three letter codes, Singapore contains digits, etc.'
						},
						time_zone: {
							type: "string",
							description: 'ISO time zone string e.g. "America/Los_Angeles".'
						}
					}
				},
				Nt = {
					$id: "http://com.reddit/schemas/field_definitions/midas/inferred.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Midas-inferred fields. Like all Midas-enriched fields, this should never be set by clients.",
					definitions: {
						json_byte_size: {
							type: "integer",
							description: "Json event size in bytes.\n\n    This is the json size before enrichment in Midas."
						},
						post_impression_id: {
							type: "integer",
							description: "Impression ID extracted from encoded ad tracking payload."
						},
						user_agent_web_crawler: {
							type: "boolean",
							description: "Flag known user_agents as web_crawlers.\n\n    Details available at https://reddit.atlassian.net/browse/DE-1893"
						},
						isp_organization: {
							type: "string",
							description: "User's isp_organization from maxmind's legacy GeoIpOrg database."
						},
						app_name: {
							type: "string",
							description: "The name of the app/code base sending the event after being interpreted by Midas.\n\n    Midas uses the Oauth Id then the User Agent to estimate the app name.\n\n    Expected values:\n        * web: desktop site\n        * web2x: redesigned desktop site\n        * mweb: mobile site\n        * ios: Reddit-native iOS app\n        * android: Reddit-native Android app\n        * amp: Google's Accelerated Mobile Pages\n        * third party app name lowercased with _ for spaces"
						},
						client_ip: {
							type: "string",
							description: "IP address of the client, inferred by the event collector service.\n    Either the IP provided by AMP or the X-Forwarded-For header passed by the ELB.\n    Useful for cases when request.client_ip is not sent."
						}
					}
				},
				Mt = {
					$id: "http://com.reddit/schemas/field_definitions/midas/link_sharing.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Midas-enriched link sharing.",
					definitions: {
						shared_at_timestamp: {
							type: "number",
							description: "Timestamp when of when the viewed content was shared.\n\n    We add a param in shareable urls that contains the shared timestamp and the user id of the sharer.\n    This field is only populated if the viewer and the sharer are different."
						}
					}
				},
				Ht = {
					$id: "http://com.reddit/schemas/field_definitions/midas/url_parsed.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Midas-enriched url parsing.",
					definitions: {
						utm_source: {
							type: "string",
							description: "The top-level source of the UTM referral (standardized).\n\n    Examples:\n    bd,email,paid,share,social,reddit,xpromo\n    post_widget,image_widget,text_widget,calendar_widget"
						},
						shared_hash: {
							type: "string",
							description: 'Shared hash from the url parameters e.g. "c0138fa2".'
						},
						shared_timestamp: {
							type: "number",
							description: "Shared timestamp from the url parameters."
						},
						utm_content: {
							type: "string",
							description: "For differentiating otherwise identical links to the same content with different copy."
						},
						utm_campaign: {
							type: "string",
							description: "For differentiating what campaign this content is coming from."
						},
						utm_medium: {
							type: "string",
							description: "The specific type of element that the referrer came through (standardized).\n\n    Examples:\n    amp,android_app,appstore_search,bing_search,digest,email,facebook\n    facebook_retargeting,google_retarget,google_search,ios_app,mweb\n    paid,playstore_search,share,twitter,web2x,xpromo\n    small_widget,medium_widget,large_widget"
						},
						utm_name: {
							type: "string",
							description: "The name or edition of the campaign running, link, or date of newsletter."
						},
						utm_term: {
							type: "string",
							description: "The term of of the referrer. Subject content, etc."
						}
					}
				},
				Bt = {
					$id: "http://com.reddit/schemas/field_definitions/ml_model/m_l_model.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "A prediction made by an internal machine learning model.",
					definitions: {
						name: {
							type: "string",
							description: "The name of the ML model used to create this prediction."
						},
						features: {
							type: "string",
							description: 'Feature blob used to product the prediction.\n\n    Format is:\n    {"feature_name_0": "value0", "fature_name_1": "another_value", ...}\n\n    If used, please check in with the Data team to assess data volume and user security concerns.'
						},
						prediction_scores: {
							type: "string",
							description: 'JSON containing raw classification score correspond to each label.\n\n    The field is used for BINARY or MULTICLASS models.\n\n    Example:\n    {"label_1": "0.8", "label_2": "0.2", ...}'
						},
						client_name: {
							type: "string",
							description: "The name of the client issuing the ML prediction request (e.g. admin_tool)."
						},
						prediction: {
							type: "string",
							description: "The prediction made by the model. If numeric, still store as a string."
						},
						version: {
							type: "string",
							description: "Version of the model to help distinguish between iterations or training set.\n\n    Examples include v1, 0.1, 20190903, etc."
						},
						prediction_id: {
							type: "string",
							description: "A string giving a unique id for the prediction request.\n\n    The id is supplied by the client when issuing the prediction request. Clients are encouraged to\n    use the hex representation of a randonly generated v4 UUID but the type of the field is string\n    to keep it generic for other possible formats."
						},
						owner: {
							type: "string",
							description: "Team responsible for maintaining this model."
						},
						type: {
							type: "string",
							description: "The type of the ML predictive model used to fulfill the prediction request.\n\n    Examples:\n    binary,multiclass,regression"
						}
					}
				},
				Wt = {
					$id: "http://com.reddit/schemas/field_definitions/moderator/mod_action.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the characteristics of a moderator action.",
					definitions: {
						target_user_id: {
							type: "string",
							description: "Unique identifier of the account/owner being acted upon."
						},
						is_automoderator: {
							type: "boolean",
							description: "Whether action is taken by automoderator."
						},
						is_target_removed_by_steward: {
							type: "boolean",
							description: "Whether target of the action was autoremoved based on Steward reports."
						},
						duration: {
							type: "integer",
							description: "Duration, in days, for a temporary ban."
						}
					}
				},
				Vt = {
					$id: "http://com.reddit/schemas/field_definitions/mute/mute.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents information about mute history and length for the associated mute.",
					definitions: {
						total_mutes: {
							type: "integer",
							description: "The total number of mutes this user has had for this subreddit."
						},
						last_mute_timestamp: {
							type: "number",
							description: "The starting time (epoch ms) of the most recent mute."
						},
						state: {
							type: "string",
							description: "The length of this mute, defined as a string.\n\n    Examples:\n    temp_3d,temp_7d,temp_28d,permanent"
						}
					}
				},
				Qt = {
					$id: "http://com.reddit/schemas/field_definitions/navigation_session/navigation_session.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents a series of chained engagements with posts for full bleed player",
					definitions: {
						id: {
							type: "string",
							description: "UUID generated at the start of navigation session and persisted until the end\n\n    This ID should be of a uuid format and each should be randomly generated."
						},
						referring_page_type: {
							type: "string",
							description: "Page type location from which navigation session was started"
						},
						source: {
							type: "string",
							description: "Component name from which user started this navigation session.\n\n    Examples:\n    video_post,community_carousel,video_feed_button"
						}
					}
				},
				Gt = {
					$id: "http://com.reddit/schemas/field_definitions/notification/mailroom_request.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields for the Mailroom service that may trigger sending one or more notifications.",
					definitions: {
						message_type: {
							type: "string",
							description: 'The type of message that was queued, one of the types from Mailroom.MessageType.\n\n    Examples values: "username_mention", "private_message".'
						},
						dropped_by: {
							type: "string",
							description: 'If a message was dropped, the name of the object that made the decision to drop the message.\n\n    Example values:\n        * "UserPrefsDecider" - user disabled the given message_type.\n        * "PerUserMessageTypeDecider" - message was ratelimited for the recipient based on its message_type.\n        * "UsernameMentionPushNotificationRenderer" - notification renderer could not find any active devices\n            for the recipient.'
						},
						region_num: {
							type: "integer",
							description: "Used to distinguish the device's region as an integer.\n\n    Example values:\n        * 0 for US, 1 for EU, 2 for APAC"
						},
						message_id: {
							type: "string",
							description: "UUID for the message sent as a notification.\n\n    Note that multiple notifications can have the same message id."
						},
						notification_target: {
							type: "string",
							description: 'Hash of the "target" of the notification.\n\n    Note that different notification types have different targets.\n\n    Values:\n        * push: push token\n        * email: email address'
						},
						message_variant: {
							type: "string",
							description: 'Used to distinguish different sub-types within a given message_type.\n\n    For example, trending notifications send in two phases, one "explore" phase and one "exploit" phase.  This value is\n    used to distinguish between messages sent in each of those phases.\n\n    Example values:\n        * "explore"/"exploit" for "lifecycle_post_suggestions" notifications'
						},
						notification_transport: {
							type: "string",
							description: 'The transport that a notification is sent by.\n\n    For example "push" for push notifications or "email" for emails.'
						},
						region: {
							type: "string",
							description: 'Used to distinguish the device\'s region.\n\n    Example values:\n        * "america", "europe", "asia_pacific"'
						},
						delivery_queue_name: {
							type: "string",
							description: "The Deliveryman message queue that Mailroom enqueued a notification to."
						}
					}
				},
				Jt = {
					$id: "http://com.reddit/schemas/field_definitions/notification/messenger_request.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields for the Messenger service that may trigger sending one or more notifications.",
					definitions: {
						message_type: {
							type: "string",
							description: "The type of message being sent, e.g. 'lifecycle_post_suggestions'."
						},
						dropped_reason: {
							type: "string",
							description: "If a message was dropped, a short description for why, e.g. 'inactive_token'."
						},
						queue_name: {
							type: "string",
							description: "The queue, or stage, the message is being enqueued into."
						}
					}
				},
				Yt = {
					$id: "http://com.reddit/schemas/field_definitions/notification/notification_request.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields about notifications or manage notification resources such as push tokens.",
					definitions: {
						failure_reason: {
							type: "string",
							description: "If the request failed, a short, machine-readable string describing why."
						},
						message_id: {
							type: "string",
							description: "UUID for the message sent as a notification.\n\n    Note that multiple notifications can have the same message id."
						},
						recipient_app_name: {
							type: "string",
							description: "The app, e.g. ios or android, the notification is sent to.\n\n    Examples:\n    ios,android,desktop_chrome,android_chrome,desktop_edge,desktop_firefox,desktop_opera,unknown,email"
						},
						status: {
							type: "string",
							description: "The status of the request that was made.\n\n    Examples:\n    success,fail"
						},
						platform: {
							type: "string",
							description: "The push notification platform used.\n\n    Examples:\n    apns,apns_sandbox,apns_qa,apns_qa_sandbox,gcm,desktop_chrome,android_chrome,desktop_edge,desktop_firefox,desktop_opera"
						},
						recipient_device_id: {
							type: "string",
							description: "The device identifier for the recipient."
						},
						source_queue_name: {
							type: "string",
							description: "The message queue that the notification was read from."
						}
					}
				},
				Kt = {
					$id: "http://com.reddit/schemas/field_definitions/outbound/outbound.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Information about visiting outbound urls.",
					definitions: {
						url: {
							type: "string",
							description: "Outbound url the user visited.\n    \n    There's a lot of URL formats and it's pain to match them all.\n    Examples: google.com, https://google.com, /r/subreddit, /u/username, about:blank, etc."
						},
						subreddit_name: {
							type: "string",
							description: "Subreddit name if the URL is a subreddit URL."
						},
						post_id: {
							type: "string",
							description: "Post id if the URL is post URL."
						},
						subreddit_id: {
							type: "string",
							description: "Subreddit id if the URL is Subreddit URL."
						},
						comment_id: {
							type: "string",
							description: "Comment id if the URL is comment URL."
						},
						source_element: {
							type: "string",
							description: "Source element of this outbound click.\n\n    Examples:\n    listing_post_image,listing_post_link,listing_post_detail,post_image,post_link,post_detail,comment"
						}
					}
				},
				Zt = {
					$id: "http://com.reddit/schemas/field_definitions/payment/payment.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the characteristics of any event that involves a purchase.",
					definitions: {
						stored_credit_card_state: {
							type: "string",
							description: "State of using a saved or saving a new credit card.\n\n    Examples:\n    save_new,save_existing"
						},
						method: {
							type: "string",
							description: "Method used for purchase, e.g. credit card or paypal.\n\n    Examples:\n    creddit,credit_card,bitcoin,paypal,apple_pay,google_pay,coins"
						},
						amount_in_smallest_denom: {
							type: "integer",
							description: "Price in the smallest unit of the currency (cents for USD)."
						},
						currency: {
							type: "string",
							description: 'Currency used for purchase (e.g. "USD").'
						},
						default_option: {
							type: "string",
							description: "Default payment type selected when purchasing.\n\n    Examples:\n    paypal,credit_card"
						}
					}
				},
				Xt = {
					$id: "http://com.reddit/schemas/field_definitions/perspective/perspective.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Perspective is an API provided by TODO that does NLP on comments provides\nlabels",
					definitions: {
						inflammatory: {
							type: "number",
							description: '"inflammatory" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.'
						},
						max_identity_attack: {
							type: "number",
							description: 'Max allowed value for the "identity_attack" attribute\n    at the moment the message is scored.'
						},
						max_sexually_explicit: {
							type: "number",
							description: 'Max allowed value for the "sexually_explicit" attribute\n    at the moment the message is scored.'
						},
						obscene: {
							type: "number",
							description: '"obscene" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.'
						},
						toxicity: {
							type: "number",
							description: '"toxicity" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.'
						},
						max_attack_on_commenter: {
							type: "number",
							description: 'Max allowed value for the "attack_on_commenter" attribute\n    at the moment the message is scored.'
						},
						max_obscene: {
							type: "number",
							description: 'Max allowed value for the "obscene" attribute\n    at the moment the message is scored.'
						},
						profanity: {
							type: "number",
							description: '"profanity" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.'
						},
						max_flirtation: {
							type: "number",
							description: 'Max allowed value for the "flirtation" attribute\n    at the moment the message is scored.'
						},
						max_spam: {
							type: "number",
							description: 'Max allowed value for the "spam" attribute\n    at the moment the message is scored.'
						},
						collapse_reasons: {
							type: "array",
							description: "List of perspective reasons the comment being collapsed for."
						},
						max_inflammatory: {
							type: "number",
							description: 'Max allowed value for the "inflammatory" attribute\n    at the moment the message is scored.'
						},
						max_insult: {
							type: "number",
							description: 'Max allowed value for the "insult" attribute\n    at the moment the message is scored.'
						},
						insult: {
							type: "number",
							description: '"insult" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.'
						},
						max_unsubstantial: {
							type: "number",
							description: 'Max allowed value for the "unsubstantial" attribute\n    at the moment the message is scored.'
						},
						max_toxicity: {
							type: "number",
							description: 'Max allowed value for the "toxicity" attribute\n    at the moment the message is scored.'
						},
						max_profanity: {
							type: "number",
							description: 'Max allowed value for the "profanity" attribute\n    at the moment the message is scored.'
						},
						sexually_explicit: {
							type: "number",
							description: '"sexually_explicit" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.'
						},
						max_threat: {
							type: "number",
							description: 'Max allowed value for the "threat" attribute\n    at the moment the message is scored.'
						},
						id: {
							type: "string",
							description: "UUID generated by a scoring system to keep track of the scores."
						},
						attack_on_commenter: {
							type: "number",
							description: '"attack_on_commenter" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.'
						},
						max_likely_to_reject: {
							type: "number",
							description: 'Max allowed value for the "likely_to_reject" attribute\n    at the moment the message is scored.'
						},
						unsubstantial: {
							type: "number",
							description: '"unsubstantial" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.'
						},
						severe_toxicity: {
							type: "number",
							description: '"severe_toxicity" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.'
						},
						flirtation: {
							type: "number",
							description: '"flirtation" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.'
						},
						max_severe_toxicity: {
							type: "number",
							description: 'Max allowed value for the "severe_toxicity" attribute\n    at the moment the message is scored.'
						},
						identity_attack: {
							type: "number",
							description: '"identity_attack" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.'
						},
						threat: {
							type: "number",
							description: '"threat" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.'
						},
						max_attack_on_author: {
							type: "number",
							description: 'Max allowed value for the "attack_on_author" attribute\n    at the moment the message is scored.'
						},
						max_incoherent: {
							type: "number",
							description: 'Max allowed value for the "incoherent" attribute\n    at the moment the message is scored.'
						},
						spam: {
							type: "number",
							description: '"spam" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.'
						},
						attack_on_author: {
							type: "number",
							description: '"attack_on_author" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.'
						},
						likely_to_reject: {
							type: "number",
							description: '"likely_to_reject" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.'
						},
						incoherent: {
							type: "number",
							description: '"incoherent" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.'
						}
					}
				},
				ei = {
					$id: "http://com.reddit/schemas/field_definitions/playback/playback.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents fields related to a specific user's interactions with a video.",
					definitions: {
						scrubbing_start_ms: {
							type: "integer",
							description: "The time (in milliseconds) in the video where the user starts scrubbing player."
						},
						chat_state: {
							type: "string",
							description: "The chat display state of the video playback.\n\n    Values and their definitions:\n      * none: No chat displayed as overlay on the video\n      * full_screen: A full screen chat overlay on the video\n      * compact: A partial screen chat overlay on the video\n      \n    Examples:\n    none,full_screen,compact"
						},
						watch_duration_ms: {
							type: "integer",
							description: "The elapsed time (in milliseconds) of content watched since the start of the video playback session."
						},
						timestamp_ms: {
							type: "integer",
							description: "The current timestamp (in milliseconds) in the video."
						},
						player_type: {
							type: "string",
							description: "The player type of the video presentation\n\n    Values and their definitions:\n      * theater: The full screen RPAN theater experience\n      * feed_post: A stream as a post type embedded in a feed of posts\n      * discovery_unit: A stream embedded as part of a discovery unit\n      \n    Examples:\n    theater,feed_post,discovery_unit"
						},
						start_time_ms: {
							type: "integer",
							description: "The timestamp (epoch milliseconds) when the playback session started."
						},
						id: {
							type: "string",
							description: "Playback UUID."
						},
						is_live: {
							type: "boolean",
							description: "Is the stream live right now?"
						},
						playhead_offset_ms: {
							type: "integer",
							description: "The time offset (absolute value, in milliseconds) of the playhead from the maximum available timestamp of the video."
						},
						session_duration_ms: {
							type: "integer",
							description: "The time (in milliseconds) since the start of the video playback session."
						},
						heartbeat_duration_ms: {
							type: "integer",
							description: "The elapsed time (in milliseconds) of content watched since the last heartbeat of this playback session."
						},
						volume: {
							type: "integer",
							description: "The audio volume of the video playback, on a scale from 0 to 100 where 0 is muted."
						},
						scrubbing_end_ms: {
							type: "integer",
							description: "The time (in milliseconds) in the video where the user ends scrubbing player."
						}
					}
				},
				ti = {
					$id: "http://com.reddit/schemas/field_definitions/poll/poll.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Details about a poll in poll post.",
					definitions: {
						number_prediction_tokens: {
							type: "integer",
							description: "The number of tokens associated with the chosen prediction option."
						},
						user_vote_text: {
							type: "string",
							description: "Contains the text of the option the user voted on.\n\n    NOTE: This is only attached to user vote actions."
						},
						options_length: {
							type: "integer",
							description: "The number of options in the poll."
						},
						options_vote_totals: {
							type: "array",
							description: "Array of the number of votes the poll options currently have."
						},
						vote_affects_score: {
							type: "boolean",
							description: "If the user's vote counted towards the totals."
						},
						vote_affects_score_reason: {
							type: "string",
							description: "Reasons (if any) that influenced vote_affects_score."
						},
						options: {
							type: "array",
							description: "Array of the poll options with each option as a max 80 character text value."
						},
						number_prediction_coins: {
							type: "integer",
							description: "The number of coins associated with the chosen prediction option."
						},
						type: {
							type: "string",
							description: "Type of the poll.\n\n    Values and their definitions:\n        * poll: Regular poll with voting\n        * predict: Independent prediction, to be participated with Reddit Coins\n        * tournament: Tournament prediction"
						}
					}
				},
				ii = {
					$id: "http://com.reddit/schemas/field_definitions/popup/popup.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "A popup, either in web or mobile platforms.\n\nThis can take the form of a system popup or client popup and may require the\nuser to perform an action.",
					definitions: {
						id: {
							type: "string",
							description: "Unique id for the popup."
						},
						button_text: {
							type: "string",
							description: 'Popup button interacted with, e.g. for survey banners.\n\n    Example values include "allow" or "block"'
						},
						text: {
							type: "string",
							description: "Text shown to the user."
						}
					}
				},
				si = {
					$id: "http://com.reddit/schemas/field_definitions/post_draft/post_draft.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the characteristics of a post draft.",
					definitions: {
						url_length: {
							type: "integer",
							description: "Length of the URL for link drafts."
						},
						title_length: {
							type: "integer",
							description: "Length of the draft title."
						},
						number_rte_videos: {
							type: "integer",
							description: "Number of videos in the rich text draft."
						},
						flair: {
							type: "string",
							description: "Flair text of the draft."
						},
						nsfw: {
							type: "boolean",
							description: "Is the draft flagged as nsfw?"
						},
						spoiler: {
							type: "boolean",
							description: "Is the draft flagged as a spoiler?"
						},
						id: {
							type: "string",
							description: "Unique identifier of the PostDraft."
						},
						created_timestamp: {
							type: "number",
							description: "Timestamp of when the draft was created."
						},
						author_id: {
							type: "string",
							description: "Author of the draft, represented as an account ID."
						},
						body_text_length: {
							type: "integer",
							description: "Length of the draft content."
						},
						type: {
							type: "string",
							description: "Type of the draft.\n\n    Values and their definitions:\n        * self: markdown text\n        * link: link draft\n        * image: image draft\n        * video: video draft\n        * multi_media: rich text draft (RTE)\n\n    Examples:\n    self,link,image,video,multi_media"
						},
						original_content: {
							type: "boolean",
							description: "Is the draft flagged as original content."
						},
						number_rte_images: {
							type: "integer",
							description: "Number of images in the rich text draft."
						}
					}
				},
				ni = {
					$id: "http://com.reddit/schemas/field_definitions/post_requirement/post_requirement.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Requirements for a post to be submitted to a subreddit.",
					definitions: {
						title_text_max_length: {
							type: "integer",
							description: "The maximum length of the title."
						},
						title_blacklisted_strings: {
							type: "array",
							description: "A list of strings that are prohibited in the post title."
						},
						number_repost_frequency_days: {
							type: "integer",
							description: "Days since a link was posted before it can be reposted."
						},
						link_whitelisted_domains_length: {
							type: "integer",
							description: "Number of domains in the link whitelist."
						},
						require_post_flair: {
							type: "boolean",
							description: "Determines if all posts require a flair to be assigned."
						},
						body_required_strings: {
							type: "array",
							description: "A list of strings of which at least one must appear in the post body."
						},
						title_text_min_length: {
							type: "integer",
							description: "The minimum length of the title."
						},
						title_required_strings: {
							type: "array",
							description: "A list of strings of which at least one must appear in the post title."
						},
						title_regex_patterns: {
							type: "array",
							description: "A list of python regex expressions of which the title must match at least one."
						},
						link_blacklisted_domains_length: {
							type: "integer",
							description: "Number of domains in the link blackist."
						},
						body_restriction_policy: {
							type: "string",
							description: "Determines if we require or prohibit text in post bodies.\n\n    Examples:\n    optional,required,disabled"
						},
						body_blacklisted_strings: {
							type: "array",
							description: "A list of strings that are prohibited in the post body."
						},
						body_regex_patterns: {
							type: "array",
							description: "A list of python regex expressions of which the body must match at least one."
						}
					}
				},
				oi = {
					$id: "http://com.reddit/schemas/field_definitions/postflair/post_flair.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Flairs defined by users for a subreddit.\n\nPost flair is the flair that users assign to a post. Post flair is unique to a subreddit.",
					definitions: {
						id: {
							type: "string",
							description: "Unique id for the post flair."
						},
						title: {
							type: "string",
							description: "The display title for post flair."
						}
					}
				},
				ri = {
					$id: "http://com.reddit/schemas/field_definitions/powerups/powerups.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Attributes of powerups related actions: allocation, deallocation, subreddit tier up and down.",
					definitions: {
						automatic: {
							type: "boolean",
							description: "Was powerups action user initiated or automatic.\n\n    e.g. user manually deallocated powerups vs subscription expired."
						},
						count: {
							type: "integer",
							description: "Powerups count (for allocation/deallocation)."
						},
						is_grace_period: {
							type: "boolean",
							description: "If subreddit is currently in a grace period."
						},
						tier: {
							type: "integer",
							description: "Current effective Subreddit tier."
						},
						cnt_emoji: {
							type: "integer",
							description: "Powerups custom emoji count for the given action."
						},
						post_type: {
							type: "string",
							description: "Powerups benefits used for this post.\n\n    Nested string field (comma-separated)."
						},
						paid_count: {
							type: "integer",
							description: "Count of powerups that user has paid for.\n\n    For now fields free_count and paid_count are mutually exclusive."
						},
						free_count: {
							type: "integer",
							description: "Count of powerups that was provided for free or as a part of other subscription.\n\n    For now fields free_count and paid_count are mutually exclusive."
						},
						subscription_id: {
							type: "string",
							description: 'Subscription associated with allocated/deallocated powerups.\n\n    "premium" for powerups provided as a part of Reddit Premium subscription.'
						},
						benefit: {
							type: "string",
							description: "Benefit title in upsell.\n\n    Examples:\n    sd_video,posts_image_upload\n    hd_video,comments_with_gifs,comments_with_emoji"
						},
						current_subreddit_powerups: {
							type: "integer",
							description: "Current subreddit powerups count, after allocation."
						}
					}
				},
				ai = {
					$id: "http://com.reddit/schemas/field_definitions/predictions/predictions.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Attributes of predictions related actions: end, save, submit, discard.",
					definitions: {
						tournament_id: {
							type: "string",
							description: "Tournament associated with predictions."
						},
						post_cnt: {
							type: "integer",
							description: "Post count associated with prediction tournament."
						}
					}
				},
				di = {
					$id: "http://com.reddit/schemas/field_definitions/progress_module/progress_module.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents fields specific to Communnity Progress Module.\n\nA Community Progress Module is a series of action cards on iOS, Android, and d2x that\nhelp moderators to take actions that are most likely to build a successful community.",
					definitions: {
						module_name: {
							type: "string",
							description: 'Name of the community progress module.\n\n    e.g. "new_community_setup"'
						},
						card_name: {
							type: "string",
							description: 'Name of the community progress card.\n\n    e.g. "community_invite"'
						}
					}
				},
				ci = {
					$id: "http://com.reddit/schemas/field_definitions/pwa/p_w_a.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields related to Progressive Web App (PWA) features.",
					definitions: {
						installable: {
							type: "boolean",
							description: "True when a page can install a PWA."
						},
						installed: {
							type: "boolean",
							description: "True when PWA is installed (i.e. added to home screen)."
						},
						install_timestamp: {
							type: "number",
							description: "Timetamp (epoch ms) when PWA was installed."
						}
					}
				},
				pi = {
					$id: "http://com.reddit/schemas/field_definitions/rater_tag/rater_tag.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "This struct is used to capture community topic tag info.",
					definitions: {
						tagging_question: {
							type: "string",
							description: "The full text of the question asked."
						},
						non_selected_answers: {
							type: "array",
							description: "The set of non selected answers from the answer set"
						},
						tagging_question_object: {
							type: "string",
							description: 'The subject being evaluated.\n\n    e.g. "San Francisco, CA" for Geo, "Home and Garden" for Topic'
						},
						non_selected_answer_ids: {
							type: "array",
							description: "The set of non selected answer ids from the answer ids set"
						},
						rating_type: {
							type: "string",
							description: 'A string to describe the QA routing for example, "categorical", "ordinal" and "boolean"'
						},
						selected_answer_ids: {
							type: "array",
							description: "The set of selected answer ids from the answer ids set"
						},
						tagging_question_id: {
							type: "string",
							description: "The id of the question asked"
						},
						tagging_job_id: {
							type: "string",
							description: "A unique id associated with a particular batch of jobs."
						},
						selected_answers: {
							type: "array",
							description: "The set of selected answers from the answer set"
						},
						module_type: {
							type: "string",
							description: "An identifier for the type of community tagging module used"
						}
					}
				},
				mi = {
					$id: "http://com.reddit/schemas/field_definitions/relevance/relevance_model.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Relevance model schema.\n\nInformation about the usage and performance of relevance models.",
					definitions: {
						result_duration: {
							type: "integer",
							description: "Time took to make the result in milliseconds."
						},
						identifier: {
							type: "string",
							description: "The name or identifier of the model."
						},
						number_max_recommendations: {
							type: "integer",
							description: "Max number of results returned."
						},
						version: {
							type: "string",
							description: "The version of the model family. For example, 2018-03-11-comment-features."
						},
						result_blob: {
							type: "string",
							description: "JSON text blob of result specific to each model."
						},
						family: {
							type: "string",
							description: "The model family -- e.g. LogisticRegression, RandomForest, Perceptron ;)"
						},
						feature_blob: {
							type: "string",
							description: "JSON text blob of features specific to each model."
						}
					}
				};
			const _i = [s, n, o, r, a, d, c, p, m, _, h, f, l, u, g, y, v, b, w, j, $, k, x, q, P, E, T, S, A, R, D, I, F, O, C, U, z, L, N, M, H, B, W, V, Q, G, J, Y, K, Z, X, ee, te, ie, se, ne, oe, re, ae, de, ce, pe, me, _e, he, fe, le, ue, ge, ye, ve, be, we, je, $e, ke, xe, qe, Pe, Ee, Te, Se, Ae, Re, De, Ie, Fe, Oe, Ce, Ue, ze, Le, Ne, Me, He, Be, We, Ve, Qe, Ge, Je, Ye, Ke, Ze, Xe, et, tt, it, st, nt, ot, rt, at, dt, ct, pt, mt, _t, ht, ft, lt, ut, gt, yt, vt, bt, wt, jt, $t, kt, xt, qt, Pt, Et, Tt, St, At, Rt, Dt, It, Ft, Ot, Ct, Ut, zt, Lt, Nt, Mt, Ht, Bt, Wt, Vt, Qt, Gt, Jt, Yt, Kt, Zt, Xt, ei, ti, ii, si, ni, oi, ri, ai, di, ci, pi, mi, {
				$id: "http://com.reddit/schemas/field_definitions/report/report.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Represents the characteristics of a user report of content on site.",
				definitions: {
					reason_code: {
						type: "string",
						description: "Type of report.\n\n    There are a large number of possible values for this field.\n    Please check events we currently have in BigQuery for values already in use."
					},
					id: {
						type: "string",
						description: "Required identifier for a report.\n\n    This field is a report's reddit_id. Prefix 'reports__'\n    followed by base36 value.\n    For example: 'reports__23b'"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/request/api.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "This struct is deprecated and will be removed soon!",
				definitions: {
					name: {
						type: "string",
						description: "This field is deprecated and will be removed soon!"
					},
					address: {
						type: "string",
						description: "This field is deprecated and will be removed soon!"
					},
					endpoint: {
						type: "string",
						description: "This field is deprecated and will be removed soon!"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/request/api_response.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "This struct is deprecated and will be removed soon!",
				definitions: {
					response_code: {
						type: "integer",
						description: "This field is deprecated and will be removed soon!"
					},
					error_name: {
						type: "string",
						description: "This field is deprecated and will be removed soon!"
					},
					error: {
						type: "string",
						description: "This field is deprecated and will be removed soon!"
					},
					content: {
						type: "string",
						description: "This field is deprecated and will be removed soon!"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/request/oauth.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Fields for Oauth clients.",
				definitions: {
					client_app_type: {
						type: "string",
						description: "OAuth client type.\n\n    Examples:\n    web,installed,script"
					},
					client_name: {
						type: "string",
						description: "This is the name of client application making the request.\n\n    For example, in the instance of using a browser, this field is the name of that browser."
					},
					client_id: {
						type: "string",
						description: "The reddit internal id of this oauth client."
					},
					scopes: {
						type: "array",
						description: "OAuth authorization scopes list.\n\n    Examples:\n    account,adsedit,adsread,creddits,edit,email,flair,history,identity,modcontributors,modflair\n    modmail,modposts,modconfig,modlog,modothers,modself,modtraffic,modwiki,mysubreddits,privatemessages\n    read,report,save,sponsor,structuredstyles,submit,subscribe,vote,wikiedit,wikiread,xbox"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/request/referrer.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Fields related to HTTP Refer(r)ers.",
				definitions: {
					domain: {
						type: "string",
						description: "Hostname/domain of the referrer, possibly including the port."
					},
					url: {
						type: "string",
						description: "The referrer path (e.g., /message/inbox)"
					},
					element: {
						type: "string",
						description: "This field is deprecated and will be removed soon!"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/request/request.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Raw HTTP request data.",
				definitions: {
					reddaid: {
						type: "string",
						description: "Reddit Ad Id, typically set as a cookie or otherwise passed in for client-side requests."
					},
					loginbot: {
						type: "boolean",
						description: "Is login request coming from a login bot?"
					},
					tls_fingerprint: {
						type: "string",
						description: "TLS fingerprint from Fastly - hash of the ciphersuite and extensions used for HTTPS request"
					},
					robots_meta_tag: {
						type: "string",
						description: 'A directive used for "robots" meta tag if such tag exists in page\'s DOM.'
					},
					canonical_url: {
						type: "string",
						description: "The request canonical url."
					},
					ratelimit_count: {
						type: "integer",
						description: "The number of requests counted in the current ratelimit time-bucket."
					},
					domain: {
						type: "string",
						description: "Domain of the request."
					},
					known_bot: {
						type: "string",
						description: "This field is deprecated and will be removed soon!"
					},
					isp_organization: {
						type: "string",
						description: 'The ISP the request came from, e.g. "Cox Business".\n\n    Note that these are human-readable values intended for SWAT investigation.'
					},
					accept_encoding: {
						type: "boolean",
						description: "Did the request contain an Accept-Encoding header?"
					},
					amazon_aid: {
						type: "string",
						description: "Amazon's Advertising Id set by Amazon devices.\n\n    More details here: https://developer.amazon.com/docs/fire-tv/advertising-id.html"
					},
					accept_language: {
						type: "boolean",
						description: "This field is deprecated and will be removed soon!"
					},
					user_agent: {
						type: "string",
						description: "The full User-Agent provided to the request.\n\n    Note that user agents are provided by clients, including rogue scrapers.\n    The validator has been disabled as we cannot control the field value."
					},
					base_url: {
						type: "string",
						description: "The request path."
					},
					google_aaid: {
						type: "string",
						description: "Google Advertising Id set by Android devices.\n\n    More details here: https://support.google.com/googleplay/android-developer/answer/6048248"
					},
					apple_ios_aid: {
						type: "string",
						description: "Apple Advertising Id set by iOS devices.\n\n    More details here: https://developer.apple.com/documentation/adsupport/asidentifiermanager/1614151-advertisingidentifier"
					},
					server_render_id: {
						type: "string",
						description: "Server-side HTML render's unique id.\n\n    Used to mostly for page delivery bounce rates.\n    The first screen view from JavaScript in the browser will re-use\n    the same server_render_id as the server-side request.\n\n    Screen views without a server_render_id can be inferred to\n    client-side navigations handled by JavaScript, vs the browser\n    doing a full navigation that requests HTML from the servers."
					},
					header_signature: {
						type: "string",
						description: "Hash of the ordered headers from anti-evil fingerprinting.\n\n    Example value: Am:GX:Ac:kF:h0:a6:z/:kF:lw"
					},
					google_client_id: {
						type: "string",
						description: "Unique identifier associated with a particular user on AMP pages"
					},
					cookies_present: {
						type: "boolean",
						description: "Were there cookies present in the request?"
					},
					ratelimit_type: {
						type: "string",
						description: 'Which ratelimit ruleset applies to this request.\n\n    One of "oauth", "api", or "web" depending on how the request was\n    classified.'
					},
					accept_language_header: {
						type: "string",
						description: "Accept-Language header contents.\n\n    Note that this field is named as such to avoid collision with the accept_language field."
					},
					parameters: {
						type: "string",
						description: 'Query string preceded by "?", e.g. "count=25&after=t3_b3fzt5".'
					},
					client_ip: {
						type: "string",
						description: "Hashed IP of the client sending the event. This value will never be populated in BigQuery.\n\n    Note that this field is passed in as a plain IP as Midas relies on this field to do geo enrichment.\n    Both IPv4 and IPv6 are accepted. The event pipeline will then sanitize this field as required."
					},
					ratelimit_exceeded: {
						type: "boolean",
						description: "Was this request made in excess of ratelimits?\n\n    If true, this request would be / was rejected depending on if enforcement\n    is enabled."
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/request/response.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Raw HTTP Response data.",
				definitions: {
					last_modified_timestamp: {
						type: "number",
						description: "Last-Modified HTTP header value converted to epoch timestamp.\n\n    Example value: 1445412480000."
					},
					code: {
						type: "integer",
						description: "Response status code, e.g. 200, 301, 500, etc."
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/request/zipkin.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Fields used to capture zipkin traces.\n\nMore information here: https://zipkin.io/pages/instrumenting.html",
				definitions: {
					trace_id: {
						type: "string",
						description: "Zipkin trace ID."
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/res/r_e_s.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Fields related to tracking Reddit Enhancement Suite (aka RES) plugin.",
				definitions: {
					version: {
						type: "string",
						description: "RES plugin version."
					},
					night_mode: {
						type: "boolean",
						description: "Is night mode enabled in RES?"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/restrict/restrict.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Type of settings that can be restricted through reddar admin tools.\n\nWhen True, the setting has been toggled to be in its restricted state.\nWhen False, the setting has been toggled to be in its not restricted state.\nWhen None, the setting has not been toggled.",
				definitions: {
					unverified_email_viewers: {
						type: "boolean",
						description: "Set to true when an admin requires verified email to opt-in to view the\n    subreddit via Reddar's quarantine panel.\n\n    Corresponds with (Subreddit.quarantine_require_email_for_optin) in the thing service"
					},
					poll_posts: {
						type: "boolean",
						description: "Set to true when an admin disables poll posts via Reddar's restrict panel.\n\n    Corresponds with thing service's Subreddit.admin_frozen_fields.allow_polls"
					},
					subreddit_linking: {
						type: "boolean",
						description: "Set to true when an admin disables subreddit linking via Reddar's restrict panel.\n\n    Corresponds with (not Subreddit.allow_subreddit_linking) in the thing service"
					},
					media_embeds: {
						type: "boolean",
						description: "Set to true when an admin disables media embeds via Reddar's quarantine panel.\n\n    Corresponds with (not Subreddit.quarantine_allow_media) in thing service"
					},
					unverified_email_interaction: {
						type: "boolean",
						description: "Set to true when an admin requires verified email to interact with the subreddit via Reddar's quarantine panel.\n\n    Corresponds with (Subreddit.quarantine_require_email_for_interaction) in the thing service"
					},
					video_posts: {
						type: "boolean",
						description: "Set to true when an admin disables video posts via Reddar's restrict panel.\n\n    Corresponds with thing service's Subreddit.admin_frozen_fields.allow_videos"
					},
					crossposts: {
						type: "boolean",
						description: "Set to true when an admin disables crossposts via Reddar's quarantine panel.\n\n    Corresponds with (not Subreddit.quarantine_allow_crossposts) in thing service"
					},
					subreddit_images: {
						type: "boolean",
						description: "Set to true when an admin disables the sub's banner image and icon via Reddar's quarantine panel.\n\n    Corresponds with (not Subreddit.quarantine_allow_images) in thing service"
					},
					username_linking: {
						type: "boolean",
						description: "Set to true when an admin disables username linking via Reddar's restrict panel.\n\n    Corresponds with (not Subreddit.allow_username_linking) in the thing service"
					},
					image_posts: {
						type: "boolean",
						description: "Set to true when an admin disables image posts via Reddar's restrict panel.\n\n    Corresponds with thing service's Subreddit.admin_frozen_fields.allow_images"
					},
					subreddit_styles: {
						type: "boolean",
						description: "Set to true when an admin disables the sub's styles via Reddar's quarantine panel.\n\n    Corresponds with (not Subreddit.quarantine_allow_styles) in thing service"
					},
					subscriber_count_visibility: {
						type: "boolean",
						description: "Set to true when an admin hides the subscriber count via Reddar's quarantine panel.\n\n    Corresponds with (not Subreddit.quarantine_allow_subscriber_count) in thing service"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/reward/reward_info.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Represents the reward type and amount.",
				definitions: {
					type: {
						type: "string",
						description: "Type of reward.\n\n    Examples:\n    coin,trophy,no_ads,rick_roll,no_reward"
					},
					amount: {
						type: "integer",
						description: "Amount of reward."
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/scheduled_post/scheduled_post.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Represents a scheduled post.",
				definitions: {
					last_modified_user_id: {
						type: "string",
						description: "Last modifier of the scheduled post, represented as an account ID."
					},
					submission_timestamp: {
						type: "number",
						description: "UTC timestamp of when the scheduled post is submitted."
					},
					recurring_frequency: {
						type: "string",
						description: "What type of recurrence frequency?\n    \n    Examples:\n    daily,weekly,monthly,annual"
					},
					recurring_intervals: {
						type: "integer",
						description: 'How often does the post get scheduled on the recurrence frequency?\n    e.g. "Repeat every THREE days"'
					},
					creator_user_id: {
						type: "string",
						description: "Creator of the scheduled post, represented as an account ID."
					},
					timezone: {
						type: "string",
						description: "User selected pytz timezone."
					},
					recurring_interval_period: {
						type: "array",
						description: "Which specific day(s) does the recurrence fall on?\n    e.g. ['december_25'] for annual"
					},
					is_recurring: {
						type: "boolean",
						description: "Is the scheduled post a recurring post?"
					},
					id: {
						type: "integer",
						description: "Unique identifier of a scheduled post."
					},
					submitted_post_id: {
						type: "string",
						description: "Id of the post created when the scheduled post is submitted"
					},
					number_recurrences: {
						type: "integer",
						description: "How many times the scheduled posts recurs before it should stop."
					},
					created_timestamp: {
						type: "number",
						description: "UTC timestamp of when the scheduled post is created."
					},
					milestone_type: {
						type: "string",
						description: 'Optional field which describes whether or not a scheduled posts, and\n    if so, what type of milestone post. E.g. "cakeday"'
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/search/search.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Fields related to client searches, e.g. typeahead, subreddit, post, rails related searches.",
				definitions: {
					meta_flair_id: {
						type: "string",
						description: 'Unique id flairs provided by reddit.\n\n    Usually in the format of "cX" where X is a number.'
					},
					post_flair_name: {
						type: "string",
						description: "The human readable flair used in post search."
					},
					number_comments: {
						type: "integer",
						description: "The number of comments returned for a particular search query."
					},
					subreddit_name: {
						type: "string",
						description: "Lowercase name of the subreddit, e.g. askreddit."
					},
					post_id: {
						type: "string",
						description: "The post_id to which a comment search is restricted"
					},
					query: {
						type: "string",
						description: "Search query string.\n\n    Note that we allow any arbitrary string to be a query, including empty strings."
					},
					origin_page_type: {
						type: "string",
						description: 'Action info page_type of search referrer e.g. "subreddit", "home", "community".'
					},
					comment_ids: {
						type: "array",
						description: "The results of this search stored as a list of thing ids.\n\n    Note this field may be truncated to keep event payload small."
					},
					subreddit_id: {
						type: "string",
						description: "The search within subreddit."
					},
					origin_element: {
						type: "string",
						description: "Origin for the page_type e.g meta_flair, post_flair, search_bar."
					},
					links: {
						type: "array",
						description: "The results of this search stored as a list of thing ids.\n\n    Note this field may be truncated to keep event payload small."
					},
					query_id: {
						type: "string",
						description: 'Unique Query ID generated by the client for each search request.\n\n    Example value: "E590CC15-900C-44DF-9A58-82565230F3D2"'
					},
					range: {
						type: "string",
						description: "Search results range string, e.g. hour, day, week.\n\n    Examples:\n    hour,day,week,month,year,all"
					},
					nsfw_reason: {
						type: "string",
						description: "Why the search results had the nsfwness they did.\n\n    Examples:\n    profile,preference,explicit\n    *"
					},
					sort: {
						type: "string",
						description: "Sorting options for search results.\n\n    Examples:\n    hot,new,rising,top,controversial,gilded,wiki,promoted,best\n    confidence,qa,old,live,relevance,comments,timestamp,score,upvotes"
					},
					subreddit_ids: {
						type: "array",
						description: "The results of this search stored as a list of thing ids.\n\n    Note this field may be truncated to keep event payload small."
					},
					structure_type: {
						type: "string",
						description: 'Pre-configured structured search query type.\n\n    Example values: "trending", "recent", etc.'
					},
					author_names_filter: {
						type: "array",
						description: "List of lowercase author names to restrict a search\n\n    Note this field may be truncated to keep event payload small."
					},
					number_links: {
						type: "integer",
						description: "The number of results available for this search query.\n\n    Note that this is not necessarily the number shown to the user."
					},
					meta_flair_name: {
						type: "string",
						description: 'The display title of the MetaFlair/category, such as "Animals" or "Pics & GIFS".'
					},
					number_subreddits: {
						type: "integer",
						description: "The number of subreddits returned for a particular search query."
					},
					typeahead_active: {
						type: "boolean",
						description: "Does this search bar supports typeahead or not on this page."
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/security/two_factor_auth.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Fields to capture two factor authentication activity.",
				definitions: {
					device_name: {
						type: "string",
						description: "The user-visible name of this device.\n\n    Does double duty as the role authenticated by this device until we support multiple devices per role."
					},
					otp_embedded_in_password: {
						type: "boolean",
						description: "Were the bytes representing the authentication token for this device sent to us embedded in the user's password?"
					},
					device_exists: {
						type: "boolean",
						description: "Does this device exist for 2FA?\n\n    Used to flag events for non-existent devices such as users attempting a 2FA login when they are not set\n    up for it."
					},
					device_previous_remaining_backup_codes: {
						type: "integer",
						description: "Number of unused backup codes available before they were all destroyed."
					},
					backup_code_used: {
						type: "boolean",
						description: "Was a backup code used instead of the primary mechanism for this device?"
					},
					device_backup_codes_remaining: {
						type: "integer",
						description: "Number of unused backup codes are associated with this device."
					},
					device_algorithm: {
						type: "string",
						description: "The algorithm this device uses to verify the authentication token."
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/seo/s_e_o.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Fields related to search engine optimization (SEO).",
				definitions: {
					internal_link_url: {
						type: "string",
						description: "The URL of a link displayed in an experiment-related A/B test"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/session/session.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Fields related to an user session.",
				definitions: {
					referrer_domain: {
						type: "string",
						description: "Domain of the referrer."
					},
					referrer_url: {
						type: "string",
						description: "Referrer URL."
					},
					anonymous_browsing_mode: {
						type: "boolean",
						description: "Flag indicating if the session mode is Anonymous Browsing."
					},
					version: {
						type: "string",
						description: "Session version. \n\n    Should be 0."
					},
					id: {
						type: "string",
						description: "Unique identifier for the session.\n\n    Note that this is not a fullname."
					},
					created_timestamp: {
						type: "number",
						description: "Timestamp of when the session was created, e.g. session start time."
					},
					type: {
						type: "string",
						description: "This field is deprecated and will be removed soon!"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/setting/setting.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Represents a change a user made to one of their settings.",
				definitions: {
					scope: {
						type: "string",
						description: "The scope of the setting.\n\n    We support settings which are applied to individual subreddits.\n    This allows us to differentiate between those and regular account\n    level settings.\n\n    Examples:\n    account,subreddit"
					},
					old_value: {
						type: "string",
						description: "The previous value of the given setting."
					},
					old_values: {
						type: "array",
						description: "Old values of the given setting, for settings with multiple items."
					},
					values: {
						type: "array",
						description: "Current values of the given setting, for settings with multiple items."
					},
					value: {
						type: "string",
						description: "The current value of the given setting."
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/snoovatar/snoovatar.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Snoovatar",
				definitions: {
					user_generated: {
						type: "string",
						description: "The t2_id of the original avatar author (in case avatar was created on the base of some existing one)"
					},
					has_premium_gear: {
						type: "boolean",
						description: "Boolean field indicating if the snoovatar at the time of saving included at least one premium gear item"
					},
					gear_hair: {
						type: "string",
						description: "String containing one or more comma-separated hair gear ids"
					},
					gear_hair_acc: {
						type: "string",
						description: "String containing one or more comma-separated hair accessory gear ids"
					},
					gear_bottom_acc: {
						type: "string",
						description: "String containing one or more comma-separated bottom accessory gear ids"
					},
					nft_name: {
						type: "string",
						description: "String referring to the name of an nft avatar *"
					},
					full_image_url: {
						type: "string",
						description: "The URL of a rendered full Snoovatar image"
					},
					user_generated_source: {
						type: "string",
						description: "Identifies where the user generated avatar is sourced from.\n\n    Examples:\n    copy,share"
					},
					id: {
						type: "integer",
						description: "The id of a Snoovatar in snoovatar service"
					},
					gear_expression: {
						type: "string",
						description: "String containing one or more comma-separated expression gear ids"
					},
					gear_top: {
						type: "string",
						description: "String containing one or more comma-separated top gear ids"
					},
					snoovatar_active: {
						type: "boolean",
						description: "Whether or not a user has a Snoovatar"
					},
					user_has_nft: {
						type: "boolean",
						description: "Whether or not a user has an nft set as an avatar *"
					},
					headshot_image_url: {
						type: "string",
						description: "The URL of a rendered headshot Snoovatar image"
					},
					gear_bottom: {
						type: "string",
						description: "String containing one or more comma-separated bottom gear ids"
					},
					gear_id: {
						type: "string",
						description: "Gear ID, aka Accessory ID"
					},
					gear_face_acc: {
						type: "string",
						description: "String containing one or more comma-separated face accessory gear ids"
					},
					gear_top_acc: {
						type: "string",
						description: "String containing one or more comma-separated top accessory gear ids"
					},
					gear_status: {
						type: "string",
						description: "String containing the status of the gear item clicked"
					},
					gear_face: {
						type: "string",
						description: "String containing one or more comma-separated face gear ids"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/spamurai/spamurai_action.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Fields related to the triggered Spamurai action.",
				definitions: {
					channel: {
						type: "string",
						description: "For slack(), the full channel name Spamurai posts to."
					},
					is_unapprovable: {
						type: "boolean",
						description: "For ban(), whether a moderator will be prevented from re-approving the Thing after we ban it."
					},
					is_ban_all: {
						type: "boolean",
						description: "For neuter(), whether a user's previously posted content should be banned."
					},
					task_name: {
						type: "string",
						description: "Human-readable name of the task that contains the triggered action."
					},
					task_version: {
						type: "string",
						description: "Version of the task that contains the triggered action."
					},
					thing_id: {
						type: "string",
						description: "Full name of the Thing that triggers actions."
					},
					is_mark_for_alt_tracking: {
						type: "boolean",
						description: "For neuter(), whether a user should be marked for alt tracking."
					},
					is_unban_all: {
						type: "boolean",
						description: "For unneuter(), whether a user's previously posted content should be unbanned."
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/subreddit/profile.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Fields related to user profiles.",
				definitions: {
					name: {
						type: "string",
						description: "Name of the user."
					},
					cover_url: {
						type: "string",
						description: "URL of the uploaded cover image."
					},
					display_name: {
						type: "string",
						description: "Profile display name set by the user, which is seperate from the profile name.\n\n    This is only shown in the user's profile."
					},
					nsfw: {
						type: "boolean",
						description: "Is the profile marked as NSFW?"
					},
					id: {
						type: "string",
						description: "Fullname of the profile."
					},
					type: {
						type: "string",
						description: 'Type of the profile, either "default" or "legacy".\n\n    Examples:\n    default,legacy'
					},
					content_visible: {
						type: "boolean",
						description: "Did the user set the content visibility to true?"
					},
					about: {
						type: "string",
						description: "About description created by the user."
					},
					avatar_url: {
						type: "string",
						description: "URL of the uploaded avatar."
					},
					communities_visible: {
						type: "boolean",
						description: "Did the user set the Active in Communities to true?"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/subreddit/subreddit.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Fields related to subreddits.\n\nDid you know: Subreddits were greatly controversial when first introduced back in 2008 as users felt that\nReddit should be organized around tags, not communities?",
				definitions: {
					post_difficulty_rating: {
						type: "string",
						description: "Post difficulty rating of the subreddit\n\n    Examples:\n    easy,medium,hard"
					},
					name: {
						type: "string",
						description: "Lowercase name of the subreddit, e.g. askreddit."
					},
					topic_tag_ids: {
						type: "array",
						description: "The topic_tag ids associated with this subreddit.\n\n    This is related to topic_tag_contents, topic_tag_types, and topic_tag_primary_id"
					},
					quarantined: {
						type: "boolean",
						description: "Is this subreddit quarantined?"
					},
					category_name: {
						type: "string",
						description: 'Original content category name that subreddit represent.\n\n    Example values include "comics", "diy", "pics_and_gifs" etc.'
					},
					nsfw: {
						type: "boolean",
						description: "Is this subreddit marked as nsfw?"
					},
					number_coins: {
						type: "integer",
						description: "Coin balance of the subreddit"
					},
					subscriber_count: {
						type: "integer",
						description: "The subscriber count at the time the event is sent."
					},
					whitelist_status: {
						type: "string",
						description: "Whitelist status, used to classify what types of advertisements should be shown in this subreddit.\n\n    More details here: https://reddit.atlassian.net/wiki/spaces/ADS/pages/120337999/Whitelist+Statuses\n\n    Value definitions:\n        * no_ads - No ads of any kind will show on this subreddit.\n        * house_only - Only ads set to the house priority will show.\n        * promo_specified - (Deprecated) Only ads targeting that subreddit will appear.\n        * promo_adult_nsfw - (Deprecated) Subreddits in this category must be age-gated.\n        * promo_adult_sfw - (Deprecated) Subreddits in this category are not age-gated, but still adult themed.\n        * promo_all - (Deprecated) All promoted posts (self-serve or managed) will show on this subreddit.\n        * all_ads - All promoted posts and banners will show on this subreddit.\n        * some_ads - Some promoted posts and banners will show on this subreddit."
					},
					topic_tag_primary_id: {
						type: "string",
						description: "The topic_tag primary topic associated with this subreddit.\n\n    This is related to topic_tag_ids, topic_tag_contents, and topic_tag_types"
					},
					id: {
						type: "string",
						description: "Fullname of the subreddit."
					},
					public_description: {
						type: "string",
						description: "Public description of the subreddit."
					},
					access_type: {
						type: "string",
						description: "Accessibility type for the subreddit, e.g. employee only.\n\n    Examples:\n    archived,employees_only,gold_only,gold_restricted,private,public,restricted,user"
					},
					topic_tag_contents: {
						type: "array",
						description: "The topic_tag contents associated with this subreddit.\n\n    This is related to topic_tag_ids, topic_tag_types, and topic_tag_primary_id"
					},
					topic_tag_types: {
						type: "array",
						description: "The topic_tag types associated with this subreddit.\n\n    This is related to topic_tag_ids, topic_tag_contents, and topic_tag_primary_id"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/survey/survey.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Details about a survey and the responses given by a user.\n\nA survey may consist of several steps, each with their own type,\nand events are sent for each step - e.g. a survey might have three steps,\neach with their own type and follow up question, and we will send events\nfor each response the user provides along the way.",
				definitions: {
					question: {
						type: "string",
						description: "The name of the experiment that triggered the survey.\n    */\n    6: typedefs.StringLower experiment_name\n    /**\n    The variant of the experiment that the user was bucketed in when the survey was triggered.\n\n    Example values: control_1, control_2, signup_cta\n    */\n    7: typedefs.StringLower experiment_variant\n    /** The version of the experiment that triggered the survey. */\n    8: string experiment_version\n    /** The text of the question being asked on this particular step of the survey."
					},
					score: {
						type: "integer",
						description: "The score given by the user, only set on `submit` - `rating` events"
					},
					min: {
						type: "integer",
						description: "The minimum value allowable score, only set on `rating` events.\n\n    May change in the future but for now: NPS 0, CES & CSAT 1."
					},
					text: {
						type: "string",
						description: "The user's answer to the freeform text section following a rating, only set on `submit` - `freeform_text` events."
					},
					max: {
						type: "integer",
						description: "The maximum allowable score, only set on `rating` events.\n\n    May change in the future but for now: NPS 10, CES & CSAT 7."
					},
					type: {
						type: "string",
						description: "The survey type of this step in the user flow.\n\n    Examples:\n    nps,ces,csat"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/target_ip/target_i_p.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Information regarding the Target IP.",
				definitions: {
					address: {
						type: "string",
						description: "IP address of the target user."
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/thirdpartybadge/third_party_badge.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Badges look visually like flairs but are used by third parties (ex. Patreon)",
				definitions: {
					id: {
						type: "string",
						description: "Unique ID for the user flair."
					},
					title: {
						type: "string",
						description: "The display title for the badge."
					},
					target_user_id: {
						type: "string",
						description: "Target user receiving the flair."
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Information regarding Reddar-generated tickets.",
				definitions: {
					copyright_owner: {
						type: "string",
						description: "Name of the copyright holder for DMCA requests.\n\n    read-access:swat@reddit.com"
					},
					queue_id: {
						type: "string",
						description: "The ID of the Reddar queue associated with this ticket.\n\n    Prefix 'queues__' followed by base36 value.\n    For example: 'queues__23b'"
					},
					id: {
						type: "string",
						description: "Required identifier for a reddar ticket.\n\n    This field is a reddar ticket's reddit_id. Prefix 'tickets__'\n    followed by base36 value.\n    For example: 'tickets__23b'"
					},
					content_review_time: {
						type: "integer",
						description: "Amount of time in milliseconds that an admin worked on ticket, per content."
					},
					reddar_features_used: {
						type: "array",
						description: "A list of reddar features that were used while the user was actioning tickets."
					},
					status: {
						type: "string",
						description: "Used by admin tickets to specify the current state of the ticket.\n\n    Examples:\n    open,assigned,in_review,closed"
					},
					report_source: {
						type: "string",
						description: "Source of the report which created the ticket.\n\n    reddit-service-admin admin.thrift enum IncomingReportSource\n\n    Examples:\n    help_center,spamurai,google_csai,photodna,client,reddar\n    zendesk,zendesk_dmca_form,zendesk_dmca_email"
					},
					requestor_id: {
						type: "string",
						description: "The ID of the requestor associated with this ticket.\n\n    Prefix 'requestors__' followed by base36 value.\n    For example: 'requestors__23b'"
					},
					num_content_items: {
						type: "integer",
						description: "How many pieces of content were on the ticket at the time of review."
					},
					type: {
						type: "string",
						description: "Used by admin tickets to specify the complaint type, e.g. harassment.\n\n    There are a large number of possible values for this field.\n    Please check events we currently have in BigQuery for values already in use."
					},
					ticket_review_time: {
						type: "integer",
						description: "Amount of time in milliseconds that an admin worked on a ticket."
					},
					requestor_name: {
						type: "string",
						description: "Name of the requestor for DMCA requests.\n\n    read-access:swat@reddit.com"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket_content.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Information regarding content linked to ReddarTicket",
				definitions: {
					reported_url: {
						type: "string",
						description: "Url reported by user (extracted from zendesk ticket)."
					},
					target_id: {
						type: "string",
						description: "The reddit ID of content associated with this ticket content.\n    Can be empty in case reported url doesn't resolve to valid reddit content."
					},
					status_reason: {
						type: "string",
						description: "Reason for current status associated with this ReddarTicketContent.\n\n    reddit-service-admin admin.thrift enum TicketContentStatusReason\n\n    There are a large number of possible values for this field.\n    Please check events we currently have in BigQuery for values already in use."
					},
					post_nsfw: {
						type: "boolean",
						description: "Flag indicating if associated post is marked as NSFW."
					},
					content_type: {
						type: "string",
						description: "Content type of reported url for DMCA requests. Identifies if reported url is invalid for\n    DMCA (third_party_link) and specifies type of reddit hosted content requested for DMCA\n    takedown.\n\n    Reflects values defined in admin-service admin.thrift ContentType.\n\n    Examples:\n    image,video,post,comment,third_party_link,thumbnail,preview,subreddit_icon"
					},
					target_created_timestamp: {
						type: "number",
						description: "The date when the reddit content associated with this ticket content was created.\n\n    This field can be empty in case reported url doesn't resolve to valid reddit content."
					},
					id: {
						type: "string",
						description: "Required identifier for a reddar ticket content.\n\n    This field is a reddar ticket contents's reddit_id. Prefix 'ticket_contents__'\n    followed by base36 value.\n    For example: 'ticket_contents__23b'"
					},
					status: {
						type: "string",
						description: "Status of content associated with this ReddarTicketContent.\n\n    reddit-service-admin admin.thrift enum TicketContentStatus\n\n    Examples:\n    not_actioned,dmca_invalid,dmca_info_requested,dmca_takedown_requested\n    dmca_takedown_inprogress,dmca_takedown_completed,dmca_takedown_failed"
					},
					target_type: {
						type: "string",
						description: "Type of reddit content.\n\n    Examples:\n    post,comment,user,message,subreddit"
					},
					removed_by_moderator: {
						type: "boolean",
						description: "Flag indicating if associated content is removed by moderator."
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/ticket/ticket.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Original Reddar/Zendesk Ticket -  Note this will soon be deprecated!",
				definitions: {
					id: {
						type: "string",
						description: "Required identifier for this ticket.\n\n    This field is tracked as base36. Note that it is not a fullname."
					},
					type: {
						type: "string",
						description: "Used by admin tickets to specify the complaint type, e.g. harassment.\n\n    There are a large number of possible values for this field.\n    Please check events we currently have in BigQuery for values already in use."
					},
					queue_id: {
						type: "string",
						description: "Admin tickets are associated with a queue.\n\n    This field is tracked as base36. Note that it is not a fullname."
					},
					status: {
						type: "string",
						description: "Used by admin tickets to specify the current state of the ticket.\n\n    Examples:\n    open,assigned,in_review,closed"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/ticket/zendesk_ticket.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "A support ticket from Zendesk.",
				definitions: {
					id: {
						type: "integer",
						description: "Identifier for this ticket, provided by Zendesk."
					},
					source: {
						type: "string",
						description: "Source of zendesk ticket.\n\n    Examples:\n    form,email"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/timer/d_o_m_timers.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "This struct is deprecated! It will be removed soon.",
				definitions: {
					request: {
						type: "integer",
						description: "This field is deprecated! It will be removed soon."
					},
					loading: {
						type: "integer",
						description: "This field is deprecated! It will be removed soon."
					},
					loaded: {
						type: "integer",
						description: "This field is deprecated! It will be removed soon."
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/tooltip/tooltip.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "A tooltip popup.",
				definitions: {
					id: {
						type: "string",
						description: "Required identifier for the tooltip."
					},
					text: {
						type: "string",
						description: "Text shown to the user."
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/topic_metadata/topic_metadata.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: 'Details about a topic (entity for "/t/<topic_name>" pages).',
				definitions: {
					id: {
						type: "string",
						description: "The primary identifier of a topic."
					},
					display_name: {
						type: "string",
						description: "Case insensitive unique name for a topic.\n\n    Some examples may be:\n        * nfl\n        * FIFA World Cup\n        * Craigslist"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/topic_tag/topic_tag.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Represents a topic tag.\n\nTopic tags represent a topic that is meant to be associated with an entity on Reddit.",
				definitions: {
					id: {
						type: "string",
						description: "The primary identifier of a topic tag."
					},
					content: {
						type: "string",
						description: "The text contents of the tag. This may be generated by us or entered by a user.\n\n    Some examples may be:\n        * Gaming\n        * Funny\n        * Lifestyle"
					},
					type: {
						type: "string",
						description: "The type of the topic tag. This can determine several things and may change in the future.\n\n    This field can determine:\n        * What types of entites this tag can be applied to\n        * How the topic tag should behave in the UI\n\n    Example: classification topic tags can be applied to anything, but post_classification tags can\n    only be applied to posts.\n\n    Examples:\n    classification,post_classification,subreddit_classification,comment_classification"
					},
					is_primary: {
						type: "boolean",
						description: "Differentiates whether topic is a primary topic. Subreddits can have only one primary topic."
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/trophy/trophy.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "A trophy.",
				definitions: {
					id: {
						type: "string",
						description: "ID for the trophy."
					},
					name: {
						type: "string",
						description: "Name of the trophy."
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/upload/upload.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Fields related to asset uploads.",
				definitions: {
					file_size: {
						type: "integer",
						description: "File size in bytes."
					},
					category: {
						type: "string",
						description: "Lowercase name of the structured styles asset category, e.g. community_icon.\n\n    Note that in r2 code the original category names are in lowerCamelCase\n    (e.g. communityIcon), to be consistent with v2 schema we need to convert\n    them to snake_case before sending the event."
					},
					optimization_type: {
						type: "string",
						description: "The type of optimizaion this file represents, used in structured styles\n    asset uploads.\n\n    *original*\n    Original, unoptimized file. We store this file on s3 bucket but it's not\n    public accessible.\n\n    *optimized*\n    Optimized file. It's possible that the optimization did nothing and it's the\n    same size as the corresponding original file. The optimized version is the\n    one we made public accessible and serve.\n\n    *single*\n    Optimization was not attempted. The difference between single and original\n    is that we make the single files public accessible and serve them."
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/user/user.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Fields related to a user of Reddit.",
				definitions: {
					previous_id: {
						type: "string",
						description: "The ID of the user before they logged in or logged out."
					},
					comment_karma: {
						type: "integer",
						description: "User's current comment karma."
					},
					name: {
						type: "string",
						description: "User's screen name.\n\n    A note on the validator: We do have checks on valid names (e.g. max chars)\n    but there exists exceptions in our database. As such, the validator is\n    disabled for this field.\n\n    read-access:swat@reddit.com"
					},
					is_admin: {
						type: "boolean",
						description: "Is the user a Reddit admin?"
					},
					email: {
						type: "string",
						description: "User's email.\n\n    A note on the validator: This field is also used to track attempted login\n    values provided by users. They can pass in invalid email and, as such, the\n    validator is disabled for this field."
					},
					is_premium_subscriber: {
						type: "boolean",
						description: "Does this user have a recurring subscription to Reddit Premium?"
					},
					logged_in: {
						type: "boolean",
						description: "Is this user registered?"
					},
					number_creddits: {
						type: "integer",
						description: "Number of creddits (reddit credits) the user has.\n    Note: To be deprecated with goldv1."
					},
					number_premium_days_remaining: {
						type: "integer",
						description: "Premium status days remaining."
					},
					in_timeout: {
						type: "boolean",
						description: "Is the user in timeout, e.g. suspended?"
					},
					number_coins: {
						type: "integer",
						description: "Number of gold coins the user has."
					},
					is_employee: {
						type: "boolean",
						description: "Is this user a Reddit employee?"
					},
					neutered: {
						type: "boolean",
						description: "Is the user neutered?"
					},
					email_domain: {
						type: "string",
						description: "Email domain, not masked."
					},
					id: {
						type: "string",
						description: "Unique identifier of this user. \n\n    Event-collector will reject an event if id does not satisfy this regex: ^t[0-9]_[a-z0-9]+$"
					},
					cookie_created_timestamp: {
						type: "number",
						description: "Timestamp of user's cookie creation."
					},
					post_karma: {
						type: "integer",
						description: "User's current post karma."
					},
					disenfranchised: {
						type: "boolean",
						description: "Is the user disenfranchised?"
					},
					suspect: {
						type: "boolean",
						description: "Is this user considered suspect for anti-evil purposes?"
					},
					created_timestamp: {
						type: "number",
						description: "Timestamp of this account's creation."
					},
					masked_email_user: {
						type: "string",
						description: "Masked value of the email user (user@)."
					},
					has_premium: {
						type: "boolean",
						description: "Does this user have Premium status?"
					},
					masked_email: {
						type: "string",
						description: "Masked value of the full email (user@domain.com)."
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/user/user_preferences.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Represents user-set preferences.",
				definitions: {
					hide_previously_seen_posts: {
						type: "boolean",
						description: "Has the user opted to hide previously seen posts in feeds?"
					},
					expando: {
						type: "string",
						description: "User's expando preferences.\n\n    Expected values:\n        * auto - Always auto-expand media previews\n        * noauto - Never auto-expand media previews\n        * subreddit - Respect subreddit's expando preferences\n    *"
					},
					in_beta: {
						type: "boolean",
						description: "Is this a user in our beta program?"
					},
					service_language: {
						type: "string",
						description: "The reddit settings (preference service) language for the user"
					},
					language: {
						type: "string",
						description: "Preferred language of the user."
					},
					hide_nsfw: {
						type: "boolean",
						description: "Has the user opted out of nsfw content?"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/user/user_subreddit.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Information that relates to a user-subreddit relationship.",
				definitions: {
					comment_karma: {
						type: "integer",
						description: "Current user comment karma in the current subreddit."
					},
					mod_post: {
						type: "boolean",
						description: "Does the current user have post permissions for the current subreddit?"
					},
					mod_config: {
						type: "boolean",
						description: "Does the current user have config permissions for the current subreddit?"
					},
					mod_mail: {
						type: "boolean",
						description: "Does the current user have mail permissions for the current subreddit?"
					},
					mod_wiki: {
						type: "boolean",
						description: "Does the current user have wiki permissions for the current subreddit?"
					},
					mod_none: {
						type: "boolean",
						description: "Is the current user a mod but has no permissions for the current subreddit?"
					},
					mod_flair: {
						type: "boolean",
						description: "Does the current user have flair permissions for the current subreddit?"
					},
					is_subscriber: {
						type: "boolean",
						description: "Is the current user subscribed to the current subreddit?"
					},
					is_favorite: {
						type: "boolean",
						description: "Does the current user have a favorite preference for the current subreddit?"
					},
					mod_access: {
						type: "boolean",
						description: "Does the current user have access permissions for the current subreddit?"
					},
					is_steward: {
						type: "boolean",
						description: "Is the current user a steward of the current subreddit?"
					},
					mod_full: {
						type: "boolean",
						description: "Does the current user have full permissions for the current subreddit?"
					},
					post_karma: {
						type: "integer",
						description: "Current user post karma in the current subreddit."
					},
					is_mod: {
						type: "boolean",
						description: "Is the current user a moderator of the current subreddit?"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/userflair/user_flair.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Flairs defined on users for a subreddit.\n\nUser flair is the flair that mods assign to a user. User flair is unique to a subreddit.",
				definitions: {
					locked: {
						type: "boolean",
						description: "Whether or not the userflair is locked or not."
					},
					id: {
						type: "string",
						description: "Unique id for the user flair."
					},
					id_achieve: {
						type: "string",
						description: "Unique id for the user achievement flair."
					},
					title: {
						type: "string",
						description: "The display title for user flair."
					},
					title_achieve: {
						type: "string",
						description: "The display title for the user achievement flair."
					},
					active: {
						type: "boolean",
						description: "Whether or not userflair is active or not."
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/webhook/webhook.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Represents the characteristics of configuration for an outbound webhook.",
				definitions: {
					id: {
						type: "string",
						description: "Unique identifier for this outbound webhook."
					},
					type: {
						type: "string",
						description: "What type of data, or which service, is being sent to this webhook callback.\n    \n    Examples:\n    chat"
					}
				}
			}, {
				description: "All events must satisfy this schema",
				$id: "http://com.reddit/schemas/schema_interfaces/all_events.json",
				properties: {
					mailroom_request_notification_target: {
						$ref: "http://com.reddit/schemas/field_definitions/notification/mailroom_request.json#/definitions/notification_target"
					},
					snoovatar_gear_top_acc: {
						$ref: "http://com.reddit/schemas/field_definitions/snoovatar/snoovatar.json#/definitions/gear_top_acc"
					},
					m_l_model_prediction_id: {
						$ref: "http://com.reddit/schemas/field_definitions/ml_model/m_l_model.json#/definitions/prediction_id"
					},
					platform_browser_version: {
						$ref: "http://com.reddit/schemas/field_definitions/device/platform.json#/definitions/browser_version"
					},
					search_number_subreddits: {
						$ref: "http://com.reddit/schemas/field_definitions/search/search.json#/definitions/number_subreddits"
					},
					notification_type: {
						$ref: "http://com.reddit/schemas/field_definitions/content/notification.json#/definitions/type"
					},
					email_listing_source: {
						$ref: "http://com.reddit/schemas/field_definitions/email/email.json#/definitions/listing_source"
					},
					experiment_start_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/experiment.json#/definitions/start_timestamp"
					},
					utc_offset: {
						$ref: "http://com.reddit/schemas/components/common.json#/definitions/utc_offset"
					},
					meta_search_subreddit_id: {
						$ref: "http://com.reddit/schemas/field_definitions/metasearch/meta_search.json#/definitions/subreddit_id"
					},
					crowd_control_rating_threshold: {
						$ref: "http://com.reddit/schemas/field_definitions/crowd_control/crowd_control.json#/definitions/rating_threshold"
					},
					inbox_tab: {
						$ref: "http://com.reddit/schemas/field_definitions/inbox/inbox.json#/definitions/tab"
					},
					report_id: {
						$ref: "http://com.reddit/schemas/field_definitions/report/report.json#/definitions/id"
					},
					media_destination_region: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/destination_region"
					},
					ticket_id: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/ticket.json#/definitions/id"
					},
					post_is_automated: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/is_automated"
					},
					a_f_d_second_image_ids: {
						$ref: "http://com.reddit/schemas/field_definitions/afd_second/a_f_d_second.json#/definitions/image_ids"
					},
					chat_message_length: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/message_length"
					},
					view_stats_comments_viewed_list: {
						$ref: "http://com.reddit/schemas/field_definitions/content/view_stats.json#/definitions/comments_viewed_list"
					},
					account_label_id: {
						$ref: "http://com.reddit/schemas/field_definitions/account_label/account_label.json#/definitions/id"
					},
					bulk_messenger_give_coins: {
						$ref: "http://com.reddit/schemas/field_definitions/bulk_messenger/bulk_messenger.json#/definitions/give_coins"
					},
					gold_purchase_purchased_coins: {
						$ref: "http://com.reddit/schemas/field_definitions/gold/gold_purchase.json#/definitions/purchased_coins"
					},
					meta_search_number_previous_window: {
						$ref: "http://com.reddit/schemas/field_definitions/metasearch/meta_search.json#/definitions/number_previous_window"
					},
					chat_home_feed_boosting_positions: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat_home_feed_boosting.json#/definitions/positions"
					},
					inferred_isp_organization: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/inferred.json#/definitions/isp_organization"
					},
					screen_auto_dark_mode: {
						$ref: "http://com.reddit/schemas/field_definitions/device/screen.json#/definitions/auto_dark_mode"
					},
					topic_metadata_display_name: {
						$ref: "http://com.reddit/schemas/field_definitions/topic_metadata/topic_metadata.json#/definitions/display_name"
					},
					poll_options_vote_totals: {
						$ref: "http://com.reddit/schemas/field_definitions/poll/poll.json#/definitions/options_vote_totals"
					},
					p_w_a_installed: {
						$ref: "http://com.reddit/schemas/field_definitions/pwa/p_w_a.json#/definitions/installed"
					},
					a_f_d_second_round_start_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/afd_second/a_f_d_second.json#/definitions/round_start_timestamp"
					},
					media_load_time: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/load_time"
					},
					poll_options: {
						$ref: "http://com.reddit/schemas/field_definitions/poll/poll.json#/definitions/options"
					},
					chat_home_feed_boosting_subreddit_ids: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat_home_feed_boosting.json#/definitions/subreddit_ids"
					},
					progress_module_card_name: {
						$ref: "http://com.reddit/schemas/field_definitions/progress_module/progress_module.json#/definitions/card_name"
					},
					subreddit_whitelist_status: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/subreddit.json#/definitions/whitelist_status"
					},
					post_score: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/score"
					},
					post_collection_author_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post_collection.json#/definitions/author_id"
					},
					chat_id: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/id"
					},
					click_test_variant: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/click_test.json#/definitions/variant"
					},
					legal_export_request_requestor_id: {
						$ref: "http://com.reddit/schemas/field_definitions/legal_export_request/legal_export_request.json#/definitions/requestor_id"
					},
					subreddit_subscriber_count: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/subreddit.json#/definitions/subscriber_count"
					},
					user_comment_karma: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/comment_karma"
					},
					post_event_event_state: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post_event.json#/definitions/event_state"
					},
					spamurai_action_thing_id: {
						$ref: "http://com.reddit/schemas/field_definitions/spamurai/spamurai_action.json#/definitions/thing_id"
					},
					imposter_imposter_id: {
						$ref: "http://com.reddit/schemas/field_definitions/imposter/imposter.json#/definitions/imposter_id"
					},
					post_draft_url_length: {
						$ref: "http://com.reddit/schemas/field_definitions/post_draft/post_draft.json#/definitions/url_length"
					},
					progress_module_module_name: {
						$ref: "http://com.reddit/schemas/field_definitions/progress_module/progress_module.json#/definitions/module_name"
					},
					bulk_action_job_requires_manual_review: {
						$ref: "http://com.reddit/schemas/field_definitions/bulk_action_job/bulk_action_job.json#/definitions/requires_manual_review"
					},
					message_recipient_type: {
						$ref: "http://com.reddit/schemas/field_definitions/content/message.json#/definitions/recipient_type"
					},
					relevance_model_result_blob: {
						$ref: "http://com.reddit/schemas/field_definitions/relevance/relevance_model.json#/definitions/result_blob"
					},
					imposter_note_ignore: {
						$ref: "http://com.reddit/schemas/field_definitions/imposter/imposter.json#/definitions/note_ignore"
					},
					scheduled_post_recurring_interval_period: {
						$ref: "http://com.reddit/schemas/field_definitions/scheduled_post/scheduled_post.json#/definitions/recurring_interval_period"
					},
					experiment_name: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/experiment.json#/definitions/name"
					},
					report_reason_code: {
						$ref: "http://com.reddit/schemas/field_definitions/report/report.json#/definitions/reason_code"
					},
					onboarding_number_subreddits_selected: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/number_subreddits_selected"
					},
					ad_brand_safety_tier_reason_sort: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_brand_safety.json#/definitions/tier_reason_sort"
					},
					geo_time_zone: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/geo.json#/definitions/time_zone"
					},
					perspective_max_incoherent: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/max_incoherent"
					},
					chat_home_feed_boosting_post_ids: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat_home_feed_boosting.json#/definitions/post_ids"
					},
					snoovatar_has_premium_gear: {
						$ref: "http://com.reddit/schemas/field_definitions/snoovatar/snoovatar.json#/definitions/has_premium_gear"
					},
					reddar_ticket_queue_id: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket.json#/definitions/queue_id"
					},
					geo_block_reason: {
						$ref: "http://com.reddit/schemas/field_definitions/geo_block/geo_block.json#/definitions/reason"
					},
					user_suspect: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/suspect"
					},
					listing_old_sort: {
						$ref: "http://com.reddit/schemas/field_definitions/content/listing.json#/definitions/old_sort"
					},
					custom_feed_owner_id: {
						$ref: "http://com.reddit/schemas/field_definitions/custom_feed/custom_feed.json#/definitions/owner_id"
					},
					imposter_note_id: {
						$ref: "http://com.reddit/schemas/field_definitions/imposter/imposter.json#/definitions/note_id"
					},
					user_cookie_created_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/cookie_created_timestamp"
					},
					user_has_premium: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/has_premium"
					},
					url_parsed_utm_name: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/url_parsed.json#/definitions/utm_name"
					},
					outbound_comment_id: {
						$ref: "http://com.reddit/schemas/field_definitions/outbound/outbound.json#/definitions/comment_id"
					},
					onboarding_action_source: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/action_source"
					},
					search_range: {
						$ref: "http://com.reddit/schemas/field_definitions/search/search.json#/definitions/range"
					},
					onboarding_number_subreddits: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/number_subreddits"
					},
					reddar_ticket_status: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket.json#/definitions/status"
					},
					search_query_id: {
						$ref: "http://com.reddit/schemas/field_definitions/search/search.json#/definitions/query_id"
					},
					relevance_model_feature_blob: {
						$ref: "http://com.reddit/schemas/field_definitions/relevance/relevance_model.json#/definitions/feature_blob"
					},
					category_header_subreddit_ids: {
						$ref: "http://com.reddit/schemas/field_definitions/category_header/category_header.json#/definitions/subreddit_ids"
					},
					m_l_model_prediction: {
						$ref: "http://com.reddit/schemas/field_definitions/ml_model/m_l_model.json#/definitions/prediction"
					},
					topic_tag_content: {
						$ref: "http://com.reddit/schemas/field_definitions/topic_tag/topic_tag.json#/definitions/content"
					},
					scheduled_post_milestone_type: {
						$ref: "http://com.reddit/schemas/field_definitions/scheduled_post/scheduled_post.json#/definitions/milestone_type"
					},
					domain_ban_shame: {
						$ref: "http://com.reddit/schemas/field_definitions/domain_ban/domain_ban.json#/definitions/shame"
					},
					custom_feed_cover_art_url: {
						$ref: "http://com.reddit/schemas/field_definitions/custom_feed/custom_feed.json#/definitions/cover_art_url"
					},
					user_post_karma: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/post_karma"
					},
					meta_flair_id: {
						$ref: "http://com.reddit/schemas/field_definitions/metaflair/meta_flair.json#/definitions/id"
					},
					media_stream_public_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/stream_public_id"
					},
					funding_instrument_level: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/level"
					},
					oauth_client_id: {
						$ref: "http://com.reddit/schemas/field_definitions/request/oauth.json#/definitions/client_id"
					},
					domain_ban_inspector_exempt_regex: {
						$ref: "http://com.reddit/schemas/field_definitions/domain_ban/domain_ban.json#/definitions/inspector_exempt_regex"
					},
					listing_length: {
						$ref: "http://com.reddit/schemas/field_definitions/content/listing.json#/definitions/length"
					},
					ad_request_slots: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_request.json#/definitions/slots"
					},
					gold_purchase_gift_user_id: {
						$ref: "http://com.reddit/schemas/field_definitions/gold/gold_purchase.json#/definitions/gift_user_id"
					},
					post_domain: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/domain"
					},
					funding_instrument_balance_micros: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/balance_micros"
					},
					rater_tag_non_selected_answers: {
						$ref: "http://com.reddit/schemas/field_definitions/rater_tag/rater_tag.json#/definitions/non_selected_answers"
					},
					perspective_sexually_explicit: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/sexually_explicit"
					},
					ticket_status: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/ticket.json#/definitions/status"
					},
					batch_load_id: {
						$ref: "http://com.reddit/schemas/components/common.json#/definitions/batch_load_id"
					},
					funding_instrument_netsuite_customer_internal_id: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/netsuite_customer_internal_id"
					},
					c_s_a_i_media_error_message: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/c_s_a_i_media.json#/definitions/error_message"
					},
					gold_purchase_proxy_for_user_id: {
						$ref: "http://com.reddit/schemas/field_definitions/gold/gold_purchase.json#/definitions/proxy_for_user_id"
					},
					request_google_client_id: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/google_client_id"
					},
					experiment_variant_names: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/experiment.json#/definitions/variant_names"
					},
					user_flair_id: {
						$ref: "http://com.reddit/schemas/field_definitions/userflair/user_flair.json#/definitions/id"
					},
					relevance_model_identifier: {
						$ref: "http://com.reddit/schemas/field_definitions/relevance/relevance_model.json#/definitions/identifier"
					},
					domain_ban_disable_approve: {
						$ref: "http://com.reddit/schemas/field_definitions/domain_ban/domain_ban.json#/definitions/disable_approve"
					},
					platform_browser_name: {
						$ref: "http://com.reddit/schemas/field_definitions/device/platform.json#/definitions/browser_name"
					},
					post_upvote_ratio: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/upvote_ratio"
					},
					chat_number_unreads: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/number_unreads"
					},
					crawler_name: {
						$ref: "http://com.reddit/schemas/field_definitions/crawler/crawler.json#/definitions/name"
					},
					source: {
						$ref: "http://com.reddit/schemas/components/common.json#/definitions/source"
					},
					d_o_m_timers_request: {
						$ref: "http://com.reddit/schemas/field_definitions/timer/d_o_m_timers.json#/definitions/request"
					},
					bulk_messenger_recipient_count: {
						$ref: "http://com.reddit/schemas/field_definitions/bulk_messenger/bulk_messenger.json#/definitions/recipient_count"
					},
					messenger_request_message_type: {
						$ref: "http://com.reddit/schemas/field_definitions/notification/messenger_request.json#/definitions/message_type"
					},
					post_event_event_end_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post_event.json#/definitions/event_end_timestamp"
					},
					screen_browser_tab_id: {
						$ref: "http://com.reddit/schemas/field_definitions/device/screen.json#/definitions/browser_tab_id"
					},
					meta_search_raw_query: {
						$ref: "http://com.reddit/schemas/field_definitions/metasearch/meta_search.json#/definitions/raw_query"
					},
					app_icon_id: {
						$ref: "http://com.reddit/schemas/field_definitions/app_icons/app_icon.json#/definitions/id"
					},
					request_isp_organization: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/isp_organization"
					},
					rater_tag_tagging_job_id: {
						$ref: "http://com.reddit/schemas/field_definitions/rater_tag/rater_tag.json#/definitions/tagging_job_id"
					},
					bulk_messenger_sender_id: {
						$ref: "http://com.reddit/schemas/field_definitions/bulk_messenger/bulk_messenger.json#/definitions/sender_id"
					},
					subreddit_nsfw: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/subreddit.json#/definitions/nsfw"
					},
					subreddit_number_coins: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/subreddit.json#/definitions/number_coins"
					},
					onboarding_subreddit_is_selected: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/subreddit_is_selected"
					},
					onboarding_subreddits_already_selected: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/subreddits_already_selected"
					},
					reddar_audit_included_range_end_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/audit/reddar_audit.json#/definitions/included_range_end_timestamp"
					},
					a_t_c_decision_reason: {
						$ref: "http://com.reddit/schemas/field_definitions/atc/a_t_c.json#/definitions/decision_reason"
					},
					request_accept_encoding: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/accept_encoding"
					},
					api_response_error: {
						$ref: "http://com.reddit/schemas/field_definitions/request/api_response.json#/definitions/error"
					},
					bulk_action_job_target_limit: {
						$ref: "http://com.reddit/schemas/field_definitions/bulk_action_job/bulk_action_job.json#/definitions/target_limit"
					},
					post_requirement_body_regex_patterns: {
						$ref: "http://com.reddit/schemas/field_definitions/post_requirement/post_requirement.json#/definitions/body_regex_patterns"
					},
					bot_detection_website_action: {
						$ref: "http://com.reddit/schemas/field_definitions/bot_detection/bot_detection.json#/definitions/website_action"
					},
					chat_sender_user_id: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/sender_user_id"
					},
					snoovatar_user_generated_source: {
						$ref: "http://com.reddit/schemas/field_definitions/snoovatar/snoovatar.json#/definitions/user_generated_source"
					},
					request_reddaid: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/reddaid"
					},
					view_stats_num_comments_viewed: {
						$ref: "http://com.reddit/schemas/field_definitions/content/view_stats.json#/definitions/num_comments_viewed"
					},
					onboarding_successful: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/successful"
					},
					n_c_m_e_c_report_post_added_note: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/n_c_m_e_c_report.json#/definitions/post_added_note"
					},
					ad_click_landing_page_duration: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_click.json#/definitions/landing_page_duration"
					},
					perspective_max_insult: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/max_insult"
					},
					spamurai_action_task_version: {
						$ref: "http://com.reddit/schemas/field_definitions/spamurai/spamurai_action.json#/definitions/task_version"
					},
					legal_export_request_target_id: {
						$ref: "http://com.reddit/schemas/field_definitions/legal_export_request/legal_export_request.json#/definitions/target_id"
					},
					geo_country_code: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/geo.json#/definitions/country_code"
					},
					content_tag_survey_answers: {
						$ref: "http://com.reddit/schemas/field_definitions/content_tag/content_tag.json#/definitions/survey_answers"
					},
					playback_session_duration_ms: {
						$ref: "http://com.reddit/schemas/field_definitions/playback/playback.json#/definitions/session_duration_ms"
					},
					referrer_domain: {
						$ref: "http://com.reddit/schemas/field_definitions/request/referrer.json#/definitions/domain"
					},
					scheduled_post_recurring_frequency: {
						$ref: "http://com.reddit/schemas/field_definitions/scheduled_post/scheduled_post.json#/definitions/recurring_frequency"
					},
					purchase_type: {
						$ref: "http://com.reddit/schemas/field_definitions/econ/purchase.json#/definitions/type"
					},
					screen_scroll_position: {
						$ref: "http://com.reddit/schemas/field_definitions/device/screen.json#/definitions/scroll_position"
					},
					session_id: {
						$ref: "http://com.reddit/schemas/field_definitions/session/session.json#/definitions/id"
					},
					bulk_action_job_status: {
						$ref: "http://com.reddit/schemas/field_definitions/bulk_action_job/bulk_action_job.json#/definitions/status"
					},
					relevance_model_number_max_recommendations: {
						$ref: "http://com.reddit/schemas/field_definitions/relevance/relevance_model.json#/definitions/number_max_recommendations"
					},
					platform_fingerprint_created_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/device/platform.json#/definitions/fingerprint_created_timestamp"
					},
					widget_target_subreddit_id: {
						$ref: "http://com.reddit/schemas/field_definitions/action/widget.json#/definitions/target_subreddit_id"
					},
					message_source_page: {
						$ref: "http://com.reddit/schemas/field_definitions/content/message.json#/definitions/source_page"
					},
					ad_request_platform: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_request.json#/definitions/platform"
					},
					mailroom_request_delivery_queue_name: {
						$ref: "http://com.reddit/schemas/field_definitions/notification/mailroom_request.json#/definitions/delivery_queue_name"
					},
					crowd_source_geo_region: {
						$ref: "http://com.reddit/schemas/field_definitions/crowd_source/crowd_source.json#/definitions/geo_region"
					},
					outbound_source_element: {
						$ref: "http://com.reddit/schemas/field_definitions/outbound/outbound.json#/definitions/source_element"
					},
					popup_button_text: {
						$ref: "http://com.reddit/schemas/field_definitions/popup/popup.json#/definitions/button_text"
					},
					experiment_bucketing_key: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/experiment.json#/definitions/bucketing_key"
					},
					post_requirement_link_blacklisted_domains_length: {
						$ref: "http://com.reddit/schemas/field_definitions/post_requirement/post_requirement.json#/definitions/link_blacklisted_domains_length"
					},
					announcement_id: {
						$ref: "http://com.reddit/schemas/field_definitions/announcement/announcement.json#/definitions/id"
					},
					legal_export_request_user_ids: {
						$ref: "http://com.reddit/schemas/field_definitions/legal_export_request/legal_export_request.json#/definitions/user_ids"
					},
					crowd_source_place_id: {
						$ref: "http://com.reddit/schemas/field_definitions/crowd_source/crowd_source.json#/definitions/place_id"
					},
					domain_ban_ban_message: {
						$ref: "http://com.reddit/schemas/field_definitions/domain_ban/domain_ban.json#/definitions/ban_message"
					},
					powerups_post_type: {
						$ref: "http://com.reddit/schemas/field_definitions/powerups/powerups.json#/definitions/post_type"
					},
					gold_purchase_number_months: {
						$ref: "http://com.reddit/schemas/field_definitions/gold/gold_purchase.json#/definitions/number_months"
					},
					c_s_a_i_media_origin_queue_name: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/c_s_a_i_media.json#/definitions/origin_queue_name"
					},
					session_referrer_domain: {
						$ref: "http://com.reddit/schemas/field_definitions/session/session.json#/definitions/referrer_domain"
					},
					link_sharing_shared_at_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/link_sharing.json#/definitions/shared_at_timestamp"
					},
					gallery_position: {
						$ref: "http://com.reddit/schemas/field_definitions/content/gallery.json#/definitions/position"
					},
					geo_public_proxy: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/geo.json#/definitions/public_proxy"
					},
					purchase_count: {
						$ref: "http://com.reddit/schemas/field_definitions/econ/purchase.json#/definitions/count"
					},
					restrict_unverified_email_interaction: {
						$ref: "http://com.reddit/schemas/field_definitions/restrict/restrict.json#/definitions/unverified_email_interaction"
					},
					reddar_audit_included_agent_ids: {
						$ref: "http://com.reddit/schemas/field_definitions/audit/reddar_audit.json#/definitions/included_agent_ids"
					},
					post_original_content: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/original_content"
					},
					restrict_crossposts: {
						$ref: "http://com.reddit/schemas/field_definitions/restrict/restrict.json#/definitions/crossposts"
					},
					onboarding_subreddit_name: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/subreddit_name"
					},
					relevance_model_version: {
						$ref: "http://com.reddit/schemas/field_definitions/relevance/relevance_model.json#/definitions/version"
					},
					funding_instrument_spent_freebies_micros: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/spent_freebies_micros"
					},
					two_factor_auth_device_name: {
						$ref: "http://com.reddit/schemas/field_definitions/security/two_factor_auth.json#/definitions/device_name"
					},
					inbox_id: {
						$ref: "http://com.reddit/schemas/field_definitions/inbox/inbox.json#/definitions/id"
					},
					reddar_ticket_content_id: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket_content.json#/definitions/id"
					},
					c_s_a_i_media_tracking_id: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/c_s_a_i_media.json#/definitions/tracking_id"
					},
					mailroom_request_region_num: {
						$ref: "http://com.reddit/schemas/field_definitions/notification/mailroom_request.json#/definitions/region_num"
					},
					post_draft_original_content: {
						$ref: "http://com.reddit/schemas/field_definitions/post_draft/post_draft.json#/definitions/original_content"
					},
					listing_sort_time_filter: {
						$ref: "http://com.reddit/schemas/field_definitions/content/listing.json#/definitions/sort_time_filter"
					},
					m_l_model_features: {
						$ref: "http://com.reddit/schemas/field_definitions/ml_model/m_l_model.json#/definitions/features"
					},
					search_origin_page_type: {
						$ref: "http://com.reddit/schemas/field_definitions/search/search.json#/definitions/origin_page_type"
					},
					platform_language_list: {
						$ref: "http://com.reddit/schemas/field_definitions/device/platform.json#/definitions/language_list"
					},
					profile_content_visible: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/profile.json#/definitions/content_visible"
					},
					funding_instrument_active: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/active"
					},
					ad_decision_hide_other: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_decision.json#/definitions/hide_other"
					},
					comment_post_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/comment.json#/definitions/post_id"
					},
					perspective_incoherent: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/incoherent"
					},
					bulk_messenger_admin_note: {
						$ref: "http://com.reddit/schemas/field_definitions/bulk_messenger/bulk_messenger.json#/definitions/admin_note"
					},
					perspective_max_identity_attack: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/max_identity_attack"
					},
					edit_previous_body_text: {
						$ref: "http://com.reddit/schemas/field_definitions/content/edit.json#/definitions/previous_body_text"
					},
					search_post_flair_name: {
						$ref: "http://com.reddit/schemas/field_definitions/search/search.json#/definitions/post_flair_name"
					},
					scheduled_post_timezone: {
						$ref: "http://com.reddit/schemas/field_definitions/scheduled_post/scheduled_post.json#/definitions/timezone"
					},
					post_title: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/title"
					},
					perspective_inflammatory: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/inflammatory"
					},
					two_factor_auth_device_exists: {
						$ref: "http://com.reddit/schemas/field_definitions/security/two_factor_auth.json#/definitions/device_exists"
					},
					post_is_scheduled: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/is_scheduled"
					},
					post_requirement_body_blacklisted_strings: {
						$ref: "http://com.reddit/schemas/field_definitions/post_requirement/post_requirement.json#/definitions/body_blacklisted_strings"
					},
					experiment_github_link: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/experiment.json#/definitions/github_link"
					},
					poll_type: {
						$ref: "http://com.reddit/schemas/field_definitions/poll/poll.json#/definitions/type"
					},
					reddar_ticket_type: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket.json#/definitions/type"
					},
					post_archived: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/archived"
					},
					platform_device_name: {
						$ref: "http://com.reddit/schemas/field_definitions/device/platform.json#/definitions/device_name"
					},
					legal_export_request_started_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/legal_export_request/legal_export_request.json#/definitions/started_timestamp"
					},
					predictions_tournament_id: {
						$ref: "http://com.reddit/schemas/field_definitions/predictions/predictions.json#/definitions/tournament_id"
					},
					funding_instrument_rollup_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/rollup_timestamp"
					},
					snoovatar_gear_id: {
						$ref: "http://com.reddit/schemas/field_definitions/snoovatar/snoovatar.json#/definitions/gear_id"
					},
					inferred_app_name: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/inferred.json#/definitions/app_name"
					},
					account_label_type: {
						$ref: "http://com.reddit/schemas/field_definitions/account_label/account_label.json#/definitions/type"
					},
					post_collection_title: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post_collection.json#/definitions/title"
					},
					gold_purchase_transaction_id: {
						$ref: "http://com.reddit/schemas/field_definitions/gold/gold_purchase.json#/definitions/transaction_id"
					},
					perspective_max_attack_on_author: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/max_attack_on_author"
					},
					media_thumbnail_url: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/thumbnail_url"
					},
					rater_tag_tagging_question_object: {
						$ref: "http://com.reddit/schemas/field_definitions/rater_tag/rater_tag.json#/definitions/tagging_question_object"
					},
					third_party_badge_id: {
						$ref: "http://com.reddit/schemas/field_definitions/thirdpartybadge/third_party_badge.json#/definitions/id"
					},
					meta_search_structure_type: {
						$ref: "http://com.reddit/schemas/field_definitions/metasearch/meta_search.json#/definitions/structure_type"
					},
					subreddit_quarantined: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/subreddit.json#/definitions/quarantined"
					},
					user_subreddit_mod_full: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user_subreddit.json#/definitions/mod_full"
					},
					n_c_m_e_c_report_content_is_reddit_hosted: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/n_c_m_e_c_report.json#/definitions/content_is_reddit_hosted"
					},
					purchase_order_id: {
						$ref: "http://com.reddit/schemas/field_definitions/econ/purchase.json#/definitions/order_id"
					},
					n_c_m_e_c_report_account_registration_proxy: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/n_c_m_e_c_report.json#/definitions/account_registration_proxy"
					},
					user_flair_title: {
						$ref: "http://com.reddit/schemas/field_definitions/userflair/user_flair.json#/definitions/title"
					},
					correlation_id: {
						$ref: "http://com.reddit/schemas/components/common.json#/definitions/correlation_id"
					},
					url_parsed_shared_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/url_parsed.json#/definitions/shared_timestamp"
					},
					programmatic_ad_unit: {
						$ref: "http://com.reddit/schemas/field_definitions/ad/programmatic.json#/definitions/ad_unit"
					},
					powerups_benefit: {
						$ref: "http://com.reddit/schemas/field_definitions/powerups/powerups.json#/definitions/benefit"
					},
					bulk_messenger_recipient_type: {
						$ref: "http://com.reddit/schemas/field_definitions/bulk_messenger/bulk_messenger.json#/definitions/recipient_type"
					},
					live_thread_id: {
						$ref: "http://com.reddit/schemas/field_definitions/live_thread/live_thread.json#/definitions/id"
					},
					subreddit_topic_tag_primary_id: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/subreddit.json#/definitions/topic_tag_primary_id"
					},
					admin_name: {
						$ref: "http://com.reddit/schemas/field_definitions/admin/admin.json#/definitions/name"
					},
					post_nsfw: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/nsfw"
					},
					onboarding_category_position: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/category_position"
					},
					post_impression_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/impression_id"
					},
					bulk_action_job_bigquery_job_id: {
						$ref: "http://com.reddit/schemas/field_definitions/bulk_action_job/bulk_action_job.json#/definitions/bigquery_job_id"
					},
					reddar_ticket_content_review_time: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket.json#/definitions/content_review_time"
					},
					spamurai_action_channel: {
						$ref: "http://com.reddit/schemas/field_definitions/spamurai/spamurai_action.json#/definitions/channel"
					},
					n_c_m_e_c_report_content_url: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/n_c_m_e_c_report.json#/definitions/content_url"
					},
					user_number_premium_days_remaining: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/number_premium_days_remaining"
					},
					subreddit_name: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/subreddit.json#/definitions/name"
					},
					n_c_m_e_c_report_is_live_stream: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/n_c_m_e_c_report.json#/definitions/is_live_stream"
					},
					request_accept_language: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/accept_language"
					},
					scheduled_post_created_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/scheduled_post/scheduled_post.json#/definitions/created_timestamp"
					},
					rater_tag_tagging_question_id: {
						$ref: "http://com.reddit/schemas/field_definitions/rater_tag/rater_tag.json#/definitions/tagging_question_id"
					},
					banner_id: {
						$ref: "http://com.reddit/schemas/field_definitions/banner/banner.json#/definitions/id"
					},
					domain_ban_submit_banned: {
						$ref: "http://com.reddit/schemas/field_definitions/domain_ban/domain_ban.json#/definitions/submit_banned"
					},
					subreddit_topic_tag_types: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/subreddit.json#/definitions/topic_tag_types"
					},
					imposter_game_id: {
						$ref: "http://com.reddit/schemas/field_definitions/imposter/imposter.json#/definitions/game_id"
					},
					app_version: {
						$ref: "http://com.reddit/schemas/field_definitions/device/app.json#/definitions/version"
					},
					d_o_m_timers_loaded: {
						$ref: "http://com.reddit/schemas/field_definitions/timer/d_o_m_timers.json#/definitions/loaded"
					},
					mailroom_request_message_id: {
						$ref: "http://com.reddit/schemas/field_definitions/notification/mailroom_request.json#/definitions/message_id"
					},
					search_author_names_filter: {
						$ref: "http://com.reddit/schemas/field_definitions/search/search.json#/definitions/author_names_filter"
					},
					relevance_model_family: {
						$ref: "http://com.reddit/schemas/field_definitions/relevance/relevance_model.json#/definitions/family"
					},
					listing_metadata: {
						$ref: "http://com.reddit/schemas/field_definitions/content/listing.json#/definitions/metadata"
					},
					gold_purchase_type: {
						$ref: "http://com.reddit/schemas/field_definitions/gold/gold_purchase.json#/definitions/type"
					},
					post_recommendation_source: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/recommendation_source"
					},
					c_s_a_i_media_match: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/c_s_a_i_media.json#/definitions/match"
					},
					search_links: {
						$ref: "http://com.reddit/schemas/field_definitions/search/search.json#/definitions/links"
					},
					app_build_number: {
						$ref: "http://com.reddit/schemas/field_definitions/device/app.json#/definitions/build_number"
					},
					reddar_ticket_content_content_type: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket_content.json#/definitions/content_type"
					},
					snoovatar_gear_expression: {
						$ref: "http://com.reddit/schemas/field_definitions/snoovatar/snoovatar.json#/definitions/gear_expression"
					},
					powerups_count: {
						$ref: "http://com.reddit/schemas/field_definitions/powerups/powerups.json#/definitions/count"
					},
					playback_is_live: {
						$ref: "http://com.reddit/schemas/field_definitions/playback/playback.json#/definitions/is_live"
					},
					post_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/id"
					},
					post_type: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/type"
					},
					post_comment_type: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/comment_type"
					},
					admin_action_restoration_job_id: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/admin_action.json#/definitions/restoration_job_id"
					},
					post_draft_spoiler: {
						$ref: "http://com.reddit/schemas/field_definitions/post_draft/post_draft.json#/definitions/spoiler"
					},
					create_request_timestamp: {
						$ref: "http://com.reddit/schemas/components/common.json#/definitions/create_request_timestamp"
					},
					notification_request_message_id: {
						$ref: "http://com.reddit/schemas/field_definitions/notification/notification_request.json#/definitions/message_id"
					},
					post_requirement_title_required_strings: {
						$ref: "http://com.reddit/schemas/field_definitions/post_requirement/post_requirement.json#/definitions/title_required_strings"
					},
					funding_instrument_total_refund_micros: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/total_refund_micros"
					},
					comment_body_text: {
						$ref: "http://com.reddit/schemas/field_definitions/content/comment.json#/definitions/body_text"
					},
					onboarding_category_name: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/category_name"
					},
					post_body_text: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/body_text"
					},
					media_url: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/url"
					},
					notification_authorization_status: {
						$ref: "http://com.reddit/schemas/field_definitions/content/notification.json#/definitions/authorization_status"
					},
					domain_ban_shame_message: {
						$ref: "http://com.reddit/schemas/field_definitions/domain_ban/domain_ban.json#/definitions/shame_message"
					},
					perspective_max_likely_to_reject: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/max_likely_to_reject"
					},
					perspective_max_spam: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/max_spam"
					},
					request_ratelimit_type: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/ratelimit_type"
					},
					reddar_ticket_num_content_items: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket.json#/definitions/num_content_items"
					},
					chat_shown_history: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/shown_history"
					},
					funding_instrument_credit_line_micros: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/credit_line_micros"
					},
					survey_min: {
						$ref: "http://com.reddit/schemas/field_definitions/survey/survey.json#/definitions/min"
					},
					user_legacy_id: {
						$ref: "http://com.reddit/schemas/components/common.json#/definitions/user_legacy_id"
					},
					powerups_is_grace_period: {
						$ref: "http://com.reddit/schemas/field_definitions/powerups/powerups.json#/definitions/is_grace_period"
					},
					onboarding_personalized_subreddits: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/personalized_subreddits"
					},
					request_header_signature: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/header_signature"
					},
					content_metadata_categories: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/content_metadata.json#/definitions/categories"
					},
					two_factor_auth_backup_code_used: {
						$ref: "http://com.reddit/schemas/field_definitions/security/two_factor_auth.json#/definitions/backup_code_used"
					},
					client_timestamp: {
						$ref: "http://com.reddit/schemas/components/common.json#/definitions/client_timestamp"
					},
					funding_instrument_created_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/created_timestamp"
					},
					perspective_max_severe_toxicity: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/max_severe_toxicity"
					},
					imposter_notes_blob: {
						$ref: "http://com.reddit/schemas/field_definitions/imposter/imposter.json#/definitions/notes_blob"
					},
					c_s_a_i_media_error_code: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/c_s_a_i_media.json#/definitions/error_code"
					},
					zendesk_ticket_source: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/zendesk_ticket.json#/definitions/source"
					},
					chat_number_blocked_users: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/number_blocked_users"
					},
					a_f_d_second_winning_image_name: {
						$ref: "http://com.reddit/schemas/field_definitions/afd_second/a_f_d_second.json#/definitions/winning_image_name"
					},
					survey_max: {
						$ref: "http://com.reddit/schemas/field_definitions/survey/survey.json#/definitions/max"
					},
					feature_version_description: {
						$ref: "http://com.reddit/schemas/field_definitions/feature/feature.json#/definitions/version_description"
					},
					n_c_m_e_c_report_file_viewed_by_admin: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/n_c_m_e_c_report.json#/definitions/file_viewed_by_admin"
					},
					oauth_client_name: {
						$ref: "http://com.reddit/schemas/field_definitions/request/oauth.json#/definitions/client_name"
					},
					media_source: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/source"
					},
					uuid: {
						$ref: "http://com.reddit/schemas/components/common.json#/definitions/uuid"
					},
					media_duration: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/duration"
					},
					funding_instrument_estimated_spending_micros: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/estimated_spending_micros"
					},
					restrict_video_posts: {
						$ref: "http://com.reddit/schemas/field_definitions/restrict/restrict.json#/definitions/video_posts"
					},
					crowd_source_geo_country: {
						$ref: "http://com.reddit/schemas/field_definitions/crowd_source/crowd_source.json#/definitions/geo_country"
					},
					request_accept_language_header: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/accept_language_header"
					},
					onboarding_subreddits_selected: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/subreddits_selected"
					},
					geo_region: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/geo.json#/definitions/region"
					},
					restrict_image_posts: {
						$ref: "http://com.reddit/schemas/field_definitions/restrict/restrict.json#/definitions/image_posts"
					},
					topic_metadata_id: {
						$ref: "http://com.reddit/schemas/field_definitions/topic_metadata/topic_metadata.json#/definitions/id"
					},
					messenger_request_queue_name: {
						$ref: "http://com.reddit/schemas/field_definitions/notification/messenger_request.json#/definitions/queue_name"
					},
					funding_instrument_is_effective: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/is_effective"
					},
					post_subreddit_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/subreddit_id"
					},
					response_code: {
						$ref: "http://com.reddit/schemas/field_definitions/request/response.json#/definitions/code"
					},
					subreddit_category_name: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/subreddit.json#/definitions/category_name"
					},
					profile_display_name: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/profile.json#/definitions/display_name"
					},
					two_factor_auth_otp_embedded_in_password: {
						$ref: "http://com.reddit/schemas/field_definitions/security/two_factor_auth.json#/definitions/otp_embedded_in_password"
					},
					post_flair_title: {
						$ref: "http://com.reddit/schemas/field_definitions/postflair/post_flair.json#/definitions/title"
					},
					scheduled_post_is_recurring: {
						$ref: "http://com.reddit/schemas/field_definitions/scheduled_post/scheduled_post.json#/definitions/is_recurring"
					},
					poll_vote_affects_score_reason: {
						$ref: "http://com.reddit/schemas/field_definitions/poll/poll.json#/definitions/vote_affects_score_reason"
					},
					post_is_event: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/is_event"
					},
					geo_anonymous: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/geo.json#/definitions/anonymous"
					},
					experiment_active: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/experiment.json#/definitions/active"
					},
					snoovatar_snoovatar_active: {
						$ref: "http://com.reddit/schemas/field_definitions/snoovatar/snoovatar.json#/definitions/snoovatar_active"
					},
					restrict_subreddit_styles: {
						$ref: "http://com.reddit/schemas/field_definitions/restrict/restrict.json#/definitions/subreddit_styles"
					},
					experiment_qa_proxy_event: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/experiment.json#/definitions/qa_proxy_event"
					},
					bulk_messenger_add_to_sent_box: {
						$ref: "http://com.reddit/schemas/field_definitions/bulk_messenger/bulk_messenger.json#/definitions/add_to_sent_box"
					},
					share_id: {
						$ref: "http://com.reddit/schemas/field_definitions/action/share.json#/definitions/id"
					},
					domain_ban_no_email: {
						$ref: "http://com.reddit/schemas/field_definitions/domain_ban/domain_ban.json#/definitions/no_email"
					},
					custom_feed_number_followers: {
						$ref: "http://com.reddit/schemas/field_definitions/custom_feed/custom_feed.json#/definitions/number_followers"
					},
					chat_home_feed_boosting_original_positions: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat_home_feed_boosting.json#/definitions/original_positions"
					},
					purchase_currency: {
						$ref: "http://com.reddit/schemas/field_definitions/econ/purchase.json#/definitions/currency"
					},
					third_party_badge_target_user_id: {
						$ref: "http://com.reddit/schemas/field_definitions/thirdpartybadge/third_party_badge.json#/definitions/target_user_id"
					},
					mod_action_is_target_removed_by_steward: {
						$ref: "http://com.reddit/schemas/field_definitions/moderator/mod_action.json#/definitions/is_target_removed_by_steward"
					},
					chat_is_member: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/is_member"
					},
					post_flair_id: {
						$ref: "http://com.reddit/schemas/field_definitions/postflair/post_flair.json#/definitions/id"
					},
					referrer_url: {
						$ref: "http://com.reddit/schemas/field_definitions/request/referrer.json#/definitions/url"
					},
					gallery_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/gallery.json#/definitions/id"
					},
					onboarding_similar_subreddits: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/similar_subreddits"
					},
					target_i_p_address: {
						$ref: "http://com.reddit/schemas/field_definitions/target_ip/target_i_p.json#/definitions/address"
					},
					widget_target_subreddit_name: {
						$ref: "http://com.reddit/schemas/field_definitions/action/widget.json#/definitions/target_subreddit_name"
					},
					reddar_ticket_requestor_name: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket.json#/definitions/requestor_name"
					},
					user_subreddit_post_karma: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user_subreddit.json#/definitions/post_karma"
					},
					custom_feed_visibility: {
						$ref: "http://com.reddit/schemas/field_definitions/custom_feed/custom_feed.json#/definitions/visibility"
					},
					survey_text: {
						$ref: "http://com.reddit/schemas/field_definitions/survey/survey.json#/definitions/text"
					},
					navigation_session_source: {
						$ref: "http://com.reddit/schemas/field_definitions/navigation_session/navigation_session.json#/definitions/source"
					},
					request_ratelimit_exceeded: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/ratelimit_exceeded"
					},
					comment_created_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/content/comment.json#/definitions/created_timestamp"
					},
					legal_export_request_gifts_data_status: {
						$ref: "http://com.reddit/schemas/field_definitions/legal_export_request/legal_export_request.json#/definitions/gifts_data_status"
					},
					meta_flair_title: {
						$ref: "http://com.reddit/schemas/field_definitions/metaflair/meta_flair.json#/definitions/title"
					},
					powerups_free_count: {
						$ref: "http://com.reddit/schemas/field_definitions/powerups/powerups.json#/definitions/free_count"
					},
					user_flair_active: {
						$ref: "http://com.reddit/schemas/field_definitions/userflair/user_flair.json#/definitions/active"
					},
					admin_team_name: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/admin_team.json#/definitions/name"
					},
					outbound_subreddit_id: {
						$ref: "http://com.reddit/schemas/field_definitions/outbound/outbound.json#/definitions/subreddit_id"
					},
					message_type: {
						$ref: "http://com.reddit/schemas/field_definitions/content/message.json#/definitions/type"
					},
					bulk_action_job_target_type: {
						$ref: "http://com.reddit/schemas/field_definitions/bulk_action_job/bulk_action_job.json#/definitions/target_type"
					},
					screen_viewport_width: {
						$ref: "http://com.reddit/schemas/field_definitions/device/screen.json#/definitions/viewport_width"
					},
					inferred_client_ip: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/inferred.json#/definitions/client_ip"
					},
					api_response_error_name: {
						$ref: "http://com.reddit/schemas/field_definitions/request/api_response.json#/definitions/error_name"
					},
					experiment_version: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/experiment.json#/definitions/version"
					},
					legal_export_request_requested_information: {
						$ref: "http://com.reddit/schemas/field_definitions/legal_export_request/legal_export_request.json#/definitions/requested_information"
					},
					snoovatar_gear_bottom: {
						$ref: "http://com.reddit/schemas/field_definitions/snoovatar/snoovatar.json#/definitions/gear_bottom"
					},
					funding_instrument_overdelivery_micros: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/overdelivery_micros"
					},
					platform_device_tier: {
						$ref: "http://com.reddit/schemas/field_definitions/device/platform.json#/definitions/device_tier"
					},
					platform_name: {
						$ref: "http://com.reddit/schemas/field_definitions/device/platform.json#/definitions/name"
					},
					a_f_d_second_image_set_id: {
						$ref: "http://com.reddit/schemas/field_definitions/afd_second/a_f_d_second.json#/definitions/image_set_id"
					},
					snoovatar_gear_face: {
						$ref: "http://com.reddit/schemas/field_definitions/snoovatar/snoovatar.json#/definitions/gear_face"
					},
					message_body: {
						$ref: "http://com.reddit/schemas/field_definitions/content/message.json#/definitions/body"
					},
					funding_instrument_overwrite: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/overwrite"
					},
					snoovatar_gear_hair_acc: {
						$ref: "http://com.reddit/schemas/field_definitions/snoovatar/snoovatar.json#/definitions/gear_hair_acc"
					},
					p_w_a_installable: {
						$ref: "http://com.reddit/schemas/field_definitions/pwa/p_w_a.json#/definitions/installable"
					},
					oauth_scopes: {
						$ref: "http://com.reddit/schemas/field_definitions/request/oauth.json#/definitions/scopes"
					},
					user_in_timeout: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/in_timeout"
					},
					gold_purchase_gilded_content: {
						$ref: "http://com.reddit/schemas/field_definitions/gold/gold_purchase.json#/definitions/gilded_content"
					},
					media_preview_url: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/preview_url"
					},
					reddar_audit_ticket_id: {
						$ref: "http://com.reddit/schemas/field_definitions/audit/reddar_audit_ticket.json#/definitions/id"
					},
					media_stream_private_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/stream_private_id"
					},
					chat_number_members: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/number_members"
					},
					a_t_c_budget_remaining: {
						$ref: "http://com.reddit/schemas/field_definitions/atc/a_t_c.json#/definitions/budget_remaining"
					},
					mod_action_duration: {
						$ref: "http://com.reddit/schemas/field_definitions/moderator/mod_action.json#/definitions/duration"
					},
					gold_purchase_gift_message: {
						$ref: "http://com.reddit/schemas/field_definitions/gold/gold_purchase.json#/definitions/gift_message"
					},
					widget_type: {
						$ref: "http://com.reddit/schemas/field_definitions/action/widget.json#/definitions/type"
					},
					api_address: {
						$ref: "http://com.reddit/schemas/field_definitions/request/api.json#/definitions/address"
					},
					snoovatar_full_image_url: {
						$ref: "http://com.reddit/schemas/field_definitions/snoovatar/snoovatar.json#/definitions/full_image_url"
					},
					inbox_is_clicked: {
						$ref: "http://com.reddit/schemas/field_definitions/inbox/inbox.json#/definitions/is_clicked"
					},
					request_parameters: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/parameters"
					},
					post_requirement_title_regex_patterns: {
						$ref: "http://com.reddit/schemas/field_definitions/post_requirement/post_requirement.json#/definitions/title_regex_patterns"
					},
					admin_action_process_notes: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/admin_action.json#/definitions/process_notes"
					},
					media_md5: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/md5"
					},
					perspective_severe_toxicity: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/severe_toxicity"
					},
					search_subreddit_ids: {
						$ref: "http://com.reddit/schemas/field_definitions/search/search.json#/definitions/subreddit_ids"
					},
					post_composer_input_type: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post_composer.json#/definitions/input_type"
					},
					reddar_audit_included_range_start_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/audit/reddar_audit.json#/definitions/included_range_start_timestamp"
					},
					listing_geo_filter: {
						$ref: "http://com.reddit/schemas/field_definitions/content/listing.json#/definitions/geo_filter"
					},
					programmatic_partner: {
						$ref: "http://com.reddit/schemas/field_definitions/ad/programmatic.json#/definitions/partner"
					},
					reward_info_amount: {
						$ref: "http://com.reddit/schemas/field_definitions/reward/reward_info.json#/definitions/amount"
					},
					trophy_id: {
						$ref: "http://com.reddit/schemas/field_definitions/trophy/trophy.json#/definitions/id"
					},
					content_tag_mature_themes: {
						$ref: "http://com.reddit/schemas/field_definitions/content_tag/content_tag.json#/definitions/mature_themes"
					},
					mute_total_mutes: {
						$ref: "http://com.reddit/schemas/field_definitions/mute/mute.json#/definitions/total_mutes"
					},
					request_known_bot: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/known_bot"
					},
					meta_search_display_query: {
						$ref: "http://com.reddit/schemas/field_definitions/metasearch/meta_search.json#/definitions/display_query"
					},
					reddar_audit_ticket_agent_id: {
						$ref: "http://com.reddit/schemas/field_definitions/audit/reddar_audit_ticket.json#/definitions/agent_id"
					},
					grapeshot_classification_categories: {
						$ref: "http://com.reddit/schemas/field_definitions/grapeshot_classification/grapeshot_classification.json#/definitions/categories"
					},
					vote_affects_score: {
						$ref: "http://com.reddit/schemas/field_definitions/content/vote.json#/definitions/affects_score"
					},
					live_audio_room_id: {
						$ref: "http://com.reddit/schemas/field_definitions/liveaudio/live_audio_room.json#/definitions/id"
					},
					post_crosspost_root_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/crosspost_root_id"
					},
					admin_action_takedown_id: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/admin_action.json#/definitions/takedown_id"
					},
					a_f_d_second_image_name: {
						$ref: "http://com.reddit/schemas/field_definitions/afd_second/a_f_d_second.json#/definitions/image_name"
					},
					outbound_url: {
						$ref: "http://com.reddit/schemas/field_definitions/outbound/outbound.json#/definitions/url"
					},
					payment_default_option: {
						$ref: "http://com.reddit/schemas/field_definitions/payment/payment.json#/definitions/default_option"
					},
					request_loginbot: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/loginbot"
					},
					announcement_body: {
						$ref: "http://com.reddit/schemas/field_definitions/announcement/announcement.json#/definitions/body"
					},
					subreddit_access_type: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/subreddit.json#/definitions/access_type"
					},
					user_preferences_hide_nsfw: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user_preferences.json#/definitions/hide_nsfw"
					},
					scheduled_post_submission_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/scheduled_post/scheduled_post.json#/definitions/submission_timestamp"
					},
					m_l_model_owner: {
						$ref: "http://com.reddit/schemas/field_definitions/ml_model/m_l_model.json#/definitions/owner"
					},
					action_info_relative_position: {
						$ref: "http://com.reddit/schemas/field_definitions/action/action_info.json#/definitions/relative_position"
					},
					admin_team_id: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/admin_team.json#/definitions/id"
					},
					request_apple_ios_aid: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/apple_ios_aid"
					},
					media_outbound_url: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/outbound_url"
					},
					profile_name: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/profile.json#/definitions/name"
					},
					outbound_subreddit_name: {
						$ref: "http://com.reddit/schemas/field_definitions/outbound/outbound.json#/definitions/subreddit_name"
					},
					playback_scrubbing_start_ms: {
						$ref: "http://com.reddit/schemas/field_definitions/playback/playback.json#/definitions/scrubbing_start_ms"
					},
					subreddit_public_description: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/subreddit.json#/definitions/public_description"
					},
					post_composer_type: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post_composer.json#/definitions/type"
					},
					restrict_username_linking: {
						$ref: "http://com.reddit/schemas/field_definitions/restrict/restrict.json#/definitions/username_linking"
					},
					comment_score: {
						$ref: "http://com.reddit/schemas/field_definitions/content/comment.json#/definitions/score"
					},
					search_nsfw_reason: {
						$ref: "http://com.reddit/schemas/field_definitions/search/search.json#/definitions/nsfw_reason"
					},
					post_event_event_start_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post_event.json#/definitions/event_start_timestamp"
					},
					rater_tag_non_selected_answer_ids: {
						$ref: "http://com.reddit/schemas/field_definitions/rater_tag/rater_tag.json#/definitions/non_selected_answer_ids"
					},
					outbound_post_id: {
						$ref: "http://com.reddit/schemas/field_definitions/outbound/outbound.json#/definitions/post_id"
					},
					carousel_type: {
						$ref: "http://com.reddit/schemas/field_definitions/carousel/carousel.json#/definitions/type"
					},
					ad_request_number_min_distance: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_request.json#/definitions/number_min_distance"
					},
					gold_purchase_source: {
						$ref: "http://com.reddit/schemas/field_definitions/gold/gold_purchase.json#/definitions/source"
					},
					payment_stored_credit_card_state: {
						$ref: "http://com.reddit/schemas/field_definitions/payment/payment.json#/definitions/stored_credit_card_state"
					},
					screen_android_font_size: {
						$ref: "http://com.reddit/schemas/field_definitions/device/screen.json#/definitions/android_font_size"
					},
					crowd_source_old_place_id: {
						$ref: "http://com.reddit/schemas/field_definitions/crowd_source/crowd_source.json#/definitions/old_place_id"
					},
					response_last_modified_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/request/response.json#/definitions/last_modified_timestamp"
					},
					rater_tag_rating_type: {
						$ref: "http://com.reddit/schemas/field_definitions/rater_tag/rater_tag.json#/definitions/rating_type"
					},
					chat_recipient_user_id: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/recipient_user_id"
					},
					funding_instrument_id: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/id"
					},
					ad_push_first_ad: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_push.json#/definitions/first_ad"
					},
					powerups_automatic: {
						$ref: "http://com.reddit/schemas/field_definitions/powerups/powerups.json#/definitions/automatic"
					},
					funding_instrument_servable: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/servable"
					},
					user_subreddit_comment_karma: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user_subreddit.json#/definitions/comment_karma"
					},
					reddar_ticket_id: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket.json#/definitions/id"
					},
					message_modmail_message_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/message.json#/definitions/modmail_message_id"
					},
					onboarding_user_name: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/user_name"
					},
					user_created_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/created_timestamp"
					},
					geo_hosting_provider: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/geo.json#/definitions/hosting_provider"
					},
					subreddit_topic_tag_ids: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/subreddit.json#/definitions/topic_tag_ids"
					},
					geo_anonymous_vpn: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/geo.json#/definitions/anonymous_vpn"
					},
					expand_provider: {
						$ref: "http://com.reddit/schemas/field_definitions/action/expand.json#/definitions/provider"
					},
					notification_dropped: {
						$ref: "http://com.reddit/schemas/field_definitions/content/notification.json#/definitions/dropped"
					},
					email_header_text: {
						$ref: "http://com.reddit/schemas/field_definitions/email/email.json#/definitions/header_text"
					},
					restrict_poll_posts: {
						$ref: "http://com.reddit/schemas/field_definitions/restrict/restrict.json#/definitions/poll_posts"
					},
					profile_about: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/profile.json#/definitions/about"
					},
					comment_depth: {
						$ref: "http://com.reddit/schemas/field_definitions/content/comment.json#/definitions/depth"
					},
					request_amazon_aid: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/amazon_aid"
					},
					oauth_client_app_type: {
						$ref: "http://com.reddit/schemas/field_definitions/request/oauth.json#/definitions/client_app_type"
					},
					comment_parent_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/comment.json#/definitions/parent_id"
					},
					a_f_d_second_round_id: {
						$ref: "http://com.reddit/schemas/field_definitions/afd_second/a_f_d_second.json#/definitions/round_id"
					},
					crowd_source_geo_city: {
						$ref: "http://com.reddit/schemas/field_definitions/crowd_source/crowd_source.json#/definitions/geo_city"
					},
					post_hvts: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/hvts"
					},
					content_metadata_is_quarantined: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/content_metadata.json#/definitions/is_quarantined"
					},
					notification_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/notification.json#/definitions/id"
					},
					click_test_prompt: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/click_test.json#/definitions/prompt"
					},
					rater_tag_tagging_question: {
						$ref: "http://com.reddit/schemas/field_definitions/rater_tag/rater_tag.json#/definitions/tagging_question"
					},
					bulk_action_job_targets: {
						$ref: "http://com.reddit/schemas/field_definitions/bulk_action_job/bulk_action_job.json#/definitions/targets"
					},
					playback_start_time_ms: {
						$ref: "http://com.reddit/schemas/field_definitions/playback/playback.json#/definitions/start_time_ms"
					},
					n_c_m_e_c_report_account_created_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/n_c_m_e_c_report.json#/definitions/account_created_timestamp"
					},
					powerups_subscription_id: {
						$ref: "http://com.reddit/schemas/field_definitions/powerups/powerups.json#/definitions/subscription_id"
					},
					snoovatar_nft_name: {
						$ref: "http://com.reddit/schemas/field_definitions/snoovatar/snoovatar.json#/definitions/nft_name"
					},
					bulk_messenger_add_admin_note: {
						$ref: "http://com.reddit/schemas/field_definitions/bulk_messenger/bulk_messenger.json#/definitions/add_admin_note"
					},
					post_number_posts_from_ad: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/number_posts_from_ad"
					},
					api_response_content: {
						$ref: "http://com.reddit/schemas/field_definitions/request/api_response.json#/definitions/content"
					},
					ticket_type: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/ticket.json#/definitions/type"
					},
					live_audio_room_user_platform_id: {
						$ref: "http://com.reddit/schemas/field_definitions/liveaudio/live_audio_room_user.json#/definitions/platform_id"
					},
					screen_width: {
						$ref: "http://com.reddit/schemas/field_definitions/device/screen.json#/definitions/width"
					},
					subreddit_id: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/subreddit.json#/definitions/id"
					},
					spamurai_action_is_unapprovable: {
						$ref: "http://com.reddit/schemas/field_definitions/spamurai/spamurai_action.json#/definitions/is_unapprovable"
					},
					inferred_json_byte_size: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/inferred.json#/definitions/json_byte_size"
					},
					funding_instrument_billing_threshold_micros: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/billing_threshold_micros"
					},
					a_t_c_decision_value: {
						$ref: "http://com.reddit/schemas/field_definitions/atc/a_t_c.json#/definitions/decision_value"
					},
					funding_instrument_name: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/name"
					},
					comment_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/comment.json#/definitions/id"
					},
					n_c_m_e_c_report_report_added_note: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/n_c_m_e_c_report.json#/definitions/report_added_note"
					},
					user_id: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/id"
					},
					ad_brand_safety_tier: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_brand_safety.json#/definitions/tier"
					},
					platform_device_id: {
						$ref: "http://com.reddit/schemas/field_definitions/device/platform.json#/definitions/device_id"
					},
					rater_tag_selected_answers: {
						$ref: "http://com.reddit/schemas/field_definitions/rater_tag/rater_tag.json#/definitions/selected_answers"
					},
					tooltip_text: {
						$ref: "http://com.reddit/schemas/field_definitions/tooltip/tooltip.json#/definitions/text"
					},
					user_email: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/email"
					},
					mute_last_mute_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/mute/mute.json#/definitions/last_mute_timestamp"
					},
					perspective_unsubstantial: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/unsubstantial"
					},
					user_is_premium_subscriber: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/is_premium_subscriber"
					},
					tooltip_id: {
						$ref: "http://com.reddit/schemas/field_definitions/tooltip/tooltip.json#/definitions/id"
					},
					url_parsed_utm_medium: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/url_parsed.json#/definitions/utm_medium"
					},
					content_tag_rating: {
						$ref: "http://com.reddit/schemas/field_definitions/content_tag/content_tag.json#/definitions/rating"
					},
					chat_reported_user_id: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/reported_user_id"
					},
					action_info_position: {
						$ref: "http://com.reddit/schemas/field_definitions/action/action_info.json#/definitions/position"
					},
					perspective_insult: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/insult"
					},
					post_requirement_require_post_flair: {
						$ref: "http://com.reddit/schemas/field_definitions/post_requirement/post_requirement.json#/definitions/require_post_flair"
					},
					navigation_session_referring_page_type: {
						$ref: "http://com.reddit/schemas/field_definitions/navigation_session/navigation_session.json#/definitions/referring_page_type"
					},
					media_mimetype: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/mimetype"
					},
					user_subreddit_mod_none: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user_subreddit.json#/definitions/mod_none"
					},
					perspective_identity_attack: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/identity_attack"
					},
					ad_request_placement: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_request.json#/definitions/placement"
					},
					request_robots_meta_tag: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/robots_meta_tag"
					},
					domain_ban_url: {
						$ref: "http://com.reddit/schemas/field_definitions/domain_ban/domain_ban.json#/definitions/url"
					},
					d_o_m_timers_loading: {
						$ref: "http://com.reddit/schemas/field_definitions/timer/d_o_m_timers.json#/definitions/loading"
					},
					url_parsed_utm_content: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/url_parsed.json#/definitions/utm_content"
					},
					webhook_type: {
						$ref: "http://com.reddit/schemas/field_definitions/webhook/webhook.json#/definitions/type"
					},
					inferred_user_agent_web_crawler: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/inferred.json#/definitions/user_agent_web_crawler"
					},
					survey_type: {
						$ref: "http://com.reddit/schemas/field_definitions/survey/survey.json#/definitions/type"
					},
					topic_tag_id: {
						$ref: "http://com.reddit/schemas/field_definitions/topic_tag/topic_tag.json#/definitions/id"
					},
					ad_request_first_chunk: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_request.json#/definitions/first_chunk"
					},
					ad_metadata_impression_id: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_metadata.json#/definitions/impression_id"
					},
					reddar_audit_ticket_qa_user_action: {
						$ref: "http://com.reddit/schemas/field_definitions/audit/reddar_audit_ticket.json#/definitions/qa_user_action"
					},
					user_flair_id_achieve: {
						$ref: "http://com.reddit/schemas/field_definitions/userflair/user_flair.json#/definitions/id_achieve"
					},
					gold_purchase_gift_anonymous: {
						$ref: "http://com.reddit/schemas/field_definitions/gold/gold_purchase.json#/definitions/gift_anonymous"
					},
					n_c_m_e_c_report_filename: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/n_c_m_e_c_report.json#/definitions/filename"
					},
					geo_metro_code: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/geo.json#/definitions/metro_code"
					},
					admin_action_removal_is_restorable: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/admin_action.json#/definitions/removal_is_restorable"
					},
					setting_scope: {
						$ref: "http://com.reddit/schemas/field_definitions/setting/setting.json#/definitions/scope"
					},
					playback_playhead_offset_ms: {
						$ref: "http://com.reddit/schemas/field_definitions/playback/playback.json#/definitions/playhead_offset_ms"
					},
					crowd_source_old_geo_country: {
						$ref: "http://com.reddit/schemas/field_definitions/crowd_source/crowd_source.json#/definitions/old_geo_country"
					},
					gold_purchase_default_option: {
						$ref: "http://com.reddit/schemas/field_definitions/gold/gold_purchase.json#/definitions/default_option"
					},
					click_test_name: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/click_test.json#/definitions/name"
					},
					a_t_c_decision_reason_detail: {
						$ref: "http://com.reddit/schemas/field_definitions/atc/a_t_c.json#/definitions/decision_reason_detail"
					},
					message_subject: {
						$ref: "http://com.reddit/schemas/field_definitions/content/message.json#/definitions/subject"
					},
					rater_tag_module_type: {
						$ref: "http://com.reddit/schemas/field_definitions/rater_tag/rater_tag.json#/definitions/module_type"
					},
					chat_message_body: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/message_body"
					},
					listing_aggregator: {
						$ref: "http://com.reddit/schemas/field_definitions/content/listing.json#/definitions/aggregator"
					},
					search_meta_flair_id: {
						$ref: "http://com.reddit/schemas/field_definitions/search/search.json#/definitions/meta_flair_id"
					},
					ad_decision_hide_news: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_decision.json#/definitions/hide_news"
					},
					ad_request_post_links: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_request.json#/definitions/post_links"
					},
					carousel_id: {
						$ref: "http://com.reddit/schemas/field_definitions/carousel/carousel.json#/definitions/id"
					},
					geo_block_countries: {
						$ref: "http://com.reddit/schemas/field_definitions/geo_block/geo_block.json#/definitions/countries"
					},
					reddar_ticket_content_reported_url: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket_content.json#/definitions/reported_url"
					},
					domain_ban_regex: {
						$ref: "http://com.reddit/schemas/field_definitions/domain_ban/domain_ban.json#/definitions/regex"
					},
					post_collection_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post_collection.json#/definitions/id"
					},
					a_f_d_second_image_set_name: {
						$ref: "http://com.reddit/schemas/field_definitions/afd_second/a_f_d_second.json#/definitions/image_set_name"
					},
					request_server_render_id: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/server_render_id"
					},
					reddar_ticket_content_target_id: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket_content.json#/definitions/target_id"
					},
					endpoint_timestamp: {
						$ref: "http://com.reddit/schemas/components/common.json#/definitions/endpoint_timestamp"
					},
					n_c_m_e_c_report_content_publicly_available: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/n_c_m_e_c_report.json#/definitions/content_publicly_available"
					},
					click_test_response: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/click_test.json#/definitions/response"
					},
					a_t_c_pn_index: {
						$ref: "http://com.reddit/schemas/field_definitions/atc/a_t_c.json#/definitions/pn_index"
					},
					snoovatar_gear_hair: {
						$ref: "http://com.reddit/schemas/field_definitions/snoovatar/snoovatar.json#/definitions/gear_hair"
					},
					post_top_awarded_type: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/top_awarded_type"
					},
					feature_name: {
						$ref: "http://com.reddit/schemas/field_definitions/feature/feature.json#/definitions/name"
					},
					funding_instrument_line_item_id: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/line_item_id"
					},
					crowd_control_collapse_reasons: {
						$ref: "http://com.reddit/schemas/field_definitions/crowd_control/crowd_control.json#/definitions/collapse_reasons"
					},
					payment_method: {
						$ref: "http://com.reddit/schemas/field_definitions/payment/payment.json#/definitions/method"
					},
					post_composer_editor_mode: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post_composer.json#/definitions/editor_mode"
					},
					mod_action_is_automoderator: {
						$ref: "http://com.reddit/schemas/field_definitions/moderator/mod_action.json#/definitions/is_automoderator"
					},
					live_audio_room_user_role: {
						$ref: "http://com.reddit/schemas/field_definitions/liveaudio/live_audio_room_user.json#/definitions/role"
					},
					scheduled_post_creator_user_id: {
						$ref: "http://com.reddit/schemas/field_definitions/scheduled_post/scheduled_post.json#/definitions/creator_user_id"
					},
					reward_info_type: {
						$ref: "http://com.reddit/schemas/field_definitions/reward/reward_info.json#/definitions/type"
					},
					perspective_obscene: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/obscene"
					},
					app_install_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/device/app.json#/definitions/install_timestamp"
					},
					search_number_links: {
						$ref: "http://com.reddit/schemas/field_definitions/search/search.json#/definitions/number_links"
					},
					perspective_max_threat: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/max_threat"
					},
					screen_in_focus: {
						$ref: "http://com.reddit/schemas/field_definitions/device/screen.json#/definitions/in_focus"
					},
					funding_instrument_total_spending_micros: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/total_spending_micros"
					},
					n_c_m_e_c_report_post_id: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/n_c_m_e_c_report.json#/definitions/post_id"
					},
					post_subreddit_name: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/subreddit_name"
					},
					snoovatar_user_has_nft: {
						$ref: "http://com.reddit/schemas/field_definitions/snoovatar/snoovatar.json#/definitions/user_has_nft"
					},
					admin_team_access_type: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/admin_team.json#/definitions/access_type"
					},
					mute_state: {
						$ref: "http://com.reddit/schemas/field_definitions/mute/mute.json#/definitions/state"
					},
					noun: {
						$ref: "http://com.reddit/schemas/components/common.json#/definitions/noun"
					},
					powerups_paid_count: {
						$ref: "http://com.reddit/schemas/field_definitions/powerups/powerups.json#/definitions/paid_count"
					},
					user_subreddit_mod_wiki: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user_subreddit.json#/definitions/mod_wiki"
					},
					notification_title: {
						$ref: "http://com.reddit/schemas/field_definitions/content/notification.json#/definitions/title"
					},
					user_logged_in: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/logged_in"
					},
					chat_report_reason: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/report_reason"
					},
					inbox_badge_count: {
						$ref: "http://com.reddit/schemas/field_definitions/inbox/inbox.json#/definitions/badge_count"
					},
					poll_number_prediction_coins: {
						$ref: "http://com.reddit/schemas/field_definitions/poll/poll.json#/definitions/number_prediction_coins"
					},
					rater_tag_selected_answer_ids: {
						$ref: "http://com.reddit/schemas/field_definitions/rater_tag/rater_tag.json#/definitions/selected_answer_ids"
					},
					n_c_m_e_c_report_email_verified_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/n_c_m_e_c_report.json#/definitions/email_verified_timestamp"
					},
					chat_invitation_preview_type: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/invitation_preview_type"
					},
					api_endpoint: {
						$ref: "http://com.reddit/schemas/field_definitions/request/api.json#/definitions/endpoint"
					},
					legal_export_request_target_type: {
						$ref: "http://com.reddit/schemas/field_definitions/legal_export_request/legal_export_request.json#/definitions/target_type"
					},
					content_metadata_is_nsfw: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/content_metadata.json#/definitions/is_nsfw"
					},
					media_time: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/time"
					},
					comment_author_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/comment.json#/definitions/author_id"
					},
					user_disenfranchised: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/disenfranchised"
					},
					reddar_audit_auditor_id: {
						$ref: "http://com.reddit/schemas/field_definitions/audit/reddar_audit.json#/definitions/auditor_id"
					},
					perspective_max_inflammatory: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/max_inflammatory"
					},
					playback_timestamp_ms: {
						$ref: "http://com.reddit/schemas/field_definitions/playback/playback.json#/definitions/timestamp_ms"
					},
					funding_instrument_last_modified_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/last_modified_timestamp"
					},
					custom_feed_id: {
						$ref: "http://com.reddit/schemas/field_definitions/custom_feed/custom_feed.json#/definitions/id"
					},
					request_base_url: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/base_url"
					},
					media_file_name: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/file_name"
					},
					experiment_owner: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/experiment.json#/definitions/owner"
					},
					topic_tag_type: {
						$ref: "http://com.reddit/schemas/field_definitions/topic_tag/topic_tag.json#/definitions/type"
					},
					bulk_action_job_user_id: {
						$ref: "http://com.reddit/schemas/field_definitions/bulk_action_job/bulk_action_job.json#/definitions/user_id"
					},
					c_s_a_i_media_violation_source: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/c_s_a_i_media.json#/definitions/violation_source"
					},
					a_f_d_second_vote_counts: {
						$ref: "http://com.reddit/schemas/field_definitions/afd_second/a_f_d_second.json#/definitions/vote_counts"
					},
					bulk_messenger_distinguished: {
						$ref: "http://com.reddit/schemas/field_definitions/bulk_messenger/bulk_messenger.json#/definitions/distinguished"
					},
					news_subtopic_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/news.json#/definitions/subtopic_id"
					},
					platform_os_name: {
						$ref: "http://com.reddit/schemas/field_definitions/device/platform.json#/definitions/os_name"
					},
					domain_ban_markdown: {
						$ref: "http://com.reddit/schemas/field_definitions/domain_ban/domain_ban.json#/definitions/markdown"
					},
					message_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/message.json#/definitions/id"
					},
					gallery_media_ids: {
						$ref: "http://com.reddit/schemas/field_definitions/content/gallery.json#/definitions/media_ids"
					},
					listing_min_rank: {
						$ref: "http://com.reddit/schemas/field_definitions/content/listing.json#/definitions/min_rank"
					},
					post_composer_submit_scheduled_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post_composer.json#/definitions/submit_scheduled_timestamp"
					},
					user_email_domain: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/email_domain"
					},
					request_cookies_present: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/cookies_present"
					},
					action_info_setting_value: {
						$ref: "http://com.reddit/schemas/field_definitions/action/action_info.json#/definitions/setting_value"
					},
					user_subreddit_mod_post: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user_subreddit.json#/definitions/mod_post"
					},
					admin_action_removal_type: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/admin_action.json#/definitions/removal_type"
					},
					funding_instrument_admin_id: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/admin_id"
					},
					search_post_id: {
						$ref: "http://com.reddit/schemas/field_definitions/search/search.json#/definitions/post_id"
					},
					reddar_audit_ticket_ids: {
						$ref: "http://com.reddit/schemas/field_definitions/audit/reddar_audit.json#/definitions/ticket_ids"
					},
					mailroom_request_region: {
						$ref: "http://com.reddit/schemas/field_definitions/notification/mailroom_request.json#/definitions/region"
					},
					post_collection_display_layout: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post_collection.json#/definitions/display_layout"
					},
					onboarding_semantic_version: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/semantic_version"
					},
					gallery_num_items: {
						$ref: "http://com.reddit/schemas/field_definitions/content/gallery.json#/definitions/num_items"
					},
					reddar_audit_ticket_auditor_id: {
						$ref: "http://com.reddit/schemas/field_definitions/audit/reddar_audit_ticket.json#/definitions/auditor_id"
					},
					ad_push_push_other: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_push.json#/definitions/push_other"
					},
					upload_category: {
						$ref: "http://com.reddit/schemas/field_definitions/upload/upload.json#/definitions/category"
					},
					action_info_page_type: {
						$ref: "http://com.reddit/schemas/field_definitions/action/action_info.json#/definitions/page_type"
					},
					post_promoted: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/promoted"
					},
					reddar_audit_ticket_qa_content_action: {
						$ref: "http://com.reddit/schemas/field_definitions/audit/reddar_audit_ticket.json#/definitions/qa_content_action"
					},
					programmatic_type: {
						$ref: "http://com.reddit/schemas/field_definitions/ad/programmatic.json#/definitions/type"
					},
					zipkin_trace_id: {
						$ref: "http://com.reddit/schemas/field_definitions/request/zipkin.json#/definitions/trace_id"
					},
					scheduled_post_submitted_post_id: {
						$ref: "http://com.reddit/schemas/field_definitions/scheduled_post/scheduled_post.json#/definitions/submitted_post_id"
					},
					reddar_audit_ticket_audit_id: {
						$ref: "http://com.reddit/schemas/field_definitions/audit/reddar_audit_ticket.json#/definitions/audit_id"
					},
					post_event_type: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post_event.json#/definitions/type"
					},
					gold_purchase_number_coins: {
						$ref: "http://com.reddit/schemas/field_definitions/gold/gold_purchase.json#/definitions/number_coins"
					},
					gallery_num_videos: {
						$ref: "http://com.reddit/schemas/field_definitions/content/gallery.json#/definitions/num_videos"
					},
					inferred_post_impression_id: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/inferred.json#/definitions/post_impression_id"
					},
					gold_purchase_gift_message_length: {
						$ref: "http://com.reddit/schemas/field_definitions/gold/gold_purchase.json#/definitions/gift_message_length"
					},
					reddar_ticket_content_target_created_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket_content.json#/definitions/target_created_timestamp"
					},
					action_info_success: {
						$ref: "http://com.reddit/schemas/field_definitions/action/action_info.json#/definitions/success"
					},
					r_e_s_night_mode: {
						$ref: "http://com.reddit/schemas/field_definitions/res/r_e_s.json#/definitions/night_mode"
					},
					post_number_gildings: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/number_gildings"
					},
					playback_id: {
						$ref: "http://com.reddit/schemas/field_definitions/playback/playback.json#/definitions/id"
					},
					popup_text: {
						$ref: "http://com.reddit/schemas/field_definitions/popup/popup.json#/definitions/text"
					},
					restrict_subscriber_count_visibility: {
						$ref: "http://com.reddit/schemas/field_definitions/restrict/restrict.json#/definitions/subscriber_count_visibility"
					},
					profile_id: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/profile.json#/definitions/id"
					},
					post_draft_author_id: {
						$ref: "http://com.reddit/schemas/field_definitions/post_draft/post_draft.json#/definitions/author_id"
					},
					funding_instrument_legacy_transaction_id: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/legacy_transaction_id"
					},
					a_f_d_second_round_end_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/afd_second/a_f_d_second.json#/definitions/round_end_timestamp"
					},
					meta_search_subreddit_name: {
						$ref: "http://com.reddit/schemas/field_definitions/metasearch/meta_search.json#/definitions/subreddit_name"
					},
					notification_request_platform: {
						$ref: "http://com.reddit/schemas/field_definitions/notification/notification_request.json#/definitions/platform"
					},
					two_factor_auth_device_backup_codes_remaining: {
						$ref: "http://com.reddit/schemas/field_definitions/security/two_factor_auth.json#/definitions/device_backup_codes_remaining"
					},
					gold_purchase_number_creddits: {
						$ref: "http://com.reddit/schemas/field_definitions/gold/gold_purchase.json#/definitions/number_creddits"
					},
					crowd_source_old_geo_region: {
						$ref: "http://com.reddit/schemas/field_definitions/crowd_source/crowd_source.json#/definitions/old_geo_region"
					},
					imposter_note_text: {
						$ref: "http://com.reddit/schemas/field_definitions/imposter/imposter.json#/definitions/note_text"
					},
					gold_purchase_number_coins_monthly: {
						$ref: "http://com.reddit/schemas/field_definitions/gold/gold_purchase.json#/definitions/number_coins_monthly"
					},
					ad_push_push_keyword: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_push.json#/definitions/push_keyword"
					},
					chat_existing_channel: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/existing_channel"
					},
					perspective_max_obscene: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/max_obscene"
					},
					ad_push_push_whitelist: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_push.json#/definitions/push_whitelist"
					},
					screen_view_type: {
						$ref: "http://com.reddit/schemas/field_definitions/device/screen.json#/definitions/view_type"
					},
					search_subreddit_name: {
						$ref: "http://com.reddit/schemas/field_definitions/search/search.json#/definitions/subreddit_name"
					},
					setting_old_values: {
						$ref: "http://com.reddit/schemas/field_definitions/setting/setting.json#/definitions/old_values"
					},
					funding_instrument_total_payment_micros: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/total_payment_micros"
					},
					post_flair: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/flair"
					},
					spamurai_action_is_ban_all: {
						$ref: "http://com.reddit/schemas/field_definitions/spamurai/spamurai_action.json#/definitions/is_ban_all"
					},
					search_query: {
						$ref: "http://com.reddit/schemas/field_definitions/search/search.json#/definitions/query"
					},
					funding_instrument_type: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/type"
					},
					n_c_m_e_c_report_classification_type: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/n_c_m_e_c_report.json#/definitions/classification_type"
					},
					app_build_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/device/app.json#/definitions/build_timestamp"
					},
					platform_os_version: {
						$ref: "http://com.reddit/schemas/field_definitions/device/platform.json#/definitions/os_version"
					},
					user_subreddit_is_steward: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user_subreddit.json#/definitions/is_steward"
					},
					m_l_model_name: {
						$ref: "http://com.reddit/schemas/field_definitions/ml_model/m_l_model.json#/definitions/name"
					},
					user_subreddit_is_favorite: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user_subreddit.json#/definitions/is_favorite"
					},
					media_cdn_name: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/cdn_name"
					},
					profile_communities_visible: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/profile.json#/definitions/communities_visible"
					},
					trophy_name: {
						$ref: "http://com.reddit/schemas/field_definitions/trophy/trophy.json#/definitions/name"
					},
					feed_serving_position: {
						$ref: "http://com.reddit/schemas/field_definitions/feed/feed.json#/definitions/serving_position"
					},
					funding_instrument_authorize_profile_id: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/authorize_profile_id"
					},
					session_version: {
						$ref: "http://com.reddit/schemas/field_definitions/session/session.json#/definitions/version"
					},
					live_audio_room_platform: {
						$ref: "http://com.reddit/schemas/field_definitions/liveaudio/live_audio_room.json#/definitions/platform"
					},
					mailroom_request_message_type: {
						$ref: "http://com.reddit/schemas/field_definitions/notification/mailroom_request.json#/definitions/message_type"
					},
					request_tls_fingerprint: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/tls_fingerprint"
					},
					message_first_message_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/message.json#/definitions/first_message_id"
					},
					purchase_days_remaining: {
						$ref: "http://com.reddit/schemas/field_definitions/econ/purchase.json#/definitions/days_remaining"
					},
					m_l_model_type: {
						$ref: "http://com.reddit/schemas/field_definitions/ml_model/m_l_model.json#/definitions/type"
					},
					search_subreddit_id: {
						$ref: "http://com.reddit/schemas/field_definitions/search/search.json#/definitions/subreddit_id"
					},
					two_factor_auth_device_algorithm: {
						$ref: "http://com.reddit/schemas/field_definitions/security/two_factor_auth.json#/definitions/device_algorithm"
					},
					comment_number_gildings: {
						$ref: "http://com.reddit/schemas/field_definitions/content/comment.json#/definitions/number_gildings"
					},
					post_draft_nsfw: {
						$ref: "http://com.reddit/schemas/field_definitions/post_draft/post_draft.json#/definitions/nsfw"
					},
					chat_invitation_id: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/invitation_id"
					},
					listing_cursor_returned: {
						$ref: "http://com.reddit/schemas/field_definitions/content/listing.json#/definitions/cursor_returned"
					},
					gold_purchase_default_anonymous: {
						$ref: "http://com.reddit/schemas/field_definitions/gold/gold_purchase.json#/definitions/default_anonymous"
					},
					onboarding_pre_selected: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/pre_selected"
					},
					session_referrer_url: {
						$ref: "http://com.reddit/schemas/field_definitions/session/session.json#/definitions/referrer_url"
					},
					funding_instrument_user_id: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/user_id"
					},
					m_l_model_client_name: {
						$ref: "http://com.reddit/schemas/field_definitions/ml_model/m_l_model.json#/definitions/client_name"
					},
					scheduled_post_number_recurrences: {
						$ref: "http://com.reddit/schemas/field_definitions/scheduled_post/scheduled_post.json#/definitions/number_recurrences"
					},
					action_info_retried: {
						$ref: "http://com.reddit/schemas/field_definitions/action/action_info.json#/definitions/retried"
					},
					post_composer_text_type: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post_composer.json#/definitions/text_type"
					},
					perspective_id: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/id"
					},
					meta_search_range: {
						$ref: "http://com.reddit/schemas/field_definitions/metasearch/meta_search.json#/definitions/range"
					},
					purchase_product_id: {
						$ref: "http://com.reddit/schemas/field_definitions/econ/purchase.json#/definitions/product_id"
					},
					onboarding_landing_page: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/landing_page"
					},
					ad_push_push_nsfw: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_push.json#/definitions/push_nsfw"
					},
					reddar_ticket_reddar_features_used: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket.json#/definitions/reddar_features_used"
					},
					chat_channel_name: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/channel_name"
					},
					topic_tag_is_primary: {
						$ref: "http://com.reddit/schemas/field_definitions/topic_tag/topic_tag.json#/definitions/is_primary"
					},
					category_header_subreddit_names: {
						$ref: "http://com.reddit/schemas/field_definitions/category_header/category_header.json#/definitions/subreddit_names"
					},
					reddar_audit_id: {
						$ref: "http://com.reddit/schemas/field_definitions/audit/reddar_audit.json#/definitions/id"
					},
					chat_blocked_user_id: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/blocked_user_id"
					},
					user_masked_email_user: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/masked_email_user"
					},
					funding_instrument_available_freebies_micros: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/available_freebies_micros"
					},
					mailroom_request_notification_transport: {
						$ref: "http://com.reddit/schemas/field_definitions/notification/mailroom_request.json#/definitions/notification_transport"
					},
					meta_search_number_current_window: {
						$ref: "http://com.reddit/schemas/field_definitions/metasearch/meta_search.json#/definitions/number_current_window"
					},
					onboarding_captcha_num_screens: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/captcha_num_screens"
					},
					ad_pixel_event_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_pixel.json#/definitions/event_timestamp"
					},
					geo_tor_exit_node: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/geo.json#/definitions/tor_exit_node"
					},
					imposter_success: {
						$ref: "http://com.reddit/schemas/field_definitions/imposter/imposter.json#/definitions/success"
					},
					predictions_post_cnt: {
						$ref: "http://com.reddit/schemas/field_definitions/predictions/predictions.json#/definitions/post_cnt"
					},
					reddar_ticket_content_target_type: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket_content.json#/definitions/target_type"
					},
					c_s_a_i_media_violation_types: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/c_s_a_i_media.json#/definitions/violation_types"
					},
					onboarding_process_notes: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/process_notes"
					},
					legal_export_request_type: {
						$ref: "http://com.reddit/schemas/field_definitions/legal_export_request/legal_export_request.json#/definitions/type"
					},
					ad_decision_hide_source_post: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_decision.json#/definitions/hide_source_post"
					},
					content_tag_rating_version: {
						$ref: "http://com.reddit/schemas/field_definitions/content_tag/content_tag.json#/definitions/rating_version"
					},
					playback_volume: {
						$ref: "http://com.reddit/schemas/field_definitions/playback/playback.json#/definitions/volume"
					},
					search_origin_element: {
						$ref: "http://com.reddit/schemas/field_definitions/search/search.json#/definitions/origin_element"
					},
					n_c_m_e_c_report_permalink: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/n_c_m_e_c_report.json#/definitions/permalink"
					},
					screen_theme: {
						$ref: "http://com.reddit/schemas/field_definitions/device/screen.json#/definitions/theme"
					},
					a_f_d_second_image_id: {
						$ref: "http://com.reddit/schemas/field_definitions/afd_second/a_f_d_second.json#/definitions/image_id"
					},
					m_l_model_prediction_scores: {
						$ref: "http://com.reddit/schemas/field_definitions/ml_model/m_l_model.json#/definitions/prediction_scores"
					},
					event_hmac_key: {
						$ref: "http://com.reddit/schemas/components/common.json#/definitions/event_hmac_key"
					},
					post_recommendation_source_subreddit_name: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/recommendation_source_subreddit_name"
					},
					perspective_max_unsubstantial: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/max_unsubstantial"
					},
					geo_city: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/geo.json#/definitions/city"
					},
					playback_heartbeat_duration_ms: {
						$ref: "http://com.reddit/schemas/field_definitions/playback/playback.json#/definitions/heartbeat_duration_ms"
					},
					bulk_messenger_repliable: {
						$ref: "http://com.reddit/schemas/field_definitions/bulk_messenger/bulk_messenger.json#/definitions/repliable"
					},
					n_c_m_e_c_report_post_possible_proxy: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/n_c_m_e_c_report.json#/definitions/post_possible_proxy"
					},
					restrict_subreddit_linking: {
						$ref: "http://com.reddit/schemas/field_definitions/restrict/restrict.json#/definitions/subreddit_linking"
					},
					a_f_d_second_winning_image_id: {
						$ref: "http://com.reddit/schemas/field_definitions/afd_second/a_f_d_second.json#/definitions/winning_image_id"
					},
					perspective_likely_to_reject: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/likely_to_reject"
					},
					share_text: {
						$ref: "http://com.reddit/schemas/field_definitions/action/share.json#/definitions/text"
					},
					perspective_max_profanity: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/max_profanity"
					},
					mod_action_target_user_id: {
						$ref: "http://com.reddit/schemas/field_definitions/moderator/mod_action.json#/definitions/target_user_id"
					},
					post_submit_scheduled_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/submit_scheduled_timestamp"
					},
					app_name: {
						$ref: "http://com.reddit/schemas/field_definitions/device/app.json#/definitions/name"
					},
					post_draft_created_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/post_draft/post_draft.json#/definitions/created_timestamp"
					},
					listing_depth: {
						$ref: "http://com.reddit/schemas/field_definitions/content/listing.json#/definitions/depth"
					},
					media_orientation: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/orientation"
					},
					gold_purchase_content_type: {
						$ref: "http://com.reddit/schemas/field_definitions/gold/gold_purchase.json#/definitions/content_type"
					},
					live_thread_is_announcement: {
						$ref: "http://com.reddit/schemas/field_definitions/live_thread/live_thread.json#/definitions/is_announcement"
					},
					admin_action_target_team_id: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/admin_action.json#/definitions/target_team_id"
					},
					news_topic_name: {
						$ref: "http://com.reddit/schemas/field_definitions/content/news.json#/definitions/topic_name"
					},
					user_subreddit_mod_access: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user_subreddit.json#/definitions/mod_access"
					},
					c_s_a_i_media_retry_media_url: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/c_s_a_i_media.json#/definitions/retry_media_url"
					},
					user_subreddit_mod_config: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user_subreddit.json#/definitions/mod_config"
					},
					user_number_coins: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/number_coins"
					},
					a_t_c_decision_channel: {
						$ref: "http://com.reddit/schemas/field_definitions/atc/a_t_c.json#/definitions/decision_channel"
					},
					perspective_attack_on_commenter: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/attack_on_commenter"
					},
					spamurai_action_is_unban_all: {
						$ref: "http://com.reddit/schemas/field_definitions/spamurai/spamurai_action.json#/definitions/is_unban_all"
					},
					post_content_duration: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/content_duration"
					},
					bulk_action_job_actions: {
						$ref: "http://com.reddit/schemas/field_definitions/bulk_action_job/bulk_action_job.json#/definitions/actions"
					},
					reddar_audit_ticket_ticket_id: {
						$ref: "http://com.reddit/schemas/field_definitions/audit/reddar_audit_ticket.json#/definitions/ticket_id"
					},
					post_requirement_title_text_min_length: {
						$ref: "http://com.reddit/schemas/field_definitions/post_requirement/post_requirement.json#/definitions/title_text_min_length"
					},
					gold_purchase_number_coins_bonus: {
						$ref: "http://com.reddit/schemas/field_definitions/gold/gold_purchase.json#/definitions/number_coins_bonus"
					},
					comment_type: {
						$ref: "http://com.reddit/schemas/field_definitions/content/comment.json#/definitions/type"
					},
					reddar_ticket_content_removed_by_moderator: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket_content.json#/definitions/removed_by_moderator"
					},
					post_draft_type: {
						$ref: "http://com.reddit/schemas/field_definitions/post_draft/post_draft.json#/definitions/type"
					},
					programmatic_count: {
						$ref: "http://com.reddit/schemas/field_definitions/ad/programmatic.json#/definitions/count"
					},
					message_recipient_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/message.json#/definitions/recipient_id"
					},
					purchase_subscription_id: {
						$ref: "http://com.reddit/schemas/field_definitions/econ/purchase.json#/definitions/subscription_id"
					},
					experiment_bucketing_value: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/experiment.json#/definitions/bucketing_value"
					},
					chat_message_id: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/message_id"
					},
					url_parsed_utm_term: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/url_parsed.json#/definitions/utm_term"
					},
					search_meta_flair_name: {
						$ref: "http://com.reddit/schemas/field_definitions/search/search.json#/definitions/meta_flair_name"
					},
					purchase_price_micros: {
						$ref: "http://com.reddit/schemas/field_definitions/econ/purchase.json#/definitions/price_micros"
					},
					referrer_element: {
						$ref: "http://com.reddit/schemas/field_definitions/request/referrer.json#/definitions/element"
					},
					geo_block_public_note: {
						$ref: "http://com.reddit/schemas/field_definitions/geo_block/geo_block.json#/definitions/public_note"
					},
					user_preferences_in_beta: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user_preferences.json#/definitions/in_beta"
					},
					subreddit_topic_tag_contents: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/subreddit.json#/definitions/topic_tag_contents"
					},
					bulk_messenger_message_type: {
						$ref: "http://com.reddit/schemas/field_definitions/bulk_messenger/bulk_messenger.json#/definitions/message_type"
					},
					session_anonymous_browsing_mode: {
						$ref: "http://com.reddit/schemas/field_definitions/session/session.json#/definitions/anonymous_browsing_mode"
					},
					screen_height: {
						$ref: "http://com.reddit/schemas/field_definitions/device/screen.json#/definitions/height"
					},
					purchase_product_type: {
						$ref: "http://com.reddit/schemas/field_definitions/econ/purchase.json#/definitions/product_type"
					},
					user_subreddit_is_mod: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user_subreddit.json#/definitions/is_mod"
					},
					message_parent_message_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/message.json#/definitions/parent_message_id"
					},
					search_structure_type: {
						$ref: "http://com.reddit/schemas/field_definitions/search/search.json#/definitions/structure_type"
					},
					post_draft_number_rte_videos: {
						$ref: "http://com.reddit/schemas/field_definitions/post_draft/post_draft.json#/definitions/number_rte_videos"
					},
					post_requirement_body_restriction_policy: {
						$ref: "http://com.reddit/schemas/field_definitions/post_requirement/post_requirement.json#/definitions/body_restriction_policy"
					},
					profile_type: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/profile.json#/definitions/type"
					},
					n_c_m_e_c_report_id: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/n_c_m_e_c_report.json#/definitions/id"
					},
					chat_invitation_type: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/invitation_type"
					},
					user_preferences_hide_previously_seen_posts: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user_preferences.json#/definitions/hide_previously_seen_posts"
					},
					experiment_id: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/experiment.json#/definitions/id"
					},
					ad_decision_hide_gold: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_decision.json#/definitions/hide_gold"
					},
					search_comment_ids: {
						$ref: "http://com.reddit/schemas/field_definitions/search/search.json#/definitions/comment_ids"
					},
					snoovatar_id: {
						$ref: "http://com.reddit/schemas/field_definitions/snoovatar/snoovatar.json#/definitions/id"
					},
					purchase_count_remaining: {
						$ref: "http://com.reddit/schemas/field_definitions/econ/purchase.json#/definitions/count_remaining"
					},
					listing_sort: {
						$ref: "http://com.reddit/schemas/field_definitions/content/listing.json#/definitions/sort"
					},
					funding_instrument_payment_id: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/payment_id"
					},
					legal_export_request_completed_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/legal_export_request/legal_export_request.json#/definitions/completed_timestamp"
					},
					setting_old_value: {
						$ref: "http://com.reddit/schemas/field_definitions/setting/setting.json#/definitions/old_value"
					},
					banner_button_text: {
						$ref: "http://com.reddit/schemas/field_definitions/banner/banner.json#/definitions/button_text"
					},
					snoovatar_headshot_image_url: {
						$ref: "http://com.reddit/schemas/field_definitions/snoovatar/snoovatar.json#/definitions/headshot_image_url"
					},
					post_draft_body_text_length: {
						$ref: "http://com.reddit/schemas/field_definitions/post_draft/post_draft.json#/definitions/body_text_length"
					},
					funding_instrument_writeoff_micros: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/writeoff_micros"
					},
					session_created_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/session/session.json#/definitions/created_timestamp"
					},
					experiment_info: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/experiment.json#/definitions/info"
					},
					screen_viewport_height: {
						$ref: "http://com.reddit/schemas/field_definitions/device/screen.json#/definitions/viewport_height"
					},
					ad_brand_safety_tier_reason_whitelist: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_brand_safety.json#/definitions/tier_reason_whitelist"
					},
					post_requirement_link_whitelisted_domains_length: {
						$ref: "http://com.reddit/schemas/field_definitions/post_requirement/post_requirement.json#/definitions/link_whitelisted_domains_length"
					},
					bulk_action_job_reason: {
						$ref: "http://com.reddit/schemas/field_definitions/bulk_action_job/bulk_action_job.json#/definitions/reason"
					},
					poll_user_vote_text: {
						$ref: "http://com.reddit/schemas/field_definitions/poll/poll.json#/definitions/user_vote_text"
					},
					post_created_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/created_timestamp"
					},
					perspective_max_toxicity: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/max_toxicity"
					},
					payment_currency: {
						$ref: "http://com.reddit/schemas/field_definitions/payment/payment.json#/definitions/currency"
					},
					account_label_name: {
						$ref: "http://com.reddit/schemas/field_definitions/account_label/account_label.json#/definitions/name"
					},
					app_icon_name: {
						$ref: "http://com.reddit/schemas/field_definitions/app_icons/app_icon.json#/definitions/name"
					},
					app_icon_is_premium: {
						$ref: "http://com.reddit/schemas/field_definitions/app_icons/app_icon.json#/definitions/is_premium"
					},
					perspective_profanity: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/profanity"
					},
					perspective_max_flirtation: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/max_flirtation"
					},
					navigation_session_id: {
						$ref: "http://com.reddit/schemas/field_definitions/navigation_session/navigation_session.json#/definitions/id"
					},
					profile_cover_url: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/profile.json#/definitions/cover_url"
					},
					click_test_id: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/click_test.json#/definitions/id"
					},
					perspective_max_sexually_explicit: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/max_sexually_explicit"
					},
					post_requirement_number_repost_frequency_days: {
						$ref: "http://com.reddit/schemas/field_definitions/post_requirement/post_requirement.json#/definitions/number_repost_frequency_days"
					},
					admin_action_timeout_duration: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/admin_action.json#/definitions/timeout_duration"
					},
					media_size: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/size"
					},
					third_party_badge_title: {
						$ref: "http://com.reddit/schemas/field_definitions/thirdpartybadge/third_party_badge.json#/definitions/title"
					},
					n_c_m_e_c_report_user_id: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/n_c_m_e_c_report.json#/definitions/user_id"
					},
					admin_action_password_dump_id: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/admin_action.json#/definitions/password_dump_id"
					},
					media_width: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/width"
					},
					email_post_has_thumbnail: {
						$ref: "http://com.reddit/schemas/field_definitions/email/email.json#/definitions/post_has_thumbnail"
					},
					app_icon_prev_icon_id: {
						$ref: "http://com.reddit/schemas/field_definitions/app_icons/app_icon.json#/definitions/prev_icon_id"
					},
					restrict_subreddit_images: {
						$ref: "http://com.reddit/schemas/field_definitions/restrict/restrict.json#/definitions/subreddit_images"
					},
					user_number_creddits: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/number_creddits"
					},
					purchase_product_version: {
						$ref: "http://com.reddit/schemas/field_definitions/econ/purchase.json#/definitions/product_version"
					},
					media_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/id"
					},
					snoovatar_gear_top: {
						$ref: "http://com.reddit/schemas/field_definitions/snoovatar/snoovatar.json#/definitions/gear_top"
					},
					action_info_count: {
						$ref: "http://com.reddit/schemas/field_definitions/action/action_info.json#/definitions/count"
					},
					listing_links: {
						$ref: "http://com.reddit/schemas/field_definitions/content/listing.json#/definitions/links"
					},
					reddar_ticket_content_status_reason: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket_content.json#/definitions/status_reason"
					},
					reddar_ticket_requestor_id: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket.json#/definitions/requestor_id"
					},
					ad_pixel_tracking_type: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_pixel.json#/definitions/tracking_type"
					},
					ad_pixel_deferred: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_pixel.json#/definitions/deferred"
					},
					scheduled_post_recurring_intervals: {
						$ref: "http://com.reddit/schemas/field_definitions/scheduled_post/scheduled_post.json#/definitions/recurring_intervals"
					},
					legal_export_request_has_ndo: {
						$ref: "http://com.reddit/schemas/field_definitions/legal_export_request/legal_export_request.json#/definitions/has_ndo"
					},
					restrict_media_embeds: {
						$ref: "http://com.reddit/schemas/field_definitions/restrict/restrict.json#/definitions/media_embeds"
					},
					ad_request_top_comment_id: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_request.json#/definitions/top_comment_id"
					},
					comment_draft_body_text: {
						$ref: "http://com.reddit/schemas/field_definitions/comment_draft/comment_draft.json#/definitions/body_text"
					},
					user_preferences_expando: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user_preferences.json#/definitions/expando"
					},
					vote_affects_karma: {
						$ref: "http://com.reddit/schemas/field_definitions/content/vote.json#/definitions/affects_karma"
					},
					admin_id: {
						$ref: "http://com.reddit/schemas/field_definitions/admin/admin.json#/definitions/id"
					},
					post_composer_final_status: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post_composer.json#/definitions/final_status"
					},
					gold_purchase_award_id: {
						$ref: "http://com.reddit/schemas/field_definitions/gold/gold_purchase.json#/definitions/award_id"
					},
					user_subreddit_mod_flair: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user_subreddit.json#/definitions/mod_flair"
					},
					screen_ios_font_size: {
						$ref: "http://com.reddit/schemas/field_definitions/device/screen.json#/definitions/ios_font_size"
					},
					upload_optimization_type: {
						$ref: "http://com.reddit/schemas/field_definitions/upload/upload.json#/definitions/optimization_type"
					},
					media_max_time_served: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/max_time_served"
					},
					survey_question: {
						$ref: "http://com.reddit/schemas/field_definitions/survey/survey.json#/definitions/question"
					},
					live_audio_room_title: {
						$ref: "http://com.reddit/schemas/field_definitions/liveaudio/live_audio_room.json#/definitions/title"
					},
					playback_watch_duration_ms: {
						$ref: "http://com.reddit/schemas/field_definitions/playback/playback.json#/definitions/watch_duration_ms"
					},
					p_w_a_install_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/pwa/p_w_a.json#/definitions/install_timestamp"
					},
					funding_instrument_end_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/end_timestamp"
					},
					admin_action_template_type: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/admin_action.json#/definitions/template_type"
					},
					s_e_o_internal_link_url: {
						$ref: "http://com.reddit/schemas/field_definitions/seo/s_e_o.json#/definitions/internal_link_url"
					},
					a_f_d_second_image_ranks: {
						$ref: "http://com.reddit/schemas/field_definitions/afd_second/a_f_d_second.json#/definitions/image_ranks"
					},
					category_header_id: {
						$ref: "http://com.reddit/schemas/field_definitions/category_header/category_header.json#/definitions/id"
					},
					ad_push_direction: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_push.json#/definitions/direction"
					},
					c_s_a_i_media_destination_queue_name: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/c_s_a_i_media.json#/definitions/destination_queue_name"
					},
					onboarding_recommended_user_name: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/recommended_user_name"
					},
					bot_detection_recaptcha_score: {
						$ref: "http://com.reddit/schemas/field_definitions/bot_detection/bot_detection.json#/definitions/recaptcha_score"
					},
					notification_request_status: {
						$ref: "http://com.reddit/schemas/field_definitions/notification/notification_request.json#/definitions/status"
					},
					media_caption: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/caption"
					},
					post_spoiler: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/spoiler"
					},
					post_url: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/url"
					},
					notification_request_recipient_device_id: {
						$ref: "http://com.reddit/schemas/field_definitions/notification/notification_request.json#/definitions/recipient_device_id"
					},
					request_google_aaid: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/google_aaid"
					},
					setting_values: {
						$ref: "http://com.reddit/schemas/field_definitions/setting/setting.json#/definitions/values"
					},
					user_masked_email: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/masked_email"
					},
					powerups_cnt_emoji: {
						$ref: "http://com.reddit/schemas/field_definitions/powerups/powerups.json#/definitions/cnt_emoji"
					},
					request_canonical_url: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/canonical_url"
					},
					onboarding_subreddit_position: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/subreddit_position"
					},
					request_ratelimit_count: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/ratelimit_count"
					},
					upload_file_size: {
						$ref: "http://com.reddit/schemas/field_definitions/upload/upload.json#/definitions/file_size"
					},
					chat_type: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/type"
					},
					api_name: {
						$ref: "http://com.reddit/schemas/field_definitions/request/api.json#/definitions/name"
					},
					feature_version: {
						$ref: "http://com.reddit/schemas/field_definitions/feature/feature.json#/definitions/version"
					},
					experiment_variant_percentages: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/experiment.json#/definitions/variant_percentages"
					},
					perspective_flirtation: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/flirtation"
					},
					legal_export_request_status: {
						$ref: "http://com.reddit/schemas/field_definitions/legal_export_request/legal_export_request.json#/definitions/status"
					},
					snoovatar_gear_status: {
						$ref: "http://com.reddit/schemas/field_definitions/snoovatar/snoovatar.json#/definitions/gear_status"
					},
					restrict_unverified_email_viewers: {
						$ref: "http://com.reddit/schemas/field_definitions/restrict/restrict.json#/definitions/unverified_email_viewers"
					},
					media_type: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/type"
					},
					poll_number_prediction_tokens: {
						$ref: "http://com.reddit/schemas/field_definitions/poll/poll.json#/definitions/number_prediction_tokens"
					},
					funding_instrument_start_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/start_timestamp"
					},
					reddar_ticket_ticket_review_time: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket.json#/definitions/ticket_review_time"
					},
					experiment_bucketing_type: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/experiment.json#/definitions/bucketing_type"
					},
					experiment_end_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/experiment.json#/definitions/end_timestamp"
					},
					playback_player_type: {
						$ref: "http://com.reddit/schemas/field_definitions/playback/playback.json#/definitions/player_type"
					},
					chat_user_added_method: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/user_added_method"
					},
					ad_decision_hide_mod: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_decision.json#/definitions/hide_mod"
					},
					user_is_admin: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/is_admin"
					},
					share_target: {
						$ref: "http://com.reddit/schemas/field_definitions/action/share.json#/definitions/target"
					},
					post_draft_id: {
						$ref: "http://com.reddit/schemas/field_definitions/post_draft/post_draft.json#/definitions/id"
					},
					bot_detection_provider: {
						$ref: "http://com.reddit/schemas/field_definitions/bot_detection/bot_detection.json#/definitions/provider"
					},
					profile_nsfw: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/profile.json#/definitions/nsfw"
					},
					inbox_is_viewed: {
						$ref: "http://com.reddit/schemas/field_definitions/inbox/inbox.json#/definitions/is_viewed"
					},
					action_info_pane_name: {
						$ref: "http://com.reddit/schemas/field_definitions/action/action_info.json#/definitions/pane_name"
					},
					reddar_ticket_copyright_owner: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket.json#/definitions/copyright_owner"
					},
					url_parsed_shared_hash: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/url_parsed.json#/definitions/shared_hash"
					},
					onboarding_valid_email_submitted: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/valid_email_submitted"
					},
					reddar_audit_ticket_qa_message: {
						$ref: "http://com.reddit/schemas/field_definitions/audit/reddar_audit_ticket.json#/definitions/qa_message"
					},
					listing_source: {
						$ref: "http://com.reddit/schemas/field_definitions/content/listing.json#/definitions/source"
					},
					api_response_response_code: {
						$ref: "http://com.reddit/schemas/field_definitions/request/api_response.json#/definitions/response_code"
					},
					ad_decision_hide_sort: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_decision.json#/definitions/hide_sort"
					},
					user_preferences_service_language: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user_preferences.json#/definitions/service_language"
					},
					legal_export_request_id: {
						$ref: "http://com.reddit/schemas/field_definitions/legal_export_request/legal_export_request.json#/definitions/id"
					},
					announcement_title: {
						$ref: "http://com.reddit/schemas/field_definitions/announcement/announcement.json#/definitions/title"
					},
					comment_content_type: {
						$ref: "http://com.reddit/schemas/field_definitions/content/comment.json#/definitions/content_type"
					},
					funding_instrument_adzerk_lifetime_micros: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/adzerk_lifetime_micros"
					},
					powerups_tier: {
						$ref: "http://com.reddit/schemas/field_definitions/powerups/powerups.json#/definitions/tier"
					},
					ad_decision_hide_experiment: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_decision.json#/definitions/hide_experiment"
					},
					media_cdn_region: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/cdn_region"
					},
					media_height: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/height"
					},
					message_filtered_by_recipient: {
						$ref: "http://com.reddit/schemas/field_definitions/content/message.json#/definitions/filtered_by_recipient"
					},
					legal_export_request_ads_data_status: {
						$ref: "http://com.reddit/schemas/field_definitions/legal_export_request/legal_export_request.json#/definitions/ads_data_status"
					},
					ad_brand_safety_tier_reason_rall: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_brand_safety.json#/definitions/tier_reason_rall"
					},
					comment_composer_editor_mode: {
						$ref: "http://com.reddit/schemas/field_definitions/content/comment_composer.json#/definitions/editor_mode"
					},
					funding_instrument_authorize_payment_profile_id: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/authorize_payment_profile_id"
					},
					onboarding_passed_captcha: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/passed_captcha"
					},
					a_f_d_second_image_names: {
						$ref: "http://com.reddit/schemas/field_definitions/afd_second/a_f_d_second.json#/definitions/image_names"
					},
					message_sender_type: {
						$ref: "http://com.reddit/schemas/field_definitions/content/message.json#/definitions/sender_type"
					},
					relevance_model_result_duration: {
						$ref: "http://com.reddit/schemas/field_definitions/relevance/relevance_model.json#/definitions/result_duration"
					},
					post_requirement_title_blacklisted_strings: {
						$ref: "http://com.reddit/schemas/field_definitions/post_requirement/post_requirement.json#/definitions/title_blacklisted_strings"
					},
					listing_cursor: {
						$ref: "http://com.reddit/schemas/field_definitions/content/listing.json#/definitions/cursor"
					},
					request_domain: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/domain"
					},
					reddar_ticket_content_post_nsfw: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket_content.json#/definitions/post_nsfw"
					},
					crowd_source_old_geo_city: {
						$ref: "http://com.reddit/schemas/field_definitions/crowd_source/crowd_source.json#/definitions/old_geo_city"
					},
					screen_app_font_size_delta: {
						$ref: "http://com.reddit/schemas/field_definitions/device/screen.json#/definitions/app_font_size_delta"
					},
					onboarding_start_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/start_timestamp"
					},
					news_subtopic_name: {
						$ref: "http://com.reddit/schemas/field_definitions/content/news.json#/definitions/subtopic_name"
					},
					snoovatar_user_generated: {
						$ref: "http://com.reddit/schemas/field_definitions/snoovatar/snoovatar.json#/definitions/user_generated"
					},
					live_audio_room_creator_id: {
						$ref: "http://com.reddit/schemas/field_definitions/liveaudio/live_audio_room.json#/definitions/creator_id"
					},
					payment_amount_in_smallest_denom: {
						$ref: "http://com.reddit/schemas/field_definitions/payment/payment.json#/definitions/amount_in_smallest_denom"
					},
					setting_value: {
						$ref: "http://com.reddit/schemas/field_definitions/setting/setting.json#/definitions/value"
					},
					bulk_messenger_message_body: {
						$ref: "http://com.reddit/schemas/field_definitions/bulk_messenger/bulk_messenger.json#/definitions/message_body"
					},
					onboarding_end_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/end_timestamp"
					},
					message_modmail_conversation_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/message.json#/definitions/modmail_conversation_id"
					},
					two_factor_auth_device_previous_remaining_backup_codes: {
						$ref: "http://com.reddit/schemas/field_definitions/security/two_factor_auth.json#/definitions/device_previous_remaining_backup_codes"
					},
					post_draft_number_rte_images: {
						$ref: "http://com.reddit/schemas/field_definitions/post_draft/post_draft.json#/definitions/number_rte_images"
					},
					media_outbound_domain: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/outbound_domain"
					},
					comment_upvote_ratio: {
						$ref: "http://com.reddit/schemas/field_definitions/content/comment.json#/definitions/upvote_ratio"
					},
					zendesk_ticket_id: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/zendesk_ticket.json#/definitions/id"
					},
					legal_export_request_ended_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/legal_export_request/legal_export_request.json#/definitions/ended_timestamp"
					},
					user_preferences_language: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user_preferences.json#/definitions/language"
					},
					snoovatar_gear_face_acc: {
						$ref: "http://com.reddit/schemas/field_definitions/snoovatar/snoovatar.json#/definitions/gear_face_acc"
					},
					reddar_ticket_content_status: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket_content.json#/definitions/status"
					},
					perspective_spam: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/spam"
					},
					playback_chat_state: {
						$ref: "http://com.reddit/schemas/field_definitions/playback/playback.json#/definitions/chat_state"
					},
					scheduled_post_id: {
						$ref: "http://com.reddit/schemas/field_definitions/scheduled_post/scheduled_post.json#/definitions/id"
					},
					media_upload_duration: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/upload_duration"
					},
					media_pinned: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/pinned"
					},
					user_flair_locked: {
						$ref: "http://com.reddit/schemas/field_definitions/userflair/user_flair.json#/definitions/locked"
					},
					click_test_owner: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/click_test.json#/definitions/owner"
					},
					n_c_m_e_c_report_account_added_note: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/n_c_m_e_c_report.json#/definitions/account_added_note"
					},
					user_neutered: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/neutered"
					},
					message_created_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/content/message.json#/definitions/created_timestamp"
					},
					post_draft_title_length: {
						$ref: "http://com.reddit/schemas/field_definitions/post_draft/post_draft.json#/definitions/title_length"
					},
					admin_action_number_password_dump_credentials: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/admin_action.json#/definitions/number_password_dump_credentials"
					},
					post_composer_post_scheduled: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post_composer.json#/definitions/post_scheduled"
					},
					chat_members: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/members"
					},
					experiment_is_override: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/experiment.json#/definitions/is_override"
					},
					user_flair_title_achieve: {
						$ref: "http://com.reddit/schemas/field_definitions/userflair/user_flair.json#/definitions/title_achieve"
					},
					user_name: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/name"
					},
					post_author_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/author_id"
					},
					post_number_comments: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/number_comments"
					},
					user_subreddit_mod_mail: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user_subreddit.json#/definitions/mod_mail"
					},
					profile_avatar_url: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/profile.json#/definitions/avatar_url"
					},
					url_parsed_utm_source: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/url_parsed.json#/definitions/utm_source"
					},
					reddar_audit_ticket_qa_policy: {
						$ref: "http://com.reddit/schemas/field_definitions/audit/reddar_audit_ticket.json#/definitions/qa_policy"
					},
					user_subreddit_is_subscriber: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user_subreddit.json#/definitions/is_subscriber"
					},
					notification_request_source_queue_name: {
						$ref: "http://com.reddit/schemas/field_definitions/notification/notification_request.json#/definitions/source_queue_name"
					},
					user_is_employee: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/is_employee"
					},
					search_number_comments: {
						$ref: "http://com.reddit/schemas/field_definitions/search/search.json#/definitions/number_comments"
					},
					notification_body: {
						$ref: "http://com.reddit/schemas/field_definitions/content/notification.json#/definitions/body"
					},
					email_subject_line: {
						$ref: "http://com.reddit/schemas/field_definitions/email/email.json#/definitions/subject_line"
					},
					perspective_attack_on_author: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/attack_on_author"
					},
					mailroom_request_dropped_by: {
						$ref: "http://com.reddit/schemas/field_definitions/notification/mailroom_request.json#/definitions/dropped_by"
					},
					url_parsed_utm_campaign: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/url_parsed.json#/definitions/utm_campaign"
					},
					reddar_audit_included_queues: {
						$ref: "http://com.reddit/schemas/field_definitions/audit/reddar_audit.json#/definitions/included_queues"
					},
					subreddit_post_difficulty_rating: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/subreddit.json#/definitions/post_difficulty_rating"
					},
					chat_number_channels: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/number_channels"
					},
					powerups_current_subreddit_powerups: {
						$ref: "http://com.reddit/schemas/field_definitions/powerups/powerups.json#/definitions/current_subreddit_powerups"
					},
					survey_score: {
						$ref: "http://com.reddit/schemas/field_definitions/survey/survey.json#/definitions/score"
					},
					ad_request_post_links_above: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_request.json#/definitions/post_links_above"
					},
					m_l_model_version: {
						$ref: "http://com.reddit/schemas/field_definitions/ml_model/m_l_model.json#/definitions/version"
					},
					reddar_audit_percent_tickets_included: {
						$ref: "http://com.reddit/schemas/field_definitions/audit/reddar_audit.json#/definitions/percent_tickets_included"
					},
					action: {
						$ref: "http://com.reddit/schemas/components/common.json#/definitions/action"
					},
					action_info_referral_id: {
						$ref: "http://com.reddit/schemas/field_definitions/action/action_info.json#/definitions/referral_id"
					},
					reddar_ticket_report_source: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket.json#/definitions/report_source"
					},
					legal_export_request_automation_type: {
						$ref: "http://com.reddit/schemas/field_definitions/legal_export_request/legal_export_request.json#/definitions/automation_type"
					},
					media_stream_ended_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/stream_ended_timestamp"
					},
					platform_primary_language: {
						$ref: "http://com.reddit/schemas/field_definitions/device/platform.json#/definitions/primary_language"
					},
					bulk_messenger_subject: {
						$ref: "http://com.reddit/schemas/field_definitions/bulk_messenger/bulk_messenger.json#/definitions/subject"
					},
					action_info_reason: {
						$ref: "http://com.reddit/schemas/field_definitions/action/action_info.json#/definitions/reason"
					},
					mailroom_request_message_variant: {
						$ref: "http://com.reddit/schemas/field_definitions/notification/mailroom_request.json#/definitions/message_variant"
					},
					notification_process_notes: {
						$ref: "http://com.reddit/schemas/field_definitions/content/notification.json#/definitions/process_notes"
					},
					experiment_variant: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/experiment.json#/definitions/variant"
					},
					notification_request_failure_reason: {
						$ref: "http://com.reddit/schemas/field_definitions/notification/notification_request.json#/definitions/failure_reason"
					},
					r_e_s_version: {
						$ref: "http://com.reddit/schemas/field_definitions/res/r_e_s.json#/definitions/version"
					},
					ad_request_post_links_below: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_request.json#/definitions/post_links_below"
					},
					funding_instrument_max_billing_threshold_micros: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/max_billing_threshold_micros"
					},
					screenview_id: {
						$ref: "http://com.reddit/schemas/components/common.json#/definitions/screenview_id"
					},
					onboarding_is_similar_subreddit: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/is_similar_subreddit"
					},
					email_preview_text: {
						$ref: "http://com.reddit/schemas/field_definitions/email/email.json#/definitions/preview_text"
					},
					post_requirement_body_required_strings: {
						$ref: "http://com.reddit/schemas/field_definitions/post_requirement/post_requirement.json#/definitions/body_required_strings"
					},
					perspective_collapse_reasons: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/collapse_reasons"
					},
					gold_purchase_one_time_type: {
						$ref: "http://com.reddit/schemas/field_definitions/gold/gold_purchase.json#/definitions/one_time_type"
					},
					meta_search_meta_flair_id: {
						$ref: "http://com.reddit/schemas/field_definitions/metasearch/meta_search.json#/definitions/meta_flair_id"
					},
					request_user_agent: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/user_agent"
					},
					perspective_max_attack_on_commenter: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/max_attack_on_commenter"
					},
					post_requirement_title_text_max_length: {
						$ref: "http://com.reddit/schemas/field_definitions/post_requirement/post_requirement.json#/definitions/title_text_max_length"
					},
					gallery_num_images: {
						$ref: "http://com.reddit/schemas/field_definitions/content/gallery.json#/definitions/num_images"
					},
					spamurai_action_task_name: {
						$ref: "http://com.reddit/schemas/field_definitions/spamurai/spamurai_action.json#/definitions/task_name"
					},
					playback_scrubbing_end_ms: {
						$ref: "http://com.reddit/schemas/field_definitions/playback/playback.json#/definitions/scrubbing_end_ms"
					},
					meta_search_post_flair_name: {
						$ref: "http://com.reddit/schemas/field_definitions/metasearch/meta_search.json#/definitions/post_flair_name"
					},
					meta_search_meta_flair_name: {
						$ref: "http://com.reddit/schemas/field_definitions/metasearch/meta_search.json#/definitions/meta_flair_name"
					},
					custom_feed_is_nsfw: {
						$ref: "http://com.reddit/schemas/field_definitions/custom_feed/custom_feed.json#/definitions/is_nsfw"
					},
					admin_action_notes: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/admin_action.json#/definitions/notes"
					},
					funding_instrument_original_payment_id: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/original_payment_id"
					},
					gold_purchase_subscription_type: {
						$ref: "http://com.reddit/schemas/field_definitions/gold/gold_purchase.json#/definitions/subscription_type"
					},
					spamurai_action_is_mark_for_alt_tracking: {
						$ref: "http://com.reddit/schemas/field_definitions/spamurai/spamurai_action.json#/definitions/is_mark_for_alt_tracking"
					},
					bulk_action_job_id: {
						$ref: "http://com.reddit/schemas/field_definitions/bulk_action_job/bulk_action_job.json#/definitions/id"
					},
					admin_action_removal_job_id: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/admin_action.json#/definitions/removal_job_id"
					},
					snoovatar_gear_bottom_acc: {
						$ref: "http://com.reddit/schemas/field_definitions/snoovatar/snoovatar.json#/definitions/gear_bottom_acc"
					},
					chat_invitation_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/invitation_timestamp"
					},
					custom_feed_number_subreddits: {
						$ref: "http://com.reddit/schemas/field_definitions/custom_feed/custom_feed.json#/definitions/number_subreddits"
					},
					chat_message_type: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/message_type"
					},
					search_sort: {
						$ref: "http://com.reddit/schemas/field_definitions/search/search.json#/definitions/sort"
					},
					legal_export_request_received_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/legal_export_request/legal_export_request.json#/definitions/received_timestamp"
					},
					chat_image_upload_method: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/image_upload_method"
					},
					legal_export_request_due_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/legal_export_request/legal_export_request.json#/definitions/due_timestamp"
					},
					ad_decision_hide_whitelist: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_decision.json#/definitions/hide_whitelist"
					},
					action_info_type: {
						$ref: "http://com.reddit/schemas/field_definitions/action/action_info.json#/definitions/type"
					},
					feed_correlation_id: {
						$ref: "http://com.reddit/schemas/field_definitions/feed/feed.json#/definitions/correlation_id"
					},
					news_topic_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/news.json#/definitions/topic_id"
					},
					c_s_a_i_media_media_url: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/c_s_a_i_media.json#/definitions/media_url"
					},
					messenger_request_dropped_reason: {
						$ref: "http://com.reddit/schemas/field_definitions/notification/messenger_request.json#/definitions/dropped_reason"
					},
					chat_request_name: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/request_name"
					},
					popup_id: {
						$ref: "http://com.reddit/schemas/field_definitions/popup/popup.json#/definitions/id"
					},
					bulk_action_job_target_count: {
						$ref: "http://com.reddit/schemas/field_definitions/bulk_action_job/bulk_action_job.json#/definitions/target_count"
					},
					listing_max_rank: {
						$ref: "http://com.reddit/schemas/field_definitions/content/listing.json#/definitions/max_rank"
					},
					request_client_ip: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/client_ip"
					},
					n_c_m_e_c_report_email_verified: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/n_c_m_e_c_report.json#/definitions/email_verified"
					},
					email_type: {
						$ref: "http://com.reddit/schemas/field_definitions/email/email.json#/definitions/type"
					},
					platform_fingerprint: {
						$ref: "http://com.reddit/schemas/field_definitions/device/platform.json#/definitions/fingerprint"
					},
					perspective_toxicity: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/toxicity"
					},
					a_t_c_notification_group: {
						$ref: "http://com.reddit/schemas/field_definitions/atc/a_t_c.json#/definitions/notification_group"
					},
					scheduled_post_last_modified_user_id: {
						$ref: "http://com.reddit/schemas/field_definitions/scheduled_post/scheduled_post.json#/definitions/last_modified_user_id"
					},
					post_collection_post_ids: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post_collection.json#/definitions/post_ids"
					},
					webhook_id: {
						$ref: "http://com.reddit/schemas/field_definitions/webhook/webhook.json#/definitions/id"
					},
					chat_number_pending_invites: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/number_pending_invites"
					},
					session_type: {
						$ref: "http://com.reddit/schemas/field_definitions/session/session.json#/definitions/type"
					},
					user_previous_id: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/previous_id"
					},
					category_header_name: {
						$ref: "http://com.reddit/schemas/field_definitions/category_header/category_header.json#/definitions/name"
					},
					search_typeahead_active: {
						$ref: "http://com.reddit/schemas/field_definitions/search/search.json#/definitions/typeahead_active"
					},
					onboarding_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/id"
					},
					post_recommendation_source_subreddit_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/recommendation_source_subreddit_id"
					},
					ticket_queue_id: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/ticket.json#/definitions/queue_id"
					},
					perspective_threat: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/threat"
					},
					poll_vote_affects_score: {
						$ref: "http://com.reddit/schemas/field_definitions/poll/poll.json#/definitions/vote_affects_score"
					},
					platform_year_class: {
						$ref: "http://com.reddit/schemas/field_definitions/device/platform.json#/definitions/year_class"
					},
					meta_search_sort: {
						$ref: "http://com.reddit/schemas/field_definitions/metasearch/meta_search.json#/definitions/sort"
					},
					poll_options_length: {
						$ref: "http://com.reddit/schemas/field_definitions/poll/poll.json#/definitions/options_length"
					},
					post_draft_flair: {
						$ref: "http://com.reddit/schemas/field_definitions/post_draft/post_draft.json#/definitions/flair"
					},
					notification_request_recipient_app_name: {
						$ref: "http://com.reddit/schemas/field_definitions/notification/notification_request.json#/definitions/recipient_app_name"
					},
					feed_id: {
						$ref: "http://com.reddit/schemas/field_definitions/feed/feed.json#/definitions/id"
					},
					click_test_page_type: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/click_test.json#/definitions/page_type"
					}
				},
				additionalProperties: !1,
				required: ["source", "action", "noun", "client_timestamp", "uuid"],
				$schema: "http://json-schema.org/draft-07/schema#"
			}]
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, i, s, n) {
				return n(e, (function(e, n, o) {
					i = s ? (s = !1, e) : t(i, e, n, o)
				})), i
			}
		},
		"./node_modules/lodash/each.js": function(e, t, i) {
			e.exports = i("./node_modules/lodash/forEach.js")
		},
		"./node_modules/lodash/reduce.js": function(e, t, i) {
			var s = i("./node_modules/lodash/_arrayReduce.js"),
				n = i("./node_modules/lodash/_baseEach.js"),
				o = i("./node_modules/lodash/_baseIteratee.js"),
				r = i("./node_modules/lodash/_baseReduce.js"),
				a = i("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, i) {
				var d = a(e) ? s : r,
					c = arguments.length < 3;
				return d(e, o(t, 4), i, c, n)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~AdminPanel.e6e59f93c311ab1cce5c.js.map