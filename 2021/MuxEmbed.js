// https://www.redditstatic.com/desktop2x/MuxEmbed.982b3400754d822142c4.js
// Retrieved at 10/5/2021, 7:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MuxEmbed"], {
		"./node_modules/mux-embed/dist/mux.js": function(e, t, a) {
			e.exports = function(e) {
				function t(r) {
					if (a[r]) return a[r].exports;
					var i = a[r] = {
						i: r,
						l: !1,
						exports: {}
					};
					return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
				}
				var a = {};
				return t.m = e, t.c = a, t.d = function(e, a, r) {
					t.o(e, a) || Object.defineProperty(e, a, {
						configurable: !1,
						enumerable: !0,
						get: r
					})
				}, t.n = function(e) {
					var a = e && e.__esModule ? function() {
						return e.default
					} : function() {
						return e
					};
					return t.d(a, "a", a), a
				}, t.o = function(e, t) {
					return Object.prototype.hasOwnProperty.call(e, t)
				}, t.p = "", t(t.s = 16)
			}([function(e, t, a) {
				(function(t) {
					var a;
					a = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, e.exports = a
				}).call(t, a(6))
			}, function(e, t) {
				function a(e, t, a) {
					switch (a.length) {
						case 0:
							return e.call(t);
						case 1:
							return e.call(t, a[0]);
						case 2:
							return e.call(t, a[0], a[1]);
						case 3:
							return e.call(t, a[0], a[1], a[2])
					}
					return e.apply(t, a)
				}

				function r(e, t) {
					var a = T(e) || function(e) {
							return function(e) {
								return function(e) {
									return !!e && "object" == typeof e
								}(e) && u(e)
							}(e) && y.call(e, "callee") && (!b.call(e, "callee") || m.call(e) == f)
						}(e) ? function(e, t) {
							for (var a = -1, r = Array(e); ++a < e;) r[a] = t(a);
							return r
						}(e.length, String) : [],
						r = a.length,
						i = !!r;
					for (var o in e) !t && !y.call(e, o) || i && ("length" == o || n(o, r)) || a.push(o);
					return a
				}

				function i(e, t, a) {
					var r = e[t];
					y.call(e, t) && s(r, a) && (void 0 !== a || t in e) || (e[t] = a)
				}

				function n(e, t) {
					return !!(t = null == t ? c : t) && ("number" == typeof e || p.test(e)) && e > -1 && e % 1 == 0 && e < t
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
						var t = d(e) ? m.call(e) : "";
						return t == h || t == _
					}(e)
				}

				function d(e) {
					var t = typeof e;
					return !!e && ("object" == t || "function" == t)
				}

				function l(e) {
					return u(e) ? r(e) : function(e) {
						if (!o(e)) return g(e);
						var t = [];
						for (var a in Object(e)) y.call(e, a) && "constructor" != a && t.push(a);
						return t
					}(e)
				}
				var c = 9007199254740991,
					f = "[object Arguments]",
					h = "[object Function]",
					_ = "[object GeneratorFunction]",
					p = /^(?:0|[1-9]\d*)$/,
					v = Object.prototype,
					y = v.hasOwnProperty,
					m = v.toString,
					b = v.propertyIsEnumerable,
					g = function(e, t) {
						return function(a) {
							return e(t(a))
						}
					}(Object.keys, Object),
					w = Math.max,
					x = !b.call({
						valueOf: 1
					}, "valueOf"),
					T = Array.isArray,
					k = function(e) {
						return function(e, t) {
							return t = w(void 0 === t ? e.length - 1 : t, 0),
								function() {
									for (var r = arguments, i = -1, n = w(r.length - t, 0), o = Array(n); ++i < n;) o[i] = r[t + i];
									i = -1;
									for (var s = Array(t + 1); ++i < t;) s[i] = r[i];
									return s[t] = o, a(e, this, s)
								}
						}((function(t, a) {
							var r = -1,
								i = a.length,
								o = i > 1 ? a[i - 1] : void 0,
								l = i > 2 ? a[2] : void 0;
							for (o = e.length > 3 && "function" == typeof o ? (i--, o) : void 0, l && function(e, t, a) {
									if (!d(a)) return !1;
									var r = typeof t;
									return !!("number" == r ? u(a) && n(t, a.length) : "string" == r && t in a) && s(a[t], e)
								}(a[0], a[1], l) && (o = i < 3 ? void 0 : o, i = 1), t = Object(t); ++r < i;) {
								var c = a[r];
								c && e(t, c)
							}
							return t
						}))
					}((function(e, t) {
						if (x || o(t) || u(t)) ! function(e, t, a, r) {
							a || (a = {});
							for (var n = -1, o = t.length; ++n < o;) {
								var s = t[n],
									u = r ? r(a[s], e[s], s, a, e) : void 0;
								i(a, s, void 0 === u ? e[s] : u)
							}
						}(t, l(t), e);
						else
							for (var a in t) y.call(t, a) && i(e, a, t[a])
					}));
				e.exports = k
			}, function(e, t, a) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e, t, a) {
					a = void 0 === a ? 1 : a, e[t] = e[t] || 0, e[t] += a
				}
			}, function(e, t, a) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var r = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(a(0)),
					i = {
						now: function() {
							var e = r.default.performance,
								t = e && e.timing;
							return t && "number" == typeof t.navigationStart && "function" == typeof e.now ? t.navigationStart + e.now() : Date.now()
						}
					};
				t.default = i
			}, function(e, t, a) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var r = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(a(18)),
					i = r.default.methodFactory;
				r.default.methodFactory = function(e, t, a) {
					var r = i(e, t, a);
					return function() {
						for (var e = ["[mux]"], t = 0; t < arguments.length; t++) e.push(arguments[t]);
						r.apply(void 0, e)
					}
				}, r.default.setLevel(r.default.getLevel()), t.default = r.default
			}, function(e, t, a) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var r = function(e) {
					if ("string" != typeof e || "" === e) return ["localhost"];
					var t = (e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/) || [])[4],
						a = void 0;
					return t && (a = (t.match(/[^\.]+\.[^\.]+$/) || [])[0]), [t, a]
				};
				t.extractHostnameAndDomain = r, t.extractHostname = function(e) {
					return r(e)[0]
				}, t.extractDomain = function(e) {
					return r(e)[1]
				}
			}, function(e, t) {
				var a;
				a = function() {
					return this
				}();
				try {
					a = a || Function("return this")() || (0, eval)("this")
				} catch (e) {
					"object" == typeof window && (a = window)
				}
				e.exports = a
			}, function(e, t, a) {
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
			}, function(e, t, a) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e) {
					var t = {};
					return (e = e || "").trim().split(/[\r\n]+/).forEach((function(e) {
						if (e) {
							var a = e.split(": "),
								i = a.shift();
							i && r.indexOf(i.toLowerCase()) >= 0 && (t[i] = a.join(": "))
						}
					})), t
				};
				var r = ["x-cdn", "content-type"]
			}, function(e, t, a) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.findMediaElement = t.getMuxPlayerId = void 0;
				var r = a(7),
					i = function(e) {
						return e && void 0 !== e.nodeName ? (e.muxId || (e.muxId = e.id || (0, r.generateShortID)()), e.muxId) : e
					};
				t.getMuxPlayerId = i, t.findMediaElement = function(e) {
					var t = void 0;
					return e && void 0 !== e.nodeName ? e = i(t = e) : t = document.querySelector(e), [t, e, t && t.nodeName ? t.nodeName.toLowerCase() : ""]
				}
			}, function(e, t, a) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function() {
					return "1" === (r.default.doNotTrack || r.default.navigator && (r.default.navigator.doNotTrack || r.default.navigator.msDoNotTrack))
				};
				var r = function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}(a(0))
			}, function(e, t, a) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var r = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(a(0)),
					i = {
						exists: function() {
							var e = r.default.performance;
							return void 0 !== (e && e.timing)
						},
						domContentLoadedEventEnd: function() {
							var e = r.default.performance,
								t = e && e.timing;
							return t && t.domContentLoadedEventEnd
						},
						navigationStart: function() {
							var e = r.default.performance,
								t = e && e.timing;
							return t && t.navigationStart
						}
					};
				t.default = i
			}, function(e, t, a) {
				"use strict";
				var r = a(42),
					i = a(43),
					n = a(14);
				e.exports = {
					formats: n,
					parse: i,
					stringify: r
				}
			}, function(e, t, a) {
				"use strict";
				var r = Object.prototype.hasOwnProperty,
					i = function() {
						for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
						return e
					}();
				t.arrayToObject = function(e, t) {
					for (var a = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r) void 0 !== e[r] && (a[r] = e[r]);
					return a
				}, t.merge = function(e, a, i) {
					if (!a) return e;
					if ("object" != typeof a) {
						if (Array.isArray(e)) e.push(a);
						else {
							if ("object" != typeof e) return [e, a];
							(i.plainObjects || i.allowPrototypes || !r.call(Object.prototype, a)) && (e[a] = !0)
						}
						return e
					}
					if ("object" != typeof e) return [e].concat(a);
					var n = e;
					return Array.isArray(e) && !Array.isArray(a) && (n = t.arrayToObject(e, i)), Array.isArray(e) && Array.isArray(a) ? (a.forEach((function(a, n) {
						r.call(e, n) ? e[n] && "object" == typeof e[n] ? e[n] = t.merge(e[n], a, i) : e.push(a) : e[n] = a
					})), e) : Object.keys(a).reduce((function(e, n) {
						var o = a[n];
						return r.call(e, n) ? e[n] = t.merge(e[n], o, i) : e[n] = o, e
					}), n)
				}, t.assign = function(e, t) {
					return Object.keys(t).reduce((function(e, a) {
						return e[a] = t[a], e
					}), e)
				}, t.decode = function(e) {
					try {
						return decodeURIComponent(e.replace(/\+/g, " "))
					} catch (t) {
						return e
					}
				}, t.encode = function(e) {
					if (0 === e.length) return e;
					for (var t = "string" == typeof e ? e : String(e), a = "", r = 0; r < t.length; ++r) {
						var n = t.charCodeAt(r);
						45 === n || 46 === n || 95 === n || 126 === n || n >= 48 && n <= 57 || n >= 65 && n <= 90 || n >= 97 && n <= 122 ? a += t.charAt(r) : n < 128 ? a += i[n] : n < 2048 ? a += i[192 | n >> 6] + i[128 | 63 & n] : n < 55296 || n >= 57344 ? a += i[224 | n >> 12] + i[128 | n >> 6 & 63] + i[128 | 63 & n] : (r += 1, n = 65536 + ((1023 & n) << 10 | 1023 & t.charCodeAt(r)), a += i[240 | n >> 18] + i[128 | n >> 12 & 63] + i[128 | n >> 6 & 63] + i[128 | 63 & n])
					}
					return a
				}, t.compact = function(e) {
					for (var t = [{
							obj: {
								o: e
							},
							prop: "o"
						}], a = [], r = 0; r < t.length; ++r)
						for (var i = t[r], n = i.obj[i.prop], o = Object.keys(n), s = 0; s < o.length; ++s) {
							var u = o[s],
								d = n[u];
							"object" == typeof d && null !== d && -1 === a.indexOf(d) && (t.push({
								obj: n,
								prop: u
							}), a.push(d))
						}
					return function(e) {
						for (var t; e.length;) {
							var a = e.pop();
							if (t = a.obj[a.prop], Array.isArray(t)) {
								for (var r = [], i = 0; i < t.length; ++i) void 0 !== t[i] && r.push(t[i]);
								a.obj[a.prop] = r
							}
						}
						return t
					}(t)
				}, t.isRegExp = function(e) {
					return "[object RegExp]" === Object.prototype.toString.call(e)
				}, t.isBuffer = function(e) {
					return null != e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
				}
			}, function(e, t, a) {
				"use strict";
				var r = String.prototype.replace,
					i = /%20/g;
				e.exports = {
					default: "RFC3986",
					formatters: {
						RFC1738: function(e) {
							return r.call(e, i, "+")
						},
						RFC3986: function(e) {
							return e
						}
					},
					RFC1738: "RFC1738",
					RFC3986: "RFC3986"
				}
			}, function(e, t, a) {
				"use strict";

				function r(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}

				function i(e) {
					var t = {};
					for (var a in e) e.hasOwnProperty(a) && (t[e[a]] = a);
					return t
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e) {
					var t = {},
						a = {};
					return Object.keys(e).forEach((function(r) {
						var i = !1;
						if (e.hasOwnProperty(r) && void 0 !== e[r]) {
							var o = r.split("_"),
								d = o[0],
								l = s[d];
							l || (n.default.info("Data key word `" + o[0] + "` not expected in " + r), l = d + "_"), o.splice(1).forEach((function(e) {
								"url" === e && (i = !0), u[e] ? l += u[e] : (n.default.info("Data key word `" + e + "` not expected in " + r), l += "_" + e + "_")
							})), i ? a[l] = e[r] : t[l] = e[r]
						}
					})), (0, o.default)(t, a)
				};
				var n = r(a(4)),
					o = r(a(1)),
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
						mo: "model",
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
						pn: "playing",
						po: "poster",
						pr: "preload",
						ps: "position",
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
			}, function(e, t, a) {
				"use strict";
				e.exports = a(17).default
			}, function(e, t, a) {
				"use strict";

				function r(e) {
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
							var a = [],
								r = !0,
								i = !1,
								n = void 0;
							try {
								for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (a.push(o.value), !t || a.length !== t); r = !0);
							} catch (e) {
								i = !0, n = e
							} finally {
								try {
									!r && s.return && s.return()
								} finally {
									if (i) throw n
								}
							}
							return a
						}(e, t);
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					},
					n = r(a(0)),
					o = a(9),
					s = r(a(4)),
					u = r(a(10)),
					d = r(a(3)),
					l = r(a(19)),
					c = r(a(50)),
					f = r(a(51)),
					h = {},
					_ = function e(t) {
						var a = arguments;
						"string" == typeof t ? e.hasOwnProperty(t) ? n.default.setTimeout((function() {
							a = Array.prototype.splice.call(a, 1), e[t].apply(null, a)
						}), 0) : s.default.warn("`" + t + "` is an unknown task") : "function" == typeof t ? n.default.setTimeout((function() {
							t(e)
						}), 0) : s.default.warn("`" + t + "` is invalid.")
					};
				_.loaded = d.default.now(), _.NAME = "mux-embed", _.VERSION = "4.0.1", _.API_VERSION = "2.1", _.PLAYER_TRACKED = !1, _.monitor = function(e, t) {
					return (0, c.default)(_, e, t)
				}, _.destroyMonitor = function(e) {
					var t = (0, o.findMediaElement)(e),
						a = i(t, 1)[0];
					a && a.mux && "function" == typeof a.mux.destroy ? a.mux.destroy() : s.default.error("A video element monitor for `" + e + "` has not been initialized via `mux.monitor`.")
				}, _.addHLSJS = function(e, t) {
					var a = (0, o.getMuxPlayerId)(e);
					h[a] ? h[a].addHLSJS(t) : s.default.error("A monitor for `" + a + "` has not been initialized.")
				}, _.addDashJS = function(e, t) {
					var a = (0, o.getMuxPlayerId)(e);
					h[a] ? h[a].addDashJS(t) : s.default.error("A monitor for `" + a + "` has not been initialized.")
				}, _.removeHLSJS = function(e) {
					var t = (0, o.getMuxPlayerId)(e);
					h[t] ? h[t].removeHLSJS() : s.default.error("A monitor for `" + t + "` has not been initialized.")
				}, _.removeDashJS = function(e) {
					var t = (0, o.getMuxPlayerId)(e);
					h[t] ? h[t].removeDashJS() : s.default.error("A monitor for `" + t + "` has not been initialized.")
				}, _.init = function(e, t) {
					(0, u.default)() && t && t.respectDoNotTrack && s.default.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");
					var a = (0, o.getMuxPlayerId)(e);
					h[a] = new l.default(_, a, t)
				}, _.emit = function(e, t, a) {
					var r = (0, o.getMuxPlayerId)(e);
					h[r] ? (h[r].emit(t, a), "destroy" === t && delete h[r]) : s.default.error("A monitor for `" + r + "` has not been initialized.")
				}, void 0 !== n.default && "function" == typeof n.default.addEventListener && n.default.addEventListener("unload", (function() {
					_.WINDOW_UNLOADING = !0
				}), !1), _.checkDoNotTrack = u.default, _.log = s.default, _.utils = f.default, t.default = _
			}, function(e, t, a) {
				var r, i;
				! function(n, o) {
					"use strict";
					r = function() {
						function e(e, t) {
							var a = e[t];
							if ("function" == typeof a.bind) return a.bind(e);
							try {
								return Function.prototype.bind.call(a, e)
							} catch (t) {
								return function() {
									return Function.prototype.apply.apply(a, [e, arguments])
								}
							}
						}

						function t() {
							console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace()
						}

						function a(a) {
							return "debug" === a && (a = "log"), typeof console !== u && ("trace" === a && d ? t : void 0 !== console[a] ? e(console, a) : void 0 !== console.log ? e(console, "log") : s)
						}

						function r(e, t) {
							for (var a = 0; a < l.length; a++) {
								var r = l[a];
								this[r] = a < e ? s : this.methodFactory(r, e, t)
							}
							this.log = this.debug
						}

						function i(e, t, a) {
							return function() {
								typeof console !== u && (r.call(this, t, a), this[e].apply(this, arguments))
							}
						}

						function n(e, t, r) {
							return a(e) || i.apply(this, arguments)
						}

						function o(e, t, a) {
							function i() {
								var e;
								if (typeof window !== u && d) {
									try {
										e = window.localStorage[d]
									} catch (e) {}
									if (typeof e === u) try {
										var t = window.document.cookie,
											a = t.indexOf(encodeURIComponent(d) + "="); - 1 !== a && (e = /^([^;]+)/.exec(t.slice(a))[1])
									} catch (e) {}
									return void 0 === s.levels[e] && (e = void 0), e
								}
							}
							var o, s = this,
								d = "loglevel";
							"string" == typeof e ? d += ":" + e : "symbol" == typeof e && (d = void 0), s.name = e, s.levels = {
								TRACE: 0,
								DEBUG: 1,
								INFO: 2,
								WARN: 3,
								ERROR: 4,
								SILENT: 5
							}, s.methodFactory = a || n, s.getLevel = function() {
								return o
							}, s.setLevel = function(t, a) {
								if ("string" == typeof t && void 0 !== s.levels[t.toUpperCase()] && (t = s.levels[t.toUpperCase()]), !("number" == typeof t && t >= 0 && t <= s.levels.SILENT)) throw "log.setLevel() called with invalid level: " + t;
								if (o = t, !1 !== a && function(e) {
										var t = (l[e] || "silent").toUpperCase();
										if (typeof window !== u && d) {
											try {
												return void(window.localStorage[d] = t)
											} catch (e) {}
											try {
												window.document.cookie = encodeURIComponent(d) + "=" + t + ";"
											} catch (e) {}
										}
									}(t), r.call(s, t, e), typeof console === u && t < s.levels.SILENT) return "No console available for logging"
							}, s.setDefaultLevel = function(e) {
								i() || s.setLevel(e, !1)
							}, s.enableAll = function(e) {
								s.setLevel(s.levels.TRACE, e)
							}, s.disableAll = function(e) {
								s.setLevel(s.levels.SILENT, e)
							};
							var c = i();
							null == c && (c = null == t ? "WARN" : t), s.setLevel(c, !1)
						}
						var s = function() {},
							u = "undefined",
							d = typeof window !== u && typeof window.navigator !== u && /Trident\/|MSIE /.test(window.navigator.userAgent),
							l = ["trace", "debug", "info", "warn", "error"],
							c = new o,
							f = {};
						c.getLogger = function(e) {
							if ("symbol" != typeof e && "string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger.");
							var t = f[e];
							return t || (t = f[e] = new o(e, c.getLevel(), c.methodFactory)), t
						};
						var h = typeof window !== u ? window.log : void 0;
						return c.noConflict = function() {
							return typeof window !== u && window.log === c && (window.log = h), c
						}, c.getLoggers = function() {
							return f
						}, c.default = c, c
					}, void 0 !== (i = "function" == typeof r ? r.call(t, a, t, e) : r) && (e.exports = i)
				}()
			}, function(e, t, a) {
				"use strict";

				function r(e) {
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
							var a = [],
								r = !0,
								i = !1,
								n = void 0;
							try {
								for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (a.push(o.value), !t || a.length !== t); r = !0);
							} catch (e) {
								i = !0, n = e
							} finally {
								try {
									!r && s.return && s.return()
								} finally {
									if (i) throw n
								}
							}
							return a
						}(e, t);
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					},
					n = r(a(4)),
					o = r(a(1)),
					s = a(7),
					u = a(5),
					d = r(a(0)),
					l = r(a(11)),
					c = r(a(2)),
					f = r(a(20)),
					h = a(25),
					_ = a(26),
					p = r(a(27)),
					v = r(a(28)),
					y = r(a(29)),
					m = r(a(30)),
					b = r(a(31)),
					g = r(a(32)),
					w = r(a(33)),
					x = r(a(34)),
					T = r(a(35)),
					k = r(a(36)),
					E = r(a(37)),
					D = r(a(38)),
					q = r(a(39)),
					S = r(a(40)),
					O = r(a(49)),
					P = ["viewstart", "ended", "loadstart", "pause", "play", "playing", "ratechange", "waiting", "adplay", "adpause", "adended", "aderror", "adplaying", "adrequest", "adresponse", "adbreakstart", "adbreakend", "adfirstquartile", "admidpoint", "adthirdquartile", "rebufferstart", "rebufferend", "seeked", "error", "hb", "requestcompleted", "requestfailed", "requestcanceled", "renditionchange"],
					A = function(e, t, a) {
						var r = this;
						this.DOM_CONTENT_LOADED_EVENT_END = l.default.domContentLoadedEventEnd(), this.NAVIGATION_START = l.default.navigationStart(), this.mux = e, this.id = t, (a = (0, o.default)({
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
						}, a)).data = a.data || {}, a.data.property_key && (a.data.env_key = a.data.property_key, delete a.data.property_key), n.default.setLevel(a.debug ? "debug" : "warn"), this.getPlayheadTime = a.getPlayheadTime, this.getStateData = a.getStateData || function() {}, this.getAdData = a.getAdData || function() {}, this.minimumRebufferDuration = a.minimumRebufferDuration, this.sustainedRebufferThreshold = a.sustainedRebufferThreshold, this.playbackHeartbeatTime = a.playbackHeartbeatTime, this.disableRebufferTracking = a.disableRebufferTracking, this.disableRebufferTracking && this.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."), this.errorTranslator = a.errorTranslator, this.playbackEventDispatcher = new S.default(e, a.data.env_key, a), this.data = {
							player_instance_id: (0, s.generateUUID)(),
							mux_sample_rate: a.sampleRate,
							beacon_domain: a.beaconDomain
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
						void 0 !== d.default && "function" == typeof d.default.addEventListener && d.default.addEventListener("unload", c, !1), this.on("destroy", (function() {
							void 0 !== d.default && "function" == typeof d.default.removeEventListener && d.default.removeEventListener("unload", c)
						})), this.on("playerready", (function(e, t) {
							(0, o.default)(this.data, t)
						})), P.forEach((function(e) {
							r.on(e, (function(t, a) {
								0 !== e.indexOf("ad") && this._updateStateData(), (0, o.default)(this.data, a), this._sanitizeData()
							})), r.on("after" + e, (function() {
								("error" !== e || this.viewErrored) && this.send(e)
							}))
						})), this.on("viewend", (function(e, t) {
							(0, o.default)(r.data, t)
						})), this.one("playerready", (function(e) {
							var t = this.mux.utils.now();
							this.data.player_init_time && (this.data.player_startup_time = t - this.data.player_init_time), !this.mux.PLAYER_TRACKED && this.NAVIGATION_START && (this.mux.PLAYER_TRACKED = !0, (this.data.player_init_time || this.DOM_CONTENT_LOADED_EVENT_END) && (this.data.page_load_time = Math.min(this.data.player_init_time || 1 / 0, this.DOM_CONTENT_LOADED_EVENT_END || 1 / 0) - this.NAVIGATION_START)), this.send("playerready"), delete this.data.player_startup_time, delete this.data.page_load_time
						})), y.default.apply(this), q.default.apply(this), k.default.apply(this), g.default.apply(this), v.default.apply(this), T.default.apply(this), m.default.apply(this), b.default.apply(this), E.default.apply(this), w.default.apply(this), x.default.apply(this), D.default.apply(this), O.default.apply(this), a.hlsjs && this.addHLSJS(a), a.dashjs && this.addDashJS(a), this.emit("viewinit", a.data)
					};
				(0, o.default)(A.prototype, p.default.prototype), (0, o.default)(A.prototype, g.default.prototype), (0, o.default)(A.prototype, k.default.prototype), (0, o.default)(A.prototype, v.default.prototype), (0, o.default)(A.prototype, m.default.prototype), (0, o.default)(A.prototype, b.default.prototype), (0, o.default)(A.prototype, E.default.prototype), (0, o.default)(A.prototype, w.default.prototype), (0, o.default)(A.prototype, x.default.prototype), A.prototype.destroy = function() {
					this._destroyed || (this._destroyed = !0, void 0 !== this.data.view_start && (this.emit("viewend"), this.send("viewend")), this.playbackEventDispatcher.destroy(), this.removeHLSJS(), this.removeDashJS(), d.default.clearTimeout(this._heartBeatTimeout))
				}, A.prototype.send = function(e) {
					var t = (0, o.default)({}, this.data);
					if (1 === t.player_error_code && (delete t.player_error_code, delete t.player_error_message), t.player_source_duration === 1 / 0 || t.video_source_duration === 1 / 0 ? t.video_source_is_live = !0 : (t.player_source_duration > 0 || t.video_source_duration > 0) && (t.video_source_is_live = !1), t.video_source_url = t.video_source_url || t.player_source_url, t.video_source_url) {
						var a = (0, u.extractHostnameAndDomain)(t.video_source_url),
							r = i(a, 2),
							n = r[0],
							s = r[1];
						t.video_source_domain = s, t.video_source_hostname = n
					}
					delete t.ad_request_id, this.playbackEventDispatcher.send(e, t), this.data.view_sequence_number++, this.data.player_sequence_number++, this._restartHeartBeat()
				}, A.prototype._updateStateData = function() {
					(0, o.default)(this.data, this.getStateData()), this.getPlayheadTime && (this.data.player_playhead_time = this.getPlayheadTime()), this._sanitizeData()
				}, A.prototype._sanitizeData = function() {
					var e = this;
					["player_width", "player_height", "video_source_width", "video_source_height", "player_playhead_time", "video_source_bitrate"].forEach((function(t) {
						var a = parseInt(e.data[t], 10);
						e.data[t] = isNaN(a) ? void 0 : a
					})), ["player_source_url", "video_source_url"].forEach((function(t) {
						if (e.data[t]) {
							var a = e.data[t].toLowerCase();
							0 !== a.indexOf("data:") && 0 !== a.indexOf("blob:") || (e.data[t] = "MSE style URL")
						}
					}))
				}, A.prototype._resetVideoData = function(e, t) {
					var a = this;
					Object.keys(this.data).forEach((function(e) {
						0 === e.indexOf("video_") && delete a.data[e]
					}))
				}, A.prototype._resetViewData = function() {
					var e = this;
					Object.keys(this.data).forEach((function(t) {
						0 === t.indexOf("view_") && delete e.data[t]
					})), this.data.view_sequence_number = 1
				}, A.prototype._resetErrorData = function(e, t) {
					delete this.data.player_error_code, delete this.data.player_error_message
				}, A.prototype._initializeViewData = function() {
					var e = this,
						t = this.data.view_id = (0, s.generateUUID)();
					this.data.video_id || (this.data.video_id = (0, f.default)(this.data.player_source_url));
					var a = function() {
						t === e.data.view_id && (0, c.default)(e.data, "player_view_count", 1)
					};
					this.data.player_is_paused ? this.one("play", a) : a()
				}, A.prototype._restartHeartBeat = function() {
					var e = this;
					d.default.clearTimeout(this._heartBeatTimeout), this.viewErrored || (this._heartBeatTimeout = d.default.setTimeout((function() {
						e.data.player_is_paused || e.emit("hb")
					}), 1e4))
				}, A.prototype.addHLSJS = function(e) {
					return e.hlsjs ? this.hlsjs ? void this.mux.log.warn("An instance of HLS.js is already being monitored for this player.") : (this.hlsjs = e.hlsjs, void(0, h.monitorHlsJs)(this.mux, this.id, e.hlsjs, {}, e.Hls || d.default.Hls)) : void this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.")
				}, A.prototype.removeHLSJS = function() {
					this.hlsjs && ((0, h.stopMonitoringHlsJs)(this.hlsjs), this.hlsjs = void 0)
				}, A.prototype.addDashJS = function(e) {
					return e.dashjs ? this.dashjs ? void this.mux.log.warn("An instance of Dash.js is already being monitored for this player.") : (this.dashjs = e.dashjs, void(0, _.monitorDashJS)(this.mux, this.id, e.dashjs)) : void this.mux.log.warn("You must pass a valid dashjs instance in order to track it.")
				}, A.prototype.removeDashJS = function() {
					this.dashjs && ((0, _.stopMonitoringDashJS)(this.dashjs), this.dashjs = void 0)
				}, t.default = A
			}, function(e, t, a) {
				"use strict";

				function r(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e) {
					var t = i.default.createElement("a");
					t.href = e;
					var a = t.pathname.replace(/\.[^\/.]+$/, "");
					return n.default.encode(t.host + a).split("=")[0]
				};
				var i = r(a(21)),
					n = r(a(23))
			}, function(e, t, a) {
				(function(t) {
					var r, i = void 0 !== t ? t : "undefined" != typeof window ? window : {},
						n = a(22);
					"undefined" != typeof document ? r = document : (r = i["__GLOBAL_DOCUMENT_CACHE@4"]) || (r = i["__GLOBAL_DOCUMENT_CACHE@4"] = n), e.exports = r
				}).call(t, a(6))
			}, function(e, t) {}, function(e, t, a) {
				(function(e, r) {
					var i;
					! function(r) {
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
							d = {
								encode: function(e) {
									e = String(e), /[^\0-\xFF]/.test(e) && o("The string to be encoded contains characters outside of the Latin1 range.");
									for (var t, a, r, i, n = e.length % 3, u = "", d = -1, l = e.length - n; ++d < l;) t = e.charCodeAt(d) << 16, a = e.charCodeAt(++d) << 8, r = e.charCodeAt(++d), u += s.charAt((i = t + a + r) >> 18 & 63) + s.charAt(i >> 12 & 63) + s.charAt(i >> 6 & 63) + s.charAt(63 & i);
									return 2 == n ? (t = e.charCodeAt(d) << 8, a = e.charCodeAt(++d), u += s.charAt((i = t + a) >> 10) + s.charAt(i >> 4 & 63) + s.charAt(i << 2 & 63) + "=") : 1 == n && (i = e.charCodeAt(d), u += s.charAt(i >> 2) + s.charAt(i << 4 & 63) + "=="), u
								},
								decode: function(e) {
									var t = (e = String(e).replace(u, "")).length;
									t % 4 == 0 && (t = (e = e.replace(/==?$/, "")).length), (t % 4 == 1 || /[^+a-zA-Z0-9\/]/.test(e)) && o("Invalid character: the string to be decoded is not correctly encoded.");
									for (var a, r, i = 0, n = "", d = -1; ++d < t;) r = s.indexOf(e.charAt(d)), a = i % 4 ? 64 * a + r : r, i++ % 4 && (n += String.fromCharCode(255 & a >> (-2 * i & 6)));
									return n
								},
								version: "0.1.0"
							};
						void 0 !== (i = function() {
							return d
						}.call(t, a, t, e)) && (e.exports = i)
					}()
				}).call(t, a(24)(e), a(6))
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
			}, function(e, t, a) {
				"use strict";

				function r(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.stopMonitoringHlsJs = t.monitorHlsJs = void 0;
				var i = r(a(8)),
					n = r(a(11)),
					o = a(5),
					s = function(e) {
						if (!e) return {};
						var t = n.default.navigationStart(),
							a = e.loading,
							r = a ? a.start : e.trequest,
							i = a ? a.first : e.tfirst,
							o = a ? a.end : e.tload;
						return {
							bytesLoaded: e.total,
							requestStart: Math.round(t + r),
							responseStart: Math.round(t + i),
							responseEnd: Math.round(t + o)
						}
					},
					u = function(e) {
						if (e && "function" == typeof e.getAllResponseHeaders) return (0, i.default)(e.getAllResponseHeaders())
					};
				t.monitorHlsJs = function(e, t, a) {
					var r = (arguments.length > 3 && void 0 !== arguments[3] && arguments[3], arguments[4]),
						i = e.log;
					if (n.default.exists()) {
						var d = function(a, r) {
								return e.emit(t, a, r)
							},
							l = function(e, t) {
								var a = t.levels,
									r = t.audioTracks,
									i = t.url,
									n = t.stats,
									l = t.networkDetails,
									c = {},
									f = {};
								a.forEach((function(e, t) {
									c[t] = {
										width: e.width,
										height: e.height,
										bitrate: e.bitrate,
										attrs: e.attrs
									}
								})), r.forEach((function(e, t) {
									f[t] = {
										name: e.name,
										language: e.lang,
										bitrate: e.bitrate
									}
								}));
								var h = s(n),
									_ = h.bytesLoaded,
									p = h.requestStart,
									v = h.responseStart,
									y = h.responseEnd;
								d("requestcompleted", {
									request_event_type: e,
									request_bytes_loaded: _,
									request_start: p,
									request_response_start: v,
									request_response_end: y,
									request_type: "manifest",
									request_hostname: (0, o.extractHostname)(i),
									request_response_headers: u(l),
									request_rendition_lists: {
										media: c,
										audio: f,
										video: {}
									}
								})
							};
						a.on(r.Events.MANIFEST_LOADED, l);
						var c = function(e, t) {
							var a = t.details,
								r = t.level,
								i = t.networkDetails,
								n = t.stats,
								l = s(n),
								c = l.bytesLoaded,
								f = l.requestStart,
								h = l.responseStart,
								_ = l.responseEnd;
							d("requestcompleted", {
								request_event_type: e,
								request_bytes_loaded: c,
								request_start: f,
								request_response_start: h,
								request_response_end: _,
								request_current_level: r,
								request_type: "manifest",
								request_hostname: (0, o.extractHostname)(a.url),
								request_response_headers: u(i)
							})
						};
						a.on(r.Events.LEVEL_LOADED, c);
						var f = function(e, t) {
							var a = t.details,
								r = t.networkDetails,
								i = t.stats,
								n = s(i),
								l = n.bytesLoaded,
								c = n.requestStart,
								f = n.responseStart,
								h = n.responseEnd;
							d("requestcompleted", {
								request_event_type: e,
								request_bytes_loaded: l,
								request_start: c,
								request_response_start: f,
								request_response_end: h,
								request_type: "manifest",
								request_hostname: (0, o.extractHostname)(a.url),
								request_response_headers: u(r)
							})
						};
						a.on(r.Events.AUDIO_TRACK_LOADED, f);
						var h = function(e, t) {
							var r = t.stats,
								i = t.networkDetails,
								n = t.frag,
								l = s(r),
								c = {
									request_event_type: e,
									request_bytes_loaded: l.bytesLoaded,
									request_start: l.requestStart,
									request_response_start: l.responseStart,
									request_response_end: l.responseEnd,
									request_hostname: i ? (0, o.extractHostname)(i.responseURL) : void 0,
									request_response_headers: u(i),
									request_media_duration: n.duration
								};
							"main" === n.type ? (c.request_type = "media", c.request_current_level = n.level, c.request_video_width = (a.levels[n.level] || {}).width, c.request_video_height = (a.levels[n.level] || {}).height) : c.request_type = n.type, d("requestcompleted", c)
						};
						a.on(r.Events.FRAG_LOADED, h);
						var _ = function(e, t) {
							var a = t.details,
								i = t.response,
								n = t.context,
								s = t.frag;
							if (a === r.ErrorDetails.MANIFEST_LOAD_ERROR || a === r.ErrorDetails.MANIFEST_LOAD_TIMEOUT || a === r.ErrorDetails.FRAG_LOAD_ERROR || a === r.ErrorDetails.FRAG_LOAD_TIMEOUT || a === r.ErrorDetails.LEVEL_LOAD_ERROR || a === r.ErrorDetails.LEVEL_LOAD_TIMEOUT) {
								var u = s && s.url || n && n.url || "";
								d("requestfailed", {
									request_error: a,
									request_url: u,
									request_hostname: (0, o.extractHostname)(u),
									request_type: a === r.ErrorDetails.FRAG_LOAD_ERROR || a === r.ErrorDetails.FRAG_LOAD_TIMEOUT ? "media" : "manifest",
									request_error_code: i && i.code,
									request_error_text: i && i.text
								})
							}
						};
						a.on(r.Events.ERROR, _);
						var p = function(e, t) {
							var a = t.frag,
								r = a && a._url || "";
							d("requestcanceled", {
								request_cancel: e,
								request_url: r,
								request_type: "media",
								request_hostname: (0, o.extractHostname)(r)
							})
						};
						a.on(r.Events.FRAG_LOAD_EMERGENCY_ABORTED, p);
						var v = function(e, t) {
							var r = t.level,
								n = a.levels.find((function(e) {
									return e.level === r
								}));
							if (n && n.attrs && n.attrs.BANDWIDTH) {
								var o = n.attrs.BANDWIDTH;
								o ? d("renditionchange", {
									video_source_bitrate: o,
									video_source_width: n.width,
									video_source_height: n.height
								}) : i.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")
							}
						};
						a.on(r.Events.LEVEL_SWITCHED, v), a._stopMuxMonitor = function() {
							a.off(r.Events.MANIFEST_LOADED, l), a.off(r.Events.LEVEL_LOADED, c), a.off(r.Events.AUDIO_TRACK_LOADED, f), a.off(r.Events.FRAG_LOADED, h), a.off(r.Events.ERROR, _), a.off(r.Events.FRAG_LOAD_EMERGENCY_ABORTED, p), a.off(r.Events.LEVEL_SWITCHED, v), a.off(r.Events.DESTROYING, a._stopMuxMonitor), delete a._stopMuxMonitor
						}, a.on(r.Events.DESTROYING, a._stopMuxMonitor)
					} else i.warn("performance timing not supported. Not tracking HLS.js.")
				}, t.stopMonitoringHlsJs = function(e) {
					e && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor()
				}
			}, function(e, t, a) {
				"use strict";

				function r(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.stopMonitoringDashJS = t.monitorDashJS = void 0;
				var i = r(a(0)),
					n = r(a(8)),
					o = a(5),
					s = function(e, t) {
						if (!e || "function" != typeof e.getRequests) return {};
						var a = e.getRequests({
							state: "executed"
						});
						if (0 === a.length) return {};
						var r = a[a.length - 1],
							i = (0, o.extractHostname)(r.url),
							s = r.bytesLoaded,
							u = new Date(r.requestStartDate).getTime(),
							d = new Date(r.firstByteDate).getTime(),
							l = new Date(r.requestEndDate).getTime(),
							c = isNaN(r.duration) ? 0 : r.duration,
							f = "function" == typeof t.getMetricsFor ? t.getMetricsFor(r.mediaType).HttpList : t.getDashMetrics().getHttpRequests(r.mediaType),
							h = void 0;
						return f.length > 0 && (h = (0, n.default)(f[f.length - 1]._responseHeaders || "")), {
							requestStart: u,
							requestResponseStart: d,
							requestResponseEnd: l,
							requestBytesLoaded: s,
							requestResponseHeaders: h,
							requestMediaDuration: c,
							requestHostname: i
						}
					},
					u = function(e, t) {
						var a = t.getQualityFor(e),
							r = t.getCurrentTrackFor(e).bitrateList;
						return r ? {
							currentLevel: a,
							renditionWidth: r[a].width || null,
							renditionHeight: r[a].height || null,
							renditionBitrate: r[a].bandwidth
						} : {}
					};
				t.monitorDashJS = function(e, t, a) {
					var r = (arguments.length > 3 && void 0 !== arguments[3] && arguments[3], e.log);
					if (a && a.on) {
						var n = function(a, r) {
								return e.emit(t, a, r)
							},
							d = function(e) {
								var t = e.type,
									a = (e.data || {}).url;
								n("requestcompleted", {
									request_event_type: t,
									request_start: 0,
									request_response_start: 0,
									request_response_end: 0,
									request_bytes_loaded: -1,
									request_type: "manifest",
									request_hostname: (0, o.extractHostname)(a)
								})
							};
						a.on("manifestLoaded", d);
						var l = {},
							c = function(e) {
								var t = e.type,
									r = e.fragmentModel,
									i = (e.chunk || {}).mediaInfo || {},
									o = i.type,
									u = i.bitrateList,
									d = {};
								(u = u || []).forEach((function(e, t) {
									d[t] = {}, d[t].width = e.width, d[t].height = e.height, d[t].bitrate = e.bandwidth, d[t].attrs = {}
								})), "video" === o ? l.video = d : "audio" === o ? l.audio = d : l.media = d;
								var c = s(r, a),
									f = c.requestStart,
									h = c.requestResponseStart,
									_ = c.requestResponseEnd,
									p = c.requestResponseHeaders,
									v = c.requestMediaDuration,
									y = c.requestHostname;
								n("requestcompleted", {
									request_event_type: t,
									request_start: f,
									request_response_start: h,
									request_response_end: _,
									request_bytes_loaded: -1,
									request_type: o + "_init",
									request_response_headers: p,
									request_hostname: y,
									request_media_duration: v,
									request_rendition_lists: l
								})
							};
						a.on("initFragmentLoaded", c);
						var f = function(e) {
							var t = e.type,
								r = e.fragmentModel,
								i = e.chunk || {},
								o = i.mediaInfo,
								d = i.start,
								l = (o || {}).type,
								c = s(r, a),
								f = c.requestStart,
								h = c.requestResponseStart,
								_ = c.requestResponseEnd,
								p = c.requestBytesLoaded,
								v = c.requestResponseHeaders,
								y = c.requestMediaDuration,
								m = c.requestHostname,
								b = u(l, a),
								g = b.currentLevel,
								w = b.renditionWidth,
								x = b.renditionHeight,
								T = b.renditionBitrate;
							n("requestcompleted", {
								request_event_type: t,
								request_start: f,
								request_response_start: h,
								request_response_end: _,
								request_bytes_loaded: p,
								request_type: l,
								request_response_headers: v,
								request_hostname: m,
								request_media_start_time: d,
								request_media_duration: y,
								request_current_level: g,
								request_labeled_bitrate: T,
								request_video_width: w,
								request_video_height: x
							})
						};
						a.on("mediaFragmentLoaded", f);
						var h = {
								video: void 0,
								audio: void 0,
								totalBitrate: void 0
							},
							_ = function() {
								if (h.video && "number" == typeof h.video.bitrate) {
									if (!h.video.width || !h.video.height) return void r.warn("have bitrate info for video but missing width/height");
									var e = h.video.bitrate;
									return h.audio && "number" == typeof h.audio.bitrate && (e += h.audio.bitrate), e !== h.totalBitrate ? (h.totalBitrate = e, {
										video_source_bitrate: e,
										video_source_height: h.video.height,
										video_source_width: h.video.width
									}) : void 0
								}
							},
							p = function(e, t, i) {
								if ("number" == typeof e.newQuality) {
									var o = e.mediaType;
									if ("audio" === o || "video" === o) {
										var s = a.getBitrateInfoListFor(o).find((function(t) {
											return t.qualityIndex === e.newQuality
										}));
										if (!s || "number" != typeof s.bitrate) return void r.warn("missing bitrate info for " + o);
										h[o] = s;
										var u = _();
										u && n("renditionchange", u)
									}
								} else r.warn("missing evt.newQuality in qualityChangeRendered event", e)
							};
						a.on("qualityChangeRendered", p);
						var v = function(e) {
							var t = e.error,
								a = e.event,
								r = (a = a || {}).request || {},
								s = i.default.event && i.default.event.currentTarget || {};
							n("requestfailed", {
								request_error: t + "_" + a.id + "_" + r.type,
								request_url: a.url,
								request_hostname: (0, o.extractHostname)(a.url),
								request_type: r.mediaType,
								request_error_code: s.status,
								request_error_type: s.statusText
							})
						};
						a.on("error", v), a._stopMuxMonitor = function() {
							a.off("manifestLoaded", d), a.off("initFragmentLoaded", c), a.off("mediaFragmentLoaded", f), a.off("qualityChangeRendered", p), a.off("error", v), delete a._stopMuxMonitor
						}
					} else r.warn("Invalid dash.js player reference. Monitoring blocked.")
				}, t.stopMonitoringDashJS = function(e) {
					e && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor()
				}
			}, function(e, t, a) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var r = function() {},
					i = 0;
				r.prototype.on = function(e, t, a) {
					return t._eventEmitterGuid = t._eventEmitterGuid || ++i, this._listeners = this._listeners || {}, this._listeners[e] = this._listeners[e] || [], a && (t = t.bind(a)), this._listeners[e].push(t), t
				}, r.prototype.off = function(e, t) {
					var a = this._listeners && this._listeners[e];
					a && a.forEach((function(e, r) {
						e._eventEmitterGuid === t._eventEmitterGuid && a.splice(r, 1)
					}))
				}, r.prototype.one = function(e, t, a) {
					var r = this;
					t._eventEmitterGuid = t._eventEmitterGuid || ++i;
					var n = function i() {
						r.off(e, i), t.apply(a || this, arguments)
					};
					n._eventEmitterGuid = t._eventEmitterGuid, this.on(e, n)
				}, r.prototype.emit = function(e, t) {
					var a = this;
					if (this._listeners) {
						t = t || {};
						var r = this._listeners["before*"] || [],
							i = this._listeners[e] || [],
							n = this._listeners["after" + e] || [],
							o = function(t, r) {
								(t = t.slice()).forEach((function(t) {
									t.call(a, {
										type: e
									}, r)
								}))
							};
						o(r, t), o(i, t), o(n, t)
					}
				}, t.default = r
			}, function(e, t, a) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var r = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(a(0)),
					i = function() {
						this._playbackHeartbeatInterval = null, this._playheadShouldBeProgressing = !1, this.on("playing", (function() {
							this._playheadShouldBeProgressing = !0
						})), this.on("play", this._startPlaybackHeartbeatInterval), this.on("playing", this._startPlaybackHeartbeatInterval), this.on("adbreakstart", this._startPlaybackHeartbeatInterval), this.on("adplay", this._startPlaybackHeartbeatInterval), this.on("adplaying", this._startPlaybackHeartbeatInterval), this.on("seeking", this._startPlaybackHeartbeatInterval), this.on("devicewake", this._startPlaybackHeartbeatInterval), this.on("viewstart", this._startPlaybackHeartbeatInterval), this.on("pause", this._stopPlaybackHeartbeatInterval), this.on("ended", this._stopPlaybackHeartbeatInterval), this.on("viewend", this._stopPlaybackHeartbeatInterval), this.on("error", this._stopPlaybackHeartbeatInterval), this.on("aderror", this._stopPlaybackHeartbeatInterval), this.on("adpause", this._stopPlaybackHeartbeatInterval), this.on("adended", this._stopPlaybackHeartbeatInterval), this.on("adbreakend", this._stopPlaybackHeartbeatInterval), this.on("seeked", (function() {
							this.data.player_is_paused ? this._stopPlaybackHeartbeatInterval() : this._startPlaybackHeartbeatInterval()
						})), this.on("timeupdate", (function() {
							null !== this._playbackHeartbeatInterval && this.emit("playbackheartbeat")
						})), this.on("devicesleep", (function(e, t) {
							null !== this._playbackHeartbeatInterval && (r.default.clearInterval(this._playbackHeartbeatInterval), this.emit("playbackheartbeatend", {
								viewer_time: t.viewer_time
							}), this._playbackHeartbeatInterval = null)
						}))
					};
				i.prototype._startPlaybackHeartbeatInterval = function() {
					var e = this;
					null === this._playbackHeartbeatInterval && (this.emit("playbackheartbeat"), this._playbackHeartbeatInterval = r.default.setInterval((function() {
						e.emit("playbackheartbeat")
					}), this.playbackHeartbeatTime))
				}, i.prototype._stopPlaybackHeartbeatInterval = function() {
					this._playheadShouldBeProgressing = !1, null !== this._playbackHeartbeatInterval && (r.default.clearInterval(this._playbackHeartbeatInterval), this.emit("playbackheartbeatend"), this._playbackHeartbeatInterval = null)
				}, t.default = i
			}, function(e, t, a) {
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
			}, function(e, t, a) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var r = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(a(2)),
					i = function() {
						this._watchTimeTrackerLastCheckedTime = null, this.on("playbackheartbeat", this._updateWatchTime), this.on("playbackheartbeatend", this._clearWatchTimeState)
					};
				i.prototype._updateWatchTime = function(e, t) {
					var a = t.viewer_time;
					null === this._watchTimeTrackerLastCheckedTime && (this._watchTimeTrackerLastCheckedTime = a), (0, r.default)(this.data, "view_watch_time", a - this._watchTimeTrackerLastCheckedTime), this._watchTimeTrackerLastCheckedTime = a
				}, i.prototype._clearWatchTimeState = function(e, t) {
					this._updateWatchTime(e, t), this._watchTimeTrackerLastCheckedTime = null
				}, t.default = i
			}, function(e, t, a) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var r = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(a(2)),
					i = function() {
						this._playbackTimeTrackerLastPlayheadPosition = -1, this.on("playbackheartbeat", this._updatePlaybackTime), this.on("playbackheartbeatend", this._clearPlaybackTimeState), this.on("seeking", this._clearPlaybackTimeState)
					};
				i.prototype._updatePlaybackTime = function() {
					var e = this.data.player_playhead_time;
					if (this._playbackTimeTrackerLastPlayheadPosition >= 0 && e > this._playbackTimeTrackerLastPlayheadPosition) {
						var t = e - this._playbackTimeTrackerLastPlayheadPosition;
						t <= 1e3 && (0, r.default)(this.data, "view_content_playback_time", t)
					}
					this._playbackTimeTrackerLastPlayheadPosition = e
				}, i.prototype._clearPlaybackTimeState = function() {
					this._updatePlaybackTime(), this._playbackTimeTrackerLastPlayheadPosition = -1
				}, t.default = i
			}, function(e, t, a) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var r = function() {
					this.on("playbackheartbeat", this._updatePlayheadTime), this.on("playbackheartbeatend", this._updatePlayheadTime), this.on("timeupdate", this._updatePlayheadTime), this.on("destroy", (function() {
						this.off("timeupdate", this._updatePlayheadTime)
					}))
				};
				r.prototype._updateMaxPlayheadPosition = function() {
					this.data.view_max_playhead_position = void 0 === this.data.view_max_playhead_position ? this.data.player_playhead_time : Math.max(this.data.view_max_playhead_position, this.data.player_playhead_time)
				}, r.prototype._updatePlayheadTime = function(e, t) {
					if (t.player_playhead_time) this.data.player_playhead_time = t.player_playhead_time, this._updateMaxPlayheadPosition();
					else if (this.getPlayheadTime) {
						var a = this.getPlayheadTime();
						void 0 !== a && (this.data.player_playhead_time = a, this._updateMaxPlayheadPosition())
					}
				}, t.default = r
			}, function(e, t, a) {
				"use strict";

				function r(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var i = r(a(3)),
					n = r(a(2)),
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
						var a = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
						a >= this.sustainedRebufferThreshold && (this._rebuffering ? this._updateRebufferMetrics(t.viewer_time - this._lastCheckedTime) : (this._rebuffering = !0, (0, n.default)(this.data, "view_rebuffer_count", 1), this._updateRebufferMetrics(a), this.emit("rebufferstart"))), this._lastCheckedTime = t.viewer_time
					}
				}, o.prototype._clearRebufferTrackerState = function() {
					this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null
				}, o.prototype._prepareRebufferTrackerState = function(e) {
					this._lastCheckedTime = e, this._lastPlayheadTime = this.data.player_playhead_time, this._lastPlayheadTimeUpdatedTime = e
				}, o.prototype._cleanupRebufferTracker = function(e, t) {
					var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					if (!this.disableRebufferTracking) {
						if (this._rebuffering) this._rebuffering = !1, this._updateRebufferMetrics(t.viewer_time - this._lastCheckedTime), this.emit("rebufferend", {
							viewer_time: t.viewer_time
						});
						else {
							if (null === this._lastCheckedTime) return void this._updateRebufferMetrics();
							var r = this.data.player_playhead_time - this._lastPlayheadTime,
								i = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
							r > 0 && i - r > this.minimumRebufferDuration ? ((0, n.default)(this.data, "view_rebuffer_count", 1), this._updateRebufferMetrics(i - r), this.emit("rebufferstart", {
								viewer_time: this._lastPlayheadTimeUpdatedTime
							}), this.emit("rebufferend", {
								viewer_time: this._lastPlayheadTimeUpdatedTime + i - r
							})) : this._updateRebufferMetrics()
						}
						a ? this._prepareRebufferTrackerState(t.viewer_time) : this._clearRebufferTrackerState()
					}
				}, o.prototype._updateRebufferMetrics = function(e) {
					e > 0 && (0, n.default)(this.data, "view_rebuffer_duration", e), this.data.view_watch_time >= 0 && this.data.view_rebuffer_count > 0 && (this.data.view_rebuffer_frequency = this.data.view_rebuffer_count / this.data.view_watch_time, this.data.view_rebuffer_percentage = this.data.view_rebuffer_duration / this.data.view_watch_time)
				}, t.default = o
			}, function(e, t, a) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var r = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(a(3)),
					i = function() {
						this.on("viewinit", (function() {
							var e = this.data,
								t = e.view_id;
							if (!e.view_program_changed) {
								var a = function(e, a) {
									var i = a.viewer_time;
									"playing" === e.type && void 0 === this.data.view_time_to_first_frame ? this.calculateTimeToFirstFrame(i || r.default.now(), t) : "adplaying" !== e.type || void 0 !== this.data.view_time_to_first_frame && !this.inPrerollPosition() || this.calculateTimeToFirstFrame(i || r.default.now(), t)
								};
								this.one("playing", a), this.one("adplaying", a), this.one("viewend", (function() {
									this.off("playing", a), this.off("adplaying", a)
								}))
							}
						}))
					};
				i.prototype.calculateTimeToFirstFrame = function(e, t) {
					t === this.data.view_id && (this._updateWatchTime(null, {
						viewer_time: e
					}), this.data.view_time_to_first_frame = this.data.view_watch_time, (this.data.player_autoplay_on || this.data.video_is_autoplay) && this.NAVIGATION_START && (this.data.view_aggregate_startup_time = this.data.view_start + this.data.view_watch_time - this.NAVIGATION_START))
				}, t.default = i
			}, function(e, t, a) {
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
									a = Math.max(0, t - 1),
									i = Math.max(0, 1 - t);
								this.data.view_max_upscale_percentage = Math.max(this.data.view_max_upscale_percentage || 0, a), this.data.view_max_downscale_percentage = Math.max(this.data.view_max_downscale_percentage || 0, i), (0, r.default)(this.data, "view_total_content_playback_time", e), (0, r.default)(this.data, "view_total_upscaling", a * e), (0, r.default)(this.data, "view_total_downscaling", i * e)
							}
							this._lastPlayheadPosition = -1
						}))
					})), ["playing", "hb"].forEach((function(t) {
						e.on(t, (function() {
							this._lastPlayheadPosition = this.data.player_playhead_time, this._lastPlayerWidth = this.data.player_width, this._lastPlayerHeight = this.data.player_height, this._lastSourceWidth = this.data.video_source_width, this._lastSourceHeight = this.data.video_source_height
						}))
					}))
				};
				var r = function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}(a(2))
			}, function(e, t, a) {
				"use strict";

				function r(e) {
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
						var a = this.data.view_max_seek_time || 0;
						this.data.view_max_seek_time = Math.max(a, t)
					})), this.on("viewend", (function() {
						this.isSeeking = !1
					}))
				};
				var i = r(a(3)),
					n = r(a(2)),
					o = r(a(1))
			}, function(e, t, a) {
				"use strict";

				function r(e) {
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
							var a = [],
								r = !0,
								i = !1,
								n = void 0;
							try {
								for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (a.push(o.value), !t || a.length !== t); r = !0);
							} catch (e) {
								i = !0, n = e
							} finally {
								try {
									!r && s.return && s.return()
								} finally {
									if (i) throw n
								}
							}
							return a
						}(e, t);
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					},
					n = r(a(2)),
					o = a(5),
					s = r(a(1)),
					u = function(e, t) {
						e.push(t), e.sort((function(e, t) {
							return e.viewer_time - t.viewer_time
						}))
					},
					d = ["adbreakstart", "adrequest", "adresponse", "adplay", "adplaying", "adpause", "adended", "adbreakend", "aderror"],
					l = function() {
						var e = this;
						this.on("viewinit", (function() {
							this.isAdBreak = !1, this._currentAdRequestNumber = 0, this._currentAdResponseNumber = 0, this._adRequests = [], this._adResponses = [], this._adHasPlayed = !1, this._wouldBeNewAdPlay = !0, this._prerollPlayTime = void 0
						})), d.forEach((function(t) {
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
							var a = this.findAdRequest(t.ad_request_id);
							a && (0, n.default)(this.data, "view_ad_request_time", Math.max(0, t.viewer_time - a.viewer_time))
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
				l.prototype.inPrerollPosition = function() {
					return void 0 === this.data.view_content_playback_time || this.data.view_content_playback_time <= 1e3
				}, l.prototype.findAdRequest = function(e) {
					for (var t = 0; t < this._adRequests.length; t++)
						if (this._adRequests[t].ad_request_id === e) return this._adRequests[t]
				}, l.prototype._updateAdData = function(e, t) {
					if (this.inPrerollPosition()) {
						if (!this.data.view_preroll_ad_tag_hostname && t.ad_tag_url) {
							var a = (0, o.extractHostnameAndDomain)(t.ad_tag_url),
								r = i(a, 2),
								n = r[0],
								s = r[1];
							this.data.view_preroll_ad_tag_domain = s, this.data.view_preroll_ad_tag_hostname = n
						}
						if (!this.data.view_preroll_ad_asset_hostname && t.ad_asset_url) {
							var u = (0, o.extractHostnameAndDomain)(t.ad_asset_url),
								d = i(u, 2),
								l = d[0],
								c = d[1];
							this.data.view_preroll_ad_asset_domain = c, this.data.view_preroll_ad_asset_hostname = l
						}
					}
				}, t.default = l
			}, function(e, t, a) {
				"use strict";

				function r(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function() {
					var e = this,
						t = void 0,
						a = void 0,
						r = function() {
							e.disableRebufferTracking || t && ((0, n.default)(e.data, "view_waiting_rebuffer_duration", i.default.now() - t), t = !1, window.clearInterval(a))
						},
						o = !1,
						s = function() {
							o = !1, r()
						};
					this.on("waiting", (function() {
						o && (e.disableRebufferTracking || ((0, n.default)(e.data, "view_waiting_rebuffer_count", 1), t = i.default.now(), a = window.setInterval((function() {
							if (t) {
								var a = i.default.now();
								(0, n.default)(e.data, "view_waiting_rebuffer_duration", a - t), t = a
							}
						}), 250)))
					})), this.on("playing", (function() {
						r(), o = !0
					})), this.on("pause", s), this.on("seeking", s)
				};
				var i = r(a(3)),
					n = r(a(2))
			}, function(e, t, a) {
				"use strict";

				function r(e) {
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
				var i = r(a(1)),
					n = r(a(3)),
					o = function() {
						this.lastWallClockTime = n.default.now(), this.on("before*", s)
					},
					s = function(e) {
						var t = n.default.now(),
							a = this.lastWallClockTime;
						this.lastWallClockTime = t, t - a > 3e4 && (this.emit("devicesleep", {
							viewer_time: a
						}), (0, i.default)(this.data, {
							viewer_time: a
						}), this.send("devicesleep"), this.emit("devicewake", {
							viewer_time: t
						}), (0, i.default)(this.data, {
							viewer_time: t
						}), this.send("devicewake"))
					}
			}, function(e, t, a) {
				"use strict";

				function r(e) {
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
					n = r(a(0)),
					o = a(41),
					s = r(a(4)),
					u = r(a(45)),
					d = r(a(10)),
					l = r(a(46)),
					c = r(a(15)),
					f = r(a(47)),
					h = r(a(1)),
					_ = ["env_key", "view_id", "view_sequence_number", "player_sequence_number", "beacon_domain", "player_playhead_time", "viewer_time", "mux_api_version", "event", "video_id", "player_instance_id"],
					p = ["viewstart", "error", "ended", "viewend"],
					v = function(e, t) {
						var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
						this.mux = e, this.envKey = t, this.eventQueue = new f.default((0, u.default)(t, a.beaconDomain)), this.previousBeaconData = null, this.lastEventTime = null, this.sampleRate = a.sampleRate, this.disableCookies = a.disableCookies, this.respectDoNotTrack = a.respectDoNotTrack;
						var r = a.platform || {};
						this.pageLevelData = {
							mux_api_version: this.mux.API_VERSION,
							mux_embed: this.mux.NAME,
							mux_embed_version: this.mux.VERSION,
							viewer_application_name: r.name,
							viewer_application_version: r.version,
							viewer_application_engine: r.layout,
							viewer_device_name: r.product,
							viewer_device_category: "",
							viewer_device_manufacturer: r.manufacturer,
							viewer_os_family: r.os && r.os.family,
							viewer_os_architecture: r.os && r.os.architecture,
							viewer_os_version: r.os && r.os.version
						};
						var i = (0, l.default)();
						i && (this.pageLevelData = (0, h.default)(this.pageLevelData, {
							viewer_connection_type: i
						})), void 0 !== n.default && n.default.location && n.default.location.href && (this.pageLevelData.page_url = n.default.location.href), this.viewerData = this.disableCookies ? {} : (0, o.getAndUpdateViewerData)()
					};
				v.prototype.send = function(e, t) {
					if (e) {
						if (this.respectDoNotTrack && (0, d.default)()) return s.default.info("Not sending `" + e + "` because Do Not Track is enabled");
						if (!t || "object" !== (void 0 === t ? "undefined" : i(t))) return s.default.error("A data object was expected in send() but was not provided");
						var a = this.disableCookies ? {} : (0, o.getAndUpdateSessionData)(),
							r = {};
						(0, h.default)(r, this.pageLevelData), (0, h.default)(r, t), (0, h.default)(r, a), (0, h.default)(r, this.viewerData), r.event = e, r.env_key = this.envKey, r.user_id && (r.viewer_user_id = r.user_id, delete r.user_id);
						var n = r.mux_sample_number >= this.sampleRate,
							u = this._deduplicateBeaconData(e, r),
							l = (0, c.default)(u);
						if (this.lastEventTime = this.mux.utils.now(), n) return s.default.info("Not sending event due to sample rate restriction", e, r, l);
						if (!this.envKey) return s.default.info("Not sending event due to missing environment key", e, r, l);
						if (!this.rateLimited)
							if (s.default.info("Sending event", e, r, l), this.rateLimited = !this.eventQueue.queueEvent(e, l), this.mux.WINDOW_UNLOADING && "viewend" === e) this.eventQueue.destroy(!0);
							else if (p.indexOf(e) >= 0 && this.eventQueue.flushEvents(), this.rateLimited) return r.event = "eventrateexceeded", l = (0, c.default)(r), this.eventQueue.queueEvent(r.event, l), s.default.error("Beaconing disabled due to rate limit.")
					}
				}, v.prototype.destroy = function() {
					this.eventQueue.destroy(!1)
				};
				var y = function(e, t, a, r) {
					return !(!e || 0 !== t.indexOf("request_") || "request_response_headers" !== t && "object" === (void 0 === a ? "undefined" : i(a)) && "object" === (void 0 === r ? "undefined" : i(r)) && Object.keys(a || {}).length === Object.keys(r || {}).length)
				};
				v.prototype._deduplicateBeaconData = function(e, t) {
					var a = this,
						r = {},
						i = t.view_id;
					if (!i || "viewstart" === e || "viewend" === e || !this.previousBeaconData || this.mux.utils.now() - this.lastEventTime >= 6e5) r = (0, h.default)({}, t), i && (this.previousBeaconData = r), i && "viewend" === e && (this.previousBeaconData = null);
					else {
						var n = 0 === e.indexOf("request");
						Object.keys(t).forEach((function(i) {
							var o = t[i];
							(o !== a.previousBeaconData[i] || _.indexOf(i) > -1 || y(n, i, o, a.previousBeaconData[i]) || function(e, t) {
								return "renditionchange" === e && 0 === t.indexOf("video_source_")
							}(e, i)) && (r[i] = o, a.previousBeaconData[i] = o)
						}))
					}
					return r
				}, t.default = v
			}, function(e, t, a) {
				"use strict";

				function r(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.getAndUpdateSessionData = t.getAndUpdateViewerData = void 0;
				var i = r(a(12)),
					n = r(a(44)),
					o = a(7),
					s = r(a(3)),
					u = function() {
						var e = void 0;
						try {
							e = i.default.parse(n.default.get("muxData") || "")
						} catch (t) {
							e = {}
						}
						return e
					},
					d = function(e) {
						try {
							n.default.set("muxData", i.default.stringify(e), {
								expires: 7300
							})
						} catch (e) {}
					};
				t.getAndUpdateViewerData = function() {
					var e = u();
					return e.mux_viewer_id = e.mux_viewer_id || (0, o.generateUUID)(), e.msn = e.msn || Math.random(), d(e), {
						mux_viewer_id: e.mux_viewer_id,
						mux_sample_number: e.msn
					}
				}, t.getAndUpdateSessionData = function() {
					var e = u(),
						t = s.default.now();
					return e.session_start && (e.sst = e.session_start, delete e.session_start), e.session_id && (e.sid = e.session_id, delete e.session_id), e.session_expires && (e.sex = e.session_expires, delete e.session_expires), (!e.sex || e.sex < t) && (e.sid = (0, o.generateUUID)(), e.sst = t), e.sex = t + 15e5, d(e), {
						session_id: e.sid,
						session_start: e.sst,
						session_expires: e.sex
					}
				}
			}, function(e, t, a) {
				"use strict";
				var r = a(13),
					i = a(14),
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
						encoder: r.encode,
						encodeValuesOnly: !1,
						serializeDate: function(e) {
							return o.call(e)
						},
						skipNulls: !1,
						strictNullHandling: !1
					},
					u = function e(t, a, i, n, o, u, d, l, c, f, h, _) {
						var p = t;
						if ("function" == typeof d) p = d(a, p);
						else if (p instanceof Date) p = f(p);
						else if (null === p) {
							if (n) return u && !_ ? u(a, s.encoder) : a;
							p = ""
						}
						if ("string" == typeof p || "number" == typeof p || "boolean" == typeof p || r.isBuffer(p)) return u ? [h(_ ? a : u(a, s.encoder)) + "=" + h(u(p, s.encoder))] : [h(a) + "=" + h(String(p))];
						var v, y = [];
						if (void 0 === p) return y;
						if (Array.isArray(d)) v = d;
						else {
							var m = Object.keys(p);
							v = l ? m.sort(l) : m
						}
						for (var b = 0; b < v.length; ++b) {
							var g = v[b];
							o && null === p[g] || (y = Array.isArray(p) ? y.concat(e(p[g], i(a, g), i, n, o, u, d, l, c, f, h, _)) : y.concat(e(p[g], a + (c ? "." + g : "[" + g + "]"), i, n, o, u, d, l, c, f, h, _)))
						}
						return y
					};
				e.exports = function(e, t) {
					var a = e,
						o = t ? r.assign({}, t) : {};
					if (null !== o.encoder && void 0 !== o.encoder && "function" != typeof o.encoder) throw new TypeError("Encoder has to be a function.");
					var d = void 0 === o.delimiter ? s.delimiter : o.delimiter,
						l = "boolean" == typeof o.strictNullHandling ? o.strictNullHandling : s.strictNullHandling,
						c = "boolean" == typeof o.skipNulls ? o.skipNulls : s.skipNulls,
						f = "boolean" == typeof o.encode ? o.encode : s.encode,
						h = "function" == typeof o.encoder ? o.encoder : s.encoder,
						_ = "function" == typeof o.sort ? o.sort : null,
						p = void 0 !== o.allowDots && o.allowDots,
						v = "function" == typeof o.serializeDate ? o.serializeDate : s.serializeDate,
						y = "boolean" == typeof o.encodeValuesOnly ? o.encodeValuesOnly : s.encodeValuesOnly;
					if (void 0 === o.format) o.format = i.default;
					else if (!Object.prototype.hasOwnProperty.call(i.formatters, o.format)) throw new TypeError("Unknown format option provided.");
					var m, b, g = i.formatters[o.format];
					"function" == typeof o.filter ? a = (b = o.filter)("", a) : Array.isArray(o.filter) && (m = b = o.filter);
					var w, x = [];
					if ("object" != typeof a || null === a) return "";
					w = o.arrayFormat in n ? o.arrayFormat : "indices" in o ? o.indices ? "indices" : "repeat" : "indices";
					var T = n[w];
					m || (m = Object.keys(a)), _ && m.sort(_);
					for (var k = 0; k < m.length; ++k) {
						var E = m[k];
						c && null === a[E] || (x = x.concat(u(a[E], E, T, l, c, f ? h : null, b, _, p, v, g, y)))
					}
					var D = x.join(d),
						q = !0 === o.addQueryPrefix ? "?" : "";
					return D.length > 0 ? q + D : ""
				}
			}, function(e, t, a) {
				"use strict";
				var r = a(13),
					i = Object.prototype.hasOwnProperty,
					n = {
						allowDots: !1,
						allowPrototypes: !1,
						arrayLimit: 20,
						decoder: r.decode,
						delimiter: "&",
						depth: 5,
						parameterLimit: 1e3,
						plainObjects: !1,
						strictNullHandling: !1
					},
					o = function(e, t) {
						for (var a = {}, r = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, o = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit, s = r.split(t.delimiter, o), u = 0; u < s.length; ++u) {
							var d, l, c = s[u],
								f = c.indexOf("]="),
								h = -1 === f ? c.indexOf("=") : f + 1; - 1 === h ? (d = t.decoder(c, n.decoder), l = t.strictNullHandling ? null : "") : (d = t.decoder(c.slice(0, h), n.decoder), l = t.decoder(c.slice(h + 1), n.decoder)), i.call(a, d) ? a[d] = [].concat(a[d]).concat(l) : a[d] = l
						}
						return a
					},
					s = function(e, t, a) {
						if (e) {
							var r = a.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
								n = /(\[[^[\]]*])/g,
								o = /(\[[^[\]]*])/.exec(r),
								s = o ? r.slice(0, o.index) : r,
								u = [];
							if (s) {
								if (!a.plainObjects && i.call(Object.prototype, s) && !a.allowPrototypes) return;
								u.push(s)
							}
							for (var d = 0; null !== (o = n.exec(r)) && d < a.depth;) {
								if (d += 1, !a.plainObjects && i.call(Object.prototype, o[1].slice(1, -1)) && !a.allowPrototypes) return;
								u.push(o[1])
							}
							return o && u.push("[" + r.slice(o.index) + "]"),
								function(e, t, a) {
									for (var r = t, i = e.length - 1; i >= 0; --i) {
										var n, o = e[i];
										if ("[]" === o) n = (n = []).concat(r);
										else {
											n = a.plainObjects ? Object.create(null) : {};
											var s = "[" === o.charAt(0) && "]" === o.charAt(o.length - 1) ? o.slice(1, -1) : o,
												u = parseInt(s, 10);
											!isNaN(u) && o !== s && String(u) === s && u >= 0 && a.parseArrays && u <= a.arrayLimit ? (n = [])[u] = r : n[s] = r
										}
										r = n
									}
									return r
								}(u, t, a)
						}
					};
				e.exports = function(e, t) {
					var a = t ? r.assign({}, t) : {};
					if (null !== a.decoder && void 0 !== a.decoder && "function" != typeof a.decoder) throw new TypeError("Decoder has to be a function.");
					if (a.ignoreQueryPrefix = !0 === a.ignoreQueryPrefix, a.delimiter = "string" == typeof a.delimiter || r.isRegExp(a.delimiter) ? a.delimiter : n.delimiter, a.depth = "number" == typeof a.depth ? a.depth : n.depth, a.arrayLimit = "number" == typeof a.arrayLimit ? a.arrayLimit : n.arrayLimit, a.parseArrays = !1 !== a.parseArrays, a.decoder = "function" == typeof a.decoder ? a.decoder : n.decoder, a.allowDots = "boolean" == typeof a.allowDots ? a.allowDots : n.allowDots, a.plainObjects = "boolean" == typeof a.plainObjects ? a.plainObjects : n.plainObjects, a.allowPrototypes = "boolean" == typeof a.allowPrototypes ? a.allowPrototypes : n.allowPrototypes, a.parameterLimit = "number" == typeof a.parameterLimit ? a.parameterLimit : n.parameterLimit, a.strictNullHandling = "boolean" == typeof a.strictNullHandling ? a.strictNullHandling : n.strictNullHandling, "" === e || null == e) return a.plainObjects ? Object.create(null) : {};
					for (var i = "string" == typeof e ? o(e, a) : e, u = a.plainObjects ? Object.create(null) : {}, d = Object.keys(i), l = 0; l < d.length; ++l) {
						var c = d[l],
							f = s(c, i[c], a);
						u = r.merge(u, f, a)
					}
					return r.compact(u)
				}
			}, function(e, t, a) {
				"use strict";
				var r, i, n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
					return typeof e
				} : function(e) {
					return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
				};
				! function(o) {
					var s = !1;
					if (void 0 !== (i = "function" == typeof(r = o) ? r.call(t, a, t, e) : r) && (e.exports = i), s = !0, "object" === n(t) && (e.exports = o(), s = !0), !s) {
						var u = window.Cookies,
							d = window.Cookies = o();
						d.noConflict = function() {
							return window.Cookies = u, d
						}
					}
				}((function() {
					var e = function() {
						for (var e = 0, t = {}; e < arguments.length; e++) {
							var a = arguments[e];
							for (var r in a) t[r] = a[r]
						}
						return t
					};
					return function t(a) {
						function r(t, i, n) {
							var o;
							if ("undefined" != typeof document) {
								if (arguments.length > 1) {
									if ("number" == typeof(n = e({
											path: "/"
										}, r.defaults, n)).expires) {
										var s = new Date;
										s.setMilliseconds(s.getMilliseconds() + 864e5 * n.expires), n.expires = s
									}
									try {
										o = JSON.stringify(i), /^[\{\[]/.test(o) && (i = o)
									} catch (t) {}
									return i = a.write ? a.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape), document.cookie = [t, "=", i, n.expires ? "; expires=" + n.expires.toUTCString() : "", n.path ? "; path=" + n.path : "", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")
								}
								t || (o = {});
								for (var u = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, l = 0; l < u.length; l++) {
									var c = u[l].split("="),
										f = c.slice(1).join("=");
									'"' === f.charAt(0) && (f = f.slice(1, -1));
									try {
										var h = c[0].replace(d, decodeURIComponent);
										if (f = a.read ? a.read(f, h) : a(f, h) || f.replace(d, decodeURIComponent), this.json) try {
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
						return r.set = r, r.get = function(e) {
							return r.call(r, e)
						}, r.getJSON = function() {
							return r.apply({
								json: !0
							}, [].slice.call(arguments))
						}, r.defaults = {}, r.remove = function(t, a) {
							r(t, "", e(a, {
								expires: -1
							}))
						}, r.withConverter = t, r
					}((function() {}))
				}))
			}, function(e, t, a) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e, t) {
					return t = t || "litix.io", (e = e || "").match(/^[a-z0-9]+$/) ? "https://" + e + "." + t : "https://img.litix.io/a.gif"
				}
			}, function(e, t, a) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var r = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(a(0)),
					i = function() {
						var e = r.default.navigator,
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
							e = "wired";
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
			}, function(e, t, a) {
				"use strict";

				function r(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var i = r(a(0)),
					n = r(a(4)),
					o = r(a(48)),
					s = r(a(1)),
					u = r(a(15)),
					d = !!i.default.XMLHttpRequest && "withCredentials" in new i.default.XMLHttpRequest,
					l = {
						maxBeaconSize: 300,
						maxQueueLength: 3600,
						baseTimeBetweenBeacons: 5e3
					},
					c = function(e, t) {
						this._beaconUrl = e || "https://img.litix.io", this._eventQueue = [], this._postInFlight = !1, this._failureCount = 0, this._sendTimeout = !1, this._options = (0, s.default)({}, l, t)
					};
				c.prototype.queueEvent = function(e, t) {
					var a = (0, s.default)({}, t);
					return d ? (this._eventQueue.length <= this._options.maxQueueLength || "eventrateexceeded" === e) && (this._eventQueue.push(a), this._sendTimeout || this._startBeaconSending(), this._eventQueue.length <= this._options.maxQueueLength) : (o.default.send(this._beaconUrl, a), !0)
				}, c.prototype.flushEvents = function() {
					d && (this._eventQueue.length && this._sendBeaconQueue(), this._startBeaconSending())
				}, c.prototype.destroy = function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					this.destroyed = !0, e ? this._clearBeaconQueue() : this.flushEvents(), i.default.clearTimeout(this._sendTimeout)
				}, c.prototype._clearBeaconQueue = function() {
					var e = i.default.navigator,
						t = this._eventQueue.length > this._options.maxBeaconSize ? this._eventQueue.length - this._options.maxBeaconSize : 0,
						a = this._eventQueue.slice(t);
					if (t > 0 && (0, s.default)(a[a.length - 1], (0, u.default)({
							mux_view_message: "event queue truncated"
						})), e.sendBeacon) e.sendBeacon(this._beaconUrl, JSON.stringify({
						events: a
					}));
					else if (i.default.XMLHttpRequest) {
						var r = new i.default.XMLHttpRequest;
						r.open("POST", this._beaconUrl), r.setRequestHeader("Content-Type", "application/json"), r.send(JSON.stringify({
							events: a
						}))
					} else o.default.send(this._beaconUrl, a[a.length - 1])
				}, c.prototype._sendBeaconQueue = function() {
					var e = this;
					if (i.default.XMLHttpRequest && !this._postInFlight) {
						var t = new i.default.XMLHttpRequest,
							a = this._eventQueue.slice(0, this._options.maxBeaconSize);
						this._eventQueue = this._eventQueue.slice(this._options.maxBeaconSize), this._postInFlight = !0, t.onreadystatechange = function() {
							4 === t.readyState && (200 !== t.status ? (e._eventQueue = a.concat(e._eventQueue), e._failureCount += 1, n.default.info("Error sending beacon: " + t.status), n.default.info(t.responseText)) : e._failureCount = 0, e._postInFlight = !1)
						}, t.open("POST", this._beaconUrl), t.setRequestHeader("Content-Type", "application/json"), t.send(JSON.stringify({
							events: a
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
			}, function(e, t, a) {
				"use strict";

				function r(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var i = r(a(12)),
					n = r(a(0)),
					o = {
						send: function(e, t) {
							function a() {
								r.src = s + (o ? "&rc=" + o : "")
							}
							var r = new Image,
								o = 0,
								s = e + "?" + i.default.stringify(t);
							return r.addEventListener("error", (function() {
								o > 3 || n.default.setTimeout((function() {
									o++, a()
								}), 5e3 * o)
							})), a(), r
						}
					};
				t.default = o
			}, function(e, t, a) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function() {
					var e = 0,
						t = 0,
						a = 0,
						r = 0,
						i = 0,
						n = 0,
						o = 0;
					this.on("requestcompleted", (function(n, o) {
						var s = o.request_start,
							u = o.request_response_start,
							d = o.request_response_end,
							l = o.request_bytes_loaded;
						r++;
						var c = void 0,
							f = void 0;
						if (u ? (c = u - s, f = d - u) : f = d - s, f > 0 && l > 0) {
							var h = l / f * 8e3;
							i++, t += l, a += f, this.data.view_min_request_throughput = Math.min(this.data.view_min_request_throughput || 1 / 0, h), this.data.view_average_request_throughput = t / a * 8e3, this.data.view_request_count = r, c > 0 && (e += c, this.data.view_max_request_latency = Math.max(this.data.view_max_request_latency || 0, c), this.data.view_average_request_latency = e / i)
						}
					})), this.on("requestfailed", (function(e, t) {
						r++, n++, this.data.view_request_count = r, this.data.view_request_failed_count = n
					})), this.on("requestcanceled", (function(e, t) {
						r++, o++, this.data.view_request_count = r, this.data.view_request_canceled_count = o
					}))
				}
			}, function(e, t, a) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					i = function(e, t) {
						if (Array.isArray(e)) return e;
						if (Symbol.iterator in Object(e)) return function(e, t) {
							var a = [],
								r = !0,
								i = !1,
								n = void 0;
							try {
								for (var o, s = e[Symbol.iterator](); !(r = (o = s.next()).done) && (a.push(o.value), !t || a.length !== t); r = !0);
							} catch (e) {
								i = !0, n = e
							} finally {
								try {
									!r && s.return && s.return()
								} finally {
									if (i) throw n
								}
							}
							return a
						}(e, t);
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					};
				t.default = function(e, t, a) {
					var d = (0, o.findMediaElement)(t),
						l = i(d, 3),
						c = l[0],
						f = l[1],
						h = l[2],
						_ = e.log,
						p = e.utils.getComputedStyle,
						v = e.utils.secondsToMs;
					return c ? "video" !== h && "audio" !== h ? _.error("The element of `" + f + "` was not a media element.") : ((a = (0, n.default)({
						automaticErrorTracking: !0
					}, a)).data = (0, n.default)({
						player_software: "HTML5 Video Element",
						player_software_version: "No Versions",
						player_mux_plugin_name: "VideoElementMonitor",
						player_mux_plugin_version: "4.0.1"
					}, a.data), a.getPlayheadTime = function() {
						return v(c.currentTime)
					}, a.getStateData = function() {
						var e = this.hlsjs && this.hlsjs.url,
							t = this.dashjs && r("function" === this.dashjs.getSource) && this.dashjs.getSource();
						return {
							player_is_paused: c.paused,
							player_playhead_time: v(c.currentTime),
							player_width: parseInt(p(c, "width")),
							player_height: parseInt(p(c, "height")),
							player_autoplay_on: c.autoplay,
							player_preload_on: c.preload,
							video_poster_url: c.poster,
							video_source_url: e || t || c.currentSrc,
							video_source_duration: v(c.duration),
							video_source_height: c.videoHeight,
							video_source_width: c.videoWidth
						}
					}, c.mux = c.mux || {}, c.mux.emit = function(t, a) {
						e.emit(f, t, a)
					}, c.mux.destroy = function() {
						Object.keys(c.mux.listeners).forEach((function(e) {
							c.removeEventListener(e, c.mux.listeners[e], !1)
						})), delete c.mux.listeners, e.emit(f, "destroy")
					}, c.mux.swapElement = function(t) {
						var a = (0, o.findMediaElement)(t),
							r = i(a, 3),
							s = r[0],
							u = r[1],
							d = r[2];
						return s ? "video" !== d && "audio" !== d ? e.log.error("The element of `" + u + "` was not a media element.") : (s.muxId = c.muxId, delete c.muxId, s.mux = s.mux || {}, s.mux.listeners = (0, n.default)({}, c.mux.listeners), delete c.mux.listeners, Object.keys(s.mux.listeners).forEach((function(e) {
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
					}, e.init(f, a), e.emit(f, "playerready"), c.paused || (e.emit(f, "play"), c.readyState > 2 && e.emit(f, "playing")), c.mux.listeners = {}, void s.forEach((function(t) {
						("error" !== t || a.automaticErrorTracking) && (c.mux.listeners[t] = function() {
							var a = {};
							"error" === t && (a.player_error_code = c.error && c.error.code, a.player_error_message = c.error && u[c.error.code]), e.emit(f, t, a)
						}, c.addEventListener(t, c.mux.listeners[t], !1))
					}))) : _.error("No element was found with the `" + f + "` query selector.")
				};
				var n = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(a(1)),
					o = a(9),
					s = ["loadstart", "pause", "play", "playing", "seeking", "seeked", "timeupdate", "ratechange", "stalled", "waiting", "error", "ended"],
					u = {
						1: "MEDIA_ERR_ABORTED",
						2: "MEDIA_ERR_NETWORK",
						3: "MEDIA_ERR_DECODE",
						4: "MEDIA_ERR_SRC_NOT_SUPPORTED"
					}
			}, function(e, t, a) {
				"use strict";

				function r(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				var i = r(a(52)),
					n = r(a(2)),
					o = r(a(53)),
					s = r(a(54)),
					u = r(a(1)),
					d = r(a(8)),
					l = a(5),
					c = r(a(3)),
					f = {};
				f.safeCall = i.default, f.safeIncrement = n.default, f.getComputedStyle = o.default, f.secondsToMs = s.default, f.assign = u.default, f.headersStringToObject = d.default, f.extractHostnameAndDomain = l.extractHostnameAndDomain, f.extractHostname = l.extractHostname, f.now = c.default.now, t.default = f
			}, function(e, t, a) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e, t, a, i) {
					var n = i;
					if (e && "function" == typeof e[t]) try {
						n = e[t].apply(e, a)
					} catch (e) {
						r.default.info("safeCall error", e)
					}
					return n
				};
				var r = function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				}(a(4))
			}, function(e, t, a) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = function(e, t) {
					if (e && t && r.default && "function" == typeof r.default.getComputedStyle) {
						var a = void 0;
						return i && i.has(e) && (a = i.get(e)), a || (a = r.default.getComputedStyle(e, null), i && i.set(e, a)), a.getPropertyValue(t)
					}
				};
				var r = function(e) {
						return e && e.__esModule ? e : {
							default: e
						}
					}(a(0)),
					i = void 0;
				r.default && r.default.WeakMap && (i = new WeakMap)
			}, function(e, t, a) {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MuxEmbed.982b3400754d822142c4.js.map