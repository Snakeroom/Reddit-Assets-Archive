// https://www.redditstatic.com/desktop2x/vendors~AdminPanel.4236fd8123d0d8860547.js
// Retrieved at 2/28/2021, 9:18:37 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~AdminPanel"], {
		"./node_modules/@reddit/event-helpers-typescript/dist/esm/index.js": function(e, t, i) {
			"use strict";
			(function(e) {
				i.d(t, "a", (function() {
					return $t
				})), i.d(t, "b", (function() {
					return jt
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
				var r, o = s((function(e, t) {
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

						function r(e) {
							var s = t("[0-9]", "[A-Fa-f]"),
								n = i(i("%[EFef]" + s + "%" + s + s + "%" + s + s) + "|" + i("%[89A-Fa-f]" + s + "%" + s + s) + "|" + i("%" + s + s)),
								r = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
								o = t("[\\:\\/\\?\\#\\[\\]\\@]", r),
								a = e ? "[\\uE000-\\uF8FF]" : "[]",
								d = t("[A-Za-z]", "[0-9]", "[\\-\\.\\_\\~]", e ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]"),
								c = (i("[A-Za-z]" + t("[A-Za-z]", "[0-9]", "[\\+\\-\\.]") + "*"), i(i(n + "|" + t(d, r, "[\\:]")) + "*"), i(i("25[0-5]") + "|" + i("2[0-4][0-9]") + "|" + i("1[0-9][0-9]") + "|" + i("0?[1-9][0-9]") + "|0?0?[0-9]")),
								m = i(c + "\\." + c + "\\." + c + "\\." + c),
								p = i(s + "{1,4}"),
								_ = i(i(p + "\\:" + p) + "|" + m),
								h = i(i(p + "\\:") + "{6}" + _),
								l = i("\\:\\:" + i(p + "\\:") + "{5}" + _),
								f = i(i(p) + "?\\:\\:" + i(p + "\\:") + "{4}" + _),
								u = i(i(i(p + "\\:") + "{0,1}" + p) + "?\\:\\:" + i(p + "\\:") + "{3}" + _),
								g = i(i(i(p + "\\:") + "{0,2}" + p) + "?\\:\\:" + i(p + "\\:") + "{2}" + _),
								y = i(i(i(p + "\\:") + "{0,3}" + p) + "?\\:\\:" + p + "\\:" + _),
								v = i(i(i(p + "\\:") + "{0,4}" + p) + "?\\:\\:" + _),
								b = i(i(i(p + "\\:") + "{0,5}" + p) + "?\\:\\:" + p),
								w = i(i(i(p + "\\:") + "{0,6}" + p) + "?\\:\\:"),
								$ = i([h, l, f, u, g, y, v, b, w].join("|")),
								j = i(i(d + "|" + n) + "+"),
								k = (i("[vV]" + s + "+\\." + t(d, r, "[\\:]") + "+"), i(i(n + "|" + t(d, r)) + "*"), i(n + "|" + t(d, r, "[\\:\\@]")));
							return i(i(n + "|" + t(d, r, "[\\@]")) + "+"), i(i(k + "|" + t("[\\/\\?]", a)) + "*"), {
								NOT_SCHEME: new RegExp(t("[^]", "[A-Za-z]", "[0-9]", "[\\+\\-\\.]"), "g"),
								NOT_USERINFO: new RegExp(t("[^\\%\\:]", d, r), "g"),
								NOT_HOST: new RegExp(t("[^\\%\\[\\]\\:]", d, r), "g"),
								NOT_PATH: new RegExp(t("[^\\%\\/\\:\\@]", d, r), "g"),
								NOT_PATH_NOSCHEME: new RegExp(t("[^\\%\\/\\@]", d, r), "g"),
								NOT_QUERY: new RegExp(t("[^\\%]", d, r, "[\\:\\@\\/\\?]", a), "g"),
								NOT_FRAGMENT: new RegExp(t("[^\\%]", d, r, "[\\:\\@\\/\\?]"), "g"),
								ESCAPE: new RegExp(t("[^]", d, r), "g"),
								UNRESERVED: new RegExp(d, "g"),
								OTHER_CHARS: new RegExp(t("[^\\%]", d, o), "g"),
								PCT_ENCODED: new RegExp(n, "g"),
								IPV4ADDRESS: new RegExp("^(" + m + ")$"),
								IPV6ADDRESS: new RegExp("^\\[?(" + $ + ")" + i(i("\\%25|\\%(?!" + s + "{2})") + "(" + j + ")") + "?\\]?$")
							}
						}
						var o = r(!1),
							a = r(!0),
							d = function(e, t) {
								if (Array.isArray(e)) return e;
								if (Symbol.iterator in Object(e)) return function(e, t) {
									var i = [],
										s = !0,
										n = !1,
										r = void 0;
									try {
										for (var o, a = e[Symbol.iterator](); !(s = (o = a.next()).done) && (i.push(o.value), !t || i.length !== t); s = !0);
									} catch (d) {
										n = !0, r = d
									} finally {
										try {
											!s && a.return && a.return()
										} finally {
											if (n) throw r
										}
									}
									return i
								}(e, t);
								throw new TypeError("Invalid attempt to destructure non-iterable instance")
							},
							c = 2147483647,
							m = /^xn--/,
							p = /[^\0-\x7E]/,
							_ = /[\x2E\u3002\uFF0E\uFF61]/g,
							h = {
								overflow: "Overflow: input needs wider integers to process",
								"not-basic": "Illegal input >= 0x80 (not a basic code point)",
								"invalid-input": "Invalid input"
							},
							l = Math.floor,
							f = String.fromCharCode;

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
									var r = e.charCodeAt(i++);
									56320 == (64512 & r) ? t.push(((1023 & n) << 10) + (1023 & r) + 65536) : (t.push(n), i--)
								} else t.push(n)
							}
							return t
						}
						var v = function(e, t) {
								return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
							},
							b = function(e, t, i) {
								var s = 0;
								for (e = i ? l(e / 700) : e >> 1, e += l(e / t); e > 455; s += 36) e = l(e / 35);
								return l(s + 36 * e / (e + 38))
							},
							w = function(e) {
								var t, i = [],
									s = e.length,
									n = 0,
									r = 128,
									o = 72,
									a = e.lastIndexOf("-");
								a < 0 && (a = 0);
								for (var d = 0; d < a; ++d) e.charCodeAt(d) >= 128 && u("not-basic"), i.push(e.charCodeAt(d));
								for (var m = a > 0 ? a + 1 : 0; m < s;) {
									for (var p = n, _ = 1, h = 36;; h += 36) {
										m >= s && u("invalid-input");
										var f = (t = e.charCodeAt(m++)) - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : 36;
										(f >= 36 || f > l((c - n) / _)) && u("overflow"), n += f * _;
										var g = h <= o ? 1 : h >= o + 26 ? 26 : h - o;
										if (f < g) break;
										var y = 36 - g;
										_ > l(c / y) && u("overflow"), _ *= y
									}
									var v = i.length + 1;
									o = b(n - p, v, 0 == p), l(n / v) > c - r && u("overflow"), r += l(n / v), n %= v, i.splice(n++, 0, r)
								}
								return String.fromCodePoint.apply(String, i)
							},
							$ = function(e) {
								var t = [],
									i = (e = y(e)).length,
									s = 128,
									n = 0,
									r = 72,
									o = !0,
									a = !1,
									d = void 0;
								try {
									for (var m, p = e[Symbol.iterator](); !(o = (m = p.next()).done); o = !0) {
										var _ = m.value;
										_ < 128 && t.push(f(_))
									}
								} catch (L) {
									a = !0, d = L
								} finally {
									try {
										!o && p.return && p.return()
									} finally {
										if (a) throw d
									}
								}
								var h = t.length,
									g = h;
								for (h && t.push("-"); g < i;) {
									var w = c,
										$ = !0,
										j = !1,
										k = void 0;
									try {
										for (var x, P = e[Symbol.iterator](); !($ = (x = P.next()).done); $ = !0) {
											var q = x.value;
											q >= s && q < w && (w = q)
										}
									} catch (L) {
										j = !0, k = L
									} finally {
										try {
											!$ && P.return && P.return()
										} finally {
											if (j) throw k
										}
									}
									var E = g + 1;
									w - s > l((c - n) / E) && u("overflow"), n += (w - s) * E, s = w;
									var T = !0,
										S = !1,
										A = void 0;
									try {
										for (var D, R = e[Symbol.iterator](); !(T = (D = R.next()).done); T = !0) {
											var I = D.value;
											if (I < s && ++n > c && u("overflow"), I == s) {
												for (var F = n, O = 36;; O += 36) {
													var z = O <= r ? 1 : O >= r + 26 ? 26 : O - r;
													if (F < z) break;
													var C = F - z,
														U = 36 - z;
													t.push(f(v(z + C % U, 0))), F = l(C / U)
												}
												t.push(f(v(F, 0))), r = b(n, E, g == h), n = 0, ++g
											}
										}
									} catch (L) {
										S = !0, A = L
									} finally {
										try {
											!T && R.return && R.return()
										} finally {
											if (S) throw A
										}
									}++n, ++s
								}
								return t.join("")
							},
							j = {
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
								encode: $,
								toASCII: function(e) {
									return g(e, (function(e) {
										return p.test(e) ? "xn--" + $(e) : e
									}))
								},
								toUnicode: function(e) {
									return g(e, (function(e) {
										return m.test(e) ? w(e.slice(4).toLowerCase()) : e
									}))
								}
							},
							k = {};

						function x(e) {
							var t = e.charCodeAt(0);
							return t < 16 ? "%0" + t.toString(16).toUpperCase() : t < 128 ? "%" + t.toString(16).toUpperCase() : t < 2048 ? "%" + (t >> 6 | 192).toString(16).toUpperCase() + "%" + (63 & t | 128).toString(16).toUpperCase() : "%" + (t >> 12 | 224).toString(16).toUpperCase() + "%" + (t >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (63 & t | 128).toString(16).toUpperCase()
						}

						function P(e) {
							for (var t = "", i = 0, s = e.length; i < s;) {
								var n = parseInt(e.substr(i + 1, 2), 16);
								if (n < 128) t += String.fromCharCode(n), i += 3;
								else if (n >= 194 && n < 224) {
									if (s - i >= 6) {
										var r = parseInt(e.substr(i + 4, 2), 16);
										t += String.fromCharCode((31 & n) << 6 | 63 & r)
									} else t += e.substr(i, 6);
									i += 6
								} else if (n >= 224) {
									if (s - i >= 9) {
										var o = parseInt(e.substr(i + 4, 2), 16),
											a = parseInt(e.substr(i + 7, 2), 16);
										t += String.fromCharCode((15 & n) << 12 | (63 & o) << 6 | 63 & a)
									} else t += e.substr(i, 9);
									i += 9
								} else t += e.substr(i, 3), i += 3
							}
							return t
						}

						function q(e, t) {
							function i(e) {
								var i = P(e);
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
								r = s[2];
							if (n) {
								for (var o = n.toLowerCase().split("::").reverse(), a = d(o, 2), c = a[0], m = a[1], p = m ? m.split(":").map(E) : [], _ = c.split(":").map(E), h = t.IPV4ADDRESS.test(_[_.length - 1]), l = h ? 7 : 8, f = _.length - l, u = Array(l), g = 0; g < l; ++g) u[g] = p[g] || _[f + g] || "";
								h && (u[l - 1] = T(u[l - 1], t));
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
								return r && (v += "%" + r), v
							}
							return e
						}
						var A = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,
							D = void 0 === "".match(/(){0}/)[1];

						function R(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								i = {},
								s = !1 !== t.iri ? a : o;
							"suffix" === t.reference && (e = (t.scheme ? t.scheme + ":" : "") + "//" + e);
							var n = e.match(A);
							if (n) {
								D ? (i.scheme = n[1], i.userinfo = n[3], i.host = n[4], i.port = parseInt(n[5], 10), i.path = n[6] || "", i.query = n[7], i.fragment = n[8], isNaN(i.port) && (i.port = n[5])) : (i.scheme = n[1] || void 0, i.userinfo = -1 !== e.indexOf("@") ? n[3] : void 0, i.host = -1 !== e.indexOf("//") ? n[4] : void 0, i.port = parseInt(n[5], 10), i.path = n[6] || "", i.query = -1 !== e.indexOf("?") ? n[7] : void 0, i.fragment = -1 !== e.indexOf("#") ? n[8] : void 0, isNaN(i.port) && (i.port = e.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? n[4] : void 0)), i.host && (i.host = S(T(i.host, s), s)), void 0 !== i.scheme || void 0 !== i.userinfo || void 0 !== i.host || void 0 !== i.port || i.path || void 0 !== i.query ? void 0 === i.scheme ? i.reference = "relative" : void 0 === i.fragment ? i.reference = "absolute" : i.reference = "uri" : i.reference = "same-document", t.reference && "suffix" !== t.reference && t.reference !== i.reference && (i.error = i.error || "URI is not a " + t.reference + " reference.");
								var r = k[(t.scheme || i.scheme || "").toLowerCase()];
								if (t.unicodeSupport || r && r.unicodeSupport) q(i, s);
								else {
									if (i.host && (t.domainHost || r && r.domainHost)) try {
										i.host = j.toASCII(i.host.replace(s.PCT_ENCODED, P).toLowerCase())
									} catch (d) {
										i.error = i.error || "Host's domain name can not be converted to ASCII via punycode: " + d
									}
									q(i, o)
								}
								r && r.parse && r.parse(i, t)
							} else i.error = i.error || "URI can not be parsed.";
							return i
						}
						var I = /^\.\.?\//,
							F = /^\/\.(\/|$)/,
							O = /^\/\.\.(\/|$)/,
							z = /^\/?(?:.|\n)*?(?=\/|$)/;

						function C(e) {
							for (var t = []; e.length;)
								if (e.match(I)) e = e.replace(I, "");
								else if (e.match(F)) e = e.replace(F, "/");
							else if (e.match(O)) e = e.replace(O, "/"), t.pop();
							else if ("." === e || ".." === e) e = "";
							else {
								var i = e.match(z);
								if (!i) throw new Error("Unexpected dot segment condition");
								var s = i[0];
								e = e.slice(s.length), t.push(s)
							}
							return t.join("")
						}

						function U(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								i = t.iri ? a : o,
								s = [],
								n = k[(t.scheme || e.scheme || "").toLowerCase()];
							if (n && n.serialize && n.serialize(e, t), e.host)
								if (i.IPV6ADDRESS.test(e.host));
								else if (t.domainHost || n && n.domainHost) try {
								e.host = t.iri ? j.toUnicode(e.host) : j.toASCII(e.host.replace(i.PCT_ENCODED, P).toLowerCase())
							} catch (c) {
								e.error = e.error || "Host's domain name can not be converted to " + (t.iri ? "Unicode" : "ASCII") + " via punycode: " + c
							}
							q(e, i), "suffix" !== t.reference && e.scheme && (s.push(e.scheme), s.push(":"));
							var r = function(e, t) {
								var i = !1 !== t.iri ? a : o,
									s = [];
								return void 0 !== e.userinfo && (s.push(e.userinfo), s.push("@")), void 0 !== e.host && s.push(S(T(String(e.host), i), i).replace(i.IPV6ADDRESS, (function(e, t, i) {
									return "[" + t + (i ? "%25" + i : "") + "]"
								}))), "number" == typeof e.port && (s.push(":"), s.push(e.port.toString(10))), s.length ? s.join("") : void 0
							}(e, t);
							if (void 0 !== r && ("suffix" !== t.reference && s.push("//"), s.push(r), e.path && "/" !== e.path.charAt(0) && s.push("/")), void 0 !== e.path) {
								var d = e.path;
								t.absolutePath || n && n.absolutePath || (d = C(d)), void 0 === r && (d = d.replace(/^\/\//, "/%2F")), s.push(d)
							}
							return void 0 !== e.query && (s.push("?"), s.push(e.query)), void 0 !== e.fragment && (s.push("#"), s.push(e.fragment)), s.join("")
						}

						function L(e, t) {
							var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
								s = {};
							return arguments[3] || (e = R(U(e, i), i), t = R(U(t, i), i)), !(i = i || {}).tolerant && t.scheme ? (s.scheme = t.scheme, s.userinfo = t.userinfo, s.host = t.host, s.port = t.port, s.path = C(t.path || ""), s.query = t.query) : (void 0 !== t.userinfo || void 0 !== t.host || void 0 !== t.port ? (s.userinfo = t.userinfo, s.host = t.host, s.port = t.port, s.path = C(t.path || ""), s.query = t.query) : (t.path ? ("/" === t.path.charAt(0) ? s.path = C(t.path) : (void 0 === e.userinfo && void 0 === e.host && void 0 === e.port || e.path ? e.path ? s.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path : s.path = t.path : s.path = "/" + t.path, s.path = C(s.path)), s.query = t.query) : (s.path = e.path, void 0 !== t.query ? s.query = t.query : s.query = e.query), s.userinfo = e.userinfo, s.host = e.host, s.port = e.port), s.scheme = e.scheme), s.fragment = t.fragment, s
						}

						function N(e, t) {
							return e && e.toString().replace(t && t.iri ? a.PCT_ENCODED : o.PCT_ENCODED, P)
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
							Z = t("[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", '[\\"\\\\]'),
							G = new RegExp(W, "g"),
							J = new RegExp(Q, "g"),
							Y = new RegExp(t("[^]", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", "[\\.]", '[\\"]', Z), "g"),
							K = new RegExp(t("[^]", W, "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]"), "g"),
							X = K;

						function ee(e) {
							var t = P(e);
							return t.match(G) ? t : e
						}
						var te = {
								scheme: "mailto",
								parse: function(e, t) {
									var i = e,
										s = i.to = i.path ? i.path.split(",") : [];
									if (i.path = void 0, i.query) {
										for (var n = !1, r = {}, o = i.query.split("&"), a = 0, d = o.length; a < d; ++a) {
											var c = o[a].split("=");
											switch (c[0]) {
												case "to":
													for (var m = c[1].split(","), p = 0, _ = m.length; p < _; ++p) s.push(m[p]);
													break;
												case "subject":
													i.subject = N(c[1], t);
													break;
												case "body":
													i.body = N(c[1], t);
													break;
												default:
													n = !0, r[N(c[0], t)] = N(c[1], t)
											}
										}
										n && (i.headers = r)
									}
									i.query = void 0;
									for (var h = 0, l = s.length; h < l; ++h) {
										var f = s[h].split("@");
										if (f[0] = N(f[0]), t.unicodeSupport) f[1] = N(f[1], t).toLowerCase();
										else try {
											f[1] = j.toASCII(N(f[1], t).toLowerCase())
										} catch (u) {
											i.error = i.error || "Email address's domain name can not be converted to ASCII via punycode: " + u
										}
										s[h] = f.join("@")
									}
									return i
								},
								serialize: function(e, t) {
									var i, s = e,
										r = null != (i = e.to) ? i instanceof Array ? i : "number" != typeof i.length || i.split || i.setInterval || i.call ? [i] : Array.prototype.slice.call(i) : [];
									if (r) {
										for (var o = 0, a = r.length; o < a; ++o) {
											var d = String(r[o]),
												c = d.lastIndexOf("@"),
												m = d.slice(0, c).replace(J, ee).replace(J, n).replace(Y, x),
												p = d.slice(c + 1);
											try {
												p = t.iri ? j.toUnicode(p) : j.toASCII(N(p, t).toLowerCase())
											} catch (f) {
												s.error = s.error || "Email address's domain name can not be converted to " + (t.iri ? "Unicode" : "ASCII") + " via punycode: " + f
											}
											r[o] = m + "@" + p
										}
										s.path = r.join(",")
									}
									var _ = e.headers = e.headers || {};
									e.subject && (_.subject = e.subject), e.body && (_.body = e.body);
									var h = [];
									for (var l in _) _[l] !== B[l] && h.push(l.replace(J, ee).replace(J, n).replace(K, x) + "=" + _[l].replace(J, ee).replace(J, n).replace(X, x));
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
											r = i[1].toLowerCase(),
											o = i[2],
											a = n + ":" + (t.nid || r),
											d = k[a];
										s.nid = r, s.nss = o, s.path = void 0, d && (s = d.parse(s, t))
									} else s.error = s.error || "URN can not be parsed.";
									return s
								},
								serialize: function(e, t) {
									var i = t.scheme || e.scheme || "urn",
										s = e.nid,
										n = i + ":" + (t.nid || s),
										r = k[n];
									r && (e = r.serialize(e, t));
									var o = e,
										a = e.nss;
									return o.path = (s || t.nid) + ":" + a, o
								}
							},
							ne = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/,
							re = {
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
						k[M.scheme] = M, k[H.scheme] = H, k[te.scheme] = te, k[se.scheme] = se, k[re.scheme] = re, e.SCHEMES = k, e.pctEncChar = x, e.pctDecChars = P, e.parse = R, e.removeDotSegments = C, e.serialize = U, e.resolveComponents = L, e.resolve = function(e, t, i) {
							var s = function(e, t) {
								var i = e;
								if (t)
									for (var s in t) i[s] = t[s];
								return i
							}({
								scheme: "null"
							}, i);
							return U(L(R(e, s), R(t, s), s, !0), s)
						}, e.normalize = function(e, t) {
							return "string" == typeof e ? e = U(R(e, t), t) : "object" === s(e) && (e = R(U(e, t), t)), e
						}, e.equal = function(e, t, i) {
							return "string" == typeof e ? e = U(R(e, i), i) : "object" === s(e) && (e = U(e, i)), "string" == typeof t ? t = U(R(t, i), i) : "object" === s(t) && (t = U(t, i)), e === t
						}, e.escapeComponent = function(e, t) {
							return e && e.toString().replace(t && t.iri ? a.ESCAPE : o.ESCAPE, x)
						}, e.unescapeComponent = N, Object.defineProperty(e, "__esModule", {
							value: !0
						})
					}(t)
				}));
				(r = o) && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") && r.default;
				var a = function e(t, i) {
						if (t === i) return !0;
						if (t && i && "object" == typeof t && "object" == typeof i) {
							if (t.constructor !== i.constructor) return !1;
							var s, n, r;
							if (Array.isArray(t)) {
								if ((s = t.length) != i.length) return !1;
								for (n = s; 0 != n--;)
									if (!e(t[n], i[n])) return !1;
								return !0
							}
							if (t.constructor === RegExp) return t.source === i.source && t.flags === i.flags;
							if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === i.valueOf();
							if (t.toString !== Object.prototype.toString) return t.toString() === i.toString();
							if ((s = (r = Object.keys(t)).length) !== Object.keys(i).length) return !1;
							for (n = s; 0 != n--;)
								if (!Object.prototype.hasOwnProperty.call(i, r[n])) return !1;
							for (n = s; 0 != n--;) {
								var o = r[n];
								if (!e(t[o], i[o])) return !1
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
										s = p(e);
									for (var n in s.array && s.object && (i = s.null ? "(" : "(!" + t + " || ", i += "typeof " + t + ' !== "object")', delete s.null, delete s.array, delete s.object), s.number && delete s.integer, s) i += (i ? " && " : "") + c(n, t, !0);
									return i
							}
						},
						coerceToTypes: function(e, t) {
							if (Array.isArray(t)) {
								for (var i = [], s = 0; s < t.length; s++) {
									var n = t[s];
									m[n] ? i[i.length] = n : "array" === e && "array" === n && (i[i.length] = n)
								}
								if (i.length) return i
							} else {
								if (m[t]) return [t];
								if ("array" === e && "array" === t) return ["array"]
							}
						},
						toHash: p,
						getProperty: l,
						escapeQuotes: f,
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
							i && 2 == i.length && (e = t ? e.replace(w, "").replace(k, x) : e.replace(b, "").replace($, j));
							return (i = e.match(P)) && 3 === i.length ? e.replace(q, "") : e
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
							var s = E(i ? "/" + D(t) : l(t));
							return A(e, s)
						},
						getData: function(e, t, i) {
							var s, n, r, o;
							if ("" === e) return "rootData";
							if ("/" == e[0]) {
								if (!T.test(e)) throw new Error("Invalid JSON-pointer: " + e);
								n = e, r = "rootData"
							} else {
								if (!(o = e.match(S))) throw new Error("Invalid JSON-pointer: " + e);
								if (s = +o[1], "#" == (n = o[2])) {
									if (s >= t) throw new Error("Cannot access property/index " + s + " levels up, current level is " + t);
									return i[t - s]
								}
								if (s > t) throw new Error("Cannot access data " + s + " levels up, current level is " + t);
								if (r = "data" + (t - s || ""), !n) return r
							}
							for (var a = r, d = n.split("/"), c = 0; c < d.length; c++) {
								var m = d[c];
								m && (r += l(R(m)), a += " && " + r)
							}
							return a
						},
						unescapeFragment: function(e) {
							return R(decodeURIComponent(e))
						},
						unescapeJsonPointer: R,
						escapeFragment: function(e) {
							return encodeURIComponent(D(e))
						},
						escapeJsonPointer: D
					};

				function c(e, t, i) {
					var s = i ? " !== " : " === ",
						n = i ? " || " : " && ",
						r = i ? "!" : "",
						o = i ? "" : "!";
					switch (e) {
						case "null":
							return t + s + "null";
						case "array":
							return r + "Array.isArray(" + t + ")";
						case "object":
							return "(" + r + t + n + "typeof " + t + s + '"object"' + n + o + "Array.isArray(" + t + "))";
						case "integer":
							return "(typeof " + t + s + '"number"' + n + o + "(" + t + " % 1)" + n + t + s + t + ")";
						default:
							return "typeof " + t + s + '"' + e + '"'
					}
				}
				var m = p(["string", "number", "integer", "boolean", "null"]);

				function p(e) {
					for (var t = {}, i = 0; i < e.length; i++) t[e[i]] = !0;
					return t
				}
				var _ = /^[a-z$_][a-z$_0-9]*$/i,
					h = /'|\\/g;

				function l(e) {
					return "number" == typeof e ? "[" + e + "]" : _.test(e) ? "." + e : "['" + f(e) + "']"
				}

				function f(e) {
					return e.replace(h, "\\$&").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\f/g, "\\f").replace(/\t/g, "\\t")
				}
				var u = /else\s*{\s*}/g,
					g = /if\s*\([^)]+\)\s*\{\s*\}(?!\s*else)/g,
					y = /if\s*\(([^)]+)\)\s*\{\s*\}\s*else(?!\s*if)/g;
				var v = /[^v.]errors/g,
					b = /var errors = 0;|var vErrors = null;|validate.errors = vErrors;/g,
					w = /var errors = 0;|var vErrors = null;/g,
					$ = "return errors === 0;",
					j = "validate.errors = null; return true;",
					k = /if \(errors === 0\) return data;\s*else throw new ValidationError\(vErrors\);/,
					x = "return data;",
					P = /[^A-Za-z_$]rootData[^A-Za-z0-9_$]/g,
					q = /if \(rootData === undefined\) rootData = data;/;

				function E(e) {
					return "'" + f(e) + "'"
				}
				var T = /^\/(?:[^~]|~0|~1)*$/,
					S = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;

				function A(e, t) {
					return '""' == e ? t : (e + " + " + t).replace(/' \+ '/g, "")
				}

				function D(e) {
					return e.replace(/~/g, "~0").replace(/\//g, "~1")
				}

				function R(e) {
					return e.replace(/~1/g, "/").replace(/~0/g, "~")
				}
				var I = function(e) {
					d.copy(e, this)
				};
				var F = s((function(e) {
						var t = e.exports = function(e, i, s) {
							"function" == typeof i && (s = i, i = {}),
								function e(i, s, n, r, o, a, d, c, m, p) {
									if (r && "object" == typeof r && !Array.isArray(r)) {
										for (var _ in s(r, o, a, d, c, m, p), r) {
											var h = r[_];
											if (Array.isArray(h)) {
												if (_ in t.arrayKeywords)
													for (var l = 0; l < h.length; l++) e(i, s, n, h[l], o + "/" + _ + "/" + l, a, o, _, r, l)
											} else if (_ in t.propsKeywords) {
												if (h && "object" == typeof h)
													for (var f in h) e(i, s, n, h[f], o + "/" + _ + "/" + f.replace(/~/g, "~0").replace(/\//g, "~1"), a, o, _, r, f)
											} else(_ in t.keywords || i.allKeys && !(_ in t.skipKeywords)) && e(i, s, n, h, o + "/" + _, a, o, _, r)
										}
										n(r, o, a, d, c, m, p)
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
					O = z;

				function z(e, t, i) {
					var s = this._refs[i];
					if ("string" == typeof s) {
						if (!this._refs[s]) return z.call(this, e, t, s);
						s = this._refs[s]
					}
					if ((s = s || this._schemas[i]) instanceof I) return H(s.schema, this._opts.inlineRefs) ? s.schema : s.validate || this._compile(s);
					var n, r, o, a = C.call(this, t, i);
					return a && (n = a.schema, t = a.root, o = a.baseId), n instanceof I ? r = n.validate || e.call(this, n.schema, t, void 0, o) : void 0 !== n && (r = H(n, this._opts.inlineRefs) ? n : e.call(this, n, t, void 0, o)), r
				}

				function C(e, t) {
					var i = o.parse(t),
						s = W(i),
						n = B(this._getId(e.schema));
					if (0 === Object.keys(e.schema).length || s !== n) {
						var r = Q(s),
							a = this._refs[r];
						if ("string" == typeof a) return U.call(this, e, a, i);
						if (a instanceof I) a.validate || this._compile(a), e = a;
						else {
							if (!((a = this._schemas[r]) instanceof I)) return;
							if (a.validate || this._compile(a), r == Q(t)) return {
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

				function U(e, t, i) {
					var s = C.call(this, e, t);
					if (s) {
						var n = s.schema,
							r = s.baseId;
						e = s.root;
						var o = this._getId(n);
						return o && (r = Z(r, o)), N.call(this, i, r, n, e)
					}
				}
				z.normalizeId = Q, z.fullPath = B, z.url = Z, z.ids = function(e) {
					var t = Q(this._getId(e)),
						i = {
							"": t
						},
						s = {
							"": B(t, !1)
						},
						n = {},
						r = this;
					return F(e, {
						allKeys: !0
					}, (function(e, t, c, m, p, _, h) {
						if ("" !== t) {
							var l = r._getId(e),
								f = i[m],
								u = s[m] + "/" + p;
							if (void 0 !== h && (u += "/" + ("number" == typeof h ? h : d.escapeFragment(h))), "string" == typeof l) {
								l = f = Q(f ? o.resolve(f, l) : l);
								var g = r._refs[l];
								if ("string" == typeof g && (g = r._refs[g]), g && g.schema) {
									if (!a(e, g.schema)) throw new Error('id "' + l + '" resolves to more than one schema')
								} else if (l != Q(u))
									if ("#" == l[0]) {
										if (n[l] && !a(e, n[l])) throw new Error('id "' + l + '" resolves to more than one schema');
										n[l] = e
									} else r._refs[l] = u
							}
							i[t] = f, s[t] = u
						}
					})), n
				}, z.inlineRef = H, z.schema = C;
				var L = d.toHash(["properties", "patternProperties", "enum", "dependencies", "definitions"]);

				function N(e, t, i, s) {
					if (e.fragment = e.fragment || "", "/" == e.fragment.slice(0, 1)) {
						for (var n = e.fragment.split("/"), r = 1; r < n.length; r++) {
							var o = n[r];
							if (o) {
								if (void 0 === (i = i[o = d.unescapeFragment(o)])) break;
								var a;
								if (!L[o] && ((a = this._getId(i)) && (t = Z(t, a)), i.$ref)) {
									var c = Z(t, i.$ref),
										m = C.call(this, s, c);
									m && (i = m.schema, s = m.root, t = m.baseId)
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
							for (var r in t) {
								if ("$ref" == r) return 1 / 0;
								if (M[r]) s++;
								else if ("object" == typeof(i = t[r]) && (s += e(i) + 1), s == 1 / 0) return 1 / 0
							}
						return s
					}(e) <= t : void 0)
				}

				function B(e, t) {
					return !1 !== t && (e = Q(e)), W(o.parse(e))
				}

				function W(e) {
					return o.serialize(e).split("#")[0] + "#"
				}
				var V = /#\/?$/;

				function Q(e) {
					return e ? e.replace(V, "") : ""
				}

				function Z(e, t) {
					return t = Q(t), o.resolve(e, t)
				}
				var G = {
					Validation: Y((function(e) {
						this.message = "validation failed", this.errors = e, this.ajv = this.validation = !0
					})),
					MissingRef: Y(J)
				};

				function J(e, t, i) {
					this.message = i || J.message(e, t), this.missingRef = O.url(e, t), this.missingSchema = O.normalizeId(O.fullPath(this.missingRef))
				}

				function Y(e) {
					return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e, e
				}
				J.message = function(e, t) {
					return "can't resolve reference " + t + " from id " + e
				};
				var K = function(e, t) {
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
										r = {
											key: s,
											value: e[s]
										};
									return i(n, r)
								}
							}),
							r = [];
						return function e(t) {
							if (t && t.toJSON && "function" == typeof t.toJSON && (t = t.toJSON()), void 0 !== t) {
								if ("number" == typeof t) return isFinite(t) ? "" + t : "null";
								if ("object" != typeof t) return JSON.stringify(t);
								var i, o;
								if (Array.isArray(t)) {
									for (o = "[", i = 0; i < t.length; i++) i && (o += ","), o += e(t[i]) || "null";
									return o + "]"
								}
								if (null === t) return "null";
								if (-1 !== r.indexOf(t)) {
									if (s) return JSON.stringify("__cycle__");
									throw new TypeError("Converting circular structure to JSON")
								}
								var a = r.push(t) - 1,
									d = Object.keys(t).sort(n && n(t));
								for (o = "", i = 0; i < d.length; i++) {
									var c = d[i],
										m = e(t[c]);
									m && (o && (o += ","), o += JSON.stringify(c) + ":" + m)
								}
								return r.splice(a, 1), "{" + o + "}"
							}
						}(e)
					},
					X = function(e, t, i) {
						var s = "",
							n = !0 === e.schema.$async,
							r = e.util.schemaHasRulesExcept(e.schema, e.RULES.all, "$ref"),
							o = e.self._getId(e.schema);
						if (e.opts.strictKeywords) {
							var a = e.util.schemaUnknownRules(e.schema, e.RULES.keywords);
							if (a) {
								var d = "unknown keyword: " + a;
								if ("log" !== e.opts.strictKeywords) throw new Error(d);
								e.logger.warn(d)
							}
						}
						if (e.isTop && (s += " var validate = ", n && (e.async = !0, s += "async "), s += "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", o && (e.opts.sourceCode || e.opts.processCode) && (s += " /*# sourceURL=" + o + " */ ")), "boolean" == typeof e.schema || !r && !e.schema.$ref) {
							var c = e.level,
								m = e.dataLevel,
								p = e.schema["false schema"],
								_ = e.schemaPath + e.util.getProperty("false schema"),
								h = e.errSchemaPath + "/false schema",
								l = !e.opts.allErrors,
								f = "data" + (m || ""),
								u = "valid" + c;
							if (!1 === e.schema) {
								e.isTop ? l = !0 : s += " var " + u + " = false; ", (Y = Y || []).push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'false schema' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(h) + " , params: {} ", !1 !== e.opts.messages && (s += " , message: 'boolean schema is false' "), e.opts.verbose && (s += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), s += " } ") : s += " {} ";
								var g = s;
								s = Y.pop(), !e.compositeRule && l ? e.async ? s += " throw new ValidationError([" + g + "]); " : s += " validate.errors = [" + g + "]; return false; " : s += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
							} else e.isTop ? s += n ? " return data; " : " validate.errors = null; return true; " : s += " var " + u + " = true; ";
							return e.isTop && (s += " }; return validate; "), s
						}
						if (e.isTop) {
							var y = e.isTop;
							c = e.level = 0, m = e.dataLevel = 0, f = "data";
							if (e.rootId = e.resolve.fullPath(e.self._getId(e.root.schema)), e.baseId = e.baseId || e.rootId, delete e.isTop, e.dataPathArr = [void 0], void 0 !== e.schema.default && e.opts.useDefaults && e.opts.strictDefaults) {
								var v = "default is ignored in the schema root";
								if ("log" !== e.opts.strictDefaults) throw new Error(v);
								e.logger.warn(v)
							}
							s += " var vErrors = null; ", s += " var errors = 0;     ", s += " if (rootData === undefined) rootData = data; "
						} else {
							c = e.level, f = "data" + ((m = e.dataLevel) || "");
							if (o && (e.baseId = e.resolve.url(e.baseId, o)), n && !e.async) throw new Error("async schema in sync schema");
							s += " var errs_" + c + " = errors;"
						}
						u = "valid" + c, l = !e.opts.allErrors;
						var b = "",
							w = "",
							$ = e.schema.type,
							j = Array.isArray($);
						if ($ && e.opts.nullable && !0 === e.schema.nullable && (j ? -1 == $.indexOf("null") && ($ = $.concat("null")) : "null" != $ && ($ = [$, "null"], j = !0)), j && 1 == $.length && ($ = $[0], j = !1), e.schema.$ref && r) {
							if ("fail" == e.opts.extendRefs) throw new Error('$ref: validation keywords used in schema at path "' + e.errSchemaPath + '" (see option extendRefs)');
							!0 !== e.opts.extendRefs && (r = !1, e.logger.warn('$ref: keywords ignored in schema at path "' + e.errSchemaPath + '"'))
						}
						if (e.schema.$comment && e.opts.$comment && (s += " " + e.RULES.all.$comment.code(e, "$comment")), $) {
							if (e.opts.coerceTypes) var k = e.util.coerceToTypes(e.opts.coerceTypes, $);
							var x = e.RULES.types[$];
							if (k || j || !0 === x || x && !K(x)) {
								_ = e.schemaPath + ".type", h = e.errSchemaPath + "/type", _ = e.schemaPath + ".type", h = e.errSchemaPath + "/type";
								var P = j ? "checkDataTypes" : "checkDataType";
								if (s += " if (" + e.util[P]($, f, !0) + ") { ", k) {
									var q = "dataType" + c,
										E = "coerced" + c;
									s += " var " + q + " = typeof " + f + "; ", "array" == e.opts.coerceTypes && (s += " if (" + q + " == 'object' && Array.isArray(" + f + ")) " + q + " = 'array'; "), s += " var " + E + " = undefined; ";
									var T = "",
										S = k;
									if (S)
										for (var A, D = -1, R = S.length - 1; D < R;) A = S[D += 1], D && (s += " if (" + E + " === undefined) { ", T += "}"), "array" == e.opts.coerceTypes && "array" != A && (s += " if (" + q + " == 'array' && " + f + ".length == 1) { " + E + " = " + f + " = " + f + "[0]; " + q + " = typeof " + f + ";  } "), "string" == A ? s += " if (" + q + " == 'number' || " + q + " == 'boolean') " + E + " = '' + " + f + "; else if (" + f + " === null) " + E + " = ''; " : "number" == A || "integer" == A ? (s += " if (" + q + " == 'boolean' || " + f + " === null || (" + q + " == 'string' && " + f + " && " + f + " == +" + f + " ", "integer" == A && (s += " && !(" + f + " % 1)"), s += ")) " + E + " = +" + f + "; ") : "boolean" == A ? s += " if (" + f + " === 'false' || " + f + " === 0 || " + f + " === null) " + E + " = false; else if (" + f + " === 'true' || " + f + " === 1) " + E + " = true; " : "null" == A ? s += " if (" + f + " === '' || " + f + " === 0 || " + f + " === false) " + E + " = null; " : "array" == e.opts.coerceTypes && "array" == A && (s += " if (" + q + " == 'string' || " + q + " == 'number' || " + q + " == 'boolean' || " + f + " == null) " + E + " = [" + f + "]; ");
									s += " " + T + " if (" + E + " === undefined) {   ", (Y = Y || []).push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'type' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(h) + " , params: { type: '", s += j ? "" + $.join(",") : "" + $, s += "' } ", !1 !== e.opts.messages && (s += " , message: 'should be ", s += j ? "" + $.join(",") : "" + $, s += "' "), e.opts.verbose && (s += " , schema: validate.schema" + _ + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), s += " } ") : s += " {} ";
									g = s;
									s = Y.pop(), !e.compositeRule && l ? e.async ? s += " throw new ValidationError([" + g + "]); " : s += " validate.errors = [" + g + "]; return false; " : s += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } else {  ";
									var I = m ? "data" + (m - 1 || "") : "parentData";
									s += " " + f + " = " + E + "; ", m || (s += "if (" + I + " !== undefined)"), s += " " + I + "[" + (m ? e.dataPathArr[m] : "parentDataProperty") + "] = " + E + "; } "
								} else {
									(Y = Y || []).push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'type' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(h) + " , params: { type: '", s += j ? "" + $.join(",") : "" + $, s += "' } ", !1 !== e.opts.messages && (s += " , message: 'should be ", s += j ? "" + $.join(",") : "" + $, s += "' "), e.opts.verbose && (s += " , schema: validate.schema" + _ + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), s += " } ") : s += " {} ";
									g = s;
									s = Y.pop(), !e.compositeRule && l ? e.async ? s += " throw new ValidationError([" + g + "]); " : s += " validate.errors = [" + g + "]; return false; " : s += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
								}
								s += " } "
							}
						}
						if (e.schema.$ref && !r) s += " " + e.RULES.all.$ref.code(e, "$ref") + " ", l && (s += " } if (errors === ", s += y ? "0" : "errs_" + c, s += ") { ", w += "}");
						else {
							var F = e.RULES;
							if (F)
								for (var O = -1, z = F.length - 1; O < z;)
									if (K(x = F[O += 1])) {
										if (x.type && (s += " if (" + e.util.checkDataType(x.type, f) + ") { "), e.opts.useDefaults)
											if ("object" == x.type && e.schema.properties) {
												p = e.schema.properties;
												var C = Object.keys(p);
												if (C)
													for (var U, L = -1, N = C.length - 1; L < N;) {
														if (void 0 !== (B = p[U = C[L += 1]]).default) {
															var M = f + e.util.getProperty(U);
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
												D = -1;
												for (var B, W = H.length - 1; D < W;)
													if (void 0 !== (B = H[D += 1]).default) {
														M = f + "[" + D + "]";
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
											for (var Q, Z = -1, G = V.length - 1; Z < G;)
												if (X(Q = V[Z += 1])) {
													var J = Q.code(e, Q.keyword, x.type);
													J && (s += " " + J + " ", l && (b += "}"))
												} if (l && (s += " " + b + " ", b = ""), x.type && (s += " } ", $ && $ === x.type && !k)) {
											s += " else { ";
											var Y;
											_ = e.schemaPath + ".type", h = e.errSchemaPath + "/type";
											(Y = Y || []).push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'type' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(h) + " , params: { type: '", s += j ? "" + $.join(",") : "" + $, s += "' } ", !1 !== e.opts.messages && (s += " , message: 'should be ", s += j ? "" + $.join(",") : "" + $, s += "' "), e.opts.verbose && (s += " , schema: validate.schema" + _ + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + f + " "), s += " } ") : s += " {} ";
											g = s;
											s = Y.pop(), !e.compositeRule && l ? e.async ? s += " throw new ValidationError([" + g + "]); " : s += " validate.errors = [" + g + "]; return false; " : s += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } "
										}
										l && (s += " if (errors === ", s += y ? "0" : "errs_" + c, s += ") { ", w += "}")
									}
						}

						function K(e) {
							for (var t = e.rules, i = 0; i < t.length; i++)
								if (X(t[i])) return !0
						}

						function X(t) {
							return void 0 !== e.schema[t.keyword] || t.implements && function(t) {
								for (var i = t.implements, s = 0; s < i.length; s++)
									if (void 0 !== e.schema[i[s]]) return !0
							}(t)
						}
						return l && (s += " " + w + " "), y ? (n ? (s += " if (errors === 0) return data;           ", s += " else throw new ValidationError(vErrors); ") : (s += " validate.errors = vErrors; ", s += " return errors === 0;       "), s += " }; return validate;") : s += " var " + u + " = errors === errs_" + c + ";", s = e.util.cleanUpCode(s), y && (s = e.util.finalCleanUpCode(s, n)), s
					},
					ee = d.ucs2length,
					te = G.Validation,
					ie = function e(t, i, s, n) {
						var r = this,
							o = this._opts,
							c = [void 0],
							m = {},
							p = [],
							_ = {},
							h = [],
							l = {},
							f = [];
						i = i || {
							schema: t,
							refVal: c,
							refs: m
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
							var b = $(t, i, s, n);
							g.validate = b;
							var w = g.callValidate;
							return w && (w.schema = b.schema, w.errors = null, w.refs = b.refs, w.refVal = b.refVal, w.root = b.root, w.$async = b.$async, o.sourceCode && (w.source = b.source)), b
						} finally {
							ne.call(this, t, i, n)
						}

						function $(t, s, n, _) {
							var l = !s || s && s.schema == t;
							if (s.schema != i.schema) return e.call(r, t, s, n, _);
							var u, g = !0 === t.$async,
								b = X({
									isTop: !0,
									schema: t,
									isRoot: l,
									baseId: _,
									root: s,
									schemaPath: "",
									errSchemaPath: "#",
									errorPath: '""',
									MissingRefError: G.MissingRef,
									RULES: v,
									validate: X,
									util: d,
									resolve: O,
									resolveRef: j,
									usePattern: P,
									useDefault: q,
									useCustomRule: E,
									opts: o,
									formats: y,
									logger: r.logger,
									self: r
								});
							b = me(c, de) + me(p, oe) + me(h, ae) + me(f, ce) + b, o.processCode && (b = o.processCode(b));
							try {
								u = new Function("self", "RULES", "formats", "root", "refVal", "defaults", "customRules", "equal", "ucs2length", "ValidationError", b)(r, v, y, i, c, h, f, a, ee, te), c[0] = u
							} catch (w) {
								throw r.logger.error("Error compiling schema, function code:", b), w
							}
							return u.schema = t, u.errors = null, u.refs = m, u.refVal = c, u.root = l ? u : s, g && (u.$async = !0), !0 === o.sourceCode && (u.source = {
								code: b,
								patterns: p,
								defaults: h
							}), u
						}

						function j(t, n, a) {
							n = O.url(t, n);
							var d, p, _ = m[n];
							if (void 0 !== _) return x(d = c[_], p = "refVal[" + _ + "]");
							if (!a && i.refs) {
								var h = i.refs[n];
								if (void 0 !== h) return x(d = i.refVal[h], p = k(n, d))
							}
							p = k(n);
							var l = O.call(r, $, i, n);
							if (void 0 === l) {
								var f = s && s[n];
								f && (l = O.inlineRef(f, o.inlineRefs) ? f : e.call(r, f, i, s, t))
							}
							if (void 0 !== l) return function(e, t) {
								var i = m[e];
								c[i] = t
							}(n, l), x(l, p);
							! function(e) {
								delete m[e]
							}(n)
						}

						function k(e, t) {
							var i = c.length;
							return c[i] = t, m[e] = i, "refVal" + i
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

						function P(e) {
							var t = _[e];
							return void 0 === t && (t = _[e] = p.length, p[t] = e), "pattern" + t
						}

						function q(e) {
							switch (typeof e) {
								case "boolean":
								case "number":
									return "" + e;
								case "string":
									return d.toQuotedString(e);
								case "object":
									if (null === e) return "null";
									var t = K(e),
										i = l[t];
									return void 0 === i && (i = l[t] = h.length, h[i] = e), "default" + i
							}
						}

						function E(e, t, i, s) {
							if (!1 !== r._opts.validateSchema) {
								var n = e.definition.dependencies;
								if (n && !n.every((function(e) {
										return Object.prototype.hasOwnProperty.call(i, e)
									}))) throw new Error("parent schema must have all required keywords: " + n.join(","));
								var a = e.definition.validateSchema;
								if (a)
									if (!a(t)) {
										var d = "keyword schema is invalid: " + r.errorsText(a.errors);
										if ("log" != r._opts.validateSchema) throw new Error(d);
										r.logger.error(d)
									}
							}
							var c, m = e.definition.compile,
								p = e.definition.inline,
								_ = e.definition.macro;
							if (m) c = m.call(r, t, i, s);
							else if (_) c = _.call(r, t, i, s), !1 !== o.validateSchema && r.validateSchema(c, !0);
							else if (p) c = p.call(r, s, e.keyword, t, i);
							else if (!(c = e.definition.validate)) return;
							if (void 0 === c) throw new Error('custom keyword "' + e.keyword + '"failed to compile');
							var h = f.length;
							return f[h] = c, {
								code: "customRule" + h,
								validate: c
							}
						}
					};

				function se(e, t, i) {
					var s = re.call(this, e, t, i);
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
					var s = re.call(this, e, t, i);
					s >= 0 && this._compilations.splice(s, 1)
				}

				function re(e, t, i) {
					for (var s = 0; s < this._compilations.length; s++) {
						var n = this._compilations[s];
						if (n.schema == e && n.root == t && n.baseId == i) return s
					}
					return -1
				}

				function oe(e, t) {
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

				function me(e, t) {
					if (!e.length) return "";
					for (var i = "", s = 0; s < e.length; s++) i += t(s, e);
					return i
				}
				var pe = s((function(e) {
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
					le = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i,
					fe = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
					ue = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
					ge = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
					ye = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i,
					ve = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
					be = /^(?:\/(?:[^~/]|~0|~1)*)*$/,
					we = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
					$e = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
					je = ke;

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

				function Pe(e, t) {
					var i = e.match(le);
					if (!i) return !1;
					var s = i[1],
						n = i[2],
						r = i[3],
						o = i[5];
					return (s <= 23 && n <= 59 && r <= 59 || 23 == s && 59 == n && 60 == r) && (!t || o)
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
					hostname: fe,
					ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
					ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
					regex: Se,
					uuid: ve,
					"json-pointer": be,
					"json-pointer-uri-fragment": we,
					"relative-json-pointer": $e
				}, ke.full = {
					date: xe,
					time: Pe,
					"date-time": function(e) {
						var t = e.split(qe);
						return 2 == t.length && xe(t[0]) && Pe(t[1], !0)
					},
					uri: function(e) {
						return Ee.test(e) && ue.test(e)
					},
					"uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
					"uri-template": ge,
					url: ye,
					email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
					hostname: fe,
					ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
					ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
					regex: Se,
					uuid: ve,
					"json-pointer": be,
					"json-pointer-uri-fragment": we,
					"relative-json-pointer": $e
				};
				var qe = /t|\s/i;
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
							r = e.level,
							o = e.dataLevel,
							a = e.schema[t],
							d = e.schemaPath + e.util.getProperty(t),
							c = e.errSchemaPath + "/" + t,
							m = !e.opts.allErrors,
							p = "data" + (o || ""),
							_ = e.opts.$data && a && a.$data;
						_ ? (n += " var schema" + r + " = " + e.util.getData(a.$data, o, e.dataPathArr) + "; ", s = "schema" + r) : s = a;
						var h = "maximum" == t,
							l = h ? "exclusiveMaximum" : "exclusiveMinimum",
							f = e.schema[l],
							u = e.opts.$data && f && f.$data,
							g = h ? "<" : ">",
							y = h ? ">" : "<",
							v = void 0;
						if (u) {
							var b = e.util.getData(f.$data, o, e.dataPathArr),
								w = "exclusive" + r,
								$ = "exclType" + r,
								j = "exclIsNumber" + r,
								k = "' + " + (q = "op" + r) + " + '";
							n += " var schemaExcl" + r + " = " + b + "; ", n += " var " + w + "; var " + $ + " = typeof " + (b = "schemaExcl" + r) + "; if (" + $ + " != 'boolean' && " + $ + " != 'undefined' && " + $ + " != 'number') { ";
							var x;
							v = l;
							(x = x || []).push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: '" + (v || "_exclusiveLimit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ", !1 !== e.opts.messages && (n += " , message: '" + l + " should be boolean' "), e.opts.verbose && (n += " , schema: validate.schema" + d + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), n += " } ") : n += " {} ";
							var P = n;
							n = x.pop(), !e.compositeRule && m ? e.async ? n += " throw new ValidationError([" + P + "]); " : n += " validate.errors = [" + P + "]; return false; " : n += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += " } else if ( ", _ && (n += " (" + s + " !== undefined && typeof " + s + " != 'number') || "), n += " " + $ + " == 'number' ? ( (" + w + " = " + s + " === undefined || " + b + " " + g + "= " + s + ") ? " + p + " " + y + "= " + b + " : " + p + " " + y + " " + s + " ) : ( (" + w + " = " + b + " === true) ? " + p + " " + y + "= " + s + " : " + p + " " + y + " " + s + " ) || " + p + " !== " + p + ") { var op" + r + " = " + w + " ? '" + g + "' : '" + g + "='; ", void 0 === a && (v = l, c = e.errSchemaPath + "/" + l, s = b, _ = u)
						} else {
							k = g;
							if ((j = "number" == typeof f) && _) {
								var q = "'" + k + "'";
								n += " if ( ", _ && (n += " (" + s + " !== undefined && typeof " + s + " != 'number') || "), n += " ( " + s + " === undefined || " + f + " " + g + "= " + s + " ? " + p + " " + y + "= " + f + " : " + p + " " + y + " " + s + " ) || " + p + " !== " + p + ") { "
							} else {
								j && void 0 === a ? (w = !0, v = l, c = e.errSchemaPath + "/" + l, s = f, y += "=") : (j && (s = Math[h ? "min" : "max"](f, a)), f === (!j || s) ? (w = !0, v = l, c = e.errSchemaPath + "/" + l, y += "=") : (w = !1, k += "="));
								q = "'" + k + "'";
								n += " if ( ", _ && (n += " (" + s + " !== undefined && typeof " + s + " != 'number') || "), n += " " + p + " " + y + " " + s + " || " + p + " !== " + p + ") { "
							}
						}
						v = v || t, (x = x || []).push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: '" + (v || "_limit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { comparison: " + q + ", limit: " + s + ", exclusive: " + w + " } ", !1 !== e.opts.messages && (n += " , message: 'should be " + k + " ", n += _ ? "' + " + s : s + "'"), e.opts.verbose && (n += " , schema:  ", n += _ ? "validate.schema" + d : "" + a, n += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), n += " } ") : n += " {} ";
						P = n;
						return n = x.pop(), !e.compositeRule && m ? e.async ? n += " throw new ValidationError([" + P + "]); " : n += " validate.errors = [" + P + "]; return false; " : n += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += " } ", m && (n += " else { "), n
					},
					De = function(e, t, i) {
						var s, n = " ",
							r = e.level,
							o = e.dataLevel,
							a = e.schema[t],
							d = e.schemaPath + e.util.getProperty(t),
							c = e.errSchemaPath + "/" + t,
							m = !e.opts.allErrors,
							p = "data" + (o || ""),
							_ = e.opts.$data && a && a.$data;
						_ ? (n += " var schema" + r + " = " + e.util.getData(a.$data, o, e.dataPathArr) + "; ", s = "schema" + r) : s = a, n += "if ( ", _ && (n += " (" + s + " !== undefined && typeof " + s + " != 'number') || "), n += " " + p + ".length " + ("maxItems" == t ? ">" : "<") + " " + s + ") { ";
						var h = t,
							l = l || [];
						l.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: '" + (h || "_limitItems") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { limit: " + s + " } ", !1 !== e.opts.messages && (n += " , message: 'should NOT have ", n += "maxItems" == t ? "more" : "fewer", n += " than ", n += _ ? "' + " + s + " + '" : "" + a, n += " items' "), e.opts.verbose && (n += " , schema:  ", n += _ ? "validate.schema" + d : "" + a, n += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), n += " } ") : n += " {} ";
						var f = n;
						return n = l.pop(), !e.compositeRule && m ? e.async ? n += " throw new ValidationError([" + f + "]); " : n += " validate.errors = [" + f + "]; return false; " : n += " var err = " + f + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += "} ", m && (n += " else { "), n
					},
					Re = function(e, t, i) {
						var s, n = " ",
							r = e.level,
							o = e.dataLevel,
							a = e.schema[t],
							d = e.schemaPath + e.util.getProperty(t),
							c = e.errSchemaPath + "/" + t,
							m = !e.opts.allErrors,
							p = "data" + (o || ""),
							_ = e.opts.$data && a && a.$data;
						_ ? (n += " var schema" + r + " = " + e.util.getData(a.$data, o, e.dataPathArr) + "; ", s = "schema" + r) : s = a;
						var h = "maxLength" == t ? ">" : "<";
						n += "if ( ", _ && (n += " (" + s + " !== undefined && typeof " + s + " != 'number') || "), !1 === e.opts.unicode ? n += " " + p + ".length " : n += " ucs2length(" + p + ") ", n += " " + h + " " + s + ") { ";
						var l = t,
							f = f || [];
						f.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: '" + (l || "_limitLength") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { limit: " + s + " } ", !1 !== e.opts.messages && (n += " , message: 'should NOT be ", n += "maxLength" == t ? "longer" : "shorter", n += " than ", n += _ ? "' + " + s + " + '" : "" + a, n += " characters' "), e.opts.verbose && (n += " , schema:  ", n += _ ? "validate.schema" + d : "" + a, n += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), n += " } ") : n += " {} ";
						var u = n;
						return n = f.pop(), !e.compositeRule && m ? e.async ? n += " throw new ValidationError([" + u + "]); " : n += " validate.errors = [" + u + "]; return false; " : n += " var err = " + u + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += "} ", m && (n += " else { "), n
					},
					Ie = function(e, t, i) {
						var s, n = " ",
							r = e.level,
							o = e.dataLevel,
							a = e.schema[t],
							d = e.schemaPath + e.util.getProperty(t),
							c = e.errSchemaPath + "/" + t,
							m = !e.opts.allErrors,
							p = "data" + (o || ""),
							_ = e.opts.$data && a && a.$data;
						_ ? (n += " var schema" + r + " = " + e.util.getData(a.$data, o, e.dataPathArr) + "; ", s = "schema" + r) : s = a, n += "if ( ", _ && (n += " (" + s + " !== undefined && typeof " + s + " != 'number') || "), n += " Object.keys(" + p + ").length " + ("maxProperties" == t ? ">" : "<") + " " + s + ") { ";
						var h = t,
							l = l || [];
						l.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: '" + (h || "_limitProperties") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { limit: " + s + " } ", !1 !== e.opts.messages && (n += " , message: 'should NOT have ", n += "maxProperties" == t ? "more" : "fewer", n += " than ", n += _ ? "' + " + s + " + '" : "" + a, n += " properties' "), e.opts.verbose && (n += " , schema:  ", n += _ ? "validate.schema" + d : "" + a, n += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), n += " } ") : n += " {} ";
						var f = n;
						return n = l.pop(), !e.compositeRule && m ? e.async ? n += " throw new ValidationError([" + f + "]); " : n += " validate.errors = [" + f + "]; return false; " : n += " var err = " + f + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += "} ", m && (n += " else { "), n
					},
					Fe = {
						$ref: function(e, t, i) {
							var s, n, r = " ",
								o = e.level,
								a = e.dataLevel,
								d = e.schema[t],
								c = e.errSchemaPath + "/" + t,
								m = !e.opts.allErrors,
								p = "data" + (a || ""),
								_ = "valid" + o;
							if ("#" == d || "#/" == d) e.isRoot ? (s = e.async, n = "validate") : (s = !0 === e.root.schema.$async, n = "root.refVal[0]");
							else {
								var h = e.resolveRef(e.baseId, d, e.isRoot);
								if (void 0 === h) {
									var l = e.MissingRefError.message(e.baseId, d);
									if ("fail" == e.opts.missingRefs) {
										e.logger.error(l), (y = y || []).push(r), r = "", !1 !== e.createErrors ? (r += " { keyword: '$ref' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { ref: '" + e.util.escapeQuotes(d) + "' } ", !1 !== e.opts.messages && (r += " , message: 'can\\'t resolve reference " + e.util.escapeQuotes(d) + "' "), e.opts.verbose && (r += " , schema: " + e.util.toQuotedString(d) + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), r += " } ") : r += " {} ";
										var f = r;
										r = y.pop(), !e.compositeRule && m ? e.async ? r += " throw new ValidationError([" + f + "]); " : r += " validate.errors = [" + f + "]; return false; " : r += " var err = " + f + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", m && (r += " if (false) { ")
									} else {
										if ("ignore" != e.opts.missingRefs) throw new e.MissingRefError(e.baseId, d, l);
										e.logger.warn(l), m && (r += " if (true) { ")
									}
								} else if (h.inline) {
									var u = e.util.copy(e);
									u.level++;
									var g = "valid" + u.level;
									u.schema = h.schema, u.schemaPath = "", u.errSchemaPath = d, r += " " + e.validate(u).replace(/validate\.schema/g, h.code) + " ", m && (r += " if (" + g + ") { ")
								} else s = !0 === h.$async || e.async && !1 !== h.$async, n = h.code
							}
							if (n) {
								var y;
								(y = y || []).push(r), r = "", e.opts.passContext ? r += " " + n + ".call(this, " : r += " " + n + "( ", r += " " + p + ", (dataPath || '')", '""' != e.errorPath && (r += " + " + e.errorPath);
								var v = r += " , " + (a ? "data" + (a - 1 || "") : "parentData") + " , " + (a ? e.dataPathArr[a] : "parentDataProperty") + ", rootData)  ";
								if (r = y.pop(), s) {
									if (!e.async) throw new Error("async schema referenced by sync schema");
									m && (r += " var " + _ + "; "), r += " try { await " + v + "; ", m && (r += " " + _ + " = true; "), r += " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", m && (r += " " + _ + " = false; "), r += " } ", m && (r += " if (" + _ + ") { ")
								} else r += " if (!" + v + ") { if (vErrors === null) vErrors = " + n + ".errors; else vErrors = vErrors.concat(" + n + ".errors); errors = vErrors.length; } ", m && (r += " else { ")
							}
							return r
						},
						allOf: function(e, t, i) {
							var s = " ",
								n = e.schema[t],
								r = e.schemaPath + e.util.getProperty(t),
								o = e.errSchemaPath + "/" + t,
								a = !e.opts.allErrors,
								d = e.util.copy(e),
								c = "";
							d.level++;
							var m = "valid" + d.level,
								p = d.baseId,
								_ = !0,
								h = n;
							if (h)
								for (var l, f = -1, u = h.length - 1; f < u;) l = h[f += 1], (e.opts.strictKeywords ? "object" == typeof l && Object.keys(l).length > 0 : e.util.schemaHasRules(l, e.RULES.all)) && (_ = !1, d.schema = l, d.schemaPath = r + "[" + f + "]", d.errSchemaPath = o + "/" + f, s += "  " + e.validate(d) + " ", d.baseId = p, a && (s += " if (" + m + ") { ", c += "}"));
							return a && (s += _ ? " if (true) { " : " " + c.slice(0, -1) + " "), s = e.util.cleanUpCode(s)
						},
						anyOf: function(e, t, i) {
							var s = " ",
								n = e.level,
								r = e.dataLevel,
								o = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (r || ""),
								p = "valid" + n,
								_ = "errs__" + n,
								h = e.util.copy(e),
								l = "";
							h.level++;
							var f = "valid" + h.level;
							if (o.every((function(t) {
									return e.opts.strictKeywords ? "object" == typeof t && Object.keys(t).length > 0 : e.util.schemaHasRules(t, e.RULES.all)
								}))) {
								var u = h.baseId;
								s += " var " + _ + " = errors; var " + p + " = false;  ";
								var g = e.compositeRule;
								e.compositeRule = h.compositeRule = !0;
								var y = o;
								if (y)
									for (var v, b = -1, w = y.length - 1; b < w;) v = y[b += 1], h.schema = v, h.schemaPath = a + "[" + b + "]", h.errSchemaPath = d + "/" + b, s += "  " + e.validate(h) + " ", h.baseId = u, s += " " + p + " = " + p + " || " + f + "; if (!" + p + ") { ", l += "}";
								e.compositeRule = h.compositeRule = g, s += " " + l + " if (!" + p + ") {   var err =   ", !1 !== e.createErrors ? (s += " { keyword: 'anyOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: {} ", !1 !== e.opts.messages && (s += " , message: 'should match some schema in anyOf' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), s += " } ") : s += " {} ", s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && c && (e.async ? s += " throw new ValidationError(vErrors); " : s += " validate.errors = vErrors; return false; "), s += " } else {  errors = " + _ + "; if (vErrors !== null) { if (" + _ + ") vErrors.length = " + _ + "; else vErrors = null; } ", e.opts.allErrors && (s += " } "), s = e.util.cleanUpCode(s)
							} else c && (s += " if (true) { ");
							return s
						},
						$comment: function(e, t, i) {
							var s = " ",
								n = e.schema[t],
								r = e.errSchemaPath + "/" + t,
								o = (e.opts.allErrors, e.util.toQuotedString(n));
							return !0 === e.opts.$comment ? s += " console.log(" + o + ");" : "function" == typeof e.opts.$comment && (s += " self._opts.$comment(" + o + ", " + e.util.toQuotedString(r) + ", validate.root.schema);"), s
						},
						const: function(e, t, i) {
							var s = " ",
								n = e.level,
								r = e.dataLevel,
								o = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (r || ""),
								p = "valid" + n,
								_ = e.opts.$data && o && o.$data;
							_ && (s += " var schema" + n + " = " + e.util.getData(o.$data, r, e.dataPathArr) + "; "), _ || (s += " var schema" + n + " = validate.schema" + a + ";"), s += "var " + p + " = equal(" + m + ", schema" + n + "); if (!" + p + ") {   ";
							var h = h || [];
							h.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'const' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { allowedValue: schema" + n + " } ", !1 !== e.opts.messages && (s += " , message: 'should be equal to constant' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), s += " } ") : s += " {} ";
							var l = s;
							return s = h.pop(), !e.compositeRule && c ? e.async ? s += " throw new ValidationError([" + l + "]); " : s += " validate.errors = [" + l + "]; return false; " : s += " var err = " + l + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " }", c && (s += " else { "), s
						},
						contains: function(e, t, i) {
							var s = " ",
								n = e.level,
								r = e.dataLevel,
								o = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (r || ""),
								p = "valid" + n,
								_ = "errs__" + n,
								h = e.util.copy(e);
							h.level++;
							var l = "valid" + h.level,
								f = "i" + n,
								u = h.dataLevel = e.dataLevel + 1,
								g = "data" + u,
								y = e.baseId,
								v = e.opts.strictKeywords ? "object" == typeof o && Object.keys(o).length > 0 : e.util.schemaHasRules(o, e.RULES.all);
							if (s += "var " + _ + " = errors;var " + p + ";", v) {
								var b = e.compositeRule;
								e.compositeRule = h.compositeRule = !0, h.schema = o, h.schemaPath = a, h.errSchemaPath = d, s += " var " + l + " = false; for (var " + f + " = 0; " + f + " < " + m + ".length; " + f + "++) { ", h.errorPath = e.util.getPathExpr(e.errorPath, f, e.opts.jsonPointers, !0);
								var w = m + "[" + f + "]";
								h.dataPathArr[u] = f;
								var $ = e.validate(h);
								h.baseId = y, e.util.varOccurences($, g) < 2 ? s += " " + e.util.varReplace($, g, w) + " " : s += " var " + g + " = " + w + "; " + $ + " ", s += " if (" + l + ") break; }  ", e.compositeRule = h.compositeRule = b, s += "  if (!" + l + ") {"
							} else s += " if (" + m + ".length == 0) {";
							var j = j || [];
							j.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'contains' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: {} ", !1 !== e.opts.messages && (s += " , message: 'should contain a valid item' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), s += " } ") : s += " {} ";
							var k = s;
							return s = j.pop(), !e.compositeRule && c ? e.async ? s += " throw new ValidationError([" + k + "]); " : s += " validate.errors = [" + k + "]; return false; " : s += " var err = " + k + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } else { ", v && (s += "  errors = " + _ + "; if (vErrors !== null) { if (" + _ + ") vErrors.length = " + _ + "; else vErrors = null; } "), e.opts.allErrors && (s += " } "), s = e.util.cleanUpCode(s)
						},
						dependencies: function(e, t, i) {
							var s = " ",
								n = e.level,
								r = e.dataLevel,
								o = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (r || ""),
								p = "errs__" + n,
								_ = e.util.copy(e),
								h = "";
							_.level++;
							var l = "valid" + _.level,
								f = {},
								u = {},
								g = e.opts.ownProperties;
							for (w in o) {
								var y = o[w],
									v = Array.isArray(y) ? u : f;
								v[w] = y
							}
							s += "var " + p + " = errors;";
							var b = e.errorPath;
							for (var w in s += "var missing" + n + ";", u)
								if ((v = u[w]).length) {
									if (s += " if ( " + m + e.util.getProperty(w) + " !== undefined ", g && (s += " && Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(w) + "') "), c) {
										s += " && ( ";
										var $ = v;
										if ($)
											for (var j = -1, k = $.length - 1; j < k;) {
												S = $[j += 1], j && (s += " || "), s += " ( ( " + (I = m + (R = e.util.getProperty(S))) + " === undefined ", g && (s += " || ! Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(S) + "') "), s += ") && (missing" + n + " = " + e.util.toQuotedString(e.opts.jsonPointers ? S : R) + ") ) "
											}
										s += ")) {  ";
										var x = "missing" + n,
											P = "' + " + x + " + '";
										e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(b, x, !0) : b + " + " + x);
										var q = q || [];
										q.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { property: '" + e.util.escapeQuotes(w) + "', missingProperty: '" + P + "', depsCount: " + v.length + ", deps: '" + e.util.escapeQuotes(1 == v.length ? v[0] : v.join(", ")) + "' } ", !1 !== e.opts.messages && (s += " , message: 'should have ", 1 == v.length ? s += "property " + e.util.escapeQuotes(v[0]) : s += "properties " + e.util.escapeQuotes(v.join(", ")), s += " when property " + e.util.escapeQuotes(w) + " is present' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), s += " } ") : s += " {} ";
										var E = s;
										s = q.pop(), !e.compositeRule && c ? e.async ? s += " throw new ValidationError([" + E + "]); " : s += " validate.errors = [" + E + "]; return false; " : s += " var err = " + E + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
									} else {
										s += " ) { ";
										var T = v;
										if (T)
											for (var S, A = -1, D = T.length - 1; A < D;) {
												S = T[A += 1];
												var R = e.util.getProperty(S),
													I = (P = e.util.escapeQuotes(S), m + R);
												e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(b, S, e.opts.jsonPointers)), s += " if ( " + I + " === undefined ", g && (s += " || ! Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(S) + "') "), s += ") {  var err =   ", !1 !== e.createErrors ? (s += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { property: '" + e.util.escapeQuotes(w) + "', missingProperty: '" + P + "', depsCount: " + v.length + ", deps: '" + e.util.escapeQuotes(1 == v.length ? v[0] : v.join(", ")) + "' } ", !1 !== e.opts.messages && (s += " , message: 'should have ", 1 == v.length ? s += "property " + e.util.escapeQuotes(v[0]) : s += "properties " + e.util.escapeQuotes(v.join(", ")), s += " when property " + e.util.escapeQuotes(w) + " is present' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), s += " } ") : s += " {} ", s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "
											}
									}
									s += " }   ", c && (h += "}", s += " else { ")
								} e.errorPath = b;
							var F = _.baseId;
							for (var w in f) {
								y = f[w];
								(e.opts.strictKeywords ? "object" == typeof y && Object.keys(y).length > 0 : e.util.schemaHasRules(y, e.RULES.all)) && (s += " " + l + " = true; if ( " + m + e.util.getProperty(w) + " !== undefined ", g && (s += " && Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(w) + "') "), s += ") { ", _.schema = y, _.schemaPath = a + e.util.getProperty(w), _.errSchemaPath = d + "/" + e.util.escapeFragment(w), s += "  " + e.validate(_) + " ", _.baseId = F, s += " }  ", c && (s += " if (" + l + ") { ", h += "}"))
							}
							return c && (s += "   " + h + " if (" + p + " == errors) {"), s = e.util.cleanUpCode(s)
						},
						enum: function(e, t, i) {
							var s = " ",
								n = e.level,
								r = e.dataLevel,
								o = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (r || ""),
								p = "valid" + n,
								_ = e.opts.$data && o && o.$data;
							_ && (s += " var schema" + n + " = " + e.util.getData(o.$data, r, e.dataPathArr) + "; ");
							var h = "i" + n,
								l = "schema" + n;
							_ || (s += " var " + l + " = validate.schema" + a + ";"), s += "var " + p + ";", _ && (s += " if (schema" + n + " === undefined) " + p + " = true; else if (!Array.isArray(schema" + n + ")) " + p + " = false; else {"), s += p + " = false;for (var " + h + "=0; " + h + "<" + l + ".length; " + h + "++) if (equal(" + m + ", " + l + "[" + h + "])) { " + p + " = true; break; }", _ && (s += "  }  "), s += " if (!" + p + ") {   ";
							var f = f || [];
							f.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'enum' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { allowedValues: schema" + n + " } ", !1 !== e.opts.messages && (s += " , message: 'should be equal to one of the allowed values' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), s += " } ") : s += " {} ";
							var u = s;
							return s = f.pop(), !e.compositeRule && c ? e.async ? s += " throw new ValidationError([" + u + "]); " : s += " validate.errors = [" + u + "]; return false; " : s += " var err = " + u + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " }", c && (s += " else { "), s
						},
						format: function(e, t, i) {
							var s = " ",
								n = e.level,
								r = e.dataLevel,
								o = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (r || "");
							if (!1 === e.opts.format) return c && (s += " if (true) { "), s;
							var p, _ = e.opts.$data && o && o.$data;
							_ ? (s += " var schema" + n + " = " + e.util.getData(o.$data, r, e.dataPathArr) + "; ", p = "schema" + n) : p = o;
							var h = e.opts.unknownFormats,
								l = Array.isArray(h);
							if (_) {
								s += " var " + (f = "format" + n) + " = formats[" + p + "]; var " + (u = "isObject" + n) + " = typeof " + f + " == 'object' && !(" + f + " instanceof RegExp) && " + f + ".validate; var " + (g = "formatType" + n) + " = " + u + " && " + f + ".type || 'string'; if (" + u + ") { ", e.async && (s += " var async" + n + " = " + f + ".async; "), s += " " + f + " = " + f + ".validate; } if (  ", _ && (s += " (" + p + " !== undefined && typeof " + p + " != 'string') || "), s += " (", "ignore" != h && (s += " (" + p + " && !" + f + " ", l && (s += " && self._opts.unknownFormats.indexOf(" + p + ") == -1 "), s += ") || "), s += " (" + f + " && " + g + " == '" + i + "' && !(typeof " + f + " == 'function' ? ", e.async ? s += " (async" + n + " ? await " + f + "(" + m + ") : " + f + "(" + m + ")) " : s += " " + f + "(" + m + ") ", s += " : " + f + ".test(" + m + "))))) {"
							} else {
								var f;
								if (!(f = e.formats[o])) {
									if ("ignore" == h) return e.logger.warn('unknown format "' + o + '" ignored in schema at path "' + e.errSchemaPath + '"'), c && (s += " if (true) { "), s;
									if (l && h.indexOf(o) >= 0) return c && (s += " if (true) { "), s;
									throw new Error('unknown format "' + o + '" is used in schema at path "' + e.errSchemaPath + '"')
								}
								var u, g = (u = "object" == typeof f && !(f instanceof RegExp) && f.validate) && f.type || "string";
								if (u) {
									var y = !0 === f.async;
									f = f.validate
								}
								if (g != i) return c && (s += " if (true) { "), s;
								if (y) {
									if (!e.async) throw new Error("async format in sync schema");
									s += " if (!(await " + (v = "formats" + e.util.getProperty(o) + ".validate") + "(" + m + "))) { "
								} else {
									s += " if (! ";
									var v = "formats" + e.util.getProperty(o);
									u && (v += ".validate"), s += "function" == typeof f ? " " + v + "(" + m + ") " : " " + v + ".test(" + m + ") ", s += ") { "
								}
							}
							var b = b || [];
							b.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'format' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { format:  ", s += _ ? "" + p : "" + e.util.toQuotedString(o), s += "  } ", !1 !== e.opts.messages && (s += " , message: 'should match format \"", s += _ ? "' + " + p + " + '" : "" + e.util.escapeQuotes(o), s += "\"' "), e.opts.verbose && (s += " , schema:  ", s += _ ? "validate.schema" + a : "" + e.util.toQuotedString(o), s += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), s += " } ") : s += " {} ";
							var w = s;
							return s = b.pop(), !e.compositeRule && c ? e.async ? s += " throw new ValidationError([" + w + "]); " : s += " validate.errors = [" + w + "]; return false; " : s += " var err = " + w + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } ", c && (s += " else { "), s
						},
						if: function(e, t, i) {
							var s = " ",
								n = e.level,
								r = e.dataLevel,
								o = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (r || ""),
								p = "valid" + n,
								_ = "errs__" + n,
								h = e.util.copy(e);
							h.level++;
							var l = "valid" + h.level,
								f = e.schema.then,
								u = e.schema.else,
								g = void 0 !== f && (e.opts.strictKeywords ? "object" == typeof f && Object.keys(f).length > 0 : e.util.schemaHasRules(f, e.RULES.all)),
								y = void 0 !== u && (e.opts.strictKeywords ? "object" == typeof u && Object.keys(u).length > 0 : e.util.schemaHasRules(u, e.RULES.all)),
								v = h.baseId;
							if (g || y) {
								var b;
								h.createErrors = !1, h.schema = o, h.schemaPath = a, h.errSchemaPath = d, s += " var " + _ + " = errors; var " + p + " = true;  ";
								var w = e.compositeRule;
								e.compositeRule = h.compositeRule = !0, s += "  " + e.validate(h) + " ", h.baseId = v, h.createErrors = !0, s += "  errors = " + _ + "; if (vErrors !== null) { if (" + _ + ") vErrors.length = " + _ + "; else vErrors = null; }  ", e.compositeRule = h.compositeRule = w, g ? (s += " if (" + l + ") {  ", h.schema = e.schema.then, h.schemaPath = e.schemaPath + ".then", h.errSchemaPath = e.errSchemaPath + "/then", s += "  " + e.validate(h) + " ", h.baseId = v, s += " " + p + " = " + l + "; ", g && y ? s += " var " + (b = "ifClause" + n) + " = 'then'; " : b = "'then'", s += " } ", y && (s += " else { ")) : s += " if (!" + l + ") { ", y && (h.schema = e.schema.else, h.schemaPath = e.schemaPath + ".else", h.errSchemaPath = e.errSchemaPath + "/else", s += "  " + e.validate(h) + " ", h.baseId = v, s += " " + p + " = " + l + "; ", g && y ? s += " var " + (b = "ifClause" + n) + " = 'else'; " : b = "'else'", s += " } "), s += " if (!" + p + ") {   var err =   ", !1 !== e.createErrors ? (s += " { keyword: 'if' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { failingKeyword: " + b + " } ", !1 !== e.opts.messages && (s += " , message: 'should match \"' + " + b + " + '\" schema' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), s += " } ") : s += " {} ", s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && c && (e.async ? s += " throw new ValidationError(vErrors); " : s += " validate.errors = vErrors; return false; "), s += " }   ", c && (s += " else { "), s = e.util.cleanUpCode(s)
							} else c && (s += " if (true) { ");
							return s
						},
						items: function(e, t, i) {
							var s = " ",
								n = e.level,
								r = e.dataLevel,
								o = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (r || ""),
								p = "valid" + n,
								_ = "errs__" + n,
								h = e.util.copy(e),
								l = "";
							h.level++;
							var f = "valid" + h.level,
								u = "i" + n,
								g = h.dataLevel = e.dataLevel + 1,
								y = "data" + g,
								v = e.baseId;
							if (s += "var " + _ + " = errors;var " + p + ";", Array.isArray(o)) {
								var b = e.schema.additionalItems;
								if (!1 === b) {
									s += " " + p + " = " + m + ".length <= " + o.length + "; ";
									var w = d;
									d = e.errSchemaPath + "/additionalItems", s += "  if (!" + p + ") {   ";
									var $ = $ || [];
									$.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'additionalItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { limit: " + o.length + " } ", !1 !== e.opts.messages && (s += " , message: 'should NOT have more than " + o.length + " items' "), e.opts.verbose && (s += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), s += " } ") : s += " {} ";
									var j = s;
									s = $.pop(), !e.compositeRule && c ? e.async ? s += " throw new ValidationError([" + j + "]); " : s += " validate.errors = [" + j + "]; return false; " : s += " var err = " + j + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } ", d = w, c && (l += "}", s += " else { ")
								}
								var k = o;
								if (k)
									for (var x, P = -1, q = k.length - 1; P < q;)
										if (x = k[P += 1], e.opts.strictKeywords ? "object" == typeof x && Object.keys(x).length > 0 : e.util.schemaHasRules(x, e.RULES.all)) {
											s += " " + f + " = true; if (" + m + ".length > " + P + ") { ";
											var E = m + "[" + P + "]";
											h.schema = x, h.schemaPath = a + "[" + P + "]", h.errSchemaPath = d + "/" + P, h.errorPath = e.util.getPathExpr(e.errorPath, P, e.opts.jsonPointers, !0), h.dataPathArr[g] = P;
											var T = e.validate(h);
											h.baseId = v, e.util.varOccurences(T, y) < 2 ? s += " " + e.util.varReplace(T, y, E) + " " : s += " var " + y + " = " + E + "; " + T + " ", s += " }  ", c && (s += " if (" + f + ") { ", l += "}")
										} if ("object" == typeof b && (e.opts.strictKeywords ? "object" == typeof b && Object.keys(b).length > 0 : e.util.schemaHasRules(b, e.RULES.all))) {
									h.schema = b, h.schemaPath = e.schemaPath + ".additionalItems", h.errSchemaPath = e.errSchemaPath + "/additionalItems", s += " " + f + " = true; if (" + m + ".length > " + o.length + ") {  for (var " + u + " = " + o.length + "; " + u + " < " + m + ".length; " + u + "++) { ", h.errorPath = e.util.getPathExpr(e.errorPath, u, e.opts.jsonPointers, !0);
									E = m + "[" + u + "]";
									h.dataPathArr[g] = u;
									T = e.validate(h);
									h.baseId = v, e.util.varOccurences(T, y) < 2 ? s += " " + e.util.varReplace(T, y, E) + " " : s += " var " + y + " = " + E + "; " + T + " ", c && (s += " if (!" + f + ") break; "), s += " } }  ", c && (s += " if (" + f + ") { ", l += "}")
								}
							} else if (e.opts.strictKeywords ? "object" == typeof o && Object.keys(o).length > 0 : e.util.schemaHasRules(o, e.RULES.all)) {
								h.schema = o, h.schemaPath = a, h.errSchemaPath = d, s += "  for (var " + u + " = 0; " + u + " < " + m + ".length; " + u + "++) { ", h.errorPath = e.util.getPathExpr(e.errorPath, u, e.opts.jsonPointers, !0);
								E = m + "[" + u + "]";
								h.dataPathArr[g] = u;
								T = e.validate(h);
								h.baseId = v, e.util.varOccurences(T, y) < 2 ? s += " " + e.util.varReplace(T, y, E) + " " : s += " var " + y + " = " + E + "; " + T + " ", c && (s += " if (!" + f + ") break; "), s += " }"
							}
							return c && (s += " " + l + " if (" + _ + " == errors) {"), s = e.util.cleanUpCode(s)
						},
						maximum: Ae,
						minimum: Ae,
						maxItems: De,
						minItems: De,
						maxLength: Re,
						minLength: Re,
						maxProperties: Ie,
						minProperties: Ie,
						multipleOf: function(e, t, i) {
							var s, n = " ",
								r = e.level,
								o = e.dataLevel,
								a = e.schema[t],
								d = e.schemaPath + e.util.getProperty(t),
								c = e.errSchemaPath + "/" + t,
								m = !e.opts.allErrors,
								p = "data" + (o || ""),
								_ = e.opts.$data && a && a.$data;
							_ ? (n += " var schema" + r + " = " + e.util.getData(a.$data, o, e.dataPathArr) + "; ", s = "schema" + r) : s = a, n += "var division" + r + ";if (", _ && (n += " " + s + " !== undefined && ( typeof " + s + " != 'number' || "), n += " (division" + r + " = " + p + " / " + s + ", ", e.opts.multipleOfPrecision ? n += " Math.abs(Math.round(division" + r + ") - division" + r + ") > 1e-" + e.opts.multipleOfPrecision + " " : n += " division" + r + " !== parseInt(division" + r + ") ", n += " ) ", _ && (n += "  )  "), n += " ) {   ";
							var h = h || [];
							h.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: 'multipleOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { multipleOf: " + s + " } ", !1 !== e.opts.messages && (n += " , message: 'should be multiple of ", n += _ ? "' + " + s : s + "'"), e.opts.verbose && (n += " , schema:  ", n += _ ? "validate.schema" + d : "" + a, n += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), n += " } ") : n += " {} ";
							var l = n;
							return n = h.pop(), !e.compositeRule && m ? e.async ? n += " throw new ValidationError([" + l + "]); " : n += " validate.errors = [" + l + "]; return false; " : n += " var err = " + l + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += "} ", m && (n += " else { "), n
						},
						not: function(e, t, i) {
							var s = " ",
								n = e.level,
								r = e.dataLevel,
								o = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (r || ""),
								p = "errs__" + n,
								_ = e.util.copy(e);
							_.level++;
							var h = "valid" + _.level;
							if (e.opts.strictKeywords ? "object" == typeof o && Object.keys(o).length > 0 : e.util.schemaHasRules(o, e.RULES.all)) {
								_.schema = o, _.schemaPath = a, _.errSchemaPath = d, s += " var " + p + " = errors;  ";
								var l, f = e.compositeRule;
								e.compositeRule = _.compositeRule = !0, _.createErrors = !1, _.opts.allErrors && (l = _.opts.allErrors, _.opts.allErrors = !1), s += " " + e.validate(_) + " ", _.createErrors = !0, l && (_.opts.allErrors = l), e.compositeRule = _.compositeRule = f, s += " if (" + h + ") {   ";
								var u = u || [];
								u.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: {} ", !1 !== e.opts.messages && (s += " , message: 'should NOT be valid' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), s += " } ") : s += " {} ";
								var g = s;
								s = u.pop(), !e.compositeRule && c ? e.async ? s += " throw new ValidationError([" + g + "]); " : s += " validate.errors = [" + g + "]; return false; " : s += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } else {  errors = " + p + "; if (vErrors !== null) { if (" + p + ") vErrors.length = " + p + "; else vErrors = null; } ", e.opts.allErrors && (s += " } ")
							} else s += "  var err =   ", !1 !== e.createErrors ? (s += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: {} ", !1 !== e.opts.messages && (s += " , message: 'should NOT be valid' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), s += " } ") : s += " {} ", s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", c && (s += " if (false) { ");
							return s
						},
						oneOf: function(e, t, i) {
							var s = " ",
								n = e.level,
								r = e.dataLevel,
								o = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (r || ""),
								p = "valid" + n,
								_ = "errs__" + n,
								h = e.util.copy(e),
								l = "";
							h.level++;
							var f = "valid" + h.level,
								u = h.baseId,
								g = "prevValid" + n,
								y = "passingSchemas" + n;
							s += "var " + _ + " = errors , " + g + " = false , " + p + " = false , " + y + " = null; ";
							var v = e.compositeRule;
							e.compositeRule = h.compositeRule = !0;
							var b = o;
							if (b)
								for (var w, $ = -1, j = b.length - 1; $ < j;) w = b[$ += 1], (e.opts.strictKeywords ? "object" == typeof w && Object.keys(w).length > 0 : e.util.schemaHasRules(w, e.RULES.all)) ? (h.schema = w, h.schemaPath = a + "[" + $ + "]", h.errSchemaPath = d + "/" + $, s += "  " + e.validate(h) + " ", h.baseId = u) : s += " var " + f + " = true; ", $ && (s += " if (" + f + " && " + g + ") { " + p + " = false; " + y + " = [" + y + ", " + $ + "]; } else { ", l += "}"), s += " if (" + f + ") { " + p + " = " + g + " = true; " + y + " = " + $ + "; }";
							return e.compositeRule = h.compositeRule = v, s += l + "if (!" + p + ") {   var err =   ", !1 !== e.createErrors ? (s += " { keyword: 'oneOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { passingSchemas: " + y + " } ", !1 !== e.opts.messages && (s += " , message: 'should match exactly one schema in oneOf' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), s += " } ") : s += " {} ", s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && c && (e.async ? s += " throw new ValidationError(vErrors); " : s += " validate.errors = vErrors; return false; "), s += "} else {  errors = " + _ + "; if (vErrors !== null) { if (" + _ + ") vErrors.length = " + _ + "; else vErrors = null; }", e.opts.allErrors && (s += " } "), s
						},
						pattern: function(e, t, i) {
							var s, n = " ",
								r = e.level,
								o = e.dataLevel,
								a = e.schema[t],
								d = e.schemaPath + e.util.getProperty(t),
								c = e.errSchemaPath + "/" + t,
								m = !e.opts.allErrors,
								p = "data" + (o || ""),
								_ = e.opts.$data && a && a.$data;
							_ ? (n += " var schema" + r + " = " + e.util.getData(a.$data, o, e.dataPathArr) + "; ", s = "schema" + r) : s = a, n += "if ( ", _ && (n += " (" + s + " !== undefined && typeof " + s + " != 'string') || "), n += " !" + (_ ? "(new RegExp(" + s + "))" : e.usePattern(a)) + ".test(" + p + ") ) {   ";
							var h = h || [];
							h.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: 'pattern' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { pattern:  ", n += _ ? "" + s : "" + e.util.toQuotedString(a), n += "  } ", !1 !== e.opts.messages && (n += " , message: 'should match pattern \"", n += _ ? "' + " + s + " + '" : "" + e.util.escapeQuotes(a), n += "\"' "), e.opts.verbose && (n += " , schema:  ", n += _ ? "validate.schema" + d : "" + e.util.toQuotedString(a), n += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), n += " } ") : n += " {} ";
							var l = n;
							return n = h.pop(), !e.compositeRule && m ? e.async ? n += " throw new ValidationError([" + l + "]); " : n += " validate.errors = [" + l + "]; return false; " : n += " var err = " + l + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += "} ", m && (n += " else { "), n
						},
						properties: function(e, t, i) {
							var s = " ",
								n = e.level,
								r = e.dataLevel,
								o = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (r || ""),
								p = "errs__" + n,
								_ = e.util.copy(e),
								h = "";
							_.level++;
							var l = "valid" + _.level,
								f = "key" + n,
								u = "idx" + n,
								g = _.dataLevel = e.dataLevel + 1,
								y = "data" + g,
								v = "dataProperties" + n,
								b = Object.keys(o || {}),
								w = e.schema.patternProperties || {},
								$ = Object.keys(w),
								j = e.schema.additionalProperties,
								k = b.length || $.length,
								x = !1 === j,
								P = "object" == typeof j && Object.keys(j).length,
								q = e.opts.removeAdditional,
								E = x || P || q,
								T = e.opts.ownProperties,
								S = e.baseId,
								A = e.schema.required;
							if (A && (!e.opts.$data || !A.$data) && A.length < e.opts.loopRequired) var D = e.util.toHash(A);
							if (s += "var " + p + " = errors;var " + l + " = true;", T && (s += " var " + v + " = undefined;"), E) {
								if (s += T ? " " + v + " = " + v + " || Object.keys(" + m + "); for (var " + u + "=0; " + u + "<" + v + ".length; " + u + "++) { var " + f + " = " + v + "[" + u + "]; " : " for (var " + f + " in " + m + ") { ", k) {
									if (s += " var isAdditional" + n + " = !(false ", b.length)
										if (b.length > 8) s += " || validate.schema" + a + ".hasOwnProperty(" + f + ") ";
										else {
											var R = b;
											if (R)
												for (var I = -1, F = R.length - 1; I < F;) Z = R[I += 1], s += " || " + f + " == " + e.util.toQuotedString(Z) + " "
										} if ($.length) {
										var O = $;
										if (O)
											for (var z = -1, C = O.length - 1; z < C;) ne = O[z += 1], s += " || " + e.usePattern(ne) + ".test(" + f + ") "
									}
									s += " ); if (isAdditional" + n + ") { "
								}
								if ("all" == q) s += " delete " + m + "[" + f + "]; ";
								else {
									var U = e.errorPath,
										L = "' + " + f + " + '";
									if (e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(e.errorPath, f, e.opts.jsonPointers)), x)
										if (q) s += " delete " + m + "[" + f + "]; ";
										else {
											s += " " + l + " = false; ";
											var N = d;
											d = e.errSchemaPath + "/additionalProperties", (te = te || []).push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'additionalProperties' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { additionalProperty: '" + L + "' } ", !1 !== e.opts.messages && (s += " , message: '", e.opts._errorDataPathProperty ? s += "is an invalid additional property" : s += "should NOT have additional properties", s += "' "), e.opts.verbose && (s += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), s += " } ") : s += " {} ";
											var M = s;
											s = te.pop(), !e.compositeRule && c ? e.async ? s += " throw new ValidationError([" + M + "]); " : s += " validate.errors = [" + M + "]; return false; " : s += " var err = " + M + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", d = N, c && (s += " break; ")
										}
									else if (P)
										if ("failing" == q) {
											s += " var " + p + " = errors;  ";
											var H = e.compositeRule;
											e.compositeRule = _.compositeRule = !0, _.schema = j, _.schemaPath = e.schemaPath + ".additionalProperties", _.errSchemaPath = e.errSchemaPath + "/additionalProperties", _.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, f, e.opts.jsonPointers);
											var B = m + "[" + f + "]";
											_.dataPathArr[g] = f;
											var W = e.validate(_);
											_.baseId = S, e.util.varOccurences(W, y) < 2 ? s += " " + e.util.varReplace(W, y, B) + " " : s += " var " + y + " = " + B + "; " + W + " ", s += " if (!" + l + ") { errors = " + p + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + m + "[" + f + "]; }  ", e.compositeRule = _.compositeRule = H
										} else {
											_.schema = j, _.schemaPath = e.schemaPath + ".additionalProperties", _.errSchemaPath = e.errSchemaPath + "/additionalProperties", _.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, f, e.opts.jsonPointers);
											B = m + "[" + f + "]";
											_.dataPathArr[g] = f;
											W = e.validate(_);
											_.baseId = S, e.util.varOccurences(W, y) < 2 ? s += " " + e.util.varReplace(W, y, B) + " " : s += " var " + y + " = " + B + "; " + W + " ", c && (s += " if (!" + l + ") break; ")
										} e.errorPath = U
								}
								k && (s += " } "), s += " }  ", c && (s += " if (" + l + ") { ", h += "}")
							}
							var V = e.opts.useDefaults && !e.compositeRule;
							if (b.length) {
								var Q = b;
								if (Q)
									for (var Z, G = -1, J = Q.length - 1; G < J;) {
										var Y = o[Z = Q[G += 1]];
										if (e.opts.strictKeywords ? "object" == typeof Y && Object.keys(Y).length > 0 : e.util.schemaHasRules(Y, e.RULES.all)) {
											var K = e.util.getProperty(Z),
												X = (B = m + K, V && void 0 !== Y.default);
											_.schema = Y, _.schemaPath = a + K, _.errSchemaPath = d + "/" + e.util.escapeFragment(Z), _.errorPath = e.util.getPath(e.errorPath, Z, e.opts.jsonPointers), _.dataPathArr[g] = e.util.toQuotedString(Z);
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
												if (D && D[Z]) {
													s += " if ( " + ee + " === undefined ", T && (s += " || ! Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(Z) + "') "), s += ") { " + l + " = false; ";
													U = e.errorPath, N = d;
													var te, ie = e.util.escapeQuotes(Z);
													e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(U, Z, e.opts.jsonPointers)), d = e.errSchemaPath + "/required", (te = te || []).push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { missingProperty: '" + ie + "' } ", !1 !== e.opts.messages && (s += " , message: '", e.opts._errorDataPathProperty ? s += "is a required property" : s += "should have required property \\'" + ie + "\\'", s += "' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), s += " } ") : s += " {} ";
													M = s;
													s = te.pop(), !e.compositeRule && c ? e.async ? s += " throw new ValidationError([" + M + "]); " : s += " validate.errors = [" + M + "]; return false; " : s += " var err = " + M + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", d = N, e.errorPath = U, s += " } else { "
												} else c ? (s += " if ( " + ee + " === undefined ", T && (s += " || ! Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(Z) + "') "), s += ") { " + l + " = true; } else { ") : (s += " if (" + ee + " !== undefined ", T && (s += " &&   Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(Z) + "') "), s += " ) { ");
												s += " " + W + " } "
											}
										}
										c && (s += " if (" + l + ") { ", h += "}")
									}
							}
							if ($.length) {
								var se = $;
								if (se)
									for (var ne, re = -1, oe = se.length - 1; re < oe;) {
										Y = w[ne = se[re += 1]];
										if (e.opts.strictKeywords ? "object" == typeof Y && Object.keys(Y).length > 0 : e.util.schemaHasRules(Y, e.RULES.all)) {
											_.schema = Y, _.schemaPath = e.schemaPath + ".patternProperties" + e.util.getProperty(ne), _.errSchemaPath = e.errSchemaPath + "/patternProperties/" + e.util.escapeFragment(ne), s += T ? " " + v + " = " + v + " || Object.keys(" + m + "); for (var " + u + "=0; " + u + "<" + v + ".length; " + u + "++) { var " + f + " = " + v + "[" + u + "]; " : " for (var " + f + " in " + m + ") { ", s += " if (" + e.usePattern(ne) + ".test(" + f + ")) { ", _.errorPath = e.util.getPathExpr(e.errorPath, f, e.opts.jsonPointers);
											B = m + "[" + f + "]";
											_.dataPathArr[g] = f;
											W = e.validate(_);
											_.baseId = S, e.util.varOccurences(W, y) < 2 ? s += " " + e.util.varReplace(W, y, B) + " " : s += " var " + y + " = " + B + "; " + W + " ", c && (s += " if (!" + l + ") break; "), s += " } ", c && (s += " else " + l + " = true; "), s += " }  ", c && (s += " if (" + l + ") { ", h += "}")
										}
									}
							}
							return c && (s += " " + h + " if (" + p + " == errors) {"), s = e.util.cleanUpCode(s)
						},
						propertyNames: function(e, t, i) {
							var s = " ",
								n = e.level,
								r = e.dataLevel,
								o = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (r || ""),
								p = "errs__" + n,
								_ = e.util.copy(e);
							_.level++;
							var h = "valid" + _.level;
							if (s += "var " + p + " = errors;", e.opts.strictKeywords ? "object" == typeof o && Object.keys(o).length > 0 : e.util.schemaHasRules(o, e.RULES.all)) {
								_.schema = o, _.schemaPath = a, _.errSchemaPath = d;
								var l = "key" + n,
									f = "idx" + n,
									u = "i" + n,
									g = "' + " + l + " + '",
									y = "data" + (_.dataLevel = e.dataLevel + 1),
									v = "dataProperties" + n,
									b = e.opts.ownProperties,
									w = e.baseId;
								b && (s += " var " + v + " = undefined; "), s += b ? " " + v + " = " + v + " || Object.keys(" + m + "); for (var " + f + "=0; " + f + "<" + v + ".length; " + f + "++) { var " + l + " = " + v + "[" + f + "]; " : " for (var " + l + " in " + m + ") { ", s += " var startErrs" + n + " = errors; ";
								var $ = l,
									j = e.compositeRule;
								e.compositeRule = _.compositeRule = !0;
								var k = e.validate(_);
								_.baseId = w, e.util.varOccurences(k, y) < 2 ? s += " " + e.util.varReplace(k, y, $) + " " : s += " var " + y + " = " + $ + "; " + k + " ", e.compositeRule = _.compositeRule = j, s += " if (!" + h + ") { for (var " + u + "=startErrs" + n + "; " + u + "<errors; " + u + "++) { vErrors[" + u + "].propertyName = " + l + "; }   var err =   ", !1 !== e.createErrors ? (s += " { keyword: 'propertyNames' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { propertyName: '" + g + "' } ", !1 !== e.opts.messages && (s += " , message: 'property name \\'" + g + "\\' is invalid' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), s += " } ") : s += " {} ", s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && c && (e.async ? s += " throw new ValidationError(vErrors); " : s += " validate.errors = vErrors; return false; "), c && (s += " break; "), s += " } }"
							}
							return c && (s += "  if (" + p + " == errors) {"), s = e.util.cleanUpCode(s)
						},
						required: function(e, t, i) {
							var s = " ",
								n = e.level,
								r = e.dataLevel,
								o = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (r || ""),
								p = "valid" + n,
								_ = e.opts.$data && o && o.$data;
							_ && (s += " var schema" + n + " = " + e.util.getData(o.$data, r, e.dataPathArr) + "; ");
							var h = "schema" + n;
							if (!_)
								if (o.length < e.opts.loopRequired && e.schema.properties && Object.keys(e.schema.properties).length) {
									var l = [],
										f = o;
									if (f)
										for (var u, g = -1, y = f.length - 1; g < y;) {
											u = f[g += 1];
											var v = e.schema.properties[u];
											v && (e.opts.strictKeywords ? "object" == typeof v && Object.keys(v).length > 0 : e.util.schemaHasRules(v, e.RULES.all)) || (l[l.length] = u)
										}
								} else l = o;
							if (_ || l.length) {
								var b = e.errorPath,
									w = _ || l.length >= e.opts.loopRequired,
									$ = e.opts.ownProperties;
								if (c)
									if (s += " var missing" + n + "; ", w) {
										_ || (s += " var " + h + " = validate.schema" + a + "; ");
										var j = "' + " + (T = "schema" + n + "[" + (P = "i" + n) + "]") + " + '";
										e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(b, T, e.opts.jsonPointers)), s += " var " + p + " = true; ", _ && (s += " if (schema" + n + " === undefined) " + p + " = true; else if (!Array.isArray(schema" + n + ")) " + p + " = false; else {"), s += " for (var " + P + " = 0; " + P + " < " + h + ".length; " + P + "++) { " + p + " = " + m + "[" + h + "[" + P + "]] !== undefined ", $ && (s += " &&   Object.prototype.hasOwnProperty.call(" + m + ", " + h + "[" + P + "]) "), s += "; if (!" + p + ") break; } ", _ && (s += "  }  "), s += "  if (!" + p + ") {   ", (E = E || []).push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { missingProperty: '" + j + "' } ", !1 !== e.opts.messages && (s += " , message: '", e.opts._errorDataPathProperty ? s += "is a required property" : s += "should have required property \\'" + j + "\\'", s += "' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), s += " } ") : s += " {} ";
										var k = s;
										s = E.pop(), !e.compositeRule && c ? e.async ? s += " throw new ValidationError([" + k + "]); " : s += " validate.errors = [" + k + "]; return false; " : s += " var err = " + k + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } else { "
									} else {
										s += " if ( ";
										var x = l;
										if (x)
											for (var P = -1, q = x.length - 1; P < q;) {
												A = x[P += 1], P && (s += " || "), s += " ( ( " + (F = m + (I = e.util.getProperty(A))) + " === undefined ", $ && (s += " || ! Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(A) + "') "), s += ") && (missing" + n + " = " + e.util.toQuotedString(e.opts.jsonPointers ? A : I) + ") ) "
											}
										s += ") {  ";
										var E;
										j = "' + " + (T = "missing" + n) + " + '";
										e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(b, T, !0) : b + " + " + T), (E = E || []).push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { missingProperty: '" + j + "' } ", !1 !== e.opts.messages && (s += " , message: '", e.opts._errorDataPathProperty ? s += "is a required property" : s += "should have required property \\'" + j + "\\'", s += "' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), s += " } ") : s += " {} ";
										k = s;
										s = E.pop(), !e.compositeRule && c ? e.async ? s += " throw new ValidationError([" + k + "]); " : s += " validate.errors = [" + k + "]; return false; " : s += " var err = " + k + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } else { "
									}
								else if (w) {
									_ || (s += " var " + h + " = validate.schema" + a + "; ");
									var T;
									j = "' + " + (T = "schema" + n + "[" + (P = "i" + n) + "]") + " + '";
									e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(b, T, e.opts.jsonPointers)), _ && (s += " if (" + h + " && !Array.isArray(" + h + ")) {  var err =   ", !1 !== e.createErrors ? (s += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { missingProperty: '" + j + "' } ", !1 !== e.opts.messages && (s += " , message: '", e.opts._errorDataPathProperty ? s += "is a required property" : s += "should have required property \\'" + j + "\\'", s += "' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), s += " } ") : s += " {} ", s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (" + h + " !== undefined) { "), s += " for (var " + P + " = 0; " + P + " < " + h + ".length; " + P + "++) { if (" + m + "[" + h + "[" + P + "]] === undefined ", $ && (s += " || ! Object.prototype.hasOwnProperty.call(" + m + ", " + h + "[" + P + "]) "), s += ") {  var err =   ", !1 !== e.createErrors ? (s += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { missingProperty: '" + j + "' } ", !1 !== e.opts.messages && (s += " , message: '", e.opts._errorDataPathProperty ? s += "is a required property" : s += "should have required property \\'" + j + "\\'", s += "' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), s += " } ") : s += " {} ", s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", _ && (s += "  }  ")
								} else {
									var S = l;
									if (S)
										for (var A, D = -1, R = S.length - 1; D < R;) {
											A = S[D += 1];
											var I = e.util.getProperty(A),
												F = (j = e.util.escapeQuotes(A), m + I);
											e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(b, A, e.opts.jsonPointers)), s += " if ( " + F + " === undefined ", $ && (s += " || ! Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(A) + "') "), s += ") {  var err =   ", !1 !== e.createErrors ? (s += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { missingProperty: '" + j + "' } ", !1 !== e.opts.messages && (s += " , message: '", e.opts._errorDataPathProperty ? s += "is a required property" : s += "should have required property \\'" + j + "\\'", s += "' "), e.opts.verbose && (s += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), s += " } ") : s += " {} ", s += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "
										}
								}
								e.errorPath = b
							} else c && (s += " if (true) {");
							return s
						},
						uniqueItems: function(e, t, i) {
							var s, n = " ",
								r = e.level,
								o = e.dataLevel,
								a = e.schema[t],
								d = e.schemaPath + e.util.getProperty(t),
								c = e.errSchemaPath + "/" + t,
								m = !e.opts.allErrors,
								p = "data" + (o || ""),
								_ = "valid" + r,
								h = e.opts.$data && a && a.$data;
							if (h ? (n += " var schema" + r + " = " + e.util.getData(a.$data, o, e.dataPathArr) + "; ", s = "schema" + r) : s = a, (a || h) && !1 !== e.opts.uniqueItems) {
								h && (n += " var " + _ + "; if (" + s + " === false || " + s + " === undefined) " + _ + " = true; else if (typeof " + s + " != 'boolean') " + _ + " = false; else { "), n += " var i = " + p + ".length , " + _ + " = true , j; if (i > 1) { ";
								var l = e.schema.items && e.schema.items.type,
									f = Array.isArray(l);
								if (!l || "object" == l || "array" == l || f && (l.indexOf("object") >= 0 || l.indexOf("array") >= 0)) n += " outer: for (;i--;) { for (j = i; j--;) { if (equal(" + p + "[i], " + p + "[j])) { " + _ + " = false; break outer; } } } ";
								else {
									n += " var itemIndices = {}, item; for (;i--;) { var item = " + p + "[i]; ";
									var u = "checkDataType" + (f ? "s" : "");
									n += " if (" + e.util[u](l, "item", !0) + ") continue; ", f && (n += " if (typeof item == 'string') item = '\"' + item; "), n += " if (typeof itemIndices[item] == 'number') { " + _ + " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } "
								}
								n += " } ", h && (n += "  }  "), n += " if (!" + _ + ") {   ";
								var g = g || [];
								g.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: 'uniqueItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { i: i, j: j } ", !1 !== e.opts.messages && (n += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), e.opts.verbose && (n += " , schema:  ", n += h ? "validate.schema" + d : "" + a, n += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), n += " } ") : n += " {} ";
								var y = n;
								n = g.pop(), !e.compositeRule && m ? e.async ? n += " throw new ValidationError([" + y + "]); " : n += " validate.errors = [" + y + "]; return false; " : n += " var err = " + y + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += " } ", m && (n += " else { ")
							} else m && (n += " if (true) { ");
							return n
						},
						validate: X
					},
					Oe = d.toHash,
					ze = function() {
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
					Ce = ["multipleOf", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "additionalItems", "maxItems", "minItems", "uniqueItems", "maxProperties", "minProperties", "required", "additionalProperties", "enum", "format", "const"],
					Ue = function(e, t) {
						for (var i = 0; i < t.length; i++) {
							e = JSON.parse(JSON.stringify(e));
							var s, n = t[i].split("/"),
								r = e;
							for (s = 1; s < n.length; s++) r = r[n[s]];
							for (s = 0; s < Ce.length; s++) {
								var o = Ce[s],
									a = r[o];
								a && (r[o] = {
									anyOf: [a, {
										$ref: "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#"
									}]
								})
							}
						}
						return e
					},
					Le = G.MissingRef,
					Ne = function e(t, i, s) {
						var n = this;
						if ("function" != typeof this._opts.loadSchema) throw new Error("options.loadSchema should be a function");
						"function" == typeof i && (s = i, i = void 0);
						var r = o(t).then((function() {
							var e = n._addSchema(t, void 0, i);
							return e.validate || function e(t) {
								try {
									return n._compile(t)
								} catch (s) {
									if (s instanceof Le) return function(s) {
										var r = s.missingSchema;
										if (c(r)) throw new Error("Schema " + r + " is loaded but " + s.missingRef + " cannot be resolved");
										var a = n._loadingSchemas[r];
										a || (a = n._loadingSchemas[r] = n._opts.loadSchema(r)).then(d, d);
										return a.then((function(e) {
											if (!c(r)) return o(e).then((function() {
												c(r) || n.addSchema(e, r, void 0, i)
											}))
										})).then((function() {
											return e(t)
										}));

										function d() {
											delete n._loadingSchemas[r]
										}

										function c(e) {
											return n._refs[e] || n._schemas[e]
										}
									}(s);
									throw s
								}
							}(e)
						}));
						s && r.then((function(e) {
							s(null, e)
						}), s);
						return r;

						function o(t) {
							var i = t.$schema;
							return i && !n.getSchema(i) ? e.call(n, {
								$ref: i
							}, !0) : Promise.resolve()
						}
					};
				var Me = function(e, t, i) {
						var s, n, r = " ",
							o = e.level,
							a = e.dataLevel,
							d = e.schema[t],
							c = e.schemaPath + e.util.getProperty(t),
							m = e.errSchemaPath + "/" + t,
							p = !e.opts.allErrors,
							_ = "data" + (a || ""),
							h = "valid" + o,
							l = "errs__" + o,
							f = e.opts.$data && d && d.$data;
						f ? (r += " var schema" + o + " = " + e.util.getData(d.$data, a, e.dataPathArr) + "; ", n = "schema" + o) : n = d;
						var u, g, y, v, b, w = "definition" + o,
							$ = this.definition,
							j = "";
						if (f && $.$data) {
							b = "keywordValidate" + o;
							var k = $.validateSchema;
							r += " var " + w + " = RULES.custom['" + t + "'].definition; var " + b + " = " + w + ".validate;"
						} else {
							if (!(v = e.useCustomRule(this, d, e.schema, e))) return;
							n = "validate.schema" + c, b = v.code, u = $.compile, g = $.inline, y = $.macro
						}
						var x = b + ".errors",
							P = "i" + o,
							q = "ruleErr" + o,
							E = $.async;
						if (E && !e.async) throw new Error("async keyword in sync schema");
						if (g || y || (r += x + " = null;"), r += "var " + l + " = errors;var " + h + ";", f && $.$data && (j += "}", r += " if (" + n + " === undefined) { " + h + " = true; } else { ", k && (j += "}", r += " " + h + " = " + w + ".validateSchema(" + n + "); if (" + h + ") { ")), g) $.statements ? r += " " + v.validate + " " : r += " " + h + " = " + v.validate + "; ";
						else if (y) {
							var T = e.util.copy(e);
							j = "";
							T.level++;
							var S = "valid" + T.level;
							T.schema = v.validate, T.schemaPath = "";
							var A = e.compositeRule;
							e.compositeRule = T.compositeRule = !0;
							var D = e.validate(T).replace(/validate\.schema/g, b);
							e.compositeRule = T.compositeRule = A, r += " " + D
						} else {
							(O = O || []).push(r), r = "", r += "  " + b + ".call( ", e.opts.passContext ? r += "this" : r += "self", u || !1 === $.schema ? r += " , " + _ + " " : r += " , " + n + " , " + _ + " , validate.schema" + e.schemaPath + " ", r += " , (dataPath || '')", '""' != e.errorPath && (r += " + " + e.errorPath);
							var R = a ? "data" + (a - 1 || "") : "parentData",
								I = a ? e.dataPathArr[a] : "parentDataProperty",
								F = r += " , " + R + " , " + I + " , rootData )  ";
							r = O.pop(), !1 === $.errors ? (r += " " + h + " = ", E && (r += "await "), r += F + "; ") : r += E ? " var " + (x = "customErrors" + o) + " = null; try { " + h + " = await " + F + "; } catch (e) { " + h + " = false; if (e instanceof ValidationError) " + x + " = e.errors; else throw e; } " : " " + x + " = null; " + h + " = " + F + "; "
						}
						if ($.modifying && (r += " if (" + R + ") " + _ + " = " + R + "[" + I + "];"), r += "" + j, $.valid) p && (r += " if (true) { ");
						else {
							var O;
							r += " if ( ", void 0 === $.valid ? (r += " !", r += y ? "" + S : "" + h) : r += " " + !$.valid + " ", r += ") { ", s = this.keyword, (O = O || []).push(r), r = "", (O = O || []).push(r), r = "", !1 !== e.createErrors ? (r += " { keyword: '" + (s || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { keyword: '" + this.keyword + "' } ", !1 !== e.opts.messages && (r += " , message: 'should pass \"" + this.keyword + "\" keyword validation' "), e.opts.verbose && (r += " , schema: validate.schema" + c + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " "), r += " } ") : r += " {} ";
							var z = r;
							r = O.pop(), !e.compositeRule && p ? e.async ? r += " throw new ValidationError([" + z + "]); " : r += " validate.errors = [" + z + "]; return false; " : r += " var err = " + z + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
							var C = r;
							r = O.pop(), g ? $.errors ? "full" != $.errors && (r += "  for (var " + P + "=" + l + "; " + P + "<errors; " + P + "++) { var " + q + " = vErrors[" + P + "]; if (" + q + ".dataPath === undefined) " + q + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + q + ".schemaPath === undefined) { " + q + '.schemaPath = "' + m + '"; } ', e.opts.verbose && (r += " " + q + ".schema = " + n + "; " + q + ".data = " + _ + "; "), r += " } ") : !1 === $.errors ? r += " " + C + " " : (r += " if (" + l + " == errors) { " + C + " } else {  for (var " + P + "=" + l + "; " + P + "<errors; " + P + "++) { var " + q + " = vErrors[" + P + "]; if (" + q + ".dataPath === undefined) " + q + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + q + ".schemaPath === undefined) { " + q + '.schemaPath = "' + m + '"; } ', e.opts.verbose && (r += " " + q + ".schema = " + n + "; " + q + ".data = " + _ + "; "), r += " } } ") : y ? (r += "   var err =   ", !1 !== e.createErrors ? (r += " { keyword: '" + (s || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { keyword: '" + this.keyword + "' } ", !1 !== e.opts.messages && (r += " , message: 'should pass \"" + this.keyword + "\" keyword validation' "), e.opts.verbose && (r += " , schema: validate.schema" + c + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " "), r += " } ") : r += " {} ", r += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && p && (e.async ? r += " throw new ValidationError(vErrors); " : r += " validate.errors = vErrors; return false; ")) : !1 === $.errors ? r += " " + C + " " : (r += " if (Array.isArray(" + x + ")) { if (vErrors === null) vErrors = " + x + "; else vErrors = vErrors.concat(" + x + "); errors = vErrors.length;  for (var " + P + "=" + l + "; " + P + "<errors; " + P + "++) { var " + q + " = vErrors[" + P + "]; if (" + q + ".dataPath === undefined) " + q + ".dataPath = (dataPath || '') + " + e.errorPath + ";  " + q + '.schemaPath = "' + m + '";  ', e.opts.verbose && (r += " " + q + ".schema = " + n + "; " + q + ".data = " + _ + "; "), r += " } } else { " + C + " } "), r += " } ", p && (r += " else { ")
						}
						return r
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
					Ze = {
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
					Ge = {
						$schema: He,
						$id: Be,
						title: We,
						definitions: Ve,
						type: Qe,
						properties: Ze,
						default: !0
					},
					Je = n(Object.freeze({
						__proto__: null,
						$schema: He,
						$id: Be,
						title: We,
						definitions: Ve,
						type: Qe,
						properties: Ze,
						default: Ge
					})),
					Ye = {
						$id: "https://github.com/epoberezkin/ajv/blob/master/lib/definition_schema.js",
						definitions: {
							simpleTypes: Je.definitions.simpleTypes
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
							type: Je.properties.type,
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
					Ke = /^[a-z_$][a-z0-9_$-]*$/i,
					Xe = function(e, t) {
						var i = this.RULES;
						if (i.keywords[e]) throw new Error("Keyword " + e + " is already defined");
						if (!Ke.test(e)) throw new Error("Keyword " + e + " is not a valid identifier");
						if (t) {
							this.validateKeyword(t, !0);
							var s = t.type;
							if (Array.isArray(s))
								for (var n = 0; n < s.length; n++) o(e, s[n], t);
							else o(e, s, t);
							var r = t.metaSchema;
							r && (t.$data && this._opts.$data && (r = {
								anyOf: [r, {
									$ref: "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#"
								}]
							}), t.validateSchema = this.compile(r, !0))
						}

						function o(e, t, s) {
							for (var n, r = 0; r < i.length; r++) {
								var o = i[r];
								if (o.type == t) {
									n = o;
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
						var s = this._validateKeyword = this._validateKeyword || this.compile(Ye, !0);
						if (s(t)) return !0;
						e.errors = s.errors;
						if (i) throw new Error("custom keyword definition is invalid: " + this.errorsText(s.errors));
						return !1
					};
				var st = "http://json-schema.org/draft-07/schema#",
					nt = "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#",
					rt = "Meta-schema for $data reference (JSON Schema extension proposal)",
					ot = ["$data"],
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
						description: rt,
						type: "object",
						required: ot,
						properties: at,
						additionalProperties: !1
					},
					ct = n(Object.freeze({
						__proto__: null,
						$schema: st,
						$id: nt,
						description: rt,
						type: "object",
						required: ot,
						properties: at,
						additionalProperties: !1,
						default: dt
					})),
					mt = lt;
				lt.prototype.validate = function(e, t) {
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
				}, lt.prototype.compile = function(e, t) {
					var i = this._addSchema(e, void 0, t);
					return i.validate || this._compile(i)
				}, lt.prototype.addSchema = function(e, t, i, s) {
					if (Array.isArray(e)) {
						for (var n = 0; n < e.length; n++) this.addSchema(e[n], void 0, i, s);
						return this
					}
					var r = this._getId(e);
					if (void 0 !== r && "string" != typeof r) throw new Error("schema id must be string");
					return bt(this, t = O.normalizeId(t || r)), this._schemas[t] = this._addSchema(e, i, s, !0), this
				}, lt.prototype.addMetaSchema = function(e, t, i) {
					return this.addSchema(e, t, i, !0), this
				}, lt.prototype.validateSchema = function(e, t) {
					var i = e.$schema;
					if (void 0 !== i && "string" != typeof i) throw new Error("$schema must be a string");
					if (!(i = i || this._opts.defaultMeta || function(e) {
							var t = e._opts.meta;
							return e._opts.defaultMeta = "object" == typeof t ? e._getId(t) || t : e.getSchema(pt) ? pt : void 0, e._opts.defaultMeta
						}(this))) return this.logger.warn("meta-schema not available"), this.errors = null, !0;
					var s = this.validate(i, e);
					if (!s && t) {
						var n = "schema is invalid: " + this.errorsText();
						if ("log" != this._opts.validateSchema) throw new Error(n);
						this.logger.error(n)
					}
					return s
				}, lt.prototype.getSchema = function(e) {
					var t = ft(this, e);
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
										r = i.baseId,
										o = ie.call(e, s, n, void 0, r);
									return e._fragments[t] = new I({
										ref: t,
										fragment: !0,
										schema: s,
										root: n,
										baseId: r,
										validate: o
									}), o
								}
							}(this, e)
					}
				}, lt.prototype.removeSchema = function(e) {
					if (e instanceof RegExp) return ut(this, this._schemas, e), ut(this, this._refs, e), this;
					switch (typeof e) {
						case "undefined":
							return ut(this, this._schemas), ut(this, this._refs), this._cache.clear(), this;
						case "string":
							var t = ft(this, e);
							return t && this._cache.del(t.cacheKey), delete this._schemas[e], delete this._refs[e], this;
						case "object":
							var i = this._opts.serialize,
								s = i ? i(e) : e;
							this._cache.del(s);
							var n = this._getId(e);
							n && (n = O.normalizeId(n), delete this._schemas[n], delete this._refs[n])
					}
					return this
				}, lt.prototype.addFormat = function(e, t) {
					"string" == typeof t && (t = new RegExp(t));
					return this._formats[e] = t, this
				}, lt.prototype.errorsText = function(e, t) {
					if (!(e = e || this.errors)) return "No errors";
					for (var i = void 0 === (t = t || {}).separator ? ", " : t.separator, s = void 0 === t.dataVar ? "data" : t.dataVar, n = "", r = 0; r < e.length; r++) {
						var o = e[r];
						o && (n += s + o.dataPath + " " + o.message + i)
					}
					return n.slice(0, -i.length)
				}, lt.prototype._addSchema = function(e, t, i, s) {
					if ("object" != typeof e && "boolean" != typeof e) throw new Error("schema should be object or boolean");
					var n = this._opts.serialize,
						r = n ? n(e) : e,
						o = this._cache.get(r);
					if (o) return o;
					s = s || !1 !== this._opts.addUsedSchema;
					var a = O.normalizeId(this._getId(e));
					a && s && bt(this, a);
					var d, c = !1 !== this._opts.validateSchema && !t;
					c && !(d = a && a == O.normalizeId(e.$schema)) && this.validateSchema(e, !0);
					var m = O.ids.call(this, e),
						p = new I({
							id: a,
							schema: e,
							localRefs: m,
							cacheKey: r,
							meta: i
						});
					"#" != a[0] && s && (this._refs[a] = p);
					this._cache.put(r, p), c && d && this.validateSchema(e, !0);
					return p
				}, lt.prototype._compile = function(e, t) {
					if (e.compiling) return e.validate = n, n.schema = e.schema, n.errors = null, n.root = t || n, !0 === e.schema.$async && (n.$async = !0), n;
					var i, s;
					e.compiling = !0, e.meta && (i = this._opts, this._opts = this._metaOpts);
					try {
						s = ie.call(this, e.schema, t, e.localRefs)
					} catch (r) {
						throw delete e.validate, r
					} finally {
						e.compiling = !1, e.meta && (this._opts = i)
					}
					return e.validate = s, e.refs = s.refs, e.refVal = s.refVal, e.root = s.root, s;

					function n() {
						var t = e.validate,
							i = t.apply(this, arguments);
						return n.errors = t.errors, i
					}
				}, lt.prototype.compileAsync = Ne, lt.prototype.addKeyword = Xe, lt.prototype.getKeyword = et, lt.prototype.removeKeyword = tt, lt.prototype.validateKeyword = it, lt.ValidationError = G.Validation, lt.MissingRefError = G.MissingRef, lt.$dataMetaSchema = Ue;
				var pt = "http://json-schema.org/draft-07/schema",
					_t = ["removeAdditional", "useDefaults", "coerceTypes", "strictDefaults"],
					ht = ["/properties"];

				function lt(e) {
					if (!(this instanceof lt)) return new lt(e);
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
						}(this), this._schemas = {}, this._refs = {}, this._fragments = {}, this._formats = je(e.format), this._cache = e.cache || new pe, this._loadingSchemas = {}, this._compilations = [], this.RULES = ze(), this._getId = function(e) {
							switch (e.schemaId) {
								case "auto":
									return vt;
								case "id":
									return gt;
								default:
									return yt
							}
						}(e), e.loopRequired = e.loopRequired || 1 / 0, "property" == e.errorDataPath && (e._errorDataPathProperty = !0), void 0 === e.serialize && (e.serialize = K), this._metaOpts = function(e) {
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
							var i = Je;
							e._opts.$data && (i = Ue(i, ht));
							e.addMetaSchema(i, pt, !0), e._refs["http://json-schema.org/schema"] = pt
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

				function ft(e, t) {
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
				class $t {
					constructor(e) {
						this.ajv = new mt;
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

				function jt(e) {
					var t = {};
					return function e(t, i, s) {
						for (var n in t)
							if (Object.prototype.hasOwnProperty.call(t, n)) {
								var r;
								r = null == s ? n : s + "_" + n;
								var o = t[n];
								"object" == typeof o ? e(o, i, r) : i[r] = o
							}
					}(e, t, null), t
				}
			}).call(this, i("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@reddit/event-schema-registry/dist/esm/index.js": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return Wt
			}));
			var s = {
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
				n = {
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
				r = {
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
				o = {
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
				a = {
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
				d = {
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
				c = {
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
				m = {
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
				p = {
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
				_ = {
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
				h = {
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
				l = {
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
				f = {
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
				u = {
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
				g = {
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
				y = {
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
				v = {
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
				b = {
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
				w = {
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
				$ = {
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
				j = {
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
				k = {
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
				x = {
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
				P = {
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
				q = {
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
				E = {
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
				T = {
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
				S = {
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
					required: ["adblock_enabled", "user_has_premium", "source", "session_id", "client_timestamp", "uuid", "user_id", "user_is_premium_subscriber", "noun", "user_logged_in", "request_base_url", "action_info_page_type", "screen_view_type", "app_name", "session_created_timestamp", "request_domain", "action"],
					$schema: "http://json-schema.org/draft-07/schema#",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}]
				},
				A = {
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
				D = {
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
				R = {
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
				I = {
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
				F = {
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
				O = {
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
				z = {
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
				C = {
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
				U = {
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
				L = {
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
				N = {
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
				M = {
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
				H = {
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
				B = {
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
				W = {
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
				V = {
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
				Q = {
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
				Z = {
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
				G = {
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
				J = {
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
				Y = {
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
				K = {
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
				X = {
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
				ee = {
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
				te = {
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
				ie = {
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
				se = {
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
				ne = {
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
				re = {
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
				oe = {
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
				ae = {
					$id: "http://com.reddit/schemas/field_definitions/account_label/account_label.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "A label associated with reddit account.",
					definitions: {
						id: {
							type: "string",
							description: "Unique identifier for the label being acted on.",
							pattern: "^[0-9]+$"
						},
						type: {
							type: "string",
							description: "Type of label.\n\n    As of writing this the type will always be high_profile.\n    But this can change later to other label types as well.",
							enums: ["high_profile", "advertiser", "employee", "moderator", "moderator_bot", "public_figure"]
						},
						name: {
							type: "string",
							description: "The string representation of the label."
						}
					}
				},
				de = {
					$id: "http://com.reddit/schemas/field_definitions/action/action_info.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Informational fields about different actions that occur on Reddit.\n\nThis struct is deliberately left generic, because many of the fields here could be used between\ndifferent types of user actions.\n\nIt is also deliberately named, to avoid conflict with the top level `action` field.",
					definitions: {
						count: {
							type: "integer",
							description: "Generic counter for actions.",
							minimum: 0
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
							description: "Generic field giving human-readable context for an action.",
							pattern: "^[\\x00-\\x7F]+$"
						},
						pane_name: {
							type: "string",
							description: "Name of the pane for the community mod tools."
						},
						relative_position: {
							type: "integer",
							description: "The relative position of an entity prior to any client-side manipulation.\n\n    For example, search results for posts and subreddits can appear stacked. This is used to report the original rank\n    of the item as provided by the search results, instead of exactly as presented in the UI.",
							minimum: 0
						},
						retried: {
							type: "boolean",
							description: "Determines if an event is a retry of a previous action."
						},
						position: {
							type: "integer",
							description: "The position of an entity being clicked or selected.\n\n    For example, voting on the 5th post in the feed.    skip_validation:False",
							minimum: 0
						},
						type: {
							type: "string",
							description: "Additional context field for actions.",
							enums: ["1_day_ban", "3_day_ban", "5_day_ban", "remove_1_day_ban", "remove_3_day_ban", "remove_5_day_ban", "disenfranchise_user", "remove_disenfranchise_user", "hardban", "unhardban", "neuter", "unneuter", "permanently_suspend_user", "remove_permanently_suspend_user", "warn_user", "remove_warn_user", "remove", "approve", "disapprove", "copyright_takedown", "copyright_restore", "mark_spam", "spam", "mark_not_spam", "lock", "unlock", "mark_nsfw", "unmark_nsfw", "mark_spoiler", "unmark_spoiler", "edit_flair", "ticky", "unsticky", "distinguish_admin", "undistinguish_admin", "distinguish_employee", "undistinguish_employee", "produce_user_data_export", "delete_legal_request_data", "download_legal_request_data", "preserve_legal_request", "notify_user", "send_personal_message", "content_restore", "content_remove", "reddit", "google", "apple", "magic_link", "apple", "gmail", "delete_video", "dedupe", "contractor", "copyright", "csai", "dmca_takedown", "aug2019", "chat_enabled", "best_sort_pnorm", "popular", "time_on_subreddit", "trending_interest_signal", "ml_popular", "ml_personalized", "georelevant", "ml_popular_ml_georelevant_popular_mix", "ml_popular_ml_georelevant_country", "ml_popular_ml_georelevant_city", "ml_popular_ml_georelevant_subdivision", "mlt_post", "geo_block", "un_geo_block", "verify_email", "email_external_verification", "profile_overview", "profile_submitted", "profile_saved", "profile_comments", "profile_posts", "undetermined", "permanent", "transient", "typing_indicator", "hide_notification", "hide_subreddit", "hide_updates", "disable_notification_type"]
						},
						setting_value: {
							type: "string",
							description: "Generic field used when setting prefs, subreddit rules, etc.\n\n    This field is not intended to contain the state of a setting, but rather what the current action is doing.\n    For example, when adding a blacklisted domain to a subreddit, the domain would go in this field.",
							pattern: "^[\\x00-\\x7F]+$"
						},
						page_type: {
							type: "string",
							description: "Type of page, e.g. chat or post_detail, on which a particular action happened on.",
							enums: ["account_manager", "activity", "all", "chat", "chat_fullscreen", "comment", "community", "friends", "full_search_posts", "full_search_subreddits", "full_search_users", "home", "in_app_browser", "inbox", "messages", "moderation_pages_banned", "moderation_pages_contributors", "moderation_pages_moderators", "moderation_pages_muted", "modqueue_edited", "modqueue_queue", "modqueue_reports", "modqueue_spam", "modqueue_unmoderated", "mod_mail", "multireddit", "my_subscriptions", "news", "news_initial_setup", "onboarding_community_recommendations", "onboarding_post_detail", "original_content", "popular", "post_detail", "post_submit", "preview_community", "profile", "profile_about", "push_notification_dialog", "push_notification_dialog_confirmed", "push_notification_dialog_denied", "push_notification_token_received", "safari_view_controller", "search_history", "search_results", "single_comment_thread", "subreddit_feed_search", "subreddit_feed_search_posts", "subreddit_mod_menu", "typeahead_search", "update_email", "update_password", "billing_overview", "creation", "dashboard", "edit_ad", "edit_adgroup", "edit_billing", "edit_business", "edit_campaign", "permissions", "review", "setup_billing", "switch_user", "theater_mode", "user_sidebar", "user_hovercard", "user_flair_picker", "post_flair_picker", "user_flair_editor", "post_flair_editor", "post_flair_management", "user_flair_management", "search_results_best", "search_results_communities", "search_results_users", "search_results_posts", "search_results_media", "saved_posts", "explore", "search_results_games", "search_results_zero_state", "collection", "settings", "settings_account", "settings_notifications", "settings_feed", "settings_privacy", "settings_premium", "custom_feed", "stream_player", "stream_recorder", "stream_intro", "category_feed", "subreddit_wiki", "topic", "leaderboard", "layer_maker", "welcome", "signup", "login", "logged_out_login_signup", "onboarding_interest", "onboarding_community_recommendations", "link_account", "link_account_password", "community_overflow", "mod_tools", "community_name", "community_description", "community_confirmation", "fullscreen", "user_data_request", "community_primary_topic_selection", "community_access", "community_icon", "community_icon_photo_upload", "community_icon_photo_crop", "community_creation_loading", "spamurai", "subreddit_mention_create_community", "post_type", "discovery", "language_picker", "crowdsource_feed_geo", "geo_entry", "account_settings", "create_password", "confirm_password", "bottom_sheet_login", "recommended_video_feed", "chat_tab", "create_chat", "chat_invite", "share_to_chat", "moderation_pages_edit", "survey_amateur_advice", "survey_drugs_alcohol", "survey_nudity", "survey_profanity", "survey_guns_weapons", "survey_gambling", "survey_drug_use", "survey_alcohol_tobacco", "survey_weapons_gambling", "survey_sex", "survey_violence", "survey_mature_themes", "survey_intro", "survey_rating_summary", "survey_rating_review", "moderation_pages_modqueue", "moderation_pages_unmoderated", "moderation_pages_rules", "moderation_pages_spam", "moderation_pages_wiki", "moderation_pages_log", "moderation_pages_flair", "moderation_pages_postflair", "moderation_pages_wikibanned", "moderation_pages_userflair", "moderation_pages_reports", "moderation_pages_traffic", "moderation_pages_removal", "moderation_pages_emojis", "moderation_pages_edited", "moderation_pages_settings", "moderation_pages_awards", "moderation_pages_chat", "moderation_pages_badges", "moderation_pages_wikicontributors", "custom_feeds", "saved_comments", "chat_add_to_group", "chat_add_to_room", "chat_settings", "compose_message", "private_message_thread", "create_chat_room", "room_preview", "room_invite", "group_invite", "chat_members", "powerups_marketing", "powerups_education", "powerups_cancel_confirmation", "coins_marketing", "premium_marketing", "category_manager", "profile_history_recent", "profile_history_upvoted", "prediction_modal", "awarding_modal", "profile_history_downvoted", "profile_history_hidden", "two_factor", "forgot_password", "moderating_feed", "location_based_post_privacy", "post_select_community", "media_selection", "post_composer_subreddit_rules", "settings_profile", "pending_posts", "edit_post", "draft_posts", "news_topics_selector", "moderation_pages_broadcasting", "search_dropdown", "awarded", "community_alerts", "settings_blocked_accounts", "community_info", "crosspost_submit", "add_caption", "edit_video", "choose_location_country", "choose_location_state", "edit_custom_feed", "awarding_edit_options", "given_awards_list", "premium_preferences", "chat_invitation_inbox", "down_to_chat_loading", "down_to_chat_safety", "post_menu", "report_file_complaint", "report_sent_confirmation", "report_crisis_line", "switch_accounts", "change_username", "change_username_confirmation", "change_username_success", "custom_feed_add_communities", "report_reason_list", "ad_video_link_preview", "livestream_dialog", "broadcast_end", "for_you_rpan_feed", "post_to_post_video_feed", "for_you_video_feed", "snoovatar_builder", "schedule_post_composer", "schedule_post_feed", "seo_directory", "report_landing_page", "report_subcategories", "report_thank_you", "user_survey", "magic_link", "magic_link_confirmation", "post_creation", "post_creation_review", "signup_upsell_banner_welcome", "signup_upsell_banner_redditor", "signup_upsell_banner_discuss", "signup_upsell_banner_personalize"]
						}
					}
				},
				ce = {
					$id: "http://com.reddit/schemas/field_definitions/action/expand.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Metadata fields about post expands.",
					definitions: {
						provider: {
							type: "string",
							description: "If we have an expando on the site, who provided it?\n\n    It's either first-party (through us) or through Embedly.",
							enums: ["reddit", "embedly"]
						}
					}
				},
				me = {
					$id: "http://com.reddit/schemas/field_definitions/action/share.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields related to sharing content. *",
					definitions: {
						target: {
							type: "string",
							description: 'The app through which content is being shared.\n\n    The value can change depending on the app_name. On android, it is the package name the user shared to,\n    e.g. "com.instagram.android".',
							pattern: "^([A-Za-z][A-Za-z0-9\\._]+)$"
						},
						id: {
							type: "string",
							description: "The id of the object returned from the external account.",
							pattern: "^.+$"
						}
					}
				},
				pe = {
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
							description: "Widget type, e.g. a button or moderator widget.",
							pattern: "^(rules|community_list|button|text|image|moderators|calendar|overlay)_widget$"
						}
					}
				},
				_e = {
					$id: "http://com.reddit/schemas/field_definitions/ad/programmatic.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Unique identifier for the ad being acted on.\n\n    format:^[0-9]+$\n    */\n    1: optional string id\n    /**\n    The name of this ad set by the advertiser.\n\n    format:^.{1,200}$\n    */\n    2: optional string name\n    /** The outbound URL to direct to when this ad is clicked. */\n    3: optional string click_url\n    /** A list of third party trackers attached to this ad. */\n    4: optional list<string> third_party_trackers\n    /** The status of the ad as configured by the advertiser. */\n    5: optional adtypedefs.ConfiguredStatus configured_status\n    /** The status of the ad as calculated by the backend. */\n    6: optional adtypedefs.EffectiveStatus effective_status\n    /**\n    The approval status of this ad.\n\n    categories:approval,deferred,pending,rejected,running,suspended,whitelisted\n    */\n    7: optional string admin_approval\n    /** A list of third party pixel URLs to fire when the user clicks on this ad. */\n    8: optional list<string> click_trackers\n    /** A list of classifications for an ad. */\n    9: optional list<adtypedefs.Classification> classifications\n    /**\n    The reason that this ad was rejected.\n\n    categories:adult_general,alcohol,bridge_page,broken_url,capitalization,content\n    categories:counterfeit_goods,dating,deceptive,disclosure_proper_accreditation,display_url\n    categories:email_gated,exceeding_characters,gambling,grammar,hazardous_products,health_general\n    categories:illegal_fraud_misleading,improper_certification_pharma,inability_to_interact\n    categories:inappropriate_targeting,live_animals,mature_rated_video,nsfw_18_profile,nsfw_hashtag\n    categories:nsfw_only,nudity,obscene_offensive,paid_fantasy_sports,personal_information\n    categories:pharmaceutical_medical_products,political_advertisements,political_video,porn_video\n    categories:profanity,prohibited_advertisements,prohibited_products_services,punctuation,quality\n    categories:redirect_url,rehab_addiction_centers,resale_of_event_tickets,shorten_url,spelling\n    categories:style_policies_general,supplements,suspension,symbols_emojis,third_party_rights\n    categories:trade_policies,unrelated_landing_page,url_general,verify_authorized_reseller\n    categories:verify_authorized_ticket_reseller,verify_id,video_ads\n    */\n    10: optional string rejection_reason\n    /** Expiration date of forced Ad Preview */\n    11: optional typedefs.Timestamp preview_expiry_timestamp\n}\n\n/** Fields related to programmatic ads. *",
					definitions: {
						ad_unit: {
							type: "string",
							description: "Ad description which includes device, size and placement.\n\n    example: 'Desktop 300x250 ATF'",
							pattern: "^.+\\s.+\\s.+$"
						},
						count: {
							type: "integer",
							description: "Defaults to 1. Relevant if marketing decides to do ad aggregation.",
							minimum: 0
						},
						partner: {
							type: "string",
							description: "The partner who won the impression.",
							pattern: "^.+$"
						},
						type: {
							type: "string",
							description: "Ad type, in house or programmatic.",
							enums: ["house_ad", "programmatic_ad"]
						}
					}
				},
				he = {
					$id: "http://com.reddit/schemas/field_definitions/adevent/ad_brand_safety.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the brand safety properties of an ad.",
					definitions: {
						tier: {
							type: "string",
							description: "The brand safety tier of the ad request context.",
							enums: ["limited", "standard", "expanded"]
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
				le = {
					$id: "http://com.reddit/schemas/field_definitions/adevent/ad_click.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the post click properties of an ad",
					definitions: {
						landing_page_duration: {
							type: "integer",
							description: "The duration in milliseconds a user spends viewing an ad\n\n    The delta in milliseconds between the timestamp when a user clicks an ad and leaves Reddit to the timestamp\n    when a user returns to Reddit. This field should be in milliseconds and be the length an ad was viewed for.\n    It is a delta not a timestamp.\n\n    For example, if a user clicks an ad at time 100 and returns to Reddit at time 2000, then this value would be 1900",
							minimum: 0
						}
					}
				},
				fe = {
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
				ue = {
					$id: "http://com.reddit/schemas/field_definitions/adevent/ad_push.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the properties of any reason to shift the placement of an ad.",
					definitions: {
						direction: {
							type: "string",
							description: "Indicates whether push was due to post above or below the ad.",
							enums: ["above", "below"]
						},
						push_keyword: {
							type: "string",
							description: "A keyword that was brand unsafe, causing a push.",
							pattern: "^.*$"
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
				ge = {
					$id: "http://com.reddit/schemas/field_definitions/adevent/ad_request.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the attributes of an ad request.",
					definitions: {
						first_chunk: {
							type: "boolean",
							description: "Whether the request to the ad server is for the first chunk of the listing page."
						},
						post_links: {
							type: "array",
							description: "List of posts received (as Thing fullnames) returned from the ad server."
						},
						placement: {
							type: "string",
							description: "Ad placement type used in request.",
							enums: ["feed", "sidebars", "comments_page", "promoted_trend"]
						},
						slots: {
							type: "array",
							description: "A list of the ad slots being requested, e.g. [first, second, all_but_first]"
						},
						number_min_distance: {
							type: "integer",
							description: "Minimum distance between ads for the current listing page.",
							minimum: 0
						},
						platform: {
							type: "string",
							description: "Ad platform name used in request.",
							enums: ["desktop", "mobile_web", "mobile_native", "desktop_legacy", "all"]
						}
					}
				},
				ye = {
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
							description: "Username of the admin.\n\n    Note that this field is not stripped in BigQuery as we consider employee usernames to be fine to\n    show to other employees.",
							pattern: ".+"
						}
					}
				},
				ve = {
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
							description: "Different message types sent via reddar.\n\n    Values and their definitions:\n        * yact - taken action - (default)\n        * aoa - abuse of admins\n        * aoa2 - abuse of admins\n        * nact - no action taken - (default)\n        * nv - no content violation\n        * nsi - need specific info\n        * atc - already taken care of\n        * mrs - mods run subs\n        * grd_def - general removal demand (including defamation)\n        * blk - harassment\n        * 3p - 3rd party report\n        * grd_dmca - general removal demand (requires dmca)\n        * mp - marketplace\n        * sh - self-harm\n        * tof - turn off feature\n        * yact2 - ban evasion - taken action - (default)\n        * nact2 - no action taken (ban evasion) - (default)\n        * nmr - need moderator report\n        * saa - suspension appeal approved - (default)\n        * naa - neuter appeal approved\n        * sad - suspension appeal denied - (default)\n        * aoa - abuse of admins extend suspension\n        * aoa2 - abuse of admins suspend",
							enums: ["yact", "aoa", "aoa2", "nact", "nv", "nsi", "atc", "mrs", "grd_def", "blk", "3p", "grd", "mp", "sh", "tof", "yact2", "nact2", "nmr", "saa", "naa", "sad", "aoa", "aoa2"]
						},
						target_team_id: {
							type: "integer",
							description: "The numerical team ID which is having access changed, represents a team based on teams from Okta.    *",
							minimum: 0,
							maximum: 1e5
						},
						process_notes: {
							type: "string",
							description: "Broad description of an action.",
							pattern: ".*"
						},
						timeout_duration: {
							type: "integer",
							description: "For timeout action only: this field represents the number of days for a\n    temporary timeout.",
							minimum: -1
						},
						removal_job_id: {
							type: "string",
							description: "ID for a removal job in Content Action Service.\n\n    This field is a removal job's reddit_id. Prefix 'removal_job__'\n    followed by base36 value.\n    For example: 'removal_job__23b'",
							pattern: "^removal_job__[a-z0-9]+$"
						},
						removal_type: {
							type: "string",
							description: "Type of removal, e.g. overwriting the post, marked as spam, etc",
							enums: ["overwrite", "mark_as_spam", "mod_remove_from_subreddit", "admin_remove_from_subreddit", "mod_approved"]
						},
						restoration_job_id: {
							type: "string",
							description: "ID for a restoration job in Content Action Service.\n\n    This field is a restoration job's reddit_id. Prefix 'restoration_job__'\n    followed by base36 value.\n    For example: 'restoration_job__23b'",
							pattern: "^restoration_job__[a-z0-9]+$"
						},
						number_password_dump_credentials: {
							type: "integer",
							description: "Number of credentials contained in this password dump.",
							minimum: 0
						},
						notes: {
							type: "string",
							description: "Notes by an admin giving context for an action.",
							pattern: ".*"
						},
						removal_is_restorable: {
							type: "boolean",
							description: "Is the removal of the content restorable in the future?\n\n    This tracks if content being removed can be restored, meaning if we\n    permanently delete the media assets or not, and if we save the comment/post\n    information anywhere."
						}
					}
				},
				be = {
					$id: "http://com.reddit/schemas/field_definitions/admin_action/admin_team.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Reported url extracted from ticket. Can be valid reddit url or an external url.\n\n    format:^.+$\n    **/\n    1: optional string reported_url\n    /**\n    Content url associated with reported_url. Can be blank in case we cannot find associated content.\n\n    format:^.+$\n    */\n    2: optional string content_url\n    /**\n    The reddit ID of content associated with this ticket content.\n    Can be empty in case reported url doesn't resolve to valid reddit content.\n    */\n    3: optional typedefs.Fullname target_id\n    /**\n    Type of reddit content.\n\n    categories:post,comment,message\n    */\n    4: optional typedefs.StringLower target_type\n    /**\n    ID given by google csai / microsoft photodna to track the event.\n\n    examples:\n    photodna: 1_photodna_a0e3d02b-1a0a-4b38-827f-764acd288c25\n    google_csai: 17986187222943498570_1534786098\n\n    format:^[a-z0-9._-]+$\n    */\n    5: optional string tracking_id\n    /**\n    Populate information about if post/comment/third_party_link was already removed by a moderator.\n\n    Reflects values defined in admin-service admin.thrift RemovedByType.\n\n    categories:null_value,copyright_takedown,content_takedown,author,moderator\n    categories:community_ops,anti_evil_ops,reddit,deleted,automod_filter\n    */\n    6: optional string removed_by_user_type\n    /**\n    The type of content that is reported.\n\n    Reflects values defined in admin-service admin.thrift ContentType.\n\n    categories:image,video,post,comment,third_party_link,thumbnail,preview,subreddit_icon\n    **/\n    7: optional typedefs.StringLower content_type\n    /** User who deleted the content. Fullname of user. */\n    8: optional typedefs.Fullname removed_by_user_id\n    /** Subreddit id where content was reported. Fullname of subreddt. */\n    9: optional typedefs.Fullname subreddit_id\n    /**\n    The identifier for a reddar queue from where ticket is moved. i.e. Minor Sexualization\n\n    This field is a reddar queue's reddit_id. Prefix 'queues__'\n    followed by base36 value.\n    For example: 'queues__23b'\n\n    format:^queues__[a-z0-9]+$\n    */\n    10: optional string original_queue_id\n    /**\n    The identifier for a reddar queue where ticket is moved. i.e. CP internal\n\n    This field is a reddar queue's reddit_id. Prefix 'queues__'\n    followed by base36 value.\n    For example: 'queues__23b'\n\n    format:^queues__[a-z0-9]+$\n    */\n    11: optional string dest_queue_id\n    /** Indicates if reported content is confirmed CSAI or not. */\n    12: optional bool confirmed_csai\n    /** Indicates if content is reported to ncmec. If not null, then the value is ncmec_id. */\n    13: optional i64 ncmec_report_number\n    /** Full name of user who reported content. */\n    14: optional typedefs.Fullname reporter_id\n    /**\n    Permalink of post/comment/message url. Can be valid reddit url or an external url.\n\n    format:^.+$\n    **/\n    15: optional string permalink\n}\n\n/**\nInformation regarding reroute rules in Reddar.\n\nA reroute rule defines how to reroute tickets from the original queue to a new queue\nwhen tickets match some specific reroute contitions.\n*/\nstruct RerouteRule{\n    /**\n    Required identifier for a reddar routing set.\n\n    This field is a reddar routing set's reddit_id. Prefix 'routing_sets__'\n    followed by base36 value.\n    For example: 'routing_sets__3a'\n\n    format:^routing_sets__[a-z0-9]+$\n    */\n    1: optional string id\n    /**\n    Type of tickets the routing set works on.\n\n    categories:private_message_abuse,harassment,violence,ban_evasion\n    categories:csai,appeal,legal_export,login_bot,ae_test,ads\n    categories:chat_violence,marketplace,pii,photodna,bulk_action_job\n    categories:impersonation,involuntary_porn,scab_appeal,minor_sexualization\n    categories:chat_others,chat_unknown,delete_media,chat_spam,chat_harassment\n    categories:chat_pii,chat_ban_evasion,chat_marketplace,chat_minor_sexualization\n    categories:chat_involuntary_porn,chat_vote_manipulation,live_stream,terrorism\n    categories:dmca,subreddit_report_abuse,user_data_request\n\n    categories:award_unknown,award_other,award_dmca,award_harassment\n    categories:award_minor_sexualization,award_involuntary_porn,award_pii,award_violence\n\n    categories:live_stream_spam,live_stream_harassment_at_me,live_stream_harassment_at_someone_else\n    categories:live_stream_violence_at_me,live_stream_violence_at_someone_else,live_stream_contemplating_self_harm\n    categories:live_stream_committing_self_harm,live_stream_nsfw_content,live_stream_illegal_or_dangerous_behavior\n    categories:live_stream_offensive_or_hoax_content,live_stream_ban_evasion,live_stream_copyright\n    categories:live_stream_trademark,live_stream_impersonation,live_stream_marketplace,live_stream_pii\n    categories:live_stream_vote_manipulation,live_stream_netzdg,live_stream_under_age,live_stream_minor_sexualization\n    categories:live_stream_involuntary_porn_with_me,live_stream_involuntary_porn_without_me\n\n    categories:live_stream_chat_spam,live_stream_chat_harassment_at_me,live_stream_chat_harassment_at_someone_else\n    categories:live_stream_chat_violence_at_me,live_stream_chat_violence_at_someone_else\n    categories:live_stream_chat_contemplating_self_harm,live_stream_chat_committing_self_harm\n    categories:live_stream_chat_nsfw_content,live_stream_chat_illegal_or_dangerous_behavior\n    categories:live_stream_chat_offensive_or_hoax_content,live_stream_chat_ban_evasion,live_stream_chat_copyright\n    categories:live_stream_chat_trademark,live_stream_chat_impersonation,live_stream_chat_marketplace\n    categories:live_stream_chat_pii,live_stream_chat_vote_manipulation,live_stream_chat_netzdg\n    categories:live_stream_chat_under_age,live_stream_chat_minor_sexualization\n    categories:live_stream_chat_involuntary_porn_with_me,live_stream_chat_involuntary_porn_without_me\n    */\n    2: optional typedefs.StringLower ticket_type\n    /**\n    Priority of the routing set when multiple routing sets match a ticket.\n\n    A lower number means higher priority.\n    */\n    3: optional i32 priority\n    /**\n    ID of the queue the routing set will route tickets to.\n\n    format:^queues__[a-z0-9]+$\n    */\n    4: optional string target_queue_id\n}\n\n/** Information regarding queues in Reddar. */\nstruct ReddarQueue{\n    /**\n    The identifier for a reddar queue.\n\n    This field is a reddar queue's reddit_id. Prefix 'queues__'\n    followed by base36 value.\n    For example: 'queues__23b'\n\n    format:^queues__[a-z0-9]+$\n    */\n    1: optional typedefs.StringLower id\n    /**\n    Type of a reddar queue.\n\n    categories:private_message_abuse,harassment,violence,ban_evasion,csai\n    categories:appeal,legal_export,login_bot,configurable,photodna\n    categories:bulk_action_job,delete_media,live_stream,terrorism\n    categories:dmca,user_data_request,geo_block\n    */\n    2: optional typedefs.StringLower type\n    /**\n    Type of tickets a reddar queue contains.\n\n    categories:private_message_abuse,harassment,violence,ban_evasion\n    categories:csai,appeal,legal_export,login_bot,ae_test,ads\n    categories:chat_violence,marketplace,pii,photodna,bulk_action_job\n    categories:impersonation,involuntary_porn,scab_appeal,minor_sexualization\n    categories:chat_others,chat_unknown,delete_media,chat_spam,chat_harassment\n    categories:chat_pii,chat_ban_evasion,chat_marketplace,chat_minor_sexualization\n    categories:chat_involuntary_porn,chat_vote_manipulation,live_stream,terrorism\n    categories:dmca,subreddit_report_abuse,user_data_request\n\n    categories:award_unknown,award_other,award_dmca,award_harassment\n    categories:award_minor_sexualization,award_involuntary_porn,award_pii,award_violence\n\n    categories:live_stream_spam,live_stream_harassment_at_me,live_stream_harassment_at_someone_else\n    categories:live_stream_violence_at_me,live_stream_violence_at_someone_else,live_stream_contemplating_self_harm\n    categories:live_stream_committing_self_harm,live_stream_nsfw_content,live_stream_illegal_or_dangerous_behavior\n    categories:live_stream_offensive_or_hoax_content,live_stream_ban_evasion,live_stream_copyright\n    categories:live_stream_trademark,live_stream_impersonation,live_stream_marketplace,live_stream_pii\n    categories:live_stream_vote_manipulation,live_stream_netzdg,live_stream_under_age,live_stream_minor_sexualization\n    categories:live_stream_involuntary_porn_with_me,live_stream_involuntary_porn_without_me\n\n    categories:live_stream_chat_spam,live_stream_chat_harassment_at_me,live_stream_chat_harassment_at_someone_else\n    categories:live_stream_chat_violence_at_me,live_stream_chat_violence_at_someone_else\n    categories:live_stream_chat_contemplating_self_harm,live_stream_chat_committing_self_harm\n    categories:live_stream_chat_nsfw_content,live_stream_chat_illegal_or_dangerous_behavior\n    categories:live_stream_chat_offensive_or_hoax_content,live_stream_chat_ban_evasion,live_stream_chat_copyright\n    categories:live_stream_chat_trademark,live_stream_chat_impersonation,live_stream_chat_marketplace\n    categories:live_stream_chat_pii,live_stream_chat_vote_manipulation,live_stream_chat_netzdg\n    categories:live_stream_chat_under_age,live_stream_chat_minor_sexualization\n    categories:live_stream_chat_involuntary_porn_with_me,live_stream_chat_involuntary_porn_without_me\n    */\n    3: optional typedefs.StringLower ticket_type\n    /**\n    The group a reddar queue belongs to.\n\n    categories:anti_evil,ae_ops,legal_ops,community,swat,chat,reddar_tools,live_stream,award\n    */\n    4: optional typedefs.StringLower group_type\n    /**\n    The human readable freeform text name of the queue.\n\n    format:^.*$\n    */\n    5: optional typedefs.StringLower name\n    /**\n    The level of priority the queue has.\n    P0 Blocker: Drop everything, this must be completed immediately.\n    P1 Critical: This is complex/important and must be done in a rush.\n    P2 Major: This is complex/important and has a fixed deadline.\n    P3 Minor: This needs to get done, but is not very time sensitive.\n\n    categories:p0,p1,p2,p3\n    */\n    6: optional typedefs.StringLower priority\n    /*\n    The numerical team ID which has access, represents a team based on teams from Okta.\n\n    range:0 - 100000\n    */\n    // 7: optional i32 team_id DEPRECATED\n    /*\n    The human readable name of the team.\n\n    format:^.+$\n    */\n    // 8: optional typedefs.StringLower team_name DEPRECATED\n    /*\n    The type of access granted or removed.\n\n    categories:readonly,write,restricted\n    */\n    // 9: optional typedefs.StringLower access_type DEPRECATED\n}\n\n/** Information regarding Admin teams at reddit and what kind of access they have.",
					definitions: {
						id: {
							type: "integer",
							description: "The numerical team ID which has access, represents a team based on teams from Okta.",
							minimum: 0,
							maximum: 1e5
						},
						name: {
							type: "string",
							description: "The human readable name of the team.",
							pattern: "^.+$"
						},
						access_type: {
							type: "string",
							description: "The type of access granted or removed.",
							enums: ["readonly", "write", "restricted"]
						}
					}
				},
				we = {
					$id: "http://com.reddit/schemas/field_definitions/admin_action/c_s_a_i_media.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Information regarding google csai / microsoft photodna.",
					definitions: {
						media_url: {
							type: "string",
							description: "Url of the video/image being checked.\n    Can be reddit hosted or external\n\n    examples:\n    photodna: https://i.imgur.com/aeulpB4.png\n    photodna: https://i.redd.it/i85evufd5us11.jpg\n    google_csai: https://v.redd.it/kvyioqwybxs11",
							pattern: "^https?:\\/\\/[a-z0-9\\/\\-_.]+$"
						},
						match: {
							type: "boolean",
							description: "True if there is a match for the media, indicating confirmation of CP."
						},
						retry_media_url: {
							type: "string",
							description: "Retry url sent to photodna.",
							pattern: "^https?:\\/\\/[a-z0-9\\/\\-_.]+$"
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
							description: "Error message provided by 3rd party if response is an error.",
							pattern: "^.+$"
						},
						error_code: {
							type: "integer",
							description: "Error code provided by 3rd party if response is an error.",
							minimum: 0
						},
						destination_queue_name: {
							type: "string",
							description: "Name of queue the media is being sent to."
						}
					}
				},
				$e = {
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
							description: "Permalink of content.*",
							pattern: "^http.+$"
						},
						file_viewed_by_admin: {
							type: "boolean",
							description: "Whether the reporting company viewed the file being reported to NCMEC."
						},
						classification_type: {
							type: "string",
							description: "A categorization from the ESP-designated categorization scale.\n\n    https://exttest.cybertip.org/ispws/documentation/#xml-file-details\n    <industryClassification>",
							enums: ["a1", "a2", "b1", "b2"]
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
							description: "Optionally added by reddar admin/legalOps when submitting ncmec request.*",
							pattern: ".*"
						},
						id: {
							type: "integer",
							description: "Id of report submitted to NCMEC\n\n    https://exttest.cybertip.org/ispws/documentation/#report-response\n    <reportId>"
						},
						content_url: {
							type: "string",
							description: "Reported url extracted from ticket. Can be valid reddit url or an external url.*",
							pattern: "^.+$"
						},
						filename: {
							type: "string",
							description: "The name of the file(s) associated with the incident.",
							pattern: "^.+$"
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
							description: "Optionally added by reddar admin/legalOps when submitting ncmec request.*",
							pattern: ".*"
						},
						content_is_reddit_hosted: {
							type: "boolean",
							description: "Indicates whether content is reddit hosted or third party."
						},
						account_added_note: {
							type: "string",
							description: "Notes added by content reviewer. Optionally added by reddar Admin/LegalOps when submitting ncmec report.*",
							pattern: ".*"
						}
					}
				},
				je = {
					$id: "http://com.reddit/schemas/field_definitions/announcement/announcement.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "An announcement, shown in the top carousel conditionally on all platforms.",
					definitions: {
						id: {
							type: "string",
							description: "Required alphanumeric identifier for the announcement.",
							pattern: "^[a-z0-9]+$"
						},
						title: {
							type: "string",
							description: "The title of the announcement.",
							pattern: "^.*$"
						},
						body: {
							type: "string",
							description: "The main content of the announcement.",
							pattern: ".*"
						}
					}
				},
				ke = {
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
				xe = {
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
				Pe = {
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
				qe = {
					$id: "http://com.reddit/schemas/field_definitions/banner/banner.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "A banner, either in web or mobile platforms.",
					definitions: {
						id: {
							type: "string",
							description: 'Required identifier for the banner, e.g. "nfl_gameday_survey".',
							pattern: "^[ -~]+$"
						},
						button_text: {
							type: "string",
							description: 'Banner button interacted with, e.g. for survey banners.\n\n    Example values include "yes" or "dismiss"'
						}
					}
				},
				Ee = {
					$id: "http://com.reddit/schemas/field_definitions/bot_detection/bot_detection.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Model for bot detection.",
					definitions: {
						provider: {
							type: "string",
							description: "Name of the provider who supplied bot detection services.",
							enums: ["recaptcha"]
						},
						website_action: {
							type: "string",
							description: "Name of the website action that was protected by a bot detection service.\n\n    (e.g., page_view, comment, login, etc.)",
							enums: ["page_view"]
						},
						recaptcha_score: {
							type: "number",
							description: "reCaptcha assessment score.",
							minimum: 0,
							maximum: 1
						}
					}
				},
				Te = {
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
							description: 'An integer giving the number of "things" expected to be actioned by the bulk action job.',
							minimum: 0
						},
						reason: {
							type: "string",
							description: "A string giving the reason for the bulk action job.",
							pattern: ".+"
						},
						user_id: {
							type: "string",
							description: "Account reddit id associated with report."
						},
						id: {
							type: "string",
							description: "Required identifier for the job.\n\n    This field is tracked as base36.",
							pattern: "^[a-z0-9]+$"
						},
						bigquery_job_id: {
							type: "string",
							description: "For jobs created via the BigQuery connector, the unique id of the related entry in BigQuery.\n\n    If the bulk action is created manually by uploading a CSV, the bigquery_job_id field is\n    left empty. If the bulk action job is created through the BigQuery connector (i.e. the job\n    was automatically created by an integrated ETL from the SWAT team), the bigquery_job_id is a\n    string storing a back reference to it\n\n    This field is tracked as UUID."
						},
						status: {
							type: "string",
							description: "A string giving the status of the bulk action job.",
							enums: ["error", "created", "pending", "running", "complete", "stopped"]
						},
						actions: {
							type: "array",
							description: "A list of (lowercase) strings giving the actions that the bulk action job is expected to perform.\n\n    E.g. ['ap__suspend_temporarily_3day', 'ap__mark_for_alt_tracking']"
						},
						target_type: {
							type: "string",
							description: "A string giving the type of the things expected to be actioned by the bulk action job.",
							enums: ["post", "comment", "message", "account", "subreddit", "livethread"]
						},
						target_limit: {
							type: "integer",
							description: "An integer giving the current limit of targets that can be actioned without a maunual review.",
							minimum: 0
						}
					}
				},
				Se = {
					$id: "http://com.reddit/schemas/field_definitions/carousel/carousel.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "A carousel is a horizontally scrolling content view.\n\nMost carousels are used to display posts and subreddits for discovery of new content.",
					definitions: {
						id: {
							type: "string",
							description: "Required identifier for the carousel. \n    \n    Note that these are not thing ids, so they aren't Fullnames.",
							pattern: "^xd_[a-z0-9]+$"
						},
						type: {
							type: "string",
							description: "String that identifies the carousel's purpose and content.\n\n    Roughly equivalent to an experiment name."
						}
					}
				},
				Ae = {
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
				De = {
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
							description: "The length of the message body text.",
							minimum: 0
						},
						channel_name: {
							type: "string",
							description: "Name of group or 1:1 channel.\n\n    Note! The field will be protected, with the data fields being part of the blacklist,\n    and only accessible in SWATs restricted data project.\n\n    Values:\n        * for 1:1 channel, this information leaks user names (protected by SWAT team)\n        * for group channel, this will be a channel name",
							pattern: "^.+$"
						},
						reported_user_id: {
							type: "string",
							description: "The user_id of the member being reported."
						},
						invitation_preview_type: {
							type: "string",
							description: "Type of first invitation message, e.g. text or snoomoji.",
							enums: ["text", "image", "post", "snoomoji", "gif", "video"]
						},
						number_blocked_users: {
							type: "integer",
							description: "The number of members who are currently blocked.",
							minimum: 0
						},
						invitation_id: {
							type: "string",
							description: "Invitation id for the channel.",
							pattern: "^[_a-z0-9]+$"
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
							description: "The number of invites the user has not responded to.",
							minimum: 0
						},
						image_upload_method: {
							type: "string",
							description: "Method for image uploads, either via gallery or camera.",
							enums: ["gallery", "camera"]
						},
						message_type: {
							type: "string",
							description: "Type of message, e.g. text or snoomoji.",
							enums: ["text", "image", "post", "snoomoji", "gif", "video"]
						},
						message_body: {
							type: "string",
							description: "Text of message in group and 1:1 channel.\n\n    Note! The field will be protected, with the data fields being part of the blacklist,\n    and only accessible in SWATs restricted data project.",
							pattern: ".+"
						},
						number_unreads: {
							type: "integer",
							description: "The number of unread messages in a channel.",
							minimum: 0
						},
						invitation_type: {
							type: "string",
							description: "Type of channel the user being invited, either group or 1:1 chat.\n\n    Values:\n        * direct - private 1:1 chat\n        * group - private group chat\n        * room_private - subreddit private chat\n        * room_public - subreddit public chat",
							enums: ["direct", "group", "room_public", "room_private"]
						},
						is_member: {
							type: "boolean",
							description: "Did this user already join this chat?"
						},
						message_id: {
							type: "integer",
							description: "Message id provided by SendBird.",
							minimum: 0
						},
						id: {
							type: "string",
							description: "Channel id provided from our chat service, of the form:\n    CHAT_{sendbird_channel_id}_{message_id}\n    Example value:\n    CHAT_sendbird_group_channel_11652835_3ebbc9b3692c3cf399e970f66f720712a08145ce_132118214",
							pattern: "^[-_a-zA-Z0-9]+$"
						},
						shown_history: {
							type: "boolean",
							description: "Were there already messages in the room when the user joined?"
						},
						number_members: {
							type: "integer",
							description: "The number of members in a channel.",
							minimum: 0
						},
						request_name: {
							type: "string",
							description: "Url if available, otherwise a method name, used for measuring web request roundtrip time.\n\n    This field is used for debugging. As such, we allow all ascii characters.",
							pattern: "^[\\x00-\\x7F]+$"
						},
						number_channels: {
							type: "integer",
							description: "The number of channels that are in the inbox.",
							minimum: 0
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
							description: "Identifies if the chat is with a group or 1:1 chat.\n\n    Values:\n        * direct - private 1:1 chat\n        * group - private group chat\n        * room_private - subreddit private chat\n        * room_public - subreddit public chat",
							enums: ["direct", "group", "room_public", "room_private"]
						},
						user_added_method: {
							type: "string",
							description: "Method for how users were added, either through contacts or search.",
							enums: ["contacts", "search"]
						},
						blocked_user_id: {
							type: "string",
							description: "User id of member who is being blocked."
						},
						report_reason: {
							type: "string",
							description: "A report reason from a pre-selected set of options.",
							pattern: "^.+$"
						}
					}
				},
				Re = {
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
				Ie = {
					$id: "http://com.reddit/schemas/field_definitions/comment_draft/comment_draft.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Text of a comment before it is submitted.",
					definitions: {
						body_text: {
							type: "string",
							description: "The text of the drafted comment.",
							pattern: ".*"
						}
					}
				},
				Fe = {
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
				Oe = {
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
							description: "The types of content present in this comment.\n\n    Nested string (comma-separated) where each of the content types are listed per comment submit.\n    Example of values inside the list: text,snoomoji,gif",
							pattern: "^[a-z0-9_-]+(,[a-z0-9_-]+)*$"
						},
						score: {
							type: "integer",
							description: "Vote score for the comment.",
							pattern: "^.*$"
						},
						upvote_ratio: {
							type: "number",
							description: "Number of upvotes divided by total number of votes for the comment.\n\n    Note that raw upvote/downvote scores are not exposed to clients due to\n    security / privacy / anti-evil reasons.",
							pattern: "^.*$"
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
							description: "The depth of the comment in the comment tree.",
							minimum: 0
						},
						author_id: {
							type: "string",
							description: "Author of the comment."
						},
						body_text: {
							type: "string",
							description: "Content of the comment in markdown.",
							pattern: ".*"
						},
						type: {
							type: "string",
							description: "The type of comment.\n\n    Values and their definitions:\n        * comment: a traditional comment\n        * chat: a comment submitted to a chat post",
							enums: ["comment", "chat"]
						},
						number_gildings: {
							type: "integer",
							description: "How much gold the comment has received.",
							minimum: 0
						}
					}
				},
				ze = {
					$id: "http://com.reddit/schemas/field_definitions/content/comment_composer.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents fields specific to the comment creation form.",
					definitions: {
						editor_mode: {
							type: "string",
							description: "Which mode the editor is in.\n\n    We support both rich text or markdown.",
							enums: ["rte", "markdown"]
						}
					}
				},
				Ce = {
					$id: "http://com.reddit/schemas/field_definitions/content/edit.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Details of an edit made by a user to a piece of content.",
					definitions: {
						previous_body_text: {
							type: "string",
							description: "The body text of the content before the current user edit was performed.\n    This field is used for both post and comment edits.",
							pattern: ".*"
						}
					}
				},
				Ue = {
					$id: "http://com.reddit/schemas/field_definitions/content/gallery.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields used in posted media. */\nstruct Media {\n    /**\n    Width in pixels.\n\n    range:0 -\n    */\n    1: optional i64 width\n    /**\n    Height in pixels.\n\n    range:0 -\n    */\n    2: optional i64 height\n    /**\n    Time to load media in milliseconds.\n\n    range:0 -\n    */\n    3: optional i64 load_time\n    /** Identifier of the image or video. */\n    4: optional typedefs.StringLower id\n    /**\n    Orientation of the media, e.g. landscape or portrait.\n\n    categories:landscape,portrait\n    */\n    5: optional typedefs.StringLower orientation\n    /**\n    Length of the video in milliseconds.\n\n    range:0 -\n    */\n    6: optional i64 duration\n    /**\n    At what time in the video is the event happening in milliseconds.\n\n    E.g. clicked on pause after the video played for 100ms.\n\n    range:0 -\n    */\n    7: optional i64 time\n    /** Is the media pinned? */\n    8: optional bool pinned\n    /**\n    Max time a video was served.\n\n    range:0 -\n    */\n    9: optional i64 max_time_served\n    /**\n\tMimetype of media.\n\n\tformat:^[-_/a-z0-9]+$\n    */\n    10: optional string mimetype\n    /**\n    Size of media in bytes.\n\n    range:0 -\n    */\n    11: optional i64 size\n    /**\n    URL of media.\n\n    format:^https?:\\/\\/[a-zA-Z0-9\\/\\-\\?=&_.]+$\n    */\n    12: optional string url\n    /**\n    The location from which media was uploaded to the site.\n\n    categories:fileselector,clipboard,drag_and_drop\n    */\n    13: optional typedefs.StringLower source\n    /**\n    Uploading time in milliseconds.\n\n    range:0 -\n    */\n    14: optional i64 upload_duration\n    /**\n    File name of the media being uploaded.\n\n    format:^.+$\n    */\n    15: optional string file_name\n    /**\n    Upload type, e.g. video, image, or live stream video\n\n    categories:image,video,stream\n\n    The following categories are further used to differentiate video types:\n\n    categories:stream_live,stream_vod,stream_unavailable,native_video\n    */\n    16: optional typedefs.StringLower type\n    /**\n    URL for the image or video thumbnail.\n\n    format:^https?:\\/\\/[a-z0-9\\/\\-_.]+$\n    */\n    17: optional string thumbnail_url\n    /** The CDN that served this media. */\n    18: optional typedefs.StringLower cdn_name\n    /**\n    The cdn region where this media was downloaded from.\n\n    Note that the region format will differ depending on the cdn used.\n\n    format:^.+$\n    */\n    19: optional string cdn_region\n    /**\n    The region where this media was sent to.\n\n    Note that the region format will differ depending on the cdn used.\n\n    format:^.+$\n    */\n    20: optional string destination_region\n    /**\n    URL for the image or video preview.\n\n    format:^https?:\\/\\/[a-z0-9\\/\\-_.]+$\n    */\n    21: optional string preview_url\n    /** The public ID for the live stream. */\n    22: optional typedefs.UUID stream_public_id\n    /** The private ID for the live stream (a.k.a. streamer_key). */\n    23: optional typedefs.UUID stream_private_id\n    /** The timestamp for when the live stream ended. */\n    24: optional typedefs.Timestamp stream_ended_timestamp\n    /**\n    The md5 of the media, as uploaded by the user.\n\n    format:^[a-f0-9]{32}$\n    */\n    25: optional string md5\n    /** Specific caption for the media the user is interacting with. */\n    26: optional string caption\n    /** Outbound url for a specific media asset. */\n    27: optional string outbound_url\n    /** Outbound url domain for a specific media asset. */\n    28: optional string outbound_domain\n}\n\n/** Represents a Media Gallery post, which collects many Media objects.",
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
				Le = {
					$id: "http://com.reddit/schemas/field_definitions/content/listing.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the characteristics we would send as part of a listing page.",
					definitions: {
						max_rank: {
							type: "integer",
							description: "The maximum rank of the sort result.",
							minimum: 0
						},
						source: {
							type: "string",
							description: "What type of listing this is.",
							enums: ["home", "popular", "all", "subreddit", "original_content", "post_detail"]
						},
						aggregator: {
							type: "string",
							description: 'Describes how a listing is aggregated. Currently only "single_agg".',
							enums: ["single_agg"]
						},
						min_rank: {
							type: "integer",
							description: "The offset used in the sort result.",
							minimum: 0
						},
						cursor: {
							type: "string",
							description: "Cursor passed in by request in listing service."
						},
						old_sort: {
							type: "string",
							description: "The type of sort that a listing previously had if changed.",
							enums: ["hot", "new", "rising", "top", "controversial", "gilded", "wiki", "promoted", "best", "chat", "confidence", "qa", "old", "live", "random", "relevance", "comments", "timestamp", "score", "upvotes"]
						},
						links: {
							type: "array",
							description: "List of all of the Thing fullnames included in the listing (in order)"
						},
						sort_time_filter: {
							type: "string",
							description: "Time filter, if present, that is applied to a sort.",
							enums: ["hour", "day", "week", "month", "year", "all"]
						},
						metadata: {
							type: "string",
							description: "Extra metadata to be used for listing related things.",
							pattern: "^[0-9a-z{},\\[\\]:\"' ]{1, 5000}$"
						},
						depth: {
							type: "integer",
							description: "The depth of a comment in a listing.",
							minimum: 0
						},
						length: {
							type: "integer",
							description: "Number of links present in the listing.",
							minimum: 0
						},
						geo_filter: {
							type: "string",
							description: "Geopopular filter applied to the listing.",
							pattern: "^[_A-Z]+$"
						},
						sort: {
							type: "string",
							description: "The type of sort that a listing page is loaded with.",
							enums: ["hot", "new", "rising", "top", "controversial", "gilded", "wiki", "promoted", "best", "chat", "confidence", "qa", "old", "live", "random", "relevance", "comments", "timestamp", "score", "upvotes"]
						},
						cursor_returned: {
							type: "string",
							description: "Cursor returned by request from listing service."
						}
					}
				},
				Ne = {
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
							description: "Length of the video in milliseconds.\n\n    range:0 -"
						},
						max_time_served: {
							type: "integer",
							description: "Max time a video was served.\n\n    range:0 -"
						},
						stream_ended_timestamp: {
							type: "number",
							description: "The timestamp for when the live stream ended."
						},
						source: {
							type: "string",
							description: "The location from which media was uploaded to the site.\n\n    categories:fileselector,clipboard,drag_and_drop"
						},
						size: {
							type: "integer",
							description: "Size of media in bytes.\n\n    range:0 -"
						},
						upload_duration: {
							type: "integer",
							description: "Uploading time in milliseconds.\n\n    range:0 -"
						},
						file_name: {
							type: "string",
							description: "File name of the media being uploaded.\n\n    format:^.+$"
						},
						url: {
							type: "string",
							description: "URL of media.\n\n    format:^https?:\\/\\/[a-zA-Z0-9\\/\\-\\?=&_.]+$"
						},
						destination_region: {
							type: "string",
							description: "The region where this media was sent to.\n\n    Note that the region format will differ depending on the cdn used.\n\n    format:^.+$"
						},
						cdn_name: {
							type: "string",
							description: "The CDN that served this media."
						},
						height: {
							type: "integer",
							description: "Height in pixels.\n\n    range:0 -"
						},
						outbound_url: {
							type: "string",
							description: "Outbound url for a specific media asset."
						},
						preview_url: {
							type: "string",
							description: "URL for the image or video preview.\n\n    format:^https?:\\/\\/[a-z0-9\\/\\-_.]+$"
						},
						id: {
							type: "string",
							description: "Identifier of the image or video."
						},
						md5: {
							type: "string",
							description: "The md5 of the media, as uploaded by the user.\n\n    format:^[a-f0-9]{32}$"
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
							description: "URL for the image or video thumbnail.\n\n    format:^https?:\\/\\/[a-z0-9\\/\\-_.]+$"
						},
						pinned: {
							type: "boolean",
							description: "Is the media pinned?"
						},
						orientation: {
							type: "string",
							description: "Orientation of the media, e.g. landscape or portrait.\n\n    categories:landscape,portrait"
						},
						load_time: {
							type: "integer",
							description: "Time to load media in milliseconds.\n\n    range:0 -"
						},
						stream_public_id: {
							type: "string",
							description: "The public ID for the live stream."
						},
						time: {
							type: "integer",
							description: "At what time in the video is the event happening in milliseconds.\n\n    E.g. clicked on pause after the video played for 100ms.\n\n    range:0 -"
						},
						type: {
							type: "string",
							description: "Upload type, e.g. video, image, or live stream video\n\n    categories:image,video,stream\n\n    The following categories are further used to differentiate video types:\n\n    categories:stream_live,stream_vod,stream_unavailable,native_video"
						},
						outbound_domain: {
							type: "string",
							description: "Outbound url domain for a specific media asset."
						},
						cdn_region: {
							type: "string",
							description: "The cdn region where this media was downloaded from.\n\n    Note that the region format will differ depending on the cdn used.\n\n    format:^.+$"
						},
						width: {
							type: "integer",
							description: "Width in pixels.\n\n    range:0 -"
						}
					}
				},
				Me = {
					$id: "http://com.reddit/schemas/field_definitions/content/message.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: 'Type of discovery unit.\n\n    The type of carousel, usually "listing" or "subreddit_listing" or "comments_listing". However, some older\n    units have grandfathered unique types. This is an arbitrary lowercase string without spaces.\n    */\n    2: required typedefs.StringLower type\n    // 3: optional i64 number_posts DEPRECATED\n    // 4: optional list<typedefs.Fullname> posts_shown DEPRECATED\n    // 6: optional i64 post_position DEPRECATED\n    // 7: optional typedefs.StringLower post_type DEPRECATED\n    // 8: optional typedefs.StringLower post_subreddit DEPRECATED\n    /**\n    The unique identifier of the discovery unit as outlined on the config wiki.\n\n    This is an arbitrary string, but generally should be in the format of "xd_X"\n    where X is a number or text identifier.\n\n    format:^[ -~]+$\n    */\n    9: required string id\n    /**\n    The displayed title of the carousel, this will be an arbitrary string.\n\n    format:^.+$\n    */\n    10: optional string title\n    /**\n    The carousel\'s unique english name used for analytics.\n\n    This is an arbitrary lowercase string without spaces.\n    */\n    11: required typedefs.StringLower name\n    /** A list of fullnames for each item presented in the discovery unit. */\n    12: optional list<typedefs.Fullname> items\n}\n\n/** A private message sent between Redditors.',
					definitions: {
						body: {
							type: "string",
							description: "The content in the body of the message.read-access:swat@reddit.com",
							pattern: ".*"
						},
						parent_message_id: {
							type: "string",
							description: "Message ID of the parent message in this thread."
						},
						subject: {
							type: "string",
							description: "The subject of the message thread.read-access:swat@reddit.com",
							pattern: ".*"
						},
						filtered_by_recipient: {
							type: "boolean",
							description: "Did the message get rejected before being received by the recipient.\n\n    There are a variety of reasons why a rejection would occur, such\n    as blocking."
						},
						sender_type: {
							type: "string",
							description: "What kind of entity the sender is.\n\n    Used to differentiate between automated systems, users,\n    and subreddits sending content.",
							enums: ["automated", "user", "subreddit"]
						},
						id: {
							type: "string",
							description: "Required id of the Message."
						},
						recipient_type: {
							type: "string",
							description: "The type of the recipient.",
							enums: ["user", "subreddit"]
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
							description: "Source page the user was on when they created this message.",
							enums: ["compose", "permalink", "usermail"]
						},
						first_message_id: {
							type: "string",
							description: "Message ID of the first message in this thread."
						}
					}
				},
				He = {
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
				Be = {
					$id: "http://com.reddit/schemas/field_definitions/content/notification.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents a notification, mostly used for mobile platforms.",
					definitions: {
						body: {
							type: "string",
							description: "The body of this Notification.",
							pattern: ".+"
						},
						dropped: {
							type: "boolean",
							description: "Was the notification dropped?\n\n    A notification was dropped because of a preference check, version check,\n    bad push token, invalid ARN endpoint, multiple device ids mapped to the\n    same push token, etc."
						},
						authorization_status: {
							type: "string",
							description: "Authorization status of a notification, only applies to iOS devices",
							enums: ["enabled", "provisional"]
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
							description: "The title of this Notification.",
							pattern: "^.+$"
						},
						type: {
							type: "string",
							description: "The type of this Notification.",
							enums: ["comment_reply", "chat", "lifecycle_post_suggestions", "post_reply", "private_message", "user_new_follower", "subreddit_recommendation", "trending", "upvote", "username_mention", "scheduled_event", "subreddit_updates_interesting_post", "chat_message", "chat_request", "chat_user_mention", "chat_all_mention", "news", "subreddit", "add_to_collection", "week0_signup", "week0_onboarding_incomplete", "week0_onboarding_complete", "week0_join", "week0_upvote", "week0_help", "week0_explore_interest", "week0_explore_search", "week0_topic", "week0_support", "thread_replies", "top_level_comment", "chat_accept_invite", "one_off", "cake_day", "live_event", "upvote_comment", "upvote_post", "broadcast_follower", "broadcast_recommendation", "post_flair_added", "new_pinned_post", "more_post_activity", "moderated_sr_engagement"]
						}
					}
				},
				We = {
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
							description: "Number of subreddits selected as part of the onboarding flow.",
							minimum: 0
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
							description: "Number of captcha screens a user saw.",
							minimum: 0
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
							description: "Number of subreddits already selected.",
							minimum: 0
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
							description: "Subreddit category position in a list.",
							minimum: 0
						},
						subreddit_position: {
							type: "integer",
							description: "Subreddit position in a list.",
							minimum: 0
						},
						user_name: {
							type: "string",
							description: "Submitted user name.",
							pattern: "^[\\x00-\\x7F]+$"
						},
						subreddit_is_selected: {
							type: "boolean",
							description: "Was this subreddit already selected? Used in onboarding subreddit click events."
						},
						number_subreddits: {
							type: "integer",
							description: "Number of similar subreddits viewed.",
							minimum: 0
						},
						personalized_subreddits: {
							type: "integer",
							description: "Number of personalized subreddits shown to the user.",
							minimum: 0
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
				Ve = {
					$id: "http://com.reddit/schemas/field_definitions/content/post.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the characteristics of a post (aka a link).",
					definitions: {
						top_awarded_type: {
							type: "string",
							description: "The type of top awarded leaderboard\n\n    Values and their definitions:\n        * active: leaderboard is active\n        * inactive: leaderboard is inactive and can not be updated",
							enums: ["active", "inactive"]
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
							description: "The number of comments a post has at the time of the event.",
							minimum: 0
						},
						number_posts_from_ad: {
							type: "integer",
							description: "Number of posts between this post and the nearest ad above it.",
							minimum: 0
						},
						url: {
							type: "string",
							description: 'Typically the URL unless a text or self type post.\n\n    Will not be set by text posts. May be a reddit post\n    (e.g. "/r/askreddit/comments/abcd1234/post_title") if set by AMP.',
							pattern: "^([hH][tT][tT][pP][sS]?://|ftp://|/(r|user|u|comments|live)/|/over18\\?)"
						},
						subreddit_name: {
							type: "string",
							description: "Lowercase name of the post's parent subreddit, e.g. askreddit.",
							pattern: "^(reddit.com|((t:)?[-_a-z0-9]+))$"
						},
						archived: {
							type: "boolean",
							description: "Boolean for whether a post is archived or not."
						},
						domain: {
							type: "string",
							description: "Domain of the above url, if present.",
							pattern: "^.+$"
						},
						score: {
							type: "integer",
							description: "Vote score for the post.",
							pattern: "^.*$"
						},
						flair: {
							type: "string",
							description: "Flair text that appears in the post.",
							pattern: "^[^\\n]{0,64}$"
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
							description: "Unique id of an ad impressions.",
							pattern: ".*"
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
							description: "Number of upvotes divided by total number of votes for the post.\n\n    Note that raw upvote/downvote scores are not exposed to clients due to\n    security / privacy / anti-evil reasons.",
							pattern: "^.*$"
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
							description: "Unique identifier of the Post.skip_validation:False",
							pattern: "^t[0-9]_[a-z0-9]+$"
						},
						content_duration: {
							type: "integer",
							description: "UNKNOWN. May be deprecated.",
							minimum: 0
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
							description: "The type of comments displayed for this post.\n\n    Values and their definitions:\n        * comment: discussion consists of comments\n        * chat: discussion consists of chats",
							enums: ["comment", "chat"]
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
							description: "Used for text posts to hold content.",
							pattern: ".*"
						},
						title: {
							type: "string",
							description: "Display title, entered by the author.\n\n    Note that titles typically cannot contain newlines today, they are used in ads as well in very old posts.\n    As such, the validator pattern simply checks for the presence of non-whitespace characters.",
							pattern: "[^\\n]+"
						},
						type: {
							type: "string",
							description: 'Style of the post.\n\n    Values and their definitions:\n        * link: outgoing link\n        * text: Text (aka "self") post\n        * image: direct link to an image\n        * gif: direct link to a gif\n        * video: direct link to a video\n        * crosspost: a crosspost post\n        * multi_media: post with inline media\n        * self: used by AMP\n        * rtjson: rich text json description\n        * circle: used as part of april fools 2018\n        * poll: post with points-based polling\n        * stream: (deprecated, use rpan) live stream video post\n        * rpan: live stream video post\n        * gallery: post with a gallery of media',
							enums: ["link", "text", "image", "gif", "video", "crosspost", "multi_media", "self", "rtjson", "circle", "poll", "stream", "premium", "coins", "rpan", "gallery"]
						},
						number_gildings: {
							type: "integer",
							description: "How much gold the post has already received.",
							minimum: 0
						},
						original_content: {
							type: "boolean",
							description: "Boolean for whether this post flagged as original content."
						}
					}
				},
				Qe = {
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
							description: "Display layout of the post collection, e.g. gallery or timeline.",
							enums: ["gallery", "timeline"]
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
							description: "Display title for the PostCollection, entered by the author.\n\n    The validator will be the same as that for post titles.\n\n    NOTE: This field should be used only for PostCollection Create/Edit/Delete/Add_to/Remove_from events",
							pattern: "[^\\n]+"
						}
					}
				},
				Ze = {
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
							description: "Editor mode, e.g. rte (rich text editor) or markdown.",
							enums: ["rte", "markdown"]
						},
						input_type: {
							type: "string",
							description: "Where the input is occuring, e.g. title, or rte (rich text editor).",
							enums: ["title", "text", "url", "rte", "caption", "outbound_url"]
						},
						text_type: {
							type: "string",
							description: "Text type, e.g. bold or url.",
							enums: ["bold", "italics", "title", "body", "url"]
						},
						final_status: {
							type: "string",
							description: "Final status text option.",
							enums: ["on", "off"]
						},
						submit_scheduled_timestamp: {
							type: "number",
							description: "Timestamp of when this post event is scheduled to go live"
						},
						type: {
							type: "string",
							description: "Post type selection, e.g. self, image.",
							enums: ["self", "link", "image", "media", "poll", "live"]
						}
					}
				},
				Ge = {
					$id: "http://com.reddit/schemas/field_definitions/content/post_event.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Details of a PostEvent (scheduled post) for amas/shows.",
					definitions: {
						type: {
							type: "string",
							description: "Type of the PostEvent.\n\n    Values and their definitions:\n        * ama: Ask Me Anything\n        * event: Generic catch all event\n        * show: TV Show\n        * game: Sports game",
							enums: ["ama", "event", "show", "game"]
						},
						event_state: {
							type: "string",
							description: "The state of the PostEvent.\n\n    Values and their definitions:\n        * before: not yet started\n        * now: currently active\n        * after: finished",
							enums: ["before", "now", "after"]
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
				Je = {
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
				Ye = {
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
							description: "The version of the rating survey that this content tag came from.\n\n    Some examples may be:\n        * v1\n        * v2",
							pattern: "^v[0-9]+$"
						}
					}
				},
				Ke = {
					$id: "http://com.reddit/schemas/field_definitions/crawler/crawler.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields related to crawlers.",
					definitions: {
						name: {
							type: "string",
							description: 'Crawler name set by VCL.\n\n    This name can be something general: "googlebot", "bingbot", or something specific: "AdsBot-Google-Mobile-Apps".',
							pattern: "^[\\x00-\\x7F]+$"
						}
					}
				},
				Xe = {
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
							description: "Which level of Crowd Control strictness is set at the time at the event?\n\n    Corresponds to enum CrowdControlLevel in reddit-service-thing thing.thrift",
							enums: ["off", "lenient", "moderate", "strict", "null_value"]
						}
					}
				},
				et = {
					$id: "http://com.reddit/schemas/field_definitions/crowd_source/crowd_source.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Model for Crowd-sourced data.",
					definitions: {
						old_geo_city: {
							type: "string",
							description: "The google maps or maxmind city value",
							pattern: "^.+$"
						},
						geo_country: {
							type: "string",
							description: "The google maps or maxmind country value",
							pattern: "^.+$"
						},
						geo_region: {
							type: "string",
							description: "The google maps or maxmind region value",
							pattern: "^.+$"
						},
						old_place_id: {
							type: "string",
							description: "The google maps place_id value that previously existed",
							pattern: "^.+$"
						},
						old_geo_region: {
							type: "string",
							description: "The google maps or maxmind region value that previously existed",
							pattern: "^.+$"
						},
						geo_city: {
							type: "string",
							description: "The google maps or maxmind city value",
							pattern: "^.+$"
						},
						old_geo_country: {
							type: "string",
							description: "The google maps or maxmind country value that previously existed",
							pattern: "^.+$"
						},
						place_id: {
							type: "string",
							description: "The google maps place_id value",
							pattern: "^.+$"
						}
					}
				},
				tt = {
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
							description: "Unique identifier for the custom feed.",
							pattern: "^(\\/[_a-z0-9]+)+\\/$"
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
							description: "URL of the uploaded cover image.",
							pattern: "^https:\\/\\/\\S+$"
						},
						visibility: {
							type: "string",
							description: "The visibility status of the custom feed.",
							enums: ["public", "private", "hidden"]
						},
						number_subreddits: {
							type: "integer",
							description: "The number of subreddits in the custom feed."
						}
					}
				},
				it = {
					$id: "http://com.reddit/schemas/field_definitions/device/app.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Application information.",
					definitions: {
						name: {
							type: "string",
							description: "The name of the app/code base sending the event.\n    \n    Expected values:\n        * web: desktop site\n        * web2x: redesigned desktop site\n        * mweb: mobile site\n        * ios: Reddit-native iOS app\n        * android: Reddit-native Android app\n        * amp: Google's Accelerated Mobile Pages\n        * third party app name lowercased with _ for spacesskip_validation:False",
							pattern: "^[-_a-z0-9]+$"
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
							description: "Version of the native apps.skip_validation:False",
							pattern: "^\\d+[\\d\\.]+\\d$"
						},
						build_timestamp: {
							type: "number",
							description: "Unix timestamp of build, if known."
						}
					}
				},
				st = {
					$id: "http://com.reddit/schemas/field_definitions/device/platform.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Platform information.",
					definitions: {
						device_name: {
							type: "string",
							description: 'Manufacturer name of the device when device is known (mostly on mobile)\n    Example values:\n        * iPhone 7\n        * iPad Air 3\n        * Galaxy View 18.4" 32GB\n        * HTC Hero',
							pattern: "^.+$"
						},
						device_id: {
							type: "string",
							description: "Installation uuid."
						},
						name: {
							type: "string",
							description: 'What "form factor" this is.\n\n    Example values: kubuntu, chromecast, iphone, etc.skip_validation:False',
							pattern: "^[-_a-z0-9]+$"
						},
						fingerprint: {
							type: "string",
							description: "Fingerprint for the browser."
						},
						os_version: {
							type: "string",
							description: "Version of the operating system.",
							pattern: "^.+$"
						},
						device_tier: {
							type: "string",
							description: "The performance bucket for the request device's year class.\n\n    We group year classes into several buckets, so that we can measure\n    the performance of groups of devices with similar hardware characteristics.",
							enums: ["low", "moderately_low", "medium", "moderately_high", "high"]
						},
						os_name: {
							type: "string",
							description: "Name of operating system.\n\n    Example values: window, osx, ios, android, linux, chromeos\n    Bad values: win32, xp, win, mac, macintel, ubuntu"
						},
						year_class: {
							type: "integer",
							description: "The year in which the request device would be considered high-end.\n\n    We measure the performance class for some mobile devices as\n    the year in which a device could be considered top of the line.",
							minimum: 2e3
						},
						fingerprint_created_timestamp: {
							type: "number",
							description: "Timestamp when fingerprint was created."
						},
						browser_version: {
							type: "string",
							description: "Version of that browser.",
							pattern: "^.+$"
						},
						browser_name: {
							type: "string",
							description: "Name of the browser that the client is running."
						}
					}
				},
				nt = {
					$id: "http://com.reddit/schemas/field_definitions/device/screen.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Client machine display/screen characteristics.",
					definitions: {
						viewport_width: {
							type: "integer",
							description: "Screen width of the viewport. Will be set to 0 if the viewport is closed.",
							minimum: 0
						},
						ios_font_size: {
							type: "string",
							description: "Font size setting specified by iOS.\n\n    This can be changed by the user, but is not specific to our app.\n\n    Example values:\n        * xxxl\n        * ax_xl",
							enums: ["xs", "s", "m", "l", "xl", "xxl", "xxxl", "ax_m", "ax_l", "ax_xl", "ax_xxl", "ax_xxxl"]
						},
						app_font_size_delta: {
							type: "integer",
							description: "User-specified font size setting within the iOS app.\n    \n    The value is a delta, with 0 being the default size. Negatives are\n    smaller, and positives are larger.",
							minimum: -100,
							maximum: 100
						},
						height: {
							type: "integer",
							description: "Screen height of the device.",
							minimum: 1
						},
						view_type: {
							type: "string",
							description: "View types available.",
							enums: ["card", "classic", "compact", "lightbox", "post_detail", "gallery"]
						},
						android_font_size: {
							type: "number",
							description: "Font size setting specified by Android.\n\n    It is used as a multiplier, but some devices don't use 1.0 as a default.\n    This can be changed by the user, but is not specific to our app.\n\n    Example values:\n        * 0.8\n        * 1.0\n        * 1.2",
							minimum: 0
						},
						browser_tab_id: {
							type: "string",
							description: "UUID to differentiate between different browser tabs.\n\n    This is primarily used to improve time on site calculations when a user\n    has more than one tab open."
						},
						scroll_position: {
							type: "integer",
							description: "Scroll position of the screen in pixels.",
							minimum: 0
						},
						viewport_height: {
							type: "integer",
							description: "Screen height of the viewport. Will be set to 0 if the viewport is closed.",
							minimum: 0
						},
						in_focus: {
							type: "boolean",
							description: "Denotes whether the tab is in focus (Used in heartbeat event)."
						},
						auto_dark_mode: {
							type: "string",
							description: "Automatic dark mode setting.\n\n    The value that the user has selected for this setting in the native mobile apps.\n    iOS and Android have slightly different use cases. Battery saver mode only applies\n    to Android.",
							enums: ["off", "follow_os", "location_based", "battery_saver", "location_based_and_battery_saver"]
						},
						theme: {
							type: "string",
							description: "App theme, e.g. ponymode.",
							enums: ["alienbluemode", "amoledmode", "default", "mintmode", "nightmode", "anonymousbrowsingmode", "ponymode", "treesmode"]
						},
						width: {
							type: "integer",
							description: "Screen width of the device.",
							minimum: 1
						}
					}
				},
				rt = {
					$id: "http://com.reddit/schemas/field_definitions/domain_ban/domain_ban.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Information regarding Domain Bans.",
					definitions: {
						regex: {
							type: "string",
							description: "Regexp required to match in order to ban url within the given domain. When left empty, the entire domain is banned.",
							pattern: "^.+$"
						},
						url: {
							type: "string",
							description: "URL/Domain that will be banned or unbanned.",
							pattern: "^.+$"
						},
						no_email: {
							type: "boolean",
							description: "Is email domain forbidden?"
						},
						shame_message: {
							type: "string",
							description: "Message shown to accounts trying to post to this domain. Will be empty, unless shame is turned on.",
							pattern: "^.+$"
						},
						inspector_exempt_regex: {
							type: "string",
							description: "Exemptions for banning, using regex. Will usually be left empty.",
							pattern: "^.+$"
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
							description: "Internal ban message for this domain. Can be left empty.",
							pattern: "^.+$"
						}
					}
				},
				ot = {
					$id: "http://com.reddit/schemas/field_definitions/econ/purchase.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Attributes of buy or cancel actions for digital products.",
					definitions: {
						count: {
							type: "integer",
							description: "Number of units.\n\n    Count and price depends on product definition.\n    Some products might be sold 1 by 1 then you can buy 13 things for $1.99 each.\n    Some products might be only sold in packs (like 750 couns + 3 days premium is a product) and you buy just one for $2.99\n\n    In any case money spend (payment_amount_in_smallest_denom) = count * price",
							minimum: 1
						},
						order_id: {
							type: "string",
							description: "Order associated with concrete billing event.",
							pattern: "^[a-zA-Z0-9_\\.-]{1,120}$"
						},
						product_version: {
							type: "integer",
							description: "product_id, product_version and subreddit_id define product being purchased.",
							minimum: 0
						},
						product_type: {
							type: "string",
							description: "Kind (or family) of the product being purchased."
						},
						price_micros: {
							type: "integer",
							description: "Price of a single unit in a smallest denominator of the currency (e.g. cents for USD).",
							minimum: 0
						},
						product_id: {
							type: "string",
							description: "product_id, product_version and subreddit_id define product being purchased.",
							pattern: "^[a-zA-Z0-9_\\.-]{1,120}$"
						},
						currency: {
							type: "string",
							description: "Currency used in the transaction, e.g. usd or coins.",
							enums: ["usd", "coins"]
						},
						subscription_id: {
							type: "string",
							description: "For `type = new | update | renew` subscription_id links operations on a particular subscription.",
							pattern: "^[a-zA-Z0-9_\\.-]{1,120}$"
						},
						count_remaining: {
							type: "integer",
							description: "Present on subscriptions update. Number of units remaning in subscription after update.",
							minimum: 0
						},
						type: {
							type: "string",
							description: "Regular purchase has type `once`. Subscriptions are new, update, renew.\n\n    Subscription cancellation is also an `update`, while `review` is automated billing\n    at the end of the billing cycle.",
							enums: ["once", "new", "update", "renew"]
						},
						days_remaining: {
							type: "integer",
							description: "For reccuring payments how many days left till the next payment (even if it's cancelled)."
						}
					}
				},
				at = {
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
							description: "Subject line of the email.",
							pattern: "^.+$"
						},
						preview_text: {
							type: "string",
							description: "Preview text of the email.",
							pattern: "^.+$"
						},
						header_text: {
							type: "string",
							description: 'The text that\'s in the header of the email, e.g. "Top posts on Reddit".',
							pattern: "^.+$"
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
				dt = {
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
							description: 'Prompt used to solicit feedback\n\n    Example value: "Would you use this feature?"',
							pattern: "^\\S+$"
						},
						variant: {
							type: "string",
							description: "Variants of the test.\n\n    Example values: variant_1, red_dialog"
						},
						response: {
							type: "string",
							description: 'Open-ended response recorded from the test.\n\n    Example values: "yes", "I don\'t like this because..."',
							pattern: "\\S"
						},
						id: {
							type: "integer",
							description: "Unique identifier of the click test.",
							minimum: 0
						},
						owner: {
							type: "string",
							description: "Team that owns the click test."
						},
						page_type: {
							type: "string",
							description: 'Type of page collecting user feedback.\n\n    Expected values are: "question", "yes", "no".',
							enums: ["question", "yes", "no"]
						}
					}
				},
				ct = {
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
							description: "Brief desription of the experiment's impact on a user experience.",
							pattern: "^.{0,200}$"
						},
						start_timestamp: {
							type: "number",
							description: "Timestamp of the start of the experiment."
						},
						github_link: {
							type: "string",
							description: "Github link for an event's appropriate expose emit log.",
							pattern: "^https:\\/\\/github\\.snooguts\\.net\\S+$"
						},
						version: {
							type: "string",
							description: "Experiment version.",
							pattern: "^[0-9]+(\\.[0-9]+)*$"
						},
						variant_names: {
							type: "array",
							description: "List of all experiment variants."
						},
						id: {
							type: "integer",
							description: "Unique identifier of the experiment.",
							minimum: 0
						},
						bucketing_value: {
							type: "string",
							description: "The value used to bucket the experiment.\n\n    This value may be redundant with another value within the schema,\n    but is intended to provide a single place to be able to pull out\n    this value, and to ensure that it gets sent on every experiment even\n    if it isn't explicitly sent as additional inputs on the variant call."
						},
						qa_proxy_event: {
							type: "string",
							description: "app_name, source, action, noun, action_info_page_type (ASANA) that fires near the expose event.\n\n    This is used to sanity check the volume of exposure events being fired.",
							pattern: "^([_a-z]+\\/){4}[_a-z]+$"
						},
						owner: {
							type: "string",
							description: "Team that owns the experiment, or contact email of owner.",
							pattern: "^[-_a-z0-9.]+(@reddit\\.com)?$"
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
				mt = {
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
							description: "Version of the feature.\n\n    Format as a semantic version e.g. v1.2.3skip_validation:False",
							pattern: "^v[0-9]+\\.[0-9]+\\.[0-9]+$"
						},
						version_description: {
							type: "string",
							description: "Short description of the feature version.\n\n    Identifies the distinguishing changes in this version of the feature.\n\n    Examples:\n    - \"This version of the discovery unit has title 'Discover more'\"\n    - \"This version of the discovery unit has title including the topic name,\n        e.g. 'Discover more in Fashion'\"skip_validation:False",
							pattern: "^.{1,256}$"
						}
					}
				},
				pt = {
					$id: "http://com.reddit/schemas/field_definitions/feed/feed.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the characteristics of a feed (home, popular, all).",
					definitions: {
						correlation_id: {
							type: "string",
							description: "Correlation IDs are used to easily track down related events.\n\n    Having a correlation ID associated with feed-related events allows us to batch together\n    the events associated with a user's feed browsing session.\n\n    This ID should be of a uuid format and each should be randomly generated."
						}
					}
				},
				_t = {
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
							description: "Total amount of ads credits to be used before accruing balance.",
							minimum: 0
						},
						name: {
							type: "string",
							description: "The name of the funding instrument.",
							pattern: "^.+$"
						},
						writeoff_micros: {
							type: "integer",
							description: "Field for admins to manually adjust a 'billable amount' on a funding instrument, in microdollars.",
							minimum: 0
						},
						spent_freebies_micros: {
							type: "integer",
							description: "Total amount of ads credit used, in microdollars.",
							minimum: 0
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
							description: "User selected threshold to be billed when amount is reached, in microdollars.",
							minimum: 0
						},
						total_payment_micros: {
							type: "integer",
							description: "Total amount of payment to Reddit, in microdollars.",
							minimum: 0
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
							description: "Amount in credit line, in microdollars.",
							minimum: 0
						},
						max_billing_threshold_micros: {
							type: "integer",
							description: "Max value for user billing_threshold_micros, in microdollars.",
							minimum: 0
						},
						original_payment_id: {
							type: "string",
							description: "Original payment id required for refunds.",
							pattern: "^\\d+[\\d\\.]+\\d$"
						},
						user_id: {
							type: "string",
							description: "Owner of the funding instrument."
						},
						authorize_payment_profile_id: {
							type: "string",
							description: "Payment Profile id in Authorize.",
							pattern: "^\\d+[\\d\\.]+\\d$"
						},
						total_refund_micros: {
							type: "integer",
							description: "Total amount of refund, in microdollars.",
							minimum: 0
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
							description: "Pointer to external payment id (currently stored in authorize_transactions_by_user).",
							pattern: "^\\d+[\\d\\.]+\\d$"
						},
						adzerk_lifetime_micros: {
							type: "integer",
							description: "This is original spent value from legacy Adzerk, in microdollars.",
							minimum: 0
						},
						overdelivery_micros: {
							type: "integer",
							description: "Total amount of overdelivery, in microdollars.",
							minimum: 0
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
							description: "Profile id in Authorize.",
							pattern: "^\\d+[\\d\\.]+\\d$"
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
							description: "The type of the funding instrument.",
							enums: ["credit_card", "credit_line", "insertion_order", "placeholder"]
						},
						estimated_spending_micros: {
							type: "integer",
							description: "Total estimate of spend past most recent rollup, in microdollars.",
							minimum: 0
						},
						total_spending_micros: {
							type: "integer",
							description: "Total amount of delivery, in microdollars.",
							minimum: 0
						},
						balance_micros: {
							type: "integer",
							description: "Current balance amount, in microdollars.",
							pattern: ".*"
						},
						level: {
							type: "string",
							description: "The level of the funding instrument.",
							enums: ["advertiser", "campaign"]
						},
						active: {
							type: "boolean",
							description: "Is the funding instrument active."
						},
						netsuite_customer_internal_id: {
							type: "string",
							description: "Net Suite customer internal id.",
							pattern: "^\\d+[\\d\\.]+\\d$"
						}
					}
				},
				ht = {
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
							description: "A string giving the reason for the Geo Block (e.g. NetzDG request, general legal request, ...)",
							enums: ["general", "netzdg", "fto"]
						},
						public_note: {
							type: "string",
							description: "Note that is displayed when users from targeted countries land on geo-blocked content.",
							pattern: "^.+$"
						}
					}
				},
				lt = {
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
				ft = {
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
				ut = {
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
							description: "Text of the note.",
							pattern: "^.+$"
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
							description: "JSON text blob of the state of the game when the event fired.\n\n    Format is [{note_id: note_text}, ...]",
							pattern: "^.+$"
						}
					}
				},
				gt = {
					$id: "http://com.reddit/schemas/field_definitions/inbox/inbox.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields for the client and server side notifications inbox.",
					definitions: {
						tab: {
							type: "string",
							description: "Tab of the inbox a user is viewing.",
							enums: ["activity", "messages", "modmail"]
						},
						badge_count: {
							type: "integer",
							description: "Badge count on the inbox tab when the user views it.",
							minimum: 0
						},
						is_clicked: {
							type: "boolean",
							description: "Whether the inbox message has been clicked.\n\n    This means a user has selected the message from the inbox and the client has marked it as read on the backend."
						},
						id: {
							type: "string",
							description: "Unique identifier for the inbox message.\n\n    The static identifier is used by both backend and client. This value should be unique per user per inbox item.\n\n    Values may either be UUIDs, or for inbox messages, thing ids corresponding to messages.",
							pattern: "^[-_a-zA-Z0-9]+$"
						},
						is_viewed: {
							type: "boolean",
							description: "Whether the inbox message has been viewed.\n\n    Denotes whether the inbox item has been viewed on screen before. This means the user has received it from the server and at least opened the inbox tab to see the message presented there."
						}
					}
				},
				yt = {
					$id: "http://com.reddit/schemas/field_definitions/legal_export_request/legal_export_request.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Model for legal export requests.",
					definitions: {
						target_id: {
							type: "string",
							description: "Reddit thing_id that is the subject of the data export.",
							pattern: "^t[0-9]_[a-z0-9]+$"
						},
						requested_information: {
							type: "array",
							description: "A list of (lowercase) strings giving the requested information."
						},
						ads_data_status: {
							type: "string",
							description: "The status of the ads data for the user the request refers to.",
							enums: ["unknown", "not_present", "present_not_sent", "present_sent"]
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
							description: "Legal export request ID.",
							minimum: 0
						},
						status: {
							type: "string",
							description: "A string giving the status of the request when the event was emitted.",
							enums: ["not_started", "pending", "completed", "error", "closed"]
						},
						requestor_id: {
							type: "string",
							description: "Reddit thing_id (t2_) for the internal user who submits the request for export.",
							pattern: "^t2_[a-z0-9]+$"
						},
						completed_timestamp: {
							type: "number",
							description: "Endpoint timestamp of the message event that delivered the export to the user."
						},
						target_type: {
							type: "string",
							description: "Field that describes the target_id.\n\n    For example: 'user' or 'subreddit'",
							pattern: "^.+$"
						},
						automation_type: {
							type: "string",
							description: "The type of automation.\n    reddit-service-admin admin.thrift enum LegalExportProcess",
							enums: ["automated", "manual_intervention", "unset"]
						},
						user_ids: {
							type: "array",
							description: "A list with the reddit ids of the users the legal request refers to.\n\n    Note: In most of the cases the list will have a single element."
						},
						type: {
							type: "string",
							description: "A string giving the type of the legal export request.",
							enums: ["subpoena", "court_order", "search_warrant", "pen_register", "trap_and_trace_order", "emergency_disclosure_request", "preservation_request", "ncmec_preservation", "civil_subpoena", "civil_court_order", "criminal_defense_subpoena", "criminal_defense_court_order", "gdpr_request_for_user_data", "foreign_request_for_production", "ccpa_request_for_user_data", "other_request_for_user_data", "foreign_request_for_preservation", "preservation_to_production"]
						},
						gifts_data_status: {
							type: "string",
							description: "The status of the gifts data for the user the request refers to.",
							enums: ["unknown", "not_present", "present_not_sent", "present_sent"]
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
				vt = {
					$id: "http://com.reddit/schemas/field_definitions/live_thread/live_thread.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Live Threads are ongoing events that pop up in reddit.com/live\n\nLive threads are also used for annoucements for some reason.",
					definitions: {
						id: {
							type: "string",
							description: 'Live thread ID. Formatted as base36, e.g. "11sl1svj5tn5p".',
							pattern: "^[a-z0-9]+$"
						},
						is_announcement: {
							type: "boolean",
							description: "Is this an announcement?"
						}
					}
				},
				bt = {
					$id: "http://com.reddit/schemas/field_definitions/metaflair/meta_flair.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: 'Flairs defined by Reddit.\n\nMeta Flair is the more generalized replacement for Subreddit Categories. Meta Flairs have an ID and a title, and\nshould be viewed in a similar scope to a "Post" or a "Subreddit" as it is a specific piece of content that the user\nmay click or view.',
					definitions: {
						id: {
							type: "string",
							description: "Unique id for the MetaFlair.",
							pattern: "^c[0-9]+$"
						},
						title: {
							type: "string",
							description: 'The human-readable display name for the category, e.g. "Animals" or "Pics & GIFs".',
							pattern: "^.{1,64}$"
						}
					}
				},
				wt = {
					$id: "http://com.reddit/schemas/field_definitions/metasearch/meta_search.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: 'A content item used to represent a "Search" item, such as a trending search item.',
					definitions: {
						meta_flair_id: {
							type: "string",
							description: 'Meta Flair option ID for search item.\n\n    Usually in the format of "cX" where X is a number.'
						},
						post_flair_name: {
							type: "string",
							description: "Post Flair option for search item.",
							pattern: "^\\S.*$"
						},
						subreddit_name: {
							type: "string",
							description: "Lowercase name of the subreddit option, e.g. askreddit."
						},
						subreddit_id: {
							type: "string",
							description: "Subreddit option for search item."
						},
						display_query: {
							type: "string",
							description: "Search query presented to the user.",
							pattern: "^.*$"
						},
						raw_query: {
							type: "string",
							description: "Actual query string backing the search item.",
							pattern: "^.*$"
						},
						range: {
							type: "string",
							description: "Range option for search item, e.g. hour, day, week.",
							enums: ["hour", "day", "week", "month", "year", "all"]
						},
						sort: {
							type: "string",
							description: "Sorting option for search item.",
							enums: ["hot", "new", "rising", "top", "controversial", "gilded", "wiki", "promoted", "best", "confidence", "qa", "old", "live", "relevance", "comments", "timestamp", "score", "upvotes"]
						},
						structure_type: {
							type: "string",
							description: 'Structure Type of search item.\n\n    Example values: "trending", "recent", "related", etc.'
						},
						meta_flair_name: {
							type: "string",
							description: "The display title of the MetaFlair option.",
							pattern: "^\\S.*$"
						}
					}
				},
				$t = {
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
				jt = {
					$id: "http://com.reddit/schemas/field_definitions/midas/geo.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Midas-enriched geographical fields.",
					definitions: {
						city: {
							type: "string",
							description: "City of the user.",
							pattern: "^.{1,128}$"
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
							description: "Metro code aka DMA region code of the location if location is in US.",
							minimum: 500,
							maximum: 881
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
							description: 'Short form country code e.g. "US".',
							pattern: "^[A-Z]{2}$"
						},
						region: {
							type: "string",
							description: 'State or province within a country e.g. "CA".\n\n    The format of this field can change depending on the country. For example, in the US it is the two letter\n    state code. Australia is three letter codes, Singapore contains digits, etc.',
							pattern: "^([A-Z]{1,3}|\\d+[A-Z]?|[A-Z][0-9])$"
						},
						time_zone: {
							type: "string",
							description: 'ISO time zone string e.g. "America/Los_Angeles".',
							pattern: "^[-A-Za-z_\\/]+$"
						}
					}
				},
				kt = {
					$id: "http://com.reddit/schemas/field_definitions/midas/inferred.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Midas-inferred fields. Like all Midas-enriched fields, this should never be set by clients.",
					definitions: {
						app_name: {
							type: "string",
							description: "The name of the app/code base sending the event after being interpreted by Midas.\n\n    Midas uses the Oauth Id then the User Agent to estimate the app name.\n\n    Expected values:\n        * web: desktop site\n        * web2x: redesigned desktop site\n        * mweb: mobile site\n        * ios: Reddit-native iOS app\n        * android: Reddit-native Android app\n        * amp: Google's Accelerated Mobile Pages\n        * third party app name lowercased with _ for spaces"
						}
					}
				},
				xt = {
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
				Pt = {
					$id: "http://com.reddit/schemas/field_definitions/midas/url_parsed.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Midas-enriched url parsing.",
					definitions: {
						utm_source: {
							type: "string",
							description: "The top-level source of the UTM referral (standardized).",
							enums: ["bd", "email", "paid", "share", "social", "reddit", "xpromo", "post_widget", "image_widget", "text_widget", "calendar_widget"]
						},
						shared_hash: {
							type: "string",
							description: 'Shared hash from the url parameters e.g. "c0138fa2".',
							pattern: "^[a-z0-9]{8}$"
						},
						shared_timestamp: {
							type: "number",
							description: "Shared timestamp from the url parameters."
						},
						utm_content: {
							type: "string",
							description: "For differentiating otherwise identical links to the same content with different copy.",
							pattern: "^[\\S ]{0,256}$"
						},
						utm_campaign: {
							type: "string",
							description: "For differentiating what campaign this content is coming from.",
							pattern: "^[\\S ]{0,256}$"
						},
						utm_medium: {
							type: "string",
							description: "The specific type of element that the referrer came through (standardized).",
							enums: ["amp", "android_app", "appstore_search", "bing_search", "digest", "email", "facebook", "facebook_retargeting", "google_retarget", "google_search", "ios_app", "mweb", "paid", "playstore_search", "share", "twitter", "web2x", "xpromo", "small_widget", "medium_widget", "large_widget"]
						},
						utm_name: {
							type: "string",
							description: "The name or edition of the campaign running, link, or date of newsletter.",
							pattern: "^[\\S ]{0,256}$"
						},
						utm_term: {
							type: "string",
							description: "The term of of the referrer. Subject content, etc.",
							pattern: "^[\\S ]{0,256}$"
						}
					}
				},
				qt = {
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
							description: 'Feature blob used to product the prediction.\n\n    Format is:\n    {"feature_name_0": "value0", "fature_name_1": "another_value", ...}\n\n    If used, please check in with the Data team to assess data volume and user security concerns.',
							pattern: ".+"
						},
						prediction_scores: {
							type: "string",
							description: 'JSON containing raw classification score correspond to each label.\n\n    The field is used for BINARY or MULTICLASS models.\n\n    Example:\n    {"label_1": "0.8", "label_2": "0.2", ...}',
							pattern: "^{.+}$"
						},
						client_name: {
							type: "string",
							description: "The name of the client issuing the ML prediction request (e.g. admin_tool).",
							pattern: ".+"
						},
						prediction: {
							type: "string",
							description: "The prediction made by the model. If numeric, still store as a string.",
							pattern: ".+"
						},
						version: {
							type: "string",
							description: "Version of the model to help distinguish between iterations or training set.\n\n    Examples include v1, 0.1, 20190903, etc.",
							pattern: ".+"
						},
						prediction_id: {
							type: "string",
							description: "A string giving a unique id for the prediction request.\n\n    The id is supplied by the client when issuing the prediction request. Clients are encouraged to\n    use the hex representation of a randonly generated v4 UUID but the type of the field is string\n    to keep it generic for other possible formats.",
							pattern: ".+"
						},
						owner: {
							type: "string",
							description: "Team responsible for maintaining this model."
						},
						type: {
							type: "string",
							description: "The type of the ML predictive model used to fulfill the prediction request.",
							enums: ["binary", "multiclass", "regression"]
						}
					}
				},
				Et = {
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
						}
					}
				},
				Tt = {
					$id: "http://com.reddit/schemas/field_definitions/mute/mute.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents information about mute history and length for the associated mute.",
					definitions: {
						total_mutes: {
							type: "integer",
							description: "The total number of mutes this user has had for this subreddit.",
							minimum: 0
						},
						last_mute_timestamp: {
							type: "number",
							description: "The starting time (epoch ms) of the most recent mute."
						},
						state: {
							type: "string",
							description: "The length of this mute, defined as a string.",
							enums: ["temp_3d", "temp_7d", "temp_28d", "permanent"]
						}
					}
				},
				St = {
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
							description: 'If a message was dropped, the name of the object that made the decision to drop the message.\n\n    Example values:\n        * "UserPrefsDecider" - user disabled the given message_type.\n        * "PerUserMessageTypeDecider" - message was ratelimited for the recipient based on its message_type.\n        * "UsernameMentionPushNotificationRenderer" - notification renderer could not find any active devices\n            for the recipient.',
							pattern: "^[a-zA-Z0-9_]+$"
						},
						region_num: {
							type: "integer",
							description: "Used to distinguish the device's region as an integer.\n\n    Example values:\n        * 0 for US, 1 for EU, 2 for APAC",
							minimum: 0
						},
						message_id: {
							type: "string",
							description: "UUID for the message sent as a notification.\n\n    Note that multiple notifications can have the same message id."
						},
						notification_target: {
							type: "string",
							description: 'Hash of the "target" of the notification.\n\n    Note that different notification types have different targets.\n\n    Values:\n        * push: push token\n        * email: email address',
							pattern: "^([a-f0-9]{64}|[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+)$"
						},
						message_variant: {
							type: "string",
							description: 'Used to distinguish different sub-types within a given message_type.\n\n    For example, trending notifications send in two phases, one "explore" phase and one "exploit" phase.  This value is\n    used to distinguish between messages sent in each of those phases.\n\n    Example values:\n        * "explore"/"exploit" for "lifecycle_post_suggestions" notifications',
							pattern: "^[a-z0-9_]+$"
						},
						notification_transport: {
							type: "string",
							description: 'The transport that a notification is sent by.\n\n    For example "push" for push notifications or "email" for emails.'
						},
						region: {
							type: "string",
							description: 'Used to distinguish the device\'s region.\n\n    Example values:\n        * "america", "europe", "asia_pacific"',
							pattern: "^[a-z0-9_]+$"
						},
						delivery_queue_name: {
							type: "string",
							description: "The Deliveryman message queue that Mailroom enqueued a notification to."
						}
					}
				},
				At = {
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
				Dt = {
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
							description: "The app, e.g. ios or android, the notification is sent to.",
							enums: ["ios", "android", "desktop_chrome", "android_chrome", "desktop_edge", "desktop_firefox", "desktop_opera", "unknown", "email"]
						},
						status: {
							type: "string",
							description: "The status of the request that was made.",
							enums: ["success", "fail"]
						},
						platform: {
							type: "string",
							description: "The push notification platform used.",
							enums: ["apns", "apns_sandbox", "apns_qa", "apns_qa_sandbox", "gcm", "desktop_chrome", "android_chrome", "desktop_edge", "desktop_firefox", "desktop_opera"]
						},
						recipient_device_id: {
							type: "string",
							description: "The device identifier for the recipient.",
							pattern: "^(([a-f0-9]{64})|([a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}))$"
						},
						source_queue_name: {
							type: "string",
							description: "The message queue that the notification was read from."
						}
					}
				},
				Rt = {
					$id: "http://com.reddit/schemas/field_definitions/outbound/outbound.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Information about visiting outbound urls.",
					definitions: {
						url: {
							type: "string",
							description: "Outbound url the user visited.\n    \n    There's a lot of URL formats and it's pain to match them all.\n    Examples: google.com, https://google.com, /r/subreddit, /u/username, about:blank, etc.",
							pattern: "^\\S+$"
						},
						subreddit_name: {
							type: "string",
							description: "Subreddit name if the URL is a subreddit URL.\n\n    pattern:^[-_a-z0-9]+$"
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
							description: "Source element of this outbound click.",
							enums: ["listing_post_image", "listing_post_link", "listing_post_detail", "post_image", "post_link", "post_detail", "comment"]
						}
					}
				},
				It = {
					$id: "http://com.reddit/schemas/field_definitions/payment/payment.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the characteristics of any event that involves a purchase.",
					definitions: {
						stored_credit_card_state: {
							type: "string",
							description: "State of using a saved or saving a new credit card.",
							enums: ["save_new", "save_existing"]
						},
						method: {
							type: "string",
							description: "Method used for purchase, e.g. credit card or paypal.",
							enums: ["creddit", "credit_card", "bitcoin", "paypal", "apple_pay", "google_pay", "coins"]
						},
						amount_in_smallest_denom: {
							type: "integer",
							description: "Price in the smallest unit of the currency (cents for USD).",
							minimum: 0
						},
						currency: {
							type: "string",
							description: 'Currency used for purchase (e.g. "USD").',
							pattern: "^[A-Z]{3}$"
						},
						default_option: {
							type: "string",
							description: "Default payment type selected when purchasing.",
							enums: ["paypal", "credit_card"]
						}
					}
				},
				Ft = {
					$id: "http://com.reddit/schemas/field_definitions/perspective/perspective.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Perspective is an API provided by TODO that does NLP on comments provides\nlabels",
					definitions: {
						inflammatory: {
							type: "number",
							description: '"inflammatory" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.',
							minimum: 0,
							maximum: 1
						},
						max_identity_attack: {
							type: "number",
							description: 'Max allowed value for the "identity_attack" attribute\n    at the moment the message is scored.',
							minimum: 0,
							maximum: 1
						},
						max_sexually_explicit: {
							type: "number",
							description: 'Max allowed value for the "sexually_explicit" attribute\n    at the moment the message is scored.',
							minimum: 0,
							maximum: 1
						},
						obscene: {
							type: "number",
							description: '"obscene" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.',
							minimum: 0,
							maximum: 1
						},
						toxicity: {
							type: "number",
							description: '"toxicity" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.',
							minimum: 0,
							maximum: 1
						},
						max_attack_on_commenter: {
							type: "number",
							description: 'Max allowed value for the "attack_on_commenter" attribute\n    at the moment the message is scored.',
							minimum: 0,
							maximum: 1
						},
						max_obscene: {
							type: "number",
							description: 'Max allowed value for the "obscene" attribute\n    at the moment the message is scored.',
							minimum: 0,
							maximum: 1
						},
						profanity: {
							type: "number",
							description: '"profanity" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.',
							minimum: 0,
							maximum: 1
						},
						max_flirtation: {
							type: "number",
							description: 'Max allowed value for the "flirtation" attribute\n    at the moment the message is scored.',
							minimum: 0,
							maximum: 1
						},
						max_spam: {
							type: "number",
							description: 'Max allowed value for the "spam" attribute\n    at the moment the message is scored.',
							minimum: 0,
							maximum: 1
						},
						collapse_reasons: {
							type: "array",
							description: "List of perspective reasons the comment being collapsed for."
						},
						max_inflammatory: {
							type: "number",
							description: 'Max allowed value for the "inflammatory" attribute\n    at the moment the message is scored.',
							minimum: 0,
							maximum: 1
						},
						max_insult: {
							type: "number",
							description: 'Max allowed value for the "insult" attribute\n    at the moment the message is scored.',
							minimum: 0,
							maximum: 1
						},
						insult: {
							type: "number",
							description: '"insult" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.',
							minimum: 0,
							maximum: 1
						},
						max_unsubstantial: {
							type: "number",
							description: 'Max allowed value for the "unsubstantial" attribute\n    at the moment the message is scored.',
							minimum: 0,
							maximum: 1
						},
						max_toxicity: {
							type: "number",
							description: 'Max allowed value for the "toxicity" attribute\n    at the moment the message is scored.',
							minimum: 0,
							maximum: 1
						},
						max_profanity: {
							type: "number",
							description: 'Max allowed value for the "profanity" attribute\n    at the moment the message is scored.',
							minimum: 0,
							maximum: 1
						},
						sexually_explicit: {
							type: "number",
							description: '"sexually_explicit" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.',
							minimum: 0,
							maximum: 1
						},
						max_threat: {
							type: "number",
							description: 'Max allowed value for the "threat" attribute\n    at the moment the message is scored.',
							minimum: 0,
							maximum: 1
						},
						id: {
							type: "string",
							description: "UUID generated by a scoring system to keep track of the scores."
						},
						attack_on_commenter: {
							type: "number",
							description: '"attack_on_commenter" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.',
							minimum: 0,
							maximum: 1
						},
						max_likely_to_reject: {
							type: "number",
							description: 'Max allowed value for the "likely_to_reject" attribute\n    at the moment the message is scored.',
							minimum: 0,
							maximum: 1
						},
						unsubstantial: {
							type: "number",
							description: '"unsubstantial" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.',
							minimum: 0,
							maximum: 1
						},
						severe_toxicity: {
							type: "number",
							description: '"severe_toxicity" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.',
							minimum: 0,
							maximum: 1
						},
						flirtation: {
							type: "number",
							description: '"flirtation" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.',
							minimum: 0,
							maximum: 1
						},
						max_severe_toxicity: {
							type: "number",
							description: 'Max allowed value for the "severe_toxicity" attribute\n    at the moment the message is scored.',
							minimum: 0,
							maximum: 1
						},
						identity_attack: {
							type: "number",
							description: '"identity_attack" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.',
							minimum: 0,
							maximum: 1
						},
						threat: {
							type: "number",
							description: '"threat" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.',
							minimum: 0,
							maximum: 1
						},
						max_attack_on_author: {
							type: "number",
							description: 'Max allowed value for the "attack_on_author" attribute\n    at the moment the message is scored.',
							minimum: 0,
							maximum: 1
						},
						max_incoherent: {
							type: "number",
							description: 'Max allowed value for the "incoherent" attribute\n    at the moment the message is scored.',
							minimum: 0,
							maximum: 1
						},
						spam: {
							type: "number",
							description: '"spam" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.',
							minimum: 0,
							maximum: 1
						},
						attack_on_author: {
							type: "number",
							description: '"attack_on_author" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.',
							minimum: 0,
							maximum: 1
						},
						likely_to_reject: {
							type: "number",
							description: '"likely_to_reject" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.',
							minimum: 0,
							maximum: 1
						},
						incoherent: {
							type: "number",
							description: '"incoherent" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.',
							minimum: 0,
							maximum: 1
						}
					}
				},
				Ot = {
					$id: "http://com.reddit/schemas/field_definitions/playback/playback.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents fields related to a specific user's interactions with a video.",
					definitions: {
						scrubbing_start_ms: {
							type: "integer",
							description: "The time (in milliseconds) in the video where the user starts scrubbing player.",
							minimum: 0
						},
						chat_state: {
							type: "string",
							description: "The chat display state of the video playback.\n\n    Values and their definitions:\n      * none: No chat displayed as overlay on the video\n      * full_screen: A full screen chat overlay on the video\n      * compact: A partial screen chat overlay on the video",
							enums: ["none", "full_screen", "compact"]
						},
						watch_duration_ms: {
							type: "integer",
							description: "The elapsed time (in milliseconds) of content watched since the start of the video playback session.",
							minimum: 0
						},
						timestamp_ms: {
							type: "integer",
							description: "The current timestamp (in milliseconds) in the video.",
							minimum: 0
						},
						player_type: {
							type: "string",
							description: "The player type of the video presentation\n\n    Values and their definitions:\n      * theater: The full screen RPAN theater experience\n      * feed_post: A stream as a post type embedded in a feed of posts\n      * discovery_unit: A stream embedded as part of a discovery unit",
							enums: ["theater", "feed_post", "discovery_unit"]
						},
						start_time_ms: {
							type: "integer",
							description: "The timestamp (epoch milliseconds) when the playback session started.",
							minimum: 0
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
							description: "The time offset (absolute value, in milliseconds) of the playhead from the maximum available timestamp of the video.",
							minimum: 0
						},
						session_duration_ms: {
							type: "integer",
							description: "The time (in milliseconds) since the start of the video playback session.",
							minimum: 0
						},
						heartbeat_duration_ms: {
							type: "integer",
							description: "The elapsed time (in milliseconds) of content watched since the last heartbeat of this playback session.",
							minimum: 0
						},
						volume: {
							type: "integer",
							description: "The audio volume of the video playback, on a scale from 0 to 100 where 0 is muted.",
							minimum: 0,
							maximum: 100
						},
						scrubbing_end_ms: {
							type: "integer",
							description: "The time (in milliseconds) in the video where the user ends scrubbing player.",
							minimum: 0
						}
					}
				},
				zt = {
					$id: "http://com.reddit/schemas/field_definitions/poll/poll.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Details about a poll in poll post.",
					definitions: {
						user_vote_text: {
							type: "string",
							description: "Contains the text of the option the user voted on.\n\n    NOTE: This is only attached to user vote actions.",
							pattern: ".+"
						},
						options_length: {
							type: "integer",
							description: "The number of options in the poll.",
							minimum: 1
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
							description: "The number of coins associated with the chosen prediction option.",
							minimum: 0
						},
						type: {
							type: "string",
							description: "Type of the poll.\n    \n    Values and their definitions:\n        * poll: Regular poll with voting\n        * predict: Prediction, to be participated with Reddit Coins",
							enums: ["poll", "predict"]
						}
					}
				},
				Ct = {
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
							description: "Text shown to the user.",
							pattern: "^.+$"
						}
					}
				},
				Ut = {
					$id: "http://com.reddit/schemas/field_definitions/post_draft/post_draft.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the characteristics of a post draft.",
					definitions: {
						url_length: {
							type: "integer",
							description: "Length of the URL for link drafts.",
							minimum: 0
						},
						title_length: {
							type: "integer",
							description: "Length of the draft title.",
							minimum: 0
						},
						number_rte_videos: {
							type: "integer",
							description: "Number of videos in the rich text draft.",
							minimum: 0
						},
						flair: {
							type: "string",
							description: "Flair text of the draft.",
							pattern: "^[^\\n]{0,64}$"
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
							description: "Length of the draft content.",
							minimum: 0
						},
						type: {
							type: "string",
							description: "Type of the draft.\n\n    Values and their definitions:\n        * self: markdown text\n        * link: link draft\n        * image: image draft\n        * video: video draft\n        * multi_media: rich text draft (RTE)",
							enums: ["self", "link", "image", "video", "multi_media"]
						},
						original_content: {
							type: "boolean",
							description: "Is the draft flagged as original content."
						},
						number_rte_images: {
							type: "integer",
							description: "Number of images in the rich text draft.",
							minimum: 0
						}
					}
				},
				Lt = {
					$id: "http://com.reddit/schemas/field_definitions/post_requirement/post_requirement.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Requirements for a post to be submitted to a subreddit.",
					definitions: {
						title_text_max_length: {
							type: "integer",
							description: "The maximum length of the title.",
							minimum: 0
						},
						title_blacklisted_strings: {
							type: "array",
							description: "A list of strings that are prohibited in the post title."
						},
						number_repost_frequency_days: {
							type: "integer",
							description: "Days since a link was posted before it can be reposted.",
							minimum: 0
						},
						link_whitelisted_domains_length: {
							type: "integer",
							description: "Number of domains in the link whitelist.",
							minimum: 0
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
							description: "The minimum length of the title.",
							minimum: 0
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
							description: "Number of domains in the link blackist.",
							minimum: 0
						},
						body_restriction_policy: {
							type: "string",
							description: "Determines if we require or prohibit text in post bodies.",
							enums: ["optional", "required", "disabled"]
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
				Nt = {
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
							description: "The display title for post flair.\n\n    Note that post flairs are restricted to 64 characters, but the validator\n    fails on unicode values, hence no length restrictions in the following\n    regex pattern.",
							pattern: "^[^\\n]+$"
						}
					}
				},
				Mt = {
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
							description: "Powerups count (for allocation/deallocation).",
							minimum: 1
						},
						is_grace_period: {
							type: "boolean",
							description: "If subreddit is currently in a grace period."
						},
						tier: {
							type: "integer",
							description: "Current effective Subreddit tier.",
							minimum: 1
						},
						post_type: {
							type: "string",
							description: "Powerups benefits used for this post.\n\n    Nested string field (comma-separated).",
							pattern: "^[a-z0-9_-]+(,[a-z0-9_-]+)*$"
						},
						paid_count: {
							type: "integer",
							description: "Count of powerups that user has paid for.\n\n    For now fields free_count and paid_count are mutually exclusive.",
							minimum: 0
						},
						free_count: {
							type: "integer",
							description: "Count of powerups that was provided for free or as a part of other subscription.\n\n    For now fields free_count and paid_count are mutually exclusive.",
							minimum: 0
						},
						subscription_id: {
							type: "string",
							description: 'Subscription associated with allocated/deallocated powerups.\n\n    "premium" for powerups provided as a part of Reddit Premium subscription.',
							pattern: "^[a-zA-Z0-9_\\.-]{1,120}$"
						},
						benefit: {
							type: "string",
							description: "Benefit title in upsell.",
							enums: ["sd_video", "posts_image_upload", "hd_video", "comments_with_gifs", "comments_with_emoji"]
						},
						current_subreddit_powerups: {
							type: "integer",
							description: "Current subreddit powerups count, after allocation.",
							minimum: 0
						}
					}
				},
				Ht = {
					$id: "http://com.reddit/schemas/field_definitions/progress_module/progress_module.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents fields specific to Communnity Progress Module.\n\nA Community Progress Module is a series of action cards on iOS, Android, and d2x that\nhelp moderators to take actions that are most likely to build a successful community.",
					definitions: {
						module_name: {
							type: "string",
							description: 'Name of the community progress module.\n\n    e.g. "new_community_setup"skip_validation:False',
							pattern: "^[_a-z0-9]+$"
						},
						card_name: {
							type: "string",
							description: 'Name of the community progress card.\n\n    e.g. "community_invite"skip_validation:False',
							pattern: "^[_a-z0-9]+$"
						}
					}
				},
				Bt = {
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
				};
			const Wt = [s, n, r, o, a, d, c, m, p, _, h, l, f, u, g, y, v, b, w, $, j, k, x, P, q, E, T, S, A, D, R, I, F, O, z, C, U, L, N, M, H, B, W, V, Q, Z, G, J, Y, K, X, ee, te, ie, se, ne, re, oe, ae, de, ce, me, pe, _e, he, le, fe, ue, ge, ye, ve, be, we, $e, je, ke, xe, Pe, qe, Ee, Te, Se, Ae, De, Re, Ie, Fe, Oe, ze, Ce, Ue, Le, Ne, Me, He, Be, We, Ve, Qe, Ze, Ge, Je, Ye, Ke, Xe, et, tt, it, st, nt, rt, ot, at, dt, ct, mt, pt, _t, ht, lt, ft, ut, gt, yt, vt, bt, wt, $t, jt, kt, xt, Pt, qt, Et, Tt, St, At, Dt, Rt, It, Ft, Ot, zt, Ct, Ut, Lt, Nt, Mt, Ht, Bt, {
				$id: "http://com.reddit/schemas/field_definitions/rater_tag/rater_tag.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "This struct is used to capture community topic tag info.",
				definitions: {
					tagging_question: {
						type: "string",
						description: "The full text of the question asked.",
						pattern: ".+"
					},
					non_selected_answers: {
						type: "array",
						description: "The set of non selected answers from the answer set"
					},
					tagging_question_object: {
						type: "string",
						description: 'The subject being evaluated.\n\n    e.g. "San Francisco, CA" for Geo, "Home and Garden" for Topic',
						pattern: ".+"
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
						description: "The id of the question asked",
						pattern: ".+"
					},
					tagging_job_id: {
						type: "string",
						description: "A unique id associated with a particular batch of jobs.",
						pattern: ".+"
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
			}, {
				$id: "http://com.reddit/schemas/field_definitions/relevance/relevance_model.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Relevance model schema.\n\nInformation about the usage and performance of relevance models.",
				definitions: {
					result_duration: {
						type: "integer",
						description: "Time took to make the result in milliseconds.",
						minimum: 0
					},
					identifier: {
						type: "string",
						description: "The name or identifier of the model.",
						pattern: "^[-._a-zA-Z0-9]+$"
					},
					number_max_recommendations: {
						type: "integer",
						description: "Max number of results returned.",
						minimum: 0
					},
					version: {
						type: "string",
						description: "The version of the model family. For example, 2018-03-11-comment-features.",
						pattern: "^[-._a-zA-Z0-9]+$"
					},
					result_blob: {
						type: "string",
						description: "JSON text blob of result specific to each model.",
						pattern: "^.+$"
					},
					family: {
						type: "string",
						description: "The model family -- e.g. LogisticRegression, RandomForest, Perceptron ;)",
						pattern: "^[-._a-zA-Z0-9]+$"
					},
					feature_blob: {
						type: "string",
						description: "JSON text blob of features specific to each model.",
						pattern: "^.+$"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/report/report.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Represents the characteristics of a user report of content on site.",
				definitions: {
					reason_code: {
						type: "string",
						description: "Type of report.",
						enums: ["spam", "harassment_at_me", "harassment_at_someone_else", "violence_at_me", "violence_at_someone_else", "vulgarity", "pii", "minor_sexualization", "invol_porn_with_me", "invol_porn_without_me", "ban_evasion", "vote_manipulation", "marketplace", "impersonation", "copyright", "trademark", "self_harm", "user_profile", "hate_content", "pii_about_me", "pii_about_someone_else", "involuntary_porn_self", "involuntary_porn_other", "prohibited_sales", "report_button_abuse", "misinformation", "impersonation_self", "impersonation_other", "copyright_self", "copyright_other", "trademark_self", "trademark_other", "netzdg", "self_harm", "spam_link_farming", "spam_unsolicited_pms", "spam_comment_flooding", "spam_malware", "spam_bots", "spam_other", "custom", "subreddit", "other"]
					},
					id: {
						type: "string",
						description: "Required identifier for a report.\n\n    This field is a report's reddit_id. Prefix 'reports__'\n    followed by base36 value.\n    For example: 'reports__23b'",
						pattern: "^reports__[a-z0-9]+$"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/request/api.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "This struct is deprecated and will be removed soon!",
				definitions: {
					name: {
						type: "string",
						description: "This field is deprecated and will be removed soon!",
						pattern: "^.+$"
					},
					address: {
						type: "string",
						description: "This field is deprecated and will be removed soon!",
						pattern: "^.+$"
					},
					endpoint: {
						type: "string",
						description: "This field is deprecated and will be removed soon!",
						pattern: "^.+$"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/request/api_response.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "This struct is deprecated and will be removed soon!",
				definitions: {
					response_code: {
						type: "integer",
						description: "This field is deprecated and will be removed soon!",
						pattern: "^.+$"
					},
					error_name: {
						type: "string",
						description: "This field is deprecated and will be removed soon!",
						pattern: "^.+$"
					},
					error: {
						type: "string",
						description: "This field is deprecated and will be removed soon!",
						pattern: "^.+$"
					},
					content: {
						type: "string",
						description: "This field is deprecated and will be removed soon!",
						pattern: "^.+$"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/request/oauth.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Fields for Oauth clients.",
				definitions: {
					client_app_type: {
						type: "string",
						description: "OAuth client type.",
						enums: ["web", "installed", "script"]
					},
					client_name: {
						type: "string",
						description: "This is the name of client application making the request.\n\n    For example, in the instance of using a browser, this field is the name of that browser.",
						pattern: "^[\\x00-\\x7F]+$"
					},
					client_id: {
						type: "string",
						description: "The reddit internal id of this oauth client.",
						pattern: "^[-_a-zA-Z0-9]{14}$"
					},
					scopes: {
						type: "array",
						description: "OAuth authorization scopes list.\n\n    scopes:account,adsedit,adsread,creddits,edit,email,flair,history,identity,modcontributors,modflair\n    scopes:modmail,modposts,modconfig,modlog,modothers,modself,modtraffic,modwiki,mysubreddits,privatemessages\n    scopes:read,report,save,sponsor,structuredstyles,submit,subscribe,vote,wikiedit,wikiread,xbox"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/request/referrer.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Fields related to HTTP Refer(r)ers.",
				definitions: {
					domain: {
						type: "string",
						description: "Hostname/domain of the referrer, possibly including the port.",
						pattern: "^[-._a-zA-Z0-9]+(:\\d+)?$"
					},
					url: {
						type: "string",
						description: "The referrer path (e.g., /message/inbox)",
						pattern: "^https?:\\/\\/\\S+"
					},
					element: {
						type: "string",
						description: "This field is deprecated and will be removed soon!",
						pattern: "^.+$"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/request/request.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Raw HTTP request data.",
				definitions: {
					reddaid: {
						type: "string",
						description: "Reddit Ad Id, typically set as a cookie or otherwise passed in for client-side requests.",
						pattern: "^[ABCDEFGHIJKLMNOPQRSTUVWXYZ234567]{0,16}$"
					},
					loginbot: {
						type: "boolean",
						description: "Is login request coming from a login bot?"
					},
					robots_meta_tag: {
						type: "string",
						description: 'A directive used for "robots" meta tag if such tag exists in page\'s DOM.',
						pattern: "^(noindex|noindex,nofollow)$"
					},
					canonical_url: {
						type: "string",
						description: "The request canonical url.",
						pattern: "^https?:\\/\\/\\S+"
					},
					domain: {
						type: "string",
						description: "Domain of the request.",
						pattern: "^[-._a-zA-Z0-9]+$"
					},
					known_bot: {
						type: "string",
						description: "This field is deprecated and will be removed soon!*",
						pattern: "^.+$"
					},
					isp_organization: {
						type: "string",
						description: 'The ISP the request came from, e.g. "Cox Business".\n\n    Note that these are human-readable values intended for SWAT investigation.',
						pattern: "^.+$"
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
						description: "The full User-Agent provided to the request.\n\n    Note that user agents are provided by clients, including rogue scrapers.\n    The validator has been disabled as we cannot control the field value.skip_validation:False",
						pattern: ".*"
					},
					base_url: {
						type: "string",
						description: "The request path.",
						pattern: "^https?:\\/\\/\\S+"
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
						description: "Server-side HTML render's unique id.\n\n    Used to mostly for page delivery bounce rates.\n    The first screen view from JavaScript in the browser will re-use\n    the same server_render_id as the server-side request.\n\n    Screen views without a server_render_id can be inferred to\n    client-side navigations handled by JavaScript, vs the browser\n    doing a full navigation that requests HTML from the servers.\n\n    skip_validation:False"
					},
					header_signature: {
						type: "string",
						description: "Hash of the ordered headers from anti-evil fingerprinting.\n\n    Example value: Am:GX:Ac:kF:h0:a6:z/:kF:lw",
						pattern: "^([A-Za-z0-9/+]{2}:)*[A-Za-z0-9/+]{2}$"
					},
					google_client_id: {
						type: "string",
						description: "Unique identifier associated with a particular user on AMP pages",
						pattern: "^.+$"
					},
					cookies_present: {
						type: "boolean",
						description: "Were there cookies present in the request?"
					},
					accept_language_header: {
						type: "string",
						description: "Accept-Language header contents.\n\n    Note that this field is named as such to avoid collision with the accept_language field.\n\n    Also note that this field is intended to catch malformed or suspicious values for SWAT, hence the lack\n    of a proper validator.",
						pattern: "^.+$"
					},
					parameters: {
						type: "string",
						description: 'Query string preceded by "?", e.g. "count=25&after=t3_b3fzt5".',
						pattern: "^.+=.+$"
					},
					client_ip: {
						type: "string",
						description: "Hashed IP of the client sending the event. This value will never be populated in BigQuery.\n\n    Note that this field is passed in as a plain IP as Midas relies on this field to do geo enrichment.\n    Both IPv4 and IPv6 are accepted. The event pipeline will then sanitize this field as required.",
						pattern: "^(\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|([a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4})$"
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
						description: "Response status code, e.g. 200, 301, 500, etc.",
						minimum: 0
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/request/zipkin.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Fields used to capture zipkin traces.\n\nMore information here: https://zipkin.io/pages/instrumenting.html",
				definitions: {
					trace_id: {
						type: "string",
						description: "Zipkin trace ID.",
						pattern: "^[0-9a-f]+$"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/res/r_e_s.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Fields related to tracking Reddit Enhancement Suite (aka RES) plugin.",
				definitions: {
					version: {
						type: "string",
						description: "RES plugin version.",
						pattern: "^\\d+(\\.\\d+)*$"
					},
					night_mode: {
						type: "boolean",
						description: "Is night mode enabled in RES?"
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
						description: "What type of recurrence frequency?",
						enums: ["daily", "weekly", "monthly", "annual"]
					},
					recurring_intervals: {
						type: "integer",
						description: 'How often does the post get scheduled on the recurrence frequency?\n    e.g. "Repeat every THREE days"',
						minimum: 0
					},
					creator_user_id: {
						type: "string",
						description: "Creator of the scheduled post, represented as an account ID."
					},
					timezone: {
						type: "string",
						description: "User selected pytz timezone.",
						pattern: "^[a-zA-Z0-9\\/_\\-+]+$"
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
						description: "How many times the scheduled posts recurs before it should stop.",
						minimum: 0
					},
					created_timestamp: {
						type: "number",
						description: "UTC timestamp of when the scheduled post is created."
					},
					milestone_type: {
						type: "string",
						description: 'Optional field which describes whether or not a scheduled posts, and\n    if so, what type of milestone post. E.g. "cakeday"',
						pattern: "^[a-zA-Z0-9\\/_\\-+]+$"
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
						description: "The human readable flair used in post search.",
						pattern: "^[^\\n]{0,64}$"
					},
					number_comments: {
						type: "integer",
						description: "The number of comments returned for a particular search query.",
						minimum: 0
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
						description: "Search query string.\n\n    Note that we allow any arbitrary string to be a query, including empty strings.",
						pattern: "^.*$"
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
						description: "Search results range string, e.g. hour, day, week.",
						enums: ["hour", "day", "week", "month", "year", "all"]
					},
					nsfw_reason: {
						type: "string",
						description: "Why the search results had the nsfwness they did.",
						enums: ["profile", "preference", "explicit"]
					},
					sort: {
						type: "string",
						description: "Sorting options for search results.",
						enums: ["hot", "new", "rising", "top", "controversial", "gilded", "wiki", "promoted", "best", "confidence", "qa", "old", "live", "relevance", "comments", "timestamp", "score", "upvotes"]
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
						description: "The number of results available for this search query.\n\n    Note that this is not necessarily the number shown to the user.",
						minimum: 0
					},
					meta_flair_name: {
						type: "string",
						description: 'The display title of the MetaFlair/category, such as "Animals" or "Pics & GIFS".',
						pattern: "^\\S.*$"
					},
					number_subreddits: {
						type: "integer",
						description: "The number of subreddits returned for a particular search query.",
						minimum: 0
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
						description: "Number of unused backup codes available before they were all destroyed.",
						minimum: 0
					},
					backup_code_used: {
						type: "boolean",
						description: "Was a backup code used instead of the primary mechanism for this device?"
					},
					device_backup_codes_remaining: {
						type: "integer",
						description: "Number of unused backup codes are associated with this device.",
						minimum: 0
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
						description: "The URL of a link displayed in an experiment-related A/B test",
						pattern: "^https?:\\/\\/\\S+"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/session/session.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Fields related to an user session.",
				definitions: {
					referrer_domain: {
						type: "string",
						description: "Domain of the referrer.",
						pattern: "^[-._A-Za-z0-9]+$"
					},
					referrer_url: {
						type: "string",
						description: "Referrer URL.",
						pattern: "^\\S+$"
					},
					anonymous_browsing_mode: {
						type: "boolean",
						description: "Flag indicating if the session mode is Anonymous Browsing."
					},
					version: {
						type: "string",
						description: "Session version. \n\n    Should be 0.",
						pattern: "^0$"
					},
					id: {
						type: "string",
						description: "Unique identifier for the session.\n\n    Note that this is not a fullname.",
						pattern: "[A-Za-z0-9]{18}"
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
					value: {
						type: "string",
						description: "The current value of the given setting.",
						pattern: "^.{0,30}$"
					},
					old_value: {
						type: "string",
						description: "The previous value of the given setting.",
						pattern: "^.{0,30}$"
					},
					scope: {
						type: "string",
						description: "The scope of the setting.\n\n    We support settings which are applied to individual subreddits.\n    This allows us to differentiate between those and regular account\n    level settings.",
						enums: ["account", "subreddit"]
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/snoovatar/snoovatar.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Snoovatar",
				definitions: {
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
					full_image_url: {
						type: "string",
						description: "The URL of a rendered full Snoovatar image"
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
						description: "For slack(), the full channel name Spamurai posts to.",
						pattern: "^#spamurai[a-zA-Z0-9_-]*$"
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
						description: "Human-readable name of the task that contains the triggered action.",
						pattern: "^.+$"
					},
					task_version: {
						type: "string",
						description: "Version of the task that contains the triggered action.",
						pattern: "^\\d+$"
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
						description: "Name of the user.",
						pattern: "^(reddit.com|(t:)?[-_a-z0-9]+)"
					},
					cover_url: {
						type: "string",
						description: "URL of the uploaded cover image.",
						pattern: "^https:\\/\\/\\S+$"
					},
					display_name: {
						type: "string",
						description: "Profile display name set by the user, which is seperate from the profile name.\n\n    This is only shown in the user's profile.",
						pattern: "^.{0,30}$"
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
						description: 'Type of the profile, either "default" or "legacy".',
						enums: ["default", "legacy"]
					},
					content_visible: {
						type: "boolean",
						description: "Did the user set the content visibility to true?"
					},
					about: {
						type: "string",
						description: "About description created by the user.",
						pattern: "^.{0,200}$"
					},
					avatar_url: {
						type: "string",
						description: "URL of the uploaded avatar.",
						pattern: "^https:\\/\\/\\S+$"
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
						description: "Post difficulty rating of the subreddit",
						enums: ["easy", "medium", "hard"]
					},
					name: {
						type: "string",
						description: "Lowercase name of the subreddit, e.g. askreddit.",
						pattern: "^(reddit.com|((t:)?[-_a-z0-9]+))$"
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
						description: "Coin balance of the subreddit",
						minimum: 0
					},
					whitelist_status: {
						type: "string",
						description: "Whitelist status, used to classify what types of advertisements should be shown in this subreddit.\n\n    More details here: https://reddit.atlassian.net/wiki/spaces/ADS/pages/120337999/Whitelist+Statuses\n\n    Value definitions:\n        * no_ads - No ads of any kind will show on this subreddit.\n        * house_only - Only ads set to the house priority will show.\n        * promo_specified - (Deprecated) Only ads targeting that subreddit will appear.\n        * promo_adult_nsfw - (Deprecated) Subreddits in this category must be age-gated.\n        * promo_adult_sfw - (Deprecated) Subreddits in this category are not age-gated, but still adult themed.\n        * promo_all - (Deprecated) All promoted posts (self-serve or managed) will show on this subreddit.\n        * all_ads - All promoted posts and banners will show on this subreddit.\n        * some_ads - Some promoted posts and banners will show on this subreddit.",
						enums: ["no_ads", "house_only", "promo_specified", "promo_adult_nsfw", "promo_adult", "promo_all", "all_ads", "some_ads"]
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
						description: "Public description of the subreddit.",
						pattern: "^.{0,500}$"
					},
					access_type: {
						type: "string",
						description: "Accessibility type for the subreddit, e.g. employee only.",
						enums: ["archived", "employees_only", "gold_only", "gold_restricted", "private", "public", "restricted", "user"]
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
						description: "The name of the experiment that triggered the survey.\n    */\n    6: typedefs.StringLower experiment_name\n    /**\n    The variant of the experiment that the user was bucketed in when the survey was triggered.\n\n    Example values: control_1, control_2, signup_cta\n    */\n    7: typedefs.StringLower experiment_variant\n    /**\n    The version of the experiment that triggered the survey.*/\n    8: string experiment_version\n    /**\n    The text of the question being asked on this particular step of the survey.",
						pattern: "^[0-9]+(\\.[0-9]+)*$"
					},
					score: {
						type: "integer",
						description: "The score given by the user, only set on `submit` - `rating` events",
						minimum: 0,
						maximum: 10
					},
					min: {
						type: "integer",
						description: "The minimum value allowable score, only set on `rating` events.\n\n    May change in the future but for now: NPS 0, CES & CSAT 1.",
						minimum: 0,
						maximum: 1
					},
					text: {
						type: "string",
						description: "The user's answer to the freeform text section following a rating, only set on `submit` - `freeform_text` events.",
						pattern: ".*"
					},
					max: {
						type: "integer",
						description: "The maximum allowable score, only set on `rating` events.\n\n    May change in the future but for now: NPS 10, CES & CSAT 7.",
						minimum: 5,
						maximum: 10
					},
					type: {
						type: "string",
						description: "The survey type of this step in the user flow.",
						enums: ["nps", "ces", "csat"]
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/target_ip/target_i_p.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Information regarding the Target IP.",
				definitions: {
					address: {
						type: "string",
						description: "IP address of the target user.",
						pattern: "^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(\\/\\d+)?$"
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
						description: "The display title for the badge.",
						pattern: "^.{1,64}$"
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
						description: "Name of the copyright holder for DMCA requests.read-access:swat@reddit.com",
						pattern: "^.+$"
					},
					queue_id: {
						type: "string",
						description: "The ID of the Reddar queue associated with this ticket.\n\n    Prefix 'queues__' followed by base36 value.\n    For example: 'queues__23b'",
						pattern: "^queues__[a-z0-9]+$"
					},
					id: {
						type: "string",
						description: "Required identifier for a reddar ticket.\n\n    This field is a reddar ticket's reddit_id. Prefix 'tickets__'\n    followed by base36 value.\n    For example: 'tickets__23b'",
						pattern: "^tickets__[a-z0-9]+$"
					},
					status: {
						type: "string",
						description: "Used by admin tickets to specify the current state of the ticket.",
						enums: ["open", "assigned", "in_review", "closed"]
					},
					report_source: {
						type: "string",
						description: "Source of the report which created the ticket.\n\n    reddit-service-admin admin.thrift enum IncomingReportSource",
						enums: ["help_center", "spamurai", "google_csai", "photodna", "client", "reddar", "zendesk", "zendesk_dmca_form", "zendesk_dmca_email"]
					},
					requestor_id: {
						type: "string",
						description: "The ID of the requestor associated with this ticket.\n\n    Prefix 'requestors__' followed by base36 value.\n    For example: 'requestors__23b'",
						pattern: "^requestors__[a-z0-9]+$"
					},
					type: {
						type: "string",
						description: "Used by admin tickets to specify the complaint type, e.g. harassment.",
						enums: ["private_message_abuse", "harassment", "violence", "ban_evasion", "csai", "appeal", "legal_export", "user_data_request", "login_bot", "ae_test", "ads", "chat_violence", "chat_others", "marketplace", "pii", "photodna", "bulk_action_job", "involuntary_porn", "impersonation", "scaled_abuse_appeal", "minor_sexualization", "delete_media", "chat_unknown", "chat_spam", "chat_harassment", "chat_pii", "chat_ban_evasion", "chat_marketplace", "chat_minor_sexualization", "chat_involuntary_porn", "chat_vote_manipulation", "live_stream", "terrorism", "dmca", "report_button_abuse"]
					},
					requestor_name: {
						type: "string",
						description: "Name of the requestor for DMCA requests.read-access:swat@reddit.com",
						pattern: "^.+$"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket_content.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Information regarding content linked to ReddarTicket",
				definitions: {
					reported_url: {
						type: "string",
						description: "Url reported by user (extracted from zendesk ticket).",
						pattern: "^.+$"
					},
					target_id: {
						type: "string",
						description: "The reddit ID of content associated with this ticket content.\n    Can be empty in case reported url doesn't resolve to valid reddit content."
					},
					status_reason: {
						type: "string",
						description: "Reason for current status associated with this ReddarTicketContent.\n\n    reddit-service-admin admin.thrift enum TicketContentStatusReason",
						enums: ["hosting_removal_auto", "hosting_removal_manual", "linking_removal_auto", "subreddit_url", "user_profile_url", "fair_use", "search_results", "official_link", "cross_post", "corporate_verification", "not_reddit_url", "not_subject_to_copyright", "already_removed_by_user", "already_removed_by_admin", "already_removed_duplicate_request", "already_removed_ephemeral_content", "work_not_found", "fair_use_final", "not_a_direct_link", "suspected_fraud"]
					},
					post_nsfw: {
						type: "boolean",
						description: "Flag indicating if associated post is marked as NSFW."
					},
					content_type: {
						type: "string",
						description: "Content type of reported url for DMCA requests. Identifies if reported url is invalid for\n    DMCA (third_party_link) and specifies type of reddit hosted content requested for DMCA\n    takedown.\n\n    Reflects values defined in admin-service admin.thrift ContentType.",
						enums: ["image", "video", "post", "comment", "third_party_link", "thumbnail", "preview", "subreddit_icon"]
					},
					target_created_timestamp: {
						type: "number",
						description: "The date when the reddit content associated with this ticket content was created.\n\n    This field can be empty in case reported url doesn't resolve to valid reddit content."
					},
					id: {
						type: "string",
						description: "Required identifier for a reddar ticket content.\n\n    This field is a reddar ticket contents's reddit_id. Prefix 'ticket_contents__'\n    followed by base36 value.\n    For example: 'ticket_contents__23b'",
						pattern: "^ticket_contents__[a-z0-9]+$"
					},
					status: {
						type: "string",
						description: "Status of content associated with this ReddarTicketContent.\n\n    reddit-service-admin admin.thrift enum TicketContentStatus",
						enums: ["not_actioned", "dmca_invalid", "dmca_info_requested", "dmca_takedown_requested", "dmca_takedown_inprogress", "dmca_takedown_completed", "dmca_takedown_failed"]
					},
					target_type: {
						type: "string",
						description: "Type of reddit content.",
						enums: ["post", "comment", "user", "message", "subreddit"]
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
						description: "Required identifier for this ticket.\n\n    This field is tracked as base36. Note that it is not a fullname.",
						pattern: "^[a-z0-9]+$"
					},
					type: {
						type: "string",
						description: "Used by admin tickets to specify the complaint type, e.g. harassment.",
						enums: ["private_message_abuse", "harassment", "violence", "ban_evasion", "csai", "appeal", "legal_export", "user_data_request", "login_bot", "ae_test", "ads", "chat_violence", "chat_others", "marketplace", "pii", "photodna", "bulk_action_job", "involuntary_porn", "impersonation", "scaled_abuse_appeal", "minor_sexualization", "delete_media", "chat_unknown", "chat_spam", "chat_harassment", "chat_pii", "chat_ban_evasion", "chat_marketplace", "chat_minor_sexualization", "chat_involuntary_porn", "chat_vote_manipulation", "live_stream", "terrorism", "dmca", "report_button_abuse"]
					},
					queue_id: {
						type: "string",
						description: "Admin tickets are associated with a queue.\n\n    This field is tracked as base36. Note that it is not a fullname.",
						pattern: "^[a-z0-9]+$"
					},
					status: {
						type: "string",
						description: "Used by admin tickets to specify the current state of the ticket.",
						enums: ["open", "assigned", "in_review", "closed"]
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
						description: "Source of zendesk ticket.",
						enums: ["form", "email"]
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/timer/d_o_m_timers.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "This struct is deprecated! It will be removed soon.",
				definitions: {
					request: {
						type: "integer",
						description: "This field is deprecated! It will be removed soon.",
						pattern: "^.*$"
					},
					loading: {
						type: "integer",
						description: "This field is deprecated! It will be removed soon.",
						pattern: "^.*$"
					},
					loaded: {
						type: "integer",
						description: "This field is deprecated! It will be removed soon.",
						pattern: "^.*$"
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
						description: "Text shown to the user.",
						pattern: "^.+$"
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
						description: "Case insensitive unique name for a topic.\n\n    Some examples may be:\n        * nfl\n        * FIFA World Cup\n        * Craigslist",
						pattern: "^.+$"
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
						description: "The text contents of the tag. This may be generated by us or entered by a user.\n\n    Some examples may be:\n        * Gaming\n        * Funny\n        * Lifestyle",
						pattern: "^.+$"
					},
					type: {
						type: "string",
						description: "The type of the topic tag. This can determine several things and may change in the future.\n\n    This field can determine:\n        * What types of entites this tag can be applied to\n        * How the topic tag should behave in the UI\n\n    Example: classification topic tags can be applied to anything, but post_classification tags can\n    only be applied to posts.",
						enums: ["classification", "post_classification", "subreddit_classification", "comment_classification"]
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
						description: "Name of the trophy.",
						pattern: "^.*$"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/upload/upload.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Fields related to asset uploads.",
				definitions: {
					file_size: {
						type: "integer",
						description: "File size in bytes.",
						minimum: 0
					},
					category: {
						type: "string",
						description: "Lowercase name of the structured styles asset category, e.g. community_icon.\n\n    Note that in r2 code the original category names are in lowerCamelCase\n    (e.g. communityIcon), to be consistent with v2 schema we need to convert\n    them to snake_case before sending the event."
					},
					optimization_type: {
						type: "string",
						description: "The type of optimizaion this file represents, used in structured styles\n    asset uploads.",
						enums: ["original", "optimized", "single"]
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
						description: "User's current comment karma.",
						pattern: ".*"
					},
					name: {
						type: "string",
						description: "User's screen name.\n\n    A note on the validator: We do have checks on valid names (e.g. max chars)\n    but there exists exceptions in our database. As such, the validator is\n    disabled for this field.read-access:swat@reddit.com",
						pattern: ".*"
					},
					is_admin: {
						type: "boolean",
						description: "Is the user a Reddit admin?"
					},
					email: {
						type: "string",
						description: "User's email.\n\n    A note on the validator: This field is also used to track attempted login\n    values provided by users. They can pass in invalid email and, as such, the\n    validator is disabled for this field.",
						pattern: ".*"
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
						description: "Number of creddits (reddit credits) the user has.\n    Note: To be deprecated with goldv1.",
						minimum: 0
					},
					number_premium_days_remaining: {
						type: "integer",
						description: "Premium status days remaining.",
						minimum: 0
					},
					in_timeout: {
						type: "boolean",
						description: "Is the user in timeout, e.g. suspended?"
					},
					number_coins: {
						type: "integer",
						description: "Number of gold coins the user has.",
						minimum: 0
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
						description: "Email domain, not masked.",
						pattern: ".*"
					},
					id: {
						type: "string",
						description: "Unique identifier of this user.skip_validation:False",
						pattern: "^t[0-9]_[a-z0-9]+$"
					},
					cookie_created_timestamp: {
						type: "number",
						description: "Timestamp of user's cookie creation."
					},
					post_karma: {
						type: "integer",
						description: "User's current post karma.",
						pattern: ".*"
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
						description: "Masked value of the email user (user@).",
						pattern: ".*"
					},
					has_premium: {
						type: "boolean",
						description: "Does this user have Premium status?"
					},
					masked_email: {
						type: "string",
						description: "Masked value of the full email (user@domain.com).",
						pattern: ".*"
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
						description: "User's expando preferences.\n\n    Expected values:\n        * auto - Always auto-expand media previews\n        * noauto - Never auto-expand media previews\n        * subreddit - Respect subreddit's expando preferences",
						enums: ["auto", "noauto", "subreddit"]
					},
					in_beta: {
						type: "boolean",
						description: "Is this a user in our beta program?"
					},
					language: {
						type: "string",
						description: "Preferred language of the user.",
						pattern: "^[a-z]{2,3}([-_][a-zA-Z0-9]{2}(-[a-z]{3-8})?)?$"
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
						description: "Current user comment karma in the current subreddit.",
						pattern: ".*"
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
						description: "Current user post karma in the current subreddit.",
						pattern: ".*"
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
					id: {
						type: "string",
						description: "Unique id for the user flair."
					},
					title: {
						type: "string",
						description: "The display title for user flair.",
						pattern: "^[^\\n]{0,64}$"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/webhook/webhook.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Represents the characteristics of configuration for an outbound webhook.",
				definitions: {
					id: {
						type: "string",
						description: "Unique identifier for this outbound webhook.",
						pattern: " ^[_a-z0-9]+"
					},
					type: {
						type: "string",
						description: "What type of data, or which service, is being sent to this webhook callback.",
						enums: ["chat"]
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
					chat_message_length: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat.json#/definitions/message_length"
					},
					account_label_id: {
						$ref: "http://com.reddit/schemas/field_definitions/account_label/account_label.json#/definitions/id"
					},
					gold_purchase_purchased_coins: {
						$ref: "http://com.reddit/schemas/field_definitions/gold/gold_purchase.json#/definitions/purchased_coins"
					},
					chat_home_feed_boosting_positions: {
						$ref: "http://com.reddit/schemas/field_definitions/chat/chat_home_feed_boosting.json#/definitions/positions"
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
					request_reddaid: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/reddaid"
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
					reddar_audit_included_agent_ids: {
						$ref: "http://com.reddit/schemas/field_definitions/audit/reddar_audit.json#/definitions/included_agent_ids"
					},
					post_original_content: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/original_content"
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
					experiment_qa_proxy_event: {
						$ref: "http://com.reddit/schemas/field_definitions/experiment/experiment.json#/definitions/qa_proxy_event"
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
					post_crosspost_root_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/crosspost_root_id"
					},
					admin_action_takedown_id: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/admin_action.json#/definitions/takedown_id"
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
					post_number_posts_from_ad: {
						$ref: "http://com.reddit/schemas/field_definitions/content/post.json#/definitions/number_posts_from_ad"
					},
					api_response_content: {
						$ref: "http://com.reddit/schemas/field_definitions/request/api_response.json#/definitions/content"
					},
					ticket_type: {
						$ref: "http://com.reddit/schemas/field_definitions/ticket/ticket.json#/definitions/type"
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
					funding_instrument_billing_threshold_micros: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/billing_threshold_micros"
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
					survey_type: {
						$ref: "http://com.reddit/schemas/field_definitions/survey/survey.json#/definitions/type"
					},
					topic_tag_id: {
						$ref: "http://com.reddit/schemas/field_definitions/topic_tag/topic_tag.json#/definitions/id"
					},
					ad_request_first_chunk: {
						$ref: "http://com.reddit/schemas/field_definitions/adevent/ad_request.json#/definitions/first_chunk"
					},
					reddar_audit_ticket_qa_user_action: {
						$ref: "http://com.reddit/schemas/field_definitions/audit/reddar_audit_ticket.json#/definitions/qa_user_action"
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
					scheduled_post_creator_user_id: {
						$ref: "http://com.reddit/schemas/field_definitions/scheduled_post/scheduled_post.json#/definitions/creator_user_id"
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
					profile_id: {
						$ref: "http://com.reddit/schemas/field_definitions/subreddit/profile.json#/definitions/id"
					},
					post_draft_author_id: {
						$ref: "http://com.reddit/schemas/field_definitions/post_draft/post_draft.json#/definitions/author_id"
					},
					funding_instrument_legacy_transaction_id: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/legacy_transaction_id"
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
					funding_instrument_authorize_profile_id: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/authorize_profile_id"
					},
					session_version: {
						$ref: "http://com.reddit/schemas/field_definitions/session/session.json#/definitions/version"
					},
					mailroom_request_message_type: {
						$ref: "http://com.reddit/schemas/field_definitions/notification/mailroom_request.json#/definitions/message_type"
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
					onboarding_captcha_num_screens: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/captcha_num_screens"
					},
					geo_tor_exit_node: {
						$ref: "http://com.reddit/schemas/field_definitions/midas/geo.json#/definitions/tor_exit_node"
					},
					imposter_success: {
						$ref: "http://com.reddit/schemas/field_definitions/imposter/imposter.json#/definitions/success"
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
					n_c_m_e_c_report_post_possible_proxy: {
						$ref: "http://com.reddit/schemas/field_definitions/admin_action/n_c_m_e_c_report.json#/definitions/post_possible_proxy"
					},
					perspective_likely_to_reject: {
						$ref: "http://com.reddit/schemas/field_definitions/perspective/perspective.json#/definitions/likely_to_reject"
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
					scheduled_post_recurring_intervals: {
						$ref: "http://com.reddit/schemas/field_definitions/scheduled_post/scheduled_post.json#/definitions/recurring_intervals"
					},
					legal_export_request_has_ndo: {
						$ref: "http://com.reddit/schemas/field_definitions/legal_export_request/legal_export_request.json#/definitions/has_ndo"
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
					user_masked_email: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/masked_email"
					},
					request_canonical_url: {
						$ref: "http://com.reddit/schemas/field_definitions/request/request.json#/definitions/canonical_url"
					},
					onboarding_subreddit_position: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/subreddit_position"
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
					media_type: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/type"
					},
					funding_instrument_start_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/start_timestamp"
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
					payment_amount_in_smallest_denom: {
						$ref: "http://com.reddit/schemas/field_definitions/payment/payment.json#/definitions/amount_in_smallest_denom"
					},
					setting_value: {
						$ref: "http://com.reddit/schemas/field_definitions/setting/setting.json#/definitions/value"
					},
					onboarding_end_timestamp: {
						$ref: "http://com.reddit/schemas/field_definitions/content/onboarding.json#/definitions/end_timestamp"
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
				return n(e, (function(e, n, r) {
					i = s ? (s = !1, e) : t(i, e, n, r)
				})), i
			}
		},
		"./node_modules/lodash/each.js": function(e, t, i) {
			e.exports = i("./node_modules/lodash/forEach.js")
		},
		"./node_modules/lodash/reduce.js": function(e, t, i) {
			var s = i("./node_modules/lodash/_arrayReduce.js"),
				n = i("./node_modules/lodash/_baseEach.js"),
				r = i("./node_modules/lodash/_baseIteratee.js"),
				o = i("./node_modules/lodash/_baseReduce.js"),
				a = i("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, i) {
				var d = a(e) ? s : o,
					c = arguments.length < 3;
				return d(e, r(t, 4), i, c, n)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~AdminPanel.4236fd8123d0d8860547.js.map