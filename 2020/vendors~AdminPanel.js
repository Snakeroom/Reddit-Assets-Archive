// https://www.redditstatic.com/desktop2x/vendors~AdminPanel.4849214f6d5906082ff1.js
// Retrieved at 10/27/2020, 2:30:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["vendors~AdminPanel"], {
		"./node_modules/@reddit/event-helpers-typescript/dist/esm/index.js": function(e, t, i) {
			"use strict";
			(function(e) {
				i.d(t, "a", (function() {
					return wt
				})), i.d(t, "b", (function() {
					return jt
				}));
				"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== e || "undefined" != typeof self && self;

				function n(e, t) {
					return e(t = {
						exports: {}
					}, t.exports), t.exports
				}

				function s(e) {
					return e && e.default || e
				}
				var o, r = n((function(e, t) {
					! function(e) {
						function t() {
							for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
							if (t.length > 1) {
								t[0] = t[0].slice(0, -1);
								for (var n = t.length - 1, s = 1; s < n; ++s) t[s] = t[s].slice(1, -1);
								return t[n] = t[n].slice(1), t.join("")
							}
							return t[0]
						}

						function i(e) {
							return "(?:" + e + ")"
						}

						function n(e) {
							return void 0 === e ? "undefined" : null === e ? "null" : Object.prototype.toString.call(e).split(" ").pop().split("]").shift().toLowerCase()
						}

						function s(e) {
							return e.toUpperCase()
						}

						function o(e) {
							var n = t("[0-9]", "[A-Fa-f]"),
								s = i(i("%[EFef]" + n + "%" + n + n + "%" + n + n) + "|" + i("%[89A-Fa-f]" + n + "%" + n + n) + "|" + i("%" + n + n)),
								o = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
								r = t("[\\:\\/\\?\\#\\[\\]\\@]", o),
								a = e ? "[\\uE000-\\uF8FF]" : "[]",
								d = t("[A-Za-z]", "[0-9]", "[\\-\\.\\_\\~]", e ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]"),
								c = (i("[A-Za-z]" + t("[A-Za-z]", "[0-9]", "[\\+\\-\\.]") + "*"), i(i(s + "|" + t(d, o, "[\\:]")) + "*"), i(i("25[0-5]") + "|" + i("2[0-4][0-9]") + "|" + i("1[0-9][0-9]") + "|" + i("0?[1-9][0-9]") + "|0?0?[0-9]")),
								m = i(c + "\\." + c + "\\." + c + "\\." + c),
								p = i(n + "{1,4}"),
								_ = i(i(p + "\\:" + p) + "|" + m),
								f = i(i(p + "\\:") + "{6}" + _),
								h = i("\\:\\:" + i(p + "\\:") + "{5}" + _),
								l = i(i(p) + "?\\:\\:" + i(p + "\\:") + "{4}" + _),
								u = i(i(i(p + "\\:") + "{0,1}" + p) + "?\\:\\:" + i(p + "\\:") + "{3}" + _),
								g = i(i(i(p + "\\:") + "{0,2}" + p) + "?\\:\\:" + i(p + "\\:") + "{2}" + _),
								y = i(i(i(p + "\\:") + "{0,3}" + p) + "?\\:\\:" + p + "\\:" + _),
								v = i(i(i(p + "\\:") + "{0,4}" + p) + "?\\:\\:" + _),
								b = i(i(i(p + "\\:") + "{0,5}" + p) + "?\\:\\:" + p),
								$ = i(i(i(p + "\\:") + "{0,6}" + p) + "?\\:\\:"),
								w = i([f, h, l, u, g, y, v, b, $].join("|")),
								j = i(i(d + "|" + s) + "+"),
								k = (i("[vV]" + n + "+\\." + t(d, o, "[\\:]") + "+"), i(i(s + "|" + t(d, o)) + "*"), i(s + "|" + t(d, o, "[\\:\\@]")));
							return i(i(s + "|" + t(d, o, "[\\@]")) + "+"), i(i(k + "|" + t("[\\/\\?]", a)) + "*"), {
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
								PCT_ENCODED: new RegExp(s, "g"),
								IPV4ADDRESS: new RegExp("^(" + m + ")$"),
								IPV6ADDRESS: new RegExp("^\\[?(" + w + ")" + i(i("\\%25|\\%(?!" + n + "{2})") + "(" + j + ")") + "?\\]?$")
							}
						}
						var r = o(!1),
							a = o(!0),
							d = function(e, t) {
								if (Array.isArray(e)) return e;
								if (Symbol.iterator in Object(e)) return function(e, t) {
									var i = [],
										n = !0,
										s = !1,
										o = void 0;
									try {
										for (var r, a = e[Symbol.iterator](); !(n = (r = a.next()).done) && (i.push(r.value), !t || i.length !== t); n = !0);
									} catch (d) {
										s = !0, o = d
									} finally {
										try {
											!n && a.return && a.return()
										} finally {
											if (s) throw o
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
							f = {
								overflow: "Overflow: input needs wider integers to process",
								"not-basic": "Illegal input >= 0x80 (not a basic code point)",
								"invalid-input": "Invalid input"
							},
							h = Math.floor,
							l = String.fromCharCode;

						function u(e) {
							throw new RangeError(f[e])
						}

						function g(e, t) {
							var i = e.split("@"),
								n = "";
							i.length > 1 && (n = i[0] + "@", e = i[1]);
							var s = function(e, t) {
								for (var i = [], n = e.length; n--;) i[n] = t(e[n]);
								return i
							}((e = e.replace(_, ".")).split("."), t).join(".");
							return n + s
						}

						function y(e) {
							for (var t = [], i = 0, n = e.length; i < n;) {
								var s = e.charCodeAt(i++);
								if (s >= 55296 && s <= 56319 && i < n) {
									var o = e.charCodeAt(i++);
									56320 == (64512 & o) ? t.push(((1023 & s) << 10) + (1023 & o) + 65536) : (t.push(s), i--)
								} else t.push(s)
							}
							return t
						}
						var v = function(e, t) {
								return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
							},
							b = function(e, t, i) {
								var n = 0;
								for (e = i ? h(e / 700) : e >> 1, e += h(e / t); e > 455; n += 36) e = h(e / 35);
								return h(n + 36 * e / (e + 38))
							},
							$ = function(e) {
								var t, i = [],
									n = e.length,
									s = 0,
									o = 128,
									r = 72,
									a = e.lastIndexOf("-");
								a < 0 && (a = 0);
								for (var d = 0; d < a; ++d) e.charCodeAt(d) >= 128 && u("not-basic"), i.push(e.charCodeAt(d));
								for (var m = a > 0 ? a + 1 : 0; m < n;) {
									for (var p = s, _ = 1, f = 36;; f += 36) {
										m >= n && u("invalid-input");
										var l = (t = e.charCodeAt(m++)) - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : 36;
										(l >= 36 || l > h((c - s) / _)) && u("overflow"), s += l * _;
										var g = f <= r ? 1 : f >= r + 26 ? 26 : f - r;
										if (l < g) break;
										var y = 36 - g;
										_ > h(c / y) && u("overflow"), _ *= y
									}
									var v = i.length + 1;
									r = b(s - p, v, 0 == p), h(s / v) > c - o && u("overflow"), o += h(s / v), s %= v, i.splice(s++, 0, o)
								}
								return String.fromCodePoint.apply(String, i)
							},
							w = function(e) {
								var t = [],
									i = (e = y(e)).length,
									n = 128,
									s = 0,
									o = 72,
									r = !0,
									a = !1,
									d = void 0;
								try {
									for (var m, p = e[Symbol.iterator](); !(r = (m = p.next()).done); r = !0) {
										var _ = m.value;
										_ < 128 && t.push(l(_))
									}
								} catch (L) {
									a = !0, d = L
								} finally {
									try {
										!r && p.return && p.return()
									} finally {
										if (a) throw d
									}
								}
								var f = t.length,
									g = f;
								for (f && t.push("-"); g < i;) {
									var $ = c,
										w = !0,
										j = !1,
										k = void 0;
									try {
										for (var x, P = e[Symbol.iterator](); !(w = (x = P.next()).done); w = !0) {
											var q = x.value;
											q >= n && q < $ && ($ = q)
										}
									} catch (L) {
										j = !0, k = L
									} finally {
										try {
											!w && P.return && P.return()
										} finally {
											if (j) throw k
										}
									}
									var T = g + 1;
									$ - n > h((c - s) / T) && u("overflow"), s += ($ - n) * T, n = $;
									var E = !0,
										A = !1,
										S = void 0;
									try {
										for (var D, I = e[Symbol.iterator](); !(E = (D = I.next()).done); E = !0) {
											var F = D.value;
											if (F < n && ++s > c && u("overflow"), F == n) {
												for (var R = s, z = 36;; z += 36) {
													var O = z <= o ? 1 : z >= o + 26 ? 26 : z - o;
													if (R < O) break;
													var C = R - O,
														U = 36 - O;
													t.push(l(v(O + C % U, 0))), R = h(C / U)
												}
												t.push(l(v(R, 0))), o = b(s, T, g == f), s = 0, ++g
											}
										}
									} catch (L) {
										A = !0, S = L
									} finally {
										try {
											!E && I.return && I.return()
										} finally {
											if (A) throw S
										}
									}++s, ++n
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
								decode: $,
								encode: w,
								toASCII: function(e) {
									return g(e, (function(e) {
										return p.test(e) ? "xn--" + w(e) : e
									}))
								},
								toUnicode: function(e) {
									return g(e, (function(e) {
										return m.test(e) ? $(e.slice(4).toLowerCase()) : e
									}))
								}
							},
							k = {};

						function x(e) {
							var t = e.charCodeAt(0);
							return t < 16 ? "%0" + t.toString(16).toUpperCase() : t < 128 ? "%" + t.toString(16).toUpperCase() : t < 2048 ? "%" + (t >> 6 | 192).toString(16).toUpperCase() + "%" + (63 & t | 128).toString(16).toUpperCase() : "%" + (t >> 12 | 224).toString(16).toUpperCase() + "%" + (t >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (63 & t | 128).toString(16).toUpperCase()
						}

						function P(e) {
							for (var t = "", i = 0, n = e.length; i < n;) {
								var s = parseInt(e.substr(i + 1, 2), 16);
								if (s < 128) t += String.fromCharCode(s), i += 3;
								else if (s >= 194 && s < 224) {
									if (n - i >= 6) {
										var o = parseInt(e.substr(i + 4, 2), 16);
										t += String.fromCharCode((31 & s) << 6 | 63 & o)
									} else t += e.substr(i, 6);
									i += 6
								} else if (s >= 224) {
									if (n - i >= 9) {
										var r = parseInt(e.substr(i + 4, 2), 16),
											a = parseInt(e.substr(i + 7, 2), 16);
										t += String.fromCharCode((15 & s) << 12 | (63 & r) << 6 | 63 & a)
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
							return e.scheme && (e.scheme = String(e.scheme).replace(t.PCT_ENCODED, i).toLowerCase().replace(t.NOT_SCHEME, "")), void 0 !== e.userinfo && (e.userinfo = String(e.userinfo).replace(t.PCT_ENCODED, i).replace(t.NOT_USERINFO, x).replace(t.PCT_ENCODED, s)), void 0 !== e.host && (e.host = String(e.host).replace(t.PCT_ENCODED, i).toLowerCase().replace(t.NOT_HOST, x).replace(t.PCT_ENCODED, s)), void 0 !== e.path && (e.path = String(e.path).replace(t.PCT_ENCODED, i).replace(e.scheme ? t.NOT_PATH : t.NOT_PATH_NOSCHEME, x).replace(t.PCT_ENCODED, s)), void 0 !== e.query && (e.query = String(e.query).replace(t.PCT_ENCODED, i).replace(t.NOT_QUERY, x).replace(t.PCT_ENCODED, s)), void 0 !== e.fragment && (e.fragment = String(e.fragment).replace(t.PCT_ENCODED, i).replace(t.NOT_FRAGMENT, x).replace(t.PCT_ENCODED, s)), e
						}

						function T(e) {
							return e.replace(/^0*(.*)/, "$1") || "0"
						}

						function E(e, t) {
							var i = e.match(t.IPV4ADDRESS) || [],
								n = d(i, 2)[1];
							return n ? n.split(".").map(T).join(".") : e
						}

						function A(e, t) {
							var i = e.match(t.IPV6ADDRESS) || [],
								n = d(i, 3),
								s = n[1],
								o = n[2];
							if (s) {
								for (var r = s.toLowerCase().split("::").reverse(), a = d(r, 2), c = a[0], m = a[1], p = m ? m.split(":").map(T) : [], _ = c.split(":").map(T), f = t.IPV4ADDRESS.test(_[_.length - 1]), h = f ? 7 : 8, l = _.length - h, u = Array(h), g = 0; g < h; ++g) u[g] = p[g] || _[l + g] || "";
								f && (u[h - 1] = E(u[h - 1], t));
								var y = u.reduce((function(e, t, i) {
										if (!t || "0" === t) {
											var n = e[e.length - 1];
											n && n.index + n.length === i ? n.length++ : e.push({
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
										$ = u.slice(y.index + y.length);
									v = b.join(":") + "::" + $.join(":")
								} else v = u.join(":");
								return o && (v += "%" + o), v
							}
							return e
						}
						var S = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,
							D = void 0 === "".match(/(){0}/)[1];

						function I(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								i = {},
								n = !1 !== t.iri ? a : r;
							"suffix" === t.reference && (e = (t.scheme ? t.scheme + ":" : "") + "//" + e);
							var s = e.match(S);
							if (s) {
								D ? (i.scheme = s[1], i.userinfo = s[3], i.host = s[4], i.port = parseInt(s[5], 10), i.path = s[6] || "", i.query = s[7], i.fragment = s[8], isNaN(i.port) && (i.port = s[5])) : (i.scheme = s[1] || void 0, i.userinfo = -1 !== e.indexOf("@") ? s[3] : void 0, i.host = -1 !== e.indexOf("//") ? s[4] : void 0, i.port = parseInt(s[5], 10), i.path = s[6] || "", i.query = -1 !== e.indexOf("?") ? s[7] : void 0, i.fragment = -1 !== e.indexOf("#") ? s[8] : void 0, isNaN(i.port) && (i.port = e.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? s[4] : void 0)), i.host && (i.host = A(E(i.host, n), n)), void 0 !== i.scheme || void 0 !== i.userinfo || void 0 !== i.host || void 0 !== i.port || i.path || void 0 !== i.query ? void 0 === i.scheme ? i.reference = "relative" : void 0 === i.fragment ? i.reference = "absolute" : i.reference = "uri" : i.reference = "same-document", t.reference && "suffix" !== t.reference && t.reference !== i.reference && (i.error = i.error || "URI is not a " + t.reference + " reference.");
								var o = k[(t.scheme || i.scheme || "").toLowerCase()];
								if (t.unicodeSupport || o && o.unicodeSupport) q(i, n);
								else {
									if (i.host && (t.domainHost || o && o.domainHost)) try {
										i.host = j.toASCII(i.host.replace(n.PCT_ENCODED, P).toLowerCase())
									} catch (d) {
										i.error = i.error || "Host's domain name can not be converted to ASCII via punycode: " + d
									}
									q(i, r)
								}
								o && o.parse && o.parse(i, t)
							} else i.error = i.error || "URI can not be parsed.";
							return i
						}
						var F = /^\.\.?\//,
							R = /^\/\.(\/|$)/,
							z = /^\/\.\.(\/|$)/,
							O = /^\/?(?:.|\n)*?(?=\/|$)/;

						function C(e) {
							for (var t = []; e.length;)
								if (e.match(F)) e = e.replace(F, "");
								else if (e.match(R)) e = e.replace(R, "/");
							else if (e.match(z)) e = e.replace(z, "/"), t.pop();
							else if ("." === e || ".." === e) e = "";
							else {
								var i = e.match(O);
								if (!i) throw new Error("Unexpected dot segment condition");
								var n = i[0];
								e = e.slice(n.length), t.push(n)
							}
							return t.join("")
						}

						function U(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								i = t.iri ? a : r,
								n = [],
								s = k[(t.scheme || e.scheme || "").toLowerCase()];
							if (s && s.serialize && s.serialize(e, t), e.host)
								if (i.IPV6ADDRESS.test(e.host));
								else if (t.domainHost || s && s.domainHost) try {
								e.host = t.iri ? j.toUnicode(e.host) : j.toASCII(e.host.replace(i.PCT_ENCODED, P).toLowerCase())
							} catch (c) {
								e.error = e.error || "Host's domain name can not be converted to " + (t.iri ? "Unicode" : "ASCII") + " via punycode: " + c
							}
							q(e, i), "suffix" !== t.reference && e.scheme && (n.push(e.scheme), n.push(":"));
							var o = function(e, t) {
								var i = !1 !== t.iri ? a : r,
									n = [];
								return void 0 !== e.userinfo && (n.push(e.userinfo), n.push("@")), void 0 !== e.host && n.push(A(E(String(e.host), i), i).replace(i.IPV6ADDRESS, (function(e, t, i) {
									return "[" + t + (i ? "%25" + i : "") + "]"
								}))), "number" == typeof e.port && (n.push(":"), n.push(e.port.toString(10))), n.length ? n.join("") : void 0
							}(e, t);
							if (void 0 !== o && ("suffix" !== t.reference && n.push("//"), n.push(o), e.path && "/" !== e.path.charAt(0) && n.push("/")), void 0 !== e.path) {
								var d = e.path;
								t.absolutePath || s && s.absolutePath || (d = C(d)), void 0 === o && (d = d.replace(/^\/\//, "/%2F")), n.push(d)
							}
							return void 0 !== e.query && (n.push("?"), n.push(e.query)), void 0 !== e.fragment && (n.push("#"), n.push(e.fragment)), n.join("")
						}

						function L(e, t) {
							var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
								n = {};
							return arguments[3] || (e = I(U(e, i), i), t = I(U(t, i), i)), !(i = i || {}).tolerant && t.scheme ? (n.scheme = t.scheme, n.userinfo = t.userinfo, n.host = t.host, n.port = t.port, n.path = C(t.path || ""), n.query = t.query) : (void 0 !== t.userinfo || void 0 !== t.host || void 0 !== t.port ? (n.userinfo = t.userinfo, n.host = t.host, n.port = t.port, n.path = C(t.path || ""), n.query = t.query) : (t.path ? ("/" === t.path.charAt(0) ? n.path = C(t.path) : (void 0 === e.userinfo && void 0 === e.host && void 0 === e.port || e.path ? e.path ? n.path = e.path.slice(0, e.path.lastIndexOf("/") + 1) + t.path : n.path = t.path : n.path = "/" + t.path, n.path = C(n.path)), n.query = t.query) : (n.path = e.path, void 0 !== t.query ? n.query = t.query : n.query = e.query), n.userinfo = e.userinfo, n.host = e.host, n.port = e.port), n.scheme = e.scheme), n.fragment = t.fragment, n
						}

						function N(e, t) {
							return e && e.toString().replace(t && t.iri ? a.PCT_ENCODED : r.PCT_ENCODED, P)
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
							W = {},
							B = "[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]",
							V = "[0-9A-Fa-f]",
							Q = i(i("%[EFef][0-9A-Fa-f]%" + V + V + "%" + V + V) + "|" + i("%[89A-Fa-f][0-9A-Fa-f]%" + V + V) + "|" + i("%" + V + V)),
							J = t("[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]", '[\\"\\\\]'),
							G = new RegExp(B, "g"),
							Z = new RegExp(Q, "g"),
							K = new RegExp(t("[^]", "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]", "[\\.]", '[\\"]', J), "g"),
							Y = new RegExp(t("[^]", B, "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]"), "g"),
							X = Y;

						function ee(e) {
							var t = P(e);
							return t.match(G) ? t : e
						}
						var te = {
								scheme: "mailto",
								parse: function(e, t) {
									var i = e,
										n = i.to = i.path ? i.path.split(",") : [];
									if (i.path = void 0, i.query) {
										for (var s = !1, o = {}, r = i.query.split("&"), a = 0, d = r.length; a < d; ++a) {
											var c = r[a].split("=");
											switch (c[0]) {
												case "to":
													for (var m = c[1].split(","), p = 0, _ = m.length; p < _; ++p) n.push(m[p]);
													break;
												case "subject":
													i.subject = N(c[1], t);
													break;
												case "body":
													i.body = N(c[1], t);
													break;
												default:
													s = !0, o[N(c[0], t)] = N(c[1], t)
											}
										}
										s && (i.headers = o)
									}
									i.query = void 0;
									for (var f = 0, h = n.length; f < h; ++f) {
										var l = n[f].split("@");
										if (l[0] = N(l[0]), t.unicodeSupport) l[1] = N(l[1], t).toLowerCase();
										else try {
											l[1] = j.toASCII(N(l[1], t).toLowerCase())
										} catch (u) {
											i.error = i.error || "Email address's domain name can not be converted to ASCII via punycode: " + u
										}
										n[f] = l.join("@")
									}
									return i
								},
								serialize: function(e, t) {
									var i, n = e,
										o = null != (i = e.to) ? i instanceof Array ? i : "number" != typeof i.length || i.split || i.setInterval || i.call ? [i] : Array.prototype.slice.call(i) : [];
									if (o) {
										for (var r = 0, a = o.length; r < a; ++r) {
											var d = String(o[r]),
												c = d.lastIndexOf("@"),
												m = d.slice(0, c).replace(Z, ee).replace(Z, s).replace(K, x),
												p = d.slice(c + 1);
											try {
												p = t.iri ? j.toUnicode(p) : j.toASCII(N(p, t).toLowerCase())
											} catch (l) {
												n.error = n.error || "Email address's domain name can not be converted to " + (t.iri ? "Unicode" : "ASCII") + " via punycode: " + l
											}
											o[r] = m + "@" + p
										}
										n.path = o.join(",")
									}
									var _ = e.headers = e.headers || {};
									e.subject && (_.subject = e.subject), e.body && (_.body = e.body);
									var f = [];
									for (var h in _) _[h] !== W[h] && f.push(h.replace(Z, ee).replace(Z, s).replace(Y, x) + "=" + _[h].replace(Z, ee).replace(Z, s).replace(X, x));
									return f.length && (n.query = f.join("&")), n
								}
							},
							ie = /^([^\:]+)\:(.*)/,
							ne = {
								scheme: "urn",
								parse: function(e, t) {
									var i = e.path && e.path.match(ie),
										n = e;
									if (i) {
										var s = t.scheme || n.scheme || "urn",
											o = i[1].toLowerCase(),
											r = i[2],
											a = s + ":" + (t.nid || o),
											d = k[a];
										n.nid = o, n.nss = r, n.path = void 0, d && (n = d.parse(n, t))
									} else n.error = n.error || "URN can not be parsed.";
									return n
								},
								serialize: function(e, t) {
									var i = t.scheme || e.scheme || "urn",
										n = e.nid,
										s = i + ":" + (t.nid || n),
										o = k[s];
									o && (e = o.serialize(e, t));
									var r = e,
										a = e.nss;
									return r.path = (n || t.nid) + ":" + a, r
								}
							},
							se = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/,
							oe = {
								scheme: "urn:uuid",
								parse: function(e, t) {
									var i = e;
									return i.uuid = i.nss, i.nss = void 0, t.tolerant || i.uuid && i.uuid.match(se) || (i.error = i.error || "UUID is not valid."), i
								},
								serialize: function(e, t) {
									var i = e;
									return i.nss = (e.uuid || "").toLowerCase(), i
								}
							};
						k[M.scheme] = M, k[H.scheme] = H, k[te.scheme] = te, k[ne.scheme] = ne, k[oe.scheme] = oe, e.SCHEMES = k, e.pctEncChar = x, e.pctDecChars = P, e.parse = I, e.removeDotSegments = C, e.serialize = U, e.resolveComponents = L, e.resolve = function(e, t, i) {
							var n = function(e, t) {
								var i = e;
								if (t)
									for (var n in t) i[n] = t[n];
								return i
							}({
								scheme: "null"
							}, i);
							return U(L(I(e, n), I(t, n), n, !0), n)
						}, e.normalize = function(e, t) {
							return "string" == typeof e ? e = U(I(e, t), t) : "object" === n(e) && (e = I(U(e, t), t)), e
						}, e.equal = function(e, t, i) {
							return "string" == typeof e ? e = U(I(e, i), i) : "object" === n(e) && (e = U(e, i)), "string" == typeof t ? t = U(I(t, i), i) : "object" === n(t) && (t = U(t, i)), e === t
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
							var n, s, o;
							if (Array.isArray(t)) {
								if ((n = t.length) != i.length) return !1;
								for (s = n; 0 != s--;)
									if (!e(t[s], i[s])) return !1;
								return !0
							}
							if (t.constructor === RegExp) return t.source === i.source && t.flags === i.flags;
							if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === i.valueOf();
							if (t.toString !== Object.prototype.toString) return t.toString() === i.toString();
							if ((n = (o = Object.keys(t)).length) !== Object.keys(i).length) return !1;
							for (s = n; 0 != s--;)
								if (!Object.prototype.hasOwnProperty.call(i, o[s])) return !1;
							for (s = n; 0 != s--;) {
								var r = o[s];
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
										n = p(e);
									for (var s in n.array && n.object && (i = n.null ? "(" : "(!" + t + " || ", i += "typeof " + t + ' !== "object")', delete n.null, delete n.array, delete n.object), n.number && delete n.integer, n) i += (i ? " && " : "") + c(s, t, !0);
									return i
							}
						},
						coerceToTypes: function(e, t) {
							if (Array.isArray(t)) {
								for (var i = [], n = 0; n < t.length; n++) {
									var s = t[n];
									m[s] ? i[i.length] = s : "array" === e && "array" === s && (i[i.length] = s)
								}
								if (i.length) return i
							} else {
								if (m[t]) return [t];
								if ("array" === e && "array" === t) return ["array"]
							}
						},
						toHash: p,
						getProperty: h,
						escapeQuotes: l,
						equal: a,
						ucs2length: function(e) {
							for (var t, i = 0, n = e.length, s = 0; s < n;) i++, (t = e.charCodeAt(s++)) >= 55296 && t <= 56319 && s < n && 56320 == (64512 & (t = e.charCodeAt(s))) && s++;
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
							i && 2 == i.length && (e = t ? e.replace($, "").replace(k, x) : e.replace(b, "").replace(w, j));
							return (i = e.match(P)) && 3 === i.length ? e.replace(q, "") : e
						},
						schemaHasRules: function(e, t) {
							if ("boolean" == typeof e) return !e;
							for (var i in e)
								if (t[i]) return !0
						},
						schemaHasRulesExcept: function(e, t, i) {
							if ("boolean" == typeof e) return !e && "not" != i;
							for (var n in e)
								if (n != i && t[n]) return !0
						},
						schemaUnknownRules: function(e, t) {
							if ("boolean" == typeof e) return;
							for (var i in e)
								if (!t[i]) return i
						},
						toQuotedString: T,
						getPathExpr: function(e, t, i, n) {
							return S(e, i ? "'/' + " + t + (n ? "" : ".replace(/~/g, '~0').replace(/\\//g, '~1')") : n ? "'[' + " + t + " + ']'" : "'[\\'' + " + t + " + '\\']'")
						},
						getPath: function(e, t, i) {
							var n = T(i ? "/" + D(t) : h(t));
							return S(e, n)
						},
						getData: function(e, t, i) {
							var n, s, o, r;
							if ("" === e) return "rootData";
							if ("/" == e[0]) {
								if (!E.test(e)) throw new Error("Invalid JSON-pointer: " + e);
								s = e, o = "rootData"
							} else {
								if (!(r = e.match(A))) throw new Error("Invalid JSON-pointer: " + e);
								if (n = +r[1], "#" == (s = r[2])) {
									if (n >= t) throw new Error("Cannot access property/index " + n + " levels up, current level is " + t);
									return i[t - n]
								}
								if (n > t) throw new Error("Cannot access data " + n + " levels up, current level is " + t);
								if (o = "data" + (t - n || ""), !s) return o
							}
							for (var a = o, d = s.split("/"), c = 0; c < d.length; c++) {
								var m = d[c];
								m && (o += h(I(m)), a += " && " + o)
							}
							return a
						},
						unescapeFragment: function(e) {
							return I(decodeURIComponent(e))
						},
						unescapeJsonPointer: I,
						escapeFragment: function(e) {
							return encodeURIComponent(D(e))
						},
						escapeJsonPointer: D
					};

				function c(e, t, i) {
					var n = i ? " !== " : " === ",
						s = i ? " || " : " && ",
						o = i ? "!" : "",
						r = i ? "" : "!";
					switch (e) {
						case "null":
							return t + n + "null";
						case "array":
							return o + "Array.isArray(" + t + ")";
						case "object":
							return "(" + o + t + s + "typeof " + t + n + '"object"' + s + r + "Array.isArray(" + t + "))";
						case "integer":
							return "(typeof " + t + n + '"number"' + s + r + "(" + t + " % 1)" + s + t + n + t + ")";
						default:
							return "typeof " + t + n + '"' + e + '"'
					}
				}
				var m = p(["string", "number", "integer", "boolean", "null"]);

				function p(e) {
					for (var t = {}, i = 0; i < e.length; i++) t[e[i]] = !0;
					return t
				}
				var _ = /^[a-z$_][a-z$_0-9]*$/i,
					f = /'|\\/g;

				function h(e) {
					return "number" == typeof e ? "[" + e + "]" : _.test(e) ? "." + e : "['" + l(e) + "']"
				}

				function l(e) {
					return e.replace(f, "\\$&").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\f/g, "\\f").replace(/\t/g, "\\t")
				}
				var u = /else\s*{\s*}/g,
					g = /if\s*\([^)]+\)\s*\{\s*\}(?!\s*else)/g,
					y = /if\s*\(([^)]+)\)\s*\{\s*\}\s*else(?!\s*if)/g;
				var v = /[^v.]errors/g,
					b = /var errors = 0;|var vErrors = null;|validate.errors = vErrors;/g,
					$ = /var errors = 0;|var vErrors = null;/g,
					w = "return errors === 0;",
					j = "validate.errors = null; return true;",
					k = /if \(errors === 0\) return data;\s*else throw new ValidationError\(vErrors\);/,
					x = "return data;",
					P = /[^A-Za-z_$]rootData[^A-Za-z0-9_$]/g,
					q = /if \(rootData === undefined\) rootData = data;/;

				function T(e) {
					return "'" + l(e) + "'"
				}
				var E = /^\/(?:[^~]|~0|~1)*$/,
					A = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;

				function S(e, t) {
					return '""' == e ? t : (e + " + " + t).replace(/' \+ '/g, "")
				}

				function D(e) {
					return e.replace(/~/g, "~0").replace(/\//g, "~1")
				}

				function I(e) {
					return e.replace(/~1/g, "/").replace(/~0/g, "~")
				}
				var F = function(e) {
					d.copy(e, this)
				};
				var R = n((function(e) {
						var t = e.exports = function(e, i, n) {
							"function" == typeof i && (n = i, i = {}),
								function e(i, n, s, o, r, a, d, c, m, p) {
									if (o && "object" == typeof o && !Array.isArray(o)) {
										for (var _ in n(o, r, a, d, c, m, p), o) {
											var f = o[_];
											if (Array.isArray(f)) {
												if (_ in t.arrayKeywords)
													for (var h = 0; h < f.length; h++) e(i, n, s, f[h], r + "/" + _ + "/" + h, a, r, _, o, h)
											} else if (_ in t.propsKeywords) {
												if (f && "object" == typeof f)
													for (var l in f) e(i, n, s, f[l], r + "/" + _ + "/" + l.replace(/~/g, "~0").replace(/\//g, "~1"), a, r, _, o, l)
											} else(_ in t.keywords || i.allKeys && !(_ in t.skipKeywords)) && e(i, n, s, f, r + "/" + _, a, r, _, o)
										}
										s(o, r, a, d, c, m, p)
									}
								}(i, "function" == typeof(n = i.cb || n) ? n : n.pre || function() {}, n.post || function() {}, e, "", e)
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
					z = O;

				function O(e, t, i) {
					var n = this._refs[i];
					if ("string" == typeof n) {
						if (!this._refs[n]) return O.call(this, e, t, n);
						n = this._refs[n]
					}
					if ((n = n || this._schemas[i]) instanceof F) return H(n.schema, this._opts.inlineRefs) ? n.schema : n.validate || this._compile(n);
					var s, o, r, a = C.call(this, t, i);
					return a && (s = a.schema, t = a.root, r = a.baseId), s instanceof F ? o = s.validate || e.call(this, s.schema, t, void 0, r) : void 0 !== s && (o = H(s, this._opts.inlineRefs) ? s : e.call(this, s, t, void 0, r)), o
				}

				function C(e, t) {
					var i = r.parse(t),
						n = B(i),
						s = W(this._getId(e.schema));
					if (0 === Object.keys(e.schema).length || n !== s) {
						var o = Q(n),
							a = this._refs[o];
						if ("string" == typeof a) return U.call(this, e, a, i);
						if (a instanceof F) a.validate || this._compile(a), e = a;
						else {
							if (!((a = this._schemas[o]) instanceof F)) return;
							if (a.validate || this._compile(a), o == Q(t)) return {
								schema: a,
								root: e,
								baseId: s
							};
							e = a
						}
						if (!e.schema) return;
						s = W(this._getId(e.schema))
					}
					return N.call(this, i, s, e.schema, e)
				}

				function U(e, t, i) {
					var n = C.call(this, e, t);
					if (n) {
						var s = n.schema,
							o = n.baseId;
						e = n.root;
						var r = this._getId(s);
						return r && (o = J(o, r)), N.call(this, i, o, s, e)
					}
				}
				O.normalizeId = Q, O.fullPath = W, O.url = J, O.ids = function(e) {
					var t = Q(this._getId(e)),
						i = {
							"": t
						},
						n = {
							"": W(t, !1)
						},
						s = {},
						o = this;
					return R(e, {
						allKeys: !0
					}, (function(e, t, c, m, p, _, f) {
						if ("" !== t) {
							var h = o._getId(e),
								l = i[m],
								u = n[m] + "/" + p;
							if (void 0 !== f && (u += "/" + ("number" == typeof f ? f : d.escapeFragment(f))), "string" == typeof h) {
								h = l = Q(l ? r.resolve(l, h) : h);
								var g = o._refs[h];
								if ("string" == typeof g && (g = o._refs[g]), g && g.schema) {
									if (!a(e, g.schema)) throw new Error('id "' + h + '" resolves to more than one schema')
								} else if (h != Q(u))
									if ("#" == h[0]) {
										if (s[h] && !a(e, s[h])) throw new Error('id "' + h + '" resolves to more than one schema');
										s[h] = e
									} else o._refs[h] = u
							}
							i[t] = l, n[t] = u
						}
					})), s
				}, O.inlineRef = H, O.schema = C;
				var L = d.toHash(["properties", "patternProperties", "enum", "dependencies", "definitions"]);

				function N(e, t, i, n) {
					if (e.fragment = e.fragment || "", "/" == e.fragment.slice(0, 1)) {
						for (var s = e.fragment.split("/"), o = 1; o < s.length; o++) {
							var r = s[o];
							if (r) {
								if (void 0 === (i = i[r = d.unescapeFragment(r)])) break;
								var a;
								if (!L[r] && ((a = this._getId(i)) && (t = J(t, a)), i.$ref)) {
									var c = J(t, i.$ref),
										m = C.call(this, n, c);
									m && (i = m.schema, n = m.root, t = m.baseId)
								}
							}
						}
						return void 0 !== i && i !== n.schema ? {
							schema: i,
							root: n,
							baseId: t
						} : void 0
					}
				}
				var M = d.toHash(["type", "format", "pattern", "maxLength", "minLength", "maxProperties", "minProperties", "maxItems", "minItems", "maximum", "minimum", "uniqueItems", "multipleOf", "required", "enum"]);

				function H(e, t) {
					return !1 !== t && (void 0 === t || !0 === t ? function e(t) {
						var i;
						if (Array.isArray(t)) {
							for (var n = 0; n < t.length; n++)
								if ("object" == typeof(i = t[n]) && !e(i)) return !1
						} else
							for (var s in t) {
								if ("$ref" == s) return !1;
								if ("object" == typeof(i = t[s]) && !e(i)) return !1
							}
						return !0
					}(e) : t ? function e(t) {
						var i, n = 0;
						if (Array.isArray(t)) {
							for (var s = 0; s < t.length; s++)
								if ("object" == typeof(i = t[s]) && (n += e(i)), n == 1 / 0) return 1 / 0
						} else
							for (var o in t) {
								if ("$ref" == o) return 1 / 0;
								if (M[o]) n++;
								else if ("object" == typeof(i = t[o]) && (n += e(i) + 1), n == 1 / 0) return 1 / 0
							}
						return n
					}(e) <= t : void 0)
				}

				function W(e, t) {
					return !1 !== t && (e = Q(e)), B(r.parse(e))
				}

				function B(e) {
					return r.serialize(e).split("#")[0] + "#"
				}
				var V = /#\/?$/;

				function Q(e) {
					return e ? e.replace(V, "") : ""
				}

				function J(e, t) {
					return t = Q(t), r.resolve(e, t)
				}
				var G = {
					Validation: K((function(e) {
						this.message = "validation failed", this.errors = e, this.ajv = this.validation = !0
					})),
					MissingRef: K(Z)
				};

				function Z(e, t, i) {
					this.message = i || Z.message(e, t), this.missingRef = z.url(e, t), this.missingSchema = z.normalizeId(z.fullPath(this.missingRef))
				}

				function K(e) {
					return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e, e
				}
				Z.message = function(e, t) {
					return "can't resolve reference " + t + " from id " + e
				};
				var Y = function(e, t) {
						t || (t = {}), "function" == typeof t && (t = {
							cmp: t
						});
						var i, n = "boolean" == typeof t.cycles && t.cycles,
							s = t.cmp && (i = t.cmp, function(e) {
								return function(t, n) {
									var s = {
											key: t,
											value: e[t]
										},
										o = {
											key: n,
											value: e[n]
										};
									return i(s, o)
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
									if (n) return JSON.stringify("__cycle__");
									throw new TypeError("Converting circular structure to JSON")
								}
								var a = o.push(t) - 1,
									d = Object.keys(t).sort(s && s(t));
								for (r = "", i = 0; i < d.length; i++) {
									var c = d[i],
										m = e(t[c]);
									m && (r && (r += ","), r += JSON.stringify(c) + ":" + m)
								}
								return o.splice(a, 1), "{" + r + "}"
							}
						}(e)
					},
					X = function(e, t, i) {
						var n = "",
							s = !0 === e.schema.$async,
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
						if (e.isTop && (n += " var validate = ", s && (e.async = !0, n += "async "), n += "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ", r && (e.opts.sourceCode || e.opts.processCode) && (n += " /*# sourceURL=" + r + " */ ")), "boolean" == typeof e.schema || !o && !e.schema.$ref) {
							var c = e.level,
								m = e.dataLevel,
								p = e.schema["false schema"],
								_ = e.schemaPath + e.util.getProperty("false schema"),
								f = e.errSchemaPath + "/false schema",
								h = !e.opts.allErrors,
								l = "data" + (m || ""),
								u = "valid" + c;
							if (!1 === e.schema) {
								e.isTop ? h = !0 : n += " var " + u + " = false; ", (K = K || []).push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: 'false schema' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: {} ", !1 !== e.opts.messages && (n += " , message: 'boolean schema is false' "), e.opts.verbose && (n += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "), n += " } ") : n += " {} ";
								var g = n;
								n = K.pop(), !e.compositeRule && h ? e.async ? n += " throw new ValidationError([" + g + "]); " : n += " validate.errors = [" + g + "]; return false; " : n += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
							} else e.isTop ? n += s ? " return data; " : " validate.errors = null; return true; " : n += " var " + u + " = true; ";
							return e.isTop && (n += " }; return validate; "), n
						}
						if (e.isTop) {
							var y = e.isTop;
							c = e.level = 0, m = e.dataLevel = 0, l = "data";
							if (e.rootId = e.resolve.fullPath(e.self._getId(e.root.schema)), e.baseId = e.baseId || e.rootId, delete e.isTop, e.dataPathArr = [void 0], void 0 !== e.schema.default && e.opts.useDefaults && e.opts.strictDefaults) {
								var v = "default is ignored in the schema root";
								if ("log" !== e.opts.strictDefaults) throw new Error(v);
								e.logger.warn(v)
							}
							n += " var vErrors = null; ", n += " var errors = 0;     ", n += " if (rootData === undefined) rootData = data; "
						} else {
							c = e.level, l = "data" + ((m = e.dataLevel) || "");
							if (r && (e.baseId = e.resolve.url(e.baseId, r)), s && !e.async) throw new Error("async schema in sync schema");
							n += " var errs_" + c + " = errors;"
						}
						u = "valid" + c, h = !e.opts.allErrors;
						var b = "",
							$ = "",
							w = e.schema.type,
							j = Array.isArray(w);
						if (w && e.opts.nullable && !0 === e.schema.nullable && (j ? -1 == w.indexOf("null") && (w = w.concat("null")) : "null" != w && (w = [w, "null"], j = !0)), j && 1 == w.length && (w = w[0], j = !1), e.schema.$ref && o) {
							if ("fail" == e.opts.extendRefs) throw new Error('$ref: validation keywords used in schema at path "' + e.errSchemaPath + '" (see option extendRefs)');
							!0 !== e.opts.extendRefs && (o = !1, e.logger.warn('$ref: keywords ignored in schema at path "' + e.errSchemaPath + '"'))
						}
						if (e.schema.$comment && e.opts.$comment && (n += " " + e.RULES.all.$comment.code(e, "$comment")), w) {
							if (e.opts.coerceTypes) var k = e.util.coerceToTypes(e.opts.coerceTypes, w);
							var x = e.RULES.types[w];
							if (k || j || !0 === x || x && !Y(x)) {
								_ = e.schemaPath + ".type", f = e.errSchemaPath + "/type", _ = e.schemaPath + ".type", f = e.errSchemaPath + "/type";
								var P = j ? "checkDataTypes" : "checkDataType";
								if (n += " if (" + e.util[P](w, l, !0) + ") { ", k) {
									var q = "dataType" + c,
										T = "coerced" + c;
									n += " var " + q + " = typeof " + l + "; ", "array" == e.opts.coerceTypes && (n += " if (" + q + " == 'object' && Array.isArray(" + l + ")) " + q + " = 'array'; "), n += " var " + T + " = undefined; ";
									var E = "",
										A = k;
									if (A)
										for (var S, D = -1, I = A.length - 1; D < I;) S = A[D += 1], D && (n += " if (" + T + " === undefined) { ", E += "}"), "array" == e.opts.coerceTypes && "array" != S && (n += " if (" + q + " == 'array' && " + l + ".length == 1) { " + T + " = " + l + " = " + l + "[0]; " + q + " = typeof " + l + ";  } "), "string" == S ? n += " if (" + q + " == 'number' || " + q + " == 'boolean') " + T + " = '' + " + l + "; else if (" + l + " === null) " + T + " = ''; " : "number" == S || "integer" == S ? (n += " if (" + q + " == 'boolean' || " + l + " === null || (" + q + " == 'string' && " + l + " && " + l + " == +" + l + " ", "integer" == S && (n += " && !(" + l + " % 1)"), n += ")) " + T + " = +" + l + "; ") : "boolean" == S ? n += " if (" + l + " === 'false' || " + l + " === 0 || " + l + " === null) " + T + " = false; else if (" + l + " === 'true' || " + l + " === 1) " + T + " = true; " : "null" == S ? n += " if (" + l + " === '' || " + l + " === 0 || " + l + " === false) " + T + " = null; " : "array" == e.opts.coerceTypes && "array" == S && (n += " if (" + q + " == 'string' || " + q + " == 'number' || " + q + " == 'boolean' || " + l + " == null) " + T + " = [" + l + "]; ");
									n += " " + E + " if (" + T + " === undefined) {   ", (K = K || []).push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: 'type' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { type: '", n += j ? "" + w.join(",") : "" + w, n += "' } ", !1 !== e.opts.messages && (n += " , message: 'should be ", n += j ? "" + w.join(",") : "" + w, n += "' "), e.opts.verbose && (n += " , schema: validate.schema" + _ + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "), n += " } ") : n += " {} ";
									g = n;
									n = K.pop(), !e.compositeRule && h ? e.async ? n += " throw new ValidationError([" + g + "]); " : n += " validate.errors = [" + g + "]; return false; " : n += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += " } else {  ";
									var F = m ? "data" + (m - 1 || "") : "parentData";
									n += " " + l + " = " + T + "; ", m || (n += "if (" + F + " !== undefined)"), n += " " + F + "[" + (m ? e.dataPathArr[m] : "parentDataProperty") + "] = " + T + "; } "
								} else {
									(K = K || []).push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: 'type' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { type: '", n += j ? "" + w.join(",") : "" + w, n += "' } ", !1 !== e.opts.messages && (n += " , message: 'should be ", n += j ? "" + w.join(",") : "" + w, n += "' "), e.opts.verbose && (n += " , schema: validate.schema" + _ + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "), n += " } ") : n += " {} ";
									g = n;
									n = K.pop(), !e.compositeRule && h ? e.async ? n += " throw new ValidationError([" + g + "]); " : n += " validate.errors = [" + g + "]; return false; " : n += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
								}
								n += " } "
							}
						}
						if (e.schema.$ref && !o) n += " " + e.RULES.all.$ref.code(e, "$ref") + " ", h && (n += " } if (errors === ", n += y ? "0" : "errs_" + c, n += ") { ", $ += "}");
						else {
							var R = e.RULES;
							if (R)
								for (var z = -1, O = R.length - 1; z < O;)
									if (Y(x = R[z += 1])) {
										if (x.type && (n += " if (" + e.util.checkDataType(x.type, l) + ") { "), e.opts.useDefaults)
											if ("object" == x.type && e.schema.properties) {
												p = e.schema.properties;
												var C = Object.keys(p);
												if (C)
													for (var U, L = -1, N = C.length - 1; L < N;) {
														if (void 0 !== (W = p[U = C[L += 1]]).default) {
															var M = l + e.util.getProperty(U);
															if (e.compositeRule) {
																if (e.opts.strictDefaults) {
																	v = "default is ignored for: " + M;
																	if ("log" !== e.opts.strictDefaults) throw new Error(v);
																	e.logger.warn(v)
																}
															} else n += " if (" + M + " === undefined ", "empty" == e.opts.useDefaults && (n += " || " + M + " === null || " + M + " === '' "), n += " ) " + M + " = ", "shared" == e.opts.useDefaults ? n += " " + e.useDefault(W.default) + " " : n += " " + JSON.stringify(W.default) + " ", n += "; "
														}
													}
											} else if ("array" == x.type && Array.isArray(e.schema.items)) {
											var H = e.schema.items;
											if (H) {
												D = -1;
												for (var W, B = H.length - 1; D < B;)
													if (void 0 !== (W = H[D += 1]).default) {
														M = l + "[" + D + "]";
														if (e.compositeRule) {
															if (e.opts.strictDefaults) {
																v = "default is ignored for: " + M;
																if ("log" !== e.opts.strictDefaults) throw new Error(v);
																e.logger.warn(v)
															}
														} else n += " if (" + M + " === undefined ", "empty" == e.opts.useDefaults && (n += " || " + M + " === null || " + M + " === '' "), n += " ) " + M + " = ", "shared" == e.opts.useDefaults ? n += " " + e.useDefault(W.default) + " " : n += " " + JSON.stringify(W.default) + " ", n += "; "
													}
											}
										}
										var V = x.rules;
										if (V)
											for (var Q, J = -1, G = V.length - 1; J < G;)
												if (X(Q = V[J += 1])) {
													var Z = Q.code(e, Q.keyword, x.type);
													Z && (n += " " + Z + " ", h && (b += "}"))
												} if (h && (n += " " + b + " ", b = ""), x.type && (n += " } ", w && w === x.type && !k)) {
											n += " else { ";
											var K;
											_ = e.schemaPath + ".type", f = e.errSchemaPath + "/type";
											(K = K || []).push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: 'type' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(f) + " , params: { type: '", n += j ? "" + w.join(",") : "" + w, n += "' } ", !1 !== e.opts.messages && (n += " , message: 'should be ", n += j ? "" + w.join(",") : "" + w, n += "' "), e.opts.verbose && (n += " , schema: validate.schema" + _ + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + l + " "), n += " } ") : n += " {} ";
											g = n;
											n = K.pop(), !e.compositeRule && h ? e.async ? n += " throw new ValidationError([" + g + "]); " : n += " validate.errors = [" + g + "]; return false; " : n += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += " } "
										}
										h && (n += " if (errors === ", n += y ? "0" : "errs_" + c, n += ") { ", $ += "}")
									}
						}

						function Y(e) {
							for (var t = e.rules, i = 0; i < t.length; i++)
								if (X(t[i])) return !0
						}

						function X(t) {
							return void 0 !== e.schema[t.keyword] || t.implements && function(t) {
								for (var i = t.implements, n = 0; n < i.length; n++)
									if (void 0 !== e.schema[i[n]]) return !0
							}(t)
						}
						return h && (n += " " + $ + " "), y ? (s ? (n += " if (errors === 0) return data;           ", n += " else throw new ValidationError(vErrors); ") : (n += " validate.errors = vErrors; ", n += " return errors === 0;       "), n += " }; return validate;") : n += " var " + u + " = errors === errs_" + c + ";", n = e.util.cleanUpCode(n), y && (n = e.util.finalCleanUpCode(n, s)), n
					},
					ee = d.ucs2length,
					te = G.Validation,
					ie = function e(t, i, n, s) {
						var o = this,
							r = this._opts,
							c = [void 0],
							m = {},
							p = [],
							_ = {},
							f = [],
							h = {},
							l = [];
						i = i || {
							schema: t,
							refVal: c,
							refs: m
						};
						var u = ne.call(this, t, i, s);
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
							var b = w(t, i, n, s);
							g.validate = b;
							var $ = g.callValidate;
							return $ && ($.schema = b.schema, $.errors = null, $.refs = b.refs, $.refVal = b.refVal, $.root = b.root, $.$async = b.$async, r.sourceCode && ($.source = b.source)), b
						} finally {
							se.call(this, t, i, s)
						}

						function w(t, n, s, _) {
							var h = !n || n && n.schema == t;
							if (n.schema != i.schema) return e.call(o, t, n, s, _);
							var u, g = !0 === t.$async,
								b = X({
									isTop: !0,
									schema: t,
									isRoot: h,
									baseId: _,
									root: n,
									schemaPath: "",
									errSchemaPath: "#",
									errorPath: '""',
									MissingRefError: G.MissingRef,
									RULES: v,
									validate: X,
									util: d,
									resolve: z,
									resolveRef: j,
									usePattern: P,
									useDefault: q,
									useCustomRule: T,
									opts: r,
									formats: y,
									logger: o.logger,
									self: o
								});
							b = me(c, de) + me(p, re) + me(f, ae) + me(l, ce) + b, r.processCode && (b = r.processCode(b));
							try {
								u = new Function("self", "RULES", "formats", "root", "refVal", "defaults", "customRules", "equal", "ucs2length", "ValidationError", b)(o, v, y, i, c, f, l, a, ee, te), c[0] = u
							} catch ($) {
								throw o.logger.error("Error compiling schema, function code:", b), $
							}
							return u.schema = t, u.errors = null, u.refs = m, u.refVal = c, u.root = h ? u : n, g && (u.$async = !0), !0 === r.sourceCode && (u.source = {
								code: b,
								patterns: p,
								defaults: f
							}), u
						}

						function j(t, s, a) {
							s = z.url(t, s);
							var d, p, _ = m[s];
							if (void 0 !== _) return x(d = c[_], p = "refVal[" + _ + "]");
							if (!a && i.refs) {
								var f = i.refs[s];
								if (void 0 !== f) return x(d = i.refVal[f], p = k(s, d))
							}
							p = k(s);
							var h = z.call(o, w, i, s);
							if (void 0 === h) {
								var l = n && n[s];
								l && (h = z.inlineRef(l, r.inlineRefs) ? l : e.call(o, l, i, n, t))
							}
							if (void 0 !== h) return function(e, t) {
								var i = m[e];
								c[i] = t
							}(s, h), x(h, p);
							! function(e) {
								delete m[e]
							}(s)
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
									var t = Y(e),
										i = h[t];
									return void 0 === i && (i = h[t] = f.length, f[i] = e), "default" + i
							}
						}

						function T(e, t, i, n) {
							if (!1 !== o._opts.validateSchema) {
								var s = e.definition.dependencies;
								if (s && !s.every((function(e) {
										return Object.prototype.hasOwnProperty.call(i, e)
									}))) throw new Error("parent schema must have all required keywords: " + s.join(","));
								var a = e.definition.validateSchema;
								if (a)
									if (!a(t)) {
										var d = "keyword schema is invalid: " + o.errorsText(a.errors);
										if ("log" != o._opts.validateSchema) throw new Error(d);
										o.logger.error(d)
									}
							}
							var c, m = e.definition.compile,
								p = e.definition.inline,
								_ = e.definition.macro;
							if (m) c = m.call(o, t, i, n);
							else if (_) c = _.call(o, t, i, n), !1 !== r.validateSchema && o.validateSchema(c, !0);
							else if (p) c = p.call(o, n, e.keyword, t, i);
							else if (!(c = e.definition.validate)) return;
							if (void 0 === c) throw new Error('custom keyword "' + e.keyword + '"failed to compile');
							var f = l.length;
							return l[f] = c, {
								code: "customRule" + f,
								validate: c
							}
						}
					};

				function ne(e, t, i) {
					var n = oe.call(this, e, t, i);
					return n >= 0 ? {
						index: n,
						compiling: !0
					} : (n = this._compilations.length, this._compilations[n] = {
						schema: e,
						root: t,
						baseId: i
					}, {
						index: n,
						compiling: !1
					})
				}

				function se(e, t, i) {
					var n = oe.call(this, e, t, i);
					n >= 0 && this._compilations.splice(n, 1)
				}

				function oe(e, t, i) {
					for (var n = 0; n < this._compilations.length; n++) {
						var s = this._compilations[n];
						if (s.schema == e && s.root == t && s.baseId == i) return n
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

				function me(e, t) {
					if (!e.length) return "";
					for (var i = "", n = 0; n < e.length; n++) i += t(n, e);
					return i
				}
				var pe = n((function(e) {
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
					fe = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
					he = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i,
					le = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
					ue = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
					ge = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
					ye = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i,
					ve = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
					be = /^(?:\/(?:[^~/]|~0|~1)*)*$/,
					$e = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
					we = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
					je = ke;

				function ke(e) {
					return e = "full" == e ? "full" : "fast", d.copy(ke[e])
				}

				function xe(e) {
					var t = e.match(_e);
					if (!t) return !1;
					var i = +t[1],
						n = +t[2],
						s = +t[3];
					return n >= 1 && n <= 12 && s >= 1 && s <= (2 == n && function(e) {
						return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0)
					}(i) ? 29 : fe[n])
				}

				function Pe(e, t) {
					var i = e.match(he);
					if (!i) return !1;
					var n = i[1],
						s = i[2],
						o = i[3],
						r = i[5];
					return (n <= 23 && s <= 59 && o <= 59 || 23 == n && 59 == s && 60 == o) && (!t || r)
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
					regex: Ae,
					uuid: ve,
					"json-pointer": be,
					"json-pointer-uri-fragment": $e,
					"relative-json-pointer": we
				}, ke.full = {
					date: xe,
					time: Pe,
					"date-time": function(e) {
						var t = e.split(qe);
						return 2 == t.length && xe(t[0]) && Pe(t[1], !0)
					},
					uri: function(e) {
						return Te.test(e) && ue.test(e)
					},
					"uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
					"uri-template": ge,
					url: ye,
					email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
					hostname: le,
					ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
					ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
					regex: Ae,
					uuid: ve,
					"json-pointer": be,
					"json-pointer-uri-fragment": $e,
					"relative-json-pointer": we
				};
				var qe = /t|\s/i;
				var Te = /\/|:/;
				var Ee = /[^\\]\\Z/;

				function Ae(e) {
					if (Ee.test(e)) return !1;
					try {
						return new RegExp(e), !0
					} catch (t) {
						return !1
					}
				}
				var Se = function(e, t, i) {
						var n, s = " ",
							o = e.level,
							r = e.dataLevel,
							a = e.schema[t],
							d = e.schemaPath + e.util.getProperty(t),
							c = e.errSchemaPath + "/" + t,
							m = !e.opts.allErrors,
							p = "data" + (r || ""),
							_ = e.opts.$data && a && a.$data;
						_ ? (s += " var schema" + o + " = " + e.util.getData(a.$data, r, e.dataPathArr) + "; ", n = "schema" + o) : n = a;
						var f = "maximum" == t,
							h = f ? "exclusiveMaximum" : "exclusiveMinimum",
							l = e.schema[h],
							u = e.opts.$data && l && l.$data,
							g = f ? "<" : ">",
							y = f ? ">" : "<",
							v = void 0;
						if (u) {
							var b = e.util.getData(l.$data, r, e.dataPathArr),
								$ = "exclusive" + o,
								w = "exclType" + o,
								j = "exclIsNumber" + o,
								k = "' + " + (q = "op" + o) + " + '";
							s += " var schemaExcl" + o + " = " + b + "; ", s += " var " + $ + "; var " + w + " = typeof " + (b = "schemaExcl" + o) + "; if (" + w + " != 'boolean' && " + w + " != 'undefined' && " + w + " != 'number') { ";
							var x;
							v = h;
							(x = x || []).push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: '" + (v || "_exclusiveLimit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: {} ", !1 !== e.opts.messages && (s += " , message: '" + h + " should be boolean' "), e.opts.verbose && (s += " , schema: validate.schema" + d + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ";
							var P = s;
							s = x.pop(), !e.compositeRule && m ? e.async ? s += " throw new ValidationError([" + P + "]); " : s += " validate.errors = [" + P + "]; return false; " : s += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } else if ( ", _ && (s += " (" + n + " !== undefined && typeof " + n + " != 'number') || "), s += " " + w + " == 'number' ? ( (" + $ + " = " + n + " === undefined || " + b + " " + g + "= " + n + ") ? " + p + " " + y + "= " + b + " : " + p + " " + y + " " + n + " ) : ( (" + $ + " = " + b + " === true) ? " + p + " " + y + "= " + n + " : " + p + " " + y + " " + n + " ) || " + p + " !== " + p + ") { var op" + o + " = " + $ + " ? '" + g + "' : '" + g + "='; ", void 0 === a && (v = h, c = e.errSchemaPath + "/" + h, n = b, _ = u)
						} else {
							k = g;
							if ((j = "number" == typeof l) && _) {
								var q = "'" + k + "'";
								s += " if ( ", _ && (s += " (" + n + " !== undefined && typeof " + n + " != 'number') || "), s += " ( " + n + " === undefined || " + l + " " + g + "= " + n + " ? " + p + " " + y + "= " + l + " : " + p + " " + y + " " + n + " ) || " + p + " !== " + p + ") { "
							} else {
								j && void 0 === a ? ($ = !0, v = h, c = e.errSchemaPath + "/" + h, n = l, y += "=") : (j && (n = Math[f ? "min" : "max"](l, a)), l === (!j || n) ? ($ = !0, v = h, c = e.errSchemaPath + "/" + h, y += "=") : ($ = !1, k += "="));
								q = "'" + k + "'";
								s += " if ( ", _ && (s += " (" + n + " !== undefined && typeof " + n + " != 'number') || "), s += " " + p + " " + y + " " + n + " || " + p + " !== " + p + ") { "
							}
						}
						v = v || t, (x = x || []).push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: '" + (v || "_limit") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { comparison: " + q + ", limit: " + n + ", exclusive: " + $ + " } ", !1 !== e.opts.messages && (s += " , message: 'should be " + k + " ", s += _ ? "' + " + n : n + "'"), e.opts.verbose && (s += " , schema:  ", s += _ ? "validate.schema" + d : "" + a, s += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ";
						P = s;
						return s = x.pop(), !e.compositeRule && m ? e.async ? s += " throw new ValidationError([" + P + "]); " : s += " validate.errors = [" + P + "]; return false; " : s += " var err = " + P + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } ", m && (s += " else { "), s
					},
					De = function(e, t, i) {
						var n, s = " ",
							o = e.level,
							r = e.dataLevel,
							a = e.schema[t],
							d = e.schemaPath + e.util.getProperty(t),
							c = e.errSchemaPath + "/" + t,
							m = !e.opts.allErrors,
							p = "data" + (r || ""),
							_ = e.opts.$data && a && a.$data;
						_ ? (s += " var schema" + o + " = " + e.util.getData(a.$data, r, e.dataPathArr) + "; ", n = "schema" + o) : n = a, s += "if ( ", _ && (s += " (" + n + " !== undefined && typeof " + n + " != 'number') || "), s += " " + p + ".length " + ("maxItems" == t ? ">" : "<") + " " + n + ") { ";
						var f = t,
							h = h || [];
						h.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: '" + (f || "_limitItems") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { limit: " + n + " } ", !1 !== e.opts.messages && (s += " , message: 'should NOT have ", s += "maxItems" == t ? "more" : "fewer", s += " than ", s += _ ? "' + " + n + " + '" : "" + a, s += " items' "), e.opts.verbose && (s += " , schema:  ", s += _ ? "validate.schema" + d : "" + a, s += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ";
						var l = s;
						return s = h.pop(), !e.compositeRule && m ? e.async ? s += " throw new ValidationError([" + l + "]); " : s += " validate.errors = [" + l + "]; return false; " : s += " var err = " + l + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += "} ", m && (s += " else { "), s
					},
					Ie = function(e, t, i) {
						var n, s = " ",
							o = e.level,
							r = e.dataLevel,
							a = e.schema[t],
							d = e.schemaPath + e.util.getProperty(t),
							c = e.errSchemaPath + "/" + t,
							m = !e.opts.allErrors,
							p = "data" + (r || ""),
							_ = e.opts.$data && a && a.$data;
						_ ? (s += " var schema" + o + " = " + e.util.getData(a.$data, r, e.dataPathArr) + "; ", n = "schema" + o) : n = a;
						var f = "maxLength" == t ? ">" : "<";
						s += "if ( ", _ && (s += " (" + n + " !== undefined && typeof " + n + " != 'number') || "), !1 === e.opts.unicode ? s += " " + p + ".length " : s += " ucs2length(" + p + ") ", s += " " + f + " " + n + ") { ";
						var h = t,
							l = l || [];
						l.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: '" + (h || "_limitLength") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { limit: " + n + " } ", !1 !== e.opts.messages && (s += " , message: 'should NOT be ", s += "maxLength" == t ? "longer" : "shorter", s += " than ", s += _ ? "' + " + n + " + '" : "" + a, s += " characters' "), e.opts.verbose && (s += " , schema:  ", s += _ ? "validate.schema" + d : "" + a, s += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ";
						var u = s;
						return s = l.pop(), !e.compositeRule && m ? e.async ? s += " throw new ValidationError([" + u + "]); " : s += " validate.errors = [" + u + "]; return false; " : s += " var err = " + u + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += "} ", m && (s += " else { "), s
					},
					Fe = function(e, t, i) {
						var n, s = " ",
							o = e.level,
							r = e.dataLevel,
							a = e.schema[t],
							d = e.schemaPath + e.util.getProperty(t),
							c = e.errSchemaPath + "/" + t,
							m = !e.opts.allErrors,
							p = "data" + (r || ""),
							_ = e.opts.$data && a && a.$data;
						_ ? (s += " var schema" + o + " = " + e.util.getData(a.$data, r, e.dataPathArr) + "; ", n = "schema" + o) : n = a, s += "if ( ", _ && (s += " (" + n + " !== undefined && typeof " + n + " != 'number') || "), s += " Object.keys(" + p + ").length " + ("maxProperties" == t ? ">" : "<") + " " + n + ") { ";
						var f = t,
							h = h || [];
						h.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: '" + (f || "_limitProperties") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { limit: " + n + " } ", !1 !== e.opts.messages && (s += " , message: 'should NOT have ", s += "maxProperties" == t ? "more" : "fewer", s += " than ", s += _ ? "' + " + n + " + '" : "" + a, s += " properties' "), e.opts.verbose && (s += " , schema:  ", s += _ ? "validate.schema" + d : "" + a, s += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ";
						var l = s;
						return s = h.pop(), !e.compositeRule && m ? e.async ? s += " throw new ValidationError([" + l + "]); " : s += " validate.errors = [" + l + "]; return false; " : s += " var err = " + l + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += "} ", m && (s += " else { "), s
					},
					Re = {
						$ref: function(e, t, i) {
							var n, s, o = " ",
								r = e.level,
								a = e.dataLevel,
								d = e.schema[t],
								c = e.errSchemaPath + "/" + t,
								m = !e.opts.allErrors,
								p = "data" + (a || ""),
								_ = "valid" + r;
							if ("#" == d || "#/" == d) e.isRoot ? (n = e.async, s = "validate") : (n = !0 === e.root.schema.$async, s = "root.refVal[0]");
							else {
								var f = e.resolveRef(e.baseId, d, e.isRoot);
								if (void 0 === f) {
									var h = e.MissingRefError.message(e.baseId, d);
									if ("fail" == e.opts.missingRefs) {
										e.logger.error(h), (y = y || []).push(o), o = "", !1 !== e.createErrors ? (o += " { keyword: '$ref' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { ref: '" + e.util.escapeQuotes(d) + "' } ", !1 !== e.opts.messages && (o += " , message: 'can\\'t resolve reference " + e.util.escapeQuotes(d) + "' "), e.opts.verbose && (o += " , schema: " + e.util.toQuotedString(d) + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), o += " } ") : o += " {} ";
										var l = o;
										o = y.pop(), !e.compositeRule && m ? e.async ? o += " throw new ValidationError([" + l + "]); " : o += " validate.errors = [" + l + "]; return false; " : o += " var err = " + l + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", m && (o += " if (false) { ")
									} else {
										if ("ignore" != e.opts.missingRefs) throw new e.MissingRefError(e.baseId, d, h);
										e.logger.warn(h), m && (o += " if (true) { ")
									}
								} else if (f.inline) {
									var u = e.util.copy(e);
									u.level++;
									var g = "valid" + u.level;
									u.schema = f.schema, u.schemaPath = "", u.errSchemaPath = d, o += " " + e.validate(u).replace(/validate\.schema/g, f.code) + " ", m && (o += " if (" + g + ") { ")
								} else n = !0 === f.$async || e.async && !1 !== f.$async, s = f.code
							}
							if (s) {
								var y;
								(y = y || []).push(o), o = "", e.opts.passContext ? o += " " + s + ".call(this, " : o += " " + s + "( ", o += " " + p + ", (dataPath || '')", '""' != e.errorPath && (o += " + " + e.errorPath);
								var v = o += " , " + (a ? "data" + (a - 1 || "") : "parentData") + " , " + (a ? e.dataPathArr[a] : "parentDataProperty") + ", rootData)  ";
								if (o = y.pop(), n) {
									if (!e.async) throw new Error("async schema referenced by sync schema");
									m && (o += " var " + _ + "; "), o += " try { await " + v + "; ", m && (o += " " + _ + " = true; "), o += " } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ", m && (o += " " + _ + " = false; "), o += " } ", m && (o += " if (" + _ + ") { ")
								} else o += " if (!" + v + ") { if (vErrors === null) vErrors = " + s + ".errors; else vErrors = vErrors.concat(" + s + ".errors); errors = vErrors.length; } ", m && (o += " else { ")
							}
							return o
						},
						allOf: function(e, t, i) {
							var n = " ",
								s = e.schema[t],
								o = e.schemaPath + e.util.getProperty(t),
								r = e.errSchemaPath + "/" + t,
								a = !e.opts.allErrors,
								d = e.util.copy(e),
								c = "";
							d.level++;
							var m = "valid" + d.level,
								p = d.baseId,
								_ = !0,
								f = s;
							if (f)
								for (var h, l = -1, u = f.length - 1; l < u;) h = f[l += 1], (e.opts.strictKeywords ? "object" == typeof h && Object.keys(h).length > 0 : e.util.schemaHasRules(h, e.RULES.all)) && (_ = !1, d.schema = h, d.schemaPath = o + "[" + l + "]", d.errSchemaPath = r + "/" + l, n += "  " + e.validate(d) + " ", d.baseId = p, a && (n += " if (" + m + ") { ", c += "}"));
							return a && (n += _ ? " if (true) { " : " " + c.slice(0, -1) + " "), n = e.util.cleanUpCode(n)
						},
						anyOf: function(e, t, i) {
							var n = " ",
								s = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (o || ""),
								p = "valid" + s,
								_ = "errs__" + s,
								f = e.util.copy(e),
								h = "";
							f.level++;
							var l = "valid" + f.level;
							if (r.every((function(t) {
									return e.opts.strictKeywords ? "object" == typeof t && Object.keys(t).length > 0 : e.util.schemaHasRules(t, e.RULES.all)
								}))) {
								var u = f.baseId;
								n += " var " + _ + " = errors; var " + p + " = false;  ";
								var g = e.compositeRule;
								e.compositeRule = f.compositeRule = !0;
								var y = r;
								if (y)
									for (var v, b = -1, $ = y.length - 1; b < $;) v = y[b += 1], f.schema = v, f.schemaPath = a + "[" + b + "]", f.errSchemaPath = d + "/" + b, n += "  " + e.validate(f) + " ", f.baseId = u, n += " " + p + " = " + p + " || " + l + "; if (!" + p + ") { ", h += "}";
								e.compositeRule = f.compositeRule = g, n += " " + h + " if (!" + p + ") {   var err =   ", !1 !== e.createErrors ? (n += " { keyword: 'anyOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: {} ", !1 !== e.opts.messages && (n += " , message: 'should match some schema in anyOf' "), e.opts.verbose && (n += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ", n += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && c && (e.async ? n += " throw new ValidationError(vErrors); " : n += " validate.errors = vErrors; return false; "), n += " } else {  errors = " + _ + "; if (vErrors !== null) { if (" + _ + ") vErrors.length = " + _ + "; else vErrors = null; } ", e.opts.allErrors && (n += " } "), n = e.util.cleanUpCode(n)
							} else c && (n += " if (true) { ");
							return n
						},
						$comment: function(e, t, i) {
							var n = " ",
								s = e.schema[t],
								o = e.errSchemaPath + "/" + t,
								r = (e.opts.allErrors, e.util.toQuotedString(s));
							return !0 === e.opts.$comment ? n += " console.log(" + r + ");" : "function" == typeof e.opts.$comment && (n += " self._opts.$comment(" + r + ", " + e.util.toQuotedString(o) + ", validate.root.schema);"), n
						},
						const: function(e, t, i) {
							var n = " ",
								s = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (o || ""),
								p = "valid" + s,
								_ = e.opts.$data && r && r.$data;
							_ && (n += " var schema" + s + " = " + e.util.getData(r.$data, o, e.dataPathArr) + "; "), _ || (n += " var schema" + s + " = validate.schema" + a + ";"), n += "var " + p + " = equal(" + m + ", schema" + s + "); if (!" + p + ") {   ";
							var f = f || [];
							f.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: 'const' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { allowedValue: schema" + s + " } ", !1 !== e.opts.messages && (n += " , message: 'should be equal to constant' "), e.opts.verbose && (n += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ";
							var h = n;
							return n = f.pop(), !e.compositeRule && c ? e.async ? n += " throw new ValidationError([" + h + "]); " : n += " validate.errors = [" + h + "]; return false; " : n += " var err = " + h + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += " }", c && (n += " else { "), n
						},
						contains: function(e, t, i) {
							var n = " ",
								s = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (o || ""),
								p = "valid" + s,
								_ = "errs__" + s,
								f = e.util.copy(e);
							f.level++;
							var h = "valid" + f.level,
								l = "i" + s,
								u = f.dataLevel = e.dataLevel + 1,
								g = "data" + u,
								y = e.baseId,
								v = e.opts.strictKeywords ? "object" == typeof r && Object.keys(r).length > 0 : e.util.schemaHasRules(r, e.RULES.all);
							if (n += "var " + _ + " = errors;var " + p + ";", v) {
								var b = e.compositeRule;
								e.compositeRule = f.compositeRule = !0, f.schema = r, f.schemaPath = a, f.errSchemaPath = d, n += " var " + h + " = false; for (var " + l + " = 0; " + l + " < " + m + ".length; " + l + "++) { ", f.errorPath = e.util.getPathExpr(e.errorPath, l, e.opts.jsonPointers, !0);
								var $ = m + "[" + l + "]";
								f.dataPathArr[u] = l;
								var w = e.validate(f);
								f.baseId = y, e.util.varOccurences(w, g) < 2 ? n += " " + e.util.varReplace(w, g, $) + " " : n += " var " + g + " = " + $ + "; " + w + " ", n += " if (" + h + ") break; }  ", e.compositeRule = f.compositeRule = b, n += "  if (!" + h + ") {"
							} else n += " if (" + m + ".length == 0) {";
							var j = j || [];
							j.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: 'contains' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: {} ", !1 !== e.opts.messages && (n += " , message: 'should contain a valid item' "), e.opts.verbose && (n += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ";
							var k = n;
							return n = j.pop(), !e.compositeRule && c ? e.async ? n += " throw new ValidationError([" + k + "]); " : n += " validate.errors = [" + k + "]; return false; " : n += " var err = " + k + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += " } else { ", v && (n += "  errors = " + _ + "; if (vErrors !== null) { if (" + _ + ") vErrors.length = " + _ + "; else vErrors = null; } "), e.opts.allErrors && (n += " } "), n = e.util.cleanUpCode(n)
						},
						dependencies: function(e, t, i) {
							var n = " ",
								s = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (o || ""),
								p = "errs__" + s,
								_ = e.util.copy(e),
								f = "";
							_.level++;
							var h = "valid" + _.level,
								l = {},
								u = {},
								g = e.opts.ownProperties;
							for ($ in r) {
								var y = r[$],
									v = Array.isArray(y) ? u : l;
								v[$] = y
							}
							n += "var " + p + " = errors;";
							var b = e.errorPath;
							for (var $ in n += "var missing" + s + ";", u)
								if ((v = u[$]).length) {
									if (n += " if ( " + m + e.util.getProperty($) + " !== undefined ", g && (n += " && Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes($) + "') "), c) {
										n += " && ( ";
										var w = v;
										if (w)
											for (var j = -1, k = w.length - 1; j < k;) {
												A = w[j += 1], j && (n += " || "), n += " ( ( " + (F = m + (I = e.util.getProperty(A))) + " === undefined ", g && (n += " || ! Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(A) + "') "), n += ") && (missing" + s + " = " + e.util.toQuotedString(e.opts.jsonPointers ? A : I) + ") ) "
											}
										n += ")) {  ";
										var x = "missing" + s,
											P = "' + " + x + " + '";
										e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(b, x, !0) : b + " + " + x);
										var q = q || [];
										q.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { property: '" + e.util.escapeQuotes($) + "', missingProperty: '" + P + "', depsCount: " + v.length + ", deps: '" + e.util.escapeQuotes(1 == v.length ? v[0] : v.join(", ")) + "' } ", !1 !== e.opts.messages && (n += " , message: 'should have ", 1 == v.length ? n += "property " + e.util.escapeQuotes(v[0]) : n += "properties " + e.util.escapeQuotes(v.join(", ")), n += " when property " + e.util.escapeQuotes($) + " is present' "), e.opts.verbose && (n += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ";
										var T = n;
										n = q.pop(), !e.compositeRule && c ? e.async ? n += " throw new ValidationError([" + T + "]); " : n += " validate.errors = [" + T + "]; return false; " : n += " var err = " + T + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "
									} else {
										n += " ) { ";
										var E = v;
										if (E)
											for (var A, S = -1, D = E.length - 1; S < D;) {
												A = E[S += 1];
												var I = e.util.getProperty(A),
													F = (P = e.util.escapeQuotes(A), m + I);
												e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(b, A, e.opts.jsonPointers)), n += " if ( " + F + " === undefined ", g && (n += " || ! Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(A) + "') "), n += ") {  var err =   ", !1 !== e.createErrors ? (n += " { keyword: 'dependencies' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { property: '" + e.util.escapeQuotes($) + "', missingProperty: '" + P + "', depsCount: " + v.length + ", deps: '" + e.util.escapeQuotes(1 == v.length ? v[0] : v.join(", ")) + "' } ", !1 !== e.opts.messages && (n += " , message: 'should have ", 1 == v.length ? n += "property " + e.util.escapeQuotes(v[0]) : n += "properties " + e.util.escapeQuotes(v.join(", ")), n += " when property " + e.util.escapeQuotes($) + " is present' "), e.opts.verbose && (n += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ", n += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "
											}
									}
									n += " }   ", c && (f += "}", n += " else { ")
								} e.errorPath = b;
							var R = _.baseId;
							for (var $ in l) {
								y = l[$];
								(e.opts.strictKeywords ? "object" == typeof y && Object.keys(y).length > 0 : e.util.schemaHasRules(y, e.RULES.all)) && (n += " " + h + " = true; if ( " + m + e.util.getProperty($) + " !== undefined ", g && (n += " && Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes($) + "') "), n += ") { ", _.schema = y, _.schemaPath = a + e.util.getProperty($), _.errSchemaPath = d + "/" + e.util.escapeFragment($), n += "  " + e.validate(_) + " ", _.baseId = R, n += " }  ", c && (n += " if (" + h + ") { ", f += "}"))
							}
							return c && (n += "   " + f + " if (" + p + " == errors) {"), n = e.util.cleanUpCode(n)
						},
						enum: function(e, t, i) {
							var n = " ",
								s = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (o || ""),
								p = "valid" + s,
								_ = e.opts.$data && r && r.$data;
							_ && (n += " var schema" + s + " = " + e.util.getData(r.$data, o, e.dataPathArr) + "; ");
							var f = "i" + s,
								h = "schema" + s;
							_ || (n += " var " + h + " = validate.schema" + a + ";"), n += "var " + p + ";", _ && (n += " if (schema" + s + " === undefined) " + p + " = true; else if (!Array.isArray(schema" + s + ")) " + p + " = false; else {"), n += p + " = false;for (var " + f + "=0; " + f + "<" + h + ".length; " + f + "++) if (equal(" + m + ", " + h + "[" + f + "])) { " + p + " = true; break; }", _ && (n += "  }  "), n += " if (!" + p + ") {   ";
							var l = l || [];
							l.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: 'enum' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { allowedValues: schema" + s + " } ", !1 !== e.opts.messages && (n += " , message: 'should be equal to one of the allowed values' "), e.opts.verbose && (n += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ";
							var u = n;
							return n = l.pop(), !e.compositeRule && c ? e.async ? n += " throw new ValidationError([" + u + "]); " : n += " validate.errors = [" + u + "]; return false; " : n += " var err = " + u + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += " }", c && (n += " else { "), n
						},
						format: function(e, t, i) {
							var n = " ",
								s = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (o || "");
							if (!1 === e.opts.format) return c && (n += " if (true) { "), n;
							var p, _ = e.opts.$data && r && r.$data;
							_ ? (n += " var schema" + s + " = " + e.util.getData(r.$data, o, e.dataPathArr) + "; ", p = "schema" + s) : p = r;
							var f = e.opts.unknownFormats,
								h = Array.isArray(f);
							if (_) {
								n += " var " + (l = "format" + s) + " = formats[" + p + "]; var " + (u = "isObject" + s) + " = typeof " + l + " == 'object' && !(" + l + " instanceof RegExp) && " + l + ".validate; var " + (g = "formatType" + s) + " = " + u + " && " + l + ".type || 'string'; if (" + u + ") { ", e.async && (n += " var async" + s + " = " + l + ".async; "), n += " " + l + " = " + l + ".validate; } if (  ", _ && (n += " (" + p + " !== undefined && typeof " + p + " != 'string') || "), n += " (", "ignore" != f && (n += " (" + p + " && !" + l + " ", h && (n += " && self._opts.unknownFormats.indexOf(" + p + ") == -1 "), n += ") || "), n += " (" + l + " && " + g + " == '" + i + "' && !(typeof " + l + " == 'function' ? ", e.async ? n += " (async" + s + " ? await " + l + "(" + m + ") : " + l + "(" + m + ")) " : n += " " + l + "(" + m + ") ", n += " : " + l + ".test(" + m + "))))) {"
							} else {
								var l;
								if (!(l = e.formats[r])) {
									if ("ignore" == f) return e.logger.warn('unknown format "' + r + '" ignored in schema at path "' + e.errSchemaPath + '"'), c && (n += " if (true) { "), n;
									if (h && f.indexOf(r) >= 0) return c && (n += " if (true) { "), n;
									throw new Error('unknown format "' + r + '" is used in schema at path "' + e.errSchemaPath + '"')
								}
								var u, g = (u = "object" == typeof l && !(l instanceof RegExp) && l.validate) && l.type || "string";
								if (u) {
									var y = !0 === l.async;
									l = l.validate
								}
								if (g != i) return c && (n += " if (true) { "), n;
								if (y) {
									if (!e.async) throw new Error("async format in sync schema");
									n += " if (!(await " + (v = "formats" + e.util.getProperty(r) + ".validate") + "(" + m + "))) { "
								} else {
									n += " if (! ";
									var v = "formats" + e.util.getProperty(r);
									u && (v += ".validate"), n += "function" == typeof l ? " " + v + "(" + m + ") " : " " + v + ".test(" + m + ") ", n += ") { "
								}
							}
							var b = b || [];
							b.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: 'format' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { format:  ", n += _ ? "" + p : "" + e.util.toQuotedString(r), n += "  } ", !1 !== e.opts.messages && (n += " , message: 'should match format \"", n += _ ? "' + " + p + " + '" : "" + e.util.escapeQuotes(r), n += "\"' "), e.opts.verbose && (n += " , schema:  ", n += _ ? "validate.schema" + a : "" + e.util.toQuotedString(r), n += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ";
							var $ = n;
							return n = b.pop(), !e.compositeRule && c ? e.async ? n += " throw new ValidationError([" + $ + "]); " : n += " validate.errors = [" + $ + "]; return false; " : n += " var err = " + $ + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += " } ", c && (n += " else { "), n
						},
						if: function(e, t, i) {
							var n = " ",
								s = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (o || ""),
								p = "valid" + s,
								_ = "errs__" + s,
								f = e.util.copy(e);
							f.level++;
							var h = "valid" + f.level,
								l = e.schema.then,
								u = e.schema.else,
								g = void 0 !== l && (e.opts.strictKeywords ? "object" == typeof l && Object.keys(l).length > 0 : e.util.schemaHasRules(l, e.RULES.all)),
								y = void 0 !== u && (e.opts.strictKeywords ? "object" == typeof u && Object.keys(u).length > 0 : e.util.schemaHasRules(u, e.RULES.all)),
								v = f.baseId;
							if (g || y) {
								var b;
								f.createErrors = !1, f.schema = r, f.schemaPath = a, f.errSchemaPath = d, n += " var " + _ + " = errors; var " + p + " = true;  ";
								var $ = e.compositeRule;
								e.compositeRule = f.compositeRule = !0, n += "  " + e.validate(f) + " ", f.baseId = v, f.createErrors = !0, n += "  errors = " + _ + "; if (vErrors !== null) { if (" + _ + ") vErrors.length = " + _ + "; else vErrors = null; }  ", e.compositeRule = f.compositeRule = $, g ? (n += " if (" + h + ") {  ", f.schema = e.schema.then, f.schemaPath = e.schemaPath + ".then", f.errSchemaPath = e.errSchemaPath + "/then", n += "  " + e.validate(f) + " ", f.baseId = v, n += " " + p + " = " + h + "; ", g && y ? n += " var " + (b = "ifClause" + s) + " = 'then'; " : b = "'then'", n += " } ", y && (n += " else { ")) : n += " if (!" + h + ") { ", y && (f.schema = e.schema.else, f.schemaPath = e.schemaPath + ".else", f.errSchemaPath = e.errSchemaPath + "/else", n += "  " + e.validate(f) + " ", f.baseId = v, n += " " + p + " = " + h + "; ", g && y ? n += " var " + (b = "ifClause" + s) + " = 'else'; " : b = "'else'", n += " } "), n += " if (!" + p + ") {   var err =   ", !1 !== e.createErrors ? (n += " { keyword: 'if' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { failingKeyword: " + b + " } ", !1 !== e.opts.messages && (n += " , message: 'should match \"' + " + b + " + '\" schema' "), e.opts.verbose && (n += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ", n += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && c && (e.async ? n += " throw new ValidationError(vErrors); " : n += " validate.errors = vErrors; return false; "), n += " }   ", c && (n += " else { "), n = e.util.cleanUpCode(n)
							} else c && (n += " if (true) { ");
							return n
						},
						items: function(e, t, i) {
							var n = " ",
								s = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (o || ""),
								p = "valid" + s,
								_ = "errs__" + s,
								f = e.util.copy(e),
								h = "";
							f.level++;
							var l = "valid" + f.level,
								u = "i" + s,
								g = f.dataLevel = e.dataLevel + 1,
								y = "data" + g,
								v = e.baseId;
							if (n += "var " + _ + " = errors;var " + p + ";", Array.isArray(r)) {
								var b = e.schema.additionalItems;
								if (!1 === b) {
									n += " " + p + " = " + m + ".length <= " + r.length + "; ";
									var $ = d;
									d = e.errSchemaPath + "/additionalItems", n += "  if (!" + p + ") {   ";
									var w = w || [];
									w.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: 'additionalItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { limit: " + r.length + " } ", !1 !== e.opts.messages && (n += " , message: 'should NOT have more than " + r.length + " items' "), e.opts.verbose && (n += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ";
									var j = n;
									n = w.pop(), !e.compositeRule && c ? e.async ? n += " throw new ValidationError([" + j + "]); " : n += " validate.errors = [" + j + "]; return false; " : n += " var err = " + j + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += " } ", d = $, c && (h += "}", n += " else { ")
								}
								var k = r;
								if (k)
									for (var x, P = -1, q = k.length - 1; P < q;)
										if (x = k[P += 1], e.opts.strictKeywords ? "object" == typeof x && Object.keys(x).length > 0 : e.util.schemaHasRules(x, e.RULES.all)) {
											n += " " + l + " = true; if (" + m + ".length > " + P + ") { ";
											var T = m + "[" + P + "]";
											f.schema = x, f.schemaPath = a + "[" + P + "]", f.errSchemaPath = d + "/" + P, f.errorPath = e.util.getPathExpr(e.errorPath, P, e.opts.jsonPointers, !0), f.dataPathArr[g] = P;
											var E = e.validate(f);
											f.baseId = v, e.util.varOccurences(E, y) < 2 ? n += " " + e.util.varReplace(E, y, T) + " " : n += " var " + y + " = " + T + "; " + E + " ", n += " }  ", c && (n += " if (" + l + ") { ", h += "}")
										} if ("object" == typeof b && (e.opts.strictKeywords ? "object" == typeof b && Object.keys(b).length > 0 : e.util.schemaHasRules(b, e.RULES.all))) {
									f.schema = b, f.schemaPath = e.schemaPath + ".additionalItems", f.errSchemaPath = e.errSchemaPath + "/additionalItems", n += " " + l + " = true; if (" + m + ".length > " + r.length + ") {  for (var " + u + " = " + r.length + "; " + u + " < " + m + ".length; " + u + "++) { ", f.errorPath = e.util.getPathExpr(e.errorPath, u, e.opts.jsonPointers, !0);
									T = m + "[" + u + "]";
									f.dataPathArr[g] = u;
									E = e.validate(f);
									f.baseId = v, e.util.varOccurences(E, y) < 2 ? n += " " + e.util.varReplace(E, y, T) + " " : n += " var " + y + " = " + T + "; " + E + " ", c && (n += " if (!" + l + ") break; "), n += " } }  ", c && (n += " if (" + l + ") { ", h += "}")
								}
							} else if (e.opts.strictKeywords ? "object" == typeof r && Object.keys(r).length > 0 : e.util.schemaHasRules(r, e.RULES.all)) {
								f.schema = r, f.schemaPath = a, f.errSchemaPath = d, n += "  for (var " + u + " = 0; " + u + " < " + m + ".length; " + u + "++) { ", f.errorPath = e.util.getPathExpr(e.errorPath, u, e.opts.jsonPointers, !0);
								T = m + "[" + u + "]";
								f.dataPathArr[g] = u;
								E = e.validate(f);
								f.baseId = v, e.util.varOccurences(E, y) < 2 ? n += " " + e.util.varReplace(E, y, T) + " " : n += " var " + y + " = " + T + "; " + E + " ", c && (n += " if (!" + l + ") break; "), n += " }"
							}
							return c && (n += " " + h + " if (" + _ + " == errors) {"), n = e.util.cleanUpCode(n)
						},
						maximum: Se,
						minimum: Se,
						maxItems: De,
						minItems: De,
						maxLength: Ie,
						minLength: Ie,
						maxProperties: Fe,
						minProperties: Fe,
						multipleOf: function(e, t, i) {
							var n, s = " ",
								o = e.level,
								r = e.dataLevel,
								a = e.schema[t],
								d = e.schemaPath + e.util.getProperty(t),
								c = e.errSchemaPath + "/" + t,
								m = !e.opts.allErrors,
								p = "data" + (r || ""),
								_ = e.opts.$data && a && a.$data;
							_ ? (s += " var schema" + o + " = " + e.util.getData(a.$data, r, e.dataPathArr) + "; ", n = "schema" + o) : n = a, s += "var division" + o + ";if (", _ && (s += " " + n + " !== undefined && ( typeof " + n + " != 'number' || "), s += " (division" + o + " = " + p + " / " + n + ", ", e.opts.multipleOfPrecision ? s += " Math.abs(Math.round(division" + o + ") - division" + o + ") > 1e-" + e.opts.multipleOfPrecision + " " : s += " division" + o + " !== parseInt(division" + o + ") ", s += " ) ", _ && (s += "  )  "), s += " ) {   ";
							var f = f || [];
							f.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'multipleOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { multipleOf: " + n + " } ", !1 !== e.opts.messages && (s += " , message: 'should be multiple of ", s += _ ? "' + " + n : n + "'"), e.opts.verbose && (s += " , schema:  ", s += _ ? "validate.schema" + d : "" + a, s += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ";
							var h = s;
							return s = f.pop(), !e.compositeRule && m ? e.async ? s += " throw new ValidationError([" + h + "]); " : s += " validate.errors = [" + h + "]; return false; " : s += " var err = " + h + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += "} ", m && (s += " else { "), s
						},
						not: function(e, t, i) {
							var n = " ",
								s = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (o || ""),
								p = "errs__" + s,
								_ = e.util.copy(e);
							_.level++;
							var f = "valid" + _.level;
							if (e.opts.strictKeywords ? "object" == typeof r && Object.keys(r).length > 0 : e.util.schemaHasRules(r, e.RULES.all)) {
								_.schema = r, _.schemaPath = a, _.errSchemaPath = d, n += " var " + p + " = errors;  ";
								var h, l = e.compositeRule;
								e.compositeRule = _.compositeRule = !0, _.createErrors = !1, _.opts.allErrors && (h = _.opts.allErrors, _.opts.allErrors = !1), n += " " + e.validate(_) + " ", _.createErrors = !0, h && (_.opts.allErrors = h), e.compositeRule = _.compositeRule = l, n += " if (" + f + ") {   ";
								var u = u || [];
								u.push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: {} ", !1 !== e.opts.messages && (n += " , message: 'should NOT be valid' "), e.opts.verbose && (n += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ";
								var g = n;
								n = u.pop(), !e.compositeRule && c ? e.async ? n += " throw new ValidationError([" + g + "]); " : n += " validate.errors = [" + g + "]; return false; " : n += " var err = " + g + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += " } else {  errors = " + p + "; if (vErrors !== null) { if (" + p + ") vErrors.length = " + p + "; else vErrors = null; } ", e.opts.allErrors && (n += " } ")
							} else n += "  var err =   ", !1 !== e.createErrors ? (n += " { keyword: 'not' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: {} ", !1 !== e.opts.messages && (n += " , message: 'should NOT be valid' "), e.opts.verbose && (n += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ", n += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", c && (n += " if (false) { ");
							return n
						},
						oneOf: function(e, t, i) {
							var n = " ",
								s = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (o || ""),
								p = "valid" + s,
								_ = "errs__" + s,
								f = e.util.copy(e),
								h = "";
							f.level++;
							var l = "valid" + f.level,
								u = f.baseId,
								g = "prevValid" + s,
								y = "passingSchemas" + s;
							n += "var " + _ + " = errors , " + g + " = false , " + p + " = false , " + y + " = null; ";
							var v = e.compositeRule;
							e.compositeRule = f.compositeRule = !0;
							var b = r;
							if (b)
								for (var $, w = -1, j = b.length - 1; w < j;) $ = b[w += 1], (e.opts.strictKeywords ? "object" == typeof $ && Object.keys($).length > 0 : e.util.schemaHasRules($, e.RULES.all)) ? (f.schema = $, f.schemaPath = a + "[" + w + "]", f.errSchemaPath = d + "/" + w, n += "  " + e.validate(f) + " ", f.baseId = u) : n += " var " + l + " = true; ", w && (n += " if (" + l + " && " + g + ") { " + p + " = false; " + y + " = [" + y + ", " + w + "]; } else { ", h += "}"), n += " if (" + l + ") { " + p + " = " + g + " = true; " + y + " = " + w + "; }";
							return e.compositeRule = f.compositeRule = v, n += h + "if (!" + p + ") {   var err =   ", !1 !== e.createErrors ? (n += " { keyword: 'oneOf' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { passingSchemas: " + y + " } ", !1 !== e.opts.messages && (n += " , message: 'should match exactly one schema in oneOf' "), e.opts.verbose && (n += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ", n += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && c && (e.async ? n += " throw new ValidationError(vErrors); " : n += " validate.errors = vErrors; return false; "), n += "} else {  errors = " + _ + "; if (vErrors !== null) { if (" + _ + ") vErrors.length = " + _ + "; else vErrors = null; }", e.opts.allErrors && (n += " } "), n
						},
						pattern: function(e, t, i) {
							var n, s = " ",
								o = e.level,
								r = e.dataLevel,
								a = e.schema[t],
								d = e.schemaPath + e.util.getProperty(t),
								c = e.errSchemaPath + "/" + t,
								m = !e.opts.allErrors,
								p = "data" + (r || ""),
								_ = e.opts.$data && a && a.$data;
							_ ? (s += " var schema" + o + " = " + e.util.getData(a.$data, r, e.dataPathArr) + "; ", n = "schema" + o) : n = a, s += "if ( ", _ && (s += " (" + n + " !== undefined && typeof " + n + " != 'string') || "), s += " !" + (_ ? "(new RegExp(" + n + "))" : e.usePattern(a)) + ".test(" + p + ") ) {   ";
							var f = f || [];
							f.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'pattern' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { pattern:  ", s += _ ? "" + n : "" + e.util.toQuotedString(a), s += "  } ", !1 !== e.opts.messages && (s += " , message: 'should match pattern \"", s += _ ? "' + " + n + " + '" : "" + e.util.escapeQuotes(a), s += "\"' "), e.opts.verbose && (s += " , schema:  ", s += _ ? "validate.schema" + d : "" + e.util.toQuotedString(a), s += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ";
							var h = s;
							return s = f.pop(), !e.compositeRule && m ? e.async ? s += " throw new ValidationError([" + h + "]); " : s += " validate.errors = [" + h + "]; return false; " : s += " var err = " + h + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += "} ", m && (s += " else { "), s
						},
						properties: function(e, t, i) {
							var n = " ",
								s = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (o || ""),
								p = "errs__" + s,
								_ = e.util.copy(e),
								f = "";
							_.level++;
							var h = "valid" + _.level,
								l = "key" + s,
								u = "idx" + s,
								g = _.dataLevel = e.dataLevel + 1,
								y = "data" + g,
								v = "dataProperties" + s,
								b = Object.keys(r || {}),
								$ = e.schema.patternProperties || {},
								w = Object.keys($),
								j = e.schema.additionalProperties,
								k = b.length || w.length,
								x = !1 === j,
								P = "object" == typeof j && Object.keys(j).length,
								q = e.opts.removeAdditional,
								T = x || P || q,
								E = e.opts.ownProperties,
								A = e.baseId,
								S = e.schema.required;
							if (S && (!e.opts.$data || !S.$data) && S.length < e.opts.loopRequired) var D = e.util.toHash(S);
							if (n += "var " + p + " = errors;var " + h + " = true;", E && (n += " var " + v + " = undefined;"), T) {
								if (n += E ? " " + v + " = " + v + " || Object.keys(" + m + "); for (var " + u + "=0; " + u + "<" + v + ".length; " + u + "++) { var " + l + " = " + v + "[" + u + "]; " : " for (var " + l + " in " + m + ") { ", k) {
									if (n += " var isAdditional" + s + " = !(false ", b.length)
										if (b.length > 8) n += " || validate.schema" + a + ".hasOwnProperty(" + l + ") ";
										else {
											var I = b;
											if (I)
												for (var F = -1, R = I.length - 1; F < R;) J = I[F += 1], n += " || " + l + " == " + e.util.toQuotedString(J) + " "
										} if (w.length) {
										var z = w;
										if (z)
											for (var O = -1, C = z.length - 1; O < C;) se = z[O += 1], n += " || " + e.usePattern(se) + ".test(" + l + ") "
									}
									n += " ); if (isAdditional" + s + ") { "
								}
								if ("all" == q) n += " delete " + m + "[" + l + "]; ";
								else {
									var U = e.errorPath,
										L = "' + " + l + " + '";
									if (e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(e.errorPath, l, e.opts.jsonPointers)), x)
										if (q) n += " delete " + m + "[" + l + "]; ";
										else {
											n += " " + h + " = false; ";
											var N = d;
											d = e.errSchemaPath + "/additionalProperties", (te = te || []).push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: 'additionalProperties' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { additionalProperty: '" + L + "' } ", !1 !== e.opts.messages && (n += " , message: '", e.opts._errorDataPathProperty ? n += "is an invalid additional property" : n += "should NOT have additional properties", n += "' "), e.opts.verbose && (n += " , schema: false , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ";
											var M = n;
											n = te.pop(), !e.compositeRule && c ? e.async ? n += " throw new ValidationError([" + M + "]); " : n += " validate.errors = [" + M + "]; return false; " : n += " var err = " + M + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", d = N, c && (n += " break; ")
										}
									else if (P)
										if ("failing" == q) {
											n += " var " + p + " = errors;  ";
											var H = e.compositeRule;
											e.compositeRule = _.compositeRule = !0, _.schema = j, _.schemaPath = e.schemaPath + ".additionalProperties", _.errSchemaPath = e.errSchemaPath + "/additionalProperties", _.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, l, e.opts.jsonPointers);
											var W = m + "[" + l + "]";
											_.dataPathArr[g] = l;
											var B = e.validate(_);
											_.baseId = A, e.util.varOccurences(B, y) < 2 ? n += " " + e.util.varReplace(B, y, W) + " " : n += " var " + y + " = " + W + "; " + B + " ", n += " if (!" + h + ") { errors = " + p + "; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete " + m + "[" + l + "]; }  ", e.compositeRule = _.compositeRule = H
										} else {
											_.schema = j, _.schemaPath = e.schemaPath + ".additionalProperties", _.errSchemaPath = e.errSchemaPath + "/additionalProperties", _.errorPath = e.opts._errorDataPathProperty ? e.errorPath : e.util.getPathExpr(e.errorPath, l, e.opts.jsonPointers);
											W = m + "[" + l + "]";
											_.dataPathArr[g] = l;
											B = e.validate(_);
											_.baseId = A, e.util.varOccurences(B, y) < 2 ? n += " " + e.util.varReplace(B, y, W) + " " : n += " var " + y + " = " + W + "; " + B + " ", c && (n += " if (!" + h + ") break; ")
										} e.errorPath = U
								}
								k && (n += " } "), n += " }  ", c && (n += " if (" + h + ") { ", f += "}")
							}
							var V = e.opts.useDefaults && !e.compositeRule;
							if (b.length) {
								var Q = b;
								if (Q)
									for (var J, G = -1, Z = Q.length - 1; G < Z;) {
										var K = r[J = Q[G += 1]];
										if (e.opts.strictKeywords ? "object" == typeof K && Object.keys(K).length > 0 : e.util.schemaHasRules(K, e.RULES.all)) {
											var Y = e.util.getProperty(J),
												X = (W = m + Y, V && void 0 !== K.default);
											_.schema = K, _.schemaPath = a + Y, _.errSchemaPath = d + "/" + e.util.escapeFragment(J), _.errorPath = e.util.getPath(e.errorPath, J, e.opts.jsonPointers), _.dataPathArr[g] = e.util.toQuotedString(J);
											B = e.validate(_);
											if (_.baseId = A, e.util.varOccurences(B, y) < 2) {
												B = e.util.varReplace(B, y, W);
												var ee = W
											} else {
												ee = y;
												n += " var " + y + " = " + W + "; "
											}
											if (X) n += " " + B + " ";
											else {
												if (D && D[J]) {
													n += " if ( " + ee + " === undefined ", E && (n += " || ! Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(J) + "') "), n += ") { " + h + " = false; ";
													U = e.errorPath, N = d;
													var te, ie = e.util.escapeQuotes(J);
													e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(U, J, e.opts.jsonPointers)), d = e.errSchemaPath + "/required", (te = te || []).push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { missingProperty: '" + ie + "' } ", !1 !== e.opts.messages && (n += " , message: '", e.opts._errorDataPathProperty ? n += "is a required property" : n += "should have required property \\'" + ie + "\\'", n += "' "), e.opts.verbose && (n += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ";
													M = n;
													n = te.pop(), !e.compositeRule && c ? e.async ? n += " throw new ValidationError([" + M + "]); " : n += " validate.errors = [" + M + "]; return false; " : n += " var err = " + M + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", d = N, e.errorPath = U, n += " } else { "
												} else c ? (n += " if ( " + ee + " === undefined ", E && (n += " || ! Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(J) + "') "), n += ") { " + h + " = true; } else { ") : (n += " if (" + ee + " !== undefined ", E && (n += " &&   Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(J) + "') "), n += " ) { ");
												n += " " + B + " } "
											}
										}
										c && (n += " if (" + h + ") { ", f += "}")
									}
							}
							if (w.length) {
								var ne = w;
								if (ne)
									for (var se, oe = -1, re = ne.length - 1; oe < re;) {
										K = $[se = ne[oe += 1]];
										if (e.opts.strictKeywords ? "object" == typeof K && Object.keys(K).length > 0 : e.util.schemaHasRules(K, e.RULES.all)) {
											_.schema = K, _.schemaPath = e.schemaPath + ".patternProperties" + e.util.getProperty(se), _.errSchemaPath = e.errSchemaPath + "/patternProperties/" + e.util.escapeFragment(se), n += E ? " " + v + " = " + v + " || Object.keys(" + m + "); for (var " + u + "=0; " + u + "<" + v + ".length; " + u + "++) { var " + l + " = " + v + "[" + u + "]; " : " for (var " + l + " in " + m + ") { ", n += " if (" + e.usePattern(se) + ".test(" + l + ")) { ", _.errorPath = e.util.getPathExpr(e.errorPath, l, e.opts.jsonPointers);
											W = m + "[" + l + "]";
											_.dataPathArr[g] = l;
											B = e.validate(_);
											_.baseId = A, e.util.varOccurences(B, y) < 2 ? n += " " + e.util.varReplace(B, y, W) + " " : n += " var " + y + " = " + W + "; " + B + " ", c && (n += " if (!" + h + ") break; "), n += " } ", c && (n += " else " + h + " = true; "), n += " }  ", c && (n += " if (" + h + ") { ", f += "}")
										}
									}
							}
							return c && (n += " " + f + " if (" + p + " == errors) {"), n = e.util.cleanUpCode(n)
						},
						propertyNames: function(e, t, i) {
							var n = " ",
								s = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (o || ""),
								p = "errs__" + s,
								_ = e.util.copy(e);
							_.level++;
							var f = "valid" + _.level;
							if (n += "var " + p + " = errors;", e.opts.strictKeywords ? "object" == typeof r && Object.keys(r).length > 0 : e.util.schemaHasRules(r, e.RULES.all)) {
								_.schema = r, _.schemaPath = a, _.errSchemaPath = d;
								var h = "key" + s,
									l = "idx" + s,
									u = "i" + s,
									g = "' + " + h + " + '",
									y = "data" + (_.dataLevel = e.dataLevel + 1),
									v = "dataProperties" + s,
									b = e.opts.ownProperties,
									$ = e.baseId;
								b && (n += " var " + v + " = undefined; "), n += b ? " " + v + " = " + v + " || Object.keys(" + m + "); for (var " + l + "=0; " + l + "<" + v + ".length; " + l + "++) { var " + h + " = " + v + "[" + l + "]; " : " for (var " + h + " in " + m + ") { ", n += " var startErrs" + s + " = errors; ";
								var w = h,
									j = e.compositeRule;
								e.compositeRule = _.compositeRule = !0;
								var k = e.validate(_);
								_.baseId = $, e.util.varOccurences(k, y) < 2 ? n += " " + e.util.varReplace(k, y, w) + " " : n += " var " + y + " = " + w + "; " + k + " ", e.compositeRule = _.compositeRule = j, n += " if (!" + f + ") { for (var " + u + "=startErrs" + s + "; " + u + "<errors; " + u + "++) { vErrors[" + u + "].propertyName = " + h + "; }   var err =   ", !1 !== e.createErrors ? (n += " { keyword: 'propertyNames' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { propertyName: '" + g + "' } ", !1 !== e.opts.messages && (n += " , message: 'property name \\'" + g + "\\' is invalid' "), e.opts.verbose && (n += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ", n += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && c && (e.async ? n += " throw new ValidationError(vErrors); " : n += " validate.errors = vErrors; return false; "), c && (n += " break; "), n += " } }"
							}
							return c && (n += "  if (" + p + " == errors) {"), n = e.util.cleanUpCode(n)
						},
						required: function(e, t, i) {
							var n = " ",
								s = e.level,
								o = e.dataLevel,
								r = e.schema[t],
								a = e.schemaPath + e.util.getProperty(t),
								d = e.errSchemaPath + "/" + t,
								c = !e.opts.allErrors,
								m = "data" + (o || ""),
								p = "valid" + s,
								_ = e.opts.$data && r && r.$data;
							_ && (n += " var schema" + s + " = " + e.util.getData(r.$data, o, e.dataPathArr) + "; ");
							var f = "schema" + s;
							if (!_)
								if (r.length < e.opts.loopRequired && e.schema.properties && Object.keys(e.schema.properties).length) {
									var h = [],
										l = r;
									if (l)
										for (var u, g = -1, y = l.length - 1; g < y;) {
											u = l[g += 1];
											var v = e.schema.properties[u];
											v && (e.opts.strictKeywords ? "object" == typeof v && Object.keys(v).length > 0 : e.util.schemaHasRules(v, e.RULES.all)) || (h[h.length] = u)
										}
								} else h = r;
							if (_ || h.length) {
								var b = e.errorPath,
									$ = _ || h.length >= e.opts.loopRequired,
									w = e.opts.ownProperties;
								if (c)
									if (n += " var missing" + s + "; ", $) {
										_ || (n += " var " + f + " = validate.schema" + a + "; ");
										var j = "' + " + (E = "schema" + s + "[" + (P = "i" + s) + "]") + " + '";
										e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(b, E, e.opts.jsonPointers)), n += " var " + p + " = true; ", _ && (n += " if (schema" + s + " === undefined) " + p + " = true; else if (!Array.isArray(schema" + s + ")) " + p + " = false; else {"), n += " for (var " + P + " = 0; " + P + " < " + f + ".length; " + P + "++) { " + p + " = " + m + "[" + f + "[" + P + "]] !== undefined ", w && (n += " &&   Object.prototype.hasOwnProperty.call(" + m + ", " + f + "[" + P + "]) "), n += "; if (!" + p + ") break; } ", _ && (n += "  }  "), n += "  if (!" + p + ") {   ", (T = T || []).push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { missingProperty: '" + j + "' } ", !1 !== e.opts.messages && (n += " , message: '", e.opts._errorDataPathProperty ? n += "is a required property" : n += "should have required property \\'" + j + "\\'", n += "' "), e.opts.verbose && (n += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ";
										var k = n;
										n = T.pop(), !e.compositeRule && c ? e.async ? n += " throw new ValidationError([" + k + "]); " : n += " validate.errors = [" + k + "]; return false; " : n += " var err = " + k + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += " } else { "
									} else {
										n += " if ( ";
										var x = h;
										if (x)
											for (var P = -1, q = x.length - 1; P < q;) {
												S = x[P += 1], P && (n += " || "), n += " ( ( " + (R = m + (F = e.util.getProperty(S))) + " === undefined ", w && (n += " || ! Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(S) + "') "), n += ") && (missing" + s + " = " + e.util.toQuotedString(e.opts.jsonPointers ? S : F) + ") ) "
											}
										n += ") {  ";
										var T;
										j = "' + " + (E = "missing" + s) + " + '";
										e.opts._errorDataPathProperty && (e.errorPath = e.opts.jsonPointers ? e.util.getPathExpr(b, E, !0) : b + " + " + E), (T = T || []).push(n), n = "", !1 !== e.createErrors ? (n += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { missingProperty: '" + j + "' } ", !1 !== e.opts.messages && (n += " , message: '", e.opts._errorDataPathProperty ? n += "is a required property" : n += "should have required property \\'" + j + "\\'", n += "' "), e.opts.verbose && (n += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ";
										k = n;
										n = T.pop(), !e.compositeRule && c ? e.async ? n += " throw new ValidationError([" + k + "]); " : n += " validate.errors = [" + k + "]; return false; " : n += " var err = " + k + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", n += " } else { "
									}
								else if ($) {
									_ || (n += " var " + f + " = validate.schema" + a + "; ");
									var E;
									j = "' + " + (E = "schema" + s + "[" + (P = "i" + s) + "]") + " + '";
									e.opts._errorDataPathProperty && (e.errorPath = e.util.getPathExpr(b, E, e.opts.jsonPointers)), _ && (n += " if (" + f + " && !Array.isArray(" + f + ")) {  var err =   ", !1 !== e.createErrors ? (n += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { missingProperty: '" + j + "' } ", !1 !== e.opts.messages && (n += " , message: '", e.opts._errorDataPathProperty ? n += "is a required property" : n += "should have required property \\'" + j + "\\'", n += "' "), e.opts.verbose && (n += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ", n += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (" + f + " !== undefined) { "), n += " for (var " + P + " = 0; " + P + " < " + f + ".length; " + P + "++) { if (" + m + "[" + f + "[" + P + "]] === undefined ", w && (n += " || ! Object.prototype.hasOwnProperty.call(" + m + ", " + f + "[" + P + "]) "), n += ") {  var err =   ", !1 !== e.createErrors ? (n += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { missingProperty: '" + j + "' } ", !1 !== e.opts.messages && (n += " , message: '", e.opts._errorDataPathProperty ? n += "is a required property" : n += "should have required property \\'" + j + "\\'", n += "' "), e.opts.verbose && (n += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ", n += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ", _ && (n += "  }  ")
								} else {
									var A = h;
									if (A)
										for (var S, D = -1, I = A.length - 1; D < I;) {
											S = A[D += 1];
											var F = e.util.getProperty(S),
												R = (j = e.util.escapeQuotes(S), m + F);
											e.opts._errorDataPathProperty && (e.errorPath = e.util.getPath(b, S, e.opts.jsonPointers)), n += " if ( " + R + " === undefined ", w && (n += " || ! Object.prototype.hasOwnProperty.call(" + m + ", '" + e.util.escapeQuotes(S) + "') "), n += ") {  var err =   ", !1 !== e.createErrors ? (n += " { keyword: 'required' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(d) + " , params: { missingProperty: '" + j + "' } ", !1 !== e.opts.messages && (n += " , message: '", e.opts._errorDataPathProperty ? n += "is a required property" : n += "should have required property \\'" + j + "\\'", n += "' "), e.opts.verbose && (n += " , schema: validate.schema" + a + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + m + " "), n += " } ") : n += " {} ", n += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "
										}
								}
								e.errorPath = b
							} else c && (n += " if (true) {");
							return n
						},
						uniqueItems: function(e, t, i) {
							var n, s = " ",
								o = e.level,
								r = e.dataLevel,
								a = e.schema[t],
								d = e.schemaPath + e.util.getProperty(t),
								c = e.errSchemaPath + "/" + t,
								m = !e.opts.allErrors,
								p = "data" + (r || ""),
								_ = "valid" + o,
								f = e.opts.$data && a && a.$data;
							if (f ? (s += " var schema" + o + " = " + e.util.getData(a.$data, r, e.dataPathArr) + "; ", n = "schema" + o) : n = a, (a || f) && !1 !== e.opts.uniqueItems) {
								f && (s += " var " + _ + "; if (" + n + " === false || " + n + " === undefined) " + _ + " = true; else if (typeof " + n + " != 'boolean') " + _ + " = false; else { "), s += " var i = " + p + ".length , " + _ + " = true , j; if (i > 1) { ";
								var h = e.schema.items && e.schema.items.type,
									l = Array.isArray(h);
								if (!h || "object" == h || "array" == h || l && (h.indexOf("object") >= 0 || h.indexOf("array") >= 0)) s += " outer: for (;i--;) { for (j = i; j--;) { if (equal(" + p + "[i], " + p + "[j])) { " + _ + " = false; break outer; } } } ";
								else {
									s += " var itemIndices = {}, item; for (;i--;) { var item = " + p + "[i]; ";
									var u = "checkDataType" + (l ? "s" : "");
									s += " if (" + e.util[u](h, "item", !0) + ") continue; ", l && (s += " if (typeof item == 'string') item = '\"' + item; "), s += " if (typeof itemIndices[item] == 'number') { " + _ + " = false; j = itemIndices[item]; break; } itemIndices[item] = i; } "
								}
								s += " } ", f && (s += "  }  "), s += " if (!" + _ + ") {   ";
								var g = g || [];
								g.push(s), s = "", !1 !== e.createErrors ? (s += " { keyword: 'uniqueItems' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(c) + " , params: { i: i, j: j } ", !1 !== e.opts.messages && (s += " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "), e.opts.verbose && (s += " , schema:  ", s += f ? "validate.schema" + d : "" + a, s += "         , parentSchema: validate.schema" + e.schemaPath + " , data: " + p + " "), s += " } ") : s += " {} ";
								var y = s;
								s = g.pop(), !e.compositeRule && m ? e.async ? s += " throw new ValidationError([" + y + "]); " : s += " validate.errors = [" + y + "]; return false; " : s += " var err = " + y + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", s += " } ", m && (s += " else { ")
							} else m && (s += " if (true) { ");
							return s
						},
						validate: X
					},
					ze = d.toHash,
					Oe = function() {
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
						return e.all = ze(t), e.types = ze(["number", "integer", "string", "array", "object", "boolean", "null"]), e.forEach((function(i) {
							i.rules = i.rules.map((function(i) {
								var n;
								if ("object" == typeof i) {
									var s = Object.keys(i)[0];
									n = i[s], i = s, n.forEach((function(i) {
										t.push(i), e.all[i] = !0
									}))
								}
								return t.push(i), e.all[i] = {
									keyword: i,
									code: Re[i],
									implements: n
								}
							})), e.all.$comment = {
								keyword: "$comment",
								code: Re.$comment
							}, i.type && (e.types[i.type] = i)
						})), e.keywords = ze(t.concat(["$schema", "$id", "id", "$data", "$async", "title", "description", "default", "definitions", "examples", "readOnly", "writeOnly", "contentMediaType", "contentEncoding", "additionalItems", "then", "else"])), e.custom = {}, e
					},
					Ce = ["multipleOf", "maximum", "exclusiveMaximum", "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern", "additionalItems", "maxItems", "minItems", "uniqueItems", "maxProperties", "minProperties", "required", "additionalProperties", "enum", "format", "const"],
					Ue = function(e, t) {
						for (var i = 0; i < t.length; i++) {
							e = JSON.parse(JSON.stringify(e));
							var n, s = t[i].split("/"),
								o = e;
							for (n = 1; n < s.length; n++) o = o[s[n]];
							for (n = 0; n < Ce.length; n++) {
								var r = Ce[n],
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
					Le = G.MissingRef,
					Ne = function e(t, i, n) {
						var s = this;
						if ("function" != typeof this._opts.loadSchema) throw new Error("options.loadSchema should be a function");
						"function" == typeof i && (n = i, i = void 0);
						var o = r(t).then((function() {
							var e = s._addSchema(t, void 0, i);
							return e.validate || function e(t) {
								try {
									return s._compile(t)
								} catch (n) {
									if (n instanceof Le) return function(n) {
										var o = n.missingSchema;
										if (c(o)) throw new Error("Schema " + o + " is loaded but " + n.missingRef + " cannot be resolved");
										var a = s._loadingSchemas[o];
										a || (a = s._loadingSchemas[o] = s._opts.loadSchema(o)).then(d, d);
										return a.then((function(e) {
											if (!c(o)) return r(e).then((function() {
												c(o) || s.addSchema(e, o, void 0, i)
											}))
										})).then((function() {
											return e(t)
										}));

										function d() {
											delete s._loadingSchemas[o]
										}

										function c(e) {
											return s._refs[e] || s._schemas[e]
										}
									}(n);
									throw n
								}
							}(e)
						}));
						n && o.then((function(e) {
							n(null, e)
						}), n);
						return o;

						function r(t) {
							var i = t.$schema;
							return i && !s.getSchema(i) ? e.call(s, {
								$ref: i
							}, !0) : Promise.resolve()
						}
					};
				var Me = function(e, t, i) {
						var n, s, o = " ",
							r = e.level,
							a = e.dataLevel,
							d = e.schema[t],
							c = e.schemaPath + e.util.getProperty(t),
							m = e.errSchemaPath + "/" + t,
							p = !e.opts.allErrors,
							_ = "data" + (a || ""),
							f = "valid" + r,
							h = "errs__" + r,
							l = e.opts.$data && d && d.$data;
						l ? (o += " var schema" + r + " = " + e.util.getData(d.$data, a, e.dataPathArr) + "; ", s = "schema" + r) : s = d;
						var u, g, y, v, b, $ = "definition" + r,
							w = this.definition,
							j = "";
						if (l && w.$data) {
							b = "keywordValidate" + r;
							var k = w.validateSchema;
							o += " var " + $ + " = RULES.custom['" + t + "'].definition; var " + b + " = " + $ + ".validate;"
						} else {
							if (!(v = e.useCustomRule(this, d, e.schema, e))) return;
							s = "validate.schema" + c, b = v.code, u = w.compile, g = w.inline, y = w.macro
						}
						var x = b + ".errors",
							P = "i" + r,
							q = "ruleErr" + r,
							T = w.async;
						if (T && !e.async) throw new Error("async keyword in sync schema");
						if (g || y || (o += x + " = null;"), o += "var " + h + " = errors;var " + f + ";", l && w.$data && (j += "}", o += " if (" + s + " === undefined) { " + f + " = true; } else { ", k && (j += "}", o += " " + f + " = " + $ + ".validateSchema(" + s + "); if (" + f + ") { ")), g) w.statements ? o += " " + v.validate + " " : o += " " + f + " = " + v.validate + "; ";
						else if (y) {
							var E = e.util.copy(e);
							j = "";
							E.level++;
							var A = "valid" + E.level;
							E.schema = v.validate, E.schemaPath = "";
							var S = e.compositeRule;
							e.compositeRule = E.compositeRule = !0;
							var D = e.validate(E).replace(/validate\.schema/g, b);
							e.compositeRule = E.compositeRule = S, o += " " + D
						} else {
							(z = z || []).push(o), o = "", o += "  " + b + ".call( ", e.opts.passContext ? o += "this" : o += "self", u || !1 === w.schema ? o += " , " + _ + " " : o += " , " + s + " , " + _ + " , validate.schema" + e.schemaPath + " ", o += " , (dataPath || '')", '""' != e.errorPath && (o += " + " + e.errorPath);
							var I = a ? "data" + (a - 1 || "") : "parentData",
								F = a ? e.dataPathArr[a] : "parentDataProperty",
								R = o += " , " + I + " , " + F + " , rootData )  ";
							o = z.pop(), !1 === w.errors ? (o += " " + f + " = ", T && (o += "await "), o += R + "; ") : o += T ? " var " + (x = "customErrors" + r) + " = null; try { " + f + " = await " + R + "; } catch (e) { " + f + " = false; if (e instanceof ValidationError) " + x + " = e.errors; else throw e; } " : " " + x + " = null; " + f + " = " + R + "; "
						}
						if (w.modifying && (o += " if (" + I + ") " + _ + " = " + I + "[" + F + "];"), o += "" + j, w.valid) p && (o += " if (true) { ");
						else {
							var z;
							o += " if ( ", void 0 === w.valid ? (o += " !", o += y ? "" + A : "" + f) : o += " " + !w.valid + " ", o += ") { ", n = this.keyword, (z = z || []).push(o), o = "", (z = z || []).push(o), o = "", !1 !== e.createErrors ? (o += " { keyword: '" + (n || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { keyword: '" + this.keyword + "' } ", !1 !== e.opts.messages && (o += " , message: 'should pass \"" + this.keyword + "\" keyword validation' "), e.opts.verbose && (o += " , schema: validate.schema" + c + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " "), o += " } ") : o += " {} ";
							var O = o;
							o = z.pop(), !e.compositeRule && p ? e.async ? o += " throw new ValidationError([" + O + "]); " : o += " validate.errors = [" + O + "]; return false; " : o += " var err = " + O + ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";
							var C = o;
							o = z.pop(), g ? w.errors ? "full" != w.errors && (o += "  for (var " + P + "=" + h + "; " + P + "<errors; " + P + "++) { var " + q + " = vErrors[" + P + "]; if (" + q + ".dataPath === undefined) " + q + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + q + ".schemaPath === undefined) { " + q + '.schemaPath = "' + m + '"; } ', e.opts.verbose && (o += " " + q + ".schema = " + s + "; " + q + ".data = " + _ + "; "), o += " } ") : !1 === w.errors ? o += " " + C + " " : (o += " if (" + h + " == errors) { " + C + " } else {  for (var " + P + "=" + h + "; " + P + "<errors; " + P + "++) { var " + q + " = vErrors[" + P + "]; if (" + q + ".dataPath === undefined) " + q + ".dataPath = (dataPath || '') + " + e.errorPath + "; if (" + q + ".schemaPath === undefined) { " + q + '.schemaPath = "' + m + '"; } ', e.opts.verbose && (o += " " + q + ".schema = " + s + "; " + q + ".data = " + _ + "; "), o += " } } ") : y ? (o += "   var err =   ", !1 !== e.createErrors ? (o += " { keyword: '" + (n || "custom") + "' , dataPath: (dataPath || '') + " + e.errorPath + " , schemaPath: " + e.util.toQuotedString(m) + " , params: { keyword: '" + this.keyword + "' } ", !1 !== e.opts.messages && (o += " , message: 'should pass \"" + this.keyword + "\" keyword validation' "), e.opts.verbose && (o += " , schema: validate.schema" + c + " , parentSchema: validate.schema" + e.schemaPath + " , data: " + _ + " "), o += " } ") : o += " {} ", o += ";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ", !e.compositeRule && p && (e.async ? o += " throw new ValidationError(vErrors); " : o += " validate.errors = vErrors; return false; ")) : !1 === w.errors ? o += " " + C + " " : (o += " if (Array.isArray(" + x + ")) { if (vErrors === null) vErrors = " + x + "; else vErrors = vErrors.concat(" + x + "); errors = vErrors.length;  for (var " + P + "=" + h + "; " + P + "<errors; " + P + "++) { var " + q + " = vErrors[" + P + "]; if (" + q + ".dataPath === undefined) " + q + ".dataPath = (dataPath || '') + " + e.errorPath + ";  " + q + '.schemaPath = "' + m + '";  ', e.opts.verbose && (o += " " + q + ".schema = " + s + "; " + q + ".data = " + _ + "; "), o += " } } else { " + C + " } "), o += " } ", p && (o += " else { ")
						}
						return o
					},
					He = "http://json-schema.org/draft-07/schema#",
					We = "http://json-schema.org/draft-07/schema#",
					Be = "Core schema meta-schema",
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
					Je = {
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
						$id: We,
						title: Be,
						definitions: Ve,
						type: Qe,
						properties: Je,
						default: !0
					},
					Ze = s(Object.freeze({
						__proto__: null,
						$schema: He,
						$id: We,
						title: Be,
						definitions: Ve,
						type: Qe,
						properties: Je,
						default: Ge
					})),
					Ke = {
						$id: "https://github.com/epoberezkin/ajv/blob/master/lib/definition_schema.js",
						definitions: {
							simpleTypes: Ze.definitions.simpleTypes
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
							type: Ze.properties.type,
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
					Ye = /^[a-z_$][a-z0-9_$-]*$/i,
					Xe = function(e, t) {
						var i = this.RULES;
						if (i.keywords[e]) throw new Error("Keyword " + e + " is already defined");
						if (!Ye.test(e)) throw new Error("Keyword " + e + " is not a valid identifier");
						if (t) {
							this.validateKeyword(t, !0);
							var n = t.type;
							if (Array.isArray(n))
								for (var s = 0; s < n.length; s++) r(e, n[s], t);
							else r(e, n, t);
							var o = t.metaSchema;
							o && (t.$data && this._opts.$data && (o = {
								anyOf: [o, {
									$ref: "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#"
								}]
							}), t.validateSchema = this.compile(o, !0))
						}

						function r(e, t, n) {
							for (var s, o = 0; o < i.length; o++) {
								var r = i[o];
								if (r.type == t) {
									s = r;
									break
								}
							}
							s || (s = {
								type: t,
								rules: []
							}, i.push(s));
							var a = {
								keyword: e,
								definition: n,
								custom: !0,
								code: Me,
								implements: n.implements
							};
							s.rules.push(a), i.custom[e] = a
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
							for (var n = t[i].rules, s = 0; s < n.length; s++)
								if (n[s].keyword == e) {
									n.splice(s, 1);
									break
								} return this
					},
					it = function e(t, i) {
						e.errors = null;
						var n = this._validateKeyword = this._validateKeyword || this.compile(Ke, !0);
						if (n(t)) return !0;
						e.errors = n.errors;
						if (i) throw new Error("custom keyword definition is invalid: " + this.errorsText(n.errors));
						return !1
					};
				var nt = "http://json-schema.org/draft-07/schema#",
					st = "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#",
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
						$schema: nt,
						$id: st,
						description: ot,
						type: "object",
						required: rt,
						properties: at,
						additionalProperties: !1
					},
					ct = s(Object.freeze({
						__proto__: null,
						$schema: nt,
						$id: st,
						description: ot,
						type: "object",
						required: rt,
						properties: at,
						additionalProperties: !1,
						default: dt
					})),
					mt = ht;
				ht.prototype.validate = function(e, t) {
					var i;
					if ("string" == typeof e) {
						if (!(i = this.getSchema(e))) throw new Error('no schema with key or ref "' + e + '"')
					} else {
						var n = this._addSchema(e);
						i = n.validate || this._compile(n)
					}
					var s = i(t);
					!0 !== i.$async && (this.errors = i.errors);
					return s
				}, ht.prototype.compile = function(e, t) {
					var i = this._addSchema(e, void 0, t);
					return i.validate || this._compile(i)
				}, ht.prototype.addSchema = function(e, t, i, n) {
					if (Array.isArray(e)) {
						for (var s = 0; s < e.length; s++) this.addSchema(e[s], void 0, i, n);
						return this
					}
					var o = this._getId(e);
					if (void 0 !== o && "string" != typeof o) throw new Error("schema id must be string");
					return bt(this, t = z.normalizeId(t || o)), this._schemas[t] = this._addSchema(e, i, n, !0), this
				}, ht.prototype.addMetaSchema = function(e, t, i) {
					return this.addSchema(e, t, i, !0), this
				}, ht.prototype.validateSchema = function(e, t) {
					var i = e.$schema;
					if (void 0 !== i && "string" != typeof i) throw new Error("$schema must be a string");
					if (!(i = i || this._opts.defaultMeta || function(e) {
							var t = e._opts.meta;
							return e._opts.defaultMeta = "object" == typeof t ? e._getId(t) || t : e.getSchema(pt) ? pt : void 0, e._opts.defaultMeta
						}(this))) return this.logger.warn("meta-schema not available"), this.errors = null, !0;
					var n = this.validate(i, e);
					if (!n && t) {
						var s = "schema is invalid: " + this.errorsText();
						if ("log" != this._opts.validateSchema) throw new Error(s);
						this.logger.error(s)
					}
					return n
				}, ht.prototype.getSchema = function(e) {
					var t = lt(this, e);
					switch (typeof t) {
						case "object":
							return t.validate || this._compile(t);
						case "string":
							return this.getSchema(t);
						case "undefined":
							return function(e, t) {
								var i = z.schema.call(e, {
									schema: {}
								}, t);
								if (i) {
									var n = i.schema,
										s = i.root,
										o = i.baseId,
										r = ie.call(e, n, s, void 0, o);
									return e._fragments[t] = new F({
										ref: t,
										fragment: !0,
										schema: n,
										root: s,
										baseId: o,
										validate: r
									}), r
								}
							}(this, e)
					}
				}, ht.prototype.removeSchema = function(e) {
					if (e instanceof RegExp) return ut(this, this._schemas, e), ut(this, this._refs, e), this;
					switch (typeof e) {
						case "undefined":
							return ut(this, this._schemas), ut(this, this._refs), this._cache.clear(), this;
						case "string":
							var t = lt(this, e);
							return t && this._cache.del(t.cacheKey), delete this._schemas[e], delete this._refs[e], this;
						case "object":
							var i = this._opts.serialize,
								n = i ? i(e) : e;
							this._cache.del(n);
							var s = this._getId(e);
							s && (s = z.normalizeId(s), delete this._schemas[s], delete this._refs[s])
					}
					return this
				}, ht.prototype.addFormat = function(e, t) {
					"string" == typeof t && (t = new RegExp(t));
					return this._formats[e] = t, this
				}, ht.prototype.errorsText = function(e, t) {
					if (!(e = e || this.errors)) return "No errors";
					for (var i = void 0 === (t = t || {}).separator ? ", " : t.separator, n = void 0 === t.dataVar ? "data" : t.dataVar, s = "", o = 0; o < e.length; o++) {
						var r = e[o];
						r && (s += n + r.dataPath + " " + r.message + i)
					}
					return s.slice(0, -i.length)
				}, ht.prototype._addSchema = function(e, t, i, n) {
					if ("object" != typeof e && "boolean" != typeof e) throw new Error("schema should be object or boolean");
					var s = this._opts.serialize,
						o = s ? s(e) : e,
						r = this._cache.get(o);
					if (r) return r;
					n = n || !1 !== this._opts.addUsedSchema;
					var a = z.normalizeId(this._getId(e));
					a && n && bt(this, a);
					var d, c = !1 !== this._opts.validateSchema && !t;
					c && !(d = a && a == z.normalizeId(e.$schema)) && this.validateSchema(e, !0);
					var m = z.ids.call(this, e),
						p = new F({
							id: a,
							schema: e,
							localRefs: m,
							cacheKey: o,
							meta: i
						});
					"#" != a[0] && n && (this._refs[a] = p);
					this._cache.put(o, p), c && d && this.validateSchema(e, !0);
					return p
				}, ht.prototype._compile = function(e, t) {
					if (e.compiling) return e.validate = s, s.schema = e.schema, s.errors = null, s.root = t || s, !0 === e.schema.$async && (s.$async = !0), s;
					var i, n;
					e.compiling = !0, e.meta && (i = this._opts, this._opts = this._metaOpts);
					try {
						n = ie.call(this, e.schema, t, e.localRefs)
					} catch (o) {
						throw delete e.validate, o
					} finally {
						e.compiling = !1, e.meta && (this._opts = i)
					}
					return e.validate = n, e.refs = n.refs, e.refVal = n.refVal, e.root = n.root, n;

					function s() {
						var t = e.validate,
							i = t.apply(this, arguments);
						return s.errors = t.errors, i
					}
				}, ht.prototype.compileAsync = Ne, ht.prototype.addKeyword = Xe, ht.prototype.getKeyword = et, ht.prototype.removeKeyword = tt, ht.prototype.validateKeyword = it, ht.ValidationError = G.Validation, ht.MissingRefError = G.MissingRef, ht.$dataMetaSchema = Ue;
				var pt = "http://json-schema.org/draft-07/schema",
					_t = ["removeAdditional", "useDefaults", "coerceTypes", "strictDefaults"],
					ft = ["/properties"];

				function ht(e) {
					if (!(this instanceof ht)) return new ht(e);
					e = this._opts = d.copy(e) || {},
						function(e) {
							var t = e._opts.logger;
							if (!1 === t) e.logger = {
								log: $t,
								warn: $t,
								error: $t
							};
							else {
								if (void 0 === t && (t = console), !("object" == typeof t && t.log && t.warn && t.error)) throw new Error("logger must implement log, warn and error methods");
								e.logger = t
							}
						}(this), this._schemas = {}, this._refs = {}, this._fragments = {}, this._formats = je(e.format), this._cache = e.cache || new pe, this._loadingSchemas = {}, this._compilations = [], this.RULES = Oe(), this._getId = function(e) {
							switch (e.schemaId) {
								case "auto":
									return vt;
								case "id":
									return gt;
								default:
									return yt
							}
						}(e), e.loopRequired = e.loopRequired || 1 / 0, "property" == e.errorDataPath && (e._errorDataPathProperty = !0), void 0 === e.serialize && (e.serialize = Y), this._metaOpts = function(e) {
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
							var i = Ze;
							e._opts.$data && (i = Ue(i, ft));
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

				function lt(e, t) {
					return t = z.normalizeId(t), e._schemas[t] || e._refs[t] || e._fragments[t]
				}

				function ut(e, t, i) {
					for (var n in t) {
						var s = t[n];
						s.meta || i && !i.test(n) || (e._cache.del(s.cacheKey), delete t[n])
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

				function $t() {}
				class wt {
					constructor(e) {
						this.ajv = new mt;
						for (const t of e) this.ajv.addSchema(t)
					}
					validate(e, t) {
						const i = this.ajv.validate(e, t),
							n = this.ajv.errorsText();
						if (!i) throw new Error(n)
					}
					getSchema(e) {
						const t = this.ajv.getSchema(e);
						if (null == t) throw new Error(`No schema exists for ${e}`);
						return t.schema
					}
				}

				function jt(e) {
					var t = {};
					return function e(t, i, n) {
						for (var s in t)
							if (Object.prototype.hasOwnProperty.call(t, s)) {
								var o;
								o = null == n ? s : n + "_" + s;
								var r = t[s];
								"object" == typeof r ? e(r, i, o) : i[o] = r
							}
					}(e, t, null), t
				}
			}).call(this, i("./node_modules/webpack/buildin/global.js"))
		},
		"./node_modules/@reddit/event-schema-registry/dist/esm/index.js": function(e, t, i) {
			"use strict";
			i.d(t, "a", (function() {
				return Nt
			}));
			var n = {
					$id: "http://com.reddit/schemas/event_meta_schema/v1.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Meta schema for the event schema files",
					properties: {
						$id: {
							type: "string",
							format: "uri",
							pattern: "^http:\\/\\/com\\.reddit\\/schemas\\/event_schemas\\/.+$",
							description: "Should be of format: http://com.reddit/schemas/event_schemas/<source>__<action>__<noun>.json"
						},
						$schema: {
							const: "http://com.reddit/schemas/event_meta_schema/v1.json",
							description: "All event schema files must use this meta schema."
						},
						$comment: {
							type: "string",
							description: "Use this field to leave comments for future developers."
						},
						firing_logic: {
							type: "string",
							description: "When does this event fire?"
						},
						owner: {
							type: "string",
							enum: ["channels@reddit.com", "community-activation@reddit.com", "data-eng@reddit.com", "data-warehouse@reddit.com", "economy@reddit.com", "experiments@reddit.com", "search-team@reddit.com"],
							description: "Google group email of the team that owns the event."
						},
						mockup_links: {
							type: "array",
							items: {
								type: "string",
								format: "uri"
							},
							description: "Links to figma mockups or gifs showing the user action that fires the event."
						},
						documentation_links: {
							type: "array",
							items: {
								type: "string",
								format: "uri"
							},
							description: "Links to google docs or wikis with more information about the event."
						},
						allOf: {
							type: "array",
							items: {
								type: "object",
								properties: {
									$ref: {
										type: "string",
										format: "uri",
										pattern: "^http:\\/\\/com\\.reddit\\/schemas\\/schema_interfaces\\/.+$"
									}
								},
								additionalProperties: !1,
								description: "A list of subschemas that events must validate against. Only schema interfaces are allowed."
							}
						},
						properties: {
							type: "object"
						},
						required: {
							type: "array",
							items: {
								type: "string"
							},
							description: "Any required fields which are not covered in the schema interfaces."
						}
					},
					required: ["$id", "$schema", "firing_logic", "owner"],
					additionalProperties: !1
				},
				s = {
					$id: "http://com.reddit/schemas/event_schemas/announcement__view__announcement.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "Fired when an individual message tile is displayed (if the user scrolls through the carousel, fires once for each message the user sees)",
					owner: "channels@reddit.com",
					documentation_links: ["https://docs.google.com/document/d/16llnqZbhoJWIgS9NuT8pi_H9I-9-p0_-bgaYokd970M/edit"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/announcement.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/user.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/frontend.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					required: ["live_thread_id", "live_thread_is_announcement"]
				},
				o = {
					$id: "http://com.reddit/schemas/event_schemas/backend__submit__comment.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User submits a comment.",
					owner: "data-eng@reddit.com",
					documentation_links: ["https://docs.google.com/document/d/1cf1TDMtjW4IEnB8zeFdBxuo3vj1TUzmBhVbX-qMHi0A"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/backend_submit.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					}
				},
				r = {
					$id: "http://com.reddit/schemas/event_schemas/backend__submit__post.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User submits a post.",
					owner: "data-eng@reddit.com",
					documentation_links: ["https://docs.google.com/document/d/11BU1grpzsmHC1kPsTsh3YtQOsDYTkWZ_f5BWB2W0BrQ"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/backend_submit.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					}
				},
				a = {
					$id: "http://com.reddit/schemas/event_schemas/backend__vote__auto_upvote.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User auto-upvotes content (aka the initial vote).",
					owner: "data-eng@reddit.com",
					documentation_links: ["https://docs.google.com/document/d/1-mlheTYKmGSKpvIP0zfQi55AZr2uyLjzOefypifcL20"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/vote.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					}
				},
				d = {
					$id: "http://com.reddit/schemas/event_schemas/backend__vote__clear_downvote.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User clears his or her previous downvote.",
					owner: "data-eng@reddit.com",
					documentation_links: ["https://docs.google.com/document/d/1-mlheTYKmGSKpvIP0zfQi55AZr2uyLjzOefypifcL20"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/vote.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					}
				},
				c = {
					$id: "http://com.reddit/schemas/event_schemas/backend__vote__clear_upvote.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User clears his or her previous upvote.",
					owner: "data-eng@reddit.com",
					documentation_links: ["https://docs.google.com/document/d/1-mlheTYKmGSKpvIP0zfQi55AZr2uyLjzOefypifcL20"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/vote.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					}
				},
				m = {
					$id: "http://com.reddit/schemas/event_schemas/backend__vote__downvote.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User downvotes content.",
					owner: "data-eng@reddit.com",
					documentation_links: ["https://docs.google.com/document/d/1-mlheTYKmGSKpvIP0zfQi55AZr2uyLjzOefypifcL20"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/vote.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					}
				},
				p = {
					$id: "http://com.reddit/schemas/event_schemas/backend__vote__upvote.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User upvotes content.",
					owner: "data-eng@reddit.com",
					documentation_links: ["https://docs.google.com/document/d/1-mlheTYKmGSKpvIP0zfQi55AZr2uyLjzOefypifcL20"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/vote.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					}
				},
				_ = {
					$id: "http://com.reddit/schemas/event_schemas/coins_marketing__click__coins_package.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "Fired on Coins package block click on /coins marketing page and top nav coins dropdown.",
					owner: "economy@reddit.com",
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=1470564269"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/coins_marketing_flow.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/frontend.json"
					}],
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
					}
				},
				f = {
					$id: "http://com.reddit/schemas/event_schemas/coins_marketing__view__page.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User views Coins Marketing page.",
					owner: "economy@reddit.com",
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=1470564269&range=D12"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/coins_marketing_flow.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/frontend.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					}
				},
				h = {
					$id: "http://com.reddit/schemas/event_schemas/community_nav__click__premium.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User taps on Premium from the top nav.",
					owner: "economy@reddit.com",
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/user.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/frontend.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					}
				},
				l = {
					$id: "http://com.reddit/schemas/event_schemas/crowdsource__click__reject_location.json/v1",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User clicks No on location verification prompt",
					owner: "community-activation@reddit.com",
					documentation_links: ["https://reddit.atlassian.net/wiki/spaces/SIG/pages/830866056/Crowdsourced+Geotagging+Instrumentation+Spec#Frontend"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/frontend.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
					properties: {
						source: {
							const: "crowdsource"
						},
						action: {
							const: "click"
						},
						noun: {
							const: "reject_location"
						},
						action_info_page_type: {
							const: "crowdsource_feed_geo"
						},
						action_info_reason: {
							$ref: "http://com.reddit/schemas/field_definitions/crowd_source/crowd_source.json#/definitions/place_id"
						}
					}
				},
				u = {
					$id: "http://com.reddit/schemas/event_schemas/crowdsource__save__location.json/v1",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "Canonical location is being modified",
					owner: "community-activation@reddit.com",
					documentation_links: ["https://reddit.atlassian.net/wiki/spaces/SIG/pages/830866056/Crowdsourced+Geotagging+Instrumentation+Spec#Backend"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/crowdsource_backend_events.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					}
				},
				g = {
					$id: "http://com.reddit/schemas/event_schemas/crowdsource__submit__location.json/v1",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User submits location (not guaranteed source of truth)",
					owner: "community-activation@reddit.com",
					documentation_links: ["https://reddit.atlassian.net/wiki/spaces/SIG/pages/830866056/Crowdsourced+Geotagging+Instrumentation+Spec#Backend"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/crowdsource_backend_events.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					}
				},
				y = {
					$id: "http://com.reddit/schemas/event_schemas/experiment__expose__user_id.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "Expose events are emitted when a user reaches an experiment code fork",
					owner: "experiments@reddit.com",
					documentation_links: ["https://reddit.atlassian.net/wiki/spaces/EX/pages/343212125/Running+Experiments+at+Reddit"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/experiment.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					}
				},
				v = {
					$id: "http://com.reddit/schemas/event_schemas/give_gold__click__confirm.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User clicks Award button to award the post / comment (because they have enough Coins).",
					owner: "economy@reddit.com",
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=464493950&range=D29"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/give_gold_flows.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/frontend.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					required: ["gold_purchase_content_type", "gold_purchase_type"]
				},
				b = {
					$id: "http://com.reddit/schemas/event_schemas/give_gold__click__gid_1.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User clicks Silver award type",
					owner: "economy@reddit.com",
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=464493950&range=D15"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/give_gold_flows.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/frontend.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					}
				},
				$ = {
					$id: "http://com.reddit/schemas/event_schemas/give_gold__click__gid_2.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User clicks Gold award type",
					owner: "economy@reddit.com",
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=464493950&range=D16"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/give_gold_flows.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/frontend.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					}
				},
				w = {
					$id: "http://com.reddit/schemas/event_schemas/give_gold__click__gid_3.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User clicks Platinum award type",
					owner: "economy@reddit.com",
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=464493950&range=D17"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/give_gold_flows.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/frontend.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					}
				},
				j = {
					$id: "http://com.reddit/schemas/event_schemas/give_gold__click__next.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User clicks 'Next' button (because they don't have enough Coins)",
					owner: "economy@reddit.com",
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=464493950&range=D30"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/give_gold_flows.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/frontend.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					}
				},
				k = {
					$id: "http://com.reddit/schemas/event_schemas/give_gold__view__page.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User views Give Gold modal",
					owner: "economy@reddit.com",
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=464493950&range=D14"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/give_gold_flows.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/frontend.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					required: ["gold_purchase_default_option", "gold_purchase_default_anonymous", "subreddit_id", "subreddit_name"]
				},
				x = {
					$id: "http://com.reddit/schemas/event_schemas/global__leave_app.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "Fired when a user leaves/exits Reddit",
					owner: "data-warehouse@reddit.com",
					documentation_links: ["https://docs.google.com/document/d/1OHIME1H9MgrCovWkUFZTTPhPmft9f8kiXpMM438BVDI/edit"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/user.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/frontend.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					required: ["action_info_reason"]
				},
				P = {
					$id: "http://com.reddit/schemas/event_schemas/global__view__screen.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "Fires when the page/content loads for a user",
					owner: "data-warehouse@reddit.com",
					documentation_links: ["https://docs.google.com/document/d/16cGRpFr-eEq8JOb-6Kd9vxe1Ah9oQm8d_T7vpfpZfpo/edit"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/user.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/frontend.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					}
				},
				q = {
					$id: "http://com.reddit/schemas/event_schemas/gold_payment__click__credit_card.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User clicks credit card option",
					owner: "economy@reddit.com",
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=281579805&range=D16"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/gold_payment_flows.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/frontend.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					}
				},
				T = {
					$id: "http://com.reddit/schemas/event_schemas/gold_payment__view__page.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User views Gold Payment modal",
					owner: "economy@reddit.com",
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=281579805&range=D10"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/gold_payment_flows.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/frontend.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					required: ["payment_default_option", "subreddit_id", "subreddit_name"]
				},
				E = {
					$id: "http://com.reddit/schemas/event_schemas/nav__click__user.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User clicks on the user dropdown.",
					owner: "data-warehouse@reddit.com",
					documentation_links: [],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/user.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/frontend.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					required: ["user_number_coins", "user_has_premium", "user_is_premium_subscriber"]
				},
				A = {
					$id: "http://com.reddit/schemas/event_schemas/post__click__give_gold_flows.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User click 'Give Gold' on post",
					owner: "economy@reddit.com",
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=464493950&range=D10"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/give_gold_flows.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/frontend.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					}
				},
				S = {
					$id: "http://com.reddit/schemas/event_schemas/post__consume__post.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "Fired when a post that was >0% visible for at least 2 seconds becomes 0% visible (i.e. goes off screen).",
					owner: "data-eng@reddit.com",
					documentation_links: ["https://docs.google.com/document/d/1d82wbSdR48tmqcuMoGr_IsFb9qrajaORWhnUTWkEvrk/edit#"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/post.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/frontend.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					required: ["action_info_position", "listing_sort"]
				},
				D = {
					$id: "http://com.reddit/schemas/event_schemas/post__view__post.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "Fired immediately when a post becomes >0% visible.",
					owner: "data-eng@reddit.com",
					documentation_links: ["https://docs.google.com/document/d/1d82wbSdR48tmqcuMoGr_IsFb9qrajaORWhnUTWkEvrk/edit#"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/post.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/frontend.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					required: ["action_info_position", "listing_sort"]
				},
				I = {
					$id: "http://com.reddit/schemas/event_schemas/premium_marketing__click__get_premium.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User clicks top 'Get Reddit Premium' button to scroll to purchase section below",
					owner: "economy@reddit.com",
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=1536255464&range=D12"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/frontend.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/premium_marketing.json"
					}],
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
					}
				},
				F = {
					$id: "http://com.reddit/schemas/event_schemas/premium_marketing__click__price.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User clicks bottom '$5.99 / Month' button to enter purchase flow",
					owner: "economy@reddit.com",
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=1536255464&range=D12"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/frontend.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/premium_marketing.json"
					}],
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
					}
				},
				R = {
					$id: "http://com.reddit/schemas/event_schemas/premium_marketing__view__page.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User views Premium Marketing page.",
					owner: "economy@reddit.com",
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=1536255464&range=D12"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/frontend.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/premium_marketing.json"
					}],
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
					}
				},
				z = {
					$id: "http://com.reddit/schemas/event_schemas/search__view__post.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					owner: "search-team@reddit.com",
					firing_logic: "User views a post on their screen on the search results page. This only fires when the post is within view of the user.",
					documentation_links: ["https://docs.google.com/spreadsheets/d/1deNXVg-vEMj0Z4g65rPjYBdfHWC-sL8HmOPRYfkg6-0"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/search.json"
					}],
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
					}
				},
				O = {
					$id: "http://com.reddit/schemas/event_schemas/user_dropdown__click_coins.json",
					$schema: "http://com.reddit/schemas/event_meta_schema/v1.json",
					firing_logic: "User clicks Coins from user dropdown.",
					owner: "economy@reddit.com",
					documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=1470564269&range=D10"],
					allOf: [{
						$ref: "http://com.reddit/schemas/schema_interfaces/coins_marketing_flow.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/frontend.json"
					}, {
						$ref: "http://com.reddit/schemas/schema_interfaces/all_events.json"
					}],
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
					}
				},
				C = {
					$id: "http://com.reddit/schemas/field_definitions/account_label/account_label.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "A label associated with reddit account.",
					definitions: {
						id: {
							type: "string",
							description: "Unique identifier for the label being acted on.\n\n    format:^[0-9]+$"
						},
						type: {
							type: "string",
							description: "Type of label.\n\n    As of writing this the type will always be high_profile.\n    But this can change later to other label types as well.\n\n    categories:high_profile,advertiser,employee,moderator,moderator_bot,public_figure"
						},
						name: {
							type: "string",
							description: "The string representation of the label."
						}
					}
				},
				U = {
					$id: "http://com.reddit/schemas/field_definitions/action/action_info.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Informational fields about different actions that occur on Reddit.\n\nThis struct is deliberately left generic, because many of the fields here could be used between\ndifferent types of user actions.\n\nIt is also deliberately named, to avoid conflict with the top level `action` field.",
					definitions: {
						count: {
							type: "integer",
							description: "Generic counter for actions.\n\n    range:0 -"
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
							description: "Generic field giving human-readable context for an action.\n\n    format:^[\\x00-\\x7F]+$"
						},
						pane_name: {
							type: "string",
							description: "Name of the pane for the community mod tools."
						},
						relative_position: {
							type: "integer",
							description: "The relative position of an entity prior to any client-side manipulation.\n\n    For example, search results for posts and subreddits can appear stacked. This is used to report the original rank\n    of the item as provided by the search results, instead of exactly as presented in the UI.\n\n    range:0 -"
						},
						retried: {
							type: "boolean",
							description: "Determines if an event is a retry of a previous action."
						},
						position: {
							type: "integer",
							description: "The position of an entity being clicked or selected.\n\n    For example, voting on the 5th post in the feed.\n\n    range:0 -\n    skip_validation:False"
						},
						type: {
							type: "string",
							description: "Additional context field for actions.\n\n    These following categories are used in the admin tool:\n    categories:1_day_ban,3_day_ban,5_day_ban,remove_1_day_ban,remove_3_day_ban\n    categories:remove_5_day_ban,disenfranchise_user,remove_disenfranchise_user\n    categories:hardban,unhardban,neuter,unneuter\n    categories:permanently_suspend_user,remove_permanently_suspend_user,warn_user\n    categories:remove_warn_user,remove,approve,disapprove,copyright_takedown\n    categories:copyright_restore,mark_spam,spam,mark_not_spam,lock,unlock,mark_nsfw\n    categories:unmark_nsfw,mark_spoiler,unmark_spoiler,edit_flair,ticky,unsticky\n    categories:distinguish_admin,undistinguish_admin,distinguish_employee\n    categories:undistinguish_employee\n    categories:produce_user_data_export\n    categories:delete_legal_request_data,download_legal_request_data,preserve_legal_request\n    categories:notify_user\n    categories:send_personal_message\n    categories:content_restore,content_remove\n\n    The following categories are used by backend registration events:\n    categories:reddit,google,apple,magic_link\n\n    Reddar:\n    categories:delete_video,dedupe,contractor\n\n    Takedowns/Removals:\n    categories:copyright,csai,dmca_takedown\n\n    Chat posts:\n    categories:aug2019,chat_enabled\n\n    Recommendation generation events in listing service:\n    categories:best_sort_pnorm,popular,time_on_subreddit\n\n    Post recommendations in graphql:\n    categories:mlt_post\n\n    Geo blocks:\n    categories:geo_block,un_geo_block\n\n    Verification emails:\n    categories:verify_email,email_external_verification\n\n    Profiles:\n    categories:profile_overview,profile_submitted,profile_saved,profile_comments,profile_posts"
						},
						setting_value: {
							type: "string",
							description: "Generic field used when setting prefs, subreddit rules, etc.\n\n    This field is not intended to contain the state of a setting, but rather what the current action is doing.\n    For example, when adding a blacklisted domain to a subreddit, the domain would go in this field.\n\n    format:^[\\x00-\\x7F]+$"
						},
						page_type: {
							type: "string",
							description: "Type of page, e.g. chat or post_detail, on which a particular action happened on.\n\n    categories:account_manager,activity,all,chat,chat_fullscreen,comment,community,friends\n    categories:full_search_posts,full_search_subreddits,full_search_users,home\n    categories:in_app_browser,inbox,messages,moderation_pages_banned,moderation_pages_contributors\n    categories:moderation_pages_moderators,moderation_pages_muted,modqueue_edited\n    categories:modqueue_queue,modqueue_reports,modqueue_spam,modqueue_unmoderated\n    categories:mod_mail,multireddit,my_subscriptions,news,news_initial_setup\n    categories:onboarding_community_recommendations,onboarding_post_detail\n    categories:original_content,popular,post_detail,post_submit\n    categories:preview_community,profile,profile_about,push_notification_dialog\n    categories:push_notification_dialog_confirmed,push_notification_dialog_denied\n    categories:push_notification_token_received,safari_view_controller\n    categories:search_history,search_results,single_comment_thread\n    categories:subreddit_feed_search,subreddit_feed_search_posts,subreddit_mod_menu,typeahead_search\n    categories:update_email,update_password\n    categories:billing_overview,creation,dashboard,edit_ad,edit_adgroup\n    categories:edit_billing,edit_business,edit_campaign,permissions,review\n    categories:setup_billing,switch_user,theater_mode,user_sidebar\n    categories:user_hovercard,user_flair_picker,post_flair_picker\n    categories:user_flair_editor,post_flair_editor,post_flair_management,user_flair_management\n    categories:search_results_best,search_results_communities,search_results_users\n    categories:search_results_posts,search_results_media,saved_posts,explore,search_results_games\n    categories:search_results_zero_state,collection,settings\n    categories:settings_account,settings_notifications,settings_feed,settings_privacy,settings_premium\n    categories:custom_feed,stream_player,stream_recorder,stream_intro,category_feed,subreddit_wiki\n    categories:topic,leaderboard,layer_maker\n    categories:welcome,signup,login,logged_out_login_signup,onboarding_interest,onboarding_community_recommendations\n    categories:link_account,link_account_password\n    categories:community_overflow,mod_tools,community_name,community_description,community_confirmation\n    categories:fullscreen,user_data_request\n    categories:community_primary_topic_selection,community_access,community_icon\n    categories:community_icon_photo_upload,community_icon_photo_crop,community_creation_loading\n    categories:spamurai,subreddit_mention_create_community\n    categories:post_type,discovery,language_picker\n    categories:crowdsource_feed_geo,geo_entry\n    categories:account_settings,create_password,confirm_password,bottom_sheet_login,recommended_video_feed\n    categories:chat_tab,create_chat,chat_invite,share_to_chat\n    categories:moderation_pages_edit,survey_amateur_advice,survey_drugs_alcohol,survey_nudity,survey_profanity\n    categories:survey_weapons_gambling,survey_sex,survey_violence,survey_mature_themes,survey_intro\n    categories:survey_rating_summary,survey_rating_review,moderation_pages_modqueue,moderation_pages_unmoderated\n    categories:moderation_pages_rules,moderation_pages_spam,moderation_pages_wiki,moderation_pages_log\n    categories:moderation_pages_flair,moderation_pages_postflair,moderation_pages_wikibanned\n    categories:moderation_pages_userflair,moderation_pages_reports,moderation_pages_traffic,moderation_pages_removal\n    categories:moderation_pages_emojis,moderation_pages_edited,moderation_pages_settings,moderation_pages_awards\n    categories:moderation_pages_chat,moderation_pages_badges,moderation_pages_wikicontributors\n    categories:custom_feeds,saved_comments,chat_add_to_group,chat_add_to_room,chat_settings,compose_message\n    categories:private_message_thread,create_chat_room,room_preview,room_invite,group_invite,chat_members\n    categories:coins_marketing,premium_marketing,category_manager,profile_history_recent,profile_history_upvoted\n    categories:profile_history_downvoted,profile_history_hidden,two_factor,forgot_password,moderating_feed\n    categories:location_based_post_privacy,post_select_community,media_selection,post_composer_subreddit_rules\n    categories:settings_profile,pending_posts,edit_post,draft_posts,news_topics_selector\n    categories:moderation_pages_broadcasting,search_dropdown,awarded,community_alerts,settings_blocked_accounts\n    categories:community_info,crosspost_submit,add_caption,edit_video,choose_location_country,choose_location_state\n    categories:edit_custom_feed,awarding_edit_options,given_awards_list,premium_preferences,chat_invitation_inbox\n    categories:down_to_chat_loading,down_to_chat_safety,post_menu,report_file_complaint,report_sent_confirmation\n    categories:report_crisis_line,switch_accounts,change_username,change_username_confirmation\n    categories:change_username_success,custom_feed_add_communities,report_reason_list,ad_video_link_preview\n    categories:livestream_dialog,broadcast_end,for_you_rpan_feed,post_to_post_video_feed,for_you_video_feed\n\n    Web2x banner types:\n    categories:signup_upsell_banner_welcome,signup_upsell_banner_redditor\n    categories:signup_upsell_banner_discuss,signup_upsell_banner_personalize"
						}
					}
				},
				L = {
					$id: "http://com.reddit/schemas/field_definitions/action/expand.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Metadata fields about post expands.",
					definitions: {
						provider: {
							type: "string",
							description: "If we have an expando on the site, who provided it?\n\n    It's either first-party (through us) or through Embedly.\n\n    categories:reddit,embedly"
						}
					}
				},
				N = {
					$id: "http://com.reddit/schemas/field_definitions/action/share.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields related to sharing content. *",
					definitions: {
						target: {
							type: "string",
							description: 'The app through which content is being shared.\n\n    The value can change depending on the app_name. On android, it is the package name the user shared to,\n    e.g. "com.instagram.android".\n\n    format:^([A-Za-z][A-Za-z0-9\\._]+)$'
						},
						id: {
							type: "string",
							description: "The id of the object returned from the external account.\n\n    format:^.+$"
						}
					}
				},
				M = {
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
							description: "Widget type, e.g. a button or moderator widget.\n\n    format:^(rules|community_list|button|text|image|moderators|calendar|overlay)_widget$"
						}
					}
				},
				H = {
					$id: "http://com.reddit/schemas/field_definitions/ad/programmatic.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Unique identifier for the ad being acted on.\n\n    format:^[0-9]+$\n    */\n    1: optional string id\n    /**\n    The name of this ad set by the advertiser.\n\n    format:^.{1,200}$\n    */\n    2: optional string name\n    /** The outbound URL to direct to when this ad is clicked. */\n    3: optional string click_url\n    /** A list of third party trackers attached to this ad. */\n    4: optional list<string> third_party_trackers\n    /** The status of the ad as configured by the advertiser. */\n    5: optional adtypedefs.ConfiguredStatus configured_status\n    /** The status of the ad as calculated by the backend. */\n    6: optional adtypedefs.EffectiveStatus effective_status\n    /**\n    The approval status of this ad.\n\n    categories:approval,deferred,pending,rejected,running,suspended,whitelisted\n    */\n    7: optional string admin_approval\n    /** A list of third party pixel URLs to fire when the user clicks on this ad. */\n    8: optional list<string> click_trackers\n    /** A list of classifications for an ad. */\n    9: optional list<adtypedefs.Classification> classifications\n    /**\n    The reason that this ad was rejected.\n\n    categories:adult_general,alcohol,bridge_page,broken_url,capitalization,content\n    categories:counterfeit_goods,dating,deceptive,disclosure_proper_accreditation,display_url\n    categories:email_gated,exceeding_characters,gambling,grammar,hazardous_products,health_general\n    categories:illegal_fraud_misleading,improper_certification_pharma,inability_to_interact\n    categories:inappropriate_targeting,live_animals,mature_rated_video,nsfw_18_profile,nsfw_hashtag\n    categories:nsfw_only,nudity,obscene_offensive,paid_fantasy_sports,personal_information\n    categories:pharmaceutical_medical_products,political_advertisements,political_video,porn_video\n    categories:profanity,prohibited_advertisements,prohibited_products_services,punctuation,quality\n    categories:redirect_url,rehab_addiction_centers,resale_of_event_tickets,shorten_url,spelling\n    categories:style_policies_general,supplements,suspension,symbols_emojis,third_party_rights\n    categories:trade_policies,unrelated_landing_page,url_general,verify_authorized_reseller\n    categories:verify_authorized_ticket_reseller,verify_id,video_ads\n    */\n    10: optional string rejection_reason\n    /** Expiration date of forced Ad Preview */\n    11: optional typedefs.Timestamp preview_expiry_timestamp\n}\n\n/** Fields related to programmatic ads. *",
					definitions: {
						ad_unit: {
							type: "string",
							description: "Ad description which includes device, size and placement.\n\n    example: 'Desktop 300x250 ATF'\n\n    format:^.+\\s.+\\s.+$"
						},
						count: {
							type: "integer",
							description: "Defaults to 1. Relevant if marketing decides to do ad aggregation.\n\n    range:0 -"
						},
						partner: {
							type: "string",
							description: "The partner who won the impression.\n\n    format:^.+$"
						},
						type: {
							type: "string",
							description: "Ad type, in house or programmatic.\n\n    categories:house_ad,programmatic_ad"
						}
					}
				},
				W = {
					$id: "http://com.reddit/schemas/field_definitions/adevent/ad_brand_safety.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the brand safety properties of an ad.",
					definitions: {
						tier: {
							type: "string",
							description: "The brand safety tier of the ad request context.\n\n    categories:limited,standard,expanded"
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
				B = {
					$id: "http://com.reddit/schemas/field_definitions/adevent/ad_click.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the post click properties of an ad",
					definitions: {
						landing_page_duration: {
							type: "integer",
							description: "The duration in milliseconds a user spends viewing an ad\n\n    The delta in milliseconds between the timestamp when a user clicks an ad and leaves Reddit to the timestamp\n    when a user returns to Reddit. This field should be in milliseconds and be the length an ad was viewed for.\n    It is a delta not a timestamp.\n\n    For example, if a user clicks an ad at time 100 and returns to Reddit at time 2000, then this value would be 1900\n\n    range:0 -"
						}
					}
				},
				V = {
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
				Q = {
					$id: "http://com.reddit/schemas/field_definitions/adevent/ad_push.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the properties of any reason to shift the placement of an ad.",
					definitions: {
						direction: {
							type: "string",
							description: "Indicates whether push was due to post above or below the ad.\n\n    categories:above,below"
						},
						push_keyword: {
							type: "string",
							description: "A keyword that was brand unsafe, causing a push.\n\n    format:^.*$"
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
				J = {
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
							description: "Ad placement type used in request.\n\n    categories:feed,sidebars,comments_page,promoted_trend"
						},
						slots: {
							type: "array",
							description: "A list of the ad slots being requested, e.g. [first, second, all_but_first]"
						},
						number_min_distance: {
							type: "integer",
							description: "Minimum distance between ads for the current listing page.\n\n    range:0 -"
						},
						platform: {
							type: "string",
							description: "Ad platform name used in request.\n\n    categories:desktop,mobile_web,mobile_native,desktop_legacy,all"
						}
					}
				},
				G = {
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
							description: "Username of the admin.\n\n    Note that this field is not stripped in BigQuery as we consider employee usernames to be fine to\n    show to other employees.\n\n    format:.+"
						}
					}
				},
				Z = {
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
							description: "ID for the specific password dump.\n\n    This ID will be in the format: <Dump number base 10>__%Y-%m-%d_%H:%M:%S_%Z\n    ex: 3__018-08-23_12:23:05_UTC\n\n    The first number is a counter indicating which dump this is that we have\n    received overall, and the latter part is a timestamp of when the dump was\n    received."
						},
						template_type: {
							type: "string",
							description: "Different message types sent via reddar.\n\n    Values and their definitions:\n        * yact - taken action - (default)\n        * aoa - abuse of admins\n        * aoa2 - abuse of admins\n        * nact - no action taken - (default)\n        * nv - no content violation\n        * nsi - need specific info\n        * atc - already taken care of\n        * mrs - mods run subs\n        * grd_def - general removal demand (including defamation)\n        * blk - harassment\n        * 3p - 3rd party report\n        * grd_dmca - general removal demand (requires dmca)\n        * mp - marketplace\n        * sh - self-harm\n        * tof - turn off feature\n        * yact2 - ban evasion - taken action - (default)\n        * nact2 - no action taken (ban evasion) - (default)\n        * nmr - need moderator report\n        * saa - suspension appeal approved - (default)\n        * naa - neuter appeal approved\n        * sad - suspension appeal denied - (default)\n        * aoa - abuse of admins extend suspension\n        * aoa2 - abuse of admins suspend\n\n    categories:yact,aoa,aoa2,nact,nv,nsi,atc,mrs,grd_def,blk,3p,grd,mp\n    categories:sh,tof,yact2,nact2,nmr,saa,naa,sad,aoa,aoa2\n    *"
						},
						target_team_id: {
							type: "integer",
							description: "The numerical team ID which is having access changed, represents a team based on teams from Okta.\n\n    range:0 - 100000\n    *"
						},
						process_notes: {
							type: "string",
							description: "Broad description of an action.\n\n    format:.*"
						},
						timeout_duration: {
							type: "integer",
							description: "For timeout action only: this field represents the number of days for a\n    temporary timeout.\n\n    range:-1 -"
						},
						removal_type: {
							type: "string",
							description: "Type of removal, e.g. overwriting the post, marked as spam, etc\n\n    categories:overwrite,mark_as_spam,mod_remove_from_subreddit\n    categories:admin_remove_from_subreddit\n    categories:mod_approved"
						},
						number_password_dump_credentials: {
							type: "integer",
							description: "Number of credentials contained in this password dump.\n\n    range:0 -"
						},
						notes: {
							type: "string",
							description: "Notes by an admin giving context for an action.\n\n    format:.*"
						},
						removal_is_restorable: {
							type: "boolean",
							description: "Is the removal of the content restorable in the future?\n\n    This tracks if content being removed can be restored, meaning if we\n    permanently delete the media assets or not, and if we save the comment/post\n    information anywhere."
						}
					}
				},
				K = {
					$id: "http://com.reddit/schemas/field_definitions/admin_action/admin_team.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Reported url extracted from ticket. Can be valid reddit url or an external url.\n\n    format:^.+$\n    **/\n    1: optional string reported_url\n    /**\n    Content url associated with reported_url. Can be blank in case we cannot find associated content.\n\n    format:^.+$\n    */\n    2: optional string content_url\n    /**\n    The reddit ID of content associated with this ticket content.\n    Can be empty in case reported url doesn't resolve to valid reddit content.\n    */\n    3: optional typedefs.Fullname target_id\n    /**\n    Type of reddit content.\n\n    categories:post,comment,message\n    */\n    4: optional typedefs.StringLower target_type\n    /**\n    ID given by google csai / microsoft photodna to track the event.\n\n    examples:\n    photodna: 1_photodna_a0e3d02b-1a0a-4b38-827f-764acd288c25\n    google_csai: 17986187222943498570_1534786098\n\n    format:^[a-z0-9._-]+$\n    */\n    5: optional string tracking_id\n    /**\n    Populate information about if post/comment/third_party_link was already removed by a moderator.\n\n    Reflects values defined in admin-service admin.thrift RemovedByType.\n\n    categories:null_value,copyright_takedown,content_takedown,author,moderator\n    categories:community_ops,anti_evil_ops,reddit,deleted,automod_filter\n    */\n    6: optional string removed_by_user_type\n    /**\n    The type of content that is reported.\n\n    Reflects values defined in admin-service admin.thrift ContentType.\n\n    categories:image,video,post,comment,third_party_link,thumbnail,preview,subreddit_icon\n    **/\n    7: optional typedefs.StringLower content_type\n    /** User who deleted the content. Fullname of user. */\n    8: optional typedefs.Fullname removed_by_user_id\n    /** Subreddit id where content was reported. Fullname of subreddt. */\n    9: optional typedefs.Fullname subreddit_id\n    /**\n    The identifier for a reddar queue from where ticket is moved. i.e. Minor Sexualization\n\n    This field is a reddar queue's reddit_id. Prefix 'queues__'\n    followed by base36 value.\n    For example: 'queues__23b'\n\n    format:^queues__[a-z0-9]+$\n    */\n    10: optional string original_queue_id\n    /**\n    The identifier for a reddar queue where ticket is moved. i.e. CP internal\n\n    This field is a reddar queue's reddit_id. Prefix 'queues__'\n    followed by base36 value.\n    For example: 'queues__23b'\n\n    format:^queues__[a-z0-9]+$\n    */\n    11: optional string dest_queue_id\n    /** Indicates if reported content is confirmed CSAI or not. */\n    12: optional bool confirmed_csai\n    /** Indicates if content is reported to ncmec. If not null, then the value is ncmec_id. */\n    13: optional i64 ncmec_report_number\n    /** Full name of user who reported content. */\n    14: optional typedefs.Fullname reporter_id\n    /**\n    Permalink of post/comment/message url. Can be valid reddit url or an external url.\n\n    format:^.+$\n    **/\n    15: optional string permalink\n}\n\n/**\nInformation regarding reroute rules in Reddar.\n\nA reroute rule defines how to reroute tickets from the original queue to a new queue\nwhen tickets match some specific reroute contitions.\n*/\nstruct RerouteRule{\n    /**\n    Required identifier for a reddar routing set.\n\n    This field is a reddar routing set's reddit_id. Prefix 'routing_sets__'\n    followed by base36 value.\n    For example: 'routing_sets__3a'\n\n    format:^routing_sets__[a-z0-9]+$\n    */\n    1: optional string id\n    /**\n    Type of tickets the routing set works on.\n\n    categories:private_message_abuse,harassment,violence,ban_evasion\n    categories:csai,appeal,legal_export,login_bot,ae_test,ads\n    categories:chat_violence,marketplace,pii,photodna,bulk_action_job\n    categories:impersonation,involuntary_porn,scab_appeal,minor_sexualization\n    categories:chat_others,chat_unknown,delete_media,chat_spam,chat_harassment\n    categories:chat_pii,chat_ban_evasion,chat_marketplace,chat_minor_sexualization\n    categories:chat_involuntary_porn,chat_vote_manipulation,live_stream,terrorism\n    categories:dmca,subreddit_report_abuse,user_data_request\n\n    categories:award_unknown,award_other,award_dmca,award_harassment\n    categories:award_minor_sexualization,award_involuntary_porn,award_pii,award_violence\n\n    categories:live_stream_spam,live_stream_harassment_at_me,live_stream_harassment_at_someone_else\n    categories:live_stream_violence_at_me,live_stream_violence_at_someone_else,live_stream_contemplating_self_harm\n    categories:live_stream_committing_self_harm,live_stream_nsfw_content,live_stream_illegal_or_dangerous_behavior\n    categories:live_stream_offensive_or_hoax_content,live_stream_ban_evasion,live_stream_copyright\n    categories:live_stream_trademark,live_stream_impersonation,live_stream_marketplace,live_stream_pii\n    categories:live_stream_vote_manipulation,live_stream_netzdg,live_stream_under_age,live_stream_minor_sexualization\n    categories:live_stream_involuntary_porn_with_me,live_stream_involuntary_porn_without_me\n\n    categories:live_stream_chat_spam,live_stream_chat_harassment_at_me,live_stream_chat_harassment_at_someone_else\n    categories:live_stream_chat_violence_at_me,live_stream_chat_violence_at_someone_else\n    categories:live_stream_chat_contemplating_self_harm,live_stream_chat_committing_self_harm\n    categories:live_stream_chat_nsfw_content,live_stream_chat_illegal_or_dangerous_behavior\n    categories:live_stream_chat_offensive_or_hoax_content,live_stream_chat_ban_evasion,live_stream_chat_copyright\n    categories:live_stream_chat_trademark,live_stream_chat_impersonation,live_stream_chat_marketplace\n    categories:live_stream_chat_pii,live_stream_chat_vote_manipulation,live_stream_chat_netzdg\n    categories:live_stream_chat_under_age,live_stream_chat_minor_sexualization\n    categories:live_stream_chat_involuntary_porn_with_me,live_stream_chat_involuntary_porn_without_me\n    */\n    2: optional typedefs.StringLower ticket_type\n    /**\n    Priority of the routing set when multiple routing sets match a ticket.\n\n    A lower number means higher priority.\n    */\n    3: optional i32 priority\n    /**\n    ID of the queue the routing set will route tickets to.\n\n    format:^queues__[a-z0-9]+$\n    */\n    4: optional string target_queue_id\n}\n\n/** Information regarding queues in Reddar. */\nstruct ReddarQueue{\n    /**\n    The identifier for a reddar queue.\n\n    This field is a reddar queue's reddit_id. Prefix 'queues__'\n    followed by base36 value.\n    For example: 'queues__23b'\n\n    format:^queues__[a-z0-9]+$\n    */\n    1: optional typedefs.StringLower id\n    /**\n    Type of a reddar queue.\n\n    categories:private_message_abuse,harassment,violence,ban_evasion,csai\n    categories:appeal,legal_export,login_bot,configurable,photodna\n    categories:bulk_action_job,delete_media,live_stream,terrorism\n    categories:dmca,user_data_request,geo_block\n    */\n    2: optional typedefs.StringLower type\n    /**\n    Type of tickets a reddar queue contains.\n\n    categories:private_message_abuse,harassment,violence,ban_evasion\n    categories:csai,appeal,legal_export,login_bot,ae_test,ads\n    categories:chat_violence,marketplace,pii,photodna,bulk_action_job\n    categories:impersonation,involuntary_porn,scab_appeal,minor_sexualization\n    categories:chat_others,chat_unknown,delete_media,chat_spam,chat_harassment\n    categories:chat_pii,chat_ban_evasion,chat_marketplace,chat_minor_sexualization\n    categories:chat_involuntary_porn,chat_vote_manipulation,live_stream,terrorism\n    categories:dmca,subreddit_report_abuse,user_data_request\n\n    categories:award_unknown,award_other,award_dmca,award_harassment\n    categories:award_minor_sexualization,award_involuntary_porn,award_pii,award_violence\n\n    categories:live_stream_spam,live_stream_harassment_at_me,live_stream_harassment_at_someone_else\n    categories:live_stream_violence_at_me,live_stream_violence_at_someone_else,live_stream_contemplating_self_harm\n    categories:live_stream_committing_self_harm,live_stream_nsfw_content,live_stream_illegal_or_dangerous_behavior\n    categories:live_stream_offensive_or_hoax_content,live_stream_ban_evasion,live_stream_copyright\n    categories:live_stream_trademark,live_stream_impersonation,live_stream_marketplace,live_stream_pii\n    categories:live_stream_vote_manipulation,live_stream_netzdg,live_stream_under_age,live_stream_minor_sexualization\n    categories:live_stream_involuntary_porn_with_me,live_stream_involuntary_porn_without_me\n\n    categories:live_stream_chat_spam,live_stream_chat_harassment_at_me,live_stream_chat_harassment_at_someone_else\n    categories:live_stream_chat_violence_at_me,live_stream_chat_violence_at_someone_else\n    categories:live_stream_chat_contemplating_self_harm,live_stream_chat_committing_self_harm\n    categories:live_stream_chat_nsfw_content,live_stream_chat_illegal_or_dangerous_behavior\n    categories:live_stream_chat_offensive_or_hoax_content,live_stream_chat_ban_evasion,live_stream_chat_copyright\n    categories:live_stream_chat_trademark,live_stream_chat_impersonation,live_stream_chat_marketplace\n    categories:live_stream_chat_pii,live_stream_chat_vote_manipulation,live_stream_chat_netzdg\n    categories:live_stream_chat_under_age,live_stream_chat_minor_sexualization\n    categories:live_stream_chat_involuntary_porn_with_me,live_stream_chat_involuntary_porn_without_me\n    */\n    3: optional typedefs.StringLower ticket_type\n    /**\n    The group a reddar queue belongs to.\n\n    categories:anti_evil,ae_ops,legal_ops,community,swat,chat,reddar_tools,live_stream,award\n    */\n    4: optional typedefs.StringLower group_type\n    /**\n    The human readable freeform text name of the queue.\n\n    format:^.*$\n    */\n    5: optional typedefs.StringLower name\n    /**\n    The level of priority the queue has.\n    P0 Blocker: Drop everything, this must be completed immediately.\n    P1 Critical: This is complex/important and must be done in a rush.\n    P2 Major: This is complex/important and has a fixed deadline.\n    P3 Minor: This needs to get done, but is not very time sensitive.\n\n    categories:p0,p1,p2,p3\n    */\n    6: optional typedefs.StringLower priority\n    /*\n    The numerical team ID which has access, represents a team based on teams from Okta.\n\n    range:0 - 100000\n    */\n    // 7: optional i32 team_id DEPRECATED\n    /*\n    The human readable name of the team.\n\n    format:^.+$\n    */\n    // 8: optional typedefs.StringLower team_name DEPRECATED\n    /*\n    The type of access granted or removed.\n\n    categories:readonly,write,restricted\n    */\n    // 9: optional typedefs.StringLower access_type DEPRECATED\n}\n\n/** Information regarding Admin teams at reddit and what kind of access they have.",
					definitions: {
						id: {
							type: "integer",
							description: "The numerical team ID which has access, represents a team based on teams from Okta.\n\n    range:0 - 100000"
						},
						name: {
							type: "string",
							description: "The human readable name of the team.\n\n    format:^.+$"
						},
						access_type: {
							type: "string",
							description: "The type of access granted or removed.\n\n    categories:readonly,write,restricted"
						}
					}
				},
				Y = {
					$id: "http://com.reddit/schemas/field_definitions/admin_action/c_s_a_i_media.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Information regarding google csai / microsoft photodna.",
					definitions: {
						media_url: {
							type: "string",
							description: "Url of the video/image being checked.\n    Can be reddit hosted or external\n\n    examples:\n    photodna: https://i.imgur.com/aeulpB4.png\n    photodna: https://i.redd.it/i85evufd5us11.jpg\n    google_csai: https://v.redd.it/kvyioqwybxs11\n    format:^https?:\\/\\/[a-z0-9\\/\\-_.]+$"
						},
						match: {
							type: "boolean",
							description: "True if there is a match for the media, indicating confirmation of CP."
						},
						retry_media_url: {
							type: "string",
							description: "Retry url sent to photodna.\n    format:^https?:\\/\\/[a-z0-9\\/\\-_.]+$"
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
							description: "Error message provided by 3rd party if response is an error.\n\n    format:^.+$"
						},
						error_code: {
							type: "integer",
							description: "Error code provided by 3rd party if response is an error.\n\n    range:0 -"
						},
						destination_queue_name: {
							type: "string",
							description: "Name of queue the media is being sent to."
						}
					}
				},
				X = {
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
							description: "Permalink of content.\n\n    format:^http.+$\n    *"
						},
						file_viewed_by_admin: {
							type: "boolean",
							description: "Whether the reporting company viewed the file being reported to NCMEC."
						},
						classification_type: {
							type: "string",
							description: "A categorization from the ESP-designated categorization scale.\n\n    https://exttest.cybertip.org/ispws/documentation/#xml-file-details\n    <industryClassification>\n\n    categories:a1,a2,b1,b2"
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
							description: "Optionally added by reddar admin/legalOps when submitting ncmec request.\n\n    format:.*\n    *"
						},
						id: {
							type: "integer",
							description: "Id of report submitted to NCMEC\n\n    https://exttest.cybertip.org/ispws/documentation/#report-response\n    <reportId>"
						},
						content_url: {
							type: "string",
							description: "Reported url extracted from ticket. Can be valid reddit url or an external url.\n\n    format:^.+$\n    *"
						},
						filename: {
							type: "string",
							description: "The name of the file(s) associated with the incident.\n\n    format:^.+$"
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
							description: "Optionally added by reddar admin/legalOps when submitting ncmec request.\n\n    format:.*\n    *"
						},
						content_is_reddit_hosted: {
							type: "boolean",
							description: "Indicates whether content is reddit hosted or third party."
						},
						account_added_note: {
							type: "string",
							description: "Notes added by content reviewer. Optionally added by reddar Admin/LegalOps when submitting ncmec report.\n\n    format:.*\n    *"
						}
					}
				},
				ee = {
					$id: "http://com.reddit/schemas/field_definitions/announcement/announcement.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "An announcement, shown in the top carousel conditionally on all platforms.",
					definitions: {
						id: {
							type: "string",
							description: "Required alphanumeric identifier for the announcement.\n\n    format:^[a-z0-9]+$"
						},
						title: {
							type: "string",
							description: "The title of the announcement.\n\n    format:^.*$"
						},
						body: {
							type: "string",
							description: "The main content of the announcement.\n\n    format:.*"
						}
					}
				},
				te = {
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
				ie = {
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
				ne = {
					$id: "http://com.reddit/schemas/field_definitions/banner/banner.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "A banner, either in web or mobile platforms.",
					definitions: {
						id: {
							type: "string",
							description: 'Required identifier for the banner, e.g. "nfl_gameday_survey".\n    format:^[ -~]+$'
						},
						button_text: {
							type: "string",
							description: 'Banner button interacted with, e.g. for survey banners.\n\n    Example values include "yes" or "dismiss"'
						}
					}
				},
				se = {
					$id: "http://com.reddit/schemas/field_definitions/bot_detection/bot_detection.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Model for bot detection.",
					definitions: {
						provider: {
							type: "string",
							description: "Name of the provider who supplied bot detection services.\n\n    categories:recaptcha"
						},
						website_action: {
							type: "string",
							description: "Name of the website action that was protected by a bot detection service.\n\n    (e.g., page_view, comment, login, etc.)\n\n    categories:page_view"
						},
						recaptcha_score: {
							type: "number",
							description: "reCaptcha assessment score.\n\n    range:0.0 - 1.0"
						}
					}
				},
				oe = {
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
							description: 'An integer giving the number of "things" expected to be actioned by the bulk action job.\n\n    range:0 -'
						},
						reason: {
							type: "string",
							description: "A string giving the reason for the bulk action job.\n\n    format:.+"
						},
						user_id: {
							type: "string",
							description: "Account reddit id associated with report."
						},
						id: {
							type: "string",
							description: "Required identifier for the job.\n\n    This field is tracked as base36.\n\n    format:^[a-z0-9]+$"
						},
						bigquery_job_id: {
							type: "string",
							description: "For jobs created via the BigQuery connector, the unique id of the related entry in BigQuery.\n\n    If the bulk action is created manually by uploading a CSV, the bigquery_job_id field is\n    left empty. If the bulk action job is created through the BigQuery connector (i.e. the job\n    was automatically created by an integrated ETL from the SWAT team), the bigquery_job_id is a\n    string storing a back reference to it\n\n    This field is tracked as UUID."
						},
						status: {
							type: "string",
							description: "A string giving the status of the bulk action job.\n\n    categories:error,created,pending,running,complete,stopped"
						},
						actions: {
							type: "array",
							description: "A list of (lowercase) strings giving the actions that the bulk action job is expected to perform.\n\n    E.g. ['ap__suspend_temporarily_3day', 'ap__mark_for_alt_tracking']"
						},
						target_type: {
							type: "string",
							description: "A string giving the type of the things expected to be actioned by the bulk action job.\n\n    categories:post,comment,message,account,subreddit,livethread"
						},
						target_limit: {
							type: "integer",
							description: "An integer giving the current limit of targets that can be actioned without a maunual review.\n\n    range:0 -"
						}
					}
				},
				re = {
					$id: "http://com.reddit/schemas/field_definitions/carousel/carousel.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "A carousel is a horizontally scrolling content view.\n\nMost carousels are used to display posts and subreddits for discovery of new content.",
					definitions: {
						id: {
							type: "string",
							description: "Required identifier for the carousel. \n    \n    Note that these are not thing ids, so they aren't Fullnames.\n\n    format:^xd_[a-z0-9]+$"
						},
						type: {
							type: "string",
							description: "String that identifies the carousel's purpose and content.\n\n    Roughly equivalent to an experiment name."
						}
					}
				},
				ae = {
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
				de = {
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
							description: "The length of the message body text.\n\n    range:0 -"
						},
						channel_name: {
							type: "string",
							description: "Name of group or 1:1 channel.\n\n    Note! The field will be protected, with the data fields being part of the blacklist,\n    and only accessible in SWATs restricted data project.\n\n    Values:\n        * for 1:1 channel, this information leaks user names (protected by SWAT team)\n        * for group channel, this will be a channel name\n\n    format:^.+$"
						},
						reported_user_id: {
							type: "string",
							description: "The user_id of the member being reported."
						},
						invitation_preview_type: {
							type: "string",
							description: "Type of first invitation message, e.g. text or snoomoji.\n\n    categories:text,image,post,snoomoji,gif,video"
						},
						number_blocked_users: {
							type: "integer",
							description: "The number of members who are currently blocked.\n\n    range:0 -"
						},
						invitation_id: {
							type: "string",
							description: "Invitation id for the channel.\n\n    format:^[_a-z0-9]+$"
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
							description: "The number of invites the user has not responded to.\n\n    range:0 -"
						},
						image_upload_method: {
							type: "string",
							description: "Method for image uploads, either via gallery or camera.\n\n    categories:gallery,camera"
						},
						message_type: {
							type: "string",
							description: "Type of message, e.g. text or snoomoji.\n\n    categories:text,image,post,snoomoji,gif,video"
						},
						message_body: {
							type: "string",
							description: "Text of message in group and 1:1 channel.\n\n    Note! The field will be protected, with the data fields being part of the blacklist,\n    and only accessible in SWATs restricted data project.\n\n    format:.+"
						},
						number_unreads: {
							type: "integer",
							description: "The number of unread messages in a channel.\n\n    range:0 -"
						},
						invitation_type: {
							type: "string",
							description: "Type of channel the user being invited, either group or 1:1 chat.\n\n    Values:\n        * direct - private 1:1 chat\n        * group - private group chat\n        * room_private - subreddit private chat\n        * room_public - subreddit public chat\n\n    categories:direct,group,room_public,room_private"
						},
						is_member: {
							type: "boolean",
							description: "Did this user already join this chat?"
						},
						message_id: {
							type: "integer",
							description: "Message id provided by SendBird.\n\n    range:0 -"
						},
						id: {
							type: "string",
							description: "Channel id provided from our chat service, of the form:\n    CHAT_{sendbird_channel_id}_{message_id}\n    Example value:\n    CHAT_sendbird_group_channel_11652835_3ebbc9b3692c3cf399e970f66f720712a08145ce_132118214\n\n    format:^[-_a-zA-Z0-9]+$"
						},
						shown_history: {
							type: "boolean",
							description: "Were there already messages in the room when the user joined?"
						},
						number_members: {
							type: "integer",
							description: "The number of members in a channel.\n\n    range:0 -"
						},
						request_name: {
							type: "string",
							description: "Url if available, otherwise a method name, used for measuring web request roundtrip time.\n\n    This field is used for debugging. As such, we allow all ascii characters.\n\n    format:^[\\x00-\\x7F]+$"
						},
						number_channels: {
							type: "integer",
							description: "The number of channels that are in the inbox.\n\n    range:0 -"
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
							description: "Identifies if the chat is with a group or 1:1 chat.\n\n    Values:\n        * direct - private 1:1 chat\n        * group - private group chat\n        * room_private - subreddit private chat\n        * room_public - subreddit public chat\n\n    categories:direct,group,room_public,room_private"
						},
						user_added_method: {
							type: "string",
							description: "Method for how users were added, either through contacts or search.\n\n    categories:contacts,search"
						},
						blocked_user_id: {
							type: "string",
							description: "User id of member who is being blocked."
						},
						report_reason: {
							type: "string",
							description: "A report reason from a pre-selected set of options.\n\n    format:^.+$"
						}
					}
				},
				ce = {
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
				me = {
					$id: "http://com.reddit/schemas/field_definitions/comment_draft/comment_draft.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Text of a comment before it is submitted.",
					definitions: {
						body_text: {
							type: "string",
							description: "The text of the drafted comment.\n\n    format:.*"
						}
					}
				},
				pe = {
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
				_e = {
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
						score: {
							type: "integer",
							description: "Vote score for the comment.\n\n    format:^.*$"
						},
						upvote_ratio: {
							type: "number",
							description: "Number of upvotes divided by total number of votes for the comment.\n\n    Note that raw upvote/downvote scores are not exposed to clients due to\n    security / privacy / anti-evil reasons.\n\n    format:^.*$"
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
							description: "The depth of the comment in the comment tree.\n    \n    range:0 -"
						},
						author_id: {
							type: "string",
							description: "Author of the comment."
						},
						body_text: {
							type: "string",
							description: "Content of the comment in markdown.\n\n    format:.*"
						},
						type: {
							type: "string",
							description: "The type of comment.\n\n    Values and their definitions:\n        * comment: a traditional comment\n        * chat: a comment submitted to a chat post\n\n    categories:comment,chat"
						},
						number_gildings: {
							type: "integer",
							description: "How much gold the comment has received.\n\n    range:0 -"
						}
					}
				},
				fe = {
					$id: "http://com.reddit/schemas/field_definitions/content/comment_composer.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents fields specific to the comment creation form.",
					definitions: {
						editor_mode: {
							type: "string",
							description: "Which mode the editor is in.\n\n    We support both rich text or markdown.\n\n    categories:rte,markdown"
						}
					}
				},
				he = {
					$id: "http://com.reddit/schemas/field_definitions/content/edit.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Details of an edit made by a user to a piece of content.",
					definitions: {
						previous_body_text: {
							type: "string",
							description: "The body text of the content before the current user edit was performed.\n    This field is used for both post and comment edits.\n\n    format:.*"
						}
					}
				},
				le = {
					$id: "http://com.reddit/schemas/field_definitions/content/gallery.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields used in posted media. */\nstruct Media {\n    /**\n    Width in pixels.\n\n    range:0 -\n    */\n    1: optional i64 width\n    /**\n    Height in pixels.\n\n    range:0 -\n    */\n    2: optional i64 height\n    /**\n    Time to load media in milliseconds.\n\n    range:0 -\n    */\n    3: optional i64 load_time\n    /** Identifier of the image or video. */\n    4: optional typedefs.StringLower id\n    /**\n    Orientation of the media, e.g. landscape or portrait.\n\n    categories:landscape,portrait\n    */\n    5: optional typedefs.StringLower orientation\n    /**\n    Length of the video in milliseconds.\n\n    range:0 -\n    */\n    6: optional i64 duration\n    /**\n    At what time in the video is the event happening in milliseconds.\n\n    E.g. clicked on pause after the video played for 100ms.\n\n    range:0 -\n    */\n    7: optional i64 time\n    /** Is the media pinned? */\n    8: optional bool pinned\n    /**\n    Max time a video was served.\n\n    range:0 -\n    */\n    9: optional i64 max_time_served\n    /**\n\tMimetype of media.\n\n\tformat:^[-_/a-z0-9]+$\n    */    \n    10: optional string mimetype\n    /**\n    Size of media in bytes.\n\n    range:0 -\n    */\n    11: optional i64 size\n    /**\n    URL of media.\n\n    format:^https?:\\/\\/[a-zA-Z0-9\\/\\-\\?=&_.]+$\n    */\n    12: optional string url\n    /**\n    The location from which media was uploaded to the site.\n\n    categories:fileselector,clipboard,drag_and_drop\n    */\n    13: optional typedefs.StringLower source\n    /**\n    Uploading time in milliseconds.\n\n    range:0 -\n    */\n    14: optional i64 upload_duration\n    /**\n    File name of the media being uploaded.\n\n    format:^.+$\n    */\n    15: optional string file_name\n    /**\n    Upload type, e.g. video, image, or live stream video\n\n    categories:image,video,stream\n\n    The following categories are further used to differentiate video types:\n\n    categories:stream_live,stream_vod,stream_unavailable,native_video\n    */\n    16: optional typedefs.StringLower type\n    /**\n    URL for the image or video thumbnail.\n\n    format:^https?:\\/\\/[a-z0-9\\/\\-_.]+$\n    */\n    17: optional string thumbnail_url\n    /** The CDN that served this media. */\n    18: optional typedefs.StringLower cdn_name\n    /**\n    The cdn region where this media was downloaded from.\n\n    Note that the region format will differ depending on the cdn used.\n\n    format:^.+$\n    */\n    19: optional string cdn_region\n    /**\n    The region where this media was sent to.\n\n    Note that the region format will differ depending on the cdn used.\n\n    format:^.+$\n    */\n    20: optional string destination_region\n    /**\n    URL for the image or video preview.\n\n    format:^https?:\\/\\/[a-z0-9\\/\\-_.]+$\n    */\n    21: optional string preview_url\n    /** The public ID for the live stream. */\n    22: optional typedefs.UUID stream_public_id\n    /** The private ID for the live stream (a.k.a. streamer_key). */\n    23: optional typedefs.UUID stream_private_id\n    /** The timestamp for when the live stream ended. */\n    24: optional typedefs.Timestamp stream_ended_timestamp\n    /**\n    The md5 of the media, as uploaded by the user.\n\n    format:^[a-f0-9]{32}$\n    */\n    25: optional string md5\n    /** Specific caption for the media the user is interacting with. */\n    26: optional string caption\n    /** Outbound url for a specific media asset. */\n    27: optional string outbound_url\n    /** Outbound url domain for a specific media asset. */\n    28: optional string outbound_domain\n}\n\n/** Represents a Media Gallery post, which collects many Media objects.",
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
				ue = {
					$id: "http://com.reddit/schemas/field_definitions/content/listing.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the characteristics we would send as part of a listing page.",
					definitions: {
						max_rank: {
							type: "integer",
							description: "The maximum rank of the sort result.\n\n    range:0 -"
						},
						source: {
							type: "string",
							description: "What type of listing this is.\n\n    categories:home,popular,all,subreddit,original_content,post_detail\n    *"
						},
						aggregator: {
							type: "string",
							description: 'Describes how a listing is aggregated. Currently only "single_agg".\n\n    categories:single_agg'
						},
						min_rank: {
							type: "integer",
							description: "The offset used in the sort result.\n\n    range:0 -"
						},
						cursor: {
							type: "string",
							description: "Cursor passed in by request in listing service."
						},
						old_sort: {
							type: "string",
							description: "The type of sort that a listing previously had if changed.\n\n    categories:hot,new,rising,top,controversial,gilded,wiki,promoted,best,chat\n    categories:confidence,qa,old,live,random,relevance,comments,timestamp,score,upvotes"
						},
						links: {
							type: "array",
							description: "List of all of the Thing fullnames included in the listing (in order)"
						},
						sort_time_filter: {
							type: "string",
							description: "Time filter, if present, that is applied to a sort.\n\n    categories:hour,day,week,month,year,all"
						},
						metadata: {
							type: "string",
							description: "Extra metadata to be used for listing related things.\n\n    format:^[0-9a-z{},\\[\\]:\"' ]{1, 5000}$"
						},
						depth: {
							type: "integer",
							description: "The depth of a comment in a listing.\n\n    range:0 -"
						},
						length: {
							type: "integer",
							description: "Number of links present in the listing.\n\n    range:0 -"
						},
						geo_filter: {
							type: "string",
							description: "Geopopular filter applied to the listing.\n\n    format:^[_A-Z]+$"
						},
						sort: {
							type: "string",
							description: "The type of sort that a listing page is loaded with.\n\n    categories:hot,new,rising,top,controversial,gilded,wiki,promoted,best,chat\n    categories:confidence,qa,old,live,random,relevance,comments,timestamp,score,upvotes"
						},
						cursor_returned: {
							type: "string",
							description: "Cursor returned by request from listing service."
						}
					}
				},
				ge = {
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
				ye = {
					$id: "http://com.reddit/schemas/field_definitions/content/message.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: 'Type of discovery unit.\n\n    The type of carousel, usually "listing" or "subreddit_listing" or "comments_listing". However, some older\n    units have grandfathered unique types. This is an arbitrary lowercase string without spaces.\n    */\n    2: required typedefs.StringLower type\n    // 3: optional i64 number_posts DEPRECATED\n    // 4: optional list<typedefs.Fullname> posts_shown DEPRECATED\n    // 6: optional i64 post_position DEPRECATED\n    // 7: optional typedefs.StringLower post_type DEPRECATED\n    // 8: optional typedefs.StringLower post_subreddit DEPRECATED\n    /**\n    The unique identifier of the discovery unit as outlined on the config wiki.\n\n    This is an arbitrary string, but generally should be in the format of "xd_X"\n    where X is a number or text identifier.\n\n    format:^[ -~]+$\n    */\n    9: required string id\n    /**\n    The displayed title of the carousel, this will be an arbitrary string.\n\n    format:^.+$\n    */\n    10: optional string title\n    /**\n    The carousel\'s unique english name used for analytics.\n\n    This is an arbitrary lowercase string without spaces.\n    */\n    11: required typedefs.StringLower name\n    /** A list of fullnames for each item presented in the discovery unit. */\n    12: optional list<typedefs.Fullname> items\n}\n\n/** A private message sent between Redditors.',
					definitions: {
						body: {
							type: "string",
							description: "The content in the body of the message.\n\n    format:.*\n    read-access:swat@reddit.com"
						},
						parent_message_id: {
							type: "string",
							description: "Message ID of the parent message in this thread."
						},
						subject: {
							type: "string",
							description: "The subject of the message thread.\n\n    format:.*\n    read-access:swat@reddit.com"
						},
						filtered_by_recipient: {
							type: "boolean",
							description: "Did the message get rejected before being received by the recipient.\n\n    There are a variety of reasons why a rejection would occur, such\n    as blocking."
						},
						sender_type: {
							type: "string",
							description: "What kind of entity the sender is.\n\n    Used to differentiate between automated systems, users,\n    and subreddits sending content.\n\n    categories:automated,user,subreddit"
						},
						id: {
							type: "string",
							description: "Required id of the Message."
						},
						recipient_type: {
							type: "string",
							description: "The type of the recipient.\n\n    categories:user,subreddit"
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
							description: "Source page the user was on when they created this message.\n\n    categories:compose,permalink,usermail"
						},
						first_message_id: {
							type: "string",
							description: "Message ID of the first message in this thread."
						}
					}
				},
				ve = {
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
				be = {
					$id: "http://com.reddit/schemas/field_definitions/content/notification.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents a notification, mostly used for mobile platforms.",
					definitions: {
						body: {
							type: "string",
							description: "The body of this Notification.\n\n    format:.+"
						},
						dropped: {
							type: "boolean",
							description: "Was the notification dropped?\n\n    A notification was dropped because of a preference check, version check,\n    bad push token, invalid ARN endpoint, multiple device ids mapped to the\n    same push token, etc."
						},
						authorization_status: {
							type: "string",
							description: "Authorization status of a notification, only applies to iOS devices\n\n    categories:enabled,provisional"
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
							description: "The title of this Notification.\n\n    format:^.+$"
						},
						type: {
							type: "string",
							description: "The type of this Notification.\n\n    categories:comment_reply,chat,lifecycle_post_suggestions,post_reply,private_message,user_new_follower\n    categories:subreddit_recommendation,trending,upvote,username_mention,scheduled_event\n    categories:subreddit_updates_interesting_post,chat_message,chat_request\n    categories:chat_user_mention,chat_all_mention,news,subreddit,add_to_collection\n    categories:week0_signup,week0_onboarding_incomplete,week0_onboarding_complete\n    categories:week0_join,week0_upvote,week0_help,week0_explore_interest\n    categories:week0_explore_search,week0_topic,week0_support,thread_replies\n    categories:top_level_comment,chat_accept_invite,one_off,cake_day,live_event\n    categories:upvote_comment,upvote_post,broadcast_follower,broadcast_recommendation\n    categories:post_flair_added,new_pinned_post"
						}
					}
				},
				$e = {
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
							description: "Number of subreddits selected as part of the onboarding flow.\n\n    range:0 -"
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
							description: "Number of captcha screens a user saw.\n\n    range:0 -"
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
							description: "Number of subreddits already selected.\n\n    range:0 -"
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
							description: "Subreddit category position in a list.\n\n    range:0 -"
						},
						subreddit_position: {
							type: "integer",
							description: "Subreddit position in a list.\n\n    range:0 -"
						},
						user_name: {
							type: "string",
							description: "Submitted user name.\n\n    format:^[\\x00-\\x7F]+$"
						},
						subreddit_is_selected: {
							type: "boolean",
							description: "Was this subreddit already selected? Used in onboarding subreddit click events."
						},
						number_subreddits: {
							type: "integer",
							description: "Number of similar subreddits viewed.\n\n    range:0 -"
						},
						personalized_subreddits: {
							type: "integer",
							description: "Number of personalized subreddits shown to the user.\n\n    range:0 -"
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
				we = {
					$id: "http://com.reddit/schemas/field_definitions/content/post.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the characteristics of a post (aka a link).",
					definitions: {
						top_awarded_type: {
							type: "string",
							description: "The type of top awarded leaderboard\n\n    Values and their definitions:\n        * active: leaderboard is active\n        * inactive: leaderboard is inactive and can not be updated\n\n    categories:active,inactive"
						},
						is_scheduled: {
							type: "boolean",
							description: "Does this post have a scheduled time?"
						},
						number_comments: {
							type: "integer",
							description: "The number of comments a post has at the time of the event.\n\n    range:0 -"
						},
						number_posts_from_ad: {
							type: "integer",
							description: "Number of posts between this post and the nearest ad above it.\n\n    range:0 -"
						},
						url: {
							type: "string",
							description: 'Typically the URL unless a text or self type post.\n\n    Will not be set by text posts. May be a reddit post\n    (e.g. "/r/askreddit/comments/abcd1234/post_title") if set by AMP.\n\n    format:^([hH][tT][tT][pP][sS]?://|ftp://|/(r|user|u|comments|live)/|/over18\\?)'
						},
						subreddit_name: {
							type: "string",
							description: "Lowercase name of the post's parent subreddit, e.g. askreddit.\n\n    format:^(reddit.com|((t:)?[-_a-z0-9]+))$"
						},
						archived: {
							type: "boolean",
							description: "Boolean for whether a post is archived or not."
						},
						domain: {
							type: "string",
							description: "Domain of the above url, if present.\n\n    format:^.+$"
						},
						score: {
							type: "integer",
							description: "Vote score for the post.\n\n    format:^.*$"
						},
						flair: {
							type: "string",
							description: "Flair text that appears in the post.\n\n    format:^[^\\n]{0,64}$"
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
							description: "Unique id of an ad impressions.\n\n    format:.*"
						},
						subreddit_id: {
							type: "string",
							description: "Fullname of the post's parent subreddit."
						},
						recommendation_source: {
							type: "string",
							description: "The first pass ranker source name. \n    \n    This will be the typename field on feed element nodes.\n\n    i.e. PostRecommendation, SubredditPost, AdPost, ect..."
						},
						submit_scheduled_timestamp: {
							type: "number",
							description: "Is this post scheduled to go live at a certain time?"
						},
						upvote_ratio: {
							type: "number",
							description: "Number of upvotes divided by total number of votes for the post.\n\n    Note that raw upvote/downvote scores are not exposed to clients due to\n    security / privacy / anti-evil reasons.\n\n    format:^.*$"
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
							description: "Unique identifier of the Post.\n    format:^t[0-9]_[a-z0-9]+$\n    skip_validation:False"
						},
						content_duration: {
							type: "integer",
							description: "UNKNOWN. May be deprecated.\n\n    range:0 -"
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
							description: "The type of comments displayed for this post.\n\n    Values and their definitions:\n        * comment: discussion consists of comments\n        * chat: discussion consists of chats\n\n    categories:comment,chat"
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
							description: "Used for text posts to hold content.\n\n    format:.*"
						},
						title: {
							type: "string",
							description: "Display title, entered by the author.\n\n    Note that titles typically cannot contain newlines today, they are used in ads as well in very old posts.\n    As such, the validator pattern simply checks for the presence of non-whitespace characters.\n\n    format:[^\\n]+"
						},
						type: {
							type: "string",
							description: 'Style of the post.\n\n    Values and their definitions:\n        * link: outgoing link\n        * text: Text (aka "self") post\n        * image: direct link to an image\n        * gif: direct link to a gif\n        * video: direct link to a video\n        * crosspost: a crosspost post\n        * multi_media: post with inline media\n        * self: used by AMP\n        * rtjson: rich text json description\n        * circle: used as part of april fools 2018\n        * poll: post with points-based polling\n        * stream: (deprecated, use rpan) live stream video post\n        * rpan: live stream video post\n        * gallery: post with a gallery of media\n    categories:link,text,image,gif,video,crosspost,multi_media,self,rtjson,circle,poll,stream,premium,coins,rpan,gallery'
						},
						number_gildings: {
							type: "integer",
							description: "How much gold the post has already received.\n\n    range:0 -"
						},
						original_content: {
							type: "boolean",
							description: "Boolean for whether this post flagged as original content."
						}
					}
				},
				je = {
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
							description: "Display layout of the post collection, e.g. gallery or timeline.\n\n    categories:gallery,timeline"
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
							description: "Display title for the PostCollection, entered by the author.\n\n    The validator will be the same as that for post titles.\n\n    NOTE: This field should be used only for PostCollection Create/Edit/Delete/Add_to/Remove_from events\n\n    format:[^\\n]+"
						}
					}
				},
				ke = {
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
							description: "Editor mode, e.g. rte (rich text editor) or markdown.\n\n    categories:rte,markdown"
						},
						input_type: {
							type: "string",
							description: "Where the input is occuring, e.g. title, or rte (rich text editor).\n\n    categories:title,text,url,rte,caption,outbound_url"
						},
						text_type: {
							type: "string",
							description: "Text type, e.g. bold or url.\n\n    categories:bold,italics,title,body,url"
						},
						final_status: {
							type: "string",
							description: "Final status text option.\n\n    categories:on,off"
						},
						submit_scheduled_timestamp: {
							type: "number",
							description: "Timestamp of when this post event is scheduled to go live"
						},
						type: {
							type: "string",
							description: "Post type selection, e.g. self, image.\n\n    categories:self,link,image,media,poll"
						}
					}
				},
				xe = {
					$id: "http://com.reddit/schemas/field_definitions/content/post_event.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Details of a PostEvent (scheduled post) for amas/shows.",
					definitions: {
						type: {
							type: "string",
							description: "Type of the PostEvent.\n\n    Values and their definitions:\n        * ama: Ask Me Anything\n        * event: Generic catch all event\n        * show: TV Show\n        * game: Sports game\n    categories:ama,event,show,game"
						},
						event_state: {
							type: "string",
							description: "The state of the PostEvent.\n\n    Values and their definitions:\n        * before: not yet started\n        * now: currently active\n        * after: finished\n    categories:before,now,after"
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
				Pe = {
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
				qe = {
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
							description: "The version of the rating survey that this content tag came from.\n\n    Some examples may be:\n        * v1\n        * v2\n\n    format:^v[0-9]+$"
						}
					}
				},
				Te = {
					$id: "http://com.reddit/schemas/field_definitions/crawler/crawler.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields related to crawlers.",
					definitions: {
						name: {
							type: "string",
							description: 'Crawler name set by VCL.\n\n    This name can be something general: "googlebot", "bingbot", or something specific: "AdsBot-Google-Mobile-Apps".\n\n    format:^[\\x00-\\x7F]+$'
						}
					}
				},
				Ee = {
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
							description: "Which level of Crowd Control strictness is set at the time at the event?\n\n    Corresponds to enum CrowdControlLevel in reddit-service-thing thing.thrift\n\n    categories:off,lenient,moderate,strict,null_value"
						}
					}
				},
				Ae = {
					$id: "http://com.reddit/schemas/field_definitions/crowd_source/crowd_source.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Model for Crowd-sourced data.",
					definitions: {
						old_geo_city: {
							type: "string",
							description: "The google maps or maxmind city value\n\n    format:^.+$"
						},
						geo_country: {
							type: "string",
							description: "The google maps or maxmind country value\n\n    format:^.+$"
						},
						geo_region: {
							type: "string",
							description: "The google maps or maxmind region value\n\n    format:^.+$"
						},
						old_place_id: {
							type: "string",
							description: "The google maps place_id value that previously existed\n\n    format:^.+$"
						},
						old_geo_region: {
							type: "string",
							description: "The google maps or maxmind region value that previously existed\n\n    format:^.+$"
						},
						geo_city: {
							type: "string",
							description: "The google maps or maxmind city value\n\n    format:^.+$"
						},
						old_geo_country: {
							type: "string",
							description: "The google maps or maxmind country value that previously existed\n\n    format:^.+$"
						},
						place_id: {
							type: "string",
							description: "The google maps place_id value\n\n    format:^.+$"
						}
					}
				},
				Se = {
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
							description: "Unique identifier for the custom feed.\n\n    format:^(\\/[_a-z0-9]+)+\\/$"
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
							description: "URL of the uploaded cover image.\n\n    format:^https:\\/\\/\\S+$"
						},
						visibility: {
							type: "string",
							description: "The visibility status of the custom feed.\n\n    categories:public,private,hidden"
						},
						number_subreddits: {
							type: "integer",
							description: "The number of subreddits in the custom feed."
						}
					}
				},
				De = {
					$id: "http://com.reddit/schemas/field_definitions/device/app.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Application information.",
					definitions: {
						name: {
							type: "string",
							description: "The name of the app/code base sending the event.\n    \n    Expected values:\n        * web: desktop site\n        * web2x: redesigned desktop site\n        * mweb: mobile site\n        * ios: Reddit-native iOS app\n        * android: Reddit-native Android app\n        * amp: Google's Accelerated Mobile Pages\n        * third party app name lowercased with _ for spaces\n\n    format:^[-_a-z0-9]+$\n    skip_validation:False"
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
							description: "Version of the native apps.\n\n    format:^\\d+[\\d\\.]+\\d$\n    skip_validation:False"
						},
						build_timestamp: {
							type: "number",
							description: "Unix timestamp of build, if known."
						}
					}
				},
				Ie = {
					$id: "http://com.reddit/schemas/field_definitions/device/platform.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Platform information.",
					definitions: {
						device_name: {
							type: "string",
							description: 'Manufacturer name of the device when device is known (mostly on mobile)\n    Example values:\n        * iPhone 7\n        * iPad Air 3\n        * Galaxy View 18.4" 32GB\n        * HTC Hero\n    format:^.+$'
						},
						device_id: {
							type: "string",
							description: "Installation uuid."
						},
						name: {
							type: "string",
							description: 'What "form factor" this is.\n\n    Example values: kubuntu, chromecast, iphone, etc.\n    format:^[-_a-z0-9]+$\n    skip_validation:False'
						},
						fingerprint: {
							type: "string",
							description: "Fingerprint for the browser."
						},
						os_version: {
							type: "string",
							description: "Version of the operating system.\n\n    format:^.+$"
						},
						device_tier: {
							type: "string",
							description: "The performance bucket for the request device's year class.\n\n    We group year classes into several buckets, so that we can measure\n    the performance of groups of devices with similar hardware characteristics.\n\n    categories:low,moderately_low,medium,moderately_high,high"
						},
						os_name: {
							type: "string",
							description: "Name of operating system.\n\n    Example values: window, osx, ios, android, linux, chromeos\n    Bad values: win32, xp, win, mac, macintel, ubuntu"
						},
						year_class: {
							type: "integer",
							description: "The year in which the request device would be considered high-end.\n\n    We measure the performance class for some mobile devices as\n    the year in which a device could be considered top of the line.\n\n    range:2000 -"
						},
						fingerprint_created_timestamp: {
							type: "number",
							description: "Timestamp when fingerprint was created."
						},
						browser_version: {
							type: "string",
							description: "Version of that browser.\n\n    format:^.+$"
						},
						browser_name: {
							type: "string",
							description: "Name of the browser that the client is running."
						}
					}
				},
				Fe = {
					$id: "http://com.reddit/schemas/field_definitions/device/screen.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Client machine display/screen characteristics.",
					definitions: {
						viewport_width: {
							type: "integer",
							description: "Screen width of the viewport. Will be set to 0 if the viewport is closed.\n\n    range:0 -"
						},
						ios_font_size: {
							type: "string",
							description: "Font size setting specified by iOS.\n\n    This can be changed by the user, but is not specific to our app.\n\n    Example values:\n        * xxxl\n        * ax_xl\n\n    categories:xs,s,m,l,xl,xxl,xxxl,ax_m,ax_l,ax_xl,ax_xxl,ax_xxxl"
						},
						app_font_size_delta: {
							type: "integer",
							description: "User-specified font size setting within the iOS app.\n    \n    The value is a delta, with 0 being the default size. Negatives are\n    smaller, and positives are larger.\n\n    range:-100 - 100"
						},
						height: {
							type: "integer",
							description: "Screen height of the device.\n\n    range:1 -"
						},
						view_type: {
							type: "string",
							description: "View types available.\n\n    categories:card,classic,compact,lightbox,post_detail,gallery"
						},
						android_font_size: {
							type: "number",
							description: "Font size setting specified by Android.\n\n    It is used as a multiplier, but some devices don't use 1.0 as a default.\n    This can be changed by the user, but is not specific to our app.\n\n    Example values:\n        * 0.8\n        * 1.0\n        * 1.2\n\n    range:0 -"
						},
						browser_tab_id: {
							type: "string",
							description: "UUID to differentiate between different browser tabs.\n\n    This is primarily used to improve time on site calculations when a user\n    has more than one tab open."
						},
						scroll_position: {
							type: "integer",
							description: "Scroll position of the screen in pixels.\n\n    range:0 -"
						},
						viewport_height: {
							type: "integer",
							description: "Screen height of the viewport. Will be set to 0 if the viewport is closed.\n\n    range:0 -"
						},
						in_focus: {
							type: "boolean",
							description: "Denotes whether the tab is in focus (Used in heartbeat event)."
						},
						auto_dark_mode: {
							type: "string",
							description: "Automatic dark mode setting.\n\n    The value that the user has selected for this setting in the native mobile apps.\n    iOS and Android have slightly different use cases. Battery saver mode only applies\n    to Android.\n\n    categories:off,follow_os,location_based\n    categories:battery_saver,location_based_and_battery_saver"
						},
						theme: {
							type: "string",
							description: "App theme, e.g. ponymode.\n\n    categories:alienbluemode,amoledmode,default,mintmode,nightmode,anonymousbrowsingmode,ponymode\n    categories:treesmode"
						},
						width: {
							type: "integer",
							description: "Screen width of the device.\n\n    range:1 -"
						}
					}
				},
				Re = {
					$id: "http://com.reddit/schemas/field_definitions/domain_ban/domain_ban.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Information regarding Domain Bans.",
					definitions: {
						regex: {
							type: "string",
							description: "Regexp required to match in order to ban url within the given domain. When left empty, the entire domain is banned.\n\n    format:^.+$"
						},
						url: {
							type: "string",
							description: "URL/Domain that will be banned or unbanned.\n\n    format:^.+$"
						},
						no_email: {
							type: "boolean",
							description: "Is email domain forbidden?"
						},
						shame_message: {
							type: "string",
							description: "Message shown to accounts trying to post to this domain. Will be empty, unless shame is turned on.\n\n    format:^.+$"
						},
						inspector_exempt_regex: {
							type: "string",
							description: "Exemptions for banning, using regex. Will usually be left empty.\n\n    format:^.+$"
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
							description: "Internal ban message for this domain. Can be left empty.\n\n    format:^.+$"
						}
					}
				},
				ze = {
					$id: "http://com.reddit/schemas/field_definitions/econ/purchase.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Attributes of buy or cancel actions for digital products.",
					definitions: {
						count: {
							type: "integer",
							description: "Number of units.\n\n    Count and price depends on product definition.\n    Some products might be sold 1 by 1 then you can buy 13 things for $1.99 each.\n    Some products might be only sold in packs (like 750 couns + 3 days premium is a product) and you buy just one for $2.99\n\n    In any case money spend (payment_amount_in_smallest_denom) = count * price\n\n    range:1 -"
						},
						order_id: {
							type: "string",
							description: "Order associated with concrete billing event.\n\n    format:^[a-zA-Z0-9_\\.-]{1,120}$"
						},
						product_version: {
							type: "integer",
							description: "product_id, product_version and subreddit_id define product being purchased.\n\n    range:0 -"
						},
						product_type: {
							type: "string",
							description: "Kind (or family) of the product being purchased."
						},
						price_micros: {
							type: "integer",
							description: "Price of a single unit in a smallest denominator of the currency (e.g. cents for USD).\n\n    range:0 -"
						},
						product_id: {
							type: "string",
							description: "product_id, product_version and subreddit_id define product being purchased.\n\n    format:^[a-zA-Z0-9_\\.-]{1,120}$"
						},
						currency: {
							type: "string",
							description: "Currency used in the transaction, e.g. usd or coins.\n    \n    categories:usd,coins"
						},
						subscription_id: {
							type: "string",
							description: "For `type = new | update | renew` subscription_id links operations on a particular subscription.\n\n    format:^[a-zA-Z0-9_\\.-]{1,120}$"
						},
						count_remaining: {
							type: "integer",
							description: "Present on subscriptions update. Number of units remaning in subscription after update.\n\n    range:0 -"
						},
						type: {
							type: "string",
							description: "Regular purchase has type `once`. Subscriptions are new, update, renew.\n\n    Subscription cancellation is also an `update`, while `review` is automated billing\n    at the end of the billing cycle.\n\n    categories:once,new,update,renew"
						},
						days_remaining: {
							type: "integer",
							description: "For reccuring payments how many days left till the next payment (even if it's cancelled)."
						}
					}
				},
				Oe = {
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
							description: "Subject line of the email.\n\n    format:^.+$"
						},
						preview_text: {
							type: "string",
							description: "Preview text of the email.\n\n    format:^.+$"
						},
						header_text: {
							type: "string",
							description: 'The text that\'s in the header of the email, e.g. "Top posts on Reddit".\n\n    format:^.+$'
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
				Ce = {
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
							description: 'Prompt used to solicit feedback\n\n    Example value: "Would you use this feature?"\n    format:^\\S+$'
						},
						variant: {
							type: "string",
							description: "Variants of the test.\n\n    Example values: variant_1, red_dialog"
						},
						response: {
							type: "string",
							description: 'Open-ended response recorded from the test.\n\n    Example values: "yes", "I don\'t like this because..."\n    format:\\S'
						},
						id: {
							type: "integer",
							description: "Unique identifier of the click test.\n\n    range:0 -"
						},
						owner: {
							type: "string",
							description: "Team that owns the click test."
						},
						page_type: {
							type: "string",
							description: 'Type of page collecting user feedback.\n\n    Expected values are: "question", "yes", "no".\n\n    categories:question,yes,no'
						}
					}
				},
				Ue = {
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
							description: "Brief desription of the experiment's impact on a user experience.\n\n    format:^.{0,200}$"
						},
						start_timestamp: {
							type: "number",
							description: "Timestamp of the start of the experiment."
						},
						github_link: {
							type: "string",
							description: "Github link for an event's appropriate expose emit log.\n\n    format:^https:\\/\\/github\\.snooguts\\.net\\S+$"
						},
						version: {
							type: "string",
							description: "Experiment version.\n\n    format:^[0-9]+(\\.[0-9]+)*$"
						},
						variant_names: {
							type: "array",
							description: "List of all experiment variants."
						},
						id: {
							type: "integer",
							description: "Unique identifier of the experiment.\n\n    range:0 -"
						},
						bucketing_value: {
							type: "string",
							description: "The value used to bucket the experiment.\n\n    This value may be redundant with another value within the schema,\n    but is intended to provide a single place to be able to pull out\n    this value, and to ensure that it gets sent on every experiment even\n    if it isn't explicitly sent as additional inputs on the variant call."
						},
						qa_proxy_event: {
							type: "string",
							description: "app_name, source, action, noun, action_info_page_type (ASANA) that fires near the expose event.\n\n    This is used to sanity check the volume of exposure events being fired.\n\n    format:^([_a-z]+\\/){4}[_a-z]+$"
						},
						owner: {
							type: "string",
							description: "Team that owns the experiment, or contact email of owner.\n\n    format:^[-_a-z0-9.]+(@reddit\\.com)?$"
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
				Le = {
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
							description: "Version of the feature.\n\n    Format as a semantic version e.g. v1.2.3\n\n    format:^v[0-9]+\\.[0-9]+\\.[0-9]+$\n    skip_validation:False"
						},
						version_description: {
							type: "string",
							description: "Short description of the feature version.\n\n    Identifies the distinguishing changes in this version of the feature.\n\n    Examples:\n    - \"This version of the discovery unit has title 'Discover more'\"\n    - \"This version of the discovery unit has title including the topic name,\n        e.g. 'Discover more in Fashion'\"\n\n    format:^.{1,256}$\n    skip_validation:False"
						}
					}
				},
				Ne = {
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
				Me = {
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
							description: "Total amount of ads credits to be used before accruing balance.\n\n    range:0 -"
						},
						name: {
							type: "string",
							description: "The name of the funding instrument.\n\n    format:^.+$"
						},
						writeoff_micros: {
							type: "integer",
							description: "Field for admins to manually adjust a 'billable amount' on a funding instrument, in microdollars.\n\n    range:0 -"
						},
						spent_freebies_micros: {
							type: "integer",
							description: "Total amount of ads credit used, in microdollars.\n\n    range:0 -"
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
							description: "User selected threshold to be billed when amount is reached, in microdollars.\n\n    range:0 -"
						},
						total_payment_micros: {
							type: "integer",
							description: "Total amount of payment to Reddit, in microdollars.\n\n    range:0 -"
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
							description: "Amount in credit line, in microdollars.\n\n    range:0 -"
						},
						max_billing_threshold_micros: {
							type: "integer",
							description: "Max value for user billing_threshold_micros, in microdollars.\n\n    range:0 -"
						},
						original_payment_id: {
							type: "string",
							description: "Original payment id required for refunds.\n\n    format:^\\d+[\\d\\.]+\\d$"
						},
						user_id: {
							type: "string",
							description: "Owner of the funding instrument."
						},
						authorize_payment_profile_id: {
							type: "string",
							description: "Payment Profile id in Authorize.\n\n    format:^\\d+[\\d\\.]+\\d$"
						},
						total_refund_micros: {
							type: "integer",
							description: "Total amount of refund, in microdollars.\n\n    range:0 -"
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
							description: "Pointer to external payment id (currently stored in authorize_transactions_by_user).\n\n    format:^\\d+[\\d\\.]+\\d$"
						},
						adzerk_lifetime_micros: {
							type: "integer",
							description: "This is original spent value from legacy Adzerk, in microdollars.\n\n    range:0 -"
						},
						overdelivery_micros: {
							type: "integer",
							description: "Total amount of overdelivery, in microdollars.\n\n    range:0 -"
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
							description: "Profile id in Authorize.\n\n    format:^\\d+[\\d\\.]+\\d$"
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
							description: "The type of the funding instrument.\n\n    categories:credit_card,credit_line,insertion_order,placeholder"
						},
						estimated_spending_micros: {
							type: "integer",
							description: "Total estimate of spend past most recent rollup, in microdollars.\n\n    range:0 -"
						},
						total_spending_micros: {
							type: "integer",
							description: "Total amount of delivery, in microdollars.\n\n    range:0 -"
						},
						balance_micros: {
							type: "integer",
							description: "Current balance amount, in microdollars.\n\n    format:.*"
						},
						level: {
							type: "string",
							description: "The level of the funding instrument.\n    categories:advertiser,campaign"
						},
						active: {
							type: "boolean",
							description: "Is the funding instrument active."
						},
						netsuite_customer_internal_id: {
							type: "string",
							description: "Net Suite customer internal id.\n\n    format:^\\d+[\\d\\.]+\\d$"
						}
					}
				},
				He = {
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
							description: "A string giving the reason for the Geo Block (e.g. NetzDG request, general legal request, ...)\n\n    categories:general,netzdg,fto"
						},
						public_note: {
							type: "string",
							description: "Note that is displayed when users from targeted countries land on geo-blocked content.\n\n    format:^.+$"
						}
					}
				},
				We = {
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
							description: "Number of coins given monthly as part of membership.\n\n    range:0 -"
						},
						source: {
							type: "string",
							description: "The type of page if referring page was related to Gold.\n    Note: To be deprecated with goldv1.\n\n    categories:listing,direct,gold_coin,about_gold,gold_tracker,gold_dialog\n    categories:gilding,gold_purchase,gold_message\n    categories:hide_ads,premium_marketing,coins_marketing,give_gold,in_feed_unit\n    categories:cancel_premium_offer,gold_award"
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
							description: "Type of content being rewarded with a gild.\n\n    categories:post,comment,stream"
						},
						number_creddits: {
							type: "integer",
							description: "Number of creddits purchased.\n    Note: To be deprecated with goldv1.\n\n    range:0 -"
						},
						one_time_type: {
							type: "string",
							description: "Type of one-time purchase, e.g. through a gift code.\n    Note: To be deprecated with goldv1.\n\n    categories:self,gift_user,gift_code"
						},
						number_coins: {
							type: "integer",
							description: "Number of coins awarded as part of subscription signup or spent in a transaction.\n\n    format:.*"
						},
						number_months: {
							type: "integer",
							description: "Number of months-worth of gold purchased.\n    Note: To be deprecated with goldv1.\n\n    Current expected values: 1, 3, 12, 24, 36\n    range:0 -"
						},
						number_coins_bonus: {
							type: "integer",
							description: "Number of one-time coins given as part of subscription signup.\n\n    range:0 -"
						},
						transaction_id: {
							type: "string",
							description: "ID for specific Gold transaction.\n\n    format:^[_.\\-a-zA-Z0-9]*$"
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
							description: "Count of characters in gift message.\n\n    range:0 -"
						},
						type: {
							type: "string",
							description: "Type of Premium subscription, gilding, or coin purchase.\n\n    categories:one_time,subscription,creddits\n    categories:new,renew,gift_code\n    categories:gid_1,gid_2,gid_3\n    categories:gid_mod,gid_community,gid_appreciation,gid_premium,gid_group,gid_global,gid_unknown\n    categories:coins_gid_mod,coins_gid_community,coins_gid_appreciation,coins_gid_premium,coins_gid_global,coins_gid_unknown\n    categories:coins_gid_1,coins_gid_2,coins_gid_3\n    categories:premium,coins\n    categories:buy_premium,renew_premium\n    categories:buy_coins,purchase_award,receive_award,non_paying_drip\n    categories:receive_premium,purchase_premium_via_coins,gold_purchase\n    categories:poll_predict"
						},
						award_id: {
							type: "string",
							description: "ID of given award.\n\n    format:^(award_[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12})|(gid_\\d+)$"
						},
						purchased_coins: {
							type: "boolean",
							description: "Was the action accompanied by a coin purchase?"
						},
						subscription_type: {
							type: "string",
							description: "Period of subscription, e.g. monthly or yearly.\n\n    categories:monthly,yearly"
						},
						default_option: {
							type: "string",
							description: "Default award type when gilding.\n\n    categories:silver,gold,supergold\n    categories:gid_1,gid_2,gid_3\n    categories:gid_mod,gid_community,gid_global"
						}
					}
				},
				Be = {
					$id: "http://com.reddit/schemas/field_definitions/grapeshot_classification/grapeshot_classification.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the characteristics of a post classification from Grapeshot.",
					definitions: {
						categories: {
							type: "array",
							description: "Set of strings returned as violation & segment categories for the post from Grapeshot."
						}
					}
				},
				Ve = {
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
							description: "Text of the note.\n\n    format:^.+$"
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
							description: "JSON text blob of the state of the game when the event fired.\n\n    Format is [{note_id: note_text}, ...]\n\n    format:^.+$"
						}
					}
				},
				Qe = {
					$id: "http://com.reddit/schemas/field_definitions/inbox/inbox.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields for the client and server side notifications inbox.",
					definitions: {
						tab: {
							type: "string",
							description: "Tab of the inbox a user is viewing.\n\n    categories:activity,messages,modmail"
						},
						badge_count: {
							type: "integer",
							description: "Badge count on the inbox tab when the user views it.\n    \n    range:0 -"
						},
						is_clicked: {
							type: "boolean",
							description: "Whether the inbox message has been clicked.\n\n    This means a user has selected the message from the inbox and the client has marked it as read on the backend."
						},
						id: {
							type: "string",
							description: "Unique identifier for the inbox message.\n    \n    The static identifier is used by both backend and client. This value should be unique per user per inbox item.\n\n    Values may either be UUIDs, or for inbox messages, thing ids corresponding to messages.\n\n    format:^[-a-zA-Z0-9]+$"
						},
						is_viewed: {
							type: "boolean",
							description: "Whether the inbox message has been viewed.\n\n    Denotes whether the inbox item has been viewed on screen before. This means the user has received it from the server and at least opened the inbox tab to see the message presented there."
						}
					}
				},
				Je = {
					$id: "http://com.reddit/schemas/field_definitions/legal_export_request/legal_export_request.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Model for legal export requests.",
					definitions: {
						requested_information: {
							type: "array",
							description: "A list of (lowercase) strings giving the requested information."
						},
						ads_data_status: {
							type: "string",
							description: "The status of the ads data for the user the request refers to.\n\n    categories:unknown,not_present,present_not_sent,present_sent"
						},
						has_ndo: {
							type: "boolean",
							description: "A boolean flag discriminating whether or not the legal export request has an attached NDO.\n    *"
						},
						received_timestamp: {
							type: "number",
							description: "The date when the legal export request was received."
						},
						status: {
							type: "string",
							description: "A string giving the status of the request when the event was emitted.\n\n    categories:not_started,pending,completed,error,closed"
						},
						user_ids: {
							type: "array",
							description: "A list with the reddit ids of the users the legal request refers to.\n\n    Note: In most of the cases the list will have a single element."
						},
						type: {
							type: "string",
							description: "A string giving the type of the legal export request.\n\n    categories:subpoena,court_order,search_warrant,pen_register,trap_and_trace_order\n    categories:emergency_disclosure_request,preservation_request,ncmec_preservation,civil_subpoena\n    categories:civil_court_order,criminal_defense_subpoena,criminal_defense_court_order\n    categories:gdpr_request_for_user_data,foreign_request_for_production\n    categories:foreign_request_for_preservation,preservation_to_production"
						},
						gifts_data_status: {
							type: "string",
							description: "The status of the gifts data for the user the request refers to.\n\n    categories:unknown,not_present,present_not_sent,present_sent"
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
				Ge = {
					$id: "http://com.reddit/schemas/field_definitions/live_thread/live_thread.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Live Threads are ongoing events that pop up in reddit.com/live\n\nLive threads are also used for annoucements for some reason.",
					definitions: {
						id: {
							type: "string",
							description: 'Live thread ID. Formatted as base36, e.g. "11sl1svj5tn5p".\n\n    format:^[a-z0-9]+$'
						},
						is_announcement: {
							type: "boolean",
							description: "Is this an announcement?"
						}
					}
				},
				Ze = {
					$id: "http://com.reddit/schemas/field_definitions/metaflair/meta_flair.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: 'Flairs defined by Reddit.\n\nMeta Flair is the more generalized replacement for Subreddit Categories. Meta Flairs have an ID and a title, and\nshould be viewed in a similar scope to a "Post" or a "Subreddit" as it is a specific piece of content that the user\nmay click or view.',
					definitions: {
						id: {
							type: "string",
							description: "Unique id for the MetaFlair.\n\n    format:^c[0-9]+$"
						},
						title: {
							type: "string",
							description: 'The human-readable display name for the category, e.g. "Animals" or "Pics & GIFs".\n\n    format:^.{1,64}$'
						}
					}
				},
				Ke = {
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
							description: "Post Flair option for search item.\n\n    format:^\\S.*$"
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
							description: "Search query presented to the user.\n\n    format:^.*$"
						},
						raw_query: {
							type: "string",
							description: "Actual query string backing the search item.\n\n    format:^.*$"
						},
						range: {
							type: "string",
							description: "Range option for search item, e.g. hour, day, week.\n\n    categories:hour,day,week,month,year,all"
						},
						sort: {
							type: "string",
							description: "Sorting option for search item.\n\n    categories:hot,new,rising,top,controversial,gilded,wiki,promoted,best\n    categories:confidence,qa,old,live,relevance,comments,timestamp,score,upvotes"
						},
						structure_type: {
							type: "string",
							description: 'Structure Type of search item.\n\n    Example values: "trending", "recent", "related", etc.'
						},
						meta_flair_name: {
							type: "string",
							description: "The display title of the MetaFlair option.\n\n    format:^\\S.*$"
						}
					}
				},
				Ye = {
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
							description: 'An array of categories for the subreddit e.g. ["Advice", "DIY"].'
						}
					}
				},
				Xe = {
					$id: "http://com.reddit/schemas/field_definitions/midas/geo.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Midas-enriched geographical fields.",
					definitions: {
						city: {
							type: "string",
							description: "City of the user.\n\n    format:^.{1,128}$"
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
							description: "Metro code aka DMA region code of the location if location is in US.\n\n    range:500 - 881"
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
							description: 'Short form country code e.g. "US".\n\n    format:^[A-Z]{2}$'
						},
						region: {
							type: "string",
							description: 'State or province within a country e.g. "CA".\n\n    The format of this field can change depending on the country. For example, in the US it is the two letter\n    state code. Australia is three letter codes, Singapore contains digits, etc.\n\n    format:^([A-Z]{1,3}|\\d+[A-Z]?|[A-Z][0-9])$'
						},
						time_zone: {
							type: "string",
							description: 'ISO time zone string e.g. "America/Los_Angeles".\n\n    format:^[-A-Za-z_\\/]+$'
						}
					}
				},
				et = {
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
				tt = {
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
				it = {
					$id: "http://com.reddit/schemas/field_definitions/midas/url_parsed.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Midas-enriched url parsing.",
					definitions: {
						utm_source: {
							type: "string",
							description: "The top-level source of the UTM referral (standardized).\n\n    categories:bd,email,paid,share,social,reddit,xpromo"
						},
						shared_hash: {
							type: "string",
							description: 'Shared hash from the url parameters e.g. "c0138fa2".\n\n    format:^[a-z0-9]{8}$'
						},
						shared_timestamp: {
							type: "number",
							description: "Shared timestamp from the url parameters."
						},
						utm_content: {
							type: "string",
							description: "For differentiating otherwise identical links to the same content with different copy.\n\n    format:^[\\S ]{0,256}$"
						},
						utm_campaign: {
							type: "string",
							description: "For differentiating what campaign this content is coming from.\n\n    format:^[\\S ]{0,256}$"
						},
						utm_medium: {
							type: "string",
							description: "The specific type of element that the referrer came through (standardized).\n\n    categories:amp,android_app,appstore_search,bing_search,digest,email,facebook\n    categories:facebook_retargeting,google_retarget,google_search,ios_app,mweb\n    categories:paid,playstore_search,share,twitter,web2x,xpromo"
						},
						utm_name: {
							type: "string",
							description: "The name or edition of the campaign running, link, or date of newsletter.\n\n    format:^[\\S ]{0,256}$"
						},
						utm_term: {
							type: "string",
							description: "The term of of the referrer. Subject content, etc.\n\n    format:^[\\S ]{0,256}$"
						}
					}
				},
				nt = {
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
							description: 'Feature blob used to product the prediction.\n\n    Format is:\n    {"feature_name_0": "value0", "fature_name_1": "another_value", ...}\n\n    If used, please check in with the Data team to assess data volume and user security concerns.\n    \n    format:.+'
						},
						prediction_scores: {
							type: "string",
							description: 'JSON containing raw classification score correspond to each label.\n\n    The field is used for BINARY or MULTICLASS models.\n\n    Example:\n    {"label_1": "0.8", "label_2": "0.2", ...}\n\n    format:^{.+}$'
						},
						client_name: {
							type: "string",
							description: "The name of the client issuing the ML prediction request (e.g. admin_tool).\n\n    format:.+"
						},
						prediction: {
							type: "string",
							description: "The prediction made by the model. If numeric, still store as a string.\n    \n    format:.+"
						},
						version: {
							type: "string",
							description: "Version of the model to help distinguish between iterations or training set.\n\n    Examples include v1, 0.1, 20190903, etc.\n\n    format:.+"
						},
						prediction_id: {
							type: "string",
							description: "A string giving a unique id for the prediction request.\n\n    The id is supplied by the client when issuing the prediction request. Clients are encouraged to\n    use the hex representation of a randonly generated v4 UUID but the type of the field is string\n    to keep it generic for other possible formats.\n\n    format:.+"
						},
						owner: {
							type: "string",
							description: "Team responsible for maintaining this model."
						},
						type: {
							type: "string",
							description: "The type of the ML predictive model used to fulfill the prediction request.\n\n    categories:binary,multiclass,regression"
						}
					}
				},
				st = {
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
				ot = {
					$id: "http://com.reddit/schemas/field_definitions/mute/mute.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents information about mute history and length for the associated mute.",
					definitions: {
						total_mutes: {
							type: "integer",
							description: "The total number of mutes this user has had for this subreddit.\n\n    range:0 -"
						},
						last_mute_timestamp: {
							type: "number",
							description: "The starting time (epoch ms) of the most recent mute."
						},
						state: {
							type: "string",
							description: "The length of this mute, defined as a string.\n\n    categories:temp_3d,temp_7d,temp_28d,permanent"
						}
					}
				},
				rt = {
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
							description: 'If a message was dropped, the name of the object that made the decision to drop the message.\n\n    Example values:\n        * "UserPrefsDecider" - user disabled the given message_type.\n        * "PerUserMessageTypeDecider" - message was ratelimited for the recipient based on its message_type.\n        * "UsernameMentionPushNotificationRenderer" - notification renderer could not find any active devices\n            for the recipient.\n\n    format:^[a-zA-Z0-9_]+$'
						},
						region_num: {
							type: "integer",
							description: "Used to distinguish the device's region as an integer.\n\n    Example values:\n        * 0 for US, 1 for EU, 2 for APAC\n\n    range:0 -"
						},
						message_id: {
							type: "string",
							description: "UUID for the message sent as a notification.\n\n    Note that multiple notifications can have the same message id."
						},
						notification_target: {
							type: "string",
							description: 'Hash of the "target" of the notification.\n\n    Note that different notification types have different targets.\n\n    Values:\n        * push: push token\n        * email: email address\n\n    format:^([a-f0-9]{64}|[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+)$'
						},
						message_variant: {
							type: "string",
							description: 'Used to distinguish different sub-types within a given message_type.\n\n    For example, trending notifications send in two phases, one "explore" phase and one "exploit" phase.  This value is\n    used to distinguish between messages sent in each of those phases.\n\n    Example values:\n        * "explore"/"exploit" for "lifecycle_post_suggestions" notifications\n\n    format:^[a-z0-9_]+$'
						},
						notification_transport: {
							type: "string",
							description: 'The transport that a notification is sent by.\n\n    For example "push" for push notifications or "email" for emails.'
						},
						region: {
							type: "string",
							description: 'Used to distinguish the device\'s region.\n\n    Example values:\n        * "america", "europe", "asia_pacific"\n\n    format:^[a-z0-9_]+$'
						},
						delivery_queue_name: {
							type: "string",
							description: "The Deliveryman message queue that Mailroom enqueued a notification to."
						}
					}
				},
				at = {
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
				dt = {
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
							description: "The app, e.g. ios or android, the notification is sent to.\n\n    categories:ios,android,desktop_chrome,android_chrome,desktop_edge,desktop_firefox,desktop_opera,unknown,email"
						},
						status: {
							type: "string",
							description: "The status of the request that was made.\n\n    categories:success,fail"
						},
						platform: {
							type: "string",
							description: "The push notification platform used.\n\n    categories:apns,apns_sandbox,apns_qa,apns_qa_sandbox,gcm,desktop_chrome,android_chrome,desktop_edge,desktop_firefox,desktop_opera"
						},
						recipient_device_id: {
							type: "string",
							description: "The device identifier for the recipient.\n\n    format:^(([a-f0-9]{64})|([a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}))$"
						},
						source_queue_name: {
							type: "string",
							description: "The message queue that the notification was read from."
						}
					}
				},
				ct = {
					$id: "http://com.reddit/schemas/field_definitions/outbound/outbound.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Information about visiting outbound urls.",
					definitions: {
						url: {
							type: "string",
							description: "Outbound url the user visited.\n    \n    There's a lot of URL formats and it's pain to match them all.\n    Examples: google.com, https://google.com, /r/subreddit, /u/username, about:blank, etc.\n    format:^\\S+$"
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
							description: "Source element of this outbound click.\n\n    categories:listing_post_image,listing_post_link,listing_post_detail,post_image,post_link,post_detail,comment"
						}
					}
				},
				mt = {
					$id: "http://com.reddit/schemas/field_definitions/payment/payment.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the characteristics of any event that involves a purchase.",
					definitions: {
						stored_credit_card_state: {
							type: "string",
							description: "State of using a saved or saving a new credit card.\n\n    categories:save_new,save_existing"
						},
						method: {
							type: "string",
							description: "Method used for purchase, e.g. credit card or paypal.\n\n    categories:creddit,credit_card,bitcoin,paypal,apple_pay,google_pay,coins"
						},
						amount_in_smallest_denom: {
							type: "integer",
							description: "Price in the smallest unit of the currency (cents for USD).\n\n    range:0 -"
						},
						currency: {
							type: "string",
							description: 'Currency used for purchase (e.g. "USD").\n\n    format:^[A-Z]{3}$'
						},
						default_option: {
							type: "string",
							description: "Default payment type selected when purchasing.\n\n    categories:paypal,credit_card"
						}
					}
				},
				pt = {
					$id: "http://com.reddit/schemas/field_definitions/perspective/perspective.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Perspective is an API provided by TODO that does NLP on comments provides\nlabels",
					definitions: {
						inflammatory: {
							type: "number",
							description: '"inflammatory" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.\n\n    range:0.0 - 1.0'
						},
						max_identity_attack: {
							type: "number",
							description: 'Max allowed value for the "identity_attack" attribute\n    at the moment the message is scored.\n\n    range:0.0 - 1.0'
						},
						max_sexually_explicit: {
							type: "number",
							description: 'Max allowed value for the "sexually_explicit" attribute\n    at the moment the message is scored.\n\n    range:0.0 - 1.0'
						},
						obscene: {
							type: "number",
							description: '"obscene" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.\n\n    range:0.0 - 1.0'
						},
						toxicity: {
							type: "number",
							description: '"toxicity" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.\n\n    range:0.0 - 1.0'
						},
						max_attack_on_commenter: {
							type: "number",
							description: 'Max allowed value for the "attack_on_commenter" attribute\n    at the moment the message is scored.\n\n    range:0.0 - 1.0'
						},
						max_obscene: {
							type: "number",
							description: 'Max allowed value for the "obscene" attribute\n    at the moment the message is scored.\n\n    range:0.0 - 1.0'
						},
						profanity: {
							type: "number",
							description: '"profanity" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.\n\n    range:0.0 - 1.0'
						},
						max_flirtation: {
							type: "number",
							description: 'Max allowed value for the "flirtation" attribute\n    at the moment the message is scored.\n\n    range:0.0 - 1.0'
						},
						max_spam: {
							type: "number",
							description: 'Max allowed value for the "spam" attribute\n    at the moment the message is scored.\n\n    range:0.0 - 1.0'
						},
						collapse_reasons: {
							type: "array",
							description: "List of perspective reasons the comment being collapsed for."
						},
						max_inflammatory: {
							type: "number",
							description: 'Max allowed value for the "inflammatory" attribute\n    at the moment the message is scored.\n\n    range:0.0 - 1.0'
						},
						max_insult: {
							type: "number",
							description: 'Max allowed value for the "insult" attribute\n    at the moment the message is scored.\n\n    range:0.0 - 1.0'
						},
						insult: {
							type: "number",
							description: '"insult" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.\n\n    range:0.0 - 1.0'
						},
						max_unsubstantial: {
							type: "number",
							description: 'Max allowed value for the "unsubstantial" attribute\n    at the moment the message is scored.\n\n    range:0.0 - 1.0'
						},
						max_toxicity: {
							type: "number",
							description: 'Max allowed value for the "toxicity" attribute\n    at the moment the message is scored.\n\n    range:0.0 - 1.0'
						},
						max_profanity: {
							type: "number",
							description: 'Max allowed value for the "profanity" attribute\n    at the moment the message is scored.\n\n    range:0.0 - 1.0'
						},
						sexually_explicit: {
							type: "number",
							description: '"sexually_explicit" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.\n\n    range:0.0 - 1.0'
						},
						max_threat: {
							type: "number",
							description: 'Max allowed value for the "threat" attribute\n    at the moment the message is scored.\n\n    range:0.0 - 1.0'
						},
						id: {
							type: "string",
							description: "UUID generated by a scoring system to keep track of the scores."
						},
						attack_on_commenter: {
							type: "number",
							description: '"attack_on_commenter" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.\n\n    range:0.0 - 1.0'
						},
						max_likely_to_reject: {
							type: "number",
							description: 'Max allowed value for the "likely_to_reject" attribute\n    at the moment the message is scored.\n\n    range:0.0 - 1.0'
						},
						unsubstantial: {
							type: "number",
							description: '"unsubstantial" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.\n\n    range:0.0 - 1.0'
						},
						severe_toxicity: {
							type: "number",
							description: '"severe_toxicity" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.\n\n    range:0.0 - 1.0'
						},
						flirtation: {
							type: "number",
							description: '"flirtation" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.\n\n    range:0.0 - 1.0'
						},
						max_severe_toxicity: {
							type: "number",
							description: 'Max allowed value for the "severe_toxicity" attribute\n    at the moment the message is scored.\n\n    range:0.0 - 1.0'
						},
						identity_attack: {
							type: "number",
							description: '"identity_attack" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.\n\n    range:0.0 - 1.0'
						},
						threat: {
							type: "number",
							description: '"threat" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.\n\n    range:0.0 - 1.0'
						},
						max_attack_on_author: {
							type: "number",
							description: 'Max allowed value for the "attack_on_author" attribute\n    at the moment the message is scored.\n\n    range:0.0 - 1.0'
						},
						max_incoherent: {
							type: "number",
							description: 'Max allowed value for the "incoherent" attribute\n    at the moment the message is scored.\n\n    range:0.0 - 1.0'
						},
						spam: {
							type: "number",
							description: '"spam" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.\n\n    range:0.0 - 1.0'
						},
						attack_on_author: {
							type: "number",
							description: '"attack_on_author" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.\n\n    range:0.0 - 1.0'
						},
						likely_to_reject: {
							type: "number",
							description: '"likely_to_reject" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.\n\n    range:0.0 - 1.0'
						},
						incoherent: {
							type: "number",
							description: '"incoherent" score provided by Perspective API.\n\n    This is a probability score from 0.0 to 1.0.\n\n    range:0.0 - 1.0'
						}
					}
				},
				_t = {
					$id: "http://com.reddit/schemas/field_definitions/playback/playback.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents fields related to a specific user's interactions with a video.",
					definitions: {
						scrubbing_start_ms: {
							type: "integer",
							description: "The time (in milliseconds) in the video where the user starts scrubbing player.\n\n    range:0 -"
						},
						chat_state: {
							type: "string",
							description: "The chat display state of the video playback.\n\n    Values and their definitions:\n      * none: No chat displayed as overlay on the video\n      * full_screen: A full screen chat overlay on the video\n      * compact: A partial screen chat overlay on the video\n      \n    categories:none,full_screen,compact"
						},
						watch_duration_ms: {
							type: "integer",
							description: "The elapsed time (in milliseconds) of content watched since the start of the video playback session.\n\n    range:0 -"
						},
						timestamp_ms: {
							type: "integer",
							description: "The current timestamp (in milliseconds) in the video.\n\n    range:0 -"
						},
						player_type: {
							type: "string",
							description: "The player type of the video presentation\n\n    Values and their definitions:\n      * theater: The full screen RPAN theater experience\n      * feed_post: A stream as a post type embedded in a feed of posts\n      * discovery_unit: A stream embedded as part of a discovery unit\n      \n    categories:theater,feed_post,discovery_unit"
						},
						start_time_ms: {
							type: "integer",
							description: "The timestamp (epoch milliseconds) when the playback session started.\n\n    range:0 -"
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
							description: "The time offset (absolute value, in milliseconds) of the playhead from the maximum available timestamp of the video.\n\n    range:0 -"
						},
						session_duration_ms: {
							type: "integer",
							description: "The time (in milliseconds) since the start of the video playback session.\n\n    range:0 -"
						},
						heartbeat_duration_ms: {
							type: "integer",
							description: "The elapsed time (in milliseconds) of content watched since the last heartbeat of this playback session.\n\n    range:0 -"
						},
						volume: {
							type: "integer",
							description: "The audio volume of the video playback, on a scale from 0 to 100 where 0 is muted.\n\n    range:0 - 100"
						},
						scrubbing_end_ms: {
							type: "integer",
							description: "The time (in milliseconds) in the video where the user ends scrubbing player.\n\n    range:0 -"
						}
					}
				},
				ft = {
					$id: "http://com.reddit/schemas/field_definitions/poll/poll.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Details about a poll in poll post.",
					definitions: {
						user_vote_text: {
							type: "string",
							description: "Contains the text of the option the user voted on.\n\n    NOTE: This is only attached to user vote actions.\n    format:.+"
						},
						options_length: {
							type: "integer",
							description: "The number of options in the poll.\n\n    range:1 -"
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
							description: "The number of coins associated with the chosen prediction option.\n    range:0 -"
						},
						type: {
							type: "string",
							description: "Type of the poll.\n    \n    Values and their definitions:\n        * poll: Regular poll with voting\n        * predict: Prediction, to be participated with Reddit Coins\n    categories:poll,predict"
						}
					}
				},
				ht = {
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
							description: "Text shown to the user.\n\n    format:^.+$"
						}
					}
				},
				lt = {
					$id: "http://com.reddit/schemas/field_definitions/post_draft/post_draft.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the characteristics of a post draft.",
					definitions: {
						url_length: {
							type: "integer",
							description: "Length of the URL for link drafts.\n\n    range:0 -"
						},
						title_length: {
							type: "integer",
							description: "Length of the draft title.\n\n    range:0 -"
						},
						number_rte_videos: {
							type: "integer",
							description: "Number of videos in the rich text draft.\n\n    range:0 -"
						},
						flair: {
							type: "string",
							description: "Flair text of the draft.\n\n    format:^[^\\n]{0,64}$"
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
							description: "Length of the draft content.\n\n    range:0 -"
						},
						type: {
							type: "string",
							description: "Type of the draft.\n\n    Values and their definitions:\n        * self: markdown text\n        * link: link draft\n        * image: image draft\n        * video: video draft\n        * multi_media: rich text draft (RTE)\n\n    categories:self,link,image,video,multi_media"
						},
						original_content: {
							type: "boolean",
							description: "Is the draft flagged as original content."
						},
						number_rte_images: {
							type: "integer",
							description: "Number of images in the rich text draft.\n\n    range:0 -"
						}
					}
				},
				ut = {
					$id: "http://com.reddit/schemas/field_definitions/post_requirement/post_requirement.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Requirements for a post to be submitted to a subreddit.",
					definitions: {
						title_text_max_length: {
							type: "integer",
							description: "The maximum length of the title.\n\n    range:0 -"
						},
						title_blacklisted_strings: {
							type: "array",
							description: "A list of strings that are prohibited in the post title."
						},
						number_repost_frequency_days: {
							type: "integer",
							description: "Days since a link was posted before it can be reposted.\n\n    range:0 -"
						},
						link_whitelisted_domains_length: {
							type: "integer",
							description: "Number of domains in the link whitelist.\n\n    range:0 -"
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
							description: "The minimum length of the title.\n\n    range:0 -"
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
							description: "Number of domains in the link blackist.\n\n    range:0 -"
						},
						body_restriction_policy: {
							type: "string",
							description: "Determines if we require or prohibit text in post bodies.\n\n    categories:optional,required,disabled"
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
				gt = {
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
							description: "The display title for post flair.\n\n    Note that post flairs are restricted to 64 characters, but the validator\n    fails on unicode values, hence no length restrictions in the following\n    regex pattern.\n\n    format:^[^\\n]+$"
						}
					}
				},
				yt = {
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
							description: "Powerups count (for allocation/deallocation).\n\n    range:1 -"
						},
						is_grace_period: {
							type: "boolean",
							description: "If subreddit is currently in a grace period."
						},
						tier: {
							type: "integer",
							description: "Current effective Subreddit tier.\n\n    range:1 -"
						},
						paid_count: {
							type: "integer",
							description: "Count of powerups that user has paid for.\n\n    For now fields free_count and paid_count are mutually exclusive.\n\n    range:0 -"
						},
						free_count: {
							type: "integer",
							description: "Count of powerups that was provided for free or as a part of other subscription.\n\n    For now fields free_count and paid_count are mutually exclusive.\n\n    range:0 -"
						},
						subscription_id: {
							type: "string",
							description: 'Subscription associated with allocated/deallocated powerups.\n\n    "premium" for powerups provided as a part of Reddit Premium subscription.\n\n    format:^[a-zA-Z0-9_\\.-]{1,120}$'
						},
						benefit: {
							type: "string",
							description: "Benefit title in upsell.\n\n    categories:sd_video,posts_image_upload\n    categories:hd_video,comments_with_gifs,comments_with_emoji"
						},
						current_subreddit_powerups: {
							type: "integer",
							description: "Current subreddit powerups count, after allocation.\n\n    range:0 -"
						}
					}
				},
				vt = {
					$id: "http://com.reddit/schemas/field_definitions/progress_module/progress_module.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents fields specific to Communnity Progress Module.\n\nA Community Progress Module is a series of action cards on iOS, Android, and d2x that\nhelp moderators to take actions that are most likely to build a successful community.",
					definitions: {
						module_name: {
							type: "string",
							description: 'Name of the community progress module.\n\n    e.g. "new_community_setup"\n\n    format:^[_a-z0-9]+$\n    skip_validation:False'
						},
						card_name: {
							type: "string",
							description: 'Name of the community progress card.\n\n    e.g. "community_invite"\n\n    format:^[_a-z0-9]+$\n    skip_validation:False'
						}
					}
				},
				bt = {
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
				$t = {
					$id: "http://com.reddit/schemas/field_definitions/rater_tag/rater_tag.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "This struct is used to capture community topic tag info.",
					definitions: {
						tagging_question: {
							type: "string",
							description: "The full text of the question asked.\n\n    format:.+"
						},
						non_selected_answers: {
							type: "array",
							description: "The set of non selected answers from the answer set"
						},
						tagging_question_object: {
							type: "string",
							description: 'The subject being evaluated.\n\n    e.g. "San Francisco, CA" for Geo, "Home and Garden" for Topic\n\n    format:.+'
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
							description: "The id of the question asked\n    \n    format:.+"
						},
						tagging_job_id: {
							type: "string",
							description: "A unique id associated with a particular batch of jobs.\n\n    format:.+"
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
				wt = {
					$id: "http://com.reddit/schemas/field_definitions/relevance/relevance_model.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Relevance model schema.\n\nInformation about the usage and performance of relevance models.",
					definitions: {
						result_duration: {
							type: "integer",
							description: "Time took to make the result in milliseconds.\n\n    range:0 -"
						},
						identifier: {
							type: "string",
							description: "The name or identifier of the model.\n\n    format:^[-._a-zA-Z0-9]+$"
						},
						number_max_recommendations: {
							type: "integer",
							description: "Max number of results returned.\n\n    range:0 -"
						},
						version: {
							type: "string",
							description: "The version of the model family. For example, 2018-03-11-comment-features.\n\n    format:^[-._a-zA-Z0-9]+$"
						},
						result_blob: {
							type: "string",
							description: "JSON text blob of result specific to each model.\n\n    format:^.+$"
						},
						family: {
							type: "string",
							description: "The model family -- e.g. LogisticRegression, RandomForest, Perceptron ;)\n\n    format:^[-._a-zA-Z0-9]+$"
						},
						feature_blob: {
							type: "string",
							description: "JSON text blob of features specific to each model.\n\n    format:^.+$"
						}
					}
				},
				jt = {
					$id: "http://com.reddit/schemas/field_definitions/report/report.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents the characteristics of a user report of content on site.",
					definitions: {
						reason_code: {
							type: "string",
							description: "Type of report.\n\n    categories:spam,harassment_at_me,harassment_at_someone_else\n    categories:violence_at_me,violence_at_someone_else\n    categories:vulgarity\n    categories:pii,minor_sexualization,invol_porn_with_me,invol_porn_without_me\n    categories:ban_evasion,vote_manipulation\n    categories:marketplace\n    categories:impersonation\n    categories:copyright,trademark,self_harm,user_profile\n    categories:other"
						},
						id: {
							type: "string",
							description: "Required identifier for a report.\n\n    This field is a report's reddit_id. Prefix 'reports__'\n    followed by base36 value.\n    For example: 'reports__23b'\n\n    format:^reports__[a-z0-9]+$"
						}
					}
				},
				kt = {
					$id: "http://com.reddit/schemas/field_definitions/request/api.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "This struct is deprecated and will be removed soon!",
					definitions: {
						name: {
							type: "string",
							description: "This field is deprecated and will be removed soon!\n\n    format:^.+$"
						},
						address: {
							type: "string",
							description: "This field is deprecated and will be removed soon!\n\n    format:^.+$"
						},
						endpoint: {
							type: "string",
							description: "This field is deprecated and will be removed soon!\n\n    format:^.+$"
						}
					}
				},
				xt = {
					$id: "http://com.reddit/schemas/field_definitions/request/api_response.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "This struct is deprecated and will be removed soon!",
					definitions: {
						response_code: {
							type: "integer",
							description: "This field is deprecated and will be removed soon!\n\n    format:^.+$"
						},
						error_name: {
							type: "string",
							description: "This field is deprecated and will be removed soon!\n\n    format:^.+$"
						},
						error: {
							type: "string",
							description: "This field is deprecated and will be removed soon!\n\n    format:^.+$"
						},
						content: {
							type: "string",
							description: "This field is deprecated and will be removed soon!\n\n    format:^.+$"
						}
					}
				},
				Pt = {
					$id: "http://com.reddit/schemas/field_definitions/request/oauth.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields for Oauth clients.",
					definitions: {
						client_app_type: {
							type: "string",
							description: "OAuth client type.\n\n    categories:web,installed,script"
						},
						client_name: {
							type: "string",
							description: "This is the name of client application making the request.\n\n    For example, in the instance of using a browser, this field is the name of that browser.\n\n    format:^[\\x00-\\x7F]+$"
						},
						client_id: {
							type: "string",
							description: "The reddit internal id of this oauth client. \n\n    format:^[-_a-zA-Z0-9]{14}$"
						},
						scopes: {
							type: "array",
							description: "OAuth authorization scopes list.\n\n    scopes:account,adsedit,adsread,creddits,edit,email,flair,history,identity,modcontributors,modflair\n    scopes:modmail,modposts,modconfig,modlog,modothers,modself,modtraffic,modwiki,mysubreddits,privatemessages\n    scopes:read,report,save,sponsor,structuredstyles,submit,subscribe,vote,wikiedit,wikiread,xbox"
						}
					}
				},
				qt = {
					$id: "http://com.reddit/schemas/field_definitions/request/referrer.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields related to HTTP Refer(r)ers.",
					definitions: {
						domain: {
							type: "string",
							description: "Hostname/domain of the referrer, possibly including the port.\n\n    format:^[-._a-zA-Z0-9]+(:\\d+)?$"
						},
						url: {
							type: "string",
							description: "The referrer path (e.g., /message/inbox)\n\n    format:^https?:\\/\\/\\S+"
						},
						element: {
							type: "string",
							description: "This field is deprecated and will be removed soon!\n\n    format:^.+$"
						}
					}
				},
				Tt = {
					$id: "http://com.reddit/schemas/field_definitions/request/request.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Raw HTTP request data.",
					definitions: {
						reddaid: {
							type: "string",
							description: "Reddit Ad Id, typically set as a cookie or otherwise passed in for client-side requests.\n\n    format:^[ABCDEFGHIJKLMNOPQRSTUVWXYZ234567]{0,16}$"
						},
						loginbot: {
							type: "boolean",
							description: "Is login request coming from a login bot?"
						},
						robots_meta_tag: {
							type: "string",
							description: 'A directive used for "robots" meta tag if such tag exists in page\'s DOM.\n\n    format:^(noindex|noindex,nofollow)$'
						},
						canonical_url: {
							type: "string",
							description: "The request canonical url.\n\n    format:^https?:\\/\\/\\S+"
						},
						domain: {
							type: "string",
							description: "Domain of the request.\n\n    format:^[-._a-zA-Z0-9]+$"
						},
						known_bot: {
							type: "string",
							description: "This field is deprecated and will be removed soon!\n\n    format:^.+$\n    *"
						},
						isp_organization: {
							type: "string",
							description: 'The ISP the request came from, e.g. "Cox Business".\n\n    Note that these are human-readable values intended for SWAT investigation.\n\n    format:^.+$'
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
							description: "The full User-Agent provided to the request.\n\n    Note that user agents are provided by clients, including rogue scrapers.\n    The validator has been disabled as we cannot control the field value.\n\n    format:.*\n    skip_validation:False"
						},
						base_url: {
							type: "string",
							description: "The request path.\n\n    format:^https?:\\/\\/\\S+"
						},
						google_aaid: {
							type: "string",
							description: "Google Advertising Id set by Android devices.\n\n    More details here: https://support.google.com/googleplay/android-developer/answer/6048248"
						},
						apple_ios_aid: {
							type: "string",
							description: "Apple Advertising Id set by iOS devices.\n\n    More details here: https://developer.apple.com/documentation/adsupport/asidentifiermanager/1614151-advertisingidentifier"
						},
						header_signature: {
							type: "string",
							description: "Hash of the ordered headers from anti-evil fingerprinting.\n\n    Example value: Am:GX:Ac:kF:h0:a6:z/:kF:lw\n\n    format:^([A-Za-z0-9/+]{2}:)*[A-Za-z0-9/+]{2}$"
						},
						google_client_id: {
							type: "string",
							description: "Unique identifier associated with a particular user on AMP pages\n\n    format:^.+$"
						},
						cookies_present: {
							type: "boolean",
							description: "Were there cookies present in the request?"
						},
						accept_language_header: {
							type: "string",
							description: "Accept-Language header contents.\n\n    Note that this field is named as such to avoid collision with the accept_language field.\n\n    Also note that this field is intended to catch malformed or suspicious values for SWAT, hence the lack\n    of a proper validator.\n\n    format:^.+$"
						},
						parameters: {
							type: "string",
							description: 'Query string preceded by "?", e.g. "count=25&after=t3_b3fzt5".\n\n    format:^.+=.+$'
						},
						client_ip: {
							type: "string",
							description: "Hashed IP of the client sending the event. This value will never be populated in BigQuery.\n\n    Note that this field is passed in as a plain IP as Midas relies on this field to do geo enrichment.\n    Both IPv4 and IPv6 are accepted. The event pipeline will then sanitize this field as required.\n\n    format:^(\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|([a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4})$"
						}
					}
				},
				Et = {
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
							description: "Response status code, e.g. 200, 301, 500, etc.\n\n    range:0 -"
						}
					}
				},
				At = {
					$id: "http://com.reddit/schemas/field_definitions/request/zipkin.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields used to capture zipkin traces.\n\nMore information here: https://zipkin.io/pages/instrumenting.html",
					definitions: {
						trace_id: {
							type: "string",
							description: "Zipkin trace ID.\n\n    format:^[0-9a-f]+$"
						}
					}
				},
				St = {
					$id: "http://com.reddit/schemas/field_definitions/res/r_e_s.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields related to tracking Reddit Enhancement Suite (aka RES) plugin.",
					definitions: {
						version: {
							type: "string",
							description: "RES plugin version.\n\n    format:^\\d+(\\.\\d+)*$"
						},
						night_mode: {
							type: "boolean",
							description: "Is night mode enabled in RES?"
						}
					}
				},
				Dt = {
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
							description: "What type of recurrence frequency?\n    \n    categories:daily,weekly,monthly,annual"
						},
						recurring_intervals: {
							type: "integer",
							description: 'How often does the post get scheduled on the recurrence frequency?\n    e.g. "Repeat every THREE days"\n\n    range:0 -'
						},
						creator_user_id: {
							type: "string",
							description: "Creator of the scheduled post, represented as an account ID."
						},
						timezone: {
							type: "string",
							description: "User selected pytz timezone.\n\n    format:^[a-zA-Z0-9\\/_\\-+]+$"
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
							description: "How many times the scheduled posts recurs before it should stop.\n\n    range:0 -"
						},
						created_timestamp: {
							type: "number",
							description: "UTC timestamp of when the scheduled post is created."
						},
						milestone_type: {
							type: "string",
							description: 'Optional field which describes whether or not a scheduled posts, and\n    if so, what type of milestone post. E.g. "cakeday"\n\n    format:^[a-zA-Z0-9\\/_\\-+]+$'
						}
					}
				},
				It = {
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
							description: "The human readable flair used in post search.\n\n    format:^[^\\n]{0,64}$"
						},
						subreddit_name: {
							type: "string",
							description: "Lowercase name of the subreddit, e.g. askreddit."
						},
						query: {
							type: "string",
							description: "Search query string.\n\n    Note that we allow any arbitrary string to be a query, including empty strings.\n\n    format:^.*$"
						},
						origin_page_type: {
							type: "string",
							description: 'Action info page_type of search referrer e.g. "subreddit", "home", "community".'
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
							description: "Search results range string, e.g. hour, day, week.\n\n    categories:hour,day,week,month,year,all"
						},
						nsfw_reason: {
							type: "string",
							description: "Why the search results had the nsfwness they did.\n\n    categories:profile,preference,explicit\n    *"
						},
						sort: {
							type: "string",
							description: "Sorting options for search results.\n\n    categories:hot,new,rising,top,controversial,gilded,wiki,promoted,best\n    categories:confidence,qa,old,live,relevance,comments,timestamp,score,upvotes"
						},
						subreddit_ids: {
							type: "array",
							description: "The results of this search stored as a list of thing ids.\n\n    Note this field may be truncated to keep event payload small."
						},
						structure_type: {
							type: "string",
							description: 'Pre-configured structured search query type.\n\n    Example values: "trending", "recent", etc.'
						},
						number_links: {
							type: "integer",
							description: "The number of results available for this search query.\n\n    Note that this is not necessarily the number shown to the user.\n\n    range:0 -"
						},
						meta_flair_name: {
							type: "string",
							description: 'The display title of the MetaFlair/category, such as "Animals" or "Pics & GIFS".\n\n    format:^\\S.*$'
						},
						number_subreddits: {
							type: "integer",
							description: "The number of subreddits returned for a particular search query.\n\n    range:0 -"
						},
						typeahead_active: {
							type: "boolean",
							description: "Does this search bar supports typeahead or not on this page."
						}
					}
				},
				Ft = {
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
							description: "Number of unused backup codes available before they were all destroyed.\n\n    range:0 -"
						},
						backup_code_used: {
							type: "boolean",
							description: "Was a backup code used instead of the primary mechanism for this device?"
						},
						device_backup_codes_remaining: {
							type: "integer",
							description: "Number of unused backup codes are associated with this device.\n\n    range:0 -"
						},
						device_algorithm: {
							type: "string",
							description: "The algorithm this device uses to verify the authentication token."
						}
					}
				},
				Rt = {
					$id: "http://com.reddit/schemas/field_definitions/seo/s_e_o.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields related to search engine optimization (SEO).",
					definitions: {
						internal_link_url: {
							type: "string",
							description: "The URL of a link displayed in an experiment-related A/B test\n\n    format:^https?:\\/\\/\\S+"
						}
					}
				},
				zt = {
					$id: "http://com.reddit/schemas/field_definitions/session/session.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields related to an user session.",
					definitions: {
						referrer_domain: {
							type: "string",
							description: "Domain of the referrer.\n\n    format:^[-._A-Za-z0-9]+$"
						},
						referrer_url: {
							type: "string",
							description: "Referrer URL.\n\n    format:^\\S+$"
						},
						anonymous_browsing_mode: {
							type: "boolean",
							description: "Flag indicating if the session mode is Anonymous Browsing."
						},
						version: {
							type: "string",
							description: "Session version. \n\n    Should be 0.\n\n    format:^0$"
						},
						id: {
							type: "string",
							description: "Unique identifier for the session.\n\n    Note that this is not a fullname.\n\n    format:[A-Za-z0-9]{18}"
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
				},
				Ot = {
					$id: "http://com.reddit/schemas/field_definitions/setting/setting.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Represents a change a user made to one of their settings.",
					definitions: {
						value: {
							type: "string",
							description: "The current value of the given setting.\n\n    format:^.{0,30}$"
						},
						old_value: {
							type: "string",
							description: "The previous value of the given setting.\n\n    format:^.{0,30}$"
						},
						scope: {
							type: "string",
							description: "The scope of the setting.\n\n    We support settings which are applied to individual subreddits.\n    This allows us to differentiate between those and regular account\n    level settings.\n\n    categories:account,subreddit"
						}
					}
				},
				Ct = {
					$id: "http://com.reddit/schemas/field_definitions/snoovatar/snoovatar.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Snoovatar Builder",
					definitions: {
						gear_id: {
							type: "string",
							description: "Gear ID, aka Accessory ID"
						},
						gear_ids: {
							type: "array",
							description: "List of Gear IDs"
						}
					}
				},
				Ut = {
					$id: "http://com.reddit/schemas/field_definitions/spamurai/spamurai_action.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields related to the triggered Spamurai action.",
					definitions: {
						channel: {
							type: "string",
							description: "For slack(), the full channel name Spamurai posts to.\n\n    format:^#spamurai[a-zA-Z0-9_-]*$"
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
							description: "Human-readable name of the task that contains the triggered action.\n\n    format:^.+$"
						},
						task_version: {
							type: "string",
							description: "Version of the task that contains the triggered action.\n\n    format:^\\d+$"
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
				},
				Lt = {
					$id: "http://com.reddit/schemas/field_definitions/subreddit/profile.json",
					$schema: "http://json-schema.org/draft-07/schema#",
					description: "Fields related to user profiles.",
					definitions: {
						name: {
							type: "string",
							description: "Name of the user.\n\n    format:^(reddit.com|(t:)?[-_a-z0-9]+)"
						},
						cover_url: {
							type: "string",
							description: "URL of the uploaded cover image.\n\n    format:^https:\\/\\/\\S+$"
						},
						display_name: {
							type: "string",
							description: "Profile display name set by the user, which is seperate from the profile name.\n\n    This is only shown in the user's profile.\n\n    format:^.{0,30}$"
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
							description: 'Type of the profile, either "default" or "legacy".\n\n    categories:default,legacy'
						},
						content_visible: {
							type: "boolean",
							description: "Did the user set the content visibility to true?"
						},
						about: {
							type: "string",
							description: "About description created by the user.\n\n    format:^.{0,200}$"
						},
						avatar_url: {
							type: "string",
							description: "URL of the uploaded avatar.\n\n    format:^https:\\/\\/\\S+$"
						},
						communities_visible: {
							type: "boolean",
							description: "Did the user set the Active in Communities to true?"
						}
					}
				};
			const Nt = [n, s, o, r, a, d, c, m, p, _, f, h, l, u, g, y, v, b, $, w, j, k, x, P, q, T, E, A, S, D, I, F, R, z, O, C, U, L, N, M, H, W, B, V, Q, J, G, Z, K, Y, X, ee, te, ie, ne, se, oe, re, ae, de, ce, me, pe, _e, fe, he, le, ue, ge, ye, ve, be, $e, we, je, ke, xe, Pe, qe, Te, Ee, Ae, Se, De, Ie, Fe, Re, ze, Oe, Ce, Ue, Le, Ne, Me, He, We, Be, Ve, Qe, Je, Ge, Ze, Ke, Ye, Xe, et, tt, it, nt, st, ot, rt, at, dt, ct, mt, pt, _t, ft, ht, lt, ut, gt, yt, vt, bt, $t, wt, jt, kt, xt, Pt, qt, Tt, Et, At, St, Dt, It, Ft, Rt, zt, Ot, Ct, Ut, Lt, {
				$id: "http://com.reddit/schemas/field_definitions/subreddit/subreddit.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Fields related to subreddits.\n\nDid you know: Subreddits were greatly controversial when first introduced back in 2008 as users felt that\nReddit should be organized around tags, not communities?",
				definitions: {
					post_difficulty_rating: {
						type: "string",
						description: "Post difficulty rating of the subreddit\n\n    categories:easy,medium,hard"
					},
					name: {
						type: "string",
						description: "Lowercase name of the subreddit, e.g. askreddit.\n\n    format:^(reddit.com|((t:)?[-_a-z0-9]+))$"
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
						description: "Coin balance of the subreddit\n\n    range:0 -"
					},
					whitelist_status: {
						type: "string",
						description: "Whitelist status, used to classify what types of advertisements should be shown in this subreddit.\n\n    More details here: https://reddit.atlassian.net/wiki/spaces/ADS/pages/120337999/Whitelist+Statuses\n\n    Value definitions:\n        * no_ads - No ads of any kind will show on this subreddit.\n        * house_only - Only ads set to the house priority will show.\n        * promo_specified - (Deprecated) Only ads targeting that subreddit will appear.\n        * promo_adult_nsfw - (Deprecated) Subreddits in this category must be age-gated.\n        * promo_adult_sfw - (Deprecated) Subreddits in this category are not age-gated, but still adult themed.\n        * promo_all - (Deprecated) All promoted posts (self-serve or managed) will show on this subreddit.\n        * all_ads - All promoted posts and banners will show on this subreddit.\n        * some_ads - Some promoted posts and banners will show on this subreddit.\n\n    categories:no_ads,house_only,promo_specified,promo_adult_nsfw,promo_adult\n    categories:promo_all,all_ads,some_ads"
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
						description: "Public description of the subreddit.\n\n    format:^.{0,500}$"
					},
					access_type: {
						type: "string",
						description: "Accessibility type for the subreddit, e.g. employee only.\n\n    categories:archived,employees_only,gold_only,gold_restricted,private,public,restricted,user"
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
					score: {
						type: "integer",
						description: "The score given by the user, only set on `submit` - `rating` events\n\n    range:0 - 10"
					},
					min: {
						type: "integer",
						description: "The minimum value allowable score, only set on `rating` events.\n\n    May change in the future but for now: NPS 0, CES & CSAT 1.\n\n    range:0 - 1"
					},
					text: {
						type: "string",
						description: "The user's answer to the freeform text section following a rating, only set on `submit` - `freeform_text` events.\n\n    format:.*"
					},
					max: {
						type: "integer",
						description: "The maximum allowable score, only set on `rating` events.\n\n    May change in the future but for now: NPS 10, CES & CSAT 7.\n\n    range:5 - 10"
					},
					type: {
						type: "string",
						description: "The survey type of this step in the user flow.\n\n    categories:nps,ces,csat"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/target_ip/target_i_p.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Information regarding the Target IP.",
				definitions: {
					address: {
						type: "string",
						description: "IP address of the target user.\n\n    format:^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(\\/\\d+)?$"
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
						description: "The display title for the badge.\n\n    format:^.{1,64}$"
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
						description: "Name of the copyright holder for DMCA requests.\n\n    format:^.+$\n    read-access:swat@reddit.com"
					},
					queue_id: {
						type: "string",
						description: "The ID of the Reddar queue associated with this ticket.\n\n    Prefix 'queues__' followed by base36 value.\n    For example: 'queues__23b'\n\n    format:^queues__[a-z0-9]+$"
					},
					id: {
						type: "string",
						description: "Required identifier for a reddar ticket.\n\n    This field is a reddar ticket's reddit_id. Prefix 'tickets__'\n    followed by base36 value.\n    For example: 'tickets__23b'\n\n    format:^tickets__[a-z0-9]+$"
					},
					status: {
						type: "string",
						description: "Used by admin tickets to specify the current state of the ticket.\n\n    categories:open,assigned,in_review,closed"
					},
					report_source: {
						type: "string",
						description: "Source of the report which created the ticket.\n\n    reddit-service-admin admin.thrift enum IncomingReportSource\n\n    categories:help_center,spamurai,google_csai,photodna,client,reddar\n    categories:zendesk,zendesk_dmca_form,zendesk_dmca_email"
					},
					requestor_id: {
						type: "string",
						description: "The ID of the requestor associated with this ticket.\n\n    Prefix 'requestors__' followed by base36 value.\n    For example: 'requestors__23b'\n\n    format:^requestors__[a-z0-9]+$"
					},
					type: {
						type: "string",
						description: "Used by admin tickets to specify the complaint type, e.g. harassment.\n\n    categories:private_message_abuse,harassment,violence,ban_evasion,csai\n    categories:appeal,legal_export,user_data_request,login_bot,ae_test,ads,chat_violence\n    categories:chat_others,marketplace,pii,photodna,bulk_action_job\n    categories:involuntary_porn,impersonation,scaled_abuse_appeal\n    categories:minor_sexualization,delete_media,chat_unknown,chat_spam\n    categories:chat_harassment,chat_pii,chat_ban_evasion,chat_marketplace\n    categories:chat_minor_sexualization,chat_involuntary_porn\n    categories:chat_vote_manipulation,live_stream,terrorism,dmca,report_button_abuse"
					},
					requestor_name: {
						type: "string",
						description: "Name of the requestor for DMCA requests.\n\n    format:^.+$\n    read-access:swat@reddit.com"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/ticket/reddar_ticket_content.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Information regarding content linked to ReddarTicket",
				definitions: {
					reported_url: {
						type: "string",
						description: "Url reported by user (extracted from zendesk ticket).\n\n    format:^.+$"
					},
					target_id: {
						type: "string",
						description: "The reddit ID of content associated with this ticket content.\n    Can be empty in case reported url doesn't resolve to valid reddit content."
					},
					status_reason: {
						type: "string",
						description: "Reason for current status associated with this ReddarTicketContent.\n\n    reddit-service-admin admin.thrift enum TicketContentStatusReason\n\n    categories:hosting_removal_auto,hosting_removal_manual,linking_removal_auto\n    categories:subreddit_url,user_profile_url,fair_use,search_results\n    categories:official_link,cross_post,corporate_verification,not_reddit_url,not_subject_to_copyright\n    categories:already_removed_by_user,already_removed_by_admin,already_removed_duplicate_request\n    categories:already_removed_ephemeral_content,work_not_found,fair_use_final,not_a_direct_link,suspected_fraud"
					},
					post_nsfw: {
						type: "boolean",
						description: "Flag indicating if associated post is marked as NSFW."
					},
					content_type: {
						type: "string",
						description: "Content type of reported url for DMCA requests. Identifies if reported url is invalid for\n    DMCA (third_party_link) and specifies type of reddit hosted content requested for DMCA\n    takedown.\n\n    Reflects values defined in admin-service admin.thrift ContentType.\n\n    categories:image,video,post,comment,third_party_link,thumbnail,preview,subreddit_icon"
					},
					target_created_timestamp: {
						type: "number",
						description: "The date when the reddit content associated with this ticket content was created.\n\n    This field can be empty in case reported url doesn't resolve to valid reddit content."
					},
					id: {
						type: "string",
						description: "Required identifier for a reddar ticket content.\n\n    This field is a reddar ticket contents's reddit_id. Prefix 'ticket_contents__'\n    followed by base36 value.\n    For example: 'ticket_contents__23b'\n\n    format:^ticket_contents__[a-z0-9]+$"
					},
					status: {
						type: "string",
						description: "Status of content associated with this ReddarTicketContent.\n\n    reddit-service-admin admin.thrift enum TicketContentStatus\n\n    categories:not_actioned,dmca_invalid,dmca_info_requested,dmca_takedown_requested\n    categories:dmca_takedown_inprogress,dmca_takedown_completed,dmca_takedown_failed"
					},
					target_type: {
						type: "string",
						description: "Type of reddit content.\n\n    categories:post,comment,user,message,subreddit"
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
						description: "Required identifier for this ticket.\n\n    This field is tracked as base36. Note that it is not a fullname.\n\n    format:^[a-z0-9]+$"
					},
					type: {
						type: "string",
						description: "Used by admin tickets to specify the complaint type, e.g. harassment.\n\n    categories:private_message_abuse,harassment,violence,ban_evasion,csai\n    categories:appeal,legal_export,user_data_request,login_bot,ae_test,ads,chat_violence\n    categories:chat_others,marketplace,pii,photodna,bulk_action_job\n    categories:involuntary_porn,impersonation,scaled_abuse_appeal\n    categories:minor_sexualization,delete_media,chat_unknown,chat_spam\n    categories:chat_harassment,chat_pii,chat_ban_evasion,chat_marketplace\n    categories:chat_minor_sexualization,chat_involuntary_porn\n    categories:chat_vote_manipulation,live_stream,terrorism,dmca,report_button_abuse"
					},
					queue_id: {
						type: "string",
						description: "Admin tickets are associated with a queue.\n\n    This field is tracked as base36. Note that it is not a fullname.\n\n    format:^[a-z0-9]+$"
					},
					status: {
						type: "string",
						description: "Used by admin tickets to specify the current state of the ticket.\n\n    categories:open,assigned,in_review,closed"
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
						description: "Source of zendesk ticket.\n\n    categories:form,email"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/timer/d_o_m_timers.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "This struct is deprecated! It will be removed soon.",
				definitions: {
					request: {
						type: "integer",
						description: "This field is deprecated! It will be removed soon.\n\n    format:^.*$"
					},
					loading: {
						type: "integer",
						description: "This field is deprecated! It will be removed soon.\n\n    format:^.*$"
					},
					loaded: {
						type: "integer",
						description: "This field is deprecated! It will be removed soon.\n\n    format:^.*$"
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
						description: "Text shown to the user.\n\n    format:^.+$"
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
						description: "Case insensitive unique name for a topic.\n\n    Some examples may be:\n        * nfl\n        * FIFA World Cup\n        * Craigslist\n\n    format:^.+$"
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
						description: "The text contents of the tag. This may be generated by us or entered by a user.\n\n    Some examples may be:\n        * Gaming\n        * Funny\n        * Lifestyle\n\n    format:^.+$"
					},
					type: {
						type: "string",
						description: "The type of the topic tag. This can determine several things and may change in the future.\n\n    This field can determine:\n        * What types of entites this tag can be applied to\n        * How the topic tag should behave in the UI\n\n    Example: classification topic tags can be applied to anything, but post_classification tags can\n    only be applied to posts.\n\n    categories:classification,post_classification,subreddit_classification,comment_classification"
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
						description: "Name of the trophy.\n\n    format:^.*$"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/upload/upload.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Fields related to asset uploads.",
				definitions: {
					file_size: {
						type: "integer",
						description: "File size in bytes.\n\n    range:0 -"
					},
					category: {
						type: "string",
						description: "Lowercase name of the structured styles asset category, e.g. community_icon.\n\n    Note that in r2 code the original category names are in lowerCamelCase\n    (e.g. communityIcon), to be consistent with v2 schema we need to convert\n    them to snake_case before sending the event."
					},
					optimization_type: {
						type: "string",
						description: "The type of optimizaion this file represents, used in structured styles\n    asset uploads.\n\n    categories:original\n\n    Original, unoptimized file. We store this file on s3 bucket but it's not\n    public accessible.\n\n    categories:optimized\n\n    Optimized file. It's possible that the optimization did nothing and it's the\n    same size as the corresponding original file. The optimized version is the\n    one we made public accessible and serve.\n\n    categories:single\n\n    Optimization was not attempted. The difference between single and original\n    is that we make the single files public accessible and serve them."
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
						description: "User's current comment karma.\n\n    format:.*"
					},
					name: {
						type: "string",
						description: "User's screen name.\n\n    A note on the validator: We do have checks on valid names (e.g. max chars)\n    but there exists exceptions in our database. As such, the validator is\n    disabled for this field.\n\n    format:.*\n    read-access:swat@reddit.com"
					},
					is_admin: {
						type: "boolean",
						description: "Is the user a Reddit admin?"
					},
					email: {
						type: "string",
						description: "User's email.\n\n    A note on the validator: This field is also used to track attempted login\n    values provided by users. They can pass in invalid email and, as such, the\n    validator is disabled for this field.\n\n    format:.*"
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
						description: "Number of creddits (reddit credits) the user has.\n    Note: To be deprecated with goldv1.\n\n    range:0 -"
					},
					number_premium_days_remaining: {
						type: "integer",
						description: "Premium status days remaining.\n\n    range:0 -"
					},
					in_timeout: {
						type: "boolean",
						description: "Is the user in timeout, e.g. suspended?"
					},
					number_coins: {
						type: "integer",
						description: "Number of gold coins the user has.\n\n    range:0 -"
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
						description: "Email domain, not masked.\n\n    format:.*"
					},
					id: {
						type: "string",
						description: "Unique identifier of this user. \n    format:^t[0-9]_[a-z0-9]+$\n    skip_validation:False"
					},
					cookie_created_timestamp: {
						type: "number",
						description: "Timestamp of user's cookie creation."
					},
					post_karma: {
						type: "integer",
						description: "User's current post karma.\n\n    format:.*"
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
						description: "Masked value of the email user (user@).\n\n    format:.*"
					},
					has_premium: {
						type: "boolean",
						description: "Does this user have Premium status?"
					},
					masked_email: {
						type: "string",
						description: "Masked value of the full email (user@domain.com).\n\n    format:.*"
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
						description: "User's expando preferences.\n\n    Expected values:\n        * auto - Always auto-expand media previews\n        * noauto - Never auto-expand media previews\n        * subreddit - Respect subreddit's expando preferences\n\n    categories:auto,noauto,subreddit\n    *"
					},
					in_beta: {
						type: "boolean",
						description: "Is this a user in our beta program?"
					},
					language: {
						type: "string",
						description: "Preferred language of the user.\n\n    format:^[a-z]{2,3}([-_][a-zA-Z0-9]{2}(-[a-z]{3-8})?)?$"
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
						description: "Current user comment karma in the current subreddit.\n\n    format:.*"
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
						description: "Current user post karma in the current subreddit.\n\n    format:.*"
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
						description: "The display title for user flair.\n\n    format:^[^\\n]{0,64}$"
					}
				}
			}, {
				$id: "http://com.reddit/schemas/field_definitions/webhook/webhook.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Represents the characteristics of configuration for an outbound webhook.",
				definitions: {
					id: {
						type: "string",
						description: "Unique identifier for this outbound webhook.\n    \n    format: ^[_a-z0-9]+"
					},
					type: {
						type: "string",
						description: "What type of data, or which service, is being sent to this webhook callback.\n    \n    categories:chat"
					}
				}
			}, {
				description: "All events must satisfy this schema",
				$id: "http://com.reddit/schemas/schema_interfaces/all_events.json",
				properties: {
					mailroom_request_notification_target: {
						$ref: "http://com.reddit/schemas/field_definitions/notification/mailroom_request.json#/definitions/notification_target"
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
					funding_instrument_overdelivery_micros: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/overdelivery_micros"
					},
					platform_device_tier: {
						$ref: "http://com.reddit/schemas/field_definitions/device/platform.json#/definitions/device_tier"
					},
					platform_name: {
						$ref: "http://com.reddit/schemas/field_definitions/device/platform.json#/definitions/name"
					},
					message_body: {
						$ref: "http://com.reddit/schemas/field_definitions/content/message.json#/definitions/body"
					},
					funding_instrument_overwrite: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/overwrite"
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
					purchase_count_remaining: {
						$ref: "http://com.reddit/schemas/field_definitions/econ/purchase.json#/definitions/count_remaining"
					},
					listing_sort: {
						$ref: "http://com.reddit/schemas/field_definitions/content/listing.json#/definitions/sort"
					},
					funding_instrument_payment_id: {
						$ref: "http://com.reddit/schemas/field_definitions/funding_instrument/funding_instrument.json#/definitions/payment_id"
					},
					setting_old_value: {
						$ref: "http://com.reddit/schemas/field_definitions/setting/setting.json#/definitions/old_value"
					},
					banner_button_text: {
						$ref: "http://com.reddit/schemas/field_definitions/banner/banner.json#/definitions/button_text"
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
					user_number_creddits: {
						$ref: "http://com.reddit/schemas/field_definitions/user/user.json#/definitions/number_creddits"
					},
					purchase_product_version: {
						$ref: "http://com.reddit/schemas/field_definitions/econ/purchase.json#/definitions/product_version"
					},
					media_id: {
						$ref: "http://com.reddit/schemas/field_definitions/content/media.json#/definitions/id"
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
					announcement_title: {
						$ref: "http://com.reddit/schemas/field_definitions/announcement/announcement.json#/definitions/title"
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
					snoovatar_gear_ids: {
						$ref: "http://com.reddit/schemas/field_definitions/snoovatar/snoovatar.json#/definitions/gear_ids"
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
			}, {
				$id: "http://com.reddit/schemas/schema_interfaces/announcement.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "All announcement events",
				documentation_links: ["https://docs.google.com/spreadsheets/d/1J79ij2HWuUq7OuyRnaXjj3XRwBU5tp_5KujAOn6I5Xw/edit#gid=0"],
				required: ["announcement_id", "announcement_title", "announcement_body"]
			}, {
				$id: "http://com.reddit/schemas/schema_interfaces/backend_submit.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "All submit events",
				documentation_links: ["https://docs.google.com/document/d/11BU1grpzsmHC1kPsTsh3YtQOsDYTkWZ_f5BWB2W0BrQ/edit"],
				required: ["app_name", "client_timestamp", "oauth_client_app_type", "oauth_client_id", "oauth_client_name", "post_author_id", "post_body_text", "post_created_timestamp", "post_domain", "post_id", "post_nsfw", "post_promoted", "post_spoiler", "post_title", "post_type", "post_url", "request_domain", "request_user_agent", "session_created_timestamp", "session_id", "session_version", "subreddit_id", "subreddit_name", "user_created_timestamp", "user_id", "user_logged_in"]
			}, {
				$id: "http://com.reddit/schemas/schema_interfaces/coins_marketing_flow.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Events related to coins marketing.",
				owner: "economy@reddit.com",
				documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=1470564269"],
				required: ["correlation_id", "client_timestamp", "app_name", "user_id", "user_created_timestamp", "user_is_admin", "user_number_coins", "user_has_premium", "user_is_premium_subscriber", "user_number_premium_days_remaining", "user_logged_in"]
			}, {
				$id: "http://com.reddit/schemas/schema_interfaces/comment.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "All comment events",
				documentation_links: ["https://docs.google.com/document/d/1cf1TDMtjW4IEnB8zeFdBxuo3vj1TUzmBhVbX-qMHi0A/edit"],
				required: ["app_name", "client_timestamp", "oauth_client_app_type", "oauth_client_id", "oauth_client_name", "post_author_id", "post_body_text", "post_created_timestamp", "post_domain", "post_id", "post_nsfw", "post_promoted", "post_spoiler", "post_title", "post_type", "post_url", "request_domain", "request_user_agent", "session_created_timestamp", "session_id", "session_version", "subreddit_id", "subreddit_name", "user_created_timestamp", "user_id", "user_logged_in"]
			}, {
				$id: "http://com.reddit/schemas/schema_interfaces/crowdsource_backend_events.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Crowd-source events fired by the backend",
				documentation_links: ["https://reddit.atlassian.net/wiki/spaces/SIG/pages/830866056/Crowdsourced+Geotagging+Instrumentation+Spec"],
				required: ["crowd_source_place_id", "crowd_source_geo_country", "crowd_source_geo_region", "crowd_source_geo_city", "crowd_source_old_place_id", "crowd_source_old_geo_country", "crowd_source_old_geo_region", "crowd_source_old_geo_city"]
			}, {
				$id: "http://com.reddit/schemas/schema_interfaces/experiment.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "All experiment expose events",
				owner: "data-eng@reddit.com",
				documentation_links: ["https://docs.google.com/document/d/1MlFAHIHZ91cIW1-PlcFK2iEQvgwteNSNujYpMThwJqg/edit"],
				required: ["experiment_id", "experiment_name", "experiment_variant", "experiment_version", "experiment_is_override"]
			}, {
				$id: "http://com.reddit/schemas/schema_interfaces/frontend.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				$comment: "This needs confirmation.",
				description: "All frontend events",
				owner: "data-eng@reddit.com",
				documentation_links: ["https://docs.google.com/document/d/1MlFAHIHZ91cIW1-PlcFK2iEQvgwteNSNujYpMThwJqg/edit"],
				required: ["action", "action_info_page_type", "app_name", "client_timestamp", "noun", "request_base_url", "request_domain", "screen_view_type", "session_created_timestamp", "session_id", "source", "user_id", "user_logged_in", "uuid"]
			}, {
				$id: "http://com.reddit/schemas/schema_interfaces/give_gold_flows.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Events related to when a user gives gold to another user",
				owner: "economy@reddit.com",
				documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=464493950&range=D43"],
				required: ["app_name", "user_id", "user_created_timestamp", "user_is_admin", "user_number_coins", "user_has_premium", "user_is_premium_subscriber", "user_number_premium_days_remaining", "user_logged_in", "post_id", "post_number_gildings"]
			}, {
				$id: "http://com.reddit/schemas/schema_interfaces/gold_payment_flows.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Events related to a gold payment",
				owner: "economy@reddit.com",
				documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=281579805&range=D23"],
				required: ["correlation_id", "gold_purchase_type", "gold_purcahse_gilded_content", "gold_purchase_content_type", "gold_purchase_number_coins", "payment_currency", "payment_amount_in_smallest_denom", "client_timestamp", "app_name", "user_id", "user_created_timestamp", "user_is_admin", "user_number_coins", "user_has_premium", "user_is_premium_subcriber", "user_number_premium_days_remaining", "user_logged_in", "post_id", "post_number_gildings"]
			}, {
				$id: "http://com.reddit/schemas/schema_interfaces/post.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "All post events",
				documentation_links: [],
				required: ["post_archived", "post_author_id", "post_created_timestamp", "post_domain", "post_flair", "post_id", "post_is_scheduled", "post_nsfw", "post_promoted", "post_spoiler", "post_subreddit_id", "post_subreddit_name", "post_title", "post_type", "post_upvote_ratio", "post_url"]
			}, {
				$id: "http://com.reddit/schemas/schema_interfaces/premium_marketing.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "All premium marketing events",
				owner: "data-eng@reddit.com",
				documentation_links: ["https://docs.google.com/spreadsheets/d/19BSLooJvABoepUwbzWlHvcAtAswuHJJ2T8YGhgrOAwA/edit#gid=1536255464"],
				required: ["correlation_id", "client_timestamp", "app_name", "user_id", "user_created_timestamp", "user_is_admin", "user_number_coins", "user_has_premium", "user_is_premium_subscribe", "user_number_premium_days_remaining", "user_logged_in"]
			}, {
				$id: "http://com.reddit/schemas/schema_interfaces/search.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Search events",
				documentation_links: [],
				required: ["search_query", "search_sort", "search_range", "search_subreddit_id", "search_subreddit_name", "search_origin_page_type", "search_structure_type", "search_query_id"],
				properties: {
					search_typeahead_active: !1,
					search_post_flair_name: !1,
					search_meta_flair_name: !1,
					search_origin_element: !1,
					search_number_links: !1,
					search_links: !1,
					search_subreddit_ids: !1,
					search_number_subreddits: !1
				}
			}, {
				$id: "http://com.reddit/schemas/schema_interfaces/search_post.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Search events that involve a post",
				documentation_links: [],
				required: ["post_id", "post_type", "post_title", "post_nsfw", "post_spoiler", "post_url", "post_promoted", "post_author_id", "post_archived", "post_crosspost_root_id", "post_number_gildings", "post_score", "post_upvote_ratio", "post_comment_type", "post_number_comments", "post_subreddit_id", "post_subreddit_name", "post_domain", "post_created_timestamp"]
			}, {
				$id: "http://com.reddit/schemas/schema_interfaces/user.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "Events that involve user details. (Most events do, exceptions include experiment expose events or performance events).",
				owner: "data-warehouse@reddit.com",
				required: ["user_id", "user_logged_in", "user_has_premium", "user_is_premium_subscriber", "user_subreddit_is_mod", "user_subreddit_is_subscriber", "user_suspect", "user_trouble_maker", "user_preferences_language"]
			}, {
				$id: "http://com.reddit/schemas/schema_interfaces/vote.json",
				$schema: "http://json-schema.org/draft-07/schema#",
				description: "All vote events",
				documentation_links: ["https://docs.google.com/document/d/1-mlheTYKmGSKpvIP0zfQi55AZr2uyLjzOefypifcL20/edit"],
				required: ["app_name", "client_timestamp", "oauth_client_app_type", "oauth_client_id", "oauth_client_name", "post_author_id", "post_body_text", "post_created_timestamp", "post_domain", "post_id", "post_nsfw", "post_promoted", "post_spoiler", "post_title", "post_type", "post_url", "request_domain", "request_user_agent", "session_created_timestamp", "session_id", "session_version", "subreddit_id", "subreddit_name", "user_created_timestamp", "user_id", "user_logged_in"]
			}]
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, i, n, s) {
				return s(e, (function(e, s, o) {
					i = n ? (n = !1, e) : t(i, e, s, o)
				})), i
			}
		},
		"./node_modules/lodash/each.js": function(e, t, i) {
			e.exports = i("./node_modules/lodash/forEach.js")
		},
		"./node_modules/lodash/reduce.js": function(e, t, i) {
			var n = i("./node_modules/lodash/_arrayReduce.js"),
				s = i("./node_modules/lodash/_baseEach.js"),
				o = i("./node_modules/lodash/_baseIteratee.js"),
				r = i("./node_modules/lodash/_baseReduce.js"),
				a = i("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, i) {
				var d = a(e) ? n : r,
					c = arguments.length < 3;
				return d(e, o(t, 4), i, c, s)
			}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~AdminPanel.4849214f6d5906082ff1.js.map