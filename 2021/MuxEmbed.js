// https://www.redditstatic.com/desktop2x/MuxEmbed.176473b1ebb816d270d0.js
// Retrieved at 2/28/2021, 9:18:37 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MuxEmbed"], {
		"./node_modules/mux-embed/dist/mux.js": function(e, t, r) {
			e.exports = function(e) {
				function t(a) {
					if (r[a]) return r[a].exports;
					var i = r[a] = {
						i: a,
						l: !1,
						exports: {}
					};
					return e[a].call(i.exports, i, i.exports, t), i.l = !0, i.exports
				}
				var r = {};
				return t.m = e, t.c = r, t.d = function(e, r, a) {
					t.o(e, r) || Object.defineProperty(e, r, {
						configurable: !1,
						enumerable: !0,
						get: a
					})
				}, t.n = function(e) {
					var r = e && e.__esModule ? function() {
						return e.default
					} : function() {
						return e
					};
					return t.d(r, "a", r), r
				}, t.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}, t.p = "", t(t.s = 18)
			}([function(e, t, r) {
				(function(t) {
					var r;
					r = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, e.exports = r
				}).call(t, r(6))
			}, function(e, t) {
				function r(e, t, r) {
					switch (r.length) {
						case 0:
							return e.call(t);
						case 1:
							return e.call(t, r[0]);
						case 2:
							return e.call(t, r[0], r[1]);
						case 3:
							return e.call(t, r[0], r[1], r[2])
					}
					return e.apply(t, r)
				}

				function a(e, t) {
					var r = S(e) || function(e) {
							return function(e) {
								return function(e) {
									return !!e && "object" == typeof e
								}(e) && u(e)
							}(e) && y.call(e, "callee") && (!b.call(e, "callee") || m.call(e) == f)
						}(e) ? function(e, t) {
							for (var r = -1, a = Array(e); ++r < e;) a[r] = t(r);
							return a
						}(e.length, String) : [],
						a = r.length,
						i = !!a;
					for (var o in e) !t && !y.call(e, o) || i && ("length" == o || n(o, a)) || r.push(o);
					return r
				}

				function i(e, t, r) {
					var a = e[t];
					y.call(e, t) && s(a, r) && (void 0 !== r || t in e) || (e[t] = r)
				}

				function n(e, t) {
					return !!(t = null == t ? c : t) && ("number" == typeof e || _.test(e)) && e > -1 && e % 1 == 0 && e < t
				}

				function o(e) {
					var t = e && e.constructor;
					return e === ("function" == typeof t && t.prototype || v)
				}

				function s(e, t) {
					return e === t || e != e && t != t
				}

				function u(e) {
					return null != e && function(e) {
						return "number" == typeof e && e > -1 && e % 1 == 0 && e <= c
					}(e.length) && ! function(e) {
						var t = l(e) ? m.call(e) : "";
						return t == h || t == p
					}(e)
				}

				function l(e) {
					var t = typeof e;
					return !!e && ("object" == t || "function" == t)
				}

				function d(e) {
					return u(e) ? a(e) : function(e) {
						if (!o(e)) return g(e);
						var t = [];
						for (var r in Object(e)) y.call(e, r) && "constructor" != r && t.push(r);
						return t
					}(e)
				}
				var c = 9007199254740991,
					f = "[object Arguments]",
					h = "[object Function]",
					p = "[object GeneratorFunction]",
					_ = /^(?:0|[1-9]\d*)$/,
					v = Object.prototype,
					y = v.hasOwnProperty,
					m = v.toString,
					b = v.propertyIsEnumerable,
					g = function(e, t) {
						return function(r) {
							return e(t(r))
						}
					}(Object.keys, Object),
					w = Math.max,
					x = !b.call({
						valueOf: 1
					}, "valueOf"),
					S = Array.isArray,
					T = function(e) {
						return function(e, t) {
							return t = w(void 0 === t ? e.length - 1 : t, 0),
								function() {
									for (var a = arguments, i = -1, n = w(a.length - t, 0), o = Array(n); ++i < n;) o[i] = a[t + i];
									i = -1;
									for (var s = Array(t + 1); ++i < t;) s[i] = a[i];
									return s[t] = o, r(e, this, s)
								}
						}((function(t, r) {
							var a = -1,
								i = r.length,
								o = i > 1 ? r[i - 1] : void 0,
								d = i > 2 ? r[2] : void 0;
							for (o = e.length > 3 && "function" == typeof o ? (i--, o) : void 0, d && function(e, t, r) {
									if (!l(r)) return !1;
									var a = typeof t;
									return !!("number" == a ? u(r) && n(t, r.length) : "string" == a && t in r) && s(r[t], e)
								}(r[0], r[1], d) && (o = i < 3 ? void 0 : o, i = 1), t = Object(t); ++a < i;) {
								var c = r[a];
								c && e(t, c)
							}
							return t
						}))
					}((function(e, t) {
						if (x || o(t) || u(t)) ! function(e, t, r, a) {
							r || (r = {});
							for (var n = -1, o = t.length; ++n < o;) {
								var s = t[n],
									u = a ? a(r[s], e[s], s, r, e) : void 0;
								i(r, s, void 0 === u ? e[s] : u)
							}
						}(t, d(t), e);
						else
							for (var r in t) y.call(t, r) && i(e, r, t[r])
					}));
				e.exports = T
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e, t, r) {
					r = void 0 === r ? 1 : r, e[t] = e[t] || 0, e[t] += r
				}
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var a = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(r(0)),
					i = {
						now: function() {
							var e = a.default.performance,
								t = e && e.timing;
							return t && "number" == typeof t.navigationStart && "function" == typeof e.now ? t.navigationStart + e.now() : Date.now()
						}
					};
				t.default = i
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var a = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(r(20)),
					i = a.default.methodFactory;
				a.default.methodFactory = function(e, t, r) {
					var a = i(e, t, r);
					return function() {
						for (var e = ["[mux]"], t = 0; t < arguments.length; t++) e.push(arguments[t]);
						a.apply(void 0, e)
					}
				}, a.default.setLevel(a.default.getLevel()), t.default = a.default
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var a = function(e) {
					if ("string" != typeof e || "" === e) return ["localhost"];
					var t = (e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [])[4],
						r = void 0;
					return t && (r = (t.match(/[^\.]+\.[^\.]+$/) || [])[0]), [t, r]
				};
				t.extractHostnameAndDomain = a, t.extractHostname = function(e) {
					return a(e)[0]
				}, t.extractDomain = function(e) {
					return a(e)[1]
				}
			}, function(e, t) {
				var r;
				r = function() {
					return this
				}();
				try {
					r = r || Function("return this")() || (0, eval)("this")
				} catch (e) {
					"object" == typeof window && (r = window)
				}
				e.exports = r
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.generateUUID = function() {
					return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
						var t = 16 * Math.random() | 0;
						return ("x" === e ? t : 3 & t | 8).toString(16)
					}))
				}, t.generateShortID = function() {
					return ("000000" + (Math.random() * Math.pow(36, 6) << 0).toString(36)).slice(-6)
				}
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e) {
					e = (e = e || "").match(/[^\r\n]+/g) || [];
					for (var t = {}, r = 0; r < e.length; r++) {
						var a = e[r].split(/\s*:\s*(.+)/);
						3 === a.length && (t[a[0]] = a[1])
					}
					return t
				}
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.findMediaElement = t.getMuxPlayerId = void 0;
				var a = r(7),
					i = function(e) {
						return e && void 0 !== e.nodeName ? (e.muxId || (e.muxId = e.id || (0, a.generateShortID)()), e.muxId) : e
					};
				t.getMuxPlayerId = i, t.findMediaElement = function(e) {
					var t = void 0;
					return e && void 0 !== e.nodeName ? e = i(t = e) : t = document.querySelector(e), [t, e, t && t.nodeName ? t.nodeName.toLowerCase() : ""]
				}
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function() {
					return "1" === (a.default.doNotTrack || a.default.navigator && (a.default.navigator.doNotTrack || a.default.navigator.msDoNotTrack))
				};
				var a = function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}(r(0))
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var a = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(r(0)),
					i = {
						exists: function() {
							var e = a.default.performance;
							return void 0 !== (e && e.timing)
						},
						domContentLoadedEventEnd: function() {
							var e = a.default.performance,
								t = e && e.timing;
							return t && t.domContentLoadedEventEnd
						},
						navigationStart: function() {
							var e = a.default.performance,
								t = e && e.timing;
							return t && t.navigationStart
						}
					};
				t.default = i
			}, function(e, t, r) {
				(function(t) {
					var a, i = void 0 !== t ? t : "undefined" != typeof window ? window : {},
						n = r(23);
					"undefined" != typeof document ? a = document : (a = i["__GLOBAL_DOCUMENT_CACHE@4"]) || (a = i["__GLOBAL_DOCUMENT_CACHE@4"] = n), e.exports = a
				}).call(t, r(6))
			}, function(e, t) {
				e.exports = function(e) {
					return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
						enumerable: !0,
						get: function() {
							return e.l
						}
					}), Object.defineProperty(e, "id", {
						enumerable: !0,
						get: function() {
							return e.i
						}
					}), e.webpackPolyfill = 1), e
				}
			}, function(e, t, r) {
				"use strict";
				var a = r(42),
					i = r(43),
					n = r(16);
				e.exports = {
					formats: n,
					parse: i,
					stringify: a
				}
			}, function(e, t, r) {
				"use strict";
				var a = Object.prototype.hasOwnProperty,
					i = function() {
						for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
						return e
					}();
				t.arrayToObject = function(e, t) {
					for (var r = t && t.plainObjects ? Object.create(null) : {}, a = 0; a < e.length; ++a) void 0 !== e[a] && (r[a] = e[a]);
					return r
				}, t.merge = function(e, r, i) {
					if (!r) return e;
					if ("object" != typeof r) {
						if (Array.isArray(e)) e.push(r);
						else {
							if ("object" != typeof e) return [e, r];
							(i.plainObjects || i.allowPrototypes || !a.call(Object.prototype, r)) && (e[r] = !0)
						}
						return e
					}
					if ("object" != typeof e) return [e].concat(r);
					var n = e;
					return Array.isArray(e) && !Array.isArray(r) && (n = t.arrayToObject(e, i)), Array.isArray(e) && Array.isArray(r) ? (r.forEach((function(r, n) {
						a.call(e, n) ? e[n] && "object" == typeof e[n] ? e[n] = t.merge(e[n], r, i) : e.push(r) : e[n] = r
					})), e) : Object.keys(r).reduce((function(e, n) {
						var o = r[n];
						return a.call(e, n) ? e[n] = t.merge(e[n], o, i) : e[n] = o, e
					}), n)
				}, t.assign = function(e, t) {
					return Object.keys(t).reduce((function(e, r) {
						return e[r] = t[r], e
					}), e)
				}, t.decode = function(e) {
					try {
						return decodeURIComponent(e.replace(/\+/g, " "))
					} catch (t) {
						return e
					}
				}, t.encode = function(e) {
					if (0 === e.length) return e;
					for (var t = "string" == typeof e ? e : String(e), r = "", a = 0; a < t.length; ++a) {
						var n = t.charCodeAt(a);
						45 === n || 46 === n || 95 === n || 126 === n || n >= 48 && n <= 57 || n >= 65 && n <= 90 || n >= 97 && n <= 122 ? r += t.charAt(a) : n < 128 ? r += i[n] : n < 2048 ? r += i[192 | n >> 6] + i[128 | 63 & n] : n < 55296 || n >= 57344 ? r += i[224 | n >> 12] + i[128 | n >> 6 & 63] + i[128 | 63 & n] : (a += 1, n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(a)), r += i[240 | n >> 18] + i[128 | n >> 12 & 63] + i[128 | n >> 6 & 63] + i[128 | 63 & n])
					}
					return r
				}, t.compact = function(e) {
					for (var t = [{
							obj: {
								o: e
							},
							prop: "o"
						}], r = [], a = 0; a < t.length; ++a)
						for (var i = t[a], n = i.obj[i.prop], o = Object.keys(n), s = 0; s < o.length; ++s) {
							var u = o[s],
								l = n[u];
							"object" == typeof l && null !== l && -1 === r.indexOf(l) && (t.push({
								obj: n,
								prop: u
							}), r.push(l))
						}
					return function(e) {
						for (var t; e.length;) {
							var r = e.pop();
							if (t = r.obj[r.prop], Array.isArray(t)) {
								for (var a = [], i = 0; i < t.length; ++i) void 0 !== t[i] && a.push(t[i]);
								r.obj[r.prop] = a
							}
						}
						return t
					}(t)
				}, t.isRegExp = function(e) {
					return "[object RegExp]" === Object.prototype.toString.call(e)
				}, t.isBuffer = function(e) {
					return null != e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
				}
			}, function(e, t, r) {
				"use strict";
				var a = String.prototype.replace,
					i = /%20/g;
				e.exports = {
					default: "RFC3986",
					formatters: {
						RFC1738: function(e) {
							return a.call(e, i, "+")
						},
						RFC3986: function(e) {
							return e
						}
					},
					RFC1738: "RFC1738",
					RFC3986: "RFC3986"
				}
			}, function(e, t, r) {
				"use strict";

				function a(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}

				function i(e) {
					var t = {};
					for (var r in e) e.hasOwnProperty(r) && (t[e[r]] = r);
					return t
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e) {
					var t = {},
						r = {};
					return Object.keys(e).forEach((function(a) {
						var i = !1;
						if (e.hasOwnProperty(a) && void 0 !== e[a]) {
							var o = a.split("_"),
								l = o[0],
								d = s[l];
							d || (n.default.info("Data key word `" + o[0] + "` not expected in " + a), d = l + "_"), o.splice(1).forEach((function(e) {
								"url" === e && (i = !0), u[e] ? d += u[e] : (n.default.info("Data key word `" + e + "` not expected in " + a), d += "_" + e + "_")
							})), i ? r[d] = e[a] : t[d] = e[a]
						}
					})), (0, o.default)(t, r)
				};
				var n = a(r(4)),
					o = a(r(1)),
					s = i({
						a: "env",
						b: "beacon",
						d: "ad",
						e: "event",
						f: "experiment",
						m: "mux",
						n: "response",
						p: "player",
						q: "request",
						r: "retry",
						s: "session",
						t: "timestamp",
						u: "viewer",
						v: "video",
						w: "page",
						x: "view",
						y: "sub"
					}),
					u = i({
						ad: "ad",
						ag: "aggregate",
						ap: "api",
						al: "application",
						ar: "architecture",
						as: "asset",
						au: "autoplay",
						av: "average",
						bi: "bitrate",
						br: "break",
						bw: "browser",
						by: "bytes",
						ca: "cached",
						cb: "cancel",
						cd: "code",
						cg: "category",
						ch: "changed",
						cn: "config",
						co: "count",
						ce: "counter",
						cp: "complete",
						cr: "creative",
						ct: "content",
						cu: "current",
						cx: "connection",
						dg: "downscaling",
						dm: "domain",
						dn: "cdn",
						do: "downscale",
						du: "duration",
						dv: "device",
						ec: "encoding",
						en: "end",
						eg: "engine",
						em: "embed",
						er: "error",
						es: "errorcode",
						et: "errortext",
						ee: "event",
						ev: "events",
						ex: "expires",
						fi: "first",
						fm: "family",
						ft: "format",
						fq: "frequency",
						fr: "frame",
						fs: "fullscreen",
						he: "headers",
						ho: "host",
						hn: "hostname",
						ht: "height",
						id: "id",
						ii: "init",
						in: "instance",
						ip: "ip",
						is: "is",
						ke: "key",
						la: "language",
						lb: "labeled",
						le: "level",
						li: "live",
						ld: "loaded",
						lo: "load",
						ls: "lists",
						lt: "latency",
						ma: "max",
						md: "media",
						me: "message",
						mi: "mime",
						ml: "midroll",
						mm: "min",
						mn: "manufacturer",
						mx: "mux",
						nm: "name",
						no: "number",
						on: "on",
						os: "os",
						pa: "paused",
						pb: "playback",
						pd: "producer",
						pe: "percentage",
						pf: "played",
						pg: "program",
						ph: "playhead",
						pi: "plugin",
						pl: "preroll",
						po: "poster",
						pr: "preload",
						py: "property",
						ra: "rate",
						rd: "requested",
						re: "rebuffer",
						rf: "rendition",
						ro: "ratio",
						rp: "response",
						rq: "request",
						rs: "requests",
						sa: "sample",
						se: "session",
						sk: "seek",
						sm: "stream",
						so: "source",
						sq: "sequence",
						sr: "series",
						st: "start",
						su: "startup",
						sv: "server",
						sw: "software",
						ta: "tag",
						tc: "tech",
						te: "text",
						th: "throughput",
						ti: "time",
						tl: "total",
						to: "to",
						tt: "title",
						ty: "type",
						ug: "upscaling",
						up: "upscale",
						ur: "url",
						us: "user",
						va: "variant",
						vd: "viewed",
						vi: "video",
						ve: "version",
						vw: "view",
						vr: "viewer",
						wd: "width",
						wa: "watch",
						wt: "waiting"
					})
			}, function(e, t, r) {
				"use strict";
				e.exports = r(19).default
			}, function(e, t, r) {
				"use strict";

				function a(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var i = function(e, t) {
						if (Array.isArray(e)) return e;
						if (Symbol.iterator in Object(e)) return function(e, t) {
							var r = [],
								a = !0,
								i = !1,
								n = void 0;
							try {
								for (var o, s = e[Symbol.iterator](); !(a = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); a = !0);
							} catch (e) {
								i = !0, n = e
							} finally {
								try {
									!a && s.return && s.return()
								} finally {
									if (i) throw n
								}
							}
							return r
						}(e, t);
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					},
					n = a(r(0)),
					o = r(9),
					s = a(r(4)),
					u = a(r(10)),
					l = a(r(3)),
					d = a(r(21)),
					c = a(r(51)),
					f = a(r(52)),
					h = {},
					p = function e(t) {
						var r = arguments;
						"string" == typeof t ? e.hasOwnProperty(t) ? n.default.setTimeout((function() {
							r = Array.prototype.splice.call(r, 1), e[t].apply(null, r)
						}), 0) : s.default.warn("`" + t + "` is an unknown task") : "function" == typeof t ? n.default.setTimeout((function() {
							t(e)
						}), 0) : s.default.warn("`" + t + "` is invalid.")
					};
				p.loaded = l.default.now(), p.VERSION = "3.4.1", p.API_VERSION = "2.1", p.PLAYER_TRACKED = !1, p.monitor = function(e, t) {
					return (0, c.default)(p, e, t)
				}, p.destroyMonitor = function(e) {
					var t = (0, o.findMediaElement)(e),
						r = i(t, 1)[0];
					r && r.mux && "function" == typeof r.mux.destroy ? r.mux.destroy() : s.default.error("A video element monitor for `" + e + "` has not been initialized via `mux.monitor`.")
				}, p.addHLSJS = function(e, t) {
					var r = (0, o.getMuxPlayerId)(e);
					h[r] ? h[r].addHLSJS(t) : s.default.error("A monitor for `" + r + "` has not been initialized.")
				}, p.addDashJS = function(e, t) {
					var r = (0, o.getMuxPlayerId)(e);
					h[r] ? h[r].addDashJS(t) : s.default.error("A monitor for `" + r + "` has not been initialized.")
				}, p.removeHLSJS = function(e) {
					var t = (0, o.getMuxPlayerId)(e);
					h[t] ? h[t].removeHLSJS() : s.default.error("A monitor for `" + t + "` has not been initialized.")
				}, p.removeDashJS = function(e) {
					var t = (0, o.getMuxPlayerId)(e);
					h[t] ? h[t].removeDashJS() : s.default.error("A monitor for `" + t + "` has not been initialized.")
				}, p.init = function(e, t) {
					(0, u.default)() && t && t.respectDoNotTrack && s.default.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");
					var r = (0, o.getMuxPlayerId)(e);
					h[r] = new d.default(p, r, t)
				}, p.emit = function(e, t, r) {
					var a = (0, o.getMuxPlayerId)(e);
					h[a] ? (h[a].emit(t, r), "destroy" === t && delete h[a]) : s.default.error("A monitor for `" + a + "` has not been initialized.")
				}, void 0 !== n.default && "function" == typeof n.default.addEventListener && n.default.addEventListener("unload", (function() {
					p.WINDOW_UNLOADING = !0
				}), !1), p.checkDoNotTrack = u.default, p.log = s.default, p.utils = f.default, t.default = p
			}, function(e, t, r) {
				var a, i;
				! function(n, o) {
					"use strict";
					void 0 !== (i = "function" == typeof(a = function() {
						function e(e, t) {
							var r = e[t];
							if ("function" == typeof r.bind) return r.bind(e);
							try {
								return Function.prototype.bind.call(r, e)
							} catch (t) {
								return function() {
									return Function.prototype.apply.apply(r, [e, arguments])
								}
							}
						}

						function t(t) {
							return "debug" === t && (t = "log"), typeof console !== s && (void 0 !== console[t] ? e(console, t) : void 0 !== console.log ? e(console, "log") : o)
						}

						function r(e, t) {
							for (var r = 0; r < u.length; r++) {
								var a = u[r];
								this[a] = r < e ? o : this.methodFactory(a, e, t)
							}
							this.log = this.debug
						}

						function a(e, t, a) {
							return function() {
								typeof console !== s && (r.call(this, t, a), this[e].apply(this, arguments))
							}
						}

						function i(e, r, i) {
							return t(e) || a.apply(this, arguments)
						}

						function n(e, t, a) {
							function n() {
								var e;
								if (typeof window !== s) {
									try {
										e = window.localStorage[d]
									} catch (e) {}
									if (typeof e === s) try {
										var t = window.document.cookie,
											r = t.indexOf(encodeURIComponent(d) + "=");
										r && (e = /^([^;]+)/.exec(t.slice(r))[1])
									} catch (e) {}
									return void 0 === l.levels[e] && (e = void 0), e
								}
							}
							var o, l = this,
								d = "loglevel";
							e && (d += ":" + e), l.levels = {
								TRACE: 0,
								DEBUG: 1,
								INFO: 2,
								WARN: 3,
								ERROR: 4,
								SILENT: 5
							}, l.methodFactory = a || i, l.getLevel = function() {
								return o
							}, l.setLevel = function(t, a) {
								if ("string" == typeof t && void 0 !== l.levels[t.toUpperCase()] && (t = l.levels[t.toUpperCase()]), !("number" == typeof t && t >= 0 && t <= l.levels.SILENT)) throw "log.setLevel() called with invalid level: " + t;
								if (o = t, !1 !== a && function(e) {
										var t = (u[e] || "silent").toUpperCase();
										if (typeof window !== s) {
											try {
												return void(window.localStorage[d] = t)
											} catch (e) {}
											try {
												window.document.cookie = encodeURIComponent(d) + "=" + t + ";"
											} catch (e) {}
										}
									}(t), r.call(l, t, e), typeof console === s && t < l.levels.SILENT) return "No console available for logging"
							}, l.setDefaultLevel = function(e) {
								n() || l.setLevel(e, !1)
							}, l.enableAll = function(e) {
								l.setLevel(l.levels.TRACE, e)
							}, l.disableAll = function(e) {
								l.setLevel(l.levels.SILENT, e)
							};
							var c = n();
							null == c && (c = null == t ? "WARN" : t), l.setLevel(c, !1)
						}
						var o = function() {},
							s = "undefined",
							u = ["trace", "debug", "info", "warn", "error"],
							l = new n,
							d = {};
						l.getLogger = function(e) {
							if ("string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger.");
							var t = d[e];
							return t || (t = d[e] = new n(e, l.getLevel(), l.methodFactory)), t
						};
						var c = typeof window !== s ? window.log : void 0;
						return l.noConflict = function() {
							return typeof window !== s && window.log === l && (window.log = c), l
						}, l
					}) ? a.call(t, r, t, e) : a) && (e.exports = i)
				}()
			}, function(e, t, r) {
				"use strict";

				function a(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var i = function(e, t) {
						if (Array.isArray(e)) return e;
						if (Symbol.iterator in Object(e)) return function(e, t) {
							var r = [],
								a = !0,
								i = !1,
								n = void 0;
							try {
								for (var o, s = e[Symbol.iterator](); !(a = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); a = !0);
							} catch (e) {
								i = !0, n = e
							} finally {
								try {
									!a && s.return && s.return()
								} finally {
									if (i) throw n
								}
							}
							return r
						}(e, t);
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					},
					n = a(r(4)),
					o = a(r(1)),
					s = r(7),
					u = r(5),
					l = a(r(0)),
					d = a(r(11)),
					c = a(r(2)),
					f = a(r(22)),
					h = r(25),
					p = r(26),
					_ = a(r(27)),
					v = a(r(28)),
					y = a(r(29)),
					m = a(r(30)),
					b = a(r(31)),
					g = a(r(32)),
					w = a(r(33)),
					x = a(r(34)),
					S = a(r(35)),
					T = a(r(36)),
					k = a(r(37)),
					E = a(r(38)),
					O = a(r(39)),
					M = a(r(40)),
					P = a(r(50)),
					A = ["viewstart", "ended", "loadstart", "pause", "play", "playing", "ratechange", "waiting", "adplay", "adpause", "adended", "aderror", "adplaying", "adrequest", "adresponse", "adbreakstart", "adbreakend", "rebufferstart", "rebufferend", "seeked", "error", "hb", "requestcompleted", "requestfailed", "requestcanceled", "renditionchange"],
					D = function(e, t, r) {
						var a = this;
						this.DOM_CONTENT_LOADED_EVENT_END = d.default.domContentLoadedEventEnd(), this.NAVIGATION_START = d.default.navigationStart(), this.mux = e, this.id = t, (r = (0, o.default)({
							debug: !1,
							minimumRebufferDuration: 250,
							sustainedRebufferThreshold: 1e3,
							playbackHeartbeatTime: 25,
							beaconDomain: "litix.io",
							sampleRate: 1,
							disableCookies: !1,
							respectDoNotTrack: !1,
							disableRebufferTracking: !1,
							errorTranslator: function(e) {
								return e
							}
						}, r)).data = r.data || {}, r.data.property_key && (r.data.env_key = r.data.property_key, delete r.data.property_key), n.default.setLevel(r.debug ? "debug" : "warn"), this.getPlayheadTime = r.getPlayheadTime, this.getStateData = r.getStateData || function() {}, this.getAdData = r.getAdData || function() {}, this.minimumRebufferDuration = r.minimumRebufferDuration, this.sustainedRebufferThreshold = r.sustainedRebufferThreshold, this.playbackHeartbeatTime = r.playbackHeartbeatTime, this.disableRebufferTracking = r.disableRebufferTracking, this.disableRebufferTracking && this.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."), this.errorTranslator = r.errorTranslator, this.playbackEventDispatcher = new M.default(e, r.data.env_key, r), this.data = {
							player_instance_id: (0, s.generateUUID)(),
							mux_sample_rate: r.sampleRate,
							beacon_domain: r.beaconDomain
						}, this.data.view_sequence_number = 1, this.data.player_sequence_number = 1, this.oldEmit = this.emit, this.emit = function(e, t) {
							t = (0, o.default)({
								viewer_time: this.mux.utils.now()
							}, t), this.oldEmit(e, t)
						};
						var i = function() {
							void 0 === this.data.view_start && (this.data.view_start = this.mux.utils.now(), this.emit("viewstart"))
						}.bind(this);
						this.on("viewinit", (function(e, t) {
							this._resetVideoData(), this._resetViewData(), this._resetErrorData(), this._updateStateData(), (0, o.default)(this.data, t), this._initializeViewData(), this.one("play", i), this.one("adbreakstart", i)
						}));
						var u = function(e) {
							this.emit("viewend"), this.send("viewend"), this.emit("viewinit", e)
						}.bind(this);
						this.on("videochange", (function(e, t) {
							u(t)
						})), this.on("programchange", (function(e, t) {
							this.data.player_is_paused && this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."), u((0, o.default)(t, {
								view_program_changed: !0
							})), i()
						})), this.on("destroy", this.destroy);
						var c = this.destroy.bind(this);
						void 0 !== l.default && "function" == typeof l.default.addEventListener && l.default.addEventListener("unload", c, !1), this.on("destroy", (function() {
							void 0 !== l.default && "function" == typeof l.default.removeEventListener && l.default.removeEventListener("unload", c)
						})), this.on("playerready", (function(e, t) {
							(0, o.default)(this.data, t)
						})), A.forEach((function(e) {
							a.on(e, (function(t, r) {
								0 !== e.indexOf("ad") && this._updateStateData(), (0, o.default)(this.data, r), this._sanitizeData()
							})), a.on("after" + e, (function() {
								("error" !== e || this.viewErrored) && this.send(e)
							}))
						})), this.on("viewend", (function(e, t) {
							(0, o.default)(a.data, t)
						})), this.one("playerready", (function(e) {
							var t = this.mux.utils.now();
							this.data.player_init_time && (this.data.player_startup_time = t - this.data.player_init_time), !this.mux.PLAYER_TRACKED && this.NAVIGATION_START && (this.mux.PLAYER_TRACKED = !0, (this.data.player_init_time || this.DOM_CONTENT_LOADED_EVENT_END) && (this.data.page_load_time = Math.min(this.data.player_init_time || 1 / 0, this.DOM_CONTENT_LOADED_EVENT_END || 1 / 0) - this.NAVIGATION_START)), this.send("playerready"), delete this.data.player_startup_time, delete this.data.page_load_time
						})), y.default.apply(this), O.default.apply(this), T.default.apply(this), g.default.apply(this), v.default.apply(this), S.default.apply(this), m.default.apply(this), b.default.apply(this), k.default.apply(this), w.default.apply(this), x.default.apply(this), E.default.apply(this), P.default.apply(this), r.hlsjs && this.addHLSJS(r), r.dashjs && this.addDashJS(r), this.emit("viewinit", r.data)
					};
				(0, o.default)(D.prototype, _.default.prototype), (0, o.default)(D.prototype, g.default.prototype), (0, o.default)(D.prototype, T.default.prototype), (0, o.default)(D.prototype, v.default.prototype), (0, o.default)(D.prototype, m.default.prototype), (0, o.default)(D.prototype, b.default.prototype), (0, o.default)(D.prototype, k.default.prototype), (0, o.default)(D.prototype, w.default.prototype), (0, o.default)(D.prototype, x.default.prototype), D.prototype.destroy = function() {
					this._destroyed || (this._destroyed = !0, void 0 !== this.data.view_start && (this.emit("viewend"), this.send("viewend")), this.playbackEventDispatcher.destroy(), this.removeHLSJS(), this.removeDashJS(), l.default.clearTimeout(this._heartBeatTimeout))
				}, D.prototype.send = function(e) {
					var t = (0, o.default)({}, this.data);
					if (1 === t.player_error_code && (delete t.player_error_code, delete t.player_error_message), t.player_source_duration === 1 / 0 || t.video_source_duration === 1 / 0 ? t.video_source_is_live = !0 : (t.player_source_duration > 0 || t.video_source_duration > 0) && (t.video_source_is_live = !1), t.video_source_url = t.video_source_url || t.player_source_url, t.video_source_url) {
						var r = (0, u.extractHostnameAndDomain)(t.video_source_url),
							a = i(r, 2),
							n = a[0],
							s = a[1];
						t.video_source_domain = s, t.video_source_hostname = n
					}
					delete t.ad_request_id, this.playbackEventDispatcher.send(e, t), this.data.view_sequence_number++, this.data.player_sequence_number++, this._restartHeartBeat()
				}, D.prototype._updateStateData = function() {
					(0, o.default)(this.data, this.getStateData()), this.getPlayheadTime && (this.data.player_playhead_time = this.getPlayheadTime()), this._sanitizeData()
				}, D.prototype._sanitizeData = function() {
					var e = this;
					["player_width", "player_height", "video_source_width", "video_source_height", "player_playhead_time", "video_source_bitrate"].forEach((function(t) {
						var r = parseInt(e.data[t], 10);
						e.data[t] = isNaN(r) ? void 0 : r
					})), ["player_source_url", "video_source_url"].forEach((function(t) {
						e.data[t] && 0 === e.data[t].toLowerCase().indexOf("data:") && (e.data[t] = "MSE style URL")
					}))
				}, D.prototype._resetVideoData = function(e, t) {
					var r = this;
					Object.keys(this.data).forEach((function(e) {
						0 === e.indexOf("video_") && delete r.data[e]
					}))
				}, D.prototype._resetViewData = function() {
					var e = this;
					Object.keys(this.data).forEach((function(t) {
						0 === t.indexOf("view_") && delete e.data[t]
					})), this.data.view_sequence_number = 1
				}, D.prototype._resetErrorData = function(e, t) {
					delete this.data.player_error_code, delete this.data.player_error_message
				}, D.prototype._initializeViewData = function() {
					var e = this,
						t = this.data.view_id = (0, s.generateUUID)();
					this.data.video_id || (this.data.video_id = (0, f.default)(this.data.player_source_url));
					var r = function() {
						t === e.data.view_id && (0, c.default)(e.data, "player_view_count", 1)
					};
					this.data.player_is_paused ? this.one("play", r) : r()
				}, D.prototype._restartHeartBeat = function() {
					var e = this;
					l.default.clearTimeout(this._heartBeatTimeout), this.viewErrored || (this._heartBeatTimeout = l.default.setTimeout((function() {
						e.data.player_is_paused || e.emit("hb")
					}), 1e4))
				}, D.prototype.addHLSJS = function(e) {
					return e.hlsjs ? this.hlsjs ? void this.mux.log.warn("An instance of HLS.js is already being monitored for this player.") : (this.hlsjs = e.hlsjs, void(0, h.monitorHlsJs)(this.mux, this.id, e.hlsjs, {}, e.Hls || l.default.Hls)) : void this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")
				}, D.prototype.removeHLSJS = function() {
					this.hlsjs && ((0, h.stopMonitoringHlsJs)(this.hlsjs), this.hlsjs = void 0)
				}, D.prototype.addDashJS = function(e) {
					return e.dashjs ? this.dashjs ? void this.mux.log.warn("An instance of Dash.js is already being monitored for this player.") : (this.dashjs = e.dashjs, void(0, p.monitorDashJS)(this.mux, this.id, e.dashjs)) : void this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")
				}, D.prototype.removeDashJS = function() {
					this.dashjs && ((0, p.stopMonitoringDashJS)(this.dashjs), this.dashjs = void 0)
				}, t.default = D
			}, function(e, t, r) {
				"use strict";

				function a(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e) {
					var t = i.default.createElement("a");
					t.href = e;
					var r = t.pathname.replace(/\.[^\/.]+$/, "");
					return n.default.encode(t.host + r).split("=")[0]
				};
				var i = a(r(12)),
					n = a(r(24))
			}, function(e, t) {}, function(e, t, r) {
				(function(e, a) {
					var i;
					! function(a) {
						"object" == typeof e && e && e.exports;
						var n = function(e) {
							this.message = e
						};
						(n.prototype = new Error).name = "InvalidCharacterError";
						var o = function(e) {
								throw new n(e)
							},
							s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
							u = /[\t\n\f\r ]/g,
							l = {
								encode: function(e) {
									e = String(e), /[^\0-\xFF]/.test(e) && o("The string to be encoded contains characters outside of the Latin1 range.");
									for (var t, r, a, i, n = e.length % 3, u = "", l = -1, d = e.length - n; ++l < d;) t = e.charCodeAt(l) << 16, r = e.charCodeAt(++l) << 8, a = e.charCodeAt(++l), u += s.charAt((i = t + r + a) >> 18 & 63) + s.charAt(i >> 12 & 63) + s.charAt(i >> 6 & 63) + s.charAt(63 & i);
									return 2 == n ? (t = e.charCodeAt(l) << 8, r = e.charCodeAt(++l), u += s.charAt((i = t + r) >> 10) + s.charAt(i >> 4 & 63) + s.charAt(i << 2 & 63) + "=") : 1 == n && (i = e.charCodeAt(l), u += s.charAt(i >> 2) + s.charAt(i << 4 & 63) + "=="), u
								},
								decode: function(e) {
									var t = (e = String(e).replace(u, "")).length;
									t % 4 == 0 && (t = (e = e.replace(/==?$/, "")).length), (t % 4 == 1 || /[^+a-zA-Z0-9\/]/.test(e)) && o("Invalid character: the string to be decoded is not correctly encoded.");
									for (var r, a, i = 0, n = "", l = -1; ++l < t;) a = s.indexOf(e.charAt(l)), r = i % 4 ? 64 * r + a : a, i++ % 4 && (n += String.fromCharCode(255 & r >> (-2 * i & 6)));
									return n
								},
								version: "0.1.0"
							};
						void 0 !== (i = function() {
							return l
						}.call(t, r, t, e)) && (e.exports = i)
					}()
				}).call(t, r(13)(e), r(6))
			}, function(e, t, r) {
				"use strict";

				function a(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.stopMonitoringHlsJs = t.monitorHlsJs = void 0;
				var i = a(r(8)),
					n = a(r(11)),
					o = r(5),
					s = function(e) {
						if (!e) return {};
						var t = n.default.navigationStart();
						return {
							bytesLoaded: e.total,
							requestStart: Math.round(t + e.trequest),
							responseStart: Math.round(t + e.tfirst),
							responseEnd: Math.round(t + e.tload)
						}
					},
					u = function(e) {
						if (e && "function" == typeof e.getAllResponseHeaders) return (0, i.default)(e.getAllResponseHeaders())
					};
				t.monitorHlsJs = function(e, t, r) {
					var a = (arguments.length > 3 && void 0 !== arguments[3] && arguments[3], arguments[4]),
						i = e.log;
					if (n.default.exists()) {
						var l = function(r, a) {
								return e.emit(t, r, a)
							},
							d = function(e, t) {
								var r = t.levels,
									a = t.audioTracks,
									i = t.url,
									n = t.stats,
									d = t.networkDetails,
									c = {},
									f = {};
								r.forEach((function(e, t) {
									c[t] = {
										width: e.width,
										height: e.height,
										bitrate: e.bitrate,
										attrs: e.attrs
									}
								})), a.forEach((function(e, t) {
									f[t] = {
										name: e.name,
										language: e.lang,
										bitrate: e.bitrate
									}
								}));
								var h = s(n),
									p = h.bytesLoaded,
									_ = h.requestStart,
									v = h.responseStart,
									y = h.responseEnd;
								l("requestcompleted", {
									request_event_type: e,
									request_bytes_loaded: p,
									request_start: _,
									request_response_start: v,
									request_response_end: y,
									request_type: "manifest",
									request_hostname: (0, o.extractHostname)(i),
									request_response_headers: u(d),
									request_rendition_lists: {
										media: c,
										audio: f,
										video: {}
									}
								})
							};
						r.on(a.Events.MANIFEST_LOADED, d);
						var c = function(e, t) {
							var r = t.details,
								a = t.level,
								i = t.networkDetails,
								n = t.stats,
								d = s(n),
								c = d.bytesLoaded,
								f = d.requestStart,
								h = d.responseStart,
								p = d.responseEnd;
							l("requestcompleted", {
								request_event_type: e,
								request_bytes_loaded: c,
								request_start: f,
								request_response_start: h,
								request_response_end: p,
								request_current_level: a,
								request_type: "manifest",
								request_hostname: (0, o.extractHostname)(r.url),
								request_response_headers: u(i)
							})
						};
						r.on(a.Events.LEVEL_LOADED, c);
						var f = function(e, t) {
							var r = t.details,
								a = t.networkDetails,
								i = t.stats,
								n = s(i),
								d = n.bytesLoaded,
								c = n.requestStart,
								f = n.responseStart,
								h = n.responseEnd;
							l("requestcompleted", {
								request_event_type: e,
								request_bytes_loaded: d,
								request_start: c,
								request_response_start: f,
								request_response_end: h,
								request_type: "manifest",
								request_hostname: (0, o.extractHostname)(r.url),
								request_response_headers: u(a)
							})
						};
						r.on(a.Events.AUDIO_TRACK_LOADED, f);
						var h = function(e, t) {
							var a = t.stats,
								i = t.networkDetails,
								n = t.frag,
								d = s(a),
								c = {
									request_event_type: e,
									request_bytes_loaded: d.bytesLoaded,
									request_start: d.requestStart,
									request_response_start: d.responseStart,
									request_response_end: d.responseEnd,
									request_hostname: i ? (0, o.extractHostname)(i.responseURL) : void 0,
									request_response_headers: u(i),
									request_media_duration: n.duration
								};
							"main" === n.type ? (c.request_type = "media", c.request_current_level = n.level, c.request_video_width = (r.levels[n.level] || {}).width, c.request_video_height = (r.levels[n.level] || {}).height) : c.request_type = n.type, l("requestcompleted", c)
						};
						r.on(a.Events.FRAG_LOADED, h);
						var p = function(e, t) {
							var r = t.details,
								i = t.response,
								n = t.context,
								s = t.frag;
							if (r === a.ErrorDetails.MANIFEST_LOAD_ERROR || r === a.ErrorDetails.MANIFEST_LOAD_TIMEOUT || r === a.ErrorDetails.FRAG_LOAD_ERROR || r === a.ErrorDetails.FRAG_LOAD_TIMEOUT || r === a.ErrorDetails.LEVEL_LOAD_ERROR || r === a.ErrorDetails.LEVEL_LOAD_TIMEOUT) {
								var u = s && s.url || n && n.url || "";
								l("requestfailed", {
									request_error: r,
									request_url: u,
									request_hostname: (0, o.extractHostname)(u),
									request_type: r === a.ErrorDetails.FRAG_LOAD_ERROR || r === a.ErrorDetails.FRAG_LOAD_TIMEOUT ? "media" : "manifest",
									request_error_code: i && i.code,
									request_error_text: i && i.text
								})
							}
						};
						r.on(a.Events.ERROR, p);
						var _ = function(e, t) {
							var r = t.frag,
								a = r && r._url || "";
							l("requestcanceled", {
								request_cancel: e,
								request_url: a,
								request_type: "media",
								request_hostname: (0, o.extractHostname)(a)
							})
						};
						r.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, _);
						var v = function(e, t) {
							var a = t.level,
								n = r.levels.find((function(e) {
									return e.level === a
								}));
							if (n && n.attrs && n.attrs.BANDWIDTH) {
								var o = n.attrs.BANDWIDTH;
								o ? l("renditionchange", {
									video_source_bitrate: o,
									video_source_width: n.width,
									video_source_height: n.height
								}) : i.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")
							}
						};
						r.on(a.Events.LEVEL_SWITCHED, v), r._stopMuxMonitor = function() {
							r.off(a.Events.MANIFEST_LOADED, d), r.off(a.Events.LEVEL_LOADED, c), r.off(a.Events.AUDIO_TRACK_LOADED, f), r.off(a.Events.FRAG_LOADED, h), r.off(a.Events.ERROR, p), r.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, _), r.off(a.Events.LEVEL_SWITCHED, v), r.off(a.Events.DESTROYING, r._stopMuxMonitor), delete r._stopMuxMonitor
						}, r.on(a.Events.DESTROYING, r._stopMuxMonitor)
					} else i.warn("performance timing not supported. Not tracking HLS.js.")
				}, t.stopMonitoringHlsJs = function(e) {
					e && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor()
				}
			}, function(e, t, r) {
				"use strict";

				function a(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.stopMonitoringDashJS = t.monitorDashJS = void 0;
				var i = a(r(0)),
					n = a(r(8)),
					o = r(5),
					s = function(e, t) {
						if (!e || "function" != typeof e.getRequests) return {};
						var r = e.getRequests({
							state: "executed"
						});
						if (0 === r.length) return {};
						var a = r[r.length - 1],
							i = (0, o.extractHostname)(a.url),
							s = a.bytesLoaded,
							u = new Date(a.requestStartDate).getTime(),
							l = new Date(a.firstByteDate).getTime(),
							d = new Date(a.requestEndDate).getTime(),
							c = isNaN(a.duration) ? 0 : a.duration,
							f = "function" == typeof t.getMetricsFor ? t.getMetricsFor(a.mediaType).HttpList : t.getDashMetrics().getHttpRequests(a.mediaType),
							h = void 0;
						return f.length > 0 && (h = (0, n.default)(f[f.length - 1]._responseHeaders || "")), {
							requestStart: u,
							requestResponseStart: l,
							requestResponseEnd: d,
							requestBytesLoaded: s,
							requestResponseHeaders: h,
							requestMediaDuration: c,
							requestHostname: i
						}
					},
					u = function(e, t) {
						var r = t.getQualityFor(e),
							a = t.getCurrentTrackFor(e).bitrateList;
						return a ? {
							currentLevel: r,
							renditionWidth: a[r].width || null,
							renditionHeight: a[r].height || null,
							renditionBitrate: a[r].bandwidth
						} : {}
					};
				t.monitorDashJS = function(e, t, r) {
					var a = (arguments.length > 3 && void 0 !== arguments[3] && arguments[3], e.log);
					if (r && r.on) {
						var n = function(r, a) {
								return e.emit(t, r, a)
							},
							l = function(e) {
								var t = e.type,
									r = (e.data || {}).url;
								n("requestcompleted", {
									request_event_type: t,
									request_start: 0,
									request_response_start: 0,
									request_response_end: 0,
									request_bytes_loaded: -1,
									request_type: "manifest",
									request_hostname: (0, o.extractHostname)(r)
								})
							};
						r.on("manifestLoaded", l);
						var d = {},
							c = function(e) {
								var t = e.type,
									a = e.fragmentModel,
									i = (e.chunk || {}).mediaInfo || {},
									o = i.type,
									u = i.bitrateList,
									l = {};
								(u = u || []).forEach((function(e, t) {
									l[t] = {}, l[t].width = e.width, l[t].height = e.height, l[t].bitrate = e.bandwidth, l[t].attrs = {}
								})), "video" === o ? d.video = l : "audio" === o ? d.audio = l : d.media = l;
								var c = s(a, r),
									f = c.requestStart,
									h = c.requestResponseStart,
									p = c.requestResponseEnd,
									_ = c.requestResponseHeaders,
									v = c.requestMediaDuration,
									y = c.requestHostname;
								n("requestcompleted", {
									request_event_type: t,
									request_start: f,
									request_response_start: h,
									request_response_end: p,
									request_bytes_loaded: -1,
									request_type: o + "_init",
									request_response_headers: _,
									request_hostname: y,
									request_media_duration: v,
									request_rendition_lists: d
								})
							};
						r.on("initFragmentLoaded", c);
						var f = function(e) {
							var t = e.type,
								a = e.fragmentModel,
								i = e.chunk || {},
								o = i.mediaInfo,
								l = i.start,
								d = (o || {}).type,
								c = s(a, r),
								f = c.requestStart,
								h = c.requestResponseStart,
								p = c.requestResponseEnd,
								_ = c.requestBytesLoaded,
								v = c.requestResponseHeaders,
								y = c.requestMediaDuration,
								m = c.requestHostname,
								b = u(d, r),
								g = b.currentLevel,
								w = b.renditionWidth,
								x = b.renditionHeight,
								S = b.renditionBitrate;
							n("requestcompleted", {
								request_event_type: t,
								request_start: f,
								request_response_start: h,
								request_response_end: p,
								request_bytes_loaded: _,
								request_type: d,
								request_response_headers: v,
								request_hostname: m,
								request_media_start_time: l,
								request_media_duration: y,
								request_current_level: g,
								request_labeled_bitrate: S,
								request_video_width: w,
								request_video_height: x
							})
						};
						r.on("mediaFragmentLoaded", f);
						var h = {
								video: void 0,
								audio: void 0,
								totalBitrate: void 0
							},
							p = function() {
								if (h.video && "number" == typeof h.video.bitrate) {
									if (!h.video.width || !h.video.height) return void a.warn("have bitrate info for video but missing width/height");
									var e = h.video.bitrate;
									return h.audio && "number" == typeof h.audio.bitrate && (e += h.audio.bitrate), e !== h.totalBitrate ? (h.totalBitrate = e, {
										video_source_bitrate: e,
										video_source_height: h.video.height,
										video_source_width: h.video.width
									}) : void 0
								}
							},
							_ = function(e, t, i) {
								if ("number" == typeof e.newQuality) {
									var o = e.mediaType;
									if ("audio" === o || "video" === o) {
										var s = r.getBitrateInfoListFor(o).find((function(t) {
											return t.qualityIndex === e.newQuality
										}));
										if (!s || "number" != typeof s.bitrate) return void a.warn("missing bitrate info for " + o);
										h[o] = s;
										var u = p();
										u && n("renditionchange", u)
									}
								} else a.warn("missing evt.newQuality in qualityChangeRendered event", e)
							};
						r.on("qualityChangeRendered", _);
						var v = function(e) {
							var t = e.error,
								r = e.event,
								a = (r = r || {}).request || {},
								s = i.default.event && i.default.event.currentTarget || {};
							n("requestfailed", {
								request_error: t + "_" + r.id + "_" + a.type,
								request_url: r.url,
								request_hostname: (0, o.extractHostname)(r.url),
								request_type: a.mediaType,
								request_error_code: s.status,
								request_error_type: s.statusText
							})
						};
						r.on("error", v), r._stopMuxMonitor = function() {
							r.off("manifestLoaded", l), r.off("initFragmentLoaded", c), r.off("mediaFragmentLoaded", f), r.off("qualityChangeRendered", _), r.off("error", v), delete r._stopMuxMonitor
						}
					} else a.warn("Invalid dash.js player reference. Monitoring blocked.")
				}, t.stopMonitoringDashJS = function(e) {
					e && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor()
				}
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var a = function() {},
					i = 0;
				a.prototype.on = function(e, t, r) {
					return t._eventEmitterGuid = t._eventEmitterGuid || ++i, this._listeners = this._listeners || {}, this._listeners[e] = this._listeners[e] || [], r && (t = t.bind(r)), this._listeners[e].push(t), t
				}, a.prototype.off = function(e, t) {
					var r = this._listeners && this._listeners[e];
					r && r.forEach((function(e, a) {
						e._eventEmitterGuid === t._eventEmitterGuid && r.splice(a, 1)
					}))
				}, a.prototype.one = function(e, t, r) {
					var a = this;
					t._eventEmitterGuid = t._eventEmitterGuid || ++i;
					var n = function i() {
						a.off(e, i), t.apply(r || this, arguments)
					};
					n._eventEmitterGuid = t._eventEmitterGuid, this.on(e, n)
				}, a.prototype.emit = function(e, t) {
					var r = this;
					if (this._listeners) {
						t = t || {};
						var a = this._listeners["before*"] || [],
							i = this._listeners[e] || [],
							n = this._listeners["after" + e] || [],
							o = function(t, a) {
								(t = t.slice()).forEach((function(t) {
									t.call(r, {
										type: e
									}, a)
								}))
							};
						o(a, t), o(i, t), o(n, t)
					}
				}, t.default = a
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var a = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(r(0)),
					i = function() {
						this._playbackHeartbeatInterval = null, this._playheadShouldBeProgressing = !1, this.on("playing", (function() {
							this._playheadShouldBeProgressing = !0
						})), this.on("play", this._startPlaybackHeartbeatInterval), this.on("playing", this._startPlaybackHeartbeatInterval), this.on("adbreakstart", this._startPlaybackHeartbeatInterval), this.on("adplay", this._startPlaybackHeartbeatInterval), this.on("adplaying", this._startPlaybackHeartbeatInterval), this.on("seeking", this._startPlaybackHeartbeatInterval), this.on("devicewake", this._startPlaybackHeartbeatInterval), this.on("viewstart", this._startPlaybackHeartbeatInterval), this.on("pause", this._stopPlaybackHeartbeatInterval), this.on("ended", this._stopPlaybackHeartbeatInterval), this.on("viewend", this._stopPlaybackHeartbeatInterval), this.on("error", this._stopPlaybackHeartbeatInterval), this.on("aderror", this._stopPlaybackHeartbeatInterval), this.on("adpause", this._stopPlaybackHeartbeatInterval), this.on("adended", this._stopPlaybackHeartbeatInterval), this.on("adbreakend", this._stopPlaybackHeartbeatInterval), this.on("seeked", (function() {
							this.data.player_is_paused ? this._stopPlaybackHeartbeatInterval() : this._startPlaybackHeartbeatInterval()
						})), this.on("timeupdate", (function() {
							null !== this._playbackHeartbeatInterval && this.emit("playbackheartbeat")
						})), this.on("devicesleep", (function(e, t) {
							null !== this._playbackHeartbeatInterval && (a.default.clearInterval(this._playbackHeartbeatInterval), this.emit("playbackheartbeatend", {
								viewer_time: t.viewer_time
							}), this._playbackHeartbeatInterval = null)
						}))
					};
				i.prototype._startPlaybackHeartbeatInterval = function() {
					var e = this;
					null === this._playbackHeartbeatInterval && (this.emit("playbackheartbeat"), this._playbackHeartbeatInterval = a.default.setInterval((function() {
						e.emit("playbackheartbeat")
					}), this.playbackHeartbeatTime))
				}, i.prototype._stopPlaybackHeartbeatInterval = function() {
					this._playheadShouldBeProgressing = !1, null !== this._playbackHeartbeatInterval && (a.default.clearInterval(this._playbackHeartbeatInterval), this.emit("playbackheartbeatend"), this._playbackHeartbeatInterval = null)
				}, t.default = i
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function() {
					var e = this;
					this.on("viewinit", (function() {
						e.viewErrored = !1
					})), this.on("error", (function() {
						try {
							var t = e.errorTranslator({
								player_error_code: e.data.player_error_code,
								player_error_message: e.data.player_error_message
							});
							t ? (e.data.player_error_code = t.player_error_code, e.data.player_error_message = t.player_error_message, e.viewErrored = !0) : (delete e.data.player_error_code, delete e.data.player_error_message)
						} catch (t) {
							e.mux.log.warn("Exception in error translator callback.", t), e.viewErrored = !0
						}
					}))
				}
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var a = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(r(2)),
					i = function() {
						this._watchTimeTrackerLastCheckedTime = null, this.on("playbackheartbeat", this._updateWatchTime), this.on("playbackheartbeatend", this._clearWatchTimeState)
					};
				i.prototype._updateWatchTime = function(e, t) {
					var r = t.viewer_time;
					null === this._watchTimeTrackerLastCheckedTime && (this._watchTimeTrackerLastCheckedTime = r), (0, a.default)(this.data, "view_watch_time", r - this._watchTimeTrackerLastCheckedTime), this._watchTimeTrackerLastCheckedTime = r
				}, i.prototype._clearWatchTimeState = function(e, t) {
					this._updateWatchTime(e, t), this._watchTimeTrackerLastCheckedTime = null
				}, t.default = i
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var a = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(r(2)),
					i = function() {
						this._playbackTimeTrackerLastPlayheadPosition = -1, this.on("playbackheartbeat", this._updatePlaybackTime), this.on("playbackheartbeatend", this._clearPlaybackTimeState), this.on("seeking", this._clearPlaybackTimeState)
					};
				i.prototype._updatePlaybackTime = function() {
					var e = this.data.player_playhead_time;
					if (this._playbackTimeTrackerLastPlayheadPosition >= 0 && e > this._playbackTimeTrackerLastPlayheadPosition) {
						var t = e - this._playbackTimeTrackerLastPlayheadPosition;
						t <= 1e3 && (0, a.default)(this.data, "view_content_playback_time", t)
					}
					this._playbackTimeTrackerLastPlayheadPosition = e
				}, i.prototype._clearPlaybackTimeState = function() {
					this._updatePlaybackTime(), this._playbackTimeTrackerLastPlayheadPosition = -1
				}, t.default = i
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var a = function() {
					this.on("playbackheartbeat", this._updatePlayheadTime), this.on("playbackheartbeatend", this._updatePlayheadTime), this.on("timeupdate", this._updatePlayheadTime), this.on("destroy", (function() {
						this.off("timeupdate", this._updatePlayheadTime)
					}))
				};
				a.prototype._updatePlayheadTime = function(e, t) {
					if (t.player_playhead_time) this.data.player_playhead_time = t.player_playhead_time;
					else if (this.getPlayheadTime) {
						var r = this.getPlayheadTime();
						void 0 !== r && (this.data.player_playhead_time = r)
					}
				}, t.default = a
			}, function(e, t, r) {
				"use strict";

				function a(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var i = a(r(3)),
					n = a(r(2)),
					o = function() {
						this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null, this.on("playbackheartbeat", this._checkIfRebuffering), this.on("playbackheartbeatend", this._cleanupRebufferTracker), this.on("seeking", (function() {
							this._cleanupRebufferTracker(null, {
								viewer_time: i.default.now()
							})
						}))
					};
				o.prototype._checkIfRebuffering = function(e, t) {
					if (!this.disableRebufferTracking) {
						if (this.isSeeking || this.isAdBreak || !this._playheadShouldBeProgressing) return void this._cleanupRebufferTracker(e, t);
						if (null === this._lastCheckedTime) return this._prepareRebufferTrackerState(t.viewer_time), void this._updateRebufferMetrics();
						if (this._lastPlayheadTime !== this.data.player_playhead_time) return void this._cleanupRebufferTracker(e, t, !0);
						var r = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
						r >= this.sustainedRebufferThreshold && (this._rebuffering ? this._updateRebufferMetrics(t.viewer_time - this._lastCheckedTime) : (this._rebuffering = !0, (0, n.default)(this.data, "view_rebuffer_count", 1), this._updateRebufferMetrics(r), this.emit("rebufferstart"))), this._lastCheckedTime = t.viewer_time
					}
				}, o.prototype._clearRebufferTrackerState = function() {
					this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null
				}, o.prototype._prepareRebufferTrackerState = function(e) {
					this._lastCheckedTime = e, this._lastPlayheadTime = this.data.player_playhead_time, this._lastPlayheadTimeUpdatedTime = e
				}, o.prototype._cleanupRebufferTracker = function(e, t) {
					var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					if (!this.disableRebufferTracking) {
						if (this._rebuffering) this._rebuffering = !1, this._updateRebufferMetrics(t.viewer_time - this._lastCheckedTime), this.emit("rebufferend", {
							viewer_time: t.viewer_time
						});
						else {
							if (null === this._lastCheckedTime) return void this._updateRebufferMetrics();
							var a = this.data.player_playhead_time - this._lastPlayheadTime,
								i = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
							a > 0 && i - a > this.minimumRebufferDuration ? ((0, n.default)(this.data, "view_rebuffer_count", 1), this._updateRebufferMetrics(i - a), this.emit("rebufferstart", {
								viewer_time: this._lastPlayheadTimeUpdatedTime
							}), this.emit("rebufferend", {
								viewer_time: this._lastPlayheadTimeUpdatedTime + i - a
							})) : this._updateRebufferMetrics()
						}
						r ? this._prepareRebufferTrackerState(t.viewer_time) : this._clearRebufferTrackerState()
					}
				}, o.prototype._updateRebufferMetrics = function(e) {
					e > 0 && (0, n.default)(this.data, "view_rebuffer_duration", e), this.data.view_watch_time >= 0 && this.data.view_rebuffer_count > 0 && (this.data.view_rebuffer_frequency = this.data.view_rebuffer_count / this.data.view_watch_time, this.data.view_rebuffer_percentage = this.data.view_rebuffer_duration / this.data.view_watch_time)
				}, t.default = o
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var a = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(r(3)),
					i = function() {
						this.on("viewinit", (function() {
							var e = this.data,
								t = e.view_id;
							if (!e.view_program_changed) {
								var r = function(e, r) {
									var i = r.viewer_time;
									"playing" === e.type && void 0 === this.data.view_time_to_first_frame ? this.calculateTimeToFirstFrame(i || a.default.now(), t) : "adplaying" !== e.type || void 0 !== this.data.view_time_to_first_frame && !this.inPrerollPosition() || this.calculateTimeToFirstFrame(i || a.default.now(), t)
								};
								this.one("playing", r), this.one("adplaying", r), this.one("viewend", (function() {
									this.off("playing", r), this.off("adplaying", r)
								}))
							}
						}))
					};
				i.prototype.calculateTimeToFirstFrame = function(e, t) {
					t === this.data.view_id && (this._updateWatchTime(null, {
						viewer_time: e
					}), this.data.view_time_to_first_frame = this.data.view_watch_time, (this.data.player_autoplay_on || this.data.video_is_autoplay) && this.NAVIGATION_START && (this.data.view_aggregate_startup_time = this.data.view_start + this.data.view_watch_time - this.NAVIGATION_START))
				}, t.default = i
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function() {
					var e = this;
					this.on("viewinit", (function() {
						this._lastPlayheadPosition = -1
					})), ["pause", "rebufferstart", "seeking", "error", "adbreakstart", "hb"].forEach((function(t) {
						e.on(t, (function() {
							if (this._lastPlayheadPosition >= 0 && this.data.player_playhead_time >= 0 && this._lastPlayerWidth >= 0 && this._lastSourceWidth > 0 && this._lastPlayerHeight >= 0 && this._lastSourceHeight > 0) {
								var e = this.data.player_playhead_time - this._lastPlayheadPosition;
								if (e < 0) return void(this._lastPlayheadPosition = -1);
								var t = Math.min(this._lastPlayerWidth / this._lastSourceWidth, this._lastPlayerHeight / this._lastSourceHeight),
									r = Math.max(0, t - 1),
									i = Math.max(0, 1 - t);
								this.data.view_max_upscale_percentage = Math.max(this.data.view_max_upscale_percentage || 0, r), this.data.view_max_downscale_percentage = Math.max(this.data.view_max_downscale_percentage || 0, i), (0, a.default)(this.data, "view_total_content_playback_time", e), (0, a.default)(this.data, "view_total_upscaling", r * e), (0, a.default)(this.data, "view_total_downscaling", i * e)
							}
							this._lastPlayheadPosition = -1
						}))
					})), ["playing", "hb"].forEach((function(t) {
						e.on(t, (function() {
							this._lastPlayheadPosition = this.data.player_playhead_time, this._lastPlayerWidth = this.data.player_width, this._lastPlayerHeight = this.data.player_height, this._lastSourceWidth = this.data.video_source_width, this._lastSourceHeight = this.data.video_source_height
						}))
					}))
				};
				var a = function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}(r(2))
			}, function(e, t, r) {
				"use strict";

				function a(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function() {
					this.isSeeking = !1, this.on("seeking", (function(e, t) {
						(0, o.default)(this.data, t), this._lastSeekingTime = i.default.now(), !1 === this.isSeeking && (this.isSeeking = !0, this.send("seeking"))
					})), this.on("seeked", (function() {
						this.isSeeking = !1;
						var e = this._lastSeekingTime || i.default.now(),
							t = i.default.now() - e;
						(0, n.default)(this.data, "view_seek_count", 1), (0, n.default)(this.data, "view_seek_duration", t);
						var r = this.data.view_max_seek_time || 0;
						this.data.view_max_seek_time = Math.max(r, t)
					})), this.on("viewend", (function() {
						this.isSeeking = !1
					}))
				};
				var i = a(r(3)),
					n = a(r(2)),
					o = a(r(1))
			}, function(e, t, r) {
				"use strict";

				function a(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var i = function(e, t) {
						if (Array.isArray(e)) return e;
						if (Symbol.iterator in Object(e)) return function(e, t) {
							var r = [],
								a = !0,
								i = !1,
								n = void 0;
							try {
								for (var o, s = e[Symbol.iterator](); !(a = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); a = !0);
							} catch (e) {
								i = !0, n = e
							} finally {
								try {
									!a && s.return && s.return()
								} finally {
									if (i) throw n
								}
							}
							return r
						}(e, t);
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					},
					n = a(r(2)),
					o = r(5),
					s = a(r(1)),
					u = function(e, t) {
						e.push(t), e.sort((function(e, t) {
							return e.viewer_time - t.viewer_time
						}))
					},
					l = ["adbreakstart", "adrequest", "adresponse", "adplay", "adplaying", "adpause", "adended", "adbreakend", "aderror"],
					d = function() {
						var e = this;
						this.on("viewinit", (function() {
							this.isAdBreak = !1, this._currentAdRequestNumber = 0, this._currentAdResponseNumber = 0, this._adRequests = [], this._adResponses = [], this._adHasPlayed = !1, this._wouldBeNewAdPlay = !0, this._prerollPlayTime = void 0
						})), l.forEach((function(t) {
							return e.on(t, e._updateAdData)
						}));
						var t = function() {
							e.isAdBreak = !1
						};
						this.on("adbreakstart", (function() {
							this.isAdBreak = !0
						})), this.on("play", t), this.on("playing", t), this.on("viewend", t), this.on("adrequest", (function(e, t) {
							t = (0, s.default)({
								ad_request_id: "generatedAdRequestId" + this._currentAdRequestNumber++
							}, t), u(this._adRequests, t), (0, n.default)(this.data, "view_ad_request_count"), this.inPrerollPosition() && (this.data.view_preroll_requested = !0, this._adHasPlayed || (0, n.default)(this.data, "view_preroll_request_count"))
						})), this.on("adresponse", (function(e, t) {
							t = (0, s.default)({
								ad_request_id: "generatedAdRequestId" + this._currentAdResponseNumber++
							}, t), u(this._adResponses, t);
							var r = this.findAdRequest(t.ad_request_id);
							r && (0, n.default)(this.data, "view_ad_request_time", Math.max(0, t.viewer_time - r.viewer_time))
						})), this.on("adplay", (function(e, t) {
							this._adHasPlayed = !0, this._wouldBeNewAdPlay && (this._wouldBeNewAdPlay = !1, (0, n.default)(this.data, "view_ad_played_count")), this.inPrerollPosition() && !this.data.view_preroll_played && (this.data.view_preroll_played = !0, this._adRequests.length > 0 && (this.data.view_preroll_request_time = Math.max(0, t.viewer_time - this._adRequests[0].viewer_time)), this.data.view_start && (this.data.view_startup_preroll_request_time = Math.max(0, t.viewer_time - this.data.view_start)), this._prerollPlayTime = t.viewer_time)
						})), this.on("adplaying", (function(e, t) {
							this.inPrerollPosition() && void 0 === this.data.view_preroll_load_time && void 0 !== this._prerollPlayTime && (this.data.view_preroll_load_time = t.viewer_time - this._prerollPlayTime, this.data.view_startup_preroll_load_time = t.viewer_time - this._prerollPlayTime)
						})), this.on("adended", (function() {
							this._wouldBeNewAdPlay = !0
						})), this.on("aderror", (function() {
							this._wouldBeNewAdPlay = !0
						}))
					};
				d.prototype.inPrerollPosition = function() {
					return void 0 === this.data.view_content_playback_time || this.data.view_content_playback_time <= 1e3
				}, d.prototype.findAdRequest = function(e) {
					for (var t = 0; t < this._adRequests.length; t++)
						if (this._adRequests[t].ad_request_id === e) return this._adRequests[t]
				}, d.prototype._updateAdData = function(e, t) {
					if (this.inPrerollPosition()) {
						if (!this.data.view_preroll_ad_tag_hostname && t.ad_tag_url) {
							var r = (0, o.extractHostnameAndDomain)(t.ad_tag_url),
								a = i(r, 2),
								n = a[0],
								s = a[1];
							this.data.view_preroll_ad_tag_domain = s, this.data.view_preroll_ad_tag_hostname = n
						}
						if (!this.data.view_preroll_ad_asset_hostname && t.ad_asset_url) {
							var u = (0, o.extractHostnameAndDomain)(t.ad_asset_url),
								l = i(u, 2),
								d = l[0],
								c = l[1];
							this.data.view_preroll_ad_asset_domain = c, this.data.view_preroll_ad_asset_hostname = d
						}
					}
				}, t.default = d
			}, function(e, t, r) {
				"use strict";

				function a(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function() {
					var e = this,
						t = void 0,
						r = void 0,
						a = function() {
							e.disableRebufferTracking || t && ((0, n.default)(e.data, "view_waiting_rebuffer_duration", i.default.now() - t), t = !1, window.clearInterval(r))
						},
						o = !1,
						s = function() {
							o = !1, a()
						};
					this.on("waiting", (function() {
						o && (e.disableRebufferTracking || ((0, n.default)(e.data, "view_waiting_rebuffer_count", 1), t = i.default.now(), r = window.setInterval((function() {
							if (t) {
								var r = i.default.now();
								(0, n.default)(e.data, "view_waiting_rebuffer_duration", r - t), t = r
							}
						}), 250)))
					})), this.on("playing", (function() {
						a(), o = !0
					})), this.on("pause", s), this.on("seeking", s)
				};
				var i = a(r(3)),
					n = a(r(2))
			}, function(e, t, r) {
				"use strict";

				function a(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function() {
					var e = this;
					this.one("playbackheartbeat", o), this.on("playbackheartbeatend", (function() {
						e.off("before*", s), e.one("playbackheartbeat", o)
					}))
				};
				var i = a(r(1)),
					n = a(r(3)),
					o = function() {
						this.lastWallClockTime = n.default.now(), this.on("before*", s)
					},
					s = function(e) {
						var t = n.default.now(),
							r = this.lastWallClockTime;
						this.lastWallClockTime = t, t - r > 3e4 && (this.emit("devicesleep", {
							viewer_time: r
						}), (0, i.default)(this.data, {
							viewer_time: r
						}), this.send("devicesleep"), this.emit("devicewake", {
							viewer_time: t
						}), (0, i.default)(this.data, {
							viewer_time: t
						}), this.send("devicewake"))
					}
			}, function(e, t, r) {
				"use strict";

				function a(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					n = a(r(0)),
					o = r(41),
					s = a(r(4)),
					u = a(r(45)),
					l = a(r(10)),
					d = a(r(46)),
					c = a(r(17)),
					f = a(r(47)),
					h = a(r(49)),
					p = a(r(1)),
					_ = ["env_key", "view_id", "view_sequence_number", "player_sequence_number", "beacon_domain", "player_playhead_time", "viewer_time", "mux_api_version", "event", "video_id", "player_instance_id"],
					v = ["viewstart", "error", "ended", "viewend"],
					y = function(e, t) {
						var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
						this.mux = e, this.envKey = t, this.eventQueue = new f.default((0, u.default)(t, r.beaconDomain)), this.previousBeaconData = null, this.lastEventTime = null, this.sampleRate = r.sampleRate, this.disableCookies = r.disableCookies, this.respectDoNotTrack = r.respectDoNotTrack;
						var a = (0, p.default)(h.default, r.platform || {});
						this.pageLevelData = {
							mux_api_version: this.mux.API_VERSION,
							mux_embed_version: this.mux.VERSION,
							viewer_application_name: a.name,
							viewer_application_version: a.version,
							viewer_application_engine: a.layout,
							viewer_device_name: a.product,
							viewer_device_category: "",
							viewer_device_manufacturer: a.manufacturer,
							viewer_os_family: a.os && a.os.family,
							viewer_os_architecture: a.os && a.os.architecture,
							viewer_os_version: a.os && a.os.version
						};
						var i = (0, d.default)();
						i && (this.pageLevelData = (0, p.default)(this.pageLevelData, {
							viewer_connection_type: i
						})), void 0 !== n.default && n.default.location && n.default.location.href && (this.pageLevelData.page_url = n.default.location.href), this.viewerData = this.disableCookies ? {} : (0, o.getAndUpdateViewerData)()
					};
				y.prototype.send = function(e, t) {
					if (e) {
						if (this.respectDoNotTrack && (0, l.default)()) return s.default.info("Not sending `" + e + "` because Do Not Track is enabled");
						if (!t || "object" !== (void 0 === t ? "undefined" : i(t))) return s.default.error("A data object was expected in send() but was not provided");
						var r = this.disableCookies ? {} : (0, o.getAndUpdateSessionData)(),
							a = {};
						(0, p.default)(a, this.pageLevelData), (0, p.default)(a, t), (0, p.default)(a, r), (0, p.default)(a, this.viewerData), a.event = e, a.env_key = this.envKey, a.user_id && (a.viewer_user_id = a.user_id, delete a.user_id);
						var n = a.mux_sample_number >= this.sampleRate,
							u = this._deduplicateBeaconData(e, a),
							d = (0, c.default)(u);
						if (this.lastEventTime = this.mux.utils.now(), n) return s.default.info("Not sending event due to sample rate restriction", e, a, d);
						if (!this.envKey) return s.default.info("Not sending event due to missing environment key", e, a, d);
						if (!this.rateLimited)
							if (s.default.info("Sending event", e, a, d), this.rateLimited = !this.eventQueue.queueEvent(e, d), this.mux.WINDOW_UNLOADING && "viewend" === e) this.eventQueue.destroy(!0);
							else if (v.indexOf(e) >= 0 && this.eventQueue.flushEvents(), this.rateLimited) return a.event = "eventrateexceeded", d = (0, c.default)(a), this.eventQueue.queueEvent(a.event, d), s.default.error("Beaconing disabled due to rate limit.")
					}
				}, y.prototype.destroy = function() {
					this.eventQueue.destroy(!1)
				};
				var m = function(e, t, r, a) {
					return !(!e || 0 !== t.indexOf("request_") || "request_response_headers" !== t && "object" === (void 0 === r ? "undefined" : i(r)) && "object" === (void 0 === a ? "undefined" : i(a)) && Object.keys(r || {}).length === Object.keys(a || {}).length)
				};
				y.prototype._deduplicateBeaconData = function(e, t) {
					var r = this,
						a = {},
						i = t.view_id;
					if (!i || "viewstart" === e || "viewend" === e || !this.previousBeaconData || this.mux.utils.now() - this.lastEventTime >= 6e5) a = (0, p.default)({}, t), i && (this.previousBeaconData = a), i && "viewend" === e && (this.previousBeaconData = null);
					else {
						var n = 0 === e.indexOf("request");
						Object.keys(t).forEach((function(i) {
							var o = t[i];
							(o !== r.previousBeaconData[i] || _.indexOf(i) > -1 || m(n, i, o, r.previousBeaconData[i]) || function(e, t) {
								return "renditionchange" === e && 0 === t.indexOf("video_source_")
							}(e, i)) && (a[i] = o, r.previousBeaconData[i] = o)
						}))
					}
					return a
				}, t.default = y
			}, function(e, t, r) {
				"use strict";

				function a(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.getAndUpdateSessionData = t.getAndUpdateViewerData = void 0;
				var i = a(r(14)),
					n = a(r(44)),
					o = r(7),
					s = a(r(3)),
					u = function() {
						var e = void 0;
						try {
							e = i.default.parse(n.default.get("muxData") || "")
						} catch (t) {
							e = {}
						}
						return e
					},
					l = function(e) {
						n.default.set("muxData", i.default.stringify(e), {
							expires: 7300
						})
					};
				t.getAndUpdateViewerData = function() {
					var e = u();
					return e.mux_viewer_id = e.mux_viewer_id || (0, o.generateUUID)(), e.msn = e.msn || Math.random(), l(e), {
						mux_viewer_id: e.mux_viewer_id,
						mux_sample_number: e.msn
					}
				}, t.getAndUpdateSessionData = function() {
					var e = u(),
						t = s.default.now();
					return e.session_start && (e.sst = e.session_start, delete e.session_start), e.session_id && (e.sid = e.session_id, delete e.session_id), e.session_expires && (e.sex = e.session_expires, delete e.session_expires), (!e.sex || e.sex < t) && (e.sid = (0, o.generateUUID)(), e.sst = t), e.sex = t + 15e5, l(e), {
						session_id: e.sid,
						session_start: e.sst,
						session_expires: e.sex
					}
				}
			}, function(e, t, r) {
				"use strict";
				var a = r(15),
					i = r(16),
					n = {
						brackets: function(e) {
							return e + "[]"
						},
						indices: function(e, t) {
							return e + "[" + t + "]"
						},
						repeat: function(e) {
							return e
						}
					},
					o = Date.prototype.toISOString,
					s = {
						delimiter: "&",
						encode: !0,
						encoder: a.encode,
						encodeValuesOnly: !1,
						serializeDate: function(e) {
							return o.call(e)
						},
						skipNulls: !1,
						strictNullHandling: !1
					},
					u = function e(t, r, i, n, o, u, l, d, c, f, h, p) {
						var _ = t;
						if ("function" == typeof l) _ = l(r, _);
						else if (_ instanceof Date) _ = f(_);
						else if (null === _) {
							if (n) return u && !p ? u(r, s.encoder) : r;
							_ = ""
						}
						if ("string" == typeof _ || "number" == typeof _ || "boolean" == typeof _ || a.isBuffer(_)) return u ? [h(p ? r : u(r, s.encoder)) + "=" + h(u(_, s.encoder))] : [h(r) + "=" + h(String(_))];
						var v, y = [];
						if (void 0 === _) return y;
						if (Array.isArray(l)) v = l;
						else {
							var m = Object.keys(_);
							v = d ? m.sort(d) : m
						}
						for (var b = 0; b < v.length; ++b) {
							var g = v[b];
							o && null === _[g] || (y = Array.isArray(_) ? y.concat(e(_[g], i(r, g), i, n, o, u, l, d, c, f, h, p)) : y.concat(e(_[g], r + (c ? "." + g : "[" + g + "]"), i, n, o, u, l, d, c, f, h, p)))
						}
						return y
					};
				e.exports = function(e, t) {
					var r = e,
						o = t ? a.assign({}, t) : {};
					if (null !== o.encoder && void 0 !== o.encoder && "function" != typeof o.encoder) throw new TypeError("Encoder has to be a function.");
					var l = void 0 === o.delimiter ? s.delimiter : o.delimiter,
						d = "boolean" == typeof o.strictNullHandling ? o.strictNullHandling : s.strictNullHandling,
						c = "boolean" == typeof o.skipNulls ? o.skipNulls : s.skipNulls,
						f = "boolean" == typeof o.encode ? o.encode : s.encode,
						h = "function" == typeof o.encoder ? o.encoder : s.encoder,
						p = "function" == typeof o.sort ? o.sort : null,
						_ = void 0 !== o.allowDots && o.allowDots,
						v = "function" == typeof o.serializeDate ? o.serializeDate : s.serializeDate,
						y = "boolean" == typeof o.encodeValuesOnly ? o.encodeValuesOnly : s.encodeValuesOnly;
					if (void 0 === o.format) o.format = i.default;
					else if (!Object.prototype.hasOwnProperty.call(i.formatters, o.format)) throw new TypeError("Unknown format option provided.");
					var m, b, g = i.formatters[o.format];
					"function" == typeof o.filter ? r = (b = o.filter)("", r) : Array.isArray(o.filter) && (m = b = o.filter);
					var w, x = [];
					if ("object" != typeof r || null === r) return "";
					w = o.arrayFormat in n ? o.arrayFormat : "indices" in o ? o.indices ? "indices" : "repeat" : "indices";
					var S = n[w];
					m || (m = Object.keys(r)), p && m.sort(p);
					for (var T = 0; T < m.length; ++T) {
						var k = m[T];
						c && null === r[k] || (x = x.concat(u(r[k], k, S, d, c, f ? h : null, b, p, _, v, g, y)))
					}
					var E = x.join(l),
						O = !0 === o.addQueryPrefix ? "?" : "";
					return E.length > 0 ? O + E : ""
				}
			}, function(e, t, r) {
				"use strict";
				var a = r(15),
					i = Object.prototype.hasOwnProperty,
					n = {
						allowDots: !1,
						allowPrototypes: !1,
						arrayLimit: 20,
						decoder: a.decode,
						delimiter: "&",
						depth: 5,
						parameterLimit: 1e3,
						plainObjects: !1,
						strictNullHandling: !1
					},
					o = function(e, t) {
						for (var r = {}, a = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, o = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, s = a.split(t.delimiter, o), u = 0; u < s.length; ++u) {
							var l, d, c = s[u],
								f = c.indexOf("]="),
								h = -1 === f ? c.indexOf("=") : f + 1; - 1 === h ? (l = t.decoder(c, n.decoder), d = t.strictNullHandling ? null : "") : (l = t.decoder(c.slice(0, h), n.decoder), d = t.decoder(c.slice(h + 1), n.decoder)), i.call(r, l) ? r[l] = [].concat(r[l]).concat(d) : r[l] = d
						}
						return r
					},
					s = function(e, t, r) {
						if (e) {
							var a = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
								n = /(\[[^[\]]*])/g,
								o = /(\[[^[\]]*])/.exec(a),
								s = o ? a.slice(0, o.index) : a,
								u = [];
							if (s) {
								if (!r.plainObjects && i.call(Object.prototype, s) && !r.allowPrototypes) return;
								u.push(s)
							}
							for (var l = 0; null !== (o = n.exec(a)) && l < r.depth;) {
								if (l += 1, !r.plainObjects && i.call(Object.prototype, o[1].slice(1, -1)) && !r.allowPrototypes) return;
								u.push(o[1])
							}
							return o && u.push("[" + a.slice(o.index) + "]"),
								function(e, t, r) {
									for (var a = t, i = e.length - 1; i >= 0; --i) {
										var n, o = e[i];
										if ("[]" === o) n = (n = []).concat(a);
										else {
											n = r.plainObjects ? Object.create(null) : {};
											var s = "[" === o.charAt(0) && "]" === o.charAt(o.length - 1) ? o.slice(1, -1) : o,
												u = parseInt(s, 10);
											!isNaN(u) && o !== s && String(u) === s && u >= 0 && r.parseArrays && u <= r.arrayLimit ? (n = [])[u] = a : n[s] = a
										}
										a = n
									}
									return a
								}(u, t, r)
						}
					};
				e.exports = function(e, t) {
					var r = t ? a.assign({}, t) : {};
					if (null !== r.decoder && void 0 !== r.decoder && "function" != typeof r.decoder) throw new TypeError("Decoder has to be a function.");
					if (r.ignoreQueryPrefix = !0 === r.ignoreQueryPrefix, r.delimiter = "string" == typeof r.delimiter || a.isRegExp(r.delimiter) ? r.delimiter : n.delimiter, r.depth = "number" == typeof r.depth ? r.depth : n.depth, r.arrayLimit = "number" == typeof r.arrayLimit ? r.arrayLimit : n.arrayLimit, r.parseArrays = !1 !== r.parseArrays, r.decoder = "function" == typeof r.decoder ? r.decoder : n.decoder, r.allowDots = "boolean" == typeof r.allowDots ? r.allowDots : n.allowDots, r.plainObjects = "boolean" == typeof r.plainObjects ? r.plainObjects : n.plainObjects, r.allowPrototypes = "boolean" == typeof r.allowPrototypes ? r.allowPrototypes : n.allowPrototypes, r.parameterLimit = "number" == typeof r.parameterLimit ? r.parameterLimit : n.parameterLimit, r.strictNullHandling = "boolean" == typeof r.strictNullHandling ? r.strictNullHandling : n.strictNullHandling, "" === e || null == e) return r.plainObjects ? Object.create(null) : {};
					for (var i = "string" == typeof e ? o(e, r) : e, u = r.plainObjects ? Object.create(null) : {}, l = Object.keys(i), d = 0; d < l.length; ++d) {
						var c = l[d],
							f = s(c, i[c], r);
						u = a.merge(u, f, r)
					}
					return a.compact(u)
				}
			}, function(e, t, r) {
				"use strict";
				var a, i, n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				};
				! function(o) {
					var s = !1;
					if (void 0 !== (i = "function" == typeof(a = o) ? a.call(t, r, t, e) : a) && (e.exports = i), s = !0, "object" === n(t) && (e.exports = o(), s = !0), !s) {
						var u = window.Cookies,
							l = window.Cookies = o();
						l.noConflict = function() {
							return window.Cookies = u, l
						}
					}
				}((function() {
					var e = function() {
						for (var e = 0, t = {}; e < arguments.length; e++) {
							var r = arguments[e];
							for (var a in r) t[a] = r[a]
						}
						return t
					};
					return function t(r) {
						function a(t, i, n) {
							var o;
							if ("undefined" != typeof document) {
								if (arguments.length > 1) {
									if ("number" == typeof(n = e({
											path: "/"
										}, a.defaults, n)).expires) {
										var s = new Date;
										s.setMilliseconds(s.getMilliseconds() + 864e5 * n.expires), n.expires = s
									}
									try {
										o = JSON.stringify(i), /^[\{\[]/.test(o) && (i = o)
									} catch (t) {}
									return i = r.write ? r.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape), document.cookie = [t, "=", i, n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
								}
								t || (o = {});
								for (var u = document.cookie ? document.cookie.split("; ") : [], l = /(%[0-9A-Z]{2})+/g, d = 0; d < u.length; d++) {
									var c = u[d].split("="),
										f = c.slice(1).join("=");
									'"' === f.charAt(0) && (f = f.slice(1, -1));
									try {
										var h = c[0].replace(l, decodeURIComponent);
										if (f = r.read ? r.read(f, h) : r(f, h) || f.replace(l, decodeURIComponent), this.json) try {
											f = JSON.parse(f)
										} catch (t) {}
										if (t === h) {
											o = f;
											break
										}
										t || (o[h] = f)
									} catch (t) {}
								}
								return o
							}
						}
						return a.set = a, a.get = function(e) {
							return a.call(a, e)
						}, a.getJSON = function() {
							return a.apply({
								json: !0
							}, [].slice.call(arguments))
						}, a.defaults = {}, a.remove = function(t, r) {
							a(t, "", e(r, {
								expires: -1
							}))
						}, a.withConverter = t, a
					}((function() {}))
				}))
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e, t) {
					return t = t || "litix.io", (e = e || "").match(/^[a-z0-9]+$/) ? "https://" + e + "." + t : "https://img.litix.io/a.gif"
				}
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var a = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(r(0)),
					i = function() {
						var e = a.default.navigator,
							t = e && (e.connection || e.mozConnection || e.webkitConnection);
						return t && t.type
					};
				t.default = function() {
					var e = void 0;
					switch (i()) {
						case "cellular":
							e = "cellular";
							break;
						case "ethernet":
							e = "ethernet";
							break;
						case "wifi":
							e = "wifi";
							break;
						case void 0:
							break;
						default:
							e = "other"
					}
					return e
				}
			}, function(e, t, r) {
				"use strict";

				function a(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var i = a(r(0)),
					n = a(r(4)),
					o = a(r(48)),
					s = a(r(1)),
					u = a(r(17)),
					l = !!i.default.XMLHttpRequest && "withCredentials" in new i.default.XMLHttpRequest,
					d = {
						maxBeaconSize: 300,
						maxQueueLength: 3600,
						baseTimeBetweenBeacons: 5e3
					},
					c = function(e, t) {
						this._beaconUrl = e || "https://img.litix.io", this._eventQueue = [], this._postInFlight = !1, this._failureCount = 0, this._sendTimeout = !1, this._options = (0, s.default)({}, d, t)
					};
				c.prototype.queueEvent = function(e, t) {
					var r = (0, s.default)({}, t);
					return l ? (this._eventQueue.length <= this._options.maxQueueLength || "eventrateexceeded" === e) && (this._eventQueue.push(r), this._sendTimeout || this._startBeaconSending(), this._eventQueue.length <= this._options.maxQueueLength) : (o.default.send(this._beaconUrl, r), !0)
				}, c.prototype.flushEvents = function() {
					l && (this._eventQueue.length && this._sendBeaconQueue(), this._startBeaconSending())
				}, c.prototype.destroy = function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					this.destroyed = !0, e ? this._clearBeaconQueue() : this.flushEvents(), i.default.clearTimeout(this._sendTimeout)
				}, c.prototype._clearBeaconQueue = function() {
					var e = i.default.navigator,
						t = this._eventQueue.length > this._options.maxBeaconSize ? this._eventQueue.length - this._options.maxBeaconSize : 0,
						r = this._eventQueue.slice(t);
					if (t > 0 && (0, s.default)(r[r.length - 1], (0, u.default)({
							mux_view_message: "event queue truncated"
						})), e.sendBeacon) e.sendBeacon(this._beaconUrl, JSON.stringify({
						events: r
					}));
					else if (i.default.XMLHttpRequest) {
						var a = new i.default.XMLHttpRequest;
						a.open("POST", this._beaconUrl), a.setRequestHeader("Content-Type", "application/json"), a.send(JSON.stringify({
							events: r
						}))
					} else o.default.send(this._beaconUrl, r[r.length - 1])
				}, c.prototype._sendBeaconQueue = function() {
					var e = this;
					if (i.default.XMLHttpRequest && !this._postInFlight) {
						var t = new i.default.XMLHttpRequest,
							r = this._eventQueue.slice(0, this._options.maxBeaconSize);
						this._eventQueue = this._eventQueue.slice(this._options.maxBeaconSize), this._postInFlight = !0, t.onreadystatechange = function() {
							4 === t.readyState && (200 !== t.status ? (e._eventQueue = r.concat(e._eventQueue), e._failureCount += 1, n.default.info("Error sending beacon: " + t.status), n.default.info(t.responseText)) : e._failureCount = 0, e._postInFlight = !1)
						}, t.open("POST", this._beaconUrl), t.setRequestHeader("Content-Type", "application/json"), t.send(JSON.stringify({
							events: r
						}))
					}
				}, c.prototype._getNextBeaconTime = function() {
					if (!this._failureCount) return this._options.baseTimeBetweenBeacons;
					var e = Math.pow(2, this._failureCount - 1);
					return (1 + (e *= Math.random())) * this._options.baseTimeBetweenBeacons
				}, c.prototype._startBeaconSending = function() {
					var e = this;
					i.default.clearTimeout(this._sendTimeout), this.destroyed || (this._sendTimeout = i.default.setTimeout((function() {
						e._eventQueue.length && e._sendBeaconQueue(), e._startBeaconSending()
					}), this._getNextBeaconTime()))
				}, t.default = c
			}, function(e, t, r) {
				"use strict";

				function a(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var i = a(r(14)),
					n = a(r(0)),
					o = {
						send: function(e, t) {
							function r() {
								a.src = s + (o ? "&rc=" + o : "")
							}
							var a = new Image,
								o = 0,
								s = e + "?" + i.default.stringify(t);
							return a.addEventListener("error", (function() {
								o > 3 || n.default.setTimeout((function() {
									o++, r()
								}), 5e3 * o)
							})), r(), a
						}
					};
				t.default = o
			}, function(e, t, r) {
				(function(e, a) {
					var i;
					(function() {
						"use strict";

						function n(e) {
							return (e = String(e)).charAt(0).toUpperCase() + e.slice(1)
						}

						function o(e) {
							return e = f(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : n(e)
						}

						function s(e, t) {
							for (var r in e) S.call(e, r) && t(e[r], r, e)
						}

						function u(e) {
							return null == e ? n(e) : T.call(e).slice(8, -1)
						}

						function l(e, t) {
							var r = null != e ? typeof e[t] : "number";
							return !(/^(?:boolean|number|string|undefined)$/.test(r) || "object" == r && !e[t])
						}

						function d(e) {
							return String(e).replace(/([ -])(?!$)/g, "$1?")
						}

						function c(e, t) {
							var r = null;
							return function(e, t) {
								var r = -1,
									a = e ? e.length : 0;
								if ("number" == typeof a && a > -1 && a <= b)
									for (; ++r < a;) t(e[r], r, e);
								else s(e, t)
							}(e, (function(a, i) {
								r = t(r, a, i, e)
							})), r
						}

						function f(e) {
							return String(e).replace(/^ +| +$/g, "")
						}
						var h = {
								function: !0,
								object: !0
							},
							p = h[typeof window] && window || this,
							_ = p,
							v = h[typeof t] && t,
							y = h[typeof e] && e && !e.nodeType && e,
							m = v && y && "object" == typeof a && a;
						!m || m.global !== m && m.window !== m && m.self !== m || (p = m);
						var b = Math.pow(2, 53) - 1,
							g = /\bOpera/,
							w = this,
							x = Object.prototype,
							S = x.hasOwnProperty,
							T = x.toString,
							k = function e(t) {
								function r(e) {
									return c(e, (function(e, r) {
										var a = r.pattern || d(r);
										return !e && (e = RegExp("\\b" + a + " *\\d+[.\\w_]*", "i").exec(t) || RegExp("\\b" + a + " *\\w+-[\\w]*", "i").exec(t) || RegExp("\\b" + a + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(t)) && ((e = String(r.label && !RegExp(a, "i").test(r.label) ? r.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), r = r.label || r, e = o(e[0].replace(RegExp(a, "i"), r).replace(RegExp("; *(?:" + r + "[_-])?", "i"), " ").replace(RegExp("(" + r + ")[-_.]?(\\w)", "i"), "$1 $2"))), e
									}))
								}
								var a = p,
									i = t && "object" == typeof t && "String" != u(t);
								i && (a = t, t = null);
								var n = a.navigator || {},
									h = n.userAgent || "";
								t || (t = h);
								var v, y, m = i || w == _,
									b = i ? !!n.likeChrome : /\bChrome\b/.test(t) && !/internal|\n/i.test(T.toString()),
									x = i ? "Object" : "ScriptBridgingProxyObject",
									S = i ? "Object" : "Environment",
									k = i && a.java ? "JavaPackage" : u(a.java),
									E = i ? "Object" : "RuntimeObject",
									O = /\bJava/.test(k) && a.java,
									M = O && u(a.environment) == S,
									P = O ? "a" : "α",
									A = O ? "b" : "β",
									D = a.document || {},
									q = a.operamini || a.opera,
									R = g.test(R = i && q ? q["[[Class]]"] : u(q)) ? R : q = null,
									j = t,
									I = [],
									L = null,
									C = t == h,
									H = C && q && "function" == typeof q.version && q.version(),
									N = c([{
										label: "EdgeHTML",
										pattern: "Edge"
									}, "Trident", {
										label: "WebKit",
										pattern: "AppleWebKit"
									}, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"], (function(e, r) {
										return e || RegExp("\\b" + (r.pattern || d(r)) + "\\b", "i").exec(t) && (r.label || r)
									})),
									B = c(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
										label: "Microsoft Edge",
										pattern: "Edge"
									}, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
										label: "Samsung Internet",
										pattern: "SamsungBrowser"
									}, "SeaMonkey", {
										label: "Silk",
										pattern: "(?:Cloud9|Silk-Accelerated)"
									}, "Sleipnir", "SlimBrowser", {
										label: "SRWare Iron",
										pattern: "Iron"
									}, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
										label: "Opera Mini",
										pattern: "OPiOS"
									}, "Opera", {
										label: "Opera",
										pattern: "OPR"
									}, "Chrome", {
										label: "Chrome Mobile",
										pattern: "(?:CriOS|CrMo)"
									}, {
										label: "Firefox",
										pattern: "(?:Firefox|Minefield)"
									}, {
										label: "Firefox for iOS",
										pattern: "FxiOS"
									}, {
										label: "IE",
										pattern: "IEMobile"
									}, {
										label: "IE",
										pattern: "MSIE"
									}, "Safari"], (function(e, r) {
										return e || RegExp("\\b" + (r.pattern || d(r)) + "\\b", "i").exec(t) && (r.label || r)
									})),
									F = r([{
										label: "BlackBerry",
										pattern: "BB10"
									}, "BlackBerry", {
										label: "Galaxy S",
										pattern: "GT-I9000"
									}, {
										label: "Galaxy S2",
										pattern: "GT-I9100"
									}, {
										label: "Galaxy S3",
										pattern: "GT-I9300"
									}, {
										label: "Galaxy S4",
										pattern: "GT-I9500"
									}, {
										label: "Galaxy S5",
										pattern: "SM-G900"
									}, {
										label: "Galaxy S6",
										pattern: "SM-G920"
									}, {
										label: "Galaxy S6 Edge",
										pattern: "SM-G925"
									}, {
										label: "Galaxy S7",
										pattern: "SM-G930"
									}, {
										label: "Galaxy S7 Edge",
										pattern: "SM-G935"
									}, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
										label: "Kindle Fire",
										pattern: "(?:Cloud9|Silk-Accelerated)"
									}, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
										label: "Wii U",
										pattern: "WiiU"
									}, "Wii", "Xbox One", {
										label: "Xbox 360",
										pattern: "Xbox"
									}, "Xoom"]),
									W = c({
										Apple: {
											iPad: 1,
											iPhone: 1,
											iPod: 1
										},
										Archos: {},
										Amazon: {
											Kindle: 1,
											"Kindle Fire": 1
										},
										Asus: {
											Transformer: 1
										},
										"Barnes & Noble": {
											Nook: 1
										},
										BlackBerry: {
											PlayBook: 1
										},
										Google: {
											"Google TV": 1,
											Nexus: 1
										},
										HP: {
											TouchPad: 1
										},
										HTC: {},
										LG: {},
										Microsoft: {
											Xbox: 1,
											"Xbox One": 1
										},
										Motorola: {
											Xoom: 1
										},
										Nintendo: {
											"Wii U": 1,
											Wii: 1
										},
										Nokia: {
											Lumia: 1
										},
										Samsung: {
											"Galaxy S": 1,
											"Galaxy S2": 1,
											"Galaxy S3": 1,
											"Galaxy S4": 1
										},
										Sony: {
											PlayStation: 1,
											"PlayStation Vita": 1
										}
									}, (function(e, r, a) {
										return e || (r[F] || r[/^[a-z]+(?: +[a-z]+\b)*/i.exec(F)] || RegExp("\\b" + d(a) + "(?:\\b|\\w*\\d)", "i").exec(t)) && a
									})),
									U = c(["Windows Phone", "Android", "CentOS", {
										label: "Chrome OS",
										pattern: "CrOS"
									}, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "], (function(e, r) {
										var a = r.pattern || d(r);
										return !e && (e = RegExp("\\b" + a + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(t)) && (e = function(e, t, r) {
											var a = {
												"10.0": "10",
												6.4: "10 Technical Preview",
												6.3: "8.1",
												6.2: "8",
												6.1: "Server 2008 R2 / 7",
												"6.0": "Server 2008 / Vista",
												5.2: "Server 2003 / XP 64-bit",
												5.1: "XP",
												5.01: "2000 SP1",
												"5.0": "2000",
												"4.0": "NT",
												"4.90": "ME"
											};
											return t && r && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (a = a[/[\d.]+$/.exec(e)]) && (e = "Windows " + a), e = String(e), t && r && (e = e.replace(RegExp(t, "i"), r)), o(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
										}(e, a, r.label || r)), e
									}));
								if (N && (N = [N]), W && !F && (F = r([W])), (v = /\bGoogle TV\b/.exec(F)) && (F = v[0]), /\bSimulator\b/i.test(t) && (F = (F ? F + " " : "") + "Simulator"), "Opera Mini" == B && /\bOPiOS\b/.test(t) && I.push("running in Turbo/Uncompressed mode"), "IE" == B && /\blike iPhone OS\b/.test(t) ? (W = (v = e(t.replace(/like iPhone OS/, ""))).manufacturer, F = v.product) : /^iP/.test(F) ? (B || (B = "Safari"), U = "iOS" + ((v = / OS ([\d_]+)/i.exec(t)) ? " " + v[1].replace(/_/g, ".") : "")) : "Konqueror" != B || /buntu/i.test(U) ? W && "Google" != W && (/Chrome/.test(B) && !/\bMobile Safari\b/i.test(t) || /\bVita\b/.test(F)) || /\bAndroid\b/.test(U) && /^Chrome/.test(B) && /\bVersion\//i.test(t) ? (B = "Android Browser", U = /\bAndroid\b/.test(U) ? U : "Android") : "Silk" == B ? (/\bMobi/i.test(t) || (U = "Android", I.unshift("desktop mode")), /Accelerated *= *true/i.test(t) && I.unshift("accelerated")) : "PaleMoon" == B && (v = /\bFirefox\/([\d.]+)\b/.exec(t)) ? I.push("identifying as Firefox " + v[1]) : "Firefox" == B && (v = /\b(Mobile|Tablet|TV)\b/i.exec(t)) ? (U || (U = "Firefox OS"), F || (F = v[1])) : !B || (v = !/\bMinefield\b/i.test(t) && /\b(?:Firefox|Safari)\b/.exec(B)) ? (B && !F && /[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(v + "/") + 8)) && (B = null), (v = F || W || U) && (F || W || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(U)) && (B = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(U) ? U : v) + " Browser")) : "Electron" == B && (v = (/\bChrome\/([\d.]+)\b/.exec(t) || 0)[1]) && I.push("Chromium " + v) : U = "Kubuntu", H || (H = function(e) {
										return c(e, (function(e, r) {
											return e || (RegExp(r + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(t) || 0)[1] || null
										}))
									}(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", d(B), "(?:Firefox|Minefield|NetFront)"])), (v = ("iCab" == N && parseFloat(H) > 3 ? "WebKit" : /\bOpera\b/.test(B) && (/\bOPR\b/.test(t) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(t) && !/^(?:Trident|EdgeHTML)$/.test(N) && "WebKit" || !N && /\bMSIE\b/i.test(t) && ("Mac OS" == U ? "Tasman" : "Trident") || "WebKit" == N && /\bPlayStation\b(?! Vita\b)/i.test(B) && "NetFront") && (N = [v]), "IE" == B && (v = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t) || 0)[1]) ? (B += " Mobile", U = "Windows Phone " + (/\+$/.test(v) ? v : v + ".x"), I.unshift("desktop mode")) : /\bWPDesktop\b/i.test(t) ? (B = "IE Mobile", U = "Windows Phone 8.x", I.unshift("desktop mode"), H || (H = (/\brv:([\d.]+)/.exec(t) || 0)[1])) : "IE" != B && "Trident" == N && (v = /\brv:([\d.]+)/.exec(t)) && (B && I.push("identifying as " + B + (H ? " " + H : "")), B = "IE", H = v[1]), C) {
									if (l(a, "global"))
										if (O && (j = (v = O.lang.System).getProperty("os.arch"), U = U || v.getProperty("os.name") + " " + v.getProperty("os.version")), m && l(a, "system") && (v = [a.system])[0]) {
											U || (U = v[0].os || null);
											try {
												v[1] = a.require("ringo/engine").version, H = v[1].join("."), B = "RingoJS"
											} catch (t) {
												v[0].global.system == a.system && (B = "Narwhal")
											}
										} else "object" == typeof a.process && !a.process.browser && (v = a.process) ? "object" == typeof v.versions ? "string" == typeof v.versions.electron ? (I.push("Node " + v.versions.node), B = "Electron", H = v.versions.electron) : "string" == typeof v.versions.nw && (I.push("Chromium " + H, "Node " + v.versions.node), B = "NW.js", H = v.versions.nw) : (B = "Node.js", j = v.arch, U = v.platform, H = (H = /[\d.]+/.exec(v.version)) ? H[0] : "unknown") : M && (B = "Rhino");
									else u(v = a.runtime) == x ? (B = "Adobe AIR", U = v.flash.system.Capabilities.os) : u(v = a.phantom) == E ? (B = "PhantomJS", H = (v = v.version || null) && v.major + "." + v.minor + "." + v.patch) : "number" == typeof D.documentMode && (v = /\bTrident\/(\d+)/i.exec(t)) ? (H = [H, D.documentMode], (v = +v[1] + 4) != H[1] && (I.push("IE " + H[1] + " mode"), N && (N[1] = ""), H[1] = v), H = "IE" == B ? String(H[1].toFixed(1)) : H[0]) : "number" == typeof D.documentMode && /^(?:Chrome|Firefox)\b/.test(B) && (I.push("masking as " + B + " " + H), B = "IE", H = "11.0", N = ["Trident"], U = "Windows");
									U = U && o(U)
								}
								if (H && (v = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(H) || /(?:alpha|beta)(?: ?\d)?/i.exec(t + ";" + (C && n.appMinorVersion)) || /\bMinefield\b/i.test(t) && "a") && (L = /b/i.test(v) ? "beta" : "alpha", H = H.replace(RegExp(v + "\\+?$"), "") + ("beta" == L ? A : P) + (/\d+\+?/.exec(v) || "")), "Fennec" == B || "Firefox" == B && /\b(?:Android|Firefox OS)\b/.test(U)) B = "Firefox Mobile";
								else if ("Maxthon" == B && H) H = H.replace(/\.[\d.]+/, ".x");
								else if (/\bXbox\b/i.test(F)) "Xbox 360" == F && (U = null), "Xbox 360" == F && /\bIEMobile\b/.test(t) && I.unshift("mobile mode");
								else if (!/^(?:Chrome|IE|Opera)$/.test(B) && (!B || F || /Browser|Mobi/.test(B)) || "Windows CE" != U && !/Mobi/i.test(t))
									if ("IE" == B && C) try {
										null === a.external && I.unshift("platform preview")
									} catch (t) {
										I.unshift("embedded")
									} else(/\bBlackBerry\b/.test(F) || /\bBB10\b/.test(t)) && (v = (RegExp(F.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(t) || 0)[1] || H) ? (U = ((v = [v, /BB10/.test(t)])[1] ? (F = null, W = "BlackBerry") : "Device Software") + " " + v[0], H = null) : this != s && "Wii" != F && (C && q || /Opera/.test(B) && /\b(?:MSIE|Firefox)\b/i.test(t) || "Firefox" == B && /\bOS X (?:\d+\.){2,}/.test(U) || "IE" == B && (U && !/^Win/.test(U) && H > 5.5 || /\bWindows XP\b/.test(U) && H > 8 || 8 == H && !/\bTrident\b/.test(t))) && !g.test(v = e.call(s, t.replace(g, "") + ";")) && v.name && (v = "ing as " + v.name + ((v = v.version) ? " " + v : ""), g.test(B) ? (/\bIE\b/.test(v) && "Mac OS" == U && (U = null), v = "identify" + v) : (v = "mask" + v, B = R ? o(R.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(v) && (U = null), C || (H = null)), N = ["Presto"], I.push(v));
									else B += " Mobile";
								(v = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t) || 0)[1]) && (v = [parseFloat(v.replace(/\.(\d)$/, ".0$1")), v], "Safari" == B && "+" == v[1].slice(-1) ? (B = "WebKit Nightly", L = "alpha", H = v[1].slice(0, -1)) : H != v[1] && H != (v[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t) || 0)[1]) || (H = null), v[1] = (/\bChrome\/([\d.]+)/i.exec(t) || 0)[1], 537.36 == v[0] && 537.36 == v[2] && parseFloat(v[1]) >= 28 && "WebKit" == N && (N = ["Blink"]), C && (b || v[1]) ? (N && (N[1] = "like Chrome"), v = v[1] || ((v = v[0]) < 530 ? 1 : v < 532 ? 2 : v < 532.05 ? 3 : v < 533 ? 4 : v < 534.03 ? 5 : v < 534.07 ? 6 : v < 534.1 ? 7 : v < 534.13 ? 8 : v < 534.16 ? 9 : v < 534.24 ? 10 : v < 534.3 ? 11 : v < 535.01 ? 12 : v < 535.02 ? "13+" : v < 535.07 ? 15 : v < 535.11 ? 16 : v < 535.19 ? 17 : v < 536.05 ? 18 : v < 536.1 ? 19 : v < 537.01 ? 20 : v < 537.11 ? "21+" : v < 537.13 ? 23 : v < 537.18 ? 24 : v < 537.24 ? 25 : v < 537.36 ? 26 : "Blink" != N ? "27" : "28")) : (N && (N[1] = "like Safari"), v = (v = v[0]) < 400 ? 1 : v < 500 ? 2 : v < 526 ? 3 : v < 533 ? 4 : v < 534 ? "4+" : v < 535 ? 5 : v < 537 ? 6 : v < 538 ? 7 : v < 601 ? 8 : "8"), N && (N[1] += " " + (v += "number" == typeof v ? ".x" : /[.+]/.test(v) ? "" : "+")), "Safari" == B && (!H || parseInt(H) > 45) && (H = v)), "Opera" == B && (v = /\bzbov|zvav$/.exec(U)) ? (B += " ", I.unshift("desktop mode"), "zvav" == v ? (B += "Mini", H = null) : B += "Mobile", U = U.replace(RegExp(" *" + v + "$"), "")) : "Safari" == B && /\bChrome\b/.exec(N && N[1]) && (I.unshift("desktop mode"), B = "Chrome Mobile", H = null, /\bOS X\b/.test(U) ? (W = "Apple", U = "iOS 4.3+") : U = null), H && 0 == H.indexOf(v = /[\d.]+$/.exec(U)) && t.indexOf("/" + v + "-") > -1 && (U = f(U.replace(v, ""))), N && !/\b(?:Avant|Nook)\b/.test(B) && (/Browser|Lunascape|Maxthon/.test(B) || "Safari" != B && /^iOS/.test(U) && /\bSafari\b/.test(N[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(B) && N[1]) && (v = N[N.length - 1]) && I.push(v), I.length && (I = ["(" + I.join("; ") + ")"]), W && F && F.indexOf(W) < 0 && I.push("on " + W), F && I.push((/^on /.test(I[I.length - 1]) ? "" : "on ") + F), U && (v = / ([\d.+]+)$/.exec(U), y = v && "/" == U.charAt(U.length - v[0].length - 1), U = {
									architecture: 32,
									family: v && !y ? U.replace(v[0], "") : U,
									version: v ? v[1] : null,
									toString: function() {
										var e = this.version;
										return this.family + (e && !y ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
									}
								}), (v = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(j)) && !/\bi686\b/i.test(j) ? (U && (U.architecture = 64, U.family = U.family.replace(RegExp(" *" + v), "")), B && (/\bWOW64\b/i.test(t) || C && /\w(?:86|32)$/.test(n.cpuClass || n.platform) && !/\bWin64; x64\b/i.test(t)) && I.unshift("32-bit")) : U && /^OS X/.test(U.family) && "Chrome" == B && parseFloat(H) >= 39 && (U.architecture = 64), t || (t = null);
								var G = {};
								return G.description = t, G.layout = N && N[0], G.manufacturer = W, G.name = B, G.prerelease = L, G.product = F, G.ua = t, G.version = B && H, G.os = U || {
									architecture: null,
									family: null,
									version: null,
									toString: function() {
										return "null"
									}
								}, G.parse = e, G.toString = function() {
									return this.description || ""
								}, G.version && I.unshift(H), G.name && I.unshift(B), U && B && (U != String(U).split(" ")[0] || U != B.split(" ")[0] && !F) && I.push(F ? "(" + U + ")" : "on " + U), I.length && (G.description = I.join(" ")), G
							}();
						p.platform = k, void 0 !== (i = function() {
							return k
						}.call(t, r, t, e)) && (e.exports = i)
					}).call(this)
				}).call(t, r(13)(e), r(6))
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function() {
					var e = 0,
						t = 0,
						r = 0,
						a = 0,
						i = 0,
						n = 0,
						o = 0;
					this.on("requestcompleted", (function(n, o) {
						var s = o.request_start,
							u = o.request_response_start,
							l = o.request_response_end,
							d = o.request_bytes_loaded;
						a++;
						var c = void 0,
							f = void 0;
						if (u ? (c = u - s, f = l - u) : f = l - s, f > 0 && d > 0) {
							var h = d / f * 8e3;
							i++, t += d, r += f, this.data.view_min_request_throughput = Math.min(this.data.view_min_request_throughput || 1 / 0, h), this.data.view_average_request_throughput = t / r * 8e3, this.data.view_request_count = a, c > 0 && (e += c, this.data.view_max_request_latency = Math.max(this.data.view_max_request_latency || 0, c), this.data.view_average_request_latency = e / i)
						}
					})), this.on("requestfailed", (function(e, t) {
						a++, n++, this.data.view_request_count = a, this.data.view_request_failed_count = n
					})), this.on("requestcanceled", (function(e, t) {
						a++, o++, this.data.view_request_count = a, this.data.view_request_canceled_count = o
					}))
				}
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					i = function(e, t) {
						if (Array.isArray(e)) return e;
						if (Symbol.iterator in Object(e)) return function(e, t) {
							var r = [],
								a = !0,
								i = !1,
								n = void 0;
							try {
								for (var o, s = e[Symbol.iterator](); !(a = (o = s.next()).done) && (r.push(o.value), !t || r.length !== t); a = !0);
							} catch (e) {
								i = !0, n = e
							} finally {
								try {
									!a && s.return && s.return()
								} finally {
									if (i) throw n
								}
							}
							return r
						}(e, t);
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					};
				t.default = function(e, t, r) {
					var l = (0, o.findMediaElement)(t),
						d = i(l, 3),
						c = d[0],
						f = d[1],
						h = d[2],
						p = e.log,
						_ = e.utils.getComputedStyle,
						v = e.utils.secondsToMs;
					return c ? "video" !== h && "audio" !== h ? p.error("The element of `" + f + "` was not a media element.") : ((r = (0, n.default)({
						automaticErrorTracking: !0
					}, r)).data = (0, n.default)({
						player_software: "HTML5 Video Element",
						player_software_version: "No Versions",
						player_mux_plugin_name: "VideoElementMonitor",
						player_mux_plugin_version: "3.4.1"
					}, r.data), r.getPlayheadTime = function() {
						return v(c.currentTime)
					}, r.getStateData = function() {
						var e = this.hlsjs && this.hlsjs.url,
							t = this.dashjs && a("function" === this.dashjs.getSource) && this.dashjs.getSource();
						return {
							player_is_paused: c.paused,
							player_playhead_time: v(c.currentTime),
							player_width: parseInt(_(c, "width")),
							player_height: parseInt(_(c, "height")),
							player_autoplay_on: c.autoplay,
							player_preload_on: c.preload,
							video_poster_url: c.poster,
							video_source_url: e || t || c.currentSrc,
							video_source_duration: v(c.duration),
							video_source_height: c.videoHeight,
							video_source_width: c.videoWidth
						}
					}, c.mux = c.mux || {}, c.mux.emit = function(t, r) {
						e.emit(f, t, r)
					}, c.mux.destroy = function() {
						Object.keys(c.mux.listeners).forEach((function(e) {
							c.removeEventListener(e, c.mux.listeners[e], !1)
						})), delete c.mux.listeners, e.emit(f, "destroy")
					}, c.mux.swapElement = function(t) {
						var r = (0, o.findMediaElement)(t),
							a = i(r, 3),
							s = a[0],
							u = a[1],
							l = a[2];
						return s ? "video" !== l && "audio" !== l ? e.log.error("The element of `" + u + "` was not a media element.") : (s.muxId = c.muxId, delete c.muxId, s.mux = s.mux || {}, s.mux.listeners = (0, n.default)({}, c.mux.listeners), delete c.mux.listeners, Object.keys(s.mux.listeners).forEach((function(e) {
							c.removeEventListener(e, s.mux.listeners[e], !1), s.addEventListener(e, s.mux.listeners[e], !1)
						})), s.mux.swapElement = c.mux.swapElement, s.mux.destroy = c.mux.destroy, delete c.mux, void(c = s)) : e.log.error("No element was found with the `" + u + "` query selector.")
					}, c.mux.addHLSJS = function(t) {
						e.addHLSJS(f, t)
					}, c.mux.addDashJS = function(t) {
						e.addDashJS(f, t)
					}, c.mux.removeHLSJS = function() {
						e.removeHLSJS(f)
					}, c.mux.removeDashJS = function() {
						e.removeDashJS(f)
					}, e.init(f, r), e.emit(f, "playerready"), c.paused || (e.emit(f, "play"), c.readyState > 2 && e.emit(f, "playing")), c.mux.listeners = {}, void s.forEach((function(t) {
						("error" !== t || r.automaticErrorTracking) && (c.mux.listeners[t] = function() {
							var r = {};
							"error" === t && (r.player_error_code = c.error && c.error.code, r.player_error_message = c.error && u[c.error.code]), e.emit(f, t, r)
						}, c.addEventListener(t, c.mux.listeners[t], !1))
					}))) : p.error("No element was found with the `" + f + "` query selector.")
				};
				var n = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(r(1)),
					o = r(9),
					s = ["loadstart", "pause", "play", "playing", "seeking", "seeked", "timeupdate", "ratechange", "stalled", "waiting", "error", "ended"],
					u = {
						1: "MEDIA_ERR_ABORTED",
						2: "MEDIA_ERR_NETWORK",
						3: "MEDIA_ERR_DECODE",
						4: "MEDIA_ERR_SRC_NOT_SUPPORTED"
					}
			}, function(e, t, r) {
				"use strict";

				function a(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var i = a(r(53)),
					n = a(r(2)),
					o = a(r(54)),
					s = a(r(55)),
					u = a(r(1)),
					l = a(r(8)),
					d = r(5),
					c = a(r(3)),
					f = {};
				f.safeCall = i.default, f.safeIncrement = n.default, f.getComputedStyle = o.default, f.secondsToMs = s.default, f.assign = u.default, f.headersStringToObject = l.default, f.extractHostnameAndDomain = d.extractHostnameAndDomain, f.extractHostname = d.extractHostname, f.now = c.default.now, t.default = f
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e, t, r, i) {
					var n = i;
					if (e && "function" == typeof e[t]) try {
						n = e[t].apply(e, r)
					} catch (e) {
						a.default.info("safeCall error", e)
					}
					return n
				};
				var a = function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}(r(4))
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e, t) {
					if (a.default.defaultView && a.default.defaultView.getComputedStyle) return a.default.defaultView.getComputedStyle(e, null).getPropertyValue(t)
				};
				var a = function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}(r(12))
			}, function(e, t, r) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e) {
					return Math.floor(1e3 * e)
				}
			}])
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MuxEmbed.176473b1ebb816d270d0.js.map