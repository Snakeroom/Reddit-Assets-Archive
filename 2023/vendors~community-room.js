// https://www.redditstatic.com/desktop2x/vendors~community-room.7d690038da65ff769f94.js
// Retrieved at 1/5/2023, 12:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
			["vendors~community-room"], {
				"./node_modules/@reddit/chat/dist/index.js": function(e, t, r) {
						"use strict";
						(function(e, t, n) {
								var o = Object.create,
									i = Object.defineProperty,
									a = Object.getOwnPropertyDescriptor,
									s = Object.getOwnPropertyNames,
									l = Object.getPrototypeOf,
									c = Object.prototype.hasOwnProperty,
									u = (e, t) => () => (e && (t = e(e = 0)), t),
									d = (e, t) => () => (t || e((t = {
										exports: {}
									}).exports, t), t.exports),
									h = (e, t) => {
										for (var r in t) i(e, r, {
											get: t[r],
											enumerable: !0
										})
									},
									p = (e, t, r, n) => {
										if (t && "object" == typeof t || "function" == typeof t)
											for (let o of s(t)) !c.call(e, o) && o !== r && i(e, o, {
												get: () => t[o],
												enumerable: !(n = a(t, o)) || n.enumerable
											});
										return e
									},
									f = (e, t, r) => (r = null != e ? o(l(e)) : {}, p(!t && e && e.__esModule ? r : i(r, "default", {
										value: e,
										enumerable: !0
									}), e)),
									v = (e, t, r, n) => {
										for (var o, s = n > 1 ? void 0 : n ? a(t, r) : t, l = e.length - 1; l >= 0; l--)(o = e[l]) && (s = (n ? o(t, r, s) : o(s)) || s);
										return n && s && i(t, r, s), s
									},
									m = (e, t, r) => {
										if (!t.has(e)) throw TypeError("Cannot " + r)
									},
									g = (e, t, r) => (m(e, t, "read from private field"), r ? r.call(e) : t.get(e)),
									y = (e, t, r) => {
										if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
										t instanceof WeakSet ? t.add(e) : t.set(e, r)
									},
									b = (e, t, r, n) => (m(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r),
									_ = d((t, n) => {
										var o, i, a, s, l, c, u, d, h, p, f, v, m, g, y, b, _, w, x, k, E, S, O, C, A;
										! function(t) {
											var o = "object" == typeof e ? e : "object" == typeof self ? self : "object" == typeof this ? this : {};

											function i(e, t) {
												return e !== o && ("function" == typeof Object.create ? Object.defineProperty(e, "__esModule", {
														value: !0
													}) : e.__esModule = !0),
													function(r, n) {
														return e[r] = t ? t(r, n) : n
													}
											}
											"function" == typeof define && r("./node_modules/webpack/buildin/amd-options.js") ? define("tslib", ["exports"], (function(e) {
												t(i(o, i(e)))
											})) : "object" == typeof n && "object" == typeof n.exports ? t(i(o, i(n.exports))) : t(i(o))
										}((function(e) {
											var t = Object.setPrototypeOf || {
												__proto__: []
											}
											instanceof Array && function(e, t) {
												e.__proto__ = t
											} || function(e, t) {
												for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
											};
											o = function(e, r) {
												if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");

												function n() {
													this.constructor = e
												}
												t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
											}, i = Object.assign || function(e) {
												for (var t, r = 1, n = arguments.length; r < n; r++)
													for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
												return e
											}, a = function(e, t) {
												var r = {};
												for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
												if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
													var o = 0;
													for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
												}
												return r
											}, s = function(e, t, r, n) {
												var o, i = arguments.length,
													a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
												if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n);
												else
													for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
												return i > 3 && a && Object.defineProperty(t, r, a), a
											}, l = function(e, t) {
												return function(r, n) {
													t(r, n, e)
												}
											}, c = function(e, t) {
												if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
											}, u = function(e, t, r, n) {
												return new(r || (r = Promise))((function(o, i) {
													function a(e) {
														try {
															l(n.next(e))
														} catch (t) {
															i(t)
														}
													}

													function s(e) {
														try {
															l(n.throw(e))
														} catch (t) {
															i(t)
														}
													}

													function l(e) {
														e.done ? o(e.value) : function(e) {
															return e instanceof r ? e : new r((function(t) {
																t(e)
															}))
														}(e.value).then(a, s)
													}
													l((n = n.apply(e, t || [])).next())
												}))
											}, d = function(e, t) {
												var r, n, o, i, a = {
													label: 0,
													sent: function() {
														if (1 & o[0]) throw o[1];
														return o[1]
													},
													trys: [],
													ops: []
												};
												return i = {
													next: s(0),
													throw: s(1),
													return: s(2)
												}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
													return this
												}), i;

												function s(i) {
													return function(s) {
														return function(i) {
															if (r) throw new TypeError("Generator is already executing.");
															for (; a;) try {
																if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
																switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
																	case 0:
																	case 1:
																		o = i;
																		break;
																	case 4:
																		return a.label++, {
																			value: i[1],
																			done: !1
																		};
																	case 5:
																		a.label++, n = i[1], i = [0];
																		continue;
																	case 7:
																		i = a.ops.pop(), a.trys.pop();
																		continue;
																	default:
																		if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
																			a = 0;
																			continue
																		}
																		if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
																			a.label = i[1];
																			break
																		}
																		if (6 === i[0] && a.label < o[1]) {
																			a.label = o[1], o = i;
																			break
																		}
																		if (o && a.label < o[2]) {
																			a.label = o[2], a.ops.push(i);
																			break
																		}
																		o[2] && a.ops.pop(), a.trys.pop();
																		continue
																}
																i = t.call(e, a)
															} catch (s) {
																i = [6, s], n = 0
															} finally {
																r = o = 0
															}
															if (5 & i[0]) throw i[1];
															return {
																value: i[0] ? i[1] : void 0,
																done: !0
															}
														}([i, s])
													}
												}
											}, h = function(e, t) {
												for (var r in e) "default" !== r && !Object.prototype.hasOwnProperty.call(t, r) && A(t, e, r)
											}, A = Object.create ? function(e, t, r, n) {
												void 0 === n && (n = r);
												var o = Object.getOwnPropertyDescriptor(t, r);
												(!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = {
													enumerable: !0,
													get: function() {
														return t[r]
													}
												}), Object.defineProperty(e, n, o)
											} : function(e, t, r, n) {
												void 0 === n && (n = r), e[n] = t[r]
											}, p = function(e) {
												var t = "function" == typeof Symbol && Symbol.iterator,
													r = t && e[t],
													n = 0;
												if (r) return r.call(e);
												if (e && "number" == typeof e.length) return {
													next: function() {
														return e && n >= e.length && (e = void 0), {
															value: e && e[n++],
															done: !e
														}
													}
												};
												throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
											}, f = function(e, t) {
												var r = "function" == typeof Symbol && e[Symbol.iterator];
												if (!r) return e;
												var n, o, i = r.call(e),
													a = [];
												try {
													for (;
														(void 0 === t || t-- > 0) && !(n = i.next()).done;) a.push(n.value)
												} catch (s) {
													o = {
														error: s
													}
												} finally {
													try {
														n && !n.done && (r = i.return) && r.call(i)
													} finally {
														if (o) throw o.error
													}
												}
												return a
											}, v = function() {
												for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(f(arguments[t]));
												return e
											}, m = function() {
												for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
												var n = Array(e),
													o = 0;
												for (t = 0; t < r; t++)
													for (var i = arguments[t], a = 0, s = i.length; a < s; a++, o++) n[o] = i[a];
												return n
											}, g = function(e, t, r) {
												if (r || 2 === arguments.length)
													for (var n, o = 0, i = t.length; o < i; o++)(n || !(o in t)) && (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
												return e.concat(n || Array.prototype.slice.call(t))
											}, y = function(e) {
												return this instanceof y ? (this.v = e, this) : new y(e)
											}, b = function(e, t, r) {
												if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
												var n, o = r.apply(e, t || []),
													i = [];
												return n = {}, a("next"), a("throw"), a("return"), n[Symbol.asyncIterator] = function() {
													return this
												}, n;

												function a(e) {
													o[e] && (n[e] = function(t) {
														return new Promise((function(r, n) {
															i.push([e, t, r, n]) > 1 || s(e, t)
														}))
													})
												}

												function s(e, t) {
													try {
														! function(e) {
															e.value instanceof y ? Promise.resolve(e.value.v).then(l, c) : u(i[0][2], e)
														}(o[e](t))
													} catch (r) {
														u(i[0][3], r)
													}
												}

												function l(e) {
													s("next", e)
												}

												function c(e) {
													s("throw", e)
												}

												function u(e, t) {
													e(t), i.shift(), i.length && s(i[0][0], i[0][1])
												}
											}, _ = function(e) {
												var t, r;
												return t = {}, n("next"), n("throw", (function(e) {
													throw e
												})), n("return"), t[Symbol.iterator] = function() {
													return this
												}, t;

												function n(n, o) {
													t[n] = e[n] ? function(t) {
														return (r = !r) ? {
															value: y(e[n](t)),
															done: "return" === n
														} : o ? o(t) : t
													} : o
												}
											}, w = function(e) {
												if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
												var t, r = e[Symbol.asyncIterator];
												return r ? r.call(e) : (e = p(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
													return this
												}, t);

												function n(r) {
													t[r] = e[r] && function(t) {
														return new Promise((function(n, o) {
															(function(e, t, r, n) {
																Promise.resolve(n).then((function(t) {
																	e({
																		value: t,
																		done: r
																	})
																}), t)
															})(n, o, (t = e[r](t)).done, t.value)
														}))
													}
												}
											}, x = function(e, t) {
												return Object.defineProperty ? Object.defineProperty(e, "raw", {
													value: t
												}) : e.raw = t, e
											};
											var r = Object.create ? function(e, t) {
												Object.defineProperty(e, "default", {
													enumerable: !0,
													value: t
												})
											} : function(e, t) {
												e.default = t
											};
											k = function(e) {
												if (e && e.__esModule) return e;
												var t = {};
												if (null != e)
													for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && A(t, e, n);
												return r(t, e), t
											}, E = function(e) {
												return e && e.__esModule ? e : {
													default: e
												}
											}, S = function(e, t, r, n) {
												if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
												if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
												return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
											}, O = function(e, t, r, n, o) {
												if ("m" === n) throw new TypeError("Private method is not writable");
												if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
												if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
												return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r
											}, C = function(e, t) {
												if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
												return "function" == typeof e ? t === e : e.has(t)
											}, e("__extends", o), e("__assign", i), e("__rest", a), e("__decorate", s), e("__param", l), e("__metadata", c), e("__awaiter", u), e("__generator", d), e("__exportStar", h), e("__createBinding", A), e("__values", p), e("__read", f), e("__spread", v), e("__spreadArrays", m), e("__spreadArray", g), e("__await", y), e("__asyncGenerator", b), e("__asyncDelegator", _), e("__asyncValues", w), e("__makeTemplateObject", x), e("__importStar", k), e("__importDefault", E), e("__classPrivateFieldGet", S), e("__classPrivateFieldSet", O), e("__classPrivateFieldIn", C)
										}))
									}),
									w = d((e, t) => {
										! function(n) {
											var o;
											if ("function" == typeof define && r("./node_modules/webpack/buildin/amd-options.js") && (define(n), o = !0), "object" == typeof e && (t.exports = n(), o = !0), !o) {
												var i = window.Cookies,
													a = window.Cookies = n();
												a.noConflict = function() {
													return window.Cookies = i, a
												}
											}
										}((function() {
											function e() {
												for (var e = 0, t = {}; e < arguments.length; e++) {
													var r = arguments[e];
													for (var n in r) t[n] = r[n]
												}
												return t
											}

											function t(e) {
												return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
											}
											return function r(n) {
												function o() {}

												function i(t, r, i) {
													if (!(typeof document > "u")) {
														"number" == typeof(i = e({
															path: "/"
														}, o.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)), i.expires = i.expires ? i.expires.toUTCString() : "";
														try {
															var a = JSON.stringify(r);
															/^[\{\[]/.test(a) && (r = a)
														} catch {}
														r = n.write ? n.write(r, t) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
														var s = "";
														for (var l in i) !i[l] || (s += "; " + l, !0 !== i[l] && (s += "=" + i[l].split(";")[0]));
														return document.cookie = t + "=" + r + s
													}
												}

												function a(e, r) {
													if (!(typeof document > "u")) {
														for (var o = {}, i = document.cookie ? document.cookie.split("; ") : [], a = 0; a < i.length; a++) {
															var s = i[a].split("="),
																l = s.slice(1).join("=");
															!r && '"' === l.charAt(0) && (l = l.slice(1, -1));
															try {
																var c = t(s[0]);
																if (l = (n.read || n)(l, c) || t(l), r) try {
																	l = JSON.parse(l)
																} catch {}
																if (o[c] = l, e === c) break
															} catch {}
														}
														return e ? o[e] : o
													}
												}
												return o.set = i, o.get = function(e) {
													return a(e, !1)
												}, o.getJSON = function(e) {
													return a(e, !0)
												}, o.remove = function(t, r) {
													i(t, "", e(r, {
														expires: -1
													}))
												}, o.defaults = {}, o.withConverter = r, o
											}((function() {}))
										}))
									}),
									x = d((e, t) => {
										t.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
									}),
									k = d((e, t) => {
										t.exports = /[\0-\x1F\x7F-\x9F]/
									}),
									E = d((e, t) => {
										t.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/
									}),
									S = d((e, t) => {
										t.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/
									}),
									O = d((e, t) => {
										t.exports = function(e) {
											var t = {};
											e = e || {}, t.src_Any = x().source, t.src_Cc = k().source, t.src_Z = E().source, t.src_P = S().source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
											var r = "[><｜]";
											return t.src_pseudo_letter = "(?:(?![><｜]|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|[><｜]|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + r + "|[()[\\]{}.,\"'?!\\-;]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = '(^|[><｜]|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t
										}
									}),
									C = d((e, t) => {
										function r(e) {
											return Array.prototype.slice.call(arguments, 1).forEach((function(t) {
												!t || Object.keys(t).forEach((function(r) {
													e[r] = t[r]
												}))
											})), e
										}

										function n(e) {
											return Object.prototype.toString.call(e)
										}

										function o(e) {
											return "[object Function]" === n(e)
										}

										function i(e) {
											return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
										}
										var a = {
											fuzzyLink: !0,
											fuzzyEmail: !0,
											fuzzyIP: !1
										};
										var s = {
												"http:": {
													validate: function(e, t, r) {
														var n = e.slice(t);
														return r.re.http || (r.re.http = new RegExp("^\\/\\/" + r.re.src_auth + r.re.src_host_port_strict + r.re.src_path, "i")), r.re.http.test(n) ? n.match(r.re.http)[0].length : 0
													}
												},
												"https:": "http:",
												"ftp:": "http:",
												"//": {
													validate: function(e, t, r) {
														var n = e.slice(t);
														return r.re.no_http || (r.re.no_http = new RegExp("^" + r.re.src_auth + "(?:localhost|(?:(?:" + r.re.src_domain + ")\\.)+" + r.re.src_domain_root + ")" + r.re.src_port + r.re.src_host_terminator + r.re.src_path, "i")), r.re.no_http.test(n) ? t >= 3 && ":" === e[t - 3] || t >= 3 && "/" === e[t - 3] ? 0 : n.match(r.re.no_http)[0].length : 0
													}
												},
												"mailto:": {
													validate: function(e, t, r) {
														var n = e.slice(t);
														return r.re.mailto || (r.re.mailto = new RegExp("^" + r.re.src_email_name + "@" + r.re.src_host_strict, "i")), r.re.mailto.test(n) ? n.match(r.re.mailto)[0].length : 0
													}
												}
											},
											l = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
											c = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

										function u(e) {
											var t = e.re = O()(e.__opts__),
												r = e.__tlds__.slice();

											function a(e) {
												return e.replace("%TLDS%", t.src_tlds)
											}
											e.onCompile(), e.__tlds_replaced__ || r.push(l), r.push(t.src_xn), t.src_tlds = r.join("|"), t.email_fuzzy = RegExp(a(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(a(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(a(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(a(t.tpl_host_fuzzy_test), "i");
											var s = [];

											function c(e, t) {
												throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
											}
											e.__compiled__ = {}, Object.keys(e.__schemas__).forEach((function(t) {
												var r = e.__schemas__[t];
												if (null !== r) {
													var i = {
														validate: null,
														link: null
													};
													if (e.__compiled__[t] = i, function(e) {
															return "[object Object]" === n(e)
														}(r)) return ! function(e) {
														return "[object RegExp]" === n(e)
													}(r.validate) ? o(r.validate) ? i.validate = r.validate : c(t, r) : i.validate = function(e) {
														return function(t, r) {
															var n = t.slice(r);
															return e.test(n) ? n.match(e)[0].length : 0
														}
													}(r.validate), void(o(r.normalize) ? i.normalize = r.normalize : r.normalize ? c(t, r) : i.normalize = function(e, t) {
														t.normalize(e)
													});
													if (function(e) {
															return "[object String]" === n(e)
														}(r)) return void s.push(t);
													c(t, r)
												}
											})), s.forEach((function(t) {
												!e.__compiled__[e.__schemas__[t]] || (e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate, e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize)
											})), e.__compiled__[""] = {
												validate: null,
												normalize: function(e, t) {
													t.normalize(e)
												}
											};
											var u = Object.keys(e.__compiled__).filter((function(t) {
												return t.length > 0 && e.__compiled__[t]
											})).map(i).join("|");
											e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + u + ")", "ig"), e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
												function(e) {
													e.__index__ = -1, e.__text_cache__ = ""
												}(e)
										}

										function d(e, t) {
											var r = e.__index__,
												n = e.__last_index__,
												o = e.__text_cache__.slice(r, n);
											this.schema = e.__schema__.toLowerCase(), this.index = r + t, this.lastIndex = n + t, this.raw = o, this.text = o, this.url = o
										}

										function h(e, t) {
											var r = new d(e, t);
											return e.__compiled__[r.schema].normalize(r, e), r
										}

										function p(e, t) {
											if (!(this instanceof p)) return new p(e, t);
											t || function(e) {
												return Object.keys(e || {}).reduce((function(e, t) {
													return e || a.hasOwnProperty(t)
												}), !1)
											}(e) && (t = e, e = {}), this.__opts__ = r({}, a, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = r({}, s, e), this.__compiled__ = {}, this.__tlds__ = c, this.__tlds_replaced__ = !1, this.re = {}, u(this)
										}
										p.prototype.add = function(e, t) {
											return this.__schemas__[e] = t, u(this), this
										}, p.prototype.set = function(e) {
											return this.__opts__ = r(this.__opts__, e), this
										}, p.prototype.test = function(e) {
											if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
											var t, r, n, o, i, a, s, l;
											if (this.re.schema_test.test(e))
												for ((s = this.re.schema_search).lastIndex = 0; null !== (t = s.exec(e));)
													if (o = this.testSchemaAt(e, t[2], s.lastIndex)) {
														this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + o;
														break
													} return this.__opts__.fuzzyLink && this.__compiled__["http:"] && ((l = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || l < this.__index__) && null !== (r = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (i = r.index + r[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = r.index + r[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (i = n.index + n[1].length, a = n.index + n[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && a > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = a))), this.__index__ >= 0
										}, p.prototype.pretest = function(e) {
											return this.re.pretest.test(e)
										}, p.prototype.testSchemaAt = function(e, t, r) {
											return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, r, this) : 0
										}, p.prototype.match = function(e) {
											var t = 0,
												r = [];
											this.__index__ >= 0 && this.__text_cache__ === e && (r.push(h(this, t)), t = this.__last_index__);
											for (var n = t ? e.slice(t) : e; this.test(n);) r.push(h(this, t)), n = n.slice(this.__last_index__), t += this.__last_index__;
											return r.length ? r : null
										}, p.prototype.matchAtStart = function(e) {
											if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return null;
											var t = this.re.schema_at_start.exec(e);
											if (!t) return null;
											var r = this.testSchemaAt(e, t[2], t[0].length);
											return r ? (this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + r, h(this, 0)) : null
										}, p.prototype.tlds = function(e, t) {
											return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, t, r) {
												return e !== r[t - 1]
											})).reverse(), u(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, u(this), this)
										}, p.prototype.normalize = function(e) {
											e.schema || (e.url = "http://" + e.url), "mailto:" === e.schema && !/^mailto:/i.test(e.url) && (e.url = "mailto:" + e.url)
										}, p.prototype.onCompile = function() {}, t.exports = p
									}),
									A = d(e => {
										var t, r = e && e.__spreadArray || function(e, t, r) {
											if (r || 2 === arguments.length)
												for (var n, o = 0, i = t.length; o < i; o++)(n || !(o in t)) && (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
											return e.concat(n || Array.prototype.slice.call(t))
										};
										Object.defineProperty(e, "__esModule", {
												value: !0
											}), e.Logger = e.LogLevel = void 0,
											function(e) {
												e[e.DEBUG = 0] = "DEBUG", e[e.INFO = 1] = "INFO", e[e.WARN = 2] = "WARN", e[e.ERROR = 3] = "ERROR"
											}(t = e.LogLevel || (e.LogLevel = {})), e.Logger = {
												ENABLED: typeof window < "u" && typeof location < "u" && -1 !== location.search.indexOf("giphy-debug"),
												LEVEL: 0,
												PREFIX: "GiphyJS",
												debug: function() {
													for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
													e.Logger.ENABLED && e.Logger.LEVEL <= t.DEBUG && console.debug.apply(console, r([e.Logger.PREFIX], n, !1))
												},
												info: function() {
													for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
													e.Logger.ENABLED && e.Logger.LEVEL <= t.INFO && console.info.apply(console, r([e.Logger.PREFIX], n, !1))
												},
												warn: function() {
													for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
													e.Logger.ENABLED && e.Logger.LEVEL <= t.WARN && console.warn.apply(console, r([e.Logger.PREFIX], n, !1))
												},
												error: function() {
													for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
													e.Logger.ENABLED && e.Logger.LEVEL <= t.ERROR && console.error.apply(console, r([e.Logger.PREFIX], n, !1))
												}
											}
									}),
									D = d(e => {
										Object.defineProperty(e, "__esModule", {
											value: !0
										}), e.setRenditionScaleUpMaxPixels = void 0;
										var t = A(),
											r = function(e, t, r) {
												var n, o = 1 / 0;
												return r.forEach((function(r) {
													var i = r.width / e * (r.height / t),
														a = Math.abs(1 - i);
													a < o && (o = a, n = r)
												})), n
											},
											n = 50;
										e.setRenditionScaleUpMaxPixels = function(e) {
											t.Logger.debug("@giphy/js-util set rendition selection scale up max pixels to ".concat(e)), n = e
										}, e.default = function(e, t, o, i) {
											void 0 === i && (i = n);
											var a = e[0],
												s = e.filter((function(e) {
													return e.width * e.height > a.width * a.height && (a = e), t - e.width <= i && o - e.height <= i
												}));
											return 0 === s.length ? a : r(t, o, s)
										}
									}),
									$ = d(e => {
										Object.defineProperty(e, "__esModule", {
											value: !0
										}), e.pick = e.without = e.take = e.forEach = e.mapValues = void 0, e.mapValues = function(e, t) {
											if (Array.isArray(e)) throw "This map is just for objects, just use array.map for arrays";
											return Object.keys(e).reduce((function(r, n) {
												return r[n] = t(e[n], n), r
											}), {})
										}, e.forEach = function(e, t) {
											if (Array.isArray(e)) throw "This map is just for objects, just use array.forEach for arrays";
											return Object.keys(e).forEach((function(r) {
												t(e[r], r)
											}))
										}, e.take = function(e, t) {
											return void 0 === t && (t = 0), e.slice(0, t)
										}, e.without = function(e, t) {
											return e.filter((function(e) {
												return -1 === t.indexOf(e)
											}))
										}, e.pick = function(e, t) {
											var r = {};
											return t.forEach((function(t) {
												void 0 !== e[t] && (r[t] = e[t])
											})), r
										}
									}),
									R = d(e => {
										var t = e && e.__assign || function() {
											return (t = Object.assign || function(e) {
												for (var t, r = 1, n = arguments.length; r < n; r++)
													for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
												return e
											}).apply(this, arguments)
										};
										Object.defineProperty(e, "__esModule", {
											value: !0
										});
										e.default = function(e) {
											var r = 0,
												n = 0,
												o = e.offsetWidth,
												i = e.offsetHeight;
											do {
												r += e.offsetLeft, n += e.offsetTop, e = e.offsetParent
											} while (e);
											var a = {
												left: r,
												top: n,
												width: o,
												height: i,
												right: r + o,
												bottom: n + i,
												x: r,
												y: n
											};
											return t(t({}, a), {
												toJSON: function() {
													return JSON.stringify(a)
												}
											})
										}
									});

								function j() {
									if (!I && !(I = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
									return I(P)
								}
								var I, P, T, M = u(() => {
										P = new Uint8Array(16)
									}),
									F = u(() => {
										T = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i
									});

								function z(e) {
									return "string" == typeof e && T.test(e)
								}
								var N, L = u(() => {
									F(), N = z
								});

								function B(e) {
									var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
										r = (q[e[t + 0]] + q[e[t + 1]] + q[e[t + 2]] + q[e[t + 3]] + "-" + q[e[t + 4]] + q[e[t + 5]] + "-" + q[e[t + 6]] + q[e[t + 7]] + "-" + q[e[t + 8]] + q[e[t + 9]] + "-" + q[e[t + 10]] + q[e[t + 11]] + q[e[t + 12]] + q[e[t + 13]] + q[e[t + 14]] + q[e[t + 15]]).toLowerCase();
									if (!N(r)) throw TypeError("Stringified UUID is invalid");
									return r
								}
								var q, U, V, Q = u(() => {
									for (L(), q = [], U = 0; U < 256; ++U) q.push((U + 256).toString(16).substr(1));
									V = B
								});

								function H(e, t, r) {
									var n = t && r || 0,
										o = t || new Array(16),
										i = (e = e || {}).node || W,
										a = void 0 !== e.clockseq ? e.clockseq : G;
									if (null == i || null == a) {
										var s = e.random || (e.rng || j)();
										null == i && (i = W = [1 | s[0], s[1], s[2], s[3], s[4], s[5]]), null == a && (a = G = 16383 & (s[6] << 8 | s[7]))
									}
									var l = void 0 !== e.msecs ? e.msecs : Date.now(),
										c = void 0 !== e.nsecs ? e.nsecs : J + 1,
										u = l - Y + (c - J) / 1e4;
									if (u < 0 && void 0 === e.clockseq && (a = a + 1 & 16383), (u < 0 || l > Y) && void 0 === e.nsecs && (c = 0), c >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
									Y = l, J = c, G = a;
									var d = (1e4 * (268435455 & (l += 122192928e5)) + c) % 4294967296;
									o[n++] = d >>> 24 & 255, o[n++] = d >>> 16 & 255, o[n++] = d >>> 8 & 255, o[n++] = 255 & d;
									var h = l / 4294967296 * 1e4 & 268435455;
									o[n++] = h >>> 8 & 255, o[n++] = 255 & h, o[n++] = h >>> 24 & 15 | 16, o[n++] = h >>> 16 & 255, o[n++] = a >>> 8 | 128, o[n++] = 255 & a;
									for (var p = 0; p < 6; ++p) o[n + p] = i[p];
									return t || V(o)
								}
								var W, G, Y, J, K, X = u(() => {
									M(), Q(), Y = 0, J = 0, K = H
								});

								function Z(e) {
									if (!N(e)) throw TypeError("Invalid UUID");
									var t, r = new Uint8Array(16);
									return r[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, r[1] = t >>> 16 & 255, r[2] = t >>> 8 & 255, r[3] = 255 & t, r[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, r[5] = 255 & t, r[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, r[7] = 255 & t, r[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8, r[9] = 255 & t, r[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, r[11] = t / 4294967296 & 255, r[12] = t >>> 24 & 255, r[13] = t >>> 16 & 255, r[14] = t >>> 8 & 255, r[15] = 255 & t, r
								}
								var ee, te = u(() => {
									L(), ee = Z
								});

								function re(e, t, r) {
									function n(e, n, o, i) {
										if ("string" == typeof e && (e = function(e) {
												e = unescape(encodeURIComponent(e));
												for (var t = [], r = 0; r < e.length; ++r) t.push(e.charCodeAt(r));
												return t
											}(e)), "string" == typeof n && (n = ee(n)), 16 !== n.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
										var a = new Uint8Array(16 + e.length);
										if (a.set(n), a.set(e, n.length), (a = r(a))[6] = 15 & a[6] | t, a[8] = 63 & a[8] | 128, o) {
											i = i || 0;
											for (var s = 0; s < 16; ++s) o[i + s] = a[s];
											return o
										}
										return V(a)
									}
									try {
										n.name = e
									} catch {}
									return n.DNS = ne, n.URL = oe, n
								}
								var ne, oe, ie = u(() => {
									Q(), te(), ne = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", oe = "6ba7b811-9dad-11d1-80b4-00c04fd430c8"
								});

								function ae(e) {
									if ("string" == typeof e) {
										var t = unescape(encodeURIComponent(e));
										e = new Uint8Array(t.length);
										for (var r = 0; r < t.length; ++r) e[r] = t.charCodeAt(r)
									}
									return function(e) {
										for (var t = [], r = 32 * e.length, n = "0123456789abcdef", o = 0; o < r; o += 8) {
											var i = e[o >> 5] >>> o % 32 & 255,
												a = parseInt(n.charAt(i >>> 4 & 15) + n.charAt(15 & i), 16);
											t.push(a)
										}
										return t
									}(function(e, t) {
										e[t >> 5] |= 128 << t % 32, e[se(t) - 1] = t;
										for (var r = 1732584193, n = -271733879, o = -1732584194, i = 271733878, a = 0; a < e.length; a += 16) {
											var s = r,
												l = n,
												c = o,
												u = i;
											r = ue(r, n, o, i, e[a], 7, -680876936), i = ue(i, r, n, o, e[a + 1], 12, -389564586), o = ue(o, i, r, n, e[a + 2], 17, 606105819), n = ue(n, o, i, r, e[a + 3], 22, -1044525330), r = ue(r, n, o, i, e[a + 4], 7, -176418897), i = ue(i, r, n, o, e[a + 5], 12, 1200080426), o = ue(o, i, r, n, e[a + 6], 17, -1473231341), n = ue(n, o, i, r, e[a + 7], 22, -45705983), r = ue(r, n, o, i, e[a + 8], 7, 1770035416), i = ue(i, r, n, o, e[a + 9], 12, -1958414417), o = ue(o, i, r, n, e[a + 10], 17, -42063), n = ue(n, o, i, r, e[a + 11], 22, -1990404162), r = ue(r, n, o, i, e[a + 12], 7, 1804603682), i = ue(i, r, n, o, e[a + 13], 12, -40341101), o = ue(o, i, r, n, e[a + 14], 17, -1502002290), n = ue(n, o, i, r, e[a + 15], 22, 1236535329), r = de(r, n, o, i, e[a + 1], 5, -165796510), i = de(i, r, n, o, e[a + 6], 9, -1069501632), o = de(o, i, r, n, e[a + 11], 14, 643717713), n = de(n, o, i, r, e[a], 20, -373897302), r = de(r, n, o, i, e[a + 5], 5, -701558691), i = de(i, r, n, o, e[a + 10], 9, 38016083), o = de(o, i, r, n, e[a + 15], 14, -660478335), n = de(n, o, i, r, e[a + 4], 20, -405537848), r = de(r, n, o, i, e[a + 9], 5, 568446438), i = de(i, r, n, o, e[a + 14], 9, -1019803690), o = de(o, i, r, n, e[a + 3], 14, -187363961), n = de(n, o, i, r, e[a + 8], 20, 1163531501), r = de(r, n, o, i, e[a + 13], 5, -1444681467), i = de(i, r, n, o, e[a + 2], 9, -51403784), o = de(o, i, r, n, e[a + 7], 14, 1735328473), n = de(n, o, i, r, e[a + 12], 20, -1926607734), r = he(r, n, o, i, e[a + 5], 4, -378558), i = he(i, r, n, o, e[a + 8], 11, -2022574463), o = he(o, i, r, n, e[a + 11], 16, 1839030562), n = he(n, o, i, r, e[a + 14], 23, -35309556), r = he(r, n, o, i, e[a + 1], 4, -1530992060), i = he(i, r, n, o, e[a + 4], 11, 1272893353), o = he(o, i, r, n, e[a + 7], 16, -155497632), n = he(n, o, i, r, e[a + 10], 23, -1094730640), r = he(r, n, o, i, e[a + 13], 4, 681279174), i = he(i, r, n, o, e[a], 11, -358537222), o = he(o, i, r, n, e[a + 3], 16, -722521979), n = he(n, o, i, r, e[a + 6], 23, 76029189), r = he(r, n, o, i, e[a + 9], 4, -640364487), i = he(i, r, n, o, e[a + 12], 11, -421815835), o = he(o, i, r, n, e[a + 15], 16, 530742520), n = he(n, o, i, r, e[a + 2], 23, -995338651), r = pe(r, n, o, i, e[a], 6, -198630844), i = pe(i, r, n, o, e[a + 7], 10, 1126891415), o = pe(o, i, r, n, e[a + 14], 15, -1416354905), n = pe(n, o, i, r, e[a + 5], 21, -57434055), r = pe(r, n, o, i, e[a + 12], 6, 1700485571), i = pe(i, r, n, o, e[a + 3], 10, -1894986606), o = pe(o, i, r, n, e[a + 10], 15, -1051523), n = pe(n, o, i, r, e[a + 1], 21, -2054922799), r = pe(r, n, o, i, e[a + 8], 6, 1873313359), i = pe(i, r, n, o, e[a + 15], 10, -30611744), o = pe(o, i, r, n, e[a + 6], 15, -1560198380), n = pe(n, o, i, r, e[a + 13], 21, 1309151649), r = pe(r, n, o, i, e[a + 4], 6, -145523070), i = pe(i, r, n, o, e[a + 11], 10, -1120210379), o = pe(o, i, r, n, e[a + 2], 15, 718787259), n = pe(n, o, i, r, e[a + 9], 21, -343485551), r = le(r, s), n = le(n, l), o = le(o, c), i = le(i, u)
										}
										return [r, n, o, i]
									}(function(e) {
										if (0 === e.length) return [];
										for (var t = 8 * e.length, r = new Uint32Array(se(t)), n = 0; n < t; n += 8) r[n >> 5] |= (255 & e[n / 8]) << n % 32;
										return r
									}(e), 8 * e.length))
								}

								function se(e) {
									return 14 + (e + 64 >>> 9 << 4) + 1
								}

								function le(e, t) {
									var r = (65535 & e) + (65535 & t);
									return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
								}

								function ce(e, t, r, n, o, i) {
									return le(function(e, t) {
										return e << t | e >>> 32 - t
									}(le(le(t, e), le(n, i)), o), r)
								}

								function ue(e, t, r, n, o, i, a) {
									return ce(t & r | ~t & n, e, t, o, i, a)
								}

								function de(e, t, r, n, o, i, a) {
									return ce(t & n | r & ~n, e, t, o, i, a)
								}

								function he(e, t, r, n, o, i, a) {
									return ce(t ^ r ^ n, e, t, o, i, a)
								}

								function pe(e, t, r, n, o, i, a) {
									return ce(r ^ (t | ~n), e, t, o, i, a)
								}
								var fe, ve, me, ge = u(() => {
										fe = ae
									}),
									ye = u(() => {
										ie(), ge(), ve = re("v3", 48, fe), me = ve
									});

								function be(e, t, r) {
									var n = (e = e || {}).random || (e.rng || j)();
									if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t) {
										r = r || 0;
										for (var o = 0; o < 16; ++o) t[r + o] = n[o];
										return t
									}
									return V(n)
								}
								var _e, we = u(() => {
									M(), Q(), _e = be
								});

								function xe(e, t, r, n) {
									switch (e) {
										case 0:
											return t & r ^ ~t & n;
										case 1:
											return t ^ r ^ n;
										case 2:
											return t & r ^ t & n ^ r & n;
										case 3:
											return t ^ r ^ n
									}
								}

								function ke(e, t) {
									return e << t | e >>> 32 - t
								}

								function Ee(e) {
									var t = [1518500249, 1859775393, 2400959708, 3395469782],
										r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
									if ("string" == typeof e) {
										var n = unescape(encodeURIComponent(e));
										e = [];
										for (var o = 0; o < n.length; ++o) e.push(n.charCodeAt(o))
									} else Array.isArray(e) || (e = Array.prototype.slice.call(e));
									e.push(128);
									for (var i = e.length / 4 + 2, a = Math.ceil(i / 16), s = new Array(a), l = 0; l < a; ++l) {
										for (var c = new Uint32Array(16), u = 0; u < 16; ++u) c[u] = e[64 * l + 4 * u] << 24 | e[64 * l + 4 * u + 1] << 16 | e[64 * l + 4 * u + 2] << 8 | e[64 * l + 4 * u + 3];
										s[l] = c
									}
									s[a - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32), s[a - 1][14] = Math.floor(s[a - 1][14]), s[a - 1][15] = 8 * (e.length - 1) & 4294967295;
									for (var d = 0; d < a; ++d) {
										for (var h = new Uint32Array(80), p = 0; p < 16; ++p) h[p] = s[d][p];
										for (var f = 16; f < 80; ++f) h[f] = ke(h[f - 3] ^ h[f - 8] ^ h[f - 14] ^ h[f - 16], 1);
										for (var v = r[0], m = r[1], g = r[2], y = r[3], b = r[4], _ = 0; _ < 80; ++_) {
											var w = Math.floor(_ / 20),
												x = ke(v, 5) + xe(w, m, g, y) + b + t[w] + h[_] >>> 0;
											b = y, y = g, g = ke(m, 30) >>> 0, m = v, v = x
										}
										r[0] = r[0] + v >>> 0, r[1] = r[1] + m >>> 0, r[2] = r[2] + g >>> 0, r[3] = r[3] + y >>> 0, r[4] = r[4] + b >>> 0
									}
									return [r[0] >> 24 & 255, r[0] >> 16 & 255, r[0] >> 8 & 255, 255 & r[0], r[1] >> 24 & 255, r[1] >> 16 & 255, r[1] >> 8 & 255, 255 & r[1], r[2] >> 24 & 255, r[2] >> 16 & 255, r[2] >> 8 & 255, 255 & r[2], r[3] >> 24 & 255, r[3] >> 16 & 255, r[3] >> 8 & 255, 255 & r[3], r[4] >> 24 & 255, r[4] >> 16 & 255, r[4] >> 8 & 255, 255 & r[4]]
								}
								var Se, Oe, Ce, Ae, De = u(() => {
										Se = Ee
									}),
									$e = u(() => {
										ie(), De(), Oe = re("v5", 80, Se), Ce = Oe
									}),
									Re = u(() => {
										Ae = "00000000-0000-0000-0000-000000000000"
									});

								function je(e) {
									if (!N(e)) throw TypeError("Invalid UUID");
									return parseInt(e.substr(14, 1), 16)
								}
								var Ie, Pe = u(() => {
										L(), Ie = je
									}),
									Te = {};
								h(Te, {
									NIL: () => Ae,
									parse: () => ee,
									stringify: () => V,
									v1: () => K,
									v3: () => me,
									v4: () => _e,
									v5: () => Ce,
									validate: () => N,
									version: () => Ie
								});
								var Me, Fe = u(() => {
										X(), ye(), we(), $e(), Re(), Pe(), L(), Q(), te()
									}),
									ze = d(e => {
										Object.defineProperty(e, "__esModule", {
											value: !0
										});
										var t = (Fe(), (e => p(i({}, "__esModule", {
												value: !0
											}), e))(Te)),
											r = "";
										e.default = function() {
											if (!r) {
												try {
													r = sessionStorage.getItem("giphyPingbackId")
												} catch {}
												if (!r) {
													var e = (new Date).getTime().toString(16);
													try {
														r = "".concat(e).concat((0, t.v4)().replace(/-/g, "")).substring(0, 16)
													} catch {
														r = function() {
															for (var e = "", t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = t.length, n = 0; n < 16; n++) e += t.charAt(Math.floor(Math.random() * r));
															return e
														}()
													}
													try {
														sessionStorage.setItem("giphyPingbackId", r)
													} catch {}
												}
											}
											return r
										}
									}),
									Ne = d(e => {
										Object.defineProperty(e, "__esModule", {
											value: !0
										}), e.checkIfWebP = e.SUPPORTS_WEBP = void 0, e.SUPPORTS_WEBP = null, e.checkIfWebP = new Promise((function(t) {
											typeof Image > "u" && t(!1);
											var r = new Image;
											r.onload = function() {
												e.SUPPORTS_WEBP = !0, t(e.SUPPORTS_WEBP)
											}, r.onerror = function() {
												e.SUPPORTS_WEBP = !1, t(e.SUPPORTS_WEBP)
											}, r.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"
										}))
									}),
									Le = d(e => {
										var t = e && e.__assign || function() {
												return (t = Object.assign || function(e) {
													for (var t, r = 1, n = arguments.length; r < n; r++)
														for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
													return e
												}).apply(this, arguments)
											},
											r = e && e.__importDefault || function(e) {
												return e && e.__esModule ? e : {
													default: e
												}
											};
										Object.defineProperty(e, "__esModule", {
											value: !0
										}), e.getAltText = e.getGifWidth = e.getGifHeight = e.getBestRenditionUrl = e.getBestRendition = e.getBestVideo = e.getSpecificRendition = void 0;
										var n = r(D()),
											o = $(),
											i = Ne();
										e.getSpecificRendition = function(e, t, r, n) {
											var o = e.images,
												a = e.is_sticker;
											if (void 0 === r && (r = !1), void 0 === n && (n = !1), !o || !t) return "";
											r = r && !n;
											var s = o["".concat(t).concat(r ? "_still" : "")];
											if (s) {
												if (a || r) return s.url;
												var l = i.SUPPORTS_WEBP && s.webp;
												return n ? s.mp4 : l || s.url
											}
											return ""
										};
										e.getBestVideo = function(e, r, o) {
											var i = null == e ? void 0 : e.assets;
											if (i) {
												delete(i = t({}, i)).source;
												var a = Object.values(i).sort((function(e, t) {
													return e.width - t.width
												}));
												return (0, n.default)(a, r, o)
											}
										};
										e.getBestRendition = function(e, r, i, a) {
											var s = (0, o.pick)(e, ["original", "fixed_width", "fixed_height", "fixed_width_small", "fixed_height_small"]),
												l = Object.entries(s).map((function(e) {
													var r = e[0],
														n = e[1];
													return t({
														renditionName: r
													}, n)
												}));
											return (0, n.default)(l, r, i, a)
										};
										e.getBestRenditionUrl = function(t, r, n, o) {
											var a = t.images,
												s = t.video,
												l = t.type;
											if (void 0 === o && (o = {
													isStill: !1,
													useVideo: !1
												}), !r || !n || !a) return "";
											var c = o.useVideo,
												u = o.isStill,
												d = o.scaleUpMaxPixels,
												h = function(e, t, r) {
													return "video" === e && r && r.previews && !Object.keys(t).length ? r.previews : t
												}(l, a, s),
												p = (0, e.getBestRendition)(h, r, n, d).renditionName,
												f = h["".concat(p).concat(u && !c ? "_still" : "")];
											return (c ? f.mp4 : i.SUPPORTS_WEBP && f.webp ? f.webp : f.url) || ""
										};
										e.getGifHeight = function(e, t) {
											var r = e.images.fixed_width;
											if (r) {
												var n = r.width / r.height;
												return Math.round(t / n)
											}
											return 0
										};
										e.getGifWidth = function(e, t) {
											var r = e.images.fixed_width;
											if (r) {
												var n = r.width / r.height;
												return Math.round(t * n)
											}
											return 0
										};
										e.getAltText = function(e) {
											var t = e.user,
												r = e.tags,
												n = void 0 === r ? [] : r,
												i = e.is_sticker,
												a = void 0 !== i && i,
												s = e.title,
												l = void 0 === s ? "" : s;
											if (l) return l;
											var c = t && t.username || "",
												u = (0, o.take)((0, o.without)(n, ["transparent"]), c ? 4 : 5);
											return "".concat(c ? "".concat(c, " ") : "").concat(u.join(" "), " ").concat(a ? "Sticker" : "GIF")
										}
									}),
									Be = d(t => {
										Object.defineProperty(t, "__esModule", {
											value: !0
										}), t.appendGiphySDKRequestParam = t.appendGiphySDKRequestHeader = t.getGiphySDKRequestHeaders = void 0;
										var r = (typeof window < "u" ? window : e) || {};
										r._GIPHY_SDK_HEADERS_ = r._GIPHY_SDK_HEADERS_ || (r.Headers ? new r.Headers({
											"X-GIPHY-SDK-PLATFORM": "web"
										}) : void 0);
										t.getGiphySDKRequestHeaders = function() {
											return r._GIPHY_SDK_HEADERS_
										};
										t.appendGiphySDKRequestHeader = function(e, r) {
											var n;
											return null === (n = (0, t.getGiphySDKRequestHeaders)()) || void 0 === n ? void 0 : n.set(e, r)
										};
										t.appendGiphySDKRequestParam = function(e, r) {
											var n;
											return null === (n = (0, t.getGiphySDKRequestHeaders)()) || void 0 === n ? void 0 : n.set(e, r)
										}
									}),
									qe = d(e => {
										var t = e && e.__createBinding || (Object.create ? function(e, t, r, n) {
												void 0 === n && (n = r);
												var o = Object.getOwnPropertyDescriptor(t, r);
												(!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = {
													enumerable: !0,
													get: function() {
														return t[r]
													}
												}), Object.defineProperty(e, n, o)
											} : function(e, t, r, n) {
												void 0 === n && (n = r), e[n] = t[r]
											}),
											r = e && e.__exportStar || function(e, r) {
												for (var n in e) "default" !== n && !Object.prototype.hasOwnProperty.call(r, n) && t(r, e, n)
											},
											n = e && e.__importDefault || function(e) {
												return e && e.__esModule ? e : {
													default: e
												}
											};
										Object.defineProperty(e, "__esModule", {
											value: !0
										}), e.checkIfWebP = e.getSpecificRendition = e.getGifWidth = e.getGifHeight = e.getBestVideo = e.getBestRenditionUrl = e.getBestRendition = e.getAltText = e.getPingbackId = e.getClientRect = e.setRenditionScaleUpMaxPixels = e.bestfit = void 0;
										var o = D();
										Object.defineProperty(e, "bestfit", {
											enumerable: !0,
											get: function() {
												return n(o).default
											}
										}), Object.defineProperty(e, "setRenditionScaleUpMaxPixels", {
											enumerable: !0,
											get: function() {
												return o.setRenditionScaleUpMaxPixels
											}
										}), r($(), e);
										var i = R();
										Object.defineProperty(e, "getClientRect", {
											enumerable: !0,
											get: function() {
												return n(i).default
											}
										});
										var a = ze();
										Object.defineProperty(e, "getPingbackId", {
											enumerable: !0,
											get: function() {
												return n(a).default
											}
										});
										var s = Le();
										Object.defineProperty(e, "getAltText", {
											enumerable: !0,
											get: function() {
												return s.getAltText
											}
										}), Object.defineProperty(e, "getBestRendition", {
											enumerable: !0,
											get: function() {
												return s.getBestRendition
											}
										}), Object.defineProperty(e, "getBestRenditionUrl", {
											enumerable: !0,
											get: function() {
												return s.getBestRenditionUrl
											}
										}), Object.defineProperty(e, "getBestVideo", {
											enumerable: !0,
											get: function() {
												return s.getBestVideo
											}
										}), Object.defineProperty(e, "getGifHeight", {
											enumerable: !0,
											get: function() {
												return s.getGifHeight
											}
										}), Object.defineProperty(e, "getGifWidth", {
											enumerable: !0,
											get: function() {
												return s.getGifWidth
											}
										}), Object.defineProperty(e, "getSpecificRendition", {
											enumerable: !0,
											get: function() {
												return s.getSpecificRendition
											}
										}), r(A(), e), r(Be(), e);
										var l = Ne();
										Object.defineProperty(e, "checkIfWebP", {
											enumerable: !0,
											get: function() {
												return l.checkIfWebP
											}
										})
									}),
									Ue = d((e, t) => {
										t.exports = function() {
											if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
											if ("symbol" == typeof Symbol.iterator) return !0;
											var e = {},
												t = Symbol("test"),
												r = Object(t);
											if ("string" == typeof t || "[object Symbol]" !== Object.prototype.toString.call(t) || "[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
											for (t in e[t] = 42, e) return !1;
											if ("function" == typeof Object.keys && 0 !== Object.keys(e).length || "function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1;
											var n = Object.getOwnPropertySymbols(e);
											if (1 !== n.length || n[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
											if ("function" == typeof Object.getOwnPropertyDescriptor) {
												var o = Object.getOwnPropertyDescriptor(e, t);
												if (42 !== o.value || !0 !== o.enumerable) return !1
											}
											return !0
										}
									}),
									Ve = d((e, t) => {
										var r = typeof Symbol < "u" && Symbol,
											n = Ue();
										t.exports = function() {
											return "function" == typeof r && "function" == typeof Symbol && "symbol" == typeof r("foo") && "symbol" == typeof Symbol("bar") && n()
										}
									}),
									Qe = d((e, t) => {
										var r = "Function.prototype.bind called on incompatible ",
											n = Array.prototype.slice,
											o = Object.prototype.toString,
											i = "[object Function]";
										t.exports = function(e) {
											var t = this;
											if ("function" != typeof t || o.call(t) !== i) throw new TypeError(r + t);
											for (var a, s = n.call(arguments, 1), l = function() {
													if (this instanceof a) {
														var r = t.apply(this, s.concat(n.call(arguments)));
														return Object(r) === r ? r : this
													}
													return t.apply(e, s.concat(n.call(arguments)))
												}, c = Math.max(0, t.length - s.length), u = [], d = 0; d < c; d++) u.push("$" + d);
											if (a = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(l), t.prototype) {
												var h = function() {};
												h.prototype = t.prototype, a.prototype = new h, h.prototype = null
											}
											return a
										}
									}),
									He = d((e, t) => {
										var r = Qe();
										t.exports = Function.prototype.bind || r
									}),
									We = d((e, t) => {
										var r = He();
										t.exports = r.call(Function.call, Object.prototype.hasOwnProperty)
									}),
									Ge = d((e, t) => {
										var r, n = SyntaxError,
											o = Function,
											i = TypeError,
											a = function(e) {
												try {
													return o('"use strict"; return (' + e + ").constructor;")()
												} catch {}
											},
											s = Object.getOwnPropertyDescriptor;
										if (s) try {
											s({}, "")
										} catch {
											s = null
										}
										var l = function() {
												throw new i
											},
											c = s ? function() {
												try {
													return arguments.callee, l
												} catch {
													try {
														return s(arguments, "callee").get
													} catch {
														return l
													}
												}
											}() : l,
											u = Ve()(),
											d = Object.getPrototypeOf || function(e) {
												return e.__proto__
											},
											h = {},
											p = typeof Uint8Array > "u" ? r : d(Uint8Array),
											f = {
												"%AggregateError%": typeof AggregateError > "u" ? r : AggregateError,
												"%Array%": Array,
												"%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer,
												"%ArrayIteratorPrototype%": u ? d([][Symbol.iterator]()) : r,
												"%AsyncFromSyncIteratorPrototype%": r,
												"%AsyncFunction%": h,
												"%AsyncGenerator%": h,
												"%AsyncGeneratorFunction%": h,
												"%AsyncIteratorPrototype%": h,
												"%Atomics%": typeof Atomics > "u" ? r : Atomics,
												"%BigInt%": typeof BigInt > "u" ? r : BigInt,
												"%Boolean%": Boolean,
												"%DataView%": typeof DataView > "u" ? r : DataView,
												"%Date%": Date,
												"%decodeURI%": decodeURI,
												"%decodeURIComponent%": decodeURIComponent,
												"%encodeURI%": encodeURI,
												"%encodeURIComponent%": encodeURIComponent,
												"%Error%": Error,
												"%eval%": eval,
												"%EvalError%": EvalError,
												"%Float32Array%": typeof Float32Array > "u" ? r : Float32Array,
												"%Float64Array%": typeof Float64Array > "u" ? r : Float64Array,
												"%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? r : FinalizationRegistry,
												"%Function%": o,
												"%GeneratorFunction%": h,
												"%Int8Array%": typeof Int8Array > "u" ? r : Int8Array,
												"%Int16Array%": typeof Int16Array > "u" ? r : Int16Array,
												"%Int32Array%": typeof Int32Array > "u" ? r : Int32Array,
												"%isFinite%": isFinite,
												"%isNaN%": isNaN,
												"%IteratorPrototype%": u ? d(d([][Symbol.iterator]())) : r,
												"%JSON%": "object" == typeof JSON ? JSON : r,
												"%Map%": typeof Map > "u" ? r : Map,
												"%MapIteratorPrototype%": typeof Map > "u" || !u ? r : d((new Map)[Symbol.iterator]()),
												"%Math%": Math,
												"%Number%": Number,
												"%Object%": Object,
												"%parseFloat%": parseFloat,
												"%parseInt%": parseInt,
												"%Promise%": typeof Promise > "u" ? r : Promise,
												"%Proxy%": typeof Proxy > "u" ? r : Proxy,
												"%RangeError%": RangeError,
												"%ReferenceError%": ReferenceError,
												"%Reflect%": typeof Reflect > "u" ? r : Reflect,
												"%RegExp%": RegExp,
												"%Set%": typeof Set > "u" ? r : Set,
												"%SetIteratorPrototype%": typeof Set > "u" || !u ? r : d((new Set)[Symbol.iterator]()),
												"%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? r : SharedArrayBuffer,
												"%String%": String,
												"%StringIteratorPrototype%": u ? d("" [Symbol.iterator]()) : r,
												"%Symbol%": u ? Symbol : r,
												"%SyntaxError%": n,
												"%ThrowTypeError%": c,
												"%TypedArray%": p,
												"%TypeError%": i,
												"%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array,
												"%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? r : Uint8ClampedArray,
												"%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array,
												"%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array,
												"%URIError%": URIError,
												"%WeakMap%": typeof WeakMap > "u" ? r : WeakMap,
												"%WeakRef%": typeof WeakRef > "u" ? r : WeakRef,
												"%WeakSet%": typeof WeakSet > "u" ? r : WeakSet
											},
											v = {
												"%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
												"%ArrayPrototype%": ["Array", "prototype"],
												"%ArrayProto_entries%": ["Array", "prototype", "entries"],
												"%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
												"%ArrayProto_keys%": ["Array", "prototype", "keys"],
												"%ArrayProto_values%": ["Array", "prototype", "values"],
												"%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
												"%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
												"%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
												"%BooleanPrototype%": ["Boolean", "prototype"],
												"%DataViewPrototype%": ["DataView", "prototype"],
												"%DatePrototype%": ["Date", "prototype"],
												"%ErrorPrototype%": ["Error", "prototype"],
												"%EvalErrorPrototype%": ["EvalError", "prototype"],
												"%Float32ArrayPrototype%": ["Float32Array", "prototype"],
												"%Float64ArrayPrototype%": ["Float64Array", "prototype"],
												"%FunctionPrototype%": ["Function", "prototype"],
												"%Generator%": ["GeneratorFunction", "prototype"],
												"%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
												"%Int8ArrayPrototype%": ["Int8Array", "prototype"],
												"%Int16ArrayPrototype%": ["Int16Array", "prototype"],
												"%Int32ArrayPrototype%": ["Int32Array", "prototype"],
												"%JSONParse%": ["JSON", "parse"],
												"%JSONStringify%": ["JSON", "stringify"],
												"%MapPrototype%": ["Map", "prototype"],
												"%NumberPrototype%": ["Number", "prototype"],
												"%ObjectPrototype%": ["Object", "prototype"],
												"%ObjProto_toString%": ["Object", "prototype", "toString"],
												"%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
												"%PromisePrototype%": ["Promise", "prototype"],
												"%PromiseProto_then%": ["Promise", "prototype", "then"],
												"%Promise_all%": ["Promise", "all"],
												"%Promise_reject%": ["Promise", "reject"],
												"%Promise_resolve%": ["Promise", "resolve"],
												"%RangeErrorPrototype%": ["RangeError", "prototype"],
												"%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
												"%RegExpPrototype%": ["RegExp", "prototype"],
												"%SetPrototype%": ["Set", "prototype"],
												"%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
												"%StringPrototype%": ["String", "prototype"],
												"%SymbolPrototype%": ["Symbol", "prototype"],
												"%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
												"%TypedArrayPrototype%": ["TypedArray", "prototype"],
												"%TypeErrorPrototype%": ["TypeError", "prototype"],
												"%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
												"%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
												"%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
												"%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
												"%URIErrorPrototype%": ["URIError", "prototype"],
												"%WeakMapPrototype%": ["WeakMap", "prototype"],
												"%WeakSetPrototype%": ["WeakSet", "prototype"]
											},
											m = He(),
											g = We(),
											y = m.call(Function.call, Array.prototype.concat),
											b = m.call(Function.apply, Array.prototype.splice),
											_ = m.call(Function.call, String.prototype.replace),
											w = m.call(Function.call, String.prototype.slice),
											x = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
											k = /\\(\\)?/g,
											E = function(e) {
												var t = w(e, 0, 1),
													r = w(e, -1);
												if ("%" === t && "%" !== r) throw new n("invalid intrinsic syntax, expected closing `%`");
												if ("%" === r && "%" !== t) throw new n("invalid intrinsic syntax, expected opening `%`");
												var o = [];
												return _(e, x, (function(e, t, r, n) {
													o[o.length] = r ? _(n, k, "$1") : t || e
												})), o
											},
											S = function(e, t) {
												var r, o = e;
												if (g(v, o) && (o = "%" + (r = v[o])[0] + "%"), g(f, o)) {
													var s = f[o];
													if (s === h && (s = function e(t) {
															var r;
															if ("%AsyncFunction%" === t) r = a("async function () {}");
															else if ("%GeneratorFunction%" === t) r = a("function* () {}");
															else if ("%AsyncGeneratorFunction%" === t) r = a("async function* () {}");
															else if ("%AsyncGenerator%" === t) {
																var n = e("%AsyncGeneratorFunction%");
																n && (r = n.prototype)
															} else if ("%AsyncIteratorPrototype%" === t) {
																var o = e("%AsyncGenerator%");
																o && (r = d(o.prototype))
															}
															return f[t] = r, r
														}(o)), typeof s > "u" && !t) throw new i("intrinsic " + e + " exists, but is not available. Please file an issue!");
													return {
														alias: r,
														name: o,
														value: s
													}
												}
												throw new n("intrinsic " + e + " does not exist!")
											};
										t.exports = function(e, t) {
											if ("string" != typeof e || 0 === e.length) throw new i("intrinsic name must be a non-empty string");
											if (arguments.length > 1 && "boolean" != typeof t) throw new i('"allowMissing" argument must be a boolean');
											var r = E(e),
												o = r.length > 0 ? r[0] : "",
												a = S("%" + o + "%", t),
												l = a.name,
												c = a.value,
												u = !1,
												d = a.alias;
											d && (o = d[0], b(r, y([0, 1], d)));
											for (var h = 1, p = !0; h < r.length; h += 1) {
												var v = r[h],
													m = w(v, 0, 1),
													_ = w(v, -1);
												if (('"' === m || "'" === m || "`" === m || '"' === _ || "'" === _ || "`" === _) && m !== _) throw new n("property names with quotes must have matching quotes");
												if (("constructor" === v || !p) && (u = !0), g(f, l = "%" + (o += "." + v) + "%")) c = f[l];
												else if (null != c) {
													if (!(v in c)) {
														if (!t) throw new i("base intrinsic for " + e + " exists, but the property is not available.");
														return
													}
													if (s && h + 1 >= r.length) {
														var x = s(c, v);
														c = (p = !!x) && "get" in x && !("originalValue" in x.get) ? x.get : c[v]
													} else p = g(c, v), c = c[v];
													p && !u && (f[l] = c)
												}
											}
											return c
										}
									}),
									Ye = d((e, t) => {
										var r = He(),
											n = Ge(),
											o = n("%Function.prototype.apply%"),
											i = n("%Function.prototype.call%"),
											a = n("%Reflect.apply%", !0) || r.call(i, o),
											s = n("%Object.getOwnPropertyDescriptor%", !0),
											l = n("%Object.defineProperty%", !0),
											c = n("%Math.max%");
										if (l) try {
											l({}, "a", {
												value: 1
											})
										} catch {
											l = null
										}
										t.exports = function(e) {
											var t = a(r, i, arguments);
											if (s && l) {
												var n = s(t, "length");
												n.configurable && l(t, "length", {
													value: 1 + c(0, e.length - (arguments.length - 1))
												})
											}
											return t
										};
										var u = function() {
											return a(r, o, arguments)
										};
										l ? l(t.exports, "apply", {
											value: u
										}) : t.exports.apply = u
									}),
									Je = d((e, t) => {
										var r = Ge(),
											n = Ye(),
											o = n(r("String.prototype.indexOf"));
										t.exports = function(e, t) {
											var i = r(e, !!t);
											return "function" == typeof i && o(e, ".prototype.") > -1 ? n(i) : i
										}
									}),
									Ke = d(() => {}),
									Xe = d((e, t) => {
										var r = "function" == typeof Map && Map.prototype,
											n = Object.getOwnPropertyDescriptor && r ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
											o = r && n && "function" == typeof n.get ? n.get : null,
											i = r && Map.prototype.forEach,
											a = "function" == typeof Set && Set.prototype,
											s = Object.getOwnPropertyDescriptor && a ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
											l = a && s && "function" == typeof s.get ? s.get : null,
											c = a && Set.prototype.forEach,
											u = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null,
											d = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null,
											h = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null,
											p = Boolean.prototype.valueOf,
											f = Object.prototype.toString,
											v = Function.prototype.toString,
											m = String.prototype.match,
											g = String.prototype.slice,
											y = String.prototype.replace,
											b = String.prototype.toUpperCase,
											_ = String.prototype.toLowerCase,
											w = RegExp.prototype.test,
											x = Array.prototype.concat,
											k = Array.prototype.join,
											E = Array.prototype.slice,
											S = Math.floor,
											O = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
											C = Object.getOwnPropertySymbols,
											A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null,
											D = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
											$ = "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === D || "symbol") ? Symbol.toStringTag : null,
											R = Object.prototype.propertyIsEnumerable,
											j = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
												return e.__proto__
											} : null);

										function I(e, t) {
											if (e === 1 / 0 || e === -1 / 0 || e != e || e && e > -1e3 && e < 1e3 || w.call(/e/, t)) return t;
											var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
											if ("number" == typeof e) {
												var n = e < 0 ? -S(-e) : S(e);
												if (n !== e) {
													var o = String(n),
														i = g.call(t, o.length + 1);
													return y.call(o, r, "$&_") + "." + y.call(y.call(i, /([0-9]{3})/g, "$&_"), /_$/, "")
												}
											}
											return y.call(t, r, "$&_")
										}
										var P = Ke().custom,
											T = P && N(P) ? P : null;

										function M(e, t, r) {
											var n = "double" === (r.quoteStyle || t) ? '"' : "'";
											return n + e + n
										}

										function F(e) {
											return y.call(String(e), /"/g, "&quot;")
										}

										function z(e) {
											return !("[object Array]" !== q(e) || $ && "object" == typeof e && $ in e)
										}

										function N(e) {
											if (D) return e && "object" == typeof e && e instanceof Symbol;
											if ("symbol" == typeof e) return !0;
											if (!e || "object" != typeof e || !A) return !1;
											try {
												return A.call(e), !0
											} catch {}
											return !1
										}
										t.exports = function e(t, r, n, a) {
											var s = r || {};
											if (B(s, "quoteStyle") && "single" !== s.quoteStyle && "double" !== s.quoteStyle) throw new TypeError('option "quoteStyle" must be "single" or "double"');
											if (B(s, "maxStringLength") && ("number" == typeof s.maxStringLength ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : null !== s.maxStringLength)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
											var f = !B(s, "customInspect") || s.customInspect;
											if ("boolean" != typeof f && "symbol" !== f) throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
											if (B(s, "indent") && null !== s.indent && "\t" !== s.indent && !(parseInt(s.indent, 10) === s.indent && s.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
											if (B(s, "numericSeparator") && "boolean" != typeof s.numericSeparator) throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
											var b = s.numericSeparator;
											if (typeof t > "u") return "undefined";
											if (null === t) return "null";
											if ("boolean" == typeof t) return t ? "true" : "false";
											if ("string" == typeof t) return function e(t, r) {
												if (t.length > r.maxStringLength) {
													var n = t.length - r.maxStringLength,
														o = "... " + n + " more character" + (n > 1 ? "s" : "");
													return e(g.call(t, 0, r.maxStringLength), r) + o
												}
												var i = y.call(y.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, V);
												return M(i, "single", r)
											}(t, s);
											if ("number" == typeof t) {
												if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
												var w = String(t);
												return b ? I(t, w) : w
											}
											if ("bigint" == typeof t) {
												var S = String(t) + "n";
												return b ? I(t, S) : S
											}
											var C = typeof s.depth > "u" ? 5 : s.depth;
											if (typeof n > "u" && (n = 0), n >= C && C > 0 && "object" == typeof t) return z(t) ? "[Array]" : "[Object]";
											var P = function(e, t) {
												var r;
												if ("\t" === e.indent) r = "\t";
												else {
													if (!("number" == typeof e.indent && e.indent > 0)) return null;
													r = k.call(Array(e.indent + 1), " ")
												}
												return {
													base: r,
													prev: k.call(Array(t + 1), r)
												}
											}(s, n);
											if (typeof a > "u") a = [];
											else if (U(a, t) >= 0) return "[Circular]";

											function L(t, r, o) {
												if (r && (a = E.call(a)).push(r), o) {
													var i = {
														depth: s.depth
													};
													return B(s, "quoteStyle") && (i.quoteStyle = s.quoteStyle), e(t, i, n + 1, a)
												}
												return e(t, s, n + 1, a)
											}
											if ("function" == typeof t) {
												var J = function(e) {
														if (e.name) return e.name;
														var t = m.call(v.call(e), /^function\s*([\w$]+)/);
														return t ? t[1] : null
													}(t),
													K = Y(t, L);
												return "[Function" + (J ? ": " + J : " (anonymous)") + "]" + (K.length > 0 ? " { " + k.call(K, ", ") + " }" : "")
											}
											if (N(t)) {
												var X = D ? y.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : A.call(t);
												return "object" != typeof t || D ? X : Q(X)
											}
											if (function(e) {
													return !(!e || "object" != typeof e) && (typeof HTMLElement < "u" && e instanceof HTMLElement || "string" == typeof e.nodeName && "function" == typeof e.getAttribute)
												}(t)) {
												for (var Z = "<" + _.call(String(t.nodeName)), ee = t.attributes || [], te = 0; te < ee.length; te++) Z += " " + ee[te].name + "=" + M(F(ee[te].value), "double", s);
												return Z += ">", t.childNodes && t.childNodes.length && (Z += "..."), Z += "</" + _.call(String(t.nodeName)) + ">"
											}
											if (z(t)) {
												if (0 === t.length) return "[]";
												var re = Y(t, L);
												return P && ! function(e) {
													for (var t = 0; t < e.length; t++)
														if (U(e[t], "\n") >= 0) return !1;
													return !0
												}(re) ? "[" + G(re, P) + "]" : "[ " + k.call(re, ", ") + " ]"
											}
											if (function(e) {
													return !("[object Error]" !== q(e) || $ && "object" == typeof e && $ in e)
												}(t)) {
												var ne = Y(t, L);
												return "cause" in t && !R.call(t, "cause") ? "{ [" + String(t) + "] " + k.call(x.call("[cause]: " + L(t.cause), ne), ", ") + " }" : 0 === ne.length ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + k.call(ne, ", ") + " }"
											}
											if ("object" == typeof t && f) {
												if (T && "function" == typeof t[T]) return t[T]();
												if ("symbol" !== f && "function" == typeof t.inspect) return t.inspect()
											}
											if (function(e) {
													if (!o || !e || "object" != typeof e) return !1;
													try {
														o.call(e);
														try {
															l.call(e)
														} catch {
															return !0
														}
														return e instanceof Map
													} catch {}
													return !1
												}(t)) {
												var oe = [];
												return i.call(t, (function(e, r) {
													oe.push(L(r, t, !0) + " => " + L(e, t))
												})), W("Map", o.call(t), oe, P)
											}
											if (function(e) {
													if (!l || !e || "object" != typeof e) return !1;
													try {
														l.call(e);
														try {
															o.call(e)
														} catch {
															return !0
														}
														return e instanceof Set
													} catch {}
													return !1
												}(t)) {
												var ie = [];
												return c.call(t, (function(e) {
													ie.push(L(e, t))
												})), W("Set", l.call(t), ie, P)
											}
											if (function(e) {
													if (!u || !e || "object" != typeof e) return !1;
													try {
														u.call(e, u);
														try {
															d.call(e, d)
														} catch {
															return !0
														}
														return e instanceof WeakMap
													} catch {}
													return !1
												}(t)) return H("WeakMap");
											if (function(e) {
													if (!d || !e || "object" != typeof e) return !1;
													try {
														d.call(e, d);
														try {
															u.call(e, u)
														} catch {
															return !0
														}
														return e instanceof WeakSet
													} catch {}
													return !1
												}(t)) return H("WeakSet");
											if (function(e) {
													if (!h || !e || "object" != typeof e) return !1;
													try {
														return h.call(e), !0
													} catch {}
													return !1
												}(t)) return H("WeakRef");
											if (function(e) {
													return !("[object Number]" !== q(e) || $ && "object" == typeof e && $ in e)
												}(t)) return Q(L(Number(t)));
											if (function(e) {
													if (!e || "object" != typeof e || !O) return !1;
													try {
														return O.call(e), !0
													} catch {}
													return !1
												}(t)) return Q(L(O.call(t)));
											if (function(e) {
													return !("[object Boolean]" !== q(e) || $ && "object" == typeof e && $ in e)
												}(t)) return Q(p.call(t));
											if (function(e) {
													return !("[object String]" !== q(e) || $ && "object" == typeof e && $ in e)
												}(t)) return Q(L(String(t)));
											if (! function(e) {
													return !("[object Date]" !== q(e) || $ && "object" == typeof e && $ in e)
												}(t) && ! function(e) {
													return !("[object RegExp]" !== q(e) || $ && "object" == typeof e && $ in e)
												}(t)) {
												var ae = Y(t, L),
													se = j ? j(t) === Object.prototype : t instanceof Object || t.constructor === Object,
													le = t instanceof Object ? "" : "null prototype",
													ce = !se && $ && Object(t) === t && $ in t ? g.call(q(t), 8, -1) : le ? "Object" : "",
													ue = (se || "function" != typeof t.constructor ? "" : t.constructor.name ? t.constructor.name + " " : "") + (ce || le ? "[" + k.call(x.call([], ce || [], le || []), ": ") + "] " : "");
												return 0 === ae.length ? ue + "{}" : P ? ue + "{" + G(ae, P) + "}" : ue + "{ " + k.call(ae, ", ") + " }"
											}
											return String(t)
										};
										var L = Object.prototype.hasOwnProperty || function(e) {
											return e in this
										};

										function B(e, t) {
											return L.call(e, t)
										}

										function q(e) {
											return f.call(e)
										}

										function U(e, t) {
											if (e.indexOf) return e.indexOf(t);
											for (var r = 0, n = e.length; r < n; r++)
												if (e[r] === t) return r;
											return -1
										}

										function V(e) {
											var t = e.charCodeAt(0),
												r = {
													8: "b",
													9: "t",
													10: "n",
													12: "f",
													13: "r"
												} [t];
											return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + b.call(t.toString(16))
										}

										function Q(e) {
											return "Object(" + e + ")"
										}

										function H(e) {
											return e + " { ? }"
										}

										function W(e, t, r, n) {
											return e + " (" + t + ") {" + (n ? G(r, n) : k.call(r, ", ")) + "}"
										}

										function G(e, t) {
											if (0 === e.length) return "";
											var r = "\n" + t.prev + t.base;
											return r + k.call(e, "," + r) + "\n" + t.prev
										}

										function Y(e, t) {
											var r = z(e),
												n = [];
											if (r) {
												n.length = e.length;
												for (var o = 0; o < e.length; o++) n[o] = B(e, o) ? t(e[o], e) : ""
											}
											var i, a = "function" == typeof C ? C(e) : [];
											if (D) {
												i = {};
												for (var s = 0; s < a.length; s++) i["$" + a[s]] = a[s]
											}
											for (var l in e) !B(e, l) || r && String(Number(l)) === l && l < e.length || D && i["$" + l] instanceof Symbol || (w.call(/[^\w$]/, l) ? n.push(t(l, e) + ": " + t(e[l], e)) : n.push(l + ": " + t(e[l], e)));
											if ("function" == typeof C)
												for (var c = 0; c < a.length; c++) R.call(e, a[c]) && n.push("[" + t(a[c]) + "]: " + t(e[a[c]], e));
											return n
										}
									}),
									Ze = d((e, t) => {
										var r = Ge(),
											n = Je(),
											o = Xe(),
											i = r("%TypeError%"),
											a = r("%WeakMap%", !0),
											s = r("%Map%", !0),
											l = n("WeakMap.prototype.get", !0),
											c = n("WeakMap.prototype.set", !0),
											u = n("WeakMap.prototype.has", !0),
											d = n("Map.prototype.get", !0),
											h = n("Map.prototype.set", !0),
											p = n("Map.prototype.has", !0),
											f = function(e, t) {
												for (var r, n = e; null !== (r = n.next); n = r)
													if (r.key === t) return n.next = r.next, r.next = e.next, e.next = r, r
											};
										t.exports = function() {
											var e, t, r, n = {
												assert: function(e) {
													if (!n.has(e)) throw new i("Side channel does not contain " + o(e))
												},
												get: function(n) {
													if (a && n && ("object" == typeof n || "function" == typeof n)) {
														if (e) return l(e, n)
													} else if (s) {
														if (t) return d(t, n)
													} else if (r) return function(e, t) {
														var r = f(e, t);
														return r && r.value
													}(r, n)
												},
												has: function(n) {
													if (a && n && ("object" == typeof n || "function" == typeof n)) {
														if (e) return u(e, n)
													} else if (s) {
														if (t) return p(t, n)
													} else if (r) return function(e, t) {
														return !!f(e, t)
													}(r, n);
													return !1
												},
												set: function(n, o) {
													a && n && ("object" == typeof n || "function" == typeof n) ? (e || (e = new a), c(e, n, o)) : s ? (t || (t = new s), h(t, n, o)) : (r || (r = {
														key: {},
														next: null
													}), function(e, t, r) {
														var n = f(e, t);
														n ? n.value = r : e.next = {
															key: t,
															next: e.next,
															value: r
														}
													}(r, n, o))
												}
											};
											return n
										}
									}),
									et = d((e, t) => {
										var r = String.prototype.replace,
											n = /%20/g,
											o = "RFC1738",
											i = "RFC3986";
										t.exports = {
											default: i,
											formatters: {
												RFC1738: function(e) {
													return r.call(e, n, "+")
												},
												RFC3986: function(e) {
													return String(e)
												}
											},
											RFC1738: o,
											RFC3986: i
										}
									}),
									tt = d((e, t) => {
										var r = et(),
											n = Object.prototype.hasOwnProperty,
											o = Array.isArray,
											i = function() {
												for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
												return e
											}(),
											a = function(e, t) {
												for (var r = t && t.plainObjects ? Object.create(null) : {}, n = 0; n < e.length; ++n) typeof e[n] < "u" && (r[n] = e[n]);
												return r
											};
										t.exports = {
											arrayToObject: a,
											assign: function(e, t) {
												return Object.keys(t).reduce((function(e, r) {
													return e[r] = t[r], e
												}), e)
											},
											combine: function(e, t) {
												return [].concat(e, t)
											},
											compact: function(e) {
												for (var t = [{
														obj: {
															o: e
														},
														prop: "o"
													}], r = [], n = 0; n < t.length; ++n)
													for (var i = t[n], a = i.obj[i.prop], s = Object.keys(a), l = 0; l < s.length; ++l) {
														var c = s[l],
															u = a[c];
														"object" == typeof u && null !== u && -1 === r.indexOf(u) && (t.push({
															obj: a,
															prop: c
														}), r.push(u))
													}
												return function(e) {
													for (; e.length > 1;) {
														var t = e.pop(),
															r = t.obj[t.prop];
														if (o(r)) {
															for (var n = [], i = 0; i < r.length; ++i) typeof r[i] < "u" && n.push(r[i]);
															t.obj[t.prop] = n
														}
													}
												}(t), e
											},
											decode: function(e, t, r) {
												var n = e.replace(/\+/g, " ");
												if ("iso-8859-1" === r) return n.replace(/%[0-9a-f]{2}/gi, unescape);
												try {
													return decodeURIComponent(n)
												} catch {
													return n
												}
											},
											encode: function(e, t, n, o, a) {
												if (0 === e.length) return e;
												var s = e;
												if ("symbol" == typeof e ? s = Symbol.prototype.toString.call(e) : "string" != typeof e && (s = String(e)), "iso-8859-1" === n) return escape(s).replace(/%u[0-9a-f]{4}/gi, (function(e) {
													return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
												}));
												for (var l = "", c = 0; c < s.length; ++c) {
													var u = s.charCodeAt(c);
													45 === u || 46 === u || 95 === u || 126 === u || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || a === r.RFC1738 && (40 === u || 41 === u) ? l += s.charAt(c) : u < 128 ? l += i[u] : u < 2048 ? l += i[192 | u >> 6] + i[128 | 63 & u] : u < 55296 || u >= 57344 ? l += i[224 | u >> 12] + i[128 | u >> 6 & 63] + i[128 | 63 & u] : (c += 1, u = 65536 + ((1023 & u) << 10 | 1023 & s.charCodeAt(c)), l += i[240 | u >> 18] + i[128 | u >> 12 & 63] + i[128 | u >> 6 & 63] + i[128 | 63 & u])
												}
												return l
											},
											isBuffer: function(e) {
												return !(!e || "object" != typeof e) && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
											},
											isRegExp: function(e) {
												return "[object RegExp]" === Object.prototype.toString.call(e)
											},
											maybeMap: function(e, t) {
												if (o(e)) {
													for (var r = [], n = 0; n < e.length; n += 1) r.push(t(e[n]));
													return r
												}
												return t(e)
											},
											merge: function e(t, r, i) {
												if (!r) return t;
												if ("object" != typeof r) {
													if (o(t)) t.push(r);
													else {
														if (!t || "object" != typeof t) return [t, r];
														(i && (i.plainObjects || i.allowPrototypes) || !n.call(Object.prototype, r)) && (t[r] = !0)
													}
													return t
												}
												if (!t || "object" != typeof t) return [t].concat(r);
												var s = t;
												return o(t) && !o(r) && (s = a(t, i)), o(t) && o(r) ? (r.forEach((function(r, o) {
													if (n.call(t, o)) {
														var a = t[o];
														a && "object" == typeof a && r && "object" == typeof r ? t[o] = e(a, r, i) : t.push(r)
													} else t[o] = r
												})), t) : Object.keys(r).reduce((function(t, o) {
													var a = r[o];
													return n.call(t, o) ? t[o] = e(t[o], a, i) : t[o] = a, t
												}), s)
											}
										}
									}),
									rt = d((e, t) => {
										var r = Ze(),
											n = tt(),
											o = et(),
											i = Object.prototype.hasOwnProperty,
											a = {
												brackets: function(e) {
													return e + "[]"
												},
												comma: "comma",
												indices: function(e, t) {
													return e + "[" + t + "]"
												},
												repeat: function(e) {
													return e
												}
											},
											s = Array.isArray,
											l = String.prototype.split,
											c = Array.prototype.push,
											u = function(e, t) {
												c.apply(e, s(t) ? t : [t])
											},
											d = Date.prototype.toISOString,
											h = o.default,
											p = {
												addQueryPrefix: !1,
												allowDots: !1,
												charset: "utf-8",
												charsetSentinel: !1,
												delimiter: "&",
												encode: !0,
												encoder: n.encode,
												encodeValuesOnly: !1,
												format: h,
												formatter: o.formatters[h],
												indices: !1,
												serializeDate: function(e) {
													return d.call(e)
												},
												skipNulls: !1,
												strictNullHandling: !1
											},
											f = {},
											v = function e(t, o, i, a, c, d, h, v, m, g, y, b, _, w, x, k) {
												for (var E = t, S = k, O = 0, C = !1; void 0 !== (S = S.get(f)) && !C;) {
													var A = S.get(t);
													if (O += 1, typeof A < "u") {
														if (A === O) throw new RangeError("Cyclic object value");
														C = !0
													}
													typeof S.get(f) > "u" && (O = 0)
												}
												if ("function" == typeof v ? E = v(o, E) : E instanceof Date ? E = y(E) : "comma" === i && s(E) && (E = n.maybeMap(E, (function(e) {
														return e instanceof Date ? y(e) : e
													}))), null === E) {
													if (c) return h && !w ? h(o, p.encoder, x, "key", b) : o;
													E = ""
												}
												if (function(e) {
														return "string" == typeof e || "number" == typeof e || "boolean" == typeof e || "symbol" == typeof e || "bigint" == typeof e
													}(E) || n.isBuffer(E)) {
													if (h) {
														var D = w ? o : h(o, p.encoder, x, "key", b);
														if ("comma" === i && w) {
															for (var $ = l.call(String(E), ","), R = "", j = 0; j < $.length; ++j) R += (0 === j ? "" : ",") + _(h($[j], p.encoder, x, "value", b));
															return [_(D) + (a && s(E) && 1 === $.length ? "[]" : "") + "=" + R]
														}
														return [_(D) + "=" + _(h(E, p.encoder, x, "value", b))]
													}
													return [_(o) + "=" + _(String(E))]
												}
												var I, P = [];
												if (typeof E > "u") return P;
												if ("comma" === i && s(E)) I = [{
													value: E.length > 0 ? E.join(",") || null : void 0
												}];
												else if (s(v)) I = v;
												else {
													var T = Object.keys(E);
													I = m ? T.sort(m) : T
												}
												for (var M = a && s(E) && 1 === E.length ? o + "[]" : o, F = 0; F < I.length; ++F) {
													var z = I[F],
														N = "object" == typeof z && typeof z.value < "u" ? z.value : E[z];
													if (!d || null !== N) {
														var L = s(E) ? "function" == typeof i ? i(M, z) : M : M + (g ? "." + z : "[" + z + "]");
														k.set(t, O);
														var B = r();
														B.set(f, k), u(P, e(N, L, i, a, c, d, h, v, m, g, y, b, _, w, x, B))
													}
												}
												return P
											};
										t.exports = function(e, t) {
											var n, l = e,
												c = function(e) {
													if (!e) return p;
													if (null !== e.encoder && typeof e.encoder < "u" && "function" != typeof e.encoder) throw new TypeError("Encoder has to be a function.");
													var t = e.charset || p.charset;
													if (typeof e.charset < "u" && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
													var r = o.default;
													if (typeof e.format < "u") {
														if (!i.call(o.formatters, e.format)) throw new TypeError("Unknown format option provided.");
														r = e.format
													}
													var n = o.formatters[r],
														a = p.filter;
													return ("function" == typeof e.filter || s(e.filter)) && (a = e.filter), {
														addQueryPrefix: "boolean" == typeof e.addQueryPrefix ? e.addQueryPrefix : p.addQueryPrefix,
														allowDots: typeof e.allowDots > "u" ? p.allowDots : !!e.allowDots,
														charset: t,
														charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : p.charsetSentinel,
														delimiter: typeof e.delimiter > "u" ? p.delimiter : e.delimiter,
														encode: "boolean" == typeof e.encode ? e.encode : p.encode,
														encoder: "function" == typeof e.encoder ? e.encoder : p.encoder,
														encodeValuesOnly: "boolean" == typeof e.encodeValuesOnly ? e.encodeValuesOnly : p.encodeValuesOnly,
														filter: a,
														format: r,
														formatter: n,
														serializeDate: "function" == typeof e.serializeDate ? e.serializeDate : p.serializeDate,
														skipNulls: "boolean" == typeof e.skipNulls ? e.skipNulls : p.skipNulls,
														sort: "function" == typeof e.sort ? e.sort : null,
														strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : p.strictNullHandling
													}
												}(t);
											"function" == typeof c.filter ? l = (0, c.filter)("", l) : s(c.filter) && (n = c.filter);
											var d, h = [];
											if ("object" != typeof l || null === l) return "";
											d = t && t.arrayFormat in a ? t.arrayFormat : t && "indices" in t ? t.indices ? "indices" : "repeat" : "indices";
											var f = a[d];
											if (t && "commaRoundTrip" in t && "boolean" != typeof t.commaRoundTrip) throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
											var m = "comma" === f && t && t.commaRoundTrip;
											n || (n = Object.keys(l)), c.sort && n.sort(c.sort);
											for (var g = r(), y = 0; y < n.length; ++y) {
												var b = n[y];
												c.skipNulls && null === l[b] || u(h, v(l[b], b, f, m, c.strictNullHandling, c.skipNulls, c.encode ? c.encoder : null, c.filter, c.sort, c.allowDots, c.serializeDate, c.format, c.formatter, c.encodeValuesOnly, c.charset, g))
											}
											var _ = h.join(c.delimiter),
												w = !0 === c.addQueryPrefix ? "?" : "";
											return c.charsetSentinel && ("iso-8859-1" === c.charset ? w += "utf8=%26%2310003%3B&" : w += "utf8=%E2%9C%93&"), _.length > 0 ? w + _ : ""
										}
									}),
									nt = d((e, t) => {
										var r = tt(),
											n = Object.prototype.hasOwnProperty,
											o = Array.isArray,
											i = {
												allowDots: !1,
												allowPrototypes: !1,
												allowSparse: !1,
												arrayLimit: 20,
												charset: "utf-8",
												charsetSentinel: !1,
												comma: !1,
												decoder: r.decode,
												delimiter: "&",
												depth: 5,
												ignoreQueryPrefix: !1,
												interpretNumericEntities: !1,
												parameterLimit: 1e3,
												parseArrays: !0,
												plainObjects: !1,
												strictNullHandling: !1
											},
											a = function(e, t) {
												return e && "string" == typeof e && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
											},
											s = function(e, t, r, o) {
												if (e) {
													var i = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
														s = /(\[[^[\]]*])/g,
														l = r.depth > 0 && /(\[[^[\]]*])/.exec(i),
														c = l ? i.slice(0, l.index) : i,
														u = [];
													if (c) {
														if (!r.plainObjects && n.call(Object.prototype, c) && !r.allowPrototypes) return;
														u.push(c)
													}
													for (var d = 0; r.depth > 0 && null !== (l = s.exec(i)) && d < r.depth;) {
														if (d += 1, !r.plainObjects && n.call(Object.prototype, l[1].slice(1, -1)) && !r.allowPrototypes) return;
														u.push(l[1])
													}
													return l && u.push("[" + i.slice(l.index) + "]"),
														function(e, t, r, n) {
															for (var o = n ? t : a(t, r), i = e.length - 1; i >= 0; --i) {
																var s, l = e[i];
																if ("[]" === l && r.parseArrays) s = [].concat(o);
																else {
																	s = r.plainObjects ? Object.create(null) : {};
																	var c = "[" === l.charAt(0) && "]" === l.charAt(l.length - 1) ? l.slice(1, -1) : l,
																		u = parseInt(c, 10);
																	r.parseArrays || "" !== c ? !isNaN(u) && l !== c && String(u) === c && u >= 0 && r.parseArrays && u <= r.arrayLimit ? (s = [])[u] = o : "__proto__" !== c && (s[c] = o) : s = {
																		0: o
																	}
																}
																o = s
															}
															return o
														}(u, t, r, o)
												}
											};
										t.exports = function(e, t) {
											var l = function(e) {
												if (!e) return i;
												if (null !== e.decoder && void 0 !== e.decoder && "function" != typeof e.decoder) throw new TypeError("Decoder has to be a function.");
												if (typeof e.charset < "u" && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
												var t = typeof e.charset > "u" ? i.charset : e.charset;
												return {
													allowDots: typeof e.allowDots > "u" ? i.allowDots : !!e.allowDots,
													allowPrototypes: "boolean" == typeof e.allowPrototypes ? e.allowPrototypes : i.allowPrototypes,
													allowSparse: "boolean" == typeof e.allowSparse ? e.allowSparse : i.allowSparse,
													arrayLimit: "number" == typeof e.arrayLimit ? e.arrayLimit : i.arrayLimit,
													charset: t,
													charsetSentinel: "boolean" == typeof e.charsetSentinel ? e.charsetSentinel : i.charsetSentinel,
													comma: "boolean" == typeof e.comma ? e.comma : i.comma,
													decoder: "function" == typeof e.decoder ? e.decoder : i.decoder,
													delimiter: "string" == typeof e.delimiter || r.isRegExp(e.delimiter) ? e.delimiter : i.delimiter,
													depth: "number" == typeof e.depth || !1 === e.depth ? +e.depth : i.depth,
													ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
													interpretNumericEntities: "boolean" == typeof e.interpretNumericEntities ? e.interpretNumericEntities : i.interpretNumericEntities,
													parameterLimit: "number" == typeof e.parameterLimit ? e.parameterLimit : i.parameterLimit,
													parseArrays: !1 !== e.parseArrays,
													plainObjects: "boolean" == typeof e.plainObjects ? e.plainObjects : i.plainObjects,
													strictNullHandling: "boolean" == typeof e.strictNullHandling ? e.strictNullHandling : i.strictNullHandling
												}
											}(t);
											if ("" === e || null === e || typeof e > "u") return l.plainObjects ? Object.create(null) : {};
											for (var c = "string" == typeof e ? function(e, t) {
													var s, l = {},
														c = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
														u = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
														d = c.split(t.delimiter, u),
														h = -1,
														p = t.charset;
													if (t.charsetSentinel)
														for (s = 0; s < d.length; ++s) 0 === d[s].indexOf("utf8=") && ("utf8=%E2%9C%93" === d[s] ? p = "utf-8" : "utf8=%26%2310003%3B" === d[s] && (p = "iso-8859-1"), h = s, s = d.length);
													for (s = 0; s < d.length; ++s)
														if (s !== h) {
															var f, v, m = d[s],
																g = m.indexOf("]="),
																y = -1 === g ? m.indexOf("=") : g + 1; - 1 === y ? (f = t.decoder(m, i.decoder, p, "key"), v = t.strictNullHandling ? null : "") : (f = t.decoder(m.slice(0, y), i.decoder, p, "key"), v = r.maybeMap(a(m.slice(y + 1), t), (function(e) {
																return t.decoder(e, i.decoder, p, "value")
															}))), v && t.interpretNumericEntities && "iso-8859-1" === p && (v = v.replace(/&#(\d+);/g, (function(e, t) {
																return String.fromCharCode(parseInt(t, 10))
															}))), m.indexOf("[]=") > -1 && (v = o(v) ? [v] : v), n.call(l, f) ? l[f] = r.combine(l[f], v) : l[f] = v
														} return l
												}(e, l) : e, u = l.plainObjects ? Object.create(null) : {}, d = Object.keys(c), h = 0; h < d.length; ++h) {
												var p = d[h],
													f = s(p, c[p], l, "string" == typeof e);
												u = r.merge(u, f, l)
											}
											return !0 === l.allowSparse ? u : r.compact(u)
										}
									}),
									ot = d((e, t) => {
										var r = rt(),
											n = nt(),
											o = et();
										t.exports = {
											formats: o,
											parse: n,
											stringify: r
										}
									}),
									it = d(e => {
										var t = e && e.__assign || function() {
											return (t = Object.assign || function(e) {
												for (var t, r = 1, n = arguments.length; r < n; r++)
													for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
												return e
											}).apply(this, arguments)
										};
										Object.defineProperty(e, "__esModule", {
											value: !0
										}), e.normalizeGifs = e.normalizeGif = e.USER_BOOL_PROPS = e.BOOL_PROPS = void 0, e.BOOL_PROPS = ["is_anonymous", "is_community", "is_featured", "is_hidden", "is_indexable", "is_preserve_size", "is_realtime", "is_removed", "is_sticker", "is_dynamic"], e.USER_BOOL_PROPS = ["suppress_chrome", "is_public", "is_verified"];
										var r = function(e) {
												return function(t) {
													return e[t] = !!e[t]
												}
											},
											n = function(e) {
												return "string" == typeof e ? e : e.text
											},
											o = function(o) {
												var i = t({}, o);
												i.id = String(i.id), i.tags = (i.tags || []).map(n), e.BOOL_PROPS.forEach(r(i)), Object.keys(i.images || {}).forEach((function(e) {
													var t = i.images[e];
													t.width = parseInt(t.width), t.height = parseInt(t.height)
												}));
												var a = i.user;
												if (a) {
													var s = t({}, a);
													e.USER_BOOL_PROPS.forEach(r(s)), i.user = s
												}
												return i
											};
										e.normalizeGif = function(e) {
											return e.data = o(e.data), e
										};
										e.normalizeGifs = function(e) {
											return e.data = e.data.map((function(e) {
												return o(e)
											})), e
										}
									}),
									at = d(t => {
										Object.defineProperty(t, "__esModule", {
											value: !0
										}), t.setServerUrl = t.serverUrl = void 0;
										var r = (typeof window < "u" ? window : e) || {};
										t.serverUrl = r.GIPHY_API_URL || "https://api.giphy.com/v1/";
										t.setServerUrl = function(e) {
											t.serverUrl = e
										}
									}),
									st = d(e => {
										var t = e && e.__extends || function() {
											var e = function(t, r) {
												return (e = Object.setPrototypeOf || {
														__proto__: []
													}
													instanceof Array && function(e, t) {
														e.__proto__ = t
													} || function(e, t) {
														for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
													})(t, r)
											};
											return function(t, r) {
												if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");

												function n() {
													this.constructor = t
												}
												e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
											}
										}();
										Object.defineProperty(e, "__esModule", {
											value: !0
										});
										var r = function(e) {
											function r(t, r, n) {
												void 0 === r && (r = 0), void 0 === n && (n = "");
												var o = e.call(this, t) || this;
												return o.status = r, o.statusText = n, o
											}
											return t(r, e), r
										}(Error);
										e.default = r
									}),
									lt = d(e => {
										var t = e && e.__awaiter || function(e, t, r, n) {
												return new(r || (r = Promise))((function(o, i) {
													function a(e) {
														try {
															l(n.next(e))
														} catch (t) {
															i(t)
														}
													}

													function s(e) {
														try {
															l(n.throw(e))
														} catch (t) {
															i(t)
														}
													}

													function l(e) {
														e.done ? o(e.value) : function(e) {
															return e instanceof r ? e : new r((function(t) {
																t(e)
															}))
														}(e.value).then(a, s)
													}
													l((n = n.apply(e, t || [])).next())
												}))
											},
											r = e && e.__generator || function(e, t) {
												var r, n, o, i, a = {
													label: 0,
													sent: function() {
														if (1 & o[0]) throw o[1];
														return o[1]
													},
													trys: [],
													ops: []
												};
												return i = {
													next: s(0),
													throw: s(1),
													return: s(2)
												}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
													return this
												}), i;

												function s(i) {
													return function(s) {
														return function(i) {
															if (r) throw new TypeError("Generator is already executing.");
															for (; a;) try {
																if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
																switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
																	case 0:
																	case 1:
																		o = i;
																		break;
																	case 4:
																		return a.label++, {
																			value: i[1],
																			done: !1
																		};
																	case 5:
																		a.label++, n = i[1], i = [0];
																		continue;
																	case 7:
																		i = a.ops.pop(), a.trys.pop();
																		continue;
																	default:
																		if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
																			a = 0;
																			continue
																		}
																		if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
																			a.label = i[1];
																			break
																		}
																		if (6 === i[0] && a.label < o[1]) {
																			a.label = o[1], o = i;
																			break
																		}
																		if (o && a.label < o[2]) {
																			a.label = o[2], a.ops.push(i);
																			break
																		}
																		o[2] && a.ops.pop(), a.trys.pop();
																		continue
																}
																i = t.call(e, a)
															} catch (s) {
																i = [6, s], n = 0
															} finally {
																r = o = 0
															}
															if (5 & i[0]) throw i[1];
															return {
																value: i[0] ? i[1] : void 0,
																done: !0
															}
														}([i, s])
													}
												}
											},
											n = e && e.__importDefault || function(e) {
												return e && e.__esModule ? e : {
													default: e
												}
											};
										Object.defineProperty(e, "__esModule", {
											value: !0
										}), e.DEFAULT_ERROR = e.ERROR_PREFIX = void 0;
										var o = at(),
											i = n(st());
										e.ERROR_PREFIX = "@giphy/js-fetch-api: ", e.DEFAULT_ERROR = "Error fetching";
										var a = function(e) {
												return e
											},
											s = {},
											l = function() {
												var e = Date.now();
												Object.keys(s).forEach((function(t) {
													var r = s[t].isError ? 6e3 : 6e4;
													e - s[t].ts >= r && delete s[t]
												}))
											};
										e.default = function(n, c, u) {
											var d = this;
											if (void 0 === c && (c = a), void 0 === u && (u = !1), l(), !s[n] || u) {
												s[n] = {
													request: t(d, void 0, void 0, (function() {
														var t, a, l, u, d, h;
														return r(this, (function(r) {
															switch (r.label) {
																case 0:
																	return r.trys.push([0, 9, , 10]), [4, fetch("".concat(o.serverUrl).concat(n), {
																		method: "get"
																	})];
																case 1:
																	return (a = r.sent()).ok ? [4, a.json()] : [3, 3];
																case 2:
																	if (u = r.sent(), null !== (h = u.meta) && void 0 !== h && h.response_id) return [2, c(u)];
																	throw {
																		message: "synthetic response"
																	};
																case 3:
																	l = e.DEFAULT_ERROR, r.label = 4;
																case 4:
																	return r.trys.push([4, 6, , 7]), [4, a.json()];
																case 5:
																	return (u = r.sent()).message && (l = u.message), [3, 7];
																case 6:
																	return r.sent(), [3, 7];
																case 7:
																	s[n] && (s[n].isError = !0), t = new i.default("".concat(e.ERROR_PREFIX).concat(l), a.status, a.statusText), r.label = 8;
																case 8:
																	return [3, 10];
																case 9:
																	return d = r.sent(), t = new i.default(d.message), s[n] && (s[n].isError = !0), [3, 10];
																case 10:
																	throw t
															}
														}))
													})),
													ts: Date.now()
												}
											}
											return s[n].request
										}
									}),
									ct = d(e => {
										var t = e && e.__assign || function() {
												return (t = Object.assign || function(e) {
													for (var t, r = 1, n = arguments.length; r < n; r++)
														for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
													return e
												}).apply(this, arguments)
											},
											r = e && e.__importDefault || function(e) {
												return e && e.__esModule ? e : {
													default: e
												}
											};
										Object.defineProperty(e, "__esModule", {
											value: !0
										}), e.GiphyFetch = void 0;
										var n = qe(),
											o = r(ot()),
											i = it(),
											a = r(lt()),
											s = function(e) {
												return e && e.type ? e.type : "gifs"
											},
											l = function() {
												function e(e) {
													var r = this;
													this.getQS = function(e) {
														return void 0 === e && (e = {}), o.default.stringify(t(t({}, e), {
															api_key: r.apiKey,
															pingback_id: (0, n.getPingbackId)()
														}))
													}, this.apiKey = e
												}
												return e.prototype.categories = function(e) {
													return (0, a.default)("gifs/categories?".concat(this.getQS(e)))
												}, e.prototype.gif = function(e) {
													return (0, a.default)("gifs/".concat(e, "?").concat(this.getQS()), i.normalizeGif)
												}, e.prototype.gifs = function(e, t) {
													return Array.isArray(e) ? (0, a.default)("gifs?".concat(this.getQS({
														ids: e.join(",")
													})), i.normalizeGifs) : (0, a.default)("gifs/categories/".concat(e, "/").concat(t, "?").concat(this.getQS()), i.normalizeGifs)
												}, e.prototype.emoji = function(e) {
													return (0, a.default)("emoji?".concat(this.getQS(e)), i.normalizeGifs)
												}, e.prototype.animate = function(e, r) {
													void 0 === r && (r = {});
													var n = this.getQS(t(t({}, r), {
														m: e
													}));
													return (0, a.default)("text/animate?".concat(n), i.normalizeGifs)
												}, e.prototype.search = function(e, r) {
													void 0 === r && (r = {});
													var n, o = r.channel ? "@".concat(r.channel, " ").concat(e) : e;
													"text" === r.type && (n = !0);
													var l = this.getQS(t(t({}, r), {
														q: o,
														excludeDynamicResults: n
													}));
													return (0, a.default)("".concat(s(r), "/search?").concat(l), i.normalizeGifs)
												}, e.prototype.subcategories = function(e, t) {
													return (0, a.default)("gifs/categories/".concat(e, "?").concat(this.getQS(t)))
												}, e.prototype.trending = function(e) {
													return void 0 === e && (e = {}), (0, a.default)("".concat(s(e), "/trending?").concat(this.getQS(e)), i.normalizeGifs)
												}, e.prototype.random = function(e) {
													return (0, a.default)("".concat(s(e), "/random?").concat(this.getQS(e)), i.normalizeGif, !0)
												}, e.prototype.related = function(e, r) {
													return (0, a.default)("".concat("stickers" === (null == r ? void 0 : r.type) ? "stickers" : "gifs", "/related?").concat(this.getQS(t({
														gif_id: e
													}, r))), i.normalizeGifs)
												}, e.prototype.channels = function(e, r) {
													return void 0 === r && (r = {}), (0, a.default)("channels/search?".concat(this.getQS(t({
														q: e
													}, r))))
												}, e
											}();
										e.GiphyFetch = l, e.default = l
									}),
									ut = d(e => {
										Object.defineProperty(e, "__esModule", {
											value: !0
										})
									}),
									dt = d(e => {
										var t = e && e.__awaiter || function(e, t, r, n) {
												return new(r || (r = Promise))((function(o, i) {
													function a(e) {
														try {
															l(n.next(e))
														} catch (t) {
															i(t)
														}
													}

													function s(e) {
														try {
															l(n.throw(e))
														} catch (t) {
															i(t)
														}
													}

													function l(e) {
														e.done ? o(e.value) : function(e) {
															return e instanceof r ? e : new r((function(t) {
																t(e)
															}))
														}(e.value).then(a, s)
													}
													l((n = n.apply(e, t || [])).next())
												}))
											},
											r = e && e.__generator || function(e, t) {
												var r, n, o, i, a = {
													label: 0,
													sent: function() {
														if (1 & o[0]) throw o[1];
														return o[1]
													},
													trys: [],
													ops: []
												};
												return i = {
													next: s(0),
													throw: s(1),
													return: s(2)
												}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
													return this
												}), i;

												function s(i) {
													return function(s) {
														return function(i) {
															if (r) throw new TypeError("Generator is already executing.");
															for (; a;) try {
																if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
																switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
																	case 0:
																	case 1:
																		o = i;
																		break;
																	case 4:
																		return a.label++, {
																			value: i[1],
																			done: !1
																		};
																	case 5:
																		a.label++, n = i[1], i = [0];
																		continue;
																	case 7:
																		i = a.ops.pop(), a.trys.pop();
																		continue;
																	default:
																		if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
																			a = 0;
																			continue
																		}
																		if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
																			a.label = i[1];
																			break
																		}
																		if (6 === i[0] && a.label < o[1]) {
																			a.label = o[1], o = i;
																			break
																		}
																		if (o && a.label < o[2]) {
																			a.label = o[2], a.ops.push(i);
																			break
																		}
																		o[2] && a.ops.pop(), a.trys.pop();
																		continue
																}
																i = t.call(e, a)
															} catch (s) {
																i = [6, s], n = 0
															} finally {
																r = o = 0
															}
															if (5 & i[0]) throw i[1];
															return {
																value: i[0] ? i[1] : void 0,
																done: !0
															}
														}([i, s])
													}
												}
											},
											n = e && e.__spreadArray || function(e, t, r) {
												if (r || 2 === arguments.length)
													for (var n, o = 0, i = t.length; o < i; o++)(n || !(o in t)) && (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
												return e.concat(n || Array.prototype.slice.call(t))
											};
										Object.defineProperty(e, "__esModule", {
											value: !0
										}), e.gifPaginator = void 0;
										e.gifPaginator = function(e, o) {
											void 0 === o && (o = []);
											var i = n([], o, !0),
												a = o.map((function(e) {
													return e.id
												})),
												s = o.length,
												l = !1;
											return function() {
												return t(void 0, void 0, void 0, (function() {
													var t, o, c;
													return r(this, (function(r) {
														switch (r.label) {
															case 0:
																return l ? [2, i] : [4, e(s)];
															case 1:
																return t = r.sent(), o = t.pagination, c = t.data, s = o.count + o.offset, l = s === o.total_count, c.forEach((function(e) {
																	var t = e.id;
																	a.includes(t) || (i.push(e), a.push(t))
																})), [2, n([], i, !0)]
														}
													}))
												}))
											}
										}
									}),
									ht = d(e => {
										Object.defineProperty(e, "__esModule", {
											value: !0
										})
									}),
									pt = d((e, t) => {
										t.exports = {
											scripts: {
												clean: "rm -rf ./dist",
												dev: "parcel public/test.html",
												docs: "typedoc src/index.ts",
												prepublish: "npm run clean && tsc",
												build: "tsc",
												test: "jest --config ./jestconfig.js",
												"test:watch": "jest --config ./jestconfig.js --watchAll"
											},
											name: "@giphy/js-fetch-api",
											version: "4.4.0",
											main: "dist/index.js",
											description: "Javascript API to fetch gifs and stickers from the GIPHY API.",
											homepage: "https://github.com/Giphy/giphy-js/tree/master/packages/fetch-api",
											types: "dist/index.d.ts",
											files: ["dist/**/*", "src/**/*"],
											license: "MIT",
											publishConfig: {
												access: "public"
											},
											dependencies: {
												"@giphy/js-types": "^4.2.1",
												"@giphy/js-util": "^4.1.1",
												qs: "^6.9.4"
											},
											devDependencies: {
												"@types/qs": "^6.9.4",
												"jest-fetch-mock": "^3.0.3",
												"parcel-bundler": "latest",
												typedoc: "^0.20.36",
												"typedoc-thunder-theme": "^0.0.2",
												typescript: "^4.7.3"
											},
											gitHead: "16c8f572f0e8f871cf27b2133243d37c128d5edd"
										}
									}),
									ft = d(e => {
										var t, r = e && e.__createBinding || (Object.create ? function(e, t, r, n) {
												void 0 === n && (n = r);
												var o = Object.getOwnPropertyDescriptor(t, r);
												(!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = {
													enumerable: !0,
													get: function() {
														return t[r]
													}
												}), Object.defineProperty(e, n, o)
											} : function(e, t, r, n) {
												void 0 === n && (n = r), e[n] = t[r]
											}),
											n = e && e.__exportStar || function(e, t) {
												for (var n in e) "default" !== n && !Object.prototype.hasOwnProperty.call(t, n) && r(t, e, n)
											},
											o = e && e.__importDefault || function(e) {
												return e && e.__esModule ? e : {
													default: e
												}
											};
										Object.defineProperty(e, "__esModule", {
											value: !0
										}), e.request = e.gifPaginator = e.setServerUrl = e.serverUrl = e.GiphyFetch = void 0;
										var i = qe(),
											a = ct();
										Object.defineProperty(e, "GiphyFetch", {
											enumerable: !0,
											get: function() {
												return o(a).default
											}
										});
										var s = at();
										Object.defineProperty(e, "serverUrl", {
											enumerable: !0,
											get: function() {
												return s.serverUrl
											}
										}), Object.defineProperty(e, "setServerUrl", {
											enumerable: !0,
											get: function() {
												return s.setServerUrl
											}
										}), n(ut(), e);
										var l = dt();
										Object.defineProperty(e, "gifPaginator", {
											enumerable: !0,
											get: function() {
												return l.gifPaginator
											}
										});
										var c = lt();
										Object.defineProperty(e, "request", {
											enumerable: !0,
											get: function() {
												return o(c).default
											}
										}), n(ht(), e);
										var u = pt().version;
										null !== (t = (0, i.getGiphySDKRequestHeaders)()) && void 0 !== t && t.get("X-GIPHY-SDK-NAME") || ((0, i.appendGiphySDKRequestHeader)("X-GIPHY-SDK-NAME", "FetchAPI"), (0, i.appendGiphySDKRequestHeader)("X-GIPHY-SDK-VERSION", u))
									}),
									vt = window,
									mt = vt.ShadowRoot && (void 0 === vt.ShadyCSS || vt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
									gt = Symbol(),
									yt = new WeakMap,
									bt = class {
										constructor(e, t, r) {
											if (this._$cssResult$ = !0, r !== gt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
											this.cssText = e, this.t = t
										}
										get styleSheet() {
											let e = this.o,
												t = this.t;
											if (mt && void 0 === e) {
												let r = void 0 !== t && 1 === t.length;
												r && (e = yt.get(t)), void 0 === e && ((this.o = e = new CSSStyleSheet).replaceSync(this.cssText), r && yt.set(t, e))
											}
											return e
										}
										toString() {
											return this.cssText
										}
									},
									_t = (e, ...t) => {
										let r = 1 === e.length ? e[0] : t.reduce((t, r, n) => t + (e => {
											if (!0 === e._$cssResult$) return e.cssText;
											if ("number" == typeof e) return e;
											throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
										})(r) + e[n + 1], e[0]);
										return new bt(r, e, gt)
									},
									wt = mt ? e => e : e => e instanceof CSSStyleSheet ? (e => {
										let t = "";
										for (let r of e.cssRules) t += r.cssText;
										return (e => new bt("string" == typeof e ? e : e + "", void 0, gt))(t)
									})(e) : e,
									xt = window,
									kt = xt.trustedTypes,
									Et = kt ? kt.emptyScript : "",
									St = xt.reactiveElementPolyfillSupport,
									Ot = {
										toAttribute(e, t) {
											switch (t) {
												case Boolean:
													e = e ? Et : null;
													break;
												case Object:
												case Array:
													e = null == e ? e : JSON.stringify(e)
											}
											return e
										},
										fromAttribute(e, t) {
											let r = e;
											switch (t) {
												case Boolean:
													r = null !== e;
													break;
												case Number:
													r = null === e ? null : Number(e);
													break;
												case Object:
												case Array:
													try {
														r = JSON.parse(e)
													} catch {
														r = null
													}
											}
											return r
										}
									},
									Ct = (e, t) => t !== e && (t == t || e == e),
									At = {
										attribute: !0,
										type: String,
										converter: Ot,
										reflect: !1,
										hasChanged: Ct
									},
									Dt = class extends HTMLElement {
										constructor() {
											super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u()
										}
										static addInitializer(e) {
											var t;
											null !== (t = this.h) && void 0 !== t || (this.h = []), this.h.push(e)
										}
										static get observedAttributes() {
											this.finalize();
											let e = [];
											return this.elementProperties.forEach((t, r) => {
												let n = this._$Ep(r, t);
												void 0 !== n && (this._$Ev.set(n, r), e.push(n))
											}), e
										}
										static createProperty(e, t = At) {
											if (t.state && (t.attribute = !1), this.finalize(), this.elementProperties.set(e, t), !t.noAccessor && !this.prototype.hasOwnProperty(e)) {
												let r = "symbol" == typeof e ? Symbol() : "__" + e,
													n = this.getPropertyDescriptor(e, r, t);
												void 0 !== n && Object.defineProperty(this.prototype, e, n)
											}
										}
										static getPropertyDescriptor(e, t, r) {
											return {
												get() {
													return this[t]
												},
												set(n) {
													let o = this[e];
													this[t] = n, this.requestUpdate(e, o, r)
												},
												configurable: !0,
												enumerable: !0
											}
										}
										static getPropertyOptions(e) {
											return this.elementProperties.get(e) || At
										}
										static finalize() {
											if (this.hasOwnProperty("finalized")) return !1;
											this.finalized = !0;
											let e = Object.getPrototypeOf(this);
											if (e.finalize(), this.elementProperties = new Map(e.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) {
												let e = this.properties,
													t = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
												for (let r of t) this.createProperty(r, e[r])
											}
											return this.elementStyles = this.finalizeStyles(this.styles), !0
										}
										static finalizeStyles(e) {
											let t = [];
											if (Array.isArray(e)) {
												let r = new Set(e.flat(1 / 0).reverse());
												for (let e of r) t.unshift(wt(e))
											} else void 0 !== e && t.push(wt(e));
											return t
										}
										static _$Ep(e, t) {
											let r = t.attribute;
											return !1 === r ? void 0 : "string" == typeof r ? r : "string" == typeof e ? e.toLowerCase() : void 0
										}
										u() {
											var e;
											this._$E_ = new Promise(e => this.enableUpdating = e), this._$AL = new Map, this._$Eg(), this.requestUpdate(), null === (e = this.constructor.h) || void 0 === e || e.forEach(e => e(this))
										}
										addController(e) {
											var t, r;
											(null !== (t = this._$ES) && void 0 !== t ? t : this._$ES = []).push(e), void 0 !== this.renderRoot && this.isConnected && (null === (r = e.hostConnected) || void 0 === r || r.call(e))
										}
										removeController(e) {
											var t;
											null === (t = this._$ES) || void 0 === t || t.splice(this._$ES.indexOf(e) >>> 0, 1)
										}
										_$Eg() {
											this.constructor.elementProperties.forEach((e, t) => {
												this.hasOwnProperty(t) && (this._$Ei.set(t, this[t]), delete this[t])
											})
										}
										createRenderRoot() {
											var e;
											let t = null !== (e = this.shadowRoot) && void 0 !== e ? e : this.attachShadow(this.constructor.shadowRootOptions);
											return ((e, t) => {
												mt ? e.adoptedStyleSheets = t.map(e => e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach(t => {
													let r = document.createElement("style"),
														n = vt.litNonce;
													void 0 !== n && r.setAttribute("nonce", n), r.textContent = t.cssText, e.appendChild(r)
												})
											})(t, this.constructor.elementStyles), t
										}
										connectedCallback() {
											var e;
											void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (e = this._$ES) || void 0 === e || e.forEach(e => {
												var t;
												return null === (t = e.hostConnected) || void 0 === t ? void 0 : t.call(e)
											})
										}
										enableUpdating(e) {}
										disconnectedCallback() {
											var e;
											null === (e = this._$ES) || void 0 === e || e.forEach(e => {
												var t;
												return null === (t = e.hostDisconnected) || void 0 === t ? void 0 : t.call(e)
											})
										}
										attributeChangedCallback(e, t, r) {
											this._$AK(e, r)
										}
										_$EO(e, t, r = At) {
											var n;
											let o = this.constructor._$Ep(e, r);
											if (void 0 !== o && !0 === r.reflect) {
												let i = (void 0 !== (null === (n = r.converter) || void 0 === n ? void 0 : n.toAttribute) ? r.converter : Ot).toAttribute(t, r.type);
												this._$El = e, null == i ? this.removeAttribute(o) : this.setAttribute(o, i), this._$El = null
											}
										}
										_$AK(e, t) {
											var r;
											let n = this.constructor,
												o = n._$Ev.get(e);
											if (void 0 !== o && this._$El !== o) {
												let e = n.getPropertyOptions(o),
													i = "function" == typeof e.converter ? {
														fromAttribute: e.converter
													} : void 0 !== (null === (r = e.converter) || void 0 === r ? void 0 : r.fromAttribute) ? e.converter : Ot;
												this._$El = o, this[o] = i.fromAttribute(t, e.type), this._$El = null
											}
										}
										requestUpdate(e, t, r) {
											let n = !0;
											void 0 !== e && (((r = r || this.constructor.getPropertyOptions(e)).hasChanged || Ct)(this[e], t) ? (this._$AL.has(e) || this._$AL.set(e, t), !0 === r.reflect && this._$El !== e && (void 0 === this._$EC && (this._$EC = new Map), this._$EC.set(e, r))) : n = !1), !this.isUpdatePending && n && (this._$E_ = this._$Ej())
										}
										async _$Ej() {
											this.isUpdatePending = !0;
											try {
												await this._$E_
											} catch (t) {
												Promise.reject(t)
											}
											let e = this.scheduleUpdate();
											return null != e && await e, !this.isUpdatePending
										}
										scheduleUpdate() {
											return this.performUpdate()
										}
										performUpdate() {
											var e;
											if (!this.isUpdatePending) return;
											this.hasUpdated, this._$Ei && (this._$Ei.forEach((e, t) => this[t] = e), this._$Ei = void 0);
											let t = !1,
												r = this._$AL;
											try {
												(t = this.shouldUpdate(r)) ? (this.willUpdate(r), null === (e = this._$ES) || void 0 === e || e.forEach(e => {
													var t;
													return null === (t = e.hostUpdate) || void 0 === t ? void 0 : t.call(e)
												}), this.update(r)) : this._$Ek()
											} catch (n) {
												throw t = !1, this._$Ek(), n
											}
											t && this._$AE(r)
										}
										willUpdate(e) {}
										_$AE(e) {
											var t;
											null === (t = this._$ES) || void 0 === t || t.forEach(e => {
												var t;
												return null === (t = e.hostUpdated) || void 0 === t ? void 0 : t.call(e)
											}), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e)
										}
										_$Ek() {
											this._$AL = new Map, this.isUpdatePending = !1
										}
										get updateComplete() {
											return this.getUpdateComplete()
										}
										getUpdateComplete() {
											return this._$E_
										}
										shouldUpdate(e) {
											return !0
										}
										update(e) {
											void 0 !== this._$EC && (this._$EC.forEach((e, t) => this._$EO(t, this[t], e)), this._$EC = void 0), this._$Ek()
										}
										updated(e) {}
										firstUpdated(e) {}
									};
								Dt.finalized = !0, Dt.elementProperties = new Map, Dt.elementStyles = [], Dt.shadowRootOptions = {
									mode: "open"
								}, null == St || St({
									ReactiveElement: Dt
								}), (null !== (Me = xt.reactiveElementVersions) && void 0 !== Me ? Me : xt.reactiveElementVersions = []).push("1.4.0");
								var $t, Rt = window,
									jt = Rt.trustedTypes,
									It = jt ? jt.createPolicy("lit-html", {
										createHTML: e => e
									}) : void 0,
									Pt = `lit$${(Math.random()+"").slice(9)}$`,
									Tt = "?" + Pt,
									Mt = `<${Tt}>`,
									Ft = document,
									zt = (e = "") => Ft.createComment(e),
									Nt = e => null === e || "object" != typeof e && "function" != typeof e,
									Lt = Array.isArray,
									Bt = e => Lt(e) || "function" == typeof(null == e ? void 0 : e[Symbol.iterator]),
									qt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
									Ut = /-->/g,
									Vt = />/g,
									Qt = RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)", "g"),
									Ht = /'/g,
									Wt = /"/g,
									Gt = /^(?:script|style|textarea|title)$/i,
									Yt = e => (t, ...r) => ({
										_$litType$: e,
										strings: t,
										values: r
									}),
									Jt = Yt(1),
									Kt = Yt(2),
									Xt = Symbol.for("lit-noChange"),
									Zt = Symbol.for("lit-nothing"),
									er = new WeakMap,
									tr = (e, t, r) => {
										var n, o;
										let i = null !== (n = null == r ? void 0 : r.renderBefore) && void 0 !== n ? n : t,
											a = i._$litPart$;
										if (void 0 === a) {
											let e = null !== (o = null == r ? void 0 : r.renderBefore) && void 0 !== o ? o : null;
											i._$litPart$ = a = new cr(t.insertBefore(zt(), e), e, void 0, null != r ? r : {})
										}
										return a._$AI(e), a
									},
									rr = Ft.createTreeWalker(Ft, 129, null, !1),
									nr = (e, t) => {
										let r, n = e.length - 1,
											o = [],
											i = 2 === t ? "<svg>" : "",
											a = qt;
										for (let l = 0; l < n; l++) {
											let t, n, s = e[l],
												c = -1,
												u = 0;
											for (; u < s.length && (a.lastIndex = u, null !== (n = a.exec(s)));) u = a.lastIndex, a === qt ? "!--" === n[1] ? a = Ut : void 0 !== n[1] ? a = Vt : void 0 !== n[2] ? (Gt.test(n[2]) && (r = RegExp("</" + n[2], "g")), a = Qt) : void 0 !== n[3] && (a = Qt) : a === Qt ? ">" === n[0] ? (a = null != r ? r : qt, c = -1) : void 0 === n[1] ? c = -2 : (c = a.lastIndex - n[2].length, t = n[1], a = void 0 === n[3] ? Qt : '"' === n[3] ? Wt : Ht) : a === Wt || a === Ht ? a = Qt : a === Ut || a === Vt ? a = qt : (a = Qt, r = void 0);
											let d = a === Qt && e[l + 1].startsWith("/>") ? " " : "";
											i += a === qt ? s + Mt : c >= 0 ? (o.push(t), s.slice(0, c) + "$lit$" + s.slice(c) + Pt + d) : s + Pt + (-2 === c ? (o.push(void 0), l) : d)
										}
										let s = i + (e[n] || "<?>") + (2 === t ? "</svg>" : "");
										if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
										return [void 0 !== It ? It.createHTML(s) : s, o]
									},
									or = class {
										constructor({
											strings: e,
											_$litType$: t
										}, r) {
											let n;
											this.parts = [];
											let o = 0,
												i = 0,
												a = e.length - 1,
												s = this.parts,
												[l, c] = nr(e, t);
											if (this.el = or.createElement(l, r), rr.currentNode = this.el.content, 2 === t) {
												let e = this.el.content,
													t = e.firstChild;
												t.remove(), e.append(...t.childNodes)
											}
											for (; null !== (n = rr.nextNode()) && s.length < a;) {
												if (1 === n.nodeType) {
													if (n.hasAttributes()) {
														let e = [];
														for (let t of n.getAttributeNames())
															if (t.endsWith("$lit$") || t.startsWith(Pt)) {
																let r = c[i++];
																if (e.push(t), void 0 !== r) {
																	let e = n.getAttribute(r.toLowerCase() + "$lit$").split(Pt),
																		t = /([.?@])?(.*)/.exec(r);
																	s.push({
																		type: 1,
																		index: o,
																		name: t[2],
																		strings: e,
																		ctor: "." === t[1] ? dr : "?" === t[1] ? pr : "@" === t[1] ? fr : ur
																	})
																} else s.push({
																	type: 6,
																	index: o
																})
															} for (let t of e) n.removeAttribute(t)
													}
													if (Gt.test(n.tagName)) {
														let e = n.textContent.split(Pt),
															t = e.length - 1;
														if (t > 0) {
															n.textContent = jt ? jt.emptyScript : "";
															for (let r = 0; r < t; r++) n.append(e[r], zt()), rr.nextNode(), s.push({
																type: 2,
																index: ++o
															});
															n.append(e[t], zt())
														}
													}
												} else if (8 === n.nodeType)
													if (n.data === Tt) s.push({
														type: 2,
														index: o
													});
													else {
														let e = -1;
														for (; - 1 !== (e = n.data.indexOf(Pt, e + 1));) s.push({
															type: 7,
															index: o
														}), e += Pt.length - 1
													} o++
											}
										}
										static createElement(e, t) {
											let r = Ft.createElement("template");
											return r.innerHTML = e, r
										}
									};

								function ir(e, t, r = e, n) {
									var o, i, a, s;
									if (t === Xt) return t;
									let l = void 0 !== n ? null === (o = r._$Cl) || void 0 === o ? void 0 : o[n] : r._$Cu,
										c = Nt(t) ? void 0 : t._$litDirective$;
									return (null == l ? void 0 : l.constructor) !== c && (null === (i = null == l ? void 0 : l._$AO) || void 0 === i || i.call(l, !1), void 0 === c ? l = void 0 : (l = new c(e))._$AT(e, r, n), void 0 !== n ? (null !== (a = (s = r)._$Cl) && void 0 !== a ? a : s._$Cl = [])[n] = l : r._$Cu = l), void 0 !== l && (t = ir(e, l._$AS(e, t.values), l, n)), t
								}
								var ar, sr, lr = class {
										constructor(e, t) {
											this.v = [], this._$AN = void 0, this._$AD = e, this._$AM = t
										}
										get parentNode() {
											return this._$AM.parentNode
										}
										get _$AU() {
											return this._$AM._$AU
										}
										p(e) {
											var t;
											let {
												el: {
													content: r
												},
												parts: n
											} = this._$AD, o = (null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t ? t : Ft).importNode(r, !0);
											rr.currentNode = o;
											let i = rr.nextNode(),
												a = 0,
												s = 0,
												l = n[0];
											for (; void 0 !== l;) {
												if (a === l.index) {
													let t;
													2 === l.type ? t = new cr(i, i.nextSibling, this, e) : 1 === l.type ? t = new l.ctor(i, l.name, l.strings, this, e) : 6 === l.type && (t = new vr(i, this, e)), this.v.push(t), l = n[++s]
												}
												a !== (null == l ? void 0 : l.index) && (i = rr.nextNode(), a++)
											}
											return o
										}
										m(e) {
											let t = 0;
											for (let r of this.v) void 0 !== r && (void 0 !== r.strings ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++
										}
									},
									cr = class {
										constructor(e, t, r, n) {
											var o;
											this.type = 2, this._$AH = Zt, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = n, this._$C_ = null === (o = null == n ? void 0 : n.isConnected) || void 0 === o || o
										}
										get _$AU() {
											var e, t;
											return null !== (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) && void 0 !== t ? t : this._$C_
										}
										get parentNode() {
											let e = this._$AA.parentNode,
												t = this._$AM;
											return void 0 !== t && 11 === e.nodeType && (e = t.parentNode), e
										}
										get startNode() {
											return this._$AA
										}
										get endNode() {
											return this._$AB
										}
										_$AI(e, t = this) {
											e = ir(this, e, t), Nt(e) ? e === Zt || null == e || "" === e ? (this._$AH !== Zt && this._$AR(), this._$AH = Zt) : e !== this._$AH && e !== Xt && this.$(e) : void 0 !== e._$litType$ ? this.T(e) : void 0 !== e.nodeType ? this.k(e) : Bt(e) ? this.O(e) : this.$(e)
										}
										S(e, t = this._$AB) {
											return this._$AA.parentNode.insertBefore(e, t)
										}
										k(e) {
											this._$AH !== e && (this._$AR(), this._$AH = this.S(e))
										}
										$(e) {
											this._$AH !== Zt && Nt(this._$AH) ? this._$AA.nextSibling.data = e : this.k(Ft.createTextNode(e)), this._$AH = e
										}
										T(e) {
											var t;
											let {
												values: r,
												_$litType$: n
											} = e, o = "number" == typeof n ? this._$AC(e) : (void 0 === n.el && (n.el = or.createElement(n.h, this.options)), n);
											if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === o) this._$AH.m(r);
											else {
												let e = new lr(o, this),
													t = e.p(this.options);
												e.m(r), this.k(t), this._$AH = e
											}
										}
										_$AC(e) {
											let t = er.get(e.strings);
											return void 0 === t && er.set(e.strings, t = new or(e)), t
										}
										O(e) {
											Lt(this._$AH) || (this._$AH = [], this._$AR());
											let t, r = this._$AH,
												n = 0;
											for (let o of e) n === r.length ? r.push(t = new cr(this.S(zt()), this.S(zt()), this, this.options)) : t = r[n], t._$AI(o), n++;
											n < r.length && (this._$AR(t && t._$AB.nextSibling, n), r.length = n)
										}
										_$AR(e = this._$AA.nextSibling, t) {
											var r;
											for (null === (r = this._$AP) || void 0 === r || r.call(this, !1, !0, t); e && e !== this._$AB;) {
												let t = e.nextSibling;
												e.remove(), e = t
											}
										}
										setConnected(e) {
											var t;
											void 0 === this._$AM && (this._$C_ = e, null === (t = this._$AP) || void 0 === t || t.call(this, e))
										}
									},
									ur = class {
										constructor(e, t, r, n, o) {
											this.type = 1, this._$AH = Zt, this._$AN = void 0, this.element = e, this.name = t, this._$AM = n, this.options = o, r.length > 2 || "" !== r[0] || "" !== r[1] ? (this._$AH = Array(r.length - 1).fill(new String), this.strings = r) : this._$AH = Zt
										}
										get tagName() {
											return this.element.tagName
										}
										get _$AU() {
											return this._$AM._$AU
										}
										_$AI(e, t = this, r, n) {
											let o = this.strings,
												i = !1;
											if (void 0 === o) e = ir(this, e, t, 0), (i = !Nt(e) || e !== this._$AH && e !== Xt) && (this._$AH = e);
											else {
												let n, a, s = e;
												for (e = o[0], n = 0; n < o.length - 1; n++)(a = ir(this, s[r + n], t, n)) === Xt && (a = this._$AH[n]), i || (i = !Nt(a) || a !== this._$AH[n]), a === Zt ? e = Zt : e !== Zt && (e += (null != a ? a : "") + o[n + 1]), this._$AH[n] = a
											}
											i && !n && this.P(e)
										}
										P(e) {
											e === Zt ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != e ? e : "")
										}
									},
									dr = class extends ur {
										constructor() {
											super(...arguments), this.type = 3
										}
										P(e) {
											this.element[this.name] = e === Zt ? void 0 : e
										}
									},
									hr = jt ? jt.emptyScript : "",
									pr = class extends ur {
										constructor() {
											super(...arguments), this.type = 4
										}
										P(e) {
											e && e !== Zt ? this.element.setAttribute(this.name, hr) : this.element.removeAttribute(this.name)
										}
									},
									fr = class extends ur {
										constructor(e, t, r, n, o) {
											super(e, t, r, n, o), this.type = 5
										}
										_$AI(e, t = this) {
											var r;
											if ((e = null !== (r = ir(this, e, t, 0)) && void 0 !== r ? r : Zt) === Xt) return;
											let n = this._$AH,
												o = e === Zt && n !== Zt || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive,
												i = e !== Zt && (n === Zt || o);
											o && this.element.removeEventListener(this.name, this, n), i && this.element.addEventListener(this.name, this, e), this._$AH = e
										}
										handleEvent(e) {
											var t, r;
											"function" == typeof this._$AH ? this._$AH.call(null !== (r = null === (t = this.options) || void 0 === t ? void 0 : t.host) && void 0 !== r ? r : this.element, e) : this._$AH.handleEvent(e)
										}
									},
									vr = class {
										constructor(e, t, r) {
											this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r
										}
										get _$AU() {
											return this._$AM._$AU
										}
										_$AI(e) {
											ir(this, e)
										}
									},
									mr = {
										A: "$lit$",
										M: Pt,
										C: Tt,
										L: 1,
										R: nr,
										D: lr,
										V: Bt,
										I: ir,
										H: cr,
										N: ur,
										U: pr,
										B: fr,
										F: dr,
										W: vr
									},
									gr = Rt.litHtmlPolyfillSupport;
								null == gr || gr(or, cr), (null !== ($t = Rt.litHtmlVersions) && void 0 !== $t ? $t : Rt.litHtmlVersions = []).push("2.3.0");
								var yr = class extends Dt {
									constructor() {
										super(...arguments), this.renderOptions = {
											host: this
										}, this._$Do = void 0
									}
									createRenderRoot() {
										var e, t;
										let r = super.createRenderRoot();
										return null !== (e = (t = this.renderOptions).renderBefore) && void 0 !== e || (t.renderBefore = r.firstChild), r
									}
									update(e) {
										let t = this.render();
										this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = tr(t, this.renderRoot, this.renderOptions)
									}
									connectedCallback() {
										var e;
										super.connectedCallback(), null === (e = this._$Do) || void 0 === e || e.setConnected(!0)
									}
									disconnectedCallback() {
										var e;
										super.disconnectedCallback(), null === (e = this._$Do) || void 0 === e || e.setConnected(!1)
									}
									render() {
										return Xt
									}
								};
								yr.finalized = !0, yr._$litElement$ = !0, null === (ar = globalThis.litElementHydrateSupport) || void 0 === ar || ar.call(globalThis, {
									LitElement: yr
								});
								var br = globalThis.litElementPolyfillSupport;
								null == br || br({
									LitElement: yr
								}), (null !== (sr = globalThis.litElementVersions) && void 0 !== sr ? sr : globalThis.litElementVersions = []).push("3.2.1");
								var _r = e => t => "function" == typeof t ? ((e, t) => (customElements.define(e, t), t))(e, t) : ((e, t) => {
										let {
											kind: r,
											elements: n
										} = t;
										return {
											kind: r,
											elements: n,
											finisher(t) {
												customElements.define(e, t)
											}
										}
									})(e, t),
									wr = (e, t) => "method" !== t.kind || !t.descriptor || "value" in t.descriptor ? {
										kind: "field",
										key: Symbol(),
										placement: "own",
										descriptor: {},
										originalKey: t.key,
										initializer() {
											"function" == typeof t.initializer && (this[t.key] = t.initializer.call(this))
										},
										finisher(r) {
											r.createProperty(t.key, e)
										}
									} : {
										...t,
										finisher(r) {
											r.createProperty(t.key, e)
										}
									};

								function xr(e) {
									return (t, r) => void 0 !== r ? ((e, t, r) => {
										t.constructor.createProperty(r, e)
									})(e, t, r) : wr(e, t)
								}

								function kr(e) {
									return xr({
										...e,
										state: !0
									})
								}
								var Er = ({
									finisher: e,
									descriptor: t
								}) => (r, n) => {
									var o;
									if (void 0 === n) {
										let n = null !== (o = r.originalKey) && void 0 !== o ? o : r.key,
											i = null != t ? {
												kind: "method",
												placement: "prototype",
												key: n,
												descriptor: t(r.key)
											} : {
												...r,
												key: n
											};
										return null != e && (i.finisher = function(t) {
											e(t, n)
										}), i
									} {
										let o = r.constructor;
										void 0 !== t && Object.defineProperty(r, n, t(n)), null == e || e(o, n)
									}
								};

								function Sr(e, t) {
									return Er({
										descriptor: r => {
											let n = {
												get() {
													var t, r;
													return null !== (r = null === (t = this.renderRoot) || void 0 === t ? void 0 : t.querySelector(e)) && void 0 !== r ? r : null
												},
												enumerable: !0,
												configurable: !0
											};
											if (t) {
												let t = "symbol" == typeof r ? Symbol() : "__" + r;
												n.get = function() {
													var r, n;
													return void 0 === this[t] && (this[t] = null !== (n = null === (r = this.renderRoot) || void 0 === r ? void 0 : r.querySelector(e)) && void 0 !== n ? n : null), this[t]
												}
											}
											return n
										}
									})
								}
								var Or, Cr = null != (null === (Or = window.HTMLSlotElement) || void 0 === Or ? void 0 : Or.prototype.assignedElements) ? (e, t) => e.assignedElements(t) : (e, t) => e.assignedNodes(t).filter(e => e.nodeType === Node.ELEMENT_NODE);

								function Ar(e, t, r) {
									let n, o = e;
									return "object" == typeof e ? (o = e.slot, n = e) : n = {
										flatten: t
									}, r ? function(e) {
										let {
											slot: t,
											selector: r
										} = null != e ? e : {};
										return Er({
											descriptor: n => ({
												get() {
													var n;
													let o = "slot" + (t ? `[name=${t}]` : ":not([name])"),
														i = null === (n = this.renderRoot) || void 0 === n ? void 0 : n.querySelector(o),
														a = null != i ? Cr(i, e) : [];
													return r ? a.filter(e => e.matches(r)) : a
												},
												enumerable: !0,
												configurable: !0
											})
										})
									}({
										slot: o,
										flatten: t,
										selector: r
									}) : Er({
										descriptor: e => ({
											get() {
												var e, t;
												let r = "slot" + (o ? `[name=${o}]` : ":not([name])"),
													i = null === (e = this.renderRoot) || void 0 === e ? void 0 : e.querySelector(r);
												return null !== (t = null == i ? void 0 : i.assignedNodes(n)) && void 0 !== t ? t : []
											},
											enumerable: !0,
											configurable: !0
										})
									})
								}
								var Dr = "context-value-request",
									$r = "context-value-provided",
									Rr = class extends CustomEvent {
										constructor(e) {
											super(Dr, {
												detail: e,
												bubbles: !0,
												composed: !0
											})
										}
									},
									jr = class extends CustomEvent {
										constructor(e) {
											super($r, {
												detail: e,
												bubbles: !0,
												composed: !0
											})
										}
									},
									Ir = e => (class extends e {
										constructor() {
											super(), this.instances = new Map, this.addEventListener(Dr, e => {
												let t = e.detail.name;
												this.instances.has(t) && (e.detail.instance = this.instances.get(t), e.stopPropagation())
											}), this.addEventListener($r, e => {
												e.target !== this && this.provideInstance(e.detail.name, e.detail.instance)
											})
										}
										provideInstance(e, t) {
											this.instances.set(e, t);
											let r = new jr({
												name: e,
												instance: t
											});
											this.dispatchEvent(r)
										}
									}),
									Pr = e => (class extends e {
										constructor() {
											super(...arguments), this.handleInstanceUpdated = e => {
												this.instanceUpdated(e.detail.name)
											}
										}
										connectedCallback() {
											super.connectedCallback(), window.addEventListener($r, this.handleInstanceUpdated)
										}
										disconnectedCallback() {
											super.disconnectedCallback(), window.removeEventListener($r, this.handleInstanceUpdated)
										}
										requestInstance(e) {
											let t = new Rr({
												name: e
											});
											return this.dispatchEvent(t), t.detail.instance
										}
										instanceUpdated(e) {}
									}),
									Tr = matrixcs,
									{
										ClientEvent: Mr,
										Direction: Fr,
										EventType: zr,
										EventStatus: Nr,
										MatrixEvent: Lr,
										MatrixEventEvent: Br,
										MsgType: qr,
										Preset: Ur,
										RoomEvent: Vr,
										RoomStateEvent: Qr,
										TimelineWindow: Hr,
										Visibility: Wr,
										RelationType: Gr
									} = matrixcs,
									Yr = Object.assign({}, {
										templateRenderingStrategy: null
									}),
									Jr = () => {
										let {
											templateRenderingStrategy: e = null
										} = (() => Object.assign({}, Yr))();
										if (null == e) throw new Error("Faceplate-ui templateRenderingStrategy is undefined.\n\n      Please import a templateRenderingStrategy so that faceplate-ui can render\n      template components properly for your environment. For example:\n\n      import '@reddit/faceplate-ui/templateRenderingStrategy/clientStrategy.js'\n\n      or, for a server environment:\n\n      import '@reddit/faceplate-ui/templateRenderingStrategy/serverStrategy.js'\n      ");
										return e
									},
									Kr = 1,
									Xr = 2,
									Zr = 6,
									en = e => (...t) => ({
										_$litDirective$: e,
										values: t
									}),
									tn = class {
										constructor(e) {}
										get _$AU() {
											return this._$AM._$AU
										}
										_$AT(e, t, r) {
											this._$Ct = e, this._$AM = t, this._$Ci = r
										}
										_$AS(e, t) {
											return this.update(e, t)
										}
										update(e, t) {
											return this.render(...t)
										}
									},
									rn = en(class extends tn {
										constructor(e) {
											if (super(e), this._previousAttrs = new Set, e.type !== Zr) throw new Error("attrs directive must be used on element")
										}
										render(e) {
											return Xt
										}
										update(e, [t]) {
											let r = e.element;
											this._previousAttrs.forEach(e => {
												(!(e in t) || !t[e]) && r.removeAttribute(e)
											}), this._previousAttrs.clear();
											for (let n in t) {
												let e = t[n];
												if (!e) continue;
												let o = "boolean" == typeof e ? "" : e.toString();
												r.setAttribute(n, o), this._previousAttrs.add(n)
											}
											return Xt
										}
									}),
									nn = e => null != e ? e : Zt;

								function on(e, t) {
									return "className" !== e && (null == t || "string" == typeof t || "number" == typeof t || "boolean" == typeof t)
								}
								var an, sn, ln = e => {
									let t = {};
									for (let r in e) {
										let n = e[r];
										Object.prototype.hasOwnProperty.call(e, r) && on(r, n) && (t[r] = n)
									}
									return t
								};
								(e => {
									Yr = Object.assign(Object.assign({}, Yr), e)
								})({
									templateRenderingStrategy: {
										_toHtml_TEST_ONLY: e => {
											let t = document.createElement("div");
											return tr(e, t), t.children[0]
										},
										attrs: e => null == e ? Zt : rn(ln(e)),
										ifDefined: nn,
										html: Jt,
										getType: () => "client",
										svg: Kt
									}
								}), (sn = an || (an = {})).Small = "sm", sn.Medium = "md", sn.Large = "lg";
								var cn = {
										sm: "button-small",
										md: "button-medium",
										lg: "button-large"
									},
									un = {
										sm: {
											label: "px-[length:var(--rem10)]",
											icon: "px-[length:var(--rem6)]",
											iconLabel: "px-[length:var(--rem10)]"
										},
										md: {
											label: "px-[length:var(--rem14)]",
											icon: "px-[length:var(--rem8)]",
											iconLabel: "pl-[length:var(--rem10)] pr-[length:var(--rem14)]"
										},
										lg: {
											label: "px-[length:var(--rem14)]",
											icon: "px-[length:var(--rem12)]",
											iconLabel: "pl-[length:var(--rem10)] pr-[length:var(--rem14)]"
										}
									},
									dn = {
										sm: {
											label: "pl-[length:var(--rem10)] pr-[length:var(--rem6)]",
											icon: "pl-[length:var(--rem10)] pr-[length:var(--rem6)]",
											iconLabel: "pl-[length:var(--rem10)] pr-[length:var(--rem6)]"
										},
										md: {
											label: "pl-[length:var(--rem14)] pr-[length:var(--rem10)]",
											icon: "pl-[length:var(--rem10)] pr-[length:var(--rem6)]",
											iconLabel: "px-[length:var(--rem10)]"
										},
										lg: {
											label: "pl-[length:var(--rem14)] pr-[length:var(--rem10)]",
											icon: "px-[length:var(--rem14)]",
											iconLabel: "pl-[length:var(--rem14)] pr-[length:var(--rem10)]"
										}
									},
									hn = {
										primary: "button-primary",
										secondary: "button-secondary",
										tertiary: "button-tertiary",
										plain: "button-plain",
										outline: "button-outline",
										destructive: "button-destructive",
										media: "button-media",
										brand: "button-brand",
										success: "button-success",
										plainInverted: "button-plain-inverted"
									},
									pn = {
										sm: "text-16",
										md: "text-20",
										lg: "text-20"
									},
									fn = ({
										attributes: e,
										children: t,
										size: r = an.Medium,
										appearance: n = "secondary",
										selected: o,
										shape: i,
										leadingIcon: a,
										dropdown: s,
										ariaLabel: l,
										ariaControls: c,
										role: u
									}) => {
										let {
											attrs: d,
											html: h,
											ifDefined: p
										} = Jr(), f = "label", v = "flex";
										a && t ? f = "iconLabel" : t || (f = "icon"), (t || s) && (v += " mr-xs");
										let m = s ? dn : un,
											g = "tab" === u ? o ? "true" : "false" : void 0;
										return h`
    <button
      ${d(e)}
      @click="${null==e?void 0:e.onclick}"
      aria-label="${p(l)}"
      aria-controls="${p(c)}"
      aria-selected="${p(g)}"
      role="${p(null===u?void 0:u)}"
      class="${(null==e?void 0:e.className)||""}
          ${r?`${cn[r]} ${m[r][f]}`:""}
          ${n?hn[n]:""}
          ${o?"button-activated":""}
          ${"square"===i?"rounded-[.5rem]":""}
          button flex items-center justify-center">
      <span class="flex items-center justify-center">
        ${a?h`<span class="${v} ${pn[r]}">
              ${a}
            </span>`:void 0}
        ${t?h`<span class="${"flex items-center gap-xs"}"> ${t} </span>`:void 0}
      </span>
      ${s?h`<span
            class="inline-block dropdown-icon ${pn[r]} ${t&&"ml-2xs"}"
            ><icon-caret-down></icon-caret-down
          ></span>`:void 0}
    </button>
  `
									},
									vn = "matrix",
									mn = e => (class extends(Pr(e)) {
										constructor() {
											super(...arguments), this.handleMatrixEvent = () => {
												this.requestUpdate()
											}
										}
										connectedCallback() {
											super.connectedCallback(), this.assignMatrixInstance()
										}
										disconnectedCallback() {
											super.disconnectedCallback(), this.matrix && (this.matrix.off(Mr.Event, this.handleMatrixEvent), this.matrix.off(Mr.Sync, this.handleMatrixEvent))
										}
										assignMatrixInstance() {
											let e = this.requestInstance(vn);
											e && (this.matrix = e, this.requestUpdate(), this.matrixConnected(), this.matrix.on(Mr.Event, this.handleMatrixEvent), this.matrix.on(Mr.Sync, this.handleMatrixEvent))
										}
										instanceUpdated(e) {
											super.instanceUpdated(e), e === vn && this.assignMatrixInstance()
										}
										matrixConnected() {}
									}),
									gn = class {
										constructor() {
											let e, t;
											this.promise = new Promise((r, n) => {
												e = r, t = n
											}), this.resolve = e, this.reject = t
										}
									},
									yn = class {
										constructor(e, t) {
											this.host = e, this.name = t, this.handleInstanceUpdated = e => {
												e.detail.name === this.name && (this.value = e.detail.instance, this.deferredValue && (this.deferredValue.resolve(this.value), this.deferredValue = void 0))
											}, e.addController(this)
										}
										hostConnected() {
											let e = new Rr({
												name: this.name
											});
											this.host.dispatchEvent(e), this.value = e.detail.instance, window.addEventListener($r, this.handleInstanceUpdated)
										}
										hostDisconnected() {
											window.removeEventListener($r, this.handleInstanceUpdated)
										}
										async getInstance() {
											return this.value ? this.value : (this.deferredValue || (this.deferredValue = new gn), this.deferredValue.promise)
										}
									},
									bn = class extends yn {
										constructor(e) {
											super(e, vn), this.listeners = []
										}
										get client() {
											if (!this.value) throw new Error("Matrix client instance is required");
											return this.value
										}
										hostConnected() {
											if (super.hostConnected(), !this.value) throw new Error("Matrix client instance is required")
										}
										hostDisconnected() {
											super.hostDisconnected(), this.listeners.forEach(e => {
												this.client.off(e.event, e.listener)
											}), this.listeners = []
										}
										on(e, t) {
											this.client.on(e, t), this.listeners.push({
												event: e,
												listener: t
											})
										}
									},
									_n = class {
										constructor(e, t = "room") {
											this.host = e, this.roomIdPropertyName = t, this.roomId = "", this.listeners = [], e.addController(this), this.matrix = new bn(e)
										}
										get hostRoomId() {
											return this.host[this.roomIdPropertyName]
										}
										getRoom() {
											let e = this.matrix.client.getRoom(this.hostRoomId);
											if (!e) throw new Error("Room not found");
											return e
										}
										on(e, t) {
											this.getRoom().on(e, t), this.listeners.push({
												event: e,
												listener: t
											})
										}
										hostConnected() {
											this.roomId = this.hostRoomId
										}
										hostUpdated() {
											if (this.hostRoomId !== this.roomId) {
												if (this.listeners.length > 0) {
													let e = this.matrix.client.getRoom(this.hostRoomId);
													e && this.listeners.forEach(t => {
														e.off(t.event, t.listener)
													})
												}
												if (this.roomId = this.hostRoomId, this.listeners.length > 0) {
													let e = this.getRoom();
													this.listeners.forEach(t => {
														e.on(t.event, t.listener)
													})
												}
											}
										}
										hostDisconnected() {
											let e = this.getRoom();
											this.listeners.forEach(t => {
												e.off(t.event, t.listener)
											}), this.listeners = []
										}
									},
									wn = en(class extends tn {
										constructor(e) {
											var t;
											if (super(e), e.type !== Kr || "class" !== e.name || (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
										}
										render(e) {
											return " " + Object.keys(e).filter(t => e[t]).join(" ") + " "
										}
										update(e, [t]) {
											var r, n;
											if (void 0 === this.nt) {
												this.nt = new Set, void 0 !== e.strings && (this.st = new Set(e.strings.join(" ").split(/\s/).filter(e => "" !== e)));
												for (let e in t) t[e] && (null === (r = this.st) || void 0 === r || !r.has(e)) && this.nt.add(e);
												return this.render(t)
											}
											let o = e.element.classList;
											this.nt.forEach(e => {
												e in t || (o.remove(e), this.nt.delete(e))
											});
											for (let i in t) {
												let e = !!t[i];
												e === this.nt.has(i) || (null === (n = this.st) || void 0 === n ? void 0 : n.has(i)) || (e ? (o.add(i), this.nt.add(i)) : (o.remove(i), this.nt.delete(i)))
											}
											return Xt
										}
									}),
									xn = class extends tn {
										constructor(e) {
											if (super(e), this.it = Zt, e.type !== Xr) throw Error(this.constructor.directiveName + "() can only be used in child bindings")
										}
										render(e) {
											if (e === Zt || null == e) return this._t = void 0, this.it = e;
											if (e === Xt) return e;
											if ("string" != typeof e) throw Error(this.constructor.directiveName + "() called with a non-string value");
											if (e === this.it) return this._t;
											this.it = e;
											let t = [e];
											return t.raw = t, this._t = {
												_$litType$: this.constructor.resultType,
												strings: t,
												values: []
											}
										}
									};
								xn.directiveName = "unsafeHTML", xn.resultType = 1;
								en(xn);
								var kn = class extends xn {};
								kn.directiveName = "unsafeSVG", kn.resultType = 2;
								var En, Sn = en(kn),
									On = f(_(), 1),
									{
										__extends: Cn,
										__assign: An,
										__rest: Dn,
										__decorate: $n,
										__param: Rn,
										__metadata: jn,
										__awaiter: In,
										__generator: Pn,
										__exportStar: Tn,
										__createBinding: Mn,
										__values: Fn,
										__read: zn,
										__spread: Nn,
										__spreadArrays: Ln,
										__spreadArray: Bn,
										__await: qn,
										__asyncGenerator: Un,
										__asyncDelegator: Vn,
										__asyncValues: Qn,
										__makeTemplateObject: Hn,
										__importStar: Wn,
										__importDefault: Gn,
										__classPrivateFieldGet: Yn,
										__classPrivateFieldSet: Jn,
										__classPrivateFieldIn: Kn
									} = On.default;
								! function(e) {
									e.Small = "sm", e.Medium = "md", e.Large = "lg", e.ExtraLarge = "xl"
								}(En || (En = {}));
								var Xn = _t`
  :host {
    display: inline-block;
    fill: currentColor;
    vertical-align: middle;
    line-height: 1em;
  }

  svg {
    fill: currentColor;
    width: auto;
  }

  :host([size='sm']) > svg {
    height: 1em;
  }

  :host([size='md']) > svg {
    height: 1.25em;
  }

  :host([size='lg']) > svg {
    height: 1.5em;
  }

  :host([size='xl']) > svg {
    height: 2em;
  }
`;

								function Zn(e, t, r, n = Xn) {
									if (r) {
										class o extends yr {
											constructor() {
												super(...arguments), this.size = En.Small, this.fill = !1
											}
											static get styles() {
												return n
											}
											render() {
												return this.fill ? r : t
											}
										}
										$n([xr({
											type: String,
											reflect: !0
										})], o.prototype, "size", void 0), $n([xr({
											type: Boolean
										})], o.prototype, "fill", void 0), window.customElements.define(e, o)
									} else {
										class r extends yr {
											constructor() {
												super(...arguments), this.size = En.Small
											}
											static get styles() {
												return n
											}
											render() {
												return t
											}
										}
										$n([xr({
											type: String,
											reflect: !0
										})], r.prototype, "size", void 0), window.customElements.define(e, r)
									}
								}
								Zn("icon-caret-down", Kt`${Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 13.125a.624.624 0 01-.442-.183l-5-5 .884-.884L10 11.616l4.558-4.558.884.884-5 5a.624.624 0 01-.442.183z"/></svg>')}`, Kt`${Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 13.5a1 1 0 01-.707-.293l-5-5 1.414-1.414L10 11.086l4.293-4.293 1.414 1.414-5 5A1 1 0 0110 13.5z"/></svg>')}`), Zn("icon-close", Kt`${Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M18.442 2.442l-.884-.884L10 9.116 2.442 1.558l-.884.884L9.116 10l-7.558 7.558.884.884L10 10.884l7.558 7.558.884-.884L10.884 10l7.558-7.558z"/></svg>')}`, Kt`${Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M18.707 2.707l-1.414-1.414L10 8.586 2.707 1.293 1.293 2.707 8.586 10l-7.293 7.293 1.414 1.414L10 11.414l7.293 7.293 1.414-1.414L11.414 10l7.293-7.293z"/></svg>')}`), Zn("icon-external", Kt`${Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M15.75 13H17v3.375A2.63 2.63 0 0114.375 19H3.625A2.63 2.63 0 011 16.375V5.625A2.629 2.629 0 013.625 3H7v1.25H3.625A1.377 1.377 0 002.25 5.625v10.75a1.377 1.377 0 001.375 1.375h10.75a1.377 1.377 0 001.375-1.375V13zm2.625-12h-5v1.25h3.491l-8.433 8.433.884.884 8.433-8.433v3.491H19v-5A.625.625 0 0018.375 1z"/></svg>')}`, Kt`${Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M15 13h2v3.35A2.653 2.653 0 0114.35 19H3.65A2.653 2.653 0 011 16.35V5.653A2.656 2.656 0 013.653 3H7v2H3.653A.654.654 0 003 5.653v10.7a.65.65 0 00.65.65h10.7a.65.65 0 00.65-.65V13zm3.375-12h-5.438a.625.625 0 00-.422 1.085L14.591 4l-6.423 6.418 1.414 1.414 6.483-6.483 1.887 1.736A.626.626 0 0019 6.625v-5A.625.625 0 0018.375 1z"/></svg>')}`);

								function eo(e) {
									! function(e, t) {
										null != t && t.replace ? window.history.replaceState({}, "", e) : window.history.pushState({}, "", e), window.dispatchEvent(new PopStateEvent("popstate"))
									}("/", e)
								}

								function to() {
									var e;
									null == (e = null == window ? void 0 : window.top) || e.postMessage("matrix-chat.close", "*")
								}

								function ro() {
									var e;
									null == (e = null == window ? void 0 : window.top) || e.postMessage("matrix-chat.minimize", "*")
								}

								function no(e) {
									var t;
									null == (t = null == window ? void 0 : window.top) || t.postMessage(`matrix-chat.rooms_count:${e}`, "*")
								}
								var oo = _t`*,::before,::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-scroll-snap-strictness:proximity;--tw-ordinal:;--tw-slashed-zero:;--tw-numeric-figure:;--tw-numeric-spacing:;--tw-numeric-fraction:;--tw-ring-inset:;--tw-ring-offset-width:0;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:;--tw-pan-y:;--tw-pinch-zoom:;--tw-scroll-snap-strictness:proximity;--tw-ordinal:;--tw-slashed-zero:;--tw-numeric-figure:;--tw-numeric-spacing:;--tw-numeric-fraction:;--tw-ring-inset:;--tw-ring-offset-width:0;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-backdrop-blur:;--tw-backdrop-brightness:;--tw-backdrop-contrast:;--tw-backdrop-grayscale:;--tw-backdrop-hue-rotate:;--tw-backdrop-invert:;--tw-backdrop-opacity:;--tw-backdrop-saturate:;--tw-backdrop-sepia:}.container{width:100%}@media(min-width:1024px){.container{max-width:1024px}}.a{border:var(--line-a-focus) solid transparent;border-radius:2px;color:var(--color-a-default);font-size:1em;padding:0 var(--spacer-a-px);margin:calc(-1 * var(--line-a-focus)) calc(-1 * (var(--spacer-a-px) + var(--line-a-focus)));text-decoration:none}.a:hover{color:var(--color-a-hover)}.a:visited:not(.no-visited),.a.visited:not(.no-visited){color:var(--color-a-visited)}.a:focus{border-color:var(--color-global-focus,transparent);outline:var(--line-a-outline-moz) dotted #212121;outline:var(--line-a-outline-wb) auto -webkit-focus-ring-color}.a:focus:not(:focus-visible){border-color:transparent}.button{background:var(--button-color-background);border-radius:999px;border:0;border:var(--button-border-width,0) solid var(--button-border-color,transparent);box-shadow:var(--button-shadow);box-sizing:border-box;color:var(--button-color-text);cursor:pointer;display:inline-block;font:var(--button-font);height:var(--button-height);line-height:calc(var(--button-height) - (2 * var(--button-border-width, 0px)));outline:0;overflow:hidden;padding:0 calc(var(--button-padding) - var(--button-border-width, 0px));text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;--button-border-color:var(--button-border-color-default);--button-border-width:var(--button-border-width-default);--button-color-background:var(--button-color-background-default);--button-color-text:var(--button-color-text-default)}.button .button-icon{margin-right:var(--spacer-xs)}.button .dropdown-icon{transform:rotate(0);transition:transform .2s ease-in-out}.button:focus,.button:hover{--button-color-overlay:var(--color-button-overlay-focus)}.button:hover{--button-border-color:var(--button-border-color-hover);--button-color-background:var(--button-color-background-hover)}.button:focus{--button-shadow:var(--elevation-button-focus)}.button:focus:not(:focus-visible){--button-shadow:0 0 0 var(--line-l) transparent}.button:active{--button-color-overlay:var(--color-button-overlay-active);--button-color-background:linear-gradient(var(--color-interactive-pressed),var(--color-interactive-pressed)),var(--button-color-background-active)}.button:disabled{--button-color-background:var(--button-color-background-disabled);--button-color-text:var(--button-color-text-disabled);cursor:not-allowed}.button.button-activated{--button-border-width:var(--button-border-width-activated);--button-color-background:var(--button-color-background-activated);--button-color-text:var(--button-color-text-activated)}.button.button-activated span.dropdown-icon{transform:rotate(180deg);transition:transform .22s ease-in-out}.button-shell{background:var(--button-color-background);border-radius:999px;border:0;border:var(--button-border-width,0) solid var(--button-border-color,transparent);box-shadow:var(--button-shadow);box-sizing:border-box;color:var(--button-color-text);cursor:pointer;display:inline-block;font:var(--button-font);height:var(--button-height);line-height:calc(var(--button-height) - (2 * var(--button-border-width, 0px)));outline:0;overflow:hidden;padding:0 calc(var(--button-padding) - var(--button-border-width, 0px));text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;--button-border-color:var(--button-border-color-default);--button-border-width:var(--button-border-width-default);--button-color-background:var(--button-color-background-default);--button-color-text:var(--button-color-text-default)}.button-large{--button-height:var(--size-button-lg-h);--button-padding:var(--spacer-xs);--button-font:var(--font-button-lg);--button-border-width-default:var(--line-button-lg-border);--button-border-width-activated:var(--line-button-border-activated)}.button-medium{--button-height:var(--size-button-md-h);--button-padding:var(--spacer-xs);--button-font:var(--font-button-md);--button-border-width-default:var(--line-button-md-border);--button-border-width-activated:var(--line-button-border-activated)}.button-small{--button-height:var(--size-button-sm-h);--button-padding:var(--spacer-2xs);--button-font:var(--font-button-sm);--button-border-width-default:var(--line-button-sm-border);--button-border-width-activated:var(--line-button-border-activated)}.button-primary{--button-color-background-default:var(--color-primary-background);--button-color-background-focus:var(--color-primary-background);--button-color-background-hover:var(--color-button-primary-background-hover);--button-color-background-active:linear-gradient(var(--color-button-primary-background-hover),var(--color-button-primary-background-hover));--button-color-background-disabled:var(--color-button-primary-background-disabled);--button-color-background-activated:var(--color-global-white);--button-color-text-default:var(--color-global-white);--button-color-text-disabled:var(--color-button-primary-text-disabled);--button-color-text-activated:var(--color-button-primary-text-activated);--button-border-color-default:transparent}.button-secondary{--button-color-background-default:var(--color-button-secondary-background);--button-color-background-focus:var(--color-button-secondary-background-focus);--button-color-background-hover:var(--color-button-secondary-background-hover);--button-color-background-active:linear-gradient(var(--color-button-secondary-background-hover),var(--color-button-secondary-background-hover));--button-color-background-disabled:var(--color-button-secondary-background-disabled);--button-color-background-activated:var(--color-button-secondary-background-activated);--button-color-text-default:var(--color-button-secondary-text);--button-color-text-disabled:var(--color-button-secondary-text-disabled);--button-color-text-activated:var(--color-button-secondary-text-activated);--button-border-color-default:var(--color-button-secondary-border)}.button-tertiary{--button-color-background-default:var(--color-button-tertiary-background);--button-color-background-focus:var(--color-button-tertiary-background-focus);--button-color-background-hover:var(--color-button-tertiary-background-hover);--button-color-background-disabled:var(--color-button-tertiary-background-disabled);--button-color-background-activated:var(--color-button-tertiary-background-activated);--button-color-text-default:var(--color-button-tertiary-text);--button-color-text-disabled:var(--color-button-tertiary-text-disabled);--button-color-text-activated:var(--color-button-tertiary-text-activated);--button-border-color-default:transparent}.button-plain{--button-color-background-default:transparent;--button-color-background-focus:transparent;--button-color-background-hover:var(--color-button-plain-background-hover);--button-color-background-disabled:var(--color-button-plain-background-disabled);--button-color-background-activated:var(--color-button-plain-background-activated);--button-color-background-active:linear-gradient(var(--color-button-secondary-background-hover),var(--color-button-secondary-background-hover));--button-color-text-default:var(--color-button-plain-text);--button-color-text-disabled:var(--color-button-plain-text-disabled);--button-color-text-activated:var(--color-button-plain-text-activated);--button-border-color-default:transparent}.button-outline{--button-color-background-default:transparent;--button-color-background-focus:transparent;--button-color-background-hover:transparent;--button-color-background-active:linear-gradient(transparent,transparent);--button-color-background-disabled:transparent;--button-color-background-activated:transparent;--button-color-text-default:var(--color-neutral-content);--button-color-text-disabled:var(--color-neutral-content-disabled);--button-color-text-activated:var(--color-neutral-content-strong);--button-border-color-default:var(--color-neutral-content-weak);--button-border-color-hover:var(--color-neutral-content-disabled);--button-border-color-active:var(--color-neutral-content);--button-border-color-activated:var(--color-neutral-content-strong);--button-border-color-disabled:var(--color-neutral-content-disabled);--button-border-width-default:var(--line-md);--button-border-width-activated:var(--line-md)}.button-destructive{--button-color-background-default:var(--color-danger-background);--button-color-background-focus:var(--color-danger-background-hover);--button-color-background-hover:var(--color-danger-background-hover);--button-color-background-active:linear-gradient(var(--color-danger-background-hover),var(--color-danger-background-hover));--button-color-background-disabled:var(--color-danger-background);--button-color-text-default:var(--color-danger-content-default);--button-color-text-disabled:var(--color-danger-content-default);--button-border-color-default:transparent;--button-border-color-hover:transparent;--button-border-color-active:transparent}.button-media{--button-color-background-default:var(--color-media-background);--button-color-background-focus:var(--color-media-background-hover);--button-color-background-hover:var(--color-media-background-hover);--button-color-background-active:linear-gradient(var(--color-media-background-hover),var(--color-media-background-hover));--button-color-text-default:white;--button-color-text-disabled:var(--color-media-onbackground-disabled);--button-color-background-disabled:var(--color-media-background)}.button-brand{--button-color-background-default:var(--color-brand-background);--button-color-background-hover:var(--color-brand-background-hover);--button-color-background-active:linear-gradient(var(--color-brand-background-hover),var(--color-brand-background-hover));--button-color-background-disabled:var(--color-interactive-background-disabled);--button-color-text-default:var(--color-danger-content-default);--button-color-text-disabled:var(--color-neutral-content-disabled);--button-border-color-default:transparent;--button-border-width-default:0}.button-success{--button-color-background-default:var(--color-success-background);--button-color-background-focus:var(--color-success-background-hover);--button-color-background-hover:var(--color-success-background-hover);--button-color-background-active:linear-gradient(var(--color-success-background-hover),var(--color-success-background-hover));--button-color-background-disabled:var(--color-button-primary-background-disabled);--button-color-text-default:var(--color-success-onBackground);--button-color-text-disabled:var(--color-button-primary-text-disabled);--button-border-color-default:transparent}.button-plain-inverted{--button-color-background-default:transparent;--button-color-background-focus:var(--color-neutral-content);--button-color-background-hover:var(--color-neutral-content);--button-color-background-active:var(--color-interactive-pressed);--button-color-background-disabled:transparent;--button-color-text-default:var(--color-neutral-background-weak);--button-color-text-disabled:var(--color-neutral-content);--button-border-color-default:transparent}.featured-avatar-xs{--featured-avatar-xs-size:var(--rem48);height:var(--featured-avatar-xs-size);width:var(--featured-avatar-xs-size)}.featured-avatar-sm{--featured-avatar-sm-size:var(--rem64);height:var(--featured-avatar-sm-size);width:var(--featured-avatar-sm-size)}.featured-avatar-md{--featured-avatar-md-size:var(--rem88);height:var(--featured-avatar-md-size);width:var(--featured-avatar-md-size)}.featured-avatar-lg{--featured-avatar-lg-size:var(--rem144);height:var(--featured-avatar-lg-size);width:var(--featured-avatar-lg-size)}.featured-avatar-xl{--featured-avatar-xl-size:var(--rem192);height:var(--featured-avatar-xl-size);width:var(--featured-avatar-xl-size)}.featured-avatar-2xl{--featured-avatar-2xl-size:var(--rem320);height:var(--featured-avatar-2xl-size);width:var(--featured-avatar-2xl-size)}.pointer-events-none{pointer-events:none}.visible{visibility:visible}.static{position:static}.absolute{position:absolute}.relative{position:relative}.right-\\[8px\\]{right:8px}.top-0{top:0}.right-0{right:0}.-right-\\[0\\.0625rem\\]{right:-0.0625rem}.-right-\\[0\\.0825rem\\]{right:-0.0825rem}.-right-\\[0\\.125rem\\]{right:-0.125rem}.-right-\\[\\.65rem\\]{right:-.65rem}.-right-\\[\\.75rem\\]{right:-.75rem}.bottom-0{bottom:0}.isolate{isolation:isolate}.z-\\[2\\]{z-index:2}.z-\\[3\\]{z-index:3}.row-span-2{grid-row:span 2 / span 2}.m-0{margin:0}.mx-0{margin-left:0;margin-right:0}.my-2xs{margin-top:.25rem;margin-bottom:.25rem}.mx-2xs{margin-left:.25rem;margin-right:.25rem}.mx-xs{margin-left:.5rem;margin-right:.5rem}.mb-\\[var\\(--spacer-2xs\\)\\]{margin-bottom:var(--spacer-2xs)}.mb-\\[8px\\]{margin-bottom:8px}.mb-\\[20px\\]{margin-bottom:20px}.mt-\\[0\\.375rem\\]{margin-top:.375rem}.ml-\\[var\\(--spacer-2xs\\)\\]{margin-left:var(--spacer-2xs)}.ml-2xs{margin-left:.25rem}.mb-0{margin-bottom:0}.-ml-\\[var\\(--rem4\\)\\]{margin-left:calc(var(--rem4) * -1)}.-ml-\\[var\\(--rem6\\)\\]{margin-left:calc(var(--rem6) * -1)}.-ml-\\[var\\(--rem8\\)\\]{margin-left:calc(var(--rem8) * -1)}.-ml-\\[var\\(--rem10\\)\\]{margin-left:calc(var(--rem10) * -1)}.-ml-\\[var\\(--rem12\\)\\]{margin-left:calc(var(--rem12) * -1)}.-ml-\\[var\\(--rem14\\)\\]{margin-left:calc(var(--rem14) * -1)}.-ml-\\[var\\(--rem16\\)\\]{margin-left:calc(var(--rem16) * -1)}.-ml-\\[var\\(--rem18\\)\\]{margin-left:calc(var(--rem18) * -1)}.-ml-\\[var\\(--rem20\\)\\]{margin-left:calc(var(--rem20) * -1)}.mt-0{margin-top:0}.ml-0{margin-left:0}.mr-xs{margin-right:.5rem}.mr-\\[length\\:var\\(--rem6\\)\\]{margin-right:var(--rem6)}.mt-\\[-0\\.125rem\\]{margin-top:-0.125rem}.ml-\\[-\\.25rem\\]{margin-left:-.25rem}.mt-\\[-0\\.25rem\\]{margin-top:-0.25rem}.box-border{box-sizing:border-box}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.list-item{display:list-item}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.h-full{height:100%}.h-100{height:100%}.h-\\[2\\.75rem\\]{height:2.75rem}.h-\\[1\\.3125rem\\]{height:1.3125rem}.h-\\[var\\(--size-xl\\)\\]{height:var(--size-xl)}.h-\\[14\\.5rem\\]{height:14.5rem}.h-\\[20px\\]{height:20px}.h-\\[2rem\\]{height:2rem}.h-\\[length\\:var\\(--size-button-md-h\\)\\]{height:var(--size-button-md-h)}.h-\\[1\\.75rem\\]{height:1.75rem}.h-\\[1\\.25rem\\]{height:1.25rem}.h-\\[1rem\\]{height:1rem}.h-\\[1\\.5rem\\]{height:1.5rem}.h-\\[2\\.5rem\\]{height:2.5rem}.h-\\[3rem\\]{height:3rem}.h-\\[2\\.87rem\\]{height:2.87rem}.h-\\[3\\.25rem\\]{height:3.25rem}.h-\\[4\\.5rem\\]{height:4.5rem}.h-\\[3\\.5rem\\]{height:3.5rem}.h-\\[4rem\\]{height:4rem}.h-\\[5\\.5rem\\]{height:5.5rem}.h-\\[\\.25rem\\]{height:.25rem}.h-\\[\\.375rem\\]{height:.375rem}.h-\\[\\.625rem\\]{height:.625rem}.h-2xl{height:3rem}.h-lg{height:1.5rem}.h-xs{height:.5rem}.min-h-\\[10rem\\]{min-height:10rem}.min-h-\\[1rem\\]{min-height:1rem}.w-full{width:100%}.w-100{width:100%}.w-\\[1\\.3125rem\\]{width:1.3125rem}.w-xl{width:2rem}.w-\\[var\\(--size-xl\\)\\]{width:var(--size-xl)}.w-\\[16rem\\]{width:16rem}.w-\\[13\\.25rem\\]{width:13.25rem}.w-\\[2rem\\]{width:2rem}.w-\\[400px\\]{width:400px}.w-\\[300px\\]{width:300px}.w-\\[150px\\]{width:150px}.w-\\[250px\\]{width:250px}.w-\\[200px\\]{width:200px}.w-auto{width:auto}.w-\\[1\\.25rem\\]{width:1.25rem}.w-\\[1rem\\]{width:1rem}.w-\\[1\\.5rem\\]{width:1.5rem}.w-\\[2\\.5rem\\]{width:2.5rem}.w-\\[3rem\\]{width:3rem}.w-\\[2\\.87rem\\]{width:2.87rem}.w-\\[3\\.25rem\\]{width:3.25rem}.w-\\[4\\.5rem\\]{width:4.5rem}.w-\\[3\\.5rem\\]{width:3.5rem}.w-\\[4rem\\]{width:4rem}.w-\\[5\\.5rem\\]{width:5.5rem}.w-\\[\\.25rem\\]{width:.25rem}.w-\\[\\.375rem\\]{width:.375rem}.w-\\[\\.625rem\\]{width:.625rem}.w-lg{width:1.5rem}.w-xs{width:.5rem}.min-w-\\[120px\\]{min-width:120px}.min-w-0{min-width:0}.min-w-\\[0\\.5rem\\]{min-width:.5rem}.max-w-\\[600px\\]{max-width:600px}.max-w-\\[480px\\]{max-width:480px}.flex-1{flex:1 1 0%}.shrink-0{flex-shrink:0}.flex-grow{flex-grow:1}.grow{flex-grow:1}.-translate-y-full{--tw-translate-y:-100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.cursor-wait{cursor:wait}.cursor-none{cursor:none}.cursor-default{cursor:default}.resize{resize:both}.list-none{list-style-type:none}.grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.grid-cols-\\[min-content_1fr\\]{grid-template-columns:min-content 1fr}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.items-center{align-items:center}.items-stretch{align-items:stretch}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-items-center{justify-items:center}.gap-2xs{gap:.25rem}.gap-xs{gap:.5rem}.gap-\\[var\\(--spacer-sm\\)\\]{gap:var(--spacer-sm)}.gap-\\[var\\(--spacer-2xs\\)\\]{gap:var(--spacer-2xs)}.gap-sm{gap:.75rem}.gap-\\[0\\.375rem\\]{gap:.375rem}.gap-md{gap:1rem}.gap-\\[1rem\\]{gap:1rem}.gap-\\[length\\:var\\(--rem12\\)\\]{gap:var(--rem12)}.gap-x-sm{column-gap:.75rem}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.rounded-full{border-radius:624.9375rem}.rounded-\\[\\.5rem\\]{border-radius:.5rem}.rounded-\\[0\\.5rem\\]{border-radius:.5rem}.rounded-\\[1\\.375rem\\]{border-radius:1.375rem}.rounded-\\[var\\(--radius-full\\)\\]{border-radius:var(--radius-full)}.rounded-lg{border-radius:2rem}.rounded-\\[0\\.875rem\\]{border-radius:.875rem}.rounded-sm{border-radius:.25rem}.border-0{border-width:0}.border-\\[1px\\]{border-width:1px}.border{border-width:.0625rem}.border-md{border-width:.125rem}.border-lg{border-width:.25rem}.border-b{border-bottom-width:.0625rem}.border-solid{border-style:solid}.border-none{border-style:none}.border-puregray-300{--tw-border-opacity:1;border-color:rgb(214 214 214 / var(--tw-border-opacity))}.border-neutral-border{border-color:var(--color-neutral-border)}.border-neutral-background{border-color:var(--color-neutral-background)}.border-secondary-background-selected{border-color:var(--color-secondary-background-selected)}.border-transparent{border-color:transparent}.border-action-upvote{border-color:var(--color-action-upvote)}.border-action-downvote{border-color:var(--color-action-downvote)}.border-b-tone-5{border-bottom-color:var(--color-tone-5)}.bg-black{--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.bg-tone-6{background-color:var(--color-tone-6)}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-\\[color\\:var\\(--color-tone-6\\)\\]{background-color:var(--color-tone-6)}.bg-action-secondary{background-color:var(--color-action-secondary)}.bg-alienblue-100{--tw-bg-opacity:1;background-color:rgb(228 239 255 / var(--tw-bg-opacity))}.bg-neutral-background{background-color:var(--color-neutral-background)}.bg-online{background-color:var(--color-online)}.bg-secondary-background-selected{background-color:var(--color-secondary-background-selected)}.bg-warning-content{background-color:var(--color-warning-content)}.bg-success-content{background-color:var(--color-success-content)}.bg-neutral-content{background-color:var(--color-neutral-content)}.bg-global-orangered{background-color:var(--color-global-orangered)}.bg-danger-content{background-color:var(--color-danger-content)}.bg-neutral-content-disabled{background-color:var(--color-neutral-content-disabled)}.bg-brand-background{background-color:var(--color-brand-background)}.bg-brand-onBackground{background-color:var(--color-brand-onBackground)}.bg-action-upvote{background-color:var(--color-action-upvote)}.bg-action-downvote{background-color:var(--color-action-downvote)}.bg-interactive-background-disabled{background-color:var(--color-interactive-background-disabled)}.bg-\\[color\\:var\\(--color-button-plain-background-disabled\\)\\]{background-color:var(--color-button-plain-background-disabled)}.p-xs{padding:.5rem}.p-0{padding:0}.p-sm{padding:.75rem}.p-md{padding:1rem}.px-xs{padding-left:.5rem;padding-right:.5rem}.py-\\[var\\(--spacer-sm\\)\\]{padding-top:var(--spacer-sm);padding-bottom:var(--spacer-sm)}.px-\\[var\\(--spacer-xs\\)\\]{padding-left:var(--spacer-xs);padding-right:var(--spacer-xs)}.py-\\[0\\.375rem\\]{padding-top:.375rem;padding-bottom:.375rem}.px-sm{padding-left:.75rem;padding-right:.75rem}.py-xs{padding-top:.5rem;padding-bottom:.5rem}.py-\\[var\\(--spacer-2xs\\)\\]{padding-top:var(--spacer-2xs);padding-bottom:var(--spacer-2xs)}.px-\\[length\\:var\\(--rem10\\)\\]{padding-left:var(--rem10);padding-right:var(--rem10)}.px-\\[length\\:var\\(--rem6\\)\\]{padding-left:var(--rem6);padding-right:var(--rem6)}.px-\\[length\\:var\\(--rem14\\)\\]{padding-left:var(--rem14);padding-right:var(--rem14)}.px-\\[length\\:var\\(--rem8\\)\\]{padding-left:var(--rem8);padding-right:var(--rem8)}.px-\\[length\\:var\\(--rem12\\)\\]{padding-left:var(--rem12);padding-right:var(--rem12)}.px-md{padding-left:1rem;padding-right:1rem}.py-\\[length\\:var\\(--rem2\\)\\]{padding-top:var(--rem2);padding-bottom:var(--rem2)}.px-2xs{padding-left:.25rem;padding-right:.25rem}.py-\\[length\\:var\\(--rem8\\)\\]{padding-top:var(--rem8);padding-bottom:var(--rem8)}.py-\\[length\\:var\\(--rem10\\)\\]{padding-top:var(--rem10);padding-bottom:var(--rem10)}.py-\\[length\\:var\\(--rem14\\)\\]{padding-top:var(--rem14);padding-bottom:var(--rem14)}.pl-xs{padding-left:.5rem}.pl-\\[var\\(--spacer-md\\)\\]{padding-left:var(--spacer-md)}.pr-\\[var\\(--spacer-sm\\)\\]{padding-right:var(--spacer-sm)}.pt-xs{padding-top:.5rem}.pt-md{padding-top:1rem}.pl-md{padding-left:1rem}.pl-\\[length\\:var\\(--rem10\\)\\]{padding-left:var(--rem10)}.pr-\\[length\\:var\\(--rem14\\)\\]{padding-right:var(--rem14)}.pr-\\[length\\:var\\(--rem6\\)\\]{padding-right:var(--rem6)}.pl-\\[length\\:var\\(--rem14\\)\\]{padding-left:var(--rem14)}.pr-\\[length\\:var\\(--rem10\\)\\]{padding-right:var(--rem10)}.pb-md{padding-bottom:1rem}.pl-\\[0\\.125rem\\]{padding-left:.125rem}.pl-\\[length\\:var\\(--rem12\\)\\]{padding-left:var(--rem12)}.pr-\\[length\\:var\\(--rem12\\)\\]{padding-right:var(--rem12)}.pr-\\[length\\:var\\(--rem16\\)\\]{padding-right:var(--rem16)}.pr-\\[length\\:var\\(--rem8\\)\\]{padding-right:var(--rem8)}.pl-\\[length\\:var\\(--rem16\\)\\]{padding-left:var(--rem16)}.text-center{text-align:center}.align-text-bottom{vertical-align:text-bottom}.font-sans{font-family:var(--font-sans)}.text-\\[8px\\]{font-size:8px}.text-14{font-size:.875rem;line-height:1.25rem}.text-12{font-size:.75rem;line-height:1rem}.text-16{font-size:1rem;line-height:1.25rem}.text-18{font-size:1.125rem;line-height:1.5rem}.text-20{font-size:1.25rem;line-height:1.25rem}.text-24{font-size:1.5rem;line-height:1.75rem}.text-10{font-size:.625rem;line-height:1rem}.font-semibold{font-weight:600}.font-bold{font-weight:700}.uppercase{text-transform:uppercase}.leading-4{line-height:1rem}.leading-5{line-height:1.25rem}.leading-\\[0\\.875rem\\]{line-height:.875rem}.text-global-white{color:var(--color-global-white)}.text-tone-2{color:var(--color-tone-2)}.text-tone-7{color:var(--color-tone-7)}.text-action-secondary{color:var(--color-action-secondary)}.text-coolgray-450{--tw-text-opacity:1;color:rgb(130 149 155 / var(--tw-text-opacity))}.text-tone-1{color:var(--color-tone-1)}.text-neutral-content-weak{color:var(--color-neutral-content-weak)}.text-secondary-weak{color:var(--color-secondary-weak)}.text-secondary{color:var(--color-secondary)}.text-category-nsfw{color:var(--color-category-nsfw)}.text-primary{color:var(--color-primary)}.text-category-spoiler{color:var(--color-category-spoiler)}.text-warning-content{color:var(--color-warning-content)}.text-neutral-content-strong{color:var(--color-neutral-content-strong)}.text-primary-onBackground{color:var(--color-primary-onBackground)}.text-neutral-content{color:var(--color-neutral-content)}.text-danger-content{color:var(--color-danger-content)}.text-brand-onBackground{color:var(--color-brand-onBackground)}.text-neutral-content-disabled{color:var(--color-neutral-content-disabled)}.text-\\[color\\:var\\(--color-button-secondary-text-disabled\\)\\]{color:var(--color-button-secondary-text-disabled)}.text-\\[color\\:var\\(--color-button-plain-text-disabled\\)\\]{color:var(--color-button-plain-text-disabled)}.underline{text-decoration-line:underline}.no-underline{text-decoration-line:none}.opacity-50{opacity:.5}.opacity-60{opacity:.6}.opacity-40{opacity:.4}.shadow-sm{--tw-shadow:var(--elevation-sm);--tw-shadow-colored:var(--elevation-sm);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(0.4,0,0.2,1);transition-duration:150ms}.hover\\:scale-125:hover{--tw-scale-x:1.25;--tw-scale-y:1.25;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:border-secondary-background-selected:hover{border-color:var(--color-secondary-background-selected)}.hover\\:border-secondary-background-hover:hover{border-color:var(--color-secondary-background-hover)}.hover\\:bg-alienblue-200:hover{--tw-bg-opacity:1;background-color:rgb(198 220 255 / var(--tw-bg-opacity))}.hover\\:bg-secondary-background-selected:hover{background-color:var(--color-secondary-background-selected)}.hover\\:bg-secondary-background-hover:hover{background-color:var(--color-secondary-background-hover)}.hover\\:bg-transparent-background-hover:hover{background-color:var(--color-transparent-background-hover)}.hover\\:bg-brand-background-hover:hover{background-color:var(--color-brand-background-hover)}.hover\\:text-tone-1:hover{color:var(--color-tone-1)}.hover\\:text-secondary:hover{color:var(--color-secondary)}.hover\\:text-global-white:hover{color:var(--color-global-white)}.hover\\:text-action-upvote:hover{color:var(--color-action-upvote)}.hover\\:text-action-downvote:hover{color:var(--color-action-downvote)}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:no-underline:hover{text-decoration-line:none}.focus\\:rounded-sm:focus{border-radius:.25rem}.focus\\:border-global-focus:focus{border-color:var(--color-global-focus)}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:text-action-upvote:focus-visible{color:var(--color-action-upvote)}.focus-visible\\:text-action-downvote:focus-visible{color:var(--color-action-downvote)}.active\\:bg-secondary-background:active{background-color:var(--color-secondary-background)}.disabled\\:text-interactive-content-disabled:disabled{color:var(--color-interactive-content-disabled)}@media(prefers-color-scheme:dark){.dark\\:border-solid{border-style:solid}.dark\\:border-\\[color\\:var\\(--color-tone-3\\)\\]{border-color:var(--color-tone-3)}.dark\\:bg-\\[color\\:var\\(--color-tone-5\\)\\]{background-color:var(--color-tone-5)}.dark\\:bg-\\[color\\:var\\(--color-tone-6\\)\\]{background-color:var(--color-tone-6)}.dark\\:bg-\\[color\\:var\\(--color-tone-2\\)\\]{background-color:var(--color-tone-2)}.dark\\:bg-alienblue-400\\/30{background-color:rgb(98 159 255 / .3)}.dark\\:text-tone-1{color:var(--color-tone-1)}.dark\\:text-\\[color\\:var\\(--color-tone-6\\)\\]{color:var(--color-tone-6)}.hover\\:dark\\:bg-alienblue-400\\/50:hover{background-color:rgb(98 159 255 / .5)}}`,
									io = _t`:host{display:flex;flex-wrap:nowrap}.button{color:var(--color-tone-2)}`,
									ao = class extends CustomEvent {
										constructor() {
											super("show-window-controls", {
												bubbles: !0,
												composed: !0,
												cancelable: !0
											})
										}
									},
									so = class extends yr {
										constructor() {
											super(...arguments), this.shouldShowControls = !0
										}
										static get styles() {
											return [oo, io]
										}
										handleMaximizeClick() {
											(function() {
												var e;
												null == (e = null == window ? void 0 : window.top) || e.postMessage("matrix-chat.maximize", "*")
											})(), window.open(location.href, "_blank")
										}
										connectedCallback() {
											super.connectedCallback();
											let e = new ao;
											this.dispatchEvent(e), e.defaultPrevented && (this.shouldShowControls = !1)
										}
										render() {
											return this.shouldShowControls ? Jt`
      ${fn({appearance:"plain",size:an.Small,attributes:{type:"button",title:"Minimize chat",onclick:ro},leadingIcon:Jt` < icon - caret - down > < /icon-caret-down>`})}
											$ {
												fn({
													appearance: "plain",
													size: an.Small,
													attributes: {
														type: "button",
														title: "Open chat in new window",
														onclick: this.handleMaximizeClick
													},
													leadingIcon: Jt`<icon-external></icon-external>`
												})
											}
											$ {
												fn({
													appearance: "plain",
													size: an.Small,
													attributes: {
														type: "button",
														title: "Close chat",
														onclick: to
													},
													leadingIcon: Jt`<icon-close></icon-close>`
												})
											}
											`:null}};v([kr()],so.prototype,"shouldShowControls",2),so=v([_r("rs-app-window-controls")],so);var lo=({title:e,buttons:t,noBorder:r,leadingContent:n,hideButtons:o})=>{let i={"border-solid border-0 border-b border-b-tone-5":Boolean(!r)};return Jt` <
											header
											class = "flex items-center h-[2.75rem] w-full px-xs gap-2xs box-border ${wn(i)}" >
												$ {
													n
												} <
												span class = "flex-1 text-14 font-sans font-semibold pl-xs" > $ {
													e
												} < /span> <
												div class = "flex flex-nowrap" >
												$ {
													o ? "" : Jt`${t} <rs-app-window-controls></rs-app-window-controls>`
												} <
												/div> <
												/header>
											`};function co(e){let[t,r]=e.split("/");return"image"===t&&["jpeg","png","gif"].includes(r.toLowerCase())}async function uo(e,t,r){let n=e.getUserId(),o=e.getRoom(t);if(!o||!n||!co(r.type))return;let i,a=e.makeTxnId(),s=await async function(e){return new Promise(t=>{let r=new FileReader;r.onload=()=>{let n=new Image;n.src=r.result,n.onload=()=>{t({w:n.width,h:n.height,mimetype:e.type,size:e.size})},n.onerror=()=>{t(void 0)}},r.onerror=()=>{t(void 0)},r.readAsDataURL(e)})}(r),l={msgtype:qr.Image,body:"Image",url:"",info:s,file:r},c=new Lr({type:zr.RoomMessage,content:l,event_id:"~"+t+":"+a,user_id:n,sender:n,room_id:t,origin_server_ts:(new Date).getTime(),txn_id:a});c.setStatus(Nr.SENDING),o.addPendingEvent(c,a);try{i=await e.uploadContent(r)}catch(f){return c.error=f,void o.updatePendingEvent(c,Nr.NOT_SENT)}l.url=i.content_uri;let u=e.makeTxnId(),d=e.sendMessage(t,{msgtype:l.msgtype,body:l.body,url:l.url,info:l.info},u),h=o.getEventForTxnId(u).getId();h&&o.removeEvent(h);let p=await d;return o.removeEvent(p.event_id),o.updatePendingEvent(c,Nr.SENT,p.event_id),p.event_id}function ho(e){return e.file&&e.file instanceof File}function po(e,t,r=!0){return new CustomEvent(e,{composed:!0,bubbles:r,cancelable:!0,detail:t})}f(w());function fo(e,t){let r=po("track-event",{details:t});e.dispatchEvent(r)}var vo,mo=new Uint8Array(16);function go(){if(!vo&&!(vo=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return vo(mo)}var yo=[];for(let r=0;r<256;++r)yo.push((r+256).toString(16).slice(1));var bo={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};var _o=function(e,t,r){if(bo.randomUUID&&!t&&!e)return bo.randomUUID();let n=(e=e||{}).random||(e.rng||go)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(let e=0;e<16;++e)t[r+e]=n[e];return t}return function(e,t=0){return(yo[e[t+0]]+yo[e[t+1]]+yo[e[t+2]]+yo[e[t+3]]+"-"+yo[e[t+4]]+yo[e[t+5]]+"-"+yo[e[t+6]]+yo[e[t+7]]+"-"+yo[e[t+8]]+yo[e[t+9]]+"-"+yo[e[t+10]]+yo[e[t+11]]+yo[e[t+12]]+yo[e[t+13]]+yo[e[t+14]]+yo[e[t+15]]).toLowerCase()}(n)},wo=f(w()),xo={app:{name:"web2x"}},ko=()=>{let e=wo.default.get("session_tracker");if(e)return{id:e.split(".")[0]}},Eo=()=>({client_timestamp:Date.now(),...xo,session:ko()}),So=({source:e,action:t,noun:r},n={})=>({source:e,action:t,noun:r,uuid:_o(),...Eo(),...n}),Oo=e=>So({source:"chat_view",action:"submit",noun:"chat_message"},{chat:e}),Co=e=>So({source:"chat_view",action:"submit",noun:"chat_message"},{chat:{message_type:"reaction"},action_info:{type:e,reason:"reaction"}}),Ao=e=>So({source:"chat",action:"delete",noun:"message"},{chat:{message_type:"reaction"},action_info:{type:e,reason:"reaction"}}),Do=(Zn("icon-settings",Kt`
											$ {
												Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_473_79)"><path d="M10 20c-.401 0-.802-.027-1.2-.079a1.145 1.145 0 01-.992-1.137v-1.073a.97.97 0 00-.627-.878A.98.98 0 006.1 17l-.755.753a1.149 1.149 0 01-1.521.1 10.16 10.16 0 01-1.671-1.671 1.149 1.149 0 01.1-1.523L3 13.906a.97.97 0 00.176-1.069.98.98 0 00-.887-.649H1.216A1.145 1.145 0 01.079 11.2a9.1 9.1 0 010-2.393 1.145 1.145 0 011.137-.992h1.073a.97.97 0 00.878-.627A.979.979 0 003 6.1l-.754-.754a1.15 1.15 0 01-.1-1.522 10.16 10.16 0 011.673-1.676 1.155 1.155 0 011.522.1L6.1 3a.966.966 0 001.068.176.98.98 0 00.649-.887V1.216A1.145 1.145 0 018.8.079a9.129 9.129 0 012.393 0 1.144 1.144 0 01.991 1.137v1.073a.971.971 0 00.628.878A.977.977 0 0013.905 3l.754-.754a1.152 1.152 0 011.522-.1c.62.49 1.18 1.05 1.671 1.671a1.15 1.15 0 01-.1 1.522L17 6.1a.967.967 0 00-.176 1.068.98.98 0 00.887.649h1.073a1.145 1.145 0 011.137.991 9.096 9.096 0 010 2.392 1.145 1.145 0 01-1.137.992h-1.073A1.041 1.041 0 0017 13.905l.753.755a1.149 1.149 0 01.1 1.521c-.49.62-1.05 1.18-1.671 1.671a1.149 1.149 0 01-1.522-.1L13.906 17a.97.97 0 00-1.069-.176.981.981 0 00-.65.887v1.073a1.144 1.144 0 01-.99 1.137A9.431 9.431 0 0110 20zm-.938-1.307a7.638 7.638 0 001.875 0v-.982a2.292 2.292 0 013.853-1.6l.693.694a8.796 8.796 0 001.326-1.326l-.694-.694a2.29 2.29 0 011.6-3.851h.982a7.746 7.746 0 000-1.876h-.982a2.213 2.213 0 01-2.034-1.4 2.223 2.223 0 01.438-2.451l.694-.693a8.76 8.76 0 00-1.327-1.326l-.692.694a2.219 2.219 0 01-2.434.445 2.221 2.221 0 01-1.419-2.041v-.979a7.638 7.638 0 00-1.875 0v.982a2.213 2.213 0 01-1.4 2.034 2.23 2.23 0 01-2.456-.438l-.693-.694a8.757 8.757 0 00-1.326 1.327l.694.692a2.216 2.216 0 01.445 2.434 2.22 2.22 0 01-2.041 1.418h-.982a7.746 7.746 0 000 1.876h.982a2.213 2.213 0 012.034 1.4 2.223 2.223 0 01-.438 2.451l-.694.693c.394.488.838.933 1.326 1.326l.694-.694a2.218 2.218 0 012.433-.445 2.22 2.22 0 011.418 2.041v.983zM10 13.229a3.23 3.23 0 110-6.458 3.23 3.23 0 010 6.458zm0-5.208a1.979 1.979 0 100 3.958 1.979 1.979 0 000-3.958z"/></g><defs><clipPath id="clip0_473_79"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')
											}
											`,Kt`
											$ {
												Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_473_76)"><path d="M19.921 8.8a1.145 1.145 0 00-1.137-.991h-1.073a.98.98 0 01-.887-.649A.969.969 0 0117 6.1l.754-.754a1.15 1.15 0 00.1-1.522 10.16 10.16 0 00-1.671-1.671 1.152 1.152 0 00-1.522.1L13.905 3a.975.975 0 01-1.09.167.97.97 0 01-.628-.878V1.216A1.144 1.144 0 0011.2.079a9.129 9.129 0 00-2.4 0 1.145 1.145 0 00-.991 1.137v1.073a.98.98 0 01-.649.887A.966.966 0 016.1 3l-.754-.754a1.152 1.152 0 00-1.522-.1 10.16 10.16 0 00-1.676 1.673 1.15 1.15 0 00.1 1.522L3 6.1a.979.979 0 01.167 1.09.97.97 0 01-.878.627H1.216A1.145 1.145 0 00.079 8.8a9.1 9.1 0 000 2.393 1.145 1.145 0 001.137.991h1.073a.98.98 0 01.887.649A.97.97 0 013 13.906l-.751.752a1.149 1.149 0 00-.1 1.523c.49.62 1.05 1.18 1.671 1.671a1.148 1.148 0 001.521-.1L6.1 17a.98.98 0 011.09-.167.97.97 0 01.627.878v1.073a1.145 1.145 0 00.983 1.137 9.103 9.103 0 002.393 0 1.144 1.144 0 00.99-1.137v-1.073a.981.981 0 01.65-.887.968.968 0 011.073.176l.753.753a1.149 1.149 0 001.522.1c.62-.49 1.18-1.05 1.671-1.671a1.149 1.149 0 00-.1-1.521L17 13.905a1.04 1.04 0 01.711-1.717h1.073a1.145 1.145 0 001.137-.992 9.096 9.096 0 000-2.392V8.8zM11.979 10a1.98 1.98 0 11-3.958 0 1.98 1.98 0 013.958 0z"/></g><defs><clipPath id="clip0_473_76"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')
											}
											`),_t`: host {
												height: var (--size - md);border - radius: var (--size - md);background - color: var (--color - tone - 5);display: inline - block
											}: host([shimmer]) {
												position: relative;overflow: hidden;background - image: linear - gradient(to right,
													var (--color - tone - 5) calc(50 % -100 px),
													var (--color - tone - 4) 50 % ,
													var (--color - tone - 5) calc(50 % +100 px));background - size: 0
											}: host([shimmer]): before {
												content: "";position: absolute;top: 0;right: 0;bottom: 0;width: calc(200 % +200 px);background - image: inherit;animation: shimmer 2 s linear infinite
											}
											@keyframes shimmer {
												to {
													transform: translateX(calc(50 % +100 px))
												}
											}
											`),$o=class extends yr{constructor(){super(...arguments),this.shimmer=!1}static get styles(){return[Do]}};v([xr({type:Boolean})],$o.prototype,"shimmer",2),$o=v([_r("rs-skeleton")],$o);var Ro="millisecond",jo="second",Io="minute",Po="hour",To="day",Mo="week",Fo="month",zo="quarter",No="year",Lo="date",Bo="Invalid Date",qo=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Uo=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Vo={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},Qo=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},Ho={s:Qo,z:function(e){var t=-e.utcOffset(),r=Math.abs(t),n=Math.floor(r/60),o=r%60;return(t<=0?"+":"-")+Qo(n,2,"0")+":"+Qo(o,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,Fo),i=r-o<0,a=t.clone().add(n+(i?-1:1),Fo);return+(-(n+(r-o)/(i?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:Fo,y:No,w:Mo,d:To,D:Lo,h:Po,m:Io,s:jo,ms:Ro,Q:zo}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},Wo="en",Go={};Go[Wo]=Vo;var Yo=function(e){return e instanceof Zo},Jo=function e(t,r,n){var o;if(!t)return Wo;if("string"==typeof t){var i=t.toLowerCase();Go[i]&&(o=i),r&&(Go[i]=r,o=i);var a=t.split("-");if(!o&&a.length>1)return e(a[0])}else{var s=t.name;Go[s]=t,o=s}return!n&&o&&(Wo=o),o||!n&&Wo},Ko=function(e,t){if(Yo(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new Zo(r)},Xo=Ho;Xo.l=Jo,Xo.i=Yo,Xo.w=function(e,t){return Ko(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var Zo=function(){function e(e){this.$L=Jo(e.locale,null,!0),this.parse(e)}var t=e.prototype;return t.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(Xo.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(qo);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},t.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},t.$utils=function(){return Xo},t.isValid=function(){return this.$d.toString()!==Bo},t.isSame=function(e,t){var r=Ko(e);return this.startOf(t)<=r&&r<=this.endOf(t)},t.isAfter=function(e,t){return Ko(e)<this.startOf(t)},t.isBefore=function(e,t){return this.endOf(t)<Ko(e)},t.$g=function(e,t,r){return Xo.u(e)?this[t]:this.set(r,e)},t.unix=function(){return Math.floor(this.valueOf()/1e3)},t.valueOf=function(){return this.$d.getTime()},t.startOf=function(e,t){var r=this,n=!!Xo.u(t)||t,o=Xo.p(e),i=function(e,t){var o=Xo.w(r.$u?Date.UTC(r.$y,t,e):new Date(r.$y,t,e),r);return n?o:o.endOf(To)},a=function(e,t){return Xo.w(r.toDate()[e].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),r)},s=this.$W,l=this.$M,c=this.$D,u="set"+(this.$u?"UTC":"");switch(o){case No:return n?i(1,0):i(31,11);case Fo:return n?i(1,l):i(0,l+1);case Mo:var d=this.$locale().weekStart||0,h=(s<d?s+7:s)-d;return i(n?c-h:c+(6-h),l);case To:case Lo:return a(u+"Hours",0);case Po:return a(u+"Minutes",1);case Io:return a(u+"Seconds",2);case jo:return a(u+"Milliseconds",3);default:return this.clone()}},t.endOf=function(e){return this.startOf(e,!1)},t.$set=function(e,t){var r,n=Xo.p(e),o="set"+(this.$u?"UTC":""),i=(r={},r[To]=o+"Date",r[Lo]=o+"Date",r[Fo]=o+"Month",r[No]=o+"FullYear",r[Po]=o+"Hours",r[Io]=o+"Minutes",r[jo]=o+"Seconds",r[Ro]=o+"Milliseconds",r)[n],a=n===To?this.$D+(t-this.$W):t;if(n===Fo||n===No){var s=this.clone().set(Lo,1);s.$d[i](a),s.init(),this.$d=s.set(Lo,Math.min(this.$D,s.daysInMonth())).$d}else i&&this.$d[i](a);return this.init(),this},t.set=function(e,t){return this.clone().$set(e,t)},t.get=function(e){return this[Xo.p(e)]()},t.add=function(e,t){var r,n=this;e=Number(e);var o=Xo.p(t),i=function(t){var r=Ko(n);return Xo.w(r.date(r.date()+Math.round(t*e)),n)};if(o===Fo)return this.set(Fo,this.$M+e);if(o===No)return this.set(No,this.$y+e);if(o===To)return i(1);if(o===Mo)return i(7);var a=(r={},r[Io]=6e4,r[Po]=36e5,r[jo]=1e3,r)[o]||1,s=this.$d.getTime()+e*a;return Xo.w(s,this)},t.subtract=function(e,t){return this.add(-1*e,t)},t.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||Bo;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=Xo.z(this),i=this.$H,a=this.$m,s=this.$M,l=r.weekdays,c=r.months,u=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},d=function(e){return Xo.s(i%12||12,e,"0")},h=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:s+1,MM:Xo.s(s+1,2,"0"),MMM:u(r.monthsShort,s,c,3),MMMM:u(c,s),D:this.$D,DD:Xo.s(this.$D,2,"0"),d:String(this.$W),dd:u(r.weekdaysMin,this.$W,l,2),ddd:u(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(i),HH:Xo.s(i,2,"0"),h:d(1),hh:d(2),a:h(i,a,!0),A:h(i,a,!1),m:String(a),mm:Xo.s(a,2,"0"),s:String(this.$s),ss:Xo.s(this.$s,2,"0"),SSS:Xo.s(this.$ms,3,"0"),Z:o};return n.replace(Uo,(function(e,t){return t||p[e]||o.replace(":","")}))},t.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},t.diff=function(e,t,r){var n,o=Xo.p(t),i=Ko(e),a=6e4*(i.utcOffset()-this.utcOffset()),s=this-i,l=Xo.m(this,i);return l=(n={},n[No]=l/12,n[Fo]=l,n[zo]=l/3,n[Mo]=(s-a)/6048e5,n[To]=(s-a)/864e5,n[Po]=s/36e5,n[Io]=s/6e4,n[jo]=s/1e3,n)[o]||s,r?l:Xo.a(l)},t.daysInMonth=function(){return this.endOf(Fo).$D},t.$locale=function(){return Go[this.$L]},t.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=Jo(e,t,!0);return n&&(r.$L=n),r},t.clone=function(){return Xo.w(this.$d,this)},t.toDate=function(){return new Date(this.valueOf())},t.toJSON=function(){return this.isValid()?this.toISOString():null},t.toISOString=function(){return this.$d.toISOString()},t.toString=function(){return this.$d.toUTCString()},e}(),ei=Zo.prototype;Ko.prototype=ei,[["$ms",Ro],["$s",jo],["$m",Io],["$H",Po],["$W",To],["$M",Fo],["$y",No],["$D",Lo]].forEach((function(e){ei[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),Ko.extend=function(e,t){return e.$i||(e(t,Zo,Ko),e.$i=!0),Ko},Ko.locale=Jo,Ko.isDayjs=Yo,Ko.unix=function(e){return Ko(1e3*e)},Ko.en=Go[Wo],Ko.Ls=Go,Ko.p={};var ti=Ko,{H:ri}=mr,ni=()=>document.createComment(""),oi=(e,t,r)=>{var n;let o=e._$AA.parentNode,i=void 0===t?e._$AB:t._$AA;if(void 0===r){let t=o.insertBefore(ni(),i),n=o.insertBefore(ni(),i);r=new ri(t,n,e,e.options)}else{let t=r._$AB.nextSibling,a=r._$AM,s=a!==e;if(s){let t;null===(n=r._$AQ)||void 0===n||n.call(r,e),r._$AM=e,void 0!==r._$AP&&(t=e._$AU)!==a._$AU&&r._$AP(t)}if(t!==i||s){let e=r._$AA;for(;e!==t;){let t=e.nextSibling;o.insertBefore(e,i),e=t}}}return r},ii=(e,t,r=e)=>(e._$AI(t,r),e),ai={},si=e=>{var t;null===(t=e._$AP)||void 0===t||t.call(e,!1,!0);let r=e._$AA,n=e._$AB.nextSibling;for(;r!==n;){let e=r.nextSibling;r.remove(),r=e}},li=(e,t,r)=>{let n=new Map;for(let o=t;o<=r;o++)n.set(e[o],o);return n},ci=en(class extends tn{constructor(e){if(super(e),e.type!==Xr)throw Error("repeat() can only be used in text expressions")}ht(e,t,r){let n;void 0===r?r=t:void 0!==t&&(n=t);let o=[],i=[],a=0;for(let s of e)o[a]=n?n(s,a):a,i[a]=r(s,a),a++;return{values:i,keys:o}}render(e,t,r){return this.ht(e,t,r).values}update(e,[t,r,n]){var o;let i=(e=>e._$AH)(e),{values:a,keys:s}=this.ht(t,r,n);if(!Array.isArray(i))return this.ut=s,a;let l,c,u=null!==(o=this.ut)&&void 0!==o?o:this.ut=[],d=[],h=0,p=i.length-1,f=0,v=a.length-1;for(;h<=p&&f<=v;)if(null===i[h])h++;else if(null===i[p])p--;else if(u[h]===s[f])d[f]=ii(i[h],a[f]),h++,f++;else if(u[p]===s[v])d[v]=ii(i[p],a[v]),p--,v--;else if(u[h]===s[v])d[v]=ii(i[h],a[v]),oi(e,d[v+1],i[h]),h++,v--;else if(u[p]===s[f])d[f]=ii(i[p],a[f]),oi(e,i[h],i[p]),p--,f++;else if(void 0===l&&(l=li(s,f,v),c=li(u,h,p)),l.has(u[h]))if(l.has(u[p])){let t=c.get(s[f]),r=void 0!==t?i[t]:null;if(null===r){let t=oi(e,i[h]);ii(t,a[f]),d[f]=t}else d[f]=ii(r,a[f]),oi(e,i[h],r),i[t]=null;f++}else si(i[p]),p--;else si(i[h]),h++;for(;f<=v;){let t=oi(e,d[v+1]);ii(t,a[f]),d[f++]=t}for(;h<=p;){let e=i[h++];null!==e&&si(e)}return this.ut=s,((e,t=ai)=>e._$AH=t)(e,d),Xt}}),ui="object"==typeof e&&e&&e.Object===Object&&e,di="object"==typeof self&&self&&self.Object===Object&&self,hi=ui||di||Function("return this")(),pi=hi.Symbol,fi=Object.prototype,vi=fi.hasOwnProperty,mi=fi.toString,gi=pi?pi.toStringTag:void 0;var yi=function(e){var t=vi.call(e,gi),r=e[gi];try{e[gi]=void 0;var n=!0}catch{}var o=mi.call(e);return n&&(t?e[gi]=r:delete e[gi]),o},bi=Object.prototype.toString;var _i=function(e){return bi.call(e)},wi="[object Null]",xi="[object Undefined]",ki=pi?pi.toStringTag:void 0;var Ei=function(e){return null==e?void 0===e?xi:wi:ki&&ki in Object(e)?yi(e):_i(e)};var Si=function(e){return null!=e&&"object"==typeof e},Oi="[object Symbol]";var Ci=function(e){return"symbol"==typeof e||Si(e)&&Ei(e)==Oi};var Ai=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o},Di=Array.isArray,$i=1/0,Ri=pi?pi.prototype:void 0,ji=Ri?Ri.toString:void 0;var Ii=function e(t){if("string"==typeof t)return t;if(Di(t))return Ai(t,e)+"";if(Ci(t))return ji?ji.call(t):"";var r=t+"";return"0"==r&&1/t==-$i?"-0":r},Pi=/\s/;var Ti=function(e){for(var t=e.length;t--&&Pi.test(e.charAt(t)););return t},Mi=/^\s+/;var Fi=function(e){return e&&e.slice(0,Ti(e)+1).replace(Mi,"")};var zi=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ni=NaN,Li=/^[-+]0x[0-9a-f]+$/i,Bi=/^0b[01]+$/i,qi=/^0o[0-7]+$/i,Ui=parseInt;var Vi=function(e){if("number"==typeof e)return e;if(Ci(e))return Ni;if(zi(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=zi(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=Fi(e);var r=Bi.test(e);return r||qi.test(e)?Ui(e.slice(2),r?2:8):Li.test(e)?Ni:+e},Qi="[object AsyncFunction]",Hi="[object Function]",Wi="[object GeneratorFunction]",Gi="[object Proxy]";var Yi=function(e){if(!zi(e))return!1;var t=Ei(e);return t==Hi||t==Wi||t==Qi||t==Gi},Ji=hi["__core-js_shared__"],Ki=function(){var e=/[^.]+$/.exec(Ji&&Ji.keys&&Ji.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();var Xi=function(e){return!!Ki&&Ki in e},Zi=Function.prototype.toString;var ea=function(e){if(null!=e){try{return Zi.call(e)}catch{}try{return e+""}catch{}}return""},ta=/^\[object .+?Constructor\]$/,ra=Function.prototype,na=Object.prototype,oa=ra.toString,ia=na.hasOwnProperty,aa=RegExp("^"+oa.call(ia).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var sa=function(e){return!(!zi(e)||Xi(e))&&(Yi(e)?aa:ta).test(ea(e))};var la=function(e,t){return null==e?void 0:e[t]};var ca=function(e,t){var r=la(e,t);return sa(r)?r:void 0},ua=function(){try{var e=ca(Object,"defineProperty");return e({},"",{}),e}catch{}}(),da=9007199254740991,ha=/^(?:0|[1-9]\d*)$/;var pa=function(e,t){var r=typeof e;return!!(t=null==t?da:t)&&("number"==r||"symbol"!=r&&ha.test(e))&&e>-1&&e%1==0&&e<t};var fa=function(e,t,r){"__proto__"==t&&ua?ua(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r};var va=function(e,t){return e===t||e!=e&&t!=t},ma=Object.prototype.hasOwnProperty;var ga=function(e,t,r){var n=e[t];(!ma.call(e,t)||!va(n,r)||void 0===r&&!(t in e))&&fa(e,t,r)},ya=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ba=/^\w*$/;var _a=function(e,t){if(Di(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Ci(e))||(ba.test(e)||!ya.test(e)||null!=t&&e in Object(t))},wa=ca(Object,"create");var xa=function(){this.__data__=wa?wa(null):{},this.size=0};var ka=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},Ea="__lodash_hash_undefined__",Sa=Object.prototype.hasOwnProperty;var Oa=function(e){var t=this.__data__;if(wa){var r=t[e];return r===Ea?void 0:r}return Sa.call(t,e)?t[e]:void 0},Ca=Object.prototype.hasOwnProperty;var Aa=function(e){var t=this.__data__;return wa?void 0!==t[e]:Ca.call(t,e)},Da="__lodash_hash_undefined__";var $a=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=wa&&void 0===t?Da:t,this};function Ra(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ra.prototype.clear=xa,Ra.prototype.delete=ka,Ra.prototype.get=Oa,Ra.prototype.has=Aa,Ra.prototype.set=$a;var ja=Ra;var Ia=function(){this.__data__=[],this.size=0};var Pa=function(e,t){for(var r=e.length;r--;)if(va(e[r][0],t))return r;return-1},Ta=Array.prototype.splice;var Ma=function(e){var t=this.__data__,r=Pa(t,e);return!(r<0)&&(r==t.length-1?t.pop():Ta.call(t,r,1),--this.size,!0)};var Fa=function(e){var t=this.__data__,r=Pa(t,e);return r<0?void 0:t[r][1]};var za=function(e){return Pa(this.__data__,e)>-1};var Na=function(e,t){var r=this.__data__,n=Pa(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this};function La(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}La.prototype.clear=Ia,La.prototype.delete=Ma,La.prototype.get=Fa,La.prototype.has=za,La.prototype.set=Na;var Ba=La,qa=ca(hi,"Map");var Ua=function(){this.size=0,this.__data__={hash:new ja,map:new(qa||Ba),string:new ja}};var Va=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e};var Qa=function(e,t){var r=e.__data__;return Va(t)?r["string"==typeof t?"string":"hash"]:r.map};var Ha=function(e){var t=Qa(this,e).delete(e);return this.size-=t?1:0,t};var Wa=function(e){return Qa(this,e).get(e)};var Ga=function(e){return Qa(this,e).has(e)};var Ya=function(e,t){var r=Qa(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this};function Ja(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Ja.prototype.clear=Ua,Ja.prototype.delete=Ha,Ja.prototype.get=Wa,Ja.prototype.has=Ga,Ja.prototype.set=Ya;var Ka=Ja,Xa="Expected a function";function Za(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError(Xa);var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(Za.Cache||Ka),r}Za.Cache=Ka;var es=Za,ts=500;var rs=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ns=/\\(\\)?/g,os=function(e){var t=es(e,(function(e){return r.size===ts&&r.clear(),e})),r=t.cache;return t}((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(rs,(function(e,r,n,o){t.push(n?o.replace(ns,"$1"):r||e)})),t}));var is=function(e){return null==e?"":Ii(e)};var as=function(e,t){return Di(e)?e:_a(e,t)?[e]:os(is(e))},ss=1/0;var ls=function(e){if("string"==typeof e||Ci(e))return e;var t=e+"";return"0"==t&&1/e==-ss?"-0":t};var cs=function(e,t){for(var r=0,n=(t=as(t,e)).length;null!=e&&r<n;)e=e[ls(t[r++])];return r&&r==n?e:void 0};var us=function(e,t,r){var n=null==e?void 0:cs(e,t);return void 0===n?r:n},ds=function(){return hi.Date.now()},hs="Expected a function",ps=Math.max,fs=Math.min;var vs=function(e,t,r){var n,o,i,a,s,l,c=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError(hs);function p(t){var r=n,i=o;return n=o=void 0,c=t,a=e.apply(i,r)}function f(e){var r=e-l;return void 0===l||r>=t||r<0||d&&e-c>=i}function v(){var e=ds();if(f(e))return m(e);s=setTimeout(v,function(e){var r=t-(e-l);return d?fs(r,i-(e-c)):r}(e))}function m(e){return s=void 0,h&&n?p(e):(n=o=void 0,a)}function g(){var e=ds(),r=f(e);if(n=arguments,o=this,l=e,r){if(void 0===s)return function(e){return c=e,s=setTimeout(v,t),u?p(e):a}(l);if(d)return clearTimeout(s),s=setTimeout(v,t),p(l)}return void 0===s&&(s=setTimeout(v,t)),a}return t=Vi(t)||0,zi(r)&&(u=!!r.leading,i=(d="maxWait"in r)?ps(Vi(r.maxWait)||0,t):i,h="trailing"in r?!!r.trailing:h),g.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=l=o=s=void 0},g.flush=function(){return void 0===s?a:m(ds())},g};var ms=function(e,t,r,n){if(!zi(e))return e;for(var o=-1,i=(t=as(t,e)).length,a=i-1,s=e;null!=s&&++o<i;){var l=ls(t[o]),c=r;if("__proto__"===l||"constructor"===l||"prototype"===l)return e;if(o!=a){var u=s[l];void 0===(c=n?n(u,l,s):void 0)&&(c=zi(u)?u:pa(t[o+1])?[]:{})}ga(s,l,c),s=s[l]}return e};var gs=function(e,t,r){return null==e?e:ms(e,t,r)},ys="Expected a function";var bs=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(ys);return zi(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),vs(e,t,{leading:n,maxWait:t,trailing:o})},_s=class{constructor(e,t){this.host=e,this.query=t,this.isLoading=!1,this.isError=!1,this.data=null,this.error=null,this.queryId=null,e.addController(this)}isCancelledQuery(e){return this.queryId!==e}async execute(e){if(this.isLoading)return;this.isLoading=!0,this.isError=!1,this.host.requestUpdate();let t=_o();this.queryId=t;try{let r=await this.query(e);if(this.isCancelledQuery(t))return;this.data=r,this.error=null}catch(r){if(this.isCancelledQuery(t))return;this.data=null,this.isError=!0,this.error=r}finally{this.isLoading=!1,this.host.requestUpdate()}}cancel(){this.isLoading&&(this.queryId=null,this.isLoading=!1,this.host.requestUpdate())}hostConnected(){}},ws=e=>(class extends e{constructor(){super(...arguments),this.stickToBottom=!0,this.resizeObserver=null,this.lastKnownScrollHeight=0}async scrollToBottom(){await this.updateComplete,this.scrollBottom=0,this.stickToBottom=!0}resetStickToBottomState(){this.lastKnownScrollHeight=0,this.stickToBottom=!0,this.scrollToBottom()}ensureScrollState(){this.stickToBottom&&this.scrollToBottom()}get scrollBottom(){return this.scrollHeight-(this.clientHeight+this.scrollTop)}set scrollBottom(e){this.scrollTop=this.scrollHeight-this.clientHeight-e}isScrolledToBottom(){return this.scrollBottom<10}async updateStickToBottomState(){this.lastKnownScrollHeight!==this.scrollHeight&&this.stickToBottom&&await this.scrollToBottom(),this.stickToBottom=this.isScrolledToBottom(),this.lastKnownScrollHeight=this.scrollHeight}connectedCallback(){super.connectedCallback(),this.addEventListener("scroll",()=>this.updateStickToBottomState(),!1),window&&window.ResizeObserver&&(this.resizeObserver=new ResizeObserver(async()=>{this.stickToBottom&&this.scrollToBottom()}),this.resizeObserver.observe(this))}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver&&this.resizeObserver.disconnect()}async updated(e){super.updated(e),this.ensureScrollState()}}),xs=(e,...t)=>({strTag:!0,strings:e,values:t}),ks=[];for(let r=0;r<256;r++)ks[r]=(r>>4&15).toString(16)+(15&r).toString(16);(new class{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}).resolve();var Es=e=>(e=>"string"!=typeof e&&"strTag"in e)(e)?((e,t,r)=>{let n=e[0];for(let o=1;o<e.length;o++)n+=t[r?r[o-1]:o-1],n+=e[o];return n})(e.strings,e.values):e;ti.extend((function(e,t,r){t.prototype.isYesterday=function(){var e="YYYY-MM-DD",t=r().subtract(1,"day");return this.format(e)===t.format(e)}}));var Ss="en-US";function Os(e,t,r){return!0===(null==r?void 0:r.short)?e.toLocaleDateString(t,{month:"short",day:"numeric"}):e.toLocaleString(t,null==r?void 0:r.options)}var Cs={options:{dateStyle:"full",timeStyle:"long"}},As=class extends yr{constructor(){super(...arguments),this.ts="",this.date=new Date,this.short=!1,this.locale=""}getLocale(){return this.locale||(document&&document.documentElement.lang?document.documentElement.lang:navigator&&navigator.language?navigator.language:Ss)}createRenderRoot(){return this}render(){let e=this.getLocale(),t=Os(this.date,e,Cs),r=this.formatOptions?{options:this.formatOptions}:{short:this.short},n=Os(this.date,e,r);return Jt` <
											time datetime = "${this.date.toISOString()}"
											title = "${t}" > $ {
												n
											} < /time>
											`}};$n([xr({type:String})],As.prototype,"ts",void 0),$n([xr({attribute:"ts",converter:e=>new Date((null==e?void 0:e.replace("+0000","+00:00"))||"")})],As.prototype,"date",void 0),$n([xr({type:Boolean})],As.prototype,"short",void 0),$n([xr({type:String})],As.prototype,"locale",void 0),$n([xr({type:Object})],As.prototype,"formatOptions",void 0),As=$n([_r("faceplate-date")],As);Zn("icon-info",Kt`
											$ {
												Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_474_84)"><path d="M10 20a10 10 0 1110-10 10.011 10.011 0 01-10 10zm0-18.75A8.75 8.75 0 1018.75 10 8.76 8.76 0 0010 1.25zm-.543 5.705a1.058 1.058 0 01-.39-.393 1.11 1.11 0 010-1.09c.093-.161.228-.295.39-.386a1.1 1.1 0 011.484.39c.098.163.149.35.147.54a1.08 1.08 0 01-.54.936A1.05 1.05 0 0110 7.1a1.062 1.062 0 01-.543-.145zm1.354 8.463H9.2V8.124h1.614l-.003 7.294z"/></g><defs><clipPath id="clip0_474_84"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')
											}
											`,Kt`
											$ {
												Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_474_83)"><path d="M10 0a10 10 0 1010 10A10.011 10.011 0 0010 0zm1.081 15.418H8.92V8.062h2.161v7.356zm.065-8.859a1.307 1.307 0 01-1.139.656 1.29 1.29 0 01-.67-.178 1.343 1.343 0 01-.475-1.811c.113-.197.277-.36.475-.472a1.344 1.344 0 011.326.008 1.321 1.321 0 01.483 1.797z"/></g><defs><clipPath id="clip0_474_83"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')
											}
											`);var Ds,$s,Rs,js=_t`: host {
												display: flex;position: fixed;left: 0;right: 0;top: 0;bottom: 0;box - sizing: border - box;align - items: center;justify - content: center;padding: var (--spacer - xl);background: var (--color - scrim);pointer - events: all;overflow: auto;z - index: var (--layer - overlay)
											}.actions {
												position: absolute;top: var (--spacer - xs);right: var (--spacer - xs)
											}
											img {
												max - height: 100 % ;
												max - width: 100 % ;
												object - fit: contain
											}
											`,Is=class extends yr{constructor(){super(...arguments),this.handleEscapeKey=e=>{"Escape"===e.key&&(e.stopPropagation(),this.hide())},this.hide=()=>{this.dispatchEvent(new CustomEvent("close"))}}static get styles(){return[oo,js]}connectedCallback(){super.connectedCallback(),this.addEventListener("click",()=>{this.hide()}),window.addEventListener("keydown",this.handleEscapeKey),fo(this,(()=>So({source:"chat",action:"click",noun:"image"}))())}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.handleEscapeKey)}render(){return this.src?Jt` <
											img
											src = "${this.src}"
											alt = "${nn(this.name)}"
											@click = "${e=>{e.stopPropagation()}}" /
												>
												<
												div class = "actions" >
												$ {
													fn({
														appearance: "plain",
														size: an.Small,
														attributes: {
															className: "text-tone-7 dark:text-tone-1 hover:text-tone-1 w-xl",
															type: "button",
															onclick: e => {
																e.stopPropagation(), this.hide()
															}
														},
														leadingIcon: Jt`<icon-close></icon-close>`
													})
												} <
												/div>
											`:null}};v([xr({type:String})],Is.prototype,"src",2),v([xr({type:String})],Is.prototype,"name",2),Is=v([_r("rs-image-preview")],Is),function(e){e[e.emergency=0]="emergency",e[e.alert=1]="alert",e[e.critical=2]="critical",e[e.error=3]="error",e[e.warning=4]="warning",e[e.notice=5]="notice",e[e.info=6]="info",e[e.success=7]="success",e[e.debug=8]="debug",e[e.none=9]="none"}(Ds||(Ds={})),function(e){e.Programmatic="programmatic",e.Eager="eager",e.Action="action",e.Intent="intent",e.Lazy="lazy",e.Preload="preload"}($s||($s={})),function(e){e.Get="get",e.Post="post",e.Dialog="dialog",e.Log="log"}(Rs||(Rs={}));Zn("icon-delete",Kt`
											$ {
												Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_472_1132)"><path d="M15.751 6.059L17 6.142l-.761 11.441a2.579 2.579 0 01-2.439 2.542H6.2a2.578 2.578 0 01-2.437-2.536L3 6.142l1.248-.083.761 11.441A1.366 1.366 0 006.2 18.875h7.6a1.369 1.369 0 001.191-1.381l.76-11.435zM18 3v1.25H2V3h4v-.375A2.762 2.762 0 018.875 0h2.25A2.762 2.762 0 0114 2.625V3h4zM7.25 3h5.5v-.375a1.518 1.518 0 00-1.625-1.375h-2.25A1.518 1.518 0 007.25 2.625V3z"/></g><defs><clipPath id="clip0_472_1132"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')
											}
											`,Kt`
											$ {
												Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_472_1133)"><path d="M14.375 3a3.136 3.136 0 00-3.25-3h-2.25a3.136 3.136 0 00-3.25 3H2v2h16V3h-3.625zm-5.5-1h2.25a1.148 1.148 0 011.25 1h-4.75a1.148 1.148 0 011.25-1zm-5.85 4.5h13.95l-.737 11.083a2.58 2.58 0 01-2.438 2.542H6.2a2.578 2.578 0 01-2.437-2.536L3.025 6.5z"/></g><defs><clipPath id="clip0_472_1133"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')
											}
											`);var Ps=_t`: host {
												height: 100 % ;display: grid;grid - template - columns: 1 fr;grid - template - rows: min - content 1 fr min - content
											}
											main {
												align - self: center;
												justify - self: center
											}
											footer {
												display: flex;justify - content: end;padding: var (--spacer - sm);gap: var (--spacer - sm)
											}
											`,Ts=class extends yr{constructor(){super(...arguments),this.dispatchConfirmEvent=()=>{this.dispatchEvent(new CustomEvent("confirm",{bubbles:!1}))},this.dispatchCancelEvent=()=>{this.dispatchEvent(new CustomEvent("cancel",{bubbles:!1}))}}static get styles(){return[oo,Ps]}render(){return Jt`
											$ {
												lo({
													title: Jt`
          <slot name="header">${Es("Are you sure?",{desc:"Confirmation modal: title"})}</slot>
        `
												})
											} <
											main >
												<
												slot > < /slot> <
												/main> <
												footer >
												$ {
													fn({
														size: an.Small,
														children: Jt`<slot name="cancel">${Es("Cancel",{desc:"Cancel button"})}</slot>`,
														attributes: {
															type: "button",
															onclick: this.dispatchCancelEvent
														}
													})
												}
											$ {
												fn({
													appearance: "primary",
													size: an.Small,
													children: Jt`<slot name="confirm">${Es("Ok",{desc:"Ok button label"})}</slot>`,
													attributes: {
														type: "button",
														onclick: this.dispatchConfirmEvent
													}
												})
											} <
											/footer>
											`}};Ts=v([_r("rs-room-confirmation-overlay")],Ts);var Ms=class extends CustomEvent{constructor(e){super("faceplate-alert",{detail:e,bubbles:!0,composed:!0})}},Fs="room-overlay-show",zs="room-overlay-hide",Ns=class extends CustomEvent{constructor(e){super(Fs,{detail:{content:e},bubbles:!0,composed:!0})}},Ls={variantFlipOrder:{start:"sme",middle:"mse",end:"ems"},positionFlipOrder:{top:"tbrl",right:"rltb",bottom:"btrl",left:"lrbt"},position:"bottom",margin:8,padding:0},Bs=(e,t,r)=>{let n="object"!=typeof e||e instanceof HTMLElement?{reference:e,popper:t,...r}:e;return{update(e=n){let{reference:t,popper:r}=Object.assign(n,e);if(!r||!t)throw new Error("Popper- or reference-element missing.");return((e,t,r)=>{let{container:n,margin:o,padding:i,position:a,variantFlipOrder:s,positionFlipOrder:l}={container:document.documentElement.getBoundingClientRect(),...Ls,...r},{left:c,top:u}=t.style;t.style.left="0",t.style.top="0";let d=e.getBoundingClientRect(),h=t.getBoundingClientRect(),p={t:d.top-h.height-o,b:d.bottom+o,r:d.right+o,l:d.left-h.width-o},f={vs:d.left,vm:d.left+d.width/2+-h.width/2,ve:d.left+d.width-h.width,hs:d.top,hm:d.bottom-d.height/2-h.height/2,he:d.bottom-h.height},[v,m="middle"]=a.split("-"),g=l[v],y=s[m],{top:b,left:_,bottom:w,right:x}=n;for(let k of g){let e="t"===k||"b"===k,r=p[k],[n,o]=e?["top","left"]:["left","top"],[a,s]=e?[h.height,h.width]:[h.width,h.height],[l,c]=e?[w,x]:[x,w],[u,d]=e?[b,_]:[_,b];if(!(r<u||r+a+i>l))for(let p of y){let a=f[(e?"v":"h")+p];if(!(a<d||a+s+i>c))return t.style[o]=a-h[o]+"px",t.style[n]=r-h[n]+"px",k+p}}return t.style.left=c,t.style.top=u,null})(t,r,n)}}},qs=class{constructor(e,t){var r,{containerElement:n=document.documentElement,allowCloseByEvent:o=!0}=t,i=Dn(t,["containerElement","allowCloseByEvent"]);this.status={open:!1,isOpening:!1,isClosing:!1},this.open=async()=>{var e;if(this.updateOptions({}),this.status.open||this.status.isOpening)return Promise.resolve(null);let t=this.showElement(this._options.popper,!0);return t&&(this.setStatus("opening"),t.finished.then(()=>this.setStatus("opened"))),null!==(e=null==t?void 0:t.finished)&&void 0!==e?e:Promise.resolve(null)},this.close=async e=>{var t;if(this.updateOptions({}),e&&!this._options.allowCloseByEvent||(e&&(e.preventDefault(),e.stopPropagation()),!this.status.open||this.status.isClosing))return Promise.resolve(null);let r=this.hideElement(this._options.popper,!0);return r&&(this.setStatus("closing"),r.finished.then(()=>this.setStatus("closed"))),null!==(t=null==r?void 0:r.finished)&&void 0!==t?t:Promise.resolve(null)},this.toggle=async e=>this.status.open?this.close(e):this.open(),this.setStatus=e=>{this.status={opening:{open:!1,isOpening:!0,isClosing:!1},closing:{open:!0,isOpening:!1,isClosing:!0},opened:{open:!0,isOpening:!1,isClosing:!1},closed:{open:!1,isOpening:!1,isClosing:!1}}[e]},this.handleContainerResize=()=>{var e;this.popper.update(Object.assign(Object.assign({},this._options),{container:(null!==(e=this._options.containerElement)&&void 0!==e?e:document.documentElement).getBoundingClientRect()}))},this.getKeyframes=(e,t="show",r)=>new KeyframeEffect(e,[{visiblity:"visible",opacity:"0"},{visibility:"visible",opacity:"1"}],{fill:"both",direction:"show"===t?"normal":"reverse",duration:r,easing:"ease-in-out"}),(this.host=e).addController(this),this._options=Object.assign(Object.assign({},i),{containerElement:n,allowCloseByEvent:o}),this.popper=Bs(Object.assign(Object.assign({},this._options),{container:(null!==(r=this._options.containerElement)&&void 0!==r?r:document.documentElement).getBoundingClientRect()}))}hostConnected(){this.resizeObserver=new ResizeObserver(this.handleContainerResize),this._options.containerElement&&this.resizeObserver.observe(this._options.containerElement),this.replaceElement(void 0,this._options.popper)}hostDisconnected(){this._options.containerElement&&this.resizeObserver.unobserve(this._options.containerElement)}getOptions(){return this._options}updateOptions(e){var t,r,n=Dn(e,[]);let o=Object.assign(Object.assign(Object.assign({},this._options),n),{container:(null!==(r=null!==(t=n.containerElement)&&void 0!==t?t:this._options.containerElement)&&void 0!==r?r:document.documentElement).getBoundingClientRect()}),i=o.popperElementKey||"popperElement";!o.popper&&i in this.host&&(o.popper=this.host[i]);let a=o.referenceElementKey||"popperReferenceElement";!o.reference&&a in this.host&&(o.reference=this.host[a]),o.popper!==this._options.popper&&this.replaceElement(this._options.popper,o.popper),o.containerElement!==this._options.containerElement&&(this._options.containerElement&&(this.resizeObserver.unobserve(this._options.containerElement),this._options.containerElement.removeEventListener("faceplate-close",this.close)),o.containerElement&&(this.resizeObserver.observe(o.containerElement),o.containerElement.addEventListener("faceplate-close",this.close))),this._options=o,this.popper.update(this._options)}get currentState(){return this.status}showElement(e,t=!0){if(e)return Us(t?this.getKeyframes(e,"show",150):this.getKeyframes(e,"show",0))}hideElement(e,t=!0){if(e)return Us(t?this.getKeyframes(e,"hide",150):this.getKeyframes(e,"hide",0))}replaceElement(e,t){e&&(this.hideElement(e,!1),e.removeEventListener("faceplate-close",this.close)),t&&(this.status.open?this.showElement(t,!1):this.hideElement(t,!1),t.addEventListener("faceplate-close",this.close))}};qs.defaultPopperContentStyles=_t` [faceplate - popper - content] {
												position: fixed;
												visibility: hidden;
												opacity: 0;
											}
											`;var Us=e=>{if(!e.target)return;e.target.getAnimations().forEach(e=>e.cancel());let t=new Animation(e);return t.play(),t},Vs=class extends yr{constructor(){super(...arguments),this.position="bottom",this.triggerEvent="hover",this._popperController=new qs(this,{position:this.position,referenceElementKey:"referenceElement",popperElementKey:"_tooltip"}),this.updated=e=>{e.has("position")&&this._popperController.updateOptions({position:this.position})},this.handleEscape=e=>{"Escape"===e.key&&this.close()},this.show=()=>{this.hidden=!1},this.close=()=>{this.hidden=!0}}get referenceElement(){return this.triggers.length>0?this.triggers[0]:this}static get styles(){return[_t`: host {
												display: inline - block;
												position: relative;
											}

											[role = 'tooltip'] {
												font - size: 0.75 rem;
												line - height: 1.25;
												background - color: var (--color - ui - modalbackground);
												border - radius: 0.25 rem;
												box - shadow: var (--boxshadow - tooltip);
												justify - content: center;
												padding: 0.5 rem 0.625 rem;
												display: inline - flex;
												width: max - content;
											}

											article {
												display: flex;
												gap: 0.375 rem;
											}

											.icon {
												display: inline - block;
											}

											[role = 'tooltip']::after {
												display: block;
												content: '';
												width: 8 px;
												height: 8 px;
												position: absolute;
												background - color: var (--color - ui - modalbackground);
											}

											[role = 'tooltip'][position = 'top']::after {
												bottom: 0;
												transform: translateY(50 % ) rotate(45 deg);
												box - shadow: 1 px 1 px 2 px rgba(0, 0, 0, 0.05);
											}

											[role = 'tooltip'][position = 'bottom']::after {
												top: 0;
												transform: translateY(-50 % ) rotate(45 deg);
												box - shadow: -1 px - 1 px 2 px rgba(0, 0, 0, 0.05);
											}

											[role = 'tooltip'][position = 'right']::after {
												left: 0;
												top: 50 % ;
												/* 38% because the border-radius: 100px shows a space above 38% */
												transform: translate(-38 % , -50 % ) rotate(45 deg);
												box - shadow: -2 px 0 px 2 px rgba(0, 0, 0, 0.05);
											}

											[role = 'tooltip'][position = 'left']::after {
												right: 0;
												top: 50 % ;
												/* 38% because the border-radius: 100px shows a space above 38% */
												transform: translate(38 % , -50 % ) rotate(45 deg);
												box - shadow: 0 px - 2 px 2 px rgba(0, 0, 0, 0.05);
											}

											[role = 'tooltip'][position ^= 'auto']::after {
												display: none;
											}
											`,qs.defaultPopperContentStyles]}get hidden(){return!this._popperController.currentState.open}set hidden(e){!0===e?this._popperController.close():this._popperController.open()}firstUpdated(){document.addEventListener("keydown",this.handleEscape)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleEscape)}handleClick(){"click"===this.triggerEvent&&(this.hidden?this.show():this.close())}handleKeydown(e){"click"===this.triggerEvent&&("Enter"===e.code||"Space"===e.code)&&(this.hidden?this.show():this.close())}handleMouseenter(){"hover"===this.triggerEvent&&this.show()}handleMouseleave(){"hover"===this.triggerEvent&&this.close()}render(){return Jt` <
											slot
											name = "trigger"
											aria - describedby = "faceplate-tooltip"
											@click = $ {
												this.handleClick
											}
											@keydown = $ {
												this.handleKeydown
											}
											@mouseenter = $ {
												this.handleMouseenter
											}
											@mouseleave = $ {
												this.handleMouseleave
											}
											@focusin = $ {
												this.handleMouseenter
											}
											@focusout = $ {
													this.handleMouseenter
												} > < /slot> <
												article
											id = "faceplate-tooltip"
											role = "tooltip"
											position = $ {
												this.position
											}
											faceplate - popper - content
											hidden >
												<
												slot class = "icon"
											name = "icon" > < /slot> <
												span >
												<
												slot > < /slot> <
												/span> <
												/article>
											`}};$n([xr({type:String})],Vs.prototype,"position",void 0),$n([xr({type:String,attribute:"trigger-event"})],Vs.prototype,"triggerEvent",void 0),$n([Ar("trigger",!0)],Vs.prototype,"triggers",void 0),$n([Ar("icon",!0)],Vs.prototype,"icons",void 0),$n([Sr("#faceplate-tooltip")],Vs.prototype,"_tooltip",void 0),Vs=$n([_r("faceplate-tooltip")],Vs);var Qs=_t`.menu - item {
												display: inline - flex;align - items: center;justify - content: center;width: 28 px;height: 28 px;background: 0;border: 0;margin: 0 .125 rem
											}.menu - item: hover {
												border - radius: .5 rem;
												background - color: var (--color - tone - 5)
											}
											`,Hs=class extends(mn(yr)){constructor(){super(...arguments),this.handleClick=e=>{let t=this.renderOverlay();t?this.dispatchEvent(new Ns(t)):this.dispatchEvent(new CustomEvent("click")),e.stopPropagation()},this.hideOverlay=()=>{this.dispatchEvent(new CustomEvent(zs,{bubbles:!0,composed:!0}))}}static get styles(){return[oo,Qs]}getCurrentRoom(){var e;if(!this.matrix||!this.event)return null;let t=this.event.getRoomId();return t&&null!=(e=this.matrix.getRoom(t))?e:null}render(){return this.isActionAllowed()?this.disableTooltip?Jt` < button class = "menu-item"
											@click = $ {
													this.handleClick
												} > $ {
													this.icon
												} < /button>`:Jt` <
												faceplate - tooltip position = "top" >
												<
												button slot = "trigger"
											class = "menu-item"
											@click = $ {
												this.handleClick
											} > $ {
												this.icon
											} < /button>
											$ {
												this.name
											} <
											/faceplate-tooltip>
											`:null}};v([xr({type:Object})],Hs.prototype,"event",2),v([xr({type:Boolean})],Hs.prototype,"disableTooltip",2);var Ws=class extends Hs{constructor(){super(...arguments),this.name=Es("Delete",{desc:"Message Actions Menu: Delete message action tooltip"}),this.icon=Jt` < icon - delete > < /icon-delete>`,this.deleteEvent=async()=>{if(!this.matrix||!this.event)return;let e=this.event.getId(),t=this.getCurrentRoom();if(t&&e)try{this.hideOverlay(),this.event.status===Nr.NOT_SENT?t.removeEvent(e):await this.matrix.redactEvent(t.roomId,e)}catch{this.dispatchEvent(new Ms({level:Ds.error,message:Es("Unable to delete the message",{desc:"Room timeline /
											Delete message: error message "})}))}}}isActionAllowed(){var e;let t=this.getCurrentRoom();if(!this.matrix||!this.event||!t)return!1;let r=this.matrix.getUserId();return!(!r||(null==(e=this.event.sender)?void 0:e.userId)!==r)&&t.currentState.maySendEvent(zr.RoomRedaction,r)}renderOverlay(){return Jt` <
												rs - room - confirmation - overlay @confirm = $ {
													this.deleteEvent
												}
											@cancel = $ {
													this.hideOverlay
												} >
												<
												div slot = "header" >
												$ {
													Es("Delete this message?", {
														desc: "Delete message: confirmation title"
													})
												} <
												/div> <
												span slot = "confirm" >
												$ {
													Es("Yes, Delete", {
														desc: "Delete message: confirmation CTA"
													})
												} < /span >
												$ {
													Es(xs`It will be removed for everyone in this chat. You can't undo this.`, {
														desc: "Delete message: confirmation text"
													})
												} <
												/rs-room-confirmation-overlay>
											`}};Ws=v([_r("rs-timeline-event-delete-action")],Ws);Zn("icon-report",Kt`
											$ {
												Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2.25 19.775H1V2.193l.353-.171a10.293 10.293 0 018.919 0 9.054 9.054 0 007.7.061l.309-.144.385.188a.715.715 0 01.334.606V14.79l-.353.17a10.286 10.286 0 01-8.919 0 9.033 9.033 0 00-7.478-.16v4.975zm3.562-6.956a10.23 10.23 0 014.46 1.016A9.04 9.04 0 0017.75 14V3.531a10.17 10.17 0 01-8.022-.384 9.037 9.037 0 00-7.478-.162v10.468c1.14-.42 2.347-.635 3.562-.634z"/></svg>')
											}
											`,Kt`
											$ {
												Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M18.668 2.127l-.385-.188-.309.144a9.054 9.054 0 01-7.7-.061 10.293 10.293 0 00-8.919 0L1 2.193v17.582h2v-5.252a9.03 9.03 0 016.728.437 10.286 10.286 0 008.919 0l.353-.17V2.733a.715.715 0 00-.332-.606z"/></svg>')
											}
											`);function*Gs(e,t){if(void 0!==e){let r=0;for(let n of e)yield t(n,r++)}}var Ys,Js=class extends CustomEvent{constructor(e,t){super(e,{...t,bubbles:!0,composed:!0})}},Ks=class extends Js{constructor(e){super(e)}},Xs=class extends Ks{constructor(e){super(Xs.type),this.controller=e}},Zs=Xs;Ys=new WeakMap,y(Zs,Ys,Xs.type="apollo-controller-connected");var el,tl=class extends Ks{constructor(e){super(tl.type),this.controller=e}},rl=tl;el=new WeakMap,y(rl,el,tl.type="apollo-controller-disconnected");var nl,ol,il,al=class{constructor(e,t){var r,n,o;y(this,nl,void 0),y(this,ol,void 0),y(this,il,void 0),this.host=e,b(this,nl,{}),b(this,ol,null),b(this,il,null),this.called=!0,this.data=null,this.error=null,this.errors=[],this.loading=!1,e instanceof EventTarget?this.emitter=e:(null==t?void 0:t.hostElement)instanceof EventTarget?this.emitter=t.hostElement:this.emitter=new EventTarget,this.options=null!=t?t:{},this.client=null!=(n=null!=(r=this.options.client)?r:window.__APOLLO_CLIENT__)?n:null,null==(o=e.addController)||o.call(e,this)}static o(e,t){Object.defineProperty(e,"options",{get(){return g(this,nl)},set(e){var t;b(this,nl,e),null==(t=this.optionsChanged)||t.call(this,e)}})}get client(){return g(this,ol)}set client(e){var t;let r=g(this,ol);b(this,ol,e),null==(t=this.clientChanged)||t.call(this,e),this.notify({client:r})}get document(){return g(this,il)}set document(e){var t;if(e!==g(this,il))if(e){if(!function(e){return!!(e&&"object"==typeof e&&"kind"in e&&"definitions"in e)}(e)){let e=this.constructor.name.replace(/Apollo(\w+)(Controller|Behavior)/,"$1");throw new TypeError(`
											$ {
												e
											}
											must be a parsed GraphQL document.
											`)}b(this,il,e),this.notify({document:e}),null==(t=this.documentChanged)||t.call(this,e)}else b(this,il,null)}get variables(){var e,t;return null!=(t=null==(e=this.options)?void 0:e.variables)?t:null}set variables(e){var t;if(e){if(e===this.options.variables)return;this.options.variables=e}else delete this.options.variables;this.notify({variables:e}),null==(t=this.variablesChanged)||t.call(this,e)}notify(e){if(e&&this.host.requestUpdate.length>0)for(let[t,r]of Object.entries(e))this.host.requestUpdate(t,r);else this.host.requestUpdate()}init(e){var t;null!=this.variables||(this.variables=null!=(t=this.options.variables)?t:null),this.document=e}hostConnected(){this.emitter.dispatchEvent(new Zs(this))}hostDisconnected(){this.emitter.dispatchEvent(new rl(this)),window.dispatchEvent(new rl(this))}};function sl(e,t,r){if("function"!=typeof(null==r?void 0:r.value))throw new TypeError(`
											Only methods can be decorated with @bound. < $ {
												null != t ? t : e.name
											} > is not a method!`);return{configurable:!0,get(){let e=r.value.bind(this);return Object.defineProperty(this,t,{value:e,configurable:!0,writable:!0}),e}}}nl=new WeakMap,ol=new WeakMap,il=new WeakMap,$n([al.o],al.prototype,"options",void 0);$n([sl],class extends al{constructor(e,t,r){super(e,r),this.mostRecentMutationId=0,this.called=!1,this.init(null!=t?t:null)}get mutation(){return this.document}set mutation(e){this.document=e}async mutate(e){var t,r;if(!this.client)throw new TypeError("No Apollo client. See https://apolloelements.dev/guides/getting-started/apollo-client/");let n=this.generateMutationId(),{called:o=!1,data:i,error:a,errors:s,loading:l}=this;return this.loading=!0,this.called=!0,this.error=null,this.errors=[],this.data=null,this.notify({called:o,data:i,error:a,errors:s,loading:l}),this.client.mutate({mutation:this.mutation,awaitRefetchQueries:this.options.awaitRefetchQueries,context:this.options.context,errorPolicy:this.options.errorPolicy,fetchPolicy:this.options.fetchPolicy,optimisticResponse:this.options.optimisticResponse,refetchQueries:null!=(t=this.options.refetchQueries)?t:void 0,update:this.options.update,variables:null!=(r=this.variables)?r:void 0,...e}).then(this.onCompletedMutation.bind(this,n)).catch(this.onMutationError.bind(this,n))}generateMutationId(){return this.mostRecentMutationId+=1,this.mostRecentMutationId}isMostRecentMutation(e){return this.mostRecentMutationId===e}onCompletedMutation(e,t){var r,n,o,i;let{data:a,error:s,errors:l,loading:c}=this;return this.emitter.dispatchEvent(new CustomEvent("apollo-mutation-result",{detail:t})),this.isMostRecentMutation(e)&&(this.loading=!1,this.options.ignoreResults||(this.error=null,this.data=null!=(r=t.data)?r:null,this.errors=null!=(n=t.errors)?n:[],null==(i=(o=this.options).onCompleted)||i.call(o,this.data)),this.notify({data:a,error:s,errors:l,loading:c})),t}onMutationError(e,t){var r,n;this.emitter.dispatchEvent(new CustomEvent("apollo-error",{detail:t}));let{data:o,error:i,loading:a}=this;throw this.isMostRecentMutation(e)&&(this.loading=!1,this.data=null,this.error=t),null==(n=(r=this.options).onError)||n.call(r,t),this.notify({data:o,error:i,loading:a}),t}}.prototype,"mutate",null);var ll="Invariant Violation",cl=Object.setPrototypeOf,ul=void 0===cl?function(e,t){return e.__proto__=t,e}:cl,dl=function(e){function t(r){void 0===r&&(r=ll);var n=e.call(this,"number"==typeof r?ll+": "+r+" (see https://github.com/apollographql/invariant-packages)":r)||this;return n.framesToPop=1,n.name=ll,ul(n,t.prototype),n}return Cn(t,e),t}(Error);function hl(e,t){if(!e)throw new dl(t)}var pl=["debug","log","warn","error","silent"],fl=pl.indexOf("log");function vl(e){return function(){if(pl.indexOf(e)>=fl){var t=console[e]||console.log;return t.apply(console,arguments)}}}function ml(e){try{return e()}catch{}}!function(e){e.debug=vl("debug"),e.log=vl("log"),e.warn=vl("warn"),e.error=vl("error")}(hl||(hl={}));var gl=ml((function(){return globalThis}))||ml((function(){return window}))||ml((function(){return self}))||ml((function(){return e}))||ml((function(){return ml.constructor("return this")()})),yl="__",bl=[yl,yl].join("DEV");var _l=function(){try{return Boolean(__DEV__)}catch{return Object.defineProperty(gl,bl,{value:"production"!==ml((function(){return"production"})),enumerable:!1,configurable:!0,writable:!0}),gl[bl]}}();function wl(e){try{return e()}catch{}}var xl=wl((function(){return globalThis}))||wl((function(){return window}))||wl((function(){return self}))||wl((function(){return e}))||wl((function(){return wl.constructor("return this")()})),kl=!1;function El(){kl&&(delete xl.process,kl=!1)}function Sl(e,t){if(!Boolean(e))throw new Error(t)}xl&&!wl((function(){return"production"}))&&!wl((function(){return t}))&&(Object.defineProperty(xl,"process",{value:{env:{NODE_ENV:"production"}},configurable:!0,enumerable:!1,writable:!0}),kl=!0);var Ol,Cl,Al={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["description","directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","interfaces","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","interfaces","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},Dl=new Set(Object.keys(Al));function $l(e){let t=null==e?void 0:e.kind;return"string"==typeof t&&Dl.has(t)}function Rl(e){return 9===e||32===e}function jl(e){return Il(e,[])}function Il(e,t){switch(typeof e){case"string":return JSON.stringify(e);case"function":return e.name?` [function $ {
												e.name
											}] `:"[function]";case"object":return function(e,t){if(null===e)return"null";if(t.includes(e))return"[Circular]";let r=[...t,e];if(function(e){return"function"==typeof e.toJSON}(e)){let t=e.toJSON();if(t!==e)return"string"==typeof t?t:Il(t,r)}else if(Array.isArray(e))return function(e,t){if(0===e.length)return"[]";if(t.length>2)return"[Array]";let r=Math.min(10,e.length),n=e.length-r,o=[];for(let i=0;i<r;++i)o.push(Il(e[i],t));return 1===n?o.push("... 1 more item"):n>1&&o.push(`...$ {
												n
											}
											more items`),"["+o.join(", ")+"]"}(e,r);return function(e,t){let r=Object.entries(e);return 0===r.length?"{}":t.length>2?"["+function(e){let t=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if("Object"===t&&"function"==typeof e.constructor){let t=e.constructor.name;if("string"==typeof t&&""!==t)return t}return t}(e)+"]":"{ "+r.map(([e,r])=>e+": "+Il(r,t)).join(", ")+" }"}(e,r)}(e,t);default:return String(e)}}!function(e){e.QUERY="query",e.MUTATION="mutation",e.SUBSCRIPTION="subscription"}(Ol||(Ol={})),function(e){e.NAME="Name",e.DOCUMENT="Document",e.OPERATION_DEFINITION="OperationDefinition",e.VARIABLE_DEFINITION="VariableDefinition",e.SELECTION_SET="SelectionSet",e.FIELD="Field",e.ARGUMENT="Argument",e.FRAGMENT_SPREAD="FragmentSpread",e.INLINE_FRAGMENT="InlineFragment",e.FRAGMENT_DEFINITION="FragmentDefinition",e.VARIABLE="Variable",e.INT="IntValue",e.FLOAT="FloatValue",e.STRING="StringValue",e.BOOLEAN="BooleanValue",e.NULL="NullValue",e.ENUM="EnumValue",e.LIST="ListValue",e.OBJECT="ObjectValue",e.OBJECT_FIELD="ObjectField",e.DIRECTIVE="Directive",e.NAMED_TYPE="NamedType",e.LIST_TYPE="ListType",e.NON_NULL_TYPE="NonNullType",e.SCHEMA_DEFINITION="SchemaDefinition",e.OPERATION_TYPE_DEFINITION="OperationTypeDefinition",e.SCALAR_TYPE_DEFINITION="ScalarTypeDefinition",e.OBJECT_TYPE_DEFINITION="ObjectTypeDefinition",e.FIELD_DEFINITION="FieldDefinition",e.INPUT_VALUE_DEFINITION="InputValueDefinition",e.INTERFACE_TYPE_DEFINITION="InterfaceTypeDefinition",e.UNION_TYPE_DEFINITION="UnionTypeDefinition",e.ENUM_TYPE_DEFINITION="EnumTypeDefinition",e.ENUM_VALUE_DEFINITION="EnumValueDefinition",e.INPUT_OBJECT_TYPE_DEFINITION="InputObjectTypeDefinition",e.DIRECTIVE_DEFINITION="DirectiveDefinition",e.SCHEMA_EXTENSION="SchemaExtension",e.SCALAR_TYPE_EXTENSION="ScalarTypeExtension",e.OBJECT_TYPE_EXTENSION="ObjectTypeExtension",e.INTERFACE_TYPE_EXTENSION="InterfaceTypeExtension",e.UNION_TYPE_EXTENSION="UnionTypeExtension",e.ENUM_TYPE_EXTENSION="EnumTypeExtension",e.INPUT_OBJECT_TYPE_EXTENSION="InputObjectTypeExtension"}(Cl||(Cl={}));var Pl=/[\x00-\x1f\x22\x5c\x7f-\x9f]/g;function Tl(e){return Ml[e.charCodeAt(0)]}var Ml=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000B","\\f","\\r","\\u000E","\\u000F","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001A","\\u001B","\\u001C","\\u001D","\\u001E","\\u001F","","",'\\"',"","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\u007F","\\u0080","\\u0081","\\u0082","\\u0083","\\u0084","\\u0085","\\u0086","\\u0087","\\u0088","\\u0089","\\u008A","\\u008B","\\u008C","\\u008D","\\u008E","\\u008F","\\u0090","\\u0091","\\u0092","\\u0093","\\u0094","\\u0095","\\u0096","\\u0097","\\u0098","\\u0099","\\u009A","\\u009B","\\u009C","\\u009D","\\u009E","\\u009F"],Fl=Object.freeze({});function zl(e,t,r=Al){let n=new Map;for(let g of Object.values(Cl))n.set(g,Nl(t,g));let o,i,a,s=Array.isArray(e),l=[e],c=-1,u=[],d=e,h=[],p=[];do{let e,g=++c===l.length,y=g&&0!==u.length;if(g){if(i=0===p.length?void 0:h[h.length-1],d=a,a=p.pop(),y)if(s){d=d.slice();let e=0;for(let[t,r]of u){let n=t-e;null===r?(d.splice(n,1),e++):d[n]=r}}else{d=Object.defineProperties({},Object.getOwnPropertyDescriptors(d));for(let[e,t]of u)d[e]=t}c=o.index,l=o.keys,u=o.edits,s=o.inArray,o=o.prev}else if(a){if(null==(d=a[i=s?c:l[c]]))continue;h.push(i)}if(!Array.isArray(d)){var f,v;$l(d)||Sl(!1,`
											Invalid AST Node: $ {
												jl(d)
											}.
											`);let r=g?null===(f=n.get(d.kind))||void 0===f?void 0:f.leave:null===(v=n.get(d.kind))||void 0===v?void 0:v.enter;if((e=null==r?void 0:r.call(t,d,i,a,h,p))===Fl)break;if(!1===e){if(!g){h.pop();continue}}else if(void 0!==e&&(u.push([i,e]),!g)){if(!$l(e)){h.pop();continue}d=e}}var m;if(void 0===e&&y&&u.push([i,d]),g)h.pop();else o={inArray:s,index:c,keys:l,edits:u,prev:o},l=(s=Array.isArray(d))?d:null!==(m=r[d.kind])&&void 0!==m?m:[],c=-1,u=[],a&&p.push(a),a=d}while(void 0!==o);return 0!==u.length?u[u.length-1][1]:e}function Nl(e,t){let r=e[t];return"object"==typeof r?r:"function"==typeof r?{enter:r,leave:void 0}:{enter:e.enter,leave:e.leave}}function Ll(e){return zl(e,Bl)}var Bl={Name:{leave:e=>e.value},Variable:{leave:e=>"$"+e.name},Document:{leave:e=>ql(e.definitions,"\n\n")},OperationDefinition:{leave(e){let t=Vl("(",ql(e.variableDefinitions,", "),")"),r=ql([e.operation,ql([e.name,t]),ql(e.directives," ")]," ");return("query"===r?"":r+" ")+e.selectionSet}},VariableDefinition:{leave:({variable:e,type:t,defaultValue:r,directives:n})=>e+": "+t+Vl(" = ",r)+Vl(" ",ql(n," "))},SelectionSet:{leave:({selections:e})=>Ul(e)},Field:{leave({alias:e,name:t,arguments:r,directives:n,selectionSet:o}){let i=Vl("",e,": ")+t,a=i+Vl("(",ql(r,", "),")");return a.length>80&&(a=i+Vl("(\n",Ql(ql(r,"\n")),"\n)")),ql([a,ql(n," "),o]," ")}},Argument:{leave:({name:e,value:t})=>e+": "+t},FragmentSpread:{leave:({name:e,directives:t})=>"..."+e+Vl(" ",ql(t," "))},InlineFragment:{leave:({typeCondition:e,directives:t,selectionSet:r})=>ql(["...",Vl("on ",e),ql(t," "),r]," ")},FragmentDefinition:{leave:({name:e,typeCondition:t,variableDefinitions:r,directives:n,selectionSet:o})=>`
											fragment $ {
												e
											}
											$ {
												Vl("(", ql(r, ", "), ")")
											}
											on $ {
												t
											}
											$ {
												Vl("", ql(n, " "), " ")
											}
											`+o},IntValue:{leave:({value:e})=>e},FloatValue:{leave:({value:e})=>e},StringValue:{leave:({value:e,block:t})=>t?function(e,t){let r=e.replace(/"""/g,'\\"""'),n=r.split(/\r\n|[\n\r]/g),o=1===n.length,i=n.length>1&&n.slice(1).every(e=>0===e.length||Rl(e.charCodeAt(0))),a=r.endsWith('\\"""'),s=e.endsWith('"')&&!a,l=e.endsWith("\\"),c=s||l,u=!(null!=t&&t.minimize)&&(!o||e.length>70||c||i||a),d="",h=o&&Rl(e.charCodeAt(0));return(u&&!h||i)&&(d+="\n"),d+=r,(u||c)&&(d+="\n"),'"""'+d+'"""'}(e):function(e){return`
											"${e.replace(Pl,Tl)}"
											`}(e)},BooleanValue:{leave:({value:e})=>e?"true":"false"},NullValue:{leave:()=>"null"},EnumValue:{leave:({value:e})=>e},ListValue:{leave:({values:e})=>"["+ql(e,", ")+"]"},ObjectValue:{leave:({fields:e})=>"{"+ql(e,", ")+"}"},ObjectField:{leave:({name:e,value:t})=>e+": "+t},Directive:{leave:({name:e,arguments:t})=>"@"+e+Vl("(",ql(t,", "),")")},NamedType:{leave:({name:e})=>e},ListType:{leave:({type:e})=>"["+e+"]"},NonNullType:{leave:({type:e})=>e+"!"},SchemaDefinition:{leave:({description:e,directives:t,operationTypes:r})=>Vl("",e,"\n")+ql(["schema",ql(t," "),Ul(r)]," ")},OperationTypeDefinition:{leave:({operation:e,type:t})=>e+": "+t},ScalarTypeDefinition:{leave:({description:e,name:t,directives:r})=>Vl("",e,"\n")+ql(["scalar",t,ql(r," ")]," ")},ObjectTypeDefinition:{leave:({description:e,name:t,interfaces:r,directives:n,fields:o})=>Vl("",e,"\n")+ql(["type",t,Vl("implements ",ql(r," & ")),ql(n," "),Ul(o)]," ")},FieldDefinition:{leave:({description:e,name:t,arguments:r,type:n,directives:o})=>Vl("",e,"\n")+t+(Hl(r)?Vl("(\n",Ql(ql(r,"\n")),"\n)"):Vl("(",ql(r,", "),")"))+": "+n+Vl(" ",ql(o," "))},InputValueDefinition:{leave:({description:e,name:t,type:r,defaultValue:n,directives:o})=>Vl("",e,"\n")+ql([t+": "+r,Vl("= ",n),ql(o," ")]," ")},InterfaceTypeDefinition:{leave:({description:e,name:t,interfaces:r,directives:n,fields:o})=>Vl("",e,"\n")+ql(["interface",t,Vl("implements ",ql(r," & ")),ql(n," "),Ul(o)]," ")},UnionTypeDefinition:{leave:({description:e,name:t,directives:r,types:n})=>Vl("",e,"\n")+ql(["union",t,ql(r," "),Vl("= ",ql(n," | "))]," ")},EnumTypeDefinition:{leave:({description:e,name:t,directives:r,values:n})=>Vl("",e,"\n")+ql(["enum",t,ql(r," "),Ul(n)]," ")},EnumValueDefinition:{leave:({description:e,name:t,directives:r})=>Vl("",e,"\n")+ql([t,ql(r," ")]," ")},InputObjectTypeDefinition:{leave:({description:e,name:t,directives:r,fields:n})=>Vl("",e,"\n")+ql(["input",t,ql(r," "),Ul(n)]," ")},DirectiveDefinition:{leave:({description:e,name:t,arguments:r,repeatable:n,locations:o})=>Vl("",e,"\n")+"directive @"+t+(Hl(r)?Vl("(\n",Ql(ql(r,"\n")),"\n)"):Vl("(",ql(r,", "),")"))+(n?" repeatable":"")+" on "+ql(o," | ")},SchemaExtension:{leave:({directives:e,operationTypes:t})=>ql(["extend schema",ql(e," "),Ul(t)]," ")},ScalarTypeExtension:{leave:({name:e,directives:t})=>ql(["extend scalar",e,ql(t," ")]," ")},ObjectTypeExtension:{leave:({name:e,interfaces:t,directives:r,fields:n})=>ql(["extend type",e,Vl("implements ",ql(t," & ")),ql(r," "),Ul(n)]," ")},InterfaceTypeExtension:{leave:({name:e,interfaces:t,directives:r,fields:n})=>ql(["extend interface",e,Vl("implements ",ql(t," & ")),ql(r," "),Ul(n)]," ")},UnionTypeExtension:{leave:({name:e,directives:t,types:r})=>ql(["extend union",e,ql(t," "),Vl("= ",ql(r," | "))]," ")},EnumTypeExtension:{leave:({name:e,directives:t,values:r})=>ql(["extend enum",e,ql(t," "),Ul(r)]," ")},InputObjectTypeExtension:{leave:({name:e,directives:t,fields:r})=>ql(["extend input",e,ql(t," "),Ul(r)]," ")}};function ql(e,t=""){var r;return null!==(r=null==e?void 0:e.filter(e=>e).join(t))&&void 0!==r?r:""}function Ul(e){return Vl("{\n",Ql(ql(e,"\n")),"\n}")}function Vl(e,t,r=""){return null!=t&&""!==t?e+t+r:""}function Ql(e){return Vl("  ",e.replace(/\n/g,"\n  "))}function Hl(e){var t;return null!==(t=null==e?void 0:e.some(e=>e.includes("\n")))&&void 0!==t&&t}function Wl(e,t){var r=e.directives;return!r||!r.length||function(e){var t=[];return e&&e.length&&e.forEach((function(e){if(function(e){var t=e.name.value;return"skip"===t||"include"===t}(e)){var r=e.arguments,n=e.name.value;__DEV__?hl(r&&1===r.length,"Incorrect number of arguments for the @".concat(n," directive.")):hl(r&&1===r.length,38);var o=r[0];__DEV__?hl(o.name&&"if"===o.name.value,"Invalid argument for the @".concat(n," directive.")):hl(o.name&&"if"===o.name.value,39);var i=o.value;__DEV__?hl(i&&("Variable"===i.kind||"BooleanValue"===i.kind),"Argument for the @".concat(n," directive must be a variable or a boolean value.")):hl(i&&("Variable"===i.kind||"BooleanValue"===i.kind),40),t.push({directive:e,ifArgument:o})}})),t}(r).every((function(e){var r=e.directive,n=e.ifArgument,o=!1;return"Variable"===n.value.kind?(o=t&&t[n.value.name.value],__DEV__?hl(void 0!==o,"Invalid variable referenced in @".concat(r.name.value," directive.")):hl(void 0!==o,37)):o=n.value.value,"skip"===r.name.value?!o:o}))}function Gl(e,t){return function(e){var t=[];return zl(e,{Directive:function(e){t.push(e.name.value)}}),t}(t).some((function(t){return e.indexOf(t)>-1}))}function Yl(e){return e&&Gl(["client"],e)&&Gl(["export"],e)}function Jl(e,t){var r=t,n=[];return e.definitions.forEach((function(e){if("OperationDefinition"===e.kind)throw __DEV__?new dl("Found a ".concat(e.operation," operation").concat(e.name?" named '".concat(e.name.value,"'"):"",". ")+"No operations are allowed when using a fragment as a query. Only fragments are allowed."):new dl(41);"FragmentDefinition"===e.kind&&n.push(e)})),typeof r>"u"&&(__DEV__?hl(1===n.length,"Found ".concat(n.length," fragments. `
											fragmentName` must be provided when there is not exactly 1 fragment.")):hl(1===n.length,42),r=n[0].name.value),An(An({},e),{definitions:Bn([{kind:"OperationDefinition",operation:"query",selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:r}}]}}],e.definitions,!0)})}function Kl(e){void 0===e&&(e=[]);var t={};return e.forEach((function(e){t[e.name.value]=e})),t}function Xl(e,t){switch(e.kind){case"InlineFragment":return e;case"FragmentSpread":var r=t&&t[e.name.value];return __DEV__?hl(r,"No fragment named ".concat(e.name.value,".")):hl(r,43),r;default:return null}}function Zl(e){return null!==e&&"object"==typeof e}function ec(e){return{__ref:String(e)}}function tc(e){return Boolean(e&&"object"==typeof e&&"string"==typeof e.__ref)}function rc(e,t,r,n){if(function(e){return"IntValue"===e.kind}(r)||function(e){return"FloatValue"===e.kind}(r))e[t.value]=Number(r.value);else if(function(e){return"BooleanValue"===e.kind}(r)||function(e){return"StringValue"===e.kind}(r))e[t.value]=r.value;else if(function(e){return"ObjectValue"===e.kind}(r)){var o={};r.fields.map((function(e){return rc(o,e.name,e.value,n)})),e[t.value]=o}else if(function(e){return"Variable"===e.kind}(r)){var i=(n||{})[r.name.value];e[t.value]=i}else if(function(e){return"ListValue"===e.kind}(r))e[t.value]=r.values.map((function(e){var r={};return rc(r,t,e,n),r[t.value]}));else if(function(e){return"EnumValue"===e.kind}(r))e[t.value]=r.value;else{if(!function(e){return"NullValue"===e.kind}(r))throw __DEV__?new dl('The inline argument "'.concat(t.value,'" of kind "').concat(r.kind,'"')+"is not supported. Use variables instead of inline arguments to overcome this limitation."):new dl(52);e[t.value]=null}}El(),__DEV__?hl("boolean"==typeof _l,_l):hl("boolean"==typeof _l,36);var nc=["connection","include","skip","client","rest","export"],oc=Object.assign((function(e,t,r){if(t&&r&&r.connection&&r.connection.key){if(r.connection.filter&&r.connection.filter.length>0){var n=r.connection.filter?r.connection.filter:[];n.sort();var o={};return n.forEach((function(e){o[e]=t[e]})),"".concat(r.connection.key,"(").concat(ic(o),")")}return r.connection.key}var i=e;if(t){var a=ic(t);i+="(".concat(a,")")}return r&&Object.keys(r).forEach((function(e){-1===nc.indexOf(e)&&(r[e]&&Object.keys(r[e]).length?i+="@".concat(e,"(").concat(ic(r[e]),")"):i+="@".concat(e))})),i}),{setStringify:function(e){var t=ic;return ic=e,t}}),ic=function(e){return JSON.stringify(e,ac)};function ac(e,t){return Zl(t)&&!Array.isArray(t)&&(t=Object.keys(t).sort().reduce((function(e,r){return e[r]=t[r],e}),{})),t}function sc(e,t){if(e.arguments&&e.arguments.length){var r={};return e.arguments.forEach((function(e){var n=e.name,o=e.value;return rc(r,n,o,t)})),r}return null}function lc(e){return e.alias?e.alias.value:e.name.value}function cc(e,t,r){if("string"==typeof e.__typename)return e.__typename;for(var n=0,o=t.selections;n<o.length;n++){var i=o[n];if(uc(i)){if("__typename"===i.name.value)return e[lc(i)]}else{var a=cc(e,Xl(i,r).selectionSet,r);if("string"==typeof a)return a}}}function uc(e){return"Field"===e.kind}function dc(e){return"InlineFragment"===e.kind}function hc(e){__DEV__?hl(e&&"Document"===e.kind,'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql'):hl(e&&"Document"===e.kind,44);var t=e.definitions.filter((function(e){return"FragmentDefinition"!==e.kind})).map((function(e){if("OperationDefinition"!==e.kind)throw __DEV__?new dl('Schema type definitions not allowed in queries. Found: "'.concat(e.kind,'"')):new dl(45);return e}));return __DEV__?hl(t.length<=1,"Ambiguous GraphQL document: contains ".concat(t.length," operations")):hl(t.length<=1,46),e}function pc(e){return hc(e),e.definitions.filter((function(e){return"OperationDefinition"===e.kind}))[0]}function fc(e){return e.definitions.filter((function(e){return"OperationDefinition"===e.kind&&e.name})).map((function(e){return e.name.value}))[0]||null}function vc(e){return e.definitions.filter((function(e){return"FragmentDefinition"===e.kind}))}function mc(e){var t=pc(e);return __DEV__?hl(t&&"query"===t.operation,"Must contain a query definition."):hl(t&&"query"===t.operation,47),t}function gc(e){hc(e);for(var t,r=0,n=e.definitions;r<n.length;r++){var o=n[r];if("OperationDefinition"===o.kind){var i=o.operation;if("query"===i||"mutation"===i||"subscription"===i)return o}"FragmentDefinition"===o.kind&&!t&&(t=o)}if(t)return t;throw __DEV__?new dl("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment."):new dl(51)}function yc(e){var t=Object.create(null),r=e&&e.variableDefinitions;return r&&r.length&&r.forEach((function(e){e.defaultValue&&rc(t,e.variable.name,e.defaultValue)})),t}function bc(e,t,r){var n=0;return e.forEach((function(r,o){t.call(this,r,o,e)&&(e[n++]=r)}),r),e.length=n,e}var _c={kind:"Field",name:{kind:"Name",value:"__typename"}};function wc(e){return function e(t,r){return t.selectionSet.selections.every((function(t){return"FragmentSpread"===t.kind&&e(r[t.name.value],r)}))}(pc(e)||function(e){__DEV__?hl("Document"===e.kind,'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql'):hl("Document"===e.kind,48),__DEV__?hl(e.definitions.length<=1,"Fragment must have exactly one definition."):hl(e.definitions.length<=1,49);var t=e.definitions[0];return __DEV__?hl("FragmentDefinition"===t.kind,"Must be a fragment definition."):hl("FragmentDefinition"===t.kind,50),t}(e),Kl(vc(e)))?null:e}function xc(e){return function(t){return e.some((function(e){return e.name&&e.name===t.name.value||e.test&&e.test(t)}))}}function kc(e,t){var r=Object.create(null),n=[],o=Object.create(null),i=[],a=wc(zl(t,{Variable:{enter:function(e,t,n){"VariableDefinition"!==n.kind&&(r[e.name.value]=!0)}},Field:{enter:function(t){if(e&&t.directives&&(e.some((function(e){return e.remove}))&&t.directives&&t.directives.some(xc(e))))return t.arguments&&t.arguments.forEach((function(e){"Variable"===e.value.kind&&n.push({name:e.value.name.value})})),t.selectionSet&&function e(t){var r=[];return t.selections.forEach((function(t){(uc(t)||dc(t))&&t.selectionSet?e(t.selectionSet).forEach((function(e){return r.push(e)})):"FragmentSpread"===t.kind&&r.push(t)})),r}(t.selectionSet).forEach((function(e){i.push({name:e.name.value})})),null}},FragmentSpread:{enter:function(e){o[e.name.value]=!0}},Directive:{enter:function(t){if(xc(e)(t))return null}}}));return a&&bc(n,(function(e){return!!e.name&&!r[e.name]})).length&&(a=function(e,t){var r=function(e){return function(t){return e.some((function(e){return t.value&&"Variable"===t.value.kind&&t.value.name&&(e.name===t.value.name.value||e.test&&e.test(t))}))}}(e);return wc(zl(t,{OperationDefinition:{enter:function(t){return An(An({},t),{variableDefinitions:t.variableDefinitions?t.variableDefinitions.filter((function(t){return!e.some((function(e){return e.name===t.variable.name.value}))})):[]})}},Field:{enter:function(t){if(e.some((function(e){return e.remove}))){var n=0;if(t.arguments&&t.arguments.forEach((function(e){r(e)&&(n+=1)})),1===n)return null}}},Argument:{enter:function(e){if(r(e))return null}}}))}(n,a)),a&&bc(i,(function(e){return!!e.name&&!o[e.name]})).length&&(a=function(e,t){function r(t){if(e.some((function(e){return e.name===t.name.value})))return null}return wc(zl(t,{FragmentSpread:{enter:r},FragmentDefinition:{enter:r}}))}(i,a)),a}var Ec=Object.assign((function(e){return zl(e,{SelectionSet:{enter:function(e,t,r){if(!r||"OperationDefinition"!==r.kind){var n=e.selections;if(n)if(!n.some((function(e){return uc(e)&&("__typename"===e.name.value||0===e.name.value.lastIndexOf("__",0))}))){var o=r;if(!(uc(o)&&o.directives&&o.directives.some((function(e){return"export"===e.name.value}))))return An(An({},e),{selections:Bn(Bn([],n,!0),[_c],!1)})}}}}})}),{added:function(e){return e===_c}}),Sc={test:function(e){var t="connection"===e.name.value;return t&&(!e.arguments||!e.arguments.some((function(e){return"key"===e.name.value})))&&__DEV__&&hl.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key."),t}};function Oc(e){return"query"===gc(e).operation?e:zl(e,{OperationDefinition:{enter:function(e){return An(An({},e),{operation:"query"})}}})}var Cc=Object.prototype.hasOwnProperty;function Ac(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Dc(e)}function Dc(e){var t=e[0]||{},r=e.length;if(r>1)for(var n=new Rc,o=1;o<r;++o)t=n.merge(t,e[o]);return t}var $c=function(e,t,r){return this.merge(e[r],t[r])},Rc=function(){function e(e){void 0===e&&(e=$c),this.reconciler=e,this.isObject=Zl,this.pastCopies=new Set}return e.prototype.merge=function(e,t){for(var r=this,n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return Zl(t)&&Zl(e)?(Object.keys(t).forEach((function(o){if(Cc.call(e,o)){var i=e[o];if(t[o]!==i){var a=r.reconciler.apply(r,Bn([e,t,o],n,!1));a!==i&&((e=r.shallowCopyForMerge(e))[o]=a)}}else(e=r.shallowCopyForMerge(e))[o]=t[o]})),e):t},e.prototype.shallowCopyForMerge=function(e){return Zl(e)&&(this.pastCopies.has(e)||(e=Array.isArray(e)?e.slice(0):An({__proto__:Object.getPrototypeOf(e)},e),this.pastCopies.add(e))),e},e}();function jc(e,t){var r=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return Ic(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ic(e,t)}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Ic(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Pc(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Tc(e,t,r){return t&&Pc(e.prototype,t),r&&Pc(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var Mc=function(){return"function"==typeof Symbol},Fc=function(e){return Mc()&&Boolean(Symbol[e])},zc=function(e){return Fc(e)?Symbol[e]:"@@"+e};Mc()&&!Fc("observable")&&(Symbol.observable=Symbol("observable"));var Nc=zc("iterator"),Lc=zc("observable"),Bc=zc("species");function qc(e,t){var r=e[t];if(null!=r){if("function"!=typeof r)throw new TypeError(r+" is not a function");return r}}function Uc(e){var t=e.constructor;return void 0!==t&&(null===(t=t[Bc])&&(t=void 0)),void 0!==t?t:Xc}function Vc(e){Vc.log?Vc.log(e):setTimeout((function(){throw e}))}function Qc(e){Promise.resolve().then((function(){try{e()}catch(t){Vc(t)}}))}function Hc(e){var t=e._cleanup;if(void 0!==t&&(e._cleanup=void 0,t))try{if("function"==typeof t)t();else{var r=qc(t,"unsubscribe");r&&r.call(t)}}catch(n){Vc(n)}}function Wc(e){e._observer=void 0,e._queue=void 0,e._state="closed"}function Gc(e,t,r){e._state="running";var n=e._observer;try{var o=qc(n,t);switch(t){case"next":o&&o.call(n,r);break;case"error":if(Wc(e),!o)throw r;o.call(n,r);break;case"complete":Wc(e),o&&o.call(n)}}catch(i){Vc(i)}"closed"===e._state?Hc(e):"running"===e._state&&(e._state="ready")}function Yc(e,t,r){if("closed"!==e._state){if("buffering"===e._state)return void e._queue.push({type:t,value:r});if("ready"!==e._state)return e._state="buffering",e._queue=[{type:t,value:r}],void Qc((function(){return function(e){var t=e._queue;if(t){e._queue=void 0,e._state="ready";for(var r=0;r<t.length&&(Gc(e,t[r].type,t[r].value),"closed"!==e._state);++r);}}(e)}));Gc(e,t,r)}}var Jc=function(){function e(e,t){this._cleanup=void 0,this._observer=e,this._queue=void 0,this._state="initializing";var r=new Kc(this);try{this._cleanup=t.call(void 0,r)}catch(n){r.error(n)}"initializing"===this._state&&(this._state="ready")}return e.prototype.unsubscribe=function(){"closed"!==this._state&&(Wc(this),Hc(this))},Tc(e,[{key:"closed",get:function(){return"closed"===this._state}}]),e}(),Kc=function(){function e(e){this._subscription=e}var t=e.prototype;return t.next=function(e){Yc(this._subscription,"next",e)},t.error=function(e){Yc(this._subscription,"error",e)},t.complete=function(){Yc(this._subscription,"complete")},Tc(e,[{key:"closed",get:function(){return"closed"===this._subscription._state}}]),e}(),Xc=function(){function e(t){if(!(this instanceof e))throw new TypeError("Observable cannot be called as a function");if("function"!=typeof t)throw new TypeError("Observable initializer must be a function");this._subscriber=t}var t=e.prototype;return t.subscribe=function(e){return("object"!=typeof e||null===e)&&(e={next:e,error:arguments[1],complete:arguments[2]}),new Jc(e,this._subscriber)},t.forEach=function(e){var t=this;return new Promise((function(r,n){if("function"==typeof e)var o=t.subscribe({next:function(t){try{e(t,i)}catch(r){n(r),o.unsubscribe()}},error:n,complete:r});else n(new TypeError(e+" is not a function"));function i(){o.unsubscribe(),r()}}))},t.map=function(e){var t=this;if("function"!=typeof e)throw new TypeError(e+" is not a function");return new(Uc(this))((function(r){return t.subscribe({next:function(t){try{t=e(t)}catch(n){return r.error(n)}r.next(t)},error:function(e){r.error(e)},complete:function(){r.complete()}})}))},t.filter=function(e){var t=this;if("function"!=typeof e)throw new TypeError(e+" is not a function");return new(Uc(this))((function(r){return t.subscribe({next:function(t){try{if(!e(t))return}catch(n){return r.error(n)}r.next(t)},error:function(e){r.error(e)},complete:function(){r.complete()}})}))},t.reduce=function(e){var t=this;if("function"!=typeof e)throw new TypeError(e+" is not a function");var r=Uc(this),n=arguments.length>1,o=!1,i=arguments[1],a=i;return new r((function(r){return t.subscribe({next:function(t){var i=!o;if(o=!0,!i||n)try{a=e(a,t)}catch(s){return r.error(s)}else a=t},error:function(e){r.error(e)},complete:function(){if(!o&&!n)return r.error(new TypeError("Cannot reduce an empty sequence"));r.next(a),r.complete()}})}))},t.concat=function(){for(var e=this,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var o=Uc(this);return new o((function(t){var n,i=0;return function e(a){n=a.subscribe({next:function(e){t.next(e)},error:function(e){t.error(e)},complete:function(){i===r.length?(n=void 0,t.complete()):e(o.from(r[i++]))}})}(e),function(){n&&(n.unsubscribe(),n=void 0)}}))},t.flatMap=function(e){var t=this;if("function"!=typeof e)throw new TypeError(e+" is not a function");var r=Uc(this);return new r((function(n){var o=[],i=t.subscribe({next:function(t){if(e)try{t=e(t)}catch(s){return n.error(s)}var i=r.from(t).subscribe({next:function(e){n.next(e)},error:function(e){n.error(e)},complete:function(){var e=o.indexOf(i);e>=0&&o.splice(e,1),a()}});o.push(i)},error:function(e){n.error(e)},complete:function(){a()}});function a(){i.closed&&0===o.length&&n.complete()}return function(){o.forEach((function(e){return e.unsubscribe()})),i.unsubscribe()}}))},t[Lc]=function(){return this},e.from=function(t){var r="function"==typeof this?this:e;if(null==t)throw new TypeError(t+" is not an object");var n=qc(t,Lc);if(n){var o=n.call(t);if(Object(o)!==o)throw new TypeError(o+" is not an object");return function(e){return e instanceof Xc}(o)&&o.constructor===r?o:new r((function(e){return o.subscribe(e)}))}if(Fc("iterator")&&(n=qc(t,Nc)))return new r((function(e){Qc((function(){if(!e.closed){for(var r,o=jc(n.call(t));!(r=o()).done;){var i=r.value;if(e.next(i),e.closed)return}e.complete()}}))}));if(Array.isArray(t))return new r((function(e){Qc((function(){if(!e.closed){for(var r=0;r<t.length;++r)if(e.next(t[r]),e.closed)return;e.complete()}}))}));throw new TypeError(t+" is not observable")},e.of=function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var o="function"==typeof this?this:e;return new o((function(e){Qc((function(){if(!e.closed){for(var t=0;t<r.length;++t)if(e.next(r[t]),e.closed)return;e.complete()}}))}))},Tc(e,null,[{key:Bc,get:function(){return this}}]),e}();Mc()&&Object.defineProperty(Xc,Symbol("extensions"),{value:{symbol:Lc,hostReportError:Vc},configurable:!0});!function(e){var t,r=e.Symbol;if("function"==typeof r)if(r.observable)t=r.observable;else{t="function"==typeof r.for?r.for("https://github.com/benlesh/symbol-observable"):r("https://github.com/benlesh/symbol-observable");try{r.observable=t}catch{}}else t="@@observable"}(typeof self<"u"?self:typeof window<"u"?window:typeof e<"u"?e:typeof n<"u"?n:Function("return this")());var Zc=Xc.prototype,eu="@@observable";Zc[eu]||(Zc[eu]=function(){return this});var tu=Object.prototype.toString;function ru(e){return function e(t,r){switch(tu.call(t)){case"[object Array]":if((r=r||new Map).has(t))return r.get(t);var n=t.slice(0);return r.set(t,n),n.forEach((function(t,o){n[o]=e(t,r)})),n;case"[object Object]":if((r=r||new Map).has(t))return r.get(t);var o=Object.create(Object.getPrototypeOf(t));return r.set(t,o),Object.keys(t).forEach((function(n){o[n]=e(t[n],r)})),o;default:return t}}(e)}function nu(e){var t=new Set([e]);return t.forEach((function(e){Zl(e)&&function(e){if(__DEV__&&!Object.isFrozen(e))try{Object.freeze(e)}catch(t){if(t instanceof TypeError)return null;throw t}return e}(e)===e&&Object.getOwnPropertyNames(e).forEach((function(r){Zl(e[r])&&t.add(e[r])}))})),e}function ou(e){return __DEV__&&nu(e),e}function iu(e,t,r){var n=[];e.forEach((function(e){return e[t]&&n.push(e)})),n.forEach((function(e){return e[t](r)}))}function au(e,t,r){return new Xc((function(n){var o=n.next,i=n.error,a=n.complete,s=0,l=!1,c={then:function(e){return new Promise((function(t){return t(e())}))}};function u(e,t){return e?function(t){++s;var r=function(){return e(t)};c=c.then(r,r).then((function(e){--s,o&&o.call(n,e),l&&d.complete()}),(function(e){throw--s,e})).catch((function(e){i&&i.call(n,e)}))}:function(e){return t&&t.call(n,e)}}var d={next:u(t,o),error:u(r,i),complete:function(){l=!0,s||a&&a.call(n)}},h=e.subscribe(d);return function(){return h.unsubscribe()}}))}var su="function"==typeof WeakMap&&"ReactNative"!==ml((function(){return navigator.product})),lu="function"==typeof WeakSet,cu="function"==typeof Symbol&&"function"==typeof Symbol.for;ml((function(){return window.document.createElement})),ml((function(){return navigator.userAgent.indexOf("jsdom")>=0}));function uu(e){function t(t){Object.defineProperty(e,t,{value:Xc})}return cu&&Symbol.species&&t(Symbol.species),t("@@species"),e}function du(e){return e&&"function"==typeof e.then}var hu=function(e){function t(t){var r=e.call(this,(function(e){return r.addObserver(e),function(){return r.removeObserver(e)}}))||this;return r.observers=new Set,r.addCount=0,r.promise=new Promise((function(e,t){r.resolve=e,r.reject=t})),r.handlers={next:function(e){null!==r.sub&&(r.latest=["next",e],iu(r.observers,"next",e))},error:function(e){var t=r.sub;null!==t&&(t&&setTimeout((function(){return t.unsubscribe()})),r.sub=null,r.latest=["error",e],r.reject(e),iu(r.observers,"error",e))},complete:function(){var e=r.sub;if(null!==e){var t=r.sources.shift();t?du(t)?t.then((function(e){return r.sub=e.subscribe(r.handlers)})):r.sub=t.subscribe(r.handlers):(e&&setTimeout((function(){return e.unsubscribe()})),r.sub=null,r.latest&&"next"===r.latest[0]?r.resolve(r.latest[1]):r.resolve(),iu(r.observers,"complete"))}}},r.cancel=function(e){r.reject(e),r.sources=[],r.handlers.complete()},r.promise.catch((function(e){})),"function"==typeof t&&(t=[new Xc(t)]),du(t)?t.then((function(e){return r.start(e)}),r.handlers.error):r.start(t),r}return Cn(t,e),t.prototype.start=function(e){void 0===this.sub&&(this.sources=Array.from(e),this.handlers.complete())},t.prototype.deliverLastMessage=function(e){if(this.latest){var t=this.latest[0],r=e[t];r&&r.call(e,this.latest[1]),null===this.sub&&"next"===t&&e.complete&&e.complete()}},t.prototype.addObserver=function(e){this.observers.has(e)||(this.deliverLastMessage(e),this.observers.add(e),++this.addCount)},t.prototype.removeObserver=function(e,t){this.observers.delete(e)&&--this.addCount<1&&!t&&this.handlers.complete()},t.prototype.cleanup=function(e){var t=this,r=!1,n=function(){r||(r=!0,t.observers.delete(o),e())},o={next:n,error:n,complete:n},i=this.addCount;this.addObserver(o),this.addCount=i},t}(Xc);function pu(e){return Array.isArray(e)&&e.length>0}function fu(e){return e.errors&&e.errors.length>0||!1}function vu(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=Object.create(null);return e.forEach((function(e){!e||Object.keys(e).forEach((function(t){var n=e[t];void 0!==n&&(r[t]=n)}))})),r}uu(hu);var mu=new Map;function gu(e){var t=mu.get(e)||1;return mu.set(e,t+1),"".concat(e,":").concat(t,":").concat(Math.random().toString(36).slice(2))}function yu(e,t){return vu(e,t,t.variables&&{variables:An(An({},e&&e.variables),t.variables)})}function bu(e){return new Xc((function(t){t.error(e)}))}var _u=function(e,t,r){var n=new Error(r);throw n.name="ServerError",n.response=e,n.statusCode=e.status,n.result=t,n};function wu(e,t){return t?t(e):Xc.of()}function xu(e){return"function"==typeof e?new Su(e):e}function ku(e){return e.request.length<=1}var Eu=function(e){function t(t,r){var n=e.call(this,t)||this;return n.link=r,n}return Cn(t,e),t}(Error),Su=function(){function e(e){e&&(this.request=e)}return e.empty=function(){return new e((function(){return Xc.of()}))},e.from=function(t){return 0===t.length?e.empty():t.map(xu).reduce((function(e,t){return e.concat(t)}))},e.split=function(t,r,n){var o=xu(r),i=xu(n||new e(wu));return ku(o)&&ku(i)?new e((function(e){return t(e)?o.request(e)||Xc.of():i.request(e)||Xc.of()})):new e((function(e,r){return t(e)?o.request(e,r)||Xc.of():i.request(e,r)||Xc.of()}))},e.execute=function(e,t){return e.request(function(e,t){var r=An({},e);return Object.defineProperty(t,"setContext",{enumerable:!1,value:function(e){r=An(An({},r),"function"==typeof e?e(r):e)}}),Object.defineProperty(t,"getContext",{enumerable:!1,value:function(){return An({},r)}}),t}(t.context,function(e){var t={variables:e.variables||{},extensions:e.extensions||{},operationName:e.operationName,query:e.query};return t.operationName||(t.operationName="string"!=typeof t.query?fc(t.query)||void 0:""),t}(function(e){for(var t=["query","operationName","variables","extensions","context"],r=0,n=Object.keys(e);r<n.length;r++){var o=n[r];if(t.indexOf(o)<0)throw __DEV__?new dl("illegal argument: ".concat(o)):new dl(24)}return e}(t))))||Xc.of()},e.concat=function(t,r){var n=xu(t);if(ku(n))return __DEV__&&hl.warn(new Eu("You are calling concat on a terminating link, which will have no effect",n)),n;var o=xu(r);return ku(o)?new e((function(e){return n.request(e,(function(e){return o.request(e)||Xc.of()}))||Xc.of()})):new e((function(e,t){return n.request(e,(function(e){return o.request(e,t)||Xc.of()}))||Xc.of()}))},e.prototype.split=function(t,r,n){return this.concat(e.split(t,r,n||new e(wu)))},e.prototype.concat=function(t){return e.concat(this,t)},e.prototype.request=function(e,t){throw __DEV__?new dl("request is not implemented"):new dl(19)},e.prototype.onError=function(e,t){if(t&&t.error)return t.error(e),!1;throw e},e.prototype.setOnError=function(e){return this.onError=e,this},e}(),Ou=Su.execute,Cu="3.6.9",Au=Object.prototype.hasOwnProperty;var Du=function(e,t){var r;try{r=JSON.stringify(e)}catch(o){var n=__DEV__?new dl("Network request failed. ".concat(t," is not serializable: ").concat(o.message)):new dl(21);throw n.parseError=o,n}return r},$u={http:{includeQuery:!0,includeExtensions:!1},headers:{accept:"*/*","content-type":"application/json"},options:{method:"POST"}},Ru=function(e,t){return t(e)};function ju(e){if(e){var t=Object.create(null);return Object.keys(Object(e)).forEach((function(r){t[r.toLowerCase()]=e[r]})),t}return e}var Iu=ml((function(){return fetch})),Pu=function(e){void 0===e&&(e={});var t=e.uri,r=void 0===t?"/graphql":t,n=e.fetch,o=e.print,i=void 0===o?Ru:o,a=e.includeExtensions,s=e.useGETForQueries,l=e.includeUnusedVariables,c=void 0!==l&&l,u=Dn(e,["uri","fetch","print","includeExtensions","useGETForQueries","includeUnusedVariables"]);__DEV__&&function(e){if(!e&&typeof fetch>"u")throw __DEV__?new dl("\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    "):new dl(20)}(n||Iu);var d={http:{includeExtensions:a},options:u.fetchOptions,credentials:u.credentials,headers:u.headers};return new Su((function(e){var t=function(e,t){return e.getContext().uri||("function"==typeof t?t(e):t||"/graphql")}(e,r),a=e.getContext(),l={};if(a.clientAwareness){var u=a.clientAwareness,h=u.name,p=u.version;h&&(l["apollographql-client-name"]=h),p&&(l["apollographql-client-version"]=p)}var f,v=An(An({},l),a.headers),m={http:a.http,options:a.fetchOptions,credentials:a.credentials,headers:v},g=function(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];var o={},i={};r.forEach((function(e){o=An(An(An({},o),e.options),{headers:An(An({},o.headers),ju(e.headers))}),e.credentials&&(o.credentials=e.credentials),i=An(An({},i),e.http)}));var a=e.operationName,s=e.extensions,l=e.variables,c=e.query,u={operationName:a,variables:l};return i.includeExtensions&&(u.extensions=s),i.includeQuery&&(u.query=t(c,Ll)),{options:o,body:u}}(e,i,$u,d,m),y=g.options,b=g.body;if(b.variables&&!c){var _=new Set(Object.keys(b.variables));zl(e.query,{Variable:function(e,t,r){r&&"VariableDefinition"!==r.kind&&_.delete(e.name.value)}}),_.size&&(b.variables=An({},b.variables),_.forEach((function(e){delete b.variables[e]})))}if(!y.signal){var w=function(){if(typeof AbortController>"u")return{controller:!1,signal:!1};var e=new AbortController;return{controller:e,signal:e.signal}}(),x=w.controller,k=w.signal;(f=x)&&(y.signal=k)}if(s&&!e.query.definitions.some((function(e){return"OperationDefinition"===e.kind&&"mutation"===e.operation}))&&(y.method="GET"),"GET"===y.method){var E=function(e,t){var r=[],n=function(e,t){r.push("".concat(e,"=").concat(encodeURIComponent(t)))};if("query"in t&&n("query",t.query),t.operationName&&n("operationName",t.operationName),t.variables){var o=void 0;try{o=Du(t.variables,"Variables map")}catch(d){return{parseError:d}}n("variables",o)}if(t.extensions){var i=void 0;try{i=Du(t.extensions,"Extensions map")}catch(d){return{parseError:d}}n("extensions",i)}var a="",s=e,l=e.indexOf("#");-1!==l&&(a=e.substr(l),s=e.substr(0,l));var c=-1===s.indexOf("?")?"?":"&";return{newURI:s+c+r.join("&")+a}}(t,b),S=E.newURI,O=E.parseError;if(O)return bu(O);t=S}else try{y.body=Du(b,"Payload")}catch(C){return bu(C)}return new Xc((function(r){return(n||ml((function(){return fetch}))||Iu)(t,y).then((function(t){return e.setContext({response:t}),t})).then(function(e){return function(t){return t.text().then((function(e){try{return JSON.parse(e)}catch(o){var r=o;throw r.name="ServerParseError",r.response=t,r.statusCode=t.status,r.bodyText=e,r}})).then((function(r){return t.status>=300&&_u(t,r,"Response not successful: Received status code ".concat(t.status)),!Array.isArray(r)&&!Au.call(r,"data")&&!Au.call(r,"errors")&&_u(t,r,"Server response was missing for query '".concat(Array.isArray(e)?e.map((function(e){return e.operationName})):e.operationName,"'.")),r}))}}(e)).then((function(e){return r.next(e),r.complete(),e})).catch((function(e){"AbortError"!==e.name&&(e.result&&e.result.errors&&e.result.data&&r.next(e.result),r.error(e))})),function(){f&&f.abort()}}))}))},Tu=function(e){function t(t){void 0===t&&(t={});var r=e.call(this,Pu(t).request)||this;return r.options=t,r}return Cn(t,e),t}(Su),Mu=Object.prototype,Fu=Mu.toString,zu=Mu.hasOwnProperty,Nu=Function.prototype.toString,Lu=new Map;function Bu(e,t){try{return function e(t,r){if(t===r)return!0;var n=Fu.call(t),o=Fu.call(r);if(n!==o)return!1;switch(n){case"[object Array]":if(t.length!==r.length)return!1;case"[object Object]":if(Qu(t,r))return!0;var i=qu(t),a=qu(r),s=i.length;if(s!==a.length)return!1;for(var l=0;l<s;++l)if(!zu.call(r,i[l]))return!1;for(l=0;l<s;++l){var c=i[l];if(!e(t[c],r[c]))return!1}return!0;case"[object Error]":return t.name===r.name&&t.message===r.message;case"[object Number]":if(t!=t)return r!=r;case"[object Boolean]":case"[object Date]":return+t==+r;case"[object RegExp]":case"[object String]":return t=="".concat(r);case"[object Map]":case"[object Set]":if(t.size!==r.size)return!1;if(Qu(t,r))return!0;for(var u=t.entries(),d="[object Map]"===n;;){var h=u.next();if(h.done)break;var p=h.value,f=p[0],v=p[1];if(!r.has(f)||d&&!e(v,r.get(f)))return!1}return!0;case"[object Uint16Array]":case"[object Uint8Array]":case"[object Uint32Array]":case"[object Int32Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object ArrayBuffer]":t=new Uint8Array(t),r=new Uint8Array(r);case"[object DataView]":var m=t.byteLength;if(m===r.byteLength)for(;m--&&t[m]===r[m];);return-1===m;case"[object AsyncFunction]":case"[object GeneratorFunction]":case"[object AsyncGeneratorFunction]":case"[object Function]":var g=Nu.call(t);return g===Nu.call(r)&&!function(e,t){var r=e.length-t.length;return r>=0&&e.indexOf(t,r)===r}(g,Vu)}return!1}(e,t)}finally{Lu.clear()}}function qu(e){return Object.keys(e).filter(Uu,e)}function Uu(e){return void 0!==this[e]}var Vu="{ [native code] }";function Qu(e,t){var r=Lu.get(e);if(r){if(r.has(t))return!0}else Lu.set(e,r=new Set);return r.add(t),!1}var Hu=function(){return Object.create(null)},Wu=Array.prototype,Gu=Wu.forEach,Yu=Wu.slice,Ju=function(){function e(e,t){void 0===e&&(e=!0),void 0===t&&(t=Hu),this.weakness=e,this.makeData=t}return e.prototype.lookup=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this.lookupArray(e)},e.prototype.lookupArray=function(e){var t=this;return Gu.call(e,(function(e){return t=t.getChildTrie(e)})),t.data||(t.data=this.makeData(Yu.call(e)))},e.prototype.getChildTrie=function(t){var r=this.weakness&&function(e){switch(typeof e){case"object":if(null===e)break;case"function":return!0}return!1}(t)?this.weak||(this.weak=new WeakMap):this.strong||(this.strong=new Map),n=r.get(t);return n||r.set(t,n=new e(this.weakness,this.makeData)),n},e}();var Ku=null,Xu={},Zu=1,ed="@wry/context:Slot",td=Array,rd=td[ed]||function(){var e=function(){function e(){this.id=["slot",Zu++,Date.now(),Math.random().toString(36).slice(2)].join(":")}return e.prototype.hasValue=function(){for(var e=Ku;e;e=e.parent)if(this.id in e.slots){var t=e.slots[this.id];if(t===Xu)break;return e!==Ku&&(Ku.slots[this.id]=t),!0}return Ku&&(Ku.slots[this.id]=Xu),!1},e.prototype.getValue=function(){if(this.hasValue())return Ku.slots[this.id]},e.prototype.withValue=function(e,t,r,n){var o,i=((o={__proto__:null})[this.id]=e,o),a=Ku;Ku={parent:a,slots:i};try{return t.apply(n,r)}finally{Ku=a}},e.bind=function(e){var t=Ku;return function(){var r=Ku;try{return Ku=t,e.apply(this,arguments)}finally{Ku=r}}},e.noContext=function(e,t,r){if(!Ku)return e.apply(r,t);var n=Ku;try{return Ku=null,e.apply(r,t)}finally{Ku=n}},e}();try{Object.defineProperty(td,ed,{value:td[ed]=e,enumerable:!1,writable:!1,configurable:!1})}finally{return e}}();rd.bind,rd.noContext;function nd(){}var od,id=function(){function e(e,t){void 0===e&&(e=1/0),void 0===t&&(t=nd),this.max=e,this.dispose=t,this.map=new Map,this.newest=null,this.oldest=null}return e.prototype.has=function(e){return this.map.has(e)},e.prototype.get=function(e){var t=this.getNode(e);return t&&t.value},e.prototype.getNode=function(e){var t=this.map.get(e);if(t&&t!==this.newest){var r=t.older,n=t.newer;n&&(n.older=r),r&&(r.newer=n),t.older=this.newest,t.older.newer=t,t.newer=null,this.newest=t,t===this.oldest&&(this.oldest=n)}return t},e.prototype.set=function(e,t){var r=this.getNode(e);return r?r.value=t:(r={key:e,value:t,newer:null,older:this.newest},this.newest&&(this.newest.newer=r),this.newest=r,this.oldest=this.oldest||r,this.map.set(e,r),r.value)},e.prototype.clean=function(){for(;this.oldest&&this.map.size>this.max;)this.delete(this.oldest.key)},e.prototype.delete=function(e){var t=this.map.get(e);return!!t&&(t===this.newest&&(this.newest=t.older),t===this.oldest&&(this.oldest=t.newer),t.newer&&(t.newer.older=t.older),t.older&&(t.older.newer=t.newer),this.map.delete(e),this.dispose(t.value,e),!0)},e}(),ad=new rd,sd=Object.prototype.hasOwnProperty,ld=void 0===(od=Array.from)?function(e){var t=[];return e.forEach((function(e){return t.push(e)})),t}:od;function cd(e){var t=e.unsubscribe;"function"==typeof t&&(e.unsubscribe=void 0,t())}var ud=[],dd=100;function hd(e,t){if(!e)throw new Error(t||"assertion failure")}function pd(e){switch(e.length){case 0:throw new Error("unknown value");case 1:return e[0];case 2:throw e[1]}}var fd=function(){function e(t){this.fn=t,this.parents=new Set,this.childValues=new Map,this.dirtyChildren=null,this.dirty=!0,this.recomputing=!1,this.value=[],this.deps=null,++e.count}return e.prototype.peek=function(){if(1===this.value.length&&!gd(this))return vd(this),this.value[0]},e.prototype.recompute=function(e){return hd(!this.recomputing,"already recomputing"),vd(this),gd(this)?function(e,t){return Ed(e),ad.withValue(e,md,[e,t]),function(e,t){if("function"==typeof e.subscribe)try{cd(e),e.unsubscribe=e.subscribe.apply(null,t)}catch{return e.setDirty(),!1}return!0}(e,t)&&function(e){e.dirty=!1,!gd(e)&&bd(e)}(e),pd(e.value)}(this,e):pd(this.value)},e.prototype.setDirty=function(){this.dirty||(this.dirty=!0,this.value.length=0,yd(this),cd(this))},e.prototype.dispose=function(){var e=this;this.setDirty(),Ed(this),_d(this,(function(t,r){t.setDirty(),Sd(t,e)}))},e.prototype.forget=function(){this.dispose()},e.prototype.dependOn=function(e){e.add(this),this.deps||(this.deps=ud.pop()||new Set),this.deps.add(e)},e.prototype.forgetDeps=function(){var e=this;this.deps&&(ld(this.deps).forEach((function(t){return t.delete(e)})),this.deps.clear(),ud.push(this.deps),this.deps=null)},e.count=0,e}();function vd(e){var t=ad.getValue();if(t)return e.parents.add(t),t.childValues.has(e)||t.childValues.set(e,[]),gd(e)?wd(t,e):xd(t,e),t}function md(e,t){e.recomputing=!0,e.value.length=0;try{e.value[0]=e.fn.apply(null,t)}catch(r){e.value[1]=r}e.recomputing=!1}function gd(e){return e.dirty||!(!e.dirtyChildren||!e.dirtyChildren.size)}function yd(e){_d(e,wd)}function bd(e){_d(e,xd)}function _d(e,t){var r=e.parents.size;if(r)for(var n=ld(e.parents),o=0;o<r;++o)t(n[o],e)}function wd(e,t){hd(e.childValues.has(t)),hd(gd(t));var r=!gd(e);if(e.dirtyChildren){if(e.dirtyChildren.has(t))return}else e.dirtyChildren=ud.pop()||new Set;e.dirtyChildren.add(t),r&&yd(e)}function xd(e,t){hd(e.childValues.has(t)),hd(!gd(t));var r=e.childValues.get(t);0===r.length?e.childValues.set(t,function(e){return e.slice(0)}(t.value)):function(e,t){var r=e.length;return r>0&&r===t.length&&e[r-1]===t[r-1]}(r,t.value)||e.setDirty(),kd(e,t),!gd(e)&&bd(e)}function kd(e,t){var r=e.dirtyChildren;r&&(r.delete(t),0===r.size&&(ud.length<dd&&ud.push(r),e.dirtyChildren=null))}function Ed(e){e.childValues.size>0&&e.childValues.forEach((function(t,r){Sd(e,r)})),e.forgetDeps(),hd(null===e.dirtyChildren)}function Sd(e,t){t.parents.delete(e),e.childValues.delete(t),kd(e,t)}var Od={setDirty:!0,dispose:!0,forget:!0};function Cd(e){var t=new Map,r=e&&e.subscribe;function n(e){var n=ad.getValue();if(n){var o=t.get(e);o||t.set(e,o=new Set),n.dependOn(o),"function"==typeof r&&(cd(o),o.unsubscribe=r(e))}}return n.dirty=function(e,r){var n=t.get(e);if(n){var o=r&&sd.call(Od,r)?r:"setDirty";ld(n).forEach((function(e){return e[o]()})),t.delete(e),cd(n)}},n}function Ad(){var e=new Ju("function"==typeof WeakMap);return function(){return e.lookupArray(arguments)}}Ad();var Dd=new Set;function $d(e,t){void 0===t&&(t=Object.create(null));var r=new id(t.max||Math.pow(2,16),(function(e){return e.dispose()})),n=t.keyArgs,o=t.makeCacheKey||Ad(),i=function(){var i=o.apply(null,n?n.apply(null,arguments):arguments);if(void 0===i)return e.apply(null,arguments);var a=r.get(i);a||(r.set(i,a=new fd(e)),a.subscribe=t.subscribe,a.forget=function(){return r.delete(i)});var s=a.recompute(Array.prototype.slice.call(arguments));return r.set(i,a),Dd.add(r),ad.hasValue()||(Dd.forEach((function(e){return e.clean()})),Dd.clear()),s};function a(e){var t=r.get(e);t&&t.setDirty()}function s(e){var t=r.get(e);if(t)return t.peek()}function l(e){return r.delete(e)}return Object.defineProperty(i,"size",{get:function(){return r.map.size},configurable:!1,enumerable:!1}),i.dirtyKey=a,i.dirty=function(){a(o.apply(null,arguments))},i.peekKey=s,i.peek=function(){return s(o.apply(null,arguments))},i.forgetKey=l,i.forget=function(){return l(o.apply(null,arguments))},i.makeCacheKey=o,i.getKey=n?function(){return o.apply(null,n.apply(null,arguments))}:o,Object.freeze(i)}var Rd=function(){function e(){this.getFragmentDoc=$d(Jl)}return e.prototype.batch=function(e){var t,r=this,n="string"==typeof e.optimistic?e.optimistic:!1===e.optimistic?null:void 0;return this.performTransaction((function(){return t=e.update(r)}),n),t},e.prototype.recordOptimisticTransaction=function(e,t){this.performTransaction(e,t)},e.prototype.transformDocument=function(e){return e},e.prototype.identify=function(e){},e.prototype.gc=function(){return[]},e.prototype.modify=function(e){return!1},e.prototype.transformForLink=function(e){return e},e.prototype.readQuery=function(e,t){return void 0===t&&(t=!!e.optimistic),this.read(An(An({},e),{rootId:e.id||"ROOT_QUERY",optimistic:t}))},e.prototype.readFragment=function(e,t){return void 0===t&&(t=!!e.optimistic),this.read(An(An({},e),{query:this.getFragmentDoc(e.fragment,e.fragmentName),rootId:e.id,optimistic:t}))},e.prototype.writeQuery=function(e){var t=e.id,r=e.data,n=Dn(e,["id","data"]);return this.write(Object.assign(n,{dataId:t||"ROOT_QUERY",result:r}))},e.prototype.writeFragment=function(e){var t=e.id,r=e.data,n=e.fragment,o=e.fragmentName,i=Dn(e,["id","data","fragment","fragmentName"]);return this.write(Object.assign(i,{query:this.getFragmentDoc(n,o),dataId:t,result:r}))},e.prototype.updateQuery=function(e,t){return this.batch({update:function(r){var n=r.readQuery(e),o=t(n);return null==o?n:(r.writeQuery(An(An({},e),{data:o})),o)}})},e.prototype.updateFragment=function(e,t){return this.batch({update:function(r){var n=r.readFragment(e),o=t(n);return null==o?n:(r.writeFragment(An(An({},e),{data:o})),o)}})},e}(),jd=function(e,t,r,n){this.message=e,this.path=t,this.query=r,this.variables=n},Id=Object.prototype.hasOwnProperty;function Pd(e,t){var r=e.__typename,n=e.id,o=e._id;if("string"==typeof r&&(t&&(t.keyObject=void 0!==n?{id:n}:void 0!==o?{_id:o}:void 0),void 0===n&&(n=o),void 0!==n))return"".concat(r,":").concat("number"==typeof n||"string"==typeof n?n:JSON.stringify(n))}var Td={dataIdFromObject:Pd,addTypename:!0,resultCaching:!0,canonizeResults:!1};function Md(e){var t=e.canonizeResults;return void 0===t?Td.canonizeResults:t}var Fd=/^[_a-z][_0-9a-z]*/i;function zd(e){var t=e.match(Fd);return t?t[0]:e}function Nd(e,t,r){return!!Zl(t)&&(Bd(t)?t.every((function(t){return Nd(e,t,r)})):e.selections.every((function(e){if(uc(e)&&Wl(e,r)){var n=lc(e);return Id.call(t,n)&&(!e.selectionSet||Nd(e.selectionSet,t[n],r))}return!0})))}function Ld(e){return Zl(e)&&!tc(e)&&!Bd(e)}var Bd=function(e){return Array.isArray(e)},qd=Object.create(null),Ud=function(){return qd},Vd=Object.create(null),Qd=function(){function e(e,t){var r=this;this.policies=e,this.group=t,this.data=Object.create(null),this.rootIds=Object.create(null),this.refs=Object.create(null),this.getFieldValue=function(e,t){return ou(tc(e)?r.get(e.__ref,t):e&&e[t])},this.canRead=function(e){return tc(e)?r.has(e.__ref):"object"==typeof e},this.toReference=function(e,t){if("string"==typeof e)return ec(e);if(tc(e))return e;var n=r.policies.identify(e)[0];if(n){var o=ec(n);return t&&r.merge(n,e),o}}}return e.prototype.toObject=function(){return An({},this.data)},e.prototype.has=function(e){return void 0!==this.lookup(e,!0)},e.prototype.get=function(e,t){if(this.group.depend(e,t),Id.call(this.data,e)){var r=this.data[e];if(r&&Id.call(r,t))return r[t]}return"__typename"===t&&Id.call(this.policies.rootTypenamesById,e)?this.policies.rootTypenamesById[e]:this instanceof Yd?this.parent.get(e,t):void 0},e.prototype.lookup=function(e,t){return t&&this.group.depend(e,"__exists"),Id.call(this.data,e)?this.data[e]:this instanceof Yd?this.parent.lookup(e,t):this.policies.rootTypenamesById[e]?Object.create(null):void 0},e.prototype.merge=function(e,t){var r,n=this;tc(e)&&(e=e.__ref),tc(t)&&(t=t.__ref);var o="string"==typeof e?this.lookup(r=e):e,i="string"==typeof t?this.lookup(r=t):t;if(i){__DEV__?hl("string"==typeof r,"store.merge expects a string ID"):hl("string"==typeof r,1);var a=new Rc(Kd).merge(o,i);if(this.data[r]=a,a!==o&&(delete this.refs[r],this.group.caching)){var s=Object.create(null);o||(s.__exists=1),Object.keys(i).forEach((function(e){if(!o||o[e]!==a[e]){s[e]=1;var t=zd(e);t!==e&&!n.policies.hasKeyArgs(a.__typename,t)&&(s[t]=1),void 0===a[e]&&!(n instanceof Yd)&&delete a[e]}})),s.__typename&&!(o&&o.__typename)&&this.policies.rootTypenamesById[r]===a.__typename&&delete s.__typename,Object.keys(s).forEach((function(e){return n.group.dirty(r,e)}))}}},e.prototype.modify=function(e,t){var r=this,n=this.lookup(e);if(n){var o=Object.create(null),i=!1,a=!0,s={DELETE:qd,INVALIDATE:Vd,isReference:tc,toReference:this.toReference,canRead:this.canRead,readField:function(t,n){return r.policies.readField("string"==typeof t?{fieldName:t,from:n||ec(e)}:t,{store:r})}};if(Object.keys(n).forEach((function(l){var c=zd(l),u=n[l];if(void 0!==u){var d="function"==typeof t?t:t[l]||t[c];if(d){var h=d===Ud?qd:d(ou(u),An(An({},s),{fieldName:c,storeFieldName:l,storage:r.getStorage(e,l)}));h===Vd?r.group.dirty(e,l):(h===qd&&(h=void 0),h!==u&&(o[l]=h,i=!0,u=h))}void 0!==u&&(a=!1)}})),i)return this.merge(e,o),a&&(this instanceof Yd?this.data[e]=void 0:delete this.data[e],this.group.dirty(e,"__exists")),!0}return!1},e.prototype.delete=function(e,t,r){var n,o=this.lookup(e);if(o){var i=this.getFieldValue(o,"__typename"),a=t&&r?this.policies.getStoreFieldName({typename:i,fieldName:t,args:r}):t;return this.modify(e,a?((n={})[a]=Ud,n):Ud)}return!1},e.prototype.evict=function(e,t){var r=!1;return e.id&&(Id.call(this.data,e.id)&&(r=this.delete(e.id,e.fieldName,e.args)),this instanceof Yd&&this!==t&&(r=this.parent.evict(e,t)||r),(e.fieldName||r)&&this.group.dirty(e.id,e.fieldName||"__exists")),r},e.prototype.clear=function(){this.replace(null)},e.prototype.extract=function(){var e=this,t=this.toObject(),r=[];return this.getRootIdSet().forEach((function(t){Id.call(e.policies.rootTypenamesById,t)||r.push(t)})),r.length&&(t.__META={extraRootIds:r.sort()}),t},e.prototype.replace=function(e){var t=this;if(Object.keys(this.data).forEach((function(r){e&&Id.call(e,r)||t.delete(r)})),e){var r=e.__META,n=Dn(e,["__META"]);Object.keys(n).forEach((function(e){t.merge(e,n[e])})),r&&r.extraRootIds.forEach(this.retain,this)}},e.prototype.retain=function(e){return this.rootIds[e]=(this.rootIds[e]||0)+1},e.prototype.release=function(e){if(this.rootIds[e]>0){var t=--this.rootIds[e];return t||delete this.rootIds[e],t}return 0},e.prototype.getRootIdSet=function(e){return void 0===e&&(e=new Set),Object.keys(this.rootIds).forEach(e.add,e),this instanceof Yd?this.parent.getRootIdSet(e):Object.keys(this.policies.rootTypenamesById).forEach(e.add,e),e},e.prototype.gc=function(){var e=this,t=this.getRootIdSet(),r=this.toObject();t.forEach((function(n){Id.call(r,n)&&(Object.keys(e.findChildRefIds(n)).forEach(t.add,t),delete r[n])}));var n=Object.keys(r);if(n.length){for(var o=this;o instanceof Yd;)o=o.parent;n.forEach((function(e){return o.delete(e)}))}return n},e.prototype.findChildRefIds=function(e){if(!Id.call(this.refs,e)){var t=this.refs[e]=Object.create(null),r=this.data[e];if(!r)return t;var n=new Set([r]);n.forEach((function(e){tc(e)&&(t[e.__ref]=!0),Zl(e)&&Object.keys(e).forEach((function(t){var r=e[t];Zl(r)&&n.add(r)}))}))}return this.refs[e]},e.prototype.makeCacheKey=function(){return this.group.keyMaker.lookupArray(arguments)},e}(),Hd=function(){function e(e,t){void 0===t&&(t=null),this.caching=e,this.parent=t,this.d=null,this.resetCaching()}return e.prototype.resetCaching=function(){this.d=this.caching?Cd():null,this.keyMaker=new Ju(su)},e.prototype.depend=function(e,t){if(this.d){this.d(Wd(e,t));var r=zd(t);r!==t&&this.d(Wd(e,r)),this.parent&&this.parent.depend(e,t)}},e.prototype.dirty=function(e,t){this.d&&this.d.dirty(Wd(e,t),"__exists"===t?"forget":"setDirty")},e}();function Wd(e,t){return t+"#"+e}function Gd(e,t){Xd(e)&&e.group.depend(t,"__exists")}!function(e){var t=function(e){function t(t){var r=t.policies,n=t.resultCaching,o=void 0===n||n,i=t.seed,a=e.call(this,r,new Hd(o))||this;return a.stump=new Jd(a),a.storageTrie=new Ju(su),i&&a.replace(i),a}return Cn(t,e),t.prototype.addLayer=function(e,t){return this.stump.addLayer(e,t)},t.prototype.removeLayer=function(){return this},t.prototype.getStorage=function(){return this.storageTrie.lookupArray(arguments)},t}(e);e.Root=t}(Qd||(Qd={}));var Yd=function(e){function t(t,r,n,o){var i=e.call(this,r.policies,o)||this;return i.id=t,i.parent=r,i.replay=n,i.group=o,n(i),i}return Cn(t,e),t.prototype.addLayer=function(e,r){return new t(e,this,r,this.group)},t.prototype.removeLayer=function(e){var t=this,r=this.parent.removeLayer(e);return e===this.id?(this.group.caching&&Object.keys(this.data).forEach((function(e){var n=t.data[e],o=r.lookup(e);o?n?n!==o&&Object.keys(n).forEach((function(r){Bu(n[r],o[r])||t.group.dirty(e,r)})):(t.group.dirty(e,"__exists"),Object.keys(o).forEach((function(r){t.group.dirty(e,r)}))):t.delete(e)})),r):r===this.parent?this:r.addLayer(this.id,this.replay)},t.prototype.toObject=function(){return An(An({},this.parent.toObject()),this.data)},t.prototype.findChildRefIds=function(t){var r=this.parent.findChildRefIds(t);return Id.call(this.data,t)?An(An({},r),e.prototype.findChildRefIds.call(this,t)):r},t.prototype.getStorage=function(){for(var e=this.parent;e.parent;)e=e.parent;return e.getStorage.apply(e,arguments)},t}(Qd),Jd=function(e){function t(t){return e.call(this,"EntityStore.Stump",t,(function(){}),new Hd(t.group.caching,t.group))||this}return Cn(t,e),t.prototype.removeLayer=function(){return this},t.prototype.merge=function(){return this.parent.merge.apply(this.parent,arguments)},t}(Yd);function Kd(e,t,r){var n=e[r],o=t[r];return Bu(n,o)?n:o}function Xd(e){return!!(e instanceof Qd&&e.group.caching)}var Zd,eh,th=function(){function e(){this.known=new(lu?WeakSet:Set),this.pool=new Ju(su),this.passes=new WeakMap,this.keysByJSON=new Map,this.empty=this.admit({})}return e.prototype.isKnown=function(e){return Zl(e)&&this.known.has(e)},e.prototype.pass=function(e){if(Zl(e)){var t=function(e){return Zl(e)?Bd(e)?e.slice(0):An({__proto__:Object.getPrototypeOf(e)},e):e}(e);return this.passes.set(t,e),t}return e},e.prototype.admit=function(e){var t=this;if(Zl(e)){var r=this.passes.get(e);if(r)return r;switch(Object.getPrototypeOf(e)){case Array.prototype:if(this.known.has(e))return e;var n=e.map(this.admit,this);return(s=this.pool.lookupArray(n)).array||(this.known.add(s.array=n),__DEV__&&Object.freeze(n)),s.array;case null:case Object.prototype:if(this.known.has(e))return e;var o=Object.getPrototypeOf(e),i=[o],a=this.sortedKeys(e);i.push(a.json);var s,l=i.length;if(a.sorted.forEach((function(r){i.push(t.admit(e[r]))})),!(s=this.pool.lookupArray(i)).object){var c=s.object=Object.create(o);this.known.add(c),a.sorted.forEach((function(e,t){c[e]=i[l+t]})),__DEV__&&Object.freeze(c)}return s.object}}return e},e.prototype.sortedKeys=function(e){var t=Object.keys(e),r=this.pool.lookupArray(t);if(!r.keys){t.sort();var n=JSON.stringify(t);(r.keys=this.keysByJSON.get(n))||this.keysByJSON.set(n,r.keys={sorted:t,json:n})}return r.keys},e}(),rh=Object.assign((function(e){if(Zl(e)){void 0===Zd&&nh();var t=Zd.admit(e),r=eh.get(t);return void 0===r&&eh.set(t,r=JSON.stringify(t)),r}return JSON.stringify(e)}),{reset:nh});function nh(){Zd=new th,eh=new(su?WeakMap:Map)}function oh(e){return[e.selectionSet,e.objectOrReference,e.context,e.context.canonizeResults]}var ih=function(){function e(e){var t=this;this.knownResults=new(su?WeakMap:Map),this.config=vu(e,{addTypename:!1!==e.addTypename,canonizeResults:Md(e)}),this.canon=e.canon||new th,this.executeSelectionSet=$d((function(e){var r,n=e.context.canonizeResults,o=oh(e);o[3]=!n;var i=(r=t.executeSelectionSet).peek.apply(r,o);return i?n?An(An({},i),{result:t.canon.admit(i.result)}):i:(Gd(e.context.store,e.enclosingRef.__ref),t.execSelectionSetImpl(e))}),{max:this.config.resultCacheMaxSize,keyArgs:oh,makeCacheKey:function(e,t,r,n){if(Xd(r.store))return r.store.makeCacheKey(e,tc(t)?t.__ref:t,r.varString,n)}}),this.executeSubSelectedArray=$d((function(e){return Gd(e.context.store,e.enclosingRef.__ref),t.execSubSelectedArrayImpl(e)}),{max:this.config.resultCacheMaxSize,makeCacheKey:function(e){var t=e.field,r=e.array,n=e.context;if(Xd(n.store))return n.store.makeCacheKey(t,r,n.varString)}})}return e.prototype.resetCanon=function(){this.canon=new th},e.prototype.diffQueryAgainstStore=function(e){var t=e.store,r=e.query,n=e.rootId,o=void 0===n?"ROOT_QUERY":n,i=e.variables,a=e.returnPartialData,s=void 0===a||a,l=e.canonizeResults,c=void 0===l?this.config.canonizeResults:l,u=this.config.cache.policies;i=An(An({},yc(mc(r))),i);var d,h=ec(o),p=this.executeSelectionSet({selectionSet:gc(r).selectionSet,objectOrReference:h,enclosingRef:h,context:{store:t,query:r,policies:u,variables:i,varString:rh(i),canonizeResults:c,fragmentMap:Kl(vc(r))}});if(p.missing&&(d=[new jd(ah(p.missing),p.missing,r,i)],!s))throw d[0];return{result:p.result,complete:!d,missing:d}},e.prototype.isFresh=function(e,t,r,n){if(Xd(n.store)&&this.knownResults.get(e)===r){var o=this.executeSelectionSet.peek(r,t,n,this.canon.isKnown(e));if(o&&e===o.result)return!0}return!1},e.prototype.execSelectionSetImpl=function(e){var t=this,r=e.selectionSet,n=e.objectOrReference,o=e.enclosingRef,i=e.context;if(tc(n)&&!i.policies.rootTypenamesById[n.__ref]&&!i.store.has(n.__ref))return{result:this.canon.empty,missing:"Dangling reference to missing ".concat(n.__ref," object")};var a,s=i.variables,l=i.policies,c=i.store.getFieldValue(n,"__typename"),u=[],d=new Rc;function h(e,t){var r;return e.missing&&(a=d.merge(a,((r={})[t]=e.missing,r))),e.result}this.config.addTypename&&"string"==typeof c&&!l.rootIdsByTypename[c]&&u.push({__typename:c});var p=new Set(r.selections);p.forEach((function(e){var r,f;if(Wl(e,s))if(uc(e)){var v=l.readField({fieldName:e.name.value,field:e,variables:i.variables,from:n},i),m=lc(e);void 0===v?Ec.added(e)||(a=d.merge(a,((r={})[m]="Can't find field '".concat(e.name.value,"' on ").concat(tc(n)?n.__ref+" object":"object "+JSON.stringify(n,null,2)),r))):Bd(v)?v=h(t.executeSubSelectedArray({field:e,array:v,enclosingRef:o,context:i}),m):e.selectionSet?null!=v&&(v=h(t.executeSelectionSet({selectionSet:e.selectionSet,objectOrReference:v,enclosingRef:tc(v)?v:o,context:i}),m)):i.canonizeResults&&(v=t.canon.pass(v)),void 0!==v&&u.push(((f={})[m]=v,f))}else{var g=Xl(e,i.fragmentMap);g&&l.fragmentMatches(g,c)&&g.selectionSet.selections.forEach(p.add,p)}}));var f={result:Dc(u),missing:a},v=i.canonizeResults?this.canon.admit(f):ou(f);return v.result&&this.knownResults.set(v.result,r),v},e.prototype.execSubSelectedArrayImpl=function(e){var t,r=this,n=e.field,o=e.array,i=e.enclosingRef,a=e.context,s=new Rc;function l(e,r){var n;return e.missing&&(t=s.merge(t,((n={})[r]=e.missing,n))),e.result}return n.selectionSet&&(o=o.filter(a.store.canRead)),o=o.map((function(e,t){return null===e?null:Bd(e)?l(r.executeSubSelectedArray({field:n,array:e,enclosingRef:i,context:a}),t):n.selectionSet?l(r.executeSelectionSet({selectionSet:n.selectionSet,objectOrReference:e,enclosingRef:tc(e)?e:i,context:a}),t):(__DEV__&&function(e,t,r){if(!t.selectionSet){var n=new Set([r]);n.forEach((function(r){Zl(r)&&(__DEV__?hl(!tc(r),"Missing selection set for object of type ".concat(function(e,t){return tc(t)?e.get(t.__ref,"__typename"):t&&t.__typename}(e,r)," returned for query field ").concat(t.name.value)):hl(!tc(r),5),Object.values(r).forEach(n.add,n))}))}}(a.store,n,e),e)})),{result:a.canonizeResults?this.canon.admit(o):o,missing:t}},e}();function ah(e){try{JSON.stringify(e,(function(e,t){if("string"==typeof t)throw t;return t}))}catch(t){return t}}var sh=new rd,lh=new WeakMap;function ch(e){var t=lh.get(e);return t||lh.set(e,t={vars:new Set,dep:Cd()}),t}function uh(e){ch(e).vars.forEach((function(t){return t.forgetCache(e)}))}function dh(e){var t=new Set,r=new Set,n=function(i){if(arguments.length>0){if(e!==i){e=i,t.forEach((function(e){ch(e).dep.dirty(n),hh(e)}));var a=Array.from(r);r.clear(),a.forEach((function(t){return t(e)}))}}else{var s=sh.getValue();s&&(o(s),ch(s).dep(n))}return e};n.onNextChange=function(e){return r.add(e),function(){r.delete(e)}};var o=n.attachCache=function(e){return t.add(e),ch(e).vars.add(n),n};return n.forgetCache=function(e){return t.delete(e)},n}function hh(e){e.broadcastWatches&&e.broadcastWatches()}var ph=Object.create(null);function fh(e){var t=JSON.stringify(e);return ph[t]||(ph[t]=Object.create(null))}function vh(e){var t=fh(e);return t.keyFieldsFn||(t.keyFieldsFn=function(t,r){var n=function(e,t){return r.readField(t,e)},o=r.keyObject=gh(e,(function(e){var o=bh(r.storeObject,e,n);return void 0===o&&t!==r.storeObject&&Id.call(t,e[0])&&(o=bh(t,e,yh)),__DEV__?hl(void 0!==o,"Missing field '".concat(e.join("."),"' while extracting keyFields from ").concat(JSON.stringify(t))):hl(void 0!==o,2),o}));return"".concat(r.typename,":").concat(JSON.stringify(o))})}function mh(e){var t=fh(e);return t.keyArgsFn||(t.keyArgsFn=function(t,r){var n=r.field,o=r.variables,i=r.fieldName,a=gh(e,(function(e){var r=e[0],i=r.charAt(0);if("@"!==i)if("$"!==i){if(t)return bh(t,e)}else{var a=r.slice(1);if(o&&Id.call(o,a)){var s=e.slice(0);return s[0]=a,bh(o,s)}}else if(n&&pu(n.directives)){var l=r.slice(1),c=n.directives.find((function(e){return e.name.value===l})),u=c&&sc(c,o);return u&&bh(u,e.slice(1))}})),s=JSON.stringify(a);return(t||"{}"!==s)&&(i+=":"+s),i})}function gh(e,t){var r=new Rc;return function e(t){var r=fh(t);if(!r.paths){var n=r.paths=[],o=[];t.forEach((function(r,i){Bd(r)?(e(r).forEach((function(e){return n.push(o.concat(e))})),o.length=0):(o.push(r),Bd(t[i+1])||(n.push(o.slice(0)),o.length=0))}))}return r.paths}(e).reduce((function(e,n){var o,i=t(n);if(void 0!==i){for(var a=n.length-1;a>=0;--a)(o={})[n[a]]=i,i=o;e=r.merge(e,i)}return e}),Object.create(null))}function yh(e,t){return e[t]}function bh(e,t,r){return r=r||yh,_h(t.reduce((function e(t,n){return Bd(t)?t.map((function(t){return e(t,n)})):t&&r(t,n)}),e))}function _h(e){return Zl(e)?Bd(e)?e.map(_h):gh(Object.keys(e).sort(),(function(t){return bh(e,t)})):e}function wh(e){return void 0!==e.args?e.args:e.field?sc(e.field,e.variables):null}oc.setStringify(rh);var xh=function(){},kh=function(e,t){return t.fieldName},Eh=function(e,t,r){return(0,r.mergeObjects)(e,t)},Sh=function(e,t){return t},Oh=function(){function e(e){this.config=e,this.typePolicies=Object.create(null),this.toBeAdded=Object.create(null),this.supertypeMap=new Map,this.fuzzySubtypes=new Map,this.rootIdsByTypename=Object.create(null),this.rootTypenamesById=Object.create(null),this.usingPossibleTypes=!1,this.config=An({dataIdFromObject:Pd},e),this.cache=this.config.cache,this.setRootTypename("Query"),this.setRootTypename("Mutation"),this.setRootTypename("Subscription"),e.possibleTypes&&this.addPossibleTypes(e.possibleTypes),e.typePolicies&&this.addTypePolicies(e.typePolicies)}return e.prototype.identify=function(e,t){var r,n=this,o=t&&(t.typename||(null===(r=t.storeObject)||void 0===r?void 0:r.__typename))||e.__typename;if(o===this.rootTypenamesById.ROOT_QUERY)return["ROOT_QUERY"];for(var i,a=t&&t.storeObject||e,s=An(An({},t),{typename:o,storeObject:a,readField:t&&t.readField||function(){var e=Ah(arguments,a);return n.readField(e,{store:n.cache.data,variables:e.variables})}}),l=o&&this.getTypePolicy(o),c=l&&l.keyFn||this.config.dataIdFromObject;c;){var u=c(e,s);if(!Bd(u)){i=u;break}c=vh(u)}return i=i?String(i):void 0,s.keyObject?[i,s.keyObject]:[i]},e.prototype.addTypePolicies=function(e){var t=this;Object.keys(e).forEach((function(r){var n=e[r],o=n.queryType,i=n.mutationType,a=n.subscriptionType,s=Dn(n,["queryType","mutationType","subscriptionType"]);o&&t.setRootTypename("Query",r),i&&t.setRootTypename("Mutation",r),a&&t.setRootTypename("Subscription",r),Id.call(t.toBeAdded,r)?t.toBeAdded[r].push(s):t.toBeAdded[r]=[s]}))},e.prototype.updateTypePolicy=function(e,t){var r=this,n=this.getTypePolicy(e),o=t.keyFields,i=t.fields;function a(e,t){e.merge="function"==typeof t?t:!0===t?Eh:!1===t?Sh:e.merge}a(n,t.merge),n.keyFn=!1===o?xh:Bd(o)?vh(o):"function"==typeof o?o:n.keyFn,i&&Object.keys(i).forEach((function(t){var n=r.getFieldPolicy(e,t,!0),o=i[t];if("function"==typeof o)n.read=o;else{var s=o.keyArgs,l=o.read,c=o.merge;n.keyFn=!1===s?kh:Bd(s)?mh(s):"function"==typeof s?s:n.keyFn,"function"==typeof l&&(n.read=l),a(n,c)}n.read&&n.merge&&(n.keyFn=n.keyFn||kh)}))},e.prototype.setRootTypename=function(e,t){void 0===t&&(t=e);var r="ROOT_"+e.toUpperCase(),n=this.rootTypenamesById[r];t!==n&&(__DEV__?hl(!n||n===e,"Cannot change root ".concat(e," __typename more than once")):hl(!n||n===e,3),n&&delete this.rootIdsByTypename[n],this.rootIdsByTypename[t]=r,this.rootTypenamesById[r]=t)},e.prototype.addPossibleTypes=function(e){var t=this;this.usingPossibleTypes=!0,Object.keys(e).forEach((function(r){t.getSupertypeSet(r,!0),e[r].forEach((function(e){t.getSupertypeSet(e,!0).add(r);var n=e.match(Fd);(!n||n[0]!==e)&&t.fuzzySubtypes.set(e,new RegExp(e))}))}))},e.prototype.getTypePolicy=function(e){var t=this;if(!Id.call(this.typePolicies,e)){var r=this.typePolicies[e]=Object.create(null);r.fields=Object.create(null);var n=this.supertypeMap.get(e);n&&n.size&&n.forEach((function(e){var n=t.getTypePolicy(e),o=n.fields,i=Dn(n,["fields"]);Object.assign(r,i),Object.assign(r.fields,o)}))}var o=this.toBeAdded[e];return o&&o.length&&o.splice(0).forEach((function(r){t.updateTypePolicy(e,r)})),this.typePolicies[e]},e.prototype.getFieldPolicy=function(e,t,r){if(e){var n=this.getTypePolicy(e).fields;return n[t]||r&&(n[t]=Object.create(null))}},e.prototype.getSupertypeSet=function(e,t){var r=this.supertypeMap.get(e);return!r&&t&&this.supertypeMap.set(e,r=new Set),r},e.prototype.fragmentMatches=function(e,t,r,n){var o=this;if(!e.typeCondition)return!0;if(!t)return!1;var i=e.typeCondition.name.value;if(t===i)return!0;if(this.usingPossibleTypes&&this.supertypeMap.has(i))for(var a=this.getSupertypeSet(t,!0),s=[a],l=function(e){var t=o.getSupertypeSet(e,!1);t&&t.size&&s.indexOf(t)<0&&s.push(t)},c=!(!r||!this.fuzzySubtypes.size),u=!1,d=0;d<s.length;++d){var h=s[d];if(h.has(i))return a.has(i)||(u&&__DEV__&&hl.warn("Inferring subtype ".concat(t," of supertype ").concat(i)),a.add(i)),!0;h.forEach(l),c&&d===s.length-1&&Nd(e.selectionSet,r,n)&&(c=!1,u=!0,this.fuzzySubtypes.forEach((function(e,r){var n=t.match(e);n&&n[0]===t&&l(r)})))}return!1},e.prototype.hasKeyArgs=function(e,t){var r=this.getFieldPolicy(e,t,!1);return!(!r||!r.keyFn)},e.prototype.getStoreFieldName=function(e){var t,r=e.typename,n=e.fieldName,o=this.getFieldPolicy(r,n,!1),i=o&&o.keyFn;if(i&&r)for(var a={typename:r,fieldName:n,field:e.field||null,variables:e.variables},s=wh(e);i;){var l=i(s,a);if(!Bd(l)){t=l||n;break}i=mh(l)}return void 0===t&&(t=e.field?function(e,t){var r=null;e.directives&&(r={},e.directives.forEach((function(e){r[e.name.value]={},e.arguments&&e.arguments.forEach((function(n){var o=n.name,i=n.value;return rc(r[e.name.value],o,i,t)}))})));var n=null;return e.arguments&&e.arguments.length&&(n={},e.arguments.forEach((function(e){var r=e.name,o=e.value;return rc(n,r,o,t)}))),oc(e.name.value,n,r)}(e.field,e.variables):oc(n,wh(e))),!1===t?n:n===zd(t)?t:n+":"+t},e.prototype.readField=function(e,t){var r=e.from;if(r&&(e.field||e.fieldName)){if(void 0===e.typename){var n=t.store.getFieldValue(r,"__typename");n&&(e.typename=n)}var o=this.getStoreFieldName(e),i=zd(o),a=t.store.getFieldValue(r,o),s=this.getFieldPolicy(e.typename,i,!1),l=s&&s.read;if(l){var c=Ch(this,r,e,t,t.store.getStorage(tc(r)?r.__ref:r,o));return sh.withValue(this.cache,l,[a,c])}return a}},e.prototype.getReadFunction=function(e,t){var r=this.getFieldPolicy(e,t,!1);return r&&r.read},e.prototype.getMergeFunction=function(e,t,r){var n=this.getFieldPolicy(e,t,!1),o=n&&n.merge;return!o&&r&&(o=(n=this.getTypePolicy(r))&&n.merge),o},e.prototype.runMergeFunction=function(e,t,r,n,o){var i=r.field,a=r.typename,s=r.merge;return s===Eh?Dh(n.store)(e,t):s===Sh?t:(n.overwrite&&(e=void 0),s(e,t,Ch(this,void 0,{typename:a,fieldName:i.name.value,field:i,variables:n.variables},n,o||Object.create(null))))},e}();function Ch(e,t,r,n,o){var i=e.getStoreFieldName(r),a=zd(i),s=r.variables||n.variables,l=n.store,c=l.toReference,u=l.canRead;return{args:wh(r),field:r.field||null,fieldName:a,storeFieldName:i,variables:s,isReference:tc,toReference:c,storage:o,cache:e.cache,canRead:u,readField:function(){return e.readField(Ah(arguments,t,s),n)},mergeObjects:Dh(n.store)}}function Ah(e,t,r){var n,o=e[0],i=e[1],a=e.length;return"string"==typeof o?n={fieldName:o,from:a>1?i:t}:(n=An({},o),Id.call(n,"from")||(n.from=t)),__DEV__&&void 0===n.from&&__DEV__&&hl.warn("Undefined 'from' passed to readField with arguments ".concat(function(e){var t=gu("stringifyForDisplay");return JSON.stringify(e,(function(e,r){return void 0===r?t:r})).split(JSON.stringify(t)).join("<undefined>")}(Array.from(e)))),void 0===n.variables&&(n.variables=r),n}function Dh(e){return function(t,r){if(Bd(t)||Bd(r))throw __DEV__?new dl("Cannot automatically merge arrays"):new dl(4);if(Zl(t)&&Zl(r)){var n=e.getFieldValue(t,"__typename"),o=e.getFieldValue(r,"__typename");if(n&&o&&n!==o)return r;if(tc(t)&&Ld(r))return e.merge(t.__ref,r),t;if(Ld(t)&&tc(r))return e.merge(t,r.__ref),r;if(Ld(t)&&Ld(r))return An(An({},t),r)}return r}}function $h(e,t,r){var n="".concat(t).concat(r),o=e.flavors.get(n);return o||e.flavors.set(n,o=e.clientOnly===t&&e.deferred===r?e:An(An({},e),{clientOnly:t,deferred:r})),o}var Rh=function(){function e(e,t){this.cache=e,this.reader=t}return e.prototype.writeToStore=function(e,t){var r=this,n=t.query,o=t.result,i=t.dataId,a=t.variables,s=t.overwrite,l=pc(n),c=new Rc;a=An(An({},yc(l)),a);var u={store:e,written:Object.create(null),merge:function(e,t){return c.merge(e,t)},variables:a,varString:rh(a),fragmentMap:Kl(vc(n)),overwrite:!!s,incomingById:new Map,clientOnly:!1,deferred:!1,flavors:new Map},d=this.processSelectionSet({result:o||Object.create(null),dataId:i,selectionSet:l.selectionSet,mergeTree:{map:new Map},context:u});if(!tc(d))throw __DEV__?new dl("Could not identify object ".concat(JSON.stringify(o))):new dl(6);return u.incomingById.forEach((function(t,n){var o=t.storeObject,i=t.mergeTree,a=t.fieldNodeSet,s=ec(n);if(i&&i.map.size){var l=r.applyMerges(i,s,o,u);if(tc(l))return;o=l}if(__DEV__&&!u.overwrite){var c=Object.create(null);a.forEach((function(e){e.selectionSet&&(c[e.name.value]=!0)}));Object.keys(o).forEach((function(e){(function(e){return!0===c[zd(e)]})(e)&&!function(e){var t=i&&i.map.get(e);return Boolean(t&&t.info&&t.info.merge)}(e)&&function(e,t,r,n){var o=function(e){var t=n.getFieldValue(e,r);return"object"==typeof t&&t},i=o(e);if(i){var a=o(t);if(a&&!tc(i)&&!Bu(i,a)&&!Object.keys(i).every((function(e){return void 0!==n.getFieldValue(a,e)}))){var s=n.getFieldValue(e,"__typename")||n.getFieldValue(t,"__typename"),l=zd(r),c="".concat(s,".").concat(l);if(!Mh.has(c)){Mh.add(c);var u=[];!Bd(i)&&!Bd(a)&&[i,a].forEach((function(e){var t=n.getFieldValue(e,"__typename");"string"==typeof t&&!u.includes(t)&&u.push(t)})),__DEV__&&hl.warn("Cache data may be lost when replacing the ".concat(l," field of a ").concat(s," object.\n\nTo address this problem (which is not a bug in Apollo Client), ").concat(u.length?"either ensure all objects of type "+u.join(" and ")+" have an ID or a custom merge function, or ":"","define a custom merge function for the ").concat(c," field, so InMemoryCache can safely merge these objects:\n\n  existing: ").concat(JSON.stringify(i).slice(0,1e3),"\n  incoming: ").concat(JSON.stringify(a).slice(0,1e3),"\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"))}}}}(s,o,e,u.store)}))}e.merge(n,o)})),e.retain(d.__ref),d},e.prototype.processSelectionSet=function(e){var t=this,r=e.dataId,n=e.result,o=e.selectionSet,i=e.context,a=e.mergeTree,s=this.cache.policies,l=Object.create(null),c=r&&s.rootTypenamesById[r]||cc(n,o,i.fragmentMap)||r&&i.store.get(r,"__typename");"string"==typeof c&&(l.__typename=c);var u=function(){var e=Ah(arguments,l,i.variables);if(tc(e.from)){var t=i.incomingById.get(e.from.__ref);if(t){var r=s.readField(An(An({},e),{from:t.storeObject}),i);if(void 0!==r)return r}}return s.readField(e,i)},d=new Set;this.flattenFields(o,n,i,c).forEach((function(e,r){var o,i=lc(r),h=n[i];if(d.add(r),void 0!==h){var p=s.getStoreFieldName({typename:c,fieldName:r.name.value,field:r,variables:e.variables}),f=Ih(a,p),v=t.processFieldValue(h,r,r.selectionSet?$h(e,!1,!1):e,f),m=void 0;r.selectionSet&&(tc(v)||Ld(v))&&(m=u("__typename",v));var g=s.getMergeFunction(c,r.name.value,m);g?f.info={field:r,typename:c,merge:g}:Th(a,p),l=e.merge(l,((o={})[p]=v,o))}else __DEV__&&!e.clientOnly&&!e.deferred&&!Ec.added(r)&&!s.getReadFunction(c,r.name.value)&&__DEV__&&hl.error("Missing field '".concat(lc(r),"' while writing result ").concat(JSON.stringify(n,null,2)).substring(0,1e3))}));try{var h=s.identify(n,{typename:c,selectionSet:o,fragmentMap:i.fragmentMap,storeObject:l,readField:u}),p=h[0],f=h[1];r=r||p,f&&(l=i.merge(l,f))}catch(y){if(!r)throw y}if("string"==typeof r){var v=ec(r),m=i.written[r]||(i.written[r]=[]);if(m.indexOf(o)>=0||(m.push(o),this.reader&&this.reader.isFresh(n,v,o,i)))return v;var g=i.incomingById.get(r);return g?(g.storeObject=i.merge(g.storeObject,l),g.mergeTree=function e(t,r){if(t===r||!r||Ph(r))return t;if(!t||Ph(t))return r;var n=t.info&&r.info?An(An({},t.info),r.info):t.info||r.info,o=t.map.size&&r.map.size,i=o?new Map:t.map.size?t.map:r.map,a={info:n,map:i};if(o){var s=new Set(r.map.keys());t.map.forEach((function(t,n){a.map.set(n,e(t,r.map.get(n))),s.delete(n)})),s.forEach((function(n){a.map.set(n,e(r.map.get(n),t.map.get(n)))}))}return a}(g.mergeTree,a),d.forEach((function(e){return g.fieldNodeSet.add(e)}))):i.incomingById.set(r,{storeObject:l,mergeTree:Ph(a)?void 0:a,fieldNodeSet:d}),v}return l},e.prototype.processFieldValue=function(e,t,r,n){var o=this;return t.selectionSet&&null!==e?Bd(e)?e.map((function(e,i){var a=o.processFieldValue(e,t,r,Ih(n,i));return Th(n,i),a})):this.processSelectionSet({result:e,selectionSet:t.selectionSet,context:r,mergeTree:n}):__DEV__?ru(e):e},e.prototype.flattenFields=function(e,t,r,n){void 0===n&&(n=cc(t,e,r.fragmentMap));var o=new Map,i=this.cache.policies,a=new Ju(!1);return function e(s,l){var c=a.lookup(s,l.clientOnly,l.deferred);c.visited||(c.visited=!0,s.selections.forEach((function(a){if(Wl(a,r.variables)){var s=l.clientOnly,c=l.deferred;if(!(s&&c)&&pu(a.directives)&&a.directives.forEach((function(e){var t=e.name.value;if("client"===t&&(s=!0),"defer"===t){var n=sc(e,r.variables);(!n||!1!==n.if)&&(c=!0)}})),uc(a)){var u=o.get(a);u&&(s=s&&u.clientOnly,c=c&&u.deferred),o.set(a,$h(r,s,c))}else{var d=Xl(a,r.fragmentMap);d&&i.fragmentMatches(d,n,t,r.variables)&&e(d.selectionSet,$h(r,s,c))}}})))}(e,r),o},e.prototype.applyMerges=function(e,t,r,n,o){var i,a=this;if(e.map.size&&!tc(r)){var s=Bd(r)||!tc(t)&&!Ld(t)?void 0:t,l=r;s&&!o&&(o=[tc(s)?s.__ref:s]);var c,u=function(e,t){return Bd(e)?"number"==typeof t?e[t]:void 0:n.store.getFieldValue(e,String(t))};e.map.forEach((function(e,t){var r=u(s,t),i=u(l,t);if(void 0!==i){o&&o.push(t);var d=a.applyMerges(e,r,i,n,o);d!==i&&(c=c||new Map).set(t,d),o&&hl(o.pop()===t)}})),c&&(r=Bd(l)?l.slice(0):An({},l),c.forEach((function(e,t){r[t]=e})))}return e.info?this.cache.policies.runMergeFunction(t,r,e.info,n,o&&(i=n.store).getStorage.apply(i,o)):r},e}(),jh=[];function Ih(e,t){var r=e.map;return r.has(t)||r.set(t,jh.pop()||{map:new Map}),r.get(t)}function Ph(e){return!e||!(e.info||e.map.size)}function Th(e,t){var r=e.map,n=r.get(t);n&&Ph(n)&&(jh.push(n),r.delete(t))}var Mh=new Set;var Fh=function(e){function t(t){void 0===t&&(t={});var r=e.call(this)||this;return r.watches=new Set,r.typenameDocumentCache=new Map,r.makeVar=dh,r.txCount=0,r.config=function(e){return vu(Td,e)}(t),r.addTypename=!!r.config.addTypename,r.policies=new Oh({cache:r,dataIdFromObject:r.config.dataIdFromObject,possibleTypes:r.config.possibleTypes,typePolicies:r.config.typePolicies}),r.init(),r}return Cn(t,e),t.prototype.init=function(){var e=this.data=new Qd.Root({policies:this.policies,resultCaching:this.config.resultCaching});this.optimisticData=e.stump,this.resetResultCache()},t.prototype.resetResultCache=function(e){var t=this,r=this.storeReader;this.storeWriter=new Rh(this,this.storeReader=new ih({cache:this,addTypename:this.addTypename,resultCacheMaxSize:this.config.resultCacheMaxSize,canonizeResults:Md(this.config),canon:e?void 0:r&&r.canon})),this.maybeBroadcastWatch=$d((function(e,r){return t.broadcastWatch(e,r)}),{max:this.config.resultCacheMaxSize,makeCacheKey:function(e){var r=e.optimistic?t.optimisticData:t.data;if(Xd(r)){var n=e.optimistic,o=e.rootId,i=e.variables;return r.makeCacheKey(e.query,e.callback,rh({optimistic:n,rootId:o,variables:i}))}}}),new Set([this.data.group,this.optimisticData.group]).forEach((function(e){return e.resetCaching()}))},t.prototype.restore=function(e){return this.init(),e&&this.data.replace(e),this},t.prototype.extract=function(e){return void 0===e&&(e=!1),(e?this.optimisticData:this.data).extract()},t.prototype.read=function(e){var t=e.returnPartialData,r=void 0!==t&&t;try{return this.storeReader.diffQueryAgainstStore(An(An({},e),{store:e.optimistic?this.optimisticData:this.data,config:this.config,returnPartialData:r})).result||null}catch(n){if(n instanceof jd)return null;throw n}},t.prototype.write=function(e){try{return++this.txCount,this.storeWriter.writeToStore(this.data,e)}finally{!--this.txCount&&!1!==e.broadcast&&this.broadcastWatches()}},t.prototype.modify=function(e){if(Id.call(e,"id")&&!e.id)return!1;var t=e.optimistic?this.optimisticData:this.data;try{return++this.txCount,t.modify(e.id||"ROOT_QUERY",e.fields)}finally{!--this.txCount&&!1!==e.broadcast&&this.broadcastWatches()}},t.prototype.diff=function(e){return this.storeReader.diffQueryAgainstStore(An(An({},e),{store:e.optimistic?this.optimisticData:this.data,rootId:e.id||"ROOT_QUERY",config:this.config}))},t.prototype.watch=function(e){var t=this;return this.watches.size||function(e){ch(e).vars.forEach((function(t){return t.attachCache(e)}))}(this),this.watches.add(e),e.immediate&&this.maybeBroadcastWatch(e),function(){t.watches.delete(e)&&!t.watches.size&&uh(t),t.maybeBroadcastWatch.forget(e)}},t.prototype.gc=function(e){rh.reset();var t=this.optimisticData.gc();return e&&!this.txCount&&(e.resetResultCache?this.resetResultCache(e.resetResultIdentities):e.resetResultIdentities&&this.storeReader.resetCanon()),t},t.prototype.retain=function(e,t){return(t?this.optimisticData:this.data).retain(e)},t.prototype.release=function(e,t){return(t?this.optimisticData:this.data).release(e)},t.prototype.identify=function(e){if(tc(e))return e.__ref;try{return this.policies.identify(e)[0]}catch(t){__DEV__&&hl.warn(t)}},t.prototype.evict=function(e){if(!e.id){if(Id.call(e,"id"))return!1;e=An(An({},e),{id:"ROOT_QUERY"})}try{return++this.txCount,this.optimisticData.evict(e,this.data)}finally{!--this.txCount&&!1!==e.broadcast&&this.broadcastWatches()}},t.prototype.reset=function(e){var t=this;return this.init(),rh.reset(),e&&e.discardWatches?(this.watches.forEach((function(e){return t.maybeBroadcastWatch.forget(e)})),this.watches.clear(),uh(this)):this.broadcastWatches(),Promise.resolve()},t.prototype.removeOptimistic=function(e){var t=this.optimisticData.removeLayer(e);t!==this.optimisticData&&(this.optimisticData=t,this.broadcastWatches())},t.prototype.batch=function(e){var t,r=this,n=e.update,o=e.optimistic,i=void 0===o||o,a=e.removeOptimistic,s=e.onWatchUpdated,l=function(e){var o=r,i=o.data,a=o.optimisticData;++r.txCount,e&&(r.data=r.optimisticData=e);try{return t=n(r)}finally{--r.txCount,r.data=i,r.optimisticData=a}},c=new Set;return s&&!this.txCount&&this.broadcastWatches(An(An({},e),{onWatchUpdated:function(e){return c.add(e),!1}})),"string"==typeof i?this.optimisticData=this.optimisticData.addLayer(i,l):!1===i?l(this.data):l(),"string"==typeof a&&(this.optimisticData=this.optimisticData.removeLayer(a)),s&&c.size?(this.broadcastWatches(An(An({},e),{onWatchUpdated:function(e,t){var r=s.call(this,e,t);return!1!==r&&c.delete(e),r}})),c.size&&c.forEach((function(e){return r.maybeBroadcastWatch.dirty(e)}))):this.broadcastWatches(e),t},t.prototype.performTransaction=function(e,t){return this.batch({update:e,optimistic:t||null!==t})},t.prototype.transformDocument=function(e){if(this.addTypename){var t=this.typenameDocumentCache.get(e);return t||(t=Ec(e),this.typenameDocumentCache.set(e,t),this.typenameDocumentCache.set(t,t)),t}return e},t.prototype.broadcastWatches=function(e){var t=this;this.txCount||this.watches.forEach((function(r){return t.maybeBroadcastWatch(r,e)}))},t.prototype.broadcastWatch=function(e,t){var r=e.lastDiff,n=this.diff(e);t&&(e.optimistic&&"string"==typeof t.optimistic&&(n.fromOptimisticTransaction=!0),t.onWatchUpdated&&!1===t.onWatchUpdated.call(this,e,n,r))||(!r||!Bu(r.result,n.result))&&e.callback(e.lastDiff=n,r)},t}(Rd);var zh,Nh=function(e){var t="";(pu(e.graphQLErrors)||pu(e.clientErrors))&&(e.graphQLErrors||[]).concat(e.clientErrors||[]).forEach((function(e){var r=e?e.message:"Error message not found.";t+="".concat(r,"\n")}));return e.networkError&&(t+="".concat(e.networkError.message,"\n")),t=t.replace(/\n$/,"")},Lh=function(e){function t(r){var n=r.graphQLErrors,o=r.clientErrors,i=r.networkError,a=r.errorMessage,s=r.extraInfo,l=e.call(this,a)||this;return l.graphQLErrors=n||[],l.clientErrors=o||[],l.networkError=i||null,l.message=a||Nh(l),l.extraInfo=s,l.__proto__=t.prototype,l}return Cn(t,e),t}(Error);function Bh(e){return!!e&&e<7}!function(e){e[e.loading=1]="loading",e[e.setVariables=2]="setVariables",e[e.fetchMore=3]="fetchMore",e[e.refetch=4]="refetch",e[e.poll=6]="poll",e[e.ready=7]="ready",e[e.error=8]="error"}(zh||(zh={}));var qh=Object.assign,Uh=Object.hasOwnProperty,Vh=function(e){function t(t){var r=t.queryManager,n=t.queryInfo,o=t.options,i=e.call(this,(function(e){try{var t=e._subscription._observer;t&&!t.error&&(t.error=Hh)}catch{}var r=!i.observers.size;i.observers.add(e);var n=i.last;return n&&n.error?e.error&&e.error(n.error):n&&n.result&&e.next&&e.next(n.result),r&&i.reobserve().catch((function(){})),function(){i.observers.delete(e)&&!i.observers.size&&i.tearDownQuery()}}))||this;i.observers=new Set,i.subscriptions=new Set,i.queryInfo=n,i.queryManager=r,i.isTornDown=!1;var a=r.defaultOptions.watchQuery,s=(void 0===a?{}:a).fetchPolicy,l=void 0===s?"cache-first":s,c=o.fetchPolicy,u=void 0===c?l:c,d=o.initialFetchPolicy,h=void 0===d?"standby"===u?l:u:d;i.options=An(An({},o),{initialFetchPolicy:h,fetchPolicy:u}),i.queryId=n.queryId||r.generateQueryId();var p=pc(i.query);return i.queryName=p&&p.name&&p.name.value,i}return Cn(t,e),Object.defineProperty(t.prototype,"query",{get:function(){return this.queryManager.transform(this.options.query).document},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"variables",{get:function(){return this.options.variables},enumerable:!1,configurable:!0}),t.prototype.result=function(){var e=this;return new Promise((function(t,r){var n={next:function(r){t(r),e.observers.delete(n),e.observers.size||e.queryManager.removeQuery(e.queryId),setTimeout((function(){o.unsubscribe()}),0)},error:r},o=e.subscribe(n)}))},t.prototype.getCurrentResult=function(e){void 0===e&&(e=!0);var t=this.getLastResult(!0),r=this.queryInfo.networkStatus||t&&t.networkStatus||zh.ready,n=An(An({},t),{loading:Bh(r),networkStatus:r}),o=this.options.fetchPolicy,i=void 0===o?"cache-first":o;if("network-only"!==i&&"no-cache"!==i&&"standby"!==i&&!this.queryManager.transform(this.options.query).hasForcedResolvers){var a=this.queryInfo.getDiff();(a.complete||this.options.returnPartialData)&&(n.data=a.result),Bu(n.data,{})&&(n.data=void 0),a.complete?(delete n.partial,a.complete&&n.networkStatus===zh.loading&&("cache-first"===i||"cache-only"===i)&&(n.networkStatus=zh.ready,n.loading=!1)):n.partial=!0,__DEV__&&!a.complete&&!this.options.partialRefetch&&!n.loading&&!n.data&&!n.error&&Wh(a.missing)}return e&&this.updateLastResult(n),n},t.prototype.isDifferentFromLastResult=function(e){return!this.last||!Bu(this.last.result,e)},t.prototype.getLast=function(e,t){var r=this.last;if(r&&r[e]&&(!t||Bu(r.variables,this.variables)))return r[e]},t.prototype.getLastResult=function(e){return this.getLast("result",e)},t.prototype.getLastError=function(e){return this.getLast("error",e)},t.prototype.resetLastResults=function(){delete this.last,this.isTornDown=!1},t.prototype.resetQueryStoreErrors=function(){this.queryManager.resetErrors(this.queryId)},t.prototype.refetch=function(e){var t,r={pollInterval:0},n=this.options.fetchPolicy;if(r.fetchPolicy="cache-and-network"===n?n:"no-cache"===n?"no-cache":"network-only",__DEV__&&e&&Uh.call(e,"variables")){var o=mc(this.query),i=o.variableDefinitions;(!i||!i.some((function(e){return"variables"===e.variable.name.value})))&&__DEV__&&hl.warn("Called refetch(".concat(JSON.stringify(e),") for query ").concat((null===(t=o.name)||void 0===t?void 0:t.value)||JSON.stringify(o),", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"))}return e&&!Bu(this.options.variables,e)&&(r.variables=this.options.variables=An(An({},this.options.variables),e)),this.queryInfo.resetLastWrite(),this.reobserve(r,zh.refetch)},t.prototype.fetchMore=function(e){var t=this,r=An(An({},e.query?e:An(An(An(An({},this.options),{query:this.query}),e),{variables:An(An({},this.options.variables),e.variables)})),{fetchPolicy:"no-cache"}),n=this.queryManager.generateQueryId(),o=this.queryInfo,i=o.networkStatus;o.networkStatus=zh.fetchMore,r.notifyOnNetworkStatusChange&&this.observe();var a=new Set;return this.queryManager.fetchQuery(n,r,zh.fetchMore).then((function(s){return t.queryManager.removeQuery(n),o.networkStatus===zh.fetchMore&&(o.networkStatus=i),t.queryManager.cache.batch({update:function(n){var o=e.updateQuery;o?n.updateQuery({query:t.query,variables:t.variables,returnPartialData:!0,optimistic:!1},(function(e){return o(e,{fetchMoreResult:s.data,variables:r.variables})})):n.writeQuery({query:r.query,variables:r.variables,data:s.data})},onWatchUpdated:function(e){a.add(e.query)}}),s})).finally((function(){a.has(t.query)||Qh(t)}))},t.prototype.subscribeToMore=function(e){var t=this,r=this.queryManager.startGraphQLSubscription({query:e.document,variables:e.variables,context:e.context}).subscribe({next:function(r){var n=e.updateQuery;n&&t.updateQuery((function(e,t){var o=t.variables;return n(e,{subscriptionData:r,variables:o})}))},error:function(t){e.onError?e.onError(t):__DEV__&&hl.error("Unhandled GraphQL subscription error",t)}});return this.subscriptions.add(r),function(){t.subscriptions.delete(r)&&r.unsubscribe()}},t.prototype.setOptions=function(e){return this.reobserve(e)},t.prototype.setVariables=function(e){return Bu(this.variables,e)?this.observers.size?this.result():Promise.resolve():(this.options.variables=e,this.observers.size?this.reobserve({fetchPolicy:this.options.initialFetchPolicy,variables:e},zh.setVariables):Promise.resolve())},t.prototype.updateQuery=function(e){var t=this.queryManager,r=e(t.cache.diff({query:this.options.query,variables:this.variables,returnPartialData:!0,optimistic:!1}).result,{variables:this.variables});r&&(t.cache.writeQuery({query:this.options.query,data:r,variables:this.variables}),t.broadcastQueries())},t.prototype.startPolling=function(e){this.options.pollInterval=e,this.updatePolling()},t.prototype.stopPolling=function(){this.options.pollInterval=0,this.updatePolling()},t.prototype.applyNextFetchPolicy=function(e,t){if(t.nextFetchPolicy){var r=t.fetchPolicy,n=void 0===r?"cache-first":r,o=t.initialFetchPolicy,i=void 0===o?n:o;"standby"===n||("function"==typeof t.nextFetchPolicy?t.fetchPolicy=t.nextFetchPolicy(n,{reason:e,options:t,observable:this,initialFetchPolicy:i}):t.fetchPolicy="variables-changed"===e?i:t.nextFetchPolicy)}return t.fetchPolicy},t.prototype.fetch=function(e,t){return this.queryManager.setObservableQuery(this),this.queryManager.fetchQueryObservable(this.queryId,e,t)},t.prototype.updatePolling=function(){var e=this;if(!this.queryManager.ssrMode){var t=this.pollingInfo,r=this.options.pollInterval;if(!r)return void(t&&(clearTimeout(t.timeout),delete this.pollingInfo));if(!t||t.interval!==r){__DEV__?hl(r,"Attempted to start a polling query without a polling interval."):hl(r,10),(t||(this.pollingInfo={})).interval=r;var n=function(){e.pollingInfo&&(Bh(e.queryInfo.networkStatus)?o():e.reobserve({fetchPolicy:"network-only"},zh.poll).then(o,o))},o=function(){var t=e.pollingInfo;t&&(clearTimeout(t.timeout),t.timeout=setTimeout(n,t.interval))};o()}}},t.prototype.updateLastResult=function(e,t){return void 0===t&&(t=this.variables),this.last=An(An({},this.last),{result:this.queryManager.assumeImmutableResults?e:ru(e),variables:t}),pu(e.errors)||delete this.last.error,this.last},t.prototype.reobserve=function(e,t){var r=this;this.isTornDown=!1;var n=t===zh.refetch||t===zh.fetchMore||t===zh.poll,o=this.options.variables,i=this.options.fetchPolicy,a=vu(this.options,e||{}),s=n?a:qh(this.options,a);n||(this.updatePolling(),e&&e.variables&&!Bu(e.variables,o)&&"standby"!==s.fetchPolicy&&s.fetchPolicy===i&&(this.applyNextFetchPolicy("variables-changed",s),void 0===t&&(t=zh.setVariables)));var l=s.variables&&An({},s.variables),c=this.fetch(s,t),u={next:function(e){r.reportResult(e,l)},error:function(e){r.reportError(e,l)}};return n||(this.concast&&this.observer&&this.concast.removeObserver(this.observer),this.concast=c,this.observer=u),c.addObserver(u),c.promise},t.prototype.observe=function(){this.reportResult(this.getCurrentResult(!1),this.variables)},t.prototype.reportResult=function(e,t){var r=this.getLastError();(r||this.isDifferentFromLastResult(e))&&((r||!e.partial||this.options.returnPartialData)&&this.updateLastResult(e,t),iu(this.observers,"next",e))},t.prototype.reportError=function(e,t){var r=An(An({},this.getLastResult()),{error:e,errors:e.graphQLErrors,networkStatus:zh.error,loading:!1});this.updateLastResult(r,t),iu(this.observers,"error",this.last.error=e)},t.prototype.hasObservers=function(){return this.observers.size>0},t.prototype.tearDownQuery=function(){this.isTornDown||(this.concast&&this.observer&&(this.concast.removeObserver(this.observer),delete this.concast,delete this.observer),this.stopPolling(),this.subscriptions.forEach((function(e){return e.unsubscribe()})),this.subscriptions.clear(),this.queryManager.stopQuery(this.queryId),this.observers.clear(),this.isTornDown=!0)},t}(Xc);function Qh(e){var t=e.options,r=t.fetchPolicy,n=t.nextFetchPolicy;return"cache-and-network"===r||"network-only"===r?e.reobserve({fetchPolicy:"cache-first",nextFetchPolicy:function(){return this.nextFetchPolicy=n,"function"==typeof n?n.apply(this,arguments):r}}):e.reobserve()}function Hh(e){__DEV__&&hl.error("Unhandled error",e.message,e.stack)}function Wh(e){__DEV__&&e&&__DEV__&&hl.debug("Missing cache result fields: ".concat(JSON.stringify(e)),e)}uu(Vh);var Gh=function(){function e(e){var t=e.cache,r=e.client,n=e.resolvers,o=e.fragmentMatcher;this.cache=t,r&&(this.client=r),n&&this.addResolvers(n),o&&this.setFragmentMatcher(o)}return e.prototype.addResolvers=function(e){var t=this;this.resolvers=this.resolvers||{},Array.isArray(e)?e.forEach((function(e){t.resolvers=Ac(t.resolvers,e)})):this.resolvers=Ac(this.resolvers,e)},e.prototype.setResolvers=function(e){this.resolvers={},this.addResolvers(e)},e.prototype.getResolvers=function(){return this.resolvers||{}},e.prototype.runResolvers=function(e){var t=e.document,r=e.remoteResult,n=e.context,o=e.variables,i=e.onlyRunForcedResolvers,a=void 0!==i&&i;return In(this,void 0,void 0,(function(){return Pn(this,(function(e){return t?[2,this.resolveDocument(t,r.data,n,o,this.fragmentMatcher,a).then((function(e){return An(An({},r),{data:e.result})}))]:[2,r]}))}))},e.prototype.setFragmentMatcher=function(e){this.fragmentMatcher=e},e.prototype.getFragmentMatcher=function(){return this.fragmentMatcher},e.prototype.clientQuery=function(e){return Gl(["client"],e)&&this.resolvers?e:null},e.prototype.serverQuery=function(e){return function(e){hc(e);var t=kc([{test:function(e){return"client"===e.name.value},remove:!0}],e);return t&&(t=zl(t,{FragmentDefinition:{enter:function(e){if(e.selectionSet&&e.selectionSet.selections.every((function(e){return uc(e)&&"__typename"===e.name.value})))return null}}})),t}(e)},e.prototype.prepareContext=function(e){var t=this.cache;return An(An({},e),{cache:t,getCacheKey:function(e){return t.identify(e)}})},e.prototype.addExportedVariables=function(e,t,r){return void 0===t&&(t={}),void 0===r&&(r={}),In(this,void 0,void 0,(function(){return Pn(this,(function(n){return e?[2,this.resolveDocument(e,this.buildRootValueFromCache(e,t)||{},this.prepareContext(r),t).then((function(e){return An(An({},t),e.exportedVariables)}))]:[2,An({},t)]}))}))},e.prototype.shouldForceResolvers=function(e){var t=!1;return zl(e,{Directive:{enter:function(e){if("client"===e.name.value&&e.arguments&&(t=e.arguments.some((function(e){return"always"===e.name.value&&"BooleanValue"===e.value.kind&&!0===e.value.value}))))return Fl}}}),t},e.prototype.buildRootValueFromCache=function(e,t){return this.cache.diff({query:Oc(e),variables:t,returnPartialData:!0,optimistic:!1}).result},e.prototype.resolveDocument=function(e,t,r,n,o,i){return void 0===r&&(r={}),void 0===n&&(n={}),void 0===o&&(o=function(){return!0}),void 0===i&&(i=!1),In(this,void 0,void 0,(function(){var a,s,l,c,u,d,h,p,f;return Pn(this,(function(v){return a=gc(e),s=vc(e),l=Kl(s),c=a.operation,u=c?c.charAt(0).toUpperCase()+c.slice(1):"Query",h=(d=this).cache,p=d.client,f={fragmentMap:l,context:An(An({},r),{cache:h,client:p}),variables:n,fragmentMatcher:o,defaultOperationType:u,exportedVariables:{},onlyRunForcedResolvers:i},[2,this.resolveSelectionSet(a.selectionSet,t,f).then((function(e){return{result:e,exportedVariables:f.exportedVariables}}))]}))}))},e.prototype.resolveSelectionSet=function(e,t,r){return In(this,void 0,void 0,(function(){var n,o,i,a,s,l=this;return Pn(this,(function(c){return n=r.fragmentMap,o=r.context,i=r.variables,a=[t],s=function(e){return In(l,void 0,void 0,(function(){var s,l;return Pn(this,(function(c){return Wl(e,i)?uc(e)?[2,this.resolveField(e,t,r).then((function(t){var r;typeof t<"u"&&a.push(((r={})[lc(e)]=t,r))}))]:(dc(e)?s=e:(s=n[e.name.value],__DEV__?hl(s,"No fragment named ".concat(e.name.value)):hl(s,9)),s&&s.typeCondition&&(l=s.typeCondition.name.value,r.fragmentMatcher(t,l,o))?[2,this.resolveSelectionSet(s.selectionSet,t,r).then((function(e){a.push(e)}))]:[2]):[2]}))}))},[2,Promise.all(e.selections.map(s)).then((function(){return Dc(a)}))]}))}))},e.prototype.resolveField=function(e,t,r){return In(this,void 0,void 0,(function(){var n,o,i,a,s,l,c,u,d,h=this;return Pn(this,(function(p){return n=r.variables,o=e.name.value,i=lc(e),a=o!==i,s=t[i]||t[o],l=Promise.resolve(s),(!r.onlyRunForcedResolvers||this.shouldForceResolvers(e))&&(c=t.__typename||r.defaultOperationType,(u=this.resolvers&&this.resolvers[c])&&((d=u[a?o:i])&&(l=Promise.resolve(sh.withValue(this.cache,d,[t,sc(e,n),r.context,{field:e,fragmentMap:r.fragmentMap}]))))),[2,l.then((function(t){return void 0===t&&(t=s),e.directives&&e.directives.forEach((function(e){"export"===e.name.value&&e.arguments&&e.arguments.forEach((function(e){"as"===e.name.value&&"StringValue"===e.value.kind&&(r.exportedVariables[e.value.value]=t)}))})),e.selectionSet&&null!=t?Array.isArray(t)?h.resolveSubSelectedArray(e,t,r):e.selectionSet?h.resolveSelectionSet(e.selectionSet,t,r):void 0:t}))]}))}))},e.prototype.resolveSubSelectedArray=function(e,t,r){var n=this;return Promise.all(t.map((function(t){return null===t?null:Array.isArray(t)?n.resolveSubSelectedArray(e,t,r):e.selectionSet?n.resolveSelectionSet(e.selectionSet,t,r):void 0})))},e}(),Yh=new(su?WeakMap:Map);function Jh(e,t){var r=e[t];"function"==typeof r&&(e[t]=function(){return Yh.set(e,(Yh.get(e)+1)%1e15),r.apply(this,arguments)})}function Kh(e){e.notifyTimeout&&(clearTimeout(e.notifyTimeout),e.notifyTimeout=void 0)}var Xh=function(){function e(e,t){void 0===t&&(t=e.generateQueryId()),this.queryId=t,this.listeners=new Set,this.document=null,this.lastRequestId=1,this.subscriptions=new Set,this.stopped=!1,this.dirty=!1,this.observableQuery=null;var r=this.cache=e.cache;Yh.has(r)||(Yh.set(r,0),Jh(r,"evict"),Jh(r,"modify"),Jh(r,"reset"))}return e.prototype.init=function(e){var t=e.networkStatus||zh.loading;return this.variables&&this.networkStatus!==zh.loading&&!Bu(this.variables,e.variables)&&(t=zh.setVariables),Bu(e.variables,this.variables)||(this.lastDiff=void 0),Object.assign(this,{document:e.document,variables:e.variables,networkError:null,graphQLErrors:this.graphQLErrors||[],networkStatus:t}),e.observableQuery&&this.setObservableQuery(e.observableQuery),e.lastRequestId&&(this.lastRequestId=e.lastRequestId),this},e.prototype.reset=function(){Kh(this),this.lastDiff=void 0,this.dirty=!1},e.prototype.getDiff=function(e){void 0===e&&(e=this.variables);var t=this.getDiffOptions(e);if(this.lastDiff&&Bu(t,this.lastDiff.options))return this.lastDiff.diff;this.updateWatch(this.variables=e);var r=this.observableQuery;if(r&&"no-cache"===r.options.fetchPolicy)return{complete:!1};var n=this.cache.diff(t);return this.updateLastDiff(n,t),n},e.prototype.updateLastDiff=function(e,t){this.lastDiff=e?{diff:e,options:t||this.getDiffOptions()}:void 0},e.prototype.getDiffOptions=function(e){var t;return void 0===e&&(e=this.variables),{query:this.document,variables:e,returnPartialData:!0,optimistic:!0,canonizeResults:null===(t=this.observableQuery)||void 0===t?void 0:t.options.canonizeResults}},e.prototype.setDiff=function(e){var t=this,r=this.lastDiff&&this.lastDiff.diff;this.updateLastDiff(e),!this.dirty&&!Bu(r&&r.result,e&&e.result)&&(this.dirty=!0,this.notifyTimeout||(this.notifyTimeout=setTimeout((function(){return t.notify()}),0)))},e.prototype.setObservableQuery=function(e){var t=this;e!==this.observableQuery&&(this.oqListener&&this.listeners.delete(this.oqListener),this.observableQuery=e,e?(e.queryInfo=this,this.listeners.add(this.oqListener=function(){t.getDiff().fromOptimisticTransaction?e.observe():Qh(e)})):delete this.oqListener)},e.prototype.notify=function(){var e=this;Kh(this),this.shouldNotify()&&this.listeners.forEach((function(t){return t(e)})),this.dirty=!1},e.prototype.shouldNotify=function(){if(!this.dirty||!this.listeners.size)return!1;if(Bh(this.networkStatus)&&this.observableQuery){var e=this.observableQuery.options.fetchPolicy;if("cache-only"!==e&&"cache-and-network"!==e)return!1}return!0},e.prototype.stop=function(){if(!this.stopped){this.stopped=!0,this.reset(),this.cancel(),this.cancel=e.prototype.cancel,this.subscriptions.forEach((function(e){return e.unsubscribe()}));var t=this.observableQuery;t&&t.stopPolling()}},e.prototype.cancel=function(){},e.prototype.updateWatch=function(e){var t=this;void 0===e&&(e=this.variables);var r=this.observableQuery;if(!r||"no-cache"!==r.options.fetchPolicy){var n=An(An({},this.getDiffOptions(e)),{watcher:this,callback:function(e){return t.setDiff(e)}});(!this.lastWatch||!Bu(n,this.lastWatch))&&(this.cancel(),this.cancel=this.cache.watch(this.lastWatch=n))}},e.prototype.resetLastWrite=function(){this.lastWrite=void 0},e.prototype.shouldWrite=function(e,t){var r=this.lastWrite;return!(r&&r.dmCount===Yh.get(this.cache)&&Bu(t,r.variables)&&Bu(e.data,r.result.data))},e.prototype.markResult=function(e,t,r){var n=this;this.graphQLErrors=pu(e.errors)?e.errors:[],this.reset(),"no-cache"===t.fetchPolicy?this.updateLastDiff({result:e.data,complete:!0},this.getDiffOptions(t.variables)):0!==r&&(Zh(e,t.errorPolicy)?this.cache.performTransaction((function(o){if(n.shouldWrite(e,t.variables))o.writeQuery({query:n.document,data:e.data,variables:t.variables,overwrite:1===r}),n.lastWrite={result:e,variables:t.variables,dmCount:Yh.get(n.cache)};else if(n.lastDiff&&n.lastDiff.diff.complete)return void(e.data=n.lastDiff.diff.result);var i=n.getDiffOptions(t.variables),a=o.diff(i);n.stopped||n.updateWatch(t.variables),n.updateLastDiff(a,i),a.complete&&(e.data=a.result)})):this.lastWrite=void 0)},e.prototype.markReady=function(){return this.networkError=null,this.networkStatus=zh.ready},e.prototype.markError=function(e){return this.networkStatus=zh.error,this.lastWrite=void 0,this.reset(),e.graphQLErrors&&(this.graphQLErrors=e.graphQLErrors),e.networkError&&(this.networkError=e.networkError),e},e}();function Zh(e,t){void 0===t&&(t="none");var r="ignore"===t||"all"===t,n=!fu(e);return!n&&r&&e.data&&(n=!0),n}var ep=Object.prototype.hasOwnProperty,tp=function(){function e(e){var t=e.cache,r=e.link,n=e.defaultOptions,o=e.queryDeduplication,i=void 0!==o&&o,a=e.onBroadcast,s=e.ssrMode,l=void 0!==s&&s,c=e.clientAwareness,u=void 0===c?{}:c,d=e.localState,h=e.assumeImmutableResults;this.clientAwareness={},this.queries=new Map,this.fetchCancelFns=new Map,this.transformCache=new(su?WeakMap:Map),this.queryIdCounter=1,this.requestIdCounter=1,this.mutationIdCounter=1,this.inFlightLinkObservables=new Map,this.cache=t,this.link=r,this.defaultOptions=n||Object.create(null),this.queryDeduplication=i,this.clientAwareness=u,this.localState=d||new Gh({cache:t}),this.ssrMode=l,this.assumeImmutableResults=!!h,(this.onBroadcast=a)&&(this.mutationStore=Object.create(null))}return e.prototype.stop=function(){var e=this;this.queries.forEach((function(t,r){e.stopQueryNoBroadcast(r)})),this.cancelPendingFetches(__DEV__?new dl("QueryManager stopped while query was in flight"):new dl(11))},e.prototype.cancelPendingFetches=function(e){this.fetchCancelFns.forEach((function(t){return t(e)})),this.fetchCancelFns.clear()},e.prototype.mutate=function(e){var t,r,n=e.mutation,o=e.variables,i=e.optimisticResponse,a=e.updateQueries,s=e.refetchQueries,l=void 0===s?[]:s,c=e.awaitRefetchQueries,u=void 0!==c&&c,d=e.update,h=e.onQueryUpdated,p=e.fetchPolicy,f=void 0===p?(null===(t=this.defaultOptions.mutate)||void 0===t?void 0:t.fetchPolicy)||"network-only":p,v=e.errorPolicy,m=void 0===v?(null===(r=this.defaultOptions.mutate)||void 0===r?void 0:r.errorPolicy)||"none":v,g=e.keepRootFields,y=e.context;return In(this,void 0,void 0,(function(){var e,t,r;return Pn(this,(function(s){switch(s.label){case 0:return __DEV__?hl(n,"mutation option is required. You must specify your GraphQL document in the mutation option."):hl(n,12),__DEV__?hl("network-only"===f||"no-cache"===f,"Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `
											network - only` behavior automatically writes mutation results to the cache. Passing `
											no - cache` skips the cache write."):hl("network-only"===f||"no-cache"===f,13),e=this.generateMutationId(),n=this.transform(n).document,o=this.getVariables(n,o),this.transform(n).hasClientExports?[4,this.localState.addExportedVariables(n,o,y)]:[3,2];case 1:o=s.sent(),s.label=2;case 2:return t=this.mutationStore&&(this.mutationStore[e]={mutation:n,variables:o,loading:!0,error:null}),i&&this.markMutationOptimistic(i,{mutationId:e,document:n,variables:o,fetchPolicy:f,errorPolicy:m,context:y,updateQueries:a,update:d,keepRootFields:g}),this.broadcastQueries(),r=this,[2,new Promise((function(s,c){return au(r.getObservableFromLink(n,An(An({},y),{optimisticResponse:i}),o,!1),(function(s){if(fu(s)&&"none"===m)throw new Lh({graphQLErrors:s.errors});t&&(t.loading=!1,t.error=null);var c=An({},s);return"function"==typeof l&&(l=l(c)),"ignore"===m&&fu(c)&&delete c.errors,r.markMutationResult({mutationId:e,result:c,document:n,variables:o,fetchPolicy:f,errorPolicy:m,context:y,update:d,updateQueries:a,awaitRefetchQueries:u,refetchQueries:l,removeOptimistic:i?e:void 0,onQueryUpdated:h,keepRootFields:g})})).subscribe({next:function(e){r.broadcastQueries(),s(e)},error:function(n){t&&(t.loading=!1,t.error=n),i&&r.cache.removeOptimistic(e),r.broadcastQueries(),c(n instanceof Lh?n:new Lh({networkError:n}))}})}))]}}))}))},e.prototype.markMutationResult=function(e,t){var r=this;void 0===t&&(t=this.cache);var n=e.result,o=[],i="no-cache"===e.fetchPolicy;if(!i&&Zh(n,e.errorPolicy)){o.push({result:n.data,dataId:"ROOT_MUTATION",query:e.document,variables:e.variables});var a=e.updateQueries;a&&this.queries.forEach((function(e,i){var s=e.observableQuery,l=s&&s.queryName;if(l&&ep.call(a,l)){var c=a[l],u=r.queries.get(i),d=u.document,h=u.variables,p=t.diff({query:d,variables:h,returnPartialData:!0,optimistic:!1}),f=p.result;if(p.complete&&f){var v=c(f,{mutationResult:n,queryName:d&&fc(d)||void 0,queryVariables:h});v&&o.push({result:v,dataId:"ROOT_QUERY",query:d,variables:h})}}}))}if(o.length>0||e.refetchQueries||e.update||e.onQueryUpdated||e.removeOptimistic){var s=[];if(this.refetchQueries({updateCache:function(t){i||o.forEach((function(e){return t.write(e)}));var a=e.update;if(a){if(!i){var s=t.diff({id:"ROOT_MUTATION",query:r.transform(e.document).asQuery,variables:e.variables,optimistic:!1,returnPartialData:!0});s.complete&&(n=An(An({},n),{data:s.result}))}a(t,n,{context:e.context,variables:e.variables})}!i&&!e.keepRootFields&&t.modify({id:"ROOT_MUTATION",fields:function(e,t){var r=t.fieldName,n=t.DELETE;return"__typename"===r?e:n}})},include:e.refetchQueries,optimistic:!1,removeOptimistic:e.removeOptimistic,onQueryUpdated:e.onQueryUpdated||null}).forEach((function(e){return s.push(e)})),e.awaitRefetchQueries||e.onQueryUpdated)return Promise.all(s).then((function(){return n}))}return Promise.resolve(n)},e.prototype.markMutationOptimistic=function(e,t){var r=this,n="function"==typeof e?e(t.variables):e;return this.cache.recordOptimisticTransaction((function(e){try{r.markMutationResult(An(An({},t),{result:{data:n}}),e)}catch(o){__DEV__&&hl.error(o)}}),t.mutationId)},e.prototype.fetchQuery=function(e,t,r){return this.fetchQueryObservable(e,t,r).promise},e.prototype.getQueryStore=function(){var e=Object.create(null);return this.queries.forEach((function(t,r){e[r]={variables:t.variables,networkStatus:t.networkStatus,networkError:t.networkError,graphQLErrors:t.graphQLErrors}})),e},e.prototype.resetErrors=function(e){var t=this.queries.get(e);t&&(t.networkError=void 0,t.graphQLErrors=[])},e.prototype.transform=function(e){var t=this.transformCache;if(!t.has(e)){var r=this.cache.transformDocument(e),n=function(e){return kc([Sc],hc(e))}(this.cache.transformForLink(r)),o=this.localState.clientQuery(r),i=n&&this.localState.serverQuery(n),a={document:r,hasClientExports:Yl(r),hasForcedResolvers:this.localState.shouldForceResolvers(r),clientQuery:o,serverQuery:i,defaultVars:yc(pc(r)),asQuery:An(An({},r),{definitions:r.definitions.map((function(e){return"OperationDefinition"===e.kind&&"query"!==e.operation?An(An({},e),{operation:"query"}):e}))})},s=function(e){e&&!t.has(e)&&t.set(e,a)};s(e),s(r),s(o),s(i)}return t.get(e)},e.prototype.getVariables=function(e,t){return An(An({},this.transform(e).defaultVars),t)},e.prototype.watchQuery=function(e){typeof(e=An(An({},e),{variables:this.getVariables(e.query,e.variables)})).notifyOnNetworkStatusChange>"u"&&(e.notifyOnNetworkStatusChange=!1);var t=new Xh(this),r=new Vh({queryManager:this,queryInfo:t,options:e});return this.queries.set(r.queryId,t),t.init({document:r.query,observableQuery:r,variables:r.variables}),r},e.prototype.query=function(e,t){var r=this;return void 0===t&&(t=this.generateQueryId()),__DEV__?hl(e.query,"query option is required. You must specify your GraphQL document in the query option."):hl(e.query,14),__DEV__?hl("Document"===e.query.kind,'You must wrap the query string in a "gql" tag.'):hl("Document"===e.query.kind,15),__DEV__?hl(!e.returnPartialData,"returnPartialData option only supported on watchQuery."):hl(!e.returnPartialData,16),__DEV__?hl(!e.pollInterval,"pollInterval option only supported on watchQuery."):hl(!e.pollInterval,17),this.fetchQuery(t,e).finally((function(){return r.stopQuery(t)}))},e.prototype.generateQueryId=function(){return String(this.queryIdCounter++)},e.prototype.generateRequestId=function(){return this.requestIdCounter++},e.prototype.generateMutationId=function(){return String(this.mutationIdCounter++)},e.prototype.stopQueryInStore=function(e){this.stopQueryInStoreNoBroadcast(e),this.broadcastQueries()},e.prototype.stopQueryInStoreNoBroadcast=function(e){var t=this.queries.get(e);t&&t.stop()},e.prototype.clearStore=function(e){return void 0===e&&(e={discardWatches:!0}),this.cancelPendingFetches(__DEV__?new dl("Store reset while query was in flight (not completed in link chain)"):new dl(18)),this.queries.forEach((function(e){e.observableQuery?e.networkStatus=zh.loading:e.stop()})),this.mutationStore&&(this.mutationStore=Object.create(null)),this.cache.reset(e)},e.prototype.getObservableQueries=function(e){var t=this;void 0===e&&(e="active");var r=new Map,n=new Map,o=new Set;return Array.isArray(e)&&e.forEach((function(e){"string"==typeof e?n.set(e,!1):function(e){return Zl(e)&&"Document"===e.kind&&Array.isArray(e.definitions)}(e)?n.set(t.transform(e).document,!1):Zl(e)&&e.query&&o.add(e)})),this.queries.forEach((function(t,o){var i=t.observableQuery,a=t.document;if(i){if("all"===e)return void r.set(o,i);var s=i.queryName;if("standby"===i.options.fetchPolicy||"active"===e&&!i.hasObservers())return;("active"===e||s&&n.has(s)||a&&n.has(a))&&(r.set(o,i),s&&n.set(s,!0),a&&n.set(a,!0))}})),o.size&&o.forEach((function(e){var n=gu("legacyOneTimeQuery"),o=t.getQuery(n).init({document:e.query,variables:e.variables}),i=new Vh({queryManager:t,queryInfo:o,options:An(An({},e),{fetchPolicy:"network-only"})});hl(i.queryId===n),o.setObservableQuery(i),r.set(n,i)})),__DEV__&&n.size&&n.forEach((function(e,t){e||__DEV__&&hl.warn("Unknown query ".concat("string"==typeof t?"named ":"").concat(JSON.stringify(t,null,2)," requested in refetchQueries options.include array"))})),r},e.prototype.reFetchObservableQueries=function(e){var t=this;void 0===e&&(e=!1);var r=[];return this.getObservableQueries(e?"all":"active").forEach((function(n,o){var i=n.options.fetchPolicy;n.resetLastResults(),(e||"standby"!==i&&"cache-only"!==i)&&r.push(n.refetch()),t.getQuery(o).setDiff(null)})),this.broadcastQueries(),Promise.all(r)},e.prototype.setObservableQuery=function(e){this.getQuery(e.queryId).setObservableQuery(e)},e.prototype.startGraphQLSubscription=function(e){var t=this,r=e.query,n=e.fetchPolicy,o=e.errorPolicy,i=e.variables,a=e.context,s=void 0===a?{}:a;r=this.transform(r).document,i=this.getVariables(r,i);var l=function(e){return t.getObservableFromLink(r,s,e).map((function(i){if("no-cache"!==n&&(Zh(i,o)&&t.cache.write({query:r,result:i.data,dataId:"ROOT_SUBSCRIPTION",variables:e}),t.broadcastQueries()),fu(i))throw new Lh({graphQLErrors:i.errors});return i}))};if(this.transform(r).hasClientExports){var c=this.localState.addExportedVariables(r,i,s).then(l);return new Xc((function(e){var t=null;return c.then((function(r){return t=r.subscribe(e)}),e.error),function(){return t&&t.unsubscribe()}}))}return l(i)},e.prototype.stopQuery=function(e){this.stopQueryNoBroadcast(e),this.broadcastQueries()},e.prototype.stopQueryNoBroadcast=function(e){this.stopQueryInStoreNoBroadcast(e),this.removeQuery(e)},e.prototype.removeQuery=function(e){this.fetchCancelFns.delete(e),this.queries.has(e)&&(this.getQuery(e).stop(),this.queries.delete(e))},e.prototype.broadcastQueries=function(){this.onBroadcast&&this.onBroadcast(),this.queries.forEach((function(e){return e.notify()}))},e.prototype.getLocalState=function(){return this.localState},e.prototype.getObservableFromLink=function(e,t,r,n){var o,i=this;void 0===n&&(n=null!==(o=null==t?void 0:t.queryDeduplication)&&void 0!==o?o:this.queryDeduplication);var a,s=this.transform(e).serverQuery;if(s){var l=this.inFlightLinkObservables,c=this.link,u={query:s,variables:r,operationName:fc(s)||void 0,context:this.prepareContext(An(An({},t),{forceFetch:!n}))};if(t=u.context,n){var d=l.get(s)||new Map;l.set(s,d);var h=rh(r);if(!(a=d.get(h))){var p=new hu([Ou(c,u)]);d.set(h,a=p),p.cleanup((function(){d.delete(h)&&d.size<1&&l.delete(s)}))}}else a=new hu([Ou(c,u)])}else a=new hu([Xc.of({data:{}})]),t=this.prepareContext(t);var f=this.transform(e).clientQuery;return f&&(a=au(a,(function(e){return i.localState.runResolvers({document:f,remoteResult:e,context:t,variables:r})}))),a},e.prototype.getResultsFromLink=function(e,t,r){var n=e.lastRequestId=this.generateRequestId();return au(this.getObservableFromLink(e.document,r.context,r.variables),(function(o){var i=pu(o.errors);if(n>=e.lastRequestId){if(i&&"none"===r.errorPolicy)throw e.markError(new Lh({graphQLErrors:o.errors}));e.markResult(o,r,t),e.markReady()}var a={data:o.data,loading:!1,networkStatus:zh.ready};return i&&"ignore"!==r.errorPolicy&&(a.errors=o.errors,a.networkStatus=zh.error),a}),(function(t){var r=function(e){return e.hasOwnProperty("graphQLErrors")}(t)?t:new Lh({networkError:t});throw n>=e.lastRequestId&&e.markError(r),r}))},e.prototype.fetchQueryObservable=function(e,t,r){var n=this;void 0===r&&(r=zh.loading);var o=this.transform(t.query).document,i=this.getVariables(o,t.variables),a=this.getQuery(e),s=this.defaultOptions.watchQuery,l=t.fetchPolicy,c=void 0===l?s&&s.fetchPolicy||"cache-first":l,u=t.errorPolicy,d=void 0===u?s&&s.errorPolicy||"none":u,h=t.returnPartialData,p=void 0!==h&&h,f=t.notifyOnNetworkStatusChange,v=void 0!==f&&f,m=t.context,g=void 0===m?{}:m,y=Object.assign({},t,{query:o,variables:i,fetchPolicy:c,errorPolicy:d,returnPartialData:p,notifyOnNetworkStatusChange:v,context:g}),b=function(e){y.variables=e;var o=n.fetchQueryByPolicy(a,y,r);return"standby"!==y.fetchPolicy&&o.length>0&&a.observableQuery&&a.observableQuery.applyNextFetchPolicy("after-fetch",t),o},_=function(){return n.fetchCancelFns.delete(e)};this.fetchCancelFns.set(e,(function(e){_(),setTimeout((function(){return w.cancel(e)}))}));var w=new hu(this.transform(y.query).hasClientExports?this.localState.addExportedVariables(y.query,y.variables,y.context).then(b):b(y.variables));return w.promise.then(_,_),w},e.prototype.refetchQueries=function(e){var t=this,r=e.updateCache,n=e.include,o=e.optimistic,i=void 0!==o&&o,a=e.removeOptimistic,s=void 0===a?i?gu("refetchQueries"):void 0:a,l=e.onQueryUpdated,c=new Map;n&&this.getObservableQueries(n).forEach((function(e,r){c.set(r,{oq:e,lastDiff:t.getQuery(r).getDiff()})}));var u=new Map;return r&&this.cache.batch({update:r,optimistic:i&&s||!1,removeOptimistic:s,onWatchUpdated:function(e,t,r){var n=e.watcher instanceof Xh&&e.watcher.observableQuery;if(n){if(l){c.delete(n.queryId);var o=l(n,t,r);return!0===o&&(o=n.refetch()),!1!==o&&u.set(n,o),o}null!==l&&c.set(n.queryId,{oq:n,lastDiff:r,diff:t})}}}),c.size&&c.forEach((function(e,r){var n,o=e.oq,i=e.lastDiff,a=e.diff;if(l){if(!a){var s=o.queryInfo;s.reset(),a=s.getDiff()}n=l(o,a,i)}(!l||!0===n)&&(n=o.refetch()),!1!==n&&u.set(o,n),r.indexOf("legacyOneTimeQuery")>=0&&t.stopQueryNoBroadcast(r)})),s&&this.cache.removeOptimistic(s),u},e.prototype.fetchQueryByPolicy=function(e,t,r){var n=this,o=t.query,i=t.variables,a=t.fetchPolicy,s=t.refetchWritePolicy,l=t.errorPolicy,c=t.returnPartialData,u=t.context,d=t.notifyOnNetworkStatusChange,h=e.networkStatus;e.init({document:this.transform(o).document,variables:i,networkStatus:r});var p=function(){return e.getDiff(i)},f=function(t,r){void 0===r&&(r=e.networkStatus||zh.loading);var a=t.result;__DEV__&&!c&&!Bu(a,{})&&Wh(t.missing);var s=function(e){return Xc.of(An({data:e,loading:Bh(r),networkStatus:r},t.complete?null:{partial:!0}))};return a&&n.transform(o).hasForcedResolvers?n.localState.runResolvers({document:o,remoteResult:{data:a},context:u,variables:i,onlyRunForcedResolvers:!0}).then((function(e){return s(e.data||void 0)})):s(a)},v="no-cache"===a?0:r===zh.refetch&&"merge"!==s?1:2,m=function(){return n.getResultsFromLink(e,v,{variables:i,context:u,fetchPolicy:a,errorPolicy:l})},g=d&&"number"==typeof h&&h!==r&&Bh(r);switch(a){default:case"cache-first":return(y=p()).complete?[f(y,e.markReady())]:c||g?[f(y),m()]:[m()];case"cache-and-network":var y;return(y=p()).complete||c||g?[f(y),m()]:[m()];case"cache-only":return[f(p(),e.markReady())];case"network-only":return g?[f(p()),m()]:[m()];case"no-cache":return g?[f(e.getDiff()),m()]:[m()];case"standby":return[]}},e.prototype.getQuery=function(e){return e&&!this.queries.has(e)&&this.queries.set(e,new Xh(this,e)),this.queries.get(e)},e.prototype.prepareContext=function(e){void 0===e&&(e={});var t=this.localState.prepareContext(e);return An(An({},t),{clientAwareness:this.clientAwareness})},e}(),rp=!1,np=function(){function e(e){var t=this;this.resetStoreCallbacks=[],this.clearStoreCallbacks=[];var r=e.uri,n=e.credentials,o=e.headers,i=e.cache,a=e.ssrMode,s=void 0!==a&&a,l=e.ssrForceFetchDelay,c=void 0===l?0:l,u=e.connectToDevTools,d=void 0===u?"object"==typeof window&&!window.__APOLLO_CLIENT__&&__DEV__:u,h=e.queryDeduplication,p=void 0===h||h,f=e.defaultOptions,v=e.assumeImmutableResults,m=void 0!==v&&v,g=e.resolvers,y=e.typeDefs,b=e.fragmentMatcher,_=e.name,w=e.version,x=e.link;if(x||(x=r?new Tu({uri:r,credentials:n,headers:o}):Su.empty()),!i)throw __DEV__?new dl("To initialize Apollo Client, you must specify a 'cache' property in the options object. \nFor more information, please visit: https://go.apollo.dev/c/docs"):new dl(7);if(this.link=x,this.cache=i,this.disableNetworkFetches=s||c>0,this.queryDeduplication=p,this.defaultOptions=f||Object.create(null),this.typeDefs=y,c&&setTimeout((function(){return t.disableNetworkFetches=!1}),c),this.watchQuery=this.watchQuery.bind(this),this.query=this.query.bind(this),this.mutate=this.mutate.bind(this),this.resetStore=this.resetStore.bind(this),this.reFetchObservableQueries=this.reFetchObservableQueries.bind(this),d&&"object"==typeof window&&(window.__APOLLO_CLIENT__=this),!rp&&__DEV__&&(rp=!0,typeof window<"u"&&window.document&&window.top===window.self&&!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__)){var k=window.navigator,E=k&&k.userAgent,S=void 0;"string"==typeof E&&(E.indexOf("Chrome/")>-1?S="https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm":E.indexOf("Firefox/")>-1&&(S="https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")),S&&__DEV__&&hl.log("Download the Apollo DevTools for a better development experience: "+S)}this.version=Cu,this.localState=new Gh({cache:i,client:this,resolvers:g,fragmentMatcher:b}),this.queryManager=new tp({cache:this.cache,link:this.link,defaultOptions:this.defaultOptions,queryDeduplication:p,ssrMode:s,clientAwareness:{name:_,version:w},localState:this.localState,assumeImmutableResults:m,onBroadcast:d?function(){t.devToolsHookCb&&t.devToolsHookCb({action:{},state:{queries:t.queryManager.getQueryStore(),mutations:t.queryManager.mutationStore||{}},dataWithOptimisticResults:t.cache.extract(!0)})}:void 0})}return e.prototype.stop=function(){this.queryManager.stop()},e.prototype.watchQuery=function(e){return this.defaultOptions.watchQuery&&(e=yu(this.defaultOptions.watchQuery,e)),this.disableNetworkFetches&&("network-only"===e.fetchPolicy||"cache-and-network"===e.fetchPolicy)&&(e=An(An({},e),{fetchPolicy:"cache-first"})),this.queryManager.watchQuery(e)},e.prototype.query=function(e){return this.defaultOptions.query&&(e=yu(this.defaultOptions.query,e)),__DEV__?hl("cache-and-network"!==e.fetchPolicy,"The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only."):hl("cache-and-network"!==e.fetchPolicy,8),this.disableNetworkFetches&&"network-only"===e.fetchPolicy&&(e=An(An({},e),{fetchPolicy:"cache-first"})),this.queryManager.query(e)},e.prototype.mutate=function(e){return this.defaultOptions.mutate&&(e=yu(this.defaultOptions.mutate,e)),this.queryManager.mutate(e)},e.prototype.subscribe=function(e){return this.queryManager.startGraphQLSubscription(e)},e.prototype.readQuery=function(e,t){return void 0===t&&(t=!1),this.cache.readQuery(e,t)},e.prototype.readFragment=function(e,t){return void 0===t&&(t=!1),this.cache.readFragment(e,t)},e.prototype.writeQuery=function(e){this.cache.writeQuery(e),this.queryManager.broadcastQueries()},e.prototype.writeFragment=function(e){this.cache.writeFragment(e),this.queryManager.broadcastQueries()},e.prototype.__actionHookForDevTools=function(e){this.devToolsHookCb=e},e.prototype.__requestRaw=function(e){return Ou(this.link,e)},e.prototype.resetStore=function(){var e=this;return Promise.resolve().then((function(){return e.queryManager.clearStore({discardWatches:!1})})).then((function(){return Promise.all(e.resetStoreCallbacks.map((function(e){return e()})))})).then((function(){return e.reFetchObservableQueries()}))},e.prototype.clearStore=function(){var e=this;return Promise.resolve().then((function(){return e.queryManager.clearStore({discardWatches:!0})})).then((function(){return Promise.all(e.clearStoreCallbacks.map((function(e){return e()})))}))},e.prototype.onResetStore=function(e){var t=this;return this.resetStoreCallbacks.push(e),function(){t.resetStoreCallbacks=t.resetStoreCallbacks.filter((function(t){return t!==e}))}},e.prototype.onClearStore=function(e){var t=this;return this.clearStoreCallbacks.push(e),function(){t.clearStoreCallbacks=t.clearStoreCallbacks.filter((function(t){return t!==e}))}},e.prototype.reFetchObservableQueries=function(e){return this.queryManager.reFetchObservableQueries(e)},e.prototype.refetchQueries=function(e){var t=this.queryManager.refetchQueries(e),r=[],n=[];t.forEach((function(e,t){r.push(t),n.push(e)}));var o=Promise.all(n);return o.queries=r,o.results=n,o.catch((function(e){__DEV__&&hl.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(e))})),o},e.prototype.getObservableQueries=function(e){return void 0===e&&(e="active"),this.queryManager.getObservableQueries(e)},e.prototype.extract=function(e){return this.cache.extract(e)},e.prototype.restore=function(e){return this.cache.restore(e)},e.prototype.addResolvers=function(e){this.localState.addResolvers(e)},e.prototype.setResolvers=function(e){this.localState.setResolvers(e)},e.prototype.getResolvers=function(){return this.localState.getResolvers()},e.prototype.setLocalStateFragmentMatcher=function(e){this.localState.setFragmentMatcher(e)},e.prototype.setLink=function(e){this.link=this.queryManager.link=e},e}();!function(e){var t=pl[fl];fl=Math.max(0,pl.indexOf(e))}(_l?"log":"silent");var op,ip,ap=class extends al{constructor(e,t,r){super(e,r),y(this,op,void 0),y(this,ip,void 0),this.networkStatus=zh.ready,this.partial=!1,b(this,op,!1),this.init(null!=t?t:null)}get query(){return this.document}set query(e){this.document=e}get canAutoSubscribe(){return!!this.client&&!!this.document&&!this.options.noAutoSubscribe&&this.shouldSubscribe()}hostConnected(){super.hostConnected(),g(this,op)&&this.observableQuery?(this.observableQuery.reobserve(),b(this,op,!1)):this.documentChanged(this.query)}hostDisconnected(){b(this,op,!0),super.hostDisconnected()}shouldSubscribe(e){var t,r,n;return null==(n=null==(r=(t=this.options).shouldSubscribe)?void 0:r.call(t,e))||n}canSubscribe(e){var t,r;return!(null!=(t=this.options.noAutoSubscribe)&&t||!this.client||!(null!=(r=null==e?void 0:e.query)?r:this.document))}watchQuery(e){var t;if(!this.client)throw new TypeError("No Apollo client. See https://apolloelements.dev/guides/getting-started/apollo-client/");return this.client.watchQuery({query:this.query,variables:null!=(t=this.variables)?t:void 0,context:this.options.context,errorPolicy:this.options.errorPolicy,fetchPolicy:this.options.fetchPolicy,notifyOnNetworkStatusChange:this.options.notifyOnNetworkStatusChange,partialRefetch:this.options.partialRefetch,pollInterval:this.options.pollInterval,returnPartialData:this.options.returnPartialData,nextFetchPolicy:this.options.nextFetchPolicy,...e})}nextData(e){var t,r,n,o,i,a;this.emitter.dispatchEvent(new CustomEvent("apollo-query-result",{detail:e}));let{data:s,error:l,errors:c,loading:u,networkStatus:d,partial:h}=this;this.data=e.data,this.error=null!=(t=e.error)?t:null,this.errors=null!=(r=e.errors)?r:[],this.loading=null!=(n=e.loading)&&n,this.networkStatus=e.networkStatus,this.partial=null!=(o=e.partial)&&o,null==(a=(i=this.options).onData)||a.call(i,e.data),this.notify({data:s,error:l,errors:c,loading:u,networkStatus:d,partial:h})}nextError(e){var t,r;let{error:n,loading:o}=this;this.emitter.dispatchEvent(new CustomEvent("apollo-error",{detail:e})),this.error=e,this.loading=!1,null==(r=(t=this.options).onError)||r.call(t,e),this.notify({error:n,loading:o})}clientChanged(){this.canSubscribe()&&this.shouldSubscribe()&&this.subscribe()}documentChanged(e){let t=null!=e?e:void 0;e!==g(this,ip)&&this.canSubscribe({query:t})&&this.shouldSubscribe({query:t})&&this.subscribe({query:t})}variablesChanged(e){this.observableQuery?this.refetch(e):this.canSubscribe({variables:e})&&this.shouldSubscribe({variables:e})&&this.subscribe({variables:e})}optionsChanged(e){var t,r;null==(r=null==(t=this.observableQuery)?void 0:t.setOptions)||r.call(t,e)}async refetch(e){if(!this.observableQuery)throw new Error("Cannot refetch without an ObservableQuery");return this.observableQuery.refetch(e)}subscribe(e){var t,r,n,o;this.observableQuery&&this.observableQuery.stopPolling(),this.observableQuery=this.watchQuery({query:this.query,variables:null!=(t=this.variables)?t:void 0,context:this.options.context,errorPolicy:this.options.errorPolicy,fetchPolicy:this.options.fetchPolicy,notifyOnNetworkStatusChange:this.options.notifyOnNetworkStatusChange,partialRefetch:this.options.partialRefetch,pollInterval:this.options.pollInterval,refetchWritePolicy:this.options.refetchWritePolicy,returnPartialData:this.options.returnPartialData,...e}),b(this,ip,null!=(n=null!=(r=null==e?void 0:e.query)?r:this.query)?n:void 0);let{loading:i}=this;return this.loading=!0,this.notify({loading:i}),null==(o=this.observableQuery)?void 0:o.subscribe({next:this.nextData.bind(this),error:this.nextError.bind(this)})}subscribeToMore(e){var t;return null==(t=this.observableQuery)?void 0:t.subscribeToMore(e)}async executeQuery(e){try{if(!this.client)throw new TypeError("No Apollo client. See https://apolloelements.dev/guides/getting-started/apollo-client/");let{loading:t}=this;this.loading=!0,this.notify({loading:t});let r=await this.client.query({query:this.query,variables:this.variables,context:this.options.context,errorPolicy:this.options.errorPolicy,fetchPolicy:"cache-and-network"===this.options.fetchPolicy?void 0:this.options.fetchPolicy,notifyOnNetworkStatusChange:this.options.notifyOnNetworkStatusChange,partialRefetch:this.options.partialRefetch,returnPartialData:this.options.returnPartialData,...e});return r&&this.nextData(r),r}catch(t){throw this.nextError(t),t}}async fetchMore(e){var t;let{loading:r}=this;this.loading=!0,this.notify({loading:r});let n={query:this.query,context:this.options.context,variables:null!=(t=this.variables)?t:void 0,...e};return null!=n.variables||(n.variables=void 0),null!=this.observableQuery||(this.observableQuery=this.watchQuery(n)),this.observableQuery.fetchMore(n).then(e=>{let{loading:t}=this;return this.loading=!1,this.notify({loading:t}),e})}startPolling(e){this.pollingInterval=window.setInterval(()=>{this.refetch()},e)}stopPolling(){clearInterval(this.pollingInterval)}};op=new WeakMap,ip=new WeakMap,$n([sl],ap.prototype,"watchQuery",null),$n([sl],ap.prototype,"refetch",null),$n([sl],ap.prototype,"subscribe",null),$n([sl],ap.prototype,"subscribeToMore",null),$n([sl],ap.prototype,"executeQuery",null),$n([sl],ap.prototype,"fetchMore",null),$n([sl],ap.prototype,"startPolling",null),$n([sl],ap.prototype,"stopPolling",null);var sp,lp,cp=class extends al{constructor(e,t,r){super(e,r),y(this,sp,void 0),y(this,lp,void 0),b(this,sp,!1),this.init(null!=t?t:null)}get subscription(){return this.document}set subscription(e){this.document=e}get canAutoSubscribe(){return!!this.client&&!this.options.noAutoSubscribe&&this.shouldSubscribe()}hostConnected(){super.hostConnected(),g(this,sp)&&this.observableSubscription?this.subscribe():this.documentChanged(this.subscription)}hostDisconnected(){this.endSubscription(),b(this,sp,!0),super.hostDisconnected()}canSubscribe(e){var t;return!(this.options.noAutoSubscribe||!this.client||this.observable&&!this.options.shouldResubscribe||!(null!=(t=null==e?void 0:e.query)?t:this.subscription))}initObservable(e){var t;let{shouldResubscribe:r=this.options.shouldResubscribe,client:n=this.client,skip:o=this.options.skip,...i}=null!=e?e:{};if(!n)throw new TypeError("No Apollo client. See https://apolloelements.dev/guides/getting-started/apollo-client/");if(this.observable&&!r||o)return;let a=null!=(t=null==e?void 0:e.subscription)?t:this.subscription;b(this,lp,a),this.observable=n.subscribe({variables:this.variables,context:this.options.context,errorPolicy:this.options.errorPolicy,fetchPolicy:this.options.fetchPolicy,...i,query:a})}nextData(e){var t,r,n,o,i;let{data:a,error:s,errors:l,loading:c}=this,u={client:this.client,subscriptionData:{data:null!=(t=null==e?void 0:e.data)?t:null,loading:!1,error:null}};this.emitter.dispatchEvent(new CustomEvent("apollo-subscription-result",{detail:u})),this.data=null!=(r=null==e?void 0:e.data)?r:null,this.error=null,this.errors=null!=(n=null==e?void 0:e.errors)?n:[],this.loading=!1,null==(i=(o=this.options).onData)||i.call(o,u),this.notify({data:a,error:s,errors:l,loading:c})}nextError(e){var t,r;let{error:n,loading:o}=this;this.emitter.dispatchEvent(new CustomEvent("apollo-error",{detail:e})),this.error=e,this.loading=!1,null==(r=(t=this.options).onError)||r.call(t,e),this.notify({error:n,loading:o})}onComplete(){var e,t;let{data:r,error:n,loading:o}=this;null==(t=(e=this.options).onComplete)||t.call(e),this.endSubscription(),this.notify({data:r,error:n,loading:o})}endSubscription(){this.observableSubscription&&this.observableSubscription.unsubscribe()}shouldSubscribe(e){var t,r,n;return null==(n=null==(r=(t=this.options).shouldSubscribe)?void 0:r.call(t,e))||n}clientChanged(){this.canSubscribe()&&this.shouldSubscribe()&&this.subscribe()}documentChanged(e){let t=null!=e?e:void 0;e!==g(this,lp)&&(this.cancel(),this.canSubscribe({query:t})&&this.shouldSubscribe({query:t})&&this.subscribe())}variablesChanged(e){this.cancel(),this.canSubscribe({variables:e})&&this.shouldSubscribe({variables:e})&&this.subscribe()}subscribe(e){var t,r;this.initObservable(e);let n=null!=(t=null==e?void 0:e.shouldResubscribe)?t:this.options.shouldResubscribe;if(this.observableSubscription&&!n)return;let{loading:o}=this;this.loading=!0,this.notify({loading:o}),this.observableSubscription=null==(r=this.observable)?void 0:r.subscribe({next:this.nextData.bind(this),error:this.nextError.bind(this),complete:this.onComplete.bind(this)})}cancel(){this.endSubscription(),this.observableSubscription=void 0,this.observable=void 0}};sp=new WeakMap,lp=new WeakMap,$n([sl],cp.prototype,"subscribe",null),$n([sl],cp.prototype,"cancel",null);var up,dp=class extends Event{constructor(e){super("change"),this.value=e}};EventTarget;up=new WeakMap;var hp=Object.prototype.toString;function pp(e,t){return hp.call(e)===` [object $ {
												t
											}] `}function fp(e){return pp(e,"Object")}function vp(e){return Boolean(e&&e.then&&"function"==typeof e.then)}function mp(e){return e&&e.Math==Math?e:void 0}var gp="object"==typeof globalThis&&mp(globalThis)||"object"==typeof window&&mp(window)||"object"==typeof self&&mp(self)||"object"==typeof e&&mp(e)||function(){return this}()||{};function yp(e,t,r){let n=r||gp,o=n.__SENTRY__=n.__SENTRY__||{};return o[e]||(o[e]=t())}var bp,_p,wp="Sentry Logger ",xp=["debug","info","warn","error","log","assert","trace"];function kp(e){if(!("console"in gp))return e();let t=gp.console,r={};xp.forEach(e=>{let n=t[e]&&t[e].__sentry_original__;e in t&&n&&(r[e]=t[e],t[e]=n)});try{return e()}finally{Object.keys(r).forEach(e=>{t[e]=r[e]})}}function Ep(){let e=!1,t={enable:()=>{e=!0},disable:()=>{e=!1}};return typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__?xp.forEach(r=>{t[r]=(...t)=>{e&&kp(()=>{gp.console[r](`
											$ {
												wp
											} [$ {
												r
											}]: `,...t)})}}):xp.forEach(e=>{t[e]=()=>{}}),t}function Sp(e,t){return!!function(e){return pp(e,"String")}(e)&&(function(e){return pp(e,"RegExp")}(t)?t.test(e):"string"==typeof t&&-1!==e.indexOf(t))}function Op(e){return function e(t,r){if(fp(t)){let n=r.get(t);if(void 0!==n)return n;let o={};r.set(t,o);for(let i of Object.keys(t))typeof t[i]<"u"&&(o[i]=e(t[i],r));return o}if(Array.isArray(t)){let n=r.get(t);if(void 0!==n)return n;let o=[];return r.set(t,o),t.forEach(t=>{o.push(e(t,r))}),o}return t}(e,new Map)}function Cp(){let e=gp,t=e.crypto||e.msCrypto;if(t&&t.randomUUID)return t.randomUUID().replace(/-/g,"");let r=t&&t.getRandomValues?()=>t.getRandomValues(new Uint8Array(1))[0]:()=>16*Math.random();return([1e7]+1e3+4e3+8e3+1e11).replace(/[018]/g,e=>(e^(15&r())>>e/4).toString(16))}function Ap(e){let{message:t,event_id:r}=e;if(t)return t;let n=function(e){return e.exception&&e.exception.values?e.exception.values[0]:void 0}(e);return n?n.type&&n.value?`
											$ {
												n.type
											}: $ {
												n.value
											}
											`:n.type||n.value||r||"<unknown>":r||"<unknown>"}function Dp(){return!(typeof __SENTRY_BROWSER_BUNDLE__<"u"&&__SENTRY_BROWSER_BUNDLE__)&&"[object process]"===Object.prototype.toString.call(typeof t<"u"?t:0)}bp=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__?yp("logger",Ep):Ep(),function(e){e[e.PENDING=0]="PENDING";e[e.RESOLVED=1]="RESOLVED";e[e.REJECTED=2]="REJECTED"}(_p||(_p={}));var $p=class{__init(){this._state=_p.PENDING}__init2(){this._handlers=[]}constructor(e){$p.prototype.__init.call(this),$p.prototype.__init2.call(this),$p.prototype.__init3.call(this),$p.prototype.__init4.call(this),$p.prototype.__init5.call(this),$p.prototype.__init6.call(this);try{e(this._resolve,this._reject)}catch(t){this._reject(t)}}then(e,t){return new $p((r,n)=>{this._handlers.push([!1,t=>{if(e)try{r(e(t))}catch(o){n(o)}else r(t)},e=>{if(t)try{r(t(e))}catch(o){n(o)}else n(e)}]),this._executeHandlers()})}catch(e){return this.then(e=>e,e)}finally(e){return new $p((t,r)=>{let n,o;return this.then(t=>{o=!1,n=t,e&&e()},t=>{o=!0,n=t,e&&e()}).then(()=>{o?r(n):t(n)})})}__init3(){this._resolve=e=>{this._setResult(_p.RESOLVED,e)}}__init4(){this._reject=e=>{this._setResult(_p.REJECTED,e)}}__init5(){this._setResult=(e,t)=>{if(this._state===_p.PENDING){if(vp(t))return void t.then(this._resolve,this._reject);this._state=e,this._value=t,this._executeHandlers()}}}__init6(){this._executeHandlers=()=>{if(this._state===_p.PENDING)return;let e=this._handlers.slice();this._handlers=[],e.forEach(e=>{e[0]||(this._state===_p.RESOLVED&&e[1](this._value),this._state===_p.REJECTED&&e[2](this._value),e[0]=!0)})}}},Rp=gp,jp={nowSeconds:()=>Date.now()/1e3};var Ip=Dp()?function(){try{return function(e,t){return e.require(t)}(n,"perf_hooks").performance}catch{return}}():function(){let{performance:e}=Rp;if(e&&e.now)return{now:()=>e.now(),timeOrigin:Date.now()-e.now()}}(),Pp=void 0===Ip?jp:{nowSeconds:()=>(Ip.timeOrigin+Ip.now())/1e3},Tp=jp.nowSeconds.bind(jp),Mp=Pp.nowSeconds.bind(Pp);(()=>{let{performance:e}=Rp;if(!e||!e.now)return void"none";let t=36e5,r=e.now(),n=Date.now(),o=e.timeOrigin?Math.abs(e.timeOrigin+r-n):t,i=o<t,a=e.timing&&e.timing.navigationStart,s="number"==typeof a?Math.abs(a+r-n):t;i||s<t?o<=s?("timeOrigin",e.timeOrigin):"navigationStart":"dateNow"})();function Fp(e){let t=Mp(),r={sid:Cp(),init:!0,timestamp:t,started:t,duration:0,status:"ok",errors:0,ignoreDuration:!1,toJSON:()=>(function(e){return Op({sid:`
											$ {
												e.sid
											}
											`,init:e.init,started:new Date(1e3*e.started).toISOString(),timestamp:new Date(1e3*e.timestamp).toISOString(),status:e.status,errors:e.errors,did:"number"==typeof e.did||"string"==typeof e.did?`
											$ {
												e.did
											}
											`:void 0,duration:e.duration,attrs:{release:e.release,environment:e.environment,ip_address:e.ipAddress,user_agent:e.userAgent}})})(r)};return e&&zp(r,e),r}function zp(e,t={}){if(t.user&&(!e.ipAddress&&t.user.ip_address&&(e.ipAddress=t.user.ip_address),!e.did&&!t.did&&(e.did=t.user.id||t.user.email||t.user.username)),e.timestamp=t.timestamp||Mp(),t.ignoreDuration&&(e.ignoreDuration=t.ignoreDuration),t.sid&&(e.sid=32===t.sid.length?t.sid:Cp()),void 0!==t.init&&(e.init=t.init),!e.did&&t.did&&(e.did=`
											$ {
												t.did
											}
											`),"number"==typeof t.started&&(e.started=t.started),e.ignoreDuration)e.duration=void 0;else if("number"==typeof t.duration)e.duration=t.duration;else{let t=e.timestamp-e.started;e.duration=t>=0?t:0}t.release&&(e.release=t.release),t.environment&&(e.environment=t.environment),!e.ipAddress&&t.ipAddress&&(e.ipAddress=t.ipAddress),!e.userAgent&&t.userAgent&&(e.userAgent=t.userAgent),"number"==typeof t.errors&&(e.errors=t.errors),t.status&&(e.status=t.status)}var Np=class{constructor(){this._notifyingListeners=!1,this._scopeListeners=[],this._eventProcessors=[],this._breadcrumbs=[],this._attachments=[],this._user={},this._tags={},this._extra={},this._contexts={},this._sdkProcessingMetadata={}}static clone(e){let t=new Np;return e&&(t._breadcrumbs=[...e._breadcrumbs],t._tags={...e._tags},t._extra={...e._extra},t._contexts={...e._contexts},t._user=e._user,t._level=e._level,t._span=e._span,t._session=e._session,t._transactionName=e._transactionName,t._fingerprint=e._fingerprint,t._eventProcessors=[...e._eventProcessors],t._requestSession=e._requestSession,t._attachments=[...e._attachments]),t}addScopeListener(e){this._scopeListeners.push(e)}addEventProcessor(e){return this._eventProcessors.push(e),this}setUser(e){return this._user=e||{},this._session&&zp(this._session,{user:e}),this._notifyScopeListeners(),this}getUser(){return this._user}getRequestSession(){return this._requestSession}setRequestSession(e){return this._requestSession=e,this}setTags(e){return this._tags={...this._tags,...e},this._notifyScopeListeners(),this}setTag(e,t){return this._tags={...this._tags,[e]:t},this._notifyScopeListeners(),this}setExtras(e){return this._extra={...this._extra,...e},this._notifyScopeListeners(),this}setExtra(e,t){return this._extra={...this._extra,[e]:t},this._notifyScopeListeners(),this}setFingerprint(e){return this._fingerprint=e,this._notifyScopeListeners(),this}setLevel(e){return this._level=e,this._notifyScopeListeners(),this}setTransactionName(e){return this._transactionName=e,this._notifyScopeListeners(),this}setContext(e,t){return null===t?delete this._contexts[e]:this._contexts[e]=t,this._notifyScopeListeners(),this}setSpan(e){return this._span=e,this._notifyScopeListeners(),this}getSpan(){return this._span}getTransaction(){let e=this.getSpan();return e&&e.transaction}setSession(e){return e?this._session=e:delete this._session,this._notifyScopeListeners(),this}getSession(){return this._session}update(e){if(!e)return this;if("function"==typeof e){let t=e(this);return t instanceof Np?t:this}return e instanceof Np?(this._tags={...this._tags,...e._tags},this._extra={...this._extra,...e._extra},this._contexts={...this._contexts,...e._contexts},e._user&&Object.keys(e._user).length&&(this._user=e._user),e._level&&(this._level=e._level),e._fingerprint&&(this._fingerprint=e._fingerprint),e._requestSession&&(this._requestSession=e._requestSession)):fp(e)&&(e=e,this._tags={...this._tags,...e.tags},this._extra={...this._extra,...e.extra},this._contexts={...this._contexts,...e.contexts},e.user&&(this._user=e.user),e.level&&(this._level=e.level),e.fingerprint&&(this._fingerprint=e.fingerprint),e.requestSession&&(this._requestSession=e.requestSession)),this}clear(){return this._breadcrumbs=[],this._tags={},this._extra={},this._user={},this._contexts={},this._level=void 0,this._transactionName=void 0,this._fingerprint=void 0,this._requestSession=void 0,this._span=void 0,this._session=void 0,this._notifyScopeListeners(),this._attachments=[],this}addBreadcrumb(e,t){let r="number"==typeof t?t:100;if(r<=0)return this;let n={timestamp:Tp(),...e};return this._breadcrumbs=[...this._breadcrumbs,n].slice(-r),this._notifyScopeListeners(),this}clearBreadcrumbs(){return this._breadcrumbs=[],this._notifyScopeListeners(),this}addAttachment(e){return this._attachments.push(e),this}getAttachments(){return this._attachments}clearAttachments(){return this._attachments=[],this}applyToEvent(e,t={}){if(this._extra&&Object.keys(this._extra).length&&(e.extra={...this._extra,...e.extra}),this._tags&&Object.keys(this._tags).length&&(e.tags={...this._tags,...e.tags}),this._user&&Object.keys(this._user).length&&(e.user={...this._user,...e.user}),this._contexts&&Object.keys(this._contexts).length&&(e.contexts={...this._contexts,...e.contexts}),this._level&&(e.level=this._level),this._transactionName&&(e.transaction=this._transactionName),this._span){e.contexts={trace:this._span.getTraceContext(),...e.contexts};let t=this._span.transaction&&this._span.transaction.name;t&&(e.tags={transaction:t,...e.tags})}return this._applyFingerprint(e),e.breadcrumbs=[...e.breadcrumbs||[],...this._breadcrumbs],e.breadcrumbs=e.breadcrumbs.length>0?e.breadcrumbs:void 0,e.sdkProcessingMetadata={...e.sdkProcessingMetadata,...this._sdkProcessingMetadata},this._notifyEventProcessors([...Lp(),...this._eventProcessors],e,t)}setSDKProcessingMetadata(e){return this._sdkProcessingMetadata={...this._sdkProcessingMetadata,...e},this}_notifyEventProcessors(e,t,r,n=0){return new $p((o,i)=>{let a=e[n];if(null===t||"function"!=typeof a)o(t);else{let s=a({...t},r);(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&a.id&&null===s&&bp.log(`
											Event processor "${a.id}"
											dropped event`),vp(s)?s.then(t=>this._notifyEventProcessors(e,t,r,n+1).then(o)).then(null,i):this._notifyEventProcessors(e,s,r,n+1).then(o).then(null,i)}})}_notifyScopeListeners(){this._notifyingListeners||(this._notifyingListeners=!0,this._scopeListeners.forEach(e=>{e(this)}),this._notifyingListeners=!1)}_applyFingerprint(e){e.fingerprint=e.fingerprint?function(e){return Array.isArray(e)?e:[e]}(e.fingerprint):[],this._fingerprint&&(e.fingerprint=e.fingerprint.concat(this._fingerprint)),e.fingerprint&&!e.fingerprint.length&&delete e.fingerprint}};function Lp(){return yp("globalEventProcessors",()=>[])}function Bp(e){Lp().push(e)}var qp=4,Up=100,Vp=class{__init(){this._stack=[{}]}constructor(e,t=new Np,r=qp){this._version=r,Vp.prototype.__init.call(this),this.getStackTop().scope=t,e&&this.bindClient(e)}isOlderThan(e){return this._version<e}bindClient(e){this.getStackTop().client=e,e&&e.setupIntegrations&&e.setupIntegrations()}pushScope(){let e=Np.clone(this.getScope());return this.getStack().push({client:this.getClient(),scope:e}),e}popScope(){return!(this.getStack().length<=1)&&!!this.getStack().pop()}withScope(e){let t=this.pushScope();try{e(t)}finally{this.popScope()}}getClient(){return this.getStackTop().client}getScope(){return this.getStackTop().scope}getStack(){return this._stack}getStackTop(){return this._stack[this._stack.length-1]}captureException(e,t){let r=this._lastEventId=t&&t.event_id?t.event_id:Cp(),n=new Error("Sentry syntheticException");return this._withClient((o,i)=>{o.captureException(e,{originalException:e,syntheticException:n,...t,event_id:r},i)}),r}captureMessage(e,t,r){let n=this._lastEventId=r&&r.event_id?r.event_id:Cp(),o=new Error(e);return this._withClient((i,a)=>{i.captureMessage(e,t,{originalException:e,syntheticException:o,...r,event_id:n},a)}),n}captureEvent(e,t){let r=t&&t.event_id?t.event_id:Cp();return"transaction"!==e.type&&(this._lastEventId=r),this._withClient((n,o)=>{n.captureEvent(e,{...t,event_id:r},o)}),r}lastEventId(){return this._lastEventId}addBreadcrumb(e,t){let{scope:r,client:n}=this.getStackTop();if(!r||!n)return;let{beforeBreadcrumb:o=null,maxBreadcrumbs:i=Up}=n.getOptions&&n.getOptions()||{};if(i<=0)return;let a={timestamp:Tp(),...e},s=o?kp(()=>o(a,t)):a;null!==s&&r.addBreadcrumb(s,i)}setUser(e){let t=this.getScope();t&&t.setUser(e)}setTags(e){let t=this.getScope();t&&t.setTags(e)}setExtras(e){let t=this.getScope();t&&t.setExtras(e)}setTag(e,t){let r=this.getScope();r&&r.setTag(e,t)}setExtra(e,t){let r=this.getScope();r&&r.setExtra(e,t)}setContext(e,t){let r=this.getScope();r&&r.setContext(e,t)}configureScope(e){let{scope:t,client:r}=this.getStackTop();t&&r&&e(t)}run(e){let t=Hp(this);try{e(this)}finally{Hp(t)}}getIntegration(e){let t=this.getClient();if(!t)return null;try{return t.getIntegration(e)}catch{return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&bp.warn(`
											Cannot retrieve integration $ {
												e.id
											}
											from the current Hub`),null}}startTransaction(e,t){return this._callExtensionMethod("startTransaction",e,t)}traceHeaders(){return this._callExtensionMethod("traceHeaders")}captureSession(e=!1){if(e)return this.endSession();this._sendSessionUpdate()}endSession(){let e=this.getStackTop(),t=e&&e.scope,r=t&&t.getSession();r&&function(e,t){let r={};t?r={status:t}:"ok"===e.status&&(r={status:"exited"}),zp(e,r)}(r),this._sendSessionUpdate(),t&&t.setSession()}startSession(e){let{scope:t,client:r}=this.getStackTop(),{release:n,environment:o}=r&&r.getOptions()||{},{userAgent:i}=gp.navigator||{},a=Fp({release:n,environment:o,...t&&{user:t.getUser()},...i&&{userAgent:i},...e});if(t){let e=t.getSession&&t.getSession();e&&"ok"===e.status&&zp(e,{status:"exited"}),this.endSession(),t.setSession(a)}return a}shouldSendDefaultPii(){let e=this.getClient(),t=e&&e.getOptions();return Boolean(t&&t.sendDefaultPii)}_sendSessionUpdate(){let{scope:e,client:t}=this.getStackTop();if(!e)return;let r=e.getSession();r&&t&&t.captureSession&&t.captureSession(r)}_withClient(e){let{scope:t,client:r}=this.getStackTop();r&&e(r,t)}_callExtensionMethod(e,...t){let r=Qp().__SENTRY__;if(r&&r.extensions&&"function"==typeof r.extensions[e])return r.extensions[e].apply(this,t);(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&bp.warn(`
											Extension method $ {
												e
											}
											couldn 't be found, doing nothing.`)}};function Qp(){return gp.__SENTRY__=gp.__SENTRY__||{extensions:{},hub:void 0},gp}function Hp(e){let t=Qp(),r=Yp(t);return Jp(t,e),r}function Wp(){let e=Qp();return(!Gp(e)||Yp(e).isOlderThan(qp))&&Jp(e,new Vp),Dp()?function(e){try{let t=Qp().__SENTRY__,r=t&&t.extensions&&t.extensions.domain&&t.extensions.domain.active;if(!r)return Yp(e);if(!Gp(r)||Yp(r).isOlderThan(qp)){let t=Yp(e).getStackTop();Jp(r,new Vp(t.client,Np.clone(t.scope)))}return Yp(r)}catch{return Yp(e)}}(e):Yp(e)}function Gp(e){return!!(e&&e.__SENTRY__&&e.__SENTRY__.hub)}function Yp(e){return yp("hub",()=>new Vp,e)}function Jp(e,t){if(!e)return!1;return(e.__SENTRY__=e.__SENTRY__||{}).hub=t,!0}function Kp(e,t){return Wp().captureException(e,{captureContext:t})}function Xp(e){Wp().withScope(e)}var Zp={};h(Zp,{FunctionToString:()=>tf,InboundFilters:()=>nf});var ef,tf=class{constructor(){tf.prototype.__init.call(this)}static __initStatic(){this.id="FunctionToString"}__init(){this.name=tf.id}setupOnce(){ef=Function.prototype.toString,Function.prototype.toString=function(...e){let t=function(e){return e.__sentry_original__}(this)||this;return ef.apply(t,e)}}};tf.__initStatic();var rf=[/^Script error\.?$/,/^Javascript error: Script error\.? on line 0$/],nf=class{static __initStatic(){this.id="InboundFilters"}__init(){this.name=nf.id}constructor(e={}){this._options=e,nf.prototype.__init.call(this)}setupOnce(e,t){let r=e=>{let r=t();if(r){let t=r.getIntegration(nf);if(t){let n=r.getClient(),o=n?n.getOptions():{};return function(e,t){return t.ignoreInternal&&function(e){try{return"SentryError"===e.exception.values[0].type}catch{}return!1}(e)?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&bp.warn(`Event dropped due to being internal Sentry Error.\nEvent: ${Ap(e)}`),!0):function(e,t){return!(!t||!t.length)&&function(e){if(e.message)return[e.message];if(e.exception)try{let{type:t="",value:r=""}=e.exception.values&&e.exception.values[0]||{};return[`${r}`,`${t}: ${r}`]}catch{return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&bp.error(`Cannot extract message for event ${Ap(e)}`),[]}return[]}(e).some(e=>t.some(t=>Sp(e,t)))}(e,t.ignoreErrors)?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&bp.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${Ap(e)}`),!0):function(e,t){if(!t||!t.length)return!1;let r=of(e);return!!r&&t.some(e=>Sp(r,e))}(e,t.denyUrls)?((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&bp.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${Ap(e)}.\nUrl: ${of(e)}`),!0):!function(e,t){if(!t||!t.length)return!0;let r=of(e);return!r||t.some(e=>Sp(r,e))}(e,t.allowUrls)&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&bp.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${Ap(e)}.\nUrl: ${of(e)}`),!0)}(e,function(e={},t={}){return{allowUrls:[...e.allowUrls||[],...t.allowUrls||[]],denyUrls:[...e.denyUrls||[],...t.denyUrls||[]],ignoreErrors:[...e.ignoreErrors||[],...t.ignoreErrors||[],...rf],ignoreInternal:void 0===e.ignoreInternal||e.ignoreInternal}}(t._options,o))?null:e}}return e};r.id=this.name,e(r)}};function of(e){try{let t;try{t=e.exception.values[0].stacktrace.frames}catch{}return t?function(e=[]){for(let t=e.length-1;t>=0;t--){let r=e[t];if(r&&"<anonymous>"!==r.filename&&"[native code]"!==r.filename)return r.filename||null}return null}(t):null}catch{return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&bp.error(`Cannot extract url for event ${Ap(e)}`),null}}nf.__initStatic();var af=Object.prototype.toString;function sf(e){switch(af.call(e)){case"[object Error]":case"[object Exception]":case"[object DOMException]":return!0;default:return ff(e,Error)}}function lf(e,t){return af.call(e)===`[object ${t}]`}function cf(e){return lf(e,"ErrorEvent")}function uf(e){return lf(e,"DOMError")}function df(e){return lf(e,"String")}function hf(e){return lf(e,"Object")}function pf(e){return typeof Event<"u"&&ff(e,Event)}function ff(e,t){try{return e instanceof t}catch{return!1}}function vf(e){return e&&e.Math==Math?e:void 0}var mf="object"==typeof globalThis&&vf(globalThis)||"object"==typeof window&&vf(window)||"object"==typeof self&&vf(self)||"object"==typeof e&&vf(e)||function(){return this}()||{};function gf(){return mf}var yf=gf();function bf(e,t){try{let r,n=e,o=5,i=80,a=[],s=0,l=0,c=" > ",u=c.length;for(;n&&s++<o&&!("html"===(r=_f(n,t))||s>1&&l+a.length*u+r.length>=i);)a.push(r),l+=r.length,n=n.parentNode;return a.reverse().join(c)}catch{return"<unknown>"}}function _f(e,t){let r,n,o,i,a,s=e,l=[];if(!s||!s.tagName)return"";l.push(s.tagName.toLowerCase());let c=t&&t.length?t.filter(e=>s.getAttribute(e)).map(e=>[e,s.getAttribute(e)]):null;if(c&&c.length)c.forEach(e=>{l.push(`[${e[0]}="${e[1]}"]`)});else if(s.id&&l.push(`#${s.id}`),(r=s.className)&&df(r))for(n=r.split(/\s+/),a=0;a<n.length;a++)l.push(`.${n[a]}`);let u=["type","name","title","alt"];for(a=0;a<u.length;a++)o=u[a],(i=s.getAttribute(o))&&l.push(`[${o}="${i}"]`);return l.join("")}var wf,xf="Sentry Logger ",kf=["debug","info","warn","error","log","assert","trace"];function Ef(){let e=!1,t={enable:()=>{e=!0},disable:()=>{e=!1}};return typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__?kf.forEach(r=>{t[r]=(...t)=>{e&&function(e){if(!("console"in mf))return e();let t=mf.console,r={};kf.forEach(e=>{let n=t[e]&&t[e].__sentry_original__;e in t&&n&&(r[e]=t[e],t[e]=n)});try{e()}finally{Object.keys(r).forEach(e=>{t[e]=r[e]})}}(()=>{mf.console[r](`${xf}[${r}]:`,...t)})}}):kf.forEach(e=>{t[e]=()=>{}}),t}function Sf(e,t=0){return"string"!=typeof e||0===t||e.length<=t?e:`${e.substr(0,t)}...`}function Of(e,t){if(!Array.isArray(e))return"";let r=[];for(let n=0;n<e.length;n++){let t=e[n];try{r.push(String(t))}catch{r.push("[value cannot be serialized]")}}return r.join(t)}function Cf(e,t,r){if(!(t in e))return;let n=e[t],o=r(n);if("function"==typeof o)try{Df(o,n)}catch{}e[t]=o}function Af(e,t,r){Object.defineProperty(e,t,{value:r,writable:!0,configurable:!0})}function Df(e,t){let r=t.prototype||{};e.prototype=t.prototype=r,Af(e,"__sentry_original__",t)}function $f(e){return e.__sentry_original__}function Rf(e){if(sf(e))return{message:e.message,name:e.name,stack:e.stack,...If(e)};if(pf(e)){let t={type:e.type,target:jf(e.target),currentTarget:jf(e.currentTarget),...If(e)};return typeof CustomEvent<"u"&&ff(e,CustomEvent)&&(t.detail=e.detail),t}return e}function jf(e){try{return function(e){return typeof Element<"u"&&ff(e,Element)}(e)?bf(e):Object.prototype.toString.call(e)}catch{return"<unknown>"}}function If(e){if("object"==typeof e&&null!==e){let t={};for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}return{}}function Pf(e,t=40){let r=Object.keys(Rf(e));if(r.sort(),!r.length)return"[object has no keys]";if(r[0].length>=t)return Sf(r[0],t);for(let n=r.length;n>0;n--){let e=r.slice(0,n).join(", ");if(!(e.length>t))return n===r.length?e:Sf(e,t)}return""}wf=typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__?function(e,t,r){let n=r||mf,o=n.__SENTRY__=n.__SENTRY__||{};return o[e]||(o[e]=t())}("logger",Ef):Ef();var Tf="<anonymous>";function Mf(e){try{return e&&"function"==typeof e&&e.name||Tf}catch{return Tf}}var Ff=gf();function zf(e){return e&&/^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())}function Nf(){if(!function(){if(!("fetch"in Ff))return!1;try{return new Headers,new Request("http://www.example.com"),new Response,!0}catch{return!1}}())return!1;if(zf(Ff.fetch))return!0;let e=!1,t=Ff.document;if(t&&"function"==typeof t.createElement)try{let r=t.createElement("iframe");r.hidden=!0,t.head.appendChild(r),r.contentWindow&&r.contentWindow.fetch&&(e=zf(r.contentWindow.fetch)),t.head.removeChild(r)}catch(r){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&wf.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",r)}return e}var Lf,Bf=gf(),qf={},Uf={};function Vf(e){if(!Uf[e])switch(Uf[e]=!0,e){case"console":"console"in Bf&&kf.forEach((function(e){e in Bf.console&&Cf(Bf.console,e,(function(t){return function(...r){Hf("console",{args:r,level:e}),t&&t.apply(Bf.console,r)}}))}));break;case"dom":!function(){if(!("document"in Bf))return;let e=Hf.bind(null,"dom"),t=Xf(e,!0);Bf.document.addEventListener("click",t,!1),Bf.document.addEventListener("keypress",t,!1),["EventTarget","Node"].forEach(t=>{let r=Bf[t]&&Bf[t].prototype;!r||!r.hasOwnProperty||!r.hasOwnProperty("addEventListener")||(Cf(r,"addEventListener",(function(t){return function(r,n,o){if("click"===r||"keypress"==r)try{let n=this,i=n.__sentry_instrumentation_handlers__=n.__sentry_instrumentation_handlers__||{},a=i[r]=i[r]||{refCount:0};if(!a.handler){let n=Xf(e);a.handler=n,t.call(this,r,n,o)}a.refCount+=1}catch{}return t.call(this,r,n,o)}})),Cf(r,"removeEventListener",(function(e){return function(t,r,n){if("click"===t||"keypress"==t)try{let r=this,o=r.__sentry_instrumentation_handlers__||{},i=o[t];i&&(i.refCount-=1,i.refCount<=0&&(e.call(this,t,i.handler,n),i.handler=void 0,delete o[t]),0===Object.keys(o).length&&delete r.__sentry_instrumentation_handlers__)}catch{}return e.call(this,t,r,n)}})))})}();break;case"xhr":!function(){if(!("XMLHttpRequest"in Bf))return;let e=XMLHttpRequest.prototype;Cf(e,"open",(function(e){return function(...t){let r=this,n=t[1],o=r.__sentry_xhr__={method:df(t[0])?t[0].toUpperCase():t[0],url:t[1]};df(n)&&"POST"===o.method&&n.match(/sentry_key/)&&(r.__sentry_own_request__=!0);let i=function(){if(4===r.readyState){try{o.status_code=r.status}catch{}Hf("xhr",{args:t,endTimestamp:Date.now(),startTimestamp:Date.now(),xhr:r})}};return"onreadystatechange"in r&&"function"==typeof r.onreadystatechange?Cf(r,"onreadystatechange",(function(e){return function(...t){return i(),e.apply(r,t)}})):r.addEventListener("readystatechange",i),e.apply(r,t)}})),Cf(e,"send",(function(e){return function(...t){return this.__sentry_xhr__&&void 0!==t[0]&&(this.__sentry_xhr__.body=t[0]),Hf("xhr",{args:t,startTimestamp:Date.now(),xhr:this}),e.apply(this,t)}}))}();break;case"fetch":!Nf()||Cf(Bf,"fetch",(function(e){return function(...t){let r={args:t,fetchData:{method:Wf(t),url:Gf(t)},startTimestamp:Date.now()};return Hf("fetch",{...r}),e.apply(Bf,t).then(e=>(Hf("fetch",{...r,endTimestamp:Date.now(),response:e}),e),e=>{throw Hf("fetch",{...r,endTimestamp:Date.now(),error:e}),e})}}));break;case"history":!function(){if(!function(){let e=Ff.chrome,t=e&&e.app&&e.app.runtime,r="history"in Ff&&!!Ff.history.pushState&&!!Ff.history.replaceState;return!t&&r}())return;let e=Bf.onpopstate;function t(e){return function(...t){let r=t.length>2?t[2]:void 0;if(r){let e=Lf,t=String(r);Lf=t,Hf("history",{from:e,to:t})}return e.apply(this,t)}}Bf.onpopstate=function(...t){let r=Bf.location.href,n=Lf;if(Lf=r,Hf("history",{from:n,to:r}),e)try{return e.apply(this,t)}catch{}},Cf(Bf.history,"pushState",t),Cf(Bf.history,"replaceState",t)}();break;case"error":Zf=Bf.onerror,Bf.onerror=function(e,t,r,n,o){return Hf("error",{column:n,error:o,line:r,msg:e,url:t}),!!Zf&&Zf.apply(this,arguments)};break;case"unhandledrejection":ev=Bf.onunhandledrejection,Bf.onunhandledrejection=function(e){return Hf("unhandledrejection",e),!ev||ev.apply(this,arguments)};break;default:return void((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&wf.warn("unknown instrumentation type:",e))}}function Qf(e,t){qf[e]=qf[e]||[],qf[e].push(t),Vf(e)}function Hf(e,t){if(e&&qf[e])for(let n of qf[e]||[])try{n(t)}catch(r){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&wf.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${Mf(n)}\nError:`,r)}}function Wf(e=[]){return"Request"in Bf&&ff(e[0],Request)&&e[0].method?String(e[0].method).toUpperCase():e[1]&&e[1].method?String(e[1].method).toUpperCase():"GET"}function Gf(e=[]){return"string"==typeof e[0]?e[0]:"Request"in Bf&&ff(e[0],Request)?e[0].url:String(e[0])}var Yf,Jf,Kf=1e3;function Xf(e,t=!1){return r=>{if(!r||Jf===r||function(e){if("keypress"!==e.type)return!1;try{let t=e.target;if(!t||!t.tagName)return!0;if("INPUT"===t.tagName||"TEXTAREA"===t.tagName||t.isContentEditable)return!1}catch{}return!0}(r))return;let n="keypress"===r.type?"input":r.type;void 0===Yf?(e({event:r,name:n,global:t}),Jf=r):function(e,t){if(!e||e.type!==t.type)return!0;try{if(e.target!==t.target)return!0}catch{}return!1}(Jf,r)&&(e({event:r,name:n,global:t}),Jf=r),clearTimeout(Yf),Yf=Bf.setTimeout(()=>{Yf=void 0},Kf)}}var Zf=null;var ev=null;function tv(e,t,r){let n=e.exception=e.exception||{},o=n.values=n.values||[],i=o[0]=o[0]||{};i.value||(i.value=t||""),i.type||(i.type=r||"Error")}function rv(e,t){let r=function(e){return e.exception&&e.exception.values?e.exception.values[0]:void 0}(e);if(!r)return;let n=r.mechanism;if(r.mechanism={type:"generic",handled:!0,...n,...t},t&&"data"in t){let e={...n&&n.data,...t.data};r.mechanism.data=e}}function nv(t,r=1/0,n=1/0){try{return function t(r,n,o=1/0,i=1/0,a=function(){let e="function"==typeof WeakSet,t=e?new WeakSet:[];return[function(r){if(e)return!!t.has(r)||(t.add(r),!1);for(let e=0;e<t.length;e++)if(t[e]===r)return!0;return t.push(r),!1},function(r){if(e)t.delete(r);else for(let e=0;e<t.length;e++)if(t[e]===r){t.splice(e,1);break}}]}()){let[s,l]=a;if(null===n||["number","boolean","string"].includes(typeof n)&&!function(e){return"number"==typeof e&&e!=e}(n))return n;let c=function(t,r){try{return"domain"===t&&r&&"object"==typeof r&&r._events?"[Domain]":"domainEmitter"===t?"[DomainEmitter]":typeof e<"u"&&r===e?"[Global]":typeof window<"u"&&r===window?"[Window]":typeof document<"u"&&r===document?"[Document]":function(e){return hf(e)&&"nativeEvent"in e&&"preventDefault"in e&&"stopPropagation"in e}(r)?"[SyntheticEvent]":"number"==typeof r&&r!=r?"[NaN]":void 0===r?"[undefined]":"function"==typeof r?`[Function: ${Mf(r)}]`:"symbol"==typeof r?`[${String(r)}]`:"bigint"==typeof r?`[BigInt: ${String(r)}]`:`[object ${Object.getPrototypeOf(r).constructor.name}]`}catch(o){return`**non-serializable** (${o})`}}(r,n);if(!c.startsWith("[object "))return c;if(n.__sentry_skip_normalization__)return n;if(0===o)return c.replace("object ","");if(s(n))return"[Circular ~]";let u=n;if(u&&"function"==typeof u.toJSON)try{let e=u.toJSON();return t("",e,o-1,i,a)}catch{}let d=Array.isArray(n)?[]:{},h=0,p=Rf(n);for(let e in p){if(!Object.prototype.hasOwnProperty.call(p,e))continue;if(h>=i){d[e]="[MaxProperties ~]";break}let r=p[e];d[e]=t(e,r,o-1,i,a),h+=1}return l(n),d}("",t,r,n)}catch(o){return{ERROR:`**non-serializable** (${o})`}}}function ov(e,t=3,r=102400){let n=nv(e,t);return function(e){return function(e){return~-encodeURI(e).split(/%..|./).length}(JSON.stringify(e))}(n)>r?ov(e,t-1,r):n}function iv(e){if(!e)return{};let t=e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!t)return{};let r=t[6]||"",n=t[8]||"";return{host:t[4],path:t[5],protocol:t[2],relative:t[5]+r+n}}var av=["fatal","error","warning","log","info","debug"];function sv(e){return"warn"===e?"warning":av.includes(e)?e:"log"}var lv=mf,cv=0;function uv(){return cv>0}function dv(){cv+=1,setTimeout(()=>{cv-=1})}function hv(e,t={},r){if("function"!=typeof e)return e;try{let t=e.__sentry_wrapped__;if(t)return t;if($f(e))return e}catch{return e}let n=function(){let n=Array.prototype.slice.call(arguments);try{r&&"function"==typeof r&&r.apply(this,arguments);let o=n.map(e=>hv(e,t));return e.apply(this,o)}catch(o){throw dv(),Xp(e=>{e.addEventProcessor(e=>(t.mechanism&&(tv(e,void 0,void 0),rv(e,t.mechanism)),e.extra={...e.extra,arguments:n},e)),Kp(o)}),o}};try{for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t])}catch{}Df(n,e),Af(e,"__sentry_wrapped__",n);try{Object.getOwnPropertyDescriptor(n,"name").configurable&&Object.defineProperty(n,"name",{get:()=>e.name})}catch{}return n}function pv(e,t){let r=vv(e,t),n={type:t&&t.name,value:gv(t)};return r.length&&(n.stacktrace={frames:r}),void 0===n.type&&""===n.value&&(n.value="Unrecoverable error caught"),n}function fv(e,t){return{exception:{values:[pv(e,t)]}}}function vv(e,t){let r=t.stacktrace||t.stack||"",n=function(e){if(e){if("number"==typeof e.framesToPop)return e.framesToPop;if(mv.test(e.message))return 1}return 0}(t);try{return e(r,n)}catch{}return[]}var mv=/Minified React error #\d+;/i;function gv(e){let t=e&&e.message;return t?t.error&&"string"==typeof t.error.message?t.error.message:t:"No error message"}function yv(e,t,r,n,o){let i;if(cf(t)&&t.error)return fv(e,t.error);if(uf(t)||function(e){return lf(e,"DOMException")}(t)){let o=t;if("stack"in t)i=fv(e,t);else{let t=o.name||(uf(o)?"DOMError":"DOMException"),a=o.message?`${t}: ${o.message}`:t;tv(i=bv(e,a,r,n),a)}return"code"in o&&(i.tags={...i.tags,"DOMException.code":`${o.code}`}),i}return sf(t)?fv(e,t):hf(t)||pf(t)?(rv(i=function(e,t,r,n){let o=Wp().getClient(),i=o&&o.getOptions().normalizeDepth,a={exception:{values:[{type:pf(t)?t.constructor.name:n?"UnhandledRejection":"Error",value:`Non-Error ${n?"promise rejection":"exception"} captured with keys: ${Pf(t)}`}]},extra:{__serialized__:ov(t,i)}};if(r){let t=vv(e,r);t.length&&(a.exception.values[0].stacktrace={frames:t})}return a}(e,t,r,o),{synthetic:!0}),i):(tv(i=bv(e,t,r,n),`${t}`,void 0),rv(i,{synthetic:!0}),i)}function bv(e,t,r,n){let o={message:t};if(n&&r){let n=vv(e,r);n.length&&(o.exception={values:[{value:t,stacktrace:{frames:n}}]})}return o}var _v=class{static __initStatic(){this.id="Breadcrumbs"}__init(){this.name=_v.id}constructor(e){_v.prototype.__init.call(this),this.options={console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0,...e}}setupOnce(){this.options.console&&Qf("console",wv),this.options.dom&&Qf("dom",function(e){return function(t){let r,n="object"==typeof e?e.serializeAttribute:void 0;"string"==typeof n&&(n=[n]);try{r=t.event.target?bf(t.event.target,n):bf(t.event,n)}catch{r="<unknown>"}0!==r.length&&Wp().addBreadcrumb({category:`ui.${t.name}`,message:r},{event:t.event,name:t.name,global:t.global})}}(this.options.dom)),this.options.xhr&&Qf("xhr",xv),this.options.fetch&&Qf("fetch",kv),this.options.history&&Qf("history",Ev)}};function wv(e){for(let r=0;r<e.args.length;r++)if("ref=Ref<"===e.args[r]){e.args[r+1]="viewRef";break}let t={category:"console",data:{arguments:e.args,logger:"console"},level:sv(e.level),message:Of(e.args," ")};if("assert"===e.level){if(!1!==e.args[0])return;t.message=`Assertion failed: ${Of(e.args.slice(1)," ")||"console.assert"}`,t.data.arguments=e.args.slice(1)}Wp().addBreadcrumb(t,{input:e.args,level:e.level})}function xv(e){if(e.endTimestamp){if(e.xhr.__sentry_own_request__)return;let{method:t,url:r,status_code:n,body:o}=e.xhr.__sentry_xhr__||{};Wp().addBreadcrumb({category:"xhr",data:{method:t,url:r,status_code:n},type:"http"},{xhr:e.xhr,input:o})}else;}function kv(e){!e.endTimestamp||e.fetchData.url.match(/sentry_key/)&&"POST"===e.fetchData.method||(e.error?Wp().addBreadcrumb({category:"fetch",data:e.fetchData,level:"error",type:"http"},{data:e.error,input:e.args}):Wp().addBreadcrumb({category:"fetch",data:{...e.fetchData,status_code:e.response.status},type:"http"},{input:e.args,response:e.response}))}function Ev(e){let t=e.from,r=e.to,n=iv(lv.location.href),o=iv(t),i=iv(r);o.path||(o=n),n.protocol===i.protocol&&n.host===i.host&&(r=i.relative),n.protocol===o.protocol&&n.host===o.host&&(t=o.relative),Wp().addBreadcrumb({category:"navigation",data:{from:t,to:r}})}_v.__initStatic();var Sv={};h(Sv,{Breadcrumbs:()=>_v,Dedupe:()=>Bv,GlobalHandlers:()=>Ov,HttpContext:()=>Lv,LinkedErrors:()=>Nv,TryCatch:()=>Pv});var Ov=class{static __initStatic(){this.id="GlobalHandlers"}__init(){this.name=Ov.id}__init2(){this._installFunc={onerror:Cv,onunhandledrejection:Av}}constructor(e){Ov.prototype.__init.call(this),Ov.prototype.__init2.call(this),this._options={onerror:!0,onunhandledrejection:!0,...e}}setupOnce(){Error.stackTraceLimit=50;let e=this._options;for(let t in e){let r=this._installFunc[t];r&&e[t]&&($v(t),r(),this._installFunc[t]=void 0)}}};function Cv(){Qf("error",e=>{let[t,r,n]=jv();if(!t.getIntegration(Ov))return;let{msg:o,url:i,line:a,column:s,error:l}=e;if(uv()||l&&l.__sentry_own_request__)return;let c=void 0===l&&df(o)?function(e,t,r,n){let o=cf(e)?e.message:e,i="Error",a=o.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);return a&&(i=a[1],o=a[2]),Dv({exception:{values:[{type:i,value:o}]}},t,r,n)}(o,i,a,s):Dv(yv(r,l||o,void 0,n,!1),i,a,s);c.level="error",Rv(t,l,c,"onerror")})}function Av(){Qf("unhandledrejection",e=>{let[t,r,n]=jv();if(!t.getIntegration(Ov))return;let o=e;try{"reason"in e?o=e.reason:"detail"in e&&"reason"in e.detail&&(o=e.detail.reason)}catch{}if(uv()||o&&o.__sentry_own_request__)return!0;let i=function(e){return null===e||"object"!=typeof e&&"function"!=typeof e}(o)?function(e){return{exception:{values:[{type:"UnhandledRejection",value:`Non-Error promise rejection captured with value: ${String(e)}`}]}}}(o):yv(r,o,void 0,n,!0);i.level="error",Rv(t,o,i,"onunhandledrejection")})}function Dv(e,t,r,n){let o=e.exception=e.exception||{},i=o.values=o.values||[],a=i[0]=i[0]||{},s=a.stacktrace=a.stacktrace||{},l=s.frames=s.frames||[],c=isNaN(parseInt(n,10))?void 0:n,u=isNaN(parseInt(r,10))?void 0:r,d=df(t)&&t.length>0?t:function(){try{return yf.document.location.href}catch{return""}}();return 0===l.length&&l.push({colno:c,filename:d,function:"?",in_app:!0,lineno:u}),e}function $v(e){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&wf.log(`Global Handler attached: ${e}`)}function Rv(e,t,r,n){rv(r,{handled:!1,type:n}),e.captureEvent(r,{originalException:t})}function jv(){let e=Wp(),t=e.getClient(),r=t&&t.getOptions()||{stackParser:()=>[],attachStacktrace:!1};return[e,r.stackParser,r.attachStacktrace]}Ov.__initStatic();var Iv=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],Pv=class{static __initStatic(){this.id="TryCatch"}__init(){this.name=Pv.id}constructor(e){Pv.prototype.__init.call(this),this._options={XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0,...e}}setupOnce(){this._options.setTimeout&&Cf(lv,"setTimeout",Tv),this._options.setInterval&&Cf(lv,"setInterval",Tv),this._options.requestAnimationFrame&&Cf(lv,"requestAnimationFrame",Mv),this._options.XMLHttpRequest&&"XMLHttpRequest"in lv&&Cf(XMLHttpRequest.prototype,"send",Fv);let e=this._options.eventTarget;e&&(Array.isArray(e)?e:Iv).forEach(zv)}};function Tv(e){return function(...t){let r=t[0];return t[0]=hv(r,{mechanism:{data:{function:Mf(e)},handled:!0,type:"instrument"}}),e.apply(this,t)}}function Mv(e){return function(t){return e.apply(this,[hv(t,{mechanism:{data:{function:"requestAnimationFrame",handler:Mf(e)},handled:!0,type:"instrument"}})])}}function Fv(e){return function(...t){let r=this;return["onload","onerror","onprogress","onreadystatechange"].forEach(e=>{e in r&&"function"==typeof r[e]&&Cf(r,e,(function(t){let r={mechanism:{data:{function:e,handler:Mf(t)},handled:!0,type:"instrument"}},n=$f(t);return n&&(r.mechanism.data.handler=Mf(n)),hv(t,r)}))}),e.apply(this,t)}}function zv(e){let t=lv,r=t[e]&&t[e].prototype;!r||!r.hasOwnProperty||!r.hasOwnProperty("addEventListener")||(Cf(r,"addEventListener",(function(t){return function(r,n,o){try{"function"==typeof n.handleEvent&&(n.handleEvent=hv(n.handleEvent,{mechanism:{data:{function:"handleEvent",handler:Mf(n),target:e},handled:!0,type:"instrument"}}))}catch{}return t.apply(this,[r,hv(n,{mechanism:{data:{function:"addEventListener",handler:Mf(n),target:e},handled:!0,type:"instrument"}}),o])}})),Cf(r,"removeEventListener",(function(e){return function(t,r,n){let o=r;try{let r=o&&o.__sentry_wrapped__;r&&e.call(this,t,r,n)}catch{}return e.call(this,t,o,n)}})))}Pv.__initStatic();var Nv=class{static __initStatic(){this.id="LinkedErrors"}__init(){this.name=Nv.id}constructor(e={}){Nv.prototype.__init.call(this),this._key=e.key||"cause",this._limit=e.limit||5}setupOnce(){let e=Wp().getClient();!e||Bp((t,r)=>{let n=Wp().getIntegration(Nv);return n?function(e,t,r,n,o){if(!(n.exception&&n.exception.values&&o&&ff(o.originalException,Error)))return n;let i=function e(t,r,n,o,i=[]){if(!ff(n[o],Error)||i.length+1>=r)return i;let a=pv(t,n[o]);return e(t,r,n[o],o,[a,...i])}(e,r,o.originalException,t);return n.exception.values=[...i,...n.exception.values],n}(e.getOptions().stackParser,n._key,n._limit,t,r):t})}};Nv.__initStatic();var Lv=class{constructor(){Lv.prototype.__init.call(this)}static __initStatic(){this.id="HttpContext"}__init(){this.name=Lv.id}setupOnce(){Bp(e=>{if(Wp().getIntegration(Lv)){if(!lv.navigator&&!lv.location&&!lv.document)return e;let t=e.request&&e.request.url||lv.location&&lv.location.href,{referrer:r}=lv.document||{},{userAgent:n}=lv.navigator||{},o={...t&&{url:t},headers:{...e.request&&e.request.headers,...r&&{Referer:r},...n&&{"User-Agent":n}}};return{...e,request:o}}return e})}};Lv.__initStatic();var Bv=class{constructor(){Bv.prototype.__init.call(this)}static __initStatic(){this.id="Dedupe"}__init(){this.name=Bv.id}setupOnce(e,t){let r=e=>{let r=t().getIntegration(Bv);if(r){try{if(function(e,t){return!!t&&!(!function(e,t){let r=e.message,n=t.message;return!(!r&&!n||r&&!n||!r&&n||r!==n||!Uv(e,t)||!qv(e,t))}(e,t)&&!function(e,t){let r=Vv(t),n=Vv(e);return!!(r&&n&&r.type===n.type&&r.value===n.value&&Uv(e,t)&&qv(e,t))}(e,t))}(e,r._previousEvent))return(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&wf.warn("Event dropped due to being a duplicate of previously captured event."),null}catch{return r._previousEvent=e}return r._previousEvent=e}return e};r.id=this.name,e(r)}};function qv(e,t){let r=Qv(e),n=Qv(t);if(!r&&!n)return!0;if(r&&!n||!r&&n||(r=r,(n=n).length!==r.length))return!1;for(let o=0;o<n.length;o++){let e=n[o],t=r[o];if(e.filename!==t.filename||e.lineno!==t.lineno||e.colno!==t.colno||e.function!==t.function)return!1}return!0}function Uv(e,t){let r=e.fingerprint,n=t.fingerprint;if(!r&&!n)return!0;if(r&&!n||!r&&n)return!1;r=r,n=n;try{return r.join("")===n.join("")}catch{return!1}}function Vv(e){return e.exception&&e.exception.values&&e.exception.values[0]}function Qv(e){let t=e.exception;if(t)try{return t.values[0].stacktrace.frames}catch{return}}Bv.__initStatic();var Hv={};lv.Sentry&&lv.Sentry.Integrations&&(Hv=lv.Sentry.Integrations);Zn("icon-back",Kt`${Sn(' < svg xmlns = "http://www.w3.org/2000/svg"
											viewBox = "0 0 20 20"
											fill = "currentColor" > < path d = "M19 9.375H2.51l7.932-7.933-.884-.884-9 9a.625.625 0 000 .884l9 9 .884-.884-7.933-7.933H19v-1.25z" / > < /svg>')}`,Kt`${Sn('<svg xmlns="http:/ / www.w3.org / 2000 / svg " viewBox="
											0 0 20 20 " fill="
											currentColor "><path d="
											M19 9 H3 .914 l7 .293 - 7.293 L9 .793 .293 l - 9 9 a1 1 0 000 1.414 l9 9 1.414 - 1.414 L3 .914 11 H19V9z "/></svg>')}`);var Wv,Gv={sm:"
											text - 12 ",md:"
											text - 14 ",lg:"
											text - 16 "},Yv={always:"
											underline ",hover:"
											hover: underline ",none:"
											no - underline hover: no - underline "},Jv={kind:"
											Document ",definitions:[{kind:"
											OperationDefinition ",operation:"
											query ",name:{kind:"
											Name ",value:"
											ReportForm "},variableDefinitions:[{kind:"
											VariableDefinition ",variable:{kind:"
											Variable ",name:{kind:"
											Name ",value:"
											id "}},type:{kind:"
											NonNullType ",type:{kind:"
											NamedType ",name:{kind:"
											Name ",value:"
											String "}}},defaultValue:void 0,directives:[]}],directives:[],selectionSet:{kind:"
											SelectionSet ",selections:[{kind:"
											Field ",alias:void 0,name:{kind:"
											Name ",value:"
											reportForm "},arguments:[{kind:"
											Argument ",name:{kind:"
											Name ",value:"
											itemId "},value:{kind:"
											Variable ",name:{kind:"
											Name ",value:"
											id "}}},{kind:"
											Argument ",name:{kind:"
											Name ",value:"
											formVersion "},value:{kind:"
											StringValue ",value:"
											2.0 ",block:!1}}],directives:[],selectionSet:{kind:"
											SelectionSet ",selections:[{kind:"
											Field ",alias:void 0,name:{kind:"
											Name ",value:"
											form "},arguments:[],directives:[],selectionSet:void 0}]}}]}}],loc:{start:0,end:97}},Kv=e=>async(t,{outputFormat:r="
											hex "}={})=>{"
											string "==typeof t&&(t=(new globalThis.TextEncoder).encode(t));let n=await globalThis.crypto.subtle.digest(e,t);return"
											hex "===r?(e=>{let t=new DataView(e),r="
											";for(let n=0;n<t.byteLength;n+=4)r+=t.getUint32(n).toString(16).padStart(8,"
											0 ");return r})(n):n},Xv=(Kv("
											SHA - 1 "),Kv("
											SHA - 256 "));Kv("
											SHA - 384 "),Kv("
											SHA - 512 ");function Zv(e){var t=Object.create(null);return pu(e)&&e.forEach((function(e){return t[e.message]=e})),t}Wv||(Wv={});var em={disable:function(e){var t=e.graphQLErrors,r=e.operation,n=Zv(t);if(n.PersistedQueryNotSupported)return!0;if(n.PersistedQueryNotFound)return!1;var o=r.getContext().response;return!(!o||!o.status||400!==o.status&&500!==o.status)},useGETForHashedQueries:!1};var tm=Object.prototype.hasOwnProperty,rm=new WeakMap,nm=0,om=function(e){__DEV__?hl(e&&("
											function "==typeof e.sha256||"
											function "==typeof e.generateHash),'Missing/invalid "
											sha256 " or "
											generateHash " function. Please configure one using the "
											createPersistedQueryLink(options)
											" options parameter.'):hl(e&&("
											function "==typeof e.sha256||"
											function "==typeof e.generateHash),22);var t=vu(em,e),r=t.sha256,n=t.generateHash,o=void 0===n?function(e){return Promise.resolve(r(Ll(e)))}:n,i=t.disable,a=t.useGETForHashedQueries,s=!0,l="
											forLink "+nm++,c=function(e){return new Promise((function(t){return t(o(e))}))};return new Su((function(e,t){__DEV__?hl(t,"
											PersistedQueryLink cannot be the last link in the chain.
											"):hl(t,23);var r=e.query;return new Xc((function(n){var o,u,d=!1,h=!1,p=function(r,n){var a=r.response,l=r.networkError;if(!d&&(a&&a.errors||l)){d=!0;var c=[],p=a&&a.errors;pu(p)&&c.push.apply(c,p);var v=l&&l.result&&l.result.errors;pu(v)&&c.push.apply(c,v);var m={response:a,networkError:l,operation:e,graphQLErrors:pu(c)?c:void 0};if(s=!i(m),Zv(c).PersistedQueryNotFound||!s)return o&&o.unsubscribe(),e.setContext({http:{includeQuery:!0,includeExtensions:s},fetchOptions:{method:"
											POST "}}),h&&e.setContext({fetchOptions:u}),void(o=t(e).subscribe(f))}n()},f={next:function(e){p({response:e},(function(){return n.next(e)}))},error:function(e){p({networkError:e},(function(){return n.error(e)}))},complete:n.complete.bind(n)};return e.setContext({http:{includeQuery:!s,includeExtensions:s}}),a&&s&&!function(e){return e.query.definitions.some((function(e){return"
											OperationDefinition "===e.kind&&"
											mutation "===e.operation}))}(e)&&(e.setContext((function(e){var t=e.fetchOptions,r=void 0===t?{}:t;return u=r,{fetchOptions:An(An({},r),{method:"
											GET "})}})),h=!0),s?function(e){if(!e||"
											object "!=typeof e)return c(e);var t=rm.get(e);return t||rm.set(e,t=Object.create(null)),tm.call(t,l)?t[l]:t[l]=c(e)}(r).then((function(r){e.extensions.persistedQuery={version:1,sha256Hash:r},o=t(e).subscribe(f)})).catch(n.error.bind(n)):o=t(e).subscribe(f),function(){o&&o.unsubscribe()}}))}))},im="
											graphql - client ",am=class extends yr{constructor(){super(...arguments),this.token="
											",this.uri="
											",this.debug=!1,this.persistedQueries=!1}initGraphClient(){let e=new Tu({uri:this.uri,headers:{Authorization:`Bearer ${this.token}`}}),t=this.persistedQueries?om({sha256:Xv}).concat(e):e;this.client=new np({cache:new Fh,connectToDevTools:this.debug,link:t}),this.debug&&(window.__APOLLO_CLIENT__=this.client),this.dispatchEvent(new jr({name:im,instance:this.client}))}connectedCallback(){super.connectedCallback(),this.uri&&this.token&&this.initGraphClient()}};v([xr({type:String})],am.prototype,"
											token ",2),v([xr({type:String})],am.prototype,"
											uri ",2),v([xr({type:Boolean})],am.prototype,"
											debug ",2),v([xr({type:Boolean})],am.prototype,"
											persistedQueries ",2),am=v([_r("
											rs - graphql - client ")],am);var sm=class extends yn{constructor(e){super(e,im)}},lm=". / crisis - line - icon - 7 ZNZMRT7.png ";Zn("
											icon - caret - right ",Kt`${Sn('<svg xmlns="
											http: //www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M7.942 15.442l-.884-.884L11.616 10 7.058 5.442l.884-.884 5 5a.624.624 0 010 .884l-5 5z"/></svg>')}`,Kt`${Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M8.207 15.707l-1.414-1.414L11.086 10 6.793 5.707l1.414-1.414 5 5a1 1 0 010 1.414l-5 5z"/></svg>')}`),Zn("icon-chat-group",Kt`${Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_473_26)"><path d="M4.886 13.444A6.886 6.886 0 013.4 12.8l-2.253.562A.617.617 0 01.55 13.2a.625.625 0 01-.165-.593l.564-2.253A6.9 6.9 0 01.2 5.2 6.8 6.8 0 015.338.168a6.918 6.918 0 016.4 1.847c.8.8 1.388 1.788 1.712 2.873a8.538 8.538 0 00-1.3.056A5.585 5.585 0 0010.853 2.9 5.672 5.672 0 005.6 1.389a5.54 5.54 0 00-4.187 4.1 5.653 5.653 0 00.729 4.421.624.624 0 01.08.489l-.374 1.5 1.5-.374a.626.626 0 01.489.082c.346.222.715.405 1.1.546-.05.428-.068.86-.051 1.291zM14.8 19.8a6.8 6.8 0 005.034-5.136 6.888 6.888 0 00-8.245-8.245A6.8 6.8 0 006.45 11.45 6.9 6.9 0 007.2 16.6l-.564 2.252a.625.625 0 00.758.758l2.253-.563a6.824 6.824 0 003.479.953 7.15 7.15 0 001.674-.2zm-5.2-2.026l-1.5.374.374-1.5a.624.624 0 00-.08-.489 5.653 5.653 0 01-.729-4.421 5.541 5.541 0 014.187-4.1A5.64 5.64 0 0118.61 14.4a5.543 5.543 0 01-4.1 4.187 5.644 5.644 0 01-4.42-.729.654.654 0 00-.492-.084z"/></g><defs><clipPath id="clip0_473_26"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`,Kt`${Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_473_47)"><path d="M4.886 13.444A6.891 6.891 0 013.4 12.8l-2.253.562a.626.626 0 01-.758-.758l.56-2.25A6.9 6.9 0 01.2 5.2 6.8 6.8 0 015.339.168a6.911 6.911 0 016.4 1.847 6.836 6.836 0 011.712 2.873 8.181 8.181 0 00-8.335 6.241 8.532 8.532 0 00-.229 2.315zm13.1-5.179a6.916 6.916 0 00-6.4-1.847A6.8 6.8 0 006.45 11.45 6.9 6.9 0 007.2 16.6l-.564 2.252a.625.625 0 00.758.758l2.253-.563a6.825 6.825 0 003.479.953 7.16 7.16 0 001.673-.2 6.8 6.8 0 005.034-5.136 6.92 6.92 0 00-1.846-6.399h-.001z"/></g><defs><clipPath id="clip0_473_47"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`),Zn("icon-checkmark",Kt`${Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M7.5 15.583a.72.72 0 01-.513-.212L1.558 9.942l.884-.884L7.5 14.116 18.058 3.558l.884.884-10.93 10.929a.723.723 0 01-.512.212z"/></svg>')}`,Kt`${Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M7.5 15.958a1.102 1.102 0 01-.778-.322l-5.429-5.429 1.414-1.414L7.5 13.586 17.793 3.293l1.414 1.414L8.278 15.636a1.101 1.101 0 01-.778.322z"/></svg>')}`),Zn("icon-profile",Kt`${Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_473_35)"><path d="M10 0a10 10 0 1010 10A10.011 10.011 0 0010 0zM4.866 17.07a3.99 3.99 0 013.991-2.77h2.286a3.99 3.99 0 013.991 2.766 8.685 8.685 0 01-10.268 0v.004zm11.3-.87a5.354 5.354 0 00-5.024-3.146H8.857A5.354 5.354 0 003.833 16.2a8.75 8.75 0 1112.334 0h-.001zM10.059 5a3.229 3.229 0 100 6.458 3.229 3.229 0 000-6.458zm0 5.208a1.98 1.98 0 110-3.959 1.98 1.98 0 010 3.959z"/></g><defs><clipPath id="clip0_473_35"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`,Kt`${Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_473_29)"><path d="M10 0a10 10 0 1010 10A10.011 10.011 0 0010 0zm.059 5a3.229 3.229 0 110 6.458 3.229 3.229 0 010-6.458zM3.85 16.216a5.32 5.32 0 015.007-3.162h2.286a5.323 5.323 0 015.008 3.161 8.73 8.73 0 01-12.3 0l-.001.001z"/></g><defs><clipPath id="clip0_473_29"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`);var cm=_t`:host{height:100%;display:grid;grid-template-columns:1fr;grid-template-rows:min-content 1fr}main{display:flex;flex-direction:column;align-items:start;gap:var(--spacer-md);padding:var(--spacer-sm)}footer{display:flex;gap:var(--spacer-sm);justify-content:end;align-items:end;width:100%;flex:1}label{cursor:pointer;display:flex;justify-content:space-between;padding:var(--spacer-lg);border-bottom:1px solid var(--color-tone-5);margin:0 calc(-1 * var(--spacer-sm));font-weight:500}label:first-of-type{border-top:1px solid var(--color-tone-5)}`,um=class extends yr{constructor(){super(...arguments),this.matrix=new bn(this),this.gqlClient=new sm(this),this.reportFormQuery=new ap(this,Jv,{noAutoSubscribe:!0}),this.reportFormStateHistory=[],this.room="",this.event="",this.username="",this.viewState=0}static get styles(){return[oo,cm]}get thingId(){return["MATRIXCHAT",this.room,this.event].join("_")}async connectedCallback(){super.connectedCallback(),this.reportFormQuery.client=await this.gqlClient.getInstance();try{let e=await this.reportFormQuery.executeQuery({variables:{id:this.thingId}}),t=JSON.parse(e.data.reportForm.form);this.rootComponent=t.component,this.reportFormState=t.state,this.viewState=1}catch{this.handleReportLoadingError()}}updateReportFormState(e,t){this.reportFormState&&(this.reportFormState=gs({...this.reportFormState},e,t))}handleReportLoadingError(){this.dispatchEvent(new Ms({level:Ds.error,message:Es("Unable to load the report form",{desc:"Report: report loading error message"})})),this.closeForm()}handleInternalError(e){Kp(e,{tags:{section:"reporting"}})}computeValue(e){if("boolean"==typeof e||"string"==typeof e)return e;if("ref"===e.$type)return us(this.reportFormState,e.ref);if("computed"===e.$type&&"eq"===e.function)return this.computeValue(e.args[0])===this.computeValue(e.args[1]);if("computed"===e.$type&&"neq"===e.function)return this.computeValue(e.args[0])!==this.computeValue(e.args[1]);if("computed"===e.$type&&"conditionalSelect"===e.function)for(let t=0;t<e.conditions.length;t++)if(this.computeValue(e.conditions[t]))return e.values[t];return this.handleInternalError(`Unknown computed value ${e}`),null}closeForm(){this.dispatchEvent(new CustomEvent("cancel"))}async sendReport(e,t="site"){try{let r=[e,t].join(":");return await this.matrix.client.reportEvent(this.room,this.event,0,r),!0}catch(r){let e=Es("Unknown error during report sending",{desc:"Report: report sending error message"});return"M_FORBIDDEN"===r.name&&(e=r.message),this.dispatchEvent(new Ms({level:Ds.error,message:e})),!1}}async executeAction(e){switch(e.actionType){case"setState":{let t=e.args.key,r=this.computeValue(e.args.value);this.reportFormState&&(this.reportFormStateHistory.push({...this.reportFormState}),this.updateReportFormState(t,r));break}case"openTemplatedUrl":{let t=e.args.urlTemplate;for(let r of e.args.placeholders)t=t.replace(`%(${r})s`,this.computeValue(e.args[r]));window.open(t),this.closeForm();break}case"formSubmit":await this.sendReport(this.computeValue(e.args.ruleId),e.args.ruleType)&&(this.reportFormStateHistory=[],this.viewState=2);break;case"flow":{let t=this.computeValue(e.args[0]);"SELF_HARM"===t?this.viewState=3:this.handleInternalError(`Unknown reporting flow "${t}"`);break}default:this.handleInternalError(`Unknown reporting action "${e}"`)}}isConditionMet(e){return Boolean(this.computeValue(e))}renderContent(e){return"PlainText"===e.type?Jt`<span>${e.text}</span>`:"Link"===e.type?(({attributes:e,children:t,fontWeight:r,external:n,size:o,suppressVisitedStyle:i=!1,underline:a="hover",visited:s})=>{let{attrs:l,html:c,ifDefined:u}=Jr();return c`
												<
												a
											$ {
												l(e)
											}
											href = "${(null==e?void 0:e.href)||"
											# "}"
											@click = "${null==e?void 0:e.onclick}"
											class = "${`\n        ${(null==e?void 0:e.className)||"
											"} a\n        ${o?Gv[o]:"
											"}\n        ${"
											semibold "===r?"
											font - semibold ":"
											"}\n        ${i?"
											no - visited ":"
											"}\n        ${a?Yv[a]:"
											"}\n        ${s?"
											visited ":"
											"}`}" >
											$ {
												t
											}
											$ {
												n ? c`<icon-external
            fill="${u("sm"!==o?void 0:"")}"
            class="ml-2xs align-text-bottom ${"md"===o?"text-16 leading-4":""}"></icon-external>` : ""
											} < /a >
											`})({attributes:{href:e.linkTo,target:e.newTab?"blank":void 0},children:e.text}):(this.handleInternalError(`
											Unknown content type "${e}"
											`),null)}renderConditionComponent({children:e}){let t=[];for(let r of e)this.isConditionMet(r.condition)&&t.push(r.component);return Jt`
											$ {
												Gs(t, e => this.renderComponent(e))
											}
											`}renderScreenComponent({children:e}){return Jt`
											$ {
												Gs(e, e => this.renderComponent(e))
											}
											`}renderScreenTitleComponent({textContent:e}){return Jt` <
											h3 class = "mx-0 my-2xs" > $ {
												Gs(e, e => this.renderContent(e))
											} < /h3>
											`}renderScreenFooterComponent({children:e}){return Jt`
											$ {
												Gs(e, e => this.renderComponent(e))
											}
											`}renderTextComponent({textContent:e}){return Jt` <
											div class = "max-w-[600px]" > $ {
												Gs(e, e => this.renderContent(e))
											} < /div>
											`}renderButtonBarComponent({options:e,value:t}){let r=this.computeValue(t);return Jt` <
											div class = "flex flex-wrap gap-xs" >
												$ {
													Gs(e, e => fn({
														appearance: "secondary",
														children: e.label,
														selected: r === e,
														attributes: {
															type: "button",
															onclick: () => {
																let r = t.ref;
																this.updateReportFormState(r, e)
															}
														}
													}))
												} <
												/div>
											`}renderButtonComponent({action:e,text:t,disabled:r}){return Jt` < footer >
												$ {
													fn({
														children: Jt`<slot name="cancel">${Es("Cancel",{desc:"Cancel button"})}</slot>`,
														attributes: {
															type: "button",
															className: "min-w-[120px]",
															onclick: this.closeForm
														}
													})
												}
											$ {
												fn({
													appearance: "primary",
													children: this.computeValue(t),
													attributes: {
														type: "button",
														className: "min-w-[120px]",
														disabled: !!this.computeValue(r) || void 0,
														onclick: () => {
															let t = "actionType" === e.$type ? e : this.computeValue(e);
															!t || !this.reportFormState || this.executeAction(t)
														}
													}
												})
											} <
											/footer>`}renderInfoTooltipComponent({textContent:e}){return Jt` <
											div class = "inline-block rounded-[.5rem] bg-tone-6 p-xs text-12 text-tone-2" >
												<
												icon - info > < /icon-info>
											$ {
												Gs(e, e => this.renderContent(e))
											} <
											/div>
											`}renderFooterContentComponent({title:e,text:t,visible:r}){return this.isConditionMet(r)?Jt` <
											div class = "max-w-[600px]" >
												<
												h4 class = "text-16 m-0" > $ {
													this.computeValue(e)
												} < /h4> <
												p class = "text-tone-2 m-0" > $ {
													this.computeValue(t)
												} < /p> <
												/div>
											`:null}renderSelectOneComponent({options:e,value:t}){let r=this.computeValue(t);return Jt` <
											div class = "flex flex-col w-100" >
												$ {
													ci(e, e => e.value, e => Jt`
              <label>
                ${e.label}
                <input
                  type="radio"
                  name="${t.ref}"
                  value="${e.value}"
                  ?checked="${r.value===e.value}"
                  @change="${()=>{this.updateReportFormState(`${t.ref}.value`,e.value)}}"
                />
              </label>
            `)
												} <
												/div>
											`}renderComponent(e){if(!e)return null;switch(e.componentType){case"OneOf":return this.renderConditionComponent(e.props);case"Screen":return this.renderScreenComponent(e.props);case"ScreenTitle":return this.renderScreenTitleComponent(e.props);case"ScreenFooter":return this.renderScreenFooterComponent(e.props);case"SelectOne":return this.renderSelectOneComponent(e.props);case"TextBlock":return this.renderTextComponent(e.props);case"Button":return this.renderButtonComponent(e.props);case"ButtonBar":return this.renderButtonBarComponent(e.props);case"InfoTooltip":return this.renderInfoTooltipComponent(e.props);case"FooterContent":return this.renderFooterContentComponent(e.props);default:return this.handleInternalError(`
											Unknown reporting component type "${JSON.stringify(e)}"
											`),null}}renderBody(){switch(this.viewState){case 0:return Jt` <
											rs - skeleton class = "w-[400px]"
											shimmer > < /rs-skeleton> <
												rs - skeleton class = "w-[300px]"
											shimmer > < /rs-skeleton> <
												div class = "flex flex-wrap gap-xs" >
												<
												rs - skeleton
											class = "w-[150px] h-[length:var(--size-button-md-h)] rounded-lg"
											shimmer
												>
												< /rs-skeleton> <
												rs - skeleton
											class = "w-[250px] h-[length:var(--size-button-md-h)] rounded-lg"
											shimmer
												>
												< /rs-skeleton> <
												rs - skeleton
											class = "w-[200px] h-[length:var(--size-button-md-h)] rounded-lg"
											shimmer
												>
												< /rs-skeleton> <
												rs - skeleton
											class = "w-[150px] h-[length:var(--size-button-md-h)] rounded-lg"
											shimmer
												>
												< /rs-skeleton> <
												rs - skeleton
											class = "w-[150px] h-[length:var(--size-button-md-h)] rounded-lg"
											shimmer
												>
												< /rs-skeleton> <
												rs - skeleton
											class = "w-[250px] h-[length:var(--size-button-md-h)] rounded-lg"
											shimmer
												>
												< /rs-skeleton> <
												rs - skeleton
											class = "w-[200px] h-[length:var(--size-button-md-h)] rounded-lg"
											shimmer
												>
												< /rs-skeleton> <
												/div> <
												rs - skeleton class = "w-[300px]"
											shimmer > < /rs-skeleton>
											`;case 1:return this.renderComponent(this.rootComponent);case 2:return function({onContinue:e}){return Jt` <
											div
											class = "flex items-center justify-center h-[2rem] w-[2rem] rounded-full bg-action-secondary text-global-white" >
												<
												icon - checkmark > < /icon-checkmark> <
												/div> <
												h3 class = "m-0 text-18 font-semibold" >
												$ {
													Es("Thanks for your report", {
														desc: "Reporting: reporting success view title"
													})
												} <
												/h3> <
												p class = "m-0 max-w-[600px]" >
												$ {
													Es("Thanks again for your report and for looking out for yourself and your fellow redditors. Your reporting helps make Reddit a better, safer, and more welcoming place for everyone; and it means a lot to us.", {
														desc: "Reporting: reporting success view main text"
													})
												} <
												/p> <
												footer >
												$ {
													fn({
														appearance: "primary",
														children: Es("Done", {
															desc: "Reporting: reporting success Done button label"
														}),
														attributes: {
															type: "button",
															className: "min-w-[120px]",
															onclick: e
														}
													})
												} <
												/footer>
											`}({onContinue:()=>this.closeForm()});case 3:return function({user:e,onConfirm:t,onCancel:r}){return Jt` <
											div class = "" >
												<
												img
											width = "144"
											height = "144"
											src = "${lm}"
											alt = "${Es("
											Crisis Line Icon ",{desc:"
											Reporting: self - harm flow image alt text "})}" /
												>
												<
												/div> <
												h3 class = "m-0 text-18 font-semibold" >
												$ {
													Es(xs`Would you like Reddit to reach out to u/${e}?`, {
														desc: "Reporting: self-harm flow heading"
													})
												} <
												/h3> <
												p class = "text-14 m-0 max-w-[600px]" >
												$ {
													Es(Jt`We’ve partnered with
          <a
            class="text-action-secondary no-underline"
            href="https://www.crisistextline.org/"
            target="_blank"
            rel="noopener noreferrer"
            >Crisis Text Line</a
          >
          to provide redditors with support from trained Crisis Counselors, and will reach out
          (confidentially) to let u/${e} know that there are people who are here for them.`, {
														desc: "Reporting: self-harm flow body"
													})
												} <
												/p> <
												a
											class = "text-16 text-action-secondary no-underline"
											href = "https://www.reddithelp.com/en/categories/rules-reporting/suicide-response/what-do-i-do-if-someone-talks-about-seriously-hurting"
											target = "_blank"
											rel = "noopener noreferrer" >
												$ {
													Es("Other Options", {
														desc: 'Reporting: self-harm flow "Other Options"'
													})
												} <
												icon - caret - right > < /icon-caret-right> <
												/a> <
												footer >
												$ {
													fn({
														children: Es("Cancel", {
															desc: "Cancel button"
														}),
														attributes: {
															type: "button",
															className: "min-w-[120px]",
															onclick: r
														}
													})
												}
											$ {
												fn({
													appearance: "primary",
													children: Es("Yes", {
														desc: 'Reporting: self-harm flow "Yes" action'
													}),
													attributes: {
														type: "button",
														className: "min-w-[120px]",
														onclick: t
													}
												})
											} <
											/footer>
											`}({user:this.username,onConfirm:async()=>{await this.sendReport("COMMITTING_SELF_HARM")&&(this.viewState=4)},onCancel:()=>this.closeForm()});case 4:return function({user:e,onContinue:t}){return Jt` <
											div
											class = "flex items-center justify-center h-[2rem] w-[2rem] rounded-full bg-action-secondary text-global-white" >
												<
												icon - checkmark > < /icon-checkmark> <
												/div> <
												h3 class = "text-18 m-0 font-semibold" >
												$ {
													Es("Thank you for caring about your fellow redditor", {
														desc: "Reporting: self-harm flow success view title"
													})
												} <
												/h3> <
												p class = "text-14 m-0 max-w-[600px]" >
												$ {
													Es(xs`We’ve reached out to u/${e}. By letting us know, you’ve helped connect them to people who are there to listen and provide support.`, {
														desc: "Reporting: self-harm flow success view main text"
													})
												} <
												/p> <
												h4 class = "text-14 m-0 font-semibold" >
												$ {
													Es("Other things you can do", {
														desc: "Reporting: self-harm flow success additional actions title"
													})
												} <
												/h4> <
												div class = "grid grid-cols-[min-content_1fr] gap-x-sm" >
												<
												icon - chat - group class = "row-span-2 pt-xs"
											size = "lg" > < /icon-chat-group> <
												h5 class = "text-14 m-0 font-semibold" >
												$ {
													Es("Learn how to help someone in crisis", {
														desc: "Reporting: self-harm flow success additional action title"
													})
												} <
												/h5> <
												p class = "text-14 m-0 max-w-[600px]" >
												$ {
													Es("Get advice on what you can say and how to be supportive.", {
														desc: "Reporting: self-harm flow success additional action body"
													})
												} <
												/p> <
												/div> <
												div class = "grid grid-cols-[min-content_1fr] gap-x-sm" >
												<
												icon - profile class = "row-span-2 pt-xs"
											size = "lg" > < /icon-profile> <
												h5 class = "text-14 m-0 font-semibold" >
												$ {
													Es("Get yourself support", {
														desc: "Reporting: self-harm flow success additional action title"
													})
												} <
												/h5> <
												p class = "text-14 m-0 max-w-[600px]" >
												$ {
													Es("If this has brought up difficult emotions, there are people and resources here for you too.", {
														desc: "Reporting: self-harm flow success additional action body"
													})
												} <
												/p> <
												/div> <
												footer >
												$ {
													fn({
														appearance: "primary",
														children: Es("Ok", {
															desc: "Ok button label"
														}),
														attributes: {
															type: "button",
															className: "min-w-[120px]",
															onclick: t
														}
													})
												} <
												/footer>
											`}({user:this.username,onContinue:()=>this.closeForm()})}}render(){return Jt`
											$ {
												lo({
													title: Es("Submit a report", {
														desc: "Report: section title"
													}),
													leadingContent: this.reportFormStateHistory.length > 0 ? fn({
														appearance: "plain",
														size: an.Small,
														attributes: {
															className: "text-tone-2",
															type: "button",
															onclick: () => {
																let e = this.reportFormStateHistory.pop();
																this.reportFormState = e
															}
														},
														leadingIcon: Jt`<icon-back></icon-back>`
													}) : void 0
												})
											} <
											main > $ {
												this.renderBody()
											} < /main>
											`}};v([xr()],um.prototype,"room",2),v([xr()],um.prototype,"event",2),v([xr()],um.prototype,"username",2),v([kr()],um.prototype,"viewState",2),v([kr()],um.prototype,"reportFormState",2),um=v([_r("rs-message-report")],um);var dm=class extends Hs{constructor(){super(...arguments),this.name=Es("Report",{desc:"Message Actions Menu: Report action tooltip"}),this.icon=Jt` < icon - report > < /icon-report>`}isActionAllowed(){var e;let t=this.getCurrentRoom();if(!this.matrix||!this.event||!t)return!1;let r=this.matrix.getUserId();return(null==(e=this.event.sender)?void 0:e.userId)!==r}renderOverlay(){var e,t;let r,n;if(!this.event||!(n=this.event.getId())||!(r=this.event.getRoomId()))return null;let o=this.event.getSender(),i=o&&(null==(t=null==(e=this.getCurrentRoom())?void 0:e.getMember(o))?void 0:t.name);return Jt`<rs-message-report
											event = "${n}"
											room = "${r}"
											username = "${i||"
											"}"
											@cancel = $ {
													this.hideOverlay
												} >
												< /rs-message-report>`}};dm=v([_r("rs-timeline-event-report-action")],dm);Zn("icon-emoji",Kt`${Sn('<svg xmlns="http:/ / www.w3.org / 2000 / svg " viewBox="
											0 0 20 20 " fill="
											currentColor "><g clip-path="
											url(#clip0_473_125)
											"><path d="
											M10 20 a10 10 0 1110 - 10 10.011 10.011 0 01 - 10 10 zm0 - 18.75 A8 .75 8.75 0 1018.75 10 8.76 8.76 0 0010 1.25 zm3 .511 12.109 l - 1.022 - .718 A3 .046 3.046 0 0110 13.829 a3 .045 3.045 0 01 - 2.489 - 1.188 l - 1.022 .718 A4 .252 4.252 0 0010 15.079 a4 .252 4.252 0 003.511 - 1.72 zM6 7.5 a1 .5 1.5 0 100 3 1.5 1.5 0 000 - 3 zm8 0 a1 .5 1.5 0 100 3 1.5 1.5 0 000 - 3 z "/></g><defs><clipPath id="
											clip0_473_125 "><path d="
											M0 0 h20v20H0z "/></clipPath></defs></svg>')}`,Kt`${Sn('<svg xmlns="
											http: //www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_473_146)"><path d="M10 0a10 10 0 1010 10A10.011 10.011 0 0010 0zM4.5 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm5.5 6.454a4.63 4.63 0 01-3.818-1.878l1.635-1.151A2.669 2.669 0 0010 13.454a2.666 2.666 0 002.182-1.029l1.636 1.15A4.626 4.626 0 0110 15.454zm4-4.954a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/></g><defs><clipPath id="clip0_473_146"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`);var hm=class extends Hs{constructor(){super(...arguments),this.name=Es("Reactions",{desc:"Message Actions Menu: Reaction picker tooltip"}),this.icon=Jt`<icon-emoji></icon-emoji>`}isActionAllowed(){return!0}renderOverlay(){return null}};hm=v([_r("rs-timeline-event-reaction-picker-action")],hm);Zn("icon-load",Kt`${Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M4.444 10.625H0v-1.25h4.444v1.25zM20 9.375h-4.444v1.25H20v-1.25zM10.625 0h-1.25v4.444h1.25V0zm0 15.556h-1.25V20h1.25v-4.444zM5.5 13.319l-.625-1.083-3.848 2.223.625 1.082L5.5 13.319zm13.473-7.778l-.625-1.082L14.5 6.681l.625 1.083 3.848-2.223zm-11.21-.665L5.541 1.027l-1.082.625L6.681 5.5l1.082-.624zm7.778 13.472L13.318 14.5l-1.082.625 2.223 3.849 1.082-.626zm3.432-3.889l-3.849-2.223-.624 1.083 3.849 2.222.624-1.082zM5.5 6.681L1.652 4.459l-.625 1.082 3.849 2.223.624-1.083zm2.263 8.443L6.682 14.5l-2.223 3.848 1.082.625 2.222-3.849zm7.778-13.472l-1.082-.625-2.223 3.849 1.082.625 2.223-3.849z"/></svg>')}`),Zn("icon-add",Kt`${Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19 9.375h-8.375V1h-1.25v8.375H1v1.25h8.375V19h1.25v-8.375H19v-1.25z"/></svg>')}`,Kt`${Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19 9h-8V1H9v8H1v2h8v8h2v-8h8V9z"/></svg>')}`);var pm={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"SearchChatMessageReactionIcons"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"query"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},defaultValue:void 0,directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"first"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:void 0,directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"searchChatMessageReactionIcons"},arguments:[{kind:"Argument",name:{kind:"Name",value:"query"},value:{kind:"Variable",name:{kind:"Name",value:"query"}}},{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"Variable",name:{kind:"Name",value:"first"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"edges"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"node"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"url"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"key"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"altText"},arguments:[],directives:[],selectionSet:void 0}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"cursor"},arguments:[],directives:[],selectionSet:void 0}]}}]}}]}}],loc:{start:0,end:233}};var fm=(()=>{let e=null;return async t=>e||(e=async function(e){var t,r;let n=await e.query({query:pm,variables:{first:100,query:""}});return n.error?{error:n.error}:{data:(null==(r=null==(t=n.data)?void 0:t.searchChatMessageReactionIcons)?void 0:r.edges).map(({node:{url:e,key:t,altText:r}})=>({url:e,key:t,altText:r}))}}(t),e)})();var vm=class{constructor(e){this.host=e,this.gqlClient=new sm(e)}async fetchReactionIcons(){let e=await this.gqlClient.getInstance(),t=await fm(e);t.error||(vm.reactionIconCache=function(e){let t={},r=["upvote","downvote","joy","care","wave","doge"],n=new Set(r),o=[];for(let a of e)n.has(a.altText)?t[a.altText]=a:o.push(a);let i=[];for(let a of r)i.push(t[a]);return{reactions:[...i,...o],featuredReactions:i}}(t.data),this.host.requestUpdate())}getReactionIcons(){if(vm.reactionIconCache)return vm.reactionIconCache.reactions;this.fetchReactionIcons()}getReactionIcon(e){if(vm.reactionIconCache)return vm.reactionIconCache.reactions.find(t=>t.key===e);this.fetchReactionIcons()}getFeaturedReactions(){if(vm.reactionIconCache)return vm.reactionIconCache.featuredReactions;this.fetchReactionIcons()}},mm=vm;mm.reactionIconCache=null;var gm=_t`.scroll{--scrollbar-color-background-default:var(--color-tone-4);--scrollbar-color-background-hover:var(--color-tone-3);--scrollbar-size:var(--rem14)}.scroll::-webkit-scrollbar{width:var(--scrollbar-size)}.scroll::-webkit-scrollbar-track{border:0}.scroll::-webkit-scrollbar-thumb{min-height:50px;border-radius:calc(var(--scrollbar-size) / 2);background-clip:padding-box;border:3px solid rgba(0,0,0,0);background-color:var(--scrollbar-color-background-default)}.scroll::-webkit-scrollbar-thumb:hover{background-color:var(--scrollbar-color-background-hover)}.reaction-list-container{--scrollbar-color-background-default:var(--color-tone-4);--scrollbar-color-background-hover:var(--color-tone-3);--scrollbar-size:var(--rem14)}.reaction-list-container::-webkit-scrollbar{width:var(--scrollbar-size)}.reaction-list-container::-webkit-scrollbar-track{border:0}.reaction-list-container::-webkit-scrollbar-thumb{min-height:50px;border-radius:calc(var(--scrollbar-size) / 2);background-clip:padding-box;border:3px solid rgba(0,0,0,0);background-color:var(--scrollbar-color-background-default)}.reaction-list-container::-webkit-scrollbar-thumb:hover{background-color:var(--scrollbar-color-background-hover)}`,ym=class extends CustomEvent{constructor(e){super("pick-reaction",{detail:e,bubbles:!1,composed:!0})}},bm=class extends yr{constructor(){super(...arguments),this.reactionIcons=new mm(this),this.handleClickReactionButton=e=>{let t=e.currentTarget.dataset.key;this.dispatchEvent(new ym(t))}}static get styles(){return[gm,oo]}renderSpinner(){return Jt`
												<
												div class = "h-full w-full flex items-center justify-center " >
												<
												icon - load size = "lg"
											class = "w-[1.3125rem] h-[1.3125rem] animate-spin" > < /icon-load> <
												/div>
											`}renderIcons(e){return Jt` <
											div
											class = "h-full w-full overflow-auto grid grid-cols-5 gap-[var(--spacer-sm)] reaction-list-container" >
												$ {
													ci(e, e => e.key, e => Jt`
              <button
                class="border-none p-0 m-0 w-[var(--size-xl)] h-[var(--size-xl)] transition bg-transparent cursor-pointer hover:scale-125"
                data-key=${e.key}
                @click=${this.handleClickReactionButton}
              >
                <img class="w-full h-full" src="${e.url}" alt="${e.altText}" />
              </button>
            `)
												} <
												/div>
											`}render(){let e=this.reactionIcons.getReactionIcons();return Jt` <
											div
											class = "h-[14.5rem] w-[16rem] pl-[var(--spacer-md)] pr-[var(--spacer-sm)] py-[var(--spacer-sm)] mb-[var(--spacer-2xs)] shadow-sm bg-white dark:bg-[color:var(--color-tone-5)] rounded-[0.5rem] overflow-none" >
												$ {
													e ? this.renderIcons(e) : this.renderSpinner()
												} <
												/div>
											`}};bm=v([_r("rs-reaction-list")],bm);var _m=_t`
											@keyframes revealAndScaleUp {
												0 % {
													opacity: 0;transform: scale(0.5)
												}
												80 % {
													opacity: 1;transform: scale(1.05)
												}
												100 % {
													transform: scale(1)
												}
											}.reaction - picker - animation {
												animation: revealAndScaleUp 200 ms linear
											}
											@keyframes slideIn {
												0 % {
													opacity: 0;transform: translateY(25 px)
												}
												25 % {
													opacity: .125;transform: translateY(0)
												}
												50 % {
													opacity: .5;transform: translateY(-5 px)
												}
												100 % {
													opacity: 1;transform: translateY(0)
												}
											}.reaction - preview - animation: nth - child(1) {
												animation: slideIn 300 ms linear backwards;animation - delay: 100 ms;transition: all .15 s ease - in -out
											}.reaction - preview - animation: nth - child(2) {
												animation: slideIn 300 ms linear backwards;animation - delay: 140 ms;transition: all .15 s ease - in -out
											}.reaction - preview - animation: nth - child(3) {
												animation: slideIn 300 ms linear backwards;animation - delay: 180 ms;transition: all .15 s ease - in -out
											}.reaction - preview - animation: nth - child(4) {
												animation: slideIn 300 ms linear backwards;animation - delay: 220 ms;transition: all .15 s ease - in -out
											}.reaction - preview - animation: nth - child(5) {
												animation: slideIn 300 ms linear backwards;animation - delay: 260 ms;transition: all .15 s ease - in -out
											}.reaction - preview - animation: nth - child(6) {
												animation: slideIn 300 ms linear backwards;animation - delay: 300 ms;transition: all .15 s ease - in -out
											}
											`;var wm=class extends yr{constructor(){super(...arguments),this.matrix=new bn(this),this.reactionIcons=new mm(this),this.reactionListIsShown=!1,this.showReactionList=()=>{this.reactionListIsShown=!0},this.toggleReaction=e=>{var t;let r=null==(t=this.usedReactionEventMap)?void 0:t[e];r?(async function(e,t,r){e.redactEvent(t,r)}(this.matrix.client,this.roomId,r),fo(this,Ao(e))):(async function(e,t,r,n){e.sendEvent(t,zr.Reaction,{"m.relates_to":{event_id:r,key:n,rel_type:Gr.Annotation}})}(this.matrix.client,this.roomId,this.eventId,e),fo(this,Co(e))),this.dispatchEvent(new CustomEvent("dismiss"))},this.handleClickReactionButton=async e=>{let t=e.currentTarget.dataset.key;this.toggleReaction(t)},this.handlePickReactionEvent=async e=>{let t=e.detail;this.toggleReaction(t)}}static get styles(){return[oo,_m]}renderReactions(){let e=this.reactionIcons.getFeaturedReactions();return e?Jt`
											$ {
												ci(e, e => e.key, e => Jt`
          <button
            class="border-none bg-transparent p-0 m-0 w-[var(--size-xl)] h-[var(--size-xl)] reaction-preview-animation transition cursor-pointer hover:scale-125"
            data-key=${e.key}
            @click=${this.handleClickReactionButton}
          >
            <img class="w-full h-full" src="${e.url}" alt="${e.altText}" />
          </button>
        `)
											}
											`:Jt` <
											div class = "h-full w-[13.25rem] flex items-center justify-center " >
												<
												icon - load size = "lg"
											class = "w-[1.3125rem] h-[1.3125rem] animate-spin" > < /icon-load> <
												/div>
											`}render(){return this.reactionListIsShown?Jt` < rs - reaction - list
											@pick - reaction = $ {
													this.handlePickReactionEvent
												} >
												< /rs-reaction-list>`:Jt` <
												div
											class = "reaction-picker-animation shadow-sm bg-white dark:bg-[color:var(--color-tone-6)] dark:border-1 dark:border-solid dark:border-[color:var(--color-tone-3)] rounded-[1.375rem] flex gap-[var(--spacer-2xs)] px-[var(--spacer-xs)] py-[0.375rem] mb-[var(--spacer-2xs)] items-center justify-center" >
												$ {
													this.renderReactions()
												} <
												button
											class = "border-none bg-transparent p-0 m-0 w-[var(--size-xl)] h-[var(--size-xl)] cursor-pointer dark:bg-[color:var(--color-tone-2)] bg-[color:var(--color-tone-6)] rounded-[var(--radius-full)] flex items-center justify-center"
											@click = $ {
													this.showReactionList
												} >
												<
												icon - add
											size = "${En.Small}"
											class = "w-full h-full flex items-center justify-center dark:text-[color:var(--color-tone-6)]" >
												< /icon-add> <
												/button> <
												/div>
											`}};v([xr({type:String})],wm.prototype,"roomId",2),v([xr({type:String})],wm.prototype,"eventId",2),v([xr({type:Object})],wm.prototype,"usedReactionEventMap",2),v([kr()],wm.prototype,"reactionListIsShown",2),wm=v([_r("rs-reaction-picker")],wm);var xm=_t`: host {
												position: absolute;top: 0;right: var (--spacer - md);transform: translateY(-50 % )
											}.timeline - event - menu - container {
												display: flex;align - items: center;border - radius: 24 px;background - color: var (--color - tone - 7);box - shadow: 0
												var (--size - 2 xs) var (--size - 2 xs) rgba(0, 0, 0, 0.15),
												0 1 px
												var (--size - 2 xs) rgba(0, 0, 0, 0.15);color: var (--color - tone - 1);padding: var (--spacer - 2 xs) var (--spacer - xs)
											}
											`,km=class extends(mn(yr)){constructor(){super(...arguments),this.mustBeVisible=!1,this.reactionsOverlayVisible=!1,this.onOutsideClick=()=>{this.reactionsOverlayVisible=!1},this.onPickerClick=e=>{e.stopPropagation()},this.onPickerDismiss=()=>{this.reactionsOverlayVisible=!1},this.toggleReactionsOverlayVisiblity=()=>{this.reactionsOverlayVisible=!this.reactionsOverlayVisible}}static get styles(){return[xm,oo]}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.onOutsideClick)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.onOutsideClick)}render(){var e,t;let r=this.mustBeVisible||this.reactionsOverlayVisible;return Jt` <
											div class = "timeline-event-menu-container ${r?"
											":"
											hidden "}" >
												$ {
													this.reactionsOverlayVisible ? Jt`<div class="absolute top-0 right-0 pb-2 -translate-y-full">
              <rs-reaction-picker
                roomId="${(null==(e=this.event)?void 0:e.getRoomId())||""}"
                eventId="${(null==(t=this.event)?void 0:t.getId())||""}"
                .usedReactionEventMap="${this.usedReactionEventMap}"
                @click=${this.onPickerClick}
                @dismiss=${this.onPickerDismiss}
              ></rs-reaction-picker>
            </div>` : Jt``
												} <
												rs - timeline - event - reaction - picker - action
											@click = $ {
													this.toggleReactionsOverlayVisiblity
												}
												.disableTooltip = $ {
													this.reactionsOverlayVisible
												} >
												< /rs-timeline-event-reaction-picker-action> <
												rs - timeline - event - report - action.event = "${this.event}" > < /rs-timeline-event-report-action> <
												rs - timeline - event - delete - action.event = "${this.event}" > < /rs-timeline-event-delete-action> <
												/div>
											`}};function Em(e,t){return e.getTs()-t.getTs()}v([xr({type:Object})],km.prototype,"event",2),v([xr({type:Object})],km.prototype,"usedReactionEventMap",2),v([xr({type:Boolean})],km.prototype,"mustBeVisible",2),v([kr()],km.prototype,"reactionsOverlayVisible",2),km=v([_r("rs-timeline-event-menu")],km);var Sm=class extends yr{constructor(){super(...arguments),this.pendingReactionActions=new Set,this.matrix=new bn(this),this.reactionIcons=new mm(this),this.sendReaction=async e=>{var t,r;let n=(null==(t=e.getRelation())?void 0:t.event_id)||"",o=(null==(r=e.getRelation())?void 0:r.key)||"",i=e.getRoomId()||"",a=this.matrix.client.sendEvent(i,zr.Reaction,{"m.relates_to":{event_id:n,key:o,rel_type:Gr.Annotation}});this.pendingReactionActions.add(o),this.pendingReactionActions=new Set(this.pendingReactionActions),await a,this.pendingReactionActions.delete(o),this.pendingReactionActions=new Set(this.pendingReactionActions),fo(this,Co(o))},this.redactReaction=async e=>{var t;let r=e.getId();if(!r)return void Kp("Event doesn't have an ID");let n=(null==(t=e.getRelation())?void 0:t.key)||"",o=this.matrix.client.redactEvent(e.getRoomId()||"",r);this.pendingReactionActions.add(n),this.pendingReactionActions=new Set(this.pendingReactionActions),await o,this.pendingReactionActions.delete(n),this.pendingReactionActions=new Set(this.pendingReactionActions),fo(this,Ao(n))},this.handleReactionButtonClick=async e=>{var t,r;let n=e.currentTarget,o=n.dataset.userEventId,i=null==(t=this.reactions)?void 0:t.find(e=>e.getId()===o),a=n.dataset.eventId,s=null==(r=this.reactions)?void 0:r.find(e=>e.getId()===a);i?await this.redactReaction(i):s&&await this.sendReaction(s)}}static get styles(){return[oo]}updated(e){if(e.has("reactions"))if(this.reactions){let e=this.matrix.client.getUserId();this.reactionGroups=function(e,t){var r,n;let o=e.sort(Em),i={};for(let a of o){if(a.isRedacted())continue;let e=(null==(r=a.getRelation())?void 0:r.key)||"",o=i[e]||{key:e,count:0,userEventId:null,eventId:a.getId()};o.count+=1,(null==(n=a.sender)?void 0:n.userId)===t&&(o.userEventId=a.getId()||null),i[e]=o}return Object.values(i)}(this.reactions,e||"")}else this.reactionGroups=void 0}render(){return this.reactionGroups?Jt` <
											div class = "flex flex-wrap gap-[0.375rem] mt-[0.375rem]" >
												$ {
													ci(this.reactionGroups, ({
														key: e
													}) => e, ({
														key: e,
														count: t,
														userEventId: r,
														eventId: n
													}) => {
														let o = this.reactionIcons.getReactionIcon(e),
															i = o ? o.url : `https://i.redd.it/${e||""}`,
															a = this.pendingReactionActions.has(e);
														return Jt`
              <button
                class="${"text-tone-1 flex items-center justify-center px-[var(--spacer-xs)] py-[var(--spacer-2xs)] m-0 w-auto h-[1.75rem] rounded-[0.875rem] cursor-pointer"} ${r?"bg-alienblue-100 dark:bg-alienblue-400/30 hover:bg-alienblue-200 hover:dark:bg-alienblue-400/50 border-none":"bg-transparent hover:bg-alienblue-200 hover:dark:bg-alienblue-400/50 border-[1px] border-solid border-puregray-300"} ${a?"opacity-50 cursor-wait":""}"
                data-event-id=${n}
                data-user-event-id=${r||""}
                ?disabled=${a}
                @click=${this.handleReactionButtonClick}
              >
                <img
                  class="w-[1.25rem] h-[1.25rem]"
                  src=${i}
                  alt=${o?o.altText:"Reaction Icon"}
                />
                <span class="block ml-[var(--spacer-2xs)]">${t}</span>
              </button>
            `
													})
												} <
												/div>
											`:Jt`
											`}};v([xr({type:Object})],Sm.prototype,"event",2),v([xr({type:Array})],Sm.prototype,"reactions",2),v([kr()],Sm.prototype,"pendingReactionActions",2),v([kr()],Sm.prototype,"reactionGroups",2),Sm=v([_r("rs-timeline-event-reactions")],Sm);var Om="https://www.reddit.com",Cm="https://www.redditstatic.com/avatars/defaults/v2",Am=f(C()),Dm=/\s/,$m=(e,t)=>(r,n)=>{if(n>e.length){let t=r[n-e.length-1];if(n===r.length)return 0;if(!t.match(Dm)){if("/"!==t)return 0;{let t=n-e.length-2;if(t>=0&&!r[t].match(Dm))return 0}}}let o=r.slice(n);return""===o||(t.test(o)?o.match(t)[0].length:0)},Rm=(e=>(e.All="all",e.Here="here",e))(Rm||{}),jm=new RegExp("^[A-Za-z0-9][A-Za-z0-9_]{0,20}\\b"),Im=new RegExp("^@all","i"),Pm=new RegExp("^[A-Za-z0-9_-]{0,20}"),Tm=new RegExp("^/?(u|r)/","i"),Mm=new RegExp("^/?(u/|@)","i"),Fm={subreddit:{prefix:"r/",config:{validate:$m("r/",jm),normalize(e){let t=e.url.replace(Tm,"");e.url=`
											$ {
												Om
											}
											/r/$ {
												t
											}
											`}}},profile:{prefix:"u/",config:{validate:$m("u/",Pm),normalize(e){let t=e.url.replace(Tm,"");e.url=`
											$ {
												Om
											}
											/user/$ {
												t
											}
											`}}},mention:{prefix:"@",config:{validate:$m("@",Pm),normalize(e){if(Im.test(e.text))e.url="";else{let t=e.url.replace(Mm,"");e.url=`
											$ {
												Om
											}
											/user/$ {
												t
											}
											`}}}}},zm={subredditFull:{prefix:"/r/",config:Fm.subreddit.config},profileFull:{prefix:"/u/",config:Fm.profile.config}},Nm={...Fm,...zm},Lm=(0,Am.default)().tlds(["aaa","aarp","abarth","abb","abbott","abbvie","abc","able","abogado","abudhabi","ac","academy","accenture","accountant","accountants","aco","actor","ad","adac","ads","adult","ae","aeg","aero","aetna","af","afl","africa","ag","agakhan","agency","ai","aig","airbus","airforce","airtel","akdn","al","alfaromeo","alibaba","alipay","allfinanz","allstate","ally","alsace","alstom","am","amazon","americanexpress","americanfamily","amex","amfam","amica","amsterdam","analytics","android","anquan","anz","ao","aol","apartments","app","apple","aq","aquarelle","ar","arab","aramco","archi","army","arpa","art","arte","as","asda","asia","associates","at","athleta","attorney","au","auction","audi","audible","audio","auspost","author","auto","autos","avianca","aw","aws","ax","axa","az","azure","ba","baby","baidu","banamex","bananarepublic","band","bank","bar","barcelona","barclaycard","barclays","barefoot","bargains","baseball","basketball","bauhaus","bayern","bb","bbc","bbt","bbva","bcg","bcn","bd","be","beats","beauty","beer","bentley","berlin","best","bestbuy","bet","bf","bg","bh","bharti","bi","bible","bid","bike","bing","bingo","bio","biz","bj","black","blackfriday","blockbuster","blog","bloomberg","blue","bm","bms","bmw","bn","bnpparibas","bo","boats","boehringer","bofa","bom","bond","boo","book","booking","bosch","bostik","boston","bot","boutique","box","br","bradesco","bridgestone","broadway","broker","brother","brussels","bs","bt","build","builders","business","buy","buzz","bv","bw","by","bz","bzh","ca","cab","cafe","cal","call","calvinklein","cam","camera","camp","canon","capetown","capital","capitalone","car","caravan","cards","care","career","careers","cars","casa","case","cash","casino","cat","catering","catholic","cba","cbn","cbre","cbs","cc","cd","center","ceo","cern","cf","cfa","cfd","cg","ch","chanel","channel","charity","chase","chat","cheap","chintai","christmas","chrome","church","ci","cipriani","circle","cisco","citadel","citi","citic","city","cityeats","ck","cl","claims","cleaning","click","clinic","clinique","clothing","cloud","club","clubmed","cm","cn","co","coach","codes","coffee","college","cologne","com","comcast","commbank","community","company","compare","computer","comsec","condos","construction","consulting","contact","contractors","cooking","cookingchannel","cool","coop","corsica","country","coupon","coupons","courses","cpa","cr","credit","creditcard","creditunion","cricket","crown","crs","cruise","cruises","cu","cuisinella","cv","cw","cx","cy","cymru","cyou","cz","dabur","dad","dance","data","date","dating","datsun","day","dclk","dds","de","deal","dealer","deals","degree","delivery","dell","deloitte","delta","democrat","dental","dentist","desi","design","dev","dhl","diamonds","diet","digital","direct","directory","discount","discover","dish","diy","dj","dk","dm","dnp","do","docs","doctor","dog","domains","dot","download","drive","dtv","dubai","dunlop","dupont","durban","dvag","dvr","dz","earth","eat","ec","eco","edeka","edu","education","ee","eg","email","emerck","energy","engineer","engineering","enterprises","epson","equipment","er","ericsson","erni","es","esq","estate","et","etisalat","eu","eurovision","eus","events","exchange","expert","exposed","express","extraspace","fage","fail","fairwinds","faith","family","fan","fans","farm","farmers","fashion","fast","fedex","feedback","ferrari","ferrero","fi","fiat","fidelity","fido","film","final","finance","financial","fire","firestone","firmdale","fish","fishing","fit","fitness","fj","fk","flickr","flights","flir","florist","flowers","fly","fm","fo","foo","food","foodnetwork","football","ford","forex","forsale","forum","foundation","fox","fr","free","fresenius","frl","frogans","frontdoor","frontier","ftr","fujitsu","fun","fund","furniture","futbol","fyi","ga","gal","gallery","gallo","gallup","game","games","gap","garden","gay","gb","gbiz","gd","gdn","ge","gea","gent","genting","george","gf","gg","ggee","gh","gi","gift","gifts","gives","giving","gl","glass","gle","global","globo","gm","gmail","gmbh","gmo","gmx","gn","godaddy","gold","goldpoint","golf","goo","goodyear","goog","google","gop","got","gov","gp","gq","gr","grainger","graphics","gratis","green","gripe","grocery","group","gs","gt","gu","guardian","gucci","guge","guide","guitars","guru","gw","gy","hair","hamburg","hangout","haus","hbo","hdfc","hdfcbank","health","healthcare","help","helsinki","here","hermes","hgtv","hiphop","hisamitsu","hitachi","hiv","hk","hkt","hm","hn","hockey","holdings","holiday","homedepot","homegoods","homes","homesense","honda","horse","hospital","host","hosting","hot","hoteles","hotels","hotmail","house","how","hr","hsbc","ht","hu","hughes","hyatt","hyundai","ibm","icbc","ice","icu","id","ie","ieee","ifm","ikano","il","im","imamat","imdb","immo","immobilien","in","inc","industries","infiniti","info","ing","ink","institute","insurance","insure","int","international","intuit","investments","io","ipiranga","iq","ir","irish","is","ismaili","ist","istanbul","it","itau","itv","jaguar","java","jcb","je","jeep","jetzt","jewelry","jio","jll","jm","jmp","jnj","jo","jobs","joburg","jot","joy","jp","jpmorgan","jprs","juegos","juniper","kaufen","kddi","ke","kerryhotels","kerrylogistics","kerryproperties","kfh","kg","kh","ki","kia","kids","kim","kinder","kindle","kitchen","kiwi","km","kn","koeln","komatsu","kosher","kp","kpmg","kpn","kr","krd","kred","kuokgroup","kw","ky","kyoto","kz","la","lacaixa","lamborghini","lamer","lancaster","lancia","land","landrover","lanxess","lasalle","lat","latino","latrobe","law","lawyer","lb","lc","lds","lease","leclerc","lefrak","legal","lego","lexus","lgbt","li","lidl","life","lifeinsurance","lifestyle","lighting","like","lilly","limited","limo","lincoln","linde","link","lipsy","live","living","lk","llc","llp","loan","loans","locker","locus","loft","lol","london","lotte","lotto","love","lpl","lplfinancial","lr","ls","lt","ltd","ltda","lu","lundbeck","luxe","luxury","lv","ly","ma","macys","madrid","maif","maison","makeup","man","management","mango","map","market","marketing","markets","marriott","marshalls","maserati","mattel","mba","mc","mckinsey","md","me","med","media","meet","melbourne","meme","memorial","men","menu","merckmsd","mg","mh","miami","microsoft","mil","mini","mint","mit","mitsubishi","mk","ml","mlb","mls","mm","mma","mn","mo","mobi","mobile","moda","moe","moi","mom","monash","money","monster","mormon","mortgage","moscow","moto","motorcycles","mov","movie","mp","mq","mr","ms","msd","mt","mtn","mtr","mu","museum","music","mutual","mv","mw","mx","my","mz","na","nab","nagoya","name","natura","navy","nba","nc","ne","nec","net","netbank","netflix","network","neustar","new","news","next","nextdirect","nexus","nf","nfl","ng","ngo","nhk","ni","nico","nike","nikon","ninja","nissan","nissay","nl","no","nokia","northwesternmutual","norton","now","nowruz","nowtv","np","nr","nra","nrw","ntt","nu","nyc","nz","obi","observer","office","okinawa","olayan","olayangroup","oldnavy","ollo","om","omega","one","ong","onl","online","ooo","open","oracle","orange","org","organic","origins","osaka","otsuka","ott","ovh","pa","page","panasonic","paris","pars","partners","parts","party","passagens","pay","pccw","pe","pet","pf","pfizer","pg","ph","pharmacy","phd","philips","phone","photo","photography","photos","physio","pics","pictet","pictures","pid","pin","ping","pink","pioneer","pizza","pk","pl","place","play","playstation","plumbing","plus","pm","pn","pnc","pohl","poker","politie","porn","post","pr","pramerica","praxi","press","prime","pro","prod","productions","prof","progressive","promo","properties","property","protection","pru","prudential","ps","pt","pub","pw","pwc","py","qa","qpon","quebec","quest","racing","radio","re","read","realestate","realtor","realty","recipes","red","redstone","redumbrella","rehab","reise","reisen","reit","reliance","ren","rent","rentals","repair","report","republican","rest","restaurant","review","reviews","rexroth","rich","richardli","ricoh","ril","rio","rip","ro","rocher","rocks","rodeo","rogers","room","rs","rsvp","ru","rugby","ruhr","run","rw","rwe","ryukyu","sa","saarland","safe","safety","sakura","sale","salon","samsclub","samsung","sandvik","sandvikcoromant","sanofi","sap","sarl","sas","save","saxo","sb","sbi","sbs","sc","sca","scb","schaeffler","schmidt","scholarships","school","schule","schwarz","science","scot","sd","se","search","seat","secure","security","seek","select","sener","services","ses","seven","sew","sex","sexy","sfr","sg","sh","shangrila","sharp","shaw","shell","shia","shiksha","shoes","shop","shopping","shouji","show","showtime","si","silk","sina","singles","site","sj","sk","ski","skin","sky","skype","sl","sling","sm","smart","smile","sn","sncf","so","soccer","social","softbank","software","sohu","solar","solutions","song","sony","soy","spa","space","sport","spot","sr","srl","ss","st","stada","staples","star","statebank","statefarm","stc","stcgroup","stockholm","storage","store","stream","studio","study","style","su","sucks","supplies","supply","support","surf","surgery","suzuki","sv","swatch","swiss","sx","sy","sydney","systems","sz","tab","taipei","talk","taobao","target","tatamotors","tatar","tattoo","tax","taxi","tc","tci","td","tdk","team","tech","technology","tel","temasek","tennis","teva","tf","tg","th","thd","theater","theatre","tiaa","tickets","tienda","tiffany","tips","tires","tirol","tj","tjmaxx","tjx","tk","tkmaxx","tl","tm","tmall","tn","to","today","tokyo","tools","top","toray","toshiba","total","tours","town","toyota","toys","tr","trade","trading","training","travel","travelchannel","travelers","travelersinsurance","trust","trv","tt","tube","tui","tunes","tushu","tv","tvs","tw","tz","ua","ubank","ubs","ug","uk","unicom","university","uno","uol","ups","us","uy","uz","va","vacations","vana","vanguard","vc","ve","vegas","ventures","verisign","vermögensberater","vermögensberatung","versicherung","vet","vg","vi","viajes","video","vig","viking","villas","vin","vip","virgin","visa","vision","viva","vivo","vlaanderen","vn","vodka","volkswagen","volvo","vote","voting","voto","voyage","vu","vuelos","wales","walmart","walter","wang","wanggou","watch","watches","weather","weatherchannel","webcam","weber","website","wed","wedding","weibo","weir","wf","whoswho","wien","wiki","williamhill","win","windows","wine","winners","wme","wolterskluwer","woodside","work","works","world","wow","ws","wtc","wtf","xbox","xerox","xfinity","xihuan","xin","xxx","xyz","yachts","yahoo","yamaxun","yandex","ye","yodobashi","yoga","yokohama","you","youtube","yt","yun","za","zappos","zara","zero","zip","zm","zone","zuerich","zw","ελ","ευ","бг","бел","дети","ею","католик","ком","мкд","мон","москва","онлайн","орг","рус","рф","сайт","срб","укр","қаз","հայ","ישראל","קום","ابوظبي","اتصالات","ارامكو","الاردن","البحرين","الجزائر","السعودية","العليان","المغرب","امارات","ایران","بارت","بازار","بيتك","بھارت","تونس","سودان","سورية","شبكة","عراق","عرب","عمان","فلسطين","قطر","كاثوليك","كوم","مصر","مليسيا","موريتانيا","موقع","همراه","پاکستان","ڀارت","कॉम","नेट","भारत","भारतम्","भारोत","संगठन","বাংলা","ভারত","ভাৰত","ਭਾਰਤ","ભારત","ଭାରତ","இந்தியா","இலங்கை","சிங்கப்பூர்","భారత్","ಭಾರತ","ഭാരതം","ලංකා","คอม","ไทย","ລາວ","გე","みんな","アマゾン","クラウド","グーグル","コム","ストア","セール","ファッション","ポイント","世界","中信","中国","中國","中文网","亚马逊","企业","佛山","信息","健康","八卦","公司","公益","台湾","台灣","商城","商店","商标","嘉里","嘉里大酒店","在线","大拿","天主教","娱乐","家電","广东","微博","慈善","我爱你","手机","招聘","政务","政府","新加坡","新闻","时尚","書籍","机构","淡马锡","游戏","澳門","点看","移动","组织机构","网址","网店","网站","网络","联通","诺基亚","谷歌","购物","通販","集团","電訊盈科","飞利浦","食品","餐厅","香格里拉","香港","닷넷","닷컴","삼성","한국"]).set({fuzzyIP:!0}).add(Nm.subreddit.prefix,Nm.subreddit.config).add(Nm.subredditFull.prefix,Nm.subreddit.config).add(Nm.profile.prefix,Nm.profile.config).add(Nm.profileFull.prefix,Nm.profile.config).add(Nm.mention.prefix,Nm.mention.config),Bm=e=>(Lm.match(e)||[]).filter(e=>!(e=>Object.values(Rm).includes(e.substring(1)))(e.text));var qm={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"RedditorsAvatars"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"ids"}},type:{kind:"NonNullType",type:{kind:"ListType",type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}},defaultValue:void 0,directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"redditorsInfoByIds"},arguments:[{kind:"Argument",name:{kind:"Name",value:"ids"},value:{kind:"Variable",name:{kind:"Name",value:"ids"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"id"},arguments:[],directives:[],selectionSet:void 0},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Redditor"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"icon"},arguments:[{kind:"Argument",name:{kind:"Name",value:"maxWidth"},value:{kind:"IntValue",value:"64"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"url"},arguments:[],directives:[],selectionSet:void 0}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"snoovatarIcon"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"url"},arguments:[],directives:[],selectionSet:void 0}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"profile"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"isNsfw"},arguments:[],directives:[],selectionSet:void 0}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"isBlocked"},arguments:[],directives:[],selectionSet:void 0}]}}]}}]}}],loc:{start:0,end:259}};function Um(e){return e.startsWith("@t2_")}var Vm=new Map,Qm=class{constructor(e){this.host=e,this.gqlClient=new sm(e)}async fetchRedditAvatar(e){let[t]=e.replace("@","").split(":"),r=await this.gqlClient.getInstance(),n=await Hm(r,t);Vm.set(e,n),this.host.requestUpdate()}getAvatar(e){if(Vm.has(e))return Vm.get(e);if(!Um(e)){let t=Wm(e);return Vm.set(e,t),t}this.fetchRedditAvatar(e)}},Hm=(()=>{let e=new Map,t=null,r=Promise.resolve();return async(n,o)=>(e.has(o)||(e.set(o,new gn),t&&clearTimeout(t),t=setTimeout(async()=>{t=null,r=Promise.resolve(r).finally(()=>(async function(t){var r,n;0!==e.size&&(null==(n=null==(r=(await t.query({query:qm,variables:{ids:Array.from(e.keys())}})).data)?void 0:r.redditorsInfoByIds)||n.forEach(t=>{var r,n;let o,i=t&&e.get(t.id);i&&(o="profile"in t&&(null==(r=t.profile)?void 0:r.isNsfw)?{src:"",isSnoovatar:!1,isNSFW:!0,isBlocked:!1}:"icon"in t&&t.icon?{src:t.icon.url,isSnoovatar:Boolean("snoovatarIcon"in t&&t.snoovatarIcon)}:Wm(t.id),i.resolve({...o,isNSFW:Boolean("profile"in t&&(null==(n=t.profile)?void 0:n.isNsfw)),isBlocked:Boolean("isBlocked"in t&&t.isBlocked)}),e.delete(t.id))}))})(n))},25)),e.get(o).promise)})();function Wm(e){return{src:`
											$ {
												Cm
											}
											/avatar_default_${Gm(e)}.png`,isSnoovatar:!1,isNSFW:!1,isBlocked:!1}}function Gm(e){let t=0;for(let r of e)t+=r.charCodeAt(0);return t%8}var Ym=class extends CustomEvent{constructor(e){super("send-message",{detail:e,bubbles:!0,composed:!0})}},Jm=class extends CustomEvent{constructor(e){super("send-emoji",{detail:e,bubbles:!1,composed:!1})}},Km=class extends CustomEvent{constructor(e){super("send-gif",{detail:e,bubbles:!1,composed:!1})}},Xm=class extends CustomEvent{constructor(e){super("show-dropdown",{detail:e,bubbles:!1,composed:!1})}},Zm=class extends CustomEvent{constructor(){super("hide-dropdown",{bubbles:!1,composed:!1})}};function eg(e){return Jt`<span class="user">${e}</span > `}function tg(e){return Jt`
											'${e}'
											`}function rg(e,t,r=t.getSender()){var n;let o=t.getRoomId(),i=Es("Someone",{desc:"Unknown user name"});if(!o)return i;let a=r?null==(n=e.getRoom(o))?void 0:n.getMember(r):null;return(null==a?void 0:a.rawDisplayName)||r||i}function ng(e,t){var r;return(null==(r=t.sender)?void 0:r.name)||rg(e,t)}function og(e,t){let r=t.getSender();return e.getUserId()===r}function ig(e,t){switch(t.getType()){case zr.RoomCreate:return function(e,t){let{is_direct:r}=t.getUnsigned(),{creator:n}=t.getContent(),o=rg(e,t,n);return r?og(e,t)?Es(xs`
											You created the chat`,{desc:"system message: room create"}):Es(Jt`
											$ {
												eg(o)
											}
											created the chat`,{desc:"system message: room create"}):null}(e,t);case zr.RoomName:return function(e,t){let{name:r}=t.getContent();return t.getPrevContent().name?og(e,t)?Es(Jt`
											You renamed the group chat to $ {
												tg(r)
											}
											`,{desc:"system message: room rename"}):Es(Jt`
											$ {
												eg(ng(e, t))
											}
											renamed the group chat to
											$ {
												tg(r)
											}
											`,{desc:"system message: room rename"}):og(e,t)?Es(Jt`
											You created the $ {
												tg(r)
											}
											group chat`,{desc:"system message: room create"}):Es(Jt`
											$ {
												eg(ng(e, t))
											}
											created the
											$ {
												tg(r)
											}
											group chat`,{desc:"system message: room create"})}(e,t);case zr.RoomMember:return function(e,t){var r;let n=ng(e,t),o=t.getContent(),i=o.displayname||(null==(r=t.target)?void 0:r.name)||rg(e,t,t.getStateKey()),a=t.getPrevContent();switch(o.membership){case"invite":return og(e,t)?Es(Jt`
											You invited $ {
												eg(i)
											}
											`,{desc:"status message: invitation"}):function(e,t){let r=t.getStateKey();return e.getUserId()===r}(e,t)?Es(Jt`
											$ {
												eg(n)
											}
											invited you`,{desc:"status message: invitation"}):Es(Jt`
											$ {
												eg(n)
											}
											invited $ {
												eg(i)
											}
											`,{desc:"status message: invitation"});case"join":{if(a&&"join"===a.membership)return null;let r=e.getRoom(t.getRoomId()||"");if((null==r?void 0:r.getCreator())===t.getSender())return null;if(og(e,t)){let{is_direct:e}=t.getPrevContent();return Es(e?xs`
											You joined the chat`:r?Jt`
											You joined the $ {
												tg(r.name)
											}
											group chat`:xs`
											You joined the group chat`,{desc:"status message: user joined"})}return Es(Jt`
											$ {
												eg(i)
											}
											joined the chat`,{desc:"status message: user joined"})}case"leave":return t.getSender()===t.getStateKey()?"invite"===a.membership?null:Es(Jt`
											$ {
												eg(i)
											}
											left the chat`,{desc:"status message: user left the room"}):"join"===a.membership?Es(Jt`
											$ {
												eg(n)
											}
											removed $ {
												eg(i)
											}
											`,{desc:"status message: user removal"}):null}return null}(e,t);default:return null}}var ag={"3xs":"w-[1rem] h-[1rem]","2xs":"w-[1.25rem] h-[1.25rem]",xs:"w-[1.5rem] h-[1.5rem]",sm:"w-[2rem] h-[2rem]",md:"w-[2.5rem] h-[2.5rem]",lg:"w-[3rem] h-[3rem]",xl:"w-[2.87rem] h-[2.87rem]","2xl":"w-[3.25rem] h-[3.25rem]","3xl":"w-[4.5rem] h-[4.5rem]"},sg={"3xs":"border","2xs":"border",xs:"border",sm:"border",md:"border-md",lg:"border-md",xl:"border-md","2xl":"border-lg","3xl":"border-lg"},lg={"3xs":"w-[1rem] h-[1rem]","2xs":"w-[1.25rem] h-[1.25rem]",xs:"w-[1.5rem] h-[1.5rem]",sm:"w-[2rem] h-[2rem]",md:"w-[2.5rem] h-[2.5rem]",lg:"w-[3rem] h-[3rem]",xl:"w-[3.5rem] h-[3.5rem]","2xl":"w-[4rem] h-[4rem]","3xl":"w-[5.5rem] h-[5.5rem]"},cg={"3xs":"-right-[0.0625rem]","2xs":"-right-[0.0625rem]",xs:"-right-[0.0625rem]",sm:"-right-[0.0825rem]",md:"-right-[0.0825rem]",lg:"-right-[0.125rem]",xl:"-right-[0.125rem]","2xl":"-right-[.65rem]","3xl":"-right-[.75rem]"},ug={"3xs":"w-[.25rem] h-[.25rem] border","2xs":"w-[.25rem] h-[.25rem] border",xs:"w-[.25rem] h-[.25rem] border",sm:"w-[.375rem] h-[.375rem] border-2",md:"w-[.375rem] h-[.375rem] border-2",lg:"w-[.625rem] h-[.625rem] border-2",xl:"w-[.625rem] h-[.625rem] border-2","2xl":"w-[1rem] h-[1rem] border-2","3xl":"w-[1.25rem] h-[1.25rem] border-2"},dg=({attributes:e,children:t,size:r="sm",snoovatarSrc:n,status:o=null,ringColorClassName:i,avatarBgClassName:a,ringLayer:s,asIcon:l})=>{let{html:c,ifDefined:u}=Jr(),d=n?lg:ag;return c`
											$ {
												s && !l ? s : ""
											}
											$ {
												l ? c`
          <span
            id="${u(null==e?void 0:e.id)}"
            slot="${u(null==e?void 0:e.slot)}"
            class="${ag[r]} inline-block rounded-full overflow-hidden"
            >${t}</span
          >
        ` : c`<span
          id="${u(null==e?void 0:e.id)}"
          slot="${u(null==e?void 0:e.slot)}"
          class="${s?"absolute":"relative"} ${i?`${i} border-solid ${sg[r]}`:""} inline-flex fp-avatar-container box-border rounded-full ${ag[r]} isolate">
          <span
            style="${a||!n?"":"background: var(--color-avatar-gradient)"}"
            class="rounded-full box-border border-solid ${d[r]} border-neutral-background ${sg[r]} relative inline-flex h-100 w-100 justify-center ${a&&a}">
            ${n?(({size:e,snoovatarSrc:t,attributes:r})=>{let{attrs:n,html:o}=Jr();return o` < span
												$ {
													n(r)
												}
												class = "absolute z-[2] bottom-0 inline-flex shrink-0 justify-center ${lg[e]}" >
													<
													svg
												width = "100%"
												height = "100%"
												viewBox = "0 0 121 122"
												xmlns = "http://www.w3.org/2000/svg"
												class = "overflow-hidden" >
													<
													defs >
													<
													clipPath id = "mask" >
													<
													path
												d = "M0 0V79L28.1628 105.5C35.013 115.465 46.4934 122 59.5 122C72.5066 122 83.987 115.465 90.8372 105.5L120.5 79V0H0Z" / >
													<
													/clipPath> <
													/defs> <
													image
												href = "${t}"
												alt = "User Avatar"
												clip - path = "url(#mask)"
												height = "100%"
												width = "100%" / >
													<
													/svg> <
													/span>`})({snoovatarSrc:n,size:r,status:o,ringColorClassName:i,avatarBgClassName:a}):c`<span
												class = "rounded-full overflow-hidden border border-solid border-neutral-background inline-flex" >
													$ {
														t
													} < /span >
													`}
          </span>
          ${o?c`<span
                class="${"online"===o?"bg-online":""} flex absolute z-[3] 
        bottom-0 rounded-full border-solid border-neutral-background bg-neutral-background ${cg[r]} ${sg[r]} ${ug[r]}">
                ${"online"===o?"":o}
              </span>`:""}
        </span>`
											}
											`};function hg(e,t="sm"){if(null!=e&&e.isNSFW)return dg({children:Jt` < div
											class = "flex justify-center items-center bg-black rounded-full w-full h-full" >
												<
												span class = "text-global-white text-[8px]" >
												$ {
													Es("NSFW", {
														desc: "This profile contains NSFW content"
													})
												} <
												/span> <
												/div>`,size:t,asIcon:!0});if(null!=e&&e.isSnoovatar)return dg({snoovatarSrc:e.src,size:t});let r=e?Jt`<img
											class = "w-100 h-100 pointer-events-none"
											src = "${e.src}"
											alt = "${Es("
											User Avatar ",{desc:"
											User Avatar alt text "})}" /
												> `:Jt` < div > < /div>`;return dg({children:r,size:t,asIcon:!0})}var pg=_t`.info-message{font:var(--font-12);text-align:center;color:var(--color-tone-3);padding:var(--spacer-2xs) var(--spacer-md)}.info-message .user{font-weight:500}.room-message{display:grid;grid-template-columns:min-content 1fr;grid-column-gap:var(--spacer-sm);padding:var(--spacer-xs) var(--spacer-sm);font:var(--font-14);position:relative}.room-message.not-sent{color:var(--color-tone-3)}.room-message.not-sent faceplate-date{color:var(--color-tone-3)}.room-message:hover{background-color:var(--color-tone-6)}.room-message-body{display:flex;flex-direction:column;align-items:start}.room-message-text{white-space:pre-wrap}.room-message-text a{text-decoration:none;color:var(--color-a-default)}.room-message-text a:visited{color:var(--color-a-visited)}.room-message-text a:hover{text-decoration:underline}.room-message-text.deleted{color:var(--color-tone-3)}.room-message-image{--max-image-size:256px;max-width:90%;max-height:var(--max-image-size);margin:var(--spacer-xs) var(--spacer-xs) 0 0;object-fit:contain;border-radius:var(--rem12)}.room-message-image.error{border:1px dotted var(--color-neutral-border);min-height:var(--size-xl);max-width:var(--max-image-size)}@media(min-width:768px){.room-message-image{--max-image-size:300px}}.user-avatar{grid-row:1 /
											span 2;
											margin - top: var (--size - xs);
											height: var (--size - xl)
										}.user - avatar img {
											width: 100 % ;height: 100 % ;pointer - events: none
										}.user - name {
											font - weight: bold
										}
										faceplate - date {
											font: var (--font - 12);color: var (--color - tone - 2)
										}.error {
											font: var (--font - 14);margin - top: var (--spacer - md)
										}.error icon - info {
											color: var (--color - alert - negative);height: var (--rem15);width: var (--rem14)
										}.error button {
											background - color: transparent;
											border: 0;
											color: var (--color - alert - negative);
											cursor: pointer;
											font: var (--font - 14);
											padding: 0
										}
										`,fg=class extends yr{constructor(){super(...arguments),this.isImagePreviewVisible=!1,this.hovered=!1,this.eventBodyText=[],this.matrix=new bn(this),this.avatars=new Qm(this),this.timeFormatOptions={hour:"numeric",minute:"numeric"},this.handleMouseEnter=()=>{this.hovered=!0},this.handleMouseLeave=()=>{this.hovered=!1},this.handleEventStatusChange=async(e,t)=>{this.requestUpdate(),t===Nr.NOT_SENT&&(await this.updateComplete,this.dispatchEvent(new CustomEvent("sendError")))},this.handleEventChange=()=>{this.requestUpdate()}}static get styles(){return[oo,pg]}get senderName(){return this.event?ng(this.matrix.client,this.event):""}connectedCallback(){super.connectedCallback(),this.event&&(this.event.getContent().body&&(this.eventBodyText=function(e){let t=Bm(e);if(0===t.length)return Jt`
										$ {
											e
										}
										`;let r=[],n=0;return t.forEach(({index:t,lastIndex:o,text:i,url:a,schema:s})=>{let l="mailto:"===s?"_self":"_blank";r.push(Jt`
										$ {
											e.substring(n, t)
										}
										`),r.push(Jt` < a href = "${a}"
										target = "${l}"
										rel = "noopener noreferrer" > $ {
												i
											} < /a>`),n=o}),r.push(Jt`${e.substring(n,e.length)}`),r}(this.event.getContent().body)),this.event.on(Br.Status,this.handleEventStatusChange),this.event.on(Br.Replaced,this.handleEventChange),this.event.on(Br.BeforeRedaction,this.handleEventChange)),this.addEventListener("mouseenter",this.handleMouseEnter),this.addEventListener("mouseleave",this.handleMouseLeave)}disconnectedCallback(){super.disconnectedCallback(),this.event&&(this.event.off(Br.Status,this.handleEventStatusChange),this.event.off(Br.Replaced,this.handleEventChange),this.event.off(Br.BeforeRedaction,this.handleEventChange)),this.removeEventListener("mouseenter",this.handleMouseEnter),this.removeEventListener("mouseleave",this.handleMouseLeave)}resendEvent(){if(!this.event)return;let e=this.event.getId(),t=this.event.getType(),r=this.event.getContent(),n=this.matrix.client.getRoom(this.event.getRoomId()||"");!e||!n||t!==zr.RoomMessage||(n.removeEvent(e),r.msgtype===qr.Text?this.dispatchEvent(new Ym({body:r.body})):r.msgtype===qr.Image&&ho(r)&&this.dispatchEvent(new Ym({attachments:[r.file]})))}renderReactions(){return Jt` <
											rs - timeline - event - reactions.reactions = "${this.reactions}" > < /rs-timeline-event-reactions>
										`}renderAvatar(){if(!this.event)return null;let e=this.event.getSender()||"",t=this.avatars.getAvatar(e);return Um(e)?Jt` < a
										href = "${`${Om}/user/${this.senderName}/`}"
										target = "_blank"
										class = "user-avatar" >
											$ {
												hg(t)
											} < /a >
											`:Jt` < div class = "user-avatar" > $ {
												hg(t)
											} < /div>`}renderHeadline(){if(!this.event)return null;let e=this.event.getDate();return Jt`<div> <
											span class = "user-name" > $ {
												this.senderName
											} < /span>${e?Jt`<faceplate-date
										ts = "${e.toISOString()}"
											.formatOptions = "${this.timeFormatOptions}" >
											< /faceplate-date>`:""} <
											/div>`}renderErrorMessage(){return Jt` <
											div class = "error" >
											<
											icon - info > < /icon-info> ${Es("Message failed to send.",{desc:"Room Timeline: Message sent error text"})} <
											button @click = "${this.resendEvent}" >
											$ {
												Es("Retry", {
													desc: "Room Timeline: Message sent error retry button text"
												})
											} <
											/button> <
											/div>
										`}render(){var e;if(!this.event)return null;let t=this.event.getType(),r=this.event.getContent(),n=this.event.status===Nr.NOT_SENT;if(t===zr.RoomMessage&&this.event.isRedacted()){let e=Es("This message was deleted",{desc:"Room Timeline: Deleted message text"});return Jt` <
										div class = "room-message" >
											$ {
												this.renderAvatar()
											}
										$ {
											this.renderHeadline()
										} <
										div class = "room-message-text deleted" > $ {
												e
											} < /div> <
											/div>
										`}if(t===zr.RoomMessage&&r.msgtype===qr.Text)return Jt` <
										div
										class = $ {
												wn({
													"room-message": !0,
													"not-sent": n
												})
											} >
											$ {
												this.renderAvatar()
											}
										$ {
											this.renderHeadline()
										} <
										div class = "room-message-body" >
											<
											div class = "room-message-text" > $ {
												this.eventBodyText
											} < /div>
										$ {
											n ? this.renderErrorMessage() : null
										}
										$ {
											this.renderReactions()
										} <
										/div> <
										rs - timeline - event - menu
											.event = "${this.event}"
											.usedReactionEventMap = $ {
												this.usedReactionEventMap
											}
											.mustBeVisible = $ {
												this.hovered
											} >
											< /rs-timeline-event-menu> <
											/div>
										`;if(t===zr.RoomMessage&&r.msgtype===qr.Image){let t;if(!(t=ho(r)?URL.createObjectURL(r.file):this.matrix.client.mxcUrlToHttp(r.url)))return null;let o=r.body||Es("Image",{desc:"Image default description"});return Jt` <
										div
										class = $ {
												wn({
													"room-message": !0,
													"not-sent": n
												})
											} >
											$ {
												this.renderAvatar()
											}
										$ {
											this.renderHeadline()
										} <
										div class = "room-message-body" >
											<
											img
										class = "room-message-image"
										src = "${t}"
										height = "${nn(null==(e=r.info)?void 0:e.h)}"
										alt = "${o}"
										onerror = "this.classList.add('error')"
										tabindex = "0"
										@click = "${()=>{this.isImagePreviewVisible=!0}}"
										@keydown = "${e=>{"
										Space "===e.code&&(this.isImagePreviewVisible=!0)}}" /
											>
											$ {
												n ? this.renderErrorMessage() : null
											}
										$ {
											this.renderReactions()
										} <
										/div> <
										rs - timeline - event - menu
											.event = "${this.event}"
											.usedReactionEventMap = $ {
												this.usedReactionEventMap
											}
											.mustBeVisible = $ {
												this.hovered
											} >
											< /rs-timeline-event-menu>
										$ {
											this.isImagePreviewVisible ? Jt`<rs-image-preview
                src="${t}"
                name="${o}"
                @close="${()=>{this.isImagePreviewVisible=!1}}"
              ></rs-image-preview>` : null
										} <
										/div>
										`}let o=ig(this.matrix.client,this.event);return o?Jt` < div class = "info-message" > $ {
											o
										} < /div>`:null}};v([xr({type:Object})],fg.prototype,"event",2),v([xr({type:Object})],fg.prototype,"usedReactionEventMap",2),v([xr({type:Array})],fg.prototype,"reactions",2),v([kr()],fg.prototype,"isImagePreviewVisible",2),v([kr()],fg.prototype,"hovered",2),v([kr()],fg.prototype,"eventBodyText",2),fg=v([_r("rs-timeline-event")],fg);var vg=_t`.scroll{--scrollbar-color-background-default:var(--color-tone-4);--scrollbar-color-background-hover:var(--color-tone-3);--scrollbar-size:var(--rem14)}.scroll::-webkit-scrollbar{width:var(--scrollbar-size)}.scroll::-webkit-scrollbar-track{border:0}.scroll::-webkit-scrollbar-thumb{min-height:50px;border-radius:calc(var(--scrollbar-size) /
										2);
								background - clip: padding - box;
								border: 3 px solid rgba(0, 0, 0, 0);
								background - color: var (--scrollbar - color - background -
									default)
							}.scroll::-webkit - scrollbar - thumb: hover {
								background - color: var (--scrollbar - color - background - hover)
							}: host {
								--scrollbar - color - background -
									default: var (--color - tone - 4);
								--scrollbar - color - background - hover: var (--color - tone - 3);
								--scrollbar - size: var (--rem14);
								box - sizing: border - box;
								display: flex;
								flex - direction: column
							}: host::-webkit - scrollbar {
								width: var (--scrollbar - size)
							}: host::-webkit - scrollbar - track {
								border: 0
							}: host::-webkit - scrollbar - thumb {
								min - height: 50 px;
								border - radius: calc(var (--scrollbar - size) / 2);
								background - clip: padding - box;
								border: 3 px solid rgba(0, 0, 0, 0);
								background - color: var (--scrollbar - color - background -
									default)
							}: host::-webkit - scrollbar - thumb: hover {
								background - color: var (--scrollbar - color - background - hover)
							}.date {
								padding: var (--spacer - xs) var (--spacer - md);text - align: center;font: var (--font - 12);color: var (--color - tone - 2)
							}.first - event {
								margin - top: auto
							}
							`,mg=class extends(ws(yr)){constructor(){super(...arguments),this.roomController=new _n(this),this.loadMoreQuery=new _s(this,e=>this.loadMore(e)),this.handleScroll=bs(()=>{this.scrollTop<100&&!this.loadMoreQuery.isLoading&&this.loadMoreQuery.execute(25),this.sendReadReceiptAfterIdleTime()},200),this.handleTimelineUpdate=bs(()=>{this.requestUpdate()},50),this.sendReadReceiptAfterIdleTime=()=>{this.idleTimeout&&clearTimeout(this.idleTimeout),this.idleTimeout=window.setTimeout(()=>{this.sendReadReceipt()},300)}}static get styles(){return[oo,vg]}async initTimeline(){let e=this.roomController.getRoom();this.timelineWindow=new Hr(e.client,e.getUnfilteredTimelineSet()),this.loadMoreQuery.isLoading&&this.loadMoreQuery.cancel(),await this.timelineWindow.load(),await this.loadMoreEventsIfRequired(e.roomId),this.sendReadReceiptAfterIdleTime()}async loadMoreEventsIfRequired(e){var t;this.room===e&&this.scrollHeight==this.clientHeight&&(null==(t=this.timelineWindow)?void 0:t.canPaginate(Fr.Backward))&&(await this.loadMoreQuery.execute(25),await this.loadMoreEventsIfRequired(e))}async loadMore(e){var t;if(null==(t=this.timelineWindow)||!t.canPaginate(Fr.Backward))return;let r=this.room,n=this.scrollHeight-this.scrollTop;await this.timelineWindow.paginate(Fr.Backward,e),r===this.room&&(this.requestUpdate(),await this.updateComplete,this.scrollTop=this.scrollHeight-n)}getLastMessageInView(){if(this.timelineNodes)for(let e=this.timelineNodes.length-1;e>=0;--e)if(this.isEventInView(this.timelineNodes[e]))return this.timelineNodes[e]}isEventInView(e){let t=this.getBoundingClientRect(),r=e.getBoundingClientRect();return!(!t||!r)&&(r.bottom>=t.top&&r.top>=t.top&&r.bottom<=t.bottom&&r.top<=t.bottom)}sendReadReceipt(){var e,t,r,n;let o=this.roomController.getRoom(),i=o.getLiveTimeline().getEvents(),a=i.at(-1),s=null==(t=null==(e=o.getAccountData(zr.FullyRead))?void 0:e.getContent())?void 0:t.event_id;if(s===(null==a?void 0:a.getId()))return;if(s){let e=null==(r=this.shadowRoot)?void 0:r.querySelector(` [data - id = "${s}"] `);if(!e||!this.isEventInView(e))return}let l=this.getLastMessageInView();if(l&&l.dataset.id!==s){let e=null==(n=i.find(e=>e.getId()===l.dataset.id))?void 0:n.getId();e&&o.client.setRoomReadMarkers(o.roomId,e)}}connectedCallback(){super.connectedCallback(),this.addEventListener("scroll",this.handleScroll,!1),this.roomController.on(Vr.Timeline,this.handleTimelineUpdate),this.roomController.on(Vr.LocalEchoUpdated,this.handleTimelineUpdate)}async updated(e){if(super.updated(e),e.has("room")){if(this.room===e.get("room"))return;await this.initTimeline(),this.resetStickToBottomState()}}getEvents(){var e,t,r;let n=this.roomController.getRoom().getLiveTimeline(),o=n.getEvents(),i=n.getTimelineSet().relations,a=[];for(let s of o){let n=s.getId(),o=n?null==(e=null==i?void 0:i.getChildEventsForEvent(n,Gr.Annotation,zr.Reaction))?void 0:e.getRelations():void 0,l={};for(let e of o||[]){if((null==(t=e.sender)?void 0:t.userId)!==this.roomController.getRoom().myUserId)continue;let n=(null==(r=e.getRelation())?void 0:r.key)||"",o=e.getId();o&&(l[n]=o)}a.push({event:s,reactions:o,usedReactionEventMap:l})}return a}render(){if(!this.room)return null;let e=this.getEvents();return Jt` <
							div class = "min-h-[10rem]" > < /div>
							$ {
								ci(e, ({
									event: e
								}) => e.getId(), ({
									event: t,
									reactions: r,
									usedReactionEventMap: n
								}, o) => {
									var i;
									let a = 0 === o,
										s = a ? null : null == (i = e[o - 1]) ? void 0 : i.event,
										l = t.getDate(),
										c = Boolean(l && s && !ti(l).isSame(s.getDate(), "day"));
									return Jt`
            ${a||c?Jt`<div class="date ${a?"first-event":""}">
                  ${function(e,t={showTime:!0}){let r=ti(e),n=ti(new Date);return r.isSame(n,"day")?t.showTime?r.format("h:mm A"):Es("Today",{desc:"last message activity: today"}):r.isYesterday()?Es("Yesterday",{desc:"last message activity: yesterday"}):r.get("year")===n.get("year")?r.format("MMM D"):r.format("MMM D, YYYY")}(l,{showTime:!1})}
                </div>`:""}
            <rs-timeline-event
              data-id="${nn(t.getId())}"
              .event="${t}"
              .reactions="${r}"
              .usedReactionEventMap="${n}"
              @sendError="${()=>{this.ensureScrollState()}}"
            >
            </rs-timeline-event>
          `
								})
							}
							`}};v([xr({type:String})],mg.prototype,"room",2),v([function(e){return Er({descriptor:t=>({get(){var t,r;return null!==(r=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelectorAll(e))&&void 0!==r?r:[]},enumerable:!0,configurable:!0})})}("rs-timeline-event")],mg.prototype,"timelineNodes",2),mg=v([_r("rs-timeline")],mg);Zn("icon-camera",Kt`
							$ {
								Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_630_42)"><path d="M10 14a4 4 0 110-8 4 4 0 010 8zm0-6.75a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zM17.368 18H2.618a2.63 2.63 0 01-2.625-2.625V5.656a2.629 2.629 0 012.625-2.625h2.389l1.216-1.577A1.166 1.166 0 017.146 1h5.739a1.155 1.155 0 01.907.446l1.222 1.585h2.355a2.627 2.627 0 012.624 2.625v9.718A2.63 2.63 0 0117.368 18zM2.618 4.281a1.377 1.377 0 00-1.375 1.375v9.719a1.377 1.377 0 001.375 1.375h14.75a1.377 1.377 0 001.375-1.375V5.657a1.375 1.375 0 00-1.374-1.375h-2.97l-1.6-2.073-5.653.041-1.524 2.031H2.618z"/></g><defs><clipPath id="clip0_630_42"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')
							}
							`,Kt`
							$ {
								Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_630_41)"><path d="M17.376 3.032h-2.355L13.8 1.446A1.155 1.155 0 0012.892 1h-5.74a1.169 1.169 0 00-.923.454L5.014 3.031H2.625A2.629 2.629 0 000 5.656v9.719A2.63 2.63 0 002.625 18h14.75A2.63 2.63 0 0020 15.375V5.657a2.627 2.627 0 00-2.624-2.625zm-7.369 10.96a4 4 0 110-8 4 4 0 010 8z"/></g><defs><clipPath id="clip0_630_41"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')
							}
							`),Zn("icon-send",Kt`
							$ {
								Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M1.482 19.575a1.128 1.128 0 01-1.034-1.563L3.82 10 .448 1.988A1.125 1.125 0 011.988.545l16.9 8.449a1.125 1.125 0 010 2.012l-16.9 8.449a1.13 1.13 0 01-.506.12zm3.51-9.137l-3.261 7.748L18.1 10 1.73 1.814l3.264 7.749a1.13 1.13 0 010 .875h-.001z"/></svg>')
							}
							`,Kt`
							$ {
								Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M18.885 8.994L1.988.545a1.125 1.125 0 00-1.54 1.443L3.82 10 .448 18.012a1.128 1.128 0 001.034 1.563c.176 0 .349-.041.506-.12l16.9-8.449a1.125 1.125 0 000-2.012h-.003z"/></svg>')
							}
							`);var gg,yg,bg="function"==typeof Map?new Map:(gg=[],yg=[],{has:function(e){return gg.indexOf(e)>-1},get:function(e){return yg[gg.indexOf(e)]},set:function(e,t){-1===gg.indexOf(e)&&(gg.push(e),yg.push(t))},delete:function(e){var t=gg.indexOf(e);t>-1&&(gg.splice(t,1),yg.splice(t,1))}}),_g=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch{_g=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function wg(e){var t=bg.get(e);t&&t.destroy()}function xg(e){var t=bg.get(e);t&&t.update()}var kg=null;typeof window>"u"||"function"!=typeof window.getComputedStyle?((kg=function(e){return e}).destroy=function(e){return e},kg.update=function(e){return e}):((kg=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return function(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!bg.has(e)){var t,r=null,n=null,o=null,i=function(){e.clientWidth!==n&&c()},a=function(t){window.removeEventListener("resize",i,!1),e.removeEventListener("input",c,!1),e.removeEventListener("keyup",c,!1),e.removeEventListener("autosize:destroy",a,!1),e.removeEventListener("autosize:update",c,!1),Object.keys(t).forEach((function(r){e.style[r]=t[r]})),bg.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",a,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",c,!1),window.addEventListener("resize",i,!1),e.addEventListener("input",c,!1),e.addEventListener("autosize:update",c,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",bg.set(e,{destroy:a,update:c}),"vertical"===(t=window.getComputedStyle(e,null)).resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),r="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(r)&&(r=0),c()}function s(t){var r=e.style.width;e.style.width="0px",e.style.width=r,e.style.overflowY=t}function l(){if(0!==e.scrollHeight){var t=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(e),o=document.documentElement&&document.documentElement.scrollTop;e.style.height="",e.style.height=e.scrollHeight+r+"px",n=e.clientWidth,t.forEach((function(e){e.node.scrollTop=e.scrollTop})),o&&(document.documentElement.scrollTop=o)}}function c(){l();var t=Math.round(parseFloat(e.style.height)),r=window.getComputedStyle(e,null),n="content-box"===r.boxSizing?Math.round(parseFloat(r.height)):e.offsetHeight;if(n<t?"hidden"===r.overflowY&&(s("scroll"),l(),n="content-box"===r.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==r.overflowY&&(s("hidden"),l(),n="content-box"===r.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),o!==n){o=n;var i=_g("autosize:resized");try{e.dispatchEvent(i)}catch{}}}}(e)})),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],wg),e},kg.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],xg),e});var Eg=kg,Sg=class extends HTMLTextAreaElement{constructor(){super(),Eg(this)}autosize(){Eg.update(this)}};customElements.define("textarea-auto-size",Sg,{extends:"textarea"});var Og=_t`: host {
								--preview - size: 80 px;
								--preview - radius: 10 px
							}.preview {
								width: var (--preview - size);height: var (--preview - size);position: relative;border - radius: var (--preview - radius);overflow: hidden
							}.preview > img {
								width: 100 % ;height: 100 % ;object - fit: contain
							}.button - delete {
								--icon - size: 10 px;
								position: absolute;
								right: var (--spacer - 2 xs);
								top: var (--spacer - 2 xs);
								background - color: var (--color - tone - 5);
								border: 0;
								border - radius: 50 % ;
								padding: 0;
								width: var (--size - md);
								height: var (--size - md);
								cursor: pointer;
								line - height: var (--icon - size)
							}.button - delete: hover {
								background - color: var (--color - tone - 4)
							}.button - delete icon - close {
								width: var (--icon - size);height: var (--icon - size);line - height: var (--icon - size)
							}.placeholder {
								background - color: transparent;
								border: 1 px dotted
								var (--color - tone - 2);
								border - radius: var (--preview - radius);
								fill: var (--color - tone - 2);
								width: var (--preview - size);
								height: var (--preview - size)
							}
							`,Cg=class extends yr{constructor(){super(...arguments),this.attachments=[],this.handleImageSelect=e=>{let t=e.target,r=Array.from(t.files||[]),n=r.some(e=>!co(e.type)),o=r.filter(e=>co(e.type));n&&this.dispatchEvent(new Ms({level:Ds.error,message:Es("Oops! Chat only supports files in JPEG, PNG and GIF format",{desc:"Message composer: invalid image format error"})})),o.length>0&&(this.attachments=[...this.attachments,...o]),this.fileInput.value="",this.dispatchChange()},this.attachFiles=e=>{let t=Array.from(e).filter(e=>co(e.type));t.length>0&&(this.attachments=[...this.attachments,...t]),this.dispatchChange()},this.openImageSelector=()=>{this.fileInput.click()}}static get styles(){return[oo,Og]}dispatchChange(){this.dispatchEvent(new CustomEvent("change"))}renderAttachments(){return this.attachments.length?Jt` < div class = "flex flex-row flex-wrap gap-sm px-sm py-xs" >
							$ {
								ci(this.attachments, e => Jt`<div class="preview">
            <button
              class="button-delete"
              type="button"
              @click="${()=>{this.attachments=this.attachments.filter(t=>t!==e),this.dispatchChange()}}"
            >
              <icon-close size="none"></icon-close>
            </button>
            <img src="${URL.createObjectURL(e)}" alt="${e.name}" />
          </div>`)
							} <
							button type = "button"
							class = "placeholder"
							@click = "${this.openImageSelector}"
							aria - label = "${Es("
							Attach Image ",{id:"
							attach - image - button ",desc:"
							Message composer: attach image button title "})}" >
							<
							icon - add size = "${En.Medium}" > < /icon-add> <
							/button> <
							/div>`:null}render(){return Jt` <
							input type = "file"
							class = "hidden"
							name = "attachment"
							accept = "image/*"
							multiple @input = "${this.handleImageSelect}" /
							>
							$ {
								this.renderAttachments()
							}
							`}};v([Sr("input[type=file]")],Cg.prototype,"fileInput",2),v([kr()],Cg.prototype,"attachments",2),Cg=v([_r("rs-message-composer-attachments")],Cg);var Ag={cake:"./cake-EOEAWJ7B.png",kappa:"./kappa-NJXU6ZEC.png",snoo_angry:"./snoo_angry-CAXVWDXQ.png",snoo_hug:"./snoo_hug-CUUUHJCJ.png",snoo_surprised:"./snoo_surprised-32HAFSYB.png",cat_blep:"./cat_blep-GXWJQED5.png",karma:"./karma-NDMNOF3U.png",snoo_cry:"./snoo_cry-EA7ZDPIA.png",snoo_joy:"./snoo_joy-7MIWX6WT.png",snoo_tableflip:"./snoo_tableflip-INSPEVPF.png",doge:"./doge-FED77ETV.png",orly:"./orly-RDBPUZQU.png",snoo_dealwithit:"./snoo_dealwithit-DWIK3QWQ.png",snoo_putback:"./snoo_putback-YPX43WC7.png",snoo_thoughtful:"./snoo_thoughtful-AMFEGU5A.png",downvote:"./downvote-TLM3HYPU.png",partyparrot:"./partyparrot-2WMFLLHP.gif",snoo_disapproval:"./snoo_disapproval-SR4BJZW4.png",snoo_sad:"./snoo_sad-VHLNCFQ2.png",snoo_tongue:"./snoo_tongue-LQUBXCDP.png",give_upvote_pride:"./give_upvote_pride-QXQIVMLS.png",pupper:"./pupper-FC7NL6FH.png",snoo_facepalm:"./snoo_facepalm-FDPGZ5MW.png",snoo_scream:"./snoo_scream-CUTF2Q5V.png",snoo_trollface:"./snoo_trollface-PXCX4BUR.png",hamster:"./hamster-LECLOGM7.png",redditgold:"./redditgold-LC2XTJDT.png",snoo_feelsbadman:"./snoo_feelsbadman-L52ZKLKP.png",snoo_shrug:"./snoo_shrug-PKRNGWYD.png",snoo_wink:"./snoo_wink-GGQSH3UB.png",heart_eyes_pride:"./heart_eyes_pride-T624DLYE.png",sloth:"./sloth-KLBGPJVL.png",snoo_feelsgoodman:"./snoo_feelsgoodman-RSHOU2LA.png",snoo_simple_smile:"./snoo_simple_smile-RTEIX3EO.png",upvote:"./upvote-47NSSUBB.png",illuminati:"./illuminati-2YMGXUUL.png",snoo:"./snoo-FDZ6L4MQ.png",snoo_hearteyes:"./snoo_hearteyes-G3QSRF4P.png",snoo_smile:"./snoo_smile-CD6DLBBT.png",upvote_pride:"./upvote_pride-D6XMNFDI.png"},Dg=_t`.scroll {
								--scrollbar - color - background -
									default: var (--color - tone - 4);
								--scrollbar - color - background - hover: var (--color - tone - 3);
								--scrollbar - size: var (--rem14)
							}.scroll::-webkit - scrollbar {
								width: var (--scrollbar - size)
							}.scroll::-webkit - scrollbar - track {
								border: 0
							}.scroll::-webkit - scrollbar - thumb {
								min - height: 50 px;
								border - radius: calc(var (--scrollbar - size) / 2);
								background - clip: padding - box;
								border: 3 px solid rgba(0, 0, 0, 0);
								background - color: var (--scrollbar - color - background -
									default)
							}.scroll::-webkit - scrollbar - thumb: hover {
								background - color: var (--scrollbar - color - background - hover)
							}.emoji - section {
								position: relative;overflow: visible
							}.button - emoji__icon {
								height: 20 px
							}.emoji - dropdown {
								--padding - left: 10 px;
								--scrollbar - color - background -
									default: var (--color - tone - 4);
								--scrollbar - color - background - hover: var (--color - tone - 3);
								--scrollbar - size: var (--rem14);
								position: absolute;
								bottom: 60 px;
								right: 0;
								width: 292 px;
								height: 346 px;
								overflow - y: overlay;
								overflow - y: auto;
								border - radius: var (--spacer - md);
								border: 1 px solid
								var (--color - tone - 5);
								background - color: var (--color - tone - 7);
								cursor: default;
								display: flex;
								flex - wrap: wrap;
								gap: var (--spacer - sm);
								padding: var (--spacer - sm) 0
								var (--spacer - sm) var (--padding - left)
							}.emoji - dropdown::-webkit - scrollbar {
								width: var (--scrollbar - size)
							}.emoji - dropdown::-webkit - scrollbar - track {
								border: 0
							}.emoji - dropdown::-webkit - scrollbar - thumb {
								min - height: 50 px;
								border - radius: calc(var (--scrollbar - size) / 2);
								background - clip: padding - box;
								border: 3 px solid rgba(0, 0, 0, 0);
								background - color: var (--scrollbar - color - background -
									default)
							}.emoji - dropdown::-webkit - scrollbar - thumb: hover {
								background - color: var (--scrollbar - color - background - hover)
							}.emoji - dropdown - tail {
								--tail - radius: 7 px;
								background - color: var (--color - tone - 7);
								height: 20 px;
								width: 20 px;
								position: absolute;
								bottom: 50 px;
								right: 18 px;
								clip - path: polygon(0 0, 100 % 100 % , 0 100 % );
								transform: rotate(-45 deg);
								border - radius: 0 0 0
								var (--tail - radius);
								border: 1 px solid
								var (--color - tone - 5)
							}.emoji {
								padding: var (--spacer - 2 xs);border: 0;border - radius: var (--spacer - md);height: 40 px;cursor: pointer;background - color: var (--color - tone - 7)
							}.emoji: hover {
								background - color: var (--color - tone - 5)
							}.emoji__img {
								width: 32 px;height: 32 px
							}
							`,$g=class extends yr{constructor(){super(...arguments),this.isDropdownShown=!1,this.snoomojiNames=Object.keys(Ag),this.onClickDropdown=e=>e.stopPropagation(),this.openEmojiDropdown=e=>{this.isDropdownShown||(this.dispatchEvent(new Xm({dropdownType:"emoji"})),this.onClickOutsideEmojiButton(),e.stopPropagation())},this.dispatchSend=(e,t)=>{this.dispatchEvent(new Jm({filePath:e,fileName:t})),this.dispatchEvent(new Zm)},this.renderEmojiDropdown=()=>this.isDropdownShown?Jt` <
							div class = "emoji-dropdown"
							@click = "${this.onClickDropdown}" >
							$ {
								Gs(this.snoomojiNames, e => Jt`<button
              class="emoji"
              type="button"
              @click="${()=>this.dispatchSend(Ag[e],e)}"
            >
              <img class="emoji__img" src="${Ag[e]}" alt="${e}" />
            </button>`)
							} <
							/div> <
							div class = "emoji-dropdown-tail" > < /div>
							`:null,this.onClickOutsideEmojiButton=()=>{let e=()=>{this.dispatchEvent(new Zm),t()},t=()=>{document.removeEventListener("click",e)};document.addEventListener("click",e)}}static get styles(){return[oo,Dg]}render(){return Jt` <
							div class = "emoji-section" >
							<
							faceplate - tooltip position = "top" >
							$ {
								fn({
									appearance: "plain",
									ariaLabel: Es("Select emoji", {
										desc: "Message composer: select emoji button label"
									}),
									attributes: {
										type: "button",
										slot: "trigger",
										className: "button-emoji",
										onclick: this.openEmojiDropdown
									},
									leadingIcon: Jt`<icon-emoji
              class="button-emoji__icon text-tone-2"
              ?fill="${this.isDropdownShown}"
            ></icon-emoji>`
								})
							}
							$ {
								Es("Select emoji", {
									desc: "Message composer: select emoji button label"
								})
							} <
							/faceplate-tooltip>
							$ {
								this.renderEmojiDropdown()
							} <
							/div>
							`}};v([xr({type:Boolean})],$g.prototype,"isDropdownShown",2),$g=v([_r("rs-message-composer-emojis")],$g);Zn("icon-clear",Kt`
							$ {
								Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_473_114)"><path d="M10 0a10 10 0 1010 10A10.011 10.011 0 0010 0zm0 18.75A8.75 8.75 0 1118.75 10 8.76 8.76 0 0110 18.75zm3.567-11.433L10.884 10l2.683 2.683-.884.884L10 10.884l-2.683 2.683-.884-.884L9.116 10 6.433 7.317l.884-.884L10 9.116l2.683-2.683.884.884z"/></g><defs><clipPath id="clip0_473_114"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')
							}
							`,Kt`
							$ {
								Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_473_116)"><path d="M10 0a10 10 0 1010 10A10.011 10.011 0 0010 0zm3.832 12.418l-1.414 1.414L10 11.414l-2.418 2.418-1.414-1.414L8.586 10 6.168 7.582l1.414-1.414L10 8.586l2.418-2.418 1.414 1.414L11.414 10l2.418 2.418z"/></g><defs><clipPath id="clip0_473_116"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')
							}
							`),Zn("icon-gif-post",Kt`
							$ {
								Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_616_22)"><path d="M4.711 12.664A2.8 2.8 0 013.6 11.583 3.108 3.108 0 013.2 10a3.052 3.052 0 01.411-1.583c.267-.46.659-.834 1.129-1.082a3.37 3.37 0 011.616-.385c.333 0 .664.043.986.128.309.081.605.205.879.369l-.5 1.169a1.314 1.314 0 00-.563-.357 2.3 2.3 0 00-.754-.124 1.733 1.733 0 00-1.863 1.848c-.006.344.073.684.232.99a1.7 1.7 0 001.542.925c.258.004.513-.051.746-.162.209-.097.387-.25.513-.443.121-.185.185-.401.183-.622H6.124V9.619L9 9.6v.928a2.4 2.4 0 01-1.293 2.193 2.955 2.955 0 01-1.417.328 3.247 3.247 0 01-1.579-.385zm5.471-5.648H11.5v5.968h-1.318V7.016zm2.862 0H16.5v1.169h-2.138v1.392h1.79v1.169h-1.79v2.238h-1.318V7.016zM10 20a18.04 18.04 0 01-6.369-1.162 4.226 4.226 0 01-2.469-2.47 18.033 18.033 0 010-12.737 4.228 4.228 0 012.469-2.469 18.116 18.116 0 0112.738 0 4.228 4.228 0 012.469 2.469 18.035 18.035 0 010 12.738 4.225 4.225 0 01-2.469 2.469A18.04 18.04 0 0110 20zm0-18.75a16.8 16.8 0 00-5.929 1.082 2.978 2.978 0 00-1.739 1.739 16.783 16.783 0 000 11.857 2.98 2.98 0 001.739 1.74 16.858 16.858 0 0011.858 0 2.978 2.978 0 001.739-1.739 16.785 16.785 0 000-11.858 2.978 2.978 0 00-1.739-1.739A16.8 16.8 0 0010 1.25z"/></g><defs><clipPath id="clip0_616_22"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')
							}
							`,Kt`
							$ {
								Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_616_23)"><path d="M18.838 3.631a4.228 4.228 0 00-2.469-2.469 18.116 18.116 0 00-12.738 0 4.228 4.228 0 00-2.469 2.469 18.033 18.033 0 000 12.737 4.226 4.226 0 002.469 2.47 18.035 18.035 0 0012.738 0 4.226 4.226 0 002.469-2.469 18.035 18.035 0 000-12.738zM9 10.53a2.4 2.4 0 01-1.293 2.193 2.955 2.955 0 01-1.417.328 3.246 3.246 0 01-1.579-.386A2.811 2.811 0 013.6 11.583 3.108 3.108 0 013.2 10a3.052 3.052 0 01.411-1.583c.267-.46.659-.834 1.129-1.082a3.37 3.37 0 011.616-.385c.333 0 .664.043.986.128.309.081.605.205.879.369l-.5 1.169a1.314 1.314 0 00-.563-.357 2.3 2.3 0 00-.754-.124 1.733 1.733 0 00-1.863 1.848c-.006.344.073.684.232.99a1.7 1.7 0 001.542.925c.258.004.513-.051.746-.162.209-.097.387-.25.513-.443.121-.185.185-.401.183-.622H6.124V9.619L9 9.6v.93zm2.5 2.454H10V7.016h1.5v5.968zm5-4.8h-2.138v1.393h1.79v1.169h-1.79v2.238H13V7.016h3.5v1.168z"/></g><defs><clipPath id="clip0_616_23"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')
							}
							`),Zn("icon-search",Kt`
							$ {
								Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_480_0)"><path d="M19.442 18.558l-4.513-4.513a8.525 8.525 0 10-.884.884l4.513 4.513.884-.884zM1.252 8.5A7.25 7.25 0 118.5 15.75 7.258 7.258 0 011.251 8.5z"/></g><defs><clipPath id="clip0_480_0"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')
							}
							`,Kt`
							$ {
								Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_784_291)"><path d="M19.707 18.293l-4.539-4.539a8.527 8.527 0 10-1.414 1.414l4.539 4.539 1.414-1.414zM8.5 15A6.5 6.5 0 1115 8.5 6.508 6.508 0 018.5 15z"/></g><defs><clipPath id="clip0_784_291"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')
							}
							`);var Rg=f(ft()),jg=class{constructor(){this.giphyClient=new Rg.GiphyFetch("k2kwyMA6VeyHM6ZRT96OXDGaersnx73Z")}static getInstance(){return jg.instance||(jg.instance=new jg),jg.instance}fetchTrendingGifs(e,t=10){return this.giphyClient.trending({offset:e,limit:t})}fetchSearchGifs(e,t,r=10){return this.giphyClient.search(e,{offset:t,limit:r})}},Ig=_t`.scroll {
								--scrollbar - color - background -
									default: var (--color - tone - 4);
								--scrollbar - color - background - hover: var (--color - tone - 3);
								--scrollbar - size: var (--rem14)
							}.scroll::-webkit - scrollbar {
								width: var (--scrollbar - size)
							}.scroll::-webkit - scrollbar - track {
								border: 0
							}.scroll::-webkit - scrollbar - thumb {
								min - height: 50 px;
								border - radius: calc(var (--scrollbar - size) / 2);
								background - clip: padding - box;
								border: 3 px solid rgba(0, 0, 0, 0);
								background - color: var (--scrollbar - color - background -
									default)
							}.scroll::-webkit - scrollbar - thumb: hover {
								background - color: var (--scrollbar - color - background - hover)
							}.gif - section {
								position: relative;overflow: visible
							}.gifs - dropdown {
								--scrollbar - color - background -
									default: var (--color - tone - 4);
								--scrollbar - color - background - hover: var (--color - tone - 3);
								--scrollbar - size: var (--rem14);
								position: absolute;
								bottom: 60 px;
								right: 0;
								width: 292 px;
								height: 346 px;
								overflow - y: overlay;
								overflow - y: auto;
								border - radius: var (--spacer - md);
								border: 1 px solid
								var (--color - tone - 5);
								background - color: var (--color - tone - 7);
								cursor: default;
								display: flex;
								flex - direction: column;
								gap: var (--spacer - sm);
								padding - top: var (--spacer - sm)
							}.gifs - dropdown::-webkit - scrollbar {
								width: var (--scrollbar - size)
							}.gifs - dropdown::-webkit - scrollbar - track {
								border: 0
							}.gifs - dropdown::-webkit - scrollbar - thumb {
								min - height: 50 px;
								border - radius: calc(var (--scrollbar - size) / 2);
								background - clip: padding - box;
								border: 3 px solid rgba(0, 0, 0, 0);
								background - color: var (--scrollbar - color - background -
									default)
							}.gifs - dropdown::-webkit - scrollbar - thumb: hover {
								background - color: var (--scrollbar - color - background - hover)
							}.gifs - dropdown__search {
								--margin - horizontal: 10 px;
								background - color: var (--color - tone - 5);
								border - radius: var (--radius - full);
								height: 36 px;
								display: flex;
								align - items: center;
								padding: 0
								var (--size - lg) 0
								var (--size - md);
								margin: 0
								var (--margin - horizontal);
								position: sticky;
								top: 0;
								z - index: var (--layer - overlay)
							}.gifs - dropdown__search input {
								background - color: transparent;
								outline: 0;
								margin: 0
								var (--size - xs);
								border: 0;
								height: 36 px;
								flex: 1
							}.gifs - dropdown - tail {
								--tail - radius: 7 px;
								background - color: var (--color - tone - 7);
								height: 20 px;
								width: 20 px;
								position: absolute;
								bottom: 50 px;
								right: 18 px;
								clip - path: polygon(0 0, 100 % 100 % , 0 100 % );
								transform: rotate(-45 deg);
								border - radius: 0 0 0
								var (--tail - radius);
								border: 1 px solid
								var (--color - tone - 5)
							}.gifs - container {
								display: flex;flex - direction: column
							}.loading - spinner {
								animation: spin 2.5 s infinite linear
							}
							`,Pg=class extends yr{constructor(){super(...arguments),this.isDropdownShown=!1,this.searchQuery="",this.isLoading=!1,this.gifsOffset=0,this.gifs=[],this.giphy=jg.getInstance(),this.stopPropagation=e=>e.stopPropagation(),this.openGifsDropdown=e=>{this.isDropdownShown||(this.dispatchEvent(new Xm({dropdownType:"gif"})),this.onClickOutsideGifsButton(),e.stopPropagation())},this.handleSearchGifs=vs(()=>{var e;this.searchQuery=(null==(e=this.input)?void 0:e.value)||"",this.gifsOffset=0},500),this.handleScroll=vs(()=>{let e=this.gifsDropdown;this.gifsOffset%10==0&&e&&e.scrollHeight-e.scrollTop<2*e.clientHeight&&this.fetchGifs()},200),this.clearSearchQuery=()=>{var e;this.searchQuery="",this.gifsOffset=0,null==(e=this.input)||e.focus()},this.hideDropdown=()=>{this.dispatchEvent(new Zm),this.clearSearchQuery()},this.fetchGifs=()=>{let e=this.searchQuery.trim();this.isLoading=!0,e?this.giphy.fetchSearchGifs(e,this.gifsOffset,10).then(this.setFetchedGifs).catch(this.handleGiphyErrors):this.giphy.fetchTrendingGifs(this.gifsOffset,10).then(this.setFetchedGifs).catch(this.handleGiphyErrors)},this.handleGiphyErrors=()=>{this.dispatchEvent(new Ms({level:Ds.error,message:Es("Error loading gifs. Please try again",{desc:"Gif dropdown: Error loading gifs"})})),this.isLoading=!1},this.setFetchedGifs=async e=>{let t=e;if(!t.data.length&&!this.gifsOffset&&this.searchQuery.trim())try{t=await this.giphy.fetchTrendingGifs(this.gifsOffset,10)}catch{return void this.handleGiphyErrors()}let r=t.data.map(e=>({url:e.images.original.url,height:e.images.fixed_width_downsampled.height,width:e.images.fixed_width_downsampled.width,downsizedUrl:e.images.fixed_width_downsampled.url,id:e.id.toString()}));this.gifsOffset?this.gifs=this.gifs.concat(r):this.gifs=r,this.gifsOffset+=t.data.length,this.isLoading=!1},this.dispatchSend=(e,t)=>{this.dispatchEvent(new Km({gifUrl:e,gifName:t})),this.hideDropdown()},this.renderGifsDropdown=()=>this.isDropdownShown?Jt` <
							div class = "gifs-dropdown"
							@click = "${this.stopPropagation}"
							@scroll = "${()=>this.handleScroll()}" >
							<
							div class = "gifs-dropdown__search" >
							<
							icon - search class = "text-tone-2"
							size = "${En.Small}" > < /icon-search> <
							input type = "text"
							autocomplete = "off"
							placeholder = "${Es("
							Search GIPHY ",{desc:"
							Search input
							for GIPHY "})}"
							.value = "${this.searchQuery}"
							@input = "${()=>this.handleSearchGifs()}" /
							>
							$ {
								this.searchQuery.length ? Jt`<icon-clear
                class="text-tone-2 cursor-pointer absolute right-[8px]"
                size="${En.Medium}"
                @click="${this.clearSearchQuery}"
              ></icon-clear>` : ""
							} <
							/div> <
							div class = "gifs-container" >
							$ {
								ci(this.gifs, e => e.id, e => Jt` <img
                class="cursor-pointer mb-[8px]"
                src="${e.url}"
                alt=""
                height="${e.height/(e.width/278)}"
                @click="${()=>this.dispatchSend(e.downsizedUrl,e.id)}"
              />`)
							} <
							/div>
							$ {
								this.isLoading ? Jt` <div class="flex flex-grow items-center justify-center mb-[20px]">
              <icon-load class="text-tone-2 loading-spinner" size="${En.Large}"></icon-load>
            </div>` : ""
							} <
							/div> <
							div class = "gifs-dropdown-tail" > < /div>
							`:null,this.onClickOutsideGifsButton=()=>{let e=()=>{this.hideDropdown(),t()},t=()=>{document.removeEventListener("click",e)};document.addEventListener("click",e)}}static get styles(){return[oo,Ig]}updated(e){var t;super.updated(e),e.has("isDropdownShown")&&this.isDropdownShown&&(null==(t=this.input)||t.focus()),(e.has("searchQuery")||e.has("isDropdownShown"))&&this.isDropdownShown&&this.fetchGifs()}render(){return Jt` <
							div class = "gif-section" >
							<
							faceplate - tooltip position = "top" >
							$ {
								fn({
									appearance: "plain",
									ariaLabel: Es("Select gif", {
										desc: "Message composer: select gif button label"
									}),
									attributes: {
										type: "button",
										slot: "trigger",
										className: "button-gif",
										onclick: this.openGifsDropdown
									},
									leadingIcon: Jt`<icon-gif-post
              class="text-tone-2 h-[20px]"
              ?fill="${this.isDropdownShown}"
            ></icon-gif-post>`
								})
							}
							$ {
								Es("Select gif", {
									desc: "Message composer: select gif button label"
								})
							} <
							/faceplate-tooltip>
							$ {
								this.renderGifsDropdown()
							} <
							/div>
							`}};v([xr({type:Boolean})],Pg.prototype,"isDropdownShown",2),v([Sr("input")],Pg.prototype,"input",2),v([Sr("div.gifs-dropdown")],Pg.prototype,"gifsDropdown",2),v([kr()],Pg.prototype,"searchQuery",2),v([kr()],Pg.prototype,"isLoading",2),v([kr()],Pg.prototype,"gifsOffset",2),v([kr()],Pg.prototype,"gifs",2),Pg=v([_r("rs-message-composer-giphys")],Pg);var Tg=_t`.scroll {
								--scrollbar - color - background -
									default: var (--color - tone - 4);
								--scrollbar - color - background - hover: var (--color - tone - 3);
								--scrollbar - size: var (--rem14)
							}.scroll::-webkit - scrollbar {
								width: var (--scrollbar - size)
							}.scroll::-webkit - scrollbar - track {
								border: 0
							}.scroll::-webkit - scrollbar - thumb {
								min - height: 50 px;
								border - radius: calc(var (--scrollbar - size) / 2);
								background - clip: padding - box;
								border: 3 px solid rgba(0, 0, 0, 0);
								background - color: var (--scrollbar - color - background -
									default)
							}.scroll::-webkit - scrollbar - thumb: hover {
								background - color: var (--scrollbar - color - background - hover)
							}
							form {
								display: grid;grid - template - columns: min - content 1 fr auto;grid - column - gap: var (--spacer - 2 xs);align - items: end;padding: var (--spacer - xs)
							}.button - send {
								color: var (--color - global - alienblue)
							}.button - send: disabled {
								color: var (--color - button - primary - text - disabled)
							}.button.button - plain {
								width: 40 px;height: 40 px
							}.message - box {
								font - family: var (--font - sans);
								color: var (--color - input - text);
								padding: .5 rem .75 rem;
								margin - bottom: .5 rem;
								background: var (--color - input -
									default);
								border: var (--color - input -
									default) solid
								var (--line - input - border);
								border - radius: var (--radius - sm);
								box - shadow: none;
								box - sizing: border - box;
								font - size: 1 rem;
								display: flex;
								align - items: flex - end;
								padding: 0;
								margin: 0;
								border: 0;
								border - radius: 20 px
							}.message - box: disabled {
								cursor: not - allowed;opacity: .5
							}.message - box: invalid {
								border - color: var (--color - danger - content)
							}
							textarea {
								font - family: var (--font - sans);
								color: var (--color - input - text);
								padding: .5 rem .75 rem;
								margin - bottom: .5 rem;
								background: var (--color - input -
									default);
								border: var (--color - input -
									default) solid
								var (--line - input - border);
								border - radius: var (--radius - sm);
								box - shadow: none;
								box - sizing: border - box;
								font - size: 1 rem;
								--scrollbar - color - background -
									default: var (--color - tone - 4);
								--scrollbar - color - background - hover: var (--color - tone - 3);
								--scrollbar - size: var (--rem14);
								flex - grow: 1;
								background - color: transparent;
								margin: 0;
								border: 0;
								outline: 0;
								max - height: 100 px;
								min - height: 40 px;
								resize: none
							}
							textarea: disabled {
								cursor: not - allowed;opacity: .5
							}
							textarea: invalid {
								border - color: var (--color - danger - content)
							}
							textarea::-webkit - scrollbar {
								width: var (--scrollbar - size)
							}
							textarea::-webkit - scrollbar - track {
								border: 0
							}
							textarea::-webkit - scrollbar - thumb {
								min - height: 50 px;
								border - radius: calc(var (--scrollbar - size) / 2);
								background - clip: padding - box;
								border: 3 px solid rgba(0, 0, 0, 0);
								background - color: var (--scrollbar - color - background -
									default)
							}
							textarea::-webkit - scrollbar - thumb: hover {
								background - color: var (--scrollbar - color - background - hover)
							}
							`,Mg=class extends yr{constructor(){super(...arguments),this.isValid=!1,this.activeDropdown=void 0,this.updateFormValidity=()=>{this.isValid=this.input.value.trim().length>0||this.attachmentsControl.attachments.length>0},this.handleInputKeyDown=e=>{"Enter"===e.key&&!e.shiftKey&&(e.preventDefault(),this.form.requestSubmit())},this.handlePaste=e=>{!e.clipboardData||this.attachmentsControl.attachFiles(e.clipboardData.files)},this.openImageSelector=()=>{this.attachmentsControl.openImageSelector()},this.showDropdown=e=>{this.activeDropdown=e.detail.dropdownType},this.hideDropdown=()=>{this.activeDropdown=void 0},this.sendEmoji=async e=>{let{filePath:t,fileName:r}=e.detail,n=await(async(e,t,r)=>{r=r||`
							image / $ {
								e.split(".")[e.split(".").length - 1]
							}
							`;let n=await(await fetch(e)).arrayBuffer();return new File([n],t,{type:r})})(t,r),o=new Ym({attachments:[n]});this.dispatchEvent(o)},this.sendGif=async e=>{let{gifUrl:t,gifName:r}=e.detail,n=await(async(e,t,r="image/gif")=>{let n=await(await fetch(e)).arrayBuffer();return new File([n],t,{type:r})})(t,r),o=new Ym({attachments:[n]});this.dispatchEvent(o)}}static get styles(){return[oo,Tg]}resetForm(){this.form.reset(),this.input.autosize(),this.attachmentsControl.attachments=[],this.isValid=!1}sendMessage(e){var t;e.preventDefault();let r=null==(t=new FormData(this.form).get("message"))?void 0:t.toString().trim();if((!r||0===r.length)&&0===this.attachmentsControl.attachments.length)return void this.resetForm();let n=new Ym({body:r,attachments:this.attachmentsControl.attachments});this.dispatchEvent(n),this.resetForm()}render(){return Jt` <
							rs - message - composer - attachments @change = "${this.updateFormValidity}" >
							< /rs-message-composer-attachments> <
							form @submit = "${this.sendMessage}" >
							$ {
								fn({
									appearance: "plain",
									ariaLabel: Es("Attach Image", {
										desc: "Message composer: attach image button label"
									}),
									attributes: {
										type: "button",
										onclick: this.openImageSelector
									},
									leadingIcon: Jt`<icon-camera class="text-tone-2"></icon-camera>`
								})
							} <
							div class = "message-box" >
							<
							textarea is = "textarea-auto-size"
							name = "message"
							autocomplete = "off"
							placeholder = "${Es("
							Message ",{desc:"
							Message composer: message input placeholder "})}"
							rows = "1"
							@input = "${this.updateFormValidity}"
							@keydown = "${this.handleInputKeyDown}"
							@paste = "${this.handlePaste}" >
							< /textarea> <
							rs - message - composer - giphys
							.isDropdownShown = "${"
							gif "===this.activeDropdown}"
							@show - dropdown = "${this.showDropdown}"
							@hide - dropdown = "${this.hideDropdown}"
							@send - gif = "${this.sendGif}" >
							<
							/rs-message-composer-giphys> <
							rs - message - composer - emojis
							.isDropdownShown = "${"
							emoji "===this.activeDropdown}"
							@show - dropdown = "${this.showDropdown}"
							@hide - dropdown = "${this.hideDropdown}"
							@send - emoji = "${this.sendEmoji}" >
							< /rs-message-composer-emojis> <
							/div>
							$ {
								fn({
									appearance: "plain",
									ariaLabel: Es("Send message", {
										desc: "Message composer: send message button label"
									}),
									attributes: {
										type: "submit",
										className: "button-send",
										disabled: !this.isValid || void 0
									},
									leadingIcon: Jt`<icon-send fill></icon-send>`
								})
							} <
							/form>
							`}};v([Sr("form")],Mg.prototype,"form",2),v([Sr("textarea")],Mg.prototype,"input",2),v([Sr("rs-message-composer-attachments")],Mg.prototype,"attachmentsControl",2),v([kr()],Mg.prototype,"isValid",2),v([kr()],Mg.prototype,"activeDropdown",2),Mg=v([_r("rs-message-composer")],Mg);Zn("icon-ban",Kt`
							$ {
								Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19.59 9.705l-1.062-1.061a2.606 2.606 0 00-1.856-.769h-.913l-3.634-3.634v-.912a2.597 2.597 0 00-.769-1.856L10.3.411a1.128 1.128 0 00-1.6.001L3.411 5.705a1.125 1.125 0 000 1.59l1.061 1.061a2.607 2.607 0 001.856.769h.913l.375.375-6.557 6.558a2.04 2.04 0 002.883 2.884l6.558-6.558.375.375v.913a2.608 2.608 0 00.77 1.856l1.06 1.06a1.127 1.127 0 001.591 0l5.292-5.288a1.124 1.124 0 000-1.591l.001-.004zM3.06 18.058a.79.79 0 11-1.118-1.116L8.5 10.384 9.616 11.5 3.06 18.058zm10.44-2.442l-.972-.972a1.38 1.38 0 01-.4-.972v-1.431L7.76 7.875H6.33a1.367 1.367 0 01-.973-.4L4.384 6.5 9.5 1.384l.972.972c.257.259.4.609.4.973v1.43l4.366 4.366h1.431c.364 0 .713.144.972.4l.972.972-5.113 5.119z"/></svg>')
							}
							`,Kt`
							$ {
								Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19.918 10.5a1.114 1.114 0 01-.33.8L14.3 16.588a1.127 1.127 0 01-1.592 0l-1.06-1.06a2.608 2.608 0 01-.769-1.856v-.913L7.241 9.125h-.913a2.607 2.607 0 01-1.856-.769L3.412 7.3a1.125 1.125 0 010-1.59L8.7.412a1.128 1.128 0 011.591 0l1.061 1.062a2.601 2.601 0 01.77 1.856v.912l3.633 3.634h.913a2.607 2.607 0 011.856.769l1.061 1.061a1.12 1.12 0 01.333.794zM8.834 12.834l-1.392-1.392-.884-.884-5.5 5.5a2.04 2.04 0 002.883 2.884l5.5-5.5-.607-.608z"/></svg>')
							}
							`),Zn("icon-block",Kt`
							$ {
								Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_474_23)"><path d="M18.384 18.8l.013-.013L2.486 2.874l-.886.885 7.244 7.24H7.538A6.482 6.482 0 001 17.412v.482A1.114 1.114 0 002.119 19h14.725l.67.67.761-.762c.052-.02.102-.043.151-.068l-.042-.04zM2.251 17.75v-.34a5.231 5.231 0 015.287-5.16h2.556l5.5 5.5H2.251zM13.5 11.089a6.477 6.477 0 015.427 5.427l-2.6-2.6a4.795 4.795 0 00-.247-.247l-2.58-2.58zm-7.1-7.1l-.98-.983a5 5 0 116.574 6.574l-.985-.98a3.74 3.74 0 10-4.6-4.6L6.4 3.989z"/></g><defs><clipPath id="clip0_474_23"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')
							}
							`,Kt`
							$ {
								Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_474_37)"><path d="M13.028 11.028a6.474 6.474 0 015.951 5.95l-5.951-5.95zM15 5a4.988 4.988 0 00-9.687-1.687l6.374 6.374A4.994 4.994 0 0015 5zM1.6 3.759l7.244 7.24H7.538A6.482 6.482 0 001 17.412v.482A1.114 1.114 0 002.119 19h14.725l.67.67.883-.885L2.486 2.874l-.886.885z"/></g><defs><clipPath id="clip0_474_37"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')
							}
							`);function Fg(){let e=new WeakMap,t=!1;return{get isDirty(){return t},register(r,n){let o=e.get(r);o&&!o.has(n)?o.add(n):o||e.set(r,new Set([n])),t=!0},unregister(r,n){let o=e.get(r);o&&o.has(n)&&(o.delete(n),t=!0)},getRegisteredElements(r){let n=e.get(r);return t=!1,n},unregisterAll(r){e.delete(r),t=!0}}}var zg=Fg(),Ng=(function(){let e=new WeakMap,t=!1}(),function(){let e=new Set,t=t=>e.has(t.constructor);return{registerAncestorClass(t){e.add(t)},connectToAncestor:e=>(async function(e,t){let r=e;for(;r.parentElement;){if(!(r=r.parentElement).tagName.includes("-"))continue;let e=r.tagName.toLowerCase();if(customElements.get(e)||await customElements.whenDefined(e),t(r))return r}})(e,t)}}()),Lg=(Ng.registerAncestorClass,Ng.connectToAncestor),Bg=class{constructor(e){this.submissionValue=null,this.constraintsSuffered={},this.customValidityMessage="",this.validityMessage="",this.validationAnchor=null,this.target=e,this.input=document.createElement("input"),this.input.className="faceplate-internal-input",this.input.tabIndex=-1,this.input.style.opacity="0",this.input.style.width="1px",this.input.style.height="100%",this.input.style.padding="0",this.input.style.border="0",this.input.style.pointerEvents="none"}_connect(e){e?(this._form=e,zg.register(e,this.target)):this._form=void 0}_disconnect(){this._form&&(zg.unregister(this._form,this.target),this._form=void 0)}getFormValue(){return this.submissionValue}setFormValue(e){this.submissionValue=e}get form(){return this._form}isSufferingFromItsConstraints(){for(let e in this.constraintsSuffered)if(this.constraintsSuffered[e])return!0;return!1}setValidity(e,t,r=null){if(e&&Object.keys(e).length)for(let o in e)this.constraintsSuffered[o]=e[o];else this.constraintsSuffered=e||{};let n=!!t&&this.isSufferingFromItsConstraints();if(e&&Object.prototype.hasOwnProperty.call(e,"customError")){let e=this.constraintsSuffered.customError&&t?t:"";this.customValidityMessage=e}else this.validationAnchor=r,this.validityMessage=n&&t?t:"";(this.validationAnchor||this.input).setCustomValidity(this.validationMessage),this.target.setAttribute("faceplate-validity",n?"invalid":"valid")}get willValidate(){return!(this.target.disabled||null===this.submissionValue)}get validity(){let e=this.constraintsSuffered;return new class{constructor(e,t,r,n,o,i,a,s,l,c){this.valueMissing=e,this.typeMismatch=t,this.patternMismatch=r,this.tooLong=n,this.tooShort=o,this.rangeUnderflow=i,this.rangeOverflow=a,this.stepMismatch=s,this.badInput=l,this.customError=c}}(!!e.valueMissing,!!e.typeMismatch,!!e.patternMismatch,!!e.tooLong,!!e.tooShort,!!e.rangeUnderflow,!!e.rangeOverflow,!!e.stepMismatch,!!e.badInput,!!e.customError)}get validationMessage(){return this.customValidityMessage||this.validityMessage}dispatchInvalidEvent(){let e=new Event("invalid",{bubbles:!0,cancelable:!0});return this.target.dispatchEvent(e),e}checkValidity(){return!this.isSufferingFromItsConstraints()||(this.dispatchInvalidEvent(),!1)}reportValidity(){return!this.isSufferingFromItsConstraints()||(this.dispatchInvalidEvent().defaultPrevented||(this.validationAnchor||this.input).reportValidity(),!1)}},qg=Symbol("mixins/form-association"),Ug=Fg(),Vg=new MutationObserver(e=>{for(let t of e){if("attributes"!==t.type||"disabled"!==t.attributeName||!(t.target instanceof HTMLFieldSetElement))continue;let e=Ug.getRegisteredElements(t.target);if(e)for(let r of e)r.formDisabledCallback&&r.formDisabledCallback(r.disabled||t.target.disabled)}});var Qg=class extends(function(e){if(qg in e)return e;class t extends e{constructor(){super(...arguments),this._internals=new Bg(this)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),Lg(this).then(e=>{if(!e||!this.isConnected)return;this._internals._connect(e),this.formAssociatedCallback&&this.formAssociatedCallback(e);let t=this;for(;t.parentElement&&!((t=t.parentElement)===e||t instanceof HTMLLegendElement);)if(t instanceof HTMLFieldSetElement){this._fieldSet=t,Ug.getRegisteredElements(t)||Vg.observe(t,{attributes:!0}),Ug.register(t,this);break}this.formDisabledCallback&&this.formDisabledCallback(this.disabled)})}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this._internals._disconnect(),this.formAssociatedCallback&&this.formAssociatedCallback(null),this._fieldSet&&(Ug.unregister(this._fieldSet,this),this._fieldSet=void 0)}get value(){return this._internals.getFormValue()}set value(e){this._internals.setFormValue(e)}get form(){return this._internals.form}get name(){return this.getAttribute("name")||""}get disabled(){return this.hasAttribute("disabled")||!(!this._fieldSet||!this._fieldSet.disabled)}set disabled(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled"),this.formDisabledCallback&&this.formDisabledCallback(e||!(!this._fieldSet||!this._fieldSet.disabled))}get type(){return this.localName}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}setCustomValidity(e){this._internals.setValidity({customError:!!e},e)}}return t[qg]=!0,t}(yr)){constructor(){super(),this.ariaDisabled="false",this.addEventListener("focus",()=>{let e=new FocusEvent("focusin",{bubbles:!0});this.dispatchEvent(e)})}static get styles(){return _t`: host {
								display: inline - block;
								position: relative;
							}

							/* This attribute is set when the input is disabled, or an ancestor fieldset is disabled. */
							: host([aria - disabled = true]) {
								cursor: not - allowed;
								opacity: 0.5;
							}

							/* This attribute is set by ElementInternals when an input's validity state is updated. */
							: host([faceplate - validity = 'invalid']) {
								border - color: var (--color - danger - content);
							}

							/* This input is provided by WithFormAssociation, and is used to display error states */
							.faceplate - internal - input {
								position: absolute;
								left: 50 % ;
								bottom: 0;
							}
							`}get disabled(){return super.disabled}set disabled(e){super.disabled=e}render(){return Jt`
							$ {
								this._internals.input
							}
							`}formDisabledCallback(e){this.ariaDisabled=e?"true":"false"}formResetCallback(){this.value=this.getAttribute("value")}};$n([xr({type:Boolean,reflect:!0})],Qg.prototype,"disabled",null),$n([xr({type:String,attribute:"aria-disabled",reflect:!0})],Qg.prototype,"ariaDisabled",void 0);var Hg=class extends Qg{constructor(){super(...arguments),this.required=!1,this.name="",this.initialized=!1,this._events=new class{constructor(e,t){this._events=new Map,this._isConnected=!1,e.addController(this),this._host=e,this._getTarget=t}_getEventTarget(){return this._getTarget?this._getTarget():this._host}hostConnected(){let e=this._getEventTarget();for(let[t,r]of this._events)Array.isArray(r)?e.addEventListener(t,r[0],r[1]):e.addEventListener(t,r);this._isConnected=!0}hostDisconnected(){let e=this._getEventTarget();for(let[t,r]of this._events){let n=Array.isArray(r)?r[0]:r;e.removeEventListener(t,n)}this._isConnected=!1}define(e,t,r){let n=e.toString();if(this._events.has(n))throw new Error(`
							Event $ {
								n
							}
							already defined.
							`);if(r?this._events.set(n,[t,r]):this._events.set(n,t),this._isConnected){let e=this._getEventTarget();e&&e.addEventListener(n,t,r)}return t}}(this),this.ariaRole="checkbox",this._checked=!1,this._handleClick=this._events.define("click",()=>{this.disabled||this.handleInteraction()}),this._handleKeydown=this._events.define("keydown",e=>{this.disabled||"Space"===e.code&&(e.stopPropagation(),e.preventDefault(),this.handleInteraction())})}get checked(){return this._checked}set checked(e){let t=this._checked;e!==t&&(this._internals.setFormValue(e?this.getAttribute("value")||"on":null),this._checked=e,e?this.setAttribute("aria-checked","true"):this.removeAttribute("aria-checked"),this.hasAttribute("required")&&!this.checked?this._internals.setValidity({valueMissing:!0},(e=>e)(`
							This $ {
								this.ariaRole
							}
							must be on`)):this._internals.setValidity(),this.requestUpdate("checked",t))}static get styles(){return[super.styles,_t`: host(: not(faceplate -
								switch -input)) {
								height: var (--size - md);
							}

							: host {
								display: flex;
								align - items: center;
							}

							label {
								font: var (--font - 14 - 20 - regular);
								color: var (--color - neutral - content - strong);
								margin - left: var (--spacer - 2 xs);
							}

							.icon {
								border: var (--line - md) solid transparent;
								height: var (--size - md);
								font - size: var (--size - md);
							}

							: host([checked]).icon,: host([indeterminate]).icon {
								display: inline - block;
								color: var (--color - primary - background);
							}

							: host(: hover).icon {
								color: var (--color - primary - background - hover);
							}

							: host([faceplate - validity = 'invalid']).icon {
								color: var (--color - danger - content);
								pointer - events: none;
							}

							: host([aria - disabled = 'true']).icon {
								color: var (--color - neutral - content - disabled);
								pointer - events: none;
							}

							: host([required]) label::after {
								position: absolute;
								color: var (--color - danger - content);
								content: '*';
							}

							: host(: focus).icon {
								border - color: var (--color - global - focus, transparent);
								outline: none;
							}

							: host(: focus) {
								outline: none;
							}

							: host(: focus: not(: focus - visible)).icon {
								border - color: transparent;
							}
							`]}connectedCallback(){super.connectedCallback(),this.initialized||(this.initialized=!0,this.setAttribute("role",this.ariaRole),this.setAttribute("tabindex","0"))}formDisabledCallback(e){super.formDisabledCallback(e),e?this.removeAttribute("tabindex"):this.setAttribute("tabindex","0")}render(){return Jt`
							$ {
								super.render()
							} <
							label >
							<
							slot > < /slot> <
							/label>
							`}handleInteraction(){let e=new InputEvent("input",{bubbles:!0});this.dispatchEvent(e)}};$n([xr({type:Boolean})],Hg.prototype,"required",void 0),$n([xr({type:String})],Hg.prototype,"name",void 0),$n([xr({type:Boolean,reflect:!0})],Hg.prototype,"checked",null);var Wg=class extends Hg{static get styles(){return[super.styles,_t`
							.outer {
								background: var (--color -
									switch -input - background -
									default);
								border - radius: var (--radius - full);
								box - shadow: var (--elevation -
									switch -input -
									default -inset);
								height: var (--size -
									switch -input - h);
								vertical - align: middle;
								width: var (--size -
									switch -input - w);
								padding: var (--line - md);
								box - sizing: border - box;
								position: relative;
								display: flex;
								align - items: center;
							}

							.knob {
								--knob - w: calc(var (--size -
									switch -input - h) - (var (--line - md) * 2));

								--translate - left: calc(var (--size -
										switch -input - w) -
									var (--knob - w) - (var (--line - md) * 2));
								--knob - center: calc(var (--knob - w) / 2);

								background: var (--color - global - white);
								border - radius: var (--radius - full);
								/* Equivalent to elevation-s - need filter to apply to psuedoelements */
								/* TODO: add drop-shadow support to design-system, this should only apply in beta */
								filter: drop - shadow(0 1 px 4 px rgba(0, 0, 0, 0.15));
								display: block;
								height: 87.5 % ;
								position: absolute;
								transform: translateX(0);
								transition: transform 0.3 s;
								width: var (--knob - w);
							}

							label {
								margin - left: var (--spacer - xs);
							}

							: host([checked]).outer {
								background: var (--color -
									switch -input - background - checked);
							}

							: host([checked]).knob {
								transform: translateX(var (--translate - left));
							}

							: host([faceplate - validity = 'invalid']).outer {
								background: var (--color - danger - content);
							}

							: host(: focus).outer {
								box - shadow: var (--elevation - focus - ring, 0 0 0 2 px
									var (--color - global - alienblue));
								outline: none;
							}

							: host(: hover).outer {
								background: var (--color -
									switch -input - background -
									default -hover);
							}

							: host([checked]: hover).outer {
								background: var (--color -
									switch -input - background - checked - hover);
							}

							/**
							 * The way this color is made needs to have blending between
							 * the "checked-hover"/"default-hover" and the "pressed-scrim" color.
							 *
							 * The only way to do this without introducing another element is with
							 * "background" and "linear-gradient".
							 *
							 * This is all in service to matching Figma.
							 **/
							: host(: active).outer {
								background: linear - gradient(
									to right,
									var (--color -
										switch -input - background -
										default -hover),
									var (--color -
										switch -input - background -
										default -hover)
								),
								linear - gradient(
									to right,
									var (--color -
										switch -input - background - pressed - scrim),
									var (--color -
										switch -input - background - pressed - scrim)
								);
							}

							: host([checked]: active).outer {
								background: linear - gradient(
									to right,
									var (--color -
										switch -input - background - checked - hover),
									var (--color -
										switch -input - background - checked - hover)
								),
								linear - gradient(
									to right,
									var (--color -
										switch -input - background - pressed - scrim),
									var (--color -
										switch -input - background - pressed - scrim)
								);
							}

							: host(: focus: not(: focus - visible)).outer {
								box - shadow: var (--elevation - focus - ring - reset);
							}

							: host([aria - disabled = 'true']) {
								opacity: 1;
							}

							: host([aria - disabled = 'true']).outer {
								background - color: var (--color -
									switch -input - background - disabled);
								box - shadow: none;
							}

							: host([checked][aria - disabled = 'true']).outer {
								background - color: var (--color -
									switch -input - background - checked - disabled);
								box - shadow: none;
							}

							: host([aria - disabled = 'true']).knob {
								background - color: var (--color -
									switch -input - background - handle - disabled);
								box - shadow: none;
							}

							: host([aria - disabled = 'true']) label {
								opacity: 0.5;
							}

							/**
							 * Knob expand animation styles - the knob consists of three parts, the
							 * core (.knob), center padding (:before), and moving part (:active).
							 * When the switch is active, the center padding expands to fill the gap
							 * between the moving part and the core knob.
							 * The downside is that the box shadow
							 */
							.knob: before,
							.knob: after {
								background: inherit;
								content: '';
								height: 100 % ;
								left: 0;
								position: absolute;
								top: 0;
								transition: transform 0.3 s;
							}

							/* The middle part of the expanded knob */
							.knob: before {
								border - radius: 0;
								transform - origin: left;
								transform: translateX(var (--knob - center)) scaleX(0);
								transition: transform 0.2 s;
								width: var (--spacer -
									switch -input - active - pl);
							}

							/* The part of the expanded knob that moves (to the left when toggling on, right for off) */
							.knob: after {
								border - radius: var (--radius - full);
								transform: translateX(0);
								width: var (--knob - w);
							}

							: host(: active).knob: after {
								transform: translateX(var (--spacer -
									switch -input - active - pl));
							}

							: host(: active).knob: before {
								transform: translateX(var (--knob - center)) scaleX(1);
							}

							: host([checked]: active).knob: after {
								transform: translateX(calc(-1 *
									var (--spacer -
										switch -input - active - pl)));
							}

							: host([checked]).knob: before {
								transform: translateX(var (--knob - center)) scaleX(0);
							}

							: host([checked]: active).knob: before {
								transform: translateX(calc(var (--knob - center) - 8 px)) scaleX(1);
							}
							`]}render(){return Jt` <
							span class = "outer" >
							<
							span class = "knob" > < /span> <
							/span>
							$ {
								super.render()
							}
							`}toggle(){this.checked=!this.checked,super.handleInteraction()}handleInteraction(){this.toggle()}};Wg=$n([_r("faceplate-switch-input")],Wg);var Gg=_t`.mute - notifications - wrapper {
								margin: var (--rem32) 0;border - radius: 8 px;background: var (--color - input -
									default);padding: var (--rem12);display: flex;justify - content: space - between;align - items: center
							}.title - icon {
								display: flex;align - items: center
							}.icon {
								font: var (--font - 24);margin - right: var (--rem20)
							}
							`,Yg=(Zn("icon-notification",Kt`
							$ {
								Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_472_1138)"><path d="M11 18h1a2 2 0 01-4 0h3zm8-3.792v.673A1.12 1.12 0 0117.883 16H2.117A1.12 1.12 0 011 14.881v-.673a3.947 3.947 0 011.738-3.277A2.706 2.706 0 003.926 8.7V7.087a6.07 6.07 0 0112.138 0l.01 1.613a2.7 2.7 0 001.189 2.235A3.949 3.949 0 0119 14.208zm-1.25 0a2.7 2.7 0 00-1.188-2.242A3.956 3.956 0 0114.824 8.7V7.088a4.819 4.819 0 10-9.638 0v1.615a3.956 3.956 0 01-1.738 3.266 2.7 2.7 0 00-1.198 2.239v.542h15.5v-.542z"/></g><defs><clipPath id="clip0_472_1138"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')
							}
							`,Kt`
							$ {
								Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_472_1153)"><path d="M11 18h1a2 2 0 01-4 0h3zm6.263-7.07a2.699 2.699 0 01-1.189-2.23l-.005-1.61a6.069 6.069 0 10-12.138 0v1.613a2.7 2.7 0 01-1.193 2.227A3.949 3.949 0 001 14.208v.672A1.119 1.119 0 002.117 16h15.766A1.119 1.119 0 0019 14.88v-.672a3.952 3.952 0 00-1.737-3.278z"/></g><defs><clipPath id="clip0_472_1153"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')
							}
							`),class extends yr{constructor(){super(...arguments),this.matrix=new bn(this),this.handleChange=async()=>{var e,t;let r=!(null!=(t=null==(e=this.shadowRoot)?void 0:e.querySelector("#mute-notifications-toggle"))&&t.hasAttribute("checked"));this.matrix.client.setRoomMutePushRule("global",this.roomId,r)}}static get styles(){return[oo,Gg]}connectedCallback(){super.connectedCallback(),this.muteNotifications=!!this.matrix.client.getRoomPushRule("global",this.roomId)}render(){return Jt` <
							div class = "mute-notifications-wrapper" >
							<
							div class = "title-icon" >
							<
							icon - notification class = "icon" > < /icon-notification> <
							p >
							$ {
								Es("Mute notifications", {
									desc: "Room settings / Notifications: mute"
								})
							} <
							/p> <
							/div> <
							faceplate -
							switch -input name = "mute"
							id = "mute-notifications-toggle"
							.checked = "${this.muteNotifications}"
							@input = "${this.handleChange}" >
							< /faceplate-switch-input> <
							/div>
							`}});v([xr({type:String})],Yg.prototype,"roomId",2),v([kr()],Yg.prototype,"muteNotifications",2),Yg=v([_r("rs-room-settings-notifications")],Yg);var Jg,Kg;Zn("icon-kick",Kt`
							$ {
								Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_1580_221)"><path d="M10 5.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM6.75 10a3.227 3.227 0 01.55-1.812l4.512 4.512A3.248 3.248 0 016.75 10zm5.95 1.812L8.188 7.3a3.248 3.248 0 014.512 4.512zm7.16-2.36l-4.451-7.885A1.116 1.116 0 0014.437 1H5.562a1.116 1.116 0 00-.971.567L.145 9.45a1.111 1.111 0 000 1.1l4.445 7.882a1.118 1.118 0 00.972.568h8.875a1.116 1.116 0 00.972-.567l4.446-7.883a1.11 1.11 0 000-1.098h.005zm-5.5 8.3H5.64L1.27 10l4.37-7.75h8.719l4.37 7.75-4.37 7.752z"/></g><defs><clipPath id="clip0_1580_221"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')
							}
							`,Kt`
							$ {
								Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_1580_227)"><path d="M10 6.75a3.213 3.213 0 00-1.7.492l4.458 4.458c.32-.51.49-1.098.492-1.7A3.254 3.254 0 0010 6.75z"/><path d="M19.856 9.452l-4.447-7.885A1.116 1.116 0 0014.437 1H5.562a1.116 1.116 0 00-.971.567L.145 9.45a1.111 1.111 0 000 1.1l4.445 7.882a1.118 1.118 0 00.972.568h8.875a1.116 1.116 0 00.972-.567l4.446-7.883a1.11 1.11 0 000-1.098zM10 14.75A4.75 4.75 0 1114.75 10 4.756 4.756 0 0110 14.75z"/><path d="M6.75 10A3.254 3.254 0 0010 13.25a3.212 3.212 0 001.7-.492L7.242 8.3c-.32.51-.49 1.098-.492 1.7z"/></g><defs><clipPath id="clip0_1580_227"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')
							}
							`);function Xg(e){return new Error(`
							Unsupported type File given
							for field $ {
								e
							}.Use encoding type $ {
								Kg.FormData
							}
							for file upload.
							`)}function Zg(e){if(!e)return;return function(e){let t={};for(let r of e){let[e,n]=r;if(n instanceof File)throw Xg(e);Object.prototype.hasOwnProperty.call(t,e)?Array.isArray(t[e])?t[e].push(n):t[e]=[t[e],n]:t[e]=n}return t}(new FormData(e))}function ey(e){return function(t){t.stopPropagation(),t.preventDefault();let r=Zg(t.target);!r||e(r)}}!function(e){e.Omit="omit",e.SameOrigin="same-origin",e.Include="include",e.SameDomain="same-domain"}(Jg||(Jg={})),function(e){e.UrlEncoded="application/x-www-form-urlencoded",e.FormData="multipart/form-data",e.JSON="application/json"}(Kg||(Kg={}));var ty=_t`
							form {
								display: flex;flex - direction: column;gap: var (--spacer - xs)
							}
							input {
								font - family: var (--font - sans);
								color: var (--color - input - text);
								padding: .5 rem .75 rem;
								margin - bottom: .5 rem;
								background: var (--color - input -
									default);
								border: var (--color - input -
									default) solid
								var (--line - input - border);
								border - radius: var (--radius - sm);
								box - shadow: none;
								box - sizing: border - box;
								font - size: 1 rem
							}
							input: disabled {
								cursor: not - allowed;opacity: .5
							}
							input: invalid {
								border - color: var (--color - danger - content)
							}
							label {
								text - transform: var (--misc - label - text - transform);
								letter - spacing: var (--misc - label - letter - spacing);
								font: var (--font - label -
									default);
								color: var (--color - label -
									default)
							}.buttons {
								display: flex;flex - direction: row - reverse;gap: var (--spacer - sm);margin - top: var (--spacer - sm)
							}
							ul {
								list - style - type: none;
								padding - left: 0;
								border - radius: 4 px;
								width: fit - content;
								border: 1 px solid
								var (--color - tone - 5);
								width: 100 %
							}
							ul li {
								padding: .5 rem .75 rem;border - block - end: 1 px solid
								var (--color - tone - 5)
							}
							ul li: last - child {
								border - block - end: none
							}
							h2 {
								font: var (--font - title - h2)
							}
							h3 {
								font: var (--font - title - h3)
							}
							`,ry=class extends yr{constructor(){super(...arguments),this.roomNameInputValue="",this.avatars=new Qm(this),this.matrix=new bn(this),this.roomController=new _n(this),this.handleRoomRenameFormSubmit=ey(async e=>{try{await this.matrix.client.setRoomName(this.roomController.getRoom().roomId,e.name),this.dispatchEvent(new Ms({level:Ds.info,message:Es("Room successfully updated",{desc:"Room updated toast message"})})),fo(this,(({id:e})=>So({source:"chat_settings",action:"save",noun:"rename_group"},{chat:{id:e}}))({id:this.roomController.getRoom().roomId}))}catch{this.dispatchEvent(new Ms({level:Ds.error,message:Es("Unable to update the room",{desc:"Room update error toast message"})}))}})}static get styles(){return[oo,ty]}connectedCallback(){super.connectedCallback(),this.roomController.on(Vr.Name,()=>{this.requestUpdate()}),this.roomController.on(Qr.Members,()=>{this.requestUpdate()}),this.roomNameInputValue=this.roomController.getRoom().name}canRenameRoom(){let e=this.matrix.client.getUserId();return!!e&&this.roomController.getRoom().currentState.maySendEvent(zr.RoomName,e)}isRoomNameChanged(){return this.roomController.getRoom().name!==this.roomNameInputValue}renderAvatar(e,t){return Um(e.userId)?Jt` <
							a href = "${`${Om}/user/${e.name}/`}"
							target = "_blank"
							class = "flex no-underline" >
							$ {
								hg(t)
							} <
							/a>
							`:hg(t)}renderMember(e){let t=this.avatars.getAvatar(e.userId);return Jt` <
							li class = "flex gap-sm items-center" >
							<
							span class = "${null!=t&&t.isBlocked?"
							opacity - 50 ":"
							"}" >
							$ {
								this.renderAvatar(e, t)
							} <
							/span> <
							span class = "${null!=t&&t.isBlocked?"
							text - coolgray - 450 ":"
							"}" >
							$ {
								e.name
							}
							$ {
								100 === e.powerLevel ? Jt`&bull; <span class="text-action-secondary">Host</span>` : ""
							}
							$ {
								null != t && t.isNSFW ? Jt`&bull; <span class="text-coolgray-450">NSFW</span>` : ""
							}
							$ {
								null != t && t.isBlocked ? Jt`&bull; <icon-block></icon-block>` : ""
							} <
							/span> <
							div class = "flex flex-1 justify-end" >
							$ {
								function(e, t, r, n) {
									return (() => {
										let e = t.getUserId();
										if (!e || n === e) return !1;
										let o = r.getMember(e);
										return !!o && r.currentState.hasSufficientPowerLevelFor("kick", o.powerLevel)
									})() ? Jt`
    <faceplate-tooltip position="top">
      ${fn({appearance:"plain",size:an.Small,attributes:{slot:"trigger",type:"button",title:Es("Kick",{desc:"Room settings / About: kick user action tooltip"}),onclick:async()=>{try{await t.kick(r.roomId,n)}catch{e.dispatchEvent(new Ms({level:Ds.error,message:Es("Unable to kick user",{desc:"Room settings / About: kick user error message"})}))}}},leadingIcon:Jt` < icon - kick > < /icon-kick>`})}
									$ {
										Es("Kick", {
											desc: "Room settings / About: kick user action tooltip"
										})
									} <
									/faceplate-tooltip>
									`:null}(this,this.matrix.client,this.roomController.getRoom(),e.userId)}
        </div>
      </li>
    `
								}
								renderForm() {
									return Jt`
      <form
        @submit="${this.handleRoomRenameFormSubmit}"
        @reset="${()=>{this.roomNameInputValue=this.roomController.getRoom().name}}"
      >
        <label for="name">${Es("Name",{desc:"Room name input label"})}</label>
        <input
          id="name"
          type="text"
          name="name"
          autocomplete="off"
          value="${this.roomController.getRoom().name}"
          required
          @input="${e=>{this.roomNameInputValue=e.target.value}}"
          @change="${e=>{this.roomNameInputValue=e.target.value}}"
          ?disabled="${!this.canRenameRoom()}"
        />
        ${this.canRenameRoom()?Jt`
              <div class="buttons">
                ${fn({appearance:"primary",size:an.Small,children:Es("Update Name",{desc:'Room update "Save" button'}),attributes:{type:"submit",disabled:!this.isRoomNameChanged()||void 0}})}
                ${fn({size:an.Small,children:Es("Cancel",{desc:"Cancel button"}),attributes:{type:"reset"}})}
              </div>
            `:null}
      </form>
    `
								}
								renderMembers() {
									let e = this.roomController.getRoom().getJoinedMembers();
									return Jt`
      <h3>${Es("Members",{desc:'Room settings / About: "Members" section title'})}</h3>
      <ul>
        ${ci(e,e=>e.userId,e=>this.renderMember(e))}
      </ul>
    `
								}
								renderInvitedUsers() {
									let e = this.roomController.getRoom().getMembersWithMembership("invite");
									return 0 === e.length ? null : Jt`
      <h3>
        ${Es("Invited users",{desc:'Room settings / About: "Invited users" section title'})}
      </h3>
      <ul>
        ${ci(e,e=>e.userId,e=>this.renderMember(e))}
      </ul>
    `
								}
								renderBannedUsers() {
									let e = this.roomController.getRoom().getMembersWithMembership("ban");
									return 0 === e.length ? null : Jt`
      <h3>
        ${Es("Banned users",{desc:'Room settings / About: "Banned users" section title'})}
      </h3>
      <ul>
        ${ci(e,e=>e.userId,e=>this.renderMember(e))}
      </ul>
    `
								}
								render() {
									return Jt`
      <h2>${Es("About",{desc:"Room settings / About: section title"})}</h2>
      <rs-room-settings-notifications
        .roomId="${this.roomController.getRoom().roomId}"
      ></rs-room-settings-notifications>
      ${this.renderForm()} ${this.renderMembers()} ${this.renderInvitedUsers()}
      ${this.renderBannedUsers()}
    `
								}
							}; v([xr()], ry.prototype, "room", 2), v([kr()], ry.prototype, "roomNameInputValue", 2), ry = v([_r("rs-room-settings-about")], ry);
							var ny = _t`:host{border-radius:var(--rem8);border-radius:var(--radius-sm);padding:var(--spacer-xs) 0}input{font-family:var(--font-sans);color:var(--color-input-text);padding:.5rem .75rem;margin-bottom:.5rem;background:var(--color-input-default);border:var(--color-input-default) solid var(--line-input-border);border-radius:var(--radius-sm);box-shadow:none;box-sizing:border-box;font-size:1rem;margin:0;padding:0;flex:1;min-width:20px;background-color:transparent;border:0}input:disabled{cursor:not-allowed;opacity:.5}input:invalid{border-color:var(--color-danger-content)}input:focus-visible{outline:0}.input-bar{display:flex;background-color:var(--color-tone-6);border-radius:var(--rem8);margin:var(--spacer-xs) var(--spacer-md);padding:var(--spacer-2xs);gap:var(--spacer-2xs);min-height:22px;flex-wrap:wrap}.input-bar-item{display:flex;background-color:var(--color-tone-4);border-radius:var(--rem12);font:var(--font-button-b4);padding:var(--spacer-2xs) var(--spacer-xs);align-items:center}.input-bar-item:focus{outline:-webkit-focus-ring-color auto 1px}.search-result{border:0;border-bottom:1px solid var(--color-tone-6);background-color:transparent;height:38px;display:grid;grid-template-columns:min-content 1fr min-content;grid-column-gap:var(--spacer-xs);align-items:center;text-align:left;padding:0 var(--spacer-md);width:100%;cursor:pointer}.search-result:hover{background-color:var(--color-tone-5)}.search-result:last-of-type{border:0}.checkmark{width:15px;height:15px;fill:#848a8c}.checkmark.selected{fill:#0079d3}.search-results-empty{padding:0 var(--spacer-md);font-style:italic}`, oy = class extends yr {
								constructor() {
									super(), this.matrix = new bn(this), this.userSearchQuery = new _s(this, e => this.search(e)), this.avatars = new Qm(this), this.value = [], this.search = async e => {
										if (e.length < 3) return null;
										let t = this.matrix.client.getUserId();
										return (await this.matrix.client.searchUserDirectory({
											term: e
										})).results.filter(e => e.user_id !== t)
									}, this.handleUserInput = vs(() => {
										let e = this.shadowRoot.querySelector("input").value;
										this.userSearchQuery.cancel(), this.userSearchQuery.execute(e)
									}, 500), this.internals = this.attachInternals()
								}
								static get styles() {
									return [oo, ny]
								}
								isUserSelected(e) {
									return this.value.some(t => t.user_id === e)
								}
								setValue(e) {
									this.value = e, this.internals.setFormValue(JSON.stringify(this.value)), this.dispatchEvent(new Event("change"))
								}
								handleOptionClick(e) {
									let t = this.isUserSelected(e.user_id) ? this.value.filter(t => t.user_id !== e.user_id) : [...this.value, e];
									this.searchInput.value = "", this.searchInput.focus(), this.setValue(t)
								}
								handleSelectedItemKeyDown(e, t) {
									("Backspace" === e.key || "Delete" === e.key) && (e.preventDefault(), this.searchInput.focus(), this.setValue(this.value.filter(e => e.user_id !== t.user_id)))
								}
								handleSearchInputKeyDown(e) {
									var t, r;
									0 === this.searchInput.selectionStart && "Backspace" === e.key && (e.preventDefault(), null == (r = null == (t = this.shadowRoot) ? void 0 : t.querySelector(".input-bar-item:last-of-type")) || r.focus())
								}
								renderCheckmark(e) {
									return e ? Jt`<svg class="checkmark selected" viewBox="0 0 20 20">
        <g>
          <path
            d="M10,0.4c-5.3,0-9.6,4.3-9.6,9.6s4.3,9.6,9.6,9.6s9.6-4.3,9.6-9.6S15.3,0.4,10,0.4C10,0.4,10,0.4,10,0.4z M8.8,13.1H8.5H8.2 L8,12.9l-1.9-1.9l0.9-0.9l1.6,1.6l4.6-4.6l0.9,0.9L8.8,13.1z"
          ></path>
        </g>
      </svg>` : Jt`<svg class="checkmark" viewBox="0 0 20 20">
      <g>
        <circle cy="10" cx="10" r="8" fill="transparent" stroke="#D6D6D6"></circle>
      </g>
    </svg>`
								}
								renderSearchResults() {
									return this.userSearchQuery.data ? 0 === this.userSearchQuery.data.length ? Jt`<div class="search-results-empty">
        ${Es("No users found",{desc:"Users multiselect: no users found message"})}
      </div>` : ci(this.userSearchQuery.data, e => e.user_id, e => Jt`<button class="search-result" @click="${()=>this.handleOptionClick(e)}">
          ${hg(this.avatars.getAvatar(e.user_id),"xs")} ${e.display_name}
          ${this.renderCheckmark(this.isUserSelected(e.user_id))}
        </button>`) : null
								}
								renderValue() {
									return ci(this.value, e => e.user_id, e => Jt`<div
          class="input-bar-item"
          tabindex="0"
          @keydown="${t=>this.handleSelectedItemKeyDown(t,e)}"
        >
          ${e.display_name}
        </div>`)
								}
								render() {
									return Jt`
      <div class="input-bar">
        ${this.renderValue()}
        <input
          class="search-input"
          type="text"
          placeholder="${0===this.value.length?Es("Type usernames",{desc:"Users multiselect: placeholder text"}):""}"
          @keydown="${this.handleSearchInputKeyDown}"
          @input="${()=>this.handleUserInput()}"
        />
      </div>
      ${this.renderSearchResults()}
    `
								}
							}; oy.formAssociated = !0, v([xr({
								type: Array
							})], oy.prototype, "value", 2), v([Sr("input")], oy.prototype, "searchInput", 2), oy = v([_r("rs-users-multiselect")], oy);
							var iy = _t`.invite-container{border-radius:8px;background:var(--color-input-default);padding:var(--rem12);display:flex;justify-content:space-between;align-items:center}.title-icon{display:flex;align-items:center}.invite-icon{font:var(--font-24);margin-right:var(--rem20)}.invite-link-wrapper{margin-top:var(--rem32)}`, ay = (Zn("icon-link", Kt`${Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M14.052 12.5a3.726 3.726 0 01-1.075 2.409c-.471.471-.914.922-1.357 1.373-.443.451-.881.9-1.348 1.366a3.767 3.767 0 01-5.318 0 3.765 3.765 0 010-5.317c.472-.472.915-.923 1.358-1.374.443-.451.88-.9 1.348-1.365a3.858 3.858 0 014.192-.745l.8-.806.129-.131a4.95 4.95 0 00-6 .8c-.472.471-.915.922-1.357 1.373-.442.451-.881.9-1.35 1.365a5.02 5.02 0 000 7.086 5.017 5.017 0 007.086 0c.47-.471.913-.923 1.357-1.374.444-.451.88-.9 1.348-1.366a5.006 5.006 0 001.374-4.483L14.052 12.5z"/><path d="M15.93 1.467a5.01 5.01 0 00-7.085 0c-.471.471-.913.923-1.357 1.374-.444.451-.881.9-1.347 1.366a4.969 4.969 0 00-1.377 4.484L5.946 7.5a3.723 3.723 0 011.077-2.41c.47-.471.914-.922 1.357-1.373.443-.451.88-.9 1.348-1.366a3.76 3.76 0 115.317 5.318c-.471.471-.913.922-1.357 1.373-.444.451-.88.9-1.348 1.366a3.854 3.854 0 01-4.192.744c-.27.273-.543.548-.806.817l-.121.121a4.952 4.952 0 006-.8c.47-.471.913-.922 1.356-1.374.443-.452.88-.9 1.348-1.365a5.013 5.013 0 000-7.086l.005.002z"/></svg>')}`, Kt`${Sn('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_473_119)"><path d="M17.547 5.239a5.2 5.2 0 01-1.535 3.705c-.442.441-.858.866-1.274 1.289-.438.447-.876.893-1.342 1.359a5.175 5.175 0 01-5.981.993l1.57-1.57a3.292 3.292 0 003-.838c.461-.461.9-.9 1.329-1.344.429-.444.84-.857 1.287-1.3a3.238 3.238 0 10-4.58-4.58c-.456.454-.883.89-1.311 1.326-.428.436-.856.865-1.31 1.321-.028.029-.047.063-.075.092l.038-.136-2.856 2.876a5.208 5.208 0 011.48-4.249c.45-.449.871-.879 1.293-1.309.422-.43.865-.881 1.324-1.34a5.24 5.24 0 017.408 0 5.2 5.2 0 011.535 3.705zm-4.764 8.942c-.062.074-.115.155-.184.224-.447.447-.868.876-1.287 1.3-.419.424-.868.883-1.329 1.344a3.317 3.317 0 01-4.581 0 3.244 3.244 0 010-4.58c.453-.453.88-.888 1.306-1.322.426-.434.855-.872 1.311-1.326a3.181 3.181 0 013.018-.859l1.536-1.555a5.173 5.173 0 00-5.968 1c-.459.459-.892.9-1.324 1.34-.432.44-.843.86-1.293 1.309a5.24 5.24 0 007.412 7.41c.466-.466.9-.912 1.342-1.359.416-.423.832-.848 1.274-1.289a5.2 5.2 0 001.535-3.7 5.287 5.287 0 00-.064-.655l-2.704 2.718z"/></g><defs><clipPath id="clip0_473_119"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`), class extends yr {
								constructor() {
									super(...arguments), this.matrix = new bn(this), this.changeJoinRule = () => {
										var e, t, r, n;
										(null == (t = null == (e = this.shadowRoot) ? void 0 : e.querySelector("#invite-via-link-toggle")) ? void 0 : t.hasAttribute("checked")) ? null == (n = this.matrix) || n.client.sendStateEvent(this.room.roomId, zr.RoomJoinRules, {
											join_rule: "private"
										}): null == (r = this.matrix) || r.client.sendStateEvent(this.room.roomId, zr.RoomJoinRules, {
											join_rule: "public"
										})
									}, this.copyToClipboard = () => {
										let e = document.body.scrollTop,
											t = document.body.scrollLeft,
											r = document.createElement("textarea");
										r.value = window.location.href, document.body.appendChild(r), r.select();
										try {
											document.execCommand("copy"), this.dispatchEvent(new Ms({
												level: Ds.info,
												message: Es("Link copied!", {
													desc: "Room settings/ Invite people: Link copied notification"
												})
											}))
										} catch {
											return this.dispatchEvent(new Ms({
												level: Ds.error,
												message: Es("Could not copy the link", {
													desc: "Room settings/ Invite people: ould not copy the link alert"
												})
											})), !1
										}
										return document.body.removeChild(r), document.body.scrollTop = e, document.body.scrollLeft = t, !0
									}
								}
								static get styles() {
									return [oo, iy]
								}
								connectedCallback() {
									super.connectedCallback(), this.matrix.on(Mr.Event, e => {
										e.getType() === zr.RoomJoinRules && this.requestUpdate()
									})
								}
								render() {
									var e, t;
									return Jt`
      <div class="invite-via-link-group">
        <div class="invite-via-link-toggle invite-container">
          <div class="title-icon">
            <icon-chat-group class="invite-icon"></icon-chat-group>
            <p>
              ${Es("Group join via invite link",{desc:"Room settings / Invite people: join rule toggle"})}
            </p>
          </div>
          <faceplate-switch-input
            name="my_pref"
            id="invite-via-link-toggle"
            .checked="${"public"===(null==(e=this.room)?void 0:e.getJoinRule())}"
            @input="${this.changeJoinRule}"
          ></faceplate-switch-input>
        </div>
        ${"public"===(null==(t=this.room)?void 0:t.getJoinRule())?Jt`
              <div class="invite-link-wrapper invite-container">
                <div class="title-icon">
                  <icon-link class="invite-icon"></icon-link>
                  <p>
                    ${Es("Invite with link",{desc:"Room settings / Invite people: Invite with link"})}
                  </p>
                </div>
                ${fn({appearance:"primary",children:Es("Copy",{desc:"Room settings / Invite people: Copy button"}),attributes:{type:"button",onclick:()=>this.copyToClipboard()}})}
              </div>
            `:null}
      </div>
    `
								}
							}); v([xr({
								type: Object
							})], ay.prototype, "room", 2), ay = v([_r("rs-room-settings-invite-link")], ay);
							var sy = _t`h2{font:var(--font-title-h2)}form{display:flex;flex-direction:column;gap:var(--spacer-xs)}.buttons{flex:1;display:flex;flex-direction:row-reverse;align-items:end;gap:var(--spacer-sm);margin:var(--spacer-sm) 0}`, ly = class extends(mn(yr)) {
								constructor() {
									super(...arguments), this.handleFormSubmit = ey(async e => {
										if (!this.matrix || !this.room) return;
										let t = JSON.parse(e.users);
										try {
											for (let e of t) await this.matrix.invite(this.room.roomId, e.user_id);
											this.form.reset(), this.dispatchEvent(new Ms({
												level: Ds.info,
												message: t.length > 1 ? Es("Users successfully invited to the room", {
													desc: "Room settings / Invite people: successful message"
												}) : Es("User successfully invited to the room", {
													desc: "Room settings / Invite people: successful message"
												})
											}))
										} catch {
											this.dispatchEvent(new Ms({
												level: Ds.error,
												message: Es("Unable to invite one or more users", {
													desc: "Room settings / Invite people: error message"
												})
											}))
										}
									})
								}
								static get styles() {
									return [oo, sy]
								}
								render() {
									let e = this.usersMultiSelect ? this.usersMultiSelect.value.length : 0;
									return Jt`<h2>
        ${Es("Invite people",{id:"invite-section-title",desc:"Room settings / Invite people: title"})}
      </h2>
      <rs-room-settings-invite-link .room="${this.room}"></rs-room-settings-invite-link>
      <form @submit="${this.handleFormSubmit}">
        <rs-users-multiselect
          id="users"
          name="users"
          @change="${()=>this.requestUpdate()}"
        ></rs-users-multiselect>
        <div class="buttons">
          ${fn({appearance:"primary",size:an.Small,children:Es("Invite",{desc:"Room settings / Invite people: Invite button"}),attributes:{type:"submit",disabled:0===e||void 0}})}
        </div>
      </form>`
								}
							}; v([xr({
								type: Object
							})], ly.prototype, "room", 2), v([Sr("form")], ly.prototype, "form", 2), v([Sr("rs-users-multiselect")], ly.prototype, "usersMultiSelect", 2), ly = v([_r("rs-room-settings-invite")], ly);
							var cy = !1; Promise.resolve();

							function uy() {
								let e = document.activeElement;
								return e ? function(e) {
									let t = e;
									for (; t && t.shadowRoot && t.shadowRoot.activeElement;) t = t.shadowRoot.activeElement;
									return t
								}(e) : null
							}

							function dy() {
								let e = uy();
								return e instanceof HTMLElement ? e : null
							}

							function hy(e) {
								let t = e.hasAttribute("tabindex");
								e.blur(), t || e.setAttribute("tabindex", "0"), e.focus(), t || e.removeAttribute("tabindex")
							}

							function py(e) {
								cy || (cy = !0, hy(e), new Promise(t => {
									setTimeout(() => {
										let r = uy();
										e !== r && hy(e), cy = !1, t()
									})
								}))
							}
							var fy, vy, my = new class {
								constructor(e) {
									this._opts = e, this._frames = []
								}
								get top() {
									return this._frames[this._frames.length - 1]
								}
								add(e) {
									let t = this.top;
									this._frames.push(e), t ? this._opts.framePaused && this._opts.framePaused(t) : this._opts.stackEntered && this._opts.stackEntered(e), this._opts.frameAdded && this._opts.frameAdded(e)
								}
								_pop() {
									let e = this._frames.pop();
									if (!e) return;
									let t = this.top;
									this._opts.frameRemoved && this._opts.frameRemoved(e), t ? this._opts.frameResumed && this._opts.frameResumed(t) : this._opts.stackExited && this._opts.stackExited(e)
								}
								remove(e) {
									let t = this._frames.indexOf(e);
									t < 0 || (t === this._frames.length - 1 ? this._pop() : (this._frames.splice(t, 1), this._opts.frameRemoved && this._opts.frameRemoved(e)))
								}
							}({
								stackEntered() {
									vy = dy(), document.body.style.pointerEvents && (fy = document.body.style.pointerEvents), document.body.style.pointerEvents = "none", window.addEventListener("keydown", gy), window.addEventListener("focusin", yy)
								},
								stackExited(e) {
									vy ? py(vy) : e.blur(), fy ? document.body.style.pointerEvents = fy : document.body.style.removeProperty("pointer-events"), window.removeEventListener("keydown", gy), window.removeEventListener("focusin", yy)
								},
								frameAdded(e) {
									e.inFocusTrap = !0, e.focusManager.refresh(), e.focusManager.focus()
								},
								frameRemoved(e) {
									e.inFocusTrap = !1
								},
								framePaused(e) {
									e.focusManager.saveFocus()
								},
								frameResumed(e) {
									e.focusManager.restoreFocus()
								}
							});

							function gy(e) {
								let t = my.top;
								!t || ("Escape" === e.key ? (e.stopPropagation(), t.close()) : function(e, t) {
									if ("Tab" !== e.key) return;
									if (t.focusManager.size < 1) return e.preventDefault();
									let r = dy();
									if (r) {
										if (1 === t.focusManager.size && r === t.focusManager.first) return e.preventDefault();
										if (e.shiftKey) {
											if (r === t.focusManager.first) t.focusManager.focusLast(), e.preventDefault()
										} else if (r === t.focusManager.last) t.focusManager.focusFirst(), e.preventDefault()
									}
								}(e, t))
							}

							function yy(e) {
								let t = my.top;
								t && function(e, t) {
									let r = dy();
									!r || r === t || t.focusManager.has(r) || t.focusManager.focusFirst() && e.preventDefault()
								}(e, t)
							}
							var by = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", '[tabindex="0"]', "[faceplate-focusable]"].join(","), _y = Jt`
  <style>
    :host {
      top: 50%;
      transform: translateY(-50%);
      position: fixed;
    }
  </style>
`, wy = Jt`
  <style>
    :host {
      position: absolute;
    }
  </style>
`, xy = class extends yr {
								constructor() {
									super(...arguments), this.focusManager = new class extends class {
										constructor(e) {
											this._focusableElements = null, this._firstFocusable = null, this._lastFocusable = null, this._savedFocusable = null, this._target = e
										}
										get size() {
											var e;
											return (null === (e = this._focusableElements) || void 0 === e ? void 0 : e.size) || 0
										}
										get first() {
											return this._firstFocusable
										}
										get last() {
											return this._lastFocusable
										}
										_focusTarget(e) {
											var t;
											return e ? (py(e), !0) : (null === (t = dy()) || void 0 === t || t.blur(), !1)
										}
										_getActiveInternalElement() {
											if (!this._focusableElements) return null;
											let e = dy();
											return e && this._focusableElements.has(e) ? e : null
										}
										has(e) {
											var t;
											return (null === (t = this._focusableElements) || void 0 === t ? void 0 : t.has(e)) || !1
										}
										refresh() {
											let e = this._target.querySelectorAll(by),
												t = [];
											if (e.length) {
												for (let r = 0; r < e.length; r++) {
													let n = e[r];
													if ("delegatedFocusElements" in n) {
														let e = n.delegatedFocusElements;
														if (e)
															for (let r of e) t.push(r)
													} else t.push(n)
												}
												this._firstFocusable = t[0], this._lastFocusable = t[t.length - 1], this._focusableElements = new Set(t)
											}
										}
										focus() {
											if (this._focusableElements)
												for (let e of this._focusableElements)
													if (e.autofocus) return py(e), !0;
											return this._focusTarget(this._firstFocusable)
										}
										blur() {
											var e;
											null === (e = this._savedFocusable) || void 0 === e || e.blur()
										}
										focusFirst() {
											return this._focusTarget(this._firstFocusable)
										}
										focusLast() {
											return this._focusTarget(this._lastFocusable)
										}
										saveFocus() {
											this._savedFocusable = this._getActiveInternalElement()
										}
										restoreFocus() {
											this._focusTarget(this._savedFocusable)
										}
									} {
										constructor(e, t) {
											super(t), e.addController(this)
										}
										hostConnected() {
											this.refresh()
										}
									}(this, this), this.open = !1, this.returnValue = "", this.modal = !1, this._inFocusTrap = !1
								}
								get inFocusTrap() {
									return this._inFocusTrap
								}
								set inFocusTrap(e) {
									if (this._inFocusTrap !== e)
										if (this._inFocusTrap = e, e) {
											let e = window.getComputedStyle(this).boxShadow;
											e && (this.dataset.faceplateDialogPreviousShadow = e, this.style.boxShadow = `${e}, 0 0 0 max(100vw, 100vh) var(--color-scrim)`)
										} else this.dataset.faceplateDialogPreviousShadow ? this.style.boxShadow = this.dataset.faceplateDialogPreviousShadow : this.style.removeProperty("boxShadow")
								}
								get isFocusEnabled() {
									return this === my.top
								}
								disconnectedCallback() {
									this.modal && my.remove(this)
								}
								close(e) {
									void 0 !== e && (this.returnValue = e);
									let t = po("faceplate-close");
									this.dispatchEvent(t), !t.defaultPrevented && (this.open = !1, this.modal && my.remove(this))
								}
								show() {
									this.modal = !1, this.open = !0, this.focusManager.focusFirst()
								}
								showModal() {
									if (this.open) throw new Error('The element already has an "open" attribute, and therefore cannot be opened modally');
									this.modal = !0, this.open = !0, my.add(this)
								}
								static get styles() {
									return _t`
      :host {
        display: none;
        left: 0;
        right: 0;
        width: -moz-fit-content;
        width: fit-content;
        background: var(--color-ui-modalbackground);
        border-radius: 4px;
        margin: auto;
        padding: 1rem;
        box-shadow: var(--boxshadow-modal);
        pointer-events: all;
        max-width: 95vw;
        max-height: 95vh;
        overflow: auto;
      }

      :host([open]) {
        display: block;
        z-index: 1;
      }

      .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
      }
    `
								}
								render() {
									return Jt`
      ${this.modal?_y:wy}
      <div class=${this.modal?"backdrop":""}></div>
      <slot></slot>
    `
								}
							}; $n([xr({
								type: Boolean,
								reflect: !0
							})], xy.prototype, "open", void 0), $n([xr({
								type: Boolean,
								attribute: !1
							})], xy.prototype, "modal", void 0), $n([kr()], xy.prototype, "inFocusTrap", null), xy = $n([_r("faceplate-dialog")], xy);
							var ky = _t`faceplate-dialog{padding:0;width:450px;z-index:var(--layer-modal)}header{font:var(--font-title-h4);padding:var(--spacer-xs) var(--spacer-md);border-bottom:1px solid var(--color-tone-5);display:flex;align-items:center;justify-content:space-between}header button{margin-right:calc(-1 * var(--spacer-xs))}main{padding:var(--spacer-md);font:var(--font-body)}footer{display:flex;flex-direction:row-reverse;padding:var(--spacer-md);gap:var(--spacer-sm);background-color:var(--color-tone-5)}`, Ey = class extends yr {
									constructor() {
										super(...arguments), this.open = !1, this.dispatchConfirmEvent = () => {
											this.dispatchEvent(new CustomEvent("confirm"))
										}, this.dispatchCancelEvent = () => {
											this.dispatchEvent(new CustomEvent("cancel"))
										}, this.handleFaceplateClose = () => {
											this.open && this.dispatchCancelEvent()
										}
									}
									static get styles() {
										return [oo, ky]
									}
									updated(e) {
										var t, r, n, o;
										super.updated(e), e.has("open") && (this.open ? null == (r = null == (t = this.shadowRoot) ? void 0 : t.querySelector("faceplate-dialog")) || r.showModal() : null == (o = null == (n = this.shadowRoot) ? void 0 : n.querySelector("faceplate-dialog")) || o.close())
									}
									render() {
										return Jt`
      <faceplate-dialog @faceplate-close="${this.handleFaceplateClose}">
        <header>
          <slot name="header">${Es("Are you sure?",{desc:"Confirmation modal: title"})}</slot>
          ${fn({appearance:"plain",size:an.Small,attributes:{className:"text-tone-2 w-xl",type:"button",onclick:this.dispatchCancelEvent},leadingIcon:Jt` < icon - close > < /icon-close>`})} <
											/header> <
											main >
											<
											slot > < /slot> <
											/main> <
											footer >
											$ {
												fn({
													appearance: "primary",
													size: an.Small,
													children: Jt`<slot name="confirm">${Es("Ok",{desc:"Ok button label"})}</slot>`,
													attributes: {
														type: "button",
														onclick: this.dispatchConfirmEvent
													}
												})
											}
										$ {
											fn({
												size: an.Small,
												children: Jt`<slot name="cancel">${Es("Cancel",{desc:"Cancel button"})}</slot>`,
												attributes: {
													type: "button",
													onclick: this.dispatchCancelEvent
												}
											})
										} <
										/footer> <
										/faceplate-dialog>
										`}};v([xr({type:Boolean})],Ey.prototype,"open",2),Ey=v([_r("rs-confirmation-modal")],Ey);var Sy=class extends CustomEvent{constructor(e){super("leave-room",{detail:e,bubbles:!0,composed:!0})}},Oy=_t`
										button {
											padding: var (--size - xs) var (--size - sm);text - align: left;border: 0;border - radius: var (--size - xs);background - color: var (--color - tone - 7);width: 100 %
										}
										button.active {
											background - color: var (--color - tone - 6)
										}
										button: hover {
											background - color: var (--color - tone - 6)
										}
										`,Cy=class extends yr{constructor(){super(...arguments),this.isConfirmationOpen=!1,this.leaveChat=async()=>{if(!this.room)return;this.isConfirmationOpen=!1;let e=this.room.roomId,t=this.room.getMembers().length;await this.room.client.leave(e),this.dispatchEvent(new Sy(this.room)),fo(this,(({id:e,type:t,number_members:r,shown_history:n})=>So({source:"chat_settings",action:"confirm",noun:"leave_chat"},{chat:{id:e,type:t,number_members:r,shown_history:n}}))({id:e,type:2===t?"direct":"group",number_members:t}))}}static get styles(){return[Oy]}render(){return Jt` <
										button @click = "${()=>this.isConfirmationOpen=!0}" >
											$ {
												Es("Leave room", {
													desc: "Settings navigation: Leave room"
												})
											} <
											/button> <
											rs - confirmation - modal ?
											open = "${this.isConfirmationOpen}"
										@confirm = $ {
											this.leaveChat
										}
										@cancel = "${()=>this.isConfirmationOpen=!1}" >
											<
											span slot = "header" > $ {
												Es("Leave room?", {
													desc: "Leave room: modal header"
												})
											} < /span> <
											span slot = "confirm" > $ {
												Es("Yes, Leave", {
													desc: "Leave room: primary button"
												})
											} < /span>
										$ {
											Es("Once you leave, you won't get new messages and will need another invite to rejoin.", {
												desc: "Leave room: description text"
											})
										} <
										/rs-confirmation-modal>
										`}};v([xr({type:Object})],Cy.prototype,"room",2),v([kr()],Cy.prototype,"isConfirmationOpen",2),Cy=v([_r("rs-room-settings-leave-chat")],Cy);var Ay=_t`: host {
											background - color: var (--color - ui - modalbackground);
											display: grid;
											grid - template - columns: 220 px 1 fr;
											height: 100 % ;
											overflow: auto
										}
										@media(min - width: 768 px) {
											: host {
												grid - template - columns: 300 px 1 fr
											}
										}
										nav {
											box - sizing: border - box;
											border - right: 1 px solid
											var (--color - tone - 5);
											display: flex;
											flex - direction: column;
											padding: var (--spacer - sm);
											height: 100 % ;
											overflow: auto
										}
										nav > button {
											padding: var (--size - xs) var (--size - sm);text - align: left;border: 0;border - radius: var (--size - xs);background - color: var (--color - tone - 7)
										}
										nav > button.active {
											background - color: var (--color - tone - 6)
										}
										nav > button: hover {
											background - color: var (--color - tone - 6)
										}
										header {
											margin - bottom: var (--spacer - md);
											display: flex;
											align - items: center;
											gap: var (--size - 2 xs)
										}
										header h3 {
											font: var (--font - title - h3);margin: 0
										}.content {
											background - color: var (--color - tone - 7);
											overflow - y: auto
										}.wrapper {
											width: 100 % ;padding: 0
											var (--spacer - md);max - width: 694 px;margin: 0 auto;box - sizing: border - box
										}
										`,Dy=class extends yr{constructor(){super(...arguments),this.route="about",this.closeSettings=()=>{let e=new CustomEvent("close-settings");this.dispatchEvent(e)}}static get styles(){return[oo,Ay]}connectedCallback(){super.connectedCallback(),fo(this,(({id:e})=>So({source:"chat_settings",action:"view",noun:"chat_settings"},{chat:{id:e}}))({id:this.room.roomId}))}isDmRoom(){let e=this.room.client.getAccountData(zr.Direct);if(!e)return!1;let t=e.getContent();return Object.values(t).flat().includes(this.room.roomId)}shouldShowInvite(){return this.room.canInvite(this.room.myUserId)&&!this.isDmRoom()}render(){return Jt` <
										nav >
											<
											header >
											$ {
												fn({
													appearance: "plain",
													size: an.Small,
													attributes: {
														className: "text-tone-2",
														type: "button",
														onclick: () => this.closeSettings()
													},
													leadingIcon: Jt`<icon-back></icon-back>`
												})
											} <
											h3 > $ {
												Es("Settings", {
													desc: "Settings: title"
												})
											} < /h3> <
											/header> <
											button
										type = "button"
										class = $ {
											wn({
												active: "about" === this.route
											})
										}
										@click = "${()=>this.route="
										about "}" >
											$ {
												Es("About", {
													id: "settings-navigation-about",
													desc: "Settings navigation: About"
												})
											} <
											/button>
										$ {
											this.shouldShowInvite() ? Jt`<button
              type="button"
              class=${wn({active:"invite"===this.route})}
              @click="${()=>this.route="invite"}"
            >
              ${Es("Invite people",{id:"settings-navigation-invite",desc:"Settings navigation: Invite people"})}
            </button>` : ""
										} <
										rs - room - settings - leave - chat
											.room = "${this.room}"
										@leave - room = "${this.closeSettings}" >
											< /rs-room-settings-leave-chat> <
											/nav> <
											section class = "content" >
											<
											div class = "wrapper" >
											$ {
												"about" === this.route ? Jt`<rs-room-settings-about room="${this.room.roomId}"></rs-room-settings-about>` : null
											}
										$ {
											"invite" === this.route ? Jt`<rs-room-settings-invite .room="${this.room}"></rs-room-settings-invite>` : null
										} <
										/div> <
										/section>
										`}};v([xr({type:Object})],Dy.prototype,"room",2),v([kr()],Dy.prototype,"route",2),Dy=v([_r("rs-room-settings")],Dy);var $y=_t`: host {
											text - align: center
										}
										`,Ry=({id:e})=>So({source:"invitation_inbox",action:"click",noun:"invitation_accept"},{chat:{id:e}}),jy=class extends(mn(yr)){constructor(){super(...arguments),this.acceptInvitation=async()=>{if(this.matrix){if(this.urlJoinRoomId){let e=this.urlJoinRoomId;try{return await this.matrix.joinRoom(e),void fo(this,Ry({id:e}))}catch{return this.dispatchEvent(new Ms({level:Ds.error,message:"Unable to join the room"})),void eo({replace:!0})}}if(this.room)try{await this.matrix.joinRoom(this.room.roomId),fo(this,Ry({id:this.room.roomId}))}catch{this.dispatchEvent(new Ms({level:Ds.error,message:"Unable to join the room"}))}}},this.declineInvitation=async()=>{if(this.urlJoinRoomId&&eo({replace:!0}),this.matrix&&this.room)try{await this.matrix.leave(this.room.roomId),this.dispatchEvent(new Sy(this.room)),fo(this,(({id:e})=>So({source:"invitation_inbox",action:"click",noun:"invitation_decline"},{chat:{id:e}}))({id:this.room.roomId}))}catch{this.dispatchEvent(new Ms({level:Ds.error,message:"Unable to leave the room"}))}}}static get styles(){return[oo,$y]}connectedCallback(){super.connectedCallback(),this.room&&fo(this,(({id:e})=>So({source:"invitation_inbox",action:"view",noun:"invitation"},{chat:{id:e}}))({id:this.room.roomId}))}render(){return Jt` < p >
											$ {
												Es("You have been invited to this room. Do you want to accept the invitation?", {
													desc: "Invitation message"
												})
											} <
											/p> <
											div class = "flex flex-row justify-center gap-xs" >
											$ {
												fn({
													appearance: "primary",
													size: an.Small,
													children: Es("Accept", {
														desc: "Button: accept invitation"
													}),
													attributes: {
														onclick: this.acceptInvitation
													}
												})
											}
										$ {
											fn({
												appearance: "secondary",
												size: an.Small,
												children: Es("Decline", {
													desc: "Button: decline invitation"
												}),
												attributes: {
													onclick: this.declineInvitation
												}
											})
										} <
										/div>`}};v([xr({type:Object})],jy.prototype,"room",2),v([xr({type:String})],jy.prototype,"urlJoinRoomId",2),jy=v([_r("rs-room-invite")],jy);var Iy=class extends yr{constructor(){super(...arguments),this.overlays=[]}static get styles(){return _t`: host {
											height: 100 % ;
											overflow: hidden;
										}
										`}updated(e){e.has("room")&&(this.overlays=[],this.requestUpdate())}connectedCallback(){super.connectedCallback(),this.addEventListener(Fs,e=>{this.overlays.push(e.detail),this.requestUpdate()}),this.addEventListener(zs,()=>{this.overlays.pop(),this.requestUpdate()})}render(){var e;return this.overlays.length>0?null==(e=this.overlays.at(-1))?void 0:e.content:Jt` < slot > < /slot>`}};v([xr({type:String})],Iy.prototype,"room",2),Iy=v([_r("rs-room-overlay-manager")],Iy);var Py=_t`:host{height:100%;overflow:hidden}main{display:grid;grid-template-rows:min-content 1fr min-content;height:100%;overflow:auto}rs-timeline{overflow-y:auto}.container{grid-row:2 /
										span 1;
										align - self: center;
										justify - self: center
									}.container.placeholder {
										font - style: italic
									}
									rs - room - settings {
										position: fixed;left: 0;right: 0;top: 0;bottom: 0;z - index: var (--layer - overlay)
									}
									`,Ty=class extends yr{constructor(){super(...arguments),this.isSettingsOpen=!1,this.matrix=new bn(this),this.roomController=new _n(this)}static get styles(){return[oo,Py]}async sendMessage(e){let t=this.roomController.getRoom(),r=await async function(e,t,r){let n=[];if(r.body){let o=e.sendTextMessage(t,r.body).then(({event_id:e})=>({id:e,type:"text"}));n.push(o)}if(r.attachments)for(let o of r.attachments){let r=uo(e,t,o).then(e=>e?{id:e,type:"image"}:null);n.push(r)}return Promise.all(n).then(e=>e.filter(e=>e))}(this.matrix.client,t.roomId,e.detail);this.timeline.scrollToBottom();for(let{id:n,type:o}of r)fo(this,Oo({id:n,type:"group",message_type:o,sender_user_id:this.matrix.client.getUserId()||""}))}connectedCallback(){super.connectedCallback(),this.roomController.on(Vr.Name,()=>{this.requestUpdate()}),this.roomController.on(Vr.MyMembership,()=>{this.requestUpdate()})}async updated(e){super.updated(e);let t=e.has("room")&&this.room!==e.get("room"),r=this.roomController.getRoom();if(t&&r){let e="join"===r.getMyMembership(),t=r.getMembers().length;fo(this,(({id:e,type:t,is_member:r,shown_history:n,number_members:o,number_unreads:i})=>So({source:"chat_view",action:"view",noun:"chat"},{chat:{id:e,type:t,is_member:r,shown_history:n,number_members:o,number_unreads:i}}))({id:r.roomId,type:2===t?"direct":"group",number_members:t,is_member:e}))}}render(){let e=this.roomController.getRoom();return"invite"===(null==e?void 0:e.getMyMembership())?Jt` <
									main >
										$ {
											lo({
												noBorder: !0
											})
										} <
										rs - room - invite class = "container".room = "${e}" > < /rs-room-invite> <
										/main>
									`:Jt` <
									rs - room - overlay - manager room = "${e.roomId}" >
										<
										main >
										$ {
											lo({
												title: e.name,
												buttons: fn({
													appearance: "plain",
													size: an.Small,
													attributes: {
														className: "text-tone-2",
														type: "button",
														onclick: () => this.isSettingsOpen = !this.isSettingsOpen
													},
													leadingIcon: Jt`<icon-settings></icon-settings>`
												}),
												hideButtons: this.hideButtons
											})
										} <
										rs - timeline room = "${e.roomId}"
									@send - message = "${this.sendMessage}" > < /rs-timeline> <
										rs - message - composer @send - message = "${this.sendMessage}" > < /rs-message-composer>
									$ {
										this.isSettingsOpen ? Jt`
                <rs-room-settings
                  .room="${e}"
                  @close-settings="${()=>this.isSettingsOpen=!1}"
                >
                </rs-room-settings>
              ` : null
									} <
									/main> <
									/rs-room-overlay-manager>
									`}};v([xr({type:String})],Ty.prototype,"room",2),v([xr({type:Boolean})],Ty.prototype,"hideButtons",2),v([kr()],Ty.prototype,"isSettingsOpen",2),v([Sr("rs-timeline")],Ty.prototype,"timeline",2),Ty=v([_r("rs-room")],Ty);var My=class extends yr{constructor(){super(...arguments),this.token="",this.uri=""}getActiveRoomsCount(){var e;return(null==(e=this.client)?void 0:e.getRooms().filter(e=>["invite","join"].includes(e.getMyMembership())).length)||0}async initMatrixClient(){this.client=Tr.createClient({baseUrl:this.uri,timelineSupport:!0,useAuthorizationHeader:!0}),this.client.setMaxListeners(1e3),this.client.once(Mr.Sync,async e=>{var t;"PREPARED"===e&&(no(this.getActiveRoomsCount()),null==(t=this.client)||t.on(Mr.Event,e=>{var t;e.getType()===zr.RoomMember&&e.getStateKey()===(null==(t=this.client)?void 0:t.getUserId())&&no(this.getActiveRoomsCount())}),this.dispatchEvent(new jr({name:vn,instance:this.client})))});try{await this.client.login("com.reddit.token",{token:this.token}),await this.client.startClient({initialSyncLimit:10,pollTimeout:3e4}),function(){var e;null==(e=null==window?void 0:window.top)||e.postMessage("matrix-chat.loaded","*")}()}catch(e){this.dispatchEvent(new Ms({level:Ds.error,message:Es("Login attempt failed",{desc:"User login error message"})})),this.dispatchEvent(new Ms({level:Ds.debug,message:"Login attempt failed",meta:e}))}}connectedCallback(){super.connectedCallback(),this.uri&&this.token&&this.initMatrixClient()}};v([xr({type:String})],My.prototype,"token",2),v([xr({type:String})],My.prototype,"uri",2),My=v([_r("rs-matrix-client")],My);var Fy=class extends(Ir(yr)){connectedCallback(){super.connectedCallback(),this.addEventListener($r,e=>{e.target!==this&&e.detail.name===vn&&(this.client=e.detail.instance)})}renderSpinner(){return Jt` <
									div class = "h-full w-full flex items-center justify-center " >
										<
										icon - load size = "lg"
									class = "w-[1.3125rem] h-[1.3125rem] animate-spin" > < /icon-load> <
										/div>
									`}renderRoom(){return Jt` < rs - room room = "${nn(this.roomId)}"
									hideButtons > < /rs-room>`}willUpdate(e){(e.has("client")||e.has("roomId"))&&(this.membership=this.getRoomMembership(),"join"!==this.membership&&this.joinRoom())}getRoomMembership(){if(this.client&&this.roomId){let e=this.client.getRoom(this.roomId);return null==e?void 0:e.getMyMembership()}}async joinRoom(){if(this.client&&this.roomId)try{let e=await this.client.joinRoom(this.roomId);this.client.store.storeRoom(e),e.once(Vr.MyMembership,()=>{this.membership=this.getRoomMembership()})}catch(e){console.log("Failed to join room",e)}}render(){return"join"===this.membership?this.renderRoom():this.renderSpinner()}};v([xr({type:String})],Fy.prototype,"roomId",2),v([kr()],Fy.prototype,"client",2),v([kr()],Fy.prototype,"membership",2),Fy=v([_r("rs-room-wrapper")],Fy);var zy=class extends yr{render(){return Jt` <
										rs - room - wrapper roomId = $ {
											nn(this.roomId)
										} >
										<
										rs - matrix - client
									uri = "https://matrix.redditspace.com"
									token = $ {
											nn(this.accessToken)
										} >
										< /rs-matrix-client> <
										rs - graphql - client
									uri = "https://gql-fed.reddit.com/"
									token = $ {
										nn(this.accessToken)
									}
									persistedQueries
									$ {
										this.debug ? Jt` debug` : ""
									} >
									< /rs-graphql-client> <
									/rs-room-wrapper>
									`}};v([xr({type:String})],zy.prototype,"roomId",2),v([xr({type:String})],zy.prototype,"accessToken",2),v([xr({type:Boolean})],zy.prototype,"debug",2),zy=v([_r("rs-community-room")],zy)}).call(this,r("./node_modules/webpack/buildin/global.js"),r("./node_modules/process/browser.js"),r("./node_modules/webpack/buildin/harmony-module.js")(e))},"./node_modules/webpack/buildin/amd-options.js":function(e,t){(function(t){e.exports=t}).call(this,{})}}]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/vendors~community-room.7d690038da65ff769f94.js.map